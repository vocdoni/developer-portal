[@vocdoni/sdk](/sdk) / ICensus3StrategyEstimationQueueResponse

# Interface: ICensus3StrategyEstimationQueueResponse

## Table of contents

### Properties

- [data](ICensus3StrategyEstimationQueueResponse#data)
- [done](ICensus3StrategyEstimationQueueResponse#done)
- [error](ICensus3StrategyEstimationQueueResponse#error)
- [progress](ICensus3StrategyEstimationQueueResponse#progress)

## Properties

### data

• **data**: `Object`

The estimation data of the strategy

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `accuracy` | `number` | The accuracy for an anonymous census |
| `size` | `number` | The estimation of the size |
| `timeToCreateCensus` | `number` | The estimation of the time to create the census |

#### Defined in

[api/census3/strategy.ts:131](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/census3/strategy.ts#L131)

___

### done

• **done**: `boolean`

If the queue has been done

#### Defined in

[api/census3/strategy.ts:111](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/census3/strategy.ts#L111)

___

### error

• **error**: `Object`

The error of the queue

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `number` | The code of the error |
| `error` | `string` | The string of the error |

#### Defined in

[api/census3/strategy.ts:116](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/census3/strategy.ts#L116)

___

### progress

• **progress**: `number`

The estimation progress

#### Defined in

[api/census3/strategy.ts:151](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/census3/strategy.ts#L151)
