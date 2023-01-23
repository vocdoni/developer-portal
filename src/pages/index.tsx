import React from 'react';
import Layout from '@theme/Layout';
import styled, { createGlobalStyle } from 'styled-components';
import TopSection from "../components/LandingPage/top-section";
import MultiCards from "../components/LandingPage/multi-cards";
import GetStarted from "../components/LandingPage/get-started";
import Blog from "../components/LandingPage/blog";
import '../css/navbar.css';

import LandingVector from '@site/static/img/landing-vector.svg'



export default function Home(): JSX.Element {
    return (
        <>
            <GlobalStyle />
            <Layout>
                <VectorWrapper>
                    <LandingVector  />
                </VectorWrapper>
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
const VectorWrapper = styled.div`
  overflow: hidden; 
  width: 100%;
  position: absolute;
  z-index: -1;
  height: 2000px;
  object-fit: contain;

  & > img {
    left: 24.69%;
    right: -8.06%;
    bottom: 55.48%;
    top: 0%;
  }
`

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