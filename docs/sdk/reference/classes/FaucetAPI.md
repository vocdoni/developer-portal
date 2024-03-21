[@vocdoni/sdk](/sdk) / [Exports](../modules) / FaucetAPI

# Class: FaucetAPI

## Hierarchy

- `API`

  ↳ **`FaucetAPI`**

## Table of contents

### Constructors

- [constructor](FaucetAPI#constructor)

### Methods

- [collect](FaucetAPI#collect)
- [isApiError](FaucetAPI#isapierror)
- [isUndefinedError](FaucetAPI#isundefinederror)

## Constructors

### constructor

• **new FaucetAPI**(): [`FaucetAPI`](FaucetAPI)

Cannot be constructed.

#### Returns

[`FaucetAPI`](FaucetAPI)

#### Overrides

API.constructor

#### Defined in

[api/faucet.ts:24](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/faucet.ts#L24)

## Methods

### collect

▸ **collect**(`url`, `address`): `Promise`\<`IFaucetCollectResponse`\>

Calls the collect tokens method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `address` | `string` | Address to send the tokens to |

#### Returns

`Promise`\<`IFaucetCollectResponse`\>

#### Defined in

[api/faucet.ts:35](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/faucet.ts#L35)

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
