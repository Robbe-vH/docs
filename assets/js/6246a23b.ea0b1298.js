"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26803],{27789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(85893),i=n(11151),c=n(52991),s=n(53438);const o={id:"log-async-controller",title:"log-async-controller",description:"log-async-controller",custom_edit_url:null},a=void 0,l={id:"api/service-api/5.10/log-async-controller",title:"log-async-controller",description:"log-async-controller",source:"@site/docs/api/service-api/5.10/log-async-controller.tag.mdx",sourceDirName:"api/service-api/5.10",slug:"/api/service-api/5.10/log-async-controller",permalink:"/docs/api/service-api/5.10/log-async-controller",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"log-async-controller",title:"log-async-controller",description:"log-async-controller",custom_edit_url:null},sidebar:"service-api-5.10",previous:{title:"Updates launch for specified project",permalink:"/docs/api/service-api/5.10/update-launch-using-put"},next:{title:"Create log (batching operation)",permalink:"/docs/api/service-api/5.10/create-log-using-post"}},d={},u=[];function p(e){const t={p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Log Async Controller"}),"\n","\n","\n",(0,r.jsx)(c.Z,{items:(0,s.jA)().items})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},52991:(e,t,n)=>{n.d(t,{Z:()=>x});n(67294);var r=n(90512),i=n(53438),c=n(33692),s=n(13919),o=n(95999),a=n(92503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(85893);function u(e){let{href:t,children:n}=e;return(0,d.jsx)(c.default,{href:t,className:(0,r.Z)("card padding--lg",l.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:i,description:c}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(a.default,{as:"h2",className:(0,r.Z)("text--truncate",l.cardTitle),title:i,children:[n," ",i]}),c&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",l.cardDescription),title:c,children:c})]})}function m(e){let{item:t}=e;const n=(0,i.LM)(t);return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(g,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,i.jA)();return(0,d.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(h,{...e});const c=(0,i.MN)(t);return(0,d.jsx)("section",{className:(0,r.Z)("row",n),children:c.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}}}]);