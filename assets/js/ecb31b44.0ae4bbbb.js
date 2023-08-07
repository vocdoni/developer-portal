"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[517],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),s=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),g=s(n),m=a,k=g["".concat(o,".").concat(m)]||g[m]||d[m]||i;return n?r.createElement(k,l(l({ref:e},p),{},{components:n})):r.createElement(k,l({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=g;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c.mdxType="string"==typeof t?t:a,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},250:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={custom_edit_url:null},l=void 0,c={unversionedId:"sdk/Signing",id:"sdk/Signing",title:"Signing",description:"Methods",source:"@site/docs/sdk/Signing.mdx",sourceDirName:"sdk",slug:"/sdk/Signing",permalink:"/sdk/Signing",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"sdk",previous:{title:"Asymmetric",permalink:"/sdk/Asymmetric"},next:{title:"dotobject",permalink:"/sdk/dotobject"}},o={},s=[{value:"constructor",id:"constructor",level:2},{value:"Methods",id:"methods",level:2},{value:"signTransaction",id:"signTransaction",level:3},{value:"signRaw",id:"signRaw",level:3}],p={toc:s};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Signing\n")),(0,a.kt)("div",null),(0,a.kt)("div",{className:"container"},(0,a.kt)("div",{className:"row mb-2"},(0,a.kt)("div",{className:"col col--12"},(0,a.kt)("strong",null,"Methods"))),(0,a.kt)("div",{className:"row"},(0,a.kt)("div",{className:"col col--12"},(0,a.kt)("a",{href:"#signTransaction"},"signTransaction"),(0,a.kt)("span",{className:"badge badge--info margin-left--sm"},"static"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#signRaw"},"signRaw"),(0,a.kt)("span",{className:"badge badge--info margin-left--sm"},"static")))),(0,a.kt)("h2",{id:"constructor"},"constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"new Signing()\n")),(0,a.kt)("div",null),(0,a.kt)("p",null,"Cannot be constructed."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"signTransaction"},"signTransaction"),(0,a.kt)("div",null,(0,a.kt)("span",{className:"badge badge--info"},"static")),(0,a.kt)("p",null,"Prefix and Sign a binary payload using the given Ethers wallet or signer."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","string",">"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"messageBytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Uint8Array"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"chainId"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"The ID of the Vocdoni blockchain deployment for which the message is intended to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"walletOrSigner"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Wallet ","|"," Signer"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"signRaw"},"signRaw"),(0,a.kt)("div",null,(0,a.kt)("span",{className:"badge badge--info"},"static")),(0,a.kt)("p",null,"Sign a binary payload using the given Ethers wallet or signer."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","string",">"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"request"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Uint8Array"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"walletOrSigner"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Wallet ","|"," Signer"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);