[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / CspVote

# Class: CspVote

Represents a vote

## Hierarchy

- [`Vote`](Vote.md)

  ↳ **`CspVote`**

## Table of contents

### Constructors

- [constructor](CspVote.md#constructor)

### Properties

- [\_proof\_type](CspVote.md#_proof_type)
- [\_signature](CspVote.md#_signature)

### Accessors

- [proof\_type](CspVote.md#proof_type)
- [signature](CspVote.md#signature)
- [votes](CspVote.md#votes)

## Constructors

### constructor

• **new CspVote**(`votes`, `signature`, `proof_type?`): [`CspVote`](CspVote.md)

Constructs a csp vote

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `votes` | (`number` \| `bigint`)[] | The list of votes values |
| `signature` | `string` | The CSP signature |
| `proof_type?` | [`CspProofType`](../enums/CspProofType.md) | The CSP proof type |

#### Returns

[`CspVote`](CspVote.md)

#### Overrides

[Vote](Vote.md).[constructor](Vote.md#constructor)

#### Defined in

[types/vote/csp.ts:15](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/vote/csp.ts#L15)

## Properties

### \_proof\_type

• `Private` **\_proof\_type**: [`CspProofType`](../enums/CspProofType.md)

#### Defined in

[types/vote/csp.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/vote/csp.ts#L6)

___

### \_signature

• `Private` **\_signature**: `string`

#### Defined in

[types/vote/csp.ts:5](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/vote/csp.ts#L5)

## Accessors

### proof\_type

• `get` **proof_type**(): [`CspProofType`](../enums/CspProofType.md)

#### Returns

[`CspProofType`](../enums/CspProofType.md)

#### Defined in

[types/vote/csp.ts:29](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/vote/csp.ts#L29)

• `set` **proof_type**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CspProofType`](../enums/CspProofType.md) |

#### Returns

`void`

#### Defined in

[types/vote/csp.ts:33](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/vote/csp.ts#L33)

___

### signature

• `get` **signature**(): `string`

#### Returns

`string`

#### Defined in

[types/vote/csp.ts:21](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/vote/csp.ts#L21)

• `set` **signature**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[types/vote/csp.ts:25](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/vote/csp.ts#L25)

___

### votes

• `get` **votes**(): (`number` \| `bigint`)[]

#### Returns

(`number` \| `bigint`)[]

#### Inherited from

Vote.votes

#### Defined in

[types/vote/vote.ts:16](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/vote/vote.ts#L16)

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

[types/vote/vote.ts:20](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/vote/vote.ts#L20)
