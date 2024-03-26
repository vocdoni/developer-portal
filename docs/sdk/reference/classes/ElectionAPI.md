[@vocdoni/sdk](/sdk) / [Exports](../modules) / ElectionAPI

# Class: ElectionAPI

## Hierarchy

- `API`

  ↳ **`ElectionAPI`**

## Table of contents

### Constructors

- [constructor](ElectionAPI#constructor)

### Methods

- [create](ElectionAPI#create)
- [electionsList](ElectionAPI#electionslist)
- [info](ElectionAPI#info)
- [isApiError](ElectionAPI#isapierror)
- [isUndefinedError](ElectionAPI#isundefinederror)
- [keys](ElectionAPI#keys)
- [nextElectionId](ElectionAPI#nextelectionid)
- [price](ElectionAPI#price)
- [votesCount](ElectionAPI#votescount)
- [votesList](ElectionAPI#voteslist)

## Constructors

### constructor

• **new ElectionAPI**(): [`ElectionAPI`](ElectionAPI)

Cannot be constructed.

#### Returns

[`ElectionAPI`](ElectionAPI)

#### Overrides

API.constructor

#### Defined in

[api/election.ts:373](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/election.ts#L373)

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

[api/election.ts:413](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/election.ts#L413)

___

### electionsList

▸ **electionsList**(`url`, `page?`, `«destructured»?`): `Promise`\<[`IElectionListResponse`](../interfaces/IElectionListResponse)\>

Return list of all elections in the chain

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | API endpoint URL |
| `page` | `number` | `0` | The page number |
| `«destructured»` | [`IElectionListFilter`](../interfaces/IElectionListFilter) | `{}` | - |

#### Returns

`Promise`\<[`IElectionListResponse`](../interfaces/IElectionListResponse)\>

#### Defined in

[api/election.ts:487](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/election.ts#L487)

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

[api/election.ts:384](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/election.ts#L384)

___

### isApiError

▸ **isApiError**(`error`): `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `AxiosError`\<`unknown`, `any`\> |

#### Returns

`never`

#### Inherited from

API.isApiError

#### Defined in

[api/api.ts:21](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/api.ts#L21)

___

### isUndefinedError

▸ **isUndefinedError**(`error`, `message?`): `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `AxiosError`\<`unknown`, `any`\> |
| `message?` | `string` |

#### Returns

`never`

#### Inherited from

API.isUndefinedError

#### Defined in

[api/api.ts:64](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/api.ts#L64)

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

[api/election.ts:398](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/election.ts#L398)

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

[api/election.ts:429](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/election.ts#L429)

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

[api/election.ts:520](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/election.ts#L520)

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

[api/election.ts:452](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/election.ts#L452)

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

[api/election.ts:467](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/election.ts#L467)
