"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[77810],{4227:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=t(85893),n=t(11151);const i={sidebar_position:3,sidebar_label:"How to avoid local execution reported into project space"},r="How to avoid local execution reported into project space",c={id:"issues-troubleshooting/HowToAvoidLocalExecutionReportedIntoProjectSpace",title:"How to avoid local execution reported into project space",description:"Option 1:",source:"@site/docs/issues-troubleshooting/HowToAvoidLocalExecutionReportedIntoProjectSpace.md",sourceDirName:"issues-troubleshooting",slug:"/issues-troubleshooting/HowToAvoidLocalExecutionReportedIntoProjectSpace",permalink:"/docs/issues-troubleshooting/HowToAvoidLocalExecutionReportedIntoProjectSpace",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/issues-troubleshooting/HowToAvoidLocalExecutionReportedIntoProjectSpace.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"How to avoid local execution reported into project space"},sidebar:"docs",previous:{title:"Issues with JIRA bug tracking system: how to resolve",permalink:"/docs/issues-troubleshooting/IssuesWithJIRABugTrackingSystemHowToResolve"},next:{title:"How to add a test stack trace to a description automatically",permalink:"/docs/issues-troubleshooting/HowToAddATestStackTraceToADescriptionAutomatically"}},l={},a=[];function d(e){const o={admonition:"admonition",code:"code",em:"em",h1:"h1",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"how-to-avoid-local-execution-reported-into-project-space",children:"How to avoid local execution reported into project space"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"Option 1:"})}),"\n",(0,s.jsx)(o.p,{children:"Use a specific attribute for launches, which should represent the state."}),"\n",(0,s.jsx)(o.p,{children:"Create filters using those attributes. Build widgets and dashboards, based on those attributes."}),"\n",(0,s.jsx)(o.p,{children:"You can add those additional attributes via the CI command line."}),"\n",(0,s.jsx)(o.p,{children:"So, only Jenkins will generate launches with those attributes."}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"Option 2:"})}),"\n",(0,s.jsxs)(o.p,{children:["Put ",(0,s.jsx)(o.code,{children:"rp.mode=debug"})," in all ",(0,s.jsx)(o.code,{children:"reportportal.properties"})," files."]}),"\n",(0,s.jsxs)(o.p,{children:["For Jenkins executions, overload this param via the command line as ",(0,s.jsx)(o.code,{children:"rp.mode=default"}),","]}),"\n",(0,s.jsx)(o.p,{children:"so that all local launches will be in debug, all Jenkins \u2013 in launches."}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"Option 3:"})}),"\n",(0,s.jsxs)(o.p,{children:["Combine ",(0,s.jsx)(o.em,{children:"option #2"})," and ",(0,s.jsx)(o.em,{children:"option #3"}),", in the launch name."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.code,{children:"rp.launch=xxx"})," saved in all ",(0,s.jsx)(o.code,{children:"reportportal.properties"})," files."]}),"\n",(0,s.jsxs)(o.p,{children:["For Jenkins executions, overload this param via the command line as ",(0,s.jsx)(o.code,{children:"rp.launch=yyy"})]}),"\n",(0,s.jsxs)(o.p,{children:["The auto-analysis will use only ",(0,s.jsx)(o.code,{children:"yyy"})," launches for review."]}),"\n",(0,s.jsxs)(o.p,{children:["Use filter, based on your ",(0,s.jsx)(o.code,{children:"yyy"})," name for widgets."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"Option 4:"})}),"\n",(0,s.jsxs)(o.p,{children:["The same like ",(0,s.jsx)(o.em,{children:"option 2"}),", but with ",(0,s.jsx)(o.code,{children:"rp.enable=false|true"})]}),"\n",(0,s.jsx)(o.p,{children:"This will turn off reporting for local launches"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"Option 5:"})}),"\n",(0,s.jsxs)(o.p,{children:["Set all users on the project with the Role ",(0,s.jsx)(o.code,{children:"Operator"}),". This role can\u2019t report data into RP."]}),"\n",(0,s.jsx)(o.p,{children:"Create an internal user for Jenkins executions, set him/her as a PROJECT MANAGER role."}),"\n",(0,s.jsx)(o.p,{children:"This will make it possible to create launches only for Jenkins users"}),"\n",(0,s.jsx)(o.admonition,{type:"note",children:(0,s.jsx)(o.p,{children:"It is also possible to combine all those options at the same time."})})]})}function p(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);