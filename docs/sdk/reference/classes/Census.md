[@vocdoni/sdk](/sdk) / [Exports](../modules) / Census

# Class: Census

Represents a generic census

## Hierarchy

- **`Census`**

  ↳ [`CspCensus`](CspCensus)

  ↳ [`PublishedCensus`](PublishedCensus)

  ↳ [`OffchainCensus`](OffchainCensus)

## Table of contents

### Constructors

- [constructor](Census#constructor)

### Properties

- [\_censusId](Census.md#_censusid)
- [\_censusURI](Census.md#_censusuri)
- [\_size](Census.md#_size)
- [\_type](Census.md#_type)
- [\_weight](Census.md#_weight)

### Accessors

- [censusId](Census#censusid)
- [censusURI](Census#censusuri)
- [isPublished](Census#ispublished)
- [size](Census#size)
- [type](Census#type)
- [weight](Census#weight)

### Methods

- [censusTypeFromCensusOrigin](Census#censustypefromcensusorigin)

## Constructors

### constructor

• **new Census**(`censusId?`, `censusURI?`, `type?`, `size?`, `weight?`): [`Census`](Census)

Constructs a generic census

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `censusId?` | `string` | The id of the census |
| `censusURI?` | `string` | The URI of the census |
| `type?` | [`CensusType`](../enums/CensusType) | The type of the census |
| `size?` | `number` | The size of the census |
| `weight?` | `bigint` | The weight of the census |

#### Returns

[`Census`](Census)

#### Defined in

[types/census/census.ts:27](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L27)

## Properties

### \_censusId

• `Protected` **\_censusId**: `string`

#### Defined in

[types/census/census.ts:12](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L12)

___

### \_censusURI

• `Protected` **\_censusURI**: `string`

#### Defined in

[types/census/census.ts:13](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L13)

___

### \_size

• `Private` **\_size**: `number`

#### Defined in

[types/census/census.ts:15](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L15)

___

### \_type

• `Protected` **\_type**: [`CensusType`](../enums/CensusType)

#### Defined in

[types/census/census.ts:14](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L14)

___

### \_weight

• `Private` **\_weight**: `bigint`

#### Defined in

[types/census/census.ts:16](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L16)

## Accessors

### censusId

• `get` **censusId**(): `string`

#### Returns

`string`

#### Defined in

[types/census/census.ts:35](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L35)

• `set` **censusId**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[types/census/census.ts:39](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L39)

___

### censusURI

• `get` **censusURI**(): `string`

#### Returns

`string`

#### Defined in

[types/census/census.ts:43](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L43)

• `set` **censusURI**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[types/census/census.ts:47](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L47)

___

### isPublished

• `get` **isPublished**(): `boolean`

#### Returns

`boolean`

#### Defined in

[types/census/census.ts:75](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L75)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[types/census/census.ts:59](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L59)

• `set` **size**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[types/census/census.ts:63](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L63)

___

### type

• `get` **type**(): [`CensusType`](../enums/CensusType)

#### Returns

[`CensusType`](../enums/CensusType)

#### Defined in

[types/census/census.ts:51](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L51)

• `set` **type**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CensusType`](../enums/CensusType) |

#### Returns

`void`

#### Defined in

[types/census/census.ts:55](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L55)

___

### weight

• `get` **weight**(): `bigint`

#### Returns

`bigint`

#### Defined in

[types/census/census.ts:67](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L67)

• `set` **weight**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `bigint` |

#### Returns

`void`

#### Defined in

[types/census/census.ts:71](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L71)

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

#### Defined in

[types/census/census.ts:81](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L81)
