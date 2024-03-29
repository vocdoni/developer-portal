---
sidebar_position: 5
slug: weighted
---

# Weighted voting

Weighted voting is a voting system where each voter is assigned a specific weight or value that reflects their relative influence or importance in the decision-making process.

When votes are cast, the value of each individual’s vote is multiplied by their assigned weight, resulting in a weighted score. The sum of all the weighted scores determines the outcome of the vote. This system allows for a more nuanced 
representation of voting power and can reflect the hierarchical structure or distribution of authority within the 
organization.


## Setting up the election

The process creation and use of the ballot protocol is the same as on any other Election, the key difference is the
use of a `WeightedCensus` instead of a `PlainCensus`.

:::tip Where can I use a WeightedCensus?

Essentially, you can use the `WeightedCensus` for any vote type except quadratic voting.

Note that `quadratic voting` already uses a `WeightedCensus` but for other purposes. On a `quadratic election` the
weighted census are used to set the available credits for every voter when the option `costFromWeight` is set to `true`.

:::

The votes are stored on the blockchain with its weight like any other voting process. When the results are retrieved
from the API, the indexer applies the weight to every vote, and this reflects in the results matrix.

### Creating a `WeightedCensus`

Following de above example, we are going to create a census where the weight is related to the position of the voter on 
the participants array.

The process of generate a `WeightedCensus` is similar to create a `PlainCensus` with the difference that you have to
add the vote weight to every participant. As shown below, we are giving to each voter a weight associated to its
position on an array. For 4 voters, the first one will have a weight of 1, and the last will have 4.

```ts
  const census = new WeightedCensus();
  census.add(
    participants.map((participant, index) => ({
      key: participant.address,
      weight: BigInt(index + 1), // Give the weight to each participant
    }))
  );
```

## Casting a vote

For instance, consider that 4 voters have to vote on the question: "Do you like chocolate?" with possible answers "yes" and "no".
The weight distribution and votes are as follows:

- Voter 1: Weight = 1, Votes for option 0 (no), hence adds 1 vote.
- Voter 2: Weight = 2, Votes for option 1 (yes), hence adds 2 votes.
- Voter 3: Weight = 3, Votes for option 0 (no), hence adds 3 votes.
- Voter 4: Weight = 4, Votes for option 1 (yes), hence adds 4 votes.

The total census weight is `1 + 2 + 3 + 4 = 10` and will be distributed among the choices.

The related code could be something like:

```ts
client.submitVote(new Vote([participantIndex % 2]));
```

## Results interpretation

The results from a weighted voting process are returned by the API as an array, which encapsulates the sum of the 
weighted votes cast for each choice. In the given example, the API will return the following array:

```
[ [ '4', '6' ] ]
```

In this type of election, where there's only one question with two possible choices, the array represents the summed 
weights of votes for each option. Here, each index in the array corresponds to an option from the voting question.

The value at each index is the total of weighted votes that the corresponding option received. For the first option (no), 
the total weighted votes are `1 (from voter 1) + 3 (from voter 3) = 4`, hence '4' at the first index of the array.

For the second option (yes), the total weighted votes are `2 (from voter 2) + 4 (from voter 4) = 6`, thus '6' at the 
second index.

The array `[ [ '4', '6' ] ]` encapsulates this result, which can be interpreted as "4 weighted votes for 'no' and 6 
weighted votes for 'yes'".

:::tip
In a weighted election, the Vochain stores the envelope without calculating the weight of each voter. However, when 
retrieving the results using the SDK, you will see the weights applied. The application of these weights is performed 
by the vocdoni-node indexer, which calculates the weights for you.

The weights of each vote are stored in the envelope, which is saved on the Vochain.
:::