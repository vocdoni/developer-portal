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

[src/api/chain.ts:270](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L270)

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

[src/api/api.ts:131](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/api.ts#L131)
