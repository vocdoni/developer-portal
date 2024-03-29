---
sidebar_position: 3
slug: ranked
---

# Ranked Voting

Ranked voting, also known as preferential voting or ranked-choice voting (RCV), is an electoral system where voters rank 
candidates in order of preference on the ballot. This system allows voters to express not only their first-choice 
candidate but also their second, third, and subsequent choices. In the counting process, candidates with the fewest 
votes are eliminated, and their supporters' votes are redistributed to the remaining candidates based on the next-ranked 
choices. This process continues until one candidate receives a majority of the votes, ensuring that the winner has the 
broadest support among the electorate.

Ranked voting aims to provide a more inclusive and representative outcome, mitigate vote splitting and strategic voting, 
and encourage candidates to appeal to a wider range of voters.

For example: Sort your 5 favorite blockchains: Bitcoin, Ethereum, Monero, Zcash, Polkadot.

See:

- [Complete example](https://github.com/vocdoni/vocdoni-sdk/blob/main/examples/typescript/src/ranked.ts)
- [Ballot protocol implementation][protocol-ranked]

## Setting up the election

The configuration of the vote type for the election should be set as follows:

```ts
const election_opts: IVoteType = {
    uniqueChoices: true, 
    costFromWeight: false,
    maxCount: 5, // Represents the number of choices for the given question.
    maxValue: 4, // Maximum value for a single choice. If voters can rate options on a scale of 0 to 3, then `MAX_VALUE` should be set to `4`.
    maxTotalCost: 0,
}
```


This configuration could, for example, allow voters to rank their top 5 preferred blockchains: "Bitcoin:0, Ethereum:1, Monero:2, Zcash:3, Polkadot:4"

:::danger Multiple questions not supported
**This election type not support multiple questions**: the current Vocdoni implementation restricts this kind of elections to a single question. To create an election with multiple questions check [multi question election][multi-question]
:::

## Casting a vote

A vote can be cast using the method below:

```ts
client.submitVote(new Vote([2, 3, 0, 1, 4]));
```

Each entry in the array corresponds to a choice in the election, and the value assigned to each entry represents the
voter's rating for that choice. The length of this array should match the total number of choices in the election 
(`maxCount`), and the value assigned to each entry should not exceed `maxValue`.

With the vote array `[2, 3, 0, 1, 4]`, it means:

- Choice `1` is ranked as the `3nd` option
- Choice `2` is ranked as the `4rd` option
- Choice `3` is ranked as the `1st` option
- Choice `4` is ranked as the `2nd` option
- Choice `5` is ranked as the `5th` option

## Results interpretation

Consider a scenario where 10 voters cast identical votes, i.e., `[2, 3, 0, 1, 4]`.

The election results would be represented as a two-dimensional array:

```
 [
   [ '0', '0', '10', '0', '0' ],
   [ '0', '0', '0', '10', '0' ],
   [ '10', '0', '0', '0', '0' ],
   [ '0', '10', '0', '0', '0' ],
   [ '0', '0', '0', '0', '10' ]
 ]
```

Each position in the outer array corresponds to the available choices, as in the previous example: "Bitcoin:0, 
Ethereum:1, Monero:2, Zcash:3, Polkadot:4".

Every position within the inner arrays indicates how many voters selected the corresponding choice for a specific 
ranking:

- Choice `0` (Bitcoin) was selected as the `2nd` option by all 10 voters
- Choice `1` (Ethereum) was selected as the `3rd` option by all 10 voters
- Choice `2` (Monero) was selected as the `1st` option by all 10 voters
- Choice `3` (Zcash) was selected as the `2nd` option by all 10 voters
- Choice `4` (Polkadot) was selected as the `5th` option by all 10 voters

Remember, this interpretation assumes that all voters have used the same voting pattern.


[protocol-ranked]: /protocol/ballot-protocol#linear-weighted-choice
[multi-question]: /protocol/ballot-protocol#multiquestion
