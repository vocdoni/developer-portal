import React from 'react';
import Layout from '@theme/Layout';
import { Image } from '@vocdoni/react-voting';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { theme } from '@vocdoni/react-voting'

export default function Hello() {
    return (
        <>
            <Layout title="Hello" description="Hello React Page">
                <ChakraProvider theme={extendTheme(theme)}>
                    <Image
                        borderRadius="full"
                        boxSize="100px"

                        src="https://picsum.photos/200"
                        alt="random image"
                    />
                </ChakraProvider>
                {/*<HR></HR>*/}
            </Layout>
        </>
    );
}