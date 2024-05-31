[@vocdoni/sdk](/sdk) / CspAPI

# Class: CspAPI

## Hierarchy

- `API`

  ↳ **`CspAPI`**

## Table of contents

### Methods

- [info](CspAPI#info)
- [sign](CspAPI#sign)
- [step](CspAPI#step)

## Methods

### info

▸ **info**(`url`): `Promise`\<[`ICspInfoResponse`](../interfaces/ICspInfoResponse)\>

CSP info

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | CSP endpoint URL |

#### Returns

`Promise`\<[`ICspInfoResponse`](../interfaces/ICspInfoResponse)\>

#### Defined in

[api/csp.ts:85](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/csp.ts#L85)

___

### sign

▸ **sign**(`url`, `electionId`, `signatureType`, `payload`, `token`): `Promise`\<[`ICspSignResponse`](../interfaces/ICspSignResponse)\>

CSP sign

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | CSP endpoint URL |
| `electionId` | `string` | The election identifier |
| `signatureType` | `string` | The type of the signature |
| `payload` | `string` | The payload from the user |
| `token` | `string` | The token from the last step |

#### Returns

`Promise`\<[`ICspSignResponse`](../interfaces/ICspSignResponse)\>

#### Defined in

[api/csp.ts:132](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/csp.ts#L132)

___

### step

▸ **step**(`url`, `electionId`, `signatureType`, `authType`, `stepNr`, `data`, `authToken?`): `Promise`\<[`ICspIntermediateStepResponse`](../interfaces/ICspIntermediateStepResponse.md) \| [`ICspFinalStepResponse`](../interfaces/ICspFinalStepResponse)\>

CSP step

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | CSP endpoint URL |
| `electionId` | `string` | The election identifier |
| `signatureType` | `string` | The type of the signature |
| `authType` | `string` | The type of the auth method |
| `stepNr` | `number` | The step number |
| `data` | `any`[] | The auth data |
| `authToken?` | `string` | The auth token from the previous step |

#### Returns

`Promise`\<[`ICspIntermediateStepResponse`](../interfaces/ICspIntermediateStepResponse.md) \| [`ICspFinalStepResponse`](../interfaces/ICspFinalStepResponse)\>

#### Defined in

[api/csp.ts:104](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/csp.ts#L104)
