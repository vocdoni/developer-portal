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

[api/chain/transactions.ts:174](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L174)

___

### censusOrigin

• **censusOrigin**: [`CensusOrigin`](../enums/CensusOrigin)

#### Defined in

[api/chain/transactions.ts:192](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L192)

___

### censusRoot

• **censusRoot**: `Uint8Array`

CensusRoot merkle root of all the census in the process

#### Defined in

[api/chain/transactions.ts:176](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L176)

___

### censusURI

• `Optional` **censusURI**: `string`

CensusURI where to find the census

#### Defined in

[api/chain/transactions.ts:178](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L178)

___

### encryptionPrivateKeys

• **encryptionPrivateKeys**: `string`[]

EncryptionPrivateKeys are the keys required to decrypt the votes

#### Defined in

[api/chain/transactions.ts:180](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L180)

___

### encryptionPublicKeys

• **encryptionPublicKeys**: `string`[]

EncryptionPublicKeys are the keys required to encrypt the votes

#### Defined in

[api/chain/transactions.ts:182](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L182)

___

### entityId

• **entityId**: `Uint8Array`

EntityId identifies unequivocally an entity

#### Defined in

[api/chain/transactions.ts:170](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L170)

___

### envelopeType

• **envelopeType**: `EnvelopeType`

#### Defined in

[api/chain/transactions.ts:187](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L187)

___

### ethIndexSlot

• `Optional` **ethIndexSlot**: `number`

#### Defined in

[api/chain/transactions.ts:195](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L195)

___

### keyIndex

• `Optional` **keyIndex**: `number`

#### Defined in

[api/chain/transactions.ts:183](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L183)

___

### maxCensusSize

• `Optional` **maxCensusSize**: `number`

MaxCensusSize is set by the Process creator.

#### Defined in

[api/chain/transactions.ts:205](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L205)

___

### metadata

• `Optional` **metadata**: `string`

Metadata is the content hashed URI of the JSON meta data (See Data Origins)

#### Defined in

[api/chain/transactions.ts:201](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L201)

___

### mode

• **mode**: `ProcessMode`

#### Defined in

[api/chain/transactions.ts:188](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L188)

___

### namespace

• **namespace**: `number`

#### Defined in

[api/chain/transactions.ts:186](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L186)

___

### nullifiersRoot

• `Optional` **nullifiersRoot**: `Uint8Array`

NullifiersRoot is the root of the pre-census nullifiers merkle tree.
Used when Mode.PreRegister = true.

#### Defined in

[api/chain/transactions.ts:220](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L220)

___

### owner

• `Optional` **owner**: `Uint8Array`

Owner is the creator of a process (if any) otherwise is assumed the creator is the entityId

#### Defined in

[api/chain/transactions.ts:199](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L199)

___

### paramsSignature

• `Optional` **paramsSignature**: `Uint8Array`

#### Defined in

[api/chain/transactions.ts:185](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L185)

___

### processId

• **processId**: `Uint8Array`

#### Defined in

[api/chain/transactions.ts:168](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L168)

___

### questionCount

• `Optional` **questionCount**: `number`

#### Defined in

[api/chain/transactions.ts:190](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L190)

___

### questionIndex

• `Optional` **questionIndex**: `number`

#### Defined in

[api/chain/transactions.ts:189](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L189)

___

### results

• **results**: `ProcessResult`[]

#### Defined in

[api/chain/transactions.ts:193](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L193)

___

### resultsSignatures

• **resultsSignatures**: `Uint8Array`[]

#### Defined in

[api/chain/transactions.ts:194](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L194)

___

### rollingCensusRoot

• `Optional` **rollingCensusRoot**: `Uint8Array`

RollingCensusRoot merkle root of the rolling census.  Set by the
vocdoni-node when Mode.Process = true

#### Defined in

[api/chain/transactions.ts:210](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L210)

___

### rollingCensusSize

• `Optional` **rollingCensusSize**: `number`

RollingCensusSize is set by the vocdoni-node when Mode.PreRegister =
true and the StartBlock has been reached.

#### Defined in

[api/chain/transactions.ts:215](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L215)

___

### sourceBlockHeight

• `Optional` **sourceBlockHeight**: `number`

SourceBlockHeight is the block height of the origin blockchain (if any)

#### Defined in

[api/chain/transactions.ts:197](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L197)

___

### sourceNetworkContractAddr

• `Optional` **sourceNetworkContractAddr**: `Uint8Array`

sourceNetworkContractAddr is used for EVM token based voting and it is
the contract address of the token that is going to define the census

#### Defined in

[api/chain/transactions.ts:225](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L225)

___

### sourceNetworkId

• **sourceNetworkId**: `SourceNetworkId`

SourceNetworkId is the identifier of the network origin (where the process have been created)

#### Defined in

[api/chain/transactions.ts:203](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L203)

___

### startBlock

• **startBlock**: `number`

StartBlock represents the tendermint block where the process goes from scheduled to active

#### Defined in

[api/chain/transactions.ts:172](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L172)

___

### status

• **status**: `ProcessStatus`

#### Defined in

[api/chain/transactions.ts:184](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L184)

___

### tokenDecimals

• `Optional` **tokenDecimals**: `number`

tokenDecimals represents the number of decimals of the token (i.e ERC20) used for voting.
It is normally used for processes with on-chain census

#### Defined in

[api/chain/transactions.ts:230](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L230)

___

### voteOptions

• **voteOptions**: `ProcessVoteOptions`

#### Defined in

[api/chain/transactions.ts:191](https://github.com/vocdoni/vocdoni-sdk/blob/c61694d51d7ca609cdc86440f23c7a75ea39ea5b/src/api/chain/transactions.ts#L191)
