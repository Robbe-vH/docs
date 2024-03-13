"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99555],{82942:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>_,contentTitle:()=>b,default:()=>Q,frontMatter:()=>y,metadata:()=>q,toc:()=>N});var i=a(85893),r=a(11151),t=a(58219),n=a.n(t),l=(a(62316),a(51039)),o=a.n(l),c=(a(82723),a(9487)),p=a.n(c),d=a(41429),m=a.n(d),h=a(5397),u=a.n(h),g=a(4667),x=a.n(g),j=a(9472),v=a.n(j),f=(a(1176),a(12005),a(85162));const y={id:"create-log-using-post",title:"Create log (batching operation)",description:"Create log (batching operation)",sidebar_label:"Create log (batching operation)",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVV1v2zoM/SsGn9pBibsC98VP64oCt7jDWjTdUxAUjMzY2mTJk+j0Bob/+0Db+c6w+cmWDg+PyCO6BcYiQjYH64sJxo3TE+0dB28tBVgo8DUFZOPdYw4Z6EDI9MUX36JxxfPT7BUU1BiwIqYgRC04rAgyqIP/Tpq/ypcC42QJuQQFOUUdTC2kZ7hAPxsTKIeMQ0MKoi6pQsha4E0ttJGDcQV03WIAU+TPPt8IQoSTY3mtGsumxsDpyodqkiP3HHu2fZ45fI/evY1cbxIk5x7T+aWIk0MGqQQbihJ+HpK1J+c6h3TynB6xX4i1d3Fgvr25Oed6+g/U4fE+pB+Oj8OGrcj9jKzLGa7paWibK15m8KfDHOUfoRgCbqRvTFU8y/BgqSLH970b8r9IYfILLVRQUYxY0MW9yKh/vAbUl7Z3j7ipDqRFB2QrtJFODTaoTKwvkqulqDeuSHa2vgaRwaUXe9c+9trFpxmk69u0PbBnl1pfgIJIYb01exMsZCAo9trbLkvTFhsufTC86VKszZnhX6j2gZ99YLTJwAUK1hgMLu1Qri3d4IQVNpYhg5K5jmd0z1usAnJNJYYWIKgRv+gU7BSdW+tfHzmRK5ugyxNRllyZVeKIcsqvE79KBr3JqeC9rpwqPw09qu5BU+OlRQsplW6GvPMWloSBwl0jxZ0vZNu4lT8011Gq3xRuK+Tu+THJvW7EiH0nxyuCur8i4xSaNbUESXEqNNKrOKx8OhOswBpNLtJB+F2NuqTkdnoDauy1VDVL0/f39yn2u1MfinQMjemXx/uHr7OHiYR0CsQog/p/ph8/DmvisgrdQZo/W/SoErvrwPQ/p7VF44S319eO7p3D+hYUZMfjVQy8UFCKz7M5tO0SI30Ltutk+WdDQVq12Nuxb1xuorz/5oIdDF64ehmH23VynPii4O2scZv+AthGvkDBD9qc/Bg6cXFJmFPoFQ2I+yHv5FV49gyXhn+ntkF3WlPNB3AZpmLG3RQYf2vL8bdS+VxgwtVTqf2r2LjrfgHwAoUE",sidebar_class_name:"post api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},b=void 0,q={id:"api/service-api/create-log-using-post",title:"Create log (batching operation)",description:"Create log (batching operation)",source:"@site/docs/api/service-api/create-log-using-post.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/create-log-using-post",permalink:"/docs/api/service-api/create-log-using-post",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-log-using-post",title:"Create log (batching operation)",description:"Create log (batching operation)",sidebar_label:"Create log (batching operation)",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVV1v2zoM/SsGn9pBibsC98VP64oCt7jDWjTdUxAUjMzY2mTJk+j0Bob/+0Db+c6w+cmWDg+PyCO6BcYiQjYH64sJxo3TE+0dB28tBVgo8DUFZOPdYw4Z6EDI9MUX36JxxfPT7BUU1BiwIqYgRC04rAgyqIP/Tpq/ypcC42QJuQQFOUUdTC2kZ7hAPxsTKIeMQ0MKoi6pQsha4E0ttJGDcQV03WIAU+TPPt8IQoSTY3mtGsumxsDpyodqkiP3HHu2fZ45fI/evY1cbxIk5x7T+aWIk0MGqQQbihJ+HpK1J+c6h3TynB6xX4i1d3Fgvr25Oed6+g/U4fE+pB+Oj8OGrcj9jKzLGa7paWibK15m8KfDHOUfoRgCbqRvTFU8y/BgqSLH970b8r9IYfILLVRQUYxY0MW9yKh/vAbUl7Z3j7ipDqRFB2QrtJFODTaoTKwvkqulqDeuSHa2vgaRwaUXe9c+9trFpxmk69u0PbBnl1pfgIJIYb01exMsZCAo9trbLkvTFhsufTC86VKszZnhX6j2gZ99YLTJwAUK1hgMLu1Qri3d4IQVNpYhg5K5jmd0z1usAnJNJYYWIKgRv+gU7BSdW+tfHzmRK5ugyxNRllyZVeKIcsqvE79KBr3JqeC9rpwqPw09qu5BU+OlRQsplW6GvPMWloSBwl0jxZ0vZNu4lT8011Gq3xRuK+Tu+THJvW7EiH0nxyuCur8i4xSaNbUESXEqNNKrOKx8OhOswBpNLtJB+F2NuqTkdnoDauy1VDVL0/f39yn2u1MfinQMjemXx/uHr7OHiYR0CsQog/p/ph8/DmvisgrdQZo/W/SoErvrwPQ/p7VF44S319eO7p3D+hYUZMfjVQy8UFCKz7M5tO0SI30Ltutk+WdDQVq12Nuxb1xuorz/5oIdDF64ehmH23VynPii4O2scZv+AthGvkDBD9qc/Bg6cXFJmFPoFQ2I+yHv5FV49gyXhn+ntkF3WlPNB3AZpmLG3RQYf2vL8bdS+VxgwtVTqf2r2LjrfgHwAoUE",sidebar_class_name:"post api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"log-async-controller",permalink:"/docs/api/service-api/log-async-controller"},next:{title:"Create log",permalink:"/docs/api/service-api/create-log-entry-using-post"}},_={},N=[{value:"Request",id:"request",level:2}];function T(e){const s={h2:"h2",p:"p",...(0,r.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(s.p,{children:"Create log (batching operation)"})}),"\n",(0,i.jsx)(o(),{method:"post",path:"/v2/{projectName}/log"}),"\n",(0,i.jsx)(s.p,{children:"Create log (batching operation)"}),"\n",(0,i.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)(p(),{className:"openapi-tabs__mime",children:(0,i.jsx)(f.default,{label:"multipart/form-data",value:"multipart/form-data-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(x(),{collapsible:!1,name:"json_request_part",required:!0,schemaName:"",qualifierMessage:void 0,schema:{description:"json_request_part"}})})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(n(),{label:void 0,id:void 0,children:(0,i.jsxs)(f.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(v(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"responses"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"stackTrace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "responses": [\n    {\n      "id": "string",\n      "message": "string",\n      "stackTrace": "string"\n    }\n  ]\n}',language:"json"})})]})})})})]})})})})]})}function Q(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(T,{...e})}):T(e)}}}]);