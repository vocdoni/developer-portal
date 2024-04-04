"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),k=p(n),m=i,h=k["".concat(s,".").concat(m)]||k[m]||c[m]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={},l=void 0,o={unversionedId:"sdk/reference/classes/ChainService",id:"sdk/reference/classes/ChainService",title:"ChainService",description:"@vocdoni/sdk / ChainService",source:"@site/docs/sdk/reference/classes/ChainService.md",sourceDirName:"sdk/reference/classes",slug:"/sdk/reference/classes/ChainService",permalink:"/sdk/reference/classes/ChainService",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ChainAPI",permalink:"/sdk/reference/classes/ChainAPI"},next:{title:"CspAPI",permalink:"/sdk/reference/classes/CspAPI"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Implements",id:"implements",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Methods",id:"methods",level:3},{value:"Properties",id:"properties",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods-1",level:2},{value:"dateToBlock",id:"datetoblock",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"fetchChainCosts",id:"fetchchaincosts",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"fetchChainData",id:"fetchchaindata",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"submitTx",id:"submittx",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"txInfo",id:"txinfo",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"waitForTransaction",id:"waitfortransaction",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"Properties",id:"properties-1",level:2},{value:"chainCosts",id:"chaincosts",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"chainData",id:"chaindata",level:3},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"txWait",id:"txwait",level:3},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"url",id:"url",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-10",level:4}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/sdk"},"@vocdoni/sdk")," / ChainService"),(0,i.kt)("h1",{id:"class-chainservice"},"Class: ChainService"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"Service"},(0,i.kt)("inlineCode",{parentName:"a"},"Service"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ChainService"))))),(0,i.kt)("h2",{id:"implements"},"Implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ChainServiceProperties"))),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"constructors"},"Constructors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"ChainService#constructor"},"constructor"))),(0,i.kt)("h3",{id:"methods"},"Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"ChainService#datetoblock"},"dateToBlock")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"ChainService#fetchchaincosts"},"fetchChainCosts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"ChainService#fetchchaindata"},"fetchChainData")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"ChainService#submittx"},"submitTx")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"ChainService#txinfo"},"txInfo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"ChainService#waitfortransaction"},"waitForTransaction"))),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"ChainService#chaincosts"},"chainCosts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"ChainService#chaindata"},"chainData")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"ChainService#txwait"},"txWait")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"ChainService#url"},"url"))),(0,i.kt)("h2",{id:"constructors-1"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new ChainService"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"params"),"): ",(0,i.kt)("a",{parentName:"p",href:"ChainService"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainService"))),(0,i.kt)("p",null,"Instantiate the chain service."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"params")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Partial"),"\\<",(0,i.kt)("inlineCode",{parentName:"td"},"ChainServiceParameters"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The service parameters")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"ChainService"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainService"))),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,"Service.constructor"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/services/chain.ts#L47"},"services/chain.ts:47")),(0,i.kt)("h2",{id:"methods-1"},"Methods"),(0,i.kt)("h3",{id:"datetoblock"},"dateToBlock"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"dateToBlock"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"date"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,i.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,i.kt)("p",null,"Returns the block number for a given date."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"date")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Date")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The date which we want to retrieve the block number from")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,i.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,i.kt)("p",null,"The block number"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/services/chain.ts#L112"},"services/chain.ts:112")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fetchchaincosts"},"fetchChainCosts"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"fetchChainCosts"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,i.kt)("a",{parentName:"p",href:"../interfaces/IChainGetCostsResponse"},(0,i.kt)("inlineCode",{parentName:"a"},"IChainGetCostsResponse")),">"),(0,i.kt)("p",null,"Fetches blockchain costs information if needed."),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,i.kt)("a",{parentName:"p",href:"../interfaces/IChainGetCostsResponse"},(0,i.kt)("inlineCode",{parentName:"a"},"IChainGetCostsResponse")),">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/services/chain.ts#L72"},"services/chain.ts:72")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fetchchaindata"},"fetchChainData"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"fetchChainData"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,i.kt)("a",{parentName:"p",href:"../sdk-reference#chaindata"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainData")),">"),(0,i.kt)("p",null,"Fetches blockchain information if needed."),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,i.kt)("a",{parentName:"p",href:"../sdk-reference#chaindata"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainData")),">"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/services/chain.ts#L56"},"services/chain.ts:56")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"submittx"},"submitTx"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"submitTx"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"payload"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("p",null,"Submits a transaction to the blockchain"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"payload")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The transaction data payload")))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("p",null,"The transaction hash"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/services/chain.ts#L90"},"services/chain.ts:90")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"txinfo"},"txInfo"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"txInfo"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"txHash"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,i.kt)("a",{parentName:"p",href:"../interfaces/IChainTxReference"},(0,i.kt)("inlineCode",{parentName:"a"},"IChainTxReference")),">"),(0,i.kt)("p",null,"Fetches information about a transaction from the blockchain."),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"txHash")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The transaction hash which we want to retrieve the info from")))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,i.kt)("a",{parentName:"p",href:"../interfaces/IChainTxReference"},(0,i.kt)("inlineCode",{parentName:"a"},"IChainTxReference")),">"),(0,i.kt)("p",null,"The chain transaction"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/services/chain.ts#L101"},"services/chain.ts:101")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"waitfortransaction"},"waitForTransaction"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"waitForTransaction"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"tx"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"wait?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"attempts?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("p",null,"A convenience method to wait for a transaction to be executed. It will\nloop trying to get the transaction information, and will retry every time\nit fails."),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tx")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Transaction to wait for")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"wait?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The delay in milliseconds between tries")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"attempts?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The attempts to try before failing")))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/services/chain.ts#L126"},"services/chain.ts:126")),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"chaincosts"},"chainCosts"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"chainCosts"),": ",(0,i.kt)("a",{parentName:"p",href:"../interfaces/IChainGetCostsResponse"},(0,i.kt)("inlineCode",{parentName:"a"},"IChainGetCostsResponse"))),(0,i.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,i.kt)("p",null,"ChainServiceProperties.chainCosts"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/services/chain.ts#L38"},"services/chain.ts:38")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"chaindata"},"chainData"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"chainData"),": ",(0,i.kt)("a",{parentName:"p",href:"../sdk-reference#chaindata"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainData"))),(0,i.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,i.kt)("p",null,"ChainServiceProperties.chainData"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/services/chain.ts#L39"},"services/chain.ts:39")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"txwait"},"txWait"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"txWait"),": ",(0,i.kt)("a",{parentName:"p",href:"../sdk-reference#txwaitoptions"},(0,i.kt)("inlineCode",{parentName:"a"},"TxWaitOptions"))),(0,i.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,i.kt)("p",null,"ChainServiceProperties.txWait"),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/services/chain.ts#L40"},"services/chain.ts:40")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"url"},"url"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"url"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/sdk/reference/classes/Service"},"Service"),".",(0,i.kt)("a",{parentName:"p",href:"Service#url"},"url")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/9c64446/src/services/service.ts#L6"},"services/service.ts:6")))}c.isMDXComponent=!0}}]);