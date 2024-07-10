"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3086],{12128:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(87462),o=a(39805),s=a(14902),i=a(170),r=a(86390),c=a(65429),d=a(14758),l=a(67294),h=a(204),p=a(23100),u=a(16393);const m={React:l,...l,Flex:h.k,Box:p.xu,AspectRatio:u.o,Image:c.Ee,ElectionProvider:d.qT,ElectionHeader:c.UE,ElectionTitle:c.hi,ElectionSchedule:c.vE,ElectionResults:c.Hj,ElectionStatusBadge:c.QW,ElectionDescription:c.I3,ElectionQuestions:c.Vx,ElectionActions:c.A2,Election:c.bO,QuestionsConfirmation:c.KX,SpreadsheetAccess:c.cB,VoteButton:c.tT,OrganizationProvider:d.f0,OrganizationAvatar:c.ld,OrganizationDescription:c.G9,OrganizationHeader:c.sC,OrganizationName:c.X5,Balance:c.yo,Button:c.zx,HR:c.HR,Image:c.Ee,Markdown:c.UG};var f=a(22457),y=a(37489);const g=(v=i.Z,function(e){if(e.live){let t=y.G;return'"spreadsheet"'===e.title&&(t=y.IS),l.createElement(o.x,{theme:(0,s.B1)(c.rS),resetCSS:!1},l.createElement(c.de,{env:f.yG.STG,signer:y.Lp.wallet},l.createElement(d.f0,{id:y.fD},l.createElement(d.qT,{id:t,fetchCensus:!0},l.createElement(c.DG,null,l.createElement(r.Z,(0,n.Z)({scope:m},e)))))))}return l.createElement(v,e)});var v},76676:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>v,frontMatter:()=>p,metadata:()=>m,toc:()=>y});var n=a(87462),o=(a(67294),a(3905)),s=a(26389),i=a(94891),r=a(75190),c=a(47507),d=a(24310),l=a(63303),h=(a(75035),a(85162));const p={id:"transfer-tokens",title:"Transfer tokens",description:"Transfer balance to another account. Needed the bearer token associated the account.",sidebar_label:"Transfer tokens",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Destination address",in:"path",name:"dstAddress",required:!0,schema:{type:"string"}},{description:"Amount of tokens to transfer",in:"path",name:"amount",required:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{properties:{code:{type:"integer","x-omitempty":!0},hash:{type:"string","x-omitempty":!0},response:{format:"base64",type:"string","x-omitempty":!0}},type:"object"}}},description:"OK"}},security:[{BasicAuth:[]}],tags:["Wallet"],description:"Transfer balance to another account. Needed the bearer token associated the account.",method:"get",path:"/wallet/transfer/{dstAddress}/{amount}",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"\nThe Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates the creation of voting processes with Vocdoni, without the hassle of integrating with a complex distributed stack with blockchain components. The API allows integrators to perform all the features enabled by the Vocdoni voting protocol, such as creating accounts, organizations, voting processes, and censuses, as well as casting votes. The API is designed to abstract away the complexity of the Vocdoni protocol as much as possible, offering a simple and straightforward way to performing these actions. \n\nThe API contains the following endpoints: \n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes to a decentralized data store that is able to guarantee univeral verifiability. The chain endpoints allow you to consult the state of the chain, estimate transactions costs, list organizations, and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum-like address. An account can create and manage elections, transfer tokens, give power to other accounts on its behalf (delegation) and manage its metadata. This endpoint allows users to set the metadata associated with an existing account and to query for information related to existing accounts.\n- [**Elections**](elections): The elections endpoint serves information related to elections such as basic election information, election keys, and submitted votes, as well as enabling users to create a new election and modify existing ones. There is a set of [options, specifications, and lifecycle states](https://developer.vocdoni.io/protocol#elections) that determine the behavior of an election and how votes are counted. \n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (each identified by a public key or address) eligible to participate in an election. The various types of census are documented [here](https://developer.vocdoni.io/protocol/census). This endpoint provides census information like the Merkle root, type, total weight, and size of a census. It also allows you to import/export censuses and create new ones.\n- [**Votes**](votes): This endpoint serves all the information associated with any specific vote, including its validity. It is also how users can cast votes.\n- [**Wallet**](wallet): The wallet endpoint facilitates the creation of accounts on the Vochain. This endpoint fulfills requests relating to the token balance held by a given account. \n- [**SIK**](sik): The Secret Identity Key is a user-generated piece of information that proves the user's identity without revealing it. It is the hash of the user's address, the signature of a public message, and an optional secret part. It is used to ensure anonymous voting. All registered accounts or anonymous voters must register a SIK, and these keys are all stored in a Merkle tree. The `/siks` endpoints helps to generate a proof of membership, get the current valid SIK roots, or check if an account has a valid SIK.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"Transfer tokens",description:{content:"Transfer balance to another account. Needed the bearer token associated the account.",type:"text/plain"},url:{path:["wallet","transfer",":dstAddress",":amount"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Destination address",type:"text/plain"},type:"any",value:"",key:"dstAddress"},{disabled:!1,description:{content:"(Required) Amount of tokens to transfer",type:"text/plain"},type:"any",value:"",key:"amount"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},u=void 0,m={unversionedId:"vocdoni-api/transfer-tokens",id:"vocdoni-api/transfer-tokens",title:"Transfer tokens",description:"Transfer balance to another account. Needed the bearer token associated the account.",source:"@site/docs/vocdoni-api/transfer-tokens.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/transfer-tokens",permalink:"/vocdoni-api/transfer-tokens",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"transfer-tokens",title:"Transfer tokens",description:"Transfer balance to another account. Needed the bearer token associated the account.",sidebar_label:"Transfer tokens",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Destination address",in:"path",name:"dstAddress",required:!0,schema:{type:"string"}},{description:"Amount of tokens to transfer",in:"path",name:"amount",required:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{properties:{code:{type:"integer","x-omitempty":!0},hash:{type:"string","x-omitempty":!0},response:{format:"base64",type:"string","x-omitempty":!0}},type:"object"}}},description:"OK"}},security:[{BasicAuth:[]}],tags:["Wallet"],description:"Transfer balance to another account. Needed the bearer token associated the account.",method:"get",path:"/wallet/transfer/{dstAddress}/{amount}",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},info:{contact:{},description:"\nThe Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates the creation of voting processes with Vocdoni, without the hassle of integrating with a complex distributed stack with blockchain components. The API allows integrators to perform all the features enabled by the Vocdoni voting protocol, such as creating accounts, organizations, voting processes, and censuses, as well as casting votes. The API is designed to abstract away the complexity of the Vocdoni protocol as much as possible, offering a simple and straightforward way to performing these actions. \n\nThe API contains the following endpoints: \n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes to a decentralized data store that is able to guarantee univeral verifiability. The chain endpoints allow you to consult the state of the chain, estimate transactions costs, list organizations, and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum-like address. An account can create and manage elections, transfer tokens, give power to other accounts on its behalf (delegation) and manage its metadata. This endpoint allows users to set the metadata associated with an existing account and to query for information related to existing accounts.\n- [**Elections**](elections): The elections endpoint serves information related to elections such as basic election information, election keys, and submitted votes, as well as enabling users to create a new election and modify existing ones. There is a set of [options, specifications, and lifecycle states](https://developer.vocdoni.io/protocol#elections) that determine the behavior of an election and how votes are counted. \n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (each identified by a public key or address) eligible to participate in an election. The various types of census are documented [here](https://developer.vocdoni.io/protocol/census). This endpoint provides census information like the Merkle root, type, total weight, and size of a census. It also allows you to import/export censuses and create new ones.\n- [**Votes**](votes): This endpoint serves all the information associated with any specific vote, including its validity. It is also how users can cast votes.\n- [**Wallet**](wallet): The wallet endpoint facilitates the creation of accounts on the Vochain. This endpoint fulfills requests relating to the token balance held by a given account. \n- [**SIK**](sik): The Secret Identity Key is a user-generated piece of information that proves the user's identity without revealing it. It is the hash of the user's address, the signature of a public message, and an optional secret part. It is used to ensure anonymous voting. All registered accounts or anonymous voters must register a SIK, and these keys are all stored in a Merkle tree. The `/siks` endpoints helps to generate a proof of membership, get the current valid SIK roots, or check if an account has a valid SIK.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"Transfer tokens",description:{content:"Transfer balance to another account. Needed the bearer token associated the account.",type:"text/plain"},url:{path:["wallet","transfer",":dstAddress",":amount"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Destination address",type:"text/plain"},type:"any",value:"",key:"dstAddress"},{disabled:!1,description:{content:"(Required) Amount of tokens to transfer",type:"text/plain"},type:"any",value:"",key:"amount"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"Create election for wallet",permalink:"/vocdoni-api/create-election-for-wallet"},next:{title:"SIK",permalink:"/vocdoni-api/sik"}},f={},y=[{value:"Transfer tokens",id:"transfer-tokens",level:2}],g={toc:y};function v(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"transfer-tokens"},"Transfer tokens"),(0,o.kt)("p",null,"Transfer balance to another account. Needed the bearer token associated the account."),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(r.Z,{className:"paramsItem",param:{description:"Destination address",in:"path",name:"dstAddress",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,o.kt)(r.Z,{className:"paramsItem",param:{description:"Amount of tokens to transfer",in:"path",name:"amount",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(s.Z,{mdxType:"ApiTabs"},(0,o.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"OK")),(0,o.kt)("div",null,(0,o.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"SchemaTabs"},(0,o.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"code",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"hash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"response",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"base64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(c.Z,{responseExample:'{\n  "code": 0,\n  "hash": "string",\n  "response": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);