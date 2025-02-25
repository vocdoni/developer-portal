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

[src/api/api.ts:131](https://github.com/vocdoni/vocdoni-sdk/blob/09401e1099a0f03641b994ed392235bc78fec830/src/api/api.ts#L131)
