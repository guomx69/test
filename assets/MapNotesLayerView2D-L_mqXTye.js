import{P as u,V as f,O as w,a0 as m,X as h,df as a,Z as y,e as _,a as V}from"./index-C74WJ1Ej.js";import{t as v}from"./highlightReasons-DctIXKNL.js";import{f as C,y as H}from"./LayerView-CAMeXiak.js";import{t as c}from"./GraphicContainer-mbkNqPgA.js";import{V as g}from"./GraphicsView2D-BQ0bk2Ro.js";import"./HighlightOptions-BG-j-SWA.js";import"./TileKey-C48tCUR0.js";import"./vec2-C6u-cZfH.js";import"./QueueProcessor-DGN9HFqP.js";import"./ReactiveMap-Bw88NnHu.js";import"./signal-BII-UbgC.js";import"./quickselect-D0_cvEX6.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./Container-DH0frcy5.js";import"./MapView-WEn4e5JN.js";import"./ColorBackground-Cz11kJEY.js";import"./Cyclical-CGQ82qVc.js";import"./Basemap-CChUmcwG.js";import"./writeUtils--pheT9z-.js";import"./catalogUtils-C78LuP4L.js";import"./basemapUtils-BT4ik6o6.js";import"./TablesMixin-dyTIXPa2.js";import"./TileInfo-CfLyvEaC.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-D6HOdzVb.js";import"./UpdatingHandles-uzJ874pe.js";import"./GraphicsCollection-DJ8JKM57.js";import"./ViewingMode-dBUh39ak.js";import"./vec2f64-CaE_5U6X.js";import"./mat2df32-D_Vy_yFM.js";import"./mat3-D_kV6Cf_.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./capabilities-C84AMSCg.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-Bp0dEJYx.js";import"./GoTo-C1njJ0F6.js";import"./Zoom-DASwhnc_.js";import"./EffectView-DJnNQP59.js";import"./definitions-Y_v3njP4.js";import"./enums-BlUEVwJR.js";import"./Texture-BNlXHhBs.js";import"./layerViewUtils-DaObYqcz.js";import"./AGraphicContainer-DEAuU_1R.js";import"./TechniqueInstance-CSPaJNaw.js";import"./UpdateTracking2D-Cg6SpC39.js";import"./BindType-BmZEZMMh.js";import"./Util-B4So3K9X.js";import"./Program-C7noW1lx.js";import"./LabelMetric-Dma3rpNB.js";import"./enums-BRXbslMp.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-BhuXqU4L.js";import"./TileContainer-Zk_wnD9W.js";import"./WGLContainer-CGGn6IwV.js";import"./ProgramTemplate-BQpbyC0t.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BK3ROBTO.js";import"./config-MDUrh2eL.js";import"./earcut-BqgeR2O3.js";import"./FeatureCommandQueue-BOp1ygr8.js";import"./CIMSymbolHelper-KX_ISxxr.js";import"./BidiEngine-BwB1Df7c.js";import"./fontUtils-2u3sh6Wo.js";import"./GeometryUtils-CuXaA2Ek.js";import"./Rect-CUzevAry.js";import"./constants-D5zmR9t2.js";import"./AttributeStore-Cr3lEoxc.js";import"./TimeOnly-Gy7iOCKC.js";import"./timeSupport-CxfqaSxG.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-BaSbSTcZ.js";const d="sublayers",l="layerView";let n=class extends C(H){constructor(){super(...arguments),this._highlightIds=new Map}*graphicsViews(){this._graphicsViewsFeatureCollectionMap==null?this._graphicsViews==null?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(this._graphicsViewsFeatureCollectionMap!=null){const o=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&o.popupTemplate&&(r.popupTemplate=o.popupTemplate),r.sourceLayer=r.layer=this.layer}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof u?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):f.isCollection(i)&&(t=i.map(s=>s&&s.uid).toArray());const e=t==null?void 0:t.filter(w);return e!=null&&e.length?(this._addHighlight(e),m(()=>this._removeHighlight(e))):m()}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(e!=null&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const o=new c(this.view.featuresTilingScheme),r=new g({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:o});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([h(()=>s.visible,p=>r.container.visible=p,a),h(()=>r.updating,()=>this.notifyChange("updating"),a)],l)}this._updateHighlight()}else this.layer.sublayers!=null&&this.addHandles(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),d)}detach(){this._destroyGraphicsViews(),this.removeHandles(d)}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(l);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),this.layer.sublayers==null)return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const o=new c(this.view.featuresTilingScheme);o.fadeTransitionEnabled=!0;const r=new g({view:t,graphics:s.graphics,requestUpdateCallback:e,container:o});this.addHandles([s.on("graphic-update",r.graphicUpdateHandler),h(()=>s.visible,p=>r.container.visible=p,a),h(()=>r.updating,()=>this.notifyChange("updating"),a)],l),this.container.addChild(r.container),i.push(r)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys()),t=v("highlight");for(const e of this.graphicsViews())e.setHighlight(i.map(s=>({objectId:s,highlightFlags:t})))}};n=_([V("esri.views.2d.layers.MapNotesLayerView2D")],n);const Oi=n;export{Oi as default};