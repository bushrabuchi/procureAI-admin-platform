import{B as LE,Cn as ie,Cr as vr,Ct as Sn,Dt as Tr,F as Ir,Ft as Wh,G as Lp,Gn as oD,H as La,I as JE,K as MD,Lr as zp,Lt as Wp,Mt as Vp,Nr as yu,On as jo,Or as x,Q as Mv,Rt as Xp,S as Eg,St as Sm,T as Fp,Tn as ih,Vn as mh,Wn as ng,Xn as ow,Yn as or,Z as Mp,Zt as b,ar as ql,at as OF,bn as hi$1,c as Ac,dr as sE,dt as Pe$1,en as cE,er as pr,f as Au,gr as tD,gt as Qm,ht as Qh,in as dE,ir as qh,it as OE,j as Gp,jr as yD,k as Gh,kn as jp,kr as xF,kt as UE,lt as PE,m as Bp,nn as cv,nr as q,nt as Ne$1,o as AE,on as eD,or as qp,ot as Oc,pr as sg,pt as Pp,qt as ag,rt as Ni,sr as rD,tr as pt,u as An,ur as sD,ut as Pc,vt as RF,w as FE,wr as vu,xt as Ru,yt as Rc,z as LD,zt as Y}from"./chunk-BPWxYebT.js";import{F as Xn,G as dl,J as mi$1,L as Z,N as Wr,R as _a,Z as ns,a as D,f as Ha,q as kt,s as Dr,t as Ai,tt as sl,u as Er,w as Qe$1}from"./chunk-DMRh-U1C.js";import{f as yi$1}from"./chunk-B5EDmuDJ.js";import{b as bt,c as Kt$1,d as Pt,f as Se,g as X$1,l as Mt,m as T,n as Ae,p as St,r as At,s as H,t as $t,u as Oi,w as kt$1}from"./chunk-CiUrZJWB.js";import{i as mt,n as Dt}from"./chunk-CxEy2hqI.js";import{i as ne,n as Tn,r as lt,t as Dn}from"./chunk-CHqgBMbz.js";var z=new x(`CDK_TABLE`);var Ee=(()=>{class n{template=b(pr);static ɵfac=function(t){return new(t||n)};static ɵdir=dE({type:n,selectors:[[``,`cdkCellDef`,``]]})}return n})();var Ne=(()=>{class n{template=b(pr);static ɵfac=function(t){return new(t||n)};static ɵdir=dE({type:n,selectors:[[``,`cdkHeaderCellDef`,``]]})}return n})();var Xt=(()=>{class n{template=b(pr);static ɵfac=function(t){return new(t||n)};static ɵdir=dE({type:n,selectors:[[``,`cdkFooterCellDef`,``]]})}return n})();var X=(()=>{class n{_table=b(z,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,`-`),this._updateColumnCssClassName())}static ɵfac=function(t){return new(t||n)};static ɵdir=dE({type:n,selectors:[[``,`cdkColumnDef`,``]],contentQueries:function(t,i,o){if(t&1&&Gp(o,Ee,5)(o,Ne,5)(o,Xt,5),t&2){let a;rD(a=oD())&&(i.cell=a.first),rD(a=oD())&&(i.headerCell=a.first),rD(a=oD())&&(i.footerCell=a.first)}},inputs:{name:[0,`cdkColumnDef`,`name`],sticky:[2,`sticky`,`sticky`,RF],stickyEnd:[2,`stickyEnd`,`stickyEnd`,RF]}})}return n})();var Oe=class{constructor(r,e){e.nativeElement.classList.add(...r._columnCssClassName)}};var Kt=(()=>{class n extends Oe{constructor(){super(b(X),b(Ir))}static ɵfac=function(t){return new(t||n)};static ɵdir=dE({type:n,selectors:[[`cdk-header-cell`],[`th`,`cdk-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`cdk-header-cell`],features:[Mp]})}return n})();var qt=(()=>{class n extends Oe{constructor(){let e=b(X),t=b(Ir);super(e,t);let i=e._table?._getCellRole();i&&t.nativeElement.setAttribute(`role`,i)}static ɵfac=function(t){return new(t||n)};static ɵdir=dE({type:n,selectors:[[`cdk-cell`],[`td`,`cdk-cell`,``]],hostAttrs:[1,`cdk-cell`],features:[Mp]})}return n})();var Ue=(()=>{class n{template=b(pr);_differs=b(ow);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof be?e.headerCell.template:this instanceof Ye?e.footerCell.template:e.cell.template}static ɵfac=function(t){return new(t||n)};static ɵdir=dE({type:n,features:[Sm]})}return n})();var be=(()=>{class n extends Ue{_table=b(z,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(i){return(e||(e=Qm(n)))(i||n)}})();static ɵdir=dE({type:n,selectors:[[``,`cdkHeaderRowDef`,``]],inputs:{columns:[0,`cdkHeaderRowDef`,`columns`],sticky:[2,`cdkHeaderRowDefSticky`,`sticky`,RF]},features:[Mp,Sm]})}return n})();var Ye=(()=>{class n extends Ue{_table=b(z,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(i){return(e||(e=Qm(n)))(i||n)}})();static ɵdir=dE({type:n,selectors:[[``,`cdkFooterRowDef`,``]],inputs:{columns:[0,`cdkFooterRowDef`,`columns`],sticky:[2,`cdkFooterRowDefSticky`,`sticky`,RF]},features:[Mp,Sm]})}return n})();var Pe=(()=>{class n extends Ue{_table=b(z,{optional:!0});when;static ɵfac=(()=>{let e;return function(i){return(e||(e=Qm(n)))(i||n)}})();static ɵdir=dE({type:n,selectors:[[``,`cdkRowDef`,``]],inputs:{columns:[0,`cdkRowDefColumns`,`columns`],when:[0,`cdkRowDefWhen`,`when`]},features:[Mp]})}return n})();var J=(()=>{class n{_viewContainer=b(Ni);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static ɵfac=function(t){return new(t||n)};static ɵdir=dE({type:n,selectors:[[``,`cdkCellOutlet`,``]]})}return n})();var $e=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=sE({type:n,selectors:[[`cdk-header-row`],[`tr`,`cdk-header-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-header-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&Bp(0,0)},dependencies:[J],encapsulation:2,changeDetection:1})}return n})();var Ge=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=sE({type:n,selectors:[[`cdk-row`],[`tr`,`cdk-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&Bp(0,0)},dependencies:[J],encapsulation:2,changeDetection:1})}return n})();var Fe=(()=>{class n{templateRef=b(pr);_contentClassNames=[`cdk-no-data-row`,`cdk-row`];_cellClassNames=[`cdk-cell`,`cdk-no-data-cell`];_cellSelector=`td, cdk-cell, [cdk-cell], .cdk-cell`;static ɵfac=function(t){return new(t||n)};static ɵdir=dE({type:n,selectors:[[`ng-template`,`cdkNoDataRow`,``]]})}return n})();var Gt=[`top`,`bottom`,`left`,`right`];var je=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(r=>this._updateCachedSizes(r)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(r,e,t=!0,i=!0,o,a,l){this._isNativeHtmlTable=r,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=i,this.direction=o,this._positionListener=a,this._tableInjector=l,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(r,e){(e.includes(`left`)||e.includes(`right`))&&this._removeFromStickyColumnReplayQueue(r);let t=[];for(let i of r)i.nodeType===i.ELEMENT_NODE&&t.push(i,...Array.from(i.children));cv({write:()=>{for(let i of t)this._removeStickyStyle(i,e)}},{injector:this._tableInjector})}updateStickyColumns(r,e,t,i=!0,o=!0){if(!r.length||!this._isBrowser||!(e.some(O=>O)||t.some(O=>O))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let a=r[0],l=a.children.length,s=this.direction===`rtl`,m=s?`right`:`left`,d=s?`left`:`right`,h=e.lastIndexOf(!0),p=t.indexOf(!0),y,Ze,Je;o&&this._updateStickyColumnReplayQueue({rows:[...r],stickyStartStates:[...e],stickyEndStates:[...t]}),cv({earlyRead:()=>{y=this._getCellWidths(a,i),Ze=this._getStickyStartColumnPositions(y,e),Je=this._getStickyEndColumnPositions(y,t)},write:()=>{for(let O of r)for(let T=0;T<l;T++){let et=O.children[T];e[T]&&this._addStickyStyle(et,m,Ze[T],T===h),t[T]&&this._addStickyStyle(et,d,Je[T],T===p)}this._positionListener&&y.some(O=>!!O)&&(this._positionListener.stickyColumnsUpdated({sizes:h===-1?[]:y.slice(0,h+1).map((O,T)=>e[T]?O:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:p===-1?[]:y.slice(p).map((O,T)=>t[T+p]?O:null).reverse()}))}},{injector:this._tableInjector})}stickRows(r,e,t){if(!this._isBrowser)return;let i=t===`bottom`?r.slice().reverse():r,o=t===`bottom`?e.slice().reverse():e,a=[],l=[],s=[];cv({earlyRead:()=>{for(let m=0,d=0;m<i.length;m++){if(!o[m])continue;a[m]=d;let h=i[m];s[m]=this._isNativeHtmlTable?Array.from(h.children):[h];let p=this._retrieveElementSize(h).height;d+=p,l[m]=p}},write:()=>{let m=o.lastIndexOf(!0);for(let d=0;d<i.length;d++){if(!o[d])continue;let h=a[d],p=d===m;for(let y of s[d])this._addStickyStyle(y,t,h,p)}t===`top`?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:a,elements:s}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:a,elements:s})}},{injector:this._tableInjector})}updateStickyFooterContainer(r,e){this._isNativeHtmlTable&&cv({write:()=>{let t=r.querySelector(`tfoot`);t&&(e.some(i=>!i)?this._removeStickyStyle(t,[`bottom`]):this._addStickyStyle(t,`bottom`,0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(r,e){if(!r.classList.contains(this._stickCellCss))return;for(let i of e)r.style[i]=``,r.classList.remove(this._borderCellCss[i]);Gt.some(i=>e.indexOf(i)===-1&&r.style[i])?r.style.zIndex=this._getCalculatedZIndex(r):(r.style.zIndex=``,this._needsPositionStickyOnElement&&(r.style.position=``),r.classList.remove(this._stickCellCss))}_addStickyStyle(r,e,t,i){r.classList.add(this._stickCellCss),i&&r.classList.add(this._borderCellCss[e]),r.style[e]=`${t}px`,r.style.zIndex=this._getCalculatedZIndex(r),this._needsPositionStickyOnElement&&(r.style.cssText+=`position: -webkit-sticky; position: sticky; `)}_getCalculatedZIndex(r){let e={top:100,bottom:10,left:1,right:1},t=0;for(let i of Gt)r.style[i]&&(t+=e[i]);return t?`${t}`:``}_getCellWidths(r,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],i=r.children;for(let o=0;o<i.length;o++){let a=i[o];t.push(this._retrieveElementSize(a).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(r,e){let t=[],i=0;for(let o=0;o<r.length;o++)e[o]&&(t[o]=i,i+=r[o]);return t}_getStickyEndColumnPositions(r,e){let t=[],i=0;for(let o=r.length;o>0;o--)e[o]&&(t[o]=i,i+=r[o]);return t}_retrieveElementSize(r){let e=this._elemSizeCache.get(r);if(e)return e;let t=r.getBoundingClientRect(),i={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(r,i),this._resizeObserver.observe(r,{box:`border-box`})),i}_updateStickyColumnReplayQueue(r){this._removeFromStickyColumnReplayQueue(r.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(r)}_removeFromStickyColumnReplayQueue(r){let e=new Set(r);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(i=>!e.has(i));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(r){let e=!1;for(let t of r){let i=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};i.width!==this._elemSizeCache.get(t.target)?.width&&li(t.target)&&(e=!0),this._elemSizeCache.set(t.target,i)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function li(n){return[`cdk-cell`,`cdk-header-cell`,`cdk-footer-cell`].some(r=>n.classList.contains(r))}function Wt(n){return Error(`Could not find column with id "${n}".`)}var ge=new x(`STICKY_POSITIONING_LISTENER`);var We=(()=>{class n{viewContainer=b(Ni);elementRef=b(Ir);constructor(){let e=b(z);e._rowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=dE({type:n,selectors:[[``,`rowOutlet`,``]]})}return n})();var Qe=(()=>{class n{viewContainer=b(Ni);elementRef=b(Ir);constructor(){let e=b(z);e._headerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=dE({type:n,selectors:[[``,`headerRowOutlet`,``]]})}return n})();var Xe=(()=>{class n{viewContainer=b(Ni);elementRef=b(Ir);constructor(){let e=b(z);e._footerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=dE({type:n,selectors:[[``,`footerRowOutlet`,``]]})}return n})();var Ke=(()=>{class n{viewContainer=b(Ni);elementRef=b(Ir);constructor(){let e=b(z);e._noDataRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=dE({type:n,selectors:[[``,`noDataRowOutlet`,``]]})}return n})();var qe=(()=>{class n{_differs=b(ow);_changeDetectorRef=b(xF);_elementRef=b(Ir);_dir=b(ns,{optional:!0});_platform=b(D);_viewRepeater;_viewportRuler=b(T);_injector=b(ie);_virtualScrollViewport=b(Oi,{optional:!0,host:!0});_positionListener=b(ge,{optional:!0})||b(ge,{optional:!0,skipSelf:!0});_document=b(or);_data;_renderedRange;_onDestroy=new Y;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_rowDefsByView=new WeakMap;_isNativeHtmlTable;_stickyStyler;stickyCssClass=`cdk-table-sticky`;needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new Y;_footerRowStickyUpdates=new Y;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute(`role`);return e===`grid`||e===`treegrid`?`gridcell`:`cell`}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new Y;_dataStream=new Y;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new Pe$1;viewChange=new Sn({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){b(new mh(`role`),{optional:!0})||this._elementRef.nativeElement.setAttribute(`role`,`table`),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName===`TABLE`,this._dataDiffer=this._differs.find([]).create((t,i)=>this.trackBy?this.trackBy(i.dataIndex,i.data):i)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(Eg(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Kt$1:new lt,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),Ae(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(i,o,a)=>this._getEmbeddedViewArgs(i.item,a),i=>i.item.data,i=>{if(i.operation===H.INSERTED&&i.context){this._renderCellTemplateForItem(i.record.item.rowDef,i.context);let o=t.get(i.record.currentIndex);this._rowDefsByView.set(o,i.record.item.rowDef)}}),e.forEachIdentityChange(i=>{let o=i.currentIndex,a=t.get(o);if(this._rowDefsByView.get(a)!==i.item.rowDef){t.remove(o);let l=this._renderRow(this._rowOutlet,i.item.rowDef,o,{$implicit:i.item.data});this._rowDefsByView.set(l,i.item.rowDef)}else a.context.$implicit=i.item.data}),this._updateRowIndexContext(),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let i=Qt(this._headerRowOutlet,`thead`);i&&(i.style.display=e.length?``:`none`)}let t=this._headerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,[`top`]),this._stickyStyler.stickRows(e,t,`top`),this._headerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let i=Qt(this._footerRowOutlet,`tfoot`);i&&(i.style.display=e.length?``:`none`)}let t=this._footerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,[`bottom`]),this._stickyStyler.stickRows(e,t,`bottom`),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),i=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...i],[`left`,`right`]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,a)=>{this._addStickyColumnStyles([o],this._headerRowDefs[a])}),this._rowDefs.forEach(o=>{let a=[];for(let l=0;l<t.length;l++)this._renderRows[l].rowDef===o&&a.push(t[l]);this._addStickyColumnStyles(a,o)}),i.forEach((o,a)=>{this._addStickyColumnStyles([o],this._footerRowDefs[a])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),i=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<t;o++){let a=this._data[o],l=this._getRenderRowsForData(a,o,i.get(a));this._cachedRenderRowsMap.has(a)||this._cachedRenderRowsMap.set(a,new WeakMap);for(let s=0;s<l.length;s++){let m=l[s],d=this._cachedRenderRowsMap.get(m.data);d.has(m.rowDef)?d.get(m.rowDef).push(m):d.set(m.rowDef,[m]),e.push(m)}}return e}_getRenderRowsForData(e,t,i){return this._getRowDefs(e,t).map(a=>{let l=i&&i.has(a)?i.get(a):[];if(l.length){let s=l.shift();return s.dataIndex=t,s}else return{data:e,rowDef:a,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Ie(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=Ie(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Ie(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Ie(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(a,l)=>{let s=!!l.getColumnsDiff();return a||s},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let i=this._headerRowDefs.reduce(e,!1);i&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),t||i||o}_switchDataSource(e){this._data=[],Ae(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;Ae(this.dataSource)?e=this.dataSource.connect(this):Qh(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Gh(this.dataSource)),this._renderChangeSubscription=ng([e,this.viewChange]).pipe(Eg(this._onDestroy)).subscribe(([t,i])=>{this._data=t||[],this._renderedRange=i,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let i=Array.from(t?.columns||[]).map(l=>{let s=this._columnDefsByName.get(l);if(!s)throw Wt(l);return s}),o=i.map(l=>l.sticky),a=i.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,a,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let i=0;i<e.viewContainer.length;i++){let o=e.viewContainer.get(i);t.push(o.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let i=[];if(this.multiTemplateDataRows)i=this._rowDefs.filter(o=>!o.when||o.when(t,e));else{let o=this._rowDefs.find(a=>a.when&&a.when(t,e))||this._defaultRowDef;o&&i.push(o)}return i.length,i}_getEmbeddedViewArgs(e,t){let i=e.rowDef,o={$implicit:e.data};return{templateRef:i.template,context:o,index:t}}_renderRow(e,t,i,o={}){let a=e.viewContainer.createEmbeddedView(t.template,o,i);return this._renderCellTemplateForItem(t,o),a}_renderCellTemplateForItem(e,t){for(let i of this._getCellTemplates(e))J.mostRecentCellOutlet&&J.mostRecentCellOutlet._viewContainer.createEmbeddedView(i,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,i=e.length;t<i;t++){let a=e.get(t).context;a.count=i,a.first=t===0,a.last=t===i-1,a.even=t%2===0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[t].dataIndex,a.renderIndex=t):a.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let i=this._columnDefsByName.get(t);if(!i)throw Wt(t);return e.extractCellTemplate(i)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,i)=>t||i.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:`ltr`,t=this._injector;this._stickyStyler=new je(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:Gh()).pipe(Eg(this._onDestroy)).subscribe(i=>{this._stickyStyler.direction=i,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<`u`?qh:Wh;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(ag(0,t),Eg(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(i,o)=>this._measureRangeSize(i,o)}),ng([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(Eg(this._onDestroy)).subscribe(([i,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let l=o.elements[a];if(l){let s=o.offsets[a],m=i!==0?Math.max(i-s,s):-s;for(let d of l)d.style.top=`${-m}px`}}}),ng([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(Eg(this._onDestroy)).subscribe(([i,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let l=o.elements[a];if(l)for(let s of l)s.style.bottom=`${i+o.offsets[a]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let i=this._noDataRowOutlet.viewContainer;if(t){let o=i.createEmbeddedView(e.templateRef),a=o.rootNodes[0];if(o.rootNodes.length===1&&a?.nodeType===this._document.ELEMENT_NODE){a.setAttribute(`role`,`row`),a.classList.add(...e._contentClassNames);let l=a.querySelectorAll(e._cellSelector);for(let s=0;s<l.length;s++)l[s].classList.add(...e._cellClassNames)}}else i.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!==`vertical`)return 0;let i=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<i.start||(e.end,i.end);let a=e.start-i.start,l=e.end-e.start,s,m;for(let p=0;p<l;p++){let y=o.get(p+a);if(y&&y.rootNodes.length){s=m=y.rootNodes[0];break}}for(let p=l-1;p>-1;p--){let y=o.get(p+a);if(y&&y.rootNodes.length){m=y.rootNodes[y.rootNodes.length-1];break}}let d=s?.getBoundingClientRect?.(),h=m?.getBoundingClientRect?.();return d&&h?h.bottom-d.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[[[`caption`]],[[`colgroup`],[`col`]],`*`],t=[`caption`,`colgroup, col`,`*`];function i(l,s){l&1&&tD(0,2)}function o(l,s){l&1&&(hi$1(0,`thead`,0),Bp(1,1),Ac(),hi$1(2,`tbody`,0),Bp(3,2)(4,3),Ac(),hi$1(5,`tfoot`,0),Bp(6,4),Ac())}function a(l,s){l&1&&Bp(0,1)(1,2)(2,3)(3,4)}return sE({type:n,selectors:[[`cdk-table`],[`table`,`cdk-table`,``]],contentQueries:function(s,m,d){if(s&1&&Gp(d,Fe,5)(d,X,5)(d,Pe,5)(d,be,5)(d,Ye,5),s&2){let h;rD(h=oD())&&(m._noDataRow=h.first),rD(h=oD())&&(m._contentColumnDefs=h),rD(h=oD())&&(m._contentRowDefs=h),rD(h=oD())&&(m._contentHeaderRowDefs=h),rD(h=oD())&&(m._contentFooterRowDefs=h)}},hostAttrs:[1,`cdk-table`],hostVars:2,hostBindings:function(s,m){s&2&&Xp(`cdk-table-fixed-layout`,m.fixedLayout)},inputs:{trackBy:`trackBy`,dataSource:`dataSource`,multiTemplateDataRows:[2,`multiTemplateDataRows`,`multiTemplateDataRows`,RF],fixedLayout:[2,`fixedLayout`,`fixedLayout`,RF],recycleRows:[2,`recycleRows`,`recycleRows`,RF]},outputs:{contentChanged:`contentChanged`},exportAs:[`cdkTable`],features:[LD([{provide:z,useExisting:n},{provide:ge,useValue:null}])],ngContentSelectors:t,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(s,m){s&1&&(eD(e),tD(0),tD(1,1),AE(2,i,1,0),AE(3,o,7,0)(4,a,4,0)),s&2&&(Mv(2),OE(m._isServer?2:-1),Mv(),OE(m._isNativeHtmlTable?3:4))},dependencies:[Qe,We,Ke,Xe],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})})()}return n})();function Ie(n,r){return n.concat(Array.from(r))}function Qt(n,r){let e=r.toUpperCase(),t=n.viewContainer.element.nativeElement;for(;t;){let i=t.nodeType===1?t.nodeName:null;if(i===e)return t;if(i===`TABLE`)break;t=t.parentNode}return null}var Zt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=cE({type:n});static ɵinj=ql({imports:[St]})}return n})();var dn=(()=>{class n extends qe{stickyCssClass=`mat-mdc-table-sticky`;needsPositionStickyOnElement=!1;static ɵfac=(()=>{let e;return function(i){return(e||(e=Qm(n)))(i||n)}})();static ɵcmp=(function(){let e=[[[`caption`]],[[`colgroup`],[`col`]],`*`],t=[`caption`,`colgroup, col`,`*`];function i(l,s){l&1&&tD(0,2)}function o(l,s){l&1&&(hi$1(0,`thead`,0),Bp(1,1),Ac(),hi$1(2,`tbody`,2),Bp(3,3)(4,4),Ac(),hi$1(5,`tfoot`,0),Bp(6,5),Ac())}function a(l,s){l&1&&Bp(0,1)(1,3)(2,4)(3,5)}return sE({type:n,selectors:[[`mat-table`],[`table`,`mat-table`,``]],hostAttrs:[1,`mat-mdc-table`,`mdc-data-table__table`],hostVars:2,hostBindings:function(s,m){s&2&&Xp(`mat-table-fixed-layout`,m.fixedLayout)},exportAs:[`matTable`],features:[LD([{provide:qe,useExisting:n},{provide:z,useExisting:n},{provide:ge,useValue:null}]),Mp],ngContentSelectors:t,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`role`,`rowgroup`,1,`mdc-data-table__content`],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(s,m){s&1&&(eD(e),tD(0),tD(1,1),AE(2,i,1,0),AE(3,o,7,0)(4,a,4,0)),s&2&&(Mv(2),OE(m._isServer?2:-1),Mv(),OE(m._isNativeHtmlTable?3:4))},dependencies:[Qe,We,Ke,Xe],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--%NS%mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--%NS%mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--%NS%mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--%NS%mat-table-background-color, var(--%NS%mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-header-container-height, 56px);
  color: var(--%NS%mat-table-header-headline-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-header-headline-font, var(--%NS%mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-header-headline-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-table-header-headline-size, var(--%NS%mat-sys-title-small-size, 14px));
  font-weight: var(--%NS%mat-table-header-headline-weight, var(--%NS%mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--%NS%mat-table-row-item-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-table-row-item-label-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-row-item-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-row-item-label-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-row-item-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-footer-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-footer-supporting-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-footer-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-footer-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-footer-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-table-footer-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-header-headline-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var cn=(()=>{class n extends Ee{static ɵfac=(()=>{let e;return function(i){return(e||(e=Qm(n)))(i||n)}})();static ɵdir=dE({type:n,selectors:[[``,`matCellDef`,``]],features:[LD([{provide:Ee,useExisting:n}]),Mp]})}return n})();var mn=(()=>{class n extends Ne{static ɵfac=(()=>{let e;return function(i){return(e||(e=Qm(n)))(i||n)}})();static ɵdir=dE({type:n,selectors:[[``,`matHeaderCellDef`,``]],features:[LD([{provide:Ne,useExisting:n}]),Mp]})}return n})();var hn=(()=>{class n extends X{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=Qm(n)))(i||n)}})();static ɵdir=dE({type:n,selectors:[[``,`matColumnDef`,``]],inputs:{name:[0,`matColumnDef`,`name`]},features:[LD([{provide:X,useExisting:n}]),Mp]})}return n})();var un=(()=>{class n extends Kt{static ɵfac=(()=>{let e;return function(i){return(e||(e=Qm(n)))(i||n)}})();static ɵdir=dE({type:n,selectors:[[`mat-header-cell`],[`th`,`mat-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`mat-mdc-header-cell`,`mdc-data-table__header-cell`],features:[Mp]})}return n})();var pn=(()=>{class n extends qt{static ɵfac=(()=>{let e;return function(i){return(e||(e=Qm(n)))(i||n)}})();static ɵdir=dE({type:n,selectors:[[`mat-cell`],[`td`,`mat-cell`,``]],hostAttrs:[1,`mat-mdc-cell`,`mdc-data-table__cell`],features:[Mp]})}return n})();var fn=(()=>{class n extends be{static ɵfac=(()=>{let e;return function(i){return(e||(e=Qm(n)))(i||n)}})();static ɵdir=dE({type:n,selectors:[[``,`matHeaderRowDef`,``]],inputs:{columns:[0,`matHeaderRowDef`,`columns`],sticky:[2,`matHeaderRowDefSticky`,`sticky`,RF]},features:[LD([{provide:be,useExisting:n}]),Mp]})}return n})();var gn=(()=>{class n extends Pe{static ɵfac=(()=>{let e;return function(i){return(e||(e=Qm(n)))(i||n)}})();static ɵdir=dE({type:n,selectors:[[``,`matRowDef`,``]],inputs:{columns:[0,`matRowDefColumns`,`columns`],when:[0,`matRowDefWhen`,`when`]},features:[LD([{provide:Pe,useExisting:n}]),Mp]})}return n})();var _n=(()=>{class n extends $e{static ɵfac=(()=>{let e;return function(i){return(e||(e=Qm(n)))(i||n)}})();static ɵcmp=sE({type:n,selectors:[[`mat-header-row`],[`tr`,`mat-header-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-header-row`,`mdc-data-table__header-row`],exportAs:[`matHeaderRow`],features:[LD([{provide:$e,useExisting:n}]),Mp],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&Bp(0,0)},dependencies:[J],encapsulation:2,changeDetection:1})}return n})();var yn=(()=>{class n extends Ge{static ɵfac=(()=>{let e;return function(i){return(e||(e=Qm(n)))(i||n)}})();static ɵcmp=sE({type:n,selectors:[[`mat-row`],[`tr`,`mat-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-row`,`mdc-data-table__row`],exportAs:[`matRow`],features:[LD([{provide:Ge,useExisting:n}]),Mp],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&Bp(0,0)},dependencies:[J],encapsulation:2,changeDetection:1})}return n})();var bn=(()=>{class n extends Fe{_cellSelector=`td, mat-cell, [mat-cell], .mat-cell`;constructor(){super(),this._contentClassNames.push(`mat-mdc-no-data-row`,`mat-mdc-row`,`mdc-data-table__row`),this._cellClassNames.push(`mat-mdc-cell`,`mdc-data-table__cell`,`mat-no-data-cell`)}static ɵfac=function(t){return new(t||n)};static ɵdir=dE({type:n,selectors:[[`ng-template`,`matNoDataRow`,``]],features:[LD([{provide:Fe,useExisting:n}]),Mp]})}return n})();var wn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=cE({type:n});static ɵinj=ql({imports:[Zt,dl]})}return n})();var di=9007199254740991;var Jt=class extends $t{_data;_renderData=new Sn([]);_filter=new Sn(``);_internalPageChanges=new Y;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(r){r=Array.isArray(r)?r:[],this._data.next(r),this._renderChangesSubscription||this._filterData(r)}get filter(){return this._filter.value}set filter(r){this._filter.next(r),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(r){this._sort=r,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(r){this._paginator=r,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(r,e)=>{let t=r[e];if(Xn(t)){let i=Number(t);return i<di?i:t}return t};sortData=(r,e)=>{let t=e.active,i=e.direction;return!t||i==``?r:r.sort((o,a)=>{let l=this.sortingDataAccessor(o,t),s=this.sortingDataAccessor(a,t),m=typeof l,d=typeof s;m!==d&&(m===`number`&&(l+=``),d===`number`&&(s+=``));let h=0;return l!=null&&s!=null?l>s?h=1:l<s&&(h=-1):l!=null?h=1:s!=null&&(h=-1),h*(i==`asc`?1:-1)})};filterPredicate=(r,e)=>{let t=e.trim().toLowerCase();return Object.values(r).some(i=>`${i}`.toLowerCase().includes(t))};constructor(r=[]){super(),this._data=new Sn(r),this._updateChangeSubscription()}_updateChangeSubscription(){let r=this._sort?sg(this._sort.sortChange,this._sort.initialized):Gh(null),e=this._paginator?sg(this._paginator.page,this._internalPageChanges,this._paginator.initialized):Gh(null),t=this._data,i=ng([t,this._filter]).pipe(pt(([l])=>this._filterData(l))),o=ng([i,r]).pipe(pt(([l])=>this._orderData(l))),a=ng([o,e]).pipe(pt(([l])=>this._pageData(l)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=a.subscribe(l=>this._renderData.next(l))}_filterData(r){return this.filteredData=this.filter==null||this.filter===``?r:r.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(r){return this.sort?this.sortData(r.slice(),this.sort):r}_pageData(r){if(!this.paginator)return r;let e=this.paginator.pageIndex*this.paginator.pageSize;return r.slice(e,e+this.paginator.pageSize)}_updatePaginator(r){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=r,e.pageIndex>0)){let t=Math.ceil(e.length/e.pageSize)-1||0,i=Math.min(e.pageIndex,t);i!==e.pageIndex&&(e.pageIndex=i,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};var mi=20;var hi=new x(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=b(ie);return()=>Pt(n,{scrollThrottle:mi})}});var ui=new x(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var ei=`tooltip-panel`;var pi={passive:!0};var fi=8;var gi=8;var _i=24;var yi=200;var ti=(()=>{class n{_elementRef=b(Ir);_ngZone=b(Ne$1);_platform=b(D);_ariaDescriber=b(_a);_focusMonitor=b(Dr);_dir=b(ns);_injector=b(ie);_viewContainerRef=b(Ni);_mediaMatcher=b(Qe$1);_document=b(or);_renderer=b(La);_animationsDisabled=Ai();_defaultOptions=b(ui,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=bi;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Ha(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=Ha(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Er(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Er(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new Y;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=fi}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Eg(this._destroyed)).subscribe(e=>{e?e===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,`tooltip`),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(t);this._detach(),this._portal=this._portal||new bt(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=i.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(Eg(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof Ir)return this._overlayRef;this._detach()}let t=this._injector.get(X$1).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${ei}`,o=Mt(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation(`global`);return o.positionChanges.pipe(Eg(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=At(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(hi)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Eg(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Eg(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Eg(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(Eg(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,i=this._getOrigin(),o=this._getOverlayPosition();t.withPositions([this._addOffset(q(q({},i.main),o.main)),this._addOffset(q(q({},i.fallback),o.fallback))])}_addOffset(e){let t=gi,i=!this._dir||this._dir.value==`ltr`;return e.originY===`top`?e.offsetY=-t:e.originY===`bottom`?e.offsetY=t:e.originX===`start`?e.offsetX=i?-t:t:e.originX===`end`&&(e.offsetX=i?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,i;t==`above`||t==`below`?i={originX:`center`,originY:t==`above`?`top`:`bottom`}:t==`before`||t==`left`&&e||t==`right`&&!e?i={originX:`start`,originY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(i={originX:`end`,originY:`center`});let{x:o,y:a}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:o,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,i;t==`above`?i={overlayX:`center`,overlayY:`bottom`}:t==`below`?i={overlayX:`center`,overlayY:`top`}:t==`before`||t==`left`&&e||t==`right`&&!e?i={overlayX:`end`,overlayY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(i={overlayX:`start`,overlayY:`center`});let{x:o,y:a}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:o,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),cv(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position===`above`||this.position===`below`?t===`top`?t=`bottom`:t===`bottom`&&(t=`top`):e===`end`?e=`start`:e===`start`&&(e=`end`),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:i,originY:o}=e,a;if(t===`center`?this._dir&&this._dir.value===`rtl`?a=i===`end`?`left`:`right`:a=i===`start`?`left`:`right`:a=t===`bottom`&&o===`top`?`above`:`below`,a!==this._currentPosition){let l=this._overlayRef;if(l){let s=`${this._cssClassPrefix}-${ei}-`;l.removePanelClass(s+this._currentPosition),l.addPanelClass(s+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,e=>{let t=e.targetTouches?.[0],i=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener(`mouseenter`,e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener(`wheel`,e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),i=this._elementRef.nativeElement;t!==i&&!i.contains(t)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,e),this._addListener(`touchcancel`,e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,pi))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e==`function`?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!==`off`){let t=this._elementRef.nativeElement,i=t.style;(e===`on`||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`)&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect=`none`),(e===`on`||!t.draggable)&&(i.webkitUserDrag=`none`),i.touchAction=`none`,i.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,`tooltip`),this._isDestroyed||cv({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type===`keydown`?this._isTooltipVisible()&&e.keyCode===27&&!mi$1(e):!0;static ɵfac=function(t){return new(t||n)};static ɵdir=dE({type:n,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(t,i){t&2&&Xp(`mat-mdc-tooltip-disabled`,i.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return n})();var bi=(()=>{class n{_changeDetectorRef=b(xF);_elementRef=b(Ir);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Ai();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new Y;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>_i&&e.width>=yi}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,i=this._showAnimation,o=this._hideAnimation;if(t.classList.remove(e?o:i),t.classList.add(e?i:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let a=getComputedStyle(t);(a.getPropertyValue(`animation-duration`)===`0s`||a.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(e))}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`tooltip`];return sE({type:n,selectors:[[`mat-tooltip-component`]],viewQuery:function(i,o){if(i&1&&zp(e,7),i&2){let a;rD(a=oD())&&(o._tooltip=a.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(i,o){i&1&&Wp(`mouseleave`,function(l){return o._handleMouseLeave(l)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(i,o){i&1&&(Rc(0,`div`,1,0),qp(`animationend`,function(l){return o._handleAnimationEnd(l)}),Rc(2,`div`,2),MD(3),Oc()()),i&2&&(yD(o.tooltipClass),Xp(`mdc-tooltip--multiline`,o._isMultiline),Mv(3),ih(o.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})})()}return n})();var ii=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=cE({type:n});static ɵinj=ql({imports:[Wr,Se,dl,kt$1]})}return n})();var wi=(()=>{class n{changes=new Y;itemsPerPageLabel=`Items per page:`;nextPageLabel=`Next page`;previousPageLabel=`Previous page`;firstPageLabel=`First page`;lastPageLabel=`Last page`;getRangeLabel=(e,t,i)=>{if(i==0||t==0)return`0 of ${i}`;i=Math.max(i,0);let o=e*t,a=o<i?Math.min(o+t,i):o+t;return`${o+1} \u2013 ${a} of ${i}`};static ɵfac=function(t){return new(t||n)};static ɵprov=vr({token:n,factory:n.ɵfac})}return n})();var vi=50;var Ci=new x(`MAT_PAGINATOR_DEFAULT_OPTIONS`);var Di=(()=>{class n{_intl=b(wi);_changeDetectorRef=b(xF);_formFieldAppearance;_pageSizeLabelId=b(kt).getId(`mat-paginator-page-size-label-`);_intlChanges;_isInitialized=!1;_initializedStream=new An(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>OF(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new Pe$1;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=b(Ci,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:i,pageSizeOptions:o,hidePageSize:a,showFirstLastButtons:l}=t;i!=null&&(this._pageSize=i),o!=null&&(this._pageSizeOptions=o),a!=null&&(this.hidePageSize=a),l!=null&&(this.showFirstLastButtons=l)}this._formFieldAppearance=t?.formFieldAppearance||`outline`}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:vi),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){function e(s,m){if(s&1&&(hi$1(0,`mat-option`,17),MD(1),Ac()),s&2){let d=m.$implicit;Fp(`value`,d),Mv(),Pc(` `,d,` `)}}function t(s,m){if(s&1){let d=UE();hi$1(0,`mat-form-field`,14)(1,`mat-select`,16,0),Wp(`selectionChange`,function(p){yu(d);let y=JE(2);return vu(y._changePageSize(p.value))}),PE(3,e,2,2,`mat-option`,17,LE),Ac(),hi$1(5,`div`,18),Wp(`click`,function(){yu(d);let p=sD(2);return vu(p.open())}),Ac()()}if(s&2){let d=JE(2);Fp(`appearance`,d._formFieldAppearance)(`color`,d.color),Mv(),Fp(`value`,d.pageSize)(`disabled`,d.disabled),Lp(`aria-labelledby`,d._pageSizeLabelId),Fp(`panelClass`,d.selectConfig.panelClass||``)(`disableOptionCentering`,d.selectConfig.disableOptionCentering),Mv(2),FE(d._displayedPageSizeOptions)}}function i(s,m){if(s&1&&(hi$1(0,`div`,15),MD(1),Ac()),s&2){let d=JE(2);Mv(),ih(d.pageSize)}}function o(s,m){if(s&1&&(hi$1(0,`div`,3)(1,`div`,13),MD(2),Ac(),AE(3,t,6,7,`mat-form-field`,14),AE(4,i,2,1,`div`,15),Ac()),s&2){let d=JE();Mv(),Pp(`id`,d._pageSizeLabelId),Mv(),Pc(` `,d._intl.itemsPerPageLabel,` `),Mv(),OE(d._displayedPageSizeOptions.length>1?3:-1),Mv(),OE(d._displayedPageSizeOptions.length<=1?4:-1)}}function a(s,m){if(s&1){let d=UE();hi$1(0,`button`,19),Wp(`click`,function(){yu(d);let p=JE();return vu(p._buttonClicked(0,p._previousButtonsDisabled()))}),Au(),hi$1(1,`svg`,8),jp(2,`path`,20),Ac()()}if(s&2){let d=JE();Fp(`matTooltip`,d._intl.firstPageLabel)(`matTooltipDisabled`,d._previousButtonsDisabled())(`disabled`,d._previousButtonsDisabled())(`tabindex`,d._previousButtonsDisabled()?-1:null),Pp(`aria-label`,d._intl.firstPageLabel)}}function l(s,m){if(s&1){let d=UE();hi$1(0,`button`,21),Wp(`click`,function(){yu(d);let p=JE();return vu(p._buttonClicked(p.getNumberOfPages()-1,p._nextButtonsDisabled()))}),Au(),hi$1(1,`svg`,8),jp(2,`path`,22),Ac()()}if(s&2){let d=JE();Fp(`matTooltip`,d._intl.lastPageLabel)(`matTooltipDisabled`,d._nextButtonsDisabled())(`disabled`,d._nextButtonsDisabled())(`tabindex`,d._nextButtonsDisabled()?-1:null),Pp(`aria-label`,d._intl.lastPageLabel)}}return sE({type:n,selectors:[[`mat-paginator`]],hostAttrs:[`role`,`group`,1,`mat-mdc-paginator`],inputs:{color:`color`,pageIndex:[2,`pageIndex`,`pageIndex`,OF],length:[2,`length`,`length`,OF],pageSize:[2,`pageSize`,`pageSize`,OF],pageSizeOptions:`pageSizeOptions`,hidePageSize:[2,`hidePageSize`,`hidePageSize`,RF],showFirstLastButtons:[2,`showFirstLastButtons`,`showFirstLastButtons`,RF],selectConfig:`selectConfig`,disabled:[2,`disabled`,`disabled`,RF]},outputs:{page:`page`},exportAs:[`matPaginator`],decls:14,vars:14,consts:[[`selectRef`,``],[1,`mat-mdc-paginator-outer-container`],[1,`mat-mdc-paginator-container`],[1,`mat-mdc-paginator-page-size`],[1,`mat-mdc-paginator-range-actions`],[`aria-atomic`,`true`,`aria-live`,`polite`,`role`,`status`,1,`mat-mdc-paginator-range-label`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-previous`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-paginator-icon`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-next`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`aria-hidden`,`true`,1,`mat-mdc-paginator-page-size-label`],[1,`mat-mdc-paginator-page-size-select`,3,`appearance`,`color`],[1,`mat-mdc-paginator-page-size-value`],[`hideSingleSelectionIndicator`,``,3,`selectionChange`,`value`,`disabled`,`aria-labelledby`,`panelClass`,`disableOptionCentering`],[3,`value`],[1,`mat-mdc-paginator-touch-target`,3,`click`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z`]],template:function(m,d){m&1&&(hi$1(0,`div`,1)(1,`div`,2),AE(2,o,5,4,`div`,3),hi$1(3,`div`,4)(4,`div`,5),MD(5),Ac(),AE(6,a,3,5,`button`,6),hi$1(7,`button`,7),Wp(`click`,function(){return d._buttonClicked(d.pageIndex-1,d._previousButtonsDisabled())}),Au(),hi$1(8,`svg`,8),jp(9,`path`,9),Ac()(),Ru(),hi$1(10,`button`,10),Wp(`click`,function(){return d._buttonClicked(d.pageIndex+1,d._nextButtonsDisabled())}),Au(),hi$1(11,`svg`,8),jp(12,`path`,11),Ac()(),AE(13,l,3,5,`button`,12),Ac()()()),m&2&&(Mv(2),OE(d.hidePageSize?-1:2),Mv(3),Pc(` `,d._intl.getRangeLabel(d.pageIndex,d.pageSize,d.length),` `),Mv(),OE(d.showFirstLastButtons?6:-1),Mv(),Fp(`matTooltip`,d._intl.previousPageLabel)(`matTooltipDisabled`,d._previousButtonsDisabled())(`disabled`,d._previousButtonsDisabled())(`tabindex`,d._previousButtonsDisabled()?-1:null),Pp(`aria-label`,d._intl.previousPageLabel),Mv(3),Fp(`matTooltip`,d._intl.nextPageLabel)(`matTooltipDisabled`,d._nextButtonsDisabled())(`disabled`,d._nextButtonsDisabled())(`tabindex`,d._nextButtonsDisabled()?-1:null),Pp(`aria-label`,d._intl.nextPageLabel),Mv(3),OE(d.showFirstLastButtons?13:-1))},dependencies:[yi$1,Dn,ne,mt,ti],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-paginator-container-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-paginator-container-background-color, var(--%NS%mat-sys-surface));
  font-family: var(--%NS%mat-paginator-container-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-paginator-container-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-paginator-container-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-paginator-container-text-weight, var(--%NS%mat-sys-body-small-weight));
  letter-spacing: var(--%NS%mat-paginator-container-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  --%NS%mat-form-field-container-height: var(--%NS%mat-paginator-form-field-container-height, 40px);
  --%NS%mat-form-field-container-vertical-padding: var(--%NS%mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--%NS%mat-paginator-select-trigger-text-size, var(--%NS%mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--%NS%mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--%NS%mat-paginator-enabled-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--%NS%mat-paginator-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--%NS%mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
  height: var(--%NS%mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2})})()}return n})();var lo=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=cE({type:n});static ɵinj=ql({imports:[Dt,Tn,ii,Di]})}return n})();var ni=new x(`MAT_SORT_DEFAULT_OPTIONS`);var Si=(()=>{class n{_defaultOptions;_initializedStream=new An(1);sortables=new Map;_stateChanges=new Y;active;start=`asc`;get direction(){return this._direction}set direction(e){this._direction=e}_direction=``;disableClear;disabled=!1;sortChange=new Pe$1;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return``;let t=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,i=Ri(e.start||this.start,t),o=i.indexOf(this.direction)+1;return o>=i.length&&(o=0),i[o]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static ɵfac=function(t){return new(t||n)(Tr(ni,8))};static ɵdir=dE({type:n,selectors:[[``,`matSort`,``]],hostAttrs:[1,`mat-sort`],inputs:{active:[0,`matSortActive`,`active`],start:[0,`matSortStart`,`start`],direction:[0,`matSortDirection`,`direction`],disableClear:[2,`matSortDisableClear`,`disableClear`,RF],disabled:[2,`matSortDisabled`,`disabled`,RF]},outputs:{sortChange:`matSortChange`},exportAs:[`matSort`],features:[Sm]})}return n})();function Ri(n,r){let e=[`asc`,`desc`];return n==`desc`&&e.reverse(),r||e.push(``),e}var Io=(()=>{class n{_sort=b(Si,{optional:!0});_columnDef=b(X,{optional:!0});_changeDetectorRef=b(xF);_focusMonitor=b(Dr);_elementRef=b(Ir);_ariaDescriber=b(_a,{optional:!0});_renderChanges;_animationsDisabled=Ai();_recentlyCleared=jo(null);_sortButton;id;arrowPosition=`after`;start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}_sortActionDescription=`Sort`;disableClear;constructor(){b(Z).load(sl);let e=b(ni,{optional:!0});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=sg(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(`.mat-sort-header-container`),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),t=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?t:null)}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction===`asc`||this._sort.direction===`desc`)}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction==`asc`?`ascending`:`descending`:`none`}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`*`,[[``,`matSortHeaderIcon`,``]]],t=[`*`,`[matSortHeaderIcon]`];function i(a,l){a&1&&(Au(),Rc(0,`svg`,3),Vp(1,`path`,4),Oc())}function o(a,l){a&1&&(Rc(0,`div`,2),tD(1,1,null,i,2,0),Oc())}return sE({type:n,selectors:[[``,`mat-sort-header`,``]],hostAttrs:[1,`mat-sort-header`],hostVars:3,hostBindings:function(l,s){l&1&&Wp(`click`,function(){return s._toggleOnInteraction()})(`keydown`,function(d){return s._handleKeydown(d)})(`mouseleave`,function(){return s._recentlyCleared.set(null)}),l&2&&(Pp(`aria-sort`,s._getAriaSortAttribute()),Xp(`mat-sort-header-disabled`,s._isDisabled()))},inputs:{id:[0,`mat-sort-header`,`id`],arrowPosition:`arrowPosition`,start:`start`,disabled:[2,`disabled`,`disabled`,RF],sortActionDescription:`sortActionDescription`,disableClear:[2,`disableClear`,`disableClear`,RF]},exportAs:[`matSortHeader`],ngContentSelectors:t,decls:4,vars:17,consts:[[1,`mat-sort-header-container`,`mat-focus-indicator`],[1,`mat-sort-header-content`],[1,`mat-sort-header-arrow`],[`viewBox`,`0 -960 960 960`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z`]],template:function(l,s){l&1&&(eD(e),Rc(0,`div`,0)(1,`div`,1),tD(2),Oc(),AE(3,o,3,0,`div`,2),Oc()),l&2&&(Xp(`mat-sort-header-sorted`,s._isSorted())(`mat-sort-header-position-before`,s.arrowPosition===`before`)(`mat-sort-header-descending`,s._sort.direction===`desc`)(`mat-sort-header-ascending`,s._sort.direction===`asc`)(`mat-sort-header-recently-cleared-ascending`,s._recentlyCleared()===`asc`)(`mat-sort-header-recently-cleared-descending`,s._recentlyCleared()===`desc`)(`mat-sort-header-animations-disabled`,s._animationsDisabled),Pp(`tabindex`,s._isDisabled()?null:0)(`role`,s._isDisabled()?null:`button`),Mv(3),OE(s._renderArrow()?3:-1))},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: var(--%NS%mat-focus-indicator-fallback-border-style, solid) 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 4px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--%NS%mat-sort-arrow-color, var(--%NS%mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2})})()}return n})();var Oo=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=cE({type:n});static ɵinj=ql({imports:[dl]})}return n})();export{wn as _,Si as a,cn as c,gn as d,hn as f,un as g,pn as h,Oo as i,dn as l,mn as m,Io as n,_n as o,lo as p,Jt as r,bn as s,Di as t,fn as u,yn as v};