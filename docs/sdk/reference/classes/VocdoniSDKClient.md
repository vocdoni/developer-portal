[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / VocdoniSDKClient

# Class: VocdoniSDKClient

Main Vocdoni client object. It's a wrapper for all the methods in api, core
and types, allowing you to easily use the vocdoni API from a single entry
point.

## Table of contents

### Constructors

- [constructor](VocdoniSDKClient.md#constructor)

### Properties

- [accountData](VocdoniSDKClient.md#accountdata)
- [accountService](VocdoniSDKClient.md#accountservice)
- [anonymousService](VocdoniSDKClient.md#anonymousservice)
- [censusService](VocdoniSDKClient.md#censusservice)
- [chainService](VocdoniSDKClient.md#chainservice)
- [cspService](VocdoniSDKClient.md#cspservice)
- [election](VocdoniSDKClient.md#election)
- [electionId](VocdoniSDKClient.md#electionid)
- [electionService](VocdoniSDKClient.md#electionservice)
- [explorerUrl](VocdoniSDKClient.md#explorerurl)
- [faucetService](VocdoniSDKClient.md#faucetservice)
- [fileService](VocdoniSDKClient.md#fileservice)
- [url](VocdoniSDKClient.md#url)
- [voteService](VocdoniSDKClient.md#voteservice)
- [wallet](VocdoniSDKClient.md#wallet)

### Methods

- [calcZKProofForWallet](VocdoniSDKClient.md#calczkproofforwallet)
- [calculateCID](VocdoniSDKClient.md#calculatecid)
- [calculateElectionCost](VocdoniSDKClient.md#calculateelectioncost)
- [cancelElection](VocdoniSDKClient.md#cancelelection)
- [changeElectionCensus](VocdoniSDKClient.md#changeelectioncensus)
- [changeElectionStatus](VocdoniSDKClient.md#changeelectionstatus)
- [collectFaucetTokens](VocdoniSDKClient.md#collectfaucettokens)
- [continueElection](VocdoniSDKClient.md#continueelection)
- [createAccount](VocdoniSDKClient.md#createaccount)
- [createAccountInfo](VocdoniSDKClient.md#createaccountinfo)
- [createCensus](VocdoniSDKClient.md#createcensus)
- [createElection](VocdoniSDKClient.md#createelection)
- [createElectionSteps](VocdoniSDKClient.md#createelectionsteps)
- [cspInfo](VocdoniSDKClient.md#cspinfo)
- [cspSign](VocdoniSDKClient.md#cspsign)
- [cspStep](VocdoniSDKClient.md#cspstep)
- [cspUrl](VocdoniSDKClient.md#cspurl)
- [cspVote](VocdoniSDKClient.md#cspvote)
- [endElection](VocdoniSDKClient.md#endelection)
- [estimateElectionCost](VocdoniSDKClient.md#estimateelectioncost)
- [fetchAccount](VocdoniSDKClient.md#fetchaccount)
- [fetchAccountInfo](VocdoniSDKClient.md#fetchaccountinfo)
- [fetchCensusInfo](VocdoniSDKClient.md#fetchcensusinfo)
- [fetchChainCosts](VocdoniSDKClient.md#fetchchaincosts)
- [fetchChainId](VocdoniSDKClient.md#fetchchainid)
- [fetchCircuits](VocdoniSDKClient.md#fetchcircuits)
- [fetchElection](VocdoniSDKClient.md#fetchelection)
- [fetchElections](VocdoniSDKClient.md#fetchelections)
- [fetchFaucetPayload](VocdoniSDKClient.md#fetchfaucetpayload)
- [fetchProof](VocdoniSDKClient.md#fetchproof)
- [fetchProofForWallet](VocdoniSDKClient.md#fetchproofforwallet)
- [generateRandomWallet](VocdoniSDKClient.md#generaterandomwallet)
- [hasAlreadyVoted](VocdoniSDKClient.md#hasalreadyvoted)
- [isAbleToVote](VocdoniSDKClient.md#isabletovote)
- [isInCensus](VocdoniSDKClient.md#isincensus)
- [parseFaucetPackage](VocdoniSDKClient.md#parsefaucetpackage)
- [pauseElection](VocdoniSDKClient.md#pauseelection)
- [sendTokens](VocdoniSDKClient.md#sendtokens)
- [setAccountInfo](VocdoniSDKClient.md#setaccountinfo)
- [setAccountSIK](VocdoniSDKClient.md#setaccountsik)
- [setCircuits](VocdoniSDKClient.md#setcircuits)
- [setElectionId](VocdoniSDKClient.md#setelectionid)
- [submitVote](VocdoniSDKClient.md#submitvote)
- [submitVoteSteps](VocdoniSDKClient.md#submitvotesteps)
- [updateAccountInfo](VocdoniSDKClient.md#updateaccountinfo)
- [votesLeftCount](VocdoniSDKClient.md#votesleftcount)
- [waitForTransaction](VocdoniSDKClient.md#waitfortransaction)
- [generateWalletFromData](VocdoniSDKClient.md#generatewalletfromdata)

## Constructors

### constructor

• **new VocdoniSDKClient**(`opts`): [`VocdoniSDKClient`](VocdoniSDKClient.md)

Instantiate new VocdoniSDK client.

To instantiate the client just pass the `ClientOptions` you want or empty object to let defaults.

`const client = new VocdoniSDKClient({EnvOptions.PROD})`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | [`ClientOptions`](../modules.md#clientoptions) | optional arguments |

#### Returns

[`VocdoniSDKClient`](VocdoniSDKClient.md)

#### Defined in

[client.ts:127](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L127)

## Properties

### accountData

• `Private` **accountData**: [`AccountData`](../modules.md#accountdata) \| [`ArchivedAccountData`](../modules.md#archivedaccountdata) = `null`

#### Defined in

[client.ts:100](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L100)

___

### accountService

• **accountService**: [`AccountService`](AccountService.md)

#### Defined in

[client.ts:111](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L111)

___

### anonymousService

• **anonymousService**: [`AnonymousService`](AnonymousService.md)

#### Defined in

[client.ts:105](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L105)

___

### censusService

• **censusService**: [`CensusService`](CensusService.md)

#### Defined in

[client.ts:103](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L103)

___

### chainService

• **chainService**: [`ChainService`](ChainService.md)

#### Defined in

[client.ts:104](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L104)

___

### cspService

• **cspService**: [`CspService`](CspService.md)

#### Defined in

[client.ts:106](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L106)

___

### election

• `Private` **election**: [`PublishedElection`](PublishedElection.md) \| [`UnpublishedElection`](UnpublishedElection.md) = `null`

#### Defined in

[client.ts:101](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L101)

___

### electionId

• **electionId**: `string`

#### Defined in

[client.ts:115](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L115)

___

### electionService

• **electionService**: [`ElectionService`](ElectionService.md)

#### Defined in

[client.ts:107](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L107)

___

### explorerUrl

• **explorerUrl**: `string`

#### Defined in

[client.ts:116](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L116)

___

### faucetService

• **faucetService**: [`FaucetService`](FaucetService.md)

#### Defined in

[client.ts:110](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L110)

___

### fileService

• **fileService**: [`FileService`](FileService.md)

#### Defined in

[client.ts:109](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L109)

___

### url

• **url**: `string`

#### Defined in

[client.ts:113](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L113)

___

### voteService

• **voteService**: [`VoteService`](VoteService.md)

#### Defined in

[client.ts:108](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L108)

___

### wallet

• **wallet**: `Wallet` \| `Signer`

#### Defined in

[client.ts:114](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L114)

## Methods

### calcZKProofForWallet

▸ **calcZKProofForWallet**(`election`, `wallet`, `signature`, `votePackage`, `password?`): `Promise`\<[`ZkProof`](../modules.md#zkproof)\>

Calculates ZK proof from given wallet.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `election` | [`PublishedElection`](PublishedElection.md) | `undefined` |
| `wallet` | `Wallet` \| `Signer` | `undefined` |
| `signature` | `string` | `undefined` |
| `votePackage` | `Buffer` | `undefined` |
| `password` | `string` | `'0'` |

#### Returns

`Promise`\<[`ZkProof`](../modules.md#zkproof)\>

#### Defined in

[client.ts:282](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L282)

___

### calculateCID

▸ **calculateCID**(`data`): `Promise`\<`string`\>

Fetches the CID expected for the specified data content.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | The data of which we want the CID of |

#### Returns

`Promise`\<`string`\>

Resulting CID

#### Defined in

[client.ts:1041](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L1041)

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

[client.ts:1031](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L1031)

___

### cancelElection

▸ **cancelElection**(`electionId?`): `Promise`\<`void`\>

Cancels an election.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `electionId?` | `string` | The id of the election |

#### Returns

`Promise`\<`void`\>

#### Defined in

[client.ts:620](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L620)

___

### changeElectionCensus

▸ **changeElectionCensus**(`electionId`, `censusId`, `censusURI`): `Promise`\<`void`\>

Changes the census of an election.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `electionId` | `string` | The id of the election |
| `censusId` | `string` | The new census id (root) |
| `censusURI` | `string` | The new census URI |

#### Returns

`Promise`\<`void`\>

#### Defined in

[client.ts:666](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L666)

___

### changeElectionStatus

▸ **changeElectionStatus**(`electionId`, `newStatus`): `Promise`\<`void`\>

Changes the status of an election.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `electionId` | `string` | The id of the election |
| `newStatus` | [`AllElectionStatus`](../modules.md#allelectionstatus) | The new status |

#### Returns

`Promise`\<`void`\>

#### Defined in

[client.ts:641](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L641)

___

### collectFaucetTokens

▸ **collectFaucetTokens**(`faucetPackage?`): `Promise`\<[`AccountData`](../modules.md#accountdata)\>

Calls the faucet to get new tokens. Only under development.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `faucetPackage?` | `string` | The faucet package |

#### Returns

`Promise`\<[`AccountData`](../modules.md#accountdata)\>

Account data information updated with new balance

#### Defined in

[client.ts:480](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L480)

___

### continueElection

▸ **continueElection**(`electionId?`): `Promise`\<`void`\>

Continues an election.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `electionId?` | `string` | The id of the election |

#### Returns

`Promise`\<`void`\>

#### Defined in

[client.ts:630](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L630)

___

### createAccount

▸ **createAccount**(`options?`): `Promise`\<[`AccountData`](../modules.md#accountdata)\>

Registers an account against vochain, so it can create new elections.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | Additional options, like extra information of the account, or the faucet package string |
| `options.account?` | [`Account`](Account.md) | - |
| `options.faucetPackage?` | `string` | - |
| `options.password?` | `string` | - |
| `options.sik?` | `boolean` | - |

#### Returns

`Promise`\<[`AccountData`](../modules.md#accountdata)\>

#### Defined in

[client.ts:412](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L412)

___

### createAccountInfo

▸ **createAccountInfo**(`options`): `Promise`\<[`AccountData`](../modules.md#accountdata)\>

Creates an account with information.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Additional options, like extra information of the account, or the faucet package string. |
| `options.account` | [`Account`](Account.md) | - |
| `options.faucetPackage?` | `string` | - |
| `options.password?` | `string` | - |
| `options.signedSikPayload?` | `string` | - |

#### Returns

`Promise`\<[`AccountData`](../modules.md#accountdata)\>

#### Defined in

[client.ts:323](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L323)

___

### createCensus

▸ **createCensus**(`census`): `Promise`\<`void`\>

Publishes the given census.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `census` | [`PlainCensus`](PlainCensus.md) \| [`WeightedCensus`](WeightedCensus.md) | The census to be published. |

#### Returns

`Promise`\<`void`\>

#### Defined in

[client.ts:940](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L940)

___

### createElection

▸ **createElection**(`election`): `Promise`\<`string`\>

Creates a new voting election.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `election` | [`UnpublishedElection`](UnpublishedElection.md) | The election object to be created. |

#### Returns

`Promise`\<`string`\>

Resulting election id.

#### Defined in

[client.ts:506](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L506)

___

### createElectionSteps

▸ **createElectionSteps**(`election`): `AsyncGenerator`\<[`ElectionCreationStepValue`](../modules.md#electioncreationstepvalue), `any`, `unknown`\>

Creates a new voting election by steps with async returns.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `election` | [`UnpublishedElection`](UnpublishedElection.md) | The election object to be created. |

#### Returns

`AsyncGenerator`\<[`ElectionCreationStepValue`](../modules.md#electioncreationstepvalue), `any`, `unknown`\>

The async step returns.

#### Defined in

[client.ts:522](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L522)

___

### cspInfo

▸ **cspInfo**(): `Promise`\<`ICspInfoResponse`\>

#### Returns

`Promise`\<`ICspInfoResponse`\>

#### Defined in

[client.ts:979](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L979)

___

### cspSign

▸ **cspSign**(`address`, `token`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `token` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[client.ts:990](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L990)

___

### cspStep

▸ **cspStep**(`stepNumber`, `data`, `authToken?`): `Promise`\<`ICspIntermediateStepResponse` \| `ICspFinalStepResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stepNumber` | `number` |
| `data` | `any`[] |
| `authToken?` | `string` |

#### Returns

`Promise`\<`ICspIntermediateStepResponse` \| `ICspFinalStepResponse`\>

#### Defined in

[client.ts:983](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L983)

___

### cspUrl

▸ **cspUrl**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[client.ts:974](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L974)

___

### cspVote

▸ **cspVote**(`vote`, `signature`, `proof_type?`): [`CspVote`](CspVote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vote` | [`Vote`](Vote.md) |
| `signature` | `string` |
| `proof_type?` | [`CspProofType`](../enums/CspProofType.md) |

#### Returns

[`CspVote`](CspVote.md)

#### Defined in

[client.ts:995](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L995)

___

### endElection

▸ **endElection**(`electionId?`): `Promise`\<`void`\>

Ends an election.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `electionId?` | `string` | The id of the election |

#### Returns

`Promise`\<`void`\>

#### Defined in

[client.ts:600](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L600)

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

[client.ts:1022](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L1022)

___

### fetchAccount

▸ **fetchAccount**(`address?`): `Promise`\<[`AccountData`](../modules.md#accountdata)\>

Fetches account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address?` | `string` | The account address to fetch the information |

#### Returns

`Promise`\<[`AccountData`](../modules.md#accountdata)\>

#### Defined in

[client.ts:196](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L196)

___

### fetchAccountInfo

▸ **fetchAccountInfo**(`address?`): `Promise`\<[`AccountData`](../modules.md#accountdata) \| [`ArchivedAccountData`](../modules.md#archivedaccountdata)\>

Fetches account information.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address?` | `string` | The account address to fetch the information |

#### Returns

`Promise`\<[`AccountData`](../modules.md#accountdata) \| [`ArchivedAccountData`](../modules.md#archivedaccountdata)\>

#### Defined in

[client.ts:177](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L177)

___

### fetchCensusInfo

▸ **fetchCensusInfo**(`censusId`): `Promise`\<\{ `size`: `number` ; `type`: [`CensusType`](../enums/CensusType.md) ; `weight`: `bigint`  }\>

Fetches the information of a given census.

#### Parameters

| Name | Type |
| :------ | :------ |
| `censusId` | `string` |

#### Returns

`Promise`\<\{ `size`: `number` ; `type`: [`CensusType`](../enums/CensusType.md) ; `weight`: `bigint`  }\>

#### Defined in

[client.ts:950](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L950)

___

### fetchChainCosts

▸ **fetchChainCosts**(): `Promise`\<[`IChainGetCostsResponse`](../interfaces/IChainGetCostsResponse.md)\>

Fetches blockchain costs information if needed.

#### Returns

`Promise`\<[`IChainGetCostsResponse`](../interfaces/IChainGetCostsResponse.md)\>

#### Defined in

[client.ts:1004](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L1004)

___

### fetchChainId

▸ **fetchChainId**(): `Promise`\<`string`\>

Fetches blockchain information if needed and returns the chain id.

#### Returns

`Promise`\<`string`\>

#### Defined in

[client.ts:1013](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L1013)

___

### fetchCircuits

▸ **fetchCircuits**(`circuits?`): `Promise`\<[`ChainCircuits`](../modules.md#chaincircuits)\>

Fetches circuits for anonymous voting

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `circuits?` | `Omit`\<[`ChainCircuits`](../modules.md#chaincircuits), ``"zKeyData"`` \| ``"vKeyData"`` \| ``"wasmData"``\> | Additional options for custom circuits |

#### Returns

`Promise`\<[`ChainCircuits`](../modules.md#chaincircuits)\>

#### Defined in

[client.ts:960](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L960)

___

### fetchElection

▸ **fetchElection**(`electionId?`): `Promise`\<[`PublishedElection`](PublishedElection.md) \| [`ArchivedElection`](ArchivedElection.md)\>

Fetches info about an election.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `electionId?` | `string` | The id of the election |

#### Returns

`Promise`\<[`PublishedElection`](PublishedElection.md) \| [`ArchivedElection`](ArchivedElection.md)\>

#### Defined in

[client.ts:224](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L224)

___

### fetchElections

▸ **fetchElections**(`account?`, `page?`): `Promise`\<([`PublishedElection`](PublishedElection.md) \| [`ArchivedElection`](ArchivedElection.md) \| [`InvalidElection`](InvalidElection.md))[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `account?` | `string` | `undefined` |
| `page` | `number` | `0` |

#### Returns

`Promise`\<([`PublishedElection`](PublishedElection.md) \| [`ArchivedElection`](ArchivedElection.md) \| [`InvalidElection`](InvalidElection.md))[]\>

#### Defined in

[client.ts:231](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L231)

___

### fetchFaucetPayload

▸ **fetchFaucetPayload**(): `Promise`\<`string`\>

Fetches a faucet payload. Only for development.

#### Returns

`Promise`\<`string`\>

#### Defined in

[client.ts:1050](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L1050)

___

### fetchProof

▸ **fetchProof**(`censusId`, `key`): `Promise`\<[`CensusProof`](../modules.md#censusproof)\>

Fetches proof that an address is part of the specified census.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `censusId` | `string` | Census we want to check the address against |
| `key` | `string` | The address to be found |

#### Returns

`Promise`\<[`CensusProof`](../modules.md#censusproof)\>

#### Defined in

[client.ts:930](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L930)

___

### fetchProofForWallet

▸ **fetchProofForWallet**(`censusId`, `wallet`): `Promise`\<[`CensusProof`](../modules.md#censusproof)\>

Fetches proof that an address is part of the specified census.

#### Parameters

| Name | Type |
| :------ | :------ |
| `censusId` | `string` |
| `wallet` | `Wallet` \| `Signer` |

#### Returns

`Promise`\<[`CensusProof`](../modules.md#censusproof)\>

#### Defined in

[client.ts:245](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L245)

___

### generateRandomWallet

▸ **generateRandomWallet**(): `string`

Assigns a random Wallet to the client and returns its private key.

#### Returns

`string`

The private key.

#### Defined in

[client.ts:901](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L901)

___

### hasAlreadyVoted

▸ **hasAlreadyVoted**(`options?`): `Promise`\<`string`\>

Checks if the user has already voted

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Partial`\<[`WalletOption`](../modules.md#walletoption) & [`ElectionIdOption`](../modules.md#electionidoption) & [`VoteIdOption`](../modules.md#voteidoption)\> | Options for has already voted |

#### Returns

`Promise`\<`string`\>

The id of the vote

#### Defined in

[client.ts:711](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L711)

___

### isAbleToVote

▸ **isAbleToVote**(`options?`): `Promise`\<`boolean`\>

Checks if the user is able to vote

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Partial`\<[`WalletOption`](../modules.md#walletoption) & [`ElectionIdOption`](../modules.md#electionidoption) & [`VoteIdOption`](../modules.md#voteidoption)\> | Options for is able to vote |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[client.ts:743](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L743)

___

### isInCensus

▸ **isInCensus**(`options?`): `Promise`\<`boolean`\>

Checks if the user is in census.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Partial`\<[`WalletOption`](../modules.md#walletoption) & [`ElectionIdOption`](../modules.md#electionidoption)\> | Options for is in census |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[client.ts:690](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L690)

___

### parseFaucetPackage

▸ **parseFaucetPackage**(`faucetPackage`): [`FaucetPackage`](../modules.md#faucetpackage)

Parses a faucet package.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `faucetPackage` | `string` | The encoded faucet package |

#### Returns

[`FaucetPackage`](../modules.md#faucetpackage)

#### Defined in

[client.ts:1061](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L1061)

___

### pauseElection

▸ **pauseElection**(`electionId?`): `Promise`\<`void`\>

Pauses an election.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `electionId?` | `string` | The id of the election |

#### Returns

`Promise`\<`void`\>

#### Defined in

[client.ts:610](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L610)

___

### sendTokens

▸ **sendTokens**(`options`): `Promise`\<`void`\>

Send tokens from one account to another.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`SendTokensOptions`](../modules.md#sendtokensoptions) | Options for send tokens |

#### Returns

`Promise`\<`void`\>

#### Defined in

[client.ts:451](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L451)

___

### setAccountInfo

▸ **setAccountInfo**(`promAccountData`): `Promise`\<[`AccountData`](../modules.md#accountdata)\>

Updates an account with information

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `promAccountData` | `Promise`\<\{ `message`: `string` ; `metadata`: `string` ; `tx`: `Uint8Array`  }\> | Account data promise in Tx form. |

#### Returns

`Promise`\<[`AccountData`](../modules.md#accountdata)\>

#### Defined in

[client.ts:392](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L392)

___

### setAccountSIK

▸ **setAccountSIK**(`electionId`, `signature`, `password`, `censusProof`, `wallet`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `electionId` | `string` |
| `signature` | `string` |
| `password` | `string` |
| `censusProof` | [`CensusProof`](../modules.md#censusproof) |
| `wallet` | `Wallet` \| `Signer` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[client.ts:249](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L249)

___

### setCircuits

▸ **setCircuits**(`circuits`): [`ChainCircuits`](../modules.md#chaincircuits)

Sets circuits for anonymous voting

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `circuits` | [`ChainCircuits`](../modules.md#chaincircuits) | Custom circuits |

#### Returns

[`ChainCircuits`](../modules.md#chaincircuits)

#### Defined in

[client.ts:970](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L970)

___

### setElectionId

▸ **setElectionId**(`electionId`): `void`

Sets an election id. Required by other methods like submitVote or createElection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `electionId` | `string` | Election id string |

#### Returns

`void`

#### Defined in

[client.ts:167](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L167)

___

### submitVote

▸ **submitVote**(`vote`): `Promise`\<`string`\>

Submits a vote.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vote` | [`Vote`](Vote.md) \| [`AnonymousVote`](AnonymousVote.md) \| [`CspVote`](CspVote.md) | The vote (or votes) to be sent. |

#### Returns

`Promise`\<`string`\>

Vote confirmation id.

#### Defined in

[client.ts:790](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L790)

___

### submitVoteSteps

▸ **submitVoteSteps**(`vote`): `AsyncGenerator`\<[`VoteStepValue`](../modules.md#votestepvalue), `any`, `unknown`\>

Submits a vote by steps.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vote` | [`Vote`](Vote.md) \| [`AnonymousVote`](AnonymousVote.md) \| [`CspVote`](CspVote.md) | The vote (or votes) to be sent. |

#### Returns

`AsyncGenerator`\<[`VoteStepValue`](../modules.md#votestepvalue), `any`, `unknown`\>

Vote confirmation id.

#### Defined in

[client.ts:806](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L806)

___

### updateAccountInfo

▸ **updateAccountInfo**(`account`): `Promise`\<[`AccountData`](../modules.md#accountdata)\>

Updates an account with information

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | [`Account`](Account.md) | Account data. |

#### Returns

`Promise`\<[`AccountData`](../modules.md#accountdata)\>

#### Defined in

[client.ts:366](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L366)

___

### votesLeftCount

▸ **votesLeftCount**(`options?`): `Promise`\<`number`\>

Checks how many times a user can submit their vote

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Partial`\<[`WalletOption`](../modules.md#walletoption) & [`ElectionIdOption`](../modules.md#electionidoption) & [`VoteIdOption`](../modules.md#voteidoption)\> | Options for votes left count |

#### Returns

`Promise`\<`number`\>

#### Defined in

[client.ts:753](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L753)

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

[client.ts:1075](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L1075)

___

### generateWalletFromData

▸ **generateWalletFromData**(`data`): `Wallet`

Returns a Wallet based on the inputs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` \| `string`[] | The data inputs which should generate the Wallet |

#### Returns

`Wallet`

The deterministic wallet.

#### Defined in

[client.ts:913](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/client.ts#L913)
