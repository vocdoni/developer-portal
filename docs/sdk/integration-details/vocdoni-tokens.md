# Vocdoni Tokens

Behind-the-scenes, Vocdoni is powered by a custom [blockchain][blockchain]. This component provides universal verifiability, but it also introduces some complexity. In order to distribute workload and verify transactions, our blockchain uses a digital "currency" of Vocdoni tokens that have no real-world value but help with spam reduction and self-sustainability. Actions that update data on the blockchain, such as creating an election, incur a "cost." Integrators are responsible for ensuring that accounts creating elections have a sufficient balance of tokens.

:::info 
Casting a vote ***never*** requires Vocdoni tokens.
:::


## Initial Tokens

Because accounts cannot hold Vocdoni tokens before they are created, [`client.createAccount()`][createAccount] automatically requests tokens from the blockchain. In **production environments**, only enough tokens to create the account itself are provided. Moving forward, more tokens must be requested in order to create elections.
In **non-production environments**, a large amount of tokens is automatically supplied to accounts when they are created. You can create many elections in the `STG` and `DEV` environments before worrying about maintaining a balance.

## Checking Token Balance

From this point on, you can check your account balance with [`client.createAccount()`][createAccount] or [`client.fetchAccountInfo()`][fetchAccountInfo]. This provides all the information associated with the account, including the balance.


### Election Cost

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


## Requesting Tokens: The Faucet

The main way for users to gain tokens in a production environment is via a faucet, a free provider of tokens. A faucet enables users to generate a `faucetPackage`. This package is essentially a set of instructions; it must still be sent to the blockchain in order to request the actual tokens.

:::tip users & tokens
Some systems require election administrators to request tokens manually for their elections. In other systems, integrators may handle token requests automatically on behalf of their users. This can be done manually or with a custom faucet implementation. [Reach out](https://chat.vocdoni.io) for help with this.
:::

### DEV & STG

In development and staging environments, the faucet functionality is handled automatically. Behind-the-scenes, `createAccount` requests a large amount of tokens from a development faucet. These tokens should last a while, but once the account balance is low, more tokens must be requested. This can be done with 

~~~ts
await client.collectFaucetTokens();
~~~

This method uses the default development faucet to generate a `faucetPackage` requesting new tokens. It can be used any number of times. In development environments, this is all that needs to be done! 

### PROD
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