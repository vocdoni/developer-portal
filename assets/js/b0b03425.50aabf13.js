"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3023],{27922:(e,t,n)=>{n.d(t,{Z:()=>k});var i=n(67294),c=n(86010),a=n(53438),r=n(39960),o=n(13919),s=n(95999);const l="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function u(e){let{href:t,children:n}=e;return i.createElement(r.Z,{href:t,className:(0,c.Z)("card padding--lg",l)},n)}function p(e){let{href:t,icon:n,title:a,description:r}=e;return i.createElement(u,{href:t},i.createElement("h2",{className:(0,c.Z)("text--truncate",d),title:a},n," ",a),r&&i.createElement("p",{className:(0,c.Z)("text--truncate",m),title:r},r))}function h(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?i.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,a.xz)(t.docId??void 0);return i.createElement(p,{href:t.href,icon:n,title:t.label,description:c?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(f,{item:t});case"category":return i.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,a.jA)();return i.createElement(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return i.createElement(g,e);const r=(0,a.MN)(t);return i.createElement("section",{className:(0,c.Z)("row",n)},r.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(v,{item:e})))))}},40062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var i=n(83117),c=(n(67294),n(3905)),a=n(27922),r=n(53438);const o={id:"chain",title:"Chain",description:"Chain",custom_edit_url:null},s=void 0,l={unversionedId:"vocdoni-api/chain",id:"vocdoni-api/chain",title:"Chain",description:"Chain",source:"@site/docs/vocdoni-api/chain.tag.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/chain",permalink:"/vocdoni-api/chain",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"chain",title:"Chain",description:"Chain",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Introduction",permalink:"/vocdoni-api/vocdoni-api"},next:{title:"Transactions cost",permalink:"/vocdoni-api/transaction-cost"}},d={},m=[],u={toc:m};function p(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Everything about internal Vochain information (transactions, organizations, blocks, stats...)"),(0,c.kt)(a.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);