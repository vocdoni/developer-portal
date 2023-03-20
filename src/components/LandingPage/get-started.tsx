import { BsArrowUpRight } from "react-icons/bs";
import {FakeWindow} from "../TypewriterCodeBlock/fake-window";
import TypewriterCodeBlock from "../TypewriterCodeBlock";
import styled from 'styled-components';
import React, {useState} from "react";
import {Paragraph, SectionTitle} from "./common";

const electionsCodeBlock = `const election = new Election({
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
`;
const accountsCodeBlock = `const account = await client.createAccount({
    account: new Account({
        languages: ['en', 'ca'],
        name: {
          ca: 'Associació civil',
          default: 'Civil association',
        },
        avatar: 'avatar',
        header: 'header',
        }),
    });
`

const codeBlockCensus = `const census = new PlainCensus()
// accepts any ethereum-alike addresses
census.add(address)
const userWallet = 
    VocdoniSDKClient.generateWalletFromData(
        ['user1', 
        'sha256OfSomething']
    );
`

const voteCodeBlock = `(async () => {
    client.setElectionId(id)
    // votes "Yes" and "Adult (17-60 yo)"
    const vote = new Vote([0, 2]);
    const voteId = await client.submitVote(vote)
    const votesLeft = await client.votesLeftCount();
    console.log(votesLeft) // number of times the user can submit his vote
})();
`

interface ITopics {
    btnText: string
    bodyTitle: string
    body: string
    href: string
    code: string
};

const topics: ITopics[] = [
    {
        btnText: "Elections",
        bodyTitle: "Easily create variety of Elections",
        body: "With just a few simple steps, it is very easy to set up everything, from basic surveys to complex voting " +
            "systems, with single vote, weighted vote or anonymous, just with a simple configuration flag.",
        href: "/sdk#creating-a-voting-process",
        code: electionsCodeBlock,
    },
    {
        btnText: "Accounts",
        bodyTitle: "Create an account associated to your organization",
        body: "Create an account to be used for your organization with multiple customization attributes. This " +
            "information will be stored and can be used to brand a specific organization election.",
        href: "/sdk#registering-account",
        code: accountsCodeBlock,
    },
    {
        btnText: "Census",
        bodyTitle: "The Census store an election voters addresses",
        body: "Use existing ERC-20 token as address or create a new one deterministically for each participant. Use " +
            "anonymous voting capabilities to maintain the election participants anonymous.",
        href: "/sdk#creating-a-voting-process",
        code: codeBlockCensus,
    },
    {
        btnText: "Votes",
        bodyTitle: "Vote easier as ever!",
        body: "Implement the voting action was never so easy! You can also use vote overwritte to let an account to vote " +
            "multiple times, verify the vote and much more.",
        href: "/sdk#voting-to-a-process",
        code: voteCodeBlock,
    }
];

export default function GetStarted(): JSX.Element {
    const [selected, setSelected] = useState<ITopics>(topics[0])

    return (
        <MainSect>
            <MainSubsection>
                <SectionTitle>
                    Easy way to get started
                </SectionTitle>
                <FakeWindow className={'h-72 w-[480px] max-lg:hidden min-w-[480px] absolute'}>
                    <TypewriterCodeBlock
                        timeout={1}
                        language={'ts'}
                        className={'text-sm'}>
                        {selected.code}
                    </TypewriterCodeBlock>
                </FakeWindow>
            </MainSubsection>
            <MainSubsection>
                <ButtonsWrapper >
                    {topics.map((t, i) => {
                        return (
                            <TopicsButton
                                key={i}
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
        </MainSect>
    )
};

const MainSect = styled.div.attrs({
    className: 'flex flex-col lg:flex-row justify-start'
})``;

const MainSubsection = styled.div.attrs({
    className: 'max-w-lg place-content-center lg:w-full lg:mb-8 md:mx-4 lg:flex-1'
})``;


const Body = styled.div.attrs({
    className: 'flex flex-col gap-4 lg:h-48'
})``;

const BodyTitle = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 115%;
`;

const ButtonsWrapper = styled.div.attrs({
    className: 'flex flex-wrap md:justify-between mt-4 md:mt-16 mb-6 gap-4 md:gap-1'
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
     box-shadow: inset 0px 2px 2px rgba(255, 255, 255, 0.25);`
          : `background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(8px);
      color: rgba(0, 0, 0, 0.5);`}
`;

const DocsButton = styled.a.attrs({
    className: 'flex flex-row inline-flex items-center gap-3 border-b-2 border-black py-2 text-black '
})``;