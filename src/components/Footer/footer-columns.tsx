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
            { title: 'About', href:"https://docs.vocdoni.io/about-us/vision.html"},
            { title: 'How we work', href:"https://docs.vocdoni.io/about-us/how-we-work.html"},
            { title: 'Blog', href:"https://blog.vocdoni.io/vocdoni/"},
        ]
    },
    {
        title: 'Developer',
        links: [
            { title: 'Developer Portal', href:"https://developer.vocdoni.io/"},
            { title: 'Vocdoni API', href:"https://vocdoni.io/api"},
            { title: 'Vocdoni APP', href:"https://vocdoni.app/"},
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

const Soon = ({children} : {children:string}) => {
    return (
        <LinkSoon>
            <div>{children}</div>
            <SoonBadge>Soon</SoonBadge>

        </LinkSoon>
    )
}

const FooterSection = ({title, links}: ISections) => {
    return (
        <FooterSectionWrapper>
            <h4>{title}</h4>
            <div>
                {links.map((l, i) => (
                    <div key={i}>
                        {l.soon ? <Soon>{l.title}</Soon>: <LinkWrapper href={l.href}>{l.title}</LinkWrapper>}
                        <br/>
                    </div>
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
                <FooterSection key={i} title={s.title} links={s.links} />
            ))}
        </FooterColumnsWrapper>
    )
}

const FooterSectionWrapper = styled.div.attrs({
    className:
        'flex flex-col align-center gap-2 '
})``

const FooterSectionWrapperLogos = styled(FooterSectionWrapper).attrs({
    className:
        'gap-1 justify-center items-center'
})``

const FooterColumnsWrapper = styled.div.attrs({
    className:
    'flex flex-wrap justify-between my-6 py-8 px-8 md:px-4 gap-8'
})``


const LinkWrapper = styled.a.attrs({
    className:
        'text-sm text-black'
})``

const LinkSoon = styled.div.attrs({
    className:
        'text-sm text-gray-600 cursor-wait flex'
})``

const SoonBadge = styled.div.attrs({
    className:
        '-mt-1 ml-1 text-gray-600 text-xs'
})``

