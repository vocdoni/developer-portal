"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2323],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(t),u=a,k=f["".concat(p,".").concat(u)]||f[u]||d[u]||i;return t?r.createElement(k,o(o({ref:n},s),{},{components:t})):r.createElement(k,o({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},11550:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={},o=void 0,l={unversionedId:"sdk/reference/interfaces/SendTokensTx",id:"sdk/reference/interfaces/SendTokensTx",title:"SendTokensTx",description:"@vocdoni/sdk / SendTokensTx",source:"@site/docs/sdk/reference/interfaces/SendTokensTx.md",sourceDirName:"sdk/reference/interfaces",slug:"/sdk/reference/interfaces/SendTokensTx",permalink:"/sdk/reference/interfaces/SendTokensTx",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"RegisterKeyTx",permalink:"/sdk/reference/interfaces/RegisterKeyTx"},next:{title:"ServiceProperties",permalink:"/sdk/reference/interfaces/ServiceProperties"}},p={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"from",id:"from",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"nonce",id:"nonce",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"to",id:"to",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"txtype",id:"txtype",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"value",id:"value",level:3},{value:"Defined in",id:"defined-in-4",level:4}],s={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/sdk"},"@vocdoni/sdk")," / SendTokensTx"),(0,a.kt)("h1",{id:"interface-sendtokenstx"},"Interface: SendTokensTx"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"SendTokensTx#from"},"from")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"SendTokensTx#nonce"},"nonce")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"SendTokensTx#to"},"to")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"SendTokensTx#txtype"},"txtype")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"SendTokensTx#value"},"value"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"from"},"from"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"from"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/api/chain/transactions.ts#L136"},"api/chain/transactions.ts:136")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"nonce"},"nonce"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"nonce"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/api/chain/transactions.ts#L135"},"api/chain/transactions.ts:135")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"to"},"to"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"to"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/api/chain/transactions.ts#L137"},"api/chain/transactions.ts:137")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"txtype"},"txtype"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"txtype"),": ",(0,a.kt)("a",{parentName:"p",href:"../enums/TxType"},(0,a.kt)("inlineCode",{parentName:"a"},"TxType"))),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/api/chain/transactions.ts#L134"},"api/chain/transactions.ts:134")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"value"},"value"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/api/chain/transactions.ts#L138"},"api/chain/transactions.ts:138")))}d.isMDXComponent=!0}}]);