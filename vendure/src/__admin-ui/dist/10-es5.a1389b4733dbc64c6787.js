!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"3/Dd":function(n,r,c){"use strict";c.r(r),c.d(r,"LoginComponent",function(){return m}),c.d(r,"LoginGuard",function(){return v}),c.d(r,"LoginModule",function(){return w}),c.d(r,"loginRoutes",function(){return y});var a=c("Iq5M"),i=c("oIEy"),o=c("FWuv"),s=c("kpJz"),l=c("RlrJ"),u=c("OLIJ"),d=c("HKMU"),p=c("Tm5P");function g(e,n){1&e&&(a.jc(0,"span"),a.Vc(1,"-"),a.ic())}function b(e,n){if(1&e&&(a.jc(0,"span"),a.Vc(1),a.Tc(2,g,2,0,"span",12),a.ic()),2&e){var t=a.sc();a.Sb(1),a.Xc("",t.brand," "),a.Sb(1),a.zc("ngIf",!t.hideVendureBranding||!t.hideVersion)}}function f(e,n){1&e&&(a.jc(0,"span"),a.Vc(1,"vendure"),a.ic())}function h(e,n){if(1&e&&(a.jc(0,"span"),a.Vc(1),a.ic()),2&e){var t=a.sc();a.Sb(1),a.Xc("v",t.version,"")}}var m=function(){function n(t,r){e(this,n),this.authService=t,this.router=r,this.username="",this.password="",this.rememberMe=!1,this.version=o.a,this.brand=Object(o.fc)().brand,this.hideVendureBranding=Object(o.fc)().hideVendureBranding,this.hideVersion=Object(o.fc)().hideVersion}return t(n,[{key:"logIn",value:function(){var e=this;this.errorMessage=void 0,this.authService.logIn(this.username,this.password,this.rememberMe).subscribe(function(n){switch(n.__typename){case"CurrentUser":var t=e.getRedirectRoute();e.router.navigateByUrl(t||"/");break;case"InvalidCredentialsError":case"NativeAuthStrategyError":e.errorMessage=n.message}})}},{key:"getRedirectRoute",value:function(){var e,n=new RegExp("".concat(o.b,"=(.*)"));try{var t=window.location.search.match(n);t&&1<t.length&&(e=atob(decodeURIComponent(t[1])))}catch(r){}return e}}]),n}();m.\u0275fac=function(e){return new(e||m)(a.dc(o.v),a.dc(i.e))},m.\u0275cmp=a.Xb({type:m,selectors:[["vdr-login"]],decls:25,vars:24,consts:[[1,"login-wrapper"],[1,"login"],[1,"title"],["src","assets/logo-300px.png"],[1,"login-group"],["type","text","name","username","id","login_username",1,"username",3,"ngModel","placeholder","ngModelChange"],["name","password","type","password","id","login_password",1,"password",3,"ngModel","placeholder","ngModelChange"],[1,"login-error",3,"clrAlertType","clrAlertClosable"],[1,"alert-text"],["type","checkbox","clrCheckbox","","id","rememberme","name","rememberme",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary",3,"disabled","click"],[1,"version"],[4,"ngIf"]],template:function(e,n){1&e&&(a.jc(0,"div",0),a.jc(1,"form",1),a.jc(2,"label",2),a.ec(3,"img",3),a.ic(),a.jc(4,"div",4),a.jc(5,"input",5),a.qc("ngModelChange",function(e){return n.username=e}),a.tc(6,"translate"),a.ic(),a.jc(7,"input",6),a.qc("ngModelChange",function(e){return n.password=e}),a.tc(8,"translate"),a.ic(),a.jc(9,"clr-alert",7),a.jc(10,"clr-alert-item"),a.jc(11,"span",8),a.Vc(12),a.ic(),a.ic(),a.ic(),a.jc(13,"clr-checkbox-wrapper"),a.jc(14,"input",9),a.qc("ngModelChange",function(e){return n.rememberMe=e}),a.ic(),a.jc(15,"label"),a.Vc(16),a.tc(17,"translate"),a.ic(),a.ic(),a.jc(18,"button",10),a.qc("click",function(){return n.logIn()}),a.Vc(19),a.tc(20,"translate"),a.ic(),a.ic(),a.jc(21,"div",11),a.Tc(22,b,3,2,"span",12),a.Tc(23,f,2,0,"span",12),a.Tc(24,h,2,1,"span",12),a.ic(),a.ic(),a.ic()),2&e&&(a.Sb(5),a.zc("ngModel",n.username)("placeholder",a.uc(6,16,"common.username")),a.Sb(2),a.zc("ngModel",n.password)("placeholder",a.uc(8,18,"common.password")),a.Sb(2),a.Vb("visible",n.errorMessage),a.zc("clrAlertType","danger")("clrAlertClosable",!1),a.Sb(3),a.Xc(" ",n.errorMessage," "),a.Sb(2),a.zc("ngModel",n.rememberMe),a.Sb(2),a.Wc(a.uc(17,20,"common.remember-me")),a.Sb(2),a.zc("disabled",!n.username||!n.password),a.Sb(1),a.Xc(" ",a.uc(20,22,"common.login")," "),a.Sb(3),a.zc("ngIf",n.brand),a.Sb(1),a.zc("ngIf",!n.hideVendureBranding),a.Sb(1),a.zc("ngIf",!n.hideVersion))},directives:[l.E,l.q,l.r,u.u,o.fb,l.b,l.p,l.s,u.f,u.g,u.h,u.k,l.a,u.i,d.o],pipes:[p.d],styles:[".login-wrapper[_ngcontent-%COMP%]{background:var(--login-page-bg);background-size:auto;justify-content:center}.title[_ngcontent-%COMP%]{text-align:center}.version[_ngcontent-%COMP%]{flex:1;display:flex;align-items:flex-end;justify-content:center;color:var(--color-grey-300)}.version[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{margin-left:5px}.login-error[_ngcontent-%COMP%]{max-height:0;overflow:hidden}.login-error.visible[_ngcontent-%COMP%]{max-height:46px;transition:max-height .2s;-webkit-animation:shake .82s cubic-bezier(.36,.07,.19,.97) both;animation:shake .82s cubic-bezier(.36,.07,.19,.97) both;-webkit-animation-delay:.2s;animation-delay:.2s;transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden;perspective:1000px}@-webkit-keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}"]}),m.ctorParameters=function(){return[{type:o.v},{type:i.e}]};var v=function(){function n(t,r){e(this,n),this.router=t,this.authService=r}return t(n,[{key:"canActivate",value:function(e){var n=this;return this.authService.checkAuthenticatedStatus().pipe(Object(s.a)(function(e){return e&&n.router.navigate(["/"]),!e}))}}]),n}();v.\u0275fac=function(e){return new(e||v)(a.nc(i.e),a.nc(o.v))},v.\u0275prov=Object(a.Zb)({factory:function(){return new v(Object(a.nc)(i.e),Object(a.nc)(o.v))},token:v,providedIn:"root"}),v.ctorParameters=function(){return[{type:i.e},{type:o.v}]};var y=[{path:"",component:m,pathMatch:"full",canActivate:[v]}],w=function n(){e(this,n)};w.\u0275mod=a.bc({type:w}),w.\u0275inj=a.ac({factory:function(e){return new(e||w)},imports:[[o.Nb,i.i.forChild(y)]]})}}])}();
//# sourceMappingURL=10-es5.a1389b4733dbc64c6787.js.map