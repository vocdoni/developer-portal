# @vocdoni/sdk

## Table of contents

### Classes

- [API](classes/API)
- [Account](classes/Account)
- [AccountAPI](classes/AccountAPI)
- [AccountService](classes/AccountService)
- [AnonymousService](classes/AnonymousService)
- [AnonymousVote](classes/AnonymousVote)
- [ApprovalElection](classes/ApprovalElection)
- [BudgetElection](classes/BudgetElection)
- [Census](classes/Census)
- [Census3CensusAPI](classes/Census3CensusAPI)
- [Census3ServiceAPI](classes/Census3ServiceAPI)
- [Census3StrategyAPI](classes/Census3StrategyAPI)
- [Census3TokenAPI](classes/Census3TokenAPI)
- [CensusAPI](classes/CensusAPI)
- [CensusService](classes/CensusService)
- [CensusStillNotPublished](classes/CensusStillNotPublished)
- [ChainAPI](classes/ChainAPI)
- [ChainService](classes/ChainService)
- [CouldNotCreateFaucetPackageError](classes/CouldNotCreateFaucetPackageError)
- [CouldNotSignTransactionError](classes/CouldNotSignTransactionError)
- [CspAPI](classes/CspAPI)
- [CspCensus](classes/CspCensus)
- [CspService](classes/CspService)
- [CspVote](classes/CspVote)
- [DuplicateConflictError](classes/DuplicateConflictError)
- [Election](classes/Election)
- [ElectionAPI](classes/ElectionAPI)
- [ElectionService](classes/ElectionService)
- [EmailMalformedError](classes/EmailMalformedError)
- [ErrAPI](classes/ErrAPI)
- [ErrAccountAlreadyExists](classes/ErrAccountAlreadyExists)
- [ErrAccountNotFound](classes/ErrAccountNotFound)
- [ErrAddressMalformed](classes/ErrAddressMalformed)
- [ErrBlockNotFound](classes/ErrBlockNotFound)
- [ErrCantABIEncodeResults](classes/ErrCantABIEncodeResults)
- [ErrCantAddKeyAndValueToTree](classes/ErrCantAddKeyAndValueToTree)
- [ErrCantAddKeyToTree](classes/ErrCantAddKeyToTree)
- [ErrCantCheckTxType](classes/ErrCantCheckTxType)
- [ErrCantComputeKeyHash](classes/ErrCantComputeKeyHash)
- [ErrCantCountVotes](classes/ErrCantCountVotes)
- [ErrCantEstimateBlockHeight](classes/ErrCantEstimateBlockHeight)
- [ErrCantExtractMetadataURI](classes/ErrCantExtractMetadataURI)
- [ErrCantFetchElection](classes/ErrCantFetchElection)
- [ErrCantFetchEnvelope](classes/ErrCantFetchEnvelope)
- [ErrCantFetchEnvelopeHeight](classes/ErrCantFetchEnvelopeHeight)
- [ErrCantFetchTokenFees](classes/ErrCantFetchTokenFees)
- [ErrCantFetchTokenTransfers](classes/ErrCantFetchTokenTransfers)
- [ErrCantGenerateFaucetPkg](classes/ErrCantGenerateFaucetPkg)
- [ErrCantGetCircomSiblings](classes/ErrCantGetCircomSiblings)
- [ErrCantMarshalMetadata](classes/ErrCantMarshalMetadata)
- [ErrCantParseAccountID](classes/ErrCantParseAccountID)
- [ErrCantParseBearerToken](classes/ErrCantParseBearerToken)
- [ErrCantParseBoolean](classes/ErrCantParseBoolean)
- [ErrCantParseDataAsJSON](classes/ErrCantParseDataAsJSON)
- [ErrCantParseElectionID](classes/ErrCantParseElectionID)
- [ErrCantParseHexString](classes/ErrCantParseHexString)
- [ErrCantParseMetadataAsJSON](classes/ErrCantParseMetadataAsJSON)
- [ErrCantParseNumber](classes/ErrCantParseNumber)
- [ErrCantParseOrgID](classes/ErrCantParseOrgID)
- [ErrCantParsePayloadAsJSON](classes/ErrCantParsePayloadAsJSON)
- [ErrCantParseVoteID](classes/ErrCantParseVoteID)
- [ErrCantPublishMetadata](classes/ErrCantPublishMetadata)
- [ErrCensusBuild](classes/ErrCensusBuild)
- [ErrCensusIDLengthInvalid](classes/ErrCensusIDLengthInvalid)
- [ErrCensusIndexedFlagMismatch](classes/ErrCensusIndexedFlagMismatch)
- [ErrCensusNotFound](classes/ErrCensusNotFound)
- [ErrCensusProofVerificationFailed](classes/ErrCensusProofVerificationFailed)
- [ErrCensusRootHashMismatch](classes/ErrCensusRootHashMismatch)
- [ErrCensusRootIsNil](classes/ErrCensusRootIsNil)
- [ErrCensusTypeMismatch](classes/ErrCensusTypeMismatch)
- [ErrCensusTypeUnknown](classes/ErrCensusTypeUnknown)
- [ErrDstAccountUnknown](classes/ErrDstAccountUnknown)
- [ErrDstAddressMalformed](classes/ErrDstAddressMalformed)
- [ErrElectionEndDateBeforeStart](classes/ErrElectionEndDateBeforeStart)
- [ErrElectionEndDateInThePast](classes/ErrElectionEndDateInThePast)
- [ErrElectionFinished](classes/ErrElectionFinished)
- [ErrElectionIsNil](classes/ErrElectionIsNil)
- [ErrElectionNotFound](classes/ErrElectionNotFound)
- [ErrElectionNotStarted](classes/ErrElectionNotStarted)
- [ErrElectionResultsIsNil](classes/ErrElectionResultsIsNil)
- [ErrElectionResultsMismatch](classes/ErrElectionResultsMismatch)
- [ErrElectionResultsNotYetAvailable](classes/ErrElectionResultsNotYetAvailable)
- [ErrFaucetAlreadyFunded](classes/ErrFaucetAlreadyFunded)
- [ErrFileSizeTooBig](classes/ErrFileSizeTooBig)
- [ErrGettingSIK](classes/ErrGettingSIK)
- [ErrIndexedCensusCantUseWeight](classes/ErrIndexedCensusCantUseWeight)
- [ErrIndexerQueryFailed](classes/ErrIndexerQueryFailed)
- [ErrInvalidCensusKeyLength](classes/ErrInvalidCensusKeyLength)
- [ErrInvalidStatus](classes/ErrInvalidStatus)
- [ErrKeyNotFoundInCensus](classes/ErrKeyNotFoundInCensus)
- [ErrMarshalingJSONFailed](classes/ErrMarshalingJSONFailed)
- [ErrMarshalingServerJSONFailed](classes/ErrMarshalingServerJSONFailed)
- [ErrMarshalingServerProto](classes/ErrMarshalingServerProto)
- [ErrMetadataProvidedButNoURI](classes/ErrMetadataProvidedButNoURI)
- [ErrMetadataURINotMatchContent](classes/ErrMetadataURINotMatchContent)
- [ErrMissingParameter](classes/ErrMissingParameter)
- [ErrNoElectionKeys](classes/ErrNoElectionKeys)
- [ErrOrgNotFound](classes/ErrOrgNotFound)
- [ErrPageNotFound](classes/ErrPageNotFound)
- [ErrParamDumpOrRootMissing](classes/ErrParamDumpOrRootMissing)
- [ErrParamKeyOrProofMissing](classes/ErrParamKeyOrProofMissing)
- [ErrParamNetworkInvalid](classes/ErrParamNetworkInvalid)
- [ErrParamParticipantsMissing](classes/ErrParamParticipantsMissing)
- [ErrParamParticipantsTooBig](classes/ErrParamParticipantsTooBig)
- [ErrParamRootInvalid](classes/ErrParamRootInvalid)
- [ErrParamStatusInvalid](classes/ErrParamStatusInvalid)
- [ErrParamToInvalid](classes/ErrParamToInvalid)
- [ErrParticipantKeyMissing](classes/ErrParticipantKeyMissing)
- [ErrSIKNotFound](classes/ErrSIKNotFound)
- [ErrTransactionNotFound](classes/ErrTransactionNotFound)
- [ErrTxTypeMismatch](classes/ErrTxTypeMismatch)
- [ErrUnmarshalingServerProto](classes/ErrUnmarshalingServerProto)
- [ErrVochainEmptyReply](classes/ErrVochainEmptyReply)
- [ErrVochainGetTxFailed](classes/ErrVochainGetTxFailed)
- [ErrVochainOverloaded](classes/ErrVochainOverloaded)
- [ErrVochainReturnedErrorCode](classes/ErrVochainReturnedErrorCode)
- [ErrVochainReturnedInvalidElectionID](classes/ErrVochainReturnedInvalidElectionID)
- [ErrVochainReturnedWrongMetadataCID](classes/ErrVochainReturnedWrongMetadataCID)
- [ErrVochainSendTxFailed](classes/ErrVochainSendTxFailed)
- [ErrVoteIDMalformed](classes/ErrVoteIDMalformed)
- [ErrVoteNotFound](classes/ErrVoteNotFound)
- [ErrWalletNotFound](classes/ErrWalletNotFound)
- [ErrWalletPrivKeyAlreadyExists](classes/ErrWalletPrivKeyAlreadyExists)
- [FaucetAPI](classes/FaucetAPI)
- [FaucetService](classes/FaucetService)
- [FileAPI](classes/FileAPI)
- [FileService](classes/FileService)
- [GenericInternalServerError](classes/GenericInternalServerError)
- [InvalidElection](classes/InvalidElection)
- [InvalidTxFormatError](classes/InvalidTxFormatError)
- [InvalidUserDataError](classes/InvalidUserDataError)
- [MalformedBodyError](classes/MalformedBodyError)
- [MalformedURLParamError](classes/MalformedURLParamError)
- [MarshalingServerJSONFailedError](classes/MarshalingServerJSONFailedError)
- [MultiChoiceElection](classes/MultiChoiceElection)
- [NoOrganizationProvidedError](classes/NoOrganizationProvidedError)
- [NoOrganizationsError](classes/NoOrganizationsError)
- [OffchainCensus](classes/OffchainCensus)
- [OrganizationNotFoundError](classes/OrganizationNotFoundError)
- [PasswordTooShortError](classes/PasswordTooShortError)
- [PlainCensus](classes/PlainCensus)
- [PublishedCensus](classes/PublishedCensus)
- [PublishedElection](classes/PublishedElection)
- [RemoteSigner](classes/RemoteSigner)
- [RemoteSignerAPI](classes/RemoteSignerAPI)
- [RemoteSignerService](classes/RemoteSignerService)
- [Service](classes/Service)
- [StrategyCensus](classes/StrategyCensus)
- [TokenCensus](classes/TokenCensus)
- [TxTypeNotAllowedError](classes/TxTypeNotAllowedError)
- [UnauthorizedError](classes/UnauthorizedError)
- [UnpublishedElection](classes/UnpublishedElection)
- [VocdoniCensus3Client](classes/VocdoniCensus3Client)
- [VocdoniSDKClient](classes/VocdoniSDKClient)
- [Vote](classes/Vote)
- [VoteAPI](classes/VoteAPI)
- [VoteService](classes/VoteService)
- [WalletAPI](classes/WalletAPI)
- [WeightedCensus](classes/WeightedCensus)
- [ZkAPI](classes/ZkAPI)

