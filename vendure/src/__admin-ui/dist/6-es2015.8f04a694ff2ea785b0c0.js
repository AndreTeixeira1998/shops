(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"f/O5":function(e,o,t){"use strict";t.r(o),t.d(o,"WebhookModule",function(){return h});var r=t("oIEy"),n=t("FWuv"),i=t("UNrv"),c=t("RlrJ"),a=t("ktN7"),s=t.n(a);const u=s.a`
  mutation updateWebhook($url: String!) {
    updateWebhook(url: $url)
  }
`,l=s.a`
  query webhook {
    webhook
  }
`;var b=t("Iq5M");class d{constructor(e,o,t,r,n,i,a){this.formBuilder=r,this.dataService=n,this.changeDetector=i,this.notificationService=a,this.webhookForm=this.formBuilder.group({url:["https://example.com",c.C.required]})}ngOnInit(){return Object(i.b)(this,void 0,void 0,function*(){yield this.dataService.query(l).mapStream(e=>e.webhook).subscribe(e=>this.webhookForm.controls.url.setValue(e))})}save(){return Object(i.b)(this,void 0,void 0,function*(){console.log("SAVEDDD",this.webhookForm.value.url);try{if(this.webhookForm.dirty){const e=this.webhookForm.value;yield this.dataService.mutate(u,{url:e.url}).toPromise()}this.webhookForm.markAsPristine(),this.changeDetector.markForCheck(),this.notificationService.success("common.notify-update-success",{entity:"Webhook"})}catch(e){this.notificationService.error("common.notify-update-error",{entity:"Webhook"})}})}}d.\u0275fac=function(e){return new(e||d)(b.dc(r.a),b.dc(r.e),b.dc(n.Mb),b.dc(c.e),b.dc(n.M),b.dc(b.k),b.dc(n.Eb))},d.\u0275cmp=b.Xb({type:d,selectors:[["greeter"]],decls:8,vars:2,consts:[[1,"clr-row"],[1,"clr-col"],[1,"form",3,"formGroup"],[1,"form-block"],["label","Webhook url","for","url"],["id","url","type","text","formControlName","url"],[1,"btn","btn-primary",3,"disabled","click"]],template:function(e,o){1&e&&(b.jc(0,"div",0),b.jc(1,"div",1),b.jc(2,"form",2),b.jc(3,"section",3),b.jc(4,"vdr-form-field",4),b.ec(5,"input",5),b.ic(),b.jc(6,"button",6),b.qc("click",function(){return o.save()}),b.Vc(7," Save "),b.ic(),b.ic(),b.ic(),b.ic(),b.ic()),2&e&&(b.Sb(2),b.zc("formGroup",o.webhookForm),b.Sb(4),b.zc("disabled",o.webhookForm.invalid||o.webhookForm.pristine))},directives:[c.E,c.q,c.j,n.eb,n.fb,c.b,c.p,c.h],encapsulation:2});class h{}h.\u0275mod=b.bc({type:h}),h.\u0275inj=b.ac({factory:function(e){return new(e||h)},providers:[Object(n.Wb)({id:"webhook",label:"Webhook",routerLink:["/extensions/webhook"],icon:"cursor-hand-open"},"settings")],imports:[[n.Nb,r.i.forChild([{path:"",pathMatch:"full",component:d,data:{breadcrumb:"Webhook"}}])]]})},ktN7:function(e,o,t){var r=t("VvTQ").parse;function n(e){return e.replace(/[\s,]+/g," ").trim()}var i={},c={};var a=!0;function s(e,o){var t=Object.prototype.toString.call(e);if("[object Array]"===t)return e.map(function(e){return s(e,o)});if("[object Object]"!==t)throw new Error("Unexpected input.");o&&e.loc&&delete e.loc,e.loc&&(delete e.loc.startToken,delete e.loc.endToken);var r,n,i,c=Object.keys(e);for(r in c)c.hasOwnProperty(r)&&(n=e[c[r]],"[object Object]"!==(i=Object.prototype.toString.call(n))&&"[object Array]"!==i||(e[c[r]]=s(n,!0)));return e}var u=!1;function l(e){var o=n(e);if(i[o])return i[o];var t=r(e,{experimentalFragmentVariables:u});if(!t||"Document"!==t.kind)throw new Error("Not a valid GraphQL document.");return t=s(t=function(e){for(var o,t={},r=[],i=0;i<e.definitions.length;i++){var s=e.definitions[i];if("FragmentDefinition"===s.kind){var u=s.name.value,l=n((o=s.loc).source.body.substring(o.start,o.end));c.hasOwnProperty(u)&&!c[u][l]?(a&&console.warn("Warning: fragment with name "+u+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"),c[u][l]=!0):c.hasOwnProperty(u)||(c[u]={},c[u][l]=!0),t[l]||(t[l]=!0,r.push(s))}else r.push(s)}return e.definitions=r,e}(t),!1),i[o]=t,t}function b(){for(var e=Array.prototype.slice.call(arguments),o=e[0],t="string"==typeof o?o:o[0],r=1;r<e.length;r++)e[r]&&e[r].kind&&"Document"===e[r].kind?t+=e[r].loc.source.body:t+=e[r],t+=o[r];return l(t)}b.default=b,b.resetCaches=function(){i={},c={}},b.disableFragmentWarnings=function(){a=!1},b.enableExperimentalFragmentVariables=function(){u=!0},b.disableExperimentalFragmentVariables=function(){u=!1},e.exports=b}}]);
//# sourceMappingURL=6-es2015.8f04a694ff2ea785b0c0.js.map