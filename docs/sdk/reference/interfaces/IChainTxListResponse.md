[@vocdoni/sdk](/sdk) / IChainTxListResponse

# Interface: IChainTxListResponse

## Hierarchy

- [`IChainTxList`](IChainTxList)

- [`PaginationResponse`](PaginationResponse)

  ↳ **`IChainTxListResponse`**

## Table of contents

### Properties

- [pagination](IChainTxListResponse#pagination)
- [transactions](IChainTxListResponse#transactions)

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

### transactions

• **transactions**: [`IChainTxReference`](IChainTxReference)[]

List of transactions reference

#### Inherited from

[IChainTxList](IChainTxList.md).[transactions](IChainTxList#transactions)

#### Defined in

[src/api/chain.ts:256](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L256)
