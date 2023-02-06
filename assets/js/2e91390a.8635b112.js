"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9764],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,b=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return a?n.createElement(b,o(o({ref:t},c),{},{components:a})):n.createElement(b,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<s;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2331:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const s={sidebar_position:14,sidebar_label:"Most failed test-cases table (TOP-20)"},o="Most failed test-cases table (TOP-20)",i={unversionedId:"dashboards-and-widgets/MostFailedTestCasesTableTop20",id:"dashboards-and-widgets/MostFailedTestCasesTableTop20",title:"Most failed test-cases table (TOP-20)",description:"The widget contains a table with statistical information about the TOP-20 most problematic test cases.",source:"@site/docs/dashboards-and-widgets/MostFailedTestCasesTableTop20.mdx",sourceDirName:"dashboards-and-widgets",slug:"/dashboards-and-widgets/MostFailedTestCasesTableTop20",permalink:"/docs/dashboards-and-widgets/MostFailedTestCasesTableTop20",draft:!1,editUrl:"https://github.com/reportportal/documentation/docs/dashboards-and-widgets/MostFailedTestCasesTableTop20.mdx",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14,sidebar_label:"Most failed test-cases table (TOP-20)"},sidebar:"defaultSidebar",previous:{title:"Unique bugs table",permalink:"/docs/dashboards-and-widgets/UniqueBugsTable"},next:{title:"Failed cases trend chart",permalink:"/docs/dashboards-and-widgets/FailedCasesTrendChart"}},l={},d=[],c={toc:d};function u(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"most-failed-test-cases-table-top-20"},"Most failed test-cases table (TOP-20)"),(0,r.kt)("p",null,"The widget contains a table with statistical information about the TOP-20 most problematic test cases."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Widget's parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The widget criteria are as follows: Failed, Skipped, Product Bug, Automation Bug, System Issue, No Defect. Failed is selected by default.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Launches count: 2-150. By default, "Launches count" is 30.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Launch name: Is required.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Include /Exclude  Before and After methods"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Widget view")),(0,r.kt)("p",null,"The widget has a table view with the following data displayed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Test Item name - link to the Step level of the last launch"),(0,r.kt)("li",{parentName:"ul"},"Failed - count of found failed results"),(0,r.kt)("li",{parentName:"ul"},"Last failure - date and time of the last run, when the test item was failed, displayed in 'time ago' format (i.e. \"10 minutes ago\").\nOn mouse hover, the system will display accurate start times.")),(0,r.kt)("media-view",{src:a(78894),alt:"Most Failure Test Cases Table Widget"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:"),'\nThe widget contains statistics of the most problematic test cases in all launches, except "IN PROGRESS" and "INTERRUPTED" launches.')))}u.isMDXComponent=!0},78894:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/MostFailureTestCasesTable-26e134e53c6f0dd14e9a20bfec285728.png"}}]);