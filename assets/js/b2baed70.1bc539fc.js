(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[806],{40611:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var a=n(87462),s=n(67294),o=n(86390),i=n(18694);const r={React:s,...s,Image:i.Ee,ElectionProvider:i.qT,ElectionHeader:i.UE,ElectionTitle:i.hi,ElectionSchedule:i.vE,ElectionStatusBadge:i.QW,ElectionDescription:i.I3,ElectionQuestions:i.Vx,OrganizationProvider:i.f0,OrganizationAvatar:i.ld,OrganizationDescription:i.G9,OrganizationHeader:i.sC,OrganizationName:i.X5,Organization:i.cp};var d=n(170),c=n(39805),l=n(14902),p=n(23537);const u="f752b527e2aba395d1ba4c0de9c1471234567890",h="https://picsum.photos/seed/{seed}/1400/300",m={address:u,balance:0,nonce:123,electionIndex:13,account:new p.mR({languages:["en"],name:"Awesome Organization",description:"Description of Awesome organization",header:h.replace("{seed}",u),avatar:`https://picsum.photos/seed/${u}/300`,meta:[]})},y=`c5d2460186f7${u}020000000000`,f={electionCount:0,electionId:y,organizationId:"9b821aa92de2efc28ad6391fede437a92ce696d1",status:p.LD.RESULTS,startDate:"2023-06-27T03:01:10.621236881Z",endDate:"2023-07-17T05:49:16.598037746Z",voteCount:8,finalResults:!0,result:[["80","0","0"]],census:{censusOrigin:p.CU.OFF_CHAIN_TREE_WEIGHTED,censusRoot:"31755e98a4b7f6d0be2bb4071f05d45bbdb1c7871d37b1f93eb39d248d88ec9a",postRegisterCensusRoot:"",censusURL:"http://localhost:8080/census"},metadataURL:"ipfs://bafybeieo6pbbqvd4qhcsk4pdrv53tdkrdmtbjl273cumel27jurotdgszi",creationTime:"2023-06-27T03:01:00Z",voteMode:{serial:!1,anonymous:!1,encryptedVotes:!1,uniqueValues:!1,costFromWeight:!1},electionMode:{autoStart:!0,interruptible:!0,dynamicCensus:!0,encryptedMetaData:!1,preRegister:!1},tallyMode:{maxCount:1,maxValue:2,maxVoteOverwrites:1,maxTotalCost:2,costExponent:1e4},metadata:{title:{default:"My awesome election"},version:"1.1",description:{default:"My awesome election description"},media:{header:h.replace("{seed}",y)},questions:[{choices:[{title:{default:"Yes"},value:0},{title:{default:"No"},value:1}],description:{default:"Test question 1 description"},title:{default:"Test question 1"}}],results:{aggregation:"discrete-counting",display:"multiple-choice"},meta:void 0}},g=p.u_.build({census:new p.pT(f.census.censusRoot,f.census.censusURL,p.oN.censusTypeFromCensusOrigin(f.census.censusOrigin),4,BigInt("40")),creationTime:f.creationTime,electionCount:0,endDate:f.endDate,finalResults:f.finalResults,id:f.electionId,metadataURL:f.metadataURL,organizationId:f.organizationId,raw:f,results:f.result,status:f.status,title:f.metadata.title,description:f.metadata.description,voteCount:f.voteCount,header:f.metadata.media.header,questions:f.metadata.questions,startDate:f.startDate,voteType:f.voteMode}),v=(b=d.Z,function(e){return e.live?s.createElement(c.x,{theme:(0,l.B1)(i.rS),resetCSS:!1},s.createElement(i.de,{env:"stg"},s.createElement(i.f0,{organization:m},s.createElement(i.qT,{election:g},s.createElement(o.Z,(0,a.Z)({scope:r},e)))))):s.createElement(b,e)});var b},15615:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>h,toc:()=>y});var a=n(87462),s=(n(67294),n(3905)),o=n(26389),i=n(94891),r=(n(75190),n(47507)),d=n(24310),c=n(63303),l=(n(75035),n(85162));const p={id:"updates-the-secret-identity-key-of-an-address",title:"Updates the Secret Identity Key of an Address",description:"Updates the Secret Identity Key of an Address",sidebar_label:"Updates the Secret Identity Key of an Address",hide_title:!0,hide_table_of_contents:!0,api:{responses:{200:{content:{"*/*":{schema:{properties:{txHash:{type:"string"},txPayload:{items:{type:"integer"},type:"array"}},type:"object"}}},description:"OK"}},description:"Updates the Secret Identity Key of an Address",method:"post",path:"/accounts/sik",servers:[{url:"https:/api-dev.vocdoni.net/v2/"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"Updates the Secret Identity Key of an Address",description:{content:"Updates the Secret Identity Key of an Address",type:"text/plain"},url:{path:["accounts","sik"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},u=void 0,h={unversionedId:"vocdoni-api/updates-the-secret-identity-key-of-an-address",id:"vocdoni-api/updates-the-secret-identity-key-of-an-address",title:"Updates the Secret Identity Key of an Address",description:"Updates the Secret Identity Key of an Address",source:"@site/docs/vocdoni-api/updates-the-secret-identity-key-of-an-address.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/updates-the-secret-identity-key-of-an-address",permalink:"/vocdoni-api/updates-the-secret-identity-key-of-an-address",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"updates-the-secret-identity-key-of-an-address",title:"Updates the Secret Identity Key of an Address",description:"Updates the Secret Identity Key of an Address",sidebar_label:"Updates the Secret Identity Key of an Address",hide_title:!0,hide_table_of_contents:!0,api:{responses:{200:{content:{"*/*":{schema:{properties:{txHash:{type:"string"},txPayload:{items:{type:"integer"},type:"array"}},type:"object"}}},description:"OK"}},description:"Updates the Secret Identity Key of an Address",method:"post",path:"/accounts/sik",servers:[{url:"https:/api-dev.vocdoni.net/v2/"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"Updates the Secret Identity Key of an Address",description:{content:"Updates the Secret Identity Key of an Address",type:"text/plain"},url:{path:["accounts","sik"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Transfer tokens",permalink:"/vocdoni-api/transfer-tokens"}},m={},y=[{value:"Updates the Secret Identity Key of an Address",id:"updates-the-secret-identity-key-of-an-address",level:2}],f={toc:y};function g(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"updates-the-secret-identity-key-of-an-address"},"Updates the Secret Identity Key of an Address"),(0,s.kt)("p",null,"Updates the Secret Identity Key of an Address"),(0,s.kt)("div",null,(0,s.kt)(o.Z,{mdxType:"ApiTabs"},(0,s.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"txHash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"txPayload",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "txHash": "string",\n  "txPayload": [\n    0\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0},46601:()=>{},55024:()=>{}}]);