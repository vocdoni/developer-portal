# SDK Tutorial

This tutorial will show you how to get your environment set up, start using the SDK, and create and vote in an election. We will be using typescript.

<!-- TODO add example link once it is merged -->
<!-- The code for this tutorial is available [here](link-todo).  -->

### Prerequisites

You'll need a working [nodejs](https://nodejs.org) environment, but other than that, you're
free to use any package manager (either npm, yarn, pnpm...). Let's start by creating a project and adding the SDK:

~~~bash
# with yarn
yarn add @vocdoni/sdk
# with npm
npm i @vocdoni/sdk
# with pnpm
pnpm add @vocdoni/sdk
~~~

> This project has been bundled into many formats in order for you to
import it based on the environment you're using it. When importing it via
`@vocdoni/sdk` it will choose a version based on your current environment
(commonjs or esm). There's also another UMD version which can be accessed via
`@vocdoni/sdk/umd` in case you need it.

<!-- add package.json -->

## Overview 

The following are the main steps we need to implement:
- Connecting a client to the Vocdoni network
- Creating a census with some random members
- Creating an election
- Sending votes
- Checking the election results


## Client

The first step will be connecting to a Vocdoni [Gateway][gateway] Node. We can do this easily with the [VocdoniSDKClient][vocdoniSDKClient]. The client allows us to access all of the Vocdoni API calls.

In order to create a client, we need a `wallet`, an envelope that holds a cryptographic key and enables our client to sign transactions for the blockchain. We'll be generating a random wallet with the [ethers](https://github.com/ethers-io/ethers.js) signer.

We also need to define which Vocdoni [environment][environment] we will connect to. Staging is the **recommended** environment for most testing use cases, since the `dev` environment is more subject to blockchain resets and downtimes than the `stg` one.

<!-- TODO explain usage of the faucet -->


**src/client.ts**
~~~ts
export const getDefaultClient = () => {
  const wallet = Wallet.createRandom();
  const client = new VocdoniSDKClient({
    env: EnvOptions.STG,
    wallet: wallet,
  });

  return { wallet, client };
};
~~~

