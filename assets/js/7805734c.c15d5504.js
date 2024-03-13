"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62023],{90374:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var n=i(85893),r=i(11151),s=i(52991),c=i(53438);const o={id:"github-endpoint",title:"github-endpoint",description:"github-endpoint",custom_edit_url:null},a=void 0,d={id:"api/service-uat/github-endpoint",title:"github-endpoint",description:"github-endpoint",source:"@site/docs/api/service-uat/github-endpoint.tag.mdx",sourceDirName:"api/service-uat",slug:"/api/service-uat/github-endpoint",permalink:"/docs/api/service-uat/github-endpoint",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"github-endpoint",title:"github-endpoint",description:"github-endpoint",custom_edit_url:null},sidebar:"serviceUat",previous:{title:"Retrieves auth settings",permalink:"/docs/api/service-uat/delete-settings-using-delete"},next:{title:"Synchronizes logged-in GitHub user",permalink:"/docs/api/service-uat/synchronize-using-post"}},l={},u=[];function p(t){const e={p:"p",...(0,r.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"Github Endpoint"}),"\n","\n","\n",(0,n.jsx)(s.Z,{items:(0,c.jA)().items})]})}function h(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(p,{...t})}):p(t)}},52991:(t,e,i)=>{i.d(e,{Z:()=>x});i(67294);var n=i(90512),r=i(53438),s=i(33692),c=i(13919),o=i(95999),a=i(92503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=i(85893);function u(t){let{href:e,children:i}=t;return(0,l.jsx)(s.default,{href:e,className:(0,n.Z)("card padding--lg",d.cardContainer),children:i})}function p(t){let{href:e,icon:i,title:r,description:s}=t;return(0,l.jsxs)(u,{href:e,children:[(0,l.jsxs)(a.default,{as:"h2",className:(0,n.Z)("text--truncate",d.cardTitle),title:r,children:[i," ",r]}),s&&(0,l.jsx)("p",{className:(0,n.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function h(t){let{item:e}=t;const i=(0,r.LM)(e);return i?(0,l.jsx)(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,o.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function m(t){let{item:e}=t;const i=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.xz)(e.docId??void 0);return(0,l.jsx)(p,{href:e.href,icon:i,title:e.label,description:e.description??n?.description})}function g(t){let{item:e}=t;switch(e.type){case"link":return(0,l.jsx)(m,{item:e});case"category":return(0,l.jsx)(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function f(t){let{className:e}=t;const i=(0,r.jA)();return(0,l.jsx)(x,{items:i.items,className:e})}function x(t){const{items:e,className:i}=t;if(!e)return(0,l.jsx)(f,{...t});const s=(0,r.MN)(e);return(0,l.jsx)("section",{className:(0,n.Z)("row",i),children:s.map(((t,e)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(g,{item:t})},e)))})}}}]);