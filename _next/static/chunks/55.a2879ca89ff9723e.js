"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55],{6055:(e,l,s)=>{s.r(l),s.d(l,{MoreNavLink:()=>W,PopularThresholdEditor:()=>N,SideBar:()=>k,WellMaintainedThresholdEditor:()=>y,default:()=>T});var a=s(8941),r=s(2295),n=s(5365),t=s(2543),i=s(5469),o=s(2397),d=s(4920),c=s(2825),h=s(9299),x=s(2615),m=s(9103),u=s(1556),p=s(5991),j=s(8949),f=s(4854),b=s(5072),v=s(7927),g=s(8005),w=s(3882);let y=e=>{let l=(0,g.R)(w.W.wellMaintainedThreshold);return(0,a.jsxs)(r.J,{width:350,position:"bottom",trapFocus:!0,withArrow:!0,shadow:"md",disabled:e.disabled,children:[(0,a.jsx)(r.J.Target,{children:e.children}),(0,a.jsx)(r.J.Dropdown,{children:(0,a.jsxs)("div",{className:"text-sm flex flex-row  gap-2 items-center",children:[(0,a.jsx)("span",{className:"flex-none",children:"Last pushed before"}),(0,a.jsx)(n.o,{variant:"filled",size:"xs",value:l.count||"",onChange:e=>{var l;return w.W.wellMaintainedThreshold.count=null!==(l=parseInt(e.target.value,10))&&void 0!==l?l:2}}),(0,a.jsx)(t.P,{size:"xs",value:l.unit,comboboxProps:{withinPortal:!1},onChange:e=>w.W.wellMaintainedThreshold.unit=null!=e?e:"year",data:["year","month","day"]})]})})]})},N=e=>{let l=(0,g.R)(w.W.popularThreshold);return(0,a.jsxs)(r.J,{width:400,trapFocus:!0,position:"bottom",withArrow:!0,shadow:"md",disabled:e.disabled,children:[(0,a.jsx)(r.J.Target,{children:e.children}),(0,a.jsx)(r.J.Dropdown,{children:(0,a.jsxs)("div",{className:"text-sm flex flex-row  gap-2 items-center",children:[(0,a.jsx)("span",{className:"flex-none",children:"Stars more than"}),(0,a.jsx)(n.o,{variant:"filled",size:"xs",value:l.starsMoreThan||"",onChange:e=>{var l;return w.W.popularThreshold.starsMoreThan=null!==(l=parseInt(e.target.value,10))&&void 0!==l?l:3e3}}),(0,a.jsx)("span",{className:"flex-none",children:"or forks more than"}),(0,a.jsx)(n.o,{variant:"filled",size:"xs",value:l.forksMoreThan||"",onChange:e=>{var l;return w.W.popularThreshold.forksMoreThan=null!==(l=parseInt(e.target.value,10))&&void 0!==l?l:3e3}})]})})]})},k=e=>{let l=(0,g.R)(w.W);(0,v.useEffect)(()=>{null===w.W.sources&&(w.W.sources=e.sources.map(e=>e.name))},[]);let s=""!==l.search;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"h-full flex flex-col overflow-hidden",children:[(0,a.jsx)("div",{className:"flex-1 overflow-y-auto",children:(0,a.jsxs)(i.U,{multiple:!0,defaultValue:["sort","filter","source","more"],classNames:{item:"border-none",control:"text-zinc-500 dark:text-zinc-300",label:" font-semibold text-sm "},children:[(0,a.jsxs)(i.U.Item,{value:"sort",children:[(0,a.jsx)(i.U.Control,{children:"Sort"}),(0,a.jsx)(i.U.Panel,{children:(0,a.jsx)(o.Y.Group,{value:l.sort,onChange:e=>{w.W.sort=e},children:(0,a.jsx)(d.K,{gap:"0",children:[{value:"original",label:"Original"},{value:"popularity",label:"Popularity"},{value:"activity",label:"Activity"}].map(e=>(0,a.jsx)(o.Y,{disabled:s,classNames:{radio:"scale-90",labelWrapper:"w-full ",body:"h-9 mantine-hover flex items-center"},...e},e.value))})})})]}),(0,a.jsxs)(i.U.Item,{value:"filter",children:[(0,a.jsx)(i.U.Control,{children:"Filter"}),(0,a.jsx)(i.U.Panel,{children:(0,a.jsxs)(d.K,{gap:"0",children:[(0,a.jsx)(c.r,{disabled:s,classNames:{track:"scale-90",labelWrapper:"flex-1",body:"h-9 flex items-center px-1"},checked:l.wellMaintainedOnly,onChange:e=>w.W.wellMaintainedOnly=e.currentTarget.checked,labelPosition:"left",label:(0,a.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,a.jsx)("span",{children:"Well maintained only"}),(0,a.jsx)(y,{disabled:s,children:(0,a.jsx)(h.A,{variant:"subtle",size:"md",color:"gray",disabled:s,children:(0,a.jsx)(p.Z,{className:"size-4"})})})]})}),(0,a.jsx)(c.r,{disabled:s,classNames:{track:"scale-90",labelWrapper:"flex-1",body:"h-9  flex items-center px-1"},checked:l.popularOnly,onChange:e=>w.W.popularOnly=e.currentTarget.checked,labelPosition:"left",label:(0,a.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,a.jsx)("span",{children:"Polular only"}),(0,a.jsx)(N,{disabled:s,children:(0,a.jsx)(h.A,{variant:"subtle",size:"md",color:"gray",disabled:s,children:(0,a.jsx)(p.Z,{className:"size-4"})})})]})})]})})]}),(0,a.jsxs)(i.U.Item,{value:"source",children:[(0,a.jsx)(i.U.Control,{children:"Source"}),(0,a.jsx)(i.U.Panel,{children:(0,a.jsx)(d.K,{gap:"1",children:e.sources.map(e=>{var s,r;let n=null!==(r=null===(s=l.sources)||void 0===s?void 0:s.includes(e.name))&&void 0!==r&&r;return(0,a.jsxs)("div",{className:" mantine-hover flex flex-row h-10 items-center",children:[(0,a.jsx)(x.X,{classNames:{inner:"scale-90",labelWrapper:"flex-1",body:"h-9  flex items-center px-1"},checked:!0,readOnly:!0,onChange:s=>{s.currentTarget.checked?n||w.W.sources.push(e.name):n&&l.sources.length>1&&(w.W.sources=w.W.sources.filter(l=>l!==e.name))},className:"flex-1",label:(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("span",{className:"mr-2",children:e.name}),e.license&&(0,a.jsx)("span",{className:" text-xs",children:e.license})]})}),(0,a.jsx)("a",{className:"px-2 h-full flex items-center text-gray-600 hover:text-gray-950",target:"_blank",href:"https://github.com/".concat(e.name),children:(0,a.jsx)(j.Z,{className:"size-5  "})})]},e.name)})})})]}),(0,a.jsxs)(i.U.Item,{value:"more",children:[(0,a.jsx)(i.U.Control,{children:"More"}),(0,a.jsxs)(i.U.Panel,{children:[e.more.slice(0,5).map(e=>(0,a.jsx)(W,{more:e},e.name)),(0,a.jsx)(m.O,{href:"/#1417a7280fe58075ac27e84a8878e9b0",label:"More awesome lists",leftSection:(0,a.jsx)(j.Z,{size:"1rem",stroke:1.5})})]})]})]})}),(0,a.jsxs)("div",{className:"flex-none h-12 w-full border-t border-t-gray-200 dark:border-t-gray-700 flex flex-row items-center justify-end gap-3 pr-2",children:[(0,a.jsxs)("span",{className:"text-xs",children:["Made with"," ",(0,a.jsx)("a",{href:"https://mantine.dev/",target:"_blank",children:"MantineUI"})," ","by ",(0,a.jsx)("a",{href:"https://github.com/adevday",children:"@adevday"})]}),(0,a.jsx)(u.u,{label:"Feedback on Telegram group",children:(0,a.jsx)(h.A,{size:"md",variant:"subtle",color:"dark.2",component:"a",href:"https://t.me/getawep",target:"_blank",children:(0,a.jsx)(f.Z,{className:"size-5"})})}),(0,a.jsx)(u.u,{label:"Subscribe for updates",children:(0,a.jsx)(h.A,{size:"md",variant:"subtle",color:"dark.2",component:"a",href:"https://x.com/adevday",target:"_blank",children:(0,a.jsx)(b.Z,{className:"size-5"})})})]})]})})},W=e=>(0,a.jsx)(m.O,{href:"/aggregated/".concat(e.more.name.toLowerCase()),label:e.more.name,leftSection:e.more.icon},e.more.name),T=k}}]);