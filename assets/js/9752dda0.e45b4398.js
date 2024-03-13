"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80289],{92621:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>k,default:()=>b,frontMatter:()=>f,metadata:()=>v,toc:()=>N});var i=s(85893),a=s(11151),n=s(58219),r=s.n(n),c=(s(62316),s(51039)),d=s.n(c),l=(s(82723),s(9487)),o=s.n(l),p=s(41429),m=s.n(p),h=s(5397),u=s.n(h),x=(s(4667),s(9472)),j=s.n(x),g=(s(1176),s(12005),s(85162));const f={id:"get-ticket-ids-using-get",title:"Get tickets that contains a term as a part inside for specified launch",description:"Get tickets that contains a term as a part inside for specified launch",sidebar_label:"Get tickets that contains a term as a part inside for specified launch",hide_title:!0,hide_table_of_contents:!0,api:"eJytVU1P20AQ/SurORW0xIDaHnwqqhBFrSji44RyGOxJvMXeXXbHoZHl/16N7SQOAVqh5uJ49828N59ugHEeIb0DpsgHhqk6yJzl4MqSAkw1OE8B2Th7nkMKc+Ibkz0Qn+fxNho7Pzu9AQ0eA1bEFMRVAxYrghRKrG1WgAZjIYXHmsISNOQUs2C8uBxjAj3WJlAOKYeaNMSsoAohbYCXXrwZyzSnABpmLlTI/dHnj9C2ek3pg/tFGV/I28DrkYsd2m3cX7kjB2PnW0xMoXo7tAHx786nAo7e2UhR7o8PD+Wx7fXnd9AgJSLLcruf7MtjxyuGgKJJShpfYpOfSPaBMmTRN8My0vMozogVdyWPigtkJdxobFSoJEKF8s9jYGVsNDmpmQsqesrMzFCu1gWuiAs39FDXMlxACsniKGlG1WgTEZz0jInJI2iIFBar1qpDCSmIBbvMlW2aJA3WXLhgeNkm6M1OHa7Iu8CXLjCWqvcFGhYYDN6XfaZX7vp0z7Aupb0KZh933F2usBrI1pXMjgBBD/hpq2GtaLd+31xkJT2k0OZKlKkPZqYsUU75nnIz1etVzwVvdOVUuUnoUL4DTYyTgk4lVVnd8941cE8YKJzUkui76fj6WrqlD30MWjfJEFDXVPLeg6T/wdiZ65CGS1pnd1D7Su5XsZxcnqvcZXVFlrudMrQyZl0rD5N1XXsxkvxWaKTcsT/5shOzhtJkZCONzE88ZgWp48kh6KFdJJw0SZ6enibY3U5cmCeDaUx+nH89vbg+PRCTVoP0Wq/+0+TocHIkZ95FrtCOaP7bXGwlbF0Bpt+c+BKNFfoujGaYmTtYHIGG9NmuY5Jt00uS9zzK+i5cZDFpmnuMdBvKtpXjfmNJk+Qmyhi8Mv7NZtXAh6thk+1txL+o9oGW482+wLIWEMj2fBfdsEnfIBsQG6rpZsLfH+Z2hl+kX21buxzTr2SNHbSyGArCnEKnqEecZBl5HtnKPhf163UpX9i2/QNjsKAu",sidebar_class_name:"get api-method",info_path:"api/service-api/5.10/report-portal",custom_edit_url:null},k=void 0,v={id:"api/service-api/5.10/get-ticket-ids-using-get",title:"Get tickets that contains a term as a part inside for specified launch",description:"Get tickets that contains a term as a part inside for specified launch",source:"@site/docs/api/service-api/5.10/get-ticket-ids-using-get.api.mdx",sourceDirName:"api/service-api/5.10",slug:"/api/service-api/5.10/get-ticket-ids-using-get",permalink:"/docs/api/service-api/5.10/get-ticket-ids-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-ticket-ids-using-get",title:"Get tickets that contains a term as a part inside for specified launch",description:"Get tickets that contains a term as a part inside for specified launch",sidebar_label:"Get tickets that contains a term as a part inside for specified launch",hide_title:!0,hide_table_of_contents:!0,api:"eJytVU1P20AQ/SurORW0xIDaHnwqqhBFrSji44RyGOxJvMXeXXbHoZHl/16N7SQOAVqh5uJ49828N59ugHEeIb0DpsgHhqk6yJzl4MqSAkw1OE8B2Th7nkMKc+Ibkz0Qn+fxNho7Pzu9AQ0eA1bEFMRVAxYrghRKrG1WgAZjIYXHmsISNOQUs2C8uBxjAj3WJlAOKYeaNMSsoAohbYCXXrwZyzSnABpmLlTI/dHnj9C2ek3pg/tFGV/I28DrkYsd2m3cX7kjB2PnW0xMoXo7tAHx786nAo7e2UhR7o8PD+Wx7fXnd9AgJSLLcruf7MtjxyuGgKJJShpfYpOfSPaBMmTRN8My0vMozogVdyWPigtkJdxobFSoJEKF8s9jYGVsNDmpmQsqesrMzFCu1gWuiAs39FDXMlxACsniKGlG1WgTEZz0jInJI2iIFBar1qpDCSmIBbvMlW2aJA3WXLhgeNkm6M1OHa7Iu8CXLjCWqvcFGhYYDN6XfaZX7vp0z7Aupb0KZh933F2usBrI1pXMjgBBD/hpq2GtaLd+31xkJT2k0OZKlKkPZqYsUU75nnIz1etVzwVvdOVUuUnoUL4DTYyTgk4lVVnd8941cE8YKJzUkui76fj6WrqlD30MWjfJEFDXVPLeg6T/wdiZ65CGS1pnd1D7Su5XsZxcnqvcZXVFlrudMrQyZl0rD5N1XXsxkvxWaKTcsT/5shOzhtJkZCONzE88ZgWp48kh6KFdJJw0SZ6enibY3U5cmCeDaUx+nH89vbg+PRCTVoP0Wq/+0+TocHIkZ95FrtCOaP7bXGwlbF0Bpt+c+BKNFfoujGaYmTtYHIGG9NmuY5Jt00uS9zzK+i5cZDFpmnuMdBvKtpXjfmNJk+Qmyhi8Mv7NZtXAh6thk+1txL+o9oGW482+wLIWEMj2fBfdsEnfIBsQG6rpZsLfH+Z2hl+kX21buxzTr2SNHbSyGArCnEKnqEecZBl5HtnKPhf163UpX9i2/QNjsKAu",sidebar_class_name:"get api-method",info_path:"api/service-api/5.10/report-portal",custom_edit_url:null},sidebar:"service-api-5.10",previous:{title:"Search suggested items in analyzer for provided one",permalink:"/docs/api/service-api/5.10/get-suggested-items-using-get"},next:{title:"Get tickets that contains a term as a part inside for specified launch",permalink:"/docs/api/service-api/5.10/get-ticket-ids-for-project-using-get"}},y={},N=[{value:"Request",id:"request",level:2}];function X(e){const t={h2:"h2",p:"p",...(0,a.a)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(t.p,{children:"Get tickets that contains a term as a part inside for specified launch"})}),"\n",(0,i.jsx)(d(),{method:"get",path:"/v1/{projectName}/item/ticket/ids"}),"\n",(0,i.jsx)(t.p,{children:"Get tickets that contains a term as a part inside for specified launch"}),"\n",(0,i.jsx)(t.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(t.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(t.p,{children:"Query Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(m(),{className:"paramsItem",param:{name:"launch",in:"query",description:"launch",required:!0,schema:{type:"integer",format:"int64"}}}),(0,i.jsx)(m(),{className:"paramsItem",param:{name:"term",in:"query",description:"term",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(r(),{label:void 0,id:void 0,children:(0,i.jsxs)(g.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(t.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(g.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(t.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(t.p,{children:"Array ["})})}),(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"},children:(0,i.jsx)(t.p,{children:"string"})}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(t.p,{children:"]"})})})]})]})}),(0,i.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'[\n  "string"\n]',language:"json"})})]})})})})]})})})})]})}function b(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(X,{...e})}):X(e)}}}]);