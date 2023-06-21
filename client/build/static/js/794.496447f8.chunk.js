/*! For license information please see 794.496447f8.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[794],{794:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var n=r(4165),o=r(5861),i=r(9439),a=r(2791),c={container:"register_container__0vsim",form:"register_form__dtJND",input:"register_input__+ej3y",button:"register_button__gXfFn",link:"register_link__3WbtC",error:"register_error__sMS1F"},u=r(7689),s=r(1087),l=r(6210),h=r(184),f=function(){var t=(0,a.useState)(null),e=(0,i.Z)(t,2),r=e[0],f=e[1],p=(0,u.s0)(),d=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){var r,o,i;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),r=e.target[0].value,o=e.target[1].value,i=e.target[2].value,/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(o)){t.next=7;break}return t.abrupt("return",f("Please enter a valid email address"));case 7:return t.prev=7,t.next=10,fetch("".concat(l._,"/auth/dashboard/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r,email:o,password:i})});case 10:t.sent.ok?(localStorage.setItem("name",JSON.stringify(r)),p("/dashboard/login")):f("Something went wrong!"),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(7),f("Something went wrong!");case 17:case"end":return t.stop()}}),t,null,[[7,14]])})));return function(e){return t.apply(this,arguments)}}();return(0,h.jsxs)("div",{className:c.container,children:[(0,h.jsx)("p",{className:c.error,children:r&&r}),(0,h.jsx)("h1",{className:c.title,children:"Create an Account"}),(0,h.jsx)("h2",{className:c.subtitle,children:"Please sign up to see the dashboard."}),(0,h.jsxs)("form",{onSubmit:d,className:c.form,children:[(0,h.jsx)("input",{type:"text",placeholder:"Username",required:!0,className:c.input}),(0,h.jsx)("input",{type:"text",placeholder:"Email",required:!0,className:c.input}),(0,h.jsx)("input",{type:"password",placeholder:"Password",required:!0,className:c.input}),(0,h.jsx)("button",{className:c.button,children:"Register"})]}),(0,h.jsx)("span",{className:c.or,children:"- OR -"}),(0,h.jsx)(s.rU,{className:c.link,to:"/dashboard/login",children:"Login with an existing account"})]})}},6210:function(t,e,r){r.d(e,{_:function(){return n}});var n="https://idealinking-blog-app.onrender.com"},5861:function(t,e,r){function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})},4165:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(1002);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(P){l=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),c=new k(n||[]);return i(a,"_invoke",{value:L(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var p={};function d(){}function v(){}function y(){}var g={};l(g,c,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(O([])));w&&w!==e&&r.call(w,c)&&(g=w);var x=y.prototype=d.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function o(i,a,c,u){var s=f(t[i],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==(0,n.Z)(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=y,i(x,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=l(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(_.prototype),l(_.prototype,u,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(h(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(x),l(x,s,"Generator"),l(x,c,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}}}]);
//# sourceMappingURL=794.496447f8.chunk.js.map