[@vocdoni/sdk](/sdk) / Exports

# @vocdoni/sdk

## Table of contents

### Enumerations

- [CensusOrigin](enums/CensusOrigin.md)
- [CensusType](enums/CensusType.md)
- [CensusTypeEnum](enums/CensusTypeEnum.md)
- [CspProofType](enums/CspProofType.md)
- [ElectionCreationSteps](enums/ElectionCreationSteps.md)
- [ElectionResultsTypeNames](enums/ElectionResultsTypeNames.md)
- [ElectionStatus](enums/ElectionStatus.md)
- [ElectionStatusReady](enums/ElectionStatusReady.md)
- [EnvOptions](enums/EnvOptions.md)
- [TransactionType](enums/TransactionType.md)
- [TxType](enums/TxType.md)
- [VoteSteps](enums/VoteSteps.md)

### Classes

- [Account](classes/Account.md)
- [AccountAPI](classes/AccountAPI.md)
- [AccountService](classes/AccountService.md)
- [AnonymousService](classes/AnonymousService.md)
- [AnonymousVote](classes/AnonymousVote.md)
- [ApprovalElection](classes/ApprovalElection.md)
- [ArchivedElection](classes/ArchivedElection.md)
- [BudgetElection](classes/BudgetElection.md)
- [Census](classes/Census.md)
- [Census3CensusAPI](classes/Census3CensusAPI.md)
- [Census3ServiceAPI](classes/Census3ServiceAPI.md)
- [Census3StrategyAPI](classes/Census3StrategyAPI.md)
- [Census3TokenAPI](classes/Census3TokenAPI.md)
- [CensusAPI](classes/CensusAPI.md)
- [CensusService](classes/CensusService.md)
- [ChainAPI](classes/ChainAPI.md)
- [ChainService](classes/ChainService.md)
- [CspCensus](classes/CspCensus.md)
- [CspService](classes/CspService.md)
- [CspVote](classes/CspVote.md)
- [Election](classes/Election.md)
- [ElectionAPI](classes/ElectionAPI.md)
- [ElectionService](classes/ElectionService.md)
- [FaucetAPI](classes/FaucetAPI.md)
- [FaucetService](classes/FaucetService.md)
- [FileAPI](classes/FileAPI.md)
- [FileService](classes/FileService.md)
- [InvalidElection](classes/InvalidElection.md)
- [MultiChoiceElection](classes/MultiChoiceElection.md)
- [OffchainCensus](classes/OffchainCensus.md)
- [PlainCensus](classes/PlainCensus.md)
- [PublishedCensus](classes/PublishedCensus.md)
- [PublishedElection](classes/PublishedElection.md)
- [Service](classes/Service.md)
- [TokenCensus](classes/TokenCensus.md)
- [UnpublishedElection](classes/UnpublishedElection.md)
- [VocdoniCensus3Client](classes/VocdoniCensus3Client.md)
- [VocdoniSDKClient](classes/VocdoniSDKClient.md)
- [Vote](classes/Vote.md)
- [VoteAPI](classes/VoteAPI.md)
- [VoteService](classes/VoteService.md)
- [WalletAPI](classes/WalletAPI.md)
- [WeightedCensus](classes/WeightedCensus.md)

### Interfaces

