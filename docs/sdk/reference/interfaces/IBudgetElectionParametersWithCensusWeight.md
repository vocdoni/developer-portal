[@vocdoni/sdk](/sdk) / [Exports](../modules) / IBudgetElectionParametersWithCensusWeight

# Interface: IBudgetElectionParametersWithCensusWeight

Define election parameters.

## Hierarchy

- [`IBudgetElectionParametersInfo`](IBudgetElectionParametersInfo)

  ↳ **`IBudgetElectionParametersWithCensusWeight`**

## Table of contents

### Properties

- [addSDKVersion](IBudgetElectionParametersWithCensusWeight#addsdkversion)
- [census](IBudgetElectionParametersWithCensusWeight#census)
- [description](IBudgetElectionParametersWithCensusWeight#description)
- [electionType](IBudgetElectionParametersWithCensusWeight#electiontype)
- [endDate](IBudgetElectionParametersWithCensusWeight#enddate)
- [forceFullBudget](IBudgetElectionParametersWithCensusWeight#forcefullbudget)
- [header](IBudgetElectionParametersWithCensusWeight#header)
- [maxCensusSize](IBudgetElectionParametersWithCensusWeight#maxcensussize)
- [meta](IBudgetElectionParametersWithCensusWeight#meta)
- [minStep](IBudgetElectionParametersWithCensusWeight#minstep)
- [questions](IBudgetElectionParametersWithCensusWeight#questions)
- [startDate](IBudgetElectionParametersWithCensusWeight#startdate)
- [streamUri](IBudgetElectionParametersWithCensusWeight#streamuri)
- [temporarySecretIdentity](IBudgetElectionParametersWithCensusWeight#temporarysecretidentity)
- [title](IBudgetElectionParametersWithCensusWeight#title)
- [useCensusWeightAsBudget](IBudgetElectionParametersWithCensusWeight#usecensusweightasbudget)
- [voteType](IBudgetElectionParametersWithCensusWeight#votetype)

## Properties

### addSDKVersion

• `Optional` **addSDKVersion**: `boolean`

Used to add the SDK version to the election metadata

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[addSDKVersion](IBudgetElectionParametersInfo#addsdkversion)

#### Defined in

[types/election/election.ts:155](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L155)

___

### census

• **census**: [`Census`](../classes/Census)

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[census](IBudgetElectionParametersInfo#census)

#### Defined in

[types/election/election.ts:129](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L129)

___

### description

• `Optional` **description**: `string` \| `MultiLanguage`\<`string`\>

Election description

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[description](IBudgetElectionParametersInfo#description)

#### Defined in

[types/election/election.ts:114](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L114)

___

### electionType

• `Optional` **electionType**: [`IElectionType`](IElectionType)

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[electionType](IBudgetElectionParametersInfo#electiontype)

#### Defined in

[types/election/election.ts:131](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L131)

___

### endDate

• **endDate**: `string` \| `number` \| `Date`

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[endDate](IBudgetElectionParametersInfo#enddate)

#### Defined in

[types/election/election.ts:128](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L128)

___

### forceFullBudget

• `Optional` **forceFullBudget**: `boolean`

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[forceFullBudget](IBudgetElectionParametersInfo#forcefullbudget)

#### Defined in

[types/election/budget.ts:9](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/budget.ts#L9)

___

### header

• `Optional` **header**: `string`

Election header image url.

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[header](IBudgetElectionParametersInfo#header)

#### Defined in

[types/election/election.ts:118](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L118)

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

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[maxCensusSize](IBudgetElectionParametersInfo#maxcensussize)

#### Defined in

[types/election/election.ts:145](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L145)

___

### meta

• `Optional` **meta**: `any`

Metadata (anything added by the election creator)

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[meta](IBudgetElectionParametersInfo#meta)

#### Defined in

[types/election/election.ts:126](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L126)

___

### minStep

• `Optional` **minStep**: `number`

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[minStep](IBudgetElectionParametersInfo#minstep)

#### Defined in

[types/election/budget.ts:8](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/budget.ts#L8)

___

### questions

• `Optional` **questions**: [`IQuestion`](IQuestion)[]

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[questions](IBudgetElectionParametersInfo#questions)

#### Defined in

[types/election/election.ts:132](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L132)

___

### startDate

• `Optional` **startDate**: `string` \| `number` \| `Date`

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[startDate](IBudgetElectionParametersInfo#startdate)

#### Defined in

[types/election/election.ts:127](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L127)

___

### streamUri

• `Optional` **streamUri**: `string`

Election stream Uri (ex: a video url)

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[streamUri](IBudgetElectionParametersInfo#streamuri)

#### Defined in

[types/election/election.ts:122](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L122)

___

### temporarySecretIdentity

• `Optional` **temporarySecretIdentity**: `boolean`

Is used to remove the secret identities of the voters once the process is done.

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[temporarySecretIdentity](IBudgetElectionParametersInfo#temporarysecretidentity)

#### Defined in

[types/election/election.ts:150](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L150)

___

### title

• **title**: `string` \| `MultiLanguage`\<`string`\>

Election title

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[title](IBudgetElectionParametersInfo#title)

#### Defined in

[types/election/election.ts:110](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L110)

___

### useCensusWeightAsBudget

• **useCensusWeightAsBudget**: ``true``

#### Defined in

[types/election/budget.ts:13](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/budget.ts#L13)

___

### voteType

• `Optional` **voteType**: [`IVoteType`](IVoteType)

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[voteType](IBudgetElectionParametersInfo#votetype)

#### Defined in

[types/election/election.ts:130](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L130)
