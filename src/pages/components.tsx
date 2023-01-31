import React from 'react';
import Layout from '@theme/Layout';
import { Image } from '@vocdoni/react-components';

export default function Hello() {
    return (
        <>
            <Layout title="Hello" description="Hello React Page">
                <Image
                    borderRadius="full"
                    boxSize="100px"

                    src="https://picsum.photos/200"
                    alt="random image"
                />
                {/*<HR></HR>*/}
            </Layout>
        </>
    );
}