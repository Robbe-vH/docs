"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87885],{33785:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>g,contentTitle:()=>m,default:()=>v,frontMatter:()=>c,metadata:()=>h,toc:()=>x});var i=t(85893),r=t(11151),a=t(58219),o=t.n(a),n=(t(62316),t(51039)),d=t.n(n),p=(t(82723),t(9487),t(41429)),l=t.n(p),u=(t(5397),t(4667),t(9472),t(1176),t(12005),t(85162));const c={id:"get-user-photo-using-get",title:"Get user's photo",description:"Get user's photo",sidebar_label:"Get user's photo",hide_title:!0,hide_table_of_contents:!0,api:"eJydVU1v2zAM/SsGL2sBNU4L7OLTiqHoig1d0a6nIgfGZmJtsqRKdLrA8H8f6I98tkWxUxDp8fGRfJQbYFxGyJ5goQ2dRXYBl3SWO8vBGUMBZgqcp4Csnb0pIIMl8WOkcFc6do9R2+X11S9Q4DFgRUxB2BqwWBFkoAtQoC1k8FxTWIOCgmIetBe68T7Qc60DFZBxqElBzEuqELIGeO2FJXLQdgltqzbExmHxq6yruUVt3s9xCD2inztnCO0evw/uN+V8K/8Gdo9cHpHv4z5eyUzA0TsbKcr9xXQqP/vkP7+DApkFWYasadtW0vtAObIkWaCJdKjomjipI4VPMfEyI1BQEZdumF03Ki4hg3R1nhbImDY7RbSpxI6BkcJqnGgdDGQgWHa5M22Wpg3WXLqged2m6PVRc+7Ju8B3LjCapOcCBSsMGuemr3uk64tfYG0YMiiZfTyiuxuxCsjWlbhWgKAG/KxVsFF03M1vLnIi403QFokoS070IrFEBRWniVskvd7kUPBWV0GVm4QO5TvQRDtou2lGyus+71MDc8JA4bKWPj/Ndq8fxBF96bugjUGGgjrjdN7sQGJN0HbhOqRmQ5vuDmrf6P1Yy+XdTVK4vK7IcrfKg7EwF2ONpn+ovQRJfyvZlQxif/LlqGYFRudkI+2EX3rMS0ouJlNQg12knCxNX15eJtjdTlxYpkNoTH/cfL26fbg6k5BWgXitV/95cj6dnMuZd5ErtDtpXjH4XumbXjL95dQb1FaIOkHNYP4nWJ1LHDKCgmx/i7cbMFNQusiCb5o5RnoMpm3luH9qZNaFjuLmN9ax2e4vnNwPz8Np0r17r8r8Q+vxXVyhqQUA8i59PM3he/dOmkPoNuNsu6f/X+V+W1/VMRyiXe+mH/XtErSy3puXTD46bfsPzBRSRw==",sidebar_class_name:"get api-method",info_path:"api/service-api/5.10/report-portal",custom_edit_url:null},m=void 0,h={id:"api/service-api/5.10/get-user-photo-using-get",title:"Get user's photo",description:"Get user's photo",source:"@site/docs/api/service-api/5.10/get-user-photo-using-get.api.mdx",sourceDirName:"api/service-api/5.10",slug:"/api/service-api/5.10/get-user-photo-using-get",permalink:"/docs/api/service-api/5.10/get-user-photo-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-user-photo-using-get",title:"Get user's photo",description:"Get user's photo",sidebar_label:"Get user's photo",hide_title:!0,hide_table_of_contents:!0,api:"eJydVU1v2zAM/SsGL2sBNU4L7OLTiqHoig1d0a6nIgfGZmJtsqRKdLrA8H8f6I98tkWxUxDp8fGRfJQbYFxGyJ5goQ2dRXYBl3SWO8vBGUMBZgqcp4Csnb0pIIMl8WOkcFc6do9R2+X11S9Q4DFgRUxB2BqwWBFkoAtQoC1k8FxTWIOCgmIetBe68T7Qc60DFZBxqElBzEuqELIGeO2FJXLQdgltqzbExmHxq6yruUVt3s9xCD2inztnCO0evw/uN+V8K/8Gdo9cHpHv4z5eyUzA0TsbKcr9xXQqP/vkP7+DApkFWYasadtW0vtAObIkWaCJdKjomjipI4VPMfEyI1BQEZdumF03Ki4hg3R1nhbImDY7RbSpxI6BkcJqnGgdDGQgWHa5M22Wpg3WXLqged2m6PVRc+7Ju8B3LjCapOcCBSsMGuemr3uk64tfYG0YMiiZfTyiuxuxCsjWlbhWgKAG/KxVsFF03M1vLnIi403QFokoS070IrFEBRWniVskvd7kUPBWV0GVm4QO5TvQRDtou2lGyus+71MDc8JA4bKWPj/Ndq8fxBF96bugjUGGgjrjdN7sQGJN0HbhOqRmQ5vuDmrf6P1Yy+XdTVK4vK7IcrfKg7EwF2ONpn+ovQRJfyvZlQxif/LlqGYFRudkI+2EX3rMS0ouJlNQg12knCxNX15eJtjdTlxYpkNoTH/cfL26fbg6k5BWgXitV/95cj6dnMuZd5ErtDtpXjH4XumbXjL95dQb1FaIOkHNYP4nWJ1LHDKCgmx/i7cbMFNQusiCb5o5RnoMpm3luH9qZNaFjuLmN9ax2e4vnNwPz8Np0r17r8r8Q+vxXVyhqQUA8i59PM3he/dOmkPoNuNsu6f/X+V+W1/VMRyiXe+mH/XtErSy3puXTD46bfsPzBRSRw==",sidebar_class_name:"get api-method",info_path:"api/service-api/5.10/report-portal",custom_edit_url:null},sidebar:"service-api-5.10",previous:{title:"Delete user's photo",permalink:"/docs/api/service-api/5.10/delete-photo-using-delete"},next:{title:"getFile",permalink:"/docs/api/service-api/5.10/get-file-using-get"}},g={},x=[{value:"Request",id:"request",level:2}];function j(e){const s={h2:"h2",p:"p",...(0,r.a)(),...e.components},{Details:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(s.p,{children:"Get user's photo"})}),"\n",(0,i.jsx)(d(),{method:"get",path:"/v1/data/{projectName}/userphoto"}),"\n",(0,i.jsx)(s.p,{children:"Get user's photo"}),"\n",(0,i.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(t,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(l(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsxs)(t,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Query Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(l(),{className:"paramsItem",param:{name:"id",in:"query",description:"id",required:!0,schema:{type:"string"}}}),(0,i.jsx)(l(),{className:"paramsItem",param:{name:"loadThumbnail",in:"query",description:"loadThumbnail",schema:{type:"boolean"}}})]})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(o(),{label:void 0,id:void 0,children:(0,i.jsxs)(u.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"OK"})}),(0,i.jsx)("div",{})]})})})})]})}function v(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}}}]);