const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/featureLayerUtils-5yNEnM4X.js","assets/index-DKNmOsay.js","assets/index-CXj0dB5Q.css","assets/saveAPIKeyUtils-BS1Cv6zH.js","assets/multiOriginJSONSupportUtils-C0wm8_Yw.js","assets/utils-ncNV3y3b.js","assets/jsonContext-C2SCcAHG.js","assets/saveUtils-B7cLR9Hb.js","assets/lazyLayerLoader-CPIPRhYu.js","assets/FeatureLayerSource-DFyp5qGy.js","assets/uuid-fwrPAdZb.js","assets/MeshLocalVertexSpace-t8hLfCnl.js","assets/meshVertexSpaceUtils-SDaekjCF.js","assets/External-DEZgnVV2.js","assets/mat4f64-CSKppSlJ.js","assets/quat-gczbV4LW.js","assets/mat3f64-q3fE-ZOt.js","assets/quatf64-Bdb9ZJJK.js","assets/editingSupport-C1pwT1lx.js","assets/EditBusLayer-DDw9ngda.js","assets/clientSideDefaults-BGkt0vuv.js","assets/QueryEngineCapabilities-CTDe3LlQ.js","assets/editsZScale-Bh9XQHVY.js"])))=>i.map(i=>d[i]);
import{hg as K,eQ as D,dw as k,eM as W,gW as x,aq as S,N as Y,n as Z,dj as C,l as f,gY as X,hh as N,gx as L,fH as M,e as i,y as s,k as ee,g_ as te,g$ as re,h0 as ie,eS as se,hf as ne,he as ae,h2 as oe,dh as le,h as I,h6 as Q,a as H,hi as ue,hj as pe,hk as de,hl as ye,hm as he,hn as ce,gf as be,ds as fe,gV as ge,dt as me,eN as ve,eZ as we,eO as Se,eP as Fe,e_ as $e,e$ as Ie,V as A,gg as Oe,a7 as je,aa as Ee,aK as Te,gi as _e,ho as Ae,I as Ce,aO as Le,hp as xe,hq as Pe,hr as Ve,hs as qe,ht as Ge,m as P,hu as Re,hv as De,fu as ke,hw as Ne,hx as Me,hy as Qe,hz as He,hA as Ue,hB as Be,hC as ze,gX as Je,hD as Ke,eR as We,hE as Ye,du as Ze}from"./index-DKNmOsay.js";import{F as Xe}from"./EditBusLayer-DDw9ngda.js";import{V as et,R as tt}from"./FeatureLayerBase-D3eKs9jR.js";import{s as U}from"./fieldProperties-DHU5449Z.js";import{A as E}from"./interfaces-CL2NbQte.js";import"./uuid-fwrPAdZb.js";import"./HeightModelInfo-DFyfL7xX.js";const B={key:"type",base:ue,errorContext:"renderer",typeMap:{simple:C,"unique-value":pe,"class-breaks":de}},V=U(),q=K({types:B});let rt=0;function $(e){const t=e.json.write;return typeof t=="object"?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function it(e){return new C({symbol:st(e)})}function st(e){switch(e){case"point":case"multipoint":return ce.clone();case"polyline":return he.clone();case"polygon":case"multipatch":return ye.clone();default:return null}}function nt(e,t){return!!t&&(e==null?void 0:e.type)==="unique-value"&&e.field!=null&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function z(e,t){var r;return e==null?null:(r=t.subtypes)==null?void 0:r.find(n=>n.code===e)}function at(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const n={},o=z(e,t);if(o!=null){const{defaultValues:l}=o;for(const u in l)n[u]=l[u]}return n[t.subtypeField]=e,new Q({name:"New Feature",drawingTool:r,prototype:{attributes:n}})}let a=class extends D(k(W(be))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${rt++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}load(e){return x(this.renderer,this.fieldsIndex),Promise.resolve(this)}get capabilities(){var e;return(e=this.parent)==null?void 0:e.capabilities}get effectiveCapabilities(){var e;return(e=this.parent)==null?void 0:e.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){var e;return(e=this.parent)==null?void 0:e.elevationInfo}writeFieldOverrides(e,t,r){const{fields:n,parent:o}=this;let l;if(n){l=[];let u=0;n.forEach(({name:y,alias:h,editable:g,visible:m})=>{var O;if(!m)return;const d=(O=o==null?void 0:o.fields)==null?void 0:O.find(F=>F.name===y);if(!d)return;const b={name:y};let w=!1;h!==d.alias&&(b.alias=h,w=!0),g!==d.editable&&(b.editable=g,w=!0),l.push(b),w&&u++}),u===0&&l.length===n.length&&(l=null)}else l=S(e);l!=null&&l.length&&Y(r,l,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,n=e==null?void 0:e.fields;if(!e||!(n!=null&&n.length))return null;const{subtypes:o,subtypeField:l}=e,u=o==null?void 0:o.find(m=>m.code===r),y=u==null?void 0:u.defaultValues,h=u==null?void 0:u.domains,g=[];for(const m of n){const d=m.clone(),{name:b}=d,w=t==null?void 0:t.find(j=>j.name===b);if(d.visible=!t||!!w,w){const{alias:j,editable:J}=w;j&&(d.alias=j),J===!1&&(d.editable=!1)}const O=(y==null?void 0:y[b])??null;d.defaultValue=b===l?r:O;const F=(h==null?void 0:h[b])??null;d.domain=b===l?null:F?F.type==="inherited"?d.domain:F.clone():null,g.push(d)}return g}get floorInfo(){var e;return(e=this.parent)==null?void 0:e.floorInfo}get geometryType(){var e;return(e=this.parent)==null?void 0:e.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){var e;return this.parent||Z.getLogger(this).error(v("objectIdField")),(e=this.parent)==null?void 0:e.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){x(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?it(e.geometryType):null}readRendererFromService(e,t,r){var y,h,g;if(t.type==="Table")return null;const n=(y=t.drawingInfo)==null?void 0:y.renderer,o=q(n,t,r);let l;const{subtypeCode:u}=this;if(u!=null&&nt(o,t.subtypeField)){const m=(h=o.uniqueValueInfos)==null?void 0:h.find(({value:d})=>(d=typeof d=="number"?String(d):d)===String(u));m&&(l=new C({symbol:m.symbol}))}else(o==null?void 0:o.type)!=="simple"||(g=o.visualVariables)!=null&&g.length||(l=o);return l}readRenderer(e,t,r){var l,u,y;const n=(u=(l=t==null?void 0:t.layerDefinition)==null?void 0:l.drawingInfo)==null?void 0:u.renderer;return n?((y=n.visualVariables)==null?void 0:y.some(h=>h.type!=="rotationInfo"))?void 0:q(n,t,r)||void 0:void 0}get spatialReference(){var e;return(e=this.parent)==null?void 0:e.spatialReference}get subtypeField(){var e;return(e=this.parent)==null?void 0:e.subtypeField}readTemplatesFromService(e,t){return[at(this.subtypeCode,t)]}readTitleFromService(e,t){const r=z(this.subtypeCode,t);return r!=null?r.name:null}get url(){var e;return(e=this.parent)==null?void 0:e.url}get userHasUpdateItemPrivileges(){var e;return!!((e=this.parent)!=null&&e.userHasUpdateItemPrivileges)}async addAttachment(e,t){const{parent:r}=this;if(!r)throw v("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new f("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:n}=this;if(!n)throw v("updateAttachment");if(e.getAttribute(n.subtypeField)!==this.subtypeCode)throw new f("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return n.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw v("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new f("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw v("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:n,title:o}=this;if(r){const{displayField:l,editFieldsInfo:u,objectIdField:y}=r;t={displayField:l,editFieldsInfo:u,fields:n,objectIdField:y,title:o}}return X(t,e)}createQuery(){if(!this.parent)throw v("createQuery");const e=N(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=L(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw v("queryAttachments");const n=e.clone();return n.where=G(n.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw v("queryFeatures");const n=M.from(e)??r.createQuery();return e!=null&&(n.where=G(n.where,r.parent.subtypeField,r.subtypeCode)),r.parent.queryFeatures(n,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};i([s({readOnly:!0,json:{read:!1}})],a.prototype,"capabilities",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"effectiveCapabilities",null),i([s({json:{write:{ignoreOrigin:!0}}})],a.prototype,"charts",void 0),i([s({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],a.prototype,"editingEnabled",void 0),i([s({type:Boolean,readOnly:!0})],a.prototype,"effectiveEditingEnabled",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"elevationInfo",null),i([s({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],a.prototype,"fieldOverrides",void 0),i([ee("fieldOverrides")],a.prototype,"writeFieldOverrides",null),i([s({...V.fields,readOnly:!0,json:{read:!1}})],a.prototype,"fields",null),i([s(V.fieldsIndex)],a.prototype,"fieldsIndex",void 0),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"floorInfo",null),i([s({type:et,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],a.prototype,"formTemplate",void 0),i([s({type:String,clonable:!1,readOnly:!0,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],a.prototype,"id",void 0),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"geometryType",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),i([s($(S(te)))],a.prototype,"labelsVisible",void 0),i([s({type:[re],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:ie},write:{ignoreOrigin:!0}}})],a.prototype,"labelingInfo",void 0),i([s({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],a.prototype,"layerType",void 0),i([s($(S(se)))],a.prototype,"legendEnabled",void 0),i([s({type:["show","hide"]})],a.prototype,"listMode",void 0),i([s((()=>{const e=S(ne);return e.json.origins.service.read=!1,$(e)})())],a.prototype,"minScale",void 0),i([s((()=>{const e=S(ae);return e.json.origins.service.read=!1,$(e)})())],a.prototype,"maxScale",void 0),i([s({readOnly:!0})],a.prototype,"effectiveScaleRange",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"objectIdField",null),i([s({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],a.prototype,"opacity",void 0),i([s({clonable:!1})],a.prototype,"parent",void 0),i([s($(S(oe)))],a.prototype,"popupEnabled",void 0),i([s({type:le,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],a.prototype,"popupTemplate",void 0),i([s({readOnly:!0})],a.prototype,"defaultPopupTemplate",null),i([s({types:B,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],a.prototype,"renderer",null),i([I("service","renderer",["drawingInfo.renderer","subtypeField","type"])],a.prototype,"readRendererFromService",null),i([I("renderer",["layerDefinition.drawingInfo.renderer"])],a.prototype,"readRenderer",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"spatialReference",null),i([s({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],a.prototype,"subtypeCode",void 0),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"subtypeField",null),i([s({type:[Q],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],a.prototype,"templates",void 0),i([I("service","templates",["geometryType","subtypeField","subtypes","type"])],a.prototype,"readTemplatesFromService",null),i([s({type:String,json:{write:{ignoreOrigin:!0}}})],a.prototype,"title",void 0),i([I("service","title",["subtypes"])],a.prototype,"readTitleFromService",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"url",null),i([s({readOnly:!0})],a.prototype,"userHasUpdateItemPrivileges",null),i([s({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],a.prototype,"visible",void 0),a=i([H("esri.layers.support.SubtypeSublayer")],a);const G=(e,t,r)=>{const n=new RegExp(`${t}\\s*=\\s*\\d+`),o=`${t}=${r}`,l=e??"";return n.test(l)?l.replace(n,o):L(o,l)},v=e=>new f(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),T=a,c="SubtypeGroupLayer",ot="esri.layers.SubtypeGroupLayer";function R(e,t){return new f("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const _=U();let p=class extends tt(Xe(fe(ge(me(ve(we(Se(Fe(D($e(Ie(k(Ze))))))))))))){constructor(...e){super(...e),this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(A.ofType(T)),this.supportedSourceTypes=new Set(["Feature Layer"]),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=Oe(async(t,r,n)=>{const{save:o,saveAs:l}=await P(()=>import("./featureLayerUtils-5yNEnM4X.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]));switch(t){case E.SAVE:return o(this,r);case E.SAVE_AS:return l(this,n,r)}}),this.addHandles(je(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),Ee))}destroy(){var e;(e=this.source)==null||e.destroy()}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=e!=null?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(Te).then(async()=>{if(!this.url)throw new f("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(this.layerId==null)throw new f("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))}).then(()=>_e(this,"load",e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return Ae(this)}get parsedUrl(){const e=Ce(this.url);return e!=null&&this.layerId!=null&&(e.path=Le(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?xe(this.url,t):t}async addAttachment(e,t){return Pe(this,e,t,c)}async updateAttachment(e,t,r){return Ve(this,e,t,r,c)}async applyEdits(e,t){return qe(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await Ge(P(()=>import("./FeatureLayerSource-DFyp5qGy.js"),__vite__mapDeps([9,1,2,10,11,12,13,14,15,16,17,18,19,20,21,22])),e);return new t({layer:this,supportedSourceTypes:this.supportedSourceTypes}).load({signal:e})}createQuery(){const e=N(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=L(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){return Re(this,e,t,c)}async fetchRecomputedExtents(e){return De(this,e,c)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return ke(this,e=>{e(this.sublayers)})}async queryAttachments(e,t){return Ne(this,e,t,c)}async queryFeatures(e,t){const r=await this.load(),n=M.from(e)??r.createQuery(),o=n.outFields??[];o.includes(this.subtypeField)||(o.push(this.subtypeField),n.outFields=o);const l=await r.source.queryFeatures(n,t);if(l!=null&&l.features)for(const u of l.features)u.layer=u.sourceLayer=this.findSublayerForFeature(u);return l}async queryObjectIds(e,t){return Me(this,e,t,c)}async queryFeatureCount(e,t){return Qe(this,e,t,c)}async queryExtent(e,t){return He(this,e,t,c)}async queryRelatedFeatures(e,t){return Ue(this,e,t,c)}async queryRelatedFeaturesCount(e,t){return Be(this,e,t,c)}async save(e){return this._debouncedSaveOperations(E.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(E.SAVE_AS,t,e)}write(e,t){var l;const{origin:r,layerContainerType:n,messages:o}=t;if(this.isTable){if(r==="web-scene"||r==="web-map"&&n!=="tables")return o==null||o.push(R(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&n==="tables")return o==null||o.push(R(this,"using a non-table source cannot be written to tables in web maps")),null;return(l=this.sublayers)!=null&&l.length?super.write(e,t):(o==null||o.push(new f("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&ze(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){var r;this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),!((r=this.subtypes)!=null&&r.length))throw new f("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),Je(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return Ke(this)}_verifyFields(){var t,r;const e=((t=this.parsedUrl)==null?void 0:t.path)??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||e.search(/\/FeatureServer\//i)!==-1||(r=this.fields)!=null&&r.some(n=>n.type==="geometry")||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach(r=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),this.addHandles([e.on("after-add",({item:r})=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),e.on("after-remove",({item:r})=>{r.parent=null,this._sublayerLookup.delete(r.subtypeCode)})],"sublayers-owner"))}};i([s({readOnly:!0})],p.prototype,"createQueryVersion",null),i([s({readOnly:!0})],p.prototype,"editingEnabled",null),i([s({readOnly:!0})],p.prototype,"effectiveEditingEnabled",null),i([s({..._.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],p.prototype,"fields",void 0),i([s(_.fieldsIndex)],p.prototype,"fieldsIndex",void 0),i([s(We)],p.prototype,"id",void 0),i([s({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],p.prototype,"listMode",void 0),i([s({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],p.prototype,"operationalLayerType",void 0),i([s(_.outFields)],p.prototype,"outFields",void 0),i([s({readOnly:!0})],p.prototype,"parsedUrl",null),i([s({clonable:!1})],p.prototype,"source",null),i([s({type:A.ofType(T),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const n=e.map(({code:o})=>{const l=new T({subtypeCode:o});return l.read(t,r),l});return new(A.ofType(T))(n)}}}},name:"layers",write:{ignoreOrigin:!0}}})],p.prototype,"sublayers",void 0),i([s({type:Ye})],p.prototype,"timeInfo",void 0),i([s({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],p.prototype,"title",void 0),i([I("service","title",["name"])],p.prototype,"readTitleFromService",null),i([s({json:{read:!1}})],p.prototype,"type",void 0),p=i([H(ot)],p);const bt=p;export{bt as default};