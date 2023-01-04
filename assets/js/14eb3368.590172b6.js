"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9817],{42148:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(83117),r=n(67294),i=n(86010),l=n(35281),s=n(53438),c=n(48596),o=n(39960),m=n(44996),d=n(95999);function u(e){return r.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function h(e){let{children:t,href:n,isLast:a}=e;const i="breadcrumbs__link";return a?r.createElement("span",{className:i,itemProp:"name"},t):n?r.createElement(o.Z,{className:i,href:n,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:i},t)}function v(e){let{children:t,active:n,index:l,addMicrodata:s}=e;return r.createElement("li",(0,a.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,r.createElement("meta",{itemProp:"position",content:String(l+1)}))}function g(){const e=(0,m.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.Z,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,i.Z)("breadcrumbs__link",b.breadcrumbsItemLink),href:e},r.createElement(u,{className:b.breadcrumbHomeIcon})))}function E(){const e=(0,s.s1)(),t=(0,c.Ns)();return e?r.createElement("nav",{className:(0,i.Z)(l.k.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(g,null),e.map(((t,n)=>{const a=n===e.length-1;return r.createElement(v,{key:n,active:a,index:n,addMicrodata:!!t.href},r.createElement(h,{href:t.href,isLast:a},t.label))})))):null}},27922:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(67294),r=n(86010),i=n(53438),l=n(39960),s=n(13919),c=n(95999);const o="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function u(e){let{href:t,children:n}=e;return a.createElement(l.Z,{href:t,className:(0,r.Z)("card padding--lg",o)},n)}function b(e){let{href:t,icon:n,title:i,description:l}=e;return a.createElement(u,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",m),title:i},n," ",i),l&&a.createElement("p",{className:(0,r.Z)("text--truncate",d),title:l},l))}function h(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?a.createElement(b,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function v(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return a.createElement(b,{href:t.href,icon:n,title:t.label,description:r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(v,{item:t});case"category":return a.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function E(e){let{className:t}=e;const n=(0,i.jA)();return a.createElement(p,{items:n.items,className:t})}function p(e){const{items:t,className:n}=e;if(!t)return a.createElement(E,e);const l=(0,i.MN)(t);return a.createElement("section",{className:(0,r.Z)("row",n)},l.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(g,{item:e})))))}},71245:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(67294),r=n(10833),i=n(53438),l=n(44996),s=n(27922),c=n(4966),o=n(23120),m=n(44364),d=n(42148),u=n(41498);const b="generatedIndexPage_vN6x",h="list_eTzJ",v="title_kItE";function g(e){let{categoryGeneratedIndex:t}=e;return a.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,l.Z)(t.image)})}function E(e){let{categoryGeneratedIndex:t}=e;const n=(0,i.jA)();return a.createElement("div",{className:b},a.createElement(o.Z,null),a.createElement(d.Z,null),a.createElement(m.Z,null),a.createElement("header",null,a.createElement(u.Z,{as:"h1",className:v},t.title),t.description&&a.createElement("p",null,t.description)),a.createElement("article",{className:"margin-top--lg"},a.createElement(s.Z,{items:n.items,className:h})),a.createElement("footer",{className:"margin-top--lg"},a.createElement(c.Z,{previous:t.navigation.previous,next:t.navigation.next})))}function p(e){return a.createElement(a.Fragment,null,a.createElement(g,e),a.createElement(E,e))}},4966:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(83117),r=n(67294),i=n(95999),l=n(86010),s=n(39960);function c(e){const{permalink:t,title:n,subLabel:a,isNext:i}=e;return r.createElement(s.Z,{className:(0,l.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},a&&r.createElement("div",{className:"pagination-nav__sublabel"},a),r.createElement("div",{className:"pagination-nav__label"},n))}function o(e){const{previous:t,next:n}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&r.createElement(c,(0,a.Z)({},t,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&r.createElement(c,(0,a.Z)({},n,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},44364:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(86010),i=n(95999),l=n(35281),s=n(74477);function c(e){let{className:t}=e;const n=(0,s.E)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,l.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},23120:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(67294),r=n(86010),i=n(52263),l=n(39960),s=n(95999),c=n(80143),o=n(35281),m=n(60373),d=n(74477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=u[e.versionMetadata.banner];return a.createElement(t,e)}function h(e){let{versionLabel:t,to:n,onClick:r}=e;return a.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(l.Z,{to:n,onClick:r},a.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,i.Z)(),{pluginId:s}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,m.J)(s),{latestDocSuggestion:u,latestVersionSuggestion:v}=(0,c.Jo)(s),g=u??(E=v).docs.find((e=>e.id===E.mainDocId));var E;return a.createElement("div",{className:(0,r.Z)(t,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(b,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(h,{versionLabel:v.label,to:g.path,onClick:()=>d(v.name)})))}function g(e){let{className:t}=e;const n=(0,d.E)();return n.banner?a.createElement(v,{className:t,versionMetadata:n}):null}},41498:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(83117),r=n(67294),i=n(86010),l=n(95999),s=n(86668);const c="anchorWithStickyNavbar_LWe7",o="anchorWithHideOnScrollNavbar_WYt5";function m(e){let{as:t,id:n,...m}=e;const{navbar:{hideOnScroll:d}}=(0,s.L)();return"h1"!==t&&n?r.createElement(t,(0,a.Z)({},m,{className:(0,i.Z)("anchor",d?o:c),id:n}),m.children,r.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,(0,a.Z)({},m,{id:void 0}))}}}]);