import{c as _,o as N,a as C,b as q,m as w,d as B,u as F,e as M,i as $,f as b,g as P,t as k}from"./index.b80416e6.js";function R(t){const s=typeof t.on=="function"||Array.isArray(t.on)?t.on:()=>t.on;return _(N(s,(o,a)=>{const i=t.children;return typeof i=="function"&&i.length>0?i(o,a):i}))}const S=t=>{let s,o=!0;const[a,i]=C(),[x,h]=C(),v=q(()=>t.children),r=t.name||"s";t=w({name:r,enterActiveClass:r+"-enter-active",enterClass:r+"-enter",enterToClass:r+"-enter-to",exitActiveClass:r+"-exit-active",exitClass:r+"-exit",exitToClass:r+"-exit-to"},t);const{onBeforeEnter:L,onEnter:f,onAfterEnter:A,onBeforeExit:E,onExit:m,onAfterExit:T}=t;function y(e,n){if(!o||t.appear){let c=function(){e&&(e.classList.remove(...l),e.classList.remove(...u),M(()=>{a()!==e&&i(e),x()===e&&h(void 0)}),A&&A(e),t.mode==="inout"&&g(e,n))};const d=t.enterClass.split(" "),l=t.enterActiveClass.split(" "),u=t.enterToClass.split(" ");L&&L(e),e.classList.add(...d),e.classList.add(...l),requestAnimationFrame(()=>{e.classList.remove(...d),e.classList.add(...u),f&&f(e,c),(!f||f.length<2)&&(e.addEventListener("transitionend",c,{once:!0}),e.addEventListener("animationend",c,{once:!0}))})}n&&!t.mode?h(e):i(e)}function g(e,n){const d=t.exitClass.split(" "),l=t.exitActiveClass.split(" "),u=t.exitToClass.split(" ");if(!n.parentNode)return c();E&&E(n),n.classList.add(...d),n.classList.add(...l),requestAnimationFrame(()=>{n.classList.remove(...d),n.classList.add(...u)}),m&&m(n,c),(!m||m.length<2)&&(n.addEventListener("transitionend",c,{once:!0}),n.addEventListener("animationend",c,{once:!0}));function c(){n.classList.remove(...l),n.classList.remove(...u),a()===n&&i(void 0),T&&T(n),t.mode==="outin"&&y(e,n)}}return B(e=>{for(s=v();typeof s=="function";)s=s();return F(()=>(s&&s!==e&&(t.mode!=="outin"?y(s,e):o&&i(s)),e&&e!==s&&t.mode!=="inout"&&g(s,e),o=!1,s))}),[a,x]},j=k('<button class="btn"></button>'),z=k('<div class="wrapper-h"></div>'),G=()=>{const[t,s]=C(0);return(()=>{const o=z.cloneNode(!0);return $(o,b(S,{onEnter:(a,i)=>{a.animate([{opacity:0},{opacity:1}],{duration:600}).finished.then(i)},onExit:(a,i)=>{a.animate([{opacity:1},{opacity:0}],{duration:600}).finished.then(i)},mode:"outin",get children(){return b(R,{on:t,get children(){const a=j.cloneNode(!0);return a.$$click=()=>s(i=>++i),$(a,t),a}})}})),o})()};P(["click"]);export{G as default};