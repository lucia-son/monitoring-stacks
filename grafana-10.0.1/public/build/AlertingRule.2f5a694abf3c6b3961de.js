"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4679],{77110:(F,M,a)=>{a.r(M),a.d(M,{RuleViewer:()=>ue,default:()=>tt});var s=a(9892),c=a(39493),e=a(66111),h=a(95831),$=a(81653),D=a(52666),u=a(26418),p=a(35645),v=a(72648),x=a(45253),O=a(61744),W=a(52081),w=a(31403),g=a(39904),y=a(2352),N=a(8180),m=a(53546),K=a(84952),T=a(20091),U=a(82897),L=a(19985),z=a(25482),Y=a(75e3),S=a(97573),Z=a(67162),Ee=a(97201),pe=a(20700),te=a(67483),fe=a(49187),ve=a(35575),ye=a(27876),Re=a(51981),he=a(78679);const xe=4;function Ce({data:t,model:n,thresholds:l,dsSettings:i,relativeTimeRange:o,onTimeRangeChange:d,className:R}){const E=(0,v.wW)(Pe),r=(0,Y.j)(n),P=(0,e.useCallback)(C=>{const A=(0,te.CQ)().unix()-C.unix();if(o){const B=o.from-o.to;d({from:A+B,to:A})}},[d,o]),f=(0,e.useCallback)(C=>C===0?(0,te.CQ)():(0,te.CQ)().subtract(C,"seconds"),[]);return t?e.createElement("div",{className:R},e.createElement("div",{className:E.header},e.createElement("div",{className:E.actions},!r&&o?e.createElement(ve.x,{date:f(o.to),onChange:P,maxDate:new Date}):null,e.createElement(Re.q,{actions:[ye.AccessControlAction.DataSourcesExplore]},!r&&e.createElement(w.Qj,{size:"md",variant:"secondary",icon:"compass",target:"_blank",href:De(i,n)},"View in Explore")))),e.createElement(he.l,{data:t,thresholds:l?.config,thresholdsType:l?.mode})):null}function De(t,n){const{name:l}=t,{refId:i,...o}=n;return fe.Cj.renderUrl(`${p.v.appSubUrl}/explore`,{left:JSON.stringify({datasource:l,queries:[{refId:"A",...o}],range:{from:"now-1h",to:"now"}})})}const Pe=t=>({header:s.css`
      height: ${t.spacing(xe)};
      display: flex;
      align-items: center;
      justify-content: flex-end;
      white-space: nowrap;
      margin-bottom: ${t.spacing(2)};
    `,refId:s.css`
      font-weight: ${t.typography.fontWeightMedium};
      color: ${t.colors.text.link};
      overflow: hidden;
    `,dataSource:s.css`
      margin-left: ${t.spacing(1)};
      font-style: italic;
      color: ${t.colors.text.secondary};
    `,actions:s.css`
      display: flex;
      align-items: center;
    `,errorMessage:s.css`
      white-space: pre-wrap;
    `});function Me({queries:t,condition:n,evalDataByQuery:l={},evalTimeRanges:i={},onTimeRangeChange:o}){const d=(0,U.keyBy)(Object.values(p.v.datasources),f=>f.uid),R=t.filter(f=>!(0,Y.j)(f.model)),E=t.filter(f=>(0,Y.j)(f.model)),r=(0,v.wW)(ae),P=(0,pe.Fu)(t);return e.createElement(u.Stack,{gap:2,direction:"column"},e.createElement("div",{className:r.maxWidthContainer},e.createElement(u.Stack,{gap:2},R.map(({model:f,relativeTimeRange:C,refId:A,datasourceUid:B},V)=>{const Q=d[B];return e.createElement(se,{key:V,refId:A,isAlertCondition:n===A,model:f,relativeTimeRange:C,evalTimeRange:i[A],dataSource:Q,thresholds:P[A],queryData:l[A],onEvalTimeRangeChange:q=>o(A,q)})}))),e.createElement("div",{className:r.maxWidthContainer},e.createElement(u.Stack,{gap:1},E.map(({model:f,refId:C,datasourceUid:A},B)=>{const V=d[A];return(0,Y.j)(f)&&e.createElement(Oe,{key:B,refId:C,isAlertCondition:n===C,model:f,dataSource:V,evalData:l[C]})}))))}function se({refId:t,relativeTimeRange:n,thresholds:l,model:i,dataSource:o,queryData:d,evalTimeRange:R,onEvalTimeRangeChange:E}){const r=(0,v.wW)($e),P=[o?.name??"[[Data source not found]]"];return n&&P.push((0,z.C_)(n).display),e.createElement(re,{refId:t,headerItems:P,className:r.contentBox},e.createElement("pre",{className:r.code},e.createElement("code",null,(0,T.$w)(i))),o&&e.createElement(Ce,{refId:t,dsSettings:o,model:i,data:d,thresholds:l,relativeTimeRange:R,onTimeRangeChange:E,className:r.visualization}))}const $e=t=>({code:s.css`
    margin: ${t.spacing(1)};
  `,contentBox:s.css`
    flex: 1 0 100%;
  `,visualization:s.css`
    padding: ${t.spacing(1)};
  `});function Oe({refId:t,model:n,evalData:l,isAlertCondition:i}){function o(){switch(n.type){case S.Us.math:return e.createElement(be,{model:n});case S.Us.reduce:return e.createElement(We,{model:n});case S.Us.resample:return e.createElement(Be,{model:n});case S.Us.classic:return e.createElement(Ae,{model:n});case S.Us.threshold:return e.createElement(Se,{model:n});default:return e.createElement(e.Fragment,null,"Expression not supported: ",n.type)}}return e.createElement(re,{refId:t,headerItems:[(0,U.startCase)(n.type)],isAlertCondition:i},o(),l&&e.createElement(Ee.bw,{series:l.series,isAlertCondition:i}))}function re({refId:t,headerItems:n=[],children:l,isAlertCondition:i,className:o}){const d=(0,v.wW)(Te);return e.createElement("div",{className:(0,s.cx)(d.container,o)},e.createElement("header",{className:d.header},e.createElement("span",{className:d.refId},t),n.map((R,E)=>e.createElement("span",{key:E,className:d.textBlock},R)),i&&e.createElement("div",{className:d.conditionIndicator},e.createElement(L.C,{color:"green",icon:"check",text:"Alert condition"}))),l)}const Te=t=>({container:s.css`
    flex: 1 0 25%;
    border: 1px solid ${t.colors.border.strong};
    max-width: 100%;
  `,header:s.css`
    display: flex;
    align-items: center;
    gap: ${t.spacing(1)};
    padding: ${t.spacing(1)};
    background-color: ${t.colors.background.secondary};
  `,textBlock:s.css`
    border: 1px solid ${t.colors.border.weak};
    padding: ${t.spacing(.5,1)};
    background-color: ${t.colors.background.primary};
  `,refId:s.css`
    color: ${t.colors.text.link};
    padding: ${t.spacing(.5,1)};
    border: 1px solid ${t.colors.border.weak};
  `,conditionIndicator:s.css`
    margin-left: auto;
  `});function Ae({model:t}){const n=(0,v.wW)(Ie),l=(0,U.keyBy)(Z.Z.reducerTypes,d=>d.value),i=(0,U.keyBy)(Z.Z.evalOperators,d=>d.value),o=(0,U.keyBy)(Z.Z.evalFunctions,d=>d.value);return e.createElement("div",{className:n.container},t.conditions?.map(({query:d,operator:R,reducer:E,evaluator:r},P)=>{const f=le(r);return e.createElement(e.Fragment,{key:P},e.createElement("div",{className:n.blue},P===0?"WHEN":!!R?.type&&i[R?.type]?.text),e.createElement("div",{className:n.bold},E?.type&&l[E.type]?.text),e.createElement("div",{className:n.blue},"OF"),e.createElement("div",{className:n.bold},d.params[0]),e.createElement("div",{className:n.blue},o[r.type].text),e.createElement("div",{className:n.bold},f?`(${r.params[0]}; ${r.params[1]})`:r.params[0]))}))}const Ie=t=>({container:s.css`
    padding: ${t.spacing(1)};
    display: grid;
    grid-template-columns: max-content max-content max-content max-content max-content max-content;
    gap: ${t.spacing(0,1)};
  `,...k(t)});function We({model:t}){const n=(0,v.wW)(Ne),{reducer:l,expression:i,settings:o}=t,d=S.SQ.find(r=>r.value===l),R=o?.mode??S.kN.Strict,E=S.YM.find(r=>r.value===R);return e.createElement("div",{className:n.container},e.createElement("div",{className:n.label},"Function"),e.createElement("div",{className:n.value},d?.label),e.createElement("div",{className:n.label},"Input"),e.createElement("div",{className:n.value},i),e.createElement("div",{className:n.label},"Mode"),e.createElement("div",{className:n.value},E?.label))}const Ne=t=>({container:s.css`
    padding: ${t.spacing(1)};
    display: grid;
    gap: ${t.spacing(1)};
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    > :nth-child(6) {
      grid-column: span 3;
    }
  `,...k(t)});function Be({model:t}){const n=(0,v.wW)(Ue),{expression:l,window:i,downsampler:o,upsampler:d}=t,R=S.Fr.find(r=>r.value===o),E=S.r8.find(r=>r.value===d);return e.createElement("div",{className:n.container},e.createElement("div",{className:n.label},"Input"),e.createElement("div",{className:n.value},l),e.createElement("div",{className:n.label},"Resample to"),e.createElement("div",{className:n.value},i),e.createElement("div",{className:n.label},"Downsample"),e.createElement("div",{className:n.value},R?.label),e.createElement("div",{className:n.label},"Upsample"),e.createElement("div",{className:n.value},E?.label))}const Ue=t=>({container:s.css`
    padding: ${t.spacing(1)};
    display: grid;
    gap: ${t.spacing(1)};
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  `,...k(t)});function Se({model:t}){const n=(0,v.wW)(ae),{expression:l,conditions:i}=t,o=i&&i[0]?.evaluator,d=S.Mi.find(E=>E.value===o?.type),R=o?le(o):!1;return e.createElement("div",{className:n.container},e.createElement("div",{className:n.label},"Input"),e.createElement("div",{className:n.value},l),o&&e.createElement(e.Fragment,null,e.createElement("div",{className:n.blue},d?.label),e.createElement("div",{className:n.bold},R?`(${o.params[0]}; ${o.params[1]})`:o.params[0])))}const ae=t=>{const{blue:n,bold:l,...i}=k(t);return{...i,maxWidthContainer:s.css`
      max-width: 100%;
    `,container:s.css`
      padding: ${t.spacing(1)};
      display: flex;
      gap: ${t.spacing(1)};
    `,blue:s.css`
      ${n};
      margin: auto 0;
    `,bold:s.css`
      ${l};
      margin: auto 0;
    `}};function be({model:t}){const n=(0,v.wW)(ae),{expression:l}=t;return e.createElement("div",{className:n.container},e.createElement("div",{className:n.label},"Input"),e.createElement("div",{className:n.value},l))}const k=t=>({blue:s.css`
    color: ${t.colors.text.link};
  `,bold:s.css`
    font-weight: ${t.typography.fontWeightBold};
  `,label:s.css`
    display: flex;
    align-items: center;
    padding: ${t.spacing(.5,1)};
    background-color: ${t.colors.background.secondary};
    font-size: ${t.typography.bodySmall.fontSize};
    line-height: ${t.typography.bodySmall.lineHeight};
    font-weight: ${t.typography.fontWeightBold};
  `,value:s.css`
    padding: ${t.spacing(.5,1)};
    border: 1px solid ${t.colors.border.weak};
  `});function le(t){return t.type===Z.$.IsWithinRange||t.type===Z.$.IsOutsideRange}var Le=a(52694),J=a(80498),oe=a(40106),j=a(28104),we=a(28371),Ke=a(68854),Ve=a(24990),Qe=a(8674);const Fe=({group:t})=>{const n=t.source_tenants??[];return e.createElement(J.C,{label:"Tenant sources"},e.createElement(e.Fragment,null,n.map(l=>e.createElement("div",{key:l},l))))};var ze=a(78443),je=a(80399),He=a(48208),Ze=a(69369),Je=a(76277),Ge=a(81001),Xe=a(99085),ne=a(45849),H=a(79662);function ce(t){if(!t)return[];const{namespace:n,rulerRule:l}=t,{rulesSource:i}=n;if((0,ne.HY)(i)&&(0,H.Pc)(l))return l.grafana_alert.data;if((0,ne.jq)(i)){const o=ke(i,t);return[Ye(o,i.uid)]}return[]}function Ye(t,n){return{refId:t.refId,datasourceUid:n,queryType:"",model:t,relativeTimeRange:{from:360,to:0}}}function ke(t,n){const l="A";switch(t.type){case"prometheus":return{refId:l,expr:n.query};case"loki":return{refId:l,expr:n.query};default:throw new Error(`Query for datasource type ${t.type} is currently not supported by cloud alert rules.`)}}var qe=a(60048);const ie="Could not find data source for rule",de="Could not view rule",G="View rule";function ue({match:t}){const n=(0,v.wW)(me),[l,i]=(0,h.Z)(!1),{id:o}=t.params,d=qe.OA(o,!0),{loading:R,error:E,result:r}=(0,Je.H)(d,d?.ruleSourceName),P=(0,e.useMemo)(()=>new Ge.v,[]),f=(0,$.Z)(P.get()),C=(0,e.useMemo)(()=>ce(r),[r]),A=(0,Xe.$9)(r?.annotations||{}),[B,V]=(0,e.useState)({}),{allDataSourcesAvailable:Q}=(0,Ze.S)(C),q=(0,e.useCallback)(()=>{if(C.length>0&&Q){const I=C.map(b=>({...b,relativeTimeRange:B[b.refId]??b.relativeTimeRange}));P.run(I)}},[C,B,P,Q]);(0,e.useEffect)(()=>{const I=ce(r),b=Object.fromEntries(I.map(ee=>[ee.refId,ee.relativeTimeRange??{from:0,to:0}]));V(b)},[r]),(0,e.useEffect)(()=>{Q&&l&&q()},[q,Q,l]),(0,e.useEffect)(()=>()=>P.destroy(),[P]);const ge=(0,e.useCallback)((I,b)=>{const ee=(0,c.ZP)(B,nt=>{nt[I]=b});V(ee)},[B,V]);if(!d?.ruleSourceName)return e.createElement(j.$,{title:G},e.createElement(x.b,{title:de},e.createElement("details",{className:n.errorMessage},ie)));const _=(0,ne.o_)(d.ruleSourceName);if(R)return e.createElement(j.$,{title:G},e.createElement(O.u,{text:"Loading rule..."}));if(E||!_)return e.createElement(j.$,{title:G},e.createElement(x.b,{title:de},e.createElement("details",{className:n.errorMessage},E?.message??ie,e.createElement("br",null),!!E?.stack&&E.stack)));if(!r)return e.createElement(j.$,{title:G},e.createElement("span",null,"Rule could not be found."));const X=(0,H.Jq)(r.group),at=(0,H.Pc)(r.rulerRule)&&Boolean(r.rulerRule.grafana_alert.provenance);return e.createElement(j.$,{wrapInContent:!1,title:G},X&&e.createElement(x.b,{severity:"info",title:"This rule is part of a federated rule group."},e.createElement(W.wc,null,"Federated rule groups are currently an experimental feature.",e.createElement(w.zx,{fill:"text",icon:"book"},e.createElement("a",{href:"https://grafana.com/docs/metrics-enterprise/latest/tenant-management/tenant-federation/#cross-tenant-alerting-and-recording-rule-federation"},"Read documentation")))),at&&e.createElement(oe.Xq,{resource:oe.Uv.AlertRule}),e.createElement(j.l,null,e.createElement("div",null,e.createElement(u.Stack,{direction:"row",alignItems:"center",wrap:!1,gap:1},e.createElement(g.J,{name:"bell",size:"lg"})," ",e.createElement("span",{className:n.title},r.name)),e.createElement(He.p,{rule:r,isCreating:!1,isDeleting:!1}),e.createElement(we.f,{rule:r,rulesSource:_,isViewMode:!0})),e.createElement("div",{className:n.details},e.createElement("div",{className:n.leftSide},r.promRule&&e.createElement(J.C,{label:"Health",horizontal:!0},e.createElement(je.V,{rule:r.promRule})),!!r.labels&&!!Object.keys(r.labels).length&&e.createElement(J.C,{label:"Labels",horizontal:!0},e.createElement(Le.s,{labels:r.labels,className:n.labels})),e.createElement(Qe.C,{rulesSource:_,rule:r,annotations:A}),e.createElement(Ke.J,{annotations:A})),e.createElement("div",{className:n.rightSide},e.createElement(Ve.C,{rule:r,rulesSource:_}),X&&e.createElement(Fe,{group:r.group}),e.createElement(J.C,{label:"Namespace / Group",className:n.rightSideDetails},r.namespace.name," / ",r.group.name),(0,H.Pc)(r.rulerRule)&&e.createElement(_e,{rule:r.rulerRule.grafana_alert}))),e.createElement("div",null,e.createElement(ze.M,{rule:r,pagination:{itemsPerPage:K.gN},enableFiltering:!0}))),e.createElement(y.U,{label:"Query & Results",isOpen:l,onToggle:i,loading:f&&et(f),collapsible:!0,className:n.collapse},(0,H.Pc)(r.rulerRule)&&!X&&e.createElement(Me,{condition:r.rulerRule.grafana_alert.condition,queries:C,evalDataByQuery:f,evalTimeRanges:B,onTimeRangeChange:ge}),!(0,H.Pc)(r.rulerRule)&&!X&&f&&Object.keys(f).length>0&&e.createElement("div",{className:n.queries},C.map(I=>e.createElement(se,{key:I.refId,refId:I.refId,model:I.model,dataSource:Object.values(p.v.datasources).find(b=>b.uid===I.datasourceUid),queryData:f[I.refId],relativeTimeRange:I.relativeTimeRange,evalTimeRange:B[I.refId],onEvalTimeRangeChange:b=>ge(I.refId,b),isAlertCondition:!1}))),!X&&!Q&&e.createElement(x.b,{title:"Query not available",severity:"warning",className:n.queryWarning},"Cannot display the query preview. Some of the data sources used in the queries are not available.")))}function _e({rule:t}){const n=(0,v.wW)(me),l=()=>navigator.clipboard&&navigator.clipboard.writeText(t.uid);return e.createElement(J.C,{label:"Rule UID",childrenWrapperClassName:n.ruleUid},t.uid," ",e.createElement(N.h,{name:"copy",onClick:l}))}function et(t){return!!Object.values(t).find(n=>n.state===D.Gu.Loading)}const me=t=>({errorMessage:s.css`
      white-space: pre-wrap;
    `,queries:s.css`
      height: 100%;
      width: 100%;
    `,collapse:s.css`
      margin-top: ${t.spacing(2)};
      border-color: ${t.colors.border.weak};
      border-radius: ${t.shape.borderRadius()};
    `,queriesTitle:s.css`
      padding: ${t.spacing(2,.5)};
      font-size: ${t.typography.h5.fontSize};
      font-weight: ${t.typography.fontWeightBold};
      font-family: ${t.typography.h5.fontFamily};
    `,query:s.css`
      border-bottom: 1px solid ${t.colors.border.medium};
      padding: ${t.spacing(2)};
    `,queryWarning:s.css`
      margin: ${t.spacing(4,0)};
    `,title:s.css`
      font-size: ${t.typography.h4.fontSize};
      font-weight: ${t.typography.fontWeightBold};

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `,details:s.css`
      display: flex;
      flex-direction: row;
      gap: ${t.spacing(4)};
    `,leftSide:s.css`
      flex: 1;
    `,rightSide:s.css`
      padding-right: ${t.spacing(3)};

      max-width: 360px;
      word-break: break-all;
      overflow: hidden;
    `,rightSideDetails:s.css`
      & > div:first-child {
        width: auto;
      }
    `,labels:s.css`
      justify-content: flex-start;
    `,ruleUid:s.css`
      display: flex;
      align-items: center;
      gap: ${t.spacing(1)};
    `}),tt=(0,m.Pf)(ue,{style:"page"})},51981:(F,M,a)=>{a.d(M,{q:()=>e});var s=a(66111),c=a(82002);const e=({actions:h,children:$,fallback:D=!0})=>h.some(u=>c.Vt.hasAccess(u,D))?s.createElement(s.Fragment,null,$):null},40106:(F,M,a)=>{a.d(M,{C0:()=>D,Uv:()=>h,Xq:()=>$});var s=a(66111),c=a(45253),e=a(19985),h=(u=>(u.ContactPoint="contact point",u.Template="template",u.MuteTiming="mute timing",u.AlertRule="alert rule",u.RootNotificationPolicy="root notification policy",u))(h||{});const $=({resource:u})=>s.createElement(c.b,{title:`This ${u} cannot be edited through the UI`,severity:"info"},"This ",u," has been provisioned, that means it was created by config. Please contact your server admin to update this ",u,"."),D=()=>s.createElement(e.C,{text:"Provisioned",color:"purple"})},28104:(F,M,a)=>{a.d(M,{$:()=>D,l:()=>u});var s=a(9892),c=a(66111),e=a(72648),h=a(8412);const $={icon:"bell",id:"alert-rule-view",breadcrumbs:[{title:"Alert rules",url:"alerting/list"}]};function D(x){const{wrapInContent:O=!0,children:W,title:w}=x,g=(0,e.wW)(p);return c.createElement(h.T,{pageNav:{...$,text:w},navId:"alert-list"},c.createElement(h.T.Contents,null,c.createElement("div",{className:g.content},O?c.createElement(u,{...x}):W)))}function u({children:x,padding:O=2}){const W=(0,e.wW)(v(O));return c.createElement("div",{className:W.wrapper},x)}const p=x=>({content:s.css`
      max-width: ${x.breakpoints.values.xxl}px;
    `}),v=x=>O=>({wrapper:s.css`
      background: ${O.colors.background.primary};
      border: 1px solid ${O.colors.border.weak};
      border-radius: ${O.shape.borderRadius()};
      padding: ${O.spacing(x)};
    `})},80399:(F,M,a)=>{a.d(M,{V:()=>D});var s=a(9892),c=a(66111),e=a(72648),h=a(61860),$=a(39904);const D=({rule:p})=>{const v=(0,e.wW)(u);return p.health==="err"||p.health==="error"?c.createElement(h.u,{theme:"error",content:p.lastError||"No error message provided."},c.createElement("div",{className:v.warn},c.createElement($.J,{name:"exclamation-triangle"}),c.createElement("span",null,"error"))):c.createElement(c.Fragment,null,p.health)},u=p=>({warn:s.css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: ${p.spacing(1)};

    color: ${p.colors.warning.text};
  `})},48208:(F,M,a)=>{a.d(M,{p:()=>x});var s=a(9892),c=a(66111),e=a(76282),h=a(26418),$=a(72648),D=a(67487),u=a(46063),p=a(79662),v=a(45608);const x=({rule:W,isDeleting:w,isCreating:g,isPaused:y})=>{const N=(0,$.wW)(O),{promRule:m}=W,K=(0,c.useMemo)(()=>{if(m&&(0,p.x_)(m)&&m.alerts?.length&&m.state!==u.x_.Inactive){const T=m.activeAt?new Date(m.activeAt):(0,p.ub)(m);if(T)return c.createElement("span",{title:String(T),className:N.for},"for"," ",(0,e.vT)({start:T,end:new Date},!1))}return null},[m,N]);return w?c.createElement(h.Stack,{gap:1},c.createElement(D.$,null),"Deleting"):g?c.createElement(h.Stack,{gap:1},c.createElement(D.$,null),"Creating"):m&&(0,p.x_)(m)?c.createElement(h.Stack,{gap:1},c.createElement(v.l,{state:m.state,isPaused:y}),K):m&&(0,p.OP)(m)?c.createElement(c.Fragment,null,"Recording rule"):c.createElement(c.Fragment,null,"n/a")},O=W=>({for:s.css`
    font-size: ${W.typography.bodySmall.fontSize};
    color: ${W.colors.text.secondary};
    white-space: nowrap;
    padding-top: 2px;
  `})},76277:(F,M,a)=>{a.d(M,{H:()=>x,X:()=>O});var s=a(66111),c=a(59679),e=a(27876),h=a(72004),$=a(46818),D=a(60048),u=a(79662),p=a(61627),v=a(69945);function x(g,y){const N=W(y),m=(0,p.Zo)(y),K=(0,s.useMemo)(()=>{if(!(!g||!y||m.length===0))for(const T of m)for(const U of T.groups)for(const L of U.rules){const z=D.Yd(y,L);if(D.Dg(z,g))return L}},[g,y,m]);return{...N,result:K}}function O(g,y){const N=W(y),m=(0,p.Zo)(y),K=(0,s.useMemo)(()=>{if(!g||!y||m.length===0)return[];const T=[];for(const U of m)for(const L of U.groups)for(const z of L.rules)z.name===g&&T.push(z);return T},[g,y,m]);return{...N,result:K}}function W(g){const y=(0,e.useDispatch)(),N=(0,v._)(L=>L.promRules),m=w(g,N),K=(0,v._)(L=>L.rulerRules),T=w(g,K),{loading:U}=(0,c.Z)(async()=>{g&&await y((0,h.dn)({rulesSourceName:g}))},[y,g]);return{loading:U,error:m.error??(0,u.m$)(T)?void 0:T.error,dispatched:m.dispatched&&T.dispatched}}function w(g,y){if(!g)return $.oq;const N=y[g];return N||$.oq}}}]);

//# sourceMappingURL=AlertingRule.2f5a694abf3c6b3961de.js.map