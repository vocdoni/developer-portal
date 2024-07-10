"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2609],{12128:(e,t,i)=>{i.d(t,{Z:()=>y});var a=i(87462),o=i(39805),n=i(14902),s=i(170),r=i(86390),l=i(65429),c=i(14758),d=i(67294),p=i(204),h=i(23100),u=i(16393);const g={React:d,...d,Flex:p.k,Box:h.xu,AspectRatio:u.o,Image:l.Ee,ElectionProvider:c.qT,ElectionHeader:l.UE,ElectionTitle:l.hi,ElectionSchedule:l.vE,ElectionResults:l.Hj,ElectionStatusBadge:l.QW,ElectionDescription:l.I3,ElectionQuestions:l.Vx,ElectionActions:l.A2,Election:l.bO,QuestionsConfirmation:l.KX,SpreadsheetAccess:l.cB,VoteButton:l.tT,OrganizationProvider:c.f0,OrganizationAvatar:l.ld,OrganizationDescription:l.G9,OrganizationHeader:l.sC,OrganizationName:l.X5,Balance:l.yo,Button:l.zx,HR:l.HR,Image:l.Ee,Markdown:l.UG};var m=i(22457),f=i(37489);const y=(v=s.Z,function(e){if(e.live){let t=f.G;return'"spreadsheet"'===e.title&&(t=f.IS),d.createElement(o.x,{theme:(0,n.B1)(l.rS),resetCSS:!1},d.createElement(l.de,{env:m.yG.STG,signer:f.Lp.wallet},d.createElement(c.f0,{id:f.fD},d.createElement(c.qT,{id:t,fetchCensus:!0},d.createElement(l.DG,null,d.createElement(r.Z,(0,a.Z)({scope:g},e)))))))}return d.createElement(v,e)});var v},47852:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>v,frontMatter:()=>h,metadata:()=>g,toc:()=>f});var a=i(87462),o=(i(67294),i(3905)),n=i(26389),s=i(94891),r=i(75190),l=i(47507),c=i(24310),d=i(63303),p=(i(75035),i(85162));const h={id:"list-organizations-filtered",title:"List organizations (filtered)",description:"Returns a list of organizations filtered by its partial id, paginated by the given page",sidebar_label:"List organizations (filtered)",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Current page",in:"path",name:"page",required:!0,schema:{type:"integer"}}],responses:{200:{content:{"application/json":{schema:{properties:{organizations:{items:{properties:{electionCount:{example:1,type:"integer"},organizationID:{example:31407138843303053e31,type:"string"}},type:"object"},type:"array"}},type:"object"}}},description:"OK"}},tags:["Chain"],description:"Returns a list of organizations filtered by its partial id, paginated by the given page",requestBody:{content:{"application/json":{schema:{properties:{organizationId:{type:"string"}},type:"object"}}},description:"Partial organizationId to filter by",required:!0},method:"post",path:"/chain/organizations/filter/page/{page}",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},jsonRequestBodyExample:{organizationId:"string"},info:{contact:{},description:"\nThe Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates the creation of voting processes with Vocdoni, without the hassle of integrating with a complex distributed stack with blockchain components. The API allows integrators to perform all the features enabled by the Vocdoni voting protocol, such as creating accounts, organizations, voting processes, and censuses, as well as casting votes. The API is designed to abstract away the complexity of the Vocdoni protocol as much as possible, offering a simple and straightforward way to performing these actions. \n\nThe API contains the following endpoints: \n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes to a decentralized data store that is able to guarantee univeral verifiability. The chain endpoints allow you to consult the state of the chain, estimate transactions costs, list organizations, and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum-like address. An account can create and manage elections, transfer tokens, give power to other accounts on its behalf (delegation) and manage its metadata. This endpoint allows users to set the metadata associated with an existing account and to query for information related to existing accounts.\n- [**Elections**](elections): The elections endpoint serves information related to elections such as basic election information, election keys, and submitted votes, as well as enabling users to create a new election and modify existing ones. There is a set of [options, specifications, and lifecycle states](https://developer.vocdoni.io/protocol#elections) that determine the behavior of an election and how votes are counted. \n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (each identified by a public key or address) eligible to participate in an election. The various types of census are documented [here](https://developer.vocdoni.io/protocol/census). This endpoint provides census information like the Merkle root, type, total weight, and size of a census. It also allows you to import/export censuses and create new ones.\n- [**Votes**](votes): This endpoint serves all the information associated with any specific vote, including its validity. It is also how users can cast votes.\n- [**Wallet**](wallet): The wallet endpoint facilitates the creation of accounts on the Vochain. This endpoint fulfills requests relating to the token balance held by a given account. \n- [**SIK**](sik): The Secret Identity Key is a user-generated piece of information that proves the user's identity without revealing it. It is the hash of the user's address, the signature of a public message, and an optional secret part. It is used to ensure anonymous voting. All registered accounts or anonymous voters must register a SIK, and these keys are all stored in a Merkle tree. The `/siks` endpoints helps to generate a proof of membership, get the current valid SIK roots, or check if an account has a valid SIK.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"List organizations (filtered)",description:{content:"Returns a list of organizations filtered by its partial id, paginated by the given page",type:"text/plain"},url:{path:["chain","organizations","filter","page",":page"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Current page",type:"text/plain"},type:"any",value:"",key:"page"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},u=void 0,g={unversionedId:"vocdoni-api/list-organizations-filtered",id:"vocdoni-api/list-organizations-filtered",title:"List organizations (filtered)",description:"Returns a list of organizations filtered by its partial id, paginated by the given page",source:"@site/docs/vocdoni-api/list-organizations-filtered.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/list-organizations-filtered",permalink:"/vocdoni-api/list-organizations-filtered",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-organizations-filtered",title:"List organizations (filtered)",description:"Returns a list of organizations filtered by its partial id, paginated by the given page",sidebar_label:"List organizations (filtered)",hide_title:!0,hide_table_of_contents:!0,api:{parameters:[{description:"Current page",in:"path",name:"page",required:!0,schema:{type:"integer"}}],responses:{200:{content:{"application/json":{schema:{properties:{organizations:{items:{properties:{electionCount:{example:1,type:"integer"},organizationID:{example:31407138843303053e31,type:"string"}},type:"object"},type:"array"}},type:"object"}}},description:"OK"}},tags:["Chain"],description:"Returns a list of organizations filtered by its partial id, paginated by the given page",requestBody:{content:{"application/json":{schema:{properties:{organizationId:{type:"string"}},type:"object"}}},description:"Partial organizationId to filter by",required:!0},method:"post",path:"/chain/organizations/filter/page/{page}",servers:[{url:"https://api-dev.vocdoni.net/v2"}],securitySchemes:{BasicAuth:{scheme:"basic",type:"http"}},jsonRequestBodyExample:{organizationId:"string"},info:{contact:{},description:"\nThe Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates the creation of voting processes with Vocdoni, without the hassle of integrating with a complex distributed stack with blockchain components. The API allows integrators to perform all the features enabled by the Vocdoni voting protocol, such as creating accounts, organizations, voting processes, and censuses, as well as casting votes. The API is designed to abstract away the complexity of the Vocdoni protocol as much as possible, offering a simple and straightforward way to performing these actions. \n\nThe API contains the following endpoints: \n\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes to a decentralized data store that is able to guarantee univeral verifiability. The chain endpoints allow you to consult the state of the chain, estimate transactions costs, list organizations, and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum-like address. An account can create and manage elections, transfer tokens, give power to other accounts on its behalf (delegation) and manage its metadata. This endpoint allows users to set the metadata associated with an existing account and to query for information related to existing accounts.\n- [**Elections**](elections): The elections endpoint serves information related to elections such as basic election information, election keys, and submitted votes, as well as enabling users to create a new election and modify existing ones. There is a set of [options, specifications, and lifecycle states](https://developer.vocdoni.io/protocol#elections) that determine the behavior of an election and how votes are counted. \n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (each identified by a public key or address) eligible to participate in an election. The various types of census are documented [here](https://developer.vocdoni.io/protocol/census). This endpoint provides census information like the Merkle root, type, total weight, and size of a census. It also allows you to import/export censuses and create new ones.\n- [**Votes**](votes): This endpoint serves all the information associated with any specific vote, including its validity. It is also how users can cast votes.\n- [**Wallet**](wallet): The wallet endpoint facilitates the creation of accounts on the Vochain. This endpoint fulfills requests relating to the token balance held by a given account. \n- [**SIK**](sik): The Secret Identity Key is a user-generated piece of information that proves the user's identity without revealing it. It is the hash of the user's address, the signature of a public message, and an optional secret part. It is used to ensure anonymous voting. All registered accounts or anonymous voters must register a SIK, and these keys are all stored in a Merkle tree. The `/siks` endpoints helps to generate a proof of membership, get the current valid SIK roots, or check if an account has a valid SIK.\n\n\n### Errors \n\nBackend error messages list are defined here: https://github.com/vocdoni/vocdoni-node/blob/master/api/errors.go\n\nAbout the **204 no content** error: this message will be returned only if the asset being queried cannot be found but no other errors have occurred. This response is commonly used to prevent Javascript errors that may arise when a client is waiting for a  transaction to be published. During this waiting period, the client can repeatedly query the endpoint until a  successful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the transaction not being published yet.",title:"Vocdoni API",version:"2.0.0"},postman:{name:"List organizations (filtered)",description:{content:"Returns a list of organizations filtered by its partial id, paginated by the given page",type:"text/plain"},url:{path:["chain","organizations","filter","page",":page"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Current page",type:"text/plain"},type:"any",value:"",key:"page"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"Count organizations",permalink:"/vocdoni-api/count-organizations"},next:{title:"List organizations",permalink:"/vocdoni-api/list-organizations"}},m={},f=[{value:"List organizations (filtered)",id:"list-organizations-filtered",level:2}],y={toc:f};function v(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"list-organizations-filtered"},"List organizations (filtered)"),(0,o.kt)("p",null,"Returns a list of organizations filtered by its partial id, paginated by the given page"),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(r.Z,{className:"paramsItem",param:{description:"Current page",in:"path",name:"page",required:!0,schema:{type:"integer"}},mdxType:"ParamsItem"})))),(0,o.kt)(s.Z,{mdxType:"MimeTabs"},(0,o.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Request Body"),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,o.kt)("p",null,"Partial organizationId to filter by"))),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(c.Z,{collapsible:!1,name:"organizationId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,o.kt)("div",null,(0,o.kt)(n.Z,{mdxType:"ApiTabs"},(0,o.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"OK")),(0,o.kt)("div",null,(0,o.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(d.Z,{mdxType:"SchemaTabs"},(0,o.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"organizations"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)(c.Z,{collapsible:!1,name:"electionCount",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"organizationID",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,o.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(l.Z,{responseExample:'{\n  "organizations": [\n    {\n      "electionCount": 1,\n      "organizationID": 3.1407138843303053e+47\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);