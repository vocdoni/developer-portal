# On-chain Token-Based Census

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

## Anonymity

Anonymity may seem impossible for token-based censuses, as votes are weighted based on public token balance values. However, we have been able to design a sufficiently-anonymous approach by rounding token values, which you can read about on our [blog](https://blog.vocdoni.io/anonymous-voting-token-based). This form of anonymity has some drawbacks and theoretical weaknesses that users should be aware of, but it provides a strong layer of anonymity under the right conditions. 