import{e as o,y as n,a as v,W as R,bd as b,n as _,P,g0 as I,Q as D,X as f,aj as T,ba as z,bK as F,A as U,cS as C,gc as L,R as V,$,V as E,a0 as S,an as M}from"./index-Bk13oInq.js";import{c as O}from"./GraphicsCollection-CfPNlBPF.js";import{d as j,f as H,a as N}from"./RasterVFDisplayObject-BhMA_Xhx.js";import{f as G,y as J}from"./LayerView-Lu0V4hoe.js";import{V as W}from"./GraphicsView2D-CKkZdRzC.js";import{h as K}from"./HighlightGraphicContainer-OCr5GZ1k.js";import{M as Q,m as X,f as Y}from"./dataUtils-M-hDCMGL.js";import{a as Z}from"./BitmapContainer-B-urGIon.js";import{h as tt,E as q}from"./Container-6q8gvuqA.js";import{l as et}from"./Bitmap-_R7S8flh.js";import{_ as it}from"./ExportStrategy-DpqlxF9M.js";import{J as rt}from"./rasterProjectionHelper-BUlDsQ0Q.js";import{n as st}from"./WGLContainer-C_q-a8yP.js";import{i as at}from"./timeSupport-O3MeND5A.js";import{p as ot}from"./popupUtils-tzDSy2ZI.js";import{i as nt}from"./RefreshableLayerView-Zr81cynh.js";import"./Program-Zm_RPRKO.js";import"./Texture-BEO3u2nF.js";import"./enums-BlUEVwJR.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./ProgramTemplate-hUSSPUdw.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./MapView-CnzZs5CS.js";import"./ColorBackground-eCqVLvQh.js";import"./Cyclical-DJv7mGBZ.js";import"./Basemap-DRYqJJ3x.js";import"./writeUtils-CuGAkQa7.js";import"./catalogUtils-8MGqu6UW.js";import"./basemapUtils-CYwIlTGS.js";import"./TablesMixin-C8r3nFk7.js";import"./TileInfo-YUEK5NHk.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-BqCOQaP5.js";import"./UpdatingHandles-BbNCyyZd.js";import"./signal-OzWV8BHP.js";import"./ReactiveMap-Da-zqImQ.js";import"./ViewingMode-dBUh39ak.js";import"./vec2f64-CaE_5U6X.js";import"./vec2-BCOFwZS_.js";import"./mat2df32-R1u-v0DR.js";import"./mat3-C14MOv1v.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./HighlightOptions-DDS_yKQv.js";import"./TileKey--6M9Nr4r.js";import"./QueueProcessor-BAwGOb3p.js";import"./quickselect-D0_cvEX6.js";import"./capabilities-C84AMSCg.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-Qth4t0nf.js";import"./GoTo-4Mtk1asH.js";import"./Zoom-DXKbY9hl.js";import"./LabelMetric-CEVwe__6.js";import"./enums-BRXbslMp.js";import"./BoundingBox-BhuXqU4L.js";import"./layerViewUtils-DaObYqcz.js";import"./CIMSymbolHelper-DCnivovm.js";import"./BidiEngine-BwB1Df7c.js";import"./fontUtils-Bqe3YEwq.js";import"./GeometryUtils-Cjs4mTb9.js";import"./definitions-Y_v3njP4.js";import"./Rect-CUzevAry.js";import"./AttributeStore-Dg8iRD7O.js";import"./UpdateTracking2D-BBDb53Qo.js";import"./BindType-BmZEZMMh.js";import"./Util-Dw4pprZa.js";import"./highlightReasons-COwmR_fj.js";import"./TimeOnly-DnMhE39F.js";import"./timeSupport-Dq9Imaam.js";import"./json-Wa8cmqdu.js";import"./FeatureCommandQueue-Bl7LjAKh.js";import"./constants-D5zmR9t2.js";import"./normalizeUtilsSync-Dl3QVGq8.js";import"./AGraphicContainer-Q7uDtBG6.js";import"./TechniqueInstance-2fY55xnY.js";import"./TileContainer-BS8vH-8_.js";import"./vec3f32-nZdmKIgz.js";import"./pixelRangeUtils-DR2RxTkt.js";import"./EffectView-DjOH8g88.js";import"./StyleDefinition-BK3ROBTO.js";import"./config-MDUrh2eL.js";import"./earcut-BqgeR2O3.js";let p=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new tt,this.updateRequested=!1,this.type="imagery",this._bitmapView=new Z}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch(i=>{b(i)||_.getLogger(this).error(i)})}hitTest(e){return new P({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,i=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new it({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:i,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async e=>{const{source:i}=e;if(!i||i instanceof ImageBitmap)return;const r=await this.layer.applyRenderer({extent:i.extent,pixelBlock:i.originalPixelBlock??i.pixelBlock});i.filter=s=>this.layer.pixelFilter?this.layer.applyFilter(s):{...r,extent:i.extent}}).catch(e=>{b(e)||_.getLogger(this).error(e)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(e.length===1&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const i=this.view.extent,r=e.map(a=>a.source).filter(a=>a.extent&&a.extent.intersects(i)).map(a=>({extent:a.extent,pixelBlock:a.originalPixelBlock})),s=Q(r,i);return s!=null?{extent:s.extent,pixelBlock:s.pixelBlock}:null}return null}async _fetchImage(e,i,r,s){var h;(s=s||{}).timeExtent=this.timeExtent,s.requestAsImageElement=!0,s.returnImageBitmap=!0;const a=await this.layer.fetchImage(e,i,r,s);if(a.imageBitmap)return a.imageBitmap;const l=await this.layer.applyRenderer(a.pixelData,{signal:s.signal}),d=new et(l.pixelBlock,(h=l.extent)==null?void 0:h.clone(),a.pixelData.pixelBlock);return d.filter=m=>this.layer.applyFilter(m),d}};o([n()],p.prototype,"attached",void 0),o([n()],p.prototype,"container",void 0),o([n()],p.prototype,"layer",void 0),o([n()],p.prototype,"strategy",void 0),o([n()],p.prototype,"timeExtent",void 0),o([n()],p.prototype,"view",void 0),o([n()],p.prototype,"updateRequested",void 0),o([n()],p.prototype,"updating",null),o([n()],p.prototype,"type",void 0),p=o([v("esri.views.2d.layers.imagery.ImageryView2D")],p);const lt=p;class ht extends st{constructor(){super(...arguments),this.symbolTypes=["triangle"]}prepareRenderPasses(e){const i=e.registerRenderPass({name:"imagery (vf)",brushes:[j],target:()=>this.children,drawPhase:q.MAP});return[...super.prepareRenderPasses(e),i]}doRender(e){this.visible&&e.drawPhase===q.MAP&&this.symbolTypes.forEach(i=>{e.renderPass=i,super.doRender(e)})}}let y=class extends R{constructor(t){super(t),this._loading=null,this.update=I((e,i)=>this._update(e,i).catch(r=>{b(r)||_.getLogger(this).error(r)}))}get updating(){return!!this._loading}redraw(t){if(!this.container.children.length)return;const e=this.container.children[0];e.symbolizerParameters=t,e.invalidateVAO(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(t,e,i){if(!t.stationary)return;const{extent:r,spatialReference:s}=t.state,a=new D({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:s}),[l,d]=t.state.size;this._loading=this.fetchPixels(a,l,d,i);const h=await this._loading;this._addToDisplay(h,e,t.state),this._loading=null}_addToDisplay(t,e,i){if(t.pixelBlock==null)return this.container.children.forEach(l=>l.destroy()),void this.container.removeAllChildren();const{extent:r,pixelBlock:s}=t,a=new H(s);a.offset=[0,0],a.symbolizerParameters=e,a.rawPixelData=t,a.invalidateVAO(),a.x=r.xmin,a.y=r.ymax,a.pixelRatio=i.pixelRatio,a.rotation=i.rotation,a.resolution=i.resolution,a.width=s.width*e.symbolTileSize,a.height=s.height*e.symbolTileSize,this.container.children.forEach(l=>l.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(a)}};o([n()],y.prototype,"fetchPixels",void 0),o([n()],y.prototype,"container",void 0),o([n()],y.prototype,"_loading",void 0),o([n()],y.prototype,"updating",null),y=o([v("esri.views.2d.layers.imagery.ImageryVFStrategy")],y);const pt=y;let c=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new ht,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(t,e,i,r)=>{const s=await this._projectFullExtentPromise,{symbolTileSize:a}=this.layer.renderer,{extent:l,width:d,height:h}=X(t,e,i,a,s);if(s!=null&&!s.intersects(t))return{extent:l,pixelBlock:null};const m={bbox:`${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:a,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(m)){const u=this.getPixelData();if(u!=null&&`${u.extent.xmin}, ${u.extent.ymin}, ${u.extent.xmax}, ${u.extent.ymax}`===m.bbox)return u}const{pixelData:g}=await this.layer.fetchImage(l,d,h,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});this._dataParameters=m;const x=g==null?void 0:g.pixelBlock;return x==null?{extent:l,pixelBlock:null}:{extent:l,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?Y(x,"vector-uv"):x}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new pt({container:this.container,fetchPixels:this._fetchpixels}),this.addHandles(f(()=>this.layer.renderer,t=>this._updateSymbolizerParams(t),T),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach(t=>t.destroy()),this.container.removeAllChildren(),this.removeHandles("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){var r;const t=(r=this.container.children[0])==null?void 0:r.rawPixelData;if(this.updating||!t)return null;const{extent:e,pixelBlock:i}=t;return{extent:e,pixelBlock:i}}hitTest(t){return new P({attributes:{},geometry:t.clone(),layer:this.layer})}update(t){this._strategy.update(t,this._symbolizerParams).catch(e=>{b(e)||_.getLogger(this).error(e)})}redraw(){const{renderer:t}=this.layer;t&&(this._updateSymbolizerParams(t),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(t){const e=this._dataParameters.exportParametersVersion===t.exportParametersVersion,i=this._dataParameters.time===t.time,r=this._dataParameters.symbolTileSize===t.symbolTileSize,s=this._dataParameters.bbox===t.bbox;return e&&i&&r&&s}async _getProjectedFullExtent(t){try{return rt(this.layer.fullExtent,t)}catch{try{const i=(await z(this.layer.url,{query:{option:"footprints",outSR:F(t),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?D.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(t){t.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};o([n()],c.prototype,"attached",void 0),o([n()],c.prototype,"container",void 0),o([n()],c.prototype,"layer",void 0),o([n()],c.prototype,"timeExtent",void 0),o([n()],c.prototype,"type",void 0),o([n()],c.prototype,"view",void 0),o([n()],c.prototype,"updating",null),c=o([v("esri.views.2d.layers.imagery.VectorFieldView2D")],c);const mt=c,ct=t=>{let e=class extends t{constructor(){super(...arguments),this.view=null}get timeExtent(){var i;return at(this.layer,(i=this.view)==null?void 0:i.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(i,r){const{layer:s}=this;if(!i)throw new U("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:a}=s,l=ot(s,r);if(!a||l==null)return[];const d=await l.getRequiredFields();C(r);const h=new L;h.timeExtent=this.timeExtent,h.geometry=i,h.outFields=d,h.outSpatialReference=i.spatialReference;const{resolution:m,spatialReference:g}=this.view,x=this.view.type==="2d"?new V(m,m,g):new V(.5*m,.5*m,g),{returnTopmostRaster:u,showNoDataRecords:B}=l.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},k={returnDomainValues:!0,returnTopmostRaster:u,pixelSize:x,showNoDataRecords:B,signal:r==null?void 0:r.signal};return s.queryVisibleRasters(h,k).then(A=>A)}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return o([n()],e.prototype,"layer",void 0),o([n()],e.prototype,"suspended",void 0),o([n({readOnly:!0})],e.prototype,"timeExtent",null),o([n()],e.prototype,"view",void 0),e=o([v("esri.views.layers.ImageryLayerView")],e),e};let w=class extends ct(nt(G(J))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new O,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:t}=this;return this.updating||!t?null:"getPixelData"in t?t.getPixelData():null}update(t){var e;(e=this.subview)==null||e.update(t)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new W({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new K(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([f(()=>this.layer.exportImageServiceParameters.version,t=>{t&&this._exportImageVersion!==t&&(this._exportImageVersion=t,this.requestUpdate())},$),f(()=>this.timeExtent,t=>{const{subview:e}=this;e&&(e.timeExtent=t,"redraw"in e?this.requestUpdate():e.redrawOrRefetch())},$),this.layer.on("redraw",()=>{const{subview:t}=this;t&&("redraw"in t?t.redraw():t.redrawOrRefetch())}),f(()=>this.layer.renderer,()=>this._setSubView())])}detach(){var t,e;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),(t=this.subview)==null||t.destroy(),this.subview=null,(e=this._highlightView)==null||e.destroy(),this._exportImageVersion=-1}viewChange(){}moveEnd(){this.requestUpdate()}highlight(t,e){if(!((Array.isArray(t)?t[0]:E.isCollection(t)?t.at(0):t)instanceof P))return S();let i=[];return Array.isArray(t)||E.isCollection(t)?i=t.map(r=>r.clone()):t instanceof P&&(i=[t.clone()]),this._highlightGraphics.addMany(i),S(()=>this._highlightGraphics.removeMany(i))}async doRefresh(){this.requestUpdate()}isUpdating(){var e,i;const t=!this.subview||this.subview.updating||!!((e=this._highlightView)!=null&&e.updating);return M("esri-2d-log-updating")&&console.log(`Updating ImageryLayerView2D (${this.layer.id}): ${t}
-> subview ${!this.subview||this.subview.updating}
-> higlightView ${(i=this._highlightView)==null?void 0:i.updating}
`),t}_setSubView(){var i,r;if(!this.view)return;const t=(i=this.layer.renderer)==null?void 0:i.type;let e="imagery";if(t==="vector-field"?e="imageryVF":t==="flow"&&(e="flow"),this.subview){const{type:s}=this.subview;if(s===e)return this._attachSubview(this.subview),void(s==="flow"?this.subview.redrawOrRefetch():s==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),(r=this.subview)==null||r.destroy()}this.subview=e==="imagery"?new lt({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):e==="imageryVF"?new mt({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new N({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(t){t&&!t.attached&&(t.attach(),t.attached=!0,this.container.addChildAt(t.container,0))}_detachSubview(t){t!=null&&t.attached&&(this.container.removeChild(t.container),t.detach(),t.attached=!1)}};o([n()],w.prototype,"pixelData",null),o([n()],w.prototype,"subview",void 0),w=o([v("esri.views.2d.layers.ImageryLayerView2D")],w);const je=w;export{je as default};