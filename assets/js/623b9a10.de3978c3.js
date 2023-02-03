"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1413],{95144:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>v,frontMatter:()=>u,metadata:()=>h,toc:()=>b});var n=a(87462),o=(a(67294),a(3905)),s=a(26389),i=a(94891),r=a(75190),c=a(47507),d=a(24310),l=a(63303),p=(a(75035),a(85162));const u={id:"account-transfers",title:"Get account transfers",description:"Get account token transfers. A transfer is a token transference from one account to other (excepting the burn",sidebar_label:"Get account transfers",hide_title:!0,hide_table_of_contents:!0,api:{description:"Get account token transfers. A transfer is a token transference from one account to other (excepting the burn \naddress).",operationId:"accountTransfers",tags:["Accounts"],parameters:[{name:"accountId",in:"path",description:"Account address or publicKey (also known as accountId)",required:!0,schema:{type:"string",example:"0x370372b92514d81a0e3efb8eba9d036ae0877653"}}],responses:{200:{description:"Return account data",content:{"application/json":{schema:{type:"object",properties:{amount:{type:"integer",format:"int32",example:1},from:{type:"string",example:"0x370372b92514d81a0e3efb8eba9d036ae0877653"},height:{type:"integer",format:"int32",example:64924},txHash:{type:"string",example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"},timestamp:{type:"string",format:"date-time",example:"2022-11-17T18:00:57.379551614Z"},to:{type:"string",example:"0x370372b92514d81a0e3efb8eba9d036ae0877653"}}}}}}},method:"get",path:"/accounts/{accountId}/transfers/",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Get account transfers",description:{content:"Get account token transfers. A transfer is a token transference from one account to other (excepting the burn \naddress).",type:"text/plain"},url:{path:["accounts",":accountId","transfers",""],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Account address or publicKey (also known as accountId)",type:"text/plain"},type:"any",value:"",key:"accountId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},m=void 0,h={unversionedId:"vocdoni-api/account-transfers",id:"vocdoni-api/account-transfers",title:"Get account transfers",description:"Get account token transfers. A transfer is a token transference from one account to other (excepting the burn",source:"@site/docs/vocdoni-api/account-transfers.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/account-transfers",permalink:"/vocdoni-api/account-transfers",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"account-transfers",title:"Get account transfers",description:"Get account token transfers. A transfer is a token transference from one account to other (excepting the burn",sidebar_label:"Get account transfers",hide_title:!0,hide_table_of_contents:!0,api:{description:"Get account token transfers. A transfer is a token transference from one account to other (excepting the burn \naddress).",operationId:"accountTransfers",tags:["Accounts"],parameters:[{name:"accountId",in:"path",description:"Account address or publicKey (also known as accountId)",required:!0,schema:{type:"string",example:"0x370372b92514d81a0e3efb8eba9d036ae0877653"}}],responses:{200:{description:"Return account data",content:{"application/json":{schema:{type:"object",properties:{amount:{type:"integer",format:"int32",example:1},from:{type:"string",example:"0x370372b92514d81a0e3efb8eba9d036ae0877653"},height:{type:"integer",format:"int32",example:64924},txHash:{type:"string",example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"},timestamp:{type:"string",format:"date-time",example:"2022-11-17T18:00:57.379551614Z"},to:{type:"string",example:"0x370372b92514d81a0e3efb8eba9d036ae0877653"}}}}}}},method:"get",path:"/accounts/{accountId}/transfers/",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Get account transfers",description:{content:"Get account token transfers. A transfer is a token transference from one account to other (excepting the burn \naddress).",type:"text/plain"},url:{path:["accounts",":accountId","transfers",""],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Account address or publicKey (also known as accountId)",type:"text/plain"},type:"any",value:"",key:"accountId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Count account elections",permalink:"/vocdoni-api/elections-by-organization-count"},next:{title:"Get account transfers",permalink:"/vocdoni-api/account-transfers-paginated"}},f={},b=[{value:"Get account transfers",id:"get-account-transfers",level:2}],g={toc:b};function v(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"get-account-transfers"},"Get account transfers"),(0,o.kt)("p",null,"Get account token transfers. A transfer is a token transference from one account to other (excepting the burn\naddress)."),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(r.Z,{className:"paramsItem",param:{name:"accountId",in:"path",description:"Account address or publicKey (also known as accountId)",required:!0,schema:{type:"string",example:"0x370372b92514d81a0e3efb8eba9d036ae0877653"}},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(s.Z,{mdxType:"ApiTabs"},(0,o.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Return account data")),(0,o.kt)("div",null,(0,o.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"SchemaTabs"},(0,o.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"amount",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"from",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"height",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"txHash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"timestamp",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"to",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(c.Z,{responseExample:'{\n  "amount": 1,\n  "from": "0x370372b92514d81a0e3efb8eba9d036ae0877653",\n  "height": 64924,\n  "txHash": "75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad",\n  "timestamp": "2022-11-17T18:00:57.379551614Z",\n  "to": "0x370372b92514d81a0e3efb8eba9d036ae0877653"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);