"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4821],{11915:(z,P,w)=>{w.d(P,{e:()=>I});var N,h,g={exports:{}};N=g,void 0!==(h=function(){function O(t,e,n){n=n||2;var r,i,u,a,o,m,s,R=e&&e.length,E=R?e[0]*n:t.length,c=_(t,0,E,n,!0),p=[];if(!c||c.next===c.prev)return p;if(R&&(c=function U(t,e,n,r){var i,u,a,o=[];for(i=0,u=e.length;i<u;i++)(a=_(t,e[i]*r,i<u-1?e[i+1]*r:t.length,r,!1))===a.next&&(a.steiner=!0),o.push(Q(a));for(o.sort(H),i=0;i<o.length;i++)n=T(n=Y(o[i],n),n.next);return n}(t,e,c,n)),t.length>80*n){r=u=t[0],i=a=t[1];for(var f=n;f<E;f+=n)(o=t[f])<r&&(r=o),(m=t[f+1])<i&&(i=m),o>u&&(u=o),m>a&&(a=m);s=0!==(s=Math.max(u-r,a-i))?1/s:0}return v(c,p,n,r,i,s),p}function _(t,e,n,r,i){var u,a;if(i===K(t,e,n,r)>0)for(u=e;u<n;u+=r)a=J(u,t[u],t[u+1],a);else for(u=n-r;u>=e;u-=r)a=J(u,t[u],t[u+1],a);if(a&&D(a,a.next)){var o=a.next;C(a),a=o}return a}function T(t,e){if(!t)return t;e||(e=t);var n,r=t;do{if(n=!1,r.steiner||!D(r,r.next)&&0!==x(r.prev,r,r.next))r=r.next;else{var i=r.prev;if(C(r),(r=e=i)===r.next)break;n=!0}}while(n||r!==e);return e}function v(t,e,n,r,i,u,a){if(t){!a&&u&&function L(t,e,n,r){var i=t;do{null===i.z&&(i.z=W(i.x,i.y,e,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,function A(t){var e,n,r,i,u,a,o,m,s=1;do{for(n=t,t=null,u=null,a=0;n;){for(a++,r=n,o=0,e=0;e<s&&(o++,r=r.nextZ);e++);for(m=s;o>0||m>0&&r;)0!==o&&(0===m||!r||n.z<=r.z)?(i=n,n=n.nextZ,o--):(i=r,r=r.nextZ,m--),u?u.nextZ=i:t=i,i.prevZ=u,u=i;n=r}u.nextZ=null,s*=2}while(a>1)}(i)}(t,r,i,u);for(var o,m,s=t;t.prev!==t.next;)if(o=t.prev,m=t.next,u?d(t,r,i,u):M(t))e.push(o.i/n),e.push(t.i/n),e.push(m.i/n),C(t),t=m.next,s=m.next;else if((t=m)===s){a?1===a?v(t=l(T(t),e,n),e,n,r,i,u,2):2===a&&F(t,e,n,r,i,u):v(T(t),e,n,r,i,u,1);break}}}function M(t){var e=t.prev,n=t,r=t.next;if(x(e,n,r)>=0)return!1;for(var i=t.next.next;i!==t.prev;){if(Z(e.x,e.y,n.x,n.y,r.x,r.y,i.x,i.y)&&x(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function d(t,e,n,r){var i=t.prev,u=t,a=t.next;if(x(i,u,a)>=0)return!1;for(var s=i.x>u.x?i.x>a.x?i.x:a.x:u.x>a.x?u.x:a.x,R=i.y>u.y?i.y>a.y?i.y:a.y:u.y>a.y?u.y:a.y,E=W(i.x<u.x?i.x<a.x?i.x:a.x:u.x<a.x?u.x:a.x,i.y<u.y?i.y<a.y?i.y:a.y:u.y<a.y?u.y:a.y,e,n,r),c=W(s,R,e,n,r),p=t.prevZ,f=t.nextZ;p&&p.z>=E&&f&&f.z<=c;){if(p!==t.prev&&p!==t.next&&Z(i.x,i.y,u.x,u.y,a.x,a.y,p.x,p.y)&&x(p.prev,p,p.next)>=0||(p=p.prevZ,f!==t.prev&&f!==t.next&&Z(i.x,i.y,u.x,u.y,a.x,a.y,f.x,f.y)&&x(f.prev,f,f.next)>=0))return!1;f=f.nextZ}for(;p&&p.z>=E;){if(p!==t.prev&&p!==t.next&&Z(i.x,i.y,u.x,u.y,a.x,a.y,p.x,p.y)&&x(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;f&&f.z<=c;){if(f!==t.prev&&f!==t.next&&Z(i.x,i.y,u.x,u.y,a.x,a.y,f.x,f.y)&&x(f.prev,f,f.next)>=0)return!1;f=f.nextZ}return!0}function l(t,e,n){var r=t;do{var i=r.prev,u=r.next.next;!D(i,u)&&q(i,r,r.next,u)&&k(i,u)&&k(u,i)&&(e.push(i.i/n),e.push(r.i/n),e.push(u.i/n),C(r),C(r.next),r=t=u),r=r.next}while(r!==t);return T(r)}function F(t,e,n,r,i,u){var a=t;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&$(a,o)){var m=X(a,o);return a=T(a,a.next),m=T(m,m.next),v(a,e,n,r,i,u),void v(m,e,n,r,i,u)}o=o.next}a=a.next}while(a!==t)}function H(t,e){return t.x-e.x}function B(t){if(t.next.prev===t)return t;let e=t;for(;;){const n=e.next;if(n.prev===e||n===e||n===t)break;e=n}return e}function Y(t,e){var n=function G(t,e){var n,r=e,i=t.x,u=t.y,a=-1/0;do{if(u<=r.y&&u>=r.next.y&&r.next.y!==r.y){var o=r.x+(u-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(o<=i&&o>a){if(a=o,o===i){if(u===r.y)return r;if(u===r.next.y)return r.next}n=r.x<r.next.x?r:r.next}}r=r.next}while(r!==e);if(!n)return null;if(i===a)return n;var m,s=n,R=n.x,E=n.y,c=1/0;r=n;do{i>=r.x&&r.x>=R&&i!==r.x&&Z(u<E?i:a,u,R,E,u<E?a:i,u,r.x,r.y)&&(m=Math.abs(u-r.y)/(i-r.x),k(r,t)&&(m<c||m===c&&(r.x>n.x||r.x===n.x&&y(n,r)))&&(n=r,c=m)),r=r.next}while(r!==s);return n}(t,e);if(!n)return e;var r=X(n,t),i=T(n,n.next);let u=B(r);return T(u,u.next),i=B(i),B(e===n?i:e)}function y(t,e){return x(t.prev,t,e.prev)<0&&x(e.next,t,t.next)<0}function W(t,e,n,r,i){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-n)*i)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-r)*i)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Q(t){var e=t,n=t;do{(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next}while(e!==t);return n}function Z(t,e,n,r,i,u,a,o){return(i-a)*(e-o)-(t-a)*(u-o)>=0&&(t-a)*(r-o)-(n-a)*(e-o)>=0&&(n-a)*(u-o)-(i-a)*(r-o)>=0}function $(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function tt(t,e){var n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&q(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}(t,e)&&(k(t,e)&&k(e,t)&&function et(t,e){var n=t,r=!1,i=(t.x+e.x)/2,u=(t.y+e.y)/2;do{n.y>u!=n.next.y>u&&n.next.y!==n.y&&i<(n.next.x-n.x)*(u-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==t);return r}(t,e)&&(x(t.prev,t,e.prev)||x(t,e.prev,e))||D(t,e)&&x(t.prev,t,t.next)>0&&x(e.prev,e,e.next)>0)}function x(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function D(t,e){return t.x===e.x&&t.y===e.y}function q(t,e,n,r){var i=V(x(t,e,n)),u=V(x(t,e,r)),a=V(x(n,r,t)),o=V(x(n,r,e));return i!==u&&a!==o||!(0!==i||!S(t,n,e))||!(0!==u||!S(t,r,e))||!(0!==a||!S(n,t,r))||!(0!==o||!S(n,e,r))}function S(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function V(t){return t>0?1:t<0?-1:0}function k(t,e){return x(t.prev,t,t.next)<0?x(t,e,t.next)>=0&&x(t,t.prev,e)>=0:x(t,e,t.prev)<0||x(t,t.next,e)<0}function X(t,e){var n=new j(t.i,t.x,t.y),r=new j(e.i,e.x,e.y),i=t.next,u=e.prev;return t.next=e,e.prev=t,n.next=i,i.prev=n,r.next=n,n.prev=r,u.next=r,r.prev=u,r}function J(t,e,n,r){var i=new j(t,e,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function C(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function j(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function K(t,e,n,r){for(var i=0,u=e,a=n-r;u<n;u+=r)i+=(t[a]-t[u])*(t[u+1]+t[a+1]),a=u;return i}return O.deviation=function(t,e,n,r){var i=e&&e.length,a=Math.abs(K(t,0,i?e[0]*n:t.length,n));if(i)for(var o=0,m=e.length;o<m;o++)a-=Math.abs(K(t,e[o]*n,o<m-1?e[o+1]*n:t.length,n));var E=0;for(o=0;o<r.length;o+=3){var c=r[o]*n,p=r[o+1]*n,f=r[o+2]*n;E+=Math.abs((t[c]-t[f])*(t[p+1]-t[c+1])-(t[c]-t[p])*(t[f+1]-t[c+1]))}return 0===a&&0===E?0:Math.abs((E-a)/a)},O.flatten=function(t){for(var e=t[0][0].length,n={vertices:[],holes:[],dimensions:e},r=0,i=0;i<t.length;i++){for(var u=0;u<t[i].length;u++)for(var a=0;a<e;a++)n.vertices.push(t[i][u][a]);i>0&&n.holes.push(r+=t[i-1].length)}return n},O}())&&(N.exports=h);const I=g.exports},47132:(z,P,w)=>{w.d(P,{PF:()=>b,Ts:()=>h,Bf:()=>N,nN:()=>g});const N=!0,b=32,h=1.5,g=200},1268:(z,P,w)=>{w.d(P,{aF:()=>I,f2:()=>d,fR:()=>b,nR:()=>_,R:()=>g,vL:()=>O,_5:()=>T,r1:()=>M,fD:()=>v,EE:()=>h});var b,h,g,I,O,_,T,v,M,l,N=w(7547);(l=b||(b={}))[l.BACKGROUND=0]="BACKGROUND",l[l.FILL=1]="FILL",l[l.LINE=2]="LINE",l[l.SYMBOL=3]="SYMBOL",l[l.CIRCLE=4]="CIRCLE",function(l){l[l.VISIBLE=0]="VISIBLE",l[l.NONE=1]="NONE"}(h||(h={})),function(l){l[l.POINT=0]="POINT",l[l.LINE=1]="LINE",l[l.LINE_CENTER=2]="LINE_CENTER"}(g||(g={})),function(l){l[l.MAP=0]="MAP",l[l.VIEWPORT=1]="VIEWPORT",l[l.AUTO=2]="AUTO"}(I||(I={})),function(l){l[l.AUTO=0]="AUTO",l[l.LEFT=1]="LEFT",l[l.CENTER=2]="CENTER",l[l.RIGHT=3]="RIGHT"}(O||(O={})),function(l){l[l.CENTER=0]="CENTER",l[l.LEFT=1]="LEFT",l[l.RIGHT=2]="RIGHT",l[l.TOP=3]="TOP",l[l.BOTTOM=4]="BOTTOM",l[l.TOP_LEFT=5]="TOP_LEFT",l[l.TOP_RIGHT=6]="TOP_RIGHT",l[l.BOTTOM_LEFT=7]="BOTTOM_LEFT",l[l.BOTTOM_RIGHT=8]="BOTTOM_RIGHT"}(_||(_={})),function(l){l[l.NONE=0]="NONE",l[l.UPPERCASE=1]="UPPERCASE",l[l.LOWERCASE=2]="LOWERCASE"}(T||(T={})),function(l){l[l.MAP=0]="MAP",l[l.VIEWPORT=1]="VIEWPORT"}(v||(v={})),function(l){l[l.HORIZONTAL=0]="HORIZONTAL",l[l.VERTICAL=1]="VERTICAL"}(M||(M={}));class d{}d.backgroundLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:h.VISIBLE}},d.fillLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:h.VISIBLE}},d.lineLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:h.VISIBLE},"line-cap":{type:"enum",values:["butt","round","square"],default:N.RL.BUTT},"line-join":{type:"enum",values:["bevel","round","miter"],default:N.AH.MITER},"line-miter-limit":{type:"number",default:2},"line-round-limit":{type:"number",default:1.05}},d.symbolLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:h.VISIBLE},"symbol-avoid-edges":{type:"boolean",default:!1},"symbol-placement":{type:"enum",values:["point","line","line-center"],default:g.POINT},"symbol-sort-key":{type:"number",default:-1},"symbol-spacing":{type:"number",minimum:1,default:250},"icon-allow-overlap":{type:"boolean",default:!1},"icon-anchor":{type:"enum",values:["center","left","right","top","bottom","top-left","top-right","bottom-left","bottom-right"],default:_.CENTER},"icon-ignore-placement":{type:"boolean",default:!1},"icon-image":{type:"string"},"icon-keep-upright":{type:"boolean",default:!1},"icon-offset":{type:"array",value:"number",length:2,default:[0,0]},"icon-optional":{type:"boolean",default:!1},"icon-padding":{type:"number",minimum:0,default:2},"icon-rotate":{type:"number",default:0},"icon-rotation-alignment":{type:"enum",values:["map","viewport","auto"],default:I.AUTO},"icon-size":{type:"number",minimum:0,default:1},"text-allow-overlap":{type:"boolean",default:!1},"text-anchor":{type:"enum",values:["center","left","right","top","bottom","top-left","top-right","bottom-left","bottom-right"],default:_.CENTER},"text-field":{type:"string"},"text-font":{type:"array",value:"string",default:["Open Sans Regular","Arial Unicode MS Regular"]},"text-ignore-placement":{type:"boolean",default:!1},"text-justify":{type:"enum",values:["auto","left","center","right"],default:O.CENTER},"text-keep-upright":{type:"boolean",default:!0},"text-letter-spacing":{type:"number",default:0},"text-line-height":{type:"number",default:1.2},"text-max-angle":{type:"number",minimum:0,default:45},"text-max-width":{type:"number",minimum:0,default:10},"text-offset":{type:"array",value:"number",length:2,default:[0,0]},"text-optional":{type:"boolean",default:!1},"text-padding":{type:"number",minimum:0,default:2},"text-rotate":{type:"number",default:0},"text-rotation-alignment":{type:"enum",values:["map","viewport","auto"],default:I.AUTO},"text-size":{type:"number",minimum:0,default:16},"text-transform":{type:"enum",values:["none","uppercase","lowercase"],default:T.NONE},"text-writing-mode":{type:"array",value:"enum",values:["horizontal","vertical"],default:[M.HORIZONTAL]}},d.circleLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:h.VISIBLE}},d.backgroundPaintDefinition={"background-color":{type:"color",default:[0,0,0,1]},"background-opacity":{type:"number",minimum:0,maximum:1,default:1},"background-pattern":{type:"string"}},d.fillPaintDefinition={"fill-antialias":{type:"boolean",default:!0},"fill-color":{type:"color",default:[0,0,0,1]},"fill-opacity":{type:"number",minimum:0,maximum:1,default:1},"fill-outline-color":{type:"color",default:[0,0,0,0]},"fill-pattern":{type:"string"},"fill-translate":{type:"array",value:"number",length:2,default:[0,0]},"fill-translate-anchor":{type:"enum",values:["map","viewport"],default:v.MAP}},d.linePaintDefinition={"line-blur":{type:"number",minimum:0,default:0},"line-color":{type:"color",default:[0,0,0,1]},"line-dasharray":{type:"array",value:"number",default:[]},"line-gap-width":{type:"number",minimum:0,default:0},"line-offset":{type:"number",default:0},"line-opacity":{type:"number",minimum:0,maximum:1,default:1},"line-pattern":{type:"string"},"line-translate":{type:"array",value:"number",length:2,default:[0,0]},"line-translate-anchor":{type:"enum",values:["map","viewport"],default:v.MAP},"line-width":{type:"number",minimum:0,default:1}},d.symbolPaintDefinition={"icon-color":{type:"color",default:[0,0,0,1]},"icon-halo-blur":{type:"number",minimum:0,default:0},"icon-halo-color":{type:"color",default:[0,0,0,0]},"icon-halo-width":{type:"number",minimum:0,default:0},"icon-opacity":{type:"number",minimum:0,maximum:1,default:1},"icon-translate":{type:"array",value:"number",length:2,default:[0,0]},"icon-translate-anchor":{type:"enum",values:["map","viewport"],default:v.MAP},"text-color":{type:"color",default:[0,0,0,1]},"text-halo-blur":{type:"number",minimum:0,default:0},"text-halo-color":{type:"color",default:[0,0,0,0]},"text-halo-width":{type:"number",minimum:0,default:0},"text-opacity":{type:"number",minimum:0,maximum:1,default:1},"text-translate":{type:"array",value:"number",length:2,default:[0,0]},"text-translate-anchor":{type:"enum",values:["map","viewport"],default:v.MAP}},d.rasterPaintDefinition={"raster-opacity":{type:"number",minimum:0,maximum:1,default:1},"raster-hue-rotate":{type:"number",default:0},"raster-brightness-min":{type:"number",minimum:0,maximum:1,default:0},"raster-brightness-max":{type:"number",minimum:0,maximum:1,default:1},"raster-saturation":{type:"number",minimum:-1,maximum:1,default:0},"raster-contrast":{type:"number",minimum:-1,maximum:1,default:0},"raster-fade-duration":{type:"number",minimum:0,default:300}},d.circlePaintDefinition={"circle-blur":{type:"number",minimum:0,default:0},"circle-color":{type:"color",default:[0,0,0,1]},"circle-opacity":{type:"number",minimum:0,maximum:1,default:1},"circle-radius":{type:"number",minimum:0,default:5},"circle-stroke-color":{type:"color",default:[0,0,0,1]},"circle-stroke-opacity":{type:"number",minimum:0,maximum:1,default:1},"circle-stroke-width":{type:"number",minimum:0,default:0},"circle-translate":{type:"array",value:"number",length:2,default:[0,0]},"circle-translate-anchor":{type:"enum",values:["map","viewport"],default:v.MAP}}},43289:(z,P,w)=>{w.d(P,{vX:()=>G,s5:()=>U,k3:()=>H,Or:()=>F});const I=128/Math.PI,d=1/Math.LN2;function l(y,L){return(y%=L)>=0?y:y+L}function F(y){return l(y*I,256)}function U(y){return l(.7111111111111111*y,256)}function H(y){return Math.log(y)*d}function G(y,L,A){return y>=L&&y<=A||y>=A&&y<=L}}}]);