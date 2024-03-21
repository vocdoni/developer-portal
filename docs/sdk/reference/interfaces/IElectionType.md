[@vocdoni/sdk](/sdk) / [Exports](../modules.md) / IElectionType

# Interface: IElectionType

## Table of contents

### Properties

- [anonymous](IElectionType.md#anonymous)
- [autoStart](IElectionType.md#autostart)
- [dynamicCensus](IElectionType.md#dynamiccensus)
- [interruptible](IElectionType.md#interruptible)
- [secretUntilTheEnd](IElectionType.md#secretuntiltheend)

## Properties

### anonymous

• `Optional` **anonymous**: `boolean`

Enable anonymous voting.

#### Defined in

[types/election/election.ts:92](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L92)

___

### autoStart

• `Optional` **autoStart**: `boolean`

If false, election will start PAUSED and will have to be resumed manually.

#### Defined in

[types/election/election.ts:76](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L76)

___

### dynamicCensus

• `Optional` **dynamicCensus**: `boolean`

Can add more voters to the census tree during the election.

#### Defined in

[types/election/election.ts:84](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L84)

___

### interruptible

• `Optional` **interruptible**: `boolean`

The process can be paused and resumed.

#### Defined in

[types/election/election.ts:80](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L80)

___

### secretUntilTheEnd

• `Optional` **secretUntilTheEnd**: `boolean`

Protect the results until the end of the process if true. It will show live results otherwise.

#### Defined in

[types/election/election.ts:88](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/election/election.ts#L88)
