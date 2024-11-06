[@vocdoni/sdk](/sdk) / ErrCantParsePayloadAsJSON

# Class: ErrCantParsePayloadAsJSON

## Hierarchy

- `Error`

  ↳ **`ErrCantParsePayloadAsJSON`**

## Table of contents

### Constructors

- [constructor](ErrCantParsePayloadAsJSON#constructor)

### Methods

- [captureStackTrace](ErrCantParsePayloadAsJSON#capturestacktrace)

### Properties

- [cause](ErrCantParsePayloadAsJSON#cause)
- [message](ErrCantParsePayloadAsJSON#message)
- [name](ErrCantParsePayloadAsJSON#name)
- [stack](ErrCantParsePayloadAsJSON#stack)
- [prepareStackTrace](ErrCantParsePayloadAsJSON#preparestacktrace)
- [stackTraceLimit](ErrCantParsePayloadAsJSON#stacktracelimit)

## Constructors

### constructor

• **new ErrCantParsePayloadAsJSON**(`message?`): [`ErrCantParsePayloadAsJSON`](ErrCantParsePayloadAsJSON)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`ErrCantParsePayloadAsJSON`](ErrCantParsePayloadAsJSON)

#### Overrides

Error.constructor

#### Defined in

[src/api/errors.ts:116](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/errors.ts#L116)

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:136

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

docs/node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

docs/node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

docs/node_modules/typescript/lib/lib.es5.d.ts:1053

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

docs/node_modules/typescript/lib/lib.es5.d.ts:1055

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:143

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:145
