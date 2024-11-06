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

[src/services/chain.ts:84](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/chain.ts#L84)

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

[src/services/chain.ts:149](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/chain.ts#L149)

___

### fetchChainCosts

▸ **fetchChainCosts**(): `Promise`\<[`IChainGetCostsResponse`](../interfaces/IChainGetCostsResponse)\>

Fetches blockchain costs information if needed.

#### Returns

`Promise`\<[`IChainGetCostsResponse`](../interfaces/IChainGetCostsResponse)\>

#### Defined in

[src/services/chain.ts:109](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/chain.ts#L109)

___

### fetchChainData

▸ **fetchChainData**(): `Promise`\<[`ChainData`](../sdk-reference#chaindata)\>

Fetches blockchain information if needed.

#### Returns

`Promise`\<[`ChainData`](../sdk-reference#chaindata)\>

#### Defined in

[src/services/chain.ts:93](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/chain.ts#L93)

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

[src/services/chain.ts:127](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/chain.ts#L127)

___

### txInfo

▸ **txInfo**(`txHash`): `Promise`\<[`Tx`](../interfaces/Tx)\>

Fetches information about a transaction from the blockchain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txHash` | `string` | The transaction hash which we want to retrieve the info from |

#### Returns

`Promise`\<[`Tx`](../interfaces/Tx)\>

The chain transaction

#### Defined in

[src/services/chain.ts:138](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/chain.ts#L138)

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

[src/services/chain.ts:163](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/chain.ts#L163)

## Properties

### chainCosts

• **chainCosts**: [`IChainGetCostsResponse`](../interfaces/IChainGetCostsResponse)

#### Implementation of

ChainServiceProperties.chainCosts

#### Defined in

[src/services/chain.ts:75](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/chain.ts#L75)

___

### chainData

• **chainData**: [`ChainData`](../sdk-reference#chaindata)

#### Implementation of

ChainServiceProperties.chainData

#### Defined in

[src/services/chain.ts:76](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/chain.ts#L76)

___

### txWait

• **txWait**: [`TxWaitOptions`](../sdk-reference#txwaitoptions)

#### Implementation of

ChainServiceProperties.txWait

#### Defined in

[src/services/chain.ts:77](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/chain.ts#L77)

___

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service#url)

#### Defined in

[src/services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/service.ts#L6)