### Interfaces

- [AccountMetadata](interfaces/AccountMetadata)
- [AdminTx](interfaces/AdminTx)
- [CircuitInputs](interfaces/CircuitInputs)
- [CollectFaucetTx](interfaces/CollectFaucetTx)
- [ElectionMetadata](interfaces/ElectionMetadata)
- [FetchAccountsParameters](interfaces/FetchAccountsParameters)
- [FetchBlocksParameters](interfaces/FetchBlocksParameters)
- [FetchElectionsParameters](interfaces/FetchElectionsParameters)
- [FetchFeesParameters](interfaces/FetchFeesParameters)
- [FetchOrganizationParameters](interfaces/FetchOrganizationParameters)
- [FetchTransactionsParameters](interfaces/FetchTransactionsParameters)
- [FetchTransfersParameters](interfaces/FetchTransfersParameters)
- [FetchVotesParameters](interfaces/FetchVotesParameters)
- [IAccount](interfaces/IAccount)
- [IAccountInfoResponse](interfaces/IAccountInfoResponse)
- [IAccountsList](interfaces/IAccountsList)
- [IAccountsListResponse](interfaces/IAccountsListResponse)
- [IApprovalElectionParameters](interfaces/IApprovalElectionParameters)
- [IBlock](interfaces/IBlock)
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
- [ICensus3StrategyHoldersQueueResponse](interfaces/ICensus3StrategyHoldersQueueResponse)
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
- [ICensusPublishAsyncResponse](interfaces/ICensusPublishAsyncResponse)
- [ICensusPublishResponse](interfaces/ICensusPublishResponse)
- [IChainBlockInfoResponse](interfaces/IChainBlockInfoResponse)
- [IChainBlocksList](interfaces/IChainBlocksList)
- [IChainBlocksListResponse](interfaces/IChainBlocksListResponse)
- [IChainFeesListResponse](interfaces/IChainFeesListResponse)
- [IChainGetCircuitResponse](interfaces/IChainGetCircuitResponse)
- [IChainGetCostsResponse](interfaces/IChainGetCostsResponse)
- [IChainGetInfoResponse](interfaces/IChainGetInfoResponse)
- [IChainOrganizationListResponse](interfaces/IChainOrganizationListResponse)
- [IChainOrganizationResponse](interfaces/IChainOrganizationResponse)
- [IChainSubmitTxResponse](interfaces/IChainSubmitTxResponse)
- [IChainTransfersList](interfaces/IChainTransfersList)
- [IChainTransfersListResponse](interfaces/IChainTransfersListResponse)
- [IChainTxCosts](interfaces/IChainTxCosts)
- [IChainTxList](interfaces/IChainTxList)
- [IChainTxListResponse](interfaces/IChainTxListResponse)
- [IChainTxReference](interfaces/IChainTxReference)
- [IChainValidator](interfaces/IChainValidator)
- [IChainValidatorsListResponse](interfaces/IChainValidatorsListResponse)
- [IChoice](interfaces/IChoice)
- [ICspAuthStep](interfaces/ICspAuthStep)
- [ICspFinalStepResponse](interfaces/ICspFinalStepResponse)
- [ICspInfoResponse](interfaces/ICspInfoResponse)
- [ICspIntermediateStepResponse](interfaces/ICspIntermediateStepResponse)
- [ICspSignResponse](interfaces/ICspSignResponse)
- [IElectionCreateResponse](interfaces/IElectionCreateResponse)
- [IElectionInfoResponse](interfaces/IElectionInfoResponse)
- [IElectionKeysResponse](interfaces/IElectionKeysResponse)
- [IElectionList](interfaces/IElectionList)
- [IElectionListResponse](interfaces/IElectionListResponse)
- [IElectionMode](interfaces/IElectionMode)
- [IElectionNextIdResponse](interfaces/IElectionNextIdResponse)
- [IElectionParameters](interfaces/IElectionParameters)
- [IElectionSummary](interfaces/IElectionSummary)
- [IElectionType](interfaces/IElectionType)
- [IEncryptionKey](interfaces/IEncryptionKey)
- [IFeesList](interfaces/IFeesList)
- [IInvalidElectionParameters](interfaces/IInvalidElectionParameters)
- [IMultiChoiceElectionParameters](interfaces/IMultiChoiceElectionParameters)
- [IPublishedElectionParameters](interfaces/IPublishedElectionParameters)
- [IQuestion](interfaces/IQuestion)
- [IRemoteSignerAddressesResponse](interfaces/IRemoteSignerAddressesResponse)
- [IRemoteSignerLoginResponse](interfaces/IRemoteSignerLoginResponse)
- [IRemoteSignerRefreshResponse](interfaces/IRemoteSignerRefreshResponse)
- [IRemoteSignerSignResponse](interfaces/IRemoteSignerSignResponse)
- [IRemoteSignerSignTxResponse](interfaces/IRemoteSignerSignTxResponse)
- [ITallyMode](interfaces/ITallyMode)
- [ITransfer](interfaces/ITransfer)
- [IVoteEncryptedPackage](interfaces/IVoteEncryptedPackage)
- [IVoteListResponse](interfaces/IVoteListResponse)
- [IVoteMode](interfaces/IVoteMode)
- [IVotePackage](interfaces/IVotePackage)
- [IVoteSubmitResponse](interfaces/IVoteSubmitResponse)
- [IVoteType](interfaces/IVoteType)
- [IZkProofResponse](interfaces/IZkProofResponse)
- [IZkSIKResponse](interfaces/IZkSIKResponse)
- [MintTokensTx](interfaces/MintTokensTx)
- [NewProcessTx](interfaces/NewProcessTx)
- [OrganizationList](interfaces/OrganizationList)
- [PaginationResponse](interfaces/PaginationResponse)
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
- [VotesList](interfaces/VotesList)

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

