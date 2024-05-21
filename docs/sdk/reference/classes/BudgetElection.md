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

[types/election/unpublished.ts:287](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L287)

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

[types/election/unpublished.ts:291](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L291)

___

### census

• `get` **census**(): [`Census`](Census)

#### Returns

[`Census`](Census)

#### Inherited from

UnpublishedElection.census

#### Defined in

[types/election/unpublished.ts:261](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L261)

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

[types/election/unpublished.ts:265](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L265)

___

### description

• `get` **description**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Inherited from

UnpublishedElection.description

#### Defined in

[types/election/unpublished.ts:185](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L185)

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

[types/election/unpublished.ts:189](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L189)

___

### duration

• `get` **duration**(): `number`

#### Returns

`number`

#### Inherited from

UnpublishedElection.duration

#### Defined in

[types/election/unpublished.ts:150](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L150)

___

### electionType

• `get` **electionType**(): [`IElectionType`](../interfaces/IElectionType)

#### Returns

[`IElectionType`](../interfaces/IElectionType)

#### Inherited from

UnpublishedElection.electionType

#### Defined in

[types/election/unpublished.ts:237](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L237)

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

[types/election/unpublished.ts:241](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L241)

___

### endDate

• `get` **endDate**(): `Date`

#### Returns

`Date`

#### Inherited from

UnpublishedElection.endDate

#### Defined in

[types/election/unpublished.ts:227](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L227)

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

[types/election/unpublished.ts:231](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L231)

___

### forceFullBudget

• `get` **forceFullBudget**(): `boolean`

#### Returns

`boolean`

#### Defined in

[types/election/budget.ts:132](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/budget.ts#L132)

• `set` **forceFullBudget**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[types/election/budget.ts:136](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/budget.ts#L136)

___

### header

• `get` **header**(): `string`

#### Returns

`string`

#### Inherited from

UnpublishedElection.header

#### Defined in

[types/election/unpublished.ts:193](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L193)

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

[types/election/unpublished.ts:197](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L197)

___

### maxBudget

• `get` **maxBudget**(): `number`

#### Returns

`number`

#### Defined in

[types/election/budget.ts:148](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/budget.ts#L148)

• `set` **maxBudget**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[types/election/budget.ts:152](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/budget.ts#L152)

___

### maxCensusSize

• `get` **maxCensusSize**(): `number`

#### Returns

`number`

#### Inherited from

UnpublishedElection.maxCensusSize

#### Defined in

[types/election/unpublished.ts:270](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L270)

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

[types/election/unpublished.ts:274](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L274)

___

### meta

• `get` **meta**(): `any`

#### Returns

`any`

#### Inherited from

UnpublishedElection.meta

#### Defined in

[types/election/unpublished.ts:209](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L209)

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

[types/election/unpublished.ts:213](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L213)

___

### minStep

• `get` **minStep**(): `number`

#### Returns

`number`

#### Defined in

[types/election/budget.ts:124](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/budget.ts#L124)

• `set` **minStep**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[types/election/budget.ts:128](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/budget.ts#L128)

___

### questions

• `get` **questions**(): [`IQuestion`](../interfaces/IQuestion)[]

#### Returns

[`IQuestion`](../interfaces/IQuestion)[]

#### Inherited from

UnpublishedElection.questions

#### Defined in

[types/election/unpublished.ts:253](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L253)

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

[types/election/unpublished.ts:257](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L257)

___

### startDate

• `get` **startDate**(): `Date`

#### Returns

`Date`

#### Inherited from

UnpublishedElection.startDate

#### Defined in

[types/election/unpublished.ts:218](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L218)

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

[types/election/unpublished.ts:222](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L222)

___

### streamUri

• `get` **streamUri**(): `string`

#### Returns

`string`

#### Inherited from

UnpublishedElection.streamUri

#### Defined in

[types/election/unpublished.ts:201](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L201)

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

[types/election/unpublished.ts:205](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L205)

___

### temporarySecretIdentity

• `get` **temporarySecretIdentity**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UnpublishedElection.temporarySecretIdentity

#### Defined in

[types/election/unpublished.ts:279](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L279)

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

[types/election/unpublished.ts:283](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L283)

___

### title

• `get` **title**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Inherited from

UnpublishedElection.title

#### Defined in

[types/election/unpublished.ts:176](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L176)

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

[types/election/unpublished.ts:180](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L180)

___

### useCensusWeightAsBudget

• `get` **useCensusWeightAsBudget**(): `boolean`

#### Returns

`boolean`

#### Defined in

[types/election/budget.ts:140](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/budget.ts#L140)

• `set` **useCensusWeightAsBudget**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[types/election/budget.ts:144](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/budget.ts#L144)

___

### voteType

• `get` **voteType**(): [`IVoteType`](../interfaces/IVoteType)

#### Returns

[`IVoteType`](../interfaces/IVoteType)

#### Inherited from

UnpublishedElection.voteType

#### Defined in

[types/election/unpublished.ts:245](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L245)

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

[types/election/unpublished.ts:249](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L249)

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

[types/election/budget.ts:35](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/budget.ts#L35)

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

[types/election/budget.ts:49](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/budget.ts#L49)

___

### generateEnvelopeType

▸ **generateEnvelopeType**(): `object`

#### Returns

`object`

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[generateEnvelopeType](UnpublishedElection#generateenvelopetype)

#### Defined in

[types/election/budget.ts:78](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/budget.ts#L78)

___

### generateMetadata

▸ **generateMetadata**(): [`ElectionMetadata`](../interfaces/ElectionMetadata)

#### Returns

[`ElectionMetadata`](../interfaces/ElectionMetadata)

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[generateMetadata](UnpublishedElection#generatemetadata)

#### Defined in

[types/election/budget.ts:88](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/budget.ts#L88)

___

### generateMode

▸ **generateMode**(): `object`

#### Returns

`object`

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[generateMode](UnpublishedElection#generatemode)

#### Defined in

[types/election/unpublished.ts:166](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L166)

___

### generateVoteOptions

▸ **generateVoteOptions**(): `object`

#### Returns

`object`

#### Overrides

[UnpublishedElection](UnpublishedElection.md).[generateVoteOptions](UnpublishedElection#generatevoteoptions)

#### Defined in

[types/election/budget.ts:68](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/budget.ts#L68)

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

[types/election/election.ts:279](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/election.ts#L279)

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

[types/election/unpublished.ts:61](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L61)

___

### summarizeMetadata

▸ **summarizeMetadata**(): `string`

#### Returns

`string`

#### Inherited from

[UnpublishedElection](UnpublishedElection.md).[summarizeMetadata](UnpublishedElection#summarizemetadata)

#### Defined in

[types/election/unpublished.ts:128](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/unpublished.ts#L128)

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

[types/election/budget.ts:104](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/budget.ts#L104)

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

[types/election/budget.ts:45](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/budget.ts#L45)