- [AccountMetadata](interfaces/AccountMetadata.md)
- [AdminTx](interfaces/AdminTx.md)
- [CircuitInputs](interfaces/CircuitInputs.md)
- [CollectFaucetTx](interfaces/CollectFaucetTx.md)
- [ElectionMetadata](interfaces/ElectionMetadata.md)
- [FetchElectionsParameters](interfaces/FetchElectionsParameters.md)
- [IAccount](interfaces/IAccount.md)
- [IAccountTransfersCountResponse](interfaces/IAccountTransfersCountResponse.md)
- [IAccountsCountResponse](interfaces/IAccountsCountResponse.md)
- [IAccountsListResponse](interfaces/IAccountsListResponse.md)
- [IApprovalElectionParameters](interfaces/IApprovalElectionParameters.md)
- [IBlockTransactionsResponse](interfaces/IBlockTransactionsResponse.md)
- [IBudgetElectionParametersInfo](interfaces/IBudgetElectionParametersInfo.md)
- [IBudgetElectionParametersWithBudget](interfaces/IBudgetElectionParametersWithBudget.md)
- [IBudgetElectionParametersWithCensusWeight](interfaces/IBudgetElectionParametersWithCensusWeight.md)
- [ICensus](interfaces/ICensus.md)
- [ICensus3CensusListResponse](interfaces/ICensus3CensusListResponse.md)
- [ICensus3CensusQueueResponse](interfaces/ICensus3CensusQueueResponse.md)
- [ICensus3CensusResponse](interfaces/ICensus3CensusResponse.md)
- [ICensus3ServiceInfoResponse](interfaces/ICensus3ServiceInfoResponse.md)
- [ICensus3StrategiesListResponse](interfaces/ICensus3StrategiesListResponse.md)
- [ICensus3StrategiesListResponsePaginated](interfaces/ICensus3StrategiesListResponsePaginated.md)
- [ICensus3StrategiesOperator](interfaces/ICensus3StrategiesOperator.md)
- [ICensus3StrategiesOperatorsResponse](interfaces/ICensus3StrategiesOperatorsResponse.md)
- [ICensus3StrategyCreateResponse](interfaces/ICensus3StrategyCreateResponse.md)
- [ICensus3StrategyEstimationQueueResponse](interfaces/ICensus3StrategyEstimationQueueResponse.md)
- [ICensus3StrategyHoldersResponse](interfaces/ICensus3StrategyHoldersResponse.md)
- [ICensus3StrategyHoldersResponsePaginated](interfaces/ICensus3StrategyHoldersResponsePaginated.md)
- [ICensus3StrategyImportQueueResponse](interfaces/ICensus3StrategyImportQueueResponse.md)
- [ICensus3StrategyToken](interfaces/ICensus3StrategyToken.md)
- [ICensus3SupportedChain](interfaces/ICensus3SupportedChain.md)
- [ICensus3TokenHolderResponse](interfaces/ICensus3TokenHolderResponse.md)
- [ICensus3TokenListResponse](interfaces/ICensus3TokenListResponse.md)
- [ICensus3TokenListResponsePaginated](interfaces/ICensus3TokenListResponsePaginated.md)
- [ICensus3TokenTypesResponse](interfaces/ICensus3TokenTypesResponse.md)
- [ICensus3ValidatePredicateChild](interfaces/ICensus3ValidatePredicateChild.md)
- [ICensus3ValidatePredicateResponse](interfaces/ICensus3ValidatePredicateResponse.md)
- [ICensus3ValidatePredicateToken](interfaces/ICensus3ValidatePredicateToken.md)
- [ICensusExportResponse](interfaces/ICensusExportResponse.md)
- [ICensusImportResponse](interfaces/ICensusImportResponse.md)
- [ICensusParticipant](interfaces/ICensusParticipant.md)
- [ICensusProofResponse](interfaces/ICensusProofResponse.md)
- [ICensusPublishResponse](interfaces/ICensusPublishResponse.md)
- [IChainBlockInfoResponse](interfaces/IChainBlockInfoResponse.md)
- [IChainGetCircuitResponse](interfaces/IChainGetCircuitResponse.md)
- [IChainGetCostsResponse](interfaces/IChainGetCostsResponse.md)
- [IChainGetInfoResponse](interfaces/IChainGetInfoResponse.md)
- [IChainOrganizationCountResponse](interfaces/IChainOrganizationCountResponse.md)
- [IChainOrganizationListResponse](interfaces/IChainOrganizationListResponse.md)
- [IChainOrganizationResponse](interfaces/IChainOrganizationResponse.md)
- [IChainSubmitTxResponse](interfaces/IChainSubmitTxResponse.md)
- [IChainTxCountResponse](interfaces/IChainTxCountResponse.md)
- [IChainTxListResponse](interfaces/IChainTxListResponse.md)
- [IChainTxReference](interfaces/IChainTxReference.md)
- [IChainValidator](interfaces/IChainValidator.md)
- [IChainValidatorsListResponse](interfaces/IChainValidatorsListResponse.md)
- [IChoice](interfaces/IChoice.md)
- [IElectionCreateResponse](interfaces/IElectionCreateResponse.md)
- [IElectionInfoResponse](interfaces/IElectionInfoResponse.md)
- [IElectionKeysResponse](interfaces/IElectionKeysResponse.md)
- [IElectionListFilter](interfaces/IElectionListFilter.md)
- [IElectionListResponse](interfaces/IElectionListResponse.md)
- [IElectionMode](interfaces/IElectionMode.md)
- [IElectionNextIdResponse](interfaces/IElectionNextIdResponse.md)
- [IElectionParameters](interfaces/IElectionParameters.md)
- [IElectionSummary](interfaces/IElectionSummary.md)
- [IElectionType](interfaces/IElectionType.md)
- [IElectionVote](interfaces/IElectionVote.md)
- [IElectionVoteListResponse](interfaces/IElectionVoteListResponse.md)
- [IEncryptionKey](interfaces/IEncryptionKey.md)
- [IInvalidElectionParameters](interfaces/IInvalidElectionParameters.md)
- [IMultiChoiceElectionParameters](interfaces/IMultiChoiceElectionParameters.md)
- [IPublishedElectionParameters](interfaces/IPublishedElectionParameters.md)
- [IQuestion](interfaces/IQuestion.md)
- [ITallyMode](interfaces/ITallyMode.md)
- [IVoteInfoResponse](interfaces/IVoteInfoResponse.md)
- [IVoteMode](interfaces/IVoteMode.md)
- [IVoteSubmitResponse](interfaces/IVoteSubmitResponse.md)
- [IVoteType](interfaces/IVoteType.md)
- [MintTokensTx](interfaces/MintTokensTx.md)
- [NewProcessTx](interfaces/NewProcessTx.md)
- [Process](interfaces/Process.md)
- [Proof](interfaces/Proof.md)
- [RegisterKeyTx](interfaces/RegisterKeyTx.md)
- [SendTokensTx](interfaces/SendTokensTx.md)
- [ServiceProperties](interfaces/ServiceProperties.md)
- [SetAccountTx](interfaces/SetAccountTx.md)
- [SetProcessTx](interfaces/SetProcessTx.md)
- [SetTransactionCostsTx](interfaces/SetTransactionCostsTx.md)
- [Tx](interfaces/Tx.md)
- [VoteEnvelope](interfaces/VoteEnvelope.md)

