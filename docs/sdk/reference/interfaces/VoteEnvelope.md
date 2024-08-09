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

[src/api/chain/transactions.ts:80](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain/transactions.ts#L80)

___

### nonce

• **nonce**: `string`

Unique number per vote attempt, so that replay attacks can't reuse this payload

#### Defined in

[src/api/chain/transactions.ts:60](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain/transactions.ts#L60)

___

### nullifier

• **nullifier**: `string`

Hash of the private key + processId

#### Defined in

[src/api/chain/transactions.ts:76](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain/transactions.ts#L76)

___

### processId

• **processId**: `string`

The process for which the vote is casted

#### Defined in

[src/api/chain/transactions.ts:64](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain/transactions.ts#L64)

___

### proof

• **proof**: [`Proof`](Proof)

Franchise proof

#### Defined in

[src/api/chain/transactions.ts:68](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain/transactions.ts#L68)

___

### votePackage

• **votePackage**: `string`

JSON string of the Vote Package (potentially encrypted), encoded as bytes.

#### Defined in

[src/api/chain/transactions.ts:72](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain/transactions.ts#L72)
