# Getting Started

Vocdoni is the most open, secure, and universally verifiable voting protocol, used by hundreds of organizations worldwide. The core of our stack is a powerful [decentralized backend](/protocol/overview), including [blockchain](/protocol/overview#11-the-blockchain), [P2P gateway](/protocol/overview#12-gateways), and [distributed file storage](/protocol/overview#13-distributed-storage) components. 

The Vocdoni Protocol layer is accessible via a public [API](/vocdoni-api/vocdoni-api). This API is great for querying data, but running an election requires some advanced understanding of the protocol. Thus, we recommend integrators use the SDK.

The [Software Development Kit](/sdk) is a wrapper for the API and provides developers with an easy way to integrate the functionality of the Vocdoni Protocol. 

The [UI Components](/ui-components) library provides various basic React components for Vocdoni elections.

:::tip Looking to integrate digital voting into your web application?
Start with the [SDK Tutorial](/sdk#tutorial)
:::

## Live preview

These components all come together in our [live demo](https://vocdoni.github.io/vocdoni-sdk/). You can explore a basic Vocdoni implementation by creating some fake voters and starting a simple, single-question election. You will be able to cast a vote for each fake voter and see the results. 


![Live preview](https://raw.githubusercontent.com/vocdoni/vocdoni-sdk/main/docs/images/cra.png)

This demo requires [Metamask](https://metamask.io/download/) (or Walletconnect) to sign transactions. Metamask is a browser extension that holds custody of private keys and cryptocurrencies, but it is simple to install and use, and you need no prior knowledge of this technology. 
:::info No balance is needed 
Metamask is used to sign the transactions that create elections and cast votes. Testing tokens are automatically sent once the account is created. No value is used or exchanged.
:::