[@vocdoni/sdk](/sdk) / OffchainCensus

# Class: OffchainCensus

Represents an offchain census

## Hierarchy

- [`Census`](Census)

  ↳ **`OffchainCensus`**

  ↳↳ [`PlainCensus`](PlainCensus)

  ↳↳ [`WeightedCensus`](WeightedCensus)

## Table of contents

### Accessors

- [censusId](OffchainCensus#censusid)
- [censusURI](OffchainCensus#censusuri)
- [isPublished](OffchainCensus#ispublished)
- [participants](OffchainCensus#participants)
- [size](OffchainCensus#size)
- [type](OffchainCensus#type)
- [weight](OffchainCensus#weight)

### Methods

- [censusTypeFromCensusOrigin](OffchainCensus#censustypefromcensusorigin)

## Accessors

### censusId

• `get` **censusId**(): `string`

#### Returns

`string`

#### Inherited from

Census.censusId

#### Defined in

[types/census/census.ts:35](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/census/census.ts#L35)

• `set` **censusId**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

Census.censusId

#### Defined in

[types/census/census.ts:39](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/census/census.ts#L39)

___

### censusURI

• `get` **censusURI**(): `string`

#### Returns

`string`

#### Inherited from

Census.censusURI

#### Defined in

[types/census/census.ts:43](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/census/census.ts#L43)

• `set` **censusURI**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

Census.censusURI

#### Defined in

[types/census/census.ts:47](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/census/census.ts#L47)

___

### isPublished

• `get` **isPublished**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Census.isPublished

#### Defined in

[types/census/census.ts:75](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/census/census.ts#L75)

___

### participants

• `get` **participants**(): [`ICensusParticipant`](../interfaces/ICensusParticipant)[]

#### Returns

[`ICensusParticipant`](../interfaces/ICensusParticipant)[]

#### Defined in

[types/census/offchain.ts:45](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/census/offchain.ts#L45)

• `set` **participants**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ICensusParticipant`](../interfaces/ICensusParticipant)[] |

#### Returns

`void`

#### Defined in

[types/census/offchain.ts:49](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/census/offchain.ts#L49)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Inherited from

Census.size

#### Defined in

[types/census/census.ts:59](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/census/census.ts#L59)

• `set` **size**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Census.size

#### Defined in

[types/census/census.ts:63](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/census/census.ts#L63)

___

### type

• `get` **type**(): [`CensusType`](../enums/CensusType)

#### Returns

[`CensusType`](../enums/CensusType)

#### Inherited from

Census.type

#### Defined in

[types/census/census.ts:51](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/census/census.ts#L51)

• `set` **type**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CensusType`](../enums/CensusType) |

#### Returns

`void`

#### Inherited from

Census.type

#### Defined in

[types/census/census.ts:55](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/census/census.ts#L55)

___

### weight

• `get` **weight**(): `bigint`

#### Returns

`bigint`

#### Inherited from

Census.weight

#### Defined in

[types/census/census.ts:67](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/census/census.ts#L67)

• `set` **weight**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `bigint` |

#### Returns

`void`

#### Inherited from

Census.weight

#### Defined in

[types/census/census.ts:71](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/census/census.ts#L71)

## Methods

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

[Census](Census.md).[censusTypeFromCensusOrigin](Census#censustypefromcensusorigin)

#### Defined in

[types/census/census.ts:81](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/census/census.ts#L81)
