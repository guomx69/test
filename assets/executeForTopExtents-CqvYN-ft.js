import{M as m,E as r}from"./index-DrXmDmNo.js";import{d as s}from"./queryTopFeatures-v3HxC89W.js";import{S as x}from"./TopFeaturesQuery-DG7a_YGq.js";async function f(o,n,e){const i=m(o),a=await s(i,x.from(n),{...e}),t=a.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:a.data.count,extent:null}:{count:a.data.count,extent:r.fromJSON(t)}}export{f as executeForTopExtents};