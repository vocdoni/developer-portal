[@vocdoni/sdk](/sdk) / ChainAPI

# Class: ChainAPI

## Hierarchy

- [`API`](API)

  ↳ **`ChainAPI`**

## Table of contents

### Methods

- [blockByHash](ChainAPI#blockbyhash)
- [blockByHeight](ChainAPI#blockbyheight)
- [blockToDate](ChainAPI#blocktodate)
- [circuit](ChainAPI#circuit)
- [circuits](ChainAPI#circuits)
- [costs](ChainAPI#costs)
- [dateToBlock](ChainAPI#datetoblock)
- [feesList](ChainAPI#feeslist)
- [info](ChainAPI#info)
- [organizationList](ChainAPI#organizationlist)
- [submitTx](ChainAPI#submittx)
- [transfers](ChainAPI#transfers)
- [txByIndex](ChainAPI#txbyindex)
- [txCosts](ChainAPI#txcosts)
- [txInfo](ChainAPI#txinfo)
- [txInfoByBlock](ChainAPI#txinfobyblock)
- [txList](ChainAPI#txlist)
- [validatorsList](ChainAPI#validatorslist)

## Methods

### blockByHash

▸ **blockByHash**(`url`, `hash`): `Promise`\<[`IChainBlockInfoResponse`](../interfaces/IChainBlockInfoResponse)\>

Get block information by hash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `hash` | `string` | block hash |

#### Returns

`Promise`\<[`IChainBlockInfoResponse`](../interfaces/IChainBlockInfoResponse)\>

#### Defined in

[src/api/chain.ts:695](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L695)

___

### blockByHeight

▸ **blockByHeight**(`url`, `height`): `Promise`\<[`IChainBlockInfoResponse`](../interfaces/IChainBlockInfoResponse)\>

Get block information by height

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `height` | `number` | block height |

#### Returns

`Promise`\<[`IChainBlockInfoResponse`](../interfaces/IChainBlockInfoResponse)\>

#### Defined in

[src/api/chain.ts:670](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L670)

___

### blockToDate

▸ **blockToDate**(`url`, `height`): `Promise`\<`IBlockToDateResponse`\>

Return approximate date by a given block height.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API URL |
| `height` | `number` | block height to calculate approximate timestamp |

#### Returns

`Promise`\<`IBlockToDateResponse`\>

#### Defined in

[src/api/chain.ts:721](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L721)

___

### circuit

▸ **circuit**(`url`): `Promise`\<`Uint8Array`\>

Fetches a circuit.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | Circuit URL |

#### Returns

`Promise`\<`Uint8Array`\>

#### Defined in

[src/api/chain.ts:504](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L504)

___

### circuits

▸ **circuits**(`url`): `Promise`\<[`IChainGetCircuitResponse`](../interfaces/IChainGetCircuitResponse)\>

Fetches info about the blockchain anonymous circuits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |

#### Returns

`Promise`\<[`IChainGetCircuitResponse`](../interfaces/IChainGetCircuitResponse)\>

#### Defined in

[src/api/chain.ts:492](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L492)

___

### costs

▸ **costs**(`url`): `Promise`\<[`IChainGetCostsResponse`](../interfaces/IChainGetCostsResponse)\>

Fetches info about the blockchain costs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |

#### Returns

`Promise`\<[`IChainGetCostsResponse`](../interfaces/IChainGetCostsResponse)\>

#### Defined in

[src/api/chain.ts:480](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L480)

___

### dateToBlock

▸ **dateToBlock**(`url`, `timeStamp`): `Promise`\<`IDateToBlockResponse`\>

By a given date give the estimate block for the current Vochain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API URL |
| `timeStamp` | `number` | unix format timestamp |

#### Returns

`Promise`\<`IDateToBlockResponse`\>

#### Defined in

[src/api/chain.ts:707](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L707)

___

### feesList

▸ **feesList**(`url`, `params?`): `Promise`\<[`IChainFeesListResponse`](../interfaces/IChainFeesListResponse)\>

Returns the list of fees

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | {string} url API endpoint URL |
| `params?` | `Partial`\<[`FetchFeesParametersWithPagination`](../sdk-reference#fetchfeesparameterswithpagination)\> | The parameters to filter the fees |

#### Returns

`Promise`\<[`IChainFeesListResponse`](../interfaces/IChainFeesListResponse)\>

#### Defined in

[src/api/chain.ts:634](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L634)

___

### info

▸ **info**(`url`): `Promise`\<[`IChainGetInfoResponse`](../interfaces/IChainGetInfoResponse)\>

Fetches info about the blockchain status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |

#### Returns

`Promise`\<[`IChainGetInfoResponse`](../interfaces/IChainGetInfoResponse)\>

#### Defined in

[src/api/chain.ts:468](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L468)

___

### organizationList

▸ **organizationList**(`url`, `params?`): `Promise`\<[`IChainOrganizationListResponse`](../interfaces/IChainOrganizationListResponse)\>

Returns the list of organizations

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `params?` | `Partial`\<[`FetchOrganizationParametersWithPagination`](../sdk-reference#fetchorganizationparameterswithpagination)\> | The parameters to filter the organizations |

#### Returns

`Promise`\<[`IChainOrganizationListResponse`](../interfaces/IChainOrganizationListResponse)\>

#### Defined in

[src/api/chain.ts:651](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L651)

___

### submitTx

▸ **submitTx**(`url`, `payload`): `Promise`\<[`IChainSubmitTxResponse`](../interfaces/IChainSubmitTxResponse)\>

Submits a transaction to the blockchain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `payload` | `string` | The transaction data payload |

#### Returns

`Promise`\<[`IChainSubmitTxResponse`](../interfaces/IChainSubmitTxResponse)\>

#### Defined in

[src/api/chain.ts:587](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L587)

___

### transfers

▸ **transfers**(`url`, `params?`): `Promise`\<[`IChainTransfersListResponse`](../interfaces/IChainTransfersListResponse)\>

Returns the list of transfers

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | {string} url API endpoint URL |
| `params?` | `Partial`\<[`FetchTransfersParametersWithPagination`](../sdk-reference#fetchtransfersparameterswithpagination)\> | The parameters to filter the transfers |

#### Returns

`Promise`\<[`IChainTransfersListResponse`](../interfaces/IChainTransfersListResponse)\>

#### Defined in

[src/api/chain.ts:617](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L617)

___

### txByIndex

▸ **txByIndex**(`url`, `index`): `Promise`\<[`IChainTxReference`](../interfaces/IChainTxReference)\>

Fetches information about a transaction from the blockchain by its index. The transaction index is an incremental
counter for each transaction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `index` | `number` | The transaction index |

#### Returns

`Promise`\<[`IChainTxReference`](../interfaces/IChainTxReference)\>

#### Defined in

[src/api/chain.ts:549](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L549)

___

### txCosts

▸ **txCosts**(`url`): `Promise`\<[`IChainTxCosts`](../interfaces/IChainTxCosts)\>

Returns the list of transactions and its cost

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |

#### Returns

`Promise`\<[`IChainTxCosts`](../interfaces/IChainTxCosts)\>

#### Defined in

[src/api/chain.ts:515](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L515)

___

### txInfo

▸ **txInfo**(`url`, `txHash`): `Promise`\<[`IChainTxReference`](../interfaces/IChainTxReference)\>

Fetches information about a transaction from the blockchain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `txHash` | `string` | The transaction hash which we want to retrieve the info from |

#### Returns

`Promise`\<[`IChainTxReference`](../interfaces/IChainTxReference)\>

#### Defined in

[src/api/chain.ts:530](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L530)

___

### txInfoByBlock

▸ **txInfoByBlock**(`url`, `blockHeight`, `txIndex`): `Promise`\<[`Tx`](../interfaces/Tx)\>

Fetches information about a transaction by its containing block an index on the block.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `blockHeight` | `number` | Block with the containing transaction |
| `txIndex` | `number` | Index on the block |

#### Returns

`Promise`\<[`Tx`](../interfaces/Tx)\>

#### Defined in

[src/api/chain.ts:568](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L568)

___

### txList

▸ **txList**(`url`, `params?`): `Promise`\<[`IChainTxListResponse`](../interfaces/IChainTxListResponse)\>

Returns the list of transactions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | {string} url API endpoint URL |
| `params?` | `Partial`\<[`FetchTransactionsParametersWithPagination`](../sdk-reference#fetchtransactionsparameterswithpagination)\> | The parameters to filter the transactions |

#### Returns

`Promise`\<[`IChainTxListResponse`](../interfaces/IChainTxListResponse)\>

#### Defined in

[src/api/chain.ts:600](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L600)

___

### validatorsList

▸ **validatorsList**(`url`): `Promise`\<[`IChainValidatorsListResponse`](../interfaces/IChainValidatorsListResponse)\>

Returns the list of validators

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |

#### Returns

`Promise`\<[`IChainValidatorsListResponse`](../interfaces/IChainValidatorsListResponse)\>

#### Defined in

[src/api/chain.ts:682](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L682)
