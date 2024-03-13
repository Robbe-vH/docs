"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28242],{47357:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>b,contentTitle:()=>f,default:()=>k,frontMatter:()=>g,metadata:()=>v,toc:()=>T});var r=a(85893),i=a(11151),t=a(58219),n=a.n(t),l=(a(62316),a(51039)),o=a.n(l),d=(a(82723),a(9487)),p=a.n(d),c=(a(41429),a(5397)),m=a.n(c),h=a(4667),u=a.n(h),E=a(9472),x=a.n(E),j=(a(1176),a(12005),a(85162));const g={id:"restore-password-using-post",title:"Create a restore password request (DEPRECATED)",description:"Create a restore password request (DEPRECATED)",sidebar_label:"Create a restore password request (DEPRECATED)",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVU1v2zAM/SsGT2shx02BXXxalgZYsWHNkvaU5qDYTKxOllRJzgcM//eBlt0ky7phPgkSPx7J9+gaPN84SBeQo7GYcY95XDm0caaVt1pKtLBkoA1a7oVW9zmkYNF5bXHKndtpmz85oTbTh/kjMLD4WqHzn3V+gLSGHF1mhSFP8nsFBhQYladXbowUWRs3eXFkUoPLCiw5nbzwEiGF2Xm22Y8ujbCYE3IsuZAE0h8M2evVC2YeGBhLsL1AR+GCGcUNZs5boTbQ0Hca0NsK2wtntHLB9/bm5rKah6/n1Vwn138u4KFv3liXRiKdZnP4F94SneMbfAcxYT6ODNI1lw4Z7ONM57hBFXeDiFc6P8SKl9j3/7yIsUXuMeJRN9PIdG2OugDRh7vJdDYZjx4nd1fAAPcelRNaEWtq+IkHSP+alsGWy6pL3ywZlOgLTTQy2rVlc19ACsl2mBDzkh5B0kECBg7tFm3IWFkJKdTGaq8zLZs0SWpe+UJb4Q9Nwo24KHKGRls/1dZzGYVYLSwr+EqGbvfhwpjXvJIeUii8N+4i3LS3ZYCqKomDZAiss182DN4QXfLmi3Y+otZEXOURIYs+iHWkEHPMryK9jgLe6HfAR1w5lnpgWyvTGg2EJl4sqVVZFfIualght2hHFTV4saRnktnsqNHJnhMlT/TxxjIGQq31uRBPYL3T5B70aHof5TqrSlS+5X6nFZ61WukIOa8MOVEj++zh5tNFcQykyFA5PHEfGZ4VGN0OboB1vKAJpEmy2+0GvH0daLtJOleXfLsfT77PJzG5NAyIVAH9x8FwGO6IlSVXJ2n+WyNnjXmTr8e9T4zkQlGaFm7dkX8B2yGV4No59+HbPRcksGRQkFrSBdT1ijt8srJp6Pq1QkvDXh4J3c6aQYE8R3ui0nHYVfEj4TnK8mILN6z3GGUZGn9iSzvuTMPd2l91+77Ueat0viPwfAcpPMMzAP1BfFgadbivQXK1qdoNByEtfb8ALr1EfQ==",sidebar_class_name:"post api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},f=void 0,v={id:"api/service-api/restore-password-using-post",title:"Create a restore password request (DEPRECATED)",description:"Create a restore password request (DEPRECATED)",source:"@site/docs/api/service-api/restore-password-using-post.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/restore-password-using-post",permalink:"/docs/api/service-api/restore-password-using-post",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"restore-password-using-post",title:"Create a restore password request (DEPRECATED)",description:"Create a restore password request (DEPRECATED)",sidebar_label:"Create a restore password request (DEPRECATED)",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVU1v2zAM/SsGT2shx02BXXxalgZYsWHNkvaU5qDYTKxOllRJzgcM//eBlt0ky7phPgkSPx7J9+gaPN84SBeQo7GYcY95XDm0caaVt1pKtLBkoA1a7oVW9zmkYNF5bXHKndtpmz85oTbTh/kjMLD4WqHzn3V+gLSGHF1mhSFP8nsFBhQYladXbowUWRs3eXFkUoPLCiw5nbzwEiGF2Xm22Y8ujbCYE3IsuZAE0h8M2evVC2YeGBhLsL1AR+GCGcUNZs5boTbQ0Hca0NsK2wtntHLB9/bm5rKah6/n1Vwn138u4KFv3liXRiKdZnP4F94SneMbfAcxYT6ODNI1lw4Z7ONM57hBFXeDiFc6P8SKl9j3/7yIsUXuMeJRN9PIdG2OugDRh7vJdDYZjx4nd1fAAPcelRNaEWtq+IkHSP+alsGWy6pL3ywZlOgLTTQy2rVlc19ACsl2mBDzkh5B0kECBg7tFm3IWFkJKdTGaq8zLZs0SWpe+UJb4Q9Nwo24KHKGRls/1dZzGYVYLSwr+EqGbvfhwpjXvJIeUii8N+4i3LS3ZYCqKomDZAiss182DN4QXfLmi3Y+otZEXOURIYs+iHWkEHPMryK9jgLe6HfAR1w5lnpgWyvTGg2EJl4sqVVZFfIualght2hHFTV4saRnktnsqNHJnhMlT/TxxjIGQq31uRBPYL3T5B70aHof5TqrSlS+5X6nFZ61WukIOa8MOVEj++zh5tNFcQykyFA5PHEfGZ4VGN0OboB1vKAJpEmy2+0GvH0daLtJOleXfLsfT77PJzG5NAyIVAH9x8FwGO6IlSVXJ2n+WyNnjXmTr8e9T4zkQlGaFm7dkX8B2yGV4No59+HbPRcksGRQkFrSBdT1ijt8srJp6Pq1QkvDXh4J3c6aQYE8R3ui0nHYVfEj4TnK8mILN6z3GGUZGn9iSzvuTMPd2l91+77Ueat0viPwfAcpPMMzAP1BfFgadbivQXK1qdoNByEtfb8ALr1EfQ==",sidebar_class_name:"post api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Check if a restore password bid exists (DEPRECATED)",permalink:"/docs/api/service-api/is-restore-password-bid-exist-using-get"},next:{title:"Get user's registration info (DEPRECATED)",permalink:"/docs/api/service-api/get-user-bid-info-using-get"}},b={},T=[{value:"Request",id:"request",level:2}];function w(e){const s={h2:"h2",p:"p",...(0,i.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:"openapi__heading",children:(0,r.jsx)(s.p,{children:"Create a restore password request (DEPRECATED)"})}),"\n",(0,r.jsx)(o(),{method:"post",path:"/v1/user/password/restore"}),"\n",(0,r.jsx)(s.p,{children:"Create a restore password request (DEPRECATED)"}),"\n",(0,r.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,r.jsx)(p(),{className:"openapi-tabs__mime",children:(0,r.jsx)(j.default,{label:"application/json",value:"application/json-schema",children:(0,r.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,r.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,r.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,r.jsx)(s.p,{children:"Body"})}),(0,r.jsx)("strong",{className:"openapi-schema__required",children:(0,r.jsx)(s.p,{children:"required"})})]}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,r.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,r.jsx)(s.p,{children:"rq"})})}),(0,r.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,r.jsx)(u(),{collapsible:!1,name:"email",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})})}),"\n",(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsx)(n(),{label:void 0,id:void 0,children:(0,r.jsxs)(j.default,{label:"200",value:"200",children:[(0,r.jsx)("div",{children:(0,r.jsx)(s.p,{children:"OK"})}),(0,r.jsx)("div",{children:(0,r.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,r.jsx)(j.default,{label:"*/*",value:"*/*",children:(0,r.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,r.jsx)(j.default,{label:"Schema",value:"Schema",children:(0,r.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,r.jsx)("strong",{children:(0,r.jsx)(s.p,{children:"Schema"})})}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,r.jsx)(u(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,r.jsx)(j.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,r.jsx)(m(),{responseExample:'{\n  "message": "string"\n}',language:"json"})})]})})})})]})})})})]})}function k(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(w,{...e})}):w(e)}}}]);