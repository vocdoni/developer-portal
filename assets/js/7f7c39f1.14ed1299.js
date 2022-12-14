"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4510],{95105:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>y,toc:()=>f});var i=a(87462),s=(a(67294),a(3905)),n=a(26389),o=a(94891),l=a(74933),r=a(47507),c=a(24310),p=a(63303),m=(a(75035),a(85162));const d={id:"elections-by-organization-and-status",title:"List paginated account elections by status",description:"Default page is 0 if no page specified",sidebar_label:"List paginated account elections by status",hide_title:!0,hide_table_of_contents:!0,api:{description:"Default page is 0 if no page specified",operationId:"electionsByOrganizationAndStatus",tags:["Accounts"],parameters:[{name:"accountId",in:"path",description:"Account address or publicKey (also known as accountId)",required:!0,schema:{type:"string",example:"0x370372b92514d81a0e3efb8eba9d036ae0877653"}},{name:"status",in:"path",description:"Status of the election",required:!0,schema:{type:"string",enum:["ready","ended","canceled","paused","results"],description:"Election status enum\n",example:"active"}},{name:"page",in:"path",description:"When returning a list it define de page number. If empty, default is 0",allowEmptyValue:!0,required:!0,schema:{type:"integer",example:1,default:0}}],responses:{200:{description:"It return a list of elections",content:{"application/json":{schema:{type:"object",properties:{organizationId:{type:"string",example:"0x370372b92514d81a0e3efb8eba9d036ae0877653"},elections:{type:"array",items:{type:"object",properties:{electionId:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"},type:{type:"string",example:["anonymous open single","poll encrypted serial"]},status:{type:"string",enum:["PROCESS_UNKNOWN","READY","ENDED","CANCELED","PAUSED","RESULTS"]},startDate:{type:"string",description:"Unix time timestamp",format:"date-time",example:"1668503879"},endDate:{type:"string",description:"Unix time timestamp",format:"date-time",example:"1668503879"},creationTime:{type:"string",description:"Unix time timestamp",format:"date-time",example:"1668503879"},voteCount:{type:"integer",format:"int32",example:61},electionCount:{type:"integer",format:"int32",example:0},finalResults:{type:"boolean",example:!1},metadataURL:{type:"string",example:"ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k"},result:{type:"array",items:{type:"object",properties:{value:{type:"array",items:{type:"string"},example:["6049752455547578274294031","33965616553398058290000","0"]}}}},census:{type:"object",properties:{censusOrigin:{type:"string",enum:["CENSUS_UNKNOWN","OFF_CHAIN_TREE","OFF_CHAIN_TREE_WEIGHTED","OFF_CHAIN_CA","ERC20","ERC721","ERC1155","ERC777","MINI_ME"]},censusRoot:{type:"string",description:"Random 32 bytes hex string",example:"b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2"},postRegisterCensusRoot:{type:"string",example:""},censusURL:{type:"string",example:""}}},voteMode:{type:"object",properties:{serial:{type:"boolean",example:!1},anonymous:{type:"boolean",example:!0},encryptedVotes:{type:"boolean",example:!1},uniqueValues:{type:"boolean",example:!1},costFromWeight:{type:"boolean",example:!1}}},electionMode:{type:"object",properties:{autoStart:{type:"boolean",example:!0},interruptible:{type:"boolean",example:!1},dynamicCensus:{type:"boolean",example:!1},encryptedMetaData:{type:"boolean",example:!1},preRegister:{type:"boolean",example:!1}}},tallyMode:{type:"object",properties:{maxCount:{type:"integer",format:"int32",example:1},maxValue:{type:"integer",format:"int32",example:2},maxVoteOverwrites:{type:"integer",format:"int32",example:1},maxTotalCost:{type:"integer",format:"int32",example:0},costExponent:{type:"integer",format:"int32",example:1e4}}}}}}}}}}}},method:"get",path:"/accounts/{accountId}/elections/status/{status}/page/{page}",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"List paginated account elections by status",description:{content:"Default page is 0 if no page specified",type:"text/plain"},url:{path:["accounts",":accountId","elections","status",":status","page",":page"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Account address or publicKey (also known as accountId)",type:"text/plain"},type:"any",value:"",key:"accountId"},{disabled:!1,description:{content:"(Required) Status of the election",type:"text/plain"},type:"any",value:"",key:"status"},{disabled:!1,description:{content:"(Required) When returning a list it define de page number. If empty, default is 0",type:"text/plain"},type:"any",value:"",key:"page"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api"},u=void 0,y={unversionedId:"vocdoni-api/elections-by-organization-and-status",id:"vocdoni-api/elections-by-organization-and-status",title:"List paginated account elections by status",description:"Default page is 0 if no page specified",source:"@site/docs/vocdoni-api/elections-by-organization-and-status.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/elections-by-organization-and-status",permalink:"/vocdoni-api/elections-by-organization-and-status",draft:!1,tags:[],version:"current",frontMatter:{id:"elections-by-organization-and-status",title:"List paginated account elections by status",description:"Default page is 0 if no page specified",sidebar_label:"List paginated account elections by status",hide_title:!0,hide_table_of_contents:!0,api:{description:"Default page is 0 if no page specified",operationId:"electionsByOrganizationAndStatus",tags:["Accounts"],parameters:[{name:"accountId",in:"path",description:"Account address or publicKey (also known as accountId)",required:!0,schema:{type:"string",example:"0x370372b92514d81a0e3efb8eba9d036ae0877653"}},{name:"status",in:"path",description:"Status of the election",required:!0,schema:{type:"string",enum:["ready","ended","canceled","paused","results"],description:"Election status enum\n",example:"active"}},{name:"page",in:"path",description:"When returning a list it define de page number. If empty, default is 0",allowEmptyValue:!0,required:!0,schema:{type:"integer",example:1,default:0}}],responses:{200:{description:"It return a list of elections",content:{"application/json":{schema:{type:"object",properties:{organizationId:{type:"string",example:"0x370372b92514d81a0e3efb8eba9d036ae0877653"},elections:{type:"array",items:{type:"object",properties:{electionId:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"},type:{type:"string",example:["anonymous open single","poll encrypted serial"]},status:{type:"string",enum:["PROCESS_UNKNOWN","READY","ENDED","CANCELED","PAUSED","RESULTS"]},startDate:{type:"string",description:"Unix time timestamp",format:"date-time",example:"1668503879"},endDate:{type:"string",description:"Unix time timestamp",format:"date-time",example:"1668503879"},creationTime:{type:"string",description:"Unix time timestamp",format:"date-time",example:"1668503879"},voteCount:{type:"integer",format:"int32",example:61},electionCount:{type:"integer",format:"int32",example:0},finalResults:{type:"boolean",example:!1},metadataURL:{type:"string",example:"ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k"},result:{type:"array",items:{type:"object",properties:{value:{type:"array",items:{type:"string"},example:["6049752455547578274294031","33965616553398058290000","0"]}}}},census:{type:"object",properties:{censusOrigin:{type:"string",enum:["CENSUS_UNKNOWN","OFF_CHAIN_TREE","OFF_CHAIN_TREE_WEIGHTED","OFF_CHAIN_CA","ERC20","ERC721","ERC1155","ERC777","MINI_ME"]},censusRoot:{type:"string",description:"Random 32 bytes hex string",example:"b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2"},postRegisterCensusRoot:{type:"string",example:""},censusURL:{type:"string",example:""}}},voteMode:{type:"object",properties:{serial:{type:"boolean",example:!1},anonymous:{type:"boolean",example:!0},encryptedVotes:{type:"boolean",example:!1},uniqueValues:{type:"boolean",example:!1},costFromWeight:{type:"boolean",example:!1}}},electionMode:{type:"object",properties:{autoStart:{type:"boolean",example:!0},interruptible:{type:"boolean",example:!1},dynamicCensus:{type:"boolean",example:!1},encryptedMetaData:{type:"boolean",example:!1},preRegister:{type:"boolean",example:!1}}},tallyMode:{type:"object",properties:{maxCount:{type:"integer",format:"int32",example:1},maxValue:{type:"integer",format:"int32",example:2},maxVoteOverwrites:{type:"integer",format:"int32",example:1},maxTotalCost:{type:"integer",format:"int32",example:0},costExponent:{type:"integer",format:"int32",example:1e4}}}}}}}}}}}},method:"get",path:"/accounts/{accountId}/elections/status/{status}/page/{page}",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"List paginated account elections by status",description:{content:"Default page is 0 if no page specified",type:"text/plain"},url:{path:["accounts",":accountId","elections","status",":status","page",":page"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Account address or publicKey (also known as accountId)",type:"text/plain"},type:"any",value:"",key:"accountId"},{disabled:!1,description:{content:"(Required) Status of the election",type:"text/plain"},type:"any",value:"",key:"status"},{disabled:!1,description:{content:"(Required) When returning a list it define de page number. If empty, default is 0",type:"text/plain"},type:"any",value:"",key:"page"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api"},sidebar:"vocdoniApi",previous:{title:"List account elections by status",permalink:"/vocdoni-api/elections-by-organization-and-status-paginated"},next:{title:"List account elections",permalink:"/vocdoni-api/elections-by-organization-paginated"}},h={},f=[{value:"List paginated account elections by status",id:"list-paginated-account-elections-by-status",level:2}],g={toc:f};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"list-paginated-account-elections-by-status"},"List paginated account elections by status"),(0,s.kt)("p",null,"Default page is 0 if no page specified"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"accountId",in:"path",description:"Account address or publicKey (also known as accountId)",required:!0,schema:{type:"string",example:"0x370372b92514d81a0e3efb8eba9d036ae0877653"}},mdxType:"ParamsItem"}),(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"status",in:"path",description:"Status of the election",required:!0,schema:{type:"string",enum:["ready","ended","canceled","paused","results"],description:"Election status enum\n",example:"active"}},mdxType:"ParamsItem"}),(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"page",in:"path",description:"When returning a list it define de page number. If empty, default is 0",allowEmptyValue:!0,required:!0,schema:{type:"integer",example:1,default:0}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"It return a list of elections")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"organizationId",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"elections"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"electionId",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"status",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`PROCESS_UNKNOWN`, `READY`, `ENDED`, `CANCELED`, `PAUSED`, `RESULTS`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"startDate",required:!1,schemaDescription:"Unix time timestamp",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"endDate",required:!1,schemaDescription:"Unix time timestamp",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"creationTime",required:!1,schemaDescription:"Unix time timestamp",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"voteCount",required:!1,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"electionCount",required:!1,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"finalResults",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"metadataURL",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"result"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"census"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"censusOrigin",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`CENSUS_UNKNOWN`, `OFF_CHAIN_TREE`, `OFF_CHAIN_TREE_WEIGHTED`, `OFF_CHAIN_CA`, `ERC20`, `ERC721`, `ERC1155`, `ERC777`, `MINI_ME`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"censusRoot",required:!1,schemaDescription:"Random 32 bytes hex string",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"postRegisterCensusRoot",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"censusURL",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"voteMode"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"serial",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"anonymous",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"encryptedVotes",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"uniqueValues",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"costFromWeight",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"electionMode"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"autoStart",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"interruptible",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"dynamicCensus",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"encryptedMetaData",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"preRegister",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"tallyMode"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"maxCount",required:!1,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"maxValue",required:!1,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"maxVoteOverwrites",required:!1,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"maxTotalCost",required:!1,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"costExponent",required:!1,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "organizationId": "0x370372b92514d81a0e3efb8eba9d036ae0877653",\n  "elections": [\n    {\n      "electionId": "0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845",\n      "type": [\n        "anonymous open single",\n        "poll encrypted serial"\n      ],\n      "status": "PROCESS_UNKNOWN",\n      "startDate": "1668503879",\n      "endDate": "1668503879",\n      "creationTime": "1668503879",\n      "voteCount": 61,\n      "electionCount": 0,\n      "finalResults": false,\n      "metadataURL": "ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k",\n      "result": [\n        {\n          "value": [\n            "6049752455547578274294031",\n            "33965616553398058290000",\n            "0"\n          ]\n        }\n      ],\n      "census": {\n        "censusOrigin": "CENSUS_UNKNOWN",\n        "censusRoot": "b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2",\n        "postRegisterCensusRoot": "",\n        "censusURL": ""\n      },\n      "voteMode": {\n        "serial": false,\n        "anonymous": true,\n        "encryptedVotes": false,\n        "uniqueValues": false,\n        "costFromWeight": false\n      },\n      "electionMode": {\n        "autoStart": true,\n        "interruptible": false,\n        "dynamicCensus": false,\n        "encryptedMetaData": false,\n        "preRegister": false\n      },\n      "tallyMode": {\n        "maxCount": 1,\n        "maxValue": 2,\n        "maxVoteOverwrites": 1,\n        "maxTotalCost": 0,\n        "costExponent": 10000\n      }\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);