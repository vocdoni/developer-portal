import React from 'react';
import Layout from '@theme/Layout';
import styled, { createGlobalStyle } from 'styled-components';
import TopSection from "../components/LandingPage/top-section";
import MultiCards from "../components/LandingPage/multi-cards";
import GetStarted from "../components/LandingPage/get-started";
import Blog from "../components/LandingPage/blog";
import '../css/navbar.css';


export default function Home(): JSX.Element {
    return (
        <>
            <GlobalStyle />
            <Layout>
                <VectorImage
                    src={"/img/landing-vector.svg"}
                    alt={"Vector background"}
                />
                <Page>
                    <NavbarBg />
                    <Section>
                        <TopSection />
                    </Section>
                    <Section>
                        <MultiCards />
                    </Section>
                    <Section>
                        <GetStarted />
                    </Section>
                    {/*<Section>*/}
                    {/*    <Blog />*/}
                    {/*</Section>*/}
                </Page>
            </Layout>
        </>
    )
}

const VectorImage = styled.img`
  position: absolute;
  top: 40%;
`;

const Page = styled.div.attrs({})`
  opacity: 0.7;
  background: var(--voc-landing-background-gradient);

`;

const Section = styled.div.attrs({
    className: 'sm:flex-column sm:px-4 sm:py-4 min-h-screen md:pb-24 flex flex-wrap w-auto m-auto place-items-center h-screen place-content-center ',
})``;

const GlobalStyle = createGlobalStyle`
  #__docusaurus {
  }
  body {
    //background: var(--voc-landing-background-gradient);

  }
`
const NavbarBg = styled.div.attrs({})`
  height: var(--ifm-navbar-height);
  background: var(--voc-landing-background-gradient);
  position: relative;
  top: calc(-1 * var(--ifm-navbar-height));
`