[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / AccountAPI

# Class: AccountAPI

## Hierarchy

- `API`

  ↳ **`AccountAPI`**

## Table of contents

### Constructors

- [constructor](AccountAPI.md#constructor)

### Methods

- [count](AccountAPI.md#count)
- [electionsList](AccountAPI.md#electionslist)
- [info](AccountAPI.md#info)
- [isApiError](AccountAPI.md#isapierror)
- [isUndefinedError](AccountAPI.md#isundefinederror)
- [list](AccountAPI.md#list)
- [metadata](AccountAPI.md#metadata)
- [setInfo](AccountAPI.md#setinfo)
- [transfersCount](AccountAPI.md#transferscount)
- [transfersList](AccountAPI.md#transferslist)

## Constructors

### constructor

• **new AccountAPI**(): [`AccountAPI`](AccountAPI.md)

Cannot be constructed.

#### Returns

[`AccountAPI`](AccountAPI.md)

#### Overrides

API.constructor

#### Defined in

[api/account.ts:109](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/account.ts#L109)

## Methods

### count

▸ **count**(`url`): `Promise`\<[`IAccountsCountResponse`](../interfaces/IAccountsCountResponse.md)\>

Returns the number of accounts

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |

#### Returns

`Promise`\<[`IAccountsCountResponse`](../interfaces/IAccountsCountResponse.md)\>

#### Defined in

[api/account.ts:133](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/account.ts#L133)

___

### electionsList

▸ **electionsList**(`url`, `accountId`, `page?`): `Promise`\<[`IElectionListResponse`](../interfaces/IElectionListResponse.md)\>

Returns paginated list of elections for a specific account

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | API endpoint URL |
| `accountId` | `string` | `undefined` | accountId to get elections |
| `page` | `number` | `0` | The page number |

#### Returns

`Promise`\<[`IElectionListResponse`](../interfaces/IElectionListResponse.md)\>

#### Defined in

[api/account.ts:220](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/account.ts#L220)

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

[api/account.ts:147](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/account.ts#L147)

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

### list

▸ **list**(`url`, `page?`): `Promise`\<[`IAccountsListResponse`](../interfaces/IAccountsListResponse.md)\>

Returns paginated list of accounts

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | API endpoint URL |
| `page` | `number` | `0` | The page number |

#### Returns

`Promise`\<[`IAccountsListResponse`](../interfaces/IAccountsListResponse.md)\>

#### Defined in

[api/account.ts:120](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/account.ts#L120)

___

### metadata

▸ **metadata**(`url`, `accountId`): `Promise`\<[`AccountMetadata`](../interfaces/AccountMetadata.md)\>

Fetches the account metadata

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `accountId` | `string` | The account we want the info from |

#### Returns

`Promise`\<[`AccountMetadata`](../interfaces/AccountMetadata.md)\>

#### Defined in

[api/account.ts:161](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/account.ts#L161)

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

[api/account.ts:176](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/account.ts#L176)

___

### transfersCount

▸ **transfersCount**(`url`, `accountId`): `Promise`\<[`IAccountTransfersCountResponse`](../interfaces/IAccountTransfersCountResponse.md)\>

Returns the account's transfers count

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `accountId` | `string` | accountId to get the transfers count |

#### Returns

`Promise`\<[`IAccountTransfersCountResponse`](../interfaces/IAccountTransfersCountResponse.md)\>

#### Defined in

[api/account.ts:205](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/account.ts#L205)

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

[api/account.ts:191](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/account.ts#L191)
