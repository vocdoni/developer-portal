[@vocdoni/sdk](/sdk) / [Exports](../modules) / Vote

# Class: Vote

Represents a vote

## Hierarchy

- **`Vote`**

  ↳ [`AnonymousVote`](AnonymousVote)

  ↳ [`CspVote`](CspVote)

## Table of contents

### Constructors

- [constructor](Vote#constructor)

### Properties

- [\_votes](Vote.md#_votes)

### Accessors

- [votes](Vote#votes)

## Constructors

### constructor

• **new Vote**(`votes`): [`Vote`](Vote)

Constructs a vote

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `votes` | (`number` \| `bigint`)[] | The list of votes values |

#### Returns

[`Vote`](Vote)

#### Defined in

[types/vote/vote.ts:12](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/vote/vote.ts#L12)

## Properties

### \_votes

• `Private` **\_votes**: (`number` \| `bigint`)[]

#### Defined in

[types/vote/vote.ts:5](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/vote/vote.ts#L5)

## Accessors

### votes

• `get` **votes**(): (`number` \| `bigint`)[]

#### Returns

(`number` \| `bigint`)[]

#### Defined in

[types/vote/vote.ts:16](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/vote/vote.ts#L16)

• `set` **votes**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | (`number` \| `bigint`)[] |

#### Returns

`void`

#### Defined in

[types/vote/vote.ts:20](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/vote/vote.ts#L20)
