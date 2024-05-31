[@vocdoni/sdk](/sdk) / IChainBlockInfoResponse

# Interface: IChainBlockInfoResponse

## Table of contents

### Properties

- [data](IChainBlockInfoResponse#data)
- [evidence](IChainBlockInfoResponse#evidence)
- [hash](IChainBlockInfoResponse#hash)
- [header](IChainBlockInfoResponse#header)
- [lastCommit](IChainBlockInfoResponse#lastcommit)

## Properties

### data

• **data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `txs` | `string`[] |

#### Defined in

[api/chain.ts:275](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L275)

___

### evidence

• **evidence**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `evidence` | `string`[] |

#### Defined in

[api/chain.ts:278](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L278)

___

### hash

• **hash**: `string`

#### Defined in

[api/chain.ts:281](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L281)

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

[api/chain.ts:282](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L282)

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

[api/chain.ts:301](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L301)
