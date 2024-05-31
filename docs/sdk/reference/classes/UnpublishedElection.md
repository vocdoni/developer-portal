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

[types/election/unpublished.ts:287](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L287)

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

[types/election/unpublished.ts:291](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L291)

___

### census

• `get` **census**(): [`Census`](Census)

#### Returns

[`Census`](Census)

#### Overrides

Election.census

#### Defined in

[types/election/unpublished.ts:261](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L261)

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

[types/election/unpublished.ts:265](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L265)

___

### description

• `get` **description**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Overrides

Election.description

#### Defined in

[types/election/unpublished.ts:185](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L185)

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

[types/election/unpublished.ts:189](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L189)

___

### duration

• `get` **duration**(): `number`

#### Returns

`number`

#### Defined in

[types/election/unpublished.ts:150](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L150)

___

### electionType

• `get` **electionType**(): [`IElectionType`](../interfaces/IElectionType)

#### Returns

[`IElectionType`](../interfaces/IElectionType)

#### Overrides

Election.electionType

#### Defined in

[types/election/unpublished.ts:237](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L237)

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

[types/election/unpublished.ts:241](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L241)

___

### endDate

• `get` **endDate**(): `Date`

#### Returns

`Date`

#### Overrides

Election.endDate

#### Defined in

[types/election/unpublished.ts:227](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L227)

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

[types/election/unpublished.ts:231](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L231)

___

### header

• `get` **header**(): `string`

#### Returns

`string`

#### Overrides

Election.header

#### Defined in

[types/election/unpublished.ts:193](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L193)

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

[types/election/unpublished.ts:197](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L197)

___

### maxCensusSize

• `get` **maxCensusSize**(): `number`

#### Returns

`number`

#### Overrides

Election.maxCensusSize

#### Defined in

[types/election/unpublished.ts:270](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L270)

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

[types/election/unpublished.ts:274](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L274)

___

### meta

• `get` **meta**(): `any`

#### Returns

`any`

#### Overrides

Election.meta

#### Defined in

[types/election/unpublished.ts:209](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L209)

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

[types/election/unpublished.ts:213](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L213)

___

### questions

• `get` **questions**(): [`IQuestion`](../interfaces/IQuestion)[]

#### Returns

[`IQuestion`](../interfaces/IQuestion)[]

#### Overrides

Election.questions

#### Defined in

[types/election/unpublished.ts:253](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L253)

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

[types/election/unpublished.ts:257](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L257)

___

### startDate

• `get` **startDate**(): `Date`

#### Returns

`Date`

#### Overrides

Election.startDate

#### Defined in

[types/election/unpublished.ts:218](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L218)

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

[types/election/unpublished.ts:222](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L222)

___

### streamUri

• `get` **streamUri**(): `string`

#### Returns

`string`

#### Overrides

Election.streamUri

#### Defined in

[types/election/unpublished.ts:201](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L201)

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

[types/election/unpublished.ts:205](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L205)

___

### temporarySecretIdentity

• `get` **temporarySecretIdentity**(): `boolean`

#### Returns

`boolean`

#### Overrides

Election.temporarySecretIdentity

#### Defined in

[types/election/unpublished.ts:279](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L279)

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

[types/election/unpublished.ts:283](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L283)

___

### title

• `get` **title**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Overrides

Election.title

#### Defined in

[types/election/unpublished.ts:176](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L176)

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

[types/election/unpublished.ts:180](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L180)

___

### voteType

• `get` **voteType**(): [`IVoteType`](../interfaces/IVoteType)

#### Returns

[`IVoteType`](../interfaces/IVoteType)

#### Overrides

Election.voteType

#### Defined in

[types/election/unpublished.ts:245](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L245)

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

[types/election/unpublished.ts:249](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L249)

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

[types/election/unpublished.ts:24](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L24)

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

[types/election/unpublished.ts:42](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L42)

___

### generateEnvelopeType

▸ **generateEnvelopeType**(): `object`

#### Returns

`object`

#### Defined in

[types/election/unpublished.ts:156](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L156)

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

[types/election/unpublished.ts:93](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L93)

___

### generateMode

▸ **generateMode**(): `object`

#### Returns

`object`

#### Defined in

[types/election/unpublished.ts:166](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L166)

___

### generateVoteOptions

▸ **generateVoteOptions**(): `object`

#### Returns

`object`

#### Defined in

[types/election/unpublished.ts:135](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L135)

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

[types/election/election.ts:279](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/election.ts#L279)

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

[types/election/unpublished.ts:61](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L61)

___

### summarizeMetadata

▸ **summarizeMetadata**(): `string`

#### Returns

`string`

#### Defined in

[types/election/unpublished.ts:128](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/unpublished.ts#L128)

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

[types/election/election.ts:219](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/election/election.ts#L219)
