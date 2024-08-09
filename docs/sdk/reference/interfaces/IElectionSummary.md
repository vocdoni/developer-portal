[@vocdoni/sdk](/sdk) / IElectionSummary

# Interface: IElectionSummary

## Table of contents

### Properties

- [chainId](IElectionSummary#chainid)
- [electionId](IElectionSummary#electionid)
- [endDate](IElectionSummary#enddate)
- [finalResults](IElectionSummary#finalresults)
- [manuallyEnded](IElectionSummary#manuallyended)
- [organizationId](IElectionSummary#organizationid)
- [startDate](IElectionSummary#startdate)
- [status](IElectionSummary#status)
- [voteCount](IElectionSummary#votecount)

## Properties

### chainId

• **chainId**: `string`

The chain identifier

#### Defined in

[src/api/election.ts:319](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/election.ts#L319)

___

### electionId

• **electionId**: `string`

The id of the election

#### Defined in

[src/api/election.ts:279](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/election.ts#L279)

___

### endDate

• **endDate**: `string`

The end date of the election

#### Defined in

[src/api/election.ts:299](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/election.ts#L299)

___

### finalResults

• **finalResults**: `boolean`

If the election has the final results

#### Defined in

[src/api/election.ts:309](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/election.ts#L309)

___

### manuallyEnded

• **manuallyEnded**: `boolean`

If the election has been ended manually

#### Defined in

[src/api/election.ts:314](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/election.ts#L314)

___

### organizationId

• **organizationId**: `string`

The id of the organization

#### Defined in

[src/api/election.ts:284](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/election.ts#L284)

___

### startDate

• **startDate**: `string`

The start date of the election

#### Defined in

[src/api/election.ts:294](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/election.ts#L294)

___

### status

• **status**: [`PROCESS_UNKNOWN`](../enums/ElectionStatus.md#process_unknown) \| [`ENDED`](../enums/ElectionStatus.md#ended) \| [`CANCELED`](../enums/ElectionStatus.md#canceled) \| [`PAUSED`](../enums/ElectionStatus.md#paused) \| [`RESULTS`](../enums/ElectionStatus.md#results) \| [`READY`](../enums/ElectionStatusReady#ready)

The status of the election

#### Defined in

[src/api/election.ts:289](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/election.ts#L289)

___

### voteCount

• **voteCount**: `number`

The number of votes of the election

#### Defined in

[src/api/election.ts:304](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/election.ts#L304)
