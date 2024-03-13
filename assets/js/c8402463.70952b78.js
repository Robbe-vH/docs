"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81434],{14871:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>S,contentTitle:()=>N,default:()=>A,frontMatter:()=>b,metadata:()=>q,toc:()=>y});var t=i(85893),a=i(11151),r=i(58219),n=i.n(r),l=(i(62316),i(51039)),c=i.n(l),d=(i(82723),i(9487)),m=i.n(d),o=i(41429),u=i.n(o),g=i(5397),p=i.n(g),h=i(4667),v=i.n(h),x=i(9472),j=i.n(x),f=(i(1176),i(12005),i(85162));const b={id:"get-o-auth-settings-using-get",title:"Returns OAuth Server Settings",description:"Returns OAuth Server Settings",sidebar_label:"Returns OAuth Server Settings",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVU1v2zAM/SsBT1uhxGmBXXxaUARFsPUD+TgVOagyG6u1JZWim3WG//tA222TNukCBHbEx6cn6pGpgfUmQnoLfqgrzofGu3u7qUiz9W6ILgveOoa1Ah+wW51lkMIG+XpScb5AZus2cRWt21xMl6AgaNIlMpLw1uB0iZCCsM8yUGAdpBA056Agw2jIBmHdhRA+VZYwg5SpQgXR5FhqSGvglyBkkcm6DTTNWsAxeBcxSvxsPJbHPu/1L1BgvGN0LNGT5EQeO6yWC6FtTzTHjY3cHXWO0VdkENTrzv7uAQ3LKUkKwrbbV6RfkHa8bGGfhKoW4cn+bXlXZA+CTGHRsai4RM599gVo9lXwqq350fACDSEfBNjDtA/bxwXyMdmEmSU0vKJiiWUoNB/enVDejVQg7gDeaqqzzEpQFzd71f146+IIH/Zimki/iLsYyyM57B/xaOWriDRz937aO14qOGEme1cdOczHjMPM3UecHgiNZjH1vS4ifjT/HLkiFwetBwcLpGekwWt3gYKyN4R0XttknEMKSewRiReDJXXXQw0oiC1F14MVFQJOMiz9iDB4YvnqYmR9UmkGaSTr7v1uN8xb3OCmBX5q1r3oYDVZDjJvqhIdtw7vO06b1mb9DFhUQZJAAZbaiqTYrfz8oEnqW1iDLuJO+iRok+PgbDTuiaY3l+fD5WLZaemk/MSgy5HxJaj+2DlzSJNku92OdMsw8rRJevqY/J6dT68W0+HZaCzbSs26E/4YnZ52a8FHLrXbkfK/29qr1ZspGP9wEgptXWsgUVf3N3kL8T27vUtQkPYTca0g95EFVdd3OuKKiqaR5acK6QXS27WCZ01W38nN3daQ2SjvR8xWv09D+Dbvh+33wdv8PSj3tdGctNmzLir5BQoe8eV9djfrRkGOOkNqdXTBiTEYeCdNJrBY7s3U8s/RNP8AH49E5g==",sidebar_class_name:"get api-method",info_path:"api/service-uat/report-portal",custom_edit_url:null},N=void 0,q={id:"api/service-uat/get-o-auth-settings-using-get",title:"Returns OAuth Server Settings",description:"Returns OAuth Server Settings",source:"@site/docs/api/service-uat/get-o-auth-settings-using-get.api.mdx",sourceDirName:"api/service-uat",slug:"/api/service-uat/get-o-auth-settings-using-get",permalink:"/docs/api/service-uat/get-o-auth-settings-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-o-auth-settings-using-get",title:"Returns OAuth Server Settings",description:"Returns OAuth Server Settings",sidebar_label:"Returns OAuth Server Settings",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVU1v2zAM/SsBT1uhxGmBXXxaUARFsPUD+TgVOagyG6u1JZWim3WG//tA222TNukCBHbEx6cn6pGpgfUmQnoLfqgrzofGu3u7qUiz9W6ILgveOoa1Ah+wW51lkMIG+XpScb5AZus2cRWt21xMl6AgaNIlMpLw1uB0iZCCsM8yUGAdpBA056Agw2jIBmHdhRA+VZYwg5SpQgXR5FhqSGvglyBkkcm6DTTNWsAxeBcxSvxsPJbHPu/1L1BgvGN0LNGT5EQeO6yWC6FtTzTHjY3cHXWO0VdkENTrzv7uAQ3LKUkKwrbbV6RfkHa8bGGfhKoW4cn+bXlXZA+CTGHRsai4RM599gVo9lXwqq350fACDSEfBNjDtA/bxwXyMdmEmSU0vKJiiWUoNB/enVDejVQg7gDeaqqzzEpQFzd71f146+IIH/Zimki/iLsYyyM57B/xaOWriDRz937aO14qOGEme1cdOczHjMPM3UecHgiNZjH1vS4ifjT/HLkiFwetBwcLpGekwWt3gYKyN4R0XttknEMKSewRiReDJXXXQw0oiC1F14MVFQJOMiz9iDB4YvnqYmR9UmkGaSTr7v1uN8xb3OCmBX5q1r3oYDVZDjJvqhIdtw7vO06b1mb9DFhUQZJAAZbaiqTYrfz8oEnqW1iDLuJO+iRok+PgbDTuiaY3l+fD5WLZaemk/MSgy5HxJaj+2DlzSJNku92OdMsw8rRJevqY/J6dT68W0+HZaCzbSs26E/4YnZ52a8FHLrXbkfK/29qr1ZspGP9wEgptXWsgUVf3N3kL8T27vUtQkPYTca0g95EFVdd3OuKKiqaR5acK6QXS27WCZ01W38nN3daQ2SjvR8xWv09D+Dbvh+33wdv8PSj3tdGctNmzLir5BQoe8eV9djfrRkGOOkNqdXTBiTEYeCdNJrBY7s3U8s/RNP8AH49E5g==",sidebar_class_name:"get api-method",info_path:"api/service-uat/report-portal",custom_edit_url:null},sidebar:"serviceUat",previous:{title:"Returns OAuth Server Settings",permalink:"/docs/api/service-uat/get-o-auth-settings-using-get-1"},next:{title:"Creates/Updates OAuth Integration Settings",permalink:"/docs/api/service-uat/update-o-auth-settings-using-put"}},S={},y=[{value:"Request",id:"request",level:2}];function k(e){const s={h2:"h2",p:"p",...(0,a.a)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"openapi__heading",children:(0,t.jsx)(s.p,{children:"Returns OAuth Server Settings"})}),"\n",(0,t.jsx)(c(),{method:"get",path:"/settings/oauth/{authId}"}),"\n",(0,t.jsx)(s.p,{children:"Returns OAuth Server Settings"}),"\n",(0,t.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(s.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(u(),{className:"paramsItem",param:{name:"authId",in:"path",description:"authId",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsx)(n(),{label:void 0,id:void 0,children:(0,t.jsxs)(f.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(s.p,{children:"OK"})}),(0,t.jsx)("div",{children:(0,t.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(f.default,{label:"*/*",value:"*/*",children:(0,t.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(v(),{collapsible:!1,name:"authGrantType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(v(),{collapsible:!1,name:"authorizationUri",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(v(),{collapsible:!1,name:"clientAuthMethod",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(v(),{collapsible:!1,name:"clientId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(v(),{collapsible:!1,name:"clientName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(v(),{collapsible:!1,name:"clientSecret",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(v(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(v(),{collapsible:!1,name:"jwkSetUri",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(v(),{collapsible:!1,name:"redirectUrlTemplate",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(v(),{collapsible:!0,className:"schemaItem",children:(0,t.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsxs)("span",{className:"openapi-schema__container",children:[(0,t.jsx)("strong",{className:"openapi-schema__property",children:(0,t.jsx)(s.p,{children:"restrictions"})}),(0,t.jsx)("span",{className:"openapi-schema__name",children:(0,t.jsx)(s.p,{children:"object"})})]})}),(0,t.jsx)("div",{style:{marginLeft:"1rem"},children:(0,t.jsx)(v(),{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},collapsible:!1,discriminator:!1})})]})}),(0,t.jsx)(v(),{collapsible:!1,name:"scopes",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}}}),(0,t.jsx)(v(),{collapsible:!1,name:"tokenUri",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(v(),{collapsible:!1,name:"userInfoEndpointNameAttribute",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(v(),{collapsible:!1,name:"userInfoEndpointUri",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,t.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(p(),{responseExample:'{\n  "authGrantType": "string",\n  "authorizationUri": "string",\n  "clientAuthMethod": "string",\n  "clientId": "string",\n  "clientName": "string",\n  "clientSecret": "string",\n  "id": "string",\n  "jwkSetUri": "string",\n  "redirectUrlTemplate": "string",\n  "restrictions": {},\n  "scopes": [\n    "string"\n  ],\n  "tokenUri": "string",\n  "userInfoEndpointNameAttribute": "string",\n  "userInfoEndpointUri": "string"\n}',language:"json"})})]})})})})]})})})})]})}function A(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(k,{...e})}):k(e)}}}]);