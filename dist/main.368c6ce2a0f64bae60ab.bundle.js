(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(c=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(s," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var c,a,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(r[c]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);o&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";n.r(t);n(3);var o,r,i,c,a,s,l,d,u,f,p,m,v,h,y,_,g=0,b=function(){o=document.querySelector(".todo-content__input"),r=document.querySelector(".todo-list__info"),i=document.querySelector(".todo-content__addControl"),c=document.querySelector(".todo-list Ul"),s=document.querySelector(".todo-popup"),l=document.querySelector(".todo-popup__main-info"),u=document.querySelector(".todo-popup__taskInput"),f=document.querySelector(".todo-popup__control--accept"),p=document.querySelector(".todo-popup__control--cancel"),m=document.querySelector(".todo"),v=c.getElementsByTagName("li"),h=document.querySelector(".todo-content__deleteAllControl"),y=document.querySelector(".todo-content__addDate"),_=document.querySelector(".todo-popup__dateInput")},C=function(){i.addEventListener("click",L),c.addEventListener("click",E),p.addEventListener("click",k),f.addEventListener("click",w),o.addEventListener("keyup",x),h.addEventListener("click",M)},x=function(){13===event.keyCode&&L()},L=function(){o.value.length>350?(r.innerText="Too many characters, please limited to 350",r.style.color="red"):""===o.value?(r.innerText="Enter the content of task!",r.style.color="red"):(g++,(a=document.createElement("li")).innerText=o.value,a.setAttribute("id","todo-".concat(g)),c.appendChild(a),o.value="",r.innerText="",T(),y.value="")},T=function(){var e=document.createElement("div");e.classList.add("todo-list__tools"),a.appendChild(e);var t=document.createElement("span");t.classList.add("todo__date"),t.innerText=y.value,e.appendChild(t);var n=document.createElement("button");n.classList.add("todo__complete"),n.innerHTML='<i class="fas fa-check"></i>',e.appendChild(n);var o=document.createElement("button");o.classList.add("todo__edit"),o.innerText="EDIT",e.appendChild(o);var r=document.createElement("button");r.classList.add("todo__delete"),r.innerHTML='<i class="fas fa-times"></i>',e.appendChild(r)},E=function(e){e.target.closest("button").classList.contains("todo__complete")?(e.target.closest("li").classList.toggle("todo__completed"),e.target.closest("button").classList.toggle("todo__completed")):e.target.closest("button").classList.contains("todo__edit")?S(e):e.target.closest("button").classList.contains("todo__delete")&&q(e)},S=function(e){var t=e.target.closest("li").id;d=document.getElementById(t),u.value=d.firstChild.textContent,_.value=d.childNodes[1].childNodes[0].firstChild.textContent,s.style.display="flex",m.style.filter="blur(5px)"},w=function(){""!==u.value?(d.firstChild.textContent=u.value,d.childNodes[1].childNodes[0].firstChild.textContent=_.value,s.style.display="none",l.innerText="",m.style.filter="blur(0px)"):(l.innerText="You need to a write content!",l.style.color="red",l.style.fontWeight="bold")},k=function(){s.style.display="none",l.innerText="",m.style.filter="blur(0px)"},q=function(e){e.target.closest("li").remove(),console.log(),0==v.length&&(r.innerText="There are no tasks in the list.")},M=function(){c.innerHTML=""};document.addEventListener("DOMContentLoaded",(function(){b(),C()}))},function(e,t,n){var o=n(4),r=n(5);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function a(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],s=t.base?i[0]+t.base:i[0],l=n[s]||0,d="".concat(s," ").concat(l);n[s]=l+1;var u=a(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(c[u].references++,c[u].updater(f)):c.push({identifier:d,updater:h(f,t),references:1}),o.push(d)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var c=i(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var i=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function p(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,v=0;function h(e,t){var n,o,r;if(t.singleton){var i=v++;n=m||(m=l(t)),o=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=l(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=a(n[o]);c[r].references--}for(var i=s(e,t),l=0;l<n.length;l++){var d=a(n[l]);0===c[d].references&&(c[d].updater(),c.splice(d,1))}n=i}}}},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o)()(!0);r.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.default=r}],[[1,1]]]);