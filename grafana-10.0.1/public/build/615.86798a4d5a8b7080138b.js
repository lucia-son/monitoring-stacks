"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[615],{40615:(L,m,n)=>{n.r(m),n.d(m,{SignupPage:()=>_,default:()=>f});var e=n(66111),g=n(54899),p=n(94270),i=n(24799),s=n(46967),P=n(52081),r=n(31403),t=n(47694),O=n(60499),M=n(77293),d=n(80472),c=n(20787);const _=u=>{const v=(0,O.iG)(),C=async a=>{a.name===""&&delete a.name,delete a.confirm,(await(0,g.i)().post("/api/user/signup/step2",{email:a.email,code:a.code,username:a.email,orgName:a.orgName,password:a.password,name:a.name}).catch(o=>{const E=o.data?.message||o;v.warning(E)})).code==="redirect-to-select-org"&&window.location.assign((0,t.iE)().appSubUrl+"/profile/select-org?signup=1"),window.location.assign((0,t.iE)().appSubUrl+"/")},D={email:u.queryParams.email,code:u.queryParams.code};return e.createElement(d.dd,null,e.createElement(d.$s,null,e.createElement(p.l,{defaultValues:D,onSubmit:C},({errors:a,register:l,getValues:o})=>e.createElement(e.Fragment,null,e.createElement(i.g,{label:"Your name"},e.createElement(s.I,{id:"user-name",...l("name"),placeholder:"(optional)"})),e.createElement(i.g,{label:"Email",invalid:!!a.email,error:a.email?.message},e.createElement(s.I,{id:"email",...l("email",{required:"Email is required",pattern:{value:M.Yb,message:"Email is invalid"}}),type:"email",placeholder:"Email"})),!(0,t.iE)().autoAssignOrg&&e.createElement(i.g,{label:"Org. name"},e.createElement(s.I,{id:"org-name",...l("orgName"),placeholder:"Org. name"})),(0,t.iE)().verifyEmailEnabled&&e.createElement(i.g,{label:"Email verification code (sent to your email)"},e.createElement(s.I,{id:"verification-code",...l("code"),placeholder:"Code"})),e.createElement(i.g,{label:"Password",invalid:!!a.password,error:a?.password?.message},e.createElement(c.Z,{id:"new-password",autoFocus:!0,autoComplete:"new-password",...l("password",{required:"Password is required"})})),e.createElement(i.g,{label:"Confirm password",invalid:!!a.confirm,error:a?.confirm?.message},e.createElement(c.Z,{id:"confirm-new-password",autoComplete:"new-password",...l("confirm",{required:"Confirmed password is required",validate:E=>E===o().password||"Passwords must match!"})})),e.createElement(P.Lh,null,e.createElement(r.zx,{type:"submit"},"Submit"),e.createElement(r.Qj,{fill:"text",href:(0,t.iE)().appSubUrl+"/login"},"Back to login"))))))},f=_}}]);

//# sourceMappingURL=615.86798a4d5a8b7080138b.js.map