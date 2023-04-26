"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7035],{3416:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>s,toc:()=>k});var n=a(87462),r=(a(67294),a(3905));const l={custom_edit_url:null},i=void 0,s={unversionedId:"sdk/VoteAPI",id:"sdk/VoteAPI",title:"VoteAPI",description:"Methods",source:"@site/docs/sdk/VoteAPI.mdx",sourceDirName:"sdk",slug:"/sdk/VoteAPI",permalink:"/sdk/VoteAPI",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"sdk",previous:{title:"FileAPI",permalink:"/sdk/FileAPI"},next:{title:"WalletAPI",permalink:"/sdk/WalletAPI"}},d={},k=[{value:"constructor",id:"constructor",level:2},{value:"Methods",id:"methods",level:2},{value:"submit",id:"submit",level:3},{value:"info",id:"info",level:3},{value:"verify",id:"verify",level:3}],m={toc:k};function o(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class VoteAPI\n")),(0,r.kt)("div",null),(0,r.kt)("div",{className:"container"},(0,r.kt)("div",{className:"row mb-2"},(0,r.kt)("div",{className:"col col--12"},(0,r.kt)("strong",null,"Methods"))),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col col--12"},(0,r.kt)("a",{href:"#submit"},"submit"),(0,r.kt)("span",{className:"badge badge--info margin-left--sm"},"static"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#info"},"info"),(0,r.kt)("span",{className:"badge badge--info margin-left--sm"},"static"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#verify"},"verify"),(0,r.kt)("span",{className:"badge badge--info margin-left--sm"},"static")))),(0,r.kt)("h2",{id:"constructor"},"constructor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"new VoteAPI()\n")),(0,r.kt)("div",null),(0,r.kt)("p",null,"Cannot be constructed."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"submit"},"submit"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--info"},"static")),(0,r.kt)("p",null,"Voting"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","IVoteSubmitResponse",">"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"url"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"API endpoint URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"payload"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The base64 encoded vote transaction")))),(0,r.kt)("h3",{id:"info"},"info"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--info"},"static")),(0,r.kt)("p",null,"Vote info"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","IVoteInfoResponse",">"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"url"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"API endpoint URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"voteId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The identifier of the vote")))),(0,r.kt)("h3",{id:"verify"},"verify"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--info"},"static")),(0,r.kt)("p",null,"Verify vote. A vote exists in a process."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","boolean",">"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Return true if response has status 200")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"url"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"API endpoint URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"processId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The process identifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"voteId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The identifier of the vote")))))}o.isMDXComponent=!0}}]);