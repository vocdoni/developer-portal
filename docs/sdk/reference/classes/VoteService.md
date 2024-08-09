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

[src/services/vote.ts:51](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/services/vote.ts#L51)

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

[src/services/vote.ts:64](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/services/vote.ts#L64)

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

[src/services/vote.ts:74](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/services/vote.ts#L74)

___

### signTransaction

▸ **signTransaction**(`tx`, `message`, `walletOrSigner`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Uint8Array` |
| `message` | `string` |
| `walletOrSigner` | `Signer` \| `Wallet` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/services/vote.ts:56](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/services/vote.ts#L56)

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

[src/services/vote.ts:85](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/services/vote.ts#L85)

## Properties

### chainService

• **chainService**: [`ChainService`](ChainService)

#### Implementation of

VoteServiceProperties.chainService

#### Defined in

[src/services/vote.ts:44](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/services/vote.ts#L44)

___

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service#url)

#### Defined in

[src/services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/services/service.ts#L6)
