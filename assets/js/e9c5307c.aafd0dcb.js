"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2470],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(n),d=c,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,i=new Array(a);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:c,i[1]=o;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},76763:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(67294),c=n(86010),a=n(53438),i=n(39960),o=n(13919),s=n(95999);const l="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function p(e){let{href:t,children:n}=e;return r.createElement(i.Z,{href:t,className:(0,c.Z)("card padding--lg",l)},n)}function d(e){let{href:t,icon:n,title:a,description:i}=e;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,c.Z)("text--truncate",u),title:a},n," ",a),i&&r.createElement("p",{className:(0,c.Z)("text--truncate",m),title:i},i))}function f(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,a.xz)(t.docId??void 0);return r.createElement(d,{href:t.href,icon:n,title:t.label,description:c?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}var g=n(87462);const h="cardContainer_p3e_",b="cardDescription_DHsZ";var E=n(42284);function O(e){let{href:t,children:n}=e;return r.createElement(i.Z,{href:t,className:(0,c.Z)("card padding--md",h)},n)}const w=e=>{let{item:t}=e;const{description:n}=(0,a.xz)(t.docId??void 0);return r.createElement(O,{href:t.href},r.createElement("div",{className:`${t.className}`,style:{minHeight:"90px"}},r.createElement("div",{className:"menu__link",style:{paddingLeft:0,backgroundColor:"transparent"}},t.label),n&&r.createElement(E.D,{className:(0,c.Z)("text--truncate",b),components:{p:e=>{let{node:t,...n}=e;return r.createElement("p",(0,g.Z)({className:"text--truncate"},n))}}},n)))};function N(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return r.createElement(N,e);const i=(0,a.MN)(t);return r.createElement("section",{className:(0,c.Z)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},e.className.includes("api-method")?r.createElement(w,{item:e}):r.createElement(v,{item:e})))))}},84416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(87462),c=(n(67294),n(3905)),a=n(76763),i=n(53438);const o={id:"censuses",title:"Censuses",description:"Censuses",custom_edit_url:null},s=void 0,l={unversionedId:"vocdoni-api/censuses",id:"vocdoni-api/censuses",title:"Censuses",description:"Censuses",source:"@site/docs/vocdoni-api/censuses.tag.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/censuses",permalink:"/vocdoni-api/censuses",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"censuses",title:"Censuses",description:"Censuses",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Calculate election price",permalink:"/vocdoni-api/election-price"},next:{title:"Create new census",permalink:"/vocdoni-api/census-create"}},u={},m=[],p={toc:m};function d(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Manage census: create, add, get, verify..."),(0,c.kt)(a.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);