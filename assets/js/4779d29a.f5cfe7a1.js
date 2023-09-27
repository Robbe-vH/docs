"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[110],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=o,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},25025:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:25,sidebar_label:"Version 4.3"},i="Version 4.2.0",s={unversionedId:"releases/Version4.3",id:"releases/Version4.3",title:"Version 4.2.0",description:"Features",source:"@site/docs/releases/Version4.3.md",sourceDirName:"releases",slug:"/releases/Version4.3",permalink:"/docs/releases/Version4.3",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/releases/Version4.3.md",tags:[],version:"current",sidebarPosition:25,frontMatter:{sidebar_position:25,sidebar_label:"Version 4.3"},sidebar:"defaultSidebar",previous:{title:"Version 5.0RC",permalink:"/docs/releases/Version5.0RC"},next:{title:"Version 4.2.0",permalink:"/docs/releases/Version4.2.0"}},l={},p=[{value:"Features",id:"features",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Bugs",id:"bugs",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"version-420"},"Version 4.2.0"),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/reportportal/reportportal/issues/442"},"#442")," Added a link to the test item which have been used by Analyzer for decision on History of Actions (Log view);")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Previous Analyzer is back (choose pre-set Classic)"))),(0,o.kt)("h2",{id:"improvements"},"Improvements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reportportal/reportportal/issues/452"},"#452")," Added possibility to share with a quick filter on All launches by link;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reportportal/reportportal/issues/427"},"#427"),"  Allowed to set autoAnalyzed flag via API;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reportportal/reportportal/issues/375"},"#375")," Added option ",(0,o.kt)("em",{parentName:"li"},"with/without methods")," to Most failed/ flaky tests cases widgets;"),(0,o.kt)("li",{parentName:"ul"},"Performance optimization for Latest Launches;")),(0,o.kt)("h2",{id:"bugs"},"Bugs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reportportal/reportportal/issues/440"},"#440")," Not getting any data on widget when selecting Start Time in filter"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reportportal/reportportal/issues/436"},"#436")," Jira integration: Bug priority is always ",(0,o.kt)("inlineCode",{parentName:"li"},"Minor"))),(0,o.kt)("p",null,"All issues and features are in milestone ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reportportal/reportportal/milestone/21?closed=1"},"4.3")))}m.isMDXComponent=!0}}]);