"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9400],{21779:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>g,frontMatter:()=>m,metadata:()=>h,toc:()=>y});var o=a(87462),n=(a(67294),a(3905)),i=a(26389),s=a(94891),r=a(75190),c=a(47507),d=a(24310),l=a(63303),p=(a(75035),a(85162));const m={id:"account-by-address",title:"Get account information",description:"Get account information by its address or public key.",sidebar_label:"Get account information",hide_title:!0,hide_table_of_contents:!0,api:{description:'Get account information by its address or public key.\n\n\nThe `infoURI` parameter contain where account metadata is uploaded (like avatar, name...). It return also an \nalready parsed "metadata" object from this infoUri. \n\n\nThe `meta` object inside the `metadata` property is left to the user to add random information about the account.',operationId:"accountByAddress",tags:["Accounts"],parameters:[{name:"accountId",in:"path",description:"Account address or publicKey (also known as accountId)",required:!0,schema:{type:"string",example:"0x370372b92514d81a0e3efb8eba9d036ae0877653"}}],responses:{200:{description:"Return account data",content:{"application/json":{schema:{type:"object",properties:{address:{type:"string",example:"e0c941dd44ff4c43fc4683088b846ddb3234d169"},nonce:{type:"string",example:186},balance:{type:"integer",format:"int32",example:9568},electionIndex:{type:"integer",format:"int32",example:38},infoURI:{type:"string",example:"ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k"},metadata:{type:"object",properties:{version:{type:"string",example:"1.0"},name:{type:"object",properties:{default:{type:"string"},additionalProperties:{type:"string"}},example:{default:"Hello",es:"Hola"}},description:{type:"object",properties:{default:{type:"string"},additionalProperties:{type:"string"}},example:{default:"Hello",es:"Hola"}},newsFeed:{type:"object",properties:{default:{type:"string"},additionalProperties:{type:"string"}},example:{default:"Hello",es:"Hola"}},media:{type:"object",properties:{avatar:{type:"string",example:"ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k"},header:{type:"string",example:"ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k"},logo:{type:"string",example:"ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k"}}},meta:{type:"object"}}}}}}}}},method:"get",path:"/accounts/{accountId}",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote.\n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go"},postman:{name:"Get account information",description:{content:'Get account information by its address or public key.\n\n\nThe `infoURI` parameter contain where account metadata is uploaded (like avatar, name...). It return also an \nalready parsed "metadata" object from this infoUri. \n\n\nThe `meta` object inside the `metadata` property is left to the user to add random information about the account.',type:"text/plain"},url:{path:["accounts",":accountId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Account address or publicKey (also known as accountId)",type:"text/plain"},type:"any",value:"",key:"accountId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},u=void 0,h={unversionedId:"vocdoni-api/account-by-address",id:"vocdoni-api/account-by-address",title:"Get account information",description:"Get account information by its address or public key.",source:"@site/docs/vocdoni-api/account-by-address.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/account-by-address",permalink:"/vocdoni-api/account-by-address",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"account-by-address",title:"Get account information",description:"Get account information by its address or public key.",sidebar_label:"Get account information",hide_title:!0,hide_table_of_contents:!0,api:{description:'Get account information by its address or public key.\n\n\nThe `infoURI` parameter contain where account metadata is uploaded (like avatar, name...). It return also an \nalready parsed "metadata" object from this infoUri. \n\n\nThe `meta` object inside the `metadata` property is left to the user to add random information about the account.',operationId:"accountByAddress",tags:["Accounts"],parameters:[{name:"accountId",in:"path",description:"Account address or publicKey (also known as accountId)",required:!0,schema:{type:"string",example:"0x370372b92514d81a0e3efb8eba9d036ae0877653"}}],responses:{200:{description:"Return account data",content:{"application/json":{schema:{type:"object",properties:{address:{type:"string",example:"e0c941dd44ff4c43fc4683088b846ddb3234d169"},nonce:{type:"string",example:186},balance:{type:"integer",format:"int32",example:9568},electionIndex:{type:"integer",format:"int32",example:38},infoURI:{type:"string",example:"ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k"},metadata:{type:"object",properties:{version:{type:"string",example:"1.0"},name:{type:"object",properties:{default:{type:"string"},additionalProperties:{type:"string"}},example:{default:"Hello",es:"Hola"}},description:{type:"object",properties:{default:{type:"string"},additionalProperties:{type:"string"}},example:{default:"Hello",es:"Hola"}},newsFeed:{type:"object",properties:{default:{type:"string"},additionalProperties:{type:"string"}},example:{default:"Hello",es:"Hola"}},media:{type:"object",properties:{avatar:{type:"string",example:"ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k"},header:{type:"string",example:"ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k"},logo:{type:"string",example:"ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k"}}},meta:{type:"object"}}}}}}}}},method:"get",path:"/accounts/{accountId}",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote.\n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go"},postman:{name:"Get account information",description:{content:'Get account information by its address or public key.\n\n\nThe `infoURI` parameter contain where account metadata is uploaded (like avatar, name...). It return also an \nalready parsed "metadata" object from this infoUri. \n\n\nThe `meta` object inside the `metadata` property is left to the user to add random information about the account.',type:"text/plain"},url:{path:["accounts",":accountId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Account address or publicKey (also known as accountId)",type:"text/plain"},type:"any",value:"",key:"accountId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Accounts",permalink:"/vocdoni-api/accounts"},next:{title:"Register an account",permalink:"/vocdoni-api/account-submit"}},f={},y=[{value:"Get account information",id:"get-account-information",level:2}],b={toc:y};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"get-account-information"},"Get account information"),(0,n.kt)("p",null,"Get account information by its address or public key."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"infoURI"),' parameter contain where account metadata is uploaded (like avatar, name...). It return also an\nalready parsed "metadata" object from this infoUri. '),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"meta")," object inside the ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata")," property is left to the user to add random information about the account."),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"accountId",in:"path",description:"Account address or publicKey (also known as accountId)",required:!0,schema:{type:"string",example:"0x370372b92514d81a0e3efb8eba9d036ae0877653"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Return account data")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(l.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"address",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"nonce",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"balance",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"electionIndex",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"infoURI",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"metadata"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"version",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"name"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"default",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"additionalProperties",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"description"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"default",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"additionalProperties",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"newsFeed"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"default",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"additionalProperties",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"media"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"avatar",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"header",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"logo",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{collapsible:!1,name:"meta",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(c.Z,{responseExample:'{\n  "address": "e0c941dd44ff4c43fc4683088b846ddb3234d169",\n  "nonce": 186,\n  "balance": 9568,\n  "electionIndex": 38,\n  "infoURI": "ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k",\n  "metadata": {\n    "version": "1.0",\n    "name": {\n      "default": "Hello",\n      "es": "Hola"\n    },\n    "description": {\n      "default": "Hello",\n      "es": "Hola"\n    },\n    "newsFeed": {\n      "default": "Hello",\n      "es": "Hola"\n    },\n    "media": {\n      "avatar": "ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k",\n      "header": "ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k",\n      "logo": "ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k"\n    },\n    "meta": {}\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);