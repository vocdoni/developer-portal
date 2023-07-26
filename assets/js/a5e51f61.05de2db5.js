"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4121],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),r=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=r(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=r(n),h=o,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var r=2;r<i;r++)s[r]=n[r];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},93632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>r});var a=n(87462),o=(n(67294),n(3905));const i={},s="Vocdoni SDK",l={unversionedId:"get-started/intro",id:"get-started/intro",title:"Vocdoni SDK",description:"The Vocdoni SDK is a convenient way to interact with the Vocdoni Protocol",source:"@site/docs/get-started/01-intro.md",sourceDirName:"get-started",slug:"/get-started/intro",permalink:"/get-started/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"getStarted",next:{title:"Introduction",permalink:"/get-started/Voting Types/introduction"}},c={},r=[{value:"Live preview",id:"live-preview",level:2},{value:"Disclaimer",id:"disclaimer",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"SDK Usage",id:"sdk-usage",level:2},{value:"Environment",id:"environment",level:3},{value:"Staging",id:"staging",level:4},{value:"Development",id:"development",level:4},{value:"Registering account",id:"registering-account",level:3},{value:"Vocdoni tokens; faucet &amp; balance",id:"vocdoni-tokens-faucet--balance",level:3},{value:"Creating a voting process",id:"creating-a-voting-process",level:3},{value:"Other election types",id:"other-election-types",level:3},{value:"Quadratic voting",id:"quadratic-voting",level:4},{value:"Approval voting",id:"approval-voting",level:4},{value:"Ranked voting",id:"ranked-voting",level:4},{value:"Other election functionalities",id:"other-election-functionalities",level:3},{value:"Estimate election cost",id:"estimate-election-cost",level:4},{value:"Calculate the real election cost",id:"calculate-the-real-election-cost",level:4},{value:"Fetching election info",id:"fetching-election-info",level:3},{value:"Changing election status",id:"changing-election-status",level:3},{value:"Pause",id:"pause",level:4},{value:"Cancel",id:"cancel",level:4},{value:"End",id:"end",level:4},{value:"Continue",id:"continue",level:4},{value:"Voting to a process",id:"voting-to-a-process",level:3},{value:"Check if a user is in census",id:"check-if-a-user-is-in-census",level:4},{value:"Check if a user has already voted",id:"check-if-a-user-has-already-voted",level:4},{value:"Get how many times the user can submit a vote (vote rewrite)",id:"get-how-many-times-the-user-can-submit-a-vote-vote-rewrite",level:4},{value:"Check if a user is able to vote",id:"check-if-a-user-is-able-to-vote",level:4},{value:"Vote",id:"vote",level:4},{value:"Other SDK functionalities",id:"other-sdk-functionalities",level:3},{value:"Generate a random Wallet",id:"generate-a-random-wallet",level:4},{value:"Generate deterministic Wallet from data",id:"generate-deterministic-wallet-from-data",level:4},{value:"Advanced",id:"advanced",level:3},{value:"Use a CSP to validate participants in an election",id:"use-a-csp-to-validate-participants-in-an-election",level:4},{value:"Examples",id:"examples",level:2},{value:"Docs",id:"docs",level:2},{value:"License",id:"license",level:2}],d={toc:r};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vocdoni-sdk"},"Vocdoni SDK"),(0,o.kt)("p",null,"The Vocdoni SDK is a convenient way to interact with the Vocdoni Protocol\nthrough ",(0,o.kt)("a",{parentName:"p",href:"https://vocdoni.io/api"},"the new API"),", allowing anyone to create, manage and\nparticipate in voting processes and collective decision-making."),(0,o.kt)("h2",{id:"live-preview"},"Live preview"),(0,o.kt)("p",null,"You can test the SDK ",(0,o.kt)("a",{parentName:"p",href:"https://vocdoni.github.io/vocdoni-sdk/"},"here"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/vocdoni/vocdoni-sdk/main/docs/images/cra.png",alt:"Live preview"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"No funds needed in your wallet"),": Metamask or Walletconnect are only used for\nsigning transactions that are sent to the Vocdoni chain! Testing tokens in ",(0,o.kt)("inlineCode",{parentName:"p"},"dev"),"\nenvironment are automatically sent from faucet once the account is created.")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"#examples"},"examples")," for more examples."),(0,o.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,o.kt)("p",null,"The Vocdoni SDK and the underlying API is WIP. Please beware that it can be broken\nat any time if the release is ",(0,o.kt)("inlineCode",{parentName:"p"},"alpha")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"beta"),". We encourage to review this\nrepository for any change."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"You'll need a working ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org"},"nodejs")," environment, but other than that, you're\nfree to use any package manager (either npm, yarn, pnpm...). Let's start by\nadding the SDK to your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# with yarn\nyarn add @vocdoni/sdk\n# with npm\nnpm i @vocdoni/sdk\n# with pnpm\npnpm add @vocdoni/sdk\n")),(0,o.kt)("p",null,"For creating elections or vote on them, blockchain transactions need to be\nbuild, thus a signer is required. Any kind of standard ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ethers-io/ethers.js"},"ethers")," signer should\nwork."),(0,o.kt)("p",null,"This project has been bundled into many formats in order for you to\nimport it based on the environment you're using it. When importing it via\n",(0,o.kt)("inlineCode",{parentName:"p"},"@vocdoni/sdk")," it will choose a version based on your current environment\n(commonjs or esm). There's also another UMD version which can be accessed via\n",(0,o.kt)("inlineCode",{parentName:"p"},"@vocdoni/sdk/umd")," in case you need it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Will use the correct version based on your environment\nimport { VocdoniSDKClient } from '@vocdoni/sdk'\n// UMD version\nimport SDK from '@vocdoni/sdk/umd'\n")),(0,o.kt)("p",null,"You can see a working ESM example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/main/examples/esm"},"in the examples folder"),"."),(0,o.kt)("h2",{id:"sdk-usage"},"SDK Usage"),(0,o.kt)("p",null,"The entry point is the SDK constructor, it will instantiate a new client\nconnected to the API endpoint corresponding to ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," (development) or ",(0,o.kt)("inlineCode",{parentName:"p"},"stg")," (staging)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For this readme examples, the signer bootstrapping will be ignored and you'll\njust see a ",(0,o.kt)("inlineCode",{parentName:"p"},"signer")," constant.")),(0,o.kt)("h3",{id:"environment"},"Environment"),(0,o.kt)("h4",{id:"staging"},"Staging"),(0,o.kt)("p",null,"This is the ",(0,o.kt)("strong",{parentName:"p"},"recommended")," environment for most testing use cases, since the\n",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," environment is more subject to blockchain resets and downtimes than\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"stg")," one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const client = new VocdoniSDKClient({\n  env: EnvOptions.STG, // mandatory, can be 'dev' or 'stg'\n  wallet: signer, // optional, the signer used (Metamask, Walletconnect)\n})\n")),(0,o.kt)("h4",{id:"development"},"Development"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const client = new VocdoniSDKClient({\n  env: EnvOptions.DEV, // mandatory, can be 'dev' or 'stg'\n  wallet: signer, // optional, the signer used (Metamask, Walletconnect)\n})\n")),(0,o.kt)("h3",{id:"registering-account"},"Registering account"),(0,o.kt)("p",null,"Before creating any new processes, you should register your account against\nour blockchain (vochain):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  const info = await client.createAccount()\n  console.log(info) // will show account information\n})();\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"createAccount")," method will try to fetch an existing account first and, if\nit does not exist, it will register it against the blockchain."),(0,o.kt)("p",null,"The account to be registered will be the one of the signer specified in the\nconstructor."),(0,o.kt)("p",null,"You can safely use ",(0,o.kt)("inlineCode",{parentName:"p"},"createAccount")," to fetch any account information, but you can\nalso decide to just fetch it, without falling back to an account registration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  const info = await client.fetchAccountInfo()\n  console.log(info) // shows info (only if account exists, otherwise throws error)\n})();\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"createAccount")," also accepts some information about the account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  const account = new Account({\n    languages: ['es'],\n    name: {\n      es: 'Nombre de la cuenta',\n      default: 'Account name',\n    },\n    description: 'Description of the account',\n    feed: 'https://feed.io',\n    avatar: 'https://avatar.io',\n    header: 'https://header.io',\n    logo: 'https://logo.io',\n    meta: [\n      { key: 'twitter', value: 'https://twitter.com/@orghandle' },\n      { key: 'someIpfsValue', value: 'ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k' },\n      { key: 'someArbitraryData', value: [123, 456] },\n      { key: 'someEmptyData', value: {} },\n    ],\n  });\n  const info = await client.createAccount({ account })\n})();\n")),(0,o.kt)("h3",{id:"vocdoni-tokens-faucet--balance"},"Vocdoni tokens; faucet & balance"),(0,o.kt)("p",null,"Accounts require Vocdoni tokens in order to be able to register against our\nblockchain. The process above will automatically fetch some tokens from a faucet\n",(0,o.kt)("strong",{parentName:"p"},"under development"),". For production environments, you should contact us (Vocdoni)\nfor a byte64 string faucet, and specify it when creating your account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'(async () => {\n  const info = await client.createAccount({\n    faucetPackage: "<b64string>"\n  })\n})();\n')),(0,o.kt)("p",null,"Accounts also require Vocdoni tokens in order to create new processes."),(0,o.kt)("p",null,"You can check the balance thanks to the previous methods (",(0,o.kt)("inlineCode",{parentName:"p"},"createAccount")," and/or\n",(0,o.kt)("inlineCode",{parentName:"p"},"fetchAccountInfo"),") and, under development, you can request new tokens thanks\nto the included faucet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  const info = await client.createAccount()\n  if (info.balance === 0) {\n    await client.collectFaucetTokens()\n  }\n})();\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: the ",(0,o.kt)("inlineCode",{parentName:"p"},"collectFaucetTokens")," method only works under development environment\nand for accounts with not enough tokens to create new processes.")),(0,o.kt)("h3",{id:"creating-a-voting-process"},"Creating a voting process"),(0,o.kt)("p",null,"After you successfully registered your account against Vocdoni's blockchain, you\ncan start creating processes."),(0,o.kt)("p",null,"A process will require a census of people who will vote it. Let's start creating\nit:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const census = new PlainCensus()\n// accepts any ethereum-alike addresses\ncensus.add(address)\ncensus.add('0x0000000000000000000000000000000000000000')\n(async () => {\n  // random wallet, for example purposes\n  census.add(await Wallet.createRandom().getAddress())\n})();\n")),(0,o.kt)("p",null,"After you got all the addresses for your census, you may as well create the\nprocess instance:"),(0,o.kt)("p",null,"The simplest form to create an election with the minimum parameters is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const election = Election.from({\n  title: 'Election title',\n  description: 'Election description',\n  endDate: new Date('2023-01-23 23:23:23'),\n  census,\n})\n")),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/main/src/types/election/election.ts#23"},"election params interface")," to see all the allowed params. There are several\noptions for creating custom types of elections or voting methods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const election = Election.from({\n  title: {\n    en: 'This is a test in english',\n    es: 'Esto es un test en castellano',\n    default: 'This is the default title',\n  },\n  description: 'Election description',\n  // a header image for your election (this is for example purposes; avoid using random sources)\n  header: 'https://source.unsplash.com/random/2048x600',\n  // a stream uri image for your election (this is for example purposes; avoid using random sources)\n  streamUri: 'https://source.unsplash.com/random/2048x600',\n  startDate: new Date('2023-01-23 12:00:00'),\n  endDate: new Date('2023-01-23 23:23:23'),\n  census,\n  electionType: {\n    autoStart: true, // if the election can start automatically at start date\n    interruptible: true, // if the election can be paused or ended\n    dynamicCensus: false, // if the census can be changed\n    secretUntilTheEnd: false, // if the election has to be secret until end date\n    anonymous: false, // if the election is anonymous\n  },\n  voteType: {\n    uniqueChoices: false, // if the choices are unique when voting\n    maxVoteOverwrites: 0, // number of times a vote can be overwritten\n    costFromWeight: false, // for cuadrating voting\n    costExponent: 10000, // for cuadrating voting\n  }\n})\n")),(0,o.kt)("p",null,"Of course, you will also need some questions in this voting process, how would people\nvote otherwise?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"election.addQuestion('Ain\\'t this process awesome?', 'Question description', [\n  {\n    title: 'Yes',\n    value: 0,\n  },\n  {\n    title: 'No',\n    value: 1,\n  },\n]).addQuestion('How old are you?', 'Question description', [\n  {\n    title: 'Child (0-9 yo)',\n    value: 0,\n  },\n  {\n    title: 'Kid (10-16 yo)',\n    value: 1,\n  },\n  {\n    title: 'Adult (17-60 yo)',\n    value: 2,\n  },\n  {\n    title: 'Elder (60+ yo)',\n    value: 3,\n  },\n])\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you're a developer, maybe the value set to zero in Yes (and vice-versa)\nconfuses you. Note that this is a mapping of values; people voting on Yes will\nproperly set the value as specified (zero in this case), thus printing the\nresults as you expect.")),(0,o.kt)("p",null,"You can finally confirm the transaction in the blockchain by just calling\n",(0,o.kt)("inlineCode",{parentName:"p"},"createElection"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  const id = await client.createElection(election)\n  console.log(id) // will show the created election id\n})();\n")),(0,o.kt)("p",null,"The election id you got there will be the one you use to access the election.\nAfter a few seconds of creating it, you should be able to check it on\n",(0,o.kt)("a",{parentName:"p",href:"https://explorer.vote"},"our explorer")," (or the ",(0,o.kt)("a",{parentName:"p",href:"https://dev.explorer.vote"},"dev one")," if\nyou're using the development environment)."),(0,o.kt)("h3",{id:"other-election-types"},"Other election types"),(0,o.kt)("h4",{id:"quadratic-voting"},"Quadratic voting"),(0,o.kt)("p",null,"Here is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/main/examples/typescript/src/quadratic.ts"},"full working example")," of how to create a quadratic voting election.\nMore information can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vocdoni.io/protocol/ballot#quadratic-voting"},"documentation"),"."),(0,o.kt)("h4",{id:"approval-voting"},"Approval voting"),(0,o.kt)("p",null,"Here is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/main/examples/typescript/src/approval.ts"},"full working example")," of how to create an approval voting election.\nMore information can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vocdoni.io/protocol/ballot#multiquestion"},"documentation"),"."),(0,o.kt)("h4",{id:"ranked-voting"},"Ranked voting"),(0,o.kt)("p",null,"Here is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/main/examples/typescript/src/ranked.ts"},"full working example")," of how to create a ranked voting election.\nMore information can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vocdoni.io/protocol/ballot#linear-weighted-choice"},"documentation"),"."),(0,o.kt)("h3",{id:"other-election-functionalities"},"Other election functionalities"),(0,o.kt)("h4",{id:"estimate-election-cost"},"Estimate election cost"),(0,o.kt)("p",null,"This is a fast function (most times will resolve automatically) which allows to estimate a election price in tokens:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  const price = await client.estimateElectionCost(election) // Should be an UnpublishedElection\n  console.log(price) // shows the estimation price\n})();\n")),(0,o.kt)("h4",{id:"calculate-the-real-election-cost"},"Calculate the real election cost"),(0,o.kt)("p",null,"This function returns the exact election price in tokens:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  const price = await client.calculateElectionCost(election) // Should be an UnpublishedElection\n  console.log(price) // shows the real price\n})();\n")),(0,o.kt)("h3",{id:"fetching-election-info"},"Fetching election info"),(0,o.kt)("p",null,"You can always access a election information and metadata using ",(0,o.kt)("inlineCode",{parentName:"p"},"fetchElection"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  const info = await client.fetchElection(id)\n  console.log(info) // shows election information and metadata\n})();\n\n// or...\n(async () => {\n  client.setElectionId(id)\n  const info = await client.fetchElection()\n  console.log(info) // shows election information and metadata\n})();\n")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/main/src/types/election/published.ts"},"PublishedElection class")," details for more information\nabout the returning object."),(0,o.kt)("p",null,"You can also fetch all the elections created for a given account using ",(0,o.kt)("inlineCode",{parentName:"p"},"fetchElections"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  const elections = await client.fetchElections('0x3d0380f4dcc8aa87be30ef0e38f56dfefeb1cfad')\n  console.log(elections) // Array of PublishedElection\n})();\n\n// it can be paginated using the second parameter\n(async () => {\n  const elections = await client.fetchElections('0x3d0380f4dcc8aa87be30ef0e38f56dfefeb1cfad', 2)\n  console.log(elections) // Array of PublishedElection\n})();\n")),(0,o.kt)("h3",{id:"changing-election-status"},"Changing election status"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vocdoni.io/get-started/intro#election-lifecycle-states"},"Election lifecycle states")," details for more information\nabout the election status and the possible status changes once the election is created."),(0,o.kt)("h4",{id:"pause"},"Pause"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  await client.pauseElection(id)\n  const election = await client.fetchElection(id)\n  console.log(election.status) // Matches ElectionStatus.PAUSED\n})();\n")),(0,o.kt)("h4",{id:"cancel"},"Cancel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  await client.cancelElection(id)\n  const election = await client.fetchElection(id)\n  console.log(election.status) // Matches ElectionStatus.CANCELED\n})();\n")),(0,o.kt)("h4",{id:"end"},"End"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  await client.endElection(id)\n  const election = await client.fetchElection(id)\n  console.log(election.status) // Matches ElectionStatus.ENDED\n})();\n")),(0,o.kt)("h4",{id:"continue"},"Continue"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  await client.continueElection(id)\n  const election = await client.fetchElection(id)\n  console.log(election.status) // Matches ElectionStatus.READY\n})();\n")),(0,o.kt)("h3",{id:"voting-to-a-process"},"Voting to a process"),(0,o.kt)("h4",{id:"check-if-a-user-is-in-census"},"Check if a user is in census"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  const isInCensus = await client.isInCensus();\n  console.log(isInCensus) // true or false\n})();\n")),(0,o.kt)("h4",{id:"check-if-a-user-has-already-voted"},"Check if a user has already voted"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  const hasAlreadyVoted = await client.hasAlreadyVoted();\n  console.log(hasAlreadyVoted) // returns the vote identifier or null\n})();\n")),(0,o.kt)("h4",{id:"get-how-many-times-the-user-can-submit-a-vote-vote-rewrite"},"Get how many times the user can submit a vote (vote rewrite)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  const votesLeft = await client.votesLeftCount();\n  console.log(votesLeft) // number of times the user can submit his vote\n})();\n")),(0,o.kt)("h4",{id:"check-if-a-user-is-able-to-vote"},"Check if a user is able to vote"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  const isAbleToVote = await client.isAbleToVote();\n  console.log(isAbleToVote) // true or false\n})();\n")),(0,o.kt)("h4",{id:"vote"},"Vote"),(0,o.kt)("p",null,"To vote a process you only need two things: the process id to vote to, and the\noption (or options) being voted:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'(async () => {\n  client.setElectionId(id)\n  // votes "Yes" and "Adult (17-60 yo)"\n  const vote = new Vote([0, 2]);\n  const voteId = await client.submitVote(vote)\n})();\n')),(0,o.kt)("h3",{id:"other-sdk-functionalities"},"Other SDK functionalities"),(0,o.kt)("h4",{id:"generate-a-random-wallet"},"Generate a random Wallet"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"generateRandomWallet")," function to generate a random Wallet and assign it to the client.\nThis function returns the private key of the Wallet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const privateKey = client.generateRandomWallet();\nconsole.log(privateKey) // the private key of the wallet\n")),(0,o.kt)("h4",{id:"generate-deterministic-wallet-from-data"},"Generate deterministic Wallet from data"),(0,o.kt)("p",null,"For some cases where the voters don't have an owned Wallet, we can generate a deterministic\nWallet based on arbitrary data, like, for example, the user and hash password from a custom CRM."),(0,o.kt)("p",null,"Here is an example where a Wallet is generated using the username and the hash of the password\nwhich we would use to identify the user in our platform. This Wallet can then be used for the\ncensus and for voting purposes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// 9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08 is the sha256 of 'test'\nconst userWallet = VocdoniSDKClient.generateWalletFromData(['user1', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08']);\nconsole.log(userWallet) // address is 0x8AF1b3EDB817b5854e3311d583905a3421F49829\n")),(0,o.kt)("h3",{id:"advanced"},"Advanced"),(0,o.kt)("h4",{id:"use-a-csp-to-validate-participants-in-an-election"},"Use a CSP to validate participants in an election"),(0,o.kt)("p",null,"The SDK comes with an implementation of the common handler API of a CSP which is explained\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/blind-csp#api"},"here"),"."),(0,o.kt)("p",null,"For creating a CSP based election, a ",(0,o.kt)("inlineCode",{parentName:"p"},"CspCensus")," has to be set to the election. This census need the\nCSP public key (",(0,o.kt)("inlineCode",{parentName:"p"},"CSP_PUBKEY")," in the example) and the CSP Url (",(0,o.kt)("inlineCode",{parentName:"p"},"CSP_URL")," in the example). "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const election = Election.from({\n  title: 'Election title',\n  description: 'Election description',\n  // a header image for your process (this is for example purposes; avoid using random sources)\n  header: 'https://source.unsplash.com/random/2048x600',\n  endDate: new Date('2023-01-23 23:23:23'),\n  census: new CspCensus(CSP_PUBKEY, CSP_URL),\n})\n// The election can be created the same way from here...\n")),(0,o.kt)("p",null,"The SDK comes with some wrappers to get a blind signature from the CSP in order to vote.\nThe complete flow is shown here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Client initialization\nconst client = new VocdoniSDKClient({\n  env: EnvOptions.DEV,\n  wallet: signer, // the signer used (Metamask, Walletconnect)\n  electionId: '934234...', // The election identifier (has to be a CSP configured election)\n})\n\n// Auth steps for the CSP (can vary of the type of the CSP)\nconst step0 = (await client.cspStep(0, ['Name test'])) as ICspIntermediateStepResponse;\nconst step1 = (await client.cspStep(\n  1,\n  [step0.response.reduce((acc, v) => +acc + +v, 0).toString()],\n  step0.authToken\n)) as ICspFinalStepResponse;\n\n// Get the blind signature\nconst signature = await client.cspSign(signer.address, step1.token);\n\n// Get the vote based on the signature\nconst vote = client.cspVote(new Vote([index % 2]), signature);\n\n// Vote\nconst voteId = await client.submitVote(vote);\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"You can find a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/main/examples/cra"},"full featured CRA")," application with all the previous\nsteps in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/main/examples"},"examples")," folder. In that folder you'll also find a\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/main/examples/esm"},"es modules example"),", creating and voting an election process."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/vocdoni/vocdoni-sdk/main/examples/esm/esm.gif",alt:"example-esm demo"})),(0,o.kt)("h2",{id:"docs"},"Docs"),(0,o.kt)("p",null,"You can find the autogenerated docs in our ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vocdoni.io/sdk"},"Developer Portal")," or you\ncan build them following ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/main/docs/README.md"},"this guide"),"."),(0,o.kt)("h2",{id:"license"},"License"),(0,o.kt)("p",null,"This SDK is licensed under the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/main/LICENSE"},"GNU Affero General Public License v3.0"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Vocdoni API Typescript SDK\nCopyright (C) 2022 Vocdoni Roots MCU\n\nThis program is free software: you can redistribute it and/or modify\nit under the terms of the GNU Affero General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\n\nThis program is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU Affero General Public License for more details.\n\nYou should have received a copy of the GNU Affero General Public License\nalong with this program.  If not, see <https://www.gnu.org/licenses/>.\n")))}u.isMDXComponent=!0}}]);