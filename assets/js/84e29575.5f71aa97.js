"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6412],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=l,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||s;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=a.length,r=new Array(s);r[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:l,r[1]=o;for(var u=2;u<s;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},69994:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const s={sidebar_position:1,sidebar_label:"View launches"},r="View launches",o={unversionedId:"work-with-reports/ViewLaunches",id:"work-with-reports/ViewLaunches",title:"View launches",description:"Viewing information about all launches",source:"@site/docs/work-with-reports/ViewLaunches.mdx",sourceDirName:"work-with-reports",slug:"/work-with-reports/ViewLaunches",permalink:"/docs/work-with-reports/ViewLaunches",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/work-with-reports/ViewLaunches.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"View launches"},sidebar:"defaultSidebar",previous:{title:"Work with reports",permalink:"/docs/category/work-with-reports"},next:{title:"Operations under launches",permalink:"/docs/work-with-reports/OperationsUnderLaunches"}},i={},u=[{value:"Viewing information about all launches",id:"viewing-information-about-all-launches",level:2},{value:"&quot;Debug&quot; tab",id:"debug-tab",level:3},{value:"&quot;Launches&quot; tab",id:"launches-tab",level:3},{value:"Viewing all launches / latest launches",id:"viewing-all-launches--latest-launches",level:2},{value:"Viewing launch statistics",id:"viewing-launch-statistics",level:2},{value:"Navigate to items",id:"navigate-to-items",level:2},{value:"Log view",id:"log-view",level:2},{value:"Logs messages",id:"logs-messages",level:3},{value:"Stack trace",id:"stack-trace",level:3},{value:"Attachments",id:"attachments",level:3},{value:"Items details",id:"items-details",level:3},{value:"History of actions",id:"history-of-actions",level:3},{value:"Markdown mode on Logs view",id:"markdown-mode-on-logs-view",level:3},{value:"Log view for containers (for a launch or a suite)",id:"log-view-for-containers-for-a-launch-or-a-suite",level:2},{value:"Nested Steps",id:"nested-steps",level:2},{value:"Retried test case (retry)",id:"retried-test-case-retry",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...s}=e;return(0,l.kt)(d,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"view-launches"},"View launches"),(0,l.kt)("h2",{id:"viewing-information-about-all-launches"},"Viewing information about all launches"),(0,l.kt)("p",null,"A launch is an object in our test automation reporting platform, which contains your data for certain execution.  Inside the launches, we have test items, structured in the same way as you have it in your automation."),(0,l.kt)("p",null,'Launches are present in two modes \u2013 the Default mode on the "Launches" tab\nand the Debug mode on the "Debug" tab.'),(0,l.kt)("h3",{id:"debug-tab"},'"Debug" tab'),(0,l.kt)("p",null,'Although both modes share almost the same set of features, the "Debug" mode is\nconsidered to be a more private one: it is not visible to the user with the\nCUSTOMER role and all the filters created there cannot be saved to\n"Filters". Filters are the base for building a widget, so widget charts are\nnot available for the launches from the "Debug" mode.'),(0,l.kt)("h3",{id:"launches-tab"},'"Launches" tab'),(0,l.kt)("p",null,"A typical Launch structure comprises the following elements: ",(0,l.kt)("strong",{parentName:"p"},"Suite")," ",">"," ",(0,l.kt)("strong",{parentName:"p"},"Test"),"\n",">"," ",(0,l.kt)("strong",{parentName:"p"},"Step")," ",">"," ",(0,l.kt)("strong",{parentName:"p"},"Log"),"."),(0,l.kt)("p",null,"A suite may hierarchically lie under another suite."),(0,l.kt)("p",null,'The data in the "Launches" section is present in a table. By default, the\nuser sees all runs.'),(0,l.kt)("p",null,'The "Launches" grid contains the following columns:'),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Runs (at all launches level)"),(0,l.kt)("td",{parentName:"tr",align:null},"A ",(0,l.kt)("strong",{parentName:"td"},"Launch name")," or a ",(0,l.kt)("strong",{parentName:"td"},"Suite name")," or a ",(0,l.kt)("strong",{parentName:"td"},"Class name")," (depends on a drill-down level)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Start time"),(0,l.kt)("td",{parentName:"tr",align:null},'A launch start time in the "time ago" format (e.g. "10 minutes ago"); on mouse hover the system displays the accurate start time')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Duration"),(0,l.kt)("td",{parentName:"tr",align:null},"The launch duration. For launches in progress remaining time is shown")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Total"),(0,l.kt)("td",{parentName:"tr",align:null},"The total number of issues. It is a sum of all items with the ",(0,l.kt)("strong",{parentName:"td"},"Passed"),", ",(0,l.kt)("strong",{parentName:"td"},"Failed"),", ",(0,l.kt)("strong",{parentName:"td"},"Skipped")," and ",(0,l.kt)("strong",{parentName:"td"},"Interrupted")," statuses")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Passed"),(0,l.kt)("td",{parentName:"tr",align:null},"The total number of issues that were completed with the ",(0,l.kt)("strong",{parentName:"td"},"Passed")," status.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Failed"),(0,l.kt)("td",{parentName:"tr",align:null},"The total number of issues that were completed with the ",(0,l.kt)("strong",{parentName:"td"},"Failed")," status.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Skipped"),(0,l.kt)("td",{parentName:"tr",align:null},"The total number of issues that were completed with the ",(0,l.kt)("strong",{parentName:"td"},"Skipped")," status. Any ReportPortal user can investigate failed and skipped issues with one of the following values: ",(0,l.kt)("strong",{parentName:"td"},"Product Bug"),", ",(0,l.kt)("strong",{parentName:"td"},"Automation Bug"),", ",(0,l.kt)("strong",{parentName:"td"},"System Issue"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Product Bug"),(0,l.kt)("td",{parentName:"tr",align:null},"This type of issue is selected manually if it's a ",(0,l.kt)("strong",{parentName:"td"},"product issue"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Auto Bug"),(0,l.kt)("td",{parentName:"tr",align:null},"This type of issue is selected manually if it's an ",(0,l.kt)("strong",{parentName:"td"},"automation test issue"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System Issue"),(0,l.kt)("td",{parentName:"tr",align:null},"This type of issue is selected manually if it's a ",(0,l.kt)("strong",{parentName:"td"},"system bug"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"To investigate"),(0,l.kt)("td",{parentName:"tr",align:null},"The total number of ",(0,l.kt)("strong",{parentName:"td"},"Failed")," and ",(0,l.kt)("strong",{parentName:"td"},"Skipped")," issues left to investigate")))),(0,l.kt)("h2",{id:"viewing-all-launches--latest-launches"},"Viewing all launches / latest launches"),(0,l.kt)("p",null,"You have two options to browse all project launches. By default, the system displays all launches of the project in one list in order of start time."),(0,l.kt)("p",null,"Also, you have the possibility to optimize this list. If you choose ",(0,l.kt)("strong",{parentName:"p"},"\u2018Latest Launches\u2019")," option from the drop-down list (All Launches\\ Latest Launches) at the top of the page, it will allow you to roll up the list to latest launches only. "),(0,l.kt)("p",null,"In other words, when that option is turned on, you will see on a launches view only launches with unique names with the last increment (#number). "),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"For example, there are launches with names \u2018Demo#1\u2019,   \u2018Demo#2\u2019, \u2018Demo#3\u2019 on a launches view. If you choose \u2018Latest Launches\u2019 option, the system will display \u2018Demo#3\u2019 launch only.")),(0,l.kt)("p",null,"In a Latest Launches view you may perform any regular actions: add a filter, perform actions from Actions menu, edit attributes, and edit the description."),(0,l.kt)("h2",{id:"viewing-launch-statistics"},"Viewing launch statistics"),(0,l.kt)("p",null,'The data in the "Launches" table is present as links in the following\ncolumns:'),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Launch name"),(0,l.kt)("td",{parentName:"tr",align:null},"This link gives an opportunity to drill down to a specific launch")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Total")),(0,l.kt)("td",{parentName:"tr",align:null},"This link takes you to the Test Cases view and shows all test cases within the launch in one table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Passed")),(0,l.kt)("td",{parentName:"tr",align:null},"This link takes you to the Test Cases view and shows all ",(0,l.kt)("strong",{parentName:"td"},"passed")," test cases within the launch in one table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Failed")),(0,l.kt)("td",{parentName:"tr",align:null},"This link takes you to the Test Cases view and shows all ",(0,l.kt)("strong",{parentName:"td"},"failed")," test cases within the launch in one table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Skipped")),(0,l.kt)("td",{parentName:"tr",align:null},"This link takes you to the Test Cases view and shows all ",(0,l.kt)("strong",{parentName:"td"},"skipped")," test cases within the launch in one table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Product Bug")),(0,l.kt)("td",{parentName:"tr",align:null},"This link takes you to the Test Cases view and shows all ",(0,l.kt)("strong",{parentName:"td"},"failed")," test cases marked as ",(0,l.kt)("strong",{parentName:"td"},'"Product Bugs"')," in the launch in one table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Automation Bug")),(0,l.kt)("td",{parentName:"tr",align:null},"this link takes you to the Test Cases view and shows all ",(0,l.kt)("strong",{parentName:"td"},"failed")," test cases marked as ",(0,l.kt)("strong",{parentName:"td"},'"Automation Bugs"')," in the launch in one table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"System Issue")),(0,l.kt)("td",{parentName:"tr",align:null},"This link takes you to the Test Cases view and shows all ",(0,l.kt)("strong",{parentName:"td"},"failed")," test cases marked as ",(0,l.kt)("strong",{parentName:"td"},'"System Issues"')," in the launch in one table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"To Investigate")),(0,l.kt)("td",{parentName:"tr",align:null},"This link takes you to the Test Cases view and shows all ",(0,l.kt)("strong",{parentName:"td"},"failed")," test cases with ",(0,l.kt)("strong",{parentName:"td"},"no selected defect type")," (marked as ",(0,l.kt)("strong",{parentName:"td"},'"To Investigate"'),") in the launch in one table")))),(0,l.kt)("p",null,"To drill down your structure, click the name of an item or numbers in the\ncolumns (",(0,l.kt)("strong",{parentName:"p"},"Total"),", ",(0,l.kt)("strong",{parentName:"p"},"Passed"),", ",(0,l.kt)("strong",{parentName:"p"},"Failed"),", etc.), which will open the items, filtered\nby the column criteria."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},'"To investigate"')," number - represents the number of items, which should be review\nin this particular run. This value incorporates all the failed test cases and failed\npreparation methods."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"  ",(0,l.kt)("strong",{parentName:"p"},"Why the sum of the values is not equal?"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"  Total, Passed, Failed and Skipped columns counted in ",(0,l.kt)("strong",{parentName:"p"},"TEST CASES"),".")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"  Product Bug (PB), Automation Bug (AB), System Issue (SI), To\ninvestigate (TI) columns counted in ",(0,l.kt)("strong",{parentName:"p"},"TEST ITEMS"),".")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"  The hierarchy is as follows: Test Item ",">"," Test Case. Test items can be marked\nwith @Test Case annotation.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"  Test item includes: all preparation methods (all ",(0,l.kt)("em",{parentName:"p"},"Before")," and ",(0,l.kt)("em",{parentName:"p"},"After"),"\nmethods), system methods, test cases.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"  Test case is just a single test case.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"  The values in the ",(0,l.kt)("strong",{parentName:"p"},"Total")," column:  Total = Passed + Failed +\nSkipped.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"  PB + AB + SI + TI = Failed","_","Test","_","Cases + Skipped","_","Test","_","Cases +\nother","_","FAILED","_","methods")),(0,l.kt)("h2",{id:"navigate-to-items"},"Navigate to items"),(0,l.kt)("p",null,"You can navigate to certain items using clickable values and charts with the number of tests items with all statuses available within the system:\nTotal/Passed/Failed/Skipped/Production Bug/Automation Bug/System Issue/To Investigate (list view)."),(0,l.kt)("p",null,'Navigation is provided for both the "Launches" and the "Debug" modes.'),(0,l.kt)("p",null,"The system shows all relevant test cases within the launch in one table,\nfiltered by the column criteria."),(0,l.kt)("p",null,"The system allows keeping track of your location in the hierarchical launch structure, and navigating back to parent items you went through to get to the current one (breadcrumb link)."),(0,l.kt)("p",null,"Breadcrumbs representation in the system may be different depending on away the child\nitem was reached. In case the child item was reached going through all upper\nlevels sequentially, all the hierarchical elements are reflected in the\nbreadcrumbs."),(0,l.kt)("p",null,"In case a clickable number was used for navigation, then only the highest level\n(Launch) and the lowest level (Step) are represented in the breadcrumbs.\nBut log view of any of the last items will have full path in breadcrumbs in brackets."),(0,l.kt)("p",null,"One more useful feature is collapsing not failed precondition methods.\nIt could be set up on the STEP view of any launch.\nThe switcher is located on the left hand of the Name column header."),(0,l.kt)("p",null,"Please note that that hidden item will not be visible on the LOG view for 'Next'/'Previous' listing."),(0,l.kt)("media-view",{thumbnail:a(58658),src:"https://youtu.be/1QWmSH_brVg",alt:"Viewing data in our test report dashboard",type:"video"}),(0,l.kt)("h2",{id:"log-view"},"Log view"),(0,l.kt)("h3",{id:"logs-messages"},"Logs messages"),(0,l.kt)("p",null,"All the related data for the test case (logs, screenshots) will be saved on the Log level. To see a table with log messages, navigate to the lowest level. "),(0,l.kt)("p",null,"Log object has the following levels:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Level"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Trace"),(0,l.kt)("td",{parentName:"tr",align:"center"},">= 5 000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Debug"),(0,l.kt)("td",{parentName:"tr",align:"center"},">= 10 000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Info"),(0,l.kt)("td",{parentName:"tr",align:"center"},">= 20 000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Warn"),(0,l.kt)("td",{parentName:"tr",align:"center"},">= 30 000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Error"),(0,l.kt)("td",{parentName:"tr",align:"center"},">= 40 000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fatal"),(0,l.kt)("td",{parentName:"tr",align:"center"},">= 50 000")))),(0,l.kt)("p",null,"You can set a necessary log level using a slider. "),(0,l.kt)("p",null,"The table with log messages is painted in different colors depending on the log type:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"  red - for failed log steps")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"  green - for log steps with positive validation made")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"  blue - for system messages")),(0,l.kt)("p",null,"Error logs are always highlighted in red. The others are highlighted on mouse\nhover only."),(0,l.kt)("p",null,"Logs with ",(0,l.kt)("em",{parentName:"p"},"Trace"),", ",(0,l.kt)("em",{parentName:"p"},"Debug"),", ",(0,l.kt)("em",{parentName:"p"},"Error"),' labels are collapsed if the log has more\nthan 5 lines. You can expand the log message clicking on the special "Expand" icon.'),(0,l.kt)("p",null,"You can use a filter to specify the level."),(0,l.kt)("p",null,"Also, you can use the logs sorting by time, and filtering logs to find a certain message in logs."),(0,l.kt)("media-view",{thumbnail:a(41723),src:"https://youtu.be/_g0GW16sXGU",alt:"Log Messages in our automated testing tool",type:"video"}),(0,l.kt)("h3",{id:"stack-trace"},"Stack trace"),(0,l.kt)("p",null,'On the Log view for the fast redirection to the last 5 error log messages, please click on the tab Stack trace, in this section you can find *5 last error logs". '),(0,l.kt)("h3",{id:"attachments"},"Attachments"),(0,l.kt)("p",null,"In case you are interested in logs with attachments only, check the corresponding checkbox."),(0,l.kt)("p",null,"Click on the file in log opens the preview of the attachment. "),(0,l.kt)("p",null,"The attachments could be rotated on a preview screen if needed."),(0,l.kt)("p",null,"ReportPortal provides the possibility of preview for such types of attachments as:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"'xml',"),(0,l.kt)("li",{parentName:"ul"},"'javascript', "),(0,l.kt)("li",{parentName:"ul"},"'json', "),(0,l.kt)("li",{parentName:"ul"},"'css', "),(0,l.kt)("li",{parentName:"ul"},"'php'")),(0,l.kt)("p",null,"Other types of attachments will be opened in a new browser tab or downloaded."),(0,l.kt)("p",null,"The alternative way to view these files is by using the Attachments."),(0,l.kt)("p",null,"To view data via the Attachments section, perform the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open Log view of launch for test items with attachments available")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click 'Attachments' tab")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the required file by clicking on its thumbnail.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"To expand the area, click the view on the main box."))),(0,l.kt)("media-view",{thumbnail:a(92563),src:"https://youtu.be/nMSSAcqrfC0",alt:"Screenshot Gallery",type:"video"}),(0,l.kt)("h3",{id:"items-details"},"Items details"),(0,l.kt)("p",null,"In the section Items details, you can find information about test case such as:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Test Case name"),(0,l.kt)("li",{parentName:"ul"},"Test case status"),(0,l.kt)("li",{parentName:"ul"},"Test case start time"),(0,l.kt)("li",{parentName:"ul"},"Duration and duration fluctuation"),(0,l.kt)("li",{parentName:"ul"},"Description"),(0,l.kt)("li",{parentName:"ul"},"Parameters "),(0,l.kt)("li",{parentName:"ul"},"Attributes"),(0,l.kt)("li",{parentName:"ul"},"Code location (that can be easily copied by a user)")),(0,l.kt)("h3",{id:"history-of-actions"},"History of actions"),(0,l.kt)("p",null,"In this section, you can find all activities which were performed under the test case such as:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"user changed defect type of test item"),(0,l.kt)("li",{parentName:"ul"},"user posted a comment to the test item"),(0,l.kt)("li",{parentName:"ul"},"user posted a bug to the Bug Tracking System"),(0,l.kt)("li",{parentName:"ul"},"user-added link to the existing in Bug Tracking System bug."),(0,l.kt)("li",{parentName:"ul"},'analyzer changed defect type of test item based on the item (where "item" is a link to a log view of an item which has been chosen by the analyzer as the most relevant result)'),(0,l.kt)("li",{parentName:"ul"},"analyzer posted a comment to the test item"),(0,l.kt)("li",{parentName:"ul"},"analyzer posted a bug to the Bug Tracking System or added a link to the existing in Bug Tracking System issue."),(0,l.kt)("li",{parentName:"ul"},"pattern analysis add a found pattern")),(0,l.kt)("p",null,"History of actions is not shown if nobody performed actions with the item.\nBy default, you will see the last action in one line."),(0,l.kt)("h3",{id:"markdown-mode-on-logs-view"},"Markdown mode on Logs view"),(0,l.kt)("p",null,"You can view logs in Markdown mode or in the Console view."),(0,l.kt)("p",null,"To enable Markdown mode, please perform actions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Click on "M" button on the log level')),(0,l.kt)("p",null,"To disable Markdown mode, please perform actions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Click on "M" button on log level one more time')),(0,l.kt)("p",null,"The same logic applies to the Console view."),(0,l.kt)("h2",{id:"log-view-for-containers-for-a-launch-or-a-suite"},"Log view for containers (for a launch or a suite)"),(0,l.kt)("p",null,"A user can report logs not only to the test execution but also to containers:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Launch"),(0,l.kt)("li",{parentName:"ul"},"Suite")),(0,l.kt)("p",null,"If user want to view attached logs:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Login ReportPortal"),(0,l.kt)("li",{parentName:"ul"},"Click on a launch name, or a suite name"),(0,l.kt)("li",{parentName:"ul"},"Click on Log tab")),(0,l.kt)("media-view",{src:a(80939),alt:"Log view for container - launch"}),(0,l.kt)("media-view",{src:a(70975),alt:"Launch Logs"}),(0,l.kt)("h2",{id:"nested-steps"},"Nested Steps"),(0,l.kt)("media-view",{thumbnail:a(81207),src:"https://youtu.be/t6kvmpwZE8Y",alt:"Nested Steps",type:"video"}),(0,l.kt)("h2",{id:"retried-test-case-retry"},"Retried test case (retry)"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/dev-guides/RetriesReporting"},"How can I report retry items"),"\nIn case you implemented a retry logic for your tests in a test framework, ReportPortal will reflect it by adding a special retry structure. If there were a few invocations of the one test case, all these invocations will be shown as the one test case in ReportPortal."),(0,l.kt)("p",null,"On a long view, you can see all logs and all information about all invocations. But in statistics and auto-analysis the ReportPortal will take into account only the last invocation. So that launch statistics will be more accurate."),(0,l.kt)("p",null,"The defect type can be set for the last invocation only."),(0,l.kt)("p",null,"On a Launch view, you can see a label, which means that the launch includes retries."),(0,l.kt)("media-view",{src:a(94091),alt:"Retry Launch Level"}),(0,l.kt)("p",null,"On a step view, you can see the number of invocations and stack trace of each invocation."),(0,l.kt)("media-view",{src:a(7558),alt:"Retry Step Level"}),(0,l.kt)("p",null,"On a log view, you can see the number of invocations and logs, attachments of each invocation."),(0,l.kt)("media-view",{src:a(93531),alt:"Retry Log Level"}))}c.isMDXComponent=!0},92563:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/Attachments-203dcabdc934f03e795494a48c188153.png"},41723:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/LogView-a7f9765dba9ac3625307264275a50f79.png"},80939:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/LogViewForContainers1-d3936a54159b6b69a824a73128e9c8b8.png"},70975:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/LogViewForContainers2-0578e9e2b6281bd3f1f3b39e41e534fb.png"},58658:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/NavigateToItems-23d638ed6e810e7ade040e4b20a72ddd.png"},81207:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/NestedSteps-5867f611c58cb623f8993024b96c1c89.png"},94091:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/RetriedTestCase1-c3565e248e1edd8effdbea9f696aa0c5.png"},7558:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/RetriedTestCase2-df470cafb61efb9d53c31fab09314a9b.png"},93531:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/RetriedTestCase3-72d66fc118bf8f9a4ad87d5042853929.png"}}]);