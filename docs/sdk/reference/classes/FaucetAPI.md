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

[src/api/faucet.ts:34](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/faucet.ts#L34)
