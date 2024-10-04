[@vocdoni/sdk](/sdk) / ICensus3StrategyHoldersQueueResponse

# Interface: ICensus3StrategyHoldersQueueResponse

## Table of contents

### Properties

- [data](ICensus3StrategyHoldersQueueResponse#data)
- [done](ICensus3StrategyHoldersQueueResponse#done)
- [error](ICensus3StrategyHoldersQueueResponse#error)
- [progress](ICensus3StrategyHoldersQueueResponse#progress)

## Properties

### data

• **data**: `Object`

The list of the strategy holders

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/api/census3/strategy.ts:197](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/api/census3/strategy.ts#L197)

___

### done

• **done**: `boolean`

If the queue has been done

#### Defined in

[src/api/census3/strategy.ts:177](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/api/census3/strategy.ts#L177)

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

[src/api/census3/strategy.ts:182](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/api/census3/strategy.ts#L182)

___

### progress

• **progress**: `number`

The importing progress

#### Defined in

[src/api/census3/strategy.ts:202](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/api/census3/strategy.ts#L202)
