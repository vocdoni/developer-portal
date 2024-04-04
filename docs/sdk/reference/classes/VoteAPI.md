[@vocdoni/sdk](/sdk) / VoteAPI

# Class: VoteAPI

## Hierarchy

- `API`

  ↳ **`VoteAPI`**

## Table of contents

### Methods

- [info](VoteAPI#info)
- [submit](VoteAPI#submit)
- [verify](VoteAPI#verify)

## Methods

### info

▸ **info**(`url`, `voteId`): `Promise`\<[`IVoteInfoResponse`](../interfaces/IVoteInfoResponse)\>

Vote info

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `voteId` | `string` | The identifier of the vote |

#### Returns

`Promise`\<[`IVoteInfoResponse`](../interfaces/IVoteInfoResponse)\>

#### Defined in

[api/vote.ts:103](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/api/vote.ts#L103)

___

### submit

▸ **submit**(`url`, `payload`): `Promise`\<[`IVoteSubmitResponse`](../interfaces/IVoteSubmitResponse)\>

Voting

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `payload` | `string` | The base64 encoded vote transaction |

#### Returns

`Promise`\<[`IVoteSubmitResponse`](../interfaces/IVoteSubmitResponse)\>

#### Defined in

[api/vote.ts:89](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/api/vote.ts#L89)

___

### verify

▸ **verify**(`url`, `processId`, `voteId`): `Promise`\<`boolean`\>

Verify vote. A vote exists in a process.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `processId` | `string` | The process identifier |
| `voteId` | `string` | The identifier of the vote |

#### Returns

`Promise`\<`boolean`\>

Return true if response has status 200

#### Defined in

[api/vote.ts:119](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/api/vote.ts#L119)
