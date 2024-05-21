[@vocdoni/sdk](/sdk) / Census3TokenAPI

# Class: Census3TokenAPI

## Hierarchy

- `Census3API`

  ↳ **`Census3TokenAPI`**

## Table of contents

### Methods

- [create](Census3TokenAPI#create)
- [holder](Census3TokenAPI#holder)
- [list](Census3TokenAPI#list)
- [token](Census3TokenAPI#token)
- [types](Census3TokenAPI#types)

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

[api/census3/token.ts:226](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/api/census3/token.ts#L226)

___

### holder

▸ **holder**(`url`, `tokenId`, `chainId`, `holderId`, `externalId?`): `Promise`\<[`ICensus3TokenHolderResponse`](../interfaces/ICensus3TokenHolderResponse)\>

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

`Promise`\<[`ICensus3TokenHolderResponse`](../interfaces/ICensus3TokenHolderResponse)\>

The balance of holder

#### Defined in

[api/census3/token.ts:196](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/api/census3/token.ts#L196)

___

### list

▸ **list**(`url`, `pagination?`): `Promise`\<[`ICensus3TokenListResponsePaginated`](../interfaces/ICensus3TokenListResponsePaginated)\>

Fetches list of already added tokens

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `pagination?` | `Census3Pagination` | Pagination options |

#### Returns

`Promise`\<[`ICensus3TokenListResponsePaginated`](../interfaces/ICensus3TokenListResponsePaginated)\>

#### Defined in

[api/census3/token.ts:148](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/api/census3/token.ts#L148)

___

### token

▸ **token**(`url`, `tokenId`, `chainId`, `externalId?`): `Promise`\<[`Census3Token`](../sdk-reference#census3token)\>

Fetch the full token information

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `tokenId` | `string` | The identifier of the token |
| `chainId` | `number` | The chain identifier of the token |
| `externalId?` | `string` | The identifier used by external provider |

#### Returns

`Promise`\<[`Census3Token`](../sdk-reference#census3token)\>

#### Defined in

[api/census3/token.ts:175](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/api/census3/token.ts#L175)

___

### types

▸ **types**(`url`): `Promise`\<[`ICensus3TokenTypesResponse`](../interfaces/ICensus3TokenTypesResponse)\>

Fetches list of tokens types

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |

#### Returns

`Promise`\<[`ICensus3TokenTypesResponse`](../interfaces/ICensus3TokenTypesResponse)\>

#### Defined in

[api/census3/token.ts:160](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/api/census3/token.ts#L160)
