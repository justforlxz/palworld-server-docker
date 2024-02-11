"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[680],{5532:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var n=a(7624),r=a(2172);const c={sidebar_position:1},s="Creating a backup",i={id:"guides/backup/creating-backup",title:"Creating a backup",description:"To create a backup of the game's save at the current point in time, use the command:",source:"@site/docs/guides/backup/creating-backup.md",sourceDirName:"guides/backup",slug:"/guides/backup/creating-backup",permalink:"/zh/guides/backup/creating-backup",draft:!1,unlisted:!1,editUrl:"https://github.com/thijsvanloef/palworld-server-docker/docs/guides/backup/creating-backup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Backup",permalink:"/zh/category/backup"},next:{title:"Restoring a backup",permalink:"/zh/guides/backup/restoring-backup"}},o={},u=[];function p(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"creating-a-backup",children:"Creating a backup"}),"\n",(0,n.jsx)(t.p,{children:"To create a backup of the game's save at the current point in time, use the command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker exec palworld-server backup\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This will create a backup at ",(0,n.jsx)(t.code,{children:"/palworld/backups/"})]}),"\n",(0,n.jsx)(t.p,{children:"The server will run a save before the backup if rcon is enabled."})]})}function d(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},2172:(e,t,a)=>{a.d(t,{I:()=>i,M:()=>s});var n=a(1504);const r={},c=n.createContext(r);function s(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);