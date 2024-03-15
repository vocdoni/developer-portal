[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / IChainGetInfoResponse

# Interface: IChainGetInfoResponse

## Table of contents

### Properties

- [blockTime](IChainGetInfoResponse.md#blocktime)
- [blockTimestamp](IChainGetInfoResponse.md#blocktimestamp)
- [chainId](IChainGetInfoResponse.md#chainid)
- [circuitConfigurationTag](IChainGetInfoResponse.md#circuitconfigurationtag)
- [electionCount](IChainGetInfoResponse.md#electioncount)
- [genesisTime](IChainGetInfoResponse.md#genesistime)
- [height](IChainGetInfoResponse.md#height)
- [maxCensusSize](IChainGetInfoResponse.md#maxcensussize)
- [organizationCount](IChainGetInfoResponse.md#organizationcount)
- [syncing](IChainGetInfoResponse.md#syncing)
- [transactionCount](IChainGetInfoResponse.md#transactioncount)
- [validatorCount](IChainGetInfoResponse.md#validatorcount)
- [voteCount](IChainGetInfoResponse.md#votecount)

## Properties

### blockTime

• **blockTime**: `number`[]

The different block times from the chain.

#### Defined in

[api/chain.ts:35](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L35)

___

### blockTimestamp

• **blockTimestamp**: `number`

The timestamp of the actual block.

#### Defined in

[api/chain.ts:65](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L65)

___

### chainId

• **chainId**: `string`

The id of the current chain

#### Defined in

[api/chain.ts:30](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L30)

___

### circuitConfigurationTag

• **circuitConfigurationTag**: `string`

The circuit configuration tag.

#### Defined in

[api/chain.ts:85](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L85)

___

### electionCount

• **electionCount**: `number`

The number of elections existing on the Vochain.

#### Defined in

[api/chain.ts:40](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L40)

___

### genesisTime

• **genesisTime**: `string`

The time of the genesis block.

#### Defined in

[api/chain.ts:50](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L50)

___

### height

• **height**: `number`

The height or actual block of the current chain.

#### Defined in

[api/chain.ts:55](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L55)

___

### maxCensusSize

• **maxCensusSize**: `number`

The maximum size of a census.

#### Defined in

[api/chain.ts:90](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L90)

___

### organizationCount

• **organizationCount**: `number`

The number of organizations existing on the Vochain.

#### Defined in

[api/chain.ts:45](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L45)

___

### syncing

• **syncing**: `boolean`

Whether the blockchain is syncing.

#### Defined in

[api/chain.ts:60](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L60)

___

### transactionCount

• **transactionCount**: `number`

The number of transactions.

#### Defined in

[api/chain.ts:70](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L70)

___

### validatorCount

• **validatorCount**: `number`

The number of validators.

#### Defined in

[api/chain.ts:75](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L75)

___

### voteCount

• **voteCount**: `number`

The number of votes.

#### Defined in

[api/chain.ts:80](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L80)
