import{g as j,f2 as P,f3 as N,f4 as v,f5 as x,f6 as A,f7 as S,f8 as O,f9 as U,fa as R,A as F,fb as $,dF as J,be as K,fc as z,bf as C,fd as H}from"./index-Bk13oInq.js";import{i as V}from"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import{p as y}from"./resourceExtension-CtQxSiP-.js";function M(e){const o=(e==null?void 0:e.origins)??[void 0];return(t,n)=>{const s=Y(e,t,n);for(const a of o){const i=j(t,a,n);for(const r in s)i[r]=s[r]}}}function Y(e,o,t){if((e==null?void 0:e.type)==="resource")return Z(e,o,t);switch((e==null?void 0:e.type)??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:s}=H;return{read:n,write:s}}}}function Z(e,o,t){const n=P(o,t);return{type:String,read:(s,a,i)=>{const r=N(s,a,i);return n.type===String?r:typeof n.type=="function"?new n.type({url:r}):void 0},write:{writer(s,a,i,r){if(!(r!=null&&r.resources))return typeof s=="string"?void(a[i]=v(s,r)):void(a[i]=s.write({},r));const c=B(s),p=v(c,{...r,verifyItemRelativeUrls:r!=null&&r.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},x.NO),l=n.type!==String&&(!V(this)||(r==null?void 0:r.origin)&&this.originIdOf(t)>A(r.origin)),d={object:this,propertyName:t,value:s,targetUrl:p,dest:a,targetPropertyName:i,context:r,params:e};r!=null&&r.portalItem&&p&&!S(p)?l&&(e!=null&&e.contentAddressed)?g(d):l?k(d):q(d):r!=null&&r.portalItem&&(p==null||O(p)!=null||U(p)||l)?g(d):a[i]=p}}}}function g(e){var h;const{targetUrl:o,params:t,value:n,context:s,dest:a,targetPropertyName:i}=e;if(!s.portalItem)return;const r=R(o),c=I(n,o,s);if(t!=null&&t.contentAddressed&&c.type!=="json")return void((h=s.messages)==null?void 0:h.push(new F("persistable:contentAddressingUnsupported",`Property "${i}" is trying to serializing a resource with content of type ${c.type} with content addressing. Content addressing is only supported for json resources.`,{content:c})));const p=t!=null&&t.contentAddressed&&c.type==="json"?$(c.jsonString):(r==null?void 0:r.filename)??J(),l=K((t==null?void 0:t.prefix)??(r==null?void 0:r.prefix),p),d=`${l}.${y(c)}`;if(t!=null&&t.contentAddressed&&s.resources&&c.type==="json"){const u=s.resources.toKeep.find(({resource:m})=>m.path===d)??s.resources.toAdd.find(({resource:m})=>m.path===d);if(u)return void(a[i]=u.resource.itemRelativeUrl)}const f=s.portalItem.resourceFromPath(d);U(o)&&s.resources&&s.resources.pendingOperations.push(z(o).then(u=>{f.path=`${l}.${y({type:"blob",blob:u})}`,a[i]=f.itemRelativeUrl}).catch(()=>{}));const b=(t==null?void 0:t.compress)??!1;s.resources&&w({...e,resource:f,content:c,compress:b,updates:s.resources.toAdd}),a[i]=f.itemRelativeUrl}function k(e){const{context:o,targetUrl:t,params:n,value:s,dest:a,targetPropertyName:i}=e;if(!o.portalItem)return;const r=o.portalItem.resourceFromPath(t),c=I(s,t,o),p=y(c),l=C(r.path),d=(n==null?void 0:n.compress)??!1;p===l?(o.resources&&w({...e,resource:r,content:c,compress:d,updates:o.resources.toUpdate}),a[i]=t):g(e)}function q({context:e,targetUrl:o,dest:t,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(o),compress:!1}),t[n]=o)}function w({object:e,propertyName:o,updates:t,resource:n,content:s,compress:a}){const i=r=>{D(e,o,r)};t.push({resource:n,content:s,compress:a,finish:i})}function I(e,o,t){return typeof e=="string"?{type:"url",url:o}:{type:"json",jsonString:JSON.stringify(e.toJSON(t))}}function B(e){return e==null?null:typeof e=="string"?e:e.url}function D(e,o,t){typeof e[o]=="string"?e[o]=t.url:e[o].url=t.url}export{M as j};