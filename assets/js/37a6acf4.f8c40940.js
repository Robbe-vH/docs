"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29112],{18574:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>q,contentTitle:()=>b,default:()=>w,frontMatter:()=>v,metadata:()=>N,toc:()=>_});var a=i(85893),r=i(11151),l=i(58219),t=i.n(l),n=(i(62316),i(51039)),c=i.n(n),d=(i(82723),i(9487)),o=i.n(d),p=i(41429),m=i.n(p),h=i(5397),u=i.n(h),x=i(4667),j=i.n(x),f=i(9472),y=i.n(f),g=(i(1176),i(12005),i(85162));const v={id:"create-filter-using-post",title:"Create user filter",description:"Create user filter",sidebar_label:"Create user filter",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVk2P2zYQ/SvCnJKAtuKg7UGnusYGXaBItt7sydGBlsYyU4pkSGq9hqD/HowoWZKtbdo9ran5ePNm5pE1eF44SHZQObSLg5Ae7SLTylstJVpIGWiDlnuh1X0OCWQWucePreGTE6p4+Pz4BRgYbnmJHi1Fq0HxEiEBY/U3zPwn+sVAKDri/ggMcnSZFYbi3thZ/F4Jizkk3lbIwGVHLDkkNfizobDOW6EKaJo0GKPzf+j8TBbTuGO027+BAZWGypMlN0aKrK0s/ubIvB5nEl5SqieTc49PDu0oygBwRxFzQUEcsFA2A21zIoIFvCnrces9VUlsWWLVC3SUaxRiqJFby89EmsfSTRBdsGx6v9cgAYPQUqGKjwJlDgyeuaz+D6YZ2m+izpmEPDM9a5qr7s84h/GZ+dAx+x9o+kyWV8QIt3YZMHDaeqGKjZZVqX7ORXAbcu61lsgV4ZlGeqXacHb9jQGqqiRYklcqo6Xw6DwVAgykLiBtgv90H9oDZ7RyAd2H96vbwd+0g59PJ/5d/G5+yO+Ut+fOZfsIP+Vj3HGhPBYt0wdtS+7D0W+/tLV3zTYWsxZOcuDSIYOXRaZzLFAtuvVd7HV+XnSqcbO1c7VFpFhRGETi8sWjcmGHdjX8g2dI/jXNZUKv05GolOiPmuTOaNfWT6KVQPy8iuuRVjXxJb9D+9yLX2UlJECGXmdaNkkc17zyR22FPzcxN+Kmpi0abf2Dtp7LKMRqEVrB9zKw3ocLzT7wShLXR++Nuwn30NsOQ0aGwDr7tGFwQXQ7PX9q5yNiKeIqjwhZ9EYcIoWYY/420oco4I2uAQ+4ciz10rZWpjVaCk0jkRJVWRXy7mrYI7do1xXxu0vpM2nxdhD1uxdeGonXOrmbSNSwU9fKNHzp292vZnpN2sWyG8PL7150dhcp6O6l6fKPI3fL0W12Q3ffQY9XbkLgK+PQ07t+uI9ynVUlKs87Xae15lm71h3cx8qQE7W85IIm0IWT32/awECKDJXDkfva8OyI0Yfle2DdBNOsJHF8Op2WvP261LaIO1cX/3W/ufv0eLcgFxJ8tC6g/3W5WoUzWp+Sq1Ga2eWdvw48vvjYSC5apW0h1d0m7uB5BQyS6buhi5cyONLaJjuo6z13+GRl09Dx9wotjV06rFbb1Vw4+n/QpytAFw2FN9tOi99G09yzmPs7Sp1H8wesU6dxgIY28oic7qxBvzYh7+ILxRki3LxcGtZ7rLMMjR/ZkuZPFK17r+2791KpczKz/ER3JT9BAl/hK4HU5vIkac9rkFwVFS/IPqSlvx8dvoxV",sidebar_class_name:"post api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},b=void 0,N={id:"api/service-api/create-filter-using-post",title:"Create user filter",description:"Create user filter",source:"@site/docs/api/service-api/create-filter-using-post.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/create-filter-using-post",permalink:"/docs/api/service-api/create-filter-using-post",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-filter-using-post",title:"Create user filter",description:"Create user filter",sidebar_label:"Create user filter",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVk2P2zYQ/SvCnJKAtuKg7UGnusYGXaBItt7sydGBlsYyU4pkSGq9hqD/HowoWZKtbdo9ran5ePNm5pE1eF44SHZQObSLg5Ae7SLTylstJVpIGWiDlnuh1X0OCWQWucePreGTE6p4+Pz4BRgYbnmJHi1Fq0HxEiEBY/U3zPwn+sVAKDri/ggMcnSZFYbi3thZ/F4Jizkk3lbIwGVHLDkkNfizobDOW6EKaJo0GKPzf+j8TBbTuGO027+BAZWGypMlN0aKrK0s/ubIvB5nEl5SqieTc49PDu0oygBwRxFzQUEcsFA2A21zIoIFvCnrces9VUlsWWLVC3SUaxRiqJFby89EmsfSTRBdsGx6v9cgAYPQUqGKjwJlDgyeuaz+D6YZ2m+izpmEPDM9a5qr7s84h/GZ+dAx+x9o+kyWV8QIt3YZMHDaeqGKjZZVqX7ORXAbcu61lsgV4ZlGeqXacHb9jQGqqiRYklcqo6Xw6DwVAgykLiBtgv90H9oDZ7RyAd2H96vbwd+0g59PJ/5d/G5+yO+Ut+fOZfsIP+Vj3HGhPBYt0wdtS+7D0W+/tLV3zTYWsxZOcuDSIYOXRaZzLFAtuvVd7HV+XnSqcbO1c7VFpFhRGETi8sWjcmGHdjX8g2dI/jXNZUKv05GolOiPmuTOaNfWT6KVQPy8iuuRVjXxJb9D+9yLX2UlJECGXmdaNkkc17zyR22FPzcxN+Kmpi0abf2Dtp7LKMRqEVrB9zKw3ocLzT7wShLXR++Nuwn30NsOQ0aGwDr7tGFwQXQ7PX9q5yNiKeIqjwhZ9EYcIoWYY/420oco4I2uAQ+4ciz10rZWpjVaCk0jkRJVWRXy7mrYI7do1xXxu0vpM2nxdhD1uxdeGonXOrmbSNSwU9fKNHzp292vZnpN2sWyG8PL7150dhcp6O6l6fKPI3fL0W12Q3ffQY9XbkLgK+PQ07t+uI9ynVUlKs87Xae15lm71h3cx8qQE7W85IIm0IWT32/awECKDJXDkfva8OyI0Yfle2DdBNOsJHF8Op2WvP261LaIO1cX/3W/ufv0eLcgFxJ8tC6g/3W5WoUzWp+Sq1Ga2eWdvw48vvjYSC5apW0h1d0m7uB5BQyS6buhi5cyONLaJjuo6z13+GRl09Dx9wotjV06rFbb1Vw4+n/QpytAFw2FN9tOi99G09yzmPs7Sp1H8wesU6dxgIY28oic7qxBvzYh7+ILxRki3LxcGtZ7rLMMjR/ZkuZPFK17r+2791KpczKz/ER3JT9BAl/hK4HU5vIkac9rkFwVFS/IPqSlvx8dvoxV",sidebar_class_name:"post api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Update list of user filters",permalink:"/docs/api/service-api/update-user-filters-using-put"},next:{title:"Get list of specified user filters",permalink:"/docs/api/service-api/get-user-filters-using-get"}},q={},_=[{value:"Request",id:"request",level:2}];function G(e){const s={h2:"h2",p:"p",...(0,r.a)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"openapi__heading",children:(0,a.jsx)(s.p,{children:"Create user filter"})}),"\n",(0,a.jsx)(c(),{method:"post",path:"/v1/{projectName}/filter"}),"\n",(0,a.jsx)(s.p,{children:"Create user filter"}),"\n",(0,a.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,a.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(s.p,{children:"Path Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:(0,a.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,a.jsx)(o(),{className:"openapi-tabs__mime",children:(0,a.jsx)(g.default,{label:"application/json",value:"application/json-schema",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,a.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,a.jsx)(s.p,{children:"Body"})}),(0,a.jsx)("strong",{className:"openapi-schema__required",children:(0,a.jsx)(s.p,{children:"required"})})]}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,a.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,a.jsx)(s.p,{children:"createFilterRQ"})})}),(0,a.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,a.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsxs)("span",{className:"openapi-schema__container",children:[(0,a.jsx)("strong",{className:"openapi-schema__property",children:(0,a.jsx)(s.p,{children:"conditions"})}),(0,a.jsx)("span",{className:"openapi-schema__name",children:(0,a.jsx)(s.p,{children:"object[]"})}),(0,a.jsx)("span",{className:"openapi-schema__divider"}),(0,a.jsx)("span",{className:"openapi-schema__required",children:(0,a.jsx)(s.p,{children:"required"})})]})}),(0,a.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,a.jsx)(s.p,{children:"Array ["})})}),(0,a.jsx)(j(),{collapsible:!1,name:"condition",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(j(),{collapsible:!1,name:"filteringField",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(j(),{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,a.jsx)(s.p,{children:"]"})})})]})]})}),(0,a.jsx)(j(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(j(),{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsxs)("span",{className:"openapi-schema__container",children:[(0,a.jsx)("strong",{className:"openapi-schema__property",children:(0,a.jsx)(s.p,{children:"orders"})}),(0,a.jsx)("span",{className:"openapi-schema__name",children:(0,a.jsx)(s.p,{children:"object[]"})}),(0,a.jsx)("span",{className:"openapi-schema__divider"}),(0,a.jsx)("span",{className:"openapi-schema__required",children:(0,a.jsx)(s.p,{children:"required"})})]})}),(0,a.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,a.jsx)(s.p,{children:"Array ["})})}),(0,a.jsx)(j(),{collapsible:!1,name:"isAsc",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,a.jsx)(j(),{collapsible:!1,name:"sortingColumn",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,a.jsx)(s.p,{children:"]"})})})]})]})}),(0,a.jsx)(j(),{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`launch`, `testitem`, `log`]",schema:{type:"string",enum:["launch","testitem","log"]}})]})]})})}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsx)(t(),{label:void 0,id:void 0,children:(0,a.jsxs)(g.default,{label:"201",value:"201",children:[(0,a.jsx)("div",{children:(0,a.jsx)(s.p,{children:"Created"})}),(0,a.jsx)("div",{children:(0,a.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(g.default,{label:"*/*",value:"*/*",children:(0,a.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,a.jsx)(j(),{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}})})]})}),(0,a.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(u(),{responseExample:'{\n  "id": 0\n}',language:"json"})})]})})})})]})})})})]})}function w(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(G,{...e})}):G(e)}}}]);