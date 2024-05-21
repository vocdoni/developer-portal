[@vocdoni/sdk](/sdk) / Vote

# Class: Vote

Represents a vote

## Hierarchy

- **`Vote`**

  ↳ [`AnonymousVote`](AnonymousVote)

  ↳ [`CspVote`](CspVote)

## Table of contents

### Accessors

- [votes](Vote#votes)

### Constructors

- [constructor](Vote#constructor)

## Accessors

### votes

• `get` **votes**(): (`number` \| `bigint`)[]

#### Returns

(`number` \| `bigint`)[]

#### Defined in

[types/vote/vote.ts:16](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/vote/vote.ts#L16)

• `set` **votes**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | (`number` \| `bigint`)[] |

#### Returns

`void`

#### Defined in

[types/vote/vote.ts:20](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/vote/vote.ts#L20)

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

[types/vote/vote.ts:12](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/vote/vote.ts#L12)
