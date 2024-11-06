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

[src/types/election/unpublished.ts:291](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L291)

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

[src/types/election/unpublished.ts:295](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L295)

___

### census

• `get` **census**(): [`Census`](Census)

#### Returns

[`Census`](Census)

#### Overrides

Election.census

#### Defined in

[src/types/election/unpublished.ts:265](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L265)

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

[src/types/election/unpublished.ts:269](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L269)

___

### description

• `get` **description**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Overrides

Election.description

#### Defined in

[src/types/election/unpublished.ts:189](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L189)

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

[src/types/election/unpublished.ts:193](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L193)

___

### duration

• `get` **duration**(): `number`

#### Returns

`number`

#### Defined in

[src/types/election/unpublished.ts:155](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L155)

___

### electionType

• `get` **electionType**(): [`IElectionType`](../interfaces/IElectionType)

#### Returns

[`IElectionType`](../interfaces/IElectionType)

#### Overrides

Election.electionType

#### Defined in

[src/types/election/unpublished.ts:241](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L241)

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

[src/types/election/unpublished.ts:245](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L245)

___

### endDate

• `get` **endDate**(): `Date`

#### Returns

`Date`

#### Overrides

Election.endDate

#### Defined in

[src/types/election/unpublished.ts:231](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L231)

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

[src/types/election/unpublished.ts:235](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L235)

___

### header

• `get` **header**(): `string`

#### Returns

`string`

#### Overrides

Election.header

#### Defined in

[src/types/election/unpublished.ts:197](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L197)

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

[src/types/election/unpublished.ts:201](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L201)

___

### maxCensusSize

• `get` **maxCensusSize**(): `number`

#### Returns

`number`

#### Overrides

Election.maxCensusSize

#### Defined in

[src/types/election/unpublished.ts:274](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L274)

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

[src/types/election/unpublished.ts:278](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L278)

___

### meta

• `get` **meta**(): `any`

#### Returns

`any`

#### Overrides

Election.meta

#### Defined in

[src/types/election/unpublished.ts:213](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L213)

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

[src/types/election/unpublished.ts:217](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L217)

___

### questions

• `get` **questions**(): [`IQuestion`](../interfaces/IQuestion)[]

#### Returns

[`IQuestion`](../interfaces/IQuestion)[]

#### Overrides

Election.questions

#### Defined in

[src/types/election/unpublished.ts:257](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L257)

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

[src/types/election/unpublished.ts:261](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L261)

___

### startDate

• `get` **startDate**(): `Date`

#### Returns

`Date`

#### Overrides

Election.startDate

#### Defined in

[src/types/election/unpublished.ts:222](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L222)

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

[src/types/election/unpublished.ts:226](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L226)

___

### streamUri

• `get` **streamUri**(): `string`

#### Returns

`string`

#### Overrides

Election.streamUri

#### Defined in

[src/types/election/unpublished.ts:205](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L205)

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

[src/types/election/unpublished.ts:209](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L209)

___

### temporarySecretIdentity

• `get` **temporarySecretIdentity**(): `boolean`

#### Returns

`boolean`

#### Overrides

Election.temporarySecretIdentity

#### Defined in

[src/types/election/unpublished.ts:283](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L283)

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

[src/types/election/unpublished.ts:287](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L287)

___

### title

• `get` **title**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Overrides

Election.title

#### Defined in

[src/types/election/unpublished.ts:180](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L180)

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

[src/types/election/unpublished.ts:184](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L184)

___

### voteType

• `get` **voteType**(): [`IVoteType`](../interfaces/IVoteType)

#### Returns

[`IVoteType`](../interfaces/IVoteType)

#### Overrides

Election.voteType

#### Defined in

[src/types/election/unpublished.ts:249](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L249)

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

[src/types/election/unpublished.ts:253](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L253)

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

[src/types/election/unpublished.ts:25](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L25)

## Methods

### addQuestion

▸ **addQuestion**(`title`, `description`, `choices`, `meta?`): [`UnpublishedElection`](UnpublishedElection)

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` \| `MultiLanguage`\<`string`\> |
| `description` | `string` \| `MultiLanguage`\<`string`\> |
| `choices` | (\{ `meta?`: `any` ; `title`: `string` ; `value?`: `number`  } \| [`Choice`](../sdk-reference#choice))[] |
| `meta?` | `any` |

#### Returns

[`UnpublishedElection`](UnpublishedElection)

#### Defined in

[src/types/election/unpublished.ts:43](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L43)

___

### generateEnvelopeType

▸ **generateEnvelopeType**(): `object`

#### Returns

`object`

#### Defined in

[src/types/election/unpublished.ts:161](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L161)

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

[src/types/election/unpublished.ts:96](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L96)

___

### generateMode

▸ **generateMode**(): `object`

#### Returns

`object`

#### Defined in

[src/types/election/unpublished.ts:171](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L171)

___

### generateVoteOptions

▸ **generateVoteOptions**(): `object`

#### Returns

`object`

#### Defined in

[src/types/election/unpublished.ts:140](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L140)

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

#### Defined in

[src/types/election/unpublished.ts:65](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L65)

___

### summarizeMetadata

▸ **summarizeMetadata**(): `string`

#### Returns

`string`

#### Defined in

[src/types/election/unpublished.ts:133](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/unpublished.ts#L133)

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

[src/types/election/election.ts:215](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L215)