### Functions

- [areEqualHexStrings](sdk-reference#areequalhexstrings)
- [checkValidAccountMetadata](sdk-reference#checkvalidaccountmetadata)
- [checkValidElectionMetadata](sdk-reference#checkvalidelectionmetadata)
- [delay](sdk-reference#delay)
- [dotobject](sdk-reference#dotobject)
- [ensure0x](sdk-reference#ensure0x)
- [formatUnits](sdk-reference#formatunits)
- [getBytes](sdk-reference#getbytes)
- [getElectionMetadataTemplate](sdk-reference#getelectionmetadatatemplate)
- [getHex](sdk-reference#gethex)
- [strip0x](sdk-reference#strip0x)

### Type Aliases

- [AbstainProperties](sdk-reference#abstainproperties)
- [AccountData](sdk-reference#accountdata)
- [AllElectionStatus](sdk-reference#allelectionstatus)
- [ApprovalProperties](sdk-reference#approvalproperties)
- [ArchivedAccountData](sdk-reference#archivedaccountdata)
- [BudgetProperties](sdk-reference#budgetproperties)
- [Census3Census](sdk-reference#census3census)
- [Census3CreateStrategyToken](sdk-reference#census3createstrategytoken)
- [Census3Strategy](sdk-reference#census3strategy)
- [Census3StrategyToken](sdk-reference#census3strategytoken)
- [Census3SummaryToken](sdk-reference#census3summarytoken)
- [Census3Token](sdk-reference#census3token)
- [CensusImportExport](sdk-reference#censusimportexport)
- [CensusProof](sdk-reference#censusproof)
- [ChainCircuits](sdk-reference#chaincircuits)
- [ChainCosts](sdk-reference#chaincosts)
- [ChainData](sdk-reference#chaindata)
- [ChainTx](sdk-reference#chaintx)
- [Choice](sdk-reference#choice)
- [ChoiceProperties](sdk-reference#choiceproperties)
- [ClientOptions](sdk-reference#clientoptions)
- [CspCensusProof](sdk-reference#cspcensusproof)
- [CustomMeta](sdk-reference#custommeta)
- [ElectionCreatedInformation](sdk-reference#electioncreatedinformation)
- [ElectionCreationStepValue](sdk-reference#electioncreationstepvalue)
- [ElectionIdOption](sdk-reference#electionidoption)
- [ElectionKeys](sdk-reference#electionkeys)
- [ElectionList](sdk-reference#electionlist)
- [ElectionListWithPagination](sdk-reference#electionlistwithpagination)
- [ElectionResultsType](sdk-reference#electionresultstype)
- [FaucetOptions](sdk-reference#faucetoptions)
- [FaucetPackage](sdk-reference#faucetpackage)
- [Fee](sdk-reference#fee)
- [FetchAccountsParametersWithPagination](sdk-reference#fetchaccountsparameterswithpagination)
- [FetchBlocksParametersWithPagination](sdk-reference#fetchblocksparameterswithpagination)
- [FetchElectionsParametersWithPagination](sdk-reference#fetchelectionsparameterswithpagination)
- [FetchFeesParametersWithPagination](sdk-reference#fetchfeesparameterswithpagination)
- [FetchOrganizationParametersWithPagination](sdk-reference#fetchorganizationparameterswithpagination)
- [FetchTransactionsParametersWithPagination](sdk-reference#fetchtransactionsparameterswithpagination)
- [FetchTransfersParametersWithPagination](sdk-reference#fetchtransfersparameterswithpagination)
- [FetchVotesParametersWithPagination](sdk-reference#fetchvotesparameterswithpagination)
- [HasAlreadyVotedOptions](sdk-reference#hasalreadyvotedoptions)
- [IAccountSummary](sdk-reference#iaccountsummary)
- [IBudgetElectionParameters](sdk-reference#ibudgetelectionparameters)
- [IsAbleToVoteOptions](sdk-reference#isabletovoteoptions)
- [IsInCensusOptions](sdk-reference#isincensusoptions)
- [PaginationRequest](sdk-reference#paginationrequest)
- [ParsedPredicate](sdk-reference#parsedpredicate)
- [Question](sdk-reference#question)
- [RemoteSignerCredentials](sdk-reference#remotesignercredentials)
- [RemoteSignerProperties](sdk-reference#remotesignerproperties)
- [SendTokensOptions](sdk-reference#sendtokensoptions)
- [Strategy](sdk-reference#strategy)
- [StrategyHolder](sdk-reference#strategyholder)
- [StrategyHolders](sdk-reference#strategyholders)
- [StrategyToken](sdk-reference#strategytoken)
- [SupportedChain](sdk-reference#supportedchain)
- [SupportedOperator](sdk-reference#supportedoperator)
- [Token](sdk-reference#token)
- [TokenSummary](sdk-reference#tokensummary)
- [TxWaitOptions](sdk-reference#txwaitoptions)
- [VoteIdOption](sdk-reference#voteidoption)
- [VoteInfo](sdk-reference#voteinfo)
- [VoteInfoResponse](sdk-reference#voteinforesponse)
- [VoteStepValue](sdk-reference#votestepvalue)
- [VoteSubmit](sdk-reference#votesubmit)
- [VoteSummary](sdk-reference#votesummary)
- [VotesLeftCountOptions](sdk-reference#votesleftcountoptions)
- [WalletOption](sdk-reference#walletoption)
- [ZkProof](sdk-reference#zkproof)

### Variables

- [AccountMetadataTemplate](sdk-reference#accountmetadatatemplate)
- [ElectionMetadataTemplate](sdk-reference#electionmetadatatemplate)

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

[src/util/common.ts:35](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/util/common.ts#L35)

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

[src/types/metadata/account.ts:8](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/metadata/account.ts#L8)

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

[src/types/metadata/election.ts:9](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/metadata/election.ts#L9)

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

[src/util/common.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/util/common.ts#L6)

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

[src/util/common.ts:60](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/util/common.ts#L60)

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

[src/util/common.ts:12](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/util/common.ts#L12)

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

[src/util/common.ts:48](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/util/common.ts#L48)

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

[src/util/common.ts:16](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/util/common.ts#L16)

___

### getElectionMetadataTemplate

▸ **getElectionMetadataTemplate**(): `any`

#### Returns

`any`

#### Defined in

[src/types/metadata/election.ts:209](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/metadata/election.ts#L209)

___

### getHex

▸ **getHex**(): `string`

Generates a random seed and returns a 32 byte keccak256 hash of it (starting with "0x")

#### Returns

`string`

#### Defined in

[src/util/common.ts:23](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/util/common.ts#L23)

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

[src/util/common.ts:8](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/util/common.ts#L8)

## Type Aliases

### AbstainProperties

Ƭ **AbstainProperties**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `abstainValues` | `string`[] |
| `canAbstain` | `boolean` |

#### Defined in

[src/types/metadata/election.ts:50](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/metadata/election.ts#L50)

___

### AccountData

Ƭ **AccountData**: \{ `account`: [`Account`](classes/Account.md)  } & `Pick`\<[`IAccountInfoResponse`](interfaces/IAccountInfoResponse), ``"address"`` \| ``"balance"`` \| ``"nonce"`` \| ``"electionIndex"`` \| ``"infoURL"`` \| ``"sik"`` \| ``"transfersCount"`` \| ``"feesCount"``\>

#### Defined in

[src/services/account.ts:29](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/account.ts#L29)

___

### AllElectionStatus

Ƭ **AllElectionStatus**: [`ElectionStatus`](enums/ElectionStatus.md) \| [`ElectionStatusReady`](enums/ElectionStatusReady)

#### Defined in

[src/types/election/published.ts:25](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L25)

___

### ApprovalProperties

Ƭ **ApprovalProperties**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `acceptValue` | `number` |
| `rejectValue` | `number` |

#### Defined in

[src/types/metadata/election.ts:70](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/metadata/election.ts#L70)

___

### ArchivedAccountData

Ƭ **ArchivedAccountData**: `Pick`\<[`AccountData`](sdk-reference#accountdata), ``"address"`` \| ``"account"``\>

#### Defined in

[src/services/account.ts:36](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/account.ts#L36)

___

### BudgetProperties

Ƭ **BudgetProperties**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `forceFullBudget` | `boolean` |
| `maxBudget` | `number` |
| `minStep` | `number` |
| `useCensusWeightAsBudget` | `boolean` |

#### Defined in

[src/types/metadata/election.ts:63](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/metadata/election.ts#L63)

___

### Census3Census

Ƭ **Census3Census**: [`ICensus3CensusResponse`](interfaces/ICensus3CensusResponse)

#### Defined in

[src/census3.ts:29](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/census3.ts#L29)

___

### Census3CreateStrategyToken

Ƭ **Census3CreateStrategyToken**: `Omit`\<[`Census3StrategyToken`](sdk-reference#census3strategytoken), ``"chainAddress"``\>

#### Defined in

[src/api/census3/strategy.ts:92](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/census3/strategy.ts#L92)

___

### Census3Strategy

Ƭ **Census3Strategy**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `ID` | `number` | The strategy identifier |
| `alias` | `string` | The strategy alias |
| `predicate` | `string` | The strategy predicate |
| `tokens` | \{ `[key: string]`: [`Census3StrategyToken`](sdk-reference#census3strategytoken);  } | The list of tokens |
| `uri` | `string` | The URI of the strategy |

#### Defined in

[src/api/census3/strategy.ts:33](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/census3/strategy.ts#L33)

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
| `iconURI?` | `string` | The token icon URI. |
| `minBalance?` | `string` | The minimum balance for the strategy. |

#### Defined in

[src/api/census3/strategy.ts:60](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/census3/strategy.ts#L60)

___

### Census3SummaryToken

Ƭ **Census3SummaryToken**: `Omit`\<[`Census3Token`](sdk-reference#census3token), ``"status"`` \| ``"size"``\> & \{ `synced`: `boolean`  }

#### Defined in

[src/api/census3/token.ts:12](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/census3/token.ts#L12)

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

[src/api/census3/token.ts:14](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/census3/token.ts#L14)

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

[src/services/census.ts:49](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/census.ts#L49)

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

[src/services/census.ts:33](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/census.ts#L33)

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

[src/services/anonymous.ts:52](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/anonymous.ts#L52)

___

### ChainCosts

Ƭ **ChainCosts**: [`IChainGetCostsResponse`](interfaces/IChainGetCostsResponse)

#### Defined in

[src/services/chain.ts:14](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/chain.ts#L14)

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

[src/services/chain.ts:66](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/chain.ts#L66)

___

### ChainTx

Ƭ **ChainTx**: [`Tx`](interfaces/Tx)

#### Defined in

[src/services/chain.ts:15](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/chain.ts#L15)

___

### Choice

Ƭ **Choice**: `Pick`\<[`IChoice`](interfaces/IChoice), ``"title"`` \| ``"value"`` \| ``"meta"``\>

#### Defined in

[src/types/metadata/election.ts:23](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/metadata/election.ts#L23)

___

### ChoiceProperties

Ƭ **ChoiceProperties**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `numChoices` | \{ `max`: `number` ; `min`: `number`  } |
| `numChoices.max` | `number` |
| `numChoices.min` | `number` |
| `repeatChoice` | `boolean` |

#### Defined in

[src/types/metadata/election.ts:55](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/metadata/election.ts#L55)

___

### ClientOptions

Ƭ **ClientOptions**: `Object`

Optional VocdoniSDKClient arguments

#### Type declaration

| Name | Type |
| :------ | :------ |
| `api_url?` | `string` |
| `census?` | `CensusOptions` |
| `electionId?` | `string` |
| `env` | [`EnvOptions`](enums/EnvOptions) |
| `faucet?` | `Partial`\<[`FaucetOptions`](sdk-reference#faucetoptions)\> |
| `tx_wait?` | `TxWaitOptions` |
| `wallet?` | `Wallet` \| `Signer` \| [`RemoteSigner`](classes/RemoteSigner) |

#### Defined in

[src/client.ts:109](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/client.ts#L109)

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

[src/services/census.ts:63](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/census.ts#L63)

___

### CustomMeta

Ƭ **CustomMeta**: `AnyJson` \| `JsonArray` \| `JsonMap`

#### Defined in

[src/types/election/election.ts:110](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L110)

___

### ElectionCreatedInformation

Ƭ **ElectionCreatedInformation**: [`IElectionCreateResponse`](interfaces/IElectionCreateResponse)

#### Defined in

[src/services/election.ts:55](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/election.ts#L55)

___

### ElectionCreationStepValue

Ƭ **ElectionCreationStepValue**: \{ `key`: [`GET_CHAIN_DATA`](enums/ElectionCreationSteps.md#get_chain_data)  } \| \{ `key`: [`CENSUS_CREATED`](enums/ElectionCreationSteps.md#census_created)  } \| \{ `key`: [`GET_ACCOUNT_DATA`](enums/ElectionCreationSteps.md#get_account_data)  } \| \{ `key`: [`GET_DATA_PIN`](enums/ElectionCreationSteps.md#get_data_pin)  } \| \{ `key`: [`GENERATE_TX`](enums/ElectionCreationSteps.md#generate_tx)  } \| \{ `key`: [`SIGN_TX`](enums/ElectionCreationSteps.md#sign_tx)  } \| \{ `key`: [`CREATING`](enums/ElectionCreationSteps.md#creating) ; `txHash`: `string`  } \| \{ `electionId`: `string` ; `key`: [`DONE`](enums/ElectionCreationSteps#done)  }

#### Defined in

[src/services/election.ts:68](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/election.ts#L68)

___

### ElectionIdOption

Ƭ **ElectionIdOption**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `electionId` | `string` |

#### Defined in

[src/types/client/account.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/client/account.ts#L6)

___

### ElectionKeys

Ƭ **ElectionKeys**: [`IElectionKeysResponse`](interfaces/IElectionKeysResponse)

#### Defined in

[src/services/election.ts:54](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/election.ts#L54)

___

### ElectionList

Ƭ **ElectionList**: ([`PublishedElection`](classes/PublishedElection.md) \| [`InvalidElection`](classes/InvalidElection))[]

#### Defined in

[src/services/election.ts:51](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/election.ts#L51)

___

### ElectionListWithPagination

Ƭ **ElectionListWithPagination**: \{ `elections`: [`ElectionList`](sdk-reference.md#electionlist)  } & [`PaginationResponse`](interfaces/PaginationResponse)

#### Defined in

[src/services/election.ts:52](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/election.ts#L52)

___

### ElectionResultsType

Ƭ **ElectionResultsType**: \{ `name`: [`SINGLE_CHOICE_MULTIQUESTION`](enums/ElectionResultsTypeNames.md#single_choice_multiquestion) ; `properties`: {}  } \| \{ `name`: [`MULTIPLE_CHOICE`](enums/ElectionResultsTypeNames.md#multiple_choice) ; `properties`: [`AbstainProperties`](sdk-reference.md#abstainproperties) & [`ChoiceProperties`](sdk-reference.md#choiceproperties)  } \| \{ `name`: [`BUDGET`](enums/ElectionResultsTypeNames.md#budget) ; `properties`: [`BudgetProperties`](sdk-reference.md#budgetproperties)  } \| \{ `name`: [`APPROVAL`](enums/ElectionResultsTypeNames.md#approval) ; `properties`: [`ApprovalProperties`](sdk-reference.md#approvalproperties)  } \| \{ `name`: [`QUADRATIC`](enums/ElectionResultsTypeNames.md#quadratic) ; `properties`: [`BudgetProperties`](sdk-reference#budgetproperties) & \{ `quadraticCost`: `number`  }  }

#### Defined in

[src/types/metadata/election.ts:75](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/metadata/election.ts#L75)

___

### FaucetOptions

Ƭ **FaucetOptions**: `FaucetServiceParameters`

#### Defined in

[src/services/faucet.ts:28](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/faucet.ts#L28)

___

### FaucetPackage

Ƭ **FaucetPackage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `payload` | `string` |
| `signature` | `string` |

#### Defined in

[src/services/faucet.ts:23](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/faucet.ts#L23)

___

### Fee

Ƭ **Fee**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cost` | `number` | The cost of the transaction |
| `from` | `string` | The account generating the transaction |
| `height` | `number` | The block number |
| `reference` | `string` | The transaction hash |
| `timestamp` | `string` | The timestamp of the transaction |
| `txType` | `string` | The type of the transaction |

#### Defined in

[src/api/chain.ts:416](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L416)

___

### FetchAccountsParametersWithPagination

Ƭ **FetchAccountsParametersWithPagination**: [`FetchAccountsParameters`](interfaces/FetchAccountsParameters.md) & [`PaginationRequest`](sdk-reference#paginationrequest)

#### Defined in

[src/services/account.ts:14](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/account.ts#L14)

___

### FetchBlocksParametersWithPagination

Ƭ **FetchBlocksParametersWithPagination**: [`FetchBlocksParameters`](interfaces/FetchBlocksParameters.md) & [`PaginationRequest`](sdk-reference#paginationrequest)

#### Defined in

[src/services/chain.ts:21](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/chain.ts#L21)

___

### FetchElectionsParametersWithPagination

Ƭ **FetchElectionsParametersWithPagination**: [`FetchElectionsParameters`](interfaces/FetchElectionsParameters.md) & [`PaginationRequest`](sdk-reference#paginationrequest)

#### Defined in

[src/services/election.ts:40](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/election.ts#L40)

___

### FetchFeesParametersWithPagination

Ƭ **FetchFeesParametersWithPagination**: [`FetchFeesParameters`](interfaces/FetchFeesParameters.md) & [`PaginationRequest`](sdk-reference#paginationrequest)

#### Defined in

[src/services/chain.ts:18](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/chain.ts#L18)

___

### FetchOrganizationParametersWithPagination

Ƭ **FetchOrganizationParametersWithPagination**: [`FetchOrganizationParameters`](interfaces/FetchOrganizationParameters.md) & [`PaginationRequest`](sdk-reference#paginationrequest)

#### Defined in

[src/services/chain.ts:17](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/chain.ts#L17)

___

### FetchTransactionsParametersWithPagination

Ƭ **FetchTransactionsParametersWithPagination**: [`FetchTransactionsParameters`](interfaces/FetchTransactionsParameters.md) & [`PaginationRequest`](sdk-reference#paginationrequest)

#### Defined in

[src/services/chain.ts:19](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/chain.ts#L19)

___

### FetchTransfersParametersWithPagination

Ƭ **FetchTransfersParametersWithPagination**: [`FetchTransfersParameters`](interfaces/FetchTransfersParameters.md) & [`PaginationRequest`](sdk-reference#paginationrequest)

#### Defined in

[src/services/chain.ts:20](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/chain.ts#L20)

___

### FetchVotesParametersWithPagination

Ƭ **FetchVotesParametersWithPagination**: [`FetchVotesParameters`](interfaces/FetchVotesParameters.md) & [`PaginationRequest`](sdk-reference#paginationrequest)

#### Defined in

[src/services/vote.ts:16](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/vote.ts#L16)

___

### HasAlreadyVotedOptions

Ƭ **HasAlreadyVotedOptions**: `Partial`\<[`WalletOption`](sdk-reference.md#walletoption) & [`ElectionIdOption`](sdk-reference.md#electionidoption) & [`VoteIdOption`](sdk-reference#voteidoption)\>

#### Defined in

[src/types/client/account.ts:11](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/client/account.ts#L11)

___

### IAccountSummary

Ƭ **IAccountSummary**: `Pick`\<[`IAccountInfoResponse`](interfaces/IAccountInfoResponse), ``"address"`` \| ``"balance"`` \| ``"nonce"``\>

#### Defined in

[src/api/account.ts:13](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/account.ts#L13)

___

### IBudgetElectionParameters

Ƭ **IBudgetElectionParameters**: [`IBudgetElectionParametersWithCensusWeight`](interfaces/IBudgetElectionParametersWithCensusWeight.md) \| [`IBudgetElectionParametersWithBudget`](interfaces/IBudgetElectionParametersWithBudget)

#### Defined in

[src/types/election/budget.ts:27](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/budget.ts#L27)

___

### IsAbleToVoteOptions

Ƭ **IsAbleToVoteOptions**: `Partial`\<[`WalletOption`](sdk-reference.md#walletoption) & [`ElectionIdOption`](sdk-reference.md#electionidoption) & [`VoteIdOption`](sdk-reference#voteidoption)\>

#### Defined in

[src/types/client/account.ts:13](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/client/account.ts#L13)

___

### IsInCensusOptions

Ƭ **IsInCensusOptions**: `Partial`\<[`WalletOption`](sdk-reference.md#walletoption) & [`ElectionIdOption`](sdk-reference#electionidoption)\>

#### Defined in

[src/types/client/account.ts:10](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/client/account.ts#L10)

___

### PaginationRequest

Ƭ **PaginationRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `limit` | `number` |
| `page` | `number` |

#### Defined in

[src/api/api.ts:125](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/api.ts#L125)

___

### ParsedPredicate

Ƭ **ParsedPredicate**: [`ICensus3ValidatePredicateResponse`](interfaces/ICensus3ValidatePredicateResponse)

#### Defined in

[src/census3.ts:32](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/census3.ts#L32)

___

### Question

Ƭ **Question**: `Pick`\<[`IQuestion`](interfaces/IQuestion), ``"title"`` \| ``"description"`` \| ``"choices"`` \| ``"meta"``\>

#### Defined in

[src/types/metadata/election.ts:24](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/metadata/election.ts#L24)

___

### RemoteSignerCredentials

Ƭ **RemoteSignerCredentials**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `email` | `string` |
| `password` | `string` |

#### Defined in

[src/types/remote-signer.ts:14](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/remote-signer.ts#L14)

___

### RemoteSignerProperties

Ƭ **RemoteSignerProperties**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `credentials` | [`RemoteSignerCredentials`](sdk-reference#remotesignercredentials) |
| `token` | `string` |
| `url` | `string` |

#### Defined in

[src/types/remote-signer.ts:8](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/remote-signer.ts#L8)

___

### SendTokensOptions

Ƭ **SendTokensOptions**: `Partial`\<[`WalletOption`](sdk-reference#walletoption)\> & \{ `amount`: `number` ; `to`: `string`  }

#### Defined in

[src/types/client/account.ts:9](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/client/account.ts#L9)

___

### Strategy

Ƭ **Strategy**: [`Census3Strategy`](sdk-reference#census3strategy)

#### Defined in

[src/census3.ts:25](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/census3.ts#L25)

___

### StrategyHolder

Ƭ **StrategyHolder**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `holder` | `string` |
| `weight` | `bigint` |

#### Defined in

[src/census3.ts:26](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/census3.ts#L26)

___

### StrategyHolders

Ƭ **StrategyHolders**: [`StrategyHolder`](sdk-reference#strategyholder)[]

#### Defined in

[src/census3.ts:27](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/census3.ts#L27)

___

### StrategyToken

Ƭ **StrategyToken**: [`Census3CreateStrategyToken`](sdk-reference#census3createstrategytoken)

#### Defined in

[src/census3.ts:28](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/census3.ts#L28)

___

### SupportedChain

Ƭ **SupportedChain**: [`ICensus3SupportedChain`](interfaces/ICensus3SupportedChain)

#### Defined in

[src/census3.ts:30](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/census3.ts#L30)

___

### SupportedOperator

Ƭ **SupportedOperator**: [`ICensus3StrategiesOperator`](interfaces/ICensus3StrategiesOperator)

#### Defined in

[src/census3.ts:31](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/census3.ts#L31)

___

### Token

Ƭ **Token**: `Omit`\<[`Census3Token`](sdk-reference#census3token), ``"tags"``\> & \{ `tags`: `string`[]  }

#### Defined in

[src/census3.ts:23](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/census3.ts#L23)

___

### TokenSummary

Ƭ **TokenSummary**: `Omit`\<[`Census3SummaryToken`](sdk-reference#census3summarytoken), ``"tags"``\> & \{ `tags`: `string`[]  }

#### Defined in

[src/census3.ts:24](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/census3.ts#L24)

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

[src/services/chain.ts:61](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/chain.ts#L61)

___

### VoteIdOption

Ƭ **VoteIdOption**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `voteId` | `string` |

#### Defined in

[src/types/client/account.ts:7](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/client/account.ts#L7)

___

### VoteInfo

Ƭ **VoteInfo**: [`VoteInfoResponse`](sdk-reference#voteinforesponse)

#### Defined in

[src/services/vote.ts:22](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/vote.ts#L22)

___

### VoteInfoResponse

Ƭ **VoteInfoResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `blockHeight` | `number` | The block number where the transaction is mined. |
| `date` | `string` | Date when the vote was emitted |
| `electionID` | `string` | The identifier of the election. |
| `encryptionKeys?` | `number`[] | Encryption key indexes used |
| `overwriteCount` | `number` | The number of votes overwrites. |
| `package` | [`IVotePackage`](interfaces/IVotePackage.md) \| [`IVoteEncryptedPackage`](interfaces/IVoteEncryptedPackage) | The vote package. |
| `transactionIndex` | `number` | The index inside the block where the transaction is mined. |
| `txHash` | `string` | The hash of the transaction |
| `voteID` | `string` | The identifier of the vote, also called nullifier. |
| `voterID` | `string` | The identifier of the voter. |
| `weight` | `string` | The weight of the vote. |

#### Defined in

[src/api/vote.ts:57](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/vote.ts#L57)

___

### VoteStepValue

Ƭ **VoteStepValue**: \{ `electionId`: `string` ; `key`: [`GET_ELECTION`](enums/VoteSteps.md#get_election)  } \| \{ `key`: [`GET_PROOF`](enums/VoteSteps.md#get_proof)  } \| \{ `key`: [`GET_SIGNATURE`](enums/VoteSteps.md#get_signature) ; `signature`: `string`  } \| \{ `key`: [`CALC_ZK_PROOF`](enums/VoteSteps.md#calc_zk_proof)  } \| \{ `key`: [`GENERATE_TX`](enums/VoteSteps.md#generate_tx)  } \| \{ `key`: [`SIGN_TX`](enums/VoteSteps.md#sign_tx)  } \| \{ `key`: [`DONE`](enums/VoteSteps#done) ; `voteId`: `string`  }

#### Defined in

[src/services/vote.ts:35](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/vote.ts#L35)

___

### VoteSubmit

Ƭ **VoteSubmit**: [`IVoteSubmitResponse`](interfaces/IVoteSubmitResponse)

#### Defined in

[src/services/vote.ts:23](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/vote.ts#L23)

___

### VoteSummary

Ƭ **VoteSummary**: `Pick`\<[`VoteInfoResponse`](sdk-reference#voteinforesponse), ``"txHash"`` \| ``"voteID"`` \| ``"voterID"`` \| ``"electionID"`` \| ``"blockHeight"`` \| ``"transactionIndex"``\>

#### Defined in

[src/api/vote.ts:52](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/vote.ts#L52)

___

### VotesLeftCountOptions

Ƭ **VotesLeftCountOptions**: `Partial`\<[`WalletOption`](sdk-reference.md#walletoption) & [`ElectionIdOption`](sdk-reference.md#electionidoption) & [`VoteIdOption`](sdk-reference#voteidoption)\>

#### Defined in

[src/types/client/account.ts:12](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/client/account.ts#L12)

___

### WalletOption

Ƭ **WalletOption**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `wallet` | `Wallet` \| `Signer` \| [`RemoteSigner`](classes/RemoteSigner) |

#### Defined in

[src/types/client/account.ts:5](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/client/account.ts#L5)

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

[src/services/anonymous.ts:24](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/anonymous.ts#L24)

## Variables

### AccountMetadataTemplate

• `Const` **AccountMetadataTemplate**: [`AccountMetadata`](interfaces/AccountMetadata)

#### Defined in

[src/types/metadata/account.ts:67](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/metadata/account.ts#L67)

___

### ElectionMetadataTemplate

• `Const` **ElectionMetadataTemplate**: [`ElectionMetadata`](interfaces/ElectionMetadata)

#### Defined in

[src/types/metadata/election.ts:166](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/metadata/election.ts#L166)
