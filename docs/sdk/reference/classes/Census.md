[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / Census

# Class: Census

Represents a generic census

## Hierarchy

- **`Census`**

  ↳ [`CspCensus`](CspCensus.md)

  ↳ [`PublishedCensus`](PublishedCensus.md)

  ↳ [`OffchainCensus`](OffchainCensus.md)

## Table of contents

### Constructors

- [constructor](Census.md#constructor)

### Properties

- [\_censusId](Census.md#_censusid)
- [\_censusURI](Census.md#_censusuri)
- [\_size](Census.md#_size)
- [\_type](Census.md#_type)
- [\_weight](Census.md#_weight)

### Accessors

- [censusId](Census.md#censusid)
- [censusURI](Census.md#censusuri)
- [isPublished](Census.md#ispublished)
- [size](Census.md#size)
- [type](Census.md#type)
- [weight](Census.md#weight)

### Methods

- [censusTypeFromCensusOrigin](Census.md#censustypefromcensusorigin)

## Constructors

### constructor

• **new Census**(`censusId?`, `censusURI?`, `type?`, `size?`, `weight?`): [`Census`](Census.md)

Constructs a generic census

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `censusId?` | `string` | The id of the census |
| `censusURI?` | `string` | The URI of the census |
| `type?` | [`CensusType`](../enums/CensusType.md) | The type of the census |
| `size?` | `number` | The size of the census |
| `weight?` | `bigint` | The weight of the census |

#### Returns

[`Census`](Census.md)

#### Defined in

[types/census/census.ts:27](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L27)

## Properties

### \_censusId

• `Protected` **\_censusId**: `string`

#### Defined in

[types/census/census.ts:12](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L12)

___

### \_censusURI

• `Protected` **\_censusURI**: `string`

#### Defined in

[types/census/census.ts:13](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L13)

___

### \_size

• `Private` **\_size**: `number`

#### Defined in

[types/census/census.ts:15](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L15)

___

### \_type

• `Protected` **\_type**: [`CensusType`](../enums/CensusType.md)

#### Defined in

[types/census/census.ts:14](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L14)

___

### \_weight

• `Private` **\_weight**: `bigint`

#### Defined in

[types/census/census.ts:16](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L16)

## Accessors

### censusId

• `get` **censusId**(): `string`

#### Returns

`string`

#### Defined in

[types/census/census.ts:35](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L35)

• `set` **censusId**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[types/census/census.ts:39](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L39)

___

### censusURI

• `get` **censusURI**(): `string`

#### Returns

`string`

#### Defined in

[types/census/census.ts:43](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L43)

• `set` **censusURI**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[types/census/census.ts:47](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L47)

___

### isPublished

• `get` **isPublished**(): `boolean`

#### Returns

`boolean`

#### Defined in

[types/census/census.ts:75](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L75)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[types/census/census.ts:59](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L59)

• `set` **size**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[types/census/census.ts:63](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L63)

___

### type

• `get` **type**(): [`CensusType`](../enums/CensusType.md)

#### Returns

[`CensusType`](../enums/CensusType.md)

#### Defined in

[types/census/census.ts:51](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L51)

• `set` **type**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CensusType`](../enums/CensusType.md) |

#### Returns

`void`

#### Defined in

[types/census/census.ts:55](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L55)

___

### weight

• `get` **weight**(): `bigint`

#### Returns

`bigint`

#### Defined in

[types/census/census.ts:67](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L67)

• `set` **weight**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `bigint` |

#### Returns

`void`

#### Defined in

[types/census/census.ts:71](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L71)

## Methods

### censusTypeFromCensusOrigin

▸ **censusTypeFromCensusOrigin**(`censusOrigin`, `anonymous?`): [`CensusType`](../enums/CensusType.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `censusOrigin` | `string` | `undefined` |
| `anonymous` | `boolean` | `false` |

#### Returns

[`CensusType`](../enums/CensusType.md)

#### Defined in

[types/census/census.ts:81](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L81)
