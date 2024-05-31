[@vocdoni/sdk](/sdk) / IBudgetElectionParametersWithBudget

# Interface: IBudgetElectionParametersWithBudget

Define election parameters.

## Hierarchy

- [`IBudgetElectionParametersInfo`](IBudgetElectionParametersInfo)

  ↳ **`IBudgetElectionParametersWithBudget`**

## Table of contents

### Properties

- [addSDKVersion](IBudgetElectionParametersWithBudget#addsdkversion)
- [census](IBudgetElectionParametersWithBudget#census)
- [description](IBudgetElectionParametersWithBudget#description)
- [electionType](IBudgetElectionParametersWithBudget#electiontype)
- [endDate](IBudgetElectionParametersWithBudget#enddate)
- [forceFullBudget](IBudgetElectionParametersWithBudget#forcefullbudget)
- [header](IBudgetElectionParametersWithBudget#header)
- [maxBudget](IBudgetElectionParametersWithBudget#maxbudget)
- [maxCensusSize](IBudgetElectionParametersWithBudget#maxcensussize)
- [meta](IBudgetElectionParametersWithBudget#meta)
- [minStep](IBudgetElectionParametersWithBudget#minstep)
- [questions](IBudgetElectionParametersWithBudget#questions)
- [startDate](IBudgetElectionParametersWithBudget#startdate)
- [streamUri](IBudgetElectionParametersWithBudget#streamuri)
- [temporarySecretIdentity](IBudgetElectionParametersWithBudget#temporarysecretidentity)
- [title](IBudgetElectionParametersWithBudget#title)
- [useCensusWeightAsBudget](IBudgetElectionParametersWithBudget#usecensusweightasbudget)
- [voteType](IBudgetElectionParametersWithBudget#votetype)

## Properties

### addSDKVersion

• `Optional` **addSDKVersion**: `boolean`

Used to add the SDK version to the election metadata

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[addSDKVersion](IBudgetElectionParametersInfo#addsdkversion)

#### Defined in

[types/election/election.ts:168](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/election.ts#L168)

___

### census

• **census**: [`Census`](../classes/Census)

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[census](IBudgetElectionParametersInfo#census)

#### Defined in

[types/election/election.ts:142](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/election.ts#L142)

___

### description

• `Optional` **description**: `string` \| `MultiLanguage`\<`string`\>

Election description

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[description](IBudgetElectionParametersInfo#description)

#### Defined in

[types/election/election.ts:127](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/election.ts#L127)

___

### electionType

• `Optional` **electionType**: [`IElectionType`](IElectionType)

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[electionType](IBudgetElectionParametersInfo#electiontype)

#### Defined in

[types/election/election.ts:144](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/election.ts#L144)

___

### endDate

• **endDate**: `string` \| `number` \| `Date`

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[endDate](IBudgetElectionParametersInfo#enddate)

#### Defined in

[types/election/election.ts:141](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/election.ts#L141)

___

### forceFullBudget

• `Optional` **forceFullBudget**: `boolean`

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[forceFullBudget](IBudgetElectionParametersInfo#forcefullbudget)

#### Defined in

[types/election/budget.ts:9](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/budget.ts#L9)

___

### header

• `Optional` **header**: `string`

Election header image url.

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[header](IBudgetElectionParametersInfo#header)

#### Defined in

[types/election/election.ts:131](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/election.ts#L131)

___

### maxBudget

• **maxBudget**: `number`

#### Defined in

[types/election/budget.ts:18](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/budget.ts#L18)

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

[types/election/election.ts:158](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/election.ts#L158)

___

### meta

• `Optional` **meta**: `any`

Metadata (anything added by the election creator)

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[meta](IBudgetElectionParametersInfo#meta)

#### Defined in

[types/election/election.ts:139](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/election.ts#L139)

___

### minStep

• `Optional` **minStep**: `number`

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[minStep](IBudgetElectionParametersInfo#minstep)

#### Defined in

[types/election/budget.ts:8](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/budget.ts#L8)

___

### questions

• `Optional` **questions**: [`IQuestion`](IQuestion)[]

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[questions](IBudgetElectionParametersInfo#questions)

#### Defined in

[types/election/election.ts:145](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/election.ts#L145)

___

### startDate

• `Optional` **startDate**: `string` \| `number` \| `Date`

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[startDate](IBudgetElectionParametersInfo#startdate)

#### Defined in

[types/election/election.ts:140](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/election.ts#L140)

___

### streamUri

• `Optional` **streamUri**: `string`

Election stream Uri (ex: a video url)

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[streamUri](IBudgetElectionParametersInfo#streamuri)

#### Defined in

[types/election/election.ts:135](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/election.ts#L135)

___

### temporarySecretIdentity

• `Optional` **temporarySecretIdentity**: `boolean`

Is used to remove the secret identities of the voters once the process is done.

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[temporarySecretIdentity](IBudgetElectionParametersInfo#temporarysecretidentity)

#### Defined in

[types/election/election.ts:163](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/election.ts#L163)

___

### title

• **title**: `string` \| `MultiLanguage`\<`string`\>

Election title

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[title](IBudgetElectionParametersInfo#title)

#### Defined in

[types/election/election.ts:123](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/election.ts#L123)

___

### useCensusWeightAsBudget

• **useCensusWeightAsBudget**: ``false``

#### Defined in

[types/election/budget.ts:17](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/budget.ts#L17)

___

### voteType

• `Optional` **voteType**: [`IVoteType`](IVoteType)

#### Inherited from

[IBudgetElectionParametersInfo](IBudgetElectionParametersInfo.md).[voteType](IBudgetElectionParametersInfo#votetype)

#### Defined in

[types/election/election.ts:143](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/election.ts#L143)
