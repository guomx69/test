import{c0 as d,e as t,y as e,a as l,bg as u,N as m,k as w,bP as g}from"./index-BWzlmsaF.js";import{s as f,o as n}from"./WebMap-CxtaTK_D.js";import"./ColorBackground-DAw2yfR3.js";import"./Cyclical-CLn7hsuB.js";import"./Basemap-k8u9Dws0.js";import"./writeUtils-C3diJNrM.js";import"./catalogUtils-BJz3irce.js";import"./basemapUtils-CGXsPDdl.js";import"./TablesMixin-BKp09Z6d.js";import"./jsonContext-3NKi26Pb.js";import"./project-eBAhF45W.js";const a=new d({startingPoint:"starting-point",barrier:"barrier"});let i=class extends u{constructor(o){super(o),this.globalId=null,this.isFilterBarrier=!1,this.percentAlong=null,this.terminalId=null,this.type=null}};t([e({type:String,json:{write:!0}})],i.prototype,"globalId",void 0),t([e({type:Boolean,json:{write:!0}})],i.prototype,"isFilterBarrier",void 0),t([e({type:Number,json:{write:!0}})],i.prototype,"percentAlong",void 0),t([e({type:Number,json:{write:!0}})],i.prototype,"terminalId",void 0),t([e({type:a.apiValues,json:{type:a.jsonValues,read:{reader:a.read,source:"traceLocationType"},write:{writer:a.write,target:"traceLocationType"}}})],i.prototype,"type",void 0),i=t([l("esri.rest.networks.support.TraceLocation")],i);const b=i;var s;let r=s=class extends u{static from(o){return g(s,o)}constructor(o){super(o),this.namedTraceConfigurationGlobalId=null,this.gdbVersion=null,this.traceLocations=[],this.moment=null,this.outSpatialReference=null,this.traceConfiguration=null,this.resultTypes=null,this.traceType=null}writeOutSR(o,p,y){if(o!=null){const{wkid:c}=o;p[y]=JSON.stringify({wkid:c})}}};t([e({type:String,json:{read:{source:"traceConfigurationGlobalId"},write:{target:"traceConfigurationGlobalId"}}})],r.prototype,"namedTraceConfigurationGlobalId",void 0),t([e({type:String,json:{write:!0}})],r.prototype,"gdbVersion",void 0),t([e({type:[b],json:{write:!0}})],r.prototype,"traceLocations",void 0),t([e({type:Date,json:{type:Number,write:{writer:(o,p)=>{p.moment=o?o.getTime():null}}}})],r.prototype,"moment",void 0),t([e({type:m,json:{write:{allowNull:!0,target:"outSR"}}})],r.prototype,"outSpatialReference",void 0),t([w("outSpatialReference")],r.prototype,"writeOutSR",null),t([e({type:f,json:{write:!0}})],r.prototype,"traceConfiguration",void 0),t([e({type:[Object],json:{write:!0}})],r.prototype,"resultTypes",void 0),t([e({type:n.apiValues,json:{type:n.jsonValues,read:n.read,write:n.write}})],r.prototype,"traceType",void 0),r=s=t([l("esri.rest.networks.support.TraceParameters")],r);const L=r;export{L as default};