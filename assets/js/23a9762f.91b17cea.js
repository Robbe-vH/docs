"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2253],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),c=r,h=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={},o="Asynchronous reporting",s={unversionedId:"dev-guides/AsynchronousReporting",id:"dev-guides/AsynchronousReporting",title:"Asynchronous reporting",description:"Overview",source:"@site/docs/dev-guides/AsynchronousReporting.mdx",sourceDirName:"dev-guides",slug:"/dev-guides/AsynchronousReporting",permalink:"/docs/dev-guides/AsynchronousReporting",draft:!1,editUrl:"https://github.com/reportportal/documentation/docs/dev-guides/AsynchronousReporting.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"API differences between v4 and v5",permalink:"/docs/dev-guides/APIDifferencesBetweenV4AndV5"},next:{title:"Attachments Guide",permalink:"/docs/dev-guides/AttachmentsGuide"}},p={},l=[{value:"Overview",id:"overview",level:3},{value:"Simple scheme of interactions between RabbitMq and API",id:"simple-scheme-of-interactions-between-rabbitmq-and-api",level:3},{value:"Enable asynchronous reporting in agents",id:"enable-asynchronous-reporting-in-agents",level:3},{value:"Asynchronous API",id:"asynchronous-api",level:3},{value:"Detailed scheme of interactions between RabbitMq and API",id:"detailed-scheme-of-interactions-between-rabbitmq-and-api",level:3},{value:"API properties",id:"api-properties",level:4},{value:"Exchanges and queues for reporting",id:"exchanges-and-queues-for-reporting",level:4},{value:"Scheme",id:"scheme",level:4},{value:"Finishing launch",id:"finishing-launch",level:4}],u={toc:l};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"asynchronous-reporting"},"Asynchronous reporting"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Asynchronous reporting implemented using ",(0,r.kt)("a",{parentName:"p",href:"https://www.rabbitmq.com/tutorials/amqp-concepts.html"},"AMQP 0-9-1")," protocol based on\n",(0,r.kt)("a",{parentName:"p",href:"https://www.rabbitmq.com"},"RabbitMq")," message broker.\nThe main idea of the async reporting is to give a response back immediately after a server that is receiving a request from a client.\nSo, using this approach, a client is not blocked and doesn't wait until a server processes the request."),(0,r.kt)("h3",{id:"simple-scheme-of-interactions-between-rabbitmq-and-api"},"Simple scheme of interactions between RabbitMq and API"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Difference between ID and UUID")),"  "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ID")," is a physical identificator of an entity generated automatically by a database at the moment of saving.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"UUID")," is a virtual identificator of the entity. Can be specified in a request or, if not present, in a request generated automatically at the moment the\n",(0,r.kt)("inlineCode",{parentName:"p"},"api")," accepts the request.",(0,r.kt)("br",{parentName:"p"}),"\n","Each entity has both ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"UUID"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," is used to perform the CRUD operations with an entity that is ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"already saved in db")),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"UUID")," is used to build the child-parent relationships between entities at the client side during reporting.\nIn case of synchronous reporting, any response from ",(0,r.kt)("inlineCode",{parentName:"p"},"api")," is returned ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"after"))," handling of the request and saving the entity in a database.\nIn case of asynchronous reporting, any response from ",(0,r.kt)("inlineCode",{parentName:"p"},"api")," is returned ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"before"))," handling of the request and saving the entity in a database.\nThe responses in both modes look the same:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "cd64d5eb-fea1-4e7e-8a5a-69998ac5620f"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"id")," property of the response is actually an ",(0,r.kt)("inlineCode",{parentName:"p"},"UUID"),". This is due to backward compatibility.\nSo when you have this uuid and want to update, delete etc. entity you should get a physical ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," from the db first. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Simple asynchronous reporting scheme")),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1"),(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"API")," receives HTTP request from ",(0,r.kt)("inlineCode",{parentName:"li"},"client"),". ",(0,r.kt)("inlineCode",{parentName:"li"},"Controller")," checks permissions and throws the request to ",(0,r.kt)("inlineCode",{parentName:"li"},"producer"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2"),(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"Producer")," validates business rules if necessary, generates UUID (virtual id) for an entity and returns it back to the ",(0,r.kt)("inlineCode",{parentName:"li"},"controller"),",\ncomposes a message for ",(0,r.kt)("inlineCode",{parentName:"li"},"RabbitMq")," and sends it to the specified queue.\nAfter that, a ",(0,r.kt)("inlineCode",{parentName:"li"},"controller")," returns HTTP response to the ",(0,r.kt)("inlineCode",{parentName:"li"},"client")," that contains UUID. ",(0,r.kt)("strong",{parentName:"li"},"At the moment, the physical entity may not be created yet!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3"),(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"Consumer")," starts processing the message as soon as it is received from ",(0,r.kt)("inlineCode",{parentName:"li"},"RabbitMq"),".\nAfter a successful processing, the entity will be stored in a database and obtain a physical id.\nIn case of an exception, it is logged and the entity is not saved.")),(0,r.kt)("media-view",{src:n(96530),alt:"Simple Scheme"}),(0,r.kt)("h3",{id:"enable-asynchronous-reporting-in-agents"},"Enable asynchronous reporting in agents"),(0,r.kt)("p",null,"Async reporting is supported only by agents since version 5.0.0.\nTo enable it you should set ",(0,r.kt)("inlineCode",{parentName:"p"},"rp.reporting.async=true")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"reportportal.properties"),".\nBy default (if property ",(0,r.kt)("inlineCode",{parentName:"p"},"rp.reporting.async")," is not specified) agents work in a synchronous mode."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"rp.endpoint=https://example.com\nrp.api.key=xxx\nrp.launch=launch-name\nrp.project=project-name\nrp.reporting.async=true\n")),(0,r.kt)("p",null,"(*) Listed above is an example for Java-based client. For another platforms please see corresponding documentation."),(0,r.kt)("h3",{id:"asynchronous-api"},"Asynchronous API"),(0,r.kt)("p",null,"Async controllers have ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v2")," prefix.\nRequests and responses have no differences with sync ones but there are some specific distinctions in the behavior that is described in\n",(0,r.kt)("a",{parentName:"p",href:"./ReportingDevelopersGuide"},"reporting guide"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ReportingDevelopersGuide#start-launch"},"Start launch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ReportingDevelopersGuide#start-rootsuite-item"},"Start root(suite) item")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ReportingDevelopersGuide#start-childcontainer-item"},"Start child(container) item")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ReportingDevelopersGuide#start-childstep-item"},"Start child(step) item")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ReportingDevelopersGuide#finish-child-item"},"Finish child item")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ReportingDevelopersGuide#finish-parentcontainer-item"},"Finish parent(container) item")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ReportingDevelopersGuide#save-single-log-without-attachment"},"Save single log without attachment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ReportingDevelopersGuide#batch-save-logs"},"Batch save logs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ReportingDevelopersGuide#save-launch-log"},"Save launch log")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ReportingDevelopersGuide#finish-rootsuite-item"},"Finish root(suite) item")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ReportingDevelopersGuide#finish-launch"},"Finish launch"))),(0,r.kt)("h3",{id:"detailed-scheme-of-interactions-between-rabbitmq-and-api"},"Detailed scheme of interactions between RabbitMq and API"),(0,r.kt)("h4",{id:"api-properties"},"API properties"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"API")," has the following properties for connection to RabbitMq service:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Environment variable name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rp.amqp.host"),(0,r.kt)("td",{parentName:"tr",align:null},"RP_AMQP_HOST"),(0,r.kt)("td",{parentName:"tr",align:null},"rabbitmq")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rp.amqp.port"),(0,r.kt)("td",{parentName:"tr",align:null},"RP_AMQP_PORT"),(0,r.kt)("td",{parentName:"tr",align:null},"5672")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rp.amqp.user"),(0,r.kt)("td",{parentName:"tr",align:null},"RP_AMQP_USER"),(0,r.kt)("td",{parentName:"tr",align:null},"rabbitmq")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rp.amqp.pass"),(0,r.kt)("td",{parentName:"tr",align:null},"RP_AMQP_PASS"),(0,r.kt)("td",{parentName:"tr",align:null},"rabbitmq")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rp.amqp.addresses"),(0,r.kt)("td",{parentName:"tr",align:null},"RP_AMQP_ADDRESSES"),(0,r.kt)("td",{parentName:"tr",align:null},"amqp://rabbitmq:rabbitmq@rabbitmq:5672")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rp.amqp.queues"),(0,r.kt)("td",{parentName:"tr",align:null},"RP_AMQP_QUEUES"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rp.amqp.queuesPerPod"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"10")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rp.amqp.host")," - Hostname of RabbitMq service.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"rp.amqp.port")," - Port of RabbitMq service.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"rp.amqp.user")," - Username to connect to RabbitMq service.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"rp.amqp.pass")," - User password to connect to RabbitMq service.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"rp.amqp.addresses")," - Full address to connect to RabbitMq service.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"rp.amqp.queues")," - Number of queues to be processed by this service-api.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"rp.amqp.queuesPerPod")," - Cluster configuration parameter. Number of queues to be processed by this service-api pod\n(default effectively infinite).\nNote: should correlate with number QUEUE_AMOUNT & number of service-api pods being started in cluster."),(0,r.kt)("h4",{id:"exchanges-and-queues-for-reporting"},"Exchanges and queues for reporting"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"API")," produces two reporting exchanges - ",(0,r.kt)("inlineCode",{parentName:"p"},"reporting")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"reporting.retry"),". Exchange ",(0,r.kt)("inlineCode",{parentName:"p"},"reporting")," contains queues for storing messages\nfrom the requests. Exchange ",(0,r.kt)("inlineCode",{parentName:"p"},"reporting.retry")," contains queues for storing messages that were consumed exceptionally from the queues in ",(0,r.kt)("inlineCode",{parentName:"p"},"reporting"),"\nexchange. The amount of the queues in the exchanges depends on ",(0,r.kt)("inlineCode",{parentName:"p"},"rp.amqp.queues")," parameter. Exchange ",(0,r.kt)("inlineCode",{parentName:"p"},"reporting")," has ",(0,r.kt)("inlineCode",{parentName:"p"},"N")," queues with names\n",(0,r.kt)("inlineCode",{parentName:"p"},"reporting.0 ... reporting.N"),". Exchange ",(0,r.kt)("inlineCode",{parentName:"p"},"reporting.retry")," has ",(0,r.kt)("inlineCode",{parentName:"p"},"N+1")," queues with the names ",(0,r.kt)("inlineCode",{parentName:"p"},"reporting.retry.0 ... reporting.retry.N")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"reporting.dlq"),".\nIn case message from ",(0,r.kt)("inlineCode",{parentName:"p"},"reporting.retry")," was consumed with exception more than 10 times, the message will be stored in reporting.dlq which is\n",(0,r.kt)("a",{parentName:"p",href:"https://www.rabbitmq.com/dlx.html"},"dead letter queue"),"."),(0,r.kt)("media-view",{src:n(43944),alt:"Exchanges Queues"}),(0,r.kt)("h4",{id:"scheme"},"Scheme"),(0,r.kt)("p",null,"All requests (items, logs) related to the same launch will be stored in the same RabbitMQ queue.\nIt is achieved using the following algorithm that maps launch uuid to a queue key:"),(0,r.kt)("media-view",{src:n(333),alt:"Uuid Queus Mapping"}),(0,r.kt)("p",null,"Messages in the queue don't have a strict order but they are stored mostly in the same order as they arrive from ",(0,r.kt)("inlineCode",{parentName:"p"},"client"),".\nThis ensures a minimal amount of exceptions (causing the sending of such messages to the retry queue) caused by cases when a child is handled before its own parent. "),(0,r.kt)("p",null,"Consuming scheme:"),(0,r.kt)("media-view",{src:n(69048),alt:"Consuming"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"(!)")," Possible exceptions that may be thrown and lead to sending the message to the retry queue:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On start launch/test item:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"User not found."),(0,r.kt)("li",{parentName:"ul"},"Entity not found. Parent entity not found."),(0,r.kt)("li",{parentName:"ul"},"Bad request. Start time of the child item is earlier than the parent start time, trying to report a child child under a retry item, trying\nto report a non-nested step under a nested step parent, trying to rerun a launch that does not exist."))),(0,r.kt)("li",{parentName:"ul"},"On finish launch/test item:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Entity not found. Entity that has to be finished not found in database or parent entity not found (for test items)."),(0,r.kt)("li",{parentName:"ul"},"Bad request. User tries to finish already finished entity. Finish time is earlier than start time."),(0,r.kt)("li",{parentName:"ul"},"Access denied. User tries to finish not own entity of under not own project"))),(0,r.kt)("li",{parentName:"ul"},"On log creation:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Entity not found. Trying to create log for not existing launch/test item")))),(0,r.kt)("h4",{id:"finishing-launch"},"Finishing launch"),(0,r.kt)("p",null,"If the order is not broken, launch finish request will be handled when there are no more child item requests in the queue."),(0,r.kt)("media-view",{src:n(20872),alt:"Finish Launch"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"(!)")," It is a main difference in reporting mechanism between ReportPortal version 4 and 5.\nIn case the launch finish request is not last in the queue it will be finished anyway.\nBut all the next requests under the launch will be handled as soon as they get to the consumer and the launch statistics will be updated.\nSo it is possible to report items under already finished launch."))}d.isMDXComponent=!0},69048:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/Consuming-8ac6509081b9d7f72476ac0bf161ee04.png"},43944:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/ExchangesQueues-82936b5f9bd33e45f8b6d4c3ff1705da.png"},20872:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/FinishLaunch-67ef9725f4ecc9de62732517758a3448.png"},96530:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/SimpleScheme-26a8a2f83498680ef5aa64628e1e6b11.png"},333:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/UuidQueusMapping-c52ac1d1ea2ce153ad94c3f6edbccb31.png"}}]);