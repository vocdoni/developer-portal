[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / IBudgetElectionParametersWithCensusWeight

# Interface: IBudgetElectionParametersWithCensusWeight

Define election parameters.

## Hierarchy

- [`IBudgetElectionParametersInfo`](IBudgetElectionParametersInfo.md)

  ↳ **`IBudgetElectionParametersWithCensusWeight`**

## Table of contents

### Properties

- [addSDKVersion](IBudgetElectionParametersWithCensusWeight.md#addsdkversion)
- [census](IBudgetElectionParametersWithCensusWeight.md#census)
- [description](IBudgetElectionParametersWithCensusWeight.md#description)
- [electionType](IBudgetElectionParametersWithCensusWeight.md#electiontype)
- [endDate](IBudgetElectionParametersWithCensusWeight.md#enddate)
- [forceFullBudget](IBudgetElectionParametersWithCensusWeight.md#forcefullbudget)
- [header](IBudgetElectionParametersWithCensusWeight.md#header)
- [maxCensusSize](IBudgetElectionParametersWithCensusWeight.md#maxcensussize)
- [meta](IBudgetElectionParametersWithCensusWeight.md#meta)
- [minStep](IBudgetElectionParametersWithCensusWeight.md#minstep)
- [questions](IBudgetElectionParametersWithCensusWeight.md#questions)
- [startDate](IBudgetElectionParametersWithCensusWeight.md#startdate)
- [streamUri](IBudgetElectionParametersWithCensusWeight.md#streamuri)
- [temporarySecretIdentity](IBudgetElectionParametersWithCensusWeight.md#temporarysecretidentity)
- [title](IBudgetElectionParametersWithCensusWeight.md#title)
- [useCensusWeightAsBudget](IBudgetElectionParametersWithCensusWeight.md#usecensusweightasbudget)
- [voteType](IBudgetElectionParametersWithCensusWeight.md#votetype)

## Properties

### addSDKVersion

• `Optional` **addSDKVersion**: `boolean`

Used to add the SDK version to the election metadata

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[addSDKVersion](IBudgetElectionParametersInfo.md#addsdkversion)

#### Defined in

[types/election/election.ts:155](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L155)

___

### census

• **census**: [`Census`](../classes/Census.md)

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[census](IBudgetElectionParametersInfo.md#census)

#### Defined in

[types/election/election.ts:129](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L129)

___

### description

• `Optional` **description**: `string` \| `MultiLanguage`\<`string`\>

Election description

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[description](IBudgetElectionParametersInfo.md#description)

#### Defined in

[types/election/election.ts:114](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L114)

___

### electionType

• `Optional` **electionType**: [`IElectionType`](IElectionType.md)

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[electionType](IBudgetElectionParametersInfo.md#electiontype)

#### Defined in

[types/election/election.ts:131](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L131)

___

### endDate

• **endDate**: `string` \| `number` \| `Date`

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[endDate](IBudgetElectionParametersInfo.md#enddate)

#### Defined in

[types/election/election.ts:128](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L128)

___

### forceFullBudget

• `Optional` **forceFullBudget**: `boolean`

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[forceFullBudget](IBudgetElectionParametersInfo.md#forcefullbudget)

#### Defined in

[types/election/budget.ts:9](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/budget.ts#L9)

___

### header

• `Optional` **header**: `string`

Election header image url.

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[header](IBudgetElectionParametersInfo.md#header)

#### Defined in

[types/election/election.ts:118](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L118)

___

### maxCensusSize

• `Optional` **maxCensusSize**: `number`

Is used to limit the number of votes that can be registered for an election. This feature helps to prevent any
potential overflow of the blockchain when the number of votes goes beyond the maximum limit.

In order to create an election, the creator is required to set the MaxCensusSize parameter to a proper value.
Typically, this value should be equal to the size of the census. If the MaxCensusSize parameter is set to 0, an
error will occur and the election cannot be created.

If the number of votes exceeds this limit, will throw `Max census size for the election is greater than allowed
size` error.

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[maxCensusSize](IBudgetElectionParametersInfo.md#maxcensussize)

#### Defined in

[types/election/election.ts:145](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L145)

___

### meta

• `Optional` **meta**: `any`

Metadata (anything added by the election creator)

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[meta](IBudgetElectionParametersInfo.md#meta)

#### Defined in

[types/election/election.ts:126](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L126)

___

### minStep

• `Optional` **minStep**: `number`

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[minStep](IBudgetElectionParametersInfo.md#minstep)

#### Defined in

[types/election/budget.ts:8](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/budget.ts#L8)

___

### questions

• `Optional` **questions**: [`IQuestion`](IQuestion.md)[]

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[questions](IBudgetElectionParametersInfo.md#questions)

#### Defined in

[types/election/election.ts:132](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L132)

___

### startDate

• `Optional` **startDate**: `string` \| `number` \| `Date`

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[startDate](IBudgetElectionParametersInfo.md#startdate)

#### Defined in

[types/election/election.ts:127](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L127)

___

### streamUri

• `Optional` **streamUri**: `string`

Election stream Uri (ex: a video url)

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[streamUri](IBudgetElectionParametersInfo.md#streamuri)

#### Defined in

[types/election/election.ts:122](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L122)

___

### temporarySecretIdentity

• `Optional` **temporarySecretIdentity**: `boolean`

Is used to remove the secret identities of the voters once the process is done.

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[temporarySecretIdentity](IBudgetElectionParametersInfo.md#temporarysecretidentity)

#### Defined in

[types/election/election.ts:150](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L150)

___

### title

• **title**: `string` \| `MultiLanguage`\<`string`\>

Election title

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[title](IBudgetElectionParametersInfo.md#title)

#### Defined in

[types/election/election.ts:110](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L110)

___

### useCensusWeightAsBudget

• **useCensusWeightAsBudget**: ``true``

#### Defined in

[types/election/budget.ts:13](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/budget.ts#L13)

___

### voteType

• `Optional` **voteType**: [`IVoteType`](IVoteType.md)

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[voteType](IBudgetElectionParametersInfo.md#votetype)

#### Defined in

[types/election/election.ts:130](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L130)
