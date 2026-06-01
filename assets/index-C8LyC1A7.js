(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var vr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(n,e){if(!n)throw Nt(e)},Nt=function(n){return new Error("Firebase Database ("+Ro.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ac=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},_s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,h=r>>2,d=(r&3)<<4|a>>4;let u=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(u=64)),i.push(t[h],t[d],t[u],t[p])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ao(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ac(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const d=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new Nc;const u=r<<2|a>>4;if(i.push(u),c!==64){const p=a<<4&240|c>>2;if(i.push(p),d!==64){const _=c<<6&192|d;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Nc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const No=function(n){const e=Ao(n);return _s.encodeByteArray(e,!0)},Mn=function(n){return No(n).replace(/\./g,"")},$n=function(n){try{return _s.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(n){return Po(void 0,n)}function Po(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Oc(t)||(n[t]=Po(n[t],e[t]));return n}function Oc(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc=()=>Lc().__FIREBASE_DEFAULTS__,Mc=()=>{if(typeof process>"u"||typeof vr>"u")return;const n=vr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$c=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&$n(n[1]);return e&&JSON.parse(e)},vs=()=>{try{return Dc()||Mc()||$c()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Oo=n=>{var e,t;return(t=(e=vs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Fc=n=>{const e=Oo(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Lo=()=>{var n;return(n=vs())===null||n===void 0?void 0:n.config},Do=n=>{var e;return(e=vs())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Mn(JSON.stringify(t)),Mn(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ys(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ne())}function Bc(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Mo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hc(){const n=ne();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function zc(){return Ro.NODE_ADMIN===!0}function jc(){try{return typeof indexedDB=="object"}catch{return!1}}function Wc(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="FirebaseError";class Xe extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Vc,Object.setPrototypeOf(this,Xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hn.prototype.create)}}class hn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Gc(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Xe(s,a,i)}}function Gc(n,e){return n.replace(Kc,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Kc=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(n){return JSON.parse(n)}function G(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Xt($n(r[0])||""),t=Xt($n(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Yc=function(n){const e=$o(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Qc=function(n){const e=$o(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ct(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ki(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Fn(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Un(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(yr(r)&&yr(o)){if(!Un(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function yr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)i[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const u=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(u<<1|u>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):d<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const u=(s<<5|s>>>27)+c+l+h+i[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=u}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Xc(n,e){const t=new Zc(n,e);return t.subscribe.bind(t)}class Zc{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");ed(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Li),s.error===void 0&&(s.error=Li),s.complete===void 0&&(s.complete=Li);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ed(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Li(){}function di(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,b(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ui=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(n){return n&&n._delegate?n._delegate:n}class rt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new un;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sd(e))try{this.getOrInitializeService({instanceIdentifier:tt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=tt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tt){return this.instances.has(e)}getOptions(e=tt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:id(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=tt){return this.component?this.component.multipleInstances?e:tt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function id(n){return n===tt?void 0:n}function sd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new nd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const od={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},ad=B.INFO,ld={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},cd=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=ld[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bs{constructor(e){this.name=e,this._logLevel=ad,this._logHandler=cd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?od[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const dd=(n,e)=>e.some(t=>n instanceof t);let br,wr;function ud(){return br||(br=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hd(){return wr||(wr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fo=new WeakMap,Yi=new WeakMap,Uo=new WeakMap,Di=new WeakMap,ws=new WeakMap;function fd(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(He(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Fo.set(t,n)}).catch(()=>{}),ws.set(e,n),e}function pd(n){if(Yi.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Yi.set(n,e)}let Qi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Yi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Uo.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return He(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function md(n){Qi=n(Qi)}function gd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Mi(this),e,...t);return Uo.set(i,e.sort?e.sort():[e]),He(i)}:hd().includes(n)?function(...e){return n.apply(Mi(this),e),He(Fo.get(this))}:function(...e){return He(n.apply(Mi(this),e))}}function _d(n){return typeof n=="function"?gd(n):(n instanceof IDBTransaction&&pd(n),dd(n,ud())?new Proxy(n,Qi):n)}function He(n){if(n instanceof IDBRequest)return fd(n);if(Di.has(n))return Di.get(n);const e=_d(n);return e!==n&&(Di.set(n,e),ws.set(e,n)),e}const Mi=n=>ws.get(n);function vd(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=He(o);return i&&o.addEventListener("upgradeneeded",l=>{i(He(o.result),l.oldVersion,l.newVersion,He(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const yd=["get","getKey","getAll","getAllKeys","count"],bd=["put","add","delete","clear"],$i=new Map;function Er(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($i.get(e))return $i.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=bd.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||yd.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return $i.set(e,r),r}md(n=>({...n,get:(e,t,i)=>Er(e,t)||n.get(e,t,i),has:(e,t)=>!!Er(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ed(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Ed(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ji="@firebase/app",Cr="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=new bs("@firebase/app"),Cd="@firebase/app-compat",xd="@firebase/analytics-compat",Id="@firebase/analytics",Sd="@firebase/app-check-compat",Td="@firebase/app-check",kd="@firebase/auth",Rd="@firebase/auth-compat",Ad="@firebase/database",Nd="@firebase/data-connect",Pd="@firebase/database-compat",Od="@firebase/functions",Ld="@firebase/functions-compat",Dd="@firebase/installations",Md="@firebase/installations-compat",$d="@firebase/messaging",Fd="@firebase/messaging-compat",Ud="@firebase/performance",Bd="@firebase/performance-compat",qd="@firebase/remote-config",Hd="@firebase/remote-config-compat",zd="@firebase/storage",jd="@firebase/storage-compat",Wd="@firebase/firestore",Vd="@firebase/vertexai-preview",Gd="@firebase/firestore-compat",Kd="firebase",Yd="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi="[DEFAULT]",Qd={[Ji]:"fire-core",[Cd]:"fire-core-compat",[Id]:"fire-analytics",[xd]:"fire-analytics-compat",[Td]:"fire-app-check",[Sd]:"fire-app-check-compat",[kd]:"fire-auth",[Rd]:"fire-auth-compat",[Ad]:"fire-rtdb",[Nd]:"fire-data-connect",[Pd]:"fire-rtdb-compat",[Od]:"fire-fn",[Ld]:"fire-fn-compat",[Dd]:"fire-iid",[Md]:"fire-iid-compat",[$d]:"fire-fcm",[Fd]:"fire-fcm-compat",[Ud]:"fire-perf",[Bd]:"fire-perf-compat",[qd]:"fire-rc",[Hd]:"fire-rc-compat",[zd]:"fire-gcs",[jd]:"fire-gcs-compat",[Wd]:"fire-fst",[Gd]:"fire-fst-compat",[Vd]:"fire-vertex","fire-js":"fire-js",[Kd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new Map,Jd=new Map,Zi=new Map;function xr(n,e){try{n.container.addComponent(e)}catch(t){Te.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function xt(n){const e=n.name;if(Zi.has(e))return Te.debug(`There were multiple attempts to register component ${e}.`),!1;Zi.set(e,n);for(const t of Bn.values())xr(t,n);for(const t of Jd.values())xr(t,n);return!0}function Es(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function be(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ze=new hn("app","Firebase",Xd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ze.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=Yd;function Bo(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Xi,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw ze.create("bad-app-name",{appName:String(s)});if(t||(t=Lo()),!t)throw ze.create("no-options");const r=Bn.get(s);if(r){if(Un(t,r.options)&&Un(i,r.config))return r;throw ze.create("duplicate-app",{appName:s})}const o=new rd(s);for(const l of Zi.values())o.addComponent(l);const a=new Zd(t,i,o);return Bn.set(s,a),a}function qo(n=Xi){const e=Bn.get(n);if(!e&&n===Xi&&Lo())return Bo();if(!e)throw ze.create("no-app",{appName:n});return e}function je(n,e,t){var i;let s=(i=Qd[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Te.warn(a.join(" "));return}xt(new rt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="firebase-heartbeat-database",tu=1,Zt="firebase-heartbeat-store";let Fi=null;function Ho(){return Fi||(Fi=vd(eu,tu,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Zt)}catch(t){console.warn(t)}}}}).catch(n=>{throw ze.create("idb-open",{originalErrorMessage:n.message})})),Fi}async function nu(n){try{const t=(await Ho()).transaction(Zt),i=await t.objectStore(Zt).get(zo(n));return await t.done,i}catch(e){if(e instanceof Xe)Te.warn(e.message);else{const t=ze.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Te.warn(t.message)}}}async function Ir(n,e){try{const i=(await Ho()).transaction(Zt,"readwrite");await i.objectStore(Zt).put(e,zo(n)),await i.done}catch(t){if(t instanceof Xe)Te.warn(t.message);else{const i=ze.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Te.warn(i.message)}}}function zo(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=1024,su=30*24*60*60*1e3;class ru{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new au(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Sr();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=su}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Te.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Sr(),{heartbeatsToSend:i,unsentEntries:s}=ou(this._heartbeatsCache.heartbeats),r=Mn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Te.warn(t),""}}}function Sr(){return new Date().toISOString().substring(0,10)}function ou(n,e=iu){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Tr(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Tr(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class au{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jc()?Wc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await nu(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ir(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ir(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Tr(n){return Mn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(n){xt(new rt("platform-logger",e=>new wd(e),"PRIVATE")),xt(new rt("heartbeat",e=>new ru(e),"PRIVATE")),je(Ji,Cr,n),je(Ji,Cr,"esm2017"),je("fire-js","")}lu("");var cu="firebase",du="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */je(cu,du,"app");function Cs(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function jo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uu=jo,Wo=new hn("auth","Firebase",jo());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new bs("@firebase/auth");function hu(n,...e){qn.logLevel<=B.WARN&&qn.warn(`Auth (${Ot}): ${n}`,...e)}function Rn(n,...e){qn.logLevel<=B.ERROR&&qn.error(`Auth (${Ot}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(n,...e){throw xs(n,...e)}function pe(n,...e){return xs(n,...e)}function Vo(n,e,t){const i=Object.assign(Object.assign({},uu()),{[e]:t});return new hn("auth","Firebase",i).create(e,{appName:n.name})}function We(n){return Vo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xs(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Wo.create(n,...e)}function P(n,e,...t){if(!n)throw xs(e,...t)}function we(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Rn(e),new Error(e)}function Re(n,e){n||we(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function fu(){return kr()==="http:"||kr()==="https:"}function kr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fu()||qc()||"connection"in navigator)?navigator.onLine:!0}function mu(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Re(t>e,"Short delay should be less than long delay!"),this.isMobile=ys()||Mo()}get(){return pu()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(n,e){Re(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;we("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;we("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;we("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=new fn(3e4,6e4);function hi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Lt(n,e,t,i,s={}){return Ko(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Pt(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:l},r);return Bc()||(c.referrerPolicy="no-referrer"),Go.fetch()(Qo(n,n.config.apiHost,t,a),c)})}async function Ko(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},gu),e);try{const s=new vu(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Sn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sn(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Sn(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Sn(n,"user-disabled",o);const h=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Vo(n,h,c);ke(n,h)}}catch(s){if(s instanceof Xe)throw s;ke(n,"network-request-failed",{message:String(s)})}}async function Yo(n,e,t,i,s={}){const r=await Lt(n,e,t,i,s);return"mfaPendingCredential"in r&&ke(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Qo(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Is(n.config,s):`${n.config.apiScheme}://${s}`}class vu{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(pe(this.auth,"network-request-failed")),_u.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Sn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=pe(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yu(n,e){return Lt(n,"POST","/v1/accounts:delete",e)}async function Jo(n,e){return Lt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bu(n,e=!1){const t=oe(n),i=await t.getIdToken(e),s=Ss(i);P(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Wt(Ui(s.auth_time)),issuedAtTime:Wt(Ui(s.iat)),expirationTime:Wt(Ui(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ui(n){return Number(n)*1e3}function Ss(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Rn("JWT malformed, contained fewer than 3 sections"),null;try{const s=$n(t);return s?JSON.parse(s):(Rn("Failed to decode base64 JWT payload"),null)}catch(s){return Rn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Rr(n){const e=Ss(n);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Xe&&wu(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function wu({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wt(this.lastLoginAt),this.creationTime=Wt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(n){var e;const t=n.auth,i=await n.getIdToken(),s=await en(n,Jo(t,{idToken:i}));P(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Xo(r.providerUserInfo):[],a=xu(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ts(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,d)}async function Cu(n){const e=oe(n);await Hn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xu(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Xo(n){return n.map(e=>{var{providerId:t}=e,i=Cs(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iu(n,e){const t=await Ko(n,{},async()=>{const i=Pt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=Qo(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Go.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Su(n,e){return Lt(n,"POST","/v2/accounts:revokeToken",hi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){P(e.length!==0,"internal-error");const t=Rr(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(P(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Iu(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new vt;return i&&(P(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(P(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(P(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vt,this.toJSON())}_performRefresh(){return we("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(n,e){P(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ee{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Cs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Eu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ts(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await en(this,this.stsTokenManager.getToken(this.auth,e));return P(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return bu(this,e)}reload(){return Cu(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ee(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Hn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(be(this.auth.app))return Promise.reject(We(this.auth));const e=await this.getIdToken();return await en(this,yu(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,h;const d=(i=t.displayName)!==null&&i!==void 0?i:void 0,u=(s=t.email)!==null&&s!==void 0?s:void 0,p=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=t.photoURL)!==null&&o!==void 0?o:void 0,f=(a=t.tenantId)!==null&&a!==void 0?a:void 0,w=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,k=(c=t.createdAt)!==null&&c!==void 0?c:void 0,C=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:E,emailVerified:O,isAnonymous:y,providerData:A,stsTokenManager:m}=t;P(E&&m,e,"internal-error");const g=vt.fromJSON(this.name,m);P(typeof E=="string",e,"internal-error"),Me(d,e.name),Me(u,e.name),P(typeof O=="boolean",e,"internal-error"),P(typeof y=="boolean",e,"internal-error"),Me(p,e.name),Me(_,e.name),Me(f,e.name),Me(w,e.name),Me(k,e.name),Me(C,e.name);const T=new Ee({uid:E,auth:e,email:u,emailVerified:O,displayName:d,isAnonymous:y,photoURL:_,phoneNumber:p,tenantId:f,stsTokenManager:g,createdAt:k,lastLoginAt:C});return A&&Array.isArray(A)&&(T.providerData=A.map(v=>Object.assign({},v))),w&&(T._redirectEventId=w),T}static async _fromIdTokenResponse(e,t,i=!1){const s=new vt;s.updateFromServerResponse(t);const r=new Ee({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Hn(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];P(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Xo(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new vt;a.updateFromIdToken(i);const l=new Ee({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new ts(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Map;function Ce(n){Re(n instanceof Function,"Expected a class definition");let e=Ar.get(n);return e?(Re(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ar.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Zo.type="NONE";const Nr=Zo;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(n,e,t){return`firebase:${n}:${e}:${t}`}class yt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=An(this.userKey,s.apiKey,r),this.fullPersistenceKey=An("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ee._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new yt(Ce(Nr),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Ce(Nr);const o=An(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const h=await c._get(o);if(h){const d=Ee._fromJSON(e,h);c!==r&&(a=d),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new yt(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new yt(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ia(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ea(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ra(e))return"Blackberry";if(oa(e))return"Webos";if(ta(e))return"Safari";if((e.includes("chrome/")||na(e))&&!e.includes("edge/"))return"Chrome";if(sa(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function ea(n=ne()){return/firefox\//i.test(n)}function ta(n=ne()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function na(n=ne()){return/crios\//i.test(n)}function ia(n=ne()){return/iemobile/i.test(n)}function sa(n=ne()){return/android/i.test(n)}function ra(n=ne()){return/blackberry/i.test(n)}function oa(n=ne()){return/webos/i.test(n)}function Ts(n=ne()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Tu(n=ne()){var e;return Ts(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ku(){return Hc()&&document.documentMode===10}function aa(n=ne()){return Ts(n)||sa(n)||oa(n)||ra(n)||/windows phone/i.test(n)||ia(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(n,e=[]){let t;switch(n){case"Browser":t=Pr(ne());break;case"Worker":t=`${Pr(ne())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ot}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Au(n,e={}){return Lt(n,"GET","/v2/passwordPolicy",hi(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=6;class Pu{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Nu,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Or(this),this.idTokenSubscription=new Or(this),this.beforeStateQueue=new Ru(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ce(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await yt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Jo(this,{idToken:e}),i=await Ee._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(be(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Hn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mu()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(be(this.app))return Promise.reject(We(this));const t=e?oe(e):null;return t&&P(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return be(this.app)?Promise.reject(We(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return be(this.app)?Promise.reject(We(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ce(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Au(this),t=new Pu(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Su(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ce(e)||this._popupRedirectResolver;P(t,this,"argument-error"),this.redirectPersistenceManager=await yt.create(this,[Ce(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=la(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&hu(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function fi(n){return oe(n)}class Or{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xc(t=>this.observer=t)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Lu(n){ks=n}function Du(n){return ks.loadJS(n)}function Mu(){return ks.gapiScript}function $u(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(n,e){const t=Es(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Un(r,e??{}))return s;ke(s,"already-initialized")}return t.initialize({options:e})}function Uu(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Ce);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Bu(n,e,t){const i=fi(n);P(i._canInitEmulator,i,"emulator-config-failed"),P(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=ca(e),{host:o,port:a}=qu(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),Hu()}function ca(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function qu(n){const e=ca(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Lr(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Lr(o)}}}function Lr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Hu(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return we("not implemented")}_getIdTokenResponse(e){return we("not implemented")}_linkToIdToken(e,t){return we("not implemented")}_getReauthenticationResolver(e){return we("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bt(n,e){return Yo(n,"POST","/v1/accounts:signInWithIdp",hi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu="http://localhost";class ot extends da{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ot(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ke("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Cs(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new ot(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return bt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,bt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,bt(e,t)}buildRequest(){const e={requestUri:zu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Pt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends ua{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends pn{constructor(){super("facebook.com")}static credential(e){return ot._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $e.credential(e.oauthAccessToken)}catch{return null}}}$e.FACEBOOK_SIGN_IN_METHOD="facebook.com";$e.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends pn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ot._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Fe.credential(t,i)}catch{return null}}}Fe.GOOGLE_SIGN_IN_METHOD="google.com";Fe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends pn{constructor(){super("github.com")}static credential(e){return ot._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ue.credential(e.oauthAccessToken)}catch{return null}}}Ue.GITHUB_SIGN_IN_METHOD="github.com";Ue.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends pn{constructor(){super("twitter.com")}static credential(e,t){return ot._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Be.credential(t,i)}catch{return null}}}Be.TWITTER_SIGN_IN_METHOD="twitter.com";Be.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ju(n,e){return Yo(n,"POST","/v1/accounts:signUp",hi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Ee._fromIdTokenResponse(e,i,s),o=Dr(i);return new Ke({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Dr(i);return new Ke({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Dr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wu(n){var e;if(be(n.app))return Promise.reject(We(n));const t=fi(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ke({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await ju(t,{returnSecureToken:!0}),s=await Ke._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Xe{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,zn.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new zn(e,t,i,s)}}function ha(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?zn._fromErrorAndOperation(n,r,e,i):r})}async function Vu(n,e,t=!1){const i=await en(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ke._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gu(n,e,t=!1){const{auth:i}=n;if(be(i.app))return Promise.reject(We(i));const s="reauthenticate";try{const r=await en(n,ha(i,s,e,n),t);P(r.idToken,i,"internal-error");const o=Ss(r.idToken);P(o,i,"internal-error");const{sub:a}=o;return P(n.uid===a,i,"user-mismatch"),Ke._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ke(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ku(n,e,t=!1){if(be(n.app))return Promise.reject(We(n));const i="signIn",s=await ha(n,i,e),r=await Ke._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}function Yu(n,e,t,i){return oe(n).onIdTokenChanged(e,t,i)}function Qu(n,e,t){return oe(n).beforeAuthStateChanged(e,t)}const jn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(jn,"1"),this.storage.removeItem(jn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=1e3,Xu=10;class pa extends fa{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=aa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);ku()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Xu):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Ju)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}pa.type="LOCAL";const Zu=pa;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma extends fa{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ma.type="SESSION";const ga=ma;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new pi(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await eh(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Rs("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const u=d;if(u.data.eventId===c)switch(u.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(u.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return window}function nh(n){me().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(){return typeof me().WorkerGlobalScope<"u"&&typeof me().importScripts=="function"}async function ih(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sh(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function rh(){return _a()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va="firebaseLocalStorageDb",oh=1,Wn="firebaseLocalStorage",ya="fbase_key";class mn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function mi(n,e){return n.transaction([Wn],e?"readwrite":"readonly").objectStore(Wn)}function ah(){const n=indexedDB.deleteDatabase(va);return new mn(n).toPromise()}function ns(){const n=indexedDB.open(va,oh);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Wn,{keyPath:ya})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Wn)?e(i):(i.close(),await ah(),e(await ns()))})})}async function Mr(n,e,t){const i=mi(n,!0).put({[ya]:e,value:t});return new mn(i).toPromise()}async function lh(n,e){const t=mi(n,!1).get(e),i=await new mn(t).toPromise();return i===void 0?null:i.value}function $r(n,e){const t=mi(n,!0).delete(e);return new mn(t).toPromise()}const ch=800,dh=3;class ba{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ns(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>dh)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _a()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pi._getInstance(rh()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ih(),!this.activeServiceWorker)return;this.sender=new th(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ns();return await Mr(e,jn,"1"),await $r(e,jn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Mr(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>lh(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$r(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=mi(s,!1).getAll();return new mn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ch)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ba.type="LOCAL";const uh=ba;new fn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(n,e){return e?Ce(e):(P(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As extends da{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return bt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return bt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function fh(n){return Ku(n.auth,new As(n),n.bypassAuthState)}function ph(n){const{auth:e,user:t}=n;return P(t,e,"internal-error"),Gu(t,new As(n),n.bypassAuthState)}async function mh(n){const{auth:e,user:t}=n;return P(t,e,"internal-error"),Vu(t,new As(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fh;case"linkViaPopup":case"linkViaRedirect":return mh;case"reauthViaPopup":case"reauthViaRedirect":return ph;default:ke(this.auth,"internal-error")}}resolve(e){Re(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Re(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=new fn(2e3,1e4);class mt extends wa{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,mt.currentPopupAction&&mt.currentPopupAction.cancel(),mt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){Re(this.filter.length===1,"Popup operations only handle one event");const e=Rs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(pe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gh.get())};e()}}mt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="pendingRedirect",Nn=new Map;class vh extends wa{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Nn.get(this.auth._key());if(!e){try{const i=await yh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Nn.set(this.auth._key(),e)}return this.bypassAuthState||Nn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yh(n,e){const t=Eh(e),i=wh(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function bh(n,e){Nn.set(n._key(),e)}function wh(n){return Ce(n._redirectPersistence)}function Eh(n){return An(_h,n.config.apiKey,n.name)}async function Ch(n,e,t=!1){if(be(n.app))return Promise.reject(We(n));const i=fi(n),s=hh(i,e),o=await new vh(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=10*60*1e3;class Ih{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Sh(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Ea(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(pe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xh&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fr(e))}saveEventToCache(e){this.cachedEventUids.add(Fr(e)),this.lastProcessedEventTime=Date.now()}}function Fr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ea({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Sh(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ea(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Th(n,e={}){return Lt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Rh=/^https?/;async function Ah(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Th(n);for(const t of e)try{if(Nh(t))return}catch{}ke(n,"unauthorized-domain")}function Nh(n){const e=es(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Rh.test(t))return!1;if(kh.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph=new fn(3e4,6e4);function Ur(){const n=me().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Oh(n){return new Promise((e,t)=>{var i,s,r;function o(){Ur(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ur(),t(pe(n,"network-request-failed"))},timeout:Ph.get()})}if(!((s=(i=me().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=me().gapi)===null||r===void 0)&&r.load)o();else{const a=$u("iframefcb");return me()[a]=()=>{gapi.load?o():t(pe(n,"network-request-failed"))},Du(`${Mu()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Pn=null,e})}let Pn=null;function Lh(n){return Pn=Pn||Oh(n),Pn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=new fn(5e3,15e3),Mh="__/auth/iframe",$h="emulator/auth/iframe",Fh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Uh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bh(n){const e=n.config;P(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Is(e,$h):`https://${n.config.authDomain}/${Mh}`,i={apiKey:e.apiKey,appName:n.name,v:Ot},s=Uh.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Pt(i).slice(1)}`}async function qh(n){const e=await Lh(n),t=me().gapi;return P(t,n,"internal-error"),e.open({where:document.body,url:Bh(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fh,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=pe(n,"network-request-failed"),a=me().setTimeout(()=>{r(o)},Dh.get());function l(){me().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zh=500,jh=600,Wh="_blank",Vh="http://localhost";class Br{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Gh(n,e,t,i=zh,s=jh){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Hh),{width:i.toString(),height:s.toString(),top:r,left:o}),c=ne().toLowerCase();t&&(a=na(c)?Wh:t),ea(c)&&(e=e||Vh,l.scrollbars="yes");const h=Object.entries(l).reduce((u,[p,_])=>`${u}${p}=${_},`,"");if(Tu(c)&&a!=="_self")return Kh(e||"",a),new Br(null);const d=window.open(e||"",a,h);P(d,n,"popup-blocked");try{d.focus()}catch{}return new Br(d)}function Kh(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh="__/auth/handler",Qh="emulator/auth/handler",Jh=encodeURIComponent("fac");async function qr(n,e,t,i,s,r){P(n.config.authDomain,n,"auth-domain-config-required"),P(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Ot,eventId:s};if(e instanceof ua){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ki(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof pn){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await n._getAppCheckToken(),c=l?`#${Jh}=${encodeURIComponent(l)}`:"";return`${Xh(n)}?${Pt(a).slice(1)}${c}`}function Xh({config:n}){return n.emulator?Is(n,Qh):`https://${n.authDomain}/${Yh}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="webStorageSupport";class Zh{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ga,this._completeRedirectFn=Ch,this._overrideRedirectResult=bh}async _openPopup(e,t,i,s){var r;Re((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await qr(e,t,i,es(),s);return Gh(e,o,Rs())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await qr(e,t,i,es(),s);return nh(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Re(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await qh(e),i=new Ih(e);return t.register("authEvent",s=>(P(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Bi,{type:Bi},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Bi];o!==void 0&&t(!!o),ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ah(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return aa()||ta()||Ts()}}const ef=Zh;var Hr="@firebase/auth",zr="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sf(n){xt(new rt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;P(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:la(n)},c=new Ou(i,s,r,l);return Uu(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),xt(new rt("auth-internal",e=>{const t=fi(e.getProvider("auth").getImmediate());return(i=>new tf(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),je(Hr,zr,nf(n)),je(Hr,zr,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=5*60,of=Do("authIdTokenMaxAge")||rf;let jr=null;const af=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>of)return;const s=t==null?void 0:t.token;jr!==s&&(jr=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function lf(n=qo()){const e=Es(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Fu(n,{popupRedirectResolver:ef,persistence:[uh,Zu,ga]}),i=Do("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=af(r.toString());Qu(t,o,()=>o(t.currentUser)),Yu(t,a=>o(a))}}const s=Oo("auth");return s&&Bu(t,`http://${s}`),t}function cf(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Lu({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=pe("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",cf().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sf("Browser");var Wr={};const Vr="@firebase/database",Gr="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ca="";function df(n){Ca=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),G(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Xt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ve(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new uf(e)}}catch{}return new hf},it=xa("localStorage"),ff=xa("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=new bs("@firebase/database"),pf=function(){let n=1;return function(){return n++}}(),Ia=function(n){const e=td(n),t=new Jc;t.update(e);const i=t.digest();return _s.encodeByteArray(i)},gn=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=gn.apply(null,i):typeof i=="object"?e+=G(i):e+=i,e+=" "}return e};let Vt=null,Kr=!0;const mf=function(n,e){b(!0,"Can't turn on custom loggers persistently."),wt.logLevel=B.VERBOSE,Vt=wt.log.bind(wt)},Q=function(...n){if(Kr===!0&&(Kr=!1,Vt===null&&ff.get("logging_enabled")===!0&&mf()),Vt){const e=gn.apply(null,n);Vt(e)}},_n=function(n){return function(...e){Q(n,...e)}},is=function(...n){const e="FIREBASE INTERNAL ERROR: "+gn(...n);wt.error(e)},Ae=function(...n){const e=`FIREBASE FATAL ERROR: ${gn(...n)}`;throw wt.error(e),new Error(e)},te=function(...n){const e="FIREBASE WARNING: "+gn(...n);wt.warn(e)},gf=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&te("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ns=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},_f=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},It="[MIN_NAME]",at="[MAX_NAME]",dt=function(n,e){if(n===e)return 0;if(n===It||e===at)return-1;if(e===It||n===at)return 1;{const t=Yr(n),i=Yr(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},vf=function(n,e){return n===e?0:n<e?-1:1},Bt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+G(e))},Ps=function(n){if(typeof n!="object"||n===null)return G(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=G(e[i]),t+=":",t+=Ps(n[e[i]]);return t+="}",t},Sa=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function J(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ta=function(n){b(!Ns(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const h=c.join("");let d="";for(l=0;l<64;l+=8){let u=parseInt(h.substr(l,8),2).toString(16);u.length===1&&(u="0"+u),d=d+u}return d.toLowerCase()},yf=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},bf=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function wf(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Ef=new RegExp("^-?(0*)\\d{1,10}$"),Cf=-2147483648,xf=2147483647,Yr=function(n){if(Ef.test(n)){const e=Number(n);if(e>=Cf&&e<=xf)return e}return null},Dt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw te("Exception was thrown by user callback.",t),e},Math.floor(0))}},If=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Gt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){te(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Q("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',te(e)}}class On{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}On.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="5",ka="v",Ra="s",Aa="r",Na="f",Pa=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Oa="ls",La="p",ss="ac",Da="websocket",Ma="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=it.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&it.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function kf(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Fa(n,e,t){b(typeof e=="string","typeof type must == string"),b(typeof t=="object","typeof params must == object");let i;if(e===Da)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Ma)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);kf(n)&&(t.ns=n.namespace);const s=[];return J(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(){this.counters_={}}incrementCounter(e,t=1){ve(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Pc(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi={},Hi={};function Ls(n){const e=n.toString();return qi[e]||(qi[e]=new Rf),qi[e]}function Af(n,e){const t=n.toString();return Hi[t]||(Hi[t]=e()),Hi[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Dt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="start",Pf="close",Of="pLPCommand",Lf="pRTLPCB",Ua="id",Ba="pw",qa="ser",Df="cb",Mf="seg",$f="ts",Ff="d",Uf="dframe",Ha=1870,za=30,Bf=Ha-za,qf=25e3,Hf=3e4;class gt{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_n(e),this.stats_=Ls(t),this.urlFn=l=>(this.appCheckToken&&(l[ss]=this.appCheckToken),Fa(t,Ma,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Nf(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Hf)),_f(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ds((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Qr)this.id=a,this.password=l;else if(o===Pf)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Qr]="t",i[qa]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Df]=this.scriptTagHolder.uniqueCallbackIdentifier),i[ka]=Os,this.transportSessionId&&(i[Ra]=this.transportSessionId),this.lastSessionId&&(i[Oa]=this.lastSessionId),this.applicationId&&(i[La]=this.applicationId),this.appCheckToken&&(i[ss]=this.appCheckToken),typeof location<"u"&&location.hostname&&Pa.test(location.hostname)&&(i[Aa]=Na);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){gt.forceAllow_=!0}static forceDisallow(){gt.forceDisallow_=!0}static isAvailable(){return gt.forceAllow_?!0:!gt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!yf()&&!bf()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=G(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=No(t),s=Sa(i,Bf);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Uf]="t",i[Ua]=e,i[Ba]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=G(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ds{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=pf(),window[Of+this.uniqueCallbackIdentifier]=e,window[Lf+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ds.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Q("frame writing exception"),a.stack&&Q(a.stack),Q(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Q("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ua]=this.myID,e[Ba]=this.myPW,e[qa]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+za+i.length<=Ha;){const o=this.pendingSegs.shift();i=i+"&"+Mf+s+"="+o.seg+"&"+$f+s+"="+o.ts+"&"+Ff+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(qf)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Q("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf=16384,jf=45e3;let Vn=null;typeof MozWebSocket<"u"?Vn=MozWebSocket:typeof WebSocket<"u"&&(Vn=WebSocket);class de{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_n(this.connId),this.stats_=Ls(t),this.connURL=de.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[ka]=Os,typeof location<"u"&&location.hostname&&Pa.test(location.hostname)&&(o[Aa]=Na),t&&(o[Ra]=t),i&&(o[Oa]=i),s&&(o[ss]=s),r&&(o[La]=r),Fa(e,Da,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,it.set("previous_websocket_failure",!0);try{let i;zc(),this.mySock=new Vn(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){de.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Vn!==null&&!de.forceDisallow_}static previouslyFailed(){return it.isInMemoryStorage||it.get("previous_websocket_failure")===!0}markConnectionHealthy(){it.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Xt(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=G(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Sa(t,zf);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(jf))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}de.responsesRequiredToBeHealthy=2;de.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[gt,de]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=de&&de.isAvailable();let i=t&&!de.previouslyFailed();if(e.webSocketOnly&&(t||te("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[de];else{const s=this.transports_=[];for(const r of tn.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);tn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}tn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=6e4,Vf=5e3,Gf=10*1024,Kf=100*1024,zi="t",Jr="d",Yf="s",Xr="r",Qf="e",Zr="o",eo="a",to="n",no="p",Jf="h";class Xf{constructor(e,t,i,s,r,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_n("c:"+this.id+":"),this.transportManager_=new tn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Gt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Kf?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Gf?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(zi in e){const t=e[zi];t===eo?this.upgradeIfSecondaryHealthy_():t===Xr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Zr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Bt("t",e),i=Bt("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:no,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:eo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:to,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Bt("t",e),i=Bt("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Bt(zi,e);if(Jr in e){const i=e[Jr];if(t===Jf){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===to){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Yf?this.onConnectionShutdown_(i):t===Xr?this.onReset_(i):t===Qf?is("Server Error: "+i):t===Zr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):is("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Os!==i&&te("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Gt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Wf))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Gt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Vf))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:no,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(it.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Wa{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ys()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Gn}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=32,so=768;class q{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function $(){return new q("")}function L(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ye(n){return n.pieces_.length-n.pieceNum_}function z(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new q(n.pieces_,e)}function Ms(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Zf(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function nn(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Va(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new q(e,0)}function j(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof q)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new q(t,0)}function M(n){return n.pieceNum_>=n.pieces_.length}function ee(n,e){const t=L(n),i=L(e);if(t===null)return e;if(t===i)return ee(z(n),z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function ep(n,e){const t=nn(n,0),i=nn(e,0);for(let s=0;s<t.length&&s<i.length;s++){const r=dt(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function $s(n,e){if(Ye(n)!==Ye(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function ae(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Ye(n)>Ye(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class tp{constructor(e,t){this.errorPrefix_=t,this.parts_=nn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ui(this.parts_[i]);Ga(this)}}function np(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ui(e),Ga(n)}function ip(n){const e=n.parts_.pop();n.byteLength_-=ui(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ga(n){if(n.byteLength_>so)throw new Error(n.errorPrefix_+"has a key path longer than "+so+" bytes ("+n.byteLength_+").");if(n.parts_.length>io)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+io+") or object contains a cycle "+nt(n))}function nt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs extends Wa{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Fs}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=1e3,sp=60*5*1e3,ro=30*1e3,rp=1.3,op=3e4,ap="server_kill",oo=3;class Ie extends ja{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ie.nextPersistentConnectionId_++,this.log_=_n("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=qt,this.maxReconnectDelay_=sp,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Fs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Gn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(G(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new un,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ie.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ve(e,"w")){const i=Ct(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();te(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Qc(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ro)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Yc(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+G(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):is("Unrecognized action received from server: "+G(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=qt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=qt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>op&&(this.reconnectDelay_=qt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*rp)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ie.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){b(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,u]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Q("getToken() completed but was canceled"):(Q("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=u&&u.token,a=new Xf(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,p=>{te(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(ap)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&te(d),l())}}}interrupt(e){Q("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Q("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ki(this.interruptReasons_)&&(this.reconnectDelay_=qt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Ps(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new q(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Q("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=oo&&(this.reconnectDelay_=ro,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Q("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=oo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ca.replace(/\./g,"-")]=1,ys()?e["framework.cordova"]=1:Mo()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Gn.getInstance().currentlyOnline();return Ki(this.interruptReasons_)&&e}}Ie.nextPersistentConnectionId_=0;Ie.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new D(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new D(It,e),s=new D(It,t);return this.compare(i,s)!==0}minPost(){return D.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tn;class Ka extends gi{static get __EMPTY_NODE(){return Tn}static set __EMPTY_NODE(e){Tn=e}compare(e,t){return dt(e.name,t.name)}isDefinedOn(e){throw Nt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return D.MIN}maxPost(){return new D(at,Tn)}makePost(e,t){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new D(e,Tn)}toString(){return".key"}}const Et=new Ka;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Y{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??Y.RED,this.left=s??ie.EMPTY_NODE,this.right=r??ie.EMPTY_NODE}copy(e,t,i,s,r){return new Y(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ie.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return ie.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Y.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Y.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Y.RED=!0;Y.BLACK=!1;class lp{copy(e,t,i,s,r){return this}insert(e,t,i){return new Y(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ie{constructor(e,t=ie.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ie(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Y.BLACK,null,null))}remove(e){return new ie(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Y.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new kn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new kn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new kn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new kn(this.root_,null,this.comparator_,!0,e)}}ie.EMPTY_NODE=new lp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(n,e){return dt(n.name,e.name)}function Us(n,e){return dt(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs;function dp(n){rs=n}const Ya=function(n){return typeof n=="number"?"number:"+Ta(n):"string:"+n},Qa=function(n){if(n.isLeafNode()){const e=n.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ve(e,".sv"),"Priority must be a string or number.")}else b(n===rs||n.isEmpty(),"priority of unexpected type.");b(n===rs||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao;class K{constructor(e,t=K.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Qa(this.priorityNode_)}static set __childrenNodeConstructor(e){ao=e}static get __childrenNodeConstructor(){return ao}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new K(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:K.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return M(e)?this:L(e)===".priority"?this.priorityNode_:K.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:K.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=L(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(b(i!==".priority"||Ye(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,K.__childrenNodeConstructor.EMPTY_NODE.updateChild(z(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ya(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ta(this.value_):e+=this.value_,this.lazyHash_=Ia(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===K.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof K.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=K.VALUE_TYPE_ORDER.indexOf(t),r=K.VALUE_TYPE_ORDER.indexOf(i);return b(s>=0,"Unknown leaf type: "+t),b(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}K.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ja,Xa;function up(n){Ja=n}function hp(n){Xa=n}class fp extends gi{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?dt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return D.MIN}maxPost(){return new D(at,new K("[PRIORITY-POST]",Xa))}makePost(e,t){const i=Ja(e);return new D(t,new K("[PRIORITY-POST]",i))}toString(){return".priority"}}const W=new fp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=Math.log(2);class mp{constructor(e){const t=r=>parseInt(Math.log(r)/pp,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Kn=function(n,e,t,i){n.sort(e);const s=function(l,c){const h=c-l;let d,u;if(h===0)return null;if(h===1)return d=n[l],u=t?t(d):d,new Y(u,d.node,Y.BLACK,null,null);{const p=parseInt(h/2,10)+l,_=s(l,p),f=s(p+1,c);return d=n[p],u=t?t(d):d,new Y(u,d.node,Y.BLACK,_,f)}},r=function(l){let c=null,h=null,d=n.length;const u=function(_,f){const w=d-_,k=d;d-=_;const C=s(w+1,k),E=n[w],O=t?t(E):E;p(new Y(O,E.node,f,null,C))},p=function(_){c?(c.left=_,c=_):(h=_,c=_)};for(let _=0;_<l.count;++_){const f=l.nextBitIsOne(),w=Math.pow(2,l.count-(_+1));f?u(w,Y.BLACK):(u(w,Y.BLACK),u(w,Y.RED))}return h},o=new mp(n.length),a=r(o);return new ie(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji;const ft={};class xe{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return b(ft&&W,"ChildrenNode.ts has not been loaded"),ji=ji||new xe({".priority":ft},{".priority":W}),ji}get(e){const t=Ct(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ie?t:null}hasIndex(e){return ve(this.indexSet_,e.toString())}addIndex(e,t){b(e!==Et,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(D.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Kn(i,e.getCompare()):a=ft;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new xe(h,c)}addToIndexes(e,t){const i=Fn(this.indexes_,(s,r)=>{const o=Ct(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),s===ft)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(D.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Kn(a,o.getCompare())}else return ft;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new D(e.name,a))),l.insert(e,e.node)}});return new xe(i,this.indexSet_)}removeFromIndexes(e,t){const i=Fn(this.indexes_,s=>{if(s===ft)return s;{const r=t.get(e.name);return r?s.remove(new D(e.name,r)):s}});return new xe(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ht;class N{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Qa(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ht||(Ht=new N(new ie(Us),null,xe.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ht}updatePriority(e){return this.children_.isEmpty()?this:new N(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ht:t}}getChild(e){const t=L(e);return t===null?this:this.getImmediateChild(t).getChild(z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(b(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new D(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Ht:this.priorityNode_;return new N(s,o,r)}}updateChild(e,t){const i=L(e);if(i===null)return t;{b(L(e)!==".priority"||Ye(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(z(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(W,(o,a)=>{t[o]=a.val(e),i++,r&&N.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ya(this.getPriority().val())+":"),this.forEachChild(W,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Ia(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new D(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new D(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new D(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,D.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,D.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vn?-1:0}withIndex(e){if(e===Et||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new N(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Et||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(W),s=t.getIterator(W);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Et?null:this.indexMap_.get(e.toString())}}N.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gp extends N{constructor(){super(new ie(Us),N.EMPTY_NODE,xe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return N.EMPTY_NODE}isEmpty(){return!1}}const vn=new gp;Object.defineProperties(D,{MIN:{value:new D(It,N.EMPTY_NODE)},MAX:{value:new D(at,vn)}});Ka.__EMPTY_NODE=N.EMPTY_NODE;K.__childrenNodeConstructor=N;dp(vn);hp(vn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=!0;function V(n,e=null){if(n===null)return N.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new K(t,V(e))}if(!(n instanceof Array)&&_p){const t=[];let i=!1;if(J(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=V(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new D(o,l)))}}),t.length===0)return N.EMPTY_NODE;const r=Kn(t,cp,o=>o.name,Us);if(i){const o=Kn(t,W.getCompare());return new N(r,V(e),new xe({".priority":o},{".priority":W}))}else return new N(r,V(e),xe.Default)}else{let t=N.EMPTY_NODE;return J(n,(i,s)=>{if(ve(n,i)&&i.substring(0,1)!=="."){const r=V(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(V(e))}}up(V);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp extends gi{constructor(e){super(),this.indexPath_=e,b(!M(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?dt(e.name,t.name):r}makePost(e,t){const i=V(e),s=N.EMPTY_NODE.updateChild(this.indexPath_,i);return new D(t,s)}maxPost(){const e=N.EMPTY_NODE.updateChild(this.indexPath_,vn);return new D(at,e)}toString(){return nn(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp extends gi{compare(e,t){const i=e.node.compareTo(t.node);return i===0?dt(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return D.MIN}maxPost(){return D.MAX}makePost(e,t){const i=V(e);return new D(t,i)}toString(){return".value"}}const bp=new yp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(n){return{type:"value",snapshotNode:n}}function St(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function sn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function rn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function wp(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(sn(t,a)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(St(t,i)):o.trackChildChange(rn(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(W,(s,r)=>{t.hasChild(s)||i.trackChildChange(sn(s,r))}),t.isLeafNode()||t.forEachChild(W,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(rn(s,r,o))}else i.trackChildChange(St(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?N.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.indexedFilter_=new Bs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=on.getStartPost_(e),this.endPost_=on.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new D(t,i))||(i=N.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=N.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(N.EMPTY_NODE);const r=this;return t.forEachChild(W,(o,a)=>{r.matches(new D(o,a))||(s=s.updateImmediateChild(o,N.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new on(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new D(t,i))||(i=N.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=N.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=N.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(N.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,N.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(u,p)=>d(p,u)}else o=this.index_.getCompare();const a=e;b(a.numChildren()===this.limit_,"");const l=new D(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const d=a.getImmediateChild(t);let u=s.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===t||a.hasChild(u.name));)u=s.getChildAfterChild(this.index_,u,this.reverse_);const p=u==null?1:o(u,l);if(h&&!i.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(rn(t,i,d)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(sn(t,d));const f=a.updateImmediateChild(t,N.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r!=null&&r.trackChildChange(St(u.name,u.node)),f.updateImmediateChild(u.name,u.node)):f}}else return i.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(sn(c.name,c.node)),r.trackChildChange(St(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,N.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=W}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:It}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:at}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===W}copy(){const e=new qs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Cp(n){return n.loadsAllData()?new Bs(n.getIndex()):n.hasLimit()?new Ep(n):new on(n)}function lo(n){const e={};if(n.isDefault())return e;let t;if(n.index_===W?t="$priority":n.index_===bp?t="$value":n.index_===Et?t="$key":(b(n.index_ instanceof vp,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=G(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=G(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+G(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=G(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+G(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function co(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==W&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends ja{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=_n("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Yn.getListenId_(e,i),a={};this.listens_[o]=a;const l=lo(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let d=h;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,i),Ct(this.listens_,o)===a){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",s(u,null)}})}unlisten(e,t){const i=Yn.getListenId_(e,t);delete this.listens_[i]}get(e){const t=lo(e._queryParams),i=e._path.toString(),s=new un;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Pt(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Xt(a.responseText)}catch{te("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&te("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(){this.rootNode_=N.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(){return{value:null,children:new Map}}function el(n,e,t){if(M(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=L(e);n.children.has(i)||n.children.set(i,Qn());const s=n.children.get(i);e=z(e),el(s,e,t)}}function os(n,e,t){n.value!==null?t(e,n.value):Ip(n,(i,s)=>{const r=new q(e.toString()+"/"+i);os(s,r,t)})}function Ip(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&J(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=10*1e3,Tp=30*1e3,kp=5*60*1e3;class Rp{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Sp(e);const i=uo+(Tp-uo)*Math.random();Gt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;J(e,(s,r)=>{r>0&&ve(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Gt(this.reportStats_.bind(this),Math.floor(Math.random()*2*kp))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ue||(ue={}));function Hs(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function js(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=ue.ACK_USER_WRITE,this.source=Hs()}operationForChild(e){if(M(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new q(e));return new Jn($(),t,this.revert)}}else return b(L(this.path)===e,"operationForChild called for unrelated child."),new Jn(z(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t){this.source=e,this.path=t,this.type=ue.LISTEN_COMPLETE}operationForChild(e){return M(this.path)?new an(this.source,$()):new an(this.source,z(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=ue.OVERWRITE}operationForChild(e){return M(this.path)?new lt(this.source,$(),this.snap.getImmediateChild(e)):new lt(this.source,z(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=ue.MERGE}operationForChild(e){if(M(this.path)){const t=this.children.subtree(new q(e));return t.isEmpty()?null:t.value?new lt(this.source,$(),t.value):new Tt(this.source,$(),t)}else return b(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Tt(this.source,z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(M(e))return this.isFullyInitialized()&&!this.filtered_;const t=L(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Np(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(wp(o.childName,o.snapshotNode))}),zt(n,s,"child_removed",e,i,t),zt(n,s,"child_added",e,i,t),zt(n,s,"child_moved",r,i,t),zt(n,s,"child_changed",e,i,t),zt(n,s,"value",e,i,t),s}function zt(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>Op(n,a,l)),o.forEach(a=>{const l=Pp(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Pp(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Op(n,e,t){if(e.childName==null||t.childName==null)throw Nt("Should only compare child_ events.");const i=new D(e.childName,e.snapshotNode),s=new D(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(n,e){return{eventCache:n,serverCache:e}}function Kt(n,e,t,i){return _i(new Qe(e,t,i),n.serverCache)}function tl(n,e,t,i){return _i(n.eventCache,new Qe(e,t,i))}function Xn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ct(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wi;const Lp=()=>(Wi||(Wi=new ie(vf)),Wi);class H{constructor(e,t=Lp()){this.value=e,this.children=t}static fromObject(e){let t=new H(null);return J(e,(i,s)=>{t=t.set(new q(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:$(),value:this.value};if(M(e))return null;{const i=L(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(z(e),t);return r!=null?{path:j(new q(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(M(e))return this;{const t=L(e),i=this.children.get(t);return i!==null?i.subtree(z(e)):new H(null)}}set(e,t){if(M(e))return new H(t,this.children);{const i=L(e),r=(this.children.get(i)||new H(null)).set(z(e),t),o=this.children.insert(i,r);return new H(this.value,o)}}remove(e){if(M(e))return this.children.isEmpty()?new H(null):new H(null,this.children);{const t=L(e),i=this.children.get(t);if(i){const s=i.remove(z(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new H(null):new H(this.value,r)}else return this}}get(e){if(M(e))return this.value;{const t=L(e),i=this.children.get(t);return i?i.get(z(e)):null}}setTree(e,t){if(M(e))return t;{const i=L(e),r=(this.children.get(i)||new H(null)).setTree(z(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new H(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(j(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,$(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(M(e))return null;{const r=L(e),o=this.children.get(r);return o?o.findOnPath_(z(e),j(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,$(),t)}foreachOnPath_(e,t,i){if(M(e))return this;{this.value&&i(t,this.value);const s=L(e),r=this.children.get(s);return r?r.foreachOnPath_(z(e),j(t,s),i):new H(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(j(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.writeTree_=e}static empty(){return new he(new H(null))}}function Yt(n,e,t){if(M(e))return new he(new H(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=ee(s,e);return r=r.updateChild(o,t),new he(n.writeTree_.set(s,r))}else{const s=new H(t),r=n.writeTree_.setTree(e,s);return new he(r)}}}function as(n,e,t){let i=n;return J(t,(s,r)=>{i=Yt(i,j(e,s),r)}),i}function ho(n,e){if(M(e))return he.empty();{const t=n.writeTree_.setTree(e,new H(null));return new he(t)}}function ls(n,e){return ut(n,e)!=null}function ut(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ee(t.path,e)):null}function fo(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(W,(i,s)=>{e.push(new D(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new D(i,s.value))}),e}function Ve(n,e){if(M(e))return n;{const t=ut(n,e);return t!=null?new he(new H(t)):new he(n.writeTree_.subtree(e))}}function cs(n){return n.writeTree_.isEmpty()}function kt(n,e){return nl($(),n.writeTree_,e)}function nl(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=nl(j(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(j(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(n,e){return ol(e,n)}function Dp(n,e,t,i,s){b(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Yt(n.visibleWrites,e,t)),n.lastWriteId=i}function Mp(n,e,t,i){b(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=as(n.visibleWrites,e,t),n.lastWriteId=i}function $p(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Fp(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);b(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Up(a,i.path)?s=!1:ae(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Bp(n),!0;if(i.snap)n.visibleWrites=ho(n.visibleWrites,i.path);else{const a=i.children;J(a,l=>{n.visibleWrites=ho(n.visibleWrites,j(i.path,l))})}return!0}else return!1}function Up(n,e){if(n.snap)return ae(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ae(j(n.path,t),e))return!0;return!1}function Bp(n){n.visibleWrites=il(n.allWrites,qp,$()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function qp(n){return n.visible}function il(n,e,t){let i=he.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)ae(t,o)?(a=ee(t,o),i=Yt(i,a,r.snap)):ae(o,t)&&(a=ee(o,t),i=Yt(i,$(),r.snap.getChild(a)));else if(r.children){if(ae(t,o))a=ee(t,o),i=as(i,a,r.children);else if(ae(o,t))if(a=ee(o,t),M(a))i=as(i,$(),r.children);else{const l=Ct(r.children,L(a));if(l){const c=l.getChild(z(a));i=Yt(i,$(),c)}}}else throw Nt("WriteRecord should have .snap or .children")}}return i}function sl(n,e,t,i,s){if(!i&&!s){const r=ut(n.visibleWrites,e);if(r!=null)return r;{const o=Ve(n.visibleWrites,e);if(cs(o))return t;if(t==null&&!ls(o,$()))return null;{const a=t||N.EMPTY_NODE;return kt(o,a)}}}else{const r=Ve(n.visibleWrites,e);if(!s&&cs(r))return t;if(!s&&t==null&&!ls(r,$()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(ae(c.path,e)||ae(e,c.path))},a=il(n.allWrites,o,e),l=t||N.EMPTY_NODE;return kt(a,l)}}}function Hp(n,e,t){let i=N.EMPTY_NODE;const s=ut(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(W,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Ve(n.visibleWrites,e);return t.forEachChild(W,(o,a)=>{const l=kt(Ve(r,new q(o)),a);i=i.updateImmediateChild(o,l)}),fo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Ve(n.visibleWrites,e);return fo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function zp(n,e,t,i,s){b(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=j(e,t);if(ls(n.visibleWrites,r))return null;{const o=Ve(n.visibleWrites,r);return cs(o)?s.getChild(t):kt(o,s.getChild(t))}}function jp(n,e,t,i){const s=j(e,t),r=ut(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Ve(n.visibleWrites,s);return kt(o,i.getNode().getImmediateChild(t))}else return null}function Wp(n,e){return ut(n.visibleWrites,e)}function Vp(n,e,t,i,s,r,o){let a;const l=Ve(n.visibleWrites,e),c=ut(l,$());if(c!=null)a=c;else if(t!=null)a=kt(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),u=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=u.getNext();for(;p&&h.length<s;)d(p,i)!==0&&h.push(p),p=u.getNext();return h}else return[]}function Gp(){return{visibleWrites:he.empty(),allWrites:[],lastWriteId:-1}}function Zn(n,e,t,i){return sl(n.writeTree,n.treePath,e,t,i)}function Ws(n,e){return Hp(n.writeTree,n.treePath,e)}function po(n,e,t,i){return zp(n.writeTree,n.treePath,e,t,i)}function ei(n,e){return Wp(n.writeTree,j(n.treePath,e))}function Kp(n,e,t,i,s,r){return Vp(n.writeTree,n.treePath,e,t,i,s,r)}function Vs(n,e,t){return jp(n.writeTree,n.treePath,e,t)}function rl(n,e){return ol(j(n.treePath,e),n.writeTree)}function ol(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;b(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),b(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,rn(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,sn(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,St(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,rn(i,e.snapshotNode,s.oldSnap));else throw Nt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const al=new Qp;class Gs{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Qe(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Vs(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ct(this.viewCache_),r=Kp(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(n){return{filter:n}}function Xp(n,e){b(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Zp(n,e,t,i,s){const r=new Yp;let o,a;if(t.type===ue.OVERWRITE){const c=t;c.source.fromUser?o=ds(n,e,c.path,c.snap,i,s,r):(b(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!M(c.path),o=ti(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===ue.MERGE){const c=t;c.source.fromUser?o=tm(n,e,c.path,c.children,i,s,r):(b(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=us(n,e,c.path,c.children,i,s,a,r))}else if(t.type===ue.ACK_USER_WRITE){const c=t;c.revert?o=sm(n,e,c.path,i,s,r):o=nm(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===ue.LISTEN_COMPLETE)o=im(n,e,t.path,i,r);else throw Nt("Unknown operation type: "+t.type);const l=r.getChanges();return em(e,o,l),{viewCache:o,changes:l}}function em(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Xn(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Za(Xn(e)))}}function ll(n,e,t,i,s,r){const o=e.eventCache;if(ei(i,t)!=null)return e;{let a,l;if(M(t))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ct(e),h=c instanceof N?c:N.EMPTY_NODE,d=Ws(i,h);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Zn(i,ct(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=L(t);if(c===".priority"){b(Ye(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const d=po(i,t,h,l);d!=null?a=n.filter.updatePriority(h,d):a=o.getNode()}else{const h=z(t);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const u=po(i,t,o.getNode(),l);u!=null?d=o.getNode().getImmediateChild(c).updateChild(h,u):d=o.getNode().getImmediateChild(c)}else d=Vs(i,c,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),c,d,h,s,r):a=o.getNode()}}return Kt(e,a,o.isFullyInitialized()||M(t),n.filter.filtersNodes())}}function ti(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(M(t))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(t,i);c=h.updateFullNode(l.getNode(),p,null)}else{const p=L(t);if(!l.isCompleteForPath(t)&&Ye(t)>1)return e;const _=z(t),w=l.getNode().getImmediateChild(p).updateChild(_,i);p===".priority"?c=h.updatePriority(l.getNode(),w):c=h.updateChild(l.getNode(),p,w,_,al,null)}const d=tl(e,c,l.isFullyInitialized()||M(t),h.filtersNodes()),u=new Gs(s,d,r);return ll(n,d,t,s,u,a)}function ds(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const h=new Gs(s,e,r);if(M(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Kt(e,c,!0,n.filter.filtersNodes());else{const d=L(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=Kt(e,c,a.isFullyInitialized(),a.isFiltered());else{const u=z(t),p=a.getNode().getImmediateChild(d);let _;if(M(u))_=i;else{const f=h.getCompleteChild(d);f!=null?Ms(u)===".priority"&&f.getChild(Va(u)).isEmpty()?_=f:_=f.updateChild(u,i):_=N.EMPTY_NODE}if(p.equals(_))l=e;else{const f=n.filter.updateChild(a.getNode(),d,_,u,h,o);l=Kt(e,f,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function mo(n,e){return n.eventCache.isCompleteForChild(e)}function tm(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const h=j(t,l);mo(e,L(h))&&(a=ds(n,a,h,c,s,r,o))}),i.foreach((l,c)=>{const h=j(t,l);mo(e,L(h))||(a=ds(n,a,h,c,s,r,o))}),a}function go(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function us(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;M(t)?c=i:c=new H(null).setTree(t,i);const h=e.serverCache.getNode();return c.children.inorderTraversal((d,u)=>{if(h.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),_=go(n,p,u);l=ti(n,l,new q(d),_,s,r,o,a)}}),c.children.inorderTraversal((d,u)=>{const p=!e.serverCache.isCompleteForChild(d)&&u.value===null;if(!h.hasChild(d)&&!p){const _=e.serverCache.getNode().getImmediateChild(d),f=go(n,_,u);l=ti(n,l,new q(d),f,s,r,o,a)}}),l}function nm(n,e,t,i,s,r,o){if(ei(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(M(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return ti(n,e,t,l.getNode().getChild(t),s,r,a,o);if(M(t)){let c=new H(null);return l.getNode().forEachChild(Et,(h,d)=>{c=c.set(new q(h),d)}),us(n,e,t,c,s,r,a,o)}else return e}else{let c=new H(null);return i.foreach((h,d)=>{const u=j(t,h);l.isCompleteForPath(u)&&(c=c.set(h,l.getNode().getChild(u)))}),us(n,e,t,c,s,r,a,o)}}function im(n,e,t,i,s){const r=e.serverCache,o=tl(e,r.getNode(),r.isFullyInitialized()||M(t),r.isFiltered());return ll(n,o,t,i,al,s)}function sm(n,e,t,i,s,r){let o;if(ei(i,t)!=null)return e;{const a=new Gs(i,e,s),l=e.eventCache.getNode();let c;if(M(t)||L(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Zn(i,ct(e));else{const d=e.serverCache.getNode();b(d instanceof N,"serverChildren would be complete if leaf node"),h=Ws(i,d)}h=h,c=n.filter.updateFullNode(l,h,r)}else{const h=L(t);let d=Vs(i,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=l.getImmediateChild(h)),d!=null?c=n.filter.updateChild(l,h,d,z(t),a,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,N.EMPTY_NODE,z(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Zn(i,ct(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ei(i,$())!=null,Kt(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Bs(i.getIndex()),r=Cp(i);this.processor_=Jp(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(N.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(N.EMPTY_NODE,a.getNode(),null),h=new Qe(l,o.isFullyInitialized(),s.filtersNodes()),d=new Qe(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=_i(d,h),this.eventGenerator_=new Ap(this.query_)}get query(){return this.query_}}function om(n){return n.viewCache_.serverCache.getNode()}function am(n){return Xn(n.viewCache_)}function lm(n,e){const t=ct(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!M(e)&&!t.getImmediateChild(L(e)).isEmpty())?t.getChild(e):null}function _o(n){return n.eventRegistrations_.length===0}function cm(n,e){n.eventRegistrations_.push(e)}function vo(n,e,t){const i=[];if(t){b(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function yo(n,e,t,i){e.type===ue.MERGE&&e.source.queryId!==null&&(b(ct(n.viewCache_),"We should always have a full cache before handling merges"),b(Xn(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=Zp(n.processor_,s,e,t,i);return Xp(n.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,cl(n,r.changes,r.viewCache.eventCache.getNode(),null)}function dm(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(W,(r,o)=>{i.push(St(r,o))}),t.isFullyInitialized()&&i.push(Za(t.getNode())),cl(n,i,t.getNode(),e)}function cl(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return Np(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ni;class dl{constructor(){this.views=new Map}}function um(n){b(!ni,"__referenceConstructor has already been defined"),ni=n}function hm(){return b(ni,"Reference.ts has not been loaded"),ni}function fm(n){return n.views.size===0}function Ks(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return b(r!=null,"SyncTree gave us an op for an invalid query."),yo(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(yo(o,e,t,i));return r}}function ul(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Zn(t,s?i:null),l=!1;a?l=!0:i instanceof N?(a=Ws(t,i),l=!1):(a=N.EMPTY_NODE,l=!1);const c=_i(new Qe(a,l,!1),new Qe(i,s,!1));return new rm(e,c)}return o}function pm(n,e,t,i,s,r){const o=ul(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),cm(o,t),dm(o,t)}function mm(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=Je(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(vo(c,t,i)),_o(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(vo(l,t,i)),_o(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Je(n)&&r.push(new(hm())(e._repo,e._path)),{removed:r,events:o}}function hl(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ge(n,e){let t=null;for(const i of n.views.values())t=t||lm(i,e);return t}function fl(n,e){if(e._queryParams.loadsAllData())return yi(n);{const i=e._queryIdentifier;return n.views.get(i)}}function pl(n,e){return fl(n,e)!=null}function Je(n){return yi(n)!=null}function yi(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ii;function gm(n){b(!ii,"__referenceConstructor has already been defined"),ii=n}function _m(){return b(ii,"Reference.ts has not been loaded"),ii}let vm=1;class bo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new H(null),this.pendingWriteTree_=Gp(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ml(n,e,t,i,s){return Dp(n.pendingWriteTree_,e,t,i,s),s?Mt(n,new lt(Hs(),e,t)):[]}function ym(n,e,t,i){Mp(n.pendingWriteTree_,e,t,i);const s=H.fromObject(t);return Mt(n,new Tt(Hs(),e,s))}function qe(n,e,t=!1){const i=$p(n.pendingWriteTree_,e);if(Fp(n.pendingWriteTree_,e)){let r=new H(null);return i.snap!=null?r=r.set($(),!0):J(i.children,o=>{r=r.set(new q(o),!0)}),Mt(n,new Jn(i.path,r,t))}else return[]}function yn(n,e,t){return Mt(n,new lt(zs(),e,t))}function bm(n,e,t){const i=H.fromObject(t);return Mt(n,new Tt(zs(),e,i))}function wm(n,e){return Mt(n,new an(zs(),e))}function Em(n,e,t){const i=Qs(n,t);if(i){const s=Js(i),r=s.path,o=s.queryId,a=ee(r,e),l=new an(js(o),a);return Xs(n,r,l)}else return[]}function si(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||pl(o,e))){const l=mm(o,e,t,i);fm(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const h=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(u,p)=>Je(p));if(h&&!d){const u=n.syncPointTree_.subtree(r);if(!u.isEmpty()){const p=Im(u);for(let _=0;_<p.length;++_){const f=p[_],w=f.query,k=yl(n,f);n.listenProvider_.startListening(Qt(w),ln(n,w),k.hashFn,k.onComplete)}}}!d&&c.length>0&&!i&&(h?n.listenProvider_.stopListening(Qt(e),null):c.forEach(u=>{const p=n.queryToTagMap.get(bi(u));n.listenProvider_.stopListening(Qt(u),p)}))}Sm(n,c)}return a}function gl(n,e,t,i){const s=Qs(n,i);if(s!=null){const r=Js(s),o=r.path,a=r.queryId,l=ee(o,e),c=new lt(js(a),l,t);return Xs(n,o,c)}else return[]}function Cm(n,e,t,i){const s=Qs(n,i);if(s){const r=Js(s),o=r.path,a=r.queryId,l=ee(o,e),c=H.fromObject(t),h=new Tt(js(a),l,c);return Xs(n,o,h)}else return[]}function hs(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(u,p)=>{const _=ee(u,s);r=r||Ge(p,_),o=o||Je(p)});let a=n.syncPointTree_.get(s);a?(o=o||Je(a),r=r||Ge(a,$())):(a=new dl,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=N.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((p,_)=>{const f=Ge(_,$());f&&(r=r.updateImmediateChild(p,f))}));const c=pl(a,e);if(!c&&!e._queryParams.loadsAllData()){const u=bi(e);b(!n.queryToTagMap.has(u),"View does not exist, but we have a tag");const p=Tm();n.queryToTagMap.set(u,p),n.tagToQueryMap.set(p,u)}const h=vi(n.pendingWriteTree_,s);let d=pm(a,e,t,h,r,l);if(!c&&!o&&!i){const u=fl(a,e);d=d.concat(km(n,e,u))}return d}function Ys(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=ee(o,e),c=Ge(a,l);if(c)return c});return sl(s,e,r,t,!0)}function xm(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(c,h)=>{const d=ee(c,t);i=i||Ge(h,d)});let s=n.syncPointTree_.get(t);s?i=i||Ge(s,$()):(s=new dl,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new Qe(i,!0,!1):null,a=vi(n.pendingWriteTree_,e._path),l=ul(s,e,a,r?o.getNode():N.EMPTY_NODE,r);return am(l)}function Mt(n,e){return _l(e,n.syncPointTree_,null,vi(n.pendingWriteTree_,$()))}function _l(n,e,t,i){if(M(n.path))return vl(n,e,t,i);{const s=e.get($());t==null&&s!=null&&(t=Ge(s,$()));let r=[];const o=L(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,h=rl(i,o);r=r.concat(_l(a,l,c,h))}return s&&(r=r.concat(Ks(s,n,i,t))),r}}function vl(n,e,t,i){const s=e.get($());t==null&&s!=null&&(t=Ge(s,$()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=rl(i,o),h=n.operationForChild(o);h&&(r=r.concat(vl(h,a,l,c)))}),s&&(r=r.concat(Ks(s,n,i,t))),r}function yl(n,e){const t=e.query,i=ln(n,t);return{hashFn:()=>(om(e)||N.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Em(n,t._path,i):wm(n,t._path);{const r=wf(s,t);return si(n,t,null,r)}}}}function ln(n,e){const t=bi(e);return n.queryToTagMap.get(t)}function bi(n){return n._path.toString()+"$"+n._queryIdentifier}function Qs(n,e){return n.tagToQueryMap.get(e)}function Js(n){const e=n.indexOf("$");return b(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new q(n.substr(0,e))}}function Xs(n,e,t){const i=n.syncPointTree_.get(e);b(i,"Missing sync point for query tag that we're tracking");const s=vi(n.pendingWriteTree_,e);return Ks(i,t,s,null)}function Im(n){return n.fold((e,t,i)=>{if(t&&Je(t))return[yi(t)];{let s=[];return t&&(s=hl(t)),J(i,(r,o)=>{s=s.concat(o)}),s}})}function Qt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(_m())(n._repo,n._path):n}function Sm(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=bi(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function Tm(){return vm++}function km(n,e,t){const i=e._path,s=ln(n,e),r=yl(n,t),o=n.listenProvider_.startListening(Qt(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)b(!Je(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,d)=>{if(!M(c)&&h&&Je(h))return[yi(h).query];{let u=[];return h&&(u=u.concat(hl(h).map(p=>p.query))),J(d,(p,_)=>{u=u.concat(_)}),u}});for(let c=0;c<l.length;++c){const h=l[c];n.listenProvider_.stopListening(Qt(h),ln(n,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Zs(t)}node(){return this.node_}}class er{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=j(this.path_,e);return new er(this.syncTree_,t)}node(){return Ys(this.syncTree_,this.path_)}}const Rm=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},wo=function(n,e,t){if(!n||typeof n!="object")return n;if(b(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Am(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Nm(n[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Am=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:b(!1,"Unexpected server value: "+n)}},Nm=function(n,e,t){n.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&b(!1,"Unexpected increment value: "+i);const s=e.node();if(b(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},bl=function(n,e,t,i){return tr(e,new er(t,n),i)},wl=function(n,e,t){return tr(n,new Zs(e),t)};function tr(n,e,t){const i=n.getPriority().val(),s=wo(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=wo(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new K(a,V(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new K(s))),o.forEachChild(W,(a,l)=>{const c=tr(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function ir(n,e){let t=e instanceof q?e:new q(e),i=n,s=L(t);for(;s!==null;){const r=Ct(i.node.children,s)||{children:{},childCount:0};i=new nr(s,i,r),t=z(t),s=L(t)}return i}function $t(n){return n.node.value}function El(n,e){n.node.value=e,fs(n)}function Cl(n){return n.node.childCount>0}function Pm(n){return $t(n)===void 0&&!Cl(n)}function wi(n,e){J(n.node.children,(t,i)=>{e(new nr(t,n,i))})}function xl(n,e,t,i){t&&e(n),wi(n,s=>{xl(s,e,!0)})}function Om(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function bn(n){return new q(n.parent===null?n.name:bn(n.parent)+"/"+n.name)}function fs(n){n.parent!==null&&Lm(n.parent,n.name,n)}function Lm(n,e,t){const i=Pm(t),s=ve(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,fs(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,fs(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=/[\[\].#$\/\u0000-\u001F\u007F]/,Mm=/[\[\].#$\u0000-\u001F\u007F]/,Vi=10*1024*1024,sr=function(n){return typeof n=="string"&&n.length!==0&&!Dm.test(n)},Il=function(n){return typeof n=="string"&&n.length!==0&&!Mm.test(n)},$m=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Il(n)},Fm=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Ns(n)||n&&typeof n=="object"&&ve(n,".sv")},Sl=function(n,e,t,i){i&&e===void 0||Ei(di(n,"value"),e,t)},Ei=function(n,e,t){const i=t instanceof q?new tp(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+nt(i));if(typeof e=="function")throw new Error(n+"contains a function "+nt(i)+" with contents = "+e.toString());if(Ns(e))throw new Error(n+"contains "+e.toString()+" "+nt(i));if(typeof e=="string"&&e.length>Vi/3&&ui(e)>Vi)throw new Error(n+"contains a string greater than "+Vi+" utf8 bytes "+nt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(J(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!sr(o)))throw new Error(n+" contains an invalid key ("+o+") "+nt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);np(i,o),Ei(n,a,i),ip(i)}),s&&r)throw new Error(n+' contains ".value" child '+nt(i)+" in addition to actual children.")}},Um=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const r=nn(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!sr(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(ep);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&ae(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},Bm=function(n,e,t,i){const s=di(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];J(e,(o,a)=>{const l=new q(o);if(Ei(s,a,j(t,l)),Ms(l)===".priority"&&!Fm(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),Um(s,r)},Tl=function(n,e,t,i){if(!Il(t))throw new Error(di(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},qm=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Tl(n,e,t)},kl=function(n,e){if(L(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Hm=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!sr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!$m(t))throw new Error(di(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ci(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!$s(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Rl(n,e,t){Ci(n,t),Al(n,i=>$s(i,e))}function ce(n,e,t){Ci(n,t),Al(n,i=>ae(i,e)||ae(e,i))}function Al(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(jm(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function jm(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Vt&&Q("event: "+t.toString()),Dt(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm="repo_interrupt",Vm=25;class Gm{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Qn(),this.transactionQueueTree_=new nr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Km(n,e,t){if(n.stats_=Ls(n.repoInfo_),n.forceRestClient_||If())n.server_=new Yn(n.repoInfo_,(i,s,r,o)=>{Eo(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Co(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{G(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Ie(n.repoInfo_,e,(i,s,r,o)=>{Eo(n,i,s,r,o)},i=>{Co(n,i)},i=>{Ym(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Af(n.repoInfo_,()=>new Rp(n.stats_,n.server_)),n.infoData_=new xp,n.infoSyncTree_=new bo({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=yn(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),rr(n,"connected",!1),n.serverSyncTree_=new bo({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);ce(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Nl(n){const t=n.infoData_.getNode(new q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function xi(n){return Rm({timestamp:Nl(n)})}function Eo(n,e,t,i,s){n.dataUpdateCount++;const r=new q(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=Fn(t,c=>V(c));o=Cm(n.serverSyncTree_,r,l,s)}else{const l=V(t);o=gl(n.serverSyncTree_,r,l,s)}else if(i){const l=Fn(t,c=>V(c));o=bm(n.serverSyncTree_,r,l)}else{const l=V(t);o=yn(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Rt(n,r)),ce(n.eventQueue_,a,o)}function Co(n,e){rr(n,"connected",e),e===!1&&Zm(n)}function Ym(n,e){J(e,(t,i)=>{rr(n,t,i)})}function rr(n,e,t){const i=new q("/.info/"+e),s=V(t);n.infoData_.updateSnapshot(i,s);const r=yn(n.infoSyncTree_,i,s);ce(n.eventQueue_,i,r)}function or(n){return n.nextWriteId_++}function Qm(n,e,t){const i=xm(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=V(s).withIndex(e._queryParams.getIndex());hs(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=yn(n.serverSyncTree_,e._path,r);else{const a=ln(n.serverSyncTree_,e);o=gl(n.serverSyncTree_,e._path,r,a)}return ce(n.eventQueue_,e._path,o),si(n.serverSyncTree_,e,t,null,!0),r},s=>(wn(n,"get for query "+G(e)+" failed: "+s),Promise.reject(new Error(s))))}function Jm(n,e,t,i,s){wn(n,"set",{path:e.toString(),value:t,priority:i});const r=xi(n),o=V(t,i),a=Ys(n.serverSyncTree_,e),l=wl(o,a,r),c=or(n),h=ml(n.serverSyncTree_,e,l,c,!0);Ci(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(u,p)=>{const _=u==="ok";_||te("set at "+e+" failed: "+u);const f=qe(n.serverSyncTree_,c,!_);ce(n.eventQueue_,e,f),ps(n,s,u,p)});const d=lr(n,e);Rt(n,d),ce(n.eventQueue_,d,[])}function Xm(n,e,t,i){wn(n,"update",{path:e.toString(),value:t});let s=!0;const r=xi(n),o={};if(J(t,(a,l)=>{s=!1,o[a]=bl(j(e,a),V(l),n.serverSyncTree_,r)}),s)Q("update() called with empty data.  Don't do anything."),ps(n,i,"ok",void 0);else{const a=or(n),l=ym(n.serverSyncTree_,e,o,a);Ci(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,h)=>{const d=c==="ok";d||te("update at "+e+" failed: "+c);const u=qe(n.serverSyncTree_,a,!d),p=u.length>0?Rt(n,e):e;ce(n.eventQueue_,p,u),ps(n,i,c,h)}),J(t,c=>{const h=lr(n,j(e,c));Rt(n,h)}),ce(n.eventQueue_,e,[])}}function Zm(n){wn(n,"onDisconnectEvents");const e=xi(n),t=Qn();os(n.onDisconnect_,$(),(s,r)=>{const o=bl(s,r,n.serverSyncTree_,e);el(t,s,o)});let i=[];os(t,$(),(s,r)=>{i=i.concat(yn(n.serverSyncTree_,s,r));const o=lr(n,s);Rt(n,o)}),n.onDisconnect_=Qn(),ce(n.eventQueue_,$(),i)}function eg(n,e,t){let i;L(e._path)===".info"?i=hs(n.infoSyncTree_,e,t):i=hs(n.serverSyncTree_,e,t),Rl(n.eventQueue_,e._path,i)}function Pl(n,e,t){let i;L(e._path)===".info"?i=si(n.infoSyncTree_,e,t):i=si(n.serverSyncTree_,e,t),Rl(n.eventQueue_,e._path,i)}function tg(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Wm)}function wn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Q(t,...e)}function ps(n,e,t,i){e&&Dt(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Ol(n,e,t){return Ys(n.serverSyncTree_,e,t)||N.EMPTY_NODE}function ar(n,e=n.transactionQueueTree_){if(e||Ii(n,e),$t(e)){const t=Dl(n,e);b(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&ng(n,bn(e),t)}else Cl(e)&&wi(e,t=>{ar(n,t)})}function ng(n,e,t){const i=t.map(c=>c.currentWriteId),s=Ol(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const h=t[c];b(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=ee(e,h.path);r=r.updateChild(d,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{wn(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const d=[];for(let u=0;u<t.length;u++)t[u].status=2,h=h.concat(qe(n.serverSyncTree_,t[u].currentWriteId)),t[u].onComplete&&d.push(()=>t[u].onComplete(null,!0,t[u].currentOutputSnapshotResolved)),t[u].unwatcher();Ii(n,ir(n.transactionQueueTree_,e)),ar(n,n.transactionQueueTree_),ce(n.eventQueue_,e,h);for(let u=0;u<d.length;u++)Dt(d[u])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{te("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}Rt(n,e)}},o)}function Rt(n,e){const t=Ll(n,e),i=bn(t),s=Dl(n,t);return ig(n,s,i),i}function ig(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ee(t,l.path);let h=!1,d;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,d=l.abortReason,s=s.concat(qe(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Vm)h=!0,d="maxretry",s=s.concat(qe(n.serverSyncTree_,l.currentWriteId,!0));else{const u=Ol(n,l.path,o);l.currentInputSnapshot=u;const p=e[a].update(u.val());if(p!==void 0){Ei("transaction failed: Data returned ",p,l.path);let _=V(p);typeof p=="object"&&p!=null&&ve(p,".priority")||(_=_.updatePriority(u.getPriority()));const w=l.currentWriteId,k=xi(n),C=wl(_,u,k);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=C,l.currentWriteId=or(n),o.splice(o.indexOf(w),1),s=s.concat(ml(n.serverSyncTree_,l.path,C,l.currentWriteId,l.applyLocally)),s=s.concat(qe(n.serverSyncTree_,w,!0))}else h=!0,d="nodata",s=s.concat(qe(n.serverSyncTree_,l.currentWriteId,!0))}ce(n.eventQueue_,t,s),s=[],h&&(e[a].status=2,function(u){setTimeout(u,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}Ii(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Dt(i[a]);ar(n,n.transactionQueueTree_)}function Ll(n,e){let t,i=n.transactionQueueTree_;for(t=L(e);t!==null&&$t(i)===void 0;)i=ir(i,t),e=z(e),t=L(e);return i}function Dl(n,e){const t=[];return Ml(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Ml(n,e,t){const i=$t(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);wi(e,s=>{Ml(n,s,t)})}function Ii(n,e){const t=$t(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,El(e,t.length>0?t:void 0)}wi(e,i=>{Ii(n,i)})}function lr(n,e){const t=bn(Ll(n,e)),i=ir(n.transactionQueueTree_,e);return Om(i,s=>{Gi(n,s)}),Gi(n,i),xl(i,s=>{Gi(n,s)}),t}function Gi(n,e){const t=$t(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(b(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(qe(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?El(e,void 0):t.length=r+1,ce(n.eventQueue_,bn(e),s);for(let o=0;o<i.length;o++)Dt(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function rg(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):te(`Invalid query segment '${t}' in query '${n}'`)}return e}const xo=function(n,e){const t=og(n),i=t.namespace;t.domain==="firebase.com"&&Ae(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Ae("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||gf();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new $a(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new q(t.pathString)}},og=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(h,d)),h<d&&(s=sg(n.substring(h,d)));const u=rg(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=i}"ns"in u&&(r=u.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",ag=function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=Io.charAt(t%64),t=Math.floor(t/64);b(t===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Io.charAt(e[s]);return b(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+G(this.snapshot.exportVal())}}class cg{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return M(this._path)?null:Ms(this._path)}get ref(){return new Ne(this._repo,this._path)}get _queryIdentifier(){const e=co(this._queryParams),t=Ps(e);return t==="{}"?"default":t}get _queryObject(){return co(this._queryParams)}isEqual(e){if(e=oe(e),!(e instanceof cr))return!1;const t=this._repo===e._repo,i=$s(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Zf(this._path)}}class Ne extends cr{constructor(e,t){super(e,t,new qs,!1)}get parent(){const e=Va(this._path);return e===null?null:new Ne(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class cn{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new q(e),i=dn(this.ref,e);return new cn(this._node.getChild(t),i,W)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new cn(s,dn(this.ref,i),W)))}hasChild(e){const t=new q(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function I(n,e){return n=oe(n),n._checkNotDeleted("ref"),e!==void 0?dn(n._root,e):n._root}function dn(n,e){return n=oe(n),L(n._path)===null?qm("child","path",e):Tl("child","path",e),new Ne(n._repo,j(n._path,e))}function ht(n,e){n=oe(n),kl("push",n._path),Sl("push",e,n._path,!0);const t=Nl(n._repo),i=ag(t),s=dn(n,i),r=dn(n,i);let o;return o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function F(n,e){n=oe(n),kl("set",n._path),Sl("set",e,n._path,!1);const t=new un;return Jm(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function _e(n,e){Bm("update",e,n._path);const t=new un;return Xm(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function X(n){n=oe(n);const e=new $l(()=>{}),t=new Si(e);return Qm(n._repo,n,t).then(i=>new cn(i,new Ne(n._repo,n._path),n._queryParams.getIndex()))}class Si{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new lg("value",this,new cn(e.snapshotNode,new Ne(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new cg(this,e,t):null}matches(e){return e instanceof Si?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function dg(n,e,t,i,s){const r=new $l(t,void 0),o=new Si(r);return eg(n._repo,n,o),()=>Pl(n._repo,n,o)}function dr(n,e,t,i){return dg(n,"value",e)}function ur(n,e,t){Pl(n._repo,n,null)}um(Ne);gm(Ne);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug="FIREBASE_DATABASE_EMULATOR_HOST",ms={};let hg=!1;function fg(n,e,t,i){n.repoInfo_=new $a(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function pg(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Ae("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Q("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=xo(r,s),a=o.repoInfo,l;typeof process<"u"&&Wr&&(l=Wr[ug]),l?(r=`http://${l}?ns=${a.namespace}`,o=xo(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new Tf(n.name,n.options,e);Hm("Invalid Firebase Database URL",o),M(o.path)||Ae("Database URL must point to the root of a Firebase Database (not including a child path).");const h=gg(a,n,c,new Sf(n.name,t));return new _g(h,n)}function mg(n,e){const t=ms[e];(!t||t[n.key]!==n)&&Ae(`Database ${e}(${n.repoInfo_}) has already been deleted.`),tg(n),delete t[n.key]}function gg(n,e,t,i){let s=ms[e.name];s||(s={},ms[e.name]=s);let r=s[n.toURLString()];return r&&Ae("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Gm(n,hg,t,i),s[n.toURLString()]=r,r}class _g{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Km(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ne(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(mg(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ae("Cannot call "+e+" on a deleted database.")}}function vg(n=qo(),e){const t=Es(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Fc("database");i&&yg(t,...i)}return t}function yg(n,e,t,i={}){n=oe(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Ae("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Ae('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new On(On.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Uc(i.mockUserToken,n.app.options.projectId);r=new On(o)}fg(s,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(n){df(Ot),xt(new rt("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return pg(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),je(Vr,Gr,n),je(Vr,Gr,"esm2017")}Ie.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ie.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};bg();const wg={apiKey:"AIzaSyCzdkKcfNvafQ3x9NDUsTn8UOww7_v3nn0",authDomain:"who-s-the-queen-bee.firebaseapp.com",databaseURL:"https://who-s-the-queen-bee-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"who-s-the-queen-bee",storageBucket:"who-s-the-queen-bee.firebasestorage.app",messagingSenderId:"808367557368",appId:"1:808367557368:web:7af8a2948e62494c5e490d"},Fl=Bo(wg),Eg=lf(Fl),S=vg(Fl),Cg="modulepreload",xg=function(n){return"/queen-bee-scorecard/"+n},So={},Ul=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=xg(l),l in So)return;So[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":Cg,c||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((u,p)=>{d.addEventListener("load",u),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};async function le(){const n=await X(I(S,"employees"));return n.exists()?n.val():{}}async function Ti(n,e){await _e(I(S,`employees/${n}`),e)}function Pe(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`}async function En(n,e=Pe()){const t=await X(I(S,`monthly_points/${e}/${n}`));return t.exists()?t.val():{points:0,rank:null,db_count:0,db_pts_deducted:0,net_points:0}}async function ri(n,e,t=Pe()){const i=await En(n,t),s={...i,points:(i.points||0)+e,net_points:(i.net_points||0)+e};return await F(I(S,`monthly_points/${t}/${n}`),s),s}function ki(n=Pe(),e){const t=I(S,`monthly_points/${n}`);return dr(t,i=>e(i.exists()?i.val():{})),()=>ur(t)}async function Cn(n){const e=await X(I(S,`vault/${n}`));return e.exists()?e.val():{total_earned:0,total_deducted:0,net:0,last_reset_date:null}}async function Jt(n,e){const t=await Cn(n),i={...t,total_earned:(t.total_earned||0)+e,net:(t.net||0)+e};return await F(I(S,`vault/${n}`),i),i}async function Bl(n){const e=ht(I(S,"awards")),t={...n,timestamp:Date.now()};return await F(e,t),e.key}async function ql(n){const e=await X(I(S,"awards"));if(!e.exists())return[];const t=e.val();return Object.entries(t).map(([i,s])=>({id:i,...s})).filter(i=>i.receiver_id===n).sort((i,s)=>s.timestamp-i.timestamp)}async function oi(n){const e=await X(I(S,"awards"));if(!e.exists())return[];const t=e.val();return Object.entries(t).map(([i,s])=>({id:i,...s})).filter(i=>i.giver_id===n).sort((i,s)=>s.timestamp-i.timestamp)}async function Hl(n){const e=ht(I(S,"dark_beans")),t={...n,timestamp:Date.now(),appealed:!1,appeal_status:null};return await F(e,t),e.key}async function zl(n,e=Pe()){const t=await X(I(S,"dark_beans"));if(!t.exists())return[];const i=t.val();return Object.entries(i).map(([s,r])=>({id:s,...r})).filter(s=>s.receiver_id===n&&s.month_key===e).sort((s,r)=>r.timestamp-s.timestamp)}async function hr(n,e,t){const i=await X(I(S,`offense_escalation/${n}/${e}/${t}`));return i.exists()?i.val().instance_count:0}async function jl(n,e,t){const i=await hr(n,e,t);return await F(I(S,`offense_escalation/${n}/${e}/${t}`),{instance_count:i+1}),i+1}async function Ft(){const n=await X(I(S,"action_menu"));return n.exists()?n.val():{}}async function Wl(n,e){await _e(I(S,`action_menu/${n}`),e)}async function Ut(){const n=await X(I(S,"offense_menu"));return n.exists()?n.val():{}}async function Vl(n,e){await _e(I(S,`offense_menu/${n}`),e)}async function Ri(n=Pe()){const e=await X(I(S,`nominations/${n}/wildcard_nominee`));return e.exists()?e.val():null}async function fr(n,e){await F(I(S,`nominations/${n}/wildcard_nominee`),e)}async function pr(n){await F(I(S,`nominations/${n}/wildcard_nominee`),null)}async function Gl(n,e,t){await F(I(S,`votes/${n}/${e}`),t)}async function xn(n=Pe()){const e=await X(I(S,`votes/${n}`));return e.exists()?e.val():{}}async function Ln(n,e){return(await X(I(S,`votes/${n}/${e}`))).exists()}async function jt(n){const e=ht(I(S,"audit_flags")),t={...n,timestamp:Date.now(),status:"open",acted_by:null,acted_at:null};return await F(e,t),e.key}async function Kl(n,e,t){await _e(I(S,`audit_flags/${n}`),{status:e,acted_by:t,acted_at:Date.now()})}async function Yl(){const n=await X(I(S,"audit_flags"));return n.exists()?Object.entries(n.val()).map(([e,t])=>({id:e,...t})).sort((e,t)=>t.timestamp-e.timestamp):[]}async function Ql(n){const e=ht(I(S,"pending_registrations"));return await F(e,{...n,submitted_at:Date.now(),status:"pending"}),e.key}async function Jl(n,e,t){const i="emp_"+n.slice(-8);return await F(I(S,`employees/${i}`),{name:e.name,email:e.email,role:e.role,outlet:e.outlet,pin_hash:e.pin_hash,active:!0}),await _e(I(S,`pending_registrations/${n}`),{status:"approved",approved_by:t,approved_at:Date.now()}),i}async function Xl(n,e){await _e(I(S,`pending_registrations/${n}`),{status:"rejected",rejected_by:e,rejected_at:Date.now()})}function ai(n){const e=I(S,"pending_registrations");return dr(e,t=>{if(!t.exists()){n([]);return}const i=Object.entries(t.val()).map(([s,r])=>({id:s,...r})).filter(s=>s.status==="pending");n(i)}),()=>ur(e)}async function Zl(n,e,t,i=Pe()){const s=await En(n,i),r={...s,db_count:(s.db_count||0)+e,db_pts_deducted:(s.db_pts_deducted||0)+t,net_points:Math.max(0,(s.net_points||s.points||0)-t)};return await F(I(S,`monthly_points/${i}/${n}`),r),r}async function ec(n,e){const t=await Cn(n),i={...t,total_deducted:(t.total_deducted||0)+e,net:Math.max(0,(t.net||0)-e)};return await F(I(S,`vault/${n}`),i),i}async function tc(n,e,t,i=Pe()){const s=await En(n,i),r={...s,db_count:Math.max(0,(s.db_count||0)-e),db_pts_deducted:Math.max(0,(s.db_pts_deducted||0)-t),net_points:(s.net_points||s.points||0)+t};return await F(I(S,`monthly_points/${i}/${n}`),r),r}async function nc(n,e){const t=await Cn(n),i={...t,total_deducted:Math.max(0,(t.total_deducted||0)-e),net:(t.net||0)+e};return await F(I(S,`vault/${n}`),i),i}async function ic(n){const e=await X(I(S,"dark_beans"));return e.exists()?Object.entries(e.val()).map(([t,i])=>({id:t,...i})).filter(t=>t.giver_id===n&&!t.revoked).sort((t,i)=>i.timestamp-t.timestamp):[]}async function sc(n){const e=ht(I(S,"revoke_requests"));return await F(e,{...n,submitted_at:Date.now(),status:"pending"}),e.key}function li(n){const e=I(S,"revoke_requests");return dr(e,t=>{if(!t.exists()){n([]);return}const i=Object.entries(t.val()).map(([s,r])=>({id:s,...r})).filter(s=>s.status==="pending");n(i)}),()=>ur(e)}async function rc(n,e,t){const i=Date.now(),s=ht(I(S,"revoke_log"));await Promise.all([tc(e.receiver_id,e.db_count,e.pts_deducted,e.month_key),nc(e.receiver_id,e.pts_deducted),_e(I(S,`dark_beans/${e.dark_bean_id}`),{revoked:!0,revoked_at:i,revoked_by:t}),_e(I(S,`revoke_requests/${n}`),{status:"approved",approved_by:t,approved_at:i}),F(s,{dark_bean_id:e.dark_bean_id,receiver_id:e.receiver_id,giver_id:e.giver_id,giver_name:e.giver_name,offense_id:e.offense_id,conduct_tier:e.conduct_tier,pts_restored:e.pts_deducted,reason:e.reason,approved_by:t,timestamp:i})])}async function oc(n,e){await _e(I(S,`revoke_requests/${n}`),{status:"rejected",rejected_by:e,rejected_at:Date.now()})}async function ac(n){const e=ht(I(S,"direct_awards"));return await F(e,{...n,timestamp:Date.now()}),e.key}async function lc(n){const e=await X(I(S,"direct_awards"));return e.exists()?Object.entries(e.val()).map(([t,i])=>({id:t,...i})).filter(t=>t.giver_id===n).sort((t,i)=>i.timestamp-t.timestamp):[]}async function cc(n){const e=await X(I(S,"direct_awards"));return e.exists()?Object.entries(e.val()).map(([t,i])=>({id:t,...i})).filter(t=>t.receiver_id===n).sort((t,i)=>i.timestamp-t.timestamp):[]}async function dc(){await Promise.all([F(I(S,"awards"),null),F(I(S,"monthly_points"),null),F(I(S,"vault"),null),F(I(S,"dark_beans"),null),F(I(S,"audit_flags"),null),F(I(S,"offense_escalation"),null),F(I(S,"votes"),null),F(I(S,"nominations"),null),F(I(S,"revoke_requests"),null),F(I(S,"revoke_log"),null),F(I(S,"direct_awards"),null)])}async function uc(){await Promise.all([F(I(S,"employees"),null),F(I(S,"pending_registrations"),null)])}async function Ai(){const n=await X(I(S,"config"));return n.exists()?n.val():{}}async function hc(n){await _e(I(S,"config"),n)}const Ig=Object.freeze(Object.defineProperty({__proto__:null,addMonthlyPoints:ri,addVaultPoints:Jt,approveRegistration:Jl,approveRevokeRequest:rc,castVote:Gl,clearWildcardNominee:pr,createAuditFlag:jt,createAward:Bl,createDarkBean:Hl,createDirectAward:ac,createRevokeRequest:sc,deductMonthlyPoints:Zl,deductVaultPoints:ec,getActions:Ft,getAllEmployees:le,getAllFlags:Yl,getAwardsByEmployee:ql,getAwardsByGiver:oi,getConfig:Ai,getDarkBeansByEmployee:zl,getDarkBeansByGiver:ic,getDirectAwardsByEmployee:cc,getDirectAwardsByGiver:lc,getMonthlyPoints:En,getOffenseInstance:hr,getOffenses:Ut,getVault:Cn,getVotes:xn,getWildcardNominee:Ri,hasVoted:Ln,incrementOffenseInstance:jl,listenLeaderboard:ki,listenPendingRegistrations:ai,listenRevokeRequests:li,monthKey:Pe,nukeAllStaff:uc,nukeTransactionalData:dc,rejectRegistration:Xl,rejectRevokeRequest:oc,reverseDeduction:tc,reverseVaultDeduction:nc,setWildcardNominee:fr,submitRegistration:Ql,updateConfig:hc,updateFlagStatus:Kl,upsertAction:Wl,upsertEmployee:Ti,upsertOffense:Vl},Symbol.toStringTag,{value:"Module"})),Ni="hb_bs_session",Sg=2*60*60*1e3,Tg=30*1e3;function fc(n){const e={...n,loginAt:Date.now()};localStorage.setItem(Ni,JSON.stringify(e))}function pc(){try{const n=localStorage.getItem(Ni);if(!n)return null;const e=JSON.parse(n);return Date.now()-e.loginAt>Sg?(mc(),null):e}catch{return null}}function mc(){localStorage.removeItem(Ni)}function kg(){const n=pc();n&&(n.loginAt=Date.now(),localStorage.setItem(Ni,JSON.stringify(n)))}function gc(){return setInterval(kg,Tg)}async function Rg(n){const t=new TextEncoder().encode(n),i=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(i)).map(r=>r.toString(16).padStart(2,"0")).join("")}async function Ag(n,e){const{getAllEmployees:t}=await Ul(async()=>{const{getAllEmployees:o}=await Promise.resolve().then(()=>Ig);return{getAllEmployees:o}},void 0),i=await t(),s=Object.entries(i).map(([o,a])=>({id:o,...a})).find(o=>o.email===n&&o.active!==!1);if(!s)throw new Error("Employee not found");const r=await Rg(e);if(s.pin_hash!==r)throw new Error("Incorrect PIN");return fc(s),s}function ci(){return!!(window.PublicKeyCredential&&navigator.credentials)}async function Ng(n){if(!ci())return!1;try{const e=crypto.getRandomValues(new Uint8Array(32)),t=new TextEncoder().encode(n.id),i=await navigator.credentials.create({publicKey:{challenge:e,rp:{name:"Heebee Bean System"},user:{id:t,name:n.email,displayName:n.name},pubKeyCredParams:[{type:"public-key",alg:-7}],authenticatorSelection:{authenticatorAttachment:"platform",userVerification:"required"},timeout:6e4,attestation:"none"}});return i?(await Ti(n.id,{webauthn_id:Og(i.rawId)}),!0):!1}catch(e){return console.warn("WebAuthn registration failed, using PIN only:",e.message),!1}}async function Pg(n){if(!ci()||!n.webauthn_id)return!1;try{const e=crypto.getRandomValues(new Uint8Array(32)),t=Lg(n.webauthn_id);return await navigator.credentials.get({publicKey:{challenge:e,allowCredentials:[{type:"public-key",id:t}],userVerification:"required",timeout:6e4}})?(fc(n),n):!1}catch(e){return console.warn("WebAuthn auth failed, fall back to PIN:",e.message),!1}}function Og(n){return btoa(String.fromCharCode(...new Uint8Array(n)))}function Lg(n){const e=atob(n),t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t.buffer}function Dg(){mc()}const fe={green:{id:"green",icon:"🫘",label:"Green Bean",pts:1,dailyCap:10,perSubmissionCap:3},silver:{id:"silver",icon:"☕",label:"Silver Bean",pts:5,dailyCap:50,perSubmissionCap:2},gold:{id:"gold",icon:"🥇",label:"Gold Bean",pts:10,dailyCap:100,perSubmissionCap:2},crystal:{id:"crystal",icon:"💎",label:"Crystal Bean",pts:25,dailyCap:80,perSubmissionCap:8}},At=["Trainee","Barista","Senior Barista","Kitchen Helper","Commi 3","Commi 2","Commi 1","DCDP","CDP"],Pi=["Floor Manager","Sous Chef","Cafe Manager","Head Chef","Area Manager","HOD","CEO","COO","Owner"],Oi=["HR","Accountant","Admin Staff"],_c={"Floor Manager":["green"],"Sous Chef":["green"],"Cafe Manager":["silver"],"Head Chef":["silver"],"Area Manager":["gold"],HOD:["gold"],CEO:["green","silver","gold","crystal"],COO:["green","silver","gold","crystal"],Owner:["green","silver","gold","crystal"]},Dn={green:{id:"green",icon:"🟢",label:"Minor",base_db:1,pts:5},silver:{id:"silver",icon:"🟠",label:"Moderate",base_db:3,pts:15},gold:{id:"gold",icon:"🔴",label:"Serious",base_db:5,pts:25},crystal:{id:"crystal",icon:"⚫",label:"Severe",base_db:10,pts:50}},vc={"Floor Manager":["green"],"Sous Chef":["green"],"Cafe Manager":["green","silver"],"Head Chef":["green","silver"],"Area Manager":["green","silver","gold"],HOD:["green","silver","gold"],HR:["green","silver","gold","crystal"],CEO:["green","silver","gold","crystal"],COO:["green","silver","gold","crystal"],Owner:["green","silver","gold","crystal"]},gs=5,yc=[{id:"act_01",name:"Daily Task Completion",applicable_bean_tier:"any",active:!0},{id:"act_02",name:"Perfect Attendance",applicable_bean_tier:"any",active:!0},{id:"act_03",name:"Upsell Achievement",applicable_bean_tier:"silver",active:!0},{id:"act_04",name:"Training Completion",applicable_bean_tier:"any",active:!0},{id:"act_05",name:"Customer Recovery Handle",applicable_bean_tier:"silver",active:!0},{id:"act_06",name:"Outlet Opening Standard",applicable_bean_tier:"any",active:!0},{id:"act_07",name:"Special Initiative",applicable_bean_tier:"gold",active:!0}],bc=[{id:"off_01",name:"Late Arrival",base_db:1,escalation:"double",submission_cap:8,active:!0},{id:"off_02",name:"No-Show No Notice",base_db:5,escalation:"double",submission_cap:20,active:!0},{id:"off_03",name:"Negligence",base_db:2,escalation:"double",submission_cap:16,active:!0},{id:"off_04",name:"Duty Denial",base_db:3,escalation:"double",submission_cap:24,active:!0},{id:"off_05",name:"Misconduct",base_db:4,escalation:"double",submission_cap:32,active:!0},{id:"off_06",name:"Serious/Insubordination",base_db:10,escalation:"double",submission_cap:40,active:!0}],mr=[{id:"SHB",name:"Sarabha Nagar",brand:"Heebee Coffee"},{id:"GHB",name:"Ghumar Mandi",brand:"Heebee Coffee"},{id:"JLD",name:"Model Town, Jalandhar",brand:"Heebee Coffee"},{id:"POUR",name:"Pour by Heebee",brand:"Pour"}];function wc(n){return At.includes(n)}function gr(n){return Pi.includes(n)}function Ec(n){return Oi.includes(n)}function _t(n){return n==="HR"}function Z(n){return["CEO","COO","Owner"].includes(n)}function Cc(n){const e={},t={};n.forEach(({giver_id:s,receiver_id:r,points_value:o})=>{e[s]=(e[s]||0)+o;const a=`${s}::${r}`;t[a]=(t[a]||0)+o});const i=[];return Object.entries(t).forEach(([s,r])=>{const[o,a]=s.split("::"),l=e[o]||0;l>0&&r/l>.6&&i.push({type:"bias_concentration",giver_id:o,receiver_id:a,pct:Math.round(r/l*100)})}),i}function xc(n){return n>=100?"disciplinary":n>=51?"owners_notified":n>=26?"suggest_disqualify":n>=10?"silent_flag":null}function Ic(n){const e={green:0,silver:0,gold:0,crystal:0};return n.forEach(({bean_type:t})=>{e[t]!==void 0&&e[t]++}),Object.entries(e).filter(([,t])=>t>0).map(([t,i])=>`${fe[t].icon} ${i}`).join(" · ")}const Mg=Object.freeze(Object.defineProperty({__proto__:null,ADMIN_ROLES:Oi,BEAN_TIERS:fe,CONDUCT_TIERS:Dn,DB_POINTS_EACH:gs,DEFAULT_ACTIONS:yc,DEFAULT_OFFENSES:bc,GIVER_ROLES:Pi,OUTLETS:mr,RECEIVER_ROLES:At,ROLE_BEAN_PERMISSIONS:_c,ROLE_CONDUCT_PERMISSIONS:vc,checkBiasConcentration:Cc,formatBeanCounts:Ic,getDBThresholdLevel:xc,isAdmin:Ec,isGiver:gr,isHR:_t,isOwner:Z,isReceiver:wc},Symbol.toStringTag,{value:"Module"})),$g=[...At,...Pi,...Oi];async function Fg(n){const e=new TextEncoder().encode(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function Ug(n,e){n.innerHTML=`
    <div class="page" style="display:flex;flex-direction:column;justify-content:center;min-height:100dvh;padding:32px 24px;">

      <div class="text-center" style="margin-bottom:32px;">
        <img src="./logo-light.png" alt="Heebee Coffee" style="width:80px;height:80px;object-fit:contain;margin-bottom:12px;" />
        <h1 style="font-size:1.4rem;color:#fff;margin-bottom:4px;">Join the Team</h1>
        <p class="text-dim text-sm">Your manager will approve your account</p>
      </div>

      <div style="display:flex;flex-direction:column;gap:16px;">

        <div>
          <p class="section-header">Full Name</p>
          <input id="reg-name" type="text" class="input" placeholder="e.g. Riya Sharma" autocomplete="name" />
        </div>

        <div>
          <p class="section-header">Work Email</p>
          <input id="reg-email" type="email" class="input" placeholder="you@heebeecoffee.com" inputmode="email" />
        </div>

        <div>
          <p class="section-header">Your Role</p>
          <select id="reg-role" class="input" style="appearance:none;-webkit-appearance:none;">
            <option value="">Select role…</option>
            ${$g.map(d=>`<option value="${d}">${d}</option>`).join("")}
          </select>
        </div>

        <div>
          <p class="section-header">Outlet</p>
          <select id="reg-outlet" class="input" style="appearance:none;-webkit-appearance:none;">
            <option value="">Select outlet…</option>
            ${mr.map(d=>`<option value="${d.id}">${d.name}</option>`).join("")}
          </select>
        </div>

        <div>
          <p class="section-header">Set Your 4-Digit PIN</p>
          <div class="flex gap-12 justify-center mt-8">
            <input type="tel" maxlength="1" class="pin-box" id="reg-pin-0" inputmode="numeric" />
            <input type="tel" maxlength="1" class="pin-box" id="reg-pin-1" inputmode="numeric" />
            <input type="tel" maxlength="1" class="pin-box" id="reg-pin-2" inputmode="numeric" />
            <input type="tel" maxlength="1" class="pin-box" id="reg-pin-3" inputmode="numeric" />
          </div>
        </div>

      </div>

      <p id="reg-error" class="text-sm text-center hidden mt-16" style="color:var(--red);"></p>
      <p id="reg-success" class="text-sm text-center hidden mt-16" style="color:#4caf8a;"></p>

      <button class="btn btn-primary w-full mt-24" id="btn-reg-submit" style="height:52px;">
        Submit Registration
      </button>
      <button class="btn btn-ghost w-full mt-8 text-sm" id="btn-reg-back">
        ← Back to Login
      </button>

    </div>
  `;const t=n.querySelector("#reg-name"),i=n.querySelector("#reg-email"),s=n.querySelector("#reg-role"),r=n.querySelector("#reg-outlet"),o=[0,1,2,3].map(d=>n.querySelector(`#reg-pin-${d}`)),a=n.querySelector("#reg-error"),l=n.querySelector("#reg-success"),c=n.querySelector("#btn-reg-submit");o.forEach((d,u)=>{d.addEventListener("input",p=>{const _=p.target.value.replace(/\D/g,"");p.target.value=_,_&&u<3&&o[u+1].focus()}),d.addEventListener("keydown",p=>{p.key==="Backspace"&&!d.value&&u>0&&(o[u-1].focus(),o[u-1].value="")})}),n.querySelector("#btn-reg-back").addEventListener("click",e),c.addEventListener("click",async()=>{a.classList.add("hidden");const d=t.value.trim(),u=i.value.trim().toLowerCase(),p=s.value,_=r.value,f=o.map(w=>w.value).join("");if(!d)return h("Enter your full name");if(!u.includes("@"))return h("Enter a valid email");if(!p)return h("Select your role");if(!_)return h("Select your outlet");if(f.length<4)return h("Enter a 4-digit PIN");c.disabled=!0,c.textContent="Submitting…";try{const w=await Fg(f);await Ql({name:d,email:u,role:p,outlet:_,pin_hash:w}),l.textContent="Request sent! Your manager will approve your account shortly.",l.classList.remove("hidden"),c.textContent="Submitted!",setTimeout(e,3e3)}catch{h("Something went wrong. Please try again."),c.disabled=!1,c.textContent="Submit Registration"}});function h(d){a.textContent=d,a.classList.remove("hidden")}}function Sc(n,e){n.innerHTML=`
    <div class="page" style="display:flex;flex-direction:column;justify-content:center;min-height:100dvh;">

      <!-- Logo / Brand -->
      <div class="text-center" style="margin-bottom:40px;">
        <img src="./logo-light.png" alt="Heebee Coffee" style="width:120px;height:120px;object-fit:contain;margin-bottom:12px;" />
        <h1 style="font-size:1.6rem;color:#fff;margin-bottom:4px;">Heebee Beans</h1>
        <p class="text-dim text-sm">Staff Recognition System</p>
      </div>

      <!-- Email Input -->
      <div id="step-email">
        <p class="section-header">Your email</p>
        <input
          id="inp-email"
          type="email"
          inputmode="email"
          autocomplete="email"
          class="input"
          placeholder="you@heebeecoffee.com"
        />
        <button class="btn btn-primary w-full mt-16" id="btn-next" style="height:52px;">
          Continue
        </button>
      </div>

      <!-- Register link -->
      <div class="text-center mt-16">
        <button class="btn btn-ghost text-sm" id="btn-register" style="color:var(--text-secondary);">
          New here? Request access
        </button>
      </div>

      <!-- PIN Input (hidden initially) -->
      <div id="step-pin" class="hidden">
        <p class="section-header">Enter your 4-digit PIN</p>
        <div class="flex gap-12 justify-center mt-8 mb-16">
          <input type="tel" maxlength="1" class="pin-box" id="pin-0" inputmode="numeric" />
          <input type="tel" maxlength="1" class="pin-box" id="pin-1" inputmode="numeric" />
          <input type="tel" maxlength="1" class="pin-box" id="pin-2" inputmode="numeric" />
          <input type="tel" maxlength="1" class="pin-box" id="pin-3" inputmode="numeric" />
        </div>
        <p id="login-error" class="text-sm text-center hidden" style="color:var(--red);margin-bottom:12px;"></p>
        <button class="btn btn-ghost w-full text-sm" id="btn-back">← Change email</button>
      </div>

    </div>
  `;const t=n.querySelector("#inp-email"),i=n.querySelector("#btn-next"),s=n.querySelector("#step-email"),r=n.querySelector("#step-pin"),o=n.querySelector("#login-error"),a=n.querySelector("#btn-back");let l="";i.addEventListener("click",c),t.addEventListener("keydown",C=>{C.key==="Enter"&&c()});function c(){const C=t.value.trim().toLowerCase();if(!C.includes("@")){_("Enter a valid email address");return}l=C,s.classList.add("hidden"),r.classList.remove("hidden"),n.querySelector("#pin-0").focus(),u(C)}a.addEventListener("click",()=>{r.classList.add("hidden"),s.classList.remove("hidden"),w(),f()}),n.querySelector("#btn-register").addEventListener("click",()=>{Ug(n,()=>Sc(n,e))});const h=[0,1,2,3].map(C=>n.querySelector(`#pin-${C}`));h.forEach((C,E)=>{C.addEventListener("input",O=>{const y=O.target.value.replace(/\D/g,"");O.target.value=y,y&&E<3&&h[E+1].focus(),E===3&&y&&d()}),C.addEventListener("keydown",O=>{O.key==="Backspace"&&!C.value&&E>0&&(h[E-1].focus(),h[E-1].value="")})});async function d(){const C=h.map(E=>E.value).join("");if(!(C.length<4)){k(!0),f();try{const E=await Ag(l,C);e(E),ci()&&!E.webauthn_id&&setTimeout(()=>p(E),500)}catch(E){_(E.message==="Incorrect PIN"?"Incorrect PIN. Try again.":"Employee not found."),w(),h[0].focus()}finally{k(!1)}}}async function u(C){if(ci())try{const E=await le(),O=Object.entries(E).map(([A,m])=>({id:A,...m})).find(A=>A.email===C&&A.webauthn_id&&A.active!==!1);if(!O)return;const y=await Pg(O);y&&e(y)}catch{}}async function p(C){confirm("Enable Face ID / Fingerprint for faster login?")&&await Ng(C)}function _(C){o.textContent=C,o.classList.remove("hidden")}function f(){o.classList.add("hidden")}function w(){h.forEach(C=>{C.value=""})}function k(C){h.forEach(E=>{E.disabled=C})}}const pt=300,Bg=80;async function qg(n){return new Promise((e,t)=>{const i=new Image,s=URL.createObjectURL(n);i.onload=()=>{URL.revokeObjectURL(s);const r=document.createElement("canvas");let{width:o,height:a}=i;o>a&&o>pt?(a=Math.round(a*pt/o),o=pt):a>pt&&(o=Math.round(o*pt/a),a=pt),r.width=o,r.height=a,r.getContext("2d").drawImage(i,0,0,o,a),Tc(r,.8,e)},i.onerror=t,i.src=s})}function Tc(n,e,t,i){const s=n.toDataURL("image/jpeg",e);Math.round(s.length*3/4/1024)<=Bg||e<=.3?t(s):Tc(n,e-.15,t)}function ge(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`}function st(n){return Number(n||0).toLocaleString("en-IN")}function Se(n){const e=Date.now()-n;return e<6e4?"just now":e<36e5?`${Math.floor(e/6e4)}m ago`:e<864e5?`${Math.floor(e/36e5)}h ago`:`${Math.floor(e/864e5)}d ago`}function To(){const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function Hg(n=new Date){return!0}function zg(n){return Object.entries(n).map(([e,t])=>({id:e,...t})).sort((e,t)=>(t.net_points||t.points||0)-(e.net_points||e.points||0)).map((e,t)=>({...e,rank:t+1}))}async function jg(n,e,t,{onLogout:i,navigate:s}){t.db_toggle,n.innerHTML=`
    <div class="page">
      <div class="flex justify-between items-center mb-16">
        <div>
          <h1 style="font-size:1.5rem;">${e.name}</h1>
          <p class="text-dim text-sm">${e.role} · ${e.outlet}</p>
        </div>
        <button class="btn btn-ghost text-sm" id="btn-logout" style="padding:8px 14px;">Sign out</button>
      </div>
      <div id="dash-loading" class="loading-center" style="min-height:40vh;"><div class="spinner"></div></div>
      <div id="dash-content" class="hidden"></div>
    </div>
  `,n.querySelector("#btn-logout").addEventListener("click",i);try{gr(e.role)?await Vg(n,e,s):Ec(e.role)?await Gg(n,e,s):await Wg(n,e,t,s)}catch(r){console.error("Dashboard error:",r),n.querySelector("#dash-loading").classList.remove("hidden"),n.querySelector("#dash-loading").innerHTML=`<div class="empty-state"><p style="color:var(--red);">Failed to load dashboard.</p><p class="text-dim text-sm mt-8">${r.message}</p></div>`}}async function Wg(n,e,t,i){const s=t.db_toggle===!0,[r,o,a,l,c,h]=await Promise.all([En(e.id),Cn(e.id),ql(e.id),le(),Ft(),cc(e.id)]);n.querySelector("#dash-loading").classList.add("hidden");const d=n.querySelector("#dash-content");d.classList.remove("hidden"),ki(ge(),E=>{const O=zg(E),y=["Trainee","Barista","Senior Barista","Kitchen Helper","Commi 3","Commi 2","Commi 1","DCDP","CDP"],m=O.filter(x=>{const R=l[x.id]||{};return y.includes(R.role||"")}).findIndex(x=>x.id===e.id),g=d.querySelector("#nomination-banner");g&&(m>=0&&m<5?(g.innerHTML=`
          <div class="card mb-16" style="text-align:center;padding:20px 16px;background:rgba(201,168,76,0.1);border-color:rgba(201,168,76,0.5);position:relative;overflow:hidden;">
            <div style="position:absolute;top:-10px;right:-10px;font-size:4rem;opacity:0.08;pointer-events:none;">👑</div>
            <div style="font-size:1.8rem;margin-bottom:6px;">👑</div>
            <p style="font-weight:700;color:var(--gold);font-size:1rem;margin-bottom:4px;">You're nominated for Queen Bee!</p>
            <p class="text-dim text-sm">You're nominee #${m+1} this month — the team is voting for you!</p>
          </div>
        `,g.classList.remove("hidden")):(g.innerHTML="",g.classList.add("hidden")));const T=O.find(x=>x.id===e.id),v=d.querySelector("#my-rank");v&&T&&(v.textContent=`#${T.rank}`)});const u=a.slice(0,5),p=Ic(a),_=e.name.split(" ").map(E=>E[0]).join("").slice(0,2).toUpperCase(),f=["#8B5E3C","#5E6E8B","#5E8B6E","#8B5E7A","#7A8B5E","#6E5E8B","#8B7A5E"],w=f[e.name.charCodeAt(0)%f.length];d.innerHTML=`
    <!-- Profile Photo -->
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px;">
      <div style="position:relative;">
        ${e.photo_url?`<img id="profile-hex" src="${e.photo_url}" style="width:64px;height:64px;clip-path:polygon(50% 0%,95% 25%,95% 75%,50% 100%,5% 75%,5% 25%);object-fit:cover;" />`:`<div id="profile-hex" style="width:64px;height:64px;clip-path:polygon(50% 0%,95% 25%,95% 75%,50% 100%,5% 75%,5% 25%);background:${w};display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:1.3rem;">${_}</div>`}
        <label for="photo-upload" style="position:absolute;bottom:-4px;right:-4px;width:22px;height:22px;background:var(--gold);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:0.65rem;color:#000;font-weight:700;">📷</label>
        <input type="file" id="photo-upload" accept="image/*" style="display:none;" />
      </div>
      <div>
        <p style="font-weight:600;font-size:1rem;">${e.name}</p>
        <p class="text-dim text-sm">${e.role} · ${e.outlet}</p>
        <p id="photo-status" class="text-dim" style="font-size:0.72rem;margin-top:2px;"></p>
      </div>
    </div>

    <div id="nomination-banner" class="hidden"></div>

    <div class="card mb-16" style="text-align:center;padding:28px 20px;">
      <p class="section-header" style="margin-bottom:4px;">This Month</p>
      <div class="mono text-gold" style="font-size:3rem;font-weight:400;margin-bottom:4px;">
        ${st(r.net_points||r.points||0)}
      </div>
      <p class="text-dim text-sm">points · Rank <span id="my-rank" class="text-gold">#${r.rank||"—"}</span></p>
    </div>

    <div class="card mb-16">
      <div class="flex justify-between items-center">
        <div>
          <p class="section-header">🏦 Vault</p>
          <div class="mono" style="font-size:1.6rem;margin-top:4px;">
            ${st(o.total_earned||0)} <span class="text-dim text-sm">pts earned</span>
          </div>
        </div>
        ${s&&o.total_deducted>0?`
        <div style="text-align:right;">
          <p class="text-sm" style="color:var(--red);">−${st(o.total_deducted)}</p>
          <p class="text-xs text-dim">deducted</p>
          <p class="mono text-sm text-gold mt-4">${st(o.net)} net</p>
        </div>`:""}
      </div>
    </div>

    ${p?`
    <div class="card mb-16">
      <p class="section-header">🏆 Trophy Shelf</p>
      <div class="trophy-shelf mt-8">${Yg(a)}</div>
    </div>`:""}

    <p class="section-header">Recent Beans</p>
    ${u.length===0?'<div class="empty-state"><div class="icon">🫘</div><p>No beans yet this month</p></div>':u.map(E=>Qg(E,l,c)).join("")}

    ${h.length>0?`
      <p class="section-header" style="margin-top:24px;">⭐ Special Awards</p>
      ${h.slice(0,5).map(E=>`
        <div class="lb-row" style="margin-bottom:8px;">
          <span style="font-size:1.4rem;">${E.destination==="monthly"?"📊":"🏦"}</span>
          <div style="flex:1;">
            <p style="font-size:0.9rem;">Special Award · <span class="text-gold mono">+${E.amount} pts</span> → ${E.destination==="monthly"?"Monthly Score":"Vault"}</p>
            <p class="text-dim text-xs">From <span style="color:var(--text-secondary);">${E.giver_name}</span>${E.reason?` · "${E.reason}"`:""} · ${Se(E.timestamp)}</p>
          </div>
        </div>
      `).join("")}
    `:""}
  `;const k=d.querySelector("#photo-upload"),C=d.querySelector("#photo-status");d.querySelector("#profile-hex"),k==null||k.addEventListener("change",async E=>{const O=E.target.files[0];if(O){C.textContent="Compressing…";try{const y=await qg(O),A=Math.round(y.length/1024);await Ti(e.id,{photo_url:y}),e.photo_url=y;const m=d.querySelector("#profile-hex");m&&(m.outerHTML=`<img id="profile-hex" src="${y}" style="width:64px;height:64px;clip-path:polygon(50% 0%,95% 25%,95% 75%,50% 100%,5% 75%,5% 25%);object-fit:cover;" />`),C.textContent=`✓ Saved (${A}KB)`,setTimeout(()=>{C.textContent=""},3e3)}catch(y){C.textContent="Failed. Try a smaller image.",console.error(y)}}})}async function Vg(n,e,t){var O,y,A,m;const i=["Owner","CEO","COO","HR"].includes(e.role),s=ge(),[r,o,a,l,c,h,d,u,p]=await Promise.all([oi(e.id),le(),Ft(),ic(e.id),Ut(),i?Ai():Promise.resolve({}),i?Ri(s):Promise.resolve(null),i?xn(s):Promise.resolve({}),Z(e.role)?lc(e.id):Promise.resolve([])]),_=Object.keys(u).length>0;n.querySelector("#dash-loading").classList.add("hidden");const f=n.querySelector("#dash-content");f.classList.remove("hidden");const w=ge(),k=r.filter(g=>{const T=new Date(g.timestamp);return`${T.getFullYear()}-${String(T.getMonth()+1).padStart(2,"0")}`===w}),C=k.reduce((g,T)=>g+T.points_value*(T.quantity||1),0),E={green:0,silver:0,gold:0,crystal:0};k.forEach(g=>{E[g.bean_type]!==void 0&&E[g.bean_type]++}),f.innerHTML=`
    <div class="card mb-16" style="text-align:center;padding:28px 20px;">
      <p class="section-header" style="margin-bottom:4px;">Beans Given This Month</p>
      <div class="mono text-gold" style="font-size:3rem;font-weight:400;margin-bottom:4px;">
        ${k.length}
      </div>
      <p class="text-dim text-sm">${st(C)} pts awarded to your team</p>
    </div>

    <div class="card mb-16">
      <p class="section-header" style="margin-bottom:12px;">Bean Breakdown</p>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;text-align:center;">
        ${Object.entries(E).map(([g,T])=>`
          <div style="padding:12px 8px;border-radius:12px;background:var(--glass-bg);">
            <div style="font-size:1.4rem;margin-bottom:4px;">${fe[g].icon}</div>
            <div class="mono text-gold" style="font-size:1rem;">${T}</div>
            <div class="text-dim" style="font-size:0.65rem;margin-top:2px;">${fe[g].label.replace(" Bean","")}</div>
          </div>
        `).join("")}
      </div>
    </div>

    <div style="display:flex;gap:10px;margin-bottom:24px;">
      <button class="btn btn-primary" id="btn-quick-award" style="flex:1;height:48px;">
        + Award Beans
      </button>
    </div>

    ${i?kc(d,o,s,_):""}
    ${Z(e.role)?Kg(h):""}

    <p class="section-header">Recent Awards Given</p>
    ${k.length===0?'<div class="empty-state"><div class="icon">🫘</div><p>No beans given this month yet</p></div>':k.slice(0,5).map(g=>Xg(g,o,a)).join("")}

    <p class="section-header" style="margin-top:24px;">Recent Conduct Issued</p>
    <div id="conduct-list">
    ${l.length===0?'<div class="empty-state" style="padding:24px;"><div class="icon" style="font-size:1.5rem;">🌑</div><p class="text-dim text-sm">No conduct issued this month</p></div>':l.slice(0,5).map(g=>Jg(g,o,c)).join("")}
    </div>

    ${Z(e.role)&&p.length>0?`
      <p class="section-header" style="margin-top:24px;">⭐ Direct Awards Given</p>
      ${p.slice(0,5).map(g=>{const T=o[g.receiver_id];return`
          <div class="lb-row" style="margin-bottom:8px;">
            <span style="font-size:1.4rem;">${g.destination==="monthly"?"📊":"🏦"}</span>
            <div style="flex:1;">
              <p style="font-size:0.9rem;">${(T==null?void 0:T.name)||g.receiver_id} · <span class="text-gold mono">+${g.amount} pts</span> → ${g.destination==="monthly"?"Monthly Score":"Vault"}</p>
              <p class="text-dim text-xs">${g.reason?`"${g.reason}" · `:""}${Se(g.timestamp)}</p>
            </div>
          </div>
        `}).join("")}
    `:""}
  `,(O=f.querySelector("#btn-quick-award"))==null||O.addEventListener("click",()=>t("award")),(y=f.querySelector("#toggle-voting-pts"))==null||y.addEventListener("change",async g=>{const T=g.target.checked,v=g.target.nextElementSibling,x=v==null?void 0:v.querySelector("span");v&&(v.style.background=T?"var(--gold)":"var(--border)"),x&&(x.style.left=T?"23px":"3px"),await hc({voting_points_enabled:T})}),(A=f.querySelector("#btn-set-wildcard"))==null||A.addEventListener("click",async()=>{if(_)return;const g=f.querySelector("#wildcard-select"),T=g==null?void 0:g.value;if(!T)return;const v=f.querySelector("#btn-set-wildcard");v.disabled=!0,v.textContent="Saving…",await fr(s,{employee_id:T,nominated_by_id:e.id,nominated_by_name:e.name,nominated_at:Date.now()}),v.textContent="✓ Saved";const x=f.querySelector("#wildcard-status"),R=o[T];x&&(x.textContent=`⭐ ${(R==null?void 0:R.name)||T} is this month's wildcard nominee`),v.disabled=!1}),(m=f.querySelector("#btn-clear-wildcard"))==null||m.addEventListener("click",async()=>{if(_)return;const g=f.querySelector("#btn-clear-wildcard");g.disabled=!0,g.textContent="Clearing…",await pr(s),g.textContent="Cleared";const T=f.querySelector("#wildcard-status");T&&(T.textContent="No wildcard nominee set"),f.querySelector("#wildcard-select").value=""}),f.querySelectorAll(".btn-revoke-request").forEach(g=>{g.addEventListener("click",async()=>{const T=g.dataset.id,v=l.find(R=>R.id===T);if(!v)return;const x=prompt("Reason for revoking this conduct? (required)");if(!(!x||!x.trim())){g.disabled=!0,g.textContent="Requesting…";try{await sc({dark_bean_id:T,receiver_id:v.receiver_id,giver_id:e.id,giver_name:e.name,offense_id:v.offense_id,conduct_tier:v.conduct_tier,db_count:v.db_count,pts_deducted:v.pts_deducted,month_key:v.month_key,reason:x.trim()}),g.textContent="⏳ Pending Approval",g.style.color="var(--text-secondary)"}catch(R){g.disabled=!1,g.textContent="Request Revoke",console.error(R)}}})})}async function Gg(n,e,t){var c,h,d,u;const i=ge(),[s,r,o]=await Promise.all([le(),Ri(i),xn(i)]),a=Object.keys(o).length>0;n.querySelector("#dash-loading").classList.add("hidden");const l=n.querySelector("#dash-content");l.classList.remove("hidden"),l.innerHTML=`
    <div class="card mb-16" style="text-align:center;padding:32px 20px;">
      <div style="font-size:2rem;margin-bottom:12px;">👋</div>
      <h2 style="font-size:1.1rem;margin-bottom:6px;">Welcome, ${e.name}</h2>
      <p class="text-dim text-sm">${e.role} · ${e.outlet}</p>
    </div>

    ${kc(r,s,i,a)}

    <div class="card mb-12" style="cursor:pointer;" id="goto-approvals">
      <div class="flex justify-between items-center">
        <div>
          <p style="font-weight:600;margin-bottom:2px;">Pending Approvals</p>
          <p class="text-dim text-sm">Review staff registration requests</p>
        </div>
        <span style="color:var(--gold);font-size:1.2rem;">›</span>
      </div>
    </div>
    <div class="card mb-12" style="cursor:pointer;" id="goto-audit">
      <div class="flex justify-between items-center">
        <div>
          <p style="font-weight:600;margin-bottom:2px;">Audit Log</p>
          <p class="text-dim text-sm">Review flags and bean activity</p>
        </div>
        <span style="color:var(--gold);font-size:1.2rem;">›</span>
      </div>
    </div>
  `,(c=l.querySelector("#goto-approvals"))==null||c.addEventListener("click",()=>t("approvals")),(h=l.querySelector("#goto-audit"))==null||h.addEventListener("click",()=>t("audit")),(d=l.querySelector("#btn-set-wildcard"))==null||d.addEventListener("click",async()=>{if(a)return;const p=l.querySelector("#wildcard-select"),_=p==null?void 0:p.value;if(!_)return;const f=l.querySelector("#btn-set-wildcard");f.disabled=!0,f.textContent="Saving…",await fr(i,{employee_id:_,nominated_by_id:e.id,nominated_by_name:e.name,nominated_at:Date.now()}),f.textContent="✓ Saved";const w=l.querySelector("#wildcard-status"),k=s[_];w&&(w.textContent=`⭐ ${(k==null?void 0:k.name)||_} is this month's wildcard nominee`),f.disabled=!1}),(u=l.querySelector("#btn-clear-wildcard"))==null||u.addEventListener("click",async()=>{if(a)return;const p=l.querySelector("#btn-clear-wildcard");p.disabled=!0,p.textContent="Clearing…",await pr(i),p.textContent="Cleared";const _=l.querySelector("#wildcard-status");_&&(_.textContent="No wildcard nominee set"),l.querySelector("#wildcard-select").value=""})}function kc(n,e,t,i=!1){var o;const s=n?((o=e[n.employee_id])==null?void 0:o.name)||n.employee_id:null;if(i)return`
      <div class="card mb-16" style="border-color:rgba(201,168,76,0.3);background:rgba(201,168,76,0.04);">
        <div class="flex justify-between items-center" style="margin-bottom:6px;">
          <p class="section-header" style="margin-bottom:0;">⭐ Wildcard Nominee</p>
          <span style="font-size:0.72rem;color:var(--text-tertiary);background:rgba(255,255,255,0.06);padding:3px 8px;border-radius:10px;">🔒 Locked</span>
        </div>
        <p class="text-dim text-sm" style="margin-bottom:10px;">Voting has started — wildcard cannot be changed to protect integrity.</p>
        <p style="font-size:0.88rem;color:var(--gold);">${s?`⭐ ${s} is this month's wildcard`:"No wildcard was set before voting began"}</p>
      </div>
    `;const r=Object.entries(e).filter(([,a])=>a.active!==!1).sort(([,a],[,l])=>(a.name||"").localeCompare(l.name||"")).map(([a,l])=>`<option value="${a}" ${(n==null?void 0:n.employee_id)===a?"selected":""}>${l.name} (${l.role})</option>`).join("");return`
    <div class="card mb-16" style="border-color:rgba(201,168,76,0.3);background:rgba(201,168,76,0.04);">
      <p class="section-header" style="margin-bottom:4px;">⭐ Wildcard Nominee</p>
      <p class="text-dim text-sm" style="margin-bottom:12px;">Pick one outstanding staff member to add as the 6th nominee this month. Locks permanently once the first vote is cast.</p>
      <p id="wildcard-status" style="font-size:0.82rem;color:var(--gold);margin-bottom:10px;">${s?`⭐ ${s} is this month's wildcard`:"No wildcard nominee set"}</p>
      <select id="wildcard-select" class="input" style="margin-bottom:10px;padding:10px 14px;">
        <option value="">Select staff member…</option>
        ${r}
      </select>
      <div class="flex gap-8">
        <button class="btn btn-primary" id="btn-set-wildcard" style="flex:1;padding:10px;font-size:0.85rem;">Set Wildcard</button>
        ${n?'<button class="btn btn-ghost" id="btn-clear-wildcard" style="padding:10px;font-size:0.85rem;color:var(--red);">Clear</button>':""}
      </div>
    </div>
  `}function Kg(n){const e=n.voting_points_enabled!==!1;return`
    <div class="card mb-16" style="padding:16px;">
      <div class="flex justify-between items-center">
        <div>
          <p style="font-weight:600;font-size:0.9rem;">Voting Reward Points</p>
          <p class="text-dim text-sm">+25 pts when staff cast their monthly vote</p>
        </div>
        <label style="position:relative;display:inline-block;width:44px;height:24px;cursor:pointer;">
          <input type="checkbox" id="toggle-voting-pts" ${e?"checked":""} style="opacity:0;width:0;height:0;position:absolute;" />
          <span style="position:absolute;inset:0;border-radius:24px;background:${e?"var(--gold)":"var(--border)"};transition:background 0.2s;">
            <span style="position:absolute;top:3px;left:${e?"23px":"3px"};width:18px;height:18px;border-radius:50%;background:#fff;transition:left 0.2s;"></span>
          </span>
        </label>
      </div>
    </div>
  `}function Yg(n){const e={green:0,silver:0,gold:0,crystal:0};return n.forEach(({bean_type:t})=>{e[t]!==void 0&&e[t]++}),Object.entries(e).filter(([,t])=>t>0).map(([t,i])=>`
      <div class="trophy-item">
        <span style="font-size:1.3rem;">${fe[t].icon}</span>
        <span>${i}</span>
      </div>
    `).join("")}function Qg(n,e={},t={}){var a;const i=fe[n.bean_type]||{icon:"🫘",label:n.bean_type},s=e[n.giver_id],r=(s==null?void 0:s.name)||n.giver_name||"Manager",o=((a=t[n.action_id])==null?void 0:a.name)||"";return`
    <div class="lb-row" style="margin-bottom:8px;">
      <span style="font-size:1.4rem;">${i.icon}</span>
      <div style="flex:1;">
        <p style="font-size:0.9rem;">${i.label} · <span class="text-gold mono">+${n.points_value*(n.quantity||1)} pts</span></p>
        <p class="text-dim text-xs">From <span style="color:var(--text-secondary);">${r}</span>${o?` · ${o}`:""} · ${Se(n.timestamp)}</p>
      </div>
    </div>
  `}function Jg(n,e={},t={}){const i=e[n.receiver_id],s=i?i.name:"Staff",r=t[n.offense_id],o=(r==null?void 0:r.name)||n.offense_id||"Conduct";return`
    <div class="lb-row" style="margin-bottom:8px;flex-direction:column;align-items:stretch;gap:8px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-size:1.3rem;">${{green:"🟢",silver:"🟠",gold:"🔴",crystal:"⚫"}[n.conduct_tier]||"🌑"}</span>
        <div style="flex:1;">
          <p style="font-size:0.9rem;">${s} · <span style="color:var(--red);" class="mono">−${n.pts_deducted} pts</span></p>
          <p class="text-dim text-xs">${o} · ${Se(n.timestamp)}</p>
        </div>
      </div>
      ${Date.now()-n.timestamp<864e5?`<button class="btn btn-ghost btn-revoke-request text-sm" data-id="${n.id}"
            style="padding:6px 12px;font-size:0.78rem;color:var(--text-secondary);border-color:rgba(255,69,58,0.3);">
            Request Revoke
          </button>`:'<p style="font-size:0.72rem;color:var(--text-tertiary);padding:4px 0;">⏰ Revoke window closed (24hr passed)</p>'}
    </div>
  `}function Xg(n,e={},t={}){var a;const i=fe[n.bean_type]||{icon:"🫘",label:n.bean_type},s=e[n.receiver_id],r=s?s.name:n.giver_name||"Staff",o=((a=t[n.action_id])==null?void 0:a.name)||n.action_id||"Award";return`
    <div class="lb-row" style="margin-bottom:8px;">
      <span style="font-size:1.4rem;">${i.icon}</span>
      <div style="flex:1;">
        <p style="font-size:0.9rem;">${r} · <span class="text-gold mono">+${n.points_value*(n.quantity||1)} pts</span></p>
        <p class="text-dim text-xs">${o} · ${Se(n.timestamp)}</p>
      </div>
    </div>
  `}function Zg(n){const e=(n.name||"??").split(" ").map(r=>r[0]).join("").slice(0,2).toUpperCase(),t=["#8B5E3C","#5E6E8B","#5E8B6E","#8B5E7A","#7A8B5E","#6E5E8B","#8B7A5E"],i=t[(n.name||"").charCodeAt(0)%t.length],s=n.photo_url;return s?`<div class="avatar-hex-wrap"><img class="avatar-hex" src="${s}" alt="${e}" /></div>`:`
    <div class="avatar-hex-wrap">
      <div class="avatar-hex" style="background:${i};color:#fff;">
        ${e}
      </div>
    </div>
  `}function e_(n,e,t){let i={};n.innerHTML=`
    <div class="page">
      <h1 style="font-size:1.4rem;margin-bottom:2px;">Leaderboard</h1>
      <p class="text-dim text-sm" style="margin-bottom:20px;">${t_()} · Live</p>
      <div id="lb-list">
        <div class="loading-center" style="min-height:40vh;"><div class="spinner"></div></div>
      </div>
    </div>
  `;const s=n.querySelector("#lb-list");le().then(o=>{i=o;const a=ki(ge(),c=>{r(c)}),l=new MutationObserver(()=>{document.contains(s)||(a(),l.disconnect())});l.observe(document.body,{childList:!0,subtree:!0})});function r(o){const a=Object.entries(o).map(([l,c])=>({id:l,...c,emp:i[l]||{}})).filter(l=>l.emp.active!==!1).sort((l,c)=>(c.net_points||c.points||0)-(l.net_points||l.points||0)).map((l,c)=>({...l,rank:c+1}));if(a.length===0){s.innerHTML=`
        <div class="empty-state">
          <div style="font-size:2.5rem;margin-bottom:12px;">🏆</div>
          <p class="text-dim">No points recorded yet this month</p>
          <p class="text-dim text-sm" style="margin-top:4px;">Be the first to earn beans!</p>
        </div>
      `;return}s.innerHTML=a.map(l=>{const c=l.id===e.id,h=l.net_points||l.points||0,d=l.rank===1,u=l.rank===2?"🥈":l.rank===3?"🥉":null,p=l.rank<=3?`top${l.rank}`:"";return`
        <div class="lb-row ${d?"lb-row-top1":""} ${c?"self":""}" style="margin-bottom:${d?"20px":"8px"};">
          ${d?'<div class="queen-bee-glow"></div>':""}
          ${Zg(l.emp)}
          <div class="lb-rank ${p}" style="min-width:24px;">
            ${u?`<span style="font-size:1.1rem;">${u}</span>`:d?"":`<span style="font-size:0.8rem;color:var(--text-tertiary);">#${l.rank}</span>`}
          </div>
          <div class="lb-name">
            <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
              <span style="${d?"color:var(--gold);font-weight:600;":""}">${l.emp.name||l.id}</span>
              ${c?'<span class="badge badge-gold" style="font-size:0.6rem;padding:2px 7px;">You</span>':""}
              ${d?'<span style="font-size:0.75rem;color:var(--gold);opacity:0.9;display:flex;align-items:center;gap:3px;"><span class="queen-bee-crown" style="position:static;font-size:0.9rem;transform:none;animation:crown-float 2s ease-in-out infinite;display:inline-block;">👑🐝</span> Queen Bee</span>':""}
            </div>
            <div class="text-dim" style="font-size:0.75rem;margin-top:2px;">${l.emp.role||""} · ${l.emp.outlet||""}</div>
          </div>
          <div class="lb-pts">${st(h)} <span style="font-size:0.7rem;color:var(--text-tertiary);">pts</span></div>
        </div>
      `}).join("")}}function t_(){return new Date().toLocaleDateString("en-IN",{month:"long",year:"numeric"})}const n_="";async function i_(n,e){try{await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(t){console.error("Slack webhook failed:",t)}}async function s_({receiverName:n,beanType:e,pts:t,giverName:i,actionName:s}){const{BEAN_TIERS:r}=await Ul(async()=>{const{BEAN_TIERS:a}=await Promise.resolve().then(()=>Mg);return{BEAN_TIERS:a}},void 0),o=r[e];await i_(n_,{text:`${o.icon} *${o.label}* awarded to *${n}* · +${t} pts
👤 From: ${i} · 📋 ${s}`})}async function r_(n,e,t){const i=Z(e.role);n.innerHTML=`
    <div class="page">
      <h1 style="font-size:1.4rem;margin-bottom:4px;">Give Recognition</h1>
      <div class="flex gap-8 mb-16" id="award-tabs" style="margin-top:12px;flex-wrap:wrap;">
        <button class="btn ${e.role==="HR"?"btn-ghost":"btn-primary"} award-tab" data-tab="award" style="flex:1;padding:8px;font-size:0.8rem;">🫘 Award Beans</button>
        <button class="btn ${e.role==="HR"?"btn-primary":"btn-ghost"} award-tab" data-tab="conduct" style="flex:1;padding:8px;font-size:0.8rem;">🌑 Conduct</button>
        ${i?'<button class="btn btn-ghost award-tab" data-tab="direct" style="flex:1;padding:8px;font-size:0.8rem;">⭐ Direct</button>':""}
      </div>
      <div id="award-content">
        <div class="loading-center" style="min-height:40vh;"><div class="spinner"></div></div>
      </div>
    </div>
  `;let s=e.role==="HR"?"conduct":"award",r={},o={},a={},l=[];try{[r,o,a]=await Promise.all([le(),Ft(),Ut()]),l=Object.entries(r).map(([u,p])=>({id:u,...p})).filter(u=>wc(u.role)&&u.active!==!1).sort((u,p)=>u.name.localeCompare(p.name))}catch{n.querySelector("#award-content").innerHTML='<p class="text-dim text-sm text-center">Failed to load. Check connection.</p>';return}n.querySelectorAll(".award-tab").forEach(u=>{u.addEventListener("click",()=>{s=u.dataset.tab,n.querySelectorAll(".award-tab").forEach(p=>{p.className=p.dataset.tab===s?"btn btn-primary award-tab":"btn btn-ghost award-tab",p.style.flex="1",p.style.padding="10px"}),s==="award"?c():s==="direct"?h():d()})}),e.role==="HR"?d():c();function c(){const u=n.querySelector("#award-content"),p=_c[e.role]||[],_=Object.entries(o).map(([v,x])=>({id:v,...x})).filter(v=>v.active!==!1);if(l.length===0){u.innerHTML=`
        <div class="empty-state" style="min-height:40vh;">
          <div style="font-size:2.5rem;margin-bottom:16px;">👥</div>
          <p>No staff to award yet</p>
          <p class="text-dim text-sm mt-8">Approve team registrations from the Approvals tab first.</p>
        </div>
      `;return}let f={receiver:null,beanType:null,actionId:null,quantity:1},w=null;u.innerHTML=`
      <p class="section-header">Who are you recognising?</p>
      <input id="search-emp" class="input" type="text" placeholder="Search by name…" style="margin-bottom:10px;" />
      <div id="emp-list" style="max-height:200px;overflow-y:auto;margin-bottom:24px;border-radius:var(--radius-md);"></div>

      <p class="section-header">Bean Type</p>
      <div id="bean-type-list" style="display:grid;grid-template-columns:repeat(${p.length>2?4:p.length},1fr);gap:10px;margin-bottom:24px;">
        ${p.map(v=>{const x=fe[v];return`
            <div class="card bean-type-btn" data-type="${v}" style="text-align:center;cursor:pointer;padding:16px 8px;border-radius:var(--radius-md);">
              <div style="font-size:1.6rem;margin-bottom:6px;">${x.icon}</div>
              <div style="font-size:0.72rem;color:var(--text-secondary);margin-bottom:4px;">${x.label}</div>
              <div class="mono" style="font-size:0.78rem;color:var(--gold);">+${x.pts}pt</div>
            </div>
          `}).join("")}
      </div>

      <p class="section-header">Reason <span style="color:var(--text-tertiary);font-weight:400;">(required)</span></p>
      <div id="action-list" style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">
        ${_.map(v=>`
          <div class="action-btn" data-id="${v.id}"
            style="cursor:pointer;padding:8px 14px;border-radius:20px;border:1px solid var(--border);
            background:var(--glass-bg);font-size:0.82rem;color:var(--text-secondary);transition:all 0.2s;">
            ${v.name}
          </div>
        `).join("")}
      </div>
      <input id="inp-reason" class="input" type="text" placeholder="Optional extra note…" style="margin-bottom:24px;" />

      <p class="section-header">How many beans?</p>
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:28px;">
        <button class="btn btn-ghost" id="btn-minus" style="width:48px;height:48px;padding:0;font-size:1.4rem;flex-shrink:0;">−</button>
        <span class="mono" id="qty-display" style="font-size:2rem;color:var(--gold);flex:1;text-align:center;">1</span>
        <button class="btn btn-ghost" id="btn-plus" style="width:48px;height:48px;padding:0;font-size:1.4rem;flex-shrink:0;">+</button>
      </div>

      <p id="award-error" class="text-sm hidden" style="color:var(--red);margin-bottom:12px;text-align:center;"></p>
      <button class="btn btn-primary w-full" id="btn-submit" style="height:54px;font-size:1rem;" disabled>Award Beans</button>
    `;const k=u.querySelector("#emp-list"),C=u.querySelector("#search-emp");let E=l;function O(){k.innerHTML=E.map(v=>{var x,R;return`
        <div class="lb-row emp-row" data-id="${v.id}" style="cursor:pointer;margin-bottom:6px;${((x=f.receiver)==null?void 0:x.id)===v.id?"border-color:var(--gold);background:rgba(201,168,76,0.06);":""}">
          <div style="flex:1;">
            <p style="font-size:0.9rem;">${v.name}</p>
            <p class="text-xs text-dim">${v.role} · ${v.outlet}</p>
          </div>
          ${((R=f.receiver)==null?void 0:R.id)===v.id?'<span class="text-gold">✓</span>':""}
        </div>
      `}).join(""),k.querySelectorAll(".emp-row").forEach(v=>{v.addEventListener("click",()=>{f.receiver=l.find(x=>x.id===v.dataset.id),O(),T()})})}C.addEventListener("input",()=>{const v=C.value.toLowerCase();E=v?l.filter(x=>x.name.toLowerCase().includes(v)):l,O()}),O();function y(v){f.beanType=v,f.quantity=1,w=null,u.querySelectorAll(".bean-type-btn").forEach(R=>{R.style.borderColor=R.dataset.type===v?"var(--gold)":"var(--border)",R.style.background=R.dataset.type===v?"rgba(201,168,76,0.1)":"var(--glass-bg)"});const x=u.querySelector("#qty-display");x&&(x.textContent=1),T()}u.querySelectorAll(".bean-type-btn").forEach(v=>{v.addEventListener("click",()=>y(v.dataset.type))}),p.length===1&&y(p[0]),u.querySelectorAll(".action-btn").forEach(v=>{v.addEventListener("click",()=>{f.actionId=v.dataset.id,u.querySelectorAll(".action-btn").forEach(x=>{x.style.background=x.dataset.id===f.actionId?"rgba(201,168,76,0.15)":"",x.style.borderColor=x.dataset.id===f.actionId?"rgba(201,168,76,0.4)":"",x.style.color=x.dataset.id===f.actionId?"var(--gold)":""}),T()})});const A=u.querySelector("#qty-display");u.querySelector("#btn-minus").addEventListener("click",()=>{f.quantity>1&&(f.quantity--,A.textContent=f.quantity)}),u.querySelector("#btn-plus").addEventListener("click",()=>{if(!f.beanType)return;const v=fe[f.beanType],x=Math.min(v.perSubmissionCap,v.dailyCap-((w==null?void 0:w.used)||0)),R=u.querySelector("#qty-display");f.quantity<x&&(f.quantity++,R.textContent=f.quantity)});const m=u.querySelector("#btn-submit"),g=u.querySelector("#award-error");function T(){m.disabled=!(f.receiver&&f.beanType&&f.actionId)}m.addEventListener("click",async()=>{if(!(!f.receiver||!f.beanType||!f.actionId)){m.disabled=!0,m.textContent="Awarding…",g.classList.add("hidden");try{const v=fe[f.beanType],x=To();if(!w||w.beanType!==f.beanType){const et=(await oi(e.id)).filter(De=>{const re=new Date(De.timestamp);return`${re.getFullYear()}-${String(re.getMonth()+1).padStart(2,"0")}-${String(re.getDate()).padStart(2,"0")}`===x&&De.bean_type===f.beanType}).reduce((De,re)=>De+(re.quantity||1),0);w={beanType:f.beanType,used:et}}const R=v.dailyCap-w.used;if(R<=0){g.textContent=`Daily limit reached — you can give ${v.dailyCap} ${v.label}s per day.`,g.classList.remove("hidden"),m.disabled=!1,m.textContent="Award Beans";return}if(f.quantity>R){g.textContent=`Only ${R} more ${v.label}${R!==1?"s":""} available today (cap: ${v.dailyCap}/day).`,g.classList.remove("hidden"),m.disabled=!1,m.textContent="Award Beans";return}const U=v.pts*f.quantity;await Bl({giver_id:e.id,giver_name:e.name,receiver_id:f.receiver.id,bean_type:f.beanType,points_value:v.pts,action_id:f.actionId,reason_text:u.querySelector("#inp-reason").value.trim(),outlet:e.outlet,quantity:f.quantity}),w&&(w.used+=f.quantity),await Promise.all([ri(f.receiver.id,U),Jt(f.receiver.id,U)]),await s_({receiverName:f.receiver.name,beanType:f.beanType,pts:U,giverName:e.name,actionName:f.actionId});const se=await oi(e.id),Oe=ge(),Le=se.filter(ye=>{const et=new Date(ye.timestamp);return`${et.getFullYear()}-${String(et.getMonth()+1).padStart(2,"0")}`===Oe}),Ze=Cc(Le);for(const ye of Ze)await jt({type:"bias_concentration",giver_id:ye.giver_id,receiver_id:ye.receiver_id,suggestion_text:`${e.name} has directed ${ye.pct}% of their beans to one person this month.`,suggestion:"Review award distribution to ensure fairness across the team."}).catch(()=>{});u.innerHTML=`
          <div class="text-center" style="padding:60px 20px;">
            <div style="font-size:3rem;margin-bottom:16px;">${v.icon}</div>
            <h2 style="margin-bottom:8px;">${v.label} Awarded!</h2>
            <p class="text-dim">+${U} pts to <strong>${f.receiver.name}</strong></p>
            <button class="btn btn-primary mt-24" id="btn-award-again">Award Another</button>
          </div>
        `,u.querySelector("#btn-award-again").addEventListener("click",c)}catch(v){g.textContent="Failed to submit. Try again.",g.classList.remove("hidden"),m.disabled=!1,m.textContent="Award Beans",console.error(v)}}})}function h(){const u=n.querySelector("#award-content"),p=Object.entries(r).map(([m,g])=>({id:m,...g})).filter(m=>m.active!==!1).sort((m,g)=>(m.name||"").localeCompare(g.name||""));let _=null,f="monthly";u.innerHTML=`
      <div class="card mb-12" style="padding:12px 14px;background:rgba(201,168,76,0.06);border-color:rgba(201,168,76,0.2);">
        <p style="font-size:0.82rem;color:var(--text-secondary);line-height:1.5;">Award points directly to any staff member — up to 1,000 pts per award. Choose whether it goes to their monthly score (affects rankings) or their vault (permanent balance).</p>
      </div>

      <p class="section-header">Who are you recognising?</p>
      <input id="da-search" class="input" type="text" placeholder="Search by name…" style="margin-bottom:10px;" />
      <div id="da-emp-list" style="max-height:200px;overflow-y:auto;margin-bottom:24px;border-radius:var(--radius-md);"></div>

      <p class="section-header">Points to Award</p>
      <input id="da-points" class="input" type="number" min="1" max="1000" placeholder="Enter amount (max 1,000)" style="margin-bottom:6px;" />
      <p class="text-dim text-xs" style="margin-bottom:20px;">Max 1,000 pts per award</p>

      <p class="section-header">Where should it go?</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:20px;">
        <div class="card dest-btn" data-dest="monthly" style="text-align:center;cursor:pointer;padding:16px 8px;border-color:var(--gold);background:rgba(201,168,76,0.1);">
          <div style="font-size:1.4rem;margin-bottom:4px;">📊</div>
          <p style="font-size:0.8rem;font-weight:600;">Monthly Score</p>
          <p class="text-dim" style="font-size:0.7rem;">Affects rank & nominations</p>
        </div>
        <div class="card dest-btn" data-dest="vault" style="text-align:center;cursor:pointer;padding:16px 8px;">
          <div style="font-size:1.4rem;margin-bottom:4px;">🏦</div>
          <p style="font-size:0.8rem;font-weight:600;">Vault</p>
          <p class="text-dim" style="font-size:0.7rem;">Permanent balance only</p>
        </div>
      </div>

      <p class="section-header">Note <span style="color:var(--text-tertiary);font-weight:400;">(optional)</span></p>
      <input id="da-reason" class="input" type="text" placeholder="Why are you awarding this?" style="margin-bottom:20px;" />

      <p id="da-error" class="text-sm hidden" style="color:var(--red);margin-bottom:12px;text-align:center;"></p>
      <button class="btn btn-primary w-full" id="da-submit" style="height:54px;font-size:1rem;" disabled>Award Points</button>
    `;const w=u.querySelector("#da-emp-list"),k=u.querySelector("#da-search"),C=u.querySelector("#da-error"),E=u.querySelector("#da-submit");let O=p;function y(){const m=parseInt(u.querySelector("#da-points").value);E.disabled=!(_&&m>=1&&m<=1e3)}function A(){w.innerHTML=O.map(m=>`
        <div class="lb-row emp-row" data-id="${m.id}" style="cursor:pointer;margin-bottom:6px;${(_==null?void 0:_.id)===m.id?"border-color:var(--gold);background:rgba(201,168,76,0.06);":""}">
          <div style="flex:1;">
            <p style="font-size:0.9rem;">${m.name}</p>
            <p class="text-xs text-dim">${m.role} · ${m.outlet}</p>
          </div>
          ${(_==null?void 0:_.id)===m.id?'<span class="text-gold">✓</span>':""}
        </div>
      `).join(""),w.querySelectorAll(".emp-row").forEach(m=>{m.addEventListener("click",()=>{_=p.find(g=>g.id===m.dataset.id),A(),y()})})}k.addEventListener("input",()=>{const m=k.value.toLowerCase();O=m?p.filter(g=>g.name.toLowerCase().includes(m)):p,A()}),A(),u.querySelector("#da-points").addEventListener("input",y),u.querySelectorAll(".dest-btn").forEach(m=>{m.addEventListener("click",()=>{f=m.dataset.dest,u.querySelectorAll(".dest-btn").forEach(g=>{g.style.borderColor=g.dataset.dest===f?"var(--gold)":"var(--border)",g.style.background=g.dataset.dest===f?"rgba(201,168,76,0.1)":"var(--glass-bg)"})})}),E.addEventListener("click",async()=>{const m=parseInt(u.querySelector("#da-points").value),g=u.querySelector("#da-reason").value.trim();if(!(!_||!m||m<1||m>1e3)){E.disabled=!0,E.textContent="Awarding…",C.classList.add("hidden");try{await ac({giver_id:e.id,giver_name:e.name,receiver_id:_.id,amount:m,destination:f,reason:g}),f==="monthly"?await Promise.all([ri(_.id,m),Jt(_.id,m)]):await Jt(_.id,m),u.innerHTML=`
          <div class="text-center" style="padding:60px 20px;">
            <div style="font-size:3rem;margin-bottom:16px;">${f==="monthly"?"📊":"🏦"}</div>
            <h2 style="margin-bottom:8px;">Points Awarded!</h2>
            <p class="text-dim">+${m} pts → ${f==="monthly"?"Monthly Score":"Vault"} for <strong>${_.name}</strong></p>
            <button class="btn btn-primary mt-24" id="da-again">Award Another</button>
          </div>
        `,u.querySelector("#da-again").addEventListener("click",h)}catch(T){C.textContent="Failed. Check connection and try again.",C.classList.remove("hidden"),E.disabled=!1,E.textContent="Award Points",console.error(T)}}})}function d(){const u=n.querySelector("#award-content"),p=vc[e.role]||[],_=Object.entries(a).map(([m,g])=>({id:m,...g})).filter(m=>m.active!==!1);if(l.length===0){u.innerHTML='<div class="empty-state"><div class="icon">👥</div><p class="text-dim">No staff to issue conduct to.</p></div>';return}if(p.length===0){u.innerHTML='<div class="empty-state"><div class="icon">🔒</div><p class="text-dim">Your role cannot issue conduct.</p></div>';return}let f={receiver:null,tier:null,offenseId:null};u.innerHTML=`
      <p class="section-header">Who is this about?</p>
      <input id="search-emp-c" class="input" type="text" placeholder="Search by name…" style="margin-bottom:10px;" />
      <div id="emp-list-c" style="max-height:180px;overflow-y:auto;margin-bottom:24px;border-radius:var(--radius-md);"></div>

      <p class="section-header">Severity</p>
      <div style="display:grid;grid-template-columns:repeat(${p.length},1fr);gap:10px;margin-bottom:24px;">
        ${p.map(m=>{const g=Dn[m];return`
            <div class="card conduct-tier-btn" data-type="${m}"
              style="text-align:center;cursor:pointer;padding:16px 8px;border-radius:var(--radius-md);">
              <div style="font-size:1.6rem;margin-bottom:6px;">${g.icon}</div>
              <div style="font-size:0.72rem;color:var(--text-secondary);margin-bottom:4px;">${g.label}</div>
              <div class="mono" style="font-size:0.78rem;color:var(--red);">${g.base_db} DB</div>
            </div>
          `}).join("")}
      </div>

      <p class="section-header">Reason <span style="color:var(--text-tertiary);font-weight:400;">(required)</span></p>
      <div id="offense-list" style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">
        ${_.map(m=>`
          <div class="offense-btn" data-id="${m.id}"
            style="cursor:pointer;padding:8px 14px;border-radius:20px;border:1px solid var(--border);
            background:var(--glass-bg);font-size:0.82rem;color:var(--text-secondary);transition:all 0.2s;">
            ${m.name}
          </div>
        `).join("")}
      </div>
      <input id="inp-conduct-note" class="input" type="text" placeholder="Optional note / context…" style="margin-bottom:20px;" />

      <div id="conduct-preview" class="hidden card mb-16" style="background:rgba(255,69,58,0.06);border-color:rgba(255,69,58,0.25);text-align:center;padding:20px;"></div>

      <p id="conduct-error" class="text-sm hidden" style="color:var(--red);margin-bottom:12px;text-align:center;"></p>
      <button class="btn w-full" id="btn-conduct-submit" disabled
        style="height:54px;font-size:1rem;background:rgba(255,69,58,0.15);color:var(--red);border:1px solid rgba(255,69,58,0.3);">
        Issue Conduct
      </button>
    `;const w=u.querySelector("#emp-list-c"),k=u.querySelector("#search-emp-c");let C=l;function E(){w.innerHTML=C.map(m=>{var g,T;return`
        <div class="lb-row emp-row-c" data-id="${m.id}" style="cursor:pointer;margin-bottom:6px;${((g=f.receiver)==null?void 0:g.id)===m.id?"border-color:rgba(255,69,58,0.5);background:rgba(255,69,58,0.06);":""}">
          <div style="flex:1;"><p style="font-size:0.9rem;">${m.name}</p><p class="text-xs text-dim">${m.role} · ${m.outlet}</p></div>
          ${((T=f.receiver)==null?void 0:T.id)===m.id?'<span style="color:var(--red);">✓</span>':""}
        </div>
      `}).join(""),w.querySelectorAll(".emp-row-c").forEach(m=>{m.addEventListener("click",()=>{f.receiver=l.find(g=>g.id===m.dataset.id),E(),O()})})}k.addEventListener("input",()=>{const m=k.value.toLowerCase();C=m?l.filter(g=>g.name.toLowerCase().includes(m)):l,E()}),E(),u.querySelectorAll(".conduct-tier-btn").forEach(m=>{m.addEventListener("click",()=>{f.tier=m.dataset.type,u.querySelectorAll(".conduct-tier-btn").forEach(g=>{g.style.borderColor=g.dataset.type===f.tier?"rgba(255,69,58,0.6)":"var(--border)",g.style.background=g.dataset.type===f.tier?"rgba(255,69,58,0.1)":"var(--glass-bg)"}),O()})}),u.querySelectorAll(".offense-btn").forEach(m=>{m.addEventListener("click",()=>{f.offenseId=m.dataset.id,u.querySelectorAll(".offense-btn").forEach(g=>{g.style.background=g.dataset.id===f.offenseId?"rgba(255,69,58,0.12)":"",g.style.borderColor=g.dataset.id===f.offenseId?"rgba(255,69,58,0.4)":"",g.style.color=g.dataset.id===f.offenseId?"var(--red)":""}),O()})});async function O(){const m=u.querySelector("#conduct-preview"),g=u.querySelector("#btn-conduct-submit");if(!f.receiver||!f.tier||!f.offenseId){m.classList.add("hidden"),g.disabled=!0;return}m.innerHTML='<div class="spinner" style="margin:0 auto;"></div>',m.classList.remove("hidden");const T=Dn[f.tier],v=ge(),x=await hr(f.receiver.id,v,f.offenseId)+1,R=Math.pow(2,x-1),U=T.base_db*R,se=U*gs,Le=["1st","2nd","3rd","4th","5th"][x-1]||`${x}th`,Ze=_.find(ye=>ye.id===f.offenseId);m.innerHTML=`
        <p style="font-size:0.75rem;color:var(--text-secondary);margin-bottom:4px;">${f.receiver.name} · ${(Ze==null?void 0:Ze.name)||""}</p>
        <p style="font-size:0.8rem;color:var(--text-secondary);margin-bottom:12px;">
          ${Le} offense this month
          ${x>1?`<span style="color:var(--red);"> · ${R}× escalation</span>`:""}
        </p>
        <div class="mono" style="font-size:2.2rem;color:var(--red);">${T.icon} ${U}</div>
        <p style="font-size:0.8rem;color:var(--text-secondary);margin-top:4px;">${T.label} · ${U} Dark Bean${U!==1?"s":""}</p>
        <p class="text-dim text-sm mt-8">= −${se} pts from monthly score</p>
      `,g.disabled=!1}const y=u.querySelector("#conduct-error"),A=u.querySelector("#btn-conduct-submit");A.addEventListener("click",async()=>{if(!(!f.receiver||!f.tier||!f.offenseId)){A.disabled=!0,A.textContent="Issuing…",y.classList.add("hidden");try{const m=ge(),g=To(),T=Dn[f.tier],v=_.find(re=>re.id===f.offenseId),R=(await zl(f.receiver.id,m)).filter(re=>re.offense_id===f.offenseId&&!re.revoked),U=await jl(f.receiver.id,m,f.offenseId),se=Math.pow(2,U-1),Oe=T.base_db*se,Le=Oe*gs;await Hl({giver_id:e.id,giver_name:e.name,receiver_id:f.receiver.id,offense_id:f.offenseId,conduct_tier:f.tier,db_count:Oe,pts_deducted:Le,month_key:m,note:u.querySelector("#inp-conduct-note").value.trim(),instance:U,multiplier:se});const Ze=await Zl(f.receiver.id,Oe,Le,m);await ec(f.receiver.id,Le),R.filter(re=>{const In=new Date(re.timestamp),Rc=`${In.getFullYear()}-${String(In.getMonth()+1).padStart(2,"0")}-${String(In.getDate()).padStart(2,"0")}`;return re.giver_id!==e.id&&Rc===g}).length>0&&await jt({type:"cross_conduct",receiver_id:f.receiver.id,giver_id:e.id,suggestion_text:`${f.receiver.name} received "${v==null?void 0:v.name}" conduct from multiple managers on the same day. Possible duplicate issuance.`,suggestion:"Confirm with both managers this is not a duplicate. Consider revoking one."}).catch(()=>{}),R.length>=3&&await jt({type:"conduct_frequency",receiver_id:f.receiver.id,giver_id:e.id,suggestion_text:`${f.receiver.name} has now received "${v==null?void 0:v.name}" conduct ${R.length+1} times this month.`,suggestion:"High frequency of same conduct. Escalate to formal HR review or disciplinary process."}).catch(()=>{});const et=Ze.db_count||0,De=xc(et);De&&await jt({type:"db_threshold",receiver_id:f.receiver.id,giver_id:e.id,suggestion_text:`${f.receiver.name} has accumulated ${et} Dark Beans this month (${De.replace(/_/g," ")}).`,suggestion:De==="disciplinary"?"Consider formal disciplinary action.":"Review conduct history and consider counselling."}).catch(()=>{}),u.innerHTML=`
          <div class="text-center" style="padding:60px 20px;">
            <div style="font-size:3rem;margin-bottom:16px;">${T.icon}</div>
            <h2 style="margin-bottom:8px;color:var(--red);">Conduct Logged</h2>
            <p class="text-dim">${Oe} Dark Bean${Oe!==1?"s":""} issued to <strong>${f.receiver.name}</strong></p>
            <p class="text-dim text-sm mt-4">${(v==null?void 0:v.name)||""} · ${T.label}${U>1?` · ${se}× escalation`:""}</p>
            <p class="text-dim text-sm mt-4">−${Le} pts deducted from their monthly score</p>
            <button class="btn btn-ghost mt-24" id="btn-conduct-again">Issue Another</button>
          </div>
        `,u.querySelector("#btn-conduct-again").addEventListener("click",d)}catch(m){y.textContent="Failed to submit. Try again.",y.classList.remove("hidden"),A.disabled=!1,A.textContent="Issue Conduct",console.error(m)}}})}}async function o_(n,e,t){const i=Z(e.role);n.innerHTML=`
    <div class="page">
      <h1 style="font-size:1.4rem;margin-bottom:16px;">HR Audit</h1>

      <!-- Tabs -->
      <div class="flex gap-8 mb-16" id="audit-tabs" style="flex-wrap:wrap;">
        <button class="btn btn-primary audit-tab" data-tab="flags" style="flex:1;padding:8px;font-size:0.8rem;">🚩 Flags</button>
        <button class="btn btn-ghost  audit-tab" data-tab="log"   style="flex:1;padding:8px;font-size:0.8rem;">📋 Log</button>
        <button class="btn btn-ghost  audit-tab" data-tab="votes" style="flex:1;padding:8px;font-size:0.8rem;">📊 Votes</button>
        ${i?'<button class="btn btn-ghost audit-tab" data-tab="reset" style="flex:1;padding:8px;font-size:0.8rem;color:var(--red);">☢️ Reset</button>':""}
      </div>

      <div id="audit-content">
        <div class="loading-center" style="min-height:40vh;"><div class="spinner"></div></div>
      </div>
    </div>
  `;let s="flags";const r=n.querySelector("#audit-content");n.querySelectorAll(".audit-tab").forEach(d=>{d.addEventListener("click",()=>{s=d.dataset.tab,n.querySelectorAll(".audit-tab").forEach(u=>{u.className=u.dataset.tab===s?"btn btn-primary audit-tab":"btn btn-ghost audit-tab",u.style.flex="1",u.style.padding="10px"}),o(s)})});async function o(d){r.innerHTML='<div class="loading-center" style="min-height:30vh;"><div class="spinner"></div></div>',d==="flags"&&await a(),d==="log"&&await l(),d==="votes"&&await c(),d==="reset"&&h()}async function a(){try{const[d,u]=await Promise.all([Yl(),le()]),p=d.filter(f=>f.status==="open"),_=d.filter(f=>f.status!=="open");if(!d.length){r.innerHTML=`
          <div class="empty-state">
            <div class="icon">✅</div>
            <p>No flags. System looks clean.</p>
          </div>
        `;return}r.innerHTML=`
        ${p.length?`
          <p class="section-header mb-8">Open (${p.length})</p>
          ${p.map(f=>ko(f,!1,u)).join("")}
        `:""}
        ${_.length?`
          <p class="section-header mt-16 mb-8">Resolved (${_.length})</p>
          ${_.map(f=>ko(f,!0,u)).join("")}
        `:""}
      `,r.querySelectorAll(".flag-action-btn").forEach(f=>{f.addEventListener("click",async()=>{const{flagId:w,action:k}=f.dataset;f.disabled=!0,await Kl(w,k,e.id),await o("flags")})})}catch{r.innerHTML='<p class="text-dim text-sm text-center">Failed to load flags.</p>'}}async function l(){try{const d="https://who-s-the-queen-bee-default-rtdb.asia-southeast1.firebasedatabase.app",[u,p,_,f,w,k]=await Promise.all([le(),Ft(),Ut(),fetch(`${d}/awards.json`).then(m=>m.json()),fetch(`${d}/dark_beans.json`).then(m=>m.json()),fetch(`${d}/revoke_log.json`).then(m=>m.json())]),C=f?Object.entries(f).map(([m,g])=>({id:m,kind:"award",...g})):[],E=w?Object.entries(w).map(([m,g])=>({id:m,kind:"conduct",...g})):[],O=k?Object.entries(k).map(([m,g])=>({id:m,kind:"revoke",...g})):[],y=[...C,...E,...O].sort((m,g)=>g.timestamp-m.timestamp);if(!y.length){r.innerHTML=`
          <div class="empty-state">
            <div class="icon">📋</div>
            <p class="text-dim">No activity recorded yet.</p>
          </div>
        `;return}const A={green:"🟢",silver:"🟠",gold:"🔴",crystal:"⚫"};r.innerHTML=`
        <p class="section-header" style="margin-bottom:12px;">
          Full Log — ${C.length} awards · ${E.length} conduct
        </p>
        ${y.map(m=>{const g=u[m.receiver_id],T=u[m.giver_id],v=(T==null?void 0:T.name)||m.giver_name||m.giver_id||"—",x=(T==null?void 0:T.role)||"";if(m.kind==="award"){const R=fe[m.bean_type]||{icon:"🫘",label:m.bean_type},U=p[m.action_id],se=m.points_value*(m.quantity||1);return`
              <div class="lb-row" style="margin-bottom:8px;flex-direction:column;align-items:flex-start;gap:6px;">
                <div style="display:flex;justify-content:space-between;align-items:center;width:100%;">
                  <div style="display:flex;align-items:center;gap:10px;">
                    <span style="font-size:1.3rem;">${R.icon}</span>
                    <div>
                      <p style="font-size:0.9rem;font-weight:600;">${(g==null?void 0:g.name)||m.receiver_id}</p>
                      <p class="text-dim" style="font-size:0.75rem;">${(g==null?void 0:g.role)||""} · ${(g==null?void 0:g.outlet)||""}</p>
                    </div>
                  </div>
                  <span class="mono text-gold" style="font-size:0.9rem;">+${se} pts</span>
                </div>
                <div style="display:flex;justify-content:space-between;width:100%;">
                  <p class="text-dim" style="font-size:0.75rem;">
                    By <span style="color:var(--text-secondary);font-weight:600;">${v}</span>
                    <span style="color:var(--text-tertiary);"> (${x})</span>
                    · ${(U==null?void 0:U.name)||m.action_id||""}
                    ${m.reason_text?`· "${m.reason_text}"`:""}
                  </p>
                  <p class="text-dim" style="font-size:0.75rem;flex-shrink:0;margin-left:8px;">${Se(m.timestamp)}</p>
                </div>
              </div>
            `}else if(m.kind==="revoke"){const R=u[m.receiver_id],U=_[m.offense_id],se=A[m.conduct_tier]||"🌑";return`
              <div class="lb-row" style="margin-bottom:8px;flex-direction:column;align-items:flex-start;gap:6px;border-color:rgba(48,209,88,0.25);background:rgba(48,209,88,0.03);">
                <div style="display:flex;justify-content:space-between;align-items:center;width:100%;">
                  <div style="display:flex;align-items:center;gap:10px;">
                    <span style="font-size:1.3rem;">↩</span>
                    <div>
                      <p style="font-size:0.9rem;font-weight:600;">${(R==null?void 0:R.name)||m.receiver_id} <span style="font-size:0.72rem;color:var(--green);font-weight:400;">· conduct revoked</span></p>
                      <p class="text-dim" style="font-size:0.75rem;">${(R==null?void 0:R.role)||""} · ${(R==null?void 0:R.outlet)||""}</p>
                    </div>
                  </div>
                  <span class="mono" style="font-size:0.9rem;color:var(--green);">+${m.pts_restored} pts restored</span>
                </div>
                <div style="display:flex;justify-content:space-between;width:100%;">
                  <p class="text-dim" style="font-size:0.75rem;">
                    ${se} ${(U==null?void 0:U.name)||m.offense_id||"Conduct"}
                    · Originally issued by <span style="color:var(--text-secondary);font-weight:600;">${m.giver_name||m.giver_id}</span>
                    · Approved by <span style="color:var(--text-secondary);font-weight:600;">${m.approved_by}</span>
                    ${m.reason?`· "${m.reason}"`:""}
                  </p>
                  <p class="text-dim" style="font-size:0.75rem;flex-shrink:0;margin-left:8px;">${Se(m.timestamp)}</p>
                </div>
              </div>
            `}else{const R=_[m.offense_id],U=A[m.conduct_tier]||"🌑",se=m.revoked?'<span style="color:var(--text-tertiary);font-size:0.7rem;"> · revoked</span>':"";return`
              <div class="lb-row" style="margin-bottom:8px;flex-direction:column;align-items:flex-start;gap:6px;${m.revoked?"opacity:0.45;":"border-color:rgba(255,69,58,0.25);"}">
                <div style="display:flex;justify-content:space-between;align-items:center;width:100%;">
                  <div style="display:flex;align-items:center;gap:10px;">
                    <span style="font-size:1.3rem;">${U}</span>
                    <div>
                      <p style="font-size:0.9rem;font-weight:600;">${(g==null?void 0:g.name)||m.receiver_id}${se}</p>
                      <p class="text-dim" style="font-size:0.75rem;">${(g==null?void 0:g.role)||""} · ${(g==null?void 0:g.outlet)||""}</p>
                    </div>
                  </div>
                  <span class="mono" style="font-size:0.9rem;color:var(--red);">−${m.pts_deducted} pts</span>
                </div>
                <div style="display:flex;justify-content:space-between;width:100%;">
                  <p class="text-dim" style="font-size:0.75rem;">
                    By <span style="color:var(--text-secondary);font-weight:600;">${v}</span>
                    <span style="color:var(--text-tertiary);"> (${x})</span>
                    · ${(R==null?void 0:R.name)||m.offense_id||"Conduct"}
                    ${m.note?`· "${m.note}"`:""}
                    · ${m.db_count} DB${m.db_count!==1?"s":""}
                    ${m.instance>1?`· ${m.multiplier}× escalation`:""}
                  </p>
                  <p class="text-dim" style="font-size:0.75rem;flex-shrink:0;margin-left:8px;">${Se(m.timestamp)}</p>
                </div>
              </div>
            `}}).join("")}
      `}catch{r.innerHTML='<p class="text-dim text-sm text-center">Failed to load log.</p>'}}async function c(){try{const d=ge(),[u,p]=await Promise.all([le(),xn(d)]),f=Object.values(u).filter(y=>y.active!==!1).length,w=Object.keys(p).length,k=f>0?Math.round(w/f*100):0,C={};Object.values(p).forEach(y=>{C[y]=(C[y]||0)+1});const E=Object.entries(C).map(([y,A])=>({id:y,count:A,emp:u[y]||{}})).sort((y,A)=>A.count-y.count),O=["🥇","🥈","🥉"];r.innerHTML=`
        <p class="section-header" style="margin-bottom:12px;">📊 Voting — ${new Date().toLocaleDateString("en-IN",{month:"long",year:"numeric"})}</p>

        <!-- Turnout card -->
        <div class="card mb-16" style="padding:20px;text-align:center;">
          <div class="mono text-gold" style="font-size:2.8rem;font-weight:400;">${k}%</div>
          <p style="font-size:0.88rem;margin-top:4px;">votes cast</p>
          <p class="text-dim text-sm mt-4">${w} of ${f} staff have voted</p>
          <div style="margin-top:14px;height:8px;border-radius:4px;background:var(--border);overflow:hidden;">
            <div style="height:100%;border-radius:4px;background:var(--gold);width:${k}%;transition:width 0.6s;"></div>
          </div>
        </div>

        ${E.length===0?`
          <div class="empty-state">
            <div class="icon">🗳️</div>
            <p class="text-dim">No votes cast yet this month</p>
          </div>
        `:`
          <p class="section-header" style="margin-bottom:10px;">Nominee Standings</p>
          ${E.map((y,A)=>{const m=w>0?Math.round(y.count/w*100):0;return`
              <div class="lb-row mb-8" style="flex-direction:column;align-items:stretch;gap:8px;padding:14px;">
                <div style="display:flex;align-items:center;gap:10px;">
                  <span style="font-size:1.2rem;min-width:28px;">${O[A]||`#${A+1}`}</span>
                  <div style="flex:1;">
                    <p style="font-weight:600;">${y.emp.name||y.id}</p>
                    <p class="text-dim" style="font-size:0.75rem;">${y.emp.role||""} · ${y.emp.outlet||""}</p>
                  </div>
                  <div style="text-align:right;">
                    <p class="mono text-gold" style="font-size:1rem;">${y.count}</p>
                    <p class="text-dim" style="font-size:0.7rem;">votes</p>
                  </div>
                </div>
                <div>
                  <div style="height:6px;border-radius:3px;background:var(--border);overflow:hidden;margin-bottom:3px;">
                    <div style="height:100%;border-radius:3px;background:var(--gold);width:${m}%;transition:width 0.5s;"></div>
                  </div>
                  <p class="text-dim" style="font-size:0.7rem;">${m}% of votes cast</p>
                </div>
              </div>
            `}).join("")}
        `}
      `}catch{r.innerHTML='<p class="text-dim text-sm text-center">Failed to load vote data.</p>'}}function h(){r.innerHTML=`
      <div class="card mb-16" style="border-color:rgba(255,69,58,0.4);background:rgba(255,69,58,0.06);padding:20px;">
        <p style="font-weight:700;color:var(--red);margin-bottom:8px;">☢️ Nuclear Reset</p>
        <p style="font-size:0.85rem;color:var(--text-secondary);line-height:1.6;">
          This wipes all awards, points, vault, dark beans, flags, and votes.
          Staff accounts are kept. Use this before go-live to clear dummy data.
        </p>
      </div>

      <div class="card mb-12" style="padding:16px;">
        <p class="section-header" style="margin-bottom:8px;">Step 1 — Clear all activity data</p>
        <p class="text-dim text-sm" style="margin-bottom:12px;">Awards, points, vault, dark beans, flags, votes. Staff accounts remain.</p>
        <input id="inp-confirm-data" class="input" type="text" placeholder='Type "RESET" to confirm' style="margin-bottom:10px;" />
        <button class="btn w-full" id="btn-nuke-data"
          style="padding:12px;background:rgba(255,69,58,0.15);color:var(--red);border:1px solid rgba(255,69,58,0.3);">
          Clear Activity Data
        </button>
        <p id="status-data" class="text-sm text-center hidden" style="margin-top:8px;"></p>
      </div>

      <div class="card" style="padding:16px;">
        <p class="section-header" style="margin-bottom:8px;">Step 2 — Also clear all staff accounts</p>
        <p class="text-dim text-sm" style="margin-bottom:12px;">Removes every employee record. Only do this if you want to re-import all staff fresh.</p>
        <input id="inp-confirm-staff" class="input" type="text" placeholder='Type "DELETE ALL" to confirm' style="margin-bottom:10px;" />
        <button class="btn w-full" id="btn-nuke-staff"
          style="padding:12px;background:rgba(255,69,58,0.10);color:var(--red);border:1px solid rgba(255,69,58,0.2);">
          Clear Staff Accounts Too
        </button>
        <p id="status-staff" class="text-sm text-center hidden" style="margin-top:8px;"></p>
      </div>
    `,r.querySelector("#btn-nuke-data").addEventListener("click",async()=>{const d=r.querySelector("#inp-confirm-data").value.trim(),u=r.querySelector("#btn-nuke-data"),p=r.querySelector("#status-data");if(d!=="RESET"){p.textContent='Type exactly "RESET" to confirm.',p.style.color="var(--red)",p.classList.remove("hidden");return}u.disabled=!0,u.textContent="Clearing…";try{await dc(),p.textContent="✓ All activity data cleared.",p.style.color="var(--green)",p.classList.remove("hidden"),u.textContent="Done"}catch{p.textContent="Failed. Try again.",p.style.color="var(--red)",p.classList.remove("hidden"),u.disabled=!1,u.textContent="Clear Activity Data"}}),r.querySelector("#btn-nuke-staff").addEventListener("click",async()=>{const d=r.querySelector("#inp-confirm-staff").value.trim(),u=r.querySelector("#btn-nuke-staff"),p=r.querySelector("#status-staff");if(d!=="DELETE ALL"){p.textContent='Type exactly "DELETE ALL" to confirm.',p.style.color="var(--red)",p.classList.remove("hidden");return}u.disabled=!0,u.textContent="Clearing…";try{await uc(),p.textContent="✓ All staff accounts cleared. Re-add using Bulk Import.",p.style.color="var(--green)",p.classList.remove("hidden"),u.textContent="Done"}catch{p.textContent="Failed. Try again.",p.style.color="var(--red)",p.classList.remove("hidden"),u.disabled=!1,u.textContent="Clear Staff Accounts Too"}})}await o(s)}function ko(n,e=!1,t={}){const s={bias_concentration:"🚩 Award Bias — Same Receiver",db_threshold:"🚩 Dark Bean Threshold",cross_conduct:"🚩 Duplicate Conduct — Same Day",conduct_frequency:"🚩 Conduct Frequency — 4+ Same Offense",consecutive_db:"🚩 Consecutive DB Flag",ceiling_breach:"🚩 Ceiling Hit Flag",crystal_frequency:"🚩 Crystal Bean Frequency",cross_flag:"🚩 Relationship Flag"}[n.type]||`🚩 ${n.type}`,r=t[n.giver_id],o=t[n.receiver_id],a=(r==null?void 0:r.name)||n.giver_name||n.giver_id||null,l=(r==null?void 0:r.role)||"",c=(o==null?void 0:o.name)||n.receiver_id||null;return`
    <div class="flag-card" style="${e?"opacity:0.5;":""}">
      <div class="flex justify-between items-center mb-8">
        <strong style="font-size:0.9rem;">${s}</strong>
        <span class="text-xs text-dim">${Se(n.timestamp)}</span>
      </div>

      ${a||c?`
        <div style="display:flex;gap:16px;margin-bottom:10px;flex-wrap:wrap;">
          ${c?`
            <div>
              <p style="font-size:0.68rem;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:2px;">Employee</p>
              <p style="font-size:0.85rem;font-weight:600;color:var(--text-primary);">${c}</p>
            </div>`:""}
          ${a?`
            <div>
              <p style="font-size:0.68rem;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:2px;">Issued by</p>
              <p style="font-size:0.85rem;font-weight:600;color:var(--text-primary);">${a} <span style="font-size:0.75rem;color:var(--text-secondary);font-weight:400;">(${l})</span></p>
            </div>`:""}
        </div>`:""}

      <p style="font-size:0.875rem;line-height:1.5;">${n.suggestion_text||a_(n)}</p>
      <div class="flag-suggestion">
        💡 ${n.suggestion||"Review and make a human decision before acting."}
      </div>
      ${e?`<p class="text-xs text-dim mt-8">${n.status==="acted"?"✅ Acted":"🗑 Dismissed"}</p>`:`
        <div class="flex gap-8 mt-12">
          <button class="btn btn-ghost text-sm flag-action-btn" data-flag-id="${n.id}" data-action="acted"
            style="flex:1;padding:8px;">Mark Acted</button>
          <button class="btn btn-ghost text-sm flag-action-btn" data-flag-id="${n.id}" data-action="dismissed"
            style="flex:1;padding:8px;color:var(--text-secondary);">Dismiss</button>
        </div>
      `}
    </div>
  `}function a_(n){if(n.data_snapshot){const e=n.data_snapshot;return`Giver: ${e.giverName||n.giver_id} · Receiver: ${e.receiverName||n.receiver_id}`}return`Flag ID: ${n.id}`}const l_=[...At,...Pi,...Oi];function c_(n,e){const t=Z(e.role)||e.role==="HR";n.innerHTML=`
    <div class="page">
      <h1 style="font-size:1.4rem;margin-bottom:4px;">Staff Management</h1>
      <div class="flex gap-8 mb-16" id="approval-tabs" style="margin-top:12px;">
        <button class="btn btn-primary approval-tab" data-tab="pending" style="flex:1;padding:8px;font-size:0.8rem;">✋ Approvals</button>
        <button class="btn btn-ghost  approval-tab" data-tab="revokes" style="flex:1;padding:8px;font-size:0.8rem;" id="tab-revokes">↩ Revokes</button>
        ${t?'<button class="btn btn-ghost approval-tab" data-tab="bulk" style="flex:1;padding:8px;font-size:0.8rem;">📥 Bulk Add</button>':""}
      </div>
      <div id="approvals-content"></div>
    </div>
  `;let i=null;function s(l){n.querySelectorAll(".approval-tab").forEach(c=>{c.className=c.dataset.tab===l?"btn btn-primary approval-tab":"btn btn-ghost approval-tab",c.style.flex="1",c.style.padding="10px"}),i&&(i(),i=null),l==="pending"?r():l==="revokes"?o():a()}n.querySelectorAll(".approval-tab").forEach(l=>{l.addEventListener("click",()=>s(l.dataset.tab))}),ai(l=>{const c=n.querySelector('.approval-tab[data-tab="pending"]');c&&(c.innerHTML=`✋ Approvals ${l.length>0?`<span style="background:#fff2;border-radius:10px;padding:1px 7px;font-size:0.72rem;margin-left:4px;">${l.length}</span>`:""}`)}),li(l=>{const c=n.querySelector('.approval-tab[data-tab="revokes"]');c&&(c.innerHTML=`↩ Revokes ${l.length>0?`<span style="background:#fff2;border-radius:10px;padding:1px 7px;font-size:0.72rem;margin-left:4px;">${l.length}</span>`:""}`)}),r();function r(){const l=n.querySelector("#approvals-content");l.innerHTML='<div class="loading-center" style="min-height:30vh;"><div class="spinner"></div></div>',i=ai(c=>{if(c.length===0){l.innerHTML=`
          <div class="empty-state">
            <div class="icon">✅</div>
            <p class="text-dim">No pending requests</p>
            <p class="text-dim text-sm mt-8">Share the app link and staff can self-register.</p>
          </div>
        `;return}l.innerHTML=c.map(h=>`
        <div class="card" style="margin-bottom:12px;" data-id="${h.id}">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
            <div>
              <p style="color:#fff;font-weight:600;margin-bottom:2px;">${h.name}</p>
              <p class="text-dim text-sm">${h.email}</p>
            </div>
            <span class="badge badge-gold" style="font-size:0.7rem;">${h.role}</span>
          </div>
          <p class="text-dim text-sm" style="margin-bottom:16px;">
            Outlet: <span style="color:var(--text-primary);">${h.outlet}</span>
            &nbsp;·&nbsp; ${h_(h.submitted_at)}
          </p>
          <div class="flex gap-8">
            <button class="btn btn-primary btn-approve" data-id="${h.id}" style="flex:1;height:40px;font-size:0.85rem;">Approve</button>
            <button class="btn btn-ghost btn-reject"   data-id="${h.id}" style="flex:1;height:40px;font-size:0.85rem;border-color:rgba(255,69,58,0.3);color:var(--red);">Reject</button>
          </div>
        </div>
      `).join(""),l.querySelectorAll(".btn-approve").forEach(h=>{h.addEventListener("click",async()=>{const d=c.find(u=>u.id===h.dataset.id);h.disabled=!0,h.textContent="Approving…",await Jl(h.dataset.id,d,e.name)})}),l.querySelectorAll(".btn-reject").forEach(h=>{h.addEventListener("click",async()=>{h.disabled=!0,h.textContent="Rejecting…",await Xl(h.dataset.id,e.name)})})})}function o(){const l=n.querySelector("#approvals-content");l.innerHTML='<div class="loading-center" style="min-height:30vh;"><div class="spinner"></div></div>';let c=null;(async()=>{const[d,u]=await Promise.all([le(),Ut()]);c=li(p=>{if(p.length===0){l.innerHTML=`
            <div class="empty-state">
              <div class="icon">✅</div>
              <p class="text-dim">No pending revoke requests</p>
            </div>
          `;return}const _={green:"🟢 Minor",silver:"🟠 Moderate",gold:"🔴 Serious",crystal:"⚫ Severe"};l.innerHTML=p.map(f=>{const w=d[f.receiver_id],k=u[f.offense_id];return`
            <div class="card" style="margin-bottom:12px;border-color:rgba(255,69,58,0.25);" data-id="${f.id}">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
                <div>
                  <p style="font-weight:600;margin-bottom:2px;">${(w==null?void 0:w.name)||f.receiver_id}</p>
                  <p class="text-dim text-sm">${(k==null?void 0:k.name)||f.offense_id} · ${_[f.conduct_tier]||f.conduct_tier}</p>
                </div>
                <span style="color:var(--red);font-family:monospace;font-size:0.9rem;">−${f.pts_deducted} pts</span>
              </div>
              <p class="text-dim text-sm" style="margin-bottom:6px;">Requested by: <span style="color:var(--text-primary);">${f.giver_name}</span></p>
              <div style="background:rgba(255,255,255,0.04);border-radius:8px;padding:10px;margin-bottom:12px;">
                <p style="font-size:0.82rem;color:var(--text-secondary);">Reason: "${f.reason}"</p>
              </div>
              <p class="text-dim" style="font-size:0.72rem;margin-bottom:12px;">If approved: ${f.pts_deducted} pts will be restored to ${(w==null?void 0:w.name)||"employee"}</p>
              <div class="flex gap-8">
                <button class="btn btn-primary btn-revoke-approve" data-id="${f.id}" style="flex:1;height:40px;font-size:0.85rem;">Approve & Restore</button>
                <button class="btn btn-ghost btn-revoke-reject"   data-id="${f.id}" style="flex:1;height:40px;font-size:0.85rem;border-color:rgba(255,69,58,0.3);color:var(--red);">Reject</button>
              </div>
            </div>
          `}).join(""),l.querySelectorAll(".btn-revoke-approve").forEach(f=>{f.addEventListener("click",async()=>{const w=p.find(k=>k.id===f.dataset.id);f.disabled=!0,f.textContent="Approving…",await rc(f.dataset.id,w,e.name)})}),l.querySelectorAll(".btn-revoke-reject").forEach(f=>{f.addEventListener("click",async()=>{f.disabled=!0,f.textContent="Rejecting…",await oc(f.dataset.id,e.name)})})})})(),n._revokeUnsub=c}function a(){const l=n.querySelector("#approvals-content"),c=5;l.innerHTML=`
      <div class="card mb-16" style="padding:14px 16px;background:rgba(201,168,76,0.06);border-color:rgba(201,168,76,0.2);">
        <p style="font-size:0.82rem;color:var(--text-secondary);line-height:1.5;">
          Add up to ${c} staff at once. They'll be added directly — no approval needed.
          PIN must be 4 digits. Leave empty rows blank.
        </p>
      </div>

      <div id="bulk-rows">
        ${Array.from({length:c},(h,d)=>d_(d)).join("")}
      </div>

      <p id="bulk-status" class="text-sm text-center hidden" style="margin:12px 0;"></p>
      <button class="btn btn-primary w-full mt-8" id="btn-bulk-submit" style="height:54px;font-size:1rem;">
        Add Staff
      </button>
    `,n.querySelector("#btn-bulk-submit").addEventListener("click",async()=>{const h=n.querySelector("#btn-bulk-submit"),d=n.querySelector("#bulk-status"),u=[];if(n.querySelectorAll(".bulk-row").forEach(p=>{const _=p.querySelector(".b-name").value.trim(),f=p.querySelector(".b-email").value.trim(),w=p.querySelector(".b-role").value,k=p.querySelector(".b-outlet").value,C=p.querySelector(".b-pin").value.trim();_&&w&&k&&C.length===4&&u.push({name:_,email:f,role:w,outlet:k,pin:C})}),u.length===0){d.textContent="Fill in at least one row with name, role, outlet and 4-digit PIN.",d.style.color="var(--red)",d.classList.remove("hidden");return}h.disabled=!0,h.textContent=`Adding ${u.length} staff…`,d.classList.add("hidden");try{for(const p of u){const _=await u_(p.pin),f="emp_"+Math.random().toString(36).slice(2,10);await Ti(f,{name:p.name,email:p.email||"",role:p.role,outlet:p.outlet,pin_hash:_,active:!0})}d.textContent=`✓ ${u.length} staff added successfully!`,d.style.color="var(--green)",d.classList.remove("hidden"),n.querySelectorAll(".bulk-row input, .bulk-row select").forEach(p=>{p.tagName==="SELECT"?p.selectedIndex=0:p.value=""}),h.textContent="Add Staff",h.disabled=!1}catch(p){d.textContent="Failed. Check connection and try again.",d.style.color="var(--red)",d.classList.remove("hidden"),h.textContent="Add Staff",h.disabled=!1,console.error(p)}})}}function d_(n){const e=l_.map(i=>`<option value="${i}">${i}</option>`).join(""),t=mr.map(i=>`<option value="${i.id}">${i.id} – ${i.name}</option>`).join("");return`
    <div class="bulk-row card" style="margin-bottom:10px;padding:14px;display:flex;flex-direction:column;gap:8px;">
      <p class="section-header" style="margin-bottom:0;">Staff ${n+1}</p>
      <input class="input b-name"   type="text"     placeholder="Full Name" style="padding:10px 14px;" />
      <input class="input b-email"  type="email"    placeholder="Email (optional)" style="padding:10px 14px;" />
      <select class="input b-role"  style="padding:10px 14px;">
        <option value="" disabled selected>Select Role</option>
        ${e}
      </select>
      <select class="input b-outlet" style="padding:10px 14px;">
        <option value="" disabled selected>Select Outlet</option>
        ${t}
      </select>
      <input class="input b-pin" type="number" placeholder="4-digit PIN" maxlength="4" style="padding:10px 14px;" />
    </div>
  `}async function u_(n){const e=new TextEncoder().encode(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function h_(n){const e=Date.now()-n,t=Math.floor(e/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;const i=Math.floor(t/60);return i<24?`${i}h ago`:`${Math.floor(i/24)}d ago`}async function f_(n,e){const t=ge(),i=Hg();n.innerHTML=`
    <div class="page">
      <h1 style="font-size:1.4rem;margin-bottom:4px;">👑 Queen Bee Vote</h1>
      <p class="text-dim text-sm" style="margin-bottom:20px;">${g_()} · Voting Open</p>
      <div id="vote-content">
        <div class="loading-center" style="min-height:40vh;"><div class="spinner"></div></div>
      </div>
    </div>
  `;const s=n.querySelector("#vote-content");try{const[r,o,a,l]=await Promise.all([le(),Ln(t,e.id),Ai(),Ri(t)]),c=ki(t,u=>{d(u,r,o)}),h=new MutationObserver(()=>{document.contains(s)||(c(),h.disconnect())});h.observe(document.body,{childList:!0,subtree:!0});async function d(u,p,_){const f=Object.entries(u).map(([y,A])=>({id:y,...A,emp:p[y]||{}})).filter(y=>y.emp.active!==!1&&y.emp.role&&m_(y.emp.role)).sort((y,A)=>(A.net_points||A.points||0)-(y.net_points||y.points||0)).slice(0,5).map((y,A)=>({...y,rank:A+1}));let w=f.map(y=>l&&l.employee_id&&y.id===l.employee_id?{...y,isWildcard:!0,wildcardNominatedBy:l.nominated_by_name}:y);if(l&&l.employee_id&&!f.find(y=>y.id===l.employee_id)){const y=p[l.employee_id]||{},A=u[l.employee_id]||{};w.push({id:l.employee_id,emp:y,net_points:A.net_points||A.points||0,rank:6,isWildcard:!0,wildcardNominatedBy:l.nominated_by_name})}if(w.length===0){s.innerHTML=`
          <div class="empty-state">
            <div style="font-size:2.5rem;margin-bottom:12px;">🏆</div>
            <p class="text-dim">No nominees yet — earn beans to qualify!</p>
          </div>
        `;return}const k=Z(e.role)?await xn(t):{},C={};Object.values(k).forEach(y=>{C[y]=(C[y]||0)+1});const E=Object.values(C).reduce((y,A)=>y+A,0),O=!!_||await Ln(t,e.id);s.innerHTML=`
        ${O?`
          <div class="card mb-16" style="text-align:center;padding:20px 16px;background:rgba(48,209,88,0.06);border-color:rgba(48,209,88,0.3);">
            <div style="font-size:1.6rem;margin-bottom:8px;">🐝</div>
            <p style="color:var(--green);font-weight:600;margin-bottom:4px;">Your vote is in!</p>
            <p class="text-dim text-sm" style="margin-bottom:8px;">Your vote is anonymous — we won't tell anyone who you voted for. Thank you!</p>
            ${At.includes(e.role)&&a.voting_points_enabled!==!1?'<p style="font-size:0.82rem;color:var(--gold);">+25 pts added to your score 🌟</p>':""}
            ${Z(e.role)?`<p class="text-dim text-sm mt-8">${E} vote${E!==1?"s":""} cast so far</p>`:""}
          </div>
        `:`
          <div class="card mb-16" style="padding:14px 16px;">
            <p style="font-size:0.88rem;">Tap a nominee to cast your vote. <strong>You only get one vote.</strong></p>
          </div>
        `}
        ${w.map(y=>p_(y,!O,_,Z(e.role),C,E)).join("")}
        ${Z(e.role)?`
          <div class="card mt-16" style="padding:16px;">
            <p class="section-header" style="margin-bottom:8px;">Total Votes Cast</p>
            <div class="mono text-gold" style="font-size:2rem;">${E}</div>
          </div>
        `:""}
      `,!O&&i&&s.querySelectorAll(".nominee-vote-btn").forEach(y=>{y.addEventListener("click",async()=>{const A=y.dataset.id;y.disabled=!0;try{const m=await Ln(t,e.id);await Gl(t,e.id,A);const g=At.includes(e.role);!m&&g&&a.voting_points_enabled!==!1&&await Promise.all([ri(e.id,25),Jt(e.id,25)]),d(u,p,A)}catch(m){y.disabled=!1,console.error(m)}})}),Z(e.role)&&Object.keys(k).length>0&&s.querySelectorAll(".nominee-card-wrap").forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",()=>{const A=y.dataset.nomineeId,m=p[A]||{},g=Object.entries(k).filter(([,R])=>R===A).map(([R])=>R),T=g.map(R=>{var U;return((U=p[R])==null?void 0:U.name)||R}),v=s.querySelector(".voter-modal");v&&v.remove();const x=document.createElement("div");x.className="voter-modal",x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:999;display:flex;align-items:flex-end;",x.innerHTML=`
              <div style="background:var(--card-bg);border-radius:20px 20px 0 0;width:100%;max-height:70vh;overflow-y:auto;padding:20px;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
                  <div>
                    <p style="font-weight:700;color:var(--gold);">Votes for ${m.name||A}</p>
                    <p class="text-dim text-sm">${g.length} vote${g.length!==1?"s":""} received</p>
                  </div>
                  <button class="btn btn-ghost close-modal" style="padding:6px 12px;font-size:0.8rem;">Close</button>
                </div>
                ${T.length===0?'<p class="text-dim text-sm">No votes yet.</p>':T.map((R,U)=>`
                    <div class="lb-row" style="margin-bottom:6px;">
                      <span style="font-size:0.8rem;color:var(--text-tertiary);width:24px;">${U+1}</span>
                      <p style="font-size:0.9rem;">${R}</p>
                    </div>
                  `).join("")}
              </div>
            `,x.querySelector(".close-modal").addEventListener("click",()=>x.remove()),x.addEventListener("click",R=>{R.target===x&&x.remove()}),document.body.appendChild(x)})})}}catch{s.innerHTML='<p class="text-dim text-sm text-center">Failed to load. Check connection.</p>'}}function p_(n,e,t,i,s,r){var w;const o=n.net_points||n.points||0,a=n.emp,l=n.rank===1&&!n.isWildcard,c=s[n.id]||0,h=r>0?Math.round(c/r*100):0,d=(a.name||"??").split(" ").map(k=>k[0]).join("").slice(0,2).toUpperCase(),u=["#8B5E3C","#5E6E8B","#5E8B6E","#8B5E7A","#7A8B5E","#6E5E8B","#8B7A5E"],p=u[(a.name||"").charCodeAt(0)%u.length],_={1:"👑",2:"🥈",3:"🥉"},f=n.isWildcard?"⭐":_[n.rank]||`#${n.rank}`;return`
    <div class="nominee-card-wrap" data-nominee-id="${n.id}">
    <div class="lb-row mb-8 ${l?"lb-row-top1":""}" style="flex-direction:column;align-items:stretch;gap:10px;padding:16px;${n.isWildcard?"border-color:rgba(201,168,76,0.5);background:rgba(201,168,76,0.05);":""}">
      ${l?'<div class="queen-bee-glow"></div>':""}
      ${n.isWildcard?`
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:-4px;">
          <span style="font-size:0.7rem;font-weight:700;color:var(--gold);text-transform:uppercase;letter-spacing:0.08em;">⭐ Wildcard Nominee</span>
          ${n.wildcardNominatedBy?`<span class="text-dim" style="font-size:0.68rem;">· picked by ${n.wildcardNominatedBy}</span>`:""}
        </div>
      `:""}
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="font-size:1.4rem;min-width:32px;text-align:center;">${f}</div>
        ${a.photo_url?`<img src="${a.photo_url}" style="width:42px;height:42px;clip-path:polygon(50% 0%,95% 25%,95% 75%,50% 100%,5% 75%,5% 25%);object-fit:cover;flex-shrink:0;" />`:`<div style="width:42px;height:42px;clip-path:polygon(50% 0%,95% 25%,95% 75%,50% 100%,5% 75%,5% 25%);background:${p};display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:0.85rem;flex-shrink:0;">${d}</div>`}
        <div style="flex:1;">
          <p style="font-weight:${l?"600":"400"};${l?"color:var(--gold);":""}">${a.name||n.id}</p>
          <p class="text-dim" style="font-size:0.75rem;">${a.role||""} · ${a.outlet||""}</p>
        </div>
        <div class="mono text-gold" style="font-size:0.9rem;">${st(o)} <span style="font-size:0.7rem;color:var(--text-tertiary);">pts</span></div>
      </div>

      ${i?`
        <div>
          <div style="height:6px;border-radius:3px;background:var(--border);overflow:hidden;margin-bottom:4px;">
            <div style="height:100%;border-radius:3px;background:var(--gold);width:${h}%;transition:width 0.5s;"></div>
          </div>
          <p class="text-dim" style="font-size:0.72rem;">${c} vote${c!==1?"s":""} · ${h}%</p>
        </div>
      `:""}

      ${e?`
        <button class="btn nominee-vote-btn" data-id="${n.id}"
          style="padding:10px;background:rgba(201,168,76,0.12);color:var(--gold);border:1px solid rgba(201,168,76,0.3);border-radius:var(--radius-md);font-size:0.88rem;cursor:pointer;">
          Vote for ${((w=a.name)==null?void 0:w.split(" ")[0])||"them"} 👑
        </button>
      `:""}
    </div>
    </div>
  `}function m_(n){return["Trainee","Barista","Senior Barista","Kitchen Helper","Commi 3","Commi 2","Commi 1","DCDP","CDP"].includes(n)}function g_(){return new Date().toLocaleDateString("en-IN",{month:"long",year:"numeric"})}function __(n,e,t,i){const s=e.role;t.db_toggle;const r=v_(s);n.innerHTML=`
    <div id="screen-container"></div>
    <nav class="nav-bar" id="nav-bar">
      ${r.map(({id:c,icon:h,label:d})=>`
        <div class="nav-item" data-screen="${c}">
          ${h}
          <span>${d}</span>
        </div>
      `).join("")}
    </nav>
  `;const o=n.querySelector("#screen-container");r[0].id;function a(c){n.querySelectorAll(".nav-item").forEach(h=>{h.classList.toggle("active",h.dataset.screen===c)}),l(c)}function l(c){switch(o.innerHTML="",c){case"dashboard":jg(o,e,t,{onLogout:i,navigate:a});break;case"leaderboard":e_(o,e);break;case"award":r_(o,e);break;case"audit":o_(o,e);break;case"approvals":c_(o,e);break;case"vote":f_(o,e);break;default:o.innerHTML=`
          <div class="page">
            <div class="empty-state">
              <div class="icon">🚧</div>
              <p class="text-dim">This screen is coming in a future phase.</p>
            </div>
          </div>
        `}}if(n.querySelectorAll(".nav-item").forEach(c=>{c.addEventListener("click",()=>a(c.dataset.screen))}),a(r[0].id),Z(s)||_t(s)){let c=0,h=0;const d=()=>{const u=n.querySelector('.nav-item[data-screen="approvals"]');if(!u)return;const p=u.querySelector(".pending-badge");p&&p.remove();const _=c+h;if(_>0){const f=document.createElement("span");f.className="pending-badge",f.textContent=_,u.appendChild(f)}};ai(u=>{c=u.length,d()}),li(u=>{h=u.length,d()})}}function v_(n,e){const t=[{id:"dashboard",icon:y_(),label:"Home"},{id:"leaderboard",icon:b_(),label:"Board"}];return(gr(n)||_t(n))&&t.push({id:"award",icon:w_(),label:_t(n)?"Conduct":"Award"}),(_t(n)||Z(n))&&t.push({id:"audit",icon:E_(),label:"Audit"}),(Z(n)||_t(n))&&t.push({id:"approvals",icon:C_(),label:"Staff"}),t.push({id:"vote",icon:x_(),label:"Vote"}),t}function y_(){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>`}function b_(){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="3" y="12" width="4" height="9" rx="1"/>
    <rect x="10" y="7" width="4" height="14" rx="1"/>
    <rect x="17" y="4" width="4" height="17" rx="1"/>
  </svg>`}function w_(){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <circle cx="12" cy="10" r="6"/>
    <path d="M8.5 17.5L7 22h10l-1.5-4.5"/>
  </svg>`}function E_(){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M9 11l3 3L22 4"/>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
  </svg>`}function C_(){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <polyline points="16 11 18 13 22 9"/>
  </svg>`}function x_(){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>`}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})});async function _r(){try{await Wu(Eg)}catch{}const n=document.getElementById("app"),e=pc();if(!e){Sc(n,I_);return}gc();let t={};try{t=await Ai()}catch{}try{const[i,s]=await Promise.all([Ft(),Ut()]);Object.keys(i).length===0&&await Promise.all(yc.map(r=>Wl(r.id,r))),Object.keys(s).length===0&&await Promise.all(bc.map(r=>Vl(r.id,r)))}catch{}__(n,e,t,S_)}function I_(n){gc(),_r()}function S_(){Dg(),_r()}_r();
//# sourceMappingURL=index-C8LyC1A7.js.map
