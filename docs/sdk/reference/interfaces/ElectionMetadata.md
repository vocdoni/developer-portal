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

[src/types/metadata/election.ts:139](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/metadata/election.ts#L139)

___

### media

• **media**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `header?` | `string` |
| `streamUri?` | `string` |

#### Defined in

[src/types/metadata/election.ts:140](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/metadata/election.ts#L140)

___

### meta

• `Optional` **meta**: `Object`

Arbitrary key/value data that specific applications can use for their own needs

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[src/types/metadata/election.ts:145](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/metadata/election.ts#L145)

___

### questions

• **questions**: [`IQuestion`](IQuestion)[]

#### Defined in

[src/types/metadata/election.ts:148](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/metadata/election.ts#L148)

___

### title

• **title**: `MultiLanguage`\<`string`\>

#### Defined in

[src/types/metadata/election.ts:138](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/metadata/election.ts#L138)

___

### type

• **type**: [`ElectionResultsType`](../sdk-reference#electionresultstype)

#### Defined in

[src/types/metadata/election.ts:149](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/metadata/election.ts#L149)

___

### version

• **version**: `ProtocolVersion`

#### Defined in

[src/types/metadata/election.ts:137](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/types/metadata/election.ts#L137)
