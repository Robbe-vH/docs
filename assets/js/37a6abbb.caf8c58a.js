"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[742],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,f=p["".concat(l,".").concat(h)]||p[h]||m[h]||i;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},41146:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:2,sidebar_label:'Search for the similar "To investigate" items'},s='Search for the similar "To investigate" items',o={unversionedId:"analysis/SearchForTheSimilarToInvestigateItems",id:"analysis/SearchForTheSimilarToInvestigateItems",title:'Search for the similar "To investigate" items',description:"Use case:",source:"@site/docs/analysis/SearchForTheSimilarToInvestigateItems.mdx",sourceDirName:"analysis",slug:"/analysis/SearchForTheSimilarToInvestigateItems",permalink:"/docs/analysis/SearchForTheSimilarToInvestigateItems",draft:!1,editUrl:"https://github.com/reportportal/documentation/docs/analysis/SearchForTheSimilarToInvestigateItems.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:'Search for the similar "To investigate" items'},sidebar:"defaultSidebar",previous:{title:"Auto-Analysis of launches",permalink:"/docs/analysis/AutoAnalysisOfLaunches"},next:{title:"Copy results from a previous run",permalink:"/docs/analysis/CopyResultsFromAPreviousRun"}},l={},c=[],u={toc:c};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"search-for-the-similar-to-investigate-items"},'Search for the similar "To investigate" items'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Use case:")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Situation:")," Analyzer has completed its work and marked known issues with defect types."),(0,a.kt)("p",null,'But there are a lot of failures with a similar unknown reason in the run. All such items have "To investigate" defect type.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem:")," A user should check and analyze all failed items."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution:")),(0,a.kt)("p",null,'A user is on All launches, he clicks on "To investigate" and opens a list with items. When a user clicks on a pencil next to a defect type, the system opens the ',(0,a.kt)("a",{parentName:"p",href:"./ManualAnalysis#make-decision-modal-redesign"},'"Make decision" modal'),'. In this modal a user can see all items with "To investigate" defect type and the same failure reason.'),(0,a.kt)("p",null,'There are 3 options for search the similar "To investigate" items on the Step level:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Current item only"),(0,a.kt)("li",{parentName:"ul"},'Similar "To investigate" in the launch & current item'),(0,a.kt)("li",{parentName:"ul"},'Similar "To investigate" in 10 launches & current item')),(0,a.kt)("p",null,'There are 4 options for search the similar "To investigate" items on the Log level:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Current item only"),(0,a.kt)("li",{parentName:"ul"},'Similar "To investigate" in the launch & current item'),(0,a.kt)("li",{parentName:"ul"},'Similar "To investigate" in 10 launches & current item'),(0,a.kt)("li",{parentName:"ul"},'"To investigate" from the history line & current item')),(0,a.kt)("p",null,"If launches are filtered by filter on All Launches page, then addition option ",(0,a.kt)("inlineCode",{parentName:"p"},'Similar "To investigate" in the Filter & current item')," appears on the Step and Log levels."),(0,a.kt)("media-view",{src:r(96144),alt:"All options for search the similar To investigate items"}),(0,a.kt)("p",null,"A user can select all identical failures and perform the bulk operation for them."),(0,a.kt)("media-view",{src:r(5980),alt:"Bulk operation for similar To Investigate items"}))}m.isMDXComponent=!0},96144:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"assets/images/SearchSimilarToInvestigate1-962ea90b2eeefa6bd6da0750a9608e65.png"},5980:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"assets/images/SearchSimilarToInvestigate2-1e4fcae71c9f8a3bbc3ecc1a637ec6a2.png"}}]);