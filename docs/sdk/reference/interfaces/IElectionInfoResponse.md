[@vocdoni/sdk](/sdk) / IElectionInfoResponse

# Interface: IElectionInfoResponse

## Table of contents

### Properties

- [census](IElectionInfoResponse#census)
- [chainId](IElectionInfoResponse#chainid)
- [creationTime](IElectionInfoResponse#creationtime)
- [electionId](IElectionInfoResponse#electionid)
- [electionMode](IElectionInfoResponse#electionmode)
- [endDate](IElectionInfoResponse#enddate)
- [finalResults](IElectionInfoResponse#finalresults)
- [manuallyEnded](IElectionInfoResponse#manuallyended)
- [metadata](IElectionInfoResponse#metadata)
- [metadataURL](IElectionInfoResponse#metadataurl)
- [organizationId](IElectionInfoResponse#organizationid)
- [result](IElectionInfoResponse#result)
- [startDate](IElectionInfoResponse#startdate)
- [status](IElectionInfoResponse#status)
- [tallyMode](IElectionInfoResponse#tallymode)
- [voteCount](IElectionInfoResponse#votecount)
- [voteMode](IElectionInfoResponse#votemode)

## Properties

### census

• **census**: [`ICensus`](ICensus)

The census of the election

#### Defined in

[src/api/election.ts:208](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/election.ts#L208)

___

### chainId

• **chainId**: `string`

The chain identifier of the election

#### Defined in

[src/api/election.ts:203](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/election.ts#L203)

___

### creationTime

• **creationTime**: `string`

The date of creation of the election

#### Defined in

[src/api/election.ts:218](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/election.ts#L218)

___

### electionId

• **electionId**: `string`

The id of the election

#### Defined in

[src/api/election.ts:158](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/election.ts#L158)

___

### electionMode

• **electionMode**: [`IElectionMode`](IElectionMode)

The election mode of the election

#### Defined in

[src/api/election.ts:228](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/election.ts#L228)

___

### endDate

• **endDate**: `string`

The end date of the election

#### Defined in

[src/api/election.ts:178](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/election.ts#L178)

___

### finalResults

• **finalResults**: `boolean`

If the election has the final results

#### Defined in

[src/api/election.ts:188](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/election.ts#L188)

___

### manuallyEnded

• **manuallyEnded**: `boolean`

If the election has been ended manually

#### Defined in

[src/api/election.ts:198](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/election.ts#L198)

___

### metadata

• **metadata**: `string` \| [`ElectionMetadata`](ElectionMetadata)

The metadata of the election (can be encrypted)

#### Defined in

[src/api/election.ts:238](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/election.ts#L238)

___

### metadataURL

• **metadataURL**: `string`

The URL of the metadata

#### Defined in

[src/api/election.ts:213](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/election.ts#L213)

___

### organizationId

• **organizationId**: `string`

The id of the organization that created the election

#### Defined in

[src/api/election.ts:163](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/election.ts#L163)

___

### result

• `Optional` **result**: `string`[][]

The result of the election

#### Defined in

[src/api/election.ts:193](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/election.ts#L193)

___

### startDate

• **startDate**: `string`

The start date of the election

#### Defined in

[src/api/election.ts:173](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/election.ts#L173)

___

### status

• **status**: [`PROCESS_UNKNOWN`](../enums/ElectionStatus.md#process_unknown) \| [`ENDED`](../enums/ElectionStatus.md#ended) \| [`CANCELED`](../enums/ElectionStatus.md#canceled) \| [`PAUSED`](../enums/ElectionStatus.md#paused) \| [`RESULTS`](../enums/ElectionStatus.md#results) \| [`READY`](../enums/ElectionStatusReady#ready)

The status of the election

#### Defined in

[src/api/election.ts:168](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/election.ts#L168)

___

### tallyMode

• **tallyMode**: [`ITallyMode`](ITallyMode)

The tally mode of the vote

#### Defined in

[src/api/election.ts:233](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/election.ts#L233)

___

### voteCount

• **voteCount**: `number`

The number of votes of the election

#### Defined in

[src/api/election.ts:183](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/election.ts#L183)

___

### voteMode

• **voteMode**: [`IVoteMode`](IVoteMode)

The voting mode of the election

#### Defined in

[src/api/election.ts:223](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/election.ts#L223)
