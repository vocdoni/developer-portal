[@vocdoni/sdk](/sdk) / IAccountInfoResponse

# Interface: IAccountInfoResponse

## Table of contents

### Properties

- [address](IAccountInfoResponse#address)
- [balance](IAccountInfoResponse#balance)
- [electionIndex](IAccountInfoResponse#electionindex)
- [feesCount](IAccountInfoResponse#feescount)
- [infoURL](IAccountInfoResponse#infourl)
- [metadata](IAccountInfoResponse#metadata)
- [nonce](IAccountInfoResponse#nonce)
- [sik](IAccountInfoResponse#sik)
- [transfersCount](IAccountInfoResponse#transferscount)

## Properties

### address

• **address**: `string`

The address of the account

#### Defined in

[src/api/account.ts:19](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/account.ts#L19)

___

### balance

• **balance**: `number`

The current balance in tokens.

#### Defined in

[src/api/account.ts:24](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/account.ts#L24)

___

### electionIndex

• **electionIndex**: `number`

The index of the elections created by the account.

#### Defined in

[src/api/account.ts:39](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/account.ts#L39)

___

### feesCount

• **feesCount**: `number`

The number of fees of the account.

#### Defined in

[src/api/account.ts:49](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/account.ts#L49)

___

### infoURL

• `Optional` **infoURL**: `string`

The information URI of the account

#### Defined in

[src/api/account.ts:54](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/account.ts#L54)

___

### metadata

• **metadata**: [`AccountMetadata`](AccountMetadata)

The metadata of the account

#### Defined in

[src/api/account.ts:59](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/account.ts#L59)

___

### nonce

• **nonce**: `number`

The nonce of the account.

#### Defined in

[src/api/account.ts:29](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/account.ts#L29)

___

### sik

• **sik**: `string`

The sik of the account.

#### Defined in

[src/api/account.ts:34](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/account.ts#L34)

___

### transfersCount

• **transfersCount**: `number`

The number of transfers of the account.

#### Defined in

[src/api/account.ts:44](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/account.ts#L44)
