[@vocdoni/sdk](/sdk) / CensusAPI

# Class: CensusAPI

## Hierarchy

- [`API`](API)

  ↳ **`CensusAPI`**

## Table of contents

### Methods

- [add](CensusAPI#add)
- [check](CensusAPI#check)
- [create](CensusAPI#create)
- [delete](CensusAPI#delete)
- [export](CensusAPI#export)
- [import](CensusAPI#import)
- [proof](CensusAPI#proof)
- [publishAsync](CensusAPI#publishasync)
- [publishSync](CensusAPI#publishsync)
- [size](CensusAPI#size)
- [type](CensusAPI#type)
- [weight](CensusAPI#weight)

## Methods

### add

▸ **add**(`url`, `authToken`, `censusId`, `participants`): `Promise`\<`ICensusAddResponse`\>

Adds participants to a census

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `authToken` | `string` | Authentication token |
| `censusId` | `string` | The id of the census to which participants are being added |
| `participants` | \{ `key`: `string` ; `weight?`: `bigint`  }[] | An array of participants |

#### Returns

`Promise`\<`ICensusAddResponse`\>

#### Defined in

[src/api/census.ts:161](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/census.ts#L161)

___

### check

▸ **check**(`url`, `authToken`, `censusId`): `Promise`\<[`ICensusPublishResponse`](../interfaces/ICensusPublishResponse)\>

Checks that the census is published

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `authToken` | `string` | Authentication token |
| `censusId` | `string` | The census ID we're checking |

#### Returns

`Promise`\<[`ICensusPublishResponse`](../interfaces/ICensusPublishResponse)\>

on success

#### Defined in

[src/api/census.ts:235](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/census.ts#L235)

___

### create

▸ **create**(`url`, `authToken`, `type`): `Promise`\<`ICensusCreateResponse`\>

Create's a new census in the API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `authToken` | `string` | Authentication token |
| `type` | [`CensusType`](../enums/CensusType) | Type of census to be created |

#### Returns

`Promise`\<`ICensusCreateResponse`\>

#### Defined in

[src/api/census.ts:142](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/census.ts#L142)

___

### delete

▸ **delete**(`url`, `authToken`, `censusId`): `Promise`\<`void`\>

Deletes the given census

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `authToken` | `string` | Authentication token |
| `censusId` | `string` | The census ID we want to export |

#### Returns

`Promise`\<`void`\>

on success

#### Defined in

[src/api/census.ts:326](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/census.ts#L326)

___

### export

▸ **export**(`url`, `authToken`, `censusId`): `Promise`\<[`ICensusExportResponse`](../interfaces/ICensusExportResponse)\>

Exports the given census identifier

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `authToken` | `string` | Authentication token |
| `censusId` | `string` | The census ID we want to export |

#### Returns

`Promise`\<[`ICensusExportResponse`](../interfaces/ICensusExportResponse)\>

on success

#### Defined in

[src/api/census.ts:274](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/census.ts#L274)

___

### import

▸ **import**(`url`, `authToken`, `censusId`, `type`, `rootHash`, `data`): `Promise`\<[`ICensusImportResponse`](../interfaces/ICensusImportResponse)\>

Imports data into the given census identifier

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `authToken` | `string` | Authentication token |
| `censusId` | `string` | The census ID we want to export |
| `type` | `number` | The type of the census |
| `rootHash` | `string` | The root hash of the census |
| `data` | `string` | The census data to be imported |

#### Returns

`Promise`\<[`ICensusImportResponse`](../interfaces/ICensusImportResponse)\>

on success

#### Defined in

[src/api/census.ts:296](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/census.ts#L296)

___

### proof

▸ **proof**(`url`, `censusId`, `key`): `Promise`\<[`ICensusProofResponse`](../interfaces/ICensusProofResponse)\>

Checks if the specified address is in the specified census

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `censusId` | `string` | The census ID of which we want the proof from |
| `key` | `string` | The address to be checked |

#### Returns

`Promise`\<[`ICensusProofResponse`](../interfaces/ICensusProofResponse)\>

on success

#### Defined in

[src/api/census.ts:259](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/census.ts#L259)

___

### publishAsync

▸ **publishAsync**(`url`, `authToken`, `censusId`): `Promise`\<[`ICensusPublishAsyncResponse`](../interfaces/ICensusPublishAsyncResponse)\>

Publishes the census using an async call

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `authToken` | `string` | Authentication token |
| `censusId` | `string` | The census ID we're publishing |

#### Returns

`Promise`\<[`ICensusPublishAsyncResponse`](../interfaces/ICensusPublishAsyncResponse)\>

on success

#### Defined in

[src/api/census.ts:216](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/census.ts#L216)

___

### publishSync

▸ **publishSync**(`url`, `authToken`, `censusId`): `Promise`\<[`ICensusPublishResponse`](../interfaces/ICensusPublishResponse)\>

Publishes the census, so it can be used in processes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `authToken` | `string` | Authentication token |
| `censusId` | `string` | The census ID we're publishing |

#### Returns

`Promise`\<[`ICensusPublishResponse`](../interfaces/ICensusPublishResponse)\>

on success

#### Defined in

[src/api/census.ts:197](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/census.ts#L197)

___

### size

▸ **size**(`url`, `censusId`): `Promise`\<`ICensusSizeResponse`\>

Returns the size of a given census

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `censusId` | `string` | The census ID |

#### Returns

`Promise`\<`ICensusSizeResponse`\>

#### Defined in

[src/api/census.ts:343](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/census.ts#L343)

___

### type

▸ **type**(`url`, `censusId`): `Promise`\<`ICensusTypeResponse`\>

Returns the type of given census

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `censusId` | `string` | The census ID |

#### Returns

`Promise`\<`ICensusTypeResponse`\>

#### Defined in

[src/api/census.ts:369](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/census.ts#L369)

___

### weight

▸ **weight**(`url`, `censusId`): `Promise`\<`ICensusWeightResponse`\>

Returns the weight of a given census

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `censusId` | `string` | The census ID |

#### Returns

`Promise`\<`ICensusWeightResponse`\>

#### Defined in

[src/api/census.ts:356](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/census.ts#L356)
