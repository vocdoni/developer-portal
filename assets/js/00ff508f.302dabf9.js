"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,y=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return n?o.createElement(y,l(l({ref:t},d),{},{components:n})):o.createElement(y,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={},l="Vote Data",i={unversionedId:"protocol/data-schemes/vote",id:"protocol/data-schemes/vote",title:"Vote Data",description:"Vote Envelope",source:"@site/docs/protocol/data-schemes/vote.md",sourceDirName:"protocol/data-schemes",slug:"/protocol/data-schemes/vote",permalink:"/protocol/data-schemes/vote",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Organization Metadata",permalink:"/protocol/data-schemes/organization"},next:{title:"Introduction",permalink:"/vocdoni-api/vocdoni-api"}},s={},p=[{value:"Vote Envelope",id:"vote-envelope",level:2},{value:"When <code>envelopeType.ANONYMOUS</code> is enabled",id:"when-envelopetypeanonymous-is-enabled",level:5},{value:"When <code>envelopeType.ANONYMOUS</code> is disabled",id:"when-envelopetypeanonymous-is-disabled",level:5},{value:"Vote Package",id:"vote-package",level:2},{value:"When <code>envelopeType.ENCRYPTED_VOTE</code> is disabled",id:"when-envelopetypeencrypted_vote-is-disabled",level:5},{value:"When <code>envelopeType.ENCRYPTED_VOTE</code> is enabled",id:"when-envelopetypeencrypted_vote-is-enabled",level:5},{value:"Results",id:"results",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vote-data"},"Vote Data"),(0,a.kt)("h2",{id:"vote-envelope"},"Vote Envelope"),(0,a.kt)("p",null,"The Vote Envelope contains a (possibly encrypted) Vote Package and provides details to prove that the incoming vote is valid. Some fields may be optional depending on the election ",(0,a.kt)("inlineCode",{parentName:"p"},"mode")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"envelopeType"),"."),(0,a.kt)("h5",{id:"when-envelopetypeanonymous-is-enabled"},"When ",(0,a.kt)("inlineCode",{parentName:"h5"},"envelopeType.ANONYMOUS")," is enabled"),(0,a.kt)("p",null,"This section will be available soon."),(0,a.kt)("h5",{id:"when-envelopetypeanonymous-is-disabled"},"When ",(0,a.kt)("inlineCode",{parentName:"h5"},"envelopeType.ANONYMOUS")," is disabled"),(0,a.kt)("p",null,"A signed (non-anonymous) Vote Envelope features the election ID, the Census Merkle Proof of the user, a nonce to prevent replay attacks, the index of the encryption keys used, a Base64 representation of the Vote Package and the user's signature."),(0,a.kt)("p",null,"In order to guarantee 100% reproduceability of the signature, the Vote Envelope is encoded as a Protobuf model and serialized into a byte array. This byte array is then signed and both fields are sent via a ",(0,a.kt)("inlineCode",{parentName:"p"},"SignedTx")," model to a Gateway. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Protobuf models\n\nmessage VoteEnvelope {\n        bytes nonce = 1;  // Unique number per vote attempt, so that replay attacks can't reuse this payload\n        bytes electionId = 2;  // The election for which the vote is cast\n        Proof proof = 3;  // One of ProofGraviton, ProofIden3, ProofEthereumStorage, ProofEthereumAccount, or ProofCA\n        bytes votePackage = 4;   // JSON string of the Vote Package, encoded as bytes. It may be encrypted.\n        bytes nullifier = 5;  // Hash of the private key + electionId (optional, depending on the type)\n\n        repeated uint32 encryptionKeyIndexes = 6; // On encrypted votes, contains the (sorted) indexes of the keys used to encrypt\n}\n\n// ...\n\nmessage Tx {\n    oneof payload {\n        VoteEnvelope vote = 1;\n        // ...\n    }\n}\n\nmessage SignedTx {\n    bytes tx = 1; // The bytes produced by Marshaling a Tx{} message\n    optional bytes signature = 2; // The signature for the tx bytes. \n    // signature is only required in those transactions that actually need a signature.\n        // I.e zk-SNARKs based transactions won't needed, however the transaction should use\n        // this message type in order to preserve consistency on the Vochain\n}\n\n")),(0,a.kt)("h2",{id:"vote-package"},"Vote Package"),(0,a.kt)("p",null,"Contains the actual votes and is part of the Vote Envelope."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "nonce": "01234567890abcdef", // 8+ byte random string to prevent guessing the encrypted payload before the reveal key is released\n    "votes": [  // Directly mapped to the `questions` field of the metadata\n        1, 3, 2\n    ]\n}\n')),(0,a.kt)("h5",{id:"when-envelopetypeencrypted_vote-is-disabled"},"When ",(0,a.kt)("inlineCode",{parentName:"h5"},"envelopeType.ENCRYPTED_VOTE")," is disabled"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"nonce")," can be omitted."),(0,a.kt)("li",{parentName:"ul"},"The package has to be serialized as a JSON string and encoded as bytes.")),(0,a.kt)("h5",{id:"when-envelopetypeencrypted_vote-is-enabled"},"When ",(0,a.kt)("inlineCode",{parentName:"h5"},"envelopeType.ENCRYPTED_VOTE")," is enabled"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"nonce")," is mandatory."),(0,a.kt)("li",{parentName:"ul"},"The package has to be serialized as a JSON string encoded as bytes."),(0,a.kt)("li",{parentName:"ul"},"It must be encrypted with a subset of the public keys or all of them."),(0,a.kt)("li",{parentName:"ul"},"The index of the public keys used to encrypt must be included in the Vote Envelope in the exact order they have been used.")),(0,a.kt)("h2",{id:"results"},"Results"),(0,a.kt)("p",null,"Requests to the Results API will return an Array of number arrays, following the ",(0,a.kt)("a",{parentName:"p",href:"/protocol/ballot-protocol"},"Ballot Protocol"),". They will contain a bi-dimensional array of integers, aggregating the values currently stored on the Vochain."),(0,a.kt)("p",null,"The interpretation of these values is left to the Client apps, and is determined by the ",(0,a.kt)("inlineCode",{parentName:"p"},"results.aggregation")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"results.display")," fields of the Election Metadata, listed above."))}c.isMDXComponent=!0}}]);