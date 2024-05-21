[@vocdoni/sdk](/sdk) / ZkAPI

# Class: ZkAPI

## Hierarchy

- `API`

  ↳ **`ZkAPI`**

## Table of contents

### Methods

- [proof](ZkAPI#proof)
- [sik](ZkAPI#sik)

## Methods

### proof

▸ **proof**(`url`, `key`): `Promise`\<[`IZkProofResponse`](../interfaces/IZkProofResponse)\>

Returns the ZK proof on given address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `key` | `string` | The address to be checked |

#### Returns

`Promise`\<[`IZkProofResponse`](../interfaces/IZkProofResponse)\>

The ZK proof

#### Defined in

[api/zk.ts:54](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/api/zk.ts#L54)

___

### sik

▸ **sik**(`url`, `key`): `Promise`\<[`IZkSIKResponse`](../interfaces/IZkSIKResponse)\>

Returns the SIK on given address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | API endpoint URL |
| `key` | `string` | The address to be checked |

#### Returns

`Promise`\<[`IZkSIKResponse`](../interfaces/IZkSIKResponse)\>

The ZK proof

#### Defined in

[api/zk.ts:68](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/api/zk.ts#L68)
