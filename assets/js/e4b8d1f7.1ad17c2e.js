"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[24226],{2493:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>v,contentTitle:()=>b,default:()=>E,frontMatter:()=>f,metadata:()=>y,toc:()=>N});var i=a(85893),n=a(11151),r=a(58219),t=a.n(r),l=(a(62316),a(51039)),o=a.n(l),c=(a(82723),a(9487)),d=a.n(c),m=(a(41429),a(5397)),p=a.n(m),u=a(4667),h=a.n(u),g=a(9472),x=a.n(g),j=(a(1176),a(12005),a(85162));const f={id:"get-myself-using-get-3",title:"Return information about current logged-in user",description:"Return information about current logged-in user",sidebar_label:"Return information about current logged-in user",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVN9v20YM/lcEPm2FYqXd1gc9NRiC1ljXGWnyFBgFraOlW093Vx6vmSHofy8o2andOCj2JIE/vvtIfuQAgm2C+h5yIr5oghcOzhHDuoQQiVFs8EsDNbQkf+8Sue1dsr59e3376TcogSnF4BMlqAd4dXmpH0OpYRs1E2r45y8oQYHJi3pfVC/0k5qOetQ/seIIarhLxDeUQuaGJuQv2TIZJUc9WgclWAPlxHRplKDsoiaGzb/UCJQQWSmLndlg04Ts5XYKGg7BSdj6FsYSMCXbejIrDpqfjoIeEdEYq3WgW51gHzhfnWLAzziRF949yyjOKDfBnfOP41juO3EueZud+4D9eWRrjszWC7XEUMI2cI8ym17/roE9CRoUPNeMk1KUTOyChKU5X4v63gc0dOzfhOAIvQbsx3guV13PN2Hqg6HI1KAo+hZdovIH2d2QZPaF9XONNvgCNyFL0WRm8lK40LZkLqwv9DmYSu/CXulaLUoHNVTqTRWUkIi/EuuyDJDZQQ1D5CChCW6sq2rALF1gK7uxwmjhKaEYWFaBBV0xY0EJX5EtbtysjgPcvERbzE5n04nE9ARudYgtgXzudUs0EMp9/FoVfmD0dCvfhSSFx54K9KZQZsUvdlt4IkPm1yJsi5lv8SPh77wM9WHBU1ScghY26IDW2qomz+/eD7AhZOKrrO28X6tbh3K8RSdPPdO4A5Gr1bIwock9eZnGur8u2EzXxU8bAB9z1CR4XBhIs+XNE8IlONuQT3SUfhWx6ah4tbjUezPNWrtaV9XDw8MCJ+8icFvtU1P1fvnn9YeP1xeaMpagQpnZ/7F4+XK2xZCkR3/0zP/X6ElnHpdD6D+pokM7LxZPApr1Ox92lY8ezC4kUdswbDDRHbtxVPOXTKyzWn/X4zSqEjpCQzyN8TPttDNNQ1Em4bqsb+s515k+bs/b61sYx2852TFC",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},b=void 0,y={id:"api/service-api/get-myself-using-get-3",title:"Return information about current logged-in user",description:"Return information about current logged-in user",source:"@site/docs/api/service-api/get-myself-using-get-3.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-myself-using-get-3",permalink:"/docs/api/service-api/get-myself-using-get-3",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-myself-using-get-3",title:"Return information about current logged-in user",description:"Return information about current logged-in user",sidebar_label:"Return information about current logged-in user",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVN9v20YM/lcEPm2FYqXd1gc9NRiC1ljXGWnyFBgFraOlW093Vx6vmSHofy8o2andOCj2JIE/vvtIfuQAgm2C+h5yIr5oghcOzhHDuoQQiVFs8EsDNbQkf+8Sue1dsr59e3376TcogSnF4BMlqAd4dXmpH0OpYRs1E2r45y8oQYHJi3pfVC/0k5qOetQ/seIIarhLxDeUQuaGJuQv2TIZJUc9WgclWAPlxHRplKDsoiaGzb/UCJQQWSmLndlg04Ts5XYKGg7BSdj6FsYSMCXbejIrDpqfjoIeEdEYq3WgW51gHzhfnWLAzziRF949yyjOKDfBnfOP41juO3EueZud+4D9eWRrjszWC7XEUMI2cI8ym17/roE9CRoUPNeMk1KUTOyChKU5X4v63gc0dOzfhOAIvQbsx3guV13PN2Hqg6HI1KAo+hZdovIH2d2QZPaF9XONNvgCNyFL0WRm8lK40LZkLqwv9DmYSu/CXulaLUoHNVTqTRWUkIi/EuuyDJDZQQ1D5CChCW6sq2rALF1gK7uxwmjhKaEYWFaBBV0xY0EJX5EtbtysjgPcvERbzE5n04nE9ARudYgtgXzudUs0EMp9/FoVfmD0dCvfhSSFx54K9KZQZsUvdlt4IkPm1yJsi5lv8SPh77wM9WHBU1ScghY26IDW2qomz+/eD7AhZOKrrO28X6tbh3K8RSdPPdO4A5Gr1bIwock9eZnGur8u2EzXxU8bAB9z1CR4XBhIs+XNE8IlONuQT3SUfhWx6ah4tbjUezPNWrtaV9XDw8MCJ+8icFvtU1P1fvnn9YeP1xeaMpagQpnZ/7F4+XK2xZCkR3/0zP/X6ElnHpdD6D+pokM7LxZPApr1Ox92lY8ezC4kUdswbDDRHbtxVPOXTKyzWn/X4zSqEjpCQzyN8TPttDNNQ1Em4bqsb+s515k+bs/b61sYx2852TFC",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Delete specified users by ids",permalink:"/docs/api/service-api/delete-users-using-delete-1"},next:{title:"Return information about all users",permalink:"/docs/api/service-api/get-users-using-get-1"}},v={},N=[{value:"Request",id:"request",level:2}];function _(e){const s={h2:"h2",p:"p",...(0,n.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(s.p,{children:"Return information about current logged-in user"})}),"\n",(0,i.jsx)(o(),{method:"get",path:"/users/"}),"\n",(0,i.jsx)(s.p,{children:"Return information about current logged-in user"}),"\n",(0,i.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(t(),{label:void 0,id:void 0,children:(0,i.jsxs)(j.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(j.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(j.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(h(),{collapsible:!1,name:"accountType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(h(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"assignedProjects"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"},children:(0,i.jsx)(h(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"property name*"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"AssignedProject"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(h(),{collapsible:!1,name:"entryType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(h(),{collapsible:!1,name:"projectRole",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})})]})}),(0,i.jsx)(h(),{collapsible:!1,name:"email",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(h(),{collapsible:!1,name:"fullName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(h(),{collapsible:!1,name:"id",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,i.jsx)(h(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"metadata"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"}})]})}),(0,i.jsx)(h(),{collapsible:!1,name:"photoId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(h(),{collapsible:!1,name:"photoLoaded",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,i.jsx)(h(),{collapsible:!1,name:"userId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(h(),{collapsible:!1,name:"userRole",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,i.jsx)(j.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(p(),{responseExample:'{\n  "accountType": "string",\n  "assignedProjects": {},\n  "email": "string",\n  "fullName": "string",\n  "id": 0,\n  "metadata": {},\n  "photoId": "string",\n  "photoLoaded": true,\n  "userId": "string",\n  "userRole": "string"\n}',language:"json"})})]})})})})]})})})})]})}function E(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(_,{...e})}):_(e)}}}]);