import styled from 'styled-components';
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";


interface ICard {
    title: string
    body: string
    linkText: string
    href: string
}

const cards: ICard[] = [
    {
        title: "GETTING STARTED",
        body: "Deploy an enterprise-ready instance of Hasura in minutes using your container platform of choice.",
        href: "blah",
        linkText: "See Hasura Enterprise"
    },
    {
        title: "GETTING STARTED",
        body: "Deploy an enterprise-ready instance of Hasura in minutes using your container platform of choice.",
        href: "blah",
        linkText: "See Hasura Enterprise"
    },
    {
        title: "GETTING STARTED",
        body: "Deploy an enterprise-ready instance of Hasura in minutes using your container platform of choice.",
        href: "blah",
        linkText: "See Hasura Enterprise"
    },
    {
        title: "GETTING STARTED",
        body: "Deploy an enterprise-ready instance of Hasura in minutes using your container platform of choice.",
        href: "blah",
        linkText: "See Hasura Enterprise"
    },
    {
        title: "GETTING STARTED",
        body: "Deploy an enterprise-ready instance of Hasura in minutes using your container platform of choice.",
        href: "blah",
        linkText: "See Hasura Enterprise"
    },
    {
        title: "GETTING STARTED",
        body: "Deploy an enterprise-ready instance of Hasura in minutes using your container platform of choice.",
        href: "https://link.to",
        linkText: "See Hasura Enterprise"
    },
]


const Card = ({title = '', body='', linkText = '', href = '', n }: { n: number } & ICard) => {
    return (
        <CardBox>
            <a href={href}>
                <CardTitle>{n}{title}</CardTitle>
            </a>
            <CardBody>{body}</CardBody>
            <CardLinkWrapper>
                <CardLink href={href}>
                    {linkText}
                    <BsArrowUpRight />
                </CardLink>
            </CardLinkWrapper>
        </CardBox>
    )
}

export default function MultiCards(): JSX.Element {
    return (
        <MainWrapper>
            <Title>Create and integrate<br/> applications quickly and easily.</Title>
            <CardsWrapper>
                {cards.map((card, i) => (
                    <Card
                        key={i}
                        n={i}
                        title={card.title}
                        body={card.body}
                        linkText={card.linkText}
                        href={card.href}
                    />
                ))}
            </CardsWrapper>
        </MainWrapper>
    )
}

const MainWrapper = styled.div.attrs({
    className: 'flex flex-col'
})``;

const Title = styled.h1`
  font-size: 36px;
  line-height: 125%;
  color: #000000;
  font-weight: bold;
`;

const CardsWrapper = styled.div.attrs({
    className: 'grid md:grid-cols-3 gap-2'
})``;

const CardBox = styled.div.attrs({
    className: 'max-w-sm p-5 bg-white shadow-md'
})`
  transition: background .4s ease-in;

  background: linear-gradient(202.06deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  box-shadow: inset -1px 1px 4px rgba(255, 255, 255, 0.25);
  filter: drop-shadow(-2px 2px 16px rgba(0, 0, 0, 0.1));
  backdrop-filter: blur(4px);
  border-radius: 8px;
  &:hover {
    background: linear-gradient(77.73deg,  rgba(255,255,255,1) 0%, rgba(142,0,255,0.75) 40%, rgba(0,221,179,1) 100%);
  }
`;

const CardTitle = styled.h5.attrs({
    className: 'mb-2 text-black font-bold'
})``;

const CardBody = styled.p.attrs({
    className: 'mb-3 font-normal text-sm text-black'
})``;

const CardLink = styled.a.attrs({
    className: 'inline-flex gap-3 items-center hover:underline text-black pt-7 place-items-end'
})`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  
`;

const CardLinkWrapper  = styled.div.attrs({
    className: 'flex justify-end'
})``