"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9222],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,f=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(f,p(p({ref:t},c),{},{components:n})):a.createElement(f,p({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var l=2;l<o;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:6,sidebar_label:"Maintain commands Cheat sheet"},p="Maintain commands Cheat sheet",s={unversionedId:"installation-steps/MaintainCommandsCheatSheet",id:"installation-steps/MaintainCommandsCheatSheet",title:"Maintain commands Cheat sheet",description:"Export as env var:",source:"@site/docs/installation-steps/MaintainCommandsCheatSheet.md",sourceDirName:"installation-steps",slug:"/installation-steps/MaintainCommandsCheatSheet",permalink:"/docs/installation-steps/MaintainCommandsCheatSheet",draft:!1,editUrl:"https://github.com/reportportal/documentation/docs/installation-steps/MaintainCommandsCheatSheet.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Maintain commands Cheat sheet"},sidebar:"defaultSidebar",previous:{title:"Deploy with Kubernetes",permalink:"/docs/installation-steps/DeployWithKubernetes"},next:{title:"Additional configuration parameters",permalink:"/docs/installation-steps/AdditionalConfigurationParameters"}},i={},l=[],c={toc:l};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"maintain-commands-cheat-sheet"},"Maintain commands Cheat sheet"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Export as env var:"),"\xa0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'export RP_PRJ=$(docker ps --filter="name=api" --format="\\{{.Names}}" | sed \'s/\\(.*\\)_api_[0-9]*/\\1/\')\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Install/restart ReportPortal:"),"\xa0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"docker-compose -p $RP_PRJ up -d --force-recreate\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Show all logs:"),"\xa0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"docker-compose -p $RP_PRJ logs\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Show specific logs:"),"\xa0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"docker-compose -p $RP_PRJ logs <name, e.g. api>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Delete everything except data:"),"\xa0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"docker-compose -p $RP_PRJ down --rmi -v --remove-orphans\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Backup / Dump the data:"),"\xa0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker exec <postgres_container_name> pg_dump -U <POSTGRES_USER> <database_name> > backup.sql\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Clean up the data:"),"\xa0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker exec -it <postgres_container_name> psql -U <POSTGRES_USER> -d <database_name>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    DROP TABLE schema_migrations;\n    DROP SCHEMA quartz CASCADE;\n    DROP SCHEMA public CASCADE; CREATE SCHEMA public;\n    \\q\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Restore the data:"),"\xa0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker exec -i <postgres_container_name> psql -U <POSTGRES_USER> -d <database_name> < backup.sql\n")),(0,r.kt)("p",null,"You can download ",(0,r.kt)("a",{target:"_blank",href:n(49901).Z},"PDF file")," with commands."))}m.isMDXComponent=!0},49901:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/CheatSheet-31def9e901c6ab7b0376518d67649f23.pdf"}}]);