var O=Object.defineProperty;var u=(o,r)=>O(o,"name",{value:r,configurable:!0});var b=(o,r)=>()=>(r||o((r={exports:{}}).exports,r),r.exports);import{C as k}from"./web.url.constructor-90507874.js";import{w as E}from"./es.object.get-own-property-descriptor-64192e07.js";import{a as N,S as $}from"./iframe-1a89796a.js";import"./es.number.is-integer-8c3b365c.js";var W=b((x,h)=>{var f="storybook/a11y",G="a11yHighlight",P="".concat(f,"/result"),C="".concat(f,"/request"),D="".concat(f,"/running"),q="".concat(f,"/error"),M="".concat(f,"/manual"),Y="".concat(f,"/highlight"),m={RESULT:P,REQUEST:C,RUNNING:D,ERROR:q,MANUAL:M,HIGHLIGHT:Y};function H(o,r,n,i,a,s,e){try{var c=o[s](e),l=c.value}catch(p){n(p);return}c.done?r(l):Promise.resolve(l).then(i,a)}u(H,"asyncGeneratorStep");function S(o){return function(){var r=this,n=arguments;return new Promise(function(i,a){var s=o.apply(r,n);function e(l){H(s,i,a,e,c,"next",l)}u(e,"_next");function c(l){H(s,i,a,e,c,"throw",l)}u(c,"_throw"),e(void 0)})}}u(S,"_asyncToGenerator");var _=E.document,B=E.window;h&&h.hot&&h.hot.decline&&h.hot.decline();var v=N.getChannel(),g=!1,d,Q=function(){var o=S(regeneratorRuntime.mark(u(function r(n){var i,a;return regeneratorRuntime.wrap(u(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(n);case 2:if(i=e.sent,a=i.manual,a){e.next=7;break}return e.next=7,w(n);case 7:case"end":return e.stop()}},"_callee$"),r)},"_callee")));return u(function(n){return o.apply(this,arguments)},"handleRequest")}(),w=function(){var o=S(regeneratorRuntime.mark(u(function r(n){var i,a,s,e,c,l,p,T,y;return regeneratorRuntime.wrap(u(function(t){for(;;)switch(t.prev=t.next){case 0:return d=n,t.prev=1,t.next=4,I(n);case 4:if(i=t.sent,g){t.next=19;break}return g=!0,v.emit(m.RUNNING),t.next=10,k(()=>import("./axe-afc66e89.js").then(A=>A.a),["assets/axe-afc66e89.js","assets/es.object.get-own-property-descriptor-64192e07.js"]);case 10:return a=t.sent.default,s=i.element,e=s===void 0?"#root":s,c=i.config,l=i.options,p=l===void 0?{}:l,T=_.querySelector(e),a.reset(),c&&a.configure(c),t.next=17,a.run(T,p);case 17:y=t.sent,d===n?v.emit(m.RESULT,y):(g=!1,w(d));case 19:t.next=24;break;case 21:t.prev=21,t.t0=t.catch(1),v.emit(m.ERROR,t.t0);case 24:return t.prev=24,g=!1,t.finish(24);case 27:case"end":return t.stop()}},"_callee2$"),r,null,[[1,21,24,27]])},"_callee2")));return u(function(n){return o.apply(this,arguments)},"run")}(),I=function(){var o=S(regeneratorRuntime.mark(u(function r(n){var i,a;return regeneratorRuntime.wrap(u(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.__STORYBOOK_STORY_STORE__.loadStory({storyId:n});case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return i=e.t0,a=i.parameters,e.abrupt("return",a.a11y||{config:{},options:{restoreScroll:!0}});case 8:case"end":return e.stop()}},"_callee3$"),r)},"_callee3")));return u(function(n){return o.apply(this,arguments)},"getParams")}();v.on(m.REQUEST,Q);v.on(m.MANUAL,w);var V=u(function(r){return`
  outline: 2px dashed `.concat(r,`;
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`)},"highlightStyle"),R=E.document;h&&h.hot&&h.hot.decline&&h.hot.decline();var L=N.getChannel(),K=u(function(r){var n=G;U();var i=Array.from(new Set(r.elements)),a=R.createElement("style");a.setAttribute("id",n),a.innerHTML=i.map(function(s){return"".concat(s,`{
          `).concat(V(r.color),`
         }`)}).join(" "),R.head.appendChild(a)},"highlight"),U=u(function(){var r=G,n=R.getElementById(r);n&&n.parentNode.removeChild(n)},"resetHighlight");L.on($,U);L.on(m.HIGHLIGHT,K)});export default W();
//# sourceMappingURL=preview-db76b6ed.js.map
