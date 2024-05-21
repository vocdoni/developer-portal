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

[api/census3/census.ts:84](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/api/census3/census.ts#L84)

___

### done

• **done**: `boolean`

If the queue has been done

#### Defined in

[api/census3/census.ts:64](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/api/census3/census.ts#L64)

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

[api/census3/census.ts:69](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/api/census3/census.ts#L69)

___

### progress

• **progress**: `number`

The creation progress

#### Defined in

[api/census3/census.ts:89](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/api/census3/census.ts#L89)
