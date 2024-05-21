[@vocdoni/sdk](/sdk) / VocdoniSDKClient

# Class: VocdoniSDKClient

Main Vocdoni client object. It's a wrapper for all the methods in api, core
and types, allowing you to easily use the vocdoni API from a single entry
point.

## Table of contents

### Constructors

- [constructor](VocdoniSDKClient#constructor)

### Account Methods

- [createAccount](VocdoniSDKClient#createaccount)
- [createAccountInfo](VocdoniSDKClient#createaccountinfo)
- [fetchAccount](VocdoniSDKClient#fetchaccount)
- [fetchAccountInfo](VocdoniSDKClient#fetchaccountinfo)
- [updateAccountInfo](VocdoniSDKClient#updateaccountinfo)

### Election Methods

- [calculateElectionCost](VocdoniSDKClient#calculateelectioncost)
- [cancelElection](VocdoniSDKClient#cancelelection)
- [changeElectionCensus](VocdoniSDKClient#changeelectioncensus)
- [continueElection](VocdoniSDKClient#continueelection)
- [createElection](VocdoniSDKClient#createelection)
- [createElectionSteps](VocdoniSDKClient#createelectionsteps)
- [endElection](VocdoniSDKClient#endelection)
- [estimateElectionCost](VocdoniSDKClient#estimateelectioncost)
- [fetchElection](VocdoniSDKClient#fetchelection)
- [fetchElections](VocdoniSDKClient#fetchelections)
- [pauseElection](VocdoniSDKClient#pauseelection)
- [setElectionId](VocdoniSDKClient#setelectionid)

### Voting Methods

- [hasAlreadyVoted](VocdoniSDKClient#hasalreadyvoted)
- [isAbleToVote](VocdoniSDKClient#isabletovote)
- [isInCensus](VocdoniSDKClient#isincensus)
- [submitVote](VocdoniSDKClient#submitvote)
- [submitVoteSteps](VocdoniSDKClient#submitvotesteps)
- [votesLeftCount](VocdoniSDKClient#votesleftcount)

### Other Methods

- [calculateCID](VocdoniSDKClient#calculatecid)
- [collectFaucetTokens](VocdoniSDKClient#collectfaucettokens)
- [createCensus](VocdoniSDKClient#createcensus)
- [cspInfo](VocdoniSDKClient#cspinfo)
- [cspSign](VocdoniSDKClient#cspsign)
- [cspStep](VocdoniSDKClient#cspstep)
- [cspUrl](VocdoniSDKClient#cspurl)
- [cspVote](VocdoniSDKClient#cspvote)
- [fetchCensusInfo](VocdoniSDKClient#fetchcensusinfo)
- [fetchChainCosts](VocdoniSDKClient#fetchchaincosts)
- [fetchChainId](VocdoniSDKClient#fetchchainid)
- [fetchCircuits](VocdoniSDKClient#fetchcircuits)
- [fetchFaucetPayload](VocdoniSDKClient#fetchfaucetpayload)
- [fetchProof](VocdoniSDKClient#fetchproof)
- [generateRandomWallet](VocdoniSDKClient#generaterandomwallet)
- [parseFaucetPackage](VocdoniSDKClient#parsefaucetpackage)
- [sendTokens](VocdoniSDKClient#sendtokens)
- [setCircuits](VocdoniSDKClient#setcircuits)
- [waitForTransaction](VocdoniSDKClient#waitfortransaction)
- [generateWalletFromData](VocdoniSDKClient#generatewalletfromdata)

### Properties

- [accountService](VocdoniSDKClient#accountservice)
- [anonymousService](VocdoniSDKClient#anonymousservice)
- [censusService](VocdoniSDKClient#censusservice)
- [chainService](VocdoniSDKClient#chainservice)
- [cspService](VocdoniSDKClient#cspservice)
- [electionId](VocdoniSDKClient#electionid)
- [electionService](VocdoniSDKClient#electionservice)
- [explorerUrl](VocdoniSDKClient#explorerurl)
- [faucetService](VocdoniSDKClient#faucetservice)
- [fileService](VocdoniSDKClient#fileservice)
- [url](VocdoniSDKClient#url)
- [voteService](VocdoniSDKClient#voteservice)
- [wallet](VocdoniSDKClient#wallet)

## Constructors

### constructor

• **new VocdoniSDKClient**(`opts`): [`VocdoniSDKClient`](VocdoniSDKClient)

Instantiate new VocdoniSDK client.

To instantiate the client just pass the `ClientOptions` you want or empty object to let defaults.

`const client = new VocdoniSDKClient({EnvOptions.PROD})`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | [`ClientOptions`](../sdk-reference#clientoptions) | optional arguments |

#### Returns

[`VocdoniSDKClient`](VocdoniSDKClient)

#### Defined in

[client.ts:128](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L128)

## Account Methods

### createAccount

▸ **createAccount**(`options?`): `Promise`\<[`AccountData`](../sdk-reference#accountdata)\>

Registers an account against vochain, so it can create new elections.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | Additional options, like extra information of the account, or the faucet package string |
| `options.account?` | [`Account`](Account) | - |
| `options.faucetPackage?` | `string` | - |
| `options.password?` | `string` | - |
| `options.sik?` | `boolean` | - |

#### Returns

`Promise`\<[`AccountData`](../sdk-reference#accountdata)\>

#### Defined in

[client.ts:421](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L421)

___

### createAccountInfo

▸ **createAccountInfo**(`options`): `Promise`\<[`AccountData`](../sdk-reference#accountdata)\>

Creates an account with information.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Additional options, like extra information of the account, or the faucet package string. |
| `options.account` | [`Account`](Account) | - |
| `options.faucetPackage?` | `string` | - |
| `options.password?` | `string` | - |
| `options.signedSikPayload?` | `string` | - |

#### Returns

`Promise`\<[`AccountData`](../sdk-reference#accountdata)\>

#### Defined in

[client.ts:331](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L331)

___

### fetchAccount

▸ **fetchAccount**(`address?`): `Promise`\<[`AccountData`](../sdk-reference#accountdata)\>

Fetches account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address?` | `string` | The account address to fetch the information |

#### Returns

`Promise`\<[`AccountData`](../sdk-reference#accountdata)\>

#### Defined in

[client.ts:198](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L198)

___

### fetchAccountInfo

▸ **fetchAccountInfo**(`address?`): `Promise`\<[`AccountData`](../sdk-reference.md#accountdata) \| [`ArchivedAccountData`](../sdk-reference#archivedaccountdata)\>

Fetches account information.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address?` | `string` | The account address to fetch the information |

#### Returns

`Promise`\<[`AccountData`](../sdk-reference.md#accountdata) \| [`ArchivedAccountData`](../sdk-reference#archivedaccountdata)\>

#### Defined in

[client.ts:179](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L179)

___

### updateAccountInfo

▸ **updateAccountInfo**(`account`): `Promise`\<[`AccountData`](../sdk-reference#accountdata)\>

Updates an account with information

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | [`Account`](Account) | Account data. |

#### Returns

`Promise`\<[`AccountData`](../sdk-reference#accountdata)\>

#### Defined in

[client.ts:375](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L375)

___

## Election Methods

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

[client.ts:1043](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L1043)

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

[client.ts:634](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L634)

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

[client.ts:680](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L680)

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

[client.ts:644](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L644)

___

### createElection

▸ **createElection**(`election`): `Promise`\<`string`\>

Creates a new voting election.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `election` | [`UnpublishedElection`](UnpublishedElection) | The election object to be created. |

#### Returns

`Promise`\<`string`\>

Resulting election id.

#### Defined in

[client.ts:515](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L515)

___

### createElectionSteps

▸ **createElectionSteps**(`election`): `AsyncGenerator`\<[`ElectionCreationStepValue`](../sdk-reference#electioncreationstepvalue), `any`, `unknown`\>

Creates a new voting election by steps with async returns.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `election` | [`UnpublishedElection`](UnpublishedElection) | The election object to be created. |

#### Returns

`AsyncGenerator`\<[`ElectionCreationStepValue`](../sdk-reference#electioncreationstepvalue), `any`, `unknown`\>

The async step returns.

#### Defined in

[client.ts:532](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L532)

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

[client.ts:614](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L614)

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

[client.ts:1033](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L1033)

___

### fetchElection

▸ **fetchElection**(`electionId?`, `password?`): `Promise`\<[`PublishedElection`](PublishedElection.md) \| [`ArchivedElection`](ArchivedElection)\>

Fetches info about an election.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `electionId?` | `string` | The id of the election |
| `password?` | `string` | The password to decrypt the metadata |

#### Returns

`Promise`\<[`PublishedElection`](PublishedElection.md) \| [`ArchivedElection`](ArchivedElection)\>

#### Defined in

[client.ts:227](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L227)

___

### fetchElections

▸ **fetchElections**(`account?`, `page?`): `Promise`\<([`PublishedElection`](PublishedElection.md) \| [`ArchivedElection`](ArchivedElection.md) \| [`InvalidElection`](InvalidElection))[]\>

Fetches info about all elections created by the given account

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `account?` | `string` | `undefined` | specify an account to search for. Otherwise client wallet address is used. |
| `page` | `number` | `0` | - |

#### Returns

`Promise`\<([`PublishedElection`](PublishedElection.md) \| [`ArchivedElection`](ArchivedElection.md) \| [`InvalidElection`](InvalidElection))[]\>

#### Defined in

[client.ts:241](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L241)

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

[client.ts:624](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L624)

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

[client.ts:169](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L169)

___

## Voting Methods

### hasAlreadyVoted

▸ **hasAlreadyVoted**(`options?`): `Promise`\<`string`\>

Checks if the user has already voted

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Partial`\<[`WalletOption`](../sdk-reference.md#walletoption) & [`ElectionIdOption`](../sdk-reference.md#electionidoption) & [`VoteIdOption`](../sdk-reference#voteidoption)\> | Options for has already voted |

#### Returns

`Promise`\<`string`\>

The id of the vote

#### Defined in

[client.ts:726](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L726)

___

### isAbleToVote

▸ **isAbleToVote**(`options?`): `Promise`\<`boolean`\>

Checks if the user is able to vote

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Partial`\<[`WalletOption`](../sdk-reference.md#walletoption) & [`ElectionIdOption`](../sdk-reference.md#electionidoption) & [`VoteIdOption`](../sdk-reference#voteidoption)\> | Options for is able to vote |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[client.ts:758](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L758)

___

### isInCensus

▸ **isInCensus**(`options?`): `Promise`\<`boolean`\>

Checks if the user is in census.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Partial`\<[`WalletOption`](../sdk-reference.md#walletoption) & [`ElectionIdOption`](../sdk-reference#electionidoption)\> | Options for is in census |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[client.ts:704](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L704)

___

### submitVote

▸ **submitVote**(`vote`): `Promise`\<`string`\>

Submits a vote.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vote` | [`Vote`](Vote.md) \| [`AnonymousVote`](AnonymousVote.md) \| [`CspVote`](CspVote) | The vote (or votes) to be sent. |

#### Returns

`Promise`\<`string`\>

Vote confirmation id.

#### Defined in

[client.ts:806](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L806)

___

### submitVoteSteps

▸ **submitVoteSteps**(`vote`): `AsyncGenerator`\<[`VoteStepValue`](../sdk-reference#votestepvalue), `any`, `unknown`\>

Submits a vote by steps.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vote` | [`Vote`](Vote.md) \| [`AnonymousVote`](AnonymousVote.md) \| [`CspVote`](CspVote) | The vote (or votes) to be sent. |

#### Returns

`AsyncGenerator`\<[`VoteStepValue`](../sdk-reference#votestepvalue), `any`, `unknown`\>

Vote confirmation id.

#### Defined in

[client.ts:823](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L823)

___

### votesLeftCount

▸ **votesLeftCount**(`options?`): `Promise`\<`number`\>

Checks how many times a user can submit their vote

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Partial`\<[`WalletOption`](../sdk-reference.md#walletoption) & [`ElectionIdOption`](../sdk-reference.md#electionidoption) & [`VoteIdOption`](../sdk-reference#voteidoption)\> | Options for votes left count |

#### Returns

`Promise`\<`number`\>

#### Defined in

[client.ts:768](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L768)

___

## Other Methods

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

[client.ts:1053](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L1053)

___

### collectFaucetTokens

▸ **collectFaucetTokens**(`faucetPackage?`): `Promise`\<[`AccountData`](../sdk-reference#accountdata)\>

Calls the faucet to get new tokens. Under development environments, if no faucet package is provided, one is created and tokens are allocated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `faucetPackage?` | `string` | The faucet package |

#### Returns

`Promise`\<[`AccountData`](../sdk-reference#accountdata)\>

Account data information updated with new balance

#### Defined in

[client.ts:488](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L488)

___

### createCensus

▸ **createCensus**(`census`): `Promise`\<`void`\>

Publishes the given census.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `census` | [`PlainCensus`](PlainCensus.md) \| [`WeightedCensus`](WeightedCensus) | The census to be published. |

#### Returns

`Promise`\<`void`\>

#### Defined in

[client.ts:955](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L955)

___

### cspInfo

▸ **cspInfo**(): `Promise`\<[`ICspInfoResponse`](../interfaces/ICspInfoResponse)\>

#### Returns

`Promise`\<[`ICspInfoResponse`](../interfaces/ICspInfoResponse)\>

#### Defined in

[client.ts:991](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L991)

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

[client.ts:1002](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L1002)

___

### cspStep

▸ **cspStep**(`stepNumber`, `data`, `authToken?`): `Promise`\<[`ICspIntermediateStepResponse`](../interfaces/ICspIntermediateStepResponse.md) \| [`ICspFinalStepResponse`](../interfaces/ICspFinalStepResponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stepNumber` | `number` |
| `data` | `any`[] |
| `authToken?` | `string` |

#### Returns

`Promise`\<[`ICspIntermediateStepResponse`](../interfaces/ICspIntermediateStepResponse.md) \| [`ICspFinalStepResponse`](../interfaces/ICspFinalStepResponse)\>

#### Defined in

[client.ts:995](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L995)

___

### cspUrl

▸ **cspUrl**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[client.ts:986](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L986)

___

### cspVote

▸ **cspVote**(`vote`, `signature`, `proof_type?`): [`CspVote`](CspVote)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vote` | [`Vote`](Vote) |
| `signature` | `string` |
| `proof_type?` | [`CspProofType`](../enums/CspProofType) |

#### Returns

[`CspVote`](CspVote)

#### Defined in

[client.ts:1007](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L1007)

___

### fetchCensusInfo

▸ **fetchCensusInfo**(`censusId`): `Promise`\<\{ `size`: `number` ; `type`: [`CensusType`](../enums/CensusType) ; `weight`: `bigint`  }\>

Fetches the information of a given census.

#### Parameters

| Name | Type |
| :------ | :------ |
| `censusId` | `string` |

#### Returns

`Promise`\<\{ `size`: `number` ; `type`: [`CensusType`](../enums/CensusType) ; `weight`: `bigint`  }\>

#### Defined in

[client.ts:964](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L964)

___

### fetchChainCosts

▸ **fetchChainCosts**(): `Promise`\<[`IChainGetCostsResponse`](../interfaces/IChainGetCostsResponse)\>

Fetches blockchain costs information if needed.

#### Returns

`Promise`\<[`IChainGetCostsResponse`](../interfaces/IChainGetCostsResponse)\>

#### Defined in

[client.ts:1015](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L1015)

___

### fetchChainId

▸ **fetchChainId**(): `Promise`\<`string`\>

Fetches blockchain information if needed and returns the chain id.

#### Returns

`Promise`\<`string`\>

#### Defined in

[client.ts:1023](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L1023)

___

### fetchCircuits

▸ **fetchCircuits**(`circuits?`): `Promise`\<[`ChainCircuits`](../sdk-reference#chaincircuits)\>

Fetches circuits for anonymous voting

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `circuits?` | `Omit`\<[`ChainCircuits`](../sdk-reference#chaincircuits), ``"zKeyData"`` \| ``"vKeyData"`` \| ``"wasmData"``\> | Additional options for custom circuits |

#### Returns

`Promise`\<[`ChainCircuits`](../sdk-reference#chaincircuits)\>

#### Defined in

[client.ts:973](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L973)

___

### fetchFaucetPayload

▸ **fetchFaucetPayload**(): `Promise`\<`string`\>

Fetches a faucet payload. Only for development.

#### Returns

`Promise`\<`string`\>

#### Defined in

[client.ts:1061](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L1061)

___

### fetchProof

▸ **fetchProof**(`censusId`, `key`): `Promise`\<[`CensusProof`](../sdk-reference#censusproof)\>

Fetches proof that an address is part of the specified census.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `censusId` | `string` | Census we want to check the address against |
| `key` | `string` | The address to be found |

#### Returns

`Promise`\<[`CensusProof`](../sdk-reference#censusproof)\>

#### Defined in

[client.ts:946](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L946)

___

### generateRandomWallet

▸ **generateRandomWallet**(): `string`

Assigns a random Wallet to the client and returns its private key.

#### Returns

`string`

The private key.

#### Defined in

[client.ts:918](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L918)

___

### parseFaucetPackage

▸ **parseFaucetPackage**(`faucetPackage`): [`FaucetPackage`](../sdk-reference#faucetpackage)

Parses a faucet package.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `faucetPackage` | `string` | The encoded faucet package |

#### Returns

[`FaucetPackage`](../sdk-reference#faucetpackage)

#### Defined in

[client.ts:1071](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L1071)

___

### sendTokens

▸ **sendTokens**(`options`): `Promise`\<`void`\>

Send tokens from one account to another.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`SendTokensOptions`](../sdk-reference#sendtokensoptions) | Options for send tokens |

#### Returns

`Promise`\<`void`\>

#### Defined in

[client.ts:459](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L459)

___

### setCircuits

▸ **setCircuits**(`circuits`): [`ChainCircuits`](../sdk-reference#chaincircuits)

Sets circuits for anonymous voting

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `circuits` | [`ChainCircuits`](../sdk-reference#chaincircuits) | Custom circuits |

#### Returns

[`ChainCircuits`](../sdk-reference#chaincircuits)

#### Defined in

[client.ts:982](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L982)

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

[client.ts:1084](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L1084)

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

[client.ts:930](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L930)

## Properties

### accountService

• **accountService**: [`AccountService`](AccountService)

#### Defined in

[client.ts:112](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L112)

___

### anonymousService

• **anonymousService**: [`AnonymousService`](AnonymousService)

#### Defined in

[client.ts:106](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L106)

___

### censusService

• **censusService**: [`CensusService`](CensusService)

#### Defined in

[client.ts:104](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L104)

___

### chainService

• **chainService**: [`ChainService`](ChainService)

#### Defined in

[client.ts:105](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L105)

___

### cspService

• **cspService**: [`CspService`](CspService)

#### Defined in

[client.ts:107](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L107)

___

### electionId

• **electionId**: `string`

#### Defined in

[client.ts:116](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L116)

___

### electionService

• **electionService**: [`ElectionService`](ElectionService)

#### Defined in

[client.ts:108](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L108)

___

### explorerUrl

• **explorerUrl**: `string`

#### Defined in

[client.ts:117](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L117)

___

### faucetService

• **faucetService**: [`FaucetService`](FaucetService)

#### Defined in

[client.ts:111](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L111)

___

### fileService

• **fileService**: [`FileService`](FileService)

#### Defined in

[client.ts:110](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L110)

___

### url

• **url**: `string`

#### Defined in

[client.ts:114](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L114)

___

### voteService

• **voteService**: [`VoteService`](VoteService)

#### Defined in

[client.ts:109](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L109)

___

### wallet

• **wallet**: `Signer` \| `Wallet`

#### Defined in

[client.ts:115](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/client.ts#L115)
