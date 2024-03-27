[@vocdoni/sdk](/sdk) / [Exports](../modules) / AnonymousService

# Class: AnonymousService

## Hierarchy

- [`Service`](Service)

  ↳ **`AnonymousService`**

## Implements

- `AnonymousServiceProperties`

## Table of contents

### Constructors

- [constructor](AnonymousService#constructor)

### Properties

- [chainCircuits](AnonymousService#chaincircuits)
- [url](AnonymousService#url)
- [arbo\_utils](AnonymousService.md#arbo_utils)
- [ff\_utils](AnonymousService.md#ff_utils)
- [hex\_utils](AnonymousService.md#hex_utils)

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

[Service](Service.md).[constructor](Service#constructor)

#### Defined in

[services/anonymous.ts:71](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/services/anonymous.ts#L71)

## Properties

### chainCircuits

• **chainCircuits**: [`ChainCircuits`](../modules#chaincircuits)

#### Implementation of

AnonymousServiceProperties.chainCircuits

#### Defined in

[services/anonymous.ts:64](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/services/anonymous.ts#L64)

___

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service#url)

#### Defined in

[services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/services/service.ts#L6)

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

[services/anonymous.ts:277](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/services/anonymous.ts#L277)

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

[services/anonymous.ts:329](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/services/anonymous.ts#L329)

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

[services/anonymous.ts:304](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/services/anonymous.ts#L304)

## Methods

### checkCircuitsHashes

▸ **checkCircuitsHashes**(): [`ChainCircuits`](../modules#chaincircuits)

Checks circuit hashes

#### Returns

[`ChainCircuits`](../modules#chaincircuits)

The checked circuit parameters

#### Defined in

[services/anonymous.ts:107](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/services/anonymous.ts#L107)

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

[services/anonymous.ts:82](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/services/anonymous.ts#L82)

___

### fetchCircuits

▸ **fetchCircuits**(`circuits?`): `Promise`\<[`ChainCircuits`](../modules#chaincircuits)\>

Fetches circuits for anonymous voting

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `circuits?` | `Omit`\<[`ChainCircuits`](../modules#chaincircuits), ``"zKeyData"`` \| ``"vKeyData"`` \| ``"wasmData"``\> | Additional options for custom circuits |

#### Returns

`Promise`\<[`ChainCircuits`](../modules#chaincircuits)\>

#### Defined in

[services/anonymous.ts:131](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/services/anonymous.ts#L131)

___

### fetchZKProof

▸ **fetchZKProof**(`address`): `Promise`\<`IZkProofResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`\<`IZkProofResponse`\>

#### Defined in

[services/anonymous.ts:93](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/services/anonymous.ts#L93)

___

### generateZkProof

▸ **generateZkProof**(`inputs`): `Promise`\<[`ZkProof`](../modules#zkproof)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputs` | [`CircuitInputs`](../interfaces/CircuitInputs) |

#### Returns

`Promise`\<[`ZkProof`](../modules#zkproof)\>

#### Defined in

[services/anonymous.ts:76](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/services/anonymous.ts#L76)

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

[services/anonymous.ts:87](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/services/anonymous.ts#L87)

___

### setCircuits

▸ **setCircuits**(`circuits`): [`ChainCircuits`](../modules#chaincircuits)

Sets circuits for anonymous voting

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `circuits` | [`ChainCircuits`](../modules#chaincircuits) | Custom circuits |

#### Returns

[`ChainCircuits`](../modules#chaincircuits)

#### Defined in

[services/anonymous.ts:187](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/services/anonymous.ts#L187)

___

### signSIKPayload

▸ **signSIKPayload**(`wallet`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `Wallet` \| `Signer` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[services/anonymous.ts:98](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/services/anonymous.ts#L98)

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

[services/anonymous.ts:234](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/services/anonymous.ts#L234)

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

[services/anonymous.ts:247](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/services/anonymous.ts#L247)

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

[services/anonymous.ts:257](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/services/anonymous.ts#L257)

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

[services/anonymous.ts:251](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/services/anonymous.ts#L251)

___

### generateGroth16Proof

▸ **generateGroth16Proof**(`inputs`, `circuitPath`, `provingKey`): `Promise`\<[`ZkProof`](../modules#zkproof)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputs` | [`CircuitInputs`](../interfaces/CircuitInputs) |
| `circuitPath` | `Uint8Array` |
| `provingKey` | `Uint8Array` |

#### Returns

`Promise`\<[`ZkProof`](../modules#zkproof)\>

#### Defined in

[services/anonymous.ts:192](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/services/anonymous.ts#L192)

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

[services/anonymous.ts:200](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/services/anonymous.ts#L200)

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

[services/anonymous.ts:270](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/services/anonymous.ts#L270)
