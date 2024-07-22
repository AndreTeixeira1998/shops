"use strict";(self.webpackChunkvendure_admin=self.webpackChunkvendure_admin||[]).push([[604],{5604:(E,b,i)=>{i.r(b),i.d(b,{WebhookModule:()=>d});var p=i(2703),a=i(7131),m=i(5972);const k=m.Ay`
  mutation setWebhooks($webhooks: [WebhookInput!]!) {
    setWebhooks(webhooks: $webhooks) {
      id
      event
      requestTransformer {
        name
        supportedEvents
      }
      url
    }
  }
`,g=m.Ay`
  query webhooks {
    webhooks {
      id
      event
      requestTransformer {
        name
        supportedEvents
      }
      url
    }
  }
`,f=m.Ay`
  query availableWebhookEvents {
    availableWebhookEvents
  }
`,v=m.Ay`
  query availableWebhookRequestTransformers {
    availableWebhookRequestTransformers {
      name
      supportedEvents
    }
  }
`;var e=i(5220),h=i(4725),u=i(5645),W=i(1133),_=i(647);function T(l,o){if(1&l&&(e.j41(0,"option",13),e.EFF(1),e.k0s()),2&l){const t=o.$implicit;e.Y8G("value",t.name),e.R7$(),e.SpI(" ",t.name," ")}}function C(l,o){if(1&l&&(e.j41(0,"option",13),e.EFF(1),e.k0s()),2&l){const t=o.$implicit;e.Y8G("value",t),e.R7$(),e.SpI(" ",t," ")}}function F(l,o){if(1&l){const t=e.RV6();e.j41(0,"td",19),e.EFF(1),e.k0s(),e.j41(2,"td",19),e.EFF(3),e.k0s(),e.j41(4,"td",19),e.EFF(5),e.k0s(),e.j41(6,"td")(7,"vdr-dropdown")(8,"button",20),e.EFF(9),e.nI1(10,"translate"),e.nrm(11,"clr-icon",21),e.k0s(),e.j41(12,"vdr-dropdown-menu",22)(13,"button",23),e.bIt("click",function(){const r=e.eBV(t).item,s=e.XpG();return e.Njj(s.deleteWeebhook(r.id))}),e.nrm(14,"clr-icon",24),e.EFF(15),e.nI1(16,"translate"),e.k0s(),e.j41(17,"button",25),e.bIt("click",function(){const r=e.eBV(t).item,s=e.XpG();return e.Njj(s.duplicate(null==r.requestTransformer?null:r.requestTransformer.name,r.url))}),e.nrm(18,"clr-icon",26),e.EFF(19," Duplicate "),e.k0s()()()()}if(2&l){const t=o.item;e.R7$(),e.SpI(" ",t.event," "),e.R7$(2),e.SpI(" ",null==t.requestTransformer?null:t.requestTransformer.name," "),e.R7$(2),e.SpI(" ",t.url," "),e.R7$(4),e.SpI(" ",e.bMT(10,5,"common.actions")," "),e.R7$(6),e.SpI(" ",e.bMT(16,7,"common.delete")," ")}}class c{constructor(o,t,n,r){this.formBuilder=o,this.dataService=t,this.changeDetector=n,this.notificationService=r,this.webhooks=[],this.currentPage=1,this.itemsPerPage=10,this.showMessage=!1,this.availableWeebhookEvents=[],this.filteredWeebhookEvents=[],this.avaiabelWebhookRequestTransformers=[]}ngOnInit(){this.dataService.query(f).single$.subscribe(o=>{this.filteredWeebhookEvents=this.availableWeebhookEvents=o.availableWebhookEvents}),this.dataService.query(g).single$.subscribe(o=>{this.webhooks=o.webhooks}),this.dataService.query(v).single$.toPromise().then(o=>{this.avaiabelWebhookRequestTransformers=o.availableWebhookRequestTransformers})}setPageNumber(o){this.currentPage=o}setItemsPerPage(o){this.itemsPerPage=o}showCreateModal(){this.showMessage=!0,this.eventName="",this.requestTransformerName="",this.url="",this.changeDetector.detectChanges()}create(){this.url&&""!==this.url&&this.eventName&&""!==this.eventName?this.dataService.mutate(k,{webhooks:[...this.webhooks.map(o=>({event:o.event,transformerName:o.requestTransformer?.name,url:o.url})),{event:this.eventName,transformerName:this.requestTransformerName,url:this.url}]}).subscribe(o=>{this.showMessage=!1,this.notificationService.success("Webhook created successfully"),this.webhooks=o.setWebhooks,this.changeDetector.detectChanges()}):this.notificationService.error("Please enter all the required fields")}deleteWeebhook(o){this.webhooks=this.webhooks.filter(t=>t.id!=o),this.changeDetector.detectChanges(),this.dataService.mutate(k,{webhooks:[...this.webhooks.map(t=>({event:t.event,transformerName:t.requestTransformer?.name,url:t.url}))]}).subscribe(t=>{this.webhooks=t.setWebhooks,this.notificationService.success("Webhook deleted successfully")})}requestTransformerSelected(o){o||this.requestTransformerName?this.filteredWeebhookEvents=this.avaiabelWebhookRequestTransformers.find(t=>t.name===this.requestTransformerName)?.supportedEvents??[]:this.filteredWeebhookEvents=this.availableWeebhookEvents,this.eventName=this.filteredWeebhookEvents.find(t=>t===this.eventName),this.changeDetector.detectChanges()}duplicate(o,t){this.requestTransformerName=o,this.requestTransformerSelected(o),this.url=t,this.showMessage=!0,this.changeDetector.detectChanges()}static#e=this.\u0275fac=function(t){return new(t||c)(e.rXU(h.ok),e.rXU(a.uSP),e.rXU(e.gRc),e.rXU(a.JEu))};static#t=this.\u0275cmp=e.VBU({type:c,selectors:[["webhook-component"]],decls:46,vars:12,consts:[["locationId","collection-list"],[1,"btn","btn-primary",3,"click"],["shape","add"],[3,"clrModalOpenChange","clrModalOpen"],[1,"modal-title"],[1,"modal-body"],[1,"popupContainer"],[1,"card"],[2,"width","100%"],[1,"list-group","list-group-flush"],[1,"list-group-item"],[1,"card-title"],["clrSelect","",3,"ngModelChange","ngModel"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],["clrInput","","placeholder","https://","name","input",3,"ngModelChange","ngModel"],[1,"modal-footer"],["type","button",1,"btn","btn-outline",3,"click"],[3,"pageChange","itemsPerPageChange","items","itemsPerPage","totalItems","currentPage"],[1,"left","align-middle"],["type","button","vdrDropdownTrigger","",1,"btn","btn-link","btn-sm"],["shape","caret down"],["vdrPosition","bottom-right"],["type","button","vdrDropdownItem","",1,"delete-button",3,"click"],["shape","trash",1,"is-danger"],["type","button","vdrDropdownItem","",3,"click"],["shape","copy"]],template:function(t,n){1&t&&(e.j41(0,"vdr-action-bar")(1,"vdr-ab-right"),e.nrm(2,"vdr-action-bar-items",0),e.j41(3,"button",1),e.bIt("click",function(){return n.showCreateModal()}),e.nrm(4,"clr-icon",2),e.EFF(5," Add Webhook "),e.k0s()()(),e.j41(6,"clr-modal",3),e.mxI("clrModalOpenChange",function(s){return e.DH7(n.showMessage,s)||(n.showMessage=s),s}),e.j41(7,"h3",4),e.EFF(8,"Add Webhook"),e.k0s(),e.j41(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"ul",9)(14,"li",10)(15,"h4",11),e.EFF(16,"Request Transformer"),e.k0s(),e.j41(17,"select",12),e.mxI("ngModelChange",function(s){return e.DH7(n.requestTransformerName,s)||(n.requestTransformerName=s),s}),e.bIt("ngModelChange",function(){return n.requestTransformerSelected()}),e.j41(18,"option",13),e.EFF(19,"--select---"),e.k0s(),e.DNE(20,T,2,2,"option",14),e.k0s()(),e.j41(21,"li",10)(22,"h4",11),e.EFF(23,"Event *"),e.k0s(),e.j41(24,"select",12),e.mxI("ngModelChange",function(s){return e.DH7(n.eventName,s)||(n.eventName=s),s}),e.j41(25,"option",13),e.EFF(26,"--select---"),e.k0s(),e.DNE(27,C,2,2,"option",14),e.k0s()(),e.j41(28,"li",10)(29,"h4",11),e.EFF(30,"URL *"),e.k0s(),e.j41(31,"input",15),e.mxI("ngModelChange",function(s){return e.DH7(n.url,s)||(n.url=s),s}),e.k0s()()()()()()(),e.j41(32,"div",16)(33,"button",17),e.bIt("click",function(){return n.showMessage=!1}),e.EFF(34," Cancel "),e.k0s(),e.j41(35,"button",1),e.bIt("click",function(){return n.create()}),e.EFF(36,"Submit"),e.k0s()()(),e.j41(37,"vdr-data-table",18),e.bIt("pageChange",function(s){return n.setPageNumber(s)})("itemsPerPageChange",function(s){return n.setItemsPerPage(s)}),e.j41(38,"vdr-dt-column"),e.EFF(39,"Event"),e.k0s(),e.j41(40,"vdr-dt-column"),e.EFF(41,"Request Transformer"),e.k0s(),e.j41(42,"vdr-dt-column"),e.EFF(43,"URL"),e.k0s(),e.nrm(44,"vdr-dt-column"),e.DNE(45,F,20,9,"ng-template"),e.k0s()),2&t&&(e.R7$(6),e.R50("clrModalOpen",n.showMessage),e.R7$(11),e.R50("ngModel",n.requestTransformerName),e.R7$(),e.FS9("value",void 0),e.R7$(2),e.Y8G("ngForOf",n.avaiabelWebhookRequestTransformers),e.R7$(4),e.R50("ngModel",n.eventName),e.R7$(),e.FS9("value",void 0),e.R7$(2),e.Y8G("ngForOf",n.filteredWeebhookEvents),e.R7$(4),e.R50("ngModel",n.url),e.R7$(6),e.Y8G("items",n.webhooks)("itemsPerPage",n.itemsPerPage)("totalItems",n.webhooks.length)("currentPage",n.currentPage))},dependencies:[u.U4n,u.bZN,u.zN1,u.icl,u.Yf6,W.Sq,h.xH,h.y7,h.me,h.wz,h.BC,h.vS,a.nGW,a.TXc,a.up,a.w7Z,a.Vr5,a.PsF,a.qLY,a.j$H,a.Mrl,a.TcB,_.D9],encapsulation:2})}class d{static#e=this.\u0275fac=function(t){return new(t||d)};static#t=this.\u0275mod=e.$C({type:d});static#o=this.\u0275inj=e.G2t({providers:[(0,a.VqZ)({id:"webhook",label:"Webhook",routerLink:["/extensions/webhook"],icon:"cursor-hand-open"},"settings")],imports:[a.GgS,p.iI.forChild([{path:"",pathMatch:"full",component:c,data:{breadcrumb:"Webhook"}}])]})}}}]);
//# sourceMappingURL=604.7a3d9fc747120ff9.js.map