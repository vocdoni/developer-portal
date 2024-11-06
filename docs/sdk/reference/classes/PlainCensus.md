[@vocdoni/sdk](/sdk) / PlainCensus

# Class: PlainCensus

Represents a plain census

## Hierarchy

- [`OffchainCensus`](OffchainCensus)

  ↳ **`PlainCensus`**

## Table of contents

### Accessors

- [censusId](PlainCensus#censusid)
- [censusURI](PlainCensus#censusuri)
- [isPublished](PlainCensus#ispublished)
- [participants](PlainCensus#participants)
- [size](PlainCensus#size)
- [type](PlainCensus#type)
- [weight](PlainCensus#weight)

### Constructors

- [constructor](PlainCensus#constructor)

### Methods

- [add](PlainCensus#add)
- [remove](PlainCensus#remove)
- [censusTypeFromCensusOrigin](PlainCensus#censustypefromcensusorigin)

## Accessors

### censusId

• `get` **censusId**(): `string`

#### Returns

`string`

#### Inherited from

OffchainCensus.censusId

#### Defined in

[src/types/census/census.ts:35](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/census/census.ts#L35)

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

[src/types/census/census.ts:39](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/census/census.ts#L39)

___

### censusURI

• `get` **censusURI**(): `string`

#### Returns

`string`

#### Inherited from

OffchainCensus.censusURI

#### Defined in

[src/types/census/census.ts:43](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/census/census.ts#L43)

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

[src/types/census/census.ts:47](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/census/census.ts#L47)

___

### isPublished

• `get` **isPublished**(): `boolean`

#### Returns

`boolean`

#### Inherited from

OffchainCensus.isPublished

#### Defined in

[src/types/census/census.ts:75](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/census/census.ts#L75)

___

### participants

• `get` **participants**(): [`ICensusParticipant`](../interfaces/ICensusParticipant)[]

#### Returns

[`ICensusParticipant`](../interfaces/ICensusParticipant)[]

#### Inherited from

OffchainCensus.participants

#### Defined in

[src/types/census/offchain.ts:45](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/census/offchain.ts#L45)

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

[src/types/census/offchain.ts:49](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/census/offchain.ts#L49)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Inherited from

OffchainCensus.size

#### Defined in

[src/types/census/census.ts:59](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/census/census.ts#L59)

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

[src/types/census/census.ts:63](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/census/census.ts#L63)

___

### type

• `get` **type**(): [`CensusType`](../enums/CensusType)

#### Returns

[`CensusType`](../enums/CensusType)

#### Inherited from

OffchainCensus.type

#### Defined in

[src/types/census/census.ts:51](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/census/census.ts#L51)

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

[src/types/census/census.ts:55](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/census/census.ts#L55)

___

### weight

• `get` **weight**(): `bigint`

#### Returns

`bigint`

#### Inherited from

OffchainCensus.weight

#### Defined in

[src/types/census/census.ts:67](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/census/census.ts#L67)

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

[src/types/census/census.ts:71](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/census/census.ts#L71)

## Constructors

### constructor

• **new PlainCensus**(): [`PlainCensus`](PlainCensus)

Constructs a plain census

#### Returns

[`PlainCensus`](PlainCensus)

#### Overrides

OffchainCensus.constructor

#### Defined in

[src/types/census/plain.ts:10](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/census/plain.ts#L10)

## Methods

### add

▸ **add**(`participants`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `participants` | `string` \| `string`[] |

#### Returns

`void`

#### Defined in

[src/types/census/plain.ts:14](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/census/plain.ts#L14)

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

[src/types/census/plain.ts:30](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/census/plain.ts#L30)

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

[src/types/census/census.ts:81](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/census/census.ts#L81)
