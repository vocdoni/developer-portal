[@vocdoni/sdk](/sdk) / ApprovalElection

# Class: ApprovalElection

Represents an approval election

## Hierarchy

- [`UnpublishedElection`](UnpublishedElection)

  ↳ **`ApprovalElection`**

## Table of contents

### Accessors

- [addSDKVersion](ApprovalElection#addsdkversion)
- [census](ApprovalElection#census)
- [description](ApprovalElection#description)
- [duration](ApprovalElection#duration)
- [electionType](ApprovalElection#electiontype)
- [endDate](ApprovalElection#enddate)
- [header](ApprovalElection#header)
- [maxCensusSize](ApprovalElection#maxcensussize)
- [meta](ApprovalElection#meta)
- [questions](ApprovalElection#questions)
- [startDate](ApprovalElection#startdate)
- [streamUri](ApprovalElection#streamuri)
- [temporarySecretIdentity](ApprovalElection#temporarysecretidentity)
- [title](ApprovalElection#title)
- [voteType](ApprovalElection#votetype)

### Constructors

- [constructor](ApprovalElection#constructor)

### Methods

- [addQuestion](ApprovalElection#addquestion)
- [generateEnvelopeType](ApprovalElection#generateenvelopetype)
- [generateMetadata](ApprovalElection#generatemetadata)
- [generateMode](ApprovalElection#generatemode)
- [generateVoteOptions](ApprovalElection#generatevoteoptions)
- [get](ApprovalElection#get)
- [removeQuestion](ApprovalElection#removequestion)
- [checkVote](ApprovalElection#checkvote)
- [from](ApprovalElection#from)

## Accessors

### addSDKVersion

• `get` **addSDKVersion**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UnpublishedElection.addSDKVersion

#### Defined in

[types/election/unpublished.ts:275](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L275)

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

[types/election/unpublished.ts:279](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L279)

___

### census

• `get` **census**(): [`Census`](Census)

#### Returns

[`Census`](Census)

#### Inherited from

UnpublishedElection.census

#### Defined in

[types/election/unpublished.ts:249](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L249)

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

[types/election/unpublished.ts:253](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L253)

___

### description

• `get` **description**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Inherited from

UnpublishedElection.description

#### Defined in

[types/election/unpublished.ts:173](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L173)

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

[types/election/unpublished.ts:177](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L177)

___

### duration

• `get` **duration**(): `number`

#### Returns

`number`

#### Inherited from

UnpublishedElection.duration

#### Defined in

[types/election/unpublished.ts:138](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L138)

___

### electionType

• `get` **electionType**(): [`IElectionType`](../interfaces/IElectionType)

#### Returns

[`IElectionType`](../interfaces/IElectionType)

#### Inherited from

UnpublishedElection.electionType

#### Defined in

[types/election/unpublished.ts:225](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L225)

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

[types/election/unpublished.ts:229](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L229)

___

### endDate

• `get` **endDate**(): `Date`

#### Returns

`Date`

#### Inherited from

UnpublishedElection.endDate

#### Defined in

[types/election/unpublished.ts:215](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L215)

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

[types/election/unpublished.ts:219](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L219)

___

### header

• `get` **header**(): `string`

#### Returns

`string`

#### Inherited from

UnpublishedElection.header

#### Defined in

[types/election/unpublished.ts:181](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L181)

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

[types/election/unpublished.ts:185](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L185)

___

### maxCensusSize

• `get` **maxCensusSize**(): `number`

#### Returns

`number`

#### Inherited from

UnpublishedElection.maxCensusSize

#### Defined in

[types/election/unpublished.ts:258](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L258)

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

[types/election/unpublished.ts:262](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L262)

___

### meta

• `get` **meta**(): `any`

#### Returns

`any`

#### Inherited from

UnpublishedElection.meta

#### Defined in

[types/election/unpublished.ts:197](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L197)

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

[types/election/unpublished.ts:201](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L201)

___

### questions

• `get` **questions**(): [`IQuestion`](../interfaces/IQuestion)[]

#### Returns

[`IQuestion`](../interfaces/IQuestion)[]

#### Inherited from

UnpublishedElection.questions

#### Defined in

[types/election/unpublished.ts:241](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L241)

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

[types/election/unpublished.ts:245](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L245)

___

### startDate

• `get` **startDate**(): `Date`

#### Returns

`Date`

#### Inherited from

UnpublishedElection.startDate

#### Defined in

[types/election/unpublished.ts:206](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L206)

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

[types/election/unpublished.ts:210](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L210)

___

### streamUri

• `get` **streamUri**(): `string`

#### Returns

`string`

#### Inherited from

UnpublishedElection.streamUri

#### Defined in

[types/election/unpublished.ts:189](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L189)

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

[types/election/unpublished.ts:193](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L193)

___

### temporarySecretIdentity

• `get` **temporarySecretIdentity**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UnpublishedElection.temporarySecretIdentity

#### Defined in

[types/election/unpublished.ts:267](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L267)

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

[types/election/unpublished.ts:271](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L271)

___

### title

• `get` **title**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Inherited from

UnpublishedElection.title

#### Defined in

[types/election/unpublished.ts:164](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L164)

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

[types/election/unpublished.ts:168](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L168)

___

### voteType

• `get` **voteType**(): [`IVoteType`](../interfaces/IVoteType)

#### Returns

[`IVoteType`](../interfaces/IVoteType)

#### Inherited from

UnpublishedElection.voteType

#### Defined in

[types/election/unpublished.ts:233](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L233)

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

[types/election/unpublished.ts:237](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L237)

## Constructors

### constructor

• **new ApprovalElection**(`params`): [`ApprovalElection`](ApprovalElection)

Constructs an approval election

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IApprovalElectionParameters`](../interfaces/IApprovalElectionParameters) | Approval election parameters |

#### Returns

[`ApprovalElection`](ApprovalElection)

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[constructor](UnpublishedElection#constructor)

#### Defined in

[types/election/approval.ts:18](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/approval.ts#L18)

## Methods

### addQuestion

▸ **addQuestion**(`title`, `description`, `choices`): [`UnpublishedElection`](UnpublishedElection)

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` \| `MultiLanguage`\<`string`\> |
| `description` | `string` \| `MultiLanguage`\<`string`\> |
| `choices` | (\{ `title`: `string`  } \| \{ `title`: `MultiLanguage`\<`string`\>  })[] |

#### Returns

[`UnpublishedElection`](UnpublishedElection)

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[addQuestion](UnpublishedElection#addquestion)

#### Defined in

[types/election/approval.ts:26](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/approval.ts#L26)

___

### generateEnvelopeType

▸ **generateEnvelopeType**(): `object`

#### Returns

`object`

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[generateEnvelopeType](UnpublishedElection#generateenvelopetype)

#### Defined in

[types/election/approval.ts:55](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/approval.ts#L55)

___

### generateMetadata

▸ **generateMetadata**(): [`ElectionMetadata`](../interfaces/ElectionMetadata)

#### Returns

[`ElectionMetadata`](../interfaces/ElectionMetadata)

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[generateMetadata](UnpublishedElection#generatemetadata)

#### Defined in

[types/election/approval.ts:65](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/approval.ts#L65)

___

### generateMode

▸ **generateMode**(): `object`

#### Returns

`object`

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[generateMode](UnpublishedElection#generatemode)

#### Defined in

[types/election/unpublished.ts:154](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L154)

___

### generateVoteOptions

▸ **generateVoteOptions**(): `object`

#### Returns

`object`

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[generateVoteOptions](UnpublishedElection#generatevoteoptions)

#### Defined in

[types/election/approval.ts:45](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/approval.ts#L45)

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

[types/election/election.ts:266](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/election.ts#L266)

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

[types/election/unpublished.ts:60](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L60)

___

### checkVote

▸ **checkVote**(`vote`, `voteType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vote` | [`Vote`](Vote) |
| `voteType` | [`IVoteType`](../interfaces/IVoteType) |

#### Returns

`void`

#### Defined in

[types/election/approval.ts:79](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/approval.ts#L79)

___

### from

▸ **from**(`params`): [`ApprovalElection`](ApprovalElection)

Returns an unpublished election object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IApprovalElectionParameters`](../interfaces/IApprovalElectionParameters) | Unpublished Election parameters |

#### Returns

[`ApprovalElection`](ApprovalElection)

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[from](UnpublishedElection#from)

#### Defined in

[types/election/approval.ts:22](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/approval.ts#L22)
