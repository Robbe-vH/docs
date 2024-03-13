"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6754],{82668:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>b,contentTitle:()=>j,default:()=>q,frontMatter:()=>v,metadata:()=>V,toc:()=>A});var i=a(85893),t=a(11151),p=a(58219),r=a.n(p),l=(a(62316),a(51039)),o=a.n(l),n=(a(82723),a(9487)),d=a.n(n),c=(a(41429),a(5397)),m=a.n(c),u=a(4667),h=a.n(u),x=a(9472),g=a.n(x),f=(a(1176),a(12005),a(85162));const v={id:"upload-photo-using-post",title:"Upload user's photo",description:"Upload user's photo",sidebar_label:"Upload user's photo",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVE1v2zAM/SsGL9sKJW4K7OLTsqLAig1r0I9TkANjM7E2WVIlOl1g+L8P9EeaNB3miwX5kXzke2YDjNsI2RI22tAksgu4pUnuLAdnDAVYKXCeArJ29raADGpvHBaL0rF7itpuF3cPj6Ag0HNNkb+6Yg9ZA5KBLMuxqg1rj4HTjQvVpEBGuY55SVV3klAdqBhpSE3ee4IM3PoX5QwKfBAWrClKRIfKmhEVOWi7BQUFxTxoL1wh61EKpCoyZLDWFsMeWnnUUVUONXUX0Tsb+wpXl5fyOk149x3UcWcX6cVpJ6xZiMHdOLFrV3lDcrp/gP91VVGMuH2nsbYdOBfkA+XIwnqDJtLblp86cZI6UvgQEy8igYKKuHSinXexK4tcQgbpbpaKGumIixR2FMQODdTBQAaND45d7kybpWmDNZcuaN63KXp9Nu978i7wwgVGk/S5QMEOg8a16Vsc0/Wz3WBtRJiS2cezdIsRq4BsXYk7BAhqwK9aBQdG52J9c5ETixUlaItEmCUf9SaxRAUVnxK3SXq+yVvCr7wKqtw0dCjfgabaiRgrGVVe93WXDawJA4V5LVNdruSztht3bIiTUv8Y3EhkvrhNCpfXFVnuTDSYDvPOdNISZPBQewmS4VSoRavY33w5I6zA6JxspKPwuce8pORqeglq0FqmmqXpy8vLFLuvUxe26RAa0x+31zc/H24mEtIqEKP07D9PZ7P+TuxVoT0q874fT7o/mJ3pD6feoLaSq+PUDFZdwm4mcbI6FPRpVgpKsXO2hKZZY6SnYNpWrp9rCiLM6tV8nS4KSsKCQqfZb9pDBtf9zzx5FAoCN7VQeW9ltWoMmuc5eT6Cyx4Q1Q//2bAT18MyrFwhMMk1tHA4Cq+2/Qs87eeT",sidebar_class_name:"post api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},j=void 0,V={id:"api/service-api/upload-photo-using-post",title:"Upload user's photo",description:"Upload user's photo",source:"@site/docs/api/service-api/upload-photo-using-post.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/upload-photo-using-post",permalink:"/docs/api/service-api/upload-photo-using-post",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"upload-photo-using-post",title:"Upload user's photo",description:"Upload user's photo",sidebar_label:"Upload user's photo",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVE1v2zAM/SsGL9sKJW4K7OLTsqLAig1r0I9TkANjM7E2WVIlOl1g+L8P9EeaNB3miwX5kXzke2YDjNsI2RI22tAksgu4pUnuLAdnDAVYKXCeArJ29raADGpvHBaL0rF7itpuF3cPj6Ag0HNNkb+6Yg9ZA5KBLMuxqg1rj4HTjQvVpEBGuY55SVV3klAdqBhpSE3ee4IM3PoX5QwKfBAWrClKRIfKmhEVOWi7BQUFxTxoL1wh61EKpCoyZLDWFsMeWnnUUVUONXUX0Tsb+wpXl5fyOk149x3UcWcX6cVpJ6xZiMHdOLFrV3lDcrp/gP91VVGMuH2nsbYdOBfkA+XIwnqDJtLblp86cZI6UvgQEy8igYKKuHSinXexK4tcQgbpbpaKGumIixR2FMQODdTBQAaND45d7kybpWmDNZcuaN63KXp9Nu978i7wwgVGk/S5QMEOg8a16Vsc0/Wz3WBtRJiS2cezdIsRq4BsXYk7BAhqwK9aBQdG52J9c5ETixUlaItEmCUf9SaxRAUVnxK3SXq+yVvCr7wKqtw0dCjfgabaiRgrGVVe93WXDawJA4V5LVNdruSztht3bIiTUv8Y3EhkvrhNCpfXFVnuTDSYDvPOdNISZPBQewmS4VSoRavY33w5I6zA6JxspKPwuce8pORqeglq0FqmmqXpy8vLFLuvUxe26RAa0x+31zc/H24mEtIqEKP07D9PZ7P+TuxVoT0q874fT7o/mJ3pD6feoLaSq+PUDFZdwm4mcbI6FPRpVgpKsXO2hKZZY6SnYNpWrp9rCiLM6tV8nS4KSsKCQqfZb9pDBtf9zzx5FAoCN7VQeW9ltWoMmuc5eT6Cyx4Q1Q//2bAT18MyrFwhMMk1tHA4Cq+2/Qs87eeT",sidebar_class_name:"post api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Get photo of current user",permalink:"/docs/api/service-api/get-my-photo-using-get"},next:{title:"Delete user's photo",permalink:"/docs/api/service-api/delete-photo-using-delete"}},b={},A=[{value:"Request",id:"request",level:2}];function K(e){const s={h2:"h2",p:"p",...(0,t.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(s.p,{children:"Upload user's photo"})}),"\n",(0,i.jsx)(o(),{method:"post",path:"/v1/data/photo"}),"\n",(0,i.jsx)(s.p,{children:"Upload user's photo"}),"\n",(0,i.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,i.jsx)(d(),{className:"openapi-tabs__mime",children:(0,i.jsx)(f.default,{label:"multipart/form-data",value:"multipart/form-data-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(h(),{collapsible:!1,name:"file",required:!0,schemaName:"binary",qualifierMessage:void 0,schema:{type:"string",description:"file",format:"binary"}})})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(r(),{label:void 0,id:void 0,children:(0,i.jsxs)(f.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(h(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(m(),{responseExample:'{\n  "message": "string"\n}',language:"json"})})]})})})})]})})})})]})}function q(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(K,{...e})}):K(e)}}}]);