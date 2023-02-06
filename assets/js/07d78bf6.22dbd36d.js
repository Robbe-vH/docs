"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[747],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=s,g=p["".concat(l,".").concat(m)]||p[m]||c[m]||r;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5440:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(87462),s=(a(67294),a(3905));const r={sidebar_position:25,sidebar_label:"Most time-consuming test cases widget (TOP-20)"},i="Most time-consuming test cases widget (TOP-20)",o={unversionedId:"dashboards-and-widgets/MostTimeConsumingTestCasesWidgetTop20",id:"dashboards-and-widgets/MostTimeConsumingTestCasesWidgetTop20",title:"Most time-consuming test cases widget (TOP-20)",description:"Show the TOP 20 test cases with the highest duration in the last execution of the specified launch.",source:"@site/docs/dashboards-and-widgets/MostTimeConsumingTestCasesWidgetTop20.mdx",sourceDirName:"dashboards-and-widgets",slug:"/dashboards-and-widgets/MostTimeConsumingTestCasesWidgetTop20",permalink:"/docs/dashboards-and-widgets/MostTimeConsumingTestCasesWidgetTop20",draft:!1,editUrl:"https://github.com/reportportal/documentation/docs/dashboards-and-widgets/MostTimeConsumingTestCasesWidgetTop20.mdx",tags:[],version:"current",sidebarPosition:25,frontMatter:{sidebar_position:25,sidebar_label:"Most time-consuming test cases widget (TOP-20)"},sidebar:"defaultSidebar",previous:{title:"Table Component health check",permalink:"/docs/dashboards-and-widgets/TableComponentHealthCheck"},next:{title:"Management board",permalink:"/docs/category/management-board"}},l={},d=[],u={toc:d};function c(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"most-time-consuming-test-cases-widget-top-20"},"Most time-consuming test cases widget (TOP-20)"),(0,s.kt)("p",null,"Show the TOP 20 test cases with the highest duration in the last execution of the specified launch."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Widget's parameters:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Test Status. Default value - Passed, Failed")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Launch name. Is required")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Include /Exclude  Before and After methods")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"View options: Bar view, Table view")),(0,s.kt)("li",{parentName:"ul"})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Widget view")),(0,s.kt)("p",null,"Table View"),(0,s.kt)("p",null,"The widget has a table view with the following data displayed:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Test Item name - link to the log of the last launch")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Test Status")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Test Duration")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Test Start Time  - date and time of the last run, displayed in 'time ago' format (i.e. \"10 minutes ago\")."))),(0,s.kt)("p",null,"On mouse hover, the system will display accurate start times."),(0,s.kt)("p",null,"Bar View"),(0,s.kt)("p",null,"Bar chart where:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"axis OY - Tests"),(0,s.kt)("li",{parentName:"ul"},"axsic OX - Duration")),(0,s.kt)("p",null,"Bar color specifies a color of execution.\nOn mouse hover, the system will display accurate start times."),(0,s.kt)("media-view",{thumbnail:a(45239),src:"https://youtu.be/tYaPUW9Uwmk",alt:"Most Time Consuming Test Cases Widget Video",type:"video"}),(0,s.kt)("media-view",{src:a(51190),alt:"Most Time Consuming Test Cases Table"}))}c.isMDXComponent=!0},45239:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/TheMostTimeConsumingTestCasesWidgetBar-bb4e2f18e1a8d08becdcf6db3213a393.png"},51190:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/TheMostTimeConsumingTestCasesWidgetTable-5db113fc836d4ec9d3541a49c2c1089c.png"}}]);