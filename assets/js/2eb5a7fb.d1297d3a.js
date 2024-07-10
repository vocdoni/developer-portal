"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2360],{12128:(e,t,s)=>{s.d(t,{Z:()=>g});var o=s(87462),n=s(39805),i=s(14902),a=s(170),r=s(86390),c=s(65429),l=s(14758),d=s(67294),h=s(204),u=s(23100),p=s(16393);const m={React:d,...d,Flex:h.k,Box:u.xu,AspectRatio:p.o,Image:c.Ee,ElectionProvider:l.qT,ElectionHeader:c.UE,ElectionTitle:c.hi,ElectionSchedule:c.vE,ElectionResults:c.Hj,ElectionStatusBadge:c.QW,ElectionDescription:c.I3,ElectionQuestions:c.Vx,ElectionActions:c.A2,Election:c.bO,QuestionsConfirmation:c.KX,SpreadsheetAccess:c.cB,VoteButton:c.tT,OrganizationProvider:l.f0,OrganizationAvatar:c.ld,OrganizationDescription:c.G9,OrganizationHeader:c.sC,OrganizationName:c.X5,Balance:c.yo,Button:c.zx,HR:c.HR,Image:c.Ee,Markdown:c.UG};var f=s(22457),v=s(37489);const g=(y=a.Z,function(e){if(e.live){let t=v.G;return'"spreadsheet"'===e.title&&(t=v.IS),d.createElement(n.x,{theme:(0,i.B1)(c.rS),resetCSS:!1},d.createElement(c.de,{env:f.yG.STG,signer:v.Lp.wallet},d.createElement(l.f0,{id:v.fD},d.createElement(l.qT,{id:t,fetchCensus:!0},d.createElement(c.DG,null,d.createElement(r.Z,(0,o.Z)({scope:m},e)))))))}return d.createElement(y,e)});var y},17728:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>f,contentTitle:()=>p,default:()=>y,frontMatter:()=>u,metadata:()=>m,toc:()=>v});var o=s(87462),n=(s(67294),s(3905)),i=s(26389),a=s(94891),r=s(75190),c=s(47507),l=s(24310),d=s(63303),h=(s(75035),s(85162));const u={id:"census-merkle-root",title:"Census Merkle Root",description:"Get census [Merkle Tree root](https://docs.vocdoni.io/architecture/census/off-chain-tree.html) hash, used to identify the census at specific snapshot.\n\n- Bearer token not required",sidebar_label:"Census Merkle Root",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Census id",in:"path",name:"censusID",required:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{properties:{root:{type:"string"}},type:"object"}}},description:"Merkle root of the census"}},tags:["Censuses"],description:"Get census [Merkle Tree root](https://docs.vocdoni.io/architecture/census/off-chain-tree.html) hash, used to identify the census at specific snapshot.\n\n- Bearer token not required",method:"get",path:"/censuses/{censusID}/root",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"\nThe Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates the creation of voting processes with Vocdoni, without the hassle of integrating with a complex distributed stack with blockchain components. The API allows integrators to perform all the features enabled by the Vocdoni voting protocol, such as creating accounts, organizations, voting processes, and censuses, as well as casting votes. The API is designed to abstract away the complexity of the Vocdoni protocol as much as possible, offering a simple and straightforward way to performing these actions. \n\nThe API contains the following endpoints: \n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes to a decentralized data store that is able to guarantee univeral verifiability. The chain endpoints allow you to consult the state of the chain, estimate transactions costs, list organizations, and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum-like address. An account can create and manage elections, transfer tokens, give power to other accounts on its behalf (delegation) and manage its metadata. This endpoint allows users to set the metadata associated with an existing account and to query for information related to existing accounts.\n- [**Elections**](elections): The elections endpoint serves information related to elections such as basic election information, election keys, and submitted votes, as well as enabling users to create a new election and modify existing ones. There is a set of [options, specifications, and lifecycle states](https://developer.vocdoni.io/protocol#elections) that determine the behavior of an election and how votes are counted. \n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (each identified by a public key or address) eligible to participate in an election. The various types of census are documented [here](https://developer.vocdoni.io/protocol/census). This endpoint provides census information like the Merkle root, type, total weight, and size of a census. It also allows you to import/export censuses and create new ones.\n- [**Votes**](votes): This endpoint serves all the information associated with any specific vote, including its validity. It is also how users can cast votes.\n- [**Wallet**](wallet): The wallet endpoint facilitates the creation of accounts on the Vochain. This endpoint fulfills requests relating to the token balance held by a given account. \n- [**SIK**](sik): The Secret Identity Key is a user-generated piece of information that proves the user's identity without revealing it. It is the hash of the user's address, the signature of a public message, and an optional secret part. It is used to ensure anonymous voting. All registered accounts or anonymous voters must register a SIK, and these keys are all stored in a Merkle tree. The `/siks` endpoints helps to generate a proof of membership, get the current valid SIK roots, or check if an account has a valid SIK.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"Census Merkle Root",description:{content:"Get census [Merkle Tree root](https://docs.vocdoni.io/architecture/census/off-chain-tree.html) hash, used to identify the census at specific snapshot.\n\n- Bearer token not required",type:"text/plain"},url:{path:["censuses",":censusID","root"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Census id",type:"text/plain"},type:"any",value:"",key:"censusID"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},p=void 0,m={unversionedId:"vocdoni-api/census-merkle-root",id:"vocdoni-api/census-merkle-root",title:"Census Merkle Root",description:"Get census [Merkle Tree root](https://docs.vocdoni.io/architecture/census/off-chain-tree.html) hash, used to identify the census at specific snapshot.\n\n- Bearer token not required",source:"@site/docs/vocdoni-api/census-merkle-root.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/census-merkle-root",permalink:"/vocdoni-api/census-merkle-root",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"census-merkle-root",title:"Census Merkle Root",description:"Get census [Merkle Tree root](https://docs.vocdoni.io/architecture/census/off-chain-tree.html) hash, used to identify the census at specific snapshot.\n\n- Bearer token not required",sidebar_label:"Census Merkle Root",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Census id",in:"path",name:"censusID",required:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{properties:{root:{type:"string"}},type:"object"}}},description:"Merkle root of the census"}},tags:["Censuses"],description:"Get census [Merkle Tree root](https://docs.vocdoni.io/architecture/census/off-chain-tree.html) hash, used to identify the census at specific snapshot.\\n\\n- Bearer token not required",method:"get",path:"/censuses/{censusID}/root",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"\nThe Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates the creation of voting processes with Vocdoni, without the hassle of integrating with a complex distributed stack with blockchain components. The API allows integrators to perform all the features enabled by the Vocdoni voting protocol, such as creating accounts, organizations, voting processes, and censuses, as well as casting votes. The API is designed to abstract away the complexity of the Vocdoni protocol as much as possible, offering a simple and straightforward way to performing these actions. \n\nThe API contains the following endpoints: \n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes to a decentralized data store that is able to guarantee univeral verifiability. The chain endpoints allow you to consult the state of the chain, estimate transactions costs, list organizations, and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum-like address. An account can create and manage elections, transfer tokens, give power to other accounts on its behalf (delegation) and manage its metadata. This endpoint allows users to set the metadata associated with an existing account and to query for information related to existing accounts.\n- [**Elections**](elections): The elections endpoint serves information related to elections such as basic election information, election keys, and submitted votes, as well as enabling users to create a new election and modify existing ones. There is a set of [options, specifications, and lifecycle states](https://developer.vocdoni.io/protocol#elections) that determine the behavior of an election and how votes are counted. \n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (each identified by a public key or address) eligible to participate in an election. The various types of census are documented [here](https://developer.vocdoni.io/protocol/census). This endpoint provides census information like the Merkle root, type, total weight, and size of a census. It also allows you to import/export censuses and create new ones.\n- [**Votes**](votes): This endpoint serves all the information associated with any specific vote, including its validity. It is also how users can cast votes.\n- [**Wallet**](wallet): The wallet endpoint facilitates the creation of accounts on the Vochain. This endpoint fulfills requests relating to the token balance held by a given account. \n- [**SIK**](sik): The Secret Identity Key is a user-generated piece of information that proves the user's identity without revealing it. It is the hash of the user's address, the signature of a public message, and an optional secret part. It is used to ensure anonymous voting. All registered accounts or anonymous voters must register a SIK, and these keys are all stored in a Merkle tree. The `/siks` endpoints helps to generate a proof of membership, get the current valid SIK roots, or check if an account has a valid SIK.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"Census Merkle Root",description:{content:"Get census [Merkle Tree root](https://docs.vocdoni.io/architecture/census/off-chain-tree.html) hash, used to identify the census at specific snapshot.\\n\\n- Bearer token not required",type:"text/plain"},url:{path:["censuses",":censusID","root"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Census id",type:"text/plain"},type:"any",value:"",key:"censusID"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"Publish census at root",permalink:"/vocdoni-api/publish-census-at-root"},next:{title:"Census size",permalink:"/vocdoni-api/census-size"}},f={},v=[{value:"Census Merkle Root",id:"census-merkle-root",level:2}],g={toc:v};function y(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,o.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"census-merkle-root"},"Census Merkle Root"),(0,n.kt)("p",null,"Get census ",(0,n.kt)("a",{parentName:"p",href:"https://docs.vocdoni.io/architecture/census/off-chain-tree.html"},"Merkle Tree root")," hash, used to identify the census at specific snapshot.\\n\\n- Bearer token not required"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{description:"Census id",in:"path",name:"censusID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Merkle root of the census")),(0,n.kt)("div",null,(0,n.kt)(a.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"root",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(c.Z,{responseExample:'{\n  "root": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}y.isMDXComponent=!0}}]);