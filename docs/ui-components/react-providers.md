# React Providers

In order for the `@vocdoni/chakra-components` components to be functional, they need to be wrapped with react context and providers from `@vocdoni/react-providers`. The react providers are the link between the Vocdoni Protocol and the UI Components, using the Vocdoni SDK to perform all the necessary tasks involved to fetch data and vote in elections. 

React-providers can also be used as a standalone package, allowing you to create custom react components without interacting directly with the Vocdoni SDK. 

## Usage

First, add the react-providers package to your project:
~~~bash
yarn add @vocdoni/react-providers
~~~

The following providers are available:
- ClientProvider
- ElectionProvider
- OrganizationProvider

### ClientProvider

The `ClientProvider` is a necessary wrapper for any application that uses election or organization components, as it provides the ability to make network requests and sign cryptographic packages. `ClientProvider` is a dependency of the other providers.

The very first step is to add the `<ClientProvider />` as a wrapper of your
application or, at least, of your election:

~~~tsx
import { ClientProvider } from '@vocdoni/react-providers'

const App = () => {
  const signer = /* any ethers based signer */
  return (
    <ClientProvider env='stg' signer={signer}>
      {/* your actual app code */}
    </ClientProvider>
  )
}
~~~
The signer must be a valid cryptographic wallet. It is used to sign requests to the Vocodni network. If the client represents an organization, this wallet address will be the organization ID. If voting, this wallet is used as the voter's private key. `env` can be any of the [Vocdoni Environments][sdk environments], either in string format or using the SDK `EnvOptions` enum.


### ElectionProvider

The `ElectionProvider` allows you to interact with published elections and execute actions like voting.
You can use it as a wrapper of your election components:

~~~tsx
import { ElectionProvider } from '@vocdoni/react-providers'

const MyElection = () => {
  return (
    <ElectionProvider id='election-uuid'>
      {/* your actual election code */}
    </ElectionProvider>
  )
}
~~~

If you specify an election ID, the provider will fetch the election for you. You can alternatively directly pass an `election` object to the `ElectionProvider` constructor. This is useful if you want to render a list of elections whose data you already have:

~~~tsx
import { ElectionProvider } from '@vocdoni/react-providers'

const MyElectionList = () => {
  const elections = /* your elections list */
  return (
    elections.map((election)=> (
      <ElectionProvider election={election}>
        <MyElectionListItem />
      </ElectionProvider>
    ))
  )
}
~~~

Once you have initialized the provider, you can use the `useElection` hook to interact with the election:


~~~tsx
import { useElection } from '@vocdoni/react-providers'

const MyElectionListItem = () => {
  const { election } = useElection()

  return <h1>{election.title.default}</h1>
}
~~~

### OrganizationProvider

This provider is similar to the ElectionProvider` but gives you the ability to represent and interact with organizations.

~~~tsx
import { OrganizationProvider } from '@vocdoni/react-providers'

const MyElection = () => {
  return (
    <OrganizationProvider id='organization-uuid'>
      {/* your actual organization code */}
    </OrganizationProvider>
  )
}
~~~

### Hooks

- `useClient` allows you to interact with the `ClientProvider` layer. All the
  methods it exports allow you to use the client while interacting with the
  context/state:
    + `fetchAccount`: fetches connected account information (and balance)
    + `createAccount`: creates a new account using the connected signer
    + `setClient`: allows you to change the client during runtime
    + `localize`: internal method used for localization
    + `setSigner`: allows you to change the signer during runtime
    + `generateSigner`: allows you to *generate* a signer
- `useElection` allows you to interact with the `ElectionProvider` layer. As per
  the `useClient` methods, anything exported here updates with the context:
    + `fetchElection`
    + `setClient`: allows you to change the client at election layer level
    (used by flows like the spreadsheet/csv login one)
    + `vote`: A helper method to vote, using the current context info.
- `useOrganization`:
  + `fetch`: fetches the organization data
  + `update`: update the organization (only for organization owners)