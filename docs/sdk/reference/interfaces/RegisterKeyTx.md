[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / RegisterKeyTx

# Interface: RegisterKeyTx

## Table of contents

### Properties

- [newKey](RegisterKeyTx.md#newkey)
- [nonce](RegisterKeyTx.md#nonce)
- [processId](RegisterKeyTx.md#processid)
- [proof](RegisterKeyTx.md#proof)
- [weight](RegisterKeyTx.md#weight)

## Properties

### newKey

• **newKey**: `Uint8Array`

New key to register

#### Defined in

[api/chain/transactions.ts:121](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain/transactions.ts#L121)

___

### nonce

• **nonce**: `number`

Unique number per vote attempt, so that replay attacks can't reuse this payload

#### Defined in

[api/chain/transactions.ts:115](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain/transactions.ts#L115)

___

### processId

• **processId**: `Uint8Array`

The process for which the vote is casted

#### Defined in

[api/chain/transactions.ts:117](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain/transactions.ts#L117)

___

### proof

• **proof**: [`Proof`](Proof.md)

Franchise proof

#### Defined in

[api/chain/transactions.ts:119](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain/transactions.ts#L119)

___

### weight

• **weight**: `string`

Weight to delegate to newKey

#### Defined in

[api/chain/transactions.ts:123](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain/transactions.ts#L123)