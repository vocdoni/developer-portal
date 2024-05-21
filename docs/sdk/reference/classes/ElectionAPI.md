[@vocdoni/sdk](/sdk) / ElectionAPI

# Class: ElectionAPI

## Hierarchy

- `API`

  ↳ **`ElectionAPI`**

## Table of contents

### Methods

- [create](ElectionAPI#create)
- [electionsList](ElectionAPI#electionslist)
- [info](ElectionAPI#info)
- [keys](ElectionAPI#keys)
- [nextElectionId](ElectionAPI#nextelectionid)
- [price](ElectionAPI#price)
- [votesCount](ElectionAPI#votescount)
- [votesList](ElectionAPI#voteslist)

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

[api/election.ts:410](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/api/election.ts#L410)

___

### electionsList

▸ **electionsList**(`url`, `page?`, `filter?`): `Promise`\<[`IElectionListResponse`](../interfaces/IElectionListResponse)\>

Return list of all elections in the chain

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | API endpoint URL |
| `page` | `number` | `0` | The page number |
| `filter` | [`IElectionListFilter`](../interfaces/IElectionListFilter) | `{}` | Search by organizationId, electionId, withResults, and status |

#### Returns

`Promise`\<[`IElectionListResponse`](../interfaces/IElectionListResponse)\>

#### Defined in

[api/election.ts:477](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/api/election.ts#L477)

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

[api/election.ts:383](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/api/election.ts#L383)

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

[api/election.ts:396](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/api/election.ts#L396)

___

### nextElectionId

▸ **nextElectionId**(`url`, `organizationId`, `censusOrigin`, `envelopeType?`): `Promise`\<[`IElectionNextIdResponse`](../interfaces/IElectionNextIdResponse)\>

Returns the next election id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `organizationId` | `string` | The identifier of the organization |
| `censusOrigin` | `number` | The census origin |
| `envelopeType?` | `Partial`\<[`IVoteMode`](../interfaces/IVoteMode)\> | The envelope type |

#### Returns

`Promise`\<[`IElectionNextIdResponse`](../interfaces/IElectionNextIdResponse)\>

#### Defined in

[api/election.ts:425](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/api/election.ts#L425)

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

[api/election.ts:509](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/api/election.ts#L509)

___

### votesCount

▸ **votesCount**(`url`, `electionId`): `Promise`\<`IElectionVotesCountResponse`\>

Returns the number of votes of a given election

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `electionId` | `string` | The identifier of the election |

#### Returns

`Promise`\<`IElectionVotesCountResponse`\>

#### Defined in

[api/election.ts:447](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/api/election.ts#L447)

___

### votesList

▸ **votesList**(`url`, `electionId`, `page?`): `Promise`\<[`IElectionVoteListResponse`](../interfaces/IElectionVoteListResponse)\>

Returns the list of votes for a given election

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | API endpoint URL |
| `electionId` | `string` | `undefined` | The identifier of the election |
| `page` | `number` | `0` | The page number |

#### Returns

`Promise`\<[`IElectionVoteListResponse`](../interfaces/IElectionVoteListResponse)\>

#### Defined in

[api/election.ts:461](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/api/election.ts#L461)
