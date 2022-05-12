"use strict";var M=Object.defineProperty,O=Object.defineProperties,W=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,U=(n,s,i)=>s in n?M(n,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[s]=i,Z=(n,s)=>{for(var i in s||(s={}))X.call(s,i)&&U(n,i,s[i]);if(S)for(var i of S(s))$.call(s,i)&&U(n,i,s[i]);return n},C=(n,s)=>O(n,W(s));(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5391],{55391:(n,s,i)=>{i.r(s),i.d(s,{default:()=>H});var f=i(15861),p=i(17626),F=i(63290),m=i(10699),L=i(32917),I=i(77712),V=(i(85931),i(8314),i(90912),i(76898)),P=i(37053),R=i(91082),x=i(37384),g=i(88893),D=i(9598),w=i(58098),z=i(8480),E=i(79527),j=i(45611),A=i(94421),Q=i(26584),G=i(62208),B=i(22264);const K=e=>{let t=class extends e{fetchPopupFeatures(l,v){var h=this;return(0,f.Z)(function*(){const{layer:u}=h;if(!l)return Promise.reject(new Q.Z("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:u}));if("tile"!==u.type)return Promise.reject(new Q.Z("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:u.type}));const c=h.get("view.scale"),y=u.allSublayers.toArray().filter(r=>r.popupTemplate&&r.popupEnabled&&r.visible&&(0===r.minScale||c<=r.minScale)&&(0===r.maxScale||c>=r.maxScale));return(0,m.as)(y.map(function(){var r=(0,f.Z)(function*(a){const o=a.createQuery(),T=(0,G.pC)(v)?v.event:null,J=(0,B.k)({renderer:a.renderer,event:T});return o.geometry=h.createFetchPopupFeaturesQueryGeometry(l,J),o.outFields=yield a.popupTemplate.getRequiredFields(),(yield a.queryFeatures(o)).features});return function(a){return r.apply(this,arguments)}}())).then(r=>[].concat(...r.map(a=>a.value).filter(Boolean)))})()}};return(0,p._)([(0,I.Cb)()],t.prototype,"layer",void 0),t=(0,p._)([(0,V.j)("esri.layers.mixins.TileLayerView")],t),t};var Y=i(94672);const N=[0,0];let d=class extends(K((0,A.y)((0,R.Y)((0,x.y)(j.Z))))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||!1!==this.layer.resampling}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new D.Z(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new z.Z({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(t,l)=>this.fetchTile(t,l)}),this._tileStrategy=new E.Z({cachePolicy:"keep",resampling:this.resampling,acquireTile:t=>this.acquireTile(t),releaseTile:t=>this.releaseTile(t),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.handles.add((0,L.YP)(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){var t;return(0,P.fS)(null==(t=this.layer.tileInfo)?void 0:t.spatialReference,e)}createFetchPopupFeaturesQueryGeometry(e,t){return(0,Y.K)(e,t,this.view)}doRefresh(){var e=this;return(0,f.Z)(function*(){e.updateRequested||e.suspended||(e._fetchQueue.reset(),e._tileStrategy.tiles.forEach(t=>e._enqueueTileFetch(t)))})()}isUpdating(){var e,t;return null!=(e=null==(t=this._fetchQueue)?void 0:t.updating)&&e}acquireTile(e){const t=this._bitmapView.createTile(e),l=t.bitmap;return[l.x,l.y]=this._tileInfoView.getTileCoords(N,t.key),l.resolution=this._tileInfoView.getTileResolution(t.key),[l.width,l.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}fetchTile(e,t={}){var l=this;return(0,f.Z)(function*(){const v="tilemapCache"in l.layer?l.layer.tilemapCache:null,{signal:h,resamplingLevel:u=0}=t;if(!v)try{return yield l._fetchImage(e,h)}catch(r){if(!(0,m.D_)(r)&&!l.resampling)return(0,g.V)(l._tileInfoView.tileInfo.size);if(u<3){const a=l._tileInfoView.getTileParentId(e.id);if(a){const o=new w.Z(a),T=yield l.fetchTile(o,C(Z({},t),{resamplingLevel:u+1}));return(0,g.i)(l._tileInfoView,T,o,e)}}throw r}const c=new w.Z(0,0,0,0);let y;try{if(yield v.fetchAvailabilityUpsample(e.level,e.row,e.col,c,{signal:h}),c.level!==e.level&&!l.resampling)return(0,g.V)(l._tileInfoView.tileInfo.size);y=yield l._fetchImage(c,h)}catch(r){if((0,m.D_)(r))throw r;y=yield l._fetchImage(e,h)}return l.resampling?(0,g.i)(l._tileInfoView,y,c,e):y})()}_enqueueTileFetch(e){var t=this;return(0,f.Z)(function*(){if(!t._fetchQueue.has(e.key.id)){try{const l=yield t._fetchQueue.push(e.key);e.bitmap.source=l,e.bitmap.width=t._tileInfoView.tileInfo.size[0],e.bitmap.height=t._tileInfoView.tileInfo.size[1],e.once("attach",()=>t.requestUpdate())}catch(l){(0,m.D_)(l)||F.Z.getLogger(t.declaredClass).error(l)}t.requestUpdate()}})()}_fetchImage(e,t){var l=this;return(0,f.Z)(function*(){return l.layer.fetchTile(e.level,e.row,e.col,{signal:t})})()}};(0,p._)([(0,I.Cb)()],d.prototype,"_fetchQueue",void 0),(0,p._)([(0,I.Cb)()],d.prototype,"resampling",null),d=(0,p._)([(0,V.j)("esri.views.2d.layers.TileLayerView2D")],d);const H=d}}]);