[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / Account

# Class: Account

Represents an account

## Table of contents

### Constructors

- [constructor](Account.md#constructor)

### Properties

- [\_avatar](Account.md#_avatar)
- [\_description](Account.md#_description)
- [\_feed](Account.md#_feed)
- [\_header](Account.md#_header)
- [\_languages](Account.md#_languages)
- [\_logo](Account.md#_logo)
- [\_meta](Account.md#_meta)
- [\_name](Account.md#_name)

### Accessors

- [avatar](Account.md#avatar)
- [description](Account.md#description)
- [feed](Account.md#feed)
- [header](Account.md#header)
- [languages](Account.md#languages)
- [logo](Account.md#logo)
- [meta](Account.md#meta)
- [name](Account.md#name)

### Methods

- [generateMetadata](Account.md#generatemetadata)
- [build](Account.md#build)

## Constructors

### constructor

• **new Account**(`params?`): [`Account`](Account.md)

Constructs an account

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | [`IAccount`](../interfaces/IAccount.md) | Account parameters |

#### Returns

[`Account`](Account.md)

#### Defined in

[types/account.ts:33](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L33)

## Properties

### \_avatar

• `Private` **\_avatar**: `string`

#### Defined in

[types/account.ts:24](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L24)

___

### \_description

• `Private` **\_description**: `MultiLanguage`\<`string`\>

#### Defined in

[types/account.ts:21](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L21)

___

### \_feed

• `Private` **\_feed**: `MultiLanguage`\<`string`\>

#### Defined in

[types/account.ts:22](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L22)

___

### \_header

• `Private` **\_header**: `string`

#### Defined in

[types/account.ts:23](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L23)

___

### \_languages

• `Private` **\_languages**: `string`[]

#### Defined in

[types/account.ts:19](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L19)

___

### \_logo

• `Private` **\_logo**: `string`

#### Defined in

[types/account.ts:25](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L25)

___

### \_meta

• `Private` **\_meta**: \{ `key`: `string` ; `value`: `any`  }[]

#### Defined in

[types/account.ts:26](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L26)

___

### \_name

• `Private` **\_name**: `MultiLanguage`\<`string`\>

#### Defined in

[types/account.ts:20](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L20)

## Accessors

### avatar

• `get` **avatar**(): `string`

#### Returns

`string`

#### Defined in

[types/account.ts:108](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L108)

• `set` **avatar**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[types/account.ts:112](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L112)

___

### description

• `get` **description**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Defined in

[types/account.ts:92](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L92)

• `set` **description**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MultiLanguage`\<`string`\> |

#### Returns

`void`

#### Defined in

[types/account.ts:96](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L96)

___

### feed

• `get` **feed**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Defined in

[types/account.ts:124](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L124)

• `set` **feed**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MultiLanguage`\<`string`\> |

#### Returns

`void`

#### Defined in

[types/account.ts:128](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L128)

___

### header

• `get` **header**(): `string`

#### Returns

`string`

#### Defined in

[types/account.ts:100](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L100)

• `set` **header**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[types/account.ts:104](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L104)

___

### languages

• `get` **languages**(): `string`[]

#### Returns

`string`[]

#### Defined in

[types/account.ts:140](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L140)

• `set` **languages**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string`[] |

#### Returns

`void`

#### Defined in

[types/account.ts:144](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L144)

___

### logo

• `get` **logo**(): `string`

#### Returns

`string`

#### Defined in

[types/account.ts:116](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L116)

• `set` **logo**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[types/account.ts:120](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L120)

___

### meta

• `get` **meta**(): \{ `key`: `string` ; `value`: `any`  }[]

#### Returns

\{ `key`: `string` ; `value`: `any`  }[]

#### Defined in

[types/account.ts:132](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L132)

• `set` **meta**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | \{ `key`: `string` ; `value`: `any`  }[] |

#### Returns

`void`

#### Defined in

[types/account.ts:136](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L136)

___

### name

• `get` **name**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Defined in

[types/account.ts:84](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L84)

• `set` **name**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MultiLanguage`\<`string`\> |

#### Returns

`void`

#### Defined in

[types/account.ts:88](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L88)

## Methods

### generateMetadata

▸ **generateMetadata**(): [`AccountMetadata`](../interfaces/AccountMetadata.md)

#### Returns

[`AccountMetadata`](../interfaces/AccountMetadata.md)

#### Defined in

[types/account.ts:65](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L65)

___

### build

▸ **build**(`params`): [`Account`](Account.md)

Returns an account object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IAccount`](../interfaces/IAccount.md) | Account parameters |

#### Returns

[`Account`](Account.md)

#### Defined in

[types/account.ts:61](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/account.ts#L61)
