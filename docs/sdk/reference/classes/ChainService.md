[@vocdoni/sdk](/sdk) / ChainService

# Class: ChainService

## Hierarchy

- [`Service`](Service)

  ↳ **`ChainService`**

## Implements

- `ChainServiceProperties`

## Table of contents

### Constructors

- [constructor](ChainService#constructor)

### Methods

- [dateToBlock](ChainService#datetoblock)
- [fetchChainCosts](ChainService#fetchchaincosts)
- [fetchChainData](ChainService#fetchchaindata)
- [submitTx](ChainService#submittx)
- [txInfo](ChainService#txinfo)
- [waitForTransaction](ChainService#waitfortransaction)

### Properties

- [chainCosts](ChainService#chaincosts)
- [chainData](ChainService#chaindata)
- [txWait](ChainService#txwait)
- [url](ChainService#url)

## Constructors

### constructor

• **new ChainService**(`params`): [`ChainService`](ChainService)

Instantiate the chain service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Partial`\<`ChainServiceParameters`\> | The service parameters |

#### Returns

[`ChainService`](ChainService)

#### Overrides

Service.constructor

#### Defined in

[src/services/chain.ts:72](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/services/chain.ts#L72)

## Methods

### dateToBlock

▸ **dateToBlock**(`date`): `Promise`\<`number`\>

Returns the block number for a given date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `Date` | The date which we want to retrieve the block number from |

#### Returns

`Promise`\<`number`\>

The block number

#### Defined in

[src/services/chain.ts:137](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/services/chain.ts#L137)

___

### fetchChainCosts

▸ **fetchChainCosts**(): `Promise`\<[`IChainGetCostsResponse`](../interfaces/IChainGetCostsResponse)\>

Fetches blockchain costs information if needed.

#### Returns

`Promise`\<[`IChainGetCostsResponse`](../interfaces/IChainGetCostsResponse)\>

#### Defined in

[src/services/chain.ts:97](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/services/chain.ts#L97)

___

### fetchChainData

▸ **fetchChainData**(): `Promise`\<[`ChainData`](../sdk-reference#chaindata)\>

Fetches blockchain information if needed.

#### Returns

`Promise`\<[`ChainData`](../sdk-reference#chaindata)\>

#### Defined in

[src/services/chain.ts:81](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/services/chain.ts#L81)

___

### submitTx

▸ **submitTx**(`payload`): `Promise`\<`string`\>

Submits a transaction to the blockchain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `payload` | `string` | The transaction data payload |

#### Returns

`Promise`\<`string`\>

The transaction hash

#### Defined in

[src/services/chain.ts:115](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/services/chain.ts#L115)

___

### txInfo

▸ **txInfo**(`txHash`): `Promise`\<[`IChainTxReference`](../interfaces/IChainTxReference)\>

Fetches information about a transaction from the blockchain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txHash` | `string` | The transaction hash which we want to retrieve the info from |

#### Returns

`Promise`\<[`IChainTxReference`](../interfaces/IChainTxReference)\>

The chain transaction

#### Defined in

[src/services/chain.ts:126](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/services/chain.ts#L126)

___

### waitForTransaction

▸ **waitForTransaction**(`tx`, `wait?`, `attempts?`): `Promise`\<`void`\>

A convenience method to wait for a transaction to be executed. It will
loop trying to get the transaction information, and will retry every time
it fails.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tx` | `string` | Transaction to wait for |
| `wait?` | `number` | The delay in milliseconds between tries |
| `attempts?` | `number` | The attempts to try before failing |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/services/chain.ts:151](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/services/chain.ts#L151)

## Properties

### chainCosts

• **chainCosts**: [`IChainGetCostsResponse`](../interfaces/IChainGetCostsResponse)

#### Implementation of

ChainServiceProperties.chainCosts

#### Defined in

[src/services/chain.ts:63](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/services/chain.ts#L63)

___

### chainData

• **chainData**: [`ChainData`](../sdk-reference#chaindata)

#### Implementation of

ChainServiceProperties.chainData

#### Defined in

[src/services/chain.ts:64](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/services/chain.ts#L64)

___

### txWait

• **txWait**: [`TxWaitOptions`](../sdk-reference#txwaitoptions)

#### Implementation of

ChainServiceProperties.txWait

#### Defined in

[src/services/chain.ts:65](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/services/chain.ts#L65)

___

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service#url)

#### Defined in

[src/services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/services/service.ts#L6)
