import {ChakraProvider, extendTheme} from '@chakra-ui/react';
import CodeBlock from '@theme-init/CodeBlock';
import Playground from '@theme/Playground';
import ReactLiveScope from '@theme/ReactLiveScope';
import {
  ActionsProvider,
  ClientProvider,
  theme,
} from '@vocdoni/chakra-components';
import {ElectionProvider, OrganizationProvider} from '@vocdoni/react-providers';
import {EnvOptions} from '@vocdoni/sdk';
import React from 'react';
import {
  client,
  electionId,
  organizationId,
  spreadsheetElectionId,
} from '../../lib/provider-mocks';

const withLiveEditor = Component => {
  function WrappedComponent(props) {
    if (props.live) {
      let mockElectionId = electionId;
      if (props.title === '"spreadsheet"') {
        mockElectionId = spreadsheetElectionId;
      }
      return (
        <ChakraProvider theme={extendTheme(theme)} resetCSS={false}>
          <ClientProvider env={EnvOptions.STG} signer={client.wallet}>
            <OrganizationProvider id={organizationId}>
              <ElectionProvider id={mockElectionId} fetchCensus={true}>
                <ActionsProvider>
                  <Playground scope={ReactLiveScope} {...props} />
                </ActionsProvider>
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
