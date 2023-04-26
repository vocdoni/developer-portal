"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3300],{63388:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={custom_edit_url:null},i=void 0,c={unversionedId:"sdk/AccountAPI",id:"sdk/AccountAPI",title:"AccountAPI",description:"Methods",source:"@site/docs/sdk/AccountAPI.mdx",sourceDirName:"sdk",slug:"/sdk/AccountAPI",permalink:"/sdk/AccountAPI",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"sdk",previous:{title:"Vocdoni SDK",permalink:"/sdk/"},next:{title:"API",permalink:"/sdk/API"}},s={},d=[{value:"constructor",id:"constructor",level:2},{value:"Methods",id:"methods",level:2},{value:"info",id:"info",level:3},{value:"setInfo",id:"setInfo",level:3},{value:"transfersList",id:"transfersList",level:3},{value:"electionsList",id:"electionsList",level:3}],k={toc:d};function p(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class AccountAPI\n")),(0,r.kt)("div",null),(0,r.kt)("div",{className:"container"},(0,r.kt)("div",{className:"row mb-2"},(0,r.kt)("div",{className:"col col--12"},(0,r.kt)("strong",null,"Methods"))),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col col--12"},(0,r.kt)("a",{href:"#info"},"info"),(0,r.kt)("span",{className:"badge badge--info margin-left--sm"},"static"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#setInfo"},"setInfo"),(0,r.kt)("span",{className:"badge badge--info margin-left--sm"},"static"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#transfersList"},"transfersList"),(0,r.kt)("span",{className:"badge badge--info margin-left--sm"},"static"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#electionsList"},"electionsList"),(0,r.kt)("span",{className:"badge badge--info margin-left--sm"},"static")))),(0,r.kt)("h2",{id:"constructor"},"constructor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"new AccountAPI()\n")),(0,r.kt)("div",null),(0,r.kt)("p",null,"Cannot be constructed."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"info"},"info"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--info"},"static")),(0,r.kt)("p",null,"Fetches an Account information"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","IAccountInfoResponse",">"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"url"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"API endpoint URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"address"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The one we want the info from")))),(0,r.kt)("h3",{id:"setInfo"},"setInfo"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--info"},"static")),(0,r.kt)("p",null,"Sets Account information"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","IAccountSetInfoResponse",">"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"url"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"API endpoint URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"payload"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The set information info raw payload to be submitted to the chain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"metadata"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The base64 encoded metadata JSON object")))),(0,r.kt)("h3",{id:"transfersList"},"transfersList"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--info"},"static")),(0,r.kt)("p",null,"Returns paginated list of transfers for a specific account"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","IAccountTransfersResponse",">"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"url"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"API endpoint URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"accountId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"accountId to get transfers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"page"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The page number")))),(0,r.kt)("h3",{id:"electionsList"},"electionsList"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--info"},"static")),(0,r.kt)("p",null,"Returns paginated list of elections for a specific account"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","IElectionListResponse",">"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"url"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"API endpoint URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"accountId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"accountId to get elections")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"page"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The page number")))))}p.isMDXComponent=!0}}]);