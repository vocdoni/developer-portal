[@vocdoni/sdk](/sdk) / Census3CensusAPI

# Class: Census3CensusAPI

## Hierarchy

- `Census3API`

  ↳ **`Census3CensusAPI`**

## Table of contents

### Methods

- [census](Census3CensusAPI#census)
- [create](Census3CensusAPI#create)
- [list](Census3CensusAPI#list)
- [queue](Census3CensusAPI#queue)

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

[api/census3/census.ts:119](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/census3/census.ts#L119)

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

[api/census3/census.ts:147](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/census3/census.ts#L147)

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

[api/census3/census.ts:106](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/census3/census.ts#L106)

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

[api/census3/census.ts:132](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/census3/census.ts#L132)
