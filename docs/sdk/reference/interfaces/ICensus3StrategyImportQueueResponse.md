[@vocdoni/sdk](/sdk) / ICensus3StrategyImportQueueResponse

# Interface: ICensus3StrategyImportQueueResponse

## Table of contents

### Properties

- [data](ICensus3StrategyImportQueueResponse#data)
- [done](ICensus3StrategyImportQueueResponse#done)
- [error](ICensus3StrategyImportQueueResponse#error)
- [progress](ICensus3StrategyImportQueueResponse#progress)

## Properties

### data

• **data**: [`Census3Strategy`](../sdk-reference#census3strategy)

The imported data strategy

#### Defined in

[api/census3/strategy.ts:178](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/census3/strategy.ts#L178)

___

### done

• **done**: `boolean`

If the queue has been done

#### Defined in

[api/census3/strategy.ts:158](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/census3/strategy.ts#L158)

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

[api/census3/strategy.ts:163](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/census3/strategy.ts#L163)

___

### progress

• **progress**: `number`

The importing progress

#### Defined in

[api/census3/strategy.ts:183](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/census3/strategy.ts#L183)
