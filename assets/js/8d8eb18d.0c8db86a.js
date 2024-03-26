"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5487],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=l(n),f=s,d=h["".concat(c,".").concat(f)]||h[f]||p[f]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},24288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),s=(n(67294),n(3905));const o={},a="The Census",i={unversionedId:"protocol/census/census",id:"protocol/census/census",title:"The Census",description:"In Vocdoni, a census of identities can be represented in one of three ways. For Ethereum-based processes, in which eligible voters are represented by Ethereum addresses holding a specific token, an on-chain] (ERC-20) census is used. In cases where a central authority wants to manually validate each voter at the time of voting, [off-chain credential service provider is used. For all other voting processes (organizations that are not represented as DAOs), an off-chain tree census is used.",source:"@site/docs/protocol/census/census.md",sourceDirName:"protocol/census",slug:"/protocol/census/",permalink:"/protocol/census/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Ballot Protocol",permalink:"/protocol/ballot-protocol"},next:{title:"Off-Chain CSP Census",permalink:"/protocol/census/off-chain-csp"}},c={},l=[{value:"On-Chain Based Census (Ethereum ERC-20)",id:"on-chain-based-census-ethereum-erc-20",level:2},{value:"Off-Chain CSP Based Census (Credential Service Provider)",id:"off-chain-csp-based-census-credential-service-provider",level:2},{value:"Off-Chain Tree Based Census (Merkle Tree)",id:"off-chain-tree-based-census-merkle-tree",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"the-census"},"The Census"),(0,s.kt)("p",null,"In Vocdoni, a census of identities can be represented in one of three ways. For Ethereum-based processes, in which eligible voters are represented by Ethereum addresses holding a specific token, an ",(0,s.kt)("a",{parentName:"p",href:"/protocol/census/on-chain"},"on-chain")," (ERC-20) census is used. In cases where a central authority wants to manually validate each voter at the time of voting, ",(0,s.kt)("a",{parentName:"p",href:"/protocol/census/off-chain-csp"},"off-chain credential service provider")," is used. For all other voting processes (organizations that are not represented as DAOs), an ",(0,s.kt)("a",{parentName:"p",href:"/protocol/census/off-chain-tree"},"off-chain tree")," census is used. "),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Between the three of these census methods, an incredible range of use-cases and third-party integrations for voter eligibility management is possible. Furthermore, the flexibility of the voting protocol is designed to allow more census types to be easily added in the future.")),(0,s.kt)("p",null,"When a voting process is created, the Census Origin is set to signify which type of census the process should expect to use. "),(0,s.kt)("h2",{id:"on-chain-based-census-ethereum-erc-20"},"On-Chain Based Census (Ethereum ERC-20)"),(0,s.kt)("p",null,"On-chain census allow the set of eligible voters to be expressed as a weighted census of holders of a specific token on an Ethereum blockchain. This type of census is useful for organizations whose members are represented as token-holders. This is possible with either Ethereum Storage Proofs or the Census3 Service (only the Census3 Service is supported by the Vocdoni SDK). "),(0,s.kt)("p",null,"Technical details for on-chain censuses can be found at ",(0,s.kt)("a",{parentName:"p",href:"/protocol/census/on-chain"},"On-Chain Census"),"."),(0,s.kt)("h2",{id:"off-chain-csp-based-census-credential-service-provider"},"Off-Chain CSP Based Census (Credential Service Provider)"),(0,s.kt)("p",null,"In order to support frequent modifications to the census of an ongoing process and to bring more flexibility to the Vocdoni stack, a census based on Credential Service Providers (CSP) or Certificate Authorities (CAs) is implemented. This method allows organizations to set up a centralized authority that provides credentials to each voter, one-by-one, based on any arbitrary criteria decided by the organization. "),(0,s.kt)("p",null,"Technical details for off-chain CSP census can be found at ",(0,s.kt)("a",{parentName:"p",href:"/protocol/census/off-chain-csp"},"Off-Chain CSP Census"),"."),(0,s.kt)("h2",{id:"off-chain-tree-based-census-merkle-tree"},"Off-Chain Tree Based Census (Merkle Tree)"),(0,s.kt)("p",null,"An off-chain tree census allows organizations to centrally manage the set of members who can vote on any given process. Organizations can generate the Census Merkle Tree itself with the help of the Census Service, but they are responsible for manually generating a list of voters. ",(0,s.kt)("a",{parentName:"p",href:"https://vocdoni.app"},"Vocdoni.app")," currently provides a CSV-based census mechanism."),(0,s.kt)("p",null,"Technical details for off-chain tree census can be found at ",(0,s.kt)("a",{parentName:"p",href:"/protocol/census/off-chain-tree"},"Off-Chain Tree Census"),"."))}p.isMDXComponent=!0}}]);