"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11276],{89097:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>T,contentTitle:()=>v,default:()=>_,frontMatter:()=>N,metadata:()=>b,toc:()=>S});var s=i(85893),n=i(11151),t=i(58219),r=i.n(t),l=(i(62316),i(51039)),o=i.n(l),c=(i(82723),i(9487)),p=i.n(c),m=i(41429),d=i.n(m),h=i(5397),u=i.n(h),j=i(4667),g=i.n(j),x=i(9472),f=i.n(x),y=(i(1176),i(12005),i(85162));const N={id:"get-project-integration-using-get",title:"Get integration instance",description:"Get integration instance",sidebar_label:"Get integration instance",hide_title:!0,hide_table_of_contents:!0,api:"eJydVktv2zAM/isGT1uhxm2x7eDTsvWxYFsb9HEqclBsJtZmS5pEtysM//eBspPYTZZ19cWw+BD5kfzoGkguPST3oDTh0klSRh+mRpMzRYEOZgKMxfZ8kkECS6SpMz8wpcnG4s4rvbw4uwUBVjpZIqFjrzVoWSIkfe+TDAQoDQlYSTkIyNCnTlmW7dB0+KtSDjNIyFUowKc5lhKSGujJrl2jAwEL40pJ7dGHd9A0Yn2/bUO+5K99tw/1/nm3J6f0EppmxsreGu3Rs/zk6IhfQ+dXX0EAY4uaWHoQH/Cr51VRwW57yF6jN5VLOZruTjPnCBlpx5Uh1d6YOgwGp5JwO8IeOJkkPCRVIjSitTJuR0oCUMt5wcmvZXNjCpSahSp7UQlEv57TXmvU+9Nphpa3QXcnQCx6MUiyovy8MI+7AEJdlTwIV+O72y8g4NP4ZvIZBNxefT27BAHnV9ffQcC30/EUZivo/hvwDEmq4mUA7C3A0pnKrnF5Xru27XcIaGixZ3j2eenGZPKyJmgfzt06TCVxSgtZeHw+fRdIUa/qkdKepA51LZFy0/FPYBnKIYH44TjuGcR1b36buB5wSQMCPLqHFTNVroAE2IJMaoomieOa+8M4RU9NLK3aYodrtMbR1DiSRdT6AgEP0ikuVCjqyl07/QtZFQxETmT9lrvpSnfTfKwIotPnLltHtE0nX4yniEsUSZ1FHFn0Ri0ijZhh9jYyi6iNN3oe8CauDEszckHLBqWRMlyvGUOVVu299zXMUTp044pBv5/1xTdMXm3qfaV1V3QJBY4LHRyUoJ3vhekP9SDav2C/ymU8nUSZSasSNYX6dswq08CsHevfVJaNGN9SKi63b08+buUsoFApao8987GVaY7RyegIRNcunE4Sx4+PjyMZpCPjlnFn6uNvk89nlzdnh2zSCOBea6N/Pzo+Gh2H0TGeSql71+zp+gEEa0wJf1NsC6kCEYTA6m4i7uHhGAbUCQKS4VZLhit2JiA3nti2rufS450rmoaPf1XouP6zTY+HbsiU74hp1xTXmxUHb667Dfo2er7Xd+bSHUr9FOaqqPgLBPzEp61fA97ur4pkiMYr4ug7aHhIc5QZuoBNqzFOU7TUs+VVz2OzpjH+WWqaP+RLRAQ=",sidebar_class_name:"get api-method",info_path:"api/service-api/5.10/report-portal",custom_edit_url:null},v=void 0,b={id:"api/service-api/5.10/get-project-integration-using-get",title:"Get integration instance",description:"Get integration instance",source:"@site/docs/api/service-api/5.10/get-project-integration-using-get.api.mdx",sourceDirName:"api/service-api/5.10",slug:"/api/service-api/5.10/get-project-integration-using-get",permalink:"/docs/api/service-api/5.10/get-project-integration-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-project-integration-using-get",title:"Get integration instance",description:"Get integration instance",sidebar_label:"Get integration instance",hide_title:!0,hide_table_of_contents:!0,api:"eJydVktv2zAM/isGT1uhxm2x7eDTsvWxYFsb9HEqclBsJtZmS5pEtysM//eBspPYTZZ19cWw+BD5kfzoGkguPST3oDTh0klSRh+mRpMzRYEOZgKMxfZ8kkECS6SpMz8wpcnG4s4rvbw4uwUBVjpZIqFjrzVoWSIkfe+TDAQoDQlYSTkIyNCnTlmW7dB0+KtSDjNIyFUowKc5lhKSGujJrl2jAwEL40pJ7dGHd9A0Yn2/bUO+5K99tw/1/nm3J6f0EppmxsreGu3Rs/zk6IhfQ+dXX0EAY4uaWHoQH/Cr51VRwW57yF6jN5VLOZruTjPnCBlpx5Uh1d6YOgwGp5JwO8IeOJkkPCRVIjSitTJuR0oCUMt5wcmvZXNjCpSahSp7UQlEv57TXmvU+9Nphpa3QXcnQCx6MUiyovy8MI+7AEJdlTwIV+O72y8g4NP4ZvIZBNxefT27BAHnV9ffQcC30/EUZivo/hvwDEmq4mUA7C3A0pnKrnF5Xru27XcIaGixZ3j2eenGZPKyJmgfzt06TCVxSgtZeHw+fRdIUa/qkdKepA51LZFy0/FPYBnKIYH44TjuGcR1b36buB5wSQMCPLqHFTNVroAE2IJMaoomieOa+8M4RU9NLK3aYodrtMbR1DiSRdT6AgEP0ikuVCjqyl07/QtZFQxETmT9lrvpSnfTfKwIotPnLltHtE0nX4yniEsUSZ1FHFn0Ri0ijZhh9jYyi6iNN3oe8CauDEszckHLBqWRMlyvGUOVVu299zXMUTp044pBv5/1xTdMXm3qfaV1V3QJBY4LHRyUoJ3vhekP9SDav2C/ymU8nUSZSasSNYX6dswq08CsHevfVJaNGN9SKi63b08+buUsoFApao8987GVaY7RyegIRNcunE4Sx4+PjyMZpCPjlnFn6uNvk89nlzdnh2zSCOBea6N/Pzo+Gh2H0TGeSql71+zp+gEEa0wJf1NsC6kCEYTA6m4i7uHhGAbUCQKS4VZLhit2JiA3nti2rufS450rmoaPf1XouP6zTY+HbsiU74hp1xTXmxUHb667Dfo2er7Xd+bSHUr9FOaqqPgLBPzEp61fA97ur4pkiMYr4ug7aHhIc5QZuoBNqzFOU7TUs+VVz2OzpjH+WWqaP+RLRAQ=",sidebar_class_name:"get api-method",info_path:"api/service-api/5.10/report-portal",custom_edit_url:null},sidebar:"service-api-5.10",previous:{title:"Delete all integrations assigned to specified project",permalink:"/docs/api/service-api/5.10/delete-all-project-integrations-using-delete"},next:{title:"Update project integration instance",permalink:"/docs/api/service-api/5.10/update-project-integration-using-put"}},T={},S=[{value:"Request",id:"request",level:2}];function q(e){const a={h2:"h2",p:"p",...(0,n.a)(),...e.components},{Details:i}=a;return i||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"openapi__heading",children:(0,s.jsx)(a.p,{children:"Get integration instance"})}),"\n",(0,s.jsx)(o(),{method:"get",path:"/v1/integration/{projectName}/{integrationId}"}),"\n",(0,s.jsx)(a.p,{children:"Get integration instance"}),"\n",(0,s.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,s.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,s.jsx)(a.p,{children:"Path Parameters"})})}),(0,s.jsx)("div",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)(d(),{className:"paramsItem",param:{name:"integrationId",in:"path",description:"integrationId",required:!0,schema:{type:"integer",format:"int64"}}}),(0,s.jsx)(d(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,s.jsx)("div",{children:(0,s.jsx)("div",{children:(0,s.jsx)(r(),{label:void 0,id:void 0,children:(0,s.jsxs)(y.default,{label:"200",value:"200",children:[(0,s.jsx)("div",{children:(0,s.jsx)(a.p,{children:"OK"})}),(0,s.jsx)("div",{children:(0,s.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,s.jsx)(y.default,{label:"*/*",value:"*/*",children:(0,s.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,s.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,s.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,s.jsx)("strong",{children:(0,s.jsx)(a.p,{children:"Schema"})})}),(0,s.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,s.jsx)(g(),{collapsible:!1,name:"creationDate",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,s.jsx)(g(),{collapsible:!1,name:"creator",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,s.jsx)(g(),{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,s.jsx)(g(),{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,s.jsx)(g(),{collapsible:!0,className:"schemaItem",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsxs)("span",{className:"openapi-schema__container",children:[(0,s.jsx)("strong",{className:"openapi-schema__property",children:(0,s.jsx)(a.p,{children:"integrationParameters"})}),(0,s.jsx)("span",{className:"openapi-schema__name",children:(0,s.jsx)(a.p,{children:"object"})})]})}),(0,s.jsx)("div",{style:{marginLeft:"1rem"}})]})}),(0,s.jsx)(g(),{collapsible:!0,className:"schemaItem",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsxs)("span",{className:"openapi-schema__container",children:[(0,s.jsx)("strong",{className:"openapi-schema__property",children:(0,s.jsx)(a.p,{children:"integrationType"})}),(0,s.jsx)("span",{className:"openapi-schema__name",children:(0,s.jsx)(a.p,{children:"object"})})]})}),(0,s.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,s.jsx)(g(),{collapsible:!1,name:"authFlow",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`OAUTH`, `BASIC`, `TOKEN`, `FORM`, `LDAP`]",schema:{type:"string",enum:["OAUTH","BASIC","TOKEN","FORM","LDAP"]}}),(0,s.jsx)(g(),{collapsible:!1,name:"creationDate",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,s.jsx)(g(),{collapsible:!0,className:"schemaItem",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsxs)("span",{className:"openapi-schema__container",children:[(0,s.jsx)("strong",{className:"openapi-schema__property",children:(0,s.jsx)(a.p,{children:"details"})}),(0,s.jsx)("span",{className:"openapi-schema__name",children:(0,s.jsx)(a.p,{children:"object"})})]})}),(0,s.jsx)("div",{style:{marginLeft:"1rem"}})]})}),(0,s.jsx)(g(),{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,s.jsx)(g(),{collapsible:!1,name:"groupType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,s.jsx)(g(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,s.jsx)(g(),{collapsible:!1,name:"type",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}})]})]})}),(0,s.jsx)(g(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,s.jsx)(g(),{collapsible:!1,name:"projectId",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}})]})]})}),(0,s.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,s.jsx)(u(),{responseExample:'{\n  "creationDate": "2024-03-13T13:42:24.952Z",\n  "creator": "string",\n  "enabled": true,\n  "id": 0,\n  "integrationParameters": {},\n  "integrationType": {\n    "authFlow": "OAUTH",\n    "creationDate": "2024-03-13T13:42:24.952Z",\n    "details": {},\n    "enabled": true,\n    "groupType": "string",\n    "name": "string",\n    "type": 0\n  },\n  "name": "string",\n  "projectId": 0\n}',language:"json"})})]})})})})]})})})})]})}function _(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(q,{...e})}):q(e)}}}]);