"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4415],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,d=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(d,r(r({ref:t},h),{},{components:n})):a.createElement(d,r({ref:t},h))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const i={sidebar_position:5,sidebar_label:"History of launches"},r="History of launches",s={unversionedId:"work-with-reports/HistoryOfLaunches",id:"work-with-reports/HistoryOfLaunches",title:"History of launches",description:"Historical trend of executions",source:"@site/docs/work-with-reports/HistoryOfLaunches.mdx",sourceDirName:"work-with-reports",slug:"/work-with-reports/HistoryOfLaunches",permalink:"/docs/work-with-reports/HistoryOfLaunches",draft:!1,editUrl:"https://github.com/reportportal/documentation/docs/work-with-reports/HistoryOfLaunches.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"History of launches"},sidebar:"defaultSidebar",previous:{title:"Investigation of failure",permalink:"/docs/work-with-reports/InvestigationOfFailure"},next:{title:"Test case ID",permalink:"/docs/work-with-reports/TestCaseId"}},l={},u=[{value:"Historical trend of executions",id:"historical-trend-of-executions",level:2},{value:"History table: Test Case ID or Unique ID",id:"history-table-test-case-id-or-unique-id",level:3},{value:"Difference between Test Case ID  and Unique ID",id:"difference-between-test-case-id--and-unique-id",level:3},{value:"Unique ID history",id:"unique-id-history",level:3},{value:"Test Case ID history",id:"test-case-id-history",level:3},{value:"History table",id:"history-table",level:2},{value:"History for all launches",id:"history-for-all-launches",level:3},{value:"History table for launches with the same name",id:"history-table-for-launches-with-the-same-name",level:3},{value:"Actions",id:"actions",level:3},{value:"Compare launch results with the filter",id:"compare-launch-results-with-the-filter",level:4},{value:"Historical line of executions",id:"historical-line-of-executions",level:4},{value:"History across All launches",id:"history-across-all-launches",level:4},{value:"Duration fluctuation",id:"duration-fluctuation",level:4},{value:"Load more History",id:"load-more-history",level:4},{value:"Test Item actions history",id:"test-item-actions-history",level:3}],h={toc:u};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"history-of-launches"},"History of launches"),(0,o.kt)("h2",{id:"historical-trend-of-executions"},"Historical trend of executions"),(0,o.kt)("p",null,"The historical trend of executions represents your history view for the list of test items. This feature can help you to find\nthe most unstable test cases in your suites/ launches/ builds."),(0,o.kt)("p",null,'To see a table of the historical trend of executions, navigate to the "Launches" page and drill down to launch structure/ or launch statistics.'),(0,o.kt)("h3",{id:"history-table-test-case-id-or-unique-id"},"History table: Test Case ID or Unique ID"),(0,o.kt)("p",null,"ReportPortal acquires a lot of results and you can choose by which parameter you want the history of test results to get defined.\nThere are 2 options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"by ",(0,o.kt)("a",{parentName:"li",href:"./UniqueId"},"Unique ID")," ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"(deprecated/ will be replaced by Test Case ID gradually)"))),(0,o.kt)("li",{parentName:"ul"},"by ",(0,o.kt)("a",{parentName:"li",href:"./TestCaseId"},"Test Case ID")," ")),(0,o.kt)("h3",{id:"difference-between-test-case-id--and-unique-id"},"Difference between Test Case ID  and Unique ID"),(0,o.kt)("p",null,"Please find the description of what Test Case ID and Unique  by the links:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./UniqueId"},"UUID")," ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"(deprecated/ will be replaced by Test Case ID gradually)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./TestCaseId"},"Test Case ID")," ")),(0,o.kt)("p",null,"They are both a unique identifiers of executions uniquness."),(0,o.kt)("p",null,"But Unique ID ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"(deprecated)"))," generates on the base of a launch name where test execution is situated.\nAnd Test Case ID usually doesn't contain a launch name. "),(0,o.kt)("p",null,"So that the main difference between a history table based on Unique ID ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"(deprecated)"))," and Test Case ID is that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"History on Unique ID ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"(deprecated)"))," shows only executions from launches with the same name"),(0,o.kt)("li",{parentName:"ul"},"History on Test Case ID shows executions from all launches.")),(0,o.kt)("h3",{id:"unique-id-history"},"Unique ID history"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"(deprecated/ will be replaced by Test Case ID gradually)"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Take the ReportPortal release version 5.2.2 or higher. docker-compose.yml")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add an environment variable to the service-API service:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"RP_ENVIRONMENT_VARIABLE_HISTORY_OLD=true\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Redeploy ReportPortal")),(0,o.kt)("h3",{id:"test-case-id-history"},"Test Case ID history"),(0,o.kt)("p",null,"Run ReportPortal without env variable."),(0,o.kt)("h2",{id:"history-table"},"History table"),(0,o.kt)("p",null,"Where you can find History table."),(0,o.kt)("p",null,"Drill down to the Step view (test executions list). "),(0,o.kt)("p",null,'Click the "History" button.'),(0,o.kt)("p",null,"You will see a historical trend in a table."),(0,o.kt)("p",null,"History trends have the following color scheme:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Red - indicates the launches with failed or interrupted cases")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Green - indicates passed launches")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Yellow \u2013 indicates the launches with several equal test items present within a required level")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Grey - indicates the test item with no descendants in this run.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Animated - still without state ","[in progress]"))),(0,o.kt)("p",null,'You can select the depth of history: 3, 5, 10, 15, 20, 25 or 30 launches from the "History\nDepth" drop-down menu. '),(0,o.kt)("p",null,"There are two options for a History table:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"history for all launches"),(0,o.kt)("li",{parentName:"ul"},"history for launches with the same name")),(0,o.kt)("p",null,'If your are using History table based on Test Case ID, you will be able to use both of this options.\nIn case you use a history table based on UID, a history table will show you results in mode: "History for launches with the same name".'),(0,o.kt)("h3",{id:"history-for-all-launches"},"History for all launches"),(0,o.kt)("p",null,"If you have configured ReportPortal with ",(0,o.kt)("a",{parentName:"p",href:"./HistoryOfLaunches#history-table"},"TestCase History table"),".\nThis option is for you."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How you can open a history table with execution from all launches?")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open All launches tab"),(0,o.kt)("li",{parentName:"ul"},"Click on the Launch name/ Total/ Passed/ Failed/ Skipped /Product Bug/ Auto Bug/ System Issues/ To investigate statistics"),(0,o.kt)("li",{parentName:"ul"},"Click on the button 'History'"),(0,o.kt)("li",{parentName:"ul"},"Choose the option '",(0,o.kt)("strong",{parentName:"li"},"All launches'")," in the drop-down 'BASE'")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What information is shown on the table based on Test Case ID?")),(0,o.kt)("p",null,"On the history table, you can see the first 20 test cases their last 10 (or 3/5/10/15/20/25/30) executions from all launches on the project.\nEach column on the history table is equaled to a number of the execution."),(0,o.kt)("p",null,"Let's see an example."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Use case:")," You have a test suite for the regression. You want to perform regression testing in different environments. For those reasons, you are running your regression suite on macOS, Windows, and Linux.\nAfter test runs finish, you will be able to see on the All launches tab on ReportPortal 3 launches with different names: ",(0,o.kt)("em",{parentName:"p"},"Regression_MacOS, Regression_Win, Regression_Linux"),".\nIf you click on the Total statistic for  the launch ",(0,o.kt)("em",{parentName:"p"},"Regression_MacOS")," and click on the 'History' button, you will see a History table with all test cases in the suite and their 10 last executions from all launches on the project (e.g. from ",(0,o.kt)("em",{parentName:"p"},"Regression_MacOS, Regression_Win, Regression_Linux"),")"),(0,o.kt)("table",{parentName:"blockquote"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Test case name"),(0,o.kt)("th",{parentName:"tr",align:null},"Execution #3"),(0,o.kt)("th",{parentName:"tr",align:null},"Execution #2"),(0,o.kt)("th",{parentName:"tr",align:null},"Execution #1"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Test 1"),(0,o.kt)("td",{parentName:"tr",align:null},"Passed"),(0,o.kt)("td",{parentName:"tr",align:null},"Failed"),(0,o.kt)("td",{parentName:"tr",align:null},"Passed")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Test 2"),(0,o.kt)("td",{parentName:"tr",align:null},"Failed"),(0,o.kt)("td",{parentName:"tr",align:null},"Passed"),(0,o.kt)("td",{parentName:"tr",align:null},"Passed")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Test 3"),(0,o.kt)("td",{parentName:"tr",align:null},"Failed"),(0,o.kt)("td",{parentName:"tr",align:null},"Passed"),(0,o.kt)("td",{parentName:"tr",align:null},"Passed")))),(0,o.kt)("p",{parentName:"blockquote"},"When you hover one of the cells on the table, you will be able to see to what launch this execution belongs to.")),(0,o.kt)("media-view",{thumbnail:n(30665),src:"https://youtu.be/WYytkzpzJps",alt:"History Table regression",type:"video"}),(0,o.kt)("h3",{id:"history-table-for-launches-with-the-same-name"},"History table for launches with the same name"),(0,o.kt)("p",null,"If you have configured ReportPortal with ",(0,o.kt)("a",{parentName:"p",href:"./HistoryOfLaunches#history-table"},"TestCase History table")," or with Unique ID ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"(deprecated)")),".\nThis option is for you."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How you can open a history table with execution launches with the same name?")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open All launches tab"),(0,o.kt)("li",{parentName:"ul"},"Click on the Launch name/ Total/ Passed/ Failed/ Skipped /Product Bug/ Auto Bug/ System Issues/ To investigate statistics"),(0,o.kt)("li",{parentName:"ul"},"Click on the button 'History'"),(0,o.kt)("li",{parentName:"ul"},"Choose the option ",(0,o.kt)("strong",{parentName:"li"},"'Launches with the same name'")," in the drop-down 'BASE'")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'What information is shown on the table based on Unique ID (deprecated) ot Test Case ID (with option "Launches with the same name"?)')),(0,o.kt)("p",null,"On the history table, you can see the first 20 test cases their last 10 (or 3/5/10/15/20/25/30) executions from only launches with the same name on the project.\nEach column on the history table is equaled to a number of the execution."),(0,o.kt)("p",null,"Let's see an example."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Use case:")," You have a test suite for the regression. You want to perform regression testing in different environments. For those reasons, you are running your regression suite on macOS, Windows, and Linux.\nAfter test runs finish, you will be able to see on the All launches tab on ReportPortal 3 launches with different names: ",(0,o.kt)("em",{parentName:"p"},"Regression_MacOS, Regression_Win, Regression_Linux"),".\nIf you click on the Total statistic for the launch ",(0,o.kt)("em",{parentName:"p"},"Regression_MacOS")," and click on the 'History' button and  you choose the option ",(0,o.kt)("strong",{parentName:"p"},"'Launches with the same name'"),", you will see executions only from launches with name ",(0,o.kt)("em",{parentName:"p"},"Regression_MacOS"),"."),(0,o.kt)("table",{parentName:"blockquote"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Test case name"),(0,o.kt)("th",{parentName:"tr",align:null},"Execution #2"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Test 1"),(0,o.kt)("td",{parentName:"tr",align:null},"Passed")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Test 2"),(0,o.kt)("td",{parentName:"tr",align:null},"Passed")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Test 3"),(0,o.kt)("td",{parentName:"tr",align:null},"Passed"))))),(0,o.kt)("media-view",{thumbnail:n(30665),src:"https://youtu.be/Y5eXSa3bA8w",alt:"History Table launches with the same name",type:"video"}),(0,o.kt)("h3",{id:"actions"},"Actions"),(0,o.kt)("p",null,"From the History table you will be able to perform the next actions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"edit items"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./InvestigationOfFailure#set-defect-type"},"edit defect")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./InvestigationOfFailure#post-bug-to-bug-tracking-system"},"post issue")),(0,o.kt)("li",{parentName:"ul"},"link / unlink issue"),(0,o.kt)("li",{parentName:"ul"},"delete items")),(0,o.kt)("p",null,"For that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hover the cell on the history table"),(0,o.kt)("li",{parentName:"ul"},"Click on the checkbox"),(0,o.kt)("li",{parentName:"ul"},"Check needed item "),(0,o.kt)("li",{parentName:"ul"},"Click on the button 'Action'"),(0,o.kt)("li",{parentName:"ul"},"Choose needed action")),(0,o.kt)("h4",{id:"compare-launch-results-with-the-filter"},"Compare launch results with the filter"),(0,o.kt)("p",null,"You can add a custom column with the latest filter results to the History table. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Use case:")," You have a test suite for the regression. You run this suite for different versions (version 1, version2, version 3).\nWhen you run tests for the new version you need to find out if new bugs appeared in it in comparison with the previous version.\nYou can create a filter that includes test executions for the previous version (version 2).\nThen you can open a history table for the launch with results for version 3 and add a custom column with the filter 'Version 2'.\nThe system adds the latest executions from filter 'Version 2' and you will be able to compare the latest results for version 2 and version 3.")),(0,o.kt)("media-view",{thumbnail:n(30665),src:"https://youtu.be/hr4IQ5UBpM8",alt:"Compare results of a launch with the filter",type:"video"}),(0,o.kt)("h4",{id:"historical-line-of-executions"},"Historical line of executions"),(0,o.kt)("p",null,"The historical line of executions represents the statuses of the current test case in history."),(0,o.kt)("p",null,"You can see the historical line of executions at the Log level. History is shown only for the\ncurrent item and there are 30 items max in history.\nYou can click on the item in the history and check the results in previous executions, read\nthe comments, find the bugs, posted to this fail.\nThis feature will save you time and help you to understand the reason for your failure."),(0,o.kt)("p",null,"History line has the following color scheme:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Red - failed or interrupted. Contains a link to a related bug (it has it)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Grey - skipped. Contains a link to a related bug (it has it)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Green - passed. Contains only execution number")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Animated - still without state ","[in progress]"))),(0,o.kt)("p",null,"You can mark the current method or case with a defect type, and write a comment\nusing the defect editor block."),(0,o.kt)("p",null,"To come into a certain execution of an appropriate launch, hit a launch number\nabove the item."),(0,o.kt)("p",null,'Also on a History line, you can see an "i" label, it means that the item with this label has a defect comment or/and a link to the Bug Tracking System.'),(0,o.kt)("h4",{id:"history-across-all-launches"},"History across All launches"),(0,o.kt)("p",null,"By default system shows history across Launches with the same name."),(0,o.kt)("p",null,'But you can choose option "History across All Launches" and system will show you executions of the test cases which have been executed in launches with different names.'),(0,o.kt)("p",null,"On hover user can find launch name of test and all launch attributes."),(0,o.kt)("h4",{id:"duration-fluctuation"},"Duration fluctuation"),(0,o.kt)("p",null,"If test execution has duration growth in comparison with previous run, the system marks such items with red triangles:"),(0,o.kt)("p",null,"No duration growth - 0 triangles"),(0,o.kt)("p",null,"duration growh from 0 to 20% - 1 triangles"),(0,o.kt)("p",null,"duration growh from 21% - 50% - 2 trianges "),(0,o.kt)("p",null,"duration growh from 51% - 100% - 3 trianges "),(0,o.kt)("p",null,"duration growh from 101% and higher - 4 trianges "),(0,o.kt)("h4",{id:"load-more-history"},"Load more History"),(0,o.kt)("p",null,'By default the system shows 12 latest executions. If you need more history you can click on the button "Load more 9 items and the system loaded more executions on history line. Max number of items on History line is 30 executions. '),(0,o.kt)("p",null,"User can move on History line using horizontal scroll."),(0,o.kt)("media-view",{thumbnail:n(82781),src:"https://youtu.be/P0S1zElmWx0",alt:"History Line ToolTip",type:"video"}),(0,o.kt)("h3",{id:"test-item-actions-history"},"Test Item actions history"),(0,o.kt)("p",null,"Test Item actions history will show you the history of actions, which have been made to a\ncertain test item. You can see the kind of activity, and who performed it."),(0,o.kt)("p",null,"The following actions are shown on the history of actions:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"  user changed defect type of test item")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"  user posted a comment to the test item")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"  user posted a bug to the Bug Tracking System or added a link to the existing in Bug Tracking System issue.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'  analyzer changed defect type of test item based on the item (where "item" is a link to a log view of an item which has been chosen by Analyzer as the most relevant result)')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"  analyzer posted a comment to the test item")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"  analyzer posted a bug to the Bug Tracking System or added a link to the existing in the Bug Tracking System issue. ")),(0,o.kt)("p",null,"To see the history of actions, navigate to a certain child item. By default you\nwill see the last action in one line."),(0,o.kt)("p",null,"Use spoiler to maximize actions history:"),(0,o.kt)("media-view",{thumbnail:n(20940),src:"https://youtu.be/Z-gPwjxWHTQ",alt:"Action History",type:"video"}))}c.isMDXComponent=!0},20940:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/ActionHistory-8a7dc6a884622447b7e90b7f3b49f985.png"},82781:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/HistoryLineToolTip-eb5b6c809baac78ecd607a9fa8df84f5.png"},30665:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/HistoryTable-ee592808c4754b8a34fb3e9ae2912132.png"}}]);