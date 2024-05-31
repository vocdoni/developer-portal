[@vocdoni/sdk](/sdk) / IVoteInfoResponse

# Interface: IVoteInfoResponse

## Table of contents

### Properties

- [blockHeight](IVoteInfoResponse#blockheight)
- [date](IVoteInfoResponse#date)
- [electionID](IVoteInfoResponse#electionid)
- [encryptionKeys](IVoteInfoResponse#encryptionkeys)
- [overwriteCount](IVoteInfoResponse#overwritecount)
- [package](IVoteInfoResponse#package)
- [transactionIndex](IVoteInfoResponse#transactionindex)
- [txHash](IVoteInfoResponse#txhash)
- [voteID](IVoteInfoResponse#voteid)
- [voterID](IVoteInfoResponse#voterid)
- [weight](IVoteInfoResponse#weight)

## Properties

### blockHeight

• **blockHeight**: `number`

The block number where the transaction is mined.

#### Defined in

[api/vote.ts:80](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/vote.ts#L80)

___

### date

• **date**: `string`

Date when the vote was emitted

#### Defined in

[api/vote.ts:95](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/vote.ts#L95)

___

### electionID

• **electionID**: `string`

The identifier of the election.

#### Defined in

[api/vote.ts:70](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/vote.ts#L70)

___

### encryptionKeys

• `Optional` **encryptionKeys**: `number`[]

Encryption key indexes used

#### Defined in

[api/vote.ts:55](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/vote.ts#L55)

___

### overwriteCount

• **overwriteCount**: `number`

The number of votes overwrites.

#### Defined in

[api/vote.ts:90](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/vote.ts#L90)

___

### package

• **package**: [`IVotePackage`](IVotePackage.md) \| [`IVoteEncryptedPackage`](IVoteEncryptedPackage)

The vote package.

#### Defined in

[api/vote.ts:60](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/vote.ts#L60)

___

### transactionIndex

• **transactionIndex**: `number`

The index inside the block where the transaction is mined.

#### Defined in

[api/vote.ts:85](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/vote.ts#L85)

___

### txHash

• **txHash**: `string`

The hash of the transaction

#### Defined in

[api/vote.ts:45](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/vote.ts#L45)

___

### voteID

• **voteID**: `string`

The identifier of the vote, also called nullifier.

#### Defined in

[api/vote.ts:50](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/vote.ts#L50)

___

### voterID

• **voterID**: `string`

The identifier of the voter.

#### Defined in

[api/vote.ts:75](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/vote.ts#L75)

___

### weight

• **weight**: `string`

The weight of the vote.

#### Defined in

[api/vote.ts:65](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/vote.ts#L65)
