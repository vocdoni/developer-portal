[@vocdoni/sdk](/sdk) / AccountService

# Class: AccountService

## Hierarchy

- [`Service`](Service)

  ↳ **`AccountService`**

## Implements

- `AccountServiceProperties`

## Table of contents

### Constructors

- [constructor](AccountService#constructor)

### Methods

- [fetchAccountInfo](AccountService#fetchaccountinfo)
- [setInfo](AccountService#setinfo)
- [signTransaction](AccountService#signtransaction)

### Properties

- [chainService](AccountService#chainservice)
- [url](AccountService#url)

## Constructors

### constructor

• **new AccountService**(`params`): [`AccountService`](AccountService)

Instantiate the election service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Partial`\<`AccountServiceParameters`\> | The service parameters |

#### Returns

[`AccountService`](AccountService)

#### Overrides

Service.constructor

#### Defined in

[services/account.ts:45](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/services/account.ts#L45)

## Methods

### fetchAccountInfo

▸ **fetchAccountInfo**(`address`): `Promise`\<[`AccountData`](../sdk-reference.md#accountdata) \| [`ArchivedAccountData`](../sdk-reference#archivedaccountdata)\>

Fetches account information.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The account address to fetch the information |

#### Returns

`Promise`\<[`AccountData`](../sdk-reference.md#accountdata) \| [`ArchivedAccountData`](../sdk-reference#archivedaccountdata)\>

#### Defined in

[services/account.ts:55](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/services/account.ts#L55)

___

### setInfo

▸ **setInfo**(`tx`, `metadata`): `Promise`\<`string`\>

Updates an account with information

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tx` | `string` | The transaction for setting the account |
| `metadata` | `string` | The account metadata |

#### Returns

`Promise`\<`string`\>

The transaction hash

#### Defined in

[services/account.ts:95](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/services/account.ts#L95)

___

### signTransaction

▸ **signTransaction**(`tx`, `message`, `walletOrSigner`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Uint8Array` |
| `message` | `string` |
| `walletOrSigner` | `Wallet` \| `Signer` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[services/account.ts:100](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/services/account.ts#L100)

## Properties

### chainService

• **chainService**: [`ChainService`](ChainService)

#### Implementation of

AccountServiceProperties.chainService

#### Defined in

[services/account.ts:38](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/services/account.ts#L38)

___

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service#url)

#### Defined in

[services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/services/service.ts#L6)
