"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6355],{59897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>y,frontMatter:()=>u,metadata:()=>m,toc:()=>b});var o=n(87462),a=(n(67294),n(3905)),i=n(26389),r=n(94891),s=n(75190),c=n(47507),l=n(24310),d=n(63303),p=(n(75035),n(85162));const u={id:"transaction-by-block-index",title:"Transaction by block height and index",description:"Get transaction full information by block height and index. It returns JSON transaction protobuff encoded.",sidebar_label:"Transaction by block height and index",hide_title:!0,hide_table_of_contents:!0,api:{description:"Get transaction full information by block height and index. It returns JSON transaction protobuff encoded. \nDepending of transaction type will return different types of objects. Current transaction types are:\n- VoteEnvelope\n- NewProcessTx\n- AdminTx\n- SetProcessTx\n- RegisterKeyTx\n- MintTokensTx\n- SendTokensTx\n- SetTransactionCostsTx\n- SetAccountTx\n- CollectFaucetTx\n- SetKeykeeperTx",operationId:"transactionByBlockIndex",tags:["Chain"],parameters:[{name:"blockHeight",in:"path",description:"Block height",required:!0,schema:{type:"integer",format:"int32",example:64924}},{name:"txIndex",in:"path",description:"Transaction index on block",required:!0,schema:{type:"integer",format:"int32",example:0}}],responses:{200:{description:"Returns protobuff transaction content",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{vote:{type:"object",properties:{nonce:{type:"string",example:"1056bc4d864c12659be306be1f4f31e1f5dcf9e61cb85c8e67509c59144c59ad"},processId:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"},votePackage:{type:"string",example:"eyJub25jZSI6ImFjYjcyOWU3ZmQ1OTA2ZWUiLCJ2b3RlcyI6WzJdfQ=="},nullifier:{type:"string",example:""},encryptionKeyIndexes:{type:"array",items:{type:"integer"}},proof:{type:"object",properties:{ethereumStorage:{type:"string",example:"friRbvlOgkNexQvnZ1RL910Jlz3m1W4V5BzqhpZSBpY="},value:{type:"string",example:"SpVFE04rDsBN="},sibling:{type:"array",items:{type:"string"},example:["+QIRoIgbDfwMc1Y5GwlV09bdBi5MzCcTe/OnriNGjTmMqxwGoAY5+PbCDHE6I5bdMCQhM3a0HWFoKBP33MHiwb0NdDEsoB4mkcRSuZ9664LdrjMYZwYyrwq/bKY4znGRvQsw517joFK8lpmTMyvhkzu7UGiuD/P7Jt4HZQ92Mqed73BB0pk7oBDctHz+NzhIBs+SUxPclEMV7igZ04aLk6g1KeIwHFcQoI3sDImHbNtwYKz+bAit/uuk9SYgrpQNwaG7M55iuvjvoDWeGIZq2zAhf/V5Q3Q7uQ8sq8ViuO6eovgmpW1n+dxhoFMo439r4PAT8PGA3CFhkILya7RKzzmCQTvuMCnTMvOCoKoPbemkdrV96fTEzTjlWOn1Tq430El1g/8PVn3J5e8moMLLCuhf3Ie2moES6m7IALMzf5Gq/8pf8IyH5emROwRPoEQ875gAkM9PEV+XiWuex1P7S4SnzTjc2cuGpagcAKl7oINOE7+SJ+RiD811eXrQoytjEhznMauEMLgJQf8enYEcoKrcUhDbjADzU2fMhOr9OrQCztjwDcEsplAuptnOKspioPFqErJFYpDA4AN+N+c+R0n5X3uLYDkPNWntHRqX2wgwoAxB6cWD0vWR5yodESoVjk6zMkTnLaYn8hJIljXoW5droEt0U6uaCWTaqhHZ5l5DCE2tJDC1YKPjIFPEnWWF3L5VgA==","+QIRoGg4UabE6udg4xRACLCwUp6c78Kd1aVcEqwStimjI6zOoHFMOM7DvgZeZNHa0Tydqd53EiDTzRXHlmeqidR5WMyXoEwU6JTz2eL2hB2VYE9AyvAlvMpHftVauHaAWK7fARYBoMF8IfsPFhlHRPxZ/cwkFIDn7+U+QWPFh/Zj0n0Z8lXLoBO0IgA3bvpXAhg9tPxhQlrT3pGvWjmpqcl5XwN1ZPl4oEUpa+p8xPjNKD579/IBjdnEm66CxtVrWAyAc9c9N6TqoE9NovFfKJl+IZVQw8HCIWX+/q+0t+R28LWTiK9adpU1oBGGjM/LyiIknIyB9nB7+Ty+kZgJffPxCRdg0aiPg2nFoIft59/Z4qq72G8I8a4duVCzH7UzQMMOsEdUy3iXaeQ4oC8uemDTf6gjll+5XkpOpC7M440wL0ND384+QiEebn1ToDi577kLYA/MxTpAHoluljP6xhr2mvOBg7jX5vFigOfOoPBdo5NxaR+PulfZXI1TK6/1Rbg22uq6SHNecDRsQ5c5oC8vQBNyGBhOTsez5LcfaAX3u2/fTQKsm6fnVDICkcSNoNQQ/4lP+hUZLHYnEBtyaiUKgxrew9X6pH+bTgk8+IyaoHPfYpQKTEAgp8GI9hDLUKhY5RD77cPBqrpZmcEREJKcoITDSOC1hJ/Y+YLl3pr16hVbABPjovFdlI/T0br2o7d+gA==","+QIRoLM2fHA0PA0LCr5AaWSFXKvC4Wc9BGHFsrTVtudKadcboKAHRm8+oFav3QtIPJ+jGn9Jdvt3kLPctRuEjgXboRddoBqh5SrQ6afqlC17NGX2rxubB2aaaBvMLFvx2EgSVczdoOKK7Vr2Z2McbpJ5AjzzxCHYGQYUo5IZz/928zrKnxCJoBrdZMjDH9cuudUqu5XOQ8e9jC+lZ7JiW/Q0/Mrl77S7oB0A+hiWVnkazBzng1bSjZbFKmXInMQ1tEEb+2TazpEWoPKy7stwCo5rMr1niFkCDAYWaZ842qpG4NqXHAmQ1idPoNbrrYsHBvD6+r3MIYbdgJWpGV1cbSaNx/W0f83bCFdioFKsgNW+sSZVq2rTjT3PRa49MmkLgk6VV3QP+WsEhaYooAPIIjj3qVC4Xyh6rlVbFAjH5gdc43JNxtymtpaUOJI6oIWTm2IAyHsDa78CXEYRn8dVP1ET9O83HRKqGWUi8bkroNBGgVhQfwjuAmx/g31tdHO1D09C2jcaeQLpI8vhZtn7oP3jngtAwXAJtNT6jMJkDT6iHHqyg4nY5/hoNfTDUGmNoNBRKE9eTQxrvGzGU+mKPbwYgQobkQnqqknvnTxXZPUUoDorGea1vdy7V7OuYVCPMw5lz5XMHu0uBEkS7+GecUjuoEPTH+9kB/7tMTyJks2HxH63I+wP+nrkHnD2krPoHBXogA==","+PGgANm072y2kmljHhGUZ7cLL3KOXGhyMYOvG3bGE7JNfheglqg+C1iDGUrFO0V9DbhNwsTngYePTcJE3/fT68TmteKgnQ2FWiXIuGrXK+0tvYdCnHzgZ2KFY8qiaJrdNY2kzC2ggMEQaBJLXMy8cKDZs7tjfBN30rUdT5cq6PIjxhIMCO2AgKC193R4QX6e1SQd29VxDKfHbjou9eerWmoDnUsYBy/T6ICAgKAlLBgMqhnYyoP4jeYLcdEEO2A0/rPRjMwBA/b13r7L4KDSNz/51bOu0hO2RFyj4TpdI669J57c5Cx4/0YwSMqjUYCAgICA","658gXcgKKPPIVy8XiNBECfdA7BmMbyB7EhTDfhmW97D7iolKlUUTTisOwE0="]}}}}}}}]}}}},204:{description:"This message will be returned only if the asset being queried cannot be found but no other errors have occurred. \nThis response is commonly used to prevent Javascript errors that may arise when a client is waiting for a \ntransaction to be published. During this waiting period, the client can repeatedly query the endpoint until a \nsuccessful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the \ntransaction not being published yet."}},method:"get",path:"/chain/transactions/{blockHeight}/{txIndex}",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Transaction by block height and index",description:{content:"Get transaction full information by block height and index. It returns JSON transaction protobuff encoded. \nDepending of transaction type will return different types of objects. Current transaction types are:\n- VoteEnvelope\n- NewProcessTx\n- AdminTx\n- SetProcessTx\n- RegisterKeyTx\n- MintTokensTx\n- SendTokensTx\n- SetTransactionCostsTx\n- SetAccountTx\n- CollectFaucetTx\n- SetKeykeeperTx",type:"text/plain"},url:{path:["chain","transactions",":blockHeight",":txIndex"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Block height",type:"text/plain"},type:"any",value:"",key:"blockHeight"},{disabled:!1,description:{content:"(Required) Transaction index on block",type:"text/plain"},type:"any",value:"",key:"txIndex"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},h=void 0,m={unversionedId:"vocdoni-api/transaction-by-block-index",id:"vocdoni-api/transaction-by-block-index",title:"Transaction by block height and index",description:"Get transaction full information by block height and index. It returns JSON transaction protobuff encoded.",source:"@site/docs/vocdoni-api/transaction-by-block-index.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/transaction-by-block-index",permalink:"/vocdoni-api/transaction-by-block-index",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"transaction-by-block-index",title:"Transaction by block height and index",description:"Get transaction full information by block height and index. It returns JSON transaction protobuff encoded.",sidebar_label:"Transaction by block height and index",hide_title:!0,hide_table_of_contents:!0,api:{description:"Get transaction full information by block height and index. It returns JSON transaction protobuff encoded. \nDepending of transaction type will return different types of objects. Current transaction types are:\n- VoteEnvelope\n- NewProcessTx\n- AdminTx\n- SetProcessTx\n- RegisterKeyTx\n- MintTokensTx\n- SendTokensTx\n- SetTransactionCostsTx\n- SetAccountTx\n- CollectFaucetTx\n- SetKeykeeperTx",operationId:"transactionByBlockIndex",tags:["Chain"],parameters:[{name:"blockHeight",in:"path",description:"Block height",required:!0,schema:{type:"integer",format:"int32",example:64924}},{name:"txIndex",in:"path",description:"Transaction index on block",required:!0,schema:{type:"integer",format:"int32",example:0}}],responses:{200:{description:"Returns protobuff transaction content",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{vote:{type:"object",properties:{nonce:{type:"string",example:"1056bc4d864c12659be306be1f4f31e1f5dcf9e61cb85c8e67509c59144c59ad"},processId:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"},votePackage:{type:"string",example:"eyJub25jZSI6ImFjYjcyOWU3ZmQ1OTA2ZWUiLCJ2b3RlcyI6WzJdfQ=="},nullifier:{type:"string",example:""},encryptionKeyIndexes:{type:"array",items:{type:"integer"}},proof:{type:"object",properties:{ethereumStorage:{type:"string",example:"friRbvlOgkNexQvnZ1RL910Jlz3m1W4V5BzqhpZSBpY="},value:{type:"string",example:"SpVFE04rDsBN="},sibling:{type:"array",items:{type:"string"},example:["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"]}}}}}}}]}}}},204:{description:"This message will be returned only if the asset being queried cannot be found but no other errors have occurred. \nThis response is commonly used to prevent Javascript errors that may arise when a client is waiting for a \ntransaction to be published. During this waiting period, the client can repeatedly query the endpoint until a \nsuccessful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the \ntransaction not being published yet."}},method:"get",path:"/chain/transactions/{blockHeight}/{txIndex}",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Transaction by block height and index",description:{content:"Get transaction full information by block height and index. It returns JSON transaction protobuff encoded. \nDepending of transaction type will return different types of objects. Current transaction types are:\n- VoteEnvelope\n- NewProcessTx\n- AdminTx\n- SetProcessTx\n- RegisterKeyTx\n- MintTokensTx\n- SendTokensTx\n- SetTransactionCostsTx\n- SetAccountTx\n- CollectFaucetTx\n- SetKeykeeperTx",type:"text/plain"},url:{path:["chain","transactions",":blockHeight",":txIndex"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Block height",type:"text/plain"},type:"any",value:"",key:"blockHeight"},{disabled:!1,description:{content:"(Required) Transaction index on block",type:"text/plain"},type:"any",value:"",key:"txIndex"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Transaction by index",permalink:"/vocdoni-api/transaction-by-index"},next:{title:"Count organizations",permalink:"/vocdoni-api/organization-count"}},g={},b=[{value:"Transaction by block height and index",id:"transaction-by-block-height-and-index",level:2}],f={toc:b};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"transaction-by-block-height-and-index"},"Transaction by block height and index"),(0,a.kt)("p",null,"Get transaction full information by block height and index. It returns JSON transaction protobuff encoded.\nDepending of transaction type will return different types of objects. Current transaction types are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"VoteEnvelope"),(0,a.kt)("li",{parentName:"ul"},"NewProcessTx"),(0,a.kt)("li",{parentName:"ul"},"AdminTx"),(0,a.kt)("li",{parentName:"ul"},"SetProcessTx"),(0,a.kt)("li",{parentName:"ul"},"RegisterKeyTx"),(0,a.kt)("li",{parentName:"ul"},"MintTokensTx"),(0,a.kt)("li",{parentName:"ul"},"SendTokensTx"),(0,a.kt)("li",{parentName:"ul"},"SetTransactionCostsTx"),(0,a.kt)("li",{parentName:"ul"},"SetAccountTx"),(0,a.kt)("li",{parentName:"ul"},"CollectFaucetTx"),(0,a.kt)("li",{parentName:"ul"},"SetKeykeeperTx")),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"blockHeight",in:"path",description:"Block height",required:!0,schema:{type:"integer",format:"int32",example:64924}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"txIndex",in:"path",description:"Transaction index on block",required:!0,schema:{type:"integer",format:"int32",example:0}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(i.Z,{mdxType:"ApiTabs"},(0,a.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Returns protobuff transaction content")),(0,a.kt)("div",null,(0,a.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(d.Z,{mdxType:"SchemaTabs"},(0,a.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("span",{className:"badge badge--info"},"oneOf"),(0,a.kt)(d.Z,{mdxType:"SchemaTabs"},(0,a.kt)(p.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"vote"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"nonce",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"processId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"votePackage",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"nullifier",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"encryptionKeyIndexes",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"proof"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"ethereumStorage",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"sibling",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))))))))),(0,a.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(c.Z,{responseExample:'{\n  "vote": {\n    "nonce": "1056bc4d864c12659be306be1f4f31e1f5dcf9e61cb85c8e67509c59144c59ad",\n    "processId": "0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845",\n    "votePackage": "eyJub25jZSI6ImFjYjcyOWU3ZmQ1OTA2ZWUiLCJ2b3RlcyI6WzJdfQ==",\n    "nullifier": "",\n    "encryptionKeyIndexes": [\n      0\n    ],\n    "proof": {\n      "ethereumStorage": "friRbvlOgkNexQvnZ1RL910Jlz3m1W4V5BzqhpZSBpY=",\n      "value": "SpVFE04rDsBN=",\n      "sibling": [\n        "+QIRoIgbDfwMc1Y5GwlV09bdBi5MzCcTe/OnriNGjTmMqxwGoAY5+PbCDHE6I5bdMCQhM3a0HWFoKBP33MHiwb0NdDEsoB4mkcRSuZ9664LdrjMYZwYyrwq/bKY4znGRvQsw517joFK8lpmTMyvhkzu7UGiuD/P7Jt4HZQ92Mqed73BB0pk7oBDctHz+NzhIBs+SUxPclEMV7igZ04aLk6g1KeIwHFcQoI3sDImHbNtwYKz+bAit/uuk9SYgrpQNwaG7M55iuvjvoDWeGIZq2zAhf/V5Q3Q7uQ8sq8ViuO6eovgmpW1n+dxhoFMo439r4PAT8PGA3CFhkILya7RKzzmCQTvuMCnTMvOCoKoPbemkdrV96fTEzTjlWOn1Tq430El1g/8PVn3J5e8moMLLCuhf3Ie2moES6m7IALMzf5Gq/8pf8IyH5emROwRPoEQ875gAkM9PEV+XiWuex1P7S4SnzTjc2cuGpagcAKl7oINOE7+SJ+RiD811eXrQoytjEhznMauEMLgJQf8enYEcoKrcUhDbjADzU2fMhOr9OrQCztjwDcEsplAuptnOKspioPFqErJFYpDA4AN+N+c+R0n5X3uLYDkPNWntHRqX2wgwoAxB6cWD0vWR5yodESoVjk6zMkTnLaYn8hJIljXoW5droEt0U6uaCWTaqhHZ5l5DCE2tJDC1YKPjIFPEnWWF3L5VgA==",\n        "+QIRoGg4UabE6udg4xRACLCwUp6c78Kd1aVcEqwStimjI6zOoHFMOM7DvgZeZNHa0Tydqd53EiDTzRXHlmeqidR5WMyXoEwU6JTz2eL2hB2VYE9AyvAlvMpHftVauHaAWK7fARYBoMF8IfsPFhlHRPxZ/cwkFIDn7+U+QWPFh/Zj0n0Z8lXLoBO0IgA3bvpXAhg9tPxhQlrT3pGvWjmpqcl5XwN1ZPl4oEUpa+p8xPjNKD579/IBjdnEm66CxtVrWAyAc9c9N6TqoE9NovFfKJl+IZVQw8HCIWX+/q+0t+R28LWTiK9adpU1oBGGjM/LyiIknIyB9nB7+Ty+kZgJffPxCRdg0aiPg2nFoIft59/Z4qq72G8I8a4duVCzH7UzQMMOsEdUy3iXaeQ4oC8uemDTf6gjll+5XkpOpC7M440wL0ND384+QiEebn1ToDi577kLYA/MxTpAHoluljP6xhr2mvOBg7jX5vFigOfOoPBdo5NxaR+PulfZXI1TK6/1Rbg22uq6SHNecDRsQ5c5oC8vQBNyGBhOTsez5LcfaAX3u2/fTQKsm6fnVDICkcSNoNQQ/4lP+hUZLHYnEBtyaiUKgxrew9X6pH+bTgk8+IyaoHPfYpQKTEAgp8GI9hDLUKhY5RD77cPBqrpZmcEREJKcoITDSOC1hJ/Y+YLl3pr16hVbABPjovFdlI/T0br2o7d+gA==",\n        "+QIRoLM2fHA0PA0LCr5AaWSFXKvC4Wc9BGHFsrTVtudKadcboKAHRm8+oFav3QtIPJ+jGn9Jdvt3kLPctRuEjgXboRddoBqh5SrQ6afqlC17NGX2rxubB2aaaBvMLFvx2EgSVczdoOKK7Vr2Z2McbpJ5AjzzxCHYGQYUo5IZz/928zrKnxCJoBrdZMjDH9cuudUqu5XOQ8e9jC+lZ7JiW/Q0/Mrl77S7oB0A+hiWVnkazBzng1bSjZbFKmXInMQ1tEEb+2TazpEWoPKy7stwCo5rMr1niFkCDAYWaZ842qpG4NqXHAmQ1idPoNbrrYsHBvD6+r3MIYbdgJWpGV1cbSaNx/W0f83bCFdioFKsgNW+sSZVq2rTjT3PRa49MmkLgk6VV3QP+WsEhaYooAPIIjj3qVC4Xyh6rlVbFAjH5gdc43JNxtymtpaUOJI6oIWTm2IAyHsDa78CXEYRn8dVP1ET9O83HRKqGWUi8bkroNBGgVhQfwjuAmx/g31tdHO1D09C2jcaeQLpI8vhZtn7oP3jngtAwXAJtNT6jMJkDT6iHHqyg4nY5/hoNfTDUGmNoNBRKE9eTQxrvGzGU+mKPbwYgQobkQnqqknvnTxXZPUUoDorGea1vdy7V7OuYVCPMw5lz5XMHu0uBEkS7+GecUjuoEPTH+9kB/7tMTyJks2HxH63I+wP+nrkHnD2krPoHBXogA==",\n        "+PGgANm072y2kmljHhGUZ7cLL3KOXGhyMYOvG3bGE7JNfheglqg+C1iDGUrFO0V9DbhNwsTngYePTcJE3/fT68TmteKgnQ2FWiXIuGrXK+0tvYdCnHzgZ2KFY8qiaJrdNY2kzC2ggMEQaBJLXMy8cKDZs7tjfBN30rUdT5cq6PIjxhIMCO2AgKC193R4QX6e1SQd29VxDKfHbjou9eerWmoDnUsYBy/T6ICAgKAlLBgMqhnYyoP4jeYLcdEEO2A0/rPRjMwBA/b13r7L4KDSNz/51bOu0hO2RFyj4TpdI669J57c5Cx4/0YwSMqjUYCAgICA",\n        "658gXcgKKPPIVy8XiNBECfdA7BmMbyB7EhTDfhmW97D7iolKlUUTTisOwE0="\n      ]\n    }\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(p.Z,{label:"204",value:"204",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"This message will be returned only if the asset being queried cannot be found but no other errors have occurred.\nThis response is commonly used to prevent Javascript errors that may arise when a client is waiting for a\ntransaction to be published. During this waiting period, the client can repeatedly query the endpoint until a\nsuccessful response with a status code of 200 is received, thereby avoiding any errors that may occur due to the\ntransaction not being published yet.")),(0,a.kt)("div",null)))))}y.isMDXComponent=!0}}]);