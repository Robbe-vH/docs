"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67834],{33230:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>q,contentTitle:()=>b,default:()=>J,frontMatter:()=>y,metadata:()=>N,toc:()=>M});var i=a(85893),r=a(11151),n=a(58219),l=a.n(n),t=(a(62316),a(51039)),c=a.n(t),p=(a(82723),a(9487)),d=a.n(p),o=a(41429),m=a.n(o),h=a(5397),u=a.n(h),j=a(4667),g=a.n(j),x=a(9472),v=a.n(x),f=(a(1176),a(12005),a(85162));const y={id:"update-launch-using-put",title:"Updates launch for specified project",description:"Updates launch for specified project",sidebar_label:"Updates launch for specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJydVk1z2zYQ/SucPSUZSLQzbQ88VXGUVFNP4srRydEBIlcSUhJAANC2hsP/3lkApEhJiTvRSQT38+17Czbg+M5C9gAlr2W+n+RKOqPKEg2sGSiNhjuh5KKADGpdcIe33nBlhdzdrb4AA80Nr9ChoTgNSF4hZDHeogAGQkIGmrs9MCjQ5kZoijk2Mvi9FgYLyJypkYHN91hxyBpwB00BhXS4QwMMtspU3IWjP36DtmV9Vm3UN8zdJ3r6WeKx3Yu5rTNC7qBt18EYrXunigNZjOMOIVr+AwwIT5SOLLnWpcg9nOk3S+bNMJNwJaVanUaIJagNFUxwG5qKE2h9UOeM2NQuPEVbbgw/UP8OKzsMvnBYzTqPJVpVmxxfzPEvHi5gweCRlzVeQqltT/C+4Fyp4oIvA5R1RXx8P/8wW90Sv97P360+wroNccez8gdWK2lDqW+vrs6H8vnv8SDepG8uY/+5o/uNqnSJ9G95/yI8FVrLdz8AImKhDebcUdVbXlpk8DzJVYE7lJPIp8lGFYdJpPEZjcYNBY7YJMgn2SqTWI252AoskkhtgvLZobRCySBMP8afJu5HeloA8b5Ct1e0BnTtMSBZZZA+XqfNQE1tGopKm07bbRqCAQOL5rFbE7UpIQNydSpXZZulacNrt1dGuEObci3O2l6iVsbdKeN4mYRYvmQj+KYMs+jCBRJseV3Sntg7p+1ZuLvO9kg6MgQW7dctg76ic1b9paxLCLaEyyKhypJXYptIxAKL14naJqHe5LTgY10FVmpqvJX2RlOhiDVrgiqvQ96HBjbIDZpZTYg/rIev74nDofWhUc/E2JCnOj0HI1qZQCtoedxl82dOnD/dKT1veoF2FOlIvj7FtbcMEu+V3NJC3qqh4EYI/WDeHX6zu0VSqLyuUDov0ihqnntRR+Xc15qcaKYVF0QxG07+PMOZQSlylBYH7jPN8z0mb6dXwCJFCcIsTZ+enqbcv50qs0ujq01vFzfzT/fzCbnQTkRjQ/W/T6+vptd0ppV1FZeDNP9TwJd3qMNnl+qSC0nBfZFNlOMDPF4Dg2x8vYUsdD64b6Mo1wz2yjpybZoNt7gyZdvS8fcaDdFvfZSYp0MhLP0/rrKTKvtFC6+WcVe/TgaJL3bRXVzyMGAYsMi93ptu+l/KPwbkF0oYBmhpM+yRF2gGArkJeSdfKM4xwtmtTz0Ej1meo3YDW7qYRqs2fGBt4qdG1JPhT/TNwp8gg6/wlWpUvnu/Bvx5AyWXu9rfShCy0u8/rJhr4g==",sidebar_class_name:"put api-method",info_path:"api/service-api/5.10/report-portal",custom_edit_url:null},b=void 0,N={id:"api/service-api/5.10/update-launch-using-put",title:"Updates launch for specified project",description:"Updates launch for specified project",source:"@site/docs/api/service-api/5.10/update-launch-using-put.api.mdx",sourceDirName:"api/service-api/5.10",slug:"/api/service-api/5.10/update-launch-using-put",permalink:"/docs/api/service-api/5.10/update-launch-using-put",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-launch-using-put",title:"Updates launch for specified project",description:"Updates launch for specified project",sidebar_label:"Updates launch for specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJydVk1z2zYQ/SucPSUZSLQzbQ88VXGUVFNP4srRydEBIlcSUhJAANC2hsP/3lkApEhJiTvRSQT38+17Czbg+M5C9gAlr2W+n+RKOqPKEg2sGSiNhjuh5KKADGpdcIe33nBlhdzdrb4AA80Nr9ChoTgNSF4hZDHeogAGQkIGmrs9MCjQ5kZoijk2Mvi9FgYLyJypkYHN91hxyBpwB00BhXS4QwMMtspU3IWjP36DtmV9Vm3UN8zdJ3r6WeKx3Yu5rTNC7qBt18EYrXunigNZjOMOIVr+AwwIT5SOLLnWpcg9nOk3S+bNMJNwJaVanUaIJagNFUxwG5qKE2h9UOeM2NQuPEVbbgw/UP8OKzsMvnBYzTqPJVpVmxxfzPEvHi5gweCRlzVeQqltT/C+4Fyp4oIvA5R1RXx8P/8wW90Sv97P360+wroNccez8gdWK2lDqW+vrs6H8vnv8SDepG8uY/+5o/uNqnSJ9G95/yI8FVrLdz8AImKhDebcUdVbXlpk8DzJVYE7lJPIp8lGFYdJpPEZjcYNBY7YJMgn2SqTWI252AoskkhtgvLZobRCySBMP8afJu5HeloA8b5Ct1e0BnTtMSBZZZA+XqfNQE1tGopKm07bbRqCAQOL5rFbE7UpIQNydSpXZZulacNrt1dGuEObci3O2l6iVsbdKeN4mYRYvmQj+KYMs+jCBRJseV3Sntg7p+1ZuLvO9kg6MgQW7dctg76ic1b9paxLCLaEyyKhypJXYptIxAKL14naJqHe5LTgY10FVmpqvJX2RlOhiDVrgiqvQ96HBjbIDZpZTYg/rIev74nDofWhUc/E2JCnOj0HI1qZQCtoedxl82dOnD/dKT1veoF2FOlIvj7FtbcMEu+V3NJC3qqh4EYI/WDeHX6zu0VSqLyuUDov0ihqnntRR+Xc15qcaKYVF0QxG07+PMOZQSlylBYH7jPN8z0mb6dXwCJFCcIsTZ+enqbcv50qs0ujq01vFzfzT/fzCbnQTkRjQ/W/T6+vptd0ppV1FZeDNP9TwJd3qMNnl+qSC0nBfZFNlOMDPF4Dg2x8vYUsdD64b6Mo1wz2yjpybZoNt7gyZdvS8fcaDdFvfZSYp0MhLP0/rrKTKvtFC6+WcVe/TgaJL3bRXVzyMGAYsMi93ptu+l/KPwbkF0oYBmhpM+yRF2gGArkJeSdfKM4xwtmtTz0Ej1meo3YDW7qYRqs2fGBt4qdG1JPhT/TNwp8gg6/wlWpUvnu/Bvx5AyWXu9rfShCy0u8/rJhr4g==",sidebar_class_name:"put api-method",info_path:"api/service-api/5.10/report-portal",custom_edit_url:null},sidebar:"service-api-5.10",previous:{title:"Force finish launch for specified project",permalink:"/docs/api/service-api/5.10/force-finish-launch-using-put"},next:{title:"log-async-controller",permalink:"/docs/api/service-api/5.10/log-async-controller"}},q={},M=[{value:"Request",id:"request",level:2}];function S(e){const s={h2:"h2",p:"p",...(0,r.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(s.p,{children:"Updates launch for specified project"})}),"\n",(0,i.jsx)(c(),{method:"put",path:"/v1/{projectName}/launch/{launchId}/update"}),"\n",(0,i.jsx)(s.p,{children:"Updates launch for specified project"}),"\n",(0,i.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(m(),{className:"paramsItem",param:{name:"launchId",in:"path",description:"launchId",required:!0,schema:{type:"integer",format:"int64"}}}),(0,i.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,i.jsx)(d(),{className:"openapi-tabs__mime",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,i.jsx)(s.p,{children:"updateLaunchRQ"})})}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(g(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"attributes"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(g(),{collapsible:!1,name:"key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(g(),{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})}),(0,i.jsx)(g(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(g(),{collapsible:!1,name:"mode",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`DEFAULT`, `DEBUG`]",schema:{type:"string",enum:["DEFAULT","DEBUG"]}})]})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(l(),{label:void 0,id:void 0,children:(0,i.jsxs)(f.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(v(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(g(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "message": "string"\n}',language:"json"})})]})})})})]})})})})]})}function J(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(S,{...e})}):S(e)}}}]);