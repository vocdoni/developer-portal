# Quadratic voting

Quadratic voting is a voting mechanism that allows individuals to express their preferences on different issues with 
more granularity and intensity. In quadratic voting, voters are allocated a fixed number of voting credits, and they can 
distribute those credits across various options or issues in a quadratic manner. This means that voters can assign more 
credits to options they care strongly about while still being able to express preferences on multiple issues.

The quadratic aspect of the system ensures that the cost of allocating additional credits increases quadratically, which 
helps prevent a small number of voters from dominating the decision-making process. Quadratic voting aims to promote a 
more accurate representation of individual preferences and allocate resources based on the collective intensity of 
preferences rather than just a simple majority rule.

See:

- [Complete example](https://github.com/vocdoni/vocdoni-sdk/blob/main/examples/typescript/src/quadratic.ts)
- [Ballot protocol implementation](https://developer.vocdoni.io/protocol/ballot#quadratic-voting)

## Setting up the election

Here we are going to describe how to configure an election to set up a quadratic voting. When the election object is 
created,

```ts
const election_opts: IVoteType = {
  maxValue: 0, // Must be 0 for quadratic elections
  maxCount: CHOICES_LENGTH, // Number of choices for the question
  uniqueChoices: false,
  costFromWeight: true, // This will set that the weight on a weighted census is actually the credits available
  costExponent: 2, // In the context of quadratic voting, this value is usually set to 2
};
```

- The actual Vocdoni implementation only allow quadratic elections with only one question. For that, the `maxCount` 
refers to the choices length for this unique question.  
- `costExponent` define the exponent for quadratic voting calculation. In the context of quadratic voting, this value is 
usually set to 2. This exponent determines the cost of a vote. For example, if a voter assigns 2 credits to an option, 
the cost of that vote would be 2^2 = 4. Look at SDK docs for more info.

### Voter credits

To determine the number of credits each voter can use, the configuration must be defined in one of two ways:

1. Adjusting the `maxTotalCost`, on the election options, and using a `PlainCensus` allows for an equal number of credits to be 
allocated to each voter.

2. Alternatively, by enabling `costFromWeight` and using a `WeightedCensus`, the number of credits available will 
correspond to the voter's weight.

```ts
  const census = new WeightedCensus();
  census.add(
    participants.map((participant, index) => ({
      key: participant.address,
      weight: BigInt(20), // Give 20 credits to every voter
    }))
  );
```

Using this method will enable the possibility to give different number of credits for every voter. 

## Casting a vote

As of now, the [protocol](https://docs.vocdoni.io/architecture/data-schemes/ballot-protocol.html#vocdoni-results-interpretation) 
for quadratic elections only supports single question elections with discrete values. 

Therefore, to cast a vote, you can use the following method:

```ts
client.submitVote(new Vote([2, 3]));
```

This approach calculates the cost of each vote based on the costExponent, for example, allocating 2 votes for option 0 
will consume 4 credits (2^2 = 4 credits) and 3 votes for option 1 will consume 9 credits (3^2 = 9 credits), with a 
total of 13 (4 + 9) credits spent:

The formula (in this case) is like:

```
Votes | Credits
1² = 1
2² = 4
3² = 9
4² = 16
```

## Results interpretation

Let's imagine a scenario where we have 10 voters and each of them casts the same vote `[2, 3]`.

The election results are presented as a bi-dimensional array:

```
[ 
    [ '20' ], [ '30' ] 
]
```

The first array position `[ '20' ]` and the second `[ '30' ]` represent the sum of votes cast for option one and option 
two, respectively. In this instance, each voter assigned two votes to option one and three votes to option two.

Given that there are 10 voters and each voted the same way, the sum of all the votes is as follows:

- For option one `([ '20' ])`: Each of the 10 voters gave two votes, leading to a total of 20 votes.
- For option two `([ '30' ])`: Each voter gave three votes, leading to a total of 30 votes.

Remember, this interpretation assumes that all voters have used the same voting pattern. Moreover, under the 
quadratic voting system, while it is possible to cast more votes for a preferred option, it also becomes exponentially 
more costly to do so, providing a self-balancing mechanism that aims to accurately reflect the strength of voters 
preferences.
