[@vocdoni/sdk](/sdk) / [Exports](../modules) / Census3CensusAPI

# Class: Census3CensusAPI

## Hierarchy

- `Census3API`

  ↳ **`Census3CensusAPI`**

## Table of contents

### Constructors

- [constructor](Census3CensusAPI#constructor)

### Methods

- [census](Census3CensusAPI#census)
- [create](Census3CensusAPI#create)
- [isApiError](Census3CensusAPI#isapierror)
- [isUndefinedError](Census3CensusAPI#isundefinederror)
- [list](Census3CensusAPI#list)
- [queue](Census3CensusAPI#queue)
- [serializePagination](Census3CensusAPI#serializepagination)

## Constructors

### constructor

• **new Census3CensusAPI**(): [`Census3CensusAPI`](Census3CensusAPI)

Cannot be constructed.

#### Returns

[`Census3CensusAPI`](Census3CensusAPI)

#### Overrides

Census3API.constructor

#### Defined in

[api/census3/census.ts:91](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/census3/census.ts#L91)

## Methods

### census

▸ **census**(`url`, `id`): `Promise`\<[`ICensus3CensusResponse`](../interfaces/ICensus3CensusResponse)\>

Returns the information of the census

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `id` | `number` | The identifier of the census |

#### Returns

`Promise`\<[`ICensus3CensusResponse`](../interfaces/ICensus3CensusResponse)\>

#### Defined in

[api/census3/census.ts:116](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/census3/census.ts#L116)

___

### create

▸ **create**(`url`, `strategyId`, `anonymous?`): `Promise`\<`ICensus3QueueResponse`\>

Requests the creation of a new census with the strategy provided.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | API endpoint URL |
| `strategyId` | `number` | `undefined` | The strategy identifier |
| `anonymous` | `boolean` | `false` | If the census has to be anonymous |

#### Returns

`Promise`\<`ICensus3QueueResponse`\>

The queue identifier

#### Defined in

[api/census3/census.ts:145](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/census3/census.ts#L145)

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

Census3API.isApiError

#### Defined in

[api/census3/api.ts:101](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/census3/api.ts#L101)

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

Census3API.isUndefinedError

#### Defined in

[api/api.ts:64](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/api.ts#L64)

___

### list

▸ **list**(`url`, `strategy`): `Promise`\<[`ICensus3CensusListResponse`](../interfaces/ICensus3CensusListResponse)\>

Fetches list of census based on given strategy

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `strategy` | `number` | The identifier of the strategy |

#### Returns

`Promise`\<[`ICensus3CensusListResponse`](../interfaces/ICensus3CensusListResponse)\>

#### Defined in

[api/census3/census.ts:102](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/census3/census.ts#L102)

___

### queue

▸ **queue**(`url`, `id`): `Promise`\<[`ICensus3CensusQueueResponse`](../interfaces/ICensus3CensusQueueResponse)\>

Returns the information of the census queue

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `id` | `string` | The identifier of the census queue |

#### Returns

`Promise`\<[`ICensus3CensusQueueResponse`](../interfaces/ICensus3CensusQueueResponse)\>

#### Defined in

[api/census3/census.ts:130](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/census3/census.ts#L130)

___

### serializePagination

▸ **serializePagination**(`pagination?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pagination?` | `Census3Pagination` |

#### Returns

`string`

#### Inherited from

Census3API.serializePagination

#### Defined in

[api/census3/api.ts:92](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/census3/api.ts#L92)
