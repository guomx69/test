import{M as l,bY as u,bX as v,U as y,l as g}from"./index-DKNmOsay.js";import{b as S}from"./WebMap-CacntOXM.js";import"./ColorBackground-B3wkYA3m.js";import"./Cyclical-DWq4TN1l.js";import"./Basemap-Q7LTpPsH.js";import"./writeUtils-DSihODOH.js";import"./catalogUtils-xaCTyikf.js";import"./basemapUtils-C6XmhSdO.js";import"./TablesMixin-C4_iM2PC.js";import"./FeatureLayer-Tsr4c8px.js";import"./FeatureLayerBase-D3eKs9jR.js";import"./HeightModelInfo-DFyfL7xX.js";import"./workers-CxV4LYO7.js";import"./editsZScale-Bh9XQHVY.js";import"./EditBusLayer-DDw9ngda.js";import"./uuid-fwrPAdZb.js";import"./FeatureEffectLayer-Dv7-XJJ5.js";import"./FeatureEffect-DWdrKli2.js";import"./FeatureReductionLayer-BpKPMnuS.js";import"./FeatureReductionSelection-QgLQpkxW.js";import"./MD5-C9MwAd2G.js";import"./OrderedLayer-CLJOk_Sh.js";import"./OrderByInfo-CBYwgi90.js";import"./fieldProperties-DHU5449Z.js";import"./styleUtils-_CrCK0E9.js";import"./TopFeaturesQuery-DZOrs6ND.js";import"./interfaces-CL2NbQte.js";import"./jsonContext-C2SCcAHG.js";import"./project-BsRbR1Vr.js";async function P(a,t,e){var n;const o=l(a),i=t.toJSON();t.validationSet&&(i.validationSet=JSON.stringify(t.validationSet));const p={...i,returnEdits:!0,f:"json"},s=u({...o.query,...p}),r=v(s,{...e,method:"post"}),c=`${o.path}/validateNetworkTopology`,{data:f}=await y(c,r),m=S.fromJSON(f);return m.serviceEdits=((n=m.serviceEdits)==null?void 0:n.map(d=>({layerId:d.id,editedFeatures:d.editedFeatures})))??[],m}async function Q(a,t,e){if(!t.gdbVersion)throw new g("submit-validate-network-topology-job:missing-gdb-version","version is missing");const o=l(a),i=t.toJSON();t.validationSet&&(i.validationSet=JSON.stringify(t.validationSet));const p=v(o.query,{query:u({...i,returnEdits:!0,async:!0,f:"json"}),...e,method:"post"}),s=`${o.path}/validateNetworkTopology`,{data:r}=await y(s,p);return r?r.statusUrl:null}export{Q as submitValidateNetworkTopologyJob,P as validateNetworkTopology};