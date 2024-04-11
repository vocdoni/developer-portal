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

[types/metadata/election.ts:127](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/metadata/election.ts#L127)

___

### media

• **media**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `header?` | `string` |
| `streamUri?` | `string` |

#### Defined in

[types/metadata/election.ts:128](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/metadata/election.ts#L128)

___

### meta

• `Optional` **meta**: `Object`

Arbitrary key/value data that specific applications can use for their own needs

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[types/metadata/election.ts:133](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/metadata/election.ts#L133)

___

### questions

• **questions**: [`IQuestion`](IQuestion)[]

#### Defined in

[types/metadata/election.ts:136](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/metadata/election.ts#L136)

___

### title

• **title**: `MultiLanguage`\<`string`\>

#### Defined in

[types/metadata/election.ts:126](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/metadata/election.ts#L126)

___

### type

• **type**: [`ElectionResultsType`](../sdk-reference#electionresultstype)

#### Defined in

[types/metadata/election.ts:137](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/metadata/election.ts#L137)

___

### version

• **version**: `ProtocolVersion`

#### Defined in

[types/metadata/election.ts:125](https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/types/metadata/election.ts#L125)
