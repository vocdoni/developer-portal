"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3416],{52414:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>v,frontMatter:()=>u,metadata:()=>p,toc:()=>f});var a=s(87462),n=(s(67294),s(3905)),o=s(26389),i=s(94891),r=(s(75190),s(47507)),d=s(24310),c=s(63303),l=(s(75035),s(85162));const u={id:"treasurer-address",title:"Treasurer address",description:"Get the treasurer address.",sidebar_label:"Treasurer address",hide_title:!0,hide_table_of_contents:!0,api:{description:"Get the treasurer address. \nThe treasurer is a new authority entity identified by its Ethereum address and is the only one that can Mint new\ntokens.",operationId:"treasurerAddress",tags:["Accounts"],responses:{200:{description:"Treasurer address",content:{"application/json":{schema:{type:"object",properties:{address:{type:"string",example:"0x1ABC7154748D1CE5144478CDEB574AE244B939B5."}}}}}}},method:"get",path:"/accounts/treasurer",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Treasurer address",description:{content:"Get the treasurer address. \nThe treasurer is a new authority entity identified by its Ethereum address and is the only one that can Mint new\ntokens.",type:"text/plain"},url:{path:["accounts","treasurer"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},h=void 0,p={unversionedId:"vocdoni-api/treasurer-address",id:"vocdoni-api/treasurer-address",title:"Treasurer address",description:"Get the treasurer address.",source:"@site/docs/vocdoni-api/treasurer-address.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/treasurer-address",permalink:"/vocdoni-api/treasurer-address",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"treasurer-address",title:"Treasurer address",description:"Get the treasurer address.",sidebar_label:"Treasurer address",hide_title:!0,hide_table_of_contents:!0,api:{description:"Get the treasurer address. \nThe treasurer is a new authority entity identified by its Ethereum address and is the only one that can Mint new\ntokens.",operationId:"treasurerAddress",tags:["Accounts"],responses:{200:{description:"Treasurer address",content:{"application/json":{schema:{type:"object",properties:{address:{type:"string",example:"0x1ABC7154748D1CE5144478CDEB574AE244B939B5."}}}}}}},method:"get",path:"/accounts/treasurer",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Treasurer address",description:{content:"Get the treasurer address. \nThe treasurer is a new authority entity identified by its Ethereum address and is the only one that can Mint new\ntokens.",type:"text/plain"},url:{path:["accounts","treasurer"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Count account elections",permalink:"/vocdoni-api/elections-by-organization-count"},next:{title:"Elections",permalink:"/vocdoni-api/elections"}},m={},f=[{value:"Treasurer address",id:"treasurer-address",level:2}],y={toc:f};function v(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},y,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"treasurer-address"},"Treasurer address"),(0,n.kt)("p",null,"Get the treasurer address.\nThe treasurer is a new authority entity identified by its Ethereum address and is the only one that can Mint new\ntokens."),(0,n.kt)("div",null,(0,n.kt)(o.Z,{mdxType:"ApiTabs"},(0,n.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Treasurer address")),(0,n.kt)("div",null,(0,n.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{mdxType:"SchemaTabs"},(0,n.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"address",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(r.Z,{responseExample:'{\n  "address": "0x1ABC7154748D1CE5144478CDEB574AE244B939B5."\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);