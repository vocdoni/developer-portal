# Vocdoni SDK 

The Vocdoni SDK is a convenient way to interact with the Vocdoni Protocol through the [API](/vocdoni-api), allowing anyone to create, manage and participate in voting processes and collective decision-making. The SDK is the primary mode by which developers should interface with Vocdoni - if you think the SDK is missing functionality you need, please [get in touch][https://chat.vocdoni.io]. 

The SDK is documented with an auto-generated [reference](/sdk/reference/election)

[SDK Overview][sdk] | [SDK Reference][sdk-reference] | [Tutorials][sdk-tutorials]


See [examples](#examples) for more examples.

### Disclaimer

The Vocdoni SDK and the underlying API is WIP. Please beware that it can be broken
at any time if the release is `alpha` or `beta`. We encourage to review this
repository for any change.

## Tutorial

This tutorial will show you how to get your environment set up, start using the SDK, and create and vote in an election. We will be using typescript.

The code for this tutorial is available [here](link-todo). 

#### Prerequisites

You'll need a working [nodejs] environment, but other than that, you're
free to use any package manager (either npm, yarn, pnpm...). Let's start by creating a project and adding the SDK:

~~~bash
# with yarn
yarn add @vocdoni/sdk
# with npm
npm i @vocdoni/sdk
# with pnpm
pnpm add @vocdoni/sdk
~~~

<!-- add package.json -->

### Overview 

The following are the main steps we need to implement:
- Connecting a client to the Vocdoni network
- Creating a census with some random members
- Creating an election
- Sending votes
- Checking the election results


### Client

The first step will be connecting to a Vocdoni [Gateway](/protocol/overview#gateway) Node. We can do this easily with the [VocdoniSDKClient](/sdk/reference/VocdoniSDKClient). 

In order to create a client, we need a `wallet`, an envelope that holds a cryptographic key and enables our client to sign transactions for the blockchain. We'll be generating a random wallet with the [ethers](https://github.com/ethers-io/ethers.js) signer.

We also need to define which Vocdoni [network](link-todo) we will connect to. Staging is the **recommended** environment for most testing use cases, since the `dev` environment is more subject to blockchain resets and downtimes than the `stg` one.

**src/client.ts**
~~~js
import { EnvOptions, VocdoniSDKClient } from '@vocdoni/sdk'
import { Wallet } from '@ethersproject/wallet'

export const getDefaultClient = () => {
  const wallet = Wallet.createRandom()
  const client = new VocdoniSDKClient({
    env: EnvOptions.STG,
    api_url: 'https://api-stg.vocdoni.net/v2',
    wallet: wallet
  })

  return { wallet, client }
}
~~~

Now that we have a client connected to the `STG` environment, we need to register its wallet to the blockchain with [createAccount](/sdk/reference/VocdoniSDKClient#createAccount)

**src/index.ts**
~~~js
await client.createAccount();
~~~

### Census

With our client created and registered to the Vochain, the next step is to create a [census](/sdk/reference/Census) of voters. The protocol enables many [types of census](/protocol/03-Census). For our purposes it's easiest to use a [plain census](/sdk/reference/PlainCensus), the simplest form of [offchain census](/sdk/reference/OffchainCensus).

We can create a random wallet to represent each voter just like we did for the client, and then we can register each voter's address to the census. The voter wallets have to be saved in order to sign their individual votes.

**src/census.ts**
~~~js
import { PlainCensus } from '@vocdoni/sdk'
import { Wallet } from '@ethersproject/wallet'

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

### Election

Creating a basic election is easy with [Election.from()](/sdk/reference/Election#from). We just need to specify the title and description, a header photo, an end date, and the census we created earlier. We can specify some `electionType` options, but this is not necessary as our election is using the default options. 

**src/election.ts**
~~~js
export const createElection = (census: PlainCensus): UnpublishedElection => {
  const election: UnpublishedElection = Election.from({
    title: 'Election title',
    description: 'Election description',
    header: 'https://source.unsplash.com/random',
    endDate: new Date().getTime() + 100000,
    census,
    electionType: {
      // This is the default behavior
      secretUntilTheEnd: false
    }
  })
  ...
~~~
  
 Questions can be added to an election with [addQuestion](sdk/reference/ElectionAPI). This is a single-choice (binary) election with only one question. 

**src/election.js**
~~~js
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

Once our election is defined, it has to be officially created on the blockchain with [`client.CreateElection()`](/sdk/reference/VocdoniSDKClient#createElection). This will also provide us with a unique `electionID`. We want to use [`client.SetElectionID()`](/sdk/reference/VocdoniSDKClient#setElectionID) so that the client knows which voting process to submit votes to. 

> Now that we have the `electionId`, we can also print out a link to view our voting process on the Vocdoni blockchain [explorer](https://stg.explorer.vote)! The explorer unlocks the universal verifiability of Vocdoni's protocol- even for this small example, the results of this election are verifiable by any observer and cannot be altered. 

**src/election.ts**
~~~js
export const publishElection = (
  client: VocdoniSDKClient,
  election: UnpublishedElection
): Promise<void> => {
  return client.createElection(election).then(electionId => {
    client.setElectionId(electionId)
    console.log('Election created!', electionId)
    console.log(
      'View this election at https://stg.explorer.vote/processes/show/#/' +
        electionId
    )
    console.log('Waiting a bit to ensure we can vote...')
    return waitForElectionReady(client, electionId)
  })
}
~~~


Publishing an election registers a transaction to the blockchain. This means we have to wait for the next block to process in order to ensure the transaction was successful. Here we use [client.fetchElection()](/sdk/reference/VocdoniSDKClient#fetchElection) to fetch the election info from the blockchain, given our `electionId`. This allows us to wait until the election status is `ONGOING`, which means the election has been successfully published and has begun.

**src/election.ts**
~~~js
const waitForElectionReady = (
  client: VocdoniSDKClient,
  electionId: string
): Promise<void> => {
  return new Promise(f => setTimeout(f, 5000))
    .then(() => client.fetchElection(electionId))
    .then(election => {
      if (election.status !== ElectionStatus.ONGOING) {
        return waitForElectionReady(client, electionId)
      }
      return Promise.resolve()
    })
}
~~~

### Voting

With the election published, it's time to vote. We can use each of the wallets that we saved earlier to cast a unique vote for that imaginary voter. We do this by first setting `client.wallet = voter`, telling the client which wallet to use for bundling and submitting this vote. 

The we create the vote itself. A [Vote](/sdk/reference/Vote) is simply a list of values whose form depends on the type and number of questions in the election.

> For more info on vote types, see our section on the [Ballot Protocol](link-todo)

Then we can simply call `client.submitVote()`, and the SDK handles the creation, signing, and submission of the vote package. It returns a `voteId` which can be used to ensure the vote was correctly counted. 

**src/vote.ts**
~~~ts
export async function castVotes (voters: Wallet[], client: VocdoniSDKClient) {
  for await (const voter of voters) {
    client.wallet = voter;
    // Create a vote for option 0 or 1
    const vote = new Vote([Math.round(Math.random())]);
    await client.submitVote(vote).then(voteId => {
      console.log('Vote sent! Verify vote at https://stg.explorer.vote/verify/#/' + voteId);
    });
  }
}
~~~

### Results

All that's left is checking the results of this election! `client.fetchElection()` returns an object with a simple array of results values- it's up to you to decide how to display them. 

> Note that the results are available immediately because this election was configured with `secretUntilTheEnd=false`

**src/vote.ts**
~~~ts
export async function countVotes (client: VocdoniSDKClient) {
  client.fetchElection().then(election => {
    console.log('Election results: ' + election.results);
  });
}
~~~

### Running the code

Here's a program that combines all the above functions into a working prototype:

**src/index.ts**
~~~ts
import { getDefaultClient } from './client';
import { createElection, publishElection } from './election';
import { createCensus } from './census';
import { castVotes, countVotes } from './vote';

async function main () {
  console.log('Initializing client...');
  const { client } = getDefaultClient();

  console.log('Creating account...');
  await client.createAccount();

  console.log('Creating census with some random wallets...');
  const { census, voters } = await createCensus();

  console.log('Creating election...');
  const election = createElection(census);
  await publishElection(client, election);

  console.log('Voting...');
  await castVotes(voters, client);

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
Creating census with some random wallets...
Creating election...
Election created! 4ae20a8eb4ca2cc603e5fbc541ceba3fb8425f869394ac6241c6020000000000
View this election at https://stg.explorer.vote/processes/show/#/4ae20a8eb4ca2cc603e5fbc541ceba3fb8425f869394ac6241c6020000000000
Waiting a bit to ensure we can vote...
Voting...
Vote sent! Vote id:  6be5a47fe1c37b2691fab5b9ee4653c2f7374de6bb05d33fcc7dfd4ae6c561da
Verify vote at https://stg.explorer.vote/verify/#/6be5a47fe1c37b2691fab5b9ee4653c2f7374de6bb05d33fcc7dfd4ae6c561da
Vote sent! Vote id:  f007da6899dcadbe697ca8b32980be41b442e04b255562acd6de12798b52c93e
Verify vote at https://stg.explorer.vote/verify/#/f007da6899dcadbe697ca8b32980be41b442e04b255562acd6de12798b52c93e
Vote sent! Vote id:  9bc3ad4b05c76b81d9999bc16399892d4f5728726a6bd606362d56ace8810b61
Verify vote at https://stg.explorer.vote/verify/#/9bc3ad4b05c76b81d9999bc16399892d4f5728726a6bd606362d56ace8810b61
Vote sent! Vote id:  cec201b57edce735321e2dc15a9a4fd60b9bafbb09b86ec34c761c900f389e24
Verify vote at https://stg.explorer.vote/verify/#/cec201b57edce735321e2dc15a9a4fd60b9bafbb09b86ec34c761c900f389e24
Vote sent! Vote id:  231565ef29aec353583a1743a06483cd9e1506127301d732b294ea1d72654f34
Verify vote at https://stg.explorer.vote/verify/#/231565ef29aec353583a1743a06483cd9e1506127301d732b294ea1d72654f34
Getting results...
Election results: 1,4
✨  Done in 88.16s.
~~~

You can even check out the [election I created](https://stg.explorer.vote/processes/show/#/4ae20a8eb4ca2cc603e5fbc541ceba3fb8425f869394ac6241c6020000000000) on the blockchain explorer. 




This project has been bundled into many formats in order for you to
import it based on the environment you're using it. When importing it via
`@vocdoni/sdk` it will choose a version based on your current environment
(commonjs or esm). There's also another UMD version which can be accessed via
`@vocdoni/sdk/umd` in case you need it.

~~~js
// Will use the correct version based on your environment
import { VocdoniSDKClient } from '@vocdoni/sdk'
// UMD version
import SDK from '@vocdoni/sdk/umd'
~~~

You can see a working ESM example [in the examples folder][example-esm].

## SDK Usage

The entry point is the SDK constructor, it will instantiate a new client
connected to the API endpoint corresponding to `dev` (development) or `stg` (staging).

> For this readme examples, the signer bootstrapping will be ignored and you'll
just see a `signer` constant.

### Environment

#### Staging

This is the **recommended** environment for most testing use cases, since the
`dev` environment is more subject to blockchain resets and downtimes than
the `stg` one.

~~~ts
const client = new VocdoniSDKClient({
  env: EnvOptions.STG, // mandatory, can be 'dev' or 'stg'
  wallet: signer, // optional, the signer used (Metamask, Walletconnect)
})
~~~

#### Development

~~~ts
const client = new VocdoniSDKClient({
  env: EnvOptions.DEV, // mandatory, can be 'dev' or 'stg'
  wallet: signer, // optional, the signer used (Metamask, Walletconnect)
})
~~~

### Registering account

Before creating any new processes, you should register your account against
our blockchain (vochain):

~~~ts
(async () => {
  const info = await client.createAccount()
  console.log(info) // will show account information
})();
~~~

The `createAccount` method will try to fetch an existing account first and, if
it does not exist, it will register it against the blockchain.

The account to be registered will be the one of the signer specified in the
constructor.

You can safely use `createAccount` to fetch any account information, but you can
also decide to just fetch it, without falling back to an account registration:

~~~ts
(async () => {
  const info = await client.fetchAccountInfo()
  console.log(info) // shows info (only if account exists, otherwise throws error)
})();
~~~

The `createAccount` also accepts some information about the account:

~~~ts
(async () => {
  const account = new Account({
    languages: ['es'],
    name: {
      es: 'Nombre de la cuenta',
      default: 'Account name',
    },
    description: 'Description of the account',
    feed: 'https://feed.io',
    avatar: 'https://avatar.io',
    header: 'https://header.io',
    logo: 'https://logo.io',
    meta: [
      { key: 'twitter', value: 'https://twitter.com/@orghandle' },
      { key: 'someIpfsValue', value: 'ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k' },
      { key: 'someArbitraryData', value: [123, 456] },
      { key: 'someEmptyData', value: {} },
    ],
  });
  const info = await client.createAccount({ account })
})();
~~~

### Vocdoni tokens; faucet & balance

Accounts require Vocdoni tokens in order to be able to register against our
blockchain. The process above will automatically fetch some tokens from a faucet
**under development**. For production environments, you should contact us (Vocdoni)
for a byte64 string faucet, and specify it when creating your account:

~~~ts
(async () => {
  const info = await client.createAccount({
    faucetPackage: "<b64string>"
  })
})();
~~~

Accounts also require Vocdoni tokens in order to create new processes.

You can check the balance thanks to the previous methods (`createAccount` and/or
`fetchAccountInfo`) and, under development, you can request new tokens thanks
to the included faucet:

~~~ts
(async () => {
  const info = await client.createAccount()
  if (info.balance === 0) {
    await client.collectFaucetTokens()
  }
})();
~~~

> Note: the `collectFaucetTokens` method only works under development environment
> and for accounts with not enough tokens to create new processes.

### Creating a voting process

After you successfully registered your account against Vocdoni's blockchain, you
can start creating processes.

A process will require a census of people who will vote it. Let's start creating
it:

~~~ts
const census = new PlainCensus()
// accepts any ethereum-alike addresses
census.add(address)
census.add('0x0000000000000000000000000000000000000000')
(async () => {
  // random wallet, for example purposes
  census.add(await Wallet.createRandom().getAddress())
})();
~~~

After you got all the addresses for your census, you may as well create the
process instance:

The simplest form to create an election with the minimum parameters is:

~~~ts
const election = Election.from({
  title: 'Election title',
  description: 'Election description',
  endDate: new Date('2023-01-23 23:23:23'),
  census,
})
~~~

Check out the [election params interface] to see all the allowed params. There are several
options for creating custom types of elections or voting methods:

~~~ts
const election = Election.from({
  title: {
    en: 'This is a test in english',
    es: 'Esto es un test en castellano',
    default: 'This is the default title',
  },
  description: 'Election description',
  // a header image for your election (this is for example purposes; avoid using random sources)
  header: 'https://source.unsplash.com/random/2048x600',
  // a stream uri image for your election (this is for example purposes; avoid using random sources)
  streamUri: 'https://source.unsplash.com/random/2048x600',
  startDate: new Date('2023-01-23 12:00:00'),
  endDate: new Date('2023-01-23 23:23:23'),
  census,
  electionType: {
    autoStart: true, // if the election can start automatically at start date
    interruptible: true, // if the election can be paused or ended
    dynamicCensus: false, // if the census can be changed
    secretUntilTheEnd: false, // if the election has to be secret until end date
    anonymous: false, // if the election is anonymous
  },
  voteType: {
    uniqueChoices: false, // if the choices are unique when voting
    maxVoteOverwrites: 0, // number of times a vote can be overwritten
    costFromWeight: false, // for cuadrating voting
    costExponent: 10000, // for cuadrating voting
  }
})
~~~

Of course, you will also need some questions in this voting process, how would people
vote otherwise?

~~~ts
election.addQuestion('Ain\'t this process awesome?', 'Question description', [
  {
    title: 'Yes',
    value: 0,
  },
  {
    title: 'No',
    value: 1,
  },
]).addQuestion('How old are you?', 'Question description', [
  {
    title: 'Child (0-9 yo)',
    value: 0,
  },
  {
    title: 'Kid (10-16 yo)',
    value: 1,
  },
  {
    title: 'Adult (17-60 yo)',
    value: 2,
  },
  {
    title: 'Elder (60+ yo)',
    value: 3,
  },
])
~~~

> If you're a developer, maybe the value set to zero in Yes (and vice-versa)
> confuses you. Note that this is a mapping of values; people voting on Yes will
> properly set the value as specified (zero in this case), thus printing the
> results as you expect.

You can finally confirm the transaction in the blockchain by just calling
`createElection`:

~~~ts
(async () => {
  const id = await client.createElection(election)
  console.log(id) // will show the created election id
})();
~~~

The election id you got there will be the one you use to access the election.
After a few seconds of creating it, you should be able to check it on
[our explorer][vochain explorer] (or the [dev one][dev vochain explorer] if
you're using the development environment).

### Other election types

#### Quadratic voting

Here is a [full working example][quadratic voting example] of how to create a quadratic voting election.
More information can be found in the [documentation][quadratic voting documentation].

#### Approval voting

Here is a [full working example][approval voting example] of how to create an approval voting election.
More information can be found in the [documentation][approval voting documentation].

#### Ranked voting

Here is a [full working example][ranked voting example] of how to create a ranked voting election.
More information can be found in the [documentation][ranked voting documentation].

### Other election functionalities

#### Estimate election cost

This is a fast function (most times will resolve automatically) which allows to estimate a election price in tokens:

~~~ts
(async () => {
  const price = await client.estimateElectionCost(election) // Should be an UnpublishedElection
  console.log(price) // shows the estimation price
})();
~~~

#### Calculate the real election cost

This function returns the exact election price in tokens:

~~~ts
(async () => {
  const price = await client.calculateElectionCost(election) // Should be an UnpublishedElection
  console.log(price) // shows the real price
})();
~~~

### Fetching election info

You can always access a election information and metadata using `fetchElection`:

~~~ts
(async () => {
  const info = await client.fetchElection(id)
  console.log(info) // shows election information and metadata
})();

// or...
(async () => {
  client.setElectionId(id)
  const info = await client.fetchElection()
  console.log(info) // shows election information and metadata
})();
~~~

See the [PublishedElection class][publishedelection class] details for more information
about the returning object.

You can also fetch all the elections created for a given account using `fetchElections`:

~~~ts
(async () => {
  const elections = await client.fetchElections('0x3d0380f4dcc8aa87be30ef0e38f56dfefeb1cfad')
  console.log(elections) // Array of PublishedElection
})();

// it can be paginated using the second parameter
(async () => {
  const elections = await client.fetchElections('0x3d0380f4dcc8aa87be30ef0e38f56dfefeb1cfad', 2)
  console.log(elections) // Array of PublishedElection
})();
~~~

### Changing election status

See the [Election lifecycle states][election-lifecycle-states] details for more information
about the election status and the possible status changes once the election is created.

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

### Voting to a process

#### Check if a user is in census

~~~ts
(async () => {
  const isInCensus = await client.isInCensus();
  console.log(isInCensus) // true or false
})();
~~~

#### Check if a user has already voted

~~~ts
(async () => {
  const hasAlreadyVoted = await client.hasAlreadyVoted();
  console.log(hasAlreadyVoted) // returns the vote identifier or null
})();
~~~

#### Get how many times the user can submit a vote (vote rewrite)

~~~ts
(async () => {
  const votesLeft = await client.votesLeftCount();
  console.log(votesLeft) // number of times the user can submit his vote
})();
~~~

#### Check if a user is able to vote

~~~ts
(async () => {
  const isAbleToVote = await client.isAbleToVote();
  console.log(isAbleToVote) // true or false
})();
~~~

#### Vote

To vote a process you only need two things: the process id to vote to, and the
option (or options) being voted:

~~~ts
(async () => {
  client.setElectionId(id)
  // votes "Yes" and "Adult (17-60 yo)"
  const vote = new Vote([0, 2]);
  const voteId = await client.submitVote(vote)
})();
~~~

### Other SDK functionalities

#### Generate a random Wallet

You can use the `generateRandomWallet` function to generate a random Wallet and assign it to the client.
This function returns the private key of the Wallet.

~~~ts
const privateKey = client.generateRandomWallet();
console.log(privateKey) // the private key of the wallet
~~~

#### Generate deterministic Wallet from data

For some cases where the voters don't have an owned Wallet, we can generate a deterministic
Wallet based on arbitrary data, like, for example, the user and hash password from a custom CRM.

Here is an example where a Wallet is generated using the username and the hash of the password
which we would use to identify the user in our platform. This Wallet can then be used for the
census and for voting purposes.

~~~ts
// 9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08 is the sha256 of 'test'
const userWallet = VocdoniSDKClient.generateWalletFromData(['user1', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08']);
console.log(userWallet) // address is 0x8AF1b3EDB817b5854e3311d583905a3421F49829
~~~

### Advanced

#### Use a CSP to validate participants in an election

The SDK comes with an implementation of the common handler API of a CSP which is explained
[here](https://github.com/vocdoni/blind-csp#api).

For creating a CSP based election, a `CspCensus` has to be set to the election. This census need the
CSP public key (`CSP_PUBKEY` in the example) and the CSP Url (`CSP_URL` in the example). 

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

The SDK comes with some wrappers to get a blind signature from the CSP in order to vote.
The complete flow is shown here:

~~~ts
// Client initialization
const client = new VocdoniSDKClient({
  env: EnvOptions.DEV,
  wallet: signer, // the signer used (Metamask, Walletconnect)
  electionId: '934234...', // The election identifier (has to be a CSP configured election)
})

// Auth steps for the CSP (can vary of the type of the CSP)
const step0 = (await client.cspStep(0, ['Name test'])) as ICspIntermediateStepResponse;
const step1 = (await client.cspStep(
  1,
  [step0.response.reduce((acc, v) => +acc + +v, 0).toString()],
  step0.authToken
)) as ICspFinalStepResponse;

// Get the blind signature
const signature = await client.cspSign(signer.address, step1.token);

// Get the vote based on the signature
const vote = client.cspVote(new Vote([index % 2]), signature);

// Vote
const voteId = await client.submitVote(vote);
~~~

## Examples

You can find a [full featured CRA][example-cra] application with all the previous
steps in the [examples] folder. In that folder you'll also find a
[es modules example][example-esm], creating and voting an election process.

![example-esm demo](https://raw.githubusercontent.com/vocdoni/vocdoni-sdk/main/examples/esm/esm.gif)

## Reference Docs

You can find the autogenerated docs in our [SDK Reference][sdk-reference]. You can build them following [this guide][builddocs].

## License

This SDK is licensed under the [GNU Affero General Public License v3.0][license].

    Vocdoni API Typescript SDK
    Copyright (C) 2022 Vocdoni Roots MCU

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

[Vocdoni API]: https://vocdoni.io/api
[nodejs]: https://nodejs.org
[ethers]: https://github.com/ethers-io/ethers.js
[vochain explorer]: https://explorer.vote
[dev vochain explorer]: https://dev.explorer.vote
[publishedelection class]: https://github.com/vocdoni/vocdoni-sdk/blob/main/src/types/election/published.ts
[election-lifecycle-states]: https://developer.vocdoni.io/get-started/intro#election-lifecycle-states
[election params interface]: https://github.com/vocdoni/vocdoni-sdk/blob/main/src/types/election/election.ts#23
[examples]: https://github.com/vocdoni/vocdoni-sdk/blob/main/examples
[example-cra]: https://github.com/vocdoni/vocdoni-sdk/blob/main/examples/cra
[example-esm]: https://github.com/vocdoni/vocdoni-sdk/blob/main/examples/esm
[quadratic voting example]: https://github.com/vocdoni/vocdoni-sdk/blob/main/examples/typescript/src/quadratic.ts
[quadratic voting documentation]: https://developer.vocdoni.io/protocol/ballot#quadratic-voting
[approval voting example]: https://github.com/vocdoni/vocdoni-sdk/blob/main/examples/typescript/src/approval.ts
[approval voting documentation]: https://developer.vocdoni.io/protocol/ballot#multiquestion
[ranked voting example]: https://github.com/vocdoni/vocdoni-sdk/blob/main/examples/typescript/src/ranked.ts
[ranked voting documentation]: https://developer.vocdoni.io/protocol/ballot#linear-weighted-choice
[license]: https://github.com/vocdoni/vocdoni-sdk/blob/main/LICENSE
[devportal]: https://developer.vocdoni.io/sdk
[builddocs]: https://github.com/vocdoni/vocdoni-sdk/blob/main/docs/README.md
