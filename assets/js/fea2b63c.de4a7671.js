"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3938],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),y=n,f=d["".concat(s,".").concat(y)]||d[y]||p[y]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4621:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:3,sidebar_label:"Feature overview"},i="Feature overview",l={unversionedId:"quality-gates/FeatureOverview",id:"quality-gates/FeatureOverview",title:"Feature overview",description:"Quality Gate analysis provides capabilities to speed up CI/CD pipeline by sending auto-feedback to your CI/CD tools. ReportPortal assesses the build quality and sends auto feedback to CI/CD.",source:"@site/docs/quality-gates/FeatureOverview.md",sourceDirName:"quality-gates",slug:"/quality-gates/FeatureOverview",permalink:"/docs/quality-gates/FeatureOverview",draft:!1,editUrl:"https://github.com/reportportal/documentation/docs/quality-gates/FeatureOverview.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Feature overview"},sidebar:"defaultSidebar",previous:{title:"How to install Quality Gates",permalink:"/docs/quality-gates/HowToInstallQualityGates"},next:{title:"Upload Quality Gate to ReportPortal",permalink:"/docs/quality-gates/UploadQualityGateToReportPortal"}},s={},u=[],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"feature-overview"},"Feature overview"),(0,n.kt)("p",null,"Quality Gate analysis provides capabilities to speed up CI/CD pipeline by sending auto-feedback to your CI/CD tools. ReportPortal assesses the build quality and sends auto feedback to CI/CD."),(0,n.kt)("p",null,"Quality Gates plugin adds to ReportPortal possibilities:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"to create quality rules based on general test automation KPI: number of executed tests and executed tests, failure rate, failure of critical components, number of issues in completed tests, number of essential issues in the critical parts, new failures & new errors in the build"),(0,n.kt)("li",{parentName:"ul"},"run Quality Gates analysis for build and view build report that helps to troubleshoot issues in the build"),(0,n.kt)("li",{parentName:"ul"},"automatically send Quality Gates status to CI/CD.")))}p.isMDXComponent=!0}}]);