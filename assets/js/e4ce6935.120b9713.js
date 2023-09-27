"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[666],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=s,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},40363:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),s=(r(67294),r(3905));const a={sidebar_position:4,sidebar_label:"Rich artifacts in test reports"},o="Rich artifacts in test reports",i={unversionedId:"features/RichArtifactsInTestReports",id:"features/RichArtifactsInTestReports",title:"Rich artifacts in test reports",description:"Test execution report in ReportPortal may contain extra details in addition to the standard test results (passed/failed status).",source:"@site/docs/features/RichArtifactsInTestReports.md",sourceDirName:"features",slug:"/features/RichArtifactsInTestReports",permalink:"/docs/features/RichArtifactsInTestReports",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/features/RichArtifactsInTestReports.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Rich artifacts in test reports"},sidebar:"defaultSidebar",previous:{title:"AI failure reason detection",permalink:"/docs/features/AIFailureReasonDetection"},next:{title:"Real-time reporting",permalink:"/docs/features/RealTimeReporting"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,s.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"rich-artifacts-in-test-reports"},"Rich artifacts in test reports"),(0,s.kt)("p",null,"Test execution report in ReportPortal may contain extra details in addition to the standard test results (passed/failed status)."),(0,s.kt)("p",null,"These additional artifacts in test reports can consist of:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"1. Logs.")),(0,s.kt)("p",null,"Logs can include error messages that are very helpful for test failure analysis. With logs, it is possible to understand the root cause and set the defect type properly."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"2. Screenshots.")),(0,s.kt)("p",null,"You can see the image of the data displayed on the screen during the test run. Screenshots make the debugging process easier and may give insights into why this issue occurred."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"3. Video recordings.")),(0,s.kt)("p",null,"Logs in ReportPortal can have video recordings attached as well. A video shows the exact screen states. Using this artifact, you will be able to troubleshoot problems more quickly."),(0,s.kt)("p",null,"Besides, ReportPortal also supports integration with Sauce Labs via corresponding plugin so that it is possible to watch videos of test executions right in the ReportPortal."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"4. Network traffic.")),(0,s.kt)("p",null,"These are details about the network calls performed while the test was running (requests and responses)."),(0,s.kt)("p",null,"You can send all the artifacts to ReportPortal as attachments and use them to simplify defect triage, to replicate and debug issues, to find performance and network-related issues, to comprehend the context in which certain problems occurred."))}d.isMDXComponent=!0}}]);