[@vocdoni/sdk](/sdk) / ICspInfoResponse

# Interface: ICspInfoResponse

## Table of contents

### Properties

- [authSteps](ICspInfoResponse#authsteps)
- [authType](ICspInfoResponse#authtype)
- [signatureType](ICspInfoResponse#signaturetype)
- [title](ICspInfoResponse#title)

## Properties

### authSteps

• **authSteps**: [`ICspAuthStep`](ICspAuthStep)[]

The auth steps to follow in order to get a blind signature

#### Defined in

[src/api/csp.ts:42](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/api/csp.ts#L42)

___

### authType

• **authType**: `string`

The authentication type of the CSP

#### Defined in

[src/api/csp.ts:37](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/api/csp.ts#L37)

___

### signatureType

• **signatureType**: `string`[]

The types of signature of the CSP

#### Defined in

[src/api/csp.ts:32](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/api/csp.ts#L32)

___

### title

• **title**: `string`

The title of the CSP Information

#### Defined in

[src/api/csp.ts:27](https://github.com/vocdoni/vocdoni-sdk/blob/1347b8ec17da122a7e3a17b12e8afb2da1e80984/src/api/csp.ts#L27)
