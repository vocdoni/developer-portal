import React, {} from "react";
import styled from "styled-components";
import Resistant from '@site/static/img/landing/resistant_censorship.svg'
import Scalable from '@site/static/img/landing/scalable.svg'
import Verificable from '@site/static/img/landing/verificable.svg'
import OpenSource from '@site/static/img/landing/open_source.svg'
import Anonymous from '@site/static/img/landing/anonymous.svg'
import {Paragraph, SectionTitle} from "./common";


export default function Bottom(): JSX.Element {
    return (
        <>
            <MainSubsection>
                <SectionTitle>
                    A first generation voting protocol
                </SectionTitle>
                <Paragraph>
                    A completely anonymous voting system that guarantees the availability of the data and a censorship
                    resistant of the data and a communication protocol resistant to censorship.
                    Based on decentralised technologies such as Ethereum, Daichain, Tendermint, IPFS and
                    zero-knowledge proofs.
                </Paragraph>
                <IconsWrapper>
                    <Resistant />
                    <Verificable />
                    <OpenSource />
                    <Scalable />
                    <Anonymous />
                </IconsWrapper>
            </MainSubsection>
            <MainSubsection>
                <ImageWrapper>
                    <img src={'img/landing/hands_up.png'}  alt={"hands up"}/>
                </ImageWrapper>
            </MainSubsection>
        </>
    )

}

const MainSubsection = styled.div.attrs({
    className: 'place-content-center w-full '
})`
  max-width: 500px;
`;


const ImageWrapper = styled.div.attrs({
    className: 'pb-10'
})`
`;

const IconsWrapper = styled.div.attrs({
    className: 'flex flex-row gap-3 items-start justify-start'
})`
`;