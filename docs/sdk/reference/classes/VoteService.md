[@vocdoni/sdk](/sdk) / [Exports](../modules) / VoteService

# Class: VoteService

## Hierarchy

- [`Service`](Service)

  ↳ **`VoteService`**

## Implements

- `VoteServiceProperties`

## Table of contents

### Constructors

- [constructor](VoteService#constructor)

### Properties

- [chainService](VoteService#chainservice)
- [url](VoteService#url)

### Methods

- [encodeTransaction](VoteService#encodetransaction)
- [info](VoteService#info)
- [signTransaction](VoteService#signtransaction)
- [vote](VoteService#vote)

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

[Service](Service.md).[constructor](Service#constructor)

#### Defined in

[services/vote.ts:45](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/vote.ts#L45)

## Properties

### chainService

• **chainService**: [`ChainService`](ChainService)

#### Implementation of

VoteServiceProperties.chainService

#### Defined in

[services/vote.ts:38](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/vote.ts#L38)

___

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service#url)

#### Defined in

[services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/service.ts#L6)

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

[services/vote.ts:58](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/vote.ts#L58)

___

### info

▸ **info**(`voteId`): `Promise`\<[`IVoteInfoResponse`](../interfaces/IVoteInfoResponse)\>

Get the vote information

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `voteId` | `string` | The identifier of the vote |

#### Returns

`Promise`\<[`IVoteInfoResponse`](../interfaces/IVoteInfoResponse)\>

#### Defined in

[services/vote.ts:69](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/vote.ts#L69)

___

### signTransaction

▸ **signTransaction**(`tx`, `message`, `walletOrSigner`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Uint8Array` |
| `message` | `string` |
| `walletOrSigner` | `Wallet` \| `Signer` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[services/vote.ts:50](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/vote.ts#L50)

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

[services/vote.ts:81](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/vote.ts#L81)
