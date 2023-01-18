import React from 'react';
import Layout from '@theme/Layout';
import styled from 'styled-components';
import TopSection from "../components/LandingPage/top-section";
import MultiCards from "../components/LandingPage/multi-cards";
import GetStarted from "../components/LandingPage/get-started";
import Blog from "../components/LandingPage/blog";


export default function Home(): JSX.Element {
    return (
        <Layout>
            <VectorImage
                src={"/img/landing-vector.svg"}
                alt={"Vector background"}
            />
            <Page>
                <Section>
                    <TopSection />
                </Section>
                <Section>
                    <MultiCards />
                </Section>
                <Section>
                    <GetStarted />
                </Section>
                <Section>
                    <Blog />
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