[@vocdoni/sdk](/sdk) / [Exports](../modules) / AccountMetadata

# Interface: AccountMetadata

JSON metadata. Intended to be stored on IPFS or similar.
More info: https://vocdoni.io/docs/#/architecture/components/entity?id=meta

## Table of contents

### Properties

- [description](AccountMetadata#description)
- [languages](AccountMetadata#languages)
- [media](AccountMetadata#media)
- [meta](AccountMetadata#meta)
- [name](AccountMetadata#name)
- [newsFeed](AccountMetadata#newsfeed)
- [version](AccountMetadata#version)

## Properties

### description

• **description**: `MultiLanguage`\<`string`\>

#### Defined in

[types/metadata/account.ts:53](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/metadata/account.ts#L53)

___

### languages

• **languages**: `string`[]

#### Defined in

[types/metadata/account.ts:50](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/metadata/account.ts#L50)

___

### media

• **media**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `avatar` | `string` |
| `header` | `string` |
| `logo` | `string` |

#### Defined in

[types/metadata/account.ts:57](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/metadata/account.ts#L57)

___

### meta

• `Optional` **meta**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[types/metadata/account.ts:62](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/metadata/account.ts#L62)

___

### name

• **name**: `MultiLanguage`\<`string`\>

#### Defined in

[types/metadata/account.ts:52](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/metadata/account.ts#L52)

___

### newsFeed

• **newsFeed**: `MultiLanguage`\<`string`\>

#### Defined in

[types/metadata/account.ts:55](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/metadata/account.ts#L55)

___

### version

• **version**: ``"1.0"``

#### Defined in

[types/metadata/account.ts:49](https://github.com/vocdoni/vocdoni-sdk/blob/2244934/src/types/metadata/account.ts#L49)
