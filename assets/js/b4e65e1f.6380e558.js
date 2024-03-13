"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26533],{44291:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var i=r(85893),n=r(11151),s=r(52991),c=r(53438);const l={id:"user-filter-controller",title:"user-filter-controller",description:"user-filter-controller",custom_edit_url:null},o=void 0,a={id:"api/service-api/user-filter-controller",title:"user-filter-controller",description:"user-filter-controller",source:"@site/docs/api/service-api/user-filter-controller.tag.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/user-filter-controller",permalink:"/docs/api/service-api/user-filter-controller",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"user-filter-controller",title:"user-filter-controller",description:"user-filter-controller",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"getUserProjects",permalink:"/docs/api/service-api/get-user-projects-using-get-1"},next:{title:"Get filters",permalink:"/docs/api/service-api/get-all-filters-using-get"}},d={},u=[];function p(e){const t={p:"p",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"User Filter Controller"}),"\n","\n","\n",(0,i.jsx)(s.Z,{items:(0,c.jA)().items})]})}function f(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},52991:(e,t,r)=>{r.d(t,{Z:()=>g});r(67294);var i=r(90512),n=r(53438),s=r(33692),c=r(13919),l=r(95999),o=r(92503);const a={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(85893);function u(e){let{href:t,children:r}=e;return(0,d.jsx)(s.default,{href:t,className:(0,i.Z)("card padding--lg",a.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:n,description:s}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(o.default,{as:"h2",className:(0,i.Z)("text--truncate",a.cardTitle),title:n,children:[r," ",n]}),s&&(0,d.jsx)("p",{className:(0,i.Z)("text--truncate",a.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e;const r=(0,n.LM)(t);return r?(0,d.jsx)(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,n.xz)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(m,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,n.jA)();return(0,d.jsx)(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,n.MN)(t);return(0,d.jsx)("section",{className:(0,i.Z)("row",r),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}}}]);