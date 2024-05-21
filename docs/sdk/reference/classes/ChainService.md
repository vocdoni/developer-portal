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

[services/chain.ts:47](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/chain.ts#L47)

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

[services/chain.ts:112](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/chain.ts#L112)

___

### fetchChainCosts

▸ **fetchChainCosts**(): `Promise`\<[`IChainGetCostsResponse`](../interfaces/IChainGetCostsResponse)\>

Fetches blockchain costs information if needed.

#### Returns

`Promise`\<[`IChainGetCostsResponse`](../interfaces/IChainGetCostsResponse)\>

#### Defined in

[services/chain.ts:72](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/chain.ts#L72)

___

### fetchChainData

▸ **fetchChainData**(): `Promise`\<[`ChainData`](../sdk-reference#chaindata)\>

Fetches blockchain information if needed.

#### Returns

`Promise`\<[`ChainData`](../sdk-reference#chaindata)\>

#### Defined in

[services/chain.ts:56](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/chain.ts#L56)

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

[services/chain.ts:90](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/chain.ts#L90)

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

[services/chain.ts:101](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/chain.ts#L101)

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

[services/chain.ts:126](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/chain.ts#L126)

## Properties

### chainCosts

• **chainCosts**: [`IChainGetCostsResponse`](../interfaces/IChainGetCostsResponse)

#### Implementation of

ChainServiceProperties.chainCosts

#### Defined in

[services/chain.ts:38](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/chain.ts#L38)

___

### chainData

• **chainData**: [`ChainData`](../sdk-reference#chaindata)

#### Implementation of

ChainServiceProperties.chainData

#### Defined in

[services/chain.ts:39](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/chain.ts#L39)

___

### txWait

• **txWait**: [`TxWaitOptions`](../sdk-reference#txwaitoptions)

#### Implementation of

ChainServiceProperties.txWait

#### Defined in

[services/chain.ts:40](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/chain.ts#L40)

___

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service#url)

#### Defined in

[services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/service.ts#L6)
