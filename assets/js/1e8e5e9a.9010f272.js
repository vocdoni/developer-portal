"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4881],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=d(n),N=r,c=s["".concat(o,".").concat(N)]||s[N]||k[N]||i;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},94067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={},l=void 0,p={unversionedId:"sdk/reference/classes/ElectionAPI",id:"sdk/reference/classes/ElectionAPI",title:"ElectionAPI",description:"@vocdoni/sdk / ElectionAPI",source:"@site/docs/sdk/reference/classes/ElectionAPI.md",sourceDirName:"sdk/reference/classes",slug:"/sdk/reference/classes/ElectionAPI",permalink:"/sdk/reference/classes/ElectionAPI",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Election",permalink:"/sdk/reference/classes/Election"},next:{title:"ElectionService",permalink:"/sdk/reference/classes/ElectionService"}},o={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Methods",id:"methods",level:3},{value:"Methods",id:"methods-1",level:2},{value:"create",id:"create",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"electionsList",id:"electionslist",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"info",id:"info",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"keys",id:"keys",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"nextElectionId",id:"nextelectionid",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"price",id:"price",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"votesCount",id:"votescount",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"votesList",id:"voteslist",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-7",level:4}],m={toc:d};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/sdk"},"@vocdoni/sdk")," / ElectionAPI"),(0,r.kt)("h1",{id:"class-electionapi"},"Class: ElectionAPI"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"API")),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ElectionAPI"))))),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"ElectionAPI#create"},"create")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"ElectionAPI#electionslist"},"electionsList")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"ElectionAPI#info"},"info")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"ElectionAPI#keys"},"keys")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"ElectionAPI#nextelectionid"},"nextElectionId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"ElectionAPI#price"},"price")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"ElectionAPI#votescount"},"votesCount")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"ElectionAPI#voteslist"},"votesList"))),(0,r.kt)("h2",{id:"methods-1"},"Methods"),(0,r.kt)("h3",{id:"create"},"create"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"create"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"payload"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("a",{parentName:"p",href:"../interfaces/IElectionCreateResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"IElectionCreateResponse")),">"),(0,r.kt)("p",null,"Creates a new election."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"API endpoint URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"payload")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The set information info raw payload to be submitted to the chain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"metadata")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The base64 encoded metadata JSON object")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("a",{parentName:"p",href:"../interfaces/IElectionCreateResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"IElectionCreateResponse")),">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/api/election.ts#L410"},"api/election.ts:410")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"electionslist"},"electionsList"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"electionsList"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"page?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"filter?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("a",{parentName:"p",href:"../interfaces/IElectionListResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"IElectionListResponse")),">"),(0,r.kt)("p",null,"Return list of all elections in the chain"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"API endpoint URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"page")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The page number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"filter")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../interfaces/IElectionListFilter"},(0,r.kt)("inlineCode",{parentName:"a"},"IElectionListFilter"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Search by organizationId, electionId, withResults, and status")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("a",{parentName:"p",href:"../interfaces/IElectionListResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"IElectionListResponse")),">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/api/election.ts#L477"},"api/election.ts:477")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"info"},"info"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"info"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"electionId"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("a",{parentName:"p",href:"../interfaces/IElectionInfoResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"IElectionInfoResponse")),">"),(0,r.kt)("p",null,"Fetches info about the specified process."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"API endpoint URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"electionId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The identifier of the election")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("a",{parentName:"p",href:"../interfaces/IElectionInfoResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"IElectionInfoResponse")),">"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/api/election.ts#L383"},"api/election.ts:383")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"keys"},"keys"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"keys"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"electionId"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("a",{parentName:"p",href:"../interfaces/IElectionKeysResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"IElectionKeysResponse")),">"),(0,r.kt)("p",null,"Fetches the encryption keys from the specified process."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"API endpoint URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"electionId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The identifier of the election")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("a",{parentName:"p",href:"../interfaces/IElectionKeysResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"IElectionKeysResponse")),">"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/api/election.ts#L396"},"api/election.ts:396")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"nextelectionid"},"nextElectionId"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"nextElectionId"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"organizationId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"censusOrigin"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"envelopeType?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("a",{parentName:"p",href:"../interfaces/IElectionNextIdResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"IElectionNextIdResponse")),">"),(0,r.kt)("p",null,"Returns the next election id."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"API endpoint URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"organizationId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The identifier of the organization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"censusOrigin")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The census origin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"envelopeType?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Partial"),"\\<",(0,r.kt)("a",{parentName:"td",href:"../interfaces/IVoteMode"},(0,r.kt)("inlineCode",{parentName:"a"},"IVoteMode")),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The envelope type")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("a",{parentName:"p",href:"../interfaces/IElectionNextIdResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"IElectionNextIdResponse")),">"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/api/election.ts#L425"},"api/election.ts:425")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"price"},"price"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"price"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"maxCensusSize"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"electionDuration"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"encryptedVotes"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"anonymousVotes"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"maxVoteOverwrite"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"IElectionCalculatePriceResponse"),">"),(0,r.kt)("p",null,"Calculates the election price."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"API endpoint URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"maxCensusSize")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"electionDuration")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"encryptedVotes")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"anonymousVotes")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"maxVoteOverwrite")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"IElectionCalculatePriceResponse"),">"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/api/election.ts#L509"},"api/election.ts:509")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"votescount"},"votesCount"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"votesCount"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"electionId"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"IElectionVotesCountResponse"),">"),(0,r.kt)("p",null,"Returns the number of votes of a given election"),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"API endpoint URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"electionId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The identifier of the election")))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"IElectionVotesCountResponse"),">"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/api/election.ts#L447"},"api/election.ts:447")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"voteslist"},"votesList"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"votesList"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"electionId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"page?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("a",{parentName:"p",href:"../interfaces/IElectionVoteListResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"IElectionVoteListResponse")),">"),(0,r.kt)("p",null,"Returns the list of votes for a given election"),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"API endpoint URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"electionId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The identifier of the election")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"page")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The page number")))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("a",{parentName:"p",href:"../interfaces/IElectionVoteListResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"IElectionVoteListResponse")),">"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/66360b95227306027699be0e80826ca7975027a0/src/api/election.ts#L461"},"api/election.ts:461")))}k.isMDXComponent=!0}}]);