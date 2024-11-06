[@vocdoni/sdk](/sdk) / Process

# Interface: Process

## Table of contents

### Properties

- [blockCount](Process#blockcount)
- [censusOrigin](Process#censusorigin)
- [censusRoot](Process#censusroot)
- [censusURI](Process#censusuri)
- [encryptionPrivateKeys](Process#encryptionprivatekeys)
- [encryptionPublicKeys](Process#encryptionpublickeys)
- [entityId](Process#entityid)
- [envelopeType](Process#envelopetype)
- [ethIndexSlot](Process#ethindexslot)
- [keyIndex](Process#keyindex)
- [maxCensusSize](Process#maxcensussize)
- [metadata](Process#metadata)
- [mode](Process#mode)
- [namespace](Process#namespace)
- [nullifiersRoot](Process#nullifiersroot)
- [owner](Process#owner)
- [paramsSignature](Process#paramssignature)
- [processId](Process#processid)
- [questionCount](Process#questioncount)
- [questionIndex](Process#questionindex)
- [results](Process#results)
- [resultsSignatures](Process#resultssignatures)
- [rollingCensusRoot](Process#rollingcensusroot)
- [rollingCensusSize](Process#rollingcensussize)
- [sourceBlockHeight](Process#sourceblockheight)
- [sourceNetworkContractAddr](Process#sourcenetworkcontractaddr)
- [sourceNetworkId](Process#sourcenetworkid)
- [startBlock](Process#startblock)
- [status](Process#status)
- [tokenDecimals](Process#tokendecimals)
- [voteOptions](Process#voteoptions)

## Properties

### blockCount

• **blockCount**: `number`

BlockCount represents the amount of tendermint blocks that the process will last

#### Defined in

[src/api/chain/transactions.ts:175](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L175)

___

### censusOrigin

• **censusOrigin**: [`CensusOrigin`](../enums/CensusOrigin)

#### Defined in

[src/api/chain/transactions.ts:193](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L193)

___

### censusRoot

• **censusRoot**: `Uint8Array`

CensusRoot merkle root of all the census in the process

#### Defined in

[src/api/chain/transactions.ts:177](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L177)

___

### censusURI

• `Optional` **censusURI**: `string`

CensusURI where to find the census

#### Defined in

[src/api/chain/transactions.ts:179](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L179)

___

### encryptionPrivateKeys

• **encryptionPrivateKeys**: `string`[]

EncryptionPrivateKeys are the keys required to decrypt the votes

#### Defined in

[src/api/chain/transactions.ts:181](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L181)

___

### encryptionPublicKeys

• **encryptionPublicKeys**: `string`[]

EncryptionPublicKeys are the keys required to encrypt the votes

#### Defined in

[src/api/chain/transactions.ts:183](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L183)

___

### entityId

• **entityId**: `Uint8Array`

EntityId identifies unequivocally an entity

#### Defined in

[src/api/chain/transactions.ts:171](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L171)

___

### envelopeType

• **envelopeType**: `EnvelopeType`

#### Defined in

[src/api/chain/transactions.ts:188](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L188)

___

### ethIndexSlot

• `Optional` **ethIndexSlot**: `number`

#### Defined in

[src/api/chain/transactions.ts:196](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L196)

___

### keyIndex

• `Optional` **keyIndex**: `number`

#### Defined in

[src/api/chain/transactions.ts:184](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L184)

___

### maxCensusSize

• `Optional` **maxCensusSize**: `number`

MaxCensusSize is set by the Process creator.

#### Defined in

[src/api/chain/transactions.ts:206](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L206)

___

### metadata

• `Optional` **metadata**: `string`

Metadata is the content hashed URI of the JSON meta data (See Data Origins)

#### Defined in

[src/api/chain/transactions.ts:202](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L202)

___

### mode

• **mode**: `ProcessMode`

#### Defined in

[src/api/chain/transactions.ts:189](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L189)

___

### namespace

• **namespace**: `number`

#### Defined in

[src/api/chain/transactions.ts:187](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L187)

___

### nullifiersRoot

• `Optional` **nullifiersRoot**: `Uint8Array`

NullifiersRoot is the root of the pre-census nullifiers merkle tree.
Used when Mode.PreRegister = true.

#### Defined in

[src/api/chain/transactions.ts:221](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L221)

___

### owner

• `Optional` **owner**: `Uint8Array`

Owner is the creator of a process (if any) otherwise is assumed the creator is the entityId

#### Defined in

[src/api/chain/transactions.ts:200](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L200)

___

### paramsSignature

• `Optional` **paramsSignature**: `Uint8Array`

#### Defined in

[src/api/chain/transactions.ts:186](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L186)

___

### processId

• **processId**: `Uint8Array`

#### Defined in

[src/api/chain/transactions.ts:169](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L169)

___

### questionCount

• `Optional` **questionCount**: `number`

#### Defined in

[src/api/chain/transactions.ts:191](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L191)

___

### questionIndex

• `Optional` **questionIndex**: `number`

#### Defined in

[src/api/chain/transactions.ts:190](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L190)

___

### results

• **results**: `ProcessResult`[]

#### Defined in

[src/api/chain/transactions.ts:194](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L194)

___

### resultsSignatures

• **resultsSignatures**: `Uint8Array`[]

#### Defined in

[src/api/chain/transactions.ts:195](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L195)

___

### rollingCensusRoot

• `Optional` **rollingCensusRoot**: `Uint8Array`

RollingCensusRoot merkle root of the rolling census.  Set by the
vocdoni-node when Mode.Process = true

#### Defined in

[src/api/chain/transactions.ts:211](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L211)

___

### rollingCensusSize

• `Optional` **rollingCensusSize**: `number`

RollingCensusSize is set by the vocdoni-node when Mode.PreRegister =
true and the StartBlock has been reached.

#### Defined in

[src/api/chain/transactions.ts:216](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L216)

___

### sourceBlockHeight

• `Optional` **sourceBlockHeight**: `number`

SourceBlockHeight is the block height of the origin blockchain (if any)

#### Defined in

[src/api/chain/transactions.ts:198](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L198)

___

### sourceNetworkContractAddr

• `Optional` **sourceNetworkContractAddr**: `Uint8Array`

sourceNetworkContractAddr is used for EVM token based voting and it is
the contract address of the token that is going to define the census

#### Defined in

[src/api/chain/transactions.ts:226](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L226)

___

### sourceNetworkId

• **sourceNetworkId**: `SourceNetworkId`

SourceNetworkId is the identifier of the network origin (where the process have been created)

#### Defined in

[src/api/chain/transactions.ts:204](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L204)

___

### startBlock

• **startBlock**: `number`

StartBlock represents the tendermint block where the process goes from scheduled to active

#### Defined in

[src/api/chain/transactions.ts:173](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L173)

___

### status

• **status**: `ProcessStatus`

#### Defined in

[src/api/chain/transactions.ts:185](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L185)

___

### tokenDecimals

• `Optional` **tokenDecimals**: `number`

tokenDecimals represents the number of decimals of the token (i.e ERC20) used for voting.
It is normally used for processes with on-chain census

#### Defined in

[src/api/chain/transactions.ts:231](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L231)

___

### voteOptions

• **voteOptions**: `ProcessVoteOptions`

#### Defined in

[src/api/chain/transactions.ts:192](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L192)
