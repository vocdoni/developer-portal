# Off-chain Credential Service Provider

A Credential Service Provider is an external component that serves as a validator for the identities of voters. An example of this could be a service set up by a municipal government that validates if a given voter is registered, or a forum that validates if a given voter has an active account. With this type of census, voters show proof of registry and receive a cryptographic package from the CSP allowing them to cast a vote. 

:::tip anonymous
CSP census elections have the option of full anonymity with the use of [Blind Signatures][blind-signatures]. 
:::

Because using an off-chain CSP census requires a custom CSP for each use-case, it is not ready to use out-of-the-box. If you are interested in setting up a CSP election, please [reach out to us][chat] for help.


## Tutorial

You can check out a full working example of this tutorial [here](https://github.com/vocdoni/vocdoni-sdk/tree/examples/token-based/examples/csp)

This tutorial uses an example Credential Service Provider that "verifies" voters with a simple arithmetic problem. For a real use-case you need to reach out to us for help with setting up a CSP that suits your needs.

### Census

Once a CSP has been set up, you should have a `URL` and a `Public Key` belonging to that CSP. These parameters are used to create a [`CspCensus`](/sdk/reference/classes/CspCensus).

~~~ts
const cspCensus = new CspCensus(CSP_PUBKEY, CSP_URL);
~~~

:::warning csp public key
Make sure that your are using the correct public key for your CSP. The protocol cannot tell if the public key is correct, but you will have a signature error when casting votes with an incorrect CSP public key.
:::

### Election

This census can then be used to create an election like any other. The only restriction is you must assign a `maxCensusSize` to the election.

~~~ts
const election = Election.from({
    title: 'Election title',
    description: 'Election description',
    header: 'https://source.unsplash.com/random',
    endDate: new Date().getTime() + 100000000,
    maxCensusSize: 200,
    census: cspCensus,
  });
~~~

From this point on you can create the election as you would with any other census type. 

### Voting

The next step is requesting a signature from the CSP for each voter before casting their vote. In a real application, this might be done interactively with user input (like address or phone number), or it could be handled automatically using existing information (like a user login info, or a voter ID number).

There can be multiple steps in order to validate a voter. This authorization is done in discrete steps which should be known for a CSP. We can also get a short description of the required steps with [`client.cspInfo`](/sdk/reference/classes/VocdoniSDKClient#cspinfo). 

:::note csp info
Before getting the CSP info, the client CSP service needs to know which CSP to communiate with. The CSP url is set automatically when voting, but you can also use `setUrlFromElection`.
:::

~~~ts
client.cspService.setUrlFromElection(election);
const info = await client.cspInfo();
~~~

~~~json
{
  "title": "Simple math challenge",
    "signatureType": [
      "blind",
        "ecdsa",
        "sharedkey"
    ],
    "authType": "auth",
    "authSteps": [
      {
        "title": "Name",
            "type": "text"
        },
        {
          "title": "Solution",
            "type": "int4"
        }
    ]
}
~~~

For our example CSP, there are two steps. The first step involves sending a "name" (really any string). The second step requires the user to solve a simple math problem. 

The authorization steps are completed one-by-one with [`client.cspStep`](/sdk/reference/classes/VocdoniSDKClient#cspstep). This function sends an API call to the given CSP to perform a predefined "authentication step". A step could be validating a name, sending an authentication token, or really anything else. Non-final steps return a [`ICspIntermediateStepResponse`](/sdk/reference/interfaces/ICspIntermediateStepResponse) object containing an `authToken` and arbitrary `response` data.

For our example first step, we just need to send some "name" string.
~~~ts
const step0 = (await client.cspStep(0, ['Name test'])) as ICspIntermediateStepResponse;
~~~

~~~json
{
    "authToken": "280b3b5f-d982-4277-aa73-bd2d3b0d0d8c",
    "response": [
        "319",
        "303"
    ]
}
~~~

In this case, the second (and final) step asks us to add together the two values from the response to `step0`. We do this by computing the sum and then using this sum as the "challenge" for the next step. We also include the `authToken` from the prior step so that the CSP knows we are validating for the same voter.

~~~ts
const challenge = step0.response.reduce((accumulator, value) => +accumulator + +value, 0).toString();
const step1 = (await client.cspStep(1, [challenge], step0.authToken)) as ICspFinalStepResponse;
~~~
Once the predefined set of steps has been performed successfully, the final step should return a [`ICspFinalStepResponse`](/sdk/reference/interfaces/ICspFinalStepResponse) object containing a `token` registered to the verified voter.

This token represents a 'permission slip' allowing a user to vote but it cannot be used to cast a vote directly. First, the voter must be represented by a wallet address, just like in the typical off-chain tree census example. This wallet can belong to the user and be saved somewhere, but for the example we can just create a random address:

~~~ts
const voter = Wallet.createRandom();
~~~

We then send this address to the CSP, along with the token validating that this voter is validated. The CSP checks that the token is valid and unique, computes a signature on the voter's address, and sends that signature back to the client.
~~~ts
const signature = await client.cspSign(voter.address, step1.token);
~~~

We can now create a [`cspVote`](/sdk/reference/classes/cspvote) using this `signature` as the vote proof and then submit it as usual:
~~~ts
const vote = client.cspVote(new Vote([Math.round(Math.random())]), signature);
await client.submitVote(vote);
~~~

## Anonymity

Credential Service Provider elections provide strong anonymity with the use of [Blind Signatures][blind-signatures]. If blind signatures are enabled, the client "blinds" the user's address before sending it with the token to be signed by the CSP. This is the default behavior of the SDK. The CSP is then able to validate the token and sign the "blinded" payload without seeing the actual voter address. This signature is sent back to the client, which then un-blinds the signature. The blind-signatures protocol means that this signature is only valid for this specific voter address, but the CSP has no way of associating it with the blinded payload it originally signed. Thus, the voter cannot be associated with the validation token they used to request the blind signature. The user is thus able cast their vote signed by the CSP without their identity being traced to that vote by anybody, including the CSP.

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