import React from 'react';
import styled from 'styled-components';

const currentYear = new Date().getFullYear();

const leftLinks = [
  {
    text: 'Home',
    to: 'https://vocdoni.app',
  },
  {
    text: 'Quickstart',
    to: 'https://vocdoni.app',
  },
  {
    text: 'Guides',
    to: 'https://vocdoni.app',
  },
  {
    text: 'Support',
    to: 'https://vocdoni.app',
  },
];
const rightLinks = [
  {
    text: 'Vocdoni.app',
    to: 'https://vocdoni.app',
  },
  {
    text: 'Terms of service',
    to: 'https://vocdoni.app',
  },
  {
    text: 'Privacy',
    to: 'https://vocdoni.app',
  },
];

export const Footer = () => {
  return (
    <FooterWrapper>
      <LeftContainer>
        <Image src={require('@site/static/img/logo-full.png').default}></Image>
        <LinksContainer>
          {leftLinks.map((link, index) => (
            <Link src={link.to} key={index}>
              {link.text}
            </Link>
          ))}
        </LinksContainer>
      </LeftContainer>
      <RightContainer>
        <LinksContainer>
          {rightLinks.map((link, index) => (
            <Link src={link.to} key={index}>
              {link.text}
            </Link>
          ))}
        </LinksContainer>
        <Text>© {currentYear} Vocdoni</Text>
      </RightContainer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div.attrs({
  className:
    'flex space-y-8 flex-col md:flex-row bg-primary-50 p-6 md:justify-between md:align-center md:space-y-0 md:space-x-8',
})``;
const Image = styled.img.attrs({
  className: '',
})``;
const LeftContainer = styled.div.attrs({
  className:
    'space-y-8 flex flex-col items-center md:flex-row md:space-y-0 md:space-x-8',
})``;
const RightContainer = styled.div.attrs({
  className:
    'space-y-8 flex flex-col items-center md:flex-row md:space-y-0 md:space-x-6',
})``;
const LinksContainer = styled.div.attrs({
  className: 'flex flex-rox space-x-6',
})``;
const Text = styled.span.attrs({
  className: 'text-black',
})``;
const Link = styled.a.attrs({
  className: 'text-white text-neutral-800 hover:text-secondary-700 cursor-pointer',
})``;
