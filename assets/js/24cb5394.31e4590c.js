"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37354],{56486:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>N,contentTitle:()=>v,default:()=>S,frontMatter:()=>b,metadata:()=>q,toc:()=>z});var i=s(85893),r=s(11151),t=s(58219),l=s.n(t),n=(s(62316),s(51039)),c=s.n(n),p=(s(82723),s(9487)),o=s.n(p),d=s(41429),m=s.n(d),h=s(5397),u=s.n(h),j=s(4667),g=s.n(j),f=s(9472),x=s.n(f),y=(s(1176),s(12005),s(85162));const b={id:"start-launch-using-post-1",title:"Starts launch for specified project",description:"Starts launch for specified project",sidebar_label:"Starts launch for specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVsFu2zgQ/RVhTm1BW7GTLrA61U28uwaCNk3iy7rGgpbGNrsSqZJUHEPQvy+GpGzZVtvNKaaGM48z7z2yBss3BpIF5LyS6XaQKmm1ynPUsGSgStTcCiVnGSRgLNf23sXNjZCbh89Pz/+MgEHJNS/QoqZMNUheICRQavUNU/uJfjEQkpa43QKDDE2qRUmJL+I0fq+ExgwSqytkYNItFhySGuy+RIdCC7mBpln6YDT2o8r2FHGa94ngRv5cUYiMVhTKgI6J0tImXpa5SN0p42+GdtbdosLm2CbzZ3/8cgJz4c/LfHueRYHUuQBWreho1CJNvbQCjatprRaryvpfIZZrzQmbsFiYbu2ZxWJy2OHK/zz9v7jvaRgDszcWi86nlVI5cgkM8JUXJVVb89xgw+CF5xX2tb1pzgbYU6hQWc9eBiirgjp2N/1jMr9/BgZ304/zP2HZsMCanmQadSV7QLefPq/7Sp1yYT6f3UVqHWVoaGotK6yKfPamO76ebGulC24hgYxbHFiKanwrTvnqFkyppPGTGF+NLol5q5FbzE5p+C5+92vmPf1y9CLr7aGsihXqzichLW5Qd48mpP3txh/Lz7jUmDqgnhQMXgepynCDchDkNCA5DYLezZlEetRo2savlY5MialYC8yi4ACOhhalEUp6J3FE/mnZA1HPypM7FGi3ioyrVMZ1itwngfhlFNcd02liD4okjPqldbFK55AABVqVqrxJ4rjmld0qLey+iXkpLs74iKXS9kFpy/PI53IAteCr3M+nTedZseZVTq3fWluai3QPbexROBQILMSTag6ILmn2lzI2oiZFXGYRIYveiHUkETPM3pIaPN7oHPARV4aFGmoXVbqgoVDEkCW1Kq183UUNK+Qa9aSi/i6W9Jmc9PHoztPWXk697zDig9BaiwqMOw7XM3l53qPDRm85HWc5sDIEBBvxt8rBODqVj/qH8dX4ZnB1PRhdP4+uk5txMh4P3/9+9TdJSci16urzpIk/oETb4snDLMpUWhUorbtxggfw1HlAgPxUlbSJxl5wQSw0fuXDxSgY5CJFabCzfVLydIvReHgFLLCY+JLE8W63G3L3daj0Jg5bTXw/u51+epoOaAtZP2rj0b8fjkZ+jSRUcNlF+b8E3X9TWHy1cZlz4ZzXYayDPBfwQk+K5PRVEBS6ZLAlLScLqOsVNzjXedPQ8vcKNXFxedSbo1cmDP1/9LAzQAcHhjePwcnfRqe1ezG3d7bcdywIWKBzN0FDMt0iz8h/D4S/9XUHz5TnmOHiMdKwdsckTbG0nVi6MU5sjt5jwGAVXkNBEZrviP18Bwl8ha8EUrnjOz9y6zXkXG4qvqF4X5b+/gNKP3f4",sidebar_class_name:"post api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},v=void 0,q={id:"api/service-api/start-launch-using-post-1",title:"Starts launch for specified project",description:"Starts launch for specified project",source:"@site/docs/api/service-api/start-launch-using-post-1.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/start-launch-using-post-1",permalink:"/docs/api/service-api/start-launch-using-post-1",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"start-launch-using-post-1",title:"Starts launch for specified project",description:"Starts launch for specified project",sidebar_label:"Starts launch for specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVsFu2zgQ/RVhTm1BW7GTLrA61U28uwaCNk3iy7rGgpbGNrsSqZJUHEPQvy+GpGzZVtvNKaaGM48z7z2yBss3BpIF5LyS6XaQKmm1ynPUsGSgStTcCiVnGSRgLNf23sXNjZCbh89Pz/+MgEHJNS/QoqZMNUheICRQavUNU/uJfjEQkpa43QKDDE2qRUmJL+I0fq+ExgwSqytkYNItFhySGuy+RIdCC7mBpln6YDT2o8r2FHGa94ngRv5cUYiMVhTKgI6J0tImXpa5SN0p42+GdtbdosLm2CbzZ3/8cgJz4c/LfHueRYHUuQBWreho1CJNvbQCjatprRaryvpfIZZrzQmbsFiYbu2ZxWJy2OHK/zz9v7jvaRgDszcWi86nlVI5cgkM8JUXJVVb89xgw+CF5xX2tb1pzgbYU6hQWc9eBiirgjp2N/1jMr9/BgZ304/zP2HZsMCanmQadSV7QLefPq/7Sp1yYT6f3UVqHWVoaGotK6yKfPamO76ebGulC24hgYxbHFiKanwrTvnqFkyppPGTGF+NLol5q5FbzE5p+C5+92vmPf1y9CLr7aGsihXqzichLW5Qd48mpP3txh/Lz7jUmDqgnhQMXgepynCDchDkNCA5DYLezZlEetRo2savlY5MialYC8yi4ACOhhalEUp6J3FE/mnZA1HPypM7FGi3ioyrVMZ1itwngfhlFNcd02liD4okjPqldbFK55AABVqVqrxJ4rjmld0qLey+iXkpLs74iKXS9kFpy/PI53IAteCr3M+nTedZseZVTq3fWluai3QPbexROBQILMSTag6ILmn2lzI2oiZFXGYRIYveiHUkETPM3pIaPN7oHPARV4aFGmoXVbqgoVDEkCW1Kq183UUNK+Qa9aSi/i6W9Jmc9PHoztPWXk697zDig9BaiwqMOw7XM3l53qPDRm85HWc5sDIEBBvxt8rBODqVj/qH8dX4ZnB1PRhdP4+uk5txMh4P3/9+9TdJSci16urzpIk/oETb4snDLMpUWhUorbtxggfw1HlAgPxUlbSJxl5wQSw0fuXDxSgY5CJFabCzfVLydIvReHgFLLCY+JLE8W63G3L3daj0Jg5bTXw/u51+epoOaAtZP2rj0b8fjkZ+jSRUcNlF+b8E3X9TWHy1cZlz4ZzXYayDPBfwQk+K5PRVEBS6ZLAlLScLqOsVNzjXedPQ8vcKNXFxedSbo1cmDP1/9LAzQAcHhjePwcnfRqe1ezG3d7bcdywIWKBzN0FDMt0iz8h/D4S/9XUHz5TnmOHiMdKwdsckTbG0nVi6MU5sjt5jwGAVXkNBEZrviP18Bwl8ha8EUrnjOz9y6zXkXG4qvqF4X5b+/gNKP3f4",sidebar_class_name:"post api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Get list of project launches by filter",permalink:"/docs/api/service-api/get-project-launches-using-get"},next:{title:"Delete specified launches by ids",permalink:"/docs/api/service-api/delete-launches-using-delete"}},N={},z=[{value:"Request",id:"request",level:2}];function P(e){const a={h2:"h2",p:"p",...(0,r.a)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(a.p,{children:"Starts launch for specified project"})}),"\n",(0,i.jsx)(c(),{method:"post",path:"/v1/{projectName}/launch"}),"\n",(0,i.jsx)(a.p,{children:"Starts launch for specified project"}),"\n",(0,i.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(a.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)(o(),{className:"openapi-tabs__mime",children:(0,i.jsx)(y.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(a.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(a.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,i.jsx)(a.p,{children:"Start launch request body"})})}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(g(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(a.p,{children:"attributes"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(a.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(a.p,{children:"Array ["})})}),(0,i.jsx)(g(),{collapsible:!1,name:"key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(g(),{collapsible:!1,name:"system",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!1}}),(0,i.jsx)(g(),{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(a.p,{children:"]"})})})]})]})}),(0,i.jsx)(g(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(g(),{collapsible:!1,name:"mode",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`DEFAULT`, `DEBUG`]",schema:{type:"string",enum:["DEFAULT","DEBUG"]}}),(0,i.jsx)(g(),{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(g(),{collapsible:!1,name:"rerun",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,i.jsx)(g(),{collapsible:!1,name:"rerunOf",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"UUID of desired launch to rerun"}}),(0,i.jsx)(g(),{collapsible:!1,name:"startTime",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}})]})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(l(),{label:void 0,id:void 0,children:(0,i.jsxs)(y.default,{label:"201",value:"201",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Created"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(y.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(g(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(g(),{collapsible:!1,name:"number",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}})]})]})}),(0,i.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "id": "string",\n  "number": 0\n}',language:"json"})})]})})})})]})})})})]})}function S(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(P,{...e})}):P(e)}}}]);