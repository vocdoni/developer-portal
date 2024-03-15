[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / OffchainCensus

# Class: OffchainCensus

Represents an offchain census

## Hierarchy

- [`Census`](Census.md)

  ↳ **`OffchainCensus`**

  ↳↳ [`PlainCensus`](PlainCensus.md)

  ↳↳ [`WeightedCensus`](WeightedCensus.md)

## Table of contents

### Constructors

- [constructor](OffchainCensus.md#constructor)

### Properties

- [\_censusId](OffchainCensus.md#_censusid)
- [\_censusURI](OffchainCensus.md#_censusuri)
- [\_participants](OffchainCensus.md#_participants)
- [\_type](OffchainCensus.md#_type)

### Accessors

- [censusId](OffchainCensus.md#censusid)
- [censusURI](OffchainCensus.md#censusuri)
- [isPublished](OffchainCensus.md#ispublished)
- [participants](OffchainCensus.md#participants)
- [size](OffchainCensus.md#size)
- [type](OffchainCensus.md#type)
- [weight](OffchainCensus.md#weight)

### Methods

- [addParticipants](OffchainCensus.md#addparticipants)
- [checkParticipant](OffchainCensus.md#checkparticipant)
- [removeParticipant](OffchainCensus.md#removeparticipant)
- [censusTypeFromCensusOrigin](OffchainCensus.md#censustypefromcensusorigin)

## Constructors

### constructor

• **new OffchainCensus**(): [`OffchainCensus`](OffchainCensus.md)

Constructs an offchain census

#### Returns

[`OffchainCensus`](OffchainCensus.md)

#### Overrides

[Census](Census.md).[constructor](Census.md#constructor)

#### Defined in

[types/census/offchain.ts:19](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/offchain.ts#L19)

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

### \_participants

• `Private` **\_participants**: [`ICensusParticipant`](../interfaces/ICensusParticipant.md)[]

#### Defined in

[types/census/offchain.ts:14](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/offchain.ts#L14)

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

### participants

• `get` **participants**(): [`ICensusParticipant`](../interfaces/ICensusParticipant.md)[]

#### Returns

[`ICensusParticipant`](../interfaces/ICensusParticipant.md)[]

#### Defined in

[types/census/offchain.ts:45](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/offchain.ts#L45)

• `set` **participants**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ICensusParticipant`](../interfaces/ICensusParticipant.md)[] |

#### Returns

`void`

#### Defined in

[types/census/offchain.ts:49](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/offchain.ts#L49)

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

### addParticipants

▸ **addParticipants**(`participants`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `participants` | [`ICensusParticipant`](../interfaces/ICensusParticipant.md) \| [`ICensusParticipant`](../interfaces/ICensusParticipant.md)[] |

#### Returns

`void`

#### Defined in

[types/census/offchain.ts:25](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/offchain.ts#L25)

___

### checkParticipant

▸ **checkParticipant**(`participant`): [`ICensusParticipant`](../interfaces/ICensusParticipant.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `participant` | [`ICensusParticipant`](../interfaces/ICensusParticipant.md) |

#### Returns

[`ICensusParticipant`](../interfaces/ICensusParticipant.md)

#### Defined in

[types/census/offchain.ts:35](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/offchain.ts#L35)

___

### removeParticipant

▸ **removeParticipant**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[types/census/offchain.ts:41](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/census/offchain.ts#L41)

___

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
