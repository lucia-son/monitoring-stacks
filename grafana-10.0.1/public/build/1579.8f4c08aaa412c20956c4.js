"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1579],{91579:(ye,j,c)=>{c.d(j,{D:()=>Et});var l=c(9892),e=c(66111),Z=c(52666),Y=c(75849),J=c(59957),k=c(206),y=c(68183),g=c(86647),O=c(37932),d=c(19426),x=c(31403),I=c(52081),w=c(68226),B=c(35029),U=c(7804),V=c(59679),W=c(2631),Ce=c(54899),De=c(61744);function xe({pluginId:t}){const{value:a,loading:n,error:s}=(0,V.Z)(async()=>(0,Ce.i)().get(`/api/plugins/${t}/markdown/query_help`),[]),r=(0,W.a)(a);return n?e.createElement(De.u,{text:"Loading help..."}):s?e.createElement("h3",null,"An error occurred when loading help."):a===""?e.createElement("h3",null,"No query help could be found."):e.createElement("div",{className:"markdown-html",dangerouslySetInnerHTML:{__html:r}})}var N=c(47694),be=c(29930),H=c(99822),M=c(63755),Ie=c(82897),C=c(41818),T=c(72648),A=c(46967),X=c(39904),ne=c(30784),we=c(77582),Ne=c(86475),Te=c(3597),Ae=c(27876);function se({variant:t,onClick:a}){const n=we.Vt.hasPermission(Ae.AccessControlAction.DataSourcesCreate),s=N.vc.featureToggles.dataConnectionsConsole?Ne.Z.DataSourcesNew:Te.n.New;return e.createElement(x.Qj,{variant:t||"primary",href:s,disabled:!n,tooltip:n?void 0:"You do not have permission to configure new data sources",onClick:a,target:"_blank"},"Configure a new data source")}var Oe=c(23934);const Re="grafana.features.datasources.components.picker.DataSourceDropDown.history";function Pe(){const[t=[],a]=(0,Oe.Z)(Re,[]),n=(0,e.useCallback)(s=>{s.meta.builtIn||(t.includes(s.uid)?(t.splice(t.findIndex(r=>s.uid===r),1),a([...t,s.uid])):a([...t,s.uid].slice(1,6)))},[t,a]);return[t,n]}function re(t){return(0,g.F)().getList(t)}function ke(t){const a=(0,g.F)();if(t)return a.getInstanceSettings(t)}function Me(t){const{keyboardEvents:a,containerRef:n}=t,s=(0,e.useRef)(0),r="data-role",o="keyboardSelectableItem",i={[r]:o},u=`[${r}="${o}"`,f="data-selectedItem",m=`[${f}="true"]`,h=(0,e.useCallback)(E=>{const p=n?.current?.querySelectorAll(u),D=p?.item(E%p?.length);p?.forEach(v=>v.setAttribute(f,"false")),D&&(D.scrollIntoView({block:"center"}),D.setAttribute(f,"true"))},[n,u]),S=(0,e.useCallback)(()=>{n?.current?.querySelector(m)?.querySelector("button")?.click()},[n,m]);return(0,e.useEffect)(()=>{if(!a)return;const E=a.subscribe({next:p=>{switch(p?.code){case"ArrowDown":{h(++s.current),p.preventDefault();break}case"ArrowUp":s.current=s.current>0?s.current-1:s.current,h(s.current),p.preventDefault();break;case"Enter":S();break}}});return()=>E.unsubscribe()},[a,h,S]),(0,e.useEffect)(()=>{const E=new MutationObserver(p=>{p.some(v=>v.addedNodes&&v.addedNodes.length>0||v.removedNodes&&v.removedNodes.length>0)&&h(0)});return n.current&&E.observe(n.current,{childList:!0}),()=>{E.disconnect()}},[n,u,h]),[i,m]}var q=c(72948),Le=c(34807);function oe({ds:t,onClick:a,selected:n,description:s,...r}){const o=(0,T.wW)(Qe);return e.createElement(q.Z,{key:t.uid,onClick:a,className:(0,l.cx)(o.card,n?o.selected:void 0),...r},e.createElement(q.Z.Heading,{className:o.heading},e.createElement("div",{className:o.headingContent},e.createElement("span",{className:o.name},t.name," ",t.isDefault?e.createElement(Le.P,{tags:["default"]}):null),e.createElement("small",{className:o.type},s||t.meta.name))),e.createElement(q.Z.Figure,{className:o.logo},e.createElement("img",{src:t.meta.info.logos.small,alt:`${t.meta.name} Logo`})))}function Qe(t){return{card:l.css`
      cursor: pointer;
      background-color: ${t.colors.background.primary};
      border-bottom: 1px solid ${t.colors.border.weak};
      // Move to list component
      margin-bottom: 0;
      border-radius: 0;
      padding: ${t.spacing(1)};
    `,heading:l.css`
      width: 100%;
      overflow: hidden;
      // This is needed to enable ellipsis when text overlfows
      > button {
        width: 100%;
      }
    `,headingContent:l.css`
      color: ${t.colors.text.secondary};
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: flex;
      justify-content: space-between;
    `,logo:l.css`
      width: 32px;
      height: 32px;
      padding: ${t.spacing(0,1)};
      display: flex;
      align-items: center;

      > img {
        max-height: 100%;
        min-width: 24px;
      }
    `,name:l.css`
      color: ${t.colors.text.primary};
      display: flex;
      gap: ${t.spacing(2)};
    `,type:l.css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: flex;
      align-items: center;
    `,separator:l.css`
      margin: 0 ${t.spacing(1)};
      color: ${t.colors.border.weak};
    `,selected:l.css`
      background-color: ${t.colors.background.secondary};
    `,meta:l.css`
      display: block;
      overflow-wrap: unset;
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    `}}function z(t,a){return!t||!a?!1:typeof a=="string"?t.uid===a:t.uid===a.uid}function $e(t){return t?typeof t=="string"?`${t} - not found`:"name"in t?t.name:t.uid?`${t.uid} - not found`:"Unknown":"Unknown"}function Fe(t,a,n){return(r,o)=>{if(t&&z(r,t))return-1;if(t&&z(o,t))return 1;const i=a.indexOf(r.uid),u=a.indexOf(o.uid);if(i>-1&&i>u)return-1;if(u>-1&&u>i)return 1;const f=n.includes(r.uid),m=n.includes(o.uid);return f&&!m?-1:m&&!f?1:m&&f?r.name<o.name?-1:1:r.meta.builtIn&&!o.meta.builtIn?1:o.meta.builtIn&&!r.meta.builtIn?-1:(r.meta.builtIn&&o.meta.builtIn,r.name<o.name?-1:1)}}function ie(t,a=""){return t.name.toLowerCase().includes(a.toLowerCase())}const Be={grafana:"Discover visualizations using mock data","-- Mixed --":"Use multiple data sources","-- Dashboard --":"Reuse query results from other visualizations"};function ce({className:t,current:a,onChange:n}){const s=re({mixed:!0,dashboard:!0,filter:r=>!!r.meta.builtIn});return e.createElement("div",{className:t},s.map(r=>e.createElement(oe,{key:r.uid,ds:r,description:Be[r.uid],selected:z(r,a),onClick:()=>n(r)})))}var Ue=c(20308);function le(t){const a=(0,e.useRef)(null),[n,s]=Me({keyboardEvents:t.keyboardEvents,containerRef:a}),r=(0,T.l4)(),o=ze(r,s),{className:i,current:u,onChange:f,enableKeyboardNavigation:m,onClickEmptyStateCTA:h}=t,S=re({alerting:t.alerting,annotations:t.annotations,dashboard:t.dashboard,logs:t.logs,metrics:t.metrics,mixed:t.mixed,pluginId:t.pluginId,tracing:t.tracing,type:t.type,variables:t.variables}),[E,p]=Pe(),D=t.filter?S.filter(t.filter):S;return e.createElement("div",{ref:a,className:(0,l.cx)(i,o.container)},D.length===0&&e.createElement(Ve,{className:o.emptyState,onClickCTA:h}),D.sort(Fe(u,E,He())).map(v=>e.createElement(oe,{key:v.uid,ds:v,onClick:()=>{p(v),f(v)},selected:z(v,u),...m?n:{}})))}function Ve({className:t,onClickCTA:a}){const n=(0,T.wW)(We);return e.createElement("div",{className:(0,l.cx)(t,n.container)},e.createElement("p",{className:n.message},"No data sources found"),e.createElement(se,{onClick:a}))}function We(t){return{container:l.css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,message:l.css`
      margin-bottom: ${t.spacing(3)};
    `}}function He(){return(0,Ue.J)().getVariables().filter(a=>a.type==="datasource").map(a=>`\${${a.id}}`)}function ze(t,a){return{container:l.css`
      display: flex;
      flex-direction: column;
      ${a} {
        background-color: ${t.colors.background.secondary};
      }
    `,emptyState:l.css`
      height: 100%;
      flex: 1;
    `}}const R="dashboards_dspickermodal_clicked",L={SELECT_DS:"select_ds",UPLOAD_FILE:"upload_file",CONFIG_NEW_DS:"config_new_ds",CONFIG_NEW_DS_EMPTY_STATE:"config_new_ds_empty_state",SEARCH:"search",DISMISS:"dismiss"};function ue({enableFileUpload:t,fileUploadOptions:a,onChange:n,current:s,onDismiss:r,reportedInteractionFrom:o}){const i=(0,T.wW)(Ke),[u,f]=(0,e.useState)(""),m=o||"modal",h=()=>{r(),(0,C.ff)(R,{item:L.DISMISS,src:m})},S=p=>{n(p),(0,C.ff)(R,{item:L.SELECT_DS,ds_type:p.type,src:m})},E=e.useMemo(()=>(0,Ie.once)(()=>{(0,C.ff)(R,{item:"search",src:m})}),[m]);return e.createElement(B.u,{title:"Select data source",closeOnEscape:!0,closeOnBackdropClick:!0,isOpen:!0,className:i.modal,contentClassName:i.modalContent,onClickBackdrop:h,onDismiss:h},e.createElement("div",{className:i.leftColumn},e.createElement(A.I,{autoFocus:!0,className:i.searchInput,value:u,prefix:e.createElement(X.J,{name:"search"}),placeholder:"Search data source",onChange:p=>{f(p.currentTarget.value),E()}}),e.createElement(w.$,null,e.createElement(le,{dashboard:!1,mixed:!1,variables:!0,filter:p=>ie(p,u)&&!p.meta.builtIn,onChange:S,current:s,onClickEmptyStateCTA:()=>(0,C.ff)(R,{item:L.CONFIG_NEW_DS_EMPTY_STATE,src:m})}),e.createElement(ce,{className:i.appendBuiltInDataSourcesList,onChange:S,current:s}))),e.createElement("div",{className:i.rightColumn},e.createElement("div",{className:i.builtInDataSources},e.createElement(w.$,{className:i.builtInDataSourcesList},e.createElement(ce,{onChange:S,current:s})),t&&e.createElement(ne.Yo,{readAs:"readAsArrayBuffer",fileListRenderer:()=>{},options:{maxSize:M.dg,multiple:!1,accept:M.DK,...a,onDrop:(...p)=>{a?.onDrop?.(...p),r(),(0,C.ff)(R,{item:L.UPLOAD_FILE,src:m})}}},e.createElement(ne.A_,null))),e.createElement("div",{className:i.newDSSection},e.createElement("span",{className:i.newDSDescription},"Open a new tab and configure a data source"),e.createElement(se,{variant:"secondary",onClick:()=>{(0,C.ff)(R,{item:L.CONFIG_NEW_DS,src:m}),r()}}))))}function Ke(t){return{modal:l.css`
      width: 80%;
      height: 80%;
      max-width: 1200px;
      max-height: 900px;

      ${t.breakpoints.down("md")} {
        width: 100%;
      }
    `,modalContent:l.css`
      display: flex;
      flex-direction: row;
      height: 100%;

      ${t.breakpoints.down("md")} {
        flex-direction: column;
      }
    `,leftColumn:l.css`
      display: flex;
      flex-direction: column;
      width: 50%;
      height: 100%;
      padding-right: ${t.spacing(4)};
      border-right: 1px solid ${t.colors.border.weak};

      ${t.breakpoints.down("md")} {
        width: 100%;
        border-right: 0;
        padding-right: 0;
        flex: 1;
        overflow-y: auto;
      }
    `,rightColumn:l.css`
      display: flex;
      flex-direction: column;
      width: 50%;
      height: 100%;
      justify-items: space-evenly;
      align-items: stretch;
      padding-left: ${t.spacing(4)};

      ${t.breakpoints.down("md")} {
        width: 100%;
        padding-left: 0;
        flex: 0;
      }
    `,builtInDataSources:l.css`
      flex: 1 1;
      margin-bottom: ${t.spacing(4)};

      ${t.breakpoints.down("md")} {
        flex: 0;
      }
    `,builtInDataSourcesList:l.css`
      ${t.breakpoints.down("md")} {
        display: none;
        margin-bottom: 0;
      }

      margin-bottom: ${t.spacing(4)};
    `,appendBuiltInDataSourcesList:l.css`
      ${t.breakpoints.up("md")} {
        display: none;
      }
    `,newDSSection:l.css`
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      align-items: center;
    `,newDSDescription:l.css`
      flex: 1 0;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      color: ${t.colors.text.secondary};
    `,searchInput:l.css`
      width: 100%;
      min-height: 32px;
      margin-bottom: ${t.spacing(1)};
    `}}var Ge=c(53117),je=c(29952),Ze=c(86922),Ye=c(10092),Je=c(85511),Xe=c(5191),qe=c(54350);function _e(t){const{dataSource:a}=t,n=(0,T.wW)(me);return a?e.createElement("img",{className:n.pickerDSLogo,alt:`${a.meta.name} logo`,src:a.meta.info.logos.small}):de()}function de(){const t=(0,T.wW)(me);return e.createElement("div",{className:t.pickerDSLogo})}function me(t){return{pickerDSLogo:l.css`
      height: 20px;
      width: 20px;
    `}}var et=c(85057);const tt=20,at=200,nt={name:"maxSize",enabled:!0,phase:"main",requires:["offset","preventOverflow","flip"],fn({state:t,name:a,options:n}){const s=(0,et.Z)(t,n),{x:r,y:o}=t.modifiersData.preventOverflow||{x:0,y:0},{width:i,height:u}=t.rects.popper,[f]=t.placement.split("-"),m=f==="left"?"left":"right",h=f==="top"?"top":"bottom";t.modifiersData[a]={width:i-s[m]-r,height:u-s[h]-o}}},st={name:"applyMaxSize",enabled:!0,phase:"beforeWrite",requires:["maxSize"],fn({state:t}){const{height:a,width:n}=t.modifiersData.maxSize;t.styles.popper.maxHeight=`${a-tt}px`,t.styles.popper.minHeight=`${at}px`,t.styles.popper.maxWidth=n}},Q="dashboards_dspicker_clicked",$={OPEN_DROPDOWN:"open_dspicker",SELECT_DS:"select_ds",ADD_FILE:"add_file",OPEN_ADVANCED_DS_PICKER:"open_advanced_ds_picker",CONFIG_NEW_DS_EMPTY_STATE:"config_new_ds_empty_state"};function rt(t){const{current:a,onChange:n,hideTextValue:s,width:r,...o}=t,[i,u]=(0,e.useState)(!1),[f,m]=(0,e.useState)(!1),[h,S]=(0,e.useState)(),[E,p]=(0,e.useState)(),[D,v]=(0,e.useState)(""),F=()=>{(0,C.ff)(Q,{item:$.OPEN_DROPDOWN}),u(!0),h?.focus()},{onKeyDown:Ct,keyboardEvents:Se}=(0,qe.A)();(0,e.useEffect)(()=>{const b=Se.subscribe({next:G=>{switch(G?.code){case"ArrowDown":{F(),G.preventDefault();break}case"ArrowUp":F(),G.preventDefault();break;case"Escape":P(),h?.focus(),G.preventDefault()}}});return()=>b.unsubscribe()});const ee=ke(a),Ee=(0,Ye.D)(h,E,{placement:"bottom-start",modifiers:[{name:"offset",options:{offset:[0,4]}},nt,st]}),P=(0,e.useCallback)(()=>{v(""),u(!1)},[u]),te=(0,e.useRef)(null),{overlayProps:Dt,underlayProps:xt}=(0,Ze.Ir)({onClose:P,isDismissable:!0,isOpen:i,shouldCloseOnInteractOutside:b=>h?!h.isSameNode(b):!1},te),{dialogProps:bt}=(0,je.R)({},te),ae=(0,T.wW)(ot);return e.createElement("div",{className:ae.container,"data-testid":y.wl.components.DataSourcePicker.container,style:{width:r}},e.createElement("div",{className:ae.trigger,onClick:F},e.createElement(A.I,{className:f?void 0:ae.input,"data-testid":y.wl.components.DataSourcePicker.inputV2,prefix:D&&i?e.createElement(de,null):e.createElement(_e,{dataSource:ee}),suffix:e.createElement(X.J,{name:i?"search":"angle-down"}),placeholder:s?"":$e(ee),onClick:F,onFocus:()=>{m(!0)},onBlur:()=>{m(!1),P()},onKeyDown:Ct,value:D,onChange:b=>{F(),v(b.currentTarget.value)},ref:S})),i?e.createElement(Je.h_,null,e.createElement("div",{...xt}),e.createElement("div",{ref:te,...Dt,...bt,onMouseDown:b=>{b.preventDefault()}},e.createElement(he,{keyboardEvents:Se,filterTerm:D,onChange:b=>{P(),n(b)},onClose:P,current:ee,style:Ee.styles.popper,ref:p,...o,onDismiss:P,...Ee.attributes.popper}))):null)}function ot(t){return{container:l.css`
      position: relative;
    `,trigger:l.css`
      cursor: pointer;
    `,input:l.css`
      input {
        cursor: pointer;
      }
      input::placeholder {
        color: ${t.colors.text.primary};
      }
    `}}const he=e.forwardRef((t,a)=>{const{filterTerm:n,onChange:s,onClose:r,onClickAddCSV:o,current:i}=t,u=(0,e.useCallback)(h=>{s(h),(0,C.ff)(Q,{item:$.SELECT_DS,ds_type:h.type})},[s]),f=(0,e.useCallback)(()=>{o?.(),r(),(0,C.ff)(Q,{item:$.ADD_FILE})},[o,r]),m=(0,T.wW)(it);return e.createElement("div",{style:t.style,ref:a,className:m.container},e.createElement(w.$,null,e.createElement(le,{...t,enableKeyboardNavigation:!0,className:m.dataSourceList,current:i,onChange:u,filter:h=>ie(h,n),onClickEmptyStateCTA:()=>(0,C.ff)(Q,{item:$.CONFIG_NEW_DS_EMPTY_STATE})})),e.createElement("div",{className:m.footer},e.createElement(Xe.JY,null,({showModal:h,hideModal:S})=>e.createElement(x.zx,{size:"sm",variant:"secondary",fill:"text",onClick:()=>{r(),h(ue,{enableFileUpload:t.enableFileUpload,fileUploadOptions:t.fileUploadOptions,reportedInteractionFrom:"ds_picker",current:i,onDismiss:S,onChange:E=>{s(E),S()}}),(0,C.ff)(Q,{item:$.OPEN_ADVANCED_DS_PICKER})}},"Open advanced data source picker",e.createElement(X.J,{name:"arrow-right"}))),o&&N.ZP.featureToggles.editPanelCSVDragAndDrop&&e.createElement(x.zx,{variant:"secondary",size:"sm",onClick:f},"Add csv or spreadsheet")))});he.displayName="PickerContent";function it(t){return{container:l.css`
      display: flex;
      flex-direction: column;
      max-width: 480px;
      background: ${t.colors.background.primary};
      box-shadow: ${t.shadows.z3};
    `,picker:l.css`
      background: ${t.colors.background.secondary};
    `,dataSourceList:l.css`
      flex: 1;
    `,footer:l.css`
      flex: 0;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      padding: ${t.spacing(1.5)};
      border-top: 1px solid ${t.colors.border.weak};
      background-color: ${t.colors.background.secondary};
    `}}function pe(t){return N.vc.featureToggles.advancedDataSourcePicker?e.createElement(rt,{...t}):e.createElement(Ge.q,{...t})}var ct=c(47471),_=c(79543),fe=c(7832),ge=c(89749),lt=c(22069);async function ut(t,a,n,s){let r=n;const o={type:t.type,uid:a},i={...t?.getDefaultQuery?.(k.zj.PanelEditor),datasource:o,refId:"A"};if(s?.meta.id!==t.meta.id){if(t.meta.mixed)return n;if((0,ge.p)(s)&&(0,ge.CZ)(t)){const u=await s.exportToAbstractQueries(n);r=await t.importFromAbstractQueries(u)}else if(s&&t.importQueries)r=await t.importQueries(n,s);else return[i]}return r.length===0?[i]:r.map(u=>(!(0,lt.Pr)(u.datasource)&&!t.meta.mixed&&(u.datasource=o),u))}var dt=c(9386),mt=c(84457),ht=c(47891),pt=c(81764),ft=c(8944),gt=c(67254);class vt extends e.PureComponent{constructor(a){super(a),this.onRelativeTimeChange=s=>{this.setState({timeRangeFrom:s.target.value})},this.onTimeShiftChange=s=>{this.setState({timeRangeShift:s.target.value})},this.onOverrideTime=s=>{const{options:r,onChange:o}=this.props,i=K(s.target.value),u=ve(i);u&&r.timeRange?.from!==i&&o({...r,timeRange:{...r.timeRange??{},from:i}}),this.setState({relativeTimeIsValid:u})},this.onTimeShift=s=>{const{options:r,onChange:o}=this.props,i=K(s.target.value),u=ve(i);u&&r.timeRange?.shift!==i&&o({...r,timeRange:{...r.timeRange??{},shift:i}}),this.setState({timeShiftIsValid:u})},this.onToggleTimeOverride=()=>{const{onChange:s,options:r}=this.props;this.setState({timeRangeHide:!this.state.timeRangeHide},()=>{s({...r,timeRange:{...r.timeRange??{},hide:this.state.timeRangeHide}})})},this.onCacheTimeoutBlur=s=>{const{options:r,onChange:o}=this.props;o({...r,cacheTimeout:K(s.target.value)})},this.onQueryCachingTTLBlur=s=>{const{options:r,onChange:o}=this.props;let i=parseInt(s.target.value,10);(isNaN(i)||i===0)&&(i=null),o({...r,queryCachingTTL:i})},this.onMaxDataPointsBlur=s=>{const{options:r,onChange:o}=this.props;let i=parseInt(s.target.value,10);(isNaN(i)||i===0)&&(i=null),i!==r.maxDataPoints&&o({...r,maxDataPoints:i})},this.onMinIntervalBlur=s=>{const{options:r,onChange:o}=this.props,i=K(s.target.value);i!==r.minInterval&&o({...r,minInterval:i})},this.onOpenOptions=()=>{this.setState({isOpen:!0})},this.onCloseOptions=()=>{this.setState({isOpen:!1})};const{options:n}=a;this.state={timeRangeFrom:n.timeRange?.from||"",timeRangeShift:n.timeRange?.shift||"",timeRangeHide:n.timeRange?.hide??!1,isOpen:!1,relativeTimeIsValid:!0,timeShiftIsValid:!0}}renderCacheTimeoutOption(){const{dataSource:a,options:n}=this.props,s=`If your time series store has a query cache this option can override the default cache timeout. Specify a
    numeric value in seconds.`;return a.meta.queryOptions?.cacheTimeout?e.createElement("div",{className:"gf-form-inline"},e.createElement("div",{className:"gf-form"},e.createElement(d.c,{width:9,tooltip:s},"Cache timeout"),e.createElement(A.I,{type:"text",className:"width-6",placeholder:"60",spellCheck:!1,onBlur:this.onCacheTimeoutBlur,defaultValue:n.cacheTimeout??""}))):null}renderQueryCachingTTLOption(){const{dataSource:a,options:n}=this.props,s="Cache time-to-live: How long results from this queries in this panel will be cached, in milliseconds. Defaults to the TTL in the caching configuration for this datasource.";return a.cachingConfig?.enabled?e.createElement("div",{className:"gf-form-inline"},e.createElement("div",{className:"gf-form"},e.createElement(d.c,{width:9,tooltip:s},"Cache TTL"),e.createElement(A.I,{type:"number",className:"width-6",placeholder:`${a.cachingConfig.TTLMs}`,spellCheck:!1,onBlur:this.onQueryCachingTTLBlur,defaultValue:n.queryCachingTTL??void 0}))):null}renderMaxDataPointsOption(){const{data:a,options:n}=this.props,s=a.request?.maxDataPoints,r=n.maxDataPoints??"",o=r==="";return e.createElement("div",{className:"gf-form-inline"},e.createElement("div",{className:"gf-form"},e.createElement(d.c,{width:9,tooltip:e.createElement(e.Fragment,null,"The maximum data points per series. Used directly by some data sources and used in calculation of auto interval. With streaming data this value is used for the rolling buffer.")},"Max data points"),e.createElement(A.I,{type:"number",className:"width-6",placeholder:`${s}`,spellCheck:!1,onBlur:this.onMaxDataPointsBlur,defaultValue:r}),o&&e.createElement(e.Fragment,null,e.createElement("div",{className:"gf-form-label query-segment-operator"},"="),e.createElement("div",{className:"gf-form-label"},"Width of panel"))))}renderIntervalOption(){const{data:a,dataSource:n,options:s}=this.props,r=a.request?.interval,o=n.interval??"No limit";return e.createElement(e.Fragment,null,e.createElement("div",{className:"gf-form-inline"},e.createElement("div",{className:"gf-form"},e.createElement(d.c,{width:9,tooltip:e.createElement(e.Fragment,null,"A lower limit for the interval. Recommended to be set to write frequency, for example ",e.createElement("code",null,"1m")," ","if your data is written every minute. Default value can be set in data source settings for most data sources.")},"Min interval"),e.createElement(A.I,{type:"text",className:"width-6",placeholder:`${o}`,spellCheck:!1,onBlur:this.onMinIntervalBlur,defaultValue:s.minInterval??""}))),e.createElement("div",{className:"gf-form-inline"},e.createElement("div",{className:"gf-form"},e.createElement(d.c,{width:9,tooltip:e.createElement(e.Fragment,null,"The evaluated interval that is sent to data source and is used in ",e.createElement("code",null,"$__interval")," and"," ",e.createElement("code",null,"$__interval_ms"))},"Interval"),e.createElement(d.c,{width:6},r),e.createElement("div",{className:"gf-form-label query-segment-operator"},"="),e.createElement("div",{className:"gf-form-label"},"Time range / max data points"))))}renderCollapsedText(a){const{data:n,options:s}=this.props,{isOpen:r}=this.state;if(r)return;let o=s.maxDataPoints??"";o===""&&n.request&&(o=`auto = ${n.request.maxDataPoints}`);let i=s.minInterval;return n.request&&(i=`${n.request.interval}`),e.createElement(e.Fragment,null,e.createElement("div",{className:a.collapsedText},"MD = ",o),e.createElement("div",{className:a.collapsedText},"Interval = ",i))}render(){const{timeRangeHide:a,relativeTimeIsValid:n,timeShiftIsValid:s}=this.state,{timeRangeFrom:r,timeRangeShift:o,isOpen:i}=this.state,u=St();return e.createElement(gt.t,{id:"Query options",index:0,title:"Query options",headerElement:this.renderCollapsedText(u),isOpen:i,onOpen:this.onOpenOptions,onClose:this.onCloseOptions},this.renderMaxDataPointsOption(),this.renderIntervalOption(),this.renderCacheTimeoutOption(),this.renderQueryCachingTTLOption(),e.createElement("div",{className:"gf-form"},e.createElement(d.c,{width:9},"Relative time"),e.createElement(A.I,{type:"text",className:"width-6",placeholder:"1h",onChange:this.onRelativeTimeChange,onBlur:this.onOverrideTime,invalid:!n,value:r})),e.createElement("div",{className:"gf-form"},e.createElement("span",{className:"gf-form-label width-9"},"Time shift"),e.createElement(A.I,{type:"text",className:"width-6",placeholder:"1h",onChange:this.onTimeShiftChange,onBlur:this.onTimeShift,invalid:!s,value:o})),(o||r)&&e.createElement("div",{className:"gf-form-inline"},e.createElement(pt._,{label:"Hide time info",labelWidth:18},e.createElement(ft.r,{value:a,onChange:this.onToggleTimeOverride}))))}}const ve=t=>t?ht.isValidTimeSpan(t):!0,K=t=>t===""?null:t,St=(0,U.B)(()=>{const{theme:t}=N.vc;return{collapsedText:l.css`
      margin-left: ${t.spacing.md};
      font-size: ${t.typography.size.sm};
      color: ${t.colors.textWeak};
    `}});class Et extends e.PureComponent{constructor(){super(...arguments),this.backendSrv=be.ae,this.dataSourceSrv=(0,g.F)(),this.querySubscription=null,this.state={isDataSourceModalOpen:!!O.E1.getSearchObject().firstPanel,isLoadingHelp:!1,helpContent:null,isPickerOpen:!1,isAddingMixed:!1,isHelpOpen:!1,queries:[],data:{state:Z.Gu.NotStarted,series:[],timeRange:(0,Y.JK)()}},this.onChangeDataSource=async a=>{const{dsSettings:n}=this.state,s=n?await(0,g.F)().get(n.uid):void 0,r=await(0,g.F)().get(a.uid),o=await ut(r,a.uid,this.state.queries,s),i=await this.dataSourceSrv.get(a.name);this.onChange({queries:o,dataSource:{name:a.name,uid:a.uid,type:a.meta.id,default:a.isDefault}}),this.setState({queries:o,dataSource:i,dsSettings:a})},this.onAddQueryClick=()=>{const{queries:a}=this.state;this.onQueriesChange((0,H.DI)(a,this.newQuery())),this.onScrollBottom()},this.onAddExpressionClick=()=>{this.onQueriesChange((0,H.DI)(this.state.queries,ct.mV.newQuery())),this.onScrollBottom()},this.onScrollBottom=()=>{setTimeout(()=>{this.state.scrollElement&&this.state.scrollElement.scrollTo({top:1e4})},20)},this.onUpdateAndRun=a=>{this.props.onOptionsChange(a),this.props.onRunQueries()},this.onOpenHelp=()=>{this.setState({isHelpOpen:!0})},this.onCloseHelp=()=>{this.setState({isHelpOpen:!1})},this.onCloseDataSourceModal=()=>{this.setState({isDataSourceModalOpen:!1})},this.renderMixedPicker=()=>e.createElement(pe,{mixed:!1,onChange:this.onAddMixedQuery,current:null,autoFocus:!0,variables:!0,onBlur:this.onMixedPickerBlur,openMenuOnFocus:!0}),this.renderDataSourcePickerWithPrompt=()=>{const{isDataSourceModalOpen:a}=this.state,n={enableFileUpload:N.ZP.featureToggles.editPanelCSVDragAndDrop,fileUploadOptions:{onDrop:this.onFileDrop,maxSize:M.dg,multiple:!1,accept:M.DK},current:this.props.options.dataSource,onChange:s=>{this.onChangeDataSource(s),this.onCloseDataSourceModal()}};return e.createElement(e.Fragment,null,a&&N.ZP.featureToggles.advancedDataSourcePicker&&e.createElement(ue,{...n,onDismiss:this.onCloseDataSourceModal}),e.createElement(pe,{...n,metrics:!0,mixed:!0,dashboard:!0,variables:!0,onClickAddCSV:this.onClickAddCSV}))},this.onAddMixedQuery=a=>{this.onAddQuery({datasource:a.name}),this.setState({isAddingMixed:!1})},this.onMixedPickerBlur=()=>{this.setState({isAddingMixed:!1})},this.onAddQuery=a=>{const{dsSettings:n,queries:s}=this.state;this.onQueriesChange((0,H.DI)(s,a,{type:n?.type,uid:n?.uid})),this.onScrollBottom()},this.onClickAddCSV=async()=>{const a=(0,g.F)().getInstanceSettings("-- Grafana --");await this.onChangeDataSource(a),this.onQueriesChange([{refId:"A",datasource:{type:"grafana",uid:"grafana"},queryType:fe.hR.Snapshot,snapshot:[]}]),this.props.onRunQueries()},this.onFileDrop=(a,n,s)=>{M.eM(a).subscribe(async r=>{const o=[];r.dataFrames.forEach(u=>{const f=(0,J.Y)(u);o.push(f)});const i=(0,g.F)().getInstanceSettings("-- Grafana --");await this.onChangeDataSource(i),this.onQueriesChange([{refId:"A",datasource:{type:"grafana",uid:"grafana"},queryType:fe.hR.Snapshot,snapshot:o,file:r.file}]),this.props.onRunQueries()})},this.onQueriesChange=a=>{this.onChange({queries:a}),this.setState({queries:a})},this.setScrollRef=a=>{this.setState({scrollElement:a})}}async componentDidMount(){const{options:a,queryRunner:n}=this.props;this.querySubscription=n.getData({withTransforms:!1,withFieldConfig:!1}).subscribe({next:s=>this.onPanelDataUpdate(s)}),this.setNewQueriesAndDatasource(a),O.E1.getSearchObject().firstPanel&&O.E1.partial({firstPanel:null},!0)}componentWillUnmount(){this.querySubscription&&(this.querySubscription.unsubscribe(),this.querySubscription=null)}async componentDidUpdate(){const{options:a}=this.props,n=await(0,g.F)().get(a.dataSource);this.state.dataSource&&n.uid!==this.state.dataSource?.uid&&this.setNewQueriesAndDatasource(a)}async setNewQueriesAndDatasource(a){try{const n=await this.dataSourceSrv.get(a.dataSource),s=this.dataSourceSrv.getInstanceSettings(a.dataSource),r=await this.dataSourceSrv.get(),o=n.getRef(),i=a.queries.map(u=>({...(0,H.vH)(u)&&n?.getDefaultQuery?.(k.zj.PanelEditor),datasource:o,...u}));this.setState({queries:i,dataSource:n,dsSettings:s,defaultDataSource:r})}catch(n){console.log("failed to load data source",n)}}onPanelDataUpdate(a){this.setState({data:a})}newQuery(){const{dsSettings:a,defaultDataSource:n}=this.state,s=a?.meta.mixed?n:a;return{...this.state.dataSource?.getDefaultQuery?.(k.zj.PanelEditor),datasource:{uid:s?.uid,type:s?.type}}}onChange(a){this.props.onOptionsChange({...this.props.options,...a})}renderTopSection(a){const{onOpenQueryInspector:n,options:s}=this.props,{dataSource:r,data:o}=this.state;return e.createElement("div",null,e.createElement("div",{className:a.dataSourceRow},e.createElement(d.c,{htmlFor:"data-source-picker",width:"auto"},"Data source"),e.createElement("div",{className:a.dataSourceRowItem},this.renderDataSourcePickerWithPrompt()),r&&e.createElement(e.Fragment,null,e.createElement("div",{className:a.dataSourceRowItem},e.createElement(x.zx,{variant:"secondary",icon:"question-circle",title:"Open data source help",onClick:this.onOpenHelp,"data-testid":"query-tab-help-button"})),e.createElement("div",{className:a.dataSourceRowItemOptions},e.createElement(vt,{options:s,dataSource:r,data:o,onChange:this.onUpdateAndRun})),n&&e.createElement("div",{className:a.dataSourceRowItem},e.createElement(x.zx,{variant:"secondary",onClick:n,"aria-label":y.wl.components.QueryTab.queryInspectorButton},"Query inspector")))))}renderQueries(a){const{onRunQueries:n}=this.props,{data:s,queries:r}=this.state;return(0,_.yl)(a.name)?e.createElement(_.hD,{queries:r,panelData:s,onChange:this.onQueriesChange,onRunQueries:n}):e.createElement("div",{"aria-label":y.wl.components.QueryTab.content},e.createElement(mt.l,{queries:r,dsSettings:a,onQueriesChange:this.onQueriesChange,onAddQuery:this.onAddQuery,onRunQueries:n,data:s}))}isExpressionsSupported(a){return(a.meta.alerting||a.meta.mixed)===!0}renderExtraActions(){return dt.S.getAllExtraRenderAction().map((a,n)=>a({onAddQuery:this.onAddQuery,onChangeDataSource:this.onChangeDataSource,key:n})).filter(Boolean)}renderAddQueryRow(a,n){const{isAddingMixed:s}=this.state,r=!(s||(0,_.yl)(a.name));return e.createElement(I.Lh,{spacing:"md",align:"flex-start"},r&&e.createElement(x.zx,{icon:"plus",onClick:this.onAddQueryClick,variant:"secondary","aria-label":y.wl.components.QueryTab.addQuery,"data-testid":"query-tab-add-query"},"Query"),N.ZP.expressionsEnabled&&this.isExpressionsSupported(a)&&e.createElement(x.zx,{icon:"plus",onClick:this.onAddExpressionClick,variant:"secondary",className:n.expressionButton,"data-testid":"query-tab-add-expression"},e.createElement("span",null,"Expression\xA0")),this.renderExtraActions())}render(){const{isHelpOpen:a,dsSettings:n}=this.state,s=yt();return e.createElement(w.$,{autoHeightMin:"100%",scrollRefCallback:this.setScrollRef},e.createElement("div",{className:s.innerWrapper},this.renderTopSection(s),n&&e.createElement(e.Fragment,null,e.createElement("div",{className:s.queriesWrapper},this.renderQueries(n)),this.renderAddQueryRow(n,s),a&&e.createElement(B.u,{title:"Data source help",isOpen:!0,onDismiss:this.onCloseHelp},e.createElement(xe,{pluginId:n.meta.id})))))}}const yt=(0,U.B)(()=>{const{theme:t}=N.ZP;return{innerWrapper:l.css`
      display: flex;
      flex-direction: column;
      padding: ${t.spacing.md};
    `,dataSourceRow:l.css`
      display: flex;
      margin-bottom: ${t.spacing.md};
    `,dataSourceRowItem:l.css`
      margin-right: ${t.spacing.inlineFormMargin};
    `,dataSourceRowItemOptions:l.css`
      flex-grow: 1;
      margin-right: ${t.spacing.inlineFormMargin};
    `,queriesWrapper:l.css`
      padding-bottom: 16px;
    `,expressionWrapper:l.css``,expressionButton:l.css`
      margin-right: ${t.spacing.sm};
    `}})},54350:(ye,j,c)=>{c.d(j,{A:()=>J,v:()=>k});var l=c(66111),e=c(91017),Z=c(72196),Y=c(37932);function J(){const y=(0,l.useRef)(new e.x);return{keyboardEvents:y.current,onKeyDown:g=>{switch(g.code){case"ArrowDown":case"ArrowUp":case"ArrowLeft":case"ArrowRight":case"Enter":y.current.next(g);default:}}}}function k(y,g,O){const d=(0,l.useRef)({x:0,y:-1}),[x,I]=(0,l.useState)({x:0,y:-1}),w=(0,l.useRef)();return(0,l.useEffect)(()=>{w.current=O.view.fields.url,d.current.x=0,d.current.y=-1,I({...d.current})},[O]),(0,l.useEffect)(()=>{const B=y.subscribe({next:U=>{switch(U?.code){case"ArrowDown":{d.current.y++,I({...d.current});break}case"ArrowUp":d.current.y=Math.max(0,d.current.y-1),I({...d.current});break;case"ArrowRight":{g>0&&(d.current.x=Math.min(g,d.current.x+1),I({...d.current}));break}case"ArrowLeft":{g>0&&(d.current.x=Math.max(0,d.current.x-1),I({...d.current}));break}case"Enter":if(!w.current)break;const V=d.current.x*g+d.current.y;if(V<0){d.current.x=0,d.current.y=0,I({...d.current});break}const W=w.current.values?.[V];W&&Y.E1.push(Z.u.stripBaseFromUrl(W))}}});return()=>B.unsubscribe()},[y,g]),x}}}]);

//# sourceMappingURL=1579.8f4c08aaa412c20956c4.js.map