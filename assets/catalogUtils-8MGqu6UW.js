import{X as n,aj as r,a0 as s}from"./index-Bk13oInq.js";const t=new WeakMap;function d(e){return!e.destroyed&&(t.has(e)||e.addHandles([n(()=>{const a=e.parent;return!(!a||!("type"in a))&&(a.type==="catalog-dynamic-group"||d(a))},a=>t.set(e,a),r),s(()=>t.delete(e))]),t.get(e))}export{d as a};