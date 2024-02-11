"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[536],{3128:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=o(7624),i=o(2172);const s={sidebar_position:4},r="Automatic Reboots",c={id:"guides/automatic-reboots",title:"Automatic Reboots",description:"Configuring Automatic Reboots with Cron",source:"@site/docs/guides/automatic-reboots.md",sourceDirName:"guides",slug:"/guides/automatic-reboots",permalink:"/ko/guides/automatic-reboots",draft:!1,unlisted:!1,editUrl:"https://github.com/thijsvanloef/palworld-server-docker/docs/guides/automatic-reboots.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Using discord webhooks",permalink:"/ko/guides/discord/discord-webhooks"},next:{title:"Automatic Updates",permalink:"/ko/guides/automatic-updates"}},a={},d=[{value:"Configuring Automatic Reboots with Cron",id:"configuring-automatic-reboots-with-cron",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"automatic-reboots",children:"Automatic Reboots"}),"\n",(0,n.jsx)(t.h2,{id:"configuring-automatic-reboots-with-cron",children:"Configuring Automatic Reboots with Cron"}),"\n",(0,n.jsxs)(t.p,{children:["To be able to use automatic reboots with this server ",(0,n.jsx)(t.code,{children:"RCON_ENABLED"})," enabled."]}),"\n",(0,n.jsxs)(t.admonition,{type:"warning",children:[(0,n.jsxs)(t.p,{children:["If docker restart is not set to policy ",(0,n.jsx)(t.code,{children:"always"})," or ",(0,n.jsx)(t.code,{children:"unless-stopped"})," then the server will shutdown and will need to be manually restarted."]}),(0,n.jsxs)(t.p,{children:["The example docker run command and docker compose file in ",(0,n.jsx)(t.a,{href:"#how-to-use",children:"How to Use"})," already use the needed policy"]})]}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"AUTO_REBOOT_ENABLED"})," enable or disable automatic reboots (Default is disabled)"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"AUTO_REBOOT_CRON_EXPRESSION"})," is a cron expression, in a Cron-Expression you define an interval for when to run jobs."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["This image uses Supercronic for crons\nsee ",(0,n.jsx)(t.a,{href:"https://github.com/aptible/supercronic#crontab-format",children:"supercronic"}),"\nor ",(0,n.jsx)(t.a,{href:"https://crontab-generator.org",children:"Crontab Generator"}),"."]})}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"AUTO_REBOOT_CRON_EXPRESSION"})," to change the set the schedule, default is everynight at midnight according to the\ntimezone set with TZ"]})]})}function l(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},2172:(e,t,o)=>{o.d(t,{I:()=>c,M:()=>r});var n=o(1504);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);