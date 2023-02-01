import React from 'react';
import Playground from '@theme/Playground';
import ReactLiveScope from '@theme/ReactLiveScope';
import CodeBlock from '@theme-init/CodeBlock';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { theme } from '@vocdoni/react-components'

const withLiveEditor = (Component) => {
  function WrappedComponent(props) {
    if (props.live) {
      // @ts-expect-error: we have deliberately widened the type of language prop
      return (
        <ChakraProvider theme={extendTheme(theme)} resetCSS={false}>
          <Playground scope={ReactLiveScope} {...props} />
        </ChakraProvider>
      )
    }
    return <Component {...props} />;
  }
  return WrappedComponent;
};
export default withLiveEditor(CodeBlock);
