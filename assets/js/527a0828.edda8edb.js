"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[104],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),k=s(n),c=i,d=k["".concat(p,".").concat(c)]||k[c]||m[c]||o;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=k;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},94696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={sidebar_position:5,sidebar_label:"Rally"},l="Rally",r={unversionedId:"plugins/Rally",id:"plugins/Rally",title:"Rally",description:"For Rally plugin installation please check documentation",source:"@site/docs/plugins/Rally.mdx",sourceDirName:"plugins",slug:"/plugins/Rally",permalink:"/docs/plugins/Rally",draft:!1,editUrl:"https://github.com/reportportal/documentation/docs/plugins/Rally.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Rally"},sidebar:"defaultSidebar",previous:{title:"Azure DevOps BTS",permalink:"/docs/plugins/AzureDevOpsBTS"},next:{title:"E-mail server",permalink:"/docs/plugins/EmailServer"}},p={},s=[{value:"Global RALLY integration",id:"global-rally-integration",level:2},{value:"Add new global RALLY integration",id:"add-new-global-rally-integration",level:3},{value:"Update global RALLY integration",id:"update-global-rally-integration",level:3},{value:"Remove global RALLY integration",id:"remove-global-rally-integration",level:3},{value:"Project RALLY integration",id:"project-rally-integration",level:2},{value:"Add new project RALLY integration",id:"add-new-project-rally-integration",level:3},{value:"Reset to project RALLY Integrations",id:"reset-to-project-rally-integrations",level:3},{value:"Post issue to Rally",id:"post-issue-to-rally",level:2},{value:"Link an issue with an issue in Rally",id:"link-an-issue-with-an-issue-in-rally",level:2}],u={toc:s};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rally"},"Rally"),(0,i.kt)("p",null,"For Rally plugin installation please check ",(0,i.kt)("a",{parentName:"p",href:"./ManagePlugins#upload-plugin"},"documentation")),(0,i.kt)("h2",{id:"global-rally-integration"},"Global RALLY integration"),(0,i.kt)("h3",{id:"add-new-global-rally-integration"},"Add new global RALLY integration"),(0,i.kt)("p",null,"If all projects on your instance are using the same RALLY  projects, you will be able to configure ",(0,i.kt)("strong",{parentName:"p"},"global integrations")," which will be applied on all projects."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in as ADMIN")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to Administrative > Plugins")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on RALLY plugin panel")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click on "Add integration" button')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill and confirm the authorization form"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"'Integration Name': <The name which you want to give to your integration> - should be unique\n'Link to BTS': <valid URL of bug tracking system>\n'Project ID in BTS': <project ID in bug tracking system>\n'Authorization Type': ApiKey (predefined)\n'ApiKey': <RALLY user apikey>\n")),(0,i.kt)("p",null,"After you have created a connection with the RALLY project, you can choose predefined RALLY ticket fields. These fields will be shown to you all the time when you post the issue in the RALLY."),(0,i.kt)("p",null,"This feature gives you the ability to choose which type you will post a ticket."),(0,i.kt)("p",null,"To choose a needed issue type and predefined field for the chosen issue, you should perform the following actions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click on "Configure" button')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose issue type from the drop-down")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check the needed fields and fill them in if necessary")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click on "Submit" button'))),(0,i.kt)("p",null,"Now team members on all your projects will be able to submit issues in RALLY. Options for Post Issue / Link issue are activated."),(0,i.kt)("p",null,'You can add more integrations by clicking on "Add integration"'),(0,i.kt)("p",null,"User can add several integrations, but with a different name to the ",(0,i.kt)("strong",{parentName:"p"},"one RALLY project"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Use case:")),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Situation:")," User wants to post to RALLY issues with type ",(0,i.kt)("strong",{parentName:"p"},"Defect")," and ",(0,i.kt)("strong",{parentName:"p"},"Task")," to the project NNN-MMM in RALLY. Is it possible?\nYes!"),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Solution:"),' Add two integrations to the project NNN-MMM in RALLY with names f.e. "Project -1" and "Project -2".\nAdd to the "Project -1" issue type ',(0,i.kt)("strong",{parentName:"p"},"Defect"),' and for "Project -2" - issue type ',(0,i.kt)("strong",{parentName:"p"},"Task"),".\nWhile posing issue procedure, choose integration with needed type.")),(0,i.kt)("h3",{id:"update-global-rally-integration"},"Update global RALLY integration"),(0,i.kt)("p",null,"If you need to edit RALLY integration authorization parameters, please perform actions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in as ADMIN")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to Administrative > Plugins")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on RALLY plugin panel")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on a tab with existing integration")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click on "Edit authorization" link')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Change "Integration name"')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Type your RALLY credentials")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Submit the form"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")),(0,i.kt)("p",{parentName:"blockquote"},'you can edit only "Integration name". If you need other changes, please submit new integration.')),(0,i.kt)("p",null,"If you need to edit fields which should be posted in RALLY, please perform actions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in as ADMIN")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to Administrative > Plugins")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on RALLY plugin panel")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on a tab with existing integration")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click on "Configure" button')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose issue type from the drop-down")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check the needed fields and fill them in if necessary")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click on "Submit" button'))),(0,i.kt)("h3",{id:"remove-global-rally-integration"},"Remove global RALLY integration"),(0,i.kt)("p",null,"If you need to remove RALLY integration, please perform actions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in as ADMIN")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to Administrative > Plugins")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on RALLY plugin panel")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on a tab with existing integration")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click on "Remove integration"')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Submit the action"))),(0,i.kt)("h2",{id:"project-rally-integration"},"Project RALLY integration"),(0,i.kt)("h3",{id:"add-new-project-rally-integration"},"Add new project RALLY integration"),(0,i.kt)("p",null,"If any project needs different RALLY configurations, you should unlink a project from Global configurations and add a project configuration. It means that now when a new global integration is added to the ReportPortal, it won't be applied to the unlinked project."),(0,i.kt)("p",null,"For that,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in as an ADMIN or Project Manager")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to Project Settings > Integrations")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on the RALLY integration panel")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click on "Unlink and setup manually" button')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill and confirm the authorization form"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"'Integration Name ': <The name which you want to give to your integration> - should be unique\n'Link to BTS': <valid URL of bug tracking system>\n'Project ID in BTS': <project ID in bug tracking system>            \n'Authorization Type': Basic (predefined)                  \n'BTS Username': <RALLY user name>                  \n'BTS Password': <RALLY user password>\n")),(0,i.kt)("p",null,"After you have created a connection with the RALLY project, you can choose predefined RALLY ticket fields. These fields will be shown to you all the time when you post the issue in the RALLY."),(0,i.kt)("p",null,"This feature gives you the ability to choose which type you will post a ticket with."),(0,i.kt)("p",null,"To choose a needed issue type and predefined field for the chosen issue, you should perform the following actions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click on "Configure" button')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose issue type from the drop-down")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check the needed fields and fill them in if necessary")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click on "Submit" button'))),(0,i.kt)("p",null,"Now team members on ",(0,i.kt)("strong",{parentName:"p"},"this project")," will be able to submit issues in RALLY. Options for Post Issue / Link issue are activated."),(0,i.kt)("p",null,'You can add more integrations by clicking on "Add integration" button.'),(0,i.kt)("h3",{id:"reset-to-project-rally-integrations"},"Reset to project RALLY Integrations"),(0,i.kt)("p",null,"If you want to delete project integrations with RALLY and link your project with global configurations, please perform actions described below:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in as an ADMIN or Project Manager")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to Project Settings > Integrations")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on the RALLY integration panel")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click on "Reset to global settings" button')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Confirm the action"))),(0,i.kt)("h2",{id:"post-issue-to-rally"},"Post issue to Rally"),(0,i.kt)("p",null,"Posting an issue to Rally means to create a new issue in Rally from ReportPortal and upload logs and attachments from an execution."),(0,i.kt)("p",null,"If you want to post a new issue to Rally, you need to have a project or global integration with Rally."),(0,i.kt)("media-view",{src:n(96722),alt:"Post issue in Rally"}),(0,i.kt)("p",null,"Post issue via Step view"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in to ReportPortal as Admin, PM, Member, Customer or Operator")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to a Step view")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose a needed item")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click on "Actions" button')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Choose "Post issue" option')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Fill in the "Post issue" form with valid data'))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"`BTS`: if you have configured BTS integrations, you will be able to choose between them\n`Integration name`: from the drop-down, you can choose any of integrations for chosen earlier BTS\n`Predefined fields`: fields which you choose on Project Settings/ or Plugins\n`Included data`: which data should be posted to BTS (attachments, logs, comments)\n`ApiKey`: user apikey\n")),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Submit the form")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A new issue will be posted in BTS with information from ReportPortal")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A label with issue ID will be added to the test item"))),(0,i.kt)("h2",{id:"link-an-issue-with-an-issue-in-rally"},"Link an issue with an issue in Rally"),(0,i.kt)("p",null,"Linking an issue with an issue in Rally means adding a clickable link to an existing issue in Rally from ReportPortal that will show a status of this issue."),(0,i.kt)("media-view",{src:n(71659),alt:"Link issue in Rally"}),(0,i.kt)("p",null,"Link issue via Step view"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in to ReportPortal as Admin, PM, Member, Customer or Operator")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to a Step view")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose a needed item")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click on "Actions" button')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Choose "Link issue" option')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Fill in the "Link issue" form with valid data'))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"`BTS`: if you have configured BTS integrations, you will be able to choose between them\n`Integration name`: from the drop-down, you can choose any of integrations for chosen earlier BTS\n`Link to issue`: a full link to the item in BTS\n`Issue ID`: information which will be displayed on the label in ReportPortal\n")),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Submit the form")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A label with issue ID will be added to the test item"))))}m.isMDXComponent=!0},71659:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/LinkIssueRally-8077973be92c9db74a312c671b5c442e.png"},96722:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/PostIssueRally-a17a1fa2722141708a943b19ffa7c8b6.png"}}]);