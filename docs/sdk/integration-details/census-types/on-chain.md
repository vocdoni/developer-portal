# On-chain Token-Based Census

An on-chain census is one whose voters are defined by holding tokens on the Ethereum blockchain. Currently the following token types are supported:
- ERC20
- ERC721
- ERC777
- POAP
- Gitcoin Passport Score
- Gitcoin Passport Shields (coming soon)
- ERC1155 (coming soon)

:::warning token selection
While all of the above token types are supported, the recommended use-case for a token-based census is a custom token created specifically to govern an organization. It is theoretically possible to create a census with a popular token such as ETH, but the number of token-holders and frequency of transactions for such a token make census generation impractical. 
:::


This census type is supported by our [Census3](https://github.com/vocdoni/census3) service which serves as a bridge between Ethereum and clients, collecting token-holder data and generating census trees. 


## Tutorial

The on-chain census requires some extra setup, as censuses depend on indexing token balances from a public blockchain. Luckily the SDK provides a client to the Census3 service which keeps track of token balances and translates blockchain data to a straightforward census of voters. This tutorial explains how to set up your environment and use the [VocdoniCensus3Client](/sdk/reference/classes/vocdonisdkclient).

### Setup
The first consideration when setting up an on-chain census is which token you will use to validate voters. This section will explain how to create a token for testing and register that token to the census3 service.

#### Creating a Token

:::tip existing token
If you already have a token that represents your organization, feel free to skip this step and register your token with the census3 service.
:::

The easiest way to start using and testing the census3 service is to create a testing token on a testnet (a blockchain network built for testing integrations, where tokens have no real value). We will use a free service to generate a token on the [Sepolia](https://www.alchemy.com/overviews/sepolia-testnet) testnet. Before you can generate a token, however, there are two steps:

- Make sure you have a wallet such as [Metamask](https://metamask.io/) and an account to use for testing. 
- Request some Sepolia ETH from the [Sepolia faucet](https://www.alchemy.com/faucets/ethereum-sepolia). You need testnet Ethereum to "pay" for transactions on Sepolia. 

You can use [Coin Factory](https://coinfactory.app/generator/erc20/standard-token) to create a standard token. For testing purposes the name, symbol, and initial supply of the token do not matter. After pressing "create token" and signing with you metamask account, make sure to open the token's etherscan page and copy its address.

#### Registering Your Token
With a token created, you now need to register this token to the census3 service. You can set up a fresh Vocdoni SDK environment as described in the [tutorial](/sdk/tutorial).

For the sake of testing, let's simply hard-code some information about the token we want to use. We need the address of the token you just published as well as the public Chain ID for the testnet (or mainnet) you are using. Sepolia's chainID is `11155111`. We also need the token type, which in this case is `erc20`. 

~~~ts
const myToken = {
  address: '0x...',
  chainID: 11155111,
  type: 'erc20',
};
~~~

In addition to creating a normal VocdoniSDKClient, you also need a [`VocdoniCensus3Client`](/sdk/reference/classes/vocdonicensus3client). Use the same environment as you would for the standard SDK client, in this case Staging for a stable testing environment.

~~~ts
const census3client = new VocdoniCensus3Client({ env: EnvOptions.STG });
~~~

Make sure the Sepolia network is supported by the census3 service with [`getSupportedChains`](/sdk/reference/classes/vocdonicensus3client#getsupportedchains). Sepolia should always be supported, but if it is not, you need to create a token on a chain that is.

~~~ts
let chains = await census3Client.getSupportedChains();
let supportsChain = false;
for (let chain of chains) {
  if (chain.chainID == myToken.chainID) {
    supportsChain = true;
  }
}
~~~

Similarly, before registering the token, you can double-check whether it already is supported with [`getSupportedTokens`](/sdk/reference/classes/vocdonicensus3client#getsupportedtokens). Here we convert our target token address to lowercase because it is represented by a case-insensitive hex-string. If the token is already supported (not possible if the token is brand-new), you can skip the next step.

~~~ts
let tokens = await census3Client.getSupportedTokens();
let supportsToken = false;
for (let token of tokens) {
  if (token.ID.toLowerCase() === myToken.address.toLowerCase()) {
    supportsToken = true;
  }
}
~~~

Now we can register the token. 

~~~ts
await census3Client.createToken(myToken.address, myToken.type, myToken.chainID);
~~~

:::warning warning
The [`createToken`](/sdk/reference/classes/vocdonicensus3client#createtoken) function asks the census3 service to add the token to its registry, but this does not mean the token is ready to use.
:::

Now that the token is registered, we can request the token info from the census3 service. Before using this token to create a census or getting information about the number of token-holders, however, we need to wait for the census3 service to peruse the blockchain and index the entire history of the token. Even with a brand new token this can take some time in the range of 30 minutes. `info.status` reports whether the token has synced and the syncing progress percentage.

~~~ts
let status = (await census3Client.getToken(myToken.address, myToken.chainID)).status;
if (!status.synced) {
  console.log('Token %s is syncing. Progress %d%. Try again later.', myToken.address, status.progress);
  return;
}
~~~

### Creating the Census
Once a token has been registered and is synced, the steps above never have to be performed again. Simple censuses can be created with `createTokenCensus`: this creates the 'default' census, in which every token-holder has a weighted vote according to their token balance. 

~~~ts
const census = await census3Client.createTokenCensus(myToken.address, myToken.chainID);
~~~

#### Complex Census
It is possible to create a census with more complex inclusion criteria, such as holders of two different tokens. In order to do this, each token must individually be supported by the census3 service. 
The first step is to create a 'strategy' with `census3Client.createStrategy`. This strategy ID is then passed to `census3Client.createCensus` to generate the census itself.

`createStrategy` takes a `predicate` string which defines the logical operations representing inclusion criteria for the census strategy. This page will be updated soon with a guide for creating a predicate string for this use case.

### Election & Voting
Once a census has been created, the entire process is identical to the off-chain tree census process.
1. Create account
2. Create election
3. Publish election & wait for it to be posted
4. Cast votes
5. Count votes

The one difference here is how voter wallets are accessed. Because we are using a token-based census, voters are expected to have custody of their private keys. In a web application, you would need to ask users to connect with a wallet provider (like Metamask) to provide the public key associated with their token-holder account and to sign their vote transaction. You can see how we implemented this in our [vite-react example](https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c9440d96d7cc5b3ac5e81e9350794660d7/examples/vite-react-app/src/containers/App.tsx#L185). 

For the purposes of this tutorial, we can just manually import the private key of the **testing-only** wallet we used to generate the token initially. You could also make other testing wallets and send some of your testing token to them so you can use multiple voters with different weights.

~~~ts
// Private-keys copied from your wallet provider. NEVER do this with an account you use to hold real funds.
const voters = ['...', '...'];
for (const voter of voters) {
    const wallet = new Wallet(voter);
    const client = new VocdoniSDKClient({ env: EnvOptions.STG, wallet: wallet, electionId: electionId });
    ...
    // Create the vote and cast is as you would with an off-chain census
~~~



## Anonymity

Anonymity may seem impossible for token-based censuses, as votes are weighted based on public token balance values. However, we have been able to design a sufficiently-anonymous approach by rounding token values, which you can read about on our [blog](https://blog.vocdoni.io/anonymous-voting-token-based). This form of anonymity has some drawbacks and theoretical weaknesses that users should be aware of, but it provides a strong layer of anonymity under the right conditions. 

All you need to do to create an anonymous token-based census is to set the `anonymous` parameter to `true`:
~~~ts
const census = await census3Client.createTokenCensus(myToken.address, myToken.chainID, true);
~~~

You can then use this census with an anonymous election:
~~~ts
electionType: { anonymous: true },
~~~

Voting proceeds as normal and the anonymity is applied.