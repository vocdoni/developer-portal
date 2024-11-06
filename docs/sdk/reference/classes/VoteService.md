[@vocdoni/sdk](/sdk) / VoteService

# Class: VoteService

## Hierarchy

- [`Service`](Service)

  ↳ **`VoteService`**

## Implements

- `VoteServiceProperties`

## Table of contents

### Constructors

- [constructor](VoteService#constructor)

### Methods

- [encodeTransaction](VoteService#encodetransaction)
- [info](VoteService#info)
- [signTransaction](VoteService#signtransaction)
- [vote](VoteService#vote)

### Properties

- [chainService](VoteService#chainservice)
- [url](VoteService#url)

## Constructors

### constructor

• **new VoteService**(`params`): [`VoteService`](VoteService)

Instantiate the election service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Partial`\<`VoteServiceParameters`\> | The service parameters |

#### Returns

[`VoteService`](VoteService)

#### Overrides

Service.constructor

#### Defined in

[src/services/vote.ts:52](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/vote.ts#L52)

## Methods

### encodeTransaction

▸ **encodeTransaction**(`tx`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[src/services/vote.ts:69](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/vote.ts#L69)

___

### info

▸ **info**(`voteId`): `Promise`\<[`VoteInfoResponse`](../sdk-reference#voteinforesponse)\>

Get the vote information

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `voteId` | `string` | The identifier of the vote |

#### Returns

`Promise`\<[`VoteInfoResponse`](../sdk-reference#voteinforesponse)\>

#### Defined in

[src/services/vote.ts:79](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/vote.ts#L79)

___

### signTransaction

▸ **signTransaction**(`tx`, `message`, `walletOrSigner`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Uint8Array` |
| `message` | `string` |
| `walletOrSigner` | `Signer` \| `Wallet` \| [`RemoteSigner`](RemoteSigner) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/services/vote.ts:57](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/vote.ts#L57)

___

### vote

▸ **vote**(`payload`): `Promise`\<[`IVoteSubmitResponse`](../interfaces/IVoteSubmitResponse)\>

Submit the vote to the chain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `payload` | `string` | The base64 encoded vote transaction |

#### Returns

`Promise`\<[`IVoteSubmitResponse`](../interfaces/IVoteSubmitResponse)\>

#### Defined in

[src/services/vote.ts:90](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/vote.ts#L90)

## Properties

### chainService

• **chainService**: [`ChainService`](ChainService)

#### Implementation of

VoteServiceProperties.chainService

#### Defined in

[src/services/vote.ts:45](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/vote.ts#L45)

___

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service#url)

#### Defined in

[src/services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/service.ts#L6)
