[@vocdoni/sdk](/sdk) / Exports

# @vocdoni/sdk

## Table of contents

### Enumerations

- [CensusOrigin](enums/CensusOrigin)
- [CensusType](enums/CensusType)
- [CensusTypeEnum](enums/CensusTypeEnum)
- [CspProofType](enums/CspProofType)
- [ElectionCreationSteps](enums/ElectionCreationSteps)
- [ElectionResultsTypeNames](enums/ElectionResultsTypeNames)
- [ElectionStatus](enums/ElectionStatus)
- [ElectionStatusReady](enums/ElectionStatusReady)
- [EnvOptions](enums/EnvOptions)
- [TransactionType](enums/TransactionType)
- [TxType](enums/TxType)
- [VoteSteps](enums/VoteSteps)

### Classes

- [Account](classes/Account)
- [AccountAPI](classes/AccountAPI)
- [AccountService](classes/AccountService)
- [AnonymousService](classes/AnonymousService)
- [AnonymousVote](classes/AnonymousVote)
- [ApprovalElection](classes/ApprovalElection)
- [ArchivedElection](classes/ArchivedElection)
- [BudgetElection](classes/BudgetElection)
- [Census](classes/Census)
- [Census3CensusAPI](classes/Census3CensusAPI)
- [Census3ServiceAPI](classes/Census3ServiceAPI)
- [Census3StrategyAPI](classes/Census3StrategyAPI)
- [Census3TokenAPI](classes/Census3TokenAPI)
- [CensusAPI](classes/CensusAPI)
- [CensusService](classes/CensusService)
- [ChainAPI](classes/ChainAPI)
- [ChainService](classes/ChainService)
- [CspCensus](classes/CspCensus)
- [CspService](classes/CspService)
- [CspVote](classes/CspVote)
- [Election](classes/Election)
- [ElectionAPI](classes/ElectionAPI)
- [ElectionService](classes/ElectionService)
- [FaucetAPI](classes/FaucetAPI)
- [FaucetService](classes/FaucetService)
- [FileAPI](classes/FileAPI)
- [FileService](classes/FileService)
- [InvalidElection](classes/InvalidElection)
- [MultiChoiceElection](classes/MultiChoiceElection)
- [OffchainCensus](classes/OffchainCensus)
- [PlainCensus](classes/PlainCensus)
- [PublishedCensus](classes/PublishedCensus)
- [PublishedElection](classes/PublishedElection)
- [Service](classes/Service)
- [TokenCensus](classes/TokenCensus)
- [UnpublishedElection](classes/UnpublishedElection)
- [VocdoniCensus3Client](classes/VocdoniCensus3Client)
- [VocdoniSDKClient](classes/VocdoniSDKClient)
- [Vote](classes/Vote)
- [VoteAPI](classes/VoteAPI)
- [VoteService](classes/VoteService)
- [WalletAPI](classes/WalletAPI)
- [WeightedCensus](classes/WeightedCensus)

### Interfaces

