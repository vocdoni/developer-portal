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

[api/vote.ts:127](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/api/vote.ts#L127)

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

[api/vote.ts:113](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/api/vote.ts#L113)

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

[api/vote.ts:143](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/api/vote.ts#L143)
