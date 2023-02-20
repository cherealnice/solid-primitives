(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();const p={};function te(e){p.context=e}const ne=(e,t)=>e===t,C={equals:ne};let H=X;const w=1,N=2,V={owned:null,cleanups:null,context:null,owner:null};var d=null;let A=null,u=null,a=null,g=null,R=0;function se(e,t){const n=u,s=d,o=e.length===0,l=o?V:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},r=o?e:()=>e(()=>S(()=>O(l)));d=l,u=null;try{return E(r,!0)}finally{u=n,d=s}}function G(e,t){t=t?Object.assign({},C,t):C;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=o=>(typeof o=="function"&&(o=o(n.value)),W(n,o));return[Q.bind(n),s]}function D(e,t,n){const s=q(e,t,!1,w);x(s)}function K(e,t,n){H=fe;const s=q(e,t,!1,w);s.user=!0,g?g.push(s):x(s)}function T(e,t,n){n=n?Object.assign({},C,n):C;const s=q(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,x(s),Q.bind(s)}function S(e){if(u===null)return e();const t=u;u=null;try{return e()}finally{u=t}}function oe(e){K(()=>S(e))}function ie(e){const t=T(e),n=T(()=>U(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}function Q(){const e=A;if(this.sources&&(this.state||e))if(this.state===w||e)x(this);else{const t=a;a=null,E(()=>_(this),!1),a=t}if(u){const t=this.observers?this.observers.length:0;u.sources?(u.sources.push(this),u.sourceSlots.push(t)):(u.sources=[this],u.sourceSlots=[t]),this.observers?(this.observers.push(u),this.observerSlots.push(u.sources.length-1)):(this.observers=[u],this.observerSlots=[u.sources.length-1])}return this.value}function W(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&E(()=>{for(let o=0;o<e.observers.length;o+=1){const l=e.observers[o],r=A&&A.running;r&&A.disposed.has(l),(r&&!l.tState||!r&&!l.state)&&(l.pure?a.push(l):g.push(l),l.observers&&J(l)),r||(l.state=w)}if(a.length>1e6)throw a=[],new Error},!1)),t}function x(e){if(!e.fn)return;O(e);const t=d,n=u,s=R;u=d=e,le(e,e.value,s),u=n,d=t}function le(e,t,n){let s;try{s=e.fn(t)}catch(o){e.pure&&(e.state=w,e.owned&&e.owned.forEach(O),e.owned=null),Y(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?W(e,s):e.value=s,e.updatedAt=n)}function q(e,t,n,s=w,o){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:null,pure:n};return d===null||d!==V&&(d.owned?d.owned.push(l):d.owned=[l]),l}function $(e){const t=A;if(e.state===0||t)return;if(e.state===N||t)return _(e);if(e.suspense&&S(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<R);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===w||t)x(e);else if(e.state===N||t){const o=a;a=null,E(()=>_(e,n[0]),!1),a=o}}function E(e,t){if(a)return e();let n=!1;t||(a=[]),g?n=!0:g=[],R++;try{const s=e();return re(n),s}catch(s){n||(g=null),a=null,Y(s)}}function re(e){if(a&&(X(a),a=null),e)return;const t=g;g=null,t.length&&E(()=>H(t),!1)}function X(e){for(let t=0;t<e.length;t++)$(e[t])}function fe(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:$(s)}for(p.context&&te(),t=0;t<n;t++)$(e[t])}function _(e,t){const n=A;e.state=0;for(let s=0;s<e.sources.length;s+=1){const o=e.sources[s];o.sources&&(o.state===w||n?o!==t&&$(o):(o.state===N||n)&&_(o,t))}}function J(e){const t=A;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=N,s.pure?a.push(s):g.push(s),s.observers&&J(s))}}function O(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const l=o.pop(),r=n.observerSlots.pop();s<o.length&&(l.sourceSlots[r]=s,o[s]=l,n.observerSlots[s]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)O(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ue(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Y(e){throw e=ue(e),e}function U(e){if(typeof e=="function"&&!e.length)return U(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=U(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function y(e,t){return S(()=>e(t||{}))}function ce(e){let t=!1,n=!1;const s=(r,i)=>r[0]===i[0]&&(t?r[1]===i[1]:!r[1]==!i[1])&&r[2]===i[2],o=ie(()=>e.children),l=T(()=>{let r=o();Array.isArray(r)||(r=[r]);for(let i=0;i<r.length;i++){const f=r[i].when;if(f)return n=!!r[i].keyed,[i,f,r[i]]}return[-1]},void 0,{equals:s});return T(()=>{const[r,i,f]=l();if(r<0)return e.fallback;const c=f.children,h=typeof c=="function"&&c.length>0;return t=n||h,h?S(()=>c(i)):c},void 0,void 0)}function P(e){return e}function ae(e,t,n){let s=n.length,o=t.length,l=s,r=0,i=0,f=t[o-1].nextSibling,c=null;for(;r<o||i<l;){if(t[r]===n[i]){r++,i++;continue}for(;t[o-1]===n[l-1];)o--,l--;if(o===r){const h=l<s?i?n[i-1].nextSibling:n[l-i]:f;for(;i<l;)e.insertBefore(n[i++],h)}else if(l===i)for(;r<o;)(!c||!c.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[l-1]&&n[i]===t[o-1]){const h=t[--o].nextSibling;e.insertBefore(n[i++],t[r++].nextSibling),e.insertBefore(n[--l],h),t[o]=n[l]}else{if(!c){c=new Map;let b=i;for(;b<l;)c.set(n[b],b++)}const h=c.get(t[r]);if(h!=null)if(i<h&&h<l){let b=r,B=1,F;for(;++b<o&&b<l&&!((F=c.get(t[b]))==null||F!==h+B);)B++;if(B>h-i){const ee=t[r];for(;i<h;)e.insertBefore(n[i++],ee)}else e.replaceChild(n[i++],t[r++])}else r++;else t[r++].remove()}}}const I="_$DX_DELEGATE";function he(e,t,n,s={}){let o;return se(l=>{o=l,t===document?e():Z(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{o(),t.textContent=""}}function v(e,t,n){const s=document.createElement("template");s.innerHTML=e;let o=s.content.firstChild;return n&&(o=o.firstChild),o}function de(e,t=window.document){const n=t[I]||(t[I]=new Set);for(let s=0,o=e.length;s<o;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,pe))}}function j(e,t,n){return S(()=>e(t,n))}function Z(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return L(e,t,s,n);D(o=>L(e,t(),o,n),s)}function pe(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),p.registry&&!p.done&&(p.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let o=s.nextSibling;s.remove(),s=o}s&&s.remove()}));n;){const s=n[t];if(s&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?s.call(n,o,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function L(e,t,n,s,o){for(p.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(p.context)return n;if(l==="number"&&(t=t.toString()),r){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=m(e,n,s,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(p.context)return n;n=m(e,n,s)}else{if(l==="function")return D(()=>{let i=t();for(;typeof i=="function";)i=i();n=L(e,i,n,s)}),()=>n;if(Array.isArray(t)){const i=[],f=n&&Array.isArray(n);if(M(i,t,n,o))return D(()=>n=L(e,i,n,s,!0)),()=>n;if(p.context){if(!i.length)return n;for(let c=0;c<i.length;c++)if(i[c].parentNode)return n=i}if(i.length===0){if(n=m(e,n,s),r)return n}else f?n.length===0?k(e,i,s):ae(e,n,i):(n&&m(e),k(e,i));n=i}else if(t instanceof Node){if(p.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=m(e,n,s,t);m(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function M(e,t,n,s){let o=!1;for(let l=0,r=t.length;l<r;l++){let i=t[l],f=n&&n[l];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))o=M(e,i,f)||o;else if(typeof i=="function")if(s){for(;typeof i=="function";)i=i();o=M(e,Array.isArray(i)?i:[i],Array.isArray(f)?f:[f])||o}else e.push(i),o=!0;else{const c=String(i);f&&f.nodeType===3&&f.data===c?e.push(f):e.push(document.createTextNode(c))}}return o}function k(e,t,n=null){for(let s=0,o=t.length;s<o;s++)e.insertBefore(t[s],n)}function m(e,t,n,s){if(n===void 0)return e.textContent="";const o=s||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const i=t[r];if(o!==i){const f=i.parentNode===e;!l&&!r?f?e.replaceChild(o,i):e.insertBefore(o,n):f&&i.remove()}else l=!0}}else e.insertBefore(o,n);return[o]}const ge=(e,t)=>{t()&&oe(()=>{e.hasAttribute("autofocus")&&setTimeout(()=>{e.focus()})})},z=e=>{K(()=>{const t=e();t&&setTimeout(()=>t.focus())})};const ye=v("<button autofocus>directive</button>"),we=v("<button>ref</button>"),be=v("<button>ref signal</button>"),Ae=v('<div class="flex gap-4 m-4"><button>toggle</button></div>'),me=v("<button>no autofocus</button>"),Se=()=>(()=>{const e=ye.cloneNode(!0);return j(ge,e,()=>!0),e})(),xe=()=>{let e;return z(()=>e),(()=>{const t=we.cloneNode(!0),n=e;return typeof n=="function"?j(n,t):e=t,t})()},Ee=()=>{const[e,t]=G();return z(e),(()=>{const n=be.cloneNode(!0);return j(t,n),n})()},ve=()=>{const[e,t]=G(0);return(()=>{const n=Ae.cloneNode(!0),s=n.firstChild;return s.$$click=()=>t((e()+1)%6),Z(n,y(ce,{get fallback(){return me.cloneNode(!0)},get children(){return[y(P,{get when(){return e()===0},get children(){return y(Se,{})}}),y(P,{get when(){return e()===2},get children(){return y(xe,{})}}),y(P,{get when(){return e()===4},get children(){return y(Ee,{})}})]}}),null),n})()};he(()=>y(ve,{}),document.getElementById("root"));de(["click"]);