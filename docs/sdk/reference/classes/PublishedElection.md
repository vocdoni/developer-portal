[@vocdoni/sdk](/sdk) / PublishedElection

# Class: PublishedElection

Represents a published election

## Hierarchy

- [`Election`](Election)

  ↳ **`PublishedElection`**

## Table of contents

### Accessors

- [addSDKVersion](PublishedElection#addsdkversion)
- [census](PublishedElection#census)
- [chainId](PublishedElection#chainid)
- [creationTime](PublishedElection#creationtime)
- [description](PublishedElection#description)
- [electionType](PublishedElection#electiontype)
- [endDate](PublishedElection#enddate)
- [finalResults](PublishedElection#finalresults)
- [header](PublishedElection#header)
- [id](PublishedElection#id)
- [isValid](PublishedElection#isvalid)
- [manuallyEnded](PublishedElection#manuallyended)
- [maxCensusSize](PublishedElection#maxcensussize)
- [meta](PublishedElection#meta)
- [metadataURL](PublishedElection#metadataurl)
- [organizationId](PublishedElection#organizationid)
- [questions](PublishedElection#questions)
- [raw](PublishedElection#raw)
- [results](PublishedElection#results)
- [resultsType](PublishedElection#resultstype)
- [startDate](PublishedElection#startdate)
- [status](PublishedElection#status)
- [streamUri](PublishedElection#streamuri)
- [temporarySecretIdentity](PublishedElection#temporarysecretidentity)
- [title](PublishedElection#title)
- [voteCount](PublishedElection#votecount)
- [voteType](PublishedElection#votetype)

### Constructors

- [constructor](PublishedElection#constructor)

### Methods

- [checkVote](PublishedElection#checkvote)
- [get](PublishedElection#get)
- [build](PublishedElection#build)
- [checkVote](PublishedElection.md#checkvote-1)
- [from](PublishedElection#from)
- [getStatus](PublishedElection#getstatus)

## Accessors

### addSDKVersion

• `get` **addSDKVersion**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Election.addSDKVersion

#### Defined in

[src/types/election/election.ts:271](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L271)

___

### census

• `get` **census**(): [`PublishedCensus`](PublishedCensus)

#### Returns

[`PublishedCensus`](PublishedCensus)

#### Overrides

Election.census

#### Defined in

[src/types/election/published.ts:179](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L179)

___

### chainId

• `get` **chainId**(): `string`

#### Returns

`string`

#### Defined in

[src/types/election/published.ts:215](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L215)

___

### creationTime

• `get` **creationTime**(): `Date`

#### Returns

`Date`

#### Defined in

[src/types/election/published.ts:219](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L219)

___

### description

• `get` **description**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Overrides

Election.description

#### Defined in

[src/types/election/published.ts:147](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L147)

___

### electionType

• `get` **electionType**(): [`IElectionType`](../interfaces/IElectionType)

#### Returns

[`IElectionType`](../interfaces/IElectionType)

#### Overrides

Election.electionType

#### Defined in

[src/types/election/published.ts:167](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L167)

___

### endDate

• `get` **endDate**(): `Date`

#### Returns

`Date`

#### Overrides

Election.endDate

#### Defined in

[src/types/election/published.ts:163](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L163)

___

### finalResults

• `get` **finalResults**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/types/election/published.ts:203](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L203)

___

### header

• `get` **header**(): `string`

#### Returns

`string`

#### Overrides

Election.header

#### Defined in

[src/types/election/published.ts:151](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L151)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[src/types/election/published.ts:187](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L187)

___

### isValid

• `get` **isValid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/types/election/published.ts:235](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L235)

___

### manuallyEnded

• `get` **manuallyEnded**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/types/election/published.ts:211](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L211)

___

### maxCensusSize

• `get` **maxCensusSize**(): `number`

#### Returns

`number`

#### Overrides

Election.maxCensusSize

#### Defined in

[src/types/election/published.ts:183](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L183)

___

### meta

• `get` **meta**(): `any`

#### Returns

`any`

#### Inherited from

Election.meta

#### Defined in

[src/types/election/election.ts:235](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L235)

___

### metadataURL

• `get` **metadataURL**(): `string`

#### Returns

`string`

#### Defined in

[src/types/election/published.ts:223](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L223)

___

### organizationId

• `get` **organizationId**(): `string`

#### Returns

`string`

#### Defined in

[src/types/election/published.ts:191](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L191)

___

### questions

• `get` **questions**(): [`IQuestion`](../interfaces/IQuestion)[]

#### Returns

[`IQuestion`](../interfaces/IQuestion)[]

#### Overrides

Election.questions

#### Defined in

[src/types/election/published.ts:175](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L175)

___

### raw

• `get` **raw**(): `object`

#### Returns

`object`

#### Defined in

[src/types/election/published.ts:231](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L231)

___

### results

• `get` **results**(): `string`[][]

#### Returns

`string`[][]

#### Defined in

[src/types/election/published.ts:207](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L207)

___

### resultsType

• `get` **resultsType**(): [`ElectionResultsType`](../sdk-reference#electionresultstype)

#### Returns

[`ElectionResultsType`](../sdk-reference#electionresultstype)

#### Defined in

[src/types/election/published.ts:227](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L227)

___

### startDate

• `get` **startDate**(): `Date`

#### Returns

`Date`

#### Overrides

Election.startDate

#### Defined in

[src/types/election/published.ts:159](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L159)

___

### status

• `get` **status**(): [`ElectionStatus`](../enums/ElectionStatus)

#### Returns

[`ElectionStatus`](../enums/ElectionStatus)

#### Defined in

[src/types/election/published.ts:195](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L195)

___

### streamUri

• `get` **streamUri**(): `string`

#### Returns

`string`

#### Overrides

Election.streamUri

#### Defined in

[src/types/election/published.ts:155](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L155)

___

### temporarySecretIdentity

• `get` **temporarySecretIdentity**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Election.temporarySecretIdentity

#### Defined in

[src/types/election/election.ts:267](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L267)

___

### title

• `get` **title**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Overrides

Election.title

#### Defined in

[src/types/election/published.ts:143](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L143)

___

### voteCount

• `get` **voteCount**(): `number`

#### Returns

`number`

#### Defined in

[src/types/election/published.ts:199](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L199)

___

### voteType

• `get` **voteType**(): [`IVoteType`](../interfaces/IVoteType)

#### Returns

[`IVoteType`](../interfaces/IVoteType)

#### Overrides

Election.voteType

#### Defined in

[src/types/election/published.ts:171](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L171)

## Constructors

### constructor

• **new PublishedElection**(`params`): [`PublishedElection`](PublishedElection)

Constructs a published election

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IPublishedElectionParameters`](../interfaces/IPublishedElectionParameters) | Election parameters |

#### Returns

[`PublishedElection`](PublishedElection)

#### Overrides

Election.constructor

#### Defined in

[src/types/election/published.ts:64](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L64)

## Methods

### checkVote

▸ **checkVote**(`vote`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vote` | [`Vote`](Vote) |

#### Returns

`void`

#### Defined in

[src/types/election/published.ts:111](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L111)

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

[Election](Election.md).[get](Election#get)

#### Defined in

[src/types/election/election.ts:275](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L275)

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

#### Defined in

[src/types/election/published.ts:98](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L98)

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

#### Defined in

[src/types/election/published.ts:127](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L127)

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

[Election](Election.md).[from](Election#from)

#### Defined in

[src/types/election/election.ts:215](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L215)

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

#### Defined in

[src/types/election/published.ts:102](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L102)
