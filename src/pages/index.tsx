import React from 'react';
import Layout from '@theme/Layout';
import styled from 'styled-components';
import { BsDiscord } from 'react-icons/bs';
import TypewriterCodeBlock from "../components/TypewriterCodeBlock";
import {FakeWindow} from "@components/TypewriterCodeBlock/fake-window";

const codeBlockString = `
const election = new Election({
  title: 'Election title',
  description: 'Election description',
  header: 'https://source.unsplash.com/random',
  streamUri:'https://source.unsplash.com/random',
  endDate: new Date().getTime() + 10000000,
  census,
});
`

export default function Home(): JSX.Element {
    return (
        <Layout>
            <VectorImage
                src={"/img/landing-vector.svg"}
                alt={"Vector background"}
            />
            <Page>
                <Section>
                    <MainSubsection>
                        <MainTitle>
                            Create digital voting <br />applications <br />quickly and easily.
                        </MainTitle>
                        <Paragraph>
                            The Developer Portal contains everything you need to start integrating the Vocdoni Protocol,
                            including the API and SDK,  as well as extensive documentation about the protocol design.
                        </Paragraph>
                        <Paragraph>
                            For more help...
                        </Paragraph>
                        <div>
                            <CTA>Get Started</CTA>
                            <DiscordLink href={"https://chat.vocdoni.io/"}><BsDiscord /> chat.vocdoni.io </DiscordLink>
                        </div>
                    </MainSubsection>
                    <MainSubsection>
                        <FakeWindow className={'h-72'}>
                            <TypewriterCodeBlock
                                timeout={1}
                                language={'typescript'}
                                className={'text-sm'}>
                                {codeBlockString}
                            </TypewriterCodeBlock>
                        </FakeWindow>
                    </MainSubsection>
                </Section>

                <Section>
                    <h1>Section 2</h1>
                </Section>
            </Page>

        </Layout>
    )
}

const VectorImage = styled.img`
  position: absolute;
  //left: 24.69%;
  //right: -8.06%;
  top: 40%;
  //bottom: 54.68%;
`

const Page = styled.div.attrs({})`
  background: linear-gradient(90deg, rgba(231, 255, 0, 0) -0.01%, #00DDB3 100%);
  opacity: 0.7;
`;

const Section = styled.div.attrs({
    className: 'sm:flex-column sm:px-4 sm:py-4 min-h-screen md:px-24 md:pb-24 flex flex-wrap w-auto m-auto place-items-center h-screen place-content-center ',
    // className: 'flex flex-wrap sm:flex-col',
})``;

const MainSubsection = styled.div.attrs({
    // className: 'place-content-center w-full md:w-1/2 p-4'
    className: 'place-content-center w-full '
})`
  max-width: 500px;
`;

const MainTitle = styled.h1`
  font-size: 38px;
  line-height: 125%;
  color: #000000;
  font-weight: bold;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  padding-right: 6rem;
`

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