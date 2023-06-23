"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9727],{76876:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>y,frontMatter:()=>d,metadata:()=>u,toc:()=>f});var i=o(87462),a=(o(67294),o(3905)),n=o(26389),s=o(94891),c=(o(75190),o(47507)),r=o(24310),l=o(63303),p=(o(75035),o(85162));const d={id:"election-price",title:"Calculate election price",description:"Election Price API endpoint for calculating the price of an election.",sidebar_label:"Calculate election price",hide_title:!0,hide_table_of_contents:!0,api:{description:"Election Price API endpoint for calculating the price of an election.\n\nIt takes a JSON object with the 5 election parameters that are required for calculating the price.",operationId:"electionPrice",tags:["Elections"],requestBody:{content:{"application/json":{schema:{type:"object",properties:{maxCensusSize:{type:"number",format:"int32",example:5e3},electionBlocks:{type:"number",format:"int32",example:158},encryptedVotes:{type:"boolean",example:!1},anonymousVotes:{type:"boolean",example:!1},maxVoteOverwrite:{type:"number",format:"int32",example:1}}}}}},responses:{200:{description:"It return a list of organizations id",content:{"application/json":{schema:{type:"object",properties:{price:{type:"number",format:"int32",example:61}}}}}}},method:"post",path:"/elections/price",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{maxCensusSize:5e3,electionBlocks:158,encryptedVotes:!1,anonymousVotes:!1,maxVoteOverwrite:1},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote.\n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go"},postman:{name:"Calculate election price",description:{content:"Election Price API endpoint for calculating the price of an election.\n\nIt takes a JSON object with the 5 election parameters that are required for calculating the price.",type:"text/plain"},url:{path:["elections","price"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},m=void 0,u={unversionedId:"vocdoni-api/election-price",id:"vocdoni-api/election-price",title:"Calculate election price",description:"Election Price API endpoint for calculating the price of an election.",source:"@site/docs/vocdoni-api/election-price.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/election-price",permalink:"/vocdoni-api/election-price",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"election-price",title:"Calculate election price",description:"Election Price API endpoint for calculating the price of an election.",sidebar_label:"Calculate election price",hide_title:!0,hide_table_of_contents:!0,api:{description:"Election Price API endpoint for calculating the price of an election.\n\nIt takes a JSON object with the 5 election parameters that are required for calculating the price.",operationId:"electionPrice",tags:["Elections"],requestBody:{content:{"application/json":{schema:{type:"object",properties:{maxCensusSize:{type:"number",format:"int32",example:5e3},electionBlocks:{type:"number",format:"int32",example:158},encryptedVotes:{type:"boolean",example:!1},anonymousVotes:{type:"boolean",example:!1},maxVoteOverwrite:{type:"number",format:"int32",example:1}}}}}},responses:{200:{description:"It return a list of organizations id",content:{"application/json":{schema:{type:"object",properties:{price:{type:"number",format:"int32",example:61}}}}}}},method:"post",path:"/elections/price",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{maxCensusSize:5e3,electionBlocks:158,encryptedVotes:!1,anonymousVotes:!1,maxVoteOverwrite:1},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote.\n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go"},postman:{name:"Calculate election price",description:{content:"Election Price API endpoint for calculating the price of an election.\n\nIt takes a JSON object with the 5 election parameters that are required for calculating the price.",type:"text/plain"},url:{path:["elections","price"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Filtered elections list",permalink:"/vocdoni-api/elections-filtered"},next:{title:"Censuses",permalink:"/vocdoni-api/censuses"}},h={},f=[{value:"Calculate election price",id:"calculate-election-price",level:2}],v={toc:f};function y(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},v,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"calculate-election-price"},"Calculate election price"),(0,a.kt)("p",null,"Election Price API endpoint for calculating the price of an election."),(0,a.kt)("p",null,"It takes a JSON object with the 5 election parameters that are required for calculating the price."),(0,a.kt)(s.Z,{mdxType:"MimeTabs"},(0,a.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(r.Z,{collapsible:!1,name:"maxCensusSize",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(r.Z,{collapsible:!1,name:"electionBlocks",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(r.Z,{collapsible:!1,name:"encryptedVotes",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(r.Z,{collapsible:!1,name:"anonymousVotes",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(r.Z,{collapsible:!1,name:"maxVoteOverwrite",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"It return a list of organizations id")),(0,a.kt)("div",null,(0,a.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(l.Z,{mdxType:"SchemaTabs"},(0,a.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(r.Z,{collapsible:!1,name:"price",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(c.Z,{responseExample:'{\n  "price": 61\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}y.isMDXComponent=!0}}]);