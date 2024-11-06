[@vocdoni/sdk](/sdk) / IChainBlockInfoResponse

# Interface: IChainBlockInfoResponse

## Table of contents

### Properties

- [hash](IChainBlockInfoResponse#hash)
- [header](IChainBlockInfoResponse#header)
- [txCount](IChainBlockInfoResponse#txcount)

## Properties

### hash

• **hash**: `string`

#### Defined in

[src/api/chain.ts:331](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L331)

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

[src/api/chain.ts:332](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L332)

___

### txCount

• **txCount**: `number`

#### Defined in

[src/api/chain.ts:351](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L351)
