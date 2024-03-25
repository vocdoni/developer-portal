"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14484:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={},a=void 0,s={unversionedId:"sdk/reference/interfaces/IVoteSubmitResponse",id:"sdk/reference/interfaces/IVoteSubmitResponse",title:"IVoteSubmitResponse",description:"@vocdoni/sdk / Exports / IVoteSubmitResponse",source:"@site/docs/sdk/reference/interfaces/IVoteSubmitResponse.md",sourceDirName:"sdk/reference/interfaces",slug:"/sdk/reference/interfaces/IVoteSubmitResponse",permalink:"/sdk/reference/interfaces/IVoteSubmitResponse",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"IVoteMode",permalink:"/sdk/reference/interfaces/IVoteMode"},next:{title:"IVoteType",permalink:"/sdk/reference/interfaces/IVoteType"}},p={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"txHash",id:"txhash",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"voteID",id:"voteid",level:3},{value:"Defined in",id:"defined-in-1",level:4}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/sdk"},"@vocdoni/sdk")," / ",(0,o.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / IVoteSubmitResponse"),(0,o.kt)("h1",{id:"interface-ivotesubmitresponse"},"Interface: IVoteSubmitResponse"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"IVoteSubmitResponse#txhash"},"txHash")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"IVoteSubmitResponse#voteid"},"voteID"))),(0,o.kt)("h2",{id:"properties-1"},"Properties"),(0,o.kt)("h3",{id:"txhash"},"txHash"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"txHash"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"The hash of the transaction"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/vote.ts#L14"},"api/vote.ts:14")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"voteid"},"voteID"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"voteID"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"The identifier of the vote, also called nullifier."),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/vote.ts#L19"},"api/vote.ts:19")))}u.isMDXComponent=!0}}]);