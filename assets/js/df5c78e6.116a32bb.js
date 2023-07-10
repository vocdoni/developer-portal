"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[173],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>p});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(r),p=a,f=u["".concat(l,".").concat(p)]||u[p]||d[p]||c;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},76763:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(67294),a=r(86010),c=r(53438),o=r(39960),i=r(13919),l=r(95999);const s="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function u(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},r)}function p(e){let{href:t,icon:r,title:c,description:o}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",m),title:c},r," ",c),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",d),title:o},o))}function f(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,c.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:a?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}var g=r(87462);const h="cardContainer_p3e_",b="cardDescription_DHsZ";var E=r(42284);function w(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--md",h)},r)}const O=e=>{let{item:t}=e;const{description:r}=(0,c.xz)(t.docId??void 0);return n.createElement(w,{href:t.href},n.createElement("div",{className:`${t.className}`,style:{minHeight:"90px"}},n.createElement("div",{className:"menu__link",style:{paddingLeft:0,backgroundColor:"transparent"}},t.label),r&&n.createElement(E.D,{className:(0,a.Z)("text--truncate",b),components:{p:e=>{let{node:t,...r}=e;return n.createElement("p",(0,g.Z)({className:"text--truncate"},r))}}},r)))};function N(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(k,{items:r.items,className:t})}function k(e){const{items:t,className:r}=e;if(!t)return n.createElement(N,e);const o=(0,c.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},e.className.includes("api-method")?n.createElement(O,{item:e}):n.createElement(v,{item:e})))))}},96072:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),c=r(76763),o=r(53438);const i={id:"wallet",title:"Wallet",description:"Wallet",custom_edit_url:null},l=void 0,s={unversionedId:"vocdoni-api/wallet",id:"vocdoni-api/wallet",title:"Wallet",description:"Wallet",source:"@site/docs/vocdoni-api/wallet.tag.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/wallet",permalink:"/vocdoni-api/wallet",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"wallet",title:"Wallet",description:"Wallet",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Get vote",permalink:"/vocdoni-api/get-vote"},next:{title:"Add account",permalink:"/vocdoni-api/add-account"}},m={},d=[],u={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Operations for the wallets managed backend side"),(0,a.kt)(c.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);