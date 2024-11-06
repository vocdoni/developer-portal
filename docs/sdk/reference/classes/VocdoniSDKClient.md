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
- [changeElectionDuration](VocdoniSDKClient#changeelectionduration)
- [changeElectionEndDate](VocdoniSDKClient#changeelectionenddate)
- [changeElectionMaxCensusSize](VocdoniSDKClient#changeelectionmaxcensussize)
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

[src/client.ts:152](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L152)

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

[src/client.ts:445](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L445)

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

[src/client.ts:355](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L355)

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

[src/client.ts:226](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L226)

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

[src/client.ts:207](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L207)

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

[src/client.ts:399](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L399)

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

[src/client.ts:1136](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L1136)

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

[src/client.ts:658](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L658)

___

### changeElectionCensus

▸ **changeElectionCensus**(`electionId`, `censusId`, `censusURI`, `maxCensusSize?`): `Promise`\<`void`\>

Changes the census of an election.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `electionId` | `string` | The id of the election |
| `censusId` | `string` | The new census id (root) |
| `censusURI` | `string` | The new census URI |
| `maxCensusSize?` | `number` | The new max census size |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/client.ts:705](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L705)

___

### changeElectionDuration

▸ **changeElectionDuration**(`electionId`, `duration`): `Promise`\<`void`\>

Changes the duration of an election.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `electionId` | `string` | The id of the election |
| `duration` | `number` | The new duration of the election |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/client.ts:758](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L758)

___

### changeElectionEndDate

▸ **changeElectionEndDate**(`electionId`, `endDate`): `Promise`\<`void`\>

Changes the end date of an election.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `electionId` | `string` | The id of the election |
| `endDate` | `string` \| `number` \| `Date` | The new end date |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/client.ts:779](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L779)

___

### changeElectionMaxCensusSize

▸ **changeElectionMaxCensusSize**(`electionId`, `maxCensusSize`): `Promise`\<`void`\>

Changes the max census size of an election.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `electionId` | `string` | The id of the election |
| `maxCensusSize` | `number` | The new max census size |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/client.ts:736](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L736)

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

[src/client.ts:668](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L668)

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

[src/client.ts:539](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L539)

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

[src/client.ts:556](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L556)

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

[src/client.ts:638](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L638)

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

[src/client.ts:1126](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L1126)

___

### fetchElection

▸ **fetchElection**(`electionId?`, `password?`): `Promise`\<[`PublishedElection`](PublishedElection)\>

Fetches info about an election.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `electionId?` | `string` | The id of the election |
| `password?` | `string` | The password to decrypt the metadata |

#### Returns

`Promise`\<[`PublishedElection`](PublishedElection)\>

#### Defined in

[src/client.ts:255](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L255)

___

### fetchElections

