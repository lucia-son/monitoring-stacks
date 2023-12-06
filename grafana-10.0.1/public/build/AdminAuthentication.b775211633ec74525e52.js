"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8741],{84903:(V,h,a)=>{a.r(h),a.d(h,{AuthConfigPageUnconnected:()=>b,default:()=>G});var o=a(9892),P=a(82897),e=a(66111),$=a(67948),m=a(72648),p=a(8412),N=a(68183),v=a(31403),A=a(97097);const I=({title:n,buttonIcon:d,buttonLink:l,buttonTitle:r,buttonDisabled:c,description:i})=>{const f=(0,m.wW)(T),s=i?e.createElement("span",{key:"proTipFooter"},i):"",g=i?"":f.button,y=e.createElement(v.Qj,{size:"lg",href:l,icon:d,className:g,"data-testid":N.wl.components.CallToActionCard.buttonV2(r),disabled:c},r);return e.createElement(A._,{className:f.cta,message:n,footer:s,callToActionElement:y})},T=n=>({cta:o.css`
      text-align: center;
    `,button:o.css`
      margin-bottom: ${n.spacing(2.5)};
    `}),F=I;var E=a(72948),z=a(61860),S=a(39904),u=a(19985);const C="admin/authentication/",D="48px";function x({providerId:n,displayName:d,enabled:l,configFoundInIniFile:r,configPath:c,authType:i,badges:f}){const s=(0,m.wW)(j);return c=C+(c||n),e.createElement(E.Z,{href:c,className:s.container},e.createElement(E.Z.Heading,{className:s.name},d),r&&e.createElement(e.Fragment,null,e.createElement("span",{className:s.initext},e.createElement(z.u,{content:"Note: Settings enabled in the .ini configuration file will overwritten by the current settings."},e.createElement(e.Fragment,null,e.createElement(S.J,{name:"adjust-circle"}),"Configuration found in .ini file")))),e.createElement("div",{className:s.footer},i&&e.createElement(u.C,{text:i,color:"blue",icon:"info-circle"}),l?e.createElement(u.C,{text:"Enabled",color:"green",icon:"check"}):e.createElement(u.C,{text:"Not enabled",color:"red"})))}const j=n=>({container:o.css`
      min-height: ${n.spacing(16)};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: ${n.spacing(2)};
    `,header:o.css`
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: ${n.spacing(2)};
    `,footer:o.css`
      display: flex;
      justify-content: space-between;
    `,name:o.css`
      align-self: flex-start;
      font-size: ${n.typography.h4.fontSize};
      color: ${n.colors.text.primary};
      margin: 0;
    `,initext:o.css`
      font-size: ${n.typography.bodySmall.fontSize};
      color: ${n.colors.text.secondary};
      padding: ${n.spacing(1)} 0; // Add some padding
      max-width: 90%; // Add a max-width to prevent text from stretching too wide
    `});var H=a(49922);function L(n){return C+(n.configPath||n.id)}var U=a(40641);function B(n){const{isLoading:d,providerStatuses:l}=n.authConfig;return{isLoading:d,providerStatuses:l}}const W={loadSettings:H.ri},Z=(0,$.connect)(B,W),b=({providerStatuses:n,isLoading:d,loadSettings:l})=>{const r=(0,m.wW)(w);(0,e.useEffect)(()=>{l()},[l]);const c=(0,U.getRegisteredAuthProviders)(),i=c.filter(t=>n[t.id]?.enabled),f=c.filter(t=>n[t.id]?.configured&&!n[t.id]?.enabled),s=c.filter(t=>!n[t.id]?.enabled&&!n[t.id]?.configured),g=s?.length?s[0]:null,y=e.createElement("a",{className:"external-link",href:"https://grafana.com/docs/grafana/next/setup-grafana/configure-security/configure-authentication/saml-ui/",target:"_blank",rel:"noopener noreferrer"},"documentation."),O=e.createElement("span",null,"Manage your auth settings and configure single sign-on. Find out more in our ",y);return e.createElement(p.T,{navId:"authentication",subTitle:O},e.createElement(p.T.Contents,{isLoading:d},e.createElement("h3",{className:r.sectionHeader},"Configured authentication"),!!i?.length&&e.createElement("div",{className:r.cardsContainer},i.map(t=>e.createElement(x,{key:t.id,providerId:t.id,displayName:t.displayName,authType:t.type,enabled:n[t.id]?.enabled,configFoundInIniFile:n[t.id]?.configFoundInIniFile,configPath:t.configPath}))),!i?.length&&g&&!(0,P.isEmpty)(n)&&e.createElement(F,{title:`You have no ${g.type} configuration created at the moment`,buttonIcon:"plus-circle",buttonLink:L(g),buttonTitle:`Configure ${g.type}`,description:`Important: if you have ${g.type} configuration enabled via the .ini file Grafana is using it.
              Configuring ${g.type} via UI will take precedence over any configuration in the .ini file.
              No changes will be written into .ini file.`}),!!f?.length&&e.createElement("div",{className:r.cardsContainer},f.map(t=>e.createElement(x,{key:t.id,providerId:t.id,displayName:t.displayName,authType:t.protocol,enabled:n[t.id]?.enabled,configFoundInIniFile:n[t.id]?.configFoundInIniFile,configPath:t.configPath})))))},w=n=>({cardsContainer:o.css`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
      gap: ${n.spacing(3)};
      margin-bottom: ${n.spacing(3)};
      margin-top: ${n.spacing(2)};
    `,sectionHeader:o.css`
      margin-bottom: ${n.spacing(3)};
    `,settingsSection:o.css`
      margin-top: ${n.spacing(4)};
    `,settingName:o.css`
      padding-left: 25px;
    `,doclink:o.css`
      padding-bottom: 5px;
      padding-top: -5px;
      font-size: ${n.typography.bodySmall.fontSize};
      a {
        color: ${n.colors.info.name}; // use theme link color or any other color
        text-decoration: underline; // underline or none, as you prefer
      }
    `,settingValue:o.css`
      white-space: break-spaces;
    `}),G=Z(b)}}]);

//# sourceMappingURL=AdminAuthentication.b775211633ec74525e52.js.map