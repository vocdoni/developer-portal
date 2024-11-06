[@vocdoni/sdk](/sdk) / IChainTxReference

# Interface: IChainTxReference

## Table of contents

### Properties

- [hash](IChainTxReference#hash)
- [height](IChainTxReference#height)
- [index](IChainTxReference#index)
- [signer](IChainTxReference#signer)
- [subtype](IChainTxReference#subtype)
- [type](IChainTxReference#type)

## Properties

### hash

• **hash**: `string`

The hash of the transaction.

#### Defined in

[src/api/chain.ts:210](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L210)

___

### height

• **height**: `number`

The number of the block where the transaction is.

#### Defined in

[src/api/chain.ts:215](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L215)

___

### index

• **index**: `number`

The index of the transaction inside the block.

#### Defined in

[src/api/chain.ts:220](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L220)

___

### signer

• **signer**: `string`

The signer of the transaction.

#### Defined in

[src/api/chain.ts:235](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L235)

___

### subtype

• **subtype**: `string`

The subtype of the transaction.

#### Defined in

[src/api/chain.ts:230](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L230)

___

### type

• **type**: [`TransactionType`](../enums/TransactionType)

The type of the transaction.

#### Defined in

[src/api/chain.ts:225](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L225)
