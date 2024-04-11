[@vocdoni/sdk](/sdk) / Election

# Class: Election

Represents an election

## Hierarchy

- **`Election`**

  ↳ [`UnpublishedElection`](UnpublishedElection)

  ↳ [`PublishedElection`](PublishedElection)

## Table of contents

### Accessors

- [addSDKVersion](Election#addsdkversion)
- [census](Election#census)
- [description](Election#description)
- [electionType](Election#electiontype)
- [endDate](Election#enddate)
- [header](Election#header)
- [maxCensusSize](Election#maxcensussize)
- [meta](Election#meta)
- [questions](Election#questions)
- [startDate](Election#startdate)
- [streamUri](Election#streamuri)
- [temporarySecretIdentity](Election#temporarysecretidentity)
- [title](Election#title)
- [voteType](Election#votetype)

### Methods

- [get](Election#get)
- [from](Election#from)

## Accessors

### addSDKVersion

• `get` **addSDKVersion**(): `boolean`

#### Returns

`boolean`

#### Defined in

[types/election/election.ts:262](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/election/election.ts#L262)

___

### census

• `get` **census**(): [`Census`](Census)

#### Returns

[`Census`](Census)

#### Defined in

[types/election/election.ts:250](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/election/election.ts#L250)

___

### description

• `get` **description**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Defined in

[types/election/election.ts:214](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/election/election.ts#L214)

___

### electionType

• `get` **electionType**(): [`IElectionType`](../interfaces/IElectionType)

#### Returns

[`IElectionType`](../interfaces/IElectionType)

#### Defined in

[types/election/election.ts:238](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/election/election.ts#L238)

___

### endDate

• `get` **endDate**(): `Date`

#### Returns

`Date`

#### Defined in

[types/election/election.ts:234](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/election/election.ts#L234)

___

### header

• `get` **header**(): `string`

#### Returns

`string`

#### Defined in

[types/election/election.ts:218](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/election/election.ts#L218)

___

### maxCensusSize

• `get` **maxCensusSize**(): `number`

#### Returns

`number`

#### Defined in

[types/election/election.ts:254](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/election/election.ts#L254)

___

### meta

• `get` **meta**(): `any`

#### Returns

`any`

#### Defined in

[types/election/election.ts:226](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/election/election.ts#L226)

___

### questions

• `get` **questions**(): [`IQuestion`](../interfaces/IQuestion)[]

#### Returns

[`IQuestion`](../interfaces/IQuestion)[]

#### Defined in

[types/election/election.ts:246](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/election/election.ts#L246)

___

### startDate

• `get` **startDate**(): `Date`

#### Returns

`Date`

#### Defined in

[types/election/election.ts:230](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/election/election.ts#L230)

___

### streamUri

• `get` **streamUri**(): `string`

#### Returns

`string`

#### Defined in

[types/election/election.ts:222](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/election/election.ts#L222)

___

### temporarySecretIdentity

• `get` **temporarySecretIdentity**(): `boolean`

#### Returns

`boolean`

#### Defined in

[types/election/election.ts:258](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/election/election.ts#L258)

___

### title

• `get` **title**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Defined in

[types/election/election.ts:210](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/election/election.ts#L210)

___

### voteType

• `get` **voteType**(): [`IVoteType`](../interfaces/IVoteType)

#### Returns

[`IVoteType`](../interfaces/IVoteType)

#### Defined in

[types/election/election.ts:242](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/election/election.ts#L242)

## Methods

### get

▸ **get**(`dot`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dot` | `string` |

#### Returns

`any`

#### Defined in

[types/election/election.ts:266](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/election/election.ts#L266)

___

### from

▸ **from**(`params`): [`UnpublishedElection`](UnpublishedElection)

Returns an unpublished election object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IElectionParameters`](../interfaces/IElectionParameters) | Unpublished Election parameters |

#### Returns

[`UnpublishedElection`](UnpublishedElection)

#### Defined in

[types/election/election.ts:206](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/election/election.ts#L206)
