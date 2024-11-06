[@vocdoni/sdk](/sdk) / RegisterKeyTx

# Interface: RegisterKeyTx

## Table of contents

### Properties

- [newKey](RegisterKeyTx#newkey)
- [nonce](RegisterKeyTx#nonce)
- [processId](RegisterKeyTx#processid)
- [proof](RegisterKeyTx#proof)
- [weight](RegisterKeyTx#weight)

## Properties

### newKey

• **newKey**: `Uint8Array`

New key to register

#### Defined in

[src/api/chain/transactions.ts:122](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L122)

___

### nonce

• **nonce**: `number`

Unique number per vote attempt, so that replay attacks can't reuse this payload

#### Defined in

[src/api/chain/transactions.ts:116](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L116)

___

### processId

• **processId**: `Uint8Array`

The process for which the vote is casted

#### Defined in

[src/api/chain/transactions.ts:118](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L118)

___

### proof

• **proof**: [`Proof`](Proof)

Franchise proof

#### Defined in

[src/api/chain/transactions.ts:120](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L120)

___

### weight

• **weight**: `string`

Weight to delegate to newKey

#### Defined in

[src/api/chain/transactions.ts:124](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L124)
