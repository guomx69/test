import{V as p,dp as m,e,y as o,dq as s,a}from"./index-DKNmOsay.js";import{f as n,y as l}from"./LayerView-24SNmo5C.js";import"./Container-Cmc2CHak.js";import"./MapView-wsHyYSSS.js";import"./ColorBackground-B3wkYA3m.js";import"./Cyclical-DWq4TN1l.js";import"./Basemap-Q7LTpPsH.js";import"./writeUtils-DSihODOH.js";import"./catalogUtils-xaCTyikf.js";import"./basemapUtils-C6XmhSdO.js";import"./TablesMixin-C4_iM2PC.js";import"./workers-CxV4LYO7.js";import"./TileInfo-DyyEqsn9.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-BrctfyBB.js";import"./uuid-fwrPAdZb.js";import"./UpdatingHandles-03LBu6XU.js";import"./signal-Cura7GTc.js";import"./GraphicsCollection-C7h8cD3d.js";import"./HeightModelInfo-DFyfL7xX.js";import"./ReactiveMap-C0it2oDN.js";import"./ViewingMode-dBUh39ak.js";import"./vec2f64-CaE_5U6X.js";import"./vec2-CSp0YBXM.js";import"./mat2df32-DTmrpVpI.js";import"./mat3-C7lBZcHH.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./HighlightOptions-CvxQMO09.js";import"./TileKey-BpNo_TmH.js";import"./QueueProcessor-BLmOl4kL.js";import"./quickselect-D0_cvEX6.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./capabilities-C84AMSCg.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-Cx2haFx2.js";import"./GoTo-BE7D9z6T.js";import"./EffectView-BnNFoWZz.js";import"./highlightReasons-KZls1_Dp.js";import"./definitions-Y_v3njP4.js";import"./enums-BlUEVwJR.js";import"./Texture-o2HErgrs.js";import"./layerViewUtils-DaObYqcz.js";let r=class extends n(l){constructor(t){super(t),this.layerViews=new p}set layerViews(t){this._set("layerViews",m(t,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((t,i)=>t+i.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(t){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((t,i)=>this.container.addChildAt(t.container,i))}};e([o({cast:s})],r.prototype,"layerViews",null),e([o({readOnly:!0})],r.prototype,"updatingProgress",null),r=e([a("esri.views.2d.layers.KnowledgeGraphLayerView2D")],r);const rt=r;export{rt as default};