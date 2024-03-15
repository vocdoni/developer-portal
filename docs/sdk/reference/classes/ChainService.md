[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / ChainService

# Class: ChainService

## Hierarchy

- [`Service`](Service.md)

  ↳ **`ChainService`**

## Implements

- `ChainServiceProperties`

## Table of contents

### Constructors

- [constructor](ChainService.md#constructor)

### Properties

- [chainCosts](ChainService.md#chaincosts)
- [chainData](ChainService.md#chaindata)
- [txWait](ChainService.md#txwait)
- [url](ChainService.md#url)

### Methods

- [dateToBlock](ChainService.md#datetoblock)
- [fetchChainCosts](ChainService.md#fetchchaincosts)
- [fetchChainData](ChainService.md#fetchchaindata)
- [submitTx](ChainService.md#submittx)
- [txInfo](ChainService.md#txinfo)
- [waitForTransaction](ChainService.md#waitfortransaction)

## Constructors

### constructor

• **new ChainService**(`params`): [`ChainService`](ChainService.md)

Instantiate the chain service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Partial`\<`ChainServiceParameters`\> | The service parameters |

#### Returns

[`ChainService`](ChainService.md)

#### Overrides

[Service](Service.md).[constructor](Service.md#constructor)

#### Defined in

[services/chain.ts:47](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/chain.ts#L47)

## Properties

### chainCosts

• **chainCosts**: [`IChainGetCostsResponse`](../interfaces/IChainGetCostsResponse.md)

#### Implementation of

ChainServiceProperties.chainCosts

#### Defined in

[services/chain.ts:38](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/chain.ts#L38)

___

### chainData

• **chainData**: [`ChainData`](../modules.md#chaindata)

#### Implementation of

ChainServiceProperties.chainData

#### Defined in

[services/chain.ts:39](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/chain.ts#L39)

___

### txWait

• **txWait**: [`TxWaitOptions`](../modules.md#txwaitoptions)

#### Implementation of

ChainServiceProperties.txWait

#### Defined in

[services/chain.ts:40](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/chain.ts#L40)

___

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service.md#url)

#### Defined in

[services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/service.ts#L6)

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

[services/chain.ts:114](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/chain.ts#L114)

___

### fetchChainCosts

▸ **fetchChainCosts**(): `Promise`\<[`IChainGetCostsResponse`](../interfaces/IChainGetCostsResponse.md)\>

Fetches blockchain costs information if needed.

#### Returns

`Promise`\<[`IChainGetCostsResponse`](../interfaces/IChainGetCostsResponse.md)\>

#### Defined in

[services/chain.ts:74](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/chain.ts#L74)

___

### fetchChainData

▸ **fetchChainData**(): `Promise`\<[`ChainData`](../modules.md#chaindata)\>

Fetches blockchain information if needed.

#### Returns

`Promise`\<[`ChainData`](../modules.md#chaindata)\>

#### Defined in

[services/chain.ts:57](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/chain.ts#L57)

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

[services/chain.ts:92](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/chain.ts#L92)

___

### txInfo

▸ **txInfo**(`txHash`): `Promise`\<[`IChainTxReference`](../interfaces/IChainTxReference.md)\>

Fetches information about a transaction from the blockchain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txHash` | `string` | The transaction hash which we want to retrieve the info from |

#### Returns

`Promise`\<[`IChainTxReference`](../interfaces/IChainTxReference.md)\>

The chain transaction

#### Defined in

[services/chain.ts:103](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/chain.ts#L103)

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

[services/chain.ts:129](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/chain.ts#L129)
