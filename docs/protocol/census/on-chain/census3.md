# Census3 Service

The Census3 Service is an API service which provides an easy way to create censuses for elections with holders of a single token or a combination of them. This is a wrapper of the on-chain census design and enables integrators to use on-chain censuses without manually registering tokens or generating storage proofs.

:::tip census3
This section only describes how the Census3 service works. In order to use this service, we recommend using the Vocdoni SDK [Census3 client](/sdk/reference/classes/vocdonisdkclient). The details for using the census3 client are documented [here](/sdk/integration-details/census-types/on-chain).
:::


The service creates a list of token-holder addresses and balances for every registered token. It does this by regularly scanning Ethereum-based networks and analyzing all transactions. In order to generate a census, the service uses token-holder data to create a Merkle Tree with the relation `HolderAddress`->`Balance`. This Merkle tree represents a census identically to an [off-chain merkle tree census](/protocol/census/off-chain-tree), with those those holders as the set of voters and their balances as vote weights.

## Using the Census3 Service

There are three main steps in using the Census3 Service: registering a token, creating a strategy, and generating a census.

### Registering a token

Before a token can be used to create a census, it must be registered. A user requests that the service register a given token, and the service then begins to scan the target Ethereum network for transactions, building an index of that token. This may take some time.

The service suports the following token types:
* ERC20
* ERC721
* ERC777
* POAP
* Gitcoin Passport Score
* Gitcoin Passport Shields (*coming soon*)
* ERC1155 (*coming soon*)
  
:::warning token selection
While all of the above token types are supported, the recommended use-case for a token-based census is a custom token created specifically to govern an organization. It is theoretically possible to create a census with a popular token such as ETH, but it would be infeasible for the Census3 service to keep an updated index of all Ethereum transactions.
:::

### Creating a strategy

A strategy is the logic behind building a single Merkle Tree from the set of holders of a token. The most basic strategy is "everyone who holds token X", but there can be more restrictions such as "everyone who holds more than 900 of token X", or complex statements like "everyone who holds token X AND token Y or Z". 

#### Predicates

Strategies are defined by statements called "predicates." A predicate is comprised of:
  * A operator, which is a function associated with a tag (e.g. `AND`) that is used to combine token holders and define how to combine them.
  * Token symbols (e.g. `BTC`), that identify the token holders to combine.
Predicates are structured by the following format: `<token_symbol> <operator> <token_symbol>`, e.g. `BTC OR ETH`. The syntax also support groups of operators, e.g. `USDC AND (ETH OR (BTC AND DAI))`

#### Operators

Each of the operators uses a different logical strategy for combining token holder balances to create a weighted census:

| Operator | Powerup | Usage | Description |
|:---|:---|:---|:---|
| `AND` || `AND` | Holders of both tokens, with a fixed weight of 1. |
| `OR` || `OR` | Holders of either or both tokens, with fixed weight of 1. |
| `AND` | `sum` | `AND:sum` | Holders of both tokens, with a weight adding the token balances. |
| `AND` | `mul` | `AND:mul` | Holders of both tokens, with a weight multiplying the token balances.  |
| `OR` | `sum` | `OR:sum` | Holders of either or both tokens, with a weight adding the token balances.|
| `OR` | `mul` | `OR:mul` |  Holders of either or both tokens, with a weight multiplying the token balances if both are non-zero, or equaling the balance that is non-zero.|


### Generating a census

A census is created from a given strategy and a registered token (or tokens) pertaining to that strategy. The service scans its index of token-holder data to accumulate a set of token holders and balance values and creates a Merkle tree to serve as the census. In the case of an anonymous census, there is one extra step called [rounding](/protocol/anonymity/on-chain).

