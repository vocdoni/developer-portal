import styled from 'styled-components';
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { SectionTitle } from "./common";

interface ICard {
    title: string
    body: string
    linkText: string
    href: string
}

const cards: ICard[] = [
    {
        title: "SDK",
        body: "Check the docs for registering an account, creating a voting process, fetch election info, voting to a process and more! ",
        href: "sdk#prerequisites",
        linkText: "Review documentation"
    },
    {
        title: "DEMO",
        body: "A live preview for testing the SDK, connect your wallet and start creating an election in less than 10 sec.",
        href: "https://vocdoni.github.io/vocdoni-sdk/",
        linkText: "Try it out!"
    },
    {
        title: "EXAMPLES",
        body: "Review examples on how to implement Vocdoni SDK into your react applications.",
        href: "https://github.com/vocdoni/vocdoni-sdk/tree/main/examples/cra",
        linkText: "See all examples"
    },
]


const Card = ({title = '', body='', linkText = '', href = '' }: ICard) => {
    return (
        <CardBox>
            <span>
                <a href={href}>
                    <CardTitle>{title}</CardTitle>
                </a>
                <CardBody>{body}</CardBody>
            </span>
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
            <SectionTitle>Create and integrate<br/> applications quickly and easily.</SectionTitle>
            <CardsWrapper>
                {cards.map((card, i) => (
                    <Card
                        key={i}
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
    className: 'flex flex-col lg:gap-12'
})``;

const CardsWrapper = styled.div.attrs({
    className: 'grid md:grid-cols-3 gap-2'
})``;

const CardBox = styled.div.attrs({
    className: 'max-w-sm p-5 bg-white shadow-md flex flex-col justify-between'
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