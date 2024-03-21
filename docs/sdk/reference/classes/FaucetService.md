[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / FaucetService

# Class: FaucetService

## Hierarchy

- [`Service`](Service.md)

  ↳ **`FaucetService`**

## Implements

- `FaucetServiceProperties`

## Table of contents

### Constructors

- [constructor](FaucetService.md#constructor)

### Properties

- [token\_limit](FaucetService.md#token_limit)
- [url](FaucetService.md#url)

### Methods

- [fetchPayload](FaucetService.md#fetchpayload)
- [parseFaucetPackage](FaucetService.md#parsefaucetpackage)

## Constructors

### constructor

• **new FaucetService**(`params`): [`FaucetService`](FaucetService.md)

Instantiate the chain service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Partial`\<`FaucetServiceParameters`\> | The service parameters |

#### Returns

[`FaucetService`](FaucetService.md)

#### Overrides

[Service](Service.md).[constructor](Service.md#constructor)

#### Defined in

[services/faucet.ts:38](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/faucet.ts#L38)

## Properties

### token\_limit

• **token\_limit**: `number`

#### Implementation of

FaucetServiceProperties.token\_limit

#### Defined in

[services/faucet.ts:31](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/faucet.ts#L31)

___

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service.md#url)

#### Defined in

[services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/service.ts#L6)

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

[services/faucet.ts:49](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/faucet.ts#L49)

___

### parseFaucetPackage

▸ **parseFaucetPackage**(`faucetPackage`): [`FaucetPackage`](../modules.md#faucetpackage)

Parses a faucet package.

#### Parameters

| Name | Type |
| :------ | :------ |
| `faucetPackage` | `string` |

#### Returns

[`FaucetPackage`](../modules.md#faucetpackage)

#### Defined in

[services/faucet.ts:59](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/faucet.ts#L59)
