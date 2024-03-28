[@vocdoni/sdk](/sdk) / UnpublishedElection

# Class: UnpublishedElection

Represents an unpublished election

## Hierarchy

- [`Election`](Election)

  ↳ **`UnpublishedElection`**

  ↳↳ [`MultiChoiceElection`](MultiChoiceElection)

  ↳↳ [`BudgetElection`](BudgetElection)

  ↳↳ [`ApprovalElection`](ApprovalElection)

## Table of contents

### Accessors

- [addSDKVersion](UnpublishedElection#addsdkversion)
- [census](UnpublishedElection#census)
- [description](UnpublishedElection#description)
- [duration](UnpublishedElection#duration)
- [electionType](UnpublishedElection#electiontype)
- [endDate](UnpublishedElection#enddate)
- [header](UnpublishedElection#header)
- [maxCensusSize](UnpublishedElection#maxcensussize)
- [meta](UnpublishedElection#meta)
- [questions](UnpublishedElection#questions)
- [startDate](UnpublishedElection#startdate)
- [streamUri](UnpublishedElection#streamuri)
- [temporarySecretIdentity](UnpublishedElection#temporarysecretidentity)
- [title](UnpublishedElection#title)
- [voteType](UnpublishedElection#votetype)

### Constructors

- [constructor](UnpublishedElection#constructor)

### Methods

- [addQuestion](UnpublishedElection#addquestion)
- [generateEnvelopeType](UnpublishedElection#generateenvelopetype)
- [generateMetadata](UnpublishedElection#generatemetadata)
- [generateMode](UnpublishedElection#generatemode)
- [generateVoteOptions](UnpublishedElection#generatevoteoptions)
- [get](UnpublishedElection#get)
- [removeQuestion](UnpublishedElection#removequestion)
- [from](UnpublishedElection#from)

## Accessors

### addSDKVersion

• `get` **addSDKVersion**(): `boolean`

#### Returns

`boolean`

#### Overrides

Election.addSDKVersion

#### Defined in

[types/election/unpublished.ts:275](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L275)

• `set` **addSDKVersion**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Overrides

Election.addSDKVersion

#### Defined in

[types/election/unpublished.ts:279](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L279)

___

### census

• `get` **census**(): [`Census`](Census)

#### Returns

[`Census`](Census)

#### Overrides

Election.census

#### Defined in

[types/election/unpublished.ts:249](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L249)

• `set` **census**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Census`](Census) |

#### Returns

`void`

#### Overrides

Election.census

#### Defined in

[types/election/unpublished.ts:253](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L253)

___

### description

• `get` **description**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Overrides

Election.description

#### Defined in

[types/election/unpublished.ts:173](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L173)

• `set` **description**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MultiLanguage`\<`string`\> |

#### Returns

`void`

#### Overrides

Election.description

#### Defined in

[types/election/unpublished.ts:177](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L177)

___

### duration

• `get` **duration**(): `number`

#### Returns

`number`

#### Defined in

[types/election/unpublished.ts:138](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L138)

___

### electionType

• `get` **electionType**(): [`IElectionType`](../interfaces/IElectionType)

#### Returns

[`IElectionType`](../interfaces/IElectionType)

#### Overrides

Election.electionType

#### Defined in

[types/election/unpublished.ts:225](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L225)

• `set` **electionType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IElectionType`](../interfaces/IElectionType) |

#### Returns

`void`

#### Overrides

Election.electionType

#### Defined in

[types/election/unpublished.ts:229](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L229)

___

### endDate

• `get` **endDate**(): `Date`

#### Returns

`Date`

#### Overrides

Election.endDate

#### Defined in

[types/election/unpublished.ts:215](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L215)

• `set` **endDate**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Date` |

#### Returns

`void`

#### Overrides

Election.endDate

#### Defined in

[types/election/unpublished.ts:219](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L219)

___

### header

• `get` **header**(): `string`

#### Returns

`string`

#### Overrides

Election.header

#### Defined in

[types/election/unpublished.ts:181](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L181)

• `set` **header**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Overrides

Election.header

#### Defined in

[types/election/unpublished.ts:185](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L185)

___

### maxCensusSize

• `get` **maxCensusSize**(): `number`

#### Returns

`number`

#### Overrides

Election.maxCensusSize

#### Defined in

[types/election/unpublished.ts:258](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L258)

• `set` **maxCensusSize**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Overrides

Election.maxCensusSize

#### Defined in

[types/election/unpublished.ts:262](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L262)

___

### meta

• `get` **meta**(): `any`

#### Returns

`any`

#### Overrides

Election.meta

#### Defined in

[types/election/unpublished.ts:197](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L197)

• `set` **meta**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Overrides

Election.meta

#### Defined in

[types/election/unpublished.ts:201](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L201)

___

### questions

• `get` **questions**(): [`IQuestion`](../interfaces/IQuestion)[]

#### Returns

[`IQuestion`](../interfaces/IQuestion)[]

#### Overrides

Election.questions

#### Defined in

[types/election/unpublished.ts:241](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L241)

• `set` **questions**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IQuestion`](../interfaces/IQuestion)[] |

#### Returns

`void`

#### Overrides

Election.questions

#### Defined in

[types/election/unpublished.ts:245](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L245)

___

### startDate

• `get` **startDate**(): `Date`

#### Returns

`Date`

#### Overrides

Election.startDate

#### Defined in

[types/election/unpublished.ts:206](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L206)

• `set` **startDate**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Date` |

#### Returns

`void`

#### Overrides

Election.startDate

#### Defined in

[types/election/unpublished.ts:210](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L210)

___

### streamUri

• `get` **streamUri**(): `string`

#### Returns

`string`

#### Overrides

Election.streamUri

#### Defined in

[types/election/unpublished.ts:189](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L189)

• `set` **streamUri**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Overrides

Election.streamUri

#### Defined in

[types/election/unpublished.ts:193](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L193)

___

### temporarySecretIdentity

• `get` **temporarySecretIdentity**(): `boolean`

#### Returns

`boolean`

#### Overrides

Election.temporarySecretIdentity

#### Defined in

[types/election/unpublished.ts:267](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L267)

• `set` **temporarySecretIdentity**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Overrides

Election.temporarySecretIdentity

#### Defined in

[types/election/unpublished.ts:271](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L271)

___

### title

• `get` **title**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Overrides

Election.title

#### Defined in

[types/election/unpublished.ts:164](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L164)

• `set` **title**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MultiLanguage`\<`string`\> |

#### Returns

`void`

#### Overrides

Election.title

#### Defined in

[types/election/unpublished.ts:168](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L168)

___

### voteType

• `get` **voteType**(): [`IVoteType`](../interfaces/IVoteType)

#### Returns

[`IVoteType`](../interfaces/IVoteType)

#### Overrides

Election.voteType

#### Defined in

[types/election/unpublished.ts:233](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L233)

• `set` **voteType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IVoteType`](../interfaces/IVoteType) |

#### Returns

`void`

#### Overrides

Election.voteType

#### Defined in

[types/election/unpublished.ts:237](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L237)

## Constructors

### constructor

• **new UnpublishedElection**(`params`): [`UnpublishedElection`](UnpublishedElection)

Constructs an unpublished election

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IElectionParameters`](../interfaces/IElectionParameters) | Election parameters |

#### Returns

[`UnpublishedElection`](UnpublishedElection)

#### Overrides

Election.constructor

#### Defined in

[types/election/unpublished.ts:23](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L23)

## Methods

### addQuestion

▸ **addQuestion**(`title`, `description`, `choices`): [`UnpublishedElection`](UnpublishedElection)

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` \| `MultiLanguage`\<`string`\> |
| `description` | `string` \| `MultiLanguage`\<`string`\> |
| `choices` | (\{ `title`: `string` ; `value`: `number`  } \| \{ `title`: `MultiLanguage`\<`string`\> ; `value`: `number`  })[] |

#### Returns

[`UnpublishedElection`](UnpublishedElection)

#### Defined in

[types/election/unpublished.ts:41](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L41)

___

### generateEnvelopeType

▸ **generateEnvelopeType**(): `object`

#### Returns

`object`

#### Defined in

[types/election/unpublished.ts:144](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L144)

___

### generateMetadata

▸ **generateMetadata**(`metadata?`): [`ElectionMetadata`](../interfaces/ElectionMetadata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata?` | [`ElectionMetadata`](../interfaces/ElectionMetadata) |

#### Returns

[`ElectionMetadata`](../interfaces/ElectionMetadata)

#### Defined in

[types/election/unpublished.ts:88](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L88)

___

### generateMode

▸ **generateMode**(): `object`

#### Returns

`object`

#### Defined in

[types/election/unpublished.ts:154](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L154)

___

### generateVoteOptions

▸ **generateVoteOptions**(): `object`

#### Returns

`object`

#### Defined in

[types/election/unpublished.ts:123](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L123)

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

[Election](Election.md).[get](Election#get)

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

#### Defined in

[types/election/unpublished.ts:60](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/unpublished.ts#L60)

___

### from

▸ **from**(`params`): [`UnpublishedElection`](UnpublishedElection)

Returns an unpublished election object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IElectionParameters`](../interfaces/IElectionParameters) | Unpublished Election parameters |

#### Returns

[`UnpublishedElection`](UnpublishedElection)

#### Inherited from

[Election](Election.md).[from](Election#from)

#### Defined in

[types/election/election.ts:206](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/types/election/election.ts#L206)
