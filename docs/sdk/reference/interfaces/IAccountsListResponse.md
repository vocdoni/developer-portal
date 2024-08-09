[@vocdoni/sdk](/sdk) / IAccountsListResponse

# Interface: IAccountsListResponse

## Hierarchy

- [`IAccountsList`](IAccountsList)

- [`PaginationResponse`](PaginationResponse)

  ↳ **`IAccountsListResponse`**

## Table of contents

### Properties

- [accounts](IAccountsListResponse#accounts)
- [pagination](IAccountsListResponse#pagination)

## Properties

### accounts

• **accounts**: [`IAccountSummary`](../sdk-reference#iaccountsummary)[]

List of accounts

#### Inherited from

[IAccountsList](IAccountsList.md).[accounts](IAccountsList#accounts)

#### Defined in

[src/api/account.ts:80](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/account.ts#L80)

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
