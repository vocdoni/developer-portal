[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / CspService

# Class: CspService

## Hierarchy

- [`Service`](Service.md)

  ↳ **`CspService`**

## Implements

- `CspServiceProperties`

## Table of contents

### Constructors

- [constructor](CspService.md#constructor)

### Properties

- [info](CspService.md#info)
- [url](CspService.md#url)

### Methods

- [cspSign](CspService.md#cspsign)
- [cspStep](CspService.md#cspstep)
- [cspVote](CspService.md#cspvote)
- [setInfo](CspService.md#setinfo)
- [setUrlFromElection](CspService.md#seturlfromelection)
- [cspVote](CspService.md#cspvote-1)
- [fetchUrlFromElection](CspService.md#fetchurlfromelection)

## Constructors

### constructor

• **new CspService**(`params`): [`CspService`](CspService.md)

Instantiate the CSP service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Partial`\<`CspServiceParameters`\> | The service parameters |

#### Returns

[`CspService`](CspService.md)

#### Overrides

[Service](Service.md).[constructor](Service.md#constructor)

#### Defined in

[services/csp.ts:29](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/csp.ts#L29)

## Properties

### info

• **info**: `ICspInfoResponse`

#### Implementation of

CspServiceProperties.info

#### Defined in

[services/csp.ts:22](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/csp.ts#L22)

___

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service.md#url)

#### Defined in

[services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/service.ts#L6)

## Methods

### cspSign

▸ **cspSign**(`electionId`, `address`, `token`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `electionId` | `string` |
| `address` | `string` |
| `token` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[services/csp.ts:64](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/csp.ts#L64)

___

### cspStep

▸ **cspStep**(`electionId`, `stepNumber`, `data`, `authToken?`): `Promise`\<`ICspIntermediateStepResponse` \| `ICspFinalStepResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `electionId` | `string` |
| `stepNumber` | `number` |
| `data` | `any`[] |
| `authToken?` | `string` |

#### Returns

`Promise`\<`ICspIntermediateStepResponse` \| `ICspFinalStepResponse`\>

#### Defined in

[services/csp.ts:49](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/csp.ts#L49)

___

### cspVote

▸ **cspVote**(`vote`, `signature`, `proof_type?`): [`CspVote`](CspVote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vote` | [`Vote`](Vote.md) |
| `signature` | `string` |
| `proof_type?` | [`CspProofType`](../enums/CspProofType.md) |

#### Returns

[`CspVote`](CspVote.md)

#### Defined in

[services/csp.ts:75](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/csp.ts#L75)

___

### setInfo

▸ **setInfo**(): `Promise`\<`ICspInfoResponse`\>

#### Returns

`Promise`\<`ICspInfoResponse`\>

#### Defined in

[services/csp.ts:43](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/csp.ts#L43)

___

### setUrlFromElection

▸ **setUrlFromElection**(`election`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `election` | [`Election`](Election.md) |

#### Returns

`string`

#### Defined in

[services/csp.ts:39](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/csp.ts#L39)

___

### cspVote

▸ **cspVote**(`vote`, `signature`, `proof_type?`): [`CspVote`](CspVote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vote` | [`Vote`](Vote.md) |
| `signature` | `string` |
| `proof_type?` | [`CspProofType`](../enums/CspProofType.md) |

#### Returns

[`CspVote`](CspVote.md)

#### Defined in

[services/csp.ts:79](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/csp.ts#L79)

___

### fetchUrlFromElection

▸ **fetchUrlFromElection**(`election`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `election` | [`Election`](Election.md) |

#### Returns

`string`

#### Defined in

[services/csp.ts:34](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/services/csp.ts#L34)
