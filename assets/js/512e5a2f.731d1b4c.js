"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8960],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),f=a,m=c["".concat(l,".").concat(f)]||c[f]||d[f]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},672:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:21,sidebar_label:"Version 5.2.0"},o="Version 5.2.0",s={unversionedId:"releases/Version5.2.0",id:"releases/Version5.2.0",title:"Version 5.2.0",description:"Small and nice updates",source:"@site/docs/releases/Version5.2.0.md",sourceDirName:"releases",slug:"/releases/Version5.2.0",permalink:"/docs/releases/Version5.2.0",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/releases/Version5.2.0.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21,sidebar_label:"Version 5.2.0"},sidebar:"defaultSidebar",previous:{title:"Version 5.2.1",permalink:"/docs/releases/Version5.2.1"},next:{title:"Version 5.1.0",permalink:"/docs/releases/Version5.1.0"}},l={},p=[{value:"Small and nice updates",id:"small-and-nice-updates",level:2},{value:"Bug fixing",id:"bug-fixing",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"version-520"},"Version 5.2.0"),(0,a.kt)("h2",{id:"small-and-nice-updates"},"Small and nice updates"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Expanded the list of possible statuses for Nested Steps (Passes, Failed, Skipped, Warn, Info)"),(0,a.kt)("li",{parentName:"ul"},"Nested steps names support Markdown on the Log view"),(0,a.kt)("li",{parentName:"ul"},"Added retry handling on the finish"),(0,a.kt)("li",{parentName:"ul"},"Added Test Case ID handling on the finish")),(0,a.kt)("h2",{id:"bug-fixing"},"Bug fixing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/reportportal/reportportal/issues/117"},"#117")," Fixed a bug with SauceLabs video"),(0,a.kt)("li",{parentName:"ul"},"Fixed a bug with mp4 and webm files downloading"),(0,a.kt)("li",{parentName:"ul"},"Fixed bug with IE (ReportPortal didn`t open in IE)")))}d.isMDXComponent=!0}}]);