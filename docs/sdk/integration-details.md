
# SDK Integration Details

The tutorial covers the basics, but here are some details you'll need to consider when integrating the Vocdoni SDK into your application.

## Vocdoni Tokens 

Behind-the-scenes, Vocdoni is powered by a custom [blockchain][blockchain]. This component provides universal verifiability, but it also introduces some complexity. In order to distribute workload and verify transactions, our blockchain uses a digital "currency" of Vocdoni tokens that have no real-world value but help with load-balancing and spam reduction. Actions that update data on the blockchain, such as creating an election, incur a "cost." Integrators are responsible for ensuring that accounts creating elections have a sufficient balance of tokens.

:::info 
Casting a vote ***never*** requires Vocdoni tokens.
:::


### Initial Tokens

Because accounts cannot hold Vocdoni tokens before they are created, [`client.createAccount()`][createAccount] automatically requests tokens from the blockchain. In **production environments**, only enough tokens to create the account itself are provided. Moving forward, more tokens must be requested in order to create elections.
In **non-production environments**, a large amount of tokens is automatically supplied to accounts when they are created. You can create many elections in the `STG` and `DEV` environments before worrying about maintaining a balance.

### Checking Token Balance

From this point on, you can check your account balance with [`client.createAccount()`][createAccount] or [`client.fetchAccountInfo()`][fetchAccountInfo]. This provides all the information associated with the account, including the balance.


#### Election Cost

The token cost of a voting process is not constant; it is determined by many factors. After creating an election, but before publishing it to the blockchain, you should get a sense of the cost of the operation in order to ensure your account has sufficient balance. There are two methods to do this: [`client.estimateElectionCost()`][estimateElectionCost] quickly provides a decent estimate of the cost and can be useful for writing UI components. [`client.calculateElectionCost()`][calculateElectionCost] makes a time-intensive API call but provides an exact figure. It is helpful to use this directly before publishing the election to ensure it can be published.

~~~ts
const price = await client.estimateElectionCost(election); // Should be an UnpublishedElection with a maxCensusSize
console.log(price); // shows the estimated price
~~~

:::note estimate election cost
In order to estimate the cost of an election quickly, the election must be created with a specified [`maxCensusSize`][maxCensusSize]. This restricts the number of users who can enter the census but enables quick election cost estimation. If you want an unlimited census size, just use `calculateElectionCost` instead.
:::

~~~ts
const electionCost = await client.calculateElectionCost(election);
const info = await client.createAccount();
if (info.balance < electionCost) {
  console.log('Need to request more tokens');
}
~~~


### Requesting Tokens: The Faucet

The main way for users to gain tokens in a production environment is via a faucet, a free provider of tokens. A faucet enables users to generate a `faucetPackage`. This package is essentially a set of instructions; it must still be sent to the blockchain in order to request the actual tokens.

