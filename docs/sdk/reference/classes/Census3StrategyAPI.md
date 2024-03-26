[@vocdoni/sdk](/sdk) / [Exports](../modules) / Census3StrategyAPI

# Class: Census3StrategyAPI

## Hierarchy

- `Census3API`

  ↳ **`Census3StrategyAPI`**

## Table of contents

### Constructors

- [constructor](Census3StrategyAPI#constructor)

### Methods

- [create](Census3StrategyAPI#create)
- [estimation](Census3StrategyAPI#estimation)
- [estimationQueue](Census3StrategyAPI#estimationqueue)
- [holders](Census3StrategyAPI#holders)
- [import](Census3StrategyAPI#import)
- [importQueue](Census3StrategyAPI#importqueue)
- [isApiError](Census3StrategyAPI#isapierror)
- [isUndefinedError](Census3StrategyAPI#isundefinederror)
- [list](Census3StrategyAPI#list)
- [listByToken](Census3StrategyAPI#listbytoken)
- [operators](Census3StrategyAPI#operators)
- [serializePagination](Census3StrategyAPI#serializepagination)
- [strategy](Census3StrategyAPI#strategy)
- [validatePredicate](Census3StrategyAPI#validatepredicate)

## Constructors

### constructor

• **new Census3StrategyAPI**(): [`Census3StrategyAPI`](Census3StrategyAPI)

Cannot be constructed.

#### Returns

[`Census3StrategyAPI`](Census3StrategyAPI)

#### Overrides

Census3API.constructor

#### Defined in

[api/census3/strategy.ts:264](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census3/strategy.ts#L264)

## Methods

### create

▸ **create**(`url`, `alias`, `predicate`, `tokens`): `Promise`\<[`ICensus3StrategyCreateResponse`](../interfaces/ICensus3StrategyCreateResponse)\>

Creates a new strategy based on the given token strategies and predicate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `alias` | `string` | The alias of the strategy |
| `predicate` | `string` | The predicate of the strategy |
| `tokens` | `Object` | The token list for the strategy |

#### Returns

`Promise`\<[`ICensus3StrategyCreateResponse`](../interfaces/ICensus3StrategyCreateResponse)\>

The identifier of the created strategy

#### Defined in

[api/census3/strategy.ts:422](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census3/strategy.ts#L422)

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

[api/census3/strategy.ts:352](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census3/strategy.ts#L352)

___

### estimationQueue

▸ **estimationQueue**(`url`, `strategyId`, `queueId`): `Promise`\<[`ICensus3StrategyEstimationQueueResponse`](../interfaces/ICensus3StrategyEstimationQueueResponse)\>

Returns the information of the strategy estimation queue

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `strategyId` | `number` | The identifier of the strategy |
| `queueId` | `string` | The identifier of the strategy estimation queue |

#### Returns

`Promise`\<[`ICensus3StrategyEstimationQueueResponse`](../interfaces/ICensus3StrategyEstimationQueueResponse)\>

#### Defined in

[api/census3/strategy.ts:369](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census3/strategy.ts#L369)

___

### holders

▸ **holders**(`url`, `id`, `pagination?`): `Promise`\<[`ICensus3StrategyHoldersResponsePaginated`](../interfaces/ICensus3StrategyHoldersResponsePaginated)\>

Fetches list of holders by strategy

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `id` | `number` | The identifier of the strategy |
| `pagination?` | `Census3Pagination` | Pagination options |

#### Returns

`Promise`\<[`ICensus3StrategyHoldersResponsePaginated`](../interfaces/ICensus3StrategyHoldersResponsePaginated)\>

#### Defined in

[api/census3/strategy.ts:292](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census3/strategy.ts#L292)

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

[api/census3/strategy.ts:406](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census3/strategy.ts#L406)

___

### importQueue

▸ **importQueue**(`url`, `queueId`): `Promise`\<[`ICensus3StrategyImportQueueResponse`](../interfaces/ICensus3StrategyImportQueueResponse)\>

Returns the information of the strategy import queue

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `queueId` | `string` | The identifier of the strategy import queue |

#### Returns

`Promise`\<[`ICensus3StrategyImportQueueResponse`](../interfaces/ICensus3StrategyImportQueueResponse)\>

#### Defined in

[api/census3/strategy.ts:390](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census3/strategy.ts#L390)

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

[api/census3/api.ts:101](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census3/api.ts#L101)

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

[api/api.ts:64](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/api.ts#L64)

___

### list

▸ **list**(`url`, `pagination?`): `Promise`\<[`ICensus3StrategiesListResponsePaginated`](../interfaces/ICensus3StrategiesListResponsePaginated)\>

Fetches list of strategies

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `pagination?` | `Census3Pagination` | Pagination options |

#### Returns

`Promise`\<[`ICensus3StrategiesListResponsePaginated`](../interfaces/ICensus3StrategiesListResponsePaginated)\>

#### Defined in

[api/census3/strategy.ts:275](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census3/strategy.ts#L275)

___

### listByToken

▸ **listByToken**(`url`, `tokenId`, `chainId`, `externalId?`): `Promise`\<[`ICensus3StrategiesListResponse`](../interfaces/ICensus3StrategiesListResponse)\>

Fetches list of strategies based on given token

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `tokenId` | `string` | The identifier of the token |
| `chainId` | `number` | The chain identifier of the token |
| `externalId?` | `string` | The identifier used by external provider |

#### Returns

`Promise`\<[`ICensus3StrategiesListResponse`](../interfaces/ICensus3StrategiesListResponse)\>

#### Defined in

[api/census3/strategy.ts:314](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census3/strategy.ts#L314)

___

### operators

▸ **operators**(`url`): `Promise`\<[`ICensus3StrategiesOperatorsResponse`](../interfaces/ICensus3StrategiesOperatorsResponse)\>

Returns the list of supported operators to build strategy predicates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |

#### Returns

`Promise`\<[`ICensus3StrategiesOperatorsResponse`](../interfaces/ICensus3StrategiesOperatorsResponse)\>

#### Defined in

[api/census3/strategy.ts:454](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census3/strategy.ts#L454)

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

[api/census3/api.ts:92](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census3/api.ts#L92)

___

### strategy

▸ **strategy**(`url`, `id`): `Promise`\<[`Census3Strategy`](../modules#census3strategy)\>

Returns the information of the strategy

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `id` | `number` | The identifier of the strategy |

#### Returns

`Promise`\<[`Census3Strategy`](../modules#census3strategy)\>

#### Defined in

[api/census3/strategy.ts:337](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census3/strategy.ts#L337)

___

### validatePredicate

▸ **validatePredicate**(`url`, `predicate`): `Promise`\<[`ICensus3ValidatePredicateResponse`](../interfaces/ICensus3ValidatePredicateResponse)\>

Validates a predicate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `predicate` | `string` | The predicate of the strategy |

#### Returns

`Promise`\<[`ICensus3ValidatePredicateResponse`](../interfaces/ICensus3ValidatePredicateResponse)\>

Parsed version of the predicate

#### Defined in

[api/census3/strategy.ts:441](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census3/strategy.ts#L441)
