import React from 'react';
import styled from 'styled-components';
import GetStarted from '../components/LandingPage/get-started';
import MultiCards from '../components/LandingPage/multi-cards';
import TopSection from '../components/LandingPage/top-section';
import '../css/navbar.css';

import LandingVector from '@site/static/img/landing/landing-vector.svg';
import Layout from '@theme/Layout';
import Bottom from '../components/LandingPage/bottom';

export default function Home(): JSX.Element {
  return (
    <>
      <CustomNavbar>
        <Layout>
          <VectorWrapper>
            <LandingVector />
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
  );
}
const VectorWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  position: absolute;
  z-index: -1;
  object-fit: contain;
  height: 2500px;

  & > svg {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const Page = styled.div.attrs({})`
  opacity: 0.7;
  background: var(--voc-landing-background-gradient);
`;

const Section = styled.div.attrs({
  className:
    'flex flex-wrap w-auto sm:flex-column px-4 py-4 ' +
    'md:place-content-center md:place-items-center lg:pb-24 lg:h-[90vh]',
})``;

const CustomNavbar = styled.span`
  & .navbar {
    background: var(--voc-navbar-landing-background-gradient);
  }
`;
