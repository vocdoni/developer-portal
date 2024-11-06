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

- [async](CensusService#async)
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

[src/services/census.ts:81](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/census.ts#L81)

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

[src/services/census.ts:150](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/census.ts#L150)

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

[src/services/census.ts:142](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/census.ts#L142)

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

[src/services/census.ts:253](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/census.ts#L253)

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

[src/services/census.ts:116](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/census.ts#L116)

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

[src/services/census.ts:228](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/census.ts#L228)

___

### fetchAccountToken

▸ **fetchAccountToken**(): `Promise`\<`void`\>

Fetches the specific account token auth and sets it to the current instance.

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/services/census.ts:294](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/census.ts#L294)

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

[src/services/census.ts:129](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/census.ts#L129)

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

[src/services/census.ts:91](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/census.ts#L91)

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

[src/services/census.ts:241](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/census.ts#L241)

___

### publish

▸ **publish**(`censusId`, `async?`): `Promise`\<[`ICensusPublishResponse`](../interfaces/ICensusPublishResponse)\>

Publishes the given census identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `censusId` | `string` | The census identifier |
| `async?` | `boolean` | If the publication has to be done asynchronously |

#### Returns

`Promise`\<[`ICensusPublishResponse`](../interfaces/ICensusPublishResponse)\>

#### Defined in

[src/services/census.ts:200](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/census.ts#L200)

## Properties

### async

• **async**: `CensusAsync`

#### Implementation of

CensusServiceProperties.async

#### Defined in

[src/services/census.ts:74](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/census.ts#L74)

___

### auth

• **auth**: `CensusAuth`

#### Implementation of

CensusServiceProperties.auth

#### Defined in

[src/services/census.ts:72](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/census.ts#L72)

___

### chunk\_size

• **chunk\_size**: `number`

#### Implementation of

CensusServiceProperties.chunk\_size

#### Defined in

[src/services/census.ts:73](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/census.ts#L73)

___

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service#url)

#### Defined in

[src/services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/service.ts#L6)
