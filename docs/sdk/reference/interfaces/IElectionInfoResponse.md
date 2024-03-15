[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / IElectionInfoResponse

# Interface: IElectionInfoResponse

## Table of contents

### Properties

- [census](IElectionInfoResponse.md#census)
- [chainId](IElectionInfoResponse.md#chainid)
- [creationTime](IElectionInfoResponse.md#creationtime)
- [electionId](IElectionInfoResponse.md#electionid)
- [electionMode](IElectionInfoResponse.md#electionmode)
- [endDate](IElectionInfoResponse.md#enddate)
- [finalResults](IElectionInfoResponse.md#finalresults)
- [fromArchive](IElectionInfoResponse.md#fromarchive)
- [manuallyEnded](IElectionInfoResponse.md#manuallyended)
- [metadata](IElectionInfoResponse.md#metadata)
- [metadataURL](IElectionInfoResponse.md#metadataurl)
- [organizationId](IElectionInfoResponse.md#organizationid)
- [result](IElectionInfoResponse.md#result)
- [startDate](IElectionInfoResponse.md#startdate)
- [status](IElectionInfoResponse.md#status)
- [tallyMode](IElectionInfoResponse.md#tallymode)
- [voteCount](IElectionInfoResponse.md#votecount)
- [voteMode](IElectionInfoResponse.md#votemode)

## Properties

### census

• **census**: [`ICensus`](ICensus.md)

The census of the election

#### Defined in

[api/election.ts:220](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L220)

___

### chainId

• **chainId**: `string`

The chain identifier of the election

#### Defined in

[api/election.ts:215](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L215)

___

### creationTime

• **creationTime**: `string`

The date of creation of the election

#### Defined in

[api/election.ts:230](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L230)

___

### electionId

• **electionId**: `string`

The id of the election

#### Defined in

[api/election.ts:165](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L165)

___

### electionMode

• **electionMode**: [`IElectionMode`](IElectionMode.md)

The election mode of the election

#### Defined in

[api/election.ts:240](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L240)

___

### endDate

• **endDate**: `string`

The end date of the election

#### Defined in

[api/election.ts:185](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L185)

___

### finalResults

• **finalResults**: `boolean`

If the election has the final results

#### Defined in

[api/election.ts:195](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L195)

___

### fromArchive

• **fromArchive**: `boolean`

If the election comes from the archive

#### Defined in

[api/election.ts:210](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L210)

___

### manuallyEnded

• **manuallyEnded**: `boolean`

If the election has been ended manually

#### Defined in

[api/election.ts:205](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L205)

___

### metadata

• **metadata**: [`ElectionMetadata`](ElectionMetadata.md)

The metadata of the election

#### Defined in

[api/election.ts:250](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L250)

___

### metadataURL

• **metadataURL**: `string`

The URL of the metadata

#### Defined in

[api/election.ts:225](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L225)

___

### organizationId

• **organizationId**: `string`

The id of the organization that created the election

#### Defined in

[api/election.ts:170](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L170)

___

### result

• `Optional` **result**: `string`[][]

The result of the election

#### Defined in

[api/election.ts:200](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L200)

___

### startDate

• **startDate**: `string`

The start date of the election

#### Defined in

[api/election.ts:180](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L180)

___

### status

• **status**: [`PROCESS_UNKNOWN`](../enums/ElectionStatus.md#process_unknown) \| [`ENDED`](../enums/ElectionStatus.md#ended) \| [`CANCELED`](../enums/ElectionStatus.md#canceled) \| [`PAUSED`](../enums/ElectionStatus.md#paused) \| [`RESULTS`](../enums/ElectionStatus.md#results) \| [`READY`](../enums/ElectionStatusReady.md#ready)

The status of the election

#### Defined in

[api/election.ts:175](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L175)

___

### tallyMode

• **tallyMode**: [`ITallyMode`](ITallyMode.md)

The tally mode of the vote

#### Defined in

[api/election.ts:245](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L245)

___

### voteCount

• **voteCount**: `number`

The number of votes of the election

#### Defined in

[api/election.ts:190](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L190)

___

### voteMode

• **voteMode**: [`IVoteMode`](IVoteMode.md)

The voting mode of the election

#### Defined in

[api/election.ts:235](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L235)
