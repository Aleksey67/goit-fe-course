!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var n=document.querySelector(".list"),o=document.querySelector(".js-form"),u=document.querySelector(".js-input"),i=(document.querySelector(".hide"),document.querySelector(".laptops").innerHTML.trim()),c=Handlebars.compile(i),l=[];function a(e){var t=e.reduce(function(e,t){return e+c(t)},"");n.innerHTML=t}function f(){localStorage.setItem("fetchTags",JSON.stringify(l))}o.addEventListener("submit",function(e){e.preventDefault(),console.log(u.value),function(e){var t=/^(ftp|http|https):\/\/[^ "]+$/.test(e),r=l.some(function(t){return t.url===e});if(!t||r)return r?alert("Such an url is existed!"):alert("It's unvalid url!");fetch("https://api.linkpreview.net/?key=5cd71a29bf3526610f7d14eb637f134f14713b1c85043&q=".concat(e)).then(function(e){if(e.ok)return e.json();throw new Error("Error"+e.statusText)}).then(function(e){l.unshift({url:e.url,img:e.image}),a(l),f()}).catch(function(e){return console.log("Error: "+e)})}(u.value),a(l),f()}),n.addEventListener("click",function(e){var t=e.target;"BUTTON"===t.nodeName&&(console.log(l),a(l=l.filter(function(e){return t.previousElementSibling.innerHTML!=e.url})),f())}),function(){if(localStorage.getItem("fetchTags")){var e=JSON.parse(localStorage.getItem("fetchTags"));l=e}}(),a(function(){var e=localStorage.getItem("fetchTags"),t=JSON.parse(e);if(null!==t)return t}()),console.log(l)}]);