[@vocdoni/sdk](/sdk) / Account

# Class: Account

Represents an account

## Table of contents

### Accessors

- [avatar](Account#avatar)
- [description](Account#description)
- [feed](Account#feed)
- [header](Account#header)
- [languages](Account#languages)
- [logo](Account#logo)
- [meta](Account#meta)
- [name](Account#name)

### Constructors

- [constructor](Account#constructor)

### Methods

- [generateMetadata](Account#generatemetadata)
- [build](Account#build)

## Accessors

### avatar

• `get` **avatar**(): `string`

#### Returns

`string`

#### Defined in

[types/account.ts:108](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/account.ts#L108)

• `set` **avatar**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[types/account.ts:112](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/account.ts#L112)

___

### description

• `get` **description**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Defined in

[types/account.ts:92](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/account.ts#L92)

• `set` **description**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MultiLanguage`\<`string`\> |

#### Returns

`void`

#### Defined in

[types/account.ts:96](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/account.ts#L96)

___

### feed

• `get` **feed**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Defined in

[types/account.ts:124](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/account.ts#L124)

• `set` **feed**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MultiLanguage`\<`string`\> |

#### Returns

`void`

#### Defined in

[types/account.ts:128](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/account.ts#L128)

___

### header

• `get` **header**(): `string`

#### Returns

`string`

#### Defined in

[types/account.ts:100](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/account.ts#L100)

• `set` **header**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[types/account.ts:104](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/account.ts#L104)

___

### languages

• `get` **languages**(): `string`[]

#### Returns

`string`[]

#### Defined in

[types/account.ts:140](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/account.ts#L140)

• `set` **languages**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string`[] |

#### Returns

`void`

#### Defined in

[types/account.ts:144](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/account.ts#L144)

___

### logo

• `get` **logo**(): `string`

#### Returns

`string`

#### Defined in

[types/account.ts:116](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/account.ts#L116)

• `set` **logo**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[types/account.ts:120](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/account.ts#L120)

___

### meta

• `get` **meta**(): \{ `key`: `string` ; `value`: `any`  }[]

#### Returns

\{ `key`: `string` ; `value`: `any`  }[]

#### Defined in

[types/account.ts:132](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/account.ts#L132)

• `set` **meta**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | \{ `key`: `string` ; `value`: `any`  }[] |

#### Returns

`void`

#### Defined in

[types/account.ts:136](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/account.ts#L136)

___

### name

• `get` **name**(): `MultiLanguage`\<`string`\>

#### Returns

`MultiLanguage`\<`string`\>

#### Defined in

[types/account.ts:84](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/account.ts#L84)

• `set` **name**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MultiLanguage`\<`string`\> |

#### Returns

`void`

#### Defined in

[types/account.ts:88](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/account.ts#L88)

## Constructors

### constructor

• **new Account**(`params?`): [`Account`](Account)

Constructs an account

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | [`IAccount`](../interfaces/IAccount) | Account parameters |

#### Returns

[`Account`](Account)

#### Defined in

[types/account.ts:33](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/account.ts#L33)

## Methods

### generateMetadata

▸ **generateMetadata**(): [`AccountMetadata`](../interfaces/AccountMetadata)

#### Returns

[`AccountMetadata`](../interfaces/AccountMetadata)

#### Defined in

[types/account.ts:65](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/account.ts#L65)

___

### build

▸ **build**(`params`): [`Account`](Account)

Returns an account object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IAccount`](../interfaces/IAccount) | Account parameters |

#### Returns

[`Account`](Account)

#### Defined in

[types/account.ts:61](https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/types/account.ts#L61)
