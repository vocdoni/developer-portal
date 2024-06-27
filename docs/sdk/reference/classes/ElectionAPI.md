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

[api/election.ts:410](https://github.com/vocdoni/vocdoni-sdk/blob/2a0ec87982785c655be456e64cc5f20055ff5da5/src/api/election.ts#L410)

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

[api/election.ts:480](https://github.com/vocdoni/vocdoni-sdk/blob/2a0ec87982785c655be456e64cc5f20055ff5da5/src/api/election.ts#L480)

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

[api/election.ts:383](https://github.com/vocdoni/vocdoni-sdk/blob/2a0ec87982785c655be456e64cc5f20055ff5da5/src/api/election.ts#L383)

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

[api/election.ts:396](https://github.com/vocdoni/vocdoni-sdk/blob/2a0ec87982785c655be456e64cc5f20055ff5da5/src/api/election.ts#L396)

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

[api/election.ts:426](https://github.com/vocdoni/vocdoni-sdk/blob/2a0ec87982785c655be456e64cc5f20055ff5da5/src/api/election.ts#L426)

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

[api/election.ts:512](https://github.com/vocdoni/vocdoni-sdk/blob/2a0ec87982785c655be456e64cc5f20055ff5da5/src/api/election.ts#L512)

___

### votesCount

▸ **votesCount**(`url`, `electionId`): `Promise`\<[`IElectionVotesCountResponse`](../interfaces/IElectionVotesCountResponse)\>

Returns the number of votes of a given election

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `electionId` | `string` | The identifier of the election |

#### Returns

`Promise`\<[`IElectionVotesCountResponse`](../interfaces/IElectionVotesCountResponse)\>

#### Defined in

[api/election.ts:450](https://github.com/vocdoni/vocdoni-sdk/blob/2a0ec87982785c655be456e64cc5f20055ff5da5/src/api/election.ts#L450)

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

[api/election.ts:464](https://github.com/vocdoni/vocdoni-sdk/blob/2a0ec87982785c655be456e64cc5f20055ff5da5/src/api/election.ts#L464)
