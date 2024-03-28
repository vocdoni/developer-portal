[@vocdoni/sdk](/sdk) / IMultiChoiceElectionParameters

# Interface: IMultiChoiceElectionParameters

Define election parameters.

## Hierarchy

- [`IElectionParameters`](IElectionParameters)

  ↳ **`IMultiChoiceElectionParameters`**

## Table of contents

### Properties

- [addSDKVersion](IMultiChoiceElectionParameters#addsdkversion)
- [canAbstain](IMultiChoiceElectionParameters#canabstain)
- [canRepeatChoices](IMultiChoiceElectionParameters#canrepeatchoices)
- [census](IMultiChoiceElectionParameters#census)
- [description](IMultiChoiceElectionParameters#description)
- [electionType](IMultiChoiceElectionParameters#electiontype)
- [endDate](IMultiChoiceElectionParameters#enddate)
- [header](IMultiChoiceElectionParameters#header)
- [maxCensusSize](IMultiChoiceElectionParameters#maxcensussize)
- [maxNumberOfChoices](IMultiChoiceElectionParameters#maxnumberofchoices)
- [meta](IMultiChoiceElectionParameters#meta)
- [questions](IMultiChoiceElectionParameters#questions)
- [startDate](IMultiChoiceElectionParameters#startdate)
- [streamUri](IMultiChoiceElectionParameters#streamuri)
- [temporarySecretIdentity](IMultiChoiceElectionParameters#temporarysecretidentity)
- [title](IMultiChoiceElectionParameters#title)
- [voteType](IMultiChoiceElectionParameters#votetype)

## Properties

### addSDKVersion

• `Optional` **addSDKVersion**: `boolean`

Used to add the SDK version to the election metadata

#### Inherited from

[IElectionParameters](IElectionParameters.md).[addSDKVersion](IElectionParameters#addsdkversion)

#### Defined in

[types/election/election.ts:155](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/election.ts#L155)

___

### canAbstain

• `Optional` **canAbstain**: `boolean`

#### Defined in

[types/election/multichoice.ts:10](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/multichoice.ts#L10)

___

### canRepeatChoices

• `Optional` **canRepeatChoices**: `boolean`

#### Defined in

[types/election/multichoice.ts:9](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/multichoice.ts#L9)

___

### census

• **census**: [`Census`](../classes/Census)

#### Inherited from

[IElectionParameters](IElectionParameters.md).[census](IElectionParameters#census)

#### Defined in

[types/election/election.ts:129](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/election.ts#L129)

___

### description

• `Optional` **description**: `string` \| `MultiLanguage`\<`string`\>

Election description

#### Inherited from

[IElectionParameters](IElectionParameters.md).[description](IElectionParameters#description)

#### Defined in

[types/election/election.ts:114](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/election.ts#L114)

___

### electionType

• `Optional` **electionType**: [`IElectionType`](IElectionType)

#### Inherited from

[IElectionParameters](IElectionParameters.md).[electionType](IElectionParameters#electiontype)

#### Defined in

[types/election/election.ts:131](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/election.ts#L131)

___

### endDate

• **endDate**: `string` \| `number` \| `Date`

#### Inherited from

[IElectionParameters](IElectionParameters.md).[endDate](IElectionParameters#enddate)

#### Defined in

[types/election/election.ts:128](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/election.ts#L128)

___

### header

• `Optional` **header**: `string`

Election header image url.

#### Inherited from

[IElectionParameters](IElectionParameters.md).[header](IElectionParameters#header)

#### Defined in

[types/election/election.ts:118](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/election.ts#L118)

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

[IElectionParameters](IElectionParameters.md).[maxCensusSize](IElectionParameters#maxcensussize)

#### Defined in

[types/election/election.ts:145](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/election.ts#L145)

___

### maxNumberOfChoices

• **maxNumberOfChoices**: `number`

#### Defined in

[types/election/multichoice.ts:8](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/multichoice.ts#L8)

___

### meta

• `Optional` **meta**: `any`

Metadata (anything added by the election creator)

#### Inherited from

[IElectionParameters](IElectionParameters.md).[meta](IElectionParameters#meta)

#### Defined in

[types/election/election.ts:126](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/election.ts#L126)

___

### questions

• `Optional` **questions**: [`IQuestion`](IQuestion)[]

#### Inherited from

[IElectionParameters](IElectionParameters.md).[questions](IElectionParameters#questions)

#### Defined in

[types/election/election.ts:132](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/election.ts#L132)

___

### startDate

• `Optional` **startDate**: `string` \| `number` \| `Date`

#### Inherited from

[IElectionParameters](IElectionParameters.md).[startDate](IElectionParameters#startdate)

#### Defined in

[types/election/election.ts:127](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/election.ts#L127)

___

### streamUri

• `Optional` **streamUri**: `string`

Election stream Uri (ex: a video url)

#### Inherited from

[IElectionParameters](IElectionParameters.md).[streamUri](IElectionParameters#streamuri)

#### Defined in

[types/election/election.ts:122](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/election.ts#L122)

___

### temporarySecretIdentity

• `Optional` **temporarySecretIdentity**: `boolean`

Is used to remove the secret identities of the voters once the process is done.

#### Inherited from

[IElectionParameters](IElectionParameters.md).[temporarySecretIdentity](IElectionParameters#temporarysecretidentity)

#### Defined in

[types/election/election.ts:150](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/election.ts#L150)

___

### title

• **title**: `string` \| `MultiLanguage`\<`string`\>

Election title

#### Inherited from

[IElectionParameters](IElectionParameters.md).[title](IElectionParameters#title)

#### Defined in

[types/election/election.ts:110](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/election.ts#L110)

___

### voteType

• `Optional` **voteType**: [`IVoteType`](IVoteType)

#### Inherited from

[IElectionParameters](IElectionParameters.md).[voteType](IElectionParameters#votetype)

#### Defined in

[types/election/election.ts:130](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/election.ts#L130)
