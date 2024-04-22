(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5122],{40611:(e,t,i)=>{"use strict";i.d(t,{Z:()=>f});var o=i(87462),n=i(67294),a=i(86390),s=i(18694);const r={React:n,...n,Image:s.Ee,ElectionProvider:s.qT,ElectionHeader:s.UE,ElectionTitle:s.hi,ElectionSchedule:s.vE,ElectionResults:s.Hj,ElectionStatusBadge:s.QW,ElectionDescription:s.I3,ElectionQuestions:s.Vx,OrganizationProvider:s.f0,OrganizationAvatar:s.ld,OrganizationDescription:s.G9,OrganizationHeader:s.sC,OrganizationName:s.X5,Organization:s.cp};var c=i(170),l=i(39805),d=i(14902),p=i(23537);const m="f752b527e2aba395d1ba4c0de9c1471234567890",u="https://picsum.photos/seed/{seed}/1400/300",h={address:m,balance:0,nonce:123,electionIndex:13,account:new p.mR({languages:["en"],name:"Awesome Organization",description:"Description of Awesome organization",header:u.replace("{seed}",m),avatar:`https://picsum.photos/seed/${m}/300`,meta:[]})},g=`c5d2460186f7${m}020000000000`,v={electionCount:0,electionId:g,organizationId:"9b821aa92de2efc28ad6391fede437a92ce696d1",status:p.LD.RESULTS,startDate:"2023-06-27T03:01:10.621236881Z",endDate:"2023-07-17T05:49:16.598037746Z",voteCount:8,finalResults:!0,result:[["80","0","0"]],census:{censusOrigin:p.CU.OFF_CHAIN_TREE_WEIGHTED,censusRoot:"31755e98a4b7f6d0be2bb4071f05d45bbdb1c7871d37b1f93eb39d248d88ec9a",postRegisterCensusRoot:"",censusURL:"http://localhost:8080/census"},metadataURL:"ipfs://bafybeieo6pbbqvd4qhcsk4pdrv53tdkrdmtbjl273cumel27jurotdgszi",creationTime:"2023-06-27T03:01:00Z",voteMode:{serial:!1,anonymous:!1,encryptedVotes:!1,uniqueValues:!1,costFromWeight:!1},electionMode:{autoStart:!0,interruptible:!0,dynamicCensus:!0,encryptedMetaData:!1,preRegister:!1},tallyMode:{maxCount:1,maxValue:2,maxVoteOverwrites:0,maxTotalCost:2,costExponent:1e4},metadata:{title:{default:"My awesome election"},version:"1.1",description:{default:"My awesome election description"},media:{header:u.replace("{seed}",g)},questions:[{choices:[{title:{default:"Yes"},value:0},{title:{default:"No"},value:1}],description:{default:"Test question 1 description"},title:{default:"Test question 1"}}],results:{aggregation:"discrete-counting",display:"multiple-choice"},meta:void 0}},y=p.u_.build({census:new p.pT(v.census.censusRoot,v.census.censusURL,p.oN.censusTypeFromCensusOrigin(v.census.censusOrigin),4,BigInt("40")),creationTime:v.creationTime,electionCount:0,endDate:v.endDate,finalResults:v.finalResults,id:v.electionId,metadataURL:v.metadataURL,organizationId:v.organizationId,raw:v,results:v.result,status:v.status,title:v.metadata.title,description:v.metadata.description,voteCount:v.voteCount,header:v.metadata.media.header,questions:v.metadata.questions,startDate:v.startDate,voteType:v.voteMode,electionType:{autoStart:v.electionMode.autoStart,interruptible:v.electionMode.interruptible,dynamicCensus:v.electionMode.dynamicCensus,secretUntilTheEnd:v.voteMode.encryptedVotes,anonymous:v.voteMode.anonymous}}),f=(b=c.Z,function(e){return e.live?n.createElement(l.x,{theme:(0,d.B1)(s.rS),resetCSS:!1},n.createElement(s.de,{env:"stg"},n.createElement(s.f0,{organization:h},n.createElement(s.qT,{election:y},n.createElement(a.Z,(0,o.Z)({scope:r},e)))))):n.createElement(b,e)});var b},61890:(e,t,i)=>{"use strict";i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>f,frontMatter:()=>m,metadata:()=>h,toc:()=>v});var o=i(87462),n=(i(67294),i(3905)),a=i(26389),s=i(94891),r=i(75190),c=i(47507),l=i(24310),d=i(63303),p=(i(75035),i(85162));const m={id:"list-election-votes",title:"List election votes",description:"Returns the list of voteIDs for an election (paginated)",sidebar_label:"List election votes",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Election id",in:"path",name:"electionID",required:!0,schema:{type:"string"}},{description:"Page ",in:"path",name:"page",required:!0,schema:{type:"number"}}],responses:{200:{content:{"application/json":{schema:{properties:{blockHeight:{type:"integer","x-omitempty":!0},date:{description:"Date when the vote was emitted",type:"string","x-omitempty":!0},electionID:{type:"string","x-omitempty":!0},encryptionKeys:{description:"Sent only for encrypted elections (no results until the end)",items:{type:"integer"},type:"array","x-omitempty":!0},number:{type:"integer","x-omitempty":!0},overwriteCount:{type:"integer","x-omitempty":!0},package:{description:"For encrypted elections this will be codified",items:{type:"integer"},type:"array","x-omitempty":!0},transactionIndex:{type:"integer","x-omitempty":!0},txHash:{type:"string","x-omitempty":!0},voteID:{type:"string","x-omitempty":!0},voterID:{type:"string","x-omitempty":!0},weight:{type:"string","x-omitempty":!0}},type:"object"}}},description:"OK"}},tags:["Elections"],description:"Returns the list of voteIDs for an election (paginated)",method:"get",path:"/elections/{electionID}/votes/page/{page}",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n- [**SIK**](sik): The Secret Identity Key is a user-generated piece of information that proves the user's identity without revealing it. It is the hash of the user's address, the signature of a public message and an optional secret part. It is used to ensure anonymous voting. All registered accounts or anonymous voters must register a SIK, and they are all stored in a Merkle tree. The `/siks` endpoints help to generate a proof of membership, get the current valid SIK roots, or check if an account has a valid SIK.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"List election votes",description:{content:"Returns the list of voteIDs for an election (paginated)",type:"text/plain"},url:{path:["elections",":electionID","votes","page",":page"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Election id",type:"text/plain"},type:"any",value:"",key:"electionID"},{disabled:!1,description:{content:"(Required) Page ",type:"text/plain"},type:"any",value:"",key:"page"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},u=void 0,h={unversionedId:"vocdoni-api/list-election-votes",id:"vocdoni-api/list-election-votes",title:"List election votes",description:"Returns the list of voteIDs for an election (paginated)",source:"@site/docs/vocdoni-api/list-election-votes.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/list-election-votes",permalink:"/vocdoni-api/list-election-votes",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-election-votes",title:"List election votes",description:"Returns the list of voteIDs for an election (paginated)",sidebar_label:"List election votes",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Election id",in:"path",name:"electionID",required:!0,schema:{type:"string"}},{description:"Page ",in:"path",name:"page",required:!0,schema:{type:"number"}}],responses:{200:{content:{"application/json":{schema:{properties:{blockHeight:{type:"integer","x-omitempty":!0},date:{description:"Date when the vote was emitted",type:"string","x-omitempty":!0},electionID:{type:"string","x-omitempty":!0},encryptionKeys:{description:"Sent only for encrypted elections (no results until the end)",items:{type:"integer"},type:"array","x-omitempty":!0},number:{type:"integer","x-omitempty":!0},overwriteCount:{type:"integer","x-omitempty":!0},package:{description:"For encrypted elections this will be codified",items:{type:"integer"},type:"array","x-omitempty":!0},transactionIndex:{type:"integer","x-omitempty":!0},txHash:{type:"string","x-omitempty":!0},voteID:{type:"string","x-omitempty":!0},voterID:{type:"string","x-omitempty":!0},weight:{type:"string","x-omitempty":!0}},type:"object"}}},description:"OK"}},tags:["Elections"],description:"Returns the list of voteIDs for an election (paginated)",method:"get",path:"/elections/{electionID}/votes/page/{page}",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n- [**SIK**](sik): The Secret Identity Key is a user-generated piece of information that proves the user's identity without revealing it. It is the hash of the user's address, the signature of a public message and an optional secret part. It is used to ensure anonymous voting. All registered accounts or anonymous voters must register a SIK, and they are all stored in a Merkle tree. The `/siks` endpoints help to generate a proof of membership, get the current valid SIK roots, or check if an account has a valid SIK.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"List election votes",description:{content:"Returns the list of voteIDs for an election (paginated)",type:"text/plain"},url:{path:["elections",":electionID","votes","page",":page"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Election id",type:"text/plain"},type:"any",value:"",key:"electionID"},{disabled:!1,description:{content:"(Required) Page ",type:"text/plain"},type:"any",value:"",key:"page"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"Count election votes",permalink:"/vocdoni-api/count-election-votes"},next:{title:"Compute IPFS CIDv1 of file",permalink:"/vocdoni-api/compute-ipfs-ci-dv-1-of-file"}},g={},v=[{value:"List election votes",id:"list-election-votes",level:2}],y={toc:v};function f(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"list-election-votes"},"List election votes"),(0,n.kt)("p",null,"Returns the list of voteIDs for an election (paginated)"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{description:"Election id",in:"path",name:"electionID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(r.Z,{className:"paramsItem",param:{description:"Page ",in:"path",name:"page",required:!0,schema:{type:"number"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(a.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"blockHeight",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"date",required:!1,deprecated:void 0,schemaDescription:"Date when the vote was emitted",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"electionID",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"encryptionKeys",required:!1,deprecated:void 0,schemaDescription:"Sent only for encrypted elections (no results until the end)",schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"number",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"overwriteCount",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"package",required:!1,deprecated:void 0,schemaDescription:"For encrypted elections this will be codified",schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"transactionIndex",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"txHash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"voteID",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"voterID",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"weight",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(c.Z,{responseExample:'{\n  "blockHeight": 0,\n  "date": "string",\n  "electionID": "string",\n  "encryptionKeys": [\n    0\n  ],\n  "number": 0,\n  "overwriteCount": 0,\n  "package": [\n    0\n  ],\n  "transactionIndex": 0,\n  "txHash": "string",\n  "voteID": "string",\n  "voterID": "string",\n  "weight": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0},46601:()=>{},55024:()=>{}}]);