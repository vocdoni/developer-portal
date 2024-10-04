[@vocdoni/sdk](/sdk) / IChainBlocksListResponse

# Interface: IChainBlocksListResponse

## Hierarchy

- [`IChainBlocksList`](IChainBlocksList)

- [`PaginationResponse`](PaginationResponse)

  ↳ **`IChainBlocksListResponse`**

## Table of contents

### Properties

- [blocks](IChainBlocksListResponse#blocks)
- [pagination](IChainBlocksListResponse#pagination)

## Properties

### blocks

• **blocks**: [`IBlock`](IBlock)[]

List of blocks

#### Inherited from

[IChainBlocksList](IChainBlocksList.md).[blocks](IChainBlocksList#blocks)

#### Defined in

[src/api/chain.ts:270](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/api/chain.ts#L270)

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

[src/api/api.ts:131](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/api/api.ts#L131)
