[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / BudgetElection

# Class: BudgetElection

Represents a budget election

## Hierarchy

- [`UnpublishedElection`](UnpublishedElection.md)

  ↳ **`BudgetElection`**

## Table of contents

### Constructors

- [constructor](BudgetElection.md#constructor)

### Properties

- [\_addSDKVersion](BudgetElection.md#_addsdkversion)
- [\_census](BudgetElection.md#_census)
- [\_description](BudgetElection.md#_description)
- [\_electionType](BudgetElection.md#_electiontype)
- [\_endDate](BudgetElection.md#_enddate)
- [\_forceFullBudget](BudgetElection.md#_forcefullbudget)
- [\_header](BudgetElection.md#_header)
- [\_maxCensusSize](BudgetElection.md#_maxcensussize)
- [\_meta](BudgetElection.md#_meta)
- [\_minStep](BudgetElection.md#_minstep)
- [\_questions](BudgetElection.md#_questions)
- [\_startDate](BudgetElection.md#_startdate)
- [\_streamUri](BudgetElection.md#_streamuri)
- [\_temporarySecretIdentity](BudgetElection.md#_temporarysecretidentity)
- [\_title](BudgetElection.md#_title)
- [\_voteType](BudgetElection.md#_votetype)

### Accessors

- [addSDKVersion](BudgetElection.md#addsdkversion)
- [census](BudgetElection.md#census)
- [description](BudgetElection.md#description)
- [duration](BudgetElection.md#duration)
- [electionType](BudgetElection.md#electiontype)
- [endDate](BudgetElection.md#enddate)
- [forceFullBudget](BudgetElection.md#forcefullbudget)
- [header](BudgetElection.md#header)
- [maxBudget](BudgetElection.md#maxbudget)
- [maxCensusSize](BudgetElection.md#maxcensussize)
- [meta](BudgetElection.md#meta)
- [minStep](BudgetElection.md#minstep)
- [questions](BudgetElection.md#questions)
- [startDate](BudgetElection.md#startdate)
- [streamUri](BudgetElection.md#streamuri)
- [temporarySecretIdentity](BudgetElection.md#temporarysecretidentity)
- [title](BudgetElection.md#title)
- [useCensusWeightAsBudget](BudgetElection.md#usecensusweightasbudget)
- [voteType](BudgetElection.md#votetype)

### Methods

- [addQuestion](BudgetElection.md#addquestion)
- [generateEnvelopeType](BudgetElection.md#generateenvelopetype)
- [generateMetadata](BudgetElection.md#generatemetadata)
- [generateMode](BudgetElection.md#generatemode)
- [generateVoteOptions](BudgetElection.md#generatevoteoptions)
- [get](BudgetElection.md#get)
- [removeQuestion](BudgetElection.md#removequestion)
- [checkVote](BudgetElection.md#checkvote)
- [from](BudgetElection.md#from)

## Constructors

### constructor

• **new BudgetElection**(`params`): [`BudgetElection`](BudgetElection.md)

Constructs a budget election

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IBudgetElectionParameters`](../modules.md#ibudgetelectionparameters) | Budget election parameters |

#### Returns

[`BudgetElection`](BudgetElection.md)

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[constructor](UnpublishedElection.md#constructor)

#### Defined in

[types/election/budget.ts:35](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/budget.ts#L35)

## Properties

### \_addSDKVersion

• `Protected` **\_addSDKVersion**: `boolean`

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_addSDKVersion](UnpublishedElection.md#_addsdkversion)

#### Defined in

[types/election/election.ts:175](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L175)

___

### \_census

• `Protected` **\_census**: [`Census`](Census.md)

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_census](UnpublishedElection.md#_census)

#### Defined in

[types/election/election.ts:172](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L172)

___

### \_description

• `Protected` **\_description**: `MultiLanguage`\<`string`\>

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_description](UnpublishedElection.md#_description)

#### Defined in

[types/election/election.ts:163](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L163)

___

### \_electionType

• `Protected` **\_electionType**: [`IElectionType`](../interfaces/IElectionType.md)

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_electionType](UnpublishedElection.md#_electiontype)

#### Defined in

[types/election/election.ts:169](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L169)

___

### \_endDate

• `Protected` **\_endDate**: `Date`

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_endDate](UnpublishedElection.md#_enddate)

#### Defined in

[types/election/election.ts:168](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L168)

___

### \_forceFullBudget

• `Private` **\_forceFullBudget**: `boolean`

#### Defined in

[types/election/budget.ts:28](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/budget.ts#L28)

___

### \_header

• `Protected` **\_header**: `string`

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_header](UnpublishedElection.md#_header)

#### Defined in

[types/election/election.ts:164](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L164)

___

### \_maxCensusSize

• `Protected` **\_maxCensusSize**: `number`

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_maxCensusSize](UnpublishedElection.md#_maxcensussize)

#### Defined in

[types/election/election.ts:173](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L173)

___

### \_meta

• `Protected` **\_meta**: `any`

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_meta](UnpublishedElection.md#_meta)

#### Defined in

[types/election/election.ts:166](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L166)

___

### \_minStep

• `Private` **\_minStep**: `number`

#### Defined in

[types/election/budget.ts:27](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/budget.ts#L27)

___

### \_questions

• `Protected` **\_questions**: [`IQuestion`](../interfaces/IQuestion.md)[]

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_questions](UnpublishedElection.md#_questions)

#### Defined in

[types/election/election.ts:171](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L171)

___

### \_startDate

• `Protected` **\_startDate**: `Date`

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_startDate](UnpublishedElection.md#_startdate)

#### Defined in

[types/election/election.ts:167](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L167)

___

### \_streamUri

• `Protected` **\_streamUri**: `string`

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_streamUri](UnpublishedElection.md#_streamuri)

#### Defined in

[types/election/election.ts:165](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L165)

___

### \_temporarySecretIdentity

• `Protected` **\_temporarySecretIdentity**: `boolean`

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_temporarySecretIdentity](UnpublishedElection.md#_temporarysecretidentity)

#### Defined in

[types/election/election.ts:174](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L174)

___

### \_title

• `Protected` **\_title**: `MultiLanguage`\<`string`\>

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_title](UnpublishedElection.md#_title)

#### Defined in

[types/election/election.ts:162](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L162)

___

### \_voteType

• `Protected` **\_voteType**: [`IVoteType`](../interfaces/IVoteType.md)

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[_voteType](UnpublishedElection.md#_votetype)

#### Defined in

[types/election/election.ts:170](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L170)

## Accessors

### addSDKVersion

• `get` **addSDKVersion**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UnpublishedElection.addSDKVersion

#### Defined in

[types/election/unpublished.ts:275](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L275)

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

[types/election/unpublished.ts:279](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L279)

___

### census

• `get` **census**(): [`Census`](Census.md)

#### Returns

[`Census`](Census.md)

#### Inherited from

UnpublishedElection.census

#### Defined in

[types/election/unpublished.ts:249](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L249)

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

[types/election/unpublished.ts:253](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L253)

___

### description

• `get` **description**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Inherited from

UnpublishedElection.description

#### Defined in

[types/election/unpublished.ts:173](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L173)

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

[types/election/unpublished.ts:177](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L177)

___

### duration

• `get` **duration**(): `number`

#### Returns

`number`

#### Inherited from

UnpublishedElection.duration

#### Defined in

[types/election/unpublished.ts:138](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L138)

___

### electionType

• `get` **electionType**(): [`IElectionType`](../interfaces/IElectionType.md)

#### Returns

[`IElectionType`](../interfaces/IElectionType.md)

#### Inherited from

UnpublishedElection.electionType

#### Defined in

[types/election/unpublished.ts:225](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L225)

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

[types/election/unpublished.ts:229](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L229)

___

### endDate

• `get` **endDate**(): `Date`

#### Returns

`Date`

#### Inherited from

UnpublishedElection.endDate

#### Defined in

[types/election/unpublished.ts:215](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L215)

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

[types/election/unpublished.ts:219](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L219)

___

### forceFullBudget

• `get` **forceFullBudget**(): `boolean`

#### Returns

`boolean`

#### Defined in

[types/election/budget.ts:132](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/budget.ts#L132)

• `set` **forceFullBudget**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[types/election/budget.ts:136](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/budget.ts#L136)

___

### header

• `get` **header**(): `string`

#### Returns

`string`

#### Inherited from

UnpublishedElection.header

#### Defined in

[types/election/unpublished.ts:181](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L181)

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

[types/election/unpublished.ts:185](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L185)

___

### maxBudget

• `get` **maxBudget**(): `number`

#### Returns

`number`

#### Defined in

[types/election/budget.ts:148](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/budget.ts#L148)

• `set` **maxBudget**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[types/election/budget.ts:152](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/budget.ts#L152)

___

### maxCensusSize

• `get` **maxCensusSize**(): `number`

#### Returns

`number`

#### Inherited from

UnpublishedElection.maxCensusSize

#### Defined in

[types/election/unpublished.ts:258](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L258)

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

[types/election/unpublished.ts:262](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L262)

___

### meta

• `get` **meta**(): `any`

#### Returns

`any`

#### Inherited from

UnpublishedElection.meta

#### Defined in

[types/election/unpublished.ts:197](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L197)

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

[types/election/unpublished.ts:201](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L201)

___

### minStep

• `get` **minStep**(): `number`

#### Returns

`number`

#### Defined in

[types/election/budget.ts:124](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/budget.ts#L124)

• `set` **minStep**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[types/election/budget.ts:128](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/budget.ts#L128)

___

### questions

• `get` **questions**(): [`IQuestion`](../interfaces/IQuestion.md)[]

#### Returns

[`IQuestion`](../interfaces/IQuestion.md)[]

#### Inherited from

UnpublishedElection.questions

#### Defined in

[types/election/unpublished.ts:241](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L241)

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

[types/election/unpublished.ts:245](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L245)

___

### startDate

• `get` **startDate**(): `Date`

#### Returns

`Date`

#### Inherited from

UnpublishedElection.startDate

#### Defined in

[types/election/unpublished.ts:206](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L206)

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

[types/election/unpublished.ts:210](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L210)

___

### streamUri

• `get` **streamUri**(): `string`

#### Returns

`string`

#### Inherited from

UnpublishedElection.streamUri

#### Defined in

[types/election/unpublished.ts:189](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L189)

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

[types/election/unpublished.ts:193](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L193)

___

### temporarySecretIdentity

• `get` **temporarySecretIdentity**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UnpublishedElection.temporarySecretIdentity

#### Defined in

[types/election/unpublished.ts:267](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L267)

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

[types/election/unpublished.ts:271](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L271)

___

### title

• `get` **title**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Inherited from

UnpublishedElection.title

#### Defined in

[types/election/unpublished.ts:164](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L164)

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

[types/election/unpublished.ts:168](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L168)

___

### useCensusWeightAsBudget

• `get` **useCensusWeightAsBudget**(): `boolean`

#### Returns

`boolean`

#### Defined in

[types/election/budget.ts:140](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/budget.ts#L140)

• `set` **useCensusWeightAsBudget**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[types/election/budget.ts:144](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/budget.ts#L144)

___

### voteType

• `get` **voteType**(): [`IVoteType`](../interfaces/IVoteType.md)

#### Returns

[`IVoteType`](../interfaces/IVoteType.md)

#### Inherited from

UnpublishedElection.voteType

#### Defined in

[types/election/unpublished.ts:233](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L233)

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

[types/election/unpublished.ts:237](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L237)

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

[types/election/budget.ts:49](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/budget.ts#L49)

___

### generateEnvelopeType

▸ **generateEnvelopeType**(): `object`

#### Returns

`object`

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[generateEnvelopeType](UnpublishedElection.md#generateenvelopetype)

#### Defined in

[types/election/budget.ts:78](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/budget.ts#L78)

___

### generateMetadata

▸ **generateMetadata**(): [`ElectionMetadata`](../interfaces/ElectionMetadata.md)

#### Returns

[`ElectionMetadata`](../interfaces/ElectionMetadata.md)

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[generateMetadata](UnpublishedElection.md#generatemetadata)

#### Defined in

[types/election/budget.ts:88](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/budget.ts#L88)

___

### generateMode

▸ **generateMode**(): `object`

#### Returns

`object`

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[generateMode](UnpublishedElection.md#generatemode)

#### Defined in

[types/election/unpublished.ts:154](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L154)

___

### generateVoteOptions

▸ **generateVoteOptions**(): `object`

#### Returns

`object`

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[generateVoteOptions](UnpublishedElection.md#generatevoteoptions)

#### Defined in

[types/election/budget.ts:68](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/budget.ts#L68)

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

[types/election/election.ts:266](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L266)

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

[types/election/unpublished.ts:60](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/unpublished.ts#L60)

___

### checkVote

▸ **checkVote**(`vote`, `resultsType`, `voteType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vote` | [`Vote`](Vote.md) |
| `resultsType` | [`ElectionResultsType`](../modules.md#electionresultstype) |
| `voteType` | [`IVoteType`](../interfaces/IVoteType.md) |

#### Returns

`void`

#### Defined in

[types/election/budget.ts:104](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/budget.ts#L104)

___

### from

▸ **from**(`params`): [`BudgetElection`](BudgetElection.md)

Returns an unpublished election object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IBudgetElectionParameters`](../modules.md#ibudgetelectionparameters) | Unpublished Election parameters |

#### Returns

[`BudgetElection`](BudgetElection.md)

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[from](UnpublishedElection.md#from)

#### Defined in

[types/election/budget.ts:45](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/budget.ts#L45)
