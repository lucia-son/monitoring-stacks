"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1783],{99658:(L,S,t)=>{t.r(S),t.d(S,{default:()=>Mt});var e=t(66111),g=t(56895),E=t(45253),A=t(53546),h=t(27876),C=t(79572),O=t(94984),D=t(45524),R=t(731),I=t(88331),r=t(9892),P=t(82897),y=t(66698),$=t(93006),M=t(76282),j=t(75849),z=t(67483),_=t(35645),B=t(72648),Se=t(13393),K=t(24799),Y=t(46967),xe=t(97379),V=t(31403),Ce=t(40014),Q=t(39031),De=t(31808),ee=t(69945),J=t(72004),N=t(20194),Me=t(66367),F=t(10505),te=t(46818),Pe=t(63619),Ie=t(8581),Te=t(8180);const Oe=({className:a})=>{const n=(0,B.wW)(be),s=(0,y.Gc)(),{control:l,register:o,formState:{errors:d}}=s,{fields:c=[],append:v,remove:i}=(0,y.Dq)({name:"matchers"});return e.createElement("div",{className:(0,r.cx)(a,n.wrapper)},e.createElement(K.g,{label:"Matching labels",required:!0},e.createElement("div",null,e.createElement("div",{className:n.matchers},c.map((f,m)=>e.createElement("div",{className:n.row,key:`${f.id}`,"data-testid":"matcher"},e.createElement(K.g,{label:"Label",invalid:!!d?.matchers?.[m]?.name,error:d?.matchers?.[m]?.name?.message},e.createElement(Y.I,{...o(`matchers.${m}.name`,{required:{value:!0,message:"Required."}}),defaultValue:f.name,placeholder:"label"})),e.createElement(K.g,{label:"Operator"},e.createElement(Pe.g,{control:l,render:({field:{onChange:x,ref:p,...u}})=>e.createElement(Ie.Ph,{...u,onChange:T=>x(T.value),className:n.matcherOptions,options:N.tA,"aria-label":"operator"}),defaultValue:f.operator||N.tA[0].value,name:`matchers.${m}.operator`,rules:{required:{value:!0,message:"Required."}}})),e.createElement(K.g,{label:"Value",invalid:!!d?.matchers?.[m]?.value,error:d?.matchers?.[m]?.value?.message},e.createElement(Y.I,{...o(`matchers.${m}.value`,{required:{value:!0,message:"Required."}}),defaultValue:f.value,placeholder:"value"})),c.length>1&&e.createElement(Te.h,{className:n.removeButton,tooltip:"Remove matcher",name:"trash-alt",onClick:()=>i(m)},"Remove")))),e.createElement(V.zx,{type:"button",icon:"plus",variant:"secondary",onClick:()=>{const f={name:"",value:"",operator:Q._M.equal};v(f)}},"Add matcher"))))},be=a=>({wrapper:r.css`
      margin-top: ${a.spacing(2)};
    `,row:r.css`
      display: flex;
      align-items: flex-start;
      flex-direction: row;
      background-color: ${a.colors.background.secondary};
      padding: ${a.spacing(1)} ${a.spacing(1)} 0 ${a.spacing(1)};
      & > * + * {
        margin-left: ${a.spacing(2)};
      }
    `,removeButton:r.css`
      margin-left: ${a.spacing(1)};
      margin-top: ${a.spacing(2.5)};
    `,matcherOptions:r.css`
      min-width: 140px;
    `,matchers:r.css`
      max-width: ${a.breakpoints.values.sm}px;
      margin: ${a.spacing(1)} 0;
      padding-top: ${a.spacing(.5)};
    `}),Re=Oe;var Be=t(95794);const We=()=>{const{control:a,getValues:n}=(0,y.Gc)(),{field:{onChange:s,value:l},fieldState:{invalid:o}}=(0,y.bc)({name:"startsAt",control:a,rules:{validate:u=>n().endsAt>u}}),{field:{onChange:d,value:c},fieldState:{invalid:v}}=(0,y.bc)({name:"endsAt",control:a,rules:{validate:u=>n().startsAt<u}}),{field:{onChange:i,value:f}}=(0,y.bc)({name:"timeZone",control:a}),m=o||v,x=(0,z.CQ)(l),p=(0,z.CQ)(c);return e.createElement(K.g,{className:$e.timeRange,label:"Silence start and end",error:m?"To is before or the same as from":"",invalid:m},e.createElement(Be.K,{value:{from:x,to:p,raw:{from:x,to:p}},timeZone:f,onChange:u=>{s((0,z.CQ)(u.from)),d((0,z.CQ)(u.to))},onChangeTimeZone:u=>i(u),hideTimeZone:!1,hideQuickRanges:!0,placeholder:"Select time range"}))},$e={timeRange:r.css`
    width: 400px;
  `};var Ne=t(19985),Le=t(61744),Ke=t(30173),Ue=t(20383),le=t(52694),ce=t(53731),oe=t(90072);const Qe=({amSourceName:a,matchers:n})=>{const{useGetAlertmanagerAlertsQuery:s}=Ke.h,l=(0,B.wW)(ie),o=Fe(),d=n.some(m=>m.value&&m.name),{currentData:c=[],isFetching:v,isError:i}=s({amSourceName:a,filter:{matchers:n}},{skip:!d,refetchOnMountOrArgChange:!0}),f=c.map(m=>({id:m.fingerprint,data:m}));return e.createElement("div",null,e.createElement("h4",{className:l.title},"Affected alert instances",f.length>0?e.createElement(Ne.C,{className:l.badge,color:"blue",text:f.length}):null),!d&&e.createElement("span",null,"Add a valid matcher to see affected alerts"),i&&e.createElement(E.b,{title:"Preview not available",severity:"error"},"Error occured when generating affected alerts preview. Are you matchers valid?"),v&&e.createElement(Le.u,{text:"Loading..."}),!v&&!i&&d&&e.createElement("div",{className:l.table},f.length>0?e.createElement(ce.t,{items:f,isExpandable:!1,cols:o,pagination:{itemsPerPage:10}}):e.createElement("span",null,"No matching alert instances found")))};function Fe(){const a=(0,B.wW)(ie);return[{id:"state",label:"State",renderCell:function({data:s}){return e.createElement(oe.G,{state:s.status.state})},size:"120px",className:a.stateColumn},{id:"labels",label:"Labels",renderCell:function({data:s}){return e.createElement(le.s,{labels:s.labels,className:a.alertLabels})},size:"auto"},{id:"created",label:"Created",renderCell:function({data:s}){return e.createElement(e.Fragment,null,(0,Ue.gV)(s.startsAt)?"-":(0,z.CQ)(s.startsAt).format("YYYY-MM-DD HH:mm:ss"))},size:"180px"}]}const ie=a=>({table:r.css`
    max-width: ${a.breakpoints.values.lg}px;
  `,moreMatches:r.css`
    margin-top: ${a.spacing(1)};
  `,title:r.css`
    display: flex;
    align-items: center;
  `,badge:r.css`
    margin-left: ${a.spacing(1)};
  `,stateColumn:r.css`
    display: flex;
    align-items: center;
  `,alertLabels:r.css`
    justify-content: flex-start;
  `}),ze=a=>{const n={},s=a.get("comment"),l=a.getAll("matcher"),o=(0,Me.R)(l);return o.length&&(n.matchers=o.map(N.cm)),s&&(n.comment=s),n},Ve=(a,n)=>{const s=new Date;if(n){const o=Date.parse(n.endsAt)<Date.now()?{start:s,end:(0,M.Ks)(s,{hours:2})}:{start:new Date(n.startsAt),end:new Date(n.endsAt)};return{id:n.id,startsAt:o.start.toISOString(),endsAt:o.end.toISOString(),comment:n.comment,createdBy:n.createdBy,duration:(0,M.vT)(o),isRegex:!1,matchers:n.matchers?.map(N.cm)||[],matcherName:"",matcherValue:"",timeZone:j.Ys}}else{const l=(0,M.Ks)(s,{hours:2});return{id:"",startsAt:s.toISOString(),endsAt:l.toISOString(),comment:`created ${(0,z.CQ)().format("YYYY-MM-DD HH:mm")}`,createdBy:_.v.bootData.user.name,duration:"2h",isRegex:!1,matchers:[{name:"",value:"",operator:Q._M.equal}],matcherName:"",matcherValue:"",timeZone:j.Ys,...ze(a)}}},Ye=({silence:a,alertManagerSourceName:n})=>{const[s]=(0,De.j)(),l=(0,e.useMemo)(()=>Ve(s,a),[a,s]),o=(0,y.cI)({defaultValues:l}),d=(0,h.useDispatch)(),c=(0,B.wW)(Ge),[v,i]=(0,e.useState)(l.matchers.map(N._J)),{loading:f}=(0,ee._)(W=>W.updateSilence);(0,Ce.x)(W=>W.unifiedAlerting.updateSilence=te.oq);const{register:m,handleSubmit:x,formState:p,watch:u,setValue:T,clearErrors:Z}=o,b=W=>{const{id:H,startsAt:q,endsAt:It,comment:Tt,createdBy:Ot,matchers:bt}=W,Rt=bt.map(N._J),ye=(0,P.pickBy)({id:H,startsAt:q,endsAt:It,comment:Tt,createdBy:Ot,matchers:Rt},Bt=>!!Bt);d((0,J.QY)({alertManagerSourceName:n,payload:ye,exitOnSave:!0,successMessage:`Silence ${ye.id?"updated":"created"}`}))},U=u("duration"),w=u("startsAt"),k=u("endsAt"),he=u("matchers"),[Ae,pe]=(0,e.useState)(U);(0,$.Z)(()=>{if((0,M.qb)(w)&&(0,M.qb)(k))if(U!==Ae)T("endsAt",(0,z.CQ)((0,M.Ks)(new Date(w),(0,M.RA)(U))).toISOString()),pe(U);else{const W=new Date(w).valueOf();if(new Date(k).valueOf()>W){const q=(0,M.vT)({start:new Date(w),end:new Date(k)});T("duration",q),pe(q)}}},700,[Z,U,k,Ae,T,w]),(0,$.Z)(()=>{const W=he.filter(H=>H.name&&H.value).map(N._J);(0,P.isEqual)(v,W)||i(W)},700,[he]);const Pt=Boolean(_.v.bootData.user.isSignedIn&&_.v.bootData.user.name);return e.createElement(y.RV,{...o},e.createElement("form",{onSubmit:x(b)},e.createElement(Se.C,{label:`${a?"Recreate silence":"Create silence"}`},e.createElement("div",{className:(0,r.cx)(c.flexRow,c.silencePeriod)},e.createElement(We,null),e.createElement(K.g,{label:"Duration",invalid:!!p.errors.duration,error:p.errors.duration&&(p.errors.duration.type==="required"?"Required field":p.errors.duration.message)},e.createElement(Y.I,{className:c.createdBy,...m("duration",{validate:W=>Object.keys((0,M.RA)(W)).length===0?"Invalid duration. Valid example: 1d 4h (Available units: y, M, w, d, h, m, s)":void 0}),id:"duration"}))),e.createElement(Re,null),e.createElement(K.g,{className:(0,r.cx)(c.field,c.textArea),label:"Comment",required:!0,error:p.errors.comment?.message,invalid:!!p.errors.comment},e.createElement(xe.K,{...m("comment",{required:{value:!0,message:"Required."}}),rows:5,placeholder:"Details about the silence"})),!Pt&&e.createElement(K.g,{className:(0,r.cx)(c.field,c.createdBy),label:"Created By",required:!0,error:p.errors.createdBy?.message,invalid:!!p.errors.createdBy},e.createElement(Y.I,{...m("createdBy",{required:{value:!0,message:"Required."}}),placeholder:"Who's creating the silence"})),e.createElement(Qe,{amSourceName:n,matchers:v})),e.createElement("div",{className:c.flexRow},f&&e.createElement(V.zx,{disabled:!0,icon:"fa fa-spinner",variant:"primary"},"Saving..."),!f&&e.createElement(V.zx,{type:"submit"},"Save silence"),e.createElement(V.Qj,{href:(0,F.eQ)("alerting/silences",n),variant:"secondary"},"Cancel"))))},Ge=a=>({field:r.css`
    margin: ${a.spacing(1,0)};
  `,textArea:r.css`
    max-width: ${a.breakpoints.values.sm}px;
  `,createdBy:r.css`
    width: 200px;
  `,flexRow:r.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    & > * {
      margin-right: ${a.spacing(1)};
    }
  `,silencePeriod:r.css`
    max-width: ${a.breakpoints.values.sm}px;
  `}),de=Ye;var X=t(47406),ae=t(26418),Ze=t(20941),ne=t(39904),we=t(29460),se=t(96044),G=t(82002),re=t(97953),He=t(51981);const me=({className:a,...n})=>{const s=(0,B.wW)(je);return e.createElement(V.zx,{variant:"secondary",size:"xs",className:(0,r.cx)(s.wrapper,a),...n})},je=a=>({wrapper:r.css`
    height: 24px;
    font-size: ${a.typography.bodySmall.fontSize};
  `});var Je=t(65750),Xe=t(34807);const ke=({matchers:a})=>{const n=(0,B.wW)(qe);return e.createElement("div",null,e.createElement(Xe.P,{className:n.tags,tags:a.map(s=>`${s.name}${(0,N.zy)(s)}${s.value}`)}))},qe=()=>({tags:r.css`
    justify-content: flex-start;
  `});var _e=t(97097),et=t(69142);const tt=({alertManagerSourceName:a})=>{const n=(0,re.QX)(a);return G.Vt.hasAccess(n.create,G.Vt.isEditor)?e.createElement(et.Z,{title:"You haven't created any silences yet",buttonIcon:"bell-slash",buttonLink:(0,F.eQ)("alerting/silence/new",a),buttonTitle:"Create silence"}):e.createElement(_e._,{callToActionElement:e.createElement("div",null),message:"No silences found."})};var at=t(85655),nt=t(33950);const st=({alert:a,className:n})=>{const[s,l]=(0,e.useState)(!0),o=(0,M.vT)({start:new Date(a.startsAt),end:new Date(a.endsAt)}),d=Object.entries(a.labels).reduce((c,[v,i])=>((v==="alertname"||v==="__alert_rule_title__")&&(c=i),c),"");return e.createElement(e.Fragment,null,e.createElement("tr",{className:n},e.createElement("td",null,e.createElement(nt.U,{isCollapsed:s,onToggle:c=>l(c)})),e.createElement("td",null,e.createElement(oe.G,{state:a.status.state})),e.createElement("td",null,"for ",o," seconds"),e.createElement("td",null,d)),!s&&e.createElement("tr",{className:n},e.createElement("td",null),e.createElement("td",{colSpan:5},e.createElement(le.s,{labels:a.labels}))))},rt=({silencedAlerts:a})=>{const n=(0,B.wW)(at.D),s=(0,B.wW)(lt);return a.length?e.createElement("table",{className:(0,r.cx)(n.table,s.tableMargin)},e.createElement("colgroup",null,e.createElement("col",{className:n.colExpand}),e.createElement("col",{className:s.colState}),e.createElement("col",null),e.createElement("col",{className:s.colName})),e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null),e.createElement("th",null,"State"),e.createElement("th",null),e.createElement("th",null,"Alert name"))),e.createElement("tbody",null,a.map((l,o)=>e.createElement(st,{key:l.fingerprint,alert:l,className:o%2===0?n.evenRow:""})))):null},lt=a=>({tableMargin:r.css`
    margin-bottom: ${a.spacing(1)};
  `,colState:r.css`
    width: 110px;
  `,colName:r.css`
    width: 65%;
  `}),ct=rt,ot=({silence:a})=>{const{startsAt:n,endsAt:s,comment:l,createdBy:o,silencedAlerts:d}=a,c=(0,B.wW)(it),v="YYYY-MM-DD HH:mm",i=X.parse(n),f=X.parse(s),m=(0,M.vT)({start:new Date(n),end:new Date(s)});return e.createElement("div",{className:c.container},e.createElement("div",{className:c.title},"Comment"),e.createElement("div",null,l),e.createElement("div",{className:c.title},"Schedule"),e.createElement("div",null,`${i?.format(v)} - ${f?.format(v)}`),e.createElement("div",{className:c.title},"Duration"),e.createElement("div",null," ",m),e.createElement("div",{className:c.title},"Created by"),e.createElement("div",null," ",o),e.createElement("div",{className:c.title},"Affected alerts"),e.createElement(ct,{silencedAlerts:d}))},it=a=>({container:r.css`
    display: grid;
    grid-template-columns: 1fr 9fr;
    grid-row-gap: 1rem;
  `,title:r.css`
    color: ${a.colors.text.primary};
  `,row:r.css`
    margin: ${a.spacing(1,0)};
  `});var dt=t(79453);const mt={[Q.As.Active]:"good",[Q.As.Expired]:"neutral",[Q.As.Pending]:"neutral"},ut=({state:a})=>e.createElement(dt.i,{state:mt[a]},a);var gt=t(64353),Et=t(61860);const ue=()=>(0,P.uniqueId)("query-string-"),vt=()=>{const[a,n]=(0,e.useState)(ue()),[s,l]=(0,se.K)(),{queryString:o}=(0,F.pF)(s),d=(0,B.wW)(ft),c=(0,P.debounce)(f=>{const m=f.target;l({queryString:m.value||null})},400),v=()=>{l({queryString:null,silenceState:null}),setTimeout(()=>n(ue()))},i=o&&o.length>3?(0,N.Zh)(o).length===0:!1;return e.createElement("div",{className:d.flexRow},e.createElement(K.g,{className:d.rowChild,label:e.createElement(gt._,null,e.createElement(ae.Stack,{gap:.5},e.createElement("span",null,"Search by matchers"),e.createElement(Et.u,{content:e.createElement("div",null,"Filter silences by matchers using a comma separated list of matchers, ie:",e.createElement("pre",null,"severity=critical, instance=~cluster-us-.+"))},e.createElement(ne.J,{name:"info-circle",size:"sm"})))),invalid:i,error:i?"Query must use valid matcher syntax":null},e.createElement(Y.I,{key:a,className:d.searchInput,prefix:e.createElement(ne.J,{name:"search"}),onChange:c,defaultValue:o??"",placeholder:"Search","data-testid":"search-query-input"})),o&&e.createElement("div",{className:d.rowChild},e.createElement(V.zx,{variant:"secondary",icon:"times",onClick:v},"Clear filters")))},ft=a=>({searchInput:r.css`
    width: 360px;
  `,flexRow:r.css`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding-bottom: ${a.spacing(3)};
    border-bottom: 1px solid ${a.colors.border.medium};
  `,rowChild:r.css`
    margin-right: ${a.spacing(1)};
    margin-bottom: 0;
    max-height: 52px;
  `,fieldLabel:r.css`
    font-size: 12px;
    font-weight: 500;
  `}),ht=({silences:a,alertManagerAlerts:n,alertManagerSourceName:s})=>{const l=(0,B.wW)(ve),[o]=(0,se.K)(),d=Ee(a,!1),c=Ee(a,!0),v=(0,re.QX)(s),{silenceState:i}=(0,F.pF)(o),f=i===Q.As.Expired,m=(0,e.useMemo)(()=>{const p=u=>n.filter(T=>T.status.silencedBy.includes(u));return d.map(u=>{const T=p(u.id);return{id:u.id,data:{...u,silencedAlerts:T}}})},[d,n]),x=(0,e.useMemo)(()=>{const p=u=>n.filter(T=>T.status.silencedBy.includes(u));return c.map(u=>{const T=p(u.id);return{id:u.id,data:{...u,silencedAlerts:T}}})},[c,n]);return e.createElement("div",{"data-testid":"silences-table"},!!a.length&&e.createElement(ae.Stack,{direction:"column"},e.createElement(vt,null),e.createElement(He.q,{actions:[v.create],fallback:G.Vt.isEditor},e.createElement("div",{className:l.topButtonContainer},e.createElement(V.Qj,{href:(0,F.eQ)("/alerting/silence/new",s),icon:"plus"},"Add Silence"))),e.createElement(ge,{items:m,alertManagerSourceName:s,dataTestId:"not-expired-table"}),x.length>0&&e.createElement(Ze.s,{label:`Expired silences (${x.length})`,isOpen:f},e.createElement("div",{className:l.callout},e.createElement(ne.J,{className:l.calloutIcon,name:"info-circle"}),e.createElement("span",null,"Expired silences are automatically deleted after 5 days.")),e.createElement(ge,{items:x,alertManagerSourceName:s,dataTestId:"expired-table"}))),!a.length&&e.createElement(tt,{alertManagerSourceName:s}))};function ge({items:a,alertManagerSourceName:n,dataTestId:s}){const l=At(n);return a.length?e.createElement(ce.t,{items:a,cols:l,isExpandable:!0,dataTestId:s,renderExpandedContent:({data:o})=>e.createElement(ot,{silence:o})}):e.createElement(e.Fragment,null,"No matching silences found")}const Ee=(a,n=!1)=>{const[s]=(0,se.K)();return(0,e.useMemo)(()=>{const{queryString:l}=(0,F.pF)(s),o=s?.silenceIds;return a.filter(d=>typeof o=="string"&&!o.split(",").includes(d.id)||l&&!(0,N.Zh)(l).every(i=>d.matchers?.some(({name:f,value:m,isEqual:x,isRegex:p})=>i.name===f&&i.value===m&&i.isEqual===x&&i.isRegex===p))?!1:n?d.status.state===Q.As.Expired:d.status.state!==Q.As.Expired)},[s,a,n])},ve=a=>({topButtonContainer:r.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  `,addNewSilence:r.css`
    margin: ${a.spacing(2,0)};
  `,callout:r.css`
    background-color: ${a.colors.background.secondary};
    border-top: 3px solid ${a.colors.info.border};
    border-radius: ${a.shape.borderRadius()};
    height: 62px;
    display: flex;
    flex-direction: row;
    align-items: center;

    & > * {
      margin-left: ${a.spacing(1)};
    }
  `,calloutIcon:r.css`
    color: ${a.colors.info.text};
  `,editButton:r.css`
    margin-left: ${a.spacing(.5)};
  `});function At(a){const n=(0,h.useDispatch)(),s=(0,B.wW)(ve),l=(0,re.QX)(a);return(0,e.useMemo)(()=>{const o=v=>{n((0,J.yO)(a,v))},d=G.Vt.hasAccess(l.update,G.Vt.isEditor),c=[{id:"state",label:"State",renderCell:function({data:{status:i}}){return e.createElement(ut,{state:i.state})},size:4},{id:"matchers",label:"Matching labels",renderCell:function({data:{matchers:i}}){return e.createElement(ke,{matchers:i||[]})},size:10},{id:"alerts",label:"Alerts",renderCell:function({data:{silencedAlerts:i}}){return e.createElement("span",{"data-testid":"alerts"},i.length)},size:4},{id:"schedule",label:"Schedule",renderCell:function({data:{startsAt:i,endsAt:f}}){const m=X.parse(i),x=X.parse(f),p="YYYY-MM-DD HH:mm";return e.createElement(e.Fragment,null," ",m?.format(p)," ","-",x?.format(p))},size:7}];return d&&c.push({id:"actions",label:"Actions",renderCell:function({data:i}){return e.createElement(ae.Stack,{gap:.5},i.status.state==="expired"?e.createElement(we.r,{href:(0,F.eQ)(`/alerting/silence/${i.id}/edit`,a)},e.createElement(me,{icon:"sync"},"Recreate")):e.createElement(me,{icon:"bell",onClick:()=>o(i.id)},"Unsilence"),i.status.state!=="expired"&&e.createElement(Je.A,{className:s.editButton,to:(0,F.eQ)(`/alerting/silence/${i.id}/edit`,a),icon:"pen",tooltip:"edit"}))},size:5}),c},[a,n,s,l])}const pt=ht;var yt=t(29614),St=t(23403);const fe={icon:"bell-slash",breadcrumbs:[{title:"Silences",url:"alerting/silences"}]};function xt(){const{isExact:a,path:n}=(0,g.$B)(),[s,l]=(0,e.useState)();return(0,e.useEffect)(()=>{n==="/alerting/silence/new"?l({...fe,id:"silence-new",text:"Add silence"}):n==="/alerting/silence/:id/edit"&&l({...fe,id:"silence-edit",text:"Edit silence"})},[n,a]),s}var Ct=t(37190);const Dt=()=>{const a=(0,St.k)("instance"),[n,s]=(0,yt.k)(a),l=(0,h.useDispatch)(),o=(0,ee._)(b=>b.silences),d=(0,ee._)(b=>b.amAlerts),c=n?d[n]||te.oq:void 0,v=(0,g.TH)(),i=xt(),f=v.pathname.endsWith("/alerting/silences"),{currentData:m}=C.T.useDiscoverAmFeaturesQuery({amSourceName:n??""},{skip:!n});(0,e.useEffect)(()=>{function b(){n&&(l((0,J.je)(n)),l((0,J.dB)(n)))}b();const U=setInterval(()=>b,Ct.cm);return()=>{clearInterval(U)}},[n,l]);const{result:x,loading:p,error:u}=n&&o[n]||te.oq,T=(0,e.useCallback)(b=>x&&x.find(U=>U.id===b),[x]),Z=u?.message?.includes("the Alertmanager is not configured")&&m?.lazyConfigInit;return n?e.createElement(D.J,{pageId:"silences",isLoading:p,pageNav:i},e.createElement(O.P,{disabled:!f,current:n,onChange:s,dataSources:a}),e.createElement(R.u,{currentAlertmanager:n}),Z&&e.createElement(E.b,{title:"The selected Alertmanager has no configuration",severity:"warning"},"Create a new contact point to create a configuration using the default values or contact your administrator to set up the Alertmanager."),u&&!p&&!Z&&e.createElement(E.b,{severity:"error",title:"Error loading silences"},u.message||"Unknown error."),c?.error&&!c?.loading&&!Z&&e.createElement(E.b,{severity:"error",title:"Error loading Alertmanager alerts"},c.error?.message||"Unknown error."),x&&!u&&e.createElement(g.rs,null,e.createElement(g.AW,{exact:!0,path:"/alerting/silences"},e.createElement(pt,{silences:x,alertManagerAlerts:c?.result??[],alertManagerSourceName:n})),e.createElement(g.AW,{exact:!0,path:"/alerting/silence/new"},e.createElement(de,{alertManagerSourceName:n})),e.createElement(g.AW,{exact:!0,path:"/alerting/silence/:id/edit"},({match:b})=>b?.params.id&&e.createElement(de,{silence:T(b.params.id),alertManagerSourceName:n})))):f?e.createElement(D.J,{pageId:"silences",pageNav:i},e.createElement(I.I,{availableAlertManagers:a})):e.createElement(g.l_,{to:"/alerting/silences"})},Mt=(0,A.Pf)(Dt,{style:"page"})},51981:(L,S,t)=>{t.d(S,{q:()=>E});var e=t(66111),g=t(82002);const E=({actions:A,children:h,fallback:C=!0})=>A.some(O=>g.Vt.hasAccess(O,C))?e.createElement(e.Fragment,null,h):null},731:(L,S,t)=>{t.d(S,{u:()=>D});var e=t(9892),g=t(66111),E=t(72648),A=t(45253),h=t(39031),C=t(30173),O=t(45849);function D({currentAlertmanager:I}){const r=(0,E.wW)(R),{useGetAlertmanagerChoiceStatusQuery:P}=C.h,{currentData:y}=P(),$=I===O.GC;if(!(y?.alertmanagersChoice&&[h.TE.External,h.TE.All].includes(y?.alertmanagersChoice))||!$)return null;const j=y.numExternalAlertmanagers>0;return y.alertmanagersChoice===h.TE.External?g.createElement(A.b,{title:"Grafana alerts are not delivered to Grafana Alertmanager"},"Grafana is configured to send alerts to external Alertmanagers only. Changing Grafana Alertmanager configuration will not affect delivery of your alerts.",g.createElement("div",{className:r.adminHint},"To change your Alertmanager setup, go to the Alerting Admin page. If you do not have access, contact your Administrator.")):y.alertmanagersChoice===h.TE.All&&j?g.createElement(A.b,{title:"You have additional Alertmanagers to configure",severity:"warning"},"Ensure you make configuration changes in the correct Alertmanagers; both internal and external. Changing one will not affect the others.",g.createElement("div",{className:r.adminHint},"To change your Alertmanager setup, go to the Alerting Admin page. If you do not have access, contact your Administrator.")):null}const R=I=>({adminHint:e.css`
    font-size: ${I.typography.bodySmall.fontSize};
    font-weight: ${I.typography.bodySmall.fontWeight};
  `})},88331:(L,S,t)=>{t.d(S,{I:()=>O});var e=t(66111),g=t(45253),E=t(29614),A=t(94984);const h=()=>e.createElement(g.b,{title:"No Alertmanager found",severity:"warning"},"We could not find any external Alertmanagers and you may not have access to the built-in Grafana Alertmanager."),C=()=>e.createElement(g.b,{title:"Selected Alertmanager not found. Select a different Alertmanager.",severity:"warning"},"Selected Alertmanager no longer exists or you may not have permission to access it."),O=({availableAlertManagers:D})=>{const[R,I]=(0,E.k)(D),r=D.length>0;return e.createElement("div",null,r?e.createElement(e.Fragment,null,e.createElement(A.P,{onChange:I,dataSources:D}),e.createElement(C,null)):e.createElement(h,null))}},65750:(L,S,t)=>{t.d(S,{A:()=>A});var e=t(66111),g=t(61860),E=t(31403);const A=({tooltip:h,icon:C,to:O,target:D,onClick:R,className:I,tooltipPlacement:r="top",...P})=>{const y=typeof h=="string"?h:void 0;return e.createElement(g.u,{content:h,placement:r},O?e.createElement(E.Qj,{variant:"secondary",fill:"text",icon:C,href:O,size:"sm",target:D,...P,"aria-label":y}):e.createElement(E.zx,{className:I,variant:"secondary",fill:"text",size:"sm",icon:C,type:"button",onClick:R,...P,"aria-label":y}))}},90072:(L,S,t)=>{t.d(S,{G:()=>h});var e=t(66111),g=t(39031),E=t(79453);const A={[g.Z9.Active]:"bad",[g.Z9.Unprocessed]:"neutral",[g.Z9.Suppressed]:"info"},h=({state:C})=>e.createElement(E.i,{state:A[C]},C)},29614:(L,S,t)=>{t.d(S,{k:()=>O});var e=t(66111),g=t(96044),E=t(58379),A=t(37190),h=t(45849);function C(D){return(0,e.useCallback)(R=>D.map(r=>r.name).includes(R),[D])}function O(D){const[R,I]=(0,g.K)(),r=C(D),P=(0,e.useCallback)(M=>{r(M)&&(M===h.GC?(E.Z.delete(A.de),I({[A.c4]:null})):(E.Z.set(A.de,M),I({[A.c4]:M})))},[I,r]),y=R[A.c4];if(y&&typeof y=="string")return r(y)?[y,P]:[void 0,P];const $=E.Z.get(A.de);return $&&typeof $=="string"&&r($)?(P($),[$,P]):r(h.GC)?[h.GC,P]:[void 0,P]}},23403:(L,S,t)=>{t.d(S,{k:()=>E});var e=t(66111),g=t(45849);function E(A){return(0,e.useMemo)(()=>(0,g.LE)(A),[A])}},31808:(L,S,t)=>{t.d(S,{j:()=>A});var e=t(66111),g=t(56895),E=t(37932);function A(){const{search:h}=(0,g.TH)(),C=(0,e.useMemo)(()=>new URLSearchParams(h),[h]),O=(0,e.useCallback)((D,R)=>{E.E1.partial(D,R)},[]);return[C,O]}},85655:(L,S,t)=>{t.d(S,{D:()=>g});var e=t(9892);const g=E=>({table:e.css`
    width: 100%;
    border-radius: ${E.shape.borderRadius()};
    border: solid 1px ${E.colors.border.weak};
    background-color: ${E.colors.background.secondary};

    th {
      padding: ${E.spacing(1)};
    }

    td {
      padding: 0 ${E.spacing(1)};
    }

    tr {
      height: 38px;
    }
  `,evenRow:e.css`
    background-color: ${E.colors.background.primary};
  `,colExpand:e.css`
    width: 36px;
  `,actionsCell:e.css`
    text-align: right;
    width: 1%;
    white-space: nowrap;

    & > * + * {
      margin-left: ${E.spacing(.5)};
    }
  `})}}]);

//# sourceMappingURL=AlertSilences.c591f73ad3cd375c4c7e.js.map