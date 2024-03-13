"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21450],{12056:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>q,contentTitle:()=>N,default:()=>I,frontMatter:()=>f,metadata:()=>v,toc:()=>_});var i=a(85893),n=a(11151),l=a(58219),r=a.n(l),t=(a(62316),a(51039)),c=a.n(t),m=(a(82723),a(9487)),p=a.n(m),d=a(41429),o=a.n(d),h=a(5397),u=a.n(h),x=a(4667),j=a.n(x),g=a(9472),y=a.n(g),b=(a(1176),a(12005),a(85162));const f={id:"get-launch-using-get",title:"Get specified launch by ID",description:"Get specified launch by ID",sidebar_label:"Get specified launch by ID",hide_title:!0,hide_table_of_contents:!0,api:"eJytVktz20YM/iscnJIMLdru48BT1dp1NXUTjx2fNDpAXEjcltxldrG2NRz+9w5ISiIjxuNmeqK0C2CBD48PNTBuPaRLKDCYLD/LrGFni4IcrGKwFTlkbc1CQQpb4ttW6tFrs725/gwxVOiwJCYnRmowWBKkvbGFghi0gRQq5BxiUOQzpysxOBZy9CVoRwpSdoFi8FlOJUJaA+8qMejZabOFpokPb1TO/k0Zf5R/rz0zlnv7SysR9pU1nrzcX56fy2ds/NOfEINgRobl9kPyQT4Dq5oLMdsBd0/eBpeNHVmCFgxM56AJ5ZocxOAZHX/W7aFn5OAhhhC0ksT0ztq1hCZpcJIq1p2raLDYSY4GcaFzuBOgmEo/iSxgVTn7oktkugpd3geCB8c21pXIkIKyYV0QiCaz0+vA5F99scdiwVTO9xoDSF4P6h/aTbgdwxMWgaYCkpBG2ZpQJqNaiE/uhmEi0xmLVBNDjv6e2OlRpGtrC0Ij91oNzrVh2o4x04Z//lEEC/T8l1V6o0m9/fmSGBXysGCn4ZLgS6smIyMTSim7q+vf54+30sVX178+3sCq6atwCqk+/W8Lzj6bkezRjCMXzDR0x4J/MxzSF9qzzkb19XA4fXNxKdpQxn4KVlRKS/1gcTdS+Y9y03D9cAltndILZUG0/2/TzWF4TGWjHSeTrdN3T+UoQ5YK3WDh6evZekMc+YqytoqjbqBH6120uIK2VnPb80bLFJxDCsnTRVIPZnKTdGpJveeDRgYeuac9pwRXQAqiwzazRZMmSY2Bc+s075oEK30y8++pso7vrGMsos4WyKRwGtdFh93eXJ99DIXgljNX/sTc3V722DsiCHEvL41z8OiUJP6wniNprAiNisSz6J3eRIZIkXof2U3U+Rt97fDRL0WlnblWqmqFZtpKnlYCVRa6d5c1rAkduXkQqJer4fWDUFIX+lDokPs+oJa52sZshVpe0GZjh/018vYb2O9jmd8tImWzUJLhjlE6vsSs5cueyx9CJUqCb4la0u27k19OYo6h0BkZTwP1eYVZTtHl7Fwosi0XCSdNkufn5xm2tzPrtkmv6pPbxW/XHx+uz0RFOISc77z/aXZxPruQs8p6LtEMnnm12qeZhumFk6pA3U641rW674QlPF1ADOl4P+msyvlhPVrFkFvPolHXa/T06IqmkeMvgZzkfXWs7bYKlPby+xtdWx8XFnh3368h76PBOjbp/J7VzQ4OpAsQd7x8XOZkQ/uu98c4fIcLQwONtGROqISGlv3yAPMso4oHurKuSZMcRpUstU3zLwTAzHo=",sidebar_class_name:"get api-method",info_path:"api/service-api/5.10/report-portal",custom_edit_url:null},N=void 0,v={id:"api/service-api/5.10/get-launch-using-get",title:"Get specified launch by ID",description:"Get specified launch by ID",source:"@site/docs/api/service-api/5.10/get-launch-using-get.api.mdx",sourceDirName:"api/service-api/5.10",slug:"/api/service-api/5.10/get-launch-using-get",permalink:"/docs/api/service-api/5.10/get-launch-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-launch-using-get",title:"Get specified launch by ID",description:"Get specified launch by ID",sidebar_label:"Get specified launch by ID",hide_title:!0,hide_table_of_contents:!0,api:"eJytVktz20YM/iscnJIMLdru48BT1dp1NXUTjx2fNDpAXEjcltxldrG2NRz+9w5ISiIjxuNmeqK0C2CBD48PNTBuPaRLKDCYLD/LrGFni4IcrGKwFTlkbc1CQQpb4ttW6tFrs725/gwxVOiwJCYnRmowWBKkvbGFghi0gRQq5BxiUOQzpysxOBZy9CVoRwpSdoFi8FlOJUJaA+8qMejZabOFpokPb1TO/k0Zf5R/rz0zlnv7SysR9pU1nrzcX56fy2ds/NOfEINgRobl9kPyQT4Dq5oLMdsBd0/eBpeNHVmCFgxM56AJ5ZocxOAZHX/W7aFn5OAhhhC0ksT0ztq1hCZpcJIq1p2raLDYSY4GcaFzuBOgmEo/iSxgVTn7oktkugpd3geCB8c21pXIkIKyYV0QiCaz0+vA5F99scdiwVTO9xoDSF4P6h/aTbgdwxMWgaYCkpBG2ZpQJqNaiE/uhmEi0xmLVBNDjv6e2OlRpGtrC0Ij91oNzrVh2o4x04Z//lEEC/T8l1V6o0m9/fmSGBXysGCn4ZLgS6smIyMTSim7q+vf54+30sVX178+3sCq6atwCqk+/W8Lzj6bkezRjCMXzDR0x4J/MxzSF9qzzkb19XA4fXNxKdpQxn4KVlRKS/1gcTdS+Y9y03D9cAltndILZUG0/2/TzWF4TGWjHSeTrdN3T+UoQ5YK3WDh6evZekMc+YqytoqjbqBH6120uIK2VnPb80bLFJxDCsnTRVIPZnKTdGpJveeDRgYeuac9pwRXQAqiwzazRZMmSY2Bc+s075oEK30y8++pso7vrGMsos4WyKRwGtdFh93eXJ99DIXgljNX/sTc3V722DsiCHEvL41z8OiUJP6wniNprAiNisSz6J3eRIZIkXof2U3U+Rt97fDRL0WlnblWqmqFZtpKnlYCVRa6d5c1rAkduXkQqJer4fWDUFIX+lDokPs+oJa52sZshVpe0GZjh/018vYb2O9jmd8tImWzUJLhjlE6vsSs5cueyx9CJUqCb4la0u27k19OYo6h0BkZTwP1eYVZTtHl7Fwosi0XCSdNkufn5xm2tzPrtkmv6pPbxW/XHx+uz0RFOISc77z/aXZxPruQs8p6LtEMnnm12qeZhumFk6pA3U641rW674QlPF1ADOl4P+msyvlhPVrFkFvPolHXa/T06IqmkeMvgZzkfXWs7bYKlPby+xtdWx8XFnh3368h76PBOjbp/J7VzQ4OpAsQd7x8XOZkQ/uu98c4fIcLQwONtGROqISGlv3yAPMso4oHurKuSZMcRpUstU3zLwTAzHo=",sidebar_class_name:"get api-method",info_path:"api/service-api/5.10/report-portal",custom_edit_url:null},sidebar:"service-api-5.10",previous:{title:"Get specified launch by UUID",permalink:"/docs/api/service-api/5.10/get-launch-by-uuid-using-get"},next:{title:"Delete specified launch by ID",permalink:"/docs/api/service-api/5.10/delete-launch-using-delete"}},q={},_=[{value:"Request",id:"request",level:2}];function k(e){const s={h2:"h2",p:"p",...(0,n.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(s.p,{children:"Get specified launch by ID"})}),"\n",(0,i.jsx)(c(),{method:"get",path:"/v1/{projectName}/launch/{launchId}"}),"\n",(0,i.jsx)(s.p,{children:"Get specified launch by ID"}),"\n",(0,i.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(o(),{className:"paramsItem",param:{name:"launchId",in:"path",description:"launchId",required:!0,schema:{type:"string"}}}),(0,i.jsx)(o(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(r(),{label:void 0,id:void 0,children:(0,i.jsxs)(b.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(j(),{collapsible:!1,name:"analysing",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}}}),(0,i.jsx)(j(),{collapsible:!1,name:"approximateDuration",required:!1,schemaName:"double",qualifierMessage:void 0,schema:{type:"number",format:"double"}}),(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"attributes"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(j(),{collapsible:!1,name:"key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})}),(0,i.jsx)(j(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"endTime",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(j(),{collapsible:!1,name:"hasRetries",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,i.jsx)(j(),{collapsible:!1,name:"id",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,i.jsx)(j(),{collapsible:!1,name:"lastModified",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"metadata"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"}})]})}),(0,i.jsx)(j(),{collapsible:!1,name:"mode",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`DEFAULT`, `DEBUG`]",schema:{type:"string",enum:["DEFAULT","DEBUG"]}}),(0,i.jsx)(j(),{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"number",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,i.jsx)(j(),{collapsible:!1,name:"owner",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"rerun",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,i.jsx)(j(),{collapsible:!1,name:"startTime",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"statistics"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"defects"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"},children:(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"property name*"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"},children:(0,i.jsx)(j(),{name:"property name*",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},collapsible:!1,discriminator:!1})})]})})})]})}),(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"executions"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"},children:(0,i.jsx)(j(),{name:"property name*",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},collapsible:!1,discriminator:!1})})]})})]})]})}),(0,i.jsx)(j(),{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"uuid",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,i.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "analysing": [\n    "string"\n  ],\n  "approximateDuration": 0,\n  "attributes": [\n    {\n      "key": "string",\n      "value": "string"\n    }\n  ],\n  "description": "string",\n  "endTime": "2024-03-13T13:42:25.053Z",\n  "hasRetries": true,\n  "id": 0,\n  "lastModified": "2024-03-13T13:42:25.053Z",\n  "metadata": {},\n  "mode": "DEFAULT",\n  "name": "string",\n  "number": 0,\n  "owner": "string",\n  "rerun": true,\n  "startTime": "2024-03-13T13:42:25.053Z",\n  "statistics": {\n    "defects": {},\n    "executions": {}\n  },\n  "status": "string",\n  "uuid": "string"\n}',language:"json"})})]})})})})]})})})})]})}function I(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(k,{...e})}):k(e)}}}]);