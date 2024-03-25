[@vocdoni/sdk](/sdk) / [Exports](../modules) / IVoteInfoResponse

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
- [weight](IVoteInfoResponse#weight)

## Properties

### blockHeight

• **blockHeight**: `number`

The block number where the transaction is mined.

#### Defined in

[api/vote.ts:56](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/vote.ts#L56)

___

### date

• **date**: `string`

Date when the vote was emitted

#### Defined in

[api/vote.ts:71](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/vote.ts#L71)

___

### electionID

• **electionID**: `string`

The identifier of the election.

#### Defined in

[api/vote.ts:51](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/vote.ts#L51)

___

### encryptionKeys

• `Optional` **encryptionKeys**: `number`[]

Encryption key indexes used

#### Defined in

[api/vote.ts:36](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/vote.ts#L36)

___

### overwriteCount

• **overwriteCount**: `number`

The number of votes overwrites.

#### Defined in

[api/vote.ts:66](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/vote.ts#L66)

___

### package

• **package**: `string`

The stringified vote package JSON.

#### Defined in

[api/vote.ts:41](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/vote.ts#L41)

___

### transactionIndex

• **transactionIndex**: `number`

The index inside the block where the transaction is mined.

#### Defined in

[api/vote.ts:61](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/vote.ts#L61)

___

### txHash

• **txHash**: `string`

The hash of the transaction

#### Defined in

[api/vote.ts:26](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/vote.ts#L26)

___

### voteID

• **voteID**: `string`

The identifier of the vote, also called nullifier.

#### Defined in

[api/vote.ts:31](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/vote.ts#L31)

___

### weight

• **weight**: `string`

The weight of the vote.

#### Defined in

[api/vote.ts:46](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/vote.ts#L46)
