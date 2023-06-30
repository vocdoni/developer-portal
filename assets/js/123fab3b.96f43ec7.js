"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1739],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>p});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),d=s(r),p=o,f=d["".concat(l,".").concat(p)]||d[p]||u[p]||c;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76763:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(67294),o=r(86010),c=r(53438),i=r(39960),a=r(13919),l=r(95999);const s="cardContainer_fWXF",m="cardTitle_rnsV",u="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",s)},r)}function p(e){let{href:t,icon:r,title:c,description:i}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",m),title:c},r," ",c),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",u),title:i},i))}function f(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function v(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,c.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:o?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(v,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}var g=r(87462);const h="cardContainer_p3e_",b="cardDescription_DHsZ";var E=r(42284);function O(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--md",h)},r)}const w=e=>{let{item:t}=e;const{description:r}=(0,c.xz)(t.docId??void 0);return n.createElement(O,{href:t.href},n.createElement("div",{className:`${t.className}`,style:{minHeight:"90px"}},n.createElement("div",{className:"menu__link",style:{paddingLeft:0,backgroundColor:"transparent"}},t.label),r&&n.createElement(E.D,{className:(0,o.Z)("text--truncate",b),components:{p:e=>{let{node:t,...r}=e;return n.createElement("p",(0,g.Z)({className:"text--truncate"},r))}}},r)))};function N(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(x,{items:r.items,className:t})}function x(e){const{items:t,className:r}=e;if(!t)return n.createElement(N,e);const i=(0,c.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},e.className.includes("api-method")?n.createElement(w,{item:e}):n.createElement(y,{item:e})))))}},9003:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),c=r(76763),i=r(53438);const a={id:"votes",title:"Votes",description:"Votes",custom_edit_url:null},l=void 0,s={unversionedId:"vocdoni-api/votes",id:"vocdoni-api/votes",title:"Votes",description:"Votes",source:"@site/docs/vocdoni-api/votes.tag.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/votes",permalink:"/vocdoni-api/votes",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"votes",title:"Votes",description:"Votes",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Delete census",permalink:"/vocdoni-api/census-delete"},next:{title:"Get vote",permalink:"/vocdoni-api/vote-get"}},m={},u=[],d={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Submit, get, and verify votes"),(0,o.kt)(c.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);