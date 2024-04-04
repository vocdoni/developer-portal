[@vocdoni/sdk](/sdk) / FileAPI

# Class: FileAPI

## Hierarchy

- `API`

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

[api/file.ts:30](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/api/file.ts#L30)
