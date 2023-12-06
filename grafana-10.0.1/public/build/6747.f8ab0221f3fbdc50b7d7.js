"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6747],{44034:(Q,V,r)=>{r.d(V,{Z:()=>L});var o=r(66111),t=r(39904),b=r(31403);function p({dashboards:x,onImport:E,onRemove:C}){function D(f){return f.revision!==f.importedRevision?"Update":"Re-import"}return o.createElement("table",{className:"filter-table"},o.createElement("tbody",null,x.map((f,W)=>o.createElement("tr",{key:`${f.dashboardId}-${W}`},o.createElement("td",{className:"width-1"},o.createElement(t.J,{name:"apps"})),o.createElement("td",null,f.imported?o.createElement("a",{href:f.importedUrl},f.title):o.createElement("span",null,f.title)),o.createElement("td",{style:{textAlign:"right"}},f.imported?o.createElement(b.zx,{variant:"secondary",size:"sm",onClick:()=>E(f,!0)},D(f)):o.createElement(b.zx,{variant:"secondary",size:"sm",onClick:()=>E(f,!1)},"Import"),f.imported&&o.createElement(b.zx,{"aria-label":"Delete dashboard",icon:"trash-alt",variant:"destructive",size:"sm",onClick:()=>C(f)}))))))}const L=p},75260:(Q,V,r)=>{r.d(V,{SX:()=>p,IF:()=>Z,oZ:()=>D,xh:()=>j});var o=r(66111),t=r(59250),b=r(19985);function p({error:u}){const A=L(u);return o.createElement(b.C,{icon:"exclamation-triangle",text:"Disabled",color:"red",tooltip:A})}function L(u){switch(u){case t.w2.modifiedSignature:return"Plugin disabled due to modified content";case t.w2.invalidSignature:return"Plugin disabled due to invalid plugin signature";case t.w2.missingSignature:return"Plugin disabled due to missing plugin signature";case null:case void 0:return"Plugin disabled";default:return`Plugin disabled due to unknown error${u?`: ${u}`:""}`}}var x=r(72648),E=r(9892);const C=u=>E.css`
  background: ${u.colors.background.primary};
  border-color: ${u.colors.border.strong};
  color: ${u.colors.text.secondary};
