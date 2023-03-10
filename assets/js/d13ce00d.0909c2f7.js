"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4922],{88621:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>g,frontMatter:()=>u,metadata:()=>h,toc:()=>y});var i=a(87462),n=(a(67294),a(3905)),s=a(26389),o=a(94891),c=a(75190),r=a(47507),l=a(24310),d=a(63303),p=(a(75035),a(85162));const u={id:"elections-by-organization-and-status-paginated",title:"List account elections by status",description:"Default page is 0 if no page specified",sidebar_label:"List account elections by status",hide_title:!0,hide_table_of_contents:!0,api:{description:"Default page is 0 if no page specified",operationId:"electionsByOrganizationAndStatusPaginated",tags:["Accounts"],parameters:[{name:"accountId",in:"path",description:"Account address or publicKey (also known as accountId)",required:!0,schema:{type:"string",example:"0x370372b92514d81a0e3efb8eba9d036ae0877653"}},{name:"status",in:"path",description:"Status of the election",required:!0,schema:{type:"string",enum:["ready","ended","canceled","paused","results"],description:"Election status enum\n",example:"active"}}],responses:{200:{description:"It return a list of elections",content:{"application/json":{schema:{type:"object",properties:{elections:{type:"array",items:{type:"object",properties:{electionId:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"},organizationId:{type:"string",example:"0x370372b92514d81a0e3efb8eba9d036ae0877653"},status:{type:"string",enum:["PROCESS_UNKNOWN","READY","ENDED","CANCELED","PAUSED","RESULTS"]},startDate:{type:"string",format:"date-time",example:"2022-11-17T18:00:57.379551614Z"},endDate:{type:"string",format:"date-time",example:"2022-11-17T18:00:57.379551614Z"},voteCount:{type:"number",example:300},finalResults:{type:"boolean",example:!1}}}}}}}}}},method:"get",path:"/accounts/{accountId}/elections/status/{status}",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"List account elections by status",description:{content:"Default page is 0 if no page specified",type:"text/plain"},url:{path:["accounts",":accountId","elections","status",":status"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Account address or publicKey (also known as accountId)",type:"text/plain"},type:"any",value:"",key:"accountId"},{disabled:!1,description:{content:"(Required) Status of the election",type:"text/plain"},type:"any",value:"",key:"status"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},m=void 0,h={unversionedId:"vocdoni-api/elections-by-organization-and-status-paginated",id:"vocdoni-api/elections-by-organization-and-status-paginated",title:"List account elections by status",description:"Default page is 0 if no page specified",source:"@site/docs/vocdoni-api/elections-by-organization-and-status-paginated.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/elections-by-organization-and-status-paginated",permalink:"/vocdoni-api/elections-by-organization-and-status-paginated",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"elections-by-organization-and-status-paginated",title:"List account elections by status",description:"Default page is 0 if no page specified",sidebar_label:"List account elections by status",hide_title:!0,hide_table_of_contents:!0,api:{description:"Default page is 0 if no page specified",operationId:"electionsByOrganizationAndStatusPaginated",tags:["Accounts"],parameters:[{name:"accountId",in:"path",description:"Account address or publicKey (also known as accountId)",required:!0,schema:{type:"string",example:"0x370372b92514d81a0e3efb8eba9d036ae0877653"}},{name:"status",in:"path",description:"Status of the election",required:!0,schema:{type:"string",enum:["ready","ended","canceled","paused","results"],description:"Election status enum\n",example:"active"}}],responses:{200:{description:"It return a list of elections",content:{"application/json":{schema:{type:"object",properties:{elections:{type:"array",items:{type:"object",properties:{electionId:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"},organizationId:{type:"string",example:"0x370372b92514d81a0e3efb8eba9d036ae0877653"},status:{type:"string",enum:["PROCESS_UNKNOWN","READY","ENDED","CANCELED","PAUSED","RESULTS"]},startDate:{type:"string",format:"date-time",example:"2022-11-17T18:00:57.379551614Z"},endDate:{type:"string",format:"date-time",example:"2022-11-17T18:00:57.379551614Z"},voteCount:{type:"number",example:300},finalResults:{type:"boolean",example:!1}}}}}}}}}},method:"get",path:"/accounts/{accountId}/elections/status/{status}",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"List account elections by status",description:{content:"Default page is 0 if no page specified",type:"text/plain"},url:{path:["accounts",":accountId","elections","status",":status"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Account address or publicKey (also known as accountId)",type:"text/plain"},type:"any",value:"",key:"accountId"},{disabled:!1,description:{content:"(Required) Status of the election",type:"text/plain"},type:"any",value:"",key:"status"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Register an account",permalink:"/vocdoni-api/account-submit"},next:{title:"List paginated account elections by status",permalink:"/vocdoni-api/elections-by-organization-and-status"}},f={},y=[{value:"List account elections by status",id:"list-account-elections-by-status",level:2}],b={toc:y};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"list-account-elections-by-status"},"List account elections by status"),(0,n.kt)("p",null,"Default page is 0 if no page specified"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(c.Z,{className:"paramsItem",param:{name:"accountId",in:"path",description:"Account address or publicKey (also known as accountId)",required:!0,schema:{type:"string",example:"0x370372b92514d81a0e3efb8eba9d036ae0877653"}},mdxType:"ParamsItem"}),(0,n.kt)(c.Z,{className:"paramsItem",param:{name:"status",in:"path",description:"Status of the election",required:!0,schema:{type:"string",enum:["ready","ended","canceled","paused","results"],description:"Election status enum\n",example:"active"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"It return a list of elections")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"elections"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"electionId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"organizationId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`PROCESS_UNKNOWN`, `READY`, `ENDED`, `CANCELED`, `PAUSED`, `RESULTS`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"startDate",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"endDate",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"voteCount",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"finalResults",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(r.Z,{responseExample:'{\n  "elections": [\n    {\n      "electionId": "0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845",\n      "organizationId": "0x370372b92514d81a0e3efb8eba9d036ae0877653",\n      "status": "PROCESS_UNKNOWN",\n      "startDate": "2022-11-17T18:00:57.379551614Z",\n      "endDate": "2022-11-17T18:00:57.379551614Z",\n      "voteCount": 300,\n      "finalResults": false\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);