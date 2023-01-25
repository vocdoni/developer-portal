import React from "react";
import styled from 'styled-components';
import VocdoniLogo from '@site/static/img/footer-build-change.svg'
import PoweredByAragon from '@site/static/img/powered-by-aragon.svg'

interface ISections {
    title: string
    links: Array<{
        title: string
        href: string
        soon?: boolean
    }>
}

const footerColumns: ISections[] = [
    {
        title: 'Company',
        links: [
            { title: 'About', href:"#"},
            { title: 'How we work', href:"#"},
            { title: 'Blog', href:"#"},
        ]
    },
    {
        title: 'Developer',
        links: [
            { title: 'Developer Portal', href:"#"},
            { title: 'Vocdoni API', href:"#"},
            { title: 'Vocdoni APP', href:"#"},
        ]
    },
    {
        title: 'Resources',
        links: [
            { title: 'Guides', href:"#", soon: true},
            { title: 'Tutorials', href:"#", soon: true},
        ]
    },
    {
        title: 'Contact',
        links: [
            { title: 'info@vocdoni.io', href:"mailto:info@vocdoni.io"},
        ]
    },
]

const FooterSection = ({title, links}: ISections) => {
    return (
        <FooterSectionWrapper>
            <h4>{title}</h4>
            <div>
                {links.map((l, i) => (
                    <><LinkWrapper href={l.href}>{l.title}</LinkWrapper><br/></>
                ))}
            </div>
        </FooterSectionWrapper>
    );
}

export const FooterColumns = () => {
    return (
        <FooterColumnsWrapper>
            <FooterSectionWrapperLogos>
                <VocdoniLogo />
                <PoweredByAragon  height="93px" width="130px" />
            </FooterSectionWrapperLogos>
            {footerColumns.map((s, i) => (
                <FooterSection title={s.title} links={s.links} />
            ))}
        </FooterColumnsWrapper>
    )
}

const FooterSectionWrapper = styled.div.attrs({
    className:
        'flex flex-col align-center gap-2'
})``

const FooterSectionWrapperLogos = styled(FooterSectionWrapper).attrs({
    className:
        'gap-1 justify-center items-center'
})``

const FooterColumnsWrapper = styled.div.attrs({
    className:
        'flex flex-row p-6 justify-between align-center'
})``


const LinkWrapper = styled.a.attrs({
    className:
        'text-sm text-black'
})``

