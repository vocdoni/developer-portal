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
- [decryptMetadata](ElectionService#decryptmetadata)
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

[services/election.ts:70](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/services/election.ts#L70)

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

[services/election.ts:376](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/services/election.ts#L376)

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

[services/election.ts:296](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/services/election.ts#L296)

___

### decryptMetadata

▸ **decryptMetadata**(`electionInfo`, `password`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `electionInfo` | `any` |
| `password` | `any` |

#### Returns

`any`

#### Defined in

[services/election.ts:110](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/services/election.ts#L110)

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

[services/election.ts:363](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/services/election.ts#L363)

___

### fetchElection

▸ **fetchElection**(`electionId`, `password?`): `Promise`\<[`PublishedElection`](PublishedElection.md) \| [`ArchivedElection`](ArchivedElection)\>

Fetches info about an election.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `electionId` | `string` | The id of the election |
| `password?` | `string` | The password to decrypt the metadata |

#### Returns

`Promise`\<[`PublishedElection`](PublishedElection.md) \| [`ArchivedElection`](ArchivedElection)\>

#### Defined in

[services/election.ts:148](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/services/election.ts#L148)

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

[services/election.ts:261](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/services/election.ts#L261)

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

[services/election.ts:327](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/services/election.ts#L327)

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

[services/election.ts:341](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/services/election.ts#L341)

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

[services/election.ts:353](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/services/election.ts#L353)

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

[services/election.ts:308](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/services/election.ts#L308)

___

### signTransaction

▸ **signTransaction**(`tx`, `message`, `walletOrSigner`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Uint8Array` |
| `message` | `string` |
| `walletOrSigner` | `Signer` \| `Wallet` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[services/election.ts:75](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/services/election.ts#L75)

## Properties

### censusService

• **censusService**: [`CensusService`](CensusService)

#### Implementation of

ElectionServiceProperties.censusService

#### Defined in

[services/election.ts:62](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/services/election.ts#L62)

___

### chainService

• **chainService**: [`ChainService`](ChainService)

#### Implementation of

ElectionServiceProperties.chainService

#### Defined in

[services/election.ts:63](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/services/election.ts#L63)

___

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service#url)

#### Defined in

[services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/services/service.ts#L6)
