[@vocdoni/sdk](/sdk) / ElectionAPI

# Class: ElectionAPI

## Hierarchy

- [`API`](API)

  ↳ **`ElectionAPI`**

## Table of contents

### Methods

- [create](ElectionAPI#create)
- [info](ElectionAPI#info)
- [keys](ElectionAPI#keys)
- [list](ElectionAPI#list)
- [nextElectionId](ElectionAPI#nextelectionid)
- [price](ElectionAPI#price)

## Methods

### create

▸ **create**(`url`, `payload`, `metadata`): `Promise`\<[`IElectionCreateResponse`](../interfaces/IElectionCreateResponse)\>

Creates a new election.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `payload` | `string` | The set information info raw payload to be submitted to the chain |
| `metadata` | `string` | The base64 encoded metadata JSON object |

#### Returns

`Promise`\<[`IElectionCreateResponse`](../interfaces/IElectionCreateResponse)\>

#### Defined in

[src/api/election.ts:372](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/election.ts#L372)

___

### info

▸ **info**(`url`, `electionId`): `Promise`\<[`IElectionInfoResponse`](../interfaces/IElectionInfoResponse)\>

Fetches info about the specified process.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `electionId` | `string` | The identifier of the election |

#### Returns

`Promise`\<[`IElectionInfoResponse`](../interfaces/IElectionInfoResponse)\>

#### Defined in

[src/api/election.ts:345](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/election.ts#L345)

___

### keys

▸ **keys**(`url`, `electionId`): `Promise`\<[`IElectionKeysResponse`](../interfaces/IElectionKeysResponse)\>

Fetches the encryption keys from the specified process.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `electionId` | `string` | The identifier of the election |

#### Returns

`Promise`\<[`IElectionKeysResponse`](../interfaces/IElectionKeysResponse)\>

#### Defined in

[src/api/election.ts:358](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/election.ts#L358)

___

### list

▸ **list**(`url`, `params?`): `Promise`\<[`IElectionListResponse`](../interfaces/IElectionListResponse)\>

Return list of all elections in the chain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `params?` | `Partial`\<[`FetchElectionsParametersWithPagination`](../sdk-reference#fetchelectionsparameterswithpagination)\> | The parameters to filter the elections |

#### Returns

`Promise`\<[`IElectionListResponse`](../interfaces/IElectionListResponse)\>

#### Defined in

[src/api/election.ts:412](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/election.ts#L412)

___

### nextElectionId

▸ **nextElectionId**(`url`, `organizationId`, `censusOrigin`, `delta?`, `envelopeType?`): `Promise`\<[`IElectionNextIdResponse`](../interfaces/IElectionNextIdResponse)\>

Returns the next election id.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | API endpoint URL |
| `organizationId` | `string` | `undefined` | The identifier of the organization |
| `censusOrigin` | `number` | `undefined` | The census origin |
| `delta` | `number` | `0` | The stride to next election id, being 0 the next one |
| `envelopeType?` | `Partial`\<[`IVoteMode`](../interfaces/IVoteMode)\> | `undefined` | The envelope type |

#### Returns

`Promise`\<[`IElectionNextIdResponse`](../interfaces/IElectionNextIdResponse)\>

#### Defined in

[src/api/election.ts:388](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/election.ts#L388)

___

### price

▸ **price**(`url`, `maxCensusSize`, `electionDuration`, `encryptedVotes`, `anonymousVotes`, `maxVoteOverwrite`): `Promise`\<`IElectionCalculatePriceResponse`\>

Calculates the election price.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `maxCensusSize` | `number` |  |
| `electionDuration` | `number` |  |
| `encryptedVotes` | `boolean` |  |
| `anonymousVotes` | `boolean` |  |
| `maxVoteOverwrite` | `number` |  |

#### Returns

`Promise`\<`IElectionCalculatePriceResponse`\>

#### Defined in

[src/api/election.ts:433](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/election.ts#L433)
