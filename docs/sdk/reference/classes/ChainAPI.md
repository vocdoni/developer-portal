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

[api/chain.ts:543](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain.ts#L543)

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

[api/chain.ts:518](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain.ts#L518)

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

[api/chain.ts:585](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain.ts#L585)

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

[api/chain.ts:557](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain.ts#L557)

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

[api/chain.ts:403](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain.ts#L403)

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

[api/chain.ts:391](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain.ts#L391)

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

[api/chain.ts:379](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain.ts#L379)

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

[api/chain.ts:571](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain.ts#L571)

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

[api/chain.ts:367](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain.ts#L367)

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

[api/chain.ts:479](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain.ts#L479)

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

[api/chain.ts:493](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain.ts#L493)

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

[api/chain.ts:454](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain.ts#L454)

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

[api/chain.ts:416](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain.ts#L416)

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

[api/chain.ts:435](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain.ts#L435)

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

[api/chain.ts:467](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain.ts#L467)

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

[api/chain.ts:530](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain.ts#L530)
