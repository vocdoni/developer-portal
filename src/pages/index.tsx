import React from 'react';
import Layout from '@theme/Layout';
import styled from 'styled-components';


export default function Home(): JSX.Element {
    return (
        <Layout>
            <VectorImage
                src={"/img/landing-vector.svg"}
                alt={"Vector background"}
            />
            <Page>

                <MainSection>
                    <div>
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
                            <span>chat.vocdoni.io</span>
                        </div>
                    </div>
                    <div>
                        <MainTitle>Create digital voting applications quickly and easily.</MainTitle>
                    </div>
                </MainSection>

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
    className: 'min-h-screen md:p-18 pr-24 pl-24 pb-24 flex w-auto m-auto place-items-center h-screen',
})``;

const MainSection = styled(Section)`
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