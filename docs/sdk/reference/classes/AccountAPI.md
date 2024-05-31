[@vocdoni/sdk](/sdk) / AccountAPI

# Class: AccountAPI

## Hierarchy

- `API`

  ↳ **`AccountAPI`**

## Table of contents

### Methods

- [count](AccountAPI#count)
- [electionsList](AccountAPI#electionslist)
- [fees](AccountAPI#fees)
- [info](AccountAPI#info)
- [list](AccountAPI#list)
- [metadata](AccountAPI#metadata)
- [setInfo](AccountAPI#setinfo)
- [transfersCount](AccountAPI#transferscount)
- [transfersList](AccountAPI#transferslist)

## Methods

### count

▸ **count**(`url`): `Promise`\<[`IAccountsCountResponse`](../interfaces/IAccountsCountResponse)\>

Returns the number of accounts

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |

#### Returns

`Promise`\<[`IAccountsCountResponse`](../interfaces/IAccountsCountResponse)\>

#### Defined in

[api/account.ts:133](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/account.ts#L133)

___

### electionsList

▸ **electionsList**(`url`, `accountId`, `page?`): `Promise`\<[`IElectionListResponse`](../interfaces/IElectionListResponse)\>

Returns paginated list of elections for a specific account

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | API endpoint URL |
| `accountId` | `string` | `undefined` | accountId to get elections |
| `page` | `number` | `0` | The page number |

#### Returns

`Promise`\<[`IElectionListResponse`](../interfaces/IElectionListResponse)\>

#### Defined in

[api/account.ts:214](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/account.ts#L214)

___

### fees

▸ **fees**(`url`, `account`, `page?`): `Promise`\<[`IChainFeesListResponse`](../interfaces/IChainFeesListResponse)\>

Returns the list of fees by account

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | {string} url API endpoint URL |
| `account` | `string` | `undefined` | {string} account The account |
| `page` | `number` | `0` | {number} page The page number |

#### Returns

`Promise`\<[`IChainFeesListResponse`](../interfaces/IChainFeesListResponse)\>

#### Defined in

[api/account.ts:228](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/account.ts#L228)

___

### info

▸ **info**(`url`, `accountId`): `Promise`\<`IAccountInfoResponse`\>

Fetches an Account information

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `accountId` | `string` | The account we want the info from |

#### Returns

`Promise`\<`IAccountInfoResponse`\>

#### Defined in

[api/account.ts:146](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/account.ts#L146)

___

### list

▸ **list**(`url`, `page?`): `Promise`\<[`IAccountsListResponse`](../interfaces/IAccountsListResponse)\>

Returns paginated list of accounts

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | API endpoint URL |
| `page` | `number` | `0` | The page number |

#### Returns

`Promise`\<[`IAccountsListResponse`](../interfaces/IAccountsListResponse)\>

#### Defined in

[api/account.ts:121](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/account.ts#L121)

___

### metadata

▸ **metadata**(`url`, `accountId`): `Promise`\<[`AccountMetadata`](../interfaces/AccountMetadata)\>

Fetches the account metadata

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `accountId` | `string` | The account we want the info from |

#### Returns

`Promise`\<[`AccountMetadata`](../interfaces/AccountMetadata)\>

#### Defined in

[api/account.ts:159](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/account.ts#L159)

___

### setInfo

▸ **setInfo**(`url`, `payload`, `metadata`): `Promise`\<`IAccountSetInfoResponse`\>

Sets Account information

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `payload` | `string` | The set information info raw payload to be submitted to the chain |
| `metadata` | `string` | The base64 encoded metadata JSON object |

#### Returns

`Promise`\<`IAccountSetInfoResponse`\>

#### Defined in

[api/account.ts:173](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/account.ts#L173)

___

### transfersCount

▸ **transfersCount**(`url`, `accountId`): `Promise`\<[`IAccountTransfersCountResponse`](../interfaces/IAccountTransfersCountResponse)\>

Returns the account's transfers count

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `accountId` | `string` | accountId to get the transfers count |

#### Returns

`Promise`\<[`IAccountTransfersCountResponse`](../interfaces/IAccountTransfersCountResponse)\>

#### Defined in

[api/account.ts:200](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/account.ts#L200)

___

### transfersList

▸ **transfersList**(`url`, `accountId`, `page?`): `Promise`\<`IAccountTransfersResponse`\>

Returns paginated list of transfers for a specific account

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | API endpoint URL |
| `accountId` | `string` | `undefined` | accountId to get transfers |
| `page` | `number` | `0` | The page number |

#### Returns

`Promise`\<`IAccountTransfersResponse`\>

#### Defined in

[api/account.ts:187](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/account.ts#L187)
