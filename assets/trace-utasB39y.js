import{M as n,bX as s,bY as c,U as g}from"./index-DKNmOsay.js";import{a as y}from"./WebMap-CacntOXM.js";import"./ColorBackground-B3wkYA3m.js";import"./Cyclical-DWq4TN1l.js";import"./Basemap-Q7LTpPsH.js";import"./writeUtils-DSihODOH.js";import"./catalogUtils-xaCTyikf.js";import"./basemapUtils-C6XmhSdO.js";import"./TablesMixin-C4_iM2PC.js";import"./FeatureLayer-Tsr4c8px.js";import"./FeatureLayerBase-D3eKs9jR.js";import"./HeightModelInfo-DFyfL7xX.js";import"./workers-CxV4LYO7.js";import"./editsZScale-Bh9XQHVY.js";import"./EditBusLayer-DDw9ngda.js";import"./uuid-fwrPAdZb.js";import"./FeatureEffectLayer-Dv7-XJJ5.js";import"./FeatureEffect-DWdrKli2.js";import"./FeatureReductionLayer-BpKPMnuS.js";import"./FeatureReductionSelection-QgLQpkxW.js";import"./MD5-C9MwAd2G.js";import"./OrderedLayer-CLJOk_Sh.js";import"./OrderByInfo-CBYwgi90.js";import"./fieldProperties-DHU5449Z.js";import"./styleUtils-_CrCK0E9.js";import"./TopFeaturesQuery-DZOrs6ND.js";import"./interfaces-CL2NbQte.js";import"./jsonContext-C2SCcAHG.js";import"./project-BsRbR1Vr.js";async function E(o,t,i){const r=n(o),e=t.toJSON();e.traceLocations=JSON.stringify(t.traceLocations),t.resultTypes&&(e.resultTypes=JSON.stringify(t.resultTypes));const a=s(r.query,{query:c({...e,f:"json"}),...i}),p=`${r.path}/trace`;return g(p,a).then(m=>u(m,t.outSpatialReference))}async function F(o,t,i){const r=n(o),e=t.toJSON();e.traceLocations=JSON.stringify(t.traceLocations),t.resultTypes&&(e.resultTypes=JSON.stringify(t.resultTypes));const a=s(r.query,{query:c({...e,async:!0,f:"json"}),...i}),p=`${r.path}/trace`,{data:m}=await g(p,a);return m.statusUrl}function u(o,t){const{data:i}=o,r=y.fromJSON(i.traceResults);return r.aggregatedGeometry&&t&&(r.aggregatedGeometry.line&&(r.aggregatedGeometry.line.spatialReference=t.clone()),r.aggregatedGeometry.multipoint&&(r.aggregatedGeometry.multipoint.spatialReference=t.clone()),r.aggregatedGeometry.polygon&&(r.aggregatedGeometry.polygon.spatialReference=t.clone())),r}export{F as submitTraceJob,E as trace};