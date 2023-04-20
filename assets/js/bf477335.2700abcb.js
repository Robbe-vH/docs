"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[963],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75916:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:2,sidebar_label:"Creation of project and adding users"},i="Creation of project and adding users",l={unversionedId:"reportportal-configuration/CreationOfProjectAndAddingUsers",id:"reportportal-configuration/CreationOfProjectAndAddingUsers",title:"Creation of project and adding users",description:"The main question of how you can organize your working space in ReportPortal.",source:"@site/docs/reportportal-configuration/CreationOfProjectAndAddingUsers.md",sourceDirName:"reportportal-configuration",slug:"/reportportal-configuration/CreationOfProjectAndAddingUsers",permalink:"/docs/reportportal-configuration/CreationOfProjectAndAddingUsers",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/reportportal-configuration/CreationOfProjectAndAddingUsers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Creation of project and adding users"},sidebar:"defaultSidebar",previous:{title:"Components Overview",permalink:"/docs/reportportal-configuration/ComponentsOverview"},next:{title:"Project configuration",permalink:"/docs/reportportal-configuration/ProjectConfiguration"}},s={},p=[{value:"Create a project",id:"create-a-project",level:2},{value:"Add users to project",id:"add-users-to-project",level:2},{value:"Invite a user to a project",id:"invite-a-user-to-a-project",level:2},{value:"Assign user to the project",id:"assign-user-to-the-project",level:2},{value:"Edit project role",id:"edit-project-role",level:2},{value:"Unassign user from the project",id:"unassign-user-from-the-project",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creation-of-project-and-adding-users"},"Creation of project and adding users"),(0,a.kt)("p",null,"The main question of how you can organize your working space in ReportPortal.\nLet's see two use cases which can help you to make a decision."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Use Case 1"),": "),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Situation:")," We have a small team. Everybody can see everything. We need one dashboard which shows information about the whole project."),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Solution:")," Create one project. Assign all users on the created project. View all types of test cases (UI, API, Unit and so on) on this project. Divide executions by custom filters. Create a dashboard with a widget based on filters."),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Pros:")," You have a dashboard that can combine all results needed for your team. You need to configure only one project."),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Cons:")," All team members can see all results, you can not configure permissions rules.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Use Case 2"),": "),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Situation:")," We have a big team with a difficult permission structure and nested streams. Only persons with granted permissions can see results of a certain stream. "),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Solution:")," Create separate projects for different streams. Assign users to appropriate projects. Create a dashboard with a widget based on filters for each project."),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Pros:")," Security, only users with granted permission will have access to the data."),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Cons:")," You can not see a single dashboard for several dashboards. ")),(0,a.kt)("p",null,"If you choose a strategy, it is time to create your first project."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Permission:"),"\nVia Administrative page  ADMINISTRATOR can create, configure, delete projects and add/invite/assign/unassign users on/to the projects. "),(0,a.kt)("h2",{id:"create-a-project"},"Create a project"),(0,a.kt)("p",null,"To create a project for a team:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"login to the ReportPortal as an ADMIN user"),(0,a.kt)("li",{parentName:"ul"},"Open the list on the right of the user's image."),(0,a.kt)("li",{parentName:"ul"},"Click the 'Administrative' link "),(0,a.kt)("li",{parentName:"ul"},"Select 'Projects' from the left-hand sidebar"),(0,a.kt)("li",{parentName:"ul"},"Click the 'Add Project' button in the right top corner"),(0,a.kt)("li",{parentName:"ul"},"Then enter a name of the project"),(0,a.kt)("li",{parentName:"ul"},"Click the 'Submit' button.")),(0,a.kt)("p",null,"A confirmation message in the status bar should appear."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:"),"\nThe name of the project should contain between 3-256 symbols.\nIt can include Latin and numeric characters, as well as underscores and dashes.\nThe name should be unique and cannot be changed after saving.")),(0,a.kt)("p",null,"An Admin can configure the project settings or leave them as the default.\nProject members with PROJECT_MANAGER roles are able to set up the project settings.\nTo know how project settings could be updated, go to the ",(0,a.kt)("a",{parentName:"p",href:"./ProjectConfiguration"},"ProjectConfiguration")," section"),(0,a.kt)("p",null,"To know more about the project's management, go to Management Board > All Projects page."),(0,a.kt)("p",null,"You have a project, now add your team members to it.  You can create a new user and send credentials for them - ",(0,a.kt)("strong",{parentName:"p"},"Add user")," or you can send them an invite link - ",(0,a.kt)("strong",{parentName:"p"},"Invite user"),"."),(0,a.kt)("h2",{id:"add-users-to-project"},"Add users to project"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Permission:"),"\nVia Administrative page, only ADMINISTRATOR can add users."),(0,a.kt)("p",null,"A new user can be added on projects with the next steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"login to the ReportPortal as an ADMIN user"),(0,a.kt)("li",{parentName:"ul"},"Then open the list on the right of the user's image."),(0,a.kt)("li",{parentName:"ul"},"Click the 'Administrative' link "),(0,a.kt)("li",{parentName:"ul"},"Select 'Projects' from the left-hand sidebar"),(0,a.kt)("li",{parentName:"ul"},"Find the project on which user/s will be added"),(0,a.kt)("li",{parentName:"ul"},"Click the 'Members' icon on the tail of the project"),(0,a.kt)("li",{parentName:"ul"},"Click the 'Add User' button"),(0,a.kt)("li",{parentName:"ul"},"Next to a form opens in the pop-up:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"'login': <unique_login_name>\n'Full Name': <user_full_name>\n'Email': <unique_email_address>\n'Account role': USER (by default)\n'Project Role': MEMBER (by default)\n'Password': could be entered manually (at least 6 symbols required) or generated via the link under the field.\n")),(0,a.kt)("p",null,"Example of user creation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Enter the user's login: Demo\nEnter the user's full name: Demo user\nEnter the user's email: demo_user@example.com\n'Account role': USER (by default)\n'Project Role': MEMBER (by default)\nAdd password: 1q2w3e \n")),(0,a.kt)("p",null,"Submit the form."),(0,a.kt)("p",null,"A confirmation message in the status bar should appear."),(0,a.kt)("p",null,"The notification email letter is sent to the email address of the new user."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:"),"\nPlease, do not forget to review project roles on regular basis. We recommend to do it at least quarterly. ")),(0,a.kt)("p",null,'By default, the system creates a personal project for new users. All new users which have been added to the ReportPortal will have a personal project along with the project where they have been assigned on. The user will be assigned to  "Personal Project" with the PROJECT MANAGER project role.'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:"),"\nIf you do not need a personal project, ADMINISTRATOR can delete it. This project will be removed from the instance. But if the user is unassigned from all projects in the system, and he/she will log in to the ReportPortal after that - the deleted personal project will be created once more time.")),(0,a.kt)("p",null,"If you wish to know more about adding user options, go to Management Board > All Users page."),(0,a.kt)("h2",{id:"invite-a-user-to-a-project"},"Invite a user to a project"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Permission:"),"\nVia Administrative page, only ADMINISTRATOR can invite users.\nVia Project Space ADMINISTRATOR and PROJECT MANAGER can invite users."),(0,a.kt)("p",null,"To invite a user should perform the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Login into ReportPortal instance as ADMINISTRATOR.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Navigate to the All Users page.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Click the "Invite User" button.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'The "Invite new user" form will appear.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Fill in the form and click the "Send invite" button. The invitation has been sent. You can copy the link to the invitation from the "Link to\ninvitation" field.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A user will receive an email with the link to the invitation. The registration\nlink will be active until the user registers in the system by this reference,\nbut not more than 24 hours. When the user clicks the link, he/she will see a registration form.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'A user needs to fill in the registration form and click the "Register" button to complete the registration. '))),(0,a.kt)("h2",{id:"assign-user-to-the-project"},"Assign user to the project"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Permission:"),"\nVia Administrative page, only ADMINISTRATOR can assign users.\nVia Project Space ADMINISTRATOR and PROJECT MANAGER can assign users."),(0,a.kt)("p",null,"Perform the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Login into the ReportPortal as a user with an ADMINISTRATOR project role.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Then click the 'All users page' icon on the project page.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click on Project name near a user name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click on 'Add project'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type first 3 symbols of the needed project and choose a project from the proposed list")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Choose a project role (Member by default)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click on the stick")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The new assignment will be automatically saved."))),(0,a.kt)("h2",{id:"edit-project-role"},"Edit project role"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Permission:"),"\nVia Administrative page, only ADMINISTRATOR can edit the project role.\nVia Project Space ADMINISTRATOR and PROJECT MANAGER can edit the project role."),(0,a.kt)("p",null,"To edit the project role, perform the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Login into the ReportPortal as a user with an ADMINISTRATOR project role.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Then click the 'All users page' icon on the project page.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click on Project name near a user name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Select a new value from the "Project Role" drop-down for the user')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The new project role will be automatically saved."))),(0,a.kt)("h2",{id:"unassign-user-from-the-project"},"Unassign user from the project"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Permission:"),"\nVia Administrative page, only ADMINISTRATOR can unassign users.\nVia Project Space ADMINISTRATOR and PROJECT MANAGER can unassign users."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:"),"\nPlease, do not forget to review project roles on regular basis. We recommend to do it at least quarterly.")),(0,a.kt)("p",null,"Depending on the project needs the assignment could be removed.\nTo unassign the assignment for the user on the project, perform the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Login into the ReportPortal as a user with an ADMINISTRATOR project role.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Then click the 'All users page' icon on the project page.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Find the required member")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click on Project name near a user name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click on the cross near the project name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Confirm the action in the popup.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The user will be unassigned from the current project but will stay in the system."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:"),"\nUsers can not be unassign from their own personal projects.")))}m.isMDXComponent=!0}}]);