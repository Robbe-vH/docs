"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6486],{69457:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var s=i(85893),r=i(11151),n=i(52991),c=i(53438);const o={id:"settings-controller",title:"settings-controller",description:"settings-controller",custom_edit_url:null},l=void 0,a={id:"api/service-api/settings-controller",title:"settings-controller",description:"settings-controller",source:"@site/docs/api/service-api/settings-controller.tag.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/settings-controller",permalink:"/docs/api/service-api/settings-controller",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"settings-controller",title:"settings-controller",description:"settings-controller",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Delete custom project specific issue sub-type",permalink:"/docs/api/service-api/delete-project-issue-sub-type-using-delete"},next:{title:"Get server settings",permalink:"/docs/api/service-api/get-server-settings-using-get"}},d={},u=[];function p(e){const t={p:"p",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Settings Controller"}),"\n","\n","\n",(0,s.jsx)(n.Z,{items:(0,c.jA)().items})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},52991:(e,t,i)=>{i.d(t,{Z:()=>x});i(67294);var s=i(90512),r=i(53438),n=i(33692),c=i(13919),o=i(95999),l=i(92503);const a={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=i(85893);function u(e){let{href:t,children:i}=e;return(0,d.jsx)(n.default,{href:t,className:(0,s.Z)("card padding--lg",a.cardContainer),children:i})}function p(e){let{href:t,icon:i,title:r,description:n}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(l.default,{as:"h2",className:(0,s.Z)("text--truncate",a.cardTitle),title:r,children:[i," ",r]}),n&&(0,d.jsx)("p",{className:(0,s.Z)("text--truncate",a.cardDescription),title:n,children:n})]})}function m(e){let{item:t}=e;const i=(0,r.LM)(t);return i?(0,d.jsx)(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const i=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,r.xz)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:i,title:t.label,description:t.description??s?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(g,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const i=(0,r.jA)();return(0,d.jsx)(x,{items:i.items,className:t})}function x(e){const{items:t,className:i}=e;if(!t)return(0,d.jsx)(h,{...e});const n=(0,r.MN)(t);return(0,d.jsx)("section",{className:(0,s.Z)("row",i),children:n.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}}}]);