Now that we have a client connected to the `STG` environment, we need to register its wallet to the blockchain with [createAccount()](/sdk/reference/classes/VocdoniSDKClient#createaccount). Parameters here are optional, but let's define a name and description.

:::tip 
An `Account` can represent an organization hosting a voting process. There are many [parameters](/protocol/data-schemes/organization) we can optionally add, like `logo` or even arbitrary `meta`. This can all be displayed on a custom frontend implementation. Using `createAccount()` on an account that already exists will fetch the account info from the blockchain.
:::

**src/account.ts**
~~~ts
export const createAccount = (client: VocdoniSDKClient) => {
  return client
    .createAccount({
      account: new Account({
        languages: ['en'],
        name: {
          default: 'Account name',
        },
        description: 'Description of the account',
        logo: 'https://logo.io',
      }),
    })
    .then(() => client.fetchAccountInfo().then(info => console.log(info)));
};
~~~


## Census

With our client created and registered to the Vochain, the next step is to create a [census](/sdk/reference/classes/census) of voters. The protocol enables many [types of census][protocol-census]. For our purposes it's easiest to use a [plain census][plaincensus], the simplest form of [offchain census][offchain-census].

We can create a random wallet to represent each voter just like we did for the client, and then we can register each voter's address to the census. The voter wallets have to be saved in order to sign their individual votes.


**src/census.ts**
~~~ts
export async function createCensus () {
  const census = new PlainCensus()

  // Create a list of random voters, register them to the census
  let voters: Wallet[] = []
  for (let i = 0; i < 5; i++) {
    voters.push(Wallet.createRandom())
    census.add(await voters[i].getAddress())
  }

  return { census, voters }
}
~~~

## Election

Creating a basic election is easy with [Election.from()][election-from]. We just need to specify the title and description, a header photo, an end date, and the census we created earlier. We can specify some `electionType` options, but this is not necessary as our election is using the default options. 

**src/election.ts**
~~~ts
export const createElection = (census: PlainCensus): UnpublishedElection => {
  const election: UnpublishedElection = Election.from({
    title: 'Election title',
    description: 'Election description',
    header: 'https://source.unsplash.com/random',
    endDate: new Date().getTime() + 100000,
    census,
  });
  ...
~~~
  
 Questions can be added to an election with [addQuestion][addQuestion]. This is a single-choice (binary) election with only one question. 

**src/election.ts**
~~~ts
...
  election.addQuestion('This is a title', 'This is a description', [
    {
      title: 'Option 1',
      value: 0
    },
    {
      title: 'Option 2',
      value: 1
    }
  ])

  return election
}
~~~

Once our election is defined, it has to be officially created on the blockchain with [`client.CreateElection()`][createElection]. This will also provide us with a unique `electionID`. We want to use [`client.SetElectionID()`][setElectionID] so that the client knows which voting process to submit votes to. 

:::info 
Now that we have the `electionId`, we can also print out a link to view our voting process on the Vocdoni blockchain [explorer][explorer]! The explorer unlocks the universal verifiability of Vocdoni's protocol- even for this small example, the results of this election are verifiable by any observer and cannot be altered. 
:::

**src/election.ts**
~~~ts
const waitForElectionReady = (client: VocdoniSDKClient, electionId: string): Promise<string> => {
  return new Promise(f => setTimeout(f, 5000))
    .then(() => client.fetchElection(electionId))
    .then(election => {
      if (election.status !== ElectionStatus.ONGOING) {
        return waitForElectionReady(client, electionId);
      }
      return Promise.resolve(electionId);
    });
};
~~~


Publishing an election registers a transaction to the blockchain. This means we have to wait for the next block to process in order to ensure the transaction was successful. Here we use [client.fetchElection()][fetchElection] to fetch the election info from the blockchain, given our `electionId`. This allows us to wait until the election status is `ONGOING`, which means the election has been successfully published and has begun.

**src/election.ts**
~~~ts
export const publishElection = (client: VocdoniSDKClient, election: UnpublishedElection): Promise<string> => {
  return client.createElection(election).then(electionId => {
    client.setElectionId(electionId);
    console.log('Election created!', electionId);
    console.log('View this election at ' + client.explorerUrl + '/processes/show/#/' + electionId);
    console.log('Waiting for election to be published...');
    return waitForElectionReady(client, electionId);
  });
};
~~~

## Voting

With the election published, it's time to vote. We can use each of the wallets that we saved earlier to cast a unique vote for that imaginary voter. We do this by first setting `client.wallet = voter`, telling the client which wallet to use for bundling and submitting this vote. 

The we create the vote itself. A [Vote][vote] is simply a list of values whose form depends on the type and number of questions in the election.

:::tip 
For more info on vote types, see our section on the [Ballot Protocol][ballot-protocol]
:::

Then we can simply call [`client.submitVote()`][submitVote], and the SDK handles the creation, signing, and submission of the vote package. It returns a `voteId` which can be used to ensure the vote was correctly counted. 

**src/vote.ts**
~~~ts
export const castVotes = (electionId: string, voters: Wallet[]) => {
  var votePromises = [];
  for (const voter of voters) {
    const client = new VocdoniSDKClient({ env: EnvOptions.STG, wallet: voter, electionId: electionId });
    // Create a vote for option 0 or 1
    const vote = new Vote([Math.round(Math.random())]);
    votePromises.push(
      client.submitVote(vote).then(voteId => {
        console.log('Vote sent! Vote id: ', voteId);
        console.log('Verify vote at ' + client.explorerUrl + '/verify/#/' + voteId);
      })
    );
  }
  return Promise.all(votePromises);
};
~~~

## Results

All that's left is checking the results of this election! [`client.fetchElection()`][fetchElection] returns an object with a simple array of results values- it's up to you to decide how to display them. 

:::tip 
Note that the results are available immediately because this election was configured with `secretUntilTheEnd=false`
:::


**src/vote.ts**
~~~ts
export const countVotes = (client: VocdoniSDKClient) => {
  return client.fetchElection().then(election => {
    console.log('Election results: ');
    election.questions.forEach(question => {
      question.choices.forEach(choice => {
        console.log(choice.title.default + ': ' + choice.results);
      });
    });
  });
};
~~~

## Running the code

Here's a program that combines all the above functions into a working prototype:

**src/index.ts**
~~~ts
async function main () {
  console.log('Initializing client...');
  const { client } = getDefaultClient();

  console.log('Creating account...');
  await createAccount(client);

  console.log('Creating census with some random wallets...');
  const { census, voters } = await createCensus();

  console.log('Creating election...');
  const election = createElection(census);
  const electionId = await publishElection(client, election);

  console.log('Voting...');
  await castVotes(electionId, voters);

  console.log('Getting results...');
  await countVotes(client);
}
main();
~~~

All we have to do is run 
~~~bash
tutorial $ yarn start
yarn run v1.22.17
$ ts-node src/index.ts
Initializing client...
Creating account...
{
  account: Account {
    _languages: [ 'en' ],
    _name: { default: 'Account name' },
    _description: { default: 'Description of the account' },
    _feed: { default: '' },
    _header: '',
    _avatar: '',
    _logo: 'https://logo.io',
    _meta: []
  },
  address: '73b3e1ff1602c6ece34f9b75aa86f5f90b41a209',
  nonce: 0,
  balance: 50,
  electionIndex: 0,
  infoURL: 'ipfs://bafybeif5mbhhwuju2pyd54bxhn3tdsj6m5cukx6f5xvchqfh2wvzkpbjpy',
  metadata: {
    version: '1.0',
    languages: [ 'en' ],
    name: { default: 'Account name' },
    description: { default: 'Description of the account' },
    newsFeed: { default: '' },
    media: { logo: 'https://logo.io' },
    meta: {}
  },
  sik: 'c5321163e98108424f5c25e55980a1ea4811029c1ff72cae95f113dfc95fac22'
}
Creating census with some random wallets...
Creating election...
Election created! 4ae20a8eb4ca73b3e1ff1602c6ece34f9b75aa86f5f90b41a209020000000000
View this election at https://stg.explorer.vote/processes/show/#/4ae20a8eb4ca73b3e1ff1602c6ece34f9b75aa86f5f90b41a209020000000000
Waiting for election to be published...
Voting...
Vote sent! Vote id:  2fae8af3b02ec78af5a3bf06ec4aff1b7c000a1356a0aff1c07163da23f3d771
Verify vote at https://stg.explorer.vote/verify/#/2fae8af3b02ec78af5a3bf06ec4aff1b7c000a1356a0aff1c07163da23f3d771
Vote sent! Vote id:  8af200d25a159c9d862e84064a4d977df2b10ea23ffb32ddc2de18b9142df0b6
Verify vote at https://stg.explorer.vote/verify/#/8af200d25a159c9d862e84064a4d977df2b10ea23ffb32ddc2de18b9142df0b6
Vote sent! Vote id:  3cae37ec5c49ce338bcbc40b5102cf33bf9304c19c3f5e650c7c469b72664fc8
Verify vote at https://stg.explorer.vote/verify/#/3cae37ec5c49ce338bcbc40b5102cf33bf9304c19c3f5e650c7c469b72664fc8
Vote sent! Vote id:  937911458a52393b75f1428ec1613d3a481112491c51bfcc033e2f0009341022
Verify vote at https://stg.explorer.vote/verify/#/937911458a52393b75f1428ec1613d3a481112491c51bfcc033e2f0009341022
Vote sent! Vote id:  a6e4f4fe0f0e56d41fc21c62473718c9fbbe4c451a6fd9c19dbfca1fef0dac8c
Verify vote at https://stg.explorer.vote/verify/#/a6e4f4fe0f0e56d41fc21c62473718c9fbbe4c451a6fd9c19dbfca1fef0dac8c
Getting results...
Election results:
Option 1: 2
Option 2: 3
✨  Done in 45.08s.
~~~

You can even check out the [election I created](https://stg.explorer.vote/processes/show/#/4ae20a8eb4ca73b3e1ff1602c6ece34f9b75aa86f5f90b41a209020000000000) on the blockchain explorer. 

Now that you've created a basic example with the SDK, you can integrate this functionality into your own applications. For more details, check out the [reference documentation][reference] and the more extensive [examples][examples]

[gateway]: /protocol#12-gateways
[vocdoniSDKClient]: /sdk/reference/classes/VocdoniSDKClient
[environment]: /sdk/integration-details#environment
[election-from]: /sdk/reference/classes/Election#from
[plaincensus]: /sdk/reference/classes/plaincensus
[protocol-census]: /protocol/census
[offchain-census]: /sdk/reference/classes/offchaincensus
[addQuestion]: /sdk/reference/classes/UnpublishedElection#addquestion
[explorer]: https://stg.explorer.vote
[createElection]: /sdk/reference/classes/VocdoniSDKClient#createelection
[setElectionID]: /sdk/reference/classes/VocdoniSDKClient#setelectionid
[fetchElection]: /sdk/reference/classes/VocdoniSDKClient#fetchelection
[vote]: /sdk/reference/classes/vote
[submitVote]: /sdk/reference/classes/VocdoniSDKClient#submitvote
[reference]: /sdk/reference/modules
[examples]: https://github.com/vocdoni/vocdoni-sdk/blob/main/examples
[ballot-protocol]: /protocol/ballot-protocol