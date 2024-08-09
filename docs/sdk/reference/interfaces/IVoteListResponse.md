[@vocdoni/sdk](/sdk) / IVoteListResponse

# Interface: IVoteListResponse

## Hierarchy

- [`VotesList`](VotesList)

- [`PaginationResponse`](PaginationResponse)

  ↳ **`IVoteListResponse`**

## Table of contents

### Properties

- [pagination](IVoteListResponse#pagination)
- [votes](IVoteListResponse#votes)

## Properties

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

___

### votes

• **votes**: [`VoteSummary`](../sdk-reference#votesummary)[]

The list of votes

#### Inherited from

[VotesList](VotesList.md).[votes](VotesList#votes)

#### Defined in

[src/api/vote.ts:49](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/vote.ts#L49)
