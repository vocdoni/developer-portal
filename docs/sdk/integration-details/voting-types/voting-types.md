# Voting Types

In this section, we will provide a brief overview of the different types of voting supported by the Vocdoni protocol and 
how it operates.

## Election types

The [Vocdoni Ballot protocol][ballot-protocol] in its current implementation accommodates multiple **elections types**:

- [Single choice][single-choice], each voter is typically allowed to cast only one vote for their preferred option. This voting system is the only one that **supports multiple questions**. 
- [Ranked voting][ranked], also known as preferential voting, is an electoral system where voters rank candidates in order of preference
- [Approval voting][approval], allows voters to approve or disapprove of each of a set of candidates. This is a binary (yes/no) decision with no ranking of candidates. 
- [Weighted voting][weighted], each voter is assigned a specific weight or value that reflects their relative influence or importance in the decision-making process.
- [Quadratic voting][quadratic], voters can cast multiple votes for issues they prioritize, but the cost of casting 
additional votes on the same issue rises exponentially.

The configuration of these election types happens at the time of election creation using the SDK. Refer to the respective 
documentation for the parameter requirements for each election type.

These voting types describe different sets of behavior that can be generated with the set of election parameters. A comprehensive explanation of the parameters used in the ballot protocol can be found [here][ballot-protocol].

## Results interpretation

The structure for individual ballots and the corresponding results can vary depending on the election parameters. For example, a vote envelope `[0, 2, 1]` could mean one of the following:
- 0 points for the first candidate, 2 points for the second candidate, 1 point for the third candidate
- first-choice selection for the first candidate, third-choice for the second candidate, and second-choice for the third
- choice of option `0` for the first question, option `2` for the second question, and option `1` for the third.

The interpretation of votes is done at the protocol-level, according to the election parameters. The results are stored on the Vochain as a bi-dimensional array. Essentially, the ballot protocol is a system that transforms a unidimensional array (a vote, e.g., `[1,4]`) into a bi-dimensional array of results (e.g., `[[2,5], [3,8]]`).

The interpretation of this matrix of results is done on the client side, which receives the raw results from the SDK. The SDK also provides metadata about the election to facilitate understanding of the results. More details on interpreting results can be found [here][results-interpretation].

Here's a simple example to demonstrate how the same result array can be interpreted in different ways, depending on the election type:

#### Linear-Weighted Choice Voting

Consider a single-choice question where three candidates are ranked by voters, each receiving a number of 'points' according to each voter's ranking. This is an example of `linear-weighted choice`.  A results array with 10 votes might look like this:

```
[ 
    [4, 6, 0], 
    [2, 4, 4], 
    [4, 0, 6] 
]
```

Each row of this matrix represents a single candidate, and each column represents a chosen allocation of points. The numbers represent the total number of votes for that candidate/points combination.

In this scenario:

- The first candidate receives 4 0-point votes and 6 1-point votes
- The second candidate receives 2 0-point, 4 1-point, and 4 2-point votes
- The third candidate receives 4 0-point votes and 6 2-point votes

We can use this results matrix to calculate the total weighted sum for each candidate: the first candidate receives 6 points, the second candidate receives 12, and the third candidate receives 12. Candidates 2 and 3 tie. This results interpretation is "weighted," meaning each choice represents a quantified amount of preference, and we could aggregate the results into a single array of allocated points without losing any information:
```
[6, 12, 12]
```

:::note aggregated results
For all elections where `maxValue` is set to `0`, it is assumed that the election uses a weighted results system (like in this example). The aggregated results (`[6, 12, 12]`) are calculated on the indexer and reported as the official results.
:::

#### Ranked-Choice Voting

Consider a single-choice question where three candidates are ranked by preference, and if no candidate receives more than 50% of the first-choice votes, second-choice votes are considered (a runoff election). This is one example of a `ranked voting` scheme.  The results array could look identical to the one above:

```
[ 
    [4, 6, 0], 
    [2, 4, 4], 
    [4, 0, 6] 
]
```

Each row of this matrix represents a single candidate, and each column represents the choice (first, second, third). The numbers represent the total number of votes for that candidate/choice combination.

In this scenario:

- The first candidate receives 4 first-choice and 6 second-choice votes
- The second candidate receives 2 first-choice, 4 second-choice, and 4 third-choice votes
- The third candidate receives 6 first-choice and 4 third-choice votes


The main difference between this example in the last is that each vote count has to be treated as a discrete piece of data rather than a value that can be combined arithmetically with others. This is because this election has a complex method for calculating the winner where first and second choices have different meanings rather than different amounts of the same meaning. The entire results matrix is needed in order to calculate a result. 

:::tip ranked-choice
For ranked-choice, the `maxValue` parameter cannot equal zero to signify that values are discrete options, not weighted points.
:::

In this case, the first and third candidates tie with 40% of the vote each when only first-choice votes are considered. Thus we must consider a runoff using second-choice votes: the first candidate gets 60% of the second-choice votes, and the third candidate gets 0%. The first candidate wins the election.

#### Multiple Question

Now, let's consider an election with three questions, where each question has three options. Voters must select one of the three options for each question. This is a multiple-question, multiple-choice election.

```
[ 
    [4, 6, 0], 
    [2, 4, 4], 
    [4, 0, 6] 
]
```

Each row of this matrix represents a separate question, and each column represents the choice (first, second, third). The numbers represent the total number of votes for that question/choice combination.

In this scenario:

- For the first question, candidate 0 receives 4 votes and candidate 1 receives 6 (candidate 1 wins)
- For the second question, candidate 0 receives 2 votes, candidate 1 receives 4, and candidate 2 receives 4 (candidates 1 and 2 tie)
- For the third question, candidate 0 receives 4 votes and candidate 2 receives 6 (candidate 2 wins)

You can see how the same results matrix could represent a wide set of interpretations, and it is crucial to pay attention to the election parameters and original design of the election when displaying the results. 

[ballot-protocol]: /protocol/ballot-protocol
[results-interpretation]: /protocol/ballot-protocol#vocdoni-results-interpretation
[single-choice]: voting-types/single-choice
[ranked]: voting-types/ranked
[approval]: voting-types/approval
[weighted]: voting-types/weighted
[quadratic]: voting-types/quadratic