:::tip users & tokens
Some systems require election administrators to request tokens manually for their elections. In other systems, integrators may handle token requests automatically on behalf of their users. This can be done manually or with a custom faucet implementation. [Reach out](https://chat.vocdoni.io) for help with this.
:::

#### DEV & STG

In development and staging environments, the faucet functionality is handled automatically. Behind-the-scenes, `createAccount` requests a large amount of tokens from a development faucet. These tokens should last a while, but once the account balance is low, more tokens must be requested. This can be done with 

~~~ts
await client.collectFaucetTokens();
~~~

This method uses the default development faucet to generate a `faucetPackage` requesting new tokens. It can be used any number of times. In development environments, this is all that needs to be done! 

#### PROD
Production environments require more hands-on generation of a `faucetPackage`. First you need to identify the **account address** you are requesting tokens for. 

~~~ts
console.log((await client.fetchAccountInfo()).address);
~~~

There are multiple ways to request a faucet package:

- Use https://app.vocdoni.io/faucet, our web-based faucet that requires users to login with some form of existing account (google, github, social media). It provides a large amount of tokens to the given address but limits the number of times a single user can request tokens per week.
- Reach out via [discord](https://chat.vocdoni.io) to request tokens sent to your account address. 
- If you are an integrator who needs to manage your own faucet to provide tokens to users automatically, ask us for help with creating a custom faucet.

All of these faucets should provide you with a base-64 string containing the necessary information to request tokens from the blockchain with `collectFaucetTokens`. Note that each faucet package can only be used once.

~~~ts
await client.collectFaucetTokens("<b64string>")
~~~


:::note collect faucet tokens
In production environments, the `collectFaucetTokens` method requires a `faucetPackage` to be provided. In development and stage, this is optional as a package is generated automatically by default.
:::



## Census Types

A census is a list of voters who are eligible to vote in a given election. There are multiple ways to define a census with Vocdoni, each with different privacy and verifiability considerations. The [census types][census] are defined at a protocol level and include [on-chain][on-chain], [off-chain Merkle tree][off-chain], and [off-chain Credential Service Provider][csp]. 

The census type is selected from the SDK by using a [`census`][census-class] of that type when creating an election. The SDK [census types][census-class-hierarchy] correspond to the three protocol-level census types according to the following table:

| SDK Census Type | Protocol Type | weighted  | anonymous | [`CensusType`][census-type] |
|---|---|---|---|---|---|
| [`CSPCensus`][csp-census]  | Off-chain CSP | no | optional | `CSP`
| [`PublishedCensus`][published-census] -> [`TokenCensus`][token-census]  | On-chain | yes | no | `WEIGHTED`
| [`PublishedCensus`][published-census] -> [`TokenCensus`][token-census]  | On-chain | yes | yes |`ANONYMOUS`
| [`OffchainCensus`][off-chain-census] -> [`PlainCensus`][plain-census]  | Off-chain tree | no | no | `WEIGHTED`
| [`OffchainCensus`][off-chain-census] -> [`PlainCensus`][plain-census] | Off-chain tree | no | yes | `WEIGHTED`
| [`OffchainCensus`][off-chain-census] -> [`WeightedCensus`][weighted-census]  | Off-chain tree | yes | no |`ANONYMOUS`
| [`OffchainCensus`][off-chain-census] -> [`WeightedCensus`][weighted-census]  | Off-chain tree | yes | yes |`ANONYMOUS`

:::note 
A weighted census is one where some voters' votes have more power than others, set by a `weight` value. `PlainCensus` is described by a `WEIGHTED` `CensusType` because it technically is a weighted census, with every weight set to `1`.
:::

### Off-chain Merkle Tree

This is the most basic census type, is the default when creating an election, and is the one used in the SDK tutorial. In this scheme, the census is essentially a basic list of voter, with some behind-the-scenes cryptography. With an off-train tree census, voters are added as wallet addresses using [`census.add()`][census-add]. 

Off-chain tree census can be created as [`PlainCensus`][plain-census] or [`WeightedCensus`][weighted-census]. If a weighted census is used, voters can be assigned a weight which proportionally determines the power of their vote: 

~~~js
weightedCensus.add([
    {
      key: address1,
      weight: BigInt(1),
    },
    {
      key: address2,
      // This voter will have 100x the vote power as voter1. This is not a very equitable election.
      weight: BigInt(100),
    },
  ]);
~~~

#### Anonymous off-chain tree

For an [anonymous][zk-census-proof] election, the election must be created with the option 
~~~ts
electionType: {
  anonymous: true
}
~~~

In this case, votes must also be cast as [`AnonymousVote`](/sdk/reference/classes/AnonymousVote)s. The cryptography needed for anonymous voting is very different from typical voting, but this is all handled by the SDK without any other changes needed.


### Off-chain Credential Service Provider

A Credential Service Provider is an external component that serves as a validator for the identities of voters. An example of this could be a service set up by a municipal government that validates if a given voter is registered, or a forum that validates if a given voter has an active account. With this type of census, voters show proof of registry and receive a cryptographic package from the CSP allowing them to cast a vote. 

Because using an off-chain CSP census requires a custom CSP for each use-case, it is not ready to use out-of-the-box. If you are interested in setting up a CSP election, please [reach out to us][chat] for help.

CSP census elections have the option of full-anonymity with the use of [Blind Signatures][blind-signatures]. 

If a CSP is set up for a census, minor modifications are needed on the client side. For creating a CSP based election, a `CspCensus` has to be used with the CSP's public key and URL as parameters. 

~~~ts
const election = Election.from({
  title: 'Election title',
  description: 'Election description',
  // a header image for your process (this is for example purposes; avoid using random sources)
  header: 'https://source.unsplash.com/random/2048x600',
  endDate: new Date('2023-01-23 23:23:23'),
  census: new CspCensus(CSP_PUBKEY, CSP_URL),
})
// The election can be created the same way from here...
~~~

The next step is requesting a blind signature from the CSP for each voter before casting their vote. 

This is done with [`client.cspStep`](/sdk/reference/classes/VocdoniSDKClient#cspstep). This function sends an API call to the given CSP to perform an "authentication step" predefined by whoever sets up the CSP. A step could be validating a name, sending an authentication token, or anything else. Non-final steps should return a `ICspIntermediateStepResponse` object containing an `authToken` and arbitrary `response` data. 
Once the predefined set of steps has been performed successfully, the final step should return a `ICspFinalStepResponse` object containing a `token` registered to the verified voter.

~~~ts
// Auth steps for the CSP (can vary of the type of the CSP)
const step0 = (await client.cspStep(0, ['Name test'])) as ICspIntermediateStepResponse;
const step1 = (await client.cspStep(
  1,
  [step0.response.reduce((acc, v) => +acc + +v, 0).toString()],
  step0.authToken
)) as ICspFinalStepResponse;
~~~

Once this token has been received, the client requests blind signature from the CSP and then uses this signature to cast vote. Because this signature is blinded, the vote cannot be traced back to the voter address or verification information.

~~~ts
// Get the blind signature
const signature = await client.cspSign(signer.address, step1.token);

// Get the vote based on the signature
const vote = client.cspVote(new Vote([index % 2]), signature);

// Vote
const voteId = await client.submitVote(vote);
~~~

### On-chain Census

An on-chain census is one whose voters are defined by holding tokens on the Ethereum blockchain. Currently the following token types are supported:
- ERC20
- ERC721
- ERC777
- POAP
- Gitcoin Passport Score
- Gitcoin Passport Shields (coming soon)
- ERC1155 (coming soon)

This census type is supported by our [Census3](https://github.com/vocdoni/census3) service which serves as a bridge between Ethereum and clients. 

<!-- TODO flesh out the on-chain census section -->


## Election Types

The Vocdoni [Ballot Protocol][ballot-protocol] provides a flexible way to define many types of election. Check out [Voting Types][voting-types] for an overview of the possibilities, including ranked-choice, quadratic, weighted, and approval voting.


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


## Other SDK functionalities

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
[census]: /protocol/census
[on-chain]: /protocol/census#on-chain-based-census-ethereum-erc-20
[off-chain]: /protocol/census#off-chain-tree-based-census-merkle-tree
[csp]: /protocol/census#off-chain-csp-based-census-credential-service-provider
[census-class]: /sdk/reference/classes/Census
[census-class-hierarchy]: /sdk/reference/classes/Census#hierarchy
[census-type]: /sdk/reference/enums/CensusType
[csp-census]: /sdk/reference/classes/CSPCensus
[published-census]: /sdk/reference/classes/PublishedCensus
[token-census]: /sdk/reference/classes/TokenCensus
[off-chain-census]: /sdk/reference/classes/OffchainCensus
[plain-census]: /sdk/reference/classes/PlainCensus
[weighted-census]: /sdk/reference/classes/WeightedCensus
[census-add]: /sdk/reference/classes/PlainCensus#add
[zk-census-proof]: /protocol/anonymity/zk-census-proof
[chat]: https://chat.vocdoni.io
[blind-signatures]: /protocol/Census/off-chain-csp#blind-signatures
[ballot-protocol]: /protocol/ballot-protocol
[voting-types]: /sdk/voting-types
[election-states]: /protocol#election-lifecycle-states
[generate-random-wallet]: /sdk/reference/classes/VocdoniSDKClient#generaterandomwallet
[generate-wallet-data]: /sdk/reference/classes/VocdoniSDKClient#generatewalletfromdata
[maxCensusSize]: /sdk/reference/interfaces/IElectionParameters#maxcensussize