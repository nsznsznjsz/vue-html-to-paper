module.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";(function(e){function n(e,t){t.forEach(function(t){var n=e.document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href",t),e.document.getElementsByTagName("head")[0].appendChild(n)})}Object.defineProperty(t,"__esModule",{value:!0});var r={name:"_blank",specs:["fullscreen=yes","titlebar=yes","scrollbars=yes"],replace:!0,styles:[]},o=function(e,t){return function(n){return e[n]?e[n]:t[n]?t[n]:r[n]}};t.default={install:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.prototype.$htmlToPaper=function(t,i,u){var c=o(i,r),l=c("name"),s=c("replace"),a=c("styles"),f=c("specs");"production"!==e.env.NODE_ENV&&console.warn(a),f=f.length?f.join(","):"";var p=document.getElementById(t);if(!p)return alert("Element to print #"+t+" not found!"),u?void 0:Promise.reject();var d=window.open("",l,f,s);d.document.write("<html><head><title>"+document.title+"</title></head><body>"+p.innerHTML+"</body>"+"</html>"),n(d,a);var h=new Promise(function(e){setTimeout(function(){d.document.close(),d.focus(),d.print(),d.close(),u&&u(),e()},1e3)});return!!u||h}}}}).call(t,n(1))},function(e,t){function n(){throw Error("setTimeout has not been defined")}function r(){throw Error("clearTimeout has not been defined")}function o(e){if(a===setTimeout)return setTimeout(e,0);if((a===n||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function u(){m&&d&&(m=!1,d.length?h=d.concat(h):y=-1,h.length&&c())}function c(){if(!m){var e=o(u);m=!0;for(var t=h.length;t;){for(d=h,h=[];++y<t;)d&&d[y].run();y=-1,t=h.length}d=null,m=!1,i(e)}}function l(e,t){this.fun=e,this.array=t}function s(){}var a,f,p=e.exports={};!function(){try{a="function"==typeof setTimeout?setTimeout:n}catch(e){a=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,h=[],m=!1,y=-1;p.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;arguments.length>n;n++)t[n-1]=arguments[n];h.push(new l(e,t)),1!==h.length||m||o(c)},l.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.prependListener=s,p.prependOnceListener=s,p.listeners=function(e){return[]},p.binding=function(e){throw Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw Error("process.chdir is not supported")},p.umask=function(){return 0}}]);