(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();const m={};function ue(e){m.context=e}const ce=(e,t)=>e===t,ae=Symbol("solid-track"),I={equals:ce};let Z=ne;const v=1,U=2,ee={owned:null,cleanups:null,context:null,owner:null};var p=null;let C=null,h=null,g=null,A=null,V=0;function B(e,t){const s=h,n=p,i=e.length===0,r=i?ee:{owned:null,cleanups:null,context:null,owner:t===void 0?n:t},o=i?e:()=>e(()=>O(()=>q(r)));p=r,h=null;try{return N(o,!0)}finally{h=s,p=n}}function G(e,t){t=t?Object.assign({},I,t):I;const s={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},n=i=>(typeof i=="function"&&(i=i(s.value)),se(s,i));return[te.bind(s),n]}function K(e,t,s){const n=Q(e,t,!1,v);_(n)}function he(e,t,s){Z=we;const n=Q(e,t,!1,v);n.user=!0,A?A.push(n):_(n)}function de(e,t,s){s=s?Object.assign({},I,s):I;const n=Q(e,t,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=s.equals||void 0,_(n),te.bind(n)}function F(e){return N(e,!1)}function O(e){if(h===null)return e();const t=h;h=null;try{return e()}finally{h=t}}function z(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}function pe(){return h}function te(){const e=C;if(this.sources&&(this.state||e))if(this.state===v||e)_(this);else{const t=g;g=null,N(()=>D(this),!1),g=t}if(h){const t=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(t)):(h.sources=[this],h.sourceSlots=[t]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function se(e,t,s){let n=e.value;return(!e.comparator||!e.comparator(n,t))&&(e.value=t,e.observers&&e.observers.length&&N(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],o=C&&C.running;o&&C.disposed.has(r),(o&&!r.tState||!o&&!r.state)&&(r.pure?g.push(r):A.push(r),r.observers&&ie(r)),o||(r.state=v)}if(g.length>1e6)throw g=[],new Error},!1)),t}function _(e){if(!e.fn)return;q(e);const t=p,s=h,n=V;h=p=e,ge(e,e.value,n),h=s,p=t}function ge(e,t,s){let n;try{n=e.fn(t)}catch(i){e.pure&&(e.state=v,e.owned&&e.owned.forEach(q),e.owned=null),re(i)}(!e.updatedAt||e.updatedAt<=s)&&(e.updatedAt!=null&&"observers"in e?se(e,n):e.value=n,e.updatedAt=s)}function Q(e,t,s,n=v,i){const r={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:null,pure:s};return p===null||p!==ee&&(p.owned?p.owned.push(r):p.owned=[r]),r}function j(e){const t=C;if(e.state===0||t)return;if(e.state===U||t)return D(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const s=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<V);)(e.state||t)&&s.push(e);for(let n=s.length-1;n>=0;n--)if(e=s[n],e.state===v||t)_(e);else if(e.state===U||t){const i=g;g=null,N(()=>D(e,s[0]),!1),g=i}}function N(e,t){if(g)return e();let s=!1;t||(g=[]),A?s=!0:A=[],V++;try{const n=e();return ye(s),n}catch(n){s||(A=null),g=null,re(n)}}function ye(e){if(g&&(ne(g),g=null),e)return;const t=A;A=null,t.length&&N(()=>Z(t),!1)}function ne(e){for(let t=0;t<e.length;t++)j(e[t])}function we(e){let t,s=0;for(t=0;t<e.length;t++){const n=e[t];n.user?e[s++]=n:j(n)}for(m.context&&ue(),t=0;t<s;t++)j(e[t])}function D(e,t){const s=C;e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];i.sources&&(i.state===v||s?i!==t&&j(i):(i.state===U||s)&&D(i,t))}}function ie(e){const t=C;for(let s=0;s<e.observers.length;s+=1){const n=e.observers[s];(!n.state||t)&&(n.state=U,n.pure?g.push(n):A.push(n),n.observers&&ie(n))}}function q(e){let t;if(e.sources)for(;e.sources.length;){const s=e.sources.pop(),n=e.sourceSlots.pop(),i=s.observers;if(i&&i.length){const r=i.pop(),o=s.observerSlots.pop();n<i.length&&(r.sourceSlots[o]=n,i[n]=r,s.observerSlots[n]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)q(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function be(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function re(e){throw e=be(e),e}const me=Symbol("fallback");function W(e){for(let t=0;t<e.length;t++)e[t]()}function xe(e,t,s={}){let n=[],i=[],r=[],o=0,l=t.length>1?[]:null;return z(()=>W(r)),()=>{let c=e()||[],u,f;return c[ae],O(()=>{let a=c.length,y,E,L,k,M,w,b,x,$;if(a===0)o!==0&&(W(r),r=[],n=[],i=[],o=0,l&&(l=[])),s.fallback&&(n=[me],i[0]=B(fe=>(r[0]=fe,s.fallback())),o=1);else if(o===0){for(i=new Array(a),f=0;f<a;f++)n[f]=c[f],i[f]=B(d);o=a}else{for(L=new Array(a),k=new Array(a),l&&(M=new Array(a)),w=0,b=Math.min(o,a);w<b&&n[w]===c[w];w++);for(b=o-1,x=a-1;b>=w&&x>=w&&n[b]===c[x];b--,x--)L[x]=i[b],k[x]=r[b],l&&(M[x]=l[b]);for(y=new Map,E=new Array(x+1),f=x;f>=w;f--)$=c[f],u=y.get($),E[f]=u===void 0?-1:u,y.set($,f);for(u=w;u<=b;u++)$=n[u],f=y.get($),f!==void 0&&f!==-1?(L[f]=i[u],k[f]=r[u],l&&(M[f]=l[u]),f=E[f],y.set($,f)):r[u]();for(f=w;f<a;f++)f in L?(i[f]=L[f],r[f]=k[f],l&&(l[f]=M[f],l[f](f))):i[f]=B(d);i=i.slice(0,o=a),n=c.slice(0)}return i});function d(a){if(r[f]=a,l){const[y,E]=G(f);return l[f]=E,t(c[f],y)}return t(c[f])}}}function le(e,t){return O(()=>e(t||{}))}function Ae(e){const t="fallback"in e&&{fallback:()=>e.fallback};return de(xe(()=>e.each,e.children,t||void 0))}function Se(e,t,s){let n=s.length,i=t.length,r=n,o=0,l=0,c=t[i-1].nextSibling,u=null;for(;o<i||l<r;){if(t[o]===s[l]){o++,l++;continue}for(;t[i-1]===s[r-1];)i--,r--;if(i===o){const f=r<n?l?s[l-1].nextSibling:s[r-l]:c;for(;l<r;)e.insertBefore(s[l++],f)}else if(r===l)for(;o<i;)(!u||!u.has(t[o]))&&t[o].remove(),o++;else if(t[o]===s[r-1]&&s[l]===t[i-1]){const f=t[--i].nextSibling;e.insertBefore(s[l++],t[o++].nextSibling),e.insertBefore(s[--r],f),t[i]=s[r]}else{if(!u){u=new Map;let d=l;for(;d<r;)u.set(s[d],d++)}const f=u.get(t[o]);if(f!=null)if(l<f&&f<r){let d=o,a=1,y;for(;++d<i&&d<r&&!((y=u.get(t[d]))==null||y!==f+a);)a++;if(a>f-l){const E=t[o];for(;l<f;)e.insertBefore(s[l++],E)}else e.replaceChild(s[l++],t[o++])}else o++;else t[o++].remove()}}}const X="_$DX_DELEGATE";function ve(e,t,s,n={}){let i;return B(r=>{i=r,t===document?e():P(t,e(),t.firstChild?null:void 0,s)},n.owner),()=>{i(),t.textContent=""}}function oe(e,t,s){const n=document.createElement("template");n.innerHTML=e;let i=n.content.firstChild;return s&&(i=i.firstChild),i}function Ee(e,t=window.document){const s=t[X]||(t[X]=new Set);for(let n=0,i=e.length;n<i;n++){const r=e[n];s.has(r)||(s.add(r),t.addEventListener(r,$e))}}function Ce(e,t,s){return O(()=>e(t,s))}function P(e,t,s,n){if(s!==void 0&&!n&&(n=[]),typeof t!="function")return R(e,t,n,s);K(i=>R(e,t(),i,s),n)}function $e(e){const t=`$$${e.type}`;let s=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==s&&Object.defineProperty(e,"target",{configurable:!0,value:s}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return s||document}}),m.registry&&!m.done&&(m.done=!0,document.querySelectorAll("[id^=pl-]").forEach(n=>{for(;n&&n.nodeType!==8&&n.nodeValue!=="pl-"+e;){let i=n.nextSibling;n.remove(),n=i}n&&n.remove()}));s;){const n=s[t];if(n&&!s.disabled){const i=s[`${t}Data`];if(i!==void 0?n.call(s,i,e):n.call(s,e),e.cancelBubble)return}s=s._$host||s.parentNode||s.host}}function R(e,t,s,n,i){for(m.context&&!s&&(s=[...e.childNodes]);typeof s=="function";)s=s();if(t===s)return s;const r=typeof t,o=n!==void 0;if(e=o&&s[0]&&s[0].parentNode||e,r==="string"||r==="number"){if(m.context)return s;if(r==="number"&&(t=t.toString()),o){let l=s[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),s=T(e,s,n,l)}else s!==""&&typeof s=="string"?s=e.firstChild.data=t:s=e.textContent=t}else if(t==null||r==="boolean"){if(m.context)return s;s=T(e,s,n)}else{if(r==="function")return K(()=>{let l=t();for(;typeof l=="function";)l=l();s=R(e,l,s,n)}),()=>s;if(Array.isArray(t)){const l=[],c=s&&Array.isArray(s);if(H(l,t,s,i))return K(()=>s=R(e,l,s,n,!0)),()=>s;if(m.context){if(!l.length)return s;for(let u=0;u<l.length;u++)if(l[u].parentNode)return s=l}if(l.length===0){if(s=T(e,s,n),o)return s}else c?s.length===0?Y(e,l,n):Se(e,s,l):(s&&T(e),Y(e,l));s=l}else if(t instanceof Node){if(m.context&&t.parentNode)return s=o?[t]:t;if(Array.isArray(s)){if(o)return s=T(e,s,n,t);T(e,s,null,t)}else s==null||s===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);s=t}}return s}function H(e,t,s,n){let i=!1;for(let r=0,o=t.length;r<o;r++){let l=t[r],c=s&&s[r];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=H(e,l,c)||i;else if(typeof l=="function")if(n){for(;typeof l=="function";)l=l();i=H(e,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||i}else e.push(l),i=!0;else{const u=String(l);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return i}function Y(e,t,s=null){for(let n=0,i=t.length;n<i;n++)e.insertBefore(t[n],s)}function T(e,t,s,n){if(s===void 0)return e.textContent="";const i=n||document.createTextNode("");if(t.length){let r=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(i!==l){const c=l.parentNode===e;!r&&!o?c?e.replaceChild(i,l):e.insertBefore(i,s):c&&l.remove()}else r=!0}}else e.insertBefore(i,s);return[i]}var Te={equals:!1},Ne=Te,J=class{#e;constructor(e=Map){this.#e=new e}dirty(e){this.#e.get(e)?.$$()}track(e){if(!pe())return;let t=this.#e.get(e);if(t)t.n++;else{const[s,n]=G(void 0,Ne);this.#e.set(e,t={$:s,$$:n,n:1})}z(()=>{t.n--===1&&queueMicrotask(()=>t.n===0&&this.#e.delete(e))}),t.$()}};const S=Symbol("track-keys");class Le extends Map{#e=new J;#t=new J;constructor(t){if(super(),t)for(const s of t)super.set(s[0],s[1])}has(t){return this.#e.track(t),super.has(t)}get(t){return this.#t.track(t),super.get(t)}get size(){return this.#e.track(S),super.size}keys(){return this.#e.track(S),super.keys()}values(){this.#e.track(S);for(const t of super.keys())this.#t.track(t);return super.values()}entries(){this.#e.track(S);for(const t of super.keys())this.#t.track(t);return super.entries()}set(t,s){return F(()=>{if(super.has(t)){if(super.get(t)===s)return}else this.#e.dirty(t),this.#e.dirty(S);this.#t.dirty(t),super.set(t,s)}),this}delete(t){const s=super.delete(t);return s&&F(()=>{this.#e.dirty(t),this.#e.dirty(S),this.#t.dirty(t)}),s}clear(){super.size&&F(()=>{for(const t of super.keys())this.#e.dirty(t),this.#t.dirty(t);super.clear(),this.#e.dirty(S)})}forEach(t){this.#e.track(S),super.forEach((s,n)=>t(s,n,this))}[Symbol.iterator](){return this.entries()}}const Oe=oe('<div class="p-24 box-border w-full min-h-screen flex flex-col justify-center items-center space-y-4 bg-gray-800 text-white"><div class="wrapper-h"><button class="btn">Add</button><button class="btn">Remove</button></div><div class="wrapper-h"></div><p>size: </p></div>'),_e=oe('<button class="btn"></button>'),ke=()=>{const e=new Le,[t,s]=G(1),n=()=>s(r=>Math.max(--r,0)),i=()=>s(r=>++r);return(()=>{const r=Oe.cloneNode(!0),o=r.firstChild,l=o.firstChild,c=l.nextSibling,u=o.nextSibling,f=u.nextSibling;return f.firstChild,l.$$click=i,c.$$click=n,P(u,le(Ae,{get each(){return Array.from({length:t()})},children:()=>{let d;return z(()=>e.delete(d)),he(()=>console.log("increment:",e.get(d))),(()=>{const a=_e.cloneNode(!0);return a.$$click=()=>e.set(d,e.get(d)+1),Ce(y=>{d=y,e.set(y,0)},a),P(a,()=>e.get(d)),a})()}})),P(f,()=>e.size,null),r})()};ve(()=>le(ke,{}),document.getElementById("root"));Ee(["click"]);