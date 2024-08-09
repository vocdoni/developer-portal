[@vocdoni/sdk](/sdk) / PaginationResponse

# Interface: PaginationResponse

## Hierarchy

- **`PaginationResponse`**

  ↳ [`IAccountsListResponse`](IAccountsListResponse)

  ↳ [`IChainTxListResponse`](IChainTxListResponse)

  ↳ [`IChainTransfersListResponse`](IChainTransfersListResponse)

  ↳ [`IChainOrganizationListResponse`](IChainOrganizationListResponse)

  ↳ [`IChainFeesListResponse`](IChainFeesListResponse)

  ↳ [`IElectionListResponse`](IElectionListResponse)

  ↳ [`IVoteListResponse`](IVoteListResponse)

## Table of contents

### Properties

- [pagination](PaginationResponse#pagination)

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

#### Defined in

[src/api/api.ts:113](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/api.ts#L113)
