"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[874],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>s});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var k=n.createContext({}),o=function(t){var e=n.useContext(k),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},p=function(t){var e=o(t.components);return n.createElement(k.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,k=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=o(a),s=r,N=m["".concat(k,".").concat(s)]||m[s]||d[s]||l;return a?n.createElement(N,c(c({ref:e},p),{},{components:a})):n.createElement(N,c({ref:e},p))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,c=new Array(l);c[0]=m;var i={};for(var k in e)hasOwnProperty.call(e,k)&&(i[k]=e[k]);i.originalType=t,i.mdxType="string"==typeof t?t:r,c[1]=i;for(var o=2;o<l;o++)c[o]=a[o];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},15575:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={custom_edit_url:null},c=void 0,i={unversionedId:"sdk/VocdoniSDKClient",id:"sdk/VocdoniSDKClient",title:"VocdoniSDKClient",description:"Main Vocdoni client object. It's a wrapper for all the methods in api, coreand types, allowing you to easily use the vocdoni API from a single entrypoint.",source:"@site/docs/sdk/VocdoniSDKClient.mdx",sourceDirName:"sdk",slug:"/sdk/VocdoniSDKClient",permalink:"/sdk/VocdoniSDKClient",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"sdk",previous:{title:"WalletAPI",permalink:"/sdk/WalletAPI"},next:{title:"AccountCore",permalink:"/sdk/AccountCore"}},k={},o=[{value:"constructor",id:"constructor",level:2},{value:"Methods",id:"methods",level:2},{value:"generateWalletFromData",id:"generateWalletFromData",level:3},{value:"setElectionId",id:"setElectionId",level:3},{value:"fetchChainId",id:"fetchChainId",level:3},{value:"fetchAccountInfo",id:"fetchAccountInfo",level:3},{value:"calculateCID",id:"calculateCID",level:3},{value:"fetchFaucetPayload",id:"fetchFaucetPayload",level:3},{value:"parseFaucetPackage",id:"parseFaucetPackage",level:3},{value:"fetchAccountToken",id:"fetchAccountToken",level:3},{value:"fetchElection",id:"fetchElection",level:3},{value:"waitForTransaction",id:"waitForTransaction",level:3},{value:"fetchProof",id:"fetchProof",level:3},{value:"fetchProofForWallet",id:"fetchProofForWallet",level:3},{value:"setAccountInfo",id:"setAccountInfo",level:3},{value:"createAccount",id:"createAccount",level:3},{value:"collectFaucetTokens",id:"collectFaucetTokens",level:3},{value:"createCensus",id:"createCensus",level:3},{value:"fetchCensusInfo",id:"fetchCensusInfo",level:3},{value:"createElection",id:"createElection",level:3},{value:"endElection",id:"endElection",level:3},{value:"pauseElection",id:"pauseElection",level:3},{value:"cancelElection",id:"cancelElection",level:3},{value:"continueElection",id:"continueElection",level:3},{value:"changeElectionStatus",id:"changeElectionStatus",level:3},{value:"isInCensus",id:"isInCensus",level:3},{value:"hasAlreadyVoted",id:"hasAlreadyVoted",level:3},{value:"isAbleToVote",id:"isAbleToVote",level:3},{value:"votesLeftCount",id:"votesLeftCount",level:3},{value:"submitVote",id:"submitVote",level:3}],p={toc:o};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class VocdoniSDKClient\n")),(0,r.kt)("div",null),(0,r.kt)("p",null,"Main Vocdoni client object. It's a wrapper for all the methods in api, core",(0,r.kt)("br",null),"and types, allowing you to easily use the vocdoni API from a single entry",(0,r.kt)("br",null),"point."),(0,r.kt)("div",{className:"container"},(0,r.kt)("div",{className:"row mb-2"},(0,r.kt)("div",{className:"col col--12"},(0,r.kt)("strong",null,"Methods"))),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col col--12"},(0,r.kt)("a",{href:"#generateWalletFromData"},"generateWalletFromData"),(0,r.kt)("span",{className:"badge badge--info margin-left--sm"},"static"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#setElectionId"},"setElectionId"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#fetchChainId"},"fetchChainId"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#fetchAccountInfo"},"fetchAccountInfo"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#calculateCID"},"calculateCID"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#fetchFaucetPayload"},"fetchFaucetPayload"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#parseFaucetPackage"},"parseFaucetPackage"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#fetchAccountToken"},"fetchAccountToken"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#fetchElection"},"fetchElection"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#waitForTransaction"},"waitForTransaction"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#fetchProof"},"fetchProof"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#fetchProofForWallet"},"fetchProofForWallet"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#setAccountInfo"},"setAccountInfo"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#createAccount"},"createAccount"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#collectFaucetTokens"},"collectFaucetTokens"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#createCensus"},"createCensus"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#fetchCensusInfo"},"fetchCensusInfo"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#createElection"},"createElection"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#endElection"},"endElection"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#pauseElection"},"pauseElection"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#cancelElection"},"cancelElection"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#continueElection"},"continueElection"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#changeElectionStatus"},"changeElectionStatus"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#isInCensus"},"isInCensus"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#hasAlreadyVoted"},"hasAlreadyVoted"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#isAbleToVote"},"isAbleToVote"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#votesLeftCount"},"votesLeftCount"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#submitVote"},"submitVote")))),(0,r.kt)("h2",{id:"constructor"},"constructor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"new VocdoniSDKClient(opts)\n")),(0,r.kt)("div",null),(0,r.kt)("p",null,"Instantiate new VocdoniSDK client.",(0,r.kt)("br",null),(0,r.kt)("br",null),"To instantiate the client just pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"ClientOptions")," you want or empty object to let defaults.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"p"},"const client = new VocdoniSDKClient({EnvOptions.PROD})")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"opts"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"ClientOptions"},"ClientOptions")),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"optional arguments")))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"generateWalletFromData"},"generateWalletFromData"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--info"},"static")),(0,r.kt)("p",null,"Returns a Wallet based on the inputs."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Wallet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The deterministic wallet.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"data"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string ","|"," Array","<","string",">"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The data inputs which should generate the Wallet")))),(0,r.kt)("h3",{id:"setElectionId"},"setElectionId"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Sets an election id. Required by other methods like submitVote or createElection."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"electionId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Election id string")))),(0,r.kt)("h3",{id:"fetchChainId"},"fetchChainId"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Fetches blockchain information if needed and returns the chain id."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","string",">"),(0,r.kt)("h3",{id:"fetchAccountInfo"},"fetchAccountInfo"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--success"},"async")),(0,r.kt)("p",null,"Fetches account information."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<",(0,r.kt)("a",{parentName:"p",href:"AccountData"},"AccountData"),">"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"account"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The account to fetch the information")))),(0,r.kt)("h3",{id:"calculateCID"},"calculateCID"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Fetches the CID expected for the specified data content."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","string",">"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Resulting CID")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"data"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The data of which we want the CID of")))),(0,r.kt)("h3",{id:"fetchFaucetPayload"},"fetchFaucetPayload"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Fetches a faucet payload. Only for development."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","{string}",">"),(0,r.kt)("h3",{id:"parseFaucetPackage"},"parseFaucetPackage"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Parses a faucet package."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("a",{parentName:"p",href:"FaucetPackage"},"FaucetPackage")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"faucetPackage"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h3",{id:"fetchAccountToken"},"fetchAccountToken"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Fetches the specific account token auth and sets it to the current instance."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.kt)("h3",{id:"fetchElection"},"fetchElection"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--success"},"async")),(0,r.kt)("p",null,"Fetches info about an election."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<",(0,r.kt)("a",{parentName:"p",href:"UnpublishedElection"},"UnpublishedElection"),">"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"electionId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The id of the election")))),(0,r.kt)("h3",{id:"waitForTransaction"},"waitForTransaction"),(0,r.kt)("div",null),(0,r.kt)("p",null,"A convenience method to wait for a transaction to be executed. It will",(0,r.kt)("br",null),"loop trying to get the transaction information, and will retry every time",(0,r.kt)("br",null),"it fails."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"tx"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Transaction to wait for")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"wait"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The delay in milliseconds between tries")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"attempts"),(0,r.kt)("td",{parentName:"tr",align:"center"},"attempts"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The attempts to try before failing")))),(0,r.kt)("h3",{id:"fetchProof"},"fetchProof"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--success"},"async")),(0,r.kt)("p",null,"Fetches proof that an address is part of the specified census."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<",(0,r.kt)("a",{parentName:"p",href:"OffchainCensusProof"},"OffchainCensusProof"),">"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"censusId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Census we want to check the address against")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"key"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The address to be found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"type"),(0,r.kt)("td",{parentName:"tr",align:"center"},"CensusProofType"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Type of census")))),(0,r.kt)("h3",{id:"fetchProofForWallet"},"fetchProofForWallet"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Fetches proof that an address is part of the specified census."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<",(0,r.kt)("a",{parentName:"p",href:"OffchainCensusProof"},"OffchainCensusProof"),">"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"election"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"PublishedElection"},"PublishedElection")),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"wallet"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Wallet ","|"," Signer"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h3",{id:"setAccountInfo"},"setAccountInfo"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--success"},"async")),(0,r.kt)("p",null,"Sets account information."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<",(0,r.kt)("a",{parentName:"p",href:"AccountData"},"AccountData"),">"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"options"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Additional options,",(0,r.kt)("br",null),"like extra information of the account, or the faucet package string.")))),(0,r.kt)("h3",{id:"createAccount"},"createAccount"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Registers an account against vochain, so it can create new elections."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<",(0,r.kt)("a",{parentName:"p",href:"AccountData"},"AccountData"),">"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"options"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Additional",(0,r.kt)("br",null),"options, like extra information of the account, or the faucet package string")))),(0,r.kt)("h3",{id:"collectFaucetTokens"},"collectFaucetTokens"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Calls the faucet to get new tokens. Only under development."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<",(0,r.kt)("a",{parentName:"p",href:"AccountData"},"AccountData"),">"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Account data information updated with new balance")),(0,r.kt)("h3",{id:"createCensus"},"createCensus"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Publishes the given census."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"census"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"PlainCensus"},"PlainCensus")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"WeightedCensus"},"WeightedCensus")),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The census to be published.")))),(0,r.kt)("h3",{id:"fetchCensusInfo"},"fetchCensusInfo"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Fetches the information of a given census."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","{size: number, weight: BigInt}",">"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"censusId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h3",{id:"createElection"},"createElection"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--success"},"async")),(0,r.kt)("p",null,"Creates a new voting election."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","string",">"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Resulting election id.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"election"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"UnpublishedElection"},"UnpublishedElection")),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The election object to be created.")))),(0,r.kt)("h3",{id:"endElection"},"endElection"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Ends an election."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"electionId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The id of the election")))),(0,r.kt)("h3",{id:"pauseElection"},"pauseElection"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Pauses an election."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"electionId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The id of the election")))),(0,r.kt)("h3",{id:"cancelElection"},"cancelElection"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Cancels an election."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"electionId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The id of the election")))),(0,r.kt)("h3",{id:"continueElection"},"continueElection"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Continues an election."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"electionId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The id of the election")))),(0,r.kt)("h3",{id:"changeElectionStatus"},"changeElectionStatus"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Changes the status of an election."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"electionId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The id of the election")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"newStatus"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ElectionStatus"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The new status")))),(0,r.kt)("h3",{id:"isInCensus"},"isInCensus"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--success"},"async")),(0,r.kt)("p",null,"Checks if the user is in census."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","boolean",">"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"electionId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The id of the election")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"key"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The key in the census to check")))),(0,r.kt)("h3",{id:"hasAlreadyVoted"},"hasAlreadyVoted"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Checks if the user has already voted"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","boolean",">"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"electionId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The id of the election")))),(0,r.kt)("h3",{id:"isAbleToVote"},"isAbleToVote"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Checks if the user is able to vote"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","boolean",">"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"electionId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The id of the election")))),(0,r.kt)("h3",{id:"votesLeftCount"},"votesLeftCount"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--success"},"async")),(0,r.kt)("p",null,"Checks how many times a user can submit their vote"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","number",">"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"electionId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The id of the election")))),(0,r.kt)("h3",{id:"submitVote"},"submitVote"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--success"},"async")),(0,r.kt)("p",null,"Submits a vote to the current instance election id."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","string",">"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vote confirmation id.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"vote"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"Vote"},"Vote")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"CspVote"},"CspVote")),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The vote (or votes) to be sent.")))))}d.isMDXComponent=!0}}]);