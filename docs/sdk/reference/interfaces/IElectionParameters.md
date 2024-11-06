[@vocdoni/sdk](/sdk) / IElectionParameters

# Interface: IElectionParameters

Define election parameters.

## Hierarchy

- **`IElectionParameters`**

  ↳ [`IPublishedElectionParameters`](IPublishedElectionParameters)

  ↳ [`IMultiChoiceElectionParameters`](IMultiChoiceElectionParameters)

  ↳ [`IBudgetElectionParametersInfo`](IBudgetElectionParametersInfo)

  ↳ [`IApprovalElectionParameters`](IApprovalElectionParameters)

## Table of contents

### Properties

- [addSDKVersion](IElectionParameters#addsdkversion)
- [census](IElectionParameters#census)
- [description](IElectionParameters#description)
- [electionType](IElectionParameters#electiontype)
- [endDate](IElectionParameters#enddate)
- [header](IElectionParameters#header)
- [maxCensusSize](IElectionParameters#maxcensussize)
- [meta](IElectionParameters#meta)
- [questions](IElectionParameters#questions)
- [startDate](IElectionParameters#startdate)
- [streamUri](IElectionParameters#streamuri)
- [temporarySecretIdentity](IElectionParameters#temporarysecretidentity)
- [title](IElectionParameters#title)
- [voteType](IElectionParameters#votetype)

## Properties

### addSDKVersion

• `Optional` **addSDKVersion**: `boolean`

Used to add the SDK version to the election metadata

#### Defined in

[src/types/election/election.ts:164](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L164)

___

### census

• **census**: [`Census`](../classes/Census)

#### Defined in

[src/types/election/election.ts:138](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L138)

___

### description

• `Optional` **description**: `string` \| `MultiLanguage`\<`string`\>

Election description

#### Defined in

[src/types/election/election.ts:123](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L123)

___

### electionType

• `Optional` **electionType**: [`IElectionType`](IElectionType)

#### Defined in

[src/types/election/election.ts:140](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L140)

___

### endDate

• **endDate**: `string` \| `number` \| `Date`

#### Defined in

[src/types/election/election.ts:137](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L137)

___

### header

• `Optional` **header**: `string`

Election header image url.

#### Defined in

[src/types/election/election.ts:127](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L127)

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

[src/types/election/election.ts:154](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L154)

___

### meta

• `Optional` **meta**: `any`

Metadata (anything added by the election creator)

#### Defined in

[src/types/election/election.ts:135](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L135)

___

### questions

• `Optional` **questions**: [`IQuestion`](IQuestion)[]

#### Defined in

[src/types/election/election.ts:141](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L141)

___

### startDate

• `Optional` **startDate**: `string` \| `number` \| `Date`

#### Defined in

[src/types/election/election.ts:136](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L136)

___

### streamUri

• `Optional` **streamUri**: `string`

Election stream Uri (ex: a video url)

#### Defined in

[src/types/election/election.ts:131](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L131)

___

### temporarySecretIdentity

• `Optional` **temporarySecretIdentity**: `boolean`

Is used to remove the secret identities of the voters once the process is done.

#### Defined in

[src/types/election/election.ts:159](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L159)

___

### title

• **title**: `string` \| `MultiLanguage`\<`string`\>

Election title

#### Defined in

[src/types/election/election.ts:119](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L119)

___

### voteType

• `Optional` **voteType**: [`IVoteType`](IVoteType)

#### Defined in

[src/types/election/election.ts:139](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L139)
