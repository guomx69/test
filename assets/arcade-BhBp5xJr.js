import{l as g,aq as G,c4 as L,C as P,D as I,A as J}from"./index-DKNmOsay.js";import{n as T,a as F,m as $}from"./TimeOnly-3_wMIEnG.js";import{t as M}from"./ImmutableArray-BPVd6ESQ.js";import z from"./FeatureLayer-Tsr4c8px.js";import"./FeatureLayerBase-D3eKs9jR.js";import"./HeightModelInfo-DFyfL7xX.js";import"./workers-CxV4LYO7.js";import"./editsZScale-Bh9XQHVY.js";import"./EditBusLayer-DDw9ngda.js";import"./uuid-fwrPAdZb.js";import"./FeatureEffectLayer-Dv7-XJJ5.js";import"./FeatureEffect-DWdrKli2.js";import"./FeatureReductionLayer-BpKPMnuS.js";import"./FeatureReductionSelection-QgLQpkxW.js";import"./MD5-C9MwAd2G.js";import"./OrderedLayer-CLJOk_Sh.js";import"./OrderByInfo-CBYwgi90.js";import"./fieldProperties-DHU5449Z.js";import"./styleUtils-_CrCK0E9.js";import"./TopFeaturesQuery-DZOrs6ND.js";import"./interfaces-CL2NbQte.js";let b=null;function q(e,o,r,n={}){const t=o.elementType,s="value",l=t.type==="array"?[{name:s,type:t.type,elementType:t.elementType}]:t.type==="dictionary"?[{name:s,type:t.type,properties:t.properties}]:[{name:s,type:t.type}];return new M(e.map(i=>{const a={};return w(a,l,{[s]:i},r,n),a[s]}))}function E(e,o,r={}){const n=e instanceof J?new z({source:e.features,geometryType:e.geometryType,fields:e.fields,spatialReference:e.spatialReference}):e;return o.constructFeatureSet(n,r.spatialReference,null,!0,r.lruCache,r.interceptor)}function N(e,o,r={}){const{spatialReference:n,interceptor:t,lruCache:s}=r;return typeof e=="string"?o.createFeatureSetCollectionFromService(e,n,s,t):o.createFeatureSetCollectionFromMap(e,n,s,t)}function Y(e,o,r,n={}){const t={};return w(t,o.properties,e,r,n),new b.Dictionary(t)}function w(e,o,r,n,t={}){const s={};for(const l of Object.keys(r))s[l.toLowerCase()]=r[l];for(const l of o){const i=l.name.toLowerCase();if(t.variablesPreProcessed)e[i]=s[i];else switch(l.type){case"array":{const a=s[i];e[i]=a==null?null:q(a,l,n,t);break}case"feature":{const a=s[i];e[i]=a==null?null:b.Feature.createFromGraphic(a,t==null?void 0:t.timeZone);break}case"featureSet":{const a=s[i];e[i]=a==null?null:n?E(a,n,t):null;break}case"featureSetCollection":{const a=s[i];e[i]=a==null?null:n?N(a,n,t):null;break}case"dictionary":{const a=s[i];e[i]=a==null?null:Y(a,l,n,t);break}case"date":{const a=s[i];e[i]=a?a instanceof $?a:t!=null&&t.timeZone?$.dateJSAndZoneToArcadeDate(a,t==null?void 0:t.timeZone):$.dateJSToArcadeDate(a):null;break}case"dateOnly":{const a=s[i];e[i]=a?a instanceof F?a:F.fromReader(a):null;break}case"time":{const a=s[i];e[i]=a?a instanceof T?a:T.fromReader(a):null;break}case"knowledgeGraph":case"geometry":case"boolean":case"text":case"number":e[i]=s[i]}}}function U(e,o){for(const r of e)o.push(r),r.type==="dictionary"&&U(r.properties,o);return o}function R(e,o,r,n,t){const{spatialReference:s,interceptor:l,lruCache:i,console:a,abortSignal:m,timeZone:u,services:S={portal:P.getDefault()}}=r,f={vars:{},spatialReference:s,interceptor:l,timeZone:u,lrucache:i,useAsync:t,services:S,console:a,abortSignal:m};return o&&w(f.vars,e.variables,o,n,r),f}function v(e,o){switch(o.getArcadeType(e)){case"number":case"text":case"boolean":case"point":case"polygon":case"polyline":case"multipoint":case"extent":return e;case"date":return e.toJSDate();case"time":case"dateOnly":return e.toString();case"feature":{const r=(e.type,e),n="geometry"in r?r.geometry():null,t="readAttributes"in r?r.readAttributes():r.attributes;return new I({geometry:n,attributes:t})}case"dictionary":{const r=e,n=r.attributes,t={};for(const s of Object.keys(n))t[s]=v(r.field(s),o);return t}case"array":return("toArray"in e?e.toArray():e).map(r=>v(r,o))}return e}const D={variables:[{name:"$feature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$userInput",type:"geometry"},{name:"$graph",type:"knowledgeGraph"}]},Z={variables:[{name:"$feature",type:"feature"},{name:"$aggregatedFeatures",type:"featureSet"}]},O=new Map([["aggregate-field",{variables:[{name:"$feature",type:"feature"}]}],["form-constraint",{variables:[{name:"$feature",type:"feature"}]}],["feature-z",{variables:[{name:"$feature",type:"feature"}]}],["field-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$datastore",type:"featureSetCollection"}]}],["form-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$originalFeature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$featureSet",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$editContext",type:"dictionary",properties:[{name:"editType",type:"text"}]}]}],["labeling",{variables:[{name:"$feature",type:"feature"}]}],["popup",D],["popup-element",D],["feature-reduction-popup",Z],["feature-reduction-popup-element",Z],["visualization",{variables:[{name:"$feature",type:"feature"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"}]}]}]]);function fe(e){const o=O.get(e);if(!o){const r=Array.from(O.keys()).map(n=>`'${n}'`).join(", ");throw new g("createArcadeProfile:invalid-profile-name",`Invalid profile name '${e}'. You must specify one of the following values: ${r}`)}return G(o)}async function ye(e,o,r={}){b||(b=await L());const{arcade:n,arcadeUtils:t}=b,{loadScriptDependencies:s,referencesMember:l,scriptIsAsync:i}=n,a=U(o.variables,[]),m=a.filter(c=>c.type==="featureSet"||c.type==="featureSetCollection").map(c=>c.name.toLowerCase()),u=n.parseScript(e,m);if(!u)throw new g("arcade:invalid-script","Unable to create SyntaxTree");const S=t.extractFieldNames(u),f=n.scriptTouchesGeometry(u),C=a.map(c=>c.name.toLowerCase()).filter(c=>l(u,c)),p=i(u,m);await s(u,p,m);const h={vars:{},spatialReference:null,useAsync:p};for(const c of C)h.vars[c]="any";const{lruCache:A}=r,x=n.compileScript(u,h),k=n.featureSetUtils(),{services:j}=r;return{execute:(c,y={})=>{if(p)throw new g("arcade:invalid-execution-mode","Cannot execute the script in synchronous mode");const d=x(R(o,c,{lruCache:A,...y},k,p));return y.rawOutput?d:v(d,t)},executeAsync:async(c,y={})=>{const d=await x(R(o,c,{lruCache:A,services:j,...y},k,p));return y.rawOutput?d:v(d,t)},isAsync:p,variablesUsed:C,fieldsUsed:S,geometryUsed:f,syntaxTree:u}}export{ye as createArcadeExecutor,fe as createArcadeProfile};