import{P as f}from"./index-DrXmDmNo.js";import{h as p}from"./PooledRBush-C4n7KzLD.js";import{i as u}from"./MeshLocalVertexSpace-BVAL6MSy.js";import{M as l}from"./vertexSpaceConversion-BOx3Ur6I.js";import"./quickselect-D0_cvEX6.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./mat3-KgbA14kX.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./spatialReferenceEllipsoidUtils-BpJjWsQA.js";import"./computeTranslationToOriginAndRotation-Bqo9RxXb.js";import"./meshVertexSpaceUtils-BU7c7u4j.js";import"./vec3-CfxySxtW.js";import"./projection-B7qApJDx.js";import"./DoubleArray-CU0y2S-6.js";import"./BufferView-B2Yq5XRJ.js";import"./vec2-D0pkyIyk.js";import"./vec4-DWAFiFra.js";class F{async createIndex(r,o){var e;const n=new Array;if(!((e=r.vertexAttributes)!=null&&e.position))return new p;const i=d(r),a=o!=null?await o.invoke("createIndexThread",i,{transferList:n}):this.createIndexThread(i).result;return m().fromJSON(a)}createIndexThread(r){const o=m();if(!r)return{result:o.toJSON()};const n=new Float64Array(r.position);return r.components?h(o,n,r.components.map(i=>new Uint32Array(i))):x(o,n)}}function x(t,r){const o=new Array(r.length/9);let n=0;for(let i=0;i<r.length;i+=9)o[n++]=c(r,i,i+3,i+6);return t.load(o),{result:t.toJSON()}}function h(t,r,o){let n=0;for(const e of o)n+=e.length/3;const i=new Array(n);let a=0;for(const e of o)for(let s=0;s<e.length;s+=3)i[a++]=c(r,3*e[s],3*e[s+1],3*e[s+2]);return t.load(i),{result:t.toJSON()}}function d(t){var e;const{vertexAttributes:{position:r},vertexSpace:o,spatialReference:n,transform:i}=t,a=(e=l({vertexAttributes:{position:r},vertexSpace:o,spatialReference:n,transform:i},new u,{allowBufferReuse:!0}))==null?void 0:e.position;return a?!t.components||t.components.some(s=>!s.faces)?{position:a.buffer}:{position:a.buffer,components:t.components.map(s=>s.faces)}:null}function m(){return new p(9,f("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}function c(t,r,o,n){return{minX:Math.min(t[r],t[o],t[n]),maxX:Math.max(t[r],t[o],t[n]),minY:Math.min(t[r+1],t[o+1],t[n+1]),maxY:Math.max(t[r+1],t[o+1],t[n+1]),p0:[t[r],t[r+1],t[r+2]],p1:[t[o],t[o+1],t[o+2]],p2:[t[n],t[n+1],t[n+2]]}}export{F as default};