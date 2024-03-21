[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / ICensus3StrategyImportQueueResponse

# Interface: ICensus3StrategyImportQueueResponse

## Table of contents

### Properties

- [done](ICensus3StrategyImportQueueResponse.md#done)
- [error](ICensus3StrategyImportQueueResponse.md#error)
- [strategy](ICensus3StrategyImportQueueResponse.md#strategy)

## Properties

### done

• **done**: `boolean`

If the queue has been done

#### Defined in

[api/census3/strategy.ts:148](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/census3/strategy.ts#L148)

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

[api/census3/strategy.ts:153](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/census3/strategy.ts#L153)

___

### strategy

• **strategy**: [`Census3Strategy`](../modules.md#census3strategy)

The imported strategy

#### Defined in

[api/census3/strategy.ts:168](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/census3/strategy.ts#L168)
