"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8734],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),y=r,f=d["".concat(o,".").concat(y)]||d[y]||u[y]||s;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},32474:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const s={sidebar_position:7,sidebar_label:"Pattern Analysis"},i="Pattern Analysis",l={unversionedId:"analysis/PatternAnalysis",id:"analysis/PatternAnalysis",title:"Pattern Analysis",description:"Pattern analysis is a feature that helps you to speed up the process of finding common patterns in error logs.",source:"@site/docs/analysis/PatternAnalysis.mdx",sourceDirName:"analysis",slug:"/analysis/PatternAnalysis",permalink:"/docs/analysis/PatternAnalysis",draft:!1,editUrl:"https://github.com/reportportal/documentation/docs/analysis/PatternAnalysis.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Pattern Analysis"},sidebar:"defaultSidebar",previous:{title:"Manual Analysis",permalink:"/docs/analysis/ManualAnalysis"},next:{title:"Unique Error Analysis",permalink:"/docs/analysis/UniqueErrorAnalysis"}},o={},c=[{value:"Types of Pattern Analysis",id:"types-of-pattern-analysis",level:2},{value:"Use case 1:",id:"use-case-1",level:2},{value:"Use case 2:",id:"use-case-2",level:2}],p={toc:c};function u(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pattern-analysis"},"Pattern Analysis"),(0,r.kt)("p",null,"Pattern analysis is a feature that helps you to speed up the process of finding common patterns in error logs."),(0,r.kt)("h2",{id:"types-of-pattern-analysis"},"Types of Pattern Analysis"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"String")," \u2013 any problem phrase."),(0,r.kt)("media-view",{src:a(38394),alt:"Pattern Analysis String rule"}),(0,r.kt)("media-view",{src:a(42478),alt:"Pattern Analysis String in the logs"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Regex")," \u2013 regular expression."),(0,r.kt)("media-view",{src:a(74098),alt:"Pattern Analysis Regex rule"}),(0,r.kt)("media-view",{src:a(88783),alt:"Pattern Analysis Regex in the logs"}),(0,r.kt)("h2",{id:"use-case-1"},"Use case 1:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Problem:")," A user knows the several common problems why test cases fail. During tests run a lot of test have failed. A user need to check logs a of tests to know by what reason test cases have failed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solution:")," Create a pattern rules for all common reasons which contains a problem phrase (for example: ",(0,r.kt)("em",{parentName:"p"},'"Expected status code <404> but > was <500>"'),' or "',(0,r.kt)("em",{parentName:"p"},'Null response"'),") or with Regex query. Switch On a pattern analysis.\nLaunch a test run.\nSo that the ReportPortal systems finds all failed items which have known patterns in error logs and marks them with a label with pattern name.\nFind all items failed by the same reason by choosing a filter by Pattern Name on the Step view.\nAdd The most popular pattern widget (TOP-20) and track the TOP-20 the most popular reason of test failing in the build."),(0,r.kt)("media-view",{thumbnail:a(26356),src:"https://youtu.be/5YaN85x6_hc",alt:"Pattern Analysis launched Automatically",type:"video"}),(0,r.kt)("h2",{id:"use-case-2"},"Use case 2:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Problem:")," Test run has finished. A user found that more than 3 items have failed by the same reason. And he want to find all such items."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solution:")," Create a new pattern rule on Project Settings. Launch a pattern analysis manually for one launch.\nname.\nFind all items failed by the same reason by choosing a filter by Pattern Name on the Step view."),(0,r.kt)("media-view",{thumbnail:a(22421),src:"https://youtu.be/XgJr5Nm7OrI",alt:"Pattern Analysis launched Manually",type:"video"}))}u.isMDXComponent=!0},26356:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/AutoPattern-0f6614e4ff6884a8f668050e9df35f74.png"},22421:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/ManualPattern-7d5d735a281f7fb9fe6e780efac8a2e5.png"},74098:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/PatternAnalysisRegex1-cbd4be900ccc8cc6cc5e2e9f1cde062d.png"},88783:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/PatternAnalysisRegex2-45144c031833987067b21288979df1a8.png"},38394:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/PatternAnalysisString1-c088cdfff90c9ac38290b8e4ecdcaa4a.png"},42478:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/PatternAnalysisString2-96794cb8a6526a9a6f7d41547ac58707.png"}}]);