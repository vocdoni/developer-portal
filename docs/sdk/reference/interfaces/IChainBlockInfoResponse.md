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

[src/api/chain.ts:307](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L307)

___

### evidence

• **evidence**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `evidence` | `string`[] |

#### Defined in

[src/api/chain.ts:310](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L310)

___

### hash

• **hash**: `string`

#### Defined in

[src/api/chain.ts:313](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L313)

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

[src/api/chain.ts:314](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L314)

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

[src/api/chain.ts:333](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L333)
