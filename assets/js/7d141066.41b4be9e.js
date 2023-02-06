"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3931],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||s;return r?o.createElement(h,a(a({ref:t},u),{},{components:r})):o.createElement(h,a({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22699:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const s={sidebar_position:2,sidebar_label:"Issues with JIRA bug tracking system: how to resolve"},a="Issues with JIRA bug tracking system: how to resolve",i={unversionedId:"issues-troubleshooting/IssuesWithJIRABugTrackingSystemHowToResolve",id:"issues-troubleshooting/IssuesWithJIRABugTrackingSystemHowToResolve",title:"Issues with JIRA bug tracking system: how to resolve",description:"In case user is connecting to JIRA system and gets the error like",source:"@site/docs/issues-troubleshooting/IssuesWithJIRABugTrackingSystemHowToResolve.md",sourceDirName:"issues-troubleshooting",slug:"/issues-troubleshooting/IssuesWithJIRABugTrackingSystemHowToResolve",permalink:"/docs/issues-troubleshooting/IssuesWithJIRABugTrackingSystemHowToResolve",draft:!1,editUrl:"https://github.com/reportportal/documentation/docs/issues-troubleshooting/IssuesWithJIRABugTrackingSystemHowToResolve.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Issues with JIRA bug tracking system: how to resolve"},sidebar:"defaultSidebar",previous:{title:"Tuning CI tool",permalink:"/docs/issues-troubleshooting/TuningCITool"},next:{title:"How to avoid local execution reported into project space",permalink:"/docs/issues-troubleshooting/HowToAvoidLocalExecutionReportedIntoProjectSpace"}},l={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"issues-with-jira-bug-tracking-system-how-to-resolve"},"Issues with JIRA bug tracking system: how to resolve"),(0,n.kt)("p",null,'In case user is connecting to JIRA system and gets the error like\n"Impossible interact with external system.<name of current user\'s project>", there\nare some reasons could cause the issue.'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"First"),", verify that the link to JIRA system is correct. There are some variants\nare possible, for instance:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://jira.company.com/jira\nhttps://jiraeu.company.com\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Second"),", verify the project name is correct. Please fill in Project name field with\nproject key value, e.g. project ABC-DEF has key ABCDEF."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Third"),", verify username and password data. Make sure, that login name and not email\nis in the username field. In case all the data above is correct, but the error\nappears again, check whether user's credentials to JIRA are not expired.\nAs far as JIRA sends the request in html format, we are not able to display the real\nreason of error.\nTo check and/or resolve the issue, please do the next steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open JIRA page"),(0,n.kt)("li",{parentName:"ol"},"Login JIRA with domain credentials using basic authorization (i.e., fill in user's\nlogin name and password into the fields)"),(0,n.kt)("li",{parentName:"ol"},"Submit the login form\nScreen with CAPTCHA should appears"),(0,n.kt)("li",{parentName:"ol"},"Enter the symbols"),(0,n.kt)("li",{parentName:"ol"},"Submit the credentials again"),(0,n.kt)("li",{parentName:"ol"},"Now try to establish the connection to JIRA on ReportPortal project.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Fourth"),", maybe the connection to the jira instance requires a certificate, in this\ncase you need to import the certificate inside the jira container:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"docker exec -it reportportal_jira_1 ash # go inside shell"),(0,n.kt)("li",{parentName:"ol"},"cd /usr/lib/jvm/java-1.8-openjdk/jre/lib/security/"),(0,n.kt)("li",{parentName:"ol"},"wget url://to/your/foo.cert"),(0,n.kt)("li",{parentName:"ol"},'keytool -importcert -noprompt -file foo.crt -alias "JIRA CERT" -keystore cacerts -storepass abc123 (default password for keystore: changeit)'),(0,n.kt)("li",{parentName:"ol"},"exit and restart the docker jira"),(0,n.kt)("li",{parentName:"ol"},"Now try to establish the connection to JIRA on ReportPortal project.")),(0,n.kt)("p",null,"or"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"docker cp cert.der reportportal_jira_1:/cert.der"),(0,n.kt)("li",{parentName:"ol"},"docker exec -t -i reportportal_jira_1 ./usr/lib/jvm/java-1.8-openjdk/jre/bin/keytool -import -alias rootcert -keystore /usr/lib/jvm/java-1.8-openjdk/jre/lib/security/cacerts -file /cert.der"),(0,n.kt)("li",{parentName:"ol"},"exit and restart the docker jira"),(0,n.kt)("li",{parentName:"ol"},"Now try to establish the connection to JIRA on ReportPortal project.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:"),"\nSSL instance of JIRA (even cloud version) can be accessed by JIRA API token, used instead of password."),(0,n.kt)("p",null,"If these didn't resolve your issues, please contact us."))}p.isMDXComponent=!0}}]);