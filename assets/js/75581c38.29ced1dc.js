"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[130],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||i;return t?n.createElement(m,a(a({ref:r},u),{},{components:t})):n.createElement(m,a({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},37410:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const i={sidebar_position:16,sidebar_label:"Version 5.3.1"},a="Version 5.3.1",s={unversionedId:"releases/Version5.3.1.",id:"releases/Version5.3.1.",title:"Version 5.3.1",description:"Bug fixing",source:"@site/docs/releases/Version5.3.1..md",sourceDirName:"releases",slug:"/releases/Version5.3.1.",permalink:"/docs/releases/Version5.3.1.",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/releases/Version5.3.1..md",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16,sidebar_label:"Version 5.3.1"},sidebar:"defaultSidebar",previous:{title:"Version 5.3.2",permalink:"/docs/releases/Version5.3.2"},next:{title:"Version 5.3.0",permalink:"/docs/releases/Version5.3.0"}},l={},c=[{value:"Bug fixing",id:"bug-fixing",level:2}],u={toc:c},p="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"version-531"},"Version 5.3.1"),(0,o.kt)("h2",{id:"bug-fixing"},"Bug fixing"),(0,o.kt)("p",null,"[Performance]","High CPU and Disk IO utilization of PostgreSQL queries"),(0,o.kt)("p",null,"[Performance]"," Responce time degradation of the History Table on Steps Level due to high cpu utilization of the DB query"),(0,o.kt)("p",null,"[Performance][PreProd]"," High responce time(up to 3 min) of the Most Failed TC Widget loading"),(0,o.kt)("p",null,"Fix for launches purging job"))}f.isMDXComponent=!0}}]);