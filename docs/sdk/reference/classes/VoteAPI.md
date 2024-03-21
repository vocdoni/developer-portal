[@vocdoni/sdk](/sdk) / [Exports](../modules) / VoteAPI

# Class: VoteAPI

## Hierarchy

- `API`

  ↳ **`VoteAPI`**

## Table of contents

### Constructors

- [constructor](VoteAPI#constructor)

### Methods

- [info](VoteAPI#info)
- [isApiError](VoteAPI#isapierror)
- [isUndefinedError](VoteAPI#isundefinederror)
- [submit](VoteAPI#submit)
- [verify](VoteAPI#verify)

## Constructors

### constructor

• **new VoteAPI**(): [`VoteAPI`](VoteAPI)

Cannot be constructed.

#### Returns

[`VoteAPI`](VoteAPI)

#### Overrides

API.constructor

#### Defined in

[api/vote.ts:78](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/vote.ts#L78)

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

[api/vote.ts:105](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/vote.ts#L105)

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

[api/api.ts:21](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/api.ts#L21)

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

[api/api.ts:64](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/api.ts#L64)

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

[api/vote.ts:90](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/vote.ts#L90)

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

[api/vote.ts:121](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/vote.ts#L121)
