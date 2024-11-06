[@vocdoni/sdk](/sdk) / IChainGetInfoResponse

# Interface: IChainGetInfoResponse

## Table of contents

### Properties

- [blockTime](IChainGetInfoResponse#blocktime)
- [blockTimestamp](IChainGetInfoResponse#blocktimestamp)
- [chainId](IChainGetInfoResponse#chainid)
- [circuitConfigurationTag](IChainGetInfoResponse#circuitconfigurationtag)
- [electionCount](IChainGetInfoResponse#electioncount)
- [genesisTime](IChainGetInfoResponse#genesistime)
- [height](IChainGetInfoResponse#height)
- [maxCensusSize](IChainGetInfoResponse#maxcensussize)
- [organizationCount](IChainGetInfoResponse#organizationcount)
- [syncing](IChainGetInfoResponse#syncing)
- [transactionCount](IChainGetInfoResponse#transactioncount)
- [validatorCount](IChainGetInfoResponse#validatorcount)
- [voteCount](IChainGetInfoResponse#votecount)

## Properties

### blockTime

• **blockTime**: `number`[]

The different block times from the chain.

#### Defined in

[src/api/chain.ts:42](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L42)

___

### blockTimestamp

• **blockTimestamp**: `number`

The timestamp of the actual block.

#### Defined in

[src/api/chain.ts:72](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L72)

___

### chainId

• **chainId**: `string`

The id of the current chain

#### Defined in

[src/api/chain.ts:37](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L37)

___

### circuitConfigurationTag

• **circuitConfigurationTag**: `string`

The circuit configuration tag.

#### Defined in

[src/api/chain.ts:92](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L92)

___

### electionCount

• **electionCount**: `number`

The number of elections existing on the Vochain.

#### Defined in

[src/api/chain.ts:47](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L47)

___

### genesisTime

• **genesisTime**: `string`

The time of the genesis block.

#### Defined in

[src/api/chain.ts:57](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L57)

___

### height

• **height**: `number`

The height or actual block of the current chain.

#### Defined in

[src/api/chain.ts:62](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L62)

___

### maxCensusSize

• **maxCensusSize**: `number`

The maximum size of a census.

#### Defined in

[src/api/chain.ts:97](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L97)

___

### organizationCount

• **organizationCount**: `number`

The number of organizations existing on the Vochain.

#### Defined in

[src/api/chain.ts:52](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L52)

___

### syncing

• **syncing**: `boolean`

Whether the blockchain is syncing.

#### Defined in

[src/api/chain.ts:67](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L67)

___

### transactionCount

• **transactionCount**: `number`

The number of transactions.

#### Defined in

[src/api/chain.ts:77](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L77)

___

### validatorCount

• **validatorCount**: `number`

The number of validators.

#### Defined in

[src/api/chain.ts:82](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L82)

___

### voteCount

• **voteCount**: `number`

The number of votes.

#### Defined in

[src/api/chain.ts:87](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L87)
