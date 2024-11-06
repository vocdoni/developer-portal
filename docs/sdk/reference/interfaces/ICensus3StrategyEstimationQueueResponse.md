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

[src/api/census3/strategy.ts:118](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/census3/strategy.ts#L118)

___

### done

• **done**: `boolean`

If the queue has been done

#### Defined in

[src/api/census3/strategy.ts:98](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/census3/strategy.ts#L98)

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

[src/api/census3/strategy.ts:103](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/census3/strategy.ts#L103)

___

### progress

• **progress**: `number`

The estimation progress

#### Defined in

[src/api/census3/strategy.ts:138](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/census3/strategy.ts#L138)
