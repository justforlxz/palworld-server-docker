"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[384],{6692:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=n(7624),o=n(2172);const s={sidebar_position:1,slug:"/"},l="Quick Setup",a={id:"getting-started/quick-setup",title:"Quick Setup",description:"Let's get you on your way with the Palworld Dedicated server!",source:"@site/docs/getting-started/quick-setup.md",sourceDirName:"getting-started",slug:"/",permalink:"/zh/",draft:!1,unlisted:!1,editUrl:"https://github.com/thijsvanloef/palworld-server-docker/docs/getting-started/quick-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/zh/category/getting-started"},next:{title:"Configuration",permalink:"/zh/category/configuration"}},i={},d=[{value:"Server Requirements",id:"server-requirements",level:2},{value:"Docker Compose",id:"docker-compose",level:2},{value:"Docker Run",id:"docker-run",level:3},{value:"Starting the server",id:"starting-the-server",level:2},{value:"Stopping the server",id:"stopping-the-server",level:2}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"quick-setup",children:"Quick Setup"}),"\n",(0,t.jsx)(r.p,{children:"Let's get you on your way with the Palworld Dedicated server!"}),"\n",(0,t.jsxs)(r.admonition,{type:"warning",children:[(0,t.jsx)(r.p,{children:"At the moment, Xbox Gamepass/Xbox Console players will not be able to join a dedicated server."}),(0,t.jsx)(r.p,{children:"They will need to join players using the invite code and are limited to sessions of 4 players max."})]}),"\n",(0,t.jsx)(r.h2,{id:"server-requirements",children:"Server Requirements"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Resource"}),(0,t.jsx)(r.th,{children:"Minimum"}),(0,t.jsx)(r.th,{children:"Recommended"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CPU"}),(0,t.jsx)(r.td,{children:"4 cores"}),(0,t.jsx)(r.td,{children:"4+ cores"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RAM"}),(0,t.jsx)(r.td,{children:"16GB"}),(0,t.jsx)(r.td,{children:"Recommend over 32GB for stable operation"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Storage"}),(0,t.jsx)(r.td,{children:"8GB"}),(0,t.jsx)(r.td,{children:"20GB"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"docker-compose",children:"Docker Compose"}),"\n",(0,t.jsxs)(r.p,{children:["This repository includes an example ",(0,t.jsx)(r.a,{href:"https://github.com/thijsvanloef/palworld-server-docker/blob/main/docker-compose.yml",children:"docker-compose.yml"})," file you can use to set up your server."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yml",children:'services:\n   palworld:\n      image: thijsvanloef/palworld-server-docker:latest # Use the latest-arm64 tag for arm64 hosts\n      restart: unless-stopped\n      container_name: palworld-server\n      stop_grace_period: 30s # Set to however long you are willing to wait for the container to gracefully stop\n      ports:\n        - 8211:8211/udp\n        - 27015:27015/udp\n      environment:\n         PUID: 1000\n         PGID: 1000\n         PORT: 8211 # Optional but recommended\n         PLAYERS: 16 # Optional but recommended\n         SERVER_PASSWORD: "worldofpals" # Optional but recommended\n         MULTITHREADING: true\n         RCON_ENABLED: true\n         RCON_PORT: 25575\n         TZ: "UTC"\n         ADMIN_PASSWORD: "adminPasswordHere"\n         COMMUNITY: false  # Enable this if you want your server to show up in the community servers tab, USE WITH SERVER_PASSWORD!\n         SERVER_NAME: "World of Pals"\n         SERVER_DESCRIPTION: "palworld-server-docker by Thijs van Loef"\n      volumes:\n         - ./palworld:/palworld/\n'})}),"\n",(0,t.jsxs)(r.p,{children:["As an alternative, you can copy the ",(0,t.jsx)(r.a,{href:"https://github.com/thijsvanloef/palworld-server-docker/blob/main/.env.example",children:".env.example"})," file to a new file called ",(0,t.jsx)(r.strong,{children:".env"})," file.\nModify it to your needs, check out the ",(0,t.jsx)(r.a,{href:"#environment-variables",children:"environment variables"})," section to check the correct\nvalues. Modify your ",(0,t.jsx)(r.a,{href:"https://github.com/thijsvanloef/palworld-server-docker/blob/main/docker-compose.yml",children:"docker-compose.yml"})," to this:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yml",children:"services:\n   palworld:\n      image: thijsvanloef/palworld-server-docker:latest # Use the latest-arm64 tag for arm64 hosts\n      restart: unless-stopped\n      container_name: palworld-server\n      stop_grace_period: 30s # Set to however long you are willing to wait for the container to gracefully stop\n      ports:\n        - 8211:8211/udp\n        - 27015:27015/udp\n      env_file:\n         -  .env\n      volumes:\n         - ./palworld:/palworld/\n"})}),"\n",(0,t.jsx)(r.h3,{id:"docker-run",children:"Docker Run"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'docker run -d \\\n    --name palworld-server \\\n    -p 8211:8211/udp \\\n    -p 27015:27015/udp \\\n    -v ./palworld:/palworld/ \\\n    -e PUID=1000 \\\n    -e PGID=1000 \\\n    -e PORT=8211 \\\n    -e PLAYERS=16 \\\n    -e MULTITHREADING=true \\\n    -e RCON_ENABLED=true \\\n    -e RCON_PORT=25575 \\\n    -e TZ=UTC \\\n    -e ADMIN_PASSWORD="adminPasswordHere" \\\n    -e SERVER_PASSWORD="worldofpals" \\\n    -e COMMUNITY=false \\\n    -e SERVER_NAME="World of Pals" \\\n    -e SERVER_DESCRIPTION="palworld-server-docker by Thijs van Loef" \\\n    --restart unless-stopped \\\n    --stop-timeout 30 \\\n    thijsvanloef/palworld-server-docker:latest # Use the latest-arm64 tag for arm64 hosts\n'})}),"\n",(0,t.jsxs)(r.p,{children:["As an alternative, you can copy the ",(0,t.jsx)(r.a,{href:"https://github.com/thijsvanloef/palworld-server-docker/blob/main/.env.example",children:".env.example"})," file to a new file called ",(0,t.jsx)(r.strong,{children:".env"})," file.\nModify it to your needs, check out the ",(0,t.jsx)(r.a,{href:"#environment-variables",children:"environment variables"})," section to check the\ncorrect values. Change your docker run command to this:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"docker run -d \\\n    --name palworld-server \\\n    -p 8211:8211/udp \\\n    -p 27015:27015/udp \\\n    -v ./palworld:/palworld/ \\\n    --env-file .env \\\n    --restart unless-stopped \\\n    --stop-timeout 30 \\\n    thijsvanloef/palworld-server-docker:latest # Use the latest-arm64 tag for arm64 hosts\n"})}),"\n",(0,t.jsx)(r.h2,{id:"starting-the-server",children:"Starting the server"}),"\n",(0,t.jsxs)(r.p,{children:["Use ",(0,t.jsx)(r.code,{children:"docker compose up -d"})," to start the server in the background"]}),"\n",(0,t.jsx)(r.h2,{id:"stopping-the-server",children:"Stopping the server"}),"\n",(0,t.jsxs)(r.p,{children:["Use ",(0,t.jsx)(r.code,{children:"docker compose stop"})," to stop the server"]}),"\n",(0,t.jsxs)(r.p,{children:["Use ",(0,t.jsx)(r.code,{children:"docker compose down --rmi all"})," to stop and remove the server and remove the docker image from your computer"]})]})}function h(e={}){const{wrapper:r}={...(0,o.M)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},2172:(e,r,n)=>{n.d(r,{I:()=>a,M:()=>l});var t=n(1504);const o={},s=t.createContext(o);function l(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);