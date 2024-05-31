[@vocdoni/sdk](/sdk) / WeightedCensus

# Class: WeightedCensus

Represents a weighted census

## Hierarchy

- [`OffchainCensus`](OffchainCensus)

  ↳ **`WeightedCensus`**

## Table of contents

### Accessors

- [censusId](WeightedCensus#censusid)
- [censusURI](WeightedCensus#censusuri)
- [isPublished](WeightedCensus#ispublished)
- [participants](WeightedCensus#participants)
- [size](WeightedCensus#size)
- [type](WeightedCensus#type)
- [weight](WeightedCensus#weight)

### Constructors

- [constructor](WeightedCensus#constructor)

### Methods

- [add](WeightedCensus#add)
- [remove](WeightedCensus#remove)
- [censusTypeFromCensusOrigin](WeightedCensus#censustypefromcensusorigin)

## Accessors

### censusId

• `get` **censusId**(): `string`

#### Returns

`string`

#### Inherited from

OffchainCensus.censusId

#### Defined in

[types/census/census.ts:35](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/census/census.ts#L35)

• `set` **censusId**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

OffchainCensus.censusId

#### Defined in

[types/census/census.ts:39](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/census/census.ts#L39)

___

### censusURI

• `get` **censusURI**(): `string`

#### Returns

`string`

#### Inherited from

OffchainCensus.censusURI

#### Defined in

[types/census/census.ts:43](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/census/census.ts#L43)

• `set` **censusURI**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

OffchainCensus.censusURI

#### Defined in

[types/census/census.ts:47](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/census/census.ts#L47)

___

### isPublished

• `get` **isPublished**(): `boolean`

#### Returns

`boolean`

#### Inherited from

OffchainCensus.isPublished

#### Defined in

[types/census/census.ts:75](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/census/census.ts#L75)

___

### participants

• `get` **participants**(): [`ICensusParticipant`](../interfaces/ICensusParticipant)[]

#### Returns

[`ICensusParticipant`](../interfaces/ICensusParticipant)[]

#### Inherited from

OffchainCensus.participants

#### Defined in

[types/census/offchain.ts:45](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/census/offchain.ts#L45)

• `set` **participants**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ICensusParticipant`](../interfaces/ICensusParticipant)[] |

#### Returns

`void`

#### Inherited from

OffchainCensus.participants

#### Defined in

[types/census/offchain.ts:49](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/census/offchain.ts#L49)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Inherited from

OffchainCensus.size

#### Defined in

[types/census/census.ts:59](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/census/census.ts#L59)

• `set` **size**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

OffchainCensus.size

#### Defined in

[types/census/census.ts:63](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/census/census.ts#L63)

___

### type

• `get` **type**(): [`CensusType`](../enums/CensusType)

#### Returns

[`CensusType`](../enums/CensusType)

#### Inherited from

OffchainCensus.type

#### Defined in

[types/census/census.ts:51](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/census/census.ts#L51)

• `set` **type**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CensusType`](../enums/CensusType) |

#### Returns

`void`

#### Inherited from

OffchainCensus.type

#### Defined in

[types/census/census.ts:55](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/census/census.ts#L55)

___

### weight

• `get` **weight**(): `bigint`

#### Returns

`bigint`

#### Inherited from

OffchainCensus.weight

#### Defined in

[types/census/census.ts:67](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/census/census.ts#L67)

• `set` **weight**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `bigint` |

#### Returns

`void`

#### Inherited from

OffchainCensus.weight

#### Defined in

[types/census/census.ts:71](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/census/census.ts#L71)

## Constructors

### constructor

• **new WeightedCensus**(): [`WeightedCensus`](WeightedCensus)

Constructs a weighted census

#### Returns

[`WeightedCensus`](WeightedCensus)

#### Overrides

OffchainCensus.constructor

#### Defined in

[types/census/weighted.ts:10](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/census/weighted.ts#L10)

## Methods

### add

▸ **add**(`participants`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `participants` | [`ICensusParticipant`](../interfaces/ICensusParticipant.md) \| [`ICensusParticipant`](../interfaces/ICensusParticipant)[] |

#### Returns

`void`

#### Defined in

[types/census/weighted.ts:14](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/census/weighted.ts#L14)

___

### remove

▸ **remove**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[types/census/weighted.ts:18](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/census/weighted.ts#L18)

___

### censusTypeFromCensusOrigin

▸ **censusTypeFromCensusOrigin**(`censusOrigin`, `anonymous?`): [`CensusType`](../enums/CensusType)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `censusOrigin` | `string` | `undefined` |
| `anonymous` | `boolean` | `false` |

#### Returns

[`CensusType`](../enums/CensusType)

#### Inherited from

[OffchainCensus](OffchainCensus.md).[censusTypeFromCensusOrigin](OffchainCensus#censustypefromcensusorigin)

#### Defined in

[types/census/census.ts:81](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/census/census.ts#L81)
