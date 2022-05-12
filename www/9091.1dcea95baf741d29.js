"use strict";var G=Object.defineProperty,B=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,L=(R,O,m)=>O in R?G(R,O,{enumerable:!0,configurable:!0,writable:!0,value:m}):R[O]=m,W=(R,O)=>{for(var m in O||(O={}))K.call(O,m)&&L(R,m,O[m]);if(B)for(var m of B(O))Y.call(O,m)&&L(R,m,O[m]);return R};(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9091,5994],{15994:(R,O,m)=>{m.d(O,{N:()=>A});const A={convertToGEGeometry:function P(f,I){return null==I?null:f.convertJSONToGeometry(I)},exportPoint:function c(f,I,S){const M=new g(f.getPointX(I),f.getPointY(I),S),n=f.hasZ(I),d=f.hasM(I);return n&&(M.z=f.getPointZ(I)),d&&(M.m=f.getPointM(I)),M},exportPolygon:function E(f,I,S){return new T(f.exportPaths(I),S,f.hasZ(I),f.hasM(I))},exportPolyline:function e(f,I,S){return new _(f.exportPaths(I),S,f.hasZ(I),f.hasM(I))},exportMultipoint:function o(f,I,S){return new h(f.exportPoints(I),S,f.hasZ(I),f.hasM(I))},exportExtent:function b(f,I,S){const M=f.hasZ(I),n=f.hasM(I),d=new x(f.getXMin(I),f.getYMin(I),f.getXMax(I),f.getYMax(I),S);if(M){const l=f.getZExtent(I);d.zmin=l.vmin,d.zmax=l.vmax}if(n){const l=f.getMExtent(I);d.mmin=l.vmin,d.mmax=l.vmax}return d}};class g{constructor(I,S,M){this.x=I,this.y=S,this.spatialReference=M,this.z=void 0,this.m=void 0}}class T{constructor(I,S,M,n){this.rings=I,this.spatialReference=S,this.hasZ=void 0,this.hasM=void 0,M&&(this.hasZ=M),n&&(this.hasM=n)}}class _{constructor(I,S,M,n){this.paths=I,this.spatialReference=S,this.hasZ=void 0,this.hasM=void 0,M&&(this.hasZ=M),n&&(this.hasM=n)}}class h{constructor(I,S,M,n){this.points=I,this.spatialReference=S,this.hasZ=void 0,this.hasM=void 0,M&&(this.hasZ=M),n&&(this.hasM=n)}}class x{constructor(I,S,M,n,d){this.xmin=I,this.ymin=S,this.xmax=M,this.ymax=n,this.spatialReference=d,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},77044:(R,O,m)=>{m.d(O,{Y:()=>g});var A=m(62208);function P(o,x){return o?x?4:3:x?3:2}function g(o,x,b,f,I){if((0,A.Wi)(x)||!x.lengths.length)return null;const S="upperLeft"===(null==I?void 0:I.originPosition)?-1:1;o.lengths.length&&(o.lengths.length=0),o.coords.length&&(o.coords.length=0);const M=o.coords,n=[],d=b?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:l,coords:r}=x,p=P(b,f);let D=0;for(const t of l){const i=c(d,r,D,t,b,f,S);i&&n.push(i),D+=t*p}if(n.sort((t,i)=>{let a=S*t[2]-S*i[2];return 0===a&&b&&(a=t[4]-i[4]),a}),n.length){let t=6*n[0][2];M[0]=n[0][0]/t,M[1]=n[0][1]/t,b&&(t=6*n[0][4],M[2]=0!==t?n[0][3]/t:0),(M[0]<d[0]||M[0]>d[1]||M[1]<d[2]||M[1]>d[3]||b&&(M[2]<d[4]||M[2]>d[5]))&&(M.length=0)}if(!M.length){const t=x.lengths[0]?function T(o,x,b,f,I){const S=P(f,I);let M=x,n=x+S,d=0,l=0,r=0,p=0;for(let D=0,t=b-1;D<t;D++,M+=S,n+=S){const i=o[M],a=o[M+1],s=o[M+2],u=o[n],y=o[n+1],v=o[n+2],C=f?_(i,a,s,u,y,v):E(i,a,u,y);if(C)if(d+=C,f){const z=h(i,a,s,u,y,v);l+=C*z[0],r+=C*z[1],p+=C*z[2]}else{const z=e(i,a,u,y);l+=C*z[0],r+=C*z[1]}}return d>0?f?[l/d,r/d,p/d]:[l/d,r/d]:b>0?f?[o[x],o[x+1],o[x+2]]:[o[x],o[x+1]]:null}(r,0,l[0],b,f):null;if(!t)return null;M[0]=t[0],M[1]=t[1],b&&t.length>2&&(M[2]=t[2])}return o}function c(o,x,b,f,I,S,M=1){const n=P(I,S);let d=b,l=b+n,r=0,p=0,D=0,t=0,i=0;for(let s=0,u=f-1;s<u;s++,d+=n,l+=n){const y=x[d],v=x[d+1],C=x[d+2],z=x[l],N=x[l+1],j=x[l+2];let U=y*N-z*v;t+=U,r+=(y+z)*U,p+=(v+N)*U,I&&(U=y*j-z*C,D+=(C+j)*U,i+=U),y<o[0]&&(o[0]=y),y>o[1]&&(o[1]=y),v<o[2]&&(o[2]=v),v>o[3]&&(o[3]=v),I&&(C<o[4]&&(o[4]=C),C>o[5]&&(o[5]=C))}if(t*M>0&&(t*=-1),i*M>0&&(i*=-1),!t)return null;const a=[r,p,.5*t];return I&&(a[3]=D,a[4]=.5*i),a}function E(o,x,b,f){const I=b-o,S=f-x;return Math.sqrt(I*I+S*S)}function _(o,x,b,f,I,S){const M=f-o,n=I-x,d=S-b;return Math.sqrt(M*M+n*n+d*d)}function e(o,x,b,f){return[o+.5*(b-o),x+.5*(f-x)]}function h(o,x,b,f,I,S){return[o+.5*(f-o),x+.5*(I-x),b+.5*(S-b)]}},82959:(R,O,m)=>{m.d(O,{_W:()=>x,iV:()=>S,oj:()=>d});var A=m(15861),P=m(62208),g=m(54614),c=m(15994),T=m(37053),E=m(46367);const _=[0,0];function e(l,r){if(!r)return null;if("x"in r){const p={x:0,y:0};return[p.x,p.y]=l(r.x,r.y,_),null!=r.z&&(p.z=r.z),null!=r.m&&(p.m=r.m),p}if("xmin"in r){const p={xmin:0,ymin:0,xmax:0,ymax:0};return[p.xmin,p.ymin]=l(r.xmin,r.ymin,_),[p.xmax,p.ymax]=l(r.xmax,r.ymax,_),r.hasZ&&(p.zmin=r.zmin,p.zmax=r.zmax,p.hasZ=!0),r.hasM&&(p.mmin=r.mmin,p.mmax=r.mmax,p.hasM=!0),p}return"rings"in r?{rings:h(r.rings,l),hasM:r.hasM,hasZ:r.hasZ}:"paths"in r?{paths:h(r.paths,l),hasM:r.hasM,hasZ:r.hasZ}:"points"in r?{points:o(r.points,l),hasM:r.hasM,hasZ:r.hasZ}:void 0}function h(l,r){const p=[];for(const D of l)p.push(o(D,r));return p}function o(l,r){const p=[];for(const D of l){const t=r(D[0],D[1],[0,0]);p.push(t),D.length>2&&t.push(D[2]),D.length>3&&t.push(D[3])}return p}function x(l,r){return b.apply(this,arguments)}function b(){return(b=(0,A.Z)(function*(l,r){if(!r)return;const p=Array.isArray(l)?l.map(D=>(0,P.pC)(D.geometry)&&D.geometry.spatialReference):[l];yield(0,g.iQ)(p.map(D=>({source:D,dest:r})))})).apply(this,arguments)}const f=e.bind(null,E.hG),I=e.bind(null,E.R6);function S(l,r,p){if(!l||(p||(p=r,r=l.spatialReference),!(0,T.JY)(r)||!(0,T.JY)(p)||(0,T.fS)(r,p)))return l;if((0,E.Q8)(r,p)){const D=(0,T.sS)(p)?f(l):I(l);return D.spatialReference=p,D}return(0,g.oj)(c.N,[l],r,p,null)[0]}const n=new class M{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}push(r,p,D){var t=this;return(0,A.Z)(function*(){if(!r||!r.length||!p||!D||(0,T.fS)(p,D))return r;const i={geometries:r,inSpatialReference:p,outSpatialReference:D,resolve:null};return t._jobs.push(i),new Promise(a=>{i.resolve=a,null===t._timer&&(t._timer=setTimeout(t._process,10))})})()}_process(){this._timer=null;const r=this._jobs.shift();if(!r)return;const{geometries:p,inSpatialReference:D,outSpatialReference:t,resolve:i}=r;(0,E.Q8)(D,t)?(0,T.sS)(t)?i(p.map(f)):i(p.map(I)):i((0,g.oj)(c.N,p,D,t,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function d(l,r,p){return n.push(l,r,p)}},99666:(R,O,m)=>{m.d(O,{_I:()=>A,xp:()=>E,PX:()=>T,QS:()=>x,KS:()=>h,jL:()=>e,vs:()=>_,nE:()=>o});const A=8388607,P=8388608,T=0,E=1,_=b=>(b&P)>>>23,e=b=>b&A,h=b=>_(b)===E?254:255;function o(b){return _(b)===E}function x(b,f){return((f?P:0)|b)>>>0}},31982:(R,O,m)=>{m.d(O,{J:()=>P,g:()=>A});const A=(g,c)=>g&&((...T)=>c.warn("DEBUG:",...T))||(()=>null),P=!1},36682:(R,O,m)=>{m.d(O,{Z:()=>p});var A=m(15861),P=m(26584),g=m(8314),c=m(63290),T=m(21286),E=m(62208),_=m(10699),e=m(84682),h=m(60466),o=m(39351),x=m(99666),b=m(64288),f=m(31982),I=m(6257),S=m(67969);const M=c.Z.getLogger("esri.views.layers.2d.features.support.AttributeStore"),n=(0,f.g)(f.J,M),d={sharedArrayBuffer:(0,g.Z)("esri-shared-array-buffer"),atomics:(0,g.Z)("esri-atomics")};function l(D,t){return i=>t(D(i))}class r{constructor(t,i,a,s){this.size=0,this.texelSize=4;const{pixelType:u,layout:y,textureOnly:v}=s;this.textureOnly=v||!1,this.pixelType=u,this._ctype=i,this.layout=y,this._resetRange(),this._shared=t,this.size=a,v||(this.data=this._initData(u,a,t,i))}get buffer(){return(0,E.yw)(this.data,t=>t.buffer)}unsetComponentAllTexels(t,i){const a=(0,E.Wg)(this.data);for(let s=0;s<this.size*this.size;s++)a[s*this.texelSize+t]&=~i;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponentAllTexels(t,i){const a=(0,E.Wg)(this.data);for(let s=0;s<this.size*this.size;s++)a[s*this.texelSize+t]|=255&i;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponent(t,i,a){const s=(0,E.Wg)(this.data);for(const u of a)s[u*this.texelSize+t]|=i,this.dirtyStart=Math.min(this.dirtyStart,u),this.dirtyEnd=Math.max(this.dirtyEnd,u)}setComponentTexel(t,i,a){(0,E.Wg)(this.data)[a*this.texelSize+t]|=i,this.dirtyStart=Math.min(this.dirtyStart,a),this.dirtyEnd=Math.max(this.dirtyEnd,a)}unsetComponentTexel(t,i,a){(0,E.Wg)(this.data)[a*this.texelSize+t]&=~i,this.dirtyStart=Math.min(this.dirtyStart,a),this.dirtyEnd=Math.max(this.dirtyEnd,a)}getData(t,i){const a=(0,x.jL)(t);return(0,E.Wg)(this.data)[a*this.texelSize+i]}setData(t,i,a){const s=(0,x.jL)(t);0!=(this.layout&1<<i)?(this.data[s*this.texelSize+i]=a,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)):M.error("mapview-attributes-store","Tried to set a value for a texel's readonly component")}lock(){this.pixelType===S.Br.UNSIGNED_BYTE&&this._shared&&d.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,1)}unlock(){this.pixelType===S.Br.UNSIGNED_BYTE&&this._shared&&d.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,0)}expand(t){if(this.size=t,!this.textureOnly){const i=this._initData(this.pixelType,t,this._shared,this._ctype),a=(0,E.Wg)(this.data);i.set(a),this.data=i}}toMessage(){const t=this.dirtyStart,i=this.dirtyEnd,a=this.texelSize;if(t>i)return null;this._resetRange();const s=!(this._shared||"local"===this._ctype),u=this.pixelType,y=this.layout,v=(0,E.Wg)(this.data);return{start:t,end:i,data:s&&v.slice(t*a,(i+1)*a)||null,pixelType:u,layout:y}}_initData(t,i,a,s){const u=a&&"local"!==s?SharedArrayBuffer:ArrayBuffer,y=(0,b.UK)(t),v=new y(new u(i*i*4*y.BYTES_PER_ELEMENT));for(let C=0;C<v.length;C+=4)v[C+1]=255;return v}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}}class p{constructor(t,i){this._client=t,this.config=i,this._attributeComputeMap=new Map,this._blocks=new Array,this._filters=new Array(o.m4),this._targetType=0,this._abortController=new AbortController,this._hasScaleExpr=!1,this._size=32,this._idsToHighlight=new Set;const a=i.supportsTextureFloat?S.Br.FLOAT:S.Br.UNSIGNED_BYTE;n(`Creating AttributeStore ${d.sharedArrayBuffer?"with":"without"} shared memory`),this._blockDescriptors=[{pixelType:S.Br.UNSIGNED_BYTE,layout:1},{pixelType:S.Br.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:S.Br.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:a,layout:15},{pixelType:a,layout:15}],this._blocks=this._blockDescriptors.map(()=>null)}destroy(){this._abortController.abort()}get hasScaleExpr(){return this._hasScaleExpr}get _signal(){return this._abortController.signal}get hasHighlight(){return this._idsToHighlight.size>0}update(t,i){this.config=i;const a=i.schema.processors[0].storage,s=(0,e.Hg)(this._schema,a);if((t.targets.feature||t.targets.aggregate)&&(t.storage.data=!0),s&&((0,g.Z)("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",s),t.storage.data=!0,this._schema=a,this._attributeComputeMap.clear(),!(0,E.Wi)(a))){switch(a.target){case"feature":this._targetType=x.PX;break;case"aggregate":this._targetType=x.xp}if("subtype"===a.type)for(const u in a.mapping){const y=a.mapping[u];if((0,E.pC)(y))for(const v of y.mapping)this._bindAttribute(v)}else for(const u of a.mapping)this._bindAttribute(u)}}onTileData(t,i){if((0,E.Wi)(i.addOrUpdate))return;const a=i.addOrUpdate.getCursor();for(;a.next();){const s=a.getDisplayId();this.setAttributeData(s,a)}}invalidateResources(){this._createResourcesPromise=null,this._abortController.abort(),this._abortController=new AbortController}setHighlight(t,i){var a=this;return(0,A.Z)(function*(){const u=a._getBlock(0),y=i.map(v=>(0,x.jL)(v));u.lock(),u.unsetComponentAllTexels(0,1),u.setComponent(0,1,y),u.unlock(),a._idsToHighlight.clear();for(const v of t)a._idsToHighlight.add(v);yield a.sendUpdates()})()}updateFilters(t,i){var a=this;return(0,A.Z)(function*(){const{config:s,service:u,spatialReference:y}=i,{filters:v}=s,C=v.map((z,N)=>a._updateFilter(z,N,u,y));(yield Promise.all(C)).some(z=>z)&&(t.storage.filters=!0,(0,g.Z)("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed"))})()}setData(t,i,a,s){const u=(0,x.jL)(t);this._ensureSizeForTexel(u),this._getBlock(i).setData(t,a,s)}getData(t,i,a){return this._getBlock(i).getData(t,a)}getHighlightFlag(t){return this._idsToHighlight.has(t)?o.uG:0}unsetAttributeData(t){const i=(0,x.jL)(t);this._getBlock(0).setData(i,0,0)}setAttributeData(t,i){const a=(0,x.jL)(t);if(this._ensureSizeForTexel(a),this._getBlock(0).setData(a,0,this.getFilterFlags(i)),this._targetType!==(0,x.vs)(t))return;const s=this._attributeComputeMap,u=this.config.supportsTextureFloat?1:2;s.size&&s.forEach((v,C)=>{const z=C*u%4,N=Math.floor(C*u/4),j=this._getBlock(N+o.aK),U=v(i);if(this.config.supportsTextureFloat)j.setData(a,z,U);else if(U===o.AI)j.setData(a,z,255),j.setData(a,z+1,255);else{const F=(0,T.uZ)(Math.round(U),-32767,32766)+32768,Z=(65280&F)>>8;j.setData(a,z,255&F),j.setData(a,z+1,Z)}})}sendUpdates(){if(this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=(0,_.hh)(),this._nextUpdate.promise;const t={blocks:this._blocks.map(i=>(0,E.pC)(i)?i.toMessage():null)};return this._currUpdate=this._createResources().then(()=>{const i=()=>{if(this._currUpdate=null,this._nextUpdate){const s=this._nextUpdate;this._nextUpdate=null,this.sendUpdates().then(()=>s.resolve())}},a=this._client.update(t,this._signal).then(i).catch(i);return this._client.render(this._signal),a}).catch(i=>(0,_.D_)(i)?(this._createResourcesPromise=null,this._createResources()):(M.error(new P.Z("mapview-attribute-store","Encountered an error during client update",i)),Promise.resolve())),this._currUpdate}_ensureSizeForTexel(t){for(;t>=this._size*this._size;)if(this._expand())return}_bindAttribute(t){let s;if(null!=t.fieldIndex)s=function a(){return t.normalizationField&&M.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),y=>y.getComputedNumericAtIndex(t.fieldIndex)}();else{if(!t.field)return;s=function i(){return t.normalizationField?y=>{const v=y.readAttribute(t.normalizationField);return v?y.readAttribute(t.field)/v:null}:y=>y.readAttribute(t.field)}()}t.valueRepresentation&&(s=l(s,y=>(0,I.qc)(y,t.valueRepresentation))),this._attributeComputeMap.set(t.binding,l(s,y=>null===y||isNaN(y)||y===1/0?o.AI:y))}_createResources(){if((0,E.pC)(this._createResourcesPromise))return this._createResourcesPromise;this._getBlock(o.xl),this._getBlock(o.pU),n("Initializing AttributeStore");const t={shared:d.sharedArrayBuffer&&"local"!==this._client.type,size:this._size,blocks:(0,E.Fd)(this._blocks,a=>({textureOnly:a.textureOnly,buffer:a.buffer,pixelType:a.pixelType}))},i=this._client.initialize(t,this._signal).catch(a=>{(0,_.D_)(a)?this._createResourcesPromise=null:M.error(new P.Z("mapview-attribute-store","Encountered an error during client initialization",a))});return this._createResourcesPromise=i,i.then(()=>(0,E.Wi)(this._createResourcesPromise)?this._createResources():void 0),i}_getBlock(t){const i=this._blocks[t];if((0,E.pC)(i))return i;n(`Initializing AttributeBlock at index ${t}`);const u=new r(d.sharedArrayBuffer,this._client.type,this._size,this._blockDescriptors[t]);return this._blocks[t]=u,this._createResourcesPromise=null,u}_expand(){if(this._size<this.config.maxTextureSize){const t=this._size<<=1;return n("Expanding block size to",t,this._blocks),(0,E.JR)(this._blocks,i=>i.expand(t)),this._createResourcesPromise=null,this._size=t,0}return M.error(new P.Z("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}_updateFilter(t,i,a,s){var u=this;return(0,A.Z)(function*(){const y=u._filters[i],v=(0,E.pC)(y)&&y.hash;if(!y&&!t||v===JSON.stringify(t))return!1;if((0,E.Wi)(t)){if(!y)return!1;const z=1<<i+1,N=u._getBlock(0);return u._filters[i]=null,N.setComponentAllTexels(0,z),u.sendUpdates(),!0}return yield(yield u._getFilter(i,a)).update(t,s),!0})()}_getFilter(t,i){var a=this;return(0,A.Z)(function*(){const s=a._filters[t];if((0,E.pC)(s))return s;const{default:u}=yield Promise.all([m.e(8592),m.e(8967)]).then(m.bind(m,8967)),y=new u({geometryType:i.geometryType,hasM:!1,hasZ:!1,timeInfo:i.timeInfo,fieldsIndex:new h.Z(i.fields)});return a._filters[t]=y,y})()}isVisible(t){return!!(2&this._getBlock(0).getData(t,0))}getFilterFlags(t){let i=0;const a=(0,x.KS)(t.getDisplayId());for(let u=0;u<this._filters.length;u++){const v=this._filters[u];i|=(a&1<<u&&!(0,E.Wi)(v)&&!v.check(t)?0:1)<<u}let s=0;if(this._idsToHighlight.size){const u=t.getObjectId();s=this.getHighlightFlag(u)}return i<<1|s}}},93872:(R,O,m)=>{m.d(O,{O:()=>T});var A=m(99666);class P{constructor(){this._freeIds=[],this._idCounter=1}createId(_=!1){return(0,A.QS)(this._getFreeId(),_)}releaseId(_){this._freeIds.push(_)}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}}var g=m(42797);function c(E,_,e){if(!(E.length>_))for(;E.length<=_;)E.push(e)}class T{constructor(){this._numerics=[],this._strings=[],this._idGenerator=new P,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}createBitset(){const _=this._bitsets.length;return this._bitsets.push(g.p.create(this._allocatedSize,A._I)),_+1}getBitset(_){return this._bitsets[_-1]}_expand(){this._allocatedSize<<=1;for(const _ of this._bitsets)_.resize(this._allocatedSize)}_ensureNumeric(_,e){this._numerics[_]||(this._numerics[_]=[]),c(this._numerics[_],e,0)}_ensureInstanceId(_){c(this._instanceIds,_,0)}_ensureString(_,e){this._strings[_]||(this._strings[_]=[]),c(this._strings[_],e,null)}createDisplayId(_=!1){const e=this._idGenerator.createId();return e>this._allocatedSize&&this._expand(),(0,A.QS)(e,_)}releaseDisplayId(_){for(const e of this._bitsets)e.unset(_);return this._idGenerator.releaseId(_&A._I)}getComputedNumeric(_,e){return this.getComputedNumericAtIndex(_&A._I,0)}setComputedNumeric(_,e,h){return this.setComputedNumericAtIndex(_&A._I,h,0)}getComputedString(_,e){return this.getComputedStringAtIndex(_&A._I,0)}setComputedString(_,e,h){return this.setComputedStringAtIndex(_&A._I,0,h)}getComputedNumericAtIndex(_,e){const h=_&A._I;return this._ensureNumeric(e,h),this._numerics[e][h]}setComputedNumericAtIndex(_,e,h){const o=_&A._I;this._ensureNumeric(e,o),this._numerics[e][o]=h}getInstanceId(_){const e=_&A._I;return this._ensureInstanceId(e),this._instanceIds[e]}setInstanceId(_,e){const h=_&A._I;this._ensureInstanceId(h),this._instanceIds[h]=e}getComputedStringAtIndex(_,e){const h=_&A._I;return this._ensureString(e,h),this._strings[e][h]}setComputedStringAtIndex(_,e,h){const o=_&A._I;this._ensureString(e,o),this._strings[e][o]=h}getXMin(_){return this._bounds[4*(_&A._I)]}getYMin(_){return this._bounds[4*(_&A._I)+1]}getXMax(_){return this._bounds[4*(_&A._I)+2]}getYMax(_){return this._bounds[4*(_&A._I)+3]}setBounds(_,e){const h=e.readHydratedGeometry();if(!h||!h.coords.length)return!1;let o=1/0,x=1/0,b=-1/0,f=-1/0;h.forEachVertex((S,M)=>{o=Math.min(o,S),x=Math.min(x,M),b=Math.max(b,S),f=Math.max(f,M)});const I=_&A._I;return c(this._bounds,4*I+4,0),this._bounds[4*I]=o,this._bounds[4*I+1]=x,this._bounds[4*I+2]=b,this._bounds[4*I+3]=f,!0}}},25208:(R,O,m)=>{m.d(O,{s:()=>i}),m(29132);var h,o,x,P=m(8314),g=m(62208),c=m(77044),T=m(82054),E=m(88071),_=m(42797),e=m(91179);let b=0;const f=null!=(h=(0,P.Z)("featurelayer-simplify-thresholds"))?h:[.5,.5,.5,.5],I=f[0],S=f[1],M=f[2],n=f[3],d=null!=(o=(0,P.Z)("featurelayer-simplify-payload-size-factors"))?o:[1,2,4],l=d[0],r=d[1],p=d[2],D=null!=(x=(0,P.Z)("featurelayer-simplify-mobile-factor"))?x:2,t=(0,P.Z)("esri-mobile");class i{constructor(s,u){this.type="FeatureSetReader",this.arcadeDeclaredClass="esri.arcade.Feature",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._sx=1,this._sy=1,this._deleted=null,this._joined=[],this._objectIdToIndex=null,this._level=0,this.instance=s,this._layerSchema=u}static createInstance(){return b++,b=b>65535?0:b,b}get isEmpty(){return(0,g.pC)(this._deleted)&&this._deleted.countSet()===this.getSize()}set level(s){this._level=s}getAreaSimplificationThreshold(s,u){let y=1;const v=t?D:1;u>4e6?y=p*v:u>1e6?y=r*v:u>5e5?y=l*v:u>1e5&&(y=v);let C=0;s>4e3?C=n*y:s>2e3?C=M*y:s>100?C=S:s>15&&(C=I);let z=8;return this._level<4?z=1:this._level<5?z=2:this._level<6&&(z=4),C*z}setArcadeSpatialReference(s){this._arcadeSpatialReference=s}attachStorage(s){this._storage=s}getQuantizationTransform(){throw new Error("Unable to find transform for featureSet")}getStorage(){return this._storage}getComputedNumeric(s){return this.getComputedNumericAtIndex(0)}setComputedNumeric(s,u){return this.setComputedNumericAtIndex(u,0)}getComputedString(s){return this.getComputedStringAtIndex(0)}setComputedString(s,u){return this.setComputedStringAtIndex(0,u)}getComputedNumericAtIndex(s){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),s)}setComputedNumericAtIndex(s,u){this._storage.setComputedNumericAtIndex(this.getDisplayId(),s,u)}getComputedStringAtIndex(s){return this._storage.getComputedStringAtIndex(this.getDisplayId(),s)}setComputedStringAtIndex(s,u){return this._storage.setComputedStringAtIndex(this.getDisplayId(),s,u)}transform(s,u,y,v){const C=this.copy();return C._tx+=s,C._ty+=u,C._sx*=y,C._sy*=v,C}readAttribute(s,u=!1){const y=this._readAttribute(s,u);if(void 0!==y)return y;for(const v of this._joined){v.setIndex(this.getIndex());const C=v._readAttribute(s,u);if(void 0!==C)return C}}readAttributes(){const s=this._readAttributes();for(const u of this._joined){u.setIndex(this.getIndex());const y=u._readAttributes();for(const v of Object.keys(y))s[v]=y[v]}return s}joinAttributes(s){this._joined.push(s)}readArcadeFeature(){return this}geometry(){const s=this.readHydratedGeometry(),u=(0,T.di)(s,this.geometryType,this.hasZ,this.hasM),y=(0,e.im)(u);return y&&(y.spatialReference=this._arcadeSpatialReference),y}field(s){if(this.hasField(s))return this.readAttribute(s,!0);for(const u of this._joined)if(u.setIndex(this.getIndex()),u.hasField(s))return u._readAttribute(s,!0);throw new Error(`Field ${s} does not exist`)}setField(s,u){throw new Error("Unable to update feature attribute values, feature is readonly")}keys(){return this.getFieldNames()}castToText(){return JSON.stringify(this.readLegacyFeature())}gdbVersion(){return null}fullSchema(){return this._layerSchema}castAsJson(s=null){return{attributes:this._readAttributes(),geometry:!0===(null==s?void 0:s.keepGeometryType)?this.geometry():this.geometry().toJSON()}}castAsJsonAsync(s=null,u=null){return Promise.resolve(this.castAsJson(u))}removeIds(s){if((0,g.Wi)(this._objectIdToIndex)){const y=new Map,v=this.getCursor();for(;v.next();)y.set(v.getObjectId(),v.getIndex());this._objectIdToIndex=y}const u=this._objectIdToIndex;for(const y of s)u.has(y)&&this.removeAtIndex(u.get(y))}removeAtIndex(s){(0,g.Wi)(this._deleted)&&(this._deleted=_.p.create(this.getSize())),this._deleted.set(s)}readGeometryForDisplay(){return this.readUnquantizedGeometry(!0)}readLegacyGeometryForDisplay(){return this.readLegacyGeometry(!0)}*features(){const s=this.getCursor();for(;s.next();)yield s.readOptimizedFeature()}_getExists(){return(0,g.Wi)(this._deleted)||!this._deleted.has(this.getIndex())}_computeCentroid(){if("esriGeometryPolygon"!==this.geometryType)return null;const s=this.readUnquantizedGeometry();if(!s||s.hasIndeterminateRingOrder)return null;const u=(0,g.Pt)(this.getQuantizationTransform(),null);return(0,c.Y)(new E.Z,s,this.hasM,this.hasZ,u)}copyInto(s){s.seen=this.seen,s._storage=this._storage,s._arcadeSpatialReference=this._arcadeSpatialReference,s._joined=this._joined,s._tx=this._tx,s._ty=this._ty,s._sx=this._sx,s._sy=this._sy,s._deleted=this._deleted,s._objectIdToIndex=this._objectIdToIndex}}},64822:(R,O,m)=>{m.d(O,{i:()=>E});var A=m(62208),P=m(82054),g=m(66385),c=m(25208);class E extends c.s{constructor(e,h,o){super(e,o),this._featureIndex=-1,this._dateFields=new Set,this._geometryType=null==o?void 0:o.geometryType,this._features=h}static fromFeatures(e,h){const{objectIdField:o,geometryType:x}=h,b=(0,P.Yn)([],e,x,!1,!1,o);for(let f=0;f<b.length;f++)b[f].displayId=e[f].displayId;return E.fromOptimizedFeatures(b,h)}static fromFeatureSet(e,h){const o=(0,P.h_)(e,h.objectIdField);return E.fromOptimizedFeatureSet(o,h)}static fromOptimizedFeatureSet(e,h){const{features:o}=e,x=E.fromOptimizedFeatures(o,h);x._exceededTransferLimit=e.exceededTransferLimit,x._transform=e.transform;for(const b of e.fields)"esriFieldTypeDate"===b.type&&x._dateFields.add(b.name);return x}static fromOptimizedFeatures(e,h,o){const x=c.s.createInstance(),b=new E(x,e,h);return b._transform=o,b}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return!!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return!1}get hasM(){return!1}removeIds(e){const h=new Set(e);this._features=this._features.filter(o=>!h.has(o.objectId))}append(e){for(const h of e)this._features.push(h)}getSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let e="";for(const h in this._current.attributes)e+=this._current.attributes[h];return e}getIndex(){return this._featureIndex}setIndex(e){this._featureIndex=e}getObjectId(){return this._current.objectId}getDisplayId(){return this._current.displayId}setDisplayId(e){this._current.displayId=e}getGroupId(){return this._current.groupId}setGroupId(e){this._current.groupId=e}copy(){const e=new E(this.instance,this._features,this.fullSchema());return this.copyInto(e),e}next(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}readLegacyFeature(){return(0,P.EI)(this._current,this.geometryType,this.hasZ,this.hasM)}readOptimizedFeature(){return this._current}readLegacyPointGeometry(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null}readLegacyGeometry(){const e=this.readGeometry();return(0,P.di)(e,this.geometryType,this.hasZ,this.hasM)}readLegacyCentroid(){const e=this.readCentroid();return(0,A.Wi)(e)?null:{x:e.coords[0]*this._sx+this._tx,y:e.coords[1]*this._sy+this._ty}}readGeometryArea(){return(0,g.S6)(this._current)?(0,P.lz)(this._current.geometry,2):0}readUnquantizedGeometry(){const e=this.readGeometry();if("esriGeometryPoint"===this.geometryType||!e)return e;const h=e.clone();return function T({coords:_,lengths:e}){let h=0;for(const o of e){for(let x=1;x<o;x++)_[2*(h+x)]+=_[2*(h+x)-2],_[2*(h+x)+1]+=_[2*(h+x)-1];h+=o}}(h),h}readHydratedGeometry(){const e=this._current.geometry;if((0,A.Wi)(e))return null;const h=e.clone();return(0,A.pC)(this._transform)&&(0,P.$g)(h,h,this.hasZ,this.hasM,this._transform),h}getXHydrated(){if(!(0,g.S6)(this._current))return 0;const e=this._current.geometry.coords[0],h=this.getQuantizationTransform();return(0,A.Wi)(h)?e:e*h.scale[0]+h.translate[0]}getYHydrated(){if(!(0,g.S6)(this._current))return 0;const e=this._current.geometry.coords[1],h=this.getQuantizationTransform();return(0,A.Wi)(h)?e:h.translate[1]-e*h.scale[1]}getX(){return(0,g.S6)(this._current)?this._current.geometry.coords[0]*this._sx+this._tx:0}getY(){return(0,g.S6)(this._current)?this._current.geometry.coords[1]*this._sy+this._ty:0}readGeometry(){if(!(0,g.S6)(this._current))return null;const e=this._current.geometry.clone();if(e.isPoint)return e.coords[0]=e.coords[0]*this._sx+this._tx,e.coords[1]=e.coords[1]*this._sy+this._ty,e;let h=0;for(const o of e.lengths)e.coords[2*h]=e.coords[2*h]*this._sx+this._tx,e.coords[2*h+1]=e.coords[2*h+1]*this._sy+this._ty,h+=o;return e}readCentroid(){if(!(0,g.S6)(this._current))return null;if((0,A.Wi)(this._current.centroid)){const h=this._computeCentroid();if((0,A.Wi)(h))return null;h.coords[0]=(h.coords[0]-this._tx)/this._sx,h.coords[1]=(h.coords[1]-this._ty)/this._sy,this._current.centroid=h}const e=this._current.centroid.clone();return e.coords[0]=e.coords[0]*this._sx+this._tx,e.coords[1]=e.coords[1]*this._sx+this._ty,e}hasField(e){return e in this._current.attributes||this.getFieldNames().map(h=>h.toLowerCase()).includes(e.toLowerCase())}getFieldNames(){return Object.keys(this._current.attributes)}_readAttribute(e,h){const o=this._current.attributes[e];if(void 0!==o)return null!=o&&h&&this._dateFields.has(e)?new Date(o):o;const x=this.readAttributes(),b=e.toLocaleLowerCase().trim();for(const f in x)if(f.toLocaleLowerCase().trim()===b){const I=this._current.attributes[f];return null!=I&&h&&this._dateFields.has(f)?new Date(I):I}}copyInto(e){super.copyInto(e),e._featureIndex=this._featureIndex,e._transform=this._transform,e._dateFields=this._dateFields}_readAttributes(){return this._current.attributes}}},42797:(R,O,m)=>{m.d(O,{p:()=>A});class A{constructor(g,c){this._mask=0,this._buf=g,this._mask=c}static fromBuffer(g,c){return new A(g,c)}static create(g,c=4294967295){const T=new Uint32Array(Math.ceil(g/32));return new A(T,c)}_getIndex(g){return Math.floor(g/32)}has(g){const c=this._mask&g;return!!(this._buf[this._getIndex(c)]&1<<c%32)}hasRange(g,c){let T=g,E=c;for(;T%32&&T!==E;){if(this.has(T))return!0;T++}for(;E%32&&T!==E;){if(this.has(T))return!0;E--}if(T===E)return!1;for(let _=T/32;_!==E/32;_++)if(this._buf[_])return!0;return!1}set(g){const c=this._mask&g,T=this._getIndex(c);this._buf[T]|=1<<c%32}setRange(g,c){let T=g,E=c;for(;T%32&&T!==E;)this.set(T++);for(;E%32&&T!==E;)this.set(E--);if(T!==E)for(let _=T/32;_!==E/32;_++)this._buf[_]=4294967295}unset(g){const c=this._mask&g,T=this._getIndex(c);this._buf[T]&=4294967295^1<<c%32}resize(g){const c=this._buf,T=new Uint32Array(Math.ceil(g/32));T.set(c),this._buf=T}or(g){for(let c=0;c<this._buf.length;c++)this._buf[c]|=g._buf[c];return this}and(g){for(let c=0;c<this._buf.length;c++)this._buf[c]&=g._buf[c];return this}xor(g){for(let c=0;c<this._buf.length;c++)this._buf[c]^=g._buf[c];return this}ior(g){for(let c=0;c<this._buf.length;c++)this._buf[c]|=~g._buf[c];return this}iand(g){for(let c=0;c<this._buf.length;c++)this._buf[c]&=~g._buf[c];return this}ixor(g){for(let c=0;c<this._buf.length;c++)this._buf[c]^=~g._buf[c];return this}any(){for(let g=0;g<this._buf.length;g++)if(this._buf[g])return!0;return!1}copy(g){for(let c=0;c<this._buf.length;c++)this._buf[c]=g._buf[c];return this}clone(){return new A(this._buf.slice(),this._mask)}clear(){for(let g=0;g<this._buf.length;g++)this._buf[g]=0}forEachSet(g){for(let c=0;c<this._buf.length;c++){let T=this._buf[c],E=32*c;if(T)for(;T;)1&T&&g(E),T>>>=1,E++}}countSet(){let g=0;return this.forEachSet(c=>{g++}),g}}},6257:(R,O,m)=>{m.d(O,{I:()=>f,qc:()=>_});var A=m(62208),P=m(23841),g=m(81295),c=m(39351),T=m(39406),E=m(25310);function _(n,d){if(!n||!d)return n;switch(d){case"radius":case"distance":return 2*n;case"diameter":case"width":return n;case"area":return Math.sqrt(n)}return n}function h(n){return n.map(d=>function e(n){return{value:n.value,size:(0,P.t_)(n.size)}}(d))}function o(n){return"string"==typeof n||"number"==typeof n?(0,P.t_)(n):{type:"size",expression:n.expression,stops:h(n.stops)}}const b=n=>{const d=[],l=[],r=h(n),p=r.length;for(let D=0;D<6;D++){const t=r[Math.min(D,p-1)];d.push(t.value),l.push(null==t.size?c.AI:(0,P.F2)(t.size))}return{values:new Float32Array(d),sizes:new Float32Array(l)}};function f(n){const d=n&&n.length>0?{}:null,l=d?{}:null;if(!d)return{vvFields:d,vvRanges:l};for(const r of n)if(r.field&&(d[r.type]=r.field),"size"===r.type){l.size||(l.size={});const p=r;switch((0,E.a)(p)){case T.X.SIZE_MINMAX_VALUE:l.size.minMaxValue={minDataValue:p.minDataValue,maxDataValue:p.maxDataValue,minSize:o(p.minSize),maxSize:o(p.maxSize)};break;case T.X.SIZE_SCALE_STOPS:l.size.scaleStops={stops:h(p.stops)};break;case T.X.SIZE_FIELD_STOPS:if(p.levels){const D={};for(const t in p.levels)D[t]=b(p.levels[t]);l.size.fieldStops={type:"level-dependent",levels:D}}else l.size.fieldStops=W({type:"static"},b(p.stops));break;case T.X.SIZE_UNIT_VALUE:l.size.unitValue={unit:p.valueUnit,valueRepresentation:p.valueRepresentation}}}else"color"===r.type?l.color=M(r):"opacity"===r.type?l.opacity=I(r):"rotation"===r.type&&(l.rotation={type:r.rotationType});return{vvFields:d,vvRanges:l}}function I(n){const d={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if("string"==typeof n.field){if(!n.stops)return null;{if(n.stops.length>8)return null;const l=n.stops;for(let r=0;r<8;++r){const p=l[Math.min(r,l.length-1)];d.values[r]=p.value,d.opacities[r]=p.opacity}}}else{if(!(n.stops&&n.stops.length>=0))return null;{const l=n.stops&&n.stops.length>=0&&n.stops[0].opacity;for(let r=0;r<8;r++)d.values[r]=1/0,d.opacities[r]=l}}return d}function S(n,d,l){n[4*d+0]=l.r/255,n[4*d+1]=l.g/255,n[4*d+2]=l.b/255,n[4*d+3]=l.a}function M(n){if((0,A.Wi)(n)||n.normalizationField)return null;const d={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if("string"==typeof n.field){if(!n.stops)return null;{if(n.stops.length>8)return null;d.field=n.field;const l=n.stops;for(let r=0;r<8;++r){const p=l[Math.min(r,l.length-1)];d.values[r]=p.value,S(d.colors,r,p.color)}}}else{if(!(n.stops&&n.stops.length>=0))return null;{const l=n.stops&&n.stops.length>=0&&n.stops[0].color;for(let r=0;r<8;r++)d.values[r]=1/0,S(d.colors,r,l)}}for(let l=0;l<32;l+=4)(0,g.pr)(d.colors,l,!0);return d}}}]);