"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6569],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var r=a.createContext({}),c=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(r.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),h=o,m=u["".concat(r,".").concat(h)]||u[h]||p[h]||i;return t?a.createElement(m,s(s({ref:n},d),{},{components:t})):a.createElement(m,s({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=u;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},16192:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(87462),o=(t(67294),t(3905));const i={},s="Vocdoni SDK",l={unversionedId:"sdk/sdk",id:"sdk/sdk",title:"Vocdoni SDK",description:"The Vocdoni SDK is a convenient way to interact with the Vocdoni Protocol",source:"@site/docs/sdk/sdk.md",sourceDirName:"sdk",slug:"/sdk/",permalink:"/sdk/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sdk",next:{title:"AccountAPI",permalink:"/sdk/AccountAPI"}},r={},c=[{value:"Live preview",id:"live-preview",level:2},{value:"Disclaimer",id:"disclaimer",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"SDK Usage",id:"sdk-usage",level:2},{value:"Environment",id:"environment",level:3},{value:"Staging",id:"staging",level:4},{value:"Development",id:"development",level:4},{value:"Registering account",id:"registering-account",level:3},{value:"Vocdoni tokens; faucet &amp; balance",id:"vocdoni-tokens-faucet--balance",level:3},{value:"Creating a voting process",id:"creating-a-voting-process",level:3},{value:"Fetching process info",id:"fetching-process-info",level:3},{value:"Changing election status",id:"changing-election-status",level:3},{value:"Pause",id:"pause",level:4},{value:"Cancel",id:"cancel",level:4},{value:"End",id:"end",level:4},{value:"Continue",id:"continue",level:4},{value:"Voting to a process",id:"voting-to-a-process",level:3},{value:"Check if a user is in census",id:"check-if-a-user-is-in-census",level:4},{value:"Check if a user has already voted",id:"check-if-a-user-has-already-voted",level:4},{value:"Check if a user is able to vote",id:"check-if-a-user-is-able-to-vote",level:4},{value:"Vote",id:"vote",level:4},{value:"Other SDK functionalities",id:"other-sdk-functionalities",level:3},{value:"Generate deterministic Wallet from data",id:"generate-deterministic-wallet-from-data",level:4},{value:"Advanced",id:"advanced",level:3},{value:"Use a CSP to validate participants in an election",id:"use-a-csp-to-validate-participants-in-an-election",level:4},{value:"Examples",id:"examples",level:2},{value:"Docs",id:"docs",level:2},{value:"License",id:"license",level:2}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vocdoni-sdk"},"Vocdoni SDK"),(0,o.kt)("p",null,"The Vocdoni SDK is a convenient way to interact with the Vocdoni Protocol\nthrough ",(0,o.kt)("a",{parentName:"p",href:"https://vocdoni.io/api"},"the new API"),", allowing anyone to create, manage and\nparticipate in voting processes and collective decision-making."),(0,o.kt)("h2",{id:"live-preview"},"Live preview"),(0,o.kt)("p",null,"You can test the SDK ",(0,o.kt)("a",{parentName:"p",href:"https://vocdoni.github.io/vocdoni-sdk/"},"here"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/vocdoni/vocdoni-sdk/main/docs/images/cra.png",alt:"Live preview"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"No funds needed in your wallet"),": Metamask or Walletconnect are only used for\nsigning transactions that are sent to the Vocdoni chain! Testing tokens in ",(0,o.kt)("inlineCode",{parentName:"p"},"dev"),"\nenvironment are automatically sent from faucet once the account is created.")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"#examples"},"examples")," for more examples."),(0,o.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,o.kt)("p",null,"The Vocdoni SDK and the underlying API is WIP. Please beware that it can be broken\nat any time if the release is ",(0,o.kt)("inlineCode",{parentName:"p"},"alpha")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"beta"),". We encourage to review this\nrepository for any change."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"You'll need a working ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org"},"nodejs")," environment, but other than that, you're\nfree to use any package manager (either npm, yarn, pnpm...). Let's start by\nadding the SDK to your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# with yarn\nyarn add @vocdoni/sdk\n# with npm\nnpm i @vocdoni/sdk\n# with pnpm\npnpm add @vocdoni/sdk\n")),(0,o.kt)("p",null,"For creating elections or vote on them, blockchain transactions need to be\nbuild, thus a signer is required. Any kind of standard ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ethers-io/ethers.js"},"ethers")," signer should\nwork."),(0,o.kt)("p",null,"This project has been bundled into many different formats in order for you to\nimport it based on the environment you're using it. When importing it via\n",(0,o.kt)("inlineCode",{parentName:"p"},"@vocdoni/sdk")," it will chose a version based on your current environment\n(commonjs or esm). There's also another UMD version which can be accessed via\n",(0,o.kt)("inlineCode",{parentName:"p"},"@vocdoni/sdk/umd")," in case you need it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Will use the correct version based on your environment\nimport { VocdoniSDKClient } from '@vocdoni/sdk'\n// UMD version\nimport SDK from '@vocdoni/sdk/umd'\n")),(0,o.kt)("p",null,"You can see a working ESM example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/main/examples/esm"},"in the examples folder"),"."),(0,o.kt)("h2",{id:"sdk-usage"},"SDK Usage"),(0,o.kt)("p",null,"The entry point is the SDK constructor, it will instantiate a new client\nconnected to the API endpoint corresponding to ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," (development) or ",(0,o.kt)("inlineCode",{parentName:"p"},"stg")," (staging)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For this readme examples, the signer bootstrapping will be ignored and you'll\njust see a ",(0,o.kt)("inlineCode",{parentName:"p"},"signer")," constant.")),(0,o.kt)("h3",{id:"environment"},"Environment"),(0,o.kt)("h4",{id:"staging"},"Staging"),(0,o.kt)("p",null,"This is the ",(0,o.kt)("strong",{parentName:"p"},"recommended")," environment for most testing use cases, since the\n",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," environment is more subject to blockchain resets and downtimes than\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"stg")," one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const client = new VocdoniSDKClient({\n  env: EnvOptions.STG, // mandatory, can be 'dev' or 'stg'\n  wallet: signer, // optional, the signer used (Metamask, Walletconnect)\n})\n")),(0,o.kt)("h4",{id:"development"},"Development"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const client = new VocdoniSDKClient({\n  env: EnvOptions.DEV, // mandatory, can be 'dev' or 'stg'\n  wallet: signer, // optional, the signer used (Metamask, Walletconnect)\n})\n")),(0,o.kt)("h3",{id:"registering-account"},"Registering account"),(0,o.kt)("p",null,"Before creating any new processes, you should register your account against\nour blockchain (vochain):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  const info = await client.createAccount()\n  console.log(info) // will show account information\n})();\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"createAccount")," method will try to fetch an existing account first and, if\nit does not exist, it will register it against the blockchain."),(0,o.kt)("p",null,"The account to be registered will be the one of the signer specified in the\nconstructor."),(0,o.kt)("p",null,"You can safely use ",(0,o.kt)("inlineCode",{parentName:"p"},"createAccount")," to fetch any account information, but you can\nalso decide to just fetch it, without falling back to an account registration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  const info = await client.fetchAccountInfo()\n  console.log(info) // shows info (only if account exists, otherwise throws error)\n})();\n")),(0,o.kt)("h3",{id:"vocdoni-tokens-faucet--balance"},"Vocdoni tokens; faucet & balance"),(0,o.kt)("p",null,"Accounts require Vocdoni tokens in order to be able to register against our\nblokchain. The process above will automatically fetch some tokens from a faucet\n",(0,o.kt)("strong",{parentName:"p"},"under development"),". For production environments, you should contact us (Vocdoni)\nfor a byte64 string faucet, and specify it when creating your account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'(async () => {\n  const info = await client.createAccount({\n    faucetPackage: "<b64string>"\n  })\n})();\n')),(0,o.kt)("p",null,"Accounts also require Vocdoni tokens in order to create new processes."),(0,o.kt)("p",null,"You can check the balance thanks to the previous methods (",(0,o.kt)("inlineCode",{parentName:"p"},"createAccount")," and/or\n",(0,o.kt)("inlineCode",{parentName:"p"},"fetchAccountInfo"),") and, under development, you can request new tokens thanks\nto the included faucet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  const info = await client.createAccount()\n  if (info.balance === 0) {\n    await client.collectFaucetTokens()\n  }\n})();\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: the ",(0,o.kt)("inlineCode",{parentName:"p"},"collectFaucetTokens")," method only works under development environment\nand for accounts with not enough tokens to create new processes.")),(0,o.kt)("h3",{id:"creating-a-voting-process"},"Creating a voting process"),(0,o.kt)("p",null,"After you successfully registered your account against Vocdoni's blockchain, you\ncan start creating processes."),(0,o.kt)("p",null,"A process will require a census of people who will vote it. Let's start creating\nit:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const census = new PlainCensus()\n// accepts any ethereum-alike addresses\ncensus.add(address)\ncensus.add('0x0000000000000000000000000000000000000000')\n(async () => {\n  // random wallet, for example purposes\n  census.add(await Wallet.createRandom().getAddress())\n})();\n")),(0,o.kt)("p",null,"Note you can also use compressed public keys when adding them to the census:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"census.add(computePublicKey(Wallet.createRandom().publicKey, true));\n")),(0,o.kt)("p",null,"After you got all the addresses for your census, you may as well create the\nprocess instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const election = Election.from({\n  title: 'Election title',\n  description: 'Election description',\n  // a header image for your process (this is for example purposes; avoid using random sources)\n  header: 'https://source.unsplash.com/random/2048x600',\n  endDate: new Date('2023-01-23 23:23:23'),\n  census,\n})\n")),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/main/src/types/election/election.ts#23"},"election params interface")," to see all the allowed params."),(0,o.kt)("p",null,"Of course, you will also need some questions in this voting process, how would people\nvote otherwise?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"election.addQuestion('Ain\\'t this process awesome?', [\n  {\n    title: 'Yes',\n    value: 0,\n  },\n  {\n    title: 'No',\n    value: 1,\n  },\n]).addQuestion('How old are you?', [\n  {\n    title: 'Child (0-9 yo)',\n    value: 0,\n  },\n  {\n    title: 'Kid (10-16 yo)',\n    value: 1,\n  },\n  {\n    title: 'Adult (17-60 yo)',\n    value: 2,\n  },\n  {\n    title: 'Elder (60+ yo)',\n    value: 3,\n  },\n])\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you're a developer, maybe the value set to zero in Yes (and viceversa)\nconfuses you. Note that this is a mapping of values; people voting on Yes will\nproperly set the value as specified (zero in this case), thus printing the\nresults as you expect.")),(0,o.kt)("p",null,"You can finally confirm the transaction in the blockchain by just calling\n",(0,o.kt)("inlineCode",{parentName:"p"},"createElection"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  const id = await client.createElection(election)\n  console.log(id) // will show the created election id\n})();\n")),(0,o.kt)("p",null,"The election id you got there will be the one you use to access the election.\nAfter a few seconds of creating it, you should be able to check it on\n",(0,o.kt)("a",{parentName:"p",href:"https://explorer.vote"},"our explorer")," (or the ",(0,o.kt)("a",{parentName:"p",href:"https://dev.explorer.vote"},"dev one")," if\nyou're using the development environment)."),(0,o.kt)("h3",{id:"fetching-process-info"},"Fetching process info"),(0,o.kt)("p",null,"You can always access a process information and metadata using ",(0,o.kt)("inlineCode",{parentName:"p"},"fetchElection"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  const info = await client.fetchElection(id)\n  console.log(info) // shows election information and metadata\n})();\n\n// or...\n(async () => {\n  client.setElectionId(id)\n  const info = await client.fetchElection()\n  console.log(info) // shows election information and metadata\n})();\n")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/main/src/types/election/published.ts"},"PublishedElection class")," details for more information\nabout the returning object."),(0,o.kt)("h3",{id:"changing-election-status"},"Changing election status"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vocdoni.io/get-started/intro#election-lifecycle-states"},"Election lifecycle states")," details for more information\nabout the election status and the possible status changes once the election is created."),(0,o.kt)("h4",{id:"pause"},"Pause"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  await client.pauseElection(id)\n  const election = await client.fetchElection(id)\n  console.log(election.status) // Matches ElectionStatus.PAUSED\n})();\n")),(0,o.kt)("h4",{id:"cancel"},"Cancel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  await client.cancelElection(id)\n  const election = await client.fetchElection(id)\n  console.log(election.status) // Matches ElectionStatus.CANCELED\n})();\n")),(0,o.kt)("h4",{id:"end"},"End"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  await client.endElection(id)\n  const election = await client.fetchElection(id)\n  console.log(election.status) // Matches ElectionStatus.ENDED\n})();\n")),(0,o.kt)("h4",{id:"continue"},"Continue"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  await client.continueElection(id)\n  const election = await client.fetchElection(id)\n  console.log(election.status) // Matches ElectionStatus.READY\n})();\n")),(0,o.kt)("h3",{id:"voting-to-a-process"},"Voting to a process"),(0,o.kt)("h4",{id:"check-if-a-user-is-in-census"},"Check if a user is in census"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  const isInCensus = await client.isInCensus();\n  console.log(isInCensus) // true or false\n})();\n")),(0,o.kt)("h4",{id:"check-if-a-user-has-already-voted"},"Check if a user has already voted"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  const hasAlreadyVoted = await client.hasAlreadyVoted();\n  console.log(hasAlreadyVoted) // true or false\n})();\n")),(0,o.kt)("h4",{id:"check-if-a-user-is-able-to-vote"},"Check if a user is able to vote"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  const isAbleToVote = await client.isAbleToVote();\n  console.log(isAbleToVote) // true or false\n})();\n")),(0,o.kt)("h4",{id:"vote"},"Vote"),(0,o.kt)("p",null,"To vote a process you only need two things: the process id to vote to, and the\noption (or options) being voted:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'(async () => {\n  client.setElectionId(id)\n  // votes "Yes" and "Adult (17-60 yo)"\n  const vote = new Vote([0, 2]);\n  const voteId = await client.submitVote(vote)\n})();\n')),(0,o.kt)("h3",{id:"other-sdk-functionalities"},"Other SDK functionalities"),(0,o.kt)("h4",{id:"generate-deterministic-wallet-from-data"},"Generate deterministic Wallet from data"),(0,o.kt)("p",null,"For some cases where the voters don't have an owned Wallet, we can generate a deterministic\nWallet based on arbitrary data, like, for example, the user and hash password from a custom CRM."),(0,o.kt)("p",null,"Here is an example where a Wallet is generated using the username and the hash of the password\nwhich we would use to identify the user in our platform. This Wallet can then be used for the\ncensus and for voting purposes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// 9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08 is the sha256 of 'test'\nconst userWallet = VocdoniSDKClient.generateWalletFromData(['user1', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08']);\nconsole.log(userWallet) // address is 0x8AF1b3EDB817b5854e3311d583905a3421F49829\n")),(0,o.kt)("h3",{id:"advanced"},"Advanced"),(0,o.kt)("h4",{id:"use-a-csp-to-validate-participants-in-an-election"},"Use a CSP to validate participants in an election"),(0,o.kt)("p",null,"The SDK comes with an implementation of the common handler API of a CSP which is explained\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/blind-csp#api"},"here"),"."),(0,o.kt)("p",null,"For creating a CSP based election, a ",(0,o.kt)("inlineCode",{parentName:"p"},"CspCensus")," has to be set to the election. This census need the\nCSP public key (",(0,o.kt)("inlineCode",{parentName:"p"},"CSP_PUBKEY")," in the example) and the CSP Url (",(0,o.kt)("inlineCode",{parentName:"p"},"CSP_URL")," in the example). "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const election = Election.from({\n  title: 'Election title',\n  description: 'Election description',\n  // a header image for your process (this is for example purposes; avoid using random sources)\n  header: 'https://source.unsplash.com/random/2048x600',\n  endDate: new Date('2023-01-23 23:23:23'),\n  census: new CspCensus(CSP_PUBKEY, CSP_URL),\n})\n// The election can be created the same way from here...\n")),(0,o.kt)("p",null,"The SDK comes with some wrappers to get a blind signature from the CSP in order to vote.\nThe complete flow is shown here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Client initialization\nconst client = new VocdoniSDKClient({\n  env: EnvOptions.DEV,\n  wallet: signer, // the signer used (Metamask, Walletconnect)\n  electionId: '934234...', // The election identifier\n  csp_url: CSP_URL // The CSP url defined when creating an election\n})\n\n// Auth steps for the CSP (can vary of the type of the CSP)\nconst step0 = (await client.cspStep(0, ['Name test'])) as ICspIntermediateStepResponse;\nconst step1 = (await client.cspStep(\n  1,\n  [step0.response.reduce((acc, v) => +acc + +v, 0).toString()],\n  step0.authToken\n)) as ICspFinalStepResponse;\n\n// Get the blind signature\nconst signature = await client.cspSign(signer.address, step1.token);\n\n// Get the vote based on the signature\nconst vote = client.cspVote(new Vote([index % 2]), signature);\n\n// Vote\nconst voteId = await client.submitVote(vote);\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"You can find a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/main/examples/cra"},"full featured CRA")," application with all the previous\nsteps in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/main/examples"},"examples")," folder. In that folder you'll also find a\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/main/examples/esm"},"es modules example"),", creating and voting an election process."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/vocdoni/vocdoni-sdk/blob/main/examples/esm/esm.gif",alt:"example-esm demo"})),(0,o.kt)("h2",{id:"docs"},"Docs"),(0,o.kt)("p",null,"You can find the autogenerated docs in our ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vocdoni.io/sdk"},"Developer Portal")," or you\ncan build them following ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/main/docs/README.md"},"this guide"),"."),(0,o.kt)("h2",{id:"license"},"License"),(0,o.kt)("p",null,"This SDK is licensed under the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/main/LICENSE"},"GNU Affero General Public License v3.0"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Vocdoni API Typescript SDK\nCopyright (C) 2022 Vocdoni Roots MCU\n\nThis program is free software: you can redistribute it and/or modify\nit under the terms of the GNU Affero General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\n\nThis program is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU Affero General Public License for more details.\n\nYou should have received a copy of the GNU Affero General Public License\nalong with this program.  If not, see <https://www.gnu.org/licenses/>.\n")))}p.isMDXComponent=!0}}]);