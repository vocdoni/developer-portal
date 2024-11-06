[@vocdoni/sdk](/sdk) / RemoteSigner

# Class: RemoteSigner

## Hierarchy

- `Signer`

  ↳ **`RemoteSigner`**

## Table of contents

### Accessors

- [address](RemoteSigner#address)
- [remoteSignerService](RemoteSigner#remotesignerservice)

### Constructors

- [constructor](RemoteSigner#constructor)

### Methods

- [\_checkProvider](RemoteSigner.md#_checkprovider)
- [call](RemoteSigner#call)
- [checkTransaction](RemoteSigner#checktransaction)
- [connect](RemoteSigner#connect)
- [estimateGas](RemoteSigner#estimategas)
- [getAddress](RemoteSigner#getaddress)
- [getBalance](RemoteSigner#getbalance)
- [getChainId](RemoteSigner#getchainid)
- [getFeeData](RemoteSigner#getfeedata)
- [getGasPrice](RemoteSigner#getgasprice)
- [getTransactionCount](RemoteSigner#gettransactioncount)
- [login](RemoteSigner#login)
- [populateTransaction](RemoteSigner#populatetransaction)
- [refresh](RemoteSigner#refresh)
- [resolveName](RemoteSigner#resolvename)
- [sendTransaction](RemoteSigner#sendtransaction)
- [signMessage](RemoteSigner#signmessage)
- [signTransaction](RemoteSigner#signtransaction)
- [signTransactionRemotely](RemoteSigner#signtransactionremotely)
- [isSigner](RemoteSigner#issigner)

### Properties

- [\_isSigner](RemoteSigner.md#_issigner)
- [credentials](RemoteSigner#credentials)
- [provider](RemoteSigner#provider)
- [token](RemoteSigner#token)
- [url](RemoteSigner#url)

## Accessors

### address

• `get` **address**(): `string`

#### Returns

`string`

#### Defined in

[src/types/remote-signer.ts:81](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/remote-signer.ts#L81)

• `set` **address**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/types/remote-signer.ts:85](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/remote-signer.ts#L85)

___

### remoteSignerService

• `get` **remoteSignerService**(): [`RemoteSignerService`](RemoteSignerService)

#### Returns

[`RemoteSignerService`](RemoteSignerService)

#### Defined in

[src/types/remote-signer.ts:73](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/remote-signer.ts#L73)

• `set` **remoteSignerService**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`RemoteSignerService`](RemoteSignerService) |

#### Returns

`void`

#### Defined in

[src/types/remote-signer.ts:77](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/remote-signer.ts#L77)

## Constructors

### constructor

• **new RemoteSigner**(`params`): [`RemoteSigner`](RemoteSigner)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Partial`\<[`RemoteSignerProperties`](../sdk-reference#remotesignerproperties)\> |

#### Returns

[`RemoteSigner`](RemoteSigner)

#### Overrides

Signer.constructor

#### Defined in

[src/types/remote-signer.ts:26](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/remote-signer.ts#L26)

## Methods

### \_checkProvider

▸ **_checkProvider**(`operation?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `operation?` | `string` |

#### Returns

`void`

#### Inherited from

Signer.\_checkProvider

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:42

___

### call

▸ **call**(`transaction`, `blockTag?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `Deferrable`\<`TransactionRequest`\> |
| `blockTag?` | `BlockTag` |

#### Returns

`Promise`\<`string`\>

#### Inherited from

Signer.call

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:34

___

### checkTransaction

▸ **checkTransaction**(`transaction`): `Deferrable`\<`TransactionRequest`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `Deferrable`\<`TransactionRequest`\> |

#### Returns

`Deferrable`\<`TransactionRequest`\>

#### Inherited from

Signer.checkTransaction

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:40

___

### connect

▸ **connect**(`_provider`): `Signer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_provider` | `Provider` |

#### Returns

`Signer`

#### Overrides

Signer.connect

#### Defined in

[src/types/remote-signer.ts:69](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/remote-signer.ts#L69)

___

### estimateGas

▸ **estimateGas**(`transaction`): `Promise`\<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `Deferrable`\<`TransactionRequest`\> |

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

Signer.estimateGas

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:33

___

### getAddress

▸ **getAddress**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Overrides

Signer.getAddress

#### Defined in

[src/types/remote-signer.ts:58](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/remote-signer.ts#L58)

___

### getBalance

▸ **getBalance**(`blockTag?`): `Promise`\<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | `BlockTag` |

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

Signer.getBalance

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:31

___

### getChainId

▸ **getChainId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

Signer.getChainId

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:36

___

### getFeeData

▸ **getFeeData**(): `Promise`\<`FeeData`\>

#### Returns

`Promise`\<`FeeData`\>

#### Inherited from

Signer.getFeeData

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:38

___

### getGasPrice

▸ **getGasPrice**(): `Promise`\<`BigNumber`\>

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

Signer.getGasPrice

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:37

___

### getTransactionCount

▸ **getTransactionCount**(`blockTag?`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | `BlockTag` |

#### Returns

`Promise`\<`number`\>

#### Inherited from

Signer.getTransactionCount

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:32

___

### login

▸ **login**(`credentials?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentials?` | [`RemoteSignerCredentials`](../sdk-reference#remotesignercredentials) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/types/remote-signer.ts:32](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/remote-signer.ts#L32)

___

### populateTransaction

▸ **populateTransaction**(`transaction`): `Promise`\<`TransactionRequest`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `Deferrable`\<`TransactionRequest`\> |

#### Returns

`Promise`\<`TransactionRequest`\>

#### Inherited from

Signer.populateTransaction

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:41

___

### refresh

▸ **refresh**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/types/remote-signer.ts:43](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/remote-signer.ts#L43)

___

### resolveName

▸ **resolveName**(`name`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`\<`string`\>

#### Inherited from

Signer.resolveName

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:39

___

### sendTransaction

▸ **sendTransaction**(`transaction`): `Promise`\<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `Deferrable`\<`TransactionRequest`\> |

#### Returns

`Promise`\<`TransactionResponse`\>

#### Inherited from

Signer.sendTransaction

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:35

___

### signMessage

▸ **signMessage**(`message`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `Bytes` |

#### Returns

`Promise`\<`string`\>

#### Overrides

Signer.signMessage

#### Defined in

[src/types/remote-signer.ts:50](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/remote-signer.ts#L50)

___

### signTransaction

▸ **signTransaction**(`_transaction`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_transaction` | `TransactionRequest` |

#### Returns

`Promise`\<`string`\>

#### Overrides

Signer.signTransaction

#### Defined in

[src/types/remote-signer.ts:65](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/remote-signer.ts#L65)

___

### signTransactionRemotely

▸ **signTransactionRemotely**(`message`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `Bytes` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/types/remote-signer.ts:54](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/remote-signer.ts#L54)

___

### isSigner

▸ **isSigner**(`value`): value is Signer

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Signer

#### Inherited from

Signer.isSigner

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:43

## Properties

### \_isSigner

• `Readonly` **\_isSigner**: `boolean`

#### Inherited from

Signer.\_isSigner

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:29

___

### credentials

• **credentials**: [`RemoteSignerCredentials`](../sdk-reference#remotesignercredentials)

#### Defined in

[src/types/remote-signer.ts:21](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/remote-signer.ts#L21)

___

### provider

• `Optional` `Readonly` **provider**: `Provider`

#### Inherited from

Signer.provider

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:24

___

### token

• **token**: `string`

#### Defined in

[src/types/remote-signer.ts:22](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/remote-signer.ts#L22)

___

### url

• **url**: `string`

#### Defined in

[src/types/remote-signer.ts:20](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/remote-signer.ts#L20)
