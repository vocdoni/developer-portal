[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / AccountService

# Class: AccountService

## Hierarchy

- [`Service`](Service.md)

  ↳ **`AccountService`**

## Implements

- `AccountServiceProperties`

## Table of contents

### Constructors

- [constructor](AccountService.md#constructor)

### Properties

- [chainService](AccountService.md#chainservice)
- [url](AccountService.md#url)

### Methods

- [fetchAccountInfo](AccountService.md#fetchaccountinfo)
- [setInfo](AccountService.md#setinfo)
- [signTransaction](AccountService.md#signtransaction)

## Constructors

### constructor

• **new AccountService**(`params`): [`AccountService`](AccountService.md)

Instantiate the election service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Partial`\<`AccountServiceParameters`\> | The service parameters |

#### Returns

[`AccountService`](AccountService.md)

#### Overrides

[Service](Service.md).[constructor](Service.md#constructor)

#### Defined in

[services/account.ts:45](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/account.ts#L45)

## Properties

### chainService

• **chainService**: [`ChainService`](ChainService.md)

#### Implementation of

AccountServiceProperties.chainService

#### Defined in

[services/account.ts:38](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/account.ts#L38)

___

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service.md#url)

#### Defined in

[services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/service.ts#L6)

## Methods

### fetchAccountInfo

▸ **fetchAccountInfo**(`address`): `Promise`\<[`AccountData`](../modules.md#accountdata) \| [`ArchivedAccountData`](../modules.md#archivedaccountdata)\>

Fetches account information.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The account address to fetch the information |

#### Returns

`Promise`\<[`AccountData`](../modules.md#accountdata) \| [`ArchivedAccountData`](../modules.md#archivedaccountdata)\>

#### Defined in

[services/account.ts:56](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/account.ts#L56)

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

[services/account.ts:96](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/account.ts#L96)

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

[services/account.ts:101](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/account.ts#L101)
