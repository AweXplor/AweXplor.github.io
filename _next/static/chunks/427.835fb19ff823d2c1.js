"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[427],{5469:(e,o,r)=>{r.d(o,{U:()=>E});var n=r(8941),t=r(7988),i=r(2874),a=r(6158);function l(e,o){return r=>{if("string"!=typeof r||0===r.trim().length)throw Error(o);return"".concat(e,"-").concat(r)}}r(7927);var c=r(7314),d=r(7648),s=r(7014),h=r(7983),u=r(3901),m=r(1398),v=r(2989);let[p,b]=(0,v.R)("Accordion component was not found in the tree");var x=r(9599),f=r(8682),y=r(5445);let[g,w]=(0,v.R)("Accordion.Item component was not found in the tree");var C={root:"m_9bdbb667",panel:"m_df78851f",content:"m_4ba554d4",itemTitle:"m_8fa820a0",control:"m_4ba585b8","control--default":"m_6939a5e9","control--contained":"m_4271d21b",label:"m_df3ffa0f",chevron:"m_3f35ae96",icon:"m_9bd771fe",item:"m_9bd7b098","item--default":"m_fe19b709","item--contained":"m_1f921b3b","item--filled":"m_2cdf939a","item--separated":"m_9f59b069"};let k={},_=(0,m.d5)((e,o)=>{let{classNames:r,className:t,style:i,styles:a,vars:l,chevron:c,icon:d,onClick:h,onKeyDown:m,children:v,disabled:p,mod:x,...g}=(0,s.w)("AccordionControl",k,e),{value:C}=w(),_=b(),j=_.isItemActive(C),R="number"==typeof _.order,A="h".concat(_.order),I=(0,n.jsxs)(y.k,{...g,..._.getStyles("control",{className:t,classNames:r,style:i,styles:a,variant:_.variant}),unstyled:_.unstyled,mod:["accordion-control",{active:j,"chevron-position":_.chevronPosition,disabled:p},x],ref:o,onClick:e=>{null==h||h(e),_.onChange(C)},type:"button",disabled:p,"aria-expanded":j,"aria-controls":_.getRegionId(C),id:_.getControlId(C),onKeyDown:(0,f.R)({siblingSelector:"[data-accordion-control]",parentSelector:"[data-accordion]",activateOnFocus:!1,loop:_.loop,orientation:"vertical",onKeyDown:m}),children:[(0,n.jsx)(u.x,{component:"span",mod:{rotate:!_.disableChevronRotation&&j,position:_.chevronPosition},..._.getStyles("chevron",{classNames:r,styles:a}),children:c||_.chevron}),(0,n.jsx)("span",{..._.getStyles("label",{classNames:r,styles:a}),children:v}),d&&(0,n.jsx)(u.x,{component:"span",mod:{"chevron-position":_.chevronPosition},..._.getStyles("icon",{classNames:r,styles:a}),children:d})]});return R?(0,n.jsx)(A,{..._.getStyles("itemTitle",{classNames:r,styles:a}),children:I}):I});_.displayName="@mantine/core/AccordionControl",_.classes=C;let j={},R=(0,m.d5)((e,o)=>{let{classNames:r,className:t,style:i,styles:a,vars:l,value:c,mod:d,...h}=(0,s.w)("AccordionItem",j,e),m=b();return(0,n.jsx)(g,{value:{value:c},children:(0,n.jsx)(u.x,{ref:o,mod:[{active:m.isItemActive(c)},d],...m.getStyles("item",{className:t,classNames:r,styles:a,style:i,variant:m.variant}),...h})})});R.displayName="@mantine/core/AccordionItem",R.classes=C;var A=r(2654);let I={},S=(0,m.d5)((e,o)=>{var r;let{classNames:t,className:i,style:a,styles:l,vars:c,children:d,...h}=(0,s.w)("AccordionPanel",I,e),{value:u}=w(),m=b();return(0,n.jsx)(A.U,{ref:o,...m.getStyles("panel",{className:i,classNames:t,style:a,styles:l}),...h,in:m.isItemActive(u),transitionDuration:null!==(r=m.transitionDuration)&&void 0!==r?r:200,role:"region",id:m.getRegionId(u),"aria-labelledby":m.getControlId(u),children:(0,n.jsx)("div",{...m.getStyles("content",{classNames:t,styles:l}),children:d})})});S.displayName="@mantine/core/AccordionPanel",S.classes=C;let z={multiple:!1,disableChevronRotation:!1,chevronPosition:"right",variant:"default",chevron:(0,n.jsx)(x.Q,{})},N=(0,d.Z)((e,o)=>{let{transitionDuration:r,chevronSize:n,radius:t}=o;return{root:{"--accordion-transition-duration":void 0===r?void 0:"".concat(r,"ms"),"--accordion-chevron-size":void 0===n?void 0:(0,a.h)(n),"--accordion-radius":void 0===t?void 0:(0,c.H5)(t)}}});function E(e){let o=(0,s.w)("Accordion",z,e),{classNames:r,className:a,style:c,styles:d,unstyled:m,vars:v,children:b,multiple:x,value:f,defaultValue:y,onChange:g,id:w,loop:k,transitionDuration:_,disableChevronRotation:j,chevronPosition:R,chevronSize:A,order:I,chevron:S,variant:E,radius:Z,...P}=o,D=(0,t.M)(w),[G,L]=(0,i.C)({value:f,defaultValue:y,finalValue:x?[]:null,onChange:g}),T=(0,h.y)({name:"Accordion",classes:C,props:o,className:a,style:c,classNames:r,styles:d,unstyled:m,vars:v,varsResolver:N});return(0,n.jsx)(p,{value:{isItemActive:e=>Array.isArray(G)?G.includes(e):e===G,onChange:e=>{L(Array.isArray(G)?G.includes(e)?G.filter(o=>o!==e):[...G,e]:e===G?null:e)},getControlId:l("".concat(D,"-control"),"Accordion.Item component was rendered with invalid value or without value"),getRegionId:l("".concat(D,"-panel"),"Accordion.Item component was rendered with invalid value or without value"),transitionDuration:_,disableChevronRotation:j,chevronPosition:R,order:I,chevron:S,loop:k,getStyles:T,variant:E,unstyled:m},children:(0,n.jsx)(u.x,{...T("root"),id:D,...P,variant:E,"data-accordion":!0,children:b})})}E.extend=e=>e,E.withProps=(0,m.ug)(E),E.classes=C,E.displayName="@mantine/core/Accordion",E.Item=R,E.Panel=S,E.Control=_,E.Chevron=x.Q},9599:(e,o,r)=>{r.d(o,{Q:()=>i});var n=r(8941),t=r(6158);function i(e){let{style:o,size:r=16,...i}=e;return(0,n.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...o,width:(0,t.h)(r),height:(0,t.h)(r),display:"block"},...i,children:(0,n.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}r(7927),i.displayName="@mantine/core/AccordionChevron"},2102:(e,o,r)=>{r.d(o,{X:()=>W});var n=r(8941),t=r(7988),i=r(7927),a=r(7314),l=r(7648),c=r(332),d=r(353),s=r(9686),h=r(8236),u=r(7014),m=r(7983),v=r(5047),p=r(3901),b=r(1398),x=r(3342),f=r(5445);let y=(0,i.createContext)(null),g=y.Provider,w=()=>(0,i.useContext)(y),[C,k]=(0,r(7123).V)();var _={card:"m_26775b0a"};let j={withBorder:!0},R=(0,l.Z)((e,o)=>{let{radius:r}=o;return{card:{"--card-radius":(0,a.H5)(r)}}}),A=(0,b.d5)((e,o)=>{let r=(0,u.w)("CheckboxCard",j,e),{classNames:t,className:i,style:a,styles:l,unstyled:c,vars:d,checked:s,mod:h,withBorder:v,value:p,onClick:b,...x}=r,y=(0,m.y)({name:"CheckboxCard",classes:_,props:r,className:i,style:a,classNames:t,styles:l,unstyled:c,vars:d,varsResolver:R,rootSelector:"card"}),g=w(),k="boolean"==typeof s?s:(null==g?void 0:g.value.includes(p||""))||!1;return(0,n.jsx)(C,{value:{checked:k},children:(0,n.jsx)(f.k,{ref:o,mod:[{"with-border":v,checked:k},h],...y("card"),...x,role:"checkbox","aria-checked":k,onClick:e=>{null==b||b(e),null==g||g.onChange(p||"")}})})});A.displayName="@mantine/core/CheckboxCard",A.classes=_;var I=r(2874),S=r(699),z=r(8446);let N={},E=(0,b.d5)((e,o)=>{let{value:r,defaultValue:t,onChange:i,size:a,wrapperProps:l,children:c,readOnly:d,...s}=(0,u.w)("CheckboxGroup",N,e),[h,m]=(0,I.C)({value:r,defaultValue:t,finalValue:[],onChange:i});return(0,n.jsx)(g,{value:{value:h,onChange:e=>{let o="string"==typeof e?e:e.currentTarget.value;d||m(h.includes(o)?h.filter(e=>e!==o):[...h,o])},size:a},children:(0,n.jsx)(S.I.Wrapper,{size:a,ref:o,...l,...s,labelElement:"div",__staticSelector:"CheckboxGroup",children:(0,n.jsx)(z.m,{role:"group",children:c})})})});E.classes=S.I.Wrapper.classes,E.displayName="@mantine/core/CheckboxGroup";var Z=r(6158);function P(e){let{size:o,style:r,...t}=e,i=void 0!==o?{width:(0,Z.h)(o),height:(0,Z.h)(o),...r}:r;return(0,n.jsx)("svg",{viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:i,"aria-hidden":!0,...t,children:(0,n.jsx)("path",{d:"M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}function D(e){let{indeterminate:o,...r}=e;return o?(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 6","aria-hidden":!0,...r,children:(0,n.jsx)("rect",{width:"32",height:"6",fill:"currentColor",rx:"3"})}):(0,n.jsx)(P,{...r})}var G={indicator:"m_5e5256ee",icon:"m_1b1c543a","indicator--outline":"m_76e20374"};let L={icon:D},T=(0,l.Z)((e,o)=>{let{radius:r,color:n,size:t,iconColor:i,variant:l,autoContrast:u}=o,m=(0,c.E)({color:n||e.primaryColor,theme:e}),v=m.isThemeColor&&void 0===m.shade?"var(--mantine-color-".concat(m.color,"-outline)"):m.color;return{indicator:{"--checkbox-size":(0,a.ap)(t,"checkbox-size"),"--checkbox-radius":void 0===r?void 0:(0,a.H5)(r),"--checkbox-color":"outline"===l?v:(0,d.p)(n,e),"--checkbox-icon-color":i?(0,d.p)(i,e):(0,h.o)(u,e)?(0,s.R)({color:n,theme:e,autoContrast:u}):void 0}}}),M=(0,b.d5)((e,o)=>{let r=(0,u.w)("CheckboxIndicator",L,e),{classNames:t,className:i,style:a,styles:l,unstyled:c,vars:d,icon:s,indeterminate:h,radius:v,color:b,iconColor:x,autoContrast:f,checked:y,mod:g,variant:w,disabled:C,..._}=r,j=(0,m.y)({name:"CheckboxIndicator",classes:G,props:r,className:i,style:a,classNames:t,styles:l,unstyled:c,vars:d,varsResolver:T,rootSelector:"indicator"}),R=k(),A="boolean"==typeof y||"boolean"==typeof h?y||h:(null==R?void 0:R.checked)||!1;return(0,n.jsx)(p.x,{ref:o,...j("indicator",{variant:w}),variant:w,mod:[{checked:A,disabled:C},g],..._,children:(0,n.jsx)(s,{indeterminate:h,...j("icon")})})});M.displayName="@mantine/core/CheckboxIndicator",M.classes=G;var V={root:"m_bf2d988c",inner:"m_26062bec",input:"m_26063560",icon:"m_bf295423","input--outline":"m_215c4542"};let B={labelPosition:"right",icon:D},H=(0,l.Z)((e,o)=>{let{radius:r,color:n,size:t,iconColor:i,variant:l,autoContrast:u}=o,m=(0,c.E)({color:n||e.primaryColor,theme:e}),v=m.isThemeColor&&void 0===m.shade?"var(--mantine-color-".concat(m.color,"-outline)"):m.color;return{root:{"--checkbox-size":(0,a.ap)(t,"checkbox-size"),"--checkbox-radius":void 0===r?void 0:(0,a.H5)(r),"--checkbox-color":"outline"===l?v:(0,d.p)(n,e),"--checkbox-icon-color":i?(0,d.p)(i,e):(0,h.o)(u,e)?(0,s.R)({color:n,theme:e,autoContrast:u}):void 0}}}),W=(0,b.d5)((e,o)=>{let r=(0,u.w)("Checkbox",B,e),{classNames:i,className:a,style:l,styles:c,unstyled:d,vars:s,color:h,label:b,id:f,size:y,radius:g,wrapperProps:C,checked:k,labelPosition:_,description:j,error:R,disabled:A,variant:I,indeterminate:S,icon:z,rootRef:N,iconColor:E,onChange:Z,autoContrast:P,mod:D,...G}=r,L=w(),T=y||(null==L?void 0:L.size),M=(0,m.y)({name:"Checkbox",props:r,classes:V,className:a,style:l,classNames:i,styles:c,unstyled:d,vars:s,varsResolver:H}),{styleProps:W,rest:F}=(0,v.c)(G),U=(0,t.M)(f),J=L?{checked:L.value.includes(F.value),onChange:e=>{L.onChange(e),null==Z||Z(e)}}:{};return(0,n.jsx)(x.Z,{...M("root"),__staticSelector:"Checkbox",__stylesApiProps:r,id:U,size:T,labelPosition:_,label:b,description:j,error:R,disabled:A,classNames:i,styles:c,unstyled:d,"data-checked":J.checked||k||void 0,variant:I,ref:N,mod:D,...W,...C,children:(0,n.jsxs)(p.x,{...M("inner"),mod:{"data-label-position":_},children:[(0,n.jsx)(p.x,{component:"input",id:U,ref:o,checked:k,disabled:A,mod:{error:!!R,indeterminate:S},...M("input",{focusable:!0,variant:I}),onChange:Z,...F,...J,type:"checkbox"}),(0,n.jsx)(z,{indeterminate:S,...M("icon")})]})})});W.classes={...V,...x.J},W.displayName="@mantine/core/Checkbox",W.Group=E,W.Indicator=M,W.Card=A},2654:(e,o,r)=>{r.d(o,{U:()=>x});var n=r(8941),t=r(2452),i=r(7927),a=r(7255),l=r(7014),c=r(3764),d=r(3901),s=r(1398),h=r(8945),u=r(9524),m=r(9896);function v(e){return(null==e?void 0:e.current)?e.current.scrollHeight:"auto"}let p="undefined"!=typeof window&&window.requestAnimationFrame,b={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},x=(0,s.d5)((e,o)=>{let{children:r,in:s,transitionDuration:x,transitionTimingFunction:f,style:y,onTransitionEnd:g,animateOpacity:w,...C}=(0,l.w)("Collapse",b,e),k=(0,a.rZ)(),_=(0,t.J)(),j=k.respectReducedMotion&&_?0:x,R=function(e){let{transitionDuration:o,transitionTimingFunction:r="ease",onTransitionEnd:n=()=>{},opened:t}=e,a=(0,i.useRef)(null),l={display:"none",height:0,overflow:"hidden"},[c,d]=(0,i.useState)(t?{}:l),s=e=>{(0,h.flushSync)(()=>d(e))},b=e=>{s(o=>({...o,...e}))};function x(e){let n=o||function(e){if(!e||"string"==typeof e)return 0;let o=e/36;return Math.round((4+15*o**.25+o/5)*10)}(e);return{transition:"height ".concat(n,"ms ").concat(r,", opacity ").concat(n,"ms ").concat(r)}}(0,u.l)(()=>{"function"==typeof p&&(t?p(()=>{b({willChange:"height",display:"block",overflow:"hidden"}),p(()=>{let e=v(a);b({...x(e),height:e})})}):p(()=>{let e=v(a);b({...x(e),willChange:"height",height:e}),p(()=>b({height:0,overflow:"hidden"}))}))},[t]);let f=e=>{if(e.target===a.current&&"height"===e.propertyName){if(t){let e=v(a);e===c.height?s({}):b({height:e}),n()}else 0===c.height&&(s(l),n())}};return function(){let{style:e={},refKey:o="ref",...r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=r[o];return{"aria-hidden":!t,...r,[o]:(0,m.lq)(a,n),onTransitionEnd:f,style:{boxSizing:"border-box",...e,...c}}}}({opened:s,transitionDuration:j,transitionTimingFunction:f,onTransitionEnd:g});return 0===j?s?(0,n.jsx)(d.x,{...C,children:r}):null:(0,n.jsx)(d.x,{...R({style:{opacity:s||!w?1:0,transition:w?"opacity ".concat(j,"ms ").concat(f):"none",...(0,c.c)(y,k)},ref:o,...C}),children:r})});x.displayName="@mantine/core/Collapse"},3342:(e,o,r)=>{r.d(o,{Z:()=>h,J:()=>s});var n=r(8941),t=r(7927),i=r(7314),a=r(7983),l=r(3901),c=r(699),d={root:"m_5f75b09e",body:"m_5f6e695e",labelWrapper:"m_d3ea56bb",label:"m_8ee546b8",description:"m_328f68c0",error:"m_8e8a99cc"};let s=d,h=(0,t.forwardRef)((e,o)=>{let{__staticSelector:r,__stylesApiProps:t,className:s,classNames:h,styles:u,unstyled:m,children:v,label:p,description:b,id:x,disabled:f,error:y,size:g,labelPosition:w="left",bodyElement:C="div",labelElement:k="label",variant:_,style:j,vars:R,mod:A,...I}=e,S=(0,a.y)({name:r,props:t,className:s,style:j,classes:d,classNames:h,styles:u,unstyled:m});return(0,n.jsx)(l.x,{...S("root"),ref:o,__vars:{"--label-fz":(0,i.yv)(g),"--label-lh":(0,i.ap)(g,"label-lh")},mod:[{"label-position":w},A],variant:_,size:g,...I,children:(0,n.jsxs)(l.x,{component:C,htmlFor:"label"===C?x:void 0,...S("body"),children:[v,(0,n.jsxs)("div",{...S("labelWrapper"),"data-disabled":f||void 0,children:[p&&(0,n.jsx)(l.x,{component:k,htmlFor:"label"===k?x:void 0,...S("label"),"data-disabled":f||void 0,children:p}),b&&(0,n.jsx)(c.I.Description,{size:g,__inheritStyles:!1,...S("description"),children:b}),y&&"boolean"!=typeof y&&(0,n.jsx)(c.I.Error,{size:g,__inheritStyles:!1,...S("error"),children:y})]})]})})});h.displayName="@mantine/core/InlineInput"},8446:(e,o,r)=>{r.d(o,{m:()=>i});var n=r(8941);r(7927);var t=r(3561);function i(e){let{children:o,role:r}=e,i=(0,t.D)();return i?(0,n.jsx)("div",{role:r,"aria-labelledby":i.labelId,"aria-describedby":i.describedBy,children:o}):(0,n.jsx)(n.Fragment,{children:o})}},9103:(e,o,r)=>{r.d(o,{O:()=>x});var n=r(8941),t=r(2874);r(7927);var i=r(7314),a=r(7648),l=r(7014),c=r(7983),d=r(3901),s=r(4125),h=r(9599),u=r(2654),m=r(5445),v={root:"m_f0824112",description:"m_57492dcc",section:"m_690090b5",label:"m_1f6ac4c4",body:"m_f07af9d2",children:"m_e17b862f",chevron:"m_1fd8a00b"};let p={},b=(0,a.Z)((e,o)=>{let{variant:r,color:n,childrenOffset:t,autoContrast:a}=o,l=e.variantColorResolver({color:n||e.primaryColor,theme:e,variant:r||"light",autoContrast:a});return{root:{"--nl-bg":n||r?l.background:void 0,"--nl-hover":n||r?l.hover:void 0,"--nl-color":n||r?l.color:void 0},children:{"--nl-offset":(0,i.bG)(t)}}}),x=(0,s.b)((e,o)=>{let r=(0,l.w)("NavLink",p,e),{classNames:i,className:a,style:s,styles:x,unstyled:f,vars:y,opened:g,defaultOpened:w,onChange:C,children:k,onClick:_,active:j,disabled:R,leftSection:A,rightSection:I,label:S,description:z,disableRightSectionRotation:N,noWrap:E,childrenOffset:Z,onKeyDown:P,autoContrast:D,mod:G,...L}=r,T=(0,c.y)({name:"NavLink",props:r,classes:v,className:a,style:s,classNames:i,styles:x,unstyled:f,vars:y,varsResolver:b}),[M,V]=(0,t.C)({value:g,defaultValue:w,finalValue:!1,onChange:C}),B=!!k;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(m.k,{...T("root"),component:"a",ref:o,onClick:e=>{null==_||_(e),B&&(e.preventDefault(),V(!M))},onKeyDown:e=>{null==P||P(e),"Space"===e.nativeEvent.code&&B&&(e.preventDefault(),V(!M))},unstyled:f,mod:[{disabled:R,active:j,expanded:M},G],...L,children:[A&&(0,n.jsx)(d.x,{component:"span",...T("section"),mod:{position:"left"},children:A}),(0,n.jsxs)(d.x,{...T("body"),mod:{"no-wrap":E},children:[(0,n.jsx)(d.x,{component:"span",...T("label"),children:S}),(0,n.jsx)(d.x,{component:"span",mod:{active:j},...T("description"),children:z})]}),(B||I)&&(0,n.jsx)(d.x,{...T("section"),component:"span",mod:{rotate:M&&!N,position:"right"},children:B?I||(0,n.jsx)(h.Q,{...T("chevron")}):I})]}),(0,n.jsx)(u.U,{in:M,...T("collapse"),children:(0,n.jsx)("div",{...T("children"),children:k})})]})});x.classes=v,x.displayName="@mantine/core/NavLink"},2397:(e,o,r)=>{r.d(o,{Y:()=>H});var n=r(8941),t=r(7988);r(7927);var i=r(7314),a=r(7648),l=r(332),c=r(353),d=r(9686),s=r(8236),h=r(7014),u=r(7983),m=r(5047),v=r(3901),p=r(1398),b=r(3342),x=r(2558),f=r(5445),y=r(7123);let[g,w]=(0,y.V)(),[C,k]=(0,y.V)();var _={card:"m_9dc8ae12"};let j={withBorder:!0},R=(0,a.Z)((e,o)=>{let{radius:r}=o;return{card:{"--card-radius":(0,i.H5)(r)}}}),A=(0,p.d5)((e,o)=>{let r=(0,h.w)("RadioCard",j,e),{classNames:t,className:i,style:a,styles:l,unstyled:c,vars:d,checked:s,mod:m,withBorder:v,value:p,onClick:b,name:y,onKeyDown:g,...k}=r,A=(0,u.y)({name:"RadioCard",classes:_,props:r,className:i,style:a,classNames:t,styles:l,unstyled:c,vars:d,varsResolver:R,rootSelector:"card"}),{dir:I}=(0,x.gm)(),S=w(),z="boolean"==typeof s?s:(null==S?void 0:S.value)===p,N=y||(null==S?void 0:S.name);return(0,n.jsx)(C,{value:{checked:z},children:(0,n.jsx)(f.k,{ref:o,mod:[{"with-border":v,checked:z},m],...A("card"),...k,role:"radio","aria-checked":z,name:N,onClick:e=>{null==b||b(e),null==S||S.onChange(p||"")},onKeyDown:e=>{if(null==g||g(e),["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(e.nativeEvent.code)){e.preventDefault();let o=Array.from(document.querySelectorAll('[role="radio"][name="'.concat(N||"__mantine",'"]'))),r=o.findIndex(o=>o===e.target),n=r+1>=o.length?0:r+1,t=r-1<0?o.length-1:r-1;"ArrowDown"===e.nativeEvent.code&&(o[n].focus(),o[n].click()),"ArrowUp"===e.nativeEvent.code&&(o[t].focus(),o[t].click()),"ArrowLeft"===e.nativeEvent.code&&(o["ltr"===I?t:n].focus(),o["ltr"===I?t:n].click()),"ArrowRight"===e.nativeEvent.code&&(o["ltr"===I?n:t].focus(),o["ltr"===I?n:t].click())}}})})});A.displayName="@mantine/core/RadioCard",A.classes=_;var I=r(2874),S=r(699),z=r(8446);let N={},E=(0,p.d5)((e,o)=>{let{value:r,defaultValue:i,onChange:a,size:l,wrapperProps:c,children:d,name:s,readOnly:u,...m}=(0,h.w)("RadioGroup",N,e),v=(0,t.M)(s),[p,b]=(0,I.C)({value:r,defaultValue:i,finalValue:"",onChange:a});return(0,n.jsx)(g,{value:{value:p,onChange:e=>!u&&b("string"==typeof e?e:e.currentTarget.value),size:l,name:v},children:(0,n.jsx)(S.I.Wrapper,{size:l,ref:o,...c,...m,labelElement:"div",__staticSelector:"RadioGroup",children:(0,n.jsx)(z.m,{role:"radiogroup",children:d})})})});E.classes=S.I.Wrapper.classes,E.displayName="@mantine/core/RadioGroup";var Z=r(6158);function P(e){let{size:o,style:r,...t}=e;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 5 5",style:{width:(0,Z.h)(o),height:(0,Z.h)(o),...r},"aria-hidden":!0,...t,children:(0,n.jsx)("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"currentColor"})})}var D={indicator:"m_717d7ff6",icon:"m_3e4da632","indicator--outline":"m_2980836c"};let G={icon:P},L=(0,a.Z)((e,o)=>{let{radius:r,color:n,size:t,iconColor:a,variant:h,autoContrast:u}=o,m=(0,l.E)({color:n||e.primaryColor,theme:e}),v=m.isThemeColor&&void 0===m.shade?"var(--mantine-color-".concat(m.color,"-outline)"):m.color;return{indicator:{"--radio-size":(0,i.ap)(t,"radio-size"),"--radio-radius":void 0===r?void 0:(0,i.H5)(r),"--radio-color":"outline"===h?v:(0,c.p)(n,e),"--radio-icon-size":(0,i.ap)(t,"radio-icon-size"),"--radio-icon-color":a?(0,c.p)(a,e):(0,s.o)(u,e)?(0,d.R)({color:n,theme:e,autoContrast:u}):void 0}}}),T=(0,p.d5)((e,o)=>{let r=(0,h.w)("RadioIndicator",G,e),{classNames:t,className:i,style:a,styles:l,unstyled:c,vars:d,icon:s,radius:m,color:p,iconColor:b,autoContrast:x,checked:f,mod:y,variant:g,disabled:w,...C}=r,_=(0,u.y)({name:"RadioIndicator",classes:D,props:r,className:i,style:a,classNames:t,styles:l,unstyled:c,vars:d,varsResolver:L,rootSelector:"indicator"}),j=k(),R="boolean"==typeof f?f:(null==j?void 0:j.checked)||!1;return(0,n.jsx)(v.x,{ref:o,..._("indicator",{variant:g}),variant:g,mod:[{checked:R,disabled:w},y],...C,children:(0,n.jsx)(s,{..._("icon")})})});T.displayName="@mantine/core/RadioIndicator",T.classes=D;var M={root:"m_f3f1af94",inner:"m_89c4f5e4",icon:"m_f3ed6b2b",radio:"m_8a3dbb89","radio--outline":"m_1bfe9d39"};let V={labelPosition:"right"},B=(0,a.Z)((e,o)=>{let{size:r,radius:n,color:t,iconColor:a,variant:h,autoContrast:u}=o,m=(0,l.E)({color:t||e.primaryColor,theme:e}),v=m.isThemeColor&&void 0===m.shade?"var(--mantine-color-".concat(m.color,"-outline)"):m.color;return{root:{"--radio-size":(0,i.ap)(r,"radio-size"),"--radio-radius":void 0===n?void 0:(0,i.H5)(n),"--radio-color":"outline"===h?v:(0,c.p)(t,e),"--radio-icon-color":a?(0,c.p)(a,e):(0,s.o)(u,e)?(0,d.R)({color:t,theme:e,autoContrast:u}):void 0,"--radio-icon-size":(0,i.ap)(r,"radio-icon-size")}}}),H=(0,p.d5)((e,o)=>{var r,i;let a=(0,h.w)("Radio",V,e),{classNames:l,className:c,style:d,styles:s,unstyled:p,vars:x,id:f,size:y,label:g,labelPosition:C,description:k,error:_,radius:j,color:R,variant:A,disabled:I,wrapperProps:S,icon:z=P,rootRef:N,iconColor:E,onChange:Z,mod:D,...G}=a,L=(0,u.y)({name:"Radio",classes:M,props:a,className:c,style:d,classNames:l,styles:s,unstyled:p,vars:x,varsResolver:B}),T=w(),H=null!==(r=null==T?void 0:T.size)&&void 0!==r?r:y,W=a.size?y:H,{styleProps:F,rest:U}=(0,m.c)(G),J=(0,t.M)(f),K=T?{checked:T.value===U.value,name:null!==(i=U.name)&&void 0!==i?i:T.name,onChange:e=>{T.onChange(e),null==Z||Z(e)}}:{};return(0,n.jsx)(b.Z,{...L("root"),__staticSelector:"Radio",__stylesApiProps:a,id:J,size:W,labelPosition:C,label:g,description:k,error:_,disabled:I,classNames:l,styles:s,unstyled:p,"data-checked":K.checked||void 0,variant:A,ref:N,mod:D,...F,...S,children:(0,n.jsxs)(v.x,{...L("inner"),mod:{"label-position":C},children:[(0,n.jsx)(v.x,{...L("radio",{focusable:!0,variant:A}),onChange:Z,...U,...K,component:"input",mod:{error:!!_},ref:o,id:J,disabled:I,type:"radio"}),(0,n.jsx)(z,{...L("icon"),"aria-hidden":!0})]})})});H.classes=M,H.displayName="@mantine/core/Radio",H.Group=E,H.Card=A,H.Indicator=T},4920:(e,o,r)=>{r.d(o,{K:()=>m});var n=r(8941);r(7927);var t=r(7314),i=r(7648),a=r(7014),l=r(7983),c=r(3901),d=r(1398),s={root:"m_6d731127"};let h={gap:"md",align:"stretch",justify:"flex-start"},u=(0,i.Z)((e,o)=>{let{gap:r,align:n,justify:i}=o;return{root:{"--stack-gap":(0,t.bG)(r),"--stack-align":n,"--stack-justify":i}}}),m=(0,d.d5)((e,o)=>{let r=(0,a.w)("Stack",h,e),{classNames:t,className:i,style:d,styles:m,unstyled:v,vars:p,align:b,justify:x,gap:f,variant:y,...g}=r,w=(0,l.y)({name:"Stack",props:r,classes:s,className:i,style:d,classNames:t,styles:m,unstyled:v,vars:p,varsResolver:u});return(0,n.jsx)(c.x,{ref:o,...w("root"),variant:y,...g})});m.classes=s,m.displayName="@mantine/core/Stack"},2825:(e,o,r)=>{r.d(o,{r:()=>R});var n=r(8941),t=r(7988),i=r(2874),a=r(7927),l=r(7314),c=r(7648),d=r(353),s=r(7014),h=r(7983),u=r(5047),m=r(3901),v=r(1398),p=r(3342);let b=(0,a.createContext)(null),x=b.Provider,f=()=>(0,a.useContext)(b);var y=r(699),g=r(8446);let w={},C=(0,v.d5)((e,o)=>{let{value:r,defaultValue:t,onChange:a,size:l,wrapperProps:c,children:d,readOnly:h,...u}=(0,s.w)("SwitchGroup",w,e),[m,v]=(0,i.C)({value:r,defaultValue:t,finalValue:[],onChange:a});return(0,n.jsx)(x,{value:{value:m,onChange:e=>{let o=e.currentTarget.value;h||v(m.includes(o)?m.filter(e=>e!==o):[...m,o])},size:l},children:(0,n.jsx)(y.I.Wrapper,{size:l,ref:o,...c,...u,labelElement:"div",__staticSelector:"SwitchGroup",children:(0,n.jsx)(g.m,{role:"group",children:d})})})});C.classes=y.I.Wrapper.classes,C.displayName="@mantine/core/SwitchGroup";var k={root:"m_5f93f3bb",input:"m_926b4011",track:"m_9307d992",thumb:"m_93039a1d",trackLabel:"m_8277e082"};let _={labelPosition:"right"},j=(0,c.Z)((e,o)=>{let{radius:r,color:n,size:t}=o;return{root:{"--switch-radius":void 0===r?void 0:(0,l.H5)(r),"--switch-height":(0,l.ap)(t,"switch-height"),"--switch-width":(0,l.ap)(t,"switch-width"),"--switch-thumb-size":(0,l.ap)(t,"switch-thumb-size"),"--switch-label-font-size":(0,l.ap)(t,"switch-label-font-size"),"--switch-track-label-padding":(0,l.ap)(t,"switch-track-label-padding"),"--switch-color":n?(0,d.p)(n,e):void 0}}}),R=(0,v.d5)((e,o)=>{var r;let a=(0,s.w)("Switch",_,e),{classNames:l,className:c,style:d,styles:v,unstyled:b,vars:x,color:y,label:g,offLabel:w,onLabel:C,id:R,size:A,radius:I,wrapperProps:S,thumbIcon:z,checked:N,defaultChecked:E,onChange:Z,labelPosition:P,description:D,error:G,disabled:L,variant:T,rootRef:M,mod:V,...B}=a,H=f(),W=A||(null==H?void 0:H.size),F=(0,h.y)({name:"Switch",props:a,classes:k,className:c,style:d,classNames:l,styles:v,unstyled:b,vars:x,varsResolver:j}),{styleProps:U,rest:J}=(0,u.c)(B),K=(0,t.M)(R),Q=H?{checked:H.value.includes(J.value),onChange:H.onChange}:{},[q,O]=(0,i.C)({value:null!==(r=Q.checked)&&void 0!==r?r:N,defaultValue:E,finalValue:!1});return(0,n.jsxs)(p.Z,{...F("root"),__staticSelector:"Switch",__stylesApiProps:a,id:K,size:W,labelPosition:P,label:g,description:D,error:G,disabled:L,bodyElement:"label",labelElement:"span",classNames:l,styles:v,unstyled:b,"data-checked":Q.checked||void 0,variant:T,ref:M,mod:V,...U,...S,children:[(0,n.jsx)("input",{...J,disabled:L,checked:q,onChange:e=>{var o;H?null===(o=Q.onChange)||void 0===o||o.call(Q,e):null==Z||Z(e),O(e.currentTarget.checked)},id:K,ref:o,type:"checkbox",role:"switch",...F("input")}),(0,n.jsxs)(m.x,{"aria-hidden":"true",mod:{error:G,"label-position":P,"without-labels":!C&&!w},...F("track"),children:[(0,n.jsx)(m.x,{component:"span",mod:"reduce-motion",...F("thumb"),children:z}),(0,n.jsx)("span",{...F("trackLabel"),children:q?C:w})]})]})});R.classes={...k,...p.J},R.displayName="@mantine/core/Switch",R.Group=C},8236:(e,o,r)=>{r.d(o,{o:()=>n});function n(e,o){return"boolean"==typeof e?e:o.autoContrast}},9686:(e,o,r)=>{r.d(o,{R:()=>i,a:()=>a});var n=r(1547),t=r(332);function i(e){let{color:o,theme:r,autoContrast:n}=e;return("boolean"==typeof n?n:r.autoContrast)&&(0,t.E)({color:o||r.primaryColor,theme:r}).isLight?"var(--mantine-color-black)":"var(--mantine-color-white)"}function a(e,o){return i({color:e.colors[e.primaryColor][(0,n.j)(e,o)],theme:e,autoContrast:null})}},4854:(e,o,r)=>{r.d(o,{Z:()=>n});var n=(0,r(4256).Z)("outline","brand-telegram","IconBrandTelegram",[["path",{d:"M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4",key:"svg-0"}]])},5072:(e,o,r)=>{r.d(o,{Z:()=>n});var n=(0,r(4256).Z)("outline","brand-twitter","IconBrandTwitter",[["path",{d:"M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z",key:"svg-0"}]])}}]);