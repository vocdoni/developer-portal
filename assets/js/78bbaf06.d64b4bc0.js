"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5995],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=o,f=h["".concat(l,".").concat(u)]||h[u]||p[u]||a;return n?i.createElement(f,r(r({ref:t},d),{},{components:n})):i.createElement(f,r({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},66512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const a={},r="Voting Types",s={unversionedId:"sdk/integration-details/voting-types/voting-types",id:"sdk/integration-details/voting-types/voting-types",title:"Voting Types",description:"In this section, we will provide a brief overview of the different types of voting supported by the Vocdoni protocol and",source:"@site/docs/sdk/integration-details/voting-types/voting-types.md",sourceDirName:"sdk/integration-details/voting-types",slug:"/sdk/integration-details/voting-types/",permalink:"/sdk/integration-details/voting-types/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Vocdoni Tokens",permalink:"/sdk/integration-details/vocdoni-tokens"},next:{title:"Single Choice Voting",permalink:"/sdk/integration-details/voting-types/single-choice"}},l={},c=[{value:"Election types",id:"election-types",level:2},{value:"Results interpretation",id:"results-interpretation",level:2},{value:"Linear-Weighted Choice Voting",id:"linear-weighted-choice-voting",level:4},{value:"Ranked-Choice Voting",id:"ranked-choice-voting",level:4},{value:"Multiple Question",id:"multiple-question",level:4}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"voting-types"},"Voting Types"),(0,o.kt)("p",null,"In this section, we will provide a brief overview of the different types of voting supported by the Vocdoni protocol and\nhow it operates."),(0,o.kt)("h2",{id:"election-types"},"Election types"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/protocol/ballot-protocol"},"Vocdoni Ballot protocol")," in its current implementation accommodates multiple ",(0,o.kt)("strong",{parentName:"p"},"elections types"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"voting-types/single-choice"},"Single choice"),", each voter is typically allowed to cast only one vote for their preferred option. This voting system is the only one that ",(0,o.kt)("strong",{parentName:"li"},"supports multiple questions"),". "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"voting-types/ranked"},"Ranked voting"),", also known as preferential voting, is an electoral system where voters rank candidates in order of preference"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"voting-types/approval"},"Approval voting"),", allows voters to approve or disapprove of each of a set of candidates. This is a binary (yes/no) decision with no ranking of candidates. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"voting-types/weighted"},"Weighted voting"),", each voter is assigned a specific weight or value that reflects their relative influence or importance in the decision-making process."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"voting-types/quadratic"},"Quadratic voting"),", voters can cast multiple votes for issues they prioritize, but the cost of casting\nadditional votes on the same issue rises exponentially.")),(0,o.kt)("p",null,"The configuration of these election types happens at the time of election creation using the SDK. Refer to the respective\ndocumentation for the parameter requirements for each election type."),(0,o.kt)("p",null,"These voting types describe different sets of behavior that can be generated with the set of election parameters. A comprehensive explanation of the parameters used in the ballot protocol can be found ",(0,o.kt)("a",{parentName:"p",href:"/protocol/ballot-protocol"},"here"),"."),(0,o.kt)("h2",{id:"results-interpretation"},"Results interpretation"),(0,o.kt)("p",null,"The structure for individual ballots and the corresponding results can vary depending on the election parameters. For example, a vote envelope ",(0,o.kt)("inlineCode",{parentName:"p"},"[0, 2, 1]")," could mean one of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"0 points for the first candidate, 2 points for the second candidate, 1 point for the third candidate"),(0,o.kt)("li",{parentName:"ul"},"first-choice selection for the first candidate, third-choice for the second candidate, and second-choice for the third"),(0,o.kt)("li",{parentName:"ul"},"choice of option ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," for the first question, option ",(0,o.kt)("inlineCode",{parentName:"li"},"2")," for the second question, and option ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," for the third.")),(0,o.kt)("p",null,"The interpretation of votes is done at the protocol-level, according to the election parameters. The results are stored on the Vochain as a bi-dimensional array. Essentially, the ballot protocol is a system that transforms a unidimensional array (a vote, e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"[1,4]"),") into a bi-dimensional array of results (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"[[2,5], [3,8]]"),")."),(0,o.kt)("p",null,"The interpretation of this matrix of results is done on the client side, which receives the raw results from the SDK. The SDK also provides metadata about the election to facilitate understanding of the results. More details on interpreting results can be found ",(0,o.kt)("a",{parentName:"p",href:"/protocol/ballot-protocol#vocdoni-results-interpretation"},"here"),"."),(0,o.kt)("p",null,"Here's a simple example to demonstrate how the same result array can be interpreted in different ways, depending on the election type:"),(0,o.kt)("h4",{id:"linear-weighted-choice-voting"},"Linear-Weighted Choice Voting"),(0,o.kt)("p",null,"Consider a single-choice question where three candidates are ranked by voters, each receiving a number of 'points' according to each voter's ranking. This is an example of ",(0,o.kt)("inlineCode",{parentName:"p"},"linear-weighted choice"),".  A results array with 10 votes might look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[ \n    [4, 6, 0], \n    [2, 4, 4], \n    [4, 0, 6] \n]\n")),(0,o.kt)("p",null,"Each row of this matrix represents a single candidate, and each column represents a chosen allocation of points. The numbers represent the total number of votes for that candidate/points combination."),(0,o.kt)("p",null,"In this scenario:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The first candidate receives 4 0-point votes and 6 1-point votes"),(0,o.kt)("li",{parentName:"ul"},"The second candidate receives 2 0-point, 4 1-point, and 4 2-point votes"),(0,o.kt)("li",{parentName:"ul"},"The third candidate receives 4 0-point votes and 6 2-point votes")),(0,o.kt)("p",null,'We can use this results matrix to calculate the total weighted sum for each candidate: the first candidate receives 6 points, the second candidate receives 12, and the third candidate receives 12. Candidates 2 and 3 tie. This results interpretation is "weighted," meaning each choice represents a quantified amount of preference, and we could aggregate the results into a single array of allocated points without losing any information:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[6, 12, 12]\n")),(0,o.kt)("admonition",{title:"aggregated results",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For all elections where ",(0,o.kt)("inlineCode",{parentName:"p"},"maxValue")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),", it is assumed that the election uses a weighted results system (like in this example). The aggregated results (",(0,o.kt)("inlineCode",{parentName:"p"},"[6, 12, 12]"),") are calculated on the indexer and reported as the official results.")),(0,o.kt)("h4",{id:"ranked-choice-voting"},"Ranked-Choice Voting"),(0,o.kt)("p",null,"Consider a single-choice question where three candidates are ranked by preference, and if no candidate receives more than 50% of the first-choice votes, second-choice votes are considered (a runoff election). This is one example of a ",(0,o.kt)("inlineCode",{parentName:"p"},"ranked voting")," scheme.  The results array could look identical to the one above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[ \n    [4, 6, 0], \n    [2, 4, 4], \n    [4, 0, 6] \n]\n")),(0,o.kt)("p",null,"Each row of this matrix represents a single candidate, and each column represents the choice (first, second, third). The numbers represent the total number of votes for that candidate/choice combination."),(0,o.kt)("p",null,"In this scenario:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The first candidate receives 4 first-choice and 6 second-choice votes"),(0,o.kt)("li",{parentName:"ul"},"The second candidate receives 2 first-choice, 4 second-choice, and 4 third-choice votes"),(0,o.kt)("li",{parentName:"ul"},"The third candidate receives 6 first-choice and 4 third-choice votes")),(0,o.kt)("p",null,"The main difference between this example in the last is that each vote count has to be treated as a discrete piece of data rather than a value that can be combined arithmetically with others. This is because this election has a complex method for calculating the winner where first and second choices have different meanings rather than different amounts of the same meaning. The entire results matrix is needed in order to calculate a result. "),(0,o.kt)("admonition",{title:"ranked-choice",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For ranked-choice, the ",(0,o.kt)("inlineCode",{parentName:"p"},"maxValue")," parameter cannot equal zero to signify that values are discrete options, not weighted points.")),(0,o.kt)("p",null,"In this case, the first and third candidates tie with 40% of the vote each when only first-choice votes are considered. Thus we must consider a runoff using second-choice votes: the first candidate gets 60% of the second-choice votes, and the third candidate gets 0%. The first candidate wins the election."),(0,o.kt)("h4",{id:"multiple-question"},"Multiple Question"),(0,o.kt)("p",null,"Now, let's consider an election with three questions, where each question has three options. Voters must select one of the three options for each question. This is a multiple-question, multiple-choice election."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[ \n    [4, 6, 0], \n    [2, 4, 4], \n    [4, 0, 6] \n]\n")),(0,o.kt)("p",null,"Each row of this matrix represents a separate question, and each column represents the choice (first, second, third). The numbers represent the total number of votes for that question/choice combination."),(0,o.kt)("p",null,"In this scenario:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For the first question, candidate 0 receives 4 votes and candidate 1 receives 6 (candidate 1 wins)"),(0,o.kt)("li",{parentName:"ul"},"For the second question, candidate 0 receives 2 votes, candidate 1 receives 4, and candidate 2 receives 4 (candidates 1 and 2 tie)"),(0,o.kt)("li",{parentName:"ul"},"For the third question, candidate 0 receives 4 votes and candidate 2 receives 6 (candidate 2 wins)")),(0,o.kt)("p",null,"You can see how the same results matrix could represent a wide set of interpretations, and it is crucial to pay attention to the election parameters and original design of the election when displaying the results. "))}p.isMDXComponent=!0}}]);