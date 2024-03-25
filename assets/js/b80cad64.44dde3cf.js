"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8149],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=a,k=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return t?r.createElement(k,i(i({ref:n},p),{},{components:t})):r.createElement(k,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},38254:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={},i=void 0,s={unversionedId:"sdk/reference/interfaces/IBlockTransactionsResponse",id:"sdk/reference/interfaces/IBlockTransactionsResponse",title:"IBlockTransactionsResponse",description:"@vocdoni/sdk / Exports / IBlockTransactionsResponse",source:"@site/docs/sdk/reference/interfaces/IBlockTransactionsResponse.md",sourceDirName:"sdk/reference/interfaces",slug:"/sdk/reference/interfaces/IBlockTransactionsResponse",permalink:"/sdk/reference/interfaces/IBlockTransactionsResponse",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"IApprovalElectionParameters",permalink:"/sdk/reference/interfaces/IApprovalElectionParameters"},next:{title:"IBudgetElectionParametersInfo",permalink:"/sdk/reference/interfaces/IBudgetElectionParametersInfo"}},c={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"blockNumber",id:"blocknumber",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"transactionCount",id:"transactioncount",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"transactions",id:"transactions",level:3},{value:"Defined in",id:"defined-in-2",level:4}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/sdk"},"@vocdoni/sdk")," / ",(0,a.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / IBlockTransactionsResponse"),(0,a.kt)("h1",{id:"interface-iblocktransactionsresponse"},"Interface: IBlockTransactionsResponse"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"IBlockTransactionsResponse#blocknumber"},"blockNumber")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"IBlockTransactionsResponse#transactioncount"},"transactionCount")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"IBlockTransactionsResponse#transactions"},"transactions"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"blocknumber"},"blockNumber"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"blockNumber"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain.ts#L312"},"api/chain.ts:312")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"transactioncount"},"transactionCount"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"transactionCount"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain.ts#L313"},"api/chain.ts:313")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"transactions"},"transactions"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"transactions"),": ",(0,a.kt)("a",{parentName:"p",href:"IChainTxReference"},(0,a.kt)("inlineCode",{parentName:"a"},"IChainTxReference")),"[]"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain.ts#L314"},"api/chain.ts:314")))}u.isMDXComponent=!0}}]);