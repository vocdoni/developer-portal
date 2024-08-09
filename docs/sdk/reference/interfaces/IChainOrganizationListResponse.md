[@vocdoni/sdk](/sdk) / IChainOrganizationListResponse

# Interface: IChainOrganizationListResponse

## Hierarchy

- [`OrganizationList`](OrganizationList)

- [`PaginationResponse`](PaginationResponse)

  ↳ **`IChainOrganizationListResponse`**

## Table of contents

### Properties

- [organizations](IChainOrganizationListResponse#organizations)
- [pagination](IChainOrganizationListResponse#pagination)

## Properties

### organizations

• **organizations**: [`IChainOrganizationResponse`](IChainOrganizationResponse)[]

The list of organizations

#### Inherited from

[OrganizationList](OrganizationList.md).[organizations](OrganizationList#organizations)

#### Defined in

[src/api/chain.ts:295](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L295)

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

[src/api/api.ts:113](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/api.ts#L113)
