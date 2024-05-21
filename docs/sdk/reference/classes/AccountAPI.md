[@vocdoni/sdk](/sdk) / AccountAPI

# Class: AccountAPI

## Hierarchy

- `API`

  ↳ **`AccountAPI`**

## Table of contents

### Methods

- [count](AccountAPI#count)
- [electionsList](AccountAPI#electionslist)
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

[api/account.ts:131](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/account.ts#L131)

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

[api/account.ts:212](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/account.ts#L212)

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

[api/account.ts:144](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/account.ts#L144)

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

[api/account.ts:119](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/account.ts#L119)

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

[api/account.ts:157](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/account.ts#L157)

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

[api/account.ts:171](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/account.ts#L171)

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

[api/account.ts:198](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/account.ts#L198)

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

[api/account.ts:185](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/account.ts#L185)
