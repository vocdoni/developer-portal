[@vocdoni/sdk](/sdk) / VoteAPI

# Class: VoteAPI

## Hierarchy

- [`API`](API)

  ↳ **`VoteAPI`**

## Table of contents

### Methods

- [info](VoteAPI#info)
- [list](VoteAPI#list)
- [submit](VoteAPI#submit)
- [verify](VoteAPI#verify)

## Methods

### info

▸ **info**(`url`, `voteId`): `Promise`\<[`VoteInfoResponse`](../sdk-reference#voteinforesponse)\>

Vote info

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `voteId` | `string` | The identifier of the vote |

#### Returns

`Promise`\<[`VoteInfoResponse`](../sdk-reference#voteinforesponse)\>

#### Defined in

[src/api/vote.ts:143](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/vote.ts#L143)

___

### list

▸ **list**(`url`, `params?`): `Promise`\<[`IVoteListResponse`](../interfaces/IVoteListResponse)\>

Fetches the vote list

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `params?` | `Partial`\<[`FetchVotesParametersWithPagination`](../sdk-reference#fetchvotesparameterswithpagination)\> | The parameters to filter the votes |

#### Returns

`Promise`\<[`IVoteListResponse`](../interfaces/IVoteListResponse)\>

#### Defined in

[src/api/vote.ts:156](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/vote.ts#L156)

___

### submit

▸ **submit**(`url`, `payload`): `Promise`\<[`IVoteSubmitResponse`](../interfaces/IVoteSubmitResponse)\>

Submits a payload representing the vote transaction to the chain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `payload` | `string` | The base64 encoded vote transaction |

#### Returns

`Promise`\<[`IVoteSubmitResponse`](../interfaces/IVoteSubmitResponse)\>

#### Defined in

[src/api/vote.ts:129](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/vote.ts#L129)

___

### verify

▸ **verify**(`url`, `electionId`, `voteId`): `Promise`\<`boolean`\>

Verify vote. A vote exists in a process.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `electionId` | `string` | The process identifier |
| `voteId` | `string` | The identifier of the vote |

#### Returns

`Promise`\<`boolean`\>

Return true if response has status 200

#### Defined in

[src/api/vote.ts:173](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/vote.ts#L173)
