[@vocdoni/sdk](/sdk) / ElectionService

# Class: ElectionService

## Hierarchy

- [`Service`](Service)

  ↳ **`ElectionService`**

## Implements

- `ElectionServiceProperties`

## Table of contents

### Constructors

- [constructor](ElectionService#constructor)

### Methods

- [calculateElectionCost](ElectionService#calculateelectioncost)
- [create](ElectionService#create)
- [estimateElectionCost](ElectionService#estimateelectioncost)
- [fetchElection](ElectionService#fetchelection)
- [fetchElections](ElectionService#fetchelections)
- [getElectionSalt](ElectionService#getelectionsalt)
- [getNumericElectionId](ElectionService#getnumericelectionid)
- [keys](ElectionService#keys)
- [nextElectionId](ElectionService#nextelectionid)
- [signTransaction](ElectionService#signtransaction)

### Properties

- [censusService](ElectionService#censusservice)
- [chainService](ElectionService#chainservice)
- [url](ElectionService#url)

## Constructors

### constructor

• **new ElectionService**(`params`): [`ElectionService`](ElectionService)

Instantiate the election service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Partial`\<`ElectionServiceParameters`\> | The service parameters |

#### Returns

[`ElectionService`](ElectionService)

#### Overrides

Service.constructor

#### Defined in

[services/election.ts:69](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/services/election.ts#L69)

## Methods

### calculateElectionCost

▸ **calculateElectionCost**(`election`): `Promise`\<`number`\>

Calculate the election cost

#### Parameters

| Name | Type |
| :------ | :------ |
| `election` | [`UnpublishedElection`](UnpublishedElection) |

#### Returns

`Promise`\<`number`\>

The cost in tokens.

#### Defined in

[services/election.ts:336](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/services/election.ts#L336)

___

### create

▸ **create**(`payload`, `metadata`): `Promise`\<[`IElectionCreateResponse`](../interfaces/IElectionCreateResponse)\>

Creates a new election.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `payload` | `string` | The set information info raw payload to be submitted to the chain |
| `metadata` | `string` | The base64 encoded metadata JSON object |

#### Returns

`Promise`\<[`IElectionCreateResponse`](../interfaces/IElectionCreateResponse)\>

The created election information

#### Defined in

[services/election.ts:256](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/services/election.ts#L256)

___

### estimateElectionCost

▸ **estimateElectionCost**(`election`): `Promise`\<`number`\>

Estimates the election cost

#### Parameters

| Name | Type |
| :------ | :------ |
| `election` | [`UnpublishedElection`](UnpublishedElection) |

#### Returns

`Promise`\<`number`\>

The cost in tokens.

#### Defined in

[services/election.ts:323](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/services/election.ts#L323)

___

### fetchElection

▸ **fetchElection**(`electionId`): `Promise`\<[`PublishedElection`](PublishedElection.md) \| [`ArchivedElection`](ArchivedElection)\>

Fetches info about an election.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `electionId` | `string` | The id of the election |

#### Returns

`Promise`\<[`PublishedElection`](PublishedElection.md) \| [`ArchivedElection`](ArchivedElection)\>

#### Defined in

[services/election.ts:114](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/services/election.ts#L114)

___

### fetchElections

▸ **fetchElections**(`params`): `Promise`\<([`PublishedElection`](PublishedElection.md) \| [`ArchivedElection`](ArchivedElection.md) \| [`InvalidElection`](InvalidElection))[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Partial`\<[`FetchElectionsParameters`](../interfaces/FetchElectionsParameters)\> |

#### Returns

`Promise`\<([`PublishedElection`](PublishedElection.md) \| [`ArchivedElection`](ArchivedElection.md) \| [`InvalidElection`](InvalidElection))[]\>

#### Defined in

[services/election.ts:221](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/services/election.ts#L221)

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

[services/election.ts:287](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/services/election.ts#L287)

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

[services/election.ts:301](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/services/election.ts#L301)

___

### keys

▸ **keys**(`electionId`): `Promise`\<[`IElectionKeysResponse`](../interfaces/IElectionKeysResponse)\>

Fetches the encryption keys from the specified process.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `electionId` | `string` | The identifier of the election |

#### Returns

`Promise`\<[`IElectionKeysResponse`](../interfaces/IElectionKeysResponse)\>

#### Defined in

[services/election.ts:313](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/services/election.ts#L313)

___

### nextElectionId

▸ **nextElectionId**(`address`, `election`): `Promise`\<`string`\>

Returns the next election id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address of the account |
| `election` | [`UnpublishedElection`](UnpublishedElection) | The unpublished election |

#### Returns

`Promise`\<`string`\>

The next election identifier

#### Defined in

[services/election.ts:268](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/services/election.ts#L268)

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

[services/election.ts:74](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/services/election.ts#L74)

## Properties

### censusService

• **censusService**: [`CensusService`](CensusService)

#### Implementation of

ElectionServiceProperties.censusService

#### Defined in

[services/election.ts:61](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/services/election.ts#L61)

___

### chainService

• **chainService**: [`ChainService`](ChainService)

#### Implementation of

ElectionServiceProperties.chainService

#### Defined in

[services/election.ts:62](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/services/election.ts#L62)

___

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service#url)

#### Defined in

[services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/1053e59/src/services/service.ts#L6)
