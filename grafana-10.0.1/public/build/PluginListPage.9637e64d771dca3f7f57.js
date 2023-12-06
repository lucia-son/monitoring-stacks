"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[94],{75260:(w,E,a)=>{a.d(E,{SX:()=>x,IF:()=>D,oZ:()=>f,xh:()=>I});var l=a(66111),e=a(59250),u=a(19985);function x({error:n}){const m=B(n);return l.createElement(u.C,{icon:"exclamation-triangle",text:"Disabled",color:"red",tooltip:m})}function B(n){switch(n){case e.w2.modifiedSignature:return"Plugin disabled due to modified content";case e.w2.invalidSignature:return"Plugin disabled due to invalid plugin signature";case e.w2.missingSignature:return"Plugin disabled due to missing plugin signature";case null:case void 0:return"Plugin disabled";default:return`Plugin disabled due to unknown error${n?`: ${n}`:""}`}}var g=a(72648),c=a(9892);const y=n=>c.css`
  background: ${n.colors.background.primary};
  border-color: ${n.colors.border.strong};
  color: ${n.colors.text.secondary};
`;function f(){const n=(0,g.wW)(y);return l.createElement(u.C,{text:"Installed",color:"orange",className:n})}var P=a(66121),T=a(52081),S=a(51613),N=a(31403);function D({plugin:n}){const m=(0,g.wW)(y),L=A=>{A.preventDefault(),window.open(`https://grafana.com/grafana/plugins/${n.id}?utm_source=grafana_catalog_learn_more`,"_blank","noopener,noreferrer")};return(0,P.v)("enterprise.plugins")?l.createElement(u.C,{text:"Enterprise",color:"blue"}):l.createElement(T.Lh,null,l.createElement(S.o,{status:n.signature}),l.createElement(u.C,{icon:"lock","aria-label":"lock icon",text:"Enterprise",color:"blue",className:m}),l.createElement(N.zx,{size:"sm",fill:"text",icon:"external-link-alt",onClick:L},"Learn more"))}function I({plugin:n}){const m=(0,g.wW)(b);return n.hasUpdate&&!n.isCore&&n.type!==e.zV.renderer?l.createElement("p",{className:m.hasUpdate},"Update available!"):null}const b=n=>({hasUpdate:c.css`
      color: ${n.colors.text.secondary};
      font-size: ${n.typography.bodySmall.fontSize};
      margin-bottom: 0;
    `})},21701:(w,E,a)=>{a.r(E),a.d(E,{default:()=>ee});var l=a(9892),e=a(66111),u=a(56895),x=a(37932),B=a(35645),g=a(72648),c=a(24799),y=a(8581),f=a(2594),P=a(61860),T=a(61744),S=a(8412),N=a(86245),D=a(86475),I=a(27876),b=a(21048),n=a(48996),m=a(39904),L=a(52081),A=a(51613),p=a(75260);function O({plugin:t}){return t.isEnterprise?e.createElement(L.Lh,{height:"auto",wrap:!0},e.createElement(p.IF,{plugin:t}),t.isDisabled&&e.createElement(p.SX,{error:t.error}),e.createElement(p.xh,{plugin:t})):e.createElement(L.Lh,{height:"auto",wrap:!0},e.createElement(A.o,{status:t.signature}),t.isDisabled&&e.createElement(p.SX,{error:t.error}),t.isInstalled&&e.createElement(p.oZ,null),e.createElement(p.xh,{plugin:t}))}function M({alt:t,className:i,src:r,height:s}){return e.createElement("img",{src:r,className:i,alt:t,loading:"lazy",height:s})}const F="48px";function X({plugin:t,pathName:i,displayMode:r=n.lL.Grid}){const s=(0,g.wW)(j),o=r===n.lL.List;return e.createElement("a",{href:`${i}/${t.id}`,className:(0,l.cx)(s.container,{[s.list]:o})},e.createElement(M,{src:t.info.logos.small,className:s.pluginLogo,height:F,alt:""}),e.createElement("h2",{className:(0,l.cx)(s.name,"plugin-name")},t.name),e.createElement("div",{className:(0,l.cx)(s.content,"plugin-content")},e.createElement("p",null,"By ",t.orgName),e.createElement(O,{plugin:t})),e.createElement("div",{className:s.pluginType},t.type&&e.createElement(m.J,{name:n.Co[t.type],title:`${t.type} plugin`})))}const j=t=>({container:l.css`
      display: grid;
      grid-template-columns: ${F} 1fr ${t.spacing(3)};
      grid-template-rows: auto;
      gap: ${t.spacing(2)};
      grid-auto-flow: row;
      background: ${t.colors.background.secondary};
      border-radius: ${t.shape.borderRadius()};
      padding: ${t.spacing(3)};
      transition: ${t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short})};

      &:hover {
        background: ${t.colors.emphasize(t.colors.background.secondary,.03)};
      }
    `,list:l.css`
      row-gap: 0px;

      > img {
        align-self: start;
      }

      > .plugin-content {
        min-height: 0px;
        grid-area: 2 / 2 / 4 / 3;

        > p {
          margin: ${t.spacing(0,0,.5,0)};
        }
      }

      > .plugin-name {
        align-self: center;
        grid-area: 1 / 2 / 2 / 3;
      }
    `,pluginType:l.css`
      grid-area: 1 / 3 / 2 / 4;
      color: ${t.colors.text.secondary};
    `,pluginLogo:l.css`
      grid-area: 1 / 1 / 3 / 2;
      max-width: 100%;
      align-self: center;
      object-fit: contain;
    `,content:l.css`
      grid-area: 3 / 1 / 4 / 3;
      color: ${t.colors.text.secondary};
    `,name:l.css`
      grid-area: 1 / 2 / 3 / 3;
      align-self: center;
      font-size: ${t.typography.h4.fontSize};
      color: ${t.colors.text.primary};
      margin: 0;
    `}),V=({plugins:t,displayMode:i})=>{const r=i===n.lL.List,s=(0,g.wW)(J),{pathname:o}=(0,u.TH)(),W=B.v.appSubUrl+(o.endsWith("/")?o.slice(0,-1):o);return e.createElement("div",{className:(0,l.cx)(s.container,{[s.list]:r}),"data-testid":"plugin-list"},t.map(v=>e.createElement(X,{key:v.id,plugin:v,pathName:W,displayMode:i})))},J=t=>({container:l.css`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
      gap: ${t.spacing(3)};
    `,list:l.css`
      grid-template-columns: 1fr;
    `});var K=a(93006),Q=a(14747);const Y=(t,i=0,r=[])=>{const s=(0,e.useRef)(!0),o=[...r,s];return(0,K.Z)(()=>{if(s.current){s.current=!1;return}return t()},i,o)},k=({value:t,onSearch:i})=>{const[r,s]=(0,e.useState)(t);return Y(()=>i(r??""),500,[r]),e.createElement(Q.H,{value:r,onKeyDown:o=>{(o.key==="Enter"||o.keyCode===13)&&i(o.currentTarget.value)},placeholder:"Search Grafana plugins",onChange:o=>{s(o)},width:46})};var q=a(59210);const _=()=>({push:({query:t})=>{x.E1.partial(t)}});var z=a(74509);function ee({route:t}){const i=(0,u.TH)(),r=(0,x.Ox)(i.search),s=(0,I.useSelector)(d=>(0,N.ht)(d.navIndex,"plugins")),{displayMode:o,setDisplayMode:W}=(0,z.iY)(),v=(0,g.wW)(te),C=_(),ae=(0,z.y9)(),G=r.q||"",h=r.filterBy||"installed",$=r.filterByType||"all",Z=r.sortBy||q.Nh.nameAsc,{isLoading:ne,error:U,plugins:le}=(0,z.Pj)({keyword:G,type:$!=="all"?$:void 0,isInstalled:h==="installed"?!0:void 0,isCore:h==="installed"?void 0:!1},Z),H=[{value:"all",label:"All"},{value:"installed",label:"Installed"}],se=d=>{C.push({query:{sortBy:d.value}})},R=d=>{C.push({query:{filterBy:d}})},re=d=>{C.push({query:{filterByType:d.value}})},oe=d=>{C.push({query:{filterBy:h,filterByType:$,q:d}})};if(U)return console.error(U.message),null;const ie=B.v.featureToggles.dataConnectionsConsole?e.createElement("div",null,"Extend the Grafana experience with panel plugins and apps. To find more data sources go to"," ",e.createElement("a",{className:"external-link",href:`${D.Z.AddNewConnection}?cat=data-source`},"Connections"),"."):e.createElement("div",null,"Extend the Grafana experience with panel plugins and apps.");return e.createElement(S.T,{navModel:s,subTitle:ie},e.createElement(S.T.Contents,null,e.createElement(b.L,{wrap:!0},e.createElement(c.g,{label:"Search"},e.createElement(k,{value:G,onSearch:oe})),e.createElement(b.L,{wrap:!0,className:v.actionBar},e.createElement(c.g,{label:"Type"},e.createElement(y.Ph,{"aria-label":"Plugin type filter",value:$,onChange:re,width:18,options:[{value:"all",label:"All"},{value:"datasource",label:"Data sources"},{value:"panel",label:"Panels"},{value:"app",label:"Applications"}]})),ae?e.createElement(c.g,{label:"State"},e.createElement(f.S,{value:h,onChange:R,options:H})):e.createElement(P.u,{content:"This filter has been disabled because the Grafana server cannot access grafana.com",placement:"top"},e.createElement("div",null,e.createElement(c.g,{label:"State"},e.createElement(f.S,{disabled:!0,value:h,onChange:R,options:H})))),e.createElement(c.g,{label:"Sort"},e.createElement(y.Ph,{"aria-label":"Sort Plugins List",width:24,value:Z,onChange:se,options:[{value:"nameAsc",label:"By name (A-Z)"},{value:"nameDesc",label:"By name (Z-A)"},{value:"updated",label:"By updated date"},{value:"published",label:"By published date"},{value:"downloads",label:"By downloads"}]})),e.createElement(c.g,{label:"View"},e.createElement(f.S,{className:v.displayAs,value:o,onChange:W,options:[{value:n.lL.Grid,icon:"table",description:"Display plugins in a grid layout"},{value:n.lL.List,icon:"list-ul",description:"Display plugins in list"}]})))),e.createElement("div",{className:v.listWrap},ne?e.createElement(T.u,{className:l.css`
                margin-bottom: 0;
              `,text:"Loading results"}):e.createElement(V,{plugins:le,displayMode:o}))))}const te=t=>({actionBar:l.css`
    ${t.breakpoints.up("xl")} {
      margin-left: auto;
    }
  `,listWrap:l.css`
    margin-top: ${t.spacing(2)};
  `,displayAs:l.css`
    svg {
      margin-right: 0;
    }
  `})}}]);

//# sourceMappingURL=PluginListPage.9637e64d771dca3f7f57.js.map