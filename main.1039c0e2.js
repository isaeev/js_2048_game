parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";function e(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=r(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var l=0,o=function(){};return{s:o,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,f=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return f=e.done,e},e:function(e){a=!0,i=e},f:function(){try{f||null==n.return||n.return()}finally{if(a)throw i}}}}function r(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var n=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],l=0,o=!1,i=document.querySelector(".start"),f=document.querySelector(".message-win"),a=document.querySelector(".message-start"),c=document.querySelector(".message-lose");function u(e,r){return JSON.stringify(e)===JSON.stringify(r)}function s(e){for(var r=0;r<n.length;r++){var t=void 0;if("right"===e||"left"===e){var l=n[r].filter(function(e){return 0!==e}),o=n[r].filter(function(e){return 0===e});t="right"===e?o.concat(l):l.concat(o),n[r]=t}else if("down"===e||"up"===e){for(var i=[],f=0;f<n.length;f++)i.push(n[f][r]);var a=i.filter(function(e){return 0!==e}),c=i.filter(function(e){return 0===e});t="down"===e?c.concat(a):a.concat(c);for(var u=0;u<n.length;u++)n[u][r]=t[u]}}}function d(e){for(var r=0;r<n.length;r++){var t=[],o=Array(n.length).fill(!1);if("down"===e||"up"===e)for(var i=0;i<n.length;i++)t.push(n[i][r]);else"left"!==e&&"right"!==e||(t=n[r].slice());var f=t.filter(function(e){return 0!==e}),a=t.filter(function(e){return 0===e});if("down"===e||"right"===e){for(var c=f.length-1;c>0;c--)f[c]!==f[c-1]||o[c]||(f[c]+=f[c-1],l+=f[c],f[c-1]=0,o[c]=!0);t=a.concat(f)}else if("up"===e||"left"===e){for(var u=0;u<f.length-1;u++)f[u]!==f[u+1]||o[u]||(f[u]+=f[u+1],l+=f[u],f[u+1]=0,o[u]=!0);t=f.concat(a)}if("down"===e||"up"===e)for(var s=0;s<n.length;s++)n[s][r]=t[s];else"left"!==e&&"right"!==e||(n[r]=t.slice())}}function h(e){for(var r=0;r<e;r++){for(var t=[],l=0;l<n.length;l++)for(var o=0;o<n[l].length;o++)0===n[l][o]&&t.push({row:l,tile:o});if(t.length>0){var i=t[Math.floor(Math.random()*t.length)],f=i.row,a=i.tile,c=2*Math.random()>1.9?4:2;n[f][a]=c}}}function v(){for(var e=document.querySelectorAll(".field-row"),r={0:"",2:"field-cell--2",4:"field-cell--4",8:"field-cell--8",16:"field-cell--16",32:"field-cell--32",64:"field-cell--64",128:"field-cell--128",256:"field-cell--256",512:"field-cell--512",1024:"field-cell--1024",2048:"field-cell--2048"},t=0;t<n.length;t++)for(var l=e[t].querySelectorAll(".field-cell"),o=0;o<n[t].length;o++){var i=n[t][o];l[o].className="field-cell "+r[i]}}function g(){for(var r=0,t=n;r<t.length;r++){var l,i=e(t[r]);try{for(i.s();!(l=i.n()).done;){2048===l.value&&(f.classList.remove("hidden"),o=!1)}}catch(a){i.e(a)}finally{i.f()}}}function y(){n=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]}function m(){for(var e=document.querySelector(".game-score"),r=0;r<n.length;r++)for(var t=0;t<n.length;t++){var o=document.querySelectorAll(".field-row")[r].querySelectorAll(".field-cell")[t];0!==n[r][t]?o.textContent=n[r][t]:o.textContent=" "}e.textContent=l,v()}function w(){if(n.some(function(e){return e.includes(0)}))return!1;for(var e=0;e<n.length;e++)for(var r=0;r<n.length-1;r++)if(n[e][r]===n[e][r+1])return!1;for(var t=0;t<n.length;t++)for(var l=0;l<n.length-1;l++)if(n[l][t]===n[l+1][t])return!1;return!0}i.addEventListener("click",function(){"Start"===i.innerText?(i.innerText="Restart",i.classList.replace("start","restart"),a.classList.add("hidden")):(y(),l=0,c.classList.add("hidden"),f.classList.add("hidden")),h(2),o=!0,m()}),document.addEventListener("keydown",function(e){if(o){var r=JSON.parse(JSON.stringify(n)),t=!1;switch(e.key){case"ArrowRight":!1===w()&&(d("right"),s("right"),g(),t=!0);break;case"ArrowLeft":!1===w()&&(d("left"),s("left"),g(),t=!0);break;case"ArrowDown":!1===w()&&(d("down"),s("down"),g(),t=!0);break;case"ArrowUp":!1===w()&&(d("up"),s("up"),g(),t=!0)}t&&!u(r,n)&&(h(1),w()?(o=!1,c.classList.remove("hidden"),m()):m())}});
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.1039c0e2.js.map