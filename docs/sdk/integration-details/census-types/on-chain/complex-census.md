# Complex Census

The census3 service makes it easy to create a census based off of the balance holders of a token taken to represent an organization. It is possible, however, to create a token-based census with more complex logic, incorporating balance information from multiple tokens at once.

## Strategies

The logic that defines inclusion in a token-based census is called a 'strategy.' For the basic token-holder use case, the strategy is defined solely by that token. `createTokenCensus` chooses the default strategy for that token, so for a basic token-based census you don't need to worry about strategies at all.

More complex strategies exist, however, such as "holders of both `VOC1` token AND `VOC2` token."

Just like checking for supported tokens, you can see a list of the strategies supported by the census3 service:

~~~ts
const strategies = await census3Client.getStrategies();
console.log(JSON.stringify(strategies, null, 4));
~~~

This will print a long list of strategies. Some of them will be basic strategies for a single token:

~~~bash
...
  {
        "ID": 72,
        "alias": "Default strategy for token VOC3TEST",
        "predicate": "VOC3TEST",
        "uri": "ipfs://bafybeih7rmjsdzqjr6pyjv46jo4kjpl3qfv2yufpdxzmcw2j63z47u6czy",
        "tokens": {
            "VOC3TEST": {
                "ID": "0x9286d95DB5a59306113028EF0BA85bF7068A199F",
                "chainID": 11155111,
                "minBalance": "1",
                "chainAddress": "sep:0x9286d95DB5a59306113028EF0BA85bF7068A199F"
            }
        }
    },
...
~~~

Some, on the other hand, will be more complex strategies involving multiple tokens:

~~~bash
...
  {
        "ID": 103,
        "alias": "gitcoin_onvote_1711040172449",
        "predicate": "GPS AND:mul (GPS:Discord OR GPS:Github)",
        "uri": "ipfs://bafybeidopynxc746oorzkh7yvhomcw56w72aaw3klqce4gkjcczc7ry3uu",
        "tokens": {
            "GPS": {
                "ID": "0x000000000000000000000000000000000000006C",
                "chainID": 1,
                "minBalance": "16",
                "chainAddress": "eth:0x000000000000000000000000000000000000006C"
            },
            "GPS:Discord": {
                "ID": "0x000000000000000000000000000000000000006C",
                "chainID": 1,
                "minBalance": "1",
                "chainAddress": "eth:0x000000000000000000000000000000000000006C",
                "externalID": "Discord"
            },
            "GPS:Github": {
                "ID": "0x000000000000000000000000000000000000006C",
                "chainID": 1,
                "minBalance": "1",
                "chainAddress": "eth:0x000000000000000000000000000000000000006C",
                "externalID": "Github"
            }
        }
    },
...
~~~

## Predicates

As you can see, there are two main differences between the simple and complex strategies: the `predicate` and the `tokens`. 

Predicates are logical operators that define how strategies create a census. There are currently two logical operators (`AND` and `OR`), each with two additional 'powerups' (`sum` and `mul`).

Each of the operators uses a different logical strategy for combining token holder balances to create a weighted census:

| Operator | Powerup | Usage | Description |
|:---|:---|:---|:---|
| `AND` || `AND` | Holders of both tokens, with a fixed weight of 1. |
| `OR` || `OR` | Holders of either or both tokens, with fixed weight of 1. |
| `AND` | `sum` | `AND:sum` | Holders of both tokens, with a weight adding the token balances. |
| `AND` | `mul` | `AND:mul` | Holders of both tokens, with a weight multiplying the token balances.  |
| `OR` | `sum` | `OR:sum` | Holders of either or both tokens, with a weight adding the token balances.|
| `OR` | `mul` | `OR:mul` |  Holders of either or both tokens, with a weight multiplying the token balances if both are non-zero, or equaling the balance that is non-zero.|

You can also query the census3 service for a list of available operators:

~~~ts
const operators = await census3Client.getSupportedOperators();
console.log(operators);
~~~

~~~bash
[
  {
    description: 'AND logical operator that returns the common token holders between symbols with fixed balance to 1',
    tag: 'AND'
  },
  {
    description: 'AND:sum logical operator that returns the common token holders between symbols with the sum of their balances on both tokens',
    tag: 'AND:sum'
  },
  {
    description: 'AND:mul logical operator that returns the common token holders between symbols with the multiplication of their balances on both tokens',
    tag: 'AND:mul'
  },
  {
    description: 'OR logical operator that returns the token holders of both symbols with fixed balance to 1',
    tag: 'OR'
  },
  {
    description: 'OR:sum logical operator that returns the token holders of both symbols with the sum of their balances on both tokens',
    tag: 'OR:sum'
  },
  {
    description: 'OR:mul logical operator that returns the token holders of both symbols with the multiplication of their balances on both tokens',
    tag: 'OR:mul'
  }
]
~~~

As seen in the strategy example above, you can combine operators to create complex predicates with many tokens: 
~~~json
"predicate": "GPS AND:mul (GPS:Discord OR GPS:Github)"
~~~

## Creating a Census

The first step in creating a complex census is to create the strategy itself. You can write a predicate with the operators defined above and use the predicate with [`createStrategy()`](/sdk/reference/classes/vocdonicensus3client#createstrategy). The only requirement is that you include a list of the necessary tokens used by this predicate, including the token `ID` (address), `chainID`, and optionally the `minBalance` (the minimum necessary balance to include a token-holder in a census).
~~~ts
const strategyID = await census3Client.createStrategy('voc_test_strategy', 'VOC3TEST AND VOC3TEST3', {
  VOC3TEST: {
    ID: '0x9286d95DB5a59306113028EF0BA85bF7068A199F',
    chainID: 11155111,
    minBalance: '1',
  },
  VOC3TEST3: {
    ID: '0x61353Bc49B062EEe99F4768225f4e4f0df5DB1b9',
    chainID: 11155111,
    minBalance: '1',
  },
});
~~~
This API call, if successful, returns the ID of the newly-created strategy. You can also use `getStrategies()` again to make sure the strategy is supported. This ID is needed to create the census based off of the strategy:

~~~ts
const census = await census3Client.createCensus(strategyID);
~~~

This census can be used to create an election just like any other. In this case, the census would represent all token-holders of the `VOC3TEST` and `VOC3TEST3` tokens, all with a weight of 1. 