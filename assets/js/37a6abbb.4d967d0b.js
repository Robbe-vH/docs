"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[742],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=i,f=u["".concat(l,".").concat(h)]||u[h]||p[h]||n;return r?a.createElement(f,o(o({ref:t},m),{},{components:r})):a.createElement(f,o({ref:t},m))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},41146:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=r(87462),i=(r(67294),r(3905));const n={sidebar_position:2,sidebar_label:'Search for the similar "To investigate" items'},o='Search for the similar "To investigate" items',s={unversionedId:"analysis/SearchForTheSimilarToInvestigateItems",id:"analysis/SearchForTheSimilarToInvestigateItems",title:'Search for the similar "To investigate" items',description:"Let's consider below an example of ML-driven failure triage in ReportPortal.",source:"@site/docs/analysis/SearchForTheSimilarToInvestigateItems.mdx",sourceDirName:"analysis",slug:"/analysis/SearchForTheSimilarToInvestigateItems",permalink:"/docs/analysis/SearchForTheSimilarToInvestigateItems",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/analysis/SearchForTheSimilarToInvestigateItems.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:'Search for the similar "To investigate" items'},sidebar:"defaultSidebar",previous:{title:"Auto-Analysis of launches",permalink:"/docs/analysis/AutoAnalysisOfLaunches"},next:{title:"ML Suggestions",permalink:"/docs/analysis/MLSuggestions"}},l={},c=[],m={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"search-for-the-similar-to-investigate-items"},'Search for the similar "To investigate" items'),(0,i.kt)("p",null,"Let's consider below an example of ML-driven failure triage in ReportPortal."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Use case:")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Situation:")," Analyzer has completed its work and marked known issues with defect types."),(0,i.kt)("p",null,'But there are a lot of failures with a similar unknown reason in the run. All such items have "To investigate" defect type.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Problem:")," A user should check and analyze all failed items."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Solution:")),(0,i.kt)("p",null,'A user is on All launches, he clicks on "To investigate" and opens a list with items. When a user clicks on a pencil next to a defect type, the system opens the ',(0,i.kt)("a",{parentName:"p",href:"./ManualAnalysis#make-decision-modal-redesign"},'"Make decision" modal'),'. In this modal a user can see all items with "To investigate" defect type and the same failure reason.'),(0,i.kt)("media-view",{thumbnail:r(48312),src:"https://youtu.be/FyDdMX_PVyc",alt:"Search for the similar To investigate items",type:"video"}),(0,i.kt)("p",null,'There are 3 options for search the similar "To investigate" items on the Step level:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Current item only"),(0,i.kt)("li",{parentName:"ul"},'Similar "To investigate" in the launch & current item'),(0,i.kt)("li",{parentName:"ul"},'Similar "To investigate" in 10 launches & current item')),(0,i.kt)("p",null,'There are 4 options for search the similar "To investigate" items on the Log level:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Current item only"),(0,i.kt)("li",{parentName:"ul"},'Similar "To investigate" in the launch & current item'),(0,i.kt)("li",{parentName:"ul"},'Similar "To investigate" in 10 launches & current item'),(0,i.kt)("li",{parentName:"ul"},'"To investigate" from the history line & current item')),(0,i.kt)("p",null,"If launches are filtered by filter on All Launches page, then addition option ",(0,i.kt)("inlineCode",{parentName:"p"},'Similar "To investigate" in the Filter & current item')," appears on the Step and Log levels."),(0,i.kt)("media-view",{src:r(96144),alt:"Search for the similar To investigate items for the faster bug triage"}),(0,i.kt)("p",null,"A user can select all identical failures and perform the bulk operation for them."),(0,i.kt)("media-view",{src:r(5980),alt:"Bulk operation for similar To Investigate items"}))}p.isMDXComponent=!0},48312:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a=r.p+"assets/images/SearchForTheSimilarToInvestigateItems-0ae106ff5183f746b164f09339e4210c.png"},96144:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a=r.p+"assets/images/SearchSimilarToInvestigate1-962ea90b2eeefa6bd6da0750a9608e65.png"},5980:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a=r.p+"assets/images/SearchSimilarToInvestigate2-1e4fcae71c9f8a3bbc3ecc1a637ec6a2.png"}}]);