### Type Aliases

- [AccountData](modules.md#accountdata)
- [AllElectionStatus](modules.md#allelectionstatus)
- [ArchivedAccountData](modules.md#archivedaccountdata)
- [Census3Census](modules.md#census3census)
- [Census3CreateStrategyToken](modules.md#census3createstrategytoken)
- [Census3Strategy](modules.md#census3strategy)
- [Census3StrategyToken](modules.md#census3strategytoken)
- [Census3SummaryToken](modules.md#census3summarytoken)
- [Census3Token](modules.md#census3token)
- [CensusImportExport](modules.md#censusimportexport)
- [CensusProof](modules.md#censusproof)
- [ChainCircuits](modules.md#chaincircuits)
- [ChainCosts](modules.md#chaincosts)
- [ChainData](modules.md#chaindata)
- [ChainTx](modules.md#chaintx)
- [ClientOptions](modules.md#clientoptions)
- [CspCensusProof](modules.md#cspcensusproof)
- [ElectionCreatedInformation](modules.md#electioncreatedinformation)
- [ElectionCreationStepValue](modules.md#electioncreationstepvalue)
- [ElectionIdOption](modules.md#electionidoption)
- [ElectionKeys](modules.md#electionkeys)
- [ElectionMeta](modules.md#electionmeta)
- [ElectionResultsType](modules.md#electionresultstype)
- [FaucetOptions](modules.md#faucetoptions)
- [FaucetPackage](modules.md#faucetpackage)
- [HasAlreadyVotedOptions](modules.md#hasalreadyvotedoptions)
- [IAccountSummary](modules.md#iaccountsummary)
- [IBudgetElectionParameters](modules.md#ibudgetelectionparameters)
- [IsAbleToVoteOptions](modules.md#isabletovoteoptions)
- [IsInCensusOptions](modules.md#isincensusoptions)
- [ParsedPredicate](modules.md#parsedpredicate)
- [SendTokensOptions](modules.md#sendtokensoptions)
- [Strategy](modules.md#strategy)
- [StrategyHolder](modules.md#strategyholder)
- [StrategyHolders](modules.md#strategyholders)
- [StrategyToken](modules.md#strategytoken)
- [SupportedChain](modules.md#supportedchain)
- [SupportedOperator](modules.md#supportedoperator)
- [Token](modules.md#token)
- [TokenSummary](modules.md#tokensummary)
- [TxWaitOptions](modules.md#txwaitoptions)
- [VoteIdOption](modules.md#voteidoption)
- [VoteInfo](modules.md#voteinfo)
- [VoteStepValue](modules.md#votestepvalue)
- [VoteSubmit](modules.md#votesubmit)
- [VotesLeftCountOptions](modules.md#votesleftcountoptions)
- [WalletOption](modules.md#walletoption)
- [ZkProof](modules.md#zkproof)

### Variables

- [AccountMetadataTemplate](modules.md#accountmetadatatemplate)
- [ElectionMetadataTemplate](modules.md#electionmetadatatemplate)

### Functions

- [areEqualHexStrings](modules.md#areequalhexstrings)
- [checkValidAccountMetadata](modules.md#checkvalidaccountmetadata)
- [checkValidElectionMetadata](modules.md#checkvalidelectionmetadata)
- [delay](modules.md#delay)
- [dotobject](modules.md#dotobject)
- [ensure0x](modules.md#ensure0x)
- [formatUnits](modules.md#formatunits)
- [getBytes](modules.md#getbytes)
- [getHex](modules.md#gethex)
- [strip0x](modules.md#strip0x)

## Type Aliases

### AccountData

Ƭ **AccountData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `account` | [`Account`](classes/Account.md) |
| `address` | `string` |
| `balance` | `number` |
| `electionIndex` | `number` |
| `infoURL?` | `string` |
| `nonce` | `number` |
| `sik?` | `string` |

#### Defined in

[services/account.ts:25](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/account.ts#L25)

___

### AllElectionStatus

Ƭ **AllElectionStatus**: [`ElectionStatus`](enums/ElectionStatus.md) \| [`ElectionStatusReady`](enums/ElectionStatusReady.md)

#### Defined in

[types/election/published.ts:24](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/published.ts#L24)

___

### ArchivedAccountData

Ƭ **ArchivedAccountData**: `Pick`\<[`AccountData`](modules.md#accountdata), ``"address"`` \| ``"account"``\>

#### Defined in

[services/account.ts:35](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/account.ts#L35)

___

### Census3Census

Ƭ **Census3Census**: [`ICensus3CensusResponse`](interfaces/ICensus3CensusResponse.md)

#### Defined in

[census3.ts:30](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/census3.ts#L30)

___

### Census3CreateStrategyToken

Ƭ **Census3CreateStrategyToken**: `Omit`\<[`Census3StrategyToken`](modules.md#census3strategytoken), ``"chainAddress"``\>

#### Defined in

[api/census3/strategy.ts:100](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/census3/strategy.ts#L100)

___

### Census3Strategy

Ƭ **Census3Strategy**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `ID` | `number` | The strategy identifier |
| `alias` | `string` | The strategy alias |
| `predicate` | `string` | The strategy predicate |
| `tokens` | \{ `[key: string]`: [`Census3StrategyToken`](modules.md#census3strategytoken);  } | The list of tokens |
| `uri` | `string` | The URI of the strategy |

#### Defined in

[api/census3/strategy.ts:46](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/census3/strategy.ts#L46)

___

### Census3StrategyToken

Ƭ **Census3StrategyToken**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `ID` | `string` | The id (address) of the token. |
| `chainAddress` | `string` | The chain address of the token. |
| `chainID` | `number` | The chain id of the token. |
| `externalID?` | `string` | The external identifier of the token. |
| `minBalance?` | `string` | The minimum balance for the strategy. |

#### Defined in

[api/census3/strategy.ts:73](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/census3/strategy.ts#L73)

___

### Census3SummaryToken

Ƭ **Census3SummaryToken**: `Omit`\<[`Census3Token`](modules.md#census3token), ``"status"`` \| ``"size"``\> & \{ `synced`: `boolean`  }

#### Defined in

[api/census3/token.ts:12](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/census3/token.ts#L12)

___

### Census3Token

Ƭ **Census3Token**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `ID` | `string` | The id (address) of the token. |
| `chainAddress` | `string` | The chain address of the token. |
| `chainID` | `number` | The chain id of the token. |
| `decimals` | `number` | The decimals of the token |
| `defaultStrategy` | `number` | The default strategy assigned. |
| `externalID?` | `string` | The external identifier of the token. |
| `iconURI?` | `string` | The icon URI of the token. |
| `name` | `string` | The name of the token. |
| `size` | `number` | The size (token holders) of the token. |
| `startBlock` | `number` | The creation block. |
| `status` | \{ `atBlock`: `number` ; `progress`: `number` ; `synced`: `boolean`  } | The census3 status of the token. |
| `status.atBlock` | `number` | At which number of block the token is synced |
| `status.progress` | `number` | The progress percentage of the sync |
| `status.synced` | `boolean` | If the token is already synced or not. |
| `symbol` | `string` | The symbol of the token. |
| `tags?` | `string` | The tags of the token. |
| `totalSupply` | `string` | The total supply of the token. |
| `type` | `string` | The type of the token. |

#### Defined in

[api/census3/token.ts:14](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/census3/token.ts#L14)

___

### CensusImportExport

Ƭ **CensusImportExport**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `maxLevels` | `number` |
| `rootHash` | `string` |
| `type` | `number` |

#### Defined in

[services/census.ts:42](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/census.ts#L42)

___

### CensusProof

Ƭ **CensusProof**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `proof` | `string` |
| `root` | `string` |
| `siblings?` | `string`[] |
| `type` | [`CensusType`](enums/CensusType.md) |
| `value` | `string` |
| `weight` | `string` |

#### Defined in

[services/census.ts:26](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/census.ts#L26)

___

### ChainCircuits

Ƭ **ChainCircuits**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `vKeyData` | `Uint8Array` |
| `vKeyHash` | `string` |
| `vKeyURI` | `string` |
| `wasmData` | `Uint8Array` |
| `wasmHash` | `string` |
| `wasmURI` | `string` |
| `zKeyData` | `Uint8Array` |
| `zKeyHash` | `string` |
| `zKeyURI` | `string` |

#### Defined in

[services/anonymous.ts:51](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/anonymous.ts#L51)

___

### ChainCosts

Ƭ **ChainCosts**: [`IChainGetCostsResponse`](interfaces/IChainGetCostsResponse.md)

#### Defined in

[services/chain.ts:14](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/chain.ts#L14)

___

### ChainData

Ƭ **ChainData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blockTime` | `number`[] |
| `blockTimestamp` | `number` |
| `chainId` | `string` |
| `height` | `number` |
| `maxCensusSize` | `number` |

#### Defined in

[services/chain.ts:29](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/chain.ts#L29)

___

### ChainTx

Ƭ **ChainTx**: [`IChainTxReference`](interfaces/IChainTxReference.md)

#### Defined in

[services/chain.ts:15](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/chain.ts#L15)

___

### ClientOptions

Ƭ **ClientOptions**: `Object`

Optional VocdoniSDKClient arguments

#### Type declaration

| Name | Type |
| :------ | :------ |
| `api_url?` | `string` |
| `electionId?` | `string` |
| `env` | [`EnvOptions`](enums/EnvOptions.md) |
| `faucet?` | `Partial`\<[`FaucetOptions`](modules.md#faucetoptions)\> |
| `tx_wait?` | `TxWaitOptions` |
| `wallet?` | `Wallet` \| `Signer` |

#### Defined in

[client.ts:85](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/client.ts#L85)

___

### CspCensusProof

Ƭ **CspCensusProof**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `proof_type?` | [`CspProofType`](enums/CspProofType.md) |
| `signature` | `string` |
| `type?` | `number` |
| `weight?` | `bigint` |

#### Defined in

[services/census.ts:56](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/census.ts#L56)

___

### ElectionCreatedInformation

Ƭ **ElectionCreatedInformation**: [`IElectionCreateResponse`](interfaces/IElectionCreateResponse.md)

#### Defined in

[services/election.ts:37](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/election.ts#L37)

___

### ElectionCreationStepValue

Ƭ **ElectionCreationStepValue**: \{ `key`: [`GET_CHAIN_DATA`](enums/ElectionCreationSteps.md#get_chain_data)  } \| \{ `key`: [`CENSUS_CREATED`](enums/ElectionCreationSteps.md#census_created)  } \| \{ `key`: [`GET_ACCOUNT_DATA`](enums/ElectionCreationSteps.md#get_account_data)  } \| \{ `key`: [`GET_DATA_PIN`](enums/ElectionCreationSteps.md#get_data_pin)  } \| \{ `key`: [`GENERATE_TX`](enums/ElectionCreationSteps.md#generate_tx)  } \| \{ `key`: [`SIGN_TX`](enums/ElectionCreationSteps.md#sign_tx)  } \| \{ `key`: [`CREATING`](enums/ElectionCreationSteps.md#creating) ; `txHash`: `string`  } \| \{ `electionId`: `string` ; `key`: [`DONE`](enums/ElectionCreationSteps.md#done)  }

#### Defined in

[services/election.ts:50](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/election.ts#L50)

___

### ElectionIdOption

Ƭ **ElectionIdOption**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `electionId` | `string` |

#### Defined in

[types/client/account.ts:5](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/client/account.ts#L5)

___

### ElectionKeys

Ƭ **ElectionKeys**: [`IElectionKeysResponse`](interfaces/IElectionKeysResponse.md)

#### Defined in

[services/election.ts:36](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/election.ts#L36)

___

### ElectionMeta

Ƭ **ElectionMeta**: `AnyJson` \| `JsonArray` \| `JsonMap`

#### Defined in

[types/election/election.ts:101](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L101)

___

### ElectionResultsType

Ƭ **ElectionResultsType**: \{ `name`: [`SINGLE_CHOICE_MULTIQUESTION`](enums/ElectionResultsTypeNames.md#single_choice_multiquestion) ; `properties`: {}  } \| \{ `name`: [`MULTIPLE_CHOICE`](enums/ElectionResultsTypeNames.md#multiple_choice) ; `properties`: \{ `abstainValues`: `string`[] ; `canAbstain`: `boolean` ; `repeatChoice`: `boolean`  }  } \| \{ `name`: [`BUDGET`](enums/ElectionResultsTypeNames.md#budget) ; `properties`: \{ `forceFullBudget`: `boolean` ; `maxBudget`: `number` ; `minStep`: `number` ; `useCensusWeightAsBudget`: `boolean`  }  } \| \{ `name`: [`APPROVAL`](enums/ElectionResultsTypeNames.md#approval) ; `properties`: \{ `acceptValue`: `number` ; `rejectValue`: `number`  }  }

#### Defined in

[types/metadata/election.ts:44](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/metadata/election.ts#L44)

___

### FaucetOptions

Ƭ **FaucetOptions**: `FaucetServiceParameters`

#### Defined in

[services/faucet.ts:28](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/faucet.ts#L28)

___

### FaucetPackage

Ƭ **FaucetPackage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `payload` | `string` |
| `signature` | `string` |

#### Defined in

[services/faucet.ts:23](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/faucet.ts#L23)

___

### HasAlreadyVotedOptions

Ƭ **HasAlreadyVotedOptions**: `Partial`\<[`WalletOption`](modules.md#walletoption) & [`ElectionIdOption`](modules.md#electionidoption) & [`VoteIdOption`](modules.md#voteidoption)\>

#### Defined in

[types/client/account.ts:10](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/client/account.ts#L10)

___

### IAccountSummary

Ƭ **IAccountSummary**: `Pick`\<`IAccountInfoResponse`, ``"address"`` \| ``"balance"`` \| ``"nonce"``\>

#### Defined in

[api/account.ts:17](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/account.ts#L17)

___

### IBudgetElectionParameters

Ƭ **IBudgetElectionParameters**: [`IBudgetElectionParametersWithCensusWeight`](interfaces/IBudgetElectionParametersWithCensusWeight.md) \| [`IBudgetElectionParametersWithBudget`](interfaces/IBudgetElectionParametersWithBudget.md)

#### Defined in

[types/election/budget.ts:21](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/budget.ts#L21)

___

### IsAbleToVoteOptions

Ƭ **IsAbleToVoteOptions**: `Partial`\<[`WalletOption`](modules.md#walletoption) & [`ElectionIdOption`](modules.md#electionidoption) & [`VoteIdOption`](modules.md#voteidoption)\>

#### Defined in

[types/client/account.ts:12](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/client/account.ts#L12)

___

### IsInCensusOptions

Ƭ **IsInCensusOptions**: `Partial`\<[`WalletOption`](modules.md#walletoption) & [`ElectionIdOption`](modules.md#electionidoption)\>

#### Defined in

[types/client/account.ts:9](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/client/account.ts#L9)

___

### ParsedPredicate

Ƭ **ParsedPredicate**: [`ICensus3ValidatePredicateResponse`](interfaces/ICensus3ValidatePredicateResponse.md)

#### Defined in

[census3.ts:33](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/census3.ts#L33)

___

### SendTokensOptions

Ƭ **SendTokensOptions**: `Partial`\<[`WalletOption`](modules.md#walletoption)\> & \{ `amount`: `number` ; `to`: `string`  }

#### Defined in

[types/client/account.ts:8](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/client/account.ts#L8)

___

### Strategy

Ƭ **Strategy**: [`Census3Strategy`](modules.md#census3strategy)

#### Defined in

[census3.ts:26](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/census3.ts#L26)

___

### StrategyHolder

Ƭ **StrategyHolder**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `holder` | `string` |
| `weight` | `bigint` |

#### Defined in

[census3.ts:27](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/census3.ts#L27)

___

### StrategyHolders

Ƭ **StrategyHolders**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `holders` | [`StrategyHolder`](modules.md#strategyholder)[] |
| `pagination` | `Census3Pagination` |

#### Defined in

[census3.ts:28](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/census3.ts#L28)

___

### StrategyToken

Ƭ **StrategyToken**: [`Census3CreateStrategyToken`](modules.md#census3createstrategytoken)

#### Defined in

[census3.ts:29](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/census3.ts#L29)

___

### SupportedChain

Ƭ **SupportedChain**: [`ICensus3SupportedChain`](interfaces/ICensus3SupportedChain.md)

#### Defined in

[census3.ts:31](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/census3.ts#L31)

___

### SupportedOperator

Ƭ **SupportedOperator**: [`ICensus3StrategiesOperator`](interfaces/ICensus3StrategiesOperator.md)

#### Defined in

[census3.ts:32](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/census3.ts#L32)

___

### Token

Ƭ **Token**: `Omit`\<[`Census3Token`](modules.md#census3token), ``"tags"``\> & \{ `tags`: `string`[]  }

#### Defined in

[census3.ts:24](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/census3.ts#L24)

___

### TokenSummary

Ƭ **TokenSummary**: `Omit`\<[`Census3SummaryToken`](modules.md#census3summarytoken), ``"tags"``\> & \{ `tags`: `string`[]  }

#### Defined in

[census3.ts:25](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/census3.ts#L25)

___

### TxWaitOptions

Ƭ **TxWaitOptions**: `Object`

Specify custom retry times and attempts when waiting for a transaction.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attempts` | `number` |
| `retryTime` | `number` |

#### Defined in

[services/chain.ts:24](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/chain.ts#L24)

___

### VoteIdOption

Ƭ **VoteIdOption**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `voteId` | `string` |

#### Defined in

[types/client/account.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/client/account.ts#L6)

___

### VoteInfo

Ƭ **VoteInfo**: [`IVoteInfoResponse`](interfaces/IVoteInfoResponse.md)

#### Defined in

[services/vote.ts:15](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/vote.ts#L15)

___

### VoteStepValue

Ƭ **VoteStepValue**: \{ `electionId`: `string` ; `key`: [`GET_ELECTION`](enums/VoteSteps.md#get_election)  } \| \{ `key`: [`GET_PROOF`](enums/VoteSteps.md#get_proof)  } \| \{ `key`: [`GET_SIGNATURE`](enums/VoteSteps.md#get_signature) ; `signature`: `string`  } \| \{ `key`: [`CALC_ZK_PROOF`](enums/VoteSteps.md#calc_zk_proof)  } \| \{ `key`: [`GENERATE_TX`](enums/VoteSteps.md#generate_tx)  } \| \{ `key`: [`SIGN_TX`](enums/VoteSteps.md#sign_tx)  } \| \{ `key`: [`DONE`](enums/VoteSteps.md#done) ; `voteId`: `string`  }

#### Defined in

[services/vote.ts:28](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/vote.ts#L28)

___

### VoteSubmit

Ƭ **VoteSubmit**: [`IVoteSubmitResponse`](interfaces/IVoteSubmitResponse.md)

#### Defined in

[services/vote.ts:16](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/vote.ts#L16)

___

### VotesLeftCountOptions

Ƭ **VotesLeftCountOptions**: `Partial`\<[`WalletOption`](modules.md#walletoption) & [`ElectionIdOption`](modules.md#electionidoption) & [`VoteIdOption`](modules.md#voteidoption)\>

#### Defined in

[types/client/account.ts:11](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/client/account.ts#L11)

___

### WalletOption

Ƭ **WalletOption**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `wallet` | `Wallet` \| `Signer` |

#### Defined in

[types/client/account.ts:4](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/client/account.ts#L4)

___

### ZkProof

Ƭ **ZkProof**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `proof` | \{ `curve`: `string` ; `pi_a`: `string`[] ; `pi_b`: `string`[][] ; `pi_c`: `string`[] ; `protocol`: `string`  } |
| `proof.curve` | `string` |
| `proof.pi_a` | `string`[] |
| `proof.pi_b` | `string`[][] |
| `proof.pi_c` | `string`[] |
| `proof.protocol` | `string` |
| `publicSignals` | `string`[] |

#### Defined in

[services/anonymous.ts:23](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/anonymous.ts#L23)

## Variables

### AccountMetadataTemplate

• `Const` **AccountMetadataTemplate**: [`AccountMetadata`](interfaces/AccountMetadata.md)

#### Defined in

[types/metadata/account.ts:67](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/metadata/account.ts#L67)

___

### ElectionMetadataTemplate

• `Const` **ElectionMetadataTemplate**: [`ElectionMetadata`](interfaces/ElectionMetadata.md)

#### Defined in

[types/metadata/election.ts:140](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/metadata/election.ts#L140)

## Functions

### areEqualHexStrings

▸ **areEqualHexStrings**(`hex1?`, `hex2?`): `boolean`

Compares two hex strings checking if they're the same. It ensures both
have hex prefix and are lowercase.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex1?` | `string` |
| `hex2?` | `string` |

#### Returns

`boolean`

#### Defined in

[util/common.ts:36](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/util/common.ts#L36)

___

### checkValidAccountMetadata

▸ **checkValidAccountMetadata**(`accountMetadata`): [`AccountMetadata`](interfaces/AccountMetadata.md)

Asserts that the given metadata is valid.
Throws an exception if it is not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountMetadata` | [`AccountMetadata`](interfaces/AccountMetadata.md) |

#### Returns

[`AccountMetadata`](interfaces/AccountMetadata.md)

#### Defined in

[types/metadata/account.ts:8](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/metadata/account.ts#L8)

___

### checkValidElectionMetadata

▸ **checkValidElectionMetadata**(`electionMetadata`): [`ElectionMetadata`](interfaces/ElectionMetadata.md)

Asserts that the given metadata is valid.
Throws an exception if it is not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `electionMetadata` | [`ElectionMetadata`](interfaces/ElectionMetadata.md) |

#### Returns

[`ElectionMetadata`](interfaces/ElectionMetadata.md)

#### Defined in

[types/metadata/election.ts:8](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/metadata/election.ts#L8)

___

### delay

▸ **delay**(`ms`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `any` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[util/common.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/util/common.ts#L6)

___

### dotobject

▸ **dotobject**(`obj`, `dot`): `any`

Dot notation to object conversion. Takes any object as first argument and uses the string dot notation from the
second argument (i.e. 'a.child.node') to access that given object value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `any` | Object to be accessed by dot notation |
| `dot` | `string` | Dot notation string to extract object data |

#### Returns

`any`

Return the object data

#### Defined in

[util/common.ts:61](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/util/common.ts#L61)

___

### ensure0x

▸ **ensure0x**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[util/common.ts:12](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/util/common.ts#L12)

___

### formatUnits

▸ **formatUnits**(`value`, `decimals?`): `string`

Returns a string representation of value formatted with decimals digits

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `BigNumberish` | `undefined` | The value in native BigInt |
| `decimals` | `number` | `18` | The number of decimals |

#### Returns

`string`

The formatted string

#### Defined in

[util/common.ts:49](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/util/common.ts#L49)

___

### getBytes

▸ **getBytes**(`count`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`Uint8Array`

#### Defined in

[util/common.ts:16](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/util/common.ts#L16)

___

### getHex

▸ **getHex**(): `string`

Generates a random seed and returns a 32 byte keccak256 hash of it (starting with "0x")

#### Returns

`string`

#### Defined in

[util/common.ts:23](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/util/common.ts#L23)

___

### strip0x

▸ **strip0x**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[util/common.ts:8](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/util/common.ts#L8)
