[@vocdoni/sdk](/sdk) / ICensus3CensusQueueResponse

# Interface: ICensus3CensusQueueResponse

## Table of contents

### Properties

- [data](ICensus3CensusQueueResponse#data)
- [done](ICensus3CensusQueueResponse#done)
- [error](ICensus3CensusQueueResponse#error)
- [progress](ICensus3CensusQueueResponse#progress)

## Properties

### data

• **data**: [`ICensus3CensusResponse`](ICensus3CensusResponse)

The census data

#### Defined in

[src/api/census3/census.ts:84](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/census3/census.ts#L84)

___

### done

• **done**: `boolean`

If the queue has been done

#### Defined in

[src/api/census3/census.ts:64](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/census3/census.ts#L64)

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

[src/api/census3/census.ts:69](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/census3/census.ts#L69)

___

### progress

• **progress**: `number`

The creation progress

#### Defined in

[src/api/census3/census.ts:89](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/census3/census.ts#L89)
