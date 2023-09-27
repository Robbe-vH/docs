"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9709],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),f=a,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:4,sidebar_label:"Version 5.7.2"},o="Version 5.7.2",l={unversionedId:"releases/Version5.7.2",id:"releases/Version5.7.2",title:"Version 5.7.2",description:"What's Changed:",source:"@site/docs/releases/Version5.7.2.md",sourceDirName:"releases",slug:"/releases/Version5.7.2",permalink:"/docs/releases/Version5.7.2",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/releases/Version5.7.2.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Version 5.7.2"},sidebar:"defaultSidebar",previous:{title:"Version 5.7.3",permalink:"/docs/releases/Version5.7.3"},next:{title:"Version 5.7.1",permalink:"/docs/releases/Version5.7.1"}},s={},u=[{value:"What&#39;s Changed:",id:"whats-changed",level:2},{value:"New features",id:"new-features",level:2},{value:"New plugins",id:"new-plugins",level:2},{value:"Small but nice updates",id:"small-but-nice-updates",level:2},{value:"Technical updates",id:"technical-updates",level:2},{value:"Logs into Elastic",id:"logs-into-elastic",level:2},{value:"New Contributors",id:"new-contributors",level:2},{value:"Bugfixing:",id:"bugfixing",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"version-572"},"Version 5.7.2"),(0,a.kt)("h2",{id:"whats-changed"},"What's Changed:"),(0,a.kt)("p",null,"ReportPortal Release 5.7.2 aimed on enabling log messages to be saved into ElasticSearch"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We now save logs into 2 sources: DB and Elastic (via DataStreams)")),(0,a.kt)("h2",{id:"new-features"},"New features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A possibility to see all unique errors for a launch (click the launch name and see tab Unique Errors on the top"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/reportportal/reportportal/issues/1268"},"#1268"),". Support of Azure SAML authorization")),(0,a.kt)("h2",{id:"new-plugins"},"New plugins"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/reportportal/plugin-bts-jira-cloud/packages/1366483"},"Jira Cloud")," plugin for posting new bugs into Jira Cloud"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/reportportal/plugin-bts-azure/packages/1366495"},"Azure DevOps")," plugin for posting new bugs into ADO Bug tracking")),(0,a.kt)("h2",{id:"small-but-nice-updates"},"Small but nice updates"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"New design for Make decision modal (previously Edit defect modal)"),(0,a.kt)("li",{parentName:"ul"},"Help & Support functionality for newly deployed instances"),(0,a.kt)("li",{parentName:"ul"},"Additional configuration for Similar \u201cTo Investigate\u201d functionality (\u201cMin Should Match\u201d)"),(0,a.kt)("li",{parentName:"ul"},"Default State for Auto-Analysis is ON")),(0,a.kt)("h2",{id:"technical-updates"},"Technical updates"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Performance improvements (powerful as a hell)"),(0,a.kt)("li",{parentName:"ul"},"Functionality to configure virtual hosts in RabbitMQ for Analyzer")),(0,a.kt)("h2",{id:"logs-into-elastic"},"Logs into Elastic"),(0,a.kt)("p",null,"With the version 5.7.2 we bring a fundamental change for ReportPortal to store and manage test logs inside Elastic (via Data Streams).\nThe transition of full logging to elastic will consist of 2 steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"version 5.7.2 introduces double logging: both in PG Database and Elastic in parallel"),(0,a.kt)("li",{parentName:"ul"},"version 5.8 switch off database logging for logs and will store logs only inside Elastic")),(0,a.kt)("p",null,"The release timeline between 5.7.2 and 5.8 will be about 3 months.\nthis period will be enough for the vast of project to generate enough logs history inside elastic, and by switching to version 5.8 after 5.7.2 will eliminate the need for the data migration efforts.\nWhich means, that if you update to version 5.7.2, use it for 3-4 months before version 5.8, and then update to version 5.8 once it available, there will no  any effort required to do the migration. Since all logs will already be stored in Elastic.\nAlong with version 5.8 we will distribute migration script and instructions for data migration. So that you can easily migration from early 5.x version.\nThe reason of the switch and performance results will be a subject of separate article.\nIn a few words: it reduces the DB footprint in almost x10 times, improves speed of logging, and minimizes computation power to clean-up data. And  also brings Full text search capabilities."),(0,a.kt)("h2",{id:"new-contributors"},"New Contributors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@raikbitters made their first contribution in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/reportportal/reportportal/pull/1749"},"#1749")),(0,a.kt)("li",{parentName:"ul"},"@tsteenbe made their first contribution in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/reportportal/reportportal/pull/1757"},"#1757"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/reportportal/reportportal/compare/5.7.1...5.7.2"},"5.7.1...5.7.2")),(0,a.kt)("h2",{id:"bugfixing"},"Bugfixing:"),(0,a.kt)("p",null,'Bug connected to filtering by attributes with "any" and "without any" conditions was fixed'))}d.isMDXComponent=!0}}]);