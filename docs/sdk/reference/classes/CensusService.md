[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / CensusService

# Class: CensusService

## Hierarchy

- [`Service`](Service.md)

  ↳ **`CensusService`**

## Implements

- `CensusServiceProperties`

## Table of contents

### Constructors

- [constructor](CensusService.md#constructor)

### Properties

- [auth](CensusService.md#auth)
- [chunk\_size](CensusService.md#chunk_size)
- [url](CensusService.md#url)

### Methods

- [add](CensusService.md#add)
- [addParallel](CensusService.md#addparallel)
- [create](CensusService.md#create)
- [createCensus](CensusService.md#createcensus)
- [createCensusParallel](CensusService.md#createcensusparallel)
- [delete](CensusService.md#delete)
- [export](CensusService.md#export)
- [fetchAccountToken](CensusService.md#fetchaccounttoken)
- [fetchProof](CensusService.md#fetchproof)
- [get](CensusService.md#get)
- [import](CensusService.md#import)
- [publish](CensusService.md#publish)

## Constructors

### constructor

• **new CensusService**(`params`): [`CensusService`](CensusService.md)

Instantiate the census service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Partial`\<`CensusServiceParameters`\> | The service parameters |

#### Returns

[`CensusService`](CensusService.md)

#### Overrides

[Service](Service.md).[constructor](Service.md#constructor)

#### Defined in

[services/census.ts:73](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/census.ts#L73)

## Properties

### auth

• **auth**: `CensusAuth`

#### Implementation of

CensusServiceProperties.auth

#### Defined in

[services/census.ts:65](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/census.ts#L65)

___

### chunk\_size

• **chunk\_size**: `number`

#### Implementation of

CensusServiceProperties.chunk\_size

#### Defined in

[services/census.ts:66](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/census.ts#L66)

___

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service.md#url)

#### Defined in

[services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/service.ts#L6)

## Methods

### add

▸ **add**(`censusId`, `participants`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `censusId` | `string` |
| `participants` | [`ICensusParticipant`](../interfaces/ICensusParticipant.md)[] |

#### Returns

`Promise`\<`string`\>

#### Defined in

[services/census.ts:145](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/census.ts#L145)

___

### addParallel

▸ **addParallel**(`censusId`, `participants`): `Promise`\<`ICensusAddResponse`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `censusId` | `string` |
| `participants` | [`ICensusParticipant`](../interfaces/ICensusParticipant.md)[] |

#### Returns

`Promise`\<`ICensusAddResponse`\>[]

#### Defined in

[services/census.ts:169](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/census.ts#L169)

___

### create

▸ **create**(`censusType`): `Promise`\<\{ `auth`: `string` ; `id`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `censusType` | [`CensusType`](../enums/CensusType.md) |

#### Returns

`Promise`\<\{ `auth`: `string` ; `id`: `string`  }\>

#### Defined in

[services/census.ts:137](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/census.ts#L137)

___

### createCensus

▸ **createCensus**(`census`): `Promise`\<`void`\>

Publishes the given census.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `census` | [`PlainCensus`](PlainCensus.md) \| [`WeightedCensus`](WeightedCensus.md) | The census to be published. |

#### Returns

`Promise`\<`void`\>

#### Defined in

[services/census.ts:232](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/census.ts#L232)

___

### createCensusParallel

▸ **createCensusParallel**(`census`): `Promise`\<`void`\>

Publishes the given census.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `census` | [`PlainCensus`](PlainCensus.md) \| [`WeightedCensus`](WeightedCensus.md) | The census to be published. |

#### Returns

`Promise`\<`void`\>

#### Defined in

[services/census.ts:254](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/census.ts#L254)

___

### delete

▸ **delete**(`censusId`): `Promise`\<`void`\>

Deletes the given census.

#### Parameters

| Name | Type |
| :------ | :------ |
| `censusId` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[services/census.ts:110](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/census.ts#L110)

___

### export

▸ **export**(`censusId`): `Promise`\<[`CensusImportExport`](../modules.md#censusimportexport)\>

Exports the given census identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `censusId` | `string` | The census identifier |

#### Returns

`Promise`\<[`CensusImportExport`](../modules.md#censusimportexport)\>

#### Defined in

[services/census.ts:206](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/census.ts#L206)

___

### fetchAccountToken

▸ **fetchAccountToken**(): `Promise`\<`void`\>

Fetches the specific account token auth and sets it to the current instance.

#### Returns

`Promise`\<`void`\>

#### Defined in

[services/census.ts:275](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/census.ts#L275)

___

### fetchProof

▸ **fetchProof**(`censusId`, `key`): `Promise`\<[`CensusProof`](../modules.md#censusproof)\>

Fetches proof that an address is part of the specified census.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `censusId` | `string` | Census we want to check the address against |
| `key` | `string` | The address to be found |

#### Returns

`Promise`\<[`CensusProof`](../modules.md#censusproof)\>

#### Defined in

[services/census.ts:124](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/census.ts#L124)

___

### get

▸ **get**(`censusId`): `Promise`\<\{ `size`: `number` ; `type`: [`CensusType`](../enums/CensusType.md) ; `weight`: `bigint`  }\>

Fetches the information of a given census.

#### Parameters

| Name | Type |
| :------ | :------ |
| `censusId` | `string` |

#### Returns

`Promise`\<\{ `size`: `number` ; `type`: [`CensusType`](../enums/CensusType.md) ; `weight`: `bigint`  }\>

#### Defined in

[services/census.ts:84](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/census.ts#L84)

___

### import

▸ **import**(`censusId`, `data`): `Promise`\<[`ICensusImportResponse`](../interfaces/ICensusImportResponse.md)\>

Imports data into the given census identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `censusId` | `string` | The census identifier |
| `data` | [`CensusImportExport`](../modules.md#censusimportexport) | The census data |

#### Returns

`Promise`\<[`ICensusImportResponse`](../interfaces/ICensusImportResponse.md)\>

#### Defined in

[services/census.ts:219](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/census.ts#L219)

___

### publish

▸ **publish**(`censusId`): `Promise`\<[`ICensusPublishResponse`](../interfaces/ICensusPublishResponse.md)\>

Publishes the given census identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `censusId` | `string` | The census identifier |

#### Returns

`Promise`\<[`ICensusPublishResponse`](../interfaces/ICensusPublishResponse.md)\>

#### Defined in

[services/census.ts:194](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/census.ts#L194)
