[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / IElectionVote

# Interface: IElectionVote

## Table of contents

### Properties

- [blockHeight](IElectionVote.md#blockheight)
- [transactionIndex](IElectionVote.md#transactionindex)
- [txHash](IElectionVote.md#txhash)
- [voteID](IElectionVote.md#voteid)
- [voterID](IElectionVote.md#voterid)

## Properties

### blockHeight

• **blockHeight**: `number`

Block containing the vote transaction

#### Defined in

[api/election.ts:303](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L303)

___

### transactionIndex

• **transactionIndex**: `number`

Transaction number on the block

#### Defined in

[api/election.ts:308](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L308)

___

### txHash

• **txHash**: `string`

Containing transaction hash

#### Defined in

[api/election.ts:288](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L288)

___

### voteID

• **voteID**: `string`

Vote unique identifier also known as vote nullifier

#### Defined in

[api/election.ts:293](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L293)

___

### voterID

• **voterID**: `string`

Account that emit the vote

#### Defined in

[api/election.ts:298](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L298)
