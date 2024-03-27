---
slug: single-choice
sidebar_position: 2
---

# Single Choice Voting

An election with a single-choice result, also known as First-past-the-post voting (FPTP or FPP) or informally called
choose-one voting, is a voting system where each voter is typically allowed to cast only one vote for their preferred
option or candidate. The option or candidate with the most votes wins the election.

This voting system is considered one of the simplest, as a single-choice election involves selecting a single winner,
and voters can mark only one option from the list of choices or candidates. However, despite its widespread use and
simplicity, it has some drawbacks. Since it operates on a "winner-take-all" principle, it can lead to disproportionate
outcomes (the candidate/option with the most votes secures victory, even if their margin of victory is slim).

:::info

This voting system supports **one** or **multiple questions**.

:::

See:

- [Complete example](https://github.com/vocdoni/vocdoni-sdk/blob/main/examples/typescript/src/index.ts)
- [Ballot protocol implementation][protocol-single-choice]

## Setting up the election

To establish this kind of election, you can utilize the default parameters:

```ts
const election = Election.from({
  census,
  title: 'Do you like chocolate?',
  description: 'A simple survey to assess chocolate preferences',
})
```

After creating the election and before publishing, add the questions, ensuring each choice has a distinct value:

```ts
election.addQuestion('Do you like chocolate without milk?', 'This is the description', [
  {
    title: 'Yes',
    value: 0,
  },
  {
    title: 'No',
    value: 1,
  },
]).addQuestion('Do you like chocolate with milk', 'This is the description', [
  {
    title: 'Yes',
    value: 0,
  },
  {
    title: 'No',
    value: 1,
  },
  {
    title: 'Not  always',
    value: 2,
  },
])
```

:::info About choices values

Take note that the question values  are **incremental** and the initial value **must** be 0

:::

:::caution Not all elections type supports multiple questions!

This is the sole type of election that supports multiple questions. Other election types, such as `ranked`, `quadratic`,
etc, **only support one question per election**.

:::

To restrict the maximum number of questions or values an election can contain, adjust the `maxCount` and
`maxValue` parameters in `voteOpts`:

```ts
const election_opts: IVoteType = {
    maxCount: 2, // Represents the max number of questions
    maxValue: 3, // Represents the max number of choices for a given question.
}
const election = Election.from({
  census,
  election_opts,
  //...
})
````

## Casting a vote

Votes can be submitted using the method below:

```ts
client.submitVote(new Vote([0, 2]));
```

Each position in the vote array corresponds to a question, and the value is the associated selected choice. In this
instance, we select the first choice for the first question and the third choice for the second.

:::info Single question vote

For single question is same philosophy, you could configure the election as:

```ts
// If you want to restrict the election creation
// ...
    maxCount: 1, // Only one question
    maxValue: 3, // That accepts three choices
// ...
// And finally casting the vote
client.submitVote(new Vote([2])); // Voting the third option
```

:::

## Results interpretation

Consider a scenario where 10 voters cast identical votes, i.e., `[0, 2]`.

The election results would be represented as a two-dimensional array:

```
 [
   [ '10', '0', '0' ],
   [ '0', '0', '10' ]
 ]
```

Each sub-array signifies the results for a question, and each position of the sub-array indicates the number of votes a
choice has accumulated.

- For the first question (`[ '10', '0', '0' ]`): all 10 voters chose the first option.
- For the second question (`[ '0', '0', '10' ]`): all 10 voters chose the third option.

In the example above, the first question offers two options, and the second presents three. However, the results array
for the first question contains three elements, as the `maxValue` for all questions is the same (in this case, 3, the
`maxValue` of the question with the most options).

:::info Single question results interpretation

Not so different, the results array will look like:

```
[ [ '0', '0', '10' ] ]
```

For the only one question, 10 voters select the third option

:::

[protocol-single-choice]: /protocol/ballot-protocol#single-choice