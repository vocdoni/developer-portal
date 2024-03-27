[@vocdoni/sdk](/sdk) / [Exports](../modules) / PublishedCensus

# Class: PublishedCensus

Represents a published census

## Hierarchy

- [`Census`](Census)

  ↳ **`PublishedCensus`**

  ↳↳ [`TokenCensus`](TokenCensus)

## Table of contents

### Constructors

- [constructor](PublishedCensus#constructor)

### Properties

- [\_censusId](PublishedCensus.md#_censusid)
- [\_censusURI](PublishedCensus.md#_censusuri)
- [\_type](PublishedCensus.md#_type)

### Accessors

- [censusId](PublishedCensus#censusid)
- [censusURI](PublishedCensus#censusuri)
- [isPublished](PublishedCensus#ispublished)
- [size](PublishedCensus#size)
- [type](PublishedCensus#type)
- [weight](PublishedCensus#weight)

### Methods

- [censusTypeFromCensusOrigin](PublishedCensus#censustypefromcensusorigin)

## Constructors

### constructor

• **new PublishedCensus**(`censusId`, `censusURI`, `type`, `size?`, `weight?`): [`PublishedCensus`](PublishedCensus)

Constructs a published census

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `censusId` | `string` | The id of the census |
| `censusURI` | `string` | The URI of the census |
| `type` | [`CensusType`](../enums/CensusType) | The type of the census |
| `size?` | `number` | The size of the census |
| `weight?` | `bigint` | The weight of the census |

#### Returns

[`PublishedCensus`](PublishedCensus)

#### Overrides

[Census](Census.md).[constructor](Census#constructor)

#### Defined in

[types/census/published.ts:17](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/published.ts#L17)

## Properties

### \_censusId

• `Protected` **\_censusId**: `string`

#### Inherited from

[Census](Census).[_censusId](Census.md#_censusid)

#### Defined in

[types/census/census.ts:12](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L12)

___

### \_censusURI

• `Protected` **\_censusURI**: `string`

#### Inherited from

[Census](Census).[_censusURI](Census.md#_censusuri)

#### Defined in

[types/census/census.ts:13](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L13)

___

### \_type

• `Protected` **\_type**: [`CensusType`](../enums/CensusType)

#### Inherited from

[Census](Census).[_type](Census.md#_type)

#### Defined in

[types/census/census.ts:14](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L14)

## Accessors

### censusId

• `get` **censusId**(): `string`

#### Returns

`string`

#### Inherited from

Census.censusId

#### Defined in

[types/census/census.ts:35](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L35)

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

[types/census/census.ts:39](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L39)

___

### censusURI

• `get` **censusURI**(): `string`

#### Returns

`string`

#### Inherited from

Census.censusURI

#### Defined in

[types/census/census.ts:43](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L43)

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

[types/census/census.ts:47](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L47)

___

### isPublished

• `get` **isPublished**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Census.isPublished

#### Defined in

[types/census/census.ts:75](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L75)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Inherited from

Census.size

#### Defined in

[types/census/census.ts:59](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L59)

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

[types/census/census.ts:63](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L63)

___

### type

• `get` **type**(): [`CensusType`](../enums/CensusType)

#### Returns

[`CensusType`](../enums/CensusType)

#### Inherited from

Census.type

#### Defined in

[types/census/census.ts:51](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L51)

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

[types/census/census.ts:55](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L55)

___

### weight

• `get` **weight**(): `bigint`

#### Returns

`bigint`

#### Inherited from

Census.weight

#### Defined in

[types/census/census.ts:67](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L67)

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

#### Inherited from

[Census](Census.md).[censusTypeFromCensusOrigin](Census#censustypefromcensusorigin)

#### Defined in

[types/census/census.ts:81](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L81)
