"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9052],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var r=n.createContext({}),c=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(r.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,l=e.originalType,r=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(a),m=s,d=h["".concat(r,".").concat(m)]||h[m]||p[m]||l;return a?n.createElement(d,o(o({ref:t},u),{},{components:a})):n.createElement(d,o({ref:t},u))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i[h]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},33967:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(87462),s=(a(67294),a(3905));const l={sidebar_position:1,sidebar_label:"Auto-Analysis of launches"},o="Auto-Analysis of launches",i={unversionedId:"analysis/AutoAnalysisOfLaunches",id:"analysis/AutoAnalysisOfLaunches",title:"Auto-Analysis of launches",description:"The analysis feature of the ReportPortal makes it possible for the application to check and pass part of the routine duties by itself.",source:"@site/docs/analysis/AutoAnalysisOfLaunches.mdx",sourceDirName:"analysis",slug:"/analysis/AutoAnalysisOfLaunches",permalink:"/docs/analysis/AutoAnalysisOfLaunches",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/analysis/AutoAnalysisOfLaunches.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Auto-Analysis of launches"},sidebar:"defaultSidebar",previous:{title:"Analysis",permalink:"/docs/category/analysis"},next:{title:'Search for the similar "To investigate" items',permalink:"/docs/analysis/SearchForTheSimilarToInvestigateItems"}},r={},c=[{value:"ReportPortal Analyzer. How to install",id:"reportportal-analyzer-how-to-install",level:2},{value:"ReportPortal Analyzer. How the Auto-Analysis is working",id:"reportportal-analyzer-how-the-auto-analysis-is-working",level:2},{value:"Create an analytical base in the ElasticSearch",id:"create-an-analytical-base-in-the-elasticsearch",level:3},{value:"Auto-Analysis process",id:"auto-analysis-process",level:3},{value:"How Elasticsearch returns candidates for Analysis",id:"how-elasticsearch-returns-candidates-for-analysis",level:3},{value:"How Auto-analysis makes decisions for candidates, returned by Elasticsearch",id:"how-auto-analysis-makes-decisions-for-candidates-returned-by-elasticsearch",level:3},{value:"Auto-analysis Settings",id:"auto-analysis-settings",level:2},{value:"Switch ON/OFF automatic analysis;",id:"switch-onoff-automatic-analysis",level:3},{value:"Base for analysis (All launches/ Launches with the same name);",id:"base-for-analysis-all-launches-launches-with-the-same-name",level:3},{value:"Configure ElasticSearch settings",id:"configure-elasticsearch-settings",level:3},{value:"Remove/Generate ElasticSearch index",id:"removegenerate-elasticsearch-index",level:3},{value:"Manual analysis",id:"manual-analysis",level:3},{value:"Label AA",id:"label-aa",level:2},{value:"Ignore in Auto-Analysis",id:"ignore-in-auto-analysis",level:2}],u={toc:c},h="wrapper";function p(e){let{components:t,...l}=e;return(0,s.kt)(h,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"auto-analysis-of-launches"},"Auto-Analysis of launches"),(0,s.kt)("p",null,"The analysis feature of the ReportPortal makes it possible for the application to check and pass part of the routine duties by itself."),(0,s.kt)("p",null,"Auto-analysis performs automated defect triaging and defines the reason for the test item failure and sets:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"a defect type;"),(0,s.kt)("li",{parentName:"ul"},"a link to BTS ",(0,s.kt)("em",{parentName:"li"},"(in case if it exists)"),";"),(0,s.kt)("li",{parentName:"ul"},"comment ",(0,s.kt)("em",{parentName:"li"},"(in case if it exists)"),";")),(0,s.kt)("p",null,"The process of Auto-Analysis is based on previous user-investigated users' results using Machine Learning.  "),(0,s.kt)("p",null,"An auto-analyzer is presented by a combination of several services: ElasticSearch, Analyzer service(two instances Analyzer and Analyzer train), Metrics gatherer:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Elasticsearch contains an analytical base, stores training data for retraining of models and saves metrics for metrics gatherer."),(0,s.kt)("li",{parentName:"ul"},"Analyzer instance performs all operations, connected with the basic functionality (indexing/removing logs, searching logs, auto-analysis,  ML suggestions)."),(0,s.kt)("li",{parentName:"ul"},"Analyzer train instance is responsible for training models for Auto-analysis and ML suggestions functionality."),(0,s.kt)("li",{parentName:"ul"},"Metrics gatherer calculates metrics about the analyzer usage and requests deletion of custom models if metrics goes down.")),(0,s.kt)("p",null,"There are several ways to use an analyzer in our test automation reporting dashboard:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Use  the ReportPortal Analyzer: ",(0,s.kt)("strong",{parentName:"p"},"manual")," (analysis is switched on only for chosen launch manually) or ",(0,s.kt)("strong",{parentName:"p"},"auto")," (analysis is switched on after the launch finishing automatically);")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Implement and configure your custom Analyzer and do not deploy ReportPortal service Analyzer;")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Do not use any Analyzers at all and do an analytical routine by yourself;"))),(0,s.kt)("h2",{id:"reportportal-analyzer-how-to-install"},"ReportPortal Analyzer. How to install"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Add info about Service Analyzer and service ElasticSearch in the docker-compose file;")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Set {vm.max_map_count} kernel setting before ReportPortal deploying with ",(0,s.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/6.1/docker.html#docker-cli-run-prod-mode"},"command>"),";")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Give right permissions to ElasticSearch data folder using the following command:"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"mkdir data/elasticsearch\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"chmod g+rwx data/elasticsearch\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"chgrp 1000 data/elasticsearch\n")),(0,s.kt)("p",null,"For more details about ElasticSearch visit ",(0,s.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/6.1/docker.html#_notes_for_production_use_and_defaults"},"ElasticSearch guide"),";"),(0,s.kt)("h2",{id:"reportportal-analyzer-how-the-auto-analysis-is-working"},"ReportPortal Analyzer. How the Auto-Analysis is working"),(0,s.kt)("p",null,"ReportPortal's auto-analyzer allows users to reduce the time spent on test execution investigation by analyzing test failures in automatic mode. For that reason, you can deploy the  ReportPortal with a service Analyzer by adding info about this service in a docker-compose file. The default analysis component is running along with ElasticSearch which is used for test logs indexing.\nFor effective using Auto\u2013Analysis you should come through several stages. "),(0,s.kt)("h3",{id:"create-an-analytical-base-in-the-elasticsearch"},"Create an analytical base in the ElasticSearch"),(0,s.kt)("p",null,"First of all, you need to create an analytical base. For that, you should start to analyze test results manually. "),(0,s.kt)("p",null,"All test items with a defect type which have been analyzed manually or automatically by ReportPortal are sent to the Elastic Search. "),(0,s.kt)("p",null,"The following info is sent:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"An item ID;"),(0,s.kt)("li",{parentName:"ul"},"Logs (each log should be with level Error and higher (log level >= 40 000));"),(0,s.kt)("li",{parentName:"ul"},"Issue type;"),(0,s.kt)("li",{parentName:"ul"},"Flag: \u201cAnalyzed by\u201d (where shows by whom the test item has been analyzed by a user or by ReportPortal);"),(0,s.kt)("li",{parentName:"ul"},"A launch name;"),(0,s.kt)("li",{parentName:"ul"},"Launch ID;"),(0,s.kt)("li",{parentName:"ul"},"Unique ID;"),(0,s.kt)("li",{parentName:"ul"},"Test case ID;")),(0,s.kt)("p",null,'For the better analysis, we merge small logs (which consist of 1-2 log lines and words number <= 100) together. We store this merged log message as a separate document if there are no other big logs (consisting of more than 2 log lines or having a stacktrace) in the test item. We store this merged log message in a separate field "merged_small_logs" for all the big logs if there are ones.'),(0,s.kt)("p",null,"The Analyzer preprocesses log messages from the request for test failure analysis: extracts error message, stacktrace, numbers, exceptions, urls, paths, parameters and other parts from text to search for the most similar items by these parts in the analytical base. These parts are saved in a separate fields for each log entry."),(0,s.kt)("p",null,"Each log entry along with its defect type is saved to ElasticSearch in the form of a separate document. All documents created compose an Index. The more test results index has, the more accurate results will be generated by the end of the analysis process."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"If you do not sure how many documents(logs) are contained in the Index at that moment, you can check it.\nFor that, perform the following actions:"),(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"Uncommented Service ElasticSearch ports in a docker-compose file or add them: 9200:9200;"),(0,s.kt)("li",{parentName:"ul"},"Restart-Service ElasticSearch with new docker-compose;"),(0,s.kt)("li",{parentName:"ul"},"Send a request to ElasticSearch:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"how many documents in the Index: GET http://localhost:9200/_cat/indices?v"),(0,s.kt)("li",{parentName:"ul"},"Detailed information:  POST http://localhost:9200/{project_name}/_search"))))),(0,s.kt)("p",null,"Test items of a launch in Debug mode are not sent to the service Analyzer. If the test item is deleted or moved to the Debug mode, it is removed from the Index."),(0,s.kt)("h3",{id:"auto-analysis-process"},"Auto-Analysis process"),(0,s.kt)("p",null,"After your Index has been completed. You can start to use the auto-analysis feature."),(0,s.kt)("p",null,"Analysis can be launched automatically (via Project Settings) or manually (via the menu on All launches view). After the process is started, all items with defect type \u201cTo investigate\u201d with logs (log level >= 40 000) from the analyzed launch are picked and sent to the Analyzer Service and the service ElasticSearch for investigations."),(0,s.kt)("h3",{id:"how-elasticsearch-returns-candidates-for-analysis"},"How Elasticsearch returns candidates for Analysis"),(0,s.kt)("p",null,"Here is a simplified procedure of the Auto-analysis candidates searching via ElasticSearch."),(0,s.kt)("p",null,'When a "To investigate" test item appears we search for the most similar test items in the analytical base. We create a query which searches by several fields, message similarity is a compulsory condition, other conditions boost the better results and they will have a higher score (boost conditions are similarity by unique id, launch name, error message, found exceptions, numbers in the logs and etc.). '),(0,s.kt)("p",null,"Then ElasticSearch receives a log message and divides it into the terms (words) with a tokenizer and calculates the importance of each term (word). For that ElasticSearch computes TF-IDF for each term (word) in the analyzed log. If the level of term importance is low, the ElasticSearch ignores it. "),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("em",{parentName:"p"},"Term frequency (TF)")," \u2013 how many time term (word) is used in an analyzed log;"),(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("em",{parentName:"p"},"Document frequency (DF)")," \u2013 in how many documents this term (word) is used in Index;"),(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("em",{parentName:"p"},"TF-IDF (TF \u2014 term frequency, IDF \u2014 inverse document frequency)")," \u2014 a statistical measure used to assess the importance of a term (word) in the context of a log that is part of an Index. The weight of a term (word)   is proportional to the amount of use of this term (word)   in the analyzed log and inversely proportional to the frequency of term (word)   usage in Index.")),(0,s.kt)("p",null,"The term (word) with the highest level of importance is the term (word) that is used very frequently in analyzed log and moderately in the Index."),(0,s.kt)("p",null,"After all important terms are defined, Elastic search calculates the level of equality between an analyzed log and each log in the Index.  For each log from the Index is calculated a score. "),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"How calculated a score:"),(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("strong",{parentName:"p"},"score(q,d)")," ="),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre"},"     coord(q,d) -\n     SUM (\n            tf(t in d),\n           idf(t)\xb2,\n            t.getBoost(),\n                   ) (t in q)\n")),(0,s.kt)("p",{parentName:"admonition"},"Where:"),(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"score(q,d) is the relevance score of log \u201cd\u201d for query \u201cq\u201d."),(0,s.kt)("li",{parentName:"ul"},"coord(q,d) is the coordination factor: the percent of words equality between analyzed log and particular log from the ElasticSearch."),(0,s.kt)("li",{parentName:"ul"},"The sum of the weights for each word \u201ct\u201d in the query \u201cq\u201d for log \u201cd\u201d."),(0,s.kt)("li",{parentName:"ul"},"tf(t in d) is a frequency of the word in the analyzed log."),(0,s.kt)("li",{parentName:"ul"},"idf(t) is the inverse frequency of the word in all saved logs in the Index."),(0,s.kt)("li",{parentName:"ul"},"t.getBoost() is the boost that has been applied to the query. The higher priority for logs with:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"The same Launch name;"),(0,s.kt)("li",{parentName:"ul"},"The same UID;"),(0,s.kt)("li",{parentName:"ul"},"Manual analysis;"),(0,s.kt)("li",{parentName:"ul"},"Error message;"),(0,s.kt)("li",{parentName:"ul"},"The same numbers in the log;"),(0,s.kt)("li",{parentName:"ul"},"and etc."))))),(0,s.kt)("p",null,'The results are sorted by the score, in case the scores are the same, they are sorted by "start_time" field, which helps to boost the test items with closer to today dates. So the latest defect types will be higher in the returned by Elasticsearch results.'),(0,s.kt)("p",null,"The ElasticSearch returns to the service Analyzer 10 logs with the highest score for each log. Analyzer regroups all the results by a defect type and chooses the best representative for each defect type group, based on their scores."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"In the case the test item has several logs, the best representative for a defect type group will become the log with the highest score among all logs.")),(0,s.kt)("h3",{id:"how-auto-analysis-makes-decisions-for-candidates-returned-by-elasticsearch"},"How Auto-analysis makes decisions for candidates, returned by Elasticsearch"),(0,s.kt)("p",null,"The ElasticSearch returns to the service Analyzer 10 logs with the highest score for each query and all these candidates will be processed further by the ML model. Analyzer regroups all the results by a defect type and chooses the best representative for each defect type group, based on their scores."),(0,s.kt)("p",null,"The ML model is an XGBoost model which features (about 30 features) represent different statistics about the test item, log message texts, launch info and etc, for example:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"the percent of selected test items with the following defect type"),(0,s.kt)("li",{parentName:"ul"},"max/min/mean scores for the following defect type"),(0,s.kt)("li",{parentName:"ul"},"cosine similarity between vectors, representing error message/stacktrace/the whole message/urls/paths and other text fields"),(0,s.kt)("li",{parentName:"ul"},"whether it has the same unique id, from the same launch"),(0,s.kt)("li",{parentName:"ul"},"the probability for being of a specific defect type given by the Random Forest Classifier trained on Tf-Idf vectors")),(0,s.kt)("p",null,"The model gives a probability for each defect type group, and we choose the defect type group with the highest probability and the probability should be >= 50%."),(0,s.kt)("p",null,"A defect comment and a link to BTS of the best representative from this group come to the analyzed item."),(0,s.kt)("p",null,'The Auto-analysis model is retrained for the project and this information can be found in the section "How models are retrained" below.'),(0,s.kt)("p",null,"So this is how Auto-Analysis works and defines the most relevant defect type on the base of the previous investigations. We give an ability to our users to configure auto-analysis manually."),(0,s.kt)("h2",{id:"auto-analysis-settings"},"Auto-analysis Settings"),(0,s.kt)("p",null,"All settings and configurations of Analyzer and ElasticSearch are situated on a separate tab on Project settings."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Login into ReportPortal instance as Administrator or project member with PROJECT MANAGER role on the project;")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Come on Project Settings, choose Auto-Analysis section;"))),(0,s.kt)("media-view",{thumbnail:a(41038),src:"https://youtu.be/7dN8uEKTkzo",alt:"Auto-analysis settings for AI-based defects triage",type:"video"}),(0,s.kt)("p",null,"In this section user can perform the following actions:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Switch ON/OFF auto-analysis;")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Choose a base for analysis (All launches/ Launches with the same name);")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Configure ElasticSearch settings;")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Remove/Generate ElasticSearch index."))),(0,s.kt)("h3",{id:"switch-onoff-automatic-analysis"},"Switch ON/OFF automatic analysis;"),(0,s.kt)("p",null,'To activate the "Auto-Analysis" functionality in a project, perform the following steps:'),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Login ReportPortal instance as Administrator or project member with PROJECT MANAGER role on the project.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},'Select ON  in the "Auto-Analysis" selector on the Project settings / Auto-analysis section.')),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},'Click the "Submit" button. Now "Auto-Analysis" will start as soon as any launch finishes.'))),(0,s.kt)("h3",{id:"base-for-analysis-all-launches-launches-with-the-same-name"},"Base for analysis (All launches/ Launches with the same name);"),(0,s.kt)("p",null,"You can choose which results from previous runs should be considered in Auto \u2013Analysis for defining the failure reason."),(0,s.kt)("p",null,"There two options:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"All launches;")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Launches with the same name;"))),(0,s.kt)("p",null,"If you choose ",(0,s.kt)("strong",{parentName:"p"},"\u201cAll launches\u201d"),", test results in the launch will have analyzed on the base of all data in Elastic search of the project. "),(0,s.kt)("p",null,"If you choose ",(0,s.kt)("strong",{parentName:"p"},"\u201cLaunches with the same name\u201d"),", test results in the launch will have analyzed on the base of all data in Elastic search that have the same Launch name."),(0,s.kt)("p",null,"You can choose those configurations via Project configuration or from the list of actions on All launches view."),(0,s.kt)("h3",{id:"configure-elasticsearch-settings"},"Configure ElasticSearch settings"),(0,s.kt)("p",null,"Also, we give the possibility for our users to configure 2 main parameters of ElasticSearch manually:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"MinShouldMatch")," - percent of words equality between analyzed log and particular log from the ElasticSearch. If a log from ElasticSearch has the value less then set, this log will be ignored for AA. Min value 50, max value 100."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Number of log lines")," - the number of first lines of log message that should be considered in ElasticSearch. Only the chosen number of logline will be saved in ElasticSearch. Possible values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, All.  In case you choose \u201cALL\u201d, the full text of log will be saved in ElasticSearch Index.")),(0,s.kt)("p",null,"Parameter ",(0,s.kt)("strong",{parentName:"p"},"MinShouldMatch")," is involved in the calculation of a score. It is a minimum value for coord(q,d) (the percent of words equality between an analyzed log and a particular log from the ElasticSearch). So you can increase search hardness and choose a minimum level of similarity that is required."),(0,s.kt)("p",null,"With the parameter ",(0,s.kt)("strong",{parentName:"p"},"Number of log lines")," - you can write the root cause of test failure in the first lines and configure the analyzer to take into account only the required lines. "),(0,s.kt)("p",null,"With these 2 parameters, you can configure the accuracy of the analysis that you need. For your facilities we have prepared 3 pre-sets with values:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"Light")," - search conditions are freer. You will get more results, but with the less level of similarity;"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"Moderate"),' - "happy medium";'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"Classic")," - search conditions are strict. You will get fewer results, but with a higher level of similarity;")),(0,s.kt)("h3",{id:"removegenerate-elasticsearch-index"},"Remove/Generate ElasticSearch index"),(0,s.kt)("p",null,"There two possible actions that can be performed under Index in ElasticSearch. "),(0,s.kt)("p",null,"You can ",(0,s.kt)("strong",{parentName:"p"},"remove the Index from ElasticSearch")," and all logs with there defect type will be deleted. ML will be set to zero. All data with your investigations will be deleted from the ElasticSearch. For creating a new one you could start to investigate test results manually or generate data based on previous results on the project once again. "),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Your investigations in ReportPortal will not be changed. The operation concerns only ElasticSearch base.")),(0,s.kt)("media-view",{thumbnail:a(71782),src:"https://youtu.be/lZoZm_n4vNw",alt:"Remove Index",type:"video"}),(0,s.kt)("p",null,"Another option, you can ",(0,s.kt)("strong",{parentName:"p"},"generate the Index in ElasticSearch"),". In the case of generation, all data will be removed from ElasticSearch and the new one will be generated based on all previous investigations on the project following current analysis settings. "),(0,s.kt)("p",null,"At the end of the process, you will receive a letter with info about the end of the process and with several items that will be appeared in ElasticSearch."),(0,s.kt)("p",null,"You can use index generation for several goals. For example, assume two hypothetical situations when index generation can be used:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"by accident you remove the index, but now you want to restore it. ")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"The new base will be generated following logs and settings that are existing on the moment of operating. So index before removing and index after generation can be different. ")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"you have changed a parameter ",(0,s.kt)("strong",{parentName:"li"},"Number of log lines")," for 3.  But your existing index contains logs with value ALL. You can generate a new index, the old index will be removed, and a new one will be generated. Logs in the new index will contain 3 lines;  ")),(0,s.kt)("media-view",{thumbnail:a(88060),src:"https:youtu.be/54EO4qM-9HU",alt:"Generate Index",type:"video"}),(0,s.kt)("p",null,"We strongly do not recommend use auto-analysis until the new index will be generated."),(0,s.kt)("h3",{id:"manual-analysis"},"Manual analysis"),(0,s.kt)("p",null,"Analysis can be launched manually. To start the analysis manually, perform the following steps:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},'Navigate to the "Launches" page.')),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},'Select the "Analysis" option from the context menu next to the selected launch name.')),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Choose the scope of previous results on the base of which test items should be auto-analyzed.  The default is the one that is chosen on the setting page, but you can change it manually."))),(0,s.kt)("p",null,"Via this menu you can choose 3 options unlike on Project Settings: "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"All launches;")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Launches with the same name;")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Only current launch;"))),(0,s.kt)("p",null,"Options ",(0,s.kt)("strong",{parentName:"p"},"All launches")," and ",(0,s.kt)("strong",{parentName:"p"},"Launches with the same name")," are working the same as on project settings.\nIf you choose ",(0,s.kt)("strong",{parentName:"p"},"Only current launch"),", the system is analyzing the test items of chosen launch only on a base of already investigated date of this launch."),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"Choose which items from launch should be analyzed:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Only To investigated; "),(0,s.kt)("li",{parentName:"ul"},"Items analyzed automatically (by AA);"),(0,s.kt)("li",{parentName:"ul"},"Items analyzed manually;")),(0,s.kt)("p",null,"In case the user chooses ",(0,s.kt)("strong",{parentName:"p"},"Only To investigate items"),' -  the system is analyzing only items with defect type "To investigate" in the chosen launch;'),(0,s.kt)("p",null,"In case the user chooses ",(0,s.kt)("strong",{parentName:"p"},"Items analyzed automatically (by AA)")," - the system is analyzing only items that have been already analyzed by auto-analysis. The results of the previous run of analysis will be set to zero and items will be analyzed once again."),(0,s.kt)("p",null,"In case the user chooses ",(0,s.kt)("strong",{parentName:"p"},"Items analyzed manually")," - the system is analyzing only items that have been already analyzed by the user manually. The results of the previous run of analysis will be set to zero and items will be analyzed once again."),(0,s.kt)("p",null,"In the case of multi-combination - the system is analyzing results dependence on chosen options."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"The Ignore flag is saved. If the item has flag ",(0,s.kt)("strong",{parentName:"p"},"Ignore in AA"),", it will not be re-analyzed.")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"For option ",(0,s.kt)("strong",{parentName:"p"},"Only current lunch")," you can not choose ",(0,s.kt)("em",{parentName:"p"},"Items analyzed automatically (by AA)")," and ",(0,s.kt)("em",{parentName:"p"},"Items analyzed manually")," simultaneously.")),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},'Click the "Analysis" button. Now "Auto-Analysis" will start.')),(0,s.kt)("p",null,'Any launches with an active analyzing process will be marked with the "Analysis" label. '),(0,s.kt)("media-view",{thumbnail:a(29320),src:"https://youtu.be/ulJ16fRT2Jw",alt:"Auto-Analysis Launched Manually",type:"video"}),(0,s.kt)("h2",{id:"label-aa"},"Label AA"),(0,s.kt)("p",null,'When the test item is analyzed by the ReportPortal, a label "AA" is set on the test item on a Step Level. You can filter results with a parameter \u201cAnalysed by RP (AA)\u201d'),(0,s.kt)("media-view",{src:a(40466),alt:"Label AA"}),(0,s.kt)("h2",{id:"ignore-in-auto-analysis"},"Ignore in Auto-Analysis"),(0,s.kt)("p",null,'If you don\'t want to save some test items in ElasticSearch, you can "Ignore it in Auto-Analysis". For that you can choose this action in \u201cDefect type editor\u201d pop-up:'),(0,s.kt)("media-view",{src:a(21666),alt:"Ignore in Auto-Analysis"}),(0,s.kt)("p",null,"Or from the action list for several test items:"),(0,s.kt)("media-view",{src:a(28497),alt:"Auto-Analysis Ignore Action List"}),(0,s.kt)("p",null,"When you choose \u201cIgnore in AA\u201d, logs of the chosen item are removed from the ElasticSearch."))}p.isMDXComponent=!0},88060:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/AAGenerate-749332a727bfee5c72a8b8484631bbd8.png"},29320:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/AAManual-c15ffafb811a2dca4646776398009ce8.png"},71782:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/AARemove-4628cb9e292d525b839a577e1ae2f514.png"},41038:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/AnalyzerClassic-e84482b604262debf2a5ac44cfe17d80.png"},40466:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/AutoAnalysisAA-492938a7a8d35e0cff6604746e8c16d9.png"},28497:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/AutoAnalysisIgnoreActionList-071fe375a01d3171912f9fac1f470e48.png"},21666:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/AutoAnalysisIgnorePopUp-3f27663ea4398232b265aa444d4dde27.png"}}]);