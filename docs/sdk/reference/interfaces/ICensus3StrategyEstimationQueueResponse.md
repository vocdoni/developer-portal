[@vocdoni/sdk](/sdk) / [Exports](../modules) / ICensus3StrategyEstimationQueueResponse

# Interface: ICensus3StrategyEstimationQueueResponse

## Table of contents

### Properties

- [done](ICensus3StrategyEstimationQueueResponse#done)
- [error](ICensus3StrategyEstimationQueueResponse#error)
- [estimation](ICensus3StrategyEstimationQueueResponse#estimation)

## Properties

### done

• **done**: `boolean`

If the queue has been done

#### Defined in

[api/census3/strategy.ts:106](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/census3/strategy.ts#L106)

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

[api/census3/strategy.ts:111](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/census3/strategy.ts#L111)

___

### estimation

• **estimation**: `Object`

The estimation of the strategy

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `accuracy` | `number` | The accuracy for an anonymous census |
| `size` | `number` | The estimation of the size |
| `timeToCreateCensus` | `number` | The estimation of the time to create the census |

#### Defined in

[api/census3/strategy.ts:126](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/census3/strategy.ts#L126)
