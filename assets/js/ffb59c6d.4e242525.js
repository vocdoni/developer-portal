"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7304],{16774:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>y,frontMatter:()=>p,metadata:()=>b,toc:()=>f});var n=s(87462),i=(s(67294),s(3905)),a=s(26389),o=s(94891),r=s(74933),c=s(47507),u=s(24310),d=s(63303),l=(s(75035),s(85162));const p={id:"census-publish",title:"Publish census",description:"Register a census to the storage (IPFS in our case). After this, the census can't be edited.",sidebar_label:"Publish census",hide_title:!0,hide_table_of_contents:!0,api:{description:"Register a census to the storage (IPFS in our case). After this, the census can't be edited. \n\nYou could provide the census Merkle root to specify census publication at specific snapshot. \nSee [censuses/{censusId}/participants](census-add-participants)\n\n- Requires Bearer token\n- The census is copied to a new census identified by its Merkle Root\n- The new census **cannot be modified**\n- The census is published to the storage provided (IPFS in our case)\n- The new census ID is returned and can be used for querying\n- If a censusID with the same root has been already published, the request will fail",operationId:"censusPublish",security:[{bearerAuth:[]}],tags:["Censuses"],parameters:[{name:"censusId",in:"path",description:"Census id provided during census creation",required:!0,schema:{type:"string",description:"Random 32 bytes hex string",example:"b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2"}}],responses:{200:{description:"New census Id and storage uri",content:{"application/json":{schema:{type:"object",properties:{censusID:{type:"string",description:"Random 32 bytes hex string",example:"b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2"},uri:{type:"string",example:"ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k"}}}}}}},method:"post",path:"/censuses/{censusId}/publish",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Publish census",description:{content:"Register a census to the storage (IPFS in our case). After this, the census can't be edited. \n\nYou could provide the census Merkle root to specify census publication at specific snapshot. \nSee [censuses/{censusId}/participants](census-add-participants)\n\n- Requires Bearer token\n- The census is copied to a new census identified by its Merkle Root\n- The new census **cannot be modified**\n- The census is published to the storage provided (IPFS in our case)\n- The new census ID is returned and can be used for querying\n- If a censusID with the same root has been already published, the request will fail",type:"text/plain"},url:{path:["censuses",":censusId","publish"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Census id provided during census creation",type:"text/plain"},type:"any",value:"",key:"censusId"}]},header:[{key:"Accept",value:"application/json"}],method:"POST",auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api"},h=void 0,b={unversionedId:"vocdoni-api/census-publish",id:"vocdoni-api/census-publish",title:"Publish census",description:"Register a census to the storage (IPFS in our case). After this, the census can't be edited.",source:"@site/docs/vocdoni-api/census-publish.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/census-publish",permalink:"/vocdoni-api/census-publish",draft:!1,tags:[],version:"current",frontMatter:{id:"census-publish",title:"Publish census",description:"Register a census to the storage (IPFS in our case). After this, the census can't be edited.",sidebar_label:"Publish census",hide_title:!0,hide_table_of_contents:!0,api:{description:"Register a census to the storage (IPFS in our case). After this, the census can't be edited. \n\nYou could provide the census Merkle root to specify census publication at specific snapshot. \nSee [censuses/{censusId}/participants](census-add-participants)\n\n- Requires Bearer token\n- The census is copied to a new census identified by its Merkle Root\n- The new census **cannot be modified**\n- The census is published to the storage provided (IPFS in our case)\n- The new census ID is returned and can be used for querying\n- If a censusID with the same root has been already published, the request will fail",operationId:"censusPublish",security:[{bearerAuth:[]}],tags:["Censuses"],parameters:[{name:"censusId",in:"path",description:"Census id provided during census creation",required:!0,schema:{type:"string",description:"Random 32 bytes hex string",example:"b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2"}}],responses:{200:{description:"New census Id and storage uri",content:{"application/json":{schema:{type:"object",properties:{censusID:{type:"string",description:"Random 32 bytes hex string",example:"b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2"},uri:{type:"string",example:"ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k"}}}}}}},method:"post",path:"/censuses/{censusId}/publish",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Publish census",description:{content:"Register a census to the storage (IPFS in our case). After this, the census can't be edited. \n\nYou could provide the census Merkle root to specify census publication at specific snapshot. \nSee [censuses/{censusId}/participants](census-add-participants)\n\n- Requires Bearer token\n- The census is copied to a new census identified by its Merkle Root\n- The new census **cannot be modified**\n- The census is published to the storage provided (IPFS in our case)\n- The new census ID is returned and can be used for querying\n- If a censusID with the same root has been already published, the request will fail",type:"text/plain"},url:{path:["censuses",":censusId","publish"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Census id provided during census creation",type:"text/plain"},type:"any",value:"",key:"censusId"}]},header:[{key:"Accept",value:"application/json"}],method:"POST",auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api"},sidebar:"vocdoniApi",previous:{title:"Publish census at specific root",permalink:"/vocdoni-api/census-publish-root"},next:{title:"Prove key to census",permalink:"/vocdoni-api/census-verify-key"}},m={},f=[{value:"Publish census",id:"publish-census",level:2}],g={toc:f};function y(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"publish-census"},"Publish census"),(0,i.kt)("p",null,"Register a census to the storage (IPFS in our case). After this, the census can't be edited. "),(0,i.kt)("p",null,"You could provide the census Merkle root to specify census publication at specific snapshot.\nSee ",(0,i.kt)("a",{parentName:"p",href:"census-add-participants"},"censuses/{censusId}/participants")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Requires Bearer token"),(0,i.kt)("li",{parentName:"ul"},"The census is copied to a new census identified by its Merkle Root"),(0,i.kt)("li",{parentName:"ul"},"The new census ",(0,i.kt)("strong",{parentName:"li"},"cannot be modified")),(0,i.kt)("li",{parentName:"ul"},"The census is published to the storage provided (IPFS in our case)"),(0,i.kt)("li",{parentName:"ul"},"The new census ID is returned and can be used for querying"),(0,i.kt)("li",{parentName:"ul"},"If a censusID with the same root has been already published, the request will fail")),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"censusId",in:"path",description:"Census id provided during census creation",required:!0,schema:{type:"string",description:"Random 32 bytes hex string",example:"b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(a.Z,{mdxType:"ApiTabs"},(0,i.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"New census Id and storage uri")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"censusID",required:!1,schemaDescription:"Random 32 bytes hex string",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"uri",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "censusID": "b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2",\n  "uri": "ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}y.isMDXComponent=!0}}]);