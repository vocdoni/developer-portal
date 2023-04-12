import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import TopSection from "../components/LandingPage/top-section";
import MultiCards from "../components/LandingPage/multi-cards";
import GetStarted from "../components/LandingPage/get-started";
import '../css/navbar.css';

import LandingVector from '@site/static/img/landing/landing-vector.svg'
import Bottom from "../components/LandingPage/bottom";
import Layout from "@theme/Layout";


export default function Home(): JSX.Element {
    return (
        <>
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
        'md:place-content-center md:place-items-center lg:pb-24 lg:h-5/6'
})``;

const CustomNavbar = styled.span`
  & .navbar {
    background: var(--voc-navbar-landing-background-gradient);
  }
`