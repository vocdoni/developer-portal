# Development Guidelines

These guidelines serve both as an internal guide for our team and an overview for contributors. While we welcome contributions from the community, we do not track all of our issues on Github and we may not have the resources to onboard developers and review complex pull requests. That being said, there are multiple ways you can get involved with the project. 

- If you have a simple bug or feature request, please submit an issue. We have many repositories, so please try to submit your issue to the relevant code base (eg. protocol feature request => [vocdoni-node](https://github.com/vocdoni/vocdoni-node), UI integration bugs => [ui-components](https://github.com/vocdoni/ui-components)). 
- For simpler and more accessible contributions that should be possible without much onboarding, search our repositories for issues that have the [help-wanted](https://github.com/vocdoni/REPO_NAME/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) or [good-first-issue](https://github.com/vocdoni/REPO_NAME/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) tags. 
    - Fork the Project
    - Create your Feature Branch (`git checkout -b feature/yourFeature`)
    - Commit your Changes (`git commit -m 'Add some yourFeature'`)
    - Add tests according to our [test](#testing-strategy) guidelines
    - Push to the Branch (`git push origin feature/yourFeature`)
    - Open a Pull Request
- For more complex feature requests, or if you would like to contribute further, please reach out on our [discord](https://chat.vocdoni.io) support channel. 

## Intro
- The motto is: **keep it simple**
    - If we over-extend the explanations or the 'rules', these guidelines will be harder to read and therefore harder to follow.
    - Development guidelines can easily fall into the trap of being very opinionated and subjective. To avoid this, we aim to specify a *'minimum common base layer'* for our development. If a specific team wants to add some extra concrete steps particular to their area of expertise, they are free to do so. 

## Task management
- Description of the current status:
    - Concrete tasks are defined in `Github issues`
    - General tasks are defined in `Notion`
    
## Docs/Specs strategy
- Code should be well documented (following the specific language guidelines)
- New features should be documented before being implemented
    - Reasons:
        - Avoid inefficiencies due incompatibilities on the client & server sides
        - Make it easier for the reviewer to verify that the implementation follows the spec
    - **Product features** need to be well described before being implemented.
       - A description of **why** this change is being made is expected.
       - A clear definition of feature completion is expected.
    - **Protocol changes** need to be documented on a docs PR, following a discussion
       - Use the Github discussions on the `protocol` repo when the topic is relevant to the community
       - Use a Notion page or a HackMD if the topic is relevant to the team only

:::info 
[discuss.vocdoni.io](https://discuss.vocdoni.io) is used for discussing new features and protocol proposals.
:::

### Layers of documentation
- **Tasks related to PR discussions**: discuss the problem, possible solutions, ideas, agreements, related issues
- **Commit message**: describe what the commit adds & why
- **Inline code documentation**: describe the method & logic of the code, to help the future reader of the code
- **developer.vocdoni.io**: document the spec & architecture. If a new protocol/feature is being added, it should appear here before the implementation starts.
- **Package README.md**: update the readme according to the [readme template](./readme-template.md)

### Readme
- Any new repository should use the [readme template](./readme-template.md) as the base for its readme file
- This readme file is not intended to be the source-of-truth for documentation
- The following types of documentation belong in the developer portal:
  - Autogenerated API reference
  - Protocol/architecture design documentation
  - Tutorials and guides for public-facing tools (eg. UI Components)
- The following may belong in the repository readme file:
  - Prerequisites or installation instructions
  - Tutorials for internal or experimental tools (eg [storage-proofs-eth-go](https://github.com/vocdoni/storage-proofs-eth-go))
  - License information

## Testing strategy

- **Unit**: test the unit in full isolation from any other code part. Usually within a unique package.
- **Integration**: where individual units and components are combined and tested as a group with a clear scope. Usually using multiple packages.
    - example:
        - https://github.com/vocdoni/vocdoni-node/tree/master/test
- **End-to-end**: uses a service that is not in the repo, and performs the full flow. Can test the user behavior.
    - examples:
        - The docker-compose test suite on vocdoni-node: https://github.com/vocdoni/vocdoni-node/tree/master/dockerfiles/testsuite


Priority of test layers:
1. Add **unit tests** to the feature being added
2. When a group of features enables a new flow, add **integration test** for that flow (which combines the features)
3. If possible, implement the same flow from the integration test into an **end-to-end test**

When fixing a **bug**:
1. Add the tests that make the bug appear
2. Fix the bug
3. Execute the test and check that the bug has been fixed
The idea behind this strategy is to be able prove with code that the bug is fixed by implementing a test that fails due to the bug. 


### Code reviews
- It is the responsability of the PR creator & PR reviewers to ensure that the *Testing strategy* is followed. No PR should be merged if there are missing tests for the newly added code.
- Each repository has a list of people with enough knowledge about it to review PRs.
- When creating a PR, PR creator needs to `require` at least 1 PR reviewer
    - Take in mind that the PR reviewer may be receiving lots of emails of notifications of Github, so the PR creator should decide if it's needed to send a private message to that person to notify of the PR

#### Reviewing a PR
- When reviewing others' code, try to:
    - **A**. Be very clear about the requested change, stating the issue unambiguously or suggesting a code edit.
    - **B**. If the request is ambiguous, doesn't provide enough details or is a
    personal opinion without strong arguments, state that the request is not
    blocking and let the author of the PR decide wether to make a change or not
    at their own discretion.

#### Automated Code Review
- PRs can be merged once:
    - the tests pass
    - the linters pass (if activated)
- It's the responsability of the repo creator/owner to configure the Github Actions with the automated Tests & Linters for each commit & PR

## Linters

Most repos include a linter configuration file. For example, the `vocdoni-sdk` package [Github actions](https://github.com/vocdoni/vocdoni-sdk/blob/71366611184b8f7579ec0b033f40a056d49ebb94/.github/workflows/main.yml#L30) requires `[eslint]`(https://github.com/vocdoni/vocdoni-sdk/blob/main/.eslintrc.cjs). And new repos should include a linter file from an existing repo of that given language and require linting as one of the automated tests. 

## Git branching guidelines

### Branches

1. `main` all new developments are merged on this branch, it is the main branch
2. `stage` pre-release branch environment in some core repos
3. `release-*` for each new release there will be a release branch based on master. **The highest-number release-\* branch is assumed to be active & deployed**
4. `feature/*` development branch for a new feature (they are temporary and merged into master)
5. `hotfix/*` branch for fixing release bugs

### Examples

#### New development

1. A new feature branch is created from master: `feature/add_datalayer_swarm`
2. If the development takes some time and master has new code, rebase it (`main`->`feature/add_datalayer_swarm`)
3. Once the feature is finished it will be merged to master via a PR (depending on the relevance of the feature, fast-forward or merge-commit will be used)


#### Stage

A stage or 'stg' branch exists on the core repositories. 
When a new release needs to be created, the first step is the stage (pre-release) phase.
Stage will be based on `main` branch. Once testing and quality assurance has been completed, stage will be moved to `release-X.Y`


### Release creation

1. A new release branch is created from stage, such as release-0.1
2. The release branch will receive changes which are only required by the specific release and hotfixes
3. Once the release is ready to be published, a new tag is created: v0.1.0


### Release hotfix

1. If a relevant bug is found, a new hotfix branch is created, based on the last release: `hotfix/data_race_swarm`
2. Once the hotfix is done, it is merged to the release-0.1 branch. The hotfix might be cherry-picked from master
3. A new tag is created: v0.1.1
4. Meanwhile the master branch keeps being updated on its own


## Other considerations

Make commits atomic. Usually 1 commit per modification (do not worry about creating multiple commits):

+ Wrong: 1)`add datalayer and other modifications`
+ Correct: 1)`add new datalayer swarm` 2)`swarm datalayer API integration` 3)`extend README with swarm datalayer information` 4)`add comments to swarm datalayer`

Use fast-forward for small merges such as 1 or 2 commits. Use merge-commit when merging features or bugfixes with several commits.

Exception: before merging, if the commit history is messy or dirty, squash the commits and add a single large commit listing all modifications.