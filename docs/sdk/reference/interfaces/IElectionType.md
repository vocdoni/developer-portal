[@vocdoni/sdk](/sdk) / IElectionType

# Interface: IElectionType

## Table of contents

### Properties

- [anonymous](IElectionType#anonymous)
- [dynamicCensus](IElectionType#dynamiccensus)
- [interruptible](IElectionType#interruptible)
- [metadata](IElectionType#metadata)
- [secretUntilTheEnd](IElectionType#secretuntiltheend)

## Properties

### anonymous

• `Optional` **anonymous**: `boolean`

Enable anonymous voting.

#### Defined in

[src/types/election/election.ts:88](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L88)

___

### dynamicCensus

• `Optional` **dynamicCensus**: `boolean`

Can add more voters to the census tree during the election.

#### Defined in

[src/types/election/election.ts:80](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L80)

___

### interruptible

• `Optional` **interruptible**: `boolean`

The process can be paused and resumed.

#### Defined in

[src/types/election/election.ts:76](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L76)

___

### metadata

• `Optional` **metadata**: `Object`

If the metadata has to be encrypted or not.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `encrypted?` | `boolean` | If the metadata has to be encrypted or not. |
| `password?` | `string` | Password to encrypt the metadata. |

#### Defined in

[src/types/election/election.ts:92](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L92)

___

### secretUntilTheEnd

• `Optional` **secretUntilTheEnd**: `boolean`

Protect the results until the end of the process if true. It will show live results otherwise.

#### Defined in

[src/types/election/election.ts:84](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/types/election/election.ts#L84)
