(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1528],{40611:(e,t,a)=>{"use strict";a.d(t,{Z:()=>b});var s=a(87462),o=a(67294),i=a(86390),n=a(18694);const r={React:o,...o,Image:n.Ee,ElectionProvider:n.qT,ElectionHeader:n.UE,ElectionTitle:n.hi,ElectionSchedule:n.vE,ElectionResults:n.Hj,ElectionStatusBadge:n.QW,ElectionDescription:n.I3,ElectionQuestions:n.Vx,OrganizationProvider:n.f0,OrganizationAvatar:n.ld,OrganizationDescription:n.G9,OrganizationHeader:n.sC,OrganizationName:n.X5,Organization:n.cp};var d=a(170),c=a(39805),l=a(14902),u=a(23537);const h="f752b527e2aba395d1ba4c0de9c1471234567890",p="https://picsum.photos/seed/{seed}/1400/300",m={address:h,balance:0,nonce:123,electionIndex:13,account:new u.mR({languages:["en"],name:"Awesome Organization",description:"Description of Awesome organization",header:p.replace("{seed}",h),avatar:`https://picsum.photos/seed/${h}/300`,meta:[]})},v=`c5d2460186f7${h}020000000000`,f={electionCount:0,electionId:v,organizationId:"9b821aa92de2efc28ad6391fede437a92ce696d1",status:u.LD.RESULTS,startDate:"2023-06-27T03:01:10.621236881Z",endDate:"2023-07-17T05:49:16.598037746Z",voteCount:8,finalResults:!0,result:[["80","0","0"]],census:{censusOrigin:u.CU.OFF_CHAIN_TREE_WEIGHTED,censusRoot:"31755e98a4b7f6d0be2bb4071f05d45bbdb1c7871d37b1f93eb39d248d88ec9a",postRegisterCensusRoot:"",censusURL:"http://localhost:8080/census"},metadataURL:"ipfs://bafybeieo6pbbqvd4qhcsk4pdrv53tdkrdmtbjl273cumel27jurotdgszi",creationTime:"2023-06-27T03:01:00Z",voteMode:{serial:!1,anonymous:!1,encryptedVotes:!1,uniqueValues:!1,costFromWeight:!1},electionMode:{autoStart:!0,interruptible:!0,dynamicCensus:!0,encryptedMetaData:!1,preRegister:!1},tallyMode:{maxCount:1,maxValue:2,maxVoteOverwrites:0,maxTotalCost:2,costExponent:1e4},metadata:{title:{default:"My awesome election"},version:"1.1",description:{default:"My awesome election description"},media:{header:p.replace("{seed}",v)},questions:[{choices:[{title:{default:"Yes"},value:0},{title:{default:"No"},value:1}],description:{default:"Test question 1 description"},title:{default:"Test question 1"}}],results:{aggregation:"discrete-counting",display:"multiple-choice"},meta:void 0}},g=u.u_.build({census:new u.pT(f.census.censusRoot,f.census.censusURL,u.oN.censusTypeFromCensusOrigin(f.census.censusOrigin),4,BigInt("40")),creationTime:f.creationTime,electionCount:0,endDate:f.endDate,finalResults:f.finalResults,id:f.electionId,metadataURL:f.metadataURL,organizationId:f.organizationId,raw:f,results:f.result,status:f.status,title:f.metadata.title,description:f.metadata.description,voteCount:f.voteCount,header:f.metadata.media.header,questions:f.metadata.questions,startDate:f.startDate,voteType:f.voteMode,electionType:{autoStart:f.electionMode.autoStart,interruptible:f.electionMode.interruptible,dynamicCensus:f.electionMode.dynamicCensus,secretUntilTheEnd:f.voteMode.encryptedVotes,anonymous:f.voteMode.anonymous}}),b=(y=d.Z,function(e){return e.live?o.createElement(c.x,{theme:(0,l.B1)(n.rS),resetCSS:!1},o.createElement(n.de,{env:"stg"},o.createElement(n.f0,{organization:m},o.createElement(n.qT,{election:g},o.createElement(i.Z,(0,s.Z)({scope:r},e)))))):o.createElement(y,e)});var y},76382:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>g,frontMatter:()=>u,metadata:()=>p,toc:()=>v});var s=a(87462),o=(a(67294),a(3905)),i=a(26389),n=a(94891),r=(a(75190),a(47507)),d=a(24310),c=a(63303),l=(a(75035),a(85162));const u={id:"returns-if-the-address-provided-has-a-valid-sik",title:"Returns if the address provided has a valid SIK",description:"Returns if the address provided, associated to an a registered account or not, has a valid SIK already registered or not.",sidebar_label:"Returns if the address provided has a valid SIK",hide_title:!0,hide_table_of_contents:!0,api:{responses:{200:{content:{"application/json":{schema:{properties:{sik:{type:"string"}},type:"object"}}},description:"OK"}},tags:["SIK"],description:"Returns if the address provided, associated to an a registered account or not, has a valid SIK already registered or not.",method:"get",path:"/siks/{address}",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n- [**SIK**](sik): The Secret Identity Key is a user-generated piece of information that proves the user's identity without revealing it. It is the hash of the user's address, the signature of a public message and an optional secret part. It is used to ensure anonymous voting. All registered accounts or anonymous voters must register a SIK, and they are all stored in a Merkle tree. The `/siks` endpoints help to generate a proof of membership, get the current valid SIK roots, or check if an account has a valid SIK.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"Returns if the address provided has a valid SIK",description:{content:"Returns if the address provided, associated to an a registered account or not, has a valid SIK already registered or not.",type:"text/plain"},url:{path:["siks",":address"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},h=void 0,p={unversionedId:"vocdoni-api/returns-if-the-address-provided-has-a-valid-sik",id:"vocdoni-api/returns-if-the-address-provided-has-a-valid-sik",title:"Returns if the address provided has a valid SIK",description:"Returns if the address provided, associated to an a registered account or not, has a valid SIK already registered or not.",source:"@site/docs/vocdoni-api/returns-if-the-address-provided-has-a-valid-sik.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/returns-if-the-address-provided-has-a-valid-sik",permalink:"/vocdoni-api/returns-if-the-address-provided-has-a-valid-sik",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"returns-if-the-address-provided-has-a-valid-sik",title:"Returns if the address provided has a valid SIK",description:"Returns if the address provided, associated to an a registered account or not, has a valid SIK already registered or not.",sidebar_label:"Returns if the address provided has a valid SIK",hide_title:!0,hide_table_of_contents:!0,api:{responses:{200:{content:{"application/json":{schema:{properties:{sik:{type:"string"}},type:"object"}}},description:"OK"}},tags:["SIK"],description:"Returns if the address provided, associated to an a registered account or not, has a valid SIK already registered or not.",method:"get",path:"/siks/{address}",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n- [**SIK**](sik): The Secret Identity Key is a user-generated piece of information that proves the user's identity without revealing it. It is the hash of the user's address, the signature of a public message and an optional secret part. It is used to ensure anonymous voting. All registered accounts or anonymous voters must register a SIK, and they are all stored in a Merkle tree. The `/siks` endpoints help to generate a proof of membership, get the current valid SIK roots, or check if an account has a valid SIK.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"Returns if the address provided has a valid SIK",description:{content:"Returns if the address provided, associated to an a registered account or not, has a valid SIK already registered or not.",type:"text/plain"},url:{path:["siks",":address"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"List of valid SIK roots",permalink:"/vocdoni-api/list-of-valid-sik-roots"}},m={},v=[{value:"Returns if the address provided has a valid SIK",id:"returns-if-the-address-provided-has-a-valid-sik",level:2}],f={toc:v};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,s.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"returns-if-the-address-provided-has-a-valid-sik"},"Returns if the address provided has a valid SIK"),(0,o.kt)("p",null,"Returns if the address provided, associated to an a registered account or not, has a valid SIK already registered or not."),(0,o.kt)("div",null,(0,o.kt)(i.Z,{mdxType:"ApiTabs"},(0,o.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"OK")),(0,o.kt)("div",null,(0,o.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(c.Z,{mdxType:"SchemaTabs"},(0,o.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"sik",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(r.Z,{responseExample:'{\n  "sik": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0},46601:()=>{},55024:()=>{}}]);