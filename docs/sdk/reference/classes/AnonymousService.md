[@vocdoni/sdk](/sdk) / AnonymousService

# Class: AnonymousService

## Hierarchy

- [`Service`](Service)

  ↳ **`AnonymousService`**

## Implements

- `AnonymousServiceProperties`

## Table of contents

### Constructors

- [constructor](AnonymousService#constructor)

### Methods

- [checkCircuitsHashes](AnonymousService#checkcircuitshashes)
- [fetchAccountSIK](AnonymousService#fetchaccountsik)
- [fetchCircuits](AnonymousService#fetchcircuits)
- [fetchZKProof](AnonymousService#fetchzkproof)
- [generateZkProof](AnonymousService#generatezkproof)
- [hasRegisteredSIK](AnonymousService#hasregisteredsik)
- [setCircuits](AnonymousService#setcircuits)
- [signSIKPayload](AnonymousService#signsikpayload)
- [calcCircuitInputs](AnonymousService#calccircuitinputs)
- [calcNullifier](AnonymousService#calcnullifier)
- [calcSik](AnonymousService#calcsik)
- [calcVoteId](AnonymousService#calcvoteid)
- [generateGroth16Proof](AnonymousService#generategroth16proof)
- [prepareCircuitInputs](AnonymousService#preparecircuitinputs)
- [signatureToVocdoniSikSignature](AnonymousService#signaturetovocdonisiksignature)

### Properties

- [chainCircuits](AnonymousService#chaincircuits)
- [url](AnonymousService#url)
- [arbo\_utils](AnonymousService.md#arbo_utils)
- [ff\_utils](AnonymousService.md#ff_utils)
- [hex\_utils](AnonymousService.md#hex_utils)

## Constructors

### constructor

• **new AnonymousService**(`params`): [`AnonymousService`](AnonymousService)

Instantiate the anonymous service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Partial`\<`AnonymousServiceParameters`\> | The service parameters |

#### Returns

[`AnonymousService`](AnonymousService)

#### Overrides

Service.constructor

#### Defined in

[services/anonymous.ts:71](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/services/anonymous.ts#L71)

## Methods

### checkCircuitsHashes

▸ **checkCircuitsHashes**(): [`ChainCircuits`](../sdk-reference#chaincircuits)

Checks circuit hashes

#### Returns

[`ChainCircuits`](../sdk-reference#chaincircuits)

The checked circuit parameters

#### Defined in

[services/anonymous.ts:107](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/services/anonymous.ts#L107)

___

### fetchAccountSIK

▸ **fetchAccountSIK**(`address`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[services/anonymous.ts:82](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/services/anonymous.ts#L82)

___

### fetchCircuits

▸ **fetchCircuits**(`circuits?`): `Promise`\<[`ChainCircuits`](../sdk-reference#chaincircuits)\>

Fetches circuits for anonymous voting

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `circuits?` | `Omit`\<[`ChainCircuits`](../sdk-reference#chaincircuits), ``"zKeyData"`` \| ``"vKeyData"`` \| ``"wasmData"``\> | Additional options for custom circuits |

#### Returns

`Promise`\<[`ChainCircuits`](../sdk-reference#chaincircuits)\>

#### Defined in

[services/anonymous.ts:130](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/services/anonymous.ts#L130)

___

### fetchZKProof

▸ **fetchZKProof**(`address`): `Promise`\<[`IZkProofResponse`](../interfaces/IZkProofResponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`\<[`IZkProofResponse`](../interfaces/IZkProofResponse)\>

#### Defined in

[services/anonymous.ts:93](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/services/anonymous.ts#L93)

___

### generateZkProof

▸ **generateZkProof**(`inputs`): `Promise`\<[`ZkProof`](../sdk-reference#zkproof)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputs` | [`CircuitInputs`](../interfaces/CircuitInputs) |

#### Returns

`Promise`\<[`ZkProof`](../sdk-reference#zkproof)\>

#### Defined in

[services/anonymous.ts:76](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/services/anonymous.ts#L76)

___

### hasRegisteredSIK

▸ **hasRegisteredSIK**(`address`, `signature`, `password?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signature` | `string` |
| `password?` | `string` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[services/anonymous.ts:87](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/services/anonymous.ts#L87)

___

### setCircuits

▸ **setCircuits**(`circuits`): [`ChainCircuits`](../sdk-reference#chaincircuits)

Sets circuits for anonymous voting

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `circuits` | [`ChainCircuits`](../sdk-reference#chaincircuits) | Custom circuits |

#### Returns

[`ChainCircuits`](../sdk-reference#chaincircuits)

#### Defined in

[services/anonymous.ts:185](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/services/anonymous.ts#L185)

___

### signSIKPayload

▸ **signSIKPayload**(`wallet`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `Signer` \| `Wallet` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[services/anonymous.ts:98](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/services/anonymous.ts#L98)

___

### calcCircuitInputs

▸ **calcCircuitInputs**(`signature`, `password`, `electionId`): `Promise`\<\{ `arboElectionId`: `string`[] ; `ffpassword`: `string` ; `ffsignature`: `string` ; `nullifier`: `any`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `string` |
| `password` | `string` |
| `electionId` | `string` |

#### Returns

`Promise`\<\{ `arboElectionId`: `string`[] ; `ffpassword`: `string` ; `ffsignature`: `string` ; `nullifier`: `any`  }\>

#### Defined in

[services/anonymous.ts:232](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/services/anonymous.ts#L232)

___

### calcNullifier

▸ **calcNullifier**(`signature`, `password`, `electionId`): `Promise`\<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `string` |
| `password` | `string` |
| `electionId` | `string` |

#### Returns

`Promise`\<`bigint`\>

#### Defined in

[services/anonymous.ts:245](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/services/anonymous.ts#L245)

___

### calcSik

▸ **calcSik**(`address`, `personal_sign`, `password?`): `Promise`\<`string`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `address` | `string` | `undefined` |
| `personal_sign` | `string` | `undefined` |
| `password` | `string` | `'0'` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[services/anonymous.ts:255](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/services/anonymous.ts#L255)

___

### calcVoteId

▸ **calcVoteId**(`signature`, `password`, `electionId`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `string` |
| `password` | `string` |
| `electionId` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[services/anonymous.ts:249](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/services/anonymous.ts#L249)

___

### generateGroth16Proof

▸ **generateGroth16Proof**(`inputs`, `circuitPath`, `provingKey`): `Promise`\<[`ZkProof`](../sdk-reference#zkproof)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputs` | [`CircuitInputs`](../interfaces/CircuitInputs) |
| `circuitPath` | `Uint8Array` |
| `provingKey` | `Uint8Array` |

#### Returns

`Promise`\<[`ZkProof`](../sdk-reference#zkproof)\>

#### Defined in

[services/anonymous.ts:190](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/services/anonymous.ts#L190)

___

### prepareCircuitInputs

▸ **prepareCircuitInputs**(`electionId`, `address`, `password`, `signature`, `voteWeight`, `availableWeight`, `sikRoot`, `sikSiblings`, `censusRoot`, `censusSiblings`, `votePackage`): `Promise`\<[`CircuitInputs`](../interfaces/CircuitInputs)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `electionId` | `string` |
| `address` | `string` |
| `password` | `string` |
| `signature` | `string` |
| `voteWeight` | `string` |
| `availableWeight` | `string` |
| `sikRoot` | `string` |
| `sikSiblings` | `string`[] |
| `censusRoot` | `string` |
| `censusSiblings` | `string`[] |
| `votePackage` | `Buffer` |

#### Returns

`Promise`\<[`CircuitInputs`](../interfaces/CircuitInputs)\>

#### Defined in

[services/anonymous.ts:198](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/services/anonymous.ts#L198)

___

### signatureToVocdoniSikSignature

▸ **signatureToVocdoniSikSignature**(`personal_sign`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `personal_sign` | `string` |

#### Returns

`string`

#### Defined in

[services/anonymous.ts:268](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/services/anonymous.ts#L268)

## Properties

### chainCircuits

• **chainCircuits**: [`ChainCircuits`](../sdk-reference#chaincircuits)

#### Implementation of

AnonymousServiceProperties.chainCircuits

#### Defined in

[services/anonymous.ts:64](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/services/anonymous.ts#L64)

___

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service#url)

#### Defined in

[services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/services/service.ts#L6)

___

### arbo\_utils

▪ `Static` **arbo\_utils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `toBigInt` | (`str`: `string`) => `bigint` |
| `toHash` | (`input`: `string`) => `Promise`\<`string`[]\> |
| `toString` | (`n`: `bigint`) => `string` |

#### Defined in

[services/anonymous.ts:275](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/services/anonymous.ts#L275)

___

### ff\_utils

▪ `Static` **ff\_utils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bigIntToFF` | (`bi`: `bigint`) => `bigint` |
| `hexToFFBigInt` | (`hexStr`: `string`) => `bigint` |
| `q` | `bigint` |

#### Defined in

[services/anonymous.ts:327](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/services/anonymous.ts#L327)

___

### hex\_utils

▪ `Static` **hex\_utils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fromArrayBuffer` | (`input`: `Uint8Array`) => `string` |
| `fromBigInt` | (`bi`: `bigint`) => `string` |
| `toArrayBuffer` | (`input`: `string`) => `Uint8Array` |

#### Defined in

[services/anonymous.ts:302](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/services/anonymous.ts#L302)
