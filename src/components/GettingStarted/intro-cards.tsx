import styled from 'styled-components';
import React from 'react';
import {Link} from 'react-router-dom';

interface ICard {
  title: string;
  body: string;
  href: string;
}

const cards: ICard[] = [
  {
    title: 'SDK',
    body: 'Full-featured typescript library for interacting with the Vocdoni Protocol',
    href: 'sdk',
  },
  {
    title: 'API',
    body: 'HTTPS API that provides access to the Vocdoni voting protocol',
    href: 'vocdoni-api/vocdoni-api',
  },
  {
    title: 'UI Components',
    body: 'React/ChakraUI components library for election management & voting',
    href: 'ui-components',
  },
  {
    title: 'Protocol',
    body: "Core logic of Vocdoni's blockchain-based voting infrastructure",
    // The core Vocdoni infrastructure specification,
    href: 'protocol',
  },
];

const Card = ({title = '', body = '', href = ''}: ICard) => {
  return (
    <Link to={href}>
      <CardBox>
        <CardTitle>{title}</CardTitle>
        <CardBody>{body}</CardBody>
      </CardBox>
    </Link>
  );
};

export default function IntroCards(): JSX.Element {
  return (
    <>
      <MainWrapper>
        <CardsWrapper>
          {cards.map((card, i) => (
            <Card
              key={i}
              title={card.title}
              body={card.body}
              href={card.href}
            />
          ))}
        </CardsWrapper>
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.div.attrs({
  className: 'lg:gap-12 pb-6',
})``;

const CardsWrapper = styled.div.attrs({
  className: 'grid md:grid-cols-4 gap-2',
})``;

const CardBox = styled.div.attrs({
  className: 'max-w-sm p-5 bg-white shadow-md h-full',
})`
  transition: border 0.08s ease-in;
  background: linear-gradient(
    202.06deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: inset -1px 1px 4px rgba(255, 255, 255, 0.25);
  filter: drop-shadow(-2px 2px 16px rgba(0, 0, 0, 0.1));
  backdrop-filter: blur(4px);
  border-radius: 8px;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #27af86;
  }
`;

const CardTitle = styled.div.attrs({
  className: 'mb-1 pt-0 text-black font-bold',
})``;

const CardBody = styled.div.attrs({
  className: 'font-normal text-sm text-black',
})`
text-align:justify 
text-justify:auto
`;
