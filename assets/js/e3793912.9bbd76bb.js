"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2251],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,h=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5669:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:2,sidebar_label:"Version 5.7.4"},i="Version 5.7.4",l={unversionedId:"releases/Version5.7.4",id:"releases/Version5.7.4",title:"Version 5.7.4",description:"What's Changed:",source:"@site/docs/releases/Version5.7.4.md",sourceDirName:"releases",slug:"/releases/Version5.7.4",permalink:"/docs/releases/Version5.7.4",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/releases/Version5.7.4.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Version 5.7.4"},sidebar:"defaultSidebar",previous:{title:"Version v.23.1",permalink:"/docs/releases/Versionv23.1"},next:{title:"Version 5.7.3",permalink:"/docs/releases/Version5.7.3"}},s={},c=[{value:"What&#39;s Changed:",id:"whats-changed",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"version-574"},"Version 5.7.4"),(0,o.kt)("h2",{id:"whats-changed"},"What's Changed:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"ReportPortal previously used MinIO Client for file storage, which offered such benefits as:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Easy Docker-based installation"),(0,o.kt)("li",{parentName:"ul"},"Kubernetes Support"),(0,o.kt)("li",{parentName:"ul"},"S3-compatible bridge which allows to delegate file storage to S3, but keep using MinIO API")),(0,o.kt)("p",null,"But since there have been some changes in MinIO, we have explored alternative clients for working with cloud storage."),(0,o.kt)("p",null,"Changes in MinIO:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a licensing shift to AGPL which does not allow to have MinIO dependencies in the code anymore"),(0,o.kt)("li",{parentName:"ul"},"deprecation of S3 Proxy Gateway highly utilized in client installations")),(0,o.kt)("p",null,"Thus, we have replaced MinIO Client with JCloud in the latest ReportPortal version.\nStarting from ReportPortal 5.7.4 you can either use AWS S3 directly or continue with your existing MinIO as object storage."),(0,o.kt)("media-view",{src:r(81559),alt:"Versions 5.7.3 vs 5.7.4"}),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"IMPORTANT:"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Please, don\u2019t forget to update ElasticSearch config."),"\nWe've enabled logs double entry by default. Thus, it is important to review your ElasticSearch setup.\nPlease, read carefully through this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reportportal/reportportal/wiki/Migration-to-ReportPortal-v.5.7.4"},"migration guide")," in order to avoid performance pitfalls."))}d.isMDXComponent=!0},81559:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"assets/images/5.7.4-b5089e49d5330b918adce5f000210157.png"}}]);