[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / Census3TokenAPI

# Class: Census3TokenAPI

## Hierarchy

- `Census3API`

  ↳ **`Census3TokenAPI`**

## Table of contents

### Constructors

- [constructor](Census3TokenAPI.md#constructor)

### Methods

- [create](Census3TokenAPI.md#create)
- [holder](Census3TokenAPI.md#holder)
- [isApiError](Census3TokenAPI.md#isapierror)
- [isUndefinedError](Census3TokenAPI.md#isundefinederror)
- [list](Census3TokenAPI.md#list)
- [serializePagination](Census3TokenAPI.md#serializepagination)
- [token](Census3TokenAPI.md#token)
- [types](Census3TokenAPI.md#types)

## Constructors

### constructor

• **new Census3TokenAPI**(): [`Census3TokenAPI`](Census3TokenAPI.md)

Cannot be constructed.

#### Returns

[`Census3TokenAPI`](Census3TokenAPI.md)

#### Overrides

Census3API.constructor

#### Defined in

[api/census3/token.ts:138](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/token.ts#L138)

## Methods

### create

▸ **create**(`url`, `id`, `type`, `chainId`, `tags?`, `externalId?`): `Promise`\<`void`\>

Triggers a new scan for the provided token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `id` | `string` | The token address |
| `type` | `string` | The type of the token |
| `chainId` | `number` | The chain id of the token |
| `tags?` | `string` | The tags assigned for the token |
| `externalId?` | `string` | The identifier used by external provider |

#### Returns

`Promise`\<`void`\>

promised IFileCIDResponse

#### Defined in

[api/census3/token.ts:229](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/token.ts#L229)

___

### holder

▸ **holder**(`url`, `tokenId`, `chainId`, `holderId`, `externalId?`): `Promise`\<[`ICensus3TokenHolderResponse`](../interfaces/ICensus3TokenHolderResponse.md)\>

Returns if the holder ID is already registered in the database as a holder of the token ID and chain ID provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `tokenId` | `string` | The identifier of the token |
| `chainId` | `number` | The chain identifier of the token |
| `holderId` | `string` | The identifier of the holder |
| `externalId?` | `string` | The identifier used by external provider |

#### Returns

`Promise`\<[`ICensus3TokenHolderResponse`](../interfaces/ICensus3TokenHolderResponse.md)\>

The balance of holder

#### Defined in

[api/census3/token.ts:199](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/token.ts#L199)

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

### list

▸ **list**(`url`, `pagination?`): `Promise`\<[`ICensus3TokenListResponsePaginated`](../interfaces/ICensus3TokenListResponsePaginated.md)\>

Fetches list of already added tokens

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `pagination?` | `Census3Pagination` | Pagination options |

#### Returns

`Promise`\<[`ICensus3TokenListResponsePaginated`](../interfaces/ICensus3TokenListResponsePaginated.md)\>

#### Defined in

[api/census3/token.ts:149](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/token.ts#L149)

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

___

### token

▸ **token**(`url`, `tokenId`, `chainId`, `externalId?`): `Promise`\<[`Census3Token`](../modules.md#census3token)\>

Fetch the full token information

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `tokenId` | `string` | The identifier of the token |
| `chainId` | `number` | The chain identifier of the token |
| `externalId?` | `string` | The identifier used by external provider |

#### Returns

`Promise`\<[`Census3Token`](../modules.md#census3token)\>

#### Defined in

[api/census3/token.ts:178](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/token.ts#L178)

___

### types

▸ **types**(`url`): `Promise`\<[`ICensus3TokenTypesResponse`](../interfaces/ICensus3TokenTypesResponse.md)\>

Fetches list of tokens types

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |

#### Returns

`Promise`\<[`ICensus3TokenTypesResponse`](../interfaces/ICensus3TokenTypesResponse.md)\>

#### Defined in

[api/census3/token.ts:162](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/api/census3/token.ts#L162)
