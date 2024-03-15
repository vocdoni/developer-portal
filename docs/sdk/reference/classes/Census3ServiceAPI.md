[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / Census3ServiceAPI

# Class: Census3ServiceAPI

## Hierarchy

- `Census3API`

  ↳ **`Census3ServiceAPI`**

## Table of contents

### Constructors

- [constructor](Census3ServiceAPI.md#constructor)

### Methods

- [info](Census3ServiceAPI.md#info)
- [isApiError](Census3ServiceAPI.md#isapierror)
- [isUndefinedError](Census3ServiceAPI.md#isundefinederror)
- [serializePagination](Census3ServiceAPI.md#serializepagination)

## Constructors

### constructor

• **new Census3ServiceAPI**(): [`Census3ServiceAPI`](Census3ServiceAPI.md)

Cannot be constructed.

#### Returns

[`Census3ServiceAPI`](Census3ServiceAPI.md)

#### Overrides

Census3API.constructor

#### Defined in

[api/census3/service.ts:36](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/service.ts#L36)

## Methods

### info

▸ **info**(`url`): `Promise`\<[`ICensus3ServiceInfoResponse`](../interfaces/ICensus3ServiceInfoResponse.md)\>

Fetches supported chains from the service

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |

#### Returns

`Promise`\<[`ICensus3ServiceInfoResponse`](../interfaces/ICensus3ServiceInfoResponse.md)\>

#### Defined in

[api/census3/service.ts:46](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/service.ts#L46)

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

Census3API.isApiError

#### Defined in

[api/census3/api.ts:101](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/api.ts#L101)

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

Census3API.isUndefinedError

#### Defined in

[api/api.ts:64](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/api.ts#L64)

___

### serializePagination

▸ **serializePagination**(`pagination?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pagination?` | `Census3Pagination` |

#### Returns

`string`

#### Inherited from

Census3API.serializePagination

#### Defined in

[api/census3/api.ts:92](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/api.ts#L92)
