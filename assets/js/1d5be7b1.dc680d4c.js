"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2428],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>p});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),h=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=h(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=h(o),p=r,f=d["".concat(c,".").concat(p)]||d[p]||u[p]||a;return o?n.createElement(f,s(s({ref:t},l),{},{components:o})):n.createElement(f,s({ref:t},l))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var h=2;h<a;h++)s[h]=o[h];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},49986:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>h});var n=o(87462),r=(o(67294),o(3905));const a={},s="On-Chain Census",i={unversionedId:"protocol/census/on-chain/on-chain",id:"protocol/census/on-chain/on-chain",title:"On-Chain Census",description:"An on-chain census is one which is dependent on the status of the Ethereum blockchain at a given point in time. This census type enables the set of eligible voters to be derived from the token holder balances for some ERC-20 Ethereum token, weighted according to token balances. The ideal use-case for such a census is an organization whose members are represented as holders of some token, such as a DAO.",source:"@site/docs/protocol/census/on-chain/on-chain.md",sourceDirName:"protocol/census/on-chain",slug:"/protocol/census/on-chain/",permalink:"/protocol/census/on-chain/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Off-Chain Tree Census",permalink:"/protocol/census/off-chain-tree"},next:{title:"Census3 Service",permalink:"/protocol/census/on-chain/census3"}},c={},h=[{value:"Census3 Service",id:"census3-service",level:2},{value:"ERC-20 Token Storage Proofs",id:"erc-20-token-storage-proofs",level:2},{value:"Storage Tries",id:"storage-tries",level:3},{value:"Token Registration",id:"token-registration",level:3},{value:"Election creation",id:"election-creation",level:3},{value:"Voting",id:"voting",level:3}],l={toc:h};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"on-chain-census"},"On-Chain Census"),(0,r.kt)("p",null,"An on-chain census is one which is dependent on the status of the Ethereum blockchain at a given point in time. This census type enables the set of eligible voters to be derived from the token holder balances for some ERC-20 Ethereum token, weighted according to token balances. The ideal use-case for such a census is an organization whose members are represented as holders of some token, such as a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Decentralized_autonomous_organization"},"DAO"),"."),(0,r.kt)("p",null,"There are two ways with Vocdoni to create an on-chain census: Ethereum Storage Proofs and the Census3 service. Ethereum Storage Proofs is the legacy method which requires a higher setup cost and more manual work by integrators. The Census3 Service provided by Vocdoni abstracts this complexity away and exposes an API to create and access token-holder censuses. "),(0,r.kt)("h2",{id:"census3-service"},"Census3 Service"),(0,r.kt)("p",null,"The Census3 Service is an API service which provides an easy way to create censuses for elections with holders of a single token or a combination of them. This is a wrapper of the on-chain census design and enables integrators to use on-chain censuses without manually registering tokens or generating storage proofs."),(0,r.kt)("p",null,"The Census3 Service is documented in-depth ",(0,r.kt)("a",{parentName:"p",href:"/protocol/census/on-chain/census3"},"here"),"."),(0,r.kt)("h2",{id:"erc-20-token-storage-proofs"},"ERC-20 Token Storage Proofs"),(0,r.kt)("p",null,"An Ethereum Storage Proof is a way to create an on-chain census without the use of the Census3 Service. This approach uses a Token Storage Proof Smart Contract to generate a proof of a given token's holders which can then be used directly as a census."),(0,r.kt)("p",null,"Anyone can permissionlessly register a token to the Storage Proof Smart Contract, incurring some gas cost. Then any holder of the token can create a voting process for that token and set the proper census origin value to signal the use of an on-chain census. The Census Merkle Root is the Ethereum Root Hash at a given block height, and any user can request a Merkle Proof that their address holds tokens on the target ERC20 smart contract. They can then provide this proof to vote on processes for the entity representing that token address. Weighted processes enable users to employ a voting power that is proportionate to the number of tokens they hold."),(0,r.kt)("h3",{id:"storage-tries"},"Storage Tries"),(0,r.kt)("p",null,"Each Ethereum account has its own Storage Trie, which is where all of the contract data lives for that account. A 256-bit hash of the storage trie\u2019s root node is stored as the storageRoot value in the global Ethereum state trie. In the context of storage proofs, we are concerned with ERC-20 Token Smart Contract accounts, whose Storage Tries contain the list of token balances of each token holder. "),(0,r.kt)("p",null,"A storage proof is a Merkle Proof computed on this storage trie. For the scope of this proposal, the storage proof allows anyone to demonstrate the balance of a token holder for a given ERC-20 token, at a specific State Root Hash (Ethereum block). In other words, we can cheaply generate a proof of any user's balance of a token, and this proof can be used in a Vocdoni voting census.  "),(0,r.kt)("h3",{id:"token-registration"},"Token Registration"),(0,r.kt)("p",null,"Before starting an election, the target token needs to be registered to the Token StorageProof Smart Contract. Any token holder can register the token by providing a valid storage proof."),(0,r.kt)("p",null,"In order to create a storage proof, on a mapping-based ERC20 contract, the ",(0,r.kt)("inlineCode",{parentName:"p"},"index slot")," must be found. This depends on the contract implementation and refers to the storage layout of the Ethereum EVM. Most of the ",(0,r.kt)("inlineCode",{parentName:"p"},"index slots")," are between 1 and 10. "),(0,r.kt)("p",null,"The user registering a new token must first try to find the index slot. To this aim, a web-frontend and a typescript library will be available. Once the index slot is found, the user must send a transaction to the Token StorageProof SC indicating the ",(0,r.kt)("inlineCode",{parentName:"p"},"index slot")," and providing the Merkle proof that demonstrates the index slot and their possession of the token. "),(0,r.kt)("h3",{id:"election-creation"},"Election creation"),(0,r.kt)("p",null,"When a token holder wants to create a process with an on-chain census origin, they must send a transaction to the Vocdoni Smart Contract with the election process details, including the token contract address for which the process is being created.\nThe Smart Contract will check if the sender holds some minimum threshold tokens on the ERC20 contract address. "),(0,r.kt)("h3",{id:"voting"},"Voting"),(0,r.kt)("p",null,"In order to cast a vote, each user needs to fetch their Census Merkle Proof. The client connects to a Web3 endpoint and uses the RPC call ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_getProof")," to retrieve this proof."),(0,r.kt)("p",null,"Once the user decides to cast a vote, a package will be forged containing the census proof, vote choice (represented as an array of integers) and signature (using Metamask)."),(0,r.kt)("p",null,"The transaction of sending a vote is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "eth_getProof": { \n      "type":"vote",\n      "processId": "0x47384...",\n      "weight": "0x123",\n      "proof": "MerkleProof",\n      "votePackage": "base64encoded vote package",\n      "signature": "signature performed with the privkey that computes the address"\n  }\n}\n')),(0,r.kt)("p",null,"The vote will be considered valid only if the signature computes an Ethereum address for which\xa0the provided Merkle proof and its weight (balance) is valid for the census root hash (Ethereum storage root) at the height of the process start block."),(0,r.kt)("p",null,"The storage proofs contract acts as a registry which allows token holders to prove that they held funds at a given point in time and therefore are eligible voters for a process."))}u.isMDXComponent=!0}}]);