"use strict";var se=Object.defineProperty,oe=Object.defineProperties,ie=Object.getOwnPropertyDescriptors,ee=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,te=(M,n,e)=>n in M?se(M,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):M[n]=e,$=(M,n)=>{for(var e in n||(n={}))ne.call(n,e)&&te(M,e,n[e]);if(ee)for(var e of ee(n))ae.call(n,e)&&te(M,e,n[e]);return M},k=(M,n)=>oe(M,ie(n));(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5349],{38811:(M,n,e)=>{e.d(n,{E:()=>P});class l{constructor(T={}){this._options=T}toQueryParams(T){if(!T)return null;const h=T.toJSON(),A={};return Object.keys(h).forEach(i=>{const y=this._options[i];if(y){const r="boolean"!=typeof y&&y.name?y.name:i,c="boolean"!=typeof y&&y.getter?y.getter(h):h[i];null!=c&&(A[r]=(a=>{if(!Array.isArray(a))return!1;const[T]=a;return"number"==typeof T||"string"==typeof T})(c)?c.join(","):"object"==typeof c?JSON.stringify(c):c)}else A[i]=h[i]},this),A}}function P(a){return new l(a)}},15503:(M,n,e)=>{e.d(n,{et:()=>Z,ef:()=>Q,bI:()=>z,Wf:()=>X});var t=e(15861),l=e(84792),P=e(26584),a=e(62208),T=e(94113),h=e(21726),A=e(2618),i=e(17626),y=e(86810),r=e(77712),U=(e(85931),e(8314),e(90912),e(55342)),I=e(76898),j=e(51494),D=e(67854);let g=class extends y.wq{constructor(m){super(m),this.accumulateAttributeNames=null,this.currentVersion=null,this.defaultTravelMode=null,this.directionsLanguage=null,this.directionsLengthUnits=null,this.directionsSupportedLanguages=null,this.directionsTimeAttribute=null,this.hasZ=null,this.impedance=null,this.networkDataset=null,this.supportedTravelModes=null}};(0,i._)([(0,r.Cb)()],g.prototype,"accumulateAttributeNames",void 0),(0,i._)([(0,r.Cb)()],g.prototype,"currentVersion",void 0),(0,i._)([(0,r.Cb)()],g.prototype,"defaultTravelMode",void 0),(0,i._)([(0,r.Cb)()],g.prototype,"directionsLanguage",void 0),(0,i._)([(0,U.J)(j.GX)],g.prototype,"directionsLengthUnits",void 0),(0,i._)([(0,r.Cb)()],g.prototype,"directionsSupportedLanguages",void 0),(0,i._)([(0,r.Cb)()],g.prototype,"directionsTimeAttribute",void 0),(0,i._)([(0,r.Cb)()],g.prototype,"hasZ",void 0),(0,i._)([(0,r.Cb)()],g.prototype,"impedance",void 0),(0,i._)([(0,r.Cb)()],g.prototype,"networkDataset",void 0),(0,i._)([(0,r.Cb)({type:[D.Z]})],g.prototype,"supportedTravelModes",void 0),g=(0,i._)([(0,I.j)("esri.rest.support.NetworkServiceDescription")],g);const W=g;function Z(m,u,v,d){d[v]=[u.length,u.length+m.length],m.forEach(p=>{u.push(p.geometry)})}function Q(m,u){for(let v=0;v<u.length;v++){const d=m[u[v]];if(d&&d.length)for(const p of d)p.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}function X(m,u){for(let v=0;v<u.length;v++){const d=m[u[v]];if(d&&d.length)for(const p of d)if((0,a.pC)(p)&&p.hasZ)return!0}return!1}function z(m,u,v){return R.apply(this,arguments)}function R(){return(R=(0,t.Z)(function*(m,u,v){if(!m)throw new P.Z("network-service:missing-url","Url to Network service is missing");const d=(0,A.lA)({f:"json",token:u},v),{data:p}=yield(0,l.default)(m,d);p.supportedTravelModes||(p.supportedTravelModes=[]);for(let E=0;E<p.supportedTravelModes.length;E++)p.supportedTravelModes[E].id||(p.supportedTravelModes[E].id=p.supportedTravelModes[E].itemId);const o=p.currentVersion>=10.4?Y(m,u,v):L(m,v),{defaultTravelMode:s,supportedTravelModes:S}=yield o;return p.defaultTravelMode=s,p.supportedTravelModes=S,W.fromJSON(p)})).apply(this,arguments)}function L(m,u){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(function*(m,u){var v,d;const p=(0,A.lA)({f:"json"},u),{data:o}=yield(0,l.default)(m.replace(/\/rest\/.*$/i,"/info"),p);if(!o||!o.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};const{owningSystemUrl:s}=o,S=(0,h.Qj)(s)+"/sharing/rest/portals/self",{data:E}=yield(0,l.default)(S,p),C=(0,T.hS)("helperServices.routingUtilities.url",E);if(!C)return{supportedTravelModes:[],defaultTravelMode:null};const B=(0,A.en)(s),b=/\/solve$/i.test(B.path)?"Route":/\/solveclosestfacility$/i.test(B.path)?"ClosestFacility":"ServiceAreas",x=(0,A.lA)({f:"json",serviceName:b},u),F=(0,h.Qj)(C)+"/GetTravelModes/execute",J=yield(0,l.default)(F,x),V=[];let G=null;if(null!=J&&null!=(v=J.data)&&null!=(d=v.results)&&d.length){const _=J.data.results;for(const K of _){var N;if("supportedTravelModes"===K.paramName){if(null!=(N=K.value)&&N.features)for(const{attributes:q}of K.value.features)if(q){const re=JSON.parse(q.TravelMode);V.push(re)}}else"defaultTravelMode"===K.paramName&&(G=K.value)}}return{supportedTravelModes:V,defaultTravelMode:G}})).apply(this,arguments)}function Y(m,u,v){return w.apply(this,arguments)}function w(){return(w=(0,t.Z)(function*(m,u,v){try{const d=(0,A.lA)({f:"json",token:u},v),p=(0,h.Qj)(m)+"/retrieveTravelModes",{data:{supportedTravelModes:o,defaultTravelMode:s}}=yield(0,l.default)(p,d);return{supportedTravelModes:o,defaultTravelMode:s}}catch(d){throw new P.Z("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:d})}})).apply(this,arguments)}},45568:(M,n,e)=>{e.d(n,{Z:()=>c});var t=e(17626),l=e(2076),P=e(86810),a=e(77712),i=(e(85931),e(8314),e(90912),e(76898));const y=new l.X({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let r=class extends P.wq{constructor(O){super(O),this.description=null,this.type=null}};(0,t._)([(0,a.Cb)({type:String,json:{write:!0}})],r.prototype,"description",void 0),(0,t._)([(0,a.Cb)({type:String,json:{read:y.read,write:y.write}})],r.prototype,"type",void 0),r=(0,t._)([(0,i.j)("esri.rest.support.GPMessage")],r);const c=r},12334:(M,n,e)=>{e.d(n,{Z:()=>c});var t=e(17626),l=e(2076),P=e(77712),A=(e(85931),e(8314),e(90912),e(76898)),i=e(45568);const y=new l.X({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let r=class extends i.Z{constructor(O){super(O),this.type=null}};(0,t._)([(0,P.Cb)({type:String,json:{read:y.read,write:y.write}})],r.prototype,"type",void 0),r=(0,t._)([(0,A.j)("esri.rest.support.NAMessage")],r);const c=r},67854:(M,n,e)=>{e.d(n,{Z:()=>c});var y,t=e(17626),l=e(86810),P=e(58817),a=e(77712),h=(e(90912),e(55342)),A=e(76898),i=e(51494);let r=y=class extends l.wq{constructor(O){super(O),this.attributeParameterValues=null,this.description=null,this.distanceAttributeName=null,this.id=null,this.impedanceAttributeName=null,this.name=null,this.restrictionAttributeNames=null,this.simplificationTolerance=null,this.simplificationToleranceUnits=null,this.timeAttributeName=null,this.type=null,this.useHierarchy=null,this.uturnAtJunctions=null}clone(){return new y((0,P.d9)({attributeParameterValues:this.attributeParameterValues,description:this.description,distanceAttributeName:this.distanceAttributeName,id:this.id,impedanceAttributeName:this.impedanceAttributeName,name:this.name,restrictionAttributeNames:this.restrictionAttributeNames,simplificationTolerance:this.simplificationTolerance,simplificationToleranceUnits:this.simplificationToleranceUnits,timeAttributeName:this.timeAttributeName,type:this.type,useHierarchy:this.useHierarchy,uturnAtJunctions:this.uturnAtJunctions}))}};(0,t._)([(0,a.Cb)({type:[Object],json:{write:!0}})],r.prototype,"attributeParameterValues",void 0),(0,t._)([(0,a.Cb)({type:String,json:{write:!0}})],r.prototype,"description",void 0),(0,t._)([(0,a.Cb)({type:String,json:{write:!0}})],r.prototype,"distanceAttributeName",void 0),(0,t._)([(0,a.Cb)({type:String,json:{write:!0}})],r.prototype,"id",void 0),(0,t._)([(0,a.Cb)({type:String,json:{write:!0}})],r.prototype,"impedanceAttributeName",void 0),(0,t._)([(0,a.Cb)({type:String,json:{write:!0}})],r.prototype,"name",void 0),(0,t._)([(0,a.Cb)({type:[String],json:{write:!0}})],r.prototype,"restrictionAttributeNames",void 0),(0,t._)([(0,a.Cb)({type:Number,json:{write:{allowNull:!0}}})],r.prototype,"simplificationTolerance",void 0),(0,t._)([(0,h.J)(i.q$)],r.prototype,"simplificationToleranceUnits",void 0),(0,t._)([(0,a.Cb)({type:String,json:{write:!0}})],r.prototype,"timeAttributeName",void 0),(0,t._)([(0,h.J)(i.DJ)],r.prototype,"type",void 0),(0,t._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],r.prototype,"useHierarchy",void 0),(0,t._)([(0,h.J)(i.ip)],r.prototype,"uturnAtJunctions",void 0),r=y=(0,t._)([(0,A.j)("esri.rest.support.TravelMode")],r);const c=r},51494:(M,n,e)=>{e.d(n,{oi:()=>j,W7:()=>O,td:()=>W,cW:()=>g,GX:()=>P,$7:()=>T,hB:()=>a,Dd:()=>D,q$:()=>l,yP:()=>H,no:()=>h,ip:()=>i,BW:()=>I,SS:()=>U,DJ:()=>c});var t=e(2076);const l=(0,t.w)()({esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriUnknownUnits:"unknown",esriYards:"yards"}),P=(0,t.w)()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"}),a=(0,t.w)()({esriNAUDays:"days",esriNAUHours:"hours",esriNAUMinutes:"minutes",esriNAUSeconds:"seconds"}),T=(0,t.w)()({esriDOTComplete:"complete",esriDOTCompleteNoEvents:"complete-no-events",esriDOTFeatureSets:"featuresets",esriDOTInstructionsOnly:"instructions-only",esriDOTStandard:"standard",esriDOTSummaryOnly:"summary-only"}),h=(0,t.w)()({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"}),i=((0,t.w)()({esriNAOutputPolygonNone:"none",esriNAOutputPolygonSimplified:"simplified",esriNAOutputPolygonDetailed:"detailed"}),(0,t.w)()({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"})),c=((0,t.w)()({esriNATravelDirectionFromFacility:"from-facility",esriNATravelDirectionToFacility:"to-facility"}),(0,t.w)()({esriNATimeOfDayNotUsed:"not-used",esriNATimeOfDayUseAsStartTime:"start",esriNATimeOfDayUseAsEndTime:"end"}),(0,t.w)()({AUTOMOBILE:"automobile",TRUCK:"truck",WALK:"walk",OTHER:"other"})),O=(0,t.w)()({0:"either-side-of-vehicle",1:"right-side-of-vehicle",2:"left-side-of-vehicle",3:"no-u-turn"},{useNumericKeys:!0}),H=(0,t.w)()({0:"stop",1:"waypoint",2:"break"},{useNumericKeys:!0}),U=(0,t.w)()({0:"ok",1:"not-located",2:"network-element-not-located",3:"element-not-traversable",4:"invalid-field-values",5:"not-reached",6:"time-window-violation",7:"not-located-on-closest"},{useNumericKeys:!0}),I=(0,t.w)()({1:"right",2:"left"},{useNumericKeys:!0}),j=(0,t.w)()({0:"restriction",1:"added-cost"},{useNumericKeys:!0}),D=(0,t.w)()({0:"permit",1:"restrict"},{useNumericKeys:!0}),g=(0,t.w)()({1:"header",50:"arrive",51:"depart",52:"straight",100:"on-ferry",101:"off-ferry",102:"central-fork",103:"roundabout",104:"u-turn",150:"door",151:"stairs",152:"elevator",153:"escalator",154:"pedestrian-ramp",200:"left-fork",201:"left-ramp",202:"clockwise-roundabout",203:"left-handed-u-turn",204:"bear-left",205:"left-turn",206:"sharp-left",207:"left-turn-and-immediate-left-turn",208:"left-turn-and-immediate-right-turn",300:"right-fork",301:"right-ramp",302:"counter-clockwise-roundabout",303:"right-handed-u-turn",304:"bear-right",305:"right-turn",306:"sharp-right",307:"right-turn-and-immediate-left-turn",308:"right-turn-and-immediate-right-turn",400:"up-elevator",401:"up-escalator",402:"up-stairs",500:"down-elevator",501:"down-escalator",502:"down-stairs",1e3:"general-event",1001:"landmark",1002:"time-zone-change",1003:"traffic-event",1004:"scaled-cost-barrier-event",1005:"boundary-crossing",1006:"restriction-violation"},{useNumericKeys:!0}),W=(0,t.w)()({0:"unknown",1:"segment",2:"maneuver-segment",3:"restriction-violation",4:"scaled-cost-barrier",5:"heavy-traffic",6:"slow-traffic",7:"moderate-traffic"},{useNumericKeys:!0})},65349:(M,n,e)=>{e.r(n),e.d(n,{default:()=>p});var t=e(17626),l=e(77712),h=(e(85931),e(8314),e(90912),e(76898)),A=e(15861),i=e(84792),y=e(38811),r=e(13924),c=e(15503),O=e(2618),U=(e(29132),e(88879)),I=e(86810),j=e(62208),D=e(68653),g=e(65234),W=e(12334),Z=e(49672),Q=e(55214),X=e(37118),z=e(91179);function R(o){return o.features.map(s=>{const S=g.Z.fromJSON(o.spatialReference),E=U.Z.fromJSON(s);return(0,j.Wg)(E.geometry).spatialReference=S,E})}function L(o){return(0,j.lV)(o.features.map(s=>((0,j.pC)(s.geometry)&&(s.geometry.spatialReference=o.spatialReference),(0,z.im)(s.geometry))))}let f=class extends I.wq{constructor(o){super(o),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null}readFacilities(o){return L(o)}readPointBarriers(o,s){return L(s.barriers)}readPolylineBarriers(o){return L(o)}readPolygonBarriers(o){return L(o)}readIncidents(o,s){return R(s.saPolylines)}readServiceAreaPolygons(o,s){return R(s.saPolygons)}};(0,t._)([(0,l.Cb)({type:[Z.Z]})],f.prototype,"facilities",void 0),(0,t._)([(0,D.r)("facilities")],f.prototype,"readFacilities",null),(0,t._)([(0,l.Cb)({type:[W.Z]})],f.prototype,"messages",void 0),(0,t._)([(0,l.Cb)({type:[Z.Z]})],f.prototype,"pointBarriers",void 0),(0,t._)([(0,D.r)("pointBarriers",["barriers"])],f.prototype,"readPointBarriers",null),(0,t._)([(0,l.Cb)({type:[Q.Z]})],f.prototype,"polylineBarriers",void 0),(0,t._)([(0,D.r)("polylineBarriers")],f.prototype,"readPolylineBarriers",null),(0,t._)([(0,l.Cb)({type:[X.Z]})],f.prototype,"polygonBarriers",void 0),(0,t._)([(0,D.r)("polygonBarriers")],f.prototype,"readPolygonBarriers",null),(0,t._)([(0,l.Cb)({type:[U.Z]})],f.prototype,"serviceAreaPolylines",void 0),(0,t._)([(0,D.r)("serviceAreaPolylines",["saPolylines"])],f.prototype,"readIncidents",null),(0,t._)([(0,l.Cb)({type:[U.Z]})],f.prototype,"serviceAreaPolygons",void 0),(0,t._)([(0,D.r)("serviceAreaPolygons",["saPolygons"])],f.prototype,"readServiceAreaPolygons",null),f=(0,t._)([(0,h.j)("esri.rest.support.ServiceAreaSolveResult")],f);const Y=f,w=(0,y.E)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:o=>o.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});function u(){return(u=(0,A.Z)(function*(o,s,S){const E=[],C=[],B={},b={},x=(0,O.en)(o),{path:F}=x;s.facilities&&s.facilities.features&&(0,c.et)(s.facilities.features,C,"facilities.features",B),s.pointBarriers&&s.pointBarriers.features&&(0,c.et)(s.pointBarriers.features,C,"pointBarriers.features",B),s.polylineBarriers&&s.polylineBarriers.features&&(0,c.et)(s.polylineBarriers.features,C,"polylineBarriers.features",B),s.polygonBarriers&&s.polygonBarriers.features&&(0,c.et)(s.polygonBarriers.features,C,"polygonBarriers.features",B);const J=yield(0,r.aX)(C);for(const N in B){const _=B[N];E.push(N),b[N]=J.slice(_[0],_[1])}if((0,c.Wf)(b,E)){let N=null;try{N=yield(0,c.bI)(F,s.apiKey,S)}catch(_){}N&&!N.hasZ&&(0,c.ef)(b,E)}for(const N in b)b[N].forEach((_,K)=>{s.get(N)[K].geometry=_});const V=k($({},S),{query:k($($({},x.query),w.toQueryParams(s)),{f:"json"})}),{data:G}=yield(0,i.default)(`${F}/solveServiceArea`,V);return Y.fromJSON(G)})).apply(this,arguments)}var v=e(79308);let d=class extends v.Z{constructor(o){super(o),this.url=null}solve(o,s){return function m(o,s,S){return u.apply(this,arguments)}(this.url,o,s)}};(0,t._)([(0,l.Cb)()],d.prototype,"url",void 0),d=(0,t._)([(0,h.j)("esri.tasks.ServiceAreaTask")],d);const p=d}}]);