"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9470],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(t),k=a,h=u["".concat(l,".").concat(k)]||u[k]||c[k]||r;return t?i.createElement(h,s(s({ref:n},d),{},{components:t})):i.createElement(h,s({ref:n},d))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<r;p++)s[p]=t[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},47527:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const r={},s=void 0,o={unversionedId:"sdk/reference/interfaces/Process",id:"sdk/reference/interfaces/Process",title:"Process",description:"@vocdoni/sdk / Exports / Process",source:"@site/docs/sdk/reference/interfaces/Process.md",sourceDirName:"sdk/reference/interfaces",slug:"/sdk/reference/interfaces/Process",permalink:"/sdk/reference/interfaces/Process",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"NewProcessTx",permalink:"/sdk/reference/interfaces/NewProcessTx"},next:{title:"Proof",permalink:"/sdk/reference/interfaces/Proof"}},l={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"blockCount",id:"blockcount",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"censusOrigin",id:"censusorigin",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"censusRoot",id:"censusroot",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"censusURI",id:"censusuri",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"encryptionPrivateKeys",id:"encryptionprivatekeys",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"encryptionPublicKeys",id:"encryptionpublickeys",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"entityId",id:"entityid",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"envelopeType",id:"envelopetype",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"ethIndexSlot",id:"ethindexslot",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"keyIndex",id:"keyindex",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"maxCensusSize",id:"maxcensussize",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"metadata",id:"metadata",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"mode",id:"mode",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"namespace",id:"namespace",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"nullifiersRoot",id:"nullifiersroot",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"owner",id:"owner",level:3},{value:"Defined in",id:"defined-in-15",level:4},{value:"paramsSignature",id:"paramssignature",level:3},{value:"Defined in",id:"defined-in-16",level:4},{value:"processId",id:"processid",level:3},{value:"Defined in",id:"defined-in-17",level:4},{value:"questionCount",id:"questioncount",level:3},{value:"Defined in",id:"defined-in-18",level:4},{value:"questionIndex",id:"questionindex",level:3},{value:"Defined in",id:"defined-in-19",level:4},{value:"results",id:"results",level:3},{value:"Defined in",id:"defined-in-20",level:4},{value:"resultsSignatures",id:"resultssignatures",level:3},{value:"Defined in",id:"defined-in-21",level:4},{value:"rollingCensusRoot",id:"rollingcensusroot",level:3},{value:"Defined in",id:"defined-in-22",level:4},{value:"rollingCensusSize",id:"rollingcensussize",level:3},{value:"Defined in",id:"defined-in-23",level:4},{value:"sourceBlockHeight",id:"sourceblockheight",level:3},{value:"Defined in",id:"defined-in-24",level:4},{value:"sourceNetworkContractAddr",id:"sourcenetworkcontractaddr",level:3},{value:"Defined in",id:"defined-in-25",level:4},{value:"sourceNetworkId",id:"sourcenetworkid",level:3},{value:"Defined in",id:"defined-in-26",level:4},{value:"startBlock",id:"startblock",level:3},{value:"Defined in",id:"defined-in-27",level:4},{value:"status",id:"status",level:3},{value:"Defined in",id:"defined-in-28",level:4},{value:"tokenDecimals",id:"tokendecimals",level:3},{value:"Defined in",id:"defined-in-29",level:4},{value:"voteOptions",id:"voteoptions",level:3},{value:"Defined in",id:"defined-in-30",level:4}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/sdk"},"@vocdoni/sdk")," / ",(0,a.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / Process"),(0,a.kt)("h1",{id:"interface-process"},"Interface: Process"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#blockcount"},"blockCount")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#censusorigin"},"censusOrigin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#censusroot"},"censusRoot")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#censusuri"},"censusURI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#encryptionprivatekeys"},"encryptionPrivateKeys")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#encryptionpublickeys"},"encryptionPublicKeys")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#entityid"},"entityId")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#envelopetype"},"envelopeType")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#ethindexslot"},"ethIndexSlot")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#keyindex"},"keyIndex")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#maxcensussize"},"maxCensusSize")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#metadata"},"metadata")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#mode"},"mode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#namespace"},"namespace")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#nullifiersroot"},"nullifiersRoot")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#owner"},"owner")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#paramssignature"},"paramsSignature")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#processid"},"processId")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#questioncount"},"questionCount")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#questionindex"},"questionIndex")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#results"},"results")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#resultssignatures"},"resultsSignatures")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#rollingcensusroot"},"rollingCensusRoot")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#rollingcensussize"},"rollingCensusSize")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#sourceblockheight"},"sourceBlockHeight")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#sourcenetworkcontractaddr"},"sourceNetworkContractAddr")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#sourcenetworkid"},"sourceNetworkId")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#startblock"},"startBlock")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#status"},"status")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#tokendecimals"},"tokenDecimals")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Process#voteoptions"},"voteOptions"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"blockcount"},"blockCount"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"blockCount"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"BlockCount represents the amount of tendermint blocks that the process will last"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L174"},"api/chain/transactions.ts:174")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"censusorigin"},"censusOrigin"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"censusOrigin"),": ",(0,a.kt)("a",{parentName:"p",href:"../enums/CensusOrigin"},(0,a.kt)("inlineCode",{parentName:"a"},"CensusOrigin"))),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L192"},"api/chain/transactions.ts:192")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"censusroot"},"censusRoot"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"censusRoot"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,a.kt)("p",null,"CensusRoot merkle root of all the census in the process"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L176"},"api/chain/transactions.ts:176")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"censusuri"},"censusURI"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"censusURI"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"CensusURI where to find the census"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L178"},"api/chain/transactions.ts:178")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"encryptionprivatekeys"},"encryptionPrivateKeys"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"encryptionPrivateKeys"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,"EncryptionPrivateKeys are the keys required to decrypt the votes"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L180"},"api/chain/transactions.ts:180")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"encryptionpublickeys"},"encryptionPublicKeys"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"encryptionPublicKeys"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,"EncryptionPublicKeys are the keys required to encrypt the votes"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L182"},"api/chain/transactions.ts:182")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"entityid"},"entityId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"entityId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,a.kt)("p",null,"EntityId identifies unequivocally an entity"),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L170"},"api/chain/transactions.ts:170")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"envelopetype"},"envelopeType"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"envelopeType"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"EnvelopeType")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L187"},"api/chain/transactions.ts:187")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ethindexslot"},"ethIndexSlot"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"ethIndexSlot"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L195"},"api/chain/transactions.ts:195")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"keyindex"},"keyIndex"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"keyIndex"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L183"},"api/chain/transactions.ts:183")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"maxcensussize"},"maxCensusSize"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"maxCensusSize"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"MaxCensusSize is set by the Process creator."),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L205"},"api/chain/transactions.ts:205")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"metadata"},"metadata"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"metadata"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Metadata is the content hashed URI of the JSON meta data (See Data Origins)"),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L201"},"api/chain/transactions.ts:201")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"mode"},"mode"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"mode"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ProcessMode")),(0,a.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L188"},"api/chain/transactions.ts:188")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"namespace"},"namespace"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"namespace"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L186"},"api/chain/transactions.ts:186")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"nullifiersroot"},"nullifiersRoot"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"nullifiersRoot"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,a.kt)("p",null,"NullifiersRoot is the root of the pre-census nullifiers merkle tree.\nUsed when Mode.PreRegister = true."),(0,a.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L220"},"api/chain/transactions.ts:220")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"owner"},"owner"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"owner"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,a.kt)("p",null,"Owner is the creator of a process (if any) otherwise is assumed the creator is the entityId"),(0,a.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L199"},"api/chain/transactions.ts:199")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"paramssignature"},"paramsSignature"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"paramsSignature"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,a.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L185"},"api/chain/transactions.ts:185")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"processid"},"processId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"processId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,a.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L168"},"api/chain/transactions.ts:168")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"questioncount"},"questionCount"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"questionCount"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L190"},"api/chain/transactions.ts:190")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"questionindex"},"questionIndex"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"questionIndex"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L189"},"api/chain/transactions.ts:189")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"results"},"results"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"results"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ProcessResult"),"[]"),(0,a.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L193"},"api/chain/transactions.ts:193")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"resultssignatures"},"resultsSignatures"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"resultsSignatures"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array"),"[]"),(0,a.kt)("h4",{id:"defined-in-21"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L194"},"api/chain/transactions.ts:194")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"rollingcensusroot"},"rollingCensusRoot"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"rollingCensusRoot"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,a.kt)("p",null,"RollingCensusRoot merkle root of the rolling census.  Set by the\nvocdoni-node when Mode.Process = true"),(0,a.kt)("h4",{id:"defined-in-22"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L210"},"api/chain/transactions.ts:210")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"rollingcensussize"},"rollingCensusSize"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"rollingCensusSize"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"RollingCensusSize is set by the vocdoni-node when Mode.PreRegister =\ntrue and the StartBlock has been reached."),(0,a.kt)("h4",{id:"defined-in-23"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L215"},"api/chain/transactions.ts:215")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sourceblockheight"},"sourceBlockHeight"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"sourceBlockHeight"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"SourceBlockHeight is the block height of the origin blockchain (if any)"),(0,a.kt)("h4",{id:"defined-in-24"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L197"},"api/chain/transactions.ts:197")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sourcenetworkcontractaddr"},"sourceNetworkContractAddr"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"sourceNetworkContractAddr"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,a.kt)("p",null,"sourceNetworkContractAddr is used for EVM token based voting and it is\nthe contract address of the token that is going to define the census"),(0,a.kt)("h4",{id:"defined-in-25"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L225"},"api/chain/transactions.ts:225")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sourcenetworkid"},"sourceNetworkId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"sourceNetworkId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"SourceNetworkId")),(0,a.kt)("p",null,"SourceNetworkId is the identifier of the network origin (where the process have been created)"),(0,a.kt)("h4",{id:"defined-in-26"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L203"},"api/chain/transactions.ts:203")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"startblock"},"startBlock"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"startBlock"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"StartBlock represents the tendermint block where the process goes from scheduled to active"),(0,a.kt)("h4",{id:"defined-in-27"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L172"},"api/chain/transactions.ts:172")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"status"},"status"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"status"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ProcessStatus")),(0,a.kt)("h4",{id:"defined-in-28"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L184"},"api/chain/transactions.ts:184")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"tokendecimals"},"tokenDecimals"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"tokenDecimals"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"tokenDecimals represents the number of decimals of the token (i.e ERC20) used for voting.\nIt is normally used for processes with on-chain census"),(0,a.kt)("h4",{id:"defined-in-29"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L230"},"api/chain/transactions.ts:230")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"voteoptions"},"voteOptions"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"voteOptions"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ProcessVoteOptions")),(0,a.kt)("h4",{id:"defined-in-30"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/api/chain/transactions.ts#L191"},"api/chain/transactions.ts:191")))}c.isMDXComponent=!0}}]);