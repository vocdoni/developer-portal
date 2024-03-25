[@vocdoni/sdk](/sdk) / [Exports](../modules) / FileService

# Class: FileService

## Hierarchy

- [`Service`](Service)

  ↳ **`FileService`**

## Implements

- `FileServiceProperties`

## Table of contents

### Constructors

- [constructor](FileService#constructor)

### Properties

- [url](FileService#url)

### Methods

- [calculateCID](FileService#calculatecid)

## Constructors

### constructor

• **new FileService**(`params`): [`FileService`](FileService)

Instantiate the election service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Partial`\<`FileServiceParameters`\> | The service parameters |

#### Returns

[`FileService`](FileService)

#### Overrides

[Service](Service.md).[constructor](Service#constructor)

#### Defined in

[services/file.ts:16](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/services/file.ts#L16)

## Properties

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service#url)

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
