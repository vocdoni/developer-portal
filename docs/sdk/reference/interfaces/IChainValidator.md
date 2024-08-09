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

[src/api/chain.ts:374](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L374)

___

### joinHeight

• **joinHeight**: `number`

Block height when validator joint

#### Defined in

[src/api/chain.ts:384](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L384)

___

### name

• **name**: `string`

Validator name reference. Could be empty.

#### Defined in

[src/api/chain.ts:379](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L379)

___

### power

• **power**: `number`

Current power of the validator

#### Defined in

[src/api/chain.ts:364](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L364)

___

### proposals

• **proposals**: `number`

Total block proposals count

#### Defined in

[src/api/chain.ts:389](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L389)

___

### pubKey

• **pubKey**: `string`

Validator public key

#### Defined in

[src/api/chain.ts:369](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L369)

___

### score

• **score**: `number`

Validatos effectivity. Between 0 and 100

#### Defined in

[src/api/chain.ts:394](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L394)

___

### validatorAddress

• **validatorAddress**: `string`

Validator address

#### Defined in

[src/api/chain.ts:399](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L399)

___

### votes

• **votes**: `number`

Number ob validated blocks (not created)

#### Defined in

[src/api/chain.ts:404](https://github.com/vocdoni/vocdoni-sdk/blob/0f6707560b7c8d3f10888ef928ae6edaf9aeab57/src/api/chain.ts#L404)
