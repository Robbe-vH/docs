"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[59873],{62190:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>b,contentTitle:()=>E,default:()=>N,frontMatter:()=>v,metadata:()=>D,toc:()=>A});var a=i(85893),t=i(11151),r=i(58219),n=i.n(r),l=(i(62316),i(51039)),p=i.n(l),d=(i(82723),i(9487)),c=i.n(d),o=i(41429),m=i.n(o),u=i(5397),h=i.n(u),y=i(4667),g=i.n(y),x=i(9472),f=i.n(x),j=(i(1176),i(12005),i(85162));const v={id:"get-users-api-keys-using-get",title:"Get List of users Api Keys (DEPRECATED)",description:"Get List of users Api Keys (DEPRECATED)",sidebar_label:"Get List of users Api Keys (DEPRECATED)",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVU1v00AQ/SvWXGjRJm4RcPCJCCJa8VX140IUVVvvJF6wd5fZcYtl+b+jsZ00ISBKLkl2Z+Y9v3kzboH1OkK2AIOBMNeMZlJHpEnuHZMvSyRYKvABSbP17txABmvkm4gUZ8F+wCbeROvW7+fXoCBo0hUyktRswekKIQMpeG5AgXWQQdBcgAKDMScbpOhuCOGP2hIayJhqVBDzAisNWQvcBClmHeMaCRSsPFWah6PXL6HrlpIeg3cRo2S8ODmRr32kLx9AgTwdOpbb5+lz+drBsVwK0Ph0l1d7rBZgGasoooyE/N03zFkenkQmtgP4EPbIWxPpRjTYnu/hHMKIGr2Aqlfn1pp/g+pgb79jswMbmaxbQ6cgJ5T23mo+vFaAP3UVej5N0zSTT58mxjy7fnZ2llVVFuNXqWDNk/qgoNSRb+v4X2CSN/jlD9w3AjzJBpuP2jE1ZCtdRvzddu+Rk482cuJXiWDEZBZsIm1Pjt7NLy7nb2fX83fHoKBCLvxo/t7oXEAG6f1pKnlpOxi4S3Wwk+/YRFAQke43k1BTCRm0gTz73JddlqatrrnwZLnpsw5G4hKDJ77wxLpMhlqg4F6T1Xfl0O5NucHlK12XokPBHOJBuYtNrAJ0dSUWk0BQY/yyU7BldDg2Zz5yIv1JtDOJMEuO7CpxiAbNseg38E1+J/zIy2Dlp9RHhT5oar20aylS5fWAu2jhDjUhzWpReLGUa+tWfndk9qD+ItyGyOziPDE+ryt03K+wcfx13ltzXFFXdZAkEafSVnoVh5M3B4QVlDZHF3EnfRZ0XmDyYnoi09r3WlTN0vTh4WGq+9upp3U6psb04/nb+eer+URSOgVilIH9q+np6XAWfORKux2Yp9t1T5Ht0DD+5DSU2rp+qKg3zmDlBdyfjpsGFGTbfbz181JB4SNLZNve6Yg3VHadHP+okaRzy0d39n00Nsrvv8xe+7iE4ehyXHzHyRb4j5Q3u9Q1/SiUtfwDBf3O27xEOrFygdog9TyGy1meY+CdNFn8Yq7tZMsrrOt+AW+cZFc=",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},E=void 0,D={id:"api/service-api/get-users-api-keys-using-get",title:"Get List of users Api Keys (DEPRECATED)",description:"Get List of users Api Keys (DEPRECATED)",source:"@site/docs/api/service-api/get-users-api-keys-using-get.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-users-api-keys-using-get",permalink:"/docs/api/service-api/get-users-api-keys-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-users-api-keys-using-get",title:"Get List of users Api Keys (DEPRECATED)",description:"Get List of users Api Keys (DEPRECATED)",sidebar_label:"Get List of users Api Keys (DEPRECATED)",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVU1v00AQ/SvWXGjRJm4RcPCJCCJa8VX140IUVVvvJF6wd5fZcYtl+b+jsZ00ISBKLkl2Z+Y9v3kzboH1OkK2AIOBMNeMZlJHpEnuHZMvSyRYKvABSbP17txABmvkm4gUZ8F+wCbeROvW7+fXoCBo0hUyktRswekKIQMpeG5AgXWQQdBcgAKDMScbpOhuCOGP2hIayJhqVBDzAisNWQvcBClmHeMaCRSsPFWah6PXL6HrlpIeg3cRo2S8ODmRr32kLx9AgTwdOpbb5+lz+drBsVwK0Ph0l1d7rBZgGasoooyE/N03zFkenkQmtgP4EPbIWxPpRjTYnu/hHMKIGr2Aqlfn1pp/g+pgb79jswMbmaxbQ6cgJ5T23mo+vFaAP3UVej5N0zSTT58mxjy7fnZ2llVVFuNXqWDNk/qgoNSRb+v4X2CSN/jlD9w3AjzJBpuP2jE1ZCtdRvzddu+Rk482cuJXiWDEZBZsIm1Pjt7NLy7nb2fX83fHoKBCLvxo/t7oXEAG6f1pKnlpOxi4S3Wwk+/YRFAQke43k1BTCRm0gTz73JddlqatrrnwZLnpsw5G4hKDJ77wxLpMhlqg4F6T1Xfl0O5NucHlK12XokPBHOJBuYtNrAJ0dSUWk0BQY/yyU7BldDg2Zz5yIv1JtDOJMEuO7CpxiAbNseg38E1+J/zIy2Dlp9RHhT5oar20aylS5fWAu2jhDjUhzWpReLGUa+tWfndk9qD+ItyGyOziPDE+ryt03K+wcfx13ltzXFFXdZAkEafSVnoVh5M3B4QVlDZHF3EnfRZ0XmDyYnoi09r3WlTN0vTh4WGq+9upp3U6psb04/nb+eer+URSOgVilIH9q+np6XAWfORKux2Yp9t1T5Ht0DD+5DSU2rp+qKg3zmDlBdyfjpsGFGTbfbz181JB4SNLZNve6Yg3VHadHP+okaRzy0d39n00Nsrvv8xe+7iE4ehyXHzHyRb4j5Q3u9Q1/SiUtfwDBf3O27xEOrFygdog9TyGy1meY+CdNFn8Yq7tZMsrrOt+AW+cZFc=",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Edit specified user (DEPRECATED)",permalink:"/docs/api/service-api/edit-user-using-put"},next:{title:"Create new Api Key for current user (DEPRECATED)",permalink:"/docs/api/service-api/create-api-key-using-post"}},b={},A=[{value:"Request",id:"request",level:2}];function k(e){const s={h2:"h2",p:"p",...(0,t.a)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"openapi__heading",children:(0,a.jsx)(s.p,{children:"Get List of users Api Keys (DEPRECATED)"})}),"\n",(0,a.jsx)(p(),{method:"get",path:"/v1/user/{userId}/api-keys"}),"\n",(0,a.jsx)(s.p,{children:"Get List of users Api Keys (DEPRECATED)"}),"\n",(0,a.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,a.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(s.p,{children:"Path Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:(0,a.jsx)(m(),{className:"paramsItem",param:{name:"userId",in:"path",description:"userId",required:!0,schema:{type:"integer",format:"int64"}}})})})]}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsx)(n(),{label:void 0,id:void 0,children:(0,a.jsxs)(j.default,{label:"200",value:"200",children:[(0,a.jsx)("div",{children:(0,a.jsx)(s.p,{children:"OK"})}),(0,a.jsx)("div",{children:(0,a.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(j.default,{label:"*/*",value:"*/*",children:(0,a.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(j.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,a.jsx)(g(),{collapsible:!0,className:"schemaItem",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsxs)("span",{className:"openapi-schema__container",children:[(0,a.jsx)("strong",{className:"openapi-schema__property",children:(0,a.jsx)(s.p,{children:"items"})}),(0,a.jsx)("span",{className:"openapi-schema__name",children:(0,a.jsx)(s.p,{children:"object[]"})}),(0,a.jsx)("span",{className:"openapi-schema__divider"}),(0,a.jsx)("span",{className:"openapi-schema__required",children:(0,a.jsx)(s.p,{children:"required"})})]})}),(0,a.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,a.jsx)(s.p,{children:"Array ["})})}),(0,a.jsx)(g(),{collapsible:!1,name:"api_key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(g(),{collapsible:!1,name:"created_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"yyyy-MM-dd'T'HH:mm:ssZ"}}),(0,a.jsx)(g(),{collapsible:!1,name:"id",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,a.jsx)(g(),{collapsible:!1,name:"last_used_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"yyyy-MM-dd"}}),(0,a.jsx)(g(),{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(g(),{collapsible:!1,name:"user_id",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,a.jsx)(s.p,{children:"]"})})})]})]})})})]})}),(0,a.jsx)(j.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(h(),{responseExample:'{\n  "items": [\n    {\n      "api_key": "string",\n      "created_at": "yyyy-MM-dd\'T\'HH:mm:ssZ",\n      "id": 0,\n      "last_used_at": "yyyy-MM-dd",\n      "name": "string",\n      "user_id": 0\n    }\n  ]\n}',language:"json"})})]})})})})]})})})})]})}function N(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(k,{...e})}):k(e)}}}]);