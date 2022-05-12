"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5506],{17867:(V,j,y)=>{y.d(j,{$:()=>O}),y(8314);var w=y(62208),d=y(81653),D=y(57596),p=y(67969),k=y(12610);class O{constructor(e,t,n,l,v=new Map){this._context=e,this._locations=l,this._uniformBlockBindings=v,this._refCount=1,this._compiled=!1,this._nameToUniformLocation={},this._nameToUniform1={},this._nameToUniform1v={},this._nameToUniform2={},this._nameToUniform3={},this._nameToUniform4={},this._nameToUniformMatrix3={},this._nameToUniformMatrix4={},e||console.error("RenderingContext isn't initialized!"),0===t.length&&console.error("Shaders source should not be empty!"),this._context.type===D.zO.WEBGL2&&(t=(0,k.F)(t,p.Ho.VERTEX_SHADER),n=(0,k.F)(n,p.Ho.FRAGMENT_SHADER)),this._vShader=L(this._context,p.Ho.VERTEX_SHADER,t),this._fShader=L(this._context,p.Ho.FRAGMENT_SHADER,n),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(p._g.Shader,this),(0,d.CG)()&&(this.vertexShader=t,this.fragmentShader=n)}get glName(){if((0,w.pC)(this._glName))return this._glName;if((0,w.Wi)(this._vShader))return null;const e=this._context.gl,t=e.createProgram();if(e.attachShader(t,this._vShader),e.attachShader(t,this._fShader),this._locations.forEach((n,l)=>e.bindAttribLocation(t,n,l)),e.linkProgram(t),(0,d.CG)()&&!e.getProgramParameter(t,e.LINK_STATUS)&&console.error(`Could not link shader\nvalidated: ${e.getProgramParameter(t,e.VALIDATE_STATUS)}, gl error ${e.getError()}, vertex: ${e.getShaderParameter(this._vShader,e.COMPILE_STATUS)}, fragment: ${e.getShaderParameter(this._fShader,e.COMPILE_STATUS)}, info log: ${e.getProgramInfoLog(t)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`),this._context.type===D.zO.WEBGL2){const n=e;for(const[l,v]of this._uniformBlockBindings){const S=n.getUniformBlockIndex(t,l);S<4294967295&&n.uniformBlockBinding(t,S,v)}}return this._glName=t,this._context.instanceCounter.increment(p._g.Program,this),t}get hasGLName(){return(0,w.pC)(this._glName)}get isCompiled(){if(this._compiled)return!0;const e=this._context.gl.getExtension("KHR_parallel_shader_compile");return null==e?(this._compiled=!0,!0):(this._compiled=!!this._context.gl.getProgramParameter(this.glName,e.COMPLETION_STATUS_KHR),this._compiled)}dispose(){if(--this._refCount>0)return;const e=this._context.gl;this._vShader&&(e.deleteShader(this._vShader),this._vShader=null,this._context.instanceCounter.decrement(p._g.Shader,this)),this._fShader&&(e.deleteShader(this._fShader),this._fShader=null),this._glName&&(e.deleteProgram(this._glName),this._glName=null,this._context.instanceCounter.decrement(p._g.Program,this))}ref(){++this._refCount}_getUniformLocation(e){return void 0===this._nameToUniformLocation[e]&&(this._nameToUniformLocation[e]=this._context.gl.getUniformLocation(this.glName,e)),this._nameToUniformLocation[e]}hasUniform(e){return null!==this._getUniformLocation(e)}setUniform1i(e,t){const n=this._nameToUniform1[e];(void 0===n||t!==n)&&(this._context.gl.uniform1i(this._getUniformLocation(e),t),this._nameToUniform1[e]=t)}setUniform1iv(e,t){const n=this._nameToUniform1v[e];M(n,t)&&(this._context.gl.uniform1iv(this._getUniformLocation(e),t),void 0===n?this._nameToUniform1v[e]=Array.from(t):_(t,n))}setUniform2iv(e,t){const n=this._nameToUniform2[e];M(n,t)&&(this._context.gl.uniform2iv(this._getUniformLocation(e),t),void 0===n?this._nameToUniform2[e]=Array.from(t):_(t,n))}setUniform3iv(e,t){const n=this._nameToUniform3[e];M(n,t)&&(this._context.gl.uniform3iv(this._getUniformLocation(e),t),void 0===n?this._nameToUniform3[e]=Array.from(t):_(t,n))}setUniform4iv(e,t){const n=this._nameToUniform4[e];M(n,t)&&(this._context.gl.uniform4iv(this._getUniformLocation(e),t),void 0===n?this._nameToUniform4[e]=Array.from(t):_(t,n))}setUniform1f(e,t){const n=this._nameToUniform1[e];(void 0===n||t!==n)&&(this._context.gl.uniform1f(this._getUniformLocation(e),t),this._nameToUniform1[e]=t)}setUniform1fv(e,t){const n=this._nameToUniform1v[e];M(n,t)&&(this._context.gl.uniform1fv(this._getUniformLocation(e),t),void 0===n?this._nameToUniform1v[e]=Array.from(t):_(t,n))}setUniform2f(e,t,n){const l=this._nameToUniform2[e];(void 0===l||t!==l[0]||n!==l[1])&&(this._context.gl.uniform2f(this._getUniformLocation(e),t,n),void 0===l?this._nameToUniform2[e]=[t,n]:(l[0]=t,l[1]=n))}setUniform2fv(e,t){const n=this._nameToUniform2[e];M(n,t)&&(this._context.gl.uniform2fv(this._getUniformLocation(e),t),void 0===n?this._nameToUniform2[e]=Array.from(t):_(t,n))}setUniform3f(e,t,n,l){const v=this._nameToUniform3[e];(void 0===v||t!==v[0]||n!==v[1]||l!==v[2])&&(this._context.gl.uniform3f(this._getUniformLocation(e),t,n,l),void 0===v?this._nameToUniform3[e]=[t,n,l]:(v[0]=t,v[1]=n,v[2]=l))}setUniform3fv(e,t){const n=this._nameToUniform3[e];M(n,t)&&(this._context.gl.uniform3fv(this._getUniformLocation(e),t),void 0===n?this._nameToUniform3[e]=Array.from(t):_(t,n))}setUniform4f(e,t,n,l,v){const S=this._nameToUniform4[e];(void 0===S||t!==S[0]||n!==S[1]||l!==S[2]||v!==S[3])&&(this._context.gl.uniform4f(this._getUniformLocation(e),t,n,l,v),void 0===S?this._nameToUniform4[e]=[t,n,l,v]:(S[0]=t,S[1]=n,S[2]=l,S[3]=v))}setUniform4fv(e,t){const n=this._nameToUniform4[e];M(n,t)&&(this._context.gl.uniform4fv(this._getUniformLocation(e),t),void 0===n?this._nameToUniform4[e]=Array.from(t):_(t,n))}setUniformMatrix3fv(e,t,n=!1){const l=this._nameToUniformMatrix3[e];(function H(i,e){return!!(0,w.Wi)(i)||(9!==i.length?M(i,e):9!==i.length||i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]||i[3]!==e[3]||i[4]!==e[4]||i[5]!==e[5]||i[6]!==e[6]||i[7]!==e[7]||i[8]!==e[8])})(l,t)&&(this._context.gl.uniformMatrix3fv(this._getUniformLocation(e),n,t),void 0===l?this._nameToUniformMatrix3[e]=Array.from(t):_(t,l))}setUniformMatrix4fv(e,t,n=!1){const l=this._nameToUniformMatrix4[e];(function B(i,e){return!!(0,w.Wi)(i)||(16!==i.length?M(i,e):16!==i.length||i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]||i[3]!==e[3]||i[4]!==e[4]||i[5]!==e[5]||i[6]!==e[6]||i[7]!==e[7]||i[8]!==e[8]||i[9]!==e[9]||i[10]!==e[10]||i[11]!==e[11]||i[12]!==e[12]||i[13]!==e[13]||i[14]!==e[14]||i[15]!==e[15])})(l,t)&&(this._context.gl.uniformMatrix4fv(this._getUniformLocation(e),n,t),void 0===l?this._nameToUniformMatrix4[e]=Array.from(t):_(t,l))}stop(){}}function M(i,e){if((0,w.Wi)(i)||i.length!==e.length)return!0;for(let t=0;t<i.length;++t)if(i[t]!==e[t])return!0;return!1}function L(i,e,t){const n=i.gl,l=n.createShader(e);return n.shaderSource(l,t),n.compileShader(l),(0,d.CG)()&&!n.getShaderParameter(l,n.COMPILE_STATUS)&&(console.error("Compile error in ".concat(e===p.Ho.VERTEX_SHADER?"vertex":"fragment"," shader")),console.error(n.getShaderInfoLog(l)),console.error(function A(i){let e=2;return i.replace(/\n/g,()=>"\n"+function N(i){return i>=1e3?i.toString():("  "+i).slice(-3)}(e++)+":")}(t)),i.type===D.zO.WEBGL2&&(console.log("Shader source before transpilation:"),console.log(t))),l}function _(i,e){for(let t=0;t<i.length;++t)e[t]=i[t]}},94299:(V,j,y)=>{y.d(j,{H:()=>w});var F=y(17867);function w(d,D,p=""){return new F.$(d,p+D.shaders.vertexShader,p+D.shaders.fragmentShader,D.attributes)}},7423:(V,j,y)=>{y.d(j,{B:()=>F});class F{constructor(d){this.readFile=d}resolveIncludes(d){return this._resolve(d)}_resolve(d,D=new Map){if(D.has(d))return D.get(d);const p=this._read(d);if(!p)throw new Error(`cannot find shader file ${d}`);const k=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let b=k.exec(p);const O=[];for(;null!=b;)O.push({path:b[1],start:b.index,length:b[0].length}),b=k.exec(p);let M=0,L="";return O.forEach(A=>{L+=p.slice(M,A.start),L+=D.has(A.path)?"":this._resolve(A.path,D),M=A.start+A.length}),L+=p.slice(M),D.set(d,L),L}_read(d){return this.readFile(d)}}},12610:(V,j,y)=>{y.d(j,{F:()=>me}),y(8314);var w=y(62208),d=y(67969);const D=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"];var p,k={exports:{}};void 0!==(p=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])&&(k.exports=p);const b=k.exports;var a,M={exports:{}};void 0!==(a=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"])&&(M.exports=a);const L=M.exports;var f,A={exports:{}};void 0!==(f=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"])&&(A.exports=f);const N=A.exports;var _=999,te=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function ne(r){return function oe(r){var a=function re(){var r,a,f,o=0,h=0,c=_,s=[],E=[],u=1,m=0,g=0,T=!1,C=!1,U="";return function(x){return E=[],null!==x?function de(x){var R;for(o=0,f=(U+=x).length;r=U[o],o<f;){switch(R=o,c){case 0:o="/"===r&&"*"===a?(s.push(r),P(s.join("")),c=_,o+1):(s.push(r),a=r,o+1);break;case 1:case 2:o=J();break;case 3:o=Te();break;case 4:o="."===r||/[eE]/.test(r)?(s.push(r),c=5,a=r,o+1):"x"===r&&1===s.length&&"0"===s[0]?(c=11,s.push(r),a=r,o+1):/[^\d]/.test(r)?(P(s.join("")),c=_,o):(s.push(r),a=r,o+1);break;case 11:o=/[^a-fA-F0-9]/.test(r)?(P(s.join("")),c=_,o):(s.push(r),a=r,o+1);break;case 5:"f"===r&&(s.push(r),a=r,o+=1),o=/[eE]/.test(r)||"-"===r&&/[eE]/.test(a)?(s.push(r),a=r,o+1):/[^\d]/.test(r)?(P(s.join("")),c=_,o):(s.push(r),a=r,o+1);break;case 9999:o=De();break;case 9:o=/[^\s]/g.test(r)?(P(s.join("")),c=_,o):(s.push(r),a=r,o+1);break;case _:s=s.length?[]:s,o="/"===a&&"*"===r?(g=h+o-1,c=0,a=r,o+1):"/"===a&&"/"===r?(g=h+o-1,c=1,a=r,o+1):"#"===r?(c=2,g=h+o,o):/\s/.test(r)?(c=9,g=h+o,o):(T=/\d/.test(r),C=/[^\w_]/.test(r),g=h+o,c=T?4:C?3:9999,o)}R!==o&&("\n"===U[R]?(m=0,++u):++m)}return h+=o,U=U.slice(o),E}(x.replace?x.replace(/\r\n/g,"\n"):x):function _e(x){return s.length&&P(s.join("")),c=10,P("(eof)"),E}()};function P(x){x.length&&E.push({type:te[c],data:x,position:g,line:u,column:m})}function J(){return"\r"!==r&&"\n"!==r||"\\"===a?(s.push(r),a=r,o+1):(P(s.join("")),c=_,o)}function Te(){if("."===a&&/\d/.test(r))return c=5,o;if("/"===a&&"*"===r)return c=0,o;if("/"===a&&"/"===r)return c=1,o;if("."===r&&s.length){for(;W(s););return c=5,o}if(";"===r||")"===r||"("===r){if(s.length)for(;W(s););return P(r),c=_,o+1}var x=2===s.length&&"="!==r;if(/[\w_\d\s]/.test(r)||x){for(;W(s););return c=_,o}return s.push(r),a=r,o+1}function W(x){for(var R,G,Y=0;;){if(R=L.indexOf(x.slice(0,x.length+Y).join("")),G=L[R],-1===R){if(Y--+x.length>0)continue;G=x.slice(0,1).join("")}return P(G),g+=G.length,(s=s.slice(G.length)).length}}function De(){if(/[^\d\w_]/.test(r)){var x=s.join("");return c=b.indexOf(x)>-1?8:N.indexOf(x)>-1?7:6,P(s.join("")),c=_,o}return s.push(r),a=r,o+1}}(),f=[];return(f=f.concat(a(r))).concat(a(null))}(r)}const X=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];function se(r,a){for(let f=a-1;f>=0;f--){const o=r[f];if("whitespace"!==o.type&&"block-comment"!==o.type){if("keyword"!==o.type)break;if("attribute"===o.data||"in"===o.data)return!0}}return!1}function I(r,a,f,o){o=o||f;for(const h of r)if("ident"===h.type&&h.data===f)return o in a?a[o]++:a[o]=0,I(r,a,o+"_"+a[o],o);return f}function z(r,a,f="afterVersion"){function o(u,m){for(let g=m;g<u.length;g++){const T=u[g];if("operator"===T.type&&";"===T.data)return g}return null}const c={data:"\n",type:"whitespace"},s=u=>u<r.length&&/[^\r\n]$/.test(r[u].data);let E=function h(u){let m=-1,g=0,T=-1;for(let C=0;C<u.length;C++){const U=u[C];if("preprocessor"===U.type&&(U.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++g:U.data.match(/\#endif\s*.*/)&&--g),"afterVersion"!==f&&"afterPrecision"!==f||"preprocessor"===U.type&&/^#version/.test(U.data)&&(T=Math.max(T,C)),"afterPrecision"===f&&"keyword"===U.type&&"precision"===U.data){const P=o(u,C);if(null===P)throw new Error("precision statement not followed by any semicolons!");T=Math.max(T,P)}m<T&&0===g&&(m=C)}return m+1}(r);s(E-1)&&r.splice(E++,0,c);for(const u of a)r.splice(E++,0,u);s(E-1)&&s(E)&&r.splice(E,0,c)}function le(r,a,f,o="lowp"){z(r,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:o},{type:"whitespace",data:" "},{type:"keyword",data:f},{type:"whitespace",data:" "},{type:"ident",data:a},{type:"operator",data:";"}],"afterPrecision")}function ce(r,a,f,o,h="lowp"){z(r,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:o.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:h},{type:"whitespace",data:" "},{type:"keyword",data:f},{type:"whitespace",data:" "},{type:"ident",data:a},{type:"operator",data:";"}],"afterPrecision")}function fe(r,a){let f,o,h=-1;for(let c=a;c<r.length;c++){const s=r[c];if("operator"===s.type&&("["===s.data&&(f=c),"]"===s.data)){o=c;break}"integer"===s.type&&(h=parseInt(s.data,10))}return f&&o&&r.splice(f,o-f+1),h}function me(r,a){const f=function ue(r){return Q_enableCache?Z.get(r):null}(r);if((0,w.pC)(f))return f;const o=ne(r);if("300 es"===function ie(r,a="100",f="300 es"){const o=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const h of r)if("preprocessor"===h.type){const c=o.exec(h.data);if(c){const s=c[1].replace(/\s\s+/g," ");if(s===f)return s;if(s===a)return h.data="#version "+f,a;throw new Error("unknown glsl version: "+s)}}return r.splice(0,0,{type:"preprocessor",data:"#version "+f},{type:"whitespace",data:"\n"}),null}(o,"100","300 es"))return r;let h=null,c=null;const s={},E={};for(let u=0;u<o.length;++u){const m=o[u];switch(m.type){case"keyword":a===d.Ho.VERTEX_SHADER&&"attribute"===m.data?m.data="in":"varying"===m.data&&(m.data=a===d.Ho.VERTEX_SHADER?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(m.data.trim())&&(m.data=m.data.replace(/(2D|Cube|EXT)/g,"")),a===d.Ho.FRAGMENT_SHADER&&"gl_FragColor"===m.data&&(h||(h=I(o,s,"fragColor"),le(o,h,"vec4")),m.data=h),a===d.Ho.FRAGMENT_SHADER&&"gl_FragData"===m.data){const g=fe(o,u+1),T=I(o,s,"fragData");ce(o,T,"vec4",g,"mediump"),m.data=T}else a===d.Ho.FRAGMENT_SHADER&&"gl_FragDepthEXT"===m.data&&(c||(c=I(o,s,"gl_FragDepth")),m.data=c);break;case"ident":if(D.indexOf(m.data)>=0){if(a===d.Ho.VERTEX_SHADER&&se(o,u))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");m.data in E||(E[m.data]=I(o,s,m.data)),m.data=E[m.data]}}}for(let u=o.length-1;u>=0;--u){const m=o[u];if("preprocessor"===m.type){const g=m.data.match(/\#extension\s+(.*)\:/);if(g&&g[1]&&X.indexOf(g[1].trim())>=0){const U=o[u+1];o.splice(u,U&&"whitespace"===U.type?2:1)}const T=m.data.match(/\#ifdef\s+(.*)/);T&&T[1]&&X.indexOf(T[1].trim())>=0&&(m.data="#if 1");const C=m.data.match(/\#ifndef\s+(.*)/);C&&C[1]&&X.indexOf(C[1].trim())>=0&&(m.data="#if 0")}}return function he(r,a){return Q_enableCache&&Z.set(r,a),a}(r,function ae(r){return r.map(a=>"eof"!==a.type?a.data:"").join("")}(o))}const Q_enableCache=!1,Z=new Map}}]);