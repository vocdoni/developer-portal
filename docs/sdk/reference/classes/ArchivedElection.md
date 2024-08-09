[@vocdoni/sdk](/sdk) / ArchivedElection

# Class: ArchivedElection

Represents a published election

## Hierarchy

- [`PublishedElection`](PublishedElection)

  ↳ **`ArchivedElection`**

## Table of contents

### Accessors

- [addSDKVersion](ArchivedElection#addsdkversion)
- [census](ArchivedElection#census)
- [chainId](ArchivedElection#chainid)
- [creationTime](ArchivedElection#creationtime)
- [description](ArchivedElection#description)
- [electionType](ArchivedElection#electiontype)
- [endDate](ArchivedElection#enddate)
- [finalResults](ArchivedElection#finalresults)
- [fromArchive](ArchivedElection#fromarchive)
- [header](ArchivedElection#header)
- [id](ArchivedElection#id)
- [isValid](ArchivedElection#isvalid)
- [manuallyEnded](ArchivedElection#manuallyended)
- [maxCensusSize](ArchivedElection#maxcensussize)
- [meta](ArchivedElection#meta)
- [metadataURL](ArchivedElection#metadataurl)
- [organizationId](ArchivedElection#organizationid)
- [questions](ArchivedElection#questions)
- [raw](ArchivedElection#raw)
- [results](ArchivedElection#results)
- [resultsType](ArchivedElection#resultstype)
- [startDate](ArchivedElection#startdate)
- [status](ArchivedElection#status)
- [streamUri](ArchivedElection#streamuri)
- [temporarySecretIdentity](ArchivedElection#temporarysecretidentity)
- [title](ArchivedElection#title)
- [voteCount](ArchivedElection#votecount)
- [voteType](ArchivedElection#votetype)

### Constructors

- [constructor](ArchivedElection#constructor)

### Methods

- [checkVote](ArchivedElection#checkvote)
- [get](ArchivedElection#get)
- [build](ArchivedElection#build)
- [checkVote](ArchivedElection.md#checkvote-1)
- [from](ArchivedElection#from)
- [getStatus](ArchivedElection#getstatus)

## Accessors

### addSDKVersion

• `get` **addSDKVersion**(): `boolean`

#### Returns

`boolean`

#### Inherited from

PublishedElection.addSDKVersion

#### Defined in

[src/types/election/election.ts:275](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/election.ts#L275)

___

### census

• `get` **census**(): `ArchivedCensus`

#### Returns

`ArchivedCensus`

#### Overrides

PublishedElection.census

#### Defined in

[src/types/election/archived.ts:17](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/archived.ts#L17)

___

### chainId

• `get` **chainId**(): `string`

#### Returns

`string`

#### Inherited from

PublishedElection.chainId

#### Defined in

[src/types/election/published.ts:219](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L219)

___

### creationTime

• `get` **creationTime**(): `Date`

#### Returns

`Date`

#### Inherited from

PublishedElection.creationTime

#### Defined in

[src/types/election/published.ts:223](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L223)

___

### description

• `get` **description**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Inherited from

PublishedElection.description

#### Defined in

[src/types/election/published.ts:147](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L147)

___

### electionType

• `get` **electionType**(): [`IElectionType`](../interfaces/IElectionType)

#### Returns

[`IElectionType`](../interfaces/IElectionType)

#### Inherited from

PublishedElection.electionType

#### Defined in

[src/types/election/published.ts:167](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L167)

___

### endDate

• `get` **endDate**(): `Date`

#### Returns

`Date`

#### Inherited from

PublishedElection.endDate

#### Defined in

[src/types/election/published.ts:163](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L163)

___

### finalResults

• `get` **finalResults**(): `boolean`

#### Returns

`boolean`

#### Inherited from

PublishedElection.finalResults

#### Defined in

[src/types/election/published.ts:203](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L203)

___

### fromArchive

• `get` **fromArchive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

PublishedElection.fromArchive

#### Defined in

[src/types/election/published.ts:215](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L215)

___

### header

• `get` **header**(): `string`

#### Returns

`string`

#### Inherited from

PublishedElection.header

#### Defined in

[src/types/election/published.ts:151](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L151)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Inherited from

PublishedElection.id

#### Defined in

[src/types/election/published.ts:187](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L187)

___

### isValid

• `get` **isValid**(): `boolean`

#### Returns

`boolean`

#### Inherited from

PublishedElection.isValid

#### Defined in

[src/types/election/published.ts:239](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L239)

___

### manuallyEnded

• `get` **manuallyEnded**(): `boolean`

#### Returns

`boolean`

#### Inherited from

PublishedElection.manuallyEnded

#### Defined in

[src/types/election/published.ts:211](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L211)

___

### maxCensusSize

• `get` **maxCensusSize**(): `number`

#### Returns

`number`

#### Inherited from

PublishedElection.maxCensusSize

#### Defined in

[src/types/election/published.ts:183](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L183)

___

### meta

• `get` **meta**(): `any`

#### Returns

`any`

#### Inherited from

PublishedElection.meta

#### Defined in

[src/types/election/election.ts:239](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/election.ts#L239)

___

### metadataURL

• `get` **metadataURL**(): `string`

#### Returns

`string`

#### Inherited from

PublishedElection.metadataURL

#### Defined in

[src/types/election/published.ts:227](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L227)

___

### organizationId

• `get` **organizationId**(): `string`

#### Returns

`string`

#### Inherited from

PublishedElection.organizationId

#### Defined in

[src/types/election/published.ts:191](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L191)

___

### questions

• `get` **questions**(): [`IQuestion`](../interfaces/IQuestion)[]

#### Returns

[`IQuestion`](../interfaces/IQuestion)[]

#### Inherited from

PublishedElection.questions

#### Defined in

[src/types/election/published.ts:175](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L175)

___

### raw

• `get` **raw**(): `object`

#### Returns

`object`

#### Inherited from

PublishedElection.raw

#### Defined in

[src/types/election/published.ts:235](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L235)

___

### results

• `get` **results**(): `string`[][]

#### Returns

`string`[][]

#### Inherited from

PublishedElection.results

#### Defined in

[src/types/election/published.ts:207](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L207)

___

### resultsType

• `get` **resultsType**(): [`ElectionResultsType`](../sdk-reference#electionresultstype)

#### Returns

[`ElectionResultsType`](../sdk-reference#electionresultstype)

#### Inherited from

PublishedElection.resultsType

#### Defined in

[src/types/election/published.ts:231](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L231)

___

### startDate

• `get` **startDate**(): `Date`

#### Returns

`Date`

#### Inherited from

PublishedElection.startDate

#### Defined in

[src/types/election/published.ts:159](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L159)

___

### status

• `get` **status**(): [`ElectionStatus`](../enums/ElectionStatus)

#### Returns

[`ElectionStatus`](../enums/ElectionStatus)

#### Inherited from

PublishedElection.status

#### Defined in

[src/types/election/published.ts:195](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L195)

___

### streamUri

• `get` **streamUri**(): `string`

#### Returns

`string`

#### Inherited from

PublishedElection.streamUri

#### Defined in

[src/types/election/published.ts:155](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L155)

___

### temporarySecretIdentity

• `get` **temporarySecretIdentity**(): `boolean`

#### Returns

`boolean`

#### Inherited from

PublishedElection.temporarySecretIdentity

#### Defined in

[src/types/election/election.ts:271](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/election.ts#L271)

___

### title

• `get` **title**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Inherited from

PublishedElection.title

#### Defined in

[src/types/election/published.ts:143](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L143)

___

### voteCount

• `get` **voteCount**(): `number`

#### Returns

`number`

#### Inherited from

PublishedElection.voteCount

#### Defined in

[src/types/election/published.ts:199](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L199)

___

### voteType

• `get` **voteType**(): [`IVoteType`](../interfaces/IVoteType)

#### Returns

[`IVoteType`](../interfaces/IVoteType)

#### Inherited from

PublishedElection.voteType

#### Defined in

[src/types/election/published.ts:171](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L171)

## Constructors

### constructor

• **new ArchivedElection**(`params`): [`ArchivedElection`](ArchivedElection)

Constructs an archived election

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IPublishedElectionParameters`](../interfaces/IPublishedElectionParameters) | Election parameters |

#### Returns

[`ArchivedElection`](ArchivedElection)

#### Overrides

[PublishedElection](PublishedElection.md).[constructor](PublishedElection#constructor)

#### Defined in

[src/types/election/archived.ts:13](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/archived.ts#L13)

## Methods

### checkVote

▸ **checkVote**(`vote`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vote` | [`Vote`](Vote) |

#### Returns

`void`

#### Inherited from

[PublishedElection](PublishedElection.md).[checkVote](PublishedElection#checkvote)

#### Defined in

[src/types/election/published.ts:113](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L113)

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

[PublishedElection](PublishedElection.md).[get](PublishedElection#get)

#### Defined in

[src/types/election/election.ts:279](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/election.ts#L279)

___

### build

▸ **build**(`params`): [`PublishedElection`](PublishedElection)

Returns a published election object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IPublishedElectionParameters`](../interfaces/IPublishedElectionParameters) | Published election parameters |

#### Returns

[`PublishedElection`](PublishedElection)

#### Inherited from

[PublishedElection](PublishedElection.md).[build](PublishedElection#build)

#### Defined in

[src/types/election/published.ts:100](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L100)

___

### checkVote

▸ **checkVote**(`vote`, `voteType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vote` | [`Vote`](Vote) |
| `voteType` | [`IVoteType`](../interfaces/IVoteType) |

#### Returns

`void`

#### Inherited from

[PublishedElection](PublishedElection).[checkVote](PublishedElection.md#checkvote-1)

#### Defined in

[src/types/election/published.ts:127](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L127)

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

#### Inherited from

[PublishedElection](PublishedElection.md).[from](PublishedElection#from)

#### Defined in

[src/types/election/election.ts:219](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/election.ts#L219)

___

### getStatus

▸ **getStatus**(`status`, `startDate`): [`ElectionStatus`](../enums/ElectionStatus)

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`AllElectionStatus`](../sdk-reference#allelectionstatus) |
| `startDate` | `Date` |

#### Returns

[`ElectionStatus`](../enums/ElectionStatus)

#### Inherited from

[PublishedElection](PublishedElection.md).[getStatus](PublishedElection#getstatus)

#### Defined in

[src/types/election/published.ts:104](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/types/election/published.ts#L104)
