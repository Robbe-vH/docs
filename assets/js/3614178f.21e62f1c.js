"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52291],{23184:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var i=r(85893),n=r(11151);const t={sidebar_position:1,sidebar_label:"Version 24.1"},o="Version 24.1",l={id:"releases/Version24.1",title:"Version 24.1",description:"1. What's Changed:",source:"@site/docs/releases/Version24.1.md",sourceDirName:"releases",slug:"/releases/Version24.1",permalink:"/docs/releases/Version24.1",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/releases/Version24.1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Version 24.1"},sidebar:"docs",previous:{title:"Releases",permalink:"/docs/category/releases"},next:{title:"Version 23.2",permalink:"/docs/releases/Version23.2"}},a={},d=[{value:"1. What&#39;s Changed:",id:"1-whats-changed",level:2},{value:"2. Small Updates:",id:"2-small-updates",level:2},{value:"3. Technical Improvements:",id:"3-technical-improvements",level:2},{value:"4. Enhancements Based on Community Feedback:",id:"4-enhancements-based-on-community-feedback",level:2},{value:"5. CVE addressed:",id:"5-cve-addressed",level:2},{value:"6. Released versions",id:"6-released-versions",level:2},{value:"7. Link to Migration Guide:",id:"7-link-to-migration-guide",level:2}];function h(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"version-241",children:"Version 24.1"}),"\n",(0,i.jsx)(s.h2,{id:"1-whats-changed",children:"1. What's Changed:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsxs)(s.strong,{children:["New feature \u2013 ",(0,i.jsx)(s.a,{href:"/analysis/ImmediateAutoAnalysis",children:"Immediate Auto-Analysis"}),":"]}),"  ",(0,i.jsx)("br",{}),"\nThis feature employs Auto-Analysis based on specific test cases immediately after their completion for proactive issue investigation."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsxs)(s.strong,{children:["New feature \u2013 ",(0,i.jsx)(s.a,{href:"/analysis/ImmediatePatternAnalysis",children:"Immediate Pattern-Analysis"}),":"]}),"  ",(0,i.jsx)("br",{}),"\nNo more need to wait for the launch finish. Initiate Pattern Analysis immediately after completion of specific test cases."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsxs)(s.strong,{children:["New Integration \u2013 ",(0,i.jsx)(s.a,{href:"/plugins/GitLabBTS",children:"Gitlab Plugin"}),":"]}),(0,i.jsx)("br",{}),"\nNew BTS plugin expanding ReportPortal BTS integration options for streamlined bugs reporting, issues."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"New feature \u2013 Retention Policy for Monitoring events"}),(0,i.jsx)("br",{}),"\nSet a custom retention period for monitoring events via environmental variables to tailor data management to your organizational needs."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Settings redesign"}),(0,i.jsx)("br",{}),"\nProject Settings were redesigned completely, setting the stage for a whole new ReportPortal experience.",(0,i.jsx)("br",{}),"\nFor an improved user experience, please ensure you are using the latest versions of ReportPortal plugins."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"New language introduced"}),(0,i.jsx)("br",{}),"\nUsers can now utilize the interface in Chinese and are encouraged to contribute to further translations or improve the existing ones."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"2-small-updates",children:"2. Small Updates:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Change in ",(0,i.jsx)(s.a,{href:"/analysis/AutoAnalysisOfLaunches#base-for-analysis",children:"Base for AA"}),":",(0,i.jsx)("br",{}),"\nNew options for Base for Auto Analysis have been introduced."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Enhanced Monitoring:",(0,i.jsx)("br",{}),"\nImproved Filtering on Monitoring page and expanded list of events being tracked"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"3-technical-improvements",children:"3. Technical Improvements:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["ElasticSearch has been replaced with OpenSearch.  ",(0,i.jsx)("br",{}),"\nFollowing ElasticSearch's re-licensing in version 7.11, we've transitioned to OpenSearch to uphold our focus on open-source compatibility."]}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"important",children:(0,i.jsx)(s.p,{children:"Migration from ElasticSearch to OpenSearch is irrevocable."})}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"Some of the environmental variables names are still ElasticSearch specific, but it will be corrected in the future versions. `"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Service-api migration to Java 21"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Introduced JCloud provider for local file access, replacing the existing filesystem implementation."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Added support for providing a custom salt key using secret management tool to enhance security and flexibility."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"A new engine for the frontend part of the plugins was created based on Webpack Module Federation to simplify the process of plugins development."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"4-enhancements-based-on-community-feedback",children:"4. Enhancements Based on Community Feedback:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/reportportal/service-ui/issues/3132",children:"#3132"})," Component Health Check widget improvements."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/reportportal/reportportal/issues/308",children:"#308"})," Ability to specify filter parameters in the URL has been added."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/reportportal/reportportal/issues/2148",children:"#2148"})," Duplicated error logs issue solved."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/reportportal/reportportal/issues/2159",children:"#2159"})," Option to either include skipped test into Flaky test cases table (TOP 50) widget added."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/reportportal/reportportal/issues/520",children:"#520,"})," ",(0,i.jsx)(s.a,{href:"https://github.com/reportportal/reportportal/issues/2006",children:"#2006"})," Launch import improvements."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/reportportal/service-jobs/issues/64",children:"#64,"})," ",(0,i.jsx)(s.a,{href:"https://github.com/reportportal/kubernetes/issues/315",children:"#315"})," Service-jobs issue fix."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/reportportal/service-api/pull/1841",children:"#1841,"})," ",(0,i.jsx)(s.a,{href:"https://github.com/reportportal/reportportal/issues/1999",children:"#1999"})," PR was rejected as it contained breaking changes. Instead new converter for openmetrics was added to configuration."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"5-cve-addressed",children:"5. CVE addressed:"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/advisories/GHSA-qppj-fm5r-hxr3",children:"CVE-2023-44487"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/advisories/GHSA-2wrh-6pvc-2jm9",children:"CVE-2023-3978"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/advisories/GHSA-q6g2-g7f3-rr83",children:"CVE-2023-1436"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/advisories/GHSA-mjmj-j48q-9wg2",children:"CVE-2022-1471"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/advisories/GHSA-jjjh-jjxp-wpff",children:"CVE-2022-42003"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/advisories/GHSA-57j2-w4cx-62h2",children:"CVE-2020-36518"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/advisories/GHSA-3vqj-43w4-2q58",children:"CVE-2022-45688"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/advisories/GHSA-4jq9-2xhw-jpx7",children:"CVE-2023-5072"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/advisories/GHSA-36p3-wjmg-h94x",children:"CVE-2022-22965"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/advisories/GHSA-wxqc-pxw9-g2p8",children:"CVE-2023-20863"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/advisories/GHSA-5rjr-j9m9-qpm9",children:"CVE-2022-2297"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/advisories/GHSA-mjmj-j48q-9wg2",children:"CVE-2022-1471"})]}),"\n",(0,i.jsx)(s.h2,{id:"6-released-versions",children:"6. Released versions"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Service Name"}),(0,i.jsx)(s.th,{children:"Repository"}),(0,i.jsx)(s.th,{children:"Tag"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Index"}),(0,i.jsx)(s.td,{children:"reportportal/service-index"}),(0,i.jsx)(s.td,{children:"5.11.0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Authorization"}),(0,i.jsx)(s.td,{children:"reportportal/service-authorization"}),(0,i.jsx)(s.td,{children:"5.11.0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"UI"}),(0,i.jsx)(s.td,{children:"reportportal/service-ui"}),(0,i.jsx)(s.td,{children:"5.11.0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"API"}),(0,i.jsx)(s.td,{children:"reportportal/service-api"}),(0,i.jsx)(s.td,{children:"5.11.0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Jobs"}),(0,i.jsx)(s.td,{children:"reportportal/service-jobs"}),(0,i.jsx)(s.td,{children:"5.11.0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Migrations"}),(0,i.jsx)(s.td,{children:"reportportal/migrations"}),(0,i.jsx)(s.td,{children:"5.11.0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Auto Analyzer"}),(0,i.jsx)(s.td,{children:"reportportal/service-auto-analyzer"}),(0,i.jsx)(s.td,{children:"5.11.0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Metrics Gatherer"}),(0,i.jsx)(s.td,{children:"reportportal/service-metrics-gatherer"}),(0,i.jsx)(s.td,{children:"5.11.0"})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"7-link-to-migration-guide",children:"7. Link to Migration Guide:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/reportportal/reportportal/wiki/Migration-to-ReportPortal-v24.1",children:"https://github.com/reportportal/reportportal/wiki/Migration-to-ReportPortal-v24.1"})})]})}function c(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);