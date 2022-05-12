"use strict";var X=Object.defineProperty,w=Object.defineProperties,Y=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable,B=(E,y,a)=>y in E?X(E,y,{enumerable:!0,configurable:!0,writable:!0,value:a}):E[y]=a,p=(E,y)=>{for(var a in y||(y={}))ee.call(y,a)&&B(E,a,y[a]);if(x)for(var a of x(y))te.call(y,a)&&B(E,a,y[a]);return E},h=(E,y)=>w(E,Y(y));(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5547],{87757:(E,y,a)=>{a.d(y,{g:()=>d});const d={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},45547:(E,y,a)=>{a.r(y),a.d(y,{default:()=>k});var d=a(15861),F=a(17626),M=(a(29132),a(88879)),O=a(84792),C=a(97478),A=a(26584),T=a(8314),U=a(2076),j=a(47996),m=a(62208),R=a(94113),P=a(10699),S=a(21726),g=a(77712),Z=(a(85931),a(90912),a(76898)),W=a(2004),K=a(91179),Q=a(56554),J=a(20514),N=a(85531),G=a(4728),$=a(65234);const z=new U.X({originalAndCurrentFeatures:"original-and-current-features",none:"none"});function q(){return(q=(0,d.Z)(function*(r){return"string"==typeof r?(0,S.sJ)(r)||{data:r}:new Promise((t,e)=>{const s=new FileReader;s.readAsDataURL(r),s.onload=()=>t((0,S.sJ)(s.result)),s.onerror=n=>e(n)})})).apply(this,arguments)}const H=new Set(["Feature Layer","Table"]);let D=class extends j.Z{constructor(){var r;super(...arguments),r=this,this.type="feature-layer",this.refresh=(0,P.Ds)((0,d.Z)(function*(){var t,e;yield r.load();const s=null==(t=r.sourceJSON.editingInfo)?void 0:t.lastEditDate;if(null==s)return{dataChanged:!0,updates:{}};try{yield r._fetchService(null)}catch(u){return{dataChanged:!0,updates:{}}}const n=s!==(null==(e=r.sourceJSON.editingInfo)?void 0:e.lastEditDate);return{dataChanged:n,updates:n?{editingInfo:r.sourceJSON.editingInfo,extent:r.sourceJSON.extent}:null}}))}load(r){const t=(0,m.pC)(r)?r.signal:null;return this.addResolvingPromise(this._fetchService(this.layer.sourceJSON,t)),Promise.resolve(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:r}},parsedUrl:t,dynamicDataSource:e,infoFor3D:s,gdbVersion:n,spatialReference:u,fieldsIndex:i}=this.layer,l=(0,T.Z)("featurelayer-pbf")&&r&&(0,m.Wi)(s)?"pbf":"json";return new G.Z({url:t.path,format:l,fieldsIndex:i,infoFor3D:s,dynamicDataSource:e,gdbVersion:n,sourceSpatialReference:u})}addAttachment(r,t){var e=this;return(0,d.Z)(function*(){yield e.load();const s=r.attributes[e.layer.objectIdField],n=e.layer.parsedUrl.path+"/"+s+"/addAttachment",u=e._getLayerRequestOptions(),i=e._getFormDataForAttachment(t,u.query);try{const l=yield(0,O.default)(n,{body:i});return e._createFeatureEditResult(l.data.addAttachmentResult)}catch(l){throw e._createAttachmentErrorResult(s,l)}})()}updateAttachment(r,t,e){var s=this;return(0,d.Z)(function*(){yield s.load();const n=r.attributes[s.layer.objectIdField],u=s.layer.parsedUrl.path+"/"+n+"/updateAttachment",i=s._getLayerRequestOptions({query:{attachmentId:t}}),l=s._getFormDataForAttachment(e,i.query);try{const o=yield(0,O.default)(u,{body:l});return s._createFeatureEditResult(o.data.updateAttachmentResult)}catch(o){throw s._createAttachmentErrorResult(n,o)}})()}applyEdits(r,t){var e=this;return(0,d.Z)(function*(){yield e.load();const s=r.addFeatures.map(e._serializeFeature,e),n=r.updateFeatures.map(e._serializeFeature,e),u=e._getFeatureIds(r.deleteFeatures,null==t?void 0:t.globalIdUsed);(0,J.P)(s,n,e.layer.spatialReference);const i=[],l=[],o=[...r.deleteAttachments];for(const f of r.addAttachments)i.push(yield e._serializeAttachment(f));for(const f of r.updateAttachments)l.push(yield e._serializeAttachment(f));const c=i.length||l.length||o.length?{adds:i,updates:l,deletes:o}:null,_={gdbVersion:(null==t?void 0:t.gdbVersion)||e.layer.gdbVersion,rollbackOnFailure:null==t?void 0:t.rollbackOnFailureEnabled,useGlobalIds:null==t?void 0:t.globalIdUsed,returnEditMoment:null==t?void 0:t.returnEditMoment,usePreviousEditMoment:null==t?void 0:t.usePreviousEditMoment,sessionId:null==t?void 0:t.sessionId};null!=t&&t.returnServiceEditsOption?(_.edits=JSON.stringify([{id:e.layer.layerId,adds:s,updates:n,deletes:u,attachments:c}]),_.returnServiceEditsOption=z.toJSON(null==t?void 0:t.returnServiceEditsOption),_.returnServiceEditsInSourceSR=null==t?void 0:t.returnServiceEditsInSourceSR):(_.adds=s.length?JSON.stringify(s):null,_.updates=n.length?JSON.stringify(n):null,_.deletes=u.length?null!=t&&t.globalIdUsed?JSON.stringify(u):u.join(","):null,_.attachments=c&&JSON.stringify(c));const I=e._getLayerRequestOptions({method:"post",query:_}),b=null!=t&&t.returnServiceEditsOption?e.layer.url:e.layer.parsedUrl.path,v=yield(0,O.default)(b+"/applyEdits",I);return e._createEditsResult(v)})()}deleteAttachments(r,t){var e=this;return(0,d.Z)(function*(){yield e.load();const s=r.attributes[e.layer.objectIdField],n=e.layer.parsedUrl.path+"/"+s+"/deleteAttachments";try{return(yield(0,O.default)(n,e._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(e._createFeatureEditResult)}catch(u){throw e._createAttachmentErrorResult(s,u)}})()}fetchRecomputedExtents(r={}){var t=this;return this.load({signal:r.signal}).then((0,d.Z)(function*(){const s=t._getLayerRequestOptions(h(p({},r),{query:{returnUpdates:!0}})),{layerId:n,url:u}=t.layer,{data:i}=yield(0,O.default)(`${u}/${n}`,s),{id:l,extent:o,fullExtent:c,timeExtent:_}=i,I=o||c;return{id:l,fullExtent:I&&W.Z.fromJSON(I),timeExtent:_&&C.Z.fromJSON({start:_[0],end:_[1]})}}))}queryAttachments(r,t={}){var e=this;return(0,d.Z)(function*(){const{parsedUrl:s}=e.layer,n=s.path;yield e.load();const u=e._getLayerRequestOptions(t);if(!e.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:i}=r,l=[];for(const o of i)l.push((0,O.default)(n+"/"+o+"/attachments",u));return Promise.all(l).then(o=>i.map((c,_)=>({parentObjectId:c,attachmentInfos:o[_].data.attachmentInfos}))).then(o=>(0,N.O)(o,n))}return e.queryTask.executeAttachmentQuery(r,u)})()}queryFeatures(r,t){var e=this;return(0,d.Z)(function*(){return yield e.load(),e.queryTask.execute(r,h(p({},t),{query:e._createRequestQueryOptions(t)}))})()}queryFeaturesJSON(r,t){var e=this;return(0,d.Z)(function*(){return yield e.load(),e.queryTask.executeJSON(r,h(p({},t),{query:e._createRequestQueryOptions(t)}))})()}queryObjectIds(r,t){var e=this;return(0,d.Z)(function*(){return yield e.load(),e.queryTask.executeForIds(r,h(p({},t),{query:e._createRequestQueryOptions(t)}))})()}queryFeatureCount(r,t){var e=this;return(0,d.Z)(function*(){return yield e.load(),e.queryTask.executeForCount(r,h(p({},t),{query:e._createRequestQueryOptions(t)}))})()}queryExtent(r,t){var e=this;return(0,d.Z)(function*(){return yield e.load(),e.queryTask.executeForExtent(r,h(p({},t),{query:e._createRequestQueryOptions(t)}))})()}queryRelatedFeatures(r,t){var e=this;return(0,d.Z)(function*(){return yield e.load(),e.queryTask.executeRelationshipQuery(r,h(p({},t),{query:e._createRequestQueryOptions(t)}))})()}queryRelatedFeaturesCount(r,t){var e=this;return(0,d.Z)(function*(){return yield e.load(),e.queryTask.executeRelationshipQueryForCount(r,h(p({},t),{query:e._createRequestQueryOptions(t)}))})()}queryTopFeatures(r,t){var e=this;return(0,d.Z)(function*(){return yield e.load(),e.queryTask.executeTopFeaturesQuery(r,h(p({},t),{query:e._createRequestQueryOptions(t)}))})()}queryTopObjectIds(r,t){var e=this;return(0,d.Z)(function*(){return yield e.load(),e.queryTask.executeForTopIds(r,h(p({},t),{query:e._createRequestQueryOptions(t)}))})()}queryTopExtents(r,t){var e=this;return(0,d.Z)(function*(){return yield e.load(),e.queryTask.executeForTopExtents(r,h(p({},t),{query:e._createRequestQueryOptions(t)}))})()}queryTopCount(r,t){var e=this;return(0,d.Z)(function*(){return yield e.load(),e.queryTask.executeForTopCount(r,h(p({},t),{query:e._createRequestQueryOptions(t)}))})()}_createRequestQueryOptions(r){const t=p(h(p({},this.layer.customParameters),{token:this.layer.apiKey}),null==r?void 0:r.query);return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}_fetchService(r,t){var e=this;return(0,d.Z)(function*(){if(!r){const{data:n}=yield(0,O.default)(e.layer.parsedUrl.path,e._getLayerRequestOptions({query:(0,T.Z)("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:t}));r=n}e.sourceJSON=e._patchServiceJSON(r);const s=r.type;if(!H.has(s))throw new A.Z("feature-layer-source:unsupported-type",`Source type "${s}" is not supported`)})()}_patchServiceJSON(r){var t;if("Table"!==r.type&&r.geometryType&&(null==r||null==(t=r.drawingInfo)||!t.renderer)&&!r.defaultSymbol){const e=(0,Q.bU)(r.geometryType).renderer;(0,R.RB)("drawingInfo.renderer",e,r)}return"esriGeometryMultiPatch"===r.geometryType&&r.infoFor3D&&(r.geometryType="mesh"),r}_serializeFeature(r){const{geometry:t,attributes:e}=r;return(0,m.Wi)(t)?{attributes:e}:"mesh"===t.type||"extent"===t.type?null:{geometry:t.toJSON(),attributes:e}}_serializeAttachment(r){var t=this;return(0,d.Z)(function*(){const{feature:e,attachment:s}=r,{globalId:n,name:u,contentType:i,data:l,uploadId:o}=s,c={globalId:n,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(e&&(c.parentGlobalId="attributes"in e?e.attributes&&e.attributes[t.layer.globalIdField]:e.globalId),o)c.uploadId=o;else if(l){const _=yield function V(r){return q.apply(this,arguments)}(l);c.contentType=_.mediaType,c.data=_.data,l instanceof File&&(c.name=l.name)}return u&&(c.name=u),i&&(c.contentType=i),c})()}_getFeatureIds(r,t){const e=r[0];return e?this._canUseGlobalIds(t,r)?this._getGlobalIdsFromFeatureIdentifier(r):"objectId"in e?this._getObjectIdsFromFeatureIdentifier(r):this._getIdsFromFeatures(r):[]}_getIdsFromFeatures(r){const t=this.layer.objectIdField;return r.map(e=>e.attributes&&e.attributes[t])}_canUseGlobalIds(r,t){return r&&"globalId"in t[0]}_getObjectIdsFromFeatureIdentifier(r){return r.map(t=>t.objectId)}_getGlobalIdsFromFeatureIdentifier(r){return r.map(t=>t.globalId)}_createEditsResult(r){var t;const e=r.data,{layerId:s}=this.layer,n=[];let u=null;if(Array.isArray(e))for(const o of e)n.push({id:o.id,editedFeatures:o.editedFeatures}),o.id===s&&(u={addResults:o.addResults,updateResults:o.updateResults,deleteResults:o.deleteResults,attachments:o.attachments,editMoment:o.editMoment});else u=e;const i=null==(t=u)?void 0:t.attachments,l={addFeatureResults:u.addResults?u.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:u.updateResults?u.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:u.deleteResults?u.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:i&&i.addResults?i.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:i&&i.updateResults?i.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:i&&i.deleteResults?i.deleteResults.map(this._createFeatureEditResult,this):[]};if(u.editMoment&&(l.editMoment=u.editMoment),n.length>0){l.editedFeatureResults=[];for(const o of n){const{adds:c,updates:_,deletes:I,spatialReference:b}=o.editedFeatures,v=b?new $.Z(b):null;l.editedFeatureResults.push({layerId:o.id,editedFeatures:{adds:(null==c?void 0:c.map(f=>this._createEditedFeature(f,v)))||[],updates:(null==_?void 0:_.map(f=>({original:this._createEditedFeature(f[0],v),current:this._createEditedFeature(f[1],v)})))||[],deletes:(null==I?void 0:I.map(f=>this._createEditedFeature(f,v)))||[],spatialReference:v}})}}return l}_createEditedFeature(r,t){return new M.Z({attributes:r.attributes,geometry:(0,K.im)(h(p({},r.geometry),{spatialReference:t}))})}_createFeatureEditResult(r){const t=!0===r.success?null:r.error||{code:void 0,description:void 0};return{objectId:r.objectId,globalId:r.globalId,error:t?new A.Z("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_createAttachmentErrorResult(r,t){return{objectId:r,globalId:null,error:new A.Z("feature-layer-source:attachment-failure",t.details.messages&&t.details.messages[0]||t.message,{code:t.details.httpStatus||t.details.messageCode})}}_getFormDataForAttachment(r,t){const e=r instanceof FormData?r:r&&r.elements?new FormData(r):null;if(e)for(const s in t){const n=t[s];null!=n&&(e.set?e.set(s,n):e.append(s,n))}return e}_getLayerRequestOptions(r={}){const{parsedUrl:t,gdbVersion:e,dynamicDataSource:s}=this.layer;return h(p({},r),{query:p(h(p({gdbVersion:e,layer:s?JSON.stringify({source:s}):void 0},t.query),{f:"json"}),this._createRequestQueryOptions(r)),responseType:"json"})}};(0,F._)([(0,g.Cb)()],D.prototype,"type",void 0),(0,F._)([(0,g.Cb)({constructOnly:!0})],D.prototype,"layer",void 0),(0,F._)([(0,g.Cb)({readOnly:!0})],D.prototype,"queryTask",null),D=(0,F._)([(0,Z.j)("esri.layers.graphics.sources.FeatureLayerSource")],D);const k=D},56554:(E,y,a)=>{a.d(y,{MS:()=>j,Dm:()=>T,Hq:()=>U,bU:()=>O});var d=a(8314),F=a(58817),L=a(87757),M=a(24837);function O(m){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===m||"esriGeometryMultipoint"===m?M.I4:"esriGeometryPolyline"===m?M.ET:M.lF}}}const C=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let A=1;function T(m,R){if((0,d.Z)("esri-csp-restrictions"))return()=>p({[R]:null},m);try{let P=`this.${R} = null;`;for(const g in m)P+=`this${C.test(g)?`.${g}`:`["${g}"]`} = ${JSON.stringify(m[g])};`;const S=new Function(`\n      return class AttributesClass$${A++} {\n        constructor() {\n          ${P};\n        }\n      }\n    `)();return()=>new S}catch(P){return()=>p({[R]:null},m)}}function U(m={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,F.d9)(m)}}]}function j(m,R){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:m},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:R,supportsDelete:R,supportsEditing:R,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:R,supportsExceedsLimitStatistics:!0},query:L.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:R,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);