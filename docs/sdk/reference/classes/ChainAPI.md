[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / ChainAPI

# Class: ChainAPI

## Hierarchy

- `API`

  ↳ **`ChainAPI`**

## Table of contents

### Constructors

- [constructor](ChainAPI.md#constructor)

### Methods

- [blockByHash](ChainAPI.md#blockbyhash)
- [blockByHeight](ChainAPI.md#blockbyheight)
- [blockToDate](ChainAPI.md#blocktodate)
- [blockTransactions](ChainAPI.md#blocktransactions)
- [circuit](ChainAPI.md#circuit)
- [circuits](ChainAPI.md#circuits)
- [costs](ChainAPI.md#costs)
- [dateToBlock](ChainAPI.md#datetoblock)
- [info](ChainAPI.md#info)
- [isApiError](ChainAPI.md#isapierror)
- [isUndefinedError](ChainAPI.md#isundefinederror)
- [organizationCount](ChainAPI.md#organizationcount)
- [organizationList](ChainAPI.md#organizationlist)
- [submitTx](ChainAPI.md#submittx)
- [txInfo](ChainAPI.md#txinfo)
- [txInfoByBlock](ChainAPI.md#txinfobyblock)
- [txList](ChainAPI.md#txlist)
- [validatorsList](ChainAPI.md#validatorslist)

## Constructors

### constructor

• **new ChainAPI**(): [`ChainAPI`](ChainAPI.md)

Cannot be constructed.

#### Returns

[`ChainAPI`](ChainAPI.md)

#### Overrides

API.constructor

#### Defined in

[api/chain.ts:358](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L358)

## Methods

### blockByHash

▸ **blockByHash**(`url`, `hash`): `Promise`\<[`IChainBlockInfoResponse`](../interfaces/IChainBlockInfoResponse.md)\>

Get block information by hash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `hash` | `string` | block hash |

#### Returns

`Promise`\<[`IChainBlockInfoResponse`](../interfaces/IChainBlockInfoResponse.md)\>

#### Defined in

[api/chain.ts:556](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L556)

___

### blockByHeight

▸ **blockByHeight**(`url`, `height`): `Promise`\<[`IChainBlockInfoResponse`](../interfaces/IChainBlockInfoResponse.md)\>

Get block information by height

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `height` | `number` | block height |

#### Returns

`Promise`\<[`IChainBlockInfoResponse`](../interfaces/IChainBlockInfoResponse.md)\>

#### Defined in

[api/chain.ts:529](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L529)

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

[api/chain.ts:600](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L600)

___

### blockTransactions

▸ **blockTransactions**(`url`, `height`, `page?`): `Promise`\<[`IBlockTransactionsResponse`](../interfaces/IBlockTransactionsResponse.md)\>

Get paginated list of transactions registered on specific block

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | API endpoint URL |
| `height` | `number` | `undefined` | block height |
| `page` | `number` | `0` | the page number |

#### Returns

`Promise`\<[`IBlockTransactionsResponse`](../interfaces/IBlockTransactionsResponse.md)\>

#### Defined in

[api/chain.ts:571](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L571)

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

[api/chain.ts:407](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L407)

___

### circuits

▸ **circuits**(`url`): `Promise`\<[`IChainGetCircuitResponse`](../interfaces/IChainGetCircuitResponse.md)\>

Fetches info about the blockchain anonymous circuits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |

#### Returns

`Promise`\<[`IChainGetCircuitResponse`](../interfaces/IChainGetCircuitResponse.md)\>

#### Defined in

[api/chain.ts:394](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L394)

___

### costs

▸ **costs**(`url`): `Promise`\<[`IChainGetCostsResponse`](../interfaces/IChainGetCostsResponse.md)\>

Fetches info about the blockchain costs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |

#### Returns

`Promise`\<[`IChainGetCostsResponse`](../interfaces/IChainGetCostsResponse.md)\>

#### Defined in

[api/chain.ts:381](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L381)

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

[api/chain.ts:586](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L586)

___

### info

▸ **info**(`url`): `Promise`\<[`IChainGetInfoResponse`](../interfaces/IChainGetInfoResponse.md)\>

Fetches info about the blockchain status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |

#### Returns

`Promise`\<[`IChainGetInfoResponse`](../interfaces/IChainGetInfoResponse.md)\>

#### Defined in

[api/chain.ts:368](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L368)

___

### isApiError

▸ **isApiError**(`error`): `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `AxiosError`\<`unknown`, `any`\> |

#### Returns

`never`

#### Inherited from

API.isApiError

#### Defined in

[api/api.ts:21](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/api.ts#L21)

___

### isUndefinedError

▸ **isUndefinedError**(`error`, `message?`): `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `AxiosError`\<`unknown`, `any`\> |
| `message?` | `string` |

#### Returns

`never`

#### Inherited from

API.isUndefinedError

#### Defined in

[api/api.ts:64](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/api.ts#L64)

___

### organizationCount

▸ **organizationCount**(`url`): `Promise`\<[`IChainOrganizationCountResponse`](../interfaces/IChainOrganizationCountResponse.md)\>

Returns the number of organizations

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |

#### Returns

`Promise`\<[`IChainOrganizationCountResponse`](../interfaces/IChainOrganizationCountResponse.md)\>

#### Defined in

[api/chain.ts:488](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L488)

___

### organizationList

▸ **organizationList**(`url`, `page?`, `organizationId?`): `Promise`\<[`IChainOrganizationListResponse`](../interfaces/IChainOrganizationListResponse.md)\>

Returns the list of organizations by page

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | API endpoint URL |
| `page` | `number` | `0` | The page number |
| `organizationId?` | `string` | `undefined` | Organization id or partial id to search. It has to be a valid hex string. |

#### Returns

`Promise`\<[`IChainOrganizationListResponse`](../interfaces/IChainOrganizationListResponse.md)\>

#### Defined in

[api/chain.ts:503](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L503)

___

### submitTx

▸ **submitTx**(`url`, `payload`): `Promise`\<[`IChainSubmitTxResponse`](../interfaces/IChainSubmitTxResponse.md)\>

Submits a transaction to the blockchain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `payload` | `string` | The transaction data payload |

#### Returns

`Promise`\<[`IChainSubmitTxResponse`](../interfaces/IChainSubmitTxResponse.md)\>

#### Defined in

[api/chain.ts:461](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L461)

___

### txInfo

▸ **txInfo**(`url`, `txHash`): `Promise`\<[`IChainTxReference`](../interfaces/IChainTxReference.md)\>

Fetches information about a transaction from the blockchain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `txHash` | `string` | The transaction hash which we want to retrieve the info from |

#### Returns

`Promise`\<[`IChainTxReference`](../interfaces/IChainTxReference.md)\>

#### Defined in

[api/chain.ts:421](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L421)

___

### txInfoByBlock

▸ **txInfoByBlock**(`url`, `blockHeight`, `txIndex`): `Promise`\<[`Tx`](../interfaces/Tx.md)\>

Fetches information about a transaction by its containing block an index on the block.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `blockHeight` | `number` | Block with the containing transaction |
| `txIndex` | `number` | Index on the block |

#### Returns

`Promise`\<[`Tx`](../interfaces/Tx.md)\>

#### Defined in

[api/chain.ts:441](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L441)

___

### txList

▸ **txList**(`url`, `page?`): `Promise`\<[`IChainTxListResponse`](../interfaces/IChainTxListResponse.md)\>

Returns the list of transactions by page

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | {string} url API endpoint URL |
| `page` | `number` | `0` | {number} page The page number |

#### Returns

`Promise`\<[`IChainTxListResponse`](../interfaces/IChainTxListResponse.md)\>

#### Defined in

[api/chain.ts:475](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L475)

___

### validatorsList

▸ **validatorsList**(`url`): `Promise`\<[`IChainValidatorsListResponse`](../interfaces/IChainValidatorsListResponse.md)\>

Returns the list of validators

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |

#### Returns

`Promise`\<[`IChainValidatorsListResponse`](../interfaces/IChainValidatorsListResponse.md)\>

#### Defined in

[api/chain.ts:542](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/chain.ts#L542)