- [AccountMetadata](interfaces/AccountMetadata)
- [AdminTx](interfaces/AdminTx)
- [CircuitInputs](interfaces/CircuitInputs)
- [CollectFaucetTx](interfaces/CollectFaucetTx)
- [ElectionMetadata](interfaces/ElectionMetadata)
- [FetchElectionsParameters](interfaces/FetchElectionsParameters)
- [IAccount](interfaces/IAccount)
- [IAccountTransfersCountResponse](interfaces/IAccountTransfersCountResponse)
- [IAccountsCountResponse](interfaces/IAccountsCountResponse)
- [IAccountsListResponse](interfaces/IAccountsListResponse)
- [IApprovalElectionParameters](interfaces/IApprovalElectionParameters)
- [IBlockTransactionsResponse](interfaces/IBlockTransactionsResponse)
- [IBudgetElectionParametersInfo](interfaces/IBudgetElectionParametersInfo)
- [IBudgetElectionParametersWithBudget](interfaces/IBudgetElectionParametersWithBudget)
- [IBudgetElectionParametersWithCensusWeight](interfaces/IBudgetElectionParametersWithCensusWeight)
- [ICensus](interfaces/ICensus)
- [ICensus3CensusListResponse](interfaces/ICensus3CensusListResponse)
- [ICensus3CensusQueueResponse](interfaces/ICensus3CensusQueueResponse)
- [ICensus3CensusResponse](interfaces/ICensus3CensusResponse)
- [ICensus3ServiceInfoResponse](interfaces/ICensus3ServiceInfoResponse)
- [ICensus3StrategiesListResponse](interfaces/ICensus3StrategiesListResponse)
- [ICensus3StrategiesListResponsePaginated](interfaces/ICensus3StrategiesListResponsePaginated)
- [ICensus3StrategiesOperator](interfaces/ICensus3StrategiesOperator)
- [ICensus3StrategiesOperatorsResponse](interfaces/ICensus3StrategiesOperatorsResponse)
- [ICensus3StrategyCreateResponse](interfaces/ICensus3StrategyCreateResponse)
- [ICensus3StrategyEstimationQueueResponse](interfaces/ICensus3StrategyEstimationQueueResponse)
- [ICensus3StrategyHoldersResponse](interfaces/ICensus3StrategyHoldersResponse)
- [ICensus3StrategyHoldersResponsePaginated](interfaces/ICensus3StrategyHoldersResponsePaginated)
- [ICensus3StrategyImportQueueResponse](interfaces/ICensus3StrategyImportQueueResponse)
- [ICensus3StrategyToken](interfaces/ICensus3StrategyToken)
- [ICensus3SupportedChain](interfaces/ICensus3SupportedChain)
- [ICensus3TokenHolderResponse](interfaces/ICensus3TokenHolderResponse)
- [ICensus3TokenListResponse](interfaces/ICensus3TokenListResponse)
- [ICensus3TokenListResponsePaginated](interfaces/ICensus3TokenListResponsePaginated)
- [ICensus3TokenTypesResponse](interfaces/ICensus3TokenTypesResponse)
- [ICensus3ValidatePredicateChild](interfaces/ICensus3ValidatePredicateChild)
- [ICensus3ValidatePredicateResponse](interfaces/ICensus3ValidatePredicateResponse)
- [ICensus3ValidatePredicateToken](interfaces/ICensus3ValidatePredicateToken)
- [ICensusExportResponse](interfaces/ICensusExportResponse)
- [ICensusImportResponse](interfaces/ICensusImportResponse)
- [ICensusParticipant](interfaces/ICensusParticipant)
- [ICensusProofResponse](interfaces/ICensusProofResponse)
- [ICensusPublishResponse](interfaces/ICensusPublishResponse)
- [IChainBlockInfoResponse](interfaces/IChainBlockInfoResponse)
- [IChainGetCircuitResponse](interfaces/IChainGetCircuitResponse)
- [IChainGetCostsResponse](interfaces/IChainGetCostsResponse)
- [IChainGetInfoResponse](interfaces/IChainGetInfoResponse)
- [IChainOrganizationCountResponse](interfaces/IChainOrganizationCountResponse)
- [IChainOrganizationListResponse](interfaces/IChainOrganizationListResponse)
- [IChainOrganizationResponse](interfaces/IChainOrganizationResponse)
- [IChainSubmitTxResponse](interfaces/IChainSubmitTxResponse)
- [IChainTxCountResponse](interfaces/IChainTxCountResponse)
- [IChainTxListResponse](interfaces/IChainTxListResponse)
- [IChainTxReference](interfaces/IChainTxReference)
- [IChainValidator](interfaces/IChainValidator)
- [IChainValidatorsListResponse](interfaces/IChainValidatorsListResponse)
- [IChoice](interfaces/IChoice)
- [IElectionCreateResponse](interfaces/IElectionCreateResponse)
- [IElectionInfoResponse](interfaces/IElectionInfoResponse)
- [IElectionKeysResponse](interfaces/IElectionKeysResponse)
- [IElectionListFilter](interfaces/IElectionListFilter)
- [IElectionListResponse](interfaces/IElectionListResponse)
- [IElectionMode](interfaces/IElectionMode)
- [IElectionNextIdResponse](interfaces/IElectionNextIdResponse)
- [IElectionParameters](interfaces/IElectionParameters)
- [IElectionSummary](interfaces/IElectionSummary)
- [IElectionType](interfaces/IElectionType)
- [IElectionVote](interfaces/IElectionVote)
- [IElectionVoteListResponse](interfaces/IElectionVoteListResponse)
- [IEncryptionKey](interfaces/IEncryptionKey)
- [IInvalidElectionParameters](interfaces/IInvalidElectionParameters)
- [IMultiChoiceElectionParameters](interfaces/IMultiChoiceElectionParameters)
- [IPublishedElectionParameters](interfaces/IPublishedElectionParameters)
- [IQuestion](interfaces/IQuestion)
- [ITallyMode](interfaces/ITallyMode)
- [IVoteInfoResponse](interfaces/IVoteInfoResponse)
- [IVoteMode](interfaces/IVoteMode)
- [IVoteSubmitResponse](interfaces/IVoteSubmitResponse)
- [IVoteType](interfaces/IVoteType)
- [MintTokensTx](interfaces/MintTokensTx)
- [NewProcessTx](interfaces/NewProcessTx)
- [Process](interfaces/Process)
- [Proof](interfaces/Proof)
- [RegisterKeyTx](interfaces/RegisterKeyTx)
- [SendTokensTx](interfaces/SendTokensTx)
- [ServiceProperties](interfaces/ServiceProperties)
- [SetAccountTx](interfaces/SetAccountTx)
- [SetProcessTx](interfaces/SetProcessTx)
- [SetTransactionCostsTx](interfaces/SetTransactionCostsTx)
- [Tx](interfaces/Tx)
- [VoteEnvelope](interfaces/VoteEnvelope)

