(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1597],{51910:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>T,contentTitle:()=>y,default:()=>x,frontMatter:()=>k,metadata:()=>w,toc:()=>A});var n=o(87462),a=o(67294),i=o(3905);var r=o(86010),s=o(72389),l=o(67392),c=o(7094),u=o(12466);const d="tabList__CuJ",p="tabItem_LNqP";function h(e){const{lazy:t,block:o,defaultValue:i,values:s,groupId:h,className:m}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=s??f.map((e=>{let{props:{value:t,label:o,attributes:n}}=e;return{value:t,label:o,attributes:n}})),g=(0,l.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==b&&!v.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:y}=(0,c.U)(),[w,T]=(0,a.useState)(b),A=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=h){const e=k[h];null!=e&&e!==w&&v.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,o=A.indexOf(t),n=v[o].value;n!==w&&(E(t),T(n),null!=h&&y(h,String(n)))},I=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const o=A.indexOf(e.currentTarget)+1;t=A[o]??A[0];break}case"ArrowLeft":{const o=A.indexOf(e.currentTarget)-1;t=A[o]??A[A.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},m)},v.map((e=>{let{value:t,label:o,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>A.push(e),onKeyDown:I,onClick:x},i,{className:(0,r.Z)("tabs__item",p,i?.className,{"tabs__item--active":w===t})}),o??t)}))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,s.Z)();return a.createElement(h,(0,n.Z)({key:String(t)},e))}var f=o(85162),v=o(93162),g=o.n(v);const b=function(e){let{url:t,proxy:o}=e;return a.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},a.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),a.createElement("ul",{className:"export-dropdown dropdown__menu"},a.createElement("li",null,a.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),g().saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))},k={id:"vocdoni-api",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},y=void 0,w={unversionedId:"vocdoni-api/vocdoni-api",id:"vocdoni-api/vocdoni-api",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions.",source:"@site/docs/vocdoni-api/vocdoni-api.info.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/vocdoni-api",permalink:"/vocdoni-api/vocdoni-api",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"vocdoni-api",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Vocdoni",permalink:"/category/vocdoni-api"},next:{title:"Chain",permalink:"/vocdoni-api/chain"}},T={},A=[],E={toc:A};function x(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},E,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 2.0.0"),(0,i.kt)(b,{url:"https://raw.githubusercontent.com/vocdoni/developer-portal/main/swaggers/vocdoni-api.yaml",proxy:void 0,mdxType:"Export"}),(0,i.kt)("h1",{id:"vocdoni-api"},"Vocdoni API"),(0,i.kt)("p",null,"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions.\nYou can review the API endpoints documentation in this section, the main entities are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"chain"},(0,i.kt)("strong",{parentName:"a"},"Chain")),": The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"accounts"},(0,i.kt)("strong",{parentName:"a"},"Accounts")),": Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"elections"},(0,i.kt)("strong",{parentName:"a"},"Elections")),": Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go ",(0,i.kt)("a",{parentName:"li",href:"../get-started/intro#23-elections"},"here"),".  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"censuses"},(0,i.kt)("strong",{parentName:"a"},"Censuses")),": The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check ",(0,i.kt)("a",{parentName:"li",href:"../get-started/intro#21-the-census"},"here"),". Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"votes"},(0,i.kt)("strong",{parentName:"a"},"Votes")),": All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote.")),(0,i.kt)("div",{style:{marginBottom:"2rem"}},(0,i.kt)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,i.kt)(m,{mdxType:"Tabs"},(0,i.kt)(f.Z,{label:"Bearer Auth",value:"bearerAuth",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Security Scheme Type:"),(0,i.kt)("td",null,"http")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"HTTP Authorization Scheme:"),(0,i.kt)("td",null,"bearer")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Bearer format:"),(0,i.kt)("td",null)))))))))}x.isMDXComponent=!0},93162:function(e,t,o){var n,a,i;a=[],n=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,t,o){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){l(n.response,t,o)},n.onerror=function(){console.error("could not download file")},n.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,s=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(e,t,o){var s=r.URL||r.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?i(l):a(l.href)?n(e,t,o):i(l,l.target="_blank")):(l.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(l.href)}),4e4),setTimeout((function(){i(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,r){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,r),o);else if(a(e))n(e,o,r);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){i(s)}))}}:function(e,t,o,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return n(e,t,o);var i="application/octet-stream"===e.type,l=/constructor/i.test(r.HTMLElement)||r.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||i&&l||s)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},u.readAsDataURL(e)}else{var d=r.URL||r.webkitURL,p=d.createObjectURL(e);a?a.location=p:location.href=p,a=null,setTimeout((function(){d.revokeObjectURL(p)}),4e4)}});r.saveAs=l.saveAs=l,e.exports=l},void 0===(i="function"==typeof n?n.apply(t,a):n)||(e.exports=i)}}]);