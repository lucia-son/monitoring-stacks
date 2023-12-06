"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2613],{74492:(O,v,a)=>{a.r(v),a.d(v,{default:()=>W});var o=a(9892),e=a(66111),E=a(82965),p=a(77346),b=a(68183),D=a(35224),m=a(72648),x=a(8412),T=a(34177),N=a(54294),g=a(27876),C=a(37877),S=a(31460),L=a(77839),B=a(50432),h=a(36578),$=a(80472);const u=b.wl.pages.PublicDashboard.NotAvailable,P=({paused:t})=>{const s=(0,m.wW)(F),i=(0,m.wW)($.pJ),r=h.c.LoginBoxBackground();return e.createElement(h.c.LoginBackground,{className:s.container,"data-testid":u.container},e.createElement("div",{className:(0,o.cx)(s.box,r)},e.createElement(h.c.LoginLogo,{className:i.loginLogo}),e.createElement("p",{className:s.title,"data-testid":u.title},t?"This dashboard has been paused by the administrator":"The dashboard your are trying to access does not exist"),t&&e.createElement("p",{className:s.description,"data-testid":u.pausedDescription},"Try again later")))},F=t=>({container:o.css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    :before {
      opacity: 1;
    }
  `,box:o.css`
    width: 608px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${t.spacing(4)};
    z-index: 1;
    border-radius: ${t.shape.borderRadius(4)};
    padding: ${t.spacing(6,8)};
    opacity: 1;
  `,title:o.css`
    font-size: ${t.typography.h3.fontSize};
    text-align: center;
    margin: 0;
  `,description:o.css`
    font-size: ${t.typography.h5.fontSize};
    margin: 0;
  `});var z=a(33088),y=a(19349),A=a(87464);const R=b.wl.pages.PublicDashboard,U=({dashboard:t})=>{const s=(0,g.useDispatch)(),i=r=>{s((0,N.YT)(r))};return e.createElement(D.X,{title:t.title,buttonOverflowAlignment:"right"},!t.timepicker.hidden&&e.createElement(C.C,{dashboard:t,onChangeTimeZone:i}))},G=t=>{const{match:s,route:i,location:r}=t,Z=(0,g.useDispatch)(),j=(0,T.p)(),f=(0,E.Z)(t),J=(0,m.wW)(M),c=(0,g.useSelector)(l=>l.dashboard),n=c.getModel();return(0,e.useEffect)(()=>{Z((0,A.mV)({routeName:i.routeName,fixUrl:!1,accessToken:s.params.accessToken,keybindingSrv:j.keybindings}))},[]),(0,e.useEffect)(()=>{if(f?.location.search!==r.search){const l=f?.queryParams,d=t.queryParams;(d?.from!==l?.from||d?.to!==l?.to)&&!n?.timepicker.hidden&&(0,y.$t)().updateTimeRangeFromUrl(),!l?.refresh&&d?.refresh&&(0,y.$t)().setAutoRefresh(d.refresh)}},[f,r.search,t.queryParams,n?.timepicker.hidden]),n?n.meta.publicDashboardEnabled===!1?e.createElement(P,{paused:!0}):n.meta.dashboardNotFound?e.createElement(P,null):e.createElement(x.T,{pageNav:{text:n.title},layout:p.Q.Custom,toolbar:e.createElement(U,{dashboard:n}),"data-testid":R.page},c.initError&&e.createElement(S.u,{initError:c.initError}),e.createElement("div",{className:J.gridContainer},e.createElement(z.Z,{dashboard:n,isEditable:!1,viewPanel:null,editPanel:null,hidePanelMenus:!0})),e.createElement(B.Go,null)):e.createElement(L.B,{initPhase:c.initPhase})},M=t=>({gridContainer:(0,o.css)({flex:1,padding:t.spacing(2,2,2,2),overflow:"auto"})}),W=G}}]);

//# sourceMappingURL=PublicDashboardPage.25d94ab3180c9b6bfbb6.js.map