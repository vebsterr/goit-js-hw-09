function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var i=o("eWCmQ");const u=document.querySelector(".form");u.addEventListener("submit",(function(t){t.preventDefault();let n=Number(l.delay);for(let t=0;t<l.amount;t+=1)setTimeout((()=>{var r,o;(r=t+1,o=n+t*Number(l.step),new Promise(((e,t)=>{const n=Math.random()>.3;n?e(`✅ Fulfilled promise ${r} in ${o}ms`):t(`❌ Rejected promise ${r} in ${o}ms`)}))).then((t=>e(i).Notify.success(t))).catch((t=>e(i).Notify.failure(t)))}),n+t*Number(l.step))})),u.addEventListener("input",(function(e){l[e.target.name]=e.target.value}));let l={};
//# sourceMappingURL=03-promises.41090521.js.map