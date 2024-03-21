[@vocdoni/sdk](/sdk) / [Exports](../modules) / ICensus3CensusQueueResponse

# Interface: ICensus3CensusQueueResponse

## Table of contents

### Properties

- [census](ICensus3CensusQueueResponse#census)
- [done](ICensus3CensusQueueResponse#done)
- [error](ICensus3CensusQueueResponse#error)

## Properties

### census

• **census**: [`ICensus3CensusResponse`](ICensus3CensusResponse)

The census

#### Defined in

[api/census3/census.ts:84](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/census3/census.ts#L84)

___

### done

• **done**: `boolean`

If the queue has been done

#### Defined in

[api/census3/census.ts:64](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/census3/census.ts#L64)

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

[api/census3/census.ts:69](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/census3/census.ts#L69)
