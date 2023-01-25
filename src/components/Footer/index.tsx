import React from 'react';
import styled from 'styled-components';
import {FooterColumns} from './footer-columns'
import {FooterOfFooter} from "./footer-of-footer";

export const Footer = () => {
  return (
      <FooterWrapper>
          <FooterColumns/>
          <Hr />
          <FooterOfFooter />
      </FooterWrapper>
  );
};

const Hr = styled.div.attrs({
    className:
        'border-b w-full border-black'
})``

const FooterWrapper = styled.div.attrs({
    className:
        'bg-white'
})``