[@vocdoni/sdk](/sdk) / ElectionMetadata

# Interface: ElectionMetadata

JSON metadata. Intended to be stored on IPFS or similar.
More info: https://vocdoni.io/docs/#/architecture/components/process?id=process-metadata-json

## Table of contents

### Properties

- [description](ElectionMetadata#description)
- [media](ElectionMetadata#media)
- [meta](ElectionMetadata#meta)
- [questions](ElectionMetadata#questions)
- [title](ElectionMetadata#title)
- [type](ElectionMetadata#type)
- [version](ElectionMetadata#version)

## Properties

### description

• **description**: `MultiLanguage`\<`string`\>

#### Defined in

[src/types/metadata/election.ts:153](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/metadata/election.ts#L153)

___

### media

• **media**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `header?` | `string` |
| `streamUri?` | `string` |

#### Defined in

[src/types/metadata/election.ts:154](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/metadata/election.ts#L154)

___

### meta

• `Optional` **meta**: `Object`

Arbitrary key/value data that specific applications can use for their own needs

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[src/types/metadata/election.ts:159](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/metadata/election.ts#L159)

___

### questions

• **questions**: [`IQuestion`](IQuestion)[]

#### Defined in

[src/types/metadata/election.ts:162](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/metadata/election.ts#L162)

___

### title

• **title**: `MultiLanguage`\<`string`\>

#### Defined in

[src/types/metadata/election.ts:152](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/metadata/election.ts#L152)

___

### type

• **type**: [`ElectionResultsType`](../sdk-reference#electionresultstype)

#### Defined in

[src/types/metadata/election.ts:163](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/metadata/election.ts#L163)

___

### version

• **version**: `ProtocolVersion`

#### Defined in

[src/types/metadata/election.ts:151](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/metadata/election.ts#L151)
