const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/knowledgeGraphService-G7S3DYGv.js","assets/index-Bk13oInq.js","assets/index-CXj0dB5Q.css","assets/GraphQueryStreaming-B-mN9Jgl.js"])))=>i.map(i=>d[i]);
import{J as I,C as G,s as F,cC as J,cD as K,cE as V,N as P,aA as M,fA as b,dB as Q,fD as j}from"./index-Bk13oInq.js";import{a as D,b as u,r as f,I as L,m as T,G as y,ab as O,P as U,N as W,U as _,A as B,E as k,X as A,w as H,v as X,ac as z,ad as N,ae as Y}from"./arcadeUtils-CNW19IHe.js";import{l as Z}from"./portalUtils-MMDkQf61.js";import{p as $,n as tt}from"./project-C0HSHKI9.js";import{s as nt,m as et,t as at,p as rt,c as it}from"./GraphQueryStreaming-B-mN9Jgl.js";import"./TimeOnly-DnMhE39F.js";import"./ImmutableArray-BPVd6ESQ.js";import"./number-CNaNV47i.js";let p=null;async function ot(t){const n=F.geometryServiceUrl??"";if(!n){J()||await K();for(const e of t)e.container[e.indexer]=V(e.container[e.indexer],P.WGS84);return}const a=t.map(e=>e.container[e.indexer]),i=new $({geometries:a,outSpatialReference:P.WGS84}),s=await tt(n,i);for(let e=0;e<s.length;e++){const r=t[e];r.container[r.indexer]=s[e]}}async function E(t,n){const a=new M({portal:t,id:n});return await a.load(),p===null&&(p=await G(()=>import("./knowledgeGraphService-G7S3DYGv.js").then(i=>i.k),__vite__mapDeps([0,1,2,3]))),await p.fetchKnowledgeGraph(a.url)}function R(t,n,a,i,s){if(t===null)return null;if(y(t)||k(t))return t;if(A(t)||A(t))return t.toJSDate();if(H(t))return t.toStorageFormat();if(X(t))return t.toStorageString();if(z(t)){const e={};for(const r of t.keys())e[r]=R(t.field(r),n,a,i,s),e[r]instanceof b&&s.push({container:e,indexer:r});return e}if(_(t)){const e=t.map(r=>R(r,n,a,i,s));for(let r=0;r<e.length;r++)e[r]instanceof b&&s.push({container:e,indexer:r});return e}return N(t)?t.spatialReference.isWGS84?t:t.spatialReference.isWebMercator&&n?Q(t):t:void 0}function st(t,n){if(!t)return t;if(t.spatialReference.isWGS84&&n.spatialReference.isWebMercator)return j(t);if(t.spatialReference.equals(n.spatialReference))return t;throw new u(n,f.WrongSpatialReference,null)}function v(t,n){if(!t)return null;const a={};for(const i in t)a[i]=g(t[i],n);return a}function g(t,n){return t===null?null:_(t)?t.map(a=>g(a,n)):t instanceof et?{graphTypeName:t.typeName,id:t.id,graphType:"entity",properties:v(t.properties,n)}:t instanceof at?{graphType:"object",properties:v(t.properties,n)}:t instanceof rt?{graphTypeName:t.typeName,id:t.id,graphType:"relationship",originId:t.originId??null,destinationId:t.destinationId??null,properties:v(t.properties,n)}:t instanceof it?{graphType:"path",path:t.path?t.path.map(a=>g(a,n)):null}:N(t)?st(t,n):y(t)||k(t)||Y(t)?t:null}function gt(t){t.mode==="async"&&(t.functions.knowledgegraphbyportalitem=function(n,a){return t.standardFunctionAsync(n,a,(i,s,e)=>{var d,m;if(D(e,2,2,n,a),e[0]===null)throw new u(n,f.PortalRequired,a);if(e[0]instanceof L){const c=T(e[1]);let h;return h=(d=n.services)!=null&&d.portal?n.services.portal:I.getDefault(),E(Z(e[0],h),c)}if(y(e[0])===!1)throw new u(n,f.InvalidParameter,a);const r=T(e[0]);return E(((m=n.services)==null?void 0:m.portal)??I.getDefault(),r)})},t.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),t.functions.querygraph=function(n,a){return t.standardFunctionAsync(n,a,async(i,s,e)=>{var x;D(e,2,4,n,a);const r=e[0];if(!O(r))throw new u(n,f.InvalidParameter,a);const d=e[1];if(!y(d))throw new u(n,f.InvalidParameter,a);p===null&&(p=await G(()=>import("./knowledgeGraphService-G7S3DYGv.js").then(o=>o.k),__vite__mapDeps([0,1,2,3])));let m=null;const c=U(e[2],null);if(!(c instanceof W||c===null))throw new u(n,f.InvalidParameter,a);if(c){let o=[];m=R(c,!0,!1,n,o),o=o.filter(l=>!l.container[l.indexer].spatialReference.isWGS84),o.length>0&&await ot(o)}const h=new nt({openCypherQuery:d,bindParameters:m});(((x=r==null?void 0:r.serviceDefinition)==null?void 0:x.currentVersion)??11.3)>11.2&&(h.outputSpatialReference=n.spatialReference);const q=(await p.executeQueryStreaming(r,h)).resultRowsStream.getReader(),S=[];try{for(;;){const{done:o,value:l}=await q.read();if(o)break;if(_(l))for(const w of l)S.push(g(w,n));else{const w=[];for(const C of l)w.push(g(l[C],n));S.push(w)}}}catch(o){throw o}return W.convertJsonToArcade(S,B(n),!1,!0)})},t.signatures.push({name:"querygraph",min:2,max:4}))}export{gt as registerFunctions};