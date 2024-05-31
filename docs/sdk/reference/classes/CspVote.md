[@vocdoni/sdk](/sdk) / CspVote

# Class: CspVote

Represents a vote

## Hierarchy

- [`Vote`](Vote)

  ↳ **`CspVote`**

## Table of contents

### Accessors

- [proof\_type](CspVote.md#proof_type)
- [signature](CspVote#signature)
- [votes](CspVote#votes)

### Constructors

- [constructor](CspVote#constructor)

## Accessors

### proof\_type

• `get` **proof_type**(): [`CspProofType`](../enums/CspProofType)

#### Returns

[`CspProofType`](../enums/CspProofType)

#### Defined in

[types/vote/csp.ts:29](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/vote/csp.ts#L29)

• `set` **proof_type**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CspProofType`](../enums/CspProofType) |

#### Returns

`void`

#### Defined in

[types/vote/csp.ts:33](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/vote/csp.ts#L33)

___

### signature

• `get` **signature**(): `string`

#### Returns

`string`

#### Defined in

[types/vote/csp.ts:21](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/vote/csp.ts#L21)

• `set` **signature**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[types/vote/csp.ts:25](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/vote/csp.ts#L25)

___

### votes

• `get` **votes**(): (`number` \| `bigint`)[]

#### Returns

(`number` \| `bigint`)[]

#### Inherited from

Vote.votes

#### Defined in

[types/vote/vote.ts:16](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/vote/vote.ts#L16)

• `set` **votes**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | (`number` \| `bigint`)[] |

#### Returns

`void`

#### Inherited from

Vote.votes

#### Defined in

[types/vote/vote.ts:20](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/vote/vote.ts#L20)

## Constructors

### constructor

• **new CspVote**(`votes`, `signature`, `proof_type?`): [`CspVote`](CspVote)

Constructs a csp vote

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `votes` | (`number` \| `bigint`)[] | The list of votes values |
| `signature` | `string` | The CSP signature |
| `proof_type?` | [`CspProofType`](../enums/CspProofType) | - |

#### Returns

[`CspVote`](CspVote)

#### Overrides

[Vote](Vote.md).[constructor](Vote#constructor)

#### Defined in

[types/vote/csp.ts:15](https://github.com/vocdoni/vocdoni-sdk/blob/2ec9544f0d792289a6e591f4f269c47a23ca40a1/src/types/vote/csp.ts#L15)
