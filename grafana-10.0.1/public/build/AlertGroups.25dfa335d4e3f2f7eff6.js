"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2415],{48401:($,f,e)=>{e.r(f),e.d(f,{default:()=>ne});var a=e(9892),t=e(66111),i=e(72648),o=e(61744),v=e(45253),y=e(96044),A=e(27876),M=e(39031),u=e(30173),h=e(45524),d=e(88331),O=e(94647),T=e(31403),b=e(29614),N=e(23403),K=e(10505),Q=e(94984),Z=e(64353),J=e(2594);const V=({onStateFilterChange:l,stateFilter:p})=>{const g=(0,i.wW)(H),m=Object.entries(M.Z9).sort(([n],[r])=>n<r?-1:1).map(([n,r])=>({label:n,value:r}));return t.createElement("div",{className:g.wrapper},t.createElement(Z._,null,"State"),t.createElement(J.S,{options:m,value:p,onChange:l}))},H=l=>({wrapper:a.css`
    margin-left: ${l.spacing(1)};
  `});var z=e(82897),X=e(8581),Y=e(39904);const s=({className:l,groups:p,groupBy:g,onGroupingChange:m})=>{const n=(0,z.uniq)(p.flatMap(r=>r.alerts).flatMap(({labels:r})=>Object.keys(r))).filter(r=>!(r.startsWith("__")&&r.endsWith("__"))).map(r=>({label:r,value:r}));return t.createElement("div",{"data-testid":"group-by-container",className:l},t.createElement(Z._,null,"Custom group by"),t.createElement(X.NU,{"aria-label":"group by label keys",value:g,placeholder:"Group by",prefix:t.createElement(Y.J,{name:"tag-alt"}),onChange:r=>{m(r.map(({value:c})=>c))},options:n}))};var D=e(30151);const P=({groups:l})=>{const[p,g]=(0,t.useState)(Math.floor(Math.random()*100)),[m,n]=(0,y.K)(),{groupBy:r=[],queryString:c,alertState:C}=(0,K.lC)(m),G=`matcher-${p}`,W=(0,N.k)("instance"),[R,U]=(0,b.k)(W),L=(0,i.wW)(B),F=()=>{n({groupBy:null,queryString:null,alertState:null}),setTimeout(()=>g(p+1),100)},w=!!(r.length>0||c||C);return t.createElement("div",{className:L.wrapper},t.createElement(Q.P,{current:R,onChange:U,dataSources:W}),t.createElement("div",{className:L.filterSection},t.createElement(D.F,{className:L.filterInput,key:G,defaultQueryString:c,onFilterChange:E=>n({queryString:E||null})}),t.createElement(s,{className:L.filterInput,groups:l,groupBy:r,onGroupingChange:E=>n({groupBy:E.length?E.join(","):null})}),t.createElement(V,{stateFilter:C,onStateFilterChange:E=>n({alertState:E||null})}),w&&t.createElement(T.zx,{className:L.clearButton,variant:"secondary",icon:"times",onClick:F},"Clear filters")))},B=l=>({wrapper:a.css`
    border-bottom: 1px solid ${l.colors.border.medium};
    margin-bottom: ${l.spacing(3)};
  `,filterSection:a.css`
    display: flex;
    flex-direction: row;
    margin-bottom: ${l.spacing(3)};
  `,filterInput:a.css`
    width: 340px;
    & + & {
      margin-left: ${l.spacing(1)};
    }
  `,clearButton:a.css`
    margin-left: ${l.spacing(1)};
    margin-top: 19px;
  `});var x=e(20194);const S=l=>{const[p]=(0,y.K)(),g=(0,K.lC)(p),m=(0,x.Zh)(g.queryString||"");return(0,t.useMemo)(()=>l.reduce((n,r)=>{const c=r.alerts.filter(({labels:C,status:G})=>{const W=(0,x.eD)(C,m),R=g.alertState?G.state===g.alertState:!0;return W&&R});return c.length>0&&(Object.keys(r.labels).length===0?n.unshift({...r,alerts:c}):n.push({...r,alerts:c})),n},[]),[l,g,m])},I=(l,p)=>(0,t.useMemo)(()=>p.length===0?l.filter(n=>Object.keys(n.labels).length===0).length>1?l.reduce((n,r)=>{if(Object.keys(r.labels).length===0){const c=n.find(({labels:C})=>Object.keys(C));c?c.alerts=(0,z.uniqBy)([...c.alerts,...r.alerts],"labels"):n.push({alerts:r.alerts,labels:{},receiver:{name:"NONE"}})}else n.push(r);return n},[]):l:l.flatMap(({alerts:m})=>m).reduce((m,n)=>{if(p.every(c=>Object.keys(n.labels).includes(c))){const c=m.find(C=>p.every(G=>C.labels[G]===n.labels[G]));if(c)c.alerts.push(n);else{const C=p.reduce((G,W)=>(G={...G,[W]:n.labels[W]},G),{});m.push({alerts:[n],labels:C,receiver:{name:"NONE"}})}}else{const c=m.find(C=>Object.keys(C.labels).length===0);c?c.alerts.push(n):m.push({alerts:[n],labels:{},receiver:{name:"NONE"}})}return m},[]),[l,p]);var k=e(69945),q=e(72004),_=e(37190),ee=e(45849),te=e(46818);const ae=()=>{const{useGetAlertmanagerChoiceStatusQuery:l}=u.h,p=(0,N.k)("instance"),[g]=(0,b.k)(p),m=(0,A.useDispatch)(),[n]=(0,y.K)(),{groupBy:r=[]}=(0,K.lC)(n),c=(0,i.wW)(se),{currentData:C}=l(),G=(0,k._)(E=>E.amAlertGroups),{loading:W,error:R,result:U=[]}=G[g||""]??te.oq,L=I(U,r),F=S(L),w=g===ee.GC&&C?.alertmanagersChoice===M.TE.External;return(0,t.useEffect)(()=>{function E(){g&&m((0,q.mS)(g))}E();const j=setInterval(E,_.iF);return()=>{clearInterval(j)}},[m,g]),g?t.createElement(h.J,{pageId:"groups"},t.createElement(P,{groups:U}),W&&t.createElement(o.u,{text:"Loading notifications"}),R&&!W&&t.createElement(v.b,{title:"Error loading notifications",severity:"error"},R.message||"Unknown error"),w&&t.createElement(v.b,{title:"Grafana alerts are not delivered to Grafana Alertmanager"},"Grafana is configured to send alerts to external alertmanagers only. No alerts are expected to be available here for the selected Alertmanager."),U&&F.map((E,j)=>t.createElement(t.Fragment,{key:`${JSON.stringify(E.labels)}-group-${j}`},(j===1&&Object.keys(F[0].labels).length===0||j===0&&Object.keys(E.labels).length>0)&&t.createElement("p",{className:c.groupingBanner},"Grouped by: ",Object.keys(E.labels).join(", ")),t.createElement(O.y,{alertManagerSourceName:g||"",group:E}))),U&&!F.length&&t.createElement("p",null,"No results.")):t.createElement(h.J,{pageId:"groups"},t.createElement(d.I,{availableAlertManagers:p}))},se=l=>({groupingBanner:a.css`
    margin: ${l.spacing(2,0)};
  `}),ne=ae},51981:($,f,e)=>{e.d(f,{q:()=>i});var a=e(66111),t=e(82002);const i=({actions:o,children:v,fallback:y=!0})=>o.some(A=>t.Vt.hasAccess(A,y))?a.createElement(a.Fragment,null,v):null},94762:($,f,e)=>{e.d(f,{F:()=>v});var a=e(9892),t=e(66111),i=e(72648),o=e(53731);const v=({renderExpandedContent:A,...M})=>{const u=(0,i.wW)(y);return t.createElement(o.t,{renderExpandedContent:A?(h,d,O)=>t.createElement(t.Fragment,null,d!==O.length-1&&t.createElement("div",{className:(0,a.cx)(u.contentGuideline,u.guideline)}),A(h,d,O)):void 0,renderPrefixHeader:()=>t.createElement("div",{className:u.relative},t.createElement("div",{className:(0,a.cx)(u.headerGuideline,u.guideline)})),renderPrefixCell:(h,d,O)=>t.createElement("div",{className:u.relative},t.createElement("div",{className:(0,a.cx)(u.topGuideline,u.guideline)}),d!==O.length-1&&t.createElement("div",{className:(0,a.cx)(u.bottomGuideline,u.guideline)})),...M})},y=A=>({relative:a.css`
    position: relative;
    height: 100%;
  `,guideline:a.css`
    left: -19px;
    border-left: 1px solid ${A.colors.border.weak};
    position: absolute;

    ${A.breakpoints.down("md")} {
      display: none;
    }
  `,topGuideline:a.css`
    width: 18px;
    border-bottom: 1px solid ${A.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,bottomGuideline:a.css`
    top: 50%;
    bottom: 0;
  `,contentGuideline:a.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,headerGuideline:a.css`
    top: -17px;
    bottom: 0;
  `})},88331:($,f,e)=>{e.d(f,{I:()=>A});var a=e(66111),t=e(45253),i=e(29614),o=e(94984);const v=()=>a.createElement(t.b,{title:"No Alertmanager found",severity:"warning"},"We could not find any external Alertmanagers and you may not have access to the built-in Grafana Alertmanager."),y=()=>a.createElement(t.b,{title:"Selected Alertmanager not found. Select a different Alertmanager.",severity:"warning"},"Selected Alertmanager no longer exists or you may not have permission to access it."),A=({availableAlertManagers:M})=>{const[u,h]=(0,i.k)(M),d=M.length>0;return a.createElement("div",null,d?a.createElement(a.Fragment,null,a.createElement(o.P,{onChange:h,dataSources:M}),a.createElement(y,null)):a.createElement(v,null))}},94647:($,f,e)=>{e.d(f,{y:()=>X});var a=e(9892),t=e(66111),i=e(72648),o=e(39031),v=e(52694),y=e(33950),A=e(76282),M=e(94762),u=e(90072),h=e(31403),d=e(82002),O=e(27876),T=e(97953),b=e(45849),N=e(10505),K=e(78543),Q=e(51981);const Z=({alert:s,alertManagerSourceName:D})=>{const P=(0,i.wW)(J),B=(0,T.QX)(D),S=(0,b.HY)(D)?d.Vt.hasPermission(O.AccessControlAction.AlertingRuleRead):!0;return t.createElement(t.Fragment,null,t.createElement("div",{className:P.actionsRow},t.createElement(Q.q,{actions:[B.update,B.create],fallback:d.Vt.isEditor},s.status.state===o.Z9.Suppressed&&t.createElement(h.Qj,{href:`${(0,N.eQ)("/alerting/silences",D)}&silenceIds=${s.status.silencedBy.join(",")}`,className:P.button,icon:"bell",size:"sm"},"Manage silences"),s.status.state===o.Z9.Active&&t.createElement(h.Qj,{href:(0,N.VN)(D,s.labels),className:P.button,icon:"bell-slash",size:"sm"},"Silence")),S&&s.generatorURL&&t.createElement(h.Qj,{className:P.button,href:s.generatorURL,icon:"chart-line",size:"sm"},"See source")),Object.entries(s.annotations).map(([I,k])=>t.createElement(K.a,{key:I,annotationKey:I,value:k})),t.createElement("div",{className:P.receivers},"Receivers:"," ",s.receivers.map(({name:I})=>I).filter(I=>!!I).join(", ")))},J=s=>({button:a.css`
    & + & {
      margin-left: ${s.spacing(1)};
    }
  `,actionsRow:a.css`
    padding: ${s.spacing(2,0)} !important;
    border-bottom: 1px solid ${s.colors.border.medium};
  `,receivers:a.css`
    padding: ${s.spacing(1,0)};
  `}),V=({alerts:s,alertManagerSourceName:D})=>{const P=(0,i.wW)(H),B=(0,t.useMemo)(()=>[{id:"state",label:"State",renderCell:({data:S})=>t.createElement(t.Fragment,null,t.createElement(u.G,{state:S.status.state}),t.createElement("span",{className:P.duration},"for"," ",(0,A.vT)({start:new Date(S.startsAt),end:new Date(S.endsAt)}))),size:"220px"},{id:"labels",label:"Labels",renderCell:({data:{labels:S}})=>t.createElement(v.s,{labels:S}),size:1}],[P]),x=(0,t.useMemo)(()=>s.map(S=>({id:S.fingerprint,data:S})),[s]);return t.createElement("div",{className:P.tableWrapper,"data-testid":"alert-group-table"},t.createElement(M.F,{cols:B,items:x,isExpandable:!0,renderExpandedContent:({data:S})=>t.createElement(Z,{alert:S,alertManagerSourceName:D})}))},H=s=>({tableWrapper:a.css`
    margin-top: ${s.spacing(3)};
    ${s.breakpoints.up("md")} {
      margin-left: ${s.spacing(4.5)};
    }
  `,duration:a.css`
    margin-left: ${s.spacing(1)};
    font-size: ${s.typography.bodySmall.fontSize};
  `});var z=e(96308);const X=({alertManagerSourceName:s,group:D})=>{const[P,B]=(0,t.useState)(!0),x=(0,i.wW)(Y);return t.createElement("div",{className:x.wrapper},t.createElement("div",{className:x.header},t.createElement("div",{className:x.group,"data-testid":"alert-group"},t.createElement(y.U,{size:"sm",isCollapsed:P,onToggle:()=>B(!P),"data-testid":"alert-group-collapse-toggle"}),Object.keys(D.labels).length?t.createElement(v.s,{labels:D.labels}):t.createElement("span",null,"No grouping")),t.createElement(z.Z,{group:D})),!P&&t.createElement(V,{alertManagerSourceName:s,alerts:D.alerts}))},Y=s=>({wrapper:a.css`
    & + & {
      margin-top: ${s.spacing(2)};
    }
  `,header:a.css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: ${s.spacing(1,1,1,0)};
    background-color: ${s.colors.background.secondary};
    width: 100%;
  `,group:a.css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,summary:a.css``,spanElement:a.css`
    margin-left: ${s.spacing(.5)};
  `,[o.Z9.Active]:a.css`
    color: ${s.colors.error.main};
  `,[o.Z9.Suppressed]:a.css`
    color: ${s.colors.primary.main};
  `,[o.Z9.Unprocessed]:a.css`
    color: ${s.colors.secondary.main};
  `})},90072:($,f,e)=>{e.d(f,{G:()=>v});var a=e(66111),t=e(39031),i=e(79453);const o={[t.Z9.Active]:"bad",[t.Z9.Unprocessed]:"neutral",[t.Z9.Suppressed]:"info"},v=({state:y})=>a.createElement(i.i,{state:o[y]},y)},29614:($,f,e)=>{e.d(f,{k:()=>A});var a=e(66111),t=e(96044),i=e(58379),o=e(37190),v=e(45849);function y(M){return(0,a.useCallback)(u=>M.map(d=>d.name).includes(u),[M])}function A(M){const[u,h]=(0,t.K)(),d=y(M),O=(0,a.useCallback)(N=>{d(N)&&(N===v.GC?(i.Z.delete(o.de),h({[o.c4]:null})):(i.Z.set(o.de,N),h({[o.c4]:N})))},[h,d]),T=u[o.c4];if(T&&typeof T=="string")return d(T)?[T,O]:[void 0,O];const b=i.Z.get(o.de);return b&&typeof b=="string"&&d(b)?(O(b),[b,O]):d(v.GC)?[v.GC,O]:[void 0,O]}},23403:($,f,e)=>{e.d(f,{k:()=>i});var a=e(66111),t=e(45849);function i(o){return(0,a.useMemo)(()=>(0,t.LE)(o),[o])}}}]);

//# sourceMappingURL=AlertGroups.25dfa335d4e3f2f7eff6.js.map