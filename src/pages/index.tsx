import React from 'react';
import Layout from '@theme/Layout';
import styled from 'styled-components';


export default function Home(): JSX.Element {
    return (
        <Layout>
            <VectorImage
                src={"/img/landing-vector.svg"}
                alt={"Vector background"}
            />
            <Page>

                <Section>
                    <h1>Section 1</h1>
                </Section>

                <Section>
                    <h1>Section 2</h1>
                </Section>
            </Page>

        </Layout>
    )
}

const VectorImage = styled.img`
  position: absolute;
  left: 24.69%;
  right: -8.06%;
  top: 6.74%;
  bottom: 54.68%;
`

const Section = styled.div.attrs({
    className: 'min-h-screen md:p-18 p-6 flex-col flex space-y-12 w-full m-auto',
})``;

const Page = styled.div.attrs({})`
  background: linear-gradient(90deg, rgba(231, 255, 0, 0) -0.01%, #00DDB3 100%);
  opacity: 0.7;
`;