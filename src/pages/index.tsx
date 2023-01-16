import React from 'react';
import Layout from '@theme/Layout';
import styled from 'styled-components';
import GetStarted from "../components/LandingPage/get-started";
import MultiCards from "../components/LandingPage/multi-cards";


export default function Home(): JSX.Element {
    return (
        <Layout>
            <VectorImage
                src={"/img/landing-vector.svg"}
                alt={"Vector background"}
            />
            <Page>
                <Section>
                    <GetStarted />
                </Section>
                <Section>
                    <MultiCards />
                </Section>
            </Page>
        </Layout>
    )
}

const VectorImage = styled.img`
  position: absolute;
  top: 40%;
`;

const Page = styled.div.attrs({})`
  background: linear-gradient(90deg, rgba(231, 255, 0, 0) -0.01%, #00DDB3 100%);
  opacity: 0.7;
`;

const Section = styled.div.attrs({
    className: 'sm:flex-column sm:px-4 sm:py-4 min-h-screen md:pb-24 flex flex-wrap w-auto m-auto place-items-center h-screen place-content-center ',
})``;