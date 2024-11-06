[@vocdoni/sdk](/sdk) / RemoteSignerAPI

# Class: RemoteSignerAPI

## Hierarchy

- [`API`](API)

  ↳ **`RemoteSignerAPI`**

## Table of contents

### Methods

- [addresses](RemoteSignerAPI#addresses)
- [login](RemoteSignerAPI#login)
- [refresh](RemoteSignerAPI#refresh)
- [sign](RemoteSignerAPI#sign)
- [signTransaction](RemoteSignerAPI#signtransaction)

## Methods

### addresses

▸ **addresses**(`url`, `authToken`): `Promise`\<[`IRemoteSignerAddressesResponse`](../interfaces/IRemoteSignerAddressesResponse)\>

Gets the writable addresses of the logged-in user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `authToken` | `string` | Authentication token |

#### Returns

`Promise`\<[`IRemoteSignerAddressesResponse`](../interfaces/IRemoteSignerAddressesResponse)\>

#### Defined in

[src/api/remote-signer.ts:102](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/remote-signer.ts#L102)

___

### login

▸ **login**(`url`, `email`, `password`): `Promise`\<[`IRemoteSignerLoginResponse`](../interfaces/IRemoteSignerLoginResponse)\>

Logs in a user using email and password.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `email` | `string` | The email address |
| `password` | `string` | The password |

#### Returns

`Promise`\<[`IRemoteSignerLoginResponse`](../interfaces/IRemoteSignerLoginResponse)\>

#### Defined in

[src/api/remote-signer.ts:72](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/remote-signer.ts#L72)

___

### refresh

▸ **refresh**(`url`, `authToken`): `Promise`\<[`IRemoteSignerRefreshResponse`](../interfaces/IRemoteSignerRefreshResponse)\>

Refreshes the JWT token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `authToken` | `string` | Authentication token |

#### Returns

`Promise`\<[`IRemoteSignerRefreshResponse`](../interfaces/IRemoteSignerRefreshResponse)\>

#### Defined in

[src/api/remote-signer.ts:85](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/remote-signer.ts#L85)

___

### sign

▸ **sign**(`url`, `authToken`, `address`, `payload`): `Promise`\<[`IRemoteSignerSignResponse`](../interfaces/IRemoteSignerSignResponse)\>

Signs the payload using the remote signer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `authToken` | `string` | Authentication token |
| `address` | `string` | The address |
| `payload` | `string` | The payload |

#### Returns

`Promise`\<[`IRemoteSignerSignResponse`](../interfaces/IRemoteSignerSignResponse)\>

#### Defined in

[src/api/remote-signer.ts:149](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/remote-signer.ts#L149)

___

### signTransaction

▸ **signTransaction**(`url`, `authToken`, `address`, `payload`): `Promise`\<[`IRemoteSignerSignTxResponse`](../interfaces/IRemoteSignerSignTxResponse)\>

Signs the transaction using the remote signer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `authToken` | `string` | Authentication token |
| `address` | `string` | The address |
| `payload` | `string` | The transaction payload |

#### Returns

`Promise`\<[`IRemoteSignerSignTxResponse`](../interfaces/IRemoteSignerSignTxResponse)\>

#### Defined in

[src/api/remote-signer.ts:121](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/remote-signer.ts#L121)
