[@vocdoni/sdk](/sdk) / RemoteSignerService

# Class: RemoteSignerService

## Hierarchy

- [`Service`](Service)

  ↳ **`RemoteSignerService`**

## Implements

- `RemoteSignerServiceProperties`

## Table of contents

### Constructors

- [constructor](RemoteSignerService#constructor)

### Methods

- [addresses](RemoteSignerService#addresses)
- [getAddress](RemoteSignerService#getaddress)
- [login](RemoteSignerService#login)
- [refresh](RemoteSignerService#refresh)
- [signPayload](RemoteSignerService#signpayload)
- [signTxPayload](RemoteSignerService#signtxpayload)

### Properties

- [remoteSigner](RemoteSignerService#remotesigner)
- [url](RemoteSignerService#url)

## Constructors

### constructor

• **new RemoteSignerService**(`params`): [`RemoteSignerService`](RemoteSignerService)

Instantiate the remote signer service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Partial`\<`RemoteSignerServiceParameters`\> | The service parameters |

#### Returns

[`RemoteSignerService`](RemoteSignerService)

#### Overrides

Service.constructor

#### Defined in

[src/services/remote-signer.ts:23](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/remote-signer.ts#L23)

## Methods

### addresses

▸ **addresses**(): `Promise`\<`string`[]\>

Returns the writable addresses.

#### Returns

`Promise`\<`string`[]\>

The writable addresses

#### Defined in

[src/services/remote-signer.ts:58](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/remote-signer.ts#L58)

___

### getAddress

▸ **getAddress**(): `Promise`\<`string`\>

Returns the address of the remote signer.

#### Returns

`Promise`\<`string`\>

The remote signer address

#### Defined in

[src/services/remote-signer.ts:71](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/remote-signer.ts#L71)

___

### login

▸ **login**(`credentials?`): `Promise`\<`string`\>

Logs in to the remote signer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentials?` | [`RemoteSignerCredentials`](../sdk-reference#remotesignercredentials) |

#### Returns

`Promise`\<`string`\>

The JWT token

#### Defined in

[src/services/remote-signer.ts:33](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/remote-signer.ts#L33)

___

### refresh

▸ **refresh**(): `Promise`\<`string`\>

Refreshes the JWT token.

#### Returns

`Promise`\<`string`\>

The JWT token

#### Defined in

[src/services/remote-signer.ts:47](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/remote-signer.ts#L47)

___

### signPayload

▸ **signPayload**(`payload`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `string` \| `Bytes` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/services/remote-signer.ts:97](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/remote-signer.ts#L97)

___

### signTxPayload

▸ **signTxPayload**(`payload`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `string` \| `Bytes` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/services/remote-signer.ts:81](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/remote-signer.ts#L81)

## Properties

### remoteSigner

• **remoteSigner**: [`RemoteSigner`](RemoteSigner)

#### Implementation of

RemoteSignerServiceProperties.remoteSigner

#### Defined in

[src/services/remote-signer.ts:16](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/remote-signer.ts#L16)

___

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service#url)

#### Defined in

[src/services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/service.ts#L6)
