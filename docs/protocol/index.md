# Vocdoni Protocol

## Introduction

The Vocdoni Protocol is the distributed backend which fulfills our mission by providing a decentralized, open-source, universally-verifiable, and anonymous voting system. The Protocol has many different elements and services running in a network of distributed nodes. The core of the protocol is [vocdoni-node](https://github.com/vocdoni/vocdoni-node), a piece of software written in golang that enables a node to be run in one of many modes, depending which services and features are needed. The golang reference for this library is documented at [pkg.go.dev](https://pkg.go.dev/go.vocdoni.io/dvote#section-readme) and the api service provided by vocdoni-node is documented [here](/vocdoni-api/vocdoni-api).

### The Blockchain

Data integrity and universal verifiability are provided by the Vocdoni blockchain, or **Vochain**. This is a Byzantine fault-tolerant network based on [Tendermint][tendermint] that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a decentralized and verifiable format. Currently, the network can process more than 30K votes per minute while using no more than the resources found on a common cloud server.

The Vocdoni blockchain requires a native token (VOC) to execute management transactions (i.e creating elections), but not for casting votes. Therefore, the voters can participate in governance processes in a free and gasless manner.

Vochain is currently based on Proof-of-Authority consensus. However, we are already working towards transitioning to Proof-of-Stake model. Until then, the tokens are free and can be obtained by anyone by using our faucet service.

The current Vochain code can be found in our [vocdoni-node][vochain-github] github repository.

### Gateways

The Gateways provide entry points to our P2P network. They allow clients to reach decentralized services through a standard [**HTTP(s) API interface**](/vocdoni-api/vocdoni-api).

Internally, the Gateways act as a standard blockchain full node, but also as indexers, meaning that they store and update a separate non state-related database that contains digested information useful for fulfilling client query requirements. For instance, **Gateways compute election results** (which are not part of the state) and provide census services (so voters can fetch their election Merkle proof). To perform the indexer function, Gateways need access to the auxiliary distributed filestore.


### Distributed storage

Vocdoni currently relies on the [InterPlanetary File System (IPFS)][ipfs] for storing auxiliary information. In a voting process, this includes information such as texts (questions, descriptions, and options), complementary images, as well as censuses. This data does not need to be permanent in order to ensure the integrity of a voting process, and is expensive to keep it around, so it is published to IPFS until it can be discarded.

We have designed the Vocdoni primitives in a modular fashion, which allows us to incorporate more data layers in the future, such as Ethersphere Swarm, DAT, STORj or Filecoin.


## Process overview

This section provides an overview of the Vocdoni flow for creating a participatory process, its main attributes, and configuration options.

The following diagram is a summary of the flow, from creating an organization account to the vote casting.

<div class="inline-img-container">
    <img class="mx-auto" src="/img/docs/process_overview.png" alt="process overview schema" title="Process Overview"
         style={{height: "auto", width: "100%", maxWidth: "600px", margin: "auto"}}/>
</div>

Let's explore in more detail the different concepts.


### The census

The census is a key component of every voting process. It defines the set of users (identified by a public key or address) who are eligible for participating in an election.

Vocdoni is designed to be as flexible as possible and to enable, at the very least, the most common use cases for elections. To this end, the protocol currently supports several census types and origins, and more may be added in the future.

The current census origins available are:

+ [**weighted merkle tree:**](/protocol/census/off-chain-tree) for standard elections, allowing participants to vote with different "weights" (e.g. someone with 50 points might have 50 votes)
+ [**indexed merkle tree:**](/protocol/anonymity/zk-census-proof) an optimized merkle tree for voting on zkSnarks
+ [**credential service provider (CSP):**](/protocol/census/off-chain-csp) for elections where an authority provides voting credentials (such as OAUTH, mailing, SMS, etc.)
+ [**ERC20 based on the census3 service:**](/protocol/census/on-chain#census3-service) we provide a Census3 Service which tracks token-holders of many tokens on Ethereum-based networks and facilitates the creation of weighted censuses based on this information


### Accounts

A Vocdoni account is identified by an Ethereum-like address. This allows us to use standard Web3 signers such as Metamask.

An account can:

+ Create and manage elections
+ Transfer tokens
+ Authorize other accounts to act on his behalf (delegates)
+ Manage its metadata

For creating an account, a faucet package is required, since bootstrapping requires a fee in Voc tokens. At the moment, Vocdoni provides a free faucet service for distributing such tokens (integrated within the client SDK).

An account often represents an organization and might have associated an `infoURL` pointing to an external IPFS file containing the metadata details (name, description, logo, etc.). All Vochain nodes automatically distribute and store this data. 


### Elections

An Election (named a `process` internally) is a rule-set of options and requirements written into the blockchain state, thus guaranteeing that they can no longer be modified (unless explicitly configured to be upgradeable). The election is created and configured by an account owner or account delegates.

The following election options can be configured:

+ **Census origin:** description of the eligible voters or rules.
+ **Lifecycle:** initial state, start, and end blocks.
+ **Election mode:** how should the process behave.
+ **Vote mode:** the kind of ballots expected from voters.
+ **Tally mode:** how should the results be computed as defined by the [Vocdoni Ballot protocol][ballot-protocol]. Details and examples can be found [here][blog-ballot-protocol].

#### Election Lifecycle States

An election must be in one of the following states:

+ **Ready:** the process is open to voters.
+ **Paused:** the process is active, but votes are not accepted.
+ **Ended:** the process is finished and the state can no longer be updated.
+ **Canceled:** the process is terminated by the election official and is no longer considered valid.
+ **Result:** the process has ended and results have been published.

The states can transition in the following ways:

```mermaid
flowchart LR
style Creation fill:#EBAE9A,stroke:#333,stroke-width:2px

Creation -.-> Ready
Creation-.->Paused
Ready <--> Paused
Paused-->Ended
Ready-->Ended
Ready-->Canceled
Ended-->Results
```

#### Election Mode

+ **Auto-start:** Enables the voting process to be started manually by the election administrator, as opposed to setting a start date.
+ **Interruptible:** The election administrator may pause or end the process at any point in time.
+ **Encrypted metadata:** Allows the questions and options of a process to be encrypted, so an external observer won't be able to see the questions unless they have the key.
+ **Dynamic census:** By default, the census is immutable and  cannot be changed once published. However, long lasting polls may enable a dynamic census so that new members of a community may vote on a process after joining. 
+ **Allow override:** If enabled, a voter may vote multiple times and replace any prior vote envelope. This protects voters from coercion and accidental mistakes.

#### Vote Mode


+ **Anonymous:** If enabled, the voter’s public key will remain unrecoverable. Instead, the voter will prove that they are registered to vote by computing a zk-SNARK proof (ZKP) on their device. If this option is not chosen, the vote envelope will contain a signed vote, resulting in a pseudonymous vote. If an observer correlates the voter’s public key with personal data, the voter could be identified.
+ **Encrypted:** If enabled, the payload of the votes emitted will remain encrypted until the end of the process. The results will be available once the encryption keys are published by the miners at the end of the process. If disabled, the results can be seen in real time.
+ **CostFromWeight:** If enabled, the total cost defined in the ballot protocol will equal the voter's census weight.

#### Election ID

An election ID is a 32-byte identifier that encodes several important pieces of information about a voting process.

+ **Components of an election ID**

    + Chain ID (6 bytes): A 6-byte truncated hash of the blockchain identifier. ChainID is: `ChainID = H(C)[:6]` where `H()` is the `Keccak256` Ethereum hash function without any prefix. The first 6 bytes of the hash are taken as the ChainID.
    + Organization Address (20 bytes): The Ethereum address of the wallet that created the process.
    + Census Origin (1 byte): The type of census used for the process. This is a single byte (uint8) value, which represents a specific census origin type.
    + Envelope Type (1 byte): The configuration of ballot properties, represented as a single byte. This byte is constructed by combining several boolean flags (Serial, Anonymous, EncryptedVotes, UniqueValues, CostFromWeight) using the following bitwise OR operations in the 32 byte election ID: `EnvelopeType = (Serial×20) ∣ (Anonymous×21) ∣ (EncryptedVotes×22) ∣ (UniqueValues×23) ∣ (CostFromWeight×24)`.
    Each flag is either 0 (false) or 1 (true), and the result is a single byte.
    + Nonce (4 bytes): A 4-byte unsigned integer that represents an incremental process index. It is the account’s ProcessIndex

+ **Construction of the election ID**
    
    The election ID is a concatenation of the above components in the following order:
    
    `ProcessID = ChainID (6 bytes) || OrganizationAddr (20 bytes) || CensusOrigin (1 byte) || EnvelopeType (1 byte) || Nonce (4 bytes)`.
    
    Where `||` represents the concatenation of the byte sequences.

### Anonymous Voting

A voting envelope is composed of two parts: the census proof (which defines the eligibility of the voter) and the ballot (the actual contents of the vote, containing the chosen options). The anonymization of the voting envelope is achieved by anonymizing the census proof using zk-SNARKs technology.

zk-SNARK proofs are a convenient method to prove something to a third-party verifier without revealing the contents of what is being proven.

The goal of the Vocdoni zk-SNARK circuit is to prove that a voter (identified by a public key) is part of a Census (a Merkle Tree composed of such public keys) without revealing the identity (public key) of that voter. This circuit produces a unique and deterministic identifier (nullifier) that can be processed by a public ledger/blockchain to distinguish whether the voter has previously submitted a vote.

*Note: while zk-SNARK voting is enabled in the protocol and available at [https://vocdoni.app][app], it is not yet implemented as part of the current SDK.*

### Results

The results are computed by a set of rules configured by the election owner and following the [Vocdoni ballot protocol][ballot-protocol], which allows for almost any type of voting such as Range or Quadratic.

Results are represented as a matrix of numbers such as `[ [1,2], [0,1] ]` which can be interpreted as:

+ for the first question, the first option received 1 vote and the second option 2 votes
+ for the second question, the first option received 0 votes and the second option 1 vote

The computation of results is intricately woven into the fabric of blockchain logic. In this setup, each node within the network independently calculates the results and subsequently commits to the prevailing state. Should a node incorrectly evaluate the election results, it risks alienating itself from the network consensus, thereby impairing its continued participation.

Moreover, the system ensures absolute verifiability. Every end user possesses the capability to retrieve the comprehensive list of votes related to a specific election from the blockchain state, facilitating local replication of the tally. This accessibility further solidifies the credibility of the election results, fostering trust within the network.

### Transactions and Fees

Vochain transactions are actions such as creating a voting process, changing the state of a voting process, casting a vote, or anything else that updates the state of the data stored on the Vochain. Transactions are protobuf-encoded and signed by the sender. However, the SDK handles this operation transparently for the end user. 

Transactions may have a fee that the sender needs to cover from its own balance. The fee cost per transaction is currently fixed and configured in the blockchain genesis file. At the moment, once a transaction is executed, the fee is automatically burned. This is an intermediate solution that will become invalid once the full features of the Vochain are implemented. 

:::info voting
Voting *never* requires a fee. This means that the costs of an election will always be the responsibility of election administrators during setup, and once an election is underway voters will never be charged to vote.
:::

The following list shows the transactions:

#### Organization accounts
+ CreateAccount: create a new account in the blockchain, identified by an Ethereum compatible address
+ SendTokens: send tokens from to another account of the blockchain
+ CollectFaucet: collect a faucet code, provided and signed by an existing account
+ NewProcess: create a new election
+ SetProcessStatus: set the election status (see election lifecycle)
+ SetAccountInfoURI: set the external info URI for the account (containing account metadata)
+ SetProcessCensus: update the election census (only if dynamic census is enabled)
+ AddDelegateForAccount: add a delegate to the account
+ DelDelegateForAccount: delete a delegate from the account

#### Election participants
+ Vote: cast a vote to an existing election

#### Validators
+ RegisterKey: register a new encryption key for the election


# More information

+ [MIT Law Report paper about Vocdoni][mit-paper]
+ [Vocdoni blog][blog]


[tendermint]: https://tendermint.com/
[vochain-github]: https://github.com/vocdoni/vocdoni-node/tree/main/vochain
[ipfs]: https://www.ipfs.tech/
[ballot-protocol]: /protocol/ballot-protocol
[wiki-merkle-tree]: https://en.wikipedia.org/wiki/Merkle_tree
[blog-ballot-protocol]: https://blog.vocdoni.io/vocdoni-ballot-protocol
[app]: https://vocdoni.app
[mit-paper]: https://law.mit.edu/pub/remotevotingintheageofcryptography/release/1
[blog]: https://blog.vocdoni.io