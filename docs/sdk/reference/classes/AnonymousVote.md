[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / AnonymousVote

# Class: AnonymousVote

Represents a vote

## Hierarchy

- [`Vote`](Vote.md)

  ↳ **`AnonymousVote`**

## Table of contents

### Constructors

- [constructor](AnonymousVote.md#constructor)

### Properties

- [\_password](AnonymousVote.md#_password)
- [\_signature](AnonymousVote.md#_signature)

### Accessors

- [password](AnonymousVote.md#password)
- [signature](AnonymousVote.md#signature)
- [votes](AnonymousVote.md#votes)

## Constructors

### constructor

• **new AnonymousVote**(`votes`, `signature?`, `password?`): [`AnonymousVote`](AnonymousVote.md)

Constructs a csp vote

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `votes` | (`number` \| `bigint`)[] | `undefined` | The list of votes values |
| `signature?` | `string` | `undefined` | The signature of the payload |
| `password` | `string` | `'0'` | The password of the anonymous vote |

#### Returns

[`AnonymousVote`](AnonymousVote.md)

#### Overrides

[Vote](Vote.md).[constructor](Vote.md#constructor)

#### Defined in

[types/vote/anonymous.ts:14](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/vote/anonymous.ts#L14)

## Properties

### \_password

• `Private` **\_password**: `string`

#### Defined in

[types/vote/anonymous.ts:4](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/vote/anonymous.ts#L4)

___

### \_signature

• `Private` **\_signature**: `string`

#### Defined in

[types/vote/anonymous.ts:5](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/vote/anonymous.ts#L5)

## Accessors

### password

• `get` **password**(): `string`

#### Returns

`string`

#### Defined in

[types/vote/anonymous.ts:20](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/vote/anonymous.ts#L20)

• `set` **password**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[types/vote/anonymous.ts:24](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/vote/anonymous.ts#L24)

___

### signature

• `get` **signature**(): `string`

#### Returns

`string`

#### Defined in

[types/vote/anonymous.ts:28](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/vote/anonymous.ts#L28)

• `set` **signature**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[types/vote/anonymous.ts:32](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/vote/anonymous.ts#L32)

___

### votes

• `get` **votes**(): (`number` \| `bigint`)[]

#### Returns

(`number` \| `bigint`)[]

#### Inherited from

Vote.votes

#### Defined in

[types/vote/vote.ts:16](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/vote/vote.ts#L16)

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

[types/vote/vote.ts:20](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/vote/vote.ts#L20)
