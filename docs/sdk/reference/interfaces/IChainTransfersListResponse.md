[@vocdoni/sdk](/sdk) / IChainTransfersListResponse

# Interface: IChainTransfersListResponse

## Hierarchy

- [`IChainTransfersList`](IChainTransfersList)

- [`PaginationResponse`](PaginationResponse)

  ↳ **`IChainTransfersListResponse`**

## Table of contents

### Properties

- [pagination](IChainTransfersListResponse#pagination)
- [transfers](IChainTransfersListResponse#transfers)

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

[src/api/api.ts:131](https://github.com/vocdoni/vocdoni-sdk/blob/09401e1099a0f03641b994ed392235bc78fec830/src/api/api.ts#L131)

___

### transfers

• **transfers**: [`ITransfer`](ITransfer)[]

List of transfers

#### Inherited from

[IChainTransfersList](IChainTransfersList.md).[transfers](IChainTransfersList#transfers)

#### Defined in

[src/api/chain.ts:289](https://github.com/vocdoni/vocdoni-sdk/blob/09401e1099a0f03641b994ed392235bc78fec830/src/api/chain.ts#L289)
