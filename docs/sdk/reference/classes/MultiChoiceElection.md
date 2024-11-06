[@vocdoni/sdk](/sdk) / MultiChoiceElection

# Class: MultiChoiceElection

Represents a multi choice election

## Hierarchy

- [`UnpublishedElection`](UnpublishedElection)

  ↳ **`MultiChoiceElection`**

## Table of contents

### Accessors

- [addSDKVersion](MultiChoiceElection#addsdkversion)
- [canAbstain](MultiChoiceElection#canabstain)
- [canRepeatChoices](MultiChoiceElection#canrepeatchoices)
- [census](MultiChoiceElection#census)
- [description](MultiChoiceElection#description)
- [duration](MultiChoiceElection#duration)
- [electionType](MultiChoiceElection#electiontype)
- [endDate](MultiChoiceElection#enddate)
- [header](MultiChoiceElection#header)
- [maxCensusSize](MultiChoiceElection#maxcensussize)
- [maxNumberOfChoices](MultiChoiceElection#maxnumberofchoices)
- [meta](MultiChoiceElection#meta)
- [minNumberOfChoices](MultiChoiceElection#minnumberofchoices)
- [questions](MultiChoiceElection#questions)
- [startDate](MultiChoiceElection#startdate)
- [streamUri](MultiChoiceElection#streamuri)
- [temporarySecretIdentity](MultiChoiceElection#temporarysecretidentity)
- [title](MultiChoiceElection#title)
- [voteType](MultiChoiceElection#votetype)

### Constructors

- [constructor](MultiChoiceElection#constructor)

### Methods

- [addQuestion](MultiChoiceElection#addquestion)
- [generateEnvelopeType](MultiChoiceElection#generateenvelopetype)
- [generateMetadata](MultiChoiceElection#generatemetadata)
- [generateMode](MultiChoiceElection#generatemode)
- [generateVoteOptions](MultiChoiceElection#generatevoteoptions)
- [get](MultiChoiceElection#get)
- [removeQuestion](MultiChoiceElection#removequestion)
- [summarizeMetadata](MultiChoiceElection#summarizemetadata)
- [checkVote](MultiChoiceElection#checkvote)
- [from](MultiChoiceElection#from)

## Accessors

### addSDKVersion

• `get` **addSDKVersion**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UnpublishedElection.addSDKVersion

#### Defined in

[src/types/election/unpublished.ts:291](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L291)

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

[src/types/election/unpublished.ts:295](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L295)

___

### canAbstain

• `get` **canAbstain**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/types/election/multichoice.ts:161](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/multichoice.ts#L161)

• `set` **canAbstain**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/types/election/multichoice.ts:165](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/multichoice.ts#L165)

___

### canRepeatChoices

• `get` **canRepeatChoices**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/types/election/multichoice.ts:153](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/multichoice.ts#L153)

• `set` **canRepeatChoices**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/types/election/multichoice.ts:157](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/multichoice.ts#L157)

___

### census

• `get` **census**(): [`Census`](Census)

#### Returns

[`Census`](Census)

#### Inherited from

UnpublishedElection.census

#### Defined in

[src/types/election/unpublished.ts:265](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L265)

• `set` **census**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Census`](Census) |

#### Returns

`void`

#### Inherited from

UnpublishedElection.census

#### Defined in

[src/types/election/unpublished.ts:269](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L269)

___

### description

• `get` **description**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Inherited from

UnpublishedElection.description

#### Defined in

[src/types/election/unpublished.ts:189](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L189)

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

[src/types/election/unpublished.ts:193](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L193)

___

### duration

• `get` **duration**(): `number`

#### Returns

`number`

#### Inherited from

UnpublishedElection.duration

#### Defined in

[src/types/election/unpublished.ts:155](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L155)

___

### electionType

• `get` **electionType**(): [`IElectionType`](../interfaces/IElectionType)

#### Returns

[`IElectionType`](../interfaces/IElectionType)

#### Inherited from

UnpublishedElection.electionType

#### Defined in

[src/types/election/unpublished.ts:241](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L241)

• `set` **electionType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IElectionType`](../interfaces/IElectionType) |

#### Returns

`void`

#### Inherited from

UnpublishedElection.electionType

#### Defined in

[src/types/election/unpublished.ts:245](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L245)

___

### endDate

• `get` **endDate**(): `Date`

#### Returns

`Date`

#### Inherited from

UnpublishedElection.endDate

#### Defined in

[src/types/election/unpublished.ts:231](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L231)

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

[src/types/election/unpublished.ts:235](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L235)

___

### header

• `get` **header**(): `string`

#### Returns

`string`

#### Inherited from

UnpublishedElection.header

#### Defined in

[src/types/election/unpublished.ts:197](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L197)

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

[src/types/election/unpublished.ts:201](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L201)

___

### maxCensusSize

• `get` **maxCensusSize**(): `number`

#### Returns

`number`

#### Inherited from

UnpublishedElection.maxCensusSize

#### Defined in

[src/types/election/unpublished.ts:274](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L274)

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

[src/types/election/unpublished.ts:278](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L278)

___

### maxNumberOfChoices

• `get` **maxNumberOfChoices**(): `number`

#### Returns

`number`

#### Defined in

[src/types/election/multichoice.ts:129](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/multichoice.ts#L129)

• `set` **maxNumberOfChoices**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/types/election/multichoice.ts:133](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/multichoice.ts#L133)

___

### meta

• `get` **meta**(): `any`

#### Returns

`any`

#### Inherited from

UnpublishedElection.meta

#### Defined in

[src/types/election/unpublished.ts:213](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L213)

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

[src/types/election/unpublished.ts:217](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L217)

___

### minNumberOfChoices

• `get` **minNumberOfChoices**(): `number`

#### Returns

`number`

#### Defined in

[src/types/election/multichoice.ts:141](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/multichoice.ts#L141)

• `set` **minNumberOfChoices**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/types/election/multichoice.ts:145](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/multichoice.ts#L145)

___

### questions

• `get` **questions**(): [`IQuestion`](../interfaces/IQuestion)[]

#### Returns

[`IQuestion`](../interfaces/IQuestion)[]

#### Inherited from

UnpublishedElection.questions

#### Defined in

[src/types/election/unpublished.ts:257](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L257)

• `set` **questions**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IQuestion`](../interfaces/IQuestion)[] |

#### Returns

`void`

#### Inherited from

UnpublishedElection.questions

#### Defined in

[src/types/election/unpublished.ts:261](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L261)

___

### startDate

• `get` **startDate**(): `Date`

#### Returns

`Date`

#### Inherited from

UnpublishedElection.startDate

#### Defined in

[src/types/election/unpublished.ts:222](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L222)

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

[src/types/election/unpublished.ts:226](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L226)

___

### streamUri

• `get` **streamUri**(): `string`

#### Returns

`string`

#### Inherited from

UnpublishedElection.streamUri

#### Defined in

[src/types/election/unpublished.ts:205](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L205)

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

[src/types/election/unpublished.ts:209](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L209)

___

### temporarySecretIdentity

• `get` **temporarySecretIdentity**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UnpublishedElection.temporarySecretIdentity

#### Defined in

[src/types/election/unpublished.ts:283](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L283)

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

[src/types/election/unpublished.ts:287](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L287)

___

### title

• `get` **title**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Inherited from

UnpublishedElection.title

#### Defined in

[src/types/election/unpublished.ts:180](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L180)

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

[src/types/election/unpublished.ts:184](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L184)

___

### voteType

• `get` **voteType**(): [`IVoteType`](../interfaces/IVoteType)

#### Returns

[`IVoteType`](../interfaces/IVoteType)

#### Inherited from

UnpublishedElection.voteType

#### Defined in

[src/types/election/unpublished.ts:249](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L249)

• `set` **voteType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IVoteType`](../interfaces/IVoteType) |

#### Returns

`void`

#### Inherited from

UnpublishedElection.voteType

#### Defined in

[src/types/election/unpublished.ts:253](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L253)

## Constructors

### constructor

• **new MultiChoiceElection**(`params`): [`MultiChoiceElection`](MultiChoiceElection)

Constructs a multi choice election

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IMultiChoiceElectionParameters`](../interfaces/IMultiChoiceElectionParameters) | Multi choice election parameters |

#### Returns

[`MultiChoiceElection`](MultiChoiceElection)

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[constructor](UnpublishedElection#constructor)

#### Defined in

[src/types/election/multichoice.ts:33](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/multichoice.ts#L33)

## Methods

### addQuestion

▸ **addQuestion**(`title`, `description`, `choices`, `meta?`): [`UnpublishedElection`](UnpublishedElection)

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` \| `MultiLanguage`\<`string`\> |
| `description` | `string` \| `MultiLanguage`\<`string`\> |
| `choices` | ([`Choice`](../sdk-reference#choice) \| \{ `meta?`: `any` ; `title`: `string` ; `value?`: `number`  })[] |
| `meta?` | `any` |

#### Returns

[`UnpublishedElection`](UnpublishedElection)

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[addQuestion](UnpublishedElection#addquestion)

#### Defined in

[src/types/election/multichoice.ts:45](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/multichoice.ts#L45)

___

### generateEnvelopeType

▸ **generateEnvelopeType**(): `object`

#### Returns

`object`

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[generateEnvelopeType](UnpublishedElection#generateenvelopetype)

#### Defined in

[src/types/election/multichoice.ts:78](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/multichoice.ts#L78)

___

### generateMetadata

▸ **generateMetadata**(): [`ElectionMetadata`](../interfaces/ElectionMetadata)

#### Returns

[`ElectionMetadata`](../interfaces/ElectionMetadata)

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[generateMetadata](UnpublishedElection#generatemetadata)

#### Defined in

[src/types/election/multichoice.ts:88](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/multichoice.ts#L88)

___

### generateMode

▸ **generateMode**(): `object`

#### Returns

`object`

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[generateMode](UnpublishedElection#generatemode)

#### Defined in

[src/types/election/unpublished.ts:171](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L171)

___

### generateVoteOptions

▸ **generateVoteOptions**(): `object`

#### Returns

`object`

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[generateVoteOptions](UnpublishedElection#generatevoteoptions)

#### Defined in

[src/types/election/multichoice.ts:67](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/multichoice.ts#L67)

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

[UnpublishedElection](UnpublishedElection.md).[get](UnpublishedElection#get)

#### Defined in

[src/types/election/election.ts:275](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L275)

___

### removeQuestion

▸ **removeQuestion**(`questionNumber`): [`UnpublishedElection`](UnpublishedElection)

#### Parameters

| Name | Type |
| :------ | :------ |
| `questionNumber` | `number` |

#### Returns

[`UnpublishedElection`](UnpublishedElection)

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[removeQuestion](UnpublishedElection#removequestion)

#### Defined in

[src/types/election/unpublished.ts:65](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L65)

___

### summarizeMetadata

▸ **summarizeMetadata**(): `string`

#### Returns

`string`

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[summarizeMetadata](UnpublishedElection#summarizemetadata)

#### Defined in

[src/types/election/unpublished.ts:133](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L133)

___

### checkVote

▸ **checkVote**(`vote`, `voteType`, `voteProperties`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vote` | [`Vote`](Vote) |
| `voteType` | [`IVoteType`](../interfaces/IVoteType) |
| `voteProperties` | [`ChoiceProperties`](../sdk-reference#choiceproperties) |

#### Returns

`void`

#### Defined in

[src/types/election/multichoice.ts:109](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/multichoice.ts#L109)

___

### from

▸ **from**(`params`): [`MultiChoiceElection`](MultiChoiceElection)

Returns an unpublished election object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IMultiChoiceElectionParameters`](../interfaces/IMultiChoiceElectionParameters) | Unpublished Election parameters |

#### Returns

[`MultiChoiceElection`](MultiChoiceElection)

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[from](UnpublishedElection#from)

#### Defined in

[src/types/election/multichoice.ts:41](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/multichoice.ts#L41)
