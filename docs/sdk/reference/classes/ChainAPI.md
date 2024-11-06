[@vocdoni/sdk](/sdk) / ChainAPI

# Class: ChainAPI

## Hierarchy

- [`API`](API)

  ↳ **`ChainAPI`**

## Table of contents

### Methods

- [blockInfoHash](ChainAPI#blockinfohash)
- [blockInfoHeight](ChainAPI#blockinfoheight)
- [blockToDate](ChainAPI#blocktodate)
- [blocksList](ChainAPI#blockslist)
- [circuit](ChainAPI#circuit)
- [circuits](ChainAPI#circuits)
- [costs](ChainAPI#costs)
- [dateToBlock](ChainAPI#datetoblock)
- [feesList](ChainAPI#feeslist)
- [info](ChainAPI#info)
- [organizationList](ChainAPI#organizationlist)
- [submitTx](ChainAPI#submittx)
- [transfers](ChainAPI#transfers)
- [txCosts](ChainAPI#txcosts)
- [txInfo](ChainAPI#txinfo)
- [txList](ChainAPI#txlist)
- [validatorsList](ChainAPI#validatorslist)

## Methods

### blockInfoHash

▸ **blockInfoHash**(`url`, `hash`): `Promise`\<[`IChainBlockInfoResponse`](../interfaces/IChainBlockInfoResponse)\>

Get block information by hash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `hash` | `string` | block hash |

#### Returns

`Promise`\<[`IChainBlockInfoResponse`](../interfaces/IChainBlockInfoResponse)\>

#### Defined in

[src/api/chain.ts:645](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L645)

___

### blockInfoHeight

▸ **blockInfoHeight**(`url`, `height`): `Promise`\<[`IChainBlockInfoResponse`](../interfaces/IChainBlockInfoResponse)\>

Get block information by height

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `height` | `number` | block height |

#### Returns

`Promise`\<[`IChainBlockInfoResponse`](../interfaces/IChainBlockInfoResponse)\>

#### Defined in

[src/api/chain.ts:658](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L658)

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

[src/api/chain.ts:701](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L701)

___

### blocksList

▸ **blocksList**(`url`, `params?`): `Promise`\<[`IChainBlocksListResponse`](../interfaces/IChainBlocksListResponse)\>

Returns the list of blocks

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | {string} url API endpoint URL |
| `params?` | `Partial`\<[`FetchBlocksParametersWithPagination`](../sdk-reference#fetchblocksparameterswithpagination)\> | The parameters to filter the blocks |

#### Returns

`Promise`\<[`IChainBlocksListResponse`](../interfaces/IChainBlocksListResponse)\>

#### Defined in

[src/api/chain.ts:671](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L671)

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

[src/api/chain.ts:506](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L506)

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

[src/api/chain.ts:494](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L494)

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

[src/api/chain.ts:482](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L482)

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

[src/api/chain.ts:687](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L687)

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

[src/api/chain.ts:597](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L597)

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

[src/api/chain.ts:470](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L470)

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

[src/api/chain.ts:614](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L614)

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

[src/api/chain.ts:550](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L550)

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

[src/api/chain.ts:580](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L580)

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

[src/api/chain.ts:517](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L517)

___

### txInfo

▸ **txInfo**(`url`, `txHash`): `Promise`\<[`Tx`](../interfaces/Tx)\>

Fetches information about a transaction from the blockchain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `txHash` | `string` | The transaction hash which we want to retrieve the info from |

#### Returns

`Promise`\<[`Tx`](../interfaces/Tx)\>

#### Defined in

[src/api/chain.ts:532](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L532)

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

[src/api/chain.ts:563](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L563)

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

[src/api/chain.ts:632](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L632)
