"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),u=i,k=f["".concat(p,".").concat(u)]||f[u]||d[u]||o;return n?r.createElement(k,a(a({ref:t},s),{},{components:n})):r.createElement(k,a({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},94266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={},a=void 0,l={unversionedId:"sdk/reference/interfaces/VoteEnvelope",id:"sdk/reference/interfaces/VoteEnvelope",title:"VoteEnvelope",description:"@vocdoni/sdk / Exports / VoteEnvelope",source:"@site/docs/sdk/reference/interfaces/VoteEnvelope.md",sourceDirName:"sdk/reference/interfaces",slug:"/sdk/reference/interfaces/VoteEnvelope",permalink:"/sdk/reference/interfaces/VoteEnvelope",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Tx",permalink:"/sdk/reference/interfaces/Tx"},next:{title:"modules",permalink:"/sdk/reference/modules"}},p={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"encryptionKeyIndexes",id:"encryptionkeyindexes",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"nonce",id:"nonce",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"nullifier",id:"nullifier",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"processId",id:"processid",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"proof",id:"proof",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"votePackage",id:"votepackage",level:3},{value:"Defined in",id:"defined-in-5",level:4}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/sdk"},"@vocdoni/sdk")," / ",(0,i.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / VoteEnvelope"),(0,i.kt)("h1",{id:"interface-voteenvelope"},"Interface: VoteEnvelope"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"VoteEnvelope#encryptionkeyindexes"},"encryptionKeyIndexes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"VoteEnvelope#nonce"},"nonce")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"VoteEnvelope#nullifier"},"nullifier")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"VoteEnvelope#processid"},"processId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"VoteEnvelope#proof"},"proof")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"VoteEnvelope#votepackage"},"votePackage"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"encryptionkeyindexes"},"encryptionKeyIndexes"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"encryptionKeyIndexes"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"[]"),(0,i.kt)("p",null,"On encrypted votes, contains the (sorted) indexes of the keys used to encrypt"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L80"},"api/chain/transactions.ts:80")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nonce"},"nonce"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"nonce"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Unique number per vote attempt, so that replay attacks can't reuse this payload"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L60"},"api/chain/transactions.ts:60")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nullifier"},"nullifier"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"nullifier"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Hash of the private key + processId"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L76"},"api/chain/transactions.ts:76")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"processid"},"processId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"processId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The process for which the vote is casted"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L64"},"api/chain/transactions.ts:64")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"proof"},"proof"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"proof"),": ",(0,i.kt)("a",{parentName:"p",href:"Proof"},(0,i.kt)("inlineCode",{parentName:"a"},"Proof"))),(0,i.kt)("p",null,"Franchise proof"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L68"},"api/chain/transactions.ts:68")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"votepackage"},"votePackage"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"votePackage"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"JSON string of the Vote Package (potentially encrypted), encoded as bytes."),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L72"},"api/chain/transactions.ts:72")))}d.isMDXComponent=!0}}]);