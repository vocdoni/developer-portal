---
sidebar_position: 1
slug: introduction
---

# Introduction

In this section, we will provide a brief overview of the different types of voting supported by the Vocdoni protocol and 
how it operates.

## Election types

The [Vocdoni Ballot protocol](/protocol/ballot) in its current implementation accommodates multiple **elections types**:

- [Single choice](single-choice), each voter is typically allowed to cast only one vote for their preferred option. This
voting system is the only one that **supports multiple questions**. 
- [Ranked voting](ranked), also known as preferential voting, is an electoral system where voters rank candidates in order of preference
- [Approval voting](approval), or multiple choice, here the voters are allowed to indicate their support for multiple 
candidates or options.
- [Weighted voting](weighted). each voter is assigned a specific weight or value that reflects their relative influence or 
importance in the decision-making process.
- [Quadratic voting](quadratic), voters can cast multiple votes for issues they prioritize, but the cost of casting 
additional votes on the same issue rises exponentially.

The configuration of these election types happens at the time of election creation using the SDK. Refer to the respective 
documentation for the parameter requirements for each election type.

A comprehensive explanation of the parameters used in the ballot protocol can be found [here](/protocol/ballot).

## Results interpretation

The results are stored on the Vochain as a bi-dimensional array. Essentially, the ballot protocol is a system that 
transforms a unidimensional array (a vote, e.g., `[1,4]`) into a bi-dimensional array of results (e.g., `[[2,5]]`).

The interpretation of results is done on the user side, which receives the results from the SDK. The SDK provides 
metadata about the election to facilitate understanding of the results. More details on interpreting results can be found , 
[here](/protocol/ballot#vocdoni-results-interpretation).

Here's a simple example to demonstrate how the result array can be interpreted in different ways, depending on the 
election type:

Consider a question where 2 candidates are ranked by preference, which is an example of `ranked voting`.  The results 
array might look like this:

```
[ 
    [0, 0, 10], 
    [0, 10, 0], 
    [10, 0, 0] 
]
```

In this scenario:

- 10 voters select the first candidate as third option
- 10 voters select the second candidate as second option
- 10 voters select the third candidate as first option

Now, let's examine another election type that can produce the same results array. For a question like "choose your 3 
favorite colors out of 2", which is an example of `approval voting`, the results array may look like that:

```
[ 
    [10, 0], 
    [0, 10], 
    [0, 10] 
]
```

On this case, the results interpretation may vary:

- 10 users give 0 points to first option
- 10 users give 1 point to second and third options

The examples above represent two methods for interpreting the results array. Additional examples are available for 
different voting type result interpretations.

:::note Weighted results are calculated on the indexer

In a weighted election, the Vochain stores the envelope without calculating the weight of each voter. However, when 
retrieving the results using the SDK, you will see the weights applied. The application of these weights is performed 
by the vocdoni-node indexer, which calculates the weights for you.

The weights of each vote are stored in the envelope, which is saved on the Vochain.

:::
