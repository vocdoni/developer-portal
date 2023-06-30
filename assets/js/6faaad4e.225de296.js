(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1106],{40611:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var i=n(87462),o=n(67294),s=n(86390),a=n(18694);const r={React:o,...o,Image:a.Ee,ElectionProvider:a.qT,ElectionHeader:a.UE,ElectionTitle:a.hi,ElectionSchedule:a.vE,ElectionStatusBadge:a.QW,ElectionDescription:a.I3,ElectionQuestions:a.Vx,OrganizationProvider:a.f0,OrganizationAvatar:a.ld,OrganizationDescription:a.G9,OrganizationHeader:a.sC,OrganizationName:a.X5,Organization:a.cp};var c=n(170),l=n(39805),d=n(14902),u=n(23537);const p="f752b527e2aba395d1ba4c0de9c1471234567890",h="https://picsum.photos/seed/{seed}/1400/300",m={address:p,balance:0,nonce:123,electionIndex:13,account:new u.mR({languages:["en"],name:"Awesome Organization",description:"Description of Awesome organization",header:h.replace("{seed}",p),avatar:`https://picsum.photos/seed/${p}/300`,meta:[]})},f=`c5d2460186f7${p}020000000000`,b={electionCount:0,electionId:f,organizationId:"9b821aa92de2efc28ad6391fede437a92ce696d1",status:u.LD.RESULTS,startDate:"2023-06-27T03:01:10.621236881Z",endDate:"2023-07-17T05:49:16.598037746Z",voteCount:8,finalResults:!0,result:[["80","0","0"]],census:{censusOrigin:u.CU.OFF_CHAIN_TREE_WEIGHTED,censusRoot:"31755e98a4b7f6d0be2bb4071f05d45bbdb1c7871d37b1f93eb39d248d88ec9a",postRegisterCensusRoot:"",censusURL:"http://localhost:8080/census"},metadataURL:"ipfs://bafybeieo6pbbqvd4qhcsk4pdrv53tdkrdmtbjl273cumel27jurotdgszi",creationTime:"2023-06-27T03:01:00Z",voteMode:{serial:!1,anonymous:!1,encryptedVotes:!1,uniqueValues:!1,costFromWeight:!1},electionMode:{autoStart:!0,interruptible:!0,dynamicCensus:!0,encryptedMetaData:!1,preRegister:!1},tallyMode:{maxCount:1,maxValue:2,maxVoteOverwrites:1,maxTotalCost:2,costExponent:1e4},metadata:{title:{default:"My awesome election"},version:"1.1",description:{default:"My awesome election description"},media:{header:h.replace("{seed}",f)},questions:[{choices:[{title:{default:"Yes"},value:0},{title:{default:"No"},value:1}],description:{default:"Test question 1 description"},title:{default:"Test question 1"}}],results:{aggregation:"discrete-counting",display:"multiple-choice"},meta:void 0}},y=u.u_.build({census:new u.pT(b.census.censusRoot,b.census.censusURL,u.oN.censusTypeFromCensusOrigin(b.census.censusOrigin),4,BigInt("40")),creationTime:b.creationTime,electionCount:0,endDate:b.endDate,finalResults:b.finalResults,id:b.electionId,metadataURL:b.metadataURL,organizationId:b.organizationId,raw:b,results:b.result,status:b.status,title:b.metadata.title,description:b.metadata.description,voteCount:b.voteCount,header:b.metadata.media.header,questions:b.metadata.questions,startDate:b.startDate,voteType:b.voteMode}),g=(v=c.Z,function(e){return e.live?o.createElement(l.x,{theme:(0,d.B1)(a.rS),resetCSS:!1},o.createElement(a.de,{env:"stg"},o.createElement(a.f0,{organization:m},o.createElement(a.qT,{election:y},o.createElement(s.Z,(0,i.Z)({scope:r},e)))))):o.createElement(v,e)});var v},3197:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>g,frontMatter:()=>p,metadata:()=>m,toc:()=>b});var i=n(87462),o=(n(67294),n(3905)),s=n(26389),a=n(94891),r=n(75190),c=n(47507),l=n(24310),d=n(63303),u=(n(75035),n(85162));const p={id:"election-scrutiny",title:"Election scrutiny",description:"Returns a given election consensus results and useful information about the results. Results represented with",sidebar_label:"Election scrutiny",hide_title:!0,hide_table_of_contents:!0,api:{description:"Returns a given election consensus results and useful information about the results. Results represented with\nBigInt strings.\n\n\nThis method can be used by anyone, but it is also used by Chainlink for fetching Vochain results and store it\nto the Results contract on an EVM network.\n\n\nFor discovering more about the on-chain results, please refer to\n[chainlink-tally](https://github.com/vocdoni/chainlink-tally#chainlink-tally) repository.",operationId:"electionScrutiny",tags:["Elections"],parameters:[{name:"electionId",in:"path",description:"Election Id on 0x format",required:!0,schema:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"}}],responses:{200:{description:"Return election consensus results",content:{"application/json":{schema:{type:"object",properties:{abiEncoded:{type:"string",example:"0xc5d2460186f712c22036657397736cf4be8d59b29f70c03609b802000000000000000000000000000000000012c220366573977..."},censusRoot:{type:"string",example:"tKh1sD9vmT6dr4BPZ6b8GDt6TZtjkKvLbX9W/xTTlLY="},electionID:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"},organizationId:{type:"string",example:"0x370372b92514d81a0e3efb8eba9d036ae0877653"},results:{type:"array",items:{type:"array",items:{type:"string"},example:["2520","2480","0"]}}}}}}},404:{description:"The specified resource was not found"}},method:"get",path:"/elections/{electionId}/scrutiny",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote.\n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go"},postman:{name:"Election scrutiny",description:{content:"Returns a given election consensus results and useful information about the results. Results represented with\nBigInt strings.\n\n\nThis method can be used by anyone, but it is also used by Chainlink for fetching Vochain results and store it\nto the Results contract on an EVM network.\n\n\nFor discovering more about the on-chain results, please refer to\n[chainlink-tally](https://github.com/vocdoni/chainlink-tally#chainlink-tally) repository.",type:"text/plain"},url:{path:["elections",":electionId","scrutiny"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Election Id on 0x format",type:"text/plain"},type:"any",value:"",key:"electionId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},h=void 0,m={unversionedId:"vocdoni-api/election-scrutiny",id:"vocdoni-api/election-scrutiny",title:"Election scrutiny",description:"Returns a given election consensus results and useful information about the results. Results represented with",source:"@site/docs/vocdoni-api/election-scrutiny.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/election-scrutiny",permalink:"/vocdoni-api/election-scrutiny",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"election-scrutiny",title:"Election scrutiny",description:"Returns a given election consensus results and useful information about the results. Results represented with",sidebar_label:"Election scrutiny",hide_title:!0,hide_table_of_contents:!0,api:{description:"Returns a given election consensus results and useful information about the results. Results represented with\nBigInt strings.\n\n\nThis method can be used by anyone, but it is also used by Chainlink for fetching Vochain results and store it\nto the Results contract on an EVM network.\n\n\nFor discovering more about the on-chain results, please refer to\n[chainlink-tally](https://github.com/vocdoni/chainlink-tally#chainlink-tally) repository.",operationId:"electionScrutiny",tags:["Elections"],parameters:[{name:"electionId",in:"path",description:"Election Id on 0x format",required:!0,schema:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"}}],responses:{200:{description:"Return election consensus results",content:{"application/json":{schema:{type:"object",properties:{abiEncoded:{type:"string",example:"0xc5d2460186f712c22036657397736cf4be8d59b29f70c03609b802000000000000000000000000000000000012c220366573977..."},censusRoot:{type:"string",example:"tKh1sD9vmT6dr4BPZ6b8GDt6TZtjkKvLbX9W/xTTlLY="},electionID:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"},organizationId:{type:"string",example:"0x370372b92514d81a0e3efb8eba9d036ae0877653"},results:{type:"array",items:{type:"array",items:{type:"string"},example:["2520","2480","0"]}}}}}}},404:{description:"The specified resource was not found"}},method:"get",path:"/elections/{electionId}/scrutiny",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote.\n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go"},postman:{name:"Election scrutiny",description:{content:"Returns a given election consensus results and useful information about the results. Results represented with\nBigInt strings.\n\n\nThis method can be used by anyone, but it is also used by Chainlink for fetching Vochain results and store it\nto the Results contract on an EVM network.\n\n\nFor discovering more about the on-chain results, please refer to\n[chainlink-tally](https://github.com/vocdoni/chainlink-tally#chainlink-tally) repository.",type:"text/plain"},url:{path:["elections",":electionId","scrutiny"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Election Id on 0x format",type:"text/plain"},type:"any",value:"",key:"electionId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Election keys",permalink:"/vocdoni-api/election-get-keys"},next:{title:"List election votes",permalink:"/vocdoni-api/election-votes"}},f={},b=[{value:"Election scrutiny",id:"election-scrutiny",level:2}],y={toc:b};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"election-scrutiny"},"Election scrutiny"),(0,o.kt)("p",null,"Returns a given election consensus results and useful information about the results. Results represented with\nBigInt strings."),(0,o.kt)("p",null,"This method can be used by anyone, but it is also used by Chainlink for fetching Vochain results and store it\nto the Results contract on an EVM network."),(0,o.kt)("p",null,"For discovering more about the on-chain results, please refer to\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/chainlink-tally#chainlink-tally"},"chainlink-tally")," repository."),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(r.Z,{className:"paramsItem",param:{name:"electionId",in:"path",description:"Election Id on 0x format",required:!0,schema:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"}},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(s.Z,{mdxType:"ApiTabs"},(0,o.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Return election consensus results")),(0,o.kt)("div",null,(0,o.kt)(a.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(d.Z,{mdxType:"SchemaTabs"},(0,o.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!1,name:"abiEncoded",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"censusRoot",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"electionID",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"organizationId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"results",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"array[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(c.Z,{responseExample:'{\n  "abiEncoded": "0xc5d2460186f712c22036657397736cf4be8d59b29f70c03609b802000000000000000000000000000000000012c220366573977...",\n  "censusRoot": "tKh1sD9vmT6dr4BPZ6b8GDt6TZtjkKvLbX9W/xTTlLY=",\n  "electionID": "0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845",\n  "organizationId": "0x370372b92514d81a0e3efb8eba9d036ae0877653",\n  "results": [\n    [\n      "2520",\n      "2480",\n      "0"\n    ]\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(u.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"The specified resource was not found")),(0,o.kt)("div",null)))))}g.isMDXComponent=!0},46601:()=>{},55024:()=>{}}]);