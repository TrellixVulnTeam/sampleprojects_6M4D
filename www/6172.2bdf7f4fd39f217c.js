"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6172],{78260:(ct,K,v)=>{function Y(i){return"h"in i&&"s"in i&&"v"in i}function E(i){return"l"in i&&"a"in i&&"b"in i}function L(i){return"l"in i&&"c"in i&&"h"in i}v.d(K,{_Y:()=>c,Y3:()=>H,sJ:()=>rt,xr:()=>y});const ot=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],W=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function C(i,l){const s=[];let u,p;if(i[0].length!==l.length)throw"dimensions do not match";const x=i.length,w=i[0].length;let A=0;for(u=0;u<x;u++){for(A=0,p=0;p<w;p++)A+=i[u][p]*l[p];s.push(A)}return s}function D(i){const l=[i.r/255,i.g/255,i.b/255].map(u=>u<=.04045?u/12.92:((u+.055)/1.055)**2.4),s=C(ot,l);return{x:100*s[0],y:100*s[1],z:100*s[2]}}function M(i){const l=C(W,[i.x/100,i.y/100,i.z/100]).map(s=>Math.min(1,Math.max(s<=.0031308?12.92*s:1.055*s**.4166666666666667-.055,0)));return{r:Math.round(255*l[0]),g:Math.round(255*l[1]),b:Math.round(255*l[2])}}function X(i){const l=[i.x/95.047,i.y/100,i.z/108.883].map(s=>s>.008856451679035631?s**.3333333333333333:7.787037037037035*s+.13793103448275862);return{l:116*l[1]-16,a:500*(l[0]-l[1]),b:200*(l[1]-l[2])}}function q(i){const l=i.l,s=[(l+16)/116+i.a/500,(l+16)/116,(l+16)/116-i.b/200].map(u=>u>6/29?u**3:3*(6/29)**2*(u-4/29));return{x:95.047*s[0],y:100*s[1],z:108.883*s[2]}}function y(i){return function R(i){return"r"in i&&"g"in i&&"b"in i}(i)?i:L(i)?function tt(i){return M(q(function _(i){const s=i.c,u=i.h;return{l:i.l,a:s*Math.cos(u),b:s*Math.sin(u)}}(i)))}(i):E(i)?function P(i){return M(q(i))}(i):function B(i){return"x"in i&&"y"in i&&"z"in i}(i)?M(i):Y(i)?function et(i){const l=(i.h+360)%360/60,u=i.v/100*255,p=u*(i.s/100),x=p*(1-Math.abs(l%2-1));let w;switch(Math.floor(l)){case 0:w={r:p,g:x,b:0};break;case 1:w={r:x,g:p,b:0};break;case 2:w={r:0,g:p,b:x};break;case 3:w={r:0,g:x,b:p};break;case 4:w={r:x,g:0,b:p};break;case 5:case 6:w={r:p,g:0,b:x};break;default:w={r:0,g:0,b:0}}return w.r=Math.round(w.r+u-p),w.g=Math.round(w.g+u-p),w.b=Math.round(w.b+u-p),w}(i):i}function c(i){return Y(i)?i:function nt(i){const l=i.r,s=i.g,u=i.b,p=Math.max(l,s,u),x=p-Math.min(l,s,u);let w=p,A=0===x?0:p===l?(s-u)/x%6:p===s?(u-l)/x+2:(l-s)/x+4,Q=0===x?0:x/w;return A<0&&(A+=6),A*=60,Q*=100,w*=100/255,{h:A,s:Q,v:w}}(y(i))}function H(i){return E(i)?i:function O(i){return X(D(i))}(y(i))}function rt(i){return L(i)?i:function J(i){return function d(i){const l=i.l,s=i.a,u=i.b,p=Math.sqrt(s*s+u*u);let x=Math.atan2(u,s);return x=x>0?x:x+2*Math.PI,{l,c:p,h:x}}(X(D(i)))}(y(i))}},6172:(ct,K,v)=>{v.d(K,{w:()=>wt,r:()=>jt});var R=v(24263),Y=v(84792),E=v(78260),L=v(26584),B=v(8314),W=(v(50645),v(62996)),C=v(91558),D=v(12225),M=v(31478),d=(v(38570),v(63290),v(94450));let O=0,P=0;const J=(0,B.Z)("android"),tt=(0,B.Z)("chrome")||J&&J>=4?"auto":"optimizeLegibility",nt={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7,z:0},et=/([A-DF-Za-df-z])|([-+]?\d*[.]?\d+(?:[eE][-+]?\d+)?)/g;let y={},c={};const H={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]},rt=Math.PI;let at=1;function N(t,n){const e=t*(rt/180);return Math.abs(n*Math.sin(e))+Math.abs(n*Math.cos(e))}function i(t){return t.map(n=>`${n.command} ${n.values.join(" ")}`).join(" ").trim()}function l(t,n,e,r){if(t){if("circle"===t.type)return(0,d.u)("circle",{fill:n,"fill-rule":"evenodd",stroke:e.color,"stroke-width":e.width,"stroke-linecap":e.cap,"stroke-linejoin":e.join,"stroke-dasharray":e.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,r:t.r});if("ellipse"===t.type)return(0,d.u)("ellipse",{fill:n,"fill-rule":"evenodd",stroke:e.color,"stroke-width":e.width,"stroke-linecap":e.cap,"stroke-linejoin":e.join,"stroke-dasharray":e.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,rx:t.rx,ry:t.ry});if("rect"===t.type)return(0,d.u)("rect",{fill:n,"fill-rule":"evenodd",stroke:e.color,"stroke-width":e.width,"stroke-linecap":e.cap,"stroke-linejoin":e.join,"stroke-dasharray":e.dashArray,"stroke-miterlimit":"4",x:t.x,y:t.y,width:t.width,height:t.height});if("image"===t.type)return(0,d.u)("image",{href:t.src,x:t.x,y:t.y,width:t.width,height:t.height,preserveAspectRatio:"none"});if("path"===t.type){const a="string"!=typeof t.path?i(t.path):t.path;return(0,d.u)("path",{fill:n,"fill-rule":"evenodd",stroke:e.color,"stroke-width":e.width,"stroke-linecap":e.cap,"stroke-linejoin":e.join,"stroke-dasharray":e.dashArray,"stroke-miterlimit":"4",d:a})}if("text"===t.type)return(0,d.u)("text",{fill:n,"fill-rule":"evenodd",stroke:e.color,"stroke-width":e.width,"stroke-linecap":e.cap,"stroke-linejoin":e.join,"stroke-dasharray":e.dashArray,"stroke-miterlimit":"4","text-anchor":r.align,"text-decoration":r.decoration,kerning:r.kerning,rotate:r.rotate,"text-rendering":tt,"font-style":r.font.style,"font-variant":r.font.variant,"font-weight":r.font.weight,"font-size":r.font.size,"font-family":r.font.family,x:t.x,y:t.y},t.text)}return null}function s(t){const n={fill:"none",pattern:null,linearGradient:null};if(t)if("type"in t&&"pattern"===t.type){const e="patternId-"+ ++O;n.fill=`url(#${e})`,n.pattern={id:e,x:t.x,y:t.y,width:t.width,height:t.height,image:{x:0,y:0,width:t.width,height:t.height,href:t.src}}}else if("type"in t&&"linear"===t.type){const e="linearGradientId-"+ ++P;n.fill=`url(#${e})`,n.linearGradient={id:e,x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2,stops:t.colors.map(r=>({offset:r.offset,color:r.color&&new C.Z(r.color).toString()}))}}else if(t){const e=new C.Z(t);n.fill=e.toString()}return n}function u(t){const n={color:"none",width:1,cap:"butt",join:"4",dashArray:"none"};if(t&&(null!=t.width&&(n.width=t.width),t.cap&&(n.cap=t.cap),t.join&&(n.join=t.join.toString()),t.color&&(n.color=new C.Z(t.color).toString()),t.style)){let e=null;if(t.style in H&&(e=H[t.style]),Array.isArray(e)){e=e.slice(0);for(let r=0;r<e.length;++r)e[r]*=t.width;if("butt"!==t.cap){for(let r=0;r<e.length;r+=2)e[r]-=t.width,e[r]<1&&(e[r]=1);for(let r=1;r<e.length;r+=2)e[r]+=t.width}e=e.join(",")}n.dashArray=e}return n}function p(t,n){const e={align:null,decoration:null,kerning:null,rotate:null,font:{style:null,variant:null,weight:null,size:null,family:null}};return t&&(e.align=t.align,e.decoration=t.decoration,e.kerning=t.kerning?"auto":"0",e.rotate=t.rotated?"90":"0",e.font.style=n.style||"normal",e.font.variant=n.variant||"normal",e.font.weight=n.weight||"normal",e.font.size=n.size&&n.size.toString()||"10pt",e.font.family=n.family||"serif"),e}function x(t){const{pattern:n,linearGradient:e}=t;if(n)return(0,d.u)("pattern",{id:n.id,patternUnits:"userSpaceOnUse",x:n.x,y:n.y,width:n.width,height:n.height},(0,d.u)("image",{x:n.image.x,y:n.image.y,width:n.image.width,height:n.image.height,href:n.image.href}));if(e){const r=e.stops.map((a,o)=>(0,d.u)("stop",{key:`${o}-stop`,offset:a.offset,"stop-color":a.color}));return(0,d.u)("linearGradient",{id:e.id,gradientUnits:"userSpaceOnUse",x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2},r)}return null}function w(t,n,e){return(0,M.t)(t,(0,M.c)(t),[n,e])}function A(t,n,e,r,a){return(0,M.s)(t,(0,M.c)(t),[n,e]),t[4]=t[4]*n-r*n+r,t[5]=t[5]*e-a*e+a,t}function j(t,n){y&&"left"in y?(y.left>t&&(y.left=t),y.right<t&&(y.right=t),y.top>n&&(y.top=n),y.bottom<n&&(y.bottom=n)):y={left:t,bottom:n,right:t,top:n}}function st(t){const n=t.args,e=n.length;let r;switch(t.action){case"M":case"L":case"C":case"S":case"Q":case"T":for(r=0;r<e;r+=2)j(n[r],n[r+1]);c.x=n[e-2],c.y=n[e-1];break;case"H":for(r=0;r<e;++r)j(n[r],c.y);c.x=n[e-1];break;case"V":for(r=0;r<e;++r)j(c.x,n[r]);c.y=n[e-1];break;case"m":{let a=0;for(("x"in c||(j(c.x=n[0],c.y=n[1]),a=2),r=a);r<e;r+=2)j(c.x+=n[r],c.y+=n[r+1]);break}case"l":case"t":for(r=0;r<e;r+=2)j(c.x+=n[r],c.y+=n[r+1]);break;case"h":for(r=0;r<e;++r)j(c.x+=n[r],c.y);break;case"v":for(r=0;r<e;++r)j(c.x,c.y+=n[r]);break;case"c":for(r=0;r<e;r+=6)j(c.x+n[r],c.y+n[r+1]),j(c.x+n[r+2],c.y+n[r+3]),j(c.x+=n[r+4],c.y+=n[r+5]);break;case"s":case"q":for(r=0;r<e;r+=4)j(c.x+n[r],c.y+n[r+1]),j(c.x+=n[r+2],c.y+=n[r+3]);break;case"A":for(r=0;r<e;r+=7)j(n[r+5],n[r+6]);c.x=n[e-2],c.y=n[e-1];break;case"a":for(r=0;r<e;r+=7)j(c.x+=n[r+5],c.y+=n[r+6])}}function lt(t,n,e){const r=nt[t.toLowerCase()];let a;"number"==typeof r&&(r?n.length>=r&&(a={action:t,args:n.slice(0,n.length-n.length%r)},e.push(a),st(a)):(a={action:t,args:[]},e.push(a),st(a)))}function ft(t){const n={x:0,y:0,width:0,height:0};if("circle"===t.type)n.x=t.cx-t.r,n.y=t.cy-t.r,n.width=2*t.r,n.height=2*t.r;else if("ellipse"===t.type)n.x=t.cx-t.rx,n.y=t.cy-t.ry,n.width=2*t.rx,n.height=2*t.ry;else if("image"===t.type||"rect"===t.type)n.x=t.x,n.y=t.y,n.width=t.width,n.height=t.height;else if("path"===t.type){const e=function ut(t){const n=("string"!=typeof t.path?i(t.path):t.path).match(et),e=[];if(y={},c={},!n)return null;let r="",a=[];const o=n.length;for(let g=0;g<o;++g){const f=n[g],k=parseFloat(f);isNaN(k)?(r&&lt(r,a,e),a=[],r=f):a.push(k)}lt(r,a,e);const h={x:0,y:0,width:0,height:0};return y&&"left"in y&&(h.x=y.left,h.y=y.top,h.width=y.right-y.left,h.height=y.bottom-y.top),h}(t);n.x=e.x,n.y=e.y,n.width=e.width,n.height=e.height}return n}function dt(t){const n={x:0,y:0,width:0,height:0};let e=null,r=Number.NEGATIVE_INFINITY,a=Number.NEGATIVE_INFINITY;for(const o of t)e?(e.x=Math.min(e.x,o.x),e.y=Math.min(e.y,o.y),r=Math.max(r,o.x+o.width),a=Math.max(a,o.y+o.height)):(e=n,e.x=o.x,e.y=o.y,r=o.x+o.width,a=o.y+o.height);return e&&(e.width=r-e.x,e.height=a-e.y),e}function gt(t,n,e,r,a,o,h,g,f){let k=(h&&o?N(o,n):n)/2,$=(h&&o?N(o,e):e)/2;if(f){const I=f[0],U=f[1];k=(h&&o?N(o,I):I)/2,$=(h&&o?N(o,U):U)/2}const b=t.width+r,z=t.height+r,S=(0,D.c)(),m=(0,D.c)();let F=!1;if(a&&0!==b&&0!==z){const I=n!==e?n/e:b/z,U=n>e?n:e;let G=1,Z=1;isNaN(U)||(I>1?(G=U/b,Z=U/I/z):(Z=U/z,G=U*I/b)),(0,M.m)(m,m,A(S,G,Z,k,$)),F=!0}const T=t.x+(b-r)/2,V=t.y+(z-r)/2;if((0,M.m)(m,m,w(S,k-T,$-V)),!F&&(b>n||z>e)){const I=b/n>z/e,U=(I?n:e)/(I?b:z);(0,M.m)(m,m,A(S,U,U,T,V))}return o&&(0,M.m)(m,m,function Q(t,n,e,r){const a=n%360*Math.PI/180;(0,M.r)(t,(0,M.c)(t),a);const o=Math.cos(a),h=Math.sin(a),g=t[4],f=t[5];return t[4]=g*o-f*h+r*h-e*o+e,t[5]=f*o+g*h-e*h-r*o+r,t}(S,o,T,V)),g&&(0,M.m)(m,m,w(S,g[0],g[1])),`matrix(${m[0]},${m[1]},${m[2]},${m[3]},${m[4]},${m[5]})`}function pt(t,n,e,r){const a=[],o=[],h=++at,g=function yt(t,n,e){const r=null==t?void 0:t.effects.find(k=>"bloom"===k.type);if(!r)return null;const{strength:a,radius:o}=r,h=a>0?o:0,g=(a+h)*n,f=4*a+1;return(0,d.u)("filter",{id:`bloom${e}`,x:"-100%",y:"-100%",width:"300%",height:"300%",filterUnits:"userSpaceOnUse"},(0,d.u)("feMorphology",{operator:"dilate",radius:(a+.5*h)*(5**(n/100)*(.4+n/100)),in:"SourceGraphic",result:"dilate"}),(0,d.u)("feGaussianBlur",{in:"dilate",stdDeviation:g/25,result:"blur"}),(0,d.u)("feGaussianBlur",{in:"blur",stdDeviation:g/50,result:"intensityBlur"}),(0,d.u)("feComponentTransfer",{in:"SourceGraphic",result:"intensityBrightness"},(0,d.u)("feFuncR",{type:"linear",slope:f}),(0,d.u)("feFuncG",{type:"linear",slope:f}),(0,d.u)("feFuncB",{type:"linear",slope:f})),(0,d.u)("feMerge",null,(0,d.u)("feMergeNode",{in:"intensityBlur"}),(0,d.u)("feMergeNode",{in:"intensityBrightness"}),(0,d.u)("feGaussianBlur",{stdDeviation:a/10})))}(null==r?void 0:r.effectView,n,h);let f=null;if(g){var k;const $=null==r||null==(k=r.effectView)?void 0:k.effects.find(m=>"bloom"===m.type),b=($.strength?$.strength+$.radius/2:0)/3,S=e+e*b;f=[Math.max(n+n*b,10),Math.max(S,10)]}for(const $ of t){const b=[],z=[];let S=0,m=0,F=0;for(const V of $){const{shape:I,fill:U,stroke:G,font:Z,offset:it}=V;S+=G&&G.width||0;const ht=s(U),zt=u(G),$t="text"===I.type?p(I,Z):null;a.push(x(ht)),b.push(l(I,ht.fill,zt,$t)),z.push(ft(I)),it&&(m+=it[0],F+=it[1])}const T=gt(dt(z),n,e,S,null==r?void 0:r.scale,null==r?void 0:r.rotation,null==r?void 0:r.useRotationSize,[m,F],f);o.push((0,d.u)("g",{transform:T},b))}return null!=r&&r.useRotationSize&&null!=r&&r.rotation&&(n=N(null==r?void 0:r.rotation,n),e=N(null==r?void 0:r.rotation,e)),g&&(n=f[0],e=f[1]),(0,d.u)("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:e,style:"display: block;"},g,(0,d.u)("defs",null,a),g?(0,d.u)("g",{filter:`url(#bloom${h})`},o):o)}var mt=v(86606);const xt=(0,W.E)();function wt(t,n,e){const r=Math.ceil(n[0]),a=Math.ceil(n[1]);if(!t.some(h=>!!h.length))return null;const o=e&&e.node||document.createElement("div");return null!=e.opacity&&(o.style.opacity=e.opacity.toString()),null!=e.effectView&&(o.style.filter=(0,mt.wJ)(e.effectView)),xt.append(o,pt.bind(null,t,r,a,e)),o}function Mt(t,n,e,r,a){switch(a){case"multiply":t[n+0]*=e[0],t[n+1]*=e[1],t[n+2]*=e[2],t[n+3]*=e[3];break;default:{const o=(0,E._Y)({r:t[n+0],g:t[n+1],b:t[n+2]});o.h=r.h,o.s=r.s,o.v=o.v/100*r.v;const h=(0,E.xr)(o);t[n+0]=h.r,t[n+1]=h.g,t[n+2]=h.b,t[n+3]*=e[3];break}}}function jt(t,n,e,r,a){return function bt(t,n,e){return t?(0,Y.default)(t,{responseType:"image"}).then(r=>{const a=r.data,o=a.width,h=a.height,g=o/h;let f=n;if(e){const k=Math.max(o,h);f=Math.min(f,k)}return{image:a,width:g<=1?Math.ceil(f*g):f,height:g<=1?f:Math.ceil(f/g)}}):Promise.reject(new L.Z("renderUtils: imageDataSize","href not provided."))}(t,n,a).then(o=>{const h=o.width?o.width:n,g=o.height?o.height:n;if(o.image&&function vt(t,n){return!(!t||"ignore"===n||"multiply"===n&&255===t.r&&255===t.g&&255===t.b&&1===t.a)}(e,r)){let f=o.image.width,k=o.image.height;(0,B.Z)("edge")&&/\.svg$/i.test(t)&&(f-=1,k-=1);const $=function kt(t,n){t=Math.ceil(t),n=Math.ceil(n);const e=document.createElement("canvas");e.width=t,e.height=n,e.style.width=t+"px",e.style.height=n+"px";const r=e.getContext("2d");return r.clearRect(0,0,t,n),r}(h,g);$.drawImage(o.image,0,0,f,k,0,0,h,g);const b=$.getImageData(0,0,h,g),z=[e.r/255,e.g/255,e.b/255,e.a],S=(0,E._Y)(e);for(let m=0;m<b.data.length;m+=4)Mt(b.data,m,z,S,r);$.putImageData(b,0,0),t=$.canvas.toDataURL("image/png")}else{const f=R.id&&R.id.findCredential(t);if(f&&f.token){const k=-1===t.indexOf("?")?"?":"&";t=`${t}${k}token=${f.token}`}}return{url:t,width:h,height:g}}).catch(function(){return{url:t,width:n,height:n}})}}}]);