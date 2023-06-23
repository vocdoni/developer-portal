import React from 'react';
import Playground from '@theme/Playground';
import ReactLiveScope from '@theme/ReactLiveScope';
import CodeBlock from '@theme-init/CodeBlock';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { ClientProvider } from '@vocdoni/chakra-components'
import { theme } from '@vocdoni/chakra-components';

const withLiveEditor = (Component) => {
    function WrappedComponent(props) {
        if (props.live) {
            // @ts-expect-error: we have deliberately widened the type of language prop
            return (
                <ChakraProvider theme={extendTheme(theme)} resetCSS={false}>
                    <ClientProvider env='stg'>
                        <Playground scope={ReactLiveScope} {...props} />
                    </ClientProvider>
                </ChakraProvider>
            )
        }
        return <Component {...props} />;
    }
    return WrappedComponent;
};
export default withLiveEditor(CodeBlock);
