import{M as n,bX as s,bY as c,U as g}from"./index-DrXmDmNo.js";import{a as y}from"./WebMap-FXBlWqJj.js";import"./ColorBackground-Di8Wmf0D.js";import"./Cyclical-DRA1VwK8.js";import"./Basemap-C4r8OrxO.js";import"./writeUtils-CRTDkgfw.js";import"./catalogUtils-B9q2QXfA.js";import"./basemapUtils-BTC0rQpy.js";import"./TablesMixin-CvYOZ7C2.js";import"./FeatureLayer-Bwdxz1Sy.js";import"./FeatureLayerBase-BjRy17_C.js";import"./HeightModelInfo-D8qsUl09.js";import"./workers-DyNy5431.js";import"./editsZScale-BY7r8kN6.js";import"./EditBusLayer-fGy_qMVK.js";import"./uuid-fwrPAdZb.js";import"./FeatureEffectLayer-bOFsiA0P.js";import"./FeatureEffect-Blpaidl3.js";import"./FeatureReductionLayer-BdcemEhs.js";import"./FeatureReductionSelection-Dp0FPbh6.js";import"./MD5-C9MwAd2G.js";import"./OrderedLayer-jkEay1i4.js";import"./OrderByInfo-BUDSygAi.js";import"./fieldProperties-fApkbsCs.js";import"./styleUtils-BV1BfoXp.js";import"./TopFeaturesQuery-DG7a_YGq.js";import"./interfaces-CL2NbQte.js";import"./jsonContext-Dw0bzgwc.js";import"./project-BW1DOQDq.js";async function E(o,t,i){const r=n(o),e=t.toJSON();e.traceLocations=JSON.stringify(t.traceLocations),t.resultTypes&&(e.resultTypes=JSON.stringify(t.resultTypes));const a=s(r.query,{query:c({...e,f:"json"}),...i}),p=`${r.path}/trace`;return g(p,a).then(m=>u(m,t.outSpatialReference))}async function F(o,t,i){const r=n(o),e=t.toJSON();e.traceLocations=JSON.stringify(t.traceLocations),t.resultTypes&&(e.resultTypes=JSON.stringify(t.resultTypes));const a=s(r.query,{query:c({...e,async:!0,f:"json"}),...i}),p=`${r.path}/trace`,{data:m}=await g(p,a);return m.statusUrl}function u(o,t){const{data:i}=o,r=y.fromJSON(i.traceResults);return r.aggregatedGeometry&&t&&(r.aggregatedGeometry.line&&(r.aggregatedGeometry.line.spatialReference=t.clone()),r.aggregatedGeometry.multipoint&&(r.aggregatedGeometry.multipoint.spatialReference=t.clone()),r.aggregatedGeometry.polygon&&(r.aggregatedGeometry.polygon.spatialReference=t.clone())),r}export{F as submitTraceJob,E as trace};