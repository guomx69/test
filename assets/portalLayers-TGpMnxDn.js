import{aA as w,A as v,F as f,H as p}from"./index-Bk13oInq.js";import{s as S}from"./associatedFeatureServiceUtils-BNrydjXV.js";import{b as I,i as h,a as M}from"./lazyLayerLoader-Bdu_Y0I1.js";class P{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(a,t){const r=this._serviceMetadatas.get(a);if(r)return r;const s=await I(a,t);return this._serviceMetadatas.set(a,s),s}async fetchItemData(a){const{id:t}=a;if(!t)return null;const{_itemDatas:r}=this;if(r.has(t))return r.get(t);const s=await a.fetchData();return r.set(t,s),s}async fetchCustomParameters(a,t){const r=await this.fetchItemData(a);return r&&typeof r=="object"&&(t?t(r):r.customParameters)||null}}function m(e){const a={id:e.id,name:e.name},t=h(e.type);return t!=="FeatureLayer"&&(a.layerType=t),a}async function T(e,a,t){var r,s,n;if((e==null?void 0:e.layers)==null||(e==null?void 0:e.tables)==null){const c=await t.fetchServiceMetadata(a,{customParameters:(r=y(e))==null?void 0:r.customParameters});(e=e||{}).layers=e.layers||((s=c==null?void 0:c.layers)==null?void 0:s.map(m)),e.tables=e.tables||((n=c==null?void 0:c.tables)==null?void 0:n.map(m))}return e}function y(e){if(!e)return null;const{layers:a,tables:t}=e;return a!=null&&a.length?a[0]:t!=null&&t.length?t[0]:null}function G(e,a){return a==null?null:[...e.layers||[],...e.tables||[]].find(t=>t.id===a)}function te(e,a){return[...e.layers||[],...e.tables||[]].filter(({layerType:t})=>t?t===a:a==="ArcGISFeatureLayer")}function L(e){var a,t;return(((a=e==null?void 0:e.layers)==null?void 0:a.length)??0)+(((t=e==null?void 0:e.tables)==null?void 0:t.length)??0)}function re(e){switch(e){case"catalog":return"CatalogLayer";case"feature":return"ArcGISFeatureLayer";case"oriented-imagery":return"OrientedImageryLayer";case"subtype-group":return"SubtypeGroupLayer"}return null}function C(e){switch(e){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":return"SubtypeGroupLayer"}return"FeatureLayer"}async function F(e,a,t){var n,c,l,i;if(!(e!=null&&e.url))return a??{};if(a??(a={}),!a.layers){const u=await t.fetchServiceMetadata(e.url);a.layers=(n=u.layers)==null?void 0:n.map(m)}const{serverUrl:r,portalItem:s}=await S(e.url,{sceneLayerItem:e,customParameters:(c=y(a))==null?void 0:c.customParameters}).catch(()=>({serverUrl:null,portalItem:null}));if(r==null)return a.tables=[],a;if(!a.tables&&s){const u=await s.fetchData();if(u!=null&&u.tables)a.tables=u.tables.map(m);else{const o=await t.fetchServiceMetadata(r,{customParameters:(l=y(u))==null?void 0:l.customParameters});a.tables=(i=o==null?void 0:o.tables)==null?void 0:i.map(m)}}if(a.tables)for(const u of a.tables)u.url=`${r}/${u.id}`;return a}async function D(e){let{portalItem:a}=e;!a||a instanceof w||(a=new w(a));const t=await O(a);return new t.constructor({portalItem:a,...t.properties})}async function O(e){await e.load();const a=new P;return _(await N(e,a))}async function N(e,a){switch(e.type){case"3DTiles Service":return k();case"CSV":return x();case"Feature Collection":return V(e);case"Feature Service":return j(e,a);case"Feed":return B();case"GeoJson":return U();case"Group Layer":return Q();case"Image Service":return W(e,a);case"KML":return R();case"Knowledge Graph Layer":return z();case"Map Service":return $(e,a);case"Media Layer":return X();case"Scene Service":return K(e,a);case"Stream Service":return A();case"Vector Tile Service":return J();case"WFS":return E();case"WMS":return H();case"WMTS":return q();default:throw new v("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function _(e){const a=e.className,t=M[a];return{constructor:await t(),properties:e.properties}}async function $(e,a){return await Y(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function j(e,a){const t=await b(e,a);if(typeof t=="object"){const{sourceJSON:r,className:s}=t,n={sourceJSON:r};return t.id!=null&&(n.layerId=t.id),{className:s||"FeatureLayer",properties:n}}return{className:"GroupLayer"}}async function K(e,a){var r;const t=await b(e,a,async()=>{try{if(!e.url)return[];const{serverUrl:s}=await S(e.url,{sceneLayerItem:e}),n=await a.fetchServiceMetadata(s);return(n==null?void 0:n.tables)??[]}catch{return[]}});if(typeof t=="object"){const s={};let n;if(t.id!=null?(s.layerId=t.id,n=`${e.url}/layers/${t.id}`):n=e.url,(r=e.typeKeywords)==null?void 0:r.length){for(const l of Object.keys(f))if(e.typeKeywords.includes(l))return{className:f[l]}}const c=await a.fetchServiceMetadata(n,{customParameters:await a.fetchCustomParameters(e,l=>{var i;return(i=y(l))==null?void 0:i.customParameters})});return{className:f[c==null?void 0:c.layerType]||"SceneLayer",properties:s}}if(t===!1){const s=await a.fetchServiceMetadata(e.url);if((s==null?void 0:s.layerType)==="Voxel")return{className:"VoxelLayer"}}return{className:"GroupLayer"}}async function V(e){await e.load();const a=p(e,"Map Notes"),t=p(e,"Markup");if(a||t)return{className:"MapNotesLayer"};if(p(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return L(r)===1?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function W(e,a){var i,u,o;await e.load();const t=((i=e.typeKeywords)==null?void 0:i.map(g=>g.toLowerCase()))??[];if(t.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(t.includes("tiled imagery"))return{className:"ImageryTileLayer"};const r=await a.fetchItemData(e),s=r==null?void 0:r.layerType;if(s==="ArcGISTiledImageServiceLayer")return{className:"ImageryTileLayer"};if(s==="ArcGISImageServiceLayer")return{className:"ImageryLayer"};const n=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),c=(u=n.cacheType)==null?void 0:u.toLowerCase(),l=(o=n.capabilities)==null?void 0:o.toLowerCase().includes("tilesonly");return c==="map"||l?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function A(){return{className:"StreamLayer"}}function J(){return{className:"VectorTileLayer"}}function U(){return{className:"GeoJSONLayer"}}function k(){return{className:"IntegratedMesh3DTilesLayer"}}function x(){return{className:"CSVLayer"}}function R(){return{className:"KMLLayer"}}function z(){return{className:"KnowledgeGraphLayer"}}function E(){return{className:"WFSLayer"}}function H(){return{className:"WMSLayer"}}function q(){return{className:"WMTSLayer"}}function B(){return{className:"StreamLayer"}}function Q(){return{className:"GroupLayer"}}function X(){return{className:"MediaLayer"}}async function Y(e,a){const{tileInfo:t}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return t}async function b(e,a,t){const{url:r,type:s}=e,n=s==="Feature Service";if(!r)return{};if(/\/\d+$/.test(r)){if(n){const i=await a.fetchServiceMetadata(r,{customParameters:await a.fetchCustomParameters(e,u=>{var o;return(o=y(u))==null?void 0:o.customParameters})});return{id:i.id,className:h(i.type),sourceJSON:i}}return{}}await e.load();let c=await a.fetchItemData(e);if(n){const i=await T(c,r,a),u=d(i);if(typeof u=="object"){const o=G(i,u.id);u.className=C(o==null?void 0:o.layerType)}return u}if(s==="Scene Service"&&(c=await F(e,c,a)),L(c)>0)return d(c);const l=await a.fetchServiceMetadata(r);return t&&(l.tables=await t()),d(l)}function d(e){var a;return L(e)===1&&{id:(a=y(e))==null?void 0:a.id}}const se=Object.freeze(Object.defineProperty({__proto__:null,fromItem:D,selectLayerClassPath:N},Symbol.toStringTag,{value:"Module"}));export{T as a,re as c,N as d,P as e,C as i,te as n,F as o,se as p,y as s,m as t,L as u};