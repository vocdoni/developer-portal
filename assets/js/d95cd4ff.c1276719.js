"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4019],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const a={sidebar_position:4,slug:"approval"},r="Approval Voting",l={unversionedId:"sdk/integration-details/voting-types/approval",id:"sdk/integration-details/voting-types/approval",title:"Approval Voting",description:"Approval voting is a voting system where voters indicate their support for multiple candidates or options on the ballot in the form of a binary (yes/no) decision. Instead of selecting just one preferred choice, voters can approve or disapprove of each candidate.",source:"@site/docs/sdk/integration-details/voting-types/approval.md",sourceDirName:"sdk/integration-details/voting-types",slug:"/sdk/integration-details/voting-types/approval",permalink:"/sdk/integration-details/voting-types/approval",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"approval"},sidebar:"defaultSidebar",previous:{title:"Ranked Voting",permalink:"/sdk/integration-details/voting-types/ranked"},next:{title:"Weighted voting",permalink:"/sdk/integration-details/voting-types/weighted"}},s={},p=[{value:"Setting up the election",id:"setting-up-the-election",level:2},{value:"Casting a vote",id:"casting-a-vote",level:2},{value:"Results interpretation",id:"results-interpretation",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"approval-voting"},"Approval Voting"),(0,i.kt)("p",null,"Approval voting is a voting system where voters indicate their support for multiple candidates or options on the ballot in the form of a binary (yes/no) decision. Instead of selecting just one preferred choice, voters can approve or disapprove of each candidate."),(0,i.kt)("p",null,"Approval voting does not involve ranking or prioritizing candidates; it simply allows voters to express their approval\nfor multiple choices. This system aims to provide a more nuanced representation of voter preferences and can encourage\ncandidates to appeal to a broader range of voters."),(0,i.kt)("p",null,"For example: select the colors you like from a list of 4."),(0,i.kt)("p",null,"See:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vocdoni/vocdoni-sdk/blob/main/examples/typescript/src/approval.ts"},"Complete example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/protocol/ballot-protocol#multiple-choice"},"Ballot protocol implementation"))),(0,i.kt)("h2",{id:"setting-up-the-election"},"Setting up the election"),(0,i.kt)("p",null,"The configuration of the vote type for the election should be set as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const election_opts: IVoteType = {\n    uniqueChoices: false,\n    costFromWeight: false,\n    maxCount: 4, // Correspond to the number of choices of the given question.\n    maxValue: 1, // Determines the maximum value that can be assigned to a single choice.\n    maxTotalCost: 4, // Set the maximum number of choices a user can select. \n}\n")),(0,i.kt)("p",null,"In this election type, a voter can cast a vote for option, hence ",(0,i.kt)("inlineCode",{parentName:"p"},"maxValue")," must be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),". Also, the ",(0,i.kt)("inlineCode",{parentName:"p"},"maxTotalCost"),"\nis used to define the maximum number of selectable choices."),(0,i.kt)("admonition",{title:"Multiple questions not supported",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"This election type not support multiple questions"),": the current Vocdoni implementation restricts this kind of elections to a single question. To create an election with multiple questions check ",(0,i.kt)("a",{parentName:"p",href:"/protocol/ballot-protocol#multiquestion"},"multi question election"))),(0,i.kt)("h2",{id:"casting-a-vote"},"Casting a vote"),(0,i.kt)("p",null,"To cast a vote, use the method below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"client.submitVote(new Vote([0, 1, 0, 1]));\n")),(0,i.kt)("p",null,"Each entry in the array corresponds to a selected choice in the election, with the value assigned to each entry set to 1,\nas per ",(0,i.kt)("inlineCode",{parentName:"p"},"maxValue"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"maxTotalCost")," defines the maximum number of choices a voter can select. The array's length should\nmatch the total number of choices in the election (",(0,i.kt)("inlineCode",{parentName:"p"},"maxCount"),")."),(0,i.kt)("h2",{id:"results-interpretation"},"Results interpretation"),(0,i.kt)("p",null,"Assume a scenario where ten voters cast identical votes, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"[0, 1, 0, 1]"),"."),(0,i.kt)("p",null,"The election results would be represented as a two-dimensional array:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[ \n    [ '10', '0' ], \n    [ '0', '10' ], \n    [ '10', '0' ], \n    [ '0', '10' ] \n]\n")),(0,i.kt)("p",null,"Each position in the outer array corresponds to the available choices, and each position within the inner arrays\nsignifies the number of voters who selected or did not select the corresponding choice. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"[10, 0]")," indicates\nten users did not select the choice, whereas ",(0,i.kt)("inlineCode",{parentName:"p"},"[0, 10]")," means that ten users voted for the choice. So:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For choice ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),", all 10 voters assigned it ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," points,"),(0,i.kt)("li",{parentName:"ul"},"For choice ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),", all 10 voters assigned it ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," point,"),(0,i.kt)("li",{parentName:"ul"},"For choice ",(0,i.kt)("inlineCode",{parentName:"li"},"2"),", all 10 voters assigned it ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," points, and"),(0,i.kt)("li",{parentName:"ul"},"For choice ",(0,i.kt)("inlineCode",{parentName:"li"},"3"),", all 10 voters assigned it ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," point.")),(0,i.kt)("p",null,"Remember, this interpretation assumes that all voters have used the same voting pattern."))}u.isMDXComponent=!0}}]);