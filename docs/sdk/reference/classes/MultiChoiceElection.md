[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / MultiChoiceElection

# Class: MultiChoiceElection

Represents a multi choice election

## Hierarchy

- [`UnpublishedElection`](UnpublishedElection.md)

  ↳ **`MultiChoiceElection`**

## Table of contents

### Constructors

- [constructor](MultiChoiceElection.md#constructor)

### Properties

- [\_addSDKVersion](MultiChoiceElection.md#_addsdkversion)
- [\_canAbstain](MultiChoiceElection.md#_canabstain)
- [\_census](MultiChoiceElection.md#_census)
- [\_description](MultiChoiceElection.md#_description)
- [\_electionType](MultiChoiceElection.md#_electiontype)
- [\_endDate](MultiChoiceElection.md#_enddate)
- [\_header](MultiChoiceElection.md#_header)
- [\_maxCensusSize](MultiChoiceElection.md#_maxcensussize)
- [\_meta](MultiChoiceElection.md#_meta)
- [\_questions](MultiChoiceElection.md#_questions)
- [\_startDate](MultiChoiceElection.md#_startdate)
- [\_streamUri](MultiChoiceElection.md#_streamuri)
- [\_temporarySecretIdentity](MultiChoiceElection.md#_temporarysecretidentity)
- [\_title](MultiChoiceElection.md#_title)
- [\_voteType](MultiChoiceElection.md#_votetype)

### Accessors

- [addSDKVersion](MultiChoiceElection.md#addsdkversion)
- [canAbstain](MultiChoiceElection.md#canabstain)
- [canRepeatChoices](MultiChoiceElection.md#canrepeatchoices)
- [census](MultiChoiceElection.md#census)
- [description](MultiChoiceElection.md#description)
- [duration](MultiChoiceElection.md#duration)
- [electionType](MultiChoiceElection.md#electiontype)
- [endDate](MultiChoiceElection.md#enddate)
- [header](MultiChoiceElection.md#header)
- [maxCensusSize](MultiChoiceElection.md#maxcensussize)
- [maxNumberOfChoices](MultiChoiceElection.md#maxnumberofchoices)
- [meta](MultiChoiceElection.md#meta)
- [questions](MultiChoiceElection.md#questions)
- [startDate](MultiChoiceElection.md#startdate)
- [streamUri](MultiChoiceElection.md#streamuri)
- [temporarySecretIdentity](MultiChoiceElection.md#temporarysecretidentity)
- [title](MultiChoiceElection.md#title)
- [voteType](MultiChoiceElection.md#votetype)

### Methods

- [addQuestion](MultiChoiceElection.md#addquestion)
- [generateEnvelopeType](MultiChoiceElection.md#generateenvelopetype)
- [generateMetadata](MultiChoiceElection.md#generatemetadata)
- [generateMode](MultiChoiceElection.md#generatemode)
- [generateVoteOptions](MultiChoiceElection.md#generatevoteoptions)
- [get](MultiChoiceElection.md#get)
- [removeQuestion](MultiChoiceElection.md#removequestion)
- [checkVote](MultiChoiceElection.md#checkvote)
- [from](MultiChoiceElection.md#from)

## Constructors

### constructor

• **new MultiChoiceElection**(`params`): [`MultiChoiceElection`](MultiChoiceElection.md)

Constructs a multi choice election

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IMultiChoiceElectionParameters`](../interfaces/IMultiChoiceElectionParameters.md) | Multi choice election parameters |

#### Returns

[`MultiChoiceElection`](MultiChoiceElection.md)

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[constructor](UnpublishedElection.md#constructor)

#### Defined in

[types/election/multichoice.ts:24](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/multichoice.ts#L24)

## Properties

### \_addSDKVersion

• `Protected` **\_addSDKVersion**: `boolean`

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_addSDKVersion](UnpublishedElection.md#_addsdkversion)

#### Defined in

[types/election/election.ts:175](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L175)

___

### \_canAbstain

• `Private` **\_canAbstain**: `boolean`

#### Defined in

[types/election/multichoice.ts:17](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/multichoice.ts#L17)

___

### \_census

• `Protected` **\_census**: [`Census`](Census.md)

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_census](UnpublishedElection.md#_census)

#### Defined in

[types/election/election.ts:172](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L172)

___

### \_description

• `Protected` **\_description**: `MultiLanguage`\<`string`\>

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_description](UnpublishedElection.md#_description)

#### Defined in

[types/election/election.ts:163](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L163)

___

### \_electionType

• `Protected` **\_electionType**: [`IElectionType`](../interfaces/IElectionType.md)

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_electionType](UnpublishedElection.md#_electiontype)

#### Defined in

[types/election/election.ts:169](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L169)

___

### \_endDate

• `Protected` **\_endDate**: `Date`

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_endDate](UnpublishedElection.md#_enddate)

#### Defined in

[types/election/election.ts:168](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L168)

___

### \_header

• `Protected` **\_header**: `string`

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_header](UnpublishedElection.md#_header)

#### Defined in

[types/election/election.ts:164](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L164)

___

### \_maxCensusSize

• `Protected` **\_maxCensusSize**: `number`

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_maxCensusSize](UnpublishedElection.md#_maxcensussize)

#### Defined in

[types/election/election.ts:173](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L173)

___

### \_meta

• `Protected` **\_meta**: `any`

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_meta](UnpublishedElection.md#_meta)

#### Defined in

[types/election/election.ts:166](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L166)

___

### \_questions

• `Protected` **\_questions**: [`IQuestion`](../interfaces/IQuestion.md)[]

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_questions](UnpublishedElection.md#_questions)

#### Defined in

[types/election/election.ts:171](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L171)

___

### \_startDate

• `Protected` **\_startDate**: `Date`

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_startDate](UnpublishedElection.md#_startdate)

#### Defined in

[types/election/election.ts:167](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L167)

___

### \_streamUri

• `Protected` **\_streamUri**: `string`

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_streamUri](UnpublishedElection.md#_streamuri)

#### Defined in

[types/election/election.ts:165](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L165)

___

### \_temporarySecretIdentity

• `Protected` **\_temporarySecretIdentity**: `boolean`

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_temporarySecretIdentity](UnpublishedElection.md#_temporarysecretidentity)

#### Defined in

[types/election/election.ts:174](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L174)

___

### \_title

• `Protected` **\_title**: `MultiLanguage`\<`string`\>

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_title](UnpublishedElection.md#_title)

#### Defined in

[types/election/election.ts:162](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L162)

___

### \_voteType

• `Protected` **\_voteType**: [`IVoteType`](../interfaces/IVoteType.md)

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_voteType](UnpublishedElection.md#_votetype)

#### Defined in

[types/election/election.ts:170](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L170)

## Accessors

### addSDKVersion

• `get` **addSDKVersion**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UnpublishedElection.addSDKVersion

#### Defined in

[types/election/unpublished.ts:275](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L275)

• `set` **addSDKVersion**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

UnpublishedElection.addSDKVersion

#### Defined in

[types/election/unpublished.ts:279](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L279)

___

### canAbstain

• `get` **canAbstain**(): `boolean`

#### Returns

`boolean`

#### Defined in

[types/election/multichoice.ts:124](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/multichoice.ts#L124)

• `set` **canAbstain**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[types/election/multichoice.ts:128](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/multichoice.ts#L128)

___

### canRepeatChoices

• `get` **canRepeatChoices**(): `boolean`

#### Returns

`boolean`

#### Defined in

[types/election/multichoice.ts:116](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/multichoice.ts#L116)

• `set` **canRepeatChoices**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[types/election/multichoice.ts:120](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/multichoice.ts#L120)

___

### census

• `get` **census**(): [`Census`](Census.md)

#### Returns

[`Census`](Census.md)

#### Inherited from

UnpublishedElection.census

#### Defined in

[types/election/unpublished.ts:249](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L249)

• `set` **census**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Census`](Census.md) |

#### Returns

`void`

#### Inherited from

UnpublishedElection.census

#### Defined in

[types/election/unpublished.ts:253](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L253)

___

### description

• `get` **description**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Inherited from

UnpublishedElection.description

#### Defined in

[types/election/unpublished.ts:173](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L173)

• `set` **description**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MultiLanguage`\<`string`\> |

#### Returns

`void`

#### Inherited from

UnpublishedElection.description

#### Defined in

[types/election/unpublished.ts:177](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L177)

___

### duration

• `get` **duration**(): `number`

#### Returns

`number`

#### Inherited from

UnpublishedElection.duration

#### Defined in

[types/election/unpublished.ts:138](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L138)

___

### electionType

• `get` **electionType**(): [`IElectionType`](../interfaces/IElectionType.md)

#### Returns

[`IElectionType`](../interfaces/IElectionType.md)

#### Inherited from

UnpublishedElection.electionType

#### Defined in

[types/election/unpublished.ts:225](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L225)

• `set` **electionType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IElectionType`](../interfaces/IElectionType.md) |

#### Returns

`void`

#### Inherited from

UnpublishedElection.electionType

#### Defined in

[types/election/unpublished.ts:229](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L229)

___

### endDate

• `get` **endDate**(): `Date`

#### Returns

`Date`

#### Inherited from

UnpublishedElection.endDate

#### Defined in

[types/election/unpublished.ts:215](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L215)

• `set` **endDate**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Date` |

#### Returns

`void`

#### Inherited from

UnpublishedElection.endDate

#### Defined in

[types/election/unpublished.ts:219](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L219)

___

### header

• `get` **header**(): `string`

#### Returns

`string`

#### Inherited from

UnpublishedElection.header

#### Defined in

[types/election/unpublished.ts:181](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L181)

• `set` **header**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

UnpublishedElection.header

#### Defined in

[types/election/unpublished.ts:185](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L185)

___

### maxCensusSize

• `get` **maxCensusSize**(): `number`

#### Returns

`number`

#### Inherited from

UnpublishedElection.maxCensusSize

#### Defined in

[types/election/unpublished.ts:258](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L258)

• `set` **maxCensusSize**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

UnpublishedElection.maxCensusSize

#### Defined in

[types/election/unpublished.ts:262](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L262)

___

### maxNumberOfChoices

• `get` **maxNumberOfChoices**(): `number`

#### Returns

`number`

#### Defined in

[types/election/multichoice.ts:108](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/multichoice.ts#L108)

• `set` **maxNumberOfChoices**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[types/election/multichoice.ts:112](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/multichoice.ts#L112)

___

### meta

• `get` **meta**(): `any`

#### Returns

`any`

#### Inherited from

UnpublishedElection.meta

#### Defined in

[types/election/unpublished.ts:197](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L197)

• `set` **meta**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

UnpublishedElection.meta

#### Defined in

[types/election/unpublished.ts:201](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L201)

___

### questions

• `get` **questions**(): [`IQuestion`](../interfaces/IQuestion.md)[]

#### Returns

[`IQuestion`](../interfaces/IQuestion.md)[]

#### Inherited from

UnpublishedElection.questions

#### Defined in

[types/election/unpublished.ts:241](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L241)

• `set` **questions**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IQuestion`](../interfaces/IQuestion.md)[] |

#### Returns

`void`

#### Inherited from

UnpublishedElection.questions

#### Defined in

[types/election/unpublished.ts:245](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L245)

___

### startDate

• `get` **startDate**(): `Date`

#### Returns

`Date`

#### Inherited from

UnpublishedElection.startDate

#### Defined in

[types/election/unpublished.ts:206](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L206)

• `set` **startDate**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Date` |

#### Returns

`void`

#### Inherited from

UnpublishedElection.startDate

#### Defined in

[types/election/unpublished.ts:210](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L210)

___

### streamUri

• `get` **streamUri**(): `string`

#### Returns

`string`

#### Inherited from

UnpublishedElection.streamUri

#### Defined in

[types/election/unpublished.ts:189](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L189)

• `set` **streamUri**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

UnpublishedElection.streamUri

#### Defined in

[types/election/unpublished.ts:193](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L193)

___

### temporarySecretIdentity

• `get` **temporarySecretIdentity**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UnpublishedElection.temporarySecretIdentity

#### Defined in

[types/election/unpublished.ts:267](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L267)

• `set` **temporarySecretIdentity**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

UnpublishedElection.temporarySecretIdentity

#### Defined in

[types/election/unpublished.ts:271](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L271)

___

### title

• `get` **title**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Inherited from

UnpublishedElection.title

#### Defined in

[types/election/unpublished.ts:164](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L164)

• `set` **title**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MultiLanguage`\<`string`\> |

#### Returns

`void`

#### Inherited from

UnpublishedElection.title

#### Defined in

[types/election/unpublished.ts:168](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L168)

___

### voteType

• `get` **voteType**(): [`IVoteType`](../interfaces/IVoteType.md)

#### Returns

[`IVoteType`](../interfaces/IVoteType.md)

#### Inherited from

UnpublishedElection.voteType

#### Defined in

[types/election/unpublished.ts:233](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L233)

• `set` **voteType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IVoteType`](../interfaces/IVoteType.md) |

#### Returns

`void`

#### Inherited from

UnpublishedElection.voteType

#### Defined in

[types/election/unpublished.ts:237](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L237)

## Methods

### addQuestion

▸ **addQuestion**(`title`, `description`, `choices`): [`UnpublishedElection`](UnpublishedElection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` \| `MultiLanguage`\<`string`\> |
| `description` | `string` \| `MultiLanguage`\<`string`\> |
| `choices` | (\{ `title`: `string`  } \| \{ `title`: `MultiLanguage`\<`string`\>  })[] |

#### Returns

[`UnpublishedElection`](UnpublishedElection.md)

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[addQuestion](UnpublishedElection.md#addquestion)

#### Defined in

[types/election/multichoice.ts:35](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/multichoice.ts#L35)

___

### generateEnvelopeType

▸ **generateEnvelopeType**(): `object`

#### Returns

`object`

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[generateEnvelopeType](UnpublishedElection.md#generateenvelopetype)

#### Defined in

[types/election/multichoice.ts:65](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/multichoice.ts#L65)

___

### generateMetadata

▸ **generateMetadata**(): [`ElectionMetadata`](../interfaces/ElectionMetadata.md)

#### Returns

[`ElectionMetadata`](../interfaces/ElectionMetadata.md)

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[generateMetadata](UnpublishedElection.md#generatemetadata)

#### Defined in

[types/election/multichoice.ts:75](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/multichoice.ts#L75)

___

### generateMode

▸ **generateMode**(): `object`

#### Returns

`object`

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[generateMode](UnpublishedElection.md#generatemode)

#### Defined in

[types/election/unpublished.ts:154](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L154)

___

### generateVoteOptions

▸ **generateVoteOptions**(): `object`

#### Returns

`object`

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[generateVoteOptions](UnpublishedElection.md#generatevoteoptions)

#### Defined in

[types/election/multichoice.ts:54](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/multichoice.ts#L54)

___

### get

▸ **get**(`dot`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dot` | `string` |

#### Returns

`any`

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[get](UnpublishedElection.md#get)

#### Defined in

[types/election/election.ts:266](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L266)

___

### removeQuestion

▸ **removeQuestion**(`questionNumber`): [`UnpublishedElection`](UnpublishedElection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `questionNumber` | `number` |

#### Returns

[`UnpublishedElection`](UnpublishedElection.md)

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[removeQuestion](UnpublishedElection.md#removequestion)

#### Defined in

[types/election/unpublished.ts:60](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L60)

___

### checkVote

▸ **checkVote**(`vote`, `voteType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vote` | [`Vote`](Vote.md) |
| `voteType` | [`IVoteType`](../interfaces/IVoteType.md) |

#### Returns

`void`

#### Defined in

[types/election/multichoice.ts:92](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/multichoice.ts#L92)

___

### from

▸ **from**(`params`): [`MultiChoiceElection`](MultiChoiceElection.md)

Returns an unpublished election object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IMultiChoiceElectionParameters`](../interfaces/IMultiChoiceElectionParameters.md) | Unpublished Election parameters |

#### Returns

[`MultiChoiceElection`](MultiChoiceElection.md)

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[from](UnpublishedElection.md#from)

#### Defined in

[types/election/multichoice.ts:31](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/multichoice.ts#L31)
