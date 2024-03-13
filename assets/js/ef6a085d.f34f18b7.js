"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51028],{51124:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>V,contentTitle:()=>f,default:()=>q,frontMatter:()=>g,metadata:()=>b,toc:()=>y});var i=t(85893),s=t(11151),l=t(58219),r=t.n(l),n=(t(62316),t(51039)),u=t.n(n),c=(t(82723),t(9487)),p=t.n(c),o=t(41429),d=t.n(o),m=t(5397),h=t.n(m),j=(t(4667),t(9472)),v=t.n(j),x=(t(1176),t(12005),t(85162));const g={id:"get-attribute-values-using-get",title:"Get all unique attribute values of project launches",description:"Get all unique attribute values of project launches",sidebar_label:"Get all unique attribute values of project launches",hide_title:!0,hide_table_of_contents:!0,api:"eJydVU1P3DAQ/SvWnAC5Gxapl5y6qhBFVBRB6WW1B28yu3Hr2F57snQV5b9Xk2S/CBRELlHs+Xh+8/xSA6llhHQKRlU2Kz5lzlJwxmCAmQTnMSjSzl7nkMISaUIU9Lwi/KVMhfExaru8uvwJErwKqkTCwNVqsKpESGGhDWEYZZZG6igVJGgLKawqDBuQkGPMgvbc6420gKtKB8whpVChhJgVWCpIa6CN556RgrZLaBr5HAau9uVucPMuDMOc9zT0wf3GjG75q+/iFRWDJsdx7z/ajIOjdzZi5P2L83N+HRf/cQMSeKBoiXfPkjN+DaqqEFRLBmEZX+rGDyP3ATNFjG+hTMTnh7lCEsoYUVm9qlDsaBPrVizCLUR/XtGpDSNIKJEK18ur1REVkEKyHif1ATtN0qUku6pJV5UHgmG91V0VDKTAmeQyZ5o0SWpVUeGCpk2TKK8HM7hH7wLduUDKiK4WSFiroNXcdPRuy3UcL1RlCFIoiHwclLvbxkpAW5V8tzgQZB8/ayTsEA2H9s1FEqwioWwuGJk40QthEXPMT5nDDq94DniPK8fSjUIb5dugkXY8xRlTlVVd32kNc1QBw6Riwqcz3tZ24VoBaDK4o6Zv9QpxWyCTu2uRu6wq0VLrGb34VNaKr78YD5XnJCanVJpnFbuVLwPAEozO0EY8SJ94lRUoLkbnIPtZM6tpkjw9PY1UuztyYZn0qTH5fv318vbh8hOnNBJYKB36z6PxuFvzLlKp7EGbjyn5iJ3dLSL8S4k3Slvu1WKue5VPYT0GCemxC3QVQcKubSvHVuwzCYWLxKl1PVcRH4NpGl7uTIzHmuvIwn3lltZ7R4CT+95wTsX/HPfFg/zBzRtG3UKGFIB98f2gXvXdt2EMc/YYZvsr/XGWjgf1IqCtp9qj9lughwUadoICVY6hRdRFTLIMPR3ksmsz+p1P8v+2af4BHLavdA==",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},f=void 0,b={id:"api/service-api/get-attribute-values-using-get",title:"Get all unique attribute values of project launches",description:"Get all unique attribute values of project launches",source:"@site/docs/api/service-api/get-attribute-values-using-get.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-attribute-values-using-get",permalink:"/docs/api/service-api/get-attribute-values-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-attribute-values-using-get",title:"Get all unique attribute values of project launches",description:"Get all unique attribute values of project launches",sidebar_label:"Get all unique attribute values of project launches",hide_title:!0,hide_table_of_contents:!0,api:"eJydVU1P3DAQ/SvWnAC5Gxapl5y6qhBFVBRB6WW1B28yu3Hr2F57snQV5b9Xk2S/CBRELlHs+Xh+8/xSA6llhHQKRlU2Kz5lzlJwxmCAmQTnMSjSzl7nkMISaUIU9Lwi/KVMhfExaru8uvwJErwKqkTCwNVqsKpESGGhDWEYZZZG6igVJGgLKawqDBuQkGPMgvbc6420gKtKB8whpVChhJgVWCpIa6CN556RgrZLaBr5HAau9uVucPMuDMOc9zT0wf3GjG75q+/iFRWDJsdx7z/ajIOjdzZi5P2L83N+HRf/cQMSeKBoiXfPkjN+DaqqEFRLBmEZX+rGDyP3ATNFjG+hTMTnh7lCEsoYUVm9qlDsaBPrVizCLUR/XtGpDSNIKJEK18ur1REVkEKyHif1ATtN0qUku6pJV5UHgmG91V0VDKTAmeQyZ5o0SWpVUeGCpk2TKK8HM7hH7wLduUDKiK4WSFiroNXcdPRuy3UcL1RlCFIoiHwclLvbxkpAW5V8tzgQZB8/ayTsEA2H9s1FEqwioWwuGJk40QthEXPMT5nDDq94DniPK8fSjUIb5dugkXY8xRlTlVVd32kNc1QBw6Riwqcz3tZ24VoBaDK4o6Zv9QpxWyCTu2uRu6wq0VLrGb34VNaKr78YD5XnJCanVJpnFbuVLwPAEozO0EY8SJ94lRUoLkbnIPtZM6tpkjw9PY1UuztyYZn0qTH5fv318vbh8hOnNBJYKB36z6PxuFvzLlKp7EGbjyn5iJ3dLSL8S4k3Slvu1WKue5VPYT0GCemxC3QVQcKubSvHVuwzCYWLxKl1PVcRH4NpGl7uTIzHmuvIwn3lltZ7R4CT+95wTsX/HPfFg/zBzRtG3UKGFIB98f2gXvXdt2EMc/YYZvsr/XGWjgf1IqCtp9qj9lughwUadoICVY6hRdRFTLIMPR3ksmsz+p1P8v+2af4BHLavdA==",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Get all unique attribute keys of project launches",permalink:"/docs/api/service-api/get-attribute-keys-using-get"},next:{title:"Create launch clusters",permalink:"/docs/api/service-api/create-clusters-using-post"}},V={},y=[{value:"Request",id:"request",level:2}];function K(e){const a={h2:"h2",p:"p",...(0,s.a)(),...e.components},{Details:t}=a;return t||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(a.p,{children:"Get all unique attribute values of project launches"})}),"\n",(0,i.jsx)(u(),{method:"get",path:"/v1/{projectName}/launch/attribute/values"}),"\n",(0,i.jsx)(a.p,{children:"Get all unique attribute values of project launches"}),"\n",(0,i.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(t,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(a.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(d(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsxs)(t,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(a.p,{children:"Query Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(d(),{className:"paramsItem",param:{name:"filter.cnt.attributeValue",in:"query",description:"filter.cnt.attributeValue",required:!0,schema:{type:"string"}}}),(0,i.jsx)(d(),{className:"paramsItem",param:{name:"filter.eq.attributeKey",in:"query",description:"filter.eq.attributeKey",schema:{type:"string"}}})]})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(r(),{label:void 0,id:void 0,children:(0,i.jsxs)(x.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(x.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(v(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(x.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(t,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(a.p,{children:"Array ["})})}),(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"},children:(0,i.jsx)(a.p,{children:"string"})}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(a.p,{children:"]"})})})]})]})}),(0,i.jsx)(x.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(h(),{responseExample:'[\n  "string"\n]',language:"json"})})]})})})})]})})})})]})}function q(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(K,{...e})}):K(e)}}}]);