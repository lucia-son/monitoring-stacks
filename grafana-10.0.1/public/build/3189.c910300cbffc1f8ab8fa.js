"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3189],{53708:(U,D,t)=>{t.d(D,{j:()=>f});var n=t(9892),e=t(66111),o=t(72648),p=t(31403),h=t(8581),g=t(39904),i=t(13440);const f=({onChange:d,maxMenuHeight:O})=>{const u=(0,e.useMemo)(()=>(0,i.x)(),[]),s=(0,e.useMemo)(()=>u.map(P=>({label:P.name,imgUrl:P.info.logos.small,value:P})).sort((P,T)=>P.label?.localeCompare(T.label)),[u]),[C,v]=(0,e.useState)([]),B=(0,e.useCallback)(P=>{const T=P.filter(L=>L.value).map(L=>L.value);d(T),v(P)},[d]),r=(0,o.wW)(m),x={defaultOptions:!0,getOptionLabel:P=>P.label,getOptionValue:P=>P.value,noOptionsMessage:"No Panel types found",placeholder:"Filter by type",maxMenuHeight:O,options:s,value:C,onChange:B};return e.createElement("div",{className:r.container},C.length>0&&e.createElement(p.zx,{size:"xs",icon:"trash-alt",fill:"text",className:r.clear,onClick:()=>B([]),"aria-label":"Clear types"},"Clear types"),e.createElement(h.NU,{...x,prefix:e.createElement(g.J,{name:"filter"}),"aria-label":"Panel Type filter"}))};function m(d){return{container:n.css`
      label: container;
      position: relative;
      min-width: 180px;
      flex-grow: 1;
    `,clear:n.css`
      label: clear;
      font-size: ${d.spacing(1.5)};
      position: absolute;
      top: -${d.spacing(4.5)};
      right: 0;
    `}}},95509:(U,D,t)=>{t.d(D,{P:()=>f});var n=t(66111),e=t(59679),o=t(8581),p=t(39904),h=t(10216),g=t(82e3);const i=()=>(0,g.getGrafanaSearcher)().getSortOptions();function f({onChange:m,value:d,placeholder:O,filter:u,getSortOptions:s,isClearable:C}){const v=(0,e.Z)(async()=>{const r=await(s??i)();return u?r.filter(x=>u.includes(x.value)):r},[s,u]);if(v.loading)return null;const B=Boolean(d?.includes("desc")||d?.startsWith("-"));return n.createElement(o.Ph,{key:d,width:28,onChange:m,value:v.value?.find(r=>r.value===d)??null,options:v.value,"aria-label":"Sort",placeholder:O??`Sort (Default ${h.yw.label})`,prefix:n.createElement(p.J,{name:B?"sort-amount-down":"sort-amount-up"}),isClearable:C})}},40404:(U,D,t)=>{t.d(D,{p:()=>$});var n=t(9892),e=t(66111),o=t(35645),p=t(72648),h=t(39904),g=t(29460),i=t(35974),f=t(89710),m=t(52666),d=t(35029),O=t(31403),u=t(74391),s=t(54605),C=t(86648),v=t(62992);const B={loadingState:m.Gu.Loading,dashboardTitles:[]},r=(0,v.PH)("libraryPanels/delete/searchCompleted"),x=(a=B,l)=>r.match(l)?{...a,dashboardTitles:l.payload.dashboards.map(c=>c.title),loadingState:m.Gu.Done}:a;function P(a){return async function(l){const c=await(0,C.E8)(a.uid);l(r({dashboards:c}))}}const T=({libraryPanel:a,onDismiss:l,onConfirm:c})=>{const _=(0,p.wW)(u.J),[{dashboardTitles:M,loadingState:E},b]=(0,e.useReducer)(x,B),W=(0,e.useMemo)(()=>(0,s.tb)(b),[b]);(0,e.useEffect)(()=>{W(P(a))},[W,a]);const S=Boolean(M.length),R=E===m.Gu.Done;return e.createElement(d.u,{className:_.modal,title:"Delete library panel",icon:"trash-alt",onDismiss:l,isOpen:!0},R?null:e.createElement(L,null),R?e.createElement("div",null,S?e.createElement(I,{dashboardTitles:M}):null,S?null:e.createElement(y,null),e.createElement(d.u.ButtonRow,null,e.createElement(O.zx,{variant:"secondary",onClick:l,fill:"outline"},"Cancel"),e.createElement(O.zx,{variant:"destructive",onClick:c,disabled:S},"Delete"))):null)},L=()=>e.createElement("span",null,"Loading library panel..."),y=()=>{const a=(0,p.wW)(u.J);return e.createElement("div",{className:a.modalText},"Do you want to delete this panel?")},I=({dashboardTitles:a})=>{const l=(0,p.wW)(u.J),c=a.length===1?"dashboard.":"dashboards.",_=`${a.length} ${c}`;return a.length===0?null:e.createElement("div",null,e.createElement("p",{className:l.textInfo},"This library panel can not be deleted because it is connected to ",e.createElement("strong",null,_)," Remove the library panel from the dashboards listed below and retry."),e.createElement("table",{className:l.myTable},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"Dashboard name"))),e.createElement("tbody",null,a.map((M,E)=>e.createElement("tr",{key:`dash-title-${E}`},e.createElement("td",null,M))))))},$=({libraryPanel:a,onClick:l,onDelete:c,showSecondaryActions:_})=>{const[M,E]=(0,e.useState)(!1),b=()=>{c?.(a),E(!1)},W=o.v.panels[a.model.type]??(0,i.X)(a.model.type).meta;return e.createElement(e.Fragment,null,e.createElement(f.X,{isCurrent:!1,title:a.name,description:a.description,plugin:W,onClick:()=>l?.(a),onDelete:_?()=>E(!0):void 0},e.createElement(z,{libraryPanel:a})),M&&e.createElement(T,{libraryPanel:a,onConfirm:b,onDismiss:()=>E(!1)}))};function z({libraryPanel:a}){const l=(0,p.wW)(F);return!a.meta?.folderUid&&!a.meta?.folderName?null:a.meta.folderUid?e.createElement("span",{className:l.metaContainer},e.createElement(g.r,{href:`/dashboards/f/${a.meta.folderUid}`},e.createElement(h.J,{name:"folder-upload",size:"sm"}),e.createElement("span",null,a.meta.folderName))):e.createElement("span",{className:l.metaContainer},e.createElement(h.J,{name:"folder",size:"sm"}),e.createElement("span",null,a.meta.folderName))}function F(a){return{metaContainer:n.css`
      display: flex;
      align-items: center;
      color: ${a.colors.text.secondary};
      font-size: ${a.typography.bodySmall.fontSize};
      padding-top: ${a.spacing(.5)};

      svg {
        margin-right: ${a.spacing(.5)};
        margin-bottom: 3px;
      }
    `}}},23189:(U,D,t)=>{t.d(D,{N:()=>I,e:()=>y});var n=t(9892),e=t(66111),o=t(93006),p=t(72648),h=t(52081),g=t(14747),i=t(99151),f=t.n(i),m=t(31403),d=t(8581),O=t(39904),u=t(29930),s=t(1037),C=t(27876);function v({onChange:a,maxMenuHeight:l}){const c=(0,p.wW)(r),[_,M]=(0,e.useState)(!1),E=(0,e.useCallback)(K=>B(K,M),[]),b=(0,e.useMemo)(()=>f()(E,300),[E]),[W,S]=(0,e.useState)([]),R=(0,e.useCallback)(K=>{const A=K.filter(N=>Boolean(N.value)).map(N=>N.value);a(A),S(K)},[a]);return e.createElement("div",{className:c.container},W.length>0&&e.createElement(m.zx,{size:"xs",icon:"trash-alt",fill:"text",className:c.clear,onClick:()=>a([]),"aria-label":"Clear folders"},"Clear folders"),e.createElement(d.M8,{value:W,onChange:R,isLoading:_,loadOptions:b,maxMenuHeight:l,placeholder:"Filter by folder",noOptionsMessage:"No folders found",prefix:e.createElement(O.J,{name:"filter"}),"aria-label":"Folder filter",defaultOptions:!0}))}async function B(a,l){l(!0);const c={query:a,type:s.o.DashFolder,permission:C.PermissionLevelString.View},M=(await(0,u.i)().search(c)).map(E=>({label:E.title,value:{uid:E.uid,title:E.title}}));return(!a||"general".includes(a.toLowerCase()))&&M.unshift({label:"General",value:{uid:"general",title:"General"}}),l(!1),M}function r(a){return{container:n.css`
      label: container;
      position: relative;
      min-width: 180px;
      flex-grow: 1;
    `,clear:n.css`
      label: clear;
      font-size: ${a.spacing(1.5)};
      position: absolute;
      top: -${a.spacing(4.5)};
      right: 0;
    `}}var x=t(53708),P=t(95509),T=t(84952),L=t(18027),y=(a=>(a.Tight="tight",a.Spacious="spacious",a))(y||{});const I=({onClick:a,variant:l="spacious",currentPanelId:c,currentFolderUID:_,perPage:M=T.gN,showPanelFilter:E=!1,showFolderFilter:b=!1,showSort:W=!1,showSecondaryActions:S=!1})=>{const R=(0,p.wW)((0,e.useCallback)(Y=>$(Y,l),[l])),[K,A]=(0,e.useState)(""),[N,j]=(0,e.useState)("");(0,o.Z)(()=>j(K),200,[K]);const[V,G]=(0,e.useState)({}),[H,J]=(0,e.useState)(_?[_]:[]),[w,X]=(0,e.useState)([]),Q=W||E||b,Z=l==="tight"?"lg":"xs";return e.createElement("div",{className:R.container},e.createElement(h.wc,{spacing:Z},e.createElement("div",{className:R.gridContainer},e.createElement("div",{className:R.filterInputWrapper},e.createElement(g.H,{value:K,onChange:A,placeholder:"Search by name or description",width:0,escapeRegex:!1})),Q&&e.createElement(z,{showSort:W,showPanelFilter:E,showFolderFilter:b,onSortChange:G,onFolderFilterChange:J,onPanelFilterChange:X,sortDirection:V.value,variant:l})),e.createElement("div",{className:R.libraryPanelsView},e.createElement(L.u,{onClickCard:a,searchString:N,sortDirection:V.value,panelFilter:w,folderFilter:H,currentPanelId:c,showSecondaryActions:S,perPage:M}))))};function $(a,l){const c=n.css`
    flex-direction: row;
    row-gap: ${a.spacing(1)};
  `;return{filterInputWrapper:n.css`
      flex-grow: ${l==="tight"?1:"initial"};
    `,container:n.css`
      width: 100%;
      overflow-y: auto;
      padding: ${a.spacing(1)};
    `,libraryPanelsView:n.css`
      width: 100%;
    `,gridContainer:n.css`
      ${l==="tight"?c:""};
      display: flex;
      flex-direction: column;
      width: 100%;
      column-gap: ${a.spacing(1)};
      row-gap: ${a.spacing(1)};
      padding-bottom: ${a.spacing(2)};
    `}}const z=e.memo(({variant:a="spacious",showSort:l,showPanelFilter:c,showFolderFilter:_,sortDirection:M,onSortChange:E,onFolderFilterChange:b,onPanelFilterChange:W})=>{const S=(0,p.wW)((0,e.useCallback)(A=>F(A,a),[a])),R=(0,e.useCallback)(A=>W(A.map(N=>N.id)),[W]),K=(0,e.useCallback)(A=>b(A.map(N=>N.uid??"")),[b]);return e.createElement("div",{className:S.container},l&&e.createElement(P.P,{value:M,onChange:E,filter:["alpha-asc","alpha-desc"]}),(_||c)&&e.createElement("div",{className:S.filterContainer},_&&e.createElement(v,{onChange:K}),c&&e.createElement(x.j,{onChange:R})))});z.displayName="SearchControls";function F(a,l="spacious"){const c=n.css`
    display: flex;
    gap: ${a.spacing(1)};
    flex-grow: 1;
    flex-direction: row;
    justify-content: end;
  `,_=n.css`
    ${c};
    flex-grow: initial;
    flex-direction: column;
    justify-content: normal;
  `,M=n.css`
    display: flex;
    flex-direction: row;
    margin-left: auto;
    gap: 4px;
  `,E=n.css`
    ${M};
    flex-direction: column;
    margin-left: initial;
  `;switch(l){case"spacious":return{container:c,filterContainer:M};case"tight":return{container:_,filterContainer:E}}}},18027:(U,D,t)=>{t.d(D,{u:()=>d});var n=t(9892),e=t(66111),o=t(93006),p=t(52666),h=t(72648),g=t(78889),i=t(40404),f=t(54605),m=t(4377);const d=({className:u,onClickCard:s,searchString:C,sortDirection:v,panelFilter:B,folderFilter:r,showSecondaryActions:x,currentPanelId:P,perPage:T=40})=>{const L=(0,h.wW)(O),[{libraryPanels:y,page:I,perPage:$,numberOfPages:z,loadingState:F,currentPanelId:a},l]=(0,e.useReducer)(m._p,{...m.p$,currentPanelId:P,perPage:T}),c=(0,e.useMemo)(()=>(0,f.tb)(l),[l]);(0,o.Z)(()=>c((0,f.Xu)({searchString:C,sortDirection:v,panelFilter:B,folderFilterUIDs:r,page:I,perPage:$,currentPanelId:a})),300,[C,v,B,r,I,c]);const _=({uid:E})=>c((0,f.UO)(E,{searchString:C,page:I,perPage:$})),M=E=>c((0,m.oO)({page:E}));return e.createElement("div",{className:(0,n.cx)(L.container,u)},e.createElement("div",{className:L.libraryPanelList},F===p.Gu.Loading?e.createElement("p",null,"Loading library panels..."):y.length<1?e.createElement("p",{className:L.noPanelsFound},"No library panels found."):y?.map((E,b)=>e.createElement(i.p,{key:`library-panel=${b}`,libraryPanel:E,onDelete:_,onClick:s,showSecondaryActions:x}))),y.length?e.createElement("div",{className:L.pagination},e.createElement(g.t,{currentPage:I,numberOfPages:z,onNavigate:M,hideWhenSinglePage:!0})):null)},O=u=>({container:n.css`
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
    `,libraryPanelList:n.css`
      max-width: 100%;
      display: grid;
      grid-gap: ${u.spacing(1)};
    `,searchHeader:n.css`
      display: flex;
    `,newPanelButton:n.css`
      margin-top: 10px;
      align-self: flex-start;
    `,pagination:n.css`
      align-self: center;
      margin-top: ${u.spacing(1)};
    `,noPanelsFound:n.css`
      label: noPanelsFound;
      min-height: 200px;
    `})},54605:(U,D,t)=>{t.d(D,{UO:()=>v,Xu:()=>C,tb:()=>B});var n=t(53376),e=t(49372),o=t(59980),p=t(12877),h=t(25740),g=t(39859),i=t(59724),f=t(86318),m=t(57027),d=t(46978),O=t(82615),u=t(86648),s=t(4377);function C(r){return function(x){const P=new n.w0,T=(0,e.D)((0,u.Pq)({searchString:r.searchString,perPage:r.perPage,page:r.page,excludeUid:r.currentPanelId,sortDirection:r.sortDirection,typeFilter:r.panelFilter,folderFilterUIDs:r.folderFilterUIDs})).pipe((0,g.z)(({perPage:L,elements:y,page:I,totalCount:$})=>(0,o.of)((0,s.zK)({libraryPanels:y,page:I,perPage:L,totalCount:$}))),(0,i.K)(L=>(console.error(L),(0,o.of)((0,s.zK)({...s.p$,page:r.page,perPage:r.perPage})))),(0,f.x)(()=>P.unsubscribe()),(0,m.B)());P.add((0,p.T)((0,h.H)(50).pipe((0,d.h)((0,s.xU)()),(0,O.R)(T)),T).subscribe(x))}}function v(r,x){return async function(P){try{await(0,u.UO)(r),C(x)(P)}catch(T){console.error(T)}}}function B(r){return function(x){return x instanceof Function?x(r):r(x)}}},4377:(U,D,t)=>{t.d(D,{_p:()=>i,oO:()=>g,p$:()=>o,xU:()=>p,zK:()=>h});var n=t(62992),e=t(52666);const o={loadingState:e.Gu.Loading,libraryPanels:[],totalCount:0,perPage:40,page:1,numberOfPages:0,currentPanelId:void 0},p=(0,n.PH)("libraryPanels/view/initSearch"),h=(0,n.PH)("libraryPanels/view/searchCompleted"),g=(0,n.PH)("libraryPanels/view/changePage"),i=(f,m)=>{if(p.match(m))return{...f,loadingState:e.Gu.Loading};if(h.match(m)){const{libraryPanels:d,page:O,perPage:u,totalCount:s}=m.payload,C=Math.ceil(s/u);return{...f,libraryPanels:d,perPage:u,totalCount:s,loadingState:e.Gu.Done,numberOfPages:C,page:O>C?O-1:O}}return g.match(m)?{...f,page:m.payload.page}:f}},74391:(U,D,t)=>{t.d(D,{J:()=>e});var n=t(9892);function e(o){return{myTable:n.css`
      max-height: 204px;
      overflow-y: auto;
      margin-top: 11px;
      margin-bottom: 28px;
      border-radius: ${o.shape.borderRadius(1)};
      border: 1px solid ${o.colors.action.hover};
      background: ${o.colors.background.primary};
      color: ${o.colors.text.secondary};
      font-size: ${o.typography.h6.fontSize};
      width: 100%;

      thead {
        color: #538ade;
        font-size: ${o.typography.bodySmall.fontSize};
      }

      th,
      td {
        padding: 6px 13px;
        height: ${o.spacing(4)};
      }

      tbody > tr:nth-child(odd) {
        background: ${o.colors.background.secondary};
      }
    `,noteTextbox:n.css`
      margin-bottom: ${o.spacing(4)};
    `,textInfo:n.css`
      color: ${o.colors.text.secondary};
      font-size: ${o.typography.size.sm};
    `,dashboardSearch:n.css`
      margin-top: ${o.spacing(2)};
    `,modal:n.css`
      width: 500px;
    `,modalText:n.css`
      font-size: ${o.typography.h4.fontSize};
      color: ${o.colors.text.primary};
      margin-bottom: ${o.spacing(4)};
      padding-top: ${o.spacing(2)};
    `}}},89710:(U,D,t)=>{t.d(D,{X:()=>d});var n=t(9892),e=t(66111),o=t(59250),p=t(53940),h=t(68183),g=t(72648),i=t(8180),f=t(51613),m=t(81731);const d=({isCurrent:s,title:C,plugin:v,onClick:B,onDelete:r,disabled:x,showBadge:P,description:T,children:L})=>{const y=(0,g.wW)(O),I=x||v.state===o.BV.deprecated,$=(0,n.cx)({[y.item]:!0,[y.itemDisabled]:I,[y.current]:s});return e.createElement("div",{className:$,"aria-label":h.wl.components.PluginVisualization.item(v.name),onClick:I?void 0:B,title:s?"Click again to close this section":v.name},e.createElement("img",{className:(0,n.cx)(y.img,{[y.disabled]:I}),src:v.info.logos.small,alt:""}),e.createElement("div",{className:(0,n.cx)(y.itemContent,{[y.disabled]:I})},e.createElement("div",{className:y.name},C),T?e.createElement("span",{className:y.description},T):null,L),P&&e.createElement("div",{className:(0,n.cx)(y.badge,{[y.disabled]:I})},e.createElement(u,{plugin:v})),r&&e.createElement(i.h,{name:"trash-alt",onClick:z=>{z.stopPropagation(),r()},className:y.deleteButton,"aria-label":"Delete button on panel type card"}))};d.displayName="PanelTypeCard";const O=s=>({item:n.css`
      position: relative;
      display: flex;
      flex-shrink: 0;
      cursor: pointer;
      background: ${s.colors.background.secondary};
      border-radius: ${s.shape.borderRadius()};
      box-shadow: ${s.shadows.z1};
      border: 1px solid ${s.colors.background.secondary};
      align-items: center;
      padding: 8px;
      width: 100%;
      position: relative;
      overflow: hidden;
      transition: ${s.transitions.create(["background"],{duration:s.transitions.duration.short})};

      &:hover {
        background: ${s.colors.emphasize(s.colors.background.secondary,.03)};
      }
    `,itemContent:n.css`
      overflow: hidden;
      position: relative;
      padding: ${s.spacing(0,1)};
    `,itemDisabled:n.css`
      cursor: default;

      &,
      &:hover {
        background: ${s.colors.action.disabledBackground};
      }
    `,current:n.css`
      label: currentVisualizationItem;
      border: 1px solid ${s.colors.primary.border};
      background: ${s.colors.action.selected};
    `,disabled:n.css`
      opacity: 0.6;
      filter: grayscale(1);
      cursor: default;
      pointer-events: none;
    `,name:n.css`
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: ${s.typography.size.sm};
      font-weight: ${s.typography.fontWeightMedium};
      width: 100%;
    `,description:n.css`
      display: block;
      text-overflow: ellipsis;
      overflow: hidden;
      color: ${s.colors.text.secondary};
      font-size: ${s.typography.bodySmall.fontSize};
      font-weight: ${s.typography.fontWeightLight};
      width: 100%;
      max-height: 4.5em;
    `,img:n.css`
      max-height: 38px;
      width: 38px;
      display: flex;
      align-items: center;
    `,badge:n.css`
      background: ${s.colors.background.primary};
    `,deleteButton:n.css`
      cursor: pointer;
      margin-left: auto;
    `}),u=({plugin:s})=>(0,p.x)(s.signature)?e.createElement(f.o,{status:s.signature}):e.createElement(m.u,{state:s.state});u.displayName="PanelPluginBadge"},13440:(U,D,t)=>{t.d(D,{r:()=>h,x:()=>p});var n=t(59250),e=t(79086),o=t(47694);function p(){const g=o.vc.panels;return Object.keys(g).filter(i=>g[i].hideFromList===!1).map(i=>g[i]).sort((i,f)=>i.sort-f.sort)}function h(g,i,f){if(!i.length)return g.filter(s=>s.state===n.BV.deprecated?f.id===s.id:!0);const m=(0,e.x6)(i).toLowerCase(),d=[],O=[],u="graph".startsWith(m);for(const s of g){if(s.state===n.BV.deprecated&&f.id!==s.id)continue;const v=s.name.toLowerCase().indexOf(m);v===0?d.push(s):v>0?O.push(s):u&&s.id==="timeseries"&&d.push(s)}return d.concat(O)}},81731:(U,D,t)=>{t.d(D,{u:()=>p});var n=t(66111),e=t(59250),o=t(19985);const p=g=>{const i=h(g.state);return i?n.createElement(o.C,{color:i.color,title:i.tooltip,text:i.text,icon:i.icon}):null};function h(g){switch(g){case e.BV.deprecated:return{text:"Deprecated",color:"red",tooltip:"This feature is deprecated and will be removed in a future release"};case e.BV.alpha:return{text:"Alpha",color:"blue",tooltip:"This feature is experimental and future updates might not be backward compatible"};case e.BV.beta:return{text:"Beta",color:"blue",tooltip:"This feature is close to complete but not fully tested"};default:return null}}}}]);

//# sourceMappingURL=3189.c910300cbffc1f8ab8fa.js.map