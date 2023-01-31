import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { theme } from '@vocdoni/react-components'

// Default implementation, that you can customize
export default function Root({children}) {
    return (
        <>
            <ChakraProvider theme={extendTheme(theme)}>
                {children}
            </ChakraProvider>
        </>);
}