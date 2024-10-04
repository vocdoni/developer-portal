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
- [summarizeMetadata](UnpublishedElection#summarizemetadata)
- [from](UnpublishedElection#from)

## Accessors

### addSDKVersion

• `get` **addSDKVersion**(): `boolean`

#### Returns

`boolean`

#### Overrides

Election.addSDKVersion

#### Defined in

[src/types/election/unpublished.ts:285](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L285)

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

[src/types/election/unpublished.ts:289](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L289)

___

### census

• `get` **census**(): [`Census`](Census)

#### Returns

[`Census`](Census)

#### Overrides

Election.census

#### Defined in

[src/types/election/unpublished.ts:259](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L259)

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

[src/types/election/unpublished.ts:263](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L263)

___

### description

• `get` **description**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Overrides

Election.description

#### Defined in

[src/types/election/unpublished.ts:183](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L183)

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

[src/types/election/unpublished.ts:187](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L187)

___

### duration

• `get` **duration**(): `number`

#### Returns

`number`

#### Defined in

[src/types/election/unpublished.ts:149](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L149)

___

### electionType

• `get` **electionType**(): [`IElectionType`](../interfaces/IElectionType)

#### Returns

[`IElectionType`](../interfaces/IElectionType)

#### Overrides

Election.electionType

#### Defined in

[src/types/election/unpublished.ts:235](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L235)

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

[src/types/election/unpublished.ts:239](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L239)

___

### endDate

• `get` **endDate**(): `Date`

#### Returns

`Date`

#### Overrides

Election.endDate

#### Defined in

[src/types/election/unpublished.ts:225](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L225)

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

[src/types/election/unpublished.ts:229](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L229)

___

### header

• `get` **header**(): `string`

#### Returns

`string`

#### Overrides

Election.header

#### Defined in

[src/types/election/unpublished.ts:191](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L191)

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

[src/types/election/unpublished.ts:195](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L195)

___

### maxCensusSize

• `get` **maxCensusSize**(): `number`

#### Returns

`number`

#### Overrides

Election.maxCensusSize

#### Defined in

[src/types/election/unpublished.ts:268](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L268)

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

[src/types/election/unpublished.ts:272](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L272)

___

### meta

• `get` **meta**(): `any`

#### Returns

`any`

#### Overrides

Election.meta

#### Defined in

[src/types/election/unpublished.ts:207](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L207)

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

[src/types/election/unpublished.ts:211](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L211)

___

### questions

• `get` **questions**(): [`IQuestion`](../interfaces/IQuestion)[]

#### Returns

[`IQuestion`](../interfaces/IQuestion)[]

#### Overrides

Election.questions

#### Defined in

[src/types/election/unpublished.ts:251](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L251)

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

[src/types/election/unpublished.ts:255](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L255)

___

### startDate

• `get` **startDate**(): `Date`

#### Returns

`Date`

#### Overrides

Election.startDate

#### Defined in

[src/types/election/unpublished.ts:216](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L216)

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

[src/types/election/unpublished.ts:220](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L220)

___

### streamUri

• `get` **streamUri**(): `string`

#### Returns

`string`

#### Overrides

Election.streamUri

#### Defined in

[src/types/election/unpublished.ts:199](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L199)

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

[src/types/election/unpublished.ts:203](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L203)

___

### temporarySecretIdentity

• `get` **temporarySecretIdentity**(): `boolean`

#### Returns

`boolean`

#### Overrides

Election.temporarySecretIdentity

#### Defined in

[src/types/election/unpublished.ts:277](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L277)

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

[src/types/election/unpublished.ts:281](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L281)

___

### title

• `get` **title**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Overrides

Election.title

#### Defined in

[src/types/election/unpublished.ts:174](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L174)

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

[src/types/election/unpublished.ts:178](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L178)

___

### voteType

• `get` **voteType**(): [`IVoteType`](../interfaces/IVoteType)

#### Returns

[`IVoteType`](../interfaces/IVoteType)

#### Overrides

Election.voteType

#### Defined in

[src/types/election/unpublished.ts:243](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L243)

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

[src/types/election/unpublished.ts:247](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L247)

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

[src/types/election/unpublished.ts:24](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L24)

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

[src/types/election/unpublished.ts:42](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L42)

___

### generateEnvelopeType

▸ **generateEnvelopeType**(): `object`

#### Returns

`object`

#### Defined in

[src/types/election/unpublished.ts:155](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L155)

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

[src/types/election/unpublished.ts:92](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L92)

___

### generateMode

▸ **generateMode**(): `object`

#### Returns

`object`

#### Defined in

[src/types/election/unpublished.ts:165](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L165)

___

### generateVoteOptions

▸ **generateVoteOptions**(): `object`

#### Returns

`object`

#### Defined in

[src/types/election/unpublished.ts:134](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L134)

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

[src/types/election/election.ts:275](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/election.ts#L275)

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

[src/types/election/unpublished.ts:61](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L61)

___

### summarizeMetadata

▸ **summarizeMetadata**(): `string`

#### Returns

`string`

#### Defined in

[src/types/election/unpublished.ts:127](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L127)

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

[src/types/election/election.ts:215](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/election.ts#L215)
