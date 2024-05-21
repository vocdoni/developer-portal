[@vocdoni/sdk](/sdk) / FileService

# Class: FileService

## Hierarchy

- [`Service`](Service)

  ↳ **`FileService`**

## Implements

- `FileServiceProperties`

## Table of contents

### Constructors

- [constructor](FileService#constructor)

### Methods

- [calculateCID](FileService#calculatecid)

### Properties

- [url](FileService#url)

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

Service.constructor

#### Defined in

[services/file.ts:16](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/file.ts#L16)

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

[services/file.ts:27](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/file.ts#L27)

## Properties

### url

• **url**: `string`

#### Inherited from

[Service](Service.md).[url](Service#url)

#### Defined in

[services/service.ts:6](https://github.com/vocdoni/vocdoni-sdk/blob/ee6390524b82e6ef535da03c0e3bb826e450e622/src/services/service.ts#L6)
