# Census Types

A census is a list of voters who are eligible to vote in a given election. There are multiple ways to define a census with Vocdoni, each with different privacy and verifiability considerations. The census types are defined and [documented][census] at a protocol level and include [on-chain][on-chain], [off-chain Merkle tree][off-chain], and [off-chain Credential Service Provider][csp]. 

The census type is selected from the SDK by using a [`census`][census-class] of that type when creating an election. The SDK [census types][census-class-hierarchy] correspond to the three protocol-level census types according to the following table:

| SDK Census Type | Protocol Type | weighted  | anonymous | [`CensusType`][census-type] |
|---|---|---|---|---|---|
| [`CSPCensus`][csp-census]  | Off-chain CSP | no | optional | `CSP`
| [`PublishedCensus`][published-census] -> [`TokenCensus`][token-census]  | On-chain | yes | no | `WEIGHTED`
| [`PublishedCensus`][published-census] -> [`TokenCensus`][token-census]  | On-chain | yes | yes |`ANONYMOUS`
| [`OffchainCensus`][off-chain-census] -> [`PlainCensus`][plain-census]  | Off-chain tree | no | no | `WEIGHTED`
| [`OffchainCensus`][off-chain-census] -> [`PlainCensus`][plain-census] | Off-chain tree | no | yes | `WEIGHTED`
| [`OffchainCensus`][off-chain-census] -> [`WeightedCensus`][weighted-census]  | Off-chain tree | yes | no |`ANONYMOUS`
| [`OffchainCensus`][off-chain-census] -> [`WeightedCensus`][weighted-census]  | Off-chain tree | yes | yes |`ANONYMOUS`

:::note 
A weighted census is one where some voters' votes have more power than others, set by a `weight` value. `PlainCensus` is described by a `WEIGHTED` `CensusType` because it technically is a weighted census, with every weight set to `1`.
:::

[on-chain]: /sdk/integration-details/census-types/on-chain
[off-chain]: /sdk/integration-details/census-types/off-chain-tree
[csp]: /sdk/integration-details/census-types/off-chain-csp
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