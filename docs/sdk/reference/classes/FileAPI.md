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

[src/api/file.ts:30](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/api/file.ts#L30)
