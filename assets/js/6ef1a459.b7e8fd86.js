"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86027],{25333:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(85893),i=r(11151);const o={sidebar_label:"Okta SAML"},a="Okta SAML",s={id:"reportportal-configuration/authorization/SAMLProvider/OktaSAML",title:"Okta SAML",description:"SAML plugin is available in ReportPortal on the Plugins page.",source:"@site/docs/reportportal-configuration/authorization/SAMLProvider/OktaSAML.mdx",sourceDirName:"reportportal-configuration/authorization/SAMLProvider",slug:"/reportportal-configuration/authorization/SAMLProvider/OktaSAML",permalink:"/docs/reportportal-configuration/authorization/SAMLProvider/OktaSAML",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/reportportal-configuration/authorization/SAMLProvider/OktaSAML.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Okta SAML"},sidebar:"docs",previous:{title:"Azure SAML",permalink:"/docs/reportportal-configuration/authorization/SAMLProvider/AzureSAML"},next:{title:"User account",permalink:"/docs/category/user-account"}},l={},d=[];function c(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{MediaViewer:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"okta-saml",children:"Okta SAML"}),"\n",(0,n.jsx)(t.p,{children:"SAML plugin is available in ReportPortal on the Plugins page."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"If you have a pre-created Internal user, you can't log in by SAML using their credentials (Email or Name)."})})}),"\n",(0,n.jsx)(t.admonition,{type:"important",children:(0,n.jsxs)(t.p,{children:["Before starting, please, read about the ",(0,n.jsx)(t.a,{href:"/reportportal-configuration/authorization/SAMLProvider/",children:"SAML provider"}),"."]})}),"\n",(0,n.jsx)(o,{src:"https://youtu.be/ljXvCVWG4mQ",alt:"Okta SAML authorization in our open source test reporting tool",type:"video"}),"\n",(0,n.jsx)(t.p,{children:"To set up access with SAML:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Log in to the ReportPortal as an ADMIN user"}),"\n",(0,n.jsx)(t.li,{children:"Then open the list on the right of the user's image."}),"\n",(0,n.jsx)(t.li,{children:"Click the 'Administrative' link"}),"\n",(0,n.jsx)(t.li,{children:"Click the 'Plugins' from the left-hand sidebar"}),"\n",(0,n.jsx)(t.li,{children:"Click on the'SAML' tab."}),"\n",(0,n.jsx)(t.li,{children:"Click on Add new integration"}),"\n",(0,n.jsx)(t.li,{children:"The next fields should be present:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"'Identity provider name ID*': text\n'Provider name*': text\n'Metadata URL*': URL\n'RP callback URL': URL - RP host/uat\n'Email attribute*': text\n'Name attributes mode' : \n'Last name attribute' text\n'First name attribute' text\nor\n'Full name attribute' : text\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Mandatory fields are marked with red.\nClick the 'Submit' button.\nAll users of SAML will have access to the ReportPortal instance.",(0,n.jsx)(t.br,{}),"\n","Just click on the button 'Login with SAML' and choose a needed integration from the drop-down"]}),"\n",(0,n.jsx)(t.p,{children:"On Okta side you should to specify SSO URL and audience URI."}),"\n",(0,n.jsx)(t.p,{children:"The format for SSO URL is:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"http (https)://<address of your RP instance>/uat/saml/sp/SSO/alias/report-portal-sp\n"})}),"\n",(0,n.jsx)(t.p,{children:"The audience URI is:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"report.portal.sp.id\n"})}),"\n",(0,n.jsx)(o,{src:r(4928),alt:"Basic SAML Configuration"}),"\n",(0,n.jsx)(t.p,{children:"\u201cRP callback URL\u201d field is an optional field to provide a redirect base path right in SAML integration settings. Fill in the field in format \u201cRP host/uat\u201d. The format for url is the next:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"https://reportportal.com/uat\n"})}),"\n",(0,n.jsx)(t.p,{children:"Once you have submitted an integration with \u201cRP callback URL\u201d, the URL will be applied to all SAML integrations."})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4928:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"assets/images/OktaSide-daee2fc6cbb6c2b3fa971f5cf4f8f5db.png"}}]);