`;function D(){const u=(0,x.wW)(C);return o.createElement(b.C,{text:"Installed",color:"orange",className:u})}var f=r(66121),W=r(52081),H=r(51613),N=r(31403);function Z({plugin:u}){const A=(0,x.wW)(C),i=T=>{T.preventDefault(),window.open(`https://grafana.com/grafana/plugins/${u.id}?utm_source=grafana_catalog_learn_more`,"_blank","noopener,noreferrer")};return(0,f.v)("enterprise.plugins")?o.createElement(b.C,{text:"Enterprise",color:"blue"}):o.createElement(W.Lh,null,o.createElement(H.o,{status:u.signature}),o.createElement(b.C,{icon:"lock","aria-label":"lock icon",text:"Enterprise",color:"blue",className:A}),o.createElement(N.zx,{size:"sm",fill:"text",icon:"external-link-alt",onClick:i},"Learn more"))}function j({plugin:u}){const A=(0,x.wW)(F);return u.hasUpdate&&!u.isCore&&u.type!==t.zV.renderer?o.createElement("p",{className:A.hasUpdate},"Update available!"):null}const F=u=>({hasUpdate:E.css`
      color: ${u.colors.text.secondary};
      font-size: ${u.typography.bodySmall.fontSize};
      margin-bottom: 0;
    `})},56747:(Q,V,r)=>{r.d(V,{Q:()=>rt});var o=r(9892),t=r(66111),b=r(56895),p=r(72648),L=r(94893),x=r(45253),E=r(52081),C=r(8412),D=r(27876),f=r(43714),W=r(75363),H=r(77258),N=r(59210);const Z=({versions:e=[],installedVersion:a})=>{const n=(0,p.wW)(j),s=(0,N.RU)(e);return e.length===0?t.createElement("p",null,"No version history was found."):t.createElement("table",{className:n.table},t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",null,"Version"),t.createElement("th",null,"Last updated"))),t.createElement("tbody",null,e.map(l=>{const c=a===l.version;return t.createElement("tr",{key:l.version},c?t.createElement("td",{className:n.currentVersion},l.version," (installed version)"):l.version===s?.version?t.createElement("td",null,l.version," (latest compatible version)"):t.createElement("td",null,l.version),t.createElement("td",{className:c?n.currentVersion:""},(0,H.E8)(l.createdAt)))})))},j=e=>({container:o.css`
    padding: ${e.spacing(2,4,3)};
  `,table:o.css`
    table-layout: fixed;
    width: 100%;
    td,
    th {
      padding: ${e.spacing()} 0;
    }
    th {
      font-size: ${e.typography.h5.fontSize};
    }
  `,currentVersion:o.css`
    font-weight: ${e.typography.fontWeightBold};
  `});var F=r(59679),u=r(55111);const A=e=>(0,F.Z)(async()=>e&&e.isInstalled&&!e.isDisabled?(0,u.O)(e.id):null,[e?.id,e?.isInstalled,e?.isDisabled]);var i=r(48996),T=r(82897),ie=r(55024),z=r(54899),oe=r(11484),v=r(31403);class ce extends t.PureComponent{constructor(a){super(a),this.element=null,this.preUpdateHook=()=>Promise.resolve(),this.postUpdateHook=()=>Promise.resolve(),this.update=()=>{const n=this.model.id;this.preUpdateHook().then(()=>{const s=(0,T.extend)({enabled:this.model.enabled,pinned:this.model.pinned,jsonData:this.model.jsonData,secureJsonData:this.model.secureJsonData},{});return(0,z.i)().post(`/api/plugins/${n}/settings`,s)}).then(this.postUpdateHook).then(s=>{window.location.href=window.location.href})},this.setPreUpdateHook=n=>{this.preUpdateHook=n},this.setPostUpdateHook=n=>{this.postUpdateHook=n},this.importDashboards=()=>((0,ie.d)("AppConfig","importDashboards()"),Promise.resolve()),this.enable=()=>{this.model.enabled=!0,this.model.pinned=!0,this.update()},this.disable=()=>{this.model.enabled=!1,this.model.pinned=!1,this.update()},this.state={angularCtrl:null,refresh:0}}componentDidMount(){setTimeout(()=>{this.setState({refresh:this.state.refresh+1})},5)}componentDidUpdate(a){if(!this.element||this.state.angularCtrl)return;this.model=(0,T.cloneDeep)(this.props.app.meta);const n=(0,oe.w)(),s='<plugin-component type="app-config-ctrl"></plugin-component>',l={ctrl:this,isAppConfigCtrl:!0},c=n.load(this.element,l,s);this.setState({angularCtrl:c})}render(){const a=this.model,n=(0,o.css)({marginRight:"8px"});return t.createElement("div",null,t.createElement("div",{ref:s=>this.element=s}),t.createElement("br",null),t.createElement("br",null),a&&t.createElement("div",{className:"gf-form"},!a.enabled&&t.createElement(v.zx,{variant:"primary",onClick:this.enable,className:n},"Enable"),a.enabled&&t.createElement(v.zx,{variant:"primary",onClick:this.update,className:n},"Update"),a.enabled&&t.createElement(v.zx,{variant:"destructive",onClick:this.disable,className:n},"Disable")))}}var M=r(4063),R=r(77582),de=r(44034);class ue extends t.PureComponent{constructor(a){super(a),this.importAll=()=>{this.importNext(0)},this.importNext=n=>{const{dashboards:s}=this.state;return this.import(s[n],!0).then(()=>n+1<s.length?new Promise(l=>{setTimeout(()=>{this.importNext(n+1).then(()=>{l()})},500)}):Promise.resolve())},this.import=(n,s)=>{const{plugin:l,datasource:c}=this.props,d={pluginId:l.id,path:n.path,overwrite:s,inputs:[]};return c&&d.inputs.push({name:"*",type:"datasource",pluginId:c.meta.id,value:c.name}),(0,z.i)().post("/api/dashboards/import",d).then(g=>{R.h$.emit(M.SI.alertSuccess,["Dashboard Imported",n.title]),(0,T.extend)(n,g),this.setState({dashboards:[...this.state.dashboards]})})},this.remove=n=>{(0,z.i)().delete("/api/dashboards/uid/"+n.uid).then(()=>{n.imported=!1,this.setState({dashboards:[...this.state.dashboards]})})},this.state={loading:!0,dashboards:[]}}async componentDidMount(){const a=this.props.plugin.id;(0,z.i)().get(`/api/plugins/${a}/dashboards`).then(n=>{this.setState({dashboards:n,loading:!1})})}render(){const{loading:a,dashboards:n}=this.state;return a?t.createElement("div",null,"loading..."):!n||!n.length?t.createElement("div",null,"No dashboards are included with this plugin"):t.createElement("div",{className:"gf-form-group"},t.createElement(de.Z,{dashboards:n,onImport:this.import,onRemove:this.remove}))}}var me=r(89050),ge=r(59980),k=r(35645),fe=r(67487),he=r(69142),pe=r(16526),ve=r(82e3);function Ee({plugin:e}){const a=(0,p.wW)(ye),n=(0,t.useMemo)(()=>({query:"*",panel_type:e.id,kind:["panel"]}),[e]),s=(0,F.Z)(()=>(0,ve.getGrafanaSearcher)().search(n),[n]),l=s.value;return l?.totalRows?t.createElement("div",{className:a.wrap},t.createElement("div",{className:a.info},e.name," is used ",t.createElement("b",null,l.totalRows)," times."),t.createElement(me.Z,null,({width:c,height:d})=>t.createElement(pe.Q,{response:l,width:c,height:d,clearSelection:()=>{},keyboardEvents:(0,ge.of)(),onTagSelected:()=>{}}))):s.loading?t.createElement(fe.$,null):k.v.featureToggles.panelTitleSearch?t.createElement(he.Z,{title:`${e.name} is not used in any dashboards yet`,buttonIcon:"plus",buttonTitle:"Create Dashboard",buttonLink:`dashboard/new?panelType=${e.id}&editPanel=1`}):t.createElement(x.b,{title:"Missing feature toggle: panelTitleSearch"},"Plugin usage requires the new search index to find usage across dashboards")}const ye=e=>({wrap:o.css`
      width: 100%;
      height: 100%;
    `,info:o.css`
      padding-bottom: 30px;
    `});function be({plugin:e,queryParams:a,pageId:n}){const s=(0,p.wW)(Pe),{value:l}=A(e);if(n===i.tu.OVERVIEW)return t.createElement("div",{className:(0,o.cx)(s.readme,s.container),dangerouslySetInnerHTML:{__html:e.details?.readme??"No plugin help or readme markdown file was found"}});if(n===i.tu.VERSIONS)return t.createElement("div",{className:s.container},t.createElement(Z,{versions:e.details?.versions,installedVersion:e.installedVersion}));if(n===i.tu.CONFIG&&l?.angularConfigCtrl)return t.createElement("div",{className:s.container},t.createElement(ce,{app:l}));if(l?.configPages){for(const c of l.configPages)if(n===c.id)return t.createElement("div",{className:s.container},t.createElement(W.b,{meta:l.meta},t.createElement(c.body,{plugin:l,query:a})))}return n===i.tu.USAGE&&l?t.createElement("div",{className:s.container},t.createElement(Ee,{plugin:l?.meta})):n===i.tu.DASHBOARDS&&l?t.createElement("div",{className:s.container},t.createElement(ue,{plugin:l?.meta})):t.createElement("div",{className:s.container},t.createElement("p",null,"Page not found."))}const Pe=e=>({container:o.css``,readme:o.css`
    & img {
      max-width: 100%;
    }

    h1,
    h2,
    h3 {
      margin-top: ${e.spacing(3)};
      margin-bottom: ${e.spacing(2)};
    }

    *:first-child {
      margin-top: 0;
    }

    li {
      margin-left: ${e.spacing(2)};
      & > p {
        margin: ${e.spacing()} 0;
      }
    }

    a {
      color: ${e.colors.text.link};

      &:hover {
        color: ${e.colors.text.link};
        text-decoration: underline;
      }
    }

    table {
      table-layout: fixed;
      width: 100%;

      td,
      th {
        overflow-x: auto;
        padding: ${e.spacing(.5)} ${e.spacing(1)};
      }

      table,
      th,
      td {
        border: 1px solid ${e.colors.border.medium};
        border-collapse: collapse;
      }
    }
  `});var m=r(59250),X=r(68183);function Se({className:e,plugin:a}){return a.isDisabled?t.createElement(x.b,{severity:"error",title:"Plugin disabled",className:e,"aria-label":X.wl.pages.PluginPage.disabledInfo},xe(a.error),t.createElement("p",null,"Please contact your server administrator to get this resolved."),t.createElement("a",{href:"https://grafana.com/docs/grafana/latest/administration/cli/#plugins-commands",className:"external-link",target:"_blank",rel:"noreferrer"},"Read more about managing plugins")):null}function xe(e){switch(e){case m.w2.modifiedSignature:return t.createElement("p",null,"Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that the content of this plugin does not match its signature. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin.");case m.w2.invalidSignature:return t.createElement("p",null,"Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that it was invalid. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin.");case m.w2.missingSignature:return t.createElement("p",null,"Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that there is no signature for this plugin. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin.");default:return t.createElement("p",null,"We failed to run this plugin due to an unkown reason and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a working version of this plugin.")}}function De({className:e,plugin:a}){const n=a.signature===m.Xy.valid,s=a.signature===m.Xy.internal,l=a.isDisabled&&Ne(a.error);return n||s||l?null:t.createElement(x.b,{severity:"warning",title:"Invalid plugin signature","aria-label":X.wl.pages.PluginPage.signatureInfo,className:e},t.createElement("p",null,"Grafana Labs checks each plugin to verify that it has a valid digital signature. Plugin signature verification is part of our security measures to ensure plugins are safe and trustworthy. Grafana Labs can\u2019t guarantee the integrity of this unsigned plugin. Ask the plugin author to request it to be signed."),t.createElement("a",{href:"https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",className:"external-link",target:"_blank",rel:"noreferrer"},"Read more about plugins signing."))}function Ne(e){switch(e){case m.w2.invalidSignature:case m.w2.missingSignature:case m.w2.modifiedSignature:return!0;default:return!1}}var w=r(84532);const Ie=(e,a)=>{const{loading:n,error:s,value:l}=A(e),{pathname:c}=(0,b.TH)(),d=Ce(e,l),g=c.substring(0,c.lastIndexOf("/")),I=Boolean(e?.isPublished),h=a||d,B=(0,t.useMemo)(()=>{const O=e&&R.Vt.hasAccessInMetadata(D.AccessControlAction.PluginsWrite,e,(0,w.RN)()),S=[];if(I&&S.push({text:i.xc.VERSIONS,id:i.tu.VERSIONS,icon:"history",url:`${c}?page=${i.tu.VERSIONS}`,active:i.tu.VERSIONS===h}),!l||(k.v.featureToggles.panelTitleSearch&&l.meta.type===m.zV.panel&&S.push({text:i.xc.USAGE,icon:"list-ul",id:i.tu.USAGE,url:`${c}?page=${i.tu.USAGE}`,active:i.tu.USAGE===h}),!O))return S;if(l.meta.type===m.zV.app){if(l.angularConfigCtrl&&S.push({text:"Config",icon:"cog",id:i.tu.CONFIG,url:`${c}?page=${i.tu.CONFIG}`,active:i.tu.CONFIG===h}),l.configPages)for(const y of l.configPages)S.push({text:y.title,icon:y.icon,id:y.id,url:`${c}?page=${y.id}`,active:y.id===h});l.meta.includes?.find(y=>y.type===m.$_.dashboard)&&S.push({text:"Dashboards",icon:"apps",id:i.tu.DASHBOARDS,url:`${c}?page=${i.tu.DASHBOARDS}`,active:i.tu.DASHBOARDS===h})}return S},[e,l,c,I,h]),$={text:e?.name??"",img:e?.info.logos.small,breadcrumbs:[{title:"Plugins",url:g}],children:[{text:i.xc.OVERVIEW,icon:"file-alt",id:i.tu.OVERVIEW,url:`${c}?page=${i.tu.OVERVIEW}`,active:i.tu.OVERVIEW===h},...B]};return{error:s,loading:n,navModel:$,activePageId:h}};function Ce(e,a){return!e||!a||!R.Vt.hasAccessInMetadata(D.AccessControlAction.PluginsWrite,e,(0,w.RN)())||a.meta.type!==m.zV.app?i.tu.OVERVIEW:a.angularConfigCtrl?i.tu.CONFIG:a.configPages?.length?a.configPages[0].id:i.tu.OVERVIEW}var U=r(39904),Ae=r(73354);function Te({plugin:e}){const{value:a}=A(e);if(!a||!R.Vt.hasAccessInMetadata(D.AccessControlAction.PluginsWrite,e,(0,w.RN)()))return null;const{enabled:n,jsonData:s}=a?.meta,l=()=>K(e.id,{enabled:!0,pinned:!0,jsonData:s}),c=()=>{K(e.id,{enabled:!1,pinned:!1,jsonData:s})};return t.createElement(t.Fragment,null,!n&&t.createElement(v.zx,{variant:"primary",onClick:l},"Enable"),n&&t.createElement(v.zx,{variant:"destructive",onClick:c},"Disable"))}const K=async(e,a)=>{try{await(0,Ae.P6)(e,a),window.location.reload()}catch(n){console.error("Error while updating the plugin",n)}};var Y=r(25e3);function Ue({plugin:e}){const a=(0,D.useDispatch)(),n=(0,Y.d7)(),s=(0,t.useCallback)(()=>{const l={name:e.name,id:e.id};a((0,Y.J_)(l,n.Edit))},[a,e,n]);return(0,w.Gg)()?t.createElement(v.zx,{variant:"primary",onClick:s},"Create a ",e.name," data source"):null}function $e({plugin:e}){if(!e.isInstalled||e.isDisabled)return null;switch(e.type){case m.zV.datasource:return t.createElement(Ue,{plugin:e});case m.zV.app:return t.createElement(Te,{plugin:e});default:return null}}var Ve=r(66121),P=r(74509);const Le=({plugin:e,pluginStatus:a,latestCompatibleVersion:n})=>{const s=(0,p.wW)(We),l=k.v.pluginAdminExternalManageEnabled,c=R.Vt.hasAccess(D.AccessControlAction.PluginsInstall,(0,w.bO)()),d=(0,P.y9)(),g=Boolean(n);return e.type===m.zV.renderer?t.createElement("div",{className:s.message},"Renderer plugins cannot be managed by the Plugin Catalog."):e.type===m.zV.secretsmanager?t.createElement("div",{className:s.message},"Secrets manager plugins cannot be managed by the Plugin Catalog."):e.isEnterprise&&!(0,Ve.v)("enterprise.plugins")?t.createElement(E.Lh,{height:"auto",align:"center"},t.createElement("span",{className:s.message},"No valid Grafana Enterprise license detected."),t.createElement(v.Qj,{href:`${(0,N.Uj)(e.id)}?utm_source=grafana_catalog_learn_more`,target:"_blank",rel:"noopener noreferrer",size:"sm",fill:"text",icon:"external-link-alt"},"Learn more")):e.isDev?t.createElement("div",{className:s.message},"This is a development build of the plugin and can't be uninstalled."):!c&&!l?t.createElement("div",{className:s.message},Re(a)):e.isPublished?g?d?null:t.createElement("div",{className:s.message},"The install controls have been disabled because the Grafana server cannot access grafana.com."):t.createElement("div",{className:s.message},t.createElement(U.J,{name:"exclamation-triangle"}),"\xA0This plugin doesn't support your version of Grafana."):t.createElement("div",{className:s.message},t.createElement(U.J,{name:"exclamation-triangle"})," This plugin is not published to"," ",t.createElement("a",{href:"https://www.grafana.com/plugins",target:"__blank",rel:"noreferrer"},"grafana.com/plugins")," ","and can't be managed via the catalog.")},We=e=>({message:o.css`
      color: ${e.colors.text.secondary};
    `});function Re(e){switch(e){case i.vF.INSTALL:case i.vF.REINSTALL:return"You do not have permission to install this plugin.";case i.vF.UNINSTALL:return"You do not have permission to uninstall this plugin.";case i.vF.UPDATE:return"You do not have permission to update this plugin.";default:return"You do not have permission to manage this plugin."}}var we=r(37932),Be=r(98102),J=r(18271),Oe=r(96044),Fe=r(61962),q=r(41818);const ze=e=>{(0,q.ff)("grafana_plugin_install_clicked",e)},Me=e=>{(0,q.ff)("grafana_plugin_uninstall_clicked",e)};function ke({plugin:e,pluginStatus:a,latestCompatibleVersion:n,setNeedReload:s}){const l=(0,D.useDispatch)(),[c]=(0,Oe.K)(),d=(0,b.TH)(),{isInstalling:g,error:I}=(0,P.IS)(),{isUninstalling:h,error:B}=(0,P.wq)(),$=(0,P.x3)(),O=(0,P.S1)(),S=(0,P.kH)(),[y,ne]=(0,t.useState)(!1),ot=()=>ne(!0),ae=()=>ne(!1),se=h?"Uninstalling":"Uninstall",re={plugin_id:e.id,plugin_type:e.type,path:d.pathname};(0,t.useEffect)(()=>()=>{S()},[]);const ct=async()=>{ze(re);const G=await $(e.id,n?.version);!I&&!("error"in G)&&(J.Z.emit(M.SI.alertSuccess,[`Installed ${e.name}`]),e.type==="app"&&s(!0))},le=async()=>{if(ae(),Me(re),await O(e.id),!B){const G=c.page;G!==i.tu.OVERVIEW&&G!==i.tu.VERSIONS&&we.E1.replace(`${d.pathname}?page=${i.tu.OVERVIEW}`),J.Z.emit(M.SI.alertSuccess,[`Uninstalled ${e.name}`]),e.type==="app"&&(l((0,Fe.Lk)({pluginID:e.id})),s(!1))}},dt=async()=>{await $(e.id,n?.version,!0),I||J.Z.emit(M.SI.alertSuccess,[`Updated ${e.name}`])};return a===i.vF.UNINSTALL?t.createElement(t.Fragment,null,t.createElement(Be.s,{isOpen:y,title:`Uninstall ${e.name}`,body:"Are you sure you want to uninstall this plugin?",confirmText:"Confirm",icon:"exclamation-triangle",onConfirm:le,onDismiss:ae}),t.createElement(E.Lh,{align:"flex-start",width:"auto",height:"auto"},t.createElement(v.zx,{variant:"destructive",disabled:h,onClick:ot},se))):a===i.vF.UPDATE?t.createElement(E.Lh,{align:"flex-start",width:"auto",height:"auto"},t.createElement(v.zx,{disabled:g,onClick:dt},g?"Updating":"Update"),t.createElement(v.zx,{variant:"destructive",disabled:h,onClick:le},se)):t.createElement(v.zx,{disabled:g||I,onClick:ct},g?"Installing":"Install")}function Ge({pluginId:e,pluginStatus:a}){const n=`${(0,N.Uj)(e)}/?tab=installation`;return a===i.vF.UPDATE?t.createElement(E.Lh,{height:"auto"},t.createElement(v.Qj,{href:n,target:"_blank",rel:"noopener noreferrer"},"Update via grafana.com"),t.createElement(v.Qj,{variant:"destructive",href:n,target:"_blank",rel:"noopener noreferrer"},"Uninstall via grafana.com")):a===i.vF.UNINSTALL?t.createElement(v.Qj,{variant:"destructive",href:n,target:"_blank",rel:"noopener noreferrer"},"Uninstall via grafana.com"):t.createElement(v.Qj,{href:n,target:"_blank",rel:"noopener noreferrer"},"Install via grafana.com")}const He=({plugin:e})=>{const a=(0,p.wW)(Ze),n=(0,P.y9)(),s=(0,N.RU)(e?.details?.versions),[l,c]=(0,t.useState)(!1);if(!e)return null;const d=(0,N.HT)(e,n,s),g=k.v.pluginAdminExternalManageEnabled,I=e.isInstalled?e.hasUpdate?i.vF.UPDATE:i.vF.UNINSTALL:i.vF.INSTALL,h=e.isCore||e.isDisabled||!(0,N.fG)()||d;return t.createElement(E.wc,null,t.createElement(E.Lh,null,!h&&t.createElement(t.Fragment,null,g?t.createElement(Ge,{pluginId:e.id,pluginStatus:I}):t.createElement(ke,{plugin:e,latestCompatibleVersion:s,pluginStatus:I,setNeedReload:c})),t.createElement($e,{plugin:e})),l&&t.createElement(E.Lh,null,t.createElement(U.J,{name:"exclamation-triangle"}),t.createElement("span",{className:a.message},"Refresh the page to see the changes")))},Ze=e=>({message:o.css`
      color: ${e.colors.text.secondary};
    `}),je=({plugin:e})=>{const a=(0,P.y9)(),n=(0,p.wW)(Je),{error:s}=(0,P.IS)();if(!e)return null;const l=(0,N.RU)(e.details?.versions),c=e.isInstalled?e.hasUpdate?i.vF.UPDATE:i.vF.UNINSTALL:i.vF.INSTALL;return t.createElement("div",{className:n.subtitle},s&&t.createElement(x.b,{title:"message"in s?s.message:""},typeof s=="string"?s:s.error),e?.description&&t.createElement("div",null,e?.description),e?.details?.links&&e.details.links.length>0&&t.createElement("span",null,e.details.links.map((d,g)=>t.createElement(t.Fragment,{key:g},g>0&&" | ",t.createElement("a",{href:d.url,className:"external-link"},d.name)))),(0,N.HT)(e,a,l)&&t.createElement(Le,{plugin:e,pluginStatus:c,latestCompatibleVersion:l}))},Je=e=>({subtitle:o.css`
      display: flex;
      flex-direction: column;
      gap: ${e.spacing(1)};
    `});var Qe=r(75260),Xe=r(26418);function Ke({plugin:e,latestCompatibleVersion:a,className:n}){const s=(0,p.wW)(Ye),l=e.details?.pluginDependencies,c=e.isInstalled?e.details?.grafanaDependency:a?.grafanaDependency||e.details?.grafanaDependency;return!c&&(!l||!l.length)?null:t.createElement(Xe.Stack,{gap:1},Boolean(c)&&t.createElement("div",{className:s.depBadge},t.createElement(U.J,{name:"grafana",className:s.icon}),"Grafana ",c),l&&l.length>0&&t.createElement("div",null,l.map(g=>t.createElement("span",{className:s.depBadge,key:g.name},t.createElement(U.J,{name:i.Co[g.type],className:s.icon}),g.name," ",g.version))))}const Ye=e=>({dependencyTitle:o.css`
      margin-right: ${e.spacing(.5)};

      &::after {
        content: '';
        padding: 0;
      }
    `,depBadge:(0,o.css)({display:"flex",alignItems:"flex-start"}),icon:o.css`
      color: ${e.colors.text.secondary};
      margin-right: ${e.spacing(.5)};
    `});var qe=r(51613),_e=r(19985);const _={[m._Z.grafana]:"grafana",[m._Z.commercial]:"shield",[m._Z.community]:"shield",DEFAULT:"shield-exclamation"};function et({signatureType:e,signatureOrg:a=""}){const n=(0,p.wW)(te);if(!e&&!a)return null;const s=e===m._Z.grafana?"Grafana Labs":(0,T.capitalize)(e),l=_[e||""]||_.DEFAULT;return t.createElement(t.Fragment,null,t.createElement(ee,null,t.createElement("div",{className:n.detailsWrapper},t.createElement("strong",{className:n.strong},"Level:\xA0"),t.createElement(U.J,{size:"xs",name:l}),"\xA0",s)),t.createElement(ee,null,t.createElement("strong",{className:n.strong},"Signed by:")," ",a))}const ee=({children:e})=>{const a=(0,p.wW)(te);return t.createElement(_e.C,{color:"green",className:a.badge,text:e})},te=e=>({badge:o.css`
    background-color: ${e.colors.background.canvas};
    border-color: ${e.colors.border.strong};
    color: ${e.colors.text.secondary};
    white-space: nowrap;
  `,detailsWrapper:o.css`
    align-items: center;
    display: flex;
  `,strong:o.css`
    color: ${e.colors.text.primary};
  `,icon:o.css`
    margin-right: ${e.spacing(.5)};
  `});function tt({plugin:e}){const a=(0,p.wW)(nt),n=e.signature===m.Xy.valid;return t.createElement("div",{className:a.container},t.createElement("a",{href:"https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",target:"_blank",rel:"noreferrer",className:a.link},t.createElement(qe.o,{status:e.signature})),n&&t.createElement(et,{signatureType:e.signatureType,signatureOrg:e.signatureOrg}))}const nt=e=>({container:o.css`
      display: flex;
      flex-wrap: wrap;
      gap: ${e.spacing(.5)};
    `,link:o.css`
      display: inline-flex;
      align-items: center;
    `}),at=e=>{const a=[];if(!e)return a;const n=(0,N.RU)(e.details?.versions),s=e.installedVersion||n?.version;Boolean(s)&&a.push({label:"Version",value:s}),Boolean(e.orgName)&&a.push({label:"From",value:e.orgName}),(!e.signatureType||e.signatureType===m._Z.community||e.signatureType===m._Z.commercial)&&Boolean(e.downloads>0)&&a.push({label:"Downloads",value:new Intl.NumberFormat().format(e.downloads)});const c=e.details?.pluginDependencies;return!(e.isInstalled?e.details?.grafanaDependency:n?.grafanaDependency||e.details?.grafanaDependency)&&(!c||!c.length)||a.push({label:"Dependencies",value:t.createElement(Ke,{plugin:e,latestCompatibleVersion:n})}),e.isDisabled&&a.push({label:"Status",value:t.createElement(Qe.SX,{error:e.error})}),a.push({label:"Signature",value:t.createElement(tt,{plugin:e})}),a},ut=e=>({subtitle:css`
      display: flex;
      flex-direction: column;
      gap: ${e.spacing(1)};
    `}),st=e=>{const a=at(e);return{actions:t.createElement(He,{plugin:e}),info:a,subtitle:t.createElement(je,{plugin:e})}};function rt({pluginId:e,navId:a="plugins",notFoundComponent:n=t.createElement(it,null),notFoundNavModel:s={text:"Unknown plugin",subTitle:"The requested ID does not belong to any plugin",active:!0}}){const l=(0,b.TH)(),c=new URLSearchParams(l.search),d=(0,P.bJ)(e),{navModel:g,activePageId:I}=Ie(d,c.get("page")),{actions:h,info:B,subtitle:$}=st(d),{isLoading:O}=(0,P.ZV)(),{isLoading:S}=(0,P.bt)(),y=(0,p.wW)(lt);return O||S?t.createElement(C.T,{navId:a,pageNav:{text:"",active:!0}},t.createElement(f.a,null)):d?t.createElement(C.T,{navId:a,pageNav:g,actions:h,subTitle:$,info:B},t.createElement(C.T.Contents,null,t.createElement(L.I,{className:y.tabContent},t.createElement(De,{plugin:d,className:y.alert}),t.createElement(Se,{plugin:d,className:y.alert}),t.createElement(be,{queryParams:Object.fromEntries(c),plugin:d,pageId:I})))):t.createElement(C.T,{navId:a,pageNav:s},n)}const lt=e=>({alert:o.css`
      margin-bottom: ${e.spacing(2)};
    `,subtitle:o.css`
      display: flex;
      flex-direction: column;
      gap: ${e.spacing(1)};
    `,tabContent:o.css`
      overflow: auto;
      height: 100%;
    `});function it(){return t.createElement(E.Ar,{justify:"center",align:"center"},t.createElement(x.b,{severity:D.AppNotificationSeverity.Warning,title:"Plugin not found"},"That plugin cannot be found. Please check the url is correct or ",t.createElement("br",null),"go to the ",t.createElement("a",{href:"/plugins"},"plugin catalog"),"."))}}}]);

//# sourceMappingURL=6747.f8ab0221f3fbdc50b7d7.js.map