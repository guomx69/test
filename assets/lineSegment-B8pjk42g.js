import{cR as t,b5 as e,cS as g,cT as s,b1 as p,cU as b,cV as h,al as l,cW as w}from"./index-DrXmDmNo.js";import{s as x}from"./sphere-rivVvFLJ.js";import{c as A}from"./plane-CWXBIhdx.js";function a(r){return r?{origin:t(r.origin),vector:t(r.vector)}:{origin:e(),vector:e()}}function T(r,n,o=a()){return g(o.origin,r),s(o.vector,n,r),o}function U(r,n,o){return M(r,n,0,1,o)}function M(r,n,o,u,i){const{vector:c,origin:v}=r,f=s(A.get(),n,v),m=p(c,f)/b(c);return h(i,c,l(m,o,u)),w(i,i,r.origin)}new x(()=>a());export{U as M,T as h,a as v};