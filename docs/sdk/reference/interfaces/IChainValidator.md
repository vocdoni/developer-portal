[@vocdoni/sdk](/sdk) / IChainValidator

# Interface: IChainValidator

## Table of contents

### Properties

- [address](IChainValidator#address)
- [joinHeight](IChainValidator#joinheight)
- [name](IChainValidator#name)
- [power](IChainValidator#power)
- [proposals](IChainValidator#proposals)
- [pubKey](IChainValidator#pubkey)
- [score](IChainValidator#score)
- [validatorAddress](IChainValidator#validatoraddress)
- [votes](IChainValidator#votes)

## Properties

### address

• **address**: `string`

Validator address

#### Defined in

[src/api/chain.ts:376](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L376)

___

### joinHeight

• **joinHeight**: `number`

Block height when validator joint

#### Defined in

[src/api/chain.ts:386](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L386)

___

### name

• **name**: `string`

Validator name reference. Could be empty.

#### Defined in

[src/api/chain.ts:381](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L381)

___

### power

• **power**: `number`

Current power of the validator

#### Defined in

[src/api/chain.ts:366](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L366)

___

### proposals

• **proposals**: `number`

Total block proposals count

#### Defined in

[src/api/chain.ts:391](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L391)

___

### pubKey

• **pubKey**: `string`

Validator public key

#### Defined in

[src/api/chain.ts:371](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L371)

___

### score

• **score**: `number`

Validatos effectivity. Between 0 and 100

#### Defined in

[src/api/chain.ts:396](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L396)

___

### validatorAddress

• **validatorAddress**: `string`

Validator address

#### Defined in

[src/api/chain.ts:401](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L401)

___

### votes

• **votes**: `number`

Number ob validated blocks (not created)

#### Defined in

[src/api/chain.ts:406](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain.ts#L406)