### Type Aliases

- [AccountData](modules#accountdata)
- [AllElectionStatus](modules#allelectionstatus)
- [ArchivedAccountData](modules#archivedaccountdata)
- [Census3Census](modules#census3census)
- [Census3CreateStrategyToken](modules#census3createstrategytoken)
- [Census3Strategy](modules#census3strategy)
- [Census3StrategyToken](modules#census3strategytoken)
- [Census3SummaryToken](modules#census3summarytoken)
- [Census3Token](modules#census3token)
- [CensusImportExport](modules#censusimportexport)
- [CensusProof](modules#censusproof)
- [ChainCircuits](modules#chaincircuits)
- [ChainCosts](modules#chaincosts)
- [ChainData](modules#chaindata)
- [ChainTx](modules#chaintx)
- [ClientOptions](modules#clientoptions)
- [CspCensusProof](modules#cspcensusproof)
- [ElectionCreatedInformation](modules#electioncreatedinformation)
- [ElectionCreationStepValue](modules#electioncreationstepvalue)
- [ElectionIdOption](modules#electionidoption)
- [ElectionKeys](modules#electionkeys)
- [ElectionMeta](modules#electionmeta)
- [ElectionResultsType](modules#electionresultstype)
- [FaucetOptions](modules#faucetoptions)
- [FaucetPackage](modules#faucetpackage)
- [HasAlreadyVotedOptions](modules#hasalreadyvotedoptions)
- [IAccountSummary](modules#iaccountsummary)
- [IBudgetElectionParameters](modules#ibudgetelectionparameters)
- [IsAbleToVoteOptions](modules#isabletovoteoptions)
- [IsInCensusOptions](modules#isincensusoptions)
- [ParsedPredicate](modules#parsedpredicate)
- [SendTokensOptions](modules#sendtokensoptions)
- [Strategy](modules#strategy)
- [StrategyHolder](modules#strategyholder)
- [StrategyHolders](modules#strategyholders)
- [StrategyToken](modules#strategytoken)
- [SupportedChain](modules#supportedchain)
- [SupportedOperator](modules#supportedoperator)
- [Token](modules#token)
- [TokenSummary](modules#tokensummary)
- [TxWaitOptions](modules#txwaitoptions)
- [VoteIdOption](modules#voteidoption)
- [VoteInfo](modules#voteinfo)
- [VoteStepValue](modules#votestepvalue)
- [VoteSubmit](modules#votesubmit)
- [VotesLeftCountOptions](modules#votesleftcountoptions)
- [WalletOption](modules#walletoption)
- [ZkProof](modules#zkproof)

### Variables

- [AccountMetadataTemplate](modules#accountmetadatatemplate)
- [ElectionMetadataTemplate](modules#electionmetadatatemplate)

### Functions

- [areEqualHexStrings](modules#areequalhexstrings)
- [checkValidAccountMetadata](modules#checkvalidaccountmetadata)
- [checkValidElectionMetadata](modules#checkvalidelectionmetadata)
- [delay](modules#delay)
- [dotobject](modules#dotobject)
- [ensure0x](modules#ensure0x)
- [formatUnits](modules#formatunits)
- [getBytes](modules#getbytes)
- [getHex](modules#gethex)
- [strip0x](modules#strip0x)

## Type Aliases

### AccountData

Ƭ **AccountData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `account` | [`Account`](classes/Account) |
| `address` | `string` |
| `balance` | `number` |
| `electionIndex` | `number` |
| `infoURL?` | `string` |
| `nonce` | `number` |
| `sik?` | `string` |

#### Defined in

[services/account.ts:25](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/services/account.ts#L25)

___

### AllElectionStatus

Ƭ **AllElectionStatus**: [`ElectionStatus`](enums/ElectionStatus.md) \| [`ElectionStatusReady`](enums/ElectionStatusReady)

#### Defined in

[types/election/published.ts:24](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/published.ts#L24)

___

### ArchivedAccountData

Ƭ **ArchivedAccountData**: `Pick`\<[`AccountData`](modules#accountdata), ``"address"`` \| ``"account"``\>

#### Defined in

[services/account.ts:35](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/services/account.ts#L35)

___

### Census3Census

Ƭ **Census3Census**: [`ICensus3CensusResponse`](interfaces/ICensus3CensusResponse)

#### Defined in

[census3.ts:30](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/census3.ts#L30)

___

### Census3CreateStrategyToken

Ƭ **Census3CreateStrategyToken**: `Omit`\<[`Census3StrategyToken`](modules#census3strategytoken), ``"chainAddress"``\>

#### Defined in

[api/census3/strategy.ts:100](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census3/strategy.ts#L100)

___

### Census3Strategy

Ƭ **Census3Strategy**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `ID` | `number` | The strategy identifier |
| `alias` | `string` | The strategy alias |
| `predicate` | `string` | The strategy predicate |
| `tokens` | \{ `[key: string]`: [`Census3StrategyToken`](modules#census3strategytoken);  } | The list of tokens |
| `uri` | `string` | The URI of the strategy |

#### Defined in

[api/census3/strategy.ts:46](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census3/strategy.ts#L46)

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

[api/census3/strategy.ts:73](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census3/strategy.ts#L73)

___

### Census3SummaryToken

Ƭ **Census3SummaryToken**: `Omit`\<[`Census3Token`](modules#census3token), ``"status"`` \| ``"size"``\> & \{ `synced`: `boolean`  }

#### Defined in

[api/census3/token.ts:12](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census3/token.ts#L12)

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

[api/census3/token.ts:14](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/census3/token.ts#L14)

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

[services/census.ts:42](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/services/census.ts#L42)

___

### CensusProof

Ƭ **CensusProof**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `proof` | `string` |
| `root` | `string` |
| `siblings?` | `string`[] |
| `type` | [`CensusType`](enums/CensusType) |
| `value` | `string` |
| `weight` | `string` |

#### Defined in

[services/census.ts:26](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/services/census.ts#L26)

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

[services/anonymous.ts:51](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/services/anonymous.ts#L51)

___

### ChainCosts

Ƭ **ChainCosts**: [`IChainGetCostsResponse`](interfaces/IChainGetCostsResponse)

#### Defined in

[services/chain.ts:14](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/services/chain.ts#L14)

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

[services/chain.ts:29](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/services/chain.ts#L29)

___

### ChainTx

Ƭ **ChainTx**: [`IChainTxReference`](interfaces/IChainTxReference)

#### Defined in

[services/chain.ts:15](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/services/chain.ts#L15)

___

### ClientOptions

Ƭ **ClientOptions**: `Object`

Optional VocdoniSDKClient arguments

#### Type declaration

| Name | Type |
| :------ | :------ |
| `api_url?` | `string` |
| `electionId?` | `string` |
| `env` | [`EnvOptions`](enums/EnvOptions) |
| `faucet?` | `Partial`\<[`FaucetOptions`](modules#faucetoptions)\> |
| `tx_wait?` | `TxWaitOptions` |
| `wallet?` | `Wallet` \| `Signer` |

#### Defined in

[client.ts:85](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/client.ts#L85)

___

### CspCensusProof

Ƭ **CspCensusProof**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `proof_type?` | [`CspProofType`](enums/CspProofType) |
| `signature` | `string` |
| `type?` | `number` |
| `weight?` | `bigint` |

#### Defined in

[services/census.ts:56](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/services/census.ts#L56)

___

### ElectionCreatedInformation

Ƭ **ElectionCreatedInformation**: [`IElectionCreateResponse`](interfaces/IElectionCreateResponse)

#### Defined in

[services/election.ts:37](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/services/election.ts#L37)

___

### ElectionCreationStepValue

Ƭ **ElectionCreationStepValue**: \{ `key`: [`GET_CHAIN_DATA`](enums/ElectionCreationSteps.md#get_chain_data)  } \| \{ `key`: [`CENSUS_CREATED`](enums/ElectionCreationSteps.md#census_created)  } \| \{ `key`: [`GET_ACCOUNT_DATA`](enums/ElectionCreationSteps.md#get_account_data)  } \| \{ `key`: [`GET_DATA_PIN`](enums/ElectionCreationSteps.md#get_data_pin)  } \| \{ `key`: [`GENERATE_TX`](enums/ElectionCreationSteps.md#generate_tx)  } \| \{ `key`: [`SIGN_TX`](enums/ElectionCreationSteps.md#sign_tx)  } \| \{ `key`: [`CREATING`](enums/ElectionCreationSteps.md#creating) ; `txHash`: `string`  } \| \{ `electionId`: `string` ; `key`: [`DONE`](enums/ElectionCreationSteps#done)  }

#### Defined in

[services/election.ts:50](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/services/election.ts#L50)

___

### ElectionIdOption

Ƭ **ElectionIdOption**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `electionId` | `string` |

#### Defined in

[types/client/account.ts:5](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/client/account.ts#L5)

___

### ElectionKeys

Ƭ **ElectionKeys**: [`IElectionKeysResponse`](interfaces/IElectionKeysResponse)

#### Defined in

[services/election.ts:36](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/services/election.ts#L36)

___

### ElectionMeta

Ƭ **ElectionMeta**: `AnyJson` \| `JsonArray` \| `JsonMap`

#### Defined in

[types/election/election.ts:101](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/election.ts#L101)

___

### ElectionResultsType

Ƭ **ElectionResultsType**: \{ `name`: [`SINGLE_CHOICE_MULTIQUESTION`](enums/ElectionResultsTypeNames.md#single_choice_multiquestion) ; `properties`: {}  } \| \{ `name`: [`MULTIPLE_CHOICE`](enums/ElectionResultsTypeNames.md#multiple_choice) ; `properties`: \{ `abstainValues`: `string`[] ; `canAbstain`: `boolean` ; `repeatChoice`: `boolean`  }  } \| \{ `name`: [`BUDGET`](enums/ElectionResultsTypeNames.md#budget) ; `properties`: \{ `forceFullBudget`: `boolean` ; `maxBudget`: `number` ; `minStep`: `number` ; `useCensusWeightAsBudget`: `boolean`  }  } \| \{ `name`: [`APPROVAL`](enums/ElectionResultsTypeNames#approval) ; `properties`: \{ `acceptValue`: `number` ; `rejectValue`: `number`  }  }

#### Defined in

[types/metadata/election.ts:44](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/metadata/election.ts#L44)

___

### FaucetOptions

Ƭ **FaucetOptions**: `FaucetServiceParameters`

#### Defined in

[services/faucet.ts:28](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/services/faucet.ts#L28)

___

### FaucetPackage

Ƭ **FaucetPackage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `payload` | `string` |
| `signature` | `string` |

#### Defined in

[services/faucet.ts:23](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/services/faucet.ts#L23)

___

### HasAlreadyVotedOptions

Ƭ **HasAlreadyVotedOptions**: `Partial`\<[`WalletOption`](modules.md#walletoption) & [`ElectionIdOption`](modules.md#electionidoption) & [`VoteIdOption`](modules#voteidoption)\>

#### Defined in

[types/client/account.ts:10](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/client/account.ts#L10)

___

### IAccountSummary

Ƭ **IAccountSummary**: `Pick`\<`IAccountInfoResponse`, ``"address"`` \| ``"balance"`` \| ``"nonce"``\>

#### Defined in

[api/account.ts:17](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/api/account.ts#L17)

___

### IBudgetElectionParameters

Ƭ **IBudgetElectionParameters**: [`IBudgetElectionParametersWithCensusWeight`](interfaces/IBudgetElectionParametersWithCensusWeight.md) \| [`IBudgetElectionParametersWithBudget`](interfaces/IBudgetElectionParametersWithBudget)

#### Defined in

[types/election/budget.ts:21](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/budget.ts#L21)

___

### IsAbleToVoteOptions

Ƭ **IsAbleToVoteOptions**: `Partial`\<[`WalletOption`](modules.md#walletoption) & [`ElectionIdOption`](modules.md#electionidoption) & [`VoteIdOption`](modules#voteidoption)\>

#### Defined in

[types/client/account.ts:12](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/client/account.ts#L12)

___

### IsInCensusOptions

Ƭ **IsInCensusOptions**: `Partial`\<[`WalletOption`](modules.md#walletoption) & [`ElectionIdOption`](modules#electionidoption)\>

#### Defined in

[types/client/account.ts:9](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/client/account.ts#L9)

___

### ParsedPredicate

Ƭ **ParsedPredicate**: [`ICensus3ValidatePredicateResponse`](interfaces/ICensus3ValidatePredicateResponse)

#### Defined in

[census3.ts:33](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/census3.ts#L33)

___

### SendTokensOptions

Ƭ **SendTokensOptions**: `Partial`\<[`WalletOption`](modules#walletoption)\> & \{ `amount`: `number` ; `to`: `string`  }

#### Defined in

[types/client/account.ts:8](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/client/account.ts#L8)

___

### Strategy

Ƭ **Strategy**: [`Census3Strategy`](modules#census3strategy)

#### Defined in

[census3.ts:26](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/census3.ts#L26)

___

### StrategyHolder

Ƭ **StrategyHolder**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `holder` | `string` |
| `weight` | `bigint` |

#### Defined in

[census3.ts:27](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/census3.ts#L27)

___

### StrategyHolders

Ƭ **StrategyHolders**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `holders` | [`StrategyHolder`](modules#strategyholder)[] |
| `pagination` | `Census3Pagination` |

#### Defined in

[census3.ts:28](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/census3.ts#L28)

___

### StrategyToken

Ƭ **StrategyToken**: [`Census3CreateStrategyToken`](modules#census3createstrategytoken)

#### Defined in

[census3.ts:29](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/census3.ts#L29)

___

### SupportedChain

Ƭ **SupportedChain**: [`ICensus3SupportedChain`](interfaces/ICensus3SupportedChain)

#### Defined in

[census3.ts:31](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/census3.ts#L31)

___

### SupportedOperator

Ƭ **SupportedOperator**: [`ICensus3StrategiesOperator`](interfaces/ICensus3StrategiesOperator)

#### Defined in

[census3.ts:32](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/census3.ts#L32)

___

### Token

Ƭ **Token**: `Omit`\<[`Census3Token`](modules#census3token), ``"tags"``\> & \{ `tags`: `string`[]  }

#### Defined in

[census3.ts:24](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/census3.ts#L24)

___

### TokenSummary

Ƭ **TokenSummary**: `Omit`\<[`Census3SummaryToken`](modules#census3summarytoken), ``"tags"``\> & \{ `tags`: `string`[]  }

#### Defined in

[census3.ts:25](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/census3.ts#L25)

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

[services/chain.ts:24](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/services/chain.ts#L24)

___

### VoteIdOption

Ƭ **VoteIdOption**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `voteId` | `string` |

#### Defined in

[types/client/account.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/client/account.ts#L6)

___

### VoteInfo

Ƭ **VoteInfo**: [`IVoteInfoResponse`](interfaces/IVoteInfoResponse)

#### Defined in

[services/vote.ts:15](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/services/vote.ts#L15)

___

### VoteStepValue

Ƭ **VoteStepValue**: \{ `electionId`: `string` ; `key`: [`GET_ELECTION`](enums/VoteSteps.md#get_election)  } \| \{ `key`: [`GET_PROOF`](enums/VoteSteps.md#get_proof)  } \| \{ `key`: [`GET_SIGNATURE`](enums/VoteSteps.md#get_signature) ; `signature`: `string`  } \| \{ `key`: [`CALC_ZK_PROOF`](enums/VoteSteps.md#calc_zk_proof)  } \| \{ `key`: [`GENERATE_TX`](enums/VoteSteps.md#generate_tx)  } \| \{ `key`: [`SIGN_TX`](enums/VoteSteps.md#sign_tx)  } \| \{ `key`: [`DONE`](enums/VoteSteps#done) ; `voteId`: `string`  }

#### Defined in

[services/vote.ts:28](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/services/vote.ts#L28)

___

### VoteSubmit

Ƭ **VoteSubmit**: [`IVoteSubmitResponse`](interfaces/IVoteSubmitResponse)

#### Defined in

[services/vote.ts:16](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/services/vote.ts#L16)

___

### VotesLeftCountOptions

Ƭ **VotesLeftCountOptions**: `Partial`\<[`WalletOption`](modules.md#walletoption) & [`ElectionIdOption`](modules.md#electionidoption) & [`VoteIdOption`](modules#voteidoption)\>

#### Defined in

[types/client/account.ts:11](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/client/account.ts#L11)

___

### WalletOption

Ƭ **WalletOption**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `wallet` | `Wallet` \| `Signer` |

#### Defined in

[types/client/account.ts:4](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/client/account.ts#L4)

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

[services/anonymous.ts:23](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/services/anonymous.ts#L23)

## Variables

### AccountMetadataTemplate

• `Const` **AccountMetadataTemplate**: [`AccountMetadata`](interfaces/AccountMetadata)

#### Defined in

[types/metadata/account.ts:67](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/metadata/account.ts#L67)

___

### ElectionMetadataTemplate

• `Const` **ElectionMetadataTemplate**: [`ElectionMetadata`](interfaces/ElectionMetadata)

#### Defined in

[types/metadata/election.ts:140](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/metadata/election.ts#L140)

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

[util/common.ts:36](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/util/common.ts#L36)

___

### checkValidAccountMetadata

▸ **checkValidAccountMetadata**(`accountMetadata`): [`AccountMetadata`](interfaces/AccountMetadata)

Asserts that the given metadata is valid.
Throws an exception if it is not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountMetadata` | [`AccountMetadata`](interfaces/AccountMetadata) |

#### Returns

[`AccountMetadata`](interfaces/AccountMetadata)

#### Defined in

[types/metadata/account.ts:8](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/metadata/account.ts#L8)

___

### checkValidElectionMetadata

▸ **checkValidElectionMetadata**(`electionMetadata`): [`ElectionMetadata`](interfaces/ElectionMetadata)

Asserts that the given metadata is valid.
Throws an exception if it is not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `electionMetadata` | [`ElectionMetadata`](interfaces/ElectionMetadata) |

#### Returns

[`ElectionMetadata`](interfaces/ElectionMetadata)

#### Defined in

[types/metadata/election.ts:8](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/metadata/election.ts#L8)

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

[util/common.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/util/common.ts#L6)

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

[util/common.ts:61](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/util/common.ts#L61)

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

[util/common.ts:12](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/util/common.ts#L12)

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

[util/common.ts:49](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/util/common.ts#L49)

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

[util/common.ts:16](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/util/common.ts#L16)

___

### getHex

▸ **getHex**(): `string`

Generates a random seed and returns a 32 byte keccak256 hash of it (starting with "0x")

#### Returns

`string`

#### Defined in

[util/common.ts:23](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/util/common.ts#L23)

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

[util/common.ts:8](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/util/common.ts#L8)
