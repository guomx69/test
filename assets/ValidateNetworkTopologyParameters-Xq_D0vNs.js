import{e as o,y as r,E as n,B as m,k as u,a as d,a1 as y,bZ as w}from"./index-DrXmDmNo.js";import{c as e}from"./WebMap-FXBlWqJj.js";import"./ColorBackground-Di8Wmf0D.js";import"./Cyclical-DRA1VwK8.js";import"./Basemap-C4r8OrxO.js";import"./writeUtils-CRTDkgfw.js";import"./catalogUtils-B9q2QXfA.js";import"./basemapUtils-BTC0rQpy.js";import"./TablesMixin-CvYOZ7C2.js";import"./FeatureLayer-Bwdxz1Sy.js";import"./FeatureLayerBase-BjRy17_C.js";import"./HeightModelInfo-D8qsUl09.js";import"./workers-DyNy5431.js";import"./editsZScale-BY7r8kN6.js";import"./EditBusLayer-fGy_qMVK.js";import"./uuid-fwrPAdZb.js";import"./FeatureEffectLayer-bOFsiA0P.js";import"./FeatureEffect-Blpaidl3.js";import"./FeatureReductionLayer-BdcemEhs.js";import"./FeatureReductionSelection-Dp0FPbh6.js";import"./MD5-C9MwAd2G.js";import"./OrderedLayer-jkEay1i4.js";import"./OrderByInfo-BUDSygAi.js";import"./fieldProperties-fApkbsCs.js";import"./styleUtils-BV1BfoXp.js";import"./TopFeaturesQuery-DG7a_YGq.js";import"./interfaces-CL2NbQte.js";import"./jsonContext-Dw0bzgwc.js";import"./project-BW1DOQDq.js";var p;let t=p=class extends y{static from(i){return w(p,i)}constructor(i){super(i),this.gdbVersion=null,this.sessionID=null,this.validationType=null,this.validateArea=null,this.validationSet=null,this.outSpatialReference=null}writeOutSR(i,a,s){if(i!=null){const{wkid:l}=i;a[s]=JSON.stringify({wkid:l})}}};o([r({type:String,json:{write:!0}})],t.prototype,"gdbVersion",void 0),o([r({type:String,json:{write:!0}})],t.prototype,"sessionID",void 0),o([r({type:e.apiValues,json:{type:e.jsonValues,read:e.read,write:e.write}})],t.prototype,"validationType",void 0),o([r({type:n,json:{write:!0}})],t.prototype,"validateArea",void 0),o([r({type:[Object],json:{write:!0}})],t.prototype,"validationSet",void 0),o([r({type:m,json:{write:{allowNull:!0,target:"outSR"}}})],t.prototype,"outSpatialReference",void 0),o([u("outSpatialReference")],t.prototype,"writeOutSR",null),t=p=o([d("esri.rest.networks.support.ValidateNetworkTopologyParameters")],t);const H=t;export{H as default};