import React from 'react';
import Playground from '@theme/Playground';
import ReactLiveScope from '@theme/ReactLiveScope';
import CodeBlock from '@theme-init/CodeBlock';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import {ClientProvider, ElectionProvider, OrganizationProvider} from '@vocdoni/chakra-components'
import { theme } from '@vocdoni/chakra-components';
import {mockedElection, mockedOrganization} from "../../lib/provider-mocks";

const withLiveEditor = (Component) => {
    function WrappedComponent(props) {
        if (props.live) {
            // @ts-expect-error: we have deliberately widened the type of language prop
            return (
                <ChakraProvider theme={extendTheme(theme)} resetCSS={false}>
                    <ClientProvider env='stg'>
                        <OrganizationProvider organization={mockedOrganization}>
                            <ElectionProvider election={mockedElection}>
                                <Playground scope={ReactLiveScope} {...props} />
                            </ElectionProvider>
                        </OrganizationProvider>
                    </ClientProvider>
                </ChakraProvider>
            )
        }
        return <Component {...props} />;
    }
    return WrappedComponent;
};
export default withLiveEditor(CodeBlock);
