[@vocdoni/sdk](/sdk) / BudgetElection

# Class: BudgetElection

Represents a budget election

## Hierarchy

- [`UnpublishedElection`](UnpublishedElection)

  ↳ **`BudgetElection`**

## Table of contents

### Accessors

- [addSDKVersion](BudgetElection#addsdkversion)
- [census](BudgetElection#census)
- [description](BudgetElection#description)
- [duration](BudgetElection#duration)
- [electionType](BudgetElection#electiontype)
- [endDate](BudgetElection#enddate)
- [forceFullBudget](BudgetElection#forcefullbudget)
- [header](BudgetElection#header)
- [maxBudget](BudgetElection#maxbudget)
- [maxCensusSize](BudgetElection#maxcensussize)
- [meta](BudgetElection#meta)
- [minStep](BudgetElection#minstep)
- [questions](BudgetElection#questions)
- [startDate](BudgetElection#startdate)
- [streamUri](BudgetElection#streamuri)
- [temporarySecretIdentity](BudgetElection#temporarysecretidentity)
- [title](BudgetElection#title)
- [useCensusWeightAsBudget](BudgetElection#usecensusweightasbudget)
- [voteType](BudgetElection#votetype)

### Constructors

- [constructor](BudgetElection#constructor)

### Methods

- [addQuestion](BudgetElection#addquestion)
- [generateEnvelopeType](BudgetElection#generateenvelopetype)
- [generateMetadata](BudgetElection#generatemetadata)
- [generateMode](BudgetElection#generatemode)
- [generateVoteOptions](BudgetElection#generatevoteoptions)
- [get](BudgetElection#get)
- [removeQuestion](BudgetElection#removequestion)
- [summarizeMetadata](BudgetElection#summarizemetadata)
- [checkVote](BudgetElection#checkvote)
- [from](BudgetElection#from)

## Accessors

### addSDKVersion

• `get` **addSDKVersion**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UnpublishedElection.addSDKVersion

#### Defined in

[src/types/election/unpublished.ts:285](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L285)

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

[src/types/election/unpublished.ts:289](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L289)

___

### census

• `get` **census**(): [`Census`](Census)

#### Returns

[`Census`](Census)

#### Inherited from

UnpublishedElection.census

#### Defined in

[src/types/election/unpublished.ts:259](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L259)

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

[src/types/election/unpublished.ts:263](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L263)

___

### description

• `get` **description**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Inherited from

UnpublishedElection.description

#### Defined in

[src/types/election/unpublished.ts:183](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L183)

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

[src/types/election/unpublished.ts:187](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L187)

___

### duration

• `get` **duration**(): `number`

#### Returns

`number`

#### Inherited from

UnpublishedElection.duration

#### Defined in

[src/types/election/unpublished.ts:149](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L149)

___

### electionType

• `get` **electionType**(): [`IElectionType`](../interfaces/IElectionType)

#### Returns

[`IElectionType`](../interfaces/IElectionType)

#### Inherited from

UnpublishedElection.electionType

#### Defined in

[src/types/election/unpublished.ts:235](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L235)

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

[src/types/election/unpublished.ts:239](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L239)

___

### endDate

• `get` **endDate**(): `Date`

#### Returns

`Date`

#### Inherited from

UnpublishedElection.endDate

#### Defined in

[src/types/election/unpublished.ts:225](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L225)

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

[src/types/election/unpublished.ts:229](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L229)

___

### forceFullBudget

• `get` **forceFullBudget**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/types/election/budget.ts:137](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/budget.ts#L137)

• `set` **forceFullBudget**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/types/election/budget.ts:141](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/budget.ts#L141)

___

### header

• `get` **header**(): `string`

#### Returns

`string`

#### Inherited from

UnpublishedElection.header

#### Defined in

[src/types/election/unpublished.ts:191](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L191)

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

[src/types/election/unpublished.ts:195](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L195)

___

### maxBudget

• `get` **maxBudget**(): `number`

#### Returns

`number`

#### Defined in

[src/types/election/budget.ts:153](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/budget.ts#L153)

• `set` **maxBudget**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/types/election/budget.ts:157](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/budget.ts#L157)

___

### maxCensusSize

• `get` **maxCensusSize**(): `number`

#### Returns

`number`

#### Inherited from

UnpublishedElection.maxCensusSize

#### Defined in

[src/types/election/unpublished.ts:268](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L268)

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

[src/types/election/unpublished.ts:272](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L272)

___

### meta

• `get` **meta**(): `any`

#### Returns

`any`

#### Inherited from

UnpublishedElection.meta

#### Defined in

[src/types/election/unpublished.ts:207](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L207)

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

[src/types/election/unpublished.ts:211](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L211)

___

### minStep

• `get` **minStep**(): `number`

#### Returns

`number`

#### Defined in

[src/types/election/budget.ts:129](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/budget.ts#L129)

• `set` **minStep**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/types/election/budget.ts:133](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/budget.ts#L133)

___

### questions

• `get` **questions**(): [`IQuestion`](../interfaces/IQuestion)[]

#### Returns

[`IQuestion`](../interfaces/IQuestion)[]

#### Inherited from

UnpublishedElection.questions

#### Defined in

[src/types/election/unpublished.ts:251](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L251)

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

[src/types/election/unpublished.ts:255](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L255)

___

### startDate

• `get` **startDate**(): `Date`

#### Returns

`Date`

#### Inherited from

UnpublishedElection.startDate

#### Defined in

[src/types/election/unpublished.ts:216](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L216)

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

[src/types/election/unpublished.ts:220](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L220)

___

### streamUri

• `get` **streamUri**(): `string`

#### Returns

`string`

#### Inherited from

UnpublishedElection.streamUri

#### Defined in

[src/types/election/unpublished.ts:199](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L199)

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

[src/types/election/unpublished.ts:203](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L203)

___

### temporarySecretIdentity

• `get` **temporarySecretIdentity**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UnpublishedElection.temporarySecretIdentity

#### Defined in

[src/types/election/unpublished.ts:277](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L277)

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

[src/types/election/unpublished.ts:281](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L281)

___

### title

• `get` **title**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Inherited from

UnpublishedElection.title

#### Defined in

[src/types/election/unpublished.ts:174](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L174)

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

[src/types/election/unpublished.ts:178](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L178)

___

### useCensusWeightAsBudget

• `get` **useCensusWeightAsBudget**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/types/election/budget.ts:145](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/budget.ts#L145)

• `set` **useCensusWeightAsBudget**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/types/election/budget.ts:149](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/budget.ts#L149)

___

### voteType

• `get` **voteType**(): [`IVoteType`](../interfaces/IVoteType)

#### Returns

[`IVoteType`](../interfaces/IVoteType)

#### Inherited from

UnpublishedElection.voteType

#### Defined in

[src/types/election/unpublished.ts:243](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L243)

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

[src/types/election/unpublished.ts:247](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L247)

## Constructors

### constructor

• **new BudgetElection**(`params`): [`BudgetElection`](BudgetElection)

Constructs a budget election

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IBudgetElectionParameters`](../sdk-reference#ibudgetelectionparameters) | Budget election parameters |

#### Returns

[`BudgetElection`](BudgetElection)

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[constructor](UnpublishedElection#constructor)

#### Defined in

[src/types/election/budget.ts:40](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/budget.ts#L40)

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

[src/types/election/budget.ts:54](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/budget.ts#L54)

___

### generateEnvelopeType

▸ **generateEnvelopeType**(): `object`

#### Returns

`object`

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[generateEnvelopeType](UnpublishedElection#generateenvelopetype)

#### Defined in

[src/types/election/budget.ts:83](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/budget.ts#L83)

___

### generateMetadata

▸ **generateMetadata**(): [`ElectionMetadata`](../interfaces/ElectionMetadata)

#### Returns

[`ElectionMetadata`](../interfaces/ElectionMetadata)

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[generateMetadata](UnpublishedElection#generatemetadata)

#### Defined in

[src/types/election/budget.ts:93](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/budget.ts#L93)

___

### generateMode

▸ **generateMode**(): `object`

#### Returns

`object`

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[generateMode](UnpublishedElection#generatemode)

#### Defined in

[src/types/election/unpublished.ts:165](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L165)

___

### generateVoteOptions

▸ **generateVoteOptions**(): `object`

#### Returns

`object`

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[generateVoteOptions](UnpublishedElection#generatevoteoptions)

#### Defined in

[src/types/election/budget.ts:73](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/budget.ts#L73)

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

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[removeQuestion](UnpublishedElection#removequestion)

#### Defined in

[src/types/election/unpublished.ts:61](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L61)

___

### summarizeMetadata

▸ **summarizeMetadata**(): `string`

#### Returns

`string`

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[summarizeMetadata](UnpublishedElection#summarizemetadata)

#### Defined in

[src/types/election/unpublished.ts:127](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/unpublished.ts#L127)

___

### checkVote

▸ **checkVote**(`vote`, `resultsType`, `voteType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vote` | [`Vote`](Vote) |
| `resultsType` | [`ElectionResultsType`](../sdk-reference#electionresultstype) |
| `voteType` | [`IVoteType`](../interfaces/IVoteType) |

#### Returns

`void`

#### Defined in

[src/types/election/budget.ts:109](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/budget.ts#L109)

___

### from

▸ **from**(`params`): [`BudgetElection`](BudgetElection)

Returns an unpublished election object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IBudgetElectionParameters`](../sdk-reference#ibudgetelectionparameters) | Unpublished Election parameters |

#### Returns

[`BudgetElection`](BudgetElection)

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[from](UnpublishedElection#from)

#### Defined in

[src/types/election/budget.ts:50](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/election/budget.ts#L50)
