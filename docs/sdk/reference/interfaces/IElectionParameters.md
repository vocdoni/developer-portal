[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / IElectionParameters

# Interface: IElectionParameters

Define election parameters.

## Hierarchy

- **`IElectionParameters`**

  ↳ [`IPublishedElectionParameters`](IPublishedElectionParameters.md)

  ↳ [`IMultiChoiceElectionParameters`](IMultiChoiceElectionParameters.md)

  ↳ [`IBudgetElectionParametersInfo`](IBudgetElectionParametersInfo.md)

  ↳ [`IApprovalElectionParameters`](IApprovalElectionParameters.md)

## Table of contents

### Properties

- [addSDKVersion](IElectionParameters.md#addsdkversion)
- [census](IElectionParameters.md#census)
- [description](IElectionParameters.md#description)
- [electionType](IElectionParameters.md#electiontype)
- [endDate](IElectionParameters.md#enddate)
- [header](IElectionParameters.md#header)
- [maxCensusSize](IElectionParameters.md#maxcensussize)
- [meta](IElectionParameters.md#meta)
- [questions](IElectionParameters.md#questions)
- [startDate](IElectionParameters.md#startdate)
- [streamUri](IElectionParameters.md#streamuri)
- [temporarySecretIdentity](IElectionParameters.md#temporarysecretidentity)
- [title](IElectionParameters.md#title)
- [voteType](IElectionParameters.md#votetype)

## Properties

### addSDKVersion

• `Optional` **addSDKVersion**: `boolean`

Used to add the SDK version to the election metadata

#### Defined in

[types/election/election.ts:155](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L155)

___

### census

• **census**: [`Census`](../classes/Census.md)

#### Defined in

[types/election/election.ts:129](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L129)

___

### description

• `Optional` **description**: `string` \| `MultiLanguage`\<`string`\>

Election description

#### Defined in

[types/election/election.ts:114](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L114)

___

### electionType

• `Optional` **electionType**: [`IElectionType`](IElectionType.md)

#### Defined in

[types/election/election.ts:131](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L131)

___

### endDate

• **endDate**: `string` \| `number` \| `Date`

#### Defined in

[types/election/election.ts:128](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L128)

___

### header

• `Optional` **header**: `string`

Election header image url.

#### Defined in

[types/election/election.ts:118](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L118)

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

#### Defined in

[types/election/election.ts:145](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L145)

___

### meta

• `Optional` **meta**: `any`

Metadata (anything added by the election creator)

#### Defined in

[types/election/election.ts:126](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L126)

___

### questions

• `Optional` **questions**: [`IQuestion`](IQuestion.md)[]

#### Defined in

[types/election/election.ts:132](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L132)

___

### startDate

• `Optional` **startDate**: `string` \| `number` \| `Date`

#### Defined in

[types/election/election.ts:127](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L127)

___

### streamUri

• `Optional` **streamUri**: `string`

Election stream Uri (ex: a video url)

#### Defined in

[types/election/election.ts:122](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L122)

___

### temporarySecretIdentity

• `Optional` **temporarySecretIdentity**: `boolean`

Is used to remove the secret identities of the voters once the process is done.

#### Defined in

[types/election/election.ts:150](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L150)

___

### title

• **title**: `string` \| `MultiLanguage`\<`string`\>

Election title

#### Defined in

[types/election/election.ts:110](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L110)

___

### voteType

• `Optional` **voteType**: [`IVoteType`](IVoteType.md)

#### Defined in

[types/election/election.ts:130](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L130)
