"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5594],{3852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>f,frontMatter:()=>p,metadata:()=>m,toc:()=>k});var s=n(87462),i=(n(67294),n(3905)),a=n(26389),o=n(94891),r=n(74933),c=n(47507),d=n(24310),u=n(63303),l=(n(75035),n(85162));const p={id:"census-create",title:"Create new census",description:"Create a new census on the backend side. The census is still unpublished until [publish](census-publish) is",sidebar_label:"Create new census",hide_title:!0,hide_table_of_contents:!0,api:{description:"Create a new census on the backend side. The census is still unpublished until [publish](census-publish) is \ncalled.  \n\nTo create the census it require a `Bearer token` created on the user side using a \n[UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier). This token **should we stored for the user \nto perform operations to this census** such add participants or publish.\n\nIt return a new random censusID (a random 32 bytes hex string), which are used (along with the Bearer token) to \n[add participant keys](census-add-participants) to the census. Once the census is published no more keys can be \nadded.\n\nTo use a census on an election, it **must be published**.\n\n- Available types are: `weighted` and `zkindexed`\n- Require header Bearer token created user side",operationId:"censusCreate",tags:["Censuses"],security:[{bearerAuth:[]}],parameters:[{name:"type",in:"path",description:"Census types",required:!0,schema:{type:"string",enum:["weighted","zkindexed"],example:"weighted"}}],responses:{200:{description:"Return new census id",content:{"application/json":{schema:{type:"object",properties:{censusId:{type:"string",description:"Random 32 bytes hex string",example:"b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2"}}}}}}},method:"post",path:"/censuses/{type}",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Create new census",description:{content:"Create a new census on the backend side. The census is still unpublished until [publish](census-publish) is \ncalled.  \n\nTo create the census it require a `Bearer token` created on the user side using a \n[UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier). This token **should we stored for the user \nto perform operations to this census** such add participants or publish.\n\nIt return a new random censusID (a random 32 bytes hex string), which are used (along with the Bearer token) to \n[add participant keys](census-add-participants) to the census. Once the census is published no more keys can be \nadded.\n\nTo use a census on an election, it **must be published**.\n\n- Available types are: `weighted` and `zkindexed`\n- Require header Bearer token created user side",type:"text/plain"},url:{path:["censuses",":type"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Census types",type:"text/plain"},type:"any",value:"",key:"type"}]},header:[{key:"Accept",value:"application/json"}],method:"POST",auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api"},h=void 0,m={unversionedId:"vocdoni-api/census-create",id:"vocdoni-api/census-create",title:"Create new census",description:"Create a new census on the backend side. The census is still unpublished until [publish](census-publish) is",source:"@site/docs/vocdoni-api/census-create.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/census-create",permalink:"/vocdoni-api/census-create",draft:!1,tags:[],version:"current",frontMatter:{id:"census-create",title:"Create new census",description:"Create a new census on the backend side. The census is still unpublished until [publish](census-publish) is",sidebar_label:"Create new census",hide_title:!0,hide_table_of_contents:!0,api:{description:"Create a new census on the backend side. The census is still unpublished until [publish](census-publish) is \ncalled.  \n\nTo create the census it require a `Bearer token` created on the user side using a \n[UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier). This token **should we stored for the user \nto perform operations to this census** such add participants or publish.\n\nIt return a new random censusID (a random 32 bytes hex string), which are used (along with the Bearer token) to \n[add participant keys](census-add-participants) to the census. Once the census is published no more keys can be \nadded.\n\nTo use a census on an election, it **must be published**.\n\n- Available types are: `weighted` and `zkindexed`\n- Require header Bearer token created user side",operationId:"censusCreate",tags:["Censuses"],security:[{bearerAuth:[]}],parameters:[{name:"type",in:"path",description:"Census types",required:!0,schema:{type:"string",enum:["weighted","zkindexed"],example:"weighted"}}],responses:{200:{description:"Return new census id",content:{"application/json":{schema:{type:"object",properties:{censusId:{type:"string",description:"Random 32 bytes hex string",example:"b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2"}}}}}}},method:"post",path:"/censuses/{type}",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Create new census",description:{content:"Create a new census on the backend side. The census is still unpublished until [publish](census-publish) is \ncalled.  \n\nTo create the census it require a `Bearer token` created on the user side using a \n[UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier). This token **should we stored for the user \nto perform operations to this census** such add participants or publish.\n\nIt return a new random censusID (a random 32 bytes hex string), which are used (along with the Bearer token) to \n[add participant keys](census-add-participants) to the census. Once the census is published no more keys can be \nadded.\n\nTo use a census on an election, it **must be published**.\n\n- Available types are: `weighted` and `zkindexed`\n- Require header Bearer token created user side",type:"text/plain"},url:{path:["censuses",":type"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Census types",type:"text/plain"},type:"any",value:"",key:"type"}]},header:[{key:"Accept",value:"application/json"}],method:"POST",auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api"},sidebar:"vocdoniApi",previous:{title:"Censuses",permalink:"/vocdoni-api/censuses"},next:{title:"Census Merkle Root",permalink:"/vocdoni-api/census-root"}},b={},k=[{value:"Create new census",id:"create-new-census",level:2}],y={toc:k};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,s.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"create-new-census"},"Create new census"),(0,i.kt)("p",null,"Create a new census on the backend side. The census is still unpublished until ",(0,i.kt)("a",{parentName:"p",href:"census-publish"},"publish")," is\ncalled.  "),(0,i.kt)("p",null,"To create the census it require a ",(0,i.kt)("inlineCode",{parentName:"p"},"Bearer token")," created on the user side using a\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Universally_unique_identifier"},"UUID"),". This token ",(0,i.kt)("strong",{parentName:"p"},"should we stored for the user\nto perform operations to this census")," such add participants or publish."),(0,i.kt)("p",null,"It return a new random censusID (a random 32 bytes hex string), which are used (along with the Bearer token) to\n",(0,i.kt)("a",{parentName:"p",href:"census-add-participants"},"add participant keys")," to the census. Once the census is published no more keys can be\nadded."),(0,i.kt)("p",null,"To use a census on an election, it ",(0,i.kt)("strong",{parentName:"p"},"must be published"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Available types are: ",(0,i.kt)("inlineCode",{parentName:"li"},"weighted")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"zkindexed")),(0,i.kt)("li",{parentName:"ul"},"Require header Bearer token created user side")),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"type",in:"path",description:"Census types",required:!0,schema:{type:"string",enum:["weighted","zkindexed"],example:"weighted"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(a.Z,{mdxType:"ApiTabs"},(0,i.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Return new census id")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(u.Z,{mdxType:"SchemaTabs"},(0,i.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"censusId",required:!1,schemaDescription:"Random 32 bytes hex string",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "censusId": "b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);