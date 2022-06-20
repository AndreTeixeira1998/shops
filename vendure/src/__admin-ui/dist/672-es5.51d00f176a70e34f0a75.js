!function(){"use strict";function t(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(d){c=!0,i=d}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}(t,e)||n(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||n(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkvendure_admin_ui=self.webpackChunkvendure_admin_ui||[]).push([[672],{83672:function(n,r,o){o.r(r),o.d(r,{DEFAULT_DASHBOARD_WIDGET_LAYOUT:function(){return G},DEFAULT_WIDGETS:function(){return rt},DashboardComponent:function(){return R},DashboardModule:function(){return it},DashboardWidgetComponent:function(){return F},LatestOrdersWidgetComponent:function(){return B},LatestOrdersWidgetModule:function(){return Q},OrderSummaryWidgetComponent:function(){return Y},OrderSummaryWidgetModule:function(){return E},TestWidgetComponent:function(){return H},TestWidgetModule:function(){return V},WelcomeWidgetComponent:function(){return X},WelcomeWidgetModule:function(){return z},dashboardRoutes:function(){return N},"\u02750":function(){return K},"\u02751":function(){return tt},"\u02752":function(){return et},"\u02753":function(){return nt}});var c=o(51694),d=o(90417),s=o(48304),u=o(37097),l=o(9219),g=o(90380),p=o(56971),f=o(86184),h=o(3189),m=o(41460),v=o(24791),y=o(10116),b=o.n(y),w=o(14416),Z=o(56258),A=o(70942),x=o(3292),k=o(53198);function C(t,e){if(1&t){var n=c.EpF();c.TgZ(0,"button",7),c.NdJ("click",function(){var t=c.CHM(n).$implicit;return c.oxw().addWidget(t)}),c._uU(1),c.qZA()}if(2&t){var r=e.$implicit;c.xp6(1),c.hij(" ",r," ")}}var O=function(t){return{width:t}};function _(t,e){if(1&t){var n=c.EpF();c.TgZ(0,"button",22),c.NdJ("click",function(){var t=c.CHM(n).$implicit,e=c.oxw(2).$implicit;return c.oxw(2).setWidgetWidth(e,t)}),c._uU(1),c.ALo(2,"translate"),c.qZA()}if(2&t){var r=e.$implicit,i=c.oxw(2).$implicit;c.Q6J("disabled",r===i.width),c.xp6(1),c.hij(" ",c.xi3(2,2,"dashboard.widget-width",c.VKq(5,O,r))," ")}}function L(t,e){if(1&t){var n=c.EpF();c.TgZ(0,"vdr-dashboard-widget",12),c.TgZ(1,"div",13),c.TgZ(2,"div",14),c._UZ(3,"clr-icon",15),c.qZA(),c.TgZ(4,"vdr-dropdown"),c.TgZ(5,"button",16),c._UZ(6,"clr-icon",17),c.qZA(),c.TgZ(7,"vdr-dropdown-menu",3),c.TgZ(8,"h4",18),c._uU(9),c.ALo(10,"translate"),c.qZA(),c.YNc(11,_,3,7,"button",19),c._UZ(12,"div",20),c.TgZ(13,"button",7),c.NdJ("click",function(){c.CHM(n);var t=c.oxw().$implicit;return c.oxw(2).removeWidget(t)}),c._UZ(14,"clr-icon",21),c._uU(15),c.ALo(16,"translate"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()}if(2&t){var r=c.oxw().$implicit,i=c.oxw(2);c.Q6J("widgetConfig",r.config),c.xp6(9),c.Oqu(c.lcZ(10,4,"dashboard.widget-resize")),c.xp6(2),c.Q6J("ngForOf",i.getSupportedWidths(r.config)),c.xp6(4),c.hij(" ",c.lcZ(16,6,"dashboard.remove-widget")," ")}}function D(t,e){if(1&t&&(c.TgZ(0,"div",10),c.YNc(1,L,17,8,"vdr-dashboard-widget",11),c.qZA()),2&t){var n=e.$implicit,r=c.oxw(2);c.Q6J("ngClass",r.getClassForWidth(n.width))("cdkDragData",n),c.xp6(1),c.Q6J("vdrIfPermissions",n.config.requiresPermissions||null)}}var T=function(t){return{index:t}};function q(t,e){if(1&t){var n=c.EpF();c.TgZ(0,"div",8),c.NdJ("cdkDropListDropped",function(t){return c.CHM(n),c.oxw().drop(t)}),c.YNc(1,D,2,3,"div",9),c.qZA()}if(2&t){var r=e.$implicit,i=e.index,o=c.oxw();c.Q6J("cdkDropListData",c.VKq(3,T,i)),c.xp6(1),c.Q6J("ngForOf",r)("ngForTrackBy",o.trackRowItem)}}var S=["portal"];function W(t,e){if(1&t&&(c.ynx(0),c._uU(1),c.ALo(2,"translate"),c.BQk()),2&t){var n=e.ngIf;c.xp6(1),c.Oqu(c.lcZ(2,1,n))}}function M(t,e){}var I=function(t){return["/orders/",t]};function P(t,e){if(1&t&&(c.TgZ(0,"td",1),c._uU(1),c._UZ(2,"vdr-order-state-label",2),c.qZA(),c.TgZ(3,"td",1),c._UZ(4,"vdr-customer-label",3),c.qZA(),c.TgZ(5,"td",1),c._uU(6),c.ALo(7,"localeCurrency"),c.qZA(),c.TgZ(8,"td",1),c._uU(9),c.ALo(10,"timeAgo"),c.qZA(),c.TgZ(11,"td",4),c._UZ(12,"vdr-table-row-action",5),c.ALo(13,"translate"),c.qZA()),2&t){var n=e.item;c.xp6(1),c.hij(" ",n.code," "),c.xp6(1),c.Q6J("state",n.state),c.xp6(2),c.Q6J("customer",n.customer),c.xp6(2),c.Oqu(c.xi3(7,7,n.total,n.currencyCode)),c.xp6(3),c.Oqu(c.lcZ(10,10,n.orderPlacedAt)),c.xp6(3),c.Q6J("label",c.lcZ(13,12,"common.open"))("linkTo",c.VKq(14,I,n.id))}}function U(t,e){if(1&t){var n=c.EpF();c.TgZ(0,"div",7),c.TgZ(1,"button",8),c.NdJ("click",function(){c.CHM(n);var t=c.oxw();return t.selection$.next({timeframe:"day",date:t.today})}),c._uU(2),c.ALo(3,"translate"),c.qZA(),c.TgZ(4,"button",8),c.NdJ("click",function(){c.CHM(n);var t=c.oxw();return t.selection$.next({timeframe:"day",date:t.yesterday})}),c._uU(5),c.ALo(6,"translate"),c.qZA(),c.TgZ(7,"button",8),c.NdJ("click",function(){return c.CHM(n),c.oxw().selection$.next({timeframe:"week"})}),c._uU(8),c.ALo(9,"translate"),c.qZA(),c.TgZ(10,"button",8),c.NdJ("click",function(){return c.CHM(n),c.oxw().selection$.next({timeframe:"month"})}),c._uU(11),c.ALo(12,"translate"),c.qZA(),c.qZA()}if(2&t){var r=e.ngIf,i=c.oxw();c.xp6(1),c.ekj("btn-primary",r.date===i.today),c.xp6(1),c.hij(" ",c.lcZ(3,12,"dashboard.today")," "),c.xp6(2),c.ekj("btn-primary",r.date===i.yesterday),c.xp6(1),c.hij(" ",c.lcZ(6,14,"dashboard.yesterday")," "),c.xp6(2),c.ekj("btn-primary","week"===r.timeframe),c.xp6(1),c.hij(" ",c.lcZ(9,16,"dashboard.thisWeek")," "),c.xp6(2),c.ekj("btn-primary","month"===r.timeframe),c.xp6(1),c.hij(" ",c.lcZ(12,18,"dashboard.thisMonth")," ")}}function $(t,e){if(1&t&&(c.TgZ(0,"div",9),c._uU(1),c.ALo(2,"localeDate"),c.ALo(3,"localeDate"),c.qZA()),2&t){var n=e.ngIf;c.xp6(1),c.AsE(" ",c.lcZ(2,2,n.start)," - ",c.lcZ(3,4,n.end)," ")}}function j(t,e){if(1&t&&(c.TgZ(0,"p",4),c._uU(1),c.qZA()),2&t){var n=c.oxw(2);c.xp6(1),c.AsE(" ",n.hideVendureBranding?"":"Vendure"," ",n.hideVersion?"":"Admin UI v"+n.version," ")}}function J(t,e){if(1&t&&(c.TgZ(0,"div"),c.TgZ(1,"h4",3),c._uU(2),c._UZ(3,"br"),c.TgZ(4,"small",4),c._uU(5),c.ALo(6,"timeAgo"),c.qZA(),c.qZA(),c.YNc(7,j,2,2,"p",5),c.qZA()),2&t){var n=e.ngIf,r=c.oxw();c.xp6(2),c.AsE(" Welcome, ",n.firstName," ",n.lastName,""),c.xp6(3),c.hij("Last login: ",c.lcZ(6,4,n.user.lastLogin),""),c.xp6(2),c.Q6J("ngIf",!r.hideVendureBranding||!r.hideVersion)}}var R=function(){function t(e,n,r,o){i(this,t),this.dashboardWidgetService=e,this.localStorageService=n,this.changedDetectorRef=r,this.dataService=o,this.deletionMarker="__delete__"}return a(t,[{key:"ngOnInit",value:function(){var t=this;this.availableWidgetIds$=this.dataService.client.userStatus().stream$.pipe((0,u.U)(function(t){return t.userStatus.permissions}),(0,u.U)(function(e){return t.dashboardWidgetService.getAvailableIds(e)}),(0,l.b)(function(e){return t.widgetLayout=t.initLayout(e)}))}},{key:"getClassForWidth",value:function(t){switch(t){case 3:return"clr-col-12 clr-col-sm-6 clr-col-lg-3";case 4:return"clr-col-12 clr-col-sm-6 clr-col-lg-4";case 6:return"clr-col-12 clr-col-lg-6";case 8:return"clr-col-12 clr-col-lg-8";case 12:return"clr-col-12";default:(0,s.assertNever)(t)}}},{key:"getSupportedWidths",value:function(t){return t.supportedWidths||[3,4,6,8,12]}},{key:"setWidgetWidth",value:function(t,e){t.width=e,this.recalculateLayout()}},{key:"trackRow",value:function(t,e){return e.map(function(t){return"".concat(t.id,":").concat(t.width)}).join("|")}},{key:"trackRowItem",value:function(t,e){return e.config}},{key:"addWidget",value:function(t){var e,n=this.dashboardWidgetService.getWidgetById(t);if(n){var r,i={id:t,config:n,width:this.getSupportedWidths(n)[0]};this.widgetLayout&&this.widgetLayout.length?r=this.widgetLayout[this.widgetLayout.length-1]:(r=[],null===(e=this.widgetLayout)||void 0===e||e.push(r)),r.push(i),this.recalculateLayout()}}},{key:"removeWidget",value:function(t){t.id=this.deletionMarker,this.recalculateLayout()}},{key:"drop",value:function(t){var e=t.currentIndex,n=t.previousIndex,r=t.previousContainer,i=t.container;if((n!==e||r.data.index!==i.data.index)&&this.widgetLayout){var o=this.widgetLayout[r.data.index],a=this.widgetLayout[i.data.index];o.splice(n,1),a.splice(e,0,t.item.data),this.recalculateLayout()}}},{key:"initLayout",value:function(t){var e,n=this.localStorageService.get("dashboardWidgetLayout");return n&&(e=n.filter(function(e){return t.includes(e.id)})),this.dashboardWidgetService.getWidgetLayout(e)}},{key:"recalculateLayout",value:function(){var t=this;if(this.widgetLayout){var n=this.widgetLayout.reduce(function(t,n){return[].concat(e(t),e(n))},[]).filter(function(e){return e.id!==t.deletionMarker}).map(function(t){return{id:t.id,width:t.width}});this.widgetLayout=this.dashboardWidgetService.getWidgetLayout(n),this.localStorageService.set("dashboardWidgetLayout",n),setTimeout(function(){return t.changedDetectorRef.markForCheck()})}}}]),t}();R.\u0275fac=function(t){return new(t||R)(c.Y36(d.ayj),c.Y36(d.n2A),c.Y36(c.sBO),c.Y36(d.DoR))},R.\u0275cmp=c.Xpm({type:R,selectors:[["vdr-dashboard"]],decls:11,vars:8,consts:[[1,"widget-header"],["vdrDropdownTrigger","",1,"btn","btn-secondary","btn-sm"],["shape","plus"],["vdrPosition","bottom-right"],["class","button","vdrDropdownItem","",3,"click",4,"ngFor","ngForOf"],["cdkDropListGroup",""],["class","clr-row dashboard-row","cdkDropList","","cdkDropListOrientation","horizontal",3,"cdkDropListData","cdkDropListDropped",4,"ngFor","ngForOf","ngForTrackBy"],["vdrDropdownItem","",1,"button",3,"click"],["cdkDropList","","cdkDropListOrientation","horizontal",1,"clr-row","dashboard-row",3,"cdkDropListData","cdkDropListDropped"],["class","dashboard-item","cdkDrag","",3,"ngClass","cdkDragData",4,"ngFor","ngForOf","ngForTrackBy"],["cdkDrag","",1,"dashboard-item",3,"ngClass","cdkDragData"],[3,"widgetConfig",4,"vdrIfPermissions"],[3,"widgetConfig"],[1,"flex"],["cdkDragHandle","",1,"drag-handle"],["shape","drag-handle","size","24"],["vdrDropdownTrigger","",1,"icon-button"],["shape","ellipsis-vertical"],[1,"dropdown-header"],["class","button","vdrDropdownItem","",3,"disabled","click",4,"ngFor","ngForOf"],["role","separator",1,"dropdown-divider"],["shape","trash",1,"is-danger"],["vdrDropdownItem","",1,"button",3,"disabled","click"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"vdr-dropdown"),c.TgZ(2,"button",1),c._UZ(3,"clr-icon",2),c._uU(4),c.ALo(5,"translate"),c.qZA(),c.TgZ(6,"vdr-dropdown-menu",3),c.YNc(7,C,2,1,"button",4),c.ALo(8,"async"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(9,"div",5),c.YNc(10,q,2,5,"div",6),c.qZA()),2&t&&(c.xp6(4),c.hij(" ",c.lcZ(5,4,"dashboard.add-widget")," "),c.xp6(3),c.Q6J("ngForOf",c.lcZ(8,6,e.availableWidgetIds$)),c.xp6(3),c.Q6J("ngForOf",e.widgetLayout)("ngForTrackBy",e.trackRow))},directives:function(){return[d.JOL,d.UaT,Z.qvL,d.N9E,A.sg,x.Fd,Z.q0d,d.HH4,x.Wj,x.Zt,A.mk,d.HAh,F,x.Bh]},pipes:function(){return[k.X$,A.Ov]},styles:["[_nghost-%COMP%]{display:block;max-width:1200px;margin:auto}.widget-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.placeholder[_ngcontent-%COMP%]{color:var(--color-grey-300);text-align:center}.placeholder[_ngcontent-%COMP%]   .version[_ngcontent-%COMP%]{font-size:3em;margin:24px;line-height:1em}.placeholder[_ngcontent-%COMP%]     .clr-i-outline{fill:var(--color-grey-200)}vdr-dashboard-widget[_ngcontent-%COMP%]{margin-bottom:24px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.dashboard-row[_ngcontent-%COMP%]{padding:0;border-width:1;margin-bottom:6px;transition:padding .2s,margin .2s}.dashboard-row.cdk-drop-list-dragging[_ngcontent-%COMP%], .dashboard-row.cdk-drop-list-receiving[_ngcontent-%COMP%]{border:1px dashed var(--color-component-border-200);padding:6px}.dashboard-row.cdk-drop-list-dragging[_ngcontent-%COMP%]   .dashboard-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"],changeDetection:0}),R.ctorParameters=function(){return[{type:d.ayj},{type:d.n2A},{type:c.sBO},{type:d.DoR}]};var F=function(){function t(e){i(this,t),this.componentFactoryResolver=e}return a(t,[{key:"ngAfterViewInit",value:function(){this.loadWidget()}},{key:"loadWidget",value:function(){return(0,h.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!((e=this.widgetConfig.loadComponent())instanceof Promise)){t.next=7;break}return t.next=4,e;case 4:t.t0=t.sent,t.next=8;break;case 7:t.t0=e;case 8:n=t.t0,this.componentRef=this.portal.createComponent(this.componentFactoryResolver.resolveComponentFactory(n)),this.componentRef.changeDetectorRef.detectChanges();case 10:case"end":return t.stop()}},t,this)}))}},{key:"ngOnDestroy",value:function(){this.componentRef&&this.componentRef.destroy()}}]),t}();F.\u0275fac=function(t){return new(t||F)(c.Y36(c._Vd))},F.\u0275cmp=c.Xpm({type:F,selectors:[["vdr-dashboard-widget"]],viewQuery:function(t,e){var n;(1&t&&c.Gf(S,5,c.s_b),2&t)&&(c.iGM(n=c.CRH())&&(e.portal=n.first))},inputs:{widgetConfig:"widgetConfig"},ngContentSelectors:["*"],decls:9,vars:1,consts:[[1,"card"],[1,"card-header"],[1,"title"],[4,"ngIf"],[1,"controls"],[1,"card-block"],["portal",""]],template:function(t,e){1&t&&(c.F$t(),c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"div",2),c.YNc(3,W,3,3,"ng-container",3),c.qZA(),c.TgZ(4,"div",4),c.Hsn(5),c.qZA(),c.qZA(),c.TgZ(6,"div",5),c.YNc(7,M,0,0,"ng-template",null,6,c.W1O),c.qZA(),c.qZA()),2&t&&(c.xp6(3),c.Q6J("ngIf",e.widgetConfig.title))},directives:[A.O5],pipes:[k.X$],styles:["[_nghost-%COMP%]{display:block}.card[_ngcontent-%COMP%]{margin-top:0;min-height:200px}.card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"],changeDetection:0}),F.ctorParameters=function(){return[{type:c._Vd}]},F.propDecorators={widgetConfig:[{type:c.IIB}],portal:[{type:c.i9L,args:["portal",{read:c.s_b}]}]};var N=[{path:"",component:R,pathMatch:"full"}],B=function(){function t(e){i(this,t),this.dataService=e}return a(t,[{key:"ngOnInit",value:function(){this.latestOrders$=this.dataService.order.getOrders({take:10,filter:{active:{eq:!1},state:{notEq:"Cancelled"}},sort:{orderPlacedAt:d.Asd.DESC}}).refetchOnChannelChange().mapStream(function(t){return t.orders.items})}}]),t}();B.\u0275fac=function(t){return new(t||B)(c.Y36(d.DoR))},B.\u0275cmp=c.Xpm({type:B,selectors:[["vdr-latest-orders-widget"]],decls:3,vars:3,consts:[[3,"items"],[1,"left","align-middle"],[3,"state"],[3,"customer"],[1,"right","align-middle"],["iconShape","shopping-cart",3,"label","linkTo"]],template:function(t,e){1&t&&(c.TgZ(0,"vdr-data-table",0),c.ALo(1,"async"),c.YNc(2,P,14,16,"ng-template"),c.qZA()),2&t&&c.Q6J("items",c.lcZ(1,1,e.latestOrders$))},directives:[d.Qj_,d.GXt,d.d$,d.v_8],pipes:[A.Ov,d.kgx,d.eGd,k.X$],styles:["vdr-data-table[_ngcontent-%COMP%]     table{margin-top:0}"],changeDetection:0}),B.ctorParameters=function(){return[{type:d.DoR}]};var Q=a(function t(){i(this,t)});Q.\u0275fac=function(t){return new(t||Q)},Q.\u0275mod=c.oAB({type:Q}),Q.\u0275inj=c.cJS({imports:[[d.IR2,d.m81]]});var Y=function(){function t(e){i(this,t),this.dataService=e,this.today=new Date,this.yesterday=new Date((new Date).setDate(this.today.getDate()-1)),this.selection$=new w.X({timeframe:"day",date:this.today})}return a(t,[{key:"ngOnInit",value:function(){var t=this;this.dateRange$=this.selection$.pipe((0,g.x)(),(0,u.U)(function(t){return{start:b()(t.date).startOf(t.timeframe).toDate(),end:b()(t.date).endOf(t.timeframe).toDate()}}),(0,p.d)(1));var e=this.dateRange$.pipe((0,f.w)(function(e){var n=e.start,r=e.end;return t.dataService.order.getOrderSummary(n,r).refetchOnChannelChange().mapStream(function(t){return t.orders})}),(0,p.d)(1));this.totalOrderCount$=e.pipe((0,u.U)(function(t){return t.totalItems})),this.totalOrderValue$=e.pipe((0,u.U)(function(t){return t.items.reduce(function(t,e){return t+e.total},0)/100})),this.currencyCode$=this.dataService.settings.getActiveChannel().refetchOnChannelChange().mapStream(function(t){return t.activeChannel.currencyCode||void 0})}}]),t}();Y.\u0275fac=function(t){return new(t||Y)(c.Y36(d.DoR))},Y.\u0275cmp=c.Xpm({type:Y,selectors:[["vdr-order-summary-widget"]],decls:22,vars:23,consts:[[1,"stats"],[1,"stat"],[1,"stat-figure"],[1,"stat-label"],[1,"footer"],["class","btn-group btn-outline-primary btn-sm",4,"ngIf"],["class","date-range p5",4,"ngIf"],[1,"btn-group","btn-outline-primary","btn-sm"],[1,"btn",3,"click"],[1,"date-range","p5"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"div",2),c._uU(3),c.ALo(4,"async"),c.qZA(),c.TgZ(5,"div",3),c._uU(6),c.ALo(7,"translate"),c.qZA(),c.qZA(),c.TgZ(8,"div",1),c.TgZ(9,"div",2),c._uU(10),c.ALo(11,"currency"),c.ALo(12,"async"),c.ALo(13,"async"),c.qZA(),c.TgZ(14,"div",3),c._uU(15),c.ALo(16,"translate"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(17,"div",4),c.YNc(18,U,13,20,"div",5),c.ALo(19,"async"),c.YNc(20,$,4,6,"div",6),c.ALo(21,"async"),c.qZA()),2&t&&(c.xp6(3),c.Oqu(c.lcZ(4,6,e.totalOrderCount$)),c.xp6(3),c.Oqu(c.lcZ(7,8,"dashboard.total-orders")),c.xp6(4),c.hij(" ",c.xi3(11,10,c.lcZ(12,13,e.totalOrderValue$),c.lcZ(13,15,e.currencyCode$)||void 0)," "),c.xp6(5),c.Oqu(c.lcZ(16,17,"dashboard.total-order-value")),c.xp6(3),c.Q6J("ngIf",c.lcZ(19,19,e.selection$)),c.xp6(2),c.Q6J("ngIf",c.lcZ(21,21,e.dateRange$)))},directives:[A.O5],pipes:[A.Ov,k.X$,A.H9,d.HbD],styles:[".stats[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.stat[_ngcontent-%COMP%]{text-align:center}.stat-figure[_ngcontent-%COMP%]{font-size:2rem;line-height:3rem}.stat-label[_ngcontent-%COMP%]{text-transform:uppercase}.date-range[_ngcontent-%COMP%]{margin-top:0}.footer[_ngcontent-%COMP%]{margin-top:24px;display:flex;flex-direction:column;justify-content:space-between}"],changeDetection:0}),Y.ctorParameters=function(){return[{type:d.DoR}]};var E=a(function t(){i(this,t)});E.\u0275fac=function(t){return new(t||E)},E.\u0275mod=c.oAB({type:E}),E.\u0275inj=c.cJS({imports:[[d.IR2]]});var H=a(function t(){i(this,t)});H.\u0275fac=function(t){return new(t||H)},H.\u0275cmp=c.Xpm({type:H,selectors:[["vdr-test-widget"]],decls:2,vars:0,template:function(t,e){1&t&&(c.TgZ(0,"p"),c._uU(1,"This is a test widget!"),c.qZA())},styles:[""],changeDetection:0});var V=a(function t(){i(this,t)});V.\u0275fac=function(t){return new(t||V)},V.\u0275mod=c.oAB({type:V}),V.\u0275inj=c.cJS({});var X=function(){function t(e){i(this,t),this.dataService=e,this.version=d.s5M,this.brand=(0,d.hq7)().brand,this.hideVendureBranding=(0,d.hq7)().hideVendureBranding,this.hideVersion=(0,d.hq7)().hideVersion}return a(t,[{key:"ngOnInit",value:function(){this.administrator$=this.dataService.administrator.getActiveAdministrator().mapStream(function(t){return t.activeAdministrator||null})}}]),t}();X.\u0275fac=function(t){return new(t||X)(c.Y36(d.DoR))},X.\u0275cmp=c.Xpm({type:X,selectors:[["vdr-welcome-widget"]],decls:4,vars:3,consts:[[4,"ngIf"],[1,"placeholder"],["shape","line-chart","size","128"],[1,"h4"],[1,"p5"],["class","p5",4,"ngIf"]],template:function(t,e){1&t&&(c.YNc(0,J,8,6,"div",0),c.ALo(1,"async"),c.TgZ(2,"div",1),c._UZ(3,"clr-icon",2),c.qZA()),2&t&&c.Q6J("ngIf",c.lcZ(1,1,e.administrator$))},directives:[A.O5,Z.qvL],pipes:[A.Ov,d.eGd],styles:["[_nghost-%COMP%]{display:flex;justify-content:space-between}.placeholder[_ngcontent-%COMP%]{color:var(--color-grey-200)}"],changeDetection:0}),X.ctorParameters=function(){return[{type:d.DoR}]};var z=a(function t(){i(this,t)});z.\u0275fac=function(t){return new(t||z)},z.\u0275mod=c.oAB({type:z}),z.\u0275inj=c.cJS({imports:[[d.IR2]]});var G=[{id:"welcome",width:12},{id:"orderSummary",width:6},{id:"latestOrders",width:6}],K=function(){return X},tt=function(){return Y},et=function(){return B},nt=function(){return H},rt={welcome:{loadComponent:K},orderSummary:{title:(0,v.J)("dashboard.orders-summary"),loadComponent:tt,requiresPermissions:[d.y3$.ReadOrder]},latestOrders:{title:(0,v.J)("dashboard.latest-orders"),loadComponent:et,supportedWidths:[6,8,12],requiresPermissions:[d.y3$.ReadOrder]},testWidget:{title:"Test Widget",loadComponent:nt}},it=a(function e(n){i(this,e),Object.entries(rt).map(function(e){var r=t(e,2),i=r[0],o=r[1];return n.registerWidget(i,o)}),0===n.getDefaultLayout().length&&n.setDefaultLayout(G)});it.\u0275fac=function(t){return new(t||it)(c.LFG(d.ayj))},it.\u0275mod=c.oAB({type:it}),it.\u0275inj=c.cJS({imports:[[d.m81,m.Bz.forChild(N)]]}),it.ctorParameters=function(){return[{type:d.ayj}]}}}])}();
//# sourceMappingURL=672-es5.51d00f176a70e34f0a75.js.map