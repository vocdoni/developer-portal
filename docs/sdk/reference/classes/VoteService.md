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

[services/vote.ts:45](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/services/vote.ts#L45)

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

[services/vote.ts:58](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/services/vote.ts#L58)

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

[services/vote.ts:68](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/services/vote.ts#L68)

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

[services/vote.ts:50](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/services/vote.ts#L50)

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

[services/vote.ts:79](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/services/vote.ts#L79)

## Properties

### chainService

• **chainService**: [`ChainService`](ChainService)

#### Implementation of

VoteServiceProperties.chainService

#### Defined in

[services/vote.ts:38](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/services/vote.ts#L38)

___

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service#url)

#### Defined in

[services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/services/service.ts#L6)
