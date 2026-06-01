(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var Zs={};/**
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
 */const co={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const m=function(n,e){if(!n)throw gt(e)},gt=function(n){return new Error("Firebase Database ("+co.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const uo=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},rc=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Xi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,d=r>>2,u=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),i.push(t[d],t[u],t[h],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(uo(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):rc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const u=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw new oc;const h=r<<2|a>>4;if(i.push(h),c!==64){const f=a<<4&240|c>>2;if(i.push(f),u!==64){const p=c<<6&192|u;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class oc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ho=function(n){const e=uo(n);return Xi.encodeByteArray(e,!0)},pn=function(n){return ho(n).replace(/\./g,"")},mn=function(n){try{return Xi.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ac(n){return fo(void 0,n)}function fo(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!lc(t)||(n[t]=fo(n[t],e[t]));return n}function lc(n){return n!=="__proto__"}/**
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
 */function cc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dc=()=>cc().__FIREBASE_DEFAULTS__,uc=()=>{if(typeof process>"u"||typeof Zs>"u")return;const n=Zs.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},hc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&mn(n[1]);return e&&JSON.parse(e)},Zi=()=>{try{return dc()||uc()||hc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},po=n=>{var e,t;return(t=(e=Zi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},fc=n=>{const e=po(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},mo=()=>{var n;return(n=Zi())===null||n===void 0?void 0:n.config},go=n=>{var e;return(e=Zi())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Gt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function pc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[pn(JSON.stringify(t)),pn(JSON.stringify(o)),""].join(".")}/**
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
 */function Q(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function es(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Q())}function mc(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function _o(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _c(){const n=Q();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function vc(){return co.NODE_ADMIN===!0}function yc(){try{return typeof indexedDB=="object"}catch{return!1}}function bc(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const wc="FirebaseError";class $e extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=wc,Object.setPrototypeOf(this,$e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kt.prototype.create)}}class Kt{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Ec(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new $e(s,a,i)}}function Ec(n,e){return n.replace(Ic,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Ic=/\{\$([^}]+)}/g;/**
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
 */function Dt(n){return JSON.parse(n)}function q(n){return JSON.stringify(n)}/**
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
 */const vo=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Dt(mn(r[0])||""),t=Dt(mn(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Cc=function(n){const e=vo(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Sc=function(n){const e=vo(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ce(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ct(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ti(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function gn(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function _n(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(er(r)&&er(o)){if(!_n(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function er(n){return n!==null&&typeof n=="object"}/**
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
 */function _t(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class Tc{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)i[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const h=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),d=1518500249):(c=r^o^a,d=1859775393):u<60?(c=r&o|a&(r|o),d=2400959708):(c=r^o^a,d=3395469782);const h=(s<<5|s>>>27)+c+l+d+i[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function xc(n,e){const t=new kc(n,e);return t.subscribe.bind(t)}class kc{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Ac(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=hi),s.error===void 0&&(s.error=hi),s.complete===void 0&&(s.complete=hi);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ac(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function hi(){}function Un(n,e){return`${n} failed: ${e} argument `}/**
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
 */const Rc=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,m(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Bn=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function X(n){return n&&n._delegate?n._delegate:n}class Ve{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Be="[DEFAULT]";/**
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
 */class Nc{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Gt;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Oc(e))try{this.getOrInitializeService({instanceIdentifier:Be})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Be){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Be){return this.instances.has(e)}getOptions(e=Be){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Pc(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Be){return this.component?this.component.multipleInstances?e:Be:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pc(n){return n===Be?void 0:n}function Oc(n){return n.instantiationMode==="EAGER"}/**
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
 */class Lc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Nc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var N;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(N||(N={}));const Dc={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},Mc=N.INFO,Fc={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},$c=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Fc[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ts{constructor(e){this.name=e,this._logLevel=Mc,this._logHandler=$c,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}const Uc=(n,e)=>e.some(t=>n instanceof t);let tr,nr;function Bc(){return tr||(tr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hc(){return nr||(nr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yo=new WeakMap,xi=new WeakMap,bo=new WeakMap,fi=new WeakMap,ns=new WeakMap;function qc(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(ke(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&yo.set(t,n)}).catch(()=>{}),ns.set(e,n),e}function Wc(n){if(xi.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});xi.set(n,e)}let ki={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return xi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||bo.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ke(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function jc(n){ki=n(ki)}function Vc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(pi(this),e,...t);return bo.set(i,e.sort?e.sort():[e]),ke(i)}:Hc().includes(n)?function(...e){return n.apply(pi(this),e),ke(yo.get(this))}:function(...e){return ke(n.apply(pi(this),e))}}function zc(n){return typeof n=="function"?Vc(n):(n instanceof IDBTransaction&&Wc(n),Uc(n,Bc())?new Proxy(n,ki):n)}function ke(n){if(n instanceof IDBRequest)return qc(n);if(fi.has(n))return fi.get(n);const e=zc(n);return e!==n&&(fi.set(n,e),ns.set(e,n)),e}const pi=n=>ns.get(n);function Gc(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=ke(o);return i&&o.addEventListener("upgradeneeded",l=>{i(ke(o.result),l.oldVersion,l.newVersion,ke(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Kc=["get","getKey","getAll","getAllKeys","count"],Yc=["put","add","delete","clear"],mi=new Map;function ir(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(mi.get(e))return mi.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Yc.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Kc.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return mi.set(e,r),r}jc(n=>({...n,get:(e,t,i)=>ir(e,t)||n.get(e,t,i),has:(e,t)=>!!ir(e,t)||n.has(e,t)}));/**
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
 */class Qc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Jc(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Jc(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ai="@firebase/app",sr="0.10.13";/**
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
 */const _e=new ts("@firebase/app"),Xc="@firebase/app-compat",Zc="@firebase/analytics-compat",ed="@firebase/analytics",td="@firebase/app-check-compat",nd="@firebase/app-check",id="@firebase/auth",sd="@firebase/auth-compat",rd="@firebase/database",od="@firebase/data-connect",ad="@firebase/database-compat",ld="@firebase/functions",cd="@firebase/functions-compat",dd="@firebase/installations",ud="@firebase/installations-compat",hd="@firebase/messaging",fd="@firebase/messaging-compat",pd="@firebase/performance",md="@firebase/performance-compat",gd="@firebase/remote-config",_d="@firebase/remote-config-compat",vd="@firebase/storage",yd="@firebase/storage-compat",bd="@firebase/firestore",wd="@firebase/vertexai-preview",Ed="@firebase/firestore-compat",Id="firebase",Cd="10.14.1";/**
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
 */const Ri="[DEFAULT]",Sd={[Ai]:"fire-core",[Xc]:"fire-core-compat",[ed]:"fire-analytics",[Zc]:"fire-analytics-compat",[nd]:"fire-app-check",[td]:"fire-app-check-compat",[id]:"fire-auth",[sd]:"fire-auth-compat",[rd]:"fire-rtdb",[od]:"fire-data-connect",[ad]:"fire-rtdb-compat",[ld]:"fire-fn",[cd]:"fire-fn-compat",[dd]:"fire-iid",[ud]:"fire-iid-compat",[hd]:"fire-fcm",[fd]:"fire-fcm-compat",[pd]:"fire-perf",[md]:"fire-perf-compat",[gd]:"fire-rc",[_d]:"fire-rc-compat",[vd]:"fire-gcs",[yd]:"fire-gcs-compat",[bd]:"fire-fst",[Ed]:"fire-fst-compat",[wd]:"fire-vertex","fire-js":"fire-js",[Id]:"fire-js-all"};/**
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
 */const vn=new Map,Td=new Map,Ni=new Map;function rr(n,e){try{n.container.addComponent(e)}catch(t){_e.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function dt(n){const e=n.name;if(Ni.has(e))return _e.debug(`There were multiple attempts to register component ${e}.`),!1;Ni.set(e,n);for(const t of vn.values())rr(t,n);for(const t of Td.values())rr(t,n);return!0}function is(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ue(n){return n.settings!==void 0}/**
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
 */const xd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ae=new Kt("app","Firebase",xd);/**
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
 */class kd{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ve("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ae.create("app-deleted",{appName:this._name})}}/**
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
 */const vt=Cd;function wo(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ri,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ae.create("bad-app-name",{appName:String(s)});if(t||(t=mo()),!t)throw Ae.create("no-options");const r=vn.get(s);if(r){if(_n(t,r.options)&&_n(i,r.config))return r;throw Ae.create("duplicate-app",{appName:s})}const o=new Lc(s);for(const l of Ni.values())o.addComponent(l);const a=new kd(t,i,o);return vn.set(s,a),a}function Eo(n=Ri){const e=vn.get(n);if(!e&&n===Ri&&mo())return wo();if(!e)throw Ae.create("no-app",{appName:n});return e}function Re(n,e,t){var i;let s=(i=Sd[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_e.warn(a.join(" "));return}dt(new Ve(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Ad="firebase-heartbeat-database",Rd=1,Mt="firebase-heartbeat-store";let gi=null;function Io(){return gi||(gi=Gc(Ad,Rd,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Mt)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ae.create("idb-open",{originalErrorMessage:n.message})})),gi}async function Nd(n){try{const t=(await Io()).transaction(Mt),i=await t.objectStore(Mt).get(Co(n));return await t.done,i}catch(e){if(e instanceof $e)_e.warn(e.message);else{const t=Ae.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_e.warn(t.message)}}}async function or(n,e){try{const i=(await Io()).transaction(Mt,"readwrite");await i.objectStore(Mt).put(e,Co(n)),await i.done}catch(t){if(t instanceof $e)_e.warn(t.message);else{const i=Ae.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});_e.warn(i.message)}}}function Co(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Pd=1024,Od=30*24*60*60*1e3;class Ld{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Md(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ar();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Od}),this._storage.overwrite(this._heartbeatsCache))}catch(i){_e.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ar(),{heartbeatsToSend:i,unsentEntries:s}=Dd(this._heartbeatsCache.heartbeats),r=pn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return _e.warn(t),""}}}function ar(){return new Date().toISOString().substring(0,10)}function Dd(n,e=Pd){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),lr(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),lr(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Md{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yc()?bc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Nd(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return or(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return or(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function lr(n){return pn(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Fd(n){dt(new Ve("platform-logger",e=>new Qc(e),"PRIVATE")),dt(new Ve("heartbeat",e=>new Ld(e),"PRIVATE")),Re(Ai,sr,n),Re(Ai,sr,"esm2017"),Re("fire-js","")}Fd("");var $d="firebase",Ud="10.14.1";/**
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
 */Re($d,Ud,"app");function ss(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function So(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bd=So,To=new Kt("auth","Firebase",So());/**
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
 */const yn=new ts("@firebase/auth");function Hd(n,...e){yn.logLevel<=N.WARN&&yn.warn(`Auth (${vt}): ${n}`,...e)}function cn(n,...e){yn.logLevel<=N.ERROR&&yn.error(`Auth (${vt}): ${n}`,...e)}/**
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
 */function ve(n,...e){throw rs(n,...e)}function ae(n,...e){return rs(n,...e)}function xo(n,e,t){const i=Object.assign(Object.assign({},Bd()),{[e]:t});return new Kt("auth","Firebase",i).create(e,{appName:n.name})}function Ne(n){return xo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rs(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return To.create(n,...e)}function I(n,e,...t){if(!n)throw rs(e,...t)}function he(n){const e="INTERNAL ASSERTION FAILED: "+n;throw cn(e),new Error(e)}function ye(n,e){n||he(e)}/**
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
 */function Pi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function qd(){return cr()==="http:"||cr()==="https:"}function cr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Wd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qd()||gc()||"connection"in navigator)?navigator.onLine:!0}function jd(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Yt{constructor(e,t){this.shortDelay=e,this.longDelay=t,ye(t>e,"Short delay should be less than long delay!"),this.isMobile=es()||_o()}get(){return Wd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function os(n,e){ye(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class ko{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;he("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;he("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;he("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Vd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zd=new Yt(3e4,6e4);function Hn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function yt(n,e,t,i,s={}){return Ao(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=_t(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:l},r);return mc()||(c.referrerPolicy="no-referrer"),ko.fetch()(No(n,n.config.apiHost,t,a),c)})}async function Ao(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Vd),e);try{const s=new Gd(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw on(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw on(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw on(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw on(n,"user-disabled",o);const d=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw xo(n,d,c);ve(n,d)}}catch(s){if(s instanceof $e)throw s;ve(n,"network-request-failed",{message:String(s)})}}async function Ro(n,e,t,i,s={}){const r=await yt(n,e,t,i,s);return"mfaPendingCredential"in r&&ve(n,"multi-factor-auth-required",{_serverResponse:r}),r}function No(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?os(n.config,s):`${n.config.apiScheme}://${s}`}class Gd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ae(this.auth,"network-request-failed")),zd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function on(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=ae(n,e,i);return s.customData._tokenResponse=t,s}/**
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
 */async function Kd(n,e){return yt(n,"POST","/v1/accounts:delete",e)}async function Po(n,e){return yt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function At(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Yd(n,e=!1){const t=X(n),i=await t.getIdToken(e),s=as(i);I(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:At(_i(s.auth_time)),issuedAtTime:At(_i(s.iat)),expirationTime:At(_i(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function _i(n){return Number(n)*1e3}function as(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return cn("JWT malformed, contained fewer than 3 sections"),null;try{const s=mn(t);return s?JSON.parse(s):(cn("Failed to decode base64 JWT payload"),null)}catch(s){return cn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function dr(n){const e=as(n);return I(e,"internal-error"),I(typeof e.exp<"u","internal-error"),I(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ft(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof $e&&Qd(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Qd({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Jd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Oi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=At(this.lastLoginAt),this.creationTime=At(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function bn(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Ft(n,Po(t,{idToken:i}));I(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Oo(r.providerUserInfo):[],a=Zd(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Oi(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,u)}async function Xd(n){const e=X(n);await bn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zd(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Oo(n){return n.map(e=>{var{providerId:t}=e,i=ss(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function eu(n,e){const t=await Ao(n,{},async()=>{const i=_t({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=No(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ko.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function tu(n,e){return yt(n,"POST","/v2/accounts:revokeToken",Hn(n,e))}/**
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
 */class st{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken<"u","internal-error"),I(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){I(e.length!==0,"internal-error");const t=dr(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(I(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await eu(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new st;return i&&(I(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(I(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(I(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new st,this.toJSON())}_performRefresh(){return he("not implemented")}}/**
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
 */function Ee(n,e){I(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class fe{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=ss(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Oi(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Ft(this,this.stsTokenManager.getToken(this.auth,e));return I(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Yd(this,e)}reload(){return Xd(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new fe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await bn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ue(this.auth.app))return Promise.reject(Ne(this.auth));const e=await this.getIdToken();return await Ft(this,Kd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,d;const u=(i=t.displayName)!==null&&i!==void 0?i:void 0,h=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,y=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,k=(c=t.createdAt)!==null&&c!==void 0?c:void 0,_=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:b,emailVerified:O,isAnonymous:U,providerData:g,stsTokenManager:w}=t;I(b&&w,e,"internal-error");const B=st.fromJSON(this.name,w);I(typeof b=="string",e,"internal-error"),Ee(u,e.name),Ee(h,e.name),I(typeof O=="boolean",e,"internal-error"),I(typeof U=="boolean",e,"internal-error"),Ee(f,e.name),Ee(p,e.name),Ee(v,e.name),Ee(y,e.name),Ee(k,e.name),Ee(_,e.name);const V=new fe({uid:b,auth:e,email:h,emailVerified:O,displayName:u,isAnonymous:U,photoURL:p,phoneNumber:f,tenantId:v,stsTokenManager:B,createdAt:k,lastLoginAt:_});return g&&Array.isArray(g)&&(V.providerData=g.map(Ue=>Object.assign({},Ue))),y&&(V._redirectEventId=y),V}static async _fromIdTokenResponse(e,t,i=!1){const s=new st;s.updateFromServerResponse(t);const r=new fe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await bn(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];I(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Oo(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new st;a.updateFromIdToken(i);const l=new fe({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Oi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const ur=new Map;function pe(n){ye(n instanceof Function,"Expected a class definition");let e=ur.get(n);return e?(ye(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ur.set(n,e),e)}/**
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
 */class Lo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Lo.type="NONE";const hr=Lo;/**
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
 */function dn(n,e,t){return`firebase:${n}:${e}:${t}`}class rt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=dn(this.userKey,s.apiKey,r),this.fullPersistenceKey=dn("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new rt(pe(hr),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||pe(hr);const o=dn(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const d=await c._get(o);if(d){const u=fe._fromJSON(e,d);c!==r&&(a=u),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new rt(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new rt(r,e,i))}}/**
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
 */function fr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($o(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Do(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bo(e))return"Blackberry";if(Ho(e))return"Webos";if(Mo(e))return"Safari";if((e.includes("chrome/")||Fo(e))&&!e.includes("edge/"))return"Chrome";if(Uo(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Do(n=Q()){return/firefox\//i.test(n)}function Mo(n=Q()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fo(n=Q()){return/crios\//i.test(n)}function $o(n=Q()){return/iemobile/i.test(n)}function Uo(n=Q()){return/android/i.test(n)}function Bo(n=Q()){return/blackberry/i.test(n)}function Ho(n=Q()){return/webos/i.test(n)}function ls(n=Q()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function nu(n=Q()){var e;return ls(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iu(){return _c()&&document.documentMode===10}function qo(n=Q()){return ls(n)||Uo(n)||Ho(n)||Bo(n)||/windows phone/i.test(n)||$o(n)}/**
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
 */function Wo(n,e=[]){let t;switch(n){case"Browser":t=fr(Q());break;case"Worker":t=`${fr(Q())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${vt}/${i}`}/**
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
 */class su{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function ru(n,e={}){return yt(n,"GET","/v2/passwordPolicy",Hn(n,e))}/**
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
 */const ou=6;class au{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:ou,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class lu{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pr(this),this.idTokenSubscription=new pr(this),this.beforeStateQueue=new su(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=To,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pe(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await rt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Po(this,{idToken:e}),i=await fe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ue(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ue(this.app))return Promise.reject(Ne(this));const t=e?X(e):null;return t&&I(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ue(this.app)?Promise.reject(Ne(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ue(this.app)?Promise.reject(Ne(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ru(this),t=new au(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Kt("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await tu(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&pe(e)||this._popupRedirectResolver;I(t,this,"argument-error"),this.redirectPersistenceManager=await rt.create(this,[pe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(I(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Hd(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function qn(n){return X(n)}class pr{constructor(e){this.auth=e,this.observer=null,this.addObserver=xc(t=>this.observer=t)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let cs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cu(n){cs=n}function du(n){return cs.loadJS(n)}function uu(){return cs.gapiScript}function hu(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function fu(n,e){const t=is(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(_n(r,e??{}))return s;ve(s,"already-initialized")}return t.initialize({options:e})}function pu(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(pe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function mu(n,e,t){const i=qn(n);I(i._canInitEmulator,i,"emulator-config-failed"),I(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=jo(e),{host:o,port:a}=gu(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),_u()}function jo(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function gu(n){const e=jo(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:mr(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:mr(o)}}}function mr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function _u(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Vo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return he("not implemented")}_getIdTokenResponse(e){return he("not implemented")}_linkToIdToken(e,t){return he("not implemented")}_getReauthenticationResolver(e){return he("not implemented")}}/**
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
 */async function ot(n,e){return Ro(n,"POST","/v1/accounts:signInWithIdp",Hn(n,e))}/**
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
 */const vu="http://localhost";class ze extends Vo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ve("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=ss(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new ze(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ot(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ot(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ot(e,t)}buildRequest(){const e={requestUri:vu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_t(t)}return e}}/**
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
 */class zo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qt extends zo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ie extends Qt{constructor(){super("facebook.com")}static credential(e){return ze._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ie.credentialFromTaggedObject(e)}static credentialFromError(e){return Ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ie.credential(e.oauthAccessToken)}catch{return null}}}Ie.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ie.PROVIDER_ID="facebook.com";/**
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
 */class Ce extends Qt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ze._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ce.credentialFromTaggedObject(e)}static credentialFromError(e){return Ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ce.credential(t,i)}catch{return null}}}Ce.GOOGLE_SIGN_IN_METHOD="google.com";Ce.PROVIDER_ID="google.com";/**
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
 */class Se extends Qt{constructor(){super("github.com")}static credential(e){return ze._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Se.credential(e.oauthAccessToken)}catch{return null}}}Se.GITHUB_SIGN_IN_METHOD="github.com";Se.PROVIDER_ID="github.com";/**
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
 */class Te extends Qt{constructor(){super("twitter.com")}static credential(e,t){return ze._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Te.credential(t,i)}catch{return null}}}Te.TWITTER_SIGN_IN_METHOD="twitter.com";Te.PROVIDER_ID="twitter.com";/**
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
 */async function yu(n,e){return Ro(n,"POST","/v1/accounts:signUp",Hn(n,e))}/**
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
 */class Le{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await fe._fromIdTokenResponse(e,i,s),o=gr(i);return new Le({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=gr(i);return new Le({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function gr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function bu(n){var e;if(ue(n.app))return Promise.reject(Ne(n));const t=qn(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Le({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await yu(t,{returnSecureToken:!0}),s=await Le._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(s.user),s}/**
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
 */class wn extends $e{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,wn.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new wn(e,t,i,s)}}function Go(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?wn._fromErrorAndOperation(n,r,e,i):r})}async function wu(n,e,t=!1){const i=await Ft(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Le._forOperation(n,"link",i)}/**
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
 */async function Eu(n,e,t=!1){const{auth:i}=n;if(ue(i.app))return Promise.reject(Ne(i));const s="reauthenticate";try{const r=await Ft(n,Go(i,s,e,n),t);I(r.idToken,i,"internal-error");const o=as(r.idToken);I(o,i,"internal-error");const{sub:a}=o;return I(n.uid===a,i,"user-mismatch"),Le._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ve(i,"user-mismatch"),r}}/**
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
 */async function Iu(n,e,t=!1){if(ue(n.app))return Promise.reject(Ne(n));const i="signIn",s=await Go(n,i,e),r=await Le._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}function Cu(n,e,t,i){return X(n).onIdTokenChanged(e,t,i)}function Su(n,e,t){return X(n).beforeAuthStateChanged(e,t)}const En="__sak";/**
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
 */class Ko{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(En,"1"),this.storage.removeItem(En),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Tu=1e3,xu=10;class Yo extends Ko{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);iu()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,xu):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Tu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yo.type="LOCAL";const ku=Yo;/**
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
 */class Qo extends Ko{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Qo.type="SESSION";const Jo=Qo;/**
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
 */function Au(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Wn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Wn(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await Au(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wn.receivers=[];/**
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
 */function ds(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Ru{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=ds("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(u){const h=u;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(d),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function le(){return window}function Nu(n){le().location.href=n}/**
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
 */function Xo(){return typeof le().WorkerGlobalScope<"u"&&typeof le().importScripts=="function"}async function Pu(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ou(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Lu(){return Xo()?self:null}/**
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
 */const Zo="firebaseLocalStorageDb",Du=1,In="firebaseLocalStorage",ea="fbase_key";class Jt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function jn(n,e){return n.transaction([In],e?"readwrite":"readonly").objectStore(In)}function Mu(){const n=indexedDB.deleteDatabase(Zo);return new Jt(n).toPromise()}function Li(){const n=indexedDB.open(Zo,Du);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(In,{keyPath:ea})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(In)?e(i):(i.close(),await Mu(),e(await Li()))})})}async function _r(n,e,t){const i=jn(n,!0).put({[ea]:e,value:t});return new Jt(i).toPromise()}async function Fu(n,e){const t=jn(n,!1).get(e),i=await new Jt(t).toPromise();return i===void 0?null:i.value}function vr(n,e){const t=jn(n,!0).delete(e);return new Jt(t).toPromise()}const $u=800,Uu=3;class ta{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Li(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Uu)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wn._getInstance(Lu()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Pu(),!this.activeServiceWorker)return;this.sender=new Ru(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ou()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Li();return await _r(e,En,"1"),await vr(e,En),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>_r(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Fu(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>vr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=jn(s,!1).getAll();return new Jt(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$u)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ta.type="LOCAL";const Bu=ta;new Yt(3e4,6e4);/**
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
 */function Hu(n,e){return e?pe(e):(I(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class us extends Vo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ot(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ot(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ot(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function qu(n){return Iu(n.auth,new us(n),n.bypassAuthState)}function Wu(n){const{auth:e,user:t}=n;return I(t,e,"internal-error"),Eu(t,new us(n),n.bypassAuthState)}async function ju(n){const{auth:e,user:t}=n;return I(t,e,"internal-error"),wu(t,new us(n),n.bypassAuthState)}/**
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
 */class na{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qu;case"linkViaPopup":case"linkViaRedirect":return ju;case"reauthViaPopup":case"reauthViaRedirect":return Wu;default:ve(this.auth,"internal-error")}}resolve(e){ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Vu=new Yt(2e3,1e4);class nt extends na{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,nt.currentPopupAction&&nt.currentPopupAction.cancel(),nt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){ye(this.filter.length===1,"Popup operations only handle one event");const e=ds();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ae(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ae(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ae(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Vu.get())};e()}}nt.currentPopupAction=null;/**
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
 */const zu="pendingRedirect",un=new Map;class Gu extends na{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=un.get(this.auth._key());if(!e){try{const i=await Ku(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}un.set(this.auth._key(),e)}return this.bypassAuthState||un.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ku(n,e){const t=Ju(e),i=Qu(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Yu(n,e){un.set(n._key(),e)}function Qu(n){return pe(n._redirectPersistence)}function Ju(n){return dn(zu,n.config.apiKey,n.name)}async function Xu(n,e,t=!1){if(ue(n.app))return Promise.reject(Ne(n));const i=qn(n),s=Hu(i,e),o=await new Gu(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const Zu=10*60*1e3;class eh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!th(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!ia(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(ae(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zu&&this.cachedEventUids.clear(),this.cachedEventUids.has(yr(e))}saveEventToCache(e){this.cachedEventUids.add(yr(e)),this.lastProcessedEventTime=Date.now()}}function yr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ia({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function th(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ia(n);default:return!1}}/**
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
 */async function nh(n,e={}){return yt(n,"GET","/v1/projects",e)}/**
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
 */const ih=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sh=/^https?/;async function rh(n){if(n.config.emulator)return;const{authorizedDomains:e}=await nh(n);for(const t of e)try{if(oh(t))return}catch{}ve(n,"unauthorized-domain")}function oh(n){const e=Pi(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!sh.test(t))return!1;if(ih.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const ah=new Yt(3e4,6e4);function br(){const n=le().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function lh(n){return new Promise((e,t)=>{var i,s,r;function o(){br(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{br(),t(ae(n,"network-request-failed"))},timeout:ah.get()})}if(!((s=(i=le().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=le().gapi)===null||r===void 0)&&r.load)o();else{const a=hu("iframefcb");return le()[a]=()=>{gapi.load?o():t(ae(n,"network-request-failed"))},du(`${uu()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw hn=null,e})}let hn=null;function ch(n){return hn=hn||lh(n),hn}/**
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
 */const dh=new Yt(5e3,15e3),uh="__/auth/iframe",hh="emulator/auth/iframe",fh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ph=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mh(n){const e=n.config;I(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?os(e,hh):`https://${n.config.authDomain}/${uh}`,i={apiKey:e.apiKey,appName:n.name,v:vt},s=ph.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${_t(i).slice(1)}`}async function gh(n){const e=await ch(n),t=le().gapi;return I(t,n,"internal-error"),e.open({where:document.body,url:mh(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fh,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=ae(n,"network-request-failed"),a=le().setTimeout(()=>{r(o)},dh.get());function l(){le().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const _h={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vh=500,yh=600,bh="_blank",wh="http://localhost";class wr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Eh(n,e,t,i=vh,s=yh){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},_h),{width:i.toString(),height:s.toString(),top:r,left:o}),c=Q().toLowerCase();t&&(a=Fo(c)?bh:t),Do(c)&&(e=e||wh,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[f,p])=>`${h}${f}=${p},`,"");if(nu(c)&&a!=="_self")return Ih(e||"",a),new wr(null);const u=window.open(e||"",a,d);I(u,n,"popup-blocked");try{u.focus()}catch{}return new wr(u)}function Ih(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Ch="__/auth/handler",Sh="emulator/auth/handler",Th=encodeURIComponent("fac");async function Er(n,e,t,i,s,r){I(n.config.authDomain,n,"auth-domain-config-required"),I(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:vt,eventId:s};if(e instanceof zo){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ti(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof Qt){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await n._getAppCheckToken(),c=l?`#${Th}=${encodeURIComponent(l)}`:"";return`${xh(n)}?${_t(a).slice(1)}${c}`}function xh({config:n}){return n.emulator?os(n,Sh):`https://${n.authDomain}/${Ch}`}/**
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
 */const vi="webStorageSupport";class kh{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jo,this._completeRedirectFn=Xu,this._overrideRedirectResult=Yu}async _openPopup(e,t,i,s){var r;ye((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Er(e,t,i,Pi(),s);return Eh(e,o,ds())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Er(e,t,i,Pi(),s);return Nu(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(ye(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await gh(e),i=new eh(e);return t.register("authEvent",s=>(I(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(vi,{type:vi},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[vi];o!==void 0&&t(!!o),ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=rh(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return qo()||Mo()||ls()}}const Ah=kh;var Ir="@firebase/auth",Cr="1.7.9";/**
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
 */class Rh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Nh(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ph(n){dt(new Ve("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;I(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wo(n)},c=new lu(i,s,r,l);return pu(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),dt(new Ve("auth-internal",e=>{const t=qn(e.getProvider("auth").getImmediate());return(i=>new Rh(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Re(Ir,Cr,Nh(n)),Re(Ir,Cr,"esm2017")}/**
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
 */const Oh=5*60,Lh=go("authIdTokenMaxAge")||Oh;let Sr=null;const Dh=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Lh)return;const s=t==null?void 0:t.token;Sr!==s&&(Sr=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Mh(n=Eo()){const e=is(n,"auth");if(e.isInitialized())return e.getImmediate();const t=fu(n,{popupRedirectResolver:Ah,persistence:[Bu,ku,Jo]}),i=go("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=Dh(r.toString());Su(t,o,()=>o(t.currentUser)),Cu(t,a=>o(a))}}const s=po("auth");return s&&mu(t,`http://${s}`),t}function Fh(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}cu({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=ae("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",Fh().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ph("Browser");var Tr={};const xr="@firebase/database",kr="1.0.8";/**
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
 */let sa="";function $h(n){sa=n}/**
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
 */class Uh{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),q(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Dt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Bh{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ce(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ra=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Uh(e)}}catch{}return new Bh},qe=ra("localStorage"),Hh=ra("sessionStorage");/**
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
 */const at=new ts("@firebase/database"),qh=function(){let n=1;return function(){return n++}}(),oa=function(n){const e=Rc(n),t=new Tc;t.update(e);const i=t.digest();return Xi.encodeByteArray(i)},Xt=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Xt.apply(null,i):typeof i=="object"?e+=q(i):e+=i,e+=" "}return e};let Rt=null,Ar=!0;const Wh=function(n,e){m(!0,"Can't turn on custom loggers persistently."),at.logLevel=N.VERBOSE,Rt=at.log.bind(at)},z=function(...n){if(Ar===!0&&(Ar=!1,Rt===null&&Hh.get("logging_enabled")===!0&&Wh()),Rt){const e=Xt.apply(null,n);Rt(e)}},Zt=function(n){return function(...e){z(n,...e)}},Di=function(...n){const e="FIREBASE INTERNAL ERROR: "+Xt(...n);at.error(e)},be=function(...n){const e=`FIREBASE FATAL ERROR: ${Xt(...n)}`;throw at.error(e),new Error(e)},Y=function(...n){const e="FIREBASE WARNING: "+Xt(...n);at.warn(e)},jh=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Y("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},hs=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Vh=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ut="[MIN_NAME]",Ge="[MAX_NAME]",Qe=function(n,e){if(n===e)return 0;if(n===ut||e===Ge)return-1;if(e===ut||n===Ge)return 1;{const t=Rr(n),i=Rr(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},zh=function(n,e){return n===e?0:n<e?-1:1},St=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+q(e))},fs=function(n){if(typeof n!="object"||n===null)return q(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=q(e[i]),t+=":",t+=fs(n[e[i]]);return t+="}",t},aa=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function G(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const la=function(n){m(!hs(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const d=c.join("");let u="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},Gh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Kh=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Yh(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Qh=new RegExp("^-?(0*)\\d{1,10}$"),Jh=-2147483648,Xh=2147483647,Rr=function(n){if(Qh.test(n)){const e=Number(n);if(e>=Jh&&e<=Xh)return e}return null},bt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Y("Exception was thrown by user callback.",t),e},Math.floor(0))}},Zh=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Nt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class ef{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Y(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class tf{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(z("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Y(e)}}class fn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}fn.OWNER="owner";/**
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
 */const ps="5",ca="v",da="s",ua="r",ha="f",fa=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,pa="ls",ma="p",Mi="ac",ga="websocket",_a="long_polling";/**
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
 */class va{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qe.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qe.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function nf(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function ya(n,e,t){m(typeof e=="string","typeof type must == string"),m(typeof t=="object","typeof params must == object");let i;if(e===ga)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===_a)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);nf(n)&&(t.ns=n.namespace);const s=[];return G(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class sf{constructor(){this.counters_={}}incrementCounter(e,t=1){ce(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ac(this.counters_)}}/**
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
 */const yi={},bi={};function ms(n){const e=n.toString();return yi[e]||(yi[e]=new sf),yi[e]}function rf(n,e){const t=n.toString();return bi[t]||(bi[t]=e()),bi[t]}/**
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
 */class of{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&bt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Nr="start",af="close",lf="pLPCommand",cf="pRTLPCB",ba="id",wa="pw",Ea="ser",df="cb",uf="seg",hf="ts",ff="d",pf="dframe",Ia=1870,Ca=30,mf=Ia-Ca,gf=25e3,_f=3e4;class it{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Zt(e),this.stats_=ms(t),this.urlFn=l=>(this.appCheckToken&&(l[Mi]=this.appCheckToken),ya(t,_a,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new of(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_f)),Vh(()=>{if(this.isClosed_)return;this.scriptTagHolder=new gs((...r)=>{const[o,a,l,c,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Nr)this.id=a,this.password=l;else if(o===af)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Nr]="t",i[Ea]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[df]=this.scriptTagHolder.uniqueCallbackIdentifier),i[ca]=ps,this.transportSessionId&&(i[da]=this.transportSessionId),this.lastSessionId&&(i[pa]=this.lastSessionId),this.applicationId&&(i[ma]=this.applicationId),this.appCheckToken&&(i[Mi]=this.appCheckToken),typeof location<"u"&&location.hostname&&fa.test(location.hostname)&&(i[ua]=ha);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){it.forceAllow_=!0}static forceDisallow(){it.forceDisallow_=!0}static isAvailable(){return it.forceAllow_?!0:!it.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Gh()&&!Kh()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=q(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=ho(t),s=aa(i,mf);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[pf]="t",i[ba]=e,i[wa]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=q(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class gs{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=qh(),window[lf+this.uniqueCallbackIdentifier]=e,window[cf+this.uniqueCallbackIdentifier]=t,this.myIFrame=gs.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){z("frame writing exception"),a.stack&&z(a.stack),z(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||z("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ba]=this.myID,e[wa]=this.myPW,e[Ea]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ca+i.length<=Ia;){const o=this.pendingSegs.shift();i=i+"&"+uf+s+"="+o.seg+"&"+hf+s+"="+o.ts+"&"+ff+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(gf)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{z("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const vf=16384,yf=45e3;let Cn=null;typeof MozWebSocket<"u"?Cn=MozWebSocket:typeof WebSocket<"u"&&(Cn=WebSocket);class ne{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Zt(this.connId),this.stats_=ms(t),this.connURL=ne.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[ca]=ps,typeof location<"u"&&location.hostname&&fa.test(location.hostname)&&(o[ua]=ha),t&&(o[da]=t),i&&(o[pa]=i),s&&(o[Mi]=s),r&&(o[ma]=r),ya(e,ga,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qe.set("previous_websocket_failure",!0);try{let i;vc(),this.mySock=new Cn(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ne.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Cn!==null&&!ne.forceDisallow_}static previouslyFailed(){return qe.isInMemoryStorage||qe.get("previous_websocket_failure")===!0}markConnectionHealthy(){qe.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Dt(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=q(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=aa(t,vf);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(yf))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ne.responsesRequiredToBeHealthy=2;ne.healthyTimeout=3e4;/**
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
 */class $t{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[it,ne]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ne&&ne.isAvailable();let i=t&&!ne.previouslyFailed();if(e.webSocketOnly&&(t||Y("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ne];else{const s=this.transports_=[];for(const r of $t.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);$t.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}$t.globalTransportInitialized_=!1;/**
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
 */const bf=6e4,wf=5e3,Ef=10*1024,If=100*1024,wi="t",Pr="d",Cf="s",Or="r",Sf="e",Lr="o",Dr="a",Mr="n",Fr="p",Tf="h";class xf{constructor(e,t,i,s,r,o,a,l,c,d){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Zt("c:"+this.id+":"),this.transportManager_=new $t(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Nt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>If?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ef?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(wi in e){const t=e[wi];t===Dr?this.upgradeIfSecondaryHealthy_():t===Or?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Lr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=St("t",e),i=St("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Dr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Mr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=St("t",e),i=St("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=St(wi,e);if(Pr in e){const i=e[Pr];if(t===Tf){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Mr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Cf?this.onConnectionShutdown_(i):t===Or?this.onReset_(i):t===Sf?Di("Server Error: "+i):t===Lr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Di("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ps!==i&&Y("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Nt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(bf))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Nt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(wf))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qe.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Sa{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Ta{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Sn extends Ta{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!es()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Sn}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const $r=32,Ur=768;class P{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function R(){return new P("")}function T(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function De(n){return n.pieces_.length-n.pieceNum_}function D(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new P(n.pieces_,e)}function _s(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function kf(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ut(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function xa(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new P(e,0)}function M(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof P)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new P(t,0)}function A(n){return n.pieceNum_>=n.pieces_.length}function K(n,e){const t=T(n),i=T(e);if(t===null)return e;if(t===i)return K(D(n),D(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Af(n,e){const t=Ut(n,0),i=Ut(e,0);for(let s=0;s<t.length&&s<i.length;s++){const r=Qe(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function vs(n,e){if(De(n)!==De(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Z(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(De(n)>De(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Rf{constructor(e,t){this.errorPrefix_=t,this.parts_=Ut(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Bn(this.parts_[i]);ka(this)}}function Nf(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Bn(e),ka(n)}function Pf(n){const e=n.parts_.pop();n.byteLength_-=Bn(e),n.parts_.length>0&&(n.byteLength_-=1)}function ka(n){if(n.byteLength_>Ur)throw new Error(n.errorPrefix_+"has a key path longer than "+Ur+" bytes ("+n.byteLength_+").");if(n.parts_.length>$r)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+$r+") or object contains a cycle "+He(n))}function He(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class ys extends Ta{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new ys}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Tt=1e3,Of=60*5*1e3,Br=30*1e3,Lf=1.3,Df=3e4,Mf="server_kill",Hr=3;class ge extends Sa{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ge.nextPersistentConnectionId_++,this.log_=Zt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Tt,this.maxReconnectDelay_=Of,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ys.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Sn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(q(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Gt,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ge.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ce(e,"w")){const i=ct(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Y(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Sc(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Br)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Cc(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+q(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Di("Unrecognized action received from server: "+q(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Tt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Tt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Df&&(this.reconnectDelay_=Tt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Lf)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ge.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(u){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?z("getToken() completed but was canceled"):(z("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new xf(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{Y(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Mf)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Y(u),l())}}}interrupt(e){z("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){z("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ti(this.interruptReasons_)&&(this.reconnectDelay_=Tt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>fs(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new P(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){z("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Hr&&(this.reconnectDelay_=Br,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){z("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Hr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+sa.replace(/\./g,"-")]=1,es()?e["framework.cordova"]=1:_o()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Sn.getInstance().currentlyOnline();return Ti(this.interruptReasons_)&&e}}ge.nextPersistentConnectionId_=0;ge.nextConnectionId_=0;/**
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
 */class x{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new x(e,t)}}/**
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
 */class Vn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new x(ut,e),s=new x(ut,t);return this.compare(i,s)!==0}minPost(){return x.MIN}}/**
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
 */let an;class Aa extends Vn{static get __EMPTY_NODE(){return an}static set __EMPTY_NODE(e){an=e}compare(e,t){return Qe(e.name,t.name)}isDefinedOn(e){throw gt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return x.MIN}maxPost(){return new x(Ge,an)}makePost(e,t){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new x(e,an)}toString(){return".key"}}const lt=new Aa;/**
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
 */class ln{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class j{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??j.RED,this.left=s??J.EMPTY_NODE,this.right=r??J.EMPTY_NODE}copy(e,t,i,s,r){return new j(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return J.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return J.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,j.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,j.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}j.RED=!0;j.BLACK=!1;class Ff{copy(e,t,i,s,r){return this}insert(e,t,i){return new j(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class J{constructor(e,t=J.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new J(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,j.BLACK,null,null))}remove(e){return new J(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,j.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ln(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ln(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ln(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ln(this.root_,null,this.comparator_,!0,e)}}J.EMPTY_NODE=new Ff;/**
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
 */function $f(n,e){return Qe(n.name,e.name)}function bs(n,e){return Qe(n,e)}/**
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
 */let Fi;function Uf(n){Fi=n}const Ra=function(n){return typeof n=="number"?"number:"+la(n):"string:"+n},Na=function(n){if(n.isLeafNode()){const e=n.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ce(e,".sv"),"Priority must be a string or number.")}else m(n===Fi||n.isEmpty(),"priority of unexpected type.");m(n===Fi||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let qr;class W{constructor(e,t=W.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Na(this.priorityNode_)}static set __childrenNodeConstructor(e){qr=e}static get __childrenNodeConstructor(){return qr}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new W(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:W.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return A(e)?this:T(e)===".priority"?this.priorityNode_:W.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:W.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=T(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(m(i!==".priority"||De(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,W.__childrenNodeConstructor.EMPTY_NODE.updateChild(D(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ra(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=la(this.value_):e+=this.value_,this.lazyHash_=oa(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===W.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof W.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=W.VALUE_TYPE_ORDER.indexOf(t),r=W.VALUE_TYPE_ORDER.indexOf(i);return m(s>=0,"Unknown leaf type: "+t),m(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}W.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Pa,Oa;function Bf(n){Pa=n}function Hf(n){Oa=n}class qf extends Vn{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Qe(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return x.MIN}maxPost(){return new x(Ge,new W("[PRIORITY-POST]",Oa))}makePost(e,t){const i=Pa(e);return new x(t,new W("[PRIORITY-POST]",i))}toString(){return".priority"}}const F=new qf;/**
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
 */const Wf=Math.log(2);class jf{constructor(e){const t=r=>parseInt(Math.log(r)/Wf,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Tn=function(n,e,t,i){n.sort(e);const s=function(l,c){const d=c-l;let u,h;if(d===0)return null;if(d===1)return u=n[l],h=t?t(u):u,new j(h,u.node,j.BLACK,null,null);{const f=parseInt(d/2,10)+l,p=s(l,f),v=s(f+1,c);return u=n[f],h=t?t(u):u,new j(h,u.node,j.BLACK,p,v)}},r=function(l){let c=null,d=null,u=n.length;const h=function(p,v){const y=u-p,k=u;u-=p;const _=s(y+1,k),b=n[y],O=t?t(b):b;f(new j(O,b.node,v,null,_))},f=function(p){c?(c.left=p,c=p):(d=p,c=p)};for(let p=0;p<l.count;++p){const v=l.nextBitIsOne(),y=Math.pow(2,l.count-(p+1));v?h(y,j.BLACK):(h(y,j.BLACK),h(y,j.RED))}return d},o=new jf(n.length),a=r(o);return new J(i||e,a)};/**
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
 */let Ei;const et={};class me{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return m(et&&F,"ChildrenNode.ts has not been loaded"),Ei=Ei||new me({".priority":et},{".priority":F}),Ei}get(e){const t=ct(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof J?t:null}hasIndex(e){return ce(this.indexSet_,e.toString())}addIndex(e,t){m(e!==lt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(x.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Tn(i,e.getCompare()):a=et;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new me(d,c)}addToIndexes(e,t){const i=gn(this.indexes_,(s,r)=>{const o=ct(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),s===et)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(x.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Tn(a,o.getCompare())}else return et;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new x(e.name,a))),l.insert(e,e.node)}});return new me(i,this.indexSet_)}removeFromIndexes(e,t){const i=gn(this.indexes_,s=>{if(s===et)return s;{const r=t.get(e.name);return r?s.remove(new x(e.name,r)):s}});return new me(i,this.indexSet_)}}/**
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
 */let xt;class E{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Na(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return xt||(xt=new E(new J(bs),null,me.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||xt}updatePriority(e){return this.children_.isEmpty()?this:new E(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?xt:t}}getChild(e){const t=T(e);return t===null?this:this.getImmediateChild(t).getChild(D(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(m(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new x(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?xt:this.priorityNode_;return new E(s,o,r)}}updateChild(e,t){const i=T(e);if(i===null)return t;{m(T(e)!==".priority"||De(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(D(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(F,(o,a)=>{t[o]=a.val(e),i++,r&&E.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ra(this.getPriority().val())+":"),this.forEachChild(F,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":oa(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new x(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new x(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new x(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,x.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,x.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===en?-1:0}withIndex(e){if(e===lt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new E(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===lt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(F),s=t.getIterator(F);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===lt?null:this.indexMap_.get(e.toString())}}E.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Vf extends E{constructor(){super(new J(bs),E.EMPTY_NODE,me.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return E.EMPTY_NODE}isEmpty(){return!1}}const en=new Vf;Object.defineProperties(x,{MIN:{value:new x(ut,E.EMPTY_NODE)},MAX:{value:new x(Ge,en)}});Aa.__EMPTY_NODE=E.EMPTY_NODE;W.__childrenNodeConstructor=E;Uf(en);Hf(en);/**
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
 */const zf=!0;function H(n,e=null){if(n===null)return E.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new W(t,H(e))}if(!(n instanceof Array)&&zf){const t=[];let i=!1;if(G(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=H(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new x(o,l)))}}),t.length===0)return E.EMPTY_NODE;const r=Tn(t,$f,o=>o.name,bs);if(i){const o=Tn(t,F.getCompare());return new E(r,H(e),new me({".priority":o},{".priority":F}))}else return new E(r,H(e),me.Default)}else{let t=E.EMPTY_NODE;return G(n,(i,s)=>{if(ce(n,i)&&i.substring(0,1)!=="."){const r=H(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(H(e))}}Bf(H);/**
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
 */class Gf extends Vn{constructor(e){super(),this.indexPath_=e,m(!A(e)&&T(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Qe(e.name,t.name):r}makePost(e,t){const i=H(e),s=E.EMPTY_NODE.updateChild(this.indexPath_,i);return new x(t,s)}maxPost(){const e=E.EMPTY_NODE.updateChild(this.indexPath_,en);return new x(Ge,e)}toString(){return Ut(this.indexPath_,0).join("/")}}/**
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
 */class Kf extends Vn{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Qe(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return x.MIN}maxPost(){return x.MAX}makePost(e,t){const i=H(e);return new x(t,i)}toString(){return".value"}}const Yf=new Kf;/**
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
 */function La(n){return{type:"value",snapshotNode:n}}function ht(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Bt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ht(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Qf(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class ws{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Bt(t,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ht(t,i)):o.trackChildChange(Ht(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(F,(s,r)=>{t.hasChild(s)||i.trackChildChange(Bt(s,r))}),t.isLeafNode()||t.forEachChild(F,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Ht(s,r,o))}else i.trackChildChange(ht(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?E.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class qt{constructor(e){this.indexedFilter_=new ws(e.getIndex()),this.index_=e.getIndex(),this.startPost_=qt.getStartPost_(e),this.endPost_=qt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new x(t,i))||(i=E.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=E.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(E.EMPTY_NODE);const r=this;return t.forEachChild(F,(o,a)=>{r.matches(new x(o,a))||(s=s.updateImmediateChild(o,E.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Jf{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new qt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new x(t,i))||(i=E.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=E.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=E.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(E.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,E.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,f)=>u(f,h)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const l=new x(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(t)){const u=a.getImmediateChild(t);let h=s.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(d&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Ht(t,i,u)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(Bt(t,u));const v=a.updateImmediateChild(t,E.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(ht(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return i.isEmpty()?e:d&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Bt(c.name,c.node)),r.trackChildChange(ht(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,E.EMPTY_NODE)):e}}/**
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
 */class Es{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=F}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ut}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ge}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===F}copy(){const e=new Es;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Xf(n){return n.loadsAllData()?new ws(n.getIndex()):n.hasLimit()?new Jf(n):new qt(n)}function Wr(n){const e={};if(n.isDefault())return e;let t;if(n.index_===F?t="$priority":n.index_===Yf?t="$value":n.index_===lt?t="$key":(m(n.index_ instanceof Gf,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=q(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=q(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+q(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=q(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+q(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function jr(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==F&&(e.i=n.index_.toString()),e}/**
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
 */class xn extends Sa{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Zt("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=xn.getListenId_(e,i),a={};this.listens_[o]=a;const l=Wr(e._queryParams);this.restRequest_(r+".json",l,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,i),ct(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,t){const i=xn.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Wr(e._queryParams),i=e._path.toString(),s=new Gt;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+_t(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Dt(a.responseText)}catch{Y("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Y("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Zf{constructor(){this.rootNode_=E.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function kn(){return{value:null,children:new Map}}function Da(n,e,t){if(A(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=T(e);n.children.has(i)||n.children.set(i,kn());const s=n.children.get(i);e=D(e),Da(s,e,t)}}function $i(n,e,t){n.value!==null?t(e,n.value):ep(n,(i,s)=>{const r=new P(e.toString()+"/"+i);$i(s,r,t)})}function ep(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class tp{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&G(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const Vr=10*1e3,np=30*1e3,ip=5*60*1e3;class sp{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new tp(e);const i=Vr+(np-Vr)*Math.random();Nt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;G(e,(s,r)=>{r>0&&ce(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Nt(this.reportStats_.bind(this),Math.floor(Math.random()*2*ip))}}/**
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
 */var ie;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ie||(ie={}));function Is(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Cs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ss(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class An{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=ie.ACK_USER_WRITE,this.source=Is()}operationForChild(e){if(A(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new P(e));return new An(R(),t,this.revert)}}else return m(T(this.path)===e,"operationForChild called for unrelated child."),new An(D(this.path),this.affectedTree,this.revert)}}/**
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
 */class Wt{constructor(e,t){this.source=e,this.path=t,this.type=ie.LISTEN_COMPLETE}operationForChild(e){return A(this.path)?new Wt(this.source,R()):new Wt(this.source,D(this.path))}}/**
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
 */class Ke{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=ie.OVERWRITE}operationForChild(e){return A(this.path)?new Ke(this.source,R(),this.snap.getImmediateChild(e)):new Ke(this.source,D(this.path),this.snap)}}/**
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
 */class ft{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=ie.MERGE}operationForChild(e){if(A(this.path)){const t=this.children.subtree(new P(e));return t.isEmpty()?null:t.value?new Ke(this.source,R(),t.value):new ft(this.source,R(),t)}else return m(T(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ft(this.source,D(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Me{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(A(e))return this.isFullyInitialized()&&!this.filtered_;const t=T(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class rp{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function op(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Qf(o.childName,o.snapshotNode))}),kt(n,s,"child_removed",e,i,t),kt(n,s,"child_added",e,i,t),kt(n,s,"child_moved",r,i,t),kt(n,s,"child_changed",e,i,t),kt(n,s,"value",e,i,t),s}function kt(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>lp(n,a,l)),o.forEach(a=>{const l=ap(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function ap(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function lp(n,e,t){if(e.childName==null||t.childName==null)throw gt("Should only compare child_ events.");const i=new x(e.childName,e.snapshotNode),s=new x(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function zn(n,e){return{eventCache:n,serverCache:e}}function Pt(n,e,t,i){return zn(new Me(e,t,i),n.serverCache)}function Ma(n,e,t,i){return zn(n.eventCache,new Me(e,t,i))}function Rn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ye(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Ii;const cp=()=>(Ii||(Ii=new J(zh)),Ii);class L{constructor(e,t=cp()){this.value=e,this.children=t}static fromObject(e){let t=new L(null);return G(e,(i,s)=>{t=t.set(new P(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:R(),value:this.value};if(A(e))return null;{const i=T(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(D(e),t);return r!=null?{path:M(new P(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(A(e))return this;{const t=T(e),i=this.children.get(t);return i!==null?i.subtree(D(e)):new L(null)}}set(e,t){if(A(e))return new L(t,this.children);{const i=T(e),r=(this.children.get(i)||new L(null)).set(D(e),t),o=this.children.insert(i,r);return new L(this.value,o)}}remove(e){if(A(e))return this.children.isEmpty()?new L(null):new L(null,this.children);{const t=T(e),i=this.children.get(t);if(i){const s=i.remove(D(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new L(null):new L(this.value,r)}else return this}}get(e){if(A(e))return this.value;{const t=T(e),i=this.children.get(t);return i?i.get(D(e)):null}}setTree(e,t){if(A(e))return t;{const i=T(e),r=(this.children.get(i)||new L(null)).setTree(D(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new L(this.value,o)}}fold(e){return this.fold_(R(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(M(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,R(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(A(e))return null;{const r=T(e),o=this.children.get(r);return o?o.findOnPath_(D(e),M(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,R(),t)}foreachOnPath_(e,t,i){if(A(e))return this;{this.value&&i(t,this.value);const s=T(e),r=this.children.get(s);return r?r.foreachOnPath_(D(e),M(t,s),i):new L(null)}}foreach(e){this.foreach_(R(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(M(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class se{constructor(e){this.writeTree_=e}static empty(){return new se(new L(null))}}function Ot(n,e,t){if(A(e))return new se(new L(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=K(s,e);return r=r.updateChild(o,t),new se(n.writeTree_.set(s,r))}else{const s=new L(t),r=n.writeTree_.setTree(e,s);return new se(r)}}}function Ui(n,e,t){let i=n;return G(t,(s,r)=>{i=Ot(i,M(e,s),r)}),i}function zr(n,e){if(A(e))return se.empty();{const t=n.writeTree_.setTree(e,new L(null));return new se(t)}}function Bi(n,e){return Je(n,e)!=null}function Je(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(K(t.path,e)):null}function Gr(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(F,(i,s)=>{e.push(new x(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new x(i,s.value))}),e}function Pe(n,e){if(A(e))return n;{const t=Je(n,e);return t!=null?new se(new L(t)):new se(n.writeTree_.subtree(e))}}function Hi(n){return n.writeTree_.isEmpty()}function pt(n,e){return Fa(R(),n.writeTree_,e)}function Fa(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Fa(M(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(M(n,".priority"),i)),t}}/**
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
 */function Gn(n,e){return Ha(e,n)}function dp(n,e,t,i,s){m(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Ot(n.visibleWrites,e,t)),n.lastWriteId=i}function up(n,e,t,i){m(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=Ui(n.visibleWrites,e,t),n.lastWriteId=i}function hp(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function fp(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);m(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&pp(a,i.path)?s=!1:Z(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return mp(n),!0;if(i.snap)n.visibleWrites=zr(n.visibleWrites,i.path);else{const a=i.children;G(a,l=>{n.visibleWrites=zr(n.visibleWrites,M(i.path,l))})}return!0}else return!1}function pp(n,e){if(n.snap)return Z(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Z(M(n.path,t),e))return!0;return!1}function mp(n){n.visibleWrites=$a(n.allWrites,gp,R()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function gp(n){return n.visible}function $a(n,e,t){let i=se.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)Z(t,o)?(a=K(t,o),i=Ot(i,a,r.snap)):Z(o,t)&&(a=K(o,t),i=Ot(i,R(),r.snap.getChild(a)));else if(r.children){if(Z(t,o))a=K(t,o),i=Ui(i,a,r.children);else if(Z(o,t))if(a=K(o,t),A(a))i=Ui(i,R(),r.children);else{const l=ct(r.children,T(a));if(l){const c=l.getChild(D(a));i=Ot(i,R(),c)}}}else throw gt("WriteRecord should have .snap or .children")}}return i}function Ua(n,e,t,i,s){if(!i&&!s){const r=Je(n.visibleWrites,e);if(r!=null)return r;{const o=Pe(n.visibleWrites,e);if(Hi(o))return t;if(t==null&&!Bi(o,R()))return null;{const a=t||E.EMPTY_NODE;return pt(o,a)}}}else{const r=Pe(n.visibleWrites,e);if(!s&&Hi(r))return t;if(!s&&t==null&&!Bi(r,R()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Z(c.path,e)||Z(e,c.path))},a=$a(n.allWrites,o,e),l=t||E.EMPTY_NODE;return pt(a,l)}}}function _p(n,e,t){let i=E.EMPTY_NODE;const s=Je(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(F,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Pe(n.visibleWrites,e);return t.forEachChild(F,(o,a)=>{const l=pt(Pe(r,new P(o)),a);i=i.updateImmediateChild(o,l)}),Gr(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Pe(n.visibleWrites,e);return Gr(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function vp(n,e,t,i,s){m(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=M(e,t);if(Bi(n.visibleWrites,r))return null;{const o=Pe(n.visibleWrites,r);return Hi(o)?s.getChild(t):pt(o,s.getChild(t))}}function yp(n,e,t,i){const s=M(e,t),r=Je(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Pe(n.visibleWrites,s);return pt(o,i.getNode().getImmediateChild(t))}else return null}function bp(n,e){return Je(n.visibleWrites,e)}function wp(n,e,t,i,s,r,o){let a;const l=Pe(n.visibleWrites,e),c=Je(l,R());if(c!=null)a=c;else if(t!=null)a=pt(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=h.getNext();for(;f&&d.length<s;)u(f,i)!==0&&d.push(f),f=h.getNext();return d}else return[]}function Ep(){return{visibleWrites:se.empty(),allWrites:[],lastWriteId:-1}}function Nn(n,e,t,i){return Ua(n.writeTree,n.treePath,e,t,i)}function Ts(n,e){return _p(n.writeTree,n.treePath,e)}function Kr(n,e,t,i){return vp(n.writeTree,n.treePath,e,t,i)}function Pn(n,e){return bp(n.writeTree,M(n.treePath,e))}function Ip(n,e,t,i,s,r){return wp(n.writeTree,n.treePath,e,t,i,s,r)}function xs(n,e,t){return yp(n.writeTree,n.treePath,e,t)}function Ba(n,e){return Ha(M(n.treePath,e),n.writeTree)}function Ha(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Cp{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;m(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),m(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Ht(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Bt(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,ht(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Ht(i,e.snapshotNode,s.oldSnap));else throw gt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Sp{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const qa=new Sp;class ks{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Me(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xs(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ye(this.viewCache_),r=Ip(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function Tp(n){return{filter:n}}function xp(n,e){m(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function kp(n,e,t,i,s){const r=new Cp;let o,a;if(t.type===ie.OVERWRITE){const c=t;c.source.fromUser?o=qi(n,e,c.path,c.snap,i,s,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!A(c.path),o=On(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===ie.MERGE){const c=t;c.source.fromUser?o=Rp(n,e,c.path,c.children,i,s,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Wi(n,e,c.path,c.children,i,s,a,r))}else if(t.type===ie.ACK_USER_WRITE){const c=t;c.revert?o=Op(n,e,c.path,i,s,r):o=Np(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===ie.LISTEN_COMPLETE)o=Pp(n,e,t.path,i,r);else throw gt("Unknown operation type: "+t.type);const l=r.getChanges();return Ap(e,o,l),{viewCache:o,changes:l}}function Ap(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Rn(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(La(Rn(e)))}}function Wa(n,e,t,i,s,r){const o=e.eventCache;if(Pn(i,t)!=null)return e;{let a,l;if(A(t))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ye(e),d=c instanceof E?c:E.EMPTY_NODE,u=Ts(i,d);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=Nn(i,Ye(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=T(t);if(c===".priority"){m(De(t)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const u=Kr(i,t,d,l);u!=null?a=n.filter.updatePriority(d,u):a=o.getNode()}else{const d=D(t);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Kr(i,t,o.getNode(),l);h!=null?u=o.getNode().getImmediateChild(c).updateChild(d,h):u=o.getNode().getImmediateChild(c)}else u=xs(i,c,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),c,u,d,s,r):a=o.getNode()}}return Pt(e,a,o.isFullyInitialized()||A(t),n.filter.filtersNodes())}}function On(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const d=o?n.filter:n.filter.getIndexedFilter();if(A(t))c=d.updateFullNode(l.getNode(),i,null);else if(d.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,i);c=d.updateFullNode(l.getNode(),f,null)}else{const f=T(t);if(!l.isCompleteForPath(t)&&De(t)>1)return e;const p=D(t),y=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=d.updatePriority(l.getNode(),y):c=d.updateChild(l.getNode(),f,y,p,qa,null)}const u=Ma(e,c,l.isFullyInitialized()||A(t),d.filtersNodes()),h=new ks(s,u,r);return Wa(n,u,t,s,h,a)}function qi(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const d=new ks(s,e,r);if(A(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Pt(e,c,!0,n.filter.filtersNodes());else{const u=T(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=Pt(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=D(t),f=a.getNode().getImmediateChild(u);let p;if(A(h))p=i;else{const v=d.getCompleteChild(u);v!=null?_s(h)===".priority"&&v.getChild(xa(h)).isEmpty()?p=v:p=v.updateChild(h,i):p=E.EMPTY_NODE}if(f.equals(p))l=e;else{const v=n.filter.updateChild(a.getNode(),u,p,h,d,o);l=Pt(e,v,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Yr(n,e){return n.eventCache.isCompleteForChild(e)}function Rp(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const d=M(t,l);Yr(e,T(d))&&(a=qi(n,a,d,c,s,r,o))}),i.foreach((l,c)=>{const d=M(t,l);Yr(e,T(d))||(a=qi(n,a,d,c,s,r,o))}),a}function Qr(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Wi(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;A(t)?c=i:c=new L(null).setTree(t,i);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const f=e.serverCache.getNode().getImmediateChild(u),p=Qr(n,f,h);l=On(n,l,new P(u),p,s,r,o,a)}}),c.children.inorderTraversal((u,h)=>{const f=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!f){const p=e.serverCache.getNode().getImmediateChild(u),v=Qr(n,p,h);l=On(n,l,new P(u),v,s,r,o,a)}}),l}function Np(n,e,t,i,s,r,o){if(Pn(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(A(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return On(n,e,t,l.getNode().getChild(t),s,r,a,o);if(A(t)){let c=new L(null);return l.getNode().forEachChild(lt,(d,u)=>{c=c.set(new P(d),u)}),Wi(n,e,t,c,s,r,a,o)}else return e}else{let c=new L(null);return i.foreach((d,u)=>{const h=M(t,d);l.isCompleteForPath(h)&&(c=c.set(d,l.getNode().getChild(h)))}),Wi(n,e,t,c,s,r,a,o)}}function Pp(n,e,t,i,s){const r=e.serverCache,o=Ma(e,r.getNode(),r.isFullyInitialized()||A(t),r.isFiltered());return Wa(n,o,t,i,qa,s)}function Op(n,e,t,i,s,r){let o;if(Pn(i,t)!=null)return e;{const a=new ks(i,e,s),l=e.eventCache.getNode();let c;if(A(t)||T(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Nn(i,Ye(e));else{const u=e.serverCache.getNode();m(u instanceof E,"serverChildren would be complete if leaf node"),d=Ts(i,u)}d=d,c=n.filter.updateFullNode(l,d,r)}else{const d=T(t);let u=xs(i,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=l.getImmediateChild(d)),u!=null?c=n.filter.updateChild(l,d,u,D(t),a,r):e.eventCache.getNode().hasChild(d)?c=n.filter.updateChild(l,d,E.EMPTY_NODE,D(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Nn(i,Ye(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Pn(i,R())!=null,Pt(e,c,o,n.filter.filtersNodes())}}/**
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
 */class Lp{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new ws(i.getIndex()),r=Xf(i);this.processor_=Tp(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(E.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(E.EMPTY_NODE,a.getNode(),null),d=new Me(l,o.isFullyInitialized(),s.filtersNodes()),u=new Me(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=zn(u,d),this.eventGenerator_=new rp(this.query_)}get query(){return this.query_}}function Dp(n){return n.viewCache_.serverCache.getNode()}function Mp(n){return Rn(n.viewCache_)}function Fp(n,e){const t=Ye(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!A(e)&&!t.getImmediateChild(T(e)).isEmpty())?t.getChild(e):null}function Jr(n){return n.eventRegistrations_.length===0}function $p(n,e){n.eventRegistrations_.push(e)}function Xr(n,e,t){const i=[];if(t){m(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Zr(n,e,t,i){e.type===ie.MERGE&&e.source.queryId!==null&&(m(Ye(n.viewCache_),"We should always have a full cache before handling merges"),m(Rn(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=kp(n.processor_,s,e,t,i);return xp(n.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,ja(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Up(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(F,(r,o)=>{i.push(ht(r,o))}),t.isFullyInitialized()&&i.push(La(t.getNode())),ja(n,i,t.getNode(),e)}function ja(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return op(n.eventGenerator_,e,t,s)}/**
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
 */let Ln;class Va{constructor(){this.views=new Map}}function Bp(n){m(!Ln,"__referenceConstructor has already been defined"),Ln=n}function Hp(){return m(Ln,"Reference.ts has not been loaded"),Ln}function qp(n){return n.views.size===0}function As(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return m(r!=null,"SyncTree gave us an op for an invalid query."),Zr(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Zr(o,e,t,i));return r}}function za(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Nn(t,s?i:null),l=!1;a?l=!0:i instanceof E?(a=Ts(t,i),l=!1):(a=E.EMPTY_NODE,l=!1);const c=zn(new Me(a,l,!1),new Me(i,s,!1));return new Lp(e,c)}return o}function Wp(n,e,t,i,s,r){const o=za(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),$p(o,t),Up(o,t)}function jp(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=Fe(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(Xr(c,t,i)),Jr(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(Xr(l,t,i)),Jr(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Fe(n)&&r.push(new(Hp())(e._repo,e._path)),{removed:r,events:o}}function Ga(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Oe(n,e){let t=null;for(const i of n.views.values())t=t||Fp(i,e);return t}function Ka(n,e){if(e._queryParams.loadsAllData())return Kn(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Ya(n,e){return Ka(n,e)!=null}function Fe(n){return Kn(n)!=null}function Kn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Dn;function Vp(n){m(!Dn,"__referenceConstructor has already been defined"),Dn=n}function zp(){return m(Dn,"Reference.ts has not been loaded"),Dn}let Gp=1;class eo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new L(null),this.pendingWriteTree_=Ep(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Qa(n,e,t,i,s){return dp(n.pendingWriteTree_,e,t,i,s),s?wt(n,new Ke(Is(),e,t)):[]}function Kp(n,e,t,i){up(n.pendingWriteTree_,e,t,i);const s=L.fromObject(t);return wt(n,new ft(Is(),e,s))}function xe(n,e,t=!1){const i=hp(n.pendingWriteTree_,e);if(fp(n.pendingWriteTree_,e)){let r=new L(null);return i.snap!=null?r=r.set(R(),!0):G(i.children,o=>{r=r.set(new P(o),!0)}),wt(n,new An(i.path,r,t))}else return[]}function tn(n,e,t){return wt(n,new Ke(Cs(),e,t))}function Yp(n,e,t){const i=L.fromObject(t);return wt(n,new ft(Cs(),e,i))}function Qp(n,e){return wt(n,new Wt(Cs(),e))}function Jp(n,e,t){const i=Ns(n,t);if(i){const s=Ps(i),r=s.path,o=s.queryId,a=K(r,e),l=new Wt(Ss(o),a);return Os(n,r,l)}else return[]}function Mn(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Ya(o,e))){const l=jp(o,e,t,i);qp(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const d=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(h,f)=>Fe(f));if(d&&!u){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const f=em(h);for(let p=0;p<f.length;++p){const v=f[p],y=v.query,k=el(n,v);n.listenProvider_.startListening(Lt(y),jt(n,y),k.hashFn,k.onComplete)}}}!u&&c.length>0&&!i&&(d?n.listenProvider_.stopListening(Lt(e),null):c.forEach(h=>{const f=n.queryToTagMap.get(Yn(h));n.listenProvider_.stopListening(Lt(h),f)}))}tm(n,c)}return a}function Ja(n,e,t,i){const s=Ns(n,i);if(s!=null){const r=Ps(s),o=r.path,a=r.queryId,l=K(o,e),c=new Ke(Ss(a),l,t);return Os(n,o,c)}else return[]}function Xp(n,e,t,i){const s=Ns(n,i);if(s){const r=Ps(s),o=r.path,a=r.queryId,l=K(o,e),c=L.fromObject(t),d=new ft(Ss(a),l,c);return Os(n,o,d)}else return[]}function ji(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(h,f)=>{const p=K(h,s);r=r||Oe(f,p),o=o||Fe(f)});let a=n.syncPointTree_.get(s);a?(o=o||Fe(a),r=r||Oe(a,R())):(a=new Va,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=E.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((f,p)=>{const v=Oe(p,R());v&&(r=r.updateImmediateChild(f,v))}));const c=Ya(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Yn(e);m(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=nm();n.queryToTagMap.set(h,f),n.tagToQueryMap.set(f,h)}const d=Gn(n.pendingWriteTree_,s);let u=Wp(a,e,t,d,r,l);if(!c&&!o&&!i){const h=Ka(a,e);u=u.concat(im(n,e,h))}return u}function Rs(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=K(o,e),c=Oe(a,l);if(c)return c});return Ua(s,e,r,t,!0)}function Zp(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(c,d)=>{const u=K(c,t);i=i||Oe(d,u)});let s=n.syncPointTree_.get(t);s?i=i||Oe(s,R()):(s=new Va,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new Me(i,!0,!1):null,a=Gn(n.pendingWriteTree_,e._path),l=za(s,e,a,r?o.getNode():E.EMPTY_NODE,r);return Mp(l)}function wt(n,e){return Xa(e,n.syncPointTree_,null,Gn(n.pendingWriteTree_,R()))}function Xa(n,e,t,i){if(A(n.path))return Za(n,e,t,i);{const s=e.get(R());t==null&&s!=null&&(t=Oe(s,R()));let r=[];const o=T(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,d=Ba(i,o);r=r.concat(Xa(a,l,c,d))}return s&&(r=r.concat(As(s,n,i,t))),r}}function Za(n,e,t,i){const s=e.get(R());t==null&&s!=null&&(t=Oe(s,R()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Ba(i,o),d=n.operationForChild(o);d&&(r=r.concat(Za(d,a,l,c)))}),s&&(r=r.concat(As(s,n,i,t))),r}function el(n,e){const t=e.query,i=jt(n,t);return{hashFn:()=>(Dp(e)||E.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Jp(n,t._path,i):Qp(n,t._path);{const r=Yh(s,t);return Mn(n,t,null,r)}}}}function jt(n,e){const t=Yn(e);return n.queryToTagMap.get(t)}function Yn(n){return n._path.toString()+"$"+n._queryIdentifier}function Ns(n,e){return n.tagToQueryMap.get(e)}function Ps(n){const e=n.indexOf("$");return m(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new P(n.substr(0,e))}}function Os(n,e,t){const i=n.syncPointTree_.get(e);m(i,"Missing sync point for query tag that we're tracking");const s=Gn(n.pendingWriteTree_,e);return As(i,t,s,null)}function em(n){return n.fold((e,t,i)=>{if(t&&Fe(t))return[Kn(t)];{let s=[];return t&&(s=Ga(t)),G(i,(r,o)=>{s=s.concat(o)}),s}})}function Lt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(zp())(n._repo,n._path):n}function tm(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Yn(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function nm(){return Gp++}function im(n,e,t){const i=e._path,s=jt(n,e),r=el(n,t),o=n.listenProvider_.startListening(Lt(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)m(!Fe(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,u)=>{if(!A(c)&&d&&Fe(d))return[Kn(d).query];{let h=[];return d&&(h=h.concat(Ga(d).map(f=>f.query))),G(u,(f,p)=>{h=h.concat(p)}),h}});for(let c=0;c<l.length;++c){const d=l[c];n.listenProvider_.stopListening(Lt(d),jt(n,d))}}return o}/**
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
 */class Ls{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ls(t)}node(){return this.node_}}class Ds{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=M(this.path_,e);return new Ds(this.syncTree_,t)}node(){return Rs(this.syncTree_,this.path_)}}const sm=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},to=function(n,e,t){if(!n||typeof n!="object")return n;if(m(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return rm(n[".sv"],e,t);if(typeof n[".sv"]=="object")return om(n[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},rm=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:m(!1,"Unexpected server value: "+n)}},om=function(n,e,t){n.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&m(!1,"Unexpected increment value: "+i);const s=e.node();if(m(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},tl=function(n,e,t,i){return Ms(e,new Ds(t,n),i)},nl=function(n,e,t){return Ms(n,new Ls(e),t)};function Ms(n,e,t){const i=n.getPriority().val(),s=to(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=to(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new W(a,H(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new W(s))),o.forEachChild(F,(a,l)=>{const c=Ms(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Fs{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function $s(n,e){let t=e instanceof P?e:new P(e),i=n,s=T(t);for(;s!==null;){const r=ct(i.node.children,s)||{children:{},childCount:0};i=new Fs(s,i,r),t=D(t),s=T(t)}return i}function Et(n){return n.node.value}function il(n,e){n.node.value=e,Vi(n)}function sl(n){return n.node.childCount>0}function am(n){return Et(n)===void 0&&!sl(n)}function Qn(n,e){G(n.node.children,(t,i)=>{e(new Fs(t,n,i))})}function rl(n,e,t,i){t&&e(n),Qn(n,s=>{rl(s,e,!0)})}function lm(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function nn(n){return new P(n.parent===null?n.name:nn(n.parent)+"/"+n.name)}function Vi(n){n.parent!==null&&cm(n.parent,n.name,n)}function cm(n,e,t){const i=am(t),s=ce(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Vi(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Vi(n))}/**
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
 */const dm=/[\[\].#$\/\u0000-\u001F\u007F]/,um=/[\[\].#$\u0000-\u001F\u007F]/,Ci=10*1024*1024,Us=function(n){return typeof n=="string"&&n.length!==0&&!dm.test(n)},ol=function(n){return typeof n=="string"&&n.length!==0&&!um.test(n)},hm=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ol(n)},fm=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!hs(n)||n&&typeof n=="object"&&ce(n,".sv")},al=function(n,e,t,i){i&&e===void 0||Jn(Un(n,"value"),e,t)},Jn=function(n,e,t){const i=t instanceof P?new Rf(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+He(i));if(typeof e=="function")throw new Error(n+"contains a function "+He(i)+" with contents = "+e.toString());if(hs(e))throw new Error(n+"contains "+e.toString()+" "+He(i));if(typeof e=="string"&&e.length>Ci/3&&Bn(e)>Ci)throw new Error(n+"contains a string greater than "+Ci+" utf8 bytes "+He(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(G(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Us(o)))throw new Error(n+" contains an invalid key ("+o+") "+He(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Nf(i,o),Jn(n,a,i),Pf(i)}),s&&r)throw new Error(n+' contains ".value" child '+He(i)+" in addition to actual children.")}},pm=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const r=Ut(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Us(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Af);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&Z(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},mm=function(n,e,t,i){const s=Un(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];G(e,(o,a)=>{const l=new P(o);if(Jn(s,a,M(t,l)),_s(l)===".priority"&&!fm(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),pm(s,r)},ll=function(n,e,t,i){if(!ol(t))throw new Error(Un(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},gm=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ll(n,e,t)},cl=function(n,e){if(T(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},_m=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Us(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!hm(t))throw new Error(Un(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class vm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Xn(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!vs(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function dl(n,e,t){Xn(n,t),ul(n,i=>vs(i,e))}function ee(n,e,t){Xn(n,t),ul(n,i=>Z(i,e)||Z(e,i))}function ul(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(ym(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function ym(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Rt&&z("event: "+t.toString()),bt(i)}}}/**
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
 */const bm="repo_interrupt",wm=25;class Em{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new vm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=kn(),this.transactionQueueTree_=new Fs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Im(n,e,t){if(n.stats_=ms(n.repoInfo_),n.forceRestClient_||Zh())n.server_=new xn(n.repoInfo_,(i,s,r,o)=>{no(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>io(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{q(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new ge(n.repoInfo_,e,(i,s,r,o)=>{no(n,i,s,r,o)},i=>{io(n,i)},i=>{Cm(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=rf(n.repoInfo_,()=>new sp(n.stats_,n.server_)),n.infoData_=new Zf,n.infoSyncTree_=new eo({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=tn(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Bs(n,"connected",!1),n.serverSyncTree_=new eo({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);ee(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function hl(n){const t=n.infoData_.getNode(new P(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Zn(n){return sm({timestamp:hl(n)})}function no(n,e,t,i,s){n.dataUpdateCount++;const r=new P(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=gn(t,c=>H(c));o=Xp(n.serverSyncTree_,r,l,s)}else{const l=H(t);o=Ja(n.serverSyncTree_,r,l,s)}else if(i){const l=gn(t,c=>H(c));o=Yp(n.serverSyncTree_,r,l)}else{const l=H(t);o=tn(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=mt(n,r)),ee(n.eventQueue_,a,o)}function io(n,e){Bs(n,"connected",e),e===!1&&km(n)}function Cm(n,e){G(e,(t,i)=>{Bs(n,t,i)})}function Bs(n,e,t){const i=new P("/.info/"+e),s=H(t);n.infoData_.updateSnapshot(i,s);const r=tn(n.infoSyncTree_,i,s);ee(n.eventQueue_,i,r)}function Hs(n){return n.nextWriteId_++}function Sm(n,e,t){const i=Zp(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=H(s).withIndex(e._queryParams.getIndex());ji(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=tn(n.serverSyncTree_,e._path,r);else{const a=jt(n.serverSyncTree_,e);o=Ja(n.serverSyncTree_,e._path,r,a)}return ee(n.eventQueue_,e._path,o),Mn(n.serverSyncTree_,e,t,null,!0),r},s=>(sn(n,"get for query "+q(e)+" failed: "+s),Promise.reject(new Error(s))))}function Tm(n,e,t,i,s){sn(n,"set",{path:e.toString(),value:t,priority:i});const r=Zn(n),o=H(t,i),a=Rs(n.serverSyncTree_,e),l=nl(o,a,r),c=Hs(n),d=Qa(n.serverSyncTree_,e,l,c,!0);Xn(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(h,f)=>{const p=h==="ok";p||Y("set at "+e+" failed: "+h);const v=xe(n.serverSyncTree_,c,!p);ee(n.eventQueue_,e,v),zi(n,s,h,f)});const u=Ws(n,e);mt(n,u),ee(n.eventQueue_,u,[])}function xm(n,e,t,i){sn(n,"update",{path:e.toString(),value:t});let s=!0;const r=Zn(n),o={};if(G(t,(a,l)=>{s=!1,o[a]=tl(M(e,a),H(l),n.serverSyncTree_,r)}),s)z("update() called with empty data.  Don't do anything."),zi(n,i,"ok",void 0);else{const a=Hs(n),l=Kp(n.serverSyncTree_,e,o,a);Xn(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,d)=>{const u=c==="ok";u||Y("update at "+e+" failed: "+c);const h=xe(n.serverSyncTree_,a,!u),f=h.length>0?mt(n,e):e;ee(n.eventQueue_,f,h),zi(n,i,c,d)}),G(t,c=>{const d=Ws(n,M(e,c));mt(n,d)}),ee(n.eventQueue_,e,[])}}function km(n){sn(n,"onDisconnectEvents");const e=Zn(n),t=kn();$i(n.onDisconnect_,R(),(s,r)=>{const o=tl(s,r,n.serverSyncTree_,e);Da(t,s,o)});let i=[];$i(t,R(),(s,r)=>{i=i.concat(tn(n.serverSyncTree_,s,r));const o=Ws(n,s);mt(n,o)}),n.onDisconnect_=kn(),ee(n.eventQueue_,R(),i)}function Am(n,e,t){let i;T(e._path)===".info"?i=ji(n.infoSyncTree_,e,t):i=ji(n.serverSyncTree_,e,t),dl(n.eventQueue_,e._path,i)}function fl(n,e,t){let i;T(e._path)===".info"?i=Mn(n.infoSyncTree_,e,t):i=Mn(n.serverSyncTree_,e,t),dl(n.eventQueue_,e._path,i)}function Rm(n){n.persistentConnection_&&n.persistentConnection_.interrupt(bm)}function sn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),z(t,...e)}function zi(n,e,t,i){e&&bt(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function pl(n,e,t){return Rs(n.serverSyncTree_,e,t)||E.EMPTY_NODE}function qs(n,e=n.transactionQueueTree_){if(e||ei(n,e),Et(e)){const t=gl(n,e);m(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Nm(n,nn(e),t)}else sl(e)&&Qn(e,t=>{qs(n,t)})}function Nm(n,e,t){const i=t.map(c=>c.currentWriteId),s=pl(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const d=t[c];m(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=K(e,d.path);r=r.updateChild(u,d.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{sn(n,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let h=0;h<t.length;h++)t[h].status=2,d=d.concat(xe(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&u.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();ei(n,$s(n.transactionQueueTree_,e)),qs(n,n.transactionQueueTree_),ee(n.eventQueue_,e,d);for(let h=0;h<u.length;h++)bt(u[h])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{Y("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}mt(n,e)}},o)}function mt(n,e){const t=ml(n,e),i=nn(t),s=gl(n,t);return Pm(n,s,i),i}function Pm(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=K(t,l.path);let d=!1,u;if(m(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,u=l.abortReason,s=s.concat(xe(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=wm)d=!0,u="maxretry",s=s.concat(xe(n.serverSyncTree_,l.currentWriteId,!0));else{const h=pl(n,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){Jn("transaction failed: Data returned ",f,l.path);let p=H(f);typeof f=="object"&&f!=null&&ce(f,".priority")||(p=p.updatePriority(h.getPriority()));const y=l.currentWriteId,k=Zn(n),_=nl(p,h,k);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=_,l.currentWriteId=Hs(n),o.splice(o.indexOf(y),1),s=s.concat(Qa(n.serverSyncTree_,l.path,_,l.currentWriteId,l.applyLocally)),s=s.concat(xe(n.serverSyncTree_,y,!0))}else d=!0,u="nodata",s=s.concat(xe(n.serverSyncTree_,l.currentWriteId,!0))}ee(n.eventQueue_,t,s),s=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}ei(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)bt(i[a]);qs(n,n.transactionQueueTree_)}function ml(n,e){let t,i=n.transactionQueueTree_;for(t=T(e);t!==null&&Et(i)===void 0;)i=$s(i,t),e=D(e),t=T(e);return i}function gl(n,e){const t=[];return _l(n,e,t),t.sort((i,s)=>i.order-s.order),t}function _l(n,e,t){const i=Et(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Qn(e,s=>{_l(n,s,t)})}function ei(n,e){const t=Et(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,il(e,t.length>0?t:void 0)}Qn(e,i=>{ei(n,i)})}function Ws(n,e){const t=nn(ml(n,e)),i=$s(n.transactionQueueTree_,e);return lm(i,s=>{Si(n,s)}),Si(n,i),rl(i,s=>{Si(n,s)}),t}function Si(n,e){const t=Et(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(m(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(xe(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?il(e,void 0):t.length=r+1,ee(n.eventQueue_,nn(e),s);for(let o=0;o<i.length;o++)bt(i[o])}}/**
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
 */function Om(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Lm(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Y(`Invalid query segment '${t}' in query '${n}'`)}return e}const so=function(n,e){const t=Dm(n),i=t.namespace;t.domain==="firebase.com"&&be(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&be("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||jh();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new va(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new P(t.pathString)}},Dm=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let d=n.indexOf("/");d===-1&&(d=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(d,u)),d<u&&(s=Om(n.substring(d,u)));const h=Lm(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */const ro="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Mm=function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=ro.charAt(t%64),t=Math.floor(t/64);m(t===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=ro.charAt(e[s]);return m(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class Fm{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+q(this.snapshot.exportVal())}}class $m{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class vl{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class js{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return A(this._path)?null:_s(this._path)}get ref(){return new we(this._repo,this._path)}get _queryIdentifier(){const e=jr(this._queryParams),t=fs(e);return t==="{}"?"default":t}get _queryObject(){return jr(this._queryParams)}isEqual(e){if(e=X(e),!(e instanceof js))return!1;const t=this._repo===e._repo,i=vs(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+kf(this._path)}}class we extends js{constructor(e,t){super(e,t,new Es,!1)}get parent(){const e=xa(this._path);return e===null?null:new we(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Vt{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new P(e),i=zt(this.ref,e);return new Vt(this._node.getChild(t),i,F)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Vt(s,zt(this.ref,i),F)))}hasChild(e){const t=new P(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function C(n,e){return n=X(n),n._checkNotDeleted("ref"),e!==void 0?zt(n._root,e):n._root}function zt(n,e){return n=X(n),T(n._path)===null?gm("child","path",e):ll("child","path",e),new we(n._repo,M(n._path,e))}function ti(n,e){n=X(n),cl("push",n._path),al("push",e,n._path,!0);const t=hl(n._repo),i=Mm(t),s=zt(n,i),r=zt(n,i);let o;return o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function $(n,e){n=X(n),cl("set",n._path),al("set",e,n._path,!1);const t=new Gt;return Tm(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function It(n,e){mm("update",e,n._path);const t=new Gt;return xm(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function te(n){n=X(n);const e=new vl(()=>{}),t=new ni(e);return Sm(n._repo,n,t).then(i=>new Vt(i,new we(n._repo,n._path),n._queryParams.getIndex()))}class ni{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Fm("value",this,new Vt(e.snapshotNode,new we(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new $m(this,e,t):null}matches(e){return e instanceof ni?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Um(n,e,t,i,s){const r=new vl(t,void 0),o=new ni(r);return Am(n._repo,n,o),()=>fl(n._repo,n,o)}function yl(n,e,t,i){return Um(n,"value",e)}function bl(n,e,t){fl(n._repo,n,null)}Bp(we);Vp(we);/**
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
 */const Bm="FIREBASE_DATABASE_EMULATOR_HOST",Gi={};let Hm=!1;function qm(n,e,t,i){n.repoInfo_=new va(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function Wm(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||be("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),z("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=so(r,s),a=o.repoInfo,l;typeof process<"u"&&Tr&&(l=Tr[Bm]),l?(r=`http://${l}?ns=${a.namespace}`,o=so(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new tf(n.name,n.options,e);_m("Invalid Firebase Database URL",o),A(o.path)||be("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Vm(a,n,c,new ef(n.name,t));return new zm(d,n)}function jm(n,e){const t=Gi[e];(!t||t[n.key]!==n)&&be(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Rm(n),delete t[n.key]}function Vm(n,e,t,i){let s=Gi[e.name];s||(s={},Gi[e.name]=s);let r=s[n.toURLString()];return r&&be("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Em(n,Hm,t,i),s[n.toURLString()]=r,r}class zm{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Im(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new we(this._repo,R())),this._rootInternal}_delete(){return this._rootInternal!==null&&(jm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&be("Cannot call "+e+" on a deleted database.")}}function Gm(n=Eo(),e){const t=is(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=fc("database");i&&Km(t,...i)}return t}function Km(n,e,t,i={}){n=X(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&be("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&be('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new fn(fn.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:pc(i.mockUserToken,n.app.options.projectId);r=new fn(o)}qm(s,e,t,r)}/**
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
 */function Ym(n){$h(vt),dt(new Ve("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Wm(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Re(xr,kr,n),Re(xr,kr,"esm2017")}ge.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ge.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Ym();const Qm={apiKey:"AIzaSyCzdkKcfNvafQ3x9NDUsTn8UOww7_v3nn0",authDomain:"who-s-the-queen-bee.firebaseapp.com",databaseURL:"https://who-s-the-queen-bee-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"who-s-the-queen-bee",storageBucket:"who-s-the-queen-bee.firebasestorage.app",messagingSenderId:"808367557368",appId:"1:808367557368:web:7af8a2948e62494c5e490d"},wl=wo(Qm),Jm=Mh(wl),S=Gm(wl),Xm="modulepreload",Zm=function(n){return"/queen-bee-scorecard/"+n},oo={},El=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=Zm(l),l in oo)return;oo[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Xm,c||(u.as="script"),u.crossOrigin="",u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),c)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};async function Xe(){const n=await te(C(S,"employees"));return n.exists()?n.val():{}}async function ii(n,e){await It(C(S,`employees/${n}`),e)}function Ct(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`}async function si(n,e=Ct()){const t=await te(C(S,`monthly_points/${e}/${n}`));return t.exists()?t.val():{points:0,rank:null,db_count:0,db_pts_deducted:0,net_points:0}}async function Il(n,e,t=Ct()){const i=await si(n,t),s={...i,points:(i.points||0)+e,net_points:(i.net_points||0)+e};return await $(C(S,`monthly_points/${t}/${n}`),s),s}function ri(n=Ct(),e){const t=C(S,`monthly_points/${n}`);return yl(t,i=>e(i.exists()?i.val():{})),()=>bl(t)}async function oi(n){const e=await te(C(S,`vault/${n}`));return e.exists()?e.val():{total_earned:0,total_deducted:0,net:0,last_reset_date:null}}async function Cl(n,e){const t=await oi(n),i={...t,total_earned:(t.total_earned||0)+e,net:(t.net||0)+e};return await $(C(S,`vault/${n}`),i),i}async function Sl(n){const e=ti(C(S,"awards")),t={...n,timestamp:Date.now()};return await $(e,t),e.key}async function Tl(n){const e=await te(C(S,"awards"));if(!e.exists())return[];const t=e.val();return Object.entries(t).map(([i,s])=>({id:i,...s})).filter(i=>i.receiver_id===n).sort((i,s)=>s.timestamp-i.timestamp)}async function Vs(n){const e=await te(C(S,"awards"));if(!e.exists())return[];const t=e.val();return Object.entries(t).map(([i,s])=>({id:i,...s})).filter(i=>i.giver_id===n).sort((i,s)=>s.timestamp-i.timestamp)}async function xl(n){const e=ti(C(S,"dark_beans")),t={...n,timestamp:Date.now(),appealed:!1,appeal_status:null};return await $(e,t),e.key}async function zs(n,e,t){const i=await te(C(S,`offense_escalation/${n}/${e}/${t}`));return i.exists()?i.val().instance_count:0}async function kl(n,e,t){const i=await zs(n,e,t);return await $(C(S,`offense_escalation/${n}/${e}/${t}`),{instance_count:i+1}),i+1}async function rn(){const n=await te(C(S,"action_menu"));return n.exists()?n.val():{}}async function Al(n,e){await It(C(S,`action_menu/${n}`),e)}async function Gs(){const n=await te(C(S,"offense_menu"));return n.exists()?n.val():{}}async function Rl(n,e){await It(C(S,`offense_menu/${n}`),e)}async function Nl(n,e,t){await $(C(S,`votes/${n}/${e}`),t)}async function Pl(n=Ct()){const e=await te(C(S,`votes/${n}`));return e.exists()?e.val():{}}async function Ki(n,e){return(await te(C(S,`votes/${n}/${e}`))).exists()}async function Yi(n){const e=ti(C(S,"audit_flags")),t={...n,timestamp:Date.now(),status:"open",acted_by:null,acted_at:null};return await $(e,t),e.key}async function Ol(n,e,t){await It(C(S,`audit_flags/${n}`),{status:e,acted_by:t,acted_at:Date.now()})}async function Ll(){const n=await te(C(S,"audit_flags"));return n.exists()?Object.entries(n.val()).map(([e,t])=>({id:e,...t})).sort((e,t)=>t.timestamp-e.timestamp):[]}async function Dl(n){const e=ti(C(S,"pending_registrations"));return await $(e,{...n,submitted_at:Date.now(),status:"pending"}),e.key}async function Ml(n,e,t){const i="emp_"+n.slice(-8);return await $(C(S,`employees/${i}`),{name:e.name,email:e.email,role:e.role,outlet:e.outlet,pin_hash:e.pin_hash,active:!0}),await It(C(S,`pending_registrations/${n}`),{status:"approved",approved_by:t,approved_at:Date.now()}),i}async function Fl(n,e){await It(C(S,`pending_registrations/${n}`),{status:"rejected",rejected_by:e,rejected_at:Date.now()})}function Ks(n){const e=C(S,"pending_registrations");return yl(e,t=>{if(!t.exists()){n([]);return}const i=Object.entries(t.val()).map(([s,r])=>({id:s,...r})).filter(s=>s.status==="pending");n(i)}),()=>bl(e)}async function $l(n,e,t,i=Ct()){const s=await si(n,i),r={...s,db_count:(s.db_count||0)+e,db_pts_deducted:(s.db_pts_deducted||0)+t,net_points:Math.max(0,(s.net_points||s.points||0)-t)};return await $(C(S,`monthly_points/${i}/${n}`),r),r}async function Ul(n,e){const t=await oi(n),i={...t,total_deducted:(t.total_deducted||0)+e,net:Math.max(0,(t.net||0)-e)};return await $(C(S,`vault/${n}`),i),i}async function Bl(){await Promise.all([$(C(S,"awards"),null),$(C(S,"monthly_points"),null),$(C(S,"vault"),null),$(C(S,"dark_beans"),null),$(C(S,"audit_flags"),null),$(C(S,"offense_escalation"),null),$(C(S,"votes"),null),$(C(S,"nominations"),null)])}async function Hl(){await Promise.all([$(C(S,"employees"),null),$(C(S,"pending_registrations"),null)])}async function ql(){const n=await te(C(S,"config"));return n.exists()?n.val():{}}const eg=Object.freeze(Object.defineProperty({__proto__:null,addMonthlyPoints:Il,addVaultPoints:Cl,approveRegistration:Ml,castVote:Nl,createAuditFlag:Yi,createAward:Sl,createDarkBean:xl,deductMonthlyPoints:$l,deductVaultPoints:Ul,getActions:rn,getAllEmployees:Xe,getAllFlags:Ll,getAwardsByEmployee:Tl,getAwardsByGiver:Vs,getConfig:ql,getMonthlyPoints:si,getOffenseInstance:zs,getOffenses:Gs,getVault:oi,getVotes:Pl,hasVoted:Ki,incrementOffenseInstance:kl,listenLeaderboard:ri,listenPendingRegistrations:Ks,monthKey:Ct,nukeAllStaff:Hl,nukeTransactionalData:Bl,rejectRegistration:Fl,submitRegistration:Dl,updateFlagStatus:Ol,upsertAction:Al,upsertEmployee:ii,upsertOffense:Rl},Symbol.toStringTag,{value:"Module"})),ai="hb_bs_session",tg=2*60*60*1e3,ng=30*1e3;function Wl(n){const e={...n,loginAt:Date.now()};localStorage.setItem(ai,JSON.stringify(e))}function jl(){try{const n=localStorage.getItem(ai);if(!n)return null;const e=JSON.parse(n);return Date.now()-e.loginAt>tg?(Vl(),null):e}catch{return null}}function Vl(){localStorage.removeItem(ai)}function ig(){const n=jl();n&&(n.loginAt=Date.now(),localStorage.setItem(ai,JSON.stringify(n)))}function zl(){return setInterval(ig,ng)}async function sg(n){const t=new TextEncoder().encode(n),i=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(i)).map(r=>r.toString(16).padStart(2,"0")).join("")}async function rg(n,e){const{getAllEmployees:t}=await El(async()=>{const{getAllEmployees:o}=await Promise.resolve().then(()=>eg);return{getAllEmployees:o}},void 0),i=await t(),s=Object.entries(i).map(([o,a])=>({id:o,...a})).find(o=>o.email===n&&o.active!==!1);if(!s)throw new Error("Employee not found");const r=await sg(e);if(s.pin_hash!==r)throw new Error("Incorrect PIN");return Wl(s),s}function Fn(){return!!(window.PublicKeyCredential&&navigator.credentials)}async function og(n){if(!Fn())return!1;try{const e=crypto.getRandomValues(new Uint8Array(32)),t=new TextEncoder().encode(n.id),i=await navigator.credentials.create({publicKey:{challenge:e,rp:{name:"Heebee Bean System"},user:{id:t,name:n.email,displayName:n.name},pubKeyCredParams:[{type:"public-key",alg:-7}],authenticatorSelection:{authenticatorAttachment:"platform",userVerification:"required"},timeout:6e4,attestation:"none"}});return i?(await ii(n.id,{webauthn_id:lg(i.rawId)}),!0):!1}catch(e){return console.warn("WebAuthn registration failed, using PIN only:",e.message),!1}}async function ag(n){if(!Fn()||!n.webauthn_id)return!1;try{const e=crypto.getRandomValues(new Uint8Array(32)),t=cg(n.webauthn_id);return await navigator.credentials.get({publicKey:{challenge:e,allowCredentials:[{type:"public-key",id:t}],userVerification:"required",timeout:6e4}})?(Wl(n),n):!1}catch(e){return console.warn("WebAuthn auth failed, fall back to PIN:",e.message),!1}}function lg(n){return btoa(String.fromCharCode(...new Uint8Array(n)))}function cg(n){const e=atob(n),t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t.buffer}function dg(){Vl()}const re={green:{id:"green",icon:"🫘",label:"Green Bean",pts:1,dailyCap:3},silver:{id:"silver",icon:"☕",label:"Silver Bean",pts:5,dailyCap:3},gold:{id:"gold",icon:"🥇",label:"Gold Bean",pts:10,dailyCap:3},crystal:{id:"crystal",icon:"💎",label:"Crystal Bean",pts:25,dailyCap:10}},li=["Trainee","Barista","Senior Barista","Kitchen Helper","Commi 3","Commi 2","Commi 1","DCDP","CDP"],ci=["Floor Manager","Sous Chef","Cafe Manager","Head Chef","Area Manager","HOD","CEO","COO","Owner"],di=["HR","Accountant","Admin Staff"],Gl={"Floor Manager":["green"],"Sous Chef":["green"],"Cafe Manager":["silver"],"Head Chef":["silver"],"Area Manager":["gold"],HOD:["gold"],CEO:["green","silver","gold","crystal"],COO:["green","silver","gold","crystal"],Owner:["green","silver","gold","crystal"]},Kl={"Floor Manager":4,"Sous Chef":4,"Cafe Manager":8,"Head Chef":8,"Area Manager":16,HOD:16,CEO:1/0,COO:1/0,Owner:1/0},Qi=5,Yl=[{id:"act_01",name:"Daily Task Completion",applicable_bean_tier:"any",active:!0},{id:"act_02",name:"Perfect Attendance",applicable_bean_tier:"any",active:!0},{id:"act_03",name:"Upsell Achievement",applicable_bean_tier:"silver",active:!0},{id:"act_04",name:"Training Completion",applicable_bean_tier:"any",active:!0},{id:"act_05",name:"Customer Recovery Handle",applicable_bean_tier:"silver",active:!0},{id:"act_06",name:"Outlet Opening Standard",applicable_bean_tier:"any",active:!0},{id:"act_07",name:"Special Initiative",applicable_bean_tier:"gold",active:!0}],Ql=[{id:"off_01",name:"Late Arrival",base_db:1,escalation:"double",submission_cap:8,active:!0},{id:"off_02",name:"No-Show No Notice",base_db:5,escalation:"double",submission_cap:20,active:!0},{id:"off_03",name:"Negligence",base_db:2,escalation:"double",submission_cap:16,active:!0},{id:"off_04",name:"Duty Denial",base_db:3,escalation:"double",submission_cap:24,active:!0},{id:"off_05",name:"Misconduct",base_db:4,escalation:"double",submission_cap:32,active:!0},{id:"off_06",name:"Serious/Insubordination",base_db:10,escalation:"double",submission_cap:40,active:!0}],Ys=[{id:"SHB",name:"Sarabha Nagar",brand:"Heebee Coffee"},{id:"GHB",name:"Ghumar Mandi",brand:"Heebee Coffee"},{id:"JLD",name:"Model Town, Jalandhar",brand:"Heebee Coffee"},{id:"POUR",name:"Pour by Heebee",brand:"Pour"}];function Jl(n){return li.includes(n)}function Qs(n){return ci.includes(n)}function Xl(n){return di.includes(n)}function $n(n){return n==="HR"}function oe(n){return["CEO","COO","Owner"].includes(n)}function Zl(n){return Kl[n]??0}function Ji(n,e){return n.escalation==="double"?Math.min(n.base_db*Math.pow(2,e-1),n.submission_cap):n.base_db}function ec(n){const e={},t={};n.forEach(({giver_id:s,receiver_id:r,points_value:o})=>{e[s]=(e[s]||0)+o;const a=`${s}::${r}`;t[a]=(t[a]||0)+o});const i=[];return Object.entries(t).forEach(([s,r])=>{const[o,a]=s.split("::"),l=e[o]||0;l>0&&r/l>.6&&i.push({type:"bias_concentration",giver_id:o,receiver_id:a,pct:Math.round(r/l*100)})}),i}function tc(n){return n>=100?"disciplinary":n>=51?"owners_notified":n>=26?"suggest_disqualify":n>=10?"silent_flag":null}function nc(n){const e={green:0,silver:0,gold:0,crystal:0};return n.forEach(({bean_type:t})=>{e[t]!==void 0&&e[t]++}),Object.entries(e).filter(([,t])=>t>0).map(([t,i])=>`${re[t].icon} ${i}`).join(" · ")}const ug=Object.freeze(Object.defineProperty({__proto__:null,ADMIN_ROLES:di,BEAN_TIERS:re,DB_POINTS_EACH:Qi,DB_SUBMISSION_CEILINGS:Kl,DEFAULT_ACTIONS:Yl,DEFAULT_OFFENSES:Ql,GIVER_ROLES:ci,OUTLETS:Ys,RECEIVER_ROLES:li,ROLE_BEAN_PERMISSIONS:Gl,calcEscalatedDBs:Ji,checkBiasConcentration:ec,formatBeanCounts:nc,getDBThresholdLevel:tc,getDbCeiling:Zl,isAdmin:Xl,isGiver:Qs,isHR:$n,isOwner:oe,isReceiver:Jl},Symbol.toStringTag,{value:"Module"})),hg=[...li,...ci,...di];async function fg(n){const e=new TextEncoder().encode(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function pg(n,e){n.innerHTML=`
    <div class="page" style="display:flex;flex-direction:column;justify-content:center;min-height:100dvh;padding:32px 24px;">

      <div class="text-center" style="margin-bottom:32px;">
        <img src="/logo-light.png" alt="Heebee Coffee" style="width:80px;height:80px;object-fit:contain;margin-bottom:12px;" />
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
            ${hg.map(u=>`<option value="${u}">${u}</option>`).join("")}
          </select>
        </div>

        <div>
          <p class="section-header">Outlet</p>
          <select id="reg-outlet" class="input" style="appearance:none;-webkit-appearance:none;">
            <option value="">Select outlet…</option>
            ${Ys.map(u=>`<option value="${u.id}">${u.name}</option>`).join("")}
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
  `;const t=n.querySelector("#reg-name"),i=n.querySelector("#reg-email"),s=n.querySelector("#reg-role"),r=n.querySelector("#reg-outlet"),o=[0,1,2,3].map(u=>n.querySelector(`#reg-pin-${u}`)),a=n.querySelector("#reg-error"),l=n.querySelector("#reg-success"),c=n.querySelector("#btn-reg-submit");o.forEach((u,h)=>{u.addEventListener("input",f=>{const p=f.target.value.replace(/\D/g,"");f.target.value=p,p&&h<3&&o[h+1].focus()}),u.addEventListener("keydown",f=>{f.key==="Backspace"&&!u.value&&h>0&&(o[h-1].focus(),o[h-1].value="")})}),n.querySelector("#btn-reg-back").addEventListener("click",e),c.addEventListener("click",async()=>{a.classList.add("hidden");const u=t.value.trim(),h=i.value.trim().toLowerCase(),f=s.value,p=r.value,v=o.map(y=>y.value).join("");if(!u)return d("Enter your full name");if(!h.includes("@"))return d("Enter a valid email");if(!f)return d("Select your role");if(!p)return d("Select your outlet");if(v.length<4)return d("Enter a 4-digit PIN");c.disabled=!0,c.textContent="Submitting…";try{const y=await fg(v);await Dl({name:u,email:h,role:f,outlet:p,pin_hash:y}),l.textContent="Request sent! Your manager will approve your account shortly.",l.classList.remove("hidden"),c.textContent="Submitted!",setTimeout(e,3e3)}catch{d("Something went wrong. Please try again."),c.disabled=!1,c.textContent="Submit Registration"}});function d(u){a.textContent=u,a.classList.remove("hidden")}}function ic(n,e){n.innerHTML=`
    <div class="page" style="display:flex;flex-direction:column;justify-content:center;min-height:100dvh;">

      <!-- Logo / Brand -->
      <div class="text-center" style="margin-bottom:40px;">
        <img src="/logo-light.png" alt="Heebee Coffee" style="width:120px;height:120px;object-fit:contain;margin-bottom:12px;" />
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
  `;const t=n.querySelector("#inp-email"),i=n.querySelector("#btn-next"),s=n.querySelector("#step-email"),r=n.querySelector("#step-pin"),o=n.querySelector("#login-error"),a=n.querySelector("#btn-back");let l="";i.addEventListener("click",c),t.addEventListener("keydown",_=>{_.key==="Enter"&&c()});function c(){const _=t.value.trim().toLowerCase();if(!_.includes("@")){p("Enter a valid email address");return}l=_,s.classList.add("hidden"),r.classList.remove("hidden"),n.querySelector("#pin-0").focus(),h(_)}a.addEventListener("click",()=>{r.classList.add("hidden"),s.classList.remove("hidden"),y(),v()}),n.querySelector("#btn-register").addEventListener("click",()=>{pg(n,()=>ic(n,e))});const d=[0,1,2,3].map(_=>n.querySelector(`#pin-${_}`));d.forEach((_,b)=>{_.addEventListener("input",O=>{const U=O.target.value.replace(/\D/g,"");O.target.value=U,U&&b<3&&d[b+1].focus(),b===3&&U&&u()}),_.addEventListener("keydown",O=>{O.key==="Backspace"&&!_.value&&b>0&&(d[b-1].focus(),d[b-1].value="")})});async function u(){const _=d.map(b=>b.value).join("");if(!(_.length<4)){k(!0),v();try{const b=await rg(l,_);e(b),Fn()&&!b.webauthn_id&&setTimeout(()=>f(b),500)}catch(b){p(b.message==="Incorrect PIN"?"Incorrect PIN. Try again.":"Employee not found."),y(),d[0].focus()}finally{k(!1)}}}async function h(_){if(Fn())try{const b=await Xe(),O=Object.entries(b).map(([g,w])=>({id:g,...w})).find(g=>g.email===_&&g.webauthn_id&&g.active!==!1);if(!O)return;const U=await ag(O);U&&e(U)}catch{}}async function f(_){confirm("Enable Face ID / Fingerprint for faster login?")&&await og(_)}function p(_){o.textContent=_,o.classList.remove("hidden")}function v(){o.classList.add("hidden")}function y(){d.forEach(_=>{_.value=""})}function k(_){d.forEach(b=>{b.disabled=_})}}const tt=300,mg=80;async function gg(n){return new Promise((e,t)=>{const i=new Image,s=URL.createObjectURL(n);i.onload=()=>{URL.revokeObjectURL(s);const r=document.createElement("canvas");let{width:o,height:a}=i;o>a&&o>tt?(a=Math.round(a*tt/o),o=tt):a>tt&&(o=Math.round(o*tt/a),a=tt),r.width=o,r.height=a,r.getContext("2d").drawImage(i,0,0,o,a),sc(r,.8,e)},i.onerror=t,i.src=s})}function sc(n,e,t,i){const s=n.toDataURL("image/jpeg",e);Math.round(s.length*3/4/1024)<=mg||e<=.3?t(s):sc(n,e-.15,t)}function je(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`}function We(n){return Number(n||0).toLocaleString("en-IN")}function ui(n){const e=Date.now()-n;return e<6e4?"just now":e<36e5?`${Math.floor(e/6e4)}m ago`:e<864e5?`${Math.floor(e/36e5)}h ago`:`${Math.floor(e/864e5)}d ago`}function _g(n=new Date){return n.getDate()>=28}function vg(n){return Object.entries(n).map(([e,t])=>({id:e,...t})).sort((e,t)=>(t.net_points||t.points||0)-(e.net_points||e.points||0)).map((e,t)=>({...e,rank:t+1}))}async function yg(n,e,t,{onLogout:i,navigate:s}){t.db_toggle,n.innerHTML=`
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
  `,n.querySelector("#btn-logout").addEventListener("click",i);try{Qs(e.role)?await wg(n,e,s):Xl(e.role)?await Eg(n,e,s):await bg(n,e,t,s)}catch(r){console.error("Dashboard error:",r),n.querySelector("#dash-loading").classList.remove("hidden"),n.querySelector("#dash-loading").innerHTML=`<div class="empty-state"><p style="color:var(--red);">Failed to load dashboard.</p><p class="text-dim text-sm mt-8">${r.message}</p></div>`}}async function bg(n,e,t,i){const s=t.db_toggle===!0,[r,o,a]=await Promise.all([si(e.id),oi(e.id),Tl(e.id)]);n.querySelector("#dash-loading").classList.add("hidden");const l=n.querySelector("#dash-content");l.classList.remove("hidden"),ri(je(),y=>{const _=vg(y).find(O=>O.id===e.id),b=l.querySelector("#my-rank");b&&_&&(b.textContent=`#${_.rank}`)});const c=a.slice(0,5),d=nc(a),u=e.name.split(" ").map(y=>y[0]).join("").slice(0,2).toUpperCase(),h=["#8B5E3C","#5E6E8B","#5E8B6E","#8B5E7A","#7A8B5E","#6E5E8B","#8B7A5E"],f=h[e.name.charCodeAt(0)%h.length];l.innerHTML=`
    <!-- Profile Photo -->
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px;">
      <div style="position:relative;">
        ${e.photo_url?`<img id="profile-hex" src="${e.photo_url}" style="width:64px;height:64px;clip-path:polygon(50% 0%,95% 25%,95% 75%,50% 100%,5% 75%,5% 25%);object-fit:cover;" />`:`<div id="profile-hex" style="width:64px;height:64px;clip-path:polygon(50% 0%,95% 25%,95% 75%,50% 100%,5% 75%,5% 25%);background:${f};display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:1.3rem;">${u}</div>`}
        <label for="photo-upload" style="position:absolute;bottom:-4px;right:-4px;width:22px;height:22px;background:var(--gold);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:0.65rem;color:#000;font-weight:700;">📷</label>
        <input type="file" id="photo-upload" accept="image/*" style="display:none;" />
      </div>
      <div>
        <p style="font-weight:600;font-size:1rem;">${e.name}</p>
        <p class="text-dim text-sm">${e.role} · ${e.outlet}</p>
        <p id="photo-status" class="text-dim" style="font-size:0.72rem;margin-top:2px;"></p>
      </div>
    </div>

    <div class="card mb-16" style="text-align:center;padding:28px 20px;">
      <p class="section-header" style="margin-bottom:4px;">This Month</p>
      <div class="mono text-gold" style="font-size:3rem;font-weight:400;margin-bottom:4px;">
        ${We(r.net_points||r.points||0)}
      </div>
      <p class="text-dim text-sm">points · Rank <span id="my-rank" class="text-gold">#${r.rank||"—"}</span></p>
    </div>

    <div class="card mb-16">
      <div class="flex justify-between items-center">
        <div>
          <p class="section-header">🏦 Vault</p>
          <div class="mono" style="font-size:1.6rem;margin-top:4px;">
            ${We(o.total_earned||0)} <span class="text-dim text-sm">pts earned</span>
          </div>
        </div>
        ${s&&o.total_deducted>0?`
        <div style="text-align:right;">
          <p class="text-sm" style="color:var(--red);">−${We(o.total_deducted)}</p>
          <p class="text-xs text-dim">deducted</p>
          <p class="mono text-sm text-gold mt-4">${We(o.net)} net</p>
        </div>`:""}
      </div>
    </div>

    ${d?`
    <div class="card mb-16">
      <p class="section-header">🏆 Trophy Shelf</p>
      <div class="trophy-shelf mt-8">${Ig(a)}</div>
    </div>`:""}

    <p class="section-header">Recent Beans</p>
    ${c.length===0?'<div class="empty-state"><div class="icon">🫘</div><p>No beans yet this month</p></div>':c.map(y=>Cg(y)).join("")}
  `;const p=l.querySelector("#photo-upload"),v=l.querySelector("#photo-status");l.querySelector("#profile-hex"),p==null||p.addEventListener("change",async y=>{const k=y.target.files[0];if(k){v.textContent="Compressing…";try{const _=await gg(k),b=Math.round(_.length/1024);await ii(e.id,{photo_url:_}),e.photo_url=_;const O=l.querySelector("#profile-hex");O&&(O.outerHTML=`<img id="profile-hex" src="${_}" style="width:64px;height:64px;clip-path:polygon(50% 0%,95% 25%,95% 75%,50% 100%,5% 75%,5% 25%);object-fit:cover;" />`),v.textContent=`✓ Saved (${b}KB)`,setTimeout(()=>{v.textContent=""},3e3)}catch(_){v.textContent="Failed. Try a smaller image.",console.error(_)}}})}async function wg(n,e,t){var u;const[i,s,r]=await Promise.all([Vs(e.id),Xe(),rn()]);n.querySelector("#dash-loading").classList.add("hidden");const o=n.querySelector("#dash-content");o.classList.remove("hidden");const a=je(),l=i.filter(h=>{const f=new Date(h.timestamp);return`${f.getFullYear()}-${String(f.getMonth()+1).padStart(2,"0")}`===a}),c=l.reduce((h,f)=>h+f.points_value*(f.quantity||1),0),d={green:0,silver:0,gold:0,crystal:0};l.forEach(h=>{d[h.bean_type]!==void 0&&d[h.bean_type]++}),o.innerHTML=`
    <div class="card mb-16" style="text-align:center;padding:28px 20px;">
      <p class="section-header" style="margin-bottom:4px;">Beans Given This Month</p>
      <div class="mono text-gold" style="font-size:3rem;font-weight:400;margin-bottom:4px;">
        ${l.length}
      </div>
      <p class="text-dim text-sm">${We(c)} pts awarded to your team</p>
    </div>

    <div class="card mb-16">
      <p class="section-header" style="margin-bottom:12px;">Bean Breakdown</p>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;text-align:center;">
        ${Object.entries(d).map(([h,f])=>`
          <div style="padding:12px 8px;border-radius:12px;background:var(--glass-bg);">
            <div style="font-size:1.4rem;margin-bottom:4px;">${re[h].icon}</div>
            <div class="mono text-gold" style="font-size:1rem;">${f}</div>
            <div class="text-dim" style="font-size:0.65rem;margin-top:2px;">${re[h].label.replace(" Bean","")}</div>
          </div>
        `).join("")}
      </div>
    </div>

    <div style="display:flex;gap:10px;margin-bottom:24px;">
      <button class="btn btn-primary" id="btn-quick-award" style="flex:1;height:48px;">
        + Award Beans
      </button>
    </div>

    <p class="section-header">Recent Awards Given</p>
    ${l.length===0?'<div class="empty-state"><div class="icon">🫘</div><p>No beans given this month yet</p></div>':l.slice(0,5).map(h=>Sg(h,s,r)).join("")}
  `,(u=o.querySelector("#btn-quick-award"))==null||u.addEventListener("click",()=>t("award"))}async function Eg(n,e,t){var s,r;n.querySelector("#dash-loading").classList.add("hidden");const i=n.querySelector("#dash-content");i.classList.remove("hidden"),i.innerHTML=`
    <div class="card mb-16" style="text-align:center;padding:32px 20px;">
      <div style="font-size:2rem;margin-bottom:12px;">👋</div>
      <h2 style="font-size:1.1rem;margin-bottom:6px;">Welcome, ${e.name}</h2>
      <p class="text-dim text-sm">${e.role} · ${e.outlet}</p>
    </div>
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
  `,(s=i.querySelector("#goto-approvals"))==null||s.addEventListener("click",()=>t("approvals")),(r=i.querySelector("#goto-audit"))==null||r.addEventListener("click",()=>t("audit"))}function Ig(n){const e={green:0,silver:0,gold:0,crystal:0};return n.forEach(({bean_type:t})=>{e[t]!==void 0&&e[t]++}),Object.entries(e).filter(([,t])=>t>0).map(([t,i])=>`
      <div class="trophy-item">
        <span style="font-size:1.3rem;">${re[t].icon}</span>
        <span>${i}</span>
      </div>
    `).join("")}function Cg(n){const e=re[n.bean_type]||{icon:"🫘",label:n.bean_type};return`
    <div class="lb-row" style="margin-bottom:8px;">
      <span style="font-size:1.4rem;">${e.icon}</span>
      <div style="flex:1;">
        <p style="font-size:0.9rem;">${e.label} · <span class="text-gold mono">+${n.points_value*(n.quantity||1)} pts</span></p>
        <p class="text-dim text-xs">${n.action_id||"Award"} · ${ui(n.timestamp)}</p>
      </div>
    </div>
  `}function Sg(n,e={},t={}){var a;const i=re[n.bean_type]||{icon:"🫘",label:n.bean_type},s=e[n.receiver_id],r=s?s.name:n.giver_name||"Staff",o=((a=t[n.action_id])==null?void 0:a.name)||n.action_id||"Award";return`
    <div class="lb-row" style="margin-bottom:8px;">
      <span style="font-size:1.4rem;">${i.icon}</span>
      <div style="flex:1;">
        <p style="font-size:0.9rem;">${r} · <span class="text-gold mono">+${n.points_value*(n.quantity||1)} pts</span></p>
        <p class="text-dim text-xs">${o} · ${ui(n.timestamp)}</p>
      </div>
    </div>
  `}function Tg(n){const e=(n.name||"??").split(" ").map(r=>r[0]).join("").slice(0,2).toUpperCase(),t=["#8B5E3C","#5E6E8B","#5E8B6E","#8B5E7A","#7A8B5E","#6E5E8B","#8B7A5E"],i=t[(n.name||"").charCodeAt(0)%t.length],s=n.photo_url;return s?`<div class="avatar-hex-wrap"><img class="avatar-hex" src="${s}" alt="${e}" /></div>`:`
    <div class="avatar-hex-wrap">
      <div class="avatar-hex" style="background:${i};color:#fff;">
        ${e}
      </div>
    </div>
  `}function xg(n,e,t){let i={};n.innerHTML=`
    <div class="page">
      <h1 style="font-size:1.4rem;margin-bottom:2px;">Leaderboard</h1>
      <p class="text-dim text-sm" style="margin-bottom:20px;">${kg()} · Live</p>
      <div id="lb-list">
        <div class="loading-center" style="min-height:40vh;"><div class="spinner"></div></div>
      </div>
    </div>
  `;const s=n.querySelector("#lb-list");Xe().then(o=>{i=o;const a=ri(je(),c=>{r(c)}),l=new MutationObserver(()=>{document.contains(s)||(a(),l.disconnect())});l.observe(document.body,{childList:!0,subtree:!0})});function r(o){const a=Object.entries(o).map(([l,c])=>({id:l,...c,emp:i[l]||{}})).filter(l=>l.emp.active!==!1).sort((l,c)=>(c.net_points||c.points||0)-(l.net_points||l.points||0)).map((l,c)=>({...l,rank:c+1}));if(a.length===0){s.innerHTML=`
        <div class="empty-state">
          <div style="font-size:2.5rem;margin-bottom:12px;">🏆</div>
          <p class="text-dim">No points recorded yet this month</p>
          <p class="text-dim text-sm" style="margin-top:4px;">Be the first to earn beans!</p>
        </div>
      `;return}s.innerHTML=a.map(l=>{const c=l.id===e.id,d=l.net_points||l.points||0,u=l.rank===1,h=l.rank===2?"🥈":l.rank===3?"🥉":null,f=l.rank<=3?`top${l.rank}`:"";return`
        <div class="lb-row ${u?"lb-row-top1":""} ${c?"self":""}" style="margin-bottom:${u?"20px":"8px"};">
          ${u?'<div class="queen-bee-glow"></div>':""}
          ${Tg(l.emp)}
          <div class="lb-rank ${f}" style="min-width:24px;">
            ${h?`<span style="font-size:1.1rem;">${h}</span>`:u?"":`<span style="font-size:0.8rem;color:var(--text-tertiary);">#${l.rank}</span>`}
          </div>
          <div class="lb-name">
            <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
              <span style="${u?"color:var(--gold);font-weight:600;":""}">${l.emp.name||l.id}</span>
              ${c?'<span class="badge badge-gold" style="font-size:0.6rem;padding:2px 7px;">You</span>':""}
              ${u?'<span style="font-size:0.75rem;color:var(--gold);opacity:0.9;display:flex;align-items:center;gap:3px;"><span class="queen-bee-crown" style="position:static;font-size:0.9rem;transform:none;animation:crown-float 2s ease-in-out infinite;display:inline-block;">👑🐝</span> Queen Bee</span>':""}
            </div>
            <div class="text-dim" style="font-size:0.75rem;margin-top:2px;">${l.emp.role||""} · ${l.emp.outlet||""}</div>
          </div>
          <div class="lb-pts">${We(d)} <span style="font-size:0.7rem;color:var(--text-tertiary);">pts</span></div>
        </div>
      `}).join("")}}function kg(){return new Date().toLocaleDateString("en-IN",{month:"long",year:"numeric"})}const Ag="";async function Rg(n,e){try{await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(t){console.error("Slack webhook failed:",t)}}async function Ng({receiverName:n,beanType:e,pts:t,giverName:i,actionName:s}){const{BEAN_TIERS:r}=await El(async()=>{const{BEAN_TIERS:a}=await Promise.resolve().then(()=>ug);return{BEAN_TIERS:a}},void 0),o=r[e];await Rg(Ag,{text:`${o.icon} *${o.label}* awarded to *${n}* · +${t} pts
👤 From: ${i} · 📋 ${s}`})}async function Pg(n,e,t){n.innerHTML=`
    <div class="page">
      <h1 style="font-size:1.4rem;margin-bottom:4px;">Give Recognition</h1>
      <div class="flex gap-8 mb-16" id="award-tabs" style="margin-top:12px;">
        <button class="btn btn-primary award-tab" data-tab="award" style="flex:1;padding:10px;">🫘 Award Beans</button>
        <button class="btn btn-ghost  award-tab" data-tab="conduct" style="flex:1;padding:10px;">🌑 Conduct</button>
      </div>
      <div id="award-content">
        <div class="loading-center" style="min-height:40vh;"><div class="spinner"></div></div>
      </div>
    </div>
  `;let i="award",s={},r={},o={},a=[];try{[s,r,o]=await Promise.all([Xe(),rn(),Gs()]),a=Object.entries(s).map(([d,u])=>({id:d,...u})).filter(d=>Jl(d.role)&&d.active!==!1).sort((d,u)=>d.name.localeCompare(u.name))}catch{n.querySelector("#award-content").innerHTML='<p class="text-dim text-sm text-center">Failed to load. Check connection.</p>';return}n.querySelectorAll(".award-tab").forEach(d=>{d.addEventListener("click",()=>{i=d.dataset.tab,n.querySelectorAll(".award-tab").forEach(u=>{u.className=u.dataset.tab===i?"btn btn-primary award-tab":"btn btn-ghost award-tab",u.style.flex="1",u.style.padding="10px"}),i==="award"?l():c()})}),l();function l(){const d=n.querySelector("#award-content"),u=Gl[e.role]||[],h=Object.entries(r).map(([g,w])=>({id:g,...w})).filter(g=>g.active!==!1);if(a.length===0){d.innerHTML=`
        <div class="empty-state" style="min-height:40vh;">
          <div style="font-size:2.5rem;margin-bottom:16px;">👥</div>
          <p>No staff to award yet</p>
          <p class="text-dim text-sm mt-8">Approve team registrations from the Approvals tab first.</p>
        </div>
      `;return}let f={receiver:null,beanType:null,actionId:null,quantity:1,reasonText:""};d.innerHTML=`
      <p class="section-header">Who are you recognising?</p>
      <input id="search-emp" class="input" type="text" placeholder="Search by name…" style="margin-bottom:10px;" />
      <div id="emp-list" style="max-height:200px;overflow-y:auto;margin-bottom:24px;border-radius:var(--radius-md);"></div>

      <p class="section-header">Bean Type</p>
      <div id="bean-type-list" style="display:grid;grid-template-columns:repeat(${u.length>2?4:u.length},1fr);gap:10px;margin-bottom:24px;">
        ${u.map(g=>{const w=re[g];return`
            <div class="card bean-type-btn" data-type="${g}" style="text-align:center;cursor:pointer;padding:16px 8px;border-radius:var(--radius-md);">
              <div style="font-size:1.6rem;margin-bottom:6px;">${w.icon}</div>
              <div style="font-size:0.72rem;color:var(--text-secondary);margin-bottom:4px;">${w.label}</div>
              <div class="mono" style="font-size:0.78rem;color:var(--gold);">+${w.pts}pt</div>
            </div>
          `}).join("")}
      </div>

      <p class="section-header">Reason <span style="color:var(--text-tertiary);font-weight:400;">(required)</span></p>
      <div id="action-list" style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">
        ${h.map(g=>`
          <div class="action-btn" data-id="${g.id}"
            style="cursor:pointer;padding:8px 14px;border-radius:20px;border:1px solid var(--border);
            background:var(--glass-bg);font-size:0.82rem;color:var(--text-secondary);transition:all 0.2s;">
            ${g.name}
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
    `;const p=d.querySelector("#emp-list"),v=d.querySelector("#search-emp");let y=a;function k(){p.innerHTML=y.map(g=>{var w,B;return`
        <div class="lb-row emp-row" data-id="${g.id}" style="cursor:pointer;margin-bottom:6px;${((w=f.receiver)==null?void 0:w.id)===g.id?"border-color:var(--gold);background:rgba(201,168,76,0.06);":""}">
          <div style="flex:1;">
            <p style="font-size:0.9rem;">${g.name}</p>
            <p class="text-xs text-dim">${g.role} · ${g.outlet}</p>
          </div>
          ${((B=f.receiver)==null?void 0:B.id)===g.id?'<span class="text-gold">✓</span>':""}
        </div>
      `}).join(""),p.querySelectorAll(".emp-row").forEach(g=>{g.addEventListener("click",()=>{f.receiver=a.find(w=>w.id===g.dataset.id),k(),U()})})}v.addEventListener("input",()=>{const g=v.value.toLowerCase();y=g?a.filter(w=>w.name.toLowerCase().includes(g)):a,k()}),k(),d.querySelectorAll(".bean-type-btn").forEach(g=>{g.addEventListener("click",()=>{f.beanType=g.dataset.type,d.querySelectorAll(".bean-type-btn").forEach(w=>{w.style.borderColor=w.dataset.type===f.beanType?"var(--gold)":"var(--border)",w.style.background=w.dataset.type===f.beanType?"rgba(201,168,76,0.1)":"var(--glass-bg)"}),U()})}),d.querySelectorAll(".action-btn").forEach(g=>{g.addEventListener("click",()=>{f.actionId=g.dataset.id,d.querySelectorAll(".action-btn").forEach(w=>{w.style.background=w.dataset.id===f.actionId?"rgba(201,168,76,0.15)":"",w.style.borderColor=w.dataset.id===f.actionId?"rgba(201,168,76,0.4)":"",w.style.color=w.dataset.id===f.actionId?"var(--gold)":""}),U()})});const _=d.querySelector("#qty-display");d.querySelector("#btn-minus").addEventListener("click",()=>{f.quantity>1&&(f.quantity--,_.textContent=f.quantity)}),d.querySelector("#btn-plus").addEventListener("click",()=>{const g=f.beanType?re[f.beanType].dailyCap:10;f.quantity<g&&(f.quantity++,_.textContent=f.quantity)});const b=d.querySelector("#btn-submit"),O=d.querySelector("#award-error");function U(){b.disabled=!(f.receiver&&f.beanType&&f.actionId)}b.addEventListener("click",async()=>{if(!(!f.receiver||!f.beanType||!f.actionId)){b.disabled=!0,b.textContent="Awarding…",O.classList.add("hidden");try{const g=re[f.beanType],w=g.pts*f.quantity;await Sl({giver_id:e.id,giver_name:e.name,receiver_id:f.receiver.id,bean_type:f.beanType,points_value:g.pts,action_id:f.actionId,reason_text:d.querySelector("#inp-reason").value.trim(),outlet:e.outlet,quantity:f.quantity}),await Promise.all([Il(f.receiver.id,w),Cl(f.receiver.id,w)]),await Ng({receiverName:f.receiver.name,beanType:f.beanType,pts:w,giverName:e.name,actionName:f.actionId});const B=await Vs(e.id),V=je(),Ue=B.filter(de=>{const Xs=new Date(de.timestamp);return`${Xs.getFullYear()}-${String(Xs.getMonth()+1).padStart(2,"0")}`===V}),Ze=ec(Ue);for(const de of Ze)await Yi({type:"bias_concentration",giver_id:de.giver_id,receiver_id:de.receiver_id,suggestion_text:`${e.name} has directed ${de.pct}% of their beans to one person this month.`,suggestion:"Review award distribution to ensure fairness across the team."}).catch(()=>{});d.innerHTML=`
          <div class="text-center" style="padding:60px 20px;">
            <div style="font-size:3rem;margin-bottom:16px;">${g.icon}</div>
            <h2 style="margin-bottom:8px;">${g.label} Awarded!</h2>
            <p class="text-dim">+${w} pts to <strong>${f.receiver.name}</strong></p>
            <button class="btn btn-primary mt-24" id="btn-award-again">Award Another</button>
          </div>
        `,d.querySelector("#btn-award-again").addEventListener("click",l)}catch(g){O.textContent="Failed to submit. Try again.",O.classList.remove("hidden"),b.disabled=!1,b.textContent="Award Beans",console.error(g)}}})}function c(){const d=n.querySelector("#award-content"),u=Object.entries(o).map(([g,w])=>({id:g,...w})).filter(g=>g.active!==!1),h=Zl(e.role);if(a.length===0){d.innerHTML='<div class="empty-state"><div class="icon">👥</div><p class="text-dim">No staff to issue conduct to.</p></div>';return}if(u.length===0){d.innerHTML='<div class="empty-state"><div class="icon">⚙️</div><p class="text-dim">No offenses configured yet.</p></div>';return}let f={receiver:null,offense:null,note:""},p=0;d.innerHTML=`
      <div class="card mb-16" style="background:rgba(255,69,58,0.06);border-color:rgba(255,69,58,0.2);">
        <p style="font-size:0.8rem;color:var(--text-secondary);line-height:1.5;">
          🌑 Dark Beans deduct points and are logged. Your monthly conduct ceiling:
          <span class="mono text-gold">${h===1/0?"∞":h} DBs</span>
        </p>
      </div>

      <p class="section-header">Who is this about?</p>
      <input id="search-emp-c" class="input" type="text" placeholder="Search by name…" style="margin-bottom:10px;" />
      <div id="emp-list-c" style="max-height:180px;overflow-y:auto;margin-bottom:24px;border-radius:var(--radius-md);"></div>

      <p class="section-header">Offense</p>
      <div id="offense-list" style="display:flex;flex-direction:column;gap:8px;margin-bottom:24px;">
        ${u.map(g=>`
          <div class="lb-row offense-btn" data-id="${g.id}" style="cursor:pointer;">
            <div style="flex:1;">
              <p style="font-size:0.9rem;">${g.name}</p>
              <p class="text-xs text-dim">Base: ${g.base_db} DBs · Escalates ${g.escalation}</p>
            </div>
          </div>
        `).join("")}
      </div>

      <div id="conduct-preview" class="hidden card mb-16" style="background:rgba(255,69,58,0.06);border-color:rgba(255,69,58,0.25);text-align:center;padding:20px;">
      </div>

      <input id="inp-conduct-note" class="input" type="text" placeholder="Optional note / context…" style="margin-bottom:24px;" />

      <p id="conduct-error" class="text-sm hidden" style="color:var(--red);margin-bottom:12px;text-align:center;"></p>
      <button class="btn w-full" id="btn-conduct-submit" disabled
        style="height:54px;font-size:1rem;background:rgba(255,69,58,0.15);color:var(--red);border:1px solid rgba(255,69,58,0.3);">
        Issue Dark Beans
      </button>
    `;const v=d.querySelector("#emp-list-c"),y=d.querySelector("#search-emp-c");let k=a;function _(){v.innerHTML=k.map(g=>{var w,B;return`
        <div class="lb-row emp-row-c" data-id="${g.id}" style="cursor:pointer;margin-bottom:6px;${((w=f.receiver)==null?void 0:w.id)===g.id?"border-color:rgba(255,69,58,0.5);background:rgba(255,69,58,0.06);":""}">
          <div style="flex:1;"><p style="font-size:0.9rem;">${g.name}</p><p class="text-xs text-dim">${g.role} · ${g.outlet}</p></div>
          ${((B=f.receiver)==null?void 0:B.id)===g.id?'<span style="color:var(--red);">✓</span>':""}
        </div>
      `}).join(""),v.querySelectorAll(".emp-row-c").forEach(g=>{g.addEventListener("click",()=>{f.receiver=a.find(w=>w.id===g.dataset.id),_(),b()})})}y.addEventListener("input",()=>{const g=y.value.toLowerCase();k=g?a.filter(w=>w.name.toLowerCase().includes(g)):a,_()}),_(),d.querySelectorAll(".offense-btn").forEach(g=>{g.addEventListener("click",()=>{f.offense=u.find(w=>w.id===g.dataset.id),d.querySelectorAll(".offense-btn").forEach(w=>{var B,V;w.style.borderColor=w.dataset.id===((B=f.offense)==null?void 0:B.id)?"rgba(255,69,58,0.5)":"var(--border)",w.style.background=w.dataset.id===((V=f.offense)==null?void 0:V.id)?"rgba(255,69,58,0.06)":"var(--glass-bg)"}),b()})});async function b(){const g=d.querySelector("#conduct-preview"),w=d.querySelector("#btn-conduct-submit");if(!f.receiver||!f.offense){g.classList.add("hidden"),w.disabled=!0;return}g.innerHTML='<div class="spinner" style="margin:0 auto;"></div>',g.classList.remove("hidden");const B=je(),V=await zs(f.receiver.id,B,f.offense.id)+1;p=Ji(f.offense,V);const Ue=p*Qi,Ze=["1st","2nd","3rd"][V-1]||`${V}th`;g.innerHTML=`
        <p style="font-size:0.75rem;color:var(--text-secondary);margin-bottom:8px;">${f.receiver.name} · ${f.offense.name}</p>
        <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:12px;">${Ze} offense this month</p>
        <div class="mono" style="font-size:2rem;color:var(--red);">${p} <span style="font-size:1rem;">Dark Beans</span></div>
        <p class="text-dim text-sm mt-8">= −${Ue} pts deducted from score</p>
      `,w.disabled=!1}const O=d.querySelector("#conduct-error"),U=d.querySelector("#btn-conduct-submit");U.addEventListener("click",async()=>{if(!(!f.receiver||!f.offense)){U.disabled=!0,U.textContent="Issuing…",O.classList.add("hidden");try{const g=je(),w=await kl(f.receiver.id,g,f.offense.id),B=Ji(f.offense,w),V=B*Qi;await xl({giver_id:e.id,giver_name:e.name,receiver_id:f.receiver.id,offense_id:f.offense.id,db_count:B,pts_deducted:V,month_key:g,note:d.querySelector("#inp-conduct-note").value.trim(),instance:w});const Ue=await $l(f.receiver.id,B,V,g);await Ul(f.receiver.id,V);const Ze=Ue.db_count||0,de=tc(Ze);de&&await Yi({type:"db_threshold",receiver_id:f.receiver.id,giver_id:e.id,suggestion_text:`${f.receiver.name} has accumulated ${Ze} Dark Beans this month (${de.replace(/_/g," ")}).`,suggestion:de==="disciplinary"?"Consider formal disciplinary action.":"Review conduct history and consider counselling."}).catch(()=>{}),d.innerHTML=`
          <div class="text-center" style="padding:60px 20px;">
            <div style="font-size:3rem;margin-bottom:16px;">🌑</div>
            <h2 style="margin-bottom:8px;color:var(--red);">Conduct Logged</h2>
            <p class="text-dim">${B} Dark Beans issued to <strong>${f.receiver.name}</strong></p>
            <p class="text-dim text-sm mt-8">−${V} pts deducted from their monthly score</p>
            <button class="btn btn-ghost mt-24" id="btn-conduct-again">Issue Another</button>
          </div>
        `,d.querySelector("#btn-conduct-again").addEventListener("click",c)}catch(g){O.textContent="Failed to submit. Try again.",O.classList.remove("hidden"),U.disabled=!1,U.textContent="Issue Dark Beans",console.error(g)}}})}}async function Og(n,e,t){const i=oe(e.role);n.innerHTML=`
    <div class="page">
      <h1 style="font-size:1.4rem;margin-bottom:16px;">HR Audit</h1>

      <!-- Tabs -->
      <div class="flex gap-8 mb-16" id="audit-tabs">
        <button class="btn btn-primary audit-tab" data-tab="flags" style="flex:1;padding:10px;">🚩 Flags</button>
        <button class="btn btn-ghost  audit-tab" data-tab="log"   style="flex:1;padding:10px;">📋 Log</button>
        ${i?'<button class="btn btn-ghost audit-tab" data-tab="reset" style="flex:1;padding:10px;color:var(--red);">☢️ Reset</button>':""}
      </div>

      <div id="audit-content">
        <div class="loading-center" style="min-height:40vh;"><div class="spinner"></div></div>
      </div>
    </div>
  `;let s="flags";const r=n.querySelector("#audit-content");n.querySelectorAll(".audit-tab").forEach(d=>{d.addEventListener("click",()=>{s=d.dataset.tab,n.querySelectorAll(".audit-tab").forEach(u=>{u.className=u.dataset.tab===s?"btn btn-primary audit-tab":"btn btn-ghost audit-tab",u.style.flex="1",u.style.padding="10px"}),o(s)})});async function o(d){r.innerHTML='<div class="loading-center" style="min-height:30vh;"><div class="spinner"></div></div>',d==="flags"&&await a(),d==="log"&&await l(),d==="reset"&&c()}async function a(){try{const d=await Ll(),u=d.filter(f=>f.status==="open"),h=d.filter(f=>f.status!=="open");if(!d.length){r.innerHTML=`
          <div class="empty-state">
            <div class="icon">✅</div>
            <p>No flags. System looks clean.</p>
          </div>
        `;return}r.innerHTML=`
        ${u.length?`
          <p class="section-header mb-8">Open (${u.length})</p>
          ${u.map(f=>ao(f)).join("")}
        `:""}
        ${h.length?`
          <p class="section-header mt-16 mb-8">Resolved (${h.length})</p>
          ${h.map(f=>ao(f,!0)).join("")}
        `:""}
      `,r.querySelectorAll(".flag-action-btn").forEach(f=>{f.addEventListener("click",async()=>{const{flagId:p,action:v}=f.dataset;f.disabled=!0,await Ol(p,v,e.id),await o("flags")})})}catch{r.innerHTML='<p class="text-dim text-sm text-center">Failed to load flags.</p>'}}async function l(){try{const[d,u,h]=await Promise.all([Xe(),rn(),fetch("https://who-s-the-queen-bee-default-rtdb.asia-southeast1.firebasedatabase.app/awards.json").then(p=>p.json())]),f=h?Object.entries(h).map(([p,v])=>({id:p,...v})).sort((p,v)=>v.timestamp-p.timestamp):[];if(!f.length){r.innerHTML=`
          <div class="empty-state">
            <div class="icon">📋</div>
            <p class="text-dim">No awards recorded yet.</p>
          </div>
        `;return}r.innerHTML=`
        <p class="section-header" style="margin-bottom:12px;">All Awards — ${f.length} total</p>
        ${f.map(p=>{const v=re[p.bean_type]||{icon:"🫘",label:p.bean_type},y=d[p.receiver_id],k=d[p.giver_id],_=u[p.action_id],b=p.points_value*(p.quantity||1);return`
            <div class="lb-row" style="margin-bottom:8px;flex-direction:column;align-items:flex-start;gap:6px;">
              <div style="display:flex;justify-content:space-between;align-items:center;width:100%;">
                <div style="display:flex;align-items:center;gap:10px;">
                  <span style="font-size:1.3rem;">${v.icon}</span>
                  <div>
                    <p style="font-size:0.9rem;font-weight:600;">${(y==null?void 0:y.name)||p.receiver_id}</p>
                    <p class="text-dim" style="font-size:0.75rem;">${(y==null?void 0:y.role)||""} · ${(y==null?void 0:y.outlet)||""}</p>
                  </div>
                </div>
                <span class="mono text-gold" style="font-size:0.9rem;">+${b} pts</span>
              </div>
              <div style="display:flex;justify-content:space-between;width:100%;padding-left:2px;">
                <p class="text-dim" style="font-size:0.75rem;">
                  By <span style="color:var(--text-secondary);">${(k==null?void 0:k.name)||p.giver_name||p.giver_id}</span>
                  · ${(_==null?void 0:_.name)||p.action_id}
                  ${p.reason_text?`· "${p.reason_text}"`:""}
                </p>
                <p class="text-dim" style="font-size:0.75rem;">${ui(p.timestamp)}</p>
              </div>
            </div>
          `}).join("")}
      `}catch{r.innerHTML='<p class="text-dim text-sm text-center">Failed to load log.</p>'}}function c(){r.innerHTML=`
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
    `,r.querySelector("#btn-nuke-data").addEventListener("click",async()=>{const d=r.querySelector("#inp-confirm-data").value.trim(),u=r.querySelector("#btn-nuke-data"),h=r.querySelector("#status-data");if(d!=="RESET"){h.textContent='Type exactly "RESET" to confirm.',h.style.color="var(--red)",h.classList.remove("hidden");return}u.disabled=!0,u.textContent="Clearing…";try{await Bl(),h.textContent="✓ All activity data cleared.",h.style.color="var(--green)",h.classList.remove("hidden"),u.textContent="Done"}catch{h.textContent="Failed. Try again.",h.style.color="var(--red)",h.classList.remove("hidden"),u.disabled=!1,u.textContent="Clear Activity Data"}}),r.querySelector("#btn-nuke-staff").addEventListener("click",async()=>{const d=r.querySelector("#inp-confirm-staff").value.trim(),u=r.querySelector("#btn-nuke-staff"),h=r.querySelector("#status-staff");if(d!=="DELETE ALL"){h.textContent='Type exactly "DELETE ALL" to confirm.',h.style.color="var(--red)",h.classList.remove("hidden");return}u.disabled=!0,u.textContent="Clearing…";try{await Hl(),h.textContent="✓ All staff accounts cleared. Re-add using Bulk Import.",h.style.color="var(--green)",h.classList.remove("hidden"),u.textContent="Done"}catch{h.textContent="Failed. Try again.",h.style.color="var(--red)",h.classList.remove("hidden"),u.disabled=!1,u.textContent="Clear Staff Accounts Too"}})}await o(s)}function ao(n,e=!1){const i={bias_concentration:"🚩 Bias Flag — Positive Beans",consecutive_db:"🚩 Consecutive DB Flag",ceiling_breach:"🚩 Ceiling Hit Flag",db_threshold:"🚩 DB Threshold",crystal_frequency:"🚩 Crystal Bean Frequency",cross_flag:"🚩 Relationship Flag"}[n.type]||`🚩 ${n.type}`;return`
    <div class="flag-card ${e?"opacity-40":""}" style="${e?"opacity:0.5;":""}">
      <div class="flex justify-between items-center mb-8">
        <strong style="font-size:0.9rem;">${i}</strong>
        <span class="text-xs text-dim">${ui(n.timestamp)}</span>
      </div>
      <p style="font-size:0.875rem;line-height:1.5;">${n.suggestion_text||Lg(n)}</p>
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
  `}function Lg(n){if(n.data_snapshot){const e=n.data_snapshot;return`Giver: ${e.giverName||n.giver_id} · Receiver: ${e.receiverName||n.receiver_id}`}return`Flag ID: ${n.id}`}const Dg=[...li,...ci,...di];function Mg(n,e){const t=oe(e.role)||e.role==="HR";n.innerHTML=`
    <div class="page">
      <h1 style="font-size:1.4rem;margin-bottom:4px;">Staff Management</h1>
      <div class="flex gap-8 mb-16" id="approval-tabs" style="margin-top:12px;">
        <button class="btn btn-primary approval-tab" data-tab="pending" style="flex:1;padding:10px;">✋ Approvals</button>
        ${t?'<button class="btn btn-ghost approval-tab" data-tab="bulk" style="flex:1;padding:10px;">📥 Bulk Add</button>':""}
      </div>
      <div id="approvals-content"></div>
    </div>
  `;let i=null;function s(a){n.querySelectorAll(".approval-tab").forEach(l=>{l.className=l.dataset.tab===a?"btn btn-primary approval-tab":"btn btn-ghost approval-tab",l.style.flex="1",l.style.padding="10px"}),i&&(i(),i=null),a==="pending"?r():o()}n.querySelectorAll(".approval-tab").forEach(a=>{a.addEventListener("click",()=>s(a.dataset.tab))}),r();function r(){const a=n.querySelector("#approvals-content");a.innerHTML='<div class="loading-center" style="min-height:30vh;"><div class="spinner"></div></div>',i=Ks(l=>{if(l.length===0){a.innerHTML=`
          <div class="empty-state">
            <div class="icon">✅</div>
            <p class="text-dim">No pending requests</p>
            <p class="text-dim text-sm mt-8">Share the app link and staff can self-register.</p>
          </div>
        `;return}a.innerHTML=l.map(c=>`
        <div class="card" style="margin-bottom:12px;" data-id="${c.id}">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
            <div>
              <p style="color:#fff;font-weight:600;margin-bottom:2px;">${c.name}</p>
              <p class="text-dim text-sm">${c.email}</p>
            </div>
            <span class="badge badge-gold" style="font-size:0.7rem;">${c.role}</span>
          </div>
          <p class="text-dim text-sm" style="margin-bottom:16px;">
            Outlet: <span style="color:var(--text-primary);">${c.outlet}</span>
            &nbsp;·&nbsp; ${Ug(c.submitted_at)}
          </p>
          <div class="flex gap-8">
            <button class="btn btn-primary btn-approve" data-id="${c.id}" style="flex:1;height:40px;font-size:0.85rem;">Approve</button>
            <button class="btn btn-ghost btn-reject"   data-id="${c.id}" style="flex:1;height:40px;font-size:0.85rem;border-color:rgba(255,69,58,0.3);color:var(--red);">Reject</button>
          </div>
        </div>
      `).join(""),a.querySelectorAll(".btn-approve").forEach(c=>{c.addEventListener("click",async()=>{const d=l.find(u=>u.id===c.dataset.id);c.disabled=!0,c.textContent="Approving…",await Ml(c.dataset.id,d,e.name)})}),a.querySelectorAll(".btn-reject").forEach(c=>{c.addEventListener("click",async()=>{c.disabled=!0,c.textContent="Rejecting…",await Fl(c.dataset.id,e.name)})})})}function o(){const a=n.querySelector("#approvals-content"),l=5;a.innerHTML=`
      <div class="card mb-16" style="padding:14px 16px;background:rgba(201,168,76,0.06);border-color:rgba(201,168,76,0.2);">
        <p style="font-size:0.82rem;color:var(--text-secondary);line-height:1.5;">
          Add up to ${l} staff at once. They'll be added directly — no approval needed.
          PIN must be 4 digits. Leave empty rows blank.
        </p>
      </div>

      <div id="bulk-rows">
        ${Array.from({length:l},(c,d)=>Fg(d)).join("")}
      </div>

      <p id="bulk-status" class="text-sm text-center hidden" style="margin:12px 0;"></p>
      <button class="btn btn-primary w-full mt-8" id="btn-bulk-submit" style="height:54px;font-size:1rem;">
        Add Staff
      </button>
    `,n.querySelector("#btn-bulk-submit").addEventListener("click",async()=>{const c=n.querySelector("#btn-bulk-submit"),d=n.querySelector("#bulk-status"),u=[];if(n.querySelectorAll(".bulk-row").forEach(h=>{const f=h.querySelector(".b-name").value.trim(),p=h.querySelector(".b-email").value.trim(),v=h.querySelector(".b-role").value,y=h.querySelector(".b-outlet").value,k=h.querySelector(".b-pin").value.trim();f&&v&&y&&k.length===4&&u.push({name:f,email:p,role:v,outlet:y,pin:k})}),u.length===0){d.textContent="Fill in at least one row with name, role, outlet and 4-digit PIN.",d.style.color="var(--red)",d.classList.remove("hidden");return}c.disabled=!0,c.textContent=`Adding ${u.length} staff…`,d.classList.add("hidden");try{for(const h of u){const f=await $g(h.pin),p="emp_"+Math.random().toString(36).slice(2,10);await ii(p,{name:h.name,email:h.email||"",role:h.role,outlet:h.outlet,pin_hash:f,active:!0})}d.textContent=`✓ ${u.length} staff added successfully!`,d.style.color="var(--green)",d.classList.remove("hidden"),n.querySelectorAll(".bulk-row input, .bulk-row select").forEach(h=>{h.tagName==="SELECT"?h.selectedIndex=0:h.value=""}),c.textContent="Add Staff",c.disabled=!1}catch(h){d.textContent="Failed. Check connection and try again.",d.style.color="var(--red)",d.classList.remove("hidden"),c.textContent="Add Staff",c.disabled=!1,console.error(h)}})}}function Fg(n){const e=Dg.map(i=>`<option value="${i}">${i}</option>`).join(""),t=Ys.map(i=>`<option value="${i.id}">${i.id} – ${i.name}</option>`).join("");return`
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
  `}async function $g(n){const e=new TextEncoder().encode(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function Ug(n){const e=Date.now()-n,t=Math.floor(e/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;const i=Math.floor(t/60);return i<24?`${i}h ago`:`${Math.floor(i/24)}d ago`}async function Bg(n,e){const t=je(),i=_g();n.innerHTML=`
    <div class="page">
      <h1 style="font-size:1.4rem;margin-bottom:4px;">👑 Queen Bee Vote</h1>
      <p class="text-dim text-sm" style="margin-bottom:20px;">${qg()} · ${i?"Voting Open":"Voting opens on the 28th"}</p>
      <div id="vote-content">
        <div class="loading-center" style="min-height:40vh;"><div class="spinner"></div></div>
      </div>
    </div>
  `;const s=n.querySelector("#vote-content");try{const[r,o]=await Promise.all([Xe(),Ki(t,e.id)]),a=ri(t,d=>{c(d,r,o)}),l=new MutationObserver(()=>{document.contains(s)||(a(),l.disconnect())});l.observe(document.body,{childList:!0,subtree:!0});async function c(d,u,h){const f=Object.entries(d).map(([_,b])=>({id:_,...b,emp:u[_]||{}})).filter(_=>_.emp.active!==!1&&_.emp.role&&Hg(_.emp.role)).sort((_,b)=>(b.net_points||b.points||0)-(_.net_points||_.points||0)).slice(0,5).map((_,b)=>({..._,rank:b+1}));if(f.length===0){s.innerHTML=`
          <div class="empty-state">
            <div style="font-size:2.5rem;margin-bottom:12px;">🏆</div>
            <p class="text-dim">No nominees yet — earn beans to qualify!</p>
          </div>
        `;return}const p=oe(e.role)?await Pl(t):{},v={};Object.values(p).forEach(_=>{v[_]=(v[_]||0)+1});const y=Object.values(v).reduce((_,b)=>_+b,0),k=!!h||await Ki(t,e.id);if(!i){s.innerHTML=`
          <div class="card mb-20" style="text-align:center;padding:24px;">
            <div style="font-size:2rem;margin-bottom:8px;">⏳</div>
            <p style="font-weight:600;margin-bottom:4px;">Voting opens on the 28th</p>
            <p class="text-dim text-sm">Current top performers this month — final nominees announced on the 27th.</p>
          </div>
          ${f.map(_=>lo(_,!1,null,!1,v,y)).join("")}
        `;return}s.innerHTML=`
        ${k?`
          <div class="card mb-16" style="text-align:center;padding:16px;background:rgba(48,209,88,0.06);border-color:rgba(48,209,88,0.3);">
            <p style="color:var(--green);font-weight:600;">✓ Your vote is in!</p>
            ${oe(e.role)?`<p class="text-dim text-sm mt-4">${y} vote${y!==1?"s":""} cast so far</p>`:""}
          </div>
        `:`
          <div class="card mb-16" style="padding:14px 16px;">
            <p style="font-size:0.88rem;">Tap a nominee to cast your vote. <strong>You only get one vote.</strong></p>
          </div>
        `}
        ${f.map(_=>lo(_,!k,h,oe(e.role),v,y)).join("")}
        ${oe(e.role)?`
          <div class="card mt-16" style="padding:16px;">
            <p class="section-header" style="margin-bottom:8px;">Total Votes Cast</p>
            <div class="mono text-gold" style="font-size:2rem;">${y}</div>
          </div>
        `:""}
      `,!k&&i&&s.querySelectorAll(".nominee-vote-btn").forEach(_=>{_.addEventListener("click",async()=>{const b=_.dataset.id;_.disabled=!0;try{await Nl(t,e.id,b),c(d,u,b)}catch(O){_.disabled=!1,console.error(O)}})})}}catch{s.innerHTML='<p class="text-dim text-sm text-center">Failed to load. Check connection.</p>'}}function lo(n,e,t,i,s,r){var y,k;const o=n.net_points||n.points||0,a=n.emp,l=n.rank===1,c=s[n.id]||0,d=r>0?Math.round(c/r*100):0,u=(a.name||"??").split(" ").map(_=>_[0]).join("").slice(0,2).toUpperCase(),h=["#8B5E3C","#5E6E8B","#5E8B6E","#8B5E7A","#7A8B5E","#6E5E8B","#8B7A5E"],f=h[(a.name||"").charCodeAt(0)%h.length],v={1:"👑",2:"🥈",3:"🥉"}[n.rank]||`#${n.rank}`;return`
    <div class="lb-row mb-8 ${l?"lb-row-top1":""}" style="flex-direction:column;align-items:stretch;gap:10px;padding:16px;">
      ${l?'<div class="queen-bee-glow"></div>':""}
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="font-size:1.4rem;min-width:32px;text-align:center;">${v}</div>
        ${a.photo_url?`<img src="${a.photo_url}" style="width:42px;height:42px;clip-path:polygon(50% 0%,95% 25%,95% 75%,50% 100%,5% 75%,5% 25%);object-fit:cover;flex-shrink:0;" />`:`<div style="width:42px;height:42px;clip-path:polygon(50% 0%,95% 25%,95% 75%,50% 100%,5% 75%,5% 25%);background:${f};display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:0.85rem;flex-shrink:0;">${u}</div>`}
        <div style="flex:1;">
          <p style="font-weight:${l?"600":"400"};${l?"color:var(--gold);":""}">${a.name||n.id}</p>
          <p class="text-dim" style="font-size:0.75rem;">${a.role||""} · ${a.outlet||""}</p>
        </div>
        <div class="mono text-gold" style="font-size:0.9rem;">${We(o)} <span style="font-size:0.7rem;color:var(--text-tertiary);">pts</span></div>
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
          Vote for ${((y=a.name)==null?void 0:y.split(" ")[0])||"them"} 👑
        </button>
      `:t===n.id?`
        <p style="text-align:center;font-size:0.82rem;color:var(--green);">✓ You voted for ${((k=a.name)==null?void 0:k.split(" ")[0])||"them"}</p>
      `:""}
    </div>
  `}function Hg(n){return["Trainee","Barista","Senior Barista","Kitchen Helper","Commi 3","Commi 2","Commi 1","DCDP","CDP"].includes(n)}function qg(){return new Date().toLocaleDateString("en-IN",{month:"long",year:"numeric"})}function Wg(n,e,t,i){const s=e.role;t.db_toggle;const r=jg(s);n.innerHTML=`
    <div id="screen-container"></div>
    <nav class="nav-bar" id="nav-bar">
      ${r.map(({id:c,icon:d,label:u})=>`
        <div class="nav-item" data-screen="${c}">
          ${d}
          <span>${u}</span>
        </div>
      `).join("")}
    </nav>
  `;const o=n.querySelector("#screen-container");r[0].id;function a(c){n.querySelectorAll(".nav-item").forEach(d=>{d.classList.toggle("active",d.dataset.screen===c)}),l(c)}function l(c){switch(o.innerHTML="",c){case"dashboard":yg(o,e,t,{onLogout:i,navigate:a});break;case"leaderboard":xg(o,e);break;case"award":Pg(o,e);break;case"audit":Og(o,e);break;case"approvals":Mg(o,e);break;case"vote":Bg(o,e);break;default:o.innerHTML=`
          <div class="page">
            <div class="empty-state">
              <div class="icon">🚧</div>
              <p class="text-dim">This screen is coming in a future phase.</p>
            </div>
          </div>
        `}}n.querySelectorAll(".nav-item").forEach(c=>{c.addEventListener("click",()=>a(c.dataset.screen))}),a(r[0].id),(oe(s)||$n(s))&&Ks(c=>{const d=n.querySelector('.nav-item[data-screen="approvals"]');if(!d)return;const u=d.querySelector(".pending-badge");if(u&&u.remove(),c.length>0){const h=document.createElement("span");h.className="pending-badge",h.textContent=c.length,d.appendChild(h)}})}function jg(n,e){const t=[{id:"dashboard",icon:Vg(),label:"Home"},{id:"leaderboard",icon:zg(),label:"Board"}];return Qs(n)&&t.push({id:"award",icon:Gg(),label:"Award"}),($n(n)||oe(n))&&t.push({id:"audit",icon:Kg(),label:"Audit"}),(oe(n)||$n(n))&&t.push({id:"approvals",icon:Yg(),label:"Staff"}),t.push({id:"vote",icon:Qg(),label:"Vote"}),t}function Vg(){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>`}function zg(){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="3" y="12" width="4" height="9" rx="1"/>
    <rect x="10" y="7" width="4" height="14" rx="1"/>
    <rect x="17" y="4" width="4" height="17" rx="1"/>
  </svg>`}function Gg(){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <circle cx="12" cy="10" r="6"/>
    <path d="M8.5 17.5L7 22h10l-1.5-4.5"/>
  </svg>`}function Kg(){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M9 11l3 3L22 4"/>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
  </svg>`}function Yg(){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <polyline points="16 11 18 13 22 9"/>
  </svg>`}function Qg(){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>`}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})});async function Js(){try{await bu(Jm)}catch{}const n=document.getElementById("app"),e=jl();if(!e){ic(n,Jg);return}zl();let t={};try{t=await ql()}catch{}try{const[i,s]=await Promise.all([rn(),Gs()]);Object.keys(i).length===0&&await Promise.all(Yl.map(r=>Al(r.id,r))),Object.keys(s).length===0&&await Promise.all(Ql.map(r=>Rl(r.id,r)))}catch{}Wg(n,e,t,Xg)}function Jg(n){zl(),Js()}function Xg(){dg(),Js()}Js();
//# sourceMappingURL=index-BEB8GNzW.js.map
