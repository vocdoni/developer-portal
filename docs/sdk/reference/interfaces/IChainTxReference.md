[@vocdoni/sdk](/sdk) / IChainTxReference

# Interface: IChainTxReference

## Table of contents

### Properties

- [blockHeight](IChainTxReference#blockheight)
- [transactionHash](IChainTxReference#transactionhash)
- [transactionIndex](IChainTxReference#transactionindex)
- [transactionNumber](IChainTxReference#transactionnumber)
- [transactionType](IChainTxReference#transactiontype)

## Properties

### blockHeight

• **blockHeight**: `number`

The number of the block where the transaction is.

#### Defined in

[api/chain.ts:193](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/api/chain.ts#L193)

___

### transactionHash

• **transactionHash**: `string`

The hash of the transaction.

#### Defined in

[api/chain.ts:188](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/api/chain.ts#L188)

___

### transactionIndex

• **transactionIndex**: `number`

The index of the transaction inside the block.

#### Defined in

[api/chain.ts:198](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/api/chain.ts#L198)

___

### transactionNumber

• **transactionNumber**: `number`

The number of the transaction.

#### Defined in

[api/chain.ts:183](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/api/chain.ts#L183)

___

### transactionType

• **transactionType**: [`TransactionType`](../enums/TransactionType)

The type of the transaction.

#### Defined in

[api/chain.ts:203](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/api/chain.ts#L203)
