"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6526],{54350:(re,Y,a)=>{a.d(Y,{A:()=>q,v:()=>_});var i=a(66111),t=a(91017),G=a(72196),W=a(37932);function q(){const A=(0,i.useRef)(new t.x);return{keyboardEvents:A.current,onKeyDown:$=>{switch($.code){case"ArrowDown":case"ArrowUp":case"ArrowLeft":case"ArrowRight":case"Enter":A.current.next($);default:}}}}function _(A,$,V){const m=(0,i.useRef)({x:0,y:-1}),[l,n]=(0,i.useState)({x:0,y:-1}),f=(0,i.useRef)();return(0,i.useEffect)(()=>{f.current=V.view.fields.url,m.current.x=0,m.current.y=-1,n({...m.current})},[V]),(0,i.useEffect)(()=>{const d=A.subscribe({next:r=>{switch(r?.code){case"ArrowDown":{m.current.y++,n({...m.current});break}case"ArrowUp":m.current.y=Math.max(0,m.current.y-1),n({...m.current});break;case"ArrowRight":{$>0&&(m.current.x=Math.min($,m.current.x+1),n({...m.current}));break}case"ArrowLeft":{$>0&&(m.current.x=Math.max(0,m.current.x-1),n({...m.current}));break}case"Enter":if(!f.current)break;const M=m.current.x*$+m.current.y;if(M<0){m.current.x=0,m.current.y=0,n({...m.current});break}const p=f.current.values?.[M];p&&W.E1.push(G.u.stripBaseFromUrl(p))}}});return()=>d.unsubscribe()},[A,$]),l}},16526:(re,Y,a)=>{a.d(Y,{Q:()=>le});var i=a(9892),t=a(66111),G=a(9827),W=a(32436),q=a(47535),_=a(40538),A=a(72648),$=a(35316),V=a(12245),m=a(54350),l=a(99098),n=a(6194),f=a(30471),d=a(2703),r=a(35645),M=a(86647),p=a(8180),E=a(58255),x=a(39904),b=a(34807),T=a(18271),w=a(35287),D=a(48996),Z=a(45984),ae=a(28066),de=a(88683),ue=a(35029),me=a(94893),se=a(9405),fe=a(16225);const te=[{label:"Score",value:"score"},{label:"Fields",value:"fields"},{label:"Allowed actions",value:"allowed_actions"}];function he({name:e,explain:o,frame:R,row:h}){const[y,c]=(0,t.useState)(!0),[L,P]=(0,t.useState)("score"),I=t.createElement(de.H,{title:e,icon:"info",tabs:te,activeTab:L,onChangeTab:v=>{P(v.value)}});return t.createElement(ue.u,{title:I,isOpen:y,onDismiss:()=>c(!1),closeOnBackdropClick:!0,closeOnEscape:!0},t.createElement(me.I,null,L===te[0].value&&t.createElement(se.p,{width:"100%",height:"70vh",language:"json",showLineNumbers:!1,showMiniMap:!0,value:JSON.stringify(o,null,2),readOnly:!1}),L===te[1].value&&t.createElement("div",null,t.createElement(fe.H,{data:R,rowIndex:h})),L===te[2].value&&t.createElement(se.p,{width:"100%",height:"70vh",language:"json",showLineNumbers:!1,showMiniMap:!1,value:(()=>{const v=R.fields.find(N=>N.name==="allowed_actions")?.values?.[h],s=R.fields.find(N=>N.name==="ds_uid")?.values?.[h];return JSON.stringify({dsUids:s??[],allowedActions:v??[]},null,2)})(),readOnly:!1})))}const ve=175,ge=200,pe=(e,o,R,h,y,c,L,P,I)=>{const v=[],s=e.view.fields,N=s.uid,F=s.kind;let H=0;const O=s[e.view.dataFrame.meta?.custom?.sortBy];O&&(H=175,O.type===l.fS.time&&(H+=25),o-=H),s.explain&&s.score&&(o-=100);let C=50;R&&h&&(C=30,v.push({id:"column-checkbox",width:C,Header:()=>R("*","*")?t.createElement("div",{className:c.checkboxHeader},t.createElement(p.h,{name:"check-square",onClick:y})):t.createElement("div",{className:c.checkboxHeader},t.createElement(E.X,{checked:!1,onChange:g=>{g.stopPropagation(),g.preventDefault();const{view:S}=e,u=Math.min(S.length,50);for(let k=0;k<u;k++){const U=S.get(k);U.uid&&U.kind&&(R(U.kind,U.uid)||h(U.kind,U.uid))}}})),Cell:g=>{const S=N.values[g.row.index],u=F?F.values[g.row.index]:"dashboard",k=R(u,S),U=S!=null;return t.createElement("div",{...g.cellProps},t.createElement("div",{className:c.checkbox},t.createElement(E.X,{disabled:!U,value:k&&U,onChange:Q=>{h(u,S)}})))},field:N}),o-=C),C=Math.max(o*.2,300),v.push({Cell:g=>{let S=(0,i.cx)(c.nameCellStyle),u=s.name.values[g.row.index];return u?.length||(u=g.row.index>=e.view.dataFrame.length?"Loading...":"Missing title",S+=" "+c.missingTitleText),t.createElement("a",{...g.cellProps,href:g.userProps.href,onClick:g.userProps.onClick,className:S,title:u},u)},id:"column-name",field:s.name,Header:()=>t.createElement("div",{className:c.headerNameStyle},(0,w.t)("search.results-table.name-header","Name")),width:C}),o-=C,C=ve,v.push(ye(s.kind,s.panel_type,C,c)),o-=C,s.ds_uid&&P&&(C=Math.min(o/2.5,ge),v.push(Ie(s.ds_uid,C,c.typeIcon,c.datasourceItem,c.invalidDatasourceItem,P)),o-=C);const ee=!I||xe(e.view.fields.tags),X=e.view.dataFrame.meta?.custom;if(X?.locationInfo&&o>0&&(C=ee?Math.max(o/1.75,300):o,o-=C,v.push({Cell:g=>{const S=(s.location?.values[g.row.index]??"").split("/");return t.createElement("div",{...g.cellProps,className:(0,i.cx)(c.locationCellStyle)},S.map(u=>{let k=X.locationInfo[u];return!k&&u==="general"&&(k={kind:"folder",url:"/dashboards",name:"General"}),k?t.createElement("a",{key:u,href:k.url,className:c.locationItem},t.createElement(x.J,{name:(0,ae.J6)(k.kind)})," ",k.name):t.createElement("span",{key:u},u)}))},id:"column-location",field:s.location??s.url,Header:(0,w.t)("search.results-table.location-header","Location"),width:C})),o>0&&ee&&v.push(Ee(s.tags,o,c.tagList,L)),O&&H){const g=O.display??(0,n.U_)({field:O,theme:r.v.theme2});v.push({Header:()=>t.createElement("div",{className:c.sortedHeader},(0,f.CZ)(O)),Cell:S=>t.createElement("div",{...S.cellProps,className:c.sortedItems},Re({sortField:O,getDisplay:g,index:S.row.index,kind:s.kind})),id:"column-sort-field",field:O,width:H})}if(s.explain&&s.score){const g=s.score.values,S=u=>{T.Z.publish(new Z.Dn({component:he,props:{name:s.name.values[u],explain:s.explain.values[u],frame:e.view.dataFrame,row:u}}))};v.push({Header:()=>t.createElement("div",{className:c.sortedHeader},"Score"),Cell:u=>t.createElement("div",{...u.cellProps,className:c.explainItem,onClick:()=>S(u.row.index)},g[u.row.index]),id:"column-score-field",field:s.score,width:100})}return v};function xe(e){for(let o=0;o<e.values.length;o++)if(e.values[o]!=null)return!0;return!1}function Ie(e,o,R,h,y,c){const L=(0,M.F)();return{id:"column-datasource",field:e,Header:(0,w.t)("search.results-table.datasource-header","Data source"),Cell:P=>{const I=e.values[P.row.index];return I?.length?t.createElement("div",{...P.cellProps,className:(0,i.cx)(h)},I.map((v,s)=>{const N=L.getInstanceSettings(v),F=N?.meta?.info?.logos?.small;return F?t.createElement("span",{key:s,onClick:H=>{H.stopPropagation(),H.preventDefault(),c(N.uid)}},t.createElement("img",{src:F,alt:"",width:14,height:14,title:N.type,className:R}),N.name):t.createElement("span",{className:y,key:s},v)})):null},width:o}}function ye(e,o,R,h){return{id:"column-type",field:e??o,Header:(0,w.t)("search.results-table.type-header","Type"),Cell:y=>{const c=y.row.index,L=e?.values[c]??"dashboard";let P="apps",I="Dashboard";if(L)switch(I=L,I){case"dashboard":I=(0,w.t)("search.results-table.type-dashboard","Dashboard");break;case"folder":P="folder",I=(0,w.t)("search.results-table.type-folder","Folder");break;case"panel":P=`${D.Co.panel}`;const v=o.values[c];if(v){I=v;const s=r.v.panels[I];if(s?.name)I=s.name;else switch(v){case"row":I="Row",P="bars";break;case"singlestat":I="Singlestat";break;default:P="question-circle"}}break}return t.createElement("div",{...y.cellProps,className:h.typeText},t.createElement(x.J,{name:P,size:"sm",title:I,className:h.typeIcon}),I)},width:R}}function Ee(e,o,R,h){return{Cell:y=>{const c=e.values[y.row.index];return c?t.createElement("div",{...y.cellProps},t.createElement(b.P,{className:R,tags:c,onClick:h})):null},id:"column-tags",field:e,Header:(0,w.t)("search.results-table.tags-header","Tags"),width:o}}function Re({kind:e,sortField:o,index:R,getDisplay:h}){const y=o.values[R];return["folder","panel"].includes(e.values[R])&&y===0?"-":(0,d.zc)(h(y))}const oe=36,le=t.memo(({response:e,width:o,height:R,selection:h,selectionToggle:y,clearSelection:c,onTagSelected:L,onDatasourceChange:P,onClickItem:I,keyboardEvents:v})=>{const s=(0,A.wW)(we),N=(0,A.wW)(Se),F=(0,V.p)((0,A.l4)(),_.Ss.Sm),H=(0,t.useRef)(null),[O,C]=(0,t.useState)(null),ee=(0,m.v)(v,0,e),X=(0,t.useMemo)(()=>e?.view?.dataFrame.fields.length?Array(e.totalRows).fill(0):[],[e]);(0,t.useEffect)(()=>{H.current&&H.current.resetloadMoreItemsCache(),O&&O.scrollTo(0)},[X,O]);const g=(0,t.useMemo)(()=>pe(e,o,h,y,c,N,L,P,e.view?.length>=e.totalRows),[e,o,N,h,y,c,L,P]),S=(0,t.useMemo)(()=>({columns:g,data:X}),[g,X]),{getTableProps:u,getTableBodyProps:k,headerGroups:U,rows:Q,prepareRow:ie}=(0,G.useTable)(S,G.useAbsoluteLayout),be=(0,t.useCallback)(async(B,J)=>{await e.loadMoreItems(B,J);const z=h?.("*","*");if(!(!y||!h||!z))for(let K=B;K<e.view.length;K++){const j=e.view.get(K);h(j.kind,j.uid)||y(j.kind,j.uid)}},[e,h,y]),Ce=(0,t.useCallback)(({index:B,style:J})=>{const z=Q[B];ie(z);const K=e.view.fields.url?.values[B];let j=s.rowContainer;return B===ee.y&&(j+=" "+s.selectedRow),t.createElement("div",{...z.getRowProps({style:J}),className:j},z.cells.map((ne,ce)=>t.createElement($.p,{key:ce,tableStyles:F,cell:ne,columnIndex:ce,columnCount:z.cells.length,userProps:{href:K,onClick:I}})))},[Q,ie,e.view.fields.url?.values,ee,s,F,I]);return Q.length?t.createElement("div",{...u(),"aria-label":"Search results table",role:"table"},t.createElement("div",null,U.map(B=>{const{key:J,...z}=B.getHeaderGroupProps();return t.createElement("div",{key:J,...z,className:s.headerRow},B.headers.map(K=>{const{key:j,...ne}=K.getHeaderProps();return t.createElement("div",{key:j,...ne,role:"columnheader",className:s.headerCell},K.render("Header"))}))})),t.createElement("div",{...k()},t.createElement(q.Z,{ref:H,isItemLoaded:e.isItemLoaded,itemCount:Q.length,loadMoreItems:be},({onItemsRendered:B,ref:J})=>t.createElement(W.t7,{ref:z=>{J(z),C(z)},onItemsRendered:B,height:R-oe,itemCount:Q.length,itemSize:F.rowHeight,width:"100%",style:{overflow:"hidden auto"}},Ce)))):t.createElement("div",{className:s.noData},"No data")});le.displayName="SearchResultsTable";const we=e=>{const o=e.colors.emphasize(e.colors.background.primary,.03);return{noData:i.css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    `,headerCell:i.css`
      padding: ${e.spacing(1)};
    `,headerRow:i.css`
      background-color: ${e.colors.background.secondary};
      height: ${oe}px;
      align-items: center;
    `,selectedRow:i.css`
      background-color: ${o};
      box-shadow: inset 3px 0px ${e.colors.primary.border};
    `,rowContainer:i.css`
      label: row;
      &:hover {
        background-color: ${o};
      }

      &:not(:hover) div[role='cell'] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `}},Se=e=>({nameCellStyle:i.css`
      border-right: none;
      padding: ${e.spacing(1)} ${e.spacing(1)} ${e.spacing(1)} ${e.spacing(2)};
      overflow: hidden;
      text-overflow: ellipsis;
      user-select: text;
      white-space: nowrap;
      &:hover {
        box-shadow: none;
      }
    `,headerNameStyle:i.css`
      padding-left: ${e.spacing(1)};
    `,typeIcon:i.css`
      margin-left: 5px;
      margin-right: 9.5px;
      vertical-align: middle;
      display: inline-block;
      margin-bottom: ${e.v1.spacing.xxs};
      fill: ${e.colors.text.secondary};
    `,datasourceItem:i.css`
      span {
        &:hover {
          color: ${e.colors.text.link};
        }
      }
    `,missingTitleText:i.css`
      color: ${e.colors.text.disabled};
      font-style: italic;
    `,invalidDatasourceItem:i.css`
      color: ${e.colors.error.main};
      text-decoration: line-through;
    `,typeText:i.css`
      color: ${e.colors.text.secondary};
      padding-top: ${e.spacing(1)};
    `,locationItem:i.css`
      color: ${e.colors.text.secondary};
      margin-right: 12px;
    `,sortedHeader:i.css`
      text-align: right;
      padding-right: ${e.spacing(2)};
    `,sortedItems:i.css`
      text-align: right;
      padding: ${e.spacing(1)} ${e.spacing(3)} ${e.spacing(1)} ${e.spacing(1)};
    `,explainItem:i.css`
      text-align: right;
      padding: ${e.spacing(1)} ${e.spacing(3)} ${e.spacing(1)} ${e.spacing(1)};
      cursor: pointer;
    `,locationCellStyle:i.css`
      padding-top: ${e.spacing(1)};
      padding-right: ${e.spacing(1)};
    `,checkboxHeader:i.css`
      margin-left: 2px;
    `,checkbox:i.css`
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 5px;
    `,tagList:i.css`
      padding-top: ${e.spacing(.5)};
      justify-content: flex-start;
      flex-wrap: nowrap;
    `})},47535:(re,Y,a)=>{a.d(Y,{Z:()=>m});var i=a(66111);function t(l){return typeof l=="number"&&isFinite(l)&&Math.floor(l)===l}function G(l){var n=l.lastRenderedStartIndex,f=l.lastRenderedStopIndex,d=l.startIndex,r=l.stopIndex;return!(d>f||r<n)}function W(l){for(var n=l.isItemLoaded,f=l.itemCount,d=l.minimumBatchSize,r=l.startIndex,M=l.stopIndex,p=[],E=null,x=null,b=r;b<=M;b++){var T=n(b);T?x!==null&&(p.push(E,x),E=x=null):(x=b,E===null&&(E=b))}if(x!==null){for(var w=Math.min(Math.max(x,E+d-1),f-1),D=x+1;D<=w&&!n(D);D++)x=D;p.push(E,x)}if(p.length)for(;p[1]-p[0]+1<d&&p[0]>0;){var Z=p[0]-1;if(!n(Z))p[0]=Z;else break}return p}var q=function(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")},_=function(){function l(n,f){for(var d=0;d<f.length;d++){var r=f[d];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(n,f,d){return f&&l(n.prototype,f),d&&l(n,d),n}}(),A=function(l,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);l.prototype=Object.create(n&&n.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(l,n):l.__proto__=n)},$=function(l,n){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n&&(typeof n=="object"||typeof n=="function")?n:l},V=function(l){A(n,l);function n(){var f,d,r,M;q(this,n);for(var p=arguments.length,E=Array(p),x=0;x<p;x++)E[x]=arguments[x];return M=(d=(r=$(this,(f=n.__proto__||Object.getPrototypeOf(n)).call.apply(f,[this].concat(E))),r),r._lastRenderedStartIndex=-1,r._lastRenderedStopIndex=-1,r._memoizedUnloadedRanges=[],r._onItemsRendered=function(b){var T=b.visibleStartIndex,w=b.visibleStopIndex;r._lastRenderedStartIndex=T,r._lastRenderedStopIndex=w,r._ensureRowsLoaded(T,w)},r._setRef=function(b){r._listRef=b},d),$(r,M)}return _(n,[{key:"resetloadMoreItemsCache",value:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;this._memoizedUnloadedRanges=[],d&&this._ensureRowsLoaded(this._lastRenderedStartIndex,this._lastRenderedStopIndex)}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var d=this.props.children;return d({onItemsRendered:this._onItemsRendered,ref:this._setRef})}},{key:"_ensureRowsLoaded",value:function(d,r){var M=this.props,p=M.isItemLoaded,E=M.itemCount,x=M.minimumBatchSize,b=x===void 0?10:x,T=M.threshold,w=T===void 0?15:T,D=W({isItemLoaded:p,itemCount:E,minimumBatchSize:b,startIndex:Math.max(0,d-w),stopIndex:Math.min(E-1,r+w)});(this._memoizedUnloadedRanges.length!==D.length||this._memoizedUnloadedRanges.some(function(Z,ae){return D[ae]!==Z}))&&(this._memoizedUnloadedRanges=D,this._loadUnloadedRanges(D))}},{key:"_loadUnloadedRanges",value:function(d){for(var r=this,M=this.props.loadMoreItems||this.props.loadMoreRows,p=function(b){var T=d[b],w=d[b+1],D=M(T,w);D?.then(function(){if(G({lastRenderedStartIndex:r._lastRenderedStartIndex,lastRenderedStopIndex:r._lastRenderedStopIndex,startIndex:T,stopIndex:w})){if(r._listRef==null)return;typeof r._listRef.resetAfterIndex=="function"?r._listRef.resetAfterIndex(T,!0):(typeof r._listRef._getItemStyleCache=="function"&&r._listRef._getItemStyleCache(-1),r._listRef.forceUpdate())}})},E=0;E<d.length;E+=2)p(E)}}]),n}(i.PureComponent);const m=V}}]);

//# sourceMappingURL=6526.d4552813e2652f02f59e.js.map