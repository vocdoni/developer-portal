
# Integration Details

The tutorial covers the basics, but here are some details you'll need to consider when integrating the Vocdoni SDK into your application.

## Vocdoni Tokens 

Running voting processes in the production environment requires the use of Vocdoni Tokens. Read the guide [here](integration-details/vocdoni-tokens).

## Census Types

There are many ways to define a census of voters using the Vocdoni SDK. Each census type has different design considerations and use-cases. Read the guide [here](integration-details/census-types)

## Anonymous Voting

Anonymous voting is available in some form with all three census types, with the strongest anonymity being anonymous off-chain Merkle tree elections. Minor modifications are usually necessary to convert censuses to being fully anonymous. Read the section on [census types](integration-details/census-types) to see how to enable anonymity.


## Election Types

The Vocdoni [Ballot Protocol][ballot-protocol] provides a flexible way to define many types of election. Check out [Voting Types][voting-types] for an overview of the possibilities, including ranked-choice, quadratic, weighted, and approval voting.

## Environment

#### Production

This is the environment for any production use cases. This environment is slightly more complicated to use, as it requires the manual use of [Vocdoni Tokens](/sdk/integration-details#vocdoni-tokens)

~~~ts
const client = new VocdoniSDKClient({
  env: EnvOptions.PROD, // mandatory, can be 'dev', 'stg', or 'prod'
  wallet: signer, // optional, the signer used (Metamask, Walletconnect)
})
~~~

#### Staging

This is the **recommended** environment for most testing use cases, since the
`dev` environment is more subject to blockchain resets and downtimes than
the `stg` one.

~~~ts
const client = new VocdoniSDKClient({
  env: EnvOptions.STG, // mandatory, can be 'dev', 'stg', or 'prod'
  wallet: signer, // optional, the signer used (Metamask, Walletconnect)
})
~~~

#### Development

This environment is for development testing and is subject to breaking changes and downtime.

~~~ts
const client = new VocdoniSDKClient({
  env: EnvOptions.DEV, // mandatory, can be 'dev', 'stg', or 'prod'
  wallet: signer, // optional, the signer used (Metamask, Walletconnect)
})
~~~


## Election Status

Depending on your use case, you may need to pause, cancel, or otherwise pay attention to the state of an election.
[Election lifecycle states][election-states] details all of the possible statuses an election can have once it has been published to the blockchain.

#### Pause

~~~ts
(async () => {
  await client.pauseElection(id)
  const election = await client.fetchElection(id)
  console.log(election.status) // Matches ElectionStatus.PAUSED
})();
~~~

#### Cancel

~~~ts
(async () => {
  await client.cancelElection(id)
  const election = await client.fetchElection(id)
  console.log(election.status) // Matches ElectionStatus.CANCELED
})();
~~~

#### End

~~~ts
(async () => {
  await client.endElection(id)
  const election = await client.fetchElection(id)
  console.log(election.status) // Matches ElectionStatus.ENDED
})();
~~~

#### Continue

~~~ts
(async () => {
  await client.continueElection(id)
  const election = await client.fetchElection(id)
  console.log(election.status) // Matches ElectionStatus.READY
})();
~~~

## Other SDK Tools

#### Generate a random Wallet

You can use the [`client.generateRandomWallet`][generate-random-wallet] function to generate a random Wallet and assign it to the client.
This function returns the private key of the Wallet.

~~~ts
const privateKey = client.generateRandomWallet();
console.log(privateKey) // the private key of the wallet
~~~

#### Generate deterministic Wallet from data

For some cases where the voters don't have custody over an existing Wallet, we can generate a deterministic
Wallet based on arbitrary data, like, for example, the user and hash password from a custom CRM.

Here is an example of [`client.generateWalletFromData`][generate-wallet-data] where a Wallet is generated using the username and the hash of the password
which we would use to identify the user in our platform. This Wallet can then be used for the
census and for voting purposes. This enables users to keep the same private key without having to store it in their browser or application.

~~~ts
// 9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08 is the sha256 of 'test'
const userWallet = VocdoniSDKClient.generateWalletFromData(['user1', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08']);
console.log(userWallet) // address is 0x8AF1b3EDB817b5854e3311d583905a3421F49829
~~~

[blockchain]: /protocol#11-the-blockchain
[contact]: https://chat.vocdoni.io
[createAccount]: /sdk/reference/classes/VocdoniSDKClient#createaccount
[fetchAccountInfo]: /sdk/reference/classes/VocdoniSDKClient#fetchaccount
[collectFaucetTokens]: /sdk/reference/classes/VocdoniSDKClient#collectfaucettokens
[estimateElectionCost]: /sdk/reference/classes/VocdoniSDKClient#estimateelectioncost
[calculateElectionCost]: /sdk/reference/classes/VocdoniSDKClient#calculateelectioncost
[zk-census-proof]: /protocol/anonymity/zk-census-proof
[chat]: https://chat.vocdoni.io
[blind-signatures]: /protocol/Census/off-chain-csp#blind-signatures
[ballot-protocol]: /protocol/ballot-protocol
[voting-types]: /sdk/integration-details/voting-types
[election-states]: /protocol#election-lifecycle-states
[generate-random-wallet]: /sdk/reference/classes/VocdoniSDKClient#generaterandomwallet
[generate-wallet-data]: /sdk/reference/classes/VocdoniSDKClient#generatewalletfromdata
[maxCensusSize]: /sdk/reference/interfaces/IElectionParameters#maxcensussize
[zk-census-proof]: /protocol/anonymity/zk-census-proof