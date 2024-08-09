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

[src/api/api.ts:113](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/api.ts#L113)

___

### transfers

• **transfers**: [`ITransfer`](ITransfer)[]

List of transfers

#### Inherited from

[IChainTransfersList](IChainTransfersList.md).[transfers](IChainTransfersList#transfers)

#### Defined in

[src/api/chain.ts:265](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L265)
