[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / CspCensus

# Class: CspCensus

Represents a published census

## Hierarchy

- [`Census`](Census.md)

  ↳ **`CspCensus`**

## Table of contents

### Constructors

- [constructor](CspCensus.md#constructor)

### Properties

- [\_censusId](CspCensus.md#_censusid)
- [\_censusURI](CspCensus.md#_censusuri)
- [\_type](CspCensus.md#_type)

### Accessors

- [censusId](CspCensus.md#censusid)
- [censusURI](CspCensus.md#censusuri)
- [isPublished](CspCensus.md#ispublished)
- [size](CspCensus.md#size)
- [type](CspCensus.md#type)
- [weight](CspCensus.md#weight)

### Methods

- [censusTypeFromCensusOrigin](CspCensus.md#censustypefromcensusorigin)

## Constructors

### constructor

• **new CspCensus**(`publicKey`, `cspURI`): [`CspCensus`](CspCensus.md)

Constructs a CSP census

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `publicKey` | `string` | The public |
| `cspURI` | `string` | The URI of the CSP server |

#### Returns

[`CspCensus`](CspCensus.md)

#### Overrides

[Census](Census.md).[constructor](Census.md#constructor)

#### Defined in

[types/census/csp.ts:14](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/csp.ts#L14)

## Properties

### \_censusId

• `Protected` **\_censusId**: `string`

#### Inherited from

[Census](Census.md).[_censusId](Census.md#_censusid)

#### Defined in

[types/census/census.ts:12](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L12)

___

### \_censusURI

• `Protected` **\_censusURI**: `string`

#### Inherited from

[Census](Census.md).[_censusURI](Census.md#_censusuri)

#### Defined in

[types/census/census.ts:13](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L13)

___

### \_type

• `Protected` **\_type**: [`CensusType`](../enums/CensusType.md)

#### Inherited from

[Census](Census.md).[_type](Census.md#_type)

#### Defined in

[types/census/census.ts:14](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L14)

## Accessors

### censusId

• `get` **censusId**(): `string`

#### Returns

`string`

#### Inherited from

Census.censusId

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

Census.censusId

#### Defined in

[types/census/census.ts:39](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L39)

___

### censusURI

• `get` **censusURI**(): `string`

#### Returns

`string`

#### Inherited from

Census.censusURI

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

Census.censusURI

#### Defined in

[types/census/census.ts:47](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L47)

___

### isPublished

• `get` **isPublished**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Census.isPublished

#### Defined in

[types/census/census.ts:75](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L75)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Inherited from

Census.size

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

Census.size

#### Defined in

[types/census/census.ts:63](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L63)

___

### type

• `get` **type**(): [`CensusType`](../enums/CensusType.md)

#### Returns

[`CensusType`](../enums/CensusType.md)

#### Inherited from

Census.type

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

Census.type

#### Defined in

[types/census/census.ts:55](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L55)

___

### weight

• `get` **weight**(): `bigint`

#### Returns

`bigint`

#### Inherited from

Census.weight

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

Census.weight

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

[Census](Census.md).[censusTypeFromCensusOrigin](Census.md#censustypefromcensusorigin)

#### Defined in

[types/census/census.ts:81](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/census.ts#L81)
