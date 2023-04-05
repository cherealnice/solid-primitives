(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();const Q=(e,n)=>e===n,B={equals:Q};let W=M;const w=1,v=2,q={owned:null,cleanups:null,context:null,owner:null};var a=null;let T=null,u=null,f=null,g=null,E=0;function X(e,n){const t=u,s=a,l=e.length===0,i=l?q:{owned:null,cleanups:null,context:null,owner:n===void 0?s:n},r=l?e:()=>e(()=>$(()=>A(i)));a=i,u=null;try{return y(r,!0)}finally{u=t,a=s}}function J(e,n){n=n?Object.assign({},B,n):B;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},s=l=>(typeof l=="function"&&(l=l(t.value)),I(t,l));return[Z.bind(t),s]}function _(e,n,t){const s=k(e,n,!1,w);D(s)}function $(e){if(u===null)return e();const n=u;u=null;try{return e()}finally{u=n}}function Z(){if(this.sources&&this.state)if(this.state===w)D(this);else{const e=f;f=null,y(()=>C(this),!1),f=e}if(u){const e=this.observers?this.observers.length:0;u.sources?(u.sources.push(this),u.sourceSlots.push(e)):(u.sources=[this],u.sourceSlots=[e]),this.observers?(this.observers.push(u),this.observerSlots.push(u.sources.length-1)):(this.observers=[u],this.observerSlots=[u.sources.length-1])}return this.value}function I(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&y(()=>{for(let l=0;l<e.observers.length;l+=1){const i=e.observers[l],r=T&&T.running;r&&T.disposed.has(i),(r?!i.tState:!i.state)&&(i.pure?f.push(i):g.push(i),i.observers&&V(i)),r||(i.state=w)}if(f.length>1e6)throw f=[],new Error},!1)),n}function D(e){if(!e.fn)return;A(e);const n=a,t=u,s=E;u=a=e,z(e,e.value,s),u=t,a=n}function z(e,n,t){let s;try{s=e.fn(n)}catch(l){return e.pure&&(e.state=w,e.owned&&e.owned.forEach(A),e.owned=null),e.updatedAt=t+1,G(l)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?I(e,s):e.value=s,e.updatedAt=t)}function k(e,n,t,s=w,l){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:a,context:null,pure:t};return a===null||a!==q&&(a.owned?a.owned.push(i):a.owned=[i]),i}function R(e){if(e.state===0)return;if(e.state===v)return C(e);if(e.suspense&&$(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<E);)e.state&&n.push(e);for(let t=n.length-1;t>=0;t--)if(e=n[t],e.state===w)D(e);else if(e.state===v){const s=f;f=null,y(()=>C(e,n[0]),!1),f=s}}function y(e,n){if(f)return e();let t=!1;n||(f=[]),g?t=!0:g=[],E++;try{const s=e();return ee(t),s}catch(s){t||(g=null),f=null,G(s)}}function ee(e){if(f&&(M(f),f=null),e)return;const n=g;g=null,n.length&&y(()=>W(n),!1)}function M(e){for(let n=0;n<e.length;n++)R(e[n])}function C(e,n){e.state=0;for(let t=0;t<e.sources.length;t+=1){const s=e.sources[t];if(s.sources){const l=s.state;l===w?s!==n&&(!s.updatedAt||s.updatedAt<E)&&R(s):l===v&&C(s,n)}}}function V(e){for(let n=0;n<e.observers.length;n+=1){const t=e.observers[n];t.state||(t.state=v,t.pure?f.push(t):g.push(t),t.observers&&V(t))}}function A(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),l=t.observers;if(l&&l.length){const i=l.pop(),r=t.observerSlots.pop();s<l.length&&(i.sourceSlots[r]=s,l[s]=i,t.observerSlots[s]=r)}}if(e.owned){for(n=e.owned.length-1;n>=0;n--)A(e.owned[n]);e.owned=null}if(e.cleanups){for(n=e.cleanups.length-1;n>=0;n--)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function G(e){throw e}function x(e,n){return $(()=>e(n||{}))}function te(e,n,t){let s=t.length,l=n.length,i=s,r=0,o=0,c=n[l-1].nextSibling,h=null;for(;r<l||o<i;){if(n[r]===t[o]){r++,o++;continue}for(;n[l-1]===t[i-1];)l--,i--;if(l===r){const d=i<s?o?t[o-1].nextSibling:t[i-o]:c;for(;o<i;)e.insertBefore(t[o++],d)}else if(i===o)for(;r<l;)(!h||!h.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[i-1]&&t[o]===n[l-1]){const d=n[--l].nextSibling;e.insertBefore(t[o++],n[r++].nextSibling),e.insertBefore(t[--i],d),n[l]=t[i]}else{if(!h){h=new Map;let p=o;for(;p<i;)h.set(t[p],p++)}const d=h.get(n[r]);if(d!=null)if(o<d&&d<i){let p=r,N=1,O;for(;++p<l&&p<i&&!((O=h.get(n[p]))==null||O!==d+N);)N++;if(N>d-o){const K=n[r];for(;o<d;)e.insertBefore(t[o++],K)}else e.replaceChild(t[o++],n[r++])}else r++;else n[r++].remove()}}}const U="_$DX_DELEGATE";function ne(e,n,t,s={}){let l;return X(i=>{l=i,n===document?e():b(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{l(),n.textContent=""}}function L(e,n,t){let s;const l=()=>{const r=document.createElement("template");return r.innerHTML=e,t?r.content.firstChild.firstChild:r.content.firstChild},i=n?()=>(s||(s=l())).cloneNode(!0):()=>$(()=>document.importNode(s||(s=l()),!0));return i.cloneNode=i,i}function se(e,n=window.document){const t=n[U]||(n[U]=new Set);for(let s=0,l=e.length;s<l;s++){const i=e[s];t.has(i)||(t.add(i),n.addEventListener(i,le))}}function b(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return S(e,n,s,t);_(l=>S(e,n(),l,t),s)}function le(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}});t;){const s=t[n];if(s&&!t.disabled){const l=t[`${n}Data`];if(l!==void 0?s.call(t,l,e):s.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function S(e,n,t,s,l){for(;typeof t=="function";)t=t();if(n===t)return t;const i=typeof n,r=s!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(n=n.toString()),r){let o=t[0];o&&o.nodeType===3?o.data=n:o=document.createTextNode(n),t=m(e,t,s,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n;else if(n==null||i==="boolean")t=m(e,t,s);else{if(i==="function")return _(()=>{let o=n();for(;typeof o=="function";)o=o();t=S(e,o,t,s)}),()=>t;if(Array.isArray(n)){const o=[],c=t&&Array.isArray(t);if(P(o,n,t,l))return _(()=>t=S(e,o,t,s,!0)),()=>t;if(o.length===0){if(t=m(e,t,s),r)return t}else c?t.length===0?F(e,o,s):te(e,t,o):(t&&m(e),F(e,o));t=o}else if(n instanceof Node){if(Array.isArray(t)){if(r)return t=m(e,t,s,n);m(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}else console.warn("Unrecognized value. Skipped inserting",n)}return t}function P(e,n,t,s){let l=!1;for(let i=0,r=n.length;i<r;i++){let o=n[i],c=t&&t[i];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))l=P(e,o,c)||l;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();l=P(e,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||l}else e.push(o),l=!0;else{const h=String(o);c&&c.nodeType===3?(c.data=h,e.push(c)):e.push(document.createTextNode(h))}}return l}function F(e,n,t=null){for(let s=0,l=n.length;s<l;s++)e.insertBefore(n[s],t)}function m(e,n,t,s){if(t===void 0)return e.textContent="";const l=s||document.createTextNode("");if(n.length){let i=!1;for(let r=n.length-1;r>=0;r--){const o=n[r];if(l!==o){const c=o.parentNode===e;!i&&!r?c?e.replaceChild(l,o):e.insertBefore(l,t):c&&o.remove()}else i=!0}}else e.insertBefore(l,t);return[l]}function H(e){return new Promise(n=>setTimeout(()=>n(!0),e??500))}function ie(e){return H().then(()=>`Your email was sent to ${e.get("to")||"no one"} with your default provider`)}function oe(e){return H().then(()=>`Your email was sent to ${e.get("to")||"no one"} with an alternative provider`)}function Y(e){return function(...n){const[t,s,{cancelable:l=!1}={}]=n,i=`on${t[0].toUpperCase()}${t.slice(1)}`,r=e[i];if(typeof r!="function")return!0;const o=new CustomEvent(t,{detail:s,cancelable:l});return r(o),!o.defaultPrevented}}const re=L('<div class="box-border grid min-h-screen w-full grid-rows-3 justify-center space-y-4 bg-gray-800 p-2 text-white">'),ue=L('<div class="wrapper-v w-3xl"><h2 class="text-5xl"></h2><div class="flex"><button class="btn w-25 text-4xl"> + </button><button class="btn w-25 text-4xl"> - </button></div><button class="btn w-xs text-4xl">Clear'),fe=L('<form action="POST" class="wrapper-v w-3xl"><h4></h4><input class="input w-full" name="to" type="email" placeholder="test@email.com"><input class="input w-full" name="subject" type="text" placeholder="RE: the answer"><textarea class="input w-full" name="body" placeholder="42"></textarea><button class="btn w-xs">Send Email'),ce=()=>{const[e,n]=J(0);return(()=>{const t=re();return b(t,x(ae,{onCleanCounter:()=>n(0),onValueChange:s=>n(e()+(s?.detail??1)),get value(){return e()}}),null),b(t,x(j,{formTitle:"uncontrolled form"}),null),b(t,x(j,{formTitle:"controlled form",onSend:s=>{s.preventDefault(),oe(s.detail).then(console.log)}}),null),t})()},ae=e=>{const n=Y(e);return(()=>{const t=ue(),s=t.firstChild,l=s.nextSibling,i=l.firstChild,r=i.nextSibling,o=l.nextSibling;return b(s,()=>e.value),i.$$click=()=>n("valueChange"),r.$$click=()=>n("valueChange",-1),o.$$click=()=>n("cleanCounter"),t})()},j=e=>{const n=Y(e),t=s=>{s.preventDefault();const l=new FormData(s.target);n("send",l,{cancelable:!0})&&ie(l).then(console.log)};return(()=>{const s=fe(),l=s.firstChild;return s.addEventListener("submit",t),b(l,()=>e.formTitle),s})()};ne(()=>x(ce,{}),document.getElementById("root"));se(["click"]);