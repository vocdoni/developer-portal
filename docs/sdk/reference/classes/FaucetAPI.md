[@vocdoni/sdk](/sdk) / FaucetAPI

# Class: FaucetAPI

## Hierarchy

- `API`

  ↳ **`FaucetAPI`**

## Table of contents

### Methods

- [collect](FaucetAPI#collect)

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

[api/faucet.ts:34](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/api/faucet.ts#L34)
