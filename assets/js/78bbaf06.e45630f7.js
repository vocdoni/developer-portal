"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5995],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={},a="Voting Types",l={unversionedId:"sdk/integration-details/voting-types/voting-types",id:"sdk/integration-details/voting-types/voting-types",title:"Voting Types",description:"In this section, we will provide a brief overview of the different types of voting supported by the Vocdoni protocol and",source:"@site/docs/sdk/integration-details/voting-types/voting-types.md",sourceDirName:"sdk/integration-details/voting-types",slug:"/sdk/integration-details/voting-types/",permalink:"/sdk/integration-details/voting-types/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Vocdoni Tokens",permalink:"/sdk/integration-details/vocdoni-tokens"},next:{title:"Single Choice Voting",permalink:"/sdk/integration-details/voting-types/single-choice"}},s={},p=[{value:"Election types",id:"election-types",level:2},{value:"Results interpretation",id:"results-interpretation",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"voting-types"},"Voting Types"),(0,r.kt)("p",null,"In this section, we will provide a brief overview of the different types of voting supported by the Vocdoni protocol and\nhow it operates."),(0,r.kt)("h2",{id:"election-types"},"Election types"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/protocol/ballot-protocol"},"Vocdoni Ballot protocol")," in its current implementation accommodates multiple ",(0,r.kt)("strong",{parentName:"p"},"elections types"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"voting-types/single-choice"},"Single choice"),", each voter is typically allowed to cast only one vote for their preferred option. This\nvoting system is the only one that ",(0,r.kt)("strong",{parentName:"li"},"supports multiple questions"),". "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"voting-types/ranked"},"Ranked voting"),", also known as preferential voting, is an electoral system where voters rank candidates in order of preference"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"voting-types/approval"},"Approval voting"),", or multiple choice, here the voters are allowed to indicate their support for multiple\ncandidates or options."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"voting-types/weighted"},"Weighted voting"),", each voter is assigned a specific weight or value that reflects their relative influence or\nimportance in the decision-making process."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"voting-types/quadratic"},"Quadratic voting"),", voters can cast multiple votes for issues they prioritize, but the cost of casting\nadditional votes on the same issue rises exponentially.")),(0,r.kt)("p",null,"The configuration of these election types happens at the time of election creation using the SDK. Refer to the respective\ndocumentation for the parameter requirements for each election type."),(0,r.kt)("p",null,"A comprehensive explanation of the parameters used in the ballot protocol can be found ",(0,r.kt)("a",{parentName:"p",href:"/protocol/ballot-protocol"},"here"),"."),(0,r.kt)("h2",{id:"results-interpretation"},"Results interpretation"),(0,r.kt)("p",null,"The results are stored on the Vochain as a bi-dimensional array. Essentially, the ballot protocol is a system that\ntransforms a unidimensional array (a vote, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"[1,4]"),") into a bi-dimensional array of results (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"[[2,5]]"),")."),(0,r.kt)("p",null,"The interpretation of results is done on the user side, which receives the results from the SDK. The SDK provides\nmetadata about the election to facilitate understanding of the results. More details on interpreting results can be found ",(0,r.kt)("a",{parentName:"p",href:"/protocol/ballot-protocol#vocdoni-results-interpretation"},"here"),"."),(0,r.kt)("p",null,"Here's a simple example to demonstrate how the result array can be interpreted in different ways, depending on the\nelection type:"),(0,r.kt)("p",null,"Consider a question where 2 candidates are ranked by preference, which is an example of ",(0,r.kt)("inlineCode",{parentName:"p"},"ranked voting"),".  The results\narray might look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[ \n    [0, 0, 10], \n    [0, 10, 0], \n    [10, 0, 0] \n]\n")),(0,r.kt)("p",null,"In this scenario:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"10 voters select the first candidate as third option"),(0,r.kt)("li",{parentName:"ul"},"10 voters select the second candidate as second option"),(0,r.kt)("li",{parentName:"ul"},"10 voters select the third candidate as first option")),(0,r.kt)("p",null,'Now, let\'s examine another election type that can produce the same results array. For a question like "choose your 3\nfavorite colors out of 2", which is an example of ',(0,r.kt)("inlineCode",{parentName:"p"},"approval voting"),", the results array may look like that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[ \n    [10, 0], \n    [0, 10], \n    [0, 10] \n]\n")),(0,r.kt)("p",null,"On this case, the results interpretation may vary:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"10 users give 0 points to first option"),(0,r.kt)("li",{parentName:"ul"},"10 users give 1 point to second and third options")),(0,r.kt)("p",null,"The examples above represent two methods for interpreting the results array. Additional examples are available for\ndifferent voting type result interpretations."),(0,r.kt)("admonition",{title:"Weighted results are calculated on the indexer",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In a weighted election, the Vochain stores the envelope without calculating the weight of each voter. However, when\nretrieving the results using the SDK, you will see the weights applied. The application of these weights is performed\nby the vocdoni-node indexer, which calculates the weights for you."),(0,r.kt)("p",{parentName:"admonition"},"The weights of each vote are stored in the envelope, which is saved on the Vochain.")))}d.isMDXComponent=!0}}]);