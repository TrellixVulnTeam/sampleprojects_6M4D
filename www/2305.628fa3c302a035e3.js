"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2305],{62305:(I,d,n)=>{n.r(d),n.d(d,{default:()=>v});var a=n(15861),E=n(26584),m=n(63290),c=n(62208),u=n(10699),i=n(37053),g=n(82054),P=n(82708),h=n(82959),O=n(38330),f=n(58775),M=n(35775),D=n(83774),T=n(60466);class v{constructor(){var e=this;this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=function(){var r=(0,a.Z)(function*(t){const{objectIdField:o}=e._queryEngine,l=yield(0,D.Bm)(e._getFeatureUrl,e._featureType.typeName,e._getFeatureOutputFormat,{customParameters:e._customParameters,dateFields:e._queryEngine.fieldsIndex.dateFields.map(s=>s.name),signal:t});yield(0,f.O3)(l),(0,u.k_)(t);const _=(0,f.lG)(l,{geometryType:e._queryEngine.geometryType,hasZ:!1,objectIdField:o});if(!(0,i.fS)(e._queryEngine.spatialReference,i.Zn))for(const s of _)(0,c.pC)(s.geometry)&&(s.geometry=(0,g.GH)((0,h.iV)((0,g.di)(s.geometry,e._queryEngine.geometryType,!1,!1),i.Zn,e._queryEngine.spatialReference)));let y=1;for(const s of _){const p={};(0,M.O0)(e._fieldsIndex,p,s.attributes,!0),s.attributes=p,null==s.attributes[o]&&(s.objectId=s.attributes[o]=y++)}return _});return function(t){return r.apply(this,arguments)}}()}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null}load(e,r){var t=this;return(0,a.Z)(function*(){const{getFeatureUrl:o,getFeatureOutputFormat:l,spatialReference:_,fields:y,geometryType:s,featureType:p,objectIdField:F,customParameters:C}=e;t._featureType=p,t._customParameters=C,t._getFeatureUrl=o,t._getFeatureOutputFormat=l,t._fieldsIndex=new T.Z(y),yield t._checkProjection(_),(0,u.k_)(r),t._queryEngine=new O.Z({fields:y,geometryType:s,hasM:!1,hasZ:!1,objectIdField:F,spatialReference:_,timeInfo:null,featureStore:new P.Z({geometryType:s,hasM:!1,hasZ:!1})});const j=yield t._snapshotFeatures((0,c.Wg)(r.signal));return t._queryEngine.featureStore.addMany(j),{extent:t._queryEngine.fullExtent}})()}applyEdits(){return(0,a.Z)(function*(){throw new E.Z("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")})()}queryFeatures(e={},r={}){var t=this;return(0,a.Z)(function*(){return yield t._waitSnapshotComplete(),t._queryEngine.executeQuery(e,r.signal)})()}queryFeatureCount(e={},r={}){var t=this;return(0,a.Z)(function*(){return yield t._waitSnapshotComplete(),t._queryEngine.executeQueryForCount(e,r.signal)})()}queryObjectIds(e={},r={}){var t=this;return(0,a.Z)(function*(){return yield t._waitSnapshotComplete(),t._queryEngine.executeQueryForIds(e,r.signal)})()}queryExtent(e={},r={}){var t=this;return(0,a.Z)(function*(){return yield t._waitSnapshotComplete(),t._queryEngine.executeQueryForExtent(e,r.signal)})()}querySnapping(e,r={}){var t=this;return(0,a.Z)(function*(){return yield t._waitSnapshotComplete(),t._queryEngine.executeQueryForSnapping(e,r.signal)})()}refresh(e){var r=this;return(0,a.Z)(function*(){var t;return r._customParameters=e,null==(t=r._snapshotTask)||t.abort(),r._snapshotTask=(0,u.vr)(r._snapshotFeatures),r._snapshotTask.promise.then(o=>{r._queryEngine.featureStore.clear(),o&&r._queryEngine.featureStore.addMany(o)},o=>{r._queryEngine.featureStore.clear(),(0,u.D_)(o)||m.Z.getLogger("esri.layers.WFSLayer").error(new E.Z("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:o}))}),yield r._waitSnapshotComplete(),{extent:r._queryEngine.fullExtent}})()}_waitSnapshotComplete(){var e=this;return(0,a.Z)(function*(){if(e._snapshotTask&&!e._snapshotTask.finished){try{yield e._snapshotTask.promise}catch(r){}return e._waitSnapshotComplete()}})()}_checkProjection(e){return(0,a.Z)(function*(){try{yield(0,h._W)(i.Zn,e)}catch(r){throw new E.Z("unsupported-projection","Projection not supported",{spatialReference:e})}})()}}}}]);