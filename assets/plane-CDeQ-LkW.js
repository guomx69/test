import{ih as b,b7 as f,ii as V,aC as p,cO as T,b6 as $,b3 as g}from"./index-Bk13oInq.js";import{e as X}from"./mat3f64-q3fE-ZOt.js";import{e as C}from"./mat4f64-CSKppSlJ.js";import{e as x}from"./quatf64-Bdb9ZJJK.js";import{n as L}from"./vec2f64-CaE_5U6X.js";class r{constructor(e){this._create=e,this._items=new Array,this._itemsPtr=0}get(){return this._itemsPtr===0&&b(()=>this._reset()),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const e=2*this._itemsPtr;this._items.length>e&&(this._items.length=e),this._itemsPtr=0}static createVec2f64(){return new r(L)}static createVec3f64(){return new r(f)}static createVec4f64(){return new r(V)}static createMat3f64(){return new r(X)}static createMat4f64(){return new r(C)}static createQuatf64(){return new r(x)}get test(){}}r.createVec2f64();const d=r.createVec3f64();r.createVec4f64();r.createMat3f64();const j=r.createMat4f64(),B=r.createQuatf64();function O(t=q){return[t[0],t[1],t[2],t[3]]}function D(t){return t}function y(t,e,i,s=O()){const h=i[0]-e[0],I=i[1]-e[1],a=i[2]-e[2],c=t[0]-e[0],w=t[1]-e[1],A=t[2]-e[2],_=I*A-a*w,E=a*c-h*A,P=h*w-I*c,F=_*_+E*E+P*P,l=Math.abs(F-1)>1e-5&&F>1e-12?1/Math.sqrt(F):1;return s[0]=_*l,s[1]=E*l,s[2]=P*l,s[3]=-(s[0]*t[0]+s[1]*t[1]+s[2]*t[2]),s}function Q(t,e,i,s=0,h=Math.floor(i*(1/3)),I=Math.floor(i*(2/3))){if(i<3)return!1;e(o,s);let a=h,c=!1;for(;a<i-1&&!c;)e(n,a),a++,c=!p(o,n);if(!c)return!1;for(a=Math.max(a,I),c=!1;a<i&&!c;)e(N,a),a++,T(m,o,n),$(m,m),T(u,n,N),$(u,u),c=!p(o,N)&&!p(n,N)&&Math.abs(g(m,u))<k;return c?(y(o,n,N,t),!0):(s!==0||h!==1||I!==2)&&Q(t,e,i,0,1,2)}const k=.99619469809,o=f(),n=f(),N=f(),m=f(),u=f(),q=[0,0,1,0];var M;(function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"})(M||(M={}));M.INFINITE_MIN|M.INFINITE_MAX;M.INFINITE_MAX;export{O as E,D as F,Q as X,d as c,j as f,B as o};