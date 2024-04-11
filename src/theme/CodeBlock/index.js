import React from 'react'
import Playground from '@theme/Playground'
import ReactLiveScope from '@theme/ReactLiveScope'
import CodeBlock from '@theme-init/CodeBlock'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import {
  ClientProvider,
  ElectionProvider,
  OrganizationProvider
} from '@vocdoni/chakra-components'
import {theme} from '@vocdoni/chakra-components'
import {Wallet} from '@ethersproject/wallet'
import {mockedElection, mockedOrganization} from '../../lib/provider-mocks'

import {http, HttpResponse} from 'msw'
import {setupWorker} from 'msw/browser'

const mswWorker = setupWorker(
  http.get('/zoom', () => HttpResponse.json({id: 'abc-123'})),
  http.get('https://api-stg.vocdoni.net/v2/accounts/:id', () =>
    HttpResponse.json({
      address: '923f171c6502a404112ad06c05491f859949633e',
      nonce: 0,
      balance: 9999,
      electionIndex: 0,
      infoURL:
        'ipfs://bafybeif5mbhhwuju2pyd54bxhn3tdsj6m5cukx6f5xvchqfh2wvzkpbjpy',
      metadata: {
        version: '1.0',
        languages: ['en'],
        name: {default: 'Account name'},
        description: {default: 'Description of the account'},
        newsFeed: {default: ''},
        media: {logo: 'https://logo.io'},
        meta: {}
      },
      sik: 'd5f382daca25f43ca46f629e6fa7b0a448f1c69c48fcb2031feee0bf439d502c'
    })
  )
)
console.log('starting worker')
mswWorker.start()

const withLiveEditor = Component => {
  function WrappedComponent (props) {
    if (props.live) {
      // @ts-expect-error: we have deliberately widened the type of language prop
      const signer = new Wallet(
        '0xfd799c0f8ca842ba0b2479580500713c949637f159344e14c0333ff6b76d8920'
      )
      return (
        <ChakraProvider theme={extendTheme(theme)} resetCSS={false}>
          <ClientProvider env='stg' signer={signer}>
            <OrganizationProvider organization={mockedOrganization}>
              <ElectionProvider election={mockedElection}>
                <Playground scope={ReactLiveScope} {...props} />
              </ElectionProvider>
            </OrganizationProvider>
          </ClientProvider>
        </ChakraProvider>
      )
    }
    return <Component {...props} />
  }
  return WrappedComponent
}
export default withLiveEditor(CodeBlock)
