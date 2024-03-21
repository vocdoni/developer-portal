[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / WalletAPI

# Class: WalletAPI

## Hierarchy

- `API`

  ↳ **`WalletAPI`**

## Table of contents

### Constructors

- [constructor](WalletAPI.md#constructor)

### Methods

- [add](WalletAPI.md#add)
- [isApiError](WalletAPI.md#isapierror)
- [isUndefinedError](WalletAPI.md#isundefinederror)

## Constructors

### constructor

• **new WalletAPI**(): [`WalletAPI`](WalletAPI.md)

Cannot be constructed.

#### Returns

[`WalletAPI`](WalletAPI.md)

#### Overrides

API.constructor

#### Defined in

[api/wallet.ts:25](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/wallet.ts#L25)

## Methods

### add

▸ **add**(`url`, `privateKey`): `Promise`\<`IWalletAddResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `privateKey` | `string` |

#### Returns

`Promise`\<`IWalletAddResponse`\>

#### Defined in

[api/wallet.ts:29](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/wallet.ts#L29)

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
