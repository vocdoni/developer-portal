import React, {ReactNode} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {ComponentCard, IComponentCardProps} from '../components/ComponentCard';
import styled from 'styled-components';
import {
  WelcomeCard,
  HeroHeader,
  IllustrationSdk,
  IllustrationCore,
  IllustrationDesignSystem, IWelcomeCardProps,
} from '../components';
import {IconInfo} from '@aragon/ui-components';


const componentCards: IComponentCardProps[] = [
  {
    title: 'Introduction',
    description:
        'Vocdoni defines an open architecture and the protocols to empower large communities to exercise full democracy with the best guarantees.',
    img: '/img/layers3.jpg',
    to: '/get-started/intro',
    // external: true,
    plausibleClass: "plausible-event-name=Learn+More+Introduction"
  },
  {
    title: 'API Endpoints',
    description:
      'Integrate Secure, Digital Voting Everywhere. No need to create a voting system from scratch. Solve your governance needs, or those of your customers, by taking advantage of Vocdoni\'s voting protocol, using our API.',
    img: '/img/layers2.jpg',
    to: '/category/vocdoni-api',
    plausibleClass: "plausible-event-name=Learn+More+API",
  },
  {
    title: 'SDK',
    description:
      'We care about the right abstractions so your teams can integrate voting functionality comfortably and quickly.',
    img: '/img/layers1.jpg',
    to: '/sdk',
    plausibleClass: "plausible-event-name=Learn+More+SDK",
  },
];

const StyledInfoIcon = styled(IconInfo).attrs({
  className: 'text-primary-500',
})``;
const welcomeCards: IWelcomeCardProps[] = [
  {
    title: 'Get Started',
    description:
      'Start here if you want to know from scratch how to use Vocdoni technology',
    icon: <StyledInfoIcon />,
    linkLabel: 'Get started',
    href: '/get-started/intro',
  },
  {
    title: 'Tutorials',
    description:
      'Coming soon',
    icon: <StyledInfoIcon />,
    linkLabel: 'View Reference Guide',
    // href: '/docs/guide',
  },
  {
    title: 'Guides',
    description:
      'Understand how to use the Vocdoni.app application step by step.',
    icon: <StyledInfoIcon />,
    linkLabel: 'Know More',
    href: 'https://documentation.aragon.org/products/aragon-vocdoni/what-is-aragon-vocdoni',
    external: true
  },
];

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Container>
        <HeroHeader
          title="Vocdoni developer portal"
          subtitle="Here you'll finds guides, resources and references to use Vocdoni stack"
          img={require('@site/static/img/welcome-image.png').default}
        />
        {/*<WelcomeCardsWrapper>*/}
        {/*  {welcomeCards.map((card, index) => (*/}
        {/*    <WelcomeCard*/}
        {/*      key={index}*/}
        {/*      title={card.title}*/}
        {/*      description={card.description}*/}
        {/*      icon={card.icon}*/}
        {/*      href={card.href}*/}
        {/*      linkLabel={card.linkLabel}*/}
        {/*      external={card.external}*/}
        {/*    />*/}
        {/*  ))}*/}
        {/*</WelcomeCardsWrapper>*/}
        <ComponentCardsWrapper>
          {/*<ComponentCardsTitle>Explore</ComponentCardsTitle>*/}
          {componentCards.map((card, index) => (
            <ComponentCard
              key={index}
              title={card.title}
              description={card.description}
              img={card.img}
              to={card.to}
              external={card.external}
              plausibleClass={card.plausibleClass}
            />
          ))}
        </ComponentCardsWrapper>
      </Container>
      <br /><br /><br />
    </Layout>
  );
}

const Container = styled.div.attrs({
  className: 'md:p-18 p-6 flex-col flex space-y-12 w-full md:w-4/5 m-auto',
})``;
const ComponentCardsWrapper = styled.div.attrs({
  className: 'flex flex-col space-y-6',
})``;
const WelcomeCardsWrapper = styled.div.attrs({
  className: 'flex md:flex-row md:space-x-4 md:space-y-0 flex-col space-y-4',
})``;
const ComponentCardsTitle = styled.p.attrs({
  className: 'font-medium text-xl ',
})``;
