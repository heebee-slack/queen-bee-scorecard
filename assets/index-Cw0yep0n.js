(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var gr={};/**
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
 */const xo={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const y=function(n,e){if(!n)throw Ct(e)},Ct=function(n){return new Error("Firebase Database ("+xo.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const To=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ic=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ds={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,d=r>>2,u=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,h=c&63;l||(h=64,o||(f=64)),i.push(t[d],t[u],t[f],t[h])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(To(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ic(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const u=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw new Sc;const f=r<<2|a>>4;if(i.push(f),c!==64){const h=a<<4&240|c>>2;if(i.push(h),u!==64){const g=c<<6&192|u;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Sc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ko=function(n){const e=To(n);return ds.encodeByteArray(e,!0)},kn=function(n){return ko(n).replace(/\./g,"")},Rn=function(n){try{return ds.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xc(n){return Ro(void 0,n)}function Ro(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Tc(t)||(n[t]=Ro(n[t],e[t]));return n}function Tc(n){return n!=="__proto__"}/**
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
 */function kc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Rc=()=>kc().__FIREBASE_DEFAULTS__,Ac=()=>{if(typeof process>"u"||typeof gr>"u")return;const n=gr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Nc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Rn(n[1]);return e&&JSON.parse(e)},us=()=>{try{return Rc()||Ac()||Nc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ao=n=>{var e,t;return(t=(e=us())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Pc=n=>{const e=Ao(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},No=()=>{var n;return(n=us())===null||n===void 0?void 0:n.config},Po=n=>{var e;return(e=us())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class tn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Oc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[kn(JSON.stringify(t)),kn(JSON.stringify(o)),""].join(".")}/**
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
 */function Z(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hs(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Z())}function Lc(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Dc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Oo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mc(){const n=Z();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function $c(){return xo.NODE_ADMIN===!0}function Fc(){try{return typeof indexedDB=="object"}catch{return!1}}function Uc(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const Bc="FirebaseError";class We extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Bc,Object.setPrototypeOf(this,We.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nn.prototype.create)}}class nn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Hc(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new We(s,a,i)}}function Hc(n,e){return n.replace(qc,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const qc=/\{\$([^}]+)}/g;/**
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
 */function jt(n){return JSON.parse(n)}function V(n){return JSON.stringify(n)}/**
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
 */const Lo=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=jt(Rn(r[0])||""),t=jt(Rn(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},jc=function(n){const e=Lo(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},zc=function(n){const e=Lo(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ge(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function mt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Hi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function An(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Nn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(_r(r)&&_r(o)){if(!Nn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function _r(n){return n!==null&&typeof n=="object"}/**
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
 */function It(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class Wc{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)i[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const f=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),d=1518500249):(c=r^o^a,d=1859775393):u<60?(c=r&o|a&(r|o),d=2400959708):(c=r^o^a,d=3395469782);const f=(s<<5|s>>>27)+c+l+d+i[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Vc(n,e){const t=new Gc(n,e);return t.subscribe.bind(t)}class Gc{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Kc(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Ti),s.error===void 0&&(s.error=Ti),s.complete===void 0&&(s.complete=Ti);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Kc(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ti(){}function ei(n,e){return`${n} failed: ${e} argument `}/**
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
 */const Yc=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,y(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ti=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ie(n){return n&&n._delegate?n._delegate:n}class Je{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ge="[DEFAULT]";/**
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
 */class Qc{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new tn;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xc(e))try{this.getOrInitializeService({instanceIdentifier:Ge})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Ge){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ge){return this.instances.has(e)}getOptions(e=Ge){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Jc(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ge){return this.component?this.component.multipleInstances?e:Ge:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jc(n){return n===Ge?void 0:n}function Xc(n){return n.instantiationMode==="EAGER"}/**
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
 */class Zc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Qc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const ed={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},td=$.INFO,nd={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},id=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=nd[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fs{constructor(e){this.name=e,this._logLevel=td,this._logHandler=id,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ed[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const sd=(n,e)=>e.some(t=>n instanceof t);let vr,yr;function rd(){return vr||(vr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function od(){return yr||(yr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Do=new WeakMap,qi=new WeakMap,Mo=new WeakMap,ki=new WeakMap,ps=new WeakMap;function ad(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(De(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Do.set(t,n)}).catch(()=>{}),ps.set(e,n),e}function ld(n){if(qi.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});qi.set(n,e)}let ji={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return qi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Mo.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return De(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function cd(n){ji=n(ji)}function dd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Ri(this),e,...t);return Mo.set(i,e.sort?e.sort():[e]),De(i)}:od().includes(n)?function(...e){return n.apply(Ri(this),e),De(Do.get(this))}:function(...e){return De(n.apply(Ri(this),e))}}function ud(n){return typeof n=="function"?dd(n):(n instanceof IDBTransaction&&ld(n),sd(n,rd())?new Proxy(n,ji):n)}function De(n){if(n instanceof IDBRequest)return ad(n);if(ki.has(n))return ki.get(n);const e=ud(n);return e!==n&&(ki.set(n,e),ps.set(e,n)),e}const Ri=n=>ps.get(n);function hd(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=De(o);return i&&o.addEventListener("upgradeneeded",l=>{i(De(o.result),l.oldVersion,l.newVersion,De(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const fd=["get","getKey","getAll","getAllKeys","count"],pd=["put","add","delete","clear"],Ai=new Map;function br(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ai.get(e))return Ai.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=pd.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||fd.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Ai.set(e,r),r}cd(n=>({...n,get:(e,t,i)=>br(e,t)||n.get(e,t,i),has:(e,t)=>!!br(e,t)||n.has(e,t)}));/**
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
 */class md{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(gd(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function gd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zi="@firebase/app",wr="0.10.13";/**
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
 */const Ce=new fs("@firebase/app"),_d="@firebase/app-compat",vd="@firebase/analytics-compat",yd="@firebase/analytics",bd="@firebase/app-check-compat",wd="@firebase/app-check",Ed="@firebase/auth",Cd="@firebase/auth-compat",Id="@firebase/database",Sd="@firebase/data-connect",xd="@firebase/database-compat",Td="@firebase/functions",kd="@firebase/functions-compat",Rd="@firebase/installations",Ad="@firebase/installations-compat",Nd="@firebase/messaging",Pd="@firebase/messaging-compat",Od="@firebase/performance",Ld="@firebase/performance-compat",Dd="@firebase/remote-config",Md="@firebase/remote-config-compat",$d="@firebase/storage",Fd="@firebase/storage-compat",Ud="@firebase/firestore",Bd="@firebase/vertexai-preview",Hd="@firebase/firestore-compat",qd="firebase",jd="10.14.1";/**
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
 */const Wi="[DEFAULT]",zd={[zi]:"fire-core",[_d]:"fire-core-compat",[yd]:"fire-analytics",[vd]:"fire-analytics-compat",[wd]:"fire-app-check",[bd]:"fire-app-check-compat",[Ed]:"fire-auth",[Cd]:"fire-auth-compat",[Id]:"fire-rtdb",[Sd]:"fire-data-connect",[xd]:"fire-rtdb-compat",[Td]:"fire-fn",[kd]:"fire-fn-compat",[Rd]:"fire-iid",[Ad]:"fire-iid-compat",[Nd]:"fire-fcm",[Pd]:"fire-fcm-compat",[Od]:"fire-perf",[Ld]:"fire-perf-compat",[Dd]:"fire-rc",[Md]:"fire-rc-compat",[$d]:"fire-gcs",[Fd]:"fire-gcs-compat",[Ud]:"fire-fst",[Hd]:"fire-fst-compat",[Bd]:"fire-vertex","fire-js":"fire-js",[qd]:"fire-js-all"};/**
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
 */const Pn=new Map,Wd=new Map,Vi=new Map;function Er(n,e){try{n.container.addComponent(e)}catch(t){Ce.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function gt(n){const e=n.name;if(Vi.has(e))return Ce.debug(`There were multiple attempts to register component ${e}.`),!1;Vi.set(e,n);for(const t of Pn.values())Er(t,n);for(const t of Wd.values())Er(t,n);return!0}function ms(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function _e(n){return n.settings!==void 0}/**
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
 */const Vd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Me=new nn("app","Firebase",Vd);/**
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
 */class Gd{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Me.create("app-deleted",{appName:this._name})}}/**
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
 */const St=jd;function $o(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Wi,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Me.create("bad-app-name",{appName:String(s)});if(t||(t=No()),!t)throw Me.create("no-options");const r=Pn.get(s);if(r){if(Nn(t,r.options)&&Nn(i,r.config))return r;throw Me.create("duplicate-app",{appName:s})}const o=new Zc(s);for(const l of Vi.values())o.addComponent(l);const a=new Gd(t,i,o);return Pn.set(s,a),a}function Fo(n=Wi){const e=Pn.get(n);if(!e&&n===Wi&&No())return $o();if(!e)throw Me.create("no-app",{appName:n});return e}function $e(n,e,t){var i;let s=(i=zd[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ce.warn(a.join(" "));return}gt(new Je(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Kd="firebase-heartbeat-database",Yd=1,zt="firebase-heartbeat-store";let Ni=null;function Uo(){return Ni||(Ni=hd(Kd,Yd,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(zt)}catch(t){console.warn(t)}}}}).catch(n=>{throw Me.create("idb-open",{originalErrorMessage:n.message})})),Ni}async function Qd(n){try{const t=(await Uo()).transaction(zt),i=await t.objectStore(zt).get(Bo(n));return await t.done,i}catch(e){if(e instanceof We)Ce.warn(e.message);else{const t=Me.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ce.warn(t.message)}}}async function Cr(n,e){try{const i=(await Uo()).transaction(zt,"readwrite");await i.objectStore(zt).put(e,Bo(n)),await i.done}catch(t){if(t instanceof We)Ce.warn(t.message);else{const i=Me.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ce.warn(i.message)}}}function Bo(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Jd=1024,Xd=30*24*60*60*1e3;class Zd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new tu(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ir();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Xd}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Ce.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ir(),{heartbeatsToSend:i,unsentEntries:s}=eu(this._heartbeatsCache.heartbeats),r=kn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Ce.warn(t),""}}}function Ir(){return new Date().toISOString().substring(0,10)}function eu(n,e=Jd){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Sr(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Sr(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class tu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fc()?Uc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Qd(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Sr(n){return kn(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function nu(n){gt(new Je("platform-logger",e=>new md(e),"PRIVATE")),gt(new Je("heartbeat",e=>new Zd(e),"PRIVATE")),$e(zi,wr,n),$e(zi,wr,"esm2017"),$e("fire-js","")}nu("");var iu="firebase",su="10.14.1";/**
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
 */$e(iu,su,"app");function gs(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function Ho(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ru=Ho,qo=new nn("auth","Firebase",Ho());/**
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
 */const On=new fs("@firebase/auth");function ou(n,...e){On.logLevel<=$.WARN&&On.warn(`Auth (${St}): ${n}`,...e)}function wn(n,...e){On.logLevel<=$.ERROR&&On.error(`Auth (${St}): ${n}`,...e)}/**
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
 */function Ie(n,...e){throw _s(n,...e)}function he(n,...e){return _s(n,...e)}function jo(n,e,t){const i=Object.assign(Object.assign({},ru()),{[e]:t});return new nn("auth","Firebase",i).create(e,{appName:n.name})}function Fe(n){return jo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _s(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return qo.create(n,...e)}function k(n,e,...t){if(!n)throw _s(e,...t)}function ve(n){const e="INTERNAL ASSERTION FAILED: "+n;throw wn(e),new Error(e)}function Se(n,e){n||ve(e)}/**
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
 */function Gi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function au(){return xr()==="http:"||xr()==="https:"}function xr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function lu(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(au()||Dc()||"connection"in navigator)?navigator.onLine:!0}function cu(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class sn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Se(t>e,"Short delay should be less than long delay!"),this.isMobile=hs()||Oo()}get(){return lu()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vs(n,e){Se(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class zo{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ve("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ve("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ve("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const du={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const uu=new sn(3e4,6e4);function ni(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function xt(n,e,t,i,s={}){return Wo(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=It(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:l},r);return Lc()||(c.referrerPolicy="no-referrer"),zo.fetch()(Go(n,n.config.apiHost,t,a),c)})}async function Wo(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},du),e);try{const s=new hu(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw vn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw vn(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw vn(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw vn(n,"user-disabled",o);const d=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw jo(n,d,c);Ie(n,d)}}catch(s){if(s instanceof We)throw s;Ie(n,"network-request-failed",{message:String(s)})}}async function Vo(n,e,t,i,s={}){const r=await xt(n,e,t,i,s);return"mfaPendingCredential"in r&&Ie(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Go(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?vs(n.config,s):`${n.config.apiScheme}://${s}`}class hu{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(he(this.auth,"network-request-failed")),uu.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=he(n,e,i);return s.customData._tokenResponse=t,s}/**
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
 */async function fu(n,e){return xt(n,"POST","/v1/accounts:delete",e)}async function Ko(n,e){return xt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function $t(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pu(n,e=!1){const t=ie(n),i=await t.getIdToken(e),s=ys(i);k(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:$t(Pi(s.auth_time)),issuedAtTime:$t(Pi(s.iat)),expirationTime:$t(Pi(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Pi(n){return Number(n)*1e3}function ys(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return wn("JWT malformed, contained fewer than 3 sections"),null;try{const s=Rn(t);return s?JSON.parse(s):(wn("Failed to decode base64 JWT payload"),null)}catch(s){return wn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Tr(n){const e=ys(n);return k(e,"internal-error"),k(typeof e.exp<"u","internal-error"),k(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wt(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof We&&mu(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function mu({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class gu{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ki{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$t(this.lastLoginAt),this.creationTime=$t(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ln(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Wt(n,Ko(t,{idToken:i}));k(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Yo(r.providerUserInfo):[],a=vu(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ki(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,u)}async function _u(n){const e=ie(n);await Ln(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vu(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Yo(n){return n.map(e=>{var{providerId:t}=e,i=gs(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function yu(n,e){const t=await Wo(n,{},async()=>{const i=It({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=Go(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zo.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function bu(n,e){return xt(n,"POST","/v2/accounts:revokeToken",ni(n,e))}/**
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
 */class dt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken<"u","internal-error"),k(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Tr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){k(e.length!==0,"internal-error");const t=Tr(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(k(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await yu(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new dt;return i&&(k(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(k(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(k(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new dt,this.toJSON())}_performRefresh(){return ve("not implemented")}}/**
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
 */function Re(n,e){k(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ye{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=gs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ki(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Wt(this,this.stsTokenManager.getToken(this.auth,e));return k(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return pu(this,e)}reload(){return _u(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ye(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Ln(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_e(this.auth.app))return Promise.reject(Fe(this.auth));const e=await this.getIdToken();return await Wt(this,fu(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,d;const u=(i=t.displayName)!==null&&i!==void 0?i:void 0,f=(s=t.email)!==null&&s!==void 0?s:void 0,h=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,_=(a=t.tenantId)!==null&&a!==void 0?a:void 0,b=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,C=(c=t.createdAt)!==null&&c!==void 0?c:void 0,w=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:E,emailVerified:O,isAnonymous:p,providerData:m,stsTokenManager:v}=t;k(E&&v,e,"internal-error");const x=dt.fromJSON(this.name,v);k(typeof E=="string",e,"internal-error"),Re(u,e.name),Re(f,e.name),k(typeof O=="boolean",e,"internal-error"),k(typeof p=="boolean",e,"internal-error"),Re(h,e.name),Re(g,e.name),Re(_,e.name),Re(b,e.name),Re(C,e.name),Re(w,e.name);const R=new ye({uid:E,auth:e,email:f,emailVerified:O,displayName:u,isAnonymous:p,photoURL:g,phoneNumber:h,tenantId:_,stsTokenManager:x,createdAt:C,lastLoginAt:w});return m&&Array.isArray(m)&&(R.providerData=m.map(M=>Object.assign({},M))),b&&(R._redirectEventId=b),R}static async _fromIdTokenResponse(e,t,i=!1){const s=new dt;s.updateFromServerResponse(t);const r=new ye({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Ln(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];k(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Yo(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new dt;a.updateFromIdToken(i);const l=new ye({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Ki(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const kr=new Map;function be(n){Se(n instanceof Function,"Expected a class definition");let e=kr.get(n);return e?(Se(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,kr.set(n,e),e)}/**
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
 */class Qo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Qo.type="NONE";const Rr=Qo;/**
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
 */function En(n,e,t){return`firebase:${n}:${e}:${t}`}class ut{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=En(this.userKey,s.apiKey,r),this.fullPersistenceKey=En("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ye._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new ut(be(Rr),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||be(Rr);const o=En(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const d=await c._get(o);if(d){const u=ye._fromJSON(e,d);c!==r&&(a=u),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ut(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ut(r,e,i))}}/**
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
 */function Ar(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ea(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jo(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(na(e))return"Blackberry";if(ia(e))return"Webos";if(Xo(e))return"Safari";if((e.includes("chrome/")||Zo(e))&&!e.includes("edge/"))return"Chrome";if(ta(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Jo(n=Z()){return/firefox\//i.test(n)}function Xo(n=Z()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zo(n=Z()){return/crios\//i.test(n)}function ea(n=Z()){return/iemobile/i.test(n)}function ta(n=Z()){return/android/i.test(n)}function na(n=Z()){return/blackberry/i.test(n)}function ia(n=Z()){return/webos/i.test(n)}function bs(n=Z()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function wu(n=Z()){var e;return bs(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Eu(){return Mc()&&document.documentMode===10}function sa(n=Z()){return bs(n)||ta(n)||ia(n)||na(n)||/windows phone/i.test(n)||ea(n)}/**
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
 */function ra(n,e=[]){let t;switch(n){case"Browser":t=Ar(Z());break;case"Worker":t=`${Ar(Z())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${St}/${i}`}/**
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
 */class Cu{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Iu(n,e={}){return xt(n,"GET","/v2/passwordPolicy",ni(n,e))}/**
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
 */const Su=6;class xu{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Su,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Tu{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nr(this),this.idTokenSubscription=new Nr(this),this.beforeStateQueue=new Cu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=be(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await ut.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ko(this,{idToken:e}),i=await ye._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(_e(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ln(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cu()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_e(this.app))return Promise.reject(Fe(this));const t=e?ie(e):null;return t&&k(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _e(this.app)?Promise.reject(Fe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _e(this.app)?Promise.reject(Fe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(be(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Iu(this),t=new xu(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new nn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await bu(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&be(e)||this._popupRedirectResolver;k(t,this,"argument-error"),this.redirectPersistenceManager=await ut.create(this,[be(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(k(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ra(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&ou(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ii(n){return ie(n)}class Nr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vc(t=>this.observer=t)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ws={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ku(n){ws=n}function Ru(n){return ws.loadJS(n)}function Au(){return ws.gapiScript}function Nu(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Pu(n,e){const t=ms(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Nn(r,e??{}))return s;Ie(s,"already-initialized")}return t.initialize({options:e})}function Ou(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(be);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Lu(n,e,t){const i=ii(n);k(i._canInitEmulator,i,"emulator-config-failed"),k(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=oa(e),{host:o,port:a}=Du(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),Mu()}function oa(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Du(n){const e=oa(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Pr(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Pr(o)}}}function Pr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Mu(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class aa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ve("not implemented")}_getIdTokenResponse(e){return ve("not implemented")}_linkToIdToken(e,t){return ve("not implemented")}_getReauthenticationResolver(e){return ve("not implemented")}}/**
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
 */async function ht(n,e){return Vo(n,"POST","/v1/accounts:signInWithIdp",ni(n,e))}/**
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
 */const $u="http://localhost";class Xe extends aa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ie("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=gs(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Xe(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ht(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ht(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ht(e,t)}buildRequest(){const e={requestUri:$u,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=It(t)}return e}}/**
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
 */class la{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class rn extends la{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ae extends rn{constructor(){super("facebook.com")}static credential(e){return Xe._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ae.credential(e.oauthAccessToken)}catch{return null}}}Ae.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ae.PROVIDER_ID="facebook.com";/**
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
 */class Ne extends rn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xe._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ne.credential(t,i)}catch{return null}}}Ne.GOOGLE_SIGN_IN_METHOD="google.com";Ne.PROVIDER_ID="google.com";/**
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
 */class Pe extends rn{constructor(){super("github.com")}static credential(e){return Xe._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pe.credential(e.oauthAccessToken)}catch{return null}}}Pe.GITHUB_SIGN_IN_METHOD="github.com";Pe.PROVIDER_ID="github.com";/**
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
 */class Oe extends rn{constructor(){super("twitter.com")}static credential(e,t){return Xe._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Oe.credential(t,i)}catch{return null}}}Oe.TWITTER_SIGN_IN_METHOD="twitter.com";Oe.PROVIDER_ID="twitter.com";/**
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
 */async function Fu(n,e){return Vo(n,"POST","/v1/accounts:signUp",ni(n,e))}/**
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
 */class He{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await ye._fromIdTokenResponse(e,i,s),o=Or(i);return new He({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Or(i);return new He({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Or(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function Uu(n){var e;if(_e(n.app))return Promise.reject(Fe(n));const t=ii(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new He({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await Fu(t,{returnSecureToken:!0}),s=await He._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(s.user),s}/**
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
 */class Dn extends We{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Dn.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Dn(e,t,i,s)}}function ca(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Dn._fromErrorAndOperation(n,r,e,i):r})}async function Bu(n,e,t=!1){const i=await Wt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return He._forOperation(n,"link",i)}/**
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
 */async function Hu(n,e,t=!1){const{auth:i}=n;if(_e(i.app))return Promise.reject(Fe(i));const s="reauthenticate";try{const r=await Wt(n,ca(i,s,e,n),t);k(r.idToken,i,"internal-error");const o=ys(r.idToken);k(o,i,"internal-error");const{sub:a}=o;return k(n.uid===a,i,"user-mismatch"),He._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ie(i,"user-mismatch"),r}}/**
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
 */async function qu(n,e,t=!1){if(_e(n.app))return Promise.reject(Fe(n));const i="signIn",s=await ca(n,i,e),r=await He._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}function ju(n,e,t,i){return ie(n).onIdTokenChanged(e,t,i)}function zu(n,e,t){return ie(n).beforeAuthStateChanged(e,t)}const Mn="__sak";/**
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
 */class da{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Mn,"1"),this.storage.removeItem(Mn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Wu=1e3,Vu=10;class ua extends da{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Eu()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Vu):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Wu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ua.type="LOCAL";const Gu=ua;/**
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
 */class ha extends da{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ha.type="SESSION";const fa=ha;/**
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
 */function Ku(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class si{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new si(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await Ku(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}si.receivers=[];/**
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
 */function Es(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Yu{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Es("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(u){const f=u;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(d),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function fe(){return window}function Qu(n){fe().location.href=n}/**
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
 */function pa(){return typeof fe().WorkerGlobalScope<"u"&&typeof fe().importScripts=="function"}async function Ju(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xu(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Zu(){return pa()?self:null}/**
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
 */const ma="firebaseLocalStorageDb",eh=1,$n="firebaseLocalStorage",ga="fbase_key";class on{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ri(n,e){return n.transaction([$n],e?"readwrite":"readonly").objectStore($n)}function th(){const n=indexedDB.deleteDatabase(ma);return new on(n).toPromise()}function Yi(){const n=indexedDB.open(ma,eh);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore($n,{keyPath:ga})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains($n)?e(i):(i.close(),await th(),e(await Yi()))})})}async function Lr(n,e,t){const i=ri(n,!0).put({[ga]:e,value:t});return new on(i).toPromise()}async function nh(n,e){const t=ri(n,!1).get(e),i=await new on(t).toPromise();return i===void 0?null:i.value}function Dr(n,e){const t=ri(n,!0).delete(e);return new on(t).toPromise()}const ih=800,sh=3;class _a{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>sh)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pa()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=si._getInstance(Zu()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ju(),!this.activeServiceWorker)return;this.sender=new Yu(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yi();return await Lr(e,Mn,"1"),await Dr(e,Mn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Lr(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>nh(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Dr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=ri(s,!1).getAll();return new on(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ih)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_a.type="LOCAL";const rh=_a;new sn(3e4,6e4);/**
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
 */function oh(n,e){return e?be(e):(k(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Cs extends aa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ht(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ht(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ht(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ah(n){return qu(n.auth,new Cs(n),n.bypassAuthState)}function lh(n){const{auth:e,user:t}=n;return k(t,e,"internal-error"),Hu(t,new Cs(n),n.bypassAuthState)}async function ch(n){const{auth:e,user:t}=n;return k(t,e,"internal-error"),Bu(t,new Cs(n),n.bypassAuthState)}/**
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
 */class va{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ah;case"linkViaPopup":case"linkViaRedirect":return ch;case"reauthViaPopup":case"reauthViaRedirect":return lh;default:Ie(this.auth,"internal-error")}}resolve(e){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const dh=new sn(2e3,1e4);class at extends va{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,at.currentPopupAction&&at.currentPopupAction.cancel(),at.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){Se(this.filter.length===1,"Popup operations only handle one event");const e=Es();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(he(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(he(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,at.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(he(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dh.get())};e()}}at.currentPopupAction=null;/**
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
 */const uh="pendingRedirect",Cn=new Map;class hh extends va{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Cn.get(this.auth._key());if(!e){try{const i=await fh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Cn.set(this.auth._key(),e)}return this.bypassAuthState||Cn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fh(n,e){const t=gh(e),i=mh(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function ph(n,e){Cn.set(n._key(),e)}function mh(n){return be(n._redirectPersistence)}function gh(n){return En(uh,n.config.apiKey,n.name)}async function _h(n,e,t=!1){if(_e(n.app))return Promise.reject(Fe(n));const i=ii(n),s=oh(i,e),o=await new hh(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const vh=10*60*1e3;class yh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bh(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!ya(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(he(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vh&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mr(e))}saveEventToCache(e){this.cachedEventUids.add(Mr(e)),this.lastProcessedEventTime=Date.now()}}function Mr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ya({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bh(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ya(n);default:return!1}}/**
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
 */async function wh(n,e={}){return xt(n,"GET","/v1/projects",e)}/**
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
 */const Eh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ch=/^https?/;async function Ih(n){if(n.config.emulator)return;const{authorizedDomains:e}=await wh(n);for(const t of e)try{if(Sh(t))return}catch{}Ie(n,"unauthorized-domain")}function Sh(n){const e=Gi(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Ch.test(t))return!1;if(Eh.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const xh=new sn(3e4,6e4);function $r(){const n=fe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Th(n){return new Promise((e,t)=>{var i,s,r;function o(){$r(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$r(),t(he(n,"network-request-failed"))},timeout:xh.get()})}if(!((s=(i=fe().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=fe().gapi)===null||r===void 0)&&r.load)o();else{const a=Nu("iframefcb");return fe()[a]=()=>{gapi.load?o():t(he(n,"network-request-failed"))},Ru(`${Au()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw In=null,e})}let In=null;function kh(n){return In=In||Th(n),In}/**
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
 */const Rh=new sn(5e3,15e3),Ah="__/auth/iframe",Nh="emulator/auth/iframe",Ph={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Oh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Lh(n){const e=n.config;k(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?vs(e,Nh):`https://${n.config.authDomain}/${Ah}`,i={apiKey:e.apiKey,appName:n.name,v:St},s=Oh.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${It(i).slice(1)}`}async function Dh(n){const e=await kh(n),t=fe().gapi;return k(t,n,"internal-error"),e.open({where:document.body,url:Lh(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ph,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=he(n,"network-request-failed"),a=fe().setTimeout(()=>{r(o)},Rh.get());function l(){fe().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Mh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$h=500,Fh=600,Uh="_blank",Bh="http://localhost";class Fr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Hh(n,e,t,i=$h,s=Fh){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Mh),{width:i.toString(),height:s.toString(),top:r,left:o}),c=Z().toLowerCase();t&&(a=Zo(c)?Uh:t),Jo(c)&&(e=e||Bh,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[h,g])=>`${f}${h}=${g},`,"");if(wu(c)&&a!=="_self")return qh(e||"",a),new Fr(null);const u=window.open(e||"",a,d);k(u,n,"popup-blocked");try{u.focus()}catch{}return new Fr(u)}function qh(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const jh="__/auth/handler",zh="emulator/auth/handler",Wh=encodeURIComponent("fac");async function Ur(n,e,t,i,s,r){k(n.config.authDomain,n,"auth-domain-config-required"),k(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:St,eventId:s};if(e instanceof la){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Hi(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof rn){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await n._getAppCheckToken(),c=l?`#${Wh}=${encodeURIComponent(l)}`:"";return`${Vh(n)}?${It(a).slice(1)}${c}`}function Vh({config:n}){return n.emulator?vs(n,zh):`https://${n.authDomain}/${jh}`}/**
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
 */const Oi="webStorageSupport";class Gh{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fa,this._completeRedirectFn=_h,this._overrideRedirectResult=ph}async _openPopup(e,t,i,s){var r;Se((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Ur(e,t,i,Gi(),s);return Hh(e,o,Es())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Ur(e,t,i,Gi(),s);return Qu(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Se(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Dh(e),i=new yh(e);return t.register("authEvent",s=>(k(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Oi,{type:Oi},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Oi];o!==void 0&&t(!!o),Ie(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ih(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return sa()||Xo()||bs()}}const Kh=Gh;var Br="@firebase/auth",Hr="1.7.9";/**
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
 */class Yh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Qh(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Jh(n){gt(new Je("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;k(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ra(n)},c=new Tu(i,s,r,l);return Ou(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),gt(new Je("auth-internal",e=>{const t=ii(e.getProvider("auth").getImmediate());return(i=>new Yh(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),$e(Br,Hr,Qh(n)),$e(Br,Hr,"esm2017")}/**
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
 */const Xh=5*60,Zh=Po("authIdTokenMaxAge")||Xh;let qr=null;const ef=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Zh)return;const s=t==null?void 0:t.token;qr!==s&&(qr=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function tf(n=Fo()){const e=ms(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Pu(n,{popupRedirectResolver:Kh,persistence:[rh,Gu,fa]}),i=Po("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=ef(r.toString());zu(t,o,()=>o(t.currentUser)),ju(t,a=>o(a))}}const s=Ao("auth");return s&&Lu(t,`http://${s}`),t}function nf(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}ku({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=he("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",nf().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Jh("Browser");var jr={};const zr="@firebase/database",Wr="1.0.8";/**
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
 */let ba="";function sf(n){ba=n}/**
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
 */class rf{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),V(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:jt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class of{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ge(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const wa=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new rf(e)}}catch{}return new of},Ye=wa("localStorage"),af=wa("sessionStorage");/**
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
 */const ft=new fs("@firebase/database"),lf=function(){let n=1;return function(){return n++}}(),Ea=function(n){const e=Yc(n),t=new Wc;t.update(e);const i=t.digest();return ds.encodeByteArray(i)},an=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=an.apply(null,i):typeof i=="object"?e+=V(i):e+=i,e+=" "}return e};let Ft=null,Vr=!0;const cf=function(n,e){y(!0,"Can't turn on custom loggers persistently."),ft.logLevel=$.VERBOSE,Ft=ft.log.bind(ft)},Y=function(...n){if(Vr===!0&&(Vr=!1,Ft===null&&af.get("logging_enabled")===!0&&cf()),Ft){const e=an.apply(null,n);Ft(e)}},ln=function(n){return function(...e){Y(n,...e)}},Qi=function(...n){const e="FIREBASE INTERNAL ERROR: "+an(...n);ft.error(e)},xe=function(...n){const e=`FIREBASE FATAL ERROR: ${an(...n)}`;throw ft.error(e),new Error(e)},X=function(...n){const e="FIREBASE WARNING: "+an(...n);ft.warn(e)},df=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&X("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Is=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},uf=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},_t="[MIN_NAME]",Ze="[MAX_NAME]",nt=function(n,e){if(n===e)return 0;if(n===_t||e===Ze)return-1;if(e===_t||n===Ze)return 1;{const t=Gr(n),i=Gr(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},hf=function(n,e){return n===e?0:n<e?-1:1},Pt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+V(e))},Ss=function(n){if(typeof n!="object"||n===null)return V(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=V(e[i]),t+=":",t+=Ss(n[e[i]]);return t+="}",t},Ca=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Q(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ia=function(n){y(!Is(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const d=c.join("");let u="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),u=u+f}return u.toLowerCase()},ff=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},pf=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function mf(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const gf=new RegExp("^-?(0*)\\d{1,10}$"),_f=-2147483648,vf=2147483647,Gr=function(n){if(gf.test(n)){const e=Number(n);if(e>=_f&&e<=vf)return e}return null},Tt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw X("Exception was thrown by user callback.",t),e},Math.floor(0))}},yf=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ut=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class bf{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){X(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class wf{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Y("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',X(e)}}class Sn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Sn.OWNER="owner";/**
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
 */const xs="5",Sa="v",xa="s",Ta="r",ka="f",Ra=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Aa="ls",Na="p",Ji="ac",Pa="websocket",Oa="long_polling";/**
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
 */class La{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ye.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ye.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Ef(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Da(n,e,t){y(typeof e=="string","typeof type must == string"),y(typeof t=="object","typeof params must == object");let i;if(e===Pa)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Oa)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ef(n)&&(t.ns=n.namespace);const s=[];return Q(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class Cf{constructor(){this.counters_={}}incrementCounter(e,t=1){ge(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return xc(this.counters_)}}/**
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
 */const Li={},Di={};function Ts(n){const e=n.toString();return Li[e]||(Li[e]=new Cf),Li[e]}function If(n,e){const t=n.toString();return Di[t]||(Di[t]=e()),Di[t]}/**
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
 */class Sf{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Tt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Kr="start",xf="close",Tf="pLPCommand",kf="pRTLPCB",Ma="id",$a="pw",Fa="ser",Rf="cb",Af="seg",Nf="ts",Pf="d",Of="dframe",Ua=1870,Ba=30,Lf=Ua-Ba,Df=25e3,Mf=3e4;class lt{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ln(e),this.stats_=Ts(t),this.urlFn=l=>(this.appCheckToken&&(l[Ji]=this.appCheckToken),Da(t,Oa,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Sf(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Mf)),uf(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ks((...r)=>{const[o,a,l,c,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Kr)this.id=a,this.password=l;else if(o===xf)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Kr]="t",i[Fa]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Rf]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Sa]=xs,this.transportSessionId&&(i[xa]=this.transportSessionId),this.lastSessionId&&(i[Aa]=this.lastSessionId),this.applicationId&&(i[Na]=this.applicationId),this.appCheckToken&&(i[Ji]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ra.test(location.hostname)&&(i[Ta]=ka);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){lt.forceAllow_=!0}static forceDisallow(){lt.forceDisallow_=!0}static isAvailable(){return lt.forceAllow_?!0:!lt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ff()&&!pf()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=V(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=ko(t),s=Ca(i,Lf);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Of]="t",i[Ma]=e,i[$a]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=V(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ks{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=lf(),window[Tf+this.uniqueCallbackIdentifier]=e,window[kf+this.uniqueCallbackIdentifier]=t,this.myIFrame=ks.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Y("frame writing exception"),a.stack&&Y(a.stack),Y(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Y("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ma]=this.myID,e[$a]=this.myPW,e[Fa]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ba+i.length<=Ua;){const o=this.pendingSegs.shift();i=i+"&"+Af+s+"="+o.seg+"&"+Nf+s+"="+o.ts+"&"+Pf+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Df)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Y("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const $f=16384,Ff=45e3;let Fn=null;typeof MozWebSocket<"u"?Fn=MozWebSocket:typeof WebSocket<"u"&&(Fn=WebSocket);class le{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ln(this.connId),this.stats_=Ts(t),this.connURL=le.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[Sa]=xs,typeof location<"u"&&location.hostname&&Ra.test(location.hostname)&&(o[Ta]=ka),t&&(o[xa]=t),i&&(o[Aa]=i),s&&(o[Ji]=s),r&&(o[Na]=r),Da(e,Pa,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ye.set("previous_websocket_failure",!0);try{let i;$c(),this.mySock=new Fn(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){le.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Fn!==null&&!le.forceDisallow_}static previouslyFailed(){return Ye.isInMemoryStorage||Ye.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ye.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=jt(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(y(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=V(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Ca(t,$f);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ff))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}le.responsesRequiredToBeHealthy=2;le.healthyTimeout=3e4;/**
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
 */class Vt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[lt,le]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=le&&le.isAvailable();let i=t&&!le.previouslyFailed();if(e.webSocketOnly&&(t||X("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[le];else{const s=this.transports_=[];for(const r of Vt.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Vt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vt.globalTransportInitialized_=!1;/**
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
 */const Uf=6e4,Bf=5e3,Hf=10*1024,qf=100*1024,Mi="t",Yr="d",jf="s",Qr="r",zf="e",Jr="o",Xr="a",Zr="n",eo="p",Wf="h";class Vf{constructor(e,t,i,s,r,o,a,l,c,d){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ln("c:"+this.id+":"),this.transportManager_=new Vt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ut(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>qf?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Hf?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Mi in e){const t=e[Mi];t===Xr?this.upgradeIfSecondaryHealthy_():t===Qr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Jr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Pt("t",e),i=Pt("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:eo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Zr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Pt("t",e),i=Pt("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Pt(Mi,e);if(Yr in e){const i=e[Yr];if(t===Wf){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Zr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===jf?this.onConnectionShutdown_(i):t===Qr?this.onReset_(i):t===zf?Qi("Server Error: "+i):t===Jr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Qi("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),xs!==i&&X("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Ut(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Uf))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ut(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Bf))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:eo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ye.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ha{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class qa{constructor(e){this.allowedEvents_=e,this.listeners_={},y(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){y(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Un extends qa{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!hs()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Un}getInitialEvent(e){return y(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const to=32,no=768;class F{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function D(){return new F("")}function A(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function qe(n){return n.pieces_.length-n.pieceNum_}function q(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new F(n.pieces_,e)}function Rs(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Gf(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Gt(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ja(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new F(e,0)}function j(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof F)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new F(t,0)}function P(n){return n.pieceNum_>=n.pieces_.length}function J(n,e){const t=A(n),i=A(e);if(t===null)return e;if(t===i)return J(q(n),q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Kf(n,e){const t=Gt(n,0),i=Gt(e,0);for(let s=0;s<t.length&&s<i.length;s++){const r=nt(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function As(n,e){if(qe(n)!==qe(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function re(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(qe(n)>qe(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Yf{constructor(e,t){this.errorPrefix_=t,this.parts_=Gt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ti(this.parts_[i]);za(this)}}function Qf(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ti(e),za(n)}function Jf(n){const e=n.parts_.pop();n.byteLength_-=ti(e),n.parts_.length>0&&(n.byteLength_-=1)}function za(n){if(n.byteLength_>no)throw new Error(n.errorPrefix_+"has a key path longer than "+no+" bytes ("+n.byteLength_+").");if(n.parts_.length>to)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+to+") or object contains a cycle "+Ke(n))}function Ke(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Ns extends qa{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Ns}getInitialEvent(e){return y(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ot=1e3,Xf=60*5*1e3,io=30*1e3,Zf=1.3,ep=3e4,tp="server_kill",so=3;class Ee extends Ha{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ee.nextPersistentConnectionId_++,this.log_=ln("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ot,this.maxReconnectDelay_=Xf,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ns.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Un.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(V(r)),y(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new tn,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),y(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ee.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ge(e,"w")){const i=mt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();X(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||zc(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=io)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=jc(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+V(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Qi("Unrecognized action received from server: "+V(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){y(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ot,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ot,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ep&&(this.reconnectDelay_=Ot),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Zf)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ee.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(u){y(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Y("getToken() completed but was canceled"):(Y("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=f&&f.token,a=new Vf(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,h=>{X(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(tp)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&X(u),l())}}}interrupt(e){Y("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Y("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Hi(this.interruptReasons_)&&(this.reconnectDelay_=Ot,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Ss(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new F(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Y("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=so&&(this.reconnectDelay_=io,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Y("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=so&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ba.replace(/\./g,"-")]=1,hs()?e["framework.cordova"]=1:Oo()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Un.getInstance().currentlyOnline();return Hi(this.interruptReasons_)&&e}}Ee.nextPersistentConnectionId_=0;Ee.nextConnectionId_=0;/**
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
 */class N{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new N(e,t)}}/**
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
 */class oi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new N(_t,e),s=new N(_t,t);return this.compare(i,s)!==0}minPost(){return N.MIN}}/**
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
 */let yn;class Wa extends oi{static get __EMPTY_NODE(){return yn}static set __EMPTY_NODE(e){yn=e}compare(e,t){return nt(e.name,t.name)}isDefinedOn(e){throw Ct("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return N.MIN}maxPost(){return new N(Ze,yn)}makePost(e,t){return y(typeof e=="string","KeyIndex indexValue must always be a string."),new N(e,yn)}toString(){return".key"}}const pt=new Wa;/**
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
 */class bn{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class K{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??K.RED,this.left=s??ne.EMPTY_NODE,this.right=r??ne.EMPTY_NODE}copy(e,t,i,s,r){return new K(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ne.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return ne.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,K.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,K.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}K.RED=!0;K.BLACK=!1;class np{copy(e,t,i,s,r){return this}insert(e,t,i){return new K(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ne{constructor(e,t=ne.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ne(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,K.BLACK,null,null))}remove(e){return new ne(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,K.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new bn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new bn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new bn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new bn(this.root_,null,this.comparator_,!0,e)}}ne.EMPTY_NODE=new np;/**
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
 */function ip(n,e){return nt(n.name,e.name)}function Ps(n,e){return nt(n,e)}/**
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
 */let Xi;function sp(n){Xi=n}const Va=function(n){return typeof n=="number"?"number:"+Ia(n):"string:"+n},Ga=function(n){if(n.isLeafNode()){const e=n.val();y(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ge(e,".sv"),"Priority must be a string or number.")}else y(n===Xi||n.isEmpty(),"priority of unexpected type.");y(n===Xi||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ro;class G{constructor(e,t=G.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,y(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ga(this.priorityNode_)}static set __childrenNodeConstructor(e){ro=e}static get __childrenNodeConstructor(){return ro}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new G(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:G.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return P(e)?this:A(e)===".priority"?this.priorityNode_:G.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:G.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=A(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(y(i!==".priority"||qe(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,G.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Va(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ia(this.value_):e+=this.value_,this.lazyHash_=Ea(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===G.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof G.__childrenNodeConstructor?-1:(y(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=G.VALUE_TYPE_ORDER.indexOf(t),r=G.VALUE_TYPE_ORDER.indexOf(i);return y(s>=0,"Unknown leaf type: "+t),y(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}G.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ka,Ya;function rp(n){Ka=n}function op(n){Ya=n}class ap extends oi{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?nt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return N.MIN}maxPost(){return new N(Ze,new G("[PRIORITY-POST]",Ya))}makePost(e,t){const i=Ka(e);return new N(t,new G("[PRIORITY-POST]",i))}toString(){return".priority"}}const z=new ap;/**
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
 */const lp=Math.log(2);class cp{constructor(e){const t=r=>parseInt(Math.log(r)/lp,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Bn=function(n,e,t,i){n.sort(e);const s=function(l,c){const d=c-l;let u,f;if(d===0)return null;if(d===1)return u=n[l],f=t?t(u):u,new K(f,u.node,K.BLACK,null,null);{const h=parseInt(d/2,10)+l,g=s(l,h),_=s(h+1,c);return u=n[h],f=t?t(u):u,new K(f,u.node,K.BLACK,g,_)}},r=function(l){let c=null,d=null,u=n.length;const f=function(g,_){const b=u-g,C=u;u-=g;const w=s(b+1,C),E=n[b],O=t?t(E):E;h(new K(O,E.node,_,null,w))},h=function(g){c?(c.left=g,c=g):(d=g,c=g)};for(let g=0;g<l.count;++g){const _=l.nextBitIsOne(),b=Math.pow(2,l.count-(g+1));_?f(b,K.BLACK):(f(b,K.BLACK),f(b,K.RED))}return d},o=new cp(n.length),a=r(o);return new ne(i||e,a)};/**
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
 */let $i;const rt={};class we{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return y(rt&&z,"ChildrenNode.ts has not been loaded"),$i=$i||new we({".priority":rt},{".priority":z}),$i}get(e){const t=mt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ne?t:null}hasIndex(e){return ge(this.indexSet_,e.toString())}addIndex(e,t){y(e!==pt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(N.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Bn(i,e.getCompare()):a=rt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new we(d,c)}addToIndexes(e,t){const i=An(this.indexes_,(s,r)=>{const o=mt(this.indexSet_,r);if(y(o,"Missing index implementation for "+r),s===rt)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(N.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Bn(a,o.getCompare())}else return rt;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new N(e.name,a))),l.insert(e,e.node)}});return new we(i,this.indexSet_)}removeFromIndexes(e,t){const i=An(this.indexes_,s=>{if(s===rt)return s;{const r=t.get(e.name);return r?s.remove(new N(e.name,r)):s}});return new we(i,this.indexSet_)}}/**
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
 */let Lt;class T{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Ga(this.priorityNode_),this.children_.isEmpty()&&y(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Lt||(Lt=new T(new ne(Ps),null,we.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Lt}updatePriority(e){return this.children_.isEmpty()?this:new T(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Lt:t}}getChild(e){const t=A(e);return t===null?this:this.getImmediateChild(t).getChild(q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(y(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new N(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Lt:this.priorityNode_;return new T(s,o,r)}}updateChild(e,t){const i=A(e);if(i===null)return t;{y(A(e)!==".priority"||qe(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(q(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(z,(o,a)=>{t[o]=a.val(e),i++,r&&T.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Va(this.getPriority().val())+":"),this.forEachChild(z,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Ea(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new N(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new N(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new N(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,N.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,N.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===cn?-1:0}withIndex(e){if(e===pt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new T(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===pt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(z),s=t.getIterator(z);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===pt?null:this.indexMap_.get(e.toString())}}T.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class dp extends T{constructor(){super(new ne(Ps),T.EMPTY_NODE,we.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return T.EMPTY_NODE}isEmpty(){return!1}}const cn=new dp;Object.defineProperties(N,{MIN:{value:new N(_t,T.EMPTY_NODE)},MAX:{value:new N(Ze,cn)}});Wa.__EMPTY_NODE=T.EMPTY_NODE;G.__childrenNodeConstructor=T;sp(cn);op(cn);/**
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
 */const up=!0;function W(n,e=null){if(n===null)return T.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),y(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new G(t,W(e))}if(!(n instanceof Array)&&up){const t=[];let i=!1;if(Q(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=W(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new N(o,l)))}}),t.length===0)return T.EMPTY_NODE;const r=Bn(t,ip,o=>o.name,Ps);if(i){const o=Bn(t,z.getCompare());return new T(r,W(e),new we({".priority":o},{".priority":z}))}else return new T(r,W(e),we.Default)}else{let t=T.EMPTY_NODE;return Q(n,(i,s)=>{if(ge(n,i)&&i.substring(0,1)!=="."){const r=W(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(W(e))}}rp(W);/**
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
 */class hp extends oi{constructor(e){super(),this.indexPath_=e,y(!P(e)&&A(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?nt(e.name,t.name):r}makePost(e,t){const i=W(e),s=T.EMPTY_NODE.updateChild(this.indexPath_,i);return new N(t,s)}maxPost(){const e=T.EMPTY_NODE.updateChild(this.indexPath_,cn);return new N(Ze,e)}toString(){return Gt(this.indexPath_,0).join("/")}}/**
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
 */class fp extends oi{compare(e,t){const i=e.node.compareTo(t.node);return i===0?nt(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return N.MIN}maxPost(){return N.MAX}makePost(e,t){const i=W(e);return new N(t,i)}toString(){return".value"}}const pp=new fp;/**
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
 */function Qa(n){return{type:"value",snapshotNode:n}}function vt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Kt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Yt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function mp(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Os{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){y(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Kt(t,a)):y(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(vt(t,i)):o.trackChildChange(Yt(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(z,(s,r)=>{t.hasChild(s)||i.trackChildChange(Kt(s,r))}),t.isLeafNode()||t.forEachChild(z,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Yt(s,r,o))}else i.trackChildChange(vt(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?T.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Qt{constructor(e){this.indexedFilter_=new Os(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Qt.getStartPost_(e),this.endPost_=Qt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new N(t,i))||(i=T.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=T.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(T.EMPTY_NODE);const r=this;return t.forEachChild(z,(o,a)=>{r.matches(new N(o,a))||(s=s.updateImmediateChild(o,T.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class gp{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Qt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new N(t,i))||(i=T.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=T.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=T.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(T.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,T.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(f,h)=>u(h,f)}else o=this.index_.getCompare();const a=e;y(a.numChildren()===this.limit_,"");const l=new N(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(t)){const u=a.getImmediateChild(t);let f=s.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===t||a.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const h=f==null?1:o(f,l);if(d&&!i.isEmpty()&&h>=0)return r!=null&&r.trackChildChange(Yt(t,i,u)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(Kt(t,u));const _=a.updateImmediateChild(t,T.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(vt(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return i.isEmpty()?e:d&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Kt(c.name,c.node)),r.trackChildChange(vt(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,T.EMPTY_NODE)):e}}/**
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
 */class Ls{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=z}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return y(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return y(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_t}hasEnd(){return this.endSet_}getIndexEndValue(){return y(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return y(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ze}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return y(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===z}copy(){const e=new Ls;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function _p(n){return n.loadsAllData()?new Os(n.getIndex()):n.hasLimit()?new gp(n):new Qt(n)}function oo(n){const e={};if(n.isDefault())return e;let t;if(n.index_===z?t="$priority":n.index_===pp?t="$value":n.index_===pt?t="$key":(y(n.index_ instanceof hp,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=V(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=V(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+V(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=V(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+V(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function ao(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==z&&(e.i=n.index_.toString()),e}/**
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
 */class Hn extends Ha{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=ln("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(y(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Hn.getListenId_(e,i),a={};this.listens_[o]=a;const l=oo(e._queryParams);this.restRequest_(r+".json",l,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,i),mt(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,t){const i=Hn.getListenId_(e,t);delete this.listens_[i]}get(e){const t=oo(e._queryParams),i=e._path.toString(),s=new tn;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+It(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=jt(a.responseText)}catch{X("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&X("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class vp{constructor(){this.rootNode_=T.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function qn(){return{value:null,children:new Map}}function Ja(n,e,t){if(P(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=A(e);n.children.has(i)||n.children.set(i,qn());const s=n.children.get(i);e=q(e),Ja(s,e,t)}}function Zi(n,e,t){n.value!==null?t(e,n.value):yp(n,(i,s)=>{const r=new F(e.toString()+"/"+i);Zi(s,r,t)})}function yp(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class bp{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Q(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const lo=10*1e3,wp=30*1e3,Ep=5*60*1e3;class Cp{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new bp(e);const i=lo+(wp-lo)*Math.random();Ut(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Q(e,(s,r)=>{r>0&&ge(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Ut(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ep))}}/**
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
 */var ce;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ce||(ce={}));function Ds(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ms(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $s(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class jn{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=ce.ACK_USER_WRITE,this.source=Ds()}operationForChild(e){if(P(this.path)){if(this.affectedTree.value!=null)return y(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new F(e));return new jn(D(),t,this.revert)}}else return y(A(this.path)===e,"operationForChild called for unrelated child."),new jn(q(this.path),this.affectedTree,this.revert)}}/**
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
 */class Jt{constructor(e,t){this.source=e,this.path=t,this.type=ce.LISTEN_COMPLETE}operationForChild(e){return P(this.path)?new Jt(this.source,D()):new Jt(this.source,q(this.path))}}/**
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
 */class et{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=ce.OVERWRITE}operationForChild(e){return P(this.path)?new et(this.source,D(),this.snap.getImmediateChild(e)):new et(this.source,q(this.path),this.snap)}}/**
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
 */class yt{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=ce.MERGE}operationForChild(e){if(P(this.path)){const t=this.children.subtree(new F(e));return t.isEmpty()?null:t.value?new et(this.source,D(),t.value):new yt(this.source,D(),t)}else return y(A(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new yt(this.source,q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class je{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(P(e))return this.isFullyInitialized()&&!this.filtered_;const t=A(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Ip{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Sp(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(mp(o.childName,o.snapshotNode))}),Dt(n,s,"child_removed",e,i,t),Dt(n,s,"child_added",e,i,t),Dt(n,s,"child_moved",r,i,t),Dt(n,s,"child_changed",e,i,t),Dt(n,s,"value",e,i,t),s}function Dt(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>Tp(n,a,l)),o.forEach(a=>{const l=xp(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function xp(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Tp(n,e,t){if(e.childName==null||t.childName==null)throw Ct("Should only compare child_ events.");const i=new N(e.childName,e.snapshotNode),s=new N(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function ai(n,e){return{eventCache:n,serverCache:e}}function Bt(n,e,t,i){return ai(new je(e,t,i),n.serverCache)}function Xa(n,e,t,i){return ai(n.eventCache,new je(e,t,i))}function zn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function tt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Fi;const kp=()=>(Fi||(Fi=new ne(hf)),Fi);class H{constructor(e,t=kp()){this.value=e,this.children=t}static fromObject(e){let t=new H(null);return Q(e,(i,s)=>{t=t.set(new F(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:D(),value:this.value};if(P(e))return null;{const i=A(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(q(e),t);return r!=null?{path:j(new F(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(P(e))return this;{const t=A(e),i=this.children.get(t);return i!==null?i.subtree(q(e)):new H(null)}}set(e,t){if(P(e))return new H(t,this.children);{const i=A(e),r=(this.children.get(i)||new H(null)).set(q(e),t),o=this.children.insert(i,r);return new H(this.value,o)}}remove(e){if(P(e))return this.children.isEmpty()?new H(null):new H(null,this.children);{const t=A(e),i=this.children.get(t);if(i){const s=i.remove(q(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new H(null):new H(this.value,r)}else return this}}get(e){if(P(e))return this.value;{const t=A(e),i=this.children.get(t);return i?i.get(q(e)):null}}setTree(e,t){if(P(e))return t;{const i=A(e),r=(this.children.get(i)||new H(null)).setTree(q(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new H(this.value,o)}}fold(e){return this.fold_(D(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(j(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,D(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(P(e))return null;{const r=A(e),o=this.children.get(r);return o?o.findOnPath_(q(e),j(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,D(),t)}foreachOnPath_(e,t,i){if(P(e))return this;{this.value&&i(t,this.value);const s=A(e),r=this.children.get(s);return r?r.foreachOnPath_(q(e),j(t,s),i):new H(null)}}foreach(e){this.foreach_(D(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(j(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class de{constructor(e){this.writeTree_=e}static empty(){return new de(new H(null))}}function Ht(n,e,t){if(P(e))return new de(new H(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=J(s,e);return r=r.updateChild(o,t),new de(n.writeTree_.set(s,r))}else{const s=new H(t),r=n.writeTree_.setTree(e,s);return new de(r)}}}function es(n,e,t){let i=n;return Q(t,(s,r)=>{i=Ht(i,j(e,s),r)}),i}function co(n,e){if(P(e))return de.empty();{const t=n.writeTree_.setTree(e,new H(null));return new de(t)}}function ts(n,e){return it(n,e)!=null}function it(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(J(t.path,e)):null}function uo(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(z,(i,s)=>{e.push(new N(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new N(i,s.value))}),e}function Ue(n,e){if(P(e))return n;{const t=it(n,e);return t!=null?new de(new H(t)):new de(n.writeTree_.subtree(e))}}function ns(n){return n.writeTree_.isEmpty()}function bt(n,e){return Za(D(),n.writeTree_,e)}function Za(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(y(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Za(j(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(j(n,".priority"),i)),t}}/**
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
 */function li(n,e){return il(e,n)}function Rp(n,e,t,i,s){y(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Ht(n.visibleWrites,e,t)),n.lastWriteId=i}function Ap(n,e,t,i){y(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=es(n.visibleWrites,e,t),n.lastWriteId=i}function Np(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Pp(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);y(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Op(a,i.path)?s=!1:re(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Lp(n),!0;if(i.snap)n.visibleWrites=co(n.visibleWrites,i.path);else{const a=i.children;Q(a,l=>{n.visibleWrites=co(n.visibleWrites,j(i.path,l))})}return!0}else return!1}function Op(n,e){if(n.snap)return re(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&re(j(n.path,t),e))return!0;return!1}function Lp(n){n.visibleWrites=el(n.allWrites,Dp,D()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Dp(n){return n.visible}function el(n,e,t){let i=de.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)re(t,o)?(a=J(t,o),i=Ht(i,a,r.snap)):re(o,t)&&(a=J(o,t),i=Ht(i,D(),r.snap.getChild(a)));else if(r.children){if(re(t,o))a=J(t,o),i=es(i,a,r.children);else if(re(o,t))if(a=J(o,t),P(a))i=es(i,D(),r.children);else{const l=mt(r.children,A(a));if(l){const c=l.getChild(q(a));i=Ht(i,D(),c)}}}else throw Ct("WriteRecord should have .snap or .children")}}return i}function tl(n,e,t,i,s){if(!i&&!s){const r=it(n.visibleWrites,e);if(r!=null)return r;{const o=Ue(n.visibleWrites,e);if(ns(o))return t;if(t==null&&!ts(o,D()))return null;{const a=t||T.EMPTY_NODE;return bt(o,a)}}}else{const r=Ue(n.visibleWrites,e);if(!s&&ns(r))return t;if(!s&&t==null&&!ts(r,D()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(re(c.path,e)||re(e,c.path))},a=el(n.allWrites,o,e),l=t||T.EMPTY_NODE;return bt(a,l)}}}function Mp(n,e,t){let i=T.EMPTY_NODE;const s=it(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(z,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Ue(n.visibleWrites,e);return t.forEachChild(z,(o,a)=>{const l=bt(Ue(r,new F(o)),a);i=i.updateImmediateChild(o,l)}),uo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Ue(n.visibleWrites,e);return uo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function $p(n,e,t,i,s){y(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=j(e,t);if(ts(n.visibleWrites,r))return null;{const o=Ue(n.visibleWrites,r);return ns(o)?s.getChild(t):bt(o,s.getChild(t))}}function Fp(n,e,t,i){const s=j(e,t),r=it(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Ue(n.visibleWrites,s);return bt(o,i.getNode().getImmediateChild(t))}else return null}function Up(n,e){return it(n.visibleWrites,e)}function Bp(n,e,t,i,s,r,o){let a;const l=Ue(n.visibleWrites,e),c=it(l,D());if(c!=null)a=c;else if(t!=null)a=bt(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),f=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let h=f.getNext();for(;h&&d.length<s;)u(h,i)!==0&&d.push(h),h=f.getNext();return d}else return[]}function Hp(){return{visibleWrites:de.empty(),allWrites:[],lastWriteId:-1}}function Wn(n,e,t,i){return tl(n.writeTree,n.treePath,e,t,i)}function Fs(n,e){return Mp(n.writeTree,n.treePath,e)}function ho(n,e,t,i){return $p(n.writeTree,n.treePath,e,t,i)}function Vn(n,e){return Up(n.writeTree,j(n.treePath,e))}function qp(n,e,t,i,s,r){return Bp(n.writeTree,n.treePath,e,t,i,s,r)}function Us(n,e,t){return Fp(n.writeTree,n.treePath,e,t)}function nl(n,e){return il(j(n.treePath,e),n.writeTree)}function il(n,e){return{treePath:n,writeTree:e}}/**
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
 */class jp{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;y(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),y(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Yt(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Kt(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,vt(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Yt(i,e.snapshotNode,s.oldSnap));else throw Ct("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class zp{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const sl=new zp;class Bs{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new je(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Us(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:tt(this.viewCache_),r=qp(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function Wp(n){return{filter:n}}function Vp(n,e){y(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),y(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Gp(n,e,t,i,s){const r=new jp;let o,a;if(t.type===ce.OVERWRITE){const c=t;c.source.fromUser?o=is(n,e,c.path,c.snap,i,s,r):(y(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!P(c.path),o=Gn(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===ce.MERGE){const c=t;c.source.fromUser?o=Yp(n,e,c.path,c.children,i,s,r):(y(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ss(n,e,c.path,c.children,i,s,a,r))}else if(t.type===ce.ACK_USER_WRITE){const c=t;c.revert?o=Xp(n,e,c.path,i,s,r):o=Qp(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===ce.LISTEN_COMPLETE)o=Jp(n,e,t.path,i,r);else throw Ct("Unknown operation type: "+t.type);const l=r.getChanges();return Kp(e,o,l),{viewCache:o,changes:l}}function Kp(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=zn(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Qa(zn(e)))}}function rl(n,e,t,i,s,r){const o=e.eventCache;if(Vn(i,t)!=null)return e;{let a,l;if(P(t))if(y(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=tt(e),d=c instanceof T?c:T.EMPTY_NODE,u=Fs(i,d);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=Wn(i,tt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=A(t);if(c===".priority"){y(qe(t)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const u=ho(i,t,d,l);u!=null?a=n.filter.updatePriority(d,u):a=o.getNode()}else{const d=q(t);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=ho(i,t,o.getNode(),l);f!=null?u=o.getNode().getImmediateChild(c).updateChild(d,f):u=o.getNode().getImmediateChild(c)}else u=Us(i,c,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),c,u,d,s,r):a=o.getNode()}}return Bt(e,a,o.isFullyInitialized()||P(t),n.filter.filtersNodes())}}function Gn(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const d=o?n.filter:n.filter.getIndexedFilter();if(P(t))c=d.updateFullNode(l.getNode(),i,null);else if(d.filtersNodes()&&!l.isFiltered()){const h=l.getNode().updateChild(t,i);c=d.updateFullNode(l.getNode(),h,null)}else{const h=A(t);if(!l.isCompleteForPath(t)&&qe(t)>1)return e;const g=q(t),b=l.getNode().getImmediateChild(h).updateChild(g,i);h===".priority"?c=d.updatePriority(l.getNode(),b):c=d.updateChild(l.getNode(),h,b,g,sl,null)}const u=Xa(e,c,l.isFullyInitialized()||P(t),d.filtersNodes()),f=new Bs(s,u,r);return rl(n,u,t,s,f,a)}function is(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const d=new Bs(s,e,r);if(P(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Bt(e,c,!0,n.filter.filtersNodes());else{const u=A(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=Bt(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=q(t),h=a.getNode().getImmediateChild(u);let g;if(P(f))g=i;else{const _=d.getCompleteChild(u);_!=null?Rs(f)===".priority"&&_.getChild(ja(f)).isEmpty()?g=_:g=_.updateChild(f,i):g=T.EMPTY_NODE}if(h.equals(g))l=e;else{const _=n.filter.updateChild(a.getNode(),u,g,f,d,o);l=Bt(e,_,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function fo(n,e){return n.eventCache.isCompleteForChild(e)}function Yp(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const d=j(t,l);fo(e,A(d))&&(a=is(n,a,d,c,s,r,o))}),i.foreach((l,c)=>{const d=j(t,l);fo(e,A(d))||(a=is(n,a,d,c,s,r,o))}),a}function po(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function ss(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;P(t)?c=i:c=new H(null).setTree(t,i);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,f)=>{if(d.hasChild(u)){const h=e.serverCache.getNode().getImmediateChild(u),g=po(n,h,f);l=Gn(n,l,new F(u),g,s,r,o,a)}}),c.children.inorderTraversal((u,f)=>{const h=!e.serverCache.isCompleteForChild(u)&&f.value===null;if(!d.hasChild(u)&&!h){const g=e.serverCache.getNode().getImmediateChild(u),_=po(n,g,f);l=Gn(n,l,new F(u),_,s,r,o,a)}}),l}function Qp(n,e,t,i,s,r,o){if(Vn(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(P(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Gn(n,e,t,l.getNode().getChild(t),s,r,a,o);if(P(t)){let c=new H(null);return l.getNode().forEachChild(pt,(d,u)=>{c=c.set(new F(d),u)}),ss(n,e,t,c,s,r,a,o)}else return e}else{let c=new H(null);return i.foreach((d,u)=>{const f=j(t,d);l.isCompleteForPath(f)&&(c=c.set(d,l.getNode().getChild(f)))}),ss(n,e,t,c,s,r,a,o)}}function Jp(n,e,t,i,s){const r=e.serverCache,o=Xa(e,r.getNode(),r.isFullyInitialized()||P(t),r.isFiltered());return rl(n,o,t,i,sl,s)}function Xp(n,e,t,i,s,r){let o;if(Vn(i,t)!=null)return e;{const a=new Bs(i,e,s),l=e.eventCache.getNode();let c;if(P(t)||A(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Wn(i,tt(e));else{const u=e.serverCache.getNode();y(u instanceof T,"serverChildren would be complete if leaf node"),d=Fs(i,u)}d=d,c=n.filter.updateFullNode(l,d,r)}else{const d=A(t);let u=Us(i,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=l.getImmediateChild(d)),u!=null?c=n.filter.updateChild(l,d,u,q(t),a,r):e.eventCache.getNode().hasChild(d)?c=n.filter.updateChild(l,d,T.EMPTY_NODE,q(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Wn(i,tt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Vn(i,D())!=null,Bt(e,c,o,n.filter.filtersNodes())}}/**
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
 */class Zp{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Os(i.getIndex()),r=_p(i);this.processor_=Wp(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(T.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(T.EMPTY_NODE,a.getNode(),null),d=new je(l,o.isFullyInitialized(),s.filtersNodes()),u=new je(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ai(u,d),this.eventGenerator_=new Ip(this.query_)}get query(){return this.query_}}function em(n){return n.viewCache_.serverCache.getNode()}function tm(n){return zn(n.viewCache_)}function nm(n,e){const t=tt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!P(e)&&!t.getImmediateChild(A(e)).isEmpty())?t.getChild(e):null}function mo(n){return n.eventRegistrations_.length===0}function im(n,e){n.eventRegistrations_.push(e)}function go(n,e,t){const i=[];if(t){y(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function _o(n,e,t,i){e.type===ce.MERGE&&e.source.queryId!==null&&(y(tt(n.viewCache_),"We should always have a full cache before handling merges"),y(zn(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=Gp(n.processor_,s,e,t,i);return Vp(n.processor_,r.viewCache),y(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,ol(n,r.changes,r.viewCache.eventCache.getNode(),null)}function sm(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(z,(r,o)=>{i.push(vt(r,o))}),t.isFullyInitialized()&&i.push(Qa(t.getNode())),ol(n,i,t.getNode(),e)}function ol(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return Sp(n.eventGenerator_,e,t,s)}/**
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
 */let Kn;class al{constructor(){this.views=new Map}}function rm(n){y(!Kn,"__referenceConstructor has already been defined"),Kn=n}function om(){return y(Kn,"Reference.ts has not been loaded"),Kn}function am(n){return n.views.size===0}function Hs(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return y(r!=null,"SyncTree gave us an op for an invalid query."),_o(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(_o(o,e,t,i));return r}}function ll(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Wn(t,s?i:null),l=!1;a?l=!0:i instanceof T?(a=Fs(t,i),l=!1):(a=T.EMPTY_NODE,l=!1);const c=ai(new je(a,l,!1),new je(i,s,!1));return new Zp(e,c)}return o}function lm(n,e,t,i,s,r){const o=ll(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),im(o,t),sm(o,t)}function cm(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=ze(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(go(c,t,i)),mo(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(go(l,t,i)),mo(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!ze(n)&&r.push(new(om())(e._repo,e._path)),{removed:r,events:o}}function cl(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Be(n,e){let t=null;for(const i of n.views.values())t=t||nm(i,e);return t}function dl(n,e){if(e._queryParams.loadsAllData())return ci(n);{const i=e._queryIdentifier;return n.views.get(i)}}function ul(n,e){return dl(n,e)!=null}function ze(n){return ci(n)!=null}function ci(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Yn;function dm(n){y(!Yn,"__referenceConstructor has already been defined"),Yn=n}function um(){return y(Yn,"Reference.ts has not been loaded"),Yn}let hm=1;class vo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new H(null),this.pendingWriteTree_=Hp(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function hl(n,e,t,i,s){return Rp(n.pendingWriteTree_,e,t,i,s),s?kt(n,new et(Ds(),e,t)):[]}function fm(n,e,t,i){Ap(n.pendingWriteTree_,e,t,i);const s=H.fromObject(t);return kt(n,new yt(Ds(),e,s))}function Le(n,e,t=!1){const i=Np(n.pendingWriteTree_,e);if(Pp(n.pendingWriteTree_,e)){let r=new H(null);return i.snap!=null?r=r.set(D(),!0):Q(i.children,o=>{r=r.set(new F(o),!0)}),kt(n,new jn(i.path,r,t))}else return[]}function dn(n,e,t){return kt(n,new et(Ms(),e,t))}function pm(n,e,t){const i=H.fromObject(t);return kt(n,new yt(Ms(),e,i))}function mm(n,e){return kt(n,new Jt(Ms(),e))}function gm(n,e,t){const i=js(n,t);if(i){const s=zs(i),r=s.path,o=s.queryId,a=J(r,e),l=new Jt($s(o),a);return Ws(n,r,l)}else return[]}function Qn(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||ul(o,e))){const l=cm(o,e,t,i);am(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const d=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(f,h)=>ze(h));if(d&&!u){const f=n.syncPointTree_.subtree(r);if(!f.isEmpty()){const h=ym(f);for(let g=0;g<h.length;++g){const _=h[g],b=_.query,C=gl(n,_);n.listenProvider_.startListening(qt(b),Xt(n,b),C.hashFn,C.onComplete)}}}!u&&c.length>0&&!i&&(d?n.listenProvider_.stopListening(qt(e),null):c.forEach(f=>{const h=n.queryToTagMap.get(di(f));n.listenProvider_.stopListening(qt(f),h)}))}bm(n,c)}return a}function fl(n,e,t,i){const s=js(n,i);if(s!=null){const r=zs(s),o=r.path,a=r.queryId,l=J(o,e),c=new et($s(a),l,t);return Ws(n,o,c)}else return[]}function _m(n,e,t,i){const s=js(n,i);if(s){const r=zs(s),o=r.path,a=r.queryId,l=J(o,e),c=H.fromObject(t),d=new yt($s(a),l,c);return Ws(n,o,d)}else return[]}function rs(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(f,h)=>{const g=J(f,s);r=r||Be(h,g),o=o||ze(h)});let a=n.syncPointTree_.get(s);a?(o=o||ze(a),r=r||Be(a,D())):(a=new al,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=T.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((h,g)=>{const _=Be(g,D());_&&(r=r.updateImmediateChild(h,_))}));const c=ul(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=di(e);y(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const h=wm();n.queryToTagMap.set(f,h),n.tagToQueryMap.set(h,f)}const d=li(n.pendingWriteTree_,s);let u=lm(a,e,t,d,r,l);if(!c&&!o&&!i){const f=dl(a,e);u=u.concat(Em(n,e,f))}return u}function qs(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=J(o,e),c=Be(a,l);if(c)return c});return tl(s,e,r,t,!0)}function vm(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(c,d)=>{const u=J(c,t);i=i||Be(d,u)});let s=n.syncPointTree_.get(t);s?i=i||Be(s,D()):(s=new al,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new je(i,!0,!1):null,a=li(n.pendingWriteTree_,e._path),l=ll(s,e,a,r?o.getNode():T.EMPTY_NODE,r);return tm(l)}function kt(n,e){return pl(e,n.syncPointTree_,null,li(n.pendingWriteTree_,D()))}function pl(n,e,t,i){if(P(n.path))return ml(n,e,t,i);{const s=e.get(D());t==null&&s!=null&&(t=Be(s,D()));let r=[];const o=A(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,d=nl(i,o);r=r.concat(pl(a,l,c,d))}return s&&(r=r.concat(Hs(s,n,i,t))),r}}function ml(n,e,t,i){const s=e.get(D());t==null&&s!=null&&(t=Be(s,D()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=nl(i,o),d=n.operationForChild(o);d&&(r=r.concat(ml(d,a,l,c)))}),s&&(r=r.concat(Hs(s,n,i,t))),r}function gl(n,e){const t=e.query,i=Xt(n,t);return{hashFn:()=>(em(e)||T.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?gm(n,t._path,i):mm(n,t._path);{const r=mf(s,t);return Qn(n,t,null,r)}}}}function Xt(n,e){const t=di(e);return n.queryToTagMap.get(t)}function di(n){return n._path.toString()+"$"+n._queryIdentifier}function js(n,e){return n.tagToQueryMap.get(e)}function zs(n){const e=n.indexOf("$");return y(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new F(n.substr(0,e))}}function Ws(n,e,t){const i=n.syncPointTree_.get(e);y(i,"Missing sync point for query tag that we're tracking");const s=li(n.pendingWriteTree_,e);return Hs(i,t,s,null)}function ym(n){return n.fold((e,t,i)=>{if(t&&ze(t))return[ci(t)];{let s=[];return t&&(s=cl(t)),Q(i,(r,o)=>{s=s.concat(o)}),s}})}function qt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(um())(n._repo,n._path):n}function bm(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=di(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function wm(){return hm++}function Em(n,e,t){const i=e._path,s=Xt(n,e),r=gl(n,t),o=n.listenProvider_.startListening(qt(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)y(!ze(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,u)=>{if(!P(c)&&d&&ze(d))return[ci(d).query];{let f=[];return d&&(f=f.concat(cl(d).map(h=>h.query))),Q(u,(h,g)=>{f=f.concat(g)}),f}});for(let c=0;c<l.length;++c){const d=l[c];n.listenProvider_.stopListening(qt(d),Xt(n,d))}}return o}/**
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
 */class Vs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Vs(t)}node(){return this.node_}}class Gs{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=j(this.path_,e);return new Gs(this.syncTree_,t)}node(){return qs(this.syncTree_,this.path_)}}const Cm=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},yo=function(n,e,t){if(!n||typeof n!="object")return n;if(y(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Im(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Sm(n[".sv"],e);y(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Im=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:y(!1,"Unexpected server value: "+n)}},Sm=function(n,e,t){n.hasOwnProperty("increment")||y(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&y(!1,"Unexpected increment value: "+i);const s=e.node();if(y(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},_l=function(n,e,t,i){return Ks(e,new Gs(t,n),i)},vl=function(n,e,t){return Ks(n,new Vs(e),t)};function Ks(n,e,t){const i=n.getPriority().val(),s=yo(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=yo(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new G(a,W(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new G(s))),o.forEachChild(z,(a,l)=>{const c=Ks(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Ys{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Qs(n,e){let t=e instanceof F?e:new F(e),i=n,s=A(t);for(;s!==null;){const r=mt(i.node.children,s)||{children:{},childCount:0};i=new Ys(s,i,r),t=q(t),s=A(t)}return i}function Rt(n){return n.node.value}function yl(n,e){n.node.value=e,os(n)}function bl(n){return n.node.childCount>0}function xm(n){return Rt(n)===void 0&&!bl(n)}function ui(n,e){Q(n.node.children,(t,i)=>{e(new Ys(t,n,i))})}function wl(n,e,t,i){t&&e(n),ui(n,s=>{wl(s,e,!0)})}function Tm(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function un(n){return new F(n.parent===null?n.name:un(n.parent)+"/"+n.name)}function os(n){n.parent!==null&&km(n.parent,n.name,n)}function km(n,e,t){const i=xm(t),s=ge(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,os(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,os(n))}/**
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
 */const Rm=/[\[\].#$\/\u0000-\u001F\u007F]/,Am=/[\[\].#$\u0000-\u001F\u007F]/,Ui=10*1024*1024,Js=function(n){return typeof n=="string"&&n.length!==0&&!Rm.test(n)},El=function(n){return typeof n=="string"&&n.length!==0&&!Am.test(n)},Nm=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),El(n)},Pm=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Is(n)||n&&typeof n=="object"&&ge(n,".sv")},Cl=function(n,e,t,i){i&&e===void 0||hi(ei(n,"value"),e,t)},hi=function(n,e,t){const i=t instanceof F?new Yf(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ke(i));if(typeof e=="function")throw new Error(n+"contains a function "+Ke(i)+" with contents = "+e.toString());if(Is(e))throw new Error(n+"contains "+e.toString()+" "+Ke(i));if(typeof e=="string"&&e.length>Ui/3&&ti(e)>Ui)throw new Error(n+"contains a string greater than "+Ui+" utf8 bytes "+Ke(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Q(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Js(o)))throw new Error(n+" contains an invalid key ("+o+") "+Ke(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Qf(i,o),hi(n,a,i),Jf(i)}),s&&r)throw new Error(n+' contains ".value" child '+Ke(i)+" in addition to actual children.")}},Om=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const r=Gt(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Js(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Kf);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&re(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},Lm=function(n,e,t,i){const s=ei(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];Q(e,(o,a)=>{const l=new F(o);if(hi(s,a,j(t,l)),Rs(l)===".priority"&&!Pm(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),Om(s,r)},Il=function(n,e,t,i){if(!El(t))throw new Error(ei(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Dm=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Il(n,e,t)},Sl=function(n,e){if(A(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Mm=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Js(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Nm(t))throw new Error(ei(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class $m{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function fi(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!As(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function xl(n,e,t){fi(n,t),Tl(n,i=>As(i,e))}function ae(n,e,t){fi(n,t),Tl(n,i=>re(i,e)||re(e,i))}function Tl(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(Fm(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Fm(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Ft&&Y("event: "+t.toString()),Tt(i)}}}/**
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
 */const Um="repo_interrupt",Bm=25;class Hm{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $m,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=qn(),this.transactionQueueTree_=new Ys,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function qm(n,e,t){if(n.stats_=Ts(n.repoInfo_),n.forceRestClient_||yf())n.server_=new Hn(n.repoInfo_,(i,s,r,o)=>{bo(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>wo(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{V(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Ee(n.repoInfo_,e,(i,s,r,o)=>{bo(n,i,s,r,o)},i=>{wo(n,i)},i=>{jm(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=If(n.repoInfo_,()=>new Cp(n.stats_,n.server_)),n.infoData_=new vp,n.infoSyncTree_=new vo({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=dn(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Xs(n,"connected",!1),n.serverSyncTree_=new vo({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);ae(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function kl(n){const t=n.infoData_.getNode(new F(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function pi(n){return Cm({timestamp:kl(n)})}function bo(n,e,t,i,s){n.dataUpdateCount++;const r=new F(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=An(t,c=>W(c));o=_m(n.serverSyncTree_,r,l,s)}else{const l=W(t);o=fl(n.serverSyncTree_,r,l,s)}else if(i){const l=An(t,c=>W(c));o=pm(n.serverSyncTree_,r,l)}else{const l=W(t);o=dn(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=wt(n,r)),ae(n.eventQueue_,a,o)}function wo(n,e){Xs(n,"connected",e),e===!1&&Gm(n)}function jm(n,e){Q(e,(t,i)=>{Xs(n,t,i)})}function Xs(n,e,t){const i=new F("/.info/"+e),s=W(t);n.infoData_.updateSnapshot(i,s);const r=dn(n.infoSyncTree_,i,s);ae(n.eventQueue_,i,r)}function Zs(n){return n.nextWriteId_++}function zm(n,e,t){const i=vm(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=W(s).withIndex(e._queryParams.getIndex());rs(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=dn(n.serverSyncTree_,e._path,r);else{const a=Xt(n.serverSyncTree_,e);o=fl(n.serverSyncTree_,e._path,r,a)}return ae(n.eventQueue_,e._path,o),Qn(n.serverSyncTree_,e,t,null,!0),r},s=>(hn(n,"get for query "+V(e)+" failed: "+s),Promise.reject(new Error(s))))}function Wm(n,e,t,i,s){hn(n,"set",{path:e.toString(),value:t,priority:i});const r=pi(n),o=W(t,i),a=qs(n.serverSyncTree_,e),l=vl(o,a,r),c=Zs(n),d=hl(n.serverSyncTree_,e,l,c,!0);fi(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(f,h)=>{const g=f==="ok";g||X("set at "+e+" failed: "+f);const _=Le(n.serverSyncTree_,c,!g);ae(n.eventQueue_,e,_),as(n,s,f,h)});const u=tr(n,e);wt(n,u),ae(n.eventQueue_,u,[])}function Vm(n,e,t,i){hn(n,"update",{path:e.toString(),value:t});let s=!0;const r=pi(n),o={};if(Q(t,(a,l)=>{s=!1,o[a]=_l(j(e,a),W(l),n.serverSyncTree_,r)}),s)Y("update() called with empty data.  Don't do anything."),as(n,i,"ok",void 0);else{const a=Zs(n),l=fm(n.serverSyncTree_,e,o,a);fi(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,d)=>{const u=c==="ok";u||X("update at "+e+" failed: "+c);const f=Le(n.serverSyncTree_,a,!u),h=f.length>0?wt(n,e):e;ae(n.eventQueue_,h,f),as(n,i,c,d)}),Q(t,c=>{const d=tr(n,j(e,c));wt(n,d)}),ae(n.eventQueue_,e,[])}}function Gm(n){hn(n,"onDisconnectEvents");const e=pi(n),t=qn();Zi(n.onDisconnect_,D(),(s,r)=>{const o=_l(s,r,n.serverSyncTree_,e);Ja(t,s,o)});let i=[];Zi(t,D(),(s,r)=>{i=i.concat(dn(n.serverSyncTree_,s,r));const o=tr(n,s);wt(n,o)}),n.onDisconnect_=qn(),ae(n.eventQueue_,D(),i)}function Km(n,e,t){let i;A(e._path)===".info"?i=rs(n.infoSyncTree_,e,t):i=rs(n.serverSyncTree_,e,t),xl(n.eventQueue_,e._path,i)}function Rl(n,e,t){let i;A(e._path)===".info"?i=Qn(n.infoSyncTree_,e,t):i=Qn(n.serverSyncTree_,e,t),xl(n.eventQueue_,e._path,i)}function Ym(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Um)}function hn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Y(t,...e)}function as(n,e,t,i){e&&Tt(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Al(n,e,t){return qs(n.serverSyncTree_,e,t)||T.EMPTY_NODE}function er(n,e=n.transactionQueueTree_){if(e||mi(n,e),Rt(e)){const t=Pl(n,e);y(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Qm(n,un(e),t)}else bl(e)&&ui(e,t=>{er(n,t)})}function Qm(n,e,t){const i=t.map(c=>c.currentWriteId),s=Al(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const d=t[c];y(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=J(e,d.path);r=r.updateChild(u,d.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{hn(n,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let f=0;f<t.length;f++)t[f].status=2,d=d.concat(Le(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&u.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();mi(n,Qs(n.transactionQueueTree_,e)),er(n,n.transactionQueueTree_),ae(n.eventQueue_,e,d);for(let f=0;f<u.length;f++)Tt(u[f])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{X("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}wt(n,e)}},o)}function wt(n,e){const t=Nl(n,e),i=un(t),s=Pl(n,t);return Jm(n,s,i),i}function Jm(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=J(t,l.path);let d=!1,u;if(y(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,u=l.abortReason,s=s.concat(Le(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Bm)d=!0,u="maxretry",s=s.concat(Le(n.serverSyncTree_,l.currentWriteId,!0));else{const f=Al(n,l.path,o);l.currentInputSnapshot=f;const h=e[a].update(f.val());if(h!==void 0){hi("transaction failed: Data returned ",h,l.path);let g=W(h);typeof h=="object"&&h!=null&&ge(h,".priority")||(g=g.updatePriority(f.getPriority()));const b=l.currentWriteId,C=pi(n),w=vl(g,f,C);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=w,l.currentWriteId=Zs(n),o.splice(o.indexOf(b),1),s=s.concat(hl(n.serverSyncTree_,l.path,w,l.currentWriteId,l.applyLocally)),s=s.concat(Le(n.serverSyncTree_,b,!0))}else d=!0,u="nodata",s=s.concat(Le(n.serverSyncTree_,l.currentWriteId,!0))}ae(n.eventQueue_,t,s),s=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}mi(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Tt(i[a]);er(n,n.transactionQueueTree_)}function Nl(n,e){let t,i=n.transactionQueueTree_;for(t=A(e);t!==null&&Rt(i)===void 0;)i=Qs(i,t),e=q(e),t=A(e);return i}function Pl(n,e){const t=[];return Ol(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Ol(n,e,t){const i=Rt(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);ui(e,s=>{Ol(n,s,t)})}function mi(n,e){const t=Rt(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,yl(e,t.length>0?t:void 0)}ui(e,i=>{mi(n,i)})}function tr(n,e){const t=un(Nl(n,e)),i=Qs(n.transactionQueueTree_,e);return Tm(i,s=>{Bi(n,s)}),Bi(n,i),wl(i,s=>{Bi(n,s)}),t}function Bi(n,e){const t=Rt(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(y(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(y(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Le(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?yl(e,void 0):t.length=r+1,ae(n.eventQueue_,un(e),s);for(let o=0;o<i.length;o++)Tt(i[o])}}/**
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
 */function Xm(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Zm(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):X(`Invalid query segment '${t}' in query '${n}'`)}return e}const Eo=function(n,e){const t=eg(n),i=t.namespace;t.domain==="firebase.com"&&xe(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&xe("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||df();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new La(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new F(t.pathString)}},eg=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let d=n.indexOf("/");d===-1&&(d=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(d,u)),d<u&&(s=Xm(n.substring(d,u)));const f=Zm(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const h=e.slice(0,c);if(h.toLowerCase()==="localhost")t="localhost";else if(h.split(".").length<=2)t=h;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */const Co="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",tg=function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=Co.charAt(t%64),t=Math.floor(t/64);y(t===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Co.charAt(e[s]);return y(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class ng{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+V(this.snapshot.exportVal())}}class ig{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Ll{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return y(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class nr{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return P(this._path)?null:Rs(this._path)}get ref(){return new Te(this._repo,this._path)}get _queryIdentifier(){const e=ao(this._queryParams),t=Ss(e);return t==="{}"?"default":t}get _queryObject(){return ao(this._queryParams)}isEqual(e){if(e=ie(e),!(e instanceof nr))return!1;const t=this._repo===e._repo,i=As(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Gf(this._path)}}class Te extends nr{constructor(e,t){super(e,t,new Ls,!1)}get parent(){const e=ja(this._path);return e===null?null:new Te(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Zt{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new F(e),i=en(this.ref,e);return new Zt(this._node.getChild(t),i,z)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Zt(s,en(this.ref,i),z)))}hasChild(e){const t=new F(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function I(n,e){return n=ie(n),n._checkNotDeleted("ref"),e!==void 0?en(n._root,e):n._root}function en(n,e){return n=ie(n),A(n._path)===null?Dm("child","path",e):Il("child","path",e),new Te(n._repo,j(n._path,e))}function fn(n,e){n=ie(n),Sl("push",n._path),Cl("push",e,n._path,!0);const t=kl(n._repo),i=tg(t),s=en(n,i),r=en(n,i);let o;return o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function U(n,e){n=ie(n),Sl("set",n._path),Cl("set",e,n._path,!1);const t=new tn;return Wm(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function me(n,e){Lm("update",e,n._path);const t=new tn;return Vm(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function ee(n){n=ie(n);const e=new Ll(()=>{}),t=new gi(e);return zm(n._repo,n,t).then(i=>new Zt(i,new Te(n._repo,n._path),n._queryParams.getIndex()))}class gi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new ng("value",this,new Zt(e.snapshotNode,new Te(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ig(this,e,t):null}matches(e){return e instanceof gi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function sg(n,e,t,i,s){const r=new Ll(t,void 0),o=new gi(r);return Km(n._repo,n,o),()=>Rl(n._repo,n,o)}function ir(n,e,t,i){return sg(n,"value",e)}function sr(n,e,t){Rl(n._repo,n,null)}rm(Te);dm(Te);/**
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
 */const rg="FIREBASE_DATABASE_EMULATOR_HOST",ls={};let og=!1;function ag(n,e,t,i){n.repoInfo_=new La(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function lg(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||xe("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Y("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Eo(r,s),a=o.repoInfo,l;typeof process<"u"&&jr&&(l=jr[rg]),l?(r=`http://${l}?ns=${a.namespace}`,o=Eo(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new wf(n.name,n.options,e);Mm("Invalid Firebase Database URL",o),P(o.path)||xe("Database URL must point to the root of a Firebase Database (not including a child path).");const d=dg(a,n,c,new bf(n.name,t));return new ug(d,n)}function cg(n,e){const t=ls[e];(!t||t[n.key]!==n)&&xe(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Ym(n),delete t[n.key]}function dg(n,e,t,i){let s=ls[e.name];s||(s={},ls[e.name]=s);let r=s[n.toURLString()];return r&&xe("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Hm(n,og,t,i),s[n.toURLString()]=r,r}class ug{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(qm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Te(this._repo,D())),this._rootInternal}_delete(){return this._rootInternal!==null&&(cg(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xe("Cannot call "+e+" on a deleted database.")}}function hg(n=Fo(),e){const t=ms(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Pc("database");i&&fg(t,...i)}return t}function fg(n,e,t,i={}){n=ie(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&xe("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&xe('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Sn(Sn.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Oc(i.mockUserToken,n.app.options.projectId);r=new Sn(o)}ag(s,e,t,r)}/**
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
 */function pg(n){sf(St),gt(new Je("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return lg(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),$e(zr,Wr,n),$e(zr,Wr,"esm2017")}Ee.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ee.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};pg();const mg={apiKey:"AIzaSyCzdkKcfNvafQ3x9NDUsTn8UOww7_v3nn0",authDomain:"who-s-the-queen-bee.firebaseapp.com",databaseURL:"https://who-s-the-queen-bee-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"who-s-the-queen-bee",storageBucket:"who-s-the-queen-bee.firebasestorage.app",messagingSenderId:"808367557368",appId:"1:808367557368:web:7af8a2948e62494c5e490d"},Dl=$o(mg),gg=tf(Dl),S=hg(Dl),_g="modulepreload",vg=function(n){return"/queen-bee-scorecard/"+n},Io={},Ml=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=vg(l),l in Io)return;Io[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":_g,c||(u.as="script"),u.crossOrigin="",u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),c)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};async function oe(){const n=await ee(I(S,"employees"));return n.exists()?n.val():{}}async function _i(n,e){await me(I(S,`employees/${n}`),e)}function ke(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`}async function pn(n,e=ke()){const t=await ee(I(S,`monthly_points/${e}/${n}`));return t.exists()?t.val():{points:0,rank:null,db_count:0,db_pts_deducted:0,net_points:0}}async function rr(n,e,t=ke()){const i=await pn(n,t),s={...i,points:(i.points||0)+e,net_points:(i.net_points||0)+e};return await U(I(S,`monthly_points/${t}/${n}`),s),s}function vi(n=ke(),e){const t=I(S,`monthly_points/${n}`);return ir(t,i=>e(i.exists()?i.val():{})),()=>sr(t)}async function mn(n){const e=await ee(I(S,`vault/${n}`));return e.exists()?e.val():{total_earned:0,total_deducted:0,net:0,last_reset_date:null}}async function or(n,e){const t=await mn(n),i={...t,total_earned:(t.total_earned||0)+e,net:(t.net||0)+e};return await U(I(S,`vault/${n}`),i),i}async function $l(n){const e=fn(I(S,"awards")),t={...n,timestamp:Date.now()};return await U(e,t),e.key}async function Fl(n){const e=await ee(I(S,"awards"));if(!e.exists())return[];const t=e.val();return Object.entries(t).map(([i,s])=>({id:i,...s})).filter(i=>i.receiver_id===n).sort((i,s)=>s.timestamp-i.timestamp)}async function ar(n){const e=await ee(I(S,"awards"));if(!e.exists())return[];const t=e.val();return Object.entries(t).map(([i,s])=>({id:i,...s})).filter(i=>i.giver_id===n).sort((i,s)=>s.timestamp-i.timestamp)}async function Ul(n){const e=fn(I(S,"dark_beans")),t={...n,timestamp:Date.now(),appealed:!1,appeal_status:null};return await U(e,t),e.key}async function Bl(n,e=ke()){const t=await ee(I(S,"dark_beans"));if(!t.exists())return[];const i=t.val();return Object.entries(i).map(([s,r])=>({id:s,...r})).filter(s=>s.receiver_id===n&&s.month_key===e).sort((s,r)=>r.timestamp-s.timestamp)}async function lr(n,e,t){const i=await ee(I(S,`offense_escalation/${n}/${e}/${t}`));return i.exists()?i.val().instance_count:0}async function Hl(n,e,t){const i=await lr(n,e,t);return await U(I(S,`offense_escalation/${n}/${e}/${t}`),{instance_count:i+1}),i+1}async function gn(){const n=await ee(I(S,"action_menu"));return n.exists()?n.val():{}}async function ql(n,e){await me(I(S,`action_menu/${n}`),e)}async function At(){const n=await ee(I(S,"offense_menu"));return n.exists()?n.val():{}}async function jl(n,e){await me(I(S,`offense_menu/${n}`),e)}async function yi(n=ke()){const e=await ee(I(S,`nominations/${n}/wildcard_nominee`));return e.exists()?e.val():null}async function cr(n,e){await U(I(S,`nominations/${n}/wildcard_nominee`),e)}async function dr(n){await U(I(S,`nominations/${n}/wildcard_nominee`),null)}async function zl(n,e,t){await U(I(S,`votes/${n}/${e}`),t)}async function _n(n=ke()){const e=await ee(I(S,`votes/${n}`));return e.exists()?e.val():{}}async function xn(n,e){return(await ee(I(S,`votes/${n}/${e}`))).exists()}async function Mt(n){const e=fn(I(S,"audit_flags")),t={...n,timestamp:Date.now(),status:"open",acted_by:null,acted_at:null};return await U(e,t),e.key}async function Wl(n,e,t){await me(I(S,`audit_flags/${n}`),{status:e,acted_by:t,acted_at:Date.now()})}async function Vl(){const n=await ee(I(S,"audit_flags"));return n.exists()?Object.entries(n.val()).map(([e,t])=>({id:e,...t})).sort((e,t)=>t.timestamp-e.timestamp):[]}async function Gl(n){const e=fn(I(S,"pending_registrations"));return await U(e,{...n,submitted_at:Date.now(),status:"pending"}),e.key}async function Kl(n,e,t){const i="emp_"+n.slice(-8);return await U(I(S,`employees/${i}`),{name:e.name,email:e.email,role:e.role,outlet:e.outlet,pin_hash:e.pin_hash,active:!0}),await me(I(S,`pending_registrations/${n}`),{status:"approved",approved_by:t,approved_at:Date.now()}),i}async function Yl(n,e){await me(I(S,`pending_registrations/${n}`),{status:"rejected",rejected_by:e,rejected_at:Date.now()})}function Jn(n){const e=I(S,"pending_registrations");return ir(e,t=>{if(!t.exists()){n([]);return}const i=Object.entries(t.val()).map(([s,r])=>({id:s,...r})).filter(s=>s.status==="pending");n(i)}),()=>sr(e)}async function Ql(n,e,t,i=ke()){const s=await pn(n,i),r={...s,db_count:(s.db_count||0)+e,db_pts_deducted:(s.db_pts_deducted||0)+t,net_points:Math.max(0,(s.net_points||s.points||0)-t)};return await U(I(S,`monthly_points/${i}/${n}`),r),r}async function Jl(n,e){const t=await mn(n),i={...t,total_deducted:(t.total_deducted||0)+e,net:Math.max(0,(t.net||0)-e)};return await U(I(S,`vault/${n}`),i),i}async function Xl(n,e,t,i=ke()){const s=await pn(n,i),r={...s,db_count:Math.max(0,(s.db_count||0)-e),db_pts_deducted:Math.max(0,(s.db_pts_deducted||0)-t),net_points:(s.net_points||s.points||0)+t};return await U(I(S,`monthly_points/${i}/${n}`),r),r}async function Zl(n,e){const t=await mn(n),i={...t,total_deducted:Math.max(0,(t.total_deducted||0)-e),net:(t.net||0)+e};return await U(I(S,`vault/${n}`),i),i}async function ec(n){const e=await ee(I(S,"dark_beans"));return e.exists()?Object.entries(e.val()).map(([t,i])=>({id:t,...i})).filter(t=>t.giver_id===n&&!t.revoked).sort((t,i)=>i.timestamp-t.timestamp):[]}async function tc(n){const e=fn(I(S,"revoke_requests"));return await U(e,{...n,submitted_at:Date.now(),status:"pending"}),e.key}function Xn(n){const e=I(S,"revoke_requests");return ir(e,t=>{if(!t.exists()){n([]);return}const i=Object.entries(t.val()).map(([s,r])=>({id:s,...r})).filter(s=>s.status==="pending");n(i)}),()=>sr(e)}async function nc(n,e,t){await Promise.all([Xl(e.receiver_id,e.db_count,e.pts_deducted,e.month_key),Zl(e.receiver_id,e.pts_deducted),me(I(S,`dark_beans/${e.dark_bean_id}`),{revoked:!0,revoked_at:Date.now(),revoked_by:t}),me(I(S,`revoke_requests/${n}`),{status:"approved",approved_by:t,approved_at:Date.now()})])}async function ic(n,e){await me(I(S,`revoke_requests/${n}`),{status:"rejected",rejected_by:e,rejected_at:Date.now()})}async function sc(){await Promise.all([U(I(S,"awards"),null),U(I(S,"monthly_points"),null),U(I(S,"vault"),null),U(I(S,"dark_beans"),null),U(I(S,"audit_flags"),null),U(I(S,"offense_escalation"),null),U(I(S,"votes"),null),U(I(S,"nominations"),null),U(I(S,"revoke_requests"),null)])}async function rc(){await Promise.all([U(I(S,"employees"),null),U(I(S,"pending_registrations"),null)])}async function bi(){const n=await ee(I(S,"config"));return n.exists()?n.val():{}}async function oc(n){await me(I(S,"config"),n)}const yg=Object.freeze(Object.defineProperty({__proto__:null,addMonthlyPoints:rr,addVaultPoints:or,approveRegistration:Kl,approveRevokeRequest:nc,castVote:zl,clearWildcardNominee:dr,createAuditFlag:Mt,createAward:$l,createDarkBean:Ul,createRevokeRequest:tc,deductMonthlyPoints:Ql,deductVaultPoints:Jl,getActions:gn,getAllEmployees:oe,getAllFlags:Vl,getAwardsByEmployee:Fl,getAwardsByGiver:ar,getConfig:bi,getDarkBeansByEmployee:Bl,getDarkBeansByGiver:ec,getMonthlyPoints:pn,getOffenseInstance:lr,getOffenses:At,getVault:mn,getVotes:_n,getWildcardNominee:yi,hasVoted:xn,incrementOffenseInstance:Hl,listenLeaderboard:vi,listenPendingRegistrations:Jn,listenRevokeRequests:Xn,monthKey:ke,nukeAllStaff:rc,nukeTransactionalData:sc,rejectRegistration:Yl,rejectRevokeRequest:ic,reverseDeduction:Xl,reverseVaultDeduction:Zl,setWildcardNominee:cr,submitRegistration:Gl,updateConfig:oc,updateFlagStatus:Wl,upsertAction:ql,upsertEmployee:_i,upsertOffense:jl},Symbol.toStringTag,{value:"Module"})),wi="hb_bs_session",bg=2*60*60*1e3,wg=30*1e3;function ac(n){const e={...n,loginAt:Date.now()};localStorage.setItem(wi,JSON.stringify(e))}function lc(){try{const n=localStorage.getItem(wi);if(!n)return null;const e=JSON.parse(n);return Date.now()-e.loginAt>bg?(cc(),null):e}catch{return null}}function cc(){localStorage.removeItem(wi)}function Eg(){const n=lc();n&&(n.loginAt=Date.now(),localStorage.setItem(wi,JSON.stringify(n)))}function dc(){return setInterval(Eg,wg)}async function Cg(n){const t=new TextEncoder().encode(n),i=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(i)).map(r=>r.toString(16).padStart(2,"0")).join("")}async function Ig(n,e){const{getAllEmployees:t}=await Ml(async()=>{const{getAllEmployees:o}=await Promise.resolve().then(()=>yg);return{getAllEmployees:o}},void 0),i=await t(),s=Object.entries(i).map(([o,a])=>({id:o,...a})).find(o=>o.email===n&&o.active!==!1);if(!s)throw new Error("Employee not found");const r=await Cg(e);if(s.pin_hash!==r)throw new Error("Incorrect PIN");return ac(s),s}function Zn(){return!!(window.PublicKeyCredential&&navigator.credentials)}async function Sg(n){if(!Zn())return!1;try{const e=crypto.getRandomValues(new Uint8Array(32)),t=new TextEncoder().encode(n.id),i=await navigator.credentials.create({publicKey:{challenge:e,rp:{name:"Heebee Bean System"},user:{id:t,name:n.email,displayName:n.name},pubKeyCredParams:[{type:"public-key",alg:-7}],authenticatorSelection:{authenticatorAttachment:"platform",userVerification:"required"},timeout:6e4,attestation:"none"}});return i?(await _i(n.id,{webauthn_id:Tg(i.rawId)}),!0):!1}catch(e){return console.warn("WebAuthn registration failed, using PIN only:",e.message),!1}}async function xg(n){if(!Zn()||!n.webauthn_id)return!1;try{const e=crypto.getRandomValues(new Uint8Array(32)),t=kg(n.webauthn_id);return await navigator.credentials.get({publicKey:{challenge:e,allowCredentials:[{type:"public-key",id:t}],userVerification:"required",timeout:6e4}})?(ac(n),n):!1}catch(e){return console.warn("WebAuthn auth failed, fall back to PIN:",e.message),!1}}function Tg(n){return btoa(String.fromCharCode(...new Uint8Array(n)))}function kg(n){const e=atob(n),t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t.buffer}function Rg(){cc()}const ue={green:{id:"green",icon:"🫘",label:"Green Bean",pts:1,dailyCap:3},silver:{id:"silver",icon:"☕",label:"Silver Bean",pts:5,dailyCap:3},gold:{id:"gold",icon:"🥇",label:"Gold Bean",pts:10,dailyCap:3},crystal:{id:"crystal",icon:"💎",label:"Crystal Bean",pts:25,dailyCap:10}},Ei=["Trainee","Barista","Senior Barista","Kitchen Helper","Commi 3","Commi 2","Commi 1","DCDP","CDP"],Ci=["Floor Manager","Sous Chef","Cafe Manager","Head Chef","Area Manager","HOD","CEO","COO","Owner"],Ii=["HR","Accountant","Admin Staff"],uc={"Floor Manager":["green"],"Sous Chef":["green"],"Cafe Manager":["silver"],"Head Chef":["silver"],"Area Manager":["gold"],HOD:["gold"],CEO:["green","silver","gold","crystal"],COO:["green","silver","gold","crystal"],Owner:["green","silver","gold","crystal"]},Tn={green:{id:"green",icon:"🟢",label:"Minor",base_db:1,pts:5},silver:{id:"silver",icon:"🟠",label:"Moderate",base_db:3,pts:15},gold:{id:"gold",icon:"🔴",label:"Serious",base_db:5,pts:25},crystal:{id:"crystal",icon:"⚫",label:"Severe",base_db:10,pts:50}},hc={"Floor Manager":["green"],"Sous Chef":["green"],"Cafe Manager":["green","silver"],"Head Chef":["green","silver"],"Area Manager":["green","silver","gold"],HOD:["green","silver","gold"],HR:["green","silver","gold","crystal"],CEO:["green","silver","gold","crystal"],COO:["green","silver","gold","crystal"],Owner:["green","silver","gold","crystal"]},cs=5,fc=[{id:"act_01",name:"Daily Task Completion",applicable_bean_tier:"any",active:!0},{id:"act_02",name:"Perfect Attendance",applicable_bean_tier:"any",active:!0},{id:"act_03",name:"Upsell Achievement",applicable_bean_tier:"silver",active:!0},{id:"act_04",name:"Training Completion",applicable_bean_tier:"any",active:!0},{id:"act_05",name:"Customer Recovery Handle",applicable_bean_tier:"silver",active:!0},{id:"act_06",name:"Outlet Opening Standard",applicable_bean_tier:"any",active:!0},{id:"act_07",name:"Special Initiative",applicable_bean_tier:"gold",active:!0}],pc=[{id:"off_01",name:"Late Arrival",base_db:1,escalation:"double",submission_cap:8,active:!0},{id:"off_02",name:"No-Show No Notice",base_db:5,escalation:"double",submission_cap:20,active:!0},{id:"off_03",name:"Negligence",base_db:2,escalation:"double",submission_cap:16,active:!0},{id:"off_04",name:"Duty Denial",base_db:3,escalation:"double",submission_cap:24,active:!0},{id:"off_05",name:"Misconduct",base_db:4,escalation:"double",submission_cap:32,active:!0},{id:"off_06",name:"Serious/Insubordination",base_db:10,escalation:"double",submission_cap:40,active:!0}],ur=[{id:"SHB",name:"Sarabha Nagar",brand:"Heebee Coffee"},{id:"GHB",name:"Ghumar Mandi",brand:"Heebee Coffee"},{id:"JLD",name:"Model Town, Jalandhar",brand:"Heebee Coffee"},{id:"POUR",name:"Pour by Heebee",brand:"Pour"}];function mc(n){return Ei.includes(n)}function hr(n){return Ci.includes(n)}function gc(n){return Ii.includes(n)}function ct(n){return n==="HR"}function se(n){return["CEO","COO","Owner"].includes(n)}function _c(n){const e={},t={};n.forEach(({giver_id:s,receiver_id:r,points_value:o})=>{e[s]=(e[s]||0)+o;const a=`${s}::${r}`;t[a]=(t[a]||0)+o});const i=[];return Object.entries(t).forEach(([s,r])=>{const[o,a]=s.split("::"),l=e[o]||0;l>0&&r/l>.6&&i.push({type:"bias_concentration",giver_id:o,receiver_id:a,pct:Math.round(r/l*100)})}),i}function vc(n){return n>=100?"disciplinary":n>=51?"owners_notified":n>=26?"suggest_disqualify":n>=10?"silent_flag":null}function yc(n){const e={green:0,silver:0,gold:0,crystal:0};return n.forEach(({bean_type:t})=>{e[t]!==void 0&&e[t]++}),Object.entries(e).filter(([,t])=>t>0).map(([t,i])=>`${ue[t].icon} ${i}`).join(" · ")}const Ag=Object.freeze(Object.defineProperty({__proto__:null,ADMIN_ROLES:Ii,BEAN_TIERS:ue,CONDUCT_TIERS:Tn,DB_POINTS_EACH:cs,DEFAULT_ACTIONS:fc,DEFAULT_OFFENSES:pc,GIVER_ROLES:Ci,OUTLETS:ur,RECEIVER_ROLES:Ei,ROLE_BEAN_PERMISSIONS:uc,ROLE_CONDUCT_PERMISSIONS:hc,checkBiasConcentration:_c,formatBeanCounts:yc,getDBThresholdLevel:vc,isAdmin:gc,isGiver:hr,isHR:ct,isOwner:se,isReceiver:mc},Symbol.toStringTag,{value:"Module"})),Ng=[...Ei,...Ci,...Ii];async function Pg(n){const e=new TextEncoder().encode(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function Og(n,e){n.innerHTML=`
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
            ${Ng.map(u=>`<option value="${u}">${u}</option>`).join("")}
          </select>
        </div>

        <div>
          <p class="section-header">Outlet</p>
          <select id="reg-outlet" class="input" style="appearance:none;-webkit-appearance:none;">
            <option value="">Select outlet…</option>
            ${ur.map(u=>`<option value="${u.id}">${u.name}</option>`).join("")}
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
  `;const t=n.querySelector("#reg-name"),i=n.querySelector("#reg-email"),s=n.querySelector("#reg-role"),r=n.querySelector("#reg-outlet"),o=[0,1,2,3].map(u=>n.querySelector(`#reg-pin-${u}`)),a=n.querySelector("#reg-error"),l=n.querySelector("#reg-success"),c=n.querySelector("#btn-reg-submit");o.forEach((u,f)=>{u.addEventListener("input",h=>{const g=h.target.value.replace(/\D/g,"");h.target.value=g,g&&f<3&&o[f+1].focus()}),u.addEventListener("keydown",h=>{h.key==="Backspace"&&!u.value&&f>0&&(o[f-1].focus(),o[f-1].value="")})}),n.querySelector("#btn-reg-back").addEventListener("click",e),c.addEventListener("click",async()=>{a.classList.add("hidden");const u=t.value.trim(),f=i.value.trim().toLowerCase(),h=s.value,g=r.value,_=o.map(b=>b.value).join("");if(!u)return d("Enter your full name");if(!f.includes("@"))return d("Enter a valid email");if(!h)return d("Select your role");if(!g)return d("Select your outlet");if(_.length<4)return d("Enter a 4-digit PIN");c.disabled=!0,c.textContent="Submitting…";try{const b=await Pg(_);await Gl({name:u,email:f,role:h,outlet:g,pin_hash:b}),l.textContent="Request sent! Your manager will approve your account shortly.",l.classList.remove("hidden"),c.textContent="Submitted!",setTimeout(e,3e3)}catch{d("Something went wrong. Please try again."),c.disabled=!1,c.textContent="Submit Registration"}});function d(u){a.textContent=u,a.classList.remove("hidden")}}function bc(n,e){n.innerHTML=`
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
  `;const t=n.querySelector("#inp-email"),i=n.querySelector("#btn-next"),s=n.querySelector("#step-email"),r=n.querySelector("#step-pin"),o=n.querySelector("#login-error"),a=n.querySelector("#btn-back");let l="";i.addEventListener("click",c),t.addEventListener("keydown",w=>{w.key==="Enter"&&c()});function c(){const w=t.value.trim().toLowerCase();if(!w.includes("@")){g("Enter a valid email address");return}l=w,s.classList.add("hidden"),r.classList.remove("hidden"),n.querySelector("#pin-0").focus(),f(w)}a.addEventListener("click",()=>{r.classList.add("hidden"),s.classList.remove("hidden"),b(),_()}),n.querySelector("#btn-register").addEventListener("click",()=>{Og(n,()=>bc(n,e))});const d=[0,1,2,3].map(w=>n.querySelector(`#pin-${w}`));d.forEach((w,E)=>{w.addEventListener("input",O=>{const p=O.target.value.replace(/\D/g,"");O.target.value=p,p&&E<3&&d[E+1].focus(),E===3&&p&&u()}),w.addEventListener("keydown",O=>{O.key==="Backspace"&&!w.value&&E>0&&(d[E-1].focus(),d[E-1].value="")})});async function u(){const w=d.map(E=>E.value).join("");if(!(w.length<4)){C(!0),_();try{const E=await Ig(l,w);e(E),Zn()&&!E.webauthn_id&&setTimeout(()=>h(E),500)}catch(E){g(E.message==="Incorrect PIN"?"Incorrect PIN. Try again.":"Employee not found."),b(),d[0].focus()}finally{C(!1)}}}async function f(w){if(Zn())try{const E=await oe(),O=Object.entries(E).map(([m,v])=>({id:m,...v})).find(m=>m.email===w&&m.webauthn_id&&m.active!==!1);if(!O)return;const p=await xg(O);p&&e(p)}catch{}}async function h(w){confirm("Enable Face ID / Fingerprint for faster login?")&&await Sg(w)}function g(w){o.textContent=w,o.classList.remove("hidden")}function _(){o.classList.add("hidden")}function b(){d.forEach(w=>{w.value=""})}function C(w){d.forEach(E=>{E.disabled=w})}}const ot=300,Lg=80;async function Dg(n){return new Promise((e,t)=>{const i=new Image,s=URL.createObjectURL(n);i.onload=()=>{URL.revokeObjectURL(s);const r=document.createElement("canvas");let{width:o,height:a}=i;o>a&&o>ot?(a=Math.round(a*ot/o),o=ot):a>ot&&(o=Math.round(o*ot/a),a=ot),r.width=o,r.height=a,r.getContext("2d").drawImage(i,0,0,o,a),wc(r,.8,e)},i.onerror=t,i.src=s})}function wc(n,e,t,i){const s=n.toDataURL("image/jpeg",e);Math.round(s.length*3/4/1024)<=Lg||e<=.3?t(s):wc(n,e-.15,t)}function pe(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`}function Qe(n){return Number(n||0).toLocaleString("en-IN")}function Et(n){const e=Date.now()-n;return e<6e4?"just now":e<36e5?`${Math.floor(e/6e4)}m ago`:e<864e5?`${Math.floor(e/36e5)}h ago`:`${Math.floor(e/864e5)}d ago`}function Mg(){const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function $g(n=new Date){return!0}function Fg(n){return Object.entries(n).map(([e,t])=>({id:e,...t})).sort((e,t)=>(t.net_points||t.points||0)-(e.net_points||e.points||0)).map((e,t)=>({...e,rank:t+1}))}async function Ug(n,e,t,{onLogout:i,navigate:s}){t.db_toggle,n.innerHTML=`
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
  `,n.querySelector("#btn-logout").addEventListener("click",i);try{hr(e.role)?await Hg(n,e,s):gc(e.role)?await qg(n,e,s):await Bg(n,e,t,s)}catch(r){console.error("Dashboard error:",r),n.querySelector("#dash-loading").classList.remove("hidden"),n.querySelector("#dash-loading").innerHTML=`<div class="empty-state"><p style="color:var(--red);">Failed to load dashboard.</p><p class="text-dim text-sm mt-8">${r.message}</p></div>`}}async function Bg(n,e,t,i){const s=t.db_toggle===!0,[r,o,a,l]=await Promise.all([pn(e.id),mn(e.id),Fl(e.id),oe()]);n.querySelector("#dash-loading").classList.add("hidden");const c=n.querySelector("#dash-content");c.classList.remove("hidden"),vi(pe(),C=>{const w=Fg(C),E=["Trainee","Barista","Senior Barista","Kitchen Helper","Commi 3","Commi 2","Commi 1","DCDP","CDP"],p=w.filter(R=>{const M=l[R.id]||{};return E.includes(M.role||"")}).findIndex(R=>R.id===e.id),m=c.querySelector("#nomination-banner");m&&(p>=0&&p<5?(m.innerHTML=`
          <div class="card mb-16" style="text-align:center;padding:20px 16px;background:rgba(201,168,76,0.1);border-color:rgba(201,168,76,0.5);position:relative;overflow:hidden;">
            <div style="position:absolute;top:-10px;right:-10px;font-size:4rem;opacity:0.08;pointer-events:none;">👑</div>
            <div style="font-size:1.8rem;margin-bottom:6px;">👑</div>
            <p style="font-weight:700;color:var(--gold);font-size:1rem;margin-bottom:4px;">You're nominated for Queen Bee!</p>
            <p class="text-dim text-sm">You're nominee #${p+1} this month — the team is voting for you!</p>
          </div>
        `,m.classList.remove("hidden")):(m.innerHTML="",m.classList.add("hidden")));const v=w.find(R=>R.id===e.id),x=c.querySelector("#my-rank");x&&v&&(x.textContent=`#${v.rank}`)});const d=a.slice(0,5),u=yc(a),f=e.name.split(" ").map(C=>C[0]).join("").slice(0,2).toUpperCase(),h=["#8B5E3C","#5E6E8B","#5E8B6E","#8B5E7A","#7A8B5E","#6E5E8B","#8B7A5E"],g=h[e.name.charCodeAt(0)%h.length];c.innerHTML=`
    <!-- Profile Photo -->
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px;">
      <div style="position:relative;">
        ${e.photo_url?`<img id="profile-hex" src="${e.photo_url}" style="width:64px;height:64px;clip-path:polygon(50% 0%,95% 25%,95% 75%,50% 100%,5% 75%,5% 25%);object-fit:cover;" />`:`<div id="profile-hex" style="width:64px;height:64px;clip-path:polygon(50% 0%,95% 25%,95% 75%,50% 100%,5% 75%,5% 25%);background:${g};display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:1.3rem;">${f}</div>`}
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
        ${Qe(r.net_points||r.points||0)}
      </div>
      <p class="text-dim text-sm">points · Rank <span id="my-rank" class="text-gold">#${r.rank||"—"}</span></p>
    </div>

    <div class="card mb-16">
      <div class="flex justify-between items-center">
        <div>
          <p class="section-header">🏦 Vault</p>
          <div class="mono" style="font-size:1.6rem;margin-top:4px;">
            ${Qe(o.total_earned||0)} <span class="text-dim text-sm">pts earned</span>
          </div>
        </div>
        ${s&&o.total_deducted>0?`
        <div style="text-align:right;">
          <p class="text-sm" style="color:var(--red);">−${Qe(o.total_deducted)}</p>
          <p class="text-xs text-dim">deducted</p>
          <p class="mono text-sm text-gold mt-4">${Qe(o.net)} net</p>
        </div>`:""}
      </div>
    </div>

    ${u?`
    <div class="card mb-16">
      <p class="section-header">🏆 Trophy Shelf</p>
      <div class="trophy-shelf mt-8">${zg(a)}</div>
    </div>`:""}

    <p class="section-header">Recent Beans</p>
    ${d.length===0?'<div class="empty-state"><div class="icon">🫘</div><p>No beans yet this month</p></div>':d.map(C=>Wg(C)).join("")}
  `;const _=c.querySelector("#photo-upload"),b=c.querySelector("#photo-status");c.querySelector("#profile-hex"),_==null||_.addEventListener("change",async C=>{const w=C.target.files[0];if(w){b.textContent="Compressing…";try{const E=await Dg(w),O=Math.round(E.length/1024);await _i(e.id,{photo_url:E}),e.photo_url=E;const p=c.querySelector("#profile-hex");p&&(p.outerHTML=`<img id="profile-hex" src="${E}" style="width:64px;height:64px;clip-path:polygon(50% 0%,95% 25%,95% 75%,50% 100%,5% 75%,5% 25%);object-fit:cover;" />`),b.textContent=`✓ Saved (${O}KB)`,setTimeout(()=>{b.textContent=""},3e3)}catch(E){b.textContent="Failed. Try a smaller image.",console.error(E)}}})}async function Hg(n,e,t){var E,O,p,m;const i=["Owner","CEO","COO","HR"].includes(e.role),s=pe(),[r,o,a,l,c,d,u,f]=await Promise.all([ar(e.id),oe(),gn(),ec(e.id),At(),i?bi():Promise.resolve({}),i?yi(s):Promise.resolve(null),i?_n(s):Promise.resolve({})]),h=Object.keys(f).length>0;n.querySelector("#dash-loading").classList.add("hidden");const g=n.querySelector("#dash-content");g.classList.remove("hidden");const _=pe(),b=r.filter(v=>{const x=new Date(v.timestamp);return`${x.getFullYear()}-${String(x.getMonth()+1).padStart(2,"0")}`===_}),C=b.reduce((v,x)=>v+x.points_value*(x.quantity||1),0),w={green:0,silver:0,gold:0,crystal:0};b.forEach(v=>{w[v.bean_type]!==void 0&&w[v.bean_type]++}),g.innerHTML=`
    <div class="card mb-16" style="text-align:center;padding:28px 20px;">
      <p class="section-header" style="margin-bottom:4px;">Beans Given This Month</p>
      <div class="mono text-gold" style="font-size:3rem;font-weight:400;margin-bottom:4px;">
        ${b.length}
      </div>
      <p class="text-dim text-sm">${Qe(C)} pts awarded to your team</p>
    </div>

    <div class="card mb-16">
      <p class="section-header" style="margin-bottom:12px;">Bean Breakdown</p>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;text-align:center;">
        ${Object.entries(w).map(([v,x])=>`
          <div style="padding:12px 8px;border-radius:12px;background:var(--glass-bg);">
            <div style="font-size:1.4rem;margin-bottom:4px;">${ue[v].icon}</div>
            <div class="mono text-gold" style="font-size:1rem;">${x}</div>
            <div class="text-dim" style="font-size:0.65rem;margin-top:2px;">${ue[v].label.replace(" Bean","")}</div>
          </div>
        `).join("")}
      </div>
    </div>

    <div style="display:flex;gap:10px;margin-bottom:24px;">
      <button class="btn btn-primary" id="btn-quick-award" style="flex:1;height:48px;">
        + Award Beans
      </button>
    </div>

    ${i?Ec(u,o,s,h):""}
    ${se(e.role)?jg(d):""}

    <p class="section-header">Recent Awards Given</p>
    ${b.length===0?'<div class="empty-state"><div class="icon">🫘</div><p>No beans given this month yet</p></div>':b.slice(0,5).map(v=>Gg(v,o,a)).join("")}

    <p class="section-header" style="margin-top:24px;">Recent Conduct Issued</p>
    <div id="conduct-list">
    ${l.length===0?'<div class="empty-state" style="padding:24px;"><div class="icon" style="font-size:1.5rem;">🌑</div><p class="text-dim text-sm">No conduct issued this month</p></div>':l.slice(0,5).map(v=>Vg(v,o,c)).join("")}
    </div>
  `,(E=g.querySelector("#btn-quick-award"))==null||E.addEventListener("click",()=>t("award")),(O=g.querySelector("#toggle-voting-pts"))==null||O.addEventListener("change",async v=>{const x=v.target.checked,R=v.target.nextElementSibling,M=R==null?void 0:R.querySelector("span");R&&(R.style.background=x?"var(--gold)":"var(--border)"),M&&(M.style.left=x?"23px":"3px"),await oc({voting_points_enabled:x})}),(p=g.querySelector("#btn-set-wildcard"))==null||p.addEventListener("click",async()=>{if(h)return;const v=g.querySelector("#wildcard-select"),x=v==null?void 0:v.value;if(!x)return;const R=g.querySelector("#btn-set-wildcard");R.disabled=!0,R.textContent="Saving…",await cr(s,{employee_id:x,nominated_by_id:e.id,nominated_by_name:e.name,nominated_at:Date.now()}),R.textContent="✓ Saved";const M=g.querySelector("#wildcard-status"),L=o[x];M&&(M.textContent=`⭐ ${(L==null?void 0:L.name)||x} is this month's wildcard nominee`),R.disabled=!1}),(m=g.querySelector("#btn-clear-wildcard"))==null||m.addEventListener("click",async()=>{if(h)return;const v=g.querySelector("#btn-clear-wildcard");v.disabled=!0,v.textContent="Clearing…",await dr(s),v.textContent="Cleared";const x=g.querySelector("#wildcard-status");x&&(x.textContent="No wildcard nominee set"),g.querySelector("#wildcard-select").value=""}),g.querySelectorAll(".btn-revoke-request").forEach(v=>{v.addEventListener("click",async()=>{const x=v.dataset.id,R=l.find(L=>L.id===x);if(!R)return;const M=prompt("Reason for revoking this conduct? (required)");if(!(!M||!M.trim())){v.disabled=!0,v.textContent="Requesting…";try{await tc({dark_bean_id:x,receiver_id:R.receiver_id,giver_id:e.id,giver_name:e.name,offense_id:R.offense_id,conduct_tier:R.conduct_tier,db_count:R.db_count,pts_deducted:R.pts_deducted,month_key:R.month_key,reason:M.trim()}),v.textContent="⏳ Pending Approval",v.style.color="var(--text-secondary)"}catch(L){v.disabled=!1,v.textContent="Request Revoke",console.error(L)}}})})}async function qg(n,e,t){var c,d,u,f;const i=pe(),[s,r,o]=await Promise.all([oe(),yi(i),_n(i)]),a=Object.keys(o).length>0;n.querySelector("#dash-loading").classList.add("hidden");const l=n.querySelector("#dash-content");l.classList.remove("hidden"),l.innerHTML=`
    <div class="card mb-16" style="text-align:center;padding:32px 20px;">
      <div style="font-size:2rem;margin-bottom:12px;">👋</div>
      <h2 style="font-size:1.1rem;margin-bottom:6px;">Welcome, ${e.name}</h2>
      <p class="text-dim text-sm">${e.role} · ${e.outlet}</p>
    </div>

    ${Ec(r,s,i,a)}

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
  `,(c=l.querySelector("#goto-approvals"))==null||c.addEventListener("click",()=>t("approvals")),(d=l.querySelector("#goto-audit"))==null||d.addEventListener("click",()=>t("audit")),(u=l.querySelector("#btn-set-wildcard"))==null||u.addEventListener("click",async()=>{if(a)return;const h=l.querySelector("#wildcard-select"),g=h==null?void 0:h.value;if(!g)return;const _=l.querySelector("#btn-set-wildcard");_.disabled=!0,_.textContent="Saving…",await cr(i,{employee_id:g,nominated_by_id:e.id,nominated_by_name:e.name,nominated_at:Date.now()}),_.textContent="✓ Saved";const b=l.querySelector("#wildcard-status"),C=s[g];b&&(b.textContent=`⭐ ${(C==null?void 0:C.name)||g} is this month's wildcard nominee`),_.disabled=!1}),(f=l.querySelector("#btn-clear-wildcard"))==null||f.addEventListener("click",async()=>{if(a)return;const h=l.querySelector("#btn-clear-wildcard");h.disabled=!0,h.textContent="Clearing…",await dr(i),h.textContent="Cleared";const g=l.querySelector("#wildcard-status");g&&(g.textContent="No wildcard nominee set"),l.querySelector("#wildcard-select").value=""})}function Ec(n,e,t,i=!1){var o;const s=n?((o=e[n.employee_id])==null?void 0:o.name)||n.employee_id:null;if(i)return`
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
  `}function jg(n){const e=n.voting_points_enabled!==!1;return`
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
  `}function zg(n){const e={green:0,silver:0,gold:0,crystal:0};return n.forEach(({bean_type:t})=>{e[t]!==void 0&&e[t]++}),Object.entries(e).filter(([,t])=>t>0).map(([t,i])=>`
      <div class="trophy-item">
        <span style="font-size:1.3rem;">${ue[t].icon}</span>
        <span>${i}</span>
      </div>
    `).join("")}function Wg(n){const e=ue[n.bean_type]||{icon:"🫘",label:n.bean_type};return`
    <div class="lb-row" style="margin-bottom:8px;">
      <span style="font-size:1.4rem;">${e.icon}</span>
      <div style="flex:1;">
        <p style="font-size:0.9rem;">${e.label} · <span class="text-gold mono">+${n.points_value*(n.quantity||1)} pts</span></p>
        <p class="text-dim text-xs">${n.action_id||"Award"} · ${Et(n.timestamp)}</p>
      </div>
    </div>
  `}function Vg(n,e={},t={}){const i=e[n.receiver_id],s=i?i.name:"Staff",r=t[n.offense_id],o=(r==null?void 0:r.name)||n.offense_id||"Conduct";return`
    <div class="lb-row" style="margin-bottom:8px;flex-direction:column;align-items:stretch;gap:8px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-size:1.3rem;">${{green:"🟢",silver:"🟠",gold:"🔴",crystal:"⚫"}[n.conduct_tier]||"🌑"}</span>
        <div style="flex:1;">
          <p style="font-size:0.9rem;">${s} · <span style="color:var(--red);" class="mono">−${n.pts_deducted} pts</span></p>
          <p class="text-dim text-xs">${o} · ${Et(n.timestamp)}</p>
        </div>
      </div>
      ${Date.now()-n.timestamp<864e5?`<button class="btn btn-ghost btn-revoke-request text-sm" data-id="${n.id}"
            style="padding:6px 12px;font-size:0.78rem;color:var(--text-secondary);border-color:rgba(255,69,58,0.3);">
            Request Revoke
          </button>`:'<p style="font-size:0.72rem;color:var(--text-tertiary);padding:4px 0;">⏰ Revoke window closed (24hr passed)</p>'}
    </div>
  `}function Gg(n,e={},t={}){var a;const i=ue[n.bean_type]||{icon:"🫘",label:n.bean_type},s=e[n.receiver_id],r=s?s.name:n.giver_name||"Staff",o=((a=t[n.action_id])==null?void 0:a.name)||n.action_id||"Award";return`
    <div class="lb-row" style="margin-bottom:8px;">
      <span style="font-size:1.4rem;">${i.icon}</span>
      <div style="flex:1;">
        <p style="font-size:0.9rem;">${r} · <span class="text-gold mono">+${n.points_value*(n.quantity||1)} pts</span></p>
        <p class="text-dim text-xs">${o} · ${Et(n.timestamp)}</p>
      </div>
    </div>
  `}function Kg(n){const e=(n.name||"??").split(" ").map(r=>r[0]).join("").slice(0,2).toUpperCase(),t=["#8B5E3C","#5E6E8B","#5E8B6E","#8B5E7A","#7A8B5E","#6E5E8B","#8B7A5E"],i=t[(n.name||"").charCodeAt(0)%t.length],s=n.photo_url;return s?`<div class="avatar-hex-wrap"><img class="avatar-hex" src="${s}" alt="${e}" /></div>`:`
    <div class="avatar-hex-wrap">
      <div class="avatar-hex" style="background:${i};color:#fff;">
        ${e}
      </div>
    </div>
  `}function Yg(n,e,t){let i={};n.innerHTML=`
    <div class="page">
      <h1 style="font-size:1.4rem;margin-bottom:2px;">Leaderboard</h1>
      <p class="text-dim text-sm" style="margin-bottom:20px;">${Qg()} · Live</p>
      <div id="lb-list">
        <div class="loading-center" style="min-height:40vh;"><div class="spinner"></div></div>
      </div>
    </div>
  `;const s=n.querySelector("#lb-list");oe().then(o=>{i=o;const a=vi(pe(),c=>{r(c)}),l=new MutationObserver(()=>{document.contains(s)||(a(),l.disconnect())});l.observe(document.body,{childList:!0,subtree:!0})});function r(o){const a=Object.entries(o).map(([l,c])=>({id:l,...c,emp:i[l]||{}})).filter(l=>l.emp.active!==!1).sort((l,c)=>(c.net_points||c.points||0)-(l.net_points||l.points||0)).map((l,c)=>({...l,rank:c+1}));if(a.length===0){s.innerHTML=`
        <div class="empty-state">
          <div style="font-size:2.5rem;margin-bottom:12px;">🏆</div>
          <p class="text-dim">No points recorded yet this month</p>
          <p class="text-dim text-sm" style="margin-top:4px;">Be the first to earn beans!</p>
        </div>
      `;return}s.innerHTML=a.map(l=>{const c=l.id===e.id,d=l.net_points||l.points||0,u=l.rank===1,f=l.rank===2?"🥈":l.rank===3?"🥉":null,h=l.rank<=3?`top${l.rank}`:"";return`
        <div class="lb-row ${u?"lb-row-top1":""} ${c?"self":""}" style="margin-bottom:${u?"20px":"8px"};">
          ${u?'<div class="queen-bee-glow"></div>':""}
          ${Kg(l.emp)}
          <div class="lb-rank ${h}" style="min-width:24px;">
            ${f?`<span style="font-size:1.1rem;">${f}</span>`:u?"":`<span style="font-size:0.8rem;color:var(--text-tertiary);">#${l.rank}</span>`}
          </div>
          <div class="lb-name">
            <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
              <span style="${u?"color:var(--gold);font-weight:600;":""}">${l.emp.name||l.id}</span>
              ${c?'<span class="badge badge-gold" style="font-size:0.6rem;padding:2px 7px;">You</span>':""}
              ${u?'<span style="font-size:0.75rem;color:var(--gold);opacity:0.9;display:flex;align-items:center;gap:3px;"><span class="queen-bee-crown" style="position:static;font-size:0.9rem;transform:none;animation:crown-float 2s ease-in-out infinite;display:inline-block;">👑🐝</span> Queen Bee</span>':""}
            </div>
            <div class="text-dim" style="font-size:0.75rem;margin-top:2px;">${l.emp.role||""} · ${l.emp.outlet||""}</div>
          </div>
          <div class="lb-pts">${Qe(d)} <span style="font-size:0.7rem;color:var(--text-tertiary);">pts</span></div>
        </div>
      `}).join("")}}function Qg(){return new Date().toLocaleDateString("en-IN",{month:"long",year:"numeric"})}const Jg="";async function Xg(n,e){try{await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(t){console.error("Slack webhook failed:",t)}}async function Zg({receiverName:n,beanType:e,pts:t,giverName:i,actionName:s}){const{BEAN_TIERS:r}=await Ml(async()=>{const{BEAN_TIERS:a}=await Promise.resolve().then(()=>Ag);return{BEAN_TIERS:a}},void 0),o=r[e];await Xg(Jg,{text:`${o.icon} *${o.label}* awarded to *${n}* · +${t} pts
👤 From: ${i} · 📋 ${s}`})}async function e_(n,e,t){n.innerHTML=`
    <div class="page">
      <h1 style="font-size:1.4rem;margin-bottom:4px;">Give Recognition</h1>
      <div class="flex gap-8 mb-16" id="award-tabs" style="margin-top:12px;">
        <button class="btn ${e.role==="HR"?"btn-ghost":"btn-primary"} award-tab" data-tab="award" style="flex:1;padding:10px;">🫘 Award Beans</button>
        <button class="btn ${e.role==="HR"?"btn-primary":"btn-ghost"} award-tab" data-tab="conduct" style="flex:1;padding:10px;">🌑 Conduct</button>
      </div>
      <div id="award-content">
        <div class="loading-center" style="min-height:40vh;"><div class="spinner"></div></div>
      </div>
    </div>
  `;let i=e.role==="HR"?"conduct":"award",s={},r={},o={},a=[];try{[s,r,o]=await Promise.all([oe(),gn(),At()]),a=Object.entries(s).map(([d,u])=>({id:d,...u})).filter(d=>mc(d.role)&&d.active!==!1).sort((d,u)=>d.name.localeCompare(u.name))}catch{n.querySelector("#award-content").innerHTML='<p class="text-dim text-sm text-center">Failed to load. Check connection.</p>';return}n.querySelectorAll(".award-tab").forEach(d=>{d.addEventListener("click",()=>{i=d.dataset.tab,n.querySelectorAll(".award-tab").forEach(u=>{u.className=u.dataset.tab===i?"btn btn-primary award-tab":"btn btn-ghost award-tab",u.style.flex="1",u.style.padding="10px"}),i==="award"?l():c()})}),e.role==="HR"?c():l();function l(){const d=n.querySelector("#award-content"),u=uc[e.role]||[],f=Object.entries(r).map(([m,v])=>({id:m,...v})).filter(m=>m.active!==!1);if(a.length===0){d.innerHTML=`
        <div class="empty-state" style="min-height:40vh;">
          <div style="font-size:2.5rem;margin-bottom:16px;">👥</div>
          <p>No staff to award yet</p>
          <p class="text-dim text-sm mt-8">Approve team registrations from the Approvals tab first.</p>
        </div>
      `;return}let h={receiver:null,beanType:null,actionId:null,quantity:1};d.innerHTML=`
      <p class="section-header">Who are you recognising?</p>
      <input id="search-emp" class="input" type="text" placeholder="Search by name…" style="margin-bottom:10px;" />
      <div id="emp-list" style="max-height:200px;overflow-y:auto;margin-bottom:24px;border-radius:var(--radius-md);"></div>

      <p class="section-header">Bean Type</p>
      <div id="bean-type-list" style="display:grid;grid-template-columns:repeat(${u.length>2?4:u.length},1fr);gap:10px;margin-bottom:24px;">
        ${u.map(m=>{const v=ue[m];return`
            <div class="card bean-type-btn" data-type="${m}" style="text-align:center;cursor:pointer;padding:16px 8px;border-radius:var(--radius-md);">
              <div style="font-size:1.6rem;margin-bottom:6px;">${v.icon}</div>
              <div style="font-size:0.72rem;color:var(--text-secondary);margin-bottom:4px;">${v.label}</div>
              <div class="mono" style="font-size:0.78rem;color:var(--gold);">+${v.pts}pt</div>
            </div>
          `}).join("")}
      </div>

      <p class="section-header">Reason <span style="color:var(--text-tertiary);font-weight:400;">(required)</span></p>
      <div id="action-list" style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">
        ${f.map(m=>`
          <div class="action-btn" data-id="${m.id}"
            style="cursor:pointer;padding:8px 14px;border-radius:20px;border:1px solid var(--border);
            background:var(--glass-bg);font-size:0.82rem;color:var(--text-secondary);transition:all 0.2s;">
            ${m.name}
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
    `;const g=d.querySelector("#emp-list"),_=d.querySelector("#search-emp");let b=a;function C(){g.innerHTML=b.map(m=>{var v,x;return`
        <div class="lb-row emp-row" data-id="${m.id}" style="cursor:pointer;margin-bottom:6px;${((v=h.receiver)==null?void 0:v.id)===m.id?"border-color:var(--gold);background:rgba(201,168,76,0.06);":""}">
          <div style="flex:1;">
            <p style="font-size:0.9rem;">${m.name}</p>
            <p class="text-xs text-dim">${m.role} · ${m.outlet}</p>
          </div>
          ${((x=h.receiver)==null?void 0:x.id)===m.id?'<span class="text-gold">✓</span>':""}
        </div>
      `}).join(""),g.querySelectorAll(".emp-row").forEach(m=>{m.addEventListener("click",()=>{h.receiver=a.find(v=>v.id===m.dataset.id),C(),p()})})}_.addEventListener("input",()=>{const m=_.value.toLowerCase();b=m?a.filter(v=>v.name.toLowerCase().includes(m)):a,C()}),C(),d.querySelectorAll(".bean-type-btn").forEach(m=>{m.addEventListener("click",()=>{h.beanType=m.dataset.type,d.querySelectorAll(".bean-type-btn").forEach(v=>{v.style.borderColor=v.dataset.type===h.beanType?"var(--gold)":"var(--border)",v.style.background=v.dataset.type===h.beanType?"rgba(201,168,76,0.1)":"var(--glass-bg)"}),p()})}),d.querySelectorAll(".action-btn").forEach(m=>{m.addEventListener("click",()=>{h.actionId=m.dataset.id,d.querySelectorAll(".action-btn").forEach(v=>{v.style.background=v.dataset.id===h.actionId?"rgba(201,168,76,0.15)":"",v.style.borderColor=v.dataset.id===h.actionId?"rgba(201,168,76,0.4)":"",v.style.color=v.dataset.id===h.actionId?"var(--gold)":""}),p()})});const w=d.querySelector("#qty-display");d.querySelector("#btn-minus").addEventListener("click",()=>{h.quantity>1&&(h.quantity--,w.textContent=h.quantity)}),d.querySelector("#btn-plus").addEventListener("click",()=>{const m=h.beanType?ue[h.beanType].dailyCap:10;h.quantity<m&&(h.quantity++,w.textContent=h.quantity)});const E=d.querySelector("#btn-submit"),O=d.querySelector("#award-error");function p(){E.disabled=!(h.receiver&&h.beanType&&h.actionId)}E.addEventListener("click",async()=>{if(!(!h.receiver||!h.beanType||!h.actionId)){E.disabled=!0,E.textContent="Awarding…",O.classList.add("hidden");try{const m=ue[h.beanType],v=m.pts*h.quantity;await $l({giver_id:e.id,giver_name:e.name,receiver_id:h.receiver.id,bean_type:h.beanType,points_value:m.pts,action_id:h.actionId,reason_text:d.querySelector("#inp-reason").value.trim(),outlet:e.outlet,quantity:h.quantity}),await Promise.all([rr(h.receiver.id,v),or(h.receiver.id,v)]),await Zg({receiverName:h.receiver.name,beanType:h.beanType,pts:v,giverName:e.name,actionName:h.actionId});const x=await ar(e.id),R=pe(),M=x.filter(B=>{const te=new Date(B.timestamp);return`${te.getFullYear()}-${String(te.getMonth()+1).padStart(2,"0")}`===R}),L=_c(M);for(const B of L)await Mt({type:"bias_concentration",giver_id:B.giver_id,receiver_id:B.receiver_id,suggestion_text:`${e.name} has directed ${B.pct}% of their beans to one person this month.`,suggestion:"Review award distribution to ensure fairness across the team."}).catch(()=>{});d.innerHTML=`
          <div class="text-center" style="padding:60px 20px;">
            <div style="font-size:3rem;margin-bottom:16px;">${m.icon}</div>
            <h2 style="margin-bottom:8px;">${m.label} Awarded!</h2>
            <p class="text-dim">+${v} pts to <strong>${h.receiver.name}</strong></p>
            <button class="btn btn-primary mt-24" id="btn-award-again">Award Another</button>
          </div>
        `,d.querySelector("#btn-award-again").addEventListener("click",l)}catch(m){O.textContent="Failed to submit. Try again.",O.classList.remove("hidden"),E.disabled=!1,E.textContent="Award Beans",console.error(m)}}})}function c(){const d=n.querySelector("#award-content"),u=hc[e.role]||[],f=Object.entries(o).map(([p,m])=>({id:p,...m})).filter(p=>p.active!==!1);if(a.length===0){d.innerHTML='<div class="empty-state"><div class="icon">👥</div><p class="text-dim">No staff to issue conduct to.</p></div>';return}if(u.length===0){d.innerHTML='<div class="empty-state"><div class="icon">🔒</div><p class="text-dim">Your role cannot issue conduct.</p></div>';return}let h={receiver:null,tier:null,offenseId:null};d.innerHTML=`
      <p class="section-header">Who is this about?</p>
      <input id="search-emp-c" class="input" type="text" placeholder="Search by name…" style="margin-bottom:10px;" />
      <div id="emp-list-c" style="max-height:180px;overflow-y:auto;margin-bottom:24px;border-radius:var(--radius-md);"></div>

      <p class="section-header">Severity</p>
      <div style="display:grid;grid-template-columns:repeat(${u.length},1fr);gap:10px;margin-bottom:24px;">
        ${u.map(p=>{const m=Tn[p];return`
            <div class="card conduct-tier-btn" data-type="${p}"
              style="text-align:center;cursor:pointer;padding:16px 8px;border-radius:var(--radius-md);">
              <div style="font-size:1.6rem;margin-bottom:6px;">${m.icon}</div>
              <div style="font-size:0.72rem;color:var(--text-secondary);margin-bottom:4px;">${m.label}</div>
              <div class="mono" style="font-size:0.78rem;color:var(--red);">${m.base_db} DB</div>
            </div>
          `}).join("")}
      </div>

      <p class="section-header">Reason <span style="color:var(--text-tertiary);font-weight:400;">(required)</span></p>
      <div id="offense-list" style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">
        ${f.map(p=>`
          <div class="offense-btn" data-id="${p.id}"
            style="cursor:pointer;padding:8px 14px;border-radius:20px;border:1px solid var(--border);
            background:var(--glass-bg);font-size:0.82rem;color:var(--text-secondary);transition:all 0.2s;">
            ${p.name}
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
    `;const g=d.querySelector("#emp-list-c"),_=d.querySelector("#search-emp-c");let b=a;function C(){g.innerHTML=b.map(p=>{var m,v;return`
        <div class="lb-row emp-row-c" data-id="${p.id}" style="cursor:pointer;margin-bottom:6px;${((m=h.receiver)==null?void 0:m.id)===p.id?"border-color:rgba(255,69,58,0.5);background:rgba(255,69,58,0.06);":""}">
          <div style="flex:1;"><p style="font-size:0.9rem;">${p.name}</p><p class="text-xs text-dim">${p.role} · ${p.outlet}</p></div>
          ${((v=h.receiver)==null?void 0:v.id)===p.id?'<span style="color:var(--red);">✓</span>':""}
        </div>
      `}).join(""),g.querySelectorAll(".emp-row-c").forEach(p=>{p.addEventListener("click",()=>{h.receiver=a.find(m=>m.id===p.dataset.id),C(),w()})})}_.addEventListener("input",()=>{const p=_.value.toLowerCase();b=p?a.filter(m=>m.name.toLowerCase().includes(p)):a,C()}),C(),d.querySelectorAll(".conduct-tier-btn").forEach(p=>{p.addEventListener("click",()=>{h.tier=p.dataset.type,d.querySelectorAll(".conduct-tier-btn").forEach(m=>{m.style.borderColor=m.dataset.type===h.tier?"rgba(255,69,58,0.6)":"var(--border)",m.style.background=m.dataset.type===h.tier?"rgba(255,69,58,0.1)":"var(--glass-bg)"}),w()})}),d.querySelectorAll(".offense-btn").forEach(p=>{p.addEventListener("click",()=>{h.offenseId=p.dataset.id,d.querySelectorAll(".offense-btn").forEach(m=>{m.style.background=m.dataset.id===h.offenseId?"rgba(255,69,58,0.12)":"",m.style.borderColor=m.dataset.id===h.offenseId?"rgba(255,69,58,0.4)":"",m.style.color=m.dataset.id===h.offenseId?"var(--red)":""}),w()})});async function w(){const p=d.querySelector("#conduct-preview"),m=d.querySelector("#btn-conduct-submit");if(!h.receiver||!h.tier||!h.offenseId){p.classList.add("hidden"),m.disabled=!0;return}p.innerHTML='<div class="spinner" style="margin:0 auto;"></div>',p.classList.remove("hidden");const v=Tn[h.tier],x=pe(),R=await lr(h.receiver.id,x,h.offenseId)+1,M=Math.pow(2,R-1),L=v.base_db*M,B=L*cs,st=["1st","2nd","3rd","4th","5th"][R-1]||`${R}th`,Nt=f.find(pr=>pr.id===h.offenseId);p.innerHTML=`
        <p style="font-size:0.75rem;color:var(--text-secondary);margin-bottom:4px;">${h.receiver.name} · ${(Nt==null?void 0:Nt.name)||""}</p>
        <p style="font-size:0.8rem;color:var(--text-secondary);margin-bottom:12px;">
          ${st} offense this month
          ${R>1?`<span style="color:var(--red);"> · ${M}× escalation</span>`:""}
        </p>
        <div class="mono" style="font-size:2.2rem;color:var(--red);">${v.icon} ${L}</div>
        <p style="font-size:0.8rem;color:var(--text-secondary);margin-top:4px;">${v.label} · ${L} Dark Bean${L!==1?"s":""}</p>
        <p class="text-dim text-sm mt-8">= −${B} pts from monthly score</p>
      `,m.disabled=!1}const E=d.querySelector("#conduct-error"),O=d.querySelector("#btn-conduct-submit");O.addEventListener("click",async()=>{if(!(!h.receiver||!h.tier||!h.offenseId)){O.disabled=!0,O.textContent="Issuing…",E.classList.add("hidden");try{const p=pe(),m=Mg(),v=Tn[h.tier],x=f.find(Ve=>Ve.id===h.offenseId),M=(await Bl(h.receiver.id,p)).filter(Ve=>Ve.offense_id===h.offenseId&&!Ve.revoked),L=await Hl(h.receiver.id,p,h.offenseId),B=Math.pow(2,L-1),te=v.base_db*B,st=te*cs;await Ul({giver_id:e.id,giver_name:e.name,receiver_id:h.receiver.id,offense_id:h.offenseId,conduct_tier:h.tier,db_count:te,pts_deducted:st,month_key:p,note:d.querySelector("#inp-conduct-note").value.trim(),instance:L,multiplier:B});const Nt=await Ql(h.receiver.id,te,st,p);await Jl(h.receiver.id,st),M.filter(Ve=>{const xi=new Date(Ve.timestamp),Cc=`${xi.getFullYear()}-${String(xi.getMonth()+1).padStart(2,"0")}-${String(xi.getDate()).padStart(2,"0")}`;return Ve.giver_id!==e.id&&Cc===m}).length>0&&await Mt({type:"cross_conduct",receiver_id:h.receiver.id,giver_id:e.id,suggestion_text:`${h.receiver.name} received "${x==null?void 0:x.name}" conduct from multiple managers on the same day. Possible duplicate issuance.`,suggestion:"Confirm with both managers this is not a duplicate. Consider revoking one."}).catch(()=>{}),M.length>=3&&await Mt({type:"conduct_frequency",receiver_id:h.receiver.id,giver_id:e.id,suggestion_text:`${h.receiver.name} has now received "${x==null?void 0:x.name}" conduct ${M.length+1} times this month.`,suggestion:"High frequency of same conduct. Escalate to formal HR review or disciplinary process."}).catch(()=>{});const mr=Nt.db_count||0,Si=vc(mr);Si&&await Mt({type:"db_threshold",receiver_id:h.receiver.id,giver_id:e.id,suggestion_text:`${h.receiver.name} has accumulated ${mr} Dark Beans this month (${Si.replace(/_/g," ")}).`,suggestion:Si==="disciplinary"?"Consider formal disciplinary action.":"Review conduct history and consider counselling."}).catch(()=>{}),d.innerHTML=`
          <div class="text-center" style="padding:60px 20px;">
            <div style="font-size:3rem;margin-bottom:16px;">${v.icon}</div>
            <h2 style="margin-bottom:8px;color:var(--red);">Conduct Logged</h2>
            <p class="text-dim">${te} Dark Bean${te!==1?"s":""} issued to <strong>${h.receiver.name}</strong></p>
            <p class="text-dim text-sm mt-4">${(x==null?void 0:x.name)||""} · ${v.label}${L>1?` · ${B}× escalation`:""}</p>
            <p class="text-dim text-sm mt-4">−${st} pts deducted from their monthly score</p>
            <button class="btn btn-ghost mt-24" id="btn-conduct-again">Issue Another</button>
          </div>
        `,d.querySelector("#btn-conduct-again").addEventListener("click",c)}catch(p){E.textContent="Failed to submit. Try again.",E.classList.remove("hidden"),O.disabled=!1,O.textContent="Issue Conduct",console.error(p)}}})}}async function t_(n,e,t){const i=se(e.role);n.innerHTML=`
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
  `;let s="flags";const r=n.querySelector("#audit-content");n.querySelectorAll(".audit-tab").forEach(u=>{u.addEventListener("click",()=>{s=u.dataset.tab,n.querySelectorAll(".audit-tab").forEach(f=>{f.className=f.dataset.tab===s?"btn btn-primary audit-tab":"btn btn-ghost audit-tab",f.style.flex="1",f.style.padding="10px"}),o(s)})});async function o(u){r.innerHTML='<div class="loading-center" style="min-height:30vh;"><div class="spinner"></div></div>',u==="flags"&&await a(),u==="log"&&await l(),u==="votes"&&await c(),u==="reset"&&d()}async function a(){try{const[u,f]=await Promise.all([Vl(),oe()]),h=u.filter(_=>_.status==="open"),g=u.filter(_=>_.status!=="open");if(!u.length){r.innerHTML=`
          <div class="empty-state">
            <div class="icon">✅</div>
            <p>No flags. System looks clean.</p>
          </div>
        `;return}r.innerHTML=`
        ${h.length?`
          <p class="section-header mb-8">Open (${h.length})</p>
          ${h.map(_=>So(_,!1,f)).join("")}
        `:""}
        ${g.length?`
          <p class="section-header mt-16 mb-8">Resolved (${g.length})</p>
          ${g.map(_=>So(_,!0,f)).join("")}
        `:""}
      `,r.querySelectorAll(".flag-action-btn").forEach(_=>{_.addEventListener("click",async()=>{const{flagId:b,action:C}=_.dataset;_.disabled=!0,await Wl(b,C,e.id),await o("flags")})})}catch{r.innerHTML='<p class="text-dim text-sm text-center">Failed to load flags.</p>'}}async function l(){try{const u="https://who-s-the-queen-bee-default-rtdb.asia-southeast1.firebasedatabase.app",[f,h,g,_,b]=await Promise.all([oe(),gn(),At(),fetch(`${u}/awards.json`).then(p=>p.json()),fetch(`${u}/dark_beans.json`).then(p=>p.json())]),C=_?Object.entries(_).map(([p,m])=>({id:p,kind:"award",...m})):[],w=b?Object.entries(b).map(([p,m])=>({id:p,kind:"conduct",...m})):[],E=[...C,...w].sort((p,m)=>m.timestamp-p.timestamp);if(!E.length){r.innerHTML=`
          <div class="empty-state">
            <div class="icon">📋</div>
            <p class="text-dim">No activity recorded yet.</p>
          </div>
        `;return}const O={green:"🟢",silver:"🟠",gold:"🔴",crystal:"⚫"};r.innerHTML=`
        <p class="section-header" style="margin-bottom:12px;">
          Full Log — ${C.length} awards · ${w.length} conduct
        </p>
        ${E.map(p=>{const m=f[p.receiver_id],v=f[p.giver_id],x=(v==null?void 0:v.name)||p.giver_name||p.giver_id||"—",R=(v==null?void 0:v.role)||"";if(p.kind==="award"){const M=ue[p.bean_type]||{icon:"🫘",label:p.bean_type},L=h[p.action_id],B=p.points_value*(p.quantity||1);return`
              <div class="lb-row" style="margin-bottom:8px;flex-direction:column;align-items:flex-start;gap:6px;">
                <div style="display:flex;justify-content:space-between;align-items:center;width:100%;">
                  <div style="display:flex;align-items:center;gap:10px;">
                    <span style="font-size:1.3rem;">${M.icon}</span>
                    <div>
                      <p style="font-size:0.9rem;font-weight:600;">${(m==null?void 0:m.name)||p.receiver_id}</p>
                      <p class="text-dim" style="font-size:0.75rem;">${(m==null?void 0:m.role)||""} · ${(m==null?void 0:m.outlet)||""}</p>
                    </div>
                  </div>
                  <span class="mono text-gold" style="font-size:0.9rem;">+${B} pts</span>
                </div>
                <div style="display:flex;justify-content:space-between;width:100%;">
                  <p class="text-dim" style="font-size:0.75rem;">
                    By <span style="color:var(--text-secondary);font-weight:600;">${x}</span>
                    <span style="color:var(--text-tertiary);"> (${R})</span>
                    · ${(L==null?void 0:L.name)||p.action_id||""}
                    ${p.reason_text?`· "${p.reason_text}"`:""}
                  </p>
                  <p class="text-dim" style="font-size:0.75rem;flex-shrink:0;margin-left:8px;">${Et(p.timestamp)}</p>
                </div>
              </div>
            `}else{const M=g[p.offense_id],L=O[p.conduct_tier]||"🌑",B=p.revoked?'<span style="color:var(--text-tertiary);font-size:0.7rem;"> · revoked</span>':"";return`
              <div class="lb-row" style="margin-bottom:8px;flex-direction:column;align-items:flex-start;gap:6px;${p.revoked?"opacity:0.45;":"border-color:rgba(255,69,58,0.25);"}">
                <div style="display:flex;justify-content:space-between;align-items:center;width:100%;">
                  <div style="display:flex;align-items:center;gap:10px;">
                    <span style="font-size:1.3rem;">${L}</span>
                    <div>
                      <p style="font-size:0.9rem;font-weight:600;">${(m==null?void 0:m.name)||p.receiver_id}${B}</p>
                      <p class="text-dim" style="font-size:0.75rem;">${(m==null?void 0:m.role)||""} · ${(m==null?void 0:m.outlet)||""}</p>
                    </div>
                  </div>
                  <span class="mono" style="font-size:0.9rem;color:var(--red);">−${p.pts_deducted} pts</span>
                </div>
                <div style="display:flex;justify-content:space-between;width:100%;">
                  <p class="text-dim" style="font-size:0.75rem;">
                    By <span style="color:var(--text-secondary);font-weight:600;">${x}</span>
                    <span style="color:var(--text-tertiary);"> (${R})</span>
                    · ${(M==null?void 0:M.name)||p.offense_id||"Conduct"}
                    ${p.note?`· "${p.note}"`:""}
                    · ${p.db_count} DB${p.db_count!==1?"s":""}
                    ${p.instance>1?`· ${p.multiplier}× escalation`:""}
                  </p>
                  <p class="text-dim" style="font-size:0.75rem;flex-shrink:0;margin-left:8px;">${Et(p.timestamp)}</p>
                </div>
              </div>
            `}}).join("")}
      `}catch{r.innerHTML='<p class="text-dim text-sm text-center">Failed to load log.</p>'}}async function c(){try{const u=pe(),[f,h]=await Promise.all([oe(),_n(u)]),_=Object.values(f).filter(p=>p.active!==!1).length,b=Object.keys(h).length,C=_>0?Math.round(b/_*100):0,w={};Object.values(h).forEach(p=>{w[p]=(w[p]||0)+1});const E=Object.entries(w).map(([p,m])=>({id:p,count:m,emp:f[p]||{}})).sort((p,m)=>m.count-p.count),O=["🥇","🥈","🥉"];r.innerHTML=`
        <p class="section-header" style="margin-bottom:12px;">📊 Voting — ${new Date().toLocaleDateString("en-IN",{month:"long",year:"numeric"})}</p>

        <!-- Turnout card -->
        <div class="card mb-16" style="padding:20px;text-align:center;">
          <div class="mono text-gold" style="font-size:2.8rem;font-weight:400;">${C}%</div>
          <p style="font-size:0.88rem;margin-top:4px;">votes cast</p>
          <p class="text-dim text-sm mt-4">${b} of ${_} staff have voted</p>
          <div style="margin-top:14px;height:8px;border-radius:4px;background:var(--border);overflow:hidden;">
            <div style="height:100%;border-radius:4px;background:var(--gold);width:${C}%;transition:width 0.6s;"></div>
          </div>
        </div>

        ${E.length===0?`
          <div class="empty-state">
            <div class="icon">🗳️</div>
            <p class="text-dim">No votes cast yet this month</p>
          </div>
        `:`
          <p class="section-header" style="margin-bottom:10px;">Nominee Standings</p>
          ${E.map((p,m)=>{const v=b>0?Math.round(p.count/b*100):0;return`
              <div class="lb-row mb-8" style="flex-direction:column;align-items:stretch;gap:8px;padding:14px;">
                <div style="display:flex;align-items:center;gap:10px;">
                  <span style="font-size:1.2rem;min-width:28px;">${O[m]||`#${m+1}`}</span>
                  <div style="flex:1;">
                    <p style="font-weight:600;">${p.emp.name||p.id}</p>
                    <p class="text-dim" style="font-size:0.75rem;">${p.emp.role||""} · ${p.emp.outlet||""}</p>
                  </div>
                  <div style="text-align:right;">
                    <p class="mono text-gold" style="font-size:1rem;">${p.count}</p>
                    <p class="text-dim" style="font-size:0.7rem;">votes</p>
                  </div>
                </div>
                <div>
                  <div style="height:6px;border-radius:3px;background:var(--border);overflow:hidden;margin-bottom:3px;">
                    <div style="height:100%;border-radius:3px;background:var(--gold);width:${v}%;transition:width 0.5s;"></div>
                  </div>
                  <p class="text-dim" style="font-size:0.7rem;">${v}% of votes cast</p>
                </div>
              </div>
            `}).join("")}
        `}
      `}catch{r.innerHTML='<p class="text-dim text-sm text-center">Failed to load vote data.</p>'}}function d(){r.innerHTML=`
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
    `,r.querySelector("#btn-nuke-data").addEventListener("click",async()=>{const u=r.querySelector("#inp-confirm-data").value.trim(),f=r.querySelector("#btn-nuke-data"),h=r.querySelector("#status-data");if(u!=="RESET"){h.textContent='Type exactly "RESET" to confirm.',h.style.color="var(--red)",h.classList.remove("hidden");return}f.disabled=!0,f.textContent="Clearing…";try{await sc(),h.textContent="✓ All activity data cleared.",h.style.color="var(--green)",h.classList.remove("hidden"),f.textContent="Done"}catch{h.textContent="Failed. Try again.",h.style.color="var(--red)",h.classList.remove("hidden"),f.disabled=!1,f.textContent="Clear Activity Data"}}),r.querySelector("#btn-nuke-staff").addEventListener("click",async()=>{const u=r.querySelector("#inp-confirm-staff").value.trim(),f=r.querySelector("#btn-nuke-staff"),h=r.querySelector("#status-staff");if(u!=="DELETE ALL"){h.textContent='Type exactly "DELETE ALL" to confirm.',h.style.color="var(--red)",h.classList.remove("hidden");return}f.disabled=!0,f.textContent="Clearing…";try{await rc(),h.textContent="✓ All staff accounts cleared. Re-add using Bulk Import.",h.style.color="var(--green)",h.classList.remove("hidden"),f.textContent="Done"}catch{h.textContent="Failed. Try again.",h.style.color="var(--red)",h.classList.remove("hidden"),f.disabled=!1,f.textContent="Clear Staff Accounts Too"}})}await o(s)}function So(n,e=!1,t={}){const s={bias_concentration:"🚩 Award Bias — Same Receiver",db_threshold:"🚩 Dark Bean Threshold",cross_conduct:"🚩 Duplicate Conduct — Same Day",conduct_frequency:"🚩 Conduct Frequency — 4+ Same Offense",consecutive_db:"🚩 Consecutive DB Flag",ceiling_breach:"🚩 Ceiling Hit Flag",crystal_frequency:"🚩 Crystal Bean Frequency",cross_flag:"🚩 Relationship Flag"}[n.type]||`🚩 ${n.type}`,r=t[n.giver_id],o=t[n.receiver_id],a=(r==null?void 0:r.name)||n.giver_name||n.giver_id||null,l=(r==null?void 0:r.role)||"",c=(o==null?void 0:o.name)||n.receiver_id||null;return`
    <div class="flag-card" style="${e?"opacity:0.5;":""}">
      <div class="flex justify-between items-center mb-8">
        <strong style="font-size:0.9rem;">${s}</strong>
        <span class="text-xs text-dim">${Et(n.timestamp)}</span>
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

      <p style="font-size:0.875rem;line-height:1.5;">${n.suggestion_text||n_(n)}</p>
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
  `}function n_(n){if(n.data_snapshot){const e=n.data_snapshot;return`Giver: ${e.giverName||n.giver_id} · Receiver: ${e.receiverName||n.receiver_id}`}return`Flag ID: ${n.id}`}const i_=[...Ei,...Ci,...Ii];function s_(n,e){const t=se(e.role)||e.role==="HR";n.innerHTML=`
    <div class="page">
      <h1 style="font-size:1.4rem;margin-bottom:4px;">Staff Management</h1>
      <div class="flex gap-8 mb-16" id="approval-tabs" style="margin-top:12px;">
        <button class="btn btn-primary approval-tab" data-tab="pending" style="flex:1;padding:8px;font-size:0.8rem;">✋ Approvals</button>
        <button class="btn btn-ghost  approval-tab" data-tab="revokes" style="flex:1;padding:8px;font-size:0.8rem;" id="tab-revokes">↩ Revokes</button>
        ${t?'<button class="btn btn-ghost approval-tab" data-tab="bulk" style="flex:1;padding:8px;font-size:0.8rem;">📥 Bulk Add</button>':""}
      </div>
      <div id="approvals-content"></div>
    </div>
  `;let i=null;function s(l){n.querySelectorAll(".approval-tab").forEach(c=>{c.className=c.dataset.tab===l?"btn btn-primary approval-tab":"btn btn-ghost approval-tab",c.style.flex="1",c.style.padding="10px"}),i&&(i(),i=null),l==="pending"?r():l==="revokes"?o():a()}n.querySelectorAll(".approval-tab").forEach(l=>{l.addEventListener("click",()=>s(l.dataset.tab))}),Jn(l=>{const c=n.querySelector('.approval-tab[data-tab="pending"]');c&&(c.innerHTML=`✋ Approvals ${l.length>0?`<span style="background:#fff2;border-radius:10px;padding:1px 7px;font-size:0.72rem;margin-left:4px;">${l.length}</span>`:""}`)}),Xn(l=>{const c=n.querySelector('.approval-tab[data-tab="revokes"]');c&&(c.innerHTML=`↩ Revokes ${l.length>0?`<span style="background:#fff2;border-radius:10px;padding:1px 7px;font-size:0.72rem;margin-left:4px;">${l.length}</span>`:""}`)}),r();function r(){const l=n.querySelector("#approvals-content");l.innerHTML='<div class="loading-center" style="min-height:30vh;"><div class="spinner"></div></div>',i=Jn(c=>{if(c.length===0){l.innerHTML=`
          <div class="empty-state">
            <div class="icon">✅</div>
            <p class="text-dim">No pending requests</p>
            <p class="text-dim text-sm mt-8">Share the app link and staff can self-register.</p>
          </div>
        `;return}l.innerHTML=c.map(d=>`
        <div class="card" style="margin-bottom:12px;" data-id="${d.id}">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
            <div>
              <p style="color:#fff;font-weight:600;margin-bottom:2px;">${d.name}</p>
              <p class="text-dim text-sm">${d.email}</p>
            </div>
            <span class="badge badge-gold" style="font-size:0.7rem;">${d.role}</span>
          </div>
          <p class="text-dim text-sm" style="margin-bottom:16px;">
            Outlet: <span style="color:var(--text-primary);">${d.outlet}</span>
            &nbsp;·&nbsp; ${a_(d.submitted_at)}
          </p>
          <div class="flex gap-8">
            <button class="btn btn-primary btn-approve" data-id="${d.id}" style="flex:1;height:40px;font-size:0.85rem;">Approve</button>
            <button class="btn btn-ghost btn-reject"   data-id="${d.id}" style="flex:1;height:40px;font-size:0.85rem;border-color:rgba(255,69,58,0.3);color:var(--red);">Reject</button>
          </div>
        </div>
      `).join(""),l.querySelectorAll(".btn-approve").forEach(d=>{d.addEventListener("click",async()=>{const u=c.find(f=>f.id===d.dataset.id);d.disabled=!0,d.textContent="Approving…",await Kl(d.dataset.id,u,e.name)})}),l.querySelectorAll(".btn-reject").forEach(d=>{d.addEventListener("click",async()=>{d.disabled=!0,d.textContent="Rejecting…",await Yl(d.dataset.id,e.name)})})})}function o(){const l=n.querySelector("#approvals-content");l.innerHTML='<div class="loading-center" style="min-height:30vh;"><div class="spinner"></div></div>';let c=null;(async()=>{const[u,f]=await Promise.all([oe(),At()]);c=Xn(h=>{if(h.length===0){l.innerHTML=`
            <div class="empty-state">
              <div class="icon">✅</div>
              <p class="text-dim">No pending revoke requests</p>
            </div>
          `;return}const g={green:"🟢 Minor",silver:"🟠 Moderate",gold:"🔴 Serious",crystal:"⚫ Severe"};l.innerHTML=h.map(_=>{const b=u[_.receiver_id],C=f[_.offense_id];return`
            <div class="card" style="margin-bottom:12px;border-color:rgba(255,69,58,0.25);" data-id="${_.id}">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
                <div>
                  <p style="font-weight:600;margin-bottom:2px;">${(b==null?void 0:b.name)||_.receiver_id}</p>
                  <p class="text-dim text-sm">${(C==null?void 0:C.name)||_.offense_id} · ${g[_.conduct_tier]||_.conduct_tier}</p>
                </div>
                <span style="color:var(--red);font-family:monospace;font-size:0.9rem;">−${_.pts_deducted} pts</span>
              </div>
              <p class="text-dim text-sm" style="margin-bottom:6px;">Requested by: <span style="color:var(--text-primary);">${_.giver_name}</span></p>
              <div style="background:rgba(255,255,255,0.04);border-radius:8px;padding:10px;margin-bottom:12px;">
                <p style="font-size:0.82rem;color:var(--text-secondary);">Reason: "${_.reason}"</p>
              </div>
              <p class="text-dim" style="font-size:0.72rem;margin-bottom:12px;">If approved: ${_.pts_deducted} pts will be restored to ${(b==null?void 0:b.name)||"employee"}</p>
              <div class="flex gap-8">
                <button class="btn btn-primary btn-revoke-approve" data-id="${_.id}" style="flex:1;height:40px;font-size:0.85rem;">Approve & Restore</button>
                <button class="btn btn-ghost btn-revoke-reject"   data-id="${_.id}" style="flex:1;height:40px;font-size:0.85rem;border-color:rgba(255,69,58,0.3);color:var(--red);">Reject</button>
              </div>
            </div>
          `}).join(""),l.querySelectorAll(".btn-revoke-approve").forEach(_=>{_.addEventListener("click",async()=>{const b=h.find(C=>C.id===_.dataset.id);_.disabled=!0,_.textContent="Approving…",await nc(_.dataset.id,b,e.name)})}),l.querySelectorAll(".btn-revoke-reject").forEach(_=>{_.addEventListener("click",async()=>{_.disabled=!0,_.textContent="Rejecting…",await ic(_.dataset.id,e.name)})})})})(),n._revokeUnsub=c}function a(){const l=n.querySelector("#approvals-content"),c=5;l.innerHTML=`
      <div class="card mb-16" style="padding:14px 16px;background:rgba(201,168,76,0.06);border-color:rgba(201,168,76,0.2);">
        <p style="font-size:0.82rem;color:var(--text-secondary);line-height:1.5;">
          Add up to ${c} staff at once. They'll be added directly — no approval needed.
          PIN must be 4 digits. Leave empty rows blank.
        </p>
      </div>

      <div id="bulk-rows">
        ${Array.from({length:c},(d,u)=>r_(u)).join("")}
      </div>

      <p id="bulk-status" class="text-sm text-center hidden" style="margin:12px 0;"></p>
      <button class="btn btn-primary w-full mt-8" id="btn-bulk-submit" style="height:54px;font-size:1rem;">
        Add Staff
      </button>
    `,n.querySelector("#btn-bulk-submit").addEventListener("click",async()=>{const d=n.querySelector("#btn-bulk-submit"),u=n.querySelector("#bulk-status"),f=[];if(n.querySelectorAll(".bulk-row").forEach(h=>{const g=h.querySelector(".b-name").value.trim(),_=h.querySelector(".b-email").value.trim(),b=h.querySelector(".b-role").value,C=h.querySelector(".b-outlet").value,w=h.querySelector(".b-pin").value.trim();g&&b&&C&&w.length===4&&f.push({name:g,email:_,role:b,outlet:C,pin:w})}),f.length===0){u.textContent="Fill in at least one row with name, role, outlet and 4-digit PIN.",u.style.color="var(--red)",u.classList.remove("hidden");return}d.disabled=!0,d.textContent=`Adding ${f.length} staff…`,u.classList.add("hidden");try{for(const h of f){const g=await o_(h.pin),_="emp_"+Math.random().toString(36).slice(2,10);await _i(_,{name:h.name,email:h.email||"",role:h.role,outlet:h.outlet,pin_hash:g,active:!0})}u.textContent=`✓ ${f.length} staff added successfully!`,u.style.color="var(--green)",u.classList.remove("hidden"),n.querySelectorAll(".bulk-row input, .bulk-row select").forEach(h=>{h.tagName==="SELECT"?h.selectedIndex=0:h.value=""}),d.textContent="Add Staff",d.disabled=!1}catch(h){u.textContent="Failed. Check connection and try again.",u.style.color="var(--red)",u.classList.remove("hidden"),d.textContent="Add Staff",d.disabled=!1,console.error(h)}})}}function r_(n){const e=i_.map(i=>`<option value="${i}">${i}</option>`).join(""),t=ur.map(i=>`<option value="${i.id}">${i.id} – ${i.name}</option>`).join("");return`
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
  `}async function o_(n){const e=new TextEncoder().encode(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function a_(n){const e=Date.now()-n,t=Math.floor(e/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;const i=Math.floor(t/60);return i<24?`${i}h ago`:`${Math.floor(i/24)}d ago`}async function l_(n,e){const t=pe(),i=$g();n.innerHTML=`
    <div class="page">
      <h1 style="font-size:1.4rem;margin-bottom:4px;">👑 Queen Bee Vote</h1>
      <p class="text-dim text-sm" style="margin-bottom:20px;">${u_()} · Voting Open</p>
      <div id="vote-content">
        <div class="loading-center" style="min-height:40vh;"><div class="spinner"></div></div>
      </div>
    </div>
  `;const s=n.querySelector("#vote-content");try{const[r,o,a,l]=await Promise.all([oe(),xn(t,e.id),bi(),yi(t)]),c=vi(t,f=>{u(f,r,o)}),d=new MutationObserver(()=>{document.contains(s)||(c(),d.disconnect())});d.observe(document.body,{childList:!0,subtree:!0});async function u(f,h,g){const _=Object.entries(f).map(([p,m])=>({id:p,...m,emp:h[p]||{}})).filter(p=>p.emp.active!==!1&&p.emp.role&&d_(p.emp.role)).sort((p,m)=>(m.net_points||m.points||0)-(p.net_points||p.points||0)).slice(0,5).map((p,m)=>({...p,rank:m+1}));let b=_.map(p=>l&&l.employee_id&&p.id===l.employee_id?{...p,isWildcard:!0,wildcardNominatedBy:l.nominated_by_name}:p);if(l&&l.employee_id&&!_.find(p=>p.id===l.employee_id)){const p=h[l.employee_id]||{},m=f[l.employee_id]||{};b.push({id:l.employee_id,emp:p,net_points:m.net_points||m.points||0,rank:6,isWildcard:!0,wildcardNominatedBy:l.nominated_by_name})}if(b.length===0){s.innerHTML=`
          <div class="empty-state">
            <div style="font-size:2.5rem;margin-bottom:12px;">🏆</div>
            <p class="text-dim">No nominees yet — earn beans to qualify!</p>
          </div>
        `;return}const C=se(e.role)?await _n(t):{},w={};Object.values(C).forEach(p=>{w[p]=(w[p]||0)+1});const E=Object.values(w).reduce((p,m)=>p+m,0),O=!!g||await xn(t,e.id);s.innerHTML=`
        ${O?`
          <div class="card mb-16" style="text-align:center;padding:20px 16px;background:rgba(48,209,88,0.06);border-color:rgba(48,209,88,0.3);">
            <div style="font-size:1.6rem;margin-bottom:8px;">🐝</div>
            <p style="color:var(--green);font-weight:600;margin-bottom:4px;">Your vote is in!</p>
            <p class="text-dim text-sm" style="margin-bottom:8px;">Your vote is anonymous — we won't tell anyone who you voted for. Thank you!</p>
            <p style="font-size:0.82rem;color:var(--gold);">+25 pts added to your score 🌟</p>
            ${se(e.role)?`<p class="text-dim text-sm mt-8">${E} vote${E!==1?"s":""} cast so far</p>`:""}
          </div>
        `:`
          <div class="card mb-16" style="padding:14px 16px;">
            <p style="font-size:0.88rem;">Tap a nominee to cast your vote. <strong>You only get one vote.</strong></p>
          </div>
        `}
        ${b.map(p=>c_(p,!O,g,se(e.role),w,E)).join("")}
        ${se(e.role)?`
          <div class="card mt-16" style="padding:16px;">
            <p class="section-header" style="margin-bottom:8px;">Total Votes Cast</p>
            <div class="mono text-gold" style="font-size:2rem;">${E}</div>
          </div>
        `:""}
      `,!O&&i&&s.querySelectorAll(".nominee-vote-btn").forEach(p=>{p.addEventListener("click",async()=>{const m=p.dataset.id;p.disabled=!0;try{const v=await xn(t,e.id);await zl(t,e.id,m),!v&&a.voting_points_enabled!==!1&&await Promise.all([rr(e.id,25),or(e.id,25)]),u(f,h,m)}catch(v){p.disabled=!1,console.error(v)}})}),se(e.role)&&Object.keys(C).length>0&&s.querySelectorAll(".nominee-card-wrap").forEach(p=>{p.style.cursor="pointer",p.addEventListener("click",()=>{const m=p.dataset.nomineeId,v=h[m]||{},x=Object.entries(C).filter(([,B])=>B===m).map(([B])=>B),R=x.map(B=>{var te;return((te=h[B])==null?void 0:te.name)||B}),M=s.querySelector(".voter-modal");M&&M.remove();const L=document.createElement("div");L.className="voter-modal",L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:999;display:flex;align-items:flex-end;",L.innerHTML=`
              <div style="background:var(--card-bg);border-radius:20px 20px 0 0;width:100%;max-height:70vh;overflow-y:auto;padding:20px;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
                  <div>
                    <p style="font-weight:700;color:var(--gold);">Votes for ${v.name||m}</p>
                    <p class="text-dim text-sm">${x.length} vote${x.length!==1?"s":""} received</p>
                  </div>
                  <button class="btn btn-ghost close-modal" style="padding:6px 12px;font-size:0.8rem;">Close</button>
                </div>
                ${R.length===0?'<p class="text-dim text-sm">No votes yet.</p>':R.map((B,te)=>`
                    <div class="lb-row" style="margin-bottom:6px;">
                      <span style="font-size:0.8rem;color:var(--text-tertiary);width:24px;">${te+1}</span>
                      <p style="font-size:0.9rem;">${B}</p>
                    </div>
                  `).join("")}
              </div>
            `,L.querySelector(".close-modal").addEventListener("click",()=>L.remove()),L.addEventListener("click",B=>{B.target===L&&L.remove()}),document.body.appendChild(L)})})}}catch{s.innerHTML='<p class="text-dim text-sm text-center">Failed to load. Check connection.</p>'}}function c_(n,e,t,i,s,r){var b;const o=n.net_points||n.points||0,a=n.emp,l=n.rank===1&&!n.isWildcard,c=s[n.id]||0,d=r>0?Math.round(c/r*100):0,u=(a.name||"??").split(" ").map(C=>C[0]).join("").slice(0,2).toUpperCase(),f=["#8B5E3C","#5E6E8B","#5E8B6E","#8B5E7A","#7A8B5E","#6E5E8B","#8B7A5E"],h=f[(a.name||"").charCodeAt(0)%f.length],g={1:"👑",2:"🥈",3:"🥉"},_=n.isWildcard?"⭐":g[n.rank]||`#${n.rank}`;return`
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
        <div style="font-size:1.4rem;min-width:32px;text-align:center;">${_}</div>
        ${a.photo_url?`<img src="${a.photo_url}" style="width:42px;height:42px;clip-path:polygon(50% 0%,95% 25%,95% 75%,50% 100%,5% 75%,5% 25%);object-fit:cover;flex-shrink:0;" />`:`<div style="width:42px;height:42px;clip-path:polygon(50% 0%,95% 25%,95% 75%,50% 100%,5% 75%,5% 25%);background:${h};display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:0.85rem;flex-shrink:0;">${u}</div>`}
        <div style="flex:1;">
          <p style="font-weight:${l?"600":"400"};${l?"color:var(--gold);":""}">${a.name||n.id}</p>
          <p class="text-dim" style="font-size:0.75rem;">${a.role||""} · ${a.outlet||""}</p>
        </div>
        <div class="mono text-gold" style="font-size:0.9rem;">${Qe(o)} <span style="font-size:0.7rem;color:var(--text-tertiary);">pts</span></div>
      </div>

      ${i?`
        <div>
          <div style="height:6px;border-radius:3px;background:var(--border);overflow:hidden;margin-bottom:4px;">
            <div style="height:100%;border-radius:3px;background:var(--gold);width:${d}%;transition:width 0.5s;"></div>
          </div>
          <p class="text-dim" style="font-size:0.72rem;">${c} vote${c!==1?"s":""} · ${d}%</p>
        </div>
      `:""}

      ${e?`
        <button class="btn nominee-vote-btn" data-id="${n.id}"
          style="padding:10px;background:rgba(201,168,76,0.12);color:var(--gold);border:1px solid rgba(201,168,76,0.3);border-radius:var(--radius-md);font-size:0.88rem;cursor:pointer;">
          Vote for ${((b=a.name)==null?void 0:b.split(" ")[0])||"them"} 👑
        </button>
      `:""}
    </div>
    </div>
  `}function d_(n){return["Trainee","Barista","Senior Barista","Kitchen Helper","Commi 3","Commi 2","Commi 1","DCDP","CDP"].includes(n)}function u_(){return new Date().toLocaleDateString("en-IN",{month:"long",year:"numeric"})}function h_(n,e,t,i){const s=e.role;t.db_toggle;const r=f_(s);n.innerHTML=`
    <div id="screen-container"></div>
    <nav class="nav-bar" id="nav-bar">
      ${r.map(({id:c,icon:d,label:u})=>`
        <div class="nav-item" data-screen="${c}">
          ${d}
          <span>${u}</span>
        </div>
      `).join("")}
    </nav>
  `;const o=n.querySelector("#screen-container");r[0].id;function a(c){n.querySelectorAll(".nav-item").forEach(d=>{d.classList.toggle("active",d.dataset.screen===c)}),l(c)}function l(c){switch(o.innerHTML="",c){case"dashboard":Ug(o,e,t,{onLogout:i,navigate:a});break;case"leaderboard":Yg(o,e);break;case"award":e_(o,e);break;case"audit":t_(o,e);break;case"approvals":s_(o,e);break;case"vote":l_(o,e);break;default:o.innerHTML=`
          <div class="page">
            <div class="empty-state">
              <div class="icon">🚧</div>
              <p class="text-dim">This screen is coming in a future phase.</p>
            </div>
          </div>
        `}}if(n.querySelectorAll(".nav-item").forEach(c=>{c.addEventListener("click",()=>a(c.dataset.screen))}),a(r[0].id),se(s)||ct(s)){let c=0,d=0;const u=()=>{const f=n.querySelector('.nav-item[data-screen="approvals"]');if(!f)return;const h=f.querySelector(".pending-badge");h&&h.remove();const g=c+d;if(g>0){const _=document.createElement("span");_.className="pending-badge",_.textContent=g,f.appendChild(_)}};Jn(f=>{c=f.length,u()}),Xn(f=>{d=f.length,u()})}}function f_(n,e){const t=[{id:"dashboard",icon:p_(),label:"Home"},{id:"leaderboard",icon:m_(),label:"Board"}];return(hr(n)||ct(n))&&t.push({id:"award",icon:g_(),label:ct(n)?"Conduct":"Award"}),(ct(n)||se(n))&&t.push({id:"audit",icon:__(),label:"Audit"}),(se(n)||ct(n))&&t.push({id:"approvals",icon:v_(),label:"Staff"}),t.push({id:"vote",icon:y_(),label:"Vote"}),t}function p_(){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>`}function m_(){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="3" y="12" width="4" height="9" rx="1"/>
    <rect x="10" y="7" width="4" height="14" rx="1"/>
    <rect x="17" y="4" width="4" height="17" rx="1"/>
  </svg>`}function g_(){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <circle cx="12" cy="10" r="6"/>
    <path d="M8.5 17.5L7 22h10l-1.5-4.5"/>
  </svg>`}function __(){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M9 11l3 3L22 4"/>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
  </svg>`}function v_(){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <polyline points="16 11 18 13 22 9"/>
  </svg>`}function y_(){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>`}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})});async function fr(){try{await Uu(gg)}catch{}const n=document.getElementById("app"),e=lc();if(!e){bc(n,b_);return}dc();let t={};try{t=await bi()}catch{}try{const[i,s]=await Promise.all([gn(),At()]);Object.keys(i).length===0&&await Promise.all(fc.map(r=>ql(r.id,r))),Object.keys(s).length===0&&await Promise.all(pc.map(r=>jl(r.id,r)))}catch{}h_(n,e,t,w_)}function b_(n){dc(),fr()}function w_(){Rg(),fr()}fr();
//# sourceMappingURL=index-Cw0yep0n.js.map
