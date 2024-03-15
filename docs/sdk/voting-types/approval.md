---
sidebar_position: 4
slug: approval
---


#  Approval Voting (Multiple Choice)

An election with Approval voting is a voting system where voters are allowed to indicate their support for multiple 
candidates or options on the ballot. Instead of selecting just one preferred choice, voters can approve or "check" off 
all the candidates they deem acceptable or worthy of their support.

Approval voting does not involve ranking or prioritizing candidates; it simply allows voters to express their approval 
for multiple choices. This system aims to provide a more nuanced representation of voter preferences and can encourage 
candidates to appeal to a broader range of voters.

For example: select your two favourite colors from a list of 4.

See:

- [Complete example](https://github.com/vocdoni/vocdoni-sdk/blob/main/examples/typescript/src/approval.ts)
- [Ballot protocol implementation][protocol-approval]

## Setting up the election

The configuration of the vote type for the election should be set as follows:

```ts
const election_opts: IVoteType = {
    uniqueChoices: false,
    costFromWeight: false,
    maxCount: 4, // Correspond to the number of choices of the given question.
    maxValue: 1, // Determines the maximum value that can be assigned to a single choice.
    maxTotalCost: 2, // Set the maximum number of choices a user can select. 
}
```

In this election type, a voter can cast a vote for option, hence `maxValue` must be set to `1`. Also, the `maxTotalCost` 
is used to define the maximum number of selectable choices.

:::danger Multiple questions not supported
**This election type not support multiple questions**: the current Vocdoni implementation restricts this kind of elections to a single question. To create an election with multiple questions check [multi question election][multi-question]
:::

## Casting a vote

To cast a vote, use the method below:

```ts
client.submitVote(new Vote([0, 1, 0, 1]));
```

Each entry in the array corresponds to a selected choice in the election, with the value assigned to each entry set to 1, 
as per `maxValue`. `maxTotalCost` defines the maximum number of choices a voter can select. The array's length should 
match the total number of choices in the election (`maxCount`).

## Results interpretation

Assume a scenario where ten voters cast identical votes, i.e. `[0, 1, 0, 1]`.

The election results would be represented as a two-dimensional array:

```
[ 
    [ '10', '0' ], 
    [ '0', '10' ], 
    [ '10', '0' ], 
    [ '0', '10' ] 
]
```

Each position in the outer array corresponds to the available choices, and each position within the inner arrays 
signifies the number of voters who selected or did not select the corresponding choice. For example, `[10, 0]` indicates
ten users did not select the choice, whereas `[0, 10]` means that ten users voted for the choice. So:

- For choice `0`, all 10 voters assigned it `0` points,
- For choice `1`, all 10 voters assigned it `1` point,
- For choice `2`, all 10 voters assigned it `0` points, and
- For choice `3`, all 10 voters assigned it `1` point.

Remember, this interpretation assumes that all voters have used the same voting pattern.

[protocol-approval]: /protocol/ballot-protocol#multiple-choice
[multi-question]: /protocol/ballot-protocol#multiquestion