[@vocdoni/sdk](/sdk) / StrategyCensus

# Class: StrategyCensus

Represents a census3 census

## Hierarchy

- [`PublishedCensus`](PublishedCensus)

  ↳ **`StrategyCensus`**

## Table of contents

### Accessors

- [censusId](StrategyCensus#censusid)
- [censusURI](StrategyCensus#censusuri)
- [isPublished](StrategyCensus#ispublished)
- [size](StrategyCensus#size)
- [strategy](StrategyCensus#strategy)
- [type](StrategyCensus#type)
- [weight](StrategyCensus#weight)

### Constructors

- [constructor](StrategyCensus#constructor)

### Methods

- [censusTypeFromCensusOrigin](StrategyCensus#censustypefromcensusorigin)

## Accessors

### censusId

• `get` **censusId**(): `string`

#### Returns

`string`

#### Inherited from

PublishedCensus.censusId

#### Defined in

[types/census/census.ts:35](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/census/census.ts#L35)

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

[types/census/census.ts:39](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/census/census.ts#L39)

___

### censusURI

• `get` **censusURI**(): `string`

#### Returns

`string`

#### Inherited from

PublishedCensus.censusURI

#### Defined in

[types/census/census.ts:43](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/census/census.ts#L43)

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

[types/census/census.ts:47](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/census/census.ts#L47)

___

### isPublished

• `get` **isPublished**(): `boolean`

#### Returns

`boolean`

#### Inherited from

PublishedCensus.isPublished

#### Defined in

[types/census/census.ts:75](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/census/census.ts#L75)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Inherited from

PublishedCensus.size

#### Defined in

[types/census/census.ts:59](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/census/census.ts#L59)

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

[types/census/census.ts:63](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/census/census.ts#L63)

___

### strategy

• `get` **strategy**(): [`Census3Strategy`](../sdk-reference#census3strategy)

#### Returns

[`Census3Strategy`](../sdk-reference#census3strategy)

#### Defined in

[types/census/census3/strategy.ts:33](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/census/census3/strategy.ts#L33)

• `set` **strategy**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Census3Strategy`](../sdk-reference#census3strategy) |

#### Returns

`void`

#### Defined in

[types/census/census3/strategy.ts:37](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/census/census3/strategy.ts#L37)

___

### type

• `get` **type**(): [`CensusType`](../enums/CensusType)

#### Returns

[`CensusType`](../enums/CensusType)

#### Inherited from

PublishedCensus.type

#### Defined in

[types/census/census.ts:51](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/census/census.ts#L51)

• `set` **type**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CensusType`](../enums/CensusType) |

#### Returns

`void`

#### Inherited from

PublishedCensus.type

#### Defined in

[types/census/census.ts:55](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/census/census.ts#L55)

___

### weight

• `get` **weight**(): `bigint`

#### Returns

`bigint`

#### Inherited from

PublishedCensus.weight

#### Defined in

[types/census/census.ts:67](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/census/census.ts#L67)

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

[types/census/census.ts:71](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/census/census.ts#L71)

## Constructors

### constructor

• **new StrategyCensus**(`censusId`, `censusURI`, `anonymous`, `strategy`, `size?`, `weight?`): [`StrategyCensus`](StrategyCensus)

Constructs a census3 census

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `censusId` | `string` | The id of the census |
| `censusURI` | `string` | The URI of the census |
| `anonymous` | `boolean` | If the census is anonymous |
| `strategy` | [`Census3Strategy`](../sdk-reference#census3strategy) | The strategy information |
| `size?` | `number` | The size of the census |
| `weight?` | `bigint` | The weight of the census |

#### Returns

[`StrategyCensus`](StrategyCensus)

#### Overrides

[PublishedCensus](PublishedCensus.md).[constructor](PublishedCensus#constructor)

#### Defined in

[types/census/census3/strategy.ts:21](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/census/census3/strategy.ts#L21)

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

[PublishedCensus](PublishedCensus.md).[censusTypeFromCensusOrigin](PublishedCensus#censustypefromcensusorigin)

#### Defined in

[types/census/census.ts:81](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/census/census.ts#L81)
