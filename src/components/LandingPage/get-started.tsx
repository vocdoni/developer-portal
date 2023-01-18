import { BsArrowUpRight } from "react-icons/bs";
import {FakeWindow} from "../TypewriterCodeBlock/fake-window";
import TypewriterCodeBlock from "../TypewriterCodeBlock";
import styled from 'styled-components';
import React, {useState} from "react";


const codeBlockString = `
curl -X POST -H "Authorization: Bearer <superadmin-key>" https://server/v1/admin/accounts
{ "cspUrlPrefix": "my-csp-url-prefix", "cspPubKey": "hexBytes", "name": "My integrator account", "email": "admin@account.net" }
{ "id": "1234567890", "apiKey": "ksjdhfksjdh..." // The integrator (secret) key to use the API }
`

const codeBlockString2 = `
const election = new Election({
  title: 'Election title',
  description: 'Election description',
  header: 'https://source.unsplash.com/random',
  streamUri:'https://source.unsplash.com/random',
  endDate: new Date().getTime() + 10000000,
  census,
});
`;

interface ITopics {
    btnText: string
    bodyTitle: string
    body: string
    href: string
    code: string
};

const topics: ITopics[] = [
    {
        btnText: "Account",
        bodyTitle: "API Key",
        body: "Create an account to start integrating. An account can have multiple entities and a billing plan, where " +
            "proposals and voters are consumed on a monthly quota. Accounts also have an secret API key, to manage entities",
        href: "category/vocdoni-api",
        code: codeBlockString,
    },
    {
        btnText: "Entity",
        bodyTitle: "Entity blahblah",
        body: "Create an account to start integrating. An account can have multiple entities and a billing plan, where " +
            "proposals and voters are consumed on a monthly quota. Accounts also have an secret API key, to manage entities",
        href: "category/vocdoni-api",
        code: codeBlockString2,
    },
    {
        btnText: "Census",
        bodyTitle: "Census blahblah",
        body: "Create an account to start integrating. An account can have multiple entities and a billing plan, where " +
            "proposals and voters are consumed on a monthly quota. Accounts also have an secret API key, to manage entities",
        href: "category/vocdoni-api",
        code: codeBlockString,
    },
    {
        btnText: "Processes",
        bodyTitle: "Processes blahblah",
        body: "Create an account to start integrating. An account can have multiple entities and a billing plan, where " +
            "proposals and voters are consumed on a monthly quota. Accounts also have an secret API key, to manage entities",
        href: "category/vocdoni-api",
        code: codeBlockString2,
    },
    {
        btnText: "Votes",
        bodyTitle: "Votes blahblah",
        body: "Create an account to start integrating. An account can have multiple entities and a billing plan, where " +
            "proposals and voters are consumed on a monthly quota. Accounts also have an secret API key, to manage entities",
        href: "category/vocdoni-api",
        code: codeBlockString,
    }
];

export default function GetStarted(): JSX.Element {
    const [selected, setSelected] = useState<ITopics>(topics[0])

    return (
        <>
            <MainSubsection>
                <MainTitle>
                    Easy way to get started
                </MainTitle>
                <FakeWindow className={'h-72'}>
                    <TypewriterCodeBlock
                        timeout={1}
                        language={'bash'}
                        className={'text-sm'}>
                        {selected.code}
                    </TypewriterCodeBlock>
                </FakeWindow>
            </MainSubsection>
            <MainSubsection>
                <ButtonsWrapper>
                    {topics.map((t, i) => {
                        return (
                            <TopicsButton
                                selected={t.btnText === selected.btnText}
                                onClick={() => setSelected(topics.find(item => item.btnText === t.btnText))}
                            >{t.btnText}</TopicsButton>
                        )
                    })}
                </ButtonsWrapper>
                <Body>
                    <BodyTitle>{selected.bodyTitle}</BodyTitle>
                    <Paragraph>
                        {selected.body}
                    </Paragraph>
                </Body>
                <DocsButton href={selected.href}>Docs <BsArrowUpRight /></DocsButton>
            </MainSubsection>
        </>
    )
};


const MainSubsection = styled.div.attrs({
    className: 'place-content-center w-full mx-4'
})`
  max-width: 500px;
`;

const MainTitle = styled.h1`
  font-size: 38px;
  line-height: 125%;
  color: #000000;
  font-weight: bold;
  padding-bottom: 30px;
`;

const Body = styled.div.attrs({
    className: 'flex flex-col gap-4'
})``;

const BodyTitle = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 115%;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  padding-right: 6rem;
`;

const ButtonsWrapper = styled.div.attrs({
    className: 'flex justify-between my-6'
})``;

const TopicsButton = styled.button`
  padding: 8px 16px;
  line-height: 125%;
  font-weight: 500;
  color: #FFFFFF;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  
  ${props => props.selected ? `
     background: linear-gradient(90deg, rgba(0, 221, 179, 0.8) 0%, #0044FF 100%);
     border: 1px solid rgba(255, 255, 255, 0.5);
     box-shadow: inset 0px 2px 2px rgba(255, 255, 255, 0.25);` 
    : `background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(8px);
      color: rgba(0, 0, 0, 0.5);`}
`;

const DocsButton = styled.a.attrs({
    className: 'flex flex-row inline-flex items-center gap-3 border-b-2 border-black py-2 text-black '
})``;