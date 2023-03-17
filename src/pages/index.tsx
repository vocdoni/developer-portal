import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import TopSection from "../components/LandingPage/top-section";
import MultiCards from "../components/LandingPage/multi-cards";
import GetStarted from "../components/LandingPage/get-started";
import Blog from "../components/LandingPage/blog";
import '../css/navbar.css';

import LandingVector from '@site/static/img/landing/landing-vector.svg'
import Bottom from "../components/LandingPage/bottom";
import Layout from "@theme/Layout";


export default function Home(): JSX.Element {
    return (
        <>
            <GlobalStyle />
            <CustomNavbar>
                <Layout>
                    <VectorWrapper>
                        <LandingVector  />
                    </VectorWrapper>
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
                        {/*<Section>*/}
                        {/*    <Blog />*/}
                        {/*</Section>*/}
                        <Section>
                            <Bottom />
                        </Section>
                    </Page>
                </Layout>
            </CustomNavbar>
        </>
    )
}
const VectorWrapper = styled.div`
  overflow: hidden; 
  width: 100%;
  position: absolute;
  z-index: -1;
  height: 3000px;
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
    className: 'flex flex-wrap w-auto sm:flex-column px-4 py-4 ' +
        'lg:pb-24 lg:h-screen lg:place-content-center lg:place-items-center lg:min-h-screen',
})``;

const GlobalStyle = createGlobalStyle`
  #__docusaurus {
  }
  body {
    //background: var(--voc-landing-background-gradient);
  }
`

const CustomNavbar = styled.span`
  & .navbar {
    background: var(--voc-navbar-landing-background-gradient);
  }
`