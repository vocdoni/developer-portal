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

[src/services/anonymous.ts:72](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/anonymous.ts#L72)

## Methods

### checkCircuitsHashes

▸ **checkCircuitsHashes**(): [`ChainCircuits`](../sdk-reference#chaincircuits)

Checks circuit hashes

#### Returns

[`ChainCircuits`](../sdk-reference#chaincircuits)

The checked circuit parameters

#### Defined in

[src/services/anonymous.ts:108](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/anonymous.ts#L108)

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

[src/services/anonymous.ts:83](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/anonymous.ts#L83)

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

[src/services/anonymous.ts:131](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/anonymous.ts#L131)

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

[src/services/anonymous.ts:94](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/anonymous.ts#L94)

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

[src/services/anonymous.ts:77](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/anonymous.ts#L77)

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

[src/services/anonymous.ts:88](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/anonymous.ts#L88)

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

[src/services/anonymous.ts:186](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/anonymous.ts#L186)

___

### signSIKPayload

▸ **signSIKPayload**(`wallet`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `Signer` \| `Wallet` \| [`RemoteSigner`](RemoteSigner) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/services/anonymous.ts:99](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/anonymous.ts#L99)

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

[src/services/anonymous.ts:233](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/anonymous.ts#L233)

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

[src/services/anonymous.ts:246](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/anonymous.ts#L246)

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

[src/services/anonymous.ts:256](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/anonymous.ts#L256)

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

[src/services/anonymous.ts:250](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/anonymous.ts#L250)

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

[src/services/anonymous.ts:191](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/anonymous.ts#L191)

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

[src/services/anonymous.ts:199](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/anonymous.ts#L199)

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

[src/services/anonymous.ts:269](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/anonymous.ts#L269)

## Properties

### chainCircuits

• **chainCircuits**: [`ChainCircuits`](../sdk-reference#chaincircuits)

#### Implementation of

AnonymousServiceProperties.chainCircuits

#### Defined in

[src/services/anonymous.ts:65](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/anonymous.ts#L65)

___

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service#url)

#### Defined in

[src/services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/service.ts#L6)

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

[src/services/anonymous.ts:276](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/anonymous.ts#L276)

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

[src/services/anonymous.ts:328](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/anonymous.ts#L328)

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

[src/services/anonymous.ts:303](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/services/anonymous.ts#L303)
