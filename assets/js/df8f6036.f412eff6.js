"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[89539],{72391:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>k,contentTitle:()=>y,default:()=>w,frontMatter:()=>b,metadata:()=>N,toc:()=>q});var i=a(85893),r=a(11151),n=a(58219),t=a.n(n),l=(a(62316),a(51039)),c=a.n(l),m=(a(82723),a(9487)),o=a.n(m),d=a(41429),p=a.n(d),h=a(5397),u=a.n(h),j=a(4667),x=a.n(j),g=a(9472),f=a.n(g),v=(a(1176),a(12005),a(85162));const b={id:"compare-launches-using-get",title:"Compare launches",description:"Compare launches",sidebar_label:"Compare launches",hide_title:!0,hide_table_of_contents:!0,api:"eJydVsFu2zgQ/RVhTm3BWkl2uwedNgiCbrBFGzTtyfBhLI4tthLJkqOkrqB/X4wkq3KUboT6Yoh88/g4nHlkA4z7CNkaSqxtXrzOneXgypICbBQ4TwHZOHujIYPcVR4DveuQFD9HY/dvrz+BAo8BK2IKQtWAxYogA6MjKDAWMvhWUziAAk0xD8YL5QgI9K02gTRkHGpSEPlQSvjOhQoU0HdfOk3jbF5QhZA1wAcvMAwBhdowVXEybizTngKojgi5H/rrT2jbVo0afXBfKOf38jVo9cjFTOopbib5sajIwdg9tO1GwNE7G6kTd3F2Jn+n5B/+BQWSebIss6/SV/I3Y3Vb0QAKUGsjsVjeBjkjNhT/NyWGu5ReFRj4jpFNZJPHq2FJNVvAn9AavSivakjqLAsKbF1tKTzL8seFgCNj4E9moBqky3dkrPyzajUyLVxJ42EhsnB1eL66emxlbM20GO0sFwuxFq1byhspd1YvRbOpnk9af8gC/eEsfdjtIvFC/gPhsuNvWwX3WNYn+Vta+GPbHX/Sxj5QjizNusMy0uPOvupdLSkHWwMFFXHhxPH21JWXGEIG6f152kx8oE37kHTwRZCch/ujCdahhAwkgF3uyjZL0wZrLlwwfGhT9GZmMh/Ju8C3LjCWSc8Fko1gcFv2Gz3S9Sayw7qU3BXMPs7obo9YBWTrSlxegKAG/KZVMCqau9I/LnIiHZ2g1YkoS16YXWKJNOmXidslvd7kseCfujRVbhU6lO9AK+PkdDZdedb9uusGtoSBwmUteV5vptN34oH91qeg8cSHDXVWKd89COTkjd25qYOcqP1F7o97uby9SbTL64osdxfgYNCYdwU/XB53tZcgyW+FRo479iN/z/asoDQ52UiT8EuPeUHJxeoM1FAusp0sTR8eHlbYza5c2KdDaEzf3Vxdv7+7fi0h0icUYq/+zer8bHUuY95FrtBOlnmiwE+2PuaS6TunvkRjhagT1AzFv4b7c1CQnV6DPWOXmr4DNmKUkQXfNFuM9DmUbSvD/QNAzlqbKNX8i3Zsft6D8OLjcM2+TPqXwpM6v9JhfEp0xgEZgJTQsW9+f9XT3T65+vHGtYfp8kdVU4JW2q0g1HIPrpsBcZnn5HkSK3e/qB89SF5YbfsfeV9Jug==",sidebar_class_name:"get api-method",info_path:"api/service-api/5.10/report-portal",custom_edit_url:null},y=void 0,N={id:"api/service-api/5.10/compare-launches-using-get",title:"Compare launches",description:"Compare launches",source:"@site/docs/api/service-api/5.10/compare-launches-using-get.api.mdx",sourceDirName:"api/service-api/5.10",slug:"/api/service-api/5.10/compare-launches-using-get",permalink:"/docs/api/service-api/5.10/compare-launches-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"compare-launches-using-get",title:"Compare launches",description:"Compare launches",sidebar_label:"Compare launches",hide_title:!0,hide_table_of_contents:!0,api:"eJydVsFu2zgQ/RVhTm3BWkl2uwedNgiCbrBFGzTtyfBhLI4tthLJkqOkrqB/X4wkq3KUboT6Yoh88/g4nHlkA4z7CNkaSqxtXrzOneXgypICbBQ4TwHZOHujIYPcVR4DveuQFD9HY/dvrz+BAo8BK2IKQtWAxYogA6MjKDAWMvhWUziAAk0xD8YL5QgI9K02gTRkHGpSEPlQSvjOhQoU0HdfOk3jbF5QhZA1wAcvMAwBhdowVXEybizTngKojgi5H/rrT2jbVo0afXBfKOf38jVo9cjFTOopbib5sajIwdg9tO1GwNE7G6kTd3F2Jn+n5B/+BQWSebIss6/SV/I3Y3Vb0QAKUGsjsVjeBjkjNhT/NyWGu5ReFRj4jpFNZJPHq2FJNVvAn9AavSivakjqLAsKbF1tKTzL8seFgCNj4E9moBqky3dkrPyzajUyLVxJ42EhsnB1eL66emxlbM20GO0sFwuxFq1byhspd1YvRbOpnk9af8gC/eEsfdjtIvFC/gPhsuNvWwX3WNYn+Vta+GPbHX/Sxj5QjizNusMy0uPOvupdLSkHWwMFFXHhxPH21JWXGEIG6f152kx8oE37kHTwRZCch/ujCdahhAwkgF3uyjZL0wZrLlwwfGhT9GZmMh/Ju8C3LjCWSc8Fko1gcFv2Gz3S9Sayw7qU3BXMPs7obo9YBWTrSlxegKAG/KZVMCqau9I/LnIiHZ2g1YkoS16YXWKJNOmXidslvd7kseCfujRVbhU6lO9AK+PkdDZdedb9uusGtoSBwmUteV5vptN34oH91qeg8cSHDXVWKd89COTkjd25qYOcqP1F7o97uby9SbTL64osdxfgYNCYdwU/XB53tZcgyW+FRo479iN/z/asoDQ52UiT8EuPeUHJxeoM1FAusp0sTR8eHlbYza5c2KdDaEzf3Vxdv7+7fi0h0icUYq/+zer8bHUuY95FrtBOlnmiwE+2PuaS6TunvkRjhagT1AzFv4b7c1CQnV6DPWOXmr4DNmKUkQXfNFuM9DmUbSvD/QNAzlqbKNX8i3Zsft6D8OLjcM2+TPqXwpM6v9JhfEp0xgEZgJTQsW9+f9XT3T65+vHGtYfp8kdVU4JW2q0g1HIPrpsBcZnn5HkSK3e/qB89SF5YbfsfeV9Jug==",sidebar_class_name:"get api-method",info_path:"api/service-api/5.10/report-portal",custom_edit_url:null},sidebar:"service-api-5.10",previous:{title:"Get all index clusters of the launch",permalink:"/docs/api/service-api/5.10/get-clusters-using-get"},next:{title:"Import junit xml report",permalink:"/docs/api/service-api/5.10/import-launch-using-post"}},k={},q=[{value:"Request",id:"request",level:2}];function _(e){const s={h2:"h2",p:"p",...(0,r.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(s.p,{children:"Compare launches"})}),"\n",(0,i.jsx)(c(),{method:"get",path:"/v1/{projectName}/launch/compare"}),"\n",(0,i.jsx)(s.p,{children:"Compare launches"}),"\n",(0,i.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(p(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Query Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(p(),{className:"paramsItem",param:{name:"ids",in:"query",description:"ids",required:!0,style:"form",explode:!0,schema:{type:"array",items:{type:"integer",format:"int64"}}}})})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(t(),{label:void 0,id:void 0,children:(0,i.jsxs)(v.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(v.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"property name*"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,i.jsx)(x(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"number",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"}}),(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"startTime"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(x(),{collapsible:!1,name:"date",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"}}),(0,i.jsx)(x(),{collapsible:!1,name:"day",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"}}),(0,i.jsx)(x(),{collapsible:!1,name:"hours",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"}}),(0,i.jsx)(x(),{collapsible:!1,name:"minutes",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"}}),(0,i.jsx)(x(),{collapsible:!1,name:"month",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"}}),(0,i.jsx)(x(),{collapsible:!1,name:"nanos",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"}}),(0,i.jsx)(x(),{collapsible:!1,name:"seconds",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"}}),(0,i.jsx)(x(),{collapsible:!1,name:"time",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,i.jsx)(x(),{collapsible:!1,name:"timezoneOffset",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"}}),(0,i.jsx)(x(),{collapsible:!1,name:"year",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"}})]})]})}),(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"values"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"},children:(0,i.jsx)(x(),{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},collapsible:!1,discriminator:!1})})]})}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})})]})}),(0,i.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:"{}",language:"json"})})]})})})})]})})})})]})}function w(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(_,{...e})}):_(e)}}}]);