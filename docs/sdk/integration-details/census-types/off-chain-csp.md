# Off-chain Credential Service Provider

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
// Client initialization
const client = new VocdoniSDKClient({
  env: EnvOptions.DEV,
  wallet: voter, // the signer used (Metamask, Walletconnect)
  electionId: '934234...', // The election identifier (has to be a CSP configured election)
})

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
const signature = await client.cspSign(voter.address, step1.token);

// Get the vote based on the signature
const vote = client.cspVote(new Vote([Math.round(Math.random())]), signature);

// Vote
const voteId = await client.submitVote(vote);
~~~

## Anonymity

Credential Service Provider elections provide strong anonymity by the use of [Blind Signatures][blind-signatures]. This is a slight modification on the standard CSP Census design, in which users are able to send a "blinded" version of their vote to the CSP after getting verified. The CSP signs this blinded package, and the user is then able cast their vote signed by the CSP without their identity being traced to that vote by anybody, including the CSP.

[Ask us][contact] if you would like to try setting up at CSP that can compute blind signatures. 

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