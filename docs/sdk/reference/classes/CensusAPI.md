[@vocdoni/sdk](/sdk) / [Exports](../modules) / CensusAPI

# Class: CensusAPI

## Hierarchy

- `API`

  ↳ **`CensusAPI`**

## Table of contents

### Constructors

- [constructor](CensusAPI#constructor)

### Methods

- [add](CensusAPI#add)
- [create](CensusAPI#create)
- [delete](CensusAPI#delete)
- [export](CensusAPI#export)
- [import](CensusAPI#import)
- [isApiError](CensusAPI#isapierror)
- [isUndefinedError](CensusAPI#isundefinederror)
- [proof](CensusAPI#proof)
- [publish](CensusAPI#publish)
- [size](CensusAPI#size)
- [type](CensusAPI#type)
- [weight](CensusAPI#weight)

## Constructors

### constructor

• **new CensusAPI**(): [`CensusAPI`](CensusAPI)

Cannot be constructed.

#### Returns

[`CensusAPI`](CensusAPI)

#### Overrides

API.constructor

#### Defined in

[api/census.ts:121](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census.ts#L121)

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

[api/census.ts:153](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census.ts#L153)

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

[api/census.ts:133](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census.ts#L133)

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

[api/census.ts:275](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census.ts#L275)

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

[api/census.ts:223](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census.ts#L223)

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

[api/census.ts:245](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census.ts#L245)

___

### isApiError

▸ **isApiError**(`error`): `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `AxiosError`\<`unknown`, `any`\> |

#### Returns

`never`

#### Inherited from

API.isApiError

#### Defined in

[api/api.ts:21](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/api.ts#L21)

___

### isUndefinedError

▸ **isUndefinedError**(`error`, `message?`): `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `AxiosError`\<`unknown`, `any`\> |
| `message?` | `string` |

#### Returns

`never`

#### Inherited from

API.isUndefinedError

#### Defined in

[api/api.ts:64](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/api.ts#L64)

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

[api/census.ts:208](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census.ts#L208)

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

[api/census.ts:189](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census.ts#L189)

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

[api/census.ts:293](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census.ts#L293)

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

[api/census.ts:321](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census.ts#L321)

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

[api/census.ts:307](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census.ts#L307)
