"use strict";var H=Object.defineProperty,N=Object.defineProperties,X=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,K=(E,f,s)=>f in E?H(E,f,{enumerable:!0,configurable:!0,writable:!0,value:s}):E[f]=s,U=(E,f)=>{for(var s in f||(f={}))Y.call(f,s)&&K(E,s,f[s]);if(L)for(var s of L(f))k.call(f,s)&&K(E,s,f[s]);return E},Q=(E,f)=>N(E,X(f));(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7728],{7728:(E,f,s)=>{s.r(f),s.d(f,{default:()=>J});var v=s(15861),T=s(26584),b=s(62208),I=s(91179),A=s(37053),j=s(82054),C=s(1476),x=s(82708),O=s(82959),S=s(38330),h=s(56554),u=s(35775),R=s(60466),W=s(85),M=s(36630);const $=A.Zn,q={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:A.Zn},G={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function z(D){return(0,I.wp)(D)?null!=D.m:!!D.hasM}class J{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}load(e){var t=this;return(0,v.Z)(function*(){const n=[],{features:r}=e,l=t._inferLayerProperties(r,e.fields),d=e.fields||[],g=null!=e.hasM?e.hasM:l.hasM,m=null!=e.hasZ?e.hasZ:l.hasZ,p=!e.spatialReference&&!l.spatialReference,a=p?$:e.spatialReference||l.spatialReference,o=p?q:null,_=e.geometryType||l.geometryType;let c=e.objectIdField||l.objectIdField,y=e.timeInfo;if(_&&(p&&n.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!_))throw new T.Z("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!c)throw new T.Z("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(l.objectIdField&&c!==l.objectIdField&&(n.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${c}" doesn't match the field name "${l.objectIdField}", found in the provided fields`}),c=l.objectIdField),c&&!l.objectIdField){let i=null;d.some(P=>P.name===c&&(i=P,!0))?(i.type="esriFieldTypeOID",i.editable=!1,i.nullable=!1):d.unshift({alias:c,name:c,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const i of d){if(null==i.name&&(i.name=i.alias),null==i.alias&&(i.alias=i.name),!i.name)throw new T.Z("feature-layer:invalid-field-name","field name is missing",{field:i});if(i.name===c&&(i.type="esriFieldTypeOID"),-1===W.v.jsonValues.indexOf(i.type))throw new T.Z("feature-layer:invalid-field-type",`invalid type for field "${i.name}"`,{field:i})}const B={};for(const i of d)if("esriFieldTypeOID"!==i.type&&"esriFieldTypeGlobalID"!==i.type){const P=(0,M.os)(i);void 0!==P&&(B[i.name]=P)}if(t._fieldsIndex=new R.Z(d),t._createDefaultAttributes=(0,h.Dm)(B,c),y){if(y.startTimeField){const i=t._fieldsIndex.get(y.startTimeField);i?(y.startTimeField=i.name,i.type="esriFieldTypeDate"):y.startTimeField=null}if(y.endTimeField){const i=t._fieldsIndex.get(y.endTimeField);i?(y.endTimeField=i.name,i.type="esriFieldTypeDate"):y.endTimeField=null}if(y.trackIdField){const i=t._fieldsIndex.get(y.trackIdField);i?y.trackIdField=i.name:(y.trackIdField=null,n.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:y}}))}y.startTimeField||y.endTimeField||(n.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:y}}),y=null)}const Z={warnings:n,featureErrors:[],layerDefinition:Q(U({},G),{drawingInfo:(0,h.bU)(_),templates:(0,h.Hq)(B),extent:o,geometryType:_,objectIdField:c,fields:d,hasZ:!!m,hasM:!!g,timeInfo:y}),assignedObjectIds:{}};if(t._queryEngine=new S.Z({fields:d,geometryType:_,hasM:g,hasZ:m,objectIdField:c,spatialReference:a,featureStore:new x.Z({geometryType:_,hasM:g,hasZ:m}),timeInfo:y,cacheSpatialQueries:!0}),!r||!r.length)return t._nextObjectId=C.X,Z;const V=(0,C.S)(c,r);return t._nextObjectId=V+1,yield(0,O._W)(r,a),t._loadInitialFeatures(Z,r)})()}applyEdits(e){var t=this;return(0,v.Z)(function*(){const{spatialReference:n,geometryType:r}=t._queryEngine;return yield Promise.all([(0,u.b)(n,r),(0,O._W)(e.adds,n),(0,O._W)(e.updates,n)]),t._applyEdits(e)})()}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let n,r,l=null,d=null,g=null;for(const m of e){const p=m.geometry;if(!(0,b.Wi)(p)&&(l||(l=(0,I.Ji)(p)),d||(d=p.spatialReference),null==n&&(n=(0,I.wp)(D=p)?null!=D.z:!!D.hasZ),null==r&&(r=z(p)),l&&d&&null!=n&&null!=r))break}var D;if(t&&t.length){let m=null;t.some(p=>{const a="esriFieldTypeOID"===p.type,o=!p.type&&p.name&&"objectid"===p.name.toLowerCase();return m=p,a||o})&&(g=m.name)}return{geometryType:l,spatialReference:d,objectIdField:g,hasM:r,hasZ:n}}_loadInitialFeatures(e,t){const{geometryType:n,hasM:r,hasZ:l,objectIdField:d,spatialReference:g,featureStore:m}=this._queryEngine,p=[];for(const a of t){if(null!=a.uid&&(e.assignedObjectIds[a.uid]=-1),a.geometry&&n!==(0,I.Ji)(a.geometry)){e.featureErrors.push((0,u.av)("Incorrect geometry type."));continue}const o=this._createDefaultAttributes(),_=(0,u.O0)(this._fieldsIndex,o,a.attributes,!0,e.warnings);_?e.featureErrors.push(_):(this._assignObjectId(o,a.attributes,!0),a.attributes=o,null!=a.uid&&(e.assignedObjectIds[a.uid]=a.attributes[d]),(0,b.pC)(a.geometry)&&(a.geometry=(0,O.iV)(a.geometry,a.geometry.spatialReference,g)),p.push(a))}if(m.addMany((0,j.Yn)([],p,n,l,r,d)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:a,end:o}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[a,o]}return e}_applyEdits(e){const{adds:t,updates:n,deletes:r}=e,l={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(l,t),n&&n.length&&this._applyUpdateEdits(l,n),r&&r.length){for(const d of r)l.deleteResults.push((0,u.d1)(d));this._queryEngine.featureStore.removeManyById(r)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:l}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:r,hasM:l,hasZ:d,objectIdField:g,spatialReference:m,featureStore:p}=this._queryEngine,a=[];for(const o of t){if(o.geometry&&r!==(0,I.Ji)(o.geometry)){n.push((0,u.av)("Incorrect geometry type."));continue}const _=this._createDefaultAttributes(),F=(0,u.O0)(this._fieldsIndex,_,o.attributes);F?n.push(F):(this._assignObjectId(_,o.attributes),o.attributes=_,null!=o.uid&&(e.uidToObjectId[o.uid]=o.attributes[g]),(0,b.pC)(o.geometry)&&(o.geometry=(0,O.iV)((0,u.og)(o.geometry,m),o.geometry.spatialReference,m)),a.push(o),n.push((0,u.d1)(o.attributes[g])))}p.addMany((0,j.Yn)([],a,r,d,l,g))}_applyUpdateEdits({updateResults:e},t){const{geometryType:n,hasM:r,hasZ:l,objectIdField:d,spatialReference:g,featureStore:m}=this._queryEngine;for(const p of t){const{attributes:a,geometry:o}=p,_=a&&a[d];if(null==_){e.push((0,u.av)(`Identifier field ${d} missing`));continue}if(!m.has(_)){e.push((0,u.av)(`Feature with object id ${_} missing`));continue}const F=(0,j.EI)(m.getFeature(_),n,l,r);if((0,b.pC)(o)){if(n!==(0,I.Ji)(o)){e.push((0,u.av)("Incorrect geometry type."));continue}F.geometry=(0,O.iV)((0,u.og)(o,g),o.spatialReference,g)}if(a){const c=(0,u.O0)(this._fieldsIndex,F.attributes,a);if(c){e.push(c);continue}}m.add((0,j.XA)(F,n,l,r,d)),e.push((0,u.d1)(_))}}_assignObjectId(e,t,n=!1){const r=this._queryEngine.objectIdField;e[r]=n&&t&&isFinite(t[r])?t[r]:this._nextObjectId++}}},56554:(E,f,s)=>{s.d(f,{MS:()=>S,Dm:()=>x,Hq:()=>O,bU:()=>A});var v=s(8314),T=s(58817),b=s(87757),I=s(24837);function A(h){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===h||"esriGeometryMultipoint"===h?I.I4:"esriGeometryPolyline"===h?I.ET:I.lF}}}const j=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let C=1;function x(h,u){if((0,v.Z)("esri-csp-restrictions"))return()=>U({[u]:null},h);try{let R=`this.${u} = null;`;for(const M in h)R+=`this${j.test(M)?`.${M}`:`["${M}"]`} = ${JSON.stringify(h[M])};`;const W=new Function(`\n      return class AttributesClass$${C++} {\n        constructor() {\n          ${R};\n        }\n      }\n    `)();return()=>new W}catch(R){return()=>U({[u]:null},h)}}function O(h={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,T.d9)(h)}}]}function S(h,u){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:h},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:u,supportsDelete:u,supportsEditing:u,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:u,supportsExceedsLimitStatistics:!0},query:b.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:u,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);