[@vocdoni/sdk](/sdk) / CensusService

# Class: CensusService

## Hierarchy

- [`Service`](Service)

  ↳ **`CensusService`**

## Implements

- `CensusServiceProperties`

## Table of contents

### Constructors

- [constructor](CensusService#constructor)

### Methods

- [add](CensusService#add)
- [create](CensusService#create)
- [createCensus](CensusService#createcensus)
- [delete](CensusService#delete)
- [export](CensusService#export)
- [fetchAccountToken](CensusService#fetchaccounttoken)
- [fetchProof](CensusService#fetchproof)
- [get](CensusService#get)
- [import](CensusService#import)
- [publish](CensusService#publish)

### Properties

- [auth](CensusService#auth)
- [chunk\_size](CensusService.md#chunk_size)
- [url](CensusService#url)

## Constructors

### constructor

• **new CensusService**(`params`): [`CensusService`](CensusService)

Instantiate the census service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Partial`\<`CensusServiceParameters`\> | The service parameters |

#### Returns

[`CensusService`](CensusService)

#### Overrides

Service.constructor

#### Defined in

[services/census.ts:73](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/census.ts#L73)

## Methods

### add

▸ **add**(`censusId`, `participants`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `censusId` | `string` |
| `participants` | [`ICensusParticipant`](../interfaces/ICensusParticipant)[] |

#### Returns

`Promise`\<`string`\>

#### Defined in

[services/census.ts:142](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/census.ts#L142)

___

### create

▸ **create**(`censusType`): `Promise`\<\{ `auth`: `string` ; `id`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `censusType` | [`CensusType`](../enums/CensusType) |

#### Returns

`Promise`\<\{ `auth`: `string` ; `id`: `string`  }\>

#### Defined in

[services/census.ts:134](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/census.ts#L134)

___

### createCensus

▸ **createCensus**(`census`): `Promise`\<`void`\>

Publishes the given census.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `census` | [`PlainCensus`](PlainCensus.md) \| [`WeightedCensus`](WeightedCensus) | The census to be published. |

#### Returns

`Promise`\<`void`\>

#### Defined in

[services/census.ts:228](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/census.ts#L228)

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

[services/census.ts:108](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/census.ts#L108)

___

### export

▸ **export**(`censusId`): `Promise`\<[`CensusImportExport`](../sdk-reference#censusimportexport)\>

Exports the given census identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `censusId` | `string` | The census identifier |

#### Returns

`Promise`\<[`CensusImportExport`](../sdk-reference#censusimportexport)\>

#### Defined in

[services/census.ts:203](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/census.ts#L203)

___

### fetchAccountToken

▸ **fetchAccountToken**(): `Promise`\<`void`\>

Fetches the specific account token auth and sets it to the current instance.

#### Returns

`Promise`\<`void`\>

#### Defined in

[services/census.ts:269](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/census.ts#L269)

___

### fetchProof

▸ **fetchProof**(`censusId`, `key`): `Promise`\<[`CensusProof`](../sdk-reference#censusproof)\>

Fetches proof that an address is part of the specified census.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `censusId` | `string` | Census we want to check the address against |
| `key` | `string` | The address to be found |

#### Returns

`Promise`\<[`CensusProof`](../sdk-reference#censusproof)\>

#### Defined in

[services/census.ts:121](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/census.ts#L121)

___

### get

▸ **get**(`censusId`): `Promise`\<\{ `size`: `number` ; `type`: [`CensusType`](../enums/CensusType) ; `weight`: `bigint`  }\>

Fetches the information of a given census.

#### Parameters

| Name | Type |
| :------ | :------ |
| `censusId` | `string` |

#### Returns

`Promise`\<\{ `size`: `number` ; `type`: [`CensusType`](../enums/CensusType) ; `weight`: `bigint`  }\>

#### Defined in

[services/census.ts:83](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/census.ts#L83)

___

### import

▸ **import**(`censusId`, `data`): `Promise`\<[`ICensusImportResponse`](../interfaces/ICensusImportResponse)\>

Imports data into the given census identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `censusId` | `string` | The census identifier |
| `data` | [`CensusImportExport`](../sdk-reference#censusimportexport) | The census data |

#### Returns

`Promise`\<[`ICensusImportResponse`](../interfaces/ICensusImportResponse)\>

#### Defined in

[services/census.ts:216](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/census.ts#L216)

___

### publish

▸ **publish**(`censusId`): `Promise`\<[`ICensusPublishResponse`](../interfaces/ICensusPublishResponse)\>

Publishes the given census identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `censusId` | `string` | The census identifier |

#### Returns

`Promise`\<[`ICensusPublishResponse`](../interfaces/ICensusPublishResponse)\>

#### Defined in

[services/census.ts:191](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/census.ts#L191)

## Properties

### auth

• **auth**: `CensusAuth`

#### Implementation of

CensusServiceProperties.auth

#### Defined in

[services/census.ts:65](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/census.ts#L65)

___

### chunk\_size

• **chunk\_size**: `number`

#### Implementation of

CensusServiceProperties.chunk\_size

#### Defined in

[services/census.ts:66](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/census.ts#L66)

___

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service#url)

#### Defined in

[services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/service.ts#L6)
