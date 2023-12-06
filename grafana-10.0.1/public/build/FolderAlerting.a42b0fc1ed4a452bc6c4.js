"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1324],{31808:(T,u,a)=>{a.d(u,{j:()=>p});var e=a(66111),E=a(56895),v=a(37932);function p(){const{search:m}=(0,E.TH)(),i=(0,e.useMemo)(()=>new URLSearchParams(m),[m]),S=(0,e.useCallback)((P,h)=>{v.E1.partial(P,h)},[]);return[i,S]}},30097:(T,u,a)=>{a.r(u),a.d(u,{default:()=>k});var e=a(66111),E=a(59679),v=a(8412),p=a(86245),m=a(27876),i=a(9892),S=a(82897),P=a(93006),h=a(26418),B=a(72648),A=a(14747),U=a(8581),O=a(39904),f=a(72948),x=a(34807),$=a(78889),b=a(84952),C=a(99822),W=a(61627),H=a(25724),j=a(31808),D=a(72004),F=a(20194),N=a(45849),G=a(10505),K=(t=>(t.Ascending="alpha-asc",t.Descending="alpha-desc",t))(K||{});const J=[{label:"Alphabetically [A-Z]",value:"alpha-asc"},{label:"Alphabetically [Z-A]",value:"alpha-desc"}],V=({folder:t})=>{const l=(0,B.wW)(Y),r=(0,m.useDispatch)(),g=n=>{const L=(0,F.vB)(s,n);M(L)};(0,e.useEffect)(()=>{r((0,D.y6)({rulesSourceName:N.GC})),r((0,D.UR)({rulesSourceName:N.GC}))},[r]);const o=(0,W.Zo)(N.GC),{nameFilter:d,labelFilter:s,sortOrder:c,setNameFilter:y,setLabelFilter:M,setSortOrder:q}=Q(),R=o.find(n=>n.name===t.title)?.groups.flatMap(n=>n.rules)??[],Z=X(R,d,s,c??"alpha-asc"),_=R.length===0||Z.length===0,{page:aa,numberOfPages:ea,onPageChange:ta,pageItems:sa}=(0,H.h)(Z,1,b.gN);return e.createElement("div",{className:l.container},e.createElement(h.Stack,{direction:"column",gap:3},e.createElement(A.H,{value:d,onChange:y,placeholder:"Search alert rules by name","data-testid":"name-filter"}),e.createElement(h.Stack,{direction:"row"},e.createElement(U.Ph,{value:c,onChange:({value:n})=>n&&q(n),options:J,width:25,"aria-label":"Sort",placeholder:"Sort (Default A-Z)",prefix:e.createElement(O.J,{name:c==="alpha-asc"?"sort-amount-up":"sort-amount-down"})}),e.createElement(A.H,{value:s,onChange:M,placeholder:"Search alerts by labels",className:l.filterLabelsInput,"data-testid":"label-filter"})),e.createElement(h.Stack,{gap:1},sa.map(n=>e.createElement(f.Z,{key:n.name,href:(0,G.V2)("grafana",n,""),className:l.card,"data-testid":"alert-card-row"},e.createElement(f.Z.Heading,null,n.name),e.createElement(f.Z.Tags,null,e.createElement(x.P,{onClick:g,tags:Object.entries(n.labels).map(([L,na])=>`${L}=${na}`)})),e.createElement(f.Z.Meta,null,e.createElement("div",null,e.createElement(O.J,{name:"folder"})," ",t.title))))),_&&e.createElement("div",{className:l.noResults},"No alert rules found"),e.createElement("div",{className:l.pagination},e.createElement($.t,{currentPage:aa,numberOfPages:ea,onNavigate:ta,hideWhenSinglePage:!0}))))};var z=(t=>(t.nameFilter="nameFilter",t.labelFilter="labelFilter",t.sortOrder="sort",t))(z||{});function Q(){const[t,l]=(0,j.j)(),[r,g]=(0,e.useState)(t.get("nameFilter")??""),[o,d]=(0,e.useState)(t.get("labelFilter")??""),s=t.get("sort"),[c,y]=(0,e.useState)(s==="alpha-asc"?"alpha-asc":s==="alpha-desc"?"alpha-desc":void 0);return(0,P.Z)(()=>l({nameFilter:(0,C.sB)(r),labelFilter:(0,C.sB)(o),sort:(0,C.sB)(c)},!0),400,[r,o,c]),{nameFilter:r,labelFilter:o,sortOrder:c,setNameFilter:g,setLabelFilter:d,setSortOrder:y}}function X(t,l,r,g){const o=(0,F.Zh)(r);let d=t.filter(s=>s.name.toLowerCase().includes(l.toLowerCase())&&(0,F.eD)(s.labels,o));return(0,S.orderBy)(d,s=>s.name.toLowerCase(),[g==="alpha-asc"?"asc":"desc"])}const Y=t=>({container:i.css`
    padding: ${t.spacing(1)};
  `,card:i.css`
    grid-template-columns: auto 1fr 2fr;
    margin: 0;
  `,pagination:i.css`
    align-self: center;
  `,filterLabelsInput:i.css`
    flex: 1;
    width: auto;
    min-width: 240px;
  `,noResults:i.css`
    padding: ${t.spacing(2)};
    background-color: ${t.colors.background.secondary};
    font-style: italic;
  `});var I=a(61986),w=a(60492);const k=({match:t})=>{const l=(0,m.useDispatch)(),r=(0,m.useSelector)(c=>c.navIndex),g=(0,m.useSelector)(c=>c.folder),o=t.params.uid,d=(0,p.ht)(r,`folder-alerting-${o}`,(0,w._l)(1)),{loading:s}=(0,E.Z)(async()=>l((0,I.Pb)(o)),[I.Pb,o]);return e.createElement(v.T,{navId:"dashboards/browse",pageNav:d.main},e.createElement(v.T.Contents,{isLoading:s},e.createElement(V,{folder:g})))}}}]);

//# sourceMappingURL=FolderAlerting.a42b0fc1ed4a452bc6c4.js.map