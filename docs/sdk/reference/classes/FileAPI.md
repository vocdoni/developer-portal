[@vocdoni/sdk](/sdk) / FileAPI

# Class: FileAPI

## Hierarchy

- [`API`](API)

  ↳ **`FileAPI`**

## Table of contents

### Methods

- [cid](FileAPI#cid)

## Methods

### cid

▸ **cid**(`url`, `payload`): `Promise`\<`IFileCIDResponse`\>

CID generator method via API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `payload` | `string` | Full payload string of which we want the CID of |

#### Returns

`Promise`\<`IFileCIDResponse`\>

promised IFileCIDResponse

#### Defined in

[src/api/file.ts:30](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/file.ts#L30)
