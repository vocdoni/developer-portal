[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / FileService

# Class: FileService

## Hierarchy

- [`Service`](Service.md)

  ↳ **`FileService`**

## Implements

- `FileServiceProperties`

## Table of contents

### Constructors

- [constructor](FileService.md#constructor)

### Properties

- [url](FileService.md#url)

### Methods

- [calculateCID](FileService.md#calculatecid)

## Constructors

### constructor

• **new FileService**(`params`): [`FileService`](FileService.md)

Instantiate the election service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Partial`\<`FileServiceParameters`\> | The service parameters |

#### Returns

[`FileService`](FileService.md)

#### Overrides

[Service](Service.md).[constructor](Service.md#constructor)

#### Defined in

[services/file.ts:16](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/file.ts#L16)

## Properties

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service.md#url)

#### Defined in

[services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/service.ts#L6)

## Methods

### calculateCID

▸ **calculateCID**(`data`): `Promise`\<`string`\>

Fetches the CID expected for the specified data content.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | The data of which we want the CID of |

#### Returns

`Promise`\<`string`\>

Resulting CID

#### Defined in

[services/file.ts:27](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/file.ts#L27)
