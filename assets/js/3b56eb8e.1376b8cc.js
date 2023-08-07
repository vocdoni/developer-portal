(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5978],{40611:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var s=n(87462),a=n(67294),i=n(86390),o=n(18694);const r={React:a,...a,Image:o.Ee,ElectionProvider:o.qT,ElectionHeader:o.UE,ElectionTitle:o.hi,ElectionSchedule:o.vE,ElectionResults:o.Hj,ElectionStatusBadge:o.QW,ElectionDescription:o.I3,ElectionQuestions:o.Vx,OrganizationProvider:o.f0,OrganizationAvatar:o.ld,OrganizationDescription:o.G9,OrganizationHeader:o.sC,OrganizationName:o.X5,Organization:o.cp};var c=n(170),d=n(39805),u=n(14902),l=n(23537);const p="f752b527e2aba395d1ba4c0de9c1471234567890",h="https://picsum.photos/seed/{seed}/1400/300",m={address:p,balance:0,nonce:123,electionIndex:13,account:new l.mR({languages:["en"],name:"Awesome Organization",description:"Description of Awesome organization",header:h.replace("{seed}",p),avatar:`https://picsum.photos/seed/${p}/300`,meta:[]})},b=`c5d2460186f7${p}020000000000`,y={electionCount:0,electionId:b,organizationId:"9b821aa92de2efc28ad6391fede437a92ce696d1",status:l.LD.RESULTS,startDate:"2023-06-27T03:01:10.621236881Z",endDate:"2023-07-17T05:49:16.598037746Z",voteCount:8,finalResults:!0,result:[["80","0","0"]],census:{censusOrigin:l.CU.OFF_CHAIN_TREE_WEIGHTED,censusRoot:"31755e98a4b7f6d0be2bb4071f05d45bbdb1c7871d37b1f93eb39d248d88ec9a",postRegisterCensusRoot:"",censusURL:"http://localhost:8080/census"},metadataURL:"ipfs://bafybeieo6pbbqvd4qhcsk4pdrv53tdkrdmtbjl273cumel27jurotdgszi",creationTime:"2023-06-27T03:01:00Z",voteMode:{serial:!1,anonymous:!1,encryptedVotes:!1,uniqueValues:!1,costFromWeight:!1},electionMode:{autoStart:!0,interruptible:!0,dynamicCensus:!0,encryptedMetaData:!1,preRegister:!1},tallyMode:{maxCount:1,maxValue:2,maxVoteOverwrites:0,maxTotalCost:2,costExponent:1e4},metadata:{title:{default:"My awesome election"},version:"1.1",description:{default:"My awesome election description"},media:{header:h.replace("{seed}",b)},questions:[{choices:[{title:{default:"Yes"},value:0},{title:{default:"No"},value:1}],description:{default:"Test question 1 description"},title:{default:"Test question 1"}}],results:{aggregation:"discrete-counting",display:"multiple-choice"},meta:void 0}},g=l.u_.build({census:new l.pT(y.census.censusRoot,y.census.censusURL,l.oN.censusTypeFromCensusOrigin(y.census.censusOrigin),4,BigInt("40")),creationTime:y.creationTime,electionCount:0,endDate:y.endDate,finalResults:y.finalResults,id:y.electionId,metadataURL:y.metadataURL,organizationId:y.organizationId,raw:y,results:y.result,status:y.status,title:y.metadata.title,description:y.metadata.description,voteCount:y.voteCount,header:y.metadata.media.header,questions:y.metadata.questions,startDate:y.startDate,voteType:y.voteMode,electionType:{autoStart:y.electionMode.autoStart,interruptible:y.electionMode.interruptible,dynamicCensus:y.electionMode.dynamicCensus,secretUntilTheEnd:y.voteMode.encryptedVotes,anonymous:y.voteMode.anonymous}}),f=(v=c.Z,function(e){return e.live?a.createElement(d.x,{theme:(0,u.B1)(o.rS),resetCSS:!1},a.createElement(o.de,{env:"stg"},a.createElement(o.f0,{organization:m},a.createElement(o.qT,{election:g},a.createElement(i.Z,(0,s.Z)({scope:r},e)))))):a.createElement(v,e)});var v},20863:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>f,frontMatter:()=>p,metadata:()=>m,toc:()=>y});var s=n(87462),a=(n(67294),n(3905)),i=n(26389),o=n(94891),r=n(75190),c=n(47507),d=n(24310),u=n(63303),l=(n(75035),n(85162));const p={id:"create-a-new-census",title:"Create a new census",description:"Create a new census on the backend side. The census is still unpublished until [publish](publish-census) is called.",sidebar_label:"Create a new census",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Census type",in:"path",name:"type",required:!0,schema:{enum:["weighted","zkweighted","csp"],type:"string"}}],responses:{200:{content:{"application/json":{schema:{properties:{censusId:{type:"string"}},type:"object"}}},description:"OK"}},security:[{BasicAuth:[]}],tags:["Censuses"],description:"Create a new census on the backend side. The census is still unpublished until [publish](publish-census) is called.  \n\nTo create the census it require a `Bearer token` created on the user side using a [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier). This token **should we stored for the user to perform operations to this census** such add participants or publish.\n\nIt return a new random censusID (a random 32 bytes hex string), which are used (along with the Bearer token) to [add participant keys](add-participants-to-census) to the census. Once the census is published no more keys can be added.\n\nTo use a census on an election, it **must be published**.\n\n- Available types are: `weighted` and `zkindexed`\n- Require header Bearer token created user side",method:"post",path:"/censuses/{type}",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n- [**SIK**](sik): The Secret Identity Key is a user-generated piece of information that proves the user's identity without revealing it. It is the hash of the user's address, the signature of a public message and an optional secret part. It is used to ensure anonymous voting. All registered accounts or anonymous voters must register a SIK, and they are all stored in a Merkle tree. The `/siks` endpoints help to generate a proof of membership, get the current valid SIK roots, or check if an account has a valid SIK.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"Create a new census",description:{content:"Create a new census on the backend side. The census is still unpublished until [publish](publish-census) is called.  \n\nTo create the census it require a `Bearer token` created on the user side using a [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier). This token **should we stored for the user to perform operations to this census** such add participants or publish.\n\nIt return a new random censusID (a random 32 bytes hex string), which are used (along with the Bearer token) to [add participant keys](add-participants-to-census) to the census. Once the census is published no more keys can be added.\n\nTo use a census on an election, it **must be published**.\n\n- Available types are: `weighted` and `zkindexed`\n- Require header Bearer token created user side",type:"text/plain"},url:{path:["censuses",":type"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Census type",type:"text/plain"},type:"any",value:"",key:"type"}]},header:[{key:"Accept",value:"application/json"}],method:"POST",auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},h=void 0,m={unversionedId:"vocdoni-api/create-a-new-census",id:"vocdoni-api/create-a-new-census",title:"Create a new census",description:"Create a new census on the backend side. The census is still unpublished until [publish](publish-census) is called.",source:"@site/docs/vocdoni-api/create-a-new-census.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/create-a-new-census",permalink:"/vocdoni-api/create-a-new-census",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-a-new-census",title:"Create a new census",description:"Create a new census on the backend side. The census is still unpublished until [publish](publish-census) is called.",sidebar_label:"Create a new census",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Census type",in:"path",name:"type",required:!0,schema:{enum:["weighted","zkweighted","csp"],type:"string"}}],responses:{200:{content:{"application/json":{schema:{properties:{censusId:{type:"string"}},type:"object"}}},description:"OK"}},security:[{BasicAuth:[]}],tags:["Censuses"],description:"Create a new census on the backend side. The census is still unpublished until [publish](publish-census) is called.  \n\nTo create the census it require a `Bearer token` created on the user side using a [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier). This token **should we stored for the user to perform operations to this census** such add participants or publish.\n\nIt return a new random censusID (a random 32 bytes hex string), which are used (along with the Bearer token) to [add participant keys](add-participants-to-census) to the census. Once the census is published no more keys can be added.\n\nTo use a census on an election, it **must be published**.\n\n- Available types are: `weighted` and `zkindexed`\n- Require header Bearer token created user side",method:"post",path:"/censuses/{type}",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni, without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible the complexity and offering simple and straightforward methods to perform those actions. \n\nYou can review the API endpoints documentation in this section, the main entities are:\n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens, give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections). In this section you will find all information related to an election as its information, election keys, submitted votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a public key or address) eligible for participating in an election. To understand more about the Censuses you can check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of the vote, consult your information and send a vote.\n- [**SIK**](sik): The Secret Identity Key is a user-generated piece of information that proves the user's identity without revealing it. It is the hash of the user's address, the signature of a public message and an optional secret part. It is used to ensure anonymous voting. All registered accounts or anonymous voters must register a SIK, and they are all stored in a Merkle tree. The `/siks` endpoints help to generate a proof of membership, get the current valid SIK roots, or check if an account has a valid SIK.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"Create a new census",description:{content:"Create a new census on the backend side. The census is still unpublished until [publish](publish-census) is called.  \n\nTo create the census it require a `Bearer token` created on the user side using a [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier). This token **should we stored for the user to perform operations to this census** such add participants or publish.\n\nIt return a new random censusID (a random 32 bytes hex string), which are used (along with the Bearer token) to [add participant keys](add-participants-to-census) to the census. Once the census is published no more keys can be added.\n\nTo use a census on an election, it **must be published**.\n\n- Available types are: `weighted` and `zkindexed`\n- Require header Bearer token created user side",type:"text/plain"},url:{path:["censuses",":type"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Census type",type:"text/plain"},type:"any",value:"",key:"type"}]},header:[{key:"Accept",value:"application/json"}],method:"POST",auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Census total weight",permalink:"/vocdoni-api/census-total-weight"},next:{title:"Votes",permalink:"/vocdoni-api/votes"}},b={},y=[{value:"Create a new census",id:"create-a-new-census",level:2}],g={toc:y};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"create-a-new-census"},"Create a new census"),(0,a.kt)("p",null,"Create a new census on the backend side. The census is still unpublished until ",(0,a.kt)("a",{parentName:"p",href:"publish-census"},"publish")," is called.  "),(0,a.kt)("p",null,"To create the census it require a ",(0,a.kt)("inlineCode",{parentName:"p"},"Bearer token")," created on the user side using a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Universally_unique_identifier"},"UUID"),". This token ",(0,a.kt)("strong",{parentName:"p"},"should we stored for the user to perform operations to this census")," such add participants or publish."),(0,a.kt)("p",null,"It return a new random censusID (a random 32 bytes hex string), which are used (along with the Bearer token) to ",(0,a.kt)("a",{parentName:"p",href:"add-participants-to-census"},"add participant keys")," to the census. Once the census is published no more keys can be added."),(0,a.kt)("p",null,"To use a census on an election, it ",(0,a.kt)("strong",{parentName:"p"},"must be published"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Available types are: ",(0,a.kt)("inlineCode",{parentName:"li"},"weighted")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"zkindexed")),(0,a.kt)("li",{parentName:"ul"},"Require header Bearer token created user side")),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(r.Z,{className:"paramsItem",param:{description:"Census type",in:"path",name:"type",required:!0,schema:{enum:["weighted","zkweighted","csp"],type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(i.Z,{mdxType:"ApiTabs"},(0,a.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"OK")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(u.Z,{mdxType:"SchemaTabs"},(0,a.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(d.Z,{collapsible:!1,name:"censusId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(c.Z,{responseExample:'{\n  "censusId": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0},46601:()=>{},55024:()=>{}}]);