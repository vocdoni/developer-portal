[@vocdoni/sdk](/sdk) / [Exports](../modules) / Election

# Class: Election

Represents an election

## Hierarchy

- **`Election`**

  ↳ [`UnpublishedElection`](UnpublishedElection)

  ↳ [`PublishedElection`](PublishedElection)

## Table of contents

### Constructors

- [constructor](Election#constructor)

### Properties

- [\_addSDKVersion](Election.md#_addsdkversion)
- [\_census](Election.md#_census)
- [\_description](Election.md#_description)
- [\_electionType](Election.md#_electiontype)
- [\_endDate](Election.md#_enddate)
- [\_header](Election.md#_header)
- [\_maxCensusSize](Election.md#_maxcensussize)
- [\_meta](Election.md#_meta)
- [\_questions](Election.md#_questions)
- [\_startDate](Election.md#_startdate)
- [\_streamUri](Election.md#_streamuri)
- [\_temporarySecretIdentity](Election.md#_temporarysecretidentity)
- [\_title](Election.md#_title)
- [\_voteType](Election.md#_votetype)

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

## Constructors

### constructor

• **new Election**(`params?`): [`Election`](Election)

Constructs an election

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | [`IElectionParameters`](../interfaces/IElectionParameters) | Election parameters |

#### Returns

[`Election`](Election)

#### Defined in

[types/election/election.ts:182](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L182)

## Properties

### \_addSDKVersion

• `Protected` **\_addSDKVersion**: `boolean`

#### Defined in

[types/election/election.ts:175](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L175)

___

### \_census

• `Protected` **\_census**: [`Census`](Census)

#### Defined in

[types/election/election.ts:172](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L172)

___

### \_description

• `Protected` **\_description**: `MultiLanguage`\<`string`\>

#### Defined in

[types/election/election.ts:163](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L163)

___

### \_electionType

• `Protected` **\_electionType**: [`IElectionType`](../interfaces/IElectionType)

#### Defined in

[types/election/election.ts:169](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L169)

___

### \_endDate

• `Protected` **\_endDate**: `Date`

#### Defined in

[types/election/election.ts:168](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L168)

___

### \_header

• `Protected` **\_header**: `string`

#### Defined in

[types/election/election.ts:164](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L164)

___

### \_maxCensusSize

• `Protected` **\_maxCensusSize**: `number`

#### Defined in

[types/election/election.ts:173](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L173)

___

### \_meta

• `Protected` **\_meta**: `any`

#### Defined in

[types/election/election.ts:166](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L166)

___

### \_questions

• `Protected` **\_questions**: [`IQuestion`](../interfaces/IQuestion)[]

#### Defined in

[types/election/election.ts:171](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L171)

___

### \_startDate

• `Protected` **\_startDate**: `Date`

#### Defined in

[types/election/election.ts:167](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L167)

___

### \_streamUri

• `Protected` **\_streamUri**: `string`

#### Defined in

[types/election/election.ts:165](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L165)

___

### \_temporarySecretIdentity

• `Protected` **\_temporarySecretIdentity**: `boolean`

#### Defined in

[types/election/election.ts:174](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L174)

___

### \_title

• `Protected` **\_title**: `MultiLanguage`\<`string`\>

#### Defined in

[types/election/election.ts:162](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L162)

___

### \_voteType

• `Protected` **\_voteType**: [`IVoteType`](../interfaces/IVoteType)

#### Defined in

[types/election/election.ts:170](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L170)

## Accessors

### addSDKVersion

• `get` **addSDKVersion**(): `boolean`

#### Returns

`boolean`

#### Defined in

[types/election/election.ts:262](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L262)

___

### census

• `get` **census**(): [`Census`](Census)

#### Returns

[`Census`](Census)

#### Defined in

[types/election/election.ts:250](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L250)

___

### description

• `get` **description**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Defined in

[types/election/election.ts:214](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L214)

___

### electionType

• `get` **electionType**(): [`IElectionType`](../interfaces/IElectionType)

#### Returns

[`IElectionType`](../interfaces/IElectionType)

#### Defined in

[types/election/election.ts:238](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L238)

___

### endDate

• `get` **endDate**(): `Date`

#### Returns

`Date`

#### Defined in

[types/election/election.ts:234](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L234)

___

### header

• `get` **header**(): `string`

#### Returns

`string`

#### Defined in

[types/election/election.ts:218](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L218)

___

### maxCensusSize

• `get` **maxCensusSize**(): `number`

#### Returns

`number`

#### Defined in

[types/election/election.ts:254](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L254)

___

### meta

• `get` **meta**(): `any`

#### Returns

`any`

#### Defined in

[types/election/election.ts:226](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L226)

___

### questions

• `get` **questions**(): [`IQuestion`](../interfaces/IQuestion)[]

#### Returns

[`IQuestion`](../interfaces/IQuestion)[]

#### Defined in

[types/election/election.ts:246](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L246)

___

### startDate

• `get` **startDate**(): `Date`

#### Returns

`Date`

#### Defined in

[types/election/election.ts:230](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L230)

___

### streamUri

• `get` **streamUri**(): `string`

#### Returns

`string`

#### Defined in

[types/election/election.ts:222](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L222)

___

### temporarySecretIdentity

• `get` **temporarySecretIdentity**(): `boolean`

#### Returns

`boolean`

#### Defined in

[types/election/election.ts:258](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L258)

___

### title

• `get` **title**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Defined in

[types/election/election.ts:210](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L210)

___

### voteType

• `get` **voteType**(): [`IVoteType`](../interfaces/IVoteType)

#### Returns

[`IVoteType`](../interfaces/IVoteType)

#### Defined in

[types/election/election.ts:242](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L242)

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

[types/election/election.ts:266](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L266)

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

[types/election/election.ts:206](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/election/election.ts#L206)
