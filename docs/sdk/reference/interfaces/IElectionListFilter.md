[@vocdoni/sdk](/sdk) / IElectionListFilter

# Interface: IElectionListFilter

## Table of contents

### Properties

- [electionId](IElectionListFilter#electionid)
- [organizationId](IElectionListFilter#organizationid)
- [status](IElectionListFilter#status)
- [withResults](IElectionListFilter#withresults)

## Properties

### electionId

• `Optional` **electionId**: `string`

#### Defined in

[api/election.ts:364](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/api/election.ts#L364)

___

### organizationId

• `Optional` **organizationId**: `string`

#### Defined in

[api/election.ts:363](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/api/election.ts#L363)

___

### status

• `Optional` **status**: [`PROCESS_UNKNOWN`](../enums/ElectionStatus.md#process_unknown) \| [`ENDED`](../enums/ElectionStatus.md#ended) \| [`CANCELED`](../enums/ElectionStatus.md#canceled) \| [`PAUSED`](../enums/ElectionStatus.md#paused) \| [`RESULTS`](../enums/ElectionStatus.md#results) \| [`READY`](../enums/ElectionStatusReady#ready)

#### Defined in

[api/election.ts:366](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/api/election.ts#L366)

___

### withResults

• `Optional` **withResults**: `boolean`

#### Defined in

[api/election.ts:365](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/api/election.ts#L365)
