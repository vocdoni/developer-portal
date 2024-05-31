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

[api/chain.ts:38](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L38)

___

### blockTimestamp

• **blockTimestamp**: `number`

The timestamp of the actual block.

#### Defined in

[api/chain.ts:68](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L68)

___

### chainId

• **chainId**: `string`

The id of the current chain

#### Defined in

[api/chain.ts:33](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L33)

___

### circuitConfigurationTag

• **circuitConfigurationTag**: `string`

The circuit configuration tag.

#### Defined in

[api/chain.ts:88](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L88)

___

### electionCount

• **electionCount**: `number`

The number of elections existing on the Vochain.

#### Defined in

[api/chain.ts:43](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L43)

___

### genesisTime

• **genesisTime**: `string`

The time of the genesis block.

#### Defined in

[api/chain.ts:53](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L53)

___

### height

• **height**: `number`

The height or actual block of the current chain.

#### Defined in

[api/chain.ts:58](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L58)

___

### maxCensusSize

• **maxCensusSize**: `number`

The maximum size of a census.

#### Defined in

[api/chain.ts:93](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L93)

___

### organizationCount

• **organizationCount**: `number`

The number of organizations existing on the Vochain.

#### Defined in

[api/chain.ts:48](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L48)

___

### syncing

• **syncing**: `boolean`

Whether the blockchain is syncing.

#### Defined in

[api/chain.ts:63](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L63)

___

### transactionCount

• **transactionCount**: `number`

The number of transactions.

#### Defined in

[api/chain.ts:73](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L73)

___

### validatorCount

• **validatorCount**: `number`

The number of validators.

#### Defined in

[api/chain.ts:78](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L78)

___

### voteCount

• **voteCount**: `number`

The number of votes.

#### Defined in

[api/chain.ts:83](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L83)
