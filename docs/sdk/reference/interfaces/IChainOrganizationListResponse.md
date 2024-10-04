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

[src/api/chain.ts:319](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/api/chain.ts#L319)

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
