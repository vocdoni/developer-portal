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

[src/services/account.ts:46](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/account.ts#L46)

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

[src/services/account.ts:56](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/account.ts#L56)

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

[src/services/account.ts:96](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/account.ts#L96)

___

### signTransaction

▸ **signTransaction**(`tx`, `message`, `walletOrSigner`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Uint8Array` |
| `message` | `string` |
| `walletOrSigner` | `Signer` \| `Wallet` \| [`RemoteSigner`](RemoteSigner) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/services/account.ts:101](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/account.ts#L101)

## Properties

### chainService

• **chainService**: [`ChainService`](ChainService)

#### Implementation of

AccountServiceProperties.chainService

#### Defined in

[src/services/account.ts:39](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/account.ts#L39)

___

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service#url)

#### Defined in

[src/services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/service.ts#L6)
