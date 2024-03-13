"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96561],{17489:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>q,contentTitle:()=>N,default:()=>S,frontMatter:()=>v,metadata:()=>b,toc:()=>w});var a=i(85893),r=i(11151),n=i(58219),t=i.n(n),l=(i(62316),i(51039)),c=i.n(l),d=(i(82723),i(9487)),o=i.n(d),p=i(41429),m=i.n(p),h=i(5397),u=i.n(h),g=i(4667),f=i.n(g),j=i(9472),x=i.n(j),y=(i(1176),i(12005),i(85162));const v={id:"get-user-preference-using-get",title:"Load user preferences",description:"Only for users that allowed to edit other users",sidebar_label:"Load user preferences",hide_title:!0,hide_table_of_contents:!0,api:"eJydVk1v2zgQ/SvEnNqCtZKiuwed1gjSbdCiDdLmZPhASyOLW4pUyVG8hqD/vhhRtuSvbRpfbJPz8fhm5pEtkFoHSBdQe/cPZvQ2c5a8MwY9LCXkGDKva9LOQgpfrdmKwnnRBPRBUKlIKGPcBnNBTmCuSTgqcTAACa5Gr9j7LocU1kiPAf29xwI92gwfg7brv2+/g4RaeVUhsVu6aMGqCiEF49baggTN6WtFJRxj2ll4/Nlojzmk5BuUELISKwVpC7StOVQgr+0auk7uow9n/sL//i/Hod3zMy3ZONTOBgy8/+7qir+OSP0EEph1tMS7b5I3/DWJqslw2JG2Bwyu8dkhmH0J73Ku3IDFrXiJ+fVcC9IRSaFNpHoPWnmvtswCYRWmabliH3rzC2kzZ3PNh+GC6xxkpFeC8/nQBRuLHgZMv8Q2ifdb8G52fpfwgRzOre36g0bDUJ+UaX4H05kyn0Q9ZxLznOmRrjvqtjPOehpTW8J1T2fhfKUoLv35ng1jX5+JMJTiGXx+ZcsjBnWYhwwkBOdJ2/WNM01lf01adBtzrpwzqCzjOYx0gZbYNueOExfOe41T8DzOWKqeaRw/XK/aY6aI2SmUCSihQirdoHG9mlEJKSRP18mAJ2knKtIl9X6Yk7aXsI75Rf+0E8DGG0iBnchlznRpkrSqodJ5TdsuUbU+kakHrJ2ne+dJGRFj9R3utVqZWJJduChDhWoMH68kqsNJuPudrQS0TcWNwIYgB/tlJ2GP6FTXPrpAghtSKJsLRiZe6UJYxBzz18IVIuIVx4BHXDlWbuZ7q7o3mmnHVVgyVVkT8y5aWKHy6OcNc75Y8ra2hZt29UGqC8TtgMzv70TusqZCS2rQDdZnlfX6PNwd35qanZicSmmuVYgrf50AlmB0hjbgxH1eq6xE8W52BXKoNbOaJslms5mpfnfm/DoZXEPy+e7m9su327fswoKCPkT0f8yur+Na7QJVyk7SfHYq7y9jMTbcSaXb8fp5wRU/TA3hv5TURul+vvsTtcMYLODpGvaDCRLSwwt1hMZ78UJfSihdIHZu25UK+OhN1/HyzwY9l305tnbfBLkO/HscyYtnfPUwaNtrsXs9nD3ETirtdn9RpAASfuB2//Dg18SLMh9S8IL80wAdz2KJiqWbuYgW8yzDmia+/LTg6diLFT+9uu4/pkVyvg==",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},N=void 0,b={id:"api/service-api/get-user-preference-using-get",title:"Load user preferences",description:"Only for users that allowed to edit other users",source:"@site/docs/api/service-api/get-user-preference-using-get.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-user-preference-using-get",permalink:"/docs/api/service-api/get-user-preference-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-user-preference-using-get",title:"Load user preferences",description:"Only for users that allowed to edit other users",sidebar_label:"Load user preferences",hide_title:!0,hide_table_of_contents:!0,api:"eJydVk1v2zgQ/SvEnNqCtZKiuwed1gjSbdCiDdLmZPhASyOLW4pUyVG8hqD/vhhRtuSvbRpfbJPz8fhm5pEtkFoHSBdQe/cPZvQ2c5a8MwY9LCXkGDKva9LOQgpfrdmKwnnRBPRBUKlIKGPcBnNBTmCuSTgqcTAACa5Gr9j7LocU1kiPAf29xwI92gwfg7brv2+/g4RaeVUhsVu6aMGqCiEF49baggTN6WtFJRxj2ll4/Nlojzmk5BuUELISKwVpC7StOVQgr+0auk7uow9n/sL//i/Hod3zMy3ZONTOBgy8/+7qir+OSP0EEph1tMS7b5I3/DWJqslw2JG2Bwyu8dkhmH0J73Ku3IDFrXiJ+fVcC9IRSaFNpHoPWnmvtswCYRWmabliH3rzC2kzZ3PNh+GC6xxkpFeC8/nQBRuLHgZMv8Q2ifdb8G52fpfwgRzOre36g0bDUJ+UaX4H05kyn0Q9ZxLznOmRrjvqtjPOehpTW8J1T2fhfKUoLv35ng1jX5+JMJTiGXx+ZcsjBnWYhwwkBOdJ2/WNM01lf01adBtzrpwzqCzjOYx0gZbYNueOExfOe41T8DzOWKqeaRw/XK/aY6aI2SmUCSihQirdoHG9mlEJKSRP18mAJ2knKtIl9X6Yk7aXsI75Rf+0E8DGG0iBnchlznRpkrSqodJ5TdsuUbU+kakHrJ2ne+dJGRFj9R3utVqZWJJduChDhWoMH68kqsNJuPudrQS0TcWNwIYgB/tlJ2GP6FTXPrpAghtSKJsLRiZe6UJYxBzz18IVIuIVx4BHXDlWbuZ7q7o3mmnHVVgyVVkT8y5aWKHy6OcNc75Y8ra2hZt29UGqC8TtgMzv70TusqZCS2rQDdZnlfX6PNwd35qanZicSmmuVYgrf50AlmB0hjbgxH1eq6xE8W52BXKoNbOaJslms5mpfnfm/DoZXEPy+e7m9su327fswoKCPkT0f8yur+Na7QJVyk7SfHYq7y9jMTbcSaXb8fp5wRU/TA3hv5TURul+vvsTtcMYLODpGvaDCRLSwwt1hMZ78UJfSihdIHZu25UK+OhN1/HyzwY9l305tnbfBLkO/HscyYtnfPUwaNtrsXs9nD3ETirtdn9RpAASfuB2//Dg18SLMh9S8IL80wAdz2KJiqWbuYgW8yzDmia+/LTg6diLFT+9uu4/pkVyvg==",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Update project notifications configuration",permalink:"/docs/api/service-api/update-project-notification-config-using-put"},next:{title:"addUserPreference",permalink:"/docs/api/service-api/add-user-preference-using-put"}},q={},w=[{value:"Request",id:"request",level:2}];function _(e){const s={h2:"h2",p:"p",...(0,r.a)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"openapi__heading",children:(0,a.jsx)(s.p,{children:"Load user preferences"})}),"\n",(0,a.jsx)(c(),{method:"get",path:"/v1/project/{projectName}/preference/{login}"}),"\n",(0,a.jsx)(s.p,{children:"Only for users that allowed to edit other users"}),"\n",(0,a.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,a.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(s.p,{children:"Path Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)(m(),{className:"paramsItem",param:{name:"login",in:"path",description:"login",required:!0,schema:{type:"string"}}}),(0,a.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsx)(t(),{label:void 0,id:void 0,children:(0,a.jsxs)(y.default,{label:"200",value:"200",children:[(0,a.jsx)("div",{children:(0,a.jsx)(s.p,{children:"OK"})}),(0,a.jsx)("div",{children:(0,a.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(y.default,{label:"*/*",value:"*/*",children:(0,a.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,a.jsx)(f(),{collapsible:!0,className:"schemaItem",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsxs)("span",{className:"openapi-schema__container",children:[(0,a.jsx)("strong",{className:"openapi-schema__property",children:(0,a.jsx)(s.p,{children:"filters"})}),(0,a.jsx)("span",{className:"openapi-schema__name",children:(0,a.jsx)(s.p,{children:"object[]"})})]})}),(0,a.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,a.jsx)(s.p,{children:"Array ["})})}),(0,a.jsx)(f(),{collapsible:!0,className:"schemaItem",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsxs)("span",{className:"openapi-schema__container",children:[(0,a.jsx)("strong",{className:"openapi-schema__property",children:(0,a.jsx)(s.p,{children:"conditions"})}),(0,a.jsx)("span",{className:"openapi-schema__name",children:(0,a.jsx)(s.p,{children:"object[]"})}),(0,a.jsx)("span",{className:"openapi-schema__divider"}),(0,a.jsx)("span",{className:"openapi-schema__required",children:(0,a.jsx)(s.p,{children:"required"})})]})}),(0,a.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,a.jsx)(s.p,{children:"Array ["})})}),(0,a.jsx)(f(),{collapsible:!1,name:"condition",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(f(),{collapsible:!1,name:"filteringField",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(f(),{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,a.jsx)(s.p,{children:"]"})})})]})]})}),(0,a.jsx)(f(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(f(),{collapsible:!1,name:"id",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,a.jsx)(f(),{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(f(),{collapsible:!0,className:"schemaItem",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsxs)("span",{className:"openapi-schema__container",children:[(0,a.jsx)("strong",{className:"openapi-schema__property",children:(0,a.jsx)(s.p,{children:"orders"})}),(0,a.jsx)("span",{className:"openapi-schema__name",children:(0,a.jsx)(s.p,{children:"object[]"})}),(0,a.jsx)("span",{className:"openapi-schema__divider"}),(0,a.jsx)("span",{className:"openapi-schema__required",children:(0,a.jsx)(s.p,{children:"required"})})]})}),(0,a.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,a.jsx)(s.p,{children:"Array ["})})}),(0,a.jsx)(f(),{collapsible:!1,name:"isAsc",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,a.jsx)(f(),{collapsible:!1,name:"sortingColumn",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,a.jsx)(s.p,{children:"]"})})})]})]})}),(0,a.jsx)(f(),{collapsible:!1,name:"owner",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(f(),{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,a.jsx)(s.p,{children:"]"})})})]})]})}),(0,a.jsx)(f(),{collapsible:!1,name:"projectId",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,a.jsx)(f(),{collapsible:!1,name:"userId",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}})]})]})}),(0,a.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(u(),{responseExample:'{\n  "filters": [\n    {\n      "conditions": [\n        {\n          "condition": "string",\n          "filteringField": "string",\n          "value": "string"\n        }\n      ],\n      "description": "string",\n      "id": 0,\n      "name": "string",\n      "orders": [\n        {\n          "isAsc": true,\n          "sortingColumn": "string"\n        }\n      ],\n      "owner": "string",\n      "type": "string"\n    }\n  ],\n  "projectId": 0,\n  "userId": 0\n}',language:"json"})})]})})})})]})})})})]})}function S(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(_,{...e})}):_(e)}}}]);