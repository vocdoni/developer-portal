[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / ElectionService

# Class: ElectionService

## Hierarchy

- [`Service`](Service.md)

  ↳ **`ElectionService`**

## Implements

- `ElectionServiceProperties`

## Table of contents

### Constructors

- [constructor](ElectionService.md#constructor)

### Properties

- [censusService](ElectionService.md#censusservice)
- [chainService](ElectionService.md#chainservice)
- [url](ElectionService.md#url)

### Methods

- [buildCensus](ElectionService.md#buildcensus)
- [buildPublishedCensus](ElectionService.md#buildpublishedcensus)
- [calculateChoiceResults](ElectionService.md#calculatechoiceresults)
- [calculateElectionCost](ElectionService.md#calculateelectioncost)
- [calculateMultichoiceAbstains](ElectionService.md#calculatemultichoiceabstains)
- [create](ElectionService.md#create)
- [estimateElectionCost](ElectionService.md#estimateelectioncost)
- [fetchElection](ElectionService.md#fetchelection)
- [fetchElections](ElectionService.md#fetchelections)
- [getElectionSalt](ElectionService.md#getelectionsalt)
- [getNumericElectionId](ElectionService.md#getnumericelectionid)
- [keys](ElectionService.md#keys)
- [nextElectionId](ElectionService.md#nextelectionid)
- [signTransaction](ElectionService.md#signtransaction)

## Constructors

### constructor

• **new ElectionService**(`params`): [`ElectionService`](ElectionService.md)

Instantiate the election service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Partial`\<`ElectionServiceParameters`\> | The service parameters |

#### Returns

[`ElectionService`](ElectionService.md)

#### Overrides

[Service](Service.md).[constructor](Service.md#constructor)

#### Defined in

[services/election.ts:69](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/election.ts#L69)

## Properties

### censusService

• **censusService**: [`CensusService`](CensusService.md)

#### Implementation of

ElectionServiceProperties.censusService

#### Defined in

[services/election.ts:61](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/election.ts#L61)

___

### chainService

• **chainService**: [`ChainService`](ChainService.md)

#### Implementation of

ElectionServiceProperties.chainService

#### Defined in

[services/election.ts:62](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/election.ts#L62)

___

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service.md#url)

#### Defined in

[services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/service.ts#L6)

## Methods

### buildCensus

▸ **buildCensus**(`electionInfo`): `Promise`\<[`PublishedCensus`](PublishedCensus.md) \| `ArchivedCensus`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `electionInfo` | `any` |

#### Returns

`Promise`\<[`PublishedCensus`](PublishedCensus.md) \| `ArchivedCensus`\>

#### Defined in

[services/election.ts:100](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/election.ts#L100)

___

### buildPublishedCensus

▸ **buildPublishedCensus**(`electionInfo`): `Promise`\<[`PublishedCensus`](PublishedCensus.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `electionInfo` | `any` |

#### Returns

`Promise`\<[`PublishedCensus`](PublishedCensus.md)\>

#### Defined in

[services/election.ts:84](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/election.ts#L84)

___

### calculateChoiceResults

▸ **calculateChoiceResults**(`electionType`, `result`, `qIndex`, `cIndex`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `electionType` | `any` |
| `result` | `any` |
| `qIndex` | `any` |
| `cIndex` | `any` |

#### Returns

`any`

#### Defined in

[services/election.ts:180](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/election.ts#L180)

___

### calculateElectionCost

▸ **calculateElectionCost**(`election`): `Promise`\<`number`\>

Calculate the election cost

#### Parameters

| Name | Type |
| :------ | :------ |
| `election` | [`UnpublishedElection`](UnpublishedElection.md) |

#### Returns

`Promise`\<`number`\>

The cost in tokens.

#### Defined in

[services/election.ts:338](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/election.ts#L338)

___

### calculateMultichoiceAbstains

▸ **calculateMultichoiceAbstains**(`electionType`, `result`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `electionType` | `any` |
| `result` | `any` |

#### Returns

`string`

#### Defined in

[services/election.ts:203](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/election.ts#L203)

___

### create

▸ **create**(`payload`, `metadata`): `Promise`\<[`IElectionCreateResponse`](../interfaces/IElectionCreateResponse.md)\>

Creates a new election.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `payload` | `string` | The set information info raw payload to be submitted to the chain |
| `metadata` | `string` | The base64 encoded metadata JSON object |

#### Returns

`Promise`\<[`IElectionCreateResponse`](../interfaces/IElectionCreateResponse.md)\>

The created election information

#### Defined in

[services/election.ts:257](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/election.ts#L257)

___

### estimateElectionCost

▸ **estimateElectionCost**(`election`): `Promise`\<`number`\>

Estimates the election cost

#### Parameters

| Name | Type |
| :------ | :------ |
| `election` | [`UnpublishedElection`](UnpublishedElection.md) |

#### Returns

`Promise`\<`number`\>

The cost in tokens.

#### Defined in

[services/election.ts:325](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/election.ts#L325)

___

### fetchElection

▸ **fetchElection**(`electionId`): `Promise`\<[`PublishedElection`](PublishedElection.md) \| [`ArchivedElection`](ArchivedElection.md)\>

Fetches info about an election.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `electionId` | `string` | The id of the election |

#### Returns

`Promise`\<[`PublishedElection`](PublishedElection.md) \| [`ArchivedElection`](ArchivedElection.md)\>

#### Defined in

[services/election.ts:115](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/election.ts#L115)

___

### fetchElections

▸ **fetchElections**(`params`): `Promise`\<([`PublishedElection`](PublishedElection.md) \| [`ArchivedElection`](ArchivedElection.md) \| [`InvalidElection`](InvalidElection.md))[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Partial`\<[`FetchElectionsParameters`](../interfaces/FetchElectionsParameters.md)\> |

#### Returns

`Promise`\<([`PublishedElection`](PublishedElection.md) \| [`ArchivedElection`](ArchivedElection.md) \| [`InvalidElection`](InvalidElection.md))[]\>

#### Defined in

[services/election.ts:222](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/election.ts#L222)

___

### getElectionSalt

▸ **getElectionSalt**(`address`, `electionCount`): `Promise`\<`string`\>

Returns an election salt for address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address of the account |
| `electionCount` | `number` | The election count |

#### Returns

`Promise`\<`string`\>

The election salt

#### Defined in

[services/election.ts:288](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/election.ts#L288)

___

### getNumericElectionId

▸ **getNumericElectionId**(`electionId`): `number`

Returns a numeric election identifier

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `electionId` | `string` | The identifier of the election |

#### Returns

`number`

The numeric identifier

#### Defined in

[services/election.ts:302](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/election.ts#L302)

___

### keys

▸ **keys**(`electionId`): `Promise`\<[`IElectionKeysResponse`](../interfaces/IElectionKeysResponse.md)\>

Fetches the encryption keys from the specified process.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `electionId` | `string` | The identifier of the election |

#### Returns

`Promise`\<[`IElectionKeysResponse`](../interfaces/IElectionKeysResponse.md)\>

#### Defined in

[services/election.ts:315](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/election.ts#L315)

___

### nextElectionId

▸ **nextElectionId**(`address`, `election`): `Promise`\<`string`\>

Returns the next election id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address of the account |
| `election` | [`UnpublishedElection`](UnpublishedElection.md) | The unpublished election |

#### Returns

`Promise`\<`string`\>

The next election identifier

#### Defined in

[services/election.ts:269](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/election.ts#L269)

___

### signTransaction

▸ **signTransaction**(`tx`, `message`, `walletOrSigner`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Uint8Array` |
| `message` | `string` |
| `walletOrSigner` | `Wallet` \| `Signer` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[services/election.ts:74](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/election.ts#L74)
