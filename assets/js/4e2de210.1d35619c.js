(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9057],{40611:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v});var n=a(87462),o=a(67294),i=a(86390),s=a(18694);const r={React:o,...o,Image:s.Ee,ElectionProvider:s.qT,ElectionHeader:s.UE,ElectionTitle:s.hi,ElectionSchedule:s.vE,ElectionStatusBadge:s.QW,ElectionDescription:s.I3,ElectionQuestions:s.Vx,OrganizationProvider:s.f0,OrganizationAvatar:s.ld,OrganizationDescription:s.G9,OrganizationHeader:s.sC,OrganizationName:s.X5,Organization:s.cp};var c=a(170),d=a(39805),l=a(14902),h=a(23537);const p="f752b527e2aba395d1ba4c0de9c1471234567890",u="https://picsum.photos/seed/{seed}/1400/300",m={address:p,balance:0,nonce:123,electionIndex:13,account:new h.mR({languages:["en"],name:"Awesome Organization",description:"Description of Awesome organization",header:u.replace("{seed}",p),avatar:`https://picsum.photos/seed/${p}/300`,meta:[]})},f=`c5d2460186f7${p}020000000000`,g={electionCount:0,electionId:f,organizationId:"9b821aa92de2efc28ad6391fede437a92ce696d1",status:h.LD.RESULTS,startDate:"2023-06-27T03:01:10.621236881Z",endDate:"2023-07-17T05:49:16.598037746Z",voteCount:8,finalResults:!0,result:[["80","0","0"]],census:{censusOrigin:h.CU.OFF_CHAIN_TREE_WEIGHTED,censusRoot:"31755e98a4b7f6d0be2bb4071f05d45bbdb1c7871d37b1f93eb39d248d88ec9a",postRegisterCensusRoot:"",censusURL:"http://localhost:8080/census"},metadataURL:"ipfs://bafybeieo6pbbqvd4qhcsk4pdrv53tdkrdmtbjl273cumel27jurotdgszi",creationTime:"2023-06-27T03:01:00Z",voteMode:{serial:!1,anonymous:!1,encryptedVotes:!1,uniqueValues:!1,costFromWeight:!1},electionMode:{autoStart:!0,interruptible:!0,dynamicCensus:!0,encryptedMetaData:!1,preRegister:!1},tallyMode:{maxCount:1,maxValue:2,maxVoteOverwrites:1,maxTotalCost:2,costExponent:1e4},metadata:{title:{default:"My awesome election"},version:"1.1",description:{default:"My awesome election description"},media:{header:u.replace("{seed}",f)},questions:[{choices:[{title:{default:"Yes"},value:0},{title:{default:"No"},value:1}],description:{default:"Test question 1 description"},title:{default:"Test question 1"}}],results:{aggregation:"discrete-counting",display:"multiple-choice"},meta:void 0}},b=h.u_.build({census:new h.pT(g.census.censusRoot,g.census.censusURL,h.oN.censusTypeFromCensusOrigin(g.census.censusOrigin),4,BigInt("40")),creationTime:g.creationTime,electionCount:0,endDate:g.endDate,finalResults:g.finalResults,id:g.electionId,metadataURL:g.metadataURL,organizationId:g.organizationId,raw:g,results:g.result,status:g.status,title:g.metadata.title,description:g.metadata.description,voteCount:g.voteCount,header:g.metadata.media.header,questions:g.metadata.questions,startDate:g.startDate,voteType:g.voteMode}),v=(y=c.Z,function(e){return e.live?o.createElement(d.x,{theme:(0,l.B1)(s.rS),resetCSS:!1},o.createElement(s.de,{env:"stg"},o.createElement(s.f0,{organization:m},o.createElement(s.qT,{election:b},o.createElement(i.Z,(0,n.Z)({scope:r},e)))))):o.createElement(y,e)});var y},13366:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>h,metadata:()=>u,toc:()=>f});var n=a(87462),o=(a(67294),a(3905)),i=a(26389),s=a(94891),r=(a(75190),a(47507)),c=a(24310),d=a(63303),l=(a(75035),a(85162));const h={id:"create-election",title:"Create an election",description:"It creates an election on the Vochain.",sidebar_label:"Create an election",hide_title:!0,hide_table_of_contents:!0,api:{description:'It creates an election on the Vochain. \n\nTo use this endpoint, you will need to provide a signed transaction that has been encoded on the client side \nusing the **Vocdoni SDK**. This transaction, referred to as txPayload, must include the IPFS CID-formatted hash of \nthe metadata for the election.\n\nThe metadata for the election is optional and is provided as a base64-encoded JSON object. This object should \nfollow the Entity metadata specification and includes information about the election, such as the list of \ncandidates and the election\'s description. This metadata is stored within IPFS so that participants can access it.\n\nThe API endpoint will verify that the hash in the txPayload transaction matches the uploaded metadata. If these \ndo not match, the API will return an error.\n\nExample of election metadata object:\n\n```json\n{\n  "version": "1.0",\n  "title": {"default": "Best pasta!", "en": "Best pasta!", "es": "La mejor pasta!"},\n  "description": {"default": "Decide what is the best pasta", "en": "Decide what is the best pasta", "es": "Decide cual es la mejor pasta"},\n  // Following fields are optional\n  "media": {\n    "header": "url to an image"\n    "streamUri": "url to a stream resource"\n  },\n  "questions": [\n    {\n      "choices": [ \n        { \n          "title": {"default": "Macarroni", "en": "Macarroni", "es": "Macarrones"},\n          "value": 0\n        } \n        { \n          "title": {"default": "Spaghetti", "en": "Spaghetti", "es": "Espaguetis"},\n          "value": 1\n        } \n      ], \n      "description": {"default": "Choice one of theme", "en": "Choice one of theme", "es": "Elije una de ellas"},\n      "title": {"default": "Macarroni or Spaghetti", "en": "Macarroni or Spaghetti", "es": "Macarrones o Espaguetis"}\n    }\n  ]\n}\n```\n\n[Read more about process creation](https://docs.vocdoni.io/architecture/process-overview.html#process-creation)',operationId:"createElection",tags:["Elections"],requestBody:{description:"Uses `txPayload` protobuff signed transaction, and the `metadata` base64-encoded JSON object",required:!0,content:{"application/json":{schema:{type:"object",required:["txPayload"],properties:{txPayload:{type:"string",example:"Base64 string of NewProcessTx transaction bytes"},metadata:{type:"string",example:"optional: base64 string of election metadata JSON object"}}}}}},responses:{200:{description:"It return txId, electionId and the metadataURL for the newly created election. If metadataURL is returned \nempty, means that there is some issue with the storage provider.",content:{"application/json":{schema:{type:"object",properties:{txHash:{type:"string",example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"},electionID:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"},metadataURL:{type:"string",example:"ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k"}}}}}}},method:"post",path:"/elections",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{txPayload:"Base64 string of NewProcessTx transaction bytes",metadata:"optional: base64 string of election metadata JSON object"},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote.\n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go"},postman:{name:"Create an election",description:{content:'It creates an election on the Vochain. \n\nTo use this endpoint, you will need to provide a signed transaction that has been encoded on the client side \nusing the **Vocdoni SDK**. This transaction, referred to as txPayload, must include the IPFS CID-formatted hash of \nthe metadata for the election.\n\nThe metadata for the election is optional and is provided as a base64-encoded JSON object. This object should \nfollow the Entity metadata specification and includes information about the election, such as the list of \ncandidates and the election\'s description. This metadata is stored within IPFS so that participants can access it.\n\nThe API endpoint will verify that the hash in the txPayload transaction matches the uploaded metadata. If these \ndo not match, the API will return an error.\n\nExample of election metadata object:\n\n```json\n{\n  "version": "1.0",\n  "title": {"default": "Best pasta!", "en": "Best pasta!", "es": "La mejor pasta!"},\n  "description": {"default": "Decide what is the best pasta", "en": "Decide what is the best pasta", "es": "Decide cual es la mejor pasta"},\n  // Following fields are optional\n  "media": {\n    "header": "url to an image"\n    "streamUri": "url to a stream resource"\n  },\n  "questions": [\n    {\n      "choices": [ \n        { \n          "title": {"default": "Macarroni", "en": "Macarroni", "es": "Macarrones"},\n          "value": 0\n        } \n        { \n          "title": {"default": "Spaghetti", "en": "Spaghetti", "es": "Espaguetis"},\n          "value": 1\n        } \n      ], \n      "description": {"default": "Choice one of theme", "en": "Choice one of theme", "es": "Elije una de ellas"},\n      "title": {"default": "Macarroni or Spaghetti", "en": "Macarroni or Spaghetti", "es": "Macarrones o Espaguetis"}\n    }\n  ]\n}\n```\n\n[Read more about process creation](https://docs.vocdoni.io/architecture/process-overview.html#process-creation)',type:"text/plain"},url:{path:["elections"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},p=void 0,u={unversionedId:"vocdoni-api/create-election",id:"vocdoni-api/create-election",title:"Create an election",description:"It creates an election on the Vochain.",source:"@site/docs/vocdoni-api/create-election.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/create-election",permalink:"/vocdoni-api/create-election",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-election",title:"Create an election",description:"It creates an election on the Vochain.",sidebar_label:"Create an election",hide_title:!0,hide_table_of_contents:!0,api:{description:'It creates an election on the Vochain. \n\nTo use this endpoint, you will need to provide a signed transaction that has been encoded on the client side \nusing the **Vocdoni SDK**. This transaction, referred to as txPayload, must include the IPFS CID-formatted hash of \nthe metadata for the election.\n\nThe metadata for the election is optional and is provided as a base64-encoded JSON object. This object should \nfollow the Entity metadata specification and includes information about the election, such as the list of \ncandidates and the election\'s description. This metadata is stored within IPFS so that participants can access it.\n\nThe API endpoint will verify that the hash in the txPayload transaction matches the uploaded metadata. If these \ndo not match, the API will return an error.\n\nExample of election metadata object:\n\n```json\n{\n  "version": "1.0",\n  "title": {"default": "Best pasta!", "en": "Best pasta!", "es": "La mejor pasta!"},\n  "description": {"default": "Decide what is the best pasta", "en": "Decide what is the best pasta", "es": "Decide cual es la mejor pasta"},\n  // Following fields are optional\n  "media": {\n    "header": "url to an image"\n    "streamUri": "url to a stream resource"\n  },\n  "questions": [\n    {\n      "choices": [ \n        { \n          "title": {"default": "Macarroni", "en": "Macarroni", "es": "Macarrones"},\n          "value": 0\n        } \n        { \n          "title": {"default": "Spaghetti", "en": "Spaghetti", "es": "Espaguetis"},\n          "value": 1\n        } \n      ], \n      "description": {"default": "Choice one of theme", "en": "Choice one of theme", "es": "Elije una de ellas"},\n      "title": {"default": "Macarroni or Spaghetti", "en": "Macarroni or Spaghetti", "es": "Macarrones o Espaguetis"}\n    }\n  ]\n}\n```\n\n[Read more about process creation](https://docs.vocdoni.io/architecture/process-overview.html#process-creation)',operationId:"createElection",tags:["Elections"],requestBody:{description:"Uses `txPayload` protobuff signed transaction, and the `metadata` base64-encoded JSON object",required:!0,content:{"application/json":{schema:{type:"object",required:["txPayload"],properties:{txPayload:{type:"string",example:"Base64 string of NewProcessTx transaction bytes"},metadata:{type:"string",example:"optional: base64 string of election metadata JSON object"}}}}}},responses:{200:{description:"It return txId, electionId and the metadataURL for the newly created election. If metadataURL is returned \nempty, means that there is some issue with the storage provider.",content:{"application/json":{schema:{type:"object",properties:{txHash:{type:"string",example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"},electionID:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"},metadataURL:{type:"string",example:"ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k"}}}}}}},method:"post",path:"/elections",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{txPayload:"Base64 string of NewProcessTx transaction bytes",metadata:"optional: base64 string of election metadata JSON object"},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote.\n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go"},postman:{name:"Create an election",description:{content:'It creates an election on the Vochain. \n\nTo use this endpoint, you will need to provide a signed transaction that has been encoded on the client side \nusing the **Vocdoni SDK**. This transaction, referred to as txPayload, must include the IPFS CID-formatted hash of \nthe metadata for the election.\n\nThe metadata for the election is optional and is provided as a base64-encoded JSON object. This object should \nfollow the Entity metadata specification and includes information about the election, such as the list of \ncandidates and the election\'s description. This metadata is stored within IPFS so that participants can access it.\n\nThe API endpoint will verify that the hash in the txPayload transaction matches the uploaded metadata. If these \ndo not match, the API will return an error.\n\nExample of election metadata object:\n\n```json\n{\n  "version": "1.0",\n  "title": {"default": "Best pasta!", "en": "Best pasta!", "es": "La mejor pasta!"},\n  "description": {"default": "Decide what is the best pasta", "en": "Decide what is the best pasta", "es": "Decide cual es la mejor pasta"},\n  // Following fields are optional\n  "media": {\n    "header": "url to an image"\n    "streamUri": "url to a stream resource"\n  },\n  "questions": [\n    {\n      "choices": [ \n        { \n          "title": {"default": "Macarroni", "en": "Macarroni", "es": "Macarrones"},\n          "value": 0\n        } \n        { \n          "title": {"default": "Spaghetti", "en": "Spaghetti", "es": "Espaguetis"},\n          "value": 1\n        } \n      ], \n      "description": {"default": "Choice one of theme", "en": "Choice one of theme", "es": "Elije una de ellas"},\n      "title": {"default": "Macarroni or Spaghetti", "en": "Macarroni or Spaghetti", "es": "Macarrones o Espaguetis"}\n    }\n  ]\n}\n```\n\n[Read more about process creation](https://docs.vocdoni.io/architecture/process-overview.html#process-creation)',type:"text/plain"},url:{path:["elections"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"List elections",permalink:"/vocdoni-api/elections-list"},next:{title:"Paginated elections list",permalink:"/vocdoni-api/elections-list-paginated"}},m={},f=[{value:"Create an election",id:"create-an-election",level:2}],g={toc:f};function b(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"create-an-election"},"Create an election"),(0,o.kt)("p",null,"It creates an election on the Vochain. "),(0,o.kt)("p",null,"To use this endpoint, you will need to provide a signed transaction that has been encoded on the client side\nusing the ",(0,o.kt)("strong",{parentName:"p"},"Vocdoni SDK"),". This transaction, referred to as txPayload, must include the IPFS CID-formatted hash of\nthe metadata for the election."),(0,o.kt)("p",null,"The metadata for the election is optional and is provided as a base64-encoded JSON object. This object should\nfollow the Entity metadata specification and includes information about the election, such as the list of\ncandidates and the election's description. This metadata is stored within IPFS so that participants can access it."),(0,o.kt)("p",null,"The API endpoint will verify that the hash in the txPayload transaction matches the uploaded metadata. If these\ndo not match, the API will return an error."),(0,o.kt)("p",null,"Example of election metadata object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "1.0",\n  "title": {"default": "Best pasta!", "en": "Best pasta!", "es": "La mejor pasta!"},\n  "description": {"default": "Decide what is the best pasta", "en": "Decide what is the best pasta", "es": "Decide cual es la mejor pasta"},\n  // Following fields are optional\n  "media": {\n    "header": "url to an image"\n    "streamUri": "url to a stream resource"\n  },\n  "questions": [\n    {\n      "choices": [ \n        { \n          "title": {"default": "Macarroni", "en": "Macarroni", "es": "Macarrones"},\n          "value": 0\n        } \n        { \n          "title": {"default": "Spaghetti", "en": "Spaghetti", "es": "Espaguetis"},\n          "value": 1\n        } \n      ], \n      "description": {"default": "Choice one of theme", "en": "Choice one of theme", "es": "Elije una de ellas"},\n      "title": {"default": "Macarroni or Spaghetti", "en": "Macarroni or Spaghetti", "es": "Macarrones o Espaguetis"}\n    }\n  ]\n}\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.vocdoni.io/architecture/process-overview.html#process-creation"},"Read more about process creation")),(0,o.kt)(s.Z,{mdxType:"MimeTabs"},(0,o.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Request Body"),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,o.kt)("p",null,"Uses ",(0,o.kt)("inlineCode",{parentName:"p"},"txPayload")," protobuff signed transaction, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata")," base64-encoded JSON object"))),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(c.Z,{collapsible:!1,name:"txPayload",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"metadata",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,o.kt)("div",null,(0,o.kt)(i.Z,{mdxType:"ApiTabs"},(0,o.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"It return txId, electionId and the metadataURL for the newly created election. If metadataURL is returned\nempty, means that there is some issue with the storage provider.")),(0,o.kt)("div",null,(0,o.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(d.Z,{mdxType:"SchemaTabs"},(0,o.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(c.Z,{collapsible:!1,name:"txHash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"electionID",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"metadataURL",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(r.Z,{responseExample:'{\n  "txHash": "75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad",\n  "electionID": "0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845",\n  "metadataURL": "ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0},46601:()=>{},55024:()=>{}}]);