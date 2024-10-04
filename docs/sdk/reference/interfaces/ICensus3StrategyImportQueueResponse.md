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

[src/api/census3/strategy.ts:165](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/api/census3/strategy.ts#L165)

___

### done

• **done**: `boolean`

If the queue has been done

#### Defined in

[src/api/census3/strategy.ts:145](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/api/census3/strategy.ts#L145)

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

[src/api/census3/strategy.ts:150](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/api/census3/strategy.ts#L150)

___

### progress

• **progress**: `number`

The importing progress

#### Defined in

[src/api/census3/strategy.ts:170](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/api/census3/strategy.ts#L170)
