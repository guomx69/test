import{l as f,M as u,bX as c,bY as p,U as m}from"./index-DKNmOsay.js";async function g(i,s,o,e){if(!s)throw new f("post:missing-guid","guid for version is missing");const t=u(i),r=o.toJSON(),a=c(t.query,{query:p({...r,f:"json"}),...e,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const d=`${t.path}/versions/${s}/deleteForwardEdits`,{data:n}=await m(d,a);return n}export{g as deleteForwardEdits};