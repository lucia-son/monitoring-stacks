"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8347],{94762:(I,p,e)=>{e.d(p,{F:()=>u});var l=e(9892),n=e(66111),f=e(72648),d=e(53731);const u=({renderExpandedContent:r,...s})=>{const m=(0,f.wW)(t);return n.createElement(d.t,{renderExpandedContent:r?(T,D,P)=>n.createElement(n.Fragment,null,D!==P.length-1&&n.createElement("div",{className:(0,l.cx)(m.contentGuideline,m.guideline)}),r(T,D,P)):void 0,renderPrefixHeader:()=>n.createElement("div",{className:m.relative},n.createElement("div",{className:(0,l.cx)(m.headerGuideline,m.guideline)})),renderPrefixCell:(T,D,P)=>n.createElement("div",{className:m.relative},n.createElement("div",{className:(0,l.cx)(m.topGuideline,m.guideline)}),D!==P.length-1&&n.createElement("div",{className:(0,l.cx)(m.bottomGuideline,m.guideline)})),...s})},t=r=>({relative:l.css`
    position: relative;
    height: 100%;
  `,guideline:l.css`
    left: -19px;
    border-left: 1px solid ${r.colors.border.weak};
    position: absolute;

    ${r.breakpoints.down("md")} {
      display: none;
    }
  `,topGuideline:l.css`
    width: 18px;
    border-bottom: 1px solid ${r.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,bottomGuideline:l.css`
    top: 50%;
    bottom: 0;
  `,contentGuideline:l.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,headerGuideline:l.css`
    top: -17px;
    bottom: 0;
  `})},40106:(I,p,e)=>{e.d(p,{C0:()=>t,Uv:()=>d,Xq:()=>u});var l=e(66111),n=e(45253),f=e(19985),d=(r=>(r.ContactPoint="contact point",r.Template="template",r.MuteTiming="mute timing",r.AlertRule="alert rule",r.RootNotificationPolicy="root notification policy",r))(d||{});const u=({resource:r})=>l.createElement(n.b,{title:`This ${r} cannot be edited through the UI`,severity:"info"},"This ",r," has been provisioned, that means it was created by config. Please contact your server admin to update this ",r,"."),t=()=>l.createElement(f.C,{text:"Provisioned",color:"purple"})},29721:(I,p,e)=>{e.d(p,{V:()=>f});var l=e(66111),n=e(39904);const f=({namespace:d,group:u})=>u?l.createElement(l.Fragment,null,d," ",l.createElement(n.J,{name:"angle-right"})," ",u):l.createElement(l.Fragment,null,d)},80399:(I,p,e)=>{e.d(p,{V:()=>t});var l=e(9892),n=e(66111),f=e(72648),d=e(61860),u=e(39904);const t=({rule:s})=>{const m=(0,f.wW)(r);return s.health==="err"||s.health==="error"?n.createElement(d.u,{theme:"error",content:s.lastError||"No error message provided."},n.createElement("div",{className:m.warn},n.createElement(u.J,{name:"exclamation-triangle"}),n.createElement("span",null,"error"))):n.createElement(n.Fragment,null,s.health)},r=s=>({warn:l.css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: ${s.spacing(1)};

    color: ${s.colors.warning.text};
  `})},48208:(I,p,e)=>{e.d(p,{p:()=>T});var l=e(9892),n=e(66111),f=e(76282),d=e(26418),u=e(72648),t=e(67487),r=e(46063),s=e(79662),m=e(45608);const T=({rule:P,isDeleting:N,isCreating:K,isPaused:A})=>{const U=(0,u.wW)(D),{promRule:g}=P,S=(0,n.useMemo)(()=>{if(g&&(0,s.x_)(g)&&g.alerts?.length&&g.state!==r.x_.Inactive){const L=g.activeAt?new Date(g.activeAt):(0,s.ub)(g);if(L)return n.createElement("span",{title:String(L),className:U.for},"for"," ",(0,f.vT)({start:L,end:new Date},!1))}return null},[g,U]);return N?n.createElement(d.Stack,{gap:1},n.createElement(t.$,null),"Deleting"):K?n.createElement(d.Stack,{gap:1},n.createElement(t.$,null),"Creating"):g&&(0,s.x_)(g)?n.createElement(d.Stack,{gap:1},n.createElement(m.l,{state:g.state,isPaused:A}),S):g&&(0,s.OP)(g)?n.createElement(n.Fragment,null,"Recording rule"):n.createElement(n.Fragment,null,"n/a")},D=P=>({for:l.css`
    font-size: ${P.typography.bodySmall.fontSize};
    color: ${P.colors.text.secondary};
    white-space: nowrap;
    padding-top: 2px;
  `})},8347:(I,p,e)=>{e.d(p,{i:()=>Ee});var l=e(9892),n=e(85719),f=e(29122);function d(a,v){(0,f.Z)(2,arguments);var h=(0,n.Z)(a),C=(0,n.Z)(v);return h.getTime()<C.getTime()}var u=e(14016),t=e(66111),r=e(76282),s=e(67483),m=e(77258),T=e(72648),D=e(61860),P=e(84952),N=e(8055),K=e(37190),A=e(79662),U=e(53731),g=e(94762),S=e(40106),L=e(29721),Y=e(46587),j=e(56895),J=e(26418),z=e(31403),Q=e(94599),X=e(98102),w=e(60499),k=e(27876),q=e(44391),_=e(72004),G=e(45849),H=e(10505),b=e(60048),ee=e(93411),te=e(41273);const Pe=a=>window.matchMedia(`(max-width: ${a}px)`).matches,ne=({rule:a,rulesSource:v})=>{const h=(0,k.useDispatch)(),C=(0,j.TH)(),W=(0,w.iG)(),x=(0,T.wW)(le),{namespace:E,group:o,rulerRule:i}=a,[c,R]=(0,t.useState)(),y=(0,G.EG)(v),M=(0,A.Pc)(a.rulerRule)&&Boolean(a.rulerRule.grafana_alert.provenance),O=[],$=(0,A.Jq)(o),{isEditable:pe,isRemovable:fe}=(0,q.M)(y,i),Z=C.pathname+C.search,V=ae(C.pathname),De=()=>{if(c&&c.rulerRule){const B=b.Zk((0,G.EG)(c.namespace.rulesSource),c.namespace.name,c.group.name,c.rulerRule);h((0,_.hS)(B,{navigateTo:V?"/alerting/list":void 0})),R(void 0)}},he=()=>(0,H.t6)(v,a),Me=(0,G.EG)(v);if(V||O.push(t.createElement(D.u,{placement:"top",content:"View"},t.createElement(z.Qj,{className:x.button,title:"View",size:"sm",key:"view",variant:"secondary",icon:"eye",href:(0,H.V2)(v,a,Z)}))),pe&&i&&!$){const B=b.Zk(Me,E.name,o.name,i);if(!M){const F=(0,ee.u)(`/alerting/${encodeURIComponent(b.$V(B))}/edit`,{returnTo:Z});V&&O.push(t.createElement(Q.m,{key:"copy",icon:"copy",onClipboardError:Re=>{W.error("Error while copying URL",Re)},className:x.button,size:"sm",getText:he},"Copy link to rule")),O.push(t.createElement(D.u,{placement:"top",content:"Edit"},t.createElement(z.Qj,{title:"Edit",className:x.button,size:"sm",key:"edit",variant:"secondary",icon:"pen",href:F})))}O.push(t.createElement(D.u,{placement:"top",content:"Copy"},t.createElement(te.E,{ruleIdentifier:B,isProvisioned:M,className:x.button})))}return fe&&i&&!$&&!M&&O.push(t.createElement(D.u,{placement:"top",content:"Delete"},t.createElement(z.zx,{title:"Delete",className:x.button,size:"sm",type:"button",key:"delete",variant:"secondary",icon:"trash-alt",onClick:()=>R(a)}))),O.length?t.createElement(t.Fragment,null,t.createElement(J.Stack,{gap:1},O.map((B,F)=>t.createElement(t.Fragment,{key:F},B))),!!c&&t.createElement(X.s,{isOpen:!0,title:"Delete rule",body:"Deleting this rule will permanently remove it from your alert rule list. Are you sure you want to delete this rule?",confirmText:"Yes, delete",icon:"exclamation-triangle",onConfirm:De,onDismiss:()=>R(void 0)})):null};function ae(a){return a.endsWith("/view")}const le=a=>({button:l.css`
    padding: 0 ${a.spacing(2)};
  `});var oe=e(35645),re=e(39904),se=e(82963);function ie({rule:a}){const v=(0,T.wW)(ce),{exceedsLimit:h}=(0,t.useMemo)(()=>(0,se.f)(a.group.interval),[a.group.interval]);return h?t.createElement(D.u,{theme:"error",content:t.createElement("div",null,"A minimum evaluation interval of"," ",t.createElement("span",{className:v.globalLimitValue},oe.v.unifiedAlerting.minInterval)," has been configured in Grafana and will be used instead of the ",a.group.interval," interval configured for the Rule Group.")},t.createElement(re.J,{name:"stopwatch-slash",className:v.icon})):null}function ce(a){return{globalLimitValue:l.css`
      font-weight: ${a.typography.fontWeightBold};
    `,icon:l.css`
      fill: ${a.colors.warning.text};
    `}}var me=e(89149),ue=e(80399),de=e(48208);const Ee=({rules:a,className:v,showGuidelines:h=!1,emptyMessage:C="No rules found.",showGroupColumn:W=!1,showSummaryColumn:x=!1,showNextEvaluationColumn:E=!1})=>{const o=(0,T.wW)(ge),i=(0,l.cx)(o.wrapper,v,{[o.wrapperMargin]:h}),c=(0,t.useMemo)(()=>a.map((M,O)=>({id:`${M.namespace.name}-${M.group.name}-${M.name}-${O}`,data:M})),[a]),R=ve(x,W,E);if(!a.length)return t.createElement("div",{className:(0,l.cx)(i,o.emptyMessage)},C);const y=h?g.F:U.t;return t.createElement("div",{className:i,"data-testid":"rules-table"},t.createElement(y,{cols:R,isExpandable:!0,items:c,renderExpandedContent:({data:M})=>t.createElement(me.Ii,{rule:M}),pagination:{itemsPerPage:P.gN},paginationStyles:o.pagination}))},ge=a=>({wrapperMargin:l.css`
    ${a.breakpoints.up("md")} {
      margin-left: 36px;
    }
  `,emptyMessage:l.css`
    padding: ${a.spacing(1)};
  `,wrapper:l.css`
    width: auto;
    border-radius: ${a.shape.borderRadius()};
  `,pagination:l.css`
    display: flex;
    margin: 0;
    padding-top: ${a.spacing(1)};
    padding-bottom: ${a.spacing(.25)};
    justify-content: center;
    border-left: 1px solid ${a.colors.border.medium};
    border-right: 1px solid ${a.colors.border.medium};
    border-bottom: 1px solid ${a.colors.border.medium};
  `});function ve(a,v,h){const{hasRuler:C,rulerRulesLoaded:W}=(0,N.h)(),x=(0,t.useCallback)(E=>{const o=E.promRule?.lastEvaluation&&(0,r.qb)(E.promRule.lastEvaluation),i=E.group.interval&&(0,r.jO)(E.group.interval);if(!o||!i||(0,A.E)(E))return;const c=(0,r.RA)(E.group.interval),R=Date.parse(E.promRule?.lastEvaluation||""),y=(0,r.Ks)(R,c);return d(y,new Date)?{humanized:`within ${(0,u.Z)(c)}`,fullDate:`within ${(0,u.Z)(c)}`}:{humanized:`in ${(0,s.CQ)(y).locale("en").fromNow(!0)}`,fullDate:(0,m.dq)(y,{format:"YYYY-MM-DD HH:mm:ss"})}},[]);return(0,t.useMemo)(()=>{const E=[{id:"state",label:"State",renderCell:({data:o})=>{const{namespace:i}=o,{rulesSource:c}=i,{promRule:R,rulerRule:y}=o,M=!!(C(c)&&W(c)&&R&&!y),O=!!(C(c)&&W(c)&&y&&!R),$=(0,A.E)(o);return t.createElement(de.p,{rule:o,isDeleting:M,isCreating:O,isPaused:$})},size:"165px"},{id:"name",label:"Name",renderCell:({data:o})=>o.name,size:h?4:5},{id:"provisioned",label:"",renderCell:({data:o})=>{const i=o.rulerRule;return(0,A.Pc)(i)&&i.grafana_alert.provenance?t.createElement(S.C0,null):null},size:"100px"},{id:"warnings",label:"",renderCell:({data:o})=>t.createElement(ie,{rule:o}),size:"45px"},{id:"health",label:"Health",renderCell:({data:{promRule:o,group:i}})=>o?t.createElement(ue.V,{rule:o}):null,size:"75px"}];return a&&E.push({id:"summary",label:"Summary",renderCell:({data:o})=>t.createElement(Y.Z,{input:o.annotations[K.q6.summary]??""}),size:h?4:5}),h&&E.push({id:"nextEvaluation",label:"Next evaluation",renderCell:({data:o})=>{const i=x(o);return i&&t.createElement(D.u,{placement:"top",content:`${i?.fullDate}`,theme:"info"},t.createElement("span",null,i?.humanized))},size:2}),v&&E.push({id:"group",label:"Group",renderCell:({data:o})=>{const{namespace:i,group:c}=o;return c.name==="default"?t.createElement(L.V,{namespace:i.name}):t.createElement(L.V,{namespace:i.name,group:c.name})},size:5}),E.push({id:"actions",label:"Actions",renderCell:({data:o})=>t.createElement(ne,{rule:o,rulesSource:o.namespace.rulesSource}),size:"200px"}),E},[a,v,h,C,W,x])}},8055:(I,p,e)=>{e.d(p,{h:()=>d});var l=e(66111),n=e(45849),f=e(69945);function d(){const u=(0,f._)(s=>s.rulerRules),t=(0,l.useCallback)(s=>{const m=typeof s=="string"?s:s.name;return m===n.GC||!!u[m]?.result},[u]),r=(0,l.useCallback)(s=>{const m=(0,n.EG)(s),T=u[m]?.result;return Boolean(T)},[u]);return{hasRuler:t,rulerRulesLoaded:r}}}}]);

//# sourceMappingURL=8347.f89a4ef0bf9759169039.js.map