(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6220],{40611:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v});var i=a(87462),s=a(67294),o=a(86390),n=a(18694);const r={React:s,...s,Image:n.Ee,ElectionProvider:n.qT,ElectionHeader:n.UE,ElectionTitle:n.hi,ElectionSchedule:n.vE,ElectionStatusBadge:n.QW,ElectionDescription:n.I3,ElectionQuestions:n.Vx,OrganizationProvider:n.f0,OrganizationAvatar:n.ld,OrganizationDescription:n.G9,OrganizationHeader:n.sC,OrganizationName:n.X5,Organization:n.cp};var l=a(170),c=a(39805),d=a(14902),p=a(23537);const h="f752b527e2aba395d1ba4c0de9c1471234567890",m="https://picsum.photos/seed/{seed}/1400/300",u={address:h,balance:0,nonce:123,electionIndex:13,account:new p.mR({languages:["en"],name:"Awesome Organization",description:"Description of Awesome organization",header:m.replace("{seed}",h),avatar:`https://picsum.photos/seed/${h}/300`,meta:[]})},y=`c5d2460186f7${h}020000000000`,g={electionCount:0,electionId:y,organizationId:"9b821aa92de2efc28ad6391fede437a92ce696d1",status:p.LD.RESULTS,startDate:"2023-06-27T03:01:10.621236881Z",endDate:"2023-07-17T05:49:16.598037746Z",voteCount:8,finalResults:!0,result:[["80","0","0"]],census:{censusOrigin:p.CU.OFF_CHAIN_TREE_WEIGHTED,censusRoot:"31755e98a4b7f6d0be2bb4071f05d45bbdb1c7871d37b1f93eb39d248d88ec9a",postRegisterCensusRoot:"",censusURL:"http://localhost:8080/census"},metadataURL:"ipfs://bafybeieo6pbbqvd4qhcsk4pdrv53tdkrdmtbjl273cumel27jurotdgszi",creationTime:"2023-06-27T03:01:00Z",voteMode:{serial:!1,anonymous:!1,encryptedVotes:!1,uniqueValues:!1,costFromWeight:!1},electionMode:{autoStart:!0,interruptible:!0,dynamicCensus:!0,encryptedMetaData:!1,preRegister:!1},tallyMode:{maxCount:1,maxValue:2,maxVoteOverwrites:1,maxTotalCost:2,costExponent:1e4},metadata:{title:{default:"My awesome election"},version:"1.1",description:{default:"My awesome election description"},media:{header:m.replace("{seed}",y)},questions:[{choices:[{title:{default:"Yes"},value:0},{title:{default:"No"},value:1}],description:{default:"Test question 1 description"},title:{default:"Test question 1"}}],results:{aggregation:"discrete-counting",display:"multiple-choice"},meta:void 0}},b=p.u_.build({census:new p.pT(g.census.censusRoot,g.census.censusURL,p.oN.censusTypeFromCensusOrigin(g.census.censusOrigin),4,BigInt("40")),creationTime:g.creationTime,electionCount:0,endDate:g.endDate,finalResults:g.finalResults,id:g.electionId,metadataURL:g.metadataURL,organizationId:g.organizationId,raw:g,results:g.result,status:g.status,title:g.metadata.title,description:g.metadata.description,voteCount:g.voteCount,header:g.metadata.media.header,questions:g.metadata.questions,startDate:g.startDate,voteType:g.voteMode}),v=(f=l.Z,function(e){return e.live?s.createElement(c.x,{theme:(0,d.B1)(n.rS),resetCSS:!1},s.createElement(n.de,{env:"stg"},s.createElement(n.f0,{organization:u},s.createElement(n.qT,{election:b},s.createElement(o.Z,(0,i.Z)({scope:r},e)))))):s.createElement(f,e)});var f},21848:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>v,frontMatter:()=>h,metadata:()=>u,toc:()=>g});var i=a(87462),s=(a(67294),a(3905)),o=a(26389),n=a(94891),r=a(75190),l=a(47507),c=a(24310),d=a(63303),p=(a(75035),a(85162));const h={id:"get-block-by-height",title:"Get block (by height)",description:"Returns the full block information at the given height",sidebar_label:"Get block (by height)",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Block height",in:"path",name:"height",required:!0,schema:{type:"integer"}}],responses:{200:{content:{"application/json":{schema:{properties:{data:{properties:{txs:{description:"Txs that will be applied by state @ block.Height+1.\nNOTE: not all txs here are valid.  We're just agreeing on the order first.\nThis means that block.AppHash does not include these txs.",items:{items:{type:"integer"},type:"array"},type:"array"}},type:"object"},evidence:{properties:{evidence:{items:{},type:"array"}},type:"object"},hash:{type:"string"},header:{properties:{app_hash:{description:"state after txs from the previous block",items:{type:"integer"},type:"array"},chain_id:{type:"string"},consensus_hash:{description:"consensus params for current block",items:{type:"integer"},type:"array"},data_hash:{description:"transactions",items:{type:"integer"},type:"array"},evidence_hash:{description:"consensus info",items:{type:"integer"},type:"array"},height:{type:"integer"},last_block_id:{allOf:[{properties:{hash:{items:{type:"integer"},type:"array"},parts:{properties:{hash:{items:{type:"integer"},type:"array"},total:{type:"integer"}},type:"object"}},type:"object"}],description:"prev block info"},last_commit_hash:{description:"hashes of block data",items:{type:"integer"},type:"array"},last_results_hash:{description:"root hash of all results from the txs from the previous block\nsee `deterministicResponseDeliverTx` to understand which parts of a tx is hashed into here",items:{type:"integer"},type:"array"},next_validators_hash:{description:"validators for the next block",items:{type:"integer"},type:"array"},proposer_address:{description:"original proposer of the block",items:{type:"integer"},type:"array"},time:{type:"string"},validators_hash:{description:"hashes from the app output from the prev block",items:{type:"integer"},type:"array"},version:{allOf:[{properties:{app:{type:"integer"},block:{type:"integer"}},type:"object"}],description:"basic block info"}},type:"object"},last_commit:{properties:{block_id:{properties:{hash:{items:{type:"integer"},type:"array"},parts:{properties:{hash:{items:{type:"integer"},type:"array"},total:{type:"integer"}},type:"object"}},type:"object"},height:{description:"NOTE: The signatures are in order of address to preserve the bonded\nValidatorSet order.\nAny peer with a block can gossip signatures by index with a peer without\nrecalculating the active ValidatorSet.",type:"integer"},round:{type:"integer"},signatures:{items:{properties:{block_id_flag:{enum:[1,2,3],type:"integer","x-enum-varnames":["BlockIDFlagAbsent","BlockIDFlagCommit","BlockIDFlagNil"]},signature:{items:{type:"integer"},type:"array"},timestamp:{type:"string"},validator_address:{items:{type:"integer"},type:"array"}},type:"object"},type:"array"}},type:"object"}},type:"object"}}},description:"OK"}},tags:["Chain"],description:"Returns the full block information at the given height",method:"get",path:"/chain/blocks/{height}",servers:[{url:"https:/api-dev.vocdoni.net/v2/"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"Get block (by height)",description:{content:"Returns the full block information at the given height",type:"text/plain"},url:{path:["chain","blocks",":height"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Block height",type:"text/plain"},type:"any",value:"",key:"height"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},m=void 0,u={unversionedId:"vocdoni-api/get-block-by-height",id:"vocdoni-api/get-block-by-height",title:"Get block (by height)",description:"Returns the full block information at the given height",source:"@site/docs/vocdoni-api/get-block-by-height.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/get-block-by-height",permalink:"/vocdoni-api/get-block-by-height",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-block-by-height",title:"Get block (by height)",description:"Returns the full block information at the given height",sidebar_label:"Get block (by height)",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Block height",in:"path",name:"height",required:!0,schema:{type:"integer"}}],responses:{200:{content:{"application/json":{schema:{properties:{data:{properties:{txs:{description:"Txs that will be applied by state @ block.Height+1.\nNOTE: not all txs here are valid.  We're just agreeing on the order first.\nThis means that block.AppHash does not include these txs.",items:{items:{type:"integer"},type:"array"},type:"array"}},type:"object"},evidence:{properties:{evidence:{items:{},type:"array"}},type:"object"},hash:{type:"string"},header:{properties:{app_hash:{description:"state after txs from the previous block",items:{type:"integer"},type:"array"},chain_id:{type:"string"},consensus_hash:{description:"consensus params for current block",items:{type:"integer"},type:"array"},data_hash:{description:"transactions",items:{type:"integer"},type:"array"},evidence_hash:{description:"consensus info",items:{type:"integer"},type:"array"},height:{type:"integer"},last_block_id:{allOf:[{properties:{hash:{items:{type:"integer"},type:"array"},parts:{properties:{hash:{items:{type:"integer"},type:"array"},total:{type:"integer"}},type:"object"}},type:"object"}],description:"prev block info"},last_commit_hash:{description:"hashes of block data",items:{type:"integer"},type:"array"},last_results_hash:{description:"root hash of all results from the txs from the previous block\nsee `deterministicResponseDeliverTx` to understand which parts of a tx is hashed into here",items:{type:"integer"},type:"array"},next_validators_hash:{description:"validators for the next block",items:{type:"integer"},type:"array"},proposer_address:{description:"original proposer of the block",items:{type:"integer"},type:"array"},time:{type:"string"},validators_hash:{description:"hashes from the app output from the prev block",items:{type:"integer"},type:"array"},version:{allOf:[{properties:{app:{type:"integer"},block:{type:"integer"}},type:"object"}],description:"basic block info"}},type:"object"},last_commit:{properties:{block_id:{properties:{hash:{items:{type:"integer"},type:"array"},parts:{properties:{hash:{items:{type:"integer"},type:"array"},total:{type:"integer"}},type:"object"}},type:"object"},height:{description:"NOTE: The signatures are in order of address to preserve the bonded\nValidatorSet order.\nAny peer with a block can gossip signatures by index with a peer without\nrecalculating the active ValidatorSet.",type:"integer"},round:{type:"integer"},signatures:{items:{properties:{block_id_flag:{enum:[1,2,3],type:"integer","x-enum-varnames":["BlockIDFlagAbsent","BlockIDFlagCommit","BlockIDFlagNil"]},signature:{items:{type:"integer"},type:"array"},timestamp:{type:"string"},validator_address:{items:{type:"integer"},type:"array"}},type:"object"},type:"array"}},type:"object"}},type:"object"}}},description:"OK"}},tags:["Chain"],description:"Returns the full block information at the given height",method:"get",path:"/chain/blocks/{height}",servers:[{url:"https:/api-dev.vocdoni.net/v2/"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"Get block (by height)",description:{content:"Returns the full block information at the given height",type:"text/plain"},url:{path:["chain","blocks",":height"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Block height",type:"text/plain"},type:"any",value:"",key:"height"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Get block (by hash)",permalink:"/vocdoni-api/get-block-by-hash"},next:{title:"Transactions in a block",permalink:"/vocdoni-api/transactions-in-a-block"}},y={},g=[{value:"Get block (by height)",id:"get-block-by-height",level:2}],b={toc:g};function v(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-block-by-height"},"Get block (by height)"),(0,s.kt)("p",null,"Returns the full block information at the given height"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{description:"Block height",in:"path",name:"height",required:!0,schema:{type:"integer"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"data"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"txs",required:!1,deprecated:void 0,schemaDescription:"Txs that will be applied by state @ block.Height+1.\nNOTE: not all txs here are valid.  We're just agreeing on the order first.\nThis means that block.AppHash does not include these txs.",schemaName:"array[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"evidence"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"evidence",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!1,name:"hash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"header"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"app_hash",required:!1,deprecated:void 0,schemaDescription:"state after txs from the previous block",schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"chain_id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"consensus_hash",required:!1,deprecated:void 0,schemaDescription:"consensus params for current block",schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"data_hash",required:!1,deprecated:void 0,schemaDescription:"transactions",schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"evidence_hash",required:!1,deprecated:void 0,schemaDescription:"consensus info",schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"height",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"last_block_id"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"hash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"parts"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"hash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"total",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(c.Z,{collapsible:!1,name:"last_commit_hash",required:!1,deprecated:void 0,schemaDescription:"hashes of block data",schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"last_results_hash",required:!1,deprecated:void 0,schemaDescription:"root hash of all results from the txs from the previous block\nsee `deterministicResponseDeliverTx` to understand which parts of a tx is hashed into here",schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"next_validators_hash",required:!1,deprecated:void 0,schemaDescription:"validators for the next block",schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"proposer_address",required:!1,deprecated:void 0,schemaDescription:"original proposer of the block",schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"time",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"validators_hash",required:!1,deprecated:void 0,schemaDescription:"hashes from the app output from the prev block",schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"version"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"app",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"block",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"last_commit"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"block_id"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"hash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"parts"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"hash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"total",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(c.Z,{collapsible:!1,name:"height",required:!1,deprecated:void 0,schemaDescription:"NOTE: The signatures are in order of address to preserve the bonded\nValidatorSet order.\nAny peer with a block can gossip signatures by index with a peer without\nrecalculating the active ValidatorSet.",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"round",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"signatures"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"block_id_flag",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:"**Possible values:** [`1`, `2`, `3`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"signature",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"timestamp",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"validator_address",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "data": {\n    "txs": [\n      [\n        0\n      ]\n    ]\n  },\n  "evidence": {\n    "evidence": [\n      null\n    ]\n  },\n  "hash": "string",\n  "header": {\n    "app_hash": [\n      0\n    ],\n    "chain_id": "string",\n    "consensus_hash": [\n      0\n    ],\n    "data_hash": [\n      0\n    ],\n    "evidence_hash": [\n      0\n    ],\n    "height": 0,\n    "last_block_id": {\n      "hash": [\n        0\n      ],\n      "parts": {\n        "hash": [\n          0\n        ],\n        "total": 0\n      }\n    },\n    "last_commit_hash": [\n      0\n    ],\n    "last_results_hash": [\n      0\n    ],\n    "next_validators_hash": [\n      0\n    ],\n    "proposer_address": [\n      0\n    ],\n    "time": "string",\n    "validators_hash": [\n      0\n    ],\n    "version": {\n      "app": 0,\n      "block": 0\n    }\n  },\n  "last_commit": {\n    "block_id": {\n      "hash": [\n        0\n      ],\n      "parts": {\n        "hash": [\n          0\n        ],\n        "total": 0\n      }\n    },\n    "height": 0,\n    "round": 0,\n    "signatures": [\n      {\n        "block_id_flag": 1,\n        "signature": [\n          0\n        ],\n        "timestamp": "string",\n        "validator_address": [\n          0\n        ]\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0},46601:()=>{},55024:()=>{}}]);