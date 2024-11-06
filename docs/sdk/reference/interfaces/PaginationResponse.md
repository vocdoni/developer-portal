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

[src/api/api.ts:131](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/api.ts#L131)
