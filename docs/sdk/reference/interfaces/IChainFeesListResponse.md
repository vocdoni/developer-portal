[@vocdoni/sdk](/sdk) / IChainFeesListResponse

# Interface: IChainFeesListResponse

## Hierarchy

- [`IFeesList`](IFeesList)

- [`PaginationResponse`](PaginationResponse)

  ↳ **`IChainFeesListResponse`**

## Table of contents

### Properties

- [fees](IChainFeesListResponse#fees)
- [pagination](IChainFeesListResponse#pagination)

## Properties

### fees

• **fees**: [`Fee`](../sdk-reference#fee)[]

The list of fees

#### Inherited from

[IFeesList](IFeesList.md).[fees](IFeesList#fees)

#### Defined in

[src/api/chain.ts:454](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/api/chain.ts#L454)

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
