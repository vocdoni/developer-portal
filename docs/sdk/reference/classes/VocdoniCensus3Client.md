[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / VocdoniCensus3Client

# Class: VocdoniCensus3Client

## Table of contents

### Constructors

- [constructor](VocdoniCensus3Client.md#constructor)

### Properties

- [queueWait](VocdoniCensus3Client.md#queuewait)
- [url](VocdoniCensus3Client.md#url)

### Methods

- [createCensus](VocdoniCensus3Client.md#createcensus)
- [createStrategy](VocdoniCensus3Client.md#createstrategy)
- [createToken](VocdoniCensus3Client.md#createtoken)
- [createTokenCensus](VocdoniCensus3Client.md#createtokencensus)
- [getCensus](VocdoniCensus3Client.md#getcensus)
- [getCensuses](VocdoniCensus3Client.md#getcensuses)
- [getStrategies](VocdoniCensus3Client.md#getstrategies)
- [getStrategiesByToken](VocdoniCensus3Client.md#getstrategiesbytoken)
- [getStrategy](VocdoniCensus3Client.md#getstrategy)
- [getStrategyEstimation](VocdoniCensus3Client.md#getstrategyestimation)
- [getStrategyHolders](VocdoniCensus3Client.md#getstrategyholders)
- [getSupportedChains](VocdoniCensus3Client.md#getsupportedchains)
- [getSupportedOperators](VocdoniCensus3Client.md#getsupportedoperators)
- [getSupportedTokens](VocdoniCensus3Client.md#getsupportedtokens)
- [getSupportedTypes](VocdoniCensus3Client.md#getsupportedtypes)
- [getToken](VocdoniCensus3Client.md#gettoken)
- [importStrategy](VocdoniCensus3Client.md#importstrategy)
- [isHolderInToken](VocdoniCensus3Client.md#isholderintoken)
- [tokenHolderBalance](VocdoniCensus3Client.md#tokenholderbalance)
- [validatePredicate](VocdoniCensus3Client.md#validatepredicate)

## Constructors

### constructor

• **new VocdoniCensus3Client**(`opts`): [`VocdoniCensus3Client`](VocdoniCensus3Client.md)

Instantiate new VocdoniCensus3 client.

To instantiate the client just pass the `ClientOptions` you want or empty object to let defaults.

`const client = new VocdoniCensus3Client({EnvOptions.PROD})`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | [`ClientOptions`](../modules.md#clientoptions) | optional arguments |

#### Returns

[`VocdoniCensus3Client`](VocdoniCensus3Client.md)

#### Defined in

[census3.ts:48](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/census3.ts#L48)

## Properties

### queueWait

• **queueWait**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attempts` | `number` |
| `retryTime` | `number` |

#### Defined in

[census3.ts:37](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/census3.ts#L37)

___

### url

• **url**: `string`

#### Defined in

[census3.ts:36](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/census3.ts#L36)

## Methods

### createCensus

▸ **createCensus**(`strategyId`, `anonymous?`): `Promise`\<[`ICensus3CensusResponse`](../interfaces/ICensus3CensusResponse.md)\>

Creates the census based on the given strategy

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `strategyId` | `number` | `undefined` | The id of the strategy |
| `anonymous` | `boolean` | `false` | If the census has to be anonymous |

#### Returns

`Promise`\<[`ICensus3CensusResponse`](../interfaces/ICensus3CensusResponse.md)\>

The census information

#### Defined in

[census3.ts:358](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/census3.ts#L358)

___

### createStrategy

▸ **createStrategy**(`alias`, `predicate`, `tokens`): `Promise`\<`number`\>

Creates a new strategy based on the given tokens and predicate

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | The alias of the strategy |
| `predicate` | `string` | The predicate of the strategy |
| `tokens` | `Object` | The token list for the strategy |

#### Returns

`Promise`\<`number`\>

The strategy id

#### Defined in

[census3.ts:275](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/census3.ts#L275)

___

### createToken

▸ **createToken**(`address`, `type`, `chainId?`, `externalId?`, `tags?`): `Promise`\<`void`\>

Creates a new token to be tracked in the service

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `address` | `string` | `undefined` | The address of the token |
| `type` | `string` | `undefined` | The type of the token |
| `chainId` | `number` | `1` | The chain id of the token |
| `externalId` | `string` | `''` | The identifier used by external provider |
| `tags` | `string`[] | `[]` | The tag list to associate the token with |

#### Returns

`Promise`\<`void`\>

#### Defined in

[census3.ts:163](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/census3.ts#L163)

___

### createTokenCensus

▸ **createTokenCensus**(`address`, `chainId`, `anonymous?`, `externalId?`): `Promise`\<[`TokenCensus`](TokenCensus.md)\>

Returns the actual census based on the given token using the default strategy set

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `address` | `string` | `undefined` | The address of the token |
| `chainId` | `number` | `undefined` | The id of the chain |
| `anonymous` | `boolean` | `false` | If the census has to be anonymous |
| `externalId?` | `string` | `undefined` | The identifier used by external provider |

#### Returns

`Promise`\<[`TokenCensus`](TokenCensus.md)\>

The token census

#### Defined in

[census3.ts:395](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/census3.ts#L395)

___

### getCensus

▸ **getCensus**(`id`): `Promise`\<[`ICensus3CensusResponse`](../interfaces/ICensus3CensusResponse.md)\>

Returns the census3 census based on the given identifier

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The id of the census |

#### Returns

`Promise`\<[`ICensus3CensusResponse`](../interfaces/ICensus3CensusResponse.md)\>

The census3 census

#### Defined in

[census3.ts:346](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/census3.ts#L346)

___

### getCensuses

▸ **getCensuses**(`strategyId`): `Promise`\<[`ICensus3CensusResponse`](../interfaces/ICensus3CensusResponse.md)[]\>

Returns the census3 censuses

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `strategyId` | `number` | The strategy identifier |

#### Returns

`Promise`\<[`ICensus3CensusResponse`](../interfaces/ICensus3CensusResponse.md)[]\>

The list of census3 censuses

#### Defined in

[census3.ts:335](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/census3.ts#L335)

___

### getStrategies

▸ **getStrategies**(): `Promise`\<[`Census3Strategy`](../modules.md#census3strategy)[]\>

Returns the strategies

#### Returns

`Promise`\<[`Census3Strategy`](../modules.md#census3strategy)[]\>

The list of strategies

#### Defined in

[census3.ts:181](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/census3.ts#L181)

___

### getStrategiesByToken

▸ **getStrategiesByToken**(`id`, `chainId`, `externalId?`): `Promise`\<[`Census3Strategy`](../modules.md#census3strategy)[]\>

Returns the strategies from the given token

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id (address) of the token |
| `chainId` | `number` | The id of the chain |
| `externalId?` | `string` | The identifier used by external provider |

#### Returns

`Promise`\<[`Census3Strategy`](../modules.md#census3strategy)[]\>

The list of strategies

#### Defined in

[census3.ts:207](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/census3.ts#L207)

___

### getStrategy

▸ **getStrategy**(`id`): `Promise`\<[`Census3Strategy`](../modules.md#census3strategy)\>

Returns the information of the strategy based on the id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The id of the strategy |

#### Returns

`Promise`\<[`Census3Strategy`](../modules.md#census3strategy)\>

The strategy information

#### Defined in

[census3.ts:221](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/census3.ts#L221)

___

### getStrategyEstimation

▸ **getStrategyEstimation**(`id`, `anonymous?`): `Promise`\<\{ `accuracy`: `number` ; `size`: `number` ; `timeToCreateCensus`: `number`  }\>

Returns the estimation of size and time (in milliseconds) to create the census generated for the provided strategy

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `number` | `undefined` | The id of the strategy |
| `anonymous` | `boolean` | `false` | If the estimation should be done for anonymous census |

#### Returns

`Promise`\<\{ `accuracy`: `number` ; `size`: `number` ; `timeToCreateCensus`: `number`  }\>

The strategy estimation

#### Defined in

[census3.ts:233](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/census3.ts#L233)

___

### getStrategyHolders

▸ **getStrategyHolders**(`id`, `pagination?`): `Promise`\<[`StrategyHolders`](../modules.md#strategyholders)\>

Returns the strategy holders

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The id of the strategy |
| `pagination` | `Census3Pagination` | Pagination options |

#### Returns

`Promise`\<[`StrategyHolders`](../modules.md#strategyholders)\>

The list strategy holders

#### Defined in

[census3.ts:192](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/census3.ts#L192)

___

### getSupportedChains

▸ **getSupportedChains**(): `Promise`\<[`ICensus3SupportedChain`](../interfaces/ICensus3SupportedChain.md)[]\>

Returns a list of supported chain identifiers

#### Returns

`Promise`\<[`ICensus3SupportedChain`](../interfaces/ICensus3SupportedChain.md)[]\>

Supported chain list

#### Defined in

[census3.ts:76](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/census3.ts#L76)

___

### getSupportedOperators

▸ **getSupportedOperators**(): `Promise`\<[`ICensus3StrategiesOperator`](../interfaces/ICensus3StrategiesOperator.md)[]\>

Returns a list of supported strategies operators

#### Returns

`Promise`\<[`ICensus3StrategiesOperator`](../interfaces/ICensus3StrategiesOperator.md)[]\>

Supported strategies operators list

#### Defined in

[census3.ts:94](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/census3.ts#L94)

___

### getSupportedTokens

▸ **getSupportedTokens**(): `Promise`\<[`TokenSummary`](../modules.md#tokensummary)[]\>

Returns a list of summary tokens supported by the service

#### Returns

`Promise`\<[`TokenSummary`](../modules.md#tokensummary)[]\>

Token summary list

#### Defined in

[census3.ts:61](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/census3.ts#L61)

___

### getSupportedTypes

▸ **getSupportedTypes**(): `Promise`\<`string`[]\>

Returns a list of supported tokens type

#### Returns

`Promise`\<`string`[]\>

Supported tokens type list

#### Defined in

[census3.ts:85](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/census3.ts#L85)

___

### getToken

▸ **getToken**(`id`, `chainId`, `externalId?`): `Promise`\<[`Token`](../modules.md#token)\>

Returns the full token information based on the id (address)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id (address) of the token |
| `chainId` | `number` | The id of the chain |
| `externalId?` | `string` | The identifier used by external provider |

#### Returns

`Promise`\<[`Token`](../modules.md#token)\>

The token information

#### Defined in

[census3.ts:106](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/census3.ts#L106)

___

### importStrategy

▸ **importStrategy**(`cid`): `Promise`\<[`Census3Strategy`](../modules.md#census3strategy)\>

Imports a strategy from IPFS from the given cid.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cid` | `string` | The IPFS cid of the strategy to import |

#### Returns

`Promise`\<[`Census3Strategy`](../modules.md#census3strategy)\>

The strategy information

#### Defined in

[census3.ts:290](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/census3.ts#L290)

___

### isHolderInToken

▸ **isHolderInToken**(`tokenId`, `chainId`, `holderId`, `externalId?`): `Promise`\<`boolean`\>

Returns if the holder ID is already registered in the database as a holder of the token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `string` | The id (address) of the token |
| `chainId` | `number` | The id of the chain |
| `holderId` | `string` | The identifier of the holder |
| `externalId?` | `string` | The identifier used by external provider |

#### Returns

`Promise`\<`boolean`\>

If the holder is in the token

#### Defined in

[census3.ts:124](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/census3.ts#L124)

___

### tokenHolderBalance

▸ **tokenHolderBalance**(`tokenId`, `chainId`, `holderId`, `externalId?`): `Promise`\<`bigint`\>

Returns the balance of the holder based on the token and chain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `string` | The id (address) of the token |
| `chainId` | `number` | The id of the chain |
| `holderId` | `string` | The identifier of the holder |
| `externalId?` | `string` | The identifier used by external provider |

#### Returns

`Promise`\<`bigint`\>

The balance of the holder

#### Defined in

[census3.ts:145](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/census3.ts#L145)

___

### validatePredicate

▸ **validatePredicate**(`predicate`): `Promise`\<[`ICensus3ValidatePredicateResponse`](../interfaces/ICensus3ValidatePredicateResponse.md)\>

Validates a predicate

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | `string` | The predicate of the strategy |

#### Returns

`Promise`\<[`ICensus3ValidatePredicateResponse`](../interfaces/ICensus3ValidatePredicateResponse.md)\>

The parsed predicate

#### Defined in

[census3.ts:324](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/census3.ts#L324)
