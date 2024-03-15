[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / IChainBlockInfoResponse

# Interface: IChainBlockInfoResponse

## Table of contents

### Properties

- [data](IChainBlockInfoResponse.md#data)
- [evidence](IChainBlockInfoResponse.md#evidence)
- [hash](IChainBlockInfoResponse.md#hash)
- [header](IChainBlockInfoResponse.md#header)
- [lastCommit](IChainBlockInfoResponse.md#lastcommit)

## Properties

### data

• **data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `txs` | `string`[] |

#### Defined in

[api/chain.ts:272](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L272)

___

### evidence

• **evidence**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `evidence` | `string`[] |

#### Defined in

[api/chain.ts:275](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L275)

___

### hash

• **hash**: `string`

#### Defined in

[api/chain.ts:278](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L278)

___

### header

• **header**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `appHash` | `string` |
| `chainId` | `string` |
| `consensusHash` | `string` |
| `dataHash` | `string` |
| `evidenceHash` | `string` |
| `height` | `number` |
| `lastBlockId` | `BlockID` |
| `lastCommitHash` | `string` |
| `lastResultsHash` | `string` |
| `nextValidatorsHash` | `string` |
| `proposerAddress` | `string` |
| `time` | `string` |
| `validatorsHash` | `string` |
| `version` | \{ `app`: `number` ; `block`: `number`  } |
| `version.app` | `number` |
| `version.block` | `number` |

#### Defined in

[api/chain.ts:279](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L279)

___

### lastCommit

• **lastCommit**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blockId` | `BlockID` |
| `height` | `number` |
| `round` | `number` |
| `signatures` | \{ `blockIdFlag`: `number` ; `signature`: `string` ; `timestamp`: `string` ; `validatorAddress`: `string`  }[] |

#### Defined in

[api/chain.ts:298](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L298)
