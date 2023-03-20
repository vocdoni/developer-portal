import {BsDiscord} from "react-icons/bs";
import {FakeWindow} from "../TypewriterCodeBlock/fake-window";
import TypewriterCodeBlock from "../TypewriterCodeBlock";
import styled from 'styled-components';
import React from "react";
import {Paragraph} from "./common";

const codeBlockString = `const election = new Election({
    title: 'My awesome Election!',
    description: 'Voting was never so easy!',
    header: 'https://source.unsplash.com/random',
    endDate: new Date().getTime() + 10000000,
    census,
    electionType: {
        secretUntilTheEnd: false,
        anonymous: true
    }
});
`

export default function TopSection(): JSX.Element {
    return (
        <>
            <MainSubsection>
                <MainTitle>
                    Develop secure & private digital voting apps with few lines of code
                </MainTitle>
                <Paragraph>
                    Designed for developers, abstracting the complexities involved in secure and private voting protocols.
                    Create AGMs, elections and proposals with ease, multiple election types, check voter eligibility and much more!
                </Paragraph>
                <Paragraph>
                    Try it out!
                </Paragraph>
                <div>
                    <CTA>Get Started</CTA>
                    <DiscordLink href={"https://chat.vocdoni.io/"}><BsDiscord /> chat.vocdoni.io </DiscordLink>
                </div>
            </MainSubsection>
            <MainSubsection>
                <FakeWindow className={'h-72 mt-5'}>
                    <TypewriterCodeBlock
                        timeout={1}
                        language={'typescript'}
                        className={'text-sm'}>
                        {codeBlockString}
                    </TypewriterCodeBlock>
                </FakeWindow>
            </MainSubsection>
        </>
    )
}


const MainSubsection = styled.div.attrs({
    className: 'lg:place-content-center w-full mb-8 md:mb-0'
})`
  max-width: 500px;
`;

const MainTitle = styled.h1`
  font-size: 38px;
  line-height: 125%;
  color: #000000;
  font-weight: bold;
`;

const CTA = styled.button`
  padding: 12px 16px;
  gap: 8px;

  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(142,0,255,0.25) 40%, rgba(0,221,179,0.85) 100%);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  backdrop-filter: blur(8px);

  /* Note: backdrop-filter has minimal browser support */
  border-radius: 8px;
  font-weight: bold;
`

const DiscordLink = styled.a`
  color: black;
  display: inline-flex;
  gap: 10px;
  padding-left: 25px;
  align-items: center;
  font-weight: bold;
`