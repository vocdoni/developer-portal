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

[src/api/faucet.ts:34](https://github.com/vocdoni/vocdoni-sdk/blob/09401e1099a0f03641b994ed392235bc78fec830/src/api/faucet.ts#L34)
