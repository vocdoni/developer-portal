[@vocdoni/sdk](/sdk) / PaginationResponse

# Interface: PaginationResponse

## Hierarchy

- **`PaginationResponse`**

  ↳ [`IAccountsListResponse`](IAccountsListResponse)

  ↳ [`IChainTxListResponse`](IChainTxListResponse)

  ↳ [`IChainBlocksListResponse`](IChainBlocksListResponse)

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

[src/api/api.ts:131](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/api/api.ts#L131)
