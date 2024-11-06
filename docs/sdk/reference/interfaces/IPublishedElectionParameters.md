[@vocdoni/sdk](/sdk) / IPublishedElectionParameters

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

[src/types/election/election.ts:164](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L164)

___

### census

• **census**: [`Census`](../classes/Census)

#### Inherited from

[IElectionParameters](IElectionParameters.md).[census](IElectionParameters#census)

#### Defined in

[src/types/election/election.ts:138](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L138)

___

### chainId

• **chainId**: `string`

#### Defined in

[src/types/election/published.ts:35](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L35)

___

### creationTime

• **creationTime**: `string`

#### Defined in

[src/types/election/published.ts:36](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L36)

___

### description

• `Optional` **description**: `string` \| `MultiLanguage`\<`string`\>

Election description

#### Inherited from

[IElectionParameters](IElectionParameters.md).[description](IElectionParameters#description)

#### Defined in

[src/types/election/election.ts:123](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L123)

___

### electionType

• `Optional` **electionType**: [`IElectionType`](IElectionType)

#### Inherited from

[IElectionParameters](IElectionParameters.md).[electionType](IElectionParameters#electiontype)

#### Defined in

[src/types/election/election.ts:140](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L140)

___

### endDate

• **endDate**: `string` \| `number` \| `Date`

#### Inherited from

[IElectionParameters](IElectionParameters.md).[endDate](IElectionParameters#enddate)

#### Defined in

[src/types/election/election.ts:137](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L137)

___

### finalResults

• **finalResults**: `boolean`

#### Defined in

[src/types/election/published.ts:32](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L32)

___

### header

• `Optional` **header**: `string`

Election header image url.

#### Inherited from

[IElectionParameters](IElectionParameters.md).[header](IElectionParameters#header)

#### Defined in

[src/types/election/election.ts:127](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L127)

___

### id

• **id**: `string`

#### Defined in

[src/types/election/published.ts:28](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L28)

___

### manuallyEnded

• **manuallyEnded**: `boolean`

#### Defined in

[src/types/election/published.ts:34](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L34)

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

[src/types/election/election.ts:154](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L154)

___

### meta

• `Optional` **meta**: `any`

Metadata (anything added by the election creator)

#### Inherited from

[IElectionParameters](IElectionParameters.md).[meta](IElectionParameters#meta)

#### Defined in

[src/types/election/election.ts:135](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L135)

___

### metadataURL

• **metadataURL**: `string`

#### Defined in

[src/types/election/published.ts:37](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L37)

___

### organizationId

• **organizationId**: `string`

#### Defined in

[src/types/election/published.ts:29](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L29)

___

### questions

• `Optional` **questions**: [`IQuestion`](IQuestion)[]

#### Inherited from

[IElectionParameters](IElectionParameters.md).[questions](IElectionParameters#questions)

#### Defined in

[src/types/election/election.ts:141](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L141)

___

### raw

• **raw**: `object`

#### Defined in

[src/types/election/published.ts:39](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L39)

___

### results

• **results**: `string`[][]

#### Defined in

[src/types/election/published.ts:33](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L33)

___

### resultsType

• **resultsType**: [`ElectionResultsType`](../sdk-reference#electionresultstype)

#### Defined in

[src/types/election/published.ts:38](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L38)

___

### startDate

• `Optional` **startDate**: `string` \| `number` \| `Date`

#### Inherited from

[IElectionParameters](IElectionParameters.md).[startDate](IElectionParameters#startdate)

#### Defined in

[src/types/election/election.ts:136](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L136)

___

### status

• **status**: [`AllElectionStatus`](../sdk-reference#allelectionstatus)

#### Defined in

[src/types/election/published.ts:30](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L30)

___

### streamUri

• `Optional` **streamUri**: `string`

Election stream Uri (ex: a video url)

#### Inherited from

[IElectionParameters](IElectionParameters.md).[streamUri](IElectionParameters#streamuri)

#### Defined in

[src/types/election/election.ts:131](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L131)

___

### temporarySecretIdentity

• `Optional` **temporarySecretIdentity**: `boolean`

Is used to remove the secret identities of the voters once the process is done.

#### Inherited from

[IElectionParameters](IElectionParameters.md).[temporarySecretIdentity](IElectionParameters#temporarysecretidentity)

#### Defined in

[src/types/election/election.ts:159](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L159)

___

### title

• **title**: `string` \| `MultiLanguage`\<`string`\>

Election title

#### Inherited from

[IElectionParameters](IElectionParameters.md).[title](IElectionParameters#title)

#### Defined in

[src/types/election/election.ts:119](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L119)

___

### voteCount

• **voteCount**: `number`

#### Defined in

[src/types/election/published.ts:31](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/published.ts#L31)

___

### voteType

• `Optional` **voteType**: [`IVoteType`](IVoteType)

#### Inherited from

[IElectionParameters](IElectionParameters.md).[voteType](IElectionParameters#votetype)

#### Defined in

[src/types/election/election.ts:139](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L139)
