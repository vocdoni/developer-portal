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

[src/services/election.ts:87](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/election.ts#L87)

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

[src/services/election.ts:397](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/election.ts#L397)

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

[src/services/election.ts:316](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/election.ts#L316)

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

[src/services/election.ts:129](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/election.ts#L129)

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

[src/services/election.ts:384](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/election.ts#L384)

___

### fetchElection

▸ **fetchElection**(`electionId`, `password?`): `Promise`\<[`PublishedElection`](PublishedElection)\>

Fetches info about an election.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `electionId` | `string` | The id of the election |
| `password?` | `string` | The password to decrypt the metadata |

#### Returns

`Promise`\<[`PublishedElection`](PublishedElection)\>

#### Defined in

[src/services/election.ts:167](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/election.ts#L167)

___

### fetchElections

▸ **fetchElections**(`params?`): `Promise`\<[`ElectionListWithPagination`](../sdk-reference#electionlistwithpagination)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `Partial`\<[`FetchElectionsParametersWithPagination`](../sdk-reference#fetchelectionsparameterswithpagination)\> |

#### Returns

`Promise`\<[`ElectionListWithPagination`](../sdk-reference#electionlistwithpagination)\>

#### Defined in

[src/services/election.ts:289](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/election.ts#L289)

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

[src/services/election.ts:348](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/election.ts#L348)

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

[src/services/election.ts:362](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/election.ts#L362)

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

[src/services/election.ts:374](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/election.ts#L374)

___

### nextElectionId

▸ **nextElectionId**(`address`, `election`, `delta?`): `Promise`\<`string`\>

Returns the next election id.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `address` | `string` | `undefined` | The address of the account |
| `election` | [`UnpublishedElection`](UnpublishedElection) | `undefined` | The unpublished election |
| `delta` | `number` | `0` | The stride to next election id, being 0 the next one |

#### Returns

`Promise`\<`string`\>

The next election identifier

#### Defined in

[src/services/election.ts:329](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/election.ts#L329)

___

### signTransaction

▸ **signTransaction**(`tx`, `message`, `walletOrSigner`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Uint8Array` |
| `message` | `string` |
| `walletOrSigner` | `Signer` \| `Wallet` \| [`RemoteSigner`](RemoteSigner) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/services/election.ts:92](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/election.ts#L92)

## Properties

### censusService

• **censusService**: [`CensusService`](CensusService)

#### Implementation of

ElectionServiceProperties.censusService

#### Defined in

[src/services/election.ts:79](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/election.ts#L79)

___

### chainService

• **chainService**: [`ChainService`](ChainService)

#### Implementation of

ElectionServiceProperties.chainService

#### Defined in

[src/services/election.ts:80](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/election.ts#L80)

___

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service#url)

#### Defined in

[src/services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/service.ts#L6)
