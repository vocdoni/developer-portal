[@vocdoni/sdk](/sdk) / VoteEnvelope

# Interface: VoteEnvelope

## Table of contents

### Properties

- [encryptionKeyIndexes](VoteEnvelope#encryptionkeyindexes)
- [nonce](VoteEnvelope#nonce)
- [nullifier](VoteEnvelope#nullifier)
- [processId](VoteEnvelope#processid)
- [proof](VoteEnvelope#proof)
- [votePackage](VoteEnvelope#votepackage)

## Properties

### encryptionKeyIndexes

• **encryptionKeyIndexes**: `number`[]

On encrypted votes, contains the (sorted) indexes of the keys used to encrypt

#### Defined in

[src/api/chain/transactions.ts:81](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L81)

___

### nonce

• **nonce**: `string`

Unique number per vote attempt, so that replay attacks can't reuse this payload

#### Defined in

[src/api/chain/transactions.ts:61](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L61)

___

### nullifier

• **nullifier**: `string`

Hash of the private key + processId

#### Defined in

[src/api/chain/transactions.ts:77](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L77)

___

### processId

• **processId**: `string`

The process for which the vote is casted

#### Defined in

[src/api/chain/transactions.ts:65](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L65)

___

### proof

• **proof**: [`Proof`](Proof)

Franchise proof

#### Defined in

[src/api/chain/transactions.ts:69](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L69)

___

### votePackage

• **votePackage**: `string`

JSON string of the Vote Package (potentially encrypted), encoded as bytes.

#### Defined in

[src/api/chain/transactions.ts:73](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L73)
