[@vocdoni/sdk](/sdk) / [Exports](../modules) / IPublishedElectionParameters

# Interface: IPublishedElectionParameters

Define election parameters.

## Hierarchy

- [`IElectionParameters`](IElectionParameters)

  ↳ **`IPublishedElectionParameters`**

## Table of contents

### Properties

- [addSDKVersion](IPublishedElectionParameters#addsdkversion)
- [census](IPublishedElectionParameters#census)
- [chainId](IPublishedElectionParameters#chainid)
- [creationTime](IPublishedElectionParameters#creationtime)
- [description](IPublishedElectionParameters#description)
- [electionType](IPublishedElectionParameters#electiontype)
- [endDate](IPublishedElectionParameters#enddate)
- [finalResults](IPublishedElectionParameters#finalresults)
- [fromArchive](IPublishedElectionParameters#fromarchive)
- [header](IPublishedElectionParameters#header)
- [id](IPublishedElectionParameters#id)
- [manuallyEnded](IPublishedElectionParameters#manuallyended)
- [maxCensusSize](IPublishedElectionParameters#maxcensussize)
- [meta](IPublishedElectionParameters#meta)
- [metadataURL](IPublishedElectionParameters#metadataurl)
- [organizationId](IPublishedElectionParameters#organizationid)
- [questions](IPublishedElectionParameters#questions)
- [raw](IPublishedElectionParameters#raw)
- [results](IPublishedElectionParameters#results)
- [resultsType](IPublishedElectionParameters#resultstype)
- [startDate](IPublishedElectionParameters#startdate)
- [status](IPublishedElectionParameters#status)
- [streamUri](IPublishedElectionParameters#streamuri)
- [temporarySecretIdentity](IPublishedElectionParameters#temporarysecretidentity)
- [title](IPublishedElectionParameters#title)
- [voteCount](IPublishedElectionParameters#votecount)
- [voteType](IPublishedElectionParameters#votetype)

## Properties

### addSDKVersion

• `Optional` **addSDKVersion**: `boolean`

Used to add the SDK version to the election metadata

#### Inherited from

[IElectionParameters](IElectionParameters.md).[addSDKVersion](IElectionParameters#addsdkversion)

#### Defined in

[types/election/election.ts:155](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/election.ts#L155)

___

### census

• **census**: [`Census`](../classes/Census)

#### Inherited from

[IElectionParameters](IElectionParameters.md).[census](IElectionParameters#census)

#### Defined in

[types/election/election.ts:129](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/election.ts#L129)

___

### chainId

• **chainId**: `string`

#### Defined in

[types/election/published.ts:35](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/published.ts#L35)

___

### creationTime

• **creationTime**: `string`

#### Defined in

[types/election/published.ts:36](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/published.ts#L36)

___

### description

• `Optional` **description**: `string` \| `MultiLanguage`\<`string`\>

Election description

#### Inherited from

[IElectionParameters](IElectionParameters.md).[description](IElectionParameters#description)

#### Defined in

[types/election/election.ts:114](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/election.ts#L114)

___

### electionType

• `Optional` **electionType**: [`IElectionType`](IElectionType)

#### Inherited from

[IElectionParameters](IElectionParameters.md).[electionType](IElectionParameters#electiontype)

#### Defined in

[types/election/election.ts:131](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/election.ts#L131)

___

### endDate

• **endDate**: `string` \| `number` \| `Date`

#### Inherited from

[IElectionParameters](IElectionParameters.md).[endDate](IElectionParameters#enddate)

#### Defined in

[types/election/election.ts:128](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/election.ts#L128)

___

### finalResults

• **finalResults**: `boolean`

#### Defined in

[types/election/published.ts:31](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/published.ts#L31)

___

### fromArchive

• **fromArchive**: `boolean`

#### Defined in

[types/election/published.ts:34](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/published.ts#L34)

___

### header

• `Optional` **header**: `string`

Election header image url.

#### Inherited from

[IElectionParameters](IElectionParameters.md).[header](IElectionParameters#header)

#### Defined in

[types/election/election.ts:118](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/election.ts#L118)

___

### id

• **id**: `string`

#### Defined in

[types/election/published.ts:27](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/published.ts#L27)

___

### manuallyEnded

• **manuallyEnded**: `boolean`

#### Defined in

[types/election/published.ts:33](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/published.ts#L33)

___

### maxCensusSize

• `Optional` **maxCensusSize**: `number`

Is used to limit the number of votes that can be registered for an election. This feature helps to prevent any
potential overflow of the blockchain when the number of votes goes beyond the maximum limit.

In order to create an election, the creator is required to set the MaxCensusSize parameter to a proper value.
Typically, this value should be equal to the size of the census. If the MaxCensusSize parameter is set to 0, an
error will occur and the election cannot be created.

If the number of votes exceeds this limit, will throw `Max census size for the election is greater than allowed
size` error.

#### Inherited from

[IElectionParameters](IElectionParameters.md).[maxCensusSize](IElectionParameters#maxcensussize)

#### Defined in

[types/election/election.ts:145](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/election.ts#L145)

___

### meta

• `Optional` **meta**: `any`

Metadata (anything added by the election creator)

#### Inherited from

[IElectionParameters](IElectionParameters.md).[meta](IElectionParameters#meta)

#### Defined in

[types/election/election.ts:126](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/election.ts#L126)

___

### metadataURL

• **metadataURL**: `string`

#### Defined in

[types/election/published.ts:37](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/published.ts#L37)

___

### organizationId

• **organizationId**: `string`

#### Defined in

[types/election/published.ts:28](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/published.ts#L28)

___

### questions

• `Optional` **questions**: [`IQuestion`](IQuestion)[]

#### Inherited from

[IElectionParameters](IElectionParameters.md).[questions](IElectionParameters#questions)

#### Defined in

[types/election/election.ts:132](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/election.ts#L132)

___

### raw

• **raw**: `object`

#### Defined in

[types/election/published.ts:39](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/published.ts#L39)

___

### results

• **results**: `string`[][]

#### Defined in

[types/election/published.ts:32](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/published.ts#L32)

___

### resultsType

• **resultsType**: [`ElectionResultsType`](../modules#electionresultstype)

#### Defined in

[types/election/published.ts:38](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/published.ts#L38)

___

### startDate

• `Optional` **startDate**: `string` \| `number` \| `Date`

#### Inherited from

[IElectionParameters](IElectionParameters.md).[startDate](IElectionParameters#startdate)

#### Defined in

[types/election/election.ts:127](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/election.ts#L127)

___

### status

• **status**: [`AllElectionStatus`](../modules#allelectionstatus)

#### Defined in

[types/election/published.ts:29](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/published.ts#L29)

___

### streamUri

• `Optional` **streamUri**: `string`

Election stream Uri (ex: a video url)

#### Inherited from

[IElectionParameters](IElectionParameters.md).[streamUri](IElectionParameters#streamuri)

#### Defined in

[types/election/election.ts:122](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/election.ts#L122)

___

### temporarySecretIdentity

• `Optional` **temporarySecretIdentity**: `boolean`

Is used to remove the secret identities of the voters once the process is done.

#### Inherited from

[IElectionParameters](IElectionParameters.md).[temporarySecretIdentity](IElectionParameters#temporarysecretidentity)

#### Defined in

[types/election/election.ts:150](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/election.ts#L150)

___

### title

• **title**: `string` \| `MultiLanguage`\<`string`\>

Election title

#### Inherited from

[IElectionParameters](IElectionParameters.md).[title](IElectionParameters#title)

#### Defined in

[types/election/election.ts:110](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/election.ts#L110)

___

### voteCount

• **voteCount**: `number`

#### Defined in

[types/election/published.ts:30](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/published.ts#L30)

___

### voteType

• `Optional` **voteType**: [`IVoteType`](IVoteType)

#### Inherited from

[IElectionParameters](IElectionParameters.md).[voteType](IElectionParameters#votetype)

#### Defined in

[types/election/election.ts:130](https://github.com/vocdoni/vocdoni-sdk/blob/9e24a20/src/types/election/election.ts#L130)
