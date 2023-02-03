"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3255],{97447:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>b,frontMatter:()=>p,metadata:()=>u,toc:()=>f});var o=i(87462),a=(i(67294),i(3905)),s=i(26389),n=i(94891),c=(i(75190),i(47507)),l=i(24310),r=i(63303),d=(i(75035),i(85162));const p={id:"elections-list",title:"List elections",description:"Get a list of elections summaries.",sidebar_label:"List elections",hide_title:!0,hide_table_of_contents:!0,api:{description:"Get a list of elections summaries.",operationId:"electionsList",tags:["Elections"],responses:{200:{description:"It return a list of organizations id",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{electionId:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"},status:{type:"string",enum:["PROCESS_UNKNOWN","READY","ENDED","CANCELED","PAUSED","RESULTS"]},startDate:{type:"string",format:"date-time",example:"2022-11-17T18:00:57.379551614Z"},endDate:{type:"string",format:"date-time",example:"2022-11-17T18:00:57.379551614Z"},voteCount:{type:"number",example:300},finalResults:{type:"boolean",example:!1}}}}}}}},method:"get",path:"/elections",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"List elections",description:{content:"Get a list of elections summaries.",type:"text/plain"},url:{path:["elections"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},m=void 0,u={unversionedId:"vocdoni-api/elections-list",id:"vocdoni-api/elections-list",title:"List elections",description:"Get a list of elections summaries.",source:"@site/docs/vocdoni-api/elections-list.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/elections-list",permalink:"/vocdoni-api/elections-list",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"elections-list",title:"List elections",description:"Get a list of elections summaries.",sidebar_label:"List elections",hide_title:!0,hide_table_of_contents:!0,api:{description:"Get a list of elections summaries.",operationId:"electionsList",tags:["Elections"],responses:{200:{description:"It return a list of organizations id",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{electionId:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"},status:{type:"string",enum:["PROCESS_UNKNOWN","READY","ENDED","CANCELED","PAUSED","RESULTS"]},startDate:{type:"string",format:"date-time",example:"2022-11-17T18:00:57.379551614Z"},endDate:{type:"string",format:"date-time",example:"2022-11-17T18:00:57.379551614Z"},voteCount:{type:"number",example:300},finalResults:{type:"boolean",example:!1}}}}}}}},method:"get",path:"/elections",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"List elections",description:{content:"Get a list of elections summaries.",type:"text/plain"},url:{path:["elections"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Count election votes",permalink:"/vocdoni-api/election-votes-count"},next:{title:"Create an election",permalink:"/vocdoni-api/create-election"}},h={},f=[{value:"List elections",id:"list-elections",level:2}],v={toc:f};function b(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},v,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"list-elections"},"List elections"),(0,a.kt)("p",null,"Get a list of elections summaries."),(0,a.kt)("div",null,(0,a.kt)(s.Z,{mdxType:"ApiTabs"},(0,a.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"It return a list of organizations id")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(r.Z,{mdxType:"SchemaTabs"},(0,a.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema"),(0,a.kt)("span",{style:{opacity:"0.6"}}," array")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"electionId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`PROCESS_UNKNOWN`, `READY`, `ENDED`, `CANCELED`, `PAUSED`, `RESULTS`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"startDate",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"endDate",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"voteCount",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"finalResults",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(c.Z,{responseExample:'[\n  {\n    "electionId": "0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845",\n    "status": "PROCESS_UNKNOWN",\n    "startDate": "2022-11-17T18:00:57.379551614Z",\n    "endDate": "2022-11-17T18:00:57.379551614Z",\n    "voteCount": 300,\n    "finalResults": false\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);