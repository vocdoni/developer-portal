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

[src/api/api.ts:131](https://github.com/vocdoni/vocdoni-sdk/blob/09401e1099a0f03641b994ed392235bc78fec830/src/api/api.ts#L131)

___

### transactions

• **transactions**: [`IChainTxReference`](IChainTxReference)[]

List of transactions

#### Inherited from

[IChainTxList](IChainTxList.md).[transactions](IChainTxList#transactions)

#### Defined in

[src/api/chain.ts:261](https://github.com/vocdoni/vocdoni-sdk/blob/09401e1099a0f03641b994ed392235bc78fec830/src/api/chain.ts#L261)
