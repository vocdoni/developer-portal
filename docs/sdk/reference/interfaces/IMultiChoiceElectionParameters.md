[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / IMultiChoiceElectionParameters

# Interface: IMultiChoiceElectionParameters

Define election parameters.

## Hierarchy

- [`IElectionParameters`](IElectionParameters.md)

  ↳ **`IMultiChoiceElectionParameters`**

## Table of contents

### Properties

- [addSDKVersion](IMultiChoiceElectionParameters.md#addsdkversion)
- [canAbstain](IMultiChoiceElectionParameters.md#canabstain)
- [canRepeatChoices](IMultiChoiceElectionParameters.md#canrepeatchoices)
- [census](IMultiChoiceElectionParameters.md#census)
- [description](IMultiChoiceElectionParameters.md#description)
- [electionType](IMultiChoiceElectionParameters.md#electiontype)
- [endDate](IMultiChoiceElectionParameters.md#enddate)
- [header](IMultiChoiceElectionParameters.md#header)
- [maxCensusSize](IMultiChoiceElectionParameters.md#maxcensussize)
- [maxNumberOfChoices](IMultiChoiceElectionParameters.md#maxnumberofchoices)
- [meta](IMultiChoiceElectionParameters.md#meta)
- [questions](IMultiChoiceElectionParameters.md#questions)
- [startDate](IMultiChoiceElectionParameters.md#startdate)
- [streamUri](IMultiChoiceElectionParameters.md#streamuri)
- [temporarySecretIdentity](IMultiChoiceElectionParameters.md#temporarysecretidentity)
- [title](IMultiChoiceElectionParameters.md#title)
- [voteType](IMultiChoiceElectionParameters.md#votetype)

## Properties

### addSDKVersion

• `Optional` **addSDKVersion**: `boolean`

Used to add the SDK version to the election metadata

#### Inherited from

[IElectionParameters](IElectionParameters.md).[addSDKVersion](IElectionParameters.md#addsdkversion)

#### Defined in

[types/election/election.ts:155](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L155)

___

### canAbstain

• `Optional` **canAbstain**: `boolean`

#### Defined in

[types/election/multichoice.ts:10](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/multichoice.ts#L10)

___

### canRepeatChoices

• `Optional` **canRepeatChoices**: `boolean`

#### Defined in

[types/election/multichoice.ts:9](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/multichoice.ts#L9)

___

### census

• **census**: [`Census`](../classes/Census.md)

#### Inherited from

[IElectionParameters](IElectionParameters.md).[census](IElectionParameters.md#census)

#### Defined in

[types/election/election.ts:129](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L129)

___

### description

• `Optional` **description**: `string` \| `MultiLanguage`\<`string`\>

Election description

#### Inherited from

[IElectionParameters](IElectionParameters.md).[description](IElectionParameters.md#description)

#### Defined in

[types/election/election.ts:114](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L114)

___

### electionType

• `Optional` **electionType**: [`IElectionType`](IElectionType.md)

#### Inherited from

[IElectionParameters](IElectionParameters.md).[electionType](IElectionParameters.md#electiontype)

#### Defined in

[types/election/election.ts:131](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L131)

___

### endDate

• **endDate**: `string` \| `number` \| `Date`

#### Inherited from

[IElectionParameters](IElectionParameters.md).[endDate](IElectionParameters.md#enddate)

#### Defined in

[types/election/election.ts:128](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L128)

___

### header

• `Optional` **header**: `string`

Election header image url.

#### Inherited from

[IElectionParameters](IElectionParameters.md).[header](IElectionParameters.md#header)

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

[IElectionParameters](IElectionParameters.md).[maxCensusSize](IElectionParameters.md#maxcensussize)

#### Defined in

[types/election/election.ts:145](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L145)

___

### maxNumberOfChoices

• **maxNumberOfChoices**: `number`

#### Defined in

[types/election/multichoice.ts:8](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/multichoice.ts#L8)

___

### meta

• `Optional` **meta**: `any`

Metadata (anything added by the election creator)

#### Inherited from

[IElectionParameters](IElectionParameters.md).[meta](IElectionParameters.md#meta)

#### Defined in

[types/election/election.ts:126](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L126)

___

### questions

• `Optional` **questions**: [`IQuestion`](IQuestion.md)[]

#### Inherited from

[IElectionParameters](IElectionParameters.md).[questions](IElectionParameters.md#questions)

#### Defined in

[types/election/election.ts:132](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L132)

___

### startDate

• `Optional` **startDate**: `string` \| `number` \| `Date`

#### Inherited from

[IElectionParameters](IElectionParameters.md).[startDate](IElectionParameters.md#startdate)

#### Defined in

[types/election/election.ts:127](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L127)

___

### streamUri

• `Optional` **streamUri**: `string`

Election stream Uri (ex: a video url)

#### Inherited from

[IElectionParameters](IElectionParameters.md).[streamUri](IElectionParameters.md#streamuri)

#### Defined in

[types/election/election.ts:122](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L122)

___

### temporarySecretIdentity

• `Optional` **temporarySecretIdentity**: `boolean`

Is used to remove the secret identities of the voters once the process is done.

#### Inherited from

[IElectionParameters](IElectionParameters.md).[temporarySecretIdentity](IElectionParameters.md#temporarysecretidentity)

#### Defined in

[types/election/election.ts:150](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L150)

___

### title

• **title**: `string` \| `MultiLanguage`\<`string`\>

Election title

#### Inherited from

[IElectionParameters](IElectionParameters.md).[title](IElectionParameters.md#title)

#### Defined in

[types/election/election.ts:110](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L110)

___

### voteType

• `Optional` **voteType**: [`IVoteType`](IVoteType.md)

#### Inherited from

[IElectionParameters](IElectionParameters.md).[voteType](IElectionParameters.md#votetype)

#### Defined in

[types/election/election.ts:130](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L130)