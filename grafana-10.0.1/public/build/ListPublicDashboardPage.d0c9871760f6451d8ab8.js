"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1344],{10429:(U,m,t)=>{t.r(m),t.d(m,{ListPublicDashboardPage:()=>v,default:()=>B});var e=t(66111),h=t(8412),n=t(9892),g=t(830),p=t(68183),u=t(72648),b=t(67487),x=t(61860),P=t(29460),r=t(39904),T=t(34719),y=t(26202),E=t(31403),D=t(82002),I=t(10655),f=t(80882),N=t(84532),L=t(27876),$=t(80600);const z=()=>{const{width:s}=(0,g.Z)(),c=s<=480,C=(0,u.l4)(),l=(0,u.wW)(()=>S(C,c)),{data:J,isLoading:W,isFetching:j}=(0,I.WJ)(),d=p.wl.pages.PublicDashboards,A=D.Vt.hasAccess(L.AccessControlAction.DashboardsPublicWrite,(0,N.RN)()),i=c?"sm":"md";return e.createElement(h.T.Contents,{isLoading:W},e.createElement("table",{className:"filter-table"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{className:l.nameTh},"Name"),e.createElement("th",null,"Status"),e.createElement("th",{className:l.fetchingSpinner},j&&e.createElement(b.$,null)))),e.createElement("tbody",null,J?.map(a=>{const o=!a.dashboardUid;return e.createElement("tr",{key:a.uid},e.createElement("td",{className:l.titleTd},e.createElement(x.u,{content:o?"The linked dashboard has already been deleted":a.title,placement:"top"},o?e.createElement("div",{className:l.orphanedTitle},e.createElement("p",null,"Orphaned public dashboard"),e.createElement(r.J,{name:"info-circle",className:l.orphanedInfoIcon})):e.createElement(P.r,{className:l.link,href:`/d/${a.dashboardUid}`},a.title))),e.createElement("td",null,e.createElement(T.V,{name:a.isEnabled?"enabled":"paused",colorIndex:o?9:a.isEnabled?20:15})),e.createElement("td",null,e.createElement(y.h,{className:l.buttonGroup},e.createElement(E.Qj,{href:(0,f._M)(a.accessToken),fill:"text",size:i,title:a.isEnabled?"View public dashboard":"Public dashboard is disabled",target:"_blank",disabled:!a.isEnabled||o,"data-testid":d.ListItem.linkButton},e.createElement(r.J,{size:i,name:"external-link-alt"})),e.createElement(E.Qj,{fill:"text",size:i,href:(0,f.Ez)(a.dashboardUid),title:"Configure public dashboard",disabled:o,"data-testid":d.ListItem.configButton},e.createElement(r.J,{size:i,name:"cog"})),A&&e.createElement($.H,{variant:"primary",fill:"text","data-testid":d.ListItem.trashcanButton,publicDashboard:a,loader:e.createElement(b.$,null)},e.createElement(r.J,{size:i,name:"trash-alt"})))))}))))};function S(s,c){return{fetchingSpinner:n.css`
      display: flex;
      justify-content: end;
    `,link:n.css`
      color: ${s.colors.primary.text};
      text-decoration: underline;
      margin-right: ${s.spacing()};
    `,nameTh:n.css`
      width: 20%;
    `,titleTd:n.css`
      max-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `,buttonGroup:n.css`
      justify-content: ${c?"space-between":"end"};
    `,orphanedTitle:n.css`
      display: flex;
      align-items: center;
      gap: ${s.spacing(1)};

      p {
        margin: ${s.spacing(0)};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `,orphanedInfoIcon:n.css`
      color: ${s.colors.text.link};
    `}}const v=({})=>e.createElement(h.T,{navId:"dashboards/public"},e.createElement(z,null)),B=v}}]);

//# sourceMappingURL=ListPublicDashboardPage.d0c9871760f6451d8ab8.js.map