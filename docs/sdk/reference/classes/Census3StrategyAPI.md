[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / Census3StrategyAPI

# Class: Census3StrategyAPI

## Hierarchy

- `Census3API`

  ↳ **`Census3StrategyAPI`**

## Table of contents

### Constructors

- [constructor](Census3StrategyAPI.md#constructor)

### Methods

- [create](Census3StrategyAPI.md#create)
- [estimation](Census3StrategyAPI.md#estimation)
- [estimationQueue](Census3StrategyAPI.md#estimationqueue)
- [holders](Census3StrategyAPI.md#holders)
- [import](Census3StrategyAPI.md#import)
- [importQueue](Census3StrategyAPI.md#importqueue)
- [isApiError](Census3StrategyAPI.md#isapierror)
- [isUndefinedError](Census3StrategyAPI.md#isundefinederror)
- [list](Census3StrategyAPI.md#list)
- [listByToken](Census3StrategyAPI.md#listbytoken)
- [operators](Census3StrategyAPI.md#operators)
- [serializePagination](Census3StrategyAPI.md#serializepagination)
- [strategy](Census3StrategyAPI.md#strategy)
- [validatePredicate](Census3StrategyAPI.md#validatepredicate)

## Constructors

### constructor

• **new Census3StrategyAPI**(): [`Census3StrategyAPI`](Census3StrategyAPI.md)

Cannot be constructed.

#### Returns

[`Census3StrategyAPI`](Census3StrategyAPI.md)

#### Overrides

Census3API.constructor

#### Defined in

[api/census3/strategy.ts:254](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/strategy.ts#L254)

## Methods

### create

▸ **create**(`url`, `alias`, `predicate`, `tokens`): `Promise`\<[`ICensus3StrategyCreateResponse`](../interfaces/ICensus3StrategyCreateResponse.md)\>

Creates a new strategy based on the given token strategies and predicate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `alias` | `string` | The alias of the strategy |
| `predicate` | `string` | The predicate of the strategy |
| `tokens` | `Object` | The token list for the strategy |

#### Returns

`Promise`\<[`ICensus3StrategyCreateResponse`](../interfaces/ICensus3StrategyCreateResponse.md)\>

The identifier of the created strategy

#### Defined in

[api/census3/strategy.ts:412](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/strategy.ts#L412)

___

### estimation

▸ **estimation**(`url`, `id`, `anonymous?`): `Promise`\<`ICensus3QueueResponse`\>

Returns the estimation of size and time (in milliseconds) to create the census generated for the provided strategy

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | API endpoint URL |
| `id` | `number` | `undefined` | The identifier of the strategy |
| `anonymous` | `boolean` | `false` | If the estimation should be done for anonymous census |

#### Returns

`Promise`\<`ICensus3QueueResponse`\>

The queue identifier

#### Defined in

[api/census3/strategy.ts:342](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/strategy.ts#L342)

___

### estimationQueue

▸ **estimationQueue**(`url`, `strategyId`, `queueId`): `Promise`\<[`ICensus3StrategyEstimationQueueResponse`](../interfaces/ICensus3StrategyEstimationQueueResponse.md)\>

Returns the information of the strategy estimation queue

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `strategyId` | `number` | The identifier of the strategy |
| `queueId` | `string` | The identifier of the strategy estimation queue |

#### Returns

`Promise`\<[`ICensus3StrategyEstimationQueueResponse`](../interfaces/ICensus3StrategyEstimationQueueResponse.md)\>

#### Defined in

[api/census3/strategy.ts:359](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/strategy.ts#L359)

___

### holders

▸ **holders**(`url`, `id`, `pagination?`): `Promise`\<[`ICensus3StrategyHoldersResponsePaginated`](../interfaces/ICensus3StrategyHoldersResponsePaginated.md)\>

Fetches list of holders by strategy

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `id` | `number` | The identifier of the strategy |
| `pagination?` | `Census3Pagination` | Pagination options |

#### Returns

`Promise`\<[`ICensus3StrategyHoldersResponsePaginated`](../interfaces/ICensus3StrategyHoldersResponsePaginated.md)\>

#### Defined in

[api/census3/strategy.ts:282](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/strategy.ts#L282)

___

### import

▸ **import**(`url`, `cid`): `Promise`\<`ICensus3QueueResponse`\>

Imports a strategy from IPFS from the given cid.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `cid` | `string` | The cid of the IPFS where the strategy is stored |

#### Returns

`Promise`\<`ICensus3QueueResponse`\>

The queue identifier

#### Defined in

[api/census3/strategy.ts:396](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/strategy.ts#L396)

___

### importQueue

▸ **importQueue**(`url`, `queueId`): `Promise`\<[`ICensus3StrategyImportQueueResponse`](../interfaces/ICensus3StrategyImportQueueResponse.md)\>

Returns the information of the strategy import queue

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `queueId` | `string` | The identifier of the strategy import queue |

#### Returns

`Promise`\<[`ICensus3StrategyImportQueueResponse`](../interfaces/ICensus3StrategyImportQueueResponse.md)\>

#### Defined in

[api/census3/strategy.ts:380](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/strategy.ts#L380)

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

[api/census3/api.ts:101](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/api.ts#L101)

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

[api/api.ts:64](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/api.ts#L64)

___

### list

▸ **list**(`url`, `pagination?`): `Promise`\<[`ICensus3StrategiesListResponsePaginated`](../interfaces/ICensus3StrategiesListResponsePaginated.md)\>

Fetches list of strategies

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `pagination?` | `Census3Pagination` | Pagination options |

#### Returns

`Promise`\<[`ICensus3StrategiesListResponsePaginated`](../interfaces/ICensus3StrategiesListResponsePaginated.md)\>

#### Defined in

[api/census3/strategy.ts:265](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/strategy.ts#L265)

___

### listByToken

▸ **listByToken**(`url`, `tokenId`, `chainId`, `externalId?`): `Promise`\<[`ICensus3StrategiesListResponse`](../interfaces/ICensus3StrategiesListResponse.md)\>

Fetches list of strategies based on given token

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `tokenId` | `string` | The identifier of the token |
| `chainId` | `number` | The chain identifier of the token |
| `externalId?` | `string` | The identifier used by external provider |

#### Returns

`Promise`\<[`ICensus3StrategiesListResponse`](../interfaces/ICensus3StrategiesListResponse.md)\>

#### Defined in

[api/census3/strategy.ts:304](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/strategy.ts#L304)

___

### operators

▸ **operators**(`url`): `Promise`\<[`ICensus3StrategiesOperatorsResponse`](../interfaces/ICensus3StrategiesOperatorsResponse.md)\>

Returns the list of supported operators to build strategy predicates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |

#### Returns

`Promise`\<[`ICensus3StrategiesOperatorsResponse`](../interfaces/ICensus3StrategiesOperatorsResponse.md)\>

#### Defined in

[api/census3/strategy.ts:444](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/strategy.ts#L444)

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

[api/census3/api.ts:92](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/api.ts#L92)

___

### strategy

▸ **strategy**(`url`, `id`): `Promise`\<[`Census3Strategy`](../modules.md#census3strategy)\>

Returns the information of the strategy

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `id` | `number` | The identifier of the strategy |

#### Returns

`Promise`\<[`Census3Strategy`](../modules.md#census3strategy)\>

#### Defined in

[api/census3/strategy.ts:327](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/strategy.ts#L327)

___

### validatePredicate

▸ **validatePredicate**(`url`, `predicate`): `Promise`\<[`ICensus3ValidatePredicateResponse`](../interfaces/ICensus3ValidatePredicateResponse.md)\>

Validates a predicate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `predicate` | `string` | The predicate of the strategy |

#### Returns

`Promise`\<[`ICensus3ValidatePredicateResponse`](../interfaces/ICensus3ValidatePredicateResponse.md)\>

Parsed version of the predicate

#### Defined in

[api/census3/strategy.ts:431](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/strategy.ts#L431)