"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53289],{81631:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>_,contentTitle:()=>f,default:()=>M,frontMatter:()=>v,metadata:()=>b,toc:()=>q});var i=a(85893),n=a(11151),r=a(58219),t=a.n(r),l=(a(62316),a(51039)),p=a.n(l),c=(a(82723),a(9487)),d=a.n(c),o=a(41429),m=a.n(o),h=a(5397),j=a.n(h),x=a(4667),u=a.n(x),g=a(9472),y=a.n(g),N=(a(1176),a(12005),a(85162));const v={id:"update-project-using-put",title:"Update project",description:"Update project",sidebar_label:"Update project",hide_title:!0,hide_table_of_contents:!0,api:"eJylVU1v2zgQ/SvCnNqCtpICe9Fp0yDABi1ar9OcXB/G0thmlyJZfsQxBP33xYiyLUVpe6hO0ujxzdebYQMBdx6KFVhnvlMZZqXRwRmlyMFagLHkMEij7ysoINoKAy0S8tFLvVs8fgUBFh3WFMgxUwMaa4LixPiZvwRIzSYMexBQkS+dtMw7wTn6EaWjCorgIgnw5Z5qhKKBcLRM64OTegdtu05g8uGDqY6MGPOOol3+CwI4N9KBoWitkmWXWv7dM74ZupJBsa/HCUUfhNmwhVN3XKIgyfO50uit3MVUsiFRT3E7/J/IRymvAENwchMDeS7/r70NsJfynLFYVZLdoFqMTr0sY9sKiL7r3Z+QMM24d53BW6N9OvP+6mrapC8fx315l797vRVfTkq8NbVVxG/Lh982pCbvcUc/C7llLVpHJQaOeovKk4DnWWkq2pGe9fqabUx1nPWynspqnFFqa9arGgTQcyDtpdFpOv6jIxS/9CHgCVV8zRdrvqawNzyNNnb58kgVkD9d573LvBlMVAsCPLmn02xGp6AARgRTGtUWed5gDHvjZDi2OVo5SWhJ1riwMC6gyhJXF6KTuFGpzCe61N8tRhWggH0I1k/oFiesANKxZtEzEESPX7cCzhFNBfOP8SHjMmWoq4wjy97IbaaJKqreZmabpXizlwFf4qqoNnPXoWwHmkvDglhzqcqY/K4a2BA6cjeRC7xaD38/sDxT6kPQWWR9Qp2K+TuBgPXGy2Z5WVt3z8hyfnV5jOZ7OKb8LvXWDOdjlPVPeniqyc3iPqtMGWvSIXlLM4hlN4O90B+i5UPcpxoly8Yny9+T2glQsiTtaXD8xmK5p+z9/ApELzsuS5Hnh8Nhjt3fuXG7vD/q80/3t3efH+5mfKQVwJpN0f81v76aX7PNGh9q1AM3k3EbJX7uSKDnkFuFUjNNF07Tz84Knq7T4ugZiuGNtBawNz4wrGk26OnRqbZl849IjoWyvgxDJ5tKen6/7JMXEZ23HbxZ9gvzbTa+BF8NujeiPg42BIh+oQwJWp6hPWFFbrBybpPf2VfmuTBMbsJWnE7clCXZMMDydh7toHT/b/r7tzYVoxwe+FbDAxTwDb5xjKbLvhuYzt6AQr2L3WqG5JWf/wEfe/w7",sidebar_class_name:"put api-method",info_path:"api/service-api/5.10/report-portal",custom_edit_url:null},f=void 0,b={id:"api/service-api/5.10/update-project-using-put",title:"Update project",description:"Update project",source:"@site/docs/api/service-api/5.10/update-project-using-put.api.mdx",sourceDirName:"api/service-api/5.10",slug:"/api/service-api/5.10/update-project-using-put",permalink:"/docs/api/service-api/5.10/update-project-using-put",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-project-using-put",title:"Update project",description:"Update project",sidebar_label:"Update project",hide_title:!0,hide_table_of_contents:!0,api:"eJylVU1v2zgQ/SvCnNqCtpICe9Fp0yDABi1ar9OcXB/G0thmlyJZfsQxBP33xYiyLUVpe6hO0ujxzdebYQMBdx6KFVhnvlMZZqXRwRmlyMFagLHkMEij7ysoINoKAy0S8tFLvVs8fgUBFh3WFMgxUwMaa4LixPiZvwRIzSYMexBQkS+dtMw7wTn6EaWjCorgIgnw5Z5qhKKBcLRM64OTegdtu05g8uGDqY6MGPOOol3+CwI4N9KBoWitkmWXWv7dM74ZupJBsa/HCUUfhNmwhVN3XKIgyfO50uit3MVUsiFRT3E7/J/IRymvAENwchMDeS7/r70NsJfynLFYVZLdoFqMTr0sY9sKiL7r3Z+QMM24d53BW6N9OvP+6mrapC8fx315l797vRVfTkq8NbVVxG/Lh982pCbvcUc/C7llLVpHJQaOeovKk4DnWWkq2pGe9fqabUx1nPWynspqnFFqa9arGgTQcyDtpdFpOv6jIxS/9CHgCVV8zRdrvqawNzyNNnb58kgVkD9d573LvBlMVAsCPLmn02xGp6AARgRTGtUWed5gDHvjZDi2OVo5SWhJ1riwMC6gyhJXF6KTuFGpzCe61N8tRhWggH0I1k/oFiesANKxZtEzEESPX7cCzhFNBfOP8SHjMmWoq4wjy97IbaaJKqreZmabpXizlwFf4qqoNnPXoWwHmkvDglhzqcqY/K4a2BA6cjeRC7xaD38/sDxT6kPQWWR9Qp2K+TuBgPXGy2Z5WVt3z8hyfnV5jOZ7OKb8LvXWDOdjlPVPeniqyc3iPqtMGWvSIXlLM4hlN4O90B+i5UPcpxoly8Yny9+T2glQsiTtaXD8xmK5p+z9/ApELzsuS5Hnh8Nhjt3fuXG7vD/q80/3t3efH+5mfKQVwJpN0f81v76aX7PNGh9q1AM3k3EbJX7uSKDnkFuFUjNNF07Tz84Knq7T4ugZiuGNtBawNz4wrGk26OnRqbZl849IjoWyvgxDJ5tKen6/7JMXEZ23HbxZ9gvzbTa+BF8NujeiPg42BIh+oQwJWp6hPWFFbrBybpPf2VfmuTBMbsJWnE7clCXZMMDydh7toHT/b/r7tzYVoxwe+FbDAxTwDb5xjKbLvhuYzt6AQr2L3WqG5JWf/wEfe/w7",sidebar_class_name:"put api-method",info_path:"api/service-api/5.10/report-portal",custom_edit_url:null},sidebar:"service-api-5.10",previous:{title:"Get information about project",permalink:"/docs/api/service-api/5.10/get-project-using-get"},next:{title:"Assign users",permalink:"/docs/api/service-api/5.10/assign-project-users-using-put"}},_={},q=[{value:"Request",id:"request",level:2}];function w(e){const s={h2:"h2",p:"p",...(0,n.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(s.p,{children:"Update project"})}),"\n",(0,i.jsx)(p(),{method:"put",path:"/v1/project/{projectName}"}),"\n",(0,i.jsx)(s.p,{children:"Update project"}),"\n",(0,i.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)(d(),{className:"openapi-tabs__mime",children:(0,i.jsx)(N.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,i.jsx)(s.p,{children:"updateProjectRQ"})})}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"configuration"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"},children:(0,i.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"attributes"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})}),(0,i.jsx)("span",{className:"openapi-schema__divider"}),(0,i.jsx)("span",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"},children:(0,i.jsx)(u(),{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},collapsible:!1,discriminator:!1})})]})})})]})}),(0,i.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"users"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"},children:(0,i.jsx)(u(),{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},collapsible:!1,discriminator:!1})})]})})]})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(t(),{label:void 0,id:void 0,children:(0,i.jsxs)(N.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(N.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(N.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(u(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(N.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(j(),{responseExample:'{\n  "message": "string"\n}',language:"json"})})]})})})})]})})})})]})}function M(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(w,{...e})}):w(e)}}}]);