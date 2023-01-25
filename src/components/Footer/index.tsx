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
// const leftLinks = [
//   {
//     text: 'Vocdoni.app',
//     to: 'https://vocdoni.app',
//   },
//   // {
//   //   text: 'Quickstart',
//   //   to: '/get-started/intro',
//   // },
//   {
//     text: 'Explorer',
//     to: 'https://dev.explorer.vote',
//   },
//   // {
//   //   text: 'Guides',
//   //   to: 'https://documentation.aragon.org/products/aragon-vocdoni/what-is-aragon-vocdoni',
//   // },
//   // {
//   //   text: 'Support',
//   //   to: 'https://vocdoni.app',
//   // },
// ];
// const rightLinks = [
//   // {
//   //   text: 'Vocdoni.app',
//   //   to: 'https://vocdoni.app',
//   // },
//   // {
//   //   text: 'Terms of service',
//   //   to: 'https://vocdoni.app',
//   // },
//   // {
//   //   text: 'Privacy',
//   //   to: 'https://vocdoni.app',
//   // },
// ];
//
// export const Footer = () => {
//   return (
//       <FooterWrapper>
//         <LeftContainer>
//           <a href="/"><Image width="120px" src={require('@site/static/img/logo-full.png').default}></Image></a>
//           <LinksContainer>
//             {leftLinks.map((link, index) => (
//                 // todo(kon): Fix this and use correctly the react link
//                 <a href={link.to} target="_blank">
//                   <Link src={link.to} key={index}>
//                     {link.text}
//                   </Link>
//                 </a>
//             ))}
//           </LinksContainer>
//         </LeftContainer>
//         <RightContainer>
//           <LinksContainer>
//             {rightLinks.map((link, index) => (
//                 // todo(kon): Fix this and use correctly the react link
//                 <a href={link.to}>
//                   <Link src={link.to} key={index}>
//                     {link.text}
//                   </Link>
//                 </a>
//             ))}
//           </LinksContainer>
//           {/*<Link>© {currentYear} Vocdoni</Link>*/}
//           <a href="https://aragon.org"><PoweredByAragon height="32px" width="215px" /></a>
//         </RightContainer>
//       </FooterWrapper>
//   );
// };
//
// const FooterWrapper = styled.div.attrs({
//   className:
//       'footer flex space-y-8 flex-col md:flex-row p-6 md:justify-between md:align-center md:space-y-0 md:space-x-8',
// })``;
// const Image = styled.img.attrs({
//   className: '',
// })``;
// const LeftContainer = styled.div.attrs({
//   className:
//       'space-y-8 flex flex-col items-center md:flex-row md:space-y-0 md:space-x-8',
// })``;
// const RightContainer = styled.div.attrs({
//   className:
//       'space-y-8 flex flex-col items-center md:flex-row md:space-y-0 md:space-x-6',
// })``;
// const LinksContainer = styled.div.attrs({
//   className: 'flex flex-rox space-x-6',
// })``;
//
// const Link = styled.a.attrs({
//   className: 'navbar__link hover:text-secondary-700 cursor-pointer ',
// })``;

