# Off-chain Merkle Tree

This is the most basic census type, is the default when creating an election, and is the one used in the SDK tutorial. In this scheme, the census is essentially a basic list of voter, with some behind-the-scenes cryptography. With an off-train tree census, voters are added as wallet addresses using [`census.add()`][census-add]. 

This is the census type used in the [SDK Tutorial](/sdk/tutorial). Follow along or look at the tutorial code for basic usage of the Merkle tree census.

Off-chain tree census can be created as [`PlainCensus`][plain-census] or [`WeightedCensus`][weighted-census]. If a weighted census is used, voters can be assigned a weight which proportionally determines the power of their vote: 

~~~ts
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

## Anonymity

Complete cryptographic anonymity is possible alongside universal verifiability with anonymous Merkle tree-based censuses. This is possible due to a cutting-edge technology called zk-SNARKs. The protocol-level design is detailed [here][zk-census-proof].

For an anonymous off-chain tree election, the election must be created with the option 
~~~ts
electionType: {
  anonymous: true
}
~~~

In this case, votes must also be cast as [`AnonymousVote`](/sdk/reference/classes/AnonymousVote)s. The cryptography needed for anonymous voting is very different from typical voting, but this is all handled by the SDK without any other changes needed.

[zk-census-proof]: /protocol/anonymity/zk-census-proof
[on-chain]: /protocol/census#on-chain-based-census-ethereum-erc-20
[off-chain]: /protocol/census#off-chain-tree-based-census-merkle-tree
[csp]: /protocol/census#off-chain-csp-based-census-credential-service-provider
[census]: /protocol/census
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