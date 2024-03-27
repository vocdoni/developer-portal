[@vocdoni/sdk](/sdk) / [Exports](../modules) / OffchainCensus

# Class: OffchainCensus

Represents an offchain census

## Hierarchy

- [`Census`](Census)

  ↳ **`OffchainCensus`**

  ↳↳ [`PlainCensus`](PlainCensus)

  ↳↳ [`WeightedCensus`](WeightedCensus)

## Table of contents

### Constructors

- [constructor](OffchainCensus#constructor)

### Properties

- [\_censusId](OffchainCensus.md#_censusid)
- [\_censusURI](OffchainCensus.md#_censusuri)
- [\_participants](OffchainCensus.md#_participants)
- [\_type](OffchainCensus.md#_type)

### Accessors

- [censusId](OffchainCensus#censusid)
- [censusURI](OffchainCensus#censusuri)
- [isPublished](OffchainCensus#ispublished)
- [participants](OffchainCensus#participants)
- [size](OffchainCensus#size)
- [type](OffchainCensus#type)
- [weight](OffchainCensus#weight)

### Methods

- [addParticipants](OffchainCensus#addparticipants)
- [checkParticipant](OffchainCensus#checkparticipant)
- [removeParticipant](OffchainCensus#removeparticipant)
- [censusTypeFromCensusOrigin](OffchainCensus#censustypefromcensusorigin)

## Constructors

### constructor

• **new OffchainCensus**(): [`OffchainCensus`](OffchainCensus)

Constructs an offchain census

#### Returns

[`OffchainCensus`](OffchainCensus)

#### Overrides

[Census](Census.md).[constructor](Census#constructor)

#### Defined in

[types/census/offchain.ts:19](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/offchain.ts#L19)

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

### \_participants

• `Private` **\_participants**: [`ICensusParticipant`](../interfaces/ICensusParticipant)[]

#### Defined in

[types/census/offchain.ts:14](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/offchain.ts#L14)

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

### participants

• `get` **participants**(): [`ICensusParticipant`](../interfaces/ICensusParticipant)[]

#### Returns

[`ICensusParticipant`](../interfaces/ICensusParticipant)[]

#### Defined in

[types/census/offchain.ts:45](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/offchain.ts#L45)

• `set` **participants**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ICensusParticipant`](../interfaces/ICensusParticipant)[] |

#### Returns

`void`

#### Defined in

[types/census/offchain.ts:49](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/offchain.ts#L49)

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

### addParticipants

▸ **addParticipants**(`participants`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `participants` | [`ICensusParticipant`](../interfaces/ICensusParticipant.md) \| [`ICensusParticipant`](../interfaces/ICensusParticipant)[] |

#### Returns

`void`

#### Defined in

[types/census/offchain.ts:25](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/offchain.ts#L25)

___

### checkParticipant

▸ **checkParticipant**(`participant`): [`ICensusParticipant`](../interfaces/ICensusParticipant)

#### Parameters

| Name | Type |
| :------ | :------ |
| `participant` | [`ICensusParticipant`](../interfaces/ICensusParticipant) |

#### Returns

[`ICensusParticipant`](../interfaces/ICensusParticipant)

#### Defined in

[types/census/offchain.ts:35](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/offchain.ts#L35)

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

[types/census/offchain.ts:41](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/offchain.ts#L41)

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

[Census](Census.md).[censusTypeFromCensusOrigin](Census#censustypefromcensusorigin)

#### Defined in

[types/census/census.ts:81](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/census/census.ts#L81)
