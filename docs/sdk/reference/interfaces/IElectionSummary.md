[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / IElectionSummary

# Interface: IElectionSummary

## Table of contents

### Properties

- [electionId](IElectionSummary.md#electionid)
- [endDate](IElectionSummary.md#enddate)
- [finalResults](IElectionSummary.md#finalresults)
- [organizationId](IElectionSummary.md#organizationid)
- [startDate](IElectionSummary.md#startdate)
- [status](IElectionSummary.md#status)
- [voteCount](IElectionSummary.md#votecount)

## Properties

### electionId

• **electionId**: `string`

The id of the election

#### Defined in

[api/election.ts:322](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L322)

___

### endDate

• **endDate**: `string`

The end date of the election

#### Defined in

[api/election.ts:342](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L342)

___

### finalResults

• **finalResults**: `boolean`

If the election has the final results

#### Defined in

[api/election.ts:352](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L352)

___

### organizationId

• **organizationId**: `string`

The id of the organization

#### Defined in

[api/election.ts:327](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L327)

___

### startDate

• **startDate**: `string`

The start date of the election

#### Defined in

[api/election.ts:337](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L337)

___

### status

• **status**: [`PROCESS_UNKNOWN`](../enums/ElectionStatus.md#process_unknown) \| [`ENDED`](../enums/ElectionStatus.md#ended) \| [`CANCELED`](../enums/ElectionStatus.md#canceled) \| [`PAUSED`](../enums/ElectionStatus.md#paused) \| [`RESULTS`](../enums/ElectionStatus.md#results) \| [`READY`](../enums/ElectionStatusReady.md#ready)

The status of the election

#### Defined in

[api/election.ts:332](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L332)

___

### voteCount

• **voteCount**: `number`

The number of votes of the election

#### Defined in

[api/election.ts:347](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/election.ts#L347)
