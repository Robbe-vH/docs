"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19100],{20210:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>_,contentTitle:()=>N,default:()=>U,frontMatter:()=>f,metadata:()=>y,toc:()=>P});var t=i(85893),n=i(11151),s=i(58219),l=i.n(s),r=(i(62316),i(51039)),o=i.n(r),d=(i(82723),i(9487)),c=i.n(d),p=i(41429),m=i.n(p),g=i(5397),h=i.n(g),u=i(4667),j=i.n(u),x=i(9472),b=i.n(x),v=(i(1176),i(12005),i(85162));const f={id:"update-global-integration-using-put",title:"Update global Report Portal integration instance",description:"Update global Report Portal integration instance",sidebar_label:"Update global Report Portal integration instance",hide_title:!0,hide_table_of_contents:!0,api:"eJydVU1v2zgQ/SvCnNqCtpJidw86NQ2C1tjF1us0p9SHsTSW2aVIlqTiGIL+ezGULEt20gVWx9F8vHnzZthAwNJD9ghSByodBmn0LDc6OKMUOVgLMJY6+6KADGpbYKBPymxQLU4xD17qcvnwFQRYdFhRIMd5G9BYEWTj/IsCBEgNGVgMOxBQkM+dtPzvBU9HP2rpqIAsuJoE+HxHFULWQDjYITU5ELA1rsLQmf74Ddp23YWTDx9NceCYaa2um1XnAgK4c9KBHdFaJfMII/3u2bsZl5ZBce0RBat/QBwhmc13yjmhdUxfkOQ5ijRuFHcyYN8Yowg1tGLc93JEYfPrnG0reooHRx+c1CW0/J3TFw3eGu07RO+vri5Z+fLnlIp36buXu/9ylMatqayiyML9f7JQkfdYvoaYMRdkHeUYGPUWlScBz7PcFFSSnvUDnW1McZj16jqf47Sfh/g3KaNokxVZ40KyNC6gSkasJ1L7gDonEEDPgbSXRnci/pcOkP0Sg4AnVPUlFpZgRWFneHlsHdlg1WeQPl2no+ppMxF+CwI8uafjGtVOQQaNdSaY3Kg2S9MG67AzToZDm6KVF213jfZ9drkiTCdZhXEUx3SdBrZYK96eXQjWX6RbHn0FkK4rPhrsCKL3X7cCBkSXovpsfEiYqgR1kcQRvJHbRBMVVLxNzPZsMAPgE66CKjN30ctGp7k0LJo1U5XXXd3HBjaEjtxNzTQ/rvk3L/DqdAjunpH1OlnJ7ri8toTDlg1aZd+tGW/DBP8r0zh2d7NcJIXJ64p0iNX6jcM8blxf6762HMSMVyhZAL6zfLhgQYCSOWlPo/Abi/mOkvfzKxC9gHhUWZru9/s5xr9z48q0D/XpX4vbu7/v72Yc0gpg9XXof59fX3c2a3yoUI/K/I/1mlAznIFAzyG1CmW8hxFw02/LIzxdw2Q8ICCbPhVrATvjAzs3zQY9PTjVtmz+UZNjaaxP8o9CKaTvp99fmTNcww2EN6v+jL5Nzt+nF8H3RtSH0WUA0R+SaYqWN2dHWJAbHZvbrvbsK2c65bh4llpxjLjJc7Jh5Mt3e3J/ugd60z+FlSnYy+GeX1ncQwbf4BujNJGBeCGivQGFuqzj0YauKn8/AY6E4Ls=",sidebar_class_name:"put api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},N=void 0,y={id:"api/service-api/update-global-integration-using-put",title:"Update global Report Portal integration instance",description:"Update global Report Portal integration instance",source:"@site/docs/api/service-api/update-global-integration-using-put.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/update-global-integration-using-put",permalink:"/docs/api/service-api/update-global-integration-using-put",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-global-integration-using-put",title:"Update global Report Portal integration instance",description:"Update global Report Portal integration instance",sidebar_label:"Update global Report Portal integration instance",hide_title:!0,hide_table_of_contents:!0,api:"eJydVU1v2zgQ/SvCnNqCtpJidw86NQ2C1tjF1us0p9SHsTSW2aVIlqTiGIL+ezGULEt20gVWx9F8vHnzZthAwNJD9ghSByodBmn0LDc6OKMUOVgLMJY6+6KADGpbYKBPymxQLU4xD17qcvnwFQRYdFhRIMd5G9BYEWTj/IsCBEgNGVgMOxBQkM+dtPzvBU9HP2rpqIAsuJoE+HxHFULWQDjYITU5ELA1rsLQmf74Ddp23YWTDx9NceCYaa2um1XnAgK4c9KBHdFaJfMII/3u2bsZl5ZBce0RBat/QBwhmc13yjmhdUxfkOQ5ijRuFHcyYN8Yowg1tGLc93JEYfPrnG0reooHRx+c1CW0/J3TFw3eGu07RO+vri5Z+fLnlIp36buXu/9ylMatqayiyML9f7JQkfdYvoaYMRdkHeUYGPUWlScBz7PcFFSSnvUDnW1McZj16jqf47Sfh/g3KaNokxVZ40KyNC6gSkasJ1L7gDonEEDPgbSXRnci/pcOkP0Sg4AnVPUlFpZgRWFneHlsHdlg1WeQPl2no+ppMxF+CwI8uafjGtVOQQaNdSaY3Kg2S9MG67AzToZDm6KVF213jfZ9drkiTCdZhXEUx3SdBrZYK96eXQjWX6RbHn0FkK4rPhrsCKL3X7cCBkSXovpsfEiYqgR1kcQRvJHbRBMVVLxNzPZsMAPgE66CKjN30ctGp7k0LJo1U5XXXd3HBjaEjtxNzTQ/rvk3L/DqdAjunpH1OlnJ7ri8toTDlg1aZd+tGW/DBP8r0zh2d7NcJIXJ64p0iNX6jcM8blxf6762HMSMVyhZAL6zfLhgQYCSOWlPo/Abi/mOkvfzKxC9gHhUWZru9/s5xr9z48q0D/XpX4vbu7/v72Yc0gpg9XXof59fX3c2a3yoUI/K/I/1mlAznIFAzyG1CmW8hxFw02/LIzxdw2Q8ICCbPhVrATvjAzs3zQY9PTjVtmz+UZNjaaxP8o9CKaTvp99fmTNcww2EN6v+jL5Nzt+nF8H3RtSH0WUA0R+SaYqWN2dHWJAbHZvbrvbsK2c65bh4llpxjLjJc7Jh5Mt3e3J/ugd60z+FlSnYy+GeX1ncQwbf4BujNJGBeCGivQGFuqzj0YauKn8/AY6E4Ls=",sidebar_class_name:"put api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Get global Report Portal integration instance",permalink:"/docs/api/service-api/get-global-integration-using-get"},next:{title:"Delete global integration instance",permalink:"/docs/api/service-api/delete-global-integration-using-delete"}},_={},P=[{value:"Request",id:"request",level:2}];function L(e){const a={h2:"h2",p:"p",...(0,n.a)(),...e.components},{Details:i}=a;return i||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"openapi__heading",children:(0,t.jsx)(a.p,{children:"Update global Report Portal integration instance"})}),"\n",(0,t.jsx)(o(),{method:"put",path:"/v1/integration/{integrationId}"}),"\n",(0,t.jsx)(a.p,{children:"Update global Report Portal integration instance"}),"\n",(0,t.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(a.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(m(),{className:"paramsItem",param:{name:"integrationId",in:"path",description:"integrationId",required:!0,schema:{type:"integer",format:"int64"}}})})})]}),"\n",(0,t.jsx)(c(),{className:"openapi-tabs__mime",children:(0,t.jsx)(v.default,{label:"application/json",value:"application/json-schema",children:(0,t.jsxs)(i,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,t.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,t.jsx)(a.p,{children:"Body"})}),(0,t.jsx)("strong",{className:"openapi-schema__required",children:(0,t.jsx)(a.p,{children:"required"})})]}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,t.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,t.jsx)(a.p,{children:"updateRequest"})})}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(j(),{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,t.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,t.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsxs)("span",{className:"openapi-schema__container",children:[(0,t.jsx)("strong",{className:"openapi-schema__property",children:(0,t.jsx)(a.p,{children:"integrationParameters"})}),(0,t.jsx)("span",{className:"openapi-schema__name",children:(0,t.jsx)(a.p,{children:"object"})})]})}),(0,t.jsx)("div",{style:{marginLeft:"1rem"}})]})}),(0,t.jsx)(j(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsx)(l(),{label:void 0,id:void 0,children:(0,t.jsxs)(v.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"OK"})}),(0,t.jsx)("div",{children:(0,t.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(v.default,{label:"*/*",value:"*/*",children:(0,t.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,t.jsx)(j(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,t.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(h(),{responseExample:'{\n  "message": "string"\n}',language:"json"})})]})})})})]})})})})]})}function U(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(L,{...e})}):L(e)}}}]);