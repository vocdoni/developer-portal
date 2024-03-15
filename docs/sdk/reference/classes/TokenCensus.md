[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / TokenCensus

# Class: TokenCensus

Represents a census3 census

## Hierarchy

- [`PublishedCensus`](PublishedCensus.md)

  ↳ **`TokenCensus`**

## Table of contents

### Constructors

- [constructor](TokenCensus.md#constructor)

### Properties

- [\_censusId](TokenCensus.md#_censusid)
- [\_censusURI](TokenCensus.md#_censusuri)
- [\_token](TokenCensus.md#_token)
- [\_type](TokenCensus.md#_type)

### Accessors

- [censusId](TokenCensus.md#censusid)
- [censusURI](TokenCensus.md#censusuri)
- [isPublished](TokenCensus.md#ispublished)
- [size](TokenCensus.md#size)
- [token](TokenCensus.md#token)
- [type](TokenCensus.md#type)
- [weight](TokenCensus.md#weight)

### Methods

- [censusTypeFromCensusOrigin](TokenCensus.md#censustypefromcensusorigin)

## Constructors

### constructor

• **new TokenCensus**(`censusId`, `censusURI`, `anonymous`, `token`, `size?`, `weight?`): [`TokenCensus`](TokenCensus.md)

Constructs a census3 census

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `censusId` | `string` | The id of the census |
| `censusURI` | `string` | The URI of the census |
| `anonymous` | `boolean` | If the census is anonymous |
| `token` | [`Token`](../modules.md#token) | The token of the census |
| `size?` | `number` | The size of the census |
| `weight?` | `bigint` | The weight of the census |

#### Returns

[`TokenCensus`](TokenCensus.md)

#### Overrides

[PublishedCensus](PublishedCensus.md).[constructor](PublishedCensus.md#constructor)

#### Defined in

[types/census/census3.ts:21](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census3.ts#L21)

## Properties

### \_censusId

• `Protected` **\_censusId**: `string`

#### Inherited from

[PublishedCensus](PublishedCensus.md).[_censusId](PublishedCensus.md#_censusid)

#### Defined in

[types/census/census.ts:12](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L12)

___

### \_censusURI

• `Protected` **\_censusURI**: `string`

#### Inherited from

[PublishedCensus](PublishedCensus.md).[_censusURI](PublishedCensus.md#_censusuri)

#### Defined in

[types/census/census.ts:13](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L13)

___

### \_token

• `Private` **\_token**: [`Token`](../modules.md#token)

#### Defined in

[types/census/census3.ts:9](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census3.ts#L9)

___

### \_type

• `Protected` **\_type**: [`CensusType`](../enums/CensusType.md)

#### Inherited from

[PublishedCensus](PublishedCensus.md).[_type](PublishedCensus.md#_type)

#### Defined in

[types/census/census.ts:14](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L14)

## Accessors

### censusId

• `get` **censusId**(): `string`

#### Returns

`string`

#### Inherited from

PublishedCensus.censusId

#### Defined in

[types/census/census.ts:35](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L35)

• `set` **censusId**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

PublishedCensus.censusId

#### Defined in

[types/census/census.ts:39](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L39)

___

### censusURI

• `get` **censusURI**(): `string`

#### Returns

`string`

#### Inherited from

PublishedCensus.censusURI

#### Defined in

[types/census/census.ts:43](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L43)

• `set` **censusURI**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

PublishedCensus.censusURI

#### Defined in

[types/census/census.ts:47](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L47)

___

### isPublished

• `get` **isPublished**(): `boolean`

#### Returns

`boolean`

#### Inherited from

PublishedCensus.isPublished

#### Defined in

[types/census/census.ts:75](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L75)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Inherited from

PublishedCensus.size

#### Defined in

[types/census/census.ts:59](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L59)

• `set` **size**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PublishedCensus.size

#### Defined in

[types/census/census.ts:63](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L63)

___

### token

• `get` **token**(): [`Token`](../modules.md#token)

#### Returns

[`Token`](../modules.md#token)

#### Defined in

[types/census/census3.ts:33](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census3.ts#L33)

• `set` **token**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Token`](../modules.md#token) |

#### Returns

`void`

#### Defined in

[types/census/census3.ts:37](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census3.ts#L37)

___

### type

• `get` **type**(): [`CensusType`](../enums/CensusType.md)

#### Returns

[`CensusType`](../enums/CensusType.md)

#### Inherited from

PublishedCensus.type

#### Defined in

[types/census/census.ts:51](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L51)

• `set` **type**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CensusType`](../enums/CensusType.md) |

#### Returns

`void`

#### Inherited from

PublishedCensus.type

#### Defined in

[types/census/census.ts:55](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L55)

___

### weight

• `get` **weight**(): `bigint`

#### Returns

`bigint`

#### Inherited from

PublishedCensus.weight

#### Defined in

[types/census/census.ts:67](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L67)

• `set` **weight**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `bigint` |

#### Returns

`void`

#### Inherited from

PublishedCensus.weight

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

#### Inherited from

[PublishedCensus](PublishedCensus.md).[censusTypeFromCensusOrigin](PublishedCensus.md#censustypefromcensusorigin)

#### Defined in

[types/census/census.ts:81](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L81)