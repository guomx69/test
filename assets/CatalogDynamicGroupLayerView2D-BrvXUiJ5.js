import{e as o,y as d,a as $,V as S,g0 as U,gB as _,a0 as x,gC as H,n as I,gD as w}from"./index-Bk13oInq.js";import{f as O,y as T}from"./LayerView-Lu0V4hoe.js";import"./Container-6q8gvuqA.js";import"./MapView-CnzZs5CS.js";import"./ColorBackground-eCqVLvQh.js";import"./Cyclical-DJv7mGBZ.js";import"./Basemap-DRYqJJ3x.js";import"./writeUtils-CuGAkQa7.js";import"./catalogUtils-8MGqu6UW.js";import"./basemapUtils-CYwIlTGS.js";import"./TablesMixin-C8r3nFk7.js";import"./TileInfo-YUEK5NHk.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-BqCOQaP5.js";import"./UpdatingHandles-BbNCyyZd.js";import"./signal-OzWV8BHP.js";import"./GraphicsCollection-CfPNlBPF.js";import"./ReactiveMap-Da-zqImQ.js";import"./ViewingMode-dBUh39ak.js";import"./vec2f64-CaE_5U6X.js";import"./vec2-BCOFwZS_.js";import"./mat2df32-R1u-v0DR.js";import"./mat3-C14MOv1v.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./HighlightOptions-DDS_yKQv.js";import"./TileKey--6M9Nr4r.js";import"./QueueProcessor-BAwGOb3p.js";import"./quickselect-D0_cvEX6.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./capabilities-C84AMSCg.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-Qth4t0nf.js";import"./GoTo-4Mtk1asH.js";import"./Zoom-DXKbY9hl.js";import"./EffectView-DjOH8g88.js";import"./highlightReasons-COwmR_fj.js";import"./definitions-Y_v3njP4.js";import"./enums-BlUEVwJR.js";import"./Texture-BEO3u2nF.js";import"./layerViewUtils-DaObYqcz.js";const y=Symbol(),A=l=>{let r=class extends l{constructor(){super(...arguments),this.layerViews=new S,this._debouncedUpdate=U(async()=>{const{layer:e,parent:t}=this,a=t==null?void 0:t.footprintLayerView;let s=[];const p=this._createQuery();if(p&&a){const{features:u}=await a.queryFeatures(p);this.suspended||(s=u.map(h=>e.acquireLayer(h)))}this.removeHandles(y),this.addHandles(s,y)})}get creatingLayerViews(){var e;return((e=this.view)==null?void 0:e.layerViewManager.isCreatingLayerViewsForLayer(this.layer))??!1}isUpdating(){return this.creatingLayerViews||this.layer.updating||this.layerViews.some(e=>e.updating)}enableLayerUpdates(){return _([this._updatingHandles.addWhen(()=>{var e,t;return((t=(e=this.parent)==null?void 0:e.footprintLayerView)==null?void 0:t.dataUpdating)===!1},()=>this.updateLayers()),this._updatingHandles.add(()=>{var e,t,a,s,p;return[this.layer.maximumVisibleSublayers,(e=this.layer.parent)==null?void 0:e.orderBy,(a=(t=this.parent)==null?void 0:t.footprintLayerView)==null?void 0:a.filter,(p=(s=this.parent)==null?void 0:s.footprintLayerView)==null?void 0:p.timeExtent,this.suspended]},()=>this.updateLayers()),x(()=>this.removeHandles(y))])}updateLayers(){this.suspended?this.removeHandles(y):this._updatingHandles.addPromise(H(this._debouncedUpdate()).catch(e=>{I.getLogger(this).error(e)}))}_createQuery(){var V,v;const e=(V=this.parent)==null?void 0:V.footprintLayerView,t=(v=this.layer)==null?void 0:v.parent;if(!e||!t||t.destroyed)return null;const{layer:{maximumVisibleSublayers:a},view:{scale:s}}=this;if(!a)return null;const{itemTypeField:p,itemSourceField:u,itemNameField:h,minScaleField:c,maxScaleField:f,objectIdField:C,orderBy:g}=t,F=w(`${c} IS NULL OR ${s} <= ${c} OR ${c} = 0`,`${f} IS NULL OR ${s} >= ${f}`),n=g==null?void 0:g.find(m=>m.field&&!m.valueExpression),i=e.createQuery();if(i.returnGeometry=!1,i.num=a,i.outFields=[C,u,h],i.where=w(i.where,F),this.unsupportedItemTypes!=null){const m=`${p} NOT IN (${this.unsupportedItemTypes.map(b=>`'${b}'`)})`;i.where=w(i.where,m)}return n!=null&&n.field&&(i.orderByFields=[`${n.field} ${n.order==="descending"?"DESC":"ASC"}`],i.outFields.push(n.field)),i}};return o([d({readOnly:!0})],r.prototype,"creatingLayerViews",null),o([d()],r.prototype,"layer",void 0),o([d()],r.prototype,"layerViews",void 0),o([d({readOnly:!0})],r.prototype,"unsupportedItemTypes",void 0),o([d()],r.prototype,"parent",void 0),o([d({readOnly:!0})],r.prototype,"isUpdating",null),r=o([$("esri.views.layers.CatalogDynamicGroupLayerView")],r),r};let L=class extends A(O(T)){constructor(){super(...arguments),this.unsupportedItemTypes=["Scene Service"],this.layerViews=new S}attach(){this.addAttachHandles([this.layerViews.on("after-changes",()=>this._updateStageChildren()),this.enableLayerUpdates()])}detach(){this.container.removeAllChildren()}update(l){this.updateLayers()}viewChange(){}moveEnd(){this.requestUpdate()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((l,r)=>this.container.addChildAt(l.container,r))}};L=o([$("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")],L);const Fe=L;export{Fe as default};