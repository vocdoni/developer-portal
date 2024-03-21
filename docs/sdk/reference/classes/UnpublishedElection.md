[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / UnpublishedElection

# Class: UnpublishedElection

Represents an unpublished election

## Hierarchy

- [`Election`](Election.md)

  ↳ **`UnpublishedElection`**

  ↳↳ [`MultiChoiceElection`](MultiChoiceElection.md)

  ↳↳ [`BudgetElection`](BudgetElection.md)

  ↳↳ [`ApprovalElection`](ApprovalElection.md)

## Table of contents

### Constructors

- [constructor](UnpublishedElection.md#constructor)

### Properties

- [\_addSDKVersion](UnpublishedElection.md#_addsdkversion)
- [\_census](UnpublishedElection.md#_census)
- [\_description](UnpublishedElection.md#_description)
- [\_electionType](UnpublishedElection.md#_electiontype)
- [\_endDate](UnpublishedElection.md#_enddate)
- [\_header](UnpublishedElection.md#_header)
- [\_maxCensusSize](UnpublishedElection.md#_maxcensussize)
- [\_meta](UnpublishedElection.md#_meta)
- [\_questions](UnpublishedElection.md#_questions)
- [\_startDate](UnpublishedElection.md#_startdate)
- [\_streamUri](UnpublishedElection.md#_streamuri)
- [\_temporarySecretIdentity](UnpublishedElection.md#_temporarysecretidentity)
- [\_title](UnpublishedElection.md#_title)
- [\_voteType](UnpublishedElection.md#_votetype)

### Accessors

- [addSDKVersion](UnpublishedElection.md#addsdkversion)
- [census](UnpublishedElection.md#census)
- [description](UnpublishedElection.md#description)
- [duration](UnpublishedElection.md#duration)
- [electionType](UnpublishedElection.md#electiontype)
- [endDate](UnpublishedElection.md#enddate)
- [header](UnpublishedElection.md#header)
- [maxCensusSize](UnpublishedElection.md#maxcensussize)
- [meta](UnpublishedElection.md#meta)
- [questions](UnpublishedElection.md#questions)
- [startDate](UnpublishedElection.md#startdate)
- [streamUri](UnpublishedElection.md#streamuri)
- [temporarySecretIdentity](UnpublishedElection.md#temporarysecretidentity)
- [title](UnpublishedElection.md#title)
- [voteType](UnpublishedElection.md#votetype)

### Methods

- [addQuestion](UnpublishedElection.md#addquestion)
- [generateEnvelopeType](UnpublishedElection.md#generateenvelopetype)
- [generateMetadata](UnpublishedElection.md#generatemetadata)
- [generateMode](UnpublishedElection.md#generatemode)
- [generateVoteOptions](UnpublishedElection.md#generatevoteoptions)
- [get](UnpublishedElection.md#get)
- [removeQuestion](UnpublishedElection.md#removequestion)
- [from](UnpublishedElection.md#from)
- [fullElectionType](UnpublishedElection.md#fullelectiontype)
- [fullVoteType](UnpublishedElection.md#fullvotetype)

## Constructors

### constructor

• **new UnpublishedElection**(`params`): [`UnpublishedElection`](UnpublishedElection.md)

Constructs an unpublished election

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IElectionParameters`](../interfaces/IElectionParameters.md) | Election parameters |

#### Returns

[`UnpublishedElection`](UnpublishedElection.md)

#### Overrides

[Election](Election.md).[constructor](Election.md#constructor)

#### Defined in

[types/election/unpublished.ts:23](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L23)

## Properties

### \_addSDKVersion

• `Protected` **\_addSDKVersion**: `boolean`

#### Inherited from

[Election](Election.md).[_addSDKVersion](Election.md#_addsdkversion)

#### Defined in

[types/election/election.ts:175](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L175)

___

### \_census

• `Protected` **\_census**: [`Census`](Census.md)

#### Inherited from

[Election](Election.md).[_census](Election.md#_census)

#### Defined in

[types/election/election.ts:172](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L172)

___

### \_description

• `Protected` **\_description**: `MultiLanguage`\<`string`\>

#### Inherited from

[Election](Election.md).[_description](Election.md#_description)

#### Defined in

[types/election/election.ts:163](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L163)

___

### \_electionType

• `Protected` **\_electionType**: [`IElectionType`](../interfaces/IElectionType.md)

#### Inherited from

[Election](Election.md).[_electionType](Election.md#_electiontype)

#### Defined in

[types/election/election.ts:169](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L169)

___

### \_endDate

• `Protected` **\_endDate**: `Date`

#### Inherited from

[Election](Election.md).[_endDate](Election.md#_enddate)

#### Defined in

[types/election/election.ts:168](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L168)

___

### \_header

• `Protected` **\_header**: `string`

#### Inherited from

[Election](Election.md).[_header](Election.md#_header)

#### Defined in

[types/election/election.ts:164](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L164)

___

### \_maxCensusSize

• `Protected` **\_maxCensusSize**: `number`

#### Inherited from

[Election](Election.md).[_maxCensusSize](Election.md#_maxcensussize)

#### Defined in

[types/election/election.ts:173](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L173)

___

### \_meta

• `Protected` **\_meta**: `any`

#### Inherited from

[Election](Election.md).[_meta](Election.md#_meta)

#### Defined in

[types/election/election.ts:166](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L166)

___

### \_questions

• `Protected` **\_questions**: [`IQuestion`](../interfaces/IQuestion.md)[]

#### Inherited from

[Election](Election.md).[_questions](Election.md#_questions)

#### Defined in

[types/election/election.ts:171](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L171)

___

### \_startDate

• `Protected` **\_startDate**: `Date`

#### Inherited from

[Election](Election.md).[_startDate](Election.md#_startdate)

#### Defined in

[types/election/election.ts:167](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L167)

___

### \_streamUri

• `Protected` **\_streamUri**: `string`

#### Inherited from

[Election](Election.md).[_streamUri](Election.md#_streamuri)

#### Defined in

[types/election/election.ts:165](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L165)

___

### \_temporarySecretIdentity

• `Protected` **\_temporarySecretIdentity**: `boolean`

#### Inherited from

[Election](Election.md).[_temporarySecretIdentity](Election.md#_temporarysecretidentity)

#### Defined in

[types/election/election.ts:174](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L174)

___

### \_title

• `Protected` **\_title**: `MultiLanguage`\<`string`\>

#### Inherited from

[Election](Election.md).[_title](Election.md#_title)

#### Defined in

[types/election/election.ts:162](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L162)

___

### \_voteType

• `Protected` **\_voteType**: [`IVoteType`](../interfaces/IVoteType.md)

#### Inherited from

[Election](Election.md).[_voteType](Election.md#_votetype)

#### Defined in

[types/election/election.ts:170](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L170)

## Accessors

### addSDKVersion

• `get` **addSDKVersion**(): `boolean`

#### Returns

`boolean`

#### Overrides

Election.addSDKVersion

#### Defined in

[types/election/unpublished.ts:275](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L275)

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

[types/election/unpublished.ts:279](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L279)

___

### census

• `get` **census**(): [`Census`](Census.md)

#### Returns

[`Census`](Census.md)

#### Overrides

Election.census

#### Defined in

[types/election/unpublished.ts:249](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L249)

• `set` **census**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Census`](Census.md) |

#### Returns

`void`

#### Overrides

Election.census

#### Defined in

[types/election/unpublished.ts:253](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L253)

___

### description

• `get` **description**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Overrides

Election.description

#### Defined in

[types/election/unpublished.ts:173](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L173)

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

[types/election/unpublished.ts:177](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L177)

___

### duration

• `get` **duration**(): `number`

#### Returns

`number`

#### Defined in

[types/election/unpublished.ts:138](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L138)

___

### electionType

• `get` **electionType**(): [`IElectionType`](../interfaces/IElectionType.md)

#### Returns

[`IElectionType`](../interfaces/IElectionType.md)

#### Overrides

Election.electionType

#### Defined in

[types/election/unpublished.ts:225](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L225)

• `set` **electionType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IElectionType`](../interfaces/IElectionType.md) |

#### Returns

`void`

#### Overrides

Election.electionType

#### Defined in

[types/election/unpublished.ts:229](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L229)

___

### endDate

• `get` **endDate**(): `Date`

#### Returns

`Date`

#### Overrides

Election.endDate

#### Defined in

[types/election/unpublished.ts:215](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L215)

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

[types/election/unpublished.ts:219](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L219)

___

### header

• `get` **header**(): `string`

#### Returns

`string`

#### Overrides

Election.header

#### Defined in

[types/election/unpublished.ts:181](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L181)

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

[types/election/unpublished.ts:185](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L185)

___

### maxCensusSize

• `get` **maxCensusSize**(): `number`

#### Returns

`number`

#### Overrides

Election.maxCensusSize

#### Defined in

[types/election/unpublished.ts:258](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L258)

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

[types/election/unpublished.ts:262](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L262)

___

### meta

• `get` **meta**(): `any`

#### Returns

`any`

#### Overrides

Election.meta

#### Defined in

[types/election/unpublished.ts:197](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L197)

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

[types/election/unpublished.ts:201](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L201)

___

### questions

• `get` **questions**(): [`IQuestion`](../interfaces/IQuestion.md)[]

#### Returns

[`IQuestion`](../interfaces/IQuestion.md)[]

#### Overrides

Election.questions

#### Defined in

[types/election/unpublished.ts:241](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L241)

• `set` **questions**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IQuestion`](../interfaces/IQuestion.md)[] |

#### Returns

`void`

#### Overrides

Election.questions

#### Defined in

[types/election/unpublished.ts:245](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L245)

___

### startDate

• `get` **startDate**(): `Date`

#### Returns

`Date`

#### Overrides

Election.startDate

#### Defined in

[types/election/unpublished.ts:206](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L206)

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

[types/election/unpublished.ts:210](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L210)

___

### streamUri

• `get` **streamUri**(): `string`

#### Returns

`string`

#### Overrides

Election.streamUri

#### Defined in

[types/election/unpublished.ts:189](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L189)

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

[types/election/unpublished.ts:193](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L193)

___

### temporarySecretIdentity

• `get` **temporarySecretIdentity**(): `boolean`

#### Returns

`boolean`

#### Overrides

Election.temporarySecretIdentity

#### Defined in

[types/election/unpublished.ts:267](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L267)

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

[types/election/unpublished.ts:271](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L271)

___

### title

• `get` **title**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Overrides

Election.title

#### Defined in

[types/election/unpublished.ts:164](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L164)

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

[types/election/unpublished.ts:168](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L168)

___

### voteType

• `get` **voteType**(): [`IVoteType`](../interfaces/IVoteType.md)

#### Returns

[`IVoteType`](../interfaces/IVoteType.md)

#### Overrides

Election.voteType

#### Defined in

[types/election/unpublished.ts:233](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L233)

• `set` **voteType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IVoteType`](../interfaces/IVoteType.md) |

#### Returns

`void`

#### Overrides

Election.voteType

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
| `choices` | (\{ `title`: `string` ; `value`: `number`  } \| \{ `title`: `MultiLanguage`\<`string`\> ; `value`: `number`  })[] |

#### Returns

[`UnpublishedElection`](UnpublishedElection.md)

#### Defined in

[types/election/unpublished.ts:41](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L41)

___

### generateEnvelopeType

▸ **generateEnvelopeType**(): `object`

#### Returns

`object`

#### Defined in

[types/election/unpublished.ts:144](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L144)

___

### generateMetadata

▸ **generateMetadata**(`metadata?`): [`ElectionMetadata`](../interfaces/ElectionMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata?` | [`ElectionMetadata`](../interfaces/ElectionMetadata.md) |

#### Returns

[`ElectionMetadata`](../interfaces/ElectionMetadata.md)

#### Defined in

[types/election/unpublished.ts:88](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L88)

___

### generateMode

▸ **generateMode**(): `object`

#### Returns

`object`

#### Defined in

[types/election/unpublished.ts:154](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L154)

___

### generateVoteOptions

▸ **generateVoteOptions**(): `object`

#### Returns

`object`

#### Defined in

[types/election/unpublished.ts:123](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L123)

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

[Election](Election.md).[get](Election.md#get)

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

#### Defined in

[types/election/unpublished.ts:60](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L60)

___

### from

▸ **from**(`params`): [`UnpublishedElection`](UnpublishedElection.md)

Returns an unpublished election object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IElectionParameters`](../interfaces/IElectionParameters.md) | Unpublished Election parameters |

#### Returns

[`UnpublishedElection`](UnpublishedElection.md)

#### Inherited from

[Election](Election.md).[from](Election.md#from)

#### Defined in

[types/election/election.ts:206](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L206)

___

### fullElectionType

▸ **fullElectionType**(`value`): [`IElectionType`](../interfaces/IElectionType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IElectionType`](../interfaces/IElectionType.md) |

#### Returns

[`IElectionType`](../interfaces/IElectionType.md)

#### Defined in

[types/election/unpublished.ts:66](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L66)

___

### fullVoteType

▸ **fullVoteType**(`value`): [`IVoteType`](../interfaces/IVoteType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IVoteType`](../interfaces/IVoteType.md) |

#### Returns

[`IVoteType`](../interfaces/IVoteType.md)

#### Defined in

[types/election/unpublished.ts:76](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/unpublished.ts#L76)
