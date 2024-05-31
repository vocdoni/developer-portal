[@vocdoni/sdk](/sdk) / FaucetService

# Class: FaucetService

## Hierarchy

- [`Service`](Service)

  ↳ **`FaucetService`**

## Implements

- `FaucetServiceProperties`

## Table of contents

### Constructors

- [constructor](FaucetService#constructor)

### Methods

- [fetchPayload](FaucetService#fetchpayload)
- [parseFaucetPackage](FaucetService#parsefaucetpackage)

### Properties

- [token\_limit](FaucetService.md#token_limit)
- [url](FaucetService#url)

## Constructors

### constructor

• **new FaucetService**(`params`): [`FaucetService`](FaucetService)

Instantiate the chain service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Partial`\<`FaucetServiceParameters`\> | The service parameters |

#### Returns

[`FaucetService`](FaucetService)

#### Overrides

Service.constructor

#### Defined in

[services/faucet.ts:38](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/services/faucet.ts#L38)

## Methods

### fetchPayload

▸ **fetchPayload**(`address`): `Promise`\<`string`\>

Fetches a faucet payload. Only for development.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address where to send the tokens |

#### Returns

`Promise`\<`string`\>

The encoded faucet package

#### Defined in

[services/faucet.ts:49](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/services/faucet.ts#L49)

___

### parseFaucetPackage

▸ **parseFaucetPackage**(`faucetPackage`): [`FaucetPackage`](../sdk-reference#faucetpackage)

Parses a faucet package.

#### Parameters

| Name | Type |
| :------ | :------ |
| `faucetPackage` | `string` |

#### Returns

[`FaucetPackage`](../sdk-reference#faucetpackage)

#### Defined in

[services/faucet.ts:58](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/services/faucet.ts#L58)

## Properties

### token\_limit

• **token\_limit**: `number`

#### Implementation of

FaucetServiceProperties.token\_limit

#### Defined in

[services/faucet.ts:31](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/services/faucet.ts#L31)

___

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service#url)

#### Defined in

[services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/services/service.ts#L6)
