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

[src/api/election.ts:328](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/election.ts#L328)

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

[src/api/api.ts:113](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/api.ts#L113)
