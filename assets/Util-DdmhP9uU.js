import"./vec2f64-CaE_5U6X.js";import"./index-DKNmOsay.js";class l{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}function g(o,t){if(!o){t=t||"Assertion";const u=new Error(t).stack;throw new l(`${t} at ${u}`)}}function h(o,t,u,f){let i,e=(u[0]-o[0])/t[0],s=(f[0]-o[0])/t[0];e>s&&(i=e,e=s,s=i);let n=(u[1]-o[1])/t[1],r=(f[1]-o[1])/t[1];if(n>r&&(i=n,n=r,r=i),e>r||n>s)return!1;n>e&&(e=n),r<s&&(s=r);let a=(u[2]-o[2])/t[2],c=(f[2]-o[2])/t[2];return a>c&&(i=a,a=c,c=i),!(e>c||a>s)&&(c<s&&(s=c),!(s<0))}export{h as i,g as s};