import {ChakraProvider, extendTheme} from '@chakra-ui/react';
import {Wallet} from '@ethersproject/wallet';
import CodeBlock from '@theme-init/CodeBlock';
import Playground from '@theme/Playground';
import ReactLiveScope from '@theme/ReactLiveScope';
import {
  ClientProvider,
  ElectionProvider,
  OrganizationProvider,
  theme,
} from '@vocdoni/chakra-components';
import React from 'react';
import {mockedElection, mockedOrganization} from '../../lib/provider-mocks';

const withLiveEditor = Component => {
  function WrappedComponent(props) {
    if (props.live) {
      // @ts-expect-error: we have deliberately widened the type of language prop
      const signer = new Wallet(
        '0xfd799c0f8ca842ba0b2479580500713c949637f159344e14c0333ff6b76d8920'
      );
      return (
        <ChakraProvider theme={extendTheme(theme)} resetCSS={false}>
          <ClientProvider env="stg" signer={signer}>
            <OrganizationProvider organization={mockedOrganization}>
              <ElectionProvider election={mockedElection}>
                <Playground scope={ReactLiveScope} {...props} />
              </ElectionProvider>
            </OrganizationProvider>
          </ClientProvider>
        </ChakraProvider>
      );
    }
    return <Component {...props} />;
  }
  return WrappedComponent;
};
export default withLiveEditor(CodeBlock);
