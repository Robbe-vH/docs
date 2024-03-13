"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[48979],{1835:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>q,frontMatter:()=>v,metadata:()=>y,toc:()=>W});var a=i(85893),s=i(11151),r=i(58219),n=i.n(r),l=(i(62316),i(51039)),o=i.n(l),d=(i(82723),i(9487)),p=i.n(d),c=i(41429),m=i.n(c),u=i(5397),h=i.n(u),j=(i(4667),i(9472)),x=i.n(j),f=(i(1176),i(12005),i(85162));const v={id:"get-attribute-values-using-get-2",title:"Get all unique attribute values of step items under specified project",description:"Get all unique attribute values of step items under specified project",sidebar_label:"Get all unique attribute values of step items under specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJytVctu2zAQ/BViT03ASHGAXnSqUQRpkCIN8ujFMApaWltsJZImV04NQf9erCS/k8Z96CKA3N0Zzg6XNZCaBUhGQBjoTBOWZ6k15G1RoIexBOvQK9LWXGeQwAxpSOT1pCL8qooKw1PQZnZ1+fjtAiQ45VWJhJ5L1mBUiZDAVBeEPkoNRWonGSRoAwnMK/RLkJBhSL12jPZGmsd5pT1mkJCvUEJIcywVJDXQ0jFmIK/NDJpG7tPA+abcDS6P4nCY82eA7cKRQH3sMQDO2++Y0u1WdacoPyi+G3e8dmMODs6agIH3L87P+bdb/MsNSGDPoCHePY1P+XdQVXmvWrUJy/ASGn/M3HlMFTG/qSoC7h/mCkmoohCV0fMKxbovYtH6UdipCIROtDiiMhl6ERymeqoxE70UIKFEym3v6da6lEMC8WIQ11t6NTHXiblivIaKOyjuEvrFyu2VLyABTiab2qJJ4rhWFeXWa1o2sXL6oDH36KynO+tJFaKrBRIWyms1KTrNV+U64aeqKggSyIlcOCh3t4qVgKYq+VpzIMg+ftxIWDM67OQnG0iwtYQymWBm4p2eCoOYYXbCwnZ8xT7hDa8MSxv5Nsq1QZG23NoxS5VWHe6ohgkqj35YseajMW9rM7WtKzQVuJamh3pFuBWR4d21yGxalWionVW9I1XaOrK/LQ+V4yQWp1SaexW6lQ8HhCUUOkUTcCt96FSao7iIzkH2vWZVkzh+fn6OVLsbWT+L+9QQf77+eHn7cHnGKY0ENkrH/n00GHRrzgYqldmC+V/23tFrfdkIf1LsCqUNo7enqHvrj2AxAAnJ3lAhLNnnhGyjNZvWpe0dGEvIbSDOr+uJCvjki6bh5W7QcbczHdjPr9zoejM94N19P5xOxO/G/4un+YHLN16NljIkADxDjyf16iPwNo3DnH/m0L8PR2H3sRvM8Wa6/H1ndh3yIpHVzDc7R14R3C7Q8FDKUWXoW0ZdxDBN0dFWLr8qzH49ta8uH6FpfgGmtAmm",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},g=void 0,y={id:"api/service-api/get-attribute-values-using-get-2",title:"Get all unique attribute values of step items under specified project",description:"Get all unique attribute values of step items under specified project",source:"@site/docs/api/service-api/get-attribute-values-using-get-2.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-attribute-values-using-get-2",permalink:"/docs/api/service-api/get-attribute-values-using-get-2",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-attribute-values-using-get-2",title:"Get all unique attribute values of step items under specified project",description:"Get all unique attribute values of step items under specified project",sidebar_label:"Get all unique attribute values of step items under specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJytVctu2zAQ/BViT03ASHGAXnSqUQRpkCIN8ujFMApaWltsJZImV04NQf9erCS/k8Z96CKA3N0Zzg6XNZCaBUhGQBjoTBOWZ6k15G1RoIexBOvQK9LWXGeQwAxpSOT1pCL8qooKw1PQZnZ1+fjtAiQ45VWJhJ5L1mBUiZDAVBeEPkoNRWonGSRoAwnMK/RLkJBhSL12jPZGmsd5pT1mkJCvUEJIcywVJDXQ0jFmIK/NDJpG7tPA+abcDS6P4nCY82eA7cKRQH3sMQDO2++Y0u1WdacoPyi+G3e8dmMODs6agIH3L87P+bdb/MsNSGDPoCHePY1P+XdQVXmvWrUJy/ASGn/M3HlMFTG/qSoC7h/mCkmoohCV0fMKxbovYtH6UdipCIROtDiiMhl6ERymeqoxE70UIKFEym3v6da6lEMC8WIQ11t6NTHXiblivIaKOyjuEvrFyu2VLyABTiab2qJJ4rhWFeXWa1o2sXL6oDH36KynO+tJFaKrBRIWyms1KTrNV+U64aeqKggSyIlcOCh3t4qVgKYq+VpzIMg+ftxIWDM67OQnG0iwtYQymWBm4p2eCoOYYXbCwnZ8xT7hDa8MSxv5Nsq1QZG23NoxS5VWHe6ohgkqj35YseajMW9rM7WtKzQVuJamh3pFuBWR4d21yGxalWionVW9I1XaOrK/LQ+V4yQWp1SaexW6lQ8HhCUUOkUTcCt96FSao7iIzkH2vWZVkzh+fn6OVLsbWT+L+9QQf77+eHn7cHnGKY0ENkrH/n00GHRrzgYqldmC+V/23tFrfdkIf1LsCqUNo7enqHvrj2AxAAnJ3lAhLNnnhGyjNZvWpe0dGEvIbSDOr+uJCvjki6bh5W7QcbczHdjPr9zoejM94N19P5xOxO/G/4un+YHLN16NljIkADxDjyf16iPwNo3DnH/m0L8PR2H3sRvM8Wa6/H1ndh3yIpHVzDc7R14R3C7Q8FDKUWXoW0ZdxDBN0dFWLr8qzH49ta8uH6FpfgGmtAmm",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Get all unique attribute keys of step items under specified project",permalink:"/docs/api/service-api/get-attribute-keys-using-get-2"},next:{title:"Handle user choice from suggested items",permalink:"/docs/api/service-api/handle-suggest-choose-using-put"}},b={},W=[{value:"Request",id:"request",level:2}];function N(e){const t={h2:"h2",p:"p",...(0,s.a)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"openapi__heading",children:(0,a.jsx)(t.p,{children:"Get all unique attribute values of step items under specified project"})}),"\n",(0,a.jsx)(o(),{method:"get",path:"/v1/{projectName}/item/step/attribute/values"}),"\n",(0,a.jsx)(t.p,{children:"Get all unique attribute values of step items under specified project"}),"\n",(0,a.jsx)(t.h2,{id:"request",children:"Request"}),"\n",(0,a.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(t.p,{children:"Path Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:(0,a.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,a.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(t.p,{children:"Query Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)(m(),{className:"paramsItem",param:{name:"filter.cnt.attributeValue",in:"query",description:"filter.cnt.attributeValue",required:!0,schema:{type:"string"}}}),(0,a.jsx)(m(),{className:"paramsItem",param:{name:"filter.eq.attributeKey",in:"query",description:"filter.eq.attributeKey",schema:{type:"string"}}}),(0,a.jsx)(m(),{className:"paramsItem",param:{name:"filter.eq.name",in:"query",description:"filter.eq.name",schema:{type:"string"}}})]})})]}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsx)(n(),{label:void 0,id:void 0,children:(0,a.jsxs)(f.default,{label:"200",value:"200",children:[(0,a.jsx)("div",{children:(0,a.jsx)(t.p,{children:"OK"})}),(0,a.jsx)("div",{children:(0,a.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(f.default,{label:"*/*",value:"*/*",children:(0,a.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(t.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,a.jsx)(t.p,{children:"Array ["})})}),(0,a.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"},children:(0,a.jsx)(t.p,{children:"string"})}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,a.jsx)(t.p,{children:"]"})})})]})]})}),(0,a.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(h(),{responseExample:'[\n  "string"\n]',language:"json"})})]})})})})]})})})})]})}function q(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(N,{...e})}):N(e)}}}]);