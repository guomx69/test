const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/groupLayerUtils-DSOIO8ZA.js","assets/utils-ncNV3y3b.js","assets/index-DKNmOsay.js","assets/index-CXj0dB5Q.css","assets/saveAPIKeyUtils-BS1Cv6zH.js","assets/multiOriginJSONSupportUtils-C0wm8_Yw.js","assets/jsonContext-C2SCcAHG.js","assets/saveUtils-B7cLR9Hb.js","assets/resourceUtils-BxHnhvyQ.js","assets/uuid-fwrPAdZb.js","assets/resourceUtils-c1uRuL2p.js"])))=>i.map(i=>d[i]);
import{ds as b,dt as v,eO as c,eP as m,eQ as f,gS as _,gg as g,a7 as h,fh as w,aJ as I,aK as L,fu as O,gT as S,e as r,y as l,k as p,h as $,at as A,a9 as V,aa as u,a as P,du as E,m as M,n as C}from"./index-DKNmOsay.js";import{b as T}from"./lazyLayerLoader-CPIPRhYu.js";import{n as x,l as G,t as R}from"./TablesMixin-C4_iM2PC.js";import{A as y}from"./interfaces-CL2NbQte.js";import{r as j}from"./saveUtils-B7cLR9Hb.js";import{f as H}from"./writeUtils-DSihODOH.js";const F=Symbol("WebScene");let s=class extends b(v(c(m(x(G(f(E))))))){constructor(e){super(e),this.allLayers=new _({getCollections:()=>[this.layers],getChildrenFunction:i=>"layers"in i?i.layers:null}),this.allTables=R(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._debouncedSaveOperations=g(async(i,t,a)=>{const{save:o,saveAs:n}=await M(()=>import("./groupLayerUtils-DSOIO8ZA.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]));switch(i){case y.SAVE:return o(this,t);case y.SAVE_AS:return n(this,a,t)}})}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([h(()=>{let e=this.parent;for(;e&&"parent"in e&&e.parent;)e=e.parent;return e&&F in e},e=>{const i="prevent-adding-tables";this.removeHandles(i),e&&(this.tables.removeAll(),this.addHandles(V(()=>this.tables,"before-add",t=>{t.preventDefault(),C.getLogger(this).errorOnce("tables","tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.")}),i))},A),h(()=>this.visible,this._onVisibilityChange.bind(this),u)])}destroy(){this.allLayers.destroy(),this.allTables.destroy()}get sourceIsPortalItem(){return this.portalItem&&this.originIdOf("portalItem")===w.USER}_writeLayers(e,i,t,a){const o=[];if(!e)return o;e.forEach(n=>{const d=H(n,a.webmap?a.webmap.getLayerJSONFromResourceInfo(n):null,a);d!=null&&d.layerType&&o.push(d)}),i.layers=o}set portalItem(e){this._set("portalItem",e)}readPortalItem(e,i,t){const{itemId:a,layerType:o}=i;if(o==="GroupLayer"&&a)return new I({id:a,portal:t==null?void 0:t.portal})}writePortalItem(e,i){e!=null&&e.id&&(i.itemId=e.id)}set visibilityMode(e){const i=this._get("visibilityMode")!==e;this._set("visibilityMode",e),i&&this._enforceVisibility(e,this.visible)}async beforeSave(){return j(this)}load(e){const i=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Group Layer","Scene Service"],layerModuleTypeMap:T},e).catch(t=>{if(L(t),this.sourceIsPortalItem)throw t});return this.addResolvingPromise(i),Promise.resolve(this)}async loadAll(){return O(this,e=>{e(this.layers,this.tables)})}async save(e){return this._debouncedSaveOperations(y.SAVE,e)}async saveAs(e,i){return this._debouncedSaveOperations(y.SAVE_AS,i,e)}layerAdded(e){e.visible&&this.visibilityMode==="exclusive"?this._turnOffOtherLayers(e):this.visibilityMode==="inherited"&&(e.visible=this.visible),this.hasHandles(e.uid)?console.error(`Layer read to Grouplayer: uid=${e.uid}`):this.addHandles(h(()=>e.visible,i=>this._onChildVisibilityChange(e,i),u),e.uid)}layerRemoved(e){this.removeHandles(e.uid),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(e){this.layers.forEach(i=>{i!==e&&(i.visible=!1)})}_enforceVisibility(e,i){if(!S(this).initialized)return;const t=this.layers;let a=t.find(o=>o.visible);switch(e){case"exclusive":t.length&&!a&&(a=t.at(0),a.visible=!0),this._turnOffOtherLayers(a);break;case"inherited":t.forEach(o=>{o.visible=i})}}_onVisibilityChange(e){this.visibilityMode==="inherited"&&this.layers.forEach(i=>{i.visible=e})}_onChildVisibilityChange(e,i){switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(e=>e.visible)}};r([l({readOnly:!0,dependsOn:[]})],s.prototype,"allLayers",void 0),r([l({readOnly:!0})],s.prototype,"allTables",void 0),r([l({json:{read:!0,write:!0}})],s.prototype,"blendMode",void 0),r([l()],s.prototype,"fullExtent",void 0),r([l({readOnly:!0})],s.prototype,"sourceIsPortalItem",null),r([l({json:{read:!1,write:{ignoreOrigin:!0}}})],s.prototype,"layers",void 0),r([p("layers")],s.prototype,"_writeLayers",null),r([l({type:["GroupLayer"]})],s.prototype,"operationalLayerType",void 0),r([l({json:{origins:{"web-map":{read:!1,write:{overridePolicy(e,i,t){return{enabled:(e==null?void 0:e.type)==="Group Layer"&&(t==null?void 0:t.initiator)!==this}}}},"web-scene":{read:!1,write:!1}}}})],s.prototype,"portalItem",null),r([$("web-map","portalItem",["itemId"])],s.prototype,"readPortalItem",null),r([p("web-map","portalItem",{itemId:{type:String}})],s.prototype,"writePortalItem",null),r([l()],s.prototype,"spatialReference",void 0),r([l({json:{read:!1},readOnly:!0,value:"group"})],s.prototype,"type",void 0),r([l({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(e,i,t)=>{e!=="inherited"&&(i[t]=e)}}}}})],s.prototype,"visibilityMode",null),s=r([P("esri.layers.GroupLayer")],s);const Q=s;export{Q as default};