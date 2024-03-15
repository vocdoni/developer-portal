[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / ArchivedElection

# Class: ArchivedElection

Represents a published election

## Hierarchy

- [`PublishedElection`](PublishedElection.md)

  ↳ **`ArchivedElection`**

## Table of contents

### Constructors

- [constructor](ArchivedElection.md#constructor)

### Properties

- [\_addSDKVersion](ArchivedElection.md#_addsdkversion)
- [\_census](ArchivedElection.md#_census)
- [\_description](ArchivedElection.md#_description)
- [\_electionType](ArchivedElection.md#_electiontype)
- [\_endDate](ArchivedElection.md#_enddate)
- [\_header](ArchivedElection.md#_header)
- [\_maxCensusSize](ArchivedElection.md#_maxcensussize)
- [\_meta](ArchivedElection.md#_meta)
- [\_questions](ArchivedElection.md#_questions)
- [\_startDate](ArchivedElection.md#_startdate)
- [\_streamUri](ArchivedElection.md#_streamuri)
- [\_temporarySecretIdentity](ArchivedElection.md#_temporarysecretidentity)
- [\_title](ArchivedElection.md#_title)
- [\_voteType](ArchivedElection.md#_votetype)

### Accessors

- [addSDKVersion](ArchivedElection.md#addsdkversion)
- [census](ArchivedElection.md#census)
- [chainId](ArchivedElection.md#chainid)
- [creationTime](ArchivedElection.md#creationtime)
- [description](ArchivedElection.md#description)
- [electionType](ArchivedElection.md#electiontype)
- [endDate](ArchivedElection.md#enddate)
- [finalResults](ArchivedElection.md#finalresults)
- [fromArchive](ArchivedElection.md#fromarchive)
- [header](ArchivedElection.md#header)
- [id](ArchivedElection.md#id)
- [isValid](ArchivedElection.md#isvalid)
- [manuallyEnded](ArchivedElection.md#manuallyended)
- [maxCensusSize](ArchivedElection.md#maxcensussize)
- [meta](ArchivedElection.md#meta)
- [metadataURL](ArchivedElection.md#metadataurl)
- [organizationId](ArchivedElection.md#organizationid)
- [questions](ArchivedElection.md#questions)
- [raw](ArchivedElection.md#raw)
- [results](ArchivedElection.md#results)
- [resultsType](ArchivedElection.md#resultstype)
- [startDate](ArchivedElection.md#startdate)
- [status](ArchivedElection.md#status)
- [streamUri](ArchivedElection.md#streamuri)
- [temporarySecretIdentity](ArchivedElection.md#temporarysecretidentity)
- [title](ArchivedElection.md#title)
- [voteCount](ArchivedElection.md#votecount)
- [voteType](ArchivedElection.md#votetype)

### Methods

- [checkVote](ArchivedElection.md#checkvote)
- [get](ArchivedElection.md#get)
- [build](ArchivedElection.md#build)
- [checkVote](ArchivedElection.md#checkvote-1)
- [from](ArchivedElection.md#from)
- [getStatus](ArchivedElection.md#getstatus)

## Constructors

### constructor

• **new ArchivedElection**(`params`): [`ArchivedElection`](ArchivedElection.md)

Constructs an archived election

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IPublishedElectionParameters`](../interfaces/IPublishedElectionParameters.md) | Election parameters |

#### Returns

[`ArchivedElection`](ArchivedElection.md)

#### Overrides

[PublishedElection](PublishedElection.md).[constructor](PublishedElection.md#constructor)

#### Defined in

[types/election/archived.ts:13](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/archived.ts#L13)

## Properties

### \_addSDKVersion

• `Protected` **\_addSDKVersion**: `boolean`

#### Inherited from

[PublishedElection](PublishedElection.md).[_addSDKVersion](PublishedElection.md#_addsdkversion)

#### Defined in

[types/election/election.ts:175](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L175)

___

### \_census

• `Protected` **\_census**: [`Census`](Census.md)

#### Inherited from

[PublishedElection](PublishedElection.md).[_census](PublishedElection.md#_census)

#### Defined in

[types/election/election.ts:172](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L172)

___

### \_description

• `Protected` **\_description**: `MultiLanguage`\<`string`\>

#### Inherited from

[PublishedElection](PublishedElection.md).[_description](PublishedElection.md#_description)

#### Defined in

[types/election/election.ts:163](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L163)

___

### \_electionType

• `Protected` **\_electionType**: [`IElectionType`](../interfaces/IElectionType.md)

#### Inherited from

[PublishedElection](PublishedElection.md).[_electionType](PublishedElection.md#_electiontype)

#### Defined in

[types/election/election.ts:169](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L169)

___

### \_endDate

• `Protected` **\_endDate**: `Date`

#### Inherited from

[PublishedElection](PublishedElection.md).[_endDate](PublishedElection.md#_enddate)

#### Defined in

[types/election/election.ts:168](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L168)

___

### \_header

• `Protected` **\_header**: `string`

#### Inherited from

[PublishedElection](PublishedElection.md).[_header](PublishedElection.md#_header)

#### Defined in

[types/election/election.ts:164](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L164)

___

### \_maxCensusSize

• `Protected` **\_maxCensusSize**: `number`

#### Inherited from

[PublishedElection](PublishedElection.md).[_maxCensusSize](PublishedElection.md#_maxcensussize)

#### Defined in

[types/election/election.ts:173](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L173)

___

### \_meta

• `Protected` **\_meta**: `any`

#### Inherited from

[PublishedElection](PublishedElection.md).[_meta](PublishedElection.md#_meta)

#### Defined in

[types/election/election.ts:166](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L166)

___

### \_questions

• `Protected` **\_questions**: [`IQuestion`](../interfaces/IQuestion.md)[]

#### Inherited from

[PublishedElection](PublishedElection.md).[_questions](PublishedElection.md#_questions)

#### Defined in

[types/election/election.ts:171](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L171)

___

### \_startDate

• `Protected` **\_startDate**: `Date`

#### Inherited from

[PublishedElection](PublishedElection.md).[_startDate](PublishedElection.md#_startdate)

#### Defined in

[types/election/election.ts:167](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L167)

___

### \_streamUri

• `Protected` **\_streamUri**: `string`

#### Inherited from

[PublishedElection](PublishedElection.md).[_streamUri](PublishedElection.md#_streamuri)

#### Defined in

[types/election/election.ts:165](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L165)

___

### \_temporarySecretIdentity

• `Protected` **\_temporarySecretIdentity**: `boolean`

#### Inherited from

[PublishedElection](PublishedElection.md).[_temporarySecretIdentity](PublishedElection.md#_temporarysecretidentity)

#### Defined in

[types/election/election.ts:174](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L174)

___

### \_title

• `Protected` **\_title**: `MultiLanguage`\<`string`\>

#### Inherited from

[PublishedElection](PublishedElection.md).[_title](PublishedElection.md#_title)

#### Defined in

[types/election/election.ts:162](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L162)

___

### \_voteType

• `Protected` **\_voteType**: [`IVoteType`](../interfaces/IVoteType.md)

#### Inherited from

[PublishedElection](PublishedElection.md).[_voteType](PublishedElection.md#_votetype)

#### Defined in

[types/election/election.ts:170](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L170)

## Accessors

### addSDKVersion

• `get` **addSDKVersion**(): `boolean`

#### Returns

`boolean`

#### Inherited from

PublishedElection.addSDKVersion

#### Defined in

[types/election/election.ts:262](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L262)

___

### census

• `get` **census**(): `ArchivedCensus`

#### Returns

`ArchivedCensus`

#### Overrides

PublishedElection.census

#### Defined in

[types/election/archived.ts:17](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/archived.ts#L17)

___

### chainId

• `get` **chainId**(): `string`

#### Returns

`string`

#### Inherited from

PublishedElection.chainId

#### Defined in

[types/election/published.ts:219](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L219)

___

### creationTime

• `get` **creationTime**(): `Date`

#### Returns

`Date`

#### Inherited from

PublishedElection.creationTime

#### Defined in

[types/election/published.ts:223](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L223)

___

### description

• `get` **description**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Inherited from

PublishedElection.description

#### Defined in

[types/election/published.ts:147](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L147)

___

### electionType

• `get` **electionType**(): [`IElectionType`](../interfaces/IElectionType.md)

#### Returns

[`IElectionType`](../interfaces/IElectionType.md)

#### Inherited from

PublishedElection.electionType

#### Defined in

[types/election/published.ts:167](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L167)

___

### endDate

• `get` **endDate**(): `Date`

#### Returns

`Date`

#### Inherited from

PublishedElection.endDate

#### Defined in

[types/election/published.ts:163](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L163)

___

### finalResults

• `get` **finalResults**(): `boolean`

#### Returns

`boolean`

#### Inherited from

PublishedElection.finalResults

#### Defined in

[types/election/published.ts:203](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L203)

___

### fromArchive

• `get` **fromArchive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

PublishedElection.fromArchive

#### Defined in

[types/election/published.ts:215](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L215)

___

### header

• `get` **header**(): `string`

#### Returns

`string`

#### Inherited from

PublishedElection.header

#### Defined in

[types/election/published.ts:151](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L151)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Inherited from

PublishedElection.id

#### Defined in

[types/election/published.ts:187](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L187)

___

### isValid

• `get` **isValid**(): `boolean`

#### Returns

`boolean`

#### Inherited from

PublishedElection.isValid

#### Defined in

[types/election/published.ts:239](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L239)

___

### manuallyEnded

• `get` **manuallyEnded**(): `boolean`

#### Returns

`boolean`

#### Inherited from

PublishedElection.manuallyEnded

#### Defined in

[types/election/published.ts:211](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L211)

___

### maxCensusSize

• `get` **maxCensusSize**(): `number`

#### Returns

`number`

#### Inherited from

PublishedElection.maxCensusSize

#### Defined in

[types/election/published.ts:183](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L183)

___

### meta

• `get` **meta**(): `any`

#### Returns

`any`

#### Inherited from

PublishedElection.meta

#### Defined in

[types/election/election.ts:226](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L226)

___

### metadataURL

• `get` **metadataURL**(): `string`

#### Returns

`string`

#### Inherited from

PublishedElection.metadataURL

#### Defined in

[types/election/published.ts:227](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L227)

___

### organizationId

• `get` **organizationId**(): `string`

#### Returns

`string`

#### Inherited from

PublishedElection.organizationId

#### Defined in

[types/election/published.ts:191](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L191)

___

### questions

• `get` **questions**(): [`IQuestion`](../interfaces/IQuestion.md)[]

#### Returns

[`IQuestion`](../interfaces/IQuestion.md)[]

#### Inherited from

PublishedElection.questions

#### Defined in

[types/election/published.ts:175](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L175)

___

### raw

• `get` **raw**(): `object`

#### Returns

`object`

#### Inherited from

PublishedElection.raw

#### Defined in

[types/election/published.ts:235](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L235)

___

### results

• `get` **results**(): `string`[][]

#### Returns

`string`[][]

#### Inherited from

PublishedElection.results

#### Defined in

[types/election/published.ts:207](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L207)

___

### resultsType

• `get` **resultsType**(): [`ElectionResultsType`](../modules.md#electionresultstype)

#### Returns

[`ElectionResultsType`](../modules.md#electionresultstype)

#### Inherited from

PublishedElection.resultsType

#### Defined in

[types/election/published.ts:231](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L231)

___

### startDate

• `get` **startDate**(): `Date`

#### Returns

`Date`

#### Inherited from

PublishedElection.startDate

#### Defined in

[types/election/published.ts:159](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L159)

___

### status

• `get` **status**(): [`ElectionStatus`](../enums/ElectionStatus.md)

#### Returns

[`ElectionStatus`](../enums/ElectionStatus.md)

#### Inherited from

PublishedElection.status

#### Defined in

[types/election/published.ts:195](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L195)

___

### streamUri

• `get` **streamUri**(): `string`

#### Returns

`string`

#### Inherited from

PublishedElection.streamUri

#### Defined in

[types/election/published.ts:155](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L155)

___

### temporarySecretIdentity

• `get` **temporarySecretIdentity**(): `boolean`

#### Returns

`boolean`

#### Inherited from

PublishedElection.temporarySecretIdentity

#### Defined in

[types/election/election.ts:258](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L258)

___

### title

• `get` **title**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Inherited from

PublishedElection.title

#### Defined in

[types/election/published.ts:143](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L143)

___

### voteCount

• `get` **voteCount**(): `number`

#### Returns

`number`

#### Inherited from

PublishedElection.voteCount

#### Defined in

[types/election/published.ts:199](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L199)

___

### voteType

• `get` **voteType**(): [`IVoteType`](../interfaces/IVoteType.md)

#### Returns

[`IVoteType`](../interfaces/IVoteType.md)

#### Inherited from

PublishedElection.voteType

#### Defined in

[types/election/published.ts:171](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L171)

## Methods

### checkVote

▸ **checkVote**(`vote`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vote` | [`Vote`](Vote.md) |

#### Returns

`void`

#### Inherited from

[PublishedElection](PublishedElection.md).[checkVote](PublishedElection.md#checkvote)

#### Defined in

[types/election/published.ts:113](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L113)

___

### get

▸ **get**(`dot`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dot` | `string` |

#### Returns

`any`

#### Inherited from

[PublishedElection](PublishedElection.md).[get](PublishedElection.md#get)

#### Defined in

[types/election/election.ts:266](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L266)

___

### build

▸ **build**(`params`): [`PublishedElection`](PublishedElection.md)

Returns a published election object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IPublishedElectionParameters`](../interfaces/IPublishedElectionParameters.md) | Published election parameters |

#### Returns

[`PublishedElection`](PublishedElection.md)

#### Inherited from

[PublishedElection](PublishedElection.md).[build](PublishedElection.md#build)

#### Defined in

[types/election/published.ts:100](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L100)

___

### checkVote

▸ **checkVote**(`vote`, `voteType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vote` | [`Vote`](Vote.md) |
| `voteType` | [`IVoteType`](../interfaces/IVoteType.md) |

#### Returns

`void`

#### Inherited from

[PublishedElection](PublishedElection.md).[checkVote](PublishedElection.md#checkvote-1)

#### Defined in

[types/election/published.ts:127](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L127)

___

### from

▸ **from**(`params`): [`UnpublishedElection`](UnpublishedElection.md)

Returns an unpublished election object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IElectionParameters`](../interfaces/IElectionParameters.md) | Unpublished Election parameters |

#### Returns

[`UnpublishedElection`](UnpublishedElection.md)

#### Inherited from

[PublishedElection](PublishedElection.md).[from](PublishedElection.md#from)

#### Defined in

[types/election/election.ts:206](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L206)

___

### getStatus

▸ **getStatus**(`status`, `startDate`): [`ElectionStatus`](../enums/ElectionStatus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`AllElectionStatus`](../modules.md#allelectionstatus) |
| `startDate` | `Date` |

#### Returns

[`ElectionStatus`](../enums/ElectionStatus.md)

#### Inherited from

[PublishedElection](PublishedElection.md).[getStatus](PublishedElection.md#getstatus)

#### Defined in

[types/election/published.ts:104](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L104)
