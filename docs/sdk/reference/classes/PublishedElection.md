[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / PublishedElection

# Class: PublishedElection

Represents a published election

## Hierarchy

- [`Election`](Election.md)

  ↳ **`PublishedElection`**

  ↳↳ [`ArchivedElection`](ArchivedElection.md)

## Table of contents

### Constructors

- [constructor](PublishedElection.md#constructor)

### Properties

- [\_addSDKVersion](PublishedElection.md#_addsdkversion)
- [\_census](PublishedElection.md#_census)
- [\_chainId](PublishedElection.md#_chainid)
- [\_creationTime](PublishedElection.md#_creationtime)
- [\_description](PublishedElection.md#_description)
- [\_electionType](PublishedElection.md#_electiontype)
- [\_endDate](PublishedElection.md#_enddate)
- [\_finalResults](PublishedElection.md#_finalresults)
- [\_fromArchive](PublishedElection.md#_fromarchive)
- [\_header](PublishedElection.md#_header)
- [\_id](PublishedElection.md#_id)
- [\_manuallyEnded](PublishedElection.md#_manuallyended)
- [\_maxCensusSize](PublishedElection.md#_maxcensussize)
- [\_meta](PublishedElection.md#_meta)
- [\_metadataURL](PublishedElection.md#_metadataurl)
- [\_organizationId](PublishedElection.md#_organizationid)
- [\_questions](PublishedElection.md#_questions)
- [\_raw](PublishedElection.md#_raw)
- [\_results](PublishedElection.md#_results)
- [\_resultsType](PublishedElection.md#_resultstype)
- [\_startDate](PublishedElection.md#_startdate)
- [\_status](PublishedElection.md#_status)
- [\_streamUri](PublishedElection.md#_streamuri)
- [\_temporarySecretIdentity](PublishedElection.md#_temporarysecretidentity)
- [\_title](PublishedElection.md#_title)
- [\_voteCount](PublishedElection.md#_votecount)
- [\_voteType](PublishedElection.md#_votetype)

### Accessors

- [addSDKVersion](PublishedElection.md#addsdkversion)
- [census](PublishedElection.md#census)
- [chainId](PublishedElection.md#chainid)
- [creationTime](PublishedElection.md#creationtime)
- [description](PublishedElection.md#description)
- [electionType](PublishedElection.md#electiontype)
- [endDate](PublishedElection.md#enddate)
- [finalResults](PublishedElection.md#finalresults)
- [fromArchive](PublishedElection.md#fromarchive)
- [header](PublishedElection.md#header)
- [id](PublishedElection.md#id)
- [isValid](PublishedElection.md#isvalid)
- [manuallyEnded](PublishedElection.md#manuallyended)
- [maxCensusSize](PublishedElection.md#maxcensussize)
- [meta](PublishedElection.md#meta)
- [metadataURL](PublishedElection.md#metadataurl)
- [organizationId](PublishedElection.md#organizationid)
- [questions](PublishedElection.md#questions)
- [raw](PublishedElection.md#raw)
- [results](PublishedElection.md#results)
- [resultsType](PublishedElection.md#resultstype)
- [startDate](PublishedElection.md#startdate)
- [status](PublishedElection.md#status)
- [streamUri](PublishedElection.md#streamuri)
- [temporarySecretIdentity](PublishedElection.md#temporarysecretidentity)
- [title](PublishedElection.md#title)
- [voteCount](PublishedElection.md#votecount)
- [voteType](PublishedElection.md#votetype)

### Methods

- [checkVote](PublishedElection.md#checkvote)
- [get](PublishedElection.md#get)
- [build](PublishedElection.md#build)
- [checkVote](PublishedElection.md#checkvote-1)
- [from](PublishedElection.md#from)
- [getStatus](PublishedElection.md#getstatus)

## Constructors

### constructor

• **new PublishedElection**(`params`): [`PublishedElection`](PublishedElection.md)

Constructs a published election

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IPublishedElectionParameters`](../interfaces/IPublishedElectionParameters.md) | Election parameters |

#### Returns

[`PublishedElection`](PublishedElection.md)

#### Overrides

[Election](Election.md).[constructor](Election.md#constructor)

#### Defined in

[types/election/published.ts:65](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L65)

## Properties

### \_addSDKVersion

• `Protected` **\_addSDKVersion**: `boolean`

#### Inherited from

[Election](Election.md).[_addSDKVersion](Election.md#_addsdkversion)

#### Defined in

[types/election/election.ts:175](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L175)

___

### \_census

• `Protected` **\_census**: [`Census`](Census.md)

#### Inherited from

[Election](Election.md).[_census](Election.md#_census)

#### Defined in

[types/election/election.ts:172](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L172)

___

### \_chainId

• `Private` `Readonly` **\_chainId**: `string`

#### Defined in

[types/election/published.ts:53](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L53)

___

### \_creationTime

• `Private` `Readonly` **\_creationTime**: `Date`

#### Defined in

[types/election/published.ts:55](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L55)

___

### \_description

• `Protected` **\_description**: `MultiLanguage`\<`string`\>

#### Inherited from

[Election](Election.md).[_description](Election.md#_description)

#### Defined in

[types/election/election.ts:163](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L163)

___

### \_electionType

• `Protected` **\_electionType**: [`IElectionType`](../interfaces/IElectionType.md)

#### Inherited from

[Election](Election.md).[_electionType](Election.md#_electiontype)

#### Defined in

[types/election/election.ts:169](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L169)

___

### \_endDate

• `Protected` **\_endDate**: `Date`

#### Inherited from

[Election](Election.md).[_endDate](Election.md#_enddate)

#### Defined in

[types/election/election.ts:168](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L168)

___

### \_finalResults

• `Private` `Readonly` **\_finalResults**: `boolean`

#### Defined in

[types/election/published.ts:50](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L50)

___

### \_fromArchive

• `Private` `Readonly` **\_fromArchive**: `boolean`

#### Defined in

[types/election/published.ts:52](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L52)

___

### \_header

• `Protected` **\_header**: `string`

#### Inherited from

[Election](Election.md).[_header](Election.md#_header)

#### Defined in

[types/election/election.ts:164](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L164)

___

### \_id

• `Private` `Readonly` **\_id**: `string`

#### Defined in

[types/election/published.ts:46](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L46)

___

### \_manuallyEnded

• `Private` `Readonly` **\_manuallyEnded**: `boolean`

#### Defined in

[types/election/published.ts:51](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L51)

___

### \_maxCensusSize

• `Protected` **\_maxCensusSize**: `number`

#### Inherited from

[Election](Election.md).[_maxCensusSize](Election.md#_maxcensussize)

#### Defined in

[types/election/election.ts:173](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L173)

___

### \_meta

• `Protected` **\_meta**: `any`

#### Inherited from

[Election](Election.md).[_meta](Election.md#_meta)

#### Defined in

[types/election/election.ts:166](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L166)

___

### \_metadataURL

• `Private` `Readonly` **\_metadataURL**: `string`

#### Defined in

[types/election/published.ts:56](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L56)

___

### \_organizationId

• `Private` `Readonly` **\_organizationId**: `string`

#### Defined in

[types/election/published.ts:47](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L47)

___

### \_questions

• `Protected` **\_questions**: [`IQuestion`](../interfaces/IQuestion.md)[]

#### Inherited from

[Election](Election.md).[_questions](Election.md#_questions)

#### Defined in

[types/election/election.ts:171](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L171)

___

### \_raw

• `Private` `Readonly` **\_raw**: `object`

#### Defined in

[types/election/published.ts:58](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L58)

___

### \_results

• `Private` `Readonly` **\_results**: `string`[][]

#### Defined in

[types/election/published.ts:54](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L54)

___

### \_resultsType

• `Private` `Readonly` **\_resultsType**: [`ElectionResultsType`](../modules.md#electionresultstype)

#### Defined in

[types/election/published.ts:57](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L57)

___

### \_startDate

• `Protected` **\_startDate**: `Date`

#### Inherited from

[Election](Election.md).[_startDate](Election.md#_startdate)

#### Defined in

[types/election/election.ts:167](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L167)

___

### \_status

• `Private` `Readonly` **\_status**: [`ElectionStatus`](../enums/ElectionStatus.md)

#### Defined in

[types/election/published.ts:48](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L48)

___

### \_streamUri

• `Protected` **\_streamUri**: `string`

#### Inherited from

[Election](Election.md).[_streamUri](Election.md#_streamuri)

#### Defined in

[types/election/election.ts:165](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L165)

___

### \_temporarySecretIdentity

• `Protected` **\_temporarySecretIdentity**: `boolean`

#### Inherited from

[Election](Election.md).[_temporarySecretIdentity](Election.md#_temporarysecretidentity)

#### Defined in

[types/election/election.ts:174](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L174)

___

### \_title

• `Protected` **\_title**: `MultiLanguage`\<`string`\>

#### Inherited from

[Election](Election.md).[_title](Election.md#_title)

#### Defined in

[types/election/election.ts:162](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L162)

___

### \_voteCount

• `Private` `Readonly` **\_voteCount**: `number`

#### Defined in

[types/election/published.ts:49](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L49)

___

### \_voteType

• `Protected` **\_voteType**: [`IVoteType`](../interfaces/IVoteType.md)

#### Inherited from

[Election](Election.md).[_voteType](Election.md#_votetype)

#### Defined in

[types/election/election.ts:170](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L170)

## Accessors

### addSDKVersion

• `get` **addSDKVersion**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Election.addSDKVersion

#### Defined in

[types/election/election.ts:262](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L262)

___

### census

• `get` **census**(): [`PublishedCensus`](PublishedCensus.md)

#### Returns

[`PublishedCensus`](PublishedCensus.md)

#### Overrides

Election.census

#### Defined in

[types/election/published.ts:179](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L179)

___

### chainId

• `get` **chainId**(): `string`

#### Returns

`string`

#### Defined in

[types/election/published.ts:219](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L219)

___

### creationTime

• `get` **creationTime**(): `Date`

#### Returns

`Date`

#### Defined in

[types/election/published.ts:223](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L223)

___

### description

• `get` **description**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Overrides

Election.description

#### Defined in

[types/election/published.ts:147](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L147)

___

### electionType

• `get` **electionType**(): [`IElectionType`](../interfaces/IElectionType.md)

#### Returns

[`IElectionType`](../interfaces/IElectionType.md)

#### Overrides

Election.electionType

#### Defined in

[types/election/published.ts:167](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L167)

___

### endDate

• `get` **endDate**(): `Date`

#### Returns

`Date`

#### Overrides

Election.endDate

#### Defined in

[types/election/published.ts:163](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L163)

___

### finalResults

• `get` **finalResults**(): `boolean`

#### Returns

`boolean`

#### Defined in

[types/election/published.ts:203](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L203)

___

### fromArchive

• `get` **fromArchive**(): `boolean`

#### Returns

`boolean`

#### Defined in

[types/election/published.ts:215](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L215)

___

### header

• `get` **header**(): `string`

#### Returns

`string`

#### Overrides

Election.header

#### Defined in

[types/election/published.ts:151](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L151)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[types/election/published.ts:187](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L187)

___

### isValid

• `get` **isValid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[types/election/published.ts:239](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L239)

___

### manuallyEnded

• `get` **manuallyEnded**(): `boolean`

#### Returns

`boolean`

#### Defined in

[types/election/published.ts:211](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L211)

___

### maxCensusSize

• `get` **maxCensusSize**(): `number`

#### Returns

`number`

#### Overrides

Election.maxCensusSize

#### Defined in

[types/election/published.ts:183](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L183)

___

### meta

• `get` **meta**(): `any`

#### Returns

`any`

#### Inherited from

Election.meta

#### Defined in

[types/election/election.ts:226](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L226)

___

### metadataURL

• `get` **metadataURL**(): `string`

#### Returns

`string`

#### Defined in

[types/election/published.ts:227](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L227)

___

### organizationId

• `get` **organizationId**(): `string`

#### Returns

`string`

#### Defined in

[types/election/published.ts:191](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L191)

___

### questions

• `get` **questions**(): [`IQuestion`](../interfaces/IQuestion.md)[]

#### Returns

[`IQuestion`](../interfaces/IQuestion.md)[]

#### Overrides

Election.questions

#### Defined in

[types/election/published.ts:175](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L175)

___

### raw

• `get` **raw**(): `object`

#### Returns

`object`

#### Defined in

[types/election/published.ts:235](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L235)

___

### results

• `get` **results**(): `string`[][]

#### Returns

`string`[][]

#### Defined in

[types/election/published.ts:207](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L207)

___

### resultsType

• `get` **resultsType**(): [`ElectionResultsType`](../modules.md#electionresultstype)

#### Returns

[`ElectionResultsType`](../modules.md#electionresultstype)

#### Defined in

[types/election/published.ts:231](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L231)

___

### startDate

• `get` **startDate**(): `Date`

#### Returns

`Date`

#### Overrides

Election.startDate

#### Defined in

[types/election/published.ts:159](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L159)

___

### status

• `get` **status**(): [`ElectionStatus`](../enums/ElectionStatus.md)

#### Returns

[`ElectionStatus`](../enums/ElectionStatus.md)

#### Defined in

[types/election/published.ts:195](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L195)

___

### streamUri

• `get` **streamUri**(): `string`

#### Returns

`string`

#### Overrides

Election.streamUri

#### Defined in

[types/election/published.ts:155](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L155)

___

### temporarySecretIdentity

• `get` **temporarySecretIdentity**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Election.temporarySecretIdentity

#### Defined in

[types/election/election.ts:258](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/election.ts#L258)

___

### title

• `get` **title**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Overrides

Election.title

#### Defined in

[types/election/published.ts:143](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L143)

___

### voteCount

• `get` **voteCount**(): `number`

#### Returns

`number`

#### Defined in

[types/election/published.ts:199](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L199)

___

### voteType

• `get` **voteType**(): [`IVoteType`](../interfaces/IVoteType.md)

#### Returns

[`IVoteType`](../interfaces/IVoteType.md)

#### Overrides

Election.voteType

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

[Election](Election.md).[get](Election.md#get)

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

[Election](Election.md).[from](Election.md#from)

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

#### Defined in

[types/election/published.ts:104](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/election/published.ts#L104)
