[@vocdoni/sdk](/sdk) / [Exports](../modules) / Tx

# Interface: Tx

## Table of contents

### Properties

- [tx](Tx#tx)
- [txInfo](Tx#txinfo)

## Properties

### tx

• `Optional` **tx**: \{ `$case`: ``"vote"`` ; `vote`: [`VoteEnvelope`](VoteEnvelope.md)  } \| \{ `$case`: ``"newProcess"`` ; `newProcess`: [`NewProcessTx`](NewProcessTx.md)  } \| \{ `$case`: ``"admin"`` ; `admin`: [`AdminTx`](AdminTx.md)  } \| \{ `$case`: ``"setProcess"`` ; `setProcess`: [`SetProcessTx`](SetProcessTx.md)  } \| \{ `$case`: ``"registerKey"`` ; `registerKey`: [`RegisterKeyTx`](RegisterKeyTx.md)  } \| \{ `$case`: ``"mintTokens"`` ; `mintTokens`: [`MintTokensTx`](MintTokensTx.md)  } \| \{ `$case`: ``"sendTokens"`` ; `sendTokens`: [`SendTokensTx`](SendTokensTx.md)  } \| \{ `$case`: ``"setTransactionCosts"`` ; `setTransactionCosts`: [`SetTransactionCostsTx`](SetTransactionCostsTx.md)  } \| \{ `$case`: ``"setAccount"`` ; `setAccountInfo`: [`SetAccountTx`](SetAccountTx.md)  } \| \{ `$case`: ``"collectFaucet"`` ; `collectFaucet`: [`CollectFaucetTx`](CollectFaucetTx)  }

#### Defined in

[api/chain/transactions.ts:4](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/chain/transactions.ts#L4)

___

### txInfo

• **txInfo**: [`IChainTxReference`](IChainTxReference)

#### Defined in

[api/chain/transactions.ts:53](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/chain/transactions.ts#L53)
