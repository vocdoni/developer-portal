[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / IVoteType

# Interface: IVoteType

## Table of contents

### Properties

- [costExponent](IVoteType.md#costexponent)
- [costFromWeight](IVoteType.md#costfromweight)
- [maxCount](IVoteType.md#maxcount)
- [maxTotalCost](IVoteType.md#maxtotalcost)
- [maxValue](IVoteType.md#maxvalue)
- [maxVoteOverwrites](IVoteType.md#maxvoteoverwrites)
- [uniqueChoices](IVoteType.md#uniquechoices)

## Properties

### costExponent

• `Optional` **costExponent**: `number`

Defines the `costExponent`, which is used in the computation of the total "cost" of the voted options.
This total cost is later compared against `maxTotalCost`.

The formula used to calculate the total cost is:
totalCost = Σ (value[i] ^ costExponent) <= maxTotalCost

To establish a quadratic voting election, the `costExponent` must be set to 2. As an illustration, consider a vote
array of `[3,4]` where:
- `3` represents the credits assigned to option 0,
- `4` represents the credits given to option 1.

The total credits spent are calculated as:

```
3^2 = 9 (Credits for option 0)
4^2 = 16 (Credits for option 1)
Total = 25 (Total credits spent)
```

The total credits available for spending (i.e., `maxTotalCost`) can be set in two ways during the election creation:
- By explicitly defining the `maxTotalCost` parameter to set up same amount of credits for each voter,
- By setting the `costFromWeight` parameter to `true` and using a weighted census. In this method, the weight
assigned to each voter determines the credits they have available for voting.

#### Defined in

[types/election/election.ts:46](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L46)

___

### costFromWeight

• `Optional` **costFromWeight**: `boolean`

For weighted census, the user's balance will be used as the `maxCost`. This allows splitting the voting power among
several choices, even including quadratic voting scenarios.

#### Defined in

[types/election/election.ts:20](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L20)

___

### maxCount

• `Optional` **maxCount**: `number`

Determines the maximum count or number of votes that can be cast across all fields.
The default value corresponds to the total number of questions available in the voting process.

For elections involving multiple questions (multiquestion elections), this value should be equivalent to the total
number of questions. In contrast, for elections that don't involve multiple questions (non-multiquestion elections),
this value should match the total number of choices available for voting.

#### Defined in

[types/election/election.ts:62](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L62)

___

### maxTotalCost

• `Optional` **maxTotalCost**: `number`

Specifies the maximum limit on the total sum of all ballot fields' values, if applicable.
For instance, if the vote array is `[0,0,3,2]`, the `maxTotalCost` should be set to `3`.

A value of 0 implies no maximum limit or that this parameter is not applicable in the current voting context.

#### Defined in

[types/election/election.ts:69](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L69)

___

### maxValue

• `Optional` **maxValue**: `number`

Defines the maximum acceptable value for all fields in the voting process.
By default, this value corresponds to the total number of choices available in a question.

In the context of a quadratic voting system, this value should typically be set to 0.

#### Defined in

[types/election/election.ts:53](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L53)

___

### maxVoteOverwrites

• `Optional` **maxVoteOverwrites**: `number`

The number of times a voter con overwrite its vote (change vote option).

#### Defined in

[types/election/election.ts:15](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L15)

___

### uniqueChoices

• `Optional` **uniqueChoices**: `boolean`

Voter can only select one answer for question

#### Defined in

[types/election/election.ts:11](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L11)
