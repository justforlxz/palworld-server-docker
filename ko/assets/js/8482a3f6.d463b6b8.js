"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[540],{8520:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var s=r(7624),n=r(2172);const d={sidebar_position:1},i="Server Settings",c={id:"getting-started/configuration/server-settings",title:"Server Settings",description:"This part will explain how to configure the server.",source:"@site/docs/getting-started/configuration/server-settings.md",sourceDirName:"getting-started/configuration",slug:"/getting-started/configuration/server-settings",permalink:"/ko/getting-started/configuration/server-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/thijsvanloef/palworld-server-docker/docs/getting-started/configuration/server-settings.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/ko/category/configuration"},next:{title:"Game Settings",permalink:"/ko/getting-started/configuration/game-settings"}},l={},h=[{value:"Environment variables",id:"environment-variables",level:2},{value:"Game Ports",id:"game-ports",level:3}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"server-settings",children:"Server Settings"}),"\n",(0,s.jsx)(t.p,{children:"This part will explain how to configure the server."}),"\n",(0,s.jsx)(t.h2,{id:"environment-variables",children:"Environment variables"}),"\n",(0,s.jsx)(t.p,{children:"You can use the following values to change the settings of the server on boot.\nIt is highly recommended you set the following environment values before starting the server:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"PLAYERS"}),"\n",(0,s.jsx)(t.li,{children:"PORT"}),"\n",(0,s.jsx)(t.li,{children:"PUID"}),"\n",(0,s.jsx)(t.li,{children:"PGID"}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Variable"}),(0,s.jsx)(t.th,{children:"Info"}),(0,s.jsx)(t.th,{children:"Default Values"}),(0,s.jsx)(t.th,{children:"Allowed Values"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TZ"}),(0,s.jsx)(t.td,{children:"Timezone used for time stamping backup server"}),(0,s.jsx)(t.td,{children:"UTC"}),(0,s.jsxs)(t.td,{children:["See ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#Time_Zone_abbreviations",children:"TZ Identifiers"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PLAYERS*"}),(0,s.jsx)(t.td,{children:"Max amount of players that are able to join the server"}),(0,s.jsx)(t.td,{children:"16"}),(0,s.jsx)(t.td,{children:"1-32"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PORT*"}),(0,s.jsx)(t.td,{children:"UDP port that the server will expose"}),(0,s.jsx)(t.td,{children:"8211"}),(0,s.jsx)(t.td,{children:"1024-65535"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PUID*"}),(0,s.jsx)(t.td,{children:"The uid of the user the server should run as"}),(0,s.jsx)(t.td,{children:"1000"}),(0,s.jsx)(t.td,{children:"!0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PGID*"}),(0,s.jsx)(t.td,{children:"The gid of the group the server should run as"}),(0,s.jsx)(t.td,{children:"1000"}),(0,s.jsx)(t.td,{children:"!0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MULTITHREADING**"}),(0,s.jsx)(t.td,{children:"Improves performance in multi-threaded CPU environments. It is effective up to a maximum of about 4 threads, and allocating more than this number of threads does not make much sense."}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:"true/false"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"COMMUNITY"}),(0,s.jsx)(t.td,{children:"Whether or not the server shows up in the community server browser (USE WITH SERVER_PASSWORD)"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:"true/false"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PUBLIC_IP"}),(0,s.jsx)(t.td,{children:"You can manually specify the global IP address of the network on which the server running. If not specified, it will be detected automatically. If it does not work well, try manual configuration."}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"x.x.x.x"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PUBLIC_PORT"}),(0,s.jsx)(t.td,{children:"You can manually specify the port number of the network on which the server running. If not specified, it will be detected automatically. If it does not work well, try manual configuration."}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"1024-65535"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SERVER_NAME"}),(0,s.jsx)(t.td,{children:"A name for your server"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:'"string"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SERVER_DESCRIPTION"}),(0,s.jsx)(t.td,{children:"Your server Description"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:'"string"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SERVER_PASSWORD"}),(0,s.jsx)(t.td,{children:"Secure your community server with a password"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:'"string"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ADMIN_PASSWORD"}),(0,s.jsx)(t.td,{children:"Secure administration access in the server with a password"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:'"string"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"UPDATE_ON_BOOT**"}),(0,s.jsx)(t.td,{children:"Update/Install the server when the docker container starts (THIS HAS TO BE ENABLED THE FIRST TIME YOU RUN THE CONTAINER)"}),(0,s.jsx)(t.td,{children:"true"}),(0,s.jsx)(t.td,{children:"true/false"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"RCON_ENABLED***"}),(0,s.jsx)(t.td,{children:"Enable RCON for the Palworld server"}),(0,s.jsx)(t.td,{children:"true"}),(0,s.jsx)(t.td,{children:"true/false"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"RCON_PORT"}),(0,s.jsx)(t.td,{children:"RCON port to connect to"}),(0,s.jsx)(t.td,{children:"25575"}),(0,s.jsx)(t.td,{children:"1024-65535"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"QUERY_PORT"}),(0,s.jsx)(t.td,{children:"Query port used to communicate with Steam servers"}),(0,s.jsx)(t.td,{children:"27015"}),(0,s.jsx)(t.td,{children:"1024-65535"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"BACKUP_CRON_EXPRESSION"}),(0,s.jsx)(t.td,{children:"Setting affects frequency of automatic backups."}),(0,s.jsx)(t.td,{children:"0 0 * * *"}),(0,s.jsxs)(t.td,{children:["Needs a Cron-Expression - See ",(0,s.jsx)(t.a,{href:"#configuring-automatic-backups-with-cron",children:"Configuring Automatic Backups with Cron"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"BACKUP_ENABLED"}),(0,s.jsx)(t.td,{children:"Enables automatic backups"}),(0,s.jsx)(t.td,{children:"true"}),(0,s.jsx)(t.td,{children:"true/false"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DELETE_OLD_BACKUPS"}),(0,s.jsx)(t.td,{children:"Delete backups after a certain number of days"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:"true/false"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OLD_BACKUP_DAYS"}),(0,s.jsx)(t.td,{children:"How many days to keep backups"}),(0,s.jsx)(t.td,{children:"30"}),(0,s.jsx)(t.td,{children:"any positive integer"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AUTO_UPDATE_CRON_EXPRESSION"}),(0,s.jsx)(t.td,{children:"Setting affects frequency of automatic updates."}),(0,s.jsx)(t.td,{children:"0 * * * *"}),(0,s.jsxs)(t.td,{children:["Needs a Cron-Expression - See ",(0,s.jsx)(t.a,{href:"#configuring-automatic-backups-with-cron",children:"Configuring Automatic Backups with Cron"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AUTO_UPDATE_ENABLED"}),(0,s.jsx)(t.td,{children:"Enables automatic updates"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:"true/false"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AUTO_UPDATE_WARN_MINUTES"}),(0,s.jsx)(t.td,{children:"How long to wait to update the server, after the player were informed."}),(0,s.jsx)(t.td,{children:"30"}),(0,s.jsx)(t.td,{children:"!0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AUTO_REBOOT_CRON_EXPRESSION"}),(0,s.jsx)(t.td,{children:"Setting affects frequency of automatic updates."}),(0,s.jsx)(t.td,{children:"0 0 * * *"}),(0,s.jsxs)(t.td,{children:["Needs a Cron-Expression - See ",(0,s.jsx)(t.a,{href:"#configuring-automatic-reboots-with-cron",children:"Configuring Automatic Backups with Cron"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AUTO_REBOOT_ENABLED"}),(0,s.jsx)(t.td,{children:"Enables automatic reboots"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:"true/false"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AUTO_REBOOT_WARN_MINUTES"}),(0,s.jsx)(t.td,{children:"How long to wait to reboot the server, after the player were informed."}),(0,s.jsx)(t.td,{children:"5"}),(0,s.jsx)(t.td,{children:"!0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AUTO_REBOOT_EVEN_IF_PLAYERS_ONLINE"}),(0,s.jsx)(t.td,{children:"Restart the Server even if there are players online."}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:"true/false"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DISCORD_WEBHOOK_URL"}),(0,s.jsx)(t.td,{children:"Discord webhook url found after creating a webhook on a discord server"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"https://discord.com/api/webhooks/<webhook_id>"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DISCORD_CONNECT_TIMEOUT"}),(0,s.jsx)(t.td,{children:"Discord command initial connection timeout"}),(0,s.jsx)(t.td,{children:"30"}),(0,s.jsx)(t.td,{children:"!0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DISCORD_MAX_TIMEOUT"}),(0,s.jsx)(t.td,{children:"Discord total hook timeout"}),(0,s.jsx)(t.td,{children:"30"}),(0,s.jsx)(t.td,{children:"!0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DISCORD_PRE_UPDATE_BOOT_MESSAGE"}),(0,s.jsx)(t.td,{children:"Discord message sent when server begins updating"}),(0,s.jsx)(t.td,{children:"Server is updating..."}),(0,s.jsx)(t.td,{children:'"string"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DISCORD_POST_UPDATE_BOOT_MESSAGE"}),(0,s.jsx)(t.td,{children:"Discord message sent when server completes updating"}),(0,s.jsx)(t.td,{children:"Server update complete!"}),(0,s.jsx)(t.td,{children:'"string"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DISCORD_PRE_START_MESSAGE"}),(0,s.jsx)(t.td,{children:"Discord message sent when server begins to start"}),(0,s.jsx)(t.td,{children:"Server is started!"}),(0,s.jsx)(t.td,{children:'"string"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DISCORD_PRE_SHUTDOWN_MESSAGE"}),(0,s.jsx)(t.td,{children:"Discord message sent when server begins to shutdown"}),(0,s.jsx)(t.td,{children:"Server is shutting down..."}),(0,s.jsx)(t.td,{children:'"string"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DISCORD_POST_SHUTDOWN_MESSAGE"}),(0,s.jsx)(t.td,{children:"Discord message sent when server has stopped"}),(0,s.jsx)(t.td,{children:"Server is stopped!"}),(0,s.jsx)(t.td,{children:'"string"'})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"*highly recommended to set"}),"\n",(0,s.jsx)(t.p,{children:"** Make sure you know what you are doing when running this option enabled"}),"\n",(0,s.jsx)(t.p,{children:"*** Required for docker stop to save and gracefully close the server"}),"\n",(0,s.jsx)(t.h3,{id:"game-ports",children:"Game Ports"}),"\n",(0,s.jsx)(t.p,{children:"The server needs the following ports by default."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Port"}),(0,s.jsx)(t.th,{children:"Info"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"8211"}),(0,s.jsx)(t.td,{children:"Game Port (UDP)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"27015"}),(0,s.jsx)(t.td,{children:"Query Port (UDP)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"25575"}),(0,s.jsx)(t.td,{children:"RCON Port (TCP)"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},2172:(e,t,r)=>{r.d(t,{I:()=>c,M:()=>i});var s=r(1504);const n={},d=s.createContext(n);function i(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);