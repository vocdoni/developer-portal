[@vocdoni/sdk](/sdk) / AccountAPI

# Class: AccountAPI

## Hierarchy

- [`API`](API)

  ↳ **`AccountAPI`**

## Table of contents

### Methods

- [info](AccountAPI#info)
- [list](AccountAPI#list)
- [metadata](AccountAPI#metadata)
- [setInfo](AccountAPI#setinfo)

## Methods

### info

▸ **info**(`url`, `accountId`): `Promise`\<[`IAccountInfoResponse`](../interfaces/IAccountInfoResponse)\>

Fetches an Account information

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `accountId` | `string` | The account we want the info from |

#### Returns

`Promise`\<[`IAccountInfoResponse`](../interfaces/IAccountInfoResponse)\>

#### Defined in

[src/api/account.ts:114](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/account.ts#L114)

___

### list

▸ **list**(`url`, `params?`): `Promise`\<[`IAccountsListResponse`](../interfaces/IAccountsListResponse)\>

Returns list of accounts

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `params?` | `Partial`\<[`FetchAccountsParametersWithPagination`](../sdk-reference#fetchaccountsparameterswithpagination)\> | The parameters to filter the accounts |

#### Returns

`Promise`\<[`IAccountsListResponse`](../interfaces/IAccountsListResponse)\>

#### Defined in

[src/api/account.ts:97](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/account.ts#L97)

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

[src/api/account.ts:127](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/account.ts#L127)

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

[src/api/account.ts:141](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/account.ts#L141)
