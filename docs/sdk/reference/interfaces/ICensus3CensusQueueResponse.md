[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / ICensus3CensusQueueResponse

# Interface: ICensus3CensusQueueResponse

## Table of contents

### Properties

- [census](ICensus3CensusQueueResponse.md#census)
- [done](ICensus3CensusQueueResponse.md#done)
- [error](ICensus3CensusQueueResponse.md#error)

## Properties

### census

• **census**: [`ICensus3CensusResponse`](ICensus3CensusResponse.md)

The census

#### Defined in

[api/census3/census.ts:84](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/census.ts#L84)

___

### done

• **done**: `boolean`

If the queue has been done

#### Defined in

[api/census3/census.ts:64](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/census.ts#L64)

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

[api/census3/census.ts:69](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/census.ts#L69)
