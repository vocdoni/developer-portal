"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2834],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>k});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),s=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},m=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),d=s(r),k=a,u=d["".concat(c,".").concat(k)]||d[k]||p[k]||l;return r?n.createElement(u,o(o({ref:e},m),{},{components:r})):n.createElement(u,o({ref:e},m))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71340:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={custom_edit_url:null},o=void 0,i={unversionedId:"sdk/ElectionCore",id:"sdk/ElectionCore",title:"ElectionCore",description:"Methods",source:"@site/docs/sdk/ElectionCore.mdx",sourceDirName:"sdk",slug:"/sdk/ElectionCore",permalink:"/sdk/ElectionCore",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"sdk",previous:{title:"AccountCore",permalink:"/sdk/AccountCore"},next:{title:"TransactionCore",permalink:"/sdk/TransactionCore"}},c={},s=[{value:"constructor",id:"constructor",level:2},{value:"Methods",id:"methods",level:2},{value:"estimateDateAtBlock",id:"estimateDateAtBlock",level:3},{value:"estimateBlockAtDateTime",id:"estimateBlockAtDateTime",level:3}],m={toc:s};function p(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class ElectionCore\n")),(0,a.kt)("div",null),(0,a.kt)("div",{className:"container"},(0,a.kt)("div",{className:"row mb-2"},(0,a.kt)("div",{className:"col col--12"},(0,a.kt)("strong",null,"Methods"))),(0,a.kt)("div",{className:"row"},(0,a.kt)("div",{className:"col col--12"},(0,a.kt)("a",{href:"#estimateDateAtBlock"},"estimateDateAtBlock"),(0,a.kt)("span",{className:"badge badge--info margin-left--sm"},"static"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#estimateBlockAtDateTime"},"estimateBlockAtDateTime"),(0,a.kt)("span",{className:"badge badge--info margin-left--sm"},"static")))),(0,a.kt)("h2",{id:"constructor"},"constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"new ElectionCore()\n")),(0,a.kt)("div",null),(0,a.kt)("p",null,"Cannot be constructed."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"estimateDateAtBlock"},"estimateDateAtBlock"),(0,a.kt)("div",null,(0,a.kt)("span",{className:"badge badge--info"},"static")),(0,a.kt)("p",null,"Returns the DateTime at which the given block number is expected to be mined"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),": Date"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"blockNumber"),(0,a.kt)("td",{parentName:"tr",align:"center"},"number"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"The desired block number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"chainData"),(0,a.kt)("td",{parentName:"tr",align:"center"},"ChainData"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"The block status information from the chain to use for the estimation")))),(0,a.kt)("h3",{id:"estimateBlockAtDateTime"},"estimateBlockAtDateTime"),(0,a.kt)("div",null,(0,a.kt)("span",{className:"badge badge--info"},"static")),(0,a.kt)("p",null,"Returns the block number that is expected to be current at the given date and time"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),": number"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"dateTime"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Date"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"The desired date time")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"chainData"),(0,a.kt)("td",{parentName:"tr",align:"center"},"ChainData"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"The block status information from the chain to use for the estimation")))))}p.isMDXComponent=!0}}]);