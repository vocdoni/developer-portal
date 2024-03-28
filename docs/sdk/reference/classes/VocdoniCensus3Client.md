[@vocdoni/sdk](/sdk) / VocdoniCensus3Client

# Class: VocdoniCensus3Client

## Table of contents

### Constructors

- [constructor](VocdoniCensus3Client#constructor)

### Methods

- [createCensus](VocdoniCensus3Client#createcensus)
- [createStrategy](VocdoniCensus3Client#createstrategy)
- [createToken](VocdoniCensus3Client#createtoken)
- [createTokenCensus](VocdoniCensus3Client#createtokencensus)
- [getCensus](VocdoniCensus3Client#getcensus)
- [getCensuses](VocdoniCensus3Client#getcensuses)
- [getStrategies](VocdoniCensus3Client#getstrategies)
- [getStrategiesByToken](VocdoniCensus3Client#getstrategiesbytoken)
- [getStrategy](VocdoniCensus3Client#getstrategy)
- [getStrategyEstimation](VocdoniCensus3Client#getstrategyestimation)
- [getStrategyHolders](VocdoniCensus3Client#getstrategyholders)
- [getSupportedChains](VocdoniCensus3Client#getsupportedchains)
- [getSupportedOperators](VocdoniCensus3Client#getsupportedoperators)
- [getSupportedTokens](VocdoniCensus3Client#getsupportedtokens)
- [getSupportedTypes](VocdoniCensus3Client#getsupportedtypes)
- [getToken](VocdoniCensus3Client#gettoken)
- [importStrategy](VocdoniCensus3Client#importstrategy)
- [isHolderInToken](VocdoniCensus3Client#isholderintoken)
- [tokenHolderBalance](VocdoniCensus3Client#tokenholderbalance)
- [validatePredicate](VocdoniCensus3Client#validatepredicate)

### Properties

- [queueWait](VocdoniCensus3Client#queuewait)
- [url](VocdoniCensus3Client#url)

## Constructors

### constructor

• **new VocdoniCensus3Client**(`opts`): [`VocdoniCensus3Client`](VocdoniCensus3Client)

Instantiate new VocdoniCensus3 client.

To instantiate the client just pass the `ClientOptions` you want or use an empty object for the defaults.

`const client = new VocdoniCensus3Client({EnvOptions.PROD})`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | [`ClientOptions`](../sdk-reference#clientoptions) | optional arguments |

#### Returns

[`VocdoniCensus3Client`](VocdoniCensus3Client)

#### Defined in

[census3.ts:48](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/census3.ts#L48)

## Methods

### createCensus

▸ **createCensus**(`strategyId`, `anonymous?`): `Promise`\<[`ICensus3CensusResponse`](../interfaces/ICensus3CensusResponse)\>

Creates the census based on the given strategy

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `strategyId` | `number` | `undefined` | The id of the strategy |
| `anonymous` | `boolean` | `false` | If the census has to be anonymous |

#### Returns

`Promise`\<[`ICensus3CensusResponse`](../interfaces/ICensus3CensusResponse)\>

The census information

#### Defined in

[census3.ts:356](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/census3.ts#L356)

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

[census3.ts:273](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/census3.ts#L273)

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

[census3.ts:163](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/census3.ts#L163)

___

### createTokenCensus

▸ **createTokenCensus**(`address`, `chainId`, `anonymous?`, `externalId?`): `Promise`\<[`TokenCensus`](TokenCensus)\>

Returns the actual census based on the given token using the default strategy set

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `address` | `string` | `undefined` | The address of the token |
| `chainId` | `number` | `undefined` | The id of the chain |
| `anonymous` | `boolean` | `false` | If the census has to be anonymous |
| `externalId?` | `string` | `undefined` | The identifier used by external provider |

#### Returns

`Promise`\<[`TokenCensus`](TokenCensus)\>

The token census

#### Defined in

[census3.ts:393](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/census3.ts#L393)

___

### getCensus

▸ **getCensus**(`id`): `Promise`\<[`ICensus3CensusResponse`](../interfaces/ICensus3CensusResponse)\>

Returns the census3 census based on the given identifier

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The id of the census |

#### Returns

`Promise`\<[`ICensus3CensusResponse`](../interfaces/ICensus3CensusResponse)\>

The census3 census

#### Defined in

[census3.ts:344](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/census3.ts#L344)

___

### getCensuses

▸ **getCensuses**(`strategyId`): `Promise`\<[`ICensus3CensusResponse`](../interfaces/ICensus3CensusResponse)[]\>

Returns the census3 censuses

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `strategyId` | `number` | The strategy identifier |

#### Returns

`Promise`\<[`ICensus3CensusResponse`](../interfaces/ICensus3CensusResponse)[]\>

The list of census3 censuses

#### Defined in

[census3.ts:333](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/census3.ts#L333)

___

### getStrategies

▸ **getStrategies**(): `Promise`\<[`Census3Strategy`](../sdk-reference#census3strategy)[]\>

Returns the strategies

#### Returns

`Promise`\<[`Census3Strategy`](../sdk-reference#census3strategy)[]\>

The list of strategies

#### Defined in

[census3.ts:181](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/census3.ts#L181)

___

### getStrategiesByToken

▸ **getStrategiesByToken**(`id`, `chainId`, `externalId?`): `Promise`\<[`Census3Strategy`](../sdk-reference#census3strategy)[]\>

Returns the strategies from the given token

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id (address) of the token |
| `chainId` | `number` | The id of the chain |
| `externalId?` | `string` | The identifier used by external provider |

#### Returns

`Promise`\<[`Census3Strategy`](../sdk-reference#census3strategy)[]\>

The list of strategies

#### Defined in

[census3.ts:207](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/census3.ts#L207)

___

### getStrategy

▸ **getStrategy**(`id`): `Promise`\<[`Census3Strategy`](../sdk-reference#census3strategy)\>

Returns the information of the strategy based on the id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The id of the strategy |

#### Returns

`Promise`\<[`Census3Strategy`](../sdk-reference#census3strategy)\>

The strategy information

#### Defined in

[census3.ts:219](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/census3.ts#L219)

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

[census3.ts:231](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/census3.ts#L231)

___

### getStrategyHolders

▸ **getStrategyHolders**(`id`, `pagination?`): `Promise`\<[`StrategyHolders`](../sdk-reference#strategyholders)\>

Returns the strategy holders

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The id of the strategy |
| `pagination` | `Census3Pagination` | Pagination options |

#### Returns

`Promise`\<[`StrategyHolders`](../sdk-reference#strategyholders)\>

The list strategy holders

#### Defined in

[census3.ts:192](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/census3.ts#L192)

___

### getSupportedChains

▸ **getSupportedChains**(): `Promise`\<[`ICensus3SupportedChain`](../interfaces/ICensus3SupportedChain)[]\>

Returns a list of supported chain identifiers

#### Returns

`Promise`\<[`ICensus3SupportedChain`](../interfaces/ICensus3SupportedChain)[]\>

Supported chain list

#### Defined in

[census3.ts:76](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/census3.ts#L76)

___

### getSupportedOperators

▸ **getSupportedOperators**(): `Promise`\<[`ICensus3StrategiesOperator`](../interfaces/ICensus3StrategiesOperator)[]\>

Returns a list of supported strategies operators

#### Returns

`Promise`\<[`ICensus3StrategiesOperator`](../interfaces/ICensus3StrategiesOperator)[]\>

Supported strategies operators list

#### Defined in

[census3.ts:94](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/census3.ts#L94)

___

### getSupportedTokens

▸ **getSupportedTokens**(): `Promise`\<[`TokenSummary`](../sdk-reference#tokensummary)[]\>

Returns a list of summary tokens supported by the service

#### Returns

`Promise`\<[`TokenSummary`](../sdk-reference#tokensummary)[]\>

Token summary list

#### Defined in

[census3.ts:61](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/census3.ts#L61)

___

### getSupportedTypes

▸ **getSupportedTypes**(): `Promise`\<`string`[]\>

Returns a list of supported tokens type

#### Returns

`Promise`\<`string`[]\>

Supported tokens type list

#### Defined in

[census3.ts:85](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/census3.ts#L85)

___

### getToken

▸ **getToken**(`id`, `chainId`, `externalId?`): `Promise`\<[`Token`](../sdk-reference#token)\>

Returns the full token information based on the id (address)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id (address) of the token |
| `chainId` | `number` | The id of the chain |
| `externalId?` | `string` | The identifier used by external provider |

#### Returns

`Promise`\<[`Token`](../sdk-reference#token)\>

The token information

#### Defined in

[census3.ts:106](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/census3.ts#L106)

___

### importStrategy

▸ **importStrategy**(`cid`): `Promise`\<[`Census3Strategy`](../sdk-reference#census3strategy)\>

Imports a strategy from IPFS from the given cid.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cid` | `string` | The IPFS cid of the strategy to import |

#### Returns

`Promise`\<[`Census3Strategy`](../sdk-reference#census3strategy)\>

The strategy information

#### Defined in

[census3.ts:288](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/census3.ts#L288)

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

[census3.ts:124](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/census3.ts#L124)

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

[census3.ts:145](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/census3.ts#L145)

___

### validatePredicate

▸ **validatePredicate**(`predicate`): `Promise`\<[`ICensus3ValidatePredicateResponse`](../interfaces/ICensus3ValidatePredicateResponse)\>

Validates a predicate

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | `string` | The predicate of the strategy |

#### Returns

`Promise`\<[`ICensus3ValidatePredicateResponse`](../interfaces/ICensus3ValidatePredicateResponse)\>

The parsed predicate

#### Defined in

[census3.ts:322](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/census3.ts#L322)

## Properties

### queueWait

• **queueWait**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attempts` | `number` |
| `retryTime` | `number` |

#### Defined in

[census3.ts:37](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/census3.ts#L37)

___

### url

• **url**: `string`

#### Defined in

[census3.ts:36](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/census3.ts#L36)
