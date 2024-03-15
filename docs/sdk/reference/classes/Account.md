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

[types/account.ts:35](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L35)

## Properties

### \_avatar

• `Private` **\_avatar**: `string`

#### Defined in

[types/account.ts:25](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L25)

___

### \_description

• `Private` **\_description**: `MultiLanguage`\<`string`\>

#### Defined in

[types/account.ts:22](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L22)

___

### \_feed

• `Private` **\_feed**: `MultiLanguage`\<`string`\>

#### Defined in

[types/account.ts:23](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L23)

___

### \_header

• `Private` **\_header**: `string`

#### Defined in

[types/account.ts:24](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L24)

___

### \_languages

• `Private` **\_languages**: `string`[]

#### Defined in

[types/account.ts:20](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L20)

___

### \_logo

• `Private` **\_logo**: `string`

#### Defined in

[types/account.ts:26](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L26)

___

### \_meta

• `Private` **\_meta**: \{ `key`: `string` ; `value`: `any`  }[]

#### Defined in

[types/account.ts:27](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L27)

___

### \_name

• `Private` **\_name**: `MultiLanguage`\<`string`\>

#### Defined in

[types/account.ts:21](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L21)

## Accessors

### avatar

• `get` **avatar**(): `string`

#### Returns

`string`

#### Defined in

[types/account.ts:110](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L110)

• `set` **avatar**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[types/account.ts:114](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L114)

___

### description

• `get` **description**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Defined in

[types/account.ts:94](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L94)

• `set` **description**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MultiLanguage`\<`string`\> |

#### Returns

`void`

#### Defined in

[types/account.ts:98](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L98)

___

### feed

• `get` **feed**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Defined in

[types/account.ts:126](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L126)

• `set` **feed**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MultiLanguage`\<`string`\> |

#### Returns

`void`

#### Defined in

[types/account.ts:130](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L130)

___

### header

• `get` **header**(): `string`

#### Returns

`string`

#### Defined in

[types/account.ts:102](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L102)

• `set` **header**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[types/account.ts:106](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L106)

___

### languages

• `get` **languages**(): `string`[]

#### Returns

`string`[]

#### Defined in

[types/account.ts:142](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L142)

• `set` **languages**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string`[] |

#### Returns

`void`

#### Defined in

[types/account.ts:146](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L146)

___

### logo

• `get` **logo**(): `string`

#### Returns

`string`

#### Defined in

[types/account.ts:118](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L118)

• `set` **logo**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[types/account.ts:122](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L122)

___

### meta

• `get` **meta**(): \{ `key`: `string` ; `value`: `any`  }[]

#### Returns

\{ `key`: `string` ; `value`: `any`  }[]

#### Defined in

[types/account.ts:134](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L134)

• `set` **meta**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | \{ `key`: `string` ; `value`: `any`  }[] |

#### Returns

`void`

#### Defined in

[types/account.ts:138](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L138)

___

### name

• `get` **name**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Defined in

[types/account.ts:86](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L86)

• `set` **name**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MultiLanguage`\<`string`\> |

#### Returns

`void`

#### Defined in

[types/account.ts:90](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L90)

## Methods

### generateMetadata

▸ **generateMetadata**(): [`AccountMetadata`](../interfaces/AccountMetadata.md)

#### Returns

[`AccountMetadata`](../interfaces/AccountMetadata.md)

#### Defined in

[types/account.ts:67](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L67)

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

[types/account.ts:63](https://github.com/vocdoni/vocdoni-sdk/blob/2c8c18a/src/types/account.ts#L63)
