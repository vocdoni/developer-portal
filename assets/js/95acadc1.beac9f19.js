"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7052],{81219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>h,default:()=>b,frontMatter:()=>p,metadata:()=>m,toc:()=>f});var a=n(87462),i=(n(67294),n(3905)),o=n(26389),s=n(94891),r=(n(75190),n(47507)),c=n(24310),l=n(63303),d=(n(75035),n(85162));const p={id:"transactions-list",title:"List transactions",description:"Get paginated list of transactions. To get transaction information use",sidebar_label:"List transactions",hide_title:!0,hide_table_of_contents:!0,api:{description:"Get paginated list of transactions. To get transaction information use \n[/chain/transaction/{blockHeight}/{txIndex}](transaction-by-block-index). Where transactionIndex is the index of\nthe transaction on the containing block.",operationId:"transactionsList",tags:["Chain"],responses:{200:{description:"It return a list of transaction reference",content:{"application/json":{schema:{type:"object",properties:{transactions:{type:"array",items:{type:"object",properties:{transactionNumber:{type:"integer",format:"int32",example:944},transactionHash:{type:"string",example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"},blockHeight:{type:"integer",format:"int32",example:64924},transactionIndex:{type:"integer",format:"int32",example:0},transactionType:{type:"string",enum:["vote","newProcess","admin","setProcess","registerKey","mintTokens","sendTokens","setTransactionCosts","setAccount","collectFaucet","setKeykeeper"]}}}}}}}}}},method:"get",path:"/chain/transactions",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"List transactions",description:{content:"Get paginated list of transactions. To get transaction information use \n[/chain/transaction/{blockHeight}/{txIndex}](transaction-by-block-index). Where transactionIndex is the index of\nthe transaction on the containing block.",type:"text/plain"},url:{path:["chain","transactions"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},h=void 0,m={unversionedId:"vocdoni-api/transactions-list",id:"vocdoni-api/transactions-list",title:"List transactions",description:"Get paginated list of transactions. To get transaction information use",source:"@site/docs/vocdoni-api/transactions-list.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/transactions-list",permalink:"/vocdoni-api/transactions-list",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"transactions-list",title:"List transactions",description:"Get paginated list of transactions. To get transaction information use",sidebar_label:"List transactions",hide_title:!0,hide_table_of_contents:!0,api:{description:"Get paginated list of transactions. To get transaction information use \n[/chain/transaction/{blockHeight}/{txIndex}](transaction-by-block-index). Where transactionIndex is the index of\nthe transaction on the containing block.",operationId:"transactionsList",tags:["Chain"],responses:{200:{description:"It return a list of transaction reference",content:{"application/json":{schema:{type:"object",properties:{transactions:{type:"array",items:{type:"object",properties:{transactionNumber:{type:"integer",format:"int32",example:944},transactionHash:{type:"string",example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"},blockHeight:{type:"integer",format:"int32",example:64924},transactionIndex:{type:"integer",format:"int32",example:0},transactionType:{type:"string",enum:["vote","newProcess","admin","setProcess","registerKey","mintTokens","sendTokens","setTransactionCosts","setAccount","collectFaucet","setKeykeeper"]}}}}}}}}}},method:"get",path:"/chain/transactions",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"List transactions",description:{content:"Get paginated list of transactions. To get transaction information use \n[/chain/transaction/{blockHeight}/{txIndex}](transaction-by-block-index). Where transactionIndex is the index of\nthe transaction on the containing block.",type:"text/plain"},url:{path:["chain","transactions"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Submit transaction",permalink:"/vocdoni-api/transaction-submit"},next:{title:"Paginated transactions list",permalink:"/vocdoni-api/transactions-list-paginated"}},u={},f=[{value:"List transactions",id:"list-transactions",level:2}],g={toc:f};function b(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"list-transactions"},"List transactions"),(0,i.kt)("p",null,"Get paginated list of transactions. To get transaction information use\n",(0,i.kt)("a",{parentName:"p",href:"transaction-by-block-index"},"/chain/transaction/{blockHeight}/{txIndex}"),". Where transactionIndex is the index of\nthe transaction on the containing block."),(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"It return a list of transaction reference")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"transactions"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"transactionNumber",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"transactionHash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"blockHeight",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"transactionIndex",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"transactionType",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`vote`, `newProcess`, `admin`, `setProcess`, `registerKey`, `mintTokens`, `sendTokens`, `setTransactionCosts`, `setAccount`, `collectFaucet`, `setKeykeeper`]",defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:'{\n  "transactions": [\n    {\n      "transactionNumber": 944,\n      "transactionHash": "75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad",\n      "blockHeight": 64924,\n      "transactionIndex": 0,\n      "transactionType": "vote"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);