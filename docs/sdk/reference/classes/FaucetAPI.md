[@vocdoni/sdk](/sdk) / FaucetAPI

# Class: FaucetAPI

## Hierarchy

- [`API`](API)

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

[src/api/faucet.ts:34](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/api/faucet.ts#L34)
