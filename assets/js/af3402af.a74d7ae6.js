(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6425],{40611:(e,t,i)=>{"use strict";i.d(t,{Z:()=>y});var n=i(87462),o=i(67294),a=i(86390),s=i(18694);const r={React:o,...o,Image:s.Ee,ElectionProvider:s.qT,ElectionHeader:s.UE,ElectionTitle:s.hi,ElectionSchedule:s.vE,ElectionResults:s.Hj,ElectionStatusBadge:s.QW,ElectionDescription:s.I3,ElectionQuestions:s.Vx,OrganizationProvider:s.f0,OrganizationAvatar:s.ld,OrganizationDescription:s.G9,OrganizationHeader:s.sC,OrganizationName:s.X5,Organization:s.cp};var c=i(170),l=i(39805),d=i(14902),h=i(23537);const u="f752b527e2aba395d1ba4c0de9c1471234567890",m="https://picsum.photos/seed/{seed}/1400/300",p={address:u,balance:0,nonce:123,electionIndex:13,account:new h.mR({languages:["en"],name:"Awesome Organization",description:"Description of Awesome organization",header:m.replace("{seed}",u),avatar:`https://picsum.photos/seed/${u}/300`,meta:[]})},f=`c5d2460186f7${u}020000000000`,g={electionCount:0,electionId:f,organizationId:"9b821aa92de2efc28ad6391fede437a92ce696d1",status:h.LD.RESULTS,startDate:"2023-06-27T03:01:10.621236881Z",endDate:"2023-07-17T05:49:16.598037746Z",voteCount:8,finalResults:!0,result:[["80","0","0"]],census:{censusOrigin:h.CU.OFF_CHAIN_TREE_WEIGHTED,censusRoot:"31755e98a4b7f6d0be2bb4071f05d45bbdb1c7871d37b1f93eb39d248d88ec9a",postRegisterCensusRoot:"",censusURL:"http://localhost:8080/census"},metadataURL:"ipfs://bafybeieo6pbbqvd4qhcsk4pdrv53tdkrdmtbjl273cumel27jurotdgszi",creationTime:"2023-06-27T03:01:00Z",voteMode:{serial:!1,anonymous:!1,encryptedVotes:!1,uniqueValues:!1,costFromWeight:!1},electionMode:{autoStart:!0,interruptible:!0,dynamicCensus:!0,encryptedMetaData:!1,preRegister:!1},tallyMode:{maxCount:1,maxValue:2,maxVoteOverwrites:0,maxTotalCost:2,costExponent:1e4},metadata:{title:{default:"My awesome election"},version:"1.1",description:{default:"My awesome election description"},media:{header:m.replace("{seed}",f)},questions:[{choices:[{title:{default:"Yes"},value:0},{title:{default:"No"},value:1}],description:{default:"Test question 1 description"},title:{default:"Test question 1"}}],results:{aggregation:"discrete-counting",display:"multiple-choice"},meta:void 0}},v=h.u_.build({census:new h.pT(g.census.censusRoot,g.census.censusURL,h.oN.censusTypeFromCensusOrigin(g.census.censusOrigin),4,BigInt("40")),creationTime:g.creationTime,electionCount:0,endDate:g.endDate,finalResults:g.finalResults,id:g.electionId,metadataURL:g.metadataURL,organizationId:g.organizationId,raw:g,results:g.result,status:g.status,title:g.metadata.title,description:g.metadata.description,voteCount:g.voteCount,header:g.metadata.media.header,questions:g.metadata.questions,startDate:g.startDate,voteType:g.voteMode,electionType:{autoStart:g.electionMode.autoStart,interruptible:g.electionMode.interruptible,dynamicCensus:g.electionMode.dynamicCensus,secretUntilTheEnd:g.voteMode.encryptedVotes,anonymous:g.voteMode.anonymous}}),y=(b=c.Z,function(e){return e.live?o.createElement(l.x,{theme:(0,d.B1)(s.rS),resetCSS:!1},o.createElement(s.de,{env:"stg"},o.createElement(s.f0,{organization:p},o.createElement(s.qT,{election:v},o.createElement(a.Z,(0,n.Z)({scope:r},e)))))):o.createElement(b,e)});var b},23761:(e,t,i)=>{"use strict";i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>v,frontMatter:()=>h,metadata:()=>m,toc:()=>f});var n=i(87462),o=(i(67294),i(3905)),a=i(26389),s=i(94891),r=(i(75190),i(47507)),c=i(24310),l=i(63303),d=(i(75035),i(85162));const h={id:"circuit-info",title:"Circuit info",description:"Returns the circuit configuration according to the current circuit",sidebar_label:"Circuit info",hide_title:!0,hide_table_of_contents:!0,api:{responses:{200:{content:{"application/json":{schema:{properties:{circuitPath:{description:"CircuitPath defines the path from where the files are downloaded.\nLocally, they will be cached inside circuit.BaseDir path,\nunder that directory it will follow the CircuitPath dir structure",type:"string"},levels:{description:"Levels refers the number of levels that the merkle tree associated to the\ncurrent circuit configuration artifacts has",type:"integer"},uri:{description:"URI defines the URI from where to download the files",type:"string"},vKeyFilename:{description:"FilenameVerificationKey defines the name of the file of the circom\nVerificationKey",type:"string"},vKeyHash:{description:"VerificationKeyHash contains the expected hash for the file filenameVK",type:"string"},wasmFilename:{description:"FilenameWasm defines the name of the file of the circuit wasm compiled\nversion",type:"string"},wasmHash:{description:"WasmHash contains the expected hash for the file filenameWasm",type:"string"},zKeyFilename:{description:"FilenameProvingKey defines the name of the file of the circom ProvingKey",type:"string"},zKeyHash:{description:"ProvingKeyHash contains the expected hash for the file filenameZKey",type:"string"}},type:"object"}}},description:"OK"}},tags:["Chain"],description:"Returns the circuit configuration according to the current circuit",method:"get",path:"/chain/info/circuit",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n- [**SIK**](sik): The Secret Identity Key is a user-generated piece of information that proves the user's identity without revealing it. It is the hash of the user's address, the signature of a public message and an optional secret part. It is used to ensure anonymous voting. All registered accounts or anonymous voters must register a SIK, and they are all stored in a Merkle tree. The `/siks` endpoints help to generate a proof of membership, get the current valid SIK roots, or check if an account has a valid SIK.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"Circuit info",description:{content:"Returns the circuit configuration according to the current circuit",type:"text/plain"},url:{path:["chain","info","circuit"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},u=void 0,m={unversionedId:"vocdoni-api/circuit-info",id:"vocdoni-api/circuit-info",title:"Circuit info",description:"Returns the circuit configuration according to the current circuit",source:"@site/docs/vocdoni-api/circuit-info.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/circuit-info",permalink:"/vocdoni-api/circuit-info",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"circuit-info",title:"Circuit info",description:"Returns the circuit configuration according to the current circuit",sidebar_label:"Circuit info",hide_title:!0,hide_table_of_contents:!0,api:{responses:{200:{content:{"application/json":{schema:{properties:{circuitPath:{description:"CircuitPath defines the path from where the files are downloaded.\nLocally, they will be cached inside circuit.BaseDir path,\nunder that directory it will follow the CircuitPath dir structure",type:"string"},levels:{description:"Levels refers the number of levels that the merkle tree associated to the\ncurrent circuit configuration artifacts has",type:"integer"},uri:{description:"URI defines the URI from where to download the files",type:"string"},vKeyFilename:{description:"FilenameVerificationKey defines the name of the file of the circom\nVerificationKey",type:"string"},vKeyHash:{description:"VerificationKeyHash contains the expected hash for the file filenameVK",type:"string"},wasmFilename:{description:"FilenameWasm defines the name of the file of the circuit wasm compiled\nversion",type:"string"},wasmHash:{description:"WasmHash contains the expected hash for the file filenameWasm",type:"string"},zKeyFilename:{description:"FilenameProvingKey defines the name of the file of the circom ProvingKey",type:"string"},zKeyHash:{description:"ProvingKeyHash contains the expected hash for the file filenameZKey",type:"string"}},type:"object"}}},description:"OK"}},tags:["Chain"],description:"Returns the circuit configuration according to the current circuit",method:"get",path:"/chain/info/circuit",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n- [**SIK**](sik): The Secret Identity Key is a user-generated piece of information that proves the user's identity without revealing it. It is the hash of the user's address, the signature of a public message and an optional secret part. It is used to ensure anonymous voting. All registered accounts or anonymous voters must register a SIK, and they are all stored in a Merkle tree. The `/siks` endpoints help to generate a proof of membership, get the current valid SIK roots, or check if an account has a valid SIK.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"Circuit info",description:{content:"Returns the circuit configuration according to the current circuit",type:"text/plain"},url:{path:["chain","info","circuit"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Vochain information",permalink:"/vocdoni-api/vochain-information"},next:{title:"Price factors information",permalink:"/vocdoni-api/price-factors-information"}},p={},f=[{value:"Circuit info",id:"circuit-info",level:2}],g={toc:f};function v(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"circuit-info"},"Circuit info"),(0,o.kt)("p",null,"Returns the circuit configuration according to the current circuit"),(0,o.kt)("div",null,(0,o.kt)(a.Z,{mdxType:"ApiTabs"},(0,o.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"OK")),(0,o.kt)("div",null,(0,o.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"SchemaTabs"},(0,o.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(c.Z,{collapsible:!1,name:"circuitPath",required:!1,deprecated:void 0,schemaDescription:"CircuitPath defines the path from where the files are downloaded.\nLocally, they will be cached inside circuit.BaseDir path,\nunder that directory it will follow the CircuitPath dir structure",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"levels",required:!1,deprecated:void 0,schemaDescription:"Levels refers the number of levels that the merkle tree associated to the\ncurrent circuit configuration artifacts has",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"uri",required:!1,deprecated:void 0,schemaDescription:"URI defines the URI from where to download the files",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"vKeyFilename",required:!1,deprecated:void 0,schemaDescription:"FilenameVerificationKey defines the name of the file of the circom\nVerificationKey",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"vKeyHash",required:!1,deprecated:void 0,schemaDescription:"VerificationKeyHash contains the expected hash for the file filenameVK",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"wasmFilename",required:!1,deprecated:void 0,schemaDescription:"FilenameWasm defines the name of the file of the circuit wasm compiled\nversion",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"wasmHash",required:!1,deprecated:void 0,schemaDescription:"WasmHash contains the expected hash for the file filenameWasm",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"zKeyFilename",required:!1,deprecated:void 0,schemaDescription:"FilenameProvingKey defines the name of the file of the circom ProvingKey",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"zKeyHash",required:!1,deprecated:void 0,schemaDescription:"ProvingKeyHash contains the expected hash for the file filenameZKey",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(r.Z,{responseExample:'{\n  "circuitPath": "string",\n  "levels": 0,\n  "uri": "string",\n  "vKeyFilename": "string",\n  "vKeyHash": "string",\n  "wasmFilename": "string",\n  "wasmHash": "string",\n  "zKeyFilename": "string",\n  "zKeyHash": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0},46601:()=>{},55024:()=>{}}]);