▸ **fetchElections**(`params?`): `Promise`\<[`ElectionListWithPagination`](../sdk-reference#electionlistwithpagination)\>

Fetches info about all elections

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | `Partial`\<[`FetchElectionsParametersWithPagination`](../sdk-reference#fetchelectionsparameterswithpagination)\> | The parameters to filter the elections |

#### Returns

`Promise`\<[`ElectionListWithPagination`](../sdk-reference#electionlistwithpagination)\>

#### Defined in

[src/client.ts:268](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L268)

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

[src/client.ts:648](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L648)

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

[src/client.ts:197](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L197)

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

[src/client.ts:819](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L819)

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

[src/client.ts:851](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L851)

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

[src/client.ts:797](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L797)

___

### submitVote

▸ **submitVote**(`vote`): `Promise`\<`string`\>

Submits a vote.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vote` | [`Vote`](Vote.md) \| [`CspVote`](CspVote.md) \| [`AnonymousVote`](AnonymousVote) | The vote (or votes) to be sent. |

#### Returns

`Promise`\<`string`\>

Vote confirmation id.

#### Defined in

[src/client.ts:899](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L899)

___

### submitVoteSteps

▸ **submitVoteSteps**(`vote`): `AsyncGenerator`\<[`VoteStepValue`](../sdk-reference#votestepvalue), `any`, `unknown`\>

Submits a vote by steps.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vote` | [`Vote`](Vote.md) \| [`CspVote`](CspVote.md) \| [`AnonymousVote`](AnonymousVote) | The vote (or votes) to be sent. |

#### Returns

`AsyncGenerator`\<[`VoteStepValue`](../sdk-reference#votestepvalue), `any`, `unknown`\>

Vote confirmation id.

#### Defined in

[src/client.ts:916](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L916)

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

[src/client.ts:861](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L861)

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

[src/client.ts:1146](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L1146)

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

[src/client.ts:512](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L512)

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

[src/client.ts:1048](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L1048)

___

### cspInfo

▸ **cspInfo**(): `Promise`\<[`ICspInfoResponse`](../interfaces/ICspInfoResponse)\>

#### Returns

`Promise`\<[`ICspInfoResponse`](../interfaces/ICspInfoResponse)\>

#### Defined in

[src/client.ts:1084](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L1084)

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

[src/client.ts:1095](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L1095)

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

[src/client.ts:1088](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L1088)

___

### cspUrl

▸ **cspUrl**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/client.ts:1079](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L1079)

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

[src/client.ts:1100](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L1100)

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

[src/client.ts:1057](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L1057)

___

### fetchChainCosts

▸ **fetchChainCosts**(): `Promise`\<[`IChainGetCostsResponse`](../interfaces/IChainGetCostsResponse)\>

Fetches blockchain costs information if needed.

#### Returns

`Promise`\<[`IChainGetCostsResponse`](../interfaces/IChainGetCostsResponse)\>

#### Defined in

[src/client.ts:1108](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L1108)

___

### fetchChainId

▸ **fetchChainId**(): `Promise`\<`string`\>

Fetches blockchain information if needed and returns the chain id.

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/client.ts:1116](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L1116)

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

[src/client.ts:1066](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L1066)

___

### fetchFaucetPayload

▸ **fetchFaucetPayload**(): `Promise`\<`string`\>

Fetches a faucet payload. Only for development.

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/client.ts:1154](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L1154)

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

[src/client.ts:1039](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L1039)

___

### generateRandomWallet

▸ **generateRandomWallet**(): `string`

Assigns a random Wallet to the client and returns its private key.

#### Returns

`string`

The private key.

#### Defined in

[src/client.ts:1011](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L1011)

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

[src/client.ts:1164](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L1164)

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

[src/client.ts:483](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L483)

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

[src/client.ts:1075](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L1075)

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

[src/client.ts:1177](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L1177)

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

[src/client.ts:1023](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L1023)

## Properties

### accountService

• **accountService**: [`AccountService`](AccountService)

#### Defined in

[src/client.ts:136](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L136)

___

### anonymousService

• **anonymousService**: [`AnonymousService`](AnonymousService)

#### Defined in

[src/client.ts:130](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L130)

___

### censusService

• **censusService**: [`CensusService`](CensusService)

#### Defined in

[src/client.ts:128](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L128)

___

### chainService

• **chainService**: [`ChainService`](ChainService)

#### Defined in

[src/client.ts:129](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L129)

___

### cspService

• **cspService**: [`CspService`](CspService)

#### Defined in

[src/client.ts:131](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L131)

___

### electionId

• **electionId**: `string`

#### Defined in

[src/client.ts:140](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L140)

___

### electionService

• **electionService**: [`ElectionService`](ElectionService)

#### Defined in

[src/client.ts:132](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L132)

___

### explorerUrl

• **explorerUrl**: `string`

#### Defined in

[src/client.ts:141](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L141)

___

### faucetService

• **faucetService**: [`FaucetService`](FaucetService)

#### Defined in

[src/client.ts:135](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L135)

___

### fileService

• **fileService**: [`FileService`](FileService)

#### Defined in

[src/client.ts:134](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L134)

___

### url

• **url**: `string`

#### Defined in

[src/client.ts:138](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L138)

___

### voteService

• **voteService**: [`VoteService`](VoteService)

#### Defined in

[src/client.ts:133](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L133)

___

### wallet

• **wallet**: `Signer` \| `Wallet` \| [`RemoteSigner`](RemoteSigner)

#### Defined in

[src/client.ts:139](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L139)
