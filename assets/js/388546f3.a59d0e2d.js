"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||c;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,o=new Array(c);o[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var s=2;s<c;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},76763:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(67294),i=n(86010),c=n(53438),o=n(39960),a=n(13919),l=n(95999);const s="cardContainer_fWXF",m="cardTitle_rnsV",u="cardDescription_PWke";function p(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",s)},n)}function d(e){let{href:t,icon:n,title:c,description:o}=e;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",m),title:c},n," ",c),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",u),title:o},o))}function f(e){let{item:t}=e;const n=(0,c.Wl)(t);return n?r.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const n=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(t.docId??void 0);return r.createElement(d,{href:t.href,icon:n,title:t.label,description:i?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}var v=n(87462);const h="cardContainer_p3e_",b="cardDescription_DHsZ";var E=n(42284);function O(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--md",h)},n)}const w=e=>{let{item:t}=e;const{description:n}=(0,c.xz)(t.docId??void 0);return r.createElement(O,{href:t.href},r.createElement("div",{className:`${t.className}`,style:{minHeight:"90px"}},r.createElement("div",{className:"menu__link",style:{paddingLeft:0,backgroundColor:"transparent"}},t.label),n&&r.createElement(E.D,{className:(0,i.Z)("text--truncate",b),components:{p:e=>{let{node:t,...n}=e;return r.createElement("p",(0,v.Z)({className:"text--truncate"},n))}}},n)))};function N(e){let{className:t}=e;const n=(0,c.jA)();return r.createElement(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return r.createElement(N,e);const o=(0,c.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},e.className.includes("api-method")?r.createElement(w,{item:e}):r.createElement(g,{item:e})))))}},31545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(87462),i=(n(67294),n(3905)),c=n(76763),o=n(53438);const a={id:"elections",title:"Elections",description:"Elections",custom_edit_url:null},l=void 0,s={unversionedId:"vocdoni-api/elections",id:"vocdoni-api/elections",title:"Elections",description:"Elections",source:"@site/docs/vocdoni-api/elections.tag.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/elections",permalink:"/vocdoni-api/elections",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"elections",title:"Elections",description:"Elections",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"List organization elections by status",permalink:"/vocdoni-api/list-organization-elections-by-status"},next:{title:"Create election",permalink:"/vocdoni-api/create-election"}},m={},u=[],p={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Create, manage and get information about elections"),(0,i.kt)(c.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);