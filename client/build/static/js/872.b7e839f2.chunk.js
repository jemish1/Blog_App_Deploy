/*! For license information please see 872.b7e839f2.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[872],{872:function(t,e,r){r.r(e),r.d(e,{default:function(){return p}});var n=r(4165),o=r(5861),i=r(9439),a=r(2791),c=r(7689),u=r(1087),s={container:"login_container__TRBvL",subtitle:"login_subtitle__TcxA9",form:"login_form__g5wOl",input:"login_input__gikAQ",button:"login_button__a79wF",or:"login_or__h+8Dt",link:"login_link__WXoEI",error:"login_error__mjSIS"},f=r(1600),l=r(6210),h=r(184),p=function(){var t=(0,a.useState)(null),e=(0,i.Z)(t,2),r=e[0],p=e[1],d=(0,a.useState)(null),v=(0,i.Z)(d,2),y=v[0],g=v[1],m=(0,f.Z)([]),w=(0,i.Z)(m,2),x=(w[0],w[1]),b=(0,c.s0)(),_=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){var r,o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),r=e.target[0].value,o=e.target[1].value,t.prev=3,t.next=6,fetch("".concat(l._,"/auth/dashboard/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r,password:o})});case 6:t.sent.ok?(x("isLoggedIn","true"),p("Login successful!"),b("/dashboard")):g("Invalid email or password"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),g("Something went wrong!");case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e){return t.apply(this,arguments)}}();return(0,h.jsxs)("div",{className:s.container,children:[(0,h.jsx)("p",{className:s.error,children:y&&y}),(0,h.jsx)("h1",{className:s.title,children:r||"Welcome Back"}),(0,h.jsx)("h2",{className:s.subtitle,children:"Please sign in to see the dashboard."}),(0,h.jsxs)("form",{onSubmit:_,className:s.form,children:[(0,h.jsx)("input",{type:"text",placeholder:"Email",required:!0,className:s.input}),(0,h.jsx)("input",{type:"password",placeholder:"Password",required:!0,className:s.input}),(0,h.jsx)("button",{className:s.button,children:"Login"})]}),(0,h.jsx)("span",{className:s.or,children:"- OR -"}),(0,h.jsx)(u.rU,{className:s.link,to:"/dashboard/register",children:"Create new account"})]})}},6210:function(t,e,r){r.d(e,{_:function(){return n}});var n="https://idealinking-blog-app.onrender.com"},1600:function(t,e,r){r.d(e,{Z:function(){return f}});var n=r(2791),o=r(4940);function i(t,e){void 0===e&&(e={});var r=function(t){if(t&&"j"===t[0]&&":"===t[1])return t.substr(2);return t}(t);if(function(t,e){return"undefined"===typeof e&&(e=!t||"{"!==t[0]&&"["!==t[0]&&'"'!==t[0]),!e}(r,e.doNotParse))try{return JSON.parse(r)}catch(n){}return t}var a=function(){return a=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a.apply(this,arguments)},c=function(){function t(t,e){var r=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function(t,e){return"string"===typeof t?o.Q(t,e):"object"===typeof t&&null!==t?t:{}}(t,e),new Promise((function(){r.HAS_DOCUMENT_COOKIE="object"===typeof document&&"string"===typeof document.cookie})).catch((function(){}))}return t.prototype._updateBrowserValues=function(t){this.HAS_DOCUMENT_COOKIE&&(this.cookies=o.Q(document.cookie,t))},t.prototype._emitChange=function(t){for(var e=0;e<this.changeListeners.length;++e)this.changeListeners[e](t)},t.prototype.get=function(t,e,r){return void 0===e&&(e={}),this._updateBrowserValues(r),i(this.cookies[t],e)},t.prototype.getAll=function(t,e){void 0===t&&(t={}),this._updateBrowserValues(e);var r={};for(var n in this.cookies)r[n]=i(this.cookies[n],t);return r},t.prototype.set=function(t,e,r){var n;"object"===typeof e&&(e=JSON.stringify(e)),this.cookies=a(a({},this.cookies),((n={})[t]=e,n)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=o.q(t,e,r)),this._emitChange({name:t,value:e,options:r})},t.prototype.remove=function(t,e){var r=e=a(a({},e),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=a({},this.cookies),delete this.cookies[t],this.HAS_DOCUMENT_COOKIE&&(document.cookie=o.q(t,"",r)),this._emitChange({name:t,value:void 0,options:e})},t.prototype.addChangeListener=function(t){this.changeListeners.push(t)},t.prototype.removeChangeListener=function(t){var e=this.changeListeners.indexOf(t);e>=0&&this.changeListeners.splice(e,1)},t}(),u=n.createContext(new c),s=(u.Provider,u.Consumer,u);function f(t){var e=(0,n.useContext)(s);if(!e)throw new Error("Missing <CookiesProvider>");var r=e.getAll(),o=(0,n.useState)(r),i=o[0],a=o[1],c=(0,n.useRef)(i);return"undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement&&(0,n.useLayoutEffect)((function(){function r(){var r=e.getAll();(function(t,e,r){if(!t)return!0;for(var n=0,o=t;n<o.length;n++){var i=o[n];if(e[i]!==r[i])return!0}return!1})(t||null,r,c.current)&&a(r),c.current=r}return e.addChangeListener(r),function(){e.removeChangeListener(r)}}),[e]),[i,(0,n.useMemo)((function(){return e.set.bind(e)}),[e]),(0,n.useMemo)((function(){return e.remove.bind(e)}),[e])]}},4940:function(t,e){e.Q=function(t,e){if("string"!==typeof t)throw new TypeError("argument str must be a string");for(var n={},o=e||{},a=t.split(";"),c=o.decode||r,u=0;u<a.length;u++){var s=a[u],f=s.indexOf("=");if(!(f<0)){var l=s.substring(0,f).trim();if(void 0==n[l]){var h=s.substring(f+1,s.length).trim();'"'===h[0]&&(h=h.slice(1,-1)),n[l]=i(h,c)}}}return n},e.q=function(t,e,r){var i=r||{},a=i.encode||n;if("function"!==typeof a)throw new TypeError("option encode is invalid");if(!o.test(t))throw new TypeError("argument name is invalid");var c=a(e);if(c&&!o.test(c))throw new TypeError("argument val is invalid");var u=t+"="+c;if(null!=i.maxAge){var s=i.maxAge-0;if(isNaN(s)||!isFinite(s))throw new TypeError("option maxAge is invalid");u+="; Max-Age="+Math.floor(s)}if(i.domain){if(!o.test(i.domain))throw new TypeError("option domain is invalid");u+="; Domain="+i.domain}if(i.path){if(!o.test(i.path))throw new TypeError("option path is invalid");u+="; Path="+i.path}if(i.expires){if("function"!==typeof i.expires.toUTCString)throw new TypeError("option expires is invalid");u+="; Expires="+i.expires.toUTCString()}i.httpOnly&&(u+="; HttpOnly");i.secure&&(u+="; Secure");if(i.sameSite){switch("string"===typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case!0:u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"strict":u+="; SameSite=Strict";break;case"none":u+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return u};var r=decodeURIComponent,n=encodeURIComponent,o=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function i(t,e){try{return e(t)}catch(r){return t}}},5861:function(t,e,r){function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})},4165:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(1002);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(N){f=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),c=new k(n||[]);return i(a,"_invoke",{value:E(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=l;var p={};function d(){}function v(){}function y(){}var g={};f(g,c,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(j([])));w&&w!==e&&r.call(w,c)&&(g=w);var x=y.prototype=d.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function o(i,a,c,u){var s=h(t[i],t,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==(0,n.Z)(l)&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function E(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function j(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return v.prototype=y,i(x,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=f(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,f(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(_.prototype),f(_.prototype,u,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(x),f(x,s,"Generator"),f(x,c,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}}}]);
//# sourceMappingURL=872.b7e839f2.chunk.js.map