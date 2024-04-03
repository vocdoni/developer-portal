[@vocdoni/sdk](/sdk) / Census3StrategyAPI

# Class: Census3StrategyAPI

## Hierarchy

- `Census3API`

  ↳ **`Census3StrategyAPI`**

## Table of contents

### Methods

- [create](Census3StrategyAPI#create)
- [estimation](Census3StrategyAPI#estimation)
- [estimationQueue](Census3StrategyAPI#estimationqueue)
- [holders](Census3StrategyAPI#holders)
- [import](Census3StrategyAPI#import)
- [importQueue](Census3StrategyAPI#importqueue)
- [list](Census3StrategyAPI#list)
- [listByToken](Census3StrategyAPI#listbytoken)
- [operators](Census3StrategyAPI#operators)
- [strategy](Census3StrategyAPI#strategy)
- [validatePredicate](Census3StrategyAPI#validatepredicate)

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

[api/census3/strategy.ts:416](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/api/census3/strategy.ts#L416)

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

[api/census3/strategy.ts:348](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/api/census3/strategy.ts#L348)

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

[api/census3/strategy.ts:364](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/api/census3/strategy.ts#L364)

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

[api/census3/strategy.ts:290](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/api/census3/strategy.ts#L290)

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

[api/census3/strategy.ts:400](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/api/census3/strategy.ts#L400)

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

[api/census3/strategy.ts:384](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/api/census3/strategy.ts#L384)

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

[api/census3/strategy.ts:274](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/api/census3/strategy.ts#L274)

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

[api/census3/strategy.ts:311](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/api/census3/strategy.ts#L311)

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

[api/census3/strategy.ts:447](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/api/census3/strategy.ts#L447)

___

### strategy

▸ **strategy**(`url`, `id`): `Promise`\<[`Census3Strategy`](../sdk-reference#census3strategy)\>

Returns the information of the strategy

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `id` | `number` | The identifier of the strategy |

#### Returns

`Promise`\<[`Census3Strategy`](../sdk-reference#census3strategy)\>

#### Defined in

[api/census3/strategy.ts:333](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/api/census3/strategy.ts#L333)

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

[api/census3/strategy.ts:435](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/api/census3/strategy.ts#L435)
