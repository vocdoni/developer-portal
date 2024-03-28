[@vocdoni/sdk](/sdk) / CensusAPI

# Class: CensusAPI

## Hierarchy

- `API`

  ↳ **`CensusAPI`**

## Table of contents

### Methods

- [add](CensusAPI#add)
- [create](CensusAPI#create)
- [delete](CensusAPI#delete)
- [export](CensusAPI#export)
- [import](CensusAPI#import)
- [proof](CensusAPI#proof)
- [publish](CensusAPI#publish)
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

[api/census.ts:151](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/api/census.ts#L151)

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

[api/census.ts:132](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/api/census.ts#L132)

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

[api/census.ts:273](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/api/census.ts#L273)

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

[api/census.ts:221](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/api/census.ts#L221)

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

[api/census.ts:243](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/api/census.ts#L243)

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

[api/census.ts:206](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/api/census.ts#L206)

___

### publish

▸ **publish**(`url`, `authToken`, `censusId`): `Promise`\<[`ICensusPublishResponse`](../interfaces/ICensusPublishResponse)\>

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

[api/census.ts:187](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/api/census.ts#L187)

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

[api/census.ts:290](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/api/census.ts#L290)

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

[api/census.ts:316](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/api/census.ts#L316)

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

[api/census.ts:303](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/api/census.ts#L303)
