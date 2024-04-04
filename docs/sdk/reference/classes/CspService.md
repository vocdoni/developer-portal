[@vocdoni/sdk](/sdk) / CspService

# Class: CspService

## Hierarchy

- [`Service`](Service)

  ↳ **`CspService`**

## Implements

- `CspServiceProperties`

## Table of contents

### Constructors

- [constructor](CspService#constructor)

### Methods

- [cspSign](CspService#cspsign)
- [cspStep](CspService#cspstep)
- [cspVote](CspService#cspvote)
- [setInfo](CspService#setinfo)
- [setUrlFromElection](CspService#seturlfromelection)
- [cspVote](CspService.md#cspvote-1)
- [fetchUrlFromElection](CspService#fetchurlfromelection)

### Properties

- [info](CspService#info)
- [url](CspService#url)

## Constructors

### constructor

• **new CspService**(`params`): [`CspService`](CspService)

Instantiate the CSP service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Partial`\<`CspServiceParameters`\> | The service parameters |

#### Returns

[`CspService`](CspService)

#### Overrides

Service.constructor

#### Defined in

[services/csp.ts:29](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/services/csp.ts#L29)

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

[services/csp.ts:64](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/services/csp.ts#L64)

___

### cspStep

▸ **cspStep**(`electionId`, `stepNumber`, `data`, `authToken?`): `Promise`\<[`ICspIntermediateStepResponse`](../interfaces/ICspIntermediateStepResponse.md) \| [`ICspFinalStepResponse`](../interfaces/ICspFinalStepResponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `electionId` | `string` |
| `stepNumber` | `number` |
| `data` | `any`[] |
| `authToken?` | `string` |

#### Returns

`Promise`\<[`ICspIntermediateStepResponse`](../interfaces/ICspIntermediateStepResponse.md) \| [`ICspFinalStepResponse`](../interfaces/ICspFinalStepResponse)\>

#### Defined in

[services/csp.ts:49](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/services/csp.ts#L49)

___

### cspVote

▸ **cspVote**(`vote`, `signature`, `proof_type?`): [`CspVote`](CspVote)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vote` | [`Vote`](Vote) |
| `signature` | `string` |
| `proof_type?` | [`CspProofType`](../enums/CspProofType) |

#### Returns

[`CspVote`](CspVote)

#### Defined in

[services/csp.ts:75](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/services/csp.ts#L75)

___

### setInfo

▸ **setInfo**(): `Promise`\<[`ICspInfoResponse`](../interfaces/ICspInfoResponse)\>

#### Returns

`Promise`\<[`ICspInfoResponse`](../interfaces/ICspInfoResponse)\>

#### Defined in

[services/csp.ts:43](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/services/csp.ts#L43)

___

### setUrlFromElection

▸ **setUrlFromElection**(`election`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `election` | [`Election`](Election) |

#### Returns

`string`

#### Defined in

[services/csp.ts:39](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/services/csp.ts#L39)

___

### cspVote

▸ **cspVote**(`vote`, `signature`, `proof_type?`): [`CspVote`](CspVote)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vote` | [`Vote`](Vote) |
| `signature` | `string` |
| `proof_type?` | [`CspProofType`](../enums/CspProofType) |

#### Returns

[`CspVote`](CspVote)

#### Defined in

[services/csp.ts:79](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/services/csp.ts#L79)

___

### fetchUrlFromElection

▸ **fetchUrlFromElection**(`election`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `election` | [`Election`](Election) |

#### Returns

`string`

#### Defined in

[services/csp.ts:34](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/services/csp.ts#L34)

## Properties

### info

• **info**: [`ICspInfoResponse`](../interfaces/ICspInfoResponse)

#### Implementation of

CspServiceProperties.info

#### Defined in

[services/csp.ts:22](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/services/csp.ts#L22)

___

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service#url)

#### Defined in

[services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/services/service.ts#L6)