Some details about the census:
 * The censuses are published on [IPFS](https://ipfs.tech/) after their creation. 
 * Census3 uses [go.vocdoni.io/dvote/tree/arbo](go.vocdoni.io/dvote/tree/arbo) to build the census merkle trees.
 * The censuses can be created with the holders of just one token or a combination of tokens, using **complex strategies**.
 * The censuses are *zk-friendly* and can also be used for anonymous voting.
---

## API Defintion

The Census3 Service provides a REST API with all of the above functionality. 
There is an [example bash script](https://github.com/vocdoni/census3/blob/main/example.sh) that shows the basic usage of this API.

The service should be available at the following URLs, depending on the environment:
```ts
dev: 'https://census3-dev.vocdoni.net/api',
stg: 'https://census3-stg.vocdoni.net/api',
prod: 'https://census3.vocdoni.io/api',
```


Endpoints:
 - [API info](#api-info)
 - [Tokens](#tokens)
 - [Strategies](#strategies)
 - [Censuses](#censuses)

---

### API Info

#### GET `/info`

Show information about the API service.

- 📥 response:

```json
{
    "supportedChains": [
        {
            "chainID": 5,
            "shortName": "gor",
            "name": "Goerli"
        },
        {
            "chainID": 137,
            "shortName": "matic",
            "name": "Polygon Mainnet"
        },
        {
            "chainID": 80001,
            "shortName": "maticmum",
            "name": "Mumbai"
        },
        {
            "chainID": 1,
            "shortName": "eth",
            "name": "Ethereum Mainnet"
        }
    ]
}
```

- ⚠️ errors:

| HTTP Status | Message | Internal error |
|:---:|:---|:---:|
| 500 | `error encoding API info` | 5023 | 

---

### Tokens

#### GET `/tokens`
List of already added tokens.

**Pagination URL params**

| URL key | Description | Example |
|:---|:---|:---|
| `pageSize` | (optional) Defines the number of results per page. By default, `100`. | `?pageSize=2` |
| `nextCursor` | (optional) When is defined, it is used to get the page results, going forward. By default, `""`. | `?nextCursor=0x1234` |
| `prevCursor` | (optional) When is defined, it is used to get the page results, going backwards. By default, `""`. | `?prevCursor=0x1234` |

The maximus default page size is 10, but if you provide a page size of `-1`, the endpoint will return all the results, and it does not require to be paginated.

- 📥 response:

```json
{
    "tokens": [
        {
            "ID": "0x1324",
            "type": "erc20",
            "decimals": 18,
            "startBlock": 123456,
            "symbol": "$",
            "totalSupply": "21323",
            "name": "Amazing token",
            "synced": true|false,
            "defaultStrategy": 1,
            "tags": "testTag1,testTag2",
            "chainID": 1,
            "externalID": "",
            "chainAddress": "eth:0x1234",
            "iconURI": "http://...png"
        }
    ],
    "pagination": {
        "nextCursor": "",
        "prevCursor": "0x1234",
        "pageSize": 10
    }
}
```

> If `tags` is empty, it will be ommited.

> If `externalID` is empty, it will be ommited.

- ⚠️ errors:

| HTTP Status  | Message | Internal error |
|:---:|:---|:---:|
| 204 | `no tokens found` | 4007 |
| 400 | `malformed pagination params` | 4022 |
| 500 | `error getting tokens information` | 5005 | 
| 500 | `error encoding tokens` | 5011 | 

#### GET `/tokens/types`
List the supported token types.

- 📥 response:

```json
{
    "supportedTypes": [
        "erc20", 
        "erc721", 
        "erc777", 
        "erc1155", 
        "nation3", 
        "wANT", 
        "poap"
    ]
}
```

- ⚠️ errors:    

| HTTP Status  | Message | Internal error |
|:---:|:---|:---:|
| 500 | `error encoding supported tokens types` | 5012 | 

#### POST `/tokens`
Creates a new token in the database to be scanned. It gets the token information from the provider associated to the token type defined. If the creation success the token will be scanned in the next scanner iteration. The scan process status can be checked getting the token information.

**Important**: When a token is created, the API also creates a simple strategy with just the holders of that token, which is assigned to it as `defaultStrategy`.

- 📤 request:

```json
{
    "ID": "0x1234",
    "type": "erc20|erc721|erc777|erc1155|nation3|wANT|poap",
    "tags": "testTag1,testTag2",
    "chainID": 1,
    "externalID": "" // id for external holders providers
}
```

> `tags` attribute is *optional*.

> `externalID` URL parameter is *optional* by default, but required for external provided tokens like POAPs.

- ⚠️ errors:

| HTTP Status | Message | Internal error |
|:---:|:---|:---:|
| 400 | `malformed token information` | 4000 | 
| 409 | `token already created` | 4009 | 
| 400 | `chain ID provided not supported` | 4013 | 
| 500 | `the token cannot be created` | 5000 | 
| 500 | `error getting token information` | 5004 | 
| 500 | `error initialising web3 client` | 5019 | 

#### GET `/tokens/{tokenID}?chainID={chainID}&externalID={externalID}`
Returns the information about the token referenced by the provided ID and chain ID, the external ID is optional.

> `chainID` URL parameter is *mandatory*.

> `externalID` URL parameter is *optional* by default, but required for external provided tokens like POAPs.

- 📥 response:

```json
{
    "ID": "0x1324",
    "type": "erc20",
    "size": 120,
    "decimals": 18,
    "startBlock": 123456,
    "symbol": "$",
    "totalSupply": "21323",
    "name": "Amazing token",
    "status": {
        "atBlock": 12345,
        "synced": true|false,
        "progress": 87
    },
    "defaultStrategy": 1,
    "tags": "testTag1,testTag2",
    "chainID": 1,
    "externalID": "",
    "chainAddress": "eth:0x1234",
    "iconURI": "http://...png"
}
```

> If `tags` is empty, it will be ommited.

> If `externalID` is empty, it will be ommited.

- ⚠️ errors:

| HTTP Status  | Message | Internal error |
|:---:|:---|:---:|
| 400 | `malformed token information` | 4001 |
| 400 | `malformed chain ID` | 4018 |
| 404 | `no token found` | 4003 |
| 500 | `error getting token information` | 5004 | 
| 500 | `error encoding token` | 5010 | 
| 500 | `chain ID provided not supported` | 5013 | 
| 500 | `error initialising web3 client` | 5019 | 
| 500 | `error getting number of token holders` | 5020 | 
| 500 | `error getting last block number from web3 endpoint` | 5021 | 

#### GET `/tokens/{tokenID}/holders/{holderID}?chainID={chainID}&externalID={externalID}`
Returns the holder balance if the holder ID is already registered in the database as a holder of the token ID and chain ID provided, the external ID is optional.

> `chainID` URL parameter is *mandatory*.

> `externalID` URL parameter is *optional* by default, but required for external provided tokens like POAPs.

- 📥 response:

```json
{
    "balance": "1234567890"
}
```

- ⚠️ errors:

| HTTP Status | Message | Internal error |
|:---:|:---|:---:|
| 400 | `malformed token information` | 4001 |
| 400 | `malformed chain ID` | 4018 |
| 404 | `no token found` | 4003 |
| 404 | `token holder not found for the token provided` | 4023 |
| 500 | `error getting token holders` | 5006 | 

--- 

### Strategies

#### GET `/strategies`
Returns the ID's list of the strategies registered.

**Pagination URL params**

| URL key | Description | Example |
|:---|:---|:---|
| `pageSize` | (optional) Defines the number of results per page. By default, `100`. | `?pageSize=2` |
| `nextCursor` | (optional) When is defined, it is used to get the page results, going forward. By default, `""`. | `?nextCursor=3` |
| `prevCursor` | (optional) When is defined, it is used to get the page results, going backwards. By default, `""`. | `?prevCursor=1` |

The maximus default page size is 10, but if you provide a page size of `-1`, the endpoint will return all the results, and it does not require to be paginated

- 📥 response:

```json
{
    "strategies": [
        {
            "ID": 1,
            "alias": "default MON strategy",
            "predicate": "MON",
            "uri": "ipfs://...",
            "tokens": {
                "MON": {
                    "ID": "0x1234",
                    "chainID": 5,
                    "chainAddress": "gor:0x1234",
                    "externalID": "mon_id_on_external_holder_provider"
                }
            }
        },
        {
            "ID": 2,
            "alias": "default ANT strategy",
            "predicate": "ANT",
            "uri": "ipfs://...",
            "tokens": {
                "ANT": {
                    "ID": "0x1234",
                    "chainID": 1,
                    "chainAddress": "eth:0x1234" 
                }
            }
        },
        {
            "ID": 3,
            "alias": "default USDC strategy",
            "predicate": "USDC",
            "uri": "ipfs://...",
            "tokens": {
                "USDC": {
                    "ID": "0x1234",
                    "chainID": 1,
                    "chainAddress": "eth:0x1234"
                }
            }
        },
        {
            "ID": 4,
            "alias": "strategy_alias",
            "predicate": "MON AND (ANT OR USDC)",
            "uri": "ipfs://...",
            "tokens": {
                "MON": {
                    "ID": "0x1234",
                    "chainID": 5,
                    "chainAddress": "gor:0x1234",
                    "externalID": "mon_id_on_external_holder_provider"
                },
                "ANT": {
                    "ID": "0x1234",
                    "chainID": 1,
                    "chainAddress": "eth:0x1234",
                    "minBalance": "1"
                },
                "USDC": {
                    "ID": "0x1234",
                    "chainID": 1,
                    "chainAddress": "eth:0x1234"
                }
            }
        }
    ],
    "pagination": {
        "nextCursor": "",
        "prevCursor": "1",
        "pageSize": 10
    }
}
```

- ⚠️ errors:

| HTTP Status  | Message | Internal error |
|:---:|:---|:---:|
| 204 | `-` | 4008 |
| 400 | `malformed pagination params` | 4022 |
| 500 | `error getting strategies information` | 5008 | 
| 500 | `error encoding strategies` | 5016 | 

#### POST `/strategies`
Stores a new strategy based on the defined combination of tokens provided, these tokens must be registered previously.

- 📤 request:

```json
    {
        "alias": "test_strategy",
        "predicate": "(wANT OR ANT) AND USDC",
        "tokens": {
            "wANT": {
                "ID": "0x1324",
                "chainID": 1,
                "minBalance": "10000"
            },
            "ANT": {
                "ID": "0x1324",
                "chainID": 5,
            },
            "USDC": {
                "ID": "0x1324",
                "chainID": 1,
                "minBalance": "50"
            },
        }
    }
```

- 📥 response:

```json
{
    "strategyID": 1
}
```

- ⚠️ errors:

| HTTP Status  | Message | Internal error |
|:---:|:---|:---:|
| 404 | `no token found` | 4003 | 
| 400 | `malformed strategy provided` | 4014 |
| 400 | `the predicate provided is not valid` | 4015 | 
| 400 | `the predicate includes tokens that are not included in the request` | 4016 | 
| 500 | `error encoding strategy info` | 5015 | 
| 500 | `error creating strategy` | 5025 | 

#### POST `/strategies/import/{cid}`
Imports a strategy from IPFS downloading it with the `cid` provided in background. The strategy import will fail if the strategy tokens are not previously created in the database.

- 📥 response:

```json
{
    "queueID": "0123456789abcdef0123456789abcdef01234567"
}
```

- ⚠️ errors:

| HTTP Status  | Message | Internal error |
|:---:|:---|:---:|
| 400 | `malformed strategy provided` | 4014 |
| 500 | `error encoding strategy info` | 5015 | 

#### GET `/strategies/import/queue/{queueID}`
Returns the information of the strategy that are in the creation queue.

- 📥 response:
```json
{
    "done": true,
    "error": {
        "code": 0,
        "error": "error message or null"
    },
    "progress": 0,
    "data": { /* <same_get_strategy_response> */ }
}
```

- ⚠️ errors:

| HTTP Status  | Message | Internal error |
|:---:|:---|:---:|
| 404 | `strategy not found` | 4006 | 
| 400 | `malformed queue ID` | 4011 | 
| 500 | `error getting strategy information` | 5009 | 
| 500 | `error encoding queue item` | 5022 | 

- ⚠️ possible error values inside the body:

<small>The request could response `OK 200` and at the same time includes an error because it is an error of the enqueued process and not of the request processing).</small>

#### GET `/strategies/{strategyID}`
Returns the information of the strategy related to the provided ID.

- 📥 response:

```json
{
    "ID": 4,
    "alias": "strategy_alias",
    "predicate": "MON AND (ANT OR USDC)",
    "uri": "ipfs://...",
    "tokens": {
        "MON": {
            "ID": "0x1234",
            "chainID": 5,
            "chainAddress": "gor:0x1234",
            "externalID": "mon_id_on_external_holder_provider"
        },
        "ANT": {
            "ID": "0x1234",
            "chainID": 1,
            "chainAddress": "eth:0x1234",
            "minBalance": "1"
        },
        "USDC": {
            "ID": "0x1234",
            "chainID": 1,
            "chainAddress": "eth:0x1234"
        }
    }
}
```

- ⚠️ errors:

| HTTP Status  | Message | Internal error |
|:---:|:---|:---:|
| 400 | `malformed strategy ID, it must be an integer` | 4002 | 
| 404 | `no strategy found with the ID provided` | 4005 |
| 500 | `error getting tokens information` | 5005 | 
| 500 | `error getting strategy information` | 5007 | 
| 500 | `error encoding strategy info` | 5015 | 


#### GET `/strategies/{strategyID}/estimation?anonymous={true|false}`
Enqueue the estimation of size and time (in milliseconds) to create the census generated for the provided strategy. It also calculates the accuracy of the resulting census, it could be different to 100% if the census will be anonymous.

- 📥 response:

```json
{
    "queueID": "0123456789abcdef0123456789abcdef01234567",
}
```

- ⚠️ errors:

| HTTP Status  | Message | Internal error |
|:---:|:---|:---:|
| 400 | `malformed strategy ID, it must be an integer` | 4002 | 
| 500 | `error encoding strategy info` | 5015 | 

#### GET `/strategies/{strategyID}/estimation/queue/{queueID}`
Returns the estimation of size and time (in milliseconds) to create the census generated for the strategy related to the queue ID.

- 📥 response:

```json
{
    "done": true,
    "error": {
        "code": 0,
        "error": "error message or null"
    },
    "progress": 50,
    "data": {
        "size": 15000,
        "timeToCreateCensus": 10900,
        "accuracy": 100.0,
    }
}
```

- ⚠️ errors:

| HTTP Status  | Message | Internal error |
|:---:|:---|:---:|
| 404 | `no strategy found with the ID provided` | 4005 |
| 400 | `malformed queue ID` | 4020 | 
| 500 | `error encoding queue item` | 5022 | 

- ⚠️ possible error values inside the body:

<small>The request could response `OK 200` and at the same time includes an error because it is an error of the enqueued process and not of the request processing).</small>

| HTTP Status  | Message | Internal error |
|:---:|:---|:---:|
| 404 | `no strategy found with the ID provided` | 4005 |
| 400 | `the predicate provided is not valid` | 4015 | 
| 204 | `strategy has not registered holders` | 4017 |
| 500 | `error getting strategy information` | 5007 | 
| 500 | `error evaluating strategy predicate` | 5026 |

#### GET `/strategies/{strategyID}/holders`
Returns the list of holders with their balances for a strategy. This endpoint only works with single token strategies like default ones.

**Pagination URL params**

| URL key | Description | Example |
|:---|:---|:---|
| `pageSize` | (optional) Defines the number of results per page. By default, `1000`. | `?pageSize=2` |
| `nextCursor` | (optional) When is defined, it is used to get the page results, going forward. By default, `""`. | `?nextCursor=0x1234` |
| `prevCursor` | (optional) When is defined, it is used to get the page results, going backwards. By default, `""`. | `?prevCursor=0x1234` |

- 📥 response:

```json
{
    "holders": {
        "0x1": "1",
        "0x2": "2",
        "0x3": "3",
        "0x4": "4",
        "0x...": "1000",
    },
    "pagination": {
        "nextCursor": "0x5",
        "prevCursor": "0x1",
        "pageSize": 5
    }
}
```

- ⚠️ errors:

| HTTP Status  | Message | Internal error |
|:---:|:---|:---:|
| 400 | `malformed strategy ID, it must be an integer` | 4002 | 
| 404 | `no token holders found` | 4004 |
| 404 | `no strategy found with the ID provided` | 4005 |
| 400 | `malformed pagination params` | 4022 |
| 500 | `error encoding token holders` | 5013 |
| 500 | `error getting strategy holders` | 5030 |


#### GET `/strategies/token/{tokenID}?chainID={chainID}&externalID={externalID}`
Returns strategies registered that includes the token provided for the chain also provided, the external token id is an optional parameter.

> `externalID` URL parameter is *optional* by default, but required for external provided tokens like POAPs.

- 📥 response:

```json
{
    "strategies": [
        {
            "ID": 1,
            "alias": "default MON strategy",
            "predicate": "MON",
            "tokens": {
                "MON": {
                    "ID": "0x1234",
                    "chainID": 5,
                    "chainAddress": "gor:0x1234"
                }
            }
        },
        {
            "ID": 4,
            "alias": "strategy_alias",
            "predicate": "MON AND (ANT OR USDC)",
            "tokens": {
                "MON": {
                    "ID": "0x1234",
                    "chainID": 5,
                    "chainAddress": "gor:0x1234",
                    "externalID": "mon_id_on_external_holder_provider"
                },
                "ANT": {
                    "ID": "0x1234",
                    "chainID": 1,
                    "chainAddress": "eth:0x1234",
                    "minBalance": "1"
                },
                "USDC": {
                    "ID": "0x1234",
                    "chainID": 1,
                    "chainAddress": "eth:0x1234"
                }
            }
        }
    ]
}
```

- ⚠️ errors:

| HTTP Status  | Message | Internal error |
|:---:|:---|:---:|
| 204 | `-` | 4008 |
| 500 | `error getting strategies information` | 5008 | 
| 500 | `error encoding strategies` | 5016 | 

#### POST `/strategies/predicate/validate`
Returns if the provided strategy predicate is valid and well-formatted. If the predicate is valid the handler returns a parsed version of the predicate as a JSON.

- 📤 request:

```json
{
    "predicate": "DAI AND (ANT OR ETH)"
}
```

- 📥 response:

```json
{
    "result": {
        "childs": {
            "operator": "AND",
            "tokens": [
                {
                    "literal": "DAI"
                },
                {
                    "childs": {
                        "operator": "OR",
                        "tokens": [
                            {
                                "literal": "ANT"
                            },
                            {
                                "literal": "ETH"
                            }
                        ]
                    }
                }
            ]
        }
    }
}
```

- ⚠️ errors:

| HTTP Status  | Message | Internal error |
|:---:|:---|:---:|
| 400 | `malformed strategy provided` | 4014 |
| 400 | `the predicate provided is not valid` | 4015 | 
| 500 | `error encoding validated strategy predicate` | 5024 | 

#### GET `/strategies/predicate/operators`
Returns the list of supported operators to build strategy predicates.

- 📥 response:

```json
{
    "operators": [
        {
            "description": "logical operator that returns the common token holders between symbols with fixed balance to 1",
            "tag": "AND"
        },
        {
            "description": "logical operator that returns the token holders of both symbols with fixed balance to 1",
            "tag": "OR"
        }
    ]
}
```

- ⚠️ errors:

| HTTP Status  | Message | Internal error |
|:---:|:---|:---:|
| 500 | `error encoding supported strategy predicate operators` | 5027 | 

---

### Censuses

#### POST `/censuses`
Request the creation of a new census with the strategy provided and returns the census ID.
     
- 📤 request:

```json
{
    "strategyID": 1,
    "anonymous": false
}
```

- 📥 response:

```json
{
    "queueID": "0123456789abcdef0123456789abcdef01234567"
}
```

- ⚠️ errors :

| HTTP Status  | Message | Internal error |
|:---:|:---|:---:|
| 400 | `malformed strategy ID, it must be an integer` | 4002 | 
| 500 | `error encoding census` | 5017 | 

#### GET `/censuses/{censusID}`
Returns the information of the snapshots related to the provided ID.

- 📥 response:
```json
{ 
    "ID": 2,
    "strategyID": 1,
    "merkleRoot": "e3cb8941e25dcdb36fc21acbe5f6c5a42e0d4f89839ae94952f0ebbd9acd04ac",
    "uri": "ipfs://Qma....",
    "size": 1000,
    "weight": "200000000000000000000",
    "anonymous": true,
    "accuracy": 100.0
}
```

- ⚠️ errors:

| HTTP Status  | Message | Internal error |
|:---:|:---|:---:|
| 400 | `malformed census ID, it must be a integer` | 4001 | 
| 404 | `census not found` | 4006 | 
| 500 | `error getting census information` | 5009 | 
| 500 | `error encoding census` | 5017 | 

#### GET `/censuses/queue/{queueID}`
Returns the information of the census that are in the creation queue.

- 📥 response:
```json
{
    "done": true,
    "error": {
        "code": 0,
        "error": "error message or null"
    },
    "progress": 100,
    "data": { /* <same_get_census_response> */ }
}
```

- ⚠️ errors:

| HTTP Status  | Message | Internal error |
|:---:|:---|:---:|
| 404 | `census not found` | 4006 | 
| 400 | `malformed queue ID` | 4011 | 
| 500 | `error getting census information` | 5009 | 
| 500 | `error encoding queue item` | 5022 | 

- ⚠️ possible error values inside the body:

<small>The request could response `OK 200` and at the same time includes an error because it is an error of the enqueued process and not of the request processing).</small>

| HTTP Status  | Message | Internal error |
|:---:|:---|:---:|
| 404 | `no token holders found` | 4004 |
| 404 | `no strategy found with the ID provided` | 4005 |
| 400 | `no tokens found for the strategy provided` | 4010 |
| 409 | `census already exists` | 4012 |
| 400 | `the predicate provided is not valid` | 4015 |
| 204 | `strategy has not registered holders` | 4017 |
| 500 | `error creating the census tree on the census database` | 5001 |
| 500 | `error evaluating strategy predicate` | 5026 |

#### GET `/censuses/strategy/{strategyID}`
Returns a list of censuses previously created for the strategy provided.

- 📥 response:

```json
{
    "censuses": [ 
        { 
            "ID": 1,
            "strategyID": 1,
            "merkleRoot": "e3cb8941e25dcdb36fc21acbe5f6c5a42e0d4f89839ae94952f0ebbd9acd04ac",
            "uri": "ipfs://Qma....",
            "size": 1000,
            "weight": "200000000000000000000",
            "anonymous": true,
            "accuracy": 100.0
        }
    ]
}
```

- ⚠️ errors:

| HTTP Status  | Message | Internal error |
|:---:|:---|:---:|
| 204 | `-` | 4007 |
| 400 | `malformed census ID, it must be a integer` | 4001 | 
| 404 | `census not found` | 4006 | 
| 500 | `error getting census information` | 5009 | 
| 500 | `error encoding censuses` | 5018 |