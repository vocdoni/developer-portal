# Off-chain Merkle Tree

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

## Anonymity

Complete cryptographic anonymity is possible alongside universal verifiability with anonymous Merkle tree-based censuses. This is possible due to a cutting-edge technology called zk-SNARKs. The protocol-level design is detailed [here][zk-census-proof].

For an anonymous off-chain tree election, the election must be created with the option 
~~~ts
electionType: {
  anonymous: true
}
~~~

In this case, votes must also be cast as [`AnonymousVote`](/sdk/reference/classes/AnonymousVote)s. The cryptography needed for anonymous voting is very different from typical voting, but this is all handled by the SDK without any other changes needed.