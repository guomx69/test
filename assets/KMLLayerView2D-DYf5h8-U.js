import{cJ as k,F as T,U as z,V as G,a7 as F,gz as O,u as C,E as $,cI as N,B as U,gA as W,gB as A,M as H,ft as K,e as v,y as S,a as J}from"./index-DKNmOsay.js";import{b as D,g as Y,d as Q}from"./kmlUtils-J8GCaVOI.js";import{c as P}from"./GraphicsCollection-C7h8cD3d.js";import{g as X,f as Z,b as tt}from"./Bitmap-XGVWZgLb.js";import{a as et}from"./BitmapContainer-ITMSQ6ND.js";import{f as it,y as at}from"./LayerView-24SNmo5C.js";import{t as M}from"./GraphicContainer-B8pgAOEK.js";import{V as R}from"./GraphicsView2D-DJiNJuyN.js";import{C as st,e as rt}from"./rasterProjectionHelper-Dflkhveu.js";import{a as ot}from"./WGLContainer-B7pP5_fp.js";import{y as nt,o as lt}from"./MaterialPrograms-Dch60kA5.js";import{t as pt}from"./capabilities-C84AMSCg.js";import{D as E,G as ht,U as mt,X as L}from"./enums-BlUEVwJR.js";import{E as ct}from"./Program-CPcAch9i.js";import{c as dt}from"./rasterUtils-BaEgrHYs.js";import{e as q,c as ut}from"./Texture-o2HErgrs.js";import"./mat3-C7lBZcHH.js";import"./MapView-wsHyYSSS.js";import"./ColorBackground-B3wkYA3m.js";import"./Cyclical-DWq4TN1l.js";import"./Basemap-Q7LTpPsH.js";import"./writeUtils-DSihODOH.js";import"./catalogUtils-xaCTyikf.js";import"./basemapUtils-C6XmhSdO.js";import"./TablesMixin-C4_iM2PC.js";import"./workers-CxV4LYO7.js";import"./TileInfo-DyyEqsn9.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-BrctfyBB.js";import"./uuid-fwrPAdZb.js";import"./UpdatingHandles-03LBu6XU.js";import"./signal-Cura7GTc.js";import"./HeightModelInfo-DFyfL7xX.js";import"./ReactiveMap-C0it2oDN.js";import"./ViewingMode-dBUh39ak.js";import"./vec2f64-CaE_5U6X.js";import"./vec2-CSp0YBXM.js";import"./mat2df32-DTmrpVpI.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./HighlightOptions-CvxQMO09.js";import"./TileKey-BpNo_TmH.js";import"./QueueProcessor-BLmOl4kL.js";import"./quickselect-D0_cvEX6.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-Cx2haFx2.js";import"./GoTo-BE7D9z6T.js";import"./Container-Cmc2CHak.js";import"./EffectView-BnNFoWZz.js";import"./highlightReasons-KZls1_Dp.js";import"./definitions-Y_v3njP4.js";import"./layerViewUtils-DaObYqcz.js";import"./AGraphicContainer-T_0MLQBV.js";import"./TechniqueInstance-7AkQ6wYE.js";import"./UpdateTracking2D-CYujN-Vj.js";import"./BindType-BmZEZMMh.js";import"./Util-DdmhP9uU.js";import"./LabelMetric-9viZZvf9.js";import"./enums-BRXbslMp.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-BhuXqU4L.js";import"./TileContainer-CsOvdUw-.js";import"./FeatureCommandQueue-BQzkOwvy.js";import"./CIMSymbolHelper-4BFhXRBA.js";import"./BidiEngine-BwB1Df7c.js";import"./fontUtils-BUqZmwQA.js";import"./GeometryUtils-09X0v9nm.js";import"./Rect-CUzevAry.js";import"./ProgramTemplate-W3TDxG8X.js";import"./constants-D5zmR9t2.js";import"./vec3f32-nZdmKIgz.js";import"./AttributeStore-DZTFu6IJ.js";import"./TimeOnly-3_wMIEnG.js";import"./timeSupport-DIEnBFzP.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-Dqhj0bGG.js";import"./StyleDefinition-BK3ROBTO.js";import"./config-MDUrh2eL.js";import"./earcut-BqgeR2O3.js";import"./webglDeps-DULTGSXy.js";import"./NestedMap-DgiGbX8E.js";import"./renderState-C37QfRey.js";import"./basicInterfaces-DngWxyLO.js";import"./interfaces-B8ge7Jg9.js";import"./testSVGPremultipliedAlpha-WlWDvphX.js";import"./floatRGBA-DbCXMPyi.js";import"./doublePrecisionUtils-B0owpBza.js";class h{constructor(t){if(this._ownsRctx=!1,t)this._ownsRctx=!1,this._rctx=t;else{if(h._instance)return h._instanceRefCount++,h._instance;h._instanceRefCount=1,h._instance=this,this._ownsRctx=!0;const i=document.createElement("canvas"),a=pt(i);a.getExtension("OES_texture_float"),this._rctx=new nt(a,{})}const s={applyProjection:!0,bilinear:!1,bicubic:!1},r=lt("raster/reproject","raster/reproject",new Map([["a_position",0]]),s);this._program=this._rctx.programCache.acquire(r.shaders.vertexShader,r.shaders.fragmentShader,r.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new ot(this._rctx,[0,0,1,0,0,1,1,1])}reprojectTexture(t,s,r=!1){const i=k(t.extent,s),a=new T({x:(t.extent.xmax-t.extent.xmin)/t.texture.descriptor.width,y:(t.extent.ymax-t.extent.ymin)/t.texture.descriptor.height,spatialReference:t.extent.spatialReference}),{x:o,y:p}=st(a,s,t.extent);let n=(o+p)/2;const l=Math.round((i.xmax-i.xmin)/n),u=Math.round((i.ymax-i.ymin)/n);n=(i.width/l+i.height/u)/2;const I=new T({x:n,y:n,spatialReference:i.spatialReference}),_=rt({projectedExtent:i,srcBufferExtent:t.extent,pixelSize:I,hasWrapAround:!0,spacing:[16,16]}),w=dt(this._rctx,_),y=new q(l,u);y.wrapMode=E.CLAMP_TO_EDGE;const m=new ct(this._rctx,y);this._rctx.bindFramebuffer(m),this._rctx.setViewport(0,0,l,u),this._rctx.useProgram(this._program),this._rctx.bindTexture(t.texture,0),this._rctx.bindTexture(w,1),this._quad.bind();const{width:f=0,height:x=0}=t.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",f,x),this._program.setUniform2fv("u_transformSpacing",_.spacing),this._program.setUniform2fv("u_transformGridSize",_.size),this._program.setUniform2f("u_targetImageSize",l,u),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),w.dispose(),r){const{width:c,height:V}=m,g=new ImageData(c??0,V??0);m.readPixels(0,0,c??0,V??0,ht.RGBA,mt.UNSIGNED_BYTE,g.data);const B=m.detachColorTexture(L.COLOR_ATTACHMENT0);return m.dispose(),{texture:B,extent:i,imageData:g}}const b=m.detachColorTexture(L.COLOR_ATTACHMENT0);return m.dispose(),{texture:b,extent:i}}reprojectBitmapData(t,s){const r=X(t.bitmapData)?Z(t.bitmapData):t.bitmapData,i=new q;i.wrapMode=E.CLAMP_TO_EDGE,i.width=t.bitmapData.width,i.height=t.bitmapData.height;const a=new ut(this._rctx,i,r),o=this.reprojectTexture({texture:a,extent:t.extent},s,!0);o.texture.dispose();const p=document.createElement("canvas"),n=o.imageData;return p.width=n.width,p.height=n.height,p.getContext("2d").putImageData(n,0,0),{bitmapData:p,extent:o.extent}}async loadAndReprojectBitmapData(t,s,r){const i=(await z(t,{responseType:"image"})).data,a=document.createElement("canvas");a.width=i.width,a.height=i.height;const o=a.getContext("2d");o.drawImage(i,0,0);const p=o.getImageData(0,0,a.width,a.height);if(s.spatialReference.equals(r))return{bitmapData:p,extent:s};const n=this.reprojectBitmapData({bitmapData:p,extent:s},r);return{bitmapData:n.bitmapData,extent:n.extent}}destroy(){this._ownsRctx?(h._instanceRefCount--,h._instanceRefCount===0&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),h._instance=null)):(this._quad.dispose(),this._program.dispose())}}h._instanceRefCount=0;class j{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let d=class extends it(at){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new et,this._kmlVisualData=new j,this._fetchController=null,this.allVisiblePoints=new P,this.allVisiblePolylines=new P,this.allVisiblePolygons=new P,this.allVisibleMapImages=new G}async hitTest(e,t){var r,i,a;const s=this.layer;return[(r=this._pointsView)==null?void 0:r.hitTest(e),(i=this._polylinesView)==null?void 0:i.hitTest(e),(a=this._polygonsView)==null?void 0:a.hitTest(e)].flat().filter(Boolean).map(o=>(o.layer=s,o.sourceLayer=s,{type:"graphic",graphic:o,layer:s,mapPoint:e}))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new R({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new R({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new R({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",e=>{e.added.forEach(t=>this._addMapImage(t)),e.removed.forEach(t=>this._removeMapImage(t))}),F(()=>this.layer.visibleSublayers,e=>{for(const[t,s]of this._kmlVisualData.allSublayers)s.visibility=0;for(const t of e){const s=this._kmlVisualData.allSublayers.get(t.id);s&&(s.visibility=1)}this._refreshCollections()})]),this._updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new h}detach(){this._fetchController=O(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=C(this._polygonsView),this._polylinesView=C(this._polylinesView),this._pointsView=C(this._pointsView),this._imageReprojector=C(this._imageReprojector)}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){var t,s;((t=this.view.spatialReference)!=null&&t.isWGS84||(s=this.view.spatialReference)!=null&&s.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(e.href,$.fromJSON(e.extent),this.view.spatialReference).then(r=>{const i=new tt(r.bitmapData);i.x=r.extent.xmin,i.y=r.extent.ymax,i.resolution=r.extent.width/r.bitmapData.width,i.rotation=e.rotation,this._mapImageContainer.addChild(i),this._bitmapIndex.set(e,i)})}async _getViewDependentUrl(e,t){const{viewFormat:s,viewBoundScale:r,httpQuery:i}=e;if(s!=null){if(t==null)throw new Error("Loading this network link requires a view state.");let a;if(await N(),r!=null&&r!==1){const c=new $(t.extent);c.expand(r),a=c}else a=t.extent;a=k(a,U.WGS84);const o=k(a,U.WebMercator),p=a.xmin,n=a.xmax,l=a.ymin,u=a.ymax,I=t.size[0]*t.pixelRatio,_=t.size[1]*t.pixelRatio,w=Math.max(o.width,o.height),y={"[bboxWest]":p.toString(),"[bboxEast]":n.toString(),"[bboxSouth]":l.toString(),"[bboxNorth]":u.toString(),"[lookatLon]":a.center.x.toString(),"[lookatLat]":a.center.y.toString(),"[lookatRange]":w.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":a.center.x.toString(),"[lookatTerrainLat]":a.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":a.center.x.toString(),"[cameraLat]":a.center.y.toString(),"[cameraAlt]":w.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":I.toString(),"[vertPixels]":_.toString(),"[terrainEnabled]":"0","[clientVersion]":W,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},m=c=>{for(const V in c){let g;for(g in y)c[V]=c[V].replace(g,y[g])}},f=A(s);m(f);let x={};i!=null&&(x=A(i),m(x));const b=H(e.href);return b.query={...b.query,...f,...x},`${b.path}?${K(f)}`}return e.href}async _fetchService(e){const t=new j;await this._loadVisualData(this.layer.url,t,e),this._kmlVisualData=t,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e))}_isSublayerVisible(e){const t=this._kmlVisualData.allSublayers.get(e);return!!(t!=null&&t.visibility)&&(t.parentFolderId===-1||this._isSublayerVisible(t.parentFolderId))}_loadVisualData(e,t,s){return this._fetchParsedKML(e,s).then(async r=>{for(const i of r.sublayers){t.allSublayers.set(i.id,i);const a=i.points?await D(i.points):[],o=i.polylines?await D(i.polylines):[],p=i.polygons?await D(i.polygons):[],n=i.mapImages||[];if(t.allPoints.push(...a.map(l=>({item:l,sublayerId:i.id}))),t.allPolylines.push(...o.map(l=>({item:l,sublayerId:i.id}))),t.allPolygons.push(...p.map(l=>({item:l,sublayerId:i.id}))),t.allMapImages.push(...n.map(l=>({item:l,sublayerId:i.id}))),i.networkLink){const l=await this._getViewDependentUrl(i.networkLink,this.view.state);await this._loadVisualData(l,t,s)}}})}_fetchParsedKML(e,t){return Y(e,this.layer.spatialReference,this.layer.refreshInterval,t).then(s=>Q(s.data))}_removeMapImage(e){const t=this._bitmapIndex.get(e);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(e))}};v([S()],d.prototype,"_pointsView",void 0),v([S()],d.prototype,"_polylinesView",void 0),v([S()],d.prototype,"_polygonsView",void 0),v([S()],d.prototype,"updating",void 0),d=v([J("esri.views.2d.layers.KMLLayerView2D")],d);const Ye=d;export{Ye as default};