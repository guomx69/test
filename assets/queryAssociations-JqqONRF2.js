import{e as p,y as l,a as y,a1 as d,M as f,bY as g,bX as v,U as w,gL as $,n as j}from"./index-DrXmDmNo.js";import{i as S}from"./WebMap-FXBlWqJj.js";import{d as b}from"./Association-CwTio7vj.js";import"./ColorBackground-Di8Wmf0D.js";import"./Cyclical-DRA1VwK8.js";import"./Basemap-C4r8OrxO.js";import"./writeUtils-CRTDkgfw.js";import"./catalogUtils-B9q2QXfA.js";import"./basemapUtils-BTC0rQpy.js";import"./TablesMixin-CvYOZ7C2.js";import"./FeatureLayer-Bwdxz1Sy.js";import"./FeatureLayerBase-BjRy17_C.js";import"./HeightModelInfo-D8qsUl09.js";import"./workers-DyNy5431.js";import"./editsZScale-BY7r8kN6.js";import"./EditBusLayer-fGy_qMVK.js";import"./uuid-fwrPAdZb.js";import"./FeatureEffectLayer-bOFsiA0P.js";import"./FeatureEffect-Blpaidl3.js";import"./FeatureReductionLayer-BdcemEhs.js";import"./FeatureReductionSelection-Dp0FPbh6.js";import"./MD5-C9MwAd2G.js";import"./OrderedLayer-jkEay1i4.js";import"./OrderByInfo-BUDSygAi.js";import"./fieldProperties-fApkbsCs.js";import"./styleUtils-BV1BfoXp.js";import"./TopFeaturesQuery-DG7a_YGq.js";import"./interfaces-CL2NbQte.js";import"./jsonContext-Dw0bzgwc.js";import"./project-BW1DOQDq.js";let i=class extends d{constructor(o){super(o),this.associations=[]}};p([l({type:[b],json:{write:!0}})],i.prototype,"associations",void 0),i=p([y("esri.rest.networks.support.QueryAssociationsResult")],i);const I=i;function J(r){const{returnDeletes:o,elements:s,gdbVersion:e,moment:n}=r.toJSON();return{returnDeletes:o,elements:JSON.stringify(s.map(t=>({globalId:t.globalId,networkSourceId:t.networkSourceId,terminalId:t.terminalId}))),types:JSON.stringify(r.types.map(t=>S.toJSON(t))).replaceAll('"connectivity"','"junctionJunctionConnectivity"'),gdbVersion:e,moment:n}}async function rt(r,o,s){const e=f(r),n={...J(o),f:"json"},t=g({...e.query,...n}),a=v(t,{...s,method:"post"}),m=`${e.path}/associations/query`,{data:c}=await w(m,a),u=I.fromJSON(c);return o.types.includes("connectivity")&&$(j.getLogger("esri/rest/networks/support/QueryAssociationsParameters"),"types",{replacement:"Please use 'junction-junction-connectivity' instead of 'connectivity'.",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-networks-support-QueryAssociationsParameters.html#types",version:"4.29",warnOnce:!0}),u}export{rt as queryAssociations};