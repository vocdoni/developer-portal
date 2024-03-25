"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),k=d(n),m=s,c=k["".concat(p,".").concat(m)]||k[m]||o[m]||a;return n?r.createElement(c,i(i({ref:t},u),{},{components:n})):r.createElement(c,i({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},81870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>o,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),s=(n(67294),n(3905));const a={},i=void 0,l={unversionedId:"sdk/reference/classes/CspCensus",id:"sdk/reference/classes/CspCensus",title:"CspCensus",description:"@vocdoni/sdk / Exports / CspCensus",source:"@site/docs/sdk/reference/classes/CspCensus.md",sourceDirName:"sdk/reference/classes",slug:"/sdk/reference/classes/CspCensus",permalink:"/sdk/reference/classes/CspCensus",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ChainService",permalink:"/sdk/reference/classes/ChainService"},next:{title:"CspService",permalink:"/sdk/reference/classes/CspService"}},p={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Accessors",id:"accessors",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties-1",level:2},{value:"_censusId",id:"_censusid",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"_censusURI",id:"_censusuri",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"_type",id:"_type",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"Accessors",id:"accessors-1",level:2},{value:"censusId",id:"censusid",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"censusURI",id:"censusuri",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"isPublished",id:"ispublished",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"size",id:"size",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"type",id:"type",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"weight",id:"weight",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Inherited from",id:"inherited-from-12",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Inherited from",id:"inherited-from-13",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"Methods",id:"methods-1",level:2},{value:"censusTypeFromCensusOrigin",id:"censustypefromcensusorigin",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Inherited from",id:"inherited-from-14",level:4},{value:"Defined in",id:"defined-in-15",level:4}],u={toc:d};function o(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/sdk"},"@vocdoni/sdk")," / ",(0,s.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / CspCensus"),(0,s.kt)("h1",{id:"class-cspcensus"},"Class: CspCensus"),(0,s.kt)("p",null,"Represents a published census"),(0,s.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"Census"},(0,s.kt)("inlineCode",{parentName:"a"},"Census"))),(0,s.kt)("p",{parentName:"li"},"\u21b3 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"CspCensus"))))),(0,s.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,s.kt)("h3",{id:"constructors"},"Constructors"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"CspCensus#constructor"},"constructor"))),(0,s.kt)("h3",{id:"properties"},"Properties"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/sdk/reference/classes/CspCensus#_censusid"},"_","censusId")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/sdk/reference/classes/CspCensus#_censusuri"},"_","censusURI")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/sdk/reference/classes/CspCensus#_type"},"_","type"))),(0,s.kt)("h3",{id:"accessors"},"Accessors"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"CspCensus#censusid"},"censusId")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"CspCensus#censusuri"},"censusURI")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"CspCensus#ispublished"},"isPublished")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"CspCensus#size"},"size")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"CspCensus#type"},"type")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"CspCensus#weight"},"weight"))),(0,s.kt)("h3",{id:"methods"},"Methods"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"CspCensus#censustypefromcensusorigin"},"censusTypeFromCensusOrigin"))),(0,s.kt)("h2",{id:"constructors-1"},"Constructors"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"new CspCensus"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"publicKey"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"cspURI"),"): ",(0,s.kt)("a",{parentName:"p",href:"CspCensus"},(0,s.kt)("inlineCode",{parentName:"a"},"CspCensus"))),(0,s.kt)("p",null,"Constructs a CSP census"),(0,s.kt)("h4",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"publicKey")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The public")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"cspURI")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The URI of the CSP server")))),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"CspCensus"},(0,s.kt)("inlineCode",{parentName:"a"},"CspCensus"))),(0,s.kt)("h4",{id:"overrides"},"Overrides"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/sdk/reference/classes/Census"},"Census"),".",(0,s.kt)("a",{parentName:"p",href:"Census#constructor"},"constructor")),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/census/csp.ts#L14"},"types/census/csp.ts:14")),(0,s.kt)("h2",{id:"properties-1"},"Properties"),(0,s.kt)("h3",{id:"_censusid"},"_","censusId"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,s.kt)("strong",{parentName:"p"},"_","censusId"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"Census"},"Census"),".",(0,s.kt)("a",{parentName:"p",href:"/sdk/reference/classes/Census#_censusid"},"_censusId")),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/census/census.ts#L12"},"types/census/census.ts:12")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"_censusuri"},"_","censusURI"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,s.kt)("strong",{parentName:"p"},"_","censusURI"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"Census"},"Census"),".",(0,s.kt)("a",{parentName:"p",href:"/sdk/reference/classes/Census#_censusuri"},"_censusURI")),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/census/census.ts#L13"},"types/census/census.ts:13")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"_type"},"_","type"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,s.kt)("strong",{parentName:"p"},"_","type"),": ",(0,s.kt)("a",{parentName:"p",href:"../enums/CensusType"},(0,s.kt)("inlineCode",{parentName:"a"},"CensusType"))),(0,s.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"Census"},"Census"),".",(0,s.kt)("a",{parentName:"p",href:"/sdk/reference/classes/Census#_type"},"_type")),(0,s.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/census/census.ts#L14"},"types/census/census.ts:14")),(0,s.kt)("h2",{id:"accessors-1"},"Accessors"),(0,s.kt)("h3",{id:"censusid"},"censusId"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"get")," ",(0,s.kt)("strong",{parentName:"p"},"censusId"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("h4",{id:"returns-1"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,s.kt)("p",null,"Census.censusId"),(0,s.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/census/census.ts#L35"},"types/census/census.ts:35")),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"set")," ",(0,s.kt)("strong",{parentName:"p"},"censusId"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"parameters-1"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"value")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string"))))),(0,s.kt)("h4",{id:"returns-2"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,s.kt)("p",null,"Census.censusId"),(0,s.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/census/census.ts#L39"},"types/census/census.ts:39")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"censusuri"},"censusURI"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"get")," ",(0,s.kt)("strong",{parentName:"p"},"censusURI"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("h4",{id:"returns-3"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,s.kt)("p",null,"Census.censusURI"),(0,s.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/census/census.ts#L43"},"types/census/census.ts:43")),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"set")," ",(0,s.kt)("strong",{parentName:"p"},"censusURI"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"parameters-2"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"value")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string"))))),(0,s.kt)("h4",{id:"returns-4"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,s.kt)("p",null,"Census.censusURI"),(0,s.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/census/census.ts#L47"},"types/census/census.ts:47")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"ispublished"},"isPublished"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"get")," ",(0,s.kt)("strong",{parentName:"p"},"isPublished"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"boolean")),(0,s.kt)("h4",{id:"returns-5"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"boolean")),(0,s.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,s.kt)("p",null,"Census.isPublished"),(0,s.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/census/census.ts#L75"},"types/census/census.ts:75")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"size"},"size"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"get")," ",(0,s.kt)("strong",{parentName:"p"},"size"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("h4",{id:"returns-6"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,s.kt)("p",null,"Census.size"),(0,s.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/census/census.ts#L59"},"types/census/census.ts:59")),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"set")," ",(0,s.kt)("strong",{parentName:"p"},"size"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"parameters-3"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"value")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"number"))))),(0,s.kt)("h4",{id:"returns-7"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,s.kt)("p",null,"Census.size"),(0,s.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/census/census.ts#L63"},"types/census/census.ts:63")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"type"},"type"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"get")," ",(0,s.kt)("strong",{parentName:"p"},"type"),"(): ",(0,s.kt)("a",{parentName:"p",href:"../enums/CensusType"},(0,s.kt)("inlineCode",{parentName:"a"},"CensusType"))),(0,s.kt)("h4",{id:"returns-8"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"../enums/CensusType"},(0,s.kt)("inlineCode",{parentName:"a"},"CensusType"))),(0,s.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,s.kt)("p",null,"Census.type"),(0,s.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/census/census.ts#L51"},"types/census/census.ts:51")),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"set")," ",(0,s.kt)("strong",{parentName:"p"},"type"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"parameters-4"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"value")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"../enums/CensusType"},(0,s.kt)("inlineCode",{parentName:"a"},"CensusType")))))),(0,s.kt)("h4",{id:"returns-9"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,s.kt)("p",null,"Census.type"),(0,s.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/census/census.ts#L55"},"types/census/census.ts:55")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"weight"},"weight"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"get")," ",(0,s.kt)("strong",{parentName:"p"},"weight"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"bigint")),(0,s.kt)("h4",{id:"returns-10"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"bigint")),(0,s.kt)("h4",{id:"inherited-from-12"},"Inherited from"),(0,s.kt)("p",null,"Census.weight"),(0,s.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/census/census.ts#L67"},"types/census/census.ts:67")),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"set")," ",(0,s.kt)("strong",{parentName:"p"},"weight"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"parameters-5"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"value")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"bigint"))))),(0,s.kt)("h4",{id:"returns-11"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"inherited-from-13"},"Inherited from"),(0,s.kt)("p",null,"Census.weight"),(0,s.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/census/census.ts#L71"},"types/census/census.ts:71")),(0,s.kt)("h2",{id:"methods-1"},"Methods"),(0,s.kt)("h3",{id:"censustypefromcensusorigin"},"censusTypeFromCensusOrigin"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"censusTypeFromCensusOrigin"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"censusOrigin"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"anonymous?"),"): ",(0,s.kt)("a",{parentName:"p",href:"../enums/CensusType"},(0,s.kt)("inlineCode",{parentName:"a"},"CensusType"))),(0,s.kt)("h4",{id:"parameters-6"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"censusOrigin")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"anonymous")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"boolean")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"false"))))),(0,s.kt)("h4",{id:"returns-12"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"../enums/CensusType"},(0,s.kt)("inlineCode",{parentName:"a"},"CensusType"))),(0,s.kt)("h4",{id:"inherited-from-14"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/sdk/reference/classes/Census"},"Census"),".",(0,s.kt)("a",{parentName:"p",href:"Census#censustypefromcensusorigin"},"censusTypeFromCensusOrigin")),(0,s.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/vocdoni-sdk/blob/0a4464c/src/types/census/census.ts#L81"},"types/census/census.ts:81")))}o.isMDXComponent=!0}}]);