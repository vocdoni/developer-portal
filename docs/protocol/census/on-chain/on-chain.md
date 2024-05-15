# On-Chain Census

An on-chain census is one which is dependent on the status of the Ethereum blockchain at a given point in time. This census type enables the set of eligible voters to be derived from the token holder balances for some ERC-20 Ethereum token, weighted according to token balances. The ideal use-case for such a census is an organization whose members are represented as holders of some token, such as a [DAO](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization).

There are two ways with Vocdoni to create an on-chain census: Ethereum Storage Proofs and the Census3 service. Ethereum Storage Proofs is the legacy method which requires a higher setup cost and more manual work by integrators. The Census3 Service provided by Vocdoni abstracts this complexity away and exposes an API to create and access token-holder censuses. 

## Census3 Service

The Census3 Service is an API service which provides an easy way to create censuses for elections with holders of a single token or a combination of them. This is a wrapper of the on-chain census design and enables integrators to use on-chain censuses without manually registering tokens or generating storage proofs.

The Census3 Service is documented in-depth [here](/protocol/census/on-chain/census3).


## ERC-20 Token Storage Proofs

:::warning deprecated: ERC-20 Token Storage Proofs
The solution for on-chain censuses used to be based on the use of [ERC-20 Token Storage Proofs](https://github.com/vocdoni/storage-proofs-eth-go). We have since created the Census3 Service, which is the preferred method for creating token-based censuses, but the use of Token Storage Proofs is still possible. 
:::

An Ethereum Storage Proof is a way to create an on-chain census without the use of the Census3 Service. This approach uses a Token Storage Proof Smart Contract to generate a proof of a given token's holders which can then be used directly as a census.

The Storage Proofs protocol is no longer maintained or recommended, but is still theoretically usable and is documented in-depth [here](/protocol/census/on-chain/eth-storage-proofs).
