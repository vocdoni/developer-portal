"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2451],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,k=p["".concat(o,".").concat(h)]||p[h]||s[h]||l;return n?a.createElement(k,d(d({ref:t},c),{},{components:n})):a.createElement(k,d({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,d=new Array(l);d[0]=p;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:i,d[1]=r;for(var u=2;u<l;u++)d[u]=n[u];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},67580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>s,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const l={},d="Changelog",r={unversionedId:"sdk/changelog",id:"sdk/changelog",title:"Changelog",description:"All notable changes to this project will be documented in this file.",source:"@site/docs/sdk/changelog.md",sourceDirName:"sdk",slug:"/sdk/changelog",permalink:"/sdk/changelog",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sdk",previous:{title:"promiseAny",permalink:"/sdk/promiseAny"}},o={},u=[{value:"0.0.14 - 2023-06-12",id:"0014---2023-06-12",level:2},{value:"Added",id:"added",level:3},{value:"0.0.13 - 2023-06-06",id:"0013---2023-06-06",level:2},{value:"Added",id:"added-1",level:3},{value:"Changed",id:"changed",level:3},{value:"Fixed",id:"fixed",level:3},{value:"0.0.12 - 2023-05-09",id:"0012---2023-05-09",level:2},{value:"Fixed",id:"fixed-1",level:3},{value:"0.0.11 - 2023-04-25",id:"0011---2023-04-25",level:2},{value:"Fixed",id:"fixed-2",level:3},{value:"0.0.10 - 2023-04-25",id:"0010---2023-04-25",level:2},{value:"Fixed",id:"fixed-3",level:3},{value:"0.0.9 - 2023-04-25",id:"009---2023-04-25",level:2},{value:"Added",id:"added-2",level:3},{value:"Changed",id:"changed-1",level:3},{value:"Removed",id:"removed",level:3},{value:"0.0.8 - 2023-04-05",id:"008---2023-04-05",level:2},{value:"Added",id:"added-3",level:3},{value:"Changed",id:"changed-2",level:3},{value:"Fixed",id:"fixed-4",level:3},{value:"0.0.7 - 2023-03-29",id:"007---2023-03-29",level:2},{value:"Changed",id:"changed-3",level:3},{value:"0.0.6 - 2023-03-22",id:"006---2023-03-22",level:2},{value:"Changed",id:"changed-4",level:3},{value:"0.0.5 - 2023-03-08",id:"005---2023-03-08",level:2},{value:"Added",id:"added-4",level:3},{value:"Changed",id:"changed-5",level:3},{value:"0.0.4-alpha - 2023-03-01",id:"004-alpha---2023-03-01",level:2},{value:"Added",id:"added-5",level:3},{value:"Changed",id:"changed-6",level:3},{value:"Fixed",id:"fixed-5",level:3},{value:"0.0.3-alpha - 2023-01-31",id:"003-alpha---2023-01-31",level:2},{value:"Added",id:"added-6",level:3},{value:"Fixed",id:"fixed-6",level:3},{value:"Changed",id:"changed-7",level:3},{value:"0.0.2-alpha - 2022-12-20",id:"002-alpha---2022-12-20",level:2},{value:"Added",id:"added-7",level:3},{value:"Fixed",id:"fixed-7",level:3},{value:"Changed",id:"changed-8",level:3},{value:"0.0.1-alpha - 2022-12-01",id:"001-alpha---2022-12-01",level:2},{value:"Added",id:"added-8",level:3}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"changelog"},"Changelog"),(0,i.kt)("p",null,"All notable changes to this project will be documented in this file."),(0,i.kt)("p",null,"The format is based on ",(0,i.kt)("a",{parentName:"p",href:"https://keepachangelog.com/en/1.0.0/"},"Keep a Changelog"),",\nand this project adheres to ",(0,i.kt)("a",{parentName:"p",href:"https://semver.org/spec/v2.0.0.html"},"Semantic Versioning"),"."),(0,i.kt)("h2",{id:"0014---2023-06-12"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/vocdoni/vocdoni-sdk/releases/tag/v0.0.14"},"0.0.14")," - 2023-06-12"),(0,i.kt)("h3",{id:"added"},"Added"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maxValue"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"maxCount")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"maxTotalCost")," properties in ",(0,i.kt)("inlineCode",{parentName:"li"},"IVoteType")," in an election for creating\nquadratic, approval and ranked elections.")),(0,i.kt)("h2",{id:"0013---2023-06-06"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/vocdoni/vocdoni-sdk/releases/tag/v0.0.13"},"0.0.13")," - 2023-06-06"),(0,i.kt)("h3",{id:"added-1"},"Added"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vocdoni/census3/"},"Census3")," integration"),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"meta")," parameters to election metadata"),(0,i.kt)("li",{parentName:"ul"},"Minor helper functions")),(0,i.kt)("h3",{id:"changed"},"Changed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added some new information to API endpoints")),(0,i.kt)("h3",{id:"fixed"},"Fixed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Unlocked rollup version")),(0,i.kt)("h2",{id:"0012---2023-05-09"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/vocdoni/vocdoni-sdk/releases/tag/v0.0.12"},"0.0.12")," - 2023-05-09"),(0,i.kt)("h3",{id:"fixed-1"},"Fixed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fixed ",(0,i.kt)("inlineCode",{parentName:"li"},"personal_sign")," provider call bug for certain environments")),(0,i.kt)("h2",{id:"0011---2023-04-25"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/vocdoni/vocdoni-sdk/releases/tag/v0.0.11"},"0.0.11")," - 2023-04-25"),(0,i.kt)("h3",{id:"fixed-2"},"Fixed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fix type error in ",(0,i.kt)("inlineCode",{parentName:"li"},"fetchAccountInfo"))),(0,i.kt)("h2",{id:"0010---2023-04-25"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/vocdoni/vocdoni-sdk/releases/tag/v0.0.10"},"0.0.10")," - 2023-04-25"),(0,i.kt)("h3",{id:"fixed-3"},"Fixed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fixed internal ",(0,i.kt)("inlineCode",{parentName:"li"},"SetAccountTx")," nonce when creating transactions")),(0,i.kt)("h2",{id:"009---2023-04-25"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/vocdoni/vocdoni-sdk/releases/tag/v0.0.9"},"0.0.9")," - 2023-04-25"),(0,i.kt)("h3",{id:"added-2"},"Added"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"generateRandomWallet")," function for assigning a random Wallet to the client")),(0,i.kt)("h3",{id:"changed-1"},"Changed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isInCensus")," doesn't accept census type because censuses with public keys are removed"),(0,i.kt)("li",{parentName:"ul"},"Refactored account methods to return new ",(0,i.kt)("inlineCode",{parentName:"li"},"AccountData")," definition with ",(0,i.kt)("inlineCode",{parentName:"li"},"Account")," field")),(0,i.kt)("h3",{id:"removed"},"Removed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ability to create censuses using public keys")),(0,i.kt)("h2",{id:"008---2023-04-05"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/vocdoni/vocdoni-sdk/releases/tag/v0.0.8"},"0.0.8")," - 2023-04-05"),(0,i.kt)("h3",{id:"added-3"},"Added"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Custom error handling (WIP)")),(0,i.kt)("h3",{id:"changed-2"},"Changed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"votesLeftCount")," checks if user is in census."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hasAlreadyVoted()")," returns the vote id or null if the account hasn't voted.")),(0,i.kt)("h3",{id:"fixed-4"},"Fixed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Increased time for transaction confirmation due to block time increase.")),(0,i.kt)("h2",{id:"007---2023-03-29"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/vocdoni/vocdoni-sdk/releases/tag/v0.0.7"},"0.0.7")," - 2023-03-29"),(0,i.kt)("h3",{id:"changed-3"},"Changed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Updated ",(0,i.kt)("inlineCode",{parentName:"li"},"vocdoni/proto")," library to version ",(0,i.kt)("inlineCode",{parentName:"li"},"1.14.1"),"."),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"maxCensusSize")," to the election creation.")),(0,i.kt)("h2",{id:"006---2023-03-22"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/vocdoni/vocdoni-sdk/releases/tag/v0.0.6"},"0.0.6")," - 2023-03-22"),(0,i.kt)("h3",{id:"changed-4"},"Changed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ElectionStatus")," includes new values ",(0,i.kt)("inlineCode",{parentName:"li"},"ONGOING")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"UPCOMING"),". ",(0,i.kt)("inlineCode",{parentName:"li"},"READY")," is removed an only used internally."),(0,i.kt)("li",{parentName:"ul"},"Election description changed from mandatory to optional."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fetchElections")," accepts no account and returns all elections in the chain."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fetchAccountInfo")," accepts arbitrary account to retrieve information.")),(0,i.kt)("h2",{id:"005---2023-03-08"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/vocdoni/vocdoni-sdk/releases/tag/v0.0.5"},"0.0.5")," - 2023-03-08"),(0,i.kt)("h3",{id:"added-4"},"Added"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fetchElections")," function to fetch all elections based on a given account"),(0,i.kt)("li",{parentName:"ul"},"New ",(0,i.kt)("inlineCode",{parentName:"li"},"organizationId")," property in ",(0,i.kt)("inlineCode",{parentName:"li"},"PublishedElection"))),(0,i.kt)("h3",{id:"changed-5"},"Changed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PublishedCensus")," has ",(0,i.kt)("inlineCode",{parentName:"li"},"size")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"weight")," fields for offchain census.")),(0,i.kt)("h2",{id:"004-alpha---2023-03-01"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/vocdoni/vocdoni-sdk/releases/tag/v0.0.4-alpha"},"0.0.4-alpha")," - 2023-03-01"),(0,i.kt)("h3",{id:"added-5"},"Added"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Credential service provider integrated"),(0,i.kt)("li",{parentName:"ul"},"Custom retry attempts and time for transactions waiting functionality"),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"votesLeftCount")," function for checking how many times a user can submit a vote"),(0,i.kt)("li",{parentName:"ul"},"New API requests added for chain information")),(0,i.kt)("h3",{id:"changed-6"},"Changed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"header")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"streamUri")," are no longer mandatory when creating an election.")),(0,i.kt)("h3",{id:"fixed-5"},"Fixed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"No more 400 error status HTTP requests when asking for a non-confirmed transaction"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maxValue")," property fixed in election data")),(0,i.kt)("h2",{id:"003-alpha---2023-01-31"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/vocdoni/vocdoni-sdk/releases/tag/v0.0.3-alpha"},"0.0.3-alpha")," - 2023-01-31"),(0,i.kt)("h3",{id:"added-6"},"Added"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Functionality to check if a user is in census ",(0,i.kt)("inlineCode",{parentName:"li"},"isInCensus")),(0,i.kt)("li",{parentName:"ul"},"Functionality to check if a user has already voted ",(0,i.kt)("inlineCode",{parentName:"li"},"hasAlreadyVoted")),(0,i.kt)("li",{parentName:"ul"},"Functionality to check if a user is able to vote ",(0,i.kt)("inlineCode",{parentName:"li"},"isAbleToVote")),(0,i.kt)("li",{parentName:"ul"},"Export UMD version via ",(0,i.kt)("inlineCode",{parentName:"li"},"@vocdoni/sdk/umd")),(0,i.kt)("li",{parentName:"ul"},"Deterministic Wallet generation from arbitrary data")),(0,i.kt)("h3",{id:"fixed-6"},"Fixed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Return ",(0,i.kt)("inlineCode",{parentName:"li"},"voteId")," when submitting vote instead of the transaction hash."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Buffer")," imports for bundle"),(0,i.kt)("li",{parentName:"ul"},"Bundling & export issues")),(0,i.kt)("h3",{id:"changed-7"},"Changed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Removed ",(0,i.kt)("inlineCode",{parentName:"li"},"dvote-solidity")," dependency.")),(0,i.kt)("h2",{id:"002-alpha---2022-12-20"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/vocdoni/vocdoni-sdk/releases/tag/v0.0.2-alpha"},"0.0.2-alpha")," - 2022-12-20"),(0,i.kt)("h3",{id:"added-7"},"Added"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Staging environment options for API and Faucet"),(0,i.kt)("li",{parentName:"ul"},"Functionality to end, pause, cancel and continue an election")),(0,i.kt)("h3",{id:"fixed-7"},"Fixed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fixed proof check using public key when signer is from type ",(0,i.kt)("inlineCode",{parentName:"li"},"Wallet"))),(0,i.kt)("h3",{id:"changed-8"},"Changed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use voting endpoint instead of generic submitTx."),(0,i.kt)("li",{parentName:"ul"},"Naming for client initialization options changed."),(0,i.kt)("li",{parentName:"ul"},"There are now the new ",(0,i.kt)("inlineCode",{parentName:"li"},"UnpublishedElection")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"PublishedElection")," classes\nwhich extend from the abstract ",(0,i.kt)("inlineCode",{parentName:"li"},"Election")," class."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fetchElection")," accepts an election id.")),(0,i.kt)("h2",{id:"001-alpha---2022-12-01"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/vocdoni/vocdoni-sdk/releases/tag/v0.0.1-alpha"},"0.0.1-alpha")," - 2022-12-01"),(0,i.kt)("h3",{id:"added-8"},"Added"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First unstable version of the SDK for testing purposes")))}s.isMDXComponent=!0}}]);