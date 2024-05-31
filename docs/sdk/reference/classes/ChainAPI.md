[@vocdoni/sdk](/sdk) / ChainAPI

# Class: ChainAPI

## Hierarchy

- `API`

  ↳ **`ChainAPI`**

## Table of contents

### Methods

- [blockByHash](ChainAPI#blockbyhash)
- [blockByHeight](ChainAPI#blockbyheight)
- [blockToDate](ChainAPI#blocktodate)
- [blockTransactions](ChainAPI#blocktransactions)
- [circuit](ChainAPI#circuit)
- [circuits](ChainAPI#circuits)
- [costs](ChainAPI#costs)
- [dateToBlock](ChainAPI#datetoblock)
- [feesList](ChainAPI#feeslist)
- [feesListByReference](ChainAPI#feeslistbyreference)
- [feesListByType](ChainAPI#feeslistbytype)
- [info](ChainAPI#info)
- [organizationCount](ChainAPI#organizationcount)
- [organizationList](ChainAPI#organizationlist)
- [submitTx](ChainAPI#submittx)
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

[api/chain.ts:630](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L630)

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

[api/chain.ts:605](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L605)

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

[api/chain.ts:672](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L672)

___

### blockTransactions

▸ **blockTransactions**(`url`, `height`, `page?`): `Promise`\<[`IBlockTransactionsResponse`](../interfaces/IBlockTransactionsResponse)\>

Get paginated list of transactions registered on specific block

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | API endpoint URL |
| `height` | `number` | `undefined` | block height |
| `page` | `number` | `0` | the page number |

#### Returns

`Promise`\<[`IBlockTransactionsResponse`](../interfaces/IBlockTransactionsResponse)\>

#### Defined in

[api/chain.ts:644](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L644)

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

[api/chain.ts:445](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L445)

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

[api/chain.ts:433](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L433)

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

[api/chain.ts:421](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L421)

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

[api/chain.ts:658](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L658)

___

### feesList

▸ **feesList**(`url`, `page?`): `Promise`\<[`IChainFeesListResponse`](../interfaces/IChainFeesListResponse)\>

Returns the list of fees by page

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | {string} url API endpoint URL |
| `page` | `number` | `0` | {number} page The page number |

#### Returns

`Promise`\<[`IChainFeesListResponse`](../interfaces/IChainFeesListResponse)\>

#### Defined in

[api/chain.ts:522](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L522)

___

### feesListByReference

▸ **feesListByReference**(`url`, `reference`, `page?`): `Promise`\<[`IChainFeesListResponse`](../interfaces/IChainFeesListResponse)\>

Returns the list of fees by reference

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | {string} url API endpoint URL |
| `reference` | `string` | `undefined` | {string} reference The reference |
| `page` | `number` | `0` | {number} page The page number |

#### Returns

`Promise`\<[`IChainFeesListResponse`](../interfaces/IChainFeesListResponse)\>

#### Defined in

[api/chain.ts:536](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L536)

___

### feesListByType

▸ **feesListByType**(`url`, `type`, `page?`): `Promise`\<[`IChainFeesListResponse`](../interfaces/IChainFeesListResponse)\>

Returns the list of fees by type

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | {string} url API endpoint URL |
| `type` | `string` | `undefined` | {string} type The type of the fee |
| `page` | `number` | `0` | {number} page The page number |

#### Returns

`Promise`\<[`IChainFeesListResponse`](../interfaces/IChainFeesListResponse)\>

#### Defined in

[api/chain.ts:552](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L552)

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

[api/chain.ts:409](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L409)

___

### organizationCount

▸ **organizationCount**(`url`): `Promise`\<[`IChainOrganizationCountResponse`](../interfaces/IChainOrganizationCountResponse)\>

Returns the number of organizations

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |

#### Returns

`Promise`\<[`IChainOrganizationCountResponse`](../interfaces/IChainOrganizationCountResponse)\>

#### Defined in

[api/chain.ts:566](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L566)

___

### organizationList

▸ **organizationList**(`url`, `page?`, `organizationId?`): `Promise`\<[`IChainOrganizationListResponse`](../interfaces/IChainOrganizationListResponse)\>

Returns the list of organizations by page

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | API endpoint URL |
| `page` | `number` | `0` | The page number |
| `organizationId?` | `string` | `undefined` | Organization id or partial id to search. It has to be a valid hex string. |

#### Returns

`Promise`\<[`IChainOrganizationListResponse`](../interfaces/IChainOrganizationListResponse)\>

#### Defined in

[api/chain.ts:580](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L580)

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

[api/chain.ts:496](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L496)

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

[api/chain.ts:458](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L458)

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

[api/chain.ts:477](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L477)

___

### txList

▸ **txList**(`url`, `page?`): `Promise`\<[`IChainTxListResponse`](../interfaces/IChainTxListResponse)\>

Returns the list of transactions by page

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | {string} url API endpoint URL |
| `page` | `number` | `0` | {number} page The page number |

#### Returns

`Promise`\<[`IChainTxListResponse`](../interfaces/IChainTxListResponse)\>

#### Defined in

[api/chain.ts:509](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L509)

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

[api/chain.ts:617](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/chain.ts#L617)
