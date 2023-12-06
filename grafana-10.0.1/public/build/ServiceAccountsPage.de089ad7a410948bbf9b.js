"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1337],{50951:(J,O,a)=>{a.r(O),a.d(O,{ServiceAccountsListPageUnconnected:()=>F,default:()=>Z,getStyles:()=>b});var n=a(9892),o=a(64681),h=a.n(o),e=a(66111),x=a(67948),v=a(72648),m=a(14747),T=a(2594),S=a(31403),E=a(98102),R=a(69142),I=a(8412),K=a(2555),d=a(77582),i=a(27876),V=a(14377),f=a(39904),y=a(52081),s=a(8180),l=a(66226),M=a(65135);const r=t=>`Edit service account's ${t} details`,p=(0,e.memo)(({serviceAccount:t,onRoleChange:D,roleOptions:z,onRemoveButtonClick:B,onDisable:A,onEnable:w,onAddTokenClick:C})=>{const P=`org/serviceaccounts/${t.id}`,L=(0,v.wW)(k),W=d.Vt.hasPermissionInMetadata(i.AccessControlAction.ServiceAccountsWrite,t),H=d.Vt.hasPermission(i.AccessControlAction.ActionRolesList)&&d.Vt.hasPermission(i.AccessControlAction.ActionUserRolesList);return e.createElement("tr",{key:t.id,className:(0,n.cx)({[L.disabled]:t.isDisabled})},e.createElement("td",{className:"width-4 text-center link-td"},e.createElement("a",{href:P,"aria-label":r(t.name)},e.createElement("img",{className:"filter-table__avatar",src:t.avatarUrl,alt:`Avatar for user ${t.name}`}))),e.createElement("td",{className:"link-td max-width-10"},e.createElement("a",{className:"ellipsis",href:P,title:t.name,"aria-label":r(t.name)},t.name)),e.createElement("td",{className:"link-td max-width-10"},e.createElement("a",{className:L.accountId,href:P,title:t.login,"aria-label":r(t.name)},t.login)),d.Vt.licensedAccessControlEnabled()?e.createElement("td",null,H&&e.createElement(l.R,{userId:t.id,orgId:t.orgId,basicRole:t.role,onBasicRoleChange:X=>D(X,t),roleOptions:z,basicRoleDisabled:!W,disabled:t.isDisabled})):e.createElement("td",null,e.createElement(M.A,{"aria-label":"Role",value:t.role,disabled:!W||t.isDisabled,onChange:X=>D(X,t)})),e.createElement("td",{className:"link-td max-width-10"},e.createElement("a",{className:"ellipsis",href:P,title:"Tokens","aria-label":r(t.name)},e.createElement("div",{className:(0,n.cx)(L.tokensInfo,{[L.tokensInfoSecondary]:!t.tokens})},e.createElement("span",null,e.createElement(f.J,{name:"key-skeleton-alt"})),t.tokens||"No tokens"))),e.createElement("td",null,e.createElement(y.Lh,{justify:"flex-end"},d.Vt.hasPermission(i.AccessControlAction.ServiceAccountsWrite)&&!t.tokens&&e.createElement(S.zx,{onClick:()=>C(t),disabled:t.isDisabled},"Add token"),d.Vt.hasPermissionInMetadata(i.AccessControlAction.ServiceAccountsWrite,t)&&(t.isDisabled?e.createElement(S.zx,{variant:"primary",onClick:()=>w(t)},"Enable"):e.createElement(S.zx,{variant:"secondary",onClick:()=>A(t)},"Disable")),d.Vt.hasPermissionInMetadata(i.AccessControlAction.ServiceAccountsDelete,t)&&e.createElement(s.h,{className:L.deleteButton,name:"trash-alt",size:"md",onClick:()=>B(t),"aria-label":`Delete service account ${t.name}`}))))});p.displayName="ServiceAccountListItem";const k=t=>({iconRow:n.css`
      svg {
        margin-left: ${t.spacing(.5)};
      }
    `,accountId:(0,n.cx)("ellipsis",n.css`
        color: ${t.colors.text.secondary};
      `),deleteButton:n.css`
      color: ${t.colors.text.secondary};
    `,tokensInfo:n.css`
      span {
        margin-right: ${t.spacing(1)};
      }
    `,tokensInfoSecondary:n.css`
      color: ${t.colors.text.secondary};
    `,disabled:n.css`
      td a {
        color: ${t.colors.text.secondary};
      }
    `}),N=p;var g=a(50655);function Q(t){return{...t.serviceAccounts}}const G={changeQuery:g.R5,fetchACOptions:g.bX,fetchServiceAccounts:g.Xd,deleteServiceAccount:g.yN,updateServiceAccount:g.TL,changeStateFilter:g.XE,createServiceAccountToken:g.fT},$=(0,x.connect)(Q,G),F=({serviceAccounts:t,isLoading:D,roleOptions:z,query:B,serviceAccountStateFilter:A,changeQuery:w,fetchACOptions:C,fetchServiceAccounts:P,deleteServiceAccount:L,updateServiceAccount:W,changeStateFilter:H,createServiceAccountToken:X})=>{const Y=(0,v.wW)(b),[se,_]=(0,e.useState)(!1),[le,q]=(0,e.useState)(!1),[ce,ee]=(0,e.useState)(!1),[ie,te]=(0,e.useState)(""),[u,U]=(0,e.useState)(null);(0,e.useEffect)(()=>{P({withLoadingIndicator:!0}),d.Vt.licensedAccessControlEnabled()&&C()},[C,P]);const ae=t.length===0&&A===i.ServiceAccountStateFilter.All&&!B,re=async(c,Te)=>{const Se={...Te,role:c};W(Se),d.Vt.licensedAccessControlEnabled()&&C()},de=c=>{w(c)},me=c=>{H(c)},ue=c=>{U(c),q(!0)},Ee=async()=>{u&&L(u.id),ne()},ge=c=>{U(c),ee(!0)},ve=()=>{u&&W({...u,isDisabled:!0}),oe()},fe=c=>{W({...c,isDisabled:!1})},pe=c=>{U(c),_(!0)},De=async c=>{u&&X(u.id,c,te)},ye=()=>{_(!1),U(null),te("")},ne=()=>{q(!1),U(null)},oe=()=>{ee(!1),U(null)},Ce=e.createElement("a",{className:"external-link",href:"https://grafana.com/docs/grafana/latest/administration/service-accounts/",target:"_blank",rel:"noopener noreferrer"},"documentation."),he=e.createElement("span",null,"Service accounts and their tokens can be used to authenticate against the Grafana API. Find out more in our"," ",Ce);return e.createElement(I.T,{navId:"serviceaccounts",subTitle:he},e.createElement(I.T.Contents,null,e.createElement("div",{className:"page-action-bar"},e.createElement("div",{className:"gf-form gf-form--grow"},e.createElement(m.H,{placeholder:"Search service account by name",value:B,onChange:de,width:50})),e.createElement(T.S,{options:[{label:"All",value:i.ServiceAccountStateFilter.All},{label:"With expired tokens",value:i.ServiceAccountStateFilter.WithExpiredTokens},{label:"Disabled",value:i.ServiceAccountStateFilter.Disabled}],onChange:me,value:A,className:Y.filter}),!ae&&d.Vt.hasPermission(i.AccessControlAction.ServiceAccountsCreate)&&e.createElement(S.Qj,{href:"org/serviceaccounts/create",variant:"primary"},"Add service account")),D&&e.createElement(K.Z,null),!D&&ae&&e.createElement(e.Fragment,null,e.createElement(R.Z,{title:"You haven't created any service accounts yet.",buttonIcon:"key-skeleton-alt",buttonLink:"org/serviceaccounts/create",buttonTitle:"Add service account",buttonDisabled:!d.Vt.hasPermission(i.AccessControlAction.ServiceAccountsCreate),proTip:"Remember, you can provide specific permissions for API access to other applications.",proTipLink:"",proTipLinkTitle:"",proTipTarget:"_blank"})),!D&&t.length!==0&&e.createElement(e.Fragment,null,e.createElement("div",{className:(0,n.cx)(Y.table,"admin-list-table")},e.createElement("table",{className:"filter-table filter-table--hover"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null),e.createElement("th",null,"Account"),e.createElement("th",null,"ID"),e.createElement("th",null,"Roles"),e.createElement("th",null,"Tokens"),e.createElement("th",{style:{width:"34px"}}))),e.createElement("tbody",null,t.map(c=>e.createElement(N,{serviceAccount:c,key:c.id,roleOptions:z,onRoleChange:re,onRemoveButtonClick:ue,onDisable:ge,onEnable:fe,onAddTokenClick:pe})))))),u&&e.createElement(e.Fragment,null,e.createElement(E.s,{isOpen:le,body:`Are you sure you want to delete '${u.name}'${u.tokens?` and ${u.tokens} accompanying ${h()("token",u.tokens)}`:""}?`,confirmText:"Delete",title:"Delete service account",onConfirm:Ee,onDismiss:ne}),e.createElement(E.s,{isOpen:ce,title:"Disable service account",body:`Are you sure you want to disable '${u.name}'?`,confirmText:"Disable service account",onConfirm:ve,onDismiss:oe}),e.createElement(V.m,{isOpen:se,token:ie,serviceAccountLogin:u.login,onCreateToken:De,onClose:ye}))))},b=t=>({table:n.css`
      margin-top: ${t.spacing(3)};
    `,filter:n.css`
      margin: 0 ${t.spacing(1)};
    `,row:n.css`
      display: flex;
      align-items: center;
      height: 100% !important;

      a {
        padding: ${t.spacing(.5)} 0 !important;
      }
    `,unitTooltip:n.css`
      display: flex;
      flex-direction: column;
    `,unitItem:n.css`
      cursor: pointer;
      padding: ${t.spacing(.5)} 0;
      margin-right: ${t.spacing(1)};
    `,disabled:n.css`
      color: ${t.colors.text.disabled};
    `,link:n.css`
      color: inherit;
      cursor: pointer;
      text-decoration: underline;
    `,pageHeader:n.css`
      display: flex;
      margin-bottom: ${t.spacing(2)};
    `,apiKeyInfoLabel:n.css`
      margin-left: ${t.spacing(1)};
      line-height: 2.2;
      flex-grow: 1;
      color: ${t.colors.text.secondary};

      span {
        padding: ${t.spacing(.5)};
      }
    `,filterDelimiter:n.css`
      flex-grow: 1;
    `}),Z=$(F)},14377:(J,O,a)=>{a.d(O,{m:()=>d});var n=a(9892),o=a(66111),h=a(44288),e=a(35645),x=a(72648),v=a(35029),m=a(24799),T=a(46967),S=a(2594),E=a(86348),R=a(31403),I=a(94599);const K=[{label:"No expiration",value:!1},{label:"Set expiration date",value:!0}],d=({isOpen:f,token:y,serviceAccountLogin:s,onCreateToken:l,onClose:M})=>{const r=new Date;r.setDate(r.getDate()+1);const p=new Date;e.v.tokenExpirationDayLimit!==void 0&&e.v.tokenExpirationDayLimit>-1?p.setDate(p.getDate()+e.v.tokenExpirationDayLimit+1):p.setDate(864e13);const k=e.v.tokenExpirationDayLimit!==void 0&&e.v.tokenExpirationDayLimit>0,[N,g]=(0,o.useState)(""),[Q,G]=(0,o.useState)(""),[$,F]=(0,o.useState)(k),[b,j]=(0,o.useState)(r),[Z,t]=(0,o.useState)(b!==""),D=(0,x.wW)(V);(0,o.useEffect)(()=>{f&&g(`${s}-${(0,h.Z)()}`)},[s,f]);const z=C=>{t(C!==""),j(C)},B=()=>{l({name:Q||N,secondsToLive:$?i(b):void 0})},A=()=>{G(""),g(""),F(k),j(r),t(b!==""),M()},w=y?"Service account token created":"Add service account token";return o.createElement(v.u,{isOpen:f,title:w,onDismiss:A,className:D.modal,contentClassName:D.modalContent},y?o.createElement(o.Fragment,null,o.createElement(m.g,{label:"Token",description:"Copy the token now as you will not be able to see it again. Losing a token requires creating a new one."},o.createElement("div",{className:D.modalTokenRow},o.createElement(T.I,{name:"tokenValue",value:y,readOnly:!0}),o.createElement(I.m,{className:D.modalCopyToClipboardButton,variant:"primary",size:"md",icon:"copy",getText:()=>y},"Copy clipboard"))),o.createElement(v.u.ButtonRow,null,o.createElement(I.m,{variant:"primary",getText:()=>y,onClipboardCopy:A},"Copy to clipboard and close"),o.createElement(R.zx,{variant:"secondary",onClick:A},"Close"))):o.createElement("div",null,o.createElement(m.g,{label:"Display name",description:"Name to easily identify the token",required:!0},o.createElement(T.I,{name:"tokenName",value:Q,placeholder:N,onChange:C=>{G(C.currentTarget.value)}})),o.createElement(m.g,{label:"Expiration"},o.createElement(S.S,{options:K,value:$,onChange:F,size:"md"})),$&&o.createElement(m.g,{label:"Expiration date"},o.createElement(E.d,{onChange:z,value:b,placeholder:"",minDate:r,maxDate:p})),o.createElement(v.u.ButtonRow,null,o.createElement(R.zx,{onClick:B,disabled:$&&!Z},"Generate token"))))},i=f=>{const y=new Date(f),s=new Date;return Math.ceil((y.getTime()-s.getTime())/1e3)},V=f=>({modal:n.css`
      width: 550px;
    `,modalContent:n.css`
      overflow: visible;
    `,modalTokenRow:n.css`
      display: flex;
    `,modalCopyToClipboardButton:n.css`
      margin-left: ${f.spacing(.5)};
    `})},50655:(J,O,a)=>{a.d(O,{R5:()=>V,TL:()=>I,XE:()=>f,Xd:()=>E,bX:()=>S,fT:()=>d,yN:()=>K});var n=a(82897),o=a.n(n),h=a(54899),e=a(11630),x=a(82002),v=a(27876),m=a(45003);const T="/api/serviceaccounts";function S(){return async s=>{try{if(x.Vt.licensedAccessControlEnabled()&&x.Vt.hasPermission(v.AccessControlAction.ActionRolesList)){const l=await(0,e.ul)();s((0,m.Dn)(l))}}catch(l){console.error(l)}}}function E({withLoadingIndicator:s}={withLoadingIndicator:!1}){return async(l,M)=>{try{if(x.Vt.hasPermission(v.AccessControlAction.ServiceAccountsRead)){s&&l((0,m.pN)());const{perPage:r,page:p,query:k,serviceAccountStateFilter:N}=M().serviceAccounts,g=await(0,h.i)().get(`/api/serviceaccounts/search?perpage=${r}&page=${p}&query=${k}${i(N)}&accesscontrol=true`);l((0,m.Ub)(g))}}catch(r){console.error(r)}finally{l((0,m.dt)())}}}const R=(0,n.debounce)(s=>s(E()),500,{leading:!0});function I(s){return async l=>{await(0,h.i)().patch(`${T}/${s.id}?accesscontrol=true`,{...s}),l(E())}}function K(s){return async l=>{await(0,h.i)().delete(`${T}/${s}`),l(E())}}function d(s,l,M){return async r=>{const p=await(0,h.i)().post(`${T}/${s}/tokens`,l);M(p.key),r(E())}}const i=s=>{switch(s){case v.ServiceAccountStateFilter.WithExpiredTokens:return"&expiredTokens=true";case v.ServiceAccountStateFilter.Disabled:return"&disabled=true";default:return""}};function V(s){return async l=>{l((0,m.aj)(s)),R(l)}}function f(s){return async l=>{l((0,m.M4)(s)),l(E())}}function y(s){return async l=>{l(pageChanged(s)),l(E())}}}}]);

//# sourceMappingURL=ServiceAccountsPage.de089ad7a410948bbf9b.js.map