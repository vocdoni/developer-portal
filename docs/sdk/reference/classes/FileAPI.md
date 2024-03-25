[@vocdoni/sdk](/sdk) / [Exports](../modules) / FileAPI

# Class: FileAPI

## Hierarchy

- `API`

  ↳ **`FileAPI`**

## Table of contents

### Constructors

- [constructor](FileAPI#constructor)

### Methods

- [cid](FileAPI#cid)
- [isApiError](FileAPI#isapierror)
- [isUndefinedError](FileAPI#isundefinederror)

## Constructors

### constructor

• **new FileAPI**(): [`FileAPI`](FileAPI)

Cannot be constructed.

#### Returns

[`FileAPI`](FileAPI)

#### Overrides

API.constructor

#### Defined in

[api/file.ts:19](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/file.ts#L19)

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

[api/file.ts:30](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/file.ts#L30)

___

### isApiError

▸ **isApiError**(`error`): `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `AxiosError`\<`unknown`, `any`\> |

#### Returns

`never`

#### Inherited from

API.isApiError

#### Defined in

[api/api.ts:21](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/api.ts#L21)

___

### isUndefinedError

▸ **isUndefinedError**(`error`, `message?`): `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `AxiosError`\<`unknown`, `any`\> |
| `message?` | `string` |

#### Returns

`never`

#### Inherited from

API.isUndefinedError

#### Defined in

[api/api.ts:64](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/api.ts#L64)
