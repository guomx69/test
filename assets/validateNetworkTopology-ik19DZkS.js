import{bG as l,bO as u,bN as v,ba as y,A as f}from"./index-Bk13oInq.js";import{b as g}from"./WebMap-B1OSGX1Q.js";import"./ColorBackground-eCqVLvQh.js";import"./Cyclical-DJv7mGBZ.js";import"./Basemap-DRYqJJ3x.js";import"./writeUtils-CuGAkQa7.js";import"./catalogUtils-8MGqu6UW.js";import"./basemapUtils-CYwIlTGS.js";import"./TablesMixin-C8r3nFk7.js";import"./jsonContext-DtZJBWTs.js";import"./project-C0HSHKI9.js";async function q(e,t,r){var p;const o=l(e),i=t.toJSON();t.validationSet&&(i.validationSet=JSON.stringify(t.validationSet));const s={...i,returnEdits:!0,f:"json"},n=u({...o.query,...s}),a=v(n,{...r,method:"post"}),c=`${o.path}/validateNetworkTopology`,{data:b}=await y(c,a),d=g.fromJSON(b);return d.serviceEdits=((p=d.serviceEdits)==null?void 0:p.map(m=>({layerId:m.id,editedFeatures:m.editedFeatures})))??[],d}async function F(e,t,r){if(!t.gdbVersion)throw new f("submit-validate-network-topology-job:missing-gdb-version","version is missing");const o=l(e),i=t.toJSON();t.validationSet&&(i.validationSet=JSON.stringify(t.validationSet));const s=v(o.query,{query:u({...i,returnEdits:!0,async:!0,f:"json"}),...r,method:"post"}),n=`${o.path}/validateNetworkTopology`,{data:a}=await y(n,s);return a?a.statusUrl:null}export{F as submitValidateNetworkTopologyJob,q as validateNetworkTopology};