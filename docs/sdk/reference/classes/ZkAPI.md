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

[api/zk.ts:54](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/zk.ts#L54)

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

[api/zk.ts:68](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/api/zk.ts#L68)
