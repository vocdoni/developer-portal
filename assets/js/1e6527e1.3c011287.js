"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4719],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>k});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=c(t),k=a,m=f["".concat(s,".").concat(k)]||f[k]||d[k]||i;return t?r.createElement(m,o(o({ref:n},l),{},{components:t})):r.createElement(m,o({ref:n},l))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7490:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={},o=void 0,p={unversionedId:"sdk/reference/interfaces/Tx",id:"sdk/reference/interfaces/Tx",title:"Tx",description:"@vocdoni/sdk / Tx",source:"@site/docs/sdk/reference/interfaces/Tx.md",sourceDirName:"sdk/reference/interfaces",slug:"/sdk/reference/interfaces/Tx",permalink:"/sdk/reference/interfaces/Tx",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"SetTransactionCostsTx",permalink:"/sdk/reference/interfaces/SetTransactionCostsTx"},next:{title:"VoteEnvelope",permalink:"/sdk/reference/interfaces/VoteEnvelope"}},s={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"tx",id:"tx",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"txInfo",id:"txinfo",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/sdk"},"@vocdoni/sdk")," / Tx"),(0,a.kt)("h1",{id:"interface-tx"},"Interface: Tx"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Tx#tx"},"tx")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Tx#txinfo"},"txInfo"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"tx"},"tx"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"tx"),": ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"$case"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"vote"')," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"vote"),": ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/VoteEnvelope"},(0,a.kt)("inlineCode",{parentName:"a"},"VoteEnvelope")),"  } ","|"," ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"$case"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"newProcess"')," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"newProcess"),": ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/NewProcessTx"},(0,a.kt)("inlineCode",{parentName:"a"},"NewProcessTx")),"  } ","|"," ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"$case"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"admin"')," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"admin"),": ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/AdminTx"},(0,a.kt)("inlineCode",{parentName:"a"},"AdminTx")),"  } ","|"," ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"$case"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"setProcess"')," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"setProcess"),": ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/SetProcessTx"},(0,a.kt)("inlineCode",{parentName:"a"},"SetProcessTx")),"  } ","|"," ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"$case"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"registerKey"')," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"registerKey"),": ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/RegisterKeyTx"},(0,a.kt)("inlineCode",{parentName:"a"},"RegisterKeyTx")),"  } ","|"," ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"$case"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"mintTokens"')," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"mintTokens"),": ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/MintTokensTx"},(0,a.kt)("inlineCode",{parentName:"a"},"MintTokensTx")),"  } ","|"," ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"$case"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"sendTokens"')," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"sendTokens"),": ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/SendTokensTx"},(0,a.kt)("inlineCode",{parentName:"a"},"SendTokensTx")),"  } ","|"," ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"$case"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"setTransactionCosts"')," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"setTransactionCosts"),": ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/SetTransactionCostsTx"},(0,a.kt)("inlineCode",{parentName:"a"},"SetTransactionCostsTx")),"  } ","|"," ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"$case"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"setAccount"')," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"setAccountInfo"),": ",(0,a.kt)("a",{parentName:"p",href:"/sdk/reference/interfaces/SetAccountTx"},(0,a.kt)("inlineCode",{parentName:"a"},"SetAccountTx")),"  } ","|"," ","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"$case"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"collectFaucet"')," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"collectFaucet"),": ",(0,a.kt)("a",{parentName:"p",href:"CollectFaucetTx"},(0,a.kt)("inlineCode",{parentName:"a"},"CollectFaucetTx")),"  }"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/api/chain/transactions.ts#L4"},"api/chain/transactions.ts:4")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"txinfo"},"txInfo"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"txInfo"),": ",(0,a.kt)("a",{parentName:"p",href:"IChainTxReference"},(0,a.kt)("inlineCode",{parentName:"a"},"IChainTxReference"))),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/api/chain/transactions.ts#L53"},"api/chain/transactions.ts:53")))}d.isMDXComponent=!0}}]);