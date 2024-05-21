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

[types/election/election.ts:275](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/election.ts#L275)

___

### census

• `get` **census**(): [`Census`](Census)

#### Returns

[`Census`](Census)

#### Defined in

[types/election/election.ts:263](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/election.ts#L263)

___

### description

• `get` **description**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Defined in

[types/election/election.ts:227](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/election.ts#L227)

___

### electionType

• `get` **electionType**(): [`IElectionType`](../interfaces/IElectionType)

#### Returns

[`IElectionType`](../interfaces/IElectionType)

#### Defined in

[types/election/election.ts:251](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/election.ts#L251)

___

### endDate

• `get` **endDate**(): `Date`

#### Returns

`Date`

#### Defined in

[types/election/election.ts:247](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/election.ts#L247)

___

### header

• `get` **header**(): `string`

#### Returns

`string`

#### Defined in

[types/election/election.ts:231](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/election.ts#L231)

___

### maxCensusSize

• `get` **maxCensusSize**(): `number`

#### Returns

`number`

#### Defined in

[types/election/election.ts:267](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/election.ts#L267)

___

### meta

• `get` **meta**(): `any`

#### Returns

`any`

#### Defined in

[types/election/election.ts:239](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/election.ts#L239)

___

### questions

• `get` **questions**(): [`IQuestion`](../interfaces/IQuestion)[]

#### Returns

[`IQuestion`](../interfaces/IQuestion)[]

#### Defined in

[types/election/election.ts:259](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/election.ts#L259)

___

### startDate

• `get` **startDate**(): `Date`

#### Returns

`Date`

#### Defined in

[types/election/election.ts:243](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/election.ts#L243)

___

### streamUri

• `get` **streamUri**(): `string`

#### Returns

`string`

#### Defined in

[types/election/election.ts:235](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/election.ts#L235)

___

### temporarySecretIdentity

• `get` **temporarySecretIdentity**(): `boolean`

#### Returns

`boolean`

#### Defined in

[types/election/election.ts:271](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/election.ts#L271)

___

### title

• `get` **title**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Defined in

[types/election/election.ts:223](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/election.ts#L223)

___

### voteType

• `get` **voteType**(): [`IVoteType`](../interfaces/IVoteType)

#### Returns

[`IVoteType`](../interfaces/IVoteType)

#### Defined in

[types/election/election.ts:255](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/election.ts#L255)

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

[types/election/election.ts:279](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/election.ts#L279)

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

[types/election/election.ts:219](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/types/election/election.ts#L219)
