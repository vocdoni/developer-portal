[@vocdoni/sdk](/sdk) / IElectionListResponse

# Interface: IElectionListResponse

## Hierarchy

- [`IElectionList`](IElectionList)

- [`PaginationResponse`](PaginationResponse)

  ↳ **`IElectionListResponse`**

## Table of contents

### Properties

- [elections](IElectionListResponse#elections)
- [pagination](IElectionListResponse#pagination)

## Properties

### elections

• **elections**: [`IElectionSummary`](IElectionSummary)[]

List of election summaries

#### Inherited from

[IElectionList](IElectionList.md).[elections](IElectionList#elections)

#### Defined in

[src/api/election.ts:318](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/election.ts#L318)

___

### pagination

• **pagination**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `currentPage` | `number` |
| `lastPage` | `number` |
| `nextPage` | `number` |
| `previousPage` | `number` |
| `totalItems` | `number` |

#### Inherited from

[PaginationResponse](PaginationResponse.md).[pagination](PaginationResponse#pagination)

#### Defined in

[src/api/api.ts:131](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/api.ts#L131)
