[@vocdoni/sdk](/sdk) / Proof

# Interface: Proof

## Table of contents

### Properties

- [payload](Proof#payload)

## Properties

### payload

• `Optional` **payload**: \{ `$case`: ``"graviton"`` ; `graviton`: \{ `siblings`: `Uint8Array`  }  } \| \{ `$case`: ``"iden3"`` ; `iden3`: \{ `siblings`: `Uint8Array`  }  } \| \{ `$case`: ``"ethereumStorage"`` ; `ethereumStorage`: \{ `key`: `Uint8Array` ; `siblings`: `Uint8Array`[] ; `value`: `Uint8Array`  }  } \| \{ `$case`: ``"ethereumAccount"`` ; `ethereumAccount`: \{ `balance`: `Uint8Array` ; `codeHash`: `Uint8Array` ; `nonce`: `Uint8Array` ; `siblings`: `Uint8Array`[] ; `storageHash`: `Uint8Array`  }  } \| \{ `$case`: ``"ca"`` ; `ca`: \{ `bundle`: \{ `address`: `Uint8Array` ; `processId`: `Uint8Array`  } ; `signature`: `Uint8Array` ; `type`: `ProofCA_Type`  }  } \| \{ `$case`: ``"arbo"`` ; `arbo`: \{ `keyType`: `ProofArbo_KeyType` ; `siblings`: `Uint8Array` ; `type`: `ProofArbo_Type` ; `value`: `Uint8Array`  }  } \| \{ `$case`: ``"zkSnark"`` ; `zkSnark`: \{ `a`: `string`[] ; `b`: `string`[] ; `c`: `string`[] ; `circuitParametersIndex`: `number` ; `publicInputs`: `string`[]  }  } \| \{ `$case`: ``"minimeStorage"`` ; `minimeStorage`: \{ `proofNextBlock?`: \{ `key`: `Uint8Array` ; `siblings`: `Uint8Array`[] ; `value`: `Uint8Array`  } ; `proofPrevBlock`: \{ `key`: `Uint8Array` ; `siblings`: `Uint8Array`[] ; `value`: `Uint8Array`  }  }  }

#### Defined in

[src/api/chain/transactions.ts:341](https://github.com/vocdoni/vocdoni-sdk/blob/179c92b4cecfec787d968dc02b519f64ee15c5d3/src/api/chain/transactions.ts#L341)
