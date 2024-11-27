var n8=Object.defineProperty;var r8=(t,e,n)=>e in t?n8(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var F=(t,e,n)=>(r8(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function i8(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ru={},s8={get exports(){return ru},set exports(t){ru=t}},sh={},w={},a8={get exports(){return w},set exports(t){w=t}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rl=Symbol.for("react.element"),o8=Symbol.for("react.portal"),f8=Symbol.for("react.fragment"),u8=Symbol.for("react.strict_mode"),l8=Symbol.for("react.profiler"),c8=Symbol.for("react.provider"),d8=Symbol.for("react.context"),h8=Symbol.for("react.forward_ref"),p8=Symbol.for("react.suspense"),m8=Symbol.for("react.memo"),g8=Symbol.for("react.lazy"),mv=Symbol.iterator;function v8(t){return t===null||typeof t!="object"?null:(t=mv&&t[mv]||t["@@iterator"],typeof t=="function"?t:null)}var pw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mw=Object.assign,gw={};function Ro(t,e,n){this.props=t,this.context=e,this.refs=gw,this.updater=n||pw}Ro.prototype.isReactComponent={};Ro.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ro.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vw(){}vw.prototype=Ro.prototype;function Km(t,e,n){this.props=t,this.context=e,this.refs=gw,this.updater=n||pw}var Qm=Km.prototype=new vw;Qm.constructor=Km;mw(Qm,Ro.prototype);Qm.isPureReactComponent=!0;var gv=Array.isArray,yw=Object.prototype.hasOwnProperty,Ym={current:null},ww={key:!0,ref:!0,__self:!0,__source:!0};function bw(t,e,n){var r,i={},s=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)yw.call(e,r)&&!ww.hasOwnProperty(r)&&(i[r]=e[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var f=Array(o),u=0;u<o;u++)f[u]=arguments[u+2];i.children=f}if(t&&t.defaultProps)for(r in o=t.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:rl,type:t,key:s,ref:a,props:i,_owner:Ym.current}}function y8(t,e){return{$$typeof:rl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xm(t){return typeof t=="object"&&t!==null&&t.$$typeof===rl}function w8(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vv=/\/+/g;function j1(t,e){return typeof t=="object"&&t!==null&&t.key!=null?w8(""+t.key):e.toString(36)}function Ic(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case rl:case o8:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+j1(a,0):r,gv(i)?(n="",t!=null&&(n=t.replace(vv,"$&/")+"/"),Ic(i,e,n,"",function(u){return u})):i!=null&&(Xm(i)&&(i=y8(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(vv,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",gv(t))for(var o=0;o<t.length;o++){s=t[o];var f=r+j1(s,o);a+=Ic(s,e,n,f,i)}else if(f=v8(t),typeof f=="function")for(t=f.call(t),o=0;!(s=t.next()).done;)s=s.value,f=r+j1(s,o++),a+=Ic(s,e,n,f,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Bl(t,e,n){if(t==null)return t;var r=[],i=0;return Ic(t,r,"","",function(s){return e.call(n,s,i++)}),r}function b8(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Sc={transition:null},_8={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Sc,ReactCurrentOwner:Ym};ie.Children={map:Bl,forEach:function(t,e,n){Bl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Bl(t,function(){e++}),e},toArray:function(t){return Bl(t,function(e){return e})||[]},only:function(t){if(!Xm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Ro;ie.Fragment=f8;ie.Profiler=l8;ie.PureComponent=Km;ie.StrictMode=u8;ie.Suspense=p8;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_8;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=mw({},t.props),i=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Ym.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(f in e)yw.call(e,f)&&!ww.hasOwnProperty(f)&&(r[f]=e[f]===void 0&&o!==void 0?o[f]:e[f])}var f=arguments.length-2;if(f===1)r.children=n;else if(1<f){o=Array(f);for(var u=0;u<f;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:rl,type:t.type,key:i,ref:s,props:r,_owner:a}};ie.createContext=function(t){return t={$$typeof:d8,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:c8,_context:t},t.Consumer=t};ie.createElement=bw;ie.createFactory=function(t){var e=bw.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:h8,render:t}};ie.isValidElement=Xm;ie.lazy=function(t){return{$$typeof:g8,_payload:{_status:-1,_result:t},_init:b8}};ie.memo=function(t,e){return{$$typeof:m8,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Sc.transition;Sc.transition={};try{t()}finally{Sc.transition=e}};ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ie.useCallback=function(t,e){return qt.current.useCallback(t,e)};ie.useContext=function(t){return qt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return qt.current.useEffect(t,e)};ie.useId=function(){return qt.current.useId()};ie.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return qt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};ie.useRef=function(t){return qt.current.useRef(t)};ie.useState=function(t){return qt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return qt.current.useTransition()};ie.version="18.2.0";(function(t){t.exports=ie})(a8);const k8=i8(w);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E8=w,I8=Symbol.for("react.element"),S8=Symbol.for("react.fragment"),T8=Object.prototype.hasOwnProperty,C8=E8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x8={key:!0,ref:!0,__self:!0,__source:!0};function _w(t,e,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)T8.call(e,r)&&!x8.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:I8,type:t,key:s,ref:a,props:i,_owner:C8.current}}sh.Fragment=S8;sh.jsx=_w;sh.jsxs=_w;(function(t){t.exports=sh})(s8);const mn=ru.Fragment,_=ru.jsx,X=ru.jsxs;var H0={},Qc={},R8={get exports(){return Qc},set exports(t){Qc=t}},bn={},W0={},A8={get exports(){return W0},set exports(t){W0=t}},kw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(M,H){var K=M.length;M.push(H);e:for(;0<K;){var Ce=K-1>>>1,me=M[Ce];if(0<i(me,H))M[Ce]=H,M[K]=me,K=Ce;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var H=M[0],K=M.pop();if(K!==H){M[0]=K;e:for(var Ce=0,me=M.length,pa=me>>>1;Ce<pa;){var rr=2*(Ce+1)-1,Pt=M[rr],un=rr+1,ln=M[un];if(0>i(Pt,K))un<me&&0>i(ln,Pt)?(M[Ce]=ln,M[un]=K,Ce=un):(M[Ce]=Pt,M[rr]=K,Ce=rr);else if(un<me&&0>i(ln,K))M[Ce]=ln,M[un]=K,Ce=un;else break e}}return H}function i(M,H){var K=M.sortIndex-H.sortIndex;return K!==0?K:M.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var f=[],u=[],l=1,c=null,d=3,h=!1,p=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(M){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=M)r(u),H.sortIndex=H.expirationTime,e(f,H);else break;H=n(u)}}function b(M){if(v=!1,y(M),!p)if(n(f)!==null)p=!0,Fe(I);else{var H=n(u);H!==null&&Ke(b,H.startTime-M)}}function I(M,H){p=!1,v&&(v=!1,g(N),N=-1),h=!0;var K=d;try{for(y(H),c=n(f);c!==null&&(!(c.expirationTime>H)||M&&!he());){var Ce=c.callback;if(typeof Ce=="function"){c.callback=null,d=c.priorityLevel;var me=Ce(c.expirationTime<=H);H=t.unstable_now(),typeof me=="function"?c.callback=me:c===n(f)&&r(f),y(H)}else r(f);c=n(f)}if(c!==null)var pa=!0;else{var rr=n(u);rr!==null&&Ke(b,rr.startTime-H),pa=!1}return pa}finally{c=null,d=K,h=!1}}var T=!1,C=null,N=-1,B=5,W=-1;function he(){return!(t.unstable_now()-W<B)}function Wt(){if(C!==null){var M=t.unstable_now();W=M;var H=!0;try{H=C(!0,M)}finally{H?Be():(T=!1,C=null)}}else T=!1}var Be;if(typeof m=="function")Be=function(){m(Wt)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,Y=G.port2;G.port1.onmessage=Wt,Be=function(){Y.postMessage(null)}}else Be=function(){k(Wt,0)};function Fe(M){C=M,T||(T=!0,Be())}function Ke(M,H){N=k(function(){M(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){p||h||(p=!0,Fe(I))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(f)},t.unstable_next=function(M){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var K=d;d=H;try{return M()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,H){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var K=d;d=M;try{return H()}finally{d=K}},t.unstable_scheduleCallback=function(M,H,K){var Ce=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?Ce+K:Ce):K=Ce,M){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=K+me,M={id:l++,callback:H,priorityLevel:M,startTime:K,expirationTime:me,sortIndex:-1},K>Ce?(M.sortIndex=K,e(u,M),n(f)===null&&M===n(u)&&(v?(g(N),N=-1):v=!0,Ke(b,K-Ce))):(M.sortIndex=me,e(f,M),p||h||(p=!0,Fe(I))),M},t.unstable_shouldYield=he,t.unstable_wrapCallback=function(M){var H=d;return function(){var K=d;d=H;try{return M.apply(this,arguments)}finally{d=K}}}})(kw);(function(t){t.exports=kw})(A8);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ew=w,vn=W0;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Iw=new Set,iu={};function ta(t,e){to(t,e),to(t+"Capture",e)}function to(t,e){for(iu[t]=e,t=0;t<e.length;t++)Iw.add(e[t])}var Vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),G0=Object.prototype.hasOwnProperty,N8=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yv={},wv={};function D8(t){return G0.call(wv,t)?!0:G0.call(yv,t)?!1:N8.test(t)?wv[t]=!0:(yv[t]=!0,!1)}function P8(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function M8(t,e,n,r){if(e===null||typeof e>"u"||P8(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ht(t,e,n,r,i,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){wt[t]=new Ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];wt[e]=new Ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){wt[t]=new Ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){wt[t]=new Ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){wt[t]=new Ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){wt[t]=new Ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){wt[t]=new Ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){wt[t]=new Ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){wt[t]=new Ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jm=/[\-:]([a-z])/g;function Zm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jm,Zm);wt[e]=new Ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jm,Zm);wt[e]=new Ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jm,Zm);wt[e]=new Ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){wt[t]=new Ht(t,1,!1,t.toLowerCase(),null,!1,!1)});wt.xlinkHref=new Ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){wt[t]=new Ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function eg(t,e,n,r){var i=wt.hasOwnProperty(e)?wt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(M8(e,n,i,r)&&(n=null),r||i===null?D8(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Yr=Ew.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ql=Symbol.for("react.element"),Sa=Symbol.for("react.portal"),Ta=Symbol.for("react.fragment"),tg=Symbol.for("react.strict_mode"),K0=Symbol.for("react.profiler"),Sw=Symbol.for("react.provider"),Tw=Symbol.for("react.context"),ng=Symbol.for("react.forward_ref"),Q0=Symbol.for("react.suspense"),Y0=Symbol.for("react.suspense_list"),rg=Symbol.for("react.memo"),li=Symbol.for("react.lazy"),Cw=Symbol.for("react.offscreen"),bv=Symbol.iterator;function Xo(t){return t===null||typeof t!="object"?null:(t=bv&&t[bv]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,z1;function _f(t){if(z1===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);z1=e&&e[1]||""}return`
`+z1+t}var V1=!1;function B1(t,e){if(!t||V1)return"";V1=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,o=s.length-1;1<=a&&0<=o&&i[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||i[a]!==s[o]){var f=`
`+i[a].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=a&&0<=o);break}}}finally{V1=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_f(t):""}function L8(t){switch(t.tag){case 5:return _f(t.type);case 16:return _f("Lazy");case 13:return _f("Suspense");case 19:return _f("SuspenseList");case 0:case 2:case 15:return t=B1(t.type,!1),t;case 11:return t=B1(t.type.render,!1),t;case 1:return t=B1(t.type,!0),t;default:return""}}function X0(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ta:return"Fragment";case Sa:return"Portal";case K0:return"Profiler";case tg:return"StrictMode";case Q0:return"Suspense";case Y0:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Tw:return(t.displayName||"Context")+".Consumer";case Sw:return(t._context.displayName||"Context")+".Provider";case ng:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rg:return e=t.displayName||null,e!==null?e:X0(t.type)||"Memo";case li:e=t._payload,t=t._init;try{return X0(t(e))}catch{}}return null}function O8(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return X0(e);case 8:return e===tg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $8(t){var e=xw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Hl(t){t._valueTracker||(t._valueTracker=$8(t))}function Rw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=xw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Yc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function J0(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _v(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Pi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Aw(t,e){e=e.checked,e!=null&&eg(t,"checked",e,!1)}function Z0(t,e){Aw(t,e);var n=Pi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ep(t,e.type,n):e.hasOwnProperty("defaultValue")&&ep(t,e.type,Pi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function kv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ep(t,e,n){(e!=="number"||Yc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var kf=Array.isArray;function ja(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Pi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function tp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ev(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(kf(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Pi(n)}}function Nw(t,e){var n=Pi(e.value),r=Pi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Iv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Dw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function np(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Dw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wl,Pw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wl=Wl||document.createElement("div"),Wl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function su(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Pf={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F8=["Webkit","ms","Moz","O"];Object.keys(Pf).forEach(function(t){F8.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Pf[e]=Pf[t]})});function Mw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Pf.hasOwnProperty(t)&&Pf[t]?(""+e).trim():e+"px"}function Lw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Mw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var U8=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rp(t,e){if(e){if(U8[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function ip(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sp=null;function ig(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ap=null,za=null,Va=null;function Sv(t){if(t=al(t)){if(typeof ap!="function")throw Error(A(280));var e=t.stateNode;e&&(e=lh(e),ap(t.stateNode,t.type,e))}}function Ow(t){za?Va?Va.push(t):Va=[t]:za=t}function $w(){if(za){var t=za,e=Va;if(Va=za=null,Sv(t),e)for(t=0;t<e.length;t++)Sv(e[t])}}function Fw(t,e){return t(e)}function Uw(){}var q1=!1;function jw(t,e,n){if(q1)return t(e,n);q1=!0;try{return Fw(t,e,n)}finally{q1=!1,(za!==null||Va!==null)&&(Uw(),$w())}}function au(t,e){var n=t.stateNode;if(n===null)return null;var r=lh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var op=!1;if(Vr)try{var Jo={};Object.defineProperty(Jo,"passive",{get:function(){op=!0}}),window.addEventListener("test",Jo,Jo),window.removeEventListener("test",Jo,Jo)}catch{op=!1}function j8(t,e,n,r,i,s,a,o,f){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(l){this.onError(l)}}var Mf=!1,Xc=null,Jc=!1,fp=null,z8={onError:function(t){Mf=!0,Xc=t}};function V8(t,e,n,r,i,s,a,o,f){Mf=!1,Xc=null,j8.apply(z8,arguments)}function B8(t,e,n,r,i,s,a,o,f){if(V8.apply(this,arguments),Mf){if(Mf){var u=Xc;Mf=!1,Xc=null}else throw Error(A(198));Jc||(Jc=!0,fp=u)}}function na(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function zw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tv(t){if(na(t)!==t)throw Error(A(188))}function q8(t){var e=t.alternate;if(!e){if(e=na(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Tv(i),t;if(s===r)return Tv(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,o=i.child;o;){if(o===n){a=!0,n=i,r=s;break}if(o===r){a=!0,r=i,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,r=i;break}if(o===r){a=!0,r=s,n=i;break}o=o.sibling}if(!a)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function Vw(t){return t=q8(t),t!==null?Bw(t):null}function Bw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Bw(t);if(e!==null)return e;t=t.sibling}return null}var qw=vn.unstable_scheduleCallback,Cv=vn.unstable_cancelCallback,H8=vn.unstable_shouldYield,W8=vn.unstable_requestPaint,Ue=vn.unstable_now,G8=vn.unstable_getCurrentPriorityLevel,sg=vn.unstable_ImmediatePriority,Hw=vn.unstable_UserBlockingPriority,Zc=vn.unstable_NormalPriority,K8=vn.unstable_LowPriority,Ww=vn.unstable_IdlePriority,ah=null,yr=null;function Q8(t){if(yr&&typeof yr.onCommitFiberRoot=="function")try{yr.onCommitFiberRoot(ah,t,void 0,(t.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:J8,Y8=Math.log,X8=Math.LN2;function J8(t){return t>>>=0,t===0?32:31-(Y8(t)/X8|0)|0}var Gl=64,Kl=4194304;function Ef(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ed(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~i;o!==0?r=Ef(o):(s&=a,s!==0&&(r=Ef(s)))}else a=n&~i,a!==0?r=Ef(a):s!==0&&(r=Ef(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Qn(e),i=1<<n,r|=t[n],e&=~i;return r}function Z8(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function e7(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Qn(s),o=1<<a,f=i[a];f===-1?(!(o&n)||o&r)&&(i[a]=Z8(o,e)):f<=e&&(t.expiredLanes|=o),s&=~o}}function up(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Gw(){var t=Gl;return Gl<<=1,!(Gl&4194240)&&(Gl=64),t}function H1(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function il(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qn(e),t[e]=n}function t7(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Qn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ag(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Qn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function Kw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Qw,og,Yw,Xw,Jw,lp=!1,Ql=[],ki=null,Ei=null,Ii=null,ou=new Map,fu=new Map,di=[],n7="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xv(t,e){switch(t){case"focusin":case"focusout":ki=null;break;case"dragenter":case"dragleave":Ei=null;break;case"mouseover":case"mouseout":Ii=null;break;case"pointerover":case"pointerout":ou.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fu.delete(e.pointerId)}}function Zo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=al(e),e!==null&&og(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function r7(t,e,n,r,i){switch(e){case"focusin":return ki=Zo(ki,t,e,n,r,i),!0;case"dragenter":return Ei=Zo(Ei,t,e,n,r,i),!0;case"mouseover":return Ii=Zo(Ii,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ou.set(s,Zo(ou.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,fu.set(s,Zo(fu.get(s)||null,t,e,n,r,i)),!0}return!1}function Zw(t){var e=gs(t.target);if(e!==null){var n=na(e);if(n!==null){if(e=n.tag,e===13){if(e=zw(n),e!==null){t.blockedOn=e,Jw(t.priority,function(){Yw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);sp=r,n.target.dispatchEvent(r),sp=null}else return e=al(n),e!==null&&og(e),t.blockedOn=n,!1;e.shift()}return!0}function Rv(t,e,n){Tc(t)&&n.delete(e)}function i7(){lp=!1,ki!==null&&Tc(ki)&&(ki=null),Ei!==null&&Tc(Ei)&&(Ei=null),Ii!==null&&Tc(Ii)&&(Ii=null),ou.forEach(Rv),fu.forEach(Rv)}function ef(t,e){t.blockedOn===e&&(t.blockedOn=null,lp||(lp=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,i7)))}function uu(t){function e(i){return ef(i,t)}if(0<Ql.length){ef(Ql[0],t);for(var n=1;n<Ql.length;n++){var r=Ql[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ki!==null&&ef(ki,t),Ei!==null&&ef(Ei,t),Ii!==null&&ef(Ii,t),ou.forEach(e),fu.forEach(e),n=0;n<di.length;n++)r=di[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<di.length&&(n=di[0],n.blockedOn===null);)Zw(n),n.blockedOn===null&&di.shift()}var Ba=Yr.ReactCurrentBatchConfig,td=!0;function s7(t,e,n,r){var i=de,s=Ba.transition;Ba.transition=null;try{de=1,fg(t,e,n,r)}finally{de=i,Ba.transition=s}}function a7(t,e,n,r){var i=de,s=Ba.transition;Ba.transition=null;try{de=4,fg(t,e,n,r)}finally{de=i,Ba.transition=s}}function fg(t,e,n,r){if(td){var i=cp(t,e,n,r);if(i===null)t0(t,e,r,nd,n),xv(t,r);else if(r7(i,t,e,n,r))r.stopPropagation();else if(xv(t,r),e&4&&-1<n7.indexOf(t)){for(;i!==null;){var s=al(i);if(s!==null&&Qw(s),s=cp(t,e,n,r),s===null&&t0(t,e,r,nd,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else t0(t,e,r,null,n)}}var nd=null;function cp(t,e,n,r){if(nd=null,t=ig(r),t=gs(t),t!==null)if(e=na(t),e===null)t=null;else if(n=e.tag,n===13){if(t=zw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nd=t,null}function eb(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(G8()){case sg:return 1;case Hw:return 4;case Zc:case K8:return 16;case Ww:return 536870912;default:return 16}default:return 16}}var gi=null,ug=null,Cc=null;function tb(){if(Cc)return Cc;var t,e=ug,n=e.length,r,i="value"in gi?gi.value:gi.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return Cc=i.slice(t,1<r?1-r:void 0)}function xc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Yl(){return!0}function Av(){return!1}function _n(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Yl:Av,this.isPropagationStopped=Av,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yl)},persist:function(){},isPersistent:Yl}),e}var Ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lg=_n(Ao),sl=Ae({},Ao,{view:0,detail:0}),o7=_n(sl),W1,G1,tf,oh=Ae({},sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==tf&&(tf&&t.type==="mousemove"?(W1=t.screenX-tf.screenX,G1=t.screenY-tf.screenY):G1=W1=0,tf=t),W1)},movementY:function(t){return"movementY"in t?t.movementY:G1}}),Nv=_n(oh),f7=Ae({},oh,{dataTransfer:0}),u7=_n(f7),l7=Ae({},sl,{relatedTarget:0}),K1=_n(l7),c7=Ae({},Ao,{animationName:0,elapsedTime:0,pseudoElement:0}),d7=_n(c7),h7=Ae({},Ao,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),p7=_n(h7),m7=Ae({},Ao,{data:0}),Dv=_n(m7),g7={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},v7={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y7={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w7(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=y7[t])?!!e[t]:!1}function cg(){return w7}var b7=Ae({},sl,{key:function(t){if(t.key){var e=g7[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?v7[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cg,charCode:function(t){return t.type==="keypress"?xc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_7=_n(b7),k7=Ae({},oh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pv=_n(k7),E7=Ae({},sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cg}),I7=_n(E7),S7=Ae({},Ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),T7=_n(S7),C7=Ae({},oh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),x7=_n(C7),R7=[9,13,27,32],dg=Vr&&"CompositionEvent"in window,Lf=null;Vr&&"documentMode"in document&&(Lf=document.documentMode);var A7=Vr&&"TextEvent"in window&&!Lf,nb=Vr&&(!dg||Lf&&8<Lf&&11>=Lf),Mv=String.fromCharCode(32),Lv=!1;function rb(t,e){switch(t){case"keyup":return R7.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ib(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ca=!1;function N7(t,e){switch(t){case"compositionend":return ib(e);case"keypress":return e.which!==32?null:(Lv=!0,Mv);case"textInput":return t=e.data,t===Mv&&Lv?null:t;default:return null}}function D7(t,e){if(Ca)return t==="compositionend"||!dg&&rb(t,e)?(t=tb(),Cc=ug=gi=null,Ca=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return nb&&e.locale!=="ko"?null:e.data;default:return null}}var P7={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ov(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!P7[t.type]:e==="textarea"}function sb(t,e,n,r){Ow(r),e=rd(e,"onChange"),0<e.length&&(n=new lg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Of=null,lu=null;function M7(t){gb(t,0)}function fh(t){var e=Aa(t);if(Rw(e))return t}function L7(t,e){if(t==="change")return e}var ab=!1;if(Vr){var Q1;if(Vr){var Y1="oninput"in document;if(!Y1){var $v=document.createElement("div");$v.setAttribute("oninput","return;"),Y1=typeof $v.oninput=="function"}Q1=Y1}else Q1=!1;ab=Q1&&(!document.documentMode||9<document.documentMode)}function Fv(){Of&&(Of.detachEvent("onpropertychange",ob),lu=Of=null)}function ob(t){if(t.propertyName==="value"&&fh(lu)){var e=[];sb(e,lu,t,ig(t)),jw(M7,e)}}function O7(t,e,n){t==="focusin"?(Fv(),Of=e,lu=n,Of.attachEvent("onpropertychange",ob)):t==="focusout"&&Fv()}function $7(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fh(lu)}function F7(t,e){if(t==="click")return fh(e)}function U7(t,e){if(t==="input"||t==="change")return fh(e)}function j7(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zn=typeof Object.is=="function"?Object.is:j7;function cu(t,e){if(Zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!G0.call(e,i)||!Zn(t[i],e[i]))return!1}return!0}function Uv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jv(t,e){var n=Uv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uv(n)}}function fb(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?fb(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ub(){for(var t=window,e=Yc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Yc(t.document)}return e}function hg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function z7(t){var e=ub(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&fb(n.ownerDocument.documentElement,n)){if(r!==null&&hg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=jv(n,s);var a=jv(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var V7=Vr&&"documentMode"in document&&11>=document.documentMode,xa=null,dp=null,$f=null,hp=!1;function zv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hp||xa==null||xa!==Yc(r)||(r=xa,"selectionStart"in r&&hg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$f&&cu($f,r)||($f=r,r=rd(dp,"onSelect"),0<r.length&&(e=new lg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=xa)))}function Xl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ra={animationend:Xl("Animation","AnimationEnd"),animationiteration:Xl("Animation","AnimationIteration"),animationstart:Xl("Animation","AnimationStart"),transitionend:Xl("Transition","TransitionEnd")},X1={},lb={};Vr&&(lb=document.createElement("div").style,"AnimationEvent"in window||(delete Ra.animationend.animation,delete Ra.animationiteration.animation,delete Ra.animationstart.animation),"TransitionEvent"in window||delete Ra.transitionend.transition);function uh(t){if(X1[t])return X1[t];if(!Ra[t])return t;var e=Ra[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in lb)return X1[t]=e[n];return t}var cb=uh("animationend"),db=uh("animationiteration"),hb=uh("animationstart"),pb=uh("transitionend"),mb=new Map,Vv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hi(t,e){mb.set(t,e),ta(e,[t])}for(var J1=0;J1<Vv.length;J1++){var Z1=Vv[J1],B7=Z1.toLowerCase(),q7=Z1[0].toUpperCase()+Z1.slice(1);Hi(B7,"on"+q7)}Hi(cb,"onAnimationEnd");Hi(db,"onAnimationIteration");Hi(hb,"onAnimationStart");Hi("dblclick","onDoubleClick");Hi("focusin","onFocus");Hi("focusout","onBlur");Hi(pb,"onTransitionEnd");to("onMouseEnter",["mouseout","mouseover"]);to("onMouseLeave",["mouseout","mouseover"]);to("onPointerEnter",["pointerout","pointerover"]);to("onPointerLeave",["pointerout","pointerover"]);ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ta("onBeforeInput",["compositionend","keypress","textInput","paste"]);ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var If="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H7=new Set("cancel close invalid load scroll toggle".split(" ").concat(If));function Bv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,B8(r,e,void 0,t),t.currentTarget=null}function gb(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var o=r[a],f=o.instance,u=o.currentTarget;if(o=o.listener,f!==s&&i.isPropagationStopped())break e;Bv(i,o,u),s=f}else for(a=0;a<r.length;a++){if(o=r[a],f=o.instance,u=o.currentTarget,o=o.listener,f!==s&&i.isPropagationStopped())break e;Bv(i,o,u),s=f}}}if(Jc)throw t=fp,Jc=!1,fp=null,t}function ye(t,e){var n=e[yp];n===void 0&&(n=e[yp]=new Set);var r=t+"__bubble";n.has(r)||(vb(e,t,2,!1),n.add(r))}function e0(t,e,n){var r=0;e&&(r|=4),vb(n,t,r,e)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function du(t){if(!t[Jl]){t[Jl]=!0,Iw.forEach(function(n){n!=="selectionchange"&&(H7.has(n)||e0(n,!1,t),e0(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Jl]||(e[Jl]=!0,e0("selectionchange",!1,e))}}function vb(t,e,n,r){switch(eb(e)){case 1:var i=s7;break;case 4:i=a7;break;default:i=fg}n=i.bind(null,e,n,t),i=void 0,!op||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function t0(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var f=a.tag;if((f===3||f===4)&&(f=a.stateNode.containerInfo,f===i||f.nodeType===8&&f.parentNode===i))return;a=a.return}for(;o!==null;){if(a=gs(o),a===null)return;if(f=a.tag,f===5||f===6){r=s=a;continue e}o=o.parentNode}}r=r.return}jw(function(){var u=s,l=ig(n),c=[];e:{var d=mb.get(t);if(d!==void 0){var h=lg,p=t;switch(t){case"keypress":if(xc(n)===0)break e;case"keydown":case"keyup":h=_7;break;case"focusin":p="focus",h=K1;break;case"focusout":p="blur",h=K1;break;case"beforeblur":case"afterblur":h=K1;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Nv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=u7;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=I7;break;case cb:case db:case hb:h=d7;break;case pb:h=T7;break;case"scroll":h=o7;break;case"wheel":h=x7;break;case"copy":case"cut":case"paste":h=p7;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Pv}var v=(e&4)!==0,k=!v&&t==="scroll",g=v?d!==null?d+"Capture":null:d;v=[];for(var m=u,y;m!==null;){y=m;var b=y.stateNode;if(y.tag===5&&b!==null&&(y=b,g!==null&&(b=au(m,g),b!=null&&v.push(hu(m,b,y)))),k)break;m=m.return}0<v.length&&(d=new h(d,p,null,n,l),c.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",d&&n!==sp&&(p=n.relatedTarget||n.fromElement)&&(gs(p)||p[Br]))break e;if((h||d)&&(d=l.window===l?l:(d=l.ownerDocument)?d.defaultView||d.parentWindow:window,h?(p=n.relatedTarget||n.toElement,h=u,p=p?gs(p):null,p!==null&&(k=na(p),p!==k||p.tag!==5&&p.tag!==6)&&(p=null)):(h=null,p=u),h!==p)){if(v=Nv,b="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(v=Pv,b="onPointerLeave",g="onPointerEnter",m="pointer"),k=h==null?d:Aa(h),y=p==null?d:Aa(p),d=new v(b,m+"leave",h,n,l),d.target=k,d.relatedTarget=y,b=null,gs(l)===u&&(v=new v(g,m+"enter",p,n,l),v.target=y,v.relatedTarget=k,b=v),k=b,h&&p)t:{for(v=h,g=p,m=0,y=v;y;y=ma(y))m++;for(y=0,b=g;b;b=ma(b))y++;for(;0<m-y;)v=ma(v),m--;for(;0<y-m;)g=ma(g),y--;for(;m--;){if(v===g||g!==null&&v===g.alternate)break t;v=ma(v),g=ma(g)}v=null}else v=null;h!==null&&qv(c,d,h,v,!1),p!==null&&k!==null&&qv(c,k,p,v,!0)}}e:{if(d=u?Aa(u):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var I=L7;else if(Ov(d))if(ab)I=U7;else{I=$7;var T=O7}else(h=d.nodeName)&&h.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=F7);if(I&&(I=I(t,u))){sb(c,I,n,l);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&ep(d,"number",d.value)}switch(T=u?Aa(u):window,t){case"focusin":(Ov(T)||T.contentEditable==="true")&&(xa=T,dp=u,$f=null);break;case"focusout":$f=dp=xa=null;break;case"mousedown":hp=!0;break;case"contextmenu":case"mouseup":case"dragend":hp=!1,zv(c,n,l);break;case"selectionchange":if(V7)break;case"keydown":case"keyup":zv(c,n,l)}var C;if(dg)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Ca?rb(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(nb&&n.locale!=="ko"&&(Ca||N!=="onCompositionStart"?N==="onCompositionEnd"&&Ca&&(C=tb()):(gi=l,ug="value"in gi?gi.value:gi.textContent,Ca=!0)),T=rd(u,N),0<T.length&&(N=new Dv(N,t,null,n,l),c.push({event:N,listeners:T}),C?N.data=C:(C=ib(n),C!==null&&(N.data=C)))),(C=A7?N7(t,n):D7(t,n))&&(u=rd(u,"onBeforeInput"),0<u.length&&(l=new Dv("onBeforeInput","beforeinput",null,n,l),c.push({event:l,listeners:u}),l.data=C))}gb(c,e)})}function hu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=au(t,n),s!=null&&r.unshift(hu(t,s,i)),s=au(t,e),s!=null&&r.push(hu(t,s,i))),t=t.return}return r}function ma(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qv(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var o=n,f=o.alternate,u=o.stateNode;if(f!==null&&f===r)break;o.tag===5&&u!==null&&(o=u,i?(f=au(n,s),f!=null&&a.unshift(hu(n,f,o))):i||(f=au(n,s),f!=null&&a.push(hu(n,f,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var W7=/\r\n?/g,G7=/\u0000|\uFFFD/g;function Hv(t){return(typeof t=="string"?t:""+t).replace(W7,`
`).replace(G7,"")}function Zl(t,e,n){if(e=Hv(e),Hv(t)!==e&&n)throw Error(A(425))}function id(){}var pp=null,mp=null;function gp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vp=typeof setTimeout=="function"?setTimeout:void 0,K7=typeof clearTimeout=="function"?clearTimeout:void 0,Wv=typeof Promise=="function"?Promise:void 0,Q7=typeof queueMicrotask=="function"?queueMicrotask:typeof Wv<"u"?function(t){return Wv.resolve(null).then(t).catch(Y7)}:vp;function Y7(t){setTimeout(function(){throw t})}function n0(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),uu(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);uu(e)}function Si(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var No=Math.random().toString(36).slice(2),or="__reactFiber$"+No,pu="__reactProps$"+No,Br="__reactContainer$"+No,yp="__reactEvents$"+No,X7="__reactListeners$"+No,J7="__reactHandles$"+No;function gs(t){var e=t[or];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Br]||n[or]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gv(t);t!==null;){if(n=t[or])return n;t=Gv(t)}return e}t=n,n=t.parentNode}return null}function al(t){return t=t[or]||t[Br],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Aa(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function lh(t){return t[pu]||null}var wp=[],Na=-1;function Wi(t){return{current:t}}function be(t){0>Na||(t.current=wp[Na],wp[Na]=null,Na--)}function ve(t,e){Na++,wp[Na]=t.current,t.current=e}var Mi={},Nt=Wi(Mi),nn=Wi(!1),Ps=Mi;function no(t,e){var n=t.type.contextTypes;if(!n)return Mi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function rn(t){return t=t.childContextTypes,t!=null}function sd(){be(nn),be(Nt)}function Kv(t,e,n){if(Nt.current!==Mi)throw Error(A(168));ve(Nt,e),ve(nn,n)}function yb(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,O8(t)||"Unknown",i));return Ae({},n,r)}function ad(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mi,Ps=Nt.current,ve(Nt,t),ve(nn,nn.current),!0}function Qv(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=yb(t,e,Ps),r.__reactInternalMemoizedMergedChildContext=t,be(nn),be(Nt),ve(Nt,t)):be(nn),ve(nn,n)}var Nr=null,ch=!1,r0=!1;function wb(t){Nr===null?Nr=[t]:Nr.push(t)}function Z7(t){ch=!0,wb(t)}function Gi(){if(!r0&&Nr!==null){r0=!0;var t=0,e=de;try{var n=Nr;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Nr=null,ch=!1}catch(i){throw Nr!==null&&(Nr=Nr.slice(t+1)),qw(sg,Gi),i}finally{de=e,r0=!1}}return null}var Da=[],Pa=0,od=null,fd=0,Sn=[],Tn=0,Ms=null,Pr=1,Mr="";function os(t,e){Da[Pa++]=fd,Da[Pa++]=od,od=t,fd=e}function bb(t,e,n){Sn[Tn++]=Pr,Sn[Tn++]=Mr,Sn[Tn++]=Ms,Ms=t;var r=Pr;t=Mr;var i=32-Qn(r)-1;r&=~(1<<i),n+=1;var s=32-Qn(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Pr=1<<32-Qn(e)+i|n<<i|r,Mr=s+t}else Pr=1<<s|n<<i|r,Mr=t}function pg(t){t.return!==null&&(os(t,1),bb(t,1,0))}function mg(t){for(;t===od;)od=Da[--Pa],Da[Pa]=null,fd=Da[--Pa],Da[Pa]=null;for(;t===Ms;)Ms=Sn[--Tn],Sn[Tn]=null,Mr=Sn[--Tn],Sn[Tn]=null,Pr=Sn[--Tn],Sn[Tn]=null}var gn=null,hn=null,Ee=!1,qn=null;function _b(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Yv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,hn=Si(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ms!==null?{id:Pr,overflow:Mr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,hn=null,!0):!1;default:return!1}}function bp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _p(t){if(Ee){var e=hn;if(e){var n=e;if(!Yv(t,e)){if(bp(t))throw Error(A(418));e=Si(n.nextSibling);var r=gn;e&&Yv(t,e)?_b(r,n):(t.flags=t.flags&-4097|2,Ee=!1,gn=t)}}else{if(bp(t))throw Error(A(418));t.flags=t.flags&-4097|2,Ee=!1,gn=t}}}function Xv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function ec(t){if(t!==gn)return!1;if(!Ee)return Xv(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gp(t.type,t.memoizedProps)),e&&(e=hn)){if(bp(t))throw kb(),Error(A(418));for(;e;)_b(t,e),e=Si(e.nextSibling)}if(Xv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=Si(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=gn?Si(t.stateNode.nextSibling):null;return!0}function kb(){for(var t=hn;t;)t=Si(t.nextSibling)}function ro(){hn=gn=null,Ee=!1}function gg(t){qn===null?qn=[t]:qn.push(t)}var eT=Yr.ReactCurrentBatchConfig;function Vn(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ud=Wi(null),ld=null,Ma=null,vg=null;function yg(){vg=Ma=ld=null}function wg(t){var e=ud.current;be(ud),t._currentValue=e}function kp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qa(t,e){ld=t,vg=Ma=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function Mn(t){var e=t._currentValue;if(vg!==t)if(t={context:t,memoizedValue:e,next:null},Ma===null){if(ld===null)throw Error(A(308));Ma=t,ld.dependencies={lanes:0,firstContext:t}}else Ma=Ma.next=t;return e}var vs=null;function bg(t){vs===null?vs=[t]:vs.push(t)}function Eb(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,bg(e)):(n.next=i.next,i.next=n),e.interleaved=n,qr(t,r)}function qr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ci=!1;function _g(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ib(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ti(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,fe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,qr(t,n)}return i=r.interleaved,i===null?(e.next=e,bg(r)):(e.next=i.next,i.next=e),r.interleaved=e,qr(t,n)}function Rc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ag(t,n)}}function Jv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cd(t,e,n,r){var i=t.updateQueue;ci=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var f=o,u=f.next;f.next=null,a===null?s=u:a.next=u,a=f;var l=t.alternate;l!==null&&(l=l.updateQueue,o=l.lastBaseUpdate,o!==a&&(o===null?l.firstBaseUpdate=u:o.next=u,l.lastBaseUpdate=f))}if(s!==null){var c=i.baseState;a=0,l=u=f=null,o=s;do{var d=o.lane,h=o.eventTime;if((r&d)===d){l!==null&&(l=l.next={eventTime:h,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var p=t,v=o;switch(d=e,h=n,v.tag){case 1:if(p=v.payload,typeof p=="function"){c=p.call(h,c,d);break e}c=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=v.payload,d=typeof p=="function"?p.call(h,c,d):p,d==null)break e;c=Ae({},c,d);break e;case 2:ci=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[o]:d.push(o))}else h={eventTime:h,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},l===null?(u=l=h,f=c):l=l.next=h,a|=d;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;d=o,o=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(l===null&&(f=c),i.baseState=f,i.firstBaseUpdate=u,i.lastBaseUpdate=l,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Os|=a,t.lanes=a,t.memoizedState=c}}function Zv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var Sb=new Ew.Component().refs;function Ep(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dh={isMounted:function(t){return(t=t._reactInternals)?na(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=zt(),i=xi(t),s=Fr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ti(t,s,i),e!==null&&(Yn(e,t,i,r),Rc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=zt(),i=xi(t),s=Fr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ti(t,s,i),e!==null&&(Yn(e,t,i,r),Rc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=zt(),r=xi(t),i=Fr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ti(t,i,r),e!==null&&(Yn(e,t,r,n),Rc(e,t,r))}};function ey(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!cu(n,r)||!cu(i,s):!0}function Tb(t,e,n){var r=!1,i=Mi,s=e.contextType;return typeof s=="object"&&s!==null?s=Mn(s):(i=rn(e)?Ps:Nt.current,r=e.contextTypes,s=(r=r!=null)?no(t,i):Mi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ty(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&dh.enqueueReplaceState(e,e.state,null)}function Ip(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Sb,_g(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Mn(s):(s=rn(e)?Ps:Nt.current,i.context=no(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ep(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&dh.enqueueReplaceState(i,i.state,null),cd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function nf(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=i.refs;o===Sb&&(o=i.refs={}),a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function tc(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ny(t){var e=t._init;return e(t._payload)}function Cb(t){function e(g,m){if(t){var y=g.deletions;y===null?(g.deletions=[m],g.flags|=16):y.push(m)}}function n(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Ri(g,m),g.index=0,g.sibling=null,g}function s(g,m,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<m?(g.flags|=2,m):y):(g.flags|=2,m)):(g.flags|=1048576,m)}function a(g){return t&&g.alternate===null&&(g.flags|=2),g}function o(g,m,y,b){return m===null||m.tag!==6?(m=l0(y,g.mode,b),m.return=g,m):(m=i(m,y),m.return=g,m)}function f(g,m,y,b){var I=y.type;return I===Ta?l(g,m,y.props.children,b,y.key):m!==null&&(m.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===li&&ny(I)===m.type)?(b=i(m,y.props),b.ref=nf(g,m,y),b.return=g,b):(b=Lc(y.type,y.key,y.props,null,g.mode,b),b.ref=nf(g,m,y),b.return=g,b)}function u(g,m,y,b){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=c0(y,g.mode,b),m.return=g,m):(m=i(m,y.children||[]),m.return=g,m)}function l(g,m,y,b,I){return m===null||m.tag!==7?(m=Ss(y,g.mode,b,I),m.return=g,m):(m=i(m,y),m.return=g,m)}function c(g,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=l0(""+m,g.mode,y),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ql:return y=Lc(m.type,m.key,m.props,null,g.mode,y),y.ref=nf(g,null,m),y.return=g,y;case Sa:return m=c0(m,g.mode,y),m.return=g,m;case li:var b=m._init;return c(g,b(m._payload),y)}if(kf(m)||Xo(m))return m=Ss(m,g.mode,y,null),m.return=g,m;tc(g,m)}return null}function d(g,m,y,b){var I=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return I!==null?null:o(g,m,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ql:return y.key===I?f(g,m,y,b):null;case Sa:return y.key===I?u(g,m,y,b):null;case li:return I=y._init,d(g,m,I(y._payload),b)}if(kf(y)||Xo(y))return I!==null?null:l(g,m,y,b,null);tc(g,y)}return null}function h(g,m,y,b,I){if(typeof b=="string"&&b!==""||typeof b=="number")return g=g.get(y)||null,o(m,g,""+b,I);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ql:return g=g.get(b.key===null?y:b.key)||null,f(m,g,b,I);case Sa:return g=g.get(b.key===null?y:b.key)||null,u(m,g,b,I);case li:var T=b._init;return h(g,m,y,T(b._payload),I)}if(kf(b)||Xo(b))return g=g.get(y)||null,l(m,g,b,I,null);tc(m,b)}return null}function p(g,m,y,b){for(var I=null,T=null,C=m,N=m=0,B=null;C!==null&&N<y.length;N++){C.index>N?(B=C,C=null):B=C.sibling;var W=d(g,C,y[N],b);if(W===null){C===null&&(C=B);break}t&&C&&W.alternate===null&&e(g,C),m=s(W,m,N),T===null?I=W:T.sibling=W,T=W,C=B}if(N===y.length)return n(g,C),Ee&&os(g,N),I;if(C===null){for(;N<y.length;N++)C=c(g,y[N],b),C!==null&&(m=s(C,m,N),T===null?I=C:T.sibling=C,T=C);return Ee&&os(g,N),I}for(C=r(g,C);N<y.length;N++)B=h(C,g,N,y[N],b),B!==null&&(t&&B.alternate!==null&&C.delete(B.key===null?N:B.key),m=s(B,m,N),T===null?I=B:T.sibling=B,T=B);return t&&C.forEach(function(he){return e(g,he)}),Ee&&os(g,N),I}function v(g,m,y,b){var I=Xo(y);if(typeof I!="function")throw Error(A(150));if(y=I.call(y),y==null)throw Error(A(151));for(var T=I=null,C=m,N=m=0,B=null,W=y.next();C!==null&&!W.done;N++,W=y.next()){C.index>N?(B=C,C=null):B=C.sibling;var he=d(g,C,W.value,b);if(he===null){C===null&&(C=B);break}t&&C&&he.alternate===null&&e(g,C),m=s(he,m,N),T===null?I=he:T.sibling=he,T=he,C=B}if(W.done)return n(g,C),Ee&&os(g,N),I;if(C===null){for(;!W.done;N++,W=y.next())W=c(g,W.value,b),W!==null&&(m=s(W,m,N),T===null?I=W:T.sibling=W,T=W);return Ee&&os(g,N),I}for(C=r(g,C);!W.done;N++,W=y.next())W=h(C,g,N,W.value,b),W!==null&&(t&&W.alternate!==null&&C.delete(W.key===null?N:W.key),m=s(W,m,N),T===null?I=W:T.sibling=W,T=W);return t&&C.forEach(function(Wt){return e(g,Wt)}),Ee&&os(g,N),I}function k(g,m,y,b){if(typeof y=="object"&&y!==null&&y.type===Ta&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ql:e:{for(var I=y.key,T=m;T!==null;){if(T.key===I){if(I=y.type,I===Ta){if(T.tag===7){n(g,T.sibling),m=i(T,y.props.children),m.return=g,g=m;break e}}else if(T.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===li&&ny(I)===T.type){n(g,T.sibling),m=i(T,y.props),m.ref=nf(g,T,y),m.return=g,g=m;break e}n(g,T);break}else e(g,T);T=T.sibling}y.type===Ta?(m=Ss(y.props.children,g.mode,b,y.key),m.return=g,g=m):(b=Lc(y.type,y.key,y.props,null,g.mode,b),b.ref=nf(g,m,y),b.return=g,g=b)}return a(g);case Sa:e:{for(T=y.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(g,m.sibling),m=i(m,y.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else e(g,m);m=m.sibling}m=c0(y,g.mode,b),m.return=g,g=m}return a(g);case li:return T=y._init,k(g,m,T(y._payload),b)}if(kf(y))return p(g,m,y,b);if(Xo(y))return v(g,m,y,b);tc(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,y),m.return=g,g=m):(n(g,m),m=l0(y,g.mode,b),m.return=g,g=m),a(g)):n(g,m)}return k}var io=Cb(!0),xb=Cb(!1),ol={},wr=Wi(ol),mu=Wi(ol),gu=Wi(ol);function ys(t){if(t===ol)throw Error(A(174));return t}function kg(t,e){switch(ve(gu,e),ve(mu,t),ve(wr,ol),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:np(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=np(e,t)}be(wr),ve(wr,e)}function so(){be(wr),be(mu),be(gu)}function Rb(t){ys(gu.current);var e=ys(wr.current),n=np(e,t.type);e!==n&&(ve(mu,t),ve(wr,n))}function Eg(t){mu.current===t&&(be(wr),be(mu))}var xe=Wi(0);function dd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var i0=[];function Ig(){for(var t=0;t<i0.length;t++)i0[t]._workInProgressVersionPrimary=null;i0.length=0}var Ac=Yr.ReactCurrentDispatcher,s0=Yr.ReactCurrentBatchConfig,Ls=0,Re=null,Ye=null,rt=null,hd=!1,Ff=!1,vu=0,tT=0;function Et(){throw Error(A(321))}function Sg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zn(t[n],e[n]))return!1;return!0}function Tg(t,e,n,r,i,s){if(Ls=s,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ac.current=t===null||t.memoizedState===null?sT:aT,t=n(r,i),Ff){s=0;do{if(Ff=!1,vu=0,25<=s)throw Error(A(301));s+=1,rt=Ye=null,e.updateQueue=null,Ac.current=oT,t=n(r,i)}while(Ff)}if(Ac.current=pd,e=Ye!==null&&Ye.next!==null,Ls=0,rt=Ye=Re=null,hd=!1,e)throw Error(A(300));return t}function Cg(){var t=vu!==0;return vu=0,t}function sr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Re.memoizedState=rt=t:rt=rt.next=t,rt}function Ln(){if(Ye===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=Ye.next;var e=rt===null?Re.memoizedState:rt.next;if(e!==null)rt=e,Ye=t;else{if(t===null)throw Error(A(310));Ye=t,t={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},rt===null?Re.memoizedState=rt=t:rt=rt.next=t}return rt}function yu(t,e){return typeof e=="function"?e(t):e}function a0(t){var e=Ln(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=Ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var o=a=null,f=null,u=s;do{var l=u.lane;if((Ls&l)===l)f!==null&&(f=f.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:l,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};f===null?(o=f=c,a=r):f=f.next=c,Re.lanes|=l,Os|=l}u=u.next}while(u!==null&&u!==s);f===null?a=r:f.next=o,Zn(r,e.memoizedState)||(Jt=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=f,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Re.lanes|=s,Os|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function o0(t){var e=Ln(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);Zn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ab(){}function Nb(t,e){var n=Re,r=Ln(),i=e(),s=!Zn(r.memoizedState,i);if(s&&(r.memoizedState=i,Jt=!0),r=r.queue,xg(Mb.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||rt!==null&&rt.memoizedState.tag&1){if(n.flags|=2048,wu(9,Pb.bind(null,n,r,i,e),void 0,null),st===null)throw Error(A(349));Ls&30||Db(n,e,i)}return i}function Db(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Pb(t,e,n,r){e.value=n,e.getSnapshot=r,Lb(e)&&Ob(t)}function Mb(t,e,n){return n(function(){Lb(e)&&Ob(t)})}function Lb(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zn(t,n)}catch{return!0}}function Ob(t){var e=qr(t,1);e!==null&&Yn(e,t,1,-1)}function ry(t){var e=sr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yu,lastRenderedState:t},e.queue=t,t=t.dispatch=iT.bind(null,Re,t),[e.memoizedState,t]}function wu(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function $b(){return Ln().memoizedState}function Nc(t,e,n,r){var i=sr();Re.flags|=t,i.memoizedState=wu(1|e,n,void 0,r===void 0?null:r)}function hh(t,e,n,r){var i=Ln();r=r===void 0?null:r;var s=void 0;if(Ye!==null){var a=Ye.memoizedState;if(s=a.destroy,r!==null&&Sg(r,a.deps)){i.memoizedState=wu(e,n,s,r);return}}Re.flags|=t,i.memoizedState=wu(1|e,n,s,r)}function iy(t,e){return Nc(8390656,8,t,e)}function xg(t,e){return hh(2048,8,t,e)}function Fb(t,e){return hh(4,2,t,e)}function Ub(t,e){return hh(4,4,t,e)}function jb(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zb(t,e,n){return n=n!=null?n.concat([t]):null,hh(4,4,jb.bind(null,e,t),n)}function Rg(){}function Vb(t,e){var n=Ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Bb(t,e){var n=Ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function qb(t,e,n){return Ls&21?(Zn(n,e)||(n=Gw(),Re.lanes|=n,Os|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function nT(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=s0.transition;s0.transition={};try{t(!1),e()}finally{de=n,s0.transition=r}}function Hb(){return Ln().memoizedState}function rT(t,e,n){var r=xi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wb(t))Gb(e,n);else if(n=Eb(t,e,n,r),n!==null){var i=zt();Yn(n,t,r,i),Kb(n,e,r)}}function iT(t,e,n){var r=xi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wb(t))Gb(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(i.hasEagerState=!0,i.eagerState=o,Zn(o,a)){var f=e.interleaved;f===null?(i.next=i,bg(e)):(i.next=f.next,f.next=i),e.interleaved=i;return}}catch{}finally{}n=Eb(t,e,i,r),n!==null&&(i=zt(),Yn(n,t,r,i),Kb(n,e,r))}}function Wb(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function Gb(t,e){Ff=hd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Kb(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ag(t,n)}}var pd={readContext:Mn,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useInsertionEffect:Et,useLayoutEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useMutableSource:Et,useSyncExternalStore:Et,useId:Et,unstable_isNewReconciler:!1},sT={readContext:Mn,useCallback:function(t,e){return sr().memoizedState=[t,e===void 0?null:e],t},useContext:Mn,useEffect:iy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nc(4194308,4,jb.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nc(4,2,t,e)},useMemo:function(t,e){var n=sr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=rT.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=sr();return t={current:t},e.memoizedState=t},useState:ry,useDebugValue:Rg,useDeferredValue:function(t){return sr().memoizedState=t},useTransition:function(){var t=ry(!1),e=t[0];return t=nT.bind(null,t[1]),sr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,i=sr();if(Ee){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),st===null)throw Error(A(349));Ls&30||Db(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,iy(Mb.bind(null,r,s,t),[t]),r.flags|=2048,wu(9,Pb.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=sr(),e=st.identifierPrefix;if(Ee){var n=Mr,r=Pr;n=(r&~(1<<32-Qn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=vu++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=tT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},aT={readContext:Mn,useCallback:Vb,useContext:Mn,useEffect:xg,useImperativeHandle:zb,useInsertionEffect:Fb,useLayoutEffect:Ub,useMemo:Bb,useReducer:a0,useRef:$b,useState:function(){return a0(yu)},useDebugValue:Rg,useDeferredValue:function(t){var e=Ln();return qb(e,Ye.memoizedState,t)},useTransition:function(){var t=a0(yu)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:Ab,useSyncExternalStore:Nb,useId:Hb,unstable_isNewReconciler:!1},oT={readContext:Mn,useCallback:Vb,useContext:Mn,useEffect:xg,useImperativeHandle:zb,useInsertionEffect:Fb,useLayoutEffect:Ub,useMemo:Bb,useReducer:o0,useRef:$b,useState:function(){return o0(yu)},useDebugValue:Rg,useDeferredValue:function(t){var e=Ln();return Ye===null?e.memoizedState=t:qb(e,Ye.memoizedState,t)},useTransition:function(){var t=o0(yu)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:Ab,useSyncExternalStore:Nb,useId:Hb,unstable_isNewReconciler:!1};function ao(t,e){try{var n="",r=e;do n+=L8(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function f0(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Sp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fT=typeof WeakMap=="function"?WeakMap:Map;function Qb(t,e,n){n=Fr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){gd||(gd=!0,Lp=r),Sp(t,e)},n}function Yb(t,e,n){n=Fr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Sp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Sp(t,e),typeof r!="function"&&(Ci===null?Ci=new Set([this]):Ci.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function sy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new fT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=kT.bind(null,t,e,n),e.then(t,t))}function ay(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function oy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fr(-1,1),e.tag=2,Ti(n,e,1))),n.lanes|=1),t)}var uT=Yr.ReactCurrentOwner,Jt=!1;function Lt(t,e,n,r){e.child=t===null?xb(e,null,n,r):io(e,t.child,n,r)}function fy(t,e,n,r,i){n=n.render;var s=e.ref;return qa(e,i),r=Tg(t,e,n,r,s,i),n=Cg(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hr(t,e,i)):(Ee&&n&&pg(e),e.flags|=1,Lt(t,e,r,i),e.child)}function uy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!$g(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Xb(t,e,s,r,i)):(t=Lc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:cu,n(a,r)&&t.ref===e.ref)return Hr(t,e,i)}return e.flags|=1,t=Ri(s,r),t.ref=e.ref,t.return=e,e.child=t}function Xb(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(cu(s,r)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,Hr(t,e,i)}return Tp(t,e,n,r,i)}function Jb(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Oa,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve(Oa,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ve(Oa,cn),cn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ve(Oa,cn),cn|=r;return Lt(t,e,i,n),e.child}function Zb(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Tp(t,e,n,r,i){var s=rn(n)?Ps:Nt.current;return s=no(e,s),qa(e,i),n=Tg(t,e,n,r,s,i),r=Cg(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hr(t,e,i)):(Ee&&r&&pg(e),e.flags|=1,Lt(t,e,n,i),e.child)}function ly(t,e,n,r,i){if(rn(n)){var s=!0;ad(e)}else s=!1;if(qa(e,i),e.stateNode===null)Dc(t,e),Tb(e,n,r),Ip(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var f=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Mn(u):(u=rn(n)?Ps:Nt.current,u=no(e,u));var l=n.getDerivedStateFromProps,c=typeof l=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||f!==u)&&ty(e,a,r,u),ci=!1;var d=e.memoizedState;a.state=d,cd(e,r,a,i),f=e.memoizedState,o!==r||d!==f||nn.current||ci?(typeof l=="function"&&(Ep(e,n,l,r),f=e.memoizedState),(o=ci||ey(e,n,o,r,d,f,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=f),a.props=r,a.state=f,a.context=u,r=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,Ib(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Vn(e.type,o),a.props=u,c=e.pendingProps,d=a.context,f=n.contextType,typeof f=="object"&&f!==null?f=Mn(f):(f=rn(n)?Ps:Nt.current,f=no(e,f));var h=n.getDerivedStateFromProps;(l=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==c||d!==f)&&ty(e,a,r,f),ci=!1,d=e.memoizedState,a.state=d,cd(e,r,a,i);var p=e.memoizedState;o!==c||d!==p||nn.current||ci?(typeof h=="function"&&(Ep(e,n,h,r),p=e.memoizedState),(u=ci||ey(e,n,u,r,d,p,f)||!1)?(l||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,p,f),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,p,f)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=p),a.props=r,a.state=p,a.context=f,r=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Cp(t,e,n,r,s,i)}function Cp(t,e,n,r,i,s){Zb(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&Qv(e,n,!1),Hr(t,e,s);r=e.stateNode,uT.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=io(e,t.child,null,s),e.child=io(e,null,o,s)):Lt(t,e,o,s),e.memoizedState=r.state,i&&Qv(e,n,!0),e.child}function e_(t){var e=t.stateNode;e.pendingContext?Kv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kv(t,e.context,!1),kg(t,e.containerInfo)}function cy(t,e,n,r,i){return ro(),gg(i),e.flags|=256,Lt(t,e,n,r),e.child}var xp={dehydrated:null,treeContext:null,retryLane:0};function Rp(t){return{baseLanes:t,cachePool:null,transitions:null}}function t_(t,e,n){var r=e.pendingProps,i=xe.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ve(xe,i&1),t===null)return _p(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,s?(r=e.mode,s=e.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=gh(a,r,0,null),t=Ss(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Rp(n),e.memoizedState=xp,t):Ag(e,a));if(i=t.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return lT(t,e,a,r,o,i,n);if(s){s=r.fallback,a=e.mode,i=t.child,o=i.sibling;var f={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=f,e.deletions=null):(r=Ri(i,f),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?s=Ri(o,s):(s=Ss(s,a,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,a=t.child.memoizedState,a=a===null?Rp(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=xp,r}return s=t.child,t=s.sibling,r=Ri(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ag(t,e){return e=gh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function nc(t,e,n,r){return r!==null&&gg(r),io(e,t.child,null,n),t=Ag(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lT(t,e,n,r,i,s,a){if(n)return e.flags&256?(e.flags&=-257,r=f0(Error(A(422))),nc(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=gh({mode:"visible",children:r.children},i,0,null),s=Ss(s,i,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&io(e,t.child,null,a),e.child.memoizedState=Rp(a),e.memoizedState=xp,s);if(!(e.mode&1))return nc(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,s=Error(A(419)),r=f0(s,r,void 0),nc(t,e,a,r)}if(o=(a&t.childLanes)!==0,Jt||o){if(r=st,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,qr(t,i),Yn(r,t,i,-1))}return Og(),r=f0(Error(A(421))),nc(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ET.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,hn=Si(i.nextSibling),gn=e,Ee=!0,qn=null,t!==null&&(Sn[Tn++]=Pr,Sn[Tn++]=Mr,Sn[Tn++]=Ms,Pr=t.id,Mr=t.overflow,Ms=e),e=Ag(e,r.children),e.flags|=4096,e)}function dy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),kp(t.return,e,n)}function u0(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function n_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Lt(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dy(t,n,e);else if(t.tag===19)dy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&dd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),u0(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&dd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}u0(e,!0,n,null,s);break;case"together":u0(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Dc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Hr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Os|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=Ri(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ri(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cT(t,e,n){switch(e.tag){case 3:e_(e),ro();break;case 5:Rb(e);break;case 1:rn(e.type)&&ad(e);break;case 4:kg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ve(ud,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?t_(t,e,n):(ve(xe,xe.current&1),t=Hr(t,e,n),t!==null?t.sibling:null);ve(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return n_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,Jb(t,e,n)}return Hr(t,e,n)}var r_,Ap,i_,s_;r_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ap=function(){};i_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ys(wr.current);var s=null;switch(n){case"input":i=J0(t,i),r=J0(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=tp(t,i),r=tp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=id)}rp(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(iu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var f=r[u];if(o=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&f!==o&&(f!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||f&&f.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in f)f.hasOwnProperty(a)&&o[a]!==f[a]&&(n||(n={}),n[a]=f[a])}else n||(s||(s=[]),s.push(u,n)),n=f;else u==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,o=o?o.__html:void 0,f!=null&&o!==f&&(s=s||[]).push(u,f)):u==="children"?typeof f!="string"&&typeof f!="number"||(s=s||[]).push(u,""+f):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(iu.hasOwnProperty(u)?(f!=null&&u==="onScroll"&&ye("scroll",t),s||o===f||(s=[])):(s=s||[]).push(u,f))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};s_=function(t,e,n,r){n!==r&&(e.flags|=4)};function rf(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function It(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function dT(t,e,n){var r=e.pendingProps;switch(mg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(e),null;case 1:return rn(e.type)&&sd(),It(e),null;case 3:return r=e.stateNode,so(),be(nn),be(Nt),Ig(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ec(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qn!==null&&(Fp(qn),qn=null))),Ap(t,e),It(e),null;case 5:Eg(e);var i=ys(gu.current);if(n=e.type,t!==null&&e.stateNode!=null)i_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return It(e),null}if(t=ys(wr.current),ec(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[or]=e,r[pu]=s,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<If.length;i++)ye(If[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":_v(r,s),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ye("invalid",r);break;case"textarea":Ev(r,s),ye("invalid",r)}rp(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?r.textContent!==o&&(s.suppressHydrationWarning!==!0&&Zl(r.textContent,o,t),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Zl(r.textContent,o,t),i=["children",""+o]):iu.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ye("scroll",r)}switch(n){case"input":Hl(r),kv(r,s,!0);break;case"textarea":Hl(r),Iv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=id)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Dw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[or]=e,t[pu]=r,r_(t,e,!1,!1),e.stateNode=t;e:{switch(a=ip(n,r),n){case"dialog":ye("cancel",t),ye("close",t),i=r;break;case"iframe":case"object":case"embed":ye("load",t),i=r;break;case"video":case"audio":for(i=0;i<If.length;i++)ye(If[i],t);i=r;break;case"source":ye("error",t),i=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),i=r;break;case"details":ye("toggle",t),i=r;break;case"input":_v(t,r),i=J0(t,r),ye("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),ye("invalid",t);break;case"textarea":Ev(t,r),i=tp(t,r),ye("invalid",t);break;default:i=r}rp(n,i),o=i;for(s in o)if(o.hasOwnProperty(s)){var f=o[s];s==="style"?Lw(t,f):s==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&Pw(t,f)):s==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&su(t,f):typeof f=="number"&&su(t,""+f):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(iu.hasOwnProperty(s)?f!=null&&s==="onScroll"&&ye("scroll",t):f!=null&&eg(t,s,f,a))}switch(n){case"input":Hl(t),kv(t,r,!1);break;case"textarea":Hl(t),Iv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Pi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ja(t,!!r.multiple,s,!1):r.defaultValue!=null&&ja(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=id)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return It(e),null;case 6:if(t&&e.stateNode!=null)s_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=ys(gu.current),ys(wr.current),ec(e)){if(r=e.stateNode,n=e.memoizedProps,r[or]=e,(s=r.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:Zl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Zl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[or]=e,e.stateNode=r}return It(e),null;case 13:if(be(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&hn!==null&&e.mode&1&&!(e.flags&128))kb(),ro(),e.flags|=98560,s=!1;else if(s=ec(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[or]=e}else ro(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;It(e),s=!1}else qn!==null&&(Fp(qn),qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?Je===0&&(Je=3):Og())),e.updateQueue!==null&&(e.flags|=4),It(e),null);case 4:return so(),Ap(t,e),t===null&&du(e.stateNode.containerInfo),It(e),null;case 10:return wg(e.type._context),It(e),null;case 17:return rn(e.type)&&sd(),It(e),null;case 19:if(be(xe),s=e.memoizedState,s===null)return It(e),null;if(r=(e.flags&128)!==0,a=s.rendering,a===null)if(r)rf(s,!1);else{if(Je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=dd(t),a!==null){for(e.flags|=128,rf(s,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(xe,xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ue()>oo&&(e.flags|=128,r=!0,rf(s,!1),e.lanes=4194304)}else{if(!r)if(t=dd(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),rf(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Ee)return It(e),null}else 2*Ue()-s.renderingStartTime>oo&&n!==1073741824&&(e.flags|=128,r=!0,rf(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ue(),e.sibling=null,n=xe.current,ve(xe,r?n&1|2:n&1),e):(It(e),null);case 22:case 23:return Lg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?cn&1073741824&&(It(e),e.subtreeFlags&6&&(e.flags|=8192)):It(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function hT(t,e){switch(mg(e),e.tag){case 1:return rn(e.type)&&sd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return so(),be(nn),be(Nt),Ig(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Eg(e),null;case 13:if(be(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));ro()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return be(xe),null;case 4:return so(),null;case 10:return wg(e.type._context),null;case 22:case 23:return Lg(),null;case 24:return null;default:return null}}var rc=!1,St=!1,pT=typeof WeakSet=="function"?WeakSet:Set,U=null;function La(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function Np(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var hy=!1;function mT(t,e){if(pp=td,t=ub(),hg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,f=-1,u=0,l=0,c=t,d=null;t:for(;;){for(var h;c!==n||i!==0&&c.nodeType!==3||(o=a+i),c!==s||r!==0&&c.nodeType!==3||(f=a+r),c.nodeType===3&&(a+=c.nodeValue.length),(h=c.firstChild)!==null;)d=c,c=h;for(;;){if(c===t)break t;if(d===n&&++u===i&&(o=a),d===s&&++l===r&&(f=a),(h=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=h}n=o===-1||f===-1?null:{start:o,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(mp={focusedElem:t,selectionRange:n},td=!1,U=e;U!==null;)if(e=U,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,U=t;else for(;U!==null;){e=U;try{var p=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var v=p.memoizedProps,k=p.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?v:Vn(e.type,v),k);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(b){Pe(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,U=t;break}U=e.return}return p=hy,hy=!1,p}function Uf(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Np(e,n,s)}i=i.next}while(i!==r)}}function ph(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Dp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function a_(t){var e=t.alternate;e!==null&&(t.alternate=null,a_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[or],delete e[pu],delete e[yp],delete e[X7],delete e[J7])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function o_(t){return t.tag===5||t.tag===3||t.tag===4}function py(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||o_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=id));else if(r!==4&&(t=t.child,t!==null))for(Pp(t,e,n),t=t.sibling;t!==null;)Pp(t,e,n),t=t.sibling}function Mp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Mp(t,e,n),t=t.sibling;t!==null;)Mp(t,e,n),t=t.sibling}var ht=null,Bn=!1;function ri(t,e,n){for(n=n.child;n!==null;)f_(t,e,n),n=n.sibling}function f_(t,e,n){if(yr&&typeof yr.onCommitFiberUnmount=="function")try{yr.onCommitFiberUnmount(ah,n)}catch{}switch(n.tag){case 5:St||La(n,e);case 6:var r=ht,i=Bn;ht=null,ri(t,e,n),ht=r,Bn=i,ht!==null&&(Bn?(t=ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ht.removeChild(n.stateNode));break;case 18:ht!==null&&(Bn?(t=ht,n=n.stateNode,t.nodeType===8?n0(t.parentNode,n):t.nodeType===1&&n0(t,n),uu(t)):n0(ht,n.stateNode));break;case 4:r=ht,i=Bn,ht=n.stateNode.containerInfo,Bn=!0,ri(t,e,n),ht=r,Bn=i;break;case 0:case 11:case 14:case 15:if(!St&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Np(n,e,a),i=i.next}while(i!==r)}ri(t,e,n);break;case 1:if(!St&&(La(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){Pe(n,e,o)}ri(t,e,n);break;case 21:ri(t,e,n);break;case 22:n.mode&1?(St=(r=St)||n.memoizedState!==null,ri(t,e,n),St=r):ri(t,e,n);break;default:ri(t,e,n)}}function my(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new pT),e.forEach(function(r){var i=IT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:ht=o.stateNode,Bn=!1;break e;case 3:ht=o.stateNode.containerInfo,Bn=!0;break e;case 4:ht=o.stateNode.containerInfo,Bn=!0;break e}o=o.return}if(ht===null)throw Error(A(160));f_(s,a,i),ht=null,Bn=!1;var f=i.alternate;f!==null&&(f.return=null),i.return=null}catch(u){Pe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)u_(e,t),e=e.sibling}function u_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),ir(t),r&4){try{Uf(3,t,t.return),ph(3,t)}catch(v){Pe(t,t.return,v)}try{Uf(5,t,t.return)}catch(v){Pe(t,t.return,v)}}break;case 1:Un(e,t),ir(t),r&512&&n!==null&&La(n,n.return);break;case 5:if(Un(e,t),ir(t),r&512&&n!==null&&La(n,n.return),t.flags&32){var i=t.stateNode;try{su(i,"")}catch(v){Pe(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,f=t.updateQueue;if(t.updateQueue=null,f!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Aw(i,s),ip(o,a);var u=ip(o,s);for(a=0;a<f.length;a+=2){var l=f[a],c=f[a+1];l==="style"?Lw(i,c):l==="dangerouslySetInnerHTML"?Pw(i,c):l==="children"?su(i,c):eg(i,l,c,u)}switch(o){case"input":Z0(i,s);break;case"textarea":Nw(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?ja(i,!!s.multiple,h,!1):d!==!!s.multiple&&(s.defaultValue!=null?ja(i,!!s.multiple,s.defaultValue,!0):ja(i,!!s.multiple,s.multiple?[]:"",!1))}i[pu]=s}catch(v){Pe(t,t.return,v)}}break;case 6:if(Un(e,t),ir(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Pe(t,t.return,v)}}break;case 3:if(Un(e,t),ir(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{uu(e.containerInfo)}catch(v){Pe(t,t.return,v)}break;case 4:Un(e,t),ir(t);break;case 13:Un(e,t),ir(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Pg=Ue())),r&4&&my(t);break;case 22:if(l=n!==null&&n.memoizedState!==null,t.mode&1?(St=(u=St)||l,Un(e,t),St=u):Un(e,t),ir(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!l&&t.mode&1)for(U=t,l=t.child;l!==null;){for(c=U=l;U!==null;){switch(d=U,h=d.child,d.tag){case 0:case 11:case 14:case 15:Uf(4,d,d.return);break;case 1:La(d,d.return);var p=d.stateNode;if(typeof p.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,p.props=e.memoizedProps,p.state=e.memoizedState,p.componentWillUnmount()}catch(v){Pe(r,n,v)}}break;case 5:La(d,d.return);break;case 22:if(d.memoizedState!==null){vy(c);continue}}h!==null?(h.return=d,U=h):vy(c)}l=l.sibling}e:for(l=null,c=t;;){if(c.tag===5){if(l===null){l=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=c.stateNode,f=c.memoizedProps.style,a=f!=null&&f.hasOwnProperty("display")?f.display:null,o.style.display=Mw("display",a))}catch(v){Pe(t,t.return,v)}}}else if(c.tag===6){if(l===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){Pe(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;l===c&&(l=null),c=c.return}l===c&&(l=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Un(e,t),ir(t),r&4&&my(t);break;case 21:break;default:Un(e,t),ir(t)}}function ir(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(o_(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(su(i,""),r.flags&=-33);var s=py(t);Mp(t,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,o=py(t);Pp(t,o,a);break;default:throw Error(A(161))}}catch(f){Pe(t,t.return,f)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function gT(t,e,n){U=t,l_(t)}function l_(t,e,n){for(var r=(t.mode&1)!==0;U!==null;){var i=U,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||rc;if(!a){var o=i.alternate,f=o!==null&&o.memoizedState!==null||St;o=rc;var u=St;if(rc=a,(St=f)&&!u)for(U=i;U!==null;)a=U,f=a.child,a.tag===22&&a.memoizedState!==null?yy(i):f!==null?(f.return=a,U=f):yy(i);for(;s!==null;)U=s,l_(s),s=s.sibling;U=i,rc=o,St=u}gy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,U=s):gy(t)}}function gy(t){for(;U!==null;){var e=U;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:St||ph(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!St)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zv(e,s,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zv(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var f=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var l=u.memoizedState;if(l!==null){var c=l.dehydrated;c!==null&&uu(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}St||e.flags&512&&Dp(e)}catch(d){Pe(e,e.return,d)}}if(e===t){U=null;break}if(n=e.sibling,n!==null){n.return=e.return,U=n;break}U=e.return}}function vy(t){for(;U!==null;){var e=U;if(e===t){U=null;break}var n=e.sibling;if(n!==null){n.return=e.return,U=n;break}U=e.return}}function yy(t){for(;U!==null;){var e=U;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ph(4,e)}catch(f){Pe(e,n,f)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(f){Pe(e,i,f)}}var s=e.return;try{Dp(e)}catch(f){Pe(e,s,f)}break;case 5:var a=e.return;try{Dp(e)}catch(f){Pe(e,a,f)}}}catch(f){Pe(e,e.return,f)}if(e===t){U=null;break}var o=e.sibling;if(o!==null){o.return=e.return,U=o;break}U=e.return}}var vT=Math.ceil,md=Yr.ReactCurrentDispatcher,Ng=Yr.ReactCurrentOwner,Dn=Yr.ReactCurrentBatchConfig,fe=0,st=null,We=null,gt=0,cn=0,Oa=Wi(0),Je=0,bu=null,Os=0,mh=0,Dg=0,jf=null,Xt=null,Pg=0,oo=1/0,Rr=null,gd=!1,Lp=null,Ci=null,ic=!1,vi=null,vd=0,zf=0,Op=null,Pc=-1,Mc=0;function zt(){return fe&6?Ue():Pc!==-1?Pc:Pc=Ue()}function xi(t){return t.mode&1?fe&2&&gt!==0?gt&-gt:eT.transition!==null?(Mc===0&&(Mc=Gw()),Mc):(t=de,t!==0||(t=window.event,t=t===void 0?16:eb(t.type)),t):1}function Yn(t,e,n,r){if(50<zf)throw zf=0,Op=null,Error(A(185));il(t,n,r),(!(fe&2)||t!==st)&&(t===st&&(!(fe&2)&&(mh|=n),Je===4&&hi(t,gt)),sn(t,r),n===1&&fe===0&&!(e.mode&1)&&(oo=Ue()+500,ch&&Gi()))}function sn(t,e){var n=t.callbackNode;e7(t,e);var r=ed(t,t===st?gt:0);if(r===0)n!==null&&Cv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Cv(n),e===1)t.tag===0?Z7(wy.bind(null,t)):wb(wy.bind(null,t)),Q7(function(){!(fe&6)&&Gi()}),n=null;else{switch(Kw(r)){case 1:n=sg;break;case 4:n=Hw;break;case 16:n=Zc;break;case 536870912:n=Ww;break;default:n=Zc}n=y_(n,c_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function c_(t,e){if(Pc=-1,Mc=0,fe&6)throw Error(A(327));var n=t.callbackNode;if(Ha()&&t.callbackNode!==n)return null;var r=ed(t,t===st?gt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=yd(t,r);else{e=r;var i=fe;fe|=2;var s=h_();(st!==t||gt!==e)&&(Rr=null,oo=Ue()+500,Is(t,e));do try{bT();break}catch(o){d_(t,o)}while(1);yg(),md.current=s,fe=i,We!==null?e=0:(st=null,gt=0,e=Je)}if(e!==0){if(e===2&&(i=up(t),i!==0&&(r=i,e=$p(t,i))),e===1)throw n=bu,Is(t,0),hi(t,r),sn(t,Ue()),n;if(e===6)hi(t,r);else{if(i=t.current.alternate,!(r&30)&&!yT(i)&&(e=yd(t,r),e===2&&(s=up(t),s!==0&&(r=s,e=$p(t,s))),e===1))throw n=bu,Is(t,0),hi(t,r),sn(t,Ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:fs(t,Xt,Rr);break;case 3:if(hi(t,r),(r&130023424)===r&&(e=Pg+500-Ue(),10<e)){if(ed(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){zt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=vp(fs.bind(null,t,Xt,Rr),e);break}fs(t,Xt,Rr);break;case 4:if(hi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-Qn(r);s=1<<a,a=e[a],a>i&&(i=a),r&=~s}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vT(r/1960))-r,10<r){t.timeoutHandle=vp(fs.bind(null,t,Xt,Rr),r);break}fs(t,Xt,Rr);break;case 5:fs(t,Xt,Rr);break;default:throw Error(A(329))}}}return sn(t,Ue()),t.callbackNode===n?c_.bind(null,t):null}function $p(t,e){var n=jf;return t.current.memoizedState.isDehydrated&&(Is(t,e).flags|=256),t=yd(t,e),t!==2&&(e=Xt,Xt=n,e!==null&&Fp(e)),t}function Fp(t){Xt===null?Xt=t:Xt.push.apply(Xt,t)}function yT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Zn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hi(t,e){for(e&=~Dg,e&=~mh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qn(e),r=1<<n;t[n]=-1,e&=~r}}function wy(t){if(fe&6)throw Error(A(327));Ha();var e=ed(t,0);if(!(e&1))return sn(t,Ue()),null;var n=yd(t,e);if(t.tag!==0&&n===2){var r=up(t);r!==0&&(e=r,n=$p(t,r))}if(n===1)throw n=bu,Is(t,0),hi(t,e),sn(t,Ue()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fs(t,Xt,Rr),sn(t,Ue()),null}function Mg(t,e){var n=fe;fe|=1;try{return t(e)}finally{fe=n,fe===0&&(oo=Ue()+500,ch&&Gi())}}function $s(t){vi!==null&&vi.tag===0&&!(fe&6)&&Ha();var e=fe;fe|=1;var n=Dn.transition,r=de;try{if(Dn.transition=null,de=1,t)return t()}finally{de=r,Dn.transition=n,fe=e,!(fe&6)&&Gi()}}function Lg(){cn=Oa.current,be(Oa)}function Is(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,K7(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(mg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sd();break;case 3:so(),be(nn),be(Nt),Ig();break;case 5:Eg(r);break;case 4:so();break;case 13:be(xe);break;case 19:be(xe);break;case 10:wg(r.type._context);break;case 22:case 23:Lg()}n=n.return}if(st=t,We=t=Ri(t.current,null),gt=cn=e,Je=0,bu=null,Dg=mh=Os=0,Xt=jf=null,vs!==null){for(e=0;e<vs.length;e++)if(n=vs[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}vs=null}return t}function d_(t,e){do{var n=We;try{if(yg(),Ac.current=pd,hd){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hd=!1}if(Ls=0,rt=Ye=Re=null,Ff=!1,vu=0,Ng.current=null,n===null||n.return===null){Je=1,bu=e,We=null;break}e:{var s=t,a=n.return,o=n,f=e;if(e=gt,o.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var u=f,l=o,c=l.tag;if(!(l.mode&1)&&(c===0||c===11||c===15)){var d=l.alternate;d?(l.updateQueue=d.updateQueue,l.memoizedState=d.memoizedState,l.lanes=d.lanes):(l.updateQueue=null,l.memoizedState=null)}var h=ay(a);if(h!==null){h.flags&=-257,oy(h,a,o,s,e),h.mode&1&&sy(s,u,e),e=h,f=u;var p=e.updateQueue;if(p===null){var v=new Set;v.add(f),e.updateQueue=v}else p.add(f);break e}else{if(!(e&1)){sy(s,u,e),Og();break e}f=Error(A(426))}}else if(Ee&&o.mode&1){var k=ay(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),oy(k,a,o,s,e),gg(ao(f,o));break e}}s=f=ao(f,o),Je!==4&&(Je=2),jf===null?jf=[s]:jf.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=Qb(s,f,e);Jv(s,g);break e;case 1:o=f;var m=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Ci===null||!Ci.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=Yb(s,o,e);Jv(s,b);break e}}s=s.return}while(s!==null)}m_(n)}catch(I){e=I,We===n&&n!==null&&(We=n=n.return);continue}break}while(1)}function h_(){var t=md.current;return md.current=pd,t===null?pd:t}function Og(){(Je===0||Je===3||Je===2)&&(Je=4),st===null||!(Os&268435455)&&!(mh&268435455)||hi(st,gt)}function yd(t,e){var n=fe;fe|=2;var r=h_();(st!==t||gt!==e)&&(Rr=null,Is(t,e));do try{wT();break}catch(i){d_(t,i)}while(1);if(yg(),fe=n,md.current=r,We!==null)throw Error(A(261));return st=null,gt=0,Je}function wT(){for(;We!==null;)p_(We)}function bT(){for(;We!==null&&!H8();)p_(We)}function p_(t){var e=v_(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?m_(t):We=e,Ng.current=null}function m_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=hT(n,e),n!==null){n.flags&=32767,We=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Je=6,We=null;return}}else if(n=dT(n,e,cn),n!==null){We=n;return}if(e=e.sibling,e!==null){We=e;return}We=e=t}while(e!==null);Je===0&&(Je=5)}function fs(t,e,n){var r=de,i=Dn.transition;try{Dn.transition=null,de=1,_T(t,e,n,r)}finally{Dn.transition=i,de=r}return null}function _T(t,e,n,r){do Ha();while(vi!==null);if(fe&6)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(t7(t,s),t===st&&(We=st=null,gt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ic||(ic=!0,y_(Zc,function(){return Ha(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var a=de;de=1;var o=fe;fe|=4,Ng.current=null,mT(t,n),u_(n,t),z7(mp),td=!!pp,mp=pp=null,t.current=n,gT(n),W8(),fe=o,de=a,Dn.transition=s}else t.current=n;if(ic&&(ic=!1,vi=t,vd=i),s=t.pendingLanes,s===0&&(Ci=null),Q8(n.stateNode),sn(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(gd)throw gd=!1,t=Lp,Lp=null,t;return vd&1&&t.tag!==0&&Ha(),s=t.pendingLanes,s&1?t===Op?zf++:(zf=0,Op=t):zf=0,Gi(),null}function Ha(){if(vi!==null){var t=Kw(vd),e=Dn.transition,n=de;try{if(Dn.transition=null,de=16>t?16:t,vi===null)var r=!1;else{if(t=vi,vi=null,vd=0,fe&6)throw Error(A(331));var i=fe;for(fe|=4,U=t.current;U!==null;){var s=U,a=s.child;if(U.flags&16){var o=s.deletions;if(o!==null){for(var f=0;f<o.length;f++){var u=o[f];for(U=u;U!==null;){var l=U;switch(l.tag){case 0:case 11:case 15:Uf(8,l,s)}var c=l.child;if(c!==null)c.return=l,U=c;else for(;U!==null;){l=U;var d=l.sibling,h=l.return;if(a_(l),l===u){U=null;break}if(d!==null){d.return=h,U=d;break}U=h}}}var p=s.alternate;if(p!==null){var v=p.child;if(v!==null){p.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}U=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,U=a;else e:for(;U!==null;){if(s=U,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Uf(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,U=g;break e}U=s.return}}var m=t.current;for(U=m;U!==null;){a=U;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,U=y;else e:for(a=m;U!==null;){if(o=U,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ph(9,o)}}catch(I){Pe(o,o.return,I)}if(o===a){U=null;break e}var b=o.sibling;if(b!==null){b.return=o.return,U=b;break e}U=o.return}}if(fe=i,Gi(),yr&&typeof yr.onPostCommitFiberRoot=="function")try{yr.onPostCommitFiberRoot(ah,t)}catch{}r=!0}return r}finally{de=n,Dn.transition=e}}return!1}function by(t,e,n){e=ao(n,e),e=Qb(t,e,1),t=Ti(t,e,1),e=zt(),t!==null&&(il(t,1,e),sn(t,e))}function Pe(t,e,n){if(t.tag===3)by(t,t,n);else for(;e!==null;){if(e.tag===3){by(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ci===null||!Ci.has(r))){t=ao(n,t),t=Yb(e,t,1),e=Ti(e,t,1),t=zt(),e!==null&&(il(e,1,t),sn(e,t));break}}e=e.return}}function kT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=zt(),t.pingedLanes|=t.suspendedLanes&n,st===t&&(gt&n)===n&&(Je===4||Je===3&&(gt&130023424)===gt&&500>Ue()-Pg?Is(t,0):Dg|=n),sn(t,e)}function g_(t,e){e===0&&(t.mode&1?(e=Kl,Kl<<=1,!(Kl&130023424)&&(Kl=4194304)):e=1);var n=zt();t=qr(t,e),t!==null&&(il(t,e,n),sn(t,n))}function ET(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),g_(t,n)}function IT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),g_(t,n)}var v_;v_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,cT(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,Ee&&e.flags&1048576&&bb(e,fd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Dc(t,e),t=e.pendingProps;var i=no(e,Nt.current);qa(e,n),i=Tg(null,e,r,t,i,n);var s=Cg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(r)?(s=!0,ad(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_g(e),i.updater=dh,e.stateNode=i,i._reactInternals=e,Ip(e,r,t,n),e=Cp(null,e,r,!0,s,n)):(e.tag=0,Ee&&s&&pg(e),Lt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Dc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=TT(r),t=Vn(r,t),i){case 0:e=Tp(null,e,r,t,n);break e;case 1:e=ly(null,e,r,t,n);break e;case 11:e=fy(null,e,r,t,n);break e;case 14:e=uy(null,e,r,Vn(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),Tp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),ly(t,e,r,i,n);case 3:e:{if(e_(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Ib(t,e),cd(e,r,null,n);var a=e.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ao(Error(A(423)),e),e=cy(t,e,r,n,i);break e}else if(r!==i){i=ao(Error(A(424)),e),e=cy(t,e,r,n,i);break e}else for(hn=Si(e.stateNode.containerInfo.firstChild),gn=e,Ee=!0,qn=null,n=xb(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ro(),r===i){e=Hr(t,e,n);break e}Lt(t,e,r,n)}e=e.child}return e;case 5:return Rb(e),t===null&&_p(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,gp(r,i)?a=null:s!==null&&gp(r,s)&&(e.flags|=32),Zb(t,e),Lt(t,e,a,n),e.child;case 6:return t===null&&_p(e),null;case 13:return t_(t,e,n);case 4:return kg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=io(e,null,r,n):Lt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),fy(t,e,r,i,n);case 7:return Lt(t,e,e.pendingProps,n),e.child;case 8:return Lt(t,e,e.pendingProps.children,n),e.child;case 12:return Lt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,a=i.value,ve(ud,r._currentValue),r._currentValue=a,s!==null)if(Zn(s.value,a)){if(s.children===i.children&&!nn.current){e=Hr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var f=o.firstContext;f!==null;){if(f.context===r){if(s.tag===1){f=Fr(-1,n&-n),f.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var l=u.pending;l===null?f.next=f:(f.next=l.next,l.next=f),u.pending=f}}s.lanes|=n,f=s.alternate,f!==null&&(f.lanes|=n),kp(s.return,n,e),o.lanes|=n;break}f=f.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(A(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),kp(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Lt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,qa(e,n),i=Mn(i),r=r(i),e.flags|=1,Lt(t,e,r,n),e.child;case 14:return r=e.type,i=Vn(r,e.pendingProps),i=Vn(r.type,i),uy(t,e,r,i,n);case 15:return Xb(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),Dc(t,e),e.tag=1,rn(r)?(t=!0,ad(e)):t=!1,qa(e,n),Tb(e,r,i),Ip(e,r,i,n),Cp(null,e,r,!0,t,n);case 19:return n_(t,e,n);case 22:return Jb(t,e,n)}throw Error(A(156,e.tag))};function y_(t,e){return qw(t,e)}function ST(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,r){return new ST(t,e,n,r)}function $g(t){return t=t.prototype,!(!t||!t.isReactComponent)}function TT(t){if(typeof t=="function")return $g(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ng)return 11;if(t===rg)return 14}return 2}function Ri(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Lc(t,e,n,r,i,s){var a=2;if(r=t,typeof t=="function")$g(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Ta:return Ss(n.children,i,s,e);case tg:a=8,i|=8;break;case K0:return t=Rn(12,n,e,i|2),t.elementType=K0,t.lanes=s,t;case Q0:return t=Rn(13,n,e,i),t.elementType=Q0,t.lanes=s,t;case Y0:return t=Rn(19,n,e,i),t.elementType=Y0,t.lanes=s,t;case Cw:return gh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Sw:a=10;break e;case Tw:a=9;break e;case ng:a=11;break e;case rg:a=14;break e;case li:a=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=Rn(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ss(t,e,n,r){return t=Rn(7,t,r,e),t.lanes=n,t}function gh(t,e,n,r){return t=Rn(22,t,r,e),t.elementType=Cw,t.lanes=n,t.stateNode={isHidden:!1},t}function l0(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function c0(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function CT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=H1(0),this.expirationTimes=H1(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=H1(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fg(t,e,n,r,i,s,a,o,f){return t=new CT(t,e,n,o,f),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_g(s),t}function xT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sa,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function w_(t){if(!t)return Mi;t=t._reactInternals;e:{if(na(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(rn(n))return yb(t,n,e)}return e}function b_(t,e,n,r,i,s,a,o,f){return t=Fg(n,r,!0,t,i,s,a,o,f),t.context=w_(null),n=t.current,r=zt(),i=xi(n),s=Fr(r,i),s.callback=e??null,Ti(n,s,i),t.current.lanes=i,il(t,i,r),sn(t,r),t}function vh(t,e,n,r){var i=e.current,s=zt(),a=xi(i);return n=w_(n),e.context===null?e.context=n:e.pendingContext=n,e=Fr(s,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ti(i,e,a),t!==null&&(Yn(t,i,a,s),Rc(t,i,a)),a}function wd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _y(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ug(t,e){_y(t,e),(t=t.alternate)&&_y(t,e)}function RT(){return null}var __=typeof reportError=="function"?reportError:function(t){console.error(t)};function jg(t){this._internalRoot=t}yh.prototype.render=jg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));vh(t,e,null,null)};yh.prototype.unmount=jg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$s(function(){vh(null,t,null,null)}),e[Br]=null}};function yh(t){this._internalRoot=t}yh.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<di.length&&e!==0&&e<di[n].priority;n++);di.splice(n,0,t),n===0&&Zw(t)}};function zg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ky(){}function AT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=wd(a);s.call(u)}}var a=b_(e,r,t,0,null,!1,!1,"",ky);return t._reactRootContainer=a,t[Br]=a.current,du(t.nodeType===8?t.parentNode:t),$s(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var u=wd(f);o.call(u)}}var f=Fg(t,0,!1,null,null,!1,!1,"",ky);return t._reactRootContainer=f,t[Br]=f.current,du(t.nodeType===8?t.parentNode:t),$s(function(){vh(e,f,n,r)}),f}function bh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var o=i;i=function(){var f=wd(a);o.call(f)}}vh(e,a,t,i)}else a=AT(n,e,t,i,r);return wd(a)}Qw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ef(e.pendingLanes);n!==0&&(ag(e,n|1),sn(e,Ue()),!(fe&6)&&(oo=Ue()+500,Gi()))}break;case 13:$s(function(){var r=qr(t,1);if(r!==null){var i=zt();Yn(r,t,1,i)}}),Ug(t,1)}};og=function(t){if(t.tag===13){var e=qr(t,134217728);if(e!==null){var n=zt();Yn(e,t,134217728,n)}Ug(t,134217728)}};Yw=function(t){if(t.tag===13){var e=xi(t),n=qr(t,e);if(n!==null){var r=zt();Yn(n,t,e,r)}Ug(t,e)}};Xw=function(){return de};Jw=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};ap=function(t,e,n){switch(e){case"input":if(Z0(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=lh(r);if(!i)throw Error(A(90));Rw(r),Z0(r,i)}}}break;case"textarea":Nw(t,n);break;case"select":e=n.value,e!=null&&ja(t,!!n.multiple,e,!1)}};Fw=Mg;Uw=$s;var NT={usingClientEntryPoint:!1,Events:[al,Aa,lh,Ow,$w,Mg]},sf={findFiberByHostInstance:gs,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},DT={bundleType:sf.bundleType,version:sf.version,rendererPackageName:sf.rendererPackageName,rendererConfig:sf.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vw(t),t===null?null:t.stateNode},findFiberByHostInstance:sf.findFiberByHostInstance||RT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{ah=sc.inject(DT),yr=sc}catch{}}bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NT;bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zg(e))throw Error(A(200));return xT(t,e,null,n)};bn.createRoot=function(t,e){if(!zg(t))throw Error(A(299));var n=!1,r="",i=__;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Fg(t,1,!1,null,null,n,!1,r,i),t[Br]=e.current,du(t.nodeType===8?t.parentNode:t),new jg(e)};bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=Vw(e),t=t===null?null:t.stateNode,t};bn.flushSync=function(t){return $s(t)};bn.hydrate=function(t,e,n){if(!wh(e))throw Error(A(200));return bh(null,t,e,!0,n)};bn.hydrateRoot=function(t,e,n){if(!zg(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=__;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=b_(e,null,t,1,n??null,i,!1,s,a),t[Br]=e.current,du(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new yh(e)};bn.render=function(t,e,n){if(!wh(e))throw Error(A(200));return bh(null,t,e,!1,n)};bn.unmountComponentAtNode=function(t){if(!wh(t))throw Error(A(40));return t._reactRootContainer?($s(function(){bh(null,null,t,!1,function(){t._reactRootContainer=null,t[Br]=null})}),!0):!1};bn.unstable_batchedUpdates=Mg;bn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!wh(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return bh(t,e,n,!1,r)};bn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=bn})(R8);var Ey=Qc;H0.createRoot=Ey.createRoot,H0.hydrateRoot=Ey.hydrateRoot;const PT={"app-container":"_app-container_i2guw_17"};var Vg=ul(),J=t=>fl(t,Vg),Bg=ul();J.write=t=>fl(t,Bg);var _h=ul();J.onStart=t=>fl(t,_h);var qg=ul();J.onFrame=t=>fl(t,qg);var Hg=ul();J.onFinish=t=>fl(t,Hg);var Wa=[];J.setTimeout=(t,e)=>{let n=J.now()+e,r=()=>{let s=Wa.findIndex(a=>a.cancel==r);~s&&Wa.splice(s,1),wi-=~s?1:0},i={time:n,handler:t,cancel:r};return Wa.splice(k_(n),0,i),wi+=1,E_(),i};var k_=t=>~(~Wa.findIndex(e=>e.time>t)||~Wa.length);J.cancel=t=>{_h.delete(t),qg.delete(t),Hg.delete(t),Vg.delete(t),Bg.delete(t)};J.sync=t=>{Up=!0,J.batchedUpdates(t),Up=!1};J.throttle=t=>{let e;function n(){try{t(...e)}finally{e=null}}function r(...i){e=i,J.onStart(n)}return r.handler=t,r.cancel=()=>{_h.delete(n),e=null},r};var Wg=typeof window<"u"?window.requestAnimationFrame:()=>{};J.use=t=>Wg=t;J.now=typeof performance<"u"?()=>performance.now():Date.now;J.batchedUpdates=t=>t();J.catch=console.error;J.frameLoop="always";J.advance=()=>{J.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):S_()};var yi=-1,wi=0,Up=!1;function fl(t,e){Up?(e.delete(t),t(0)):(e.add(t),E_())}function E_(){yi<0&&(yi=0,J.frameLoop!=="demand"&&Wg(I_))}function MT(){yi=-1}function I_(){~yi&&(Wg(I_),J.batchedUpdates(S_))}function S_(){let t=yi;yi=J.now();let e=k_(yi);if(e&&(T_(Wa.splice(0,e),n=>n.handler()),wi-=e),!wi){MT();return}_h.flush(),Vg.flush(t?Math.min(64,yi-t):16.667),qg.flush(),Bg.flush(),Hg.flush()}function ul(){let t=new Set,e=t;return{add(n){wi+=e==t&&!t.has(n)?1:0,t.add(n)},delete(n){return wi-=e==t&&t.has(n)?1:0,t.delete(n)},flush(n){e.size&&(t=new Set,wi-=e.size,T_(e,r=>r(n)&&t.add(r)),wi+=t.size,e=t)}}}function T_(t,e){t.forEach(n=>{try{e(n)}catch(r){J.catch(r)}})}var LT=Object.defineProperty,OT=(t,e)=>{for(var n in e)LT(t,n,{get:e[n],enumerable:!0})},er={};OT(er,{assign:()=>FT,colors:()=>Ai,createStringInterpolator:()=>Kg,skipAnimation:()=>x_,to:()=>C_,willAdvance:()=>Qg});function jp(){}var $T=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),D={arr:Array.isArray,obj:t=>!!t&&t.constructor.name==="Object",fun:t=>typeof t=="function",str:t=>typeof t=="string",num:t=>typeof t=="number",und:t=>t===void 0};function Ar(t,e){if(D.arr(t)){if(!D.arr(e)||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}return t===e}var te=(t,e)=>t.forEach(e);function Er(t,e,n){if(D.arr(t)){for(let r=0;r<t.length;r++)e.call(n,t[r],`${r}`);return}for(let r in t)t.hasOwnProperty(r)&&e.call(n,t[r],r)}var Ut=t=>D.und(t)?[]:D.arr(t)?t:[t];function Vf(t,e){if(t.size){let n=Array.from(t);t.clear(),te(n,e)}}var Sf=(t,...e)=>Vf(t,n=>n(...e)),Gg=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Kg,C_,Ai=null,x_=!1,Qg=jp,FT=t=>{t.to&&(C_=t.to),t.now&&(J.now=t.now),t.colors!==void 0&&(Ai=t.colors),t.skipAnimation!=null&&(x_=t.skipAnimation),t.createStringInterpolator&&(Kg=t.createStringInterpolator),t.requestAnimationFrame&&J.use(t.requestAnimationFrame),t.batchedUpdates&&(J.batchedUpdates=t.batchedUpdates),t.willAdvance&&(Qg=t.willAdvance),t.frameLoop&&(J.frameLoop=t.frameLoop)},Bf=new Set,xn=[],d0=[],bd=0,kh={get idle(){return!Bf.size&&!xn.length},start(t){bd>t.priority?(Bf.add(t),J.onStart(UT)):(R_(t),J(zp))},advance:zp,sort(t){if(bd)J.onFrame(()=>kh.sort(t));else{let e=xn.indexOf(t);~e&&(xn.splice(e,1),A_(t))}},clear(){xn=[],Bf.clear()}};function UT(){Bf.forEach(R_),Bf.clear(),J(zp)}function R_(t){xn.includes(t)||A_(t)}function A_(t){xn.splice(jT(xn,e=>e.priority>t.priority),0,t)}function zp(t){let e=d0;for(let n=0;n<xn.length;n++){let r=xn[n];bd=r.priority,r.idle||(Qg(r),r.advance(t),r.idle||e.push(r))}return bd=0,d0=xn,d0.length=0,xn=e,xn.length>0}function jT(t,e){let n=t.findIndex(e);return n<0?t.length:n}var zT=(t,e,n)=>Math.min(Math.max(n,t),e),VT={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},Gn="[-+]?\\d*\\.?\\d+",_d=Gn+"%";function Eh(...t){return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}var BT=new RegExp("rgb"+Eh(Gn,Gn,Gn)),qT=new RegExp("rgba"+Eh(Gn,Gn,Gn,Gn)),HT=new RegExp("hsl"+Eh(Gn,_d,_d)),WT=new RegExp("hsla"+Eh(Gn,_d,_d,Gn)),GT=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,KT=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,QT=/^#([0-9a-fA-F]{6})$/,YT=/^#([0-9a-fA-F]{8})$/;function XT(t){let e;return typeof t=="number"?t>>>0===t&&t>=0&&t<=4294967295?t:null:(e=QT.exec(t))?parseInt(e[1]+"ff",16)>>>0:Ai&&Ai[t]!==void 0?Ai[t]:(e=BT.exec(t))?(ga(e[1])<<24|ga(e[2])<<16|ga(e[3])<<8|255)>>>0:(e=qT.exec(t))?(ga(e[1])<<24|ga(e[2])<<16|ga(e[3])<<8|Ty(e[4]))>>>0:(e=GT.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+"ff",16)>>>0:(e=YT.exec(t))?parseInt(e[1],16)>>>0:(e=KT.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+e[4]+e[4],16)>>>0:(e=HT.exec(t))?(Iy(Sy(e[1]),ac(e[2]),ac(e[3]))|255)>>>0:(e=WT.exec(t))?(Iy(Sy(e[1]),ac(e[2]),ac(e[3]))|Ty(e[4]))>>>0:null}function h0(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Iy(t,e,n){let r=n<.5?n*(1+e):n+e-n*e,i=2*n-r,s=h0(i,r,t+1/3),a=h0(i,r,t),o=h0(i,r,t-1/3);return Math.round(s*255)<<24|Math.round(a*255)<<16|Math.round(o*255)<<8}function ga(t){let e=parseInt(t,10);return e<0?0:e>255?255:e}function Sy(t){return(parseFloat(t)%360+360)%360/360}function Ty(t){let e=parseFloat(t);return e<0?0:e>1?255:Math.round(e*255)}function ac(t){let e=parseFloat(t);return e<0?0:e>100?1:e/100}function Cy(t){let e=XT(t);if(e===null)return t;e=e||0;let n=(e&4278190080)>>>24,r=(e&16711680)>>>16,i=(e&65280)>>>8,s=(e&255)/255;return`rgba(${n}, ${r}, ${i}, ${s})`}var _u=(t,e,n)=>{if(D.fun(t))return t;if(D.arr(t))return _u({range:t,output:e,extrapolate:n});if(D.str(t.output[0]))return Kg(t);let r=t,i=r.output,s=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",o=r.extrapolateRight||r.extrapolate||"extend",f=r.easing||(u=>u);return u=>{let l=ZT(u,s);return JT(u,s[l],s[l+1],i[l],i[l+1],f,a,o,r.map)}};function JT(t,e,n,r,i,s,a,o,f){let u=f?f(t):t;if(u<e){if(a==="identity")return u;a==="clamp"&&(u=e)}if(u>n){if(o==="identity")return u;o==="clamp"&&(u=n)}return r===i?r:e===n?t<=e?r:i:(e===-1/0?u=-u:n===1/0?u=u-e:u=(u-e)/(n-e),u=s(u),r===-1/0?u=-u:i===1/0?u=u+r:u=u*(i-r)+r,u)}function ZT(t,e){for(var n=1;n<e.length-1&&!(e[n]>=t);++n);return n-1}var eC=(t,e="end")=>n=>{n=e==="end"?Math.min(n,.999):Math.max(n,.001);let r=n*t,i=e==="end"?Math.floor(r):Math.ceil(r);return zT(0,1,i/t)},kd=1.70158,oc=kd*1.525,xy=kd+1,Ry=2*Math.PI/3,Ay=2*Math.PI/4.5,fc=t=>t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,tC={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>1-(1-t)*(1-t),easeInOutQuad:t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,easeInCubic:t=>t*t*t,easeOutCubic:t=>1-Math.pow(1-t,3),easeInOutCubic:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,easeInQuart:t=>t*t*t*t,easeOutQuart:t=>1-Math.pow(1-t,4),easeInOutQuart:t=>t<.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2,easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>1-Math.pow(1-t,5),easeInOutQuint:t=>t<.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2,easeInSine:t=>1-Math.cos(t*Math.PI/2),easeOutSine:t=>Math.sin(t*Math.PI/2),easeInOutSine:t=>-(Math.cos(Math.PI*t)-1)/2,easeInExpo:t=>t===0?0:Math.pow(2,10*t-10),easeOutExpo:t=>t===1?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>t===0?0:t===1?1:t<.5?Math.pow(2,20*t-10)/2:(2-Math.pow(2,-20*t+10))/2,easeInCirc:t=>1-Math.sqrt(1-Math.pow(t,2)),easeOutCirc:t=>Math.sqrt(1-Math.pow(t-1,2)),easeInOutCirc:t=>t<.5?(1-Math.sqrt(1-Math.pow(2*t,2)))/2:(Math.sqrt(1-Math.pow(-2*t+2,2))+1)/2,easeInBack:t=>xy*t*t*t-kd*t*t,easeOutBack:t=>1+xy*Math.pow(t-1,3)+kd*Math.pow(t-1,2),easeInOutBack:t=>t<.5?Math.pow(2*t,2)*((oc+1)*2*t-oc)/2:(Math.pow(2*t-2,2)*((oc+1)*(t*2-2)+oc)+2)/2,easeInElastic:t=>t===0?0:t===1?1:-Math.pow(2,10*t-10)*Math.sin((t*10-10.75)*Ry),easeOutElastic:t=>t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t*10-.75)*Ry)+1,easeInOutElastic:t=>t===0?0:t===1?1:t<.5?-(Math.pow(2,20*t-10)*Math.sin((20*t-11.125)*Ay))/2:Math.pow(2,-20*t+10)*Math.sin((20*t-11.125)*Ay)/2+1,easeInBounce:t=>1-fc(1-t),easeOutBounce:fc,easeInOutBounce:t=>t<.5?(1-fc(1-2*t))/2:(1+fc(2*t-1))/2,steps:eC},fo=Symbol.for("FluidValue.get"),Fs=Symbol.for("FluidValue.observers"),Cn=t=>Boolean(t&&t[fo]),Qt=t=>t&&t[fo]?t[fo]():t,Ny=t=>t[Fs]||null;function nC(t,e){t.eventObserved?t.eventObserved(e):t(e)}function ku(t,e){let n=t[Fs];n&&n.forEach(r=>{nC(r,e)})}var Bq,qq,hw,N_=(hw=class{constructor(e){F(this,Bq);F(this,qq);if(!e&&!(e=this.get))throw Error("Unknown getter");rC(this,e)}},Bq=fo,qq=Fs,hw),rC=(t,e)=>D_(t,fo,e);function Do(t,e){if(t[fo]){let n=t[Fs];n||D_(t,Fs,n=new Set),n.has(e)||(n.add(e),t.observerAdded&&t.observerAdded(n.size,e))}return e}function Eu(t,e){let n=t[Fs];if(n&&n.has(e)){let r=n.size-1;r?n.delete(e):t[Fs]=null,t.observerRemoved&&t.observerRemoved(r,e)}}var D_=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),Oc=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,iC=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Dy=new RegExp(`(${Oc.source})(%|[a-z]+)`,"i"),sC=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Ih=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,P_=t=>{let[e,n]=aC(t);if(!e||Gg())return t;let r=window.getComputedStyle(document.documentElement).getPropertyValue(e);return r?r.trim():n&&n.startsWith("--")?window.getComputedStyle(document.documentElement).getPropertyValue(n)||t:n&&Ih.test(n)?P_(n):n||t},aC=t=>{let e=Ih.exec(t);if(!e)return[,];let[,n,r]=e;return[n,r]},p0,oC=(t,e,n,r,i)=>`rgba(${Math.round(e)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,M_=t=>{p0||(p0=Ai?new RegExp(`(${Object.keys(Ai).join("|")})(?!\\w)`,"g"):/^\b$/);let e=t.output.map(i=>Qt(i).replace(Ih,P_).replace(iC,Cy).replace(p0,Cy)),n=e.map(i=>i.match(Oc).map(Number)),r=n[0].map((i,s)=>n.map(a=>{if(!(s in a))throw Error('The arity of each "output" value must be equal');return a[s]})).map(i=>_u({...t,output:i}));return i=>{var o;let s=!Dy.test(e[0])&&((o=e.find(f=>Dy.test(f)))==null?void 0:o.replace(Oc,"")),a=0;return e[0].replace(Oc,()=>`${r[a++](i)}${s||""}`).replace(sC,oC)}},Yg="react-spring: ",L_=t=>{let e=t,n=!1;if(typeof e!="function")throw new TypeError(`${Yg}once requires a function parameter`);return(...r)=>{n||(e(...r),n=!0)}},fC=L_(console.warn);function uC(){fC(`${Yg}The "interpolate" function is deprecated in v9 (use "to" instead)`)}var lC=L_(console.warn);function cC(){lC(`${Yg}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function Sh(t){return D.str(t)&&(t[0]=="#"||/\d/.test(t)||!Gg()&&Ih.test(t)||t in(Ai||{}))}var $a=Gg()?w.useEffect:w.useLayoutEffect,dC=()=>{let t=w.useRef(!1);return $a(()=>(t.current=!0,()=>{t.current=!1}),[]),t};function O_(){let t=w.useState()[1],e=dC();return()=>{e.current&&t(Math.random())}}function hC(t,e){let[n]=w.useState(()=>({inputs:e,result:t()})),r=w.useRef(),i=r.current,s=i;return s?Boolean(e&&s.inputs&&pC(e,s.inputs))||(s={inputs:e,result:t()}):s=n,w.useEffect(()=>{r.current=s,i==n&&(n.inputs=n.result=void 0)},[s]),s.result}function pC(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}var $_=t=>w.useEffect(t,mC),mC=[];function gC(t){let e=w.useRef();return w.useEffect(()=>{e.current=t}),e.current}var Iu=Symbol.for("Animated:node"),vC=t=>!!t&&t[Iu]===t,ar=t=>t&&t[Iu],Xg=(t,e)=>$T(t,Iu,e),Th=t=>t&&t[Iu]&&t[Iu].getPayload(),F_=class{constructor(){F(this,"payload");Xg(this,this)}getPayload(){return this.payload||[]}},ll=class extends F_{constructor(n){super();F(this,"done",!0);F(this,"elapsedTime");F(this,"lastPosition");F(this,"lastVelocity");F(this,"v0");F(this,"durationProgress",0);this._value=n,D.num(this._value)&&(this.lastPosition=this._value)}static create(n){return new ll(n)}getPayload(){return[this]}getValue(){return this._value}setValue(n,r){return D.num(n)&&(this.lastPosition=n,r&&(n=Math.round(n/r)*r,this.done&&(this.lastPosition=n))),this._value===n?!1:(this._value=n,!0)}reset(){let{done:n}=this;this.done=!1,D.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,n&&(this.lastVelocity=null),this.v0=null)}},Su=class extends ll{constructor(e){super(0);F(this,"_string",null);F(this,"_toString");this._toString=_u({output:[e,e]})}static create(e){return new Su(e)}getValue(){return this._string??(this._string=this._toString(this._value))}setValue(e){if(D.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else if(super.setValue(e))this._string=null;else return!1;return!0}reset(e){e&&(this._toString=_u({output:[this.getValue(),e]})),this._value=0,super.reset()}},Ed={dependencies:null},Ch=class extends F_{constructor(t){super(),this.source=t,this.setValue(t)}getValue(t){let e={};return Er(this.source,(n,r)=>{vC(n)?e[r]=n.getValue(t):Cn(n)?e[r]=Qt(n):t||(e[r]=n)}),e}setValue(t){this.source=t,this.payload=this._makePayload(t)}reset(){this.payload&&te(this.payload,t=>t.reset())}_makePayload(t){if(t){let e=new Set;return Er(t,this._addToPayload,e),Array.from(e)}}_addToPayload(t){Ed.dependencies&&Cn(t)&&Ed.dependencies.add(t);let e=Th(t);e&&te(e,n=>this.add(n))}},U_=class extends Ch{constructor(e){super(e)}static create(e){return new U_(e)}getValue(){return this.source.map(e=>e.getValue())}setValue(e){let n=this.getPayload();return e.length==n.length?n.map((r,i)=>r.setValue(e[i])).some(Boolean):(super.setValue(e.map(yC)),!0)}};function yC(t){return(Sh(t)?Su:ll).create(t)}function Vp(t){let e=ar(t);return e?e.constructor:D.arr(t)?U_:Sh(t)?Su:ll}var Py=(t,e)=>{let n=!D.fun(t)||t.prototype&&t.prototype.isReactComponent;return w.forwardRef((r,i)=>{let s=w.useRef(null),a=n&&w.useCallback(p=>{s.current=_C(i,p)},[i]),[o,f]=bC(r,e),u=O_(),l=()=>{let p=s.current;n&&!p||(p?e.applyAnimatedValues(p,o.getValue(!0)):!1)===!1&&u()},c=new wC(l,f),d=w.useRef();$a(()=>(d.current=c,te(f,p=>Do(p,c)),()=>{d.current&&(te(d.current.deps,p=>Eu(p,d.current)),J.cancel(d.current.update))})),w.useEffect(l,[]),$_(()=>()=>{let p=d.current;te(p.deps,v=>Eu(v,p))});let h=e.getComponentProps(o.getValue());return w.createElement(t,{...h,ref:a})})},wC=class{constructor(e,n){this.update=e,this.deps=n}eventObserved(e){e.type=="change"&&J.write(this.update)}};function bC(t,e){let n=new Set;return Ed.dependencies=n,t.style&&(t={...t,style:e.createAnimatedStyle(t.style)}),t=new Ch(t),Ed.dependencies=null,[t,n]}function _C(t,e){return t&&(D.fun(t)?t(e):t.current=e),e}var My=Symbol.for("AnimatedComponent"),kC=(t,{applyAnimatedValues:e=()=>!1,createAnimatedStyle:n=i=>new Ch(i),getComponentProps:r=i=>i}={})=>{let i={applyAnimatedValues:e,createAnimatedStyle:n,getComponentProps:r},s=a=>{let o=Ly(a)||"Anonymous";return D.str(a)?a=s[a]||(s[a]=Py(a,i)):a=a[My]||(a[My]=Py(a,i)),a.displayName=`Animated(${o})`,a};return Er(t,(a,o)=>{D.arr(t)&&(o=Ly(a)),s[o]=s(a)}),{animated:s}},Ly=t=>D.str(t)?t:t&&D.str(t.displayName)?t.displayName:D.fun(t)&&t.name||null;function Yt(t,...e){return D.fun(t)?t(...e):t}var qf=(t,e)=>t===!0||!!(e&&t&&(D.fun(t)?t(e):Ut(t).includes(e))),j_=(t,e)=>D.obj(t)?e&&t[e]:t,z_=(t,e)=>t.default===!0?t[e]:t.default?t.default[e]:void 0,EC=t=>t,Jg=(t,e=EC)=>{let n=IC;t.default&&t.default!==!0&&(t=t.default,n=Object.keys(t));let r={};for(let i of n){let s=e(t[i],i);D.und(s)||(r[i]=s)}return r},IC=["config","onProps","onStart","onChange","onPause","onResume","onRest"],SC={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function TC(t){let e={},n=0;if(Er(t,(r,i)=>{SC[i]||(e[i]=r,n++)}),n)return e}function Zg(t){let e=TC(t);if(e){let n={to:e};return Er(t,(r,i)=>i in e||(n[i]=r)),n}return{...t}}function Tu(t){return t=Qt(t),D.arr(t)?t.map(Tu):Sh(t)?er.createStringInterpolator({range:[0,1],output:[t,t]})(1):t}function CC(t){for(let e in t)return!0;return!1}function Bp(t){return D.fun(t)||D.arr(t)&&D.obj(t[0])}function Oy(t,e){var n;(n=t.ref)==null||n.delete(t),e==null||e.delete(t)}function xC(t,e){var n;e&&t.ref!==e&&((n=t.ref)==null||n.delete(t),e.add(t),t.ref=e)}var RC={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},qp={...RC.default,mass:1,damping:1,easing:tC.linear,clamp:!1},AC=class{constructor(){F(this,"tension");F(this,"friction");F(this,"frequency");F(this,"damping");F(this,"mass");F(this,"velocity",0);F(this,"restVelocity");F(this,"precision");F(this,"progress");F(this,"duration");F(this,"easing");F(this,"clamp");F(this,"bounce");F(this,"decay");F(this,"round");Object.assign(this,qp)}};function NC(t,e,n){n&&(n={...n},$y(n,e),e={...n,...e}),$y(t,e),Object.assign(t,e);for(let a in qp)t[a]==null&&(t[a]=qp[a]);let{mass:r,frequency:i,damping:s}=t;return D.und(i)||(i<.01&&(i=.01),s<0&&(s=0),t.tension=Math.pow(2*Math.PI/i,2)*r,t.friction=4*Math.PI*s*r/i),t}function $y(t,e){if(!D.und(e.decay))t.duration=void 0;else{let n=!D.und(e.tension)||!D.und(e.friction);(n||!D.und(e.frequency)||!D.und(e.damping)||!D.und(e.mass))&&(t.duration=void 0,t.decay=void 0),n&&(t.frequency=void 0)}}var Fy=[],DC=class{constructor(){F(this,"changed",!1);F(this,"values",Fy);F(this,"toValues",null);F(this,"fromValues",Fy);F(this,"to");F(this,"from");F(this,"config",new AC);F(this,"immediate",!1)}};function V_(t,{key:e,props:n,defaultProps:r,state:i,actions:s}){return new Promise((a,o)=>{let f,u,l=qf(n.cancel??(r==null?void 0:r.cancel),e);if(l)h();else{D.und(n.pause)||(i.paused=qf(n.pause,e));let p=r==null?void 0:r.pause;p!==!0&&(p=i.paused||qf(p,e)),f=Yt(n.delay||0,e),p?(i.resumeQueue.add(d),s.pause()):(s.resume(),d())}function c(){i.resumeQueue.add(d),i.timeouts.delete(u),u.cancel(),f=u.time-J.now()}function d(){f>0&&!er.skipAnimation?(i.delayed=!0,u=J.setTimeout(h,f),i.pauseQueue.add(c),i.timeouts.add(u)):h()}function h(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(c),i.timeouts.delete(u),t<=(i.cancelId||0)&&(l=!0);try{s.start({...n,callId:t,cancel:l},a)}catch(p){o(p)}}})}var e2=(t,e)=>e.length==1?e[0]:e.some(n=>n.cancelled)?Ga(t.get()):e.every(n=>n.noop)?B_(t.get()):Hn(t.get(),e.every(n=>n.finished)),B_=t=>({value:t,noop:!0,finished:!0,cancelled:!1}),Hn=(t,e,n=!1)=>({value:t,finished:e,cancelled:n}),Ga=t=>({value:t,cancelled:!0,finished:!1});function q_(t,e,n,r){let{callId:i,parentId:s,onRest:a}=e,{asyncTo:o,promise:f}=n;return!s&&t===o&&!e.reset?f:n.promise=(async()=>{n.asyncId=i,n.asyncTo=t;let u=Jg(e,(k,g)=>g==="onRest"?void 0:k),l,c,d=new Promise((k,g)=>(l=k,c=g)),h=k=>{let g=i<=(n.cancelId||0)&&Ga(r)||i!==n.asyncId&&Hn(r,!1);if(g)throw k.result=g,c(k),k},p=(k,g)=>{let m=new Uy,y=new jy;return(async()=>{if(er.skipAnimation)throw Cu(n),y.result=Hn(r,!1),c(y),y;h(m);let b=D.obj(k)?{...k}:{...g,to:k};b.parentId=i,Er(u,(T,C)=>{D.und(b[C])&&(b[C]=T)});let I=await r.start(b);return h(m),n.paused&&await new Promise(T=>{n.resumeQueue.add(T)}),I})()},v;if(er.skipAnimation)return Cu(n),Hn(r,!1);try{let k;D.arr(t)?k=(async g=>{for(let m of g)await p(m)})(t):k=Promise.resolve(t(p,r.stop.bind(r))),await Promise.all([k.then(l),d]),v=Hn(r.get(),!0,!1)}catch(k){if(k instanceof Uy)v=k.result;else if(k instanceof jy)v=k.result;else throw k}finally{i==n.asyncId&&(n.asyncId=s,n.asyncTo=s?o:void 0,n.promise=s?f:void 0)}return D.fun(a)&&J.batchedUpdates(()=>{a(v,r,r.item)}),v})()}function Cu(t,e){Vf(t.timeouts,n=>n.cancel()),t.pauseQueue.clear(),t.resumeQueue.clear(),t.asyncId=t.asyncTo=t.promise=void 0,e&&(t.cancelId=e)}var Uy=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");F(this,"result")}},jy=class extends Error{constructor(){super("SkipAnimationSignal");F(this,"result")}},Hp=t=>t instanceof t2,PC=1,t2=class extends N_{constructor(){super(...arguments);F(this,"id",PC++);F(this,"_priority",0)}get priority(){return this._priority}set priority(n){this._priority!=n&&(this._priority=n,this._onPriorityChange(n))}get(){let n=ar(this);return n&&n.getValue()}to(...n){return er.to(this,n)}interpolate(...n){return uC(),er.to(this,n)}toJSON(){return this.get()}observerAdded(n){n==1&&this._attach()}observerRemoved(n){n==0&&this._detach()}_attach(){}_detach(){}_onChange(n,r=!1){ku(this,{type:"change",parent:this,value:n,idle:r})}_onPriorityChange(n){this.idle||kh.sort(this),ku(this,{type:"priority",parent:this,priority:n})}},Us=Symbol.for("SpringPhase"),H_=1,Wp=2,Gp=4,m0=t=>(t[Us]&H_)>0,ii=t=>(t[Us]&Wp)>0,af=t=>(t[Us]&Gp)>0,zy=(t,e)=>e?t[Us]|=Wp|H_:t[Us]&=~Wp,Vy=(t,e)=>e?t[Us]|=Gp:t[Us]&=~Gp,MC=class extends t2{constructor(n,r){super();F(this,"key");F(this,"animation",new DC);F(this,"queue");F(this,"defaultProps",{});F(this,"_state",{paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set});F(this,"_pendingCalls",new Set);F(this,"_lastCallId",0);F(this,"_lastToId",0);F(this,"_memoizedDuration",0);if(!D.und(n)||!D.und(r)){let i=D.obj(n)?{...n}:{...r,from:n};D.und(i.default)&&(i.default=!0),this.start(i)}}get idle(){return!(ii(this)||this._state.asyncTo)||af(this)}get goal(){return Qt(this.animation.to)}get velocity(){let n=ar(this);return n instanceof ll?n.lastVelocity||0:n.getPayload().map(r=>r.lastVelocity||0)}get hasAnimated(){return m0(this)}get isAnimating(){return ii(this)}get isPaused(){return af(this)}get isDelayed(){return this._state.delayed}advance(n){let r=!0,i=!1,s=this.animation,{config:a,toValues:o}=s,f=Th(s.to);!f&&Cn(s.to)&&(o=Ut(Qt(s.to))),s.values.forEach((c,d)=>{if(c.done)return;let h=c.constructor==Su?1:f?f[d].lastPosition:o[d],p=s.immediate,v=h;if(!p){if(v=c.lastPosition,a.tension<=0){c.done=!0;return}let k=c.elapsedTime+=n,g=s.fromValues[d],m=c.v0!=null?c.v0:c.v0=D.arr(a.velocity)?a.velocity[d]:a.velocity,y,b=a.precision||(g==h?.005:Math.min(1,Math.abs(h-g)*.001));if(D.und(a.duration))if(a.decay){let I=a.decay===!0?.998:a.decay,T=Math.exp(-(1-I)*k);v=g+m/(1-I)*(1-T),p=Math.abs(c.lastPosition-v)<=b,y=m*T}else{y=c.lastVelocity==null?m:c.lastVelocity;let I=a.restVelocity||b/10,T=a.clamp?0:a.bounce,C=!D.und(T),N=g==h?c.v0>0:g<h,B,W=!1,he=1,Wt=Math.ceil(n/he);for(let Be=0;Be<Wt&&(B=Math.abs(y)>I,!(!B&&(p=Math.abs(h-v)<=b,p)));++Be){C&&(W=v==h||v>h==N,W&&(y=-y*T,v=h));let G=-a.tension*1e-6*(v-h),Y=-a.friction*.001*y,Fe=(G+Y)/a.mass;y=y+Fe*he,v=v+y*he}}else{let I=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,c.durationProgress>0&&(c.elapsedTime=a.duration*c.durationProgress,k=c.elapsedTime+=n)),I=(a.progress||0)+k/this._memoizedDuration,I=I>1?1:I<0?0:I,c.durationProgress=I),v=g+a.easing(I)*(h-g),y=(v-c.lastPosition)/n,p=I==1}c.lastVelocity=y,Number.isNaN(v)&&(console.warn("Got NaN while animating:",this),p=!0)}f&&!f[d].done&&(p=!1),p?c.done=!0:r=!1,c.setValue(v,a.round)&&(i=!0)});let u=ar(this),l=u.getValue();if(r){let c=Qt(s.to);(l!==c||i)&&!a.decay?(u.setValue(c),this._onChange(c)):i&&a.decay&&this._onChange(l),this._stop()}else i&&this._onChange(l)}set(n){return J.batchedUpdates(()=>{this._stop(),this._focus(n),this._set(n)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ii(this)){let{to:n,config:r}=this.animation;J.batchedUpdates(()=>{this._onStart(),r.decay||this._set(n,!1),this._stop()})}return this}update(n){return(this.queue||(this.queue=[])).push(n),this}start(n,r){let i;return D.und(n)?(i=this.queue||[],this.queue=[]):i=[D.obj(n)?n:{...r,to:n}],Promise.all(i.map(s=>this._update(s))).then(s=>e2(this,s))}stop(n){let{to:r}=this.animation;return this._focus(this.get()),Cu(this._state,n&&this._lastCallId),J.batchedUpdates(()=>this._stop(r,n)),this}reset(){this._update({reset:!0})}eventObserved(n){n.type=="change"?this._start():n.type=="priority"&&(this.priority=n.priority+1)}_prepareNode(n){let r=this.key||"",{to:i,from:s}=n;i=D.obj(i)?i[r]:i,(i==null||Bp(i))&&(i=void 0),s=D.obj(s)?s[r]:s,s==null&&(s=void 0);let a={to:i,from:s};return m0(this)||(n.reverse&&([i,s]=[s,i]),s=Qt(s),D.und(s)?ar(this)||this._set(i):this._set(s)),a}_update({...n},r){let{key:i,defaultProps:s}=this;n.default&&Object.assign(s,Jg(n,(f,u)=>/^on/.test(u)?j_(f,i):f)),qy(this,n,"onProps"),ff(this,"onProps",n,this);let a=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");let o=this._state;return V_(++this._lastCallId,{key:i,props:n,defaultProps:s,state:o,actions:{pause:()=>{af(this)||(Vy(this,!0),Sf(o.pauseQueue),ff(this,"onPause",Hn(this,of(this,this.animation.to)),this))},resume:()=>{af(this)&&(Vy(this,!1),ii(this)&&this._resume(),Sf(o.resumeQueue),ff(this,"onResume",Hn(this,of(this,this.animation.to)),this))},start:this._merge.bind(this,a)}}).then(f=>{if(n.loop&&f.finished&&!(r&&f.noop)){let u=W_(n);if(u)return this._update(u,!0)}return f})}_merge(n,r,i){if(r.cancel)return this.stop(!0),i(Ga(this));let s=!D.und(n.to),a=!D.und(n.from);if(s||a)if(r.callId>this._lastToId)this._lastToId=r.callId;else return i(Ga(this));let{key:o,defaultProps:f,animation:u}=this,{to:l,from:c}=u,{to:d=l,from:h=c}=n;a&&!s&&(!r.default||D.und(d))&&(d=h),r.reverse&&([d,h]=[h,d]);let p=!Ar(h,c);p&&(u.from=h),h=Qt(h);let v=!Ar(d,l);v&&this._focus(d);let k=Bp(r.to),{config:g}=u,{decay:m,velocity:y}=g;(s||a)&&(g.velocity=0),r.config&&!k&&NC(g,Yt(r.config,o),r.config!==f.config?Yt(f.config,o):void 0);let b=ar(this);if(!b||D.und(d))return i(Hn(this,!0));let I=D.und(r.reset)?a&&!r.default:!D.und(h)&&qf(r.reset,o),T=I?h:this.get(),C=Tu(d),N=D.num(C)||D.arr(C)||Sh(C),B=!k&&(!N||qf(f.immediate||r.immediate,o));if(v){let Be=Vp(d);if(Be!==b.constructor)if(B)b=this._set(C);else throw Error(`Cannot animate between ${b.constructor.name} and ${Be.name}, as the "to" prop suggests`)}let W=b.constructor,he=Cn(d),Wt=!1;if(!he){let Be=I||!m0(this)&&p;(v||Be)&&(Wt=Ar(Tu(T),C),he=!Wt),(!Ar(u.immediate,B)&&!B||!Ar(g.decay,m)||!Ar(g.velocity,y))&&(he=!0)}if(Wt&&ii(this)&&(u.changed&&!I?he=!0:he||this._stop(l)),!k&&((he||Cn(l))&&(u.values=b.getPayload(),u.toValues=Cn(d)?null:W==Su?[1]:Ut(C)),u.immediate!=B&&(u.immediate=B,!B&&!I&&this._set(l)),he)){let{onRest:Be}=u;te(LC,Y=>qy(this,r,Y));let G=Hn(this,of(this,l));Sf(this._pendingCalls,G),this._pendingCalls.add(i),u.changed&&J.batchedUpdates(()=>{var Y;u.changed=!I,Be==null||Be(G,this),I?Yt(f.onRest,G):(Y=u.onStart)==null||Y.call(u,G,this)})}I&&this._set(T),k?i(q_(r.to,r,this._state,this)):he?this._start():ii(this)&&!v?this._pendingCalls.add(i):i(B_(T))}_focus(n){let r=this.animation;n!==r.to&&(Ny(this)&&this._detach(),r.to=n,Ny(this)&&this._attach())}_attach(){let n=0,{to:r}=this.animation;Cn(r)&&(Do(r,this),Hp(r)&&(n=r.priority+1)),this.priority=n}_detach(){let{to:n}=this.animation;Cn(n)&&Eu(n,this)}_set(n,r=!0){let i=Qt(n);if(!D.und(i)){let s=ar(this);if(!s||!Ar(i,s.getValue())){let a=Vp(i);!s||s.constructor!=a?Xg(this,a.create(i)):s.setValue(i),s&&J.batchedUpdates(()=>{this._onChange(i,r)})}}return ar(this)}_onStart(){let n=this.animation;n.changed||(n.changed=!0,ff(this,"onStart",Hn(this,of(this,n.to)),this))}_onChange(n,r){r||(this._onStart(),Yt(this.animation.onChange,n,this)),Yt(this.defaultProps.onChange,n,this),super._onChange(n,r)}_start(){let n=this.animation;ar(this).reset(Qt(n.to)),n.immediate||(n.fromValues=n.values.map(r=>r.lastPosition)),ii(this)||(zy(this,!0),af(this)||this._resume())}_resume(){er.skipAnimation?this.finish():kh.start(this)}_stop(n,r){if(ii(this)){zy(this,!1);let i=this.animation;te(i.values,a=>{a.done=!0}),i.toValues&&(i.onChange=i.onPause=i.onResume=void 0),ku(this,{type:"idle",parent:this});let s=r?Ga(this.get()):Hn(this.get(),of(this,n??i.to));Sf(this._pendingCalls,s),i.changed&&(i.changed=!1,ff(this,"onRest",s,this))}}};function of(t,e){let n=Tu(e),r=Tu(t.get());return Ar(r,n)}function W_(t,e=t.loop,n=t.to){let r=Yt(e);if(r){let i=r!==!0&&Zg(r),s=(i||t).reverse,a=!i||i.reset;return Id({...t,loop:e,default:!1,pause:void 0,to:!s||Bp(n)?n:void 0,from:a?t.from:void 0,reset:a,...i})}}function Id(t){let{to:e,from:n}=t=Zg(t),r=new Set;return D.obj(e)&&By(e,r),D.obj(n)&&By(n,r),t.keys=r.size?Array.from(r):null,t}function By(t,e){Er(t,(n,r)=>n!=null&&e.add(r))}var LC=["onStart","onRest","onChange","onPause","onResume"];function qy(t,e,n){t.animation[n]=e[n]!==z_(e,n)?j_(e[n],t.key):void 0}function ff(t,e,...n){var r,i,s,a;(i=(r=t.animation)[e])==null||i.call(r,...n),(a=(s=t.defaultProps)[e])==null||a.call(s,...n)}var OC=["onStart","onChange","onRest"],$C=1,FC=class{constructor(e,n){F(this,"id",$C++);F(this,"springs",{});F(this,"queue",[]);F(this,"ref");F(this,"_flush");F(this,"_initialProps");F(this,"_lastAsyncId",0);F(this,"_active",new Set);F(this,"_changed",new Set);F(this,"_started",!1);F(this,"_item");F(this,"_state",{paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set});F(this,"_events",{onStart:new Map,onChange:new Map,onRest:new Map});this._onFrame=this._onFrame.bind(this),n&&(this._flush=n),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(e=>e.idle&&!e.isDelayed&&!e.isPaused)}get item(){return this._item}set item(e){this._item=e}get(){let e={};return this.each((n,r)=>e[r]=n.get()),e}set(e){for(let n in e){let r=e[n];D.und(r)||this.springs[n].set(r)}}update(e){return e&&this.queue.push(Id(e)),this}start(e){let{queue:n}=this;return e?n=Ut(e).map(Id):this.queue=[],this._flush?this._flush(this,n):(Y_(this,n),UC(this,n))}stop(e,n){if(e!==!!e&&(n=e),n){let r=this.springs;te(Ut(n),i=>r[i].stop(!!e))}else Cu(this._state,this._lastAsyncId),this.each(r=>r.stop(!!e));return this}pause(e){if(D.und(e))this.start({pause:!0});else{let n=this.springs;te(Ut(e),r=>n[r].pause())}return this}resume(e){if(D.und(e))this.start({pause:!1});else{let n=this.springs;te(Ut(e),r=>n[r].resume())}return this}each(e){Er(this.springs,e)}_onFrame(){let{onStart:e,onChange:n,onRest:r}=this._events,i=this._active.size>0,s=this._changed.size>0;(i&&!this._started||s&&!this._started)&&(this._started=!0,Vf(e,([f,u])=>{u.value=this.get(),f(u,this,this._item)}));let a=!i&&this._started,o=s||a&&r.size?this.get():null;s&&n.size&&Vf(n,([f,u])=>{u.value=o,f(u,this,this._item)}),a&&(this._started=!1,Vf(r,([f,u])=>{u.value=o,f(u,this,this._item)}))}eventObserved(e){if(e.type=="change")this._changed.add(e.parent),e.idle||this._active.add(e.parent);else if(e.type=="idle")this._active.delete(e.parent);else return;J.onFrame(this._onFrame)}};function UC(t,e){return Promise.all(e.map(n=>G_(t,n))).then(n=>e2(t,n))}async function G_(t,e,n){let{keys:r,to:i,from:s,loop:a,onRest:o,onResolve:f}=e,u=D.obj(e.default)&&e.default;a&&(e.loop=!1),i===!1&&(e.to=null),s===!1&&(e.from=null);let l=D.arr(i)||D.fun(i)?i:void 0;l?(e.to=void 0,e.onRest=void 0,u&&(u.onRest=void 0)):te(OC,v=>{let k=e[v];if(D.fun(k)){let g=t._events[v];e[v]=({finished:m,cancelled:y})=>{let b=g.get(k);b?(m||(b.finished=!1),y&&(b.cancelled=!0)):g.set(k,{value:null,finished:m||!1,cancelled:y||!1})},u&&(u[v]=e[v])}});let c=t._state;e.pause===!c.paused?(c.paused=e.pause,Sf(e.pause?c.pauseQueue:c.resumeQueue)):c.paused&&(e.pause=!0);let d=(r||Object.keys(t.springs)).map(v=>t.springs[v].start(e)),h=e.cancel===!0||z_(e,"cancel")===!0;(l||h&&c.asyncId)&&d.push(V_(++t._lastAsyncId,{props:e,state:c,actions:{pause:jp,resume:jp,start(v,k){h?(Cu(c,t._lastAsyncId),k(Ga(t))):(v.onRest=o,k(q_(l,v,c,t)))}}})),c.paused&&await new Promise(v=>{c.resumeQueue.add(v)});let p=e2(t,await Promise.all(d));if(a&&p.finished&&!(n&&p.noop)){let v=W_(e,a,i);if(v)return Y_(t,[v]),G_(t,v,!0)}return f&&J.batchedUpdates(()=>f(p,t,t.item)),p}function jC(t,e){let n={...t.springs};return e&&te(Ut(e),r=>{D.und(r.keys)&&(r=Id(r)),D.obj(r.to)||(r={...r,to:void 0}),Q_(n,r,i=>K_(i))}),zC(t,n),n}function zC(t,e){Er(e,(n,r)=>{t.springs[r]||(t.springs[r]=n,Do(n,t))})}function K_(t,e){let n=new MC;return n.key=t,e&&Do(n,e),n}function Q_(t,e,n){e.keys&&te(e.keys,r=>{(t[r]||(t[r]=n(r)))._prepareNode(e)})}function Y_(t,e){te(e,n=>{Q_(t.springs,n,r=>K_(r,t))})}var xh=({children:t,...e})=>{let n=w.useContext(Sd),r=e.pause||!!n.pause,i=e.immediate||!!n.immediate;e=hC(()=>({pause:r,immediate:i}),[r,i]);let{Provider:s}=Sd;return w.createElement(s,{value:e},t)},Sd=VC(xh,{});xh.Provider=Sd.Provider;xh.Consumer=Sd.Consumer;function VC(t,e){return Object.assign(t,w.createContext(e)),t.Provider._context=t,t.Consumer._context=t,t}var BC=()=>{let t=[],e=function(r){cC();let i=[];return te(t,(s,a)=>{if(D.und(r))i.push(s.start());else{let o=n(r,s,a);o&&i.push(s.start(o))}}),i};e.current=t,e.add=function(r){t.includes(r)||t.push(r)},e.delete=function(r){let i=t.indexOf(r);~i&&t.splice(i,1)},e.pause=function(){return te(t,r=>r.pause(...arguments)),this},e.resume=function(){return te(t,r=>r.resume(...arguments)),this},e.set=function(r){te(t,(i,s)=>{let a=D.fun(r)?r(s,i):r;a&&i.set(a)})},e.start=function(r){let i=[];return te(t,(s,a)=>{if(D.und(r))i.push(s.start());else{let o=this._getProps(r,s,a);o&&i.push(s.start(o))}}),i},e.stop=function(){return te(t,r=>r.stop(...arguments)),this},e.update=function(r){return te(t,(i,s)=>i.update(this._getProps(r,i,s))),this};let n=function(r,i,s){return D.fun(r)?r(s,i):r};return e._getProps=n,e};function X_(t,e,n){let r=D.fun(e)&&e,{reset:i,sort:s,trail:a=0,expires:o=!0,exitBeforeEnter:f=!1,onDestroyed:u,ref:l,config:c}=r?r():e,d=w.useMemo(()=>r||arguments.length==3?BC():void 0,[]),h=Ut(t),p=[],v=w.useRef(null),k=i?null:v.current;$a(()=>{v.current=p}),$_(()=>(te(p,G=>{d==null||d.add(G.ctrl),G.ctrl.ref=d}),()=>{te(v.current,G=>{G.expired&&clearTimeout(G.expirationId),Oy(G.ctrl,d),G.ctrl.stop(!0)})}));let g=HC(h,r?r():e,k),m=i&&v.current||[];$a(()=>te(m,({ctrl:G,item:Y,key:Fe})=>{Oy(G,d),Yt(u,Y,Fe)}));let y=[];if(k&&te(k,(G,Y)=>{G.expired?(clearTimeout(G.expirationId),m.push(G)):(Y=y[Y]=g.indexOf(G.key),~Y&&(p[Y]=G))}),te(h,(G,Y)=>{p[Y]||(p[Y]={key:g[Y],item:G,phase:"mount",ctrl:new FC},p[Y].ctrl.item=G)}),y.length){let G=-1,{leave:Y}=r?r():e;te(y,(Fe,Ke)=>{let M=k[Ke];~Fe?(G=p.indexOf(M),p[G]={...M,item:h[Fe]}):Y&&p.splice(++G,0,M)})}D.fun(s)&&p.sort((G,Y)=>s(G.item,Y.item));let b=-a,I=O_(),T=Jg(e),C=new Map,N=w.useRef(new Map),B=w.useRef(!1);te(p,(G,Y)=>{let Fe=G.key,Ke=G.phase,M=r?r():e,H,K,Ce=Yt(M.delay||0,Fe);if(Ke=="mount")H=M.enter,K="enter";else{let Pt=g.indexOf(Fe)<0;if(Ke!="leave")if(Pt)H=M.leave,K="leave";else if(H=M.update)K="update";else return;else if(!Pt)H=M.enter,K="enter";else return}if(H=Yt(H,G.item,Y),H=D.obj(H)?Zg(H):{to:H},!H.config){let Pt=c||T.config;H.config=Yt(Pt,G.item,Y,K)}b+=a;let me={...T,delay:Ce+b,ref:l,immediate:M.immediate,reset:!1,...H};if(K=="enter"&&D.und(me.from)){let Pt=r?r():e,un=D.und(Pt.initial)||k?Pt.from:Pt.initial;me.from=Yt(un,G.item,Y)}let{onResolve:pa}=me;me.onResolve=Pt=>{Yt(pa,Pt);let un=v.current,ln=un.find(Vl=>Vl.key===Fe);if(ln&&!(Pt.cancelled&&ln.phase!="update")&&ln.ctrl.idle){let Vl=un.every(ss=>ss.ctrl.idle);if(ln.phase=="leave"){let ss=Yt(o,ln.item);if(ss!==!1){let U1=ss===!0?0:ss;if(ln.expired=!0,!Vl&&U1>0){U1<=2147483647&&(ln.expirationId=setTimeout(I,U1));return}}}Vl&&un.some(ss=>ss.expired)&&(N.current.delete(ln),f&&(B.current=!0),I())}};let rr=jC(G.ctrl,me);K==="leave"&&f?N.current.set(G,{phase:K,springs:rr,payload:me}):C.set(G,{phase:K,springs:rr,payload:me})});let W=w.useContext(xh),he=gC(W),Wt=W!==he&&CC(W);$a(()=>{Wt&&te(p,G=>{G.ctrl.start({default:W})})},[W]),te(C,(G,Y)=>{if(N.current.size){let Fe=p.findIndex(Ke=>Ke.key===Y.key);p.splice(Fe,1)}}),$a(()=>{te(N.current.size?N.current:C,({phase:G,payload:Y},Fe)=>{let{ctrl:Ke}=Fe;Fe.phase=G,d==null||d.add(Ke),Wt&&G=="enter"&&Ke.start({default:W}),Y&&(xC(Ke,Y.ref),(Ke.ref||d)&&!B.current?Ke.update(Y):(Ke.start(Y),B.current&&(B.current=!1)))})},i?void 0:n);let Be=G=>w.createElement(w.Fragment,null,p.map((Y,Fe)=>{let{springs:Ke}=C.get(Y)||Y.ctrl,M=G({...Ke},Y.item,Y,Fe);return M&&M.type?w.createElement(M.type,{...M.props,key:D.str(Y.key)||D.num(Y.key)?Y.key:Y.ctrl.id,ref:M.ref}):M}));return d?[Be,d]:Be}var qC=1;function HC(t,{key:e,keys:n=e},r){if(n===null){let i=new Set;return t.map(s=>{let a=r&&r.find(o=>o.item===s&&o.phase!=="leave"&&!i.has(o));return a?(i.add(a),a.key):qC++})}return D.und(n)?t:D.fun(n)?t.map(n):Ut(n)}var WC=class extends t2{constructor(n,r){super();F(this,"key");F(this,"idle",!0);F(this,"calc");F(this,"_active",new Set);this.source=n,this.calc=_u(...r);let i=this._get(),s=Vp(i);Xg(this,s.create(i))}advance(n){let r=this._get(),i=this.get();Ar(r,i)||(ar(this).setValue(r),this._onChange(r,this.idle)),!this.idle&&Hy(this._active)&&g0(this)}_get(){let n=D.arr(this.source)?this.source.map(Qt):Ut(Qt(this.source));return this.calc(...n)}_start(){this.idle&&!Hy(this._active)&&(this.idle=!1,te(Th(this),n=>{n.done=!1}),er.skipAnimation?(J.batchedUpdates(()=>this.advance()),g0(this)):kh.start(this))}_attach(){let n=1;te(Ut(this.source),r=>{Cn(r)&&Do(r,this),Hp(r)&&(r.idle||this._active.add(r),n=Math.max(n,r.priority+1))}),this.priority=n,this._start()}_detach(){te(Ut(this.source),n=>{Cn(n)&&Eu(n,this)}),this._active.clear(),g0(this)}eventObserved(n){n.type=="change"?n.idle?this.advance():(this._active.add(n.parent),this._start()):n.type=="idle"?this._active.delete(n.parent):n.type=="priority"&&(this.priority=Ut(this.source).reduce((r,i)=>Math.max(r,(Hp(i)?i.priority:0)+1),0))}};function GC(t){return t.idle!==!1}function Hy(t){return!t.size||Array.from(t).every(GC)}function g0(t){t.idle||(t.idle=!0,te(Th(t),e=>{e.done=!0}),ku(t,{type:"idle",parent:t}))}er.assign({createStringInterpolator:M_,to:(t,e)=>new WC(t,e)});var J_=/^--/;function KC(t,e){return e==null||typeof e=="boolean"||e===""?"":typeof e=="number"&&e!==0&&!J_.test(t)&&!(Hf.hasOwnProperty(t)&&Hf[t])?e+"px":(""+e).trim()}var Wy={};function QC(t,e){if(!t.nodeType||!t.setAttribute)return!1;let n=t.nodeName==="filter"||t.parentNode&&t.parentNode.nodeName==="filter",{style:r,children:i,scrollTop:s,scrollLeft:a,viewBox:o,...f}=e,u=Object.values(f),l=Object.keys(f).map(c=>n||t.hasAttribute(c)?c:Wy[c]||(Wy[c]=c.replace(/([A-Z])/g,d=>"-"+d.toLowerCase())));i!==void 0&&(t.textContent=i);for(let c in r)if(r.hasOwnProperty(c)){let d=KC(c,r[c]);J_.test(c)?t.style.setProperty(c,d):t.style[c]=d}l.forEach((c,d)=>{t.setAttribute(c,u[d])}),s!==void 0&&(t.scrollTop=s),a!==void 0&&(t.scrollLeft=a),o!==void 0&&t.setAttribute("viewBox",o)}var Hf={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},YC=(t,e)=>t+e.charAt(0).toUpperCase()+e.substring(1),XC=["Webkit","Ms","Moz","O"];Hf=Object.keys(Hf).reduce((t,e)=>(XC.forEach(n=>t[YC(n,e)]=t[e]),t),Hf);var JC=/^(matrix|translate|scale|rotate|skew)/,ZC=/^(translate)/,ex=/^(rotate|skew)/,v0=(t,e)=>D.num(t)&&t!==0?t+e:t,$c=(t,e)=>D.arr(t)?t.every(n=>$c(n,e)):D.num(t)?t===e:parseFloat(t)===e,tx=class extends Ch{constructor({x:t,y:e,z:n,...r}){let i=[],s=[];(t||e||n)&&(i.push([t||0,e||0,n||0]),s.push(a=>[`translate3d(${a.map(o=>v0(o,"px")).join(",")})`,$c(a,0)])),Er(r,(a,o)=>{if(o==="transform")i.push([a||""]),s.push(f=>[f,f===""]);else if(JC.test(o)){if(delete r[o],D.und(a))return;let f=ZC.test(o)?"px":ex.test(o)?"deg":"";i.push(Ut(a)),s.push(o==="rotate3d"?([u,l,c,d])=>[`rotate3d(${u},${l},${c},${v0(d,f)})`,$c(d,0)]:u=>[`${o}(${u.map(l=>v0(l,f)).join(",")})`,$c(u,o.startsWith("scale")?1:0)])}}),i.length&&(r.transform=new nx(i,s)),super(r)}},nx=class extends N_{constructor(n,r){super();F(this,"_value",null);this.inputs=n,this.transforms=r}get(){return this._value||(this._value=this._get())}_get(){let n="",r=!0;return te(this.inputs,(i,s)=>{let a=Qt(i[0]),[o,f]=this.transforms[s](D.arr(a)?a:i.map(Qt));n+=" "+o,r=r&&f}),r?"none":n}observerAdded(n){n==1&&te(this.inputs,r=>te(r,i=>Cn(i)&&Do(i,this)))}observerRemoved(n){n==0&&te(this.inputs,r=>te(r,i=>Cn(i)&&Eu(i,this)))}eventObserved(n){n.type=="change"&&(this._value=null),ku(this,n)}},rx=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];er.assign({batchedUpdates:Qc.unstable_batchedUpdates,createStringInterpolator:M_,colors:VT});var ix=kC(rx,{applyAnimatedValues:QC,createAnimatedStyle:t=>new tx(t),getComponentProps:({scrollTop:t,scrollLeft:e,...n})=>n}),Z_=ix.animated;const sx="_app_v2h9g_17",y0={"app-window":"_app-window_v2h9g_17",app:sx,"not-logged":"_not-logged_v2h9g_31"},ax="_sidebar_157ql_17",ox={sidebar:ax},fx="_avatar_1bp97_137",ux="_loading_1bp97_142",lx="_icons_1bp97_145",cx="_icon_1bp97_145",dx="_active_1bp97_162",xr={"lds-roller":"_lds-roller_1bp97_41","header-sidebar":"_header-sidebar_1bp97_126",avatar:fx,loading:ux,"skeleton-image-loading-chat-header":"_skeleton-image-loading-chat-header_1bp97_1",icons:lx,icon:cx,active:dx,"logout-menu":"_logout-menu_1bp97_165","skeleton-image-loading":"_skeleton-image-loading_1bp97_1","skeleton-image-chat-body":"_skeleton-image-chat-body_1bp97_1"};function hx({fill:t,onClick:e}){return _("svg",{viewBox:"0 0 24 24",onClick:e,className:"search-button",height:"24",width:"24",preserveAspectRatio:"xMidYMid meet",xmlSpace:"preserve",children:_("path",{fill:t,d:`M19.005,3.175H4.674C3.642,3.175,3,3.789,3,4.821V21.02 l3.544-3.514h12.461c1.033,0,2.064-1.06,\r
            2.064-2.093V4.821C21.068,3.789,20.037,3.175,19.005,3.175z M14.016,13.044H7.041V11.1 h6.975V13.044z M17.016,\r
            9.044H7.041V7.1h9.975V9.044z`})})}function px({fill:t}){return _("svg",{viewBox:"0 0 24 24",height:"24",width:"24",preserveAspectRatio:"xMidYMid meet",enableBackground:"new 0 0 24 24",xmlSpace:"preserve",children:_("path",{fill:t,d:`M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,\r
            0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,\r
            0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z`})})}var Kp={},mx={get exports(){return Kp},set exports(t){Kp=t}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var a=typeof s;if(a==="string"||a==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var o=n.apply(null,s);o&&r.push(o)}}else if(a==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var f in s)e.call(s,f)&&s[f]&&r.push(f)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(mx);const Ct=Kp;function gx({setNewchatMenuStatus:t,user:e,logout:n}){const[r,i]=w.useState(!1),s=w.useRef(null);w.useEffect(()=>{function u(l){s.current&&!s.current.contains(l.target)&&i(!1)}return r?document.addEventListener("mousedown",u):document.removeEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[r]);const a=()=>{t(!0)},o=()=>{i(u=>!u),s.current.focus()},f=()=>{n()};return X("header",{className:xr["header-sidebar"],children:[_("img",{src:e.avatar,alt:"",className:`${xr.avatar} ${xr.loading}`,onError:({currentTarget:u})=>{u.onerror=null,u.src="https://www.w3schools.com/howto/img_avatar.png"}}),X("div",{className:xr.icons,children:[_("div",{className:xr.icon,onClick:a,children:_(hx,{fill:"#54656f"})}),_("div",{ref:s,className:Ct(xr.icon,{[xr.active]:r}),onClick:o,children:_(px,{fill:"#54656f"})})]}),_("div",{className:Ct(xr["logout-menu"],{[xr.active]:r}),children:_("ul",{children:_("li",{onClick:f,children:"Desconectar"})})})]})}const vx="_active_hefga_80",va={"search-container":"_search-container_hefga_17","input-container":"_input-container_hefga_30","search-button":"_search-button_hefga_53","arrow-search-button":"_arrow-search-button_hefga_63","search-close-icon":"_search-close-icon_hefga_73",active:vx};function e9({className:t,onClickFunction:e}){return _("svg",{onClick:e,viewBox:"0 0 24 24",height:"24",width:"24",className:t,preserveAspectRatio:"xMidYMid meet",enableBackground:"new 0 0 24 24",xmlSpace:"preserve",children:_("path",{d:`M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,\r
                 0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,\r
                 13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z`})})}function t9({className:t,onClickFunction:e}){return _("svg",{onClick:e,className:t,viewBox:"0 0 24 24",height:"24",width:"24",preserveAspectRatio:"xMidYMid meet",enableBackground:"new 0 0 24 24",xmlSpace:"preserve",children:_("path",{d:"M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"})})}function n9({className:t}){return _("svg",{viewBox:"0 0 24 24",height:24,width:24,className:t,preserveAspectRatio:"xMidYMid meet",enableBackground:"new 0 0 24 24",xmlSpace:"preserve",children:_("path",{d:"M17.25,7.8L16.2,6.75l-4.2,4.2l-4.2-4.2L6.75,7.8l4.2,4.2l-4.2,4.2l1.05,1.05l4.2-4.2l4.2,4.2l1.05-1.05 l-4.2-4.2L17.25,7.8z"})})}function yx({inputValue:t,setValue:e}){const[n,r]=w.useState(!1),i=w.useRef(null),s=()=>{r(!0)},a=()=>{t.length<=0&&r(!1)},o=c=>{e(c.target.value)},f=()=>{e(""),i.current.focus()},u=()=>{i.current.focus()},l=()=>{i.current.blur(),r(!1),e("")};return _("div",{className:Ct(va["search-container"],{[va.active]:n}),children:X("div",{className:va["input-container"],children:[_(e9,{onClickFunction:u,className:va["search-button"]}),_(t9,{onClickFunction:l,className:va["arrow-search-button"]}),_("input",{ref:i,onFocus:s,onBlur:a,value:t,onChange:o,placeholder:"Pesquisar conversa"}),t.length>0?_("span",{onClick:f,children:_(n9,{className:va["search-close-icon"]})}):_(mn,{})]})})}const wx="_image_1bn0t_142",bx="_loading_1bn0t_152",_x="_content_1bn0t_155",kx="_icons_1bn0t_195",Ex="_notifications_1bn0t_201",Ix="_active_1bn0t_228",Sx="_notfound_1bn0t_259",uc={"lds-roller":"_lds-roller_1bn0t_41","chat-list":"_chat-list_1bn0t_126","chat-box":"_chat-box_1bn0t_130",image:wx,loading:bx,"skeleton-image-loading":"_skeleton-image-loading_1bn0t_1",content:_x,"top-row":"_top-row_1bn0t_164","bottom-row":"_bottom-row_1bn0t_180",icons:kx,notifications:Ex,"arrow-down-icon":"_arrow-down-icon_1bn0t_218",active:Ix,notfound:Sx,"key-container":"_key-container_1bn0t_273","skeleton-image-loading-chat-header":"_skeleton-image-loading-chat-header_1bn0t_1","skeleton-image-chat-body":"_skeleton-image-chat-body_1bn0t_1"},Tx="_image_i45ik_140",Cx="_loading_i45ik_150",xx="_content_i45ik_153",Rx="_icons_i45ik_193",Ax="_notifications_i45ik_199",Nx="_active_i45ik_226",In={"lds-roller":"_lds-roller_i45ik_41","chat-box":"_chat-box_i45ik_126",image:Tx,loading:Cx,"skeleton-image-loading":"_skeleton-image-loading_i45ik_1",content:xx,"top-row":"_top-row_i45ik_162","bottom-row":"_bottom-row_i45ik_178",icons:Rx,notifications:Ax,"arrow-down-icon":"_arrow-down-icon_i45ik_216",active:Nx,"skeleton-image-loading-chat-header":"_skeleton-image-loading-chat-header_i45ik_1","skeleton-image-chat-body":"_skeleton-image-chat-body_i45ik_1"};function Dx({className:t}){return _("svg",{className:t,viewBox:"0 0 19 20",height:20,width:20,preserveAspectRatio:"xMidYMid meet",xmlSpace:"preserve",children:_("path",{d:"M3.8,6.7l5.7,5.7l5.7-5.7l1.6,1.6l-7.3,7.2L2.2,8.3L3.8,6.7z"})})}function Gy({chatBox:t,chatId:e,chatboxClick:n,index:r,latestChatList:i}){const[s,a]=w.useState(!0),o=l=>{if(l!=null){const c=l.toDate();let d=new Date;if(c.getDate()==d.getDate()&&c.getMonth()==d.getMonth()&&c.getFullYear()==d.getFullYear()){let h=c.getHours(),p=c.getMinutes();return h<10&&(h=`${0}${h}`),p<10&&(p=`${0}${p}`),`${h}:${p}`}else return`${c.getDate()}/${c.getMonth()+1}/${c.getFullYear()}`}else return""},f=()=>{a(!1)};w.useEffect(()=>{s||(a(!0),setTimeout(()=>{a(!1)},500))},[i]);const u=o(t.lastMessageDate);return X("div",{onClick:()=>n(r),onLoad:f,className:Ct(In["chat-box"],{[In.loading]:s},{[In.active]:e==t.chatId}),children:[_("div",{className:In.image,children:_("img",{src:t.image,className:In.loading,onError:({currentTarget:l})=>{l.onerror=null,l.src="https://www.w3schools.com/howto/img_avatar.png"}})}),X("div",{className:Ct(In.content,{[In.active]:t.unreadMessage}),children:[X("div",{className:In["top-row"],children:[_("h3",{children:t.title}),_("p",{children:u})]}),t.lastMessage?_(mn,{children:X("div",{className:In["bottom-row"],children:[t.lastMessage=="&#x1F3A8 Imagem"?_("span",{dangerouslySetInnerHTML:{__html:t.lastMessage}}):_("span",{children:t.lastMessage}),X("div",{className:In.icons,children:[_("span",{className:In.notifications,children:_("p",{children:"!"})}),_(Dx,{className:In["arrow-down-icon"]})]})]})}):_(mn,{})]})]})}var Px={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function Mx(t){if(typeof t=="number")return{value:t,unit:"px"};var e,n=(t.match(/^[0-9.]*/)||"").toString();n.includes(".")?e=parseFloat(n):e=parseInt(n,10);var r=(t.match(/[^0-9]*$/)||"").toString();return Px[r]?{value:e,unit:r}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}function Ky(t){var e=Mx(t);return"".concat(e.value).concat(e.unit)}var Lx=function(t,e,n){var r="react-spinners-".concat(t,"-").concat(n);if(typeof window>"u"||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var s=i.sheet,a=`
    @keyframes `.concat(r,` {
      `).concat(e,`
    }
  `);return s&&s.insertRule(a,0),r},Td=globalThis&&globalThis.__assign||function(){return Td=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Td.apply(this,arguments)},Ox=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n},$x=Lx("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");function r9(t){var e=t.loading,n=e===void 0?!0:e,r=t.color,i=r===void 0?"#000000":r,s=t.speedMultiplier,a=s===void 0?1:s,o=t.cssOverride,f=o===void 0?{}:o,u=t.size,l=u===void 0?35:u,c=Ox(t,["loading","color","speedMultiplier","cssOverride","size"]),d=Td({background:"transparent !important",width:Ky(l),height:Ky(l),borderRadius:"100%",border:"2px solid",borderTopColor:i,borderBottomColor:"transparent",borderLeftColor:i,borderRightColor:i,display:"inline-block",animation:"".concat($x," ").concat(.75/a,"s 0s infinite linear"),animationFillMode:"both"},f);return n?w.createElement("span",Td({style:d},c)):null}function Fx(t,e,n){var r=this,i=w.useRef(null),s=w.useRef(0),a=w.useRef(null),o=w.useRef([]),f=w.useRef(),u=w.useRef(),l=w.useRef(t),c=w.useRef(!0);w.useEffect(function(){l.current=t},[t]);var d=!e&&e!==0&&typeof window<"u";if(typeof t!="function")throw new TypeError("Expected a function");e=+e||0;var h=!!(n=n||{}).leading,p=!("trailing"in n)||!!n.trailing,v="maxWait"in n,k=v?Math.max(+n.maxWait||0,e):null;w.useEffect(function(){return c.current=!0,function(){c.current=!1}},[]);var g=w.useMemo(function(){var m=function(N){var B=o.current,W=f.current;return o.current=f.current=null,s.current=N,u.current=l.current.apply(W,B)},y=function(N,B){d&&cancelAnimationFrame(a.current),a.current=d?requestAnimationFrame(N):setTimeout(N,B)},b=function(N){if(!c.current)return!1;var B=N-i.current;return!i.current||B>=e||B<0||v&&N-s.current>=k},I=function(N){return a.current=null,p&&o.current?m(N):(o.current=f.current=null,u.current)},T=function N(){var B=Date.now();if(b(B))return I(B);if(c.current){var W=e-(B-i.current),he=v?Math.min(W,k-(B-s.current)):W;y(N,he)}},C=function(){var N=Date.now(),B=b(N);if(o.current=[].slice.call(arguments),f.current=r,i.current=N,B){if(!a.current&&c.current)return s.current=i.current,y(T,e),h?m(i.current):u.current;if(v)return y(T,e),m(i.current)}return a.current||y(T,e),u.current};return C.cancel=function(){a.current&&(d?cancelAnimationFrame(a.current):clearTimeout(a.current)),s.current=0,o.current=i.current=f.current=a.current=null},C.isPending=function(){return!!a.current},C.flush=function(){return a.current?I(Date.now()):u.current},C},[h,v,e,k,p,d]);return g}function Ux(t,e){return t===e}function Qy(t){return typeof t=="function"?function(){return t}:t}function jx(t,e,n){var r,i,s=n&&n.equalityFn||Ux,a=(r=w.useState(Qy(t)),i=r[1],[r[0],w.useCallback(function(c){return i(Qy(c))},[])]),o=a[0],f=a[1],u=Fx(w.useCallback(function(c){return f(c)},[f]),e,n),l=w.useRef(t);return s(l.current,t)||(u(t),l.current=t),[o,u]}function zx({inputValue:t,chatList:e,setActiveChat:n,activeChat:r}){const[i,s]=w.useState(!1),[a]=jx(t,1e3),[o,f]=w.useState(e),[u,l]=w.useState(!0);var c=!1;const d=p=>{n(e[p])},h=p=>{if(p!=null){const v=p.toDate();let k=new Date;if(v.getDate()==k.getDate()&&v.getMonth()==k.getMonth()&&v.getFullYear()==k.getFullYear()){let g=v.getHours(),m=v.getMinutes();return g<10&&(g=`${0}${g}`),m<10&&(m=`${0}${m}`),`${g}:${m}`}else return`${v.getDate()}/${v.getMonth()+1}/${v.getFullYear()}`}else return""};return w.useEffect(()=>{const p=setTimeout(()=>{s(!1)},1500);if(t.length>0)return s(!0),()=>clearTimeout(p)},[t]),w.useEffect(()=>{e.length>0&&u&&(f(e),l(!1))},[e]),w.useEffect(()=>{if(o.length>0){for(let p in e)if(e[p].chatId!=o[p].chatId){f(e);break}}},[o,e]),X("div",{className:Ct(uc["chat-list"],{[uc.loading]:i}),children:[t.length>0?_(mn,{children:e.map((p,v)=>{if(p.title.toLowerCase().includes(t.toLowerCase()))return h(p.lastMessageDate),c=!0,_("div",{className:uc["key-container"],children:_(Gy,{chatBox:p,index:v,chatId:r.chatId,latestChatList:o,chatboxClick:d})},v)})}):_(mn,{children:!i&&e.map((p,v)=>_("div",{children:_(Gy,{chatBox:p,index:v,chatId:r.chatId,latestChatList:o,chatboxClick:d})},v))}),i&&_(r9,{color:"#18af8f",loading:!0,size:20}),a.length>t.length-1&&t.length>0&&!c&&!i&&_("div",{className:uc.notfound,children:_("span",{children:"Nenhuma conversa, contato ou mensagem encontrada"})})]})}const Vx="_newchat_cwb5c_126",Bx="_content_cwb5c_147",qx="_title_cwb5c_161",Hx="_active_cwb5c_238",Wx="_heading_cwb5c_253",Gx="_image_cwb5c_274",Kx="_loading_cwb5c_284",Qx="_row_cwb5c_296",Yx="_icons_cwb5c_310",Xx="_notfound_cwb5c_313",ge={"lds-roller":"_lds-roller_cwb5c_41",newchat:Vx,content:Bx,"arrowback-container":"_arrowback-container_cwb5c_152","arrowback-button":"_arrowback-button_cwb5c_157","title-container":"_title-container_cwb5c_161",title:qx,"search-container":"_search-container_cwb5c_174","input-container":"_input-container_cwb5c_187","search-button":"_search-button_cwb5c_211","arrow-search-button":"_arrow-search-button_cwb5c_221","search-close-icon":"_search-close-icon_cwb5c_231",active:Hx,"contacts-list":"_contacts-list_cwb5c_249",heading:Wx,"contact-box":"_contact-box_cwb5c_263",image:Gx,loading:Kx,"skeleton-image-loading":"_skeleton-image-loading_cwb5c_1",row:Qx,"bottom-row":"_bottom-row_cwb5c_310",icons:Yx,"arrow-down-icon":"_arrow-down-icon_cwb5c_310",notfound:Xx,"skeleton-image-loading-chat-header":"_skeleton-image-loading-chat-header_cwb5c_1","skeleton-image-chat-body":"_skeleton-image-chat-body_cwb5c_1"};function Jx({className:t,onClick:e}){return _("svg",{onClick:e,viewBox:"0 0 24 24",className:t,height:"24",width:"24",preserveAspectRatio:"xMidYMid meet",enableBackground:"new 0 0 24 24",xmlSpace:"preserve",children:_("path",{d:"M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"})})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i9=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Zx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],o=t[n++],f=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},s9={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,o=a?t[i+1]:0,f=i+2<t.length,u=f?t[i+2]:0,l=s>>2,c=(s&3)<<4|o>>4;let d=(o&15)<<2|u>>6,h=u&63;f||(h=64,a||(d=64)),r.push(n[l],n[c],n[d],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i9(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],o=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||o==null||u==null||c==null)throw Error();const d=s<<2|o>>4;if(r.push(d),u!==64){const h=o<<4&240|u>>2;if(r.push(h),c!==64){const p=u<<6&192|c;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},eR=function(t){const e=i9(t);return s9.encodeByteArray(e,!0)},Cd=function(t){return eR(t).replace(/\./g,"")},a9=function(t){try{return s9.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function xd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!tR(n)||(t[n]=xd(t[n],e[n]));return t}function tR(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=()=>nR().__FIREBASE_DEFAULTS__,iR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&a9(t[1]);return e&&JSON.parse(e)},n2=()=>{try{return rR()||iR()||sR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},aR=()=>{var t;return(t=n2())===null||t===void 0?void 0:t.config},oR=t=>{var e;return(e=n2())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o9(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),o="";return[Cd(JSON.stringify(n)),Cd(JSON.stringify(a)),o].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function Rh(){var t;const e=(t=n2())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lR(){return typeof self=="object"&&self.self===self}function f9(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function r2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function u9(){const t=Ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cR(){return!Rh()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xu(){try{return typeof indexedDB=="object"}catch{return!1}}function dR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR="FirebaseError";class xt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hR,Object.setPrototypeOf(this,xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ra.prototype.create)}}class ra{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?pR(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new xt(i,o,r)}}function pR(t,e){return t.replace(mR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const mR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function gR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qp(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(Xy(s)&&Xy(a)){if(!Qp(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Tf(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function l9(t,e){const n=new vR(t,e);return n.subscribe.bind(n)}class vR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=w0),i.error===void 0&&(i.error=w0),i.complete===void 0&&(i.complete=w0);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function w0(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t){return t&&t._delegate?t._delegate:t}class On{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new fR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_R(e))try{this.getOrInitializeService({instanceIdentifier:us})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=us){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=us){return this.instances.has(e)}getOptions(e=us){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=us){return this.component?this.component.multipleInstances?e:us:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bR(t){return t===us?void 0:t}function _R(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i2=[];var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const c9={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},ER=oe.INFO,IR={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},SR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=IR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ah{constructor(e){this.name=e,this._logLevel=ER,this._logHandler=SR,this._userLogHandler=null,i2.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?c9[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}function TR(t){i2.forEach(e=>{e.setLogLevel(t)})}function CR(t,e){for(const n of i2){let r=null;e&&e.level&&(r=c9[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...a)=>{const o=a.map(f=>{if(f==null)return null;if(typeof f=="string")return f;if(typeof f=="number"||typeof f=="boolean")return f.toString();if(f instanceof Error)return f.message;try{return JSON.stringify(f)}catch{return null}}).filter(f=>f).join(" ");s>=(r??i.logLevel)&&t({level:oe[s].toLowerCase(),message:o,args:a,type:i.name})}}}const xR=(t,e)=>e.some(n=>t instanceof n);let Jy,Zy;function RR(){return Jy||(Jy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AR(){return Zy||(Zy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d9=new WeakMap,Yp=new WeakMap,h9=new WeakMap,b0=new WeakMap,s2=new WeakMap;function NR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Ni(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&d9.set(n,t)}).catch(()=>{}),s2.set(e,t),e}function DR(t){if(Yp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Yp.set(t,e)}let Xp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||h9.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ni(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function PR(t){Xp=t(Xp)}function MR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_0(this),e,...n);return h9.set(r,e.sort?e.sort():[e]),Ni(r)}:AR().includes(t)?function(...e){return t.apply(_0(this),e),Ni(d9.get(this))}:function(...e){return Ni(t.apply(_0(this),e))}}function LR(t){return typeof t=="function"?MR(t):(t instanceof IDBTransaction&&DR(t),xR(t,RR())?new Proxy(t,Xp):t)}function Ni(t){if(t instanceof IDBRequest)return NR(t);if(b0.has(t))return b0.get(t);const e=LR(t);return e!==t&&(b0.set(t,e),s2.set(e,t)),e}const _0=t=>s2.get(t);function OR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),o=Ni(a);return r&&a.addEventListener("upgradeneeded",f=>{r(Ni(a.result),f.oldVersion,f.newVersion,Ni(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),o.then(f=>{s&&f.addEventListener("close",()=>s()),i&&f.addEventListener("versionchange",()=>i())}).catch(()=>{}),o}const $R=["get","getKey","getAll","getAllKeys","count"],FR=["put","add","delete","clear"],k0=new Map;function e4(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(k0.get(e))return k0.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=FR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||$R.includes(n)))return;const s=async function(a,...o){const f=this.transaction(a,i?"readwrite":"readonly");let u=f.store;return r&&(u=u.index(o.shift())),(await Promise.all([u[n](...o),i&&f.done]))[0]};return k0.set(e,s),s}PR(t=>({...t,get:(e,n,r)=>e4(e,n)||t.get(e,n,r),has:(e,n)=>!!e4(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jp="@firebase/app",t4="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new Ah("@firebase/app"),zR="@firebase/app-compat",VR="@firebase/analytics-compat",BR="@firebase/analytics",qR="@firebase/app-check-compat",HR="@firebase/app-check",WR="@firebase/auth",GR="@firebase/auth-compat",KR="@firebase/database",QR="@firebase/database-compat",YR="@firebase/functions",XR="@firebase/functions-compat",JR="@firebase/installations",ZR="@firebase/installations-compat",eA="@firebase/messaging",tA="@firebase/messaging-compat",nA="@firebase/performance",rA="@firebase/performance-compat",iA="@firebase/remote-config",sA="@firebase/remote-config-compat",aA="@firebase/storage",oA="@firebase/storage-compat",fA="@firebase/firestore",uA="@firebase/firestore-compat",lA="firebase",cA="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li="[DEFAULT]",dA={[Jp]:"fire-core",[zR]:"fire-core-compat",[BR]:"fire-analytics",[VR]:"fire-analytics-compat",[HR]:"fire-app-check",[qR]:"fire-app-check-compat",[WR]:"fire-auth",[GR]:"fire-auth-compat",[KR]:"fire-rtdb",[QR]:"fire-rtdb-compat",[YR]:"fire-fn",[XR]:"fire-fn-compat",[JR]:"fire-iid",[ZR]:"fire-iid-compat",[eA]:"fire-fcm",[tA]:"fire-fcm-compat",[nA]:"fire-perf",[rA]:"fire-perf-compat",[iA]:"fire-rc",[sA]:"fire-rc-compat",[aA]:"fire-gcs",[oA]:"fire-gcs-compat",[fA]:"fire-fst",[uA]:"fire-fst-compat","fire-js":"fire-js",[lA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new Map,Ru=new Map;function Rd(t,e){try{t.container.addComponent(e)}catch(n){js.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function p9(t,e){t.container.addOrOverwriteComponent(e)}function Wr(t){const e=t.name;if(Ru.has(e))return js.debug(`There were multiple attempts to register component ${e}.`),!1;Ru.set(e,t);for(const n of Oi.values())Rd(n,t);return!0}function m9(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function hA(t,e,n=Li){m9(t,e).clearInstance(n)}function pA(){Ru.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ur=new ra("app","Firebase",mA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gA=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new On("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ur.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=cA;function a2(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Li,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ur.create("bad-app-name",{appName:String(i)});if(n||(n=aR()),!n)throw Ur.create("no-options");const s=Oi.get(i);if(s){if(Qp(n,s.options)&&Qp(r,s.config))return s;throw Ur.create("duplicate-app",{appName:i})}const a=new kR(i);for(const f of Ru.values())a.addComponent(f);const o=new gA(n,r,a);return Oi.set(i,o),o}function vA(t=Li){const e=Oi.get(t);if(!e&&t===Li)return a2();if(!e)throw Ur.create("no-app",{appName:t});return e}function yA(){return Array.from(Oi.values())}async function g9(t){const e=t.name;Oi.has(e)&&(Oi.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Pn(t,e,n){var r;let i=(r=dA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),js.warn(o.join(" "));return}Wr(new On(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function v9(t,e){if(t!==null&&typeof t!="function")throw Ur.create("invalid-log-argument");CR(t,e)}function y9(t){TR(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA="firebase-heartbeat-database",bA=1,Au="firebase-heartbeat-store";let E0=null;function w9(){return E0||(E0=OR(wA,bA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Au)}}}).catch(t=>{throw Ur.create("idb-open",{originalErrorMessage:t.message})})),E0}async function _A(t){try{return(await w9()).transaction(Au).objectStore(Au).get(b9(t))}catch(e){if(e instanceof xt)js.warn(e.message);else{const n=Ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});js.warn(n.message)}}}async function n4(t,e){try{const r=(await w9()).transaction(Au,"readwrite");return await r.objectStore(Au).put(e,b9(t)),r.done}catch(n){if(n instanceof xt)js.warn(n.message);else{const r=Ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});js.warn(r.message)}}}function b9(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA=1024,EA=30*24*60*60*1e3;class IA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=r4();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=EA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=r4(),{heartbeatsToSend:n,unsentEntries:r}=SA(this._heartbeatsCache.heartbeats),i=Cd(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function r4(){return new Date().toISOString().substring(0,10)}function SA(t,e=kA){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),i4(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),i4(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class TA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xu()?dR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _A(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return n4(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return n4(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function i4(t){return Cd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(t){Wr(new On("platform-logger",e=>new UR(e),"PRIVATE")),Wr(new On("heartbeat",e=>new IA(e),"PRIVATE")),Pn(Jp,t4,t),Pn(Jp,t4,"esm2017"),Pn("fire-js","")}CA("");const xA=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:xt,SDK_VERSION:Ki,_DEFAULT_ENTRY_NAME:Li,_addComponent:Rd,_addOrOverwriteComponent:p9,_apps:Oi,_clearComponents:pA,_components:Ru,_getProvider:m9,_registerComponent:Wr,_removeServiceInstance:hA,deleteApp:g9,getApp:vA,getApps:yA,initializeApp:a2,onLog:v9,registerVersion:Pn,setLogLevel:y9},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,n){this._delegate=e,this.firebase=n,Rd(e,new On("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),g9(this._delegate)))}_getService(e,n=Li){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Li){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Rd(this._delegate,e)}_addOrOverwriteComponent(e){p9(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},s4=new ra("app-compat","Firebase",AA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Pn,setLogLevel:y9,onLog:v9,apps:null,SDK_VERSION:Ki,INTERNAL:{registerComponent:o,removeApp:r,useAsService:f,modularAPIs:xA}};n.default=n,Object.defineProperty(n,"apps",{get:a});function r(u){delete e[u]}function i(u){if(u=u||Li,!Yy(e,u))throw s4.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,l={}){const c=a2(u,l);if(Yy(e,c.name))return e[c.name];const d=new t(c,n);return e[c.name]=d,d}function a(){return Object.keys(e).map(u=>e[u])}function o(u){const l=u.name,c=l.replace("-compat","");if(Wr(u)&&u.type==="PUBLIC"){const d=(h=i())=>{if(typeof h[c]!="function")throw s4.create("invalid-app-argument",{appName:l});return h[c]()};u.serviceProps!==void 0&&xd(d,u.serviceProps),n[c]=d,t.prototype[c]=function(...h){return this._getService.bind(this,l).apply(this,u.multipleInstances?h:[])}}return u.type==="PUBLIC"?n[c]:null}function f(u,l){return l==="serverAuth"?null:l}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _9(){const t=NA(RA);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:_9,extendNamespace:e,createSubscribe:l9,ErrorFactory:ra,deepExtend:xd});function e(n){xd(t,n)}return t}const DA=_9();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a4=new Ah("@firebase/app-compat"),PA="@firebase/app-compat",MA="0.2.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(t){Pn(PA,MA,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(lR()&&self.firebase!==void 0){a4.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&a4.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const tt=DA;LA();var OA="firebase",$A="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tt.registerVersion(OA,$A,"app-compat");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k9="firebasestorage.googleapis.com",E9="storageBucket",FA=2*60*1e3,UA=10*60*1e3,jA=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends xt{constructor(e,n,r=0){super(I0(e),`Firebase Storage: ${n} (${I0(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,De.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return I0(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ke;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ke||(ke={}));function I0(t){return"storage/"+t}function o2(){const t="An unknown error occurred, please check the error payload for server response.";return new De(ke.UNKNOWN,t)}function zA(t){return new De(ke.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function VA(t){return new De(ke.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function BA(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new De(ke.UNAUTHENTICATED,t)}function qA(){return new De(ke.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function HA(t){return new De(ke.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function I9(){return new De(ke.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function S9(){return new De(ke.CANCELED,"User canceled the upload/download.")}function WA(t){return new De(ke.INVALID_URL,"Invalid URL '"+t+"'.")}function GA(t){return new De(ke.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function KA(){return new De(ke.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+E9+"' property when initializing the app?")}function T9(){return new De(ke.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function QA(){return new De(ke.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function YA(){return new De(ke.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function XA(t){return new De(ke.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ka(t){return new De(ke.INVALID_ARGUMENT,t)}function C9(){return new De(ke.APP_DELETED,"The Firebase app was deleted.")}function x9(t){return new De(ke.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Wf(t,e){return new De(ke.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function uf(t){throw new De(ke.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Tt.makeFromUrl(e,n)}catch{return new Tt(e,"")}if(r.path==="")return r;throw GA(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const a="(/(.*))?$",o=new RegExp("^gs://"+i+a,"i"),f={bucket:1,path:3};function u(b){b.path_=decodeURIComponent(b.path)}const l="v[A-Za-z0-9_]+",c=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",h=new RegExp(`^https?://${c}/${l}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},v=n===k9?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",g=new RegExp(`^https?://${v}/${i}/${k}`,"i"),y=[{regex:o,indices:f,postModify:s},{regex:h,indices:p,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let b=0;b<y.length;b++){const I=y[b],T=I.regex.exec(e);if(T){const C=T[I.indices.bucket];let N=T[I.indices.path];N||(N=""),r=new Tt(C,N),I.postModify(r);break}}if(r==null)throw WA(e);return r}}class JA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(t,e,n){let r=1,i=null,s=null,a=!1,o=0;function f(){return o===2}let u=!1;function l(...k){u||(u=!0,e.apply(null,k))}function c(k){i=setTimeout(()=>{i=null,t(h,f())},k)}function d(){s&&clearTimeout(s)}function h(k,...g){if(u){d();return}if(k){d(),l.call(null,k,...g);return}if(f()||a){d(),l.call(null,k,...g);return}r<64&&(r*=2);let y;o===1?(o=2,y=0):y=(r+Math.random())*1e3,c(y)}let p=!1;function v(k){p||(p=!0,d(),!u&&(i!==null?(k||(o=2),clearTimeout(i),c(0)):k||(o=1)))}return c(0),s=setTimeout(()=>{a=!0,v(!0)},n),v}function eN(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(t){return t!==void 0}function nN(t){return typeof t=="function"}function rN(t){return typeof t=="object"&&!Array.isArray(t)}function Nh(t){return typeof t=="string"||t instanceof String}function o4(t){return f2()&&t instanceof Blob}function f2(){return typeof Blob<"u"&&!Rh()}function Zp(t,e,n,r){if(r<e)throw Ka(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ka(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function R9(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ts;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ts||(Ts={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A9(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e,n,r,i,s,a,o,f,u,l,c,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=a,this.callback_=o,this.errorCallback_=f,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=c,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((h,p)=>{this.resolve_=h,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new lc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const a=o=>{const f=o.loaded,u=o.lengthComputable?o.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,u)};this.progressCallback_!==null&&s.addUploadProgressListener(a),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(a),this.pendingConnection_=null;const o=s.getErrorCode()===Ts.NO_ERROR,f=s.getStatus();if(!o||A9(f,this.additionalRetryCodes_)&&this.retry){const l=s.getErrorCode()===Ts.ABORT;r(!1,new lc(!1,null,l));return}const u=this.successCodes_.indexOf(f)!==-1;r(!0,new lc(u,s))})},n=(r,i)=>{const s=this.resolve_,a=this.reject_,o=i.connection;if(i.wasSuccessCode)try{const f=this.callback_(o,o.getResponse());tN(f)?s(f):s()}catch(f){a(f)}else if(o!==null){const f=o2();f.serverResponse=o.getErrorText(),this.errorCallback_?a(this.errorCallback_(o,f)):a(f)}else if(i.canceled){const f=this.appDelete_?C9():S9();a(f)}else{const f=I9();a(f)}};this.canceled_?n(!1,new lc(!1,null,!0)):this.backoffId_=ZA(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&eN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class lc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function sN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function aN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function oN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function fN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function uN(t,e,n,r,i,s,a=!0){const o=R9(t.urlParams),f=t.url+o,u=Object.assign({},t.headers);return oN(u,e),sN(u,n),aN(u,s),fN(u,r),new iN(f,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function cN(...t){const e=lN();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(f2())return new Blob(t);throw new De(ke.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function dN(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hN(t){if(typeof atob>"u")throw XA("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class S0{constructor(e,n){this.data=e,this.contentType=n||null}}function N9(t,e){switch(t){case An.RAW:return new S0(D9(e));case An.BASE64:case An.BASE64URL:return new S0(P9(t,e));case An.DATA_URL:return new S0(mN(e),gN(e))}throw o2()}function D9(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,a=t.charCodeAt(++n);r=65536|(s&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function pN(t){let e;try{e=decodeURIComponent(t)}catch{throw Wf(An.DATA_URL,"Malformed data URL.")}return D9(e)}function P9(t,e){switch(t){case An.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Wf(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case An.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Wf(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=hN(e)}catch(i){throw i.message.includes("polyfill")?i:Wf(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class M9{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Wf(An.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=vN(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function mN(t){const e=new M9(t);return e.base64?P9(An.BASE64,e.rest):pN(e.rest)}function gN(t){return new M9(t).contentType}function vN(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n){let r=0,i="";o4(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(o4(this.data_)){const r=this.data_,i=dN(r,e,n);return i===null?null:new Dr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Dr(r,!0)}}static getBlob(...e){if(f2()){const n=e.map(r=>r instanceof Dr?r.data_:r);return new Dr(cN.apply(null,n))}else{const n=e.map(a=>Nh(a)?N9(An.RAW,a).data:a.data_);let r=0;n.forEach(a=>{r+=a.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(a=>{for(let o=0;o<a.length;o++)i[s++]=a[o]}),new Dr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u2(t){let e;try{e=JSON.parse(t)}catch{return null}return rN(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function wN(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function L9(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(t,e){return e}class Mt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||bN}}let cc=null;function _N(t){return!Nh(t)||t.length<2?t:L9(t)}function Dh(){if(cc)return cc;const t=[];t.push(new Mt("bucket")),t.push(new Mt("generation")),t.push(new Mt("metageneration")),t.push(new Mt("name","fullPath",!0));function e(s,a){return _N(a)}const n=new Mt("name");n.xform=e,t.push(n);function r(s,a){return a!==void 0?Number(a):a}const i=new Mt("size");return i.xform=r,t.push(i),t.push(new Mt("timeCreated")),t.push(new Mt("updated")),t.push(new Mt("md5Hash",null,!0)),t.push(new Mt("cacheControl",null,!0)),t.push(new Mt("contentDisposition",null,!0)),t.push(new Mt("contentEncoding",null,!0)),t.push(new Mt("contentLanguage",null,!0)),t.push(new Mt("contentType",null,!0)),t.push(new Mt("metadata","customMetadata",!0)),cc=t,cc}function kN(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Tt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function EN(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const a=n[s];r[a.local]=a.xform(r,e[a.server])}return kN(r,t),r}function O9(t,e,n){const r=u2(e);return r===null?null:EN(t,r,n)}function IN(t,e,n,r){const i=u2(e);if(i===null||!Nh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const a=encodeURIComponent;return s.split(",").map(u=>{const l=t.bucket,c=t.fullPath,d="/b/"+a(l)+"/o/"+a(c),h=Qi(d,n,r),p=R9({alt:"media",token:u});return h+p})[0]}function l2(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f4="prefixes",u4="items";function SN(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[f4])for(const i of n[f4]){const s=i.replace(/\/$/,""),a=t._makeStorageReference(new Tt(e,s));r.prefixes.push(a)}if(n[u4])for(const i of n[u4]){const s=t._makeStorageReference(new Tt(e,i.name));r.items.push(s)}return r}function TN(t,e,n){const r=u2(n);return r===null?null:SN(t,e,r)}class Xr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t){if(!t)throw o2()}function Ph(t,e){function n(r,i){const s=O9(t,i,e);return br(s!==null),s}return n}function CN(t,e){function n(r,i){const s=TN(t,e,i);return br(s!==null),s}return n}function xN(t,e){function n(r,i){const s=O9(t,i,e);return br(s!==null),IN(s,i,t.host,t._protocol)}return n}function Mo(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=qA():i=BA():n.getStatus()===402?i=VA(t.bucket):n.getStatus()===403?i=HA(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Mh(t){const e=Mo(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=zA(t.path)),s.serverResponse=i.serverResponse,s}return n}function $9(t,e,n){const r=e.fullServerUrl(),i=Qi(r,t.host,t._protocol),s="GET",a=t.maxOperationRetryTime,o=new Xr(i,s,Ph(t,n),a);return o.errorHandler=Mh(e),o}function RN(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const a=e.bucketOnlyServerUrl(),o=Qi(a,t.host,t._protocol),f="GET",u=t.maxOperationRetryTime,l=new Xr(o,f,CN(t,e.bucket),u);return l.urlParams=s,l.errorHandler=Mo(e),l}function AN(t,e,n){const r=e.fullServerUrl(),i=Qi(r,t.host,t._protocol),s="GET",a=t.maxOperationRetryTime,o=new Xr(i,s,xN(t,n),a);return o.errorHandler=Mh(e),o}function NN(t,e,n,r){const i=e.fullServerUrl(),s=Qi(i,t.host,t._protocol),a="PATCH",o=l2(n,r),f={"Content-Type":"application/json; charset=utf-8"},u=t.maxOperationRetryTime,l=new Xr(s,a,Ph(t,r),u);return l.headers=f,l.body=o,l.errorHandler=Mh(e),l}function DN(t,e){const n=e.fullServerUrl(),r=Qi(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function a(f,u){}const o=new Xr(r,i,a,s);return o.successCodes=[200,204],o.errorHandler=Mh(e),o}function PN(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function F9(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=PN(null,e)),r}function MN(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function o(){let y="";for(let b=0;b<2;b++)y=y+Math.random().toString().slice(2);return y}const f=o();a["Content-Type"]="multipart/related; boundary="+f;const u=F9(e,r,i),l=l2(u,n),c="--"+f+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+f+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+f+"--",h=Dr.getBlob(c,r,d);if(h===null)throw T9();const p={name:u.fullPath},v=Qi(s,t.host,t._protocol),k="POST",g=t.maxUploadRetryTime,m=new Xr(v,k,Ph(t,n),g);return m.urlParams=p,m.headers=a,m.body=h.uploadData(),m.errorHandler=Mo(e),m}class Ad{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function c2(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{br(!1)}return br(!!n&&(e||["active"]).indexOf(n)!==-1),n}function LN(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),a=F9(e,r,i),o={name:a.fullPath},f=Qi(s,t.host,t._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},c=l2(a,n),d=t.maxUploadRetryTime;function h(v){c2(v);let k;try{k=v.getResponseHeader("X-Goog-Upload-URL")}catch{br(!1)}return br(Nh(k)),k}const p=new Xr(f,u,h,d);return p.urlParams=o,p.headers=l,p.body=c,p.errorHandler=Mo(e),p}function ON(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const l=c2(u,["active","final"]);let c=null;try{c=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{br(!1)}c||br(!1);const d=Number(c);return br(!isNaN(d)),new Ad(d,r.size(),l==="final")}const a="POST",o=t.maxUploadRetryTime,f=new Xr(n,a,s,o);return f.headers=i,f.errorHandler=Mo(e),f}const l4=256*1024;function $N(t,e,n,r,i,s,a,o){const f=new Ad(0,0);if(a?(f.current=a.current,f.total=a.total):(f.current=0,f.total=r.size()),r.size()!==f.total)throw QA();const u=f.total-f.current;let l=u;i>0&&(l=Math.min(l,i));const c=f.current,d=c+l;let h="";l===0?h="finalize":u===l?h="upload, finalize":h="upload";const p={"X-Goog-Upload-Command":h,"X-Goog-Upload-Offset":`${f.current}`},v=r.slice(c,d);if(v===null)throw T9();function k(b,I){const T=c2(b,["active","final"]),C=f.current+l,N=r.size();let B;return T==="final"?B=Ph(e,s)(b,I):B=null,new Ad(C,N,T==="final",B)}const g="POST",m=e.maxUploadRetryTime,y=new Xr(n,g,k,m);return y.headers=p,y.body=v.uploadData(),y.progressCallback=o||null,y.errorHandler=Mo(t),y}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN={STATE_CHANGED:"state_changed"},$t={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function T0(t){switch(t){case"running":case"pausing":case"canceling":return $t.RUNNING;case"paused":return $t.PAUSED;case"success":return $t.SUCCESS;case"canceled":return $t.CANCELED;case"error":return $t.ERROR;default:return $t.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e,n,r){if(nN(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class jN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ts.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ts.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ts.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw uf("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw uf("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw uf("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw uf("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw uf("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class zN extends jN{initXhr(){this.xhr_.responseType="text"}}function fr(){return new zN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U9{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Dh(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(ke.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(A9(i.status,[]))if(s)i=I9();else{this.sleepTime=Math.max(this.sleepTime*2,jA),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(ke.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=LN(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,fr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=ON(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,fr,n,r);this._request=s,s.getPromise().then(a=>{a=a,this._request=void 0,this._updateProgress(a.current),this._needToFetchStatus=!1,a.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=l4*this._chunkMultiplier,n=new Ad(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let a;try{a=$N(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(f){this._error=f,this._transition("error");return}const o=this._ref.storage._makeRequest(a,fr,i,s,!1);this._request=o,o.getPromise().then(f=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(f.current),f.finalized?(this._metadata=f.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){l4*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=$9(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,fr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=MN(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,fr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=S9(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=T0(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new UN(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(T0(this._state)){case $t.SUCCESS:ya(this._resolve.bind(null,this.snapshot))();break;case $t.CANCELED:case $t.ERROR:const n=this._reject;ya(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(T0(this._state)){case $t.RUNNING:case $t.PAUSED:e.next&&ya(e.next.bind(e,this.snapshot))();break;case $t.SUCCESS:e.complete&&ya(e.complete.bind(e))();break;case $t.CANCELED:case $t.ERROR:e.error&&ya(e.error.bind(e,this._error))();break;default:e.error&&ya(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n){this._service=e,n instanceof Tt?this._location=n:this._location=Tt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new zs(e,n)}get root(){const e=new Tt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return L9(this._location.path)}get storage(){return this._service}get parent(){const e=yN(this._location.path);if(e===null)return null;const n=new Tt(this._location.bucket,e);return new zs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw x9(e)}}function VN(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new U9(t,new Dr(e),n)}function BN(t){const e={prefixes:[],items:[]};return j9(t,e).then(()=>e)}async function j9(t,e,n){const i=await z9(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await j9(t,e,i.nextPageToken)}function z9(t,e){e!=null&&typeof e.maxResults=="number"&&Zp("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=RN(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,fr)}function qN(t){t._throwIfRoot("getMetadata");const e=$9(t.storage,t._location,Dh());return t.storage.makeRequestWithTokens(e,fr)}function HN(t,e){t._throwIfRoot("updateMetadata");const n=NN(t.storage,t._location,e,Dh());return t.storage.makeRequestWithTokens(n,fr)}function WN(t){t._throwIfRoot("getDownloadURL");const e=AN(t.storage,t._location,Dh());return t.storage.makeRequestWithTokens(e,fr).then(n=>{if(n===null)throw YA();return n})}function GN(t){t._throwIfRoot("deleteObject");const e=DN(t.storage,t._location);return t.storage.makeRequestWithTokens(e,fr)}function V9(t,e){const n=wN(t._location.path,e),r=new Tt(t._location.bucket,n);return new zs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(t){return/^[A-Za-z]+:\/\//.test(t)}function QN(t,e){return new zs(t,e)}function B9(t,e){if(t instanceof d2){const n=t;if(n._bucket==null)throw KA();const r=new zs(n,n._bucket);return e!=null?B9(r,e):r}else return e!==void 0?V9(t,e):t}function YN(t,e){if(e&&KN(e)){if(t instanceof d2)return QN(t,e);throw Ka("To use ref(service, url), the first argument must be a Storage instance.")}else return B9(t,e)}function c4(t,e){const n=e==null?void 0:e[E9];return n==null?null:Tt.makeFromBucketSpec(n,t)}function XN(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:o9(i,t.app.options.projectId))}class d2{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=k9,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=FA,this._maxUploadRetryTime=UA,this._requests=new Set,i!=null?this._bucket=Tt.makeFromBucketSpec(i,this._host):this._bucket=c4(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Tt.makeFromBucketSpec(this._url,e):this._bucket=c4(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Zp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Zp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new zs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new JA(C9());{const a=uN(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const d4="@firebase/storage",h4="0.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN="storage";function q9(t,e,n){return t=j(t),VN(t,e,n)}function ZN(t){return t=j(t),qN(t)}function eD(t,e){return t=j(t),HN(t,e)}function tD(t,e){return t=j(t),z9(t,e)}function nD(t){return t=j(t),BN(t)}function H9(t){return t=j(t),WN(t)}function rD(t){return t=j(t),GN(t)}function em(t,e){return t=j(t),YN(t,e)}function iD(t,e){return V9(t,e)}function sD(t,e,n,r={}){XN(t,e,n,r)}function aD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new d2(n,r,i,e,Ki)}function oD(){Wr(new On(JN,aD,"PUBLIC").setMultipleInstances(!0)),Pn(d4,h4,""),Pn(d4,h4,"esm2017")}oD();let dc;const fD=new Uint8Array(16);function uD(){if(!dc&&(dc=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!dc))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return dc(fD)}const dt=[];for(let t=0;t<256;++t)dt.push((t+256).toString(16).slice(1));function lD(t,e=0){return(dt[t[e+0]]+dt[t[e+1]]+dt[t[e+2]]+dt[t[e+3]]+"-"+dt[t[e+4]]+dt[t[e+5]]+"-"+dt[t[e+6]]+dt[t[e+7]]+"-"+dt[t[e+8]]+dt[t[e+9]]+"-"+dt[t[e+10]]+dt[t[e+11]]+dt[t[e+12]]+dt[t[e+13]]+dt[t[e+14]]+dt[t[e+15]]).toLowerCase()}const cD=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),p4={randomUUID:cD};function dD(t,e,n){if(p4.randomUUID&&!e&&!t)return p4.randomUUID();t=t||{};const r=t.random||(t.rng||uD)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return lD(r)}function h2(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const lf={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},wa={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hD(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function W9(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pD=hD,mD=W9,G9=new ra("auth","Firebase",W9());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m4=new Ah("@firebase/auth");function Fc(t,...e){m4.logLevel<=oe.ERROR&&m4.error(`Auth (${Ki}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,...e){throw p2(t,...e)}function vt(t,...e){return p2(t,...e)}function K9(t,e,n){const r=Object.assign(Object.assign({},mD()),{[e]:n});return new ra("auth","Firebase",r).create(e,{appName:t.name})}function Lo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&bt(t,"argument-error"),K9(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function p2(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return G9.create(t,...e)}function P(t,e,...n){if(!t)throw p2(e,...n)}function pr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fc(e),new Error(e)}function tr(t,e){t||pr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g4=new Map;function pn(t){tr(t instanceof Function,"Expected a class definition");let e=g4.get(t);return e?(tr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,g4.set(t,e),e)}function gD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function m2(){return v4()==="http:"||v4()==="https:"}function v4(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(m2()||f9()||"connection"in navigator)?navigator.onLine:!0}function yD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n){this.shortDelay=e,this.longDelay=n,tr(n>e,"Short delay should be less than long delay!"),this.isMobile=uR()||r2()}get(){return vD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g2(t,e){tr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q9{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;pr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;pr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;pr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD=new cl(3e4,6e4);function et(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ut(t,e,n,r,i={}){return Y9(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const o=Po(Object.assign({key:t.config.apiKey},a)).slice(1),f=await t._getAdditionalHeaders();return f["Content-Type"]="application/json",t.languageCode&&(f["X-Firebase-Locale"]=t.languageCode),Q9.fetch()(X9(t,t.config.apiHost,n,o),Object.assign({method:e,headers:f,referrerPolicy:"no-referrer"},s))})}async function Y9(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},wD),e);try{const i=new _D(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Cf(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[f,u]=o.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cf(t,"credential-already-in-use",a);if(f==="EMAIL_EXISTS")throw Cf(t,"email-already-in-use",a);if(f==="USER_DISABLED")throw Cf(t,"user-disabled",a);const l=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw K9(t,l,u);bt(t,l)}}catch(i){if(i instanceof xt)throw i;bt(t,"network-request-failed")}}async function Jr(t,e,n,r,i={}){const s=await ut(t,e,n,r,i);return"mfaPendingCredential"in s&&bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function X9(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?g2(t.config,i):`${t.config.apiScheme}://${i}`}class _D{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vt(this.auth,"network-request-failed")),bD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Cf(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kD(t,e){return ut(t,"POST","/v1/accounts:delete",e)}async function ED(t,e){return ut(t,"POST","/v1/accounts:update",e)}async function ID(t,e){return ut(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SD(t,e=!1){const n=j(t),r=await n.getIdToken(e),i=Lh(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Gf(C0(i.auth_time)),issuedAtTime:Gf(C0(i.iat)),expirationTime:Gf(C0(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function C0(t){return Number(t)*1e3}function Lh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Fc("JWT malformed, contained fewer than 3 sections"),null;try{const i=a9(n);return i?JSON.parse(i):(Fc("Failed to decode base64 JWT payload"),null)}catch(i){return Fc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function TD(t){const e=Lh(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xt&&CD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function CD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J9{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gf(this.lastLoginAt),this.creationTime=Gf(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Du(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Gr(t,ID(n,{idToken:r}));P(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ND(s.providerUserInfo):[],o=AD(t.providerData,a),f=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),l=f?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new J9(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,c)}async function RD(t){const e=j(t);await Du(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ND(t){return t.map(e=>{var{providerId:n}=e,r=h2(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DD(t,e){const n=await Y9(t,{},async()=>{const r=Po({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=X9(t,i,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Q9.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):TD(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return P(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await DD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new Pu;return r&&(P(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(P(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pu,this.toJSON())}_performRefresh(){return pr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cs{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=h2(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new J9(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Gr(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return SD(this,e)}reload(){return RD(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Cs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Du(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Gr(this,kD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,o,f,u,l;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,h=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(a=n.photoURL)!==null&&a!==void 0?a:void 0,v=(o=n.tenantId)!==null&&o!==void 0?o:void 0,k=(f=n._redirectEventId)!==null&&f!==void 0?f:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:y,emailVerified:b,isAnonymous:I,providerData:T,stsTokenManager:C}=n;P(y&&C,e,"internal-error");const N=Pu.fromJSON(this.name,C);P(typeof y=="string",e,"internal-error"),si(c,e.name),si(d,e.name),P(typeof b=="boolean",e,"internal-error"),P(typeof I=="boolean",e,"internal-error"),si(h,e.name),si(p,e.name),si(v,e.name),si(k,e.name),si(g,e.name),si(m,e.name);const B=new Cs({uid:y,auth:e,email:d,emailVerified:b,displayName:c,isAnonymous:I,photoURL:p,phoneNumber:h,tenantId:v,stsTokenManager:N,createdAt:g,lastLoginAt:m});return T&&Array.isArray(T)&&(B.providerData=T.map(W=>Object.assign({},W))),k&&(B._redirectEventId=k),B}static async _fromIdTokenResponse(e,n,r=!1){const i=new Pu;i.updateFromServerResponse(n);const s=new Cs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Du(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z9{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Z9.type="NONE";const uo=Z9;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(t,e,n){return`firebase:${t}:${e}:${n}`}class Qa{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=xs(this.userKey,i.apiKey,s),this.fullPersistenceKey=xs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qa(pn(uo),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||pn(uo);const a=xs(r,e.config.apiKey,e.name);let o=null;for(const u of n)try{const l=await u._get(a);if(l){const c=Cs._fromJSON(e,l);u!==s&&(o=c),s=u;break}}catch{}const f=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!f.length?new Qa(s,e,r):(s=f[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(a)}catch{}})),new Qa(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y4(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nk(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ek(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rk(e))return"Blackberry";if(ik(e))return"Webos";if(v2(e))return"Safari";if((e.includes("chrome/")||tk(e))&&!e.includes("edge/"))return"Chrome";if(dl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ek(t=Ne()){return/firefox\//i.test(t)}function v2(t=Ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tk(t=Ne()){return/crios\//i.test(t)}function nk(t=Ne()){return/iemobile/i.test(t)}function dl(t=Ne()){return/android/i.test(t)}function rk(t=Ne()){return/blackberry/i.test(t)}function ik(t=Ne()){return/webos/i.test(t)}function Oo(t=Ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function PD(t=Ne()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function MD(t=Ne()){var e;return Oo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function LD(){return u9()&&document.documentMode===10}function sk(t=Ne()){return Oo(t)||dl(t)||ik(t)||rk(t)||/windows phone/i.test(t)||nk(t)}function OD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(t,e=[]){let n;switch(t){case"Browser":n=y4(Ne());break;case"Worker":n=`${y4(Ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ki}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,o)=>{try{const f=e(s);a(f)}catch(f){o(f)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new w4(this),this.idTokenSubscription=new w4(this),this.beforeStateQueue=new $D(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=G9,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Qa.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=i==null?void 0:i._redirectEventId,f=await this.tryRedirectSignIn(e);(!a||a===o)&&(f!=null&&f.user)&&(i=f.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Du(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?j(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ra("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await Qa.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),a=this._isInitialized?Promise.resolve():this._initializationPromise;return P(a,this,"internal-error"),a.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ak(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ot(t){return j(t)}class w4{constructor(e){this.auth=e,this.observer=null,this.addObserver=l9(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function UD(t,e,n){const r=ot(t);P(r._canInitEmulator,r,"emulator-config-failed"),P(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=ok(e),{host:a,port:o}=jD(e),f=o===null?"":`:${o}`;r.config.emulator={url:`${s}//${a}${f}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||zD()}function ok(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jD(t){const e=ok(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:b4(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:b4(a)}}}function b4(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pr("not implemented")}_getIdTokenResponse(e){return pr("not implemented")}_linkToIdToken(e,n){return pr("not implemented")}_getReauthenticationResolver(e){return pr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fk(t,e){return ut(t,"POST","/v1/accounts:resetPassword",et(t,e))}async function uk(t,e){return ut(t,"POST","/v1/accounts:update",e)}async function VD(t,e){return ut(t,"POST","/v1/accounts:update",et(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BD(t,e){return Jr(t,"POST","/v1/accounts:signInWithPassword",et(t,e))}async function Oh(t,e){return ut(t,"POST","/v1/accounts:sendOobCode",et(t,e))}async function qD(t,e){return Oh(t,e)}async function HD(t,e){return Oh(t,e)}async function WD(t,e){return Oh(t,e)}async function GD(t,e){return Oh(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KD(t,e){return Jr(t,"POST","/v1/accounts:signInWithEmailLink",et(t,e))}async function QD(t,e){return Jr(t,"POST","/v1/accounts:signInWithEmailLink",et(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu extends $o{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Mu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Mu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return BD(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return KD(e,{email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return uk(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return QD(e,{idToken:n,email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(t,e){return Jr(t,"POST","/v1/accounts:signInWithIdp",et(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD="http://localhost";class Ir extends $o{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=h2(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Ir(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return jr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,jr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,jr(e,n)}buildRequest(){const e={requestUri:YD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Po(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XD(t,e){return ut(t,"POST","/v1/accounts:sendVerificationCode",et(t,e))}async function JD(t,e){return Jr(t,"POST","/v1/accounts:signInWithPhoneNumber",et(t,e))}async function ZD(t,e){const n=await Jr(t,"POST","/v1/accounts:signInWithPhoneNumber",et(t,e));if(n.temporaryProof)throw Cf(t,"account-exists-with-different-credential",n);return n}const eP={USER_NOT_FOUND:"user-not-found"};async function tP(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Jr(t,"POST","/v1/accounts:signInWithPhoneNumber",et(t,n),eP)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends $o{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Rs({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Rs({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return JD(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return ZD(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return tP(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Rs({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rP(t){const e=Fa(Tf(t)).link,n=e?Fa(Tf(e)).deep_link_id:null,r=Fa(Tf(t)).deep_link_id;return(r?Fa(Tf(r)).link:null)||r||n||e||t}class $h{constructor(e){var n,r,i,s,a,o;const f=Fa(Tf(e)),u=(n=f.apiKey)!==null&&n!==void 0?n:null,l=(r=f.oobCode)!==null&&r!==void 0?r:null,c=nP((i=f.mode)!==null&&i!==void 0?i:null);P(u&&l&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=l,this.continueUrl=(s=f.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=f.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(o=f.tenantId)!==null&&o!==void 0?o:null}static parseLink(e){const n=rP(e);try{return new $h(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(){this.providerId=Yi.PROVIDER_ID}static credential(e,n){return Mu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=$h.parseLink(n);return P(r,"argument-error"),Mu._fromEmailAndCode(e,r.code,r.tenantId)}}Yi.PROVIDER_ID="password";Yi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends Zr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ya extends Fo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return P("providerId"in n&&"signInMethod"in n,"argument-error"),Ir._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return P(e.idToken||e.accessToken,"argument-error"),Ir._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ya.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ya.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:a,providerId:o}=e;if(!r&&!i&&!n&&!s||!o)return null;try{return new Ya(o)._credential({idToken:n,accessToken:r,nonce:a,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Fo{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";ur.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Fo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ir._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.GOOGLE_SIGN_IN_METHOD="google.com";lr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Fo{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.GITHUB_SIGN_IN_METHOD="github.com";cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP="http://localhost";class lo extends $o{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return jr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,jr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,jr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new lo(r,s)}static _create(e,n){return new lo(e,n)}buildRequest(){return{requestUri:iP,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP="saml.";class Nd extends Zr{constructor(e){P(e.startsWith(sP),"argument-error"),super(e)}static credentialFromResult(e){return Nd.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Nd.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=lo.fromJSON(e);return P(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return lo._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Fo{constructor(){super("twitter.com")}static credential(e,n){return Ir._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lk(t,e){return Jr(t,"POST","/v1/accounts:signUp",et(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Cs._fromIdTokenResponse(e,r,i),a=_4(r);return new $n({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=_4(r);return new $n({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function _4(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aP(t){var e;const n=ot(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new $n({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await lk(n,{returnSecureToken:!0}),i=await $n._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd extends xt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Dd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Dd(e,n,r,i)}}function ck(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Dd._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oP(t,e){const n=j(t);await Fh(!0,n,e);const{providerUserInfo:r}=await ED(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=dk(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function y2(t,e,n=!1){const r=await Gr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $n._forOperation(t,"link",r)}async function Fh(t,e,n){await Du(e);const r=dk(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";P(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hk(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Gr(t,ck(r,i,e,t),n);P(s.idToken,r,"internal-error");const a=Lh(s.idToken);P(a,r,"internal-error");const{sub:o}=a;return P(t.uid===o,r,"user-mismatch"),$n._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pk(t,e,n=!1){const r="signIn",i=await ck(t,r,e),s=await $n._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Uh(t,e){return pk(ot(t),e)}async function mk(t,e){const n=j(t);return await Fh(!1,n,e.providerId),y2(n,e)}async function gk(t,e){return hk(j(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fP(t,e){return Jr(t,"POST","/v1/accounts:signInWithCustomToken",et(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uP(t,e){const n=ot(t),r=await fP(n,{token:e,returnSecureToken:!0}),i=await $n._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?w2._fromServerResponse(e,n):bt(e,"internal-error")}}class w2 extends jh{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new w2(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(t,e,n){var r;P(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),P(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(P(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(P(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lP(t,e,n){const r=j(t),i={requestType:"PASSWORD_RESET",email:e};n&&zh(r,i,n),await HD(r,i)}async function cP(t,e,n){await fk(j(t),{oobCode:e,newPassword:n})}async function dP(t,e){await VD(j(t),{oobCode:e})}async function vk(t,e){const n=j(t),r=await fk(n,{oobCode:e}),i=r.requestType;switch(P(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":P(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":P(r.mfaInfo,n,"internal-error");default:P(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=jh._fromServerResponse(ot(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function hP(t,e){const{data:n}=await vk(j(t),e);return n.email}async function pP(t,e,n){const r=ot(t),i=await lk(r,{returnSecureToken:!0,email:e,password:n}),s=await $n._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function mP(t,e,n){return Uh(j(t),Yi.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gP(t,e,n){const r=j(t),i={requestType:"EMAIL_SIGNIN",email:e};P(n.handleCodeInApp,r,"argument-error"),n&&zh(r,i,n),await WD(r,i)}function vP(t,e){const n=$h.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function yP(t,e,n){const r=j(t),i=Yi.credentialWithLink(e,n||Nu());return P(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Uh(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wP(t,e){return ut(t,"POST","/v1/accounts:createAuthUri",et(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bP(t,e){const n=m2()?Nu():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await wP(j(t),r);return i||[]}async function _P(t,e){const n=j(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&zh(n.auth,i,e);const{email:s}=await qD(n.auth,i);s!==t.email&&await t.reload()}async function kP(t,e,n){const r=j(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&zh(r.auth,s,n);const{email:a}=await GD(r.auth,s);a!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EP(t,e){return ut(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=j(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},a=await Gr(r,EP(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const o=r.providerData.find(({providerId:f})=>f==="password");o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function SP(t,e){return yk(j(t),e,null)}function TP(t,e){return yk(j(t),null,e)}async function yk(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const a=await Gr(t,uk(r,s));await t._updateTokensIfNecessary(a,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const a=(n=(e=Lh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(a){const o=a!=="anonymous"&&a!=="custom"?a:null;return new Xa(s,o)}}if(!r)return null;switch(r){case"facebook.com":return new xP(s,i);case"github.com":return new RP(s,i);case"google.com":return new AP(s,i);case"twitter.com":return new NP(s,i,t.screenName||null);case"custom":case"anonymous":return new Xa(s,null);default:return new Xa(s,r,i)}}class Xa{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class wk extends Xa{constructor(e,n,r,i){super(e,n,r),this.username=i}}class xP extends Xa{constructor(e,n){super(e,"facebook.com",n)}}class RP extends wk{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class AP extends Xa{constructor(e,n){super(e,"google.com",n)}}class NP extends wk{constructor(e,n,r){super(e,"twitter.com",n,r)}}function DP(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:CP(n)}class ws{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new ws("enroll",e,n)}static _fromMfaPendingCredential(e){return new ws("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return ws._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return ws._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=ot(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(o=>jh._fromServerResponse(r,o));P(i.mfaPendingCredential,r,"internal-error");const a=ws._fromMfaPendingCredential(i.mfaPendingCredential);return new b2(a,s,async o=>{const f=await o._process(r,a);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:f.idToken,refreshToken:f.refreshToken});switch(n.operationType){case"signIn":const l=await $n._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return P(n.user,r,"internal-error"),$n._forOperation(n.user,n.operationType,u);default:bt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function PP(t,e){var n;const r=j(t),i=e;return P(e.customData.operationType,r,"argument-error"),P((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),b2._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MP(t,e){return ut(t,"POST","/v2/accounts/mfaEnrollment:start",et(t,e))}function LP(t,e){return ut(t,"POST","/v2/accounts/mfaEnrollment:finalize",et(t,e))}function OP(t,e){return ut(t,"POST","/v2/accounts/mfaEnrollment:withdraw",et(t,e))}class _2{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>jh._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new _2(e)}async getSession(){return ws._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Gr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Gr(this.user,OP(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const x0=new WeakMap;function $P(t){const e=j(t);return x0.has(e)||x0.set(e,_2._fromUser(e)),x0.get(e)}const Pd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pd,"1"),this.storage.removeItem(Pd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(){const t=Ne();return v2(t)||Oo(t)}const UP=1e3,jP=10;class _k extends bk{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=FP()&&OD(),this.fallbackToPolling=sk(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,o,f)=>{this.notifyListeners(a,f)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);LD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,jP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},UP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_k.type="LOCAL";const k2=_k;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk extends bk{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}kk.type="SESSION";const Vs=kk;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Vh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async u=>u(n.origin,s)),f=await zP(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:f})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,f)=>{const u=hl("",20);i.port1.start();const l=setTimeout(()=>{f(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(c){const d=c;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(d.data.response);break;default:clearTimeout(l),clearTimeout(s),f(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return window}function BP(t){Xe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E2(){return typeof Xe().WorkerGlobalScope<"u"&&typeof Xe().importScripts=="function"}async function qP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function WP(){return E2()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek="firebaseLocalStorageDb",GP=1,Md="firebaseLocalStorage",Ik="fbase_key";class pl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bh(t,e){return t.transaction([Md],e?"readwrite":"readonly").objectStore(Md)}function KP(){const t=indexedDB.deleteDatabase(Ek);return new pl(t).toPromise()}function tm(){const t=indexedDB.open(Ek,GP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Md,{keyPath:Ik})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Md)?e(r):(r.close(),await KP(),e(await tm()))})})}async function k4(t,e,n){const r=Bh(t,!0).put({[Ik]:e,value:n});return new pl(r).toPromise()}async function QP(t,e){const n=Bh(t,!1).get(e),r=await new pl(n).toPromise();return r===void 0?null:r.value}function E4(t,e){const n=Bh(t,!0).delete(e);return new pl(n).toPromise()}const YP=800,XP=3;class Sk{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>XP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return E2()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vh._getInstance(WP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qP(),!this.activeServiceWorker)return;this.sender=new VP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||HP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tm();return await k4(e,Pd,"1"),await E4(e,Pd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>k4(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>E4(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Bh(i,!1).getAll();return new pl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sk.type="LOCAL";const Lu=Sk;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(t,e){return ut(t,"POST","/v2/accounts/mfaSignIn:start",et(t,e))}function ZP(t,e){return ut(t,"POST","/v2/accounts/mfaSignIn:finalize",et(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eM(t){return(await ut(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Tk(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",tM().appendChild(r)})}function Ck(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nM=500,rM=6e4,hc=1e12;class iM{constructor(e){this.auth=e,this.counter=hc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new sM(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||hc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||hc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||hc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class sM{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;P(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=aM(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},rM)},nM))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function aM(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=Ck("rcb"),oM=new cl(3e4,6e4),fM="https://www.google.com/recaptcha/api.js?";class uM{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Xe().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return P(lM(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Xe().grecaptcha):new Promise((r,i)=>{const s=Xe().setTimeout(()=>{i(vt(e,"network-request-failed"))},oM.get());Xe()[R0]=()=>{Xe().clearTimeout(s),delete Xe()[R0];const o=Xe().grecaptcha;if(!o){i(vt(e,"internal-error"));return}const f=o.render;o.render=(u,l)=>{const c=f(u,l);return this.counter++,c},this.hostLanguage=n,r(o)};const a=`${fM}?${Po({onload:R0,render:"explicit",hl:n})}`;Tk(a).catch(()=>{clearTimeout(s),i(vt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Xe().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function lM(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class cM{async load(e){return new iM(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk="recaptcha",dM={theme:"light",type:"image"};let hM=class{constructor(e,n=Object.assign({},dM),r){this.parameters=n,this.type=xk,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ot(r),this.isInvisible=this.parameters.size==="invisible",P(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;P(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new cM:new uM,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=a=>{a&&(this.tokenChangeListeners.delete(s),i(a))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){P(!this.parameters.sitekey,this.auth,"argument-error"),P(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),P(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Xe()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){P(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){P(m2()&&!E2(),this.auth,"internal-error"),await pM(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await eM(this.auth);P(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return P(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function pM(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Rs._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function mM(t,e,n){const r=ot(t),i=await qh(r,e,j(n));return new I2(i,s=>Uh(r,s))}async function gM(t,e,n){const r=j(t);await Fh(!1,r,"phone");const i=await qh(r.auth,e,j(n));return new I2(i,s=>mk(r,s))}async function vM(t,e,n){const r=j(t),i=await qh(r.auth,e,j(n));return new I2(i,s=>gk(r,s))}async function qh(t,e,n){var r;const i=await n.verify();try{P(typeof i=="string",t,"argument-error"),P(n.type===xk,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const a=s.session;if("phoneNumber"in s)return P(a.type==="enroll",t,"internal-error"),(await MP(t,{idToken:a.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{P(a.type==="signin",t,"internal-error");const o=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return P(o,t,"missing-multi-factor-info"),(await JP(t,{mfaPendingCredential:a.credential,mfaEnrollmentId:o,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:a}=await XD(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return a}}finally{n._reset()}}async function yM(t,e){await y2(j(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bs=class Uc{constructor(e){this.providerId=Uc.PROVIDER_ID,this.auth=ot(e)}verifyPhoneNumber(e,n){return qh(this.auth,e,j(n))}static credential(e,n){return Rs._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Uc.credentialFromTaggedObject(n)}static credentialFromError(e){return Uc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Rs._fromTokenResponse(n,r):null}};Bs.PROVIDER_ID="phone";Bs.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(t,e){return e?pn(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2 extends $o{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return jr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return jr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wM(t){return pk(t.auth,new S2(t),t.bypassAuthState)}function bM(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),hk(n,new S2(t),t.bypassAuthState)}async function _M(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),y2(n,new S2(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=e;if(a){this.reject(a);return}const f={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(f))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wM;case"linkViaPopup":case"linkViaRedirect":return _M;case"reauthViaPopup":case"reauthViaRedirect":return bM;default:bt(this.auth,"internal-error")}}resolve(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kM=new cl(2e3,1e4);async function EM(t,e,n){const r=ot(t);Lo(t,e,Zr);const i=ia(r,n);return new Lr(r,"signInViaPopup",e,i).executeNotNull()}async function IM(t,e,n){const r=j(t);Lo(r.auth,e,Zr);const i=ia(r.auth,n);return new Lr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function SM(t,e,n){const r=j(t);Lo(r.auth,e,Zr);const i=ia(r.auth,n);return new Lr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Lr extends Rk{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Lr.currentPopupAction&&Lr.currentPopupAction.cancel(),Lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){tr(this.filter.length===1,"Popup operations only handle one event");const e=hl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,kM.get())};e()}}Lr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TM="pendingRedirect",Kf=new Map;class CM extends Rk{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Kf.get(this.auth._key());if(!e){try{const r=await xM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Kf.set(this.auth._key(),e)}return this.bypassAuthState||Kf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xM(t,e){const n=Nk(e),r=Ak(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function T2(t,e){return Ak(t)._set(Nk(e),"true")}function RM(){Kf.clear()}function C2(t,e){Kf.set(t._key(),e)}function Ak(t){return pn(t._redirectPersistence)}function Nk(t){return xs(TM,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AM(t,e,n){return NM(t,e,n)}async function NM(t,e,n){const r=ot(t);Lo(t,e,Zr),await r._initializationPromise;const i=ia(r,n);return await T2(i,r),i._openRedirect(r,e,"signInViaRedirect")}function DM(t,e,n){return PM(t,e,n)}async function PM(t,e,n){const r=j(t);Lo(r.auth,e,Zr),await r.auth._initializationPromise;const i=ia(r.auth,n);await T2(i,r.auth);const s=await Dk(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function MM(t,e,n){return LM(t,e,n)}async function LM(t,e,n){const r=j(t);Lo(r.auth,e,Zr),await r.auth._initializationPromise;const i=ia(r.auth,n);await Fh(!1,r,e.providerId),await T2(i,r.auth);const s=await Dk(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function OM(t,e){return await ot(t)._initializationPromise,Hh(t,e,!1)}async function Hh(t,e,n=!1){const r=ot(t),i=ia(r,e),a=await new CM(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}async function Dk(t){const e=hl(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $M=10*60*1e3;class Pk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Mk(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$M&&this.cachedEventUids.clear(),this.cachedEventUids.has(I4(e))}saveEventToCache(e){this.cachedEventUids.add(I4(e)),this.lastProcessedEventTime=Date.now()}}function I4(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Mk({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mk(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lk(t,e={}){return ut(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jM=/^https?/;async function zM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Lk(t);for(const n of e)try{if(VM(n))return}catch{}bt(t,"unauthorized-domain")}function VM(t){const e=Nu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!jM.test(n))return!1;if(UM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BM=new cl(3e4,6e4);function S4(){const t=Xe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qM(t){return new Promise((e,n)=>{var r,i,s;function a(){S4(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{S4(),n(vt(t,"network-request-failed"))},timeout:BM.get()})}if(!((i=(r=Xe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Xe().gapi)===null||s===void 0)&&s.load)a();else{const o=Ck("iframefcb");return Xe()[o]=()=>{gapi.load?a():n(vt(t,"network-request-failed"))},Tk(`https://apis.google.com/js/api.js?onload=${o}`).catch(f=>n(f))}}).catch(e=>{throw jc=null,e})}let jc=null;function HM(t){return jc=jc||qM(t),jc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WM=new cl(5e3,15e3),GM="__/auth/iframe",KM="emulator/auth/iframe",QM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XM(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?g2(e,KM):`https://${t.config.authDomain}/${GM}`,r={apiKey:e.apiKey,appName:t.name,v:Ki},i=YM.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Po(r).slice(1)}`}async function JM(t){const e=await HM(t),n=Xe().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:XM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QM,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=vt(t,"network-request-failed"),o=Xe().setTimeout(()=>{s(a)},WM.get());function f(){Xe().clearTimeout(o),i(r)}r.ping(f).then(f,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eL=500,tL=600,nL="_blank",rL="http://localhost";class T4{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iL(t,e,n,r=eL,i=tL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const f=Object.assign(Object.assign({},ZM),{width:r.toString(),height:i.toString(),top:s,left:a}),u=Ne().toLowerCase();n&&(o=tk(u)?nL:n),ek(u)&&(e=e||rL,f.scrollbars="yes");const l=Object.entries(f).reduce((d,[h,p])=>`${d}${h}=${p},`,"");if(MD(u)&&o!=="_self")return sL(e||"",o),new T4(null);const c=window.open(e||"",o,l);P(c,t,"popup-blocked");try{c.focus()}catch{}return new T4(c)}function sL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aL="__/auth/handler",oL="emulator/auth/handler";function nm(t,e,n,r,i,s){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ki,eventId:i};if(e instanceof Zr){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",gR(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,u]of Object.entries(s||{}))a[f]=u}if(e instanceof Fo){const f=e.getScopes().filter(u=>u!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const o=a;for(const f of Object.keys(o))o[f]===void 0&&delete o[f];return`${fL(t)}?${Po(o).slice(1)}`}function fL({config:t}){return t.emulator?g2(t,oL):`https://${t.authDomain}/${aL}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0="webStorageSupport";class uL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vs,this._completeRedirectFn=Hh,this._overrideRedirectResult=C2}async _openPopup(e,n,r,i){var s;tr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=nm(e,n,r,Nu(),i);return iL(e,a,hl())}async _openRedirect(e,n,r,i){return await this._originValidation(e),BP(nm(e,n,r,Nu(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(tr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await JM(e),r=new Pk(e);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(A0,{type:A0},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[A0];a!==void 0&&n(!!a),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sk()||v2()||Oo()}}const lL=uL;class cL{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return pr("unexpected MultiFactorSessionType")}}}class x2 extends cL{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new x2(e)}_finalizeEnroll(e,n,r){return LP(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return ZP(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Ok{constructor(){}static assertion(e){return x2._fromCredential(e)}}Ok.FACTOR_ID="phone";var C4="@firebase/auth",x4="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function pL(t){Wr(new On("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:a}=r.options;return((o,f)=>{P(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),P(!(a!=null&&a.includes(":")),"argument-error",{appName:o.name});const u={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ak(t)},l=new FD(o,f,u);return gD(l,n),l})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wr(new On("auth-internal",e=>{const n=ot(e.getProvider("auth").getImmediate());return(r=>new dL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(C4,x4,hL(t)),Pn(C4,x4,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mL=5*60;oR("authIdTokenMaxAge");pL("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gL=2e3;async function vL(t,e,n){var r;const{BuildInfo:i}=qs();tr(e.sessionId,"AuthEvent did not contain a session ID");const s=await kL(e.sessionId),a={};return Oo()?a.ibi=i.packageName:dl()?a.apn=i.packageName:bt(t,"operation-not-supported-in-this-environment"),i.displayName&&(a.appDisplayName=i.displayName),a.sessionId=s,nm(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,a)}async function yL(t){const{BuildInfo:e}=qs(),n={};Oo()?n.iosBundleId=e.packageName:dl()?n.androidPackageName=e.packageName:bt(t,"operation-not-supported-in-this-environment"),await Lk(t,n)}function wL(t){const{cordova:e}=qs();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,PD()?"_blank":"_system","location=yes"),n(i)})})}async function bL(t,e,n){const{cordova:r}=qs();let i=()=>{};try{await new Promise((s,a)=>{let o=null;function f(){var c;s();const d=(c=r.plugins.browsertab)===null||c===void 0?void 0:c.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){o||(o=window.setTimeout(()=>{a(vt(t,"redirect-cancelled-by-user"))},gL))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(f),document.addEventListener("resume",u,!1),dl()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(f),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),o&&window.clearTimeout(o)}})}finally{i()}}function _L(t){var e,n,r,i,s,a,o,f,u,l;const c=qs();P(typeof((e=c==null?void 0:c.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),P(typeof((n=c==null?void 0:c.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),P(typeof((s=(i=(r=c==null?void 0:c.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),P(typeof((f=(o=(a=c==null?void 0:c.cordova)===null||a===void 0?void 0:a.plugins)===null||o===void 0?void 0:o.browsertab)===null||f===void 0?void 0:f.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),P(typeof((l=(u=c==null?void 0:c.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function kL(t){const e=EL(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function EL(t){if(tr(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IL=20;class SL extends Pk{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function TL(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:RL(),postBody:null,tenantId:t.tenantId,error:vt(t,"no-auth-event")}}function CL(t,e){return rm()._set(im(t),e)}async function R4(t){const e=await rm()._get(im(t));return e&&await rm()._remove(im(t)),e}function xL(t,e){var n,r;const i=NL(e);if(i.includes("/__/auth/callback")){const s=zc(i),a=s.firebaseError?AL(decodeURIComponent(s.firebaseError)):null,o=(r=(n=a==null?void 0:a.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],f=o?vt(o):null;return f?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:f,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function RL(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<IL;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function rm(){return pn(k2)}function im(t){return xs("authEvent",t.config.apiKey,t.name)}function AL(t){try{return JSON.parse(t)}catch{return null}}function NL(t){const e=zc(t),n=e.link?decodeURIComponent(e.link):void 0,r=zc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return zc(i).link||i||r||n||t}function zc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Fa(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DL=500;class PL{constructor(){this._redirectPersistence=Vs,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Hh,this._overrideRedirectResult=C2}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new SL(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){bt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){_L(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),RM(),await this._originValidation(e);const a=TL(e,r,i);await CL(e,a);const o=await vL(e,a,n),f=await wL(o);return bL(e,s,f)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yL(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=qs(),a=setTimeout(async()=>{await R4(e),n.onEvent(A4())},DL),o=async l=>{clearTimeout(a);const c=await R4(e);let d=null;c&&(l!=null&&l.url)&&(d=xL(c,l.url)),n.onEvent(d||A4())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,o);const f=i,u=`${s.packageName.toLowerCase()}://`;qs().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&o({url:l}),typeof f=="function")try{f(l)}catch(c){console.error(c)}}}}const ML=PL;function A4(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:vt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LL(t,e){ot(t)._logFramework(e)}var OL="@firebase/auth-compat",$L="0.3.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FL=1e3;function Qf(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function UL(){return Qf()==="http:"||Qf()==="https:"}function $k(t=Ne()){return!!((Qf()==="file:"||Qf()==="ionic:"||Qf()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function jL(){return r2()||Rh()}function zL(){return u9()&&(document==null?void 0:document.documentMode)===11}function VL(t=Ne()){return/Edge\/\d+/.test(t)}function BL(t=Ne()){return zL()||VL(t)}function Fk(){try{const t=self.localStorage,e=hl();if(t)return t.setItem(e,"1"),t.removeItem(e),BL()?xu():!0}catch{return R2()&&xu()}return!1}function R2(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function N0(){return(UL()||f9()||$k())&&!jL()&&Fk()&&!R2()}function Uk(){return $k()&&typeof document<"u"}async function qL(){return Uk()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},FL);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function HL(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn={LOCAL:"local",NONE:"none",SESSION:"session"},cf=P,jk="persistence";function WL(t,e){if(cf(Object.values(dn).includes(e),t,"invalid-persistence-type"),r2()){cf(e!==dn.SESSION,t,"unsupported-persistence-type");return}if(Rh()){cf(e===dn.NONE,t,"unsupported-persistence-type");return}if(R2()){cf(e===dn.NONE||e===dn.LOCAL&&xu(),t,"unsupported-persistence-type");return}cf(e===dn.NONE||Fk(),t,"unsupported-persistence-type")}async function sm(t){await t._initializationPromise;const e=zk(),n=xs(jk,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function GL(t,e){const n=zk();if(!n)return[];const r=xs(jk,t,e);switch(n.getItem(r)){case dn.NONE:return[uo];case dn.LOCAL:return[Lu,Vs];case dn.SESSION:return[Vs];default:return[]}}function zk(){var t;try{return((t=HL())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KL=P;class bi{constructor(){this.browserResolver=pn(lL),this.cordovaResolver=pn(ML),this.underlyingResolver=null,this._redirectPersistence=Vs,this._completeRedirectFn=Hh,this._overrideRedirectResult=C2}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Uk()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return KL(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await qL();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(t){return t.unwrap()}function QL(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YL(t){return Bk(t)}function XL(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new JL(t,PP(t,e))}else if(r){const i=Bk(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Bk(t){const{_tokenResponse:e}=t instanceof xt?t.customData:t;if(!e)return null;if(!(t instanceof xt)&&"temporaryProof"in e&&"phoneNumber"in e)return Bs.credentialFromResult(t);const n=e.providerId;if(!n||n===lf.PASSWORD)return null;let r;switch(n){case lf.GOOGLE:r=lr;break;case lf.FACEBOOK:r=ur;break;case lf.GITHUB:r=cr;break;case lf.TWITTER:r=dr;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:a,pendingToken:o,nonce:f}=e;return!s&&!a&&!i&&!o?null:o?n.startsWith("saml.")?lo._create(n,o):Ir._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:i,accessToken:s}):new Ya(n).credential({idToken:i,accessToken:s,rawNonce:f})}return t instanceof xt?r.credentialFromError(t):r.credentialFromResult(t)}function Gt(t,e){return e.catch(n=>{throw n instanceof xt&&XL(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:YL(n),additionalUserInfo:DP(n),user:Or.getOrCreate(i)}})}async function am(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Gt(t,n.confirm(r))}}class JL{constructor(e,n){this.resolver=n,this.auth=QL(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Gt(Vk(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this._delegate=e,this.multiFactor=$P(e)}static getOrCreate(e){return Or.USER_MAP.has(e)||Or.USER_MAP.set(e,new Or(e)),Or.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Gt(this.auth,mk(this._delegate,e))}async linkWithPhoneNumber(e,n){return am(this.auth,gM(this._delegate,e,n))}async linkWithPopup(e){return Gt(this.auth,SM(this._delegate,e,bi))}async linkWithRedirect(e){return await sm(ot(this.auth)),MM(this._delegate,e,bi)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Gt(this.auth,gk(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return am(this.auth,vM(this._delegate,e,n))}reauthenticateWithPopup(e){return Gt(this.auth,IM(this._delegate,e,bi))}async reauthenticateWithRedirect(e){return await sm(ot(this.auth)),DM(this._delegate,e,bi)}sendEmailVerification(e){return _P(this._delegate,e)}async unlink(e){return await oP(this._delegate,e),this}updateEmail(e){return SP(this._delegate,e)}updatePassword(e){return TP(this._delegate,e)}updatePhoneNumber(e){return yM(this._delegate,e)}updateProfile(e){return IP(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return kP(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Or.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df=P;class om{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;df(r,"invalid-api-key",{appName:e.name}),df(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?bi:void 0;this._delegate=n.initialize({options:{persistence:ZL(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(pD),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Or.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){UD(this._delegate,e,n)}applyActionCode(e){return dP(this._delegate,e)}checkActionCode(e){return vk(this._delegate,e)}confirmPasswordReset(e,n){return cP(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Gt(this._delegate,pP(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return bP(this._delegate,e)}isSignInWithEmailLink(e){return vP(this._delegate,e)}async getRedirectResult(){df(N0(),this._delegate,"operation-not-supported-in-this-environment");const e=await OM(this._delegate,bi);return e?Gt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){LL(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:a}=N4(e,n,r);return this._delegate.onAuthStateChanged(i,s,a)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:a}=N4(e,n,r);return this._delegate.onIdTokenChanged(i,s,a)}sendSignInLinkToEmail(e,n){return gP(this._delegate,e,n)}sendPasswordResetEmail(e,n){return lP(this._delegate,e,n||void 0)}async setPersistence(e){WL(this._delegate,e);let n;switch(e){case dn.SESSION:n=Vs;break;case dn.LOCAL:n=await pn(Lu)._isAvailable()?Lu:k2;break;case dn.NONE:n=uo;break;default:return bt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Gt(this._delegate,aP(this._delegate))}signInWithCredential(e){return Gt(this._delegate,Uh(this._delegate,e))}signInWithCustomToken(e){return Gt(this._delegate,uP(this._delegate,e))}signInWithEmailAndPassword(e,n){return Gt(this._delegate,mP(this._delegate,e,n))}signInWithEmailLink(e,n){return Gt(this._delegate,yP(this._delegate,e,n))}signInWithPhoneNumber(e,n){return am(this._delegate,mM(this._delegate,e,n))}async signInWithPopup(e){return df(N0(),this._delegate,"operation-not-supported-in-this-environment"),Gt(this._delegate,EM(this._delegate,e,bi))}async signInWithRedirect(e){return df(N0(),this._delegate,"operation-not-supported-in-this-environment"),await sm(this._delegate),AM(this._delegate,e,bi)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return hP(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}om.Persistence=dn;function N4(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:a=>i(a&&Or.getOrCreate(a)),error:e,complete:n}}function ZL(t,e){const n=GL(t,e);if(typeof self<"u"&&!n.includes(Lu)&&n.push(Lu),typeof window<"u")for(const r of[k2,Vs])n.includes(r)||n.push(r);return n.includes(uo)||n.push(uo),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(){this.providerId="phone",this._delegate=new Bs(Vk(tt.auth()))}static credential(e,n){return Bs.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}A2.PHONE_SIGN_IN_METHOD=Bs.PHONE_SIGN_IN_METHOD;A2.PROVIDER_ID=Bs.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO=P;class tO{constructor(e,n,r=tt.app()){var i;eO((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new hM(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO="auth-compat";function rO(t){t.INTERNAL.registerComponent(new On(nO,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new om(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:wa.EMAIL_SIGNIN,PASSWORD_RESET:wa.PASSWORD_RESET,RECOVER_EMAIL:wa.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:wa.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:wa.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:wa.VERIFY_EMAIL}},EmailAuthProvider:Yi,FacebookAuthProvider:ur,GithubAuthProvider:cr,GoogleAuthProvider:lr,OAuthProvider:Ya,SAMLAuthProvider:Nd,PhoneAuthProvider:A2,PhoneMultiFactorGenerator:Ok,RecaptchaVerifier:tO,TwitterAuthProvider:dr,Auth:om,AuthCredential:$o,Error:xt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(OL,$L)}rO(tt);var iO=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z,N2=N2||{},Q=iO||self;function Ld(){}function Wh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ml(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function sO(t){return Object.prototype.hasOwnProperty.call(t,D0)&&t[D0]||(t[D0]=++aO)}var D0="closure_uid_"+(1e9*Math.random()>>>0),aO=0;function oO(t,e,n){return t.call.apply(t.bind,arguments)}function fO(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Rt=oO:Rt=fO,Rt.apply(null,arguments)}function pc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function kt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var a=Array(arguments.length-2),o=2;o<arguments.length;o++)a[o-2]=arguments[o];return e.prototype[i].apply(r,a)}}function Xi(){this.s=this.s,this.o=this.o}var uO=0;Xi.prototype.s=!1;Xi.prototype.na=function(){!this.s&&(this.s=!0,this.M(),uO!=0)&&sO(this)};Xi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const qk=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function D2(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function D4(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Wh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let a=0;a<s;a++)t[i+a]=r[a]}else t.push(r)}}function At(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}At.prototype.h=function(){this.defaultPrevented=!0};var lO=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",Ld,e),Q.removeEventListener("test",Ld,e)}catch{}return t}();function Od(t){return/^[\s\xa0]*$/.test(t)}var P4=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function P0(t,e){return t<e?-1:t>e?1:0}function Gh(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function hr(t){return Gh().indexOf(t)!=-1}function P2(t){return P2[" "](t),t}P2[" "]=Ld;function cO(t){var e=pO;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var dO=hr("Opera"),co=hr("Trident")||hr("MSIE"),Hk=hr("Edge"),fm=Hk||co,Wk=hr("Gecko")&&!(Gh().toLowerCase().indexOf("webkit")!=-1&&!hr("Edge"))&&!(hr("Trident")||hr("MSIE"))&&!hr("Edge"),hO=Gh().toLowerCase().indexOf("webkit")!=-1&&!hr("Edge");function Gk(){var t=Q.document;return t?t.documentMode:void 0}var $d;e:{var M0="",L0=function(){var t=Gh();if(Wk)return/rv:([^\);]+)(\)|;)/.exec(t);if(Hk)return/Edge\/([\d\.]+)/.exec(t);if(co)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(hO)return/WebKit\/(\S+)/.exec(t);if(dO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(L0&&(M0=L0?L0[1]:""),co){var O0=Gk();if(O0!=null&&O0>parseFloat(M0)){$d=String(O0);break e}}$d=M0}var pO={};function mO(){return cO(function(){let t=0;const e=P4(String($d)).split("."),n=P4("9").split("."),r=Math.max(e.length,n.length);for(let a=0;t==0&&a<r;a++){var i=e[a]||"",s=n[a]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=P0(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||P0(i[2].length==0,s[2].length==0)||P0(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var um;if(Q.document&&co){var M4=Gk();um=M4||parseInt($d,10)||void 0}else um=void 0;var gO=um;function Ou(t,e){if(At.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Wk){e:{try{P2(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:vO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ou.X.h.call(this)}}kt(Ou,At);var vO={2:"touch",3:"pen",4:"mouse"};Ou.prototype.h=function(){Ou.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var gl="closure_listenable_"+(1e6*Math.random()|0),yO=0;function wO(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++yO,this.ba=this.ea=!1}function Kh(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function M2(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Kk(t){const e={};for(const n in t)e[n]=t[n];return e}const L4="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qk(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<L4.length;s++)n=L4[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Qh(t){this.src=t,this.g={},this.h=0}Qh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var a=cm(t,e,r,i);return-1<a?(e=t[a],n||(e.ea=!1)):(e=new wO(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function lm(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=qk(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Kh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function cm(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var L2="closure_lm_"+(1e6*Math.random()|0),$0={};function Yk(t,e,n,r,i){if(r&&r.once)return Jk(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Yk(t,e[s],n,r,i);return null}return n=F2(n),t&&t[gl]?t.N(e,n,ml(r)?!!r.capture:!!r,i):Xk(t,e,n,!1,r,i)}function Xk(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var a=ml(i)?!!i.capture:!!i,o=$2(t);if(o||(t[L2]=o=new Qh(t)),n=o.add(e,n,r,a,s),n.proxy)return n;if(r=bO(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)lO||(i=a),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(eE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function bO(){function t(n){return e.call(t.src,t.listener,n)}const e=_O;return t}function Jk(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Jk(t,e[s],n,r,i);return null}return n=F2(n),t&&t[gl]?t.O(e,n,ml(r)?!!r.capture:!!r,i):Xk(t,e,n,!0,r,i)}function Zk(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Zk(t,e[s],n,r,i);else r=ml(r)?!!r.capture:!!r,n=F2(n),t&&t[gl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=cm(s,n,r,i),-1<n&&(Kh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=$2(t))&&(e=t.g[e.toString()],t=-1,e&&(t=cm(e,n,r,i)),(n=-1<t?e[t]:null)&&O2(n))}function O2(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[gl])lm(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(eE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=$2(e))?(lm(n,t),n.h==0&&(n.src=null,e[L2]=null)):Kh(t)}}}function eE(t){return t in $0?$0[t]:$0[t]="on"+t}function _O(t,e){if(t.ba)t=!0;else{e=new Ou(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&O2(t),t=n.call(r,e)}return t}function $2(t){return t=t[L2],t instanceof Qh?t:null}var F0="__closure_events_fn_"+(1e9*Math.random()>>>0);function F2(t){return typeof t=="function"?t:(t[F0]||(t[F0]=function(e){return t.handleEvent(e)}),t[F0])}function ft(){Xi.call(this),this.i=new Qh(this),this.P=this,this.I=null}kt(ft,Xi);ft.prototype[gl]=!0;ft.prototype.removeEventListener=function(t,e,n,r){Zk(this,t,e,n,r)};function yt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new At(e,t);else if(e instanceof At)e.target=e.target||t;else{var i=e;e=new At(r,t),Qk(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var a=e.g=n[s];i=mc(a,r,!0,e)&&i}if(a=e.g=t,i=mc(a,r,!0,e)&&i,i=mc(a,r,!1,e)&&i,n)for(s=0;s<n.length;s++)a=e.g=n[s],i=mc(a,r,!1,e)&&i}ft.prototype.M=function(){if(ft.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Kh(n[r]);delete t.g[e],t.h--}}this.I=null};ft.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ft.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function mc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var a=e[s];if(a&&!a.ba&&a.capture==n){var o=a.listener,f=a.ha||a.src;a.ea&&lm(t.i,a),i=o.call(f,r)!==!1&&i}}return i&&!r.defaultPrevented}var U2=Q.JSON.stringify;function kO(){var t=rE;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class EO{constructor(){this.h=this.g=null}add(e,n){const r=tE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var tE=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new IO,t=>t.reset());class IO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function SO(t){Q.setTimeout(()=>{throw t},0)}function nE(t,e){dm||TO(),hm||(dm(),hm=!0),rE.add(t,e)}var dm;function TO(){var t=Q.Promise.resolve(void 0);dm=function(){t.then(CO)}}var hm=!1,rE=new EO;function CO(){for(var t;t=kO();){try{t.h.call(t.g)}catch(n){SO(n)}var e=tE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}hm=!1}function Yh(t,e){ft.call(this),this.h=t||1,this.g=e||Q,this.j=Rt(this.lb,this),this.l=Date.now()}kt(Yh,ft);z=Yh.prototype;z.ca=!1;z.R=null;z.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),yt(this,"tick"),this.ca&&(j2(this),this.start()))}};z.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function j2(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}z.M=function(){Yh.X.M.call(this),j2(this),delete this.g};function z2(t,e,n){if(typeof t=="function")n&&(t=Rt(t,n));else if(t&&typeof t.handleEvent=="function")t=Rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function iE(t){t.g=z2(()=>{t.g=null,t.i&&(t.i=!1,iE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class xO extends Xi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:iE(this)}M(){super.M(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $u(t){Xi.call(this),this.h=t,this.g={}}kt($u,Xi);var O4=[];function sE(t,e,n,r){Array.isArray(n)||(n&&(O4[0]=n.toString()),n=O4);for(var i=0;i<n.length;i++){var s=Yk(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function aE(t){M2(t.g,function(e,n){this.g.hasOwnProperty(n)&&O2(e)},t),t.g={}}$u.prototype.M=function(){$u.X.M.call(this),aE(this)};$u.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Xh(){this.g=!0}Xh.prototype.Aa=function(){this.g=!1};function RO(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var a="",o=s.split("&"),f=0;f<o.length;f++){var u=o[f].split("=");if(1<u.length){var l=u[0];u=u[1];var c=l.split("_");a=2<=c.length&&c[1]=="type"?a+(l+"="+u+"&"):a+(l+"=redacted&")}}else a=null;else a=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+a})}function AO(t,e,n,r,i,s,a){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+a})}function Ua(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+DO(t,n)+(r?" "+r:"")})}function NO(t,e){t.info(function(){return"TIMEOUT: "+e})}Xh.prototype.info=function(){};function DO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var a=1;a<i.length;a++)i[a]=""}}}}return U2(n)}catch{return e}}var sa={},$4=null;function Jh(){return $4=$4||new ft}sa.Pa="serverreachability";function oE(t){At.call(this,sa.Pa,t)}kt(oE,At);function Fu(t){const e=Jh();yt(e,new oE(e))}sa.STAT_EVENT="statevent";function fE(t,e){At.call(this,sa.STAT_EVENT,t),this.stat=e}kt(fE,At);function jt(t){const e=Jh();yt(e,new fE(e,t))}sa.Qa="timingevent";function uE(t,e){At.call(this,sa.Qa,t),this.size=e}kt(uE,At);function vl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var Zh={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},lE={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function V2(){}V2.prototype.h=null;function F4(t){return t.h||(t.h=t.i())}function cE(){}var yl={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function B2(){At.call(this,"d")}kt(B2,At);function q2(){At.call(this,"c")}kt(q2,At);var pm;function e1(){}kt(e1,V2);e1.prototype.g=function(){return new XMLHttpRequest};e1.prototype.i=function(){return{}};pm=new e1;function wl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new $u(this),this.O=PO,t=fm?125:void 0,this.T=new Yh(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new dE}function dE(){this.i=null,this.g="",this.h=!1}var PO=45e3,mm={},Fd={};z=wl.prototype;z.setTimeout=function(t){this.O=t};function gm(t,e,n){t.K=1,t.v=n1(Kr(e)),t.s=n,t.P=!0,hE(t,null)}function hE(t,e){t.F=Date.now(),bl(t),t.A=Kr(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),_E(n.i,"t",r),t.C=0,n=t.l.H,t.h=new dE,t.g=VE(t.l,n?e:null,!t.s),0<t.N&&(t.L=new xO(Rt(t.La,t,t.g),t.N)),sE(t.S,t.g,"readystatechange",t.ib),e=t.H?Kk(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Fu(),RO(t.j,t.u,t.A,t.m,t.U,t.s)}z.ib=function(t){t=t.target;const e=this.L;e&&$r(t)==3?e.l():this.La(t)};z.La=function(t){try{if(t==this.g)e:{const l=$r(this.g);var e=this.g.Ea();const c=this.g.aa();if(!(3>l)&&(l!=3||fm||this.g&&(this.h.h||this.g.fa()||V4(this.g)))){this.I||l!=4||e==7||(e==8||0>=c?Fu(3):Fu(2)),t1(this);var n=this.g.aa();this.Y=n;t:if(pE(this)){var r=V4(this.g);t="";var i=r.length,s=$r(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bs(this),Yf(this);var a="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.fa();if(this.i=n==200,AO(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var o,f=this.g;if((o=f.g?f.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Od(o)){var u=o;break t}}u=null}if(n=u)Ua(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,vm(this,n);else{this.i=!1,this.o=3,jt(12),bs(this),Yf(this);break e}}this.P?(mE(this,l,a),fm&&this.i&&l==3&&(sE(this.S,this.T,"tick",this.hb),this.T.start())):(Ua(this.j,this.m,a,null),vm(this,a)),l==4&&bs(this),this.i&&!this.I&&(l==4?FE(this.l,this):(this.i=!1,bl(this)))}else n==400&&0<a.indexOf("Unknown SID")?(this.o=3,jt(12)):(this.o=0,jt(13)),bs(this),Yf(this)}}}catch{}finally{}};function pE(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function mE(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=MO(t,n),i==Fd){e==4&&(t.o=4,jt(14),r=!1),Ua(t.j,t.m,null,"[Incomplete Response]");break}else if(i==mm){t.o=4,jt(15),Ua(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ua(t.j,t.m,i,null),vm(t,i);pE(t)&&i!=Fd&&i!=mm&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,jt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),X2(e),e.K=!0,jt(11))):(Ua(t.j,t.m,n,"[Invalid Chunked Response]"),bs(t),Yf(t))}z.hb=function(){if(this.g){var t=$r(this.g),e=this.g.fa();this.C<e.length&&(t1(this),mE(this,t,e),this.i&&t!=4&&bl(this))}};function MO(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Fd:(n=Number(e.substring(n,r)),isNaN(n)?mm:(r+=1,r+n>e.length?Fd:(e=e.substr(r,n),t.C=r+n,e)))}z.cancel=function(){this.I=!0,bs(this)};function bl(t){t.V=Date.now()+t.O,gE(t,t.O)}function gE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=vl(Rt(t.gb,t),e)}function t1(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}z.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(NO(this.j,this.A),this.K!=2&&(Fu(),jt(17)),bs(this),this.o=2,Yf(this)):gE(this,this.V-t)};function Yf(t){t.l.G==0||t.I||FE(t.l,t)}function bs(t){t1(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,j2(t.T),aE(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function vm(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ym(n.h,t))){if(!t.J&&ym(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)zd(n),s1(n);else break e;Y2(n),jt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=vl(Rt(n.cb,n),6e3));if(1>=IE(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else _s(n,11)}else if((t.J||n.g==t)&&zd(n),!Od(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const c=u[4];c!=null&&(n.Ca=c,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const p=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.h;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(H2(s,s.h),s.h=null))}if(r.D){const v=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,Ie(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var a=t;if(r.sa=zE(r,r.H?r.ka:null,r.V),a.J){SE(r.h,a);var o=a,f=r.J;f&&o.setTimeout(f),o.B&&(t1(o),bl(o)),r.g=a}else OE(r);0<n.i.length&&a1(n)}else u[0]!="stop"&&u[0]!="close"||_s(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?_s(n,7):Q2(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Fu(4)}catch{}}function LO(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Wh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function OO(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Wh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function vE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Wh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=OO(t),r=LO(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var yE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $O(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function As(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof As){this.h=e!==void 0?e:t.h,Ud(this,t.j),this.s=t.s,this.g=t.g,jd(this,t.m),this.l=t.l,e=t.i;var n=new Uu;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),U4(this,n),this.o=t.o}else t&&(n=String(t).match(yE))?(this.h=!!e,Ud(this,n[1]||"",!0),this.s=xf(n[2]||""),this.g=xf(n[3]||"",!0),jd(this,n[4]),this.l=xf(n[5]||"",!0),U4(this,n[6]||"",!0),this.o=xf(n[7]||"")):(this.h=!!e,this.i=new Uu(null,this.h))}As.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Rf(e,j4,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Rf(e,j4,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Rf(n,n.charAt(0)=="/"?jO:UO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Rf(n,VO)),t.join("")};function Kr(t){return new As(t)}function Ud(t,e,n){t.j=n?xf(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function jd(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function U4(t,e,n){e instanceof Uu?(t.i=e,BO(t.i,t.h)):(n||(e=Rf(e,zO)),t.i=new Uu(e,t.h))}function Ie(t,e,n){t.i.set(e,n)}function n1(t){return Ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function xf(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Rf(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,FO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function FO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var j4=/[#\/\?@]/g,UO=/[#\?:]/g,jO=/[#\?]/g,zO=/[#\?@]/g,VO=/#/g;function Uu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ji(t){t.g||(t.g=new Map,t.h=0,t.i&&$O(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}z=Uu.prototype;z.add=function(t,e){Ji(this),this.i=null,t=Uo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function wE(t,e){Ji(t),e=Uo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function bE(t,e){return Ji(t),e=Uo(t,e),t.g.has(e)}z.forEach=function(t,e){Ji(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};z.oa=function(){Ji(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};z.W=function(t){Ji(this);let e=[];if(typeof t=="string")bE(this,t)&&(e=e.concat(this.g.get(Uo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};z.set=function(t,e){return Ji(this),this.i=null,t=Uo(this,t),bE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};z.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function _E(t,e,n){wE(t,e),0<n.length&&(t.i=null,t.g.set(Uo(t,e),D2(n)),t.h+=n.length)}z.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),a=this.W(r);for(r=0;r<a.length;r++){var i=s;a[r]!==""&&(i+="="+encodeURIComponent(String(a[r]))),t.push(i)}}return this.i=t.join("&")};function Uo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function BO(t,e){e&&!t.j&&(Ji(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(wE(this,r),_E(this,i,n))},t)),t.j=e}var qO=class{constructor(e,n){this.h=e,this.g=n}};function kE(t){this.l=t||HO,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ga&&Q.g.Ga()&&Q.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var HO=10;function EE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function IE(t){return t.h?1:t.g?t.g.size:0}function ym(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function H2(t,e){t.g?t.g.add(e):t.h=e}function SE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}kE.prototype.cancel=function(){if(this.i=TE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function TE(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return D2(t.i)}function W2(){}W2.prototype.stringify=function(t){return Q.JSON.stringify(t,void 0)};W2.prototype.parse=function(t){return Q.JSON.parse(t,void 0)};function WO(){this.g=new W2}function GO(t,e,n){const r=n||"";try{vE(t,function(i,s){let a=i;ml(i)&&(a=U2(i)),e.push(r+s+"="+encodeURIComponent(a))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function KO(t,e){const n=new Xh;if(Q.Image){const r=new Image;r.onload=pc(gc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=pc(gc,n,r,"TestLoadImage: error",!1,e),r.onabort=pc(gc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=pc(gc,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function gc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function _l(t){this.l=t.ac||null,this.j=t.jb||!1}kt(_l,V2);_l.prototype.g=function(){return new r1(this.l,this.j)};_l.prototype.i=function(t){return function(){return t}}({});function r1(t,e){ft.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=G2,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}kt(r1,ft);var G2=0;z=r1.prototype;z.open=function(t,e){if(this.readyState!=G2)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ju(this)};z.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Q).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};z.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kl(this)),this.readyState=G2};z.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ju(this)),this.g&&(this.readyState=3,ju(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;CE(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function CE(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}z.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?kl(this):ju(this),this.readyState==3&&CE(this)}};z.Va=function(t){this.g&&(this.response=this.responseText=t,kl(this))};z.Ua=function(t){this.g&&(this.response=t,kl(this))};z.ga=function(){this.g&&kl(this)};function kl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ju(t)}z.setRequestHeader=function(t,e){this.v.append(t,e)};z.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};z.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ju(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(r1.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var QO=Q.JSON.parse;function Le(t){ft.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=xE,this.K=this.L=!1}kt(Le,ft);var xE="",YO=/^https?$/i,XO=["POST","PUT"];z=Le.prototype;z.Ka=function(t){this.L=t};z.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():pm.g(),this.C=this.u?F4(this.u):F4(pm),this.g.onreadystatechange=Rt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){z4(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Q.FormData&&t instanceof Q.FormData,!(0<=qk(XO,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of n)this.g.setRequestHeader(s,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{NE(this),0<this.B&&((this.K=JO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Rt(this.qa,this)):this.A=z2(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){z4(this,s)}};function JO(t){return co&&mO()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}z.qa=function(){typeof N2<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,yt(this,"timeout"),this.abort(8))};function z4(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,RE(t),i1(t)}function RE(t){t.D||(t.D=!0,yt(t,"complete"),yt(t,"error"))}z.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,yt(this,"complete"),yt(this,"abort"),i1(this))};z.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),i1(this,!0)),Le.X.M.call(this)};z.Ha=function(){this.s||(this.F||this.v||this.l?AE(this):this.fb())};z.fb=function(){AE(this)};function AE(t){if(t.h&&typeof N2<"u"&&(!t.C[1]||$r(t)!=4||t.aa()!=2)){if(t.v&&$r(t)==4)z2(t.Ha,0,t);else if(yt(t,"readystatechange"),$r(t)==4){t.h=!1;try{const o=t.aa();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.H).match(yE)[1]||null;if(!i&&Q.self&&Q.self.location){var s=Q.self.location.protocol;i=s.substr(0,s.length-1)}r=!YO.test(i?i.toLowerCase():"")}n=r}if(n)yt(t,"complete"),yt(t,"success");else{t.m=6;try{var a=2<$r(t)?t.g.statusText:""}catch{a=""}t.j=a+" ["+t.aa()+"]",RE(t)}}finally{i1(t)}}}}function i1(t,e){if(t.g){NE(t);const n=t.g,r=t.C[0]?Ld:null;t.g=null,t.C=null,e||yt(t,"ready");try{n.onreadystatechange=r}catch{}}}function NE(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}function $r(t){return t.g?t.g.readyState:0}z.aa=function(){try{return 2<$r(this)?this.g.status:-1}catch{return-1}};z.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};z.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),QO(e)}};function V4(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case xE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}z.Ea=function(){return this.m};z.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function DE(t){let e="";return M2(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function K2(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=DE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ie(t,e,n))}function hf(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function PE(t){this.Ca=0,this.i=[],this.j=new Xh,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=hf("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=hf("baseRetryDelayMs",5e3,t),this.bb=hf("retryDelaySeedMs",1e4,t),this.$a=hf("forwardChannelMaxRetries",2,t),this.ta=hf("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new kE(t&&t.concurrentRequestLimit),this.Fa=new WO,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}z=PE.prototype;z.ma=8;z.G=1;function Q2(t){if(ME(t),t.G==3){var e=t.U++,n=Kr(t.F);Ie(n,"SID",t.I),Ie(n,"RID",e),Ie(n,"TYPE","terminate"),El(t,n),e=new wl(t,t.j,e,void 0),e.K=2,e.v=n1(Kr(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon&&(n=Q.navigator.sendBeacon(e.v.toString(),"")),!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=VE(e.l,null),e.g.da(e.v)),e.F=Date.now(),bl(e)}jE(t)}function s1(t){t.g&&(X2(t),t.g.cancel(),t.g=null)}function ME(t){s1(t),t.u&&(Q.clearTimeout(t.u),t.u=null),zd(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function a1(t){EE(t.h)||t.m||(t.m=!0,nE(t.Ja,t),t.C=0)}function ZO(t,e){return IE(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=vl(Rt(t.Ja,t,e),UE(t,t.C)),t.C++,!0)}z.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new wl(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Kk(s),Qk(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=LE(this,i,e),n=Kr(this.F),Ie(n,"RID",t),Ie(n,"CVER",22),this.D&&Ie(n,"X-HTTP-Session-Id",this.D),El(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(DE(s)))+"&"+e:this.o&&K2(n,this.o,s)),H2(this.h,i),this.Ya&&Ie(n,"TYPE","init"),this.O?(Ie(n,"$req",e),Ie(n,"SID","null"),i.Z=!0,gm(i,n,null)):gm(i,n,e),this.G=2}}else this.G==3&&(t?B4(this,t):this.i.length==0||EE(this.h)||B4(this))};function B4(t,e){var n;e?n=e.m:n=t.U++;const r=Kr(t.F);Ie(r,"SID",t.I),Ie(r,"RID",n),Ie(r,"AID",t.T),El(t,r),t.o&&t.s&&K2(r,t.o,t.s),n=new wl(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=LE(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),H2(t.h,n),gm(n,r,e)}function El(t,e){t.ia&&M2(t.ia,function(n,r){Ie(e,r,n)}),t.l&&vE({},function(n,r){Ie(e,r,n)})}function LE(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Rt(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const a=["count="+n];s==-1?0<n?(s=i[0].h,a.push("ofs="+s)):s=0:a.push("ofs="+s);let o=!0;for(let f=0;f<n;f++){let u=i[f].h;const l=i[f].g;if(u-=s,0>u)s=Math.max(0,i[f].h-100),o=!1;else try{GO(l,a,"req"+u+"_")}catch{r&&r(l)}}if(o){r=a.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function OE(t){t.g||t.u||(t.Z=1,nE(t.Ia,t),t.A=0)}function Y2(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=vl(Rt(t.Ia,t),UE(t,t.A)),t.A++,!0)}z.Ia=function(){if(this.u=null,$E(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=vl(Rt(this.eb,this),t)}};z.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,jt(10),s1(this),$E(this))};function X2(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function $E(t){t.g=new wl(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Kr(t.sa);Ie(e,"RID","rpc"),Ie(e,"SID",t.I),Ie(e,"CI",t.L?"0":"1"),Ie(e,"AID",t.T),Ie(e,"TYPE","xmlhttp"),El(t,e),t.o&&t.s&&K2(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=n1(Kr(e)),n.s=null,n.P=!0,hE(n,t)}z.cb=function(){this.v!=null&&(this.v=null,s1(this),Y2(this),jt(19))};function zd(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function FE(t,e){var n=null;if(t.g==e){zd(t),X2(t),t.g=null;var r=2}else if(ym(t.h,e))n=e.D,SE(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Jh(),yt(r,new uE(r,n)),a1(t)}else OE(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&ZO(t,e)||r==2&&Y2(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:_s(t,5);break;case 4:_s(t,10);break;case 3:_s(t,6);break;default:_s(t,2)}}}function UE(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function _s(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Rt(t.kb,t);n||(n=new As("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||Ud(n,"https"),n1(n)),KO(n.toString(),r)}else jt(2);t.G=0,t.l&&t.l.va(e),jE(t),ME(t)}z.kb=function(t){t?(this.j.info("Successfully pinged google.com"),jt(2)):(this.j.info("Failed to ping google.com"),jt(1))};function jE(t){if(t.G=0,t.la=[],t.l){const e=TE(t.h);(e.length!=0||t.i.length!=0)&&(D4(t.la,e),D4(t.la,t.i),t.h.i.length=0,D2(t.i),t.i.length=0),t.l.ua()}}function zE(t,e,n){var r=n instanceof As?Kr(n):new As(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),jd(r,r.m);else{var i=Q.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new As(null,void 0);r&&Ud(s,r),e&&(s.g=e),i&&jd(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Ie(r,n,e),Ie(r,"VER",t.ma),El(t,r),r}function VE(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Le(new _l({jb:!0})):new Le(t.ra),e.Ka(t.H),e}function BE(){}z=BE.prototype;z.xa=function(){};z.wa=function(){};z.va=function(){};z.ua=function(){};z.Ra=function(){};function Vd(){if(co&&!(10<=Number(gO)))throw Error("Environmental error: no available transport.")}Vd.prototype.g=function(t,e){return new yn(t,e)};function yn(t,e){ft.call(this),this.g=new PE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Od(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Od(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new jo(this)}kt(yn,ft);yn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;jt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=zE(t,null,t.V),a1(t)};yn.prototype.close=function(){Q2(this.g)};yn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=U2(t),t=n);e.i.push(new qO(e.ab++,t)),e.G==3&&a1(e)};yn.prototype.M=function(){this.g.l=null,delete this.j,Q2(this.g),delete this.g,yn.X.M.call(this)};function qE(t){B2.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}kt(qE,B2);function HE(){q2.call(this),this.status=1}kt(HE,q2);function jo(t){this.g=t}kt(jo,BE);jo.prototype.xa=function(){yt(this.g,"a")};jo.prototype.wa=function(t){yt(this.g,new qE(t))};jo.prototype.va=function(t){yt(this.g,new HE)};jo.prototype.ua=function(){yt(this.g,"b")};Vd.prototype.createWebChannel=Vd.prototype.g;yn.prototype.send=yn.prototype.u;yn.prototype.open=yn.prototype.m;yn.prototype.close=yn.prototype.close;Zh.NO_ERROR=0;Zh.TIMEOUT=8;Zh.HTTP_ERROR=6;lE.COMPLETE="complete";cE.EventType=yl;yl.OPEN="a";yl.CLOSE="b";yl.ERROR="c";yl.MESSAGE="d";ft.prototype.listen=ft.prototype.N;Le.prototype.listenOnce=Le.prototype.O;Le.prototype.getLastError=Le.prototype.Oa;Le.prototype.getLastErrorCode=Le.prototype.Ea;Le.prototype.getStatus=Le.prototype.aa;Le.prototype.getResponseJson=Le.prototype.Sa;Le.prototype.getResponseText=Le.prototype.fa;Le.prototype.send=Le.prototype.da;Le.prototype.setWithCredentials=Le.prototype.Ka;var e$=function(){return new Vd},t$=function(){return Jh()},U0=Zh,n$=lE,r$=sa,q4={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},i$=_l,vc=cE,s$=Le;const H4="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zo="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new Ah("@firebase/firestore");function wm(){return $i.logLevel}function a$(t){$i.setLogLevel(t)}function R(t,...e){if($i.logLevel<=oe.DEBUG){const n=e.map(J2);$i.debug(`Firestore (${zo}): ${t}`,...n)}}function je(t,...e){if($i.logLevel<=oe.ERROR){const n=e.map(J2);$i.error(`Firestore (${zo}): ${t}`,...n)}}function ho(t,...e){if($i.logLevel<=oe.WARN){const n=e.map(J2);$i.warn(`Firestore (${zo}): ${t}`,...n)}}function J2(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t="Unexpected state"){const e=`FIRESTORE (${zo}) INTERNAL ASSERTION FAILED: `+t;throw je(e),new Error(e)}function V(t,e){t||$()}function o$(t,e){t||$()}function O(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends xt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class f${getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class u${constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class l${constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=f=>this.i!==r?(r=this.i,n(f)):Promise.resolve();let s=new at;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new at,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const f=s;e.enqueueRetryable(async()=>{await f.promise,await i(this.currentUser)})},o=f=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(f=>o(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?o(f):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new at)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(V(typeof r.accessToken=="string"),new WE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return V(e===null||typeof e=="string"),new it(e)}}class c${constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=it.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(V(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class d${constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new c$(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class h${constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class p${constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.A;return this.A=s.token,R("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(V(typeof n.token=="string"),this.A=n.token,new h$(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m$(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=m$(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function po(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function KE(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Te(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new Te(0,0))}static max(){return new q(new Te(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n,r){n===void 0?n=0:n>e.length&&$(),r===void 0?r=e.length-n:r>e.length-n&&$(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return zu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),a=n.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ae extends zu{construct(e,n,r){return new ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ae(n)}static emptyPath(){return new ae([])}}const g$=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends zu{construct(e,n,r){return new ze(e,n,r)}static isValidIdentifier(e){return g$.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new x(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const o=e[i];if(o==="\\"){if(i+1===e.length)throw new x(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new x(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,i+=2}else o==="`"?(a=!a,i++):o!=="."||a?(r+=o,i++):(s(),i++)}if(s(),a)throw new x(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(ae.fromString(e))}static fromName(e){return new L(ae.fromString(e).popFirst(5))}static empty(){return new L(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new ae(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function bm(t){return t.fields.find(e=>e.kind===2)}function ls(t){return t.fields.filter(e=>e.kind!==2)}QE.UNKNOWN_ID=-1;class v${constructor(e,n){this.fieldPath=e,this.kind=n}}class Bd{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Bd(0,wn.min())}}function YE(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new Te(n+1,0):new Te(n,r));return new wn(i,L.empty(),e)}function XE(t){return new wn(t.readTime,t.key,-1)}class wn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new wn(q.min(),L.empty(),-1)}static max(){return new wn(q.max(),L.empty(),-1)}}function Z2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zi(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==JE)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,r)=>{n(e)})}static reject(e){return new E((n,r)=>{r(e)})}static waitFor(e){return new E((n,r)=>{let i=0,s=0,a=!1;e.forEach(o=>{++i,o.next(()=>{++s,a&&s===i&&n()},f=>r(f))}),a=!0,s===i&&n()})}static or(e){let n=E.resolve(!1);for(const r of e)n=n.next(i=>i?E.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new E((r,i)=>{const s=e.length,a=new Array(s);let o=0;for(let f=0;f<s;f++){const u=f;n(e[u]).next(l=>{a[u]=l,++o,o===s&&r(a)},l=>i(l))}})}static doWhile(e,n){return new E((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.P=new at,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{n.error?this.P.reject(new Xf(e,n.error)):this.P.resolve()},this.transaction.onerror=r=>{const i=e3(r.target.error);this.P.reject(new Xf(e,i))}}static open(e,n,r,i){try{return new o1(n,e.transaction(i,r))}catch(s){throw new Xf(n,s)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(R("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new w$(n)}}class Kn{constructor(e,n,r){this.name=e,this.version=n,this.S=r,Kn.D(Ne())===12.2&&je("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return R("SimpleDb","Removing database:",e),cs(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!xu())return!1;if(Kn.N())return!0;const e=Ne(),n=Kn.D(e),r=0<n&&n<10,i=Kn.k(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static k(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async F(e){return this.db||(R("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const a=s.target.result;n(a)},i.onblocked=()=>{r(new Xf(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const a=s.target.error;a.name==="VersionError"?r(new x(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?r(new x(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):r(new Xf(e,a))},i.onupgradeneeded=s=>{R("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const a=s.target.result;this.S.$(a,i.transaction,s.oldVersion,this.version).next(()=>{R("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let a=0;for(;;){++a;try{this.db=await this.F(e);const o=o1.open(this.db,e,s?"readonly":"readwrite",r),f=i(o).next(u=>(o.V(),u)).catch(u=>(o.abort(u),E.reject(u))).toPromise();return f.catch(()=>{}),await o.v,f}catch(o){const f=o,u=f.name!=="FirebaseError"&&a<3;if(R("SimpleDb","Transaction failed with error:",f.message,"Retrying:",u),this.close(),!u)return Promise.reject(f)}}}close(){this.db&&this.db.close(),this.db=void 0}}class y${constructor(e){this.q=e,this.U=!1,this.K=null}get isDone(){return this.U}get G(){return this.K}set cursor(e){this.q=e}done(){this.U=!0}j(e){this.K=e}delete(){return cs(this.q.delete())}}class Xf extends x{constructor(e,n){super(S.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function es(t){return t.name==="IndexedDbTransactionError"}class w${constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(R("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(R("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),cs(r)}add(e){return R("SimpleDb","ADD",this.store.name,e,e),cs(this.store.add(e))}get(e){return cs(this.store.get(e)).next(n=>(n===void 0&&(n=null),R("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return R("SimpleDb","DELETE",this.store.name,e),cs(this.store.delete(e))}count(){return R("SimpleDb","COUNT",this.store.name),cs(this.store.count())}W(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.H(i,(a,o)=>{s.push(o)}).next(()=>s)}{const i=this.store.getAll(r.range);return new E((s,a)=>{i.onerror=o=>{a(o.target.error)},i.onsuccess=o=>{s(o.target.result)}})}}J(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new E((i,s)=>{r.onerror=a=>{s(a.target.error)},r.onsuccess=a=>{i(a.target.result)}})}Y(e,n){R("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.X=!1;const i=this.cursor(r);return this.H(i,(s,a,o)=>o.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.H(i,n)}tt(e){const n=this.cursor({});return new E((r,i)=>{n.onerror=s=>{const a=e3(s.target.error);i(a)},n.onsuccess=s=>{const a=s.target.result;a?e(a.primaryKey,a.value).next(o=>{o?a.continue():r()}):r()}})}H(e,n){const r=[];return new E((i,s)=>{e.onerror=a=>{s(a.target.error)},e.onsuccess=a=>{const o=a.target.result;if(!o)return void i();const f=new y$(o),u=n(o.primaryKey,o.value,f);if(u instanceof E){const l=u.catch(c=>(f.done(),E.reject(c)));r.push(l)}f.isDone?i():f.G===null?o.continue():o.continue(f.G)}}).next(()=>E.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.X?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function cs(t){return new E((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=e3(r.target.error);n(i)}})}let W4=!1;function e3(t){const e=Kn.D(Ne());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new x("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return W4||(W4=!0,setTimeout(()=>{throw r},0)),r}}return t}class b${constructor(e,n){this.asyncQueue=e,this.et=n,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){R("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{R("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(n){es(n)?R("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Zi(n)}await this.nt(6e4)})}}class _${constructor(e,n){this.localStore=e,this.persistence=n}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.it(n,e))}it(e,n){const r=new Set;let i=n,s=!0;return E.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(a=>{if(a!==null&&!r.has(a))return R("IndexBackiller",`Processing collection: ${a}`),this.rt(e,a,i).next(o=>{i-=o,r.add(a)});s=!1})).next(()=>n-i)}rt(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const a=s.changes;return this.localStore.indexManager.updateIndexEntries(e,a).next(()=>this.ot(i,s)).next(o=>(R("IndexBackiller",`Updating offset: ${o}`),this.localStore.indexManager.updateCollectionGroup(e,n,o))).next(()=>a.size)}))}ot(e,n){let r=e;return n.changes.forEach((i,s)=>{const a=XE(s);Z2(a,r)>0&&(r=a)}),new wn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Zt.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k${constructor(e,n,r,i,s,a,o,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.useFetchStreams=f}}class Fi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Fi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G4(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function aa(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function e5(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(t){return t==null}function Vu(t){return t===0&&1/t==-1/0}function t5(t){return typeof t=="number"&&Number.isInteger(t)&&!Vu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E$(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ze(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const I$=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ui(t){if(V(!!t),typeof t=="string"){let e=0;const n=I$.exec(t);if(V(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Hs(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t3(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function n5(t){const e=t.mapValue.fields.__previous_value__;return t3(e)?n5(e):e}function Bu(t){const e=Ui(t.mapValue.fields.__local_write_time__.timestampValue);return new Te(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Vc={nullValue:"NULL_VALUE"};function Ws(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?t3(t)?4:r5(t)?9007199254740991:10:$()}function Sr(t,e){if(t===e)return!0;const n=Ws(t);if(n!==Ws(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Bu(t).isEqual(Bu(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Ui(r.timestampValue),a=Ui(i.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Hs(r.bytesValue).isEqual(Hs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Me(r.geoPointValue.latitude)===Me(i.geoPointValue.latitude)&&Me(r.geoPointValue.longitude)===Me(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Me(r.integerValue)===Me(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Me(r.doubleValue),a=Me(i.doubleValue);return s===a?Vu(s)===Vu(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return po(t.arrayValue.values||[],e.arrayValue.values||[],Sr);case 10:return function(r,i){const s=r.mapValue.fields||{},a=i.mapValue.fields||{};if(G4(s)!==G4(a))return!1;for(const o in s)if(s.hasOwnProperty(o)&&(a[o]===void 0||!Sr(s[o],a[o])))return!1;return!0}(t,e);default:return $()}}function qu(t,e){return(t.values||[]).find(n=>Sr(n,e))!==void 0}function ji(t,e){if(t===e)return 0;const n=Ws(t),r=Ws(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(i,s){const a=Me(i.integerValue||i.doubleValue),o=Me(s.integerValue||s.doubleValue);return a<o?-1:a>o?1:a===o?0:isNaN(a)?isNaN(o)?0:-1:1}(t,e);case 3:return K4(t.timestampValue,e.timestampValue);case 4:return K4(Bu(t),Bu(e));case 5:return Z(t.stringValue,e.stringValue);case 6:return function(i,s){const a=Hs(i),o=Hs(s);return a.compareTo(o)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const a=i.split("/"),o=s.split("/");for(let f=0;f<a.length&&f<o.length;f++){const u=Z(a[f],o[f]);if(u!==0)return u}return Z(a.length,o.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const a=Z(Me(i.latitude),Me(s.latitude));return a!==0?a:Z(Me(i.longitude),Me(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const a=i.values||[],o=s.values||[];for(let f=0;f<a.length&&f<o.length;++f){const u=ji(a[f],o[f]);if(u)return u}return Z(a.length,o.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===_i.mapValue&&s===_i.mapValue)return 0;if(i===_i.mapValue)return 1;if(s===_i.mapValue)return-1;const a=i.fields||{},o=Object.keys(a),f=s.fields||{},u=Object.keys(f);o.sort(),u.sort();for(let l=0;l<o.length&&l<u.length;++l){const c=Z(o[l],u[l]);if(c!==0)return c;const d=ji(a[o[l]],f[u[l]]);if(d!==0)return d}return Z(o.length,u.length)}(t.mapValue,e.mapValue);default:throw $()}}function K4(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=Ui(t),r=Ui(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function mo(t){return _m(t)}function _m(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Ui(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Hs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const a of r.values||[])s?s=!1:i+=",",i+=_m(a);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",a=!0;for(const o of i)a?a=!1:s+=",",s+=`${o}:${_m(r.fields[o])}`;return s+"}"}(t.mapValue):$();var e,n}function Gs(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function km(t){return!!t&&"integerValue"in t}function Hu(t){return!!t&&"arrayValue"in t}function Q4(t){return!!t&&"nullValue"in t}function Y4(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bc(t){return!!t&&"mapValue"in t}function Jf(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return aa(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Jf(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Jf(t.arrayValue.values[n]);return e}return Object.assign({},t)}function r5(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function S$(t){return"nullValue"in t?Vc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Gs(Fi.empty(),L.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:$()}function T$(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Gs(Fi.empty(),L.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?_i:$()}function X4(t,e){const n=ji(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function J4(t,e){const n=ji(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n){this.position=e,this.inclusive=n}}function Z4(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),n.key):r=ji(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function e6(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Sr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i5{}class re extends i5{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new C$(e,n,r):n==="array-contains"?new A$(e,r):n==="in"?new l5(e,r):n==="not-in"?new N$(e,r):n==="array-contains-any"?new D$(e,r):new re(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new x$(e,r):new R$(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ji(n,this.value)):n!==null&&Ws(this.value)===Ws(n)&&this.matchesComparison(ji(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ce extends i5{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new ce(e,n)}matches(e){return go(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function go(t){return t.op==="and"}function Em(t){return t.op==="or"}function n3(t){return s5(t)&&go(t)}function s5(t){for(const e of t.filters)if(e instanceof ce)return!1;return!0}function Im(t){if(t instanceof re)return t.field.canonicalString()+t.op.toString()+mo(t.value);if(n3(t))return t.filters.map(e=>Im(e)).join(",");{const e=t.filters.map(n=>Im(n)).join(",");return`${t.op}(${e})`}}function a5(t,e){return t instanceof re?function(n,r){return r instanceof re&&n.op===r.op&&n.field.isEqual(r.field)&&Sr(n.value,r.value)}(t,e):t instanceof ce?function(n,r){return r instanceof ce&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,a)=>i&&a5(s,r.filters[a]),!0):!1}(t,e):void $()}function o5(t,e){const n=t.filters.concat(e);return ce.create(n,t.op)}function f5(t){return t instanceof re?function(e){return`${e.field.canonicalString()} ${e.op} ${mo(e.value)}`}(t):t instanceof ce?function(e){return e.op.toString()+" {"+e.getFilters().map(f5).join(" ,")+"}"}(t):"Filter"}class C$ extends re{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class x$ extends re{constructor(e,n){super(e,"in",n),this.keys=u5("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class R$ extends re{constructor(e,n){super(e,"not-in",n),this.keys=u5("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function u5(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class A$ extends re{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hu(n)&&qu(n.arrayValue,this.value)}}class l5 extends re{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&qu(this.value.arrayValue,n)}}class N$ extends re{constructor(e,n){super(e,"not-in",n)}matches(e){if(qu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!qu(this.value.arrayValue,n)}}class D$ extends re{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>qu(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n="asc"){this.field=e,this.dir=n}}function P$(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){this.comparator=e,this.root=n||pt.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yc(this.root,e,this.comparator,!1)}getReverseIterator(){return new yc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yc(this.root,e,this.comparator,!0)}}class yc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??pt.RED,this.left=i??pt.EMPTY,this.right=s??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new pt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return pt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,n,r,i){return this}insert(t,e,n){return new pt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new t6(this.data.getIterator())}getIteratorFrom(e){return new t6(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pe(this.comparator);return n.data=e,n}}class t6{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ba(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new en([])}unionWith(e){let n=new pe(ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new en(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return po(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Bc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jf(n)}setAll(e){let n=ze.emptyPath(),r={},i=[];e.forEach((a,o)=>{if(!n.isImmediateParentOf(o)){const f=this.getFieldsMap(n);this.applyChanges(f,r,i),r={},i=[],n=o.popLast()}a?r[o.lastSegment()]=Jf(a):i.push(o.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Bc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Sr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Bc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){aa(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mt(Jf(this.value))}}function c5(t){const e=[];return aa(t.fields,(n,r)=>{const i=new ze([n]);if(Bc(r)){const s=c5(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new en(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n,r,i,s,a,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=o}static newInvalidDocument(e){return new we(e,0,q.min(),q.min(),q.min(),mt.empty(),0)}static newFoundDocument(e,n,r,i){return new we(e,1,n,q.min(),r,i,0)}static newNoDocument(e,n){return new we(e,2,n,q.min(),q.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new we(e,3,n,q.min(),q.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof we&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new we(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M${constructor(e,n=null,r=[],i=[],s=null,a=null,o=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=o,this.ft=null}}function Sm(t,e=null,n=[],r=[],i=null,s=null,a=null){return new M$(t,e,n,r,i,s,a)}function Ks(t){const e=O(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Im(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Il(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>mo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>mo(r)).join(",")),e.ft=n}return e.ft}function Sl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!P$(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!a5(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!e6(t.startAt,e.startAt)&&e6(t.endAt,e.endAt)}function qd(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Hd(t,e){return t.filters.filter(n=>n instanceof re&&n.field.isEqual(e))}function n6(t,e,n){let r=Vc,i=!0;for(const s of Hd(t,e)){let a=Vc,o=!0;switch(s.op){case"<":case"<=":a=S$(s.value);break;case"==":case"in":case">=":a=s.value;break;case">":a=s.value,o=!1;break;case"!=":case"not-in":a=Vc}X4({value:r,inclusive:i},{value:a,inclusive:o})<0&&(r=a,i=o)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const a=n.position[s];X4({value:r,inclusive:i},{value:a,inclusive:n.inclusive})<0&&(r=a,i=n.inclusive);break}}return{value:r,inclusive:i}}function r6(t,e,n){let r=_i,i=!0;for(const s of Hd(t,e)){let a=_i,o=!0;switch(s.op){case">=":case">":a=T$(s.value),o=!1;break;case"==":case"in":case"<=":a=s.value;break;case"<":a=s.value,o=!1;break;case"!=":case"not-in":a=_i}J4({value:r,inclusive:i},{value:a,inclusive:o})>0&&(r=a,i=o)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const a=n.position[s];J4({value:r,inclusive:i},{value:a,inclusive:n.inclusive})>0&&(r=a,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n=null,r=[],i=[],s=null,a="F",o=null,f=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=o,this.endAt=f,this.dt=null,this._t=null,this.startAt,this.endAt}}function d5(t,e,n,r,i,s,a,o){return new ei(t,e,n,r,i,s,a,o)}function Vo(t){return new ei(t)}function i6(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function r3(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function f1(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function i3(t){return t.collectionGroup!==null}function Ns(t){const e=O(t);if(e.dt===null){e.dt=[];const n=f1(e),r=r3(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Ja(n)),e.dt.push(new Ja(ze.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ja(ze.keyField(),s))}}}return e.dt}function on(t){const e=O(t);if(!e._t)if(e.limitType==="F")e._t=Sm(e.path,e.collectionGroup,Ns(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ns(e)){const a=s.dir==="desc"?"asc":"desc";n.push(new Ja(s.field,a))}const r=e.endAt?new zi(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new zi(e.startAt.position,e.startAt.inclusive):null;e._t=Sm(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Tm(t,e){e.getFirstInequalityField(),f1(t);const n=t.filters.concat([e]);return new ei(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Wd(t,e,n){return new ei(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Tl(t,e){return Sl(on(t),on(e))&&t.limitType===e.limitType}function h5(t){return`${Ks(on(t))}|lt:${t.limitType}`}function Cm(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>f5(r)).join(", ")}]`),Il(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>mo(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>mo(r)).join(",")),`Target(${n})`}(on(t))}; limitType=${t.limitType})`}function Cl(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):L.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Ns(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,a){const o=Z4(i,s,a);return i.inclusive?o<=0:o<0}(n.startAt,Ns(n),r)||n.endAt&&!function(i,s,a){const o=Z4(i,s,a);return i.inclusive?o>=0:o>0}(n.endAt,Ns(n),r))}(t,e)}function p5(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function m5(t){return(e,n)=>{let r=!1;for(const i of Ns(t)){const s=L$(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function L$(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(i,s,a){const o=s.data.field(i),f=a.data.field(i);return o!==null&&f!==null?ji(o,f):$()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g5(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vu(e)?"-0":e}}function v5(t){return{integerValue:""+t}}function y5(t,e){return t5(e)?v5(e):g5(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(){this._=void 0}}function O$(t,e,n){return t instanceof vo?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Qs?b5(t,e):t instanceof Ys?_5(t,e):function(r,i){const s=w5(r,i),a=s6(s)+s6(r.gt);return km(s)&&km(r.gt)?v5(a):g5(r.yt,a)}(t,e)}function $$(t,e,n){return t instanceof Qs?b5(t,e):t instanceof Ys?_5(t,e):n}function w5(t,e){return t instanceof yo?km(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class vo extends u1{}class Qs extends u1{constructor(e){super(),this.elements=e}}function b5(t,e){const n=k5(e);for(const r of t.elements)n.some(i=>Sr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ys extends u1{constructor(e){super(),this.elements=e}}function _5(t,e){let n=k5(e);for(const r of t.elements)n=n.filter(i=>!Sr(i,r));return{arrayValue:{values:n}}}class yo extends u1{constructor(e,n){super(),this.yt=e,this.gt=n}}function s6(t){return Me(t.integerValue||t.doubleValue)}function k5(t){return Hu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n){this.field=e,this.transform=n}}function F$(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Qs&&r instanceof Qs||n instanceof Ys&&r instanceof Ys?po(n.elements,r.elements,Sr):n instanceof yo&&r instanceof yo?Sr(n.gt,r.gt):n instanceof vo&&r instanceof vo}(t.transform,e.transform)}class U${constructor(e,n){this.version=e,this.transformResults=n}}class Se{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Se}static exists(e){return new Se(void 0,e)}static updateTime(e){return new Se(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class l1{}function E5(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new qo(t.key,Se.none()):new Bo(t.key,t.data,Se.none());{const n=t.data,r=mt.empty();let i=new pe(ze.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new ti(t.key,r,new en(i.toArray()),Se.none())}}function j$(t,e,n){t instanceof Bo?function(r,i,s){const a=r.value.clone(),o=o6(r.fieldTransforms,i,s.transformResults);a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ti?function(r,i,s){if(!qc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const a=o6(r.fieldTransforms,i,s.transformResults),o=i.data;o.setAll(I5(r)),o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Zf(t,e,n,r){return t instanceof Bo?function(i,s,a,o){if(!qc(i.precondition,s))return a;const f=i.value.clone(),u=f6(i.fieldTransforms,o,s);return f.setAll(u),s.convertToFoundDocument(s.version,f).setHasLocalMutations(),null}(t,e,n,r):t instanceof ti?function(i,s,a,o){if(!qc(i.precondition,s))return a;const f=f6(i.fieldTransforms,o,s),u=s.data;return u.setAll(I5(i)),u.setAll(f),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(t,e,n,r):function(i,s,a){return qc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function z$(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=w5(r.transform,i||null);s!=null&&(n===null&&(n=mt.empty()),n.set(r.field,s))}return n||null}function a6(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&po(n,r,(i,s)=>F$(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Bo extends l1{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ti extends l1{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function I5(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function o6(t,e,n){const r=new Map;V(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,o=e.data.field(s.field);r.set(s.field,$$(a,o,n[i]))}return r}function f6(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,O$(s,a,e))}return r}class qo extends l1{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class s3 extends l1{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V${constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He,se;function S5(t){switch(t){default:return $();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function T5(t){if(t===void 0)return je("GRPC error has no .code"),S.UNKNOWN;switch(t){case He.OK:return S.OK;case He.CANCELLED:return S.CANCELLED;case He.UNKNOWN:return S.UNKNOWN;case He.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case He.INTERNAL:return S.INTERNAL;case He.UNAVAILABLE:return S.UNAVAILABLE;case He.UNAUTHENTICATED:return S.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case He.NOT_FOUND:return S.NOT_FOUND;case He.ALREADY_EXISTS:return S.ALREADY_EXISTS;case He.PERMISSION_DENIED:return S.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case He.ABORTED:return S.ABORTED;case He.OUT_OF_RANGE:return S.OUT_OF_RANGE;case He.UNIMPLEMENTED:return S.UNIMPLEMENTED;case He.DATA_LOSS:return S.DATA_LOSS;default:return $()}}(se=He||(He={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){aa(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return e5(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B$=new Oe(L.comparator);function tn(){return B$}const C5=new Oe(L.comparator);function Af(...t){let e=C5;for(const n of t)e=e.insert(n.key,n);return e}function x5(t){let e=C5;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function mr(){return eu()}function R5(){return eu()}function eu(){return new ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const q$=new Oe(L.comparator),H$=new pe(L.comparator);function ee(...t){let e=H$;for(const n of t)e=e.add(n);return e}const W$=new pe(Z);function c1(){return W$}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Al.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Rl(q.min(),i,c1(),tn(),ee())}}class Al{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Al(r,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class A5{constructor(e,n){this.targetId=e,this.Et=n}}class N5{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class u6{constructor(){this.At=0,this.Rt=c6(),this.bt=Ze.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=ee(),n=ee(),r=ee();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:$()}}),new Al(this.bt,this.Pt,e,n,r)}xt(){this.vt=!1,this.Rt=c6()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class G${constructor(e){this.$t=e,this.Bt=new Map,this.Lt=tn(),this.qt=l6(),this.Ut=new pe(Z)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const r=this.Wt(n);switch(e.state){case 0:this.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){const s=i.target;if(qd(s))if(r===0){const a=new L(s.path);this.Qt(n,a,we.newNoDocument(a,q.min()))}else V(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((s,a)=>{const o=this.Yt(a);if(o){if(s.current&&qd(o.target)){const f=new L(o.target.path);this.Lt.get(f)!==null||this.te(a,f)||this.Qt(a,f,we.newNoDocument(f,e))}s.St&&(n.set(a,s.Ct()),s.xt())}});let r=ee();this.qt.forEach((s,a)=>{let o=!0;a.forEachWhile(f=>{const u=this.Yt(f);return!u||u.purpose===2||(o=!1,!1)}),o&&(r=r.add(s))}),this.Lt.forEach((s,a)=>a.setReadTime(e));const i=new Rl(e,n,this.Ut,this.Lt,r);return this.Lt=tn(),this.qt=l6(),this.Ut=new pe(Z),i}Gt(e,n){if(!this.zt(e))return;const r=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new u6,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new pe(Z),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new u6),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function l6(){return new Oe(L.comparator)}function c6(){return new Oe(L.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K$=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Q$=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Y$=(()=>({and:"AND",or:"OR"}))();class X${constructor(e,n){this.databaseId=e,this.wt=n}}function wo(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function D5(t,e){return t.wt?e.toBase64():e.toUint8Array()}function J$(t,e){return wo(t,e.toTimestamp())}function Ve(t){return V(!!t),q.fromTimestamp(function(e){const n=Ui(e);return new Te(n.seconds,n.nanos)}(t))}function a3(t,e){return function(n){return new ae(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function P5(t){const e=ae.fromString(t);return V(V5(e)),e}function Wu(t,e){return a3(t.databaseId,e.path)}function _r(t,e){const n=P5(e);if(n.get(1)!==t.databaseId.projectId)throw new x(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(L5(n))}function xm(t,e){return a3(t.databaseId,e)}function M5(t){const e=P5(t);return e.length===4?ae.emptyPath():L5(e)}function Gu(t){return new ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function L5(t){return V(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function d6(t,e,n){return{name:Wu(t,e),fields:n.value.mapValue.fields}}function O5(t,e,n){const r=_r(t,e.name),i=Ve(e.updateTime),s=e.createTime?Ve(e.createTime):q.min(),a=new mt({mapValue:{fields:e.fields}}),o=we.newFoundDocument(r,i,s,a);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Z$(t,e){return"found"in e?function(n,r){V(!!r.found),r.found.name,r.found.updateTime;const i=_r(n,r.found.name),s=Ve(r.found.updateTime),a=r.found.createTime?Ve(r.found.createTime):q.min(),o=new mt({mapValue:{fields:r.found.fields}});return we.newFoundDocument(i,s,a,o)}(t,e):"missing"in e?function(n,r){V(!!r.missing),V(!!r.readTime);const i=_r(n,r.missing),s=Ve(r.readTime);return we.newNoDocument(i,s)}(t,e):$()}function eF(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(f,u){return f.wt?(V(u===void 0||typeof u=="string"),Ze.fromBase64String(u||"")):(V(u===void 0||u instanceof Uint8Array),Ze.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,o=a&&function(f){const u=f.code===void 0?S.UNKNOWN:T5(f.code);return new x(u,f.message||"")}(a);n=new N5(r,i,s,o||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=_r(t,r.document.name),s=Ve(r.document.updateTime),a=r.document.createTime?Ve(r.document.createTime):q.min(),o=new mt({mapValue:{fields:r.document.fields}}),f=we.newFoundDocument(i,s,a,o),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Hc(u,l,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=_r(t,r.document),s=r.readTime?Ve(r.readTime):q.min(),a=we.newNoDocument(i,s),o=r.removedTargetIds||[];n=new Hc([],o,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=_r(t,r.document),s=r.removedTargetIds||[];n=new Hc([],s,i,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new V$(i),a=r.targetId;n=new A5(a,s)}}return n}function Ku(t,e){let n;if(e instanceof Bo)n={update:d6(t,e.key,e.value)};else if(e instanceof qo)n={delete:Wu(t,e.key)};else if(e instanceof ti)n={update:d6(t,e.key,e.data),updateMask:aF(e.fieldMask)};else{if(!(e instanceof s3))return $();n={verify:Wu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const a=s.transform;if(a instanceof vo)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Qs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ys)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof yo)return{fieldPath:s.field.canonicalString(),increment:a.gt};throw $()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:J$(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$()}(t,e.precondition)),n}function Rm(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Se.updateTime(Ve(i.updateTime)):i.exists!==void 0?Se.exists(i.exists):Se.none()}(e.currentDocument):Se.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,a){let o=null;if("setToServerValue"in a)V(a.setToServerValue==="REQUEST_TIME"),o=new vo;else if("appendMissingElements"in a){const u=a.appendMissingElements.values||[];o=new Qs(u)}else if("removeAllFromArray"in a){const u=a.removeAllFromArray.values||[];o=new Ys(u)}else"increment"in a?o=new yo(s,a.increment):$();const f=ze.fromServerFormat(a.fieldPath);return new xl(f,o)}(t,i)):[];if(e.update){e.update.name;const i=_r(t,e.update.name),s=new mt({mapValue:{fields:e.update.fields}});if(e.updateMask){const a=function(o){const f=o.fieldPaths||[];return new en(f.map(u=>ze.fromServerFormat(u)))}(e.updateMask);return new ti(i,s,a,n,r)}return new Bo(i,s,n,r)}if(e.delete){const i=_r(t,e.delete);return new qo(i,n)}if(e.verify){const i=_r(t,e.verify);return new s3(i,n)}return $()}function tF(t,e){return t&&t.length>0?(V(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Ve(r.updateTime):Ve(i);return s.isEqual(q.min())&&(s=Ve(i)),new U$(s,r.transformResults||[])}(n,e))):[]}function $5(t,e){return{documents:[xm(t,e.path)]}}function F5(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=xm(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=xm(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(f){if(f.length!==0)return z5(ce.create(f,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(f){if(f.length!==0)return f.map(u=>function(l){return{field:ka(l.field),direction:rF(l.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=function(f,u){return f.wt||Il(u)?u:{value:u}}(t,e.limit);var o;return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt={before:(o=e.startAt).inclusive,values:o.position}),e.endAt&&(n.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),n}function U5(t){let e=M5(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){V(r===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];n.where&&(s=function(l){const c=j5(l);return c instanceof ce&&n3(c)?c.getFilters():[c]}(n.where));let a=[];n.orderBy&&(a=n.orderBy.map(l=>function(c){return new Ja(Ea(c.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(c.direction))}(l)));let o=null;n.limit&&(o=function(l){let c;return c=typeof l=="object"?l.value:l,Il(c)?null:c}(n.limit));let f=null;n.startAt&&(f=function(l){const c=!!l.before,d=l.values||[];return new zi(d,c)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const c=!l.before,d=l.values||[];return new zi(d,c)}(n.endAt)),d5(e,i,a,s,o,"F",f,u)}function nF(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return $()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function j5(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ea(e.unaryFilter.field);return re.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Ea(e.unaryFilter.field);return re.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ea(e.unaryFilter.field);return re.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ea(e.unaryFilter.field);return re.create(s,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(t):t.fieldFilter!==void 0?function(e){return re.create(Ea(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ce.create(e.compositeFilter.filters.map(n=>j5(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return $()}}(e.compositeFilter.op))}(t):$()}function rF(t){return K$[t]}function iF(t){return Q$[t]}function sF(t){return Y$[t]}function ka(t){return{fieldPath:t.canonicalString()}}function Ea(t){return ze.fromServerFormat(t.fieldPath)}function z5(t){return t instanceof re?function(e){if(e.op==="=="){if(Y4(e.value))return{unaryFilter:{field:ka(e.field),op:"IS_NAN"}};if(Q4(e.value))return{unaryFilter:{field:ka(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Y4(e.value))return{unaryFilter:{field:ka(e.field),op:"IS_NOT_NAN"}};if(Q4(e.value))return{unaryFilter:{field:ka(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ka(e.field),op:iF(e.op),value:e.value}}}(t):t instanceof ce?function(e){const n=e.getFilters().map(r=>z5(r));return n.length===1?n[0]:{compositeFilter:{op:sF(e.op),filters:n}}}(t):$()}function aF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function V5(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=h6(e)),e=oF(t.get(n),e);return h6(e)}function oF(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function h6(t){return t+""}function gr(t){const e=t.length;if(V(e>=2),e===2)return V(t.charAt(0)===""&&t.charAt(1)===""),ae.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const a=t.indexOf("",s);switch((a<0||a>n)&&$(),t.charAt(a+1)){case"":const o=t.substring(s,a);let f;i.length===0?f=o:(i+=o,f=i,i=""),r.push(f);break;case"":i+=t.substring(s,a),i+="\0";break;case"":i+=t.substring(s,a+1);break;default:$()}s=a+2}return new ae(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p6=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(t,e){return[t,Vt(e)]}function B5(t,e,n){return[t,Vt(e),n]}const fF={},uF=["prefixPath","collectionGroup","readTime","documentId"],lF=["prefixPath","collectionGroup","documentId"],cF=["collectionGroup","readTime","prefixPath","documentId"],dF=["canonicalId","targetId"],hF=["targetId","path"],pF=["path","targetId"],mF=["collectionId","parent"],gF=["indexId","uid"],vF=["uid","sequenceNumber"],yF=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],wF=["indexId","uid","orderedDocumentKey"],bF=["userId","collectionPath","documentId"],_F=["userId","collectionPath","largestBatchId"],kF=["userId","collectionGroup","largestBatchId"],q5=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],EF=[...q5,"documentOverlays"],H5=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],W5=H5,IF=[...W5,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am extends ZE{constructor(e,n){super(),this.se=e,this.currentSequenceNumber=n}}function lt(t,e){const n=O(t);return Kn.M(n.se,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o3{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&j$(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Zf(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Zf(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=R5();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let o=this.applyToLocalView(a,s.mutatedFields);o=n.has(i.key)?null:o;const f=E5(a,o);f!==null&&r.set(i.key,f),a.isValidDocument()||a.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&po(this.mutations,e.mutations,(n,r)=>a6(n,r))&&po(this.baseMutations,e.baseMutations,(n,r)=>a6(n,r))}}class f3{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){V(e.mutations.length===r.length);let i=q$;const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new f3(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u3{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n,r,i,s=q.min(),a=q.min(),o=Ze.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=o}withSequenceNumber(e){return new Di(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G5{constructor(e){this.ie=e}}function SF(t,e){let n;if(e.document)n=O5(t.ie,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=L.fromSegments(e.noDocument.path),i=Js(e.noDocument.readTime);n=we.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return $();{const r=L.fromSegments(e.unknownDocument.path),i=Js(e.unknownDocument.version);n=we.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new Te(r[0],r[1]);return q.fromTimestamp(i)}(e.readTime)),n}function m6(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Gd(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:Wu(i,s.key),fields:s.data.value.mapValue.fields,updateTime:wo(i,s.version.toTimestamp()),createTime:wo(i,s.createTime.toTimestamp())}}(t.ie,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Xs(e.version)};else{if(!e.isUnknownDocument())return $();r.unknownDocument={path:n.path.toArray(),version:Xs(e.version)}}return r}function Gd(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Xs(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Js(t){const e=new Te(t.seconds,t.nanoseconds);return q.fromTimestamp(e)}function ds(t,e){const n=(e.baseMutations||[]).map(s=>Rm(t.ie,s));for(let s=0;s<e.mutations.length-1;++s){const a=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const o=e.mutations[s+1];a.updateTransforms=o.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Rm(t.ie,s)),i=Te.fromMillis(e.localWriteTimeMs);return new o3(e.batchId,i,n,r)}function Nf(t){const e=Js(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Js(t.lastLimboFreeSnapshotVersion):q.min();let r;var i;return t.query.documents!==void 0?(V((i=t.query).documents.length===1),r=on(Vo(M5(i.documents[0])))):r=function(s){return on(U5(s))}(t.query),new Di(r,t.targetId,0,t.lastListenSequenceNumber,e,n,Ze.fromBase64String(t.resumeToken))}function K5(t,e){const n=Xs(e.snapshotVersion),r=Xs(e.lastLimboFreeSnapshotVersion);let i;i=qd(e.target)?$5(t.ie,e.target):F5(t.ie,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ks(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function l3(t){const e=U5({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Wd(e,e.limit,"L"):e}function j0(t,e){return new u3(e.largestBatchId,Rm(t.ie,e.overlayMutation))}function g6(t,e){const n=e.path.lastSegment();return[t,Vt(e.path.popLast()),n]}function v6(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Xs(r.readTime),documentKey:Vt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TF{getBundleMetadata(e,n){return y6(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Js(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return y6(e).put({bundleId:(r=n).id,createTime:Xs(Ve(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return w6(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:l3(i.bundledQuery),readTime:Js(i.readTime)};var i})}saveNamedQuery(e,n){return w6(e).put(function(r){return{name:r.name,readTime:Xs(Ve(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function y6(t){return lt(t,"bundles")}function w6(t){return lt(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e,n){this.yt=e,this.userId=n}static re(e,n){const r=n.uid||"";return new d1(e,r)}getOverlay(e,n){return pf(e).get(g6(this.userId,n)).next(r=>r?j0(this.yt,r):null)}getOverlays(e,n){const r=mr();return E.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,a)=>{const o=new u3(n,a);i.push(this.oe(e,o))}),E.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(a=>i.add(Vt(a.getCollectionPath())));const s=[];return i.forEach(a=>{const o=IDBKeyRange.bound([this.userId,a,r],[this.userId,a,r+1],!1,!0);s.push(pf(e).Y("collectionPathOverlayIndex",o))}),E.waitFor(s)}getOverlaysForCollection(e,n,r){const i=mr(),s=Vt(n),a=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return pf(e).W("collectionPathOverlayIndex",a).next(o=>{for(const f of o){const u=j0(this.yt,f);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=mr();let a;const o=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return pf(e).Z({index:"collectionGroupOverlayIndex",range:o},(f,u,l)=>{const c=j0(this.yt,u);s.size()<i||c.largestBatchId===a?(s.set(c.getKey(),c),a=c.largestBatchId):l.done()}).next(()=>s)}oe(e,n){return pf(e).put(function(r,i,s){const[a,o,f]=g6(i,s.mutation.key);return{userId:i,collectionPath:o,documentId:f,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:Ku(r.ie,s.mutation)}}(this.yt,this.userId,n))}}function pf(t){return lt(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){}ue(e,n){this.ce(e,n),n.ae()}ce(e,n){if("nullValue"in e)this.he(n,5);else if("booleanValue"in e)this.he(n,10),n.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(n,15),n.le(Me(e.integerValue));else if("doubleValue"in e){const r=Me(e.doubleValue);isNaN(r)?this.he(n,13):(this.he(n,15),Vu(r)?n.le(0):n.le(r))}else if("timestampValue"in e){const r=e.timestampValue;this.he(n,20),typeof r=="string"?n.fe(r):(n.fe(`${r.seconds||""}`),n.le(r.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,n),this._e(n);else if("bytesValue"in e)this.he(n,30),n.we(Hs(e.bytesValue)),this._e(n);else if("referenceValue"in e)this.me(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.he(n,45),n.le(r.latitude||0),n.le(r.longitude||0)}else"mapValue"in e?r5(e)?this.he(n,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,n),this._e(n)):"arrayValue"in e?(this.ye(e.arrayValue,n),this._e(n)):$()}de(e,n){this.he(n,25),this.pe(e,n)}pe(e,n){n.fe(e)}ge(e,n){const r=e.fields||{};this.he(n,55);for(const i of Object.keys(r))this.de(i,n),this.ce(r[i],n)}ye(e,n){const r=e.values||[];this.he(n,50);for(const i of r)this.ce(i,n)}me(e,n){this.he(n,37),L.fromName(e).path.forEach(r=>{this.he(n,60),this.pe(r,n)})}he(e,n){e.le(n)}_e(e){e.le(2)}}hs.Ie=new hs;function CF(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function b6(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=CF(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class xF{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Te(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ee(r.value),r=n.next();this.Ae()}Re(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.be(r.value),r=n.next();this.Pe()}ve(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ee(r);else if(r<2048)this.Ee(960|r>>>6),this.Ee(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ee(480|r>>>12),this.Ee(128|63&r>>>6),this.Ee(128|63&r);else{const i=n.codePointAt(0);this.Ee(240|i>>>18),this.Ee(128|63&i>>>12),this.Ee(128|63&i>>>6),this.Ee(128|63&i)}}this.Ae()}Ve(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.be(r);else if(r<2048)this.be(960|r>>>6),this.be(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.be(480|r>>>12),this.be(128|63&r>>>6),this.be(128|63&r);else{const i=n.codePointAt(0);this.be(240|i>>>18),this.be(128|63&i>>>12),this.be(128|63&i>>>6),this.be(128|63&i)}}this.Pe()}Se(e){const n=this.De(e),r=b6(n);this.Ce(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}xe(e){const n=this.De(e),r=b6(n);this.Ce(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Ne(){this.ke(255),this.ke(255)}Oe(){this.Me(255),this.Me(255)}reset(){this.position=0}seed(e){this.Ce(e.length),this.buffer.set(e,this.position),this.position+=e.length}Fe(){return this.buffer.slice(0,this.position)}De(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ee(e){const n=255&e;n===0?(this.ke(0),this.ke(255)):n===255?(this.ke(255),this.ke(0)):this.ke(n)}be(e){const n=255&e;n===0?(this.Me(0),this.Me(255)):n===255?(this.Me(255),this.Me(0)):this.Me(e)}Ae(){this.ke(0),this.ke(1)}Pe(){this.Me(0),this.Me(1)}ke(e){this.Ce(1),this.buffer[this.position++]=e}Me(e){this.Ce(1),this.buffer[this.position++]=~e}Ce(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class RF{constructor(e){this.$e=e}we(e){this.$e.Te(e)}fe(e){this.$e.ve(e)}le(e){this.$e.Se(e)}ae(){this.$e.Ne()}}class AF{constructor(e){this.$e=e}we(e){this.$e.Re(e)}fe(e){this.$e.Ve(e)}le(e){this.$e.xe(e)}ae(){this.$e.Oe()}}class mf{constructor(){this.$e=new xF,this.Be=new RF(this.$e),this.Le=new AF(this.$e)}seed(e){this.$e.seed(e)}qe(e){return e===0?this.Be:this.Le}Fe(){return this.$e.Fe()}reset(){this.$e.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Ue(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ps(this.indexId,this.documentKey,this.arrayValue,r)}}function ai(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=_6(t.arrayValue,e.arrayValue),n!==0?n:(n=_6(t.directionalValue,e.directionalValue),n!==0?n:L.comparator(t.documentKey,e.documentKey)))}function _6(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NF{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ke=e.orderBy,this.Ge=[];for(const n of e.filters){const r=n;r.isInequality()?this.Qe=r:this.Ge.push(r)}}je(e){V(e.collectionGroup===this.collectionId);const n=bm(e);if(n!==void 0&&!this.We(n))return!1;const r=ls(e);let i=0,s=0;for(;i<r.length&&this.We(r[i]);++i);if(i===r.length)return!0;if(this.Qe!==void 0){const a=r[i];if(!this.ze(this.Qe,a)||!this.He(this.Ke[s++],a))return!1;++i}for(;i<r.length;++i){const a=r[i];if(s>=this.Ke.length||!this.He(this.Ke[s++],a))return!1}return!0}We(e){for(const n of this.Ge)if(this.ze(n,e))return!0;return!1}ze(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}He(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q5(t){var e,n;if(V(t instanceof re||t instanceof ce),t instanceof re){if(t instanceof l5){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>re.create(t.field,"==",s)))||[];return ce.create(i,"or")}return t}const r=t.filters.map(i=>Q5(i));return ce.create(r,t.op)}function DF(t){if(t.getFilters().length===0)return[];const e=Pm(Q5(t));return V(Y5(e)),Nm(e)||Dm(e)?[e]:e.getFilters()}function Nm(t){return t instanceof re}function Dm(t){return t instanceof ce&&n3(t)}function Y5(t){return Nm(t)||Dm(t)||function(e){if(e instanceof ce&&Em(e)){for(const n of e.getFilters())if(!Nm(n)&&!Dm(n))return!1;return!0}return!1}(t)}function Pm(t){if(V(t instanceof re||t instanceof ce),t instanceof re)return t;if(t.filters.length===1)return Pm(t.filters[0]);const e=t.filters.map(r=>Pm(r));let n=ce.create(e,t.op);return n=Kd(n),Y5(n)?n:(V(n instanceof ce),V(go(n)),V(n.filters.length>1),n.filters.reduce((r,i)=>c3(r,i)))}function c3(t,e){let n;return V(t instanceof re||t instanceof ce),V(e instanceof re||e instanceof ce),n=t instanceof re?e instanceof re?function(r,i){return ce.create([r,i],"and")}(t,e):k6(t,e):e instanceof re?k6(e,t):function(r,i){if(V(r.filters.length>0&&i.filters.length>0),go(r)&&go(i))return o5(r,i.getFilters());const s=Em(r)?r:i,a=Em(r)?i:r,o=s.filters.map(f=>c3(f,a));return ce.create(o,"or")}(t,e),Kd(n)}function k6(t,e){if(go(e))return o5(e,t.getFilters());{const n=e.filters.map(r=>c3(t,r));return ce.create(n,"or")}}function Kd(t){if(V(t instanceof re||t instanceof ce),t instanceof re)return t;const e=t.getFilters();if(e.length===1)return Kd(e[0]);if(s5(t))return t;const n=e.map(i=>Kd(i)),r=[];return n.forEach(i=>{i instanceof re?r.push(i):i instanceof ce&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ce.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PF{constructor(){this.Je=new d3}addToCollectionParentIndex(e,n){return this.Je.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(wn.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(wn.min())}updateCollectionGroup(e,n,r){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class d3{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new pe(ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new pe(ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=new Uint8Array(0);class MF{constructor(e,n){this.user=e,this.databaseId=n,this.Ye=new d3,this.Xe=new ts(r=>Ks(r),(r,i)=>Sl(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Ye.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.Ye.add(n)});const s={collectionId:r,parent:Vt(i)};return E6(e).put(s)}return E.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[KE(n),""],!1,!0);return E6(e).W(i).next(s=>{for(const a of s){if(a.collectionId!==n)break;r.push(gr(a.parent))}return r})}addFieldIndex(e,n){const r=bc(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(o=>[o.fieldPath.canonicalString(),o.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const a=vf(e);return s.next(o=>{a.put(v6(o,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=bc(e),i=vf(e),s=gf(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=gf(e);let i=!0;const s=new Map;return E.forEach(this.Ze(n),a=>this.tn(e,a).next(o=>{i&&(i=!!o),s.set(a,o)})).next(()=>{if(i){let a=ee();const o=[];return E.forEach(s,(f,u)=>{var l;R("IndexedDbIndexManager",`Using index ${l=f,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(y=>`${y.fieldPath}:${y.kind}`).join(",")}`} to execute ${Ks(n)}`);const c=function(y,b){const I=bm(b);if(I===void 0)return null;for(const T of Hd(y,I.fieldPath))switch(T.op){case"array-contains-any":return T.value.arrayValue.values||[];case"array-contains":return[T.value]}return null}(u,f),d=function(y,b){const I=new Map;for(const T of ls(b))for(const C of Hd(y,T.fieldPath))switch(C.op){case"==":case"in":I.set(T.fieldPath.canonicalString(),C.value);break;case"not-in":case"!=":return I.set(T.fieldPath.canonicalString(),C.value),Array.from(I.values())}return null}(u,f),h=function(y,b){const I=[];let T=!0;for(const C of ls(b)){const N=C.kind===0?n6(y,C.fieldPath,y.startAt):r6(y,C.fieldPath,y.startAt);I.push(N.value),T&&(T=N.inclusive)}return new zi(I,T)}(u,f),p=function(y,b){const I=[];let T=!0;for(const C of ls(b)){const N=C.kind===0?r6(y,C.fieldPath,y.endAt):n6(y,C.fieldPath,y.endAt);I.push(N.value),T&&(T=N.inclusive)}return new zi(I,T)}(u,f),v=this.en(f,u,h),k=this.en(f,u,p),g=this.nn(f,u,d),m=this.sn(f.indexId,c,v,h.inclusive,k,p.inclusive,g);return E.forEach(m,y=>r.J(y,n.limit).next(b=>{b.forEach(I=>{const T=L.fromSegments(I.documentKey);a.has(T)||(a=a.add(T),o.push(T))})}))}).next(()=>o)}return E.resolve(null)})}Ze(e){let n=this.Xe.get(e);return n||(e.filters.length===0?n=[e]:n=DF(ce.create(e.filters,"and")).map(r=>Sm(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Xe.set(e,n),n)}sn(e,n,r,i,s,a,o){const f=(n!=null?n.length:1)*Math.max(r.length,s.length),u=f/(n!=null?n.length:1),l=[];for(let c=0;c<f;++c){const d=n?this.rn(n[c/u]):wc,h=this.on(e,d,r[c%u],i),p=this.un(e,d,s[c%u],a),v=o.map(k=>this.on(e,d,k,!0));l.push(...this.createRange(h,p,v))}return l}on(e,n,r,i){const s=new ps(e,L.empty(),n,r);return i?s:s.Ue()}un(e,n,r,i){const s=new ps(e,L.empty(),n,r);return i?s.Ue():s}tn(e,n){const r=new NF(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let a=null;for(const o of s)r.je(o)&&(!a||o.fields.length>a.fields.length)&&(a=o);return a})}getIndexType(e,n){let r=2;const i=this.Ze(n);return E.forEach(i,s=>this.tn(e,s).next(a=>{a?r!==0&&a.fields.length<function(o){let f=new pe(ze.comparator),u=!1;for(const l of o.filters)for(const c of l.getFlattenedFilters())c.field.isKeyField()||(c.op==="array-contains"||c.op==="array-contains-any"?u=!0:f=f.add(c.field));for(const l of o.orderBy)l.field.isKeyField()||(f=f.add(l.field));return f.size+(u?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(n)&&i.length>1&&r===2?1:r)}cn(e,n){const r=new mf;for(const i of ls(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const a=r.qe(i.kind);hs.Ie.ue(s,a)}return r.Fe()}rn(e){const n=new mf;return hs.Ie.ue(e,n.qe(0)),n.Fe()}an(e,n){const r=new mf;return hs.Ie.ue(Gs(this.databaseId,n),r.qe(function(i){const s=ls(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Fe()}nn(e,n,r){if(r===null)return[];let i=[];i.push(new mf);let s=0;for(const a of ls(e)){const o=r[s++];for(const f of i)if(this.hn(n,a.fieldPath)&&Hu(o))i=this.ln(i,a,o);else{const u=f.qe(a.kind);hs.Ie.ue(o,u)}}return this.fn(i)}en(e,n,r){return this.nn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Fe();return n}ln(e,n,r){const i=[...e],s=[];for(const a of r.arrayValue.values||[])for(const o of i){const f=new mf;f.seed(o.Fe()),hs.Ie.ue(a,f.qe(n.kind)),s.push(f)}return s}hn(e,n){return!!e.filters.find(r=>r instanceof re&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=bc(e),i=vf(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const a=[];return E.forEach(s,o=>i.get([o.indexId,this.uid]).next(f=>{a.push(function(u,l){const c=l?new Bd(l.sequenceNumber,new wn(Js(l.readTime),new L(gr(l.documentKey)),l.largestBatchId)):Bd.empty(),d=u.fields.map(([h,p])=>new v$(ze.fromServerFormat(h),p));return new QE(u.indexId,u.collectionGroup,d,c)}(o,f))})).next(()=>a)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:Z(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=bc(e),s=vf(e);return this.dn(e).next(a=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(o=>E.forEach(o,f=>s.put(v6(f.indexId,this.user,a,r)))))}updateIndexEntries(e,n){const r=new Map;return E.forEach(n,(i,s)=>{const a=r.get(i.collectionGroup);return(a?E.resolve(a):this.getFieldIndexes(e,i.collectionGroup)).next(o=>(r.set(i.collectionGroup,o),E.forEach(o,f=>this._n(e,i,f).next(u=>{const l=this.wn(s,f);return u.isEqual(l)?E.resolve():this.mn(e,s,f,u,l)}))))})}gn(e,n,r,i){return gf(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.an(r,n.key),documentKey:n.key.path.toArray()})}yn(e,n,r,i){return gf(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.an(r,n.key),n.key.path.toArray()])}_n(e,n,r){const i=gf(e);let s=new pe(ai);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.an(r,n)])},(a,o)=>{s=s.add(new ps(r.indexId,n,o.arrayValue,o.directionalValue))}).next(()=>s)}wn(e,n){let r=new pe(ai);const i=this.cn(n,e);if(i==null)return r;const s=bm(n);if(s!=null){const a=e.data.field(s.fieldPath);if(Hu(a))for(const o of a.arrayValue.values||[])r=r.add(new ps(n.indexId,e.key,this.rn(o),i))}else r=r.add(new ps(n.indexId,e.key,wc,i));return r}mn(e,n,r,i,s){R("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const a=[];return function(o,f,u,l,c){const d=o.getIterator(),h=f.getIterator();let p=ba(d),v=ba(h);for(;p||v;){let k=!1,g=!1;if(p&&v){const m=u(p,v);m<0?g=!0:m>0&&(k=!0)}else p!=null?g=!0:k=!0;k?(l(v),v=ba(h)):g?(c(p),p=ba(d)):(p=ba(d),v=ba(h))}}(i,s,ai,o=>{a.push(this.gn(e,n,r,o))},o=>{a.push(this.yn(e,n,r,o))}),E.waitFor(a)}dn(e){let n=1;return vf(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((a,o)=>ai(a,o)).filter((a,o,f)=>!o||ai(a,f[o-1])!==0);const i=[];i.push(e);for(const a of r){const o=ai(a,e),f=ai(a,n);if(o===0)i[0]=e.Ue();else if(o>0&&f<0)i.push(a),i.push(a.Ue());else if(f>0)break}i.push(n);const s=[];for(let a=0;a<i.length;a+=2){if(this.pn(i[a],i[a+1]))return[];const o=[i[a].indexId,this.uid,i[a].arrayValue,i[a].directionalValue,wc,[]],f=[i[a+1].indexId,this.uid,i[a+1].arrayValue,i[a+1].directionalValue,wc,[]];s.push(IDBKeyRange.bound(o,f))}return s}pn(e,n){return ai(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(I6)}getMinOffset(e,n){return E.mapArray(this.Ze(n),r=>this.tn(e,r).next(i=>i||$())).next(I6)}}function E6(t){return lt(t,"collectionParents")}function gf(t){return lt(t,"indexEntries")}function bc(t){return lt(t,"indexConfiguration")}function vf(t){return lt(t,"indexState")}function I6(t){V(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Z2(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new wn(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S6={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Kt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Kt(e,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X5(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],a=IDBKeyRange.only(n.batchId);let o=0;const f=r.Z({range:a},(l,c,d)=>(o++,d.delete()));s.push(f.next(()=>{V(o===1)}));const u=[];for(const l of n.mutations){const c=B5(e,l.key.path,n.batchId);s.push(i.delete(c)),u.push(l.key)}return E.waitFor(s).next(()=>u)}function Qd(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw $();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt.DEFAULT_COLLECTION_PERCENTILE=10,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Kt.DEFAULT=new Kt(41943040,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Kt.DISABLED=new Kt(-1,0,0);class h1{constructor(e,n,r,i){this.userId=e,this.yt=n,this.indexManager=r,this.referenceDelegate=i,this.In={}}static re(e,n,r,i){V(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new h1(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return oi(e).Z({index:"userMutationsIndex",range:r},(i,s,a)=>{n=!1,a.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Ia(e),a=oi(e);return a.add({}).next(o=>{V(typeof o=="number");const f=new o3(o,n,r,i),u=function(d,h,p){const v=p.baseMutations.map(g=>Ku(d.ie,g)),k=p.mutations.map(g=>Ku(d.ie,g));return{userId:h,batchId:p.batchId,localWriteTimeMs:p.localWriteTime.toMillis(),baseMutations:v,mutations:k}}(this.yt,this.userId,f),l=[];let c=new pe((d,h)=>Z(d.canonicalString(),h.canonicalString()));for(const d of i){const h=B5(this.userId,d.key.path,o);c=c.add(d.key.path.popLast()),l.push(a.put(u)),l.push(s.put(h,fF))}return c.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[o]=f.keys()}),E.waitFor(l).next(()=>f)})}lookupMutationBatch(e,n){return oi(e).get(n).next(r=>r?(V(r.userId===this.userId),ds(this.yt,r)):null)}Tn(e,n){return this.In[n]?E.resolve(this.In[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.In[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return oi(e).Z({index:"userMutationsIndex",range:i},(a,o,f)=>{o.userId===this.userId&&(V(o.batchId>=r),s=ds(this.yt,o)),f.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return oi(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(i,s,a)=>{r=s.batchId,a.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return oi(e).W("userMutationsIndex",n).next(r=>r.map(i=>ds(this.yt,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Wc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Ia(e).Z({range:i},(a,o,f)=>{const[u,l,c]=a,d=gr(l);if(u===this.userId&&n.path.isEqual(d))return oi(e).get(c).next(h=>{if(!h)throw $();V(h.userId===this.userId),s.push(ds(this.yt,h))});f.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pe(Z);const i=[];return n.forEach(s=>{const a=Wc(this.userId,s.path),o=IDBKeyRange.lowerBound(a),f=Ia(e).Z({range:o},(u,l,c)=>{const[d,h,p]=u,v=gr(h);d===this.userId&&s.path.isEqual(v)?r=r.add(p):c.done()});i.push(f)}),E.waitFor(i).next(()=>this.En(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Wc(this.userId,r),a=IDBKeyRange.lowerBound(s);let o=new pe(Z);return Ia(e).Z({range:a},(f,u,l)=>{const[c,d,h]=f,p=gr(d);c===this.userId&&r.isPrefixOf(p)?p.length===i&&(o=o.add(h)):l.done()}).next(()=>this.En(e,o))}En(e,n){const r=[],i=[];return n.forEach(s=>{i.push(oi(e).get(s).next(a=>{if(a===null)throw $();V(a.userId===this.userId),r.push(ds(this.yt,a))}))}),E.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return X5(e.se,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.An(n.batchId)}),E.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return E.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return Ia(e).Z({range:r},(s,a,o)=>{if(s[0]===this.userId){const f=gr(s[1]);i.push(f)}else o.done()}).next(()=>{V(i.length===0)})})}containsKey(e,n){return J5(e,this.userId,n)}Rn(e){return Z5(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function J5(t,e,n){const r=Wc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let a=!1;return Ia(t).Z({range:s,X:!0},(o,f,u)=>{const[l,c,d]=o;l===e&&c===i&&(a=!0),u.done()}).next(()=>a)}function oi(t){return lt(t,"mutations")}function Ia(t){return lt(t,"documentMutations")}function Z5(t){return lt(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Zs(0)}static vn(){return new Zs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LF{constructor(e,n){this.referenceDelegate=e,this.yt=n}allocateTargetId(e){return this.Vn(e).next(n=>{const r=new Zs(n.highestTargetId);return n.highestTargetId=r.next(),this.Sn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(n=>q.fromTimestamp(new Te(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Vn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Sn(e,i)))}addTargetData(e,n){return this.Dn(e,n).next(()=>this.Vn(e).next(r=>(r.targetCount+=1,this.Cn(n,r),this.Sn(e,r))))}updateTargetData(e,n){return this.Dn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>_a(e).delete(n.targetId)).next(()=>this.Vn(e)).next(r=>(V(r.targetCount>0),r.targetCount-=1,this.Sn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return _a(e).Z((a,o)=>{const f=Nf(o);f.sequenceNumber<=n&&r.get(f.targetId)===null&&(i++,s.push(this.removeTargetData(e,f)))}).next(()=>E.waitFor(s)).next(()=>i)}forEachTarget(e,n){return _a(e).Z((r,i)=>{const s=Nf(i);n(s)})}Vn(e){return T6(e).get("targetGlobalKey").next(n=>(V(n!==null),n))}Sn(e,n){return T6(e).put("targetGlobalKey",n)}Dn(e,n){return _a(e).put(K5(this.yt,n))}Cn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Vn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ks(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return _a(e).Z({range:i,index:"queryTargetsIndex"},(a,o,f)=>{const u=Nf(o);Sl(n,u.target)&&(s=u,f.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=pi(e);return n.forEach(a=>{const o=Vt(a.path);i.push(s.put({targetId:r,path:o})),i.push(this.referenceDelegate.addReference(e,r,a))}),E.waitFor(i)}removeMatchingKeys(e,n,r){const i=pi(e);return E.forEach(n,s=>{const a=Vt(s.path);return E.waitFor([i.delete([r,a]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=pi(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=pi(e);let s=ee();return i.Z({range:r,X:!0},(a,o,f)=>{const u=gr(a[1]),l=new L(u);s=s.add(l)}).next(()=>s)}containsKey(e,n){const r=Vt(n.path),i=IDBKeyRange.bound([r],[KE(r)],!1,!0);let s=0;return pi(e).Z({index:"documentTargetsIndex",X:!0,range:i},([a,o],f,u)=>{a!==0&&(s++,u.done())}).next(()=>s>0)}ne(e,n){return _a(e).get(n).next(r=>r?Nf(r):null)}}function _a(t){return lt(t,"targets")}function T6(t){return lt(t,"targetGlobal")}function pi(t){return lt(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C6([t,e],[n,r]){const i=Z(t,n);return i===0?Z(e,r):i}class OF{constructor(e){this.xn=e,this.buffer=new pe(C6),this.Nn=0}kn(){return++this.Nn}On(e){const n=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();C6(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class $F{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){R("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){es(n)?R("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Zi(n)}await this.Fn(3e5)})}}class FF{constructor(e,n){this.$n=e,this.params=n}calculateTargetCount(e,n){return this.$n.Bn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return E.resolve(Zt.at);const r=new OF(n);return this.$n.forEachTarget(e,i=>r.On(i.sequenceNumber)).next(()=>this.$n.Ln(e,i=>r.On(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.$n.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.$n.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(R("LruGarbageCollector","Garbage collection skipped; disabled"),E.resolve(S6)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(R("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),S6):this.qn(e,n))}getCacheSize(e){return this.$n.getCacheSize(e)}qn(e,n){let r,i,s,a,o,f,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(c=>(c>this.params.maximumSequenceNumbersToCollect?(R("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${c}`),i=this.params.maximumSequenceNumbersToCollect):i=c,a=Date.now(),this.nthSequenceNumber(e,i))).next(c=>(r=c,o=Date.now(),this.removeTargets(e,r,n))).next(c=>(s=c,f=Date.now(),this.removeOrphanedDocuments(e,r))).next(c=>(u=Date.now(),wm()<=oe.DEBUG&&R("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-l}ms
	Determined least recently used ${i} in `+(o-a)+`ms
	Removed ${s} targets in `+(f-o)+`ms
	Removed ${c} documents in `+(u-f)+`ms
Total Duration: ${u-l}ms`),E.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:c})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UF{constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new FF(r,i)}(this,n)}Bn(e){const n=this.Un(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Un(e){let n=0;return this.Ln(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Ln(e,n){return this.Kn(e,(r,i)=>n(i))}addReference(e,n,r){return _c(e,r)}removeReference(e,n,r){return _c(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return _c(e,n)}Gn(e,n){return function(r,i){let s=!1;return Z5(r).tt(a=>J5(r,a,i).next(o=>(o&&(s=!0),E.resolve(!o)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Kn(e,(a,o)=>{if(o<=n){const f=this.Gn(e,a).next(u=>{if(!u)return s++,r.getEntry(e,a).next(()=>(r.removeEntry(a,q.min()),pi(e).delete([0,Vt(a.path)])))});i.push(f)}}).next(()=>E.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return _c(e,n)}Kn(e,n){const r=pi(e);let i,s=Zt.at;return r.Z({index:"documentTargetsIndex"},([a,o],{path:f,sequenceNumber:u})=>{a===0?(s!==Zt.at&&n(new L(gr(i)),s),s=u,i=f):s=Zt.at}).next(()=>{s!==Zt.at&&n(new L(gr(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function _c(t,e){return pi(t).put(function(n,r){return{targetId:0,path:Vt(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(){this.changes=new ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,we.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?E.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jF{constructor(e){this.yt=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return as(e).put(r)}removeEntry(e,n,r){return as(e).delete(function(i,s){const a=i.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Gd(s),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Qn(e,r)))}getEntry(e,n){let r=we.newInvalidDocument(n);return as(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(yf(n))},(i,s)=>{r=this.jn(n,s)}).next(()=>r)}Wn(e,n){let r={size:0,document:we.newInvalidDocument(n)};return as(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(yf(n))},(i,s)=>{r={document:this.jn(n,s),size:Qd(s)}}).next(()=>r)}getEntries(e,n){let r=tn();return this.zn(e,n,(i,s)=>{const a=this.jn(i,s);r=r.insert(i,a)}).next(()=>r)}Hn(e,n){let r=tn(),i=new Oe(L.comparator);return this.zn(e,n,(s,a)=>{const o=this.jn(s,a);r=r.insert(s,o),i=i.insert(s,Qd(a))}).next(()=>({documents:r,Jn:i}))}zn(e,n,r){if(n.isEmpty())return E.resolve();let i=new pe(A6);n.forEach(f=>i=i.add(f));const s=IDBKeyRange.bound(yf(i.first()),yf(i.last())),a=i.getIterator();let o=a.getNext();return as(e).Z({index:"documentKeyIndex",range:s},(f,u,l)=>{const c=L.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;o&&A6(o,c)<0;)r(o,null),o=a.getNext();o&&o.isEqual(c)&&(r(o,u),o=a.hasNext()?a.getNext():null),o?l.j(yf(o)):l.done()}).next(()=>{for(;o;)r(o,null),o=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(e,n,r,i){const s=n.path,a=[s.popLast().toArray(),s.lastSegment(),Gd(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],o=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return as(e).W(IDBKeyRange.bound(a,o,!0)).next(f=>{let u=tn();for(const l of f){const c=this.jn(L.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);c.isFoundDocument()&&(Cl(n,c)||i.has(c.key))&&(u=u.insert(c.key,c))}return u})}getAllFromCollectionGroup(e,n,r,i){let s=tn();const a=R6(n,r),o=R6(n,wn.max());return as(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(a,o,!0)},(f,u,l)=>{const c=this.jn(L.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(c.key,c),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new zF(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return x6(e).get("remoteDocumentGlobalKey").next(n=>(V(!!n),n))}Qn(e,n){return x6(e).put("remoteDocumentGlobalKey",n)}jn(e,n){if(n){const r=SF(this.yt,n);if(!(r.isNoDocument()&&r.version.isEqual(q.min())))return r}return we.newInvalidDocument(e)}}function tI(t){return new jF(t)}class zF extends eI{constructor(e,n){super(),this.Yn=e,this.trackRemovals=n,this.Xn=new ts(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new pe((s,a)=>Z(s.canonicalString(),a.canonicalString()));return this.changes.forEach((s,a)=>{const o=this.Xn.get(s);if(n.push(this.Yn.removeEntry(e,s,o.readTime)),a.isValidDocument()){const f=m6(this.Yn.yt,a);i=i.add(s.path.popLast());const u=Qd(f);r+=u-o.size,n.push(this.Yn.addEntry(e,s,f))}else if(r-=o.size,this.trackRemovals){const f=m6(this.Yn.yt,a.convertToNoDocument(q.min()));n.push(this.Yn.addEntry(e,s,f))}}),i.forEach(s=>{n.push(this.Yn.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.Yn.updateMetadata(e,r)),E.waitFor(n)}getFromCache(e,n){return this.Yn.Wn(e,n).next(r=>(this.Xn.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Yn.Hn(e,n).next(({documents:r,Jn:i})=>(i.forEach((s,a)=>{this.Xn.set(s,{size:a,readTime:r.get(s).readTime})}),r))}}function x6(t){return lt(t,"remoteDocumentGlobal")}function as(t){return lt(t,"remoteDocumentsV14")}function yf(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function R6(t,e){const n=e.documentKey.path.toArray();return[t,Gd(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function A6(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=Z(n[s],r[s]),i)return i;return i=Z(n.length,r.length),i||(i=Z(n[n.length-2],r[r.length-2]),i||Z(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Zf(r.mutation,i,en.empty(),Te.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=mr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=Af();return s.forEach((o,f)=>{a=a.insert(o,f.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=mr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,o)=>{n.set(a,o)})})}computeViews(e,n,r,i){let s=tn();const a=eu(),o=eu();return n.forEach((f,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof ti)?s=s.insert(u.key,u):l!==void 0?(a.set(u.key,l.mutation.getFieldMask()),Zf(l.mutation,u,l.mutation.getFieldMask(),Te.now())):a.set(u.key,en.empty())}),this.recalculateAndSaveOverlays(e,s).next(f=>(f.forEach((u,l)=>a.set(u,l)),n.forEach((u,l)=>{var c;return o.set(u,new VF(l,(c=a.get(u))!==null&&c!==void 0?c:null))}),o))}recalculateAndSaveOverlays(e,n){const r=eu();let i=new Oe((a,o)=>a-o),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const o of a)o.keys().forEach(f=>{const u=n.get(f);if(u===null)return;let l=r.get(f)||en.empty();l=o.applyToLocalView(u,l),r.set(f,l);const c=(i.get(o.batchId)||ee()).add(f);i=i.insert(o.batchId,c)})}).next(()=>{const a=[],o=i.getReverseIterator();for(;o.hasNext();){const f=o.getNext(),u=f.key,l=f.value,c=R5();l.forEach(d=>{if(!s.has(d)){const h=E5(n.get(d),r.get(d));h!==null&&c.set(d,h),s=s.add(d)}}),a.push(this.documentOverlayCache.saveOverlays(e,u,c))}return E.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return L.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):i3(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):E.resolve(mr());let o=-1,f=s;return a.next(u=>E.forEach(u,(l,c)=>(o<c.largestBatchId&&(o=c.largestBatchId),s.get(l)?E.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{f=f.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,f,u,ee())).next(l=>({batchId:o,changes:x5(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=Af();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Af();return this.indexManager.getCollectionParents(e,i).next(a=>E.forEach(a,o=>{const f=function(u,l){return new ei(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,o.child(i));return this.getDocumentsMatchingCollectionQuery(e,f,r).next(u=>{u.forEach((l,c)=>{s=s.insert(l,c)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((o,f)=>{const u=f.getKey();s.get(u)===null&&(s=s.insert(u,we.newInvalidDocument(u)))});let a=Af();return s.forEach((o,f)=>{const u=i.get(o);u!==void 0&&Zf(u.mutation,f,en.empty(),Te.now()),Cl(n,f)&&(a=a.insert(o,f))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BF{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return E.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Ve(r.createTime)}),E.resolve()}getNamedQuery(e,n){return E.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:l3(r.bundledQuery),readTime:Ve(r.readTime)}}(n)),E.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qF{constructor(){this.overlays=new Oe(L.comparator),this.es=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const r=mr();return E.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.oe(e,n,s)}),E.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),E.resolve()}getOverlaysForCollection(e,n,r){const i=mr(),s=n.length+1,a=new L(n.child("")),o=this.overlays.getIteratorFrom(a);for(;o.hasNext();){const f=o.getNext().value,u=f.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&f.largestBatchId>r&&i.set(f.getKey(),f)}return E.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Oe((u,l)=>u-l);const a=this.overlays.getIterator();for(;a.hasNext();){const u=a.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=mr(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const o=mr(),f=s.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((u,l)=>o.set(u,l)),!(o.size()>=i)););return E.resolve(o)}oe(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new u3(n,r));let s=this.es.get(n);s===void 0&&(s=ee(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h3{constructor(){this.ns=new pe(nt.ss),this.rs=new pe(nt.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new nt(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new nt(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new L(new ae([])),r=new nt(n,e),i=new nt(n,e+1),s=[];return this.rs.forEachInRange([r,i],a=>{this.cs(a),s.push(a.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new L(new ae([])),r=new nt(n,e),i=new nt(n,e+1);let s=ee();return this.rs.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new nt(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return L.comparator(e.key,n.key)||Z(e._s,n._s)}static os(e,n){return Z(e._s,n._s)||L.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new pe(nt.ss)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new o3(s,n,r,i);this.mutationQueue.push(a);for(const o of i)this.gs=this.gs.add(new nt(o.key,s)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return E.resolve(a)}lookupMutationBatch(e,n){return E.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return E.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),i=new nt(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],a=>{const o=this.ys(a._s);s.push(o)}),E.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pe(Z);return n.forEach(i=>{const s=new nt(i,0),a=new nt(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,a],o=>{r=r.add(o._s)})}),E.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const a=new nt(new L(s),0);let o=new pe(Z);return this.gs.forEachWhile(f=>{const u=f.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(o=o.add(f._s)),!0)},a),E.resolve(this.Is(o))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){V(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return E.forEach(n.mutations,i=>{const s=new nt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new nt(n,0),i=this.gs.firstAfterOrEqual(r);return E.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WF{constructor(e){this.Es=e,this.docs=new Oe(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return E.resolve(r?r.document.mutableCopy():we.newInvalidDocument(n))}getEntries(e,n){let r=tn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():we.newInvalidDocument(i))}),E.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=tn();const a=n.path,o=new L(a.child("")),f=this.docs.getIteratorFrom(o);for(;f.hasNext();){const{key:u,value:{document:l}}=f.getNext();if(!a.isPrefixOf(u.path))break;u.path.length>a.length+1||Z2(XE(l),r)<=0||(i.has(l.key)||Cl(n,l))&&(s=s.insert(l.key,l.mutableCopy()))}return E.resolve(s)}getAllFromCollectionGroup(e,n,r,i){$()}As(e,n){return E.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new GF(this)}getSize(e){return E.resolve(this.size)}}class GF extends eI{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),E.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KF{constructor(e){this.persistence=e,this.Rs=new ts(n=>Ks(n),Sl),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.bs=0,this.Ps=new h3,this.targetCount=0,this.vs=Zs.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),E.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Zs(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.Dn(n),E.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((a,o)=>{o.sequenceNumber<=n&&r.get(o.targetId)===null&&(this.Rs.delete(a),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)}),E.waitFor(s).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return E.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),E.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),E.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),E.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return E.resolve(r)}containsKey(e,n){return E.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Zt(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new KF(this),this.indexManager=new PF,this.remoteDocumentCache=function(r){return new WF(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new G5(n),this.Ns=new BF(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new HF(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){R("MemoryPersistence","Starting transaction:",e);const i=new QF(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return E.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class QF extends ZE{constructor(e){super(),this.currentSequenceNumber=e}}class p1{constructor(e){this.persistence=e,this.Fs=new h3,this.$s=null}static Bs(e){return new p1(e)}get Ls(){if(this.$s)return this.$s;throw $()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),E.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),E.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Ls,r=>{const i=L.fromPath(r);return this.qs(e,i).next(s=>{s||n.removeEntry(i,q.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return E.or([()=>E.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YF{constructor(e){this.yt=e}$(e,n,r,i){const s=new o1("createOrUpgrade",n);r<1&&i>=1&&(function(o){o.createObjectStore("owner")}(e),function(o){o.createObjectStore("mutationQueues",{keyPath:"userId"}),o.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",p6,{unique:!0}),o.createObjectStore("documentMutations")}(e),N6(e),function(o){o.createObjectStore("remoteDocuments")}(e));let a=E.resolve();return r<3&&i>=3&&(r!==0&&(function(o){o.deleteObjectStore("targetDocuments"),o.deleteObjectStore("targets"),o.deleteObjectStore("targetGlobal")}(e),N6(e)),a=a.next(()=>function(o){const f=o.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:q.min().toTimestamp(),targetCount:0};return f.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(a=a.next(()=>function(o,f){return f.store("mutations").W().next(u=>{o.deleteObjectStore("mutations"),o.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",p6,{unique:!0});const l=f.store("mutations"),c=u.map(d=>l.put(d));return E.waitFor(c)})}(e,s))),a=a.next(()=>{(function(o){o.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(a=a.next(()=>this.Us(s))),r<6&&i>=6&&(a=a.next(()=>(function(o){o.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(s)))),r<7&&i>=7&&(a=a.next(()=>this.Gs(s))),r<8&&i>=8&&(a=a.next(()=>this.Qs(e,s))),r<9&&i>=9&&(a=a.next(()=>{(function(o){o.objectStoreNames.contains("remoteDocumentChanges")&&o.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(a=a.next(()=>this.js(s))),r<11&&i>=11&&(a=a.next(()=>{(function(o){o.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(o){o.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(a=a.next(()=>{(function(o){const f=o.createObjectStore("documentOverlays",{keyPath:bF});f.createIndex("collectionPathOverlayIndex",_F,{unique:!1}),f.createIndex("collectionGroupOverlayIndex",kF,{unique:!1})})(e)})),r<13&&i>=13&&(a=a.next(()=>function(o){const f=o.createObjectStore("remoteDocumentsV14",{keyPath:uF});f.createIndex("documentKeyIndex",lF),f.createIndex("collectionGroupIndex",cF)}(e)).next(()=>this.Ws(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(a=a.next(()=>this.zs(e,s))),r<15&&i>=15&&(a=a.next(()=>function(o){o.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),o.createObjectStore("indexState",{keyPath:gF}).createIndex("sequenceNumberIndex",vF,{unique:!1}),o.createObjectStore("indexEntries",{keyPath:yF}).createIndex("documentKeyIndex",wF,{unique:!1})}(e))),a}Ks(e){let n=0;return e.store("remoteDocuments").Z((r,i)=>{n+=Qd(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Us(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>E.forEach(i,s=>{const a=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",a).next(o=>E.forEach(o,f=>{V(f.userId===s.userId);const u=ds(this.yt,f);return X5(e,s.userId,u).next(()=>{})}))}))}Gs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((a,o)=>{const f=new ae(a),u=function(l){return[0,Vt(l)]}(f);s.push(n.get(u).next(l=>l?E.resolve():(c=>n.put({targetId:0,path:Vt(c),sequenceNumber:i.highestListenSequenceNumber}))(f)))}).next(()=>E.waitFor(s))})}Qs(e,n){e.createObjectStore("collectionParents",{keyPath:mF});const r=n.store("collectionParents"),i=new d3,s=a=>{if(i.add(a)){const o=a.lastSegment(),f=a.popLast();return r.put({collectionId:o,parent:Vt(f)})}};return n.store("remoteDocuments").Z({X:!0},(a,o)=>{const f=new ae(a);return s(f.popLast())}).next(()=>n.store("documentMutations").Z({X:!0},([a,o,f],u)=>{const l=gr(o);return s(l.popLast())}))}js(e){const n=e.store("targets");return n.Z((r,i)=>{const s=Nf(i),a=K5(this.yt,s);return n.put(a)})}Ws(e,n){const r=n.store("remoteDocuments"),i=[];return r.Z((s,a)=>{const o=n.store("remoteDocumentsV14"),f=(u=a,u.document?new L(ae.fromString(u.document.name).popFirst(5)):u.noDocument?L.fromSegments(u.noDocument.path):u.unknownDocument?L.fromSegments(u.unknownDocument.path):$()).path.toArray();var u;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const l={prefixPath:f.slice(0,f.length-2),collectionGroup:f[f.length-2],documentId:f[f.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};i.push(o.put(l))}).next(()=>E.waitFor(i))}zs(e,n){const r=n.store("mutations"),i=tI(this.yt),s=new rI(p1.Bs,this.yt.ie);return r.W().next(a=>{const o=new Map;return a.forEach(f=>{var u;let l=(u=o.get(f.userId))!==null&&u!==void 0?u:ee();ds(this.yt,f).keys().forEach(c=>l=l.add(c)),o.set(f.userId,l)}),E.forEach(o,(f,u)=>{const l=new it(u),c=d1.re(this.yt,l),d=s.getIndexManager(l),h=h1.re(l,this.yt,d,s.referenceDelegate);return new nI(i,h,c,d).recalculateAndSaveOverlaysForDocumentKeys(new Am(n,Zt.at),f).next()})})}}function N6(t){t.createObjectStore("targetDocuments",{keyPath:hF}).createIndex("documentTargetsIndex",pF,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",dF,{unique:!0}),t.createObjectStore("targetGlobal")}const z0="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class p3{constructor(e,n,r,i,s,a,o,f,u,l,c=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Hs=s,this.window=a,this.document=o,this.Js=u,this.Ys=l,this.Xs=c,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!p3.C())throw new x(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new UF(this,i),this.ii=n+"main",this.yt=new G5(f),this.ri=new Kn(this.ii,this.Xs,new YF(this.yt)),this.Cs=new LF(this.referenceDelegate,this.yt),this.remoteDocumentCache=tI(this.yt),this.Ns=new TF,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,l===!1&&je("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new x(S.FAILED_PRECONDITION,z0);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new Zt(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>kc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(n=>this.isPrimary&&!n?this._i(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(es(e))return R("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return R("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return wf(e).get("owner").next(n=>E.resolve(this.mi(n)))}gi(e){return kc(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=lt(n,"clientMetadata");return r.W().next(i=>{const s=this.Ii(i,18e5),a=i.filter(o=>s.indexOf(o)===-1);return E.forEach(a,o=>r.delete(o.clientId)).next(()=>a)})}).catch(()=>[]);if(this.oi)for(const n of e)this.oi.removeItem(this.Ti(n.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?E.resolve(!0):wf(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)){if(this.mi(n)&&this.networkEnabled)return!0;if(!this.mi(n)){if(!n.allowTabSynchronization)throw new x(S.FAILED_PRECONDITION,z0);return!1}}return!(!this.networkEnabled||!this.inForeground)||kc(e).W().next(r=>this.Ii(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,a=!this.inForeground&&i.inForeground,o=this.networkEnabled===i.networkEnabled;if(s||a&&o)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&R("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Am(e,Zt.at);return this._i(n).next(()=>this.gi(n))}),this.ri.close(),this.Pi()}Ii(e,n){return e.filter(r=>this.pi(r.updateTimeMs,n)&&!this.Ei(r.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>kc(e).W().next(n=>this.Ii(n,18e5).map(r=>r.clientId)))}get started(){return this.Ds}getMutationQueue(e,n){return h1.re(e,this.yt,n,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new MF(e,this.yt.ie.databaseId)}getDocumentOverlayCache(e){return d1.re(this.yt,e)}getBundleCache(){return this.Ns}runTransaction(e,n,r){R("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(a=this.Xs)===15?IF:a===14?W5:a===13?H5:a===12?EF:a===11?q5:void $();var a;let o;return this.ri.runTransaction(e,i,s,f=>(o=new Am(f,this.Ss?this.Ss.next():Zt.at),n==="readwrite-primary"?this.fi(o).next(u=>!!u||this.di(o)).next(u=>{if(!u)throw je(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new x(S.FAILED_PRECONDITION,JE);return r(o)}).next(u=>this.wi(o).next(()=>u)):this.Vi(o).next(()=>r(o)))).then(f=>(o.raiseOnCommittedEvent(),f))}Vi(e){return wf(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)&&!this.mi(n)&&!(this.Ys||this.allowTabSynchronization&&n.allowTabSynchronization))throw new x(S.FAILED_PRECONDITION,z0)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return wf(e).put("owner",n)}static C(){return Kn.C()}_i(e){const n=wf(e);return n.get("owner").next(r=>this.mi(r)?(R("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):E.resolve())}pi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(je(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),cR()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var n;try{const r=((n=this.oi)===null||n===void 0?void 0:n.getItem(this.Ti(e)))!==null;return R("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return je("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){je("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function wf(t){return lt(t,"owner")}function kc(t){return lt(t,"clientMetadata")}function m3(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g3{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new g3(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(i6(n))return E.resolve(null);let r=on(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Wd(n,null,"F"),r=on(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=ee(...s);return this.Ni.getDocuments(e,a).next(o=>this.indexManager.getMinOffset(e,r).next(f=>{const u=this.Fi(n,o);return this.$i(n,u,a,f.readTime)?this.ki(e,Wd(n,null,"F")):this.Bi(e,u,n,f)}))})))}Oi(e,n,r,i){return i6(n)||i.isEqual(q.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const a=this.Fi(n,s);return this.$i(n,a,r,i)?this.Mi(e,n):(wm()<=oe.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Cm(n)),this.Bi(e,a,n,YE(i,-1)))})}Fi(e,n){let r=new pe(m5(e));return n.forEach((i,s)=>{Cl(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return wm()<=oe.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",Cm(n)),this.Ni.getDocumentsMatchingQuery(e,n,wn.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XF{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new Oe(Z),this.Ui=new ts(s=>Ks(s),Sl),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nI(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function sI(t,e,n,r){return new XF(t,e,n,r)}async function aI(t,e){const n=O(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],o=[];let f=ee();for(const u of i){a.push(u.batchId);for(const l of u.mutations)f=f.add(l.key)}for(const u of s){o.push(u.batchId);for(const l of u.mutations)f=f.add(l.key)}return n.localDocuments.getDocuments(r,f).next(u=>({ji:u,removedBatchIds:a,addedBatchIds:o}))})})}function JF(t,e){const n=O(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(a,o,f,u){const l=f.batch,c=l.keys();let d=E.resolve();return c.forEach(h=>{d=d.next(()=>u.getEntry(o,h)).next(p=>{const v=f.docVersions.get(h);V(v!==null),p.version.compareTo(v)<0&&(l.applyToRemoteDocument(p,f),p.isValidDocument()&&(p.setReadTime(f.commitVersion),u.addEntry(p)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(o,l))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let o=ee();for(let f=0;f<a.mutationResults.length;++f)a.mutationResults[f].transformResults.length>0&&(o=o.add(a.batch.mutations[f].key));return o}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function oI(t){const e=O(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function ZF(t,e){const n=O(t),r=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const o=[];e.targetChanges.forEach((l,c)=>{const d=i.get(c);if(!d)return;o.push(n.Cs.removeMatchingKeys(s,l.removedDocuments,c).next(()=>n.Cs.addMatchingKeys(s,l.addedDocuments,c)));let h=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(c)?h=h.withResumeToken(Ze.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):l.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(l.resumeToken,r)),i=i.insert(c,h),function(p,v,k){return p.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(d,h,l)&&o.push(n.Cs.updateTargetData(s,h))});let f=tn(),u=ee();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),o.push(fI(s,a,e.documentUpdates).next(l=>{f=l.Wi,u=l.zi})),!r.isEqual(q.min())){const l=n.Cs.getLastRemoteSnapshotVersion(s).next(c=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));o.push(l)}return E.waitFor(o).next(()=>a.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,f,u)).next(()=>f)}).then(s=>(n.qi=i,s))}function fI(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let a=tn();return n.forEach((o,f)=>{const u=s.get(o);f.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(o)),f.isNoDocument()&&f.version.isEqual(q.min())?(e.removeEntry(o,f.readTime),a=a.insert(o,f)):!u.isValidDocument()||f.version.compareTo(u.version)>0||f.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(f),a=a.insert(o,f)):R("LocalStore","Ignoring outdated watch update for ",o,". Current version:",u.version," Watch version:",f.version)}),{Wi:a,zi:i}})}function eU(t,e){const n=O(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function bo(t,e){const n=O(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,E.resolve(i)):n.Cs.allocateTargetId(r).next(a=>(i=new Di(e,a,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(e,r.targetId)),r})}async function _o(t,e,n){const r=O(t),i=r.qi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!es(a))throw a;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.qi=r.qi.remove(e),r.Ui.delete(i.target)}function Yd(t,e,n){const r=O(t);let i=q.min(),s=ee();return r.persistence.runTransaction("Execute query","readonly",a=>function(o,f,u){const l=O(o),c=l.Ui.get(u);return c!==void 0?E.resolve(l.qi.get(c)):l.Cs.getTargetData(f,u)}(r,a,on(e)).next(o=>{if(o)return i=o.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(a,o.targetId).next(f=>{s=f})}).next(()=>r.Li.getDocumentsMatchingQuery(a,e,n?i:q.min(),n?s:ee())).next(o=>(cI(r,p5(e),o),{documents:o,Hi:s})))}function uI(t,e){const n=O(t),r=O(n.Cs),i=n.qi.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ne(s,e).next(a=>a?a.target:null))}function lI(t,e){const n=O(t),r=n.Ki.get(e)||q.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Gi.getAllFromCollectionGroup(i,e,YE(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(cI(n,e,i),i))}function cI(t,e,n){let r=t.Ki.get(e)||q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}async function tU(t,e,n,r){const i=O(t);let s=ee(),a=tn();for(const u of n){const l=e.Ji(u.metadata.name);u.document&&(s=s.add(l));const c=e.Yi(u);c.setReadTime(e.Xi(u.metadata.readTime)),a=a.insert(l,c)}const o=i.Gi.newChangeBuffer({trackRemovals:!0}),f=await bo(i,function(u){return on(Vo(ae.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>fI(u,o,a).next(l=>(o.apply(u),l)).next(l=>i.Cs.removeMatchingKeysForTargetId(u,f.targetId).next(()=>i.Cs.addMatchingKeys(u,s,f.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.Wi,l.zi)).next(()=>l.Wi)))}async function nU(t,e,n=ee()){const r=await bo(t,on(l3(e.bundledQuery))),i=O(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const a=Ve(e.readTime);if(r.snapshotVersion.compareTo(a)>=0)return i.Ns.saveNamedQuery(s,e);const o=r.withResumeToken(Ze.EMPTY_BYTE_STRING,a);return i.qi=i.qi.insert(o.targetId,o),i.Cs.updateTargetData(s,o).next(()=>i.Cs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Cs.addMatchingKeys(s,n,r.targetId)).next(()=>i.Ns.saveNamedQuery(s,e))})}function D6(t,e){return`firestore_clients_${t}_${e}`}function P6(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function V0(t,e){return`firestore_targets_${t}_${e}`}class Xd{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Zi(e,n,r){const i=JSON.parse(r);let s,a=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return a&&i.error&&(a=typeof i.error.message=="string"&&typeof i.error.code=="string",a&&(s=new x(i.error.code,i.error.message))),a?new Xd(e,n,i.state,s):(je("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class tu{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Zi(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new x(r.error.code,r.error.message))),s?new tu(e,r.state,i):(je("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Jd{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Zi(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=c1();for(let a=0;i&&a<r.activeTargetIds.length;++a)i=t5(r.activeTargetIds[a]),s=s.add(r.activeTargetIds[a]);return i?new Jd(e,s):(je("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class v3{constructor(e,n){this.clientId=e,this.onlineState=n}static Zi(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new v3(n.clientId,n.onlineState):(je("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Mm{constructor(){this.activeTargetIds=c1()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class B0{constructor(e,n,r,i,s){this.window=e,this.Hs=n,this.persistenceKey=r,this.sr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new Oe(Z),this.started=!1,this.cr=[];const a=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ar=D6(this.persistenceKey,this.sr),this.hr=function(o){return`firestore_sequence_number_${o}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new Mm),this.lr=new RegExp(`^firestore_clients_${a}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${a}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${a}_(\\d+)$`),this.wr=function(o){return`firestore_online_state_${o}`}(this.persistenceKey),this.mr=function(o){return`firestore_bundle_loaded_v2_${o}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const r of e){if(r===this.sr)continue;const i=this.getItem(D6(this.persistenceKey,r));if(i){const s=Jd.Zi(r,i);s&&(this.ur=this.ur.insert(s.clientId,s))}}this.gr();const n=this.storage.getItem(this.wr);if(n){const r=this.yr(n);r&&this.pr(r)}for(const r of this.cr)this.rr(r);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let n=!1;return this.ur.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,n,r){this.Tr(e,n,r),this.Er(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(V0(this.persistenceKey,e));if(r){const i=tu.Zi(e,r);i&&(n=i.state)}}return this.Ar.er(e),this.gr(),n}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(V0(this.persistenceKey,e))}updateQueryState(e,n,r){this.Rr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Er(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return R("SharedClientState","READ",e,n),n}setItem(e,n){R("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){R("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const n=e;if(n.storageArea===this.storage){if(R("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ar)return void je("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.lr.test(n.key)){if(n.newValue==null){const r=this.vr(n.key);return this.Vr(r,null)}{const r=this.Sr(n.key,n.newValue);if(r)return this.Vr(r.clientId,r)}}else if(this.dr.test(n.key)){if(n.newValue!==null){const r=this.Dr(n.key,n.newValue);if(r)return this.Cr(r)}}else if(this._r.test(n.key)){if(n.newValue!==null){const r=this.Nr(n.key,n.newValue);if(r)return this.kr(r)}}else if(n.key===this.wr){if(n.newValue!==null){const r=this.yr(n.newValue);if(r)return this.pr(r)}}else if(n.key===this.hr){const r=function(i){let s=Zt.at;if(i!=null)try{const a=JSON.parse(i);V(typeof a=="number"),s=a}catch(a){je("SharedClientState","Failed to read sequence number from WebStorage",a)}return s}(n.newValue);r!==Zt.at&&this.sequenceNumberHandler(r)}else if(n.key===this.mr){const r=this.Or(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Mr(i)))}}}else this.cr.push(n)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,n,r){const i=new Xd(this.currentUser,e,n,r),s=P6(this.persistenceKey,this.currentUser,e);this.setItem(s,i.tr())}Er(e){const n=P6(this.persistenceKey,this.currentUser,e);this.removeItem(n)}br(e){const n={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(n))}Rr(e,n,r){const i=V0(this.persistenceKey,e),s=new tu(e,n,r);this.setItem(i,s.tr())}Pr(e){const n=JSON.stringify(Array.from(e));this.setItem(this.mr,n)}vr(e){const n=this.lr.exec(e);return n?n[1]:null}Sr(e,n){const r=this.vr(e);return Jd.Zi(r,n)}Dr(e,n){const r=this.dr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Xd.Zi(new it(s),i,n)}Nr(e,n){const r=this._r.exec(e),i=Number(r[1]);return tu.Zi(i,n)}yr(e){return v3.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);R("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,n){const r=n?this.ur.insert(e,n):this.ur.remove(e),i=this.Ir(this.ur),s=this.Ir(r),a=[],o=[];return s.forEach(f=>{i.has(f)||a.push(f)}),i.forEach(f=>{s.has(f)||o.push(f)}),this.syncEngine.Br(a,o).then(()=>{this.ur=r})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let n=c1();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class dI{constructor(){this.Lr=new Mm,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Mm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rU{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M6{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iU={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sU{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aU extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const a=this.ho(e,n);R("RestConnection","Sending: ",a,r);const o={};return this.lo(o,i,s),this.fo(e,a,o,r).then(f=>(R("RestConnection","Received: ",f),f),f=>{throw ho("RestConnection",`${e} failed with error: `,f,"url: ",a,"request:",r),f})}_o(e,n,r,i,s,a){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+zo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=iU[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,a)=>{const o=new s$;o.setWithCredentials(!0),o.listenOnce(n$.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case U0.NO_ERROR:const u=o.getResponseJson();R("Connection","XHR received:",JSON.stringify(u)),s(u);break;case U0.TIMEOUT:R("Connection",'RPC "'+e+'" timed out'),a(new x(S.DEADLINE_EXCEEDED,"Request time out"));break;case U0.HTTP_ERROR:const l=o.getStatus();if(R("Connection",'RPC "'+e+'" failed with status:',l,"response text:",o.getResponseText()),l>0){let c=o.getResponseJson();Array.isArray(c)&&(c=c[0]);const d=c==null?void 0:c.error;if(d&&d.status&&d.message){const h=function(p){const v=p.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(v)>=0?v:S.UNKNOWN}(d.status);a(new x(h,d.message))}else a(new x(S.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new x(S.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{R("Connection",'RPC "'+e+'" completed.')}});const f=JSON.stringify(i);o.send(n,"POST",f,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=e$(),a=t$(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new i$({})),this.lo(o.initMessageHeaders,n,r),o.encodeInitMessageHeaders=!0;const f=i.join("");R("Connection","Creating WebChannel: "+f,o);const u=s.createWebChannel(f,o);let l=!1,c=!1;const d=new sU({Hr:p=>{c?R("Connection","Not sending because WebChannel is closed:",p):(l||(R("Connection","Opening WebChannel transport."),u.open(),l=!0),R("Connection","WebChannel sending:",p),u.send(p))},Jr:()=>u.close()}),h=(p,v,k)=>{p.listen(v,g=>{try{k(g)}catch(m){setTimeout(()=>{throw m},0)}})};return h(u,vc.EventType.OPEN,()=>{c||R("Connection","WebChannel transport opened.")}),h(u,vc.EventType.CLOSE,()=>{c||(c=!0,R("Connection","WebChannel transport closed"),d.io())}),h(u,vc.EventType.ERROR,p=>{c||(c=!0,ho("Connection","WebChannel transport errored:",p),d.io(new x(S.UNAVAILABLE,"The operation could not be completed")))}),h(u,vc.EventType.MESSAGE,p=>{var v;if(!c){const k=p.data[0];V(!!k);const g=k,m=g.error||((v=g[0])===null||v===void 0?void 0:v.error);if(m){R("Connection","WebChannel received error:",m);const y=m.status;let b=function(T){const C=He[T];if(C!==void 0)return T5(C)}(y),I=m.message;b===void 0&&(b=S.INTERNAL,I="Unknown error status: "+y+" with message "+m.message),c=!0,d.io(new x(b,I)),u.close()}else R("Connection","WebChannel received:",k),d.ro(k)}}),h(a,r$.STAT_EVENT,p=>{p.stat===q4.PROXY?R("Connection","Detected buffering proxy"):p.stat===q4.NOPROXY&&R("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(){return typeof window<"u"?window:null}function Gc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t){return new X$(t,!0)}class y3{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&R("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,n,r,i,s,a,o,f){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=o,this.listener=f,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new y3(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(je(n.toString()),je("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new x(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oU extends pI{constructor(e,n,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,a),this.yt=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=eF(this.yt,e),r=function(i){if(!("targetChange"in i))return q.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?q.min():s.readTime?Ve(s.readTime):q.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Gu(this.yt),n.addTarget=function(i,s){let a;const o=s.target;return a=qd(o)?{documents:$5(i,o)}:{query:F5(i,o)},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?a.resumeToken=D5(i,s.resumeToken):s.snapshotVersion.compareTo(q.min())>0&&(a.readTime=wo(i,s.snapshotVersion.toTimestamp())),a}(this.yt,e);const r=nF(this.yt,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Gu(this.yt),n.removeTarget=e,this.Bo(n)}}class fU extends pI{constructor(e,n,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(V(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=tF(e.writeResults,e.commitTime),r=Ve(e.commitTime);return this.listener.Zo(r,n)}return V(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Gu(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ku(this.yt,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uU extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=i,this.nu=!1}su(){if(this.nu)throw new x(S.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(S.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection._o(e,n,r,s,a,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(S.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class lU{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(je(n),this.ou=!1):R("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cU{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur(a=>{r.enqueueAndForget(async()=>{ns(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(o){const f=O(o);f._u.add(4),await Ho(f),f.gu.set("Unknown"),f._u.delete(4),await Dl(f)}(this))})}),this.gu=new lU(r,i)}}async function Dl(t){if(ns(t))for(const e of t.wu)await e(!0)}async function Ho(t){for(const e of t.wu)await e(!1)}function m1(t,e){const n=O(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),_3(n)?b3(n):Go(n).ko()&&w3(n,e))}function Qu(t,e){const n=O(t),r=Go(n);n.du.delete(e),r.ko()&&mI(n,e),n.du.size===0&&(r.ko()?r.Fo():ns(n)&&n.gu.set("Unknown"))}function w3(t,e){t.yu.Ot(e.targetId),Go(t).zo(e)}function mI(t,e){t.yu.Ot(e),Go(t).Ho(e)}function b3(t){t.yu=new G$({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Go(t).start(),t.gu.uu()}function _3(t){return ns(t)&&!Go(t).No()&&t.du.size>0}function ns(t){return O(t)._u.size===0}function gI(t){t.yu=void 0}async function dU(t){t.du.forEach((e,n)=>{w3(t,e)})}async function hU(t,e){gI(t),_3(t)?(t.gu.hu(e),b3(t)):t.gu.set("Unknown")}async function pU(t,e,n){if(t.gu.set("Online"),e instanceof N5&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const a of i.targetIds)r.du.has(a)&&(await r.remoteSyncer.rejectListen(a,s),r.du.delete(a),r.yu.removeTarget(a))}(t,e)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Zd(t,r)}else if(e instanceof Hc?t.yu.Kt(e):e instanceof A5?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(q.min()))try{const r=await oI(t.localStore);n.compareTo(r)>=0&&await function(i,s){const a=i.yu.Zt(s);return a.targetChanges.forEach((o,f)=>{if(o.resumeToken.approximateByteSize()>0){const u=i.du.get(f);u&&i.du.set(f,u.withResumeToken(o.resumeToken,s))}}),a.targetMismatches.forEach(o=>{const f=i.du.get(o);if(!f)return;i.du.set(o,f.withResumeToken(Ze.EMPTY_BYTE_STRING,f.snapshotVersion)),mI(i,o);const u=new Di(f.target,o,1,f.sequenceNumber);w3(i,u)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await Zd(t,r)}}async function Zd(t,e,n){if(!es(e))throw e;t._u.add(1),await Ho(t),t.gu.set("Offline"),n||(n=()=>oI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Dl(t)})}function vI(t,e){return e().catch(n=>Zd(t,n,e))}async function Wo(t){const e=O(t),n=Vi(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;mU(e);)try{const i=await eU(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,gU(e,i)}catch(i){await Zd(e,i)}yI(e)&&wI(e)}function mU(t){return ns(t)&&t.fu.length<10}function gU(t,e){t.fu.push(e);const n=Vi(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function yI(t){return ns(t)&&!Vi(t).No()&&t.fu.length>0}function wI(t){Vi(t).start()}async function vU(t){Vi(t).eu()}async function yU(t){const e=Vi(t);for(const n of t.fu)e.Xo(n.mutations)}async function wU(t,e,n){const r=t.fu.shift(),i=f3.from(r,e,n);await vI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Wo(t)}async function bU(t,e){e&&Vi(t).Yo&&await async function(n,r){if(i=r.code,S5(i)&&i!==S.ABORTED){const s=n.fu.shift();Vi(n).Mo(),await vI(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Wo(n)}var i}(t,e),yI(t)&&wI(t)}async function L6(t,e){const n=O(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=ns(n);n._u.add(3),await Ho(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Dl(n)}async function Lm(t,e){const n=O(t);e?(n._u.delete(2),await Dl(n)):e||(n._u.add(2),await Ho(n),n.gu.set("Unknown"))}function Go(t){return t.pu||(t.pu=function(e,n,r){const i=O(e);return i.su(),new oU(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:dU.bind(null,t),Zr:hU.bind(null,t),Wo:pU.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),_3(t)?b3(t):t.gu.set("Unknown")):(await t.pu.stop(),gI(t))})),t.pu}function Vi(t){return t.Iu||(t.Iu=function(e,n,r){const i=O(e);return i.su(),new fU(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:vU.bind(null,t),Zr:bU.bind(null,t),tu:yU.bind(null,t),Zo:wU.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Wo(t)):(await t.Iu.stop(),t.fu.length>0&&(R("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k3{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new at,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,o=new k3(e,n,a,i,s);return o.start(r),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ko(t,e){if(je("AsyncQueue",`${e}: ${t}`),es(t))return new x(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=Af(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new Za(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Za)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Za;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O6{constructor(){this.Tu=new Oe(L.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):$():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ko{constructor(e,n,r,i,s,a,o,f,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=o,this.excludesMetadataChanges=f,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const a=[];return n.forEach(o=>{a.push({type:0,doc:o})}),new ko(e,n,Za.emptySet(n),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Tl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _U{constructor(){this.Au=void 0,this.listeners=[]}}class kU{constructor(){this.queries=new ts(e=>h5(e),Tl),this.onlineState="Unknown",this.Ru=new Set}}async function E3(t,e){const n=O(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new _U),i)try{s.Au=await n.onListen(r)}catch(a){const o=Ko(a,`Initialization of query '${Cm(e.query)}' failed`);return void e.onError(o)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&S3(n)}async function I3(t,e){const n=O(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const a=s.listeners.indexOf(e);a>=0&&(s.listeners.splice(a,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function EU(t,e){const n=O(t);let r=!1;for(const i of e){const s=i.query,a=n.queries.get(s);if(a){for(const o of a.listeners)o.Pu(i)&&(r=!0);a.Au=i}}r&&S3(n)}function IU(t,e,n){const r=O(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function S3(t){t.Ru.forEach(e=>{e.next()})}class T3{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ko(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=ko.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SU{constructor(e,n){this.ku=e,this.byteLength=n}Ou(){return"metadata"in this.ku}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $6{constructor(e){this.yt=e}Ji(e){return _r(this.yt,e)}Yi(e){return e.metadata.exists?O5(this.yt,e.document,!1):we.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return Ve(e)}}class TU{constructor(e,n,r){this.Mu=e,this.localStore=n,this.yt=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=bI(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++n;const r=ae.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}$u(e){const n=new Map,r=new $6(this.yt);for(const i of e)if(i.metadata.queries){const s=r.Ji(i.metadata.name);for(const a of i.metadata.queries){const o=(n.get(a)||ee()).add(s);n.set(a,o)}}return n}async complete(){const e=await tU(this.localStore,new $6(this.yt),this.documents,this.Mu.id),n=this.$u(this.documents);for(const r of this.queries)await nU(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function bI(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.key=e}}class kI{constructor(e){this.key=e}}class EI{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ee(),this.mutatedKeys=ee(),this.Gu=m5(e),this.Qu=new Za(this.Gu)}get ju(){return this.qu}Wu(e,n){const r=n?n.zu:new O6,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,a=i,o=!1;const f=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,c)=>{const d=i.get(l),h=Cl(this.query,c)?c:null,p=!!d&&this.mutatedKeys.has(d.key),v=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let k=!1;d&&h?d.data.isEqual(h.data)?p!==v&&(r.track({type:3,doc:h}),k=!0):this.Hu(d,h)||(r.track({type:2,doc:h}),k=!0,(f&&this.Gu(h,f)>0||u&&this.Gu(h,u)<0)&&(o=!0)):!d&&h?(r.track({type:0,doc:h}),k=!0):d&&!h&&(r.track({type:1,doc:d}),k=!0,(f||u)&&(o=!0)),k&&(h?(a=a.add(h),s=v?s.add(l):s.delete(l)):(a=a.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const l=this.query.limitType==="F"?a.last():a.first();a=a.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{Qu:a,zu:r,$i:o,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((u,l)=>function(c,d){const h=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return h(c)-h(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(r);const a=n?this.Yu():[],o=this.Ku.size===0&&this.current?1:0,f=o!==this.Uu;return this.Uu=o,s.length!==0||f?{snapshot:new ko(this.query,e.Qu,i,s,e.mutatedKeys,o===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:a}:{Xu:a}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new O6,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ee(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new kI(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new _I(r))}),n}tc(e){this.qu=e.Hi,this.Ku=ee();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return ko.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class CU{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xU{constructor(e){this.key=e,this.nc=!1}}class RU{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.sc={},this.ic=new ts(o=>h5(o),Tl),this.rc=new Map,this.oc=new Set,this.uc=new Oe(L.comparator),this.cc=new Map,this.ac=new h3,this.hc={},this.lc=new Map,this.fc=Zs.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function AU(t,e){const n=N3(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const a=await bo(n.localStore,on(e));n.isPrimaryClient&&m1(n.remoteStore,a);const o=n.sharedClientState.addLocalQueryTarget(a.targetId);r=a.targetId,i=await C3(n,e,r,o==="current",a.resumeToken)}return i}async function C3(t,e,n,r,i){t._c=(c,d,h)=>async function(p,v,k,g){let m=v.view.Wu(k);m.$i&&(m=await Yd(p.localStore,v.query,!1).then(({documents:I})=>v.view.Wu(I,m)));const y=g&&g.targetChanges.get(v.targetId),b=v.view.applyChanges(m,p.isPrimaryClient,y);return Om(p,v.targetId,b.Xu),b.snapshot}(t,c,d,h);const s=await Yd(t.localStore,e,!0),a=new EI(e,s.Hi),o=a.Wu(s.documents),f=Al.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=a.applyChanges(o,t.isPrimaryClient,f);Om(t,n,u.Xu);const l=new CU(e,n,a);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function NU(t,e){const n=O(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!Tl(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await _o(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Qu(n.remoteStore,r.targetId),Eo(n,r.targetId)}).catch(Zi)):(Eo(n,r.targetId),await _o(n.localStore,r.targetId,!0))}async function DU(t,e,n){const r=D3(t);try{const i=await function(s,a){const o=O(s),f=Te.now(),u=a.reduce((d,h)=>d.add(h.key),ee());let l,c;return o.persistence.runTransaction("Locally write mutations","readwrite",d=>{let h=tn(),p=ee();return o.Gi.getEntries(d,u).next(v=>{h=v,h.forEach((k,g)=>{g.isValidDocument()||(p=p.add(k))})}).next(()=>o.localDocuments.getOverlayedDocuments(d,h)).next(v=>{l=v;const k=[];for(const g of a){const m=z$(g,l.get(g.key).overlayedDocument);m!=null&&k.push(new ti(g.key,m,c5(m.value.mapValue),Se.exists(!0)))}return o.mutationQueue.addMutationBatch(d,f,k,a)}).next(v=>{c=v;const k=v.applyToLocalDocumentSet(l,p);return o.documentOverlayCache.saveOverlays(d,v.batchId,k)})}).then(()=>({batchId:c.batchId,changes:x5(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,o){let f=s.hc[s.currentUser.toKey()];f||(f=new Oe(Z)),f=f.insert(a,o),s.hc[s.currentUser.toKey()]=f}(r,i.batchId,n),await ni(r,i.changes),await Wo(r.remoteStore)}catch(i){const s=Ko(i,"Failed to persist write");n.reject(s)}}async function II(t,e){const n=O(t);try{const r=await ZF(n.localStore,e);e.targetChanges.forEach((i,s)=>{const a=n.cc.get(s);a&&(V(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.nc=!0:i.modifiedDocuments.size>0?V(a.nc):i.removedDocuments.size>0&&(V(a.nc),a.nc=!1))}),await ni(n,r,e)}catch(r){await Zi(r)}}function F6(t,e,n){const r=O(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,a)=>{const o=a.view.bu(e);o.snapshot&&i.push(o.snapshot)}),function(s,a){const o=O(s);o.onlineState=a;let f=!1;o.queries.forEach((u,l)=>{for(const c of l.listeners)c.bu(a)&&(f=!0)}),f&&S3(o)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function PU(t,e,n){const r=O(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let a=new Oe(L.comparator);a=a.insert(s,we.newNoDocument(s,q.min()));const o=ee().add(s),f=new Rl(q.min(),new Map,new pe(Z),a,o);await II(r,f),r.uc=r.uc.remove(s),r.cc.delete(e),A3(r)}else await _o(r.localStore,e,!1).then(()=>Eo(r,e,n)).catch(Zi)}async function MU(t,e){const n=O(t),r=e.batch.batchId;try{const i=await JF(n.localStore,e);R3(n,r,null),x3(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ni(n,i)}catch(i){await Zi(i)}}async function LU(t,e,n){const r=O(t);try{const i=await function(s,a){const o=O(s);return o.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let u;return o.mutationQueue.lookupMutationBatch(f,a).next(l=>(V(l!==null),u=l.keys(),o.mutationQueue.removeMutationBatch(f,l))).next(()=>o.mutationQueue.performConsistencyCheck(f)).next(()=>o.documentOverlayCache.removeOverlaysForBatchId(f,u,a)).next(()=>o.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,u)).next(()=>o.localDocuments.getDocuments(f,u))})}(r.localStore,e);R3(r,e,n),x3(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ni(r,i)}catch(i){await Zi(i)}}async function OU(t,e){const n=O(t);ns(n.remoteStore)||R("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const a=O(s);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",o=>a.mutationQueue.getHighestUnacknowledgedBatchId(o))}(n.localStore);if(r===-1)return void e.resolve();const i=n.lc.get(r)||[];i.push(e),n.lc.set(r,i)}catch(r){const i=Ko(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function x3(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function R3(t,e,n){const r=O(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function Eo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||SI(t,r)})}function SI(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Qu(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),A3(t))}function Om(t,e,n){for(const r of n)r instanceof _I?(t.ac.addReference(r.key,e),$U(t,r)):r instanceof kI?(R("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||SI(t,r.key)):$()}function $U(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(R("SyncEngine","New document in limbo: "+n),t.oc.add(r),A3(t))}function A3(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new L(ae.fromString(e)),r=t.fc.next();t.cc.set(r,new xU(n)),t.uc=t.uc.insert(n,r),m1(t.remoteStore,new Di(on(Vo(n.path)),r,2,Zt.at))}}async function ni(t,e,n){const r=O(t),i=[],s=[],a=[];r.ic.isEmpty()||(r.ic.forEach((o,f)=>{a.push(r._c(f,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(f.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=g3.Ci(f.targetId,u);s.push(l)}}))}),await Promise.all(a),r.sc.Wo(i),await async function(o,f){const u=O(o);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>E.forEach(f,c=>E.forEach(c.Si,d=>u.persistence.referenceDelegate.addReference(l,c.targetId,d)).next(()=>E.forEach(c.Di,d=>u.persistence.referenceDelegate.removeReference(l,c.targetId,d)))))}catch(l){if(!es(l))throw l;R("LocalStore","Failed to update sequence numbers: "+l)}for(const l of f){const c=l.targetId;if(!l.fromCache){const d=u.qi.get(c),h=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(h);u.qi=u.qi.insert(c,p)}}}(r.localStore,s))}async function FU(t,e){const n=O(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const r=await aI(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(a=>{a.forEach(o=>{o.reject(new x(S.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ni(n,r.ji)}}function UU(t,e){const n=O(t),r=n.cc.get(e);if(r&&r.nc)return ee().add(r.key);{let i=ee();const s=n.rc.get(e);if(!s)return i;for(const a of s){const o=n.ic.get(a);i=i.unionWith(o.view.ju)}return i}}async function jU(t,e){const n=O(t),r=await Yd(n.localStore,e.query,!0),i=e.view.tc(r);return n.isPrimaryClient&&Om(n,e.targetId,i.Xu),i}async function zU(t,e){const n=O(t);return lI(n.localStore,e).then(r=>ni(n,r))}async function VU(t,e,n,r){const i=O(t),s=await function(a,o){const f=O(a),u=O(f.mutationQueue);return f.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.Tn(l,o).next(c=>c?f.localDocuments.getDocuments(l,c):E.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Wo(i.remoteStore):n==="acknowledged"||n==="rejected"?(R3(i,e,r||null),x3(i,e),function(a,o){O(O(a).mutationQueue).An(o)}(i.localStore,e)):$(),await ni(i,s)):R("SyncEngine","Cannot apply mutation batch with id: "+e)}async function BU(t,e){const n=O(t);if(N3(n),D3(n),e===!0&&n.dc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await U6(n,r.toArray());n.dc=!0,await Lm(n.remoteStore,!0);for(const s of i)m1(n.remoteStore,s)}else if(e===!1&&n.dc!==!1){const r=[];let i=Promise.resolve();n.rc.forEach((s,a)=>{n.sharedClientState.isLocalQueryTarget(a)?r.push(a):i=i.then(()=>(Eo(n,a),_o(n.localStore,a,!0))),Qu(n.remoteStore,a)}),await i,await U6(n,r),function(s){const a=O(s);a.cc.forEach((o,f)=>{Qu(a.remoteStore,f)}),a.ac.fs(),a.cc=new Map,a.uc=new Oe(L.comparator)}(n),n.dc=!1,await Lm(n.remoteStore,!1)}}async function U6(t,e,n){const r=O(t),i=[],s=[];for(const a of e){let o;const f=r.rc.get(a);if(f&&f.length!==0){o=await bo(r.localStore,on(f[0]));for(const u of f){const l=r.ic.get(u),c=await jU(r,l);c.snapshot&&s.push(c.snapshot)}}else{const u=await uI(r.localStore,a);o=await bo(r.localStore,u),await C3(r,TI(u),a,!1,o.resumeToken)}i.push(o)}return r.sc.Wo(s),i}function TI(t){return d5(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function qU(t){const e=O(t);return O(O(e.localStore).persistence).vi()}async function HU(t,e,n,r){const i=O(t);if(i.dc)return void R("SyncEngine","Ignoring unexpected query state notification.");const s=i.rc.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const a=await lI(i.localStore,p5(s[0])),o=Rl.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Ze.EMPTY_BYTE_STRING);await ni(i,a,o);break}case"rejected":await _o(i.localStore,e,!0),Eo(i,e,r);break;default:$()}}async function WU(t,e,n){const r=N3(t);if(r.dc){for(const i of e){if(r.rc.has(i)){R("SyncEngine","Adding an already active target "+i);continue}const s=await uI(r.localStore,i),a=await bo(r.localStore,s);await C3(r,TI(s),a.targetId,!1,a.resumeToken),m1(r.remoteStore,a)}for(const i of n)r.rc.has(i)&&await _o(r.localStore,i,!1).then(()=>{Qu(r.remoteStore,i),Eo(r,i)}).catch(Zi)}}function N3(t){const e=O(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=II.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PU.bind(null,e),e.sc.Wo=EU.bind(null,e.eventManager),e.sc.wc=IU.bind(null,e.eventManager),e}function D3(t){const e=O(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MU.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=LU.bind(null,e),e}function GU(t,e,n){const r=O(t);(async function(i,s,a){try{const o=await s.getMetadata();if(await function(c,d){const h=O(c),p=Ve(d.createTime);return h.persistence.runTransaction("hasNewerBundle","readonly",v=>h.Ns.getBundleMetadata(v,d.id)).then(v=>!!v&&v.createTime.compareTo(p)>=0)}(i.localStore,o))return await s.close(),a._completeWith(function(c){return{taskState:"Success",documentsLoaded:c.totalDocuments,bytesLoaded:c.totalBytes,totalDocuments:c.totalDocuments,totalBytes:c.totalBytes}}(o)),Promise.resolve(new Set);a._updateProgress(bI(o));const f=new TU(o,i.localStore,s.yt);let u=await s.mc();for(;u;){const c=await f.Fu(u);c&&a._updateProgress(c),u=await s.mc()}const l=await f.complete();return await ni(i,l.Lu,void 0),await function(c,d){const h=O(c);return h.persistence.runTransaction("Save bundle","readwrite",p=>h.Ns.saveBundleMetadata(p,d))}(i.localStore,o),a._completeWith(l.progress),Promise.resolve(l.Bu)}catch(o){return ho("SyncEngine",`Loading bundle failed with ${o}`),a._failWith(o),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class CI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Nl(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return sI(this.persistence,new iI,e.initialUser,this.yt)}yc(e){return new rI(p1.Bs,this.yt)}gc(e){return new dI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xI extends CI{constructor(e,n,r){super(),this.Ac=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await D3(this.Ac.syncEngine),await Wo(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return sI(this.persistence,new iI,e.initialUser,this.yt)}Tc(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new $F(r,e.asyncQueue,n)}Ec(e,n){const r=new _$(n,this.persistence);return new b$(e.asyncQueue,r)}yc(e){const n=m3(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Kt.withCacheSize(this.cacheSizeBytes):Kt.DEFAULT;return new p3(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,hI(),Gc(),this.yt,this.sharedClientState,!!this.forceOwnership)}gc(e){return new dI}}class KU extends xI{constructor(e,n){super(e,n,!1),this.Ac=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ac.syncEngine;this.sharedClientState instanceof B0&&(this.sharedClientState.syncEngine={Fr:VU.bind(null,n),$r:HU.bind(null,n),Br:WU.bind(null,n),vi:qU.bind(null,n),Mr:zU.bind(null,n)},await this.sharedClientState.start()),await this.persistence.li(async r=>{await BU(this.Ac.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}gc(e){const n=hI();if(!B0.C(n))throw new x(S.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=m3(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new B0(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class P3{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>F6(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FU.bind(null,this.syncEngine),await Lm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new kU}createDatastore(e){const n=Nl(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new aU(i));var i;return function(s,a,o,f){return new uU(s,a,o,f)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=o=>F6(this.syncEngine,o,0),a=M6.C()?new M6:new rU,new cU(n,r,i,s,a);var n,r,i,s,a}createSyncEngine(e,n){return function(r,i,s,a,o,f,u){const l=new RU(r,i,s,a,o,f);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=O(e);R("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Ho(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M3(t,e,n){if(!n)throw new x(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function RI(t,e,n,r){if(e===!0&&r===!0)throw new x(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function j6(t){if(!L.isDocumentKey(t))throw new x(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function z6(t){if(L.isDocumentKey(t))throw new x(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function g1(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function ue(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=g1(t);throw new x(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function AI(t,e){if(e<=0)throw new x(S.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V6=new Map;class B6{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new x(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,RI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new B6({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new B6(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new f$;switch(n.type){case"gapi":const r=n.client;return new d$(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=V6.get(e);n&&(R("ComponentProvider","Removing Datastore"),V6.delete(e),n.terminate())}(this),Promise.resolve()}}function QU(t,e,n,r={}){var i;const s=(t=ue(t,Pl))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&ho("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let a,o;if(typeof r.mockUserToken=="string")a=r.mockUserToken,o=it.MOCK_USER;else{a=o9(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new x(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");o=new it(f)}t._authCredentials=new u$(new WE(a,o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _e(this.firestore,e,this._key)}}class _t{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _t(this.firestore,e,this._query)}}class kr extends _t{constructor(e,n,r){super(e,n,Vo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _e(this.firestore,null,new L(e))}withConverter(e){return new kr(this.firestore,e,this._path)}}function NI(t,e,...n){if(t=j(t),M3("collection","path",e),t instanceof Pl){const r=ae.fromString(e,...n);return z6(r),new kr(t,null,r)}{if(!(t instanceof _e||t instanceof kr))throw new x(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return z6(r),new kr(t.firestore,null,r)}}function YU(t,e){if(t=ue(t,Pl),M3("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new x(S.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new _t(t,null,function(n){return new ei(ae.emptyPath(),n)}(e))}function eh(t,e,...n){if(t=j(t),arguments.length===1&&(e=GE.R()),M3("doc","path",e),t instanceof Pl){const r=ae.fromString(e,...n);return j6(r),new _e(t,null,new L(r))}{if(!(t instanceof _e||t instanceof kr))throw new x(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return j6(r),new _e(t.firestore,t instanceof kr?t.converter:null,new L(r))}}function DI(t,e){return t=j(t),e=j(e),(t instanceof _e||t instanceof kr)&&(e instanceof _e||e instanceof kr)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function PI(t,e){return t=j(t),e=j(e),t instanceof _t&&e instanceof _t&&t.firestore===e.firestore&&Tl(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q6(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):je("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XU{constructor(e,n){this.Pc=e,this.yt=n,this.metadata=new at,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(r=>{r&&r.Ou()?this.metadata.resolve(r.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ku)}`))},r=>this.metadata.reject(r))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(e===null)return null;const n=this.vc.decode(e),r=Number(n);isNaN(r)&&this.Dc(`length string (${n}) is not valid number`);const i=await this.Cc(r);return new SU(JSON.parse(i),e.length+r)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(this.buffer.length===0)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const n=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JU{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new x(S.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=O(r),a=Gu(s.yt)+"/documents",o={documents:i.map(c=>Wu(s.yt,c))},f=await s._o("BatchGetDocuments",a,o,i.length),u=new Map;f.forEach(c=>{const d=Z$(s.yt,c);u.set(d.key.toString(),d)});const l=[];return i.forEach(c=>{const d=u.get(c.toString());V(!!d),l.push(d)}),l}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new qo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=L.fromPath(r);this.mutations.push(new s3(i,this.precondition(i)))}),await async function(n,r){const i=O(n),s=Gu(i.yt)+"/documents",a={writes:r.map(o=>Ku(i.yt,o))};await i.ao("Commit",s,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw $();n=q.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new x(S.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(q.min())?Se.exists(!1):Se.updateTime(n):Se.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(q.min()))throw new x(S.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Se.updateTime(n)}return Se.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZU{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.kc=r.maxAttempts,this.xo=new y3(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const e=new JU(this.datastore),n=this.Mc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Fc(i)}))}).catch(r=>{this.Fc(r)})})}Mc(e){try{const n=this.updateFunction(e);return!Il(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!S5(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ej{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=GE.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{R("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(R("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new at;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ko(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function MI(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await aI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function LI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await L3(t);R("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>L6(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>L6(e.remoteStore,s)),t.onlineComponents=e}async function L3(t){return t.offlineComponents||(R("FirestoreClient","Using default OfflineComponentProvider"),await MI(t,new CI)),t.offlineComponents}async function y1(t){return t.onlineComponents||(R("FirestoreClient","Using default OnlineComponentProvider"),await LI(t,new P3)),t.onlineComponents}function OI(t){return L3(t).then(e=>e.persistence)}function O3(t){return L3(t).then(e=>e.localStore)}function $I(t){return y1(t).then(e=>e.remoteStore)}function $3(t){return y1(t).then(e=>e.syncEngine)}function tj(t){return y1(t).then(e=>e.datastore)}async function Io(t){const e=await y1(t),n=e.eventManager;return n.onListen=AU.bind(null,e.syncEngine),n.onUnlisten=NU.bind(null,e.syncEngine),n}function nj(t){return t.asyncQueue.enqueue(async()=>{const e=await OI(t),n=await $I(t);return e.setNetworkEnabled(!0),function(r){const i=O(r);return i._u.delete(0),Dl(i)}(n)})}function rj(t){return t.asyncQueue.enqueue(async()=>{const e=await OI(t),n=await $I(t);return e.setNetworkEnabled(!1),async function(r){const i=O(r);i._u.add(0),await Ho(i),i.gu.set("Offline")}(n)})}function ij(t,e){const n=new at;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const a=await function(o,f){const u=O(o);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,f))}(r,i);a.isFoundDocument()?s.resolve(a):a.isNoDocument()?s.resolve(null):s.reject(new x(S.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const o=Ko(a,`Failed to get document '${i} from cache`);s.reject(o)}}(await O3(t),e,n)),n.promise}function FI(t,e,n={}){const r=new at;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,a,o,f){const u=new v1({next:c=>{s.enqueueAndForget(()=>I3(i,l));const d=c.docs.has(a);!d&&c.fromCache?f.reject(new x(S.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&c.fromCache&&o&&o.source==="server"?f.reject(new x(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(c)},error:c=>f.reject(c)}),l=new T3(Vo(a.path),u,{includeMetadataChanges:!0,Nu:!0});return E3(i,l)}(await Io(t),t.asyncQueue,e,n,r)),r.promise}function sj(t,e){const n=new at;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const a=await Yd(r,i,!0),o=new EI(i,a.Hi),f=o.Wu(a.documents),u=o.applyChanges(f,!1);s.resolve(u.snapshot)}catch(a){const o=Ko(a,`Failed to execute query '${i} against cache`);s.reject(o)}}(await O3(t),e,n)),n.promise}function UI(t,e,n={}){const r=new at;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,a,o,f){const u=new v1({next:c=>{s.enqueueAndForget(()=>I3(i,l)),c.fromCache&&o.source==="server"?f.reject(new x(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(c)},error:c=>f.reject(c)}),l=new T3(a,u,{includeMetadataChanges:!0,Nu:!0});return E3(i,l)}(await Io(t),t.asyncQueue,e,n,r)),r.promise}function aj(t,e){const n=new v1(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){O(r).Ru.add(i),i.next()}(await Io(t),n)),()=>{n.bc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){O(r).Ru.delete(i)}(await Io(t),n))}}function oj(t,e,n,r){const i=function(s,a){let o;return o=typeof s=="string"?new TextEncoder().encode(s):s,function(f,u){return new XU(f,u)}(function(f,u){if(f instanceof Uint8Array)return q6(f,u);if(f instanceof ArrayBuffer)return q6(new Uint8Array(f),u);if(f instanceof ReadableStream)return f.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(o),a)}(n,Nl(e));t.asyncQueue.enqueueAndForget(async()=>{GU(await $3(t),i,r)})}function fj(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=O(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Ns.getNamedQuery(s,r))}(await O3(t),e))}class uj{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new y3(this,"async_queue_retry"),this.Wc=()=>{const n=Gc();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Gc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Gc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new at;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!es(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw je("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=k3.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.Uc.push(i),i}zc(){this.Kc&&$()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function $m(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class lj{constructor(){this._progressObserver={},this._taskCompletionResolver=new at,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cj=-1;class $e extends Pl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new uj,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||jI(this),this._firestoreClient.terminate()}}function ct(t){return t._firestoreClient||jI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function jI(t){var e;const n=t._freezeSettings(),r=function(i,s,a,o){return new k$(i,s,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,o.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ej(t._authCredentials,t._appCheckCredentials,t._queue,r)}function dj(t,e){VI(t=ue(t,$e));const n=ct(t),r=t._freezeSettings(),i=new P3;return zI(n,i,new xI(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function hj(t){VI(t=ue(t,$e));const e=ct(t),n=t._freezeSettings(),r=new P3;return zI(e,r,new KU(r,n.cacheSizeBytes))}function zI(t,e,n){const r=new at;return t.asyncQueue.enqueue(async()=>{try{await MI(t,n),await LI(t,e),r.resolve()}catch(i){const s=i;if(!function(a){return a.name==="FirebaseError"?a.code===S.FAILED_PRECONDITION||a.code===S.UNIMPLEMENTED:typeof DOMException<"u"&&a instanceof DOMException?a.code===22||a.code===20||a.code===11:!0}(s))throw s;ho("Error enabling offline persistence. Falling back to persistence disabled: "+s),r.reject(s)}}).then(()=>r.promise)}function pj(t){if(t._initialized&&!t._terminated)throw new x(S.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new at;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Kn.C())return Promise.resolve();const r=n+"main";await Kn.delete(r)}(m3(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function mj(t){return function(e){const n=new at;return e.asyncQueue.enqueueAndForget(async()=>OU(await $3(e),n)),n.promise}(ct(t=ue(t,$e)))}function gj(t){return nj(ct(t=ue(t,$e)))}function vj(t){return rj(ct(t=ue(t,$e)))}function yj(t,e){const n=ct(t=ue(t,$e)),r=new lj;return oj(n,t._databaseId,e,r),r}function wj(t,e){return fj(ct(t=ue(t,$e)),e).then(n=>n?new _t(t,null,n.query):null)}function VI(t){if(t._initialized||t._terminated)throw new x(S.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Tr(Ze.fromBase64String(e))}catch(n){throw new x(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Tr(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bj=/^__.*__$/;class _j{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ti(e,this.data,this.fieldMask,n,this.fieldTransforms):new Bo(e,this.data,n,this.fieldTransforms)}}class BI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ti(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function qI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class b1{constructor(e,n,r,i,s,a){this.settings=e,this.databaseId=n,this.yt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new b1(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return th(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(qI(this.sa)&&bj.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class kj{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=r||Nl(e)}da(e,n,r,i=!1){return new b1({sa:e,methodName:n,fa:r,path:ze.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function fa(t){const e=t._freezeSettings(),n=Nl(t._databaseId);return new kj(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _1(t,e,n,r,i,s={}){const a=t.da(s.merge||s.mergeFields?2:0,e,n,i);z3("Data must be an object, but it was:",a,r);const o=GI(r,a);let f,u;if(s.merge)f=new en(a.fieldMask),u=a.fieldTransforms;else if(s.mergeFields){const l=[];for(const c of s.mergeFields){const d=Fm(e,c,n);if(!a.contains(d))throw new x(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);QI(l,d)||l.push(d)}f=new en(l),u=a.fieldTransforms.filter(c=>f.covers(c.field))}else f=null,u=a.fieldTransforms;return new _j(new mt(o),f,u)}class Ml extends oa{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ml}}function HI(t,e,n){return new b1({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.yt,e.ignoreUndefinedProperties)}class F3 extends oa{_toFieldTransform(e){return new xl(e.path,new vo)}isEqual(e){return e instanceof F3}}class Ej extends oa{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=HI(this,e,!0),r=this._a.map(s=>ua(s,n)),i=new Qs(r);return new xl(e.path,i)}isEqual(e){return this===e}}class Ij extends oa{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=HI(this,e,!0),r=this._a.map(s=>ua(s,n)),i=new Ys(r);return new xl(e.path,i)}isEqual(e){return this===e}}class Sj extends oa{constructor(e,n){super(e),this.wa=n}_toFieldTransform(e){const n=new yo(e.yt,y5(e.yt,this.wa));return new xl(e.path,n)}isEqual(e){return this===e}}function U3(t,e,n,r){const i=t.da(1,e,n);z3("Data must be an object, but it was:",i,r);const s=[],a=mt.empty();aa(r,(f,u)=>{const l=V3(e,f,n);u=j(u);const c=i.ca(l);if(u instanceof Ml)s.push(l);else{const d=ua(u,c);d!=null&&(s.push(l),a.set(l,d))}});const o=new en(s);return new BI(a,o,i.fieldTransforms)}function j3(t,e,n,r,i,s){const a=t.da(1,e,n),o=[Fm(e,r,n)],f=[i];if(s.length%2!=0)throw new x(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)o.push(Fm(e,s[d])),f.push(s[d+1]);const u=[],l=mt.empty();for(let d=o.length-1;d>=0;--d)if(!QI(u,o[d])){const h=o[d];let p=f[d];p=j(p);const v=a.ca(h);if(p instanceof Ml)u.push(h);else{const k=ua(p,v);k!=null&&(u.push(h),l.set(h,k))}}const c=new en(u);return new BI(l,c,a.fieldTransforms)}function WI(t,e,n,r=!1){return ua(n,t.da(r?4:3,e))}function ua(t,e){if(KI(t=j(t)))return z3("Unsupported field value:",e,t),GI(t,e);if(t instanceof oa)return function(n,r){if(!qI(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const a of n){let o=ua(a,r.aa(s));o==null&&(o={nullValue:"NULL_VALUE"}),i.push(o),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=j(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return y5(r.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Te.fromDate(n);return{timestampValue:wo(r.yt,i)}}if(n instanceof Te){const i=new Te(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:wo(r.yt,i)}}if(n instanceof w1)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Tr)return{bytesValue:D5(r.yt,n._byteString)};if(n instanceof _e){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:a3(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${g1(n)}`)}(t,e)}function GI(t,e){const n={};return e5(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):aa(t,(r,i)=>{const s=ua(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function KI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Te||t instanceof w1||t instanceof Tr||t instanceof _e||t instanceof oa)}function z3(t,e,n){if(!KI(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=g1(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function Fm(t,e,n){if((e=j(e))instanceof Bi)return e._internalPath;if(typeof e=="string")return V3(t,e);throw th("Field path arguments must be of type string or ",t,!1,void 0,n)}const Tj=new RegExp("[~\\*/\\[\\]]");function V3(t,e,n){if(e.search(Tj)>=0)throw th(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bi(...e.split("."))._internalPath}catch{throw th(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function th(t,e,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let o=`Function ${e}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let f="";return(s||a)&&(f+=" (found",s&&(f+=` in field ${r}`),a&&(f+=` in document ${i}`),f+=")"),new x(S.INVALID_ARGUMENT,o+t+f)}function QI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new _e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Cj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(k1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Cj extends Yu{data(){return super.data()}}function k1(t,e){return typeof e=="string"?V3(t,e):e instanceof Bi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class B3{}class Ll extends B3{}function fi(t,e,...n){let r=[];e instanceof B3&&r.push(e),r=r.concat(n),function(i){const s=i.filter(o=>o instanceof q3).length,a=i.filter(o=>o instanceof E1).length;if(s>1||s>0&&a>0)throw new x(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class E1 extends Ll{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new E1(e,n,r)}_apply(e){const n=this._parse(e);return JI(e._query,n),new _t(e.firestore,e.converter,Tm(e._query,n))}_parse(e){const n=fa(e.firestore);return function(i,s,a,o,f,u,l){let c;if(f.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new x(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){W6(l,u);const d=[];for(const h of l)d.push(H6(o,i,h));c={arrayValue:{values:d}}}else c=H6(o,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||W6(l,u),c=WI(a,s,l,u==="in"||u==="not-in");return re.create(f,u,c)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function xj(t,e,n){const r=e,i=k1("where",t);return E1._create(i,r,n)}class q3 extends B3{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new q3(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ce.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const a=i.getFlattenedFilters();for(const o of a)JI(s,o),s=Tm(s,o)}(e._query,n),new _t(e.firestore,e.converter,Tm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class H3 extends Ll{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new H3(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new x(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new x(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Ja(i,s);return function(o,f){if(r3(o)===null){const u=f1(o);u!==null&&ZI(o,u,f.field)}}(r,a),a}(e._query,this._field,this._direction);return new _t(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new ei(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function Rj(t,e="asc"){const n=e,r=k1("orderBy",t);return H3._create(r,n)}class I1 extends Ll{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new I1(e,n,r)}_apply(e){return new _t(e.firestore,e.converter,Wd(e._query,this._limit,this._limitType))}}function Aj(t){return AI("limit",t),I1._create("limit",t,"F")}function Nj(t){return AI("limitToLast",t),I1._create("limitToLast",t,"L")}class S1 extends Ll{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new S1(e,n,r)}_apply(e){const n=XI(e,this.type,this._docOrFields,this._inclusive);return new _t(e.firestore,e.converter,function(r,i){return new ei(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function Dj(...t){return S1._create("startAt",t,!0)}function Pj(...t){return S1._create("startAfter",t,!1)}class T1 extends Ll{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new T1(e,n,r)}_apply(e){const n=XI(e,this.type,this._docOrFields,this._inclusive);return new _t(e.firestore,e.converter,function(r,i){return new ei(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function Mj(...t){return T1._create("endBefore",t,!1)}function Lj(...t){return T1._create("endAt",t,!0)}function XI(t,e,n,r){if(n[0]=j(n[0]),n[0]instanceof Yu)return function(i,s,a,o,f){if(!o)throw new x(S.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const u=[];for(const l of Ns(i))if(l.field.isKeyField())u.push(Gs(s,o.key));else{const c=o.data.field(l.field);if(t3(c))throw new x(S.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(c===null){const d=l.field.canonicalString();throw new x(S.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(c)}return new zi(u,f)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=fa(t.firestore);return function(s,a,o,f,u,l){const c=s.explicitOrderBy;if(u.length>c.length)throw new x(S.INVALID_ARGUMENT,`Too many arguments provided to ${f}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let h=0;h<u.length;h++){const p=u[h];if(c[h].field.isKeyField()){if(typeof p!="string")throw new x(S.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${f}(), but got a ${typeof p}`);if(!i3(s)&&p.indexOf("/")!==-1)throw new x(S.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${f}() must be a plain document ID, but '${p}' contains a slash.`);const v=s.path.child(ae.fromString(p));if(!L.isDocumentKey(v))throw new x(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${f}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const k=new L(v);d.push(Gs(a,k))}else{const v=WI(o,f,p);d.push(v)}}return new zi(d,l)}(t._query,t.firestore._databaseId,i,e,n,r)}}function H6(t,e,n){if(typeof(n=j(n))=="string"){if(n==="")throw new x(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!i3(e)&&n.indexOf("/")!==-1)throw new x(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ae.fromString(n));if(!L.isDocumentKey(r))throw new x(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Gs(t,new L(r))}if(n instanceof _e)return Gs(t,n._key);throw new x(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${g1(n)}.`)}function W6(t,e){if(!Array.isArray(t)||t.length===0)throw new x(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new x(S.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function JI(t,e){if(e.isInequality()){const r=f1(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new x(S.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=r3(t);s!==null&&ZI(t,i,s)}const n=function(r,i){for(const s of r)for(const a of s.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new x(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function ZI(t,e,n){if(!n.isEqual(e))throw new x(S.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class W3{convertValue(e,n="none"){switch(Ws(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Hs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){const r={};return aa(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new w1(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=n5(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Bu(e));default:return null}}convertTimestamp(e){const n=Ui(e);return new Te(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ae.fromString(e);V(V5(r));const i=new Fi(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||je(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Oj extends W3{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _e(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qr extends Yu{constructor(e,n,r,i,s,a){super(e,n,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new nu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(k1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class nu extends Qr{data(e={}){return super.data(e)}}class qi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ks(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new nu(this._firestore,this._userDataWriter,r.key,r,new ks(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(a=>{const o=new nu(r._firestore,r._userDataWriter,a.doc.key,a.doc,new ks(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:o,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const o=new nu(r._firestore,r._userDataWriter,a.doc.key,a.doc,new ks(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let f=-1,u=-1;return a.type!==0&&(f=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),u=s.indexOf(a.doc.key)),{type:$j(a.type),doc:o,oldIndex:f,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function $j(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}function eS(t,e){return t instanceof Qr&&e instanceof Qr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof qi&&e instanceof qi&&t._firestore===e._firestore&&PI(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fj(t){t=ue(t,_e);const e=ue(t.firestore,$e);return FI(ct(e),t._key).then(n=>G3(e,t,n))}class la extends W3{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _e(this.firestore,null,n)}}function Uj(t){t=ue(t,_e);const e=ue(t.firestore,$e),n=ct(e),r=new la(e);return ij(n,t._key).then(i=>new Qr(e,r,t._key,i,new ks(i!==null&&i.hasLocalMutations,!0),t.converter))}function jj(t){t=ue(t,_e);const e=ue(t.firestore,$e);return FI(ct(e),t._key,{source:"server"}).then(n=>G3(e,t,n))}function zj(t){t=ue(t,_t);const e=ue(t.firestore,$e),n=ct(e),r=new la(e);return YI(t._query),UI(n,t._query).then(i=>new qi(e,r,t,i))}function Vj(t){t=ue(t,_t);const e=ue(t.firestore,$e),n=ct(e),r=new la(e);return sj(n,t._query).then(i=>new qi(e,r,t,i))}function Bj(t){t=ue(t,_t);const e=ue(t.firestore,$e),n=ct(e),r=new la(e);return UI(n,t._query,{source:"server"}).then(i=>new qi(e,r,t,i))}function G6(t,e,n){t=ue(t,_e);const r=ue(t.firestore,$e),i=C1(t.converter,e,n);return Ol(r,[_1(fa(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Se.none())])}function K6(t,e,n,...r){t=ue(t,_e);const i=ue(t.firestore,$e),s=fa(i);let a;return a=typeof(e=j(e))=="string"||e instanceof Bi?j3(s,"updateDoc",t._key,e,n,r):U3(s,"updateDoc",t._key,e),Ol(i,[a.toMutation(t._key,Se.exists(!0))])}function qj(t){return Ol(ue(t.firestore,$e),[new qo(t._key,Se.none())])}function Hj(t,e){const n=ue(t.firestore,$e),r=eh(t),i=C1(t.converter,e);return Ol(n,[_1(fa(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Se.exists(!1))]).then(()=>r)}function tS(t,...e){var n,r,i;t=j(t);let s={includeMetadataChanges:!1},a=0;typeof e[a]!="object"||$m(e[a])||(s=e[a],a++);const o={includeMetadataChanges:s.includeMetadataChanges};if($m(e[a])){const c=e[a];e[a]=(n=c.next)===null||n===void 0?void 0:n.bind(c),e[a+1]=(r=c.error)===null||r===void 0?void 0:r.bind(c),e[a+2]=(i=c.complete)===null||i===void 0?void 0:i.bind(c)}let f,u,l;if(t instanceof _e)u=ue(t.firestore,$e),l=Vo(t._key.path),f={next:c=>{e[a]&&e[a](G3(u,t,c))},error:e[a+1],complete:e[a+2]};else{const c=ue(t,_t);u=ue(c.firestore,$e),l=c._query;const d=new la(u);f={next:h=>{e[a]&&e[a](new qi(u,d,c,h))},error:e[a+1],complete:e[a+2]},YI(t._query)}return function(c,d,h,p){const v=new v1(p),k=new T3(d,v,h);return c.asyncQueue.enqueueAndForget(async()=>E3(await Io(c),k)),()=>{v.bc(),c.asyncQueue.enqueueAndForget(async()=>I3(await Io(c),k))}}(ct(u),l,o,f)}function Wj(t,e){return aj(ct(t=ue(t,$e)),$m(e)?e:{next:e})}function Ol(t,e){return function(n,r){const i=new at;return n.asyncQueue.enqueueAndForget(async()=>DU(await $3(n),r,i)),i.promise}(ct(t),e)}function G3(t,e,n){const r=n.docs.get(e._key),i=new la(t);return new Qr(t,i,e._key,r,new ks(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gj={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kj{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=fa(e)}set(e,n,r){this._verifyNotCommitted();const i=mi(e,this._firestore),s=C1(i.converter,n,r),a=_1(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(a.toMutation(i._key,Se.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=mi(e,this._firestore);let a;return a=typeof(n=j(n))=="string"||n instanceof Bi?j3(this._dataReader,"WriteBatch.update",s._key,n,r,i):U3(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(a.toMutation(s._key,Se.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=mi(e,this._firestore);return this._mutations=this._mutations.concat(new qo(n._key,Se.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new x(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function mi(t,e){if((t=j(t)).firestore!==e)throw new x(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qj extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=fa(e)}get(e){const n=mi(e,this._firestore),r=new Oj(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return $();const s=i[0];if(s.isFoundDocument())return new Yu(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new Yu(this._firestore,r,n._key,null,n.converter);throw $()})}set(e,n,r){const i=mi(e,this._firestore),s=C1(i.converter,n,r),a=_1(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,a),this}update(e,n,r,...i){const s=mi(e,this._firestore);let a;return a=typeof(n=j(n))=="string"||n instanceof Bi?j3(this._dataReader,"Transaction.update",s._key,n,r,i):U3(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,a),this}delete(e){const n=mi(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=mi(e,this._firestore),r=new la(this._firestore);return super.get(e).then(i=>new Qr(this._firestore,r,n._key,i._document,new ks(!1,!1),n.converter))}}function Yj(t,e,n){t=ue(t,$e);const r=Object.assign(Object.assign({},Gj),n);return function(i){if(i.maxAttempts<1)throw new x(S.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,a){const o=new at;return i.asyncQueue.enqueueAndForget(async()=>{const f=await tj(i);new ZU(i.asyncQueue,f,a,s,o).run()}),o.promise}(ct(t),i=>e(new Qj(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xj(){return new Ml("deleteField")}function Jj(){return new F3("serverTimestamp")}function Zj(...t){return new Ej("arrayUnion",t)}function ez(...t){return new Ij("arrayRemove",t)}function tz(t){return new Sj("increment",t)}(function(t,e=!0){(function(n){zo=n})(Ki),Wr(new On("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),a=new $e(new l$(n.getProvider("auth-internal")),new p$(n.getProvider("app-check-internal")),function(o,f){if(!Object.prototype.hasOwnProperty.apply(o.options,["projectId"]))throw new x(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fi(o.options.projectId,f)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Pn(H4,"3.8.3",t),Pn(H4,"3.8.3","esm2017")})();const nz="@firebase/firestore-compat",rz="0.3.3";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K3(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new x("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q6(){if(typeof Uint8Array>"u")throw new x("unimplemented","Uint8Arrays are not available in this environment.")}function Y6(){if(!E$())throw new x("unimplemented","Blobs are unavailable in Firestore in this environment.")}let nS=class Um{constructor(e){this._delegate=e}static fromBase64String(e){return Y6(),new Um(Tr.fromBase64String(e))}static fromUint8Array(e){return Q6(),new Um(Tr.fromUint8Array(e))}toBase64(){return Y6(),this._delegate.toBase64()}toUint8Array(){return Q6(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(t){return iz(t,["next","error","complete"])}function iz(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sz{enableIndexedDbPersistence(e,n){return dj(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return hj(e._delegate)}clearIndexedDbPersistence(e){return pj(e._delegate)}}class rS{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Fi||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&ho("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){QU(this._delegate,e,n,r)}enableNetwork(){return gj(this._delegate)}disableNetwork(){return vj(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,RI("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return mj(this._delegate)}onSnapshotsInSync(e){return Wj(this._delegate,e)}get app(){if(!this._appCompat)throw new x("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new So(this,NI(this._delegate,e))}catch(n){throw Ft(n,"collection()","Firestore.collection()")}}doc(e){try{return new Nn(this,eh(this._delegate,e))}catch(n){throw Ft(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Ot(this,YU(this._delegate,e))}catch(n){throw Ft(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Yj(this._delegate,n=>e(new iS(this,n)))}batch(){return ct(this._delegate),new sS(new Kj(this._delegate,e=>Ol(this._delegate,e)))}loadBundle(e){return yj(this._delegate,e)}namedQuery(e){return wj(this._delegate,e).then(n=>n?new Ot(this,n):null)}}class x1 extends W3{constructor(e){super(),this.firestore=e}convertBytes(e){return new nS(new Tr(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Nn.forKey(n,this.firestore,null)}}function az(t){a$(t)}class iS{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new x1(e)}get(e){const n=Es(e);return this._delegate.get(n).then(r=>new Xu(this._firestore,new Qr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Es(e);return r?(K3("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Es(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Es(e);return this._delegate.delete(n),this}}class sS{constructor(e){this._delegate=e}set(e,n,r){const i=Es(e);return r?(K3("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Es(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Es(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class ea{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new nu(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ju(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=ea.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new ea(e,new x1(e),n),i.set(n,s)),s}}ea.INSTANCES=new WeakMap;class Nn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new x1(e)}static forPath(e,n,r){if(e.length%2!==0)throw new x("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Nn(n,new _e(n._delegate,r,new L(e)))}static forKey(e,n,r){return new Nn(n,new _e(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new So(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new So(this.firestore,NI(this._delegate,e))}catch(n){throw Ft(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=j(e),e instanceof _e?DI(this._delegate,e):!1}set(e,n){n=K3("DocumentReference.set",n);try{return n?G6(this._delegate,e,n):G6(this._delegate,e)}catch(r){throw Ft(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?K6(this._delegate,e):K6(this._delegate,e,n,...r)}catch(i){throw Ft(i,"updateDoc()","DocumentReference.update()")}}delete(){return qj(this._delegate)}onSnapshot(...e){const n=aS(e),r=oS(e,i=>new Xu(this.firestore,new Qr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return tS(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=Uj(this._delegate):(e==null?void 0:e.source)==="server"?n=jj(this._delegate):n=Fj(this._delegate),n.then(r=>new Xu(this.firestore,new Qr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Nn(this.firestore,e?this._delegate.withConverter(ea.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ft(t,e,n){return t.message=t.message.replace(e,n),t}function aS(t){for(const e of t)if(typeof e=="object"&&!jm(e))return e;return{}}function oS(t,e){var n,r;let i;return jm(t[0])?i=t[0]:jm(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Xu{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Nn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return eS(this._delegate,e._delegate)}}class Ju extends Xu{data(e){const n=this._delegate.data(e);return o$(n!==void 0),n}}class Ot{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new x1(e)}where(e,n,r){try{return new Ot(this.firestore,fi(this._delegate,xj(e,n,r)))}catch(i){throw Ft(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Ot(this.firestore,fi(this._delegate,Rj(e,n)))}catch(r){throw Ft(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Ot(this.firestore,fi(this._delegate,Aj(e)))}catch(n){throw Ft(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Ot(this.firestore,fi(this._delegate,Nj(e)))}catch(n){throw Ft(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Ot(this.firestore,fi(this._delegate,Dj(...e)))}catch(n){throw Ft(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Ot(this.firestore,fi(this._delegate,Pj(...e)))}catch(n){throw Ft(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Ot(this.firestore,fi(this._delegate,Mj(...e)))}catch(n){throw Ft(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Ot(this.firestore,fi(this._delegate,Lj(...e)))}catch(n){throw Ft(n,"endAt()","Query.endAt()")}}isEqual(e){return PI(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=Vj(this._delegate):(e==null?void 0:e.source)==="server"?n=Bj(this._delegate):n=zj(this._delegate),n.then(r=>new zm(this.firestore,new qi(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=aS(e),r=oS(e,i=>new zm(this.firestore,new qi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return tS(this._delegate,n,r)}withConverter(e){return new Ot(this.firestore,e?this._delegate.withConverter(ea.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class oz{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Ju(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class zm{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Ot(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Ju(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new oz(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Ju(this._firestore,r))})}isEqual(e){return eS(this._delegate,e._delegate)}}class So extends Ot{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Nn(this.firestore,e):null}doc(e){try{return e===void 0?new Nn(this.firestore,eh(this._delegate)):new Nn(this.firestore,eh(this._delegate,e))}catch(n){throw Ft(n,"doc()","CollectionReference.doc()")}}add(e){return Hj(this._delegate,e).then(n=>new Nn(this.firestore,n))}isEqual(e){return DI(this._delegate,e._delegate)}withConverter(e){return new So(this.firestore,e?this._delegate.withConverter(ea.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Es(t){return ue(t,_e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q3{constructor(...e){this._delegate=new Bi(...e)}static documentId(){return new Q3(ze.keyField().canonicalString())}isEqual(e){return e=j(e),e instanceof Bi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this._delegate=e}static serverTimestamp(){const e=Jj();return e._methodName="FieldValue.serverTimestamp",new ms(e)}static delete(){const e=Xj();return e._methodName="FieldValue.delete",new ms(e)}static arrayUnion(...e){const n=Zj(...e);return n._methodName="FieldValue.arrayUnion",new ms(n)}static arrayRemove(...e){const n=ez(...e);return n._methodName="FieldValue.arrayRemove",new ms(n)}static increment(e){const n=tz(e);return n._methodName="FieldValue.increment",new ms(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fz={Firestore:rS,GeoPoint:w1,Timestamp:Te,Blob:nS,Transaction:iS,WriteBatch:sS,DocumentReference:Nn,DocumentSnapshot:Xu,Query:Ot,QueryDocumentSnapshot:Ju,QuerySnapshot:zm,CollectionReference:So,FieldPath:Q3,FieldValue:ms,setLogLevel:az,CACHE_SIZE_UNLIMITED:cj};function uz(t,e){t.INTERNAL.registerComponent(new On("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},fz)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lz(t){uz(t,(e,n)=>new rS(e,n,new sz)),t.registerVersion(nz,rz)}lz(tt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X6{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Ec(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new Ec(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=a=>n(new Ec(a,this,this._ref)):s={next:n.next?a=>n.next(new Ec(a,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class J6{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new zr(e,this._service))}get items(){return this._delegate.items.map(e=>new zr(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=iD(this._delegate,e);return new zr(n,this.storage)}get root(){return new zr(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new zr(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new X6(q9(this._delegate,e,n),this)}putString(e,n=An.RAW,r){this._throwIfRoot("putString");const i=N9(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new X6(new U9(this._delegate,new Dr(i.data,!0),s),this)}listAll(){return nD(this._delegate).then(e=>new J6(e,this.storage))}list(e){return tD(this._delegate,e||void 0).then(n=>new J6(n,this.storage))}getMetadata(){return ZN(this._delegate)}updateMetadata(e){return eD(this._delegate,e)}getDownloadURL(){return H9(this._delegate)}delete(){return this._throwIfRoot("delete"),rD(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw x9(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(Z6(e))throw Ka("ref() expected a child path but got a URL, use refFromURL instead.");return new zr(em(this._delegate,e),this)}refFromURL(e){if(!Z6(e))throw Ka("refFromURL() expected a full URL but got a child path, use ref() instead.");try{Tt.makeFromUrl(e,this._delegate.host)}catch{throw Ka("refFromUrl() expected a valid full URL but got an invalid one.")}return new zr(em(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){sD(this._delegate,e,n,r)}}function Z6(t){return/^[A-Za-z]+:\/\//.test(t)}const cz="@firebase/storage-compat",dz="0.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hz="storage-compat";function pz(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new fS(n,r)}function mz(t){const e={TaskState:$t,TaskEvent:FN,StringFormat:An,Storage:fS,Reference:zr};t.INTERNAL.registerComponent(new On(hz,pz,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(cz,dz)}mz(tt);const gz={apiKey:"AIzaSyCTJiSV3XxKObMHbfDu46K9O21FNvjPnwE",authDomain:"whatsappclone-a0dc2.firebaseapp.com",projectId:"whatsappclone-a0dc2",storageBucket:"whatsappclone-a0dc2.appspot.com",messagingSenderId:"1020477980415",appId:"1:1020477980415:web:15e0ea0bdf7bb79a8456ca"},Vm=tt.initializeApp(gz),Qe=Vm.firestore(),vz=tt.storage(),Xn={fbRedirect:async()=>{const t=new tt.auth.FacebookAuthProvider;let e=await Vm.auth().signInWithPopup(t);return{user:e.user,accessToken:e.credential.accessToken}},googleRedirect:async()=>{const t=new tt.auth.GoogleAuthProvider;let e=await Vm.auth().signInWithPopup(t);return{user:e.user,accessToken:e.credential.accessToken}},addUser:async t=>{await Qe.collection("users").doc(t.id).set({name:t.name,avatar:t.avatar},{merge:!0})},getContactList:async t=>{let e=[];return(await Qe.collection("users").get()).forEach(r=>{let i=r.data();r.id!==t&&e.push({id:r.id,name:i.name,avatar:i.avatar})}),e},addNewChat:async(t,e,n)=>{let i=(await Qe.collection("users").doc(t.id).get()).data(),s=!1;if(i.chats)for(let a in i.chats)i.chats[a].with==e.id&&(s=!0);if(s)alert("Chat já existente!");else{let a=await Qe.collection("chats").add({messages:[],newChat:!0,users:[t.id,e.id]});await Qe.collection("users").doc(t.id).update({chats:tt.firestore.FieldValue.arrayUnion({chatId:a.id,image:e.avatar,title:e.name,with:e.id})}),await Qe.collection("users").doc(e.id).update({chats:tt.firestore.FieldValue.arrayUnion({chatId:a.id,title:t.name,image:t.avatar,with:t.id})}),n({chatId:a.id,image:e.avatar,title:e.name,with:e.id})}},onChatListUpdate:(t,e)=>Qe.collection("users").doc(t).onSnapshot(n=>{if(n.exists){let r=n.data();if(r.chats){let i=[...r.chats];i.sort((s,a)=>s.lastMessageDate===void 0||a.lastMessageDate===void 0?-1:s.lastMessageDate.seconds<a.lastMessageDate.seconds?1:-1),e(i)}}}),onChatMessagesUpdate:(t,e,n)=>Qe.collection("chats").doc(t).onSnapshot(r=>{if(r.exists){let i=r.data();e(i.messages),n(i.users)}}),updateNotificationsStatus:async(t,e)=>{let n=Qe.collection("users").doc(t),s=[...(await n.get()).data().chats];for(let a in s)s[a].chatId==e&&(s[a].unreadMessage=!1,await n.update({chats:s}))},sendMessage:async(t,e,n,r)=>{if(n!==""){let i=new Date;const s=Qe.collection("chats").doc(t);await s.get().then(async a=>{if(a.exists){let o=a.data(),f=o.lastDate;if(o.newChat&&await Qe.collection("chats").doc(t).update({newChat:!1}),f){let u=f.toDate(),l=new Date(u);i.getDate()==l.getDate()&&i.getMonth()==l.getMonth()&&i.getFullYear()==l.getFullYear()||await s.update({lastDate:i}).then(async()=>{await s.update({messages:tt.firestore.FieldValue.arrayUnion({authorId:"",body:"",sentDate:i,type:"timeStamp"})})})}else await s.update({lastDate:i}).then(async()=>{await s.update({messages:tt.firestore.FieldValue.arrayUnion({authorId:"",body:"",sentDate:i,type:"timeStamp"})})})}}),await Qe.collection("chats").doc(t).update({messages:tt.firestore.FieldValue.arrayUnion({authorId:e,body:n,sentDate:i,type:"text"})});for(let a in r){let f=(await Qe.collection("users").doc(r[a]).get()).data(),u=[...f.chats];if(r[a]!=e)for(let l in u)u[l].chatId==t&&(u[l].unreadMessage=!0);if(f.chats){for(let l in u)u[l].chatId==t&&(u[l].lastMessage=n,u[l].lastMessageDate=i);setTimeout(async()=>{await Qe.collection("users").doc(r[a]).update({chats:u})},400)}}}else alert("O corpo da mensagem não pode ser vazio!")},newMessageStatus:async(t,e,n,r)=>{await Qe.collection("chats").doc(t).get().then(s=>{if(s.exists){let a=s.data();(a.newChat||!a.newChat&&n&&r>0)&&e(!1)}})},sendImageMessage:async(t,e,n,r)=>{let i=new Date;const s=Qe.collection("chats").doc(e),a=em(vz,`images/${e}/${dD()}`);q9(a,t).then(o=>{H9(o.ref).then(async f=>{await s.get().then(async u=>{if(u.exists){let l=u.data(),c=l.lastDate;if(l.newChat&&await Qe.collection("chats").doc(e).update({newChat:!1}),c){let d=c.toDate(),h=new Date(d);i.getDate()==h.getDate()&&i.getMonth()==h.getMonth()&&i.getFullYear()==h.getFullYear()||await s.update({lastDate:i}).then(async()=>{await s.update({messages:tt.firestore.FieldValue.arrayUnion({authorId:"",body:"",sentDate:i,type:"timeStamp"})})})}else await s.update({lastDate:i}).then(async()=>{await s.update({messages:tt.firestore.FieldValue.arrayUnion({authorId:"",body:"",sentDate:i,type:"timeStamp"})})})}}),await s.update({messages:tt.firestore.FieldValue.arrayUnion({authorId:n,body:f,sentDate:i,type:"image"})});for(let u in r){let c=(await Qe.collection("users").doc(r[u]).get()).data(),d=[...c.chats];if(r[u]!=n)for(let h in d)d[h].chatId==e&&(d[h].unreadMessage=!0);if(c.chats){for(let h in d)d[h].chatId==e&&(d[h].lastMessage="&#x1F3A8 Imagem",d[h].lastMessageDate=i);setTimeout(async()=>{await Qe.collection("users").doc(r[u]).update({chats:d})},400)}}})}).catch(()=>{alert("Erro ao carregar imagem!")})}};function yz({user:t,newChatMenu:e,setNewchatMenuStatus:n,setActiveChat:r}){const[i,s]=w.useState(!1),[a,o]=w.useState(""),[f,u]=w.useState([]);var l=!1;w.useEffect(()=>{(async()=>{if(t!==null){let I=await Xn.getContactList(t.id);u(I)}})()},[t]);const c=async b=>{n(!1),await Xn.addNewChat(t,b,r)},d=w.useRef(null),h=()=>{s(!0)},p=()=>{a.length<=0&&s(!1)},v=b=>{o(b.target.value)},k=()=>{o(""),d.current.focus()},g=()=>{d.current.focus()},m=()=>{d.current.blur(),s(!1),o("")},y=()=>{n(!1),o("")};return X("div",{className:Ct(ge.newchat,{[ge.active]:e}),children:[_("header",{children:X("div",{className:ge.content,children:[_("div",{className:ge["arrowback-container"],children:_(Jx,{onClick:y,className:ge["arrowback-button"]})}),_("div",{className:ge["title-container"],children:_("h1",{className:ge.title,children:"Nova conversa"})})]})}),_("div",{className:Ct(ge["search-container"],{[ge.active]:i}),children:X("div",{className:ge["input-container"],children:[_(e9,{onClickFunction:g,className:ge["search-button"]}),_(t9,{onClickFunction:m,className:ge["arrow-search-button"]}),_("input",{ref:d,onFocus:h,onBlur:p,value:a,onChange:v,placeholder:"Pesquisar contato"}),a.length>0?_("span",{onClick:k,children:_(n9,{className:ge["search-close-icon"]})}):_(mn,{})]})}),X("div",{className:ge["contacts-list"],children:[_("div",{className:ge.heading,children:_("h1",{children:"Contatos no WhatsApp"})}),a.length>0?_(mn,{children:f.map((b,I)=>{if(b.name.toLowerCase().includes(a.toLowerCase()))return l=!0,X("div",{onClick:()=>{c(b)},className:ge["contact-box"],children:[_("div",{className:ge.image,children:_("img",{src:b.avatar,className:ge.loading,onError:({currentTarget:T})=>{T.onerror=null,T.src="https://www.w3schools.com/howto/img_avatar.png"}})}),_("div",{className:ge.content,children:_("div",{className:ge.row,children:_("h3",{children:b.name})})})]},I)})}):_(mn,{children:f.map((b,I)=>X("div",{onClick:()=>{c(b)},className:ge["contact-box"],children:[_("div",{className:ge.image,children:_("img",{src:b.avatar,className:ge.loading,onError:({currentTarget:T})=>{T.onerror=null,T.src="https://www.w3schools.com/howto/img_avatar.png"}})}),_("div",{className:ge.content,children:_("div",{className:ge.row,children:_("h3",{children:b.name})})})]},I))}),a.length>0&&!l&&_("div",{className:ge.notfound,children:X("span",{children:["Nenhum contato encontrado para '",a,"'"]})})]})]})}function wz({user:t,setActiveChat:e,activeChat:n,logout:r}){const[i,s]=w.useState(!1),[a,o]=w.useState(""),[f,u]=w.useState([]);return w.useEffect(()=>{if(t!==null)return Xn.onChatListUpdate(t.id,u)},[t]),X("div",{className:ox.sidebar,children:[_(yz,{user:t,newChatMenu:i,setNewchatMenuStatus:s,setActiveChat:e}),_(gx,{user:t,setNewchatMenuStatus:s,logout:r}),_(yx,{inputValue:a,setValue:o}),_(zx,{inputValue:a,chatList:f,setActiveChat:e,activeChat:n})]})}const bz="_content_4vjpj_17",_z={content:bz};function kz({children:t}){return _("div",{className:_z.content,children:t})}const Ez="_intro_ee3pw_17",ew={intro:Ez,"intro-filler":"_intro-filler_ee3pw_42"};function Iz(){return X("svg",{viewBox:"0 0 303 172",width:"360",preserveAspectRatio:"xMidYMid meet",fill:"none",children:[_("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M229.565 160.229C262.212 149.245 286.931 118.241 283.39 73.4194C278.009 5.31929 212.365 -11.5738 171.472 8.48673C115.998 35.6999 108.972 40.1612 69.2388 40.1612C39.645 40.1612 9.51318 54.4147 5.7467 92.952C3.0166 120.885 13.9985 145.267 54.6373 157.716C128.599 180.373 198.017 170.844 229.565 160.229Z",fill:"#DAF7F3"}),_("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M131.589 68.9422C131.593 68.9422 131.596 68.9422 131.599 68.9422C137.86 68.9422 142.935 63.6787 142.935 57.1859C142.935 50.6931 137.86 45.4297 131.599 45.4297C126.518 45.4297 122.218 48.8958 120.777 53.6723C120.022 53.4096 119.213 53.2672 118.373 53.2672C114.199 53.2672 110.815 56.7762 110.815 61.1047C110.815 65.4332 114.199 68.9422 118.373 68.9422C118.377 68.9422 118.381 68.9422 118.386 68.9422H131.589Z",fill:"white"}),_("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M105.682 128.716C109.186 128.716 112.026 125.908 112.026 122.446C112.026 118.983 109.186 116.176 105.682 116.176C104.526 116.176 103.442 116.481 102.509 117.015L102.509 116.959C102.509 110.467 97.1831 105.203 90.6129 105.203C85.3224 105.203 80.8385 108.616 79.2925 113.335C78.6052 113.143 77.88 113.041 77.1304 113.041C72.7503 113.041 69.1995 116.55 69.1995 120.878C69.1995 125.207 72.7503 128.716 77.1304 128.716C77.1341 128.716 77.1379 128.716 77.1416 128.716H105.682L105.682 128.716Z",fill:"white"}),_("rect",{x:"0.445307",y:"0.549558",width:"50.5797",height:"100.068",rx:"7.5",transform:"matrix(0.994522 0.104528 -0.103907 0.994587 10.5547 41.6171)",fill:"#42CBA5",stroke:"#316474"}),_("rect",{x:"0.445307",y:"0.549558",width:"50.4027",height:"99.7216",rx:"7.5",transform:"matrix(0.994522 0.104528 -0.103907 0.994587 10.9258 37.9564)",fill:"white",stroke:"#316474"}),_("path",{d:"M57.1609 51.7354L48.5917 133.759C48.2761 136.78 45.5713 138.972 42.5503 138.654L9.58089 135.189C6.55997 134.871 4.36688 132.165 4.68251 129.144L13.2517 47.1204C13.5674 44.0992 16.2722 41.9075 19.2931 42.2251L24.5519 42.7778L47.0037 45.1376L52.2625 45.6903C55.2835 46.0078 57.4765 48.7143 57.1609 51.7354Z",fill:"#EEFEFA",stroke:"#316474"}),_("path",{d:"M26.2009 102.937C27.0633 103.019 27.9323 103.119 28.8023 103.21C29.0402 101.032 29.2706 98.8437 29.4916 96.6638L26.8817 96.39C26.6438 98.5681 26.4049 100.755 26.2009 102.937ZM23.4704 93.3294L25.7392 91.4955L27.5774 93.7603L28.7118 92.8434L26.8736 90.5775L29.1434 88.7438L28.2248 87.6114L25.955 89.4452L24.1179 87.1806L22.9824 88.0974L24.8207 90.3621L22.5508 92.197L23.4704 93.3294ZM22.6545 98.6148C22.5261 99.9153 22.3893 101.215 22.244 102.514C23.1206 102.623 23.9924 102.697 24.8699 102.798C25.0164 101.488 25.1451 100.184 25.2831 98.8734C24.4047 98.7813 23.5298 98.6551 22.6545 98.6148ZM39.502 89.7779C38.9965 94.579 38.4833 99.3707 37.9862 104.174C38.8656 104.257 39.7337 104.366 40.614 104.441C41.1101 99.6473 41.6138 94.8633 42.1271 90.0705C41.2625 89.9282 40.3796 89.8786 39.502 89.7779ZM35.2378 92.4459C34.8492 96.2179 34.4351 99.9873 34.0551 103.76C34.925 103.851 35.7959 103.934 36.6564 104.033C37.1028 100.121 37.482 96.1922 37.9113 92.2783C37.0562 92.1284 36.18 92.0966 35.3221 91.9722C35.2812 92.1276 35.253 92.286 35.2378 92.4459ZM31.1061 94.1821C31.0635 94.341 31.0456 94.511 31.0286 94.6726C30.7324 97.5678 30.4115 100.452 30.1238 103.348L32.7336 103.622C32.8582 102.602 32.9479 101.587 33.0639 100.567C33.2611 98.5305 33.5188 96.4921 33.6905 94.4522C32.8281 94.3712 31.9666 94.2811 31.1061 94.1821Z",fill:"#316474"}),_("path",{d:"M17.892 48.4889C17.7988 49.3842 18.4576 50.1945 19.3597 50.2923C20.2665 50.3906 21.0855 49.7332 21.1792 48.8333C21.2724 47.938 20.6136 47.1277 19.7115 47.0299C18.8047 46.9316 17.9857 47.5889 17.892 48.4889Z",fill:"white",stroke:"#316474"}),_("path",{d:"M231.807 136.678L197.944 139.04C197.65 139.06 197.404 139.02 197.249 138.96C197.208 138.945 197.179 138.93 197.16 138.918L196.456 128.876C196.474 128.862 196.5 128.843 196.538 128.822C196.683 128.741 196.921 128.668 197.215 128.647L231.078 126.285C231.372 126.265 231.618 126.305 231.773 126.365C231.814 126.381 231.842 126.395 231.861 126.407L232.566 136.449C232.548 136.463 232.522 136.482 232.484 136.503C232.339 136.584 232.101 136.658 231.807 136.678Z",fill:"white",stroke:"#316474"}),_("path",{d:"M283.734 125.679L144.864 135.363C141.994 135.563 139.493 133.4 139.293 130.54L133.059 41.6349C132.858 38.7751 135.031 36.2858 137.903 36.0856L276.773 26.4008C279.647 26.2005 282.144 28.364 282.345 31.2238L288.578 120.129C288.779 122.989 286.607 125.478 283.734 125.679Z",fill:"white"}),_("path",{d:"M144.864 135.363C141.994 135.563 139.493 133.4 139.293 130.54L133.059 41.6349C132.858 38.7751 135.031 36.2858 137.903 36.0856L276.773 26.4008C279.647 26.2004 282.144 28.364 282.345 31.2238L288.578 120.129C288.779 122.989 286.607 125.478 283.734 125.679",stroke:"#316474"}),_("path",{d:"M278.565 121.405L148.68 130.463C146.256 130.632 144.174 128.861 144.012 126.55L138.343 45.695C138.181 43.3846 139.994 41.3414 142.419 41.1723L272.304 32.1142C274.731 31.945 276.81 33.7166 276.972 36.0271L282.641 116.882C282.803 119.193 280.992 121.236 278.565 121.405Z",fill:"#EEFEFA",stroke:"#316474"}),_("path",{d:"M230.198 129.97L298.691 125.193L299.111 131.189C299.166 131.97 299.013 132.667 298.748 133.161C298.478 133.661 298.137 133.887 297.825 133.909L132.794 145.418C132.482 145.44 132.113 145.263 131.777 144.805C131.445 144.353 131.196 143.684 131.141 142.903L130.721 136.907L199.215 132.131C199.476 132.921 199.867 133.614 200.357 134.129C200.929 134.729 201.665 135.115 202.482 135.058L227.371 133.322C228.188 133.265 228.862 132.782 229.345 132.108C229.758 131.531 230.05 130.79 230.198 129.97Z",fill:"#42CBA5",stroke:"#316474"}),_("path",{d:"M230.367 129.051L300.275 124.175L300.533 127.851C300.591 128.681 299.964 129.403 299.13 129.461L130.858 141.196C130.025 141.254 129.303 140.627 129.245 139.797L128.987 136.121L198.896 131.245C199.485 132.391 200.709 133.147 202.084 133.051L227.462 131.281C228.836 131.185 229.943 130.268 230.367 129.051Z",fill:"white",stroke:"#316474"}),_("ellipse",{rx:"15.9969",ry:"15.9971",transform:"matrix(0.997577 -0.0695704 0.0699429 0.997551 210.659 83.553)",fill:"#42CBA5",stroke:"#316474"}),_("path",{d:"M208.184 87.1094L204.777 84.3593C204.777 84.359 204.776 84.3587 204.776 84.3583C203.957 83.6906 202.744 83.8012 202.061 84.6073C201.374 85.4191 201.486 86.6265 202.31 87.2997L202.312 87.3011L207.389 91.4116C207.389 91.4119 207.389 91.4121 207.389 91.4124C208.278 92.1372 209.611 91.9373 210.242 90.9795L218.283 78.77C218.868 77.8813 218.608 76.6968 217.71 76.127C216.817 75.5606 215.624 75.8109 215.043 76.6939L208.184 87.1094Z",fill:"white",stroke:"#316474"})]})}function Sz(){return X(mn,{children:[X("div",{className:ew.intro,children:[_(Iz,{}),_("h1",{children:"WhatsApp Web"}),X("p",{children:["Envie e receba mensagens sem precisar manter seu celular conectado à internet.",_("br",{}),"Use o WhatsApp em até quatro aparelhos conectados e um celular ao mesmo tempo."]})]}),_("div",{className:ew["intro-filler"]})]})}const Tz="_chat_eqiic_17",Cz={chat:Tz},xz="_avatar_bs6g4_134",Rz="_loading_bs6g4_144",Az="_user_bs6g4_147",Nz="_name_bs6g4_147",Dz="_icons_bs6g4_151",bf={"lds-roller":"_lds-roller_bs6g4_41","chat-header":"_chat-header_bs6g4_126",avatar:xz,loading:Rz,"skeleton-image-loading-chat-header":"_skeleton-image-loading-chat-header_bs6g4_1",user:Az,name:Nz,icons:Dz,"search-button":"_search-button_bs6g4_154","menu-button":"_menu-button_bs6g4_158","skeleton-image-loading":"_skeleton-image-loading_bs6g4_1","skeleton-image-chat-body":"_skeleton-image-chat-body_bs6g4_1"};function Pz({activeChat:t}){const e=X_(t,{from:{opacity:0},enter:{opacity:1}});return X("header",{className:bf["chat-header"],children:[_("div",{className:bf.avatar,children:e(n=>_(Z_.img,{style:n,className:bf.loading,src:t.image,alt:"",onError:({currentTarget:r})=>{r.onerror=null,r.src="https://www.w3schools.com/howto/img_avatar.png"}}))}),_("div",{className:bf.user,children:_("span",{className:bf.name,children:t.title})})]})}const Mz="_image_h6ctc_41",Lz="_message_h6ctc_27",Oz="_img_h6ctc_54",$z="_time_h6ctc_83",Fz="_out_h6ctc_130",Uz="_timestamp_h6ctc_158",jz="_loading_h6ctc_174",qe={"chat-body":"_chat-body_h6ctc_17","messages-container":"_messages-container_h6ctc_27","message-row":"_message-row_h6ctc_27","message-box-container":"_message-box-container_h6ctc_30","message-box":"_message-box_h6ctc_30",image:Mz,message:Lz,img:Oz,time:$z,"time-filler":"_time-filler_h6ctc_101",out:Fz,in:"_in_h6ctc_144",timestamp:Uz,"timestamp-container":"_timestamp-container_h6ctc_163",loading:jz};function zz({src:t,imgClass:e,loadingClass:n}){const[r,i]=w.useState(!1);return _("img",{className:e,style:{opacity:r?1:0},onLoad:()=>i(!0),src:t,alt:""})}function Vz({user:t,activeChat:e,setUsers:n}){const[r,i]=w.useState([]),[s,a]=w.useState(!0);w.useEffect(()=>(a(!0),Xn.onChatMessagesUpdate(e.chatId,i,n)),[e]),w.useEffect(()=>{const f=async()=>{await Xn.newMessageStatus(e.chatId,a,s,r.length)};(async()=>{await Xn.updateNotificationsStatus(t.id,e.chatId)})(),f()},[r]);const o=f=>{if(f!=null){const u=f.toDate();let l=u.getHours(),c=u.getMinutes();return l<10&&(l=`${0}${l}`),c<10&&(c=`${0}${c}`),`${l}:${c}`}else return""};return X("div",{className:Ct(qe["chat-body"],{[qe.loading]:s}),children:[s&&_(r9,{color:"#18af8f",loading:!0,size:70}),_("div",{className:Ct(qe["messages-container"],{[qe.loading]:s}),children:r.map((f,u)=>{let l=o(f.sentDate),c=f.type,d="";if(c=="timeStamp"){let h=f.sentDate.toDate(),p=new Date(h);d=`${p.getDate()}/${p.getMonth()+1}/${p.getFullYear()}`}return _("div",{className:`${qe["message-row"]} ${f.authorId===t.id?qe.out:c=="timeStamp"?qe.timestamp:qe.in}`,children:c=="text"?_("div",{className:qe["message-box-container"],children:X("div",{className:qe["message-box"],children:[X("span",{className:qe.message,children:[f.body,_("span",{className:qe["time-filler"],children:"______"})]}),_("span",{className:qe.time,children:l})]})}):c=="timeStamp"?_("div",{className:Ct(qe["timestamp-container"]),children:_("span",{children:d})}):_("div",{className:qe["message-box-container"],children:X("div",{className:`${qe["message-box"]} ${qe.image}`,children:[_("span",{className:qe.message,children:_(zz,{src:f.body,imgClass:qe.img})}),_("span",{className:qe.time,children:l})]})})},u)})})]})}function uS(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=uS(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function an(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=uS(t))&&(r&&(r+=" "),r+=e);return r}var ne;(function(t){t.hiddenOnSearch="epr-hidden-on-search",t.searchActive="epr-search-active",t.hidden="epr-hidden",t.visible="epr-visible",t.active="epr-active",t.emoji="epr-emoji",t.category="epr-emoji-category",t.label="epr-emoji-category-label",t.categoryContent="epr-emoji-category-content",t.emojiHasVariatios="epr-emoji-has-variations",t.scrollBody="epr-body",t.emojiList="epr-emoji-list",t.external="__EmojiPicker__",t.emojiPicker="EmojiPickerReact",t.open="epr-open",t.vertical="epr-vertical",t.horizontal="epr-horizontal",t.variationPicker="epr-emoji-variation-picker"})(ne||(ne={}));function Bt(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.map(function(r){return"."+r}).join("")}function kn(t){t&&requestAnimationFrame(function(){t.focus()})}function lS(t){if(t){var e=t.previousElementSibling;kn(e)}}function cS(t){if(t){var e=t.nextElementSibling;kn(e)}}function dS(t){if(t){var e=t.firstElementChild;kn(e)}}function Bz(t){var e=t.children,n=w.useRef(null),r=w.useRef(null),i=w.useRef(null),s=w.useRef(null),a=w.useRef(null),o=w.useRef(null),f=w.useRef(null);return w.createElement(hS.Provider,{value:{AnchoredEmojiRef:r,BodyRef:i,CategoryNavigationRef:o,PickerMainRef:n,SearchInputRef:s,SkinTonePickerRef:a,VariationPickerRef:f}},e)}var hS=w.createContext({AnchoredEmojiRef:w.createRef(),BodyRef:w.createRef(),CategoryNavigationRef:w.createRef(),PickerMainRef:w.createRef(),SearchInputRef:w.createRef(),SkinTonePickerRef:w.createRef(),VariationPickerRef:w.createRef()});function ca(){return w.useContext(hS)}function $l(){return ca().PickerMainRef}function R1(){return ca().AnchoredEmojiRef}function pS(){var t=R1();return function(e){e===null&&t.current!==null&&kn(t.current),t.current=e}}function Fn(){return ca().BodyRef}function rs(){return ca().SearchInputRef}function Y3(){return ca().SkinTonePickerRef}function X3(){return ca().CategoryNavigationRef}function qz(){return ca().VariationPickerRef}function Hz(){return typeof window>"u"?!1:!!window.matchMedia("(prefers-color-scheme: dark)").matches}function Cr(){return Cr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Cr.apply(this,arguments)}function Wz(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Bm(t,e)}function Bm(t,e){return Bm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Bm(t,e)}function Gz(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Kz(t,e){if(t){if(typeof t=="string")return tw(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tw(t,e)}}function tw(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Qz(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=Kz(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
        `+uw+" "+Bt(ne.category)+":not(:has("+n+`)) {
        display: none;
      }

        `+uw+" button"+Bt(ne.emoji)+":not("+n+`) {
        display: none;
      }
  `)}function nq(){return w.createElement($1,{className:"epr-header"},w.createElement(ZB,null),w.createElement(YB,null))}function nl(){return document.activeElement}var Ge;(function(t){t.ArrowDown="ArrowDown",t.ArrowUp="ArrowUp",t.ArrowLeft="ArrowLeft",t.ArrowRight="ArrowRight",t.Escape="Escape",t.Enter="Enter",t.Space=" "})(Ge||(Ge={}));function rq(){iq(),sq(),aq(),oq(),fq()}function iq(){var t=$l(),e=YS(),n=iB(),r=rs(),i=ha(),s=WS(),a=UV(),o=da(),f=w.useMemo(function(){return function(l){var c=l.key;switch(a(),c){case Ge.Escape:if(l.preventDefault(),s()){o();return}e(),n(0),i();break}}},[n,e,o,i,s,a]);w.useEffect(function(){var u=t.current;if(u)return u.addEventListener("keydown",f),function(){u.removeEventListener("keydown",f)}},[t,r,n,f])}function sq(){var t=sB(),e=$l(),n=Fn(),r=rs(),i=zl(),s=i[1],a=t8(),o=hv(),f=w.useMemo(function(){return function(l){var c=l.key;switch(c){case Ge.ArrowRight:if(!o)return;l.preventDefault(),s(!0),t();break;case Ge.ArrowDown:l.preventDefault(),a();break;case Ge.Enter:l.preventDefault(),EB(n.current);break}}},[t,a,s,n,o]);w.useEffect(function(){var u=r.current;if(u)return u.addEventListener("keydown",f),function(){u.removeEventListener("keydown",f)}},[e,r,f])}function aq(){var t=Y3(),e=ha(),n=rs(),r=t8(),i=zl(),s=i[0],a=i[1],o=JS(),f=hv(),u=pv(),l=w.useMemo(function(){return function(d){var h=d.key;if(f)switch(h){case Ge.ArrowLeft:if(d.preventDefault(),!s)return e();lw(e);break;case Ge.ArrowRight:if(d.preventDefault(),!s)return e();cw();break;case Ge.ArrowDown:d.preventDefault(),s&&a(!1),r();break;default:u(d);break}if(o)switch(h){case Ge.ArrowUp:if(d.preventDefault(),!s)return e();lw(e);break;case Ge.ArrowDown:if(d.preventDefault(),!s)return e();cw();break;default:u(d);break}}},[s,e,a,r,u,o,f]);w.useEffect(function(){var c=t.current;if(c)return c.addEventListener("keydown",l),function(){c.removeEventListener("keydown",l)}},[t,n,s,l])}function oq(){var t=ha(),e=X3(),n=Fn(),r=pv(),i=w.useMemo(function(){return function(a){var o=a.key;switch(o){case Ge.ArrowUp:a.preventDefault(),t();break;case Ge.ArrowRight:a.preventDefault(),cS(nl());break;case Ge.ArrowLeft:a.preventDefault(),lS(nl());break;case Ge.ArrowDown:a.preventDefault(),O1(n.current);break;default:r(a);break}}},[n,t,r]);w.useEffect(function(){var s=e.current;if(s)return s.addEventListener("keydown",i),function(){s.removeEventListener("keydown",i)}},[e,n,i])}function fq(){var t=Fn(),e=uq(),n=GS(),r=WS(),i=da(),s=pv(),a=w.useMemo(function(){return function(f){var u=f.key,l=Jn(nl());switch(u){case Ge.ArrowRight:f.preventDefault(),SB(l);break;case Ge.ArrowLeft:f.preventDefault(),TB(l);break;case Ge.ArrowDown:if(f.preventDefault(),r()){i();break}xB(l);break;case Ge.ArrowUp:if(f.preventDefault(),r()){i();break}CB(l,e);break;case Ge.Space:f.preventDefault(),n(f.target);break;default:s(f);break}}},[e,s,n,r,i]);w.useEffect(function(){var o=t.current;if(o)return o.addEventListener("keydown",a),function(){o.removeEventListener("keydown",a)}},[t,a])}function t8(){var t=QS(),e=F1(),n=Fn();return w.useCallback(function(){return e?O1(n.current):t()},[n,t,e])}function uq(){var t=ha(),e=QS(),n=F1();return w.useCallback(function(){return n?t():e()},[t,n,e])}function lw(t){var e=nl();e&&(WV(e)||t(),cS(e))}function cw(){var t=nl();t&&lS(t)}function pv(){var t=oB(),e=ha(),n=da();return function(i){var s=i.key;lq(i)||s.match(/(^[a-zA-Z0-9]$){1}/)&&(i.preventDefault(),n(),e(),t(s))}}function lq(t){var e=t.metaKey,n=t.ctrlKey,r=t.altKey;return e||n||r}function cq(t,e,n){if(e&&n!==vr.NATIVE){var r=fn(e);dw.has(r)||(A1(e).forEach(function(i){var s=t(i,n);dq(s)}),dw.add(r))}}var dw=new Set;function dq(t){var e=new Image;e.src=t}function hq(){var t=Fn(),e=jl(),n=Qo();w.useEffect(function(){if(e===vr.NATIVE)return;var r=t.current;return r==null||r.addEventListener("focusin",i),function(){r==null||r.removeEventListener("focusin",i)};function i(s){var a=Jn(s.target);if(a){var o=sv(a),f=o[0];f&&Ul(f)&&cq(n,f,e)}}},[t,e,n])}var pq="aside.EmojiPickerReact.epr-main{border-color:var(--epr-picker-border-color);border-radius:var(--epr-picker-border-radius);border-style:solid;border-width:1px;display:flex;flex-direction:column;position:relative}";En(pq);function mq(t){var e=t.children;return w.createElement(OV,null,w.createElement(gq,null,e))}function gq(t){var e,n=t.children,r=CV(),i=F1(),s=$l(),a=AV(),o=a.height,f=a.width;rq(),hq();var u={height:o,width:f};return w.createElement("aside",{className:an(ne.emojiPicker,"epr-main",(e={},e[ne.searchActive]=i,e["epr-dark-theme"]=r===Ds.DARK,e)),ref:s,style:u},n)}var vq=".EmojiPickerReact{--epr-highlight-color:#007aeb;--epr-hover-bg-color:#f1f8ff;--epr-focus-bg-color:#e0f0ff;--epr-text-color:#858585;--epr-search-input-bg-color:#f6f6f6;--epr-picker-border-color:#e7e7e7;--epr-bg-color:#fff;--epr-category-icon-active-color:#6aa8de;--epr-skin-tone-picker-menu-color:#ffffff95;--epr-horizontal-padding:10px;--epr-picker-border-radius:8px;--epr-search-border-color:var(--epr-highlight-color);--epr-header-padding:15px var(--epr-horizontal-padding);--epr-active-skin-tone-indicator-border-color:var(--epr-highlight-color);--epr-active-skin-hover-color:var(--epr-hover-bg-color);--epr-search-input-bg-color-active:var(--epr-search-input-bg-color);--epr-search-input-padding:0 30px;--epr-search-input-border-radius:8px;--epr-search-input-height:40px;--epr-search-input-text-color:var(--epr-text-color);--epr-search-input-placeholder-color:var(--epr-text-color);--epr-search-bar-inner-padding:var(--epr-horizontal-padding);--epr-category-navigation-button-size:30px;--epr-emoji-variation-picker-height:45px;--epr-emoji-variation-picker-bg-color:var(--epr-bg-color);--epr-preview-height:70px;--epr-preview-text-size:14px;--epr-preview-text-padding:0 var(--epr-horizontal-padding);--epr-preview-border-color:var(--epr-picker-border-color);--epr-preview-text-color:var(--epr-text-color);--epr-category-padding:0 var(--epr-horizontal-padding);--epr-category-label-bg-color:#ffffffe6;--epr-category-label-text-color:var(--epr-text-color);--epr-category-label-padding:0 var(--epr-horizontal-padding);--epr-category-label-height:40px;--epr-emoji-size:30px;--epr-emoji-padding:5px;--epr-emoji-fullsize:calc(var(--epr-emoji-size) + var(--epr-emoji-padding)*2);--epr-emoji-hover-color:var(--epr-hover-bg-color);--epr-emoji-variation-indicator-color:var(--epr-picker-border-color);--epr-emoji-variation-indicator-color-hover:var(--epr-text-color);--epr-header-overlay-z-index:3;--epr-emoji-variations-indictator-z-index:1;--epr-category-label-z-index:2;--epr-skin-variation-picker-z-index:5;--epr-preview-z-index:6}.EmojiPickerReact.epr-dark-theme{--epr-dark:#000;--epr-emoji-variation-picker-bg-color:var(--epr-dark);--epr-highlight-color:silver;--epr-text-color:var(--epr-highlight-color);--epr-hover-bg-color:#363636f6;--epr-focus-bg-color:#474747;--epr-search-input-bg-color:#333;--epr-category-label-bg-color:#222222e6;--epr-picker-border-color:#151617;--epr-bg-color:#222;--epr-search-input-bg-color-active:var(--epr-dark);--epr-emoji-variation-indicator-color:#444;--epr-category-icon-active-color:#3271b7;--epr-skin-tone-picker-menu-color:#22222295}.EmojiPickerReact{background-color:var(--epr-bg-color);overflow:hidden}.EmojiPickerReact .epr-hidden,.EmojiPickerReact.epr-search-active .epr-hidden-on-search,.EmojiPickerReact:not(.epr-search-active) .epr-visible-on-search-only{display:none!important;opacity:0!important;pointer-events:none!important;visibility:hidden!important}aside.EmojiPickerReact.epr-main:has(input:not(:-moz-placeholder-shown)) .epr-hidden-on-search{display:none!important;opacity:0!important;pointer-events:none!important;visibility:hidden!important}aside.EmojiPickerReact.epr-main:has(input:not(:placeholder-shown)) .epr-hidden-on-search{display:none!important;opacity:0!important;pointer-events:none!important;visibility:hidden!important}aside.EmojiPickerReact.epr-main:has(input:-moz-placeholder-shown) .epr-visible-on-search-only{display:none!important;opacity:0!important;pointer-events:none!important;visibility:hidden!important}aside.EmojiPickerReact.epr-main:has(input:placeholder-shown) .epr-visible-on-search-only{display:none!important;opacity:0!important;pointer-events:none!important;visibility:hidden!important}.EmojiPickerReact *{box-sizing:border-box;font-family:sans-serif}.EmojiPickerReact button.epr-btn{background:none;border:0;cursor:pointer;outline:none}";En(vq);function yq(t){return w.createElement(Bz,null,w.createElement(_V,Object.assign({},t),w.createElement(mq,null,w.createElement(nq,null),w.createElement(OB,null),w.createElement(qB,null))))}var wq=function(t){Wz(e,t);function e(r){var i;return i=t.call(this,r)||this,i.state={hasError:!1},i}e.getDerivedStateFromError=function(){return{hasError:!0}};var n=e.prototype;return n.componentDidCatch=function(i,s){console.error("Emoji Picker React failed to render:",i,s)},n.render=function(){return this.state.hasError?null:this.props.children},e}(w.Component);function bq(t){return w.createElement(wq,null,w.createElement(yq,Object.assign({},t)))}const _q="_active_1u8xw_61",kq="_input_1u8xw_27",zn={"chat-inputbar":"_chat-inputbar_1u8xw_17","inputs-container":"_inputs-container_1u8xw_27","input-file-button":"_input-file-button_1u8xw_39",active:_q,"clip-button":"_clip-button_1u8xw_65","emoji-button":"_emoji-button_1u8xw_66","emojipicker-close-button":"_emojipicker-close-button_1u8xw_67","emoji-clip-buttons":"_emoji-clip-buttons_1u8xw_71","input-file-container":"_input-file-container_1u8xw_76",input:kq,"send-button":"_send-button_1u8xw_151","microphone-button":"_microphone-button_1u8xw_155"};function Eq({className:t,onClick:e}){return _("svg",{viewBox:"0 0 24 24",height:26,width:26,preserveAspectRatio:"xMidYMid meet",onClick:e,className:t,enableBackground:"new 0 0 24 24",xmlSpace:"preserve",children:_("path",{d:"M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"})})}function Iq({className:t,onClick:e}){return _("svg",{onClick:e,viewBox:"0 0 24 24",height:26,width:26,preserveAspectRatio:"xMidYMid meet",className:t,enableBackground:"new 0 0 24 24",xmlSpace:"preserve",children:_("path",{d:`M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,\r
                9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,\r
                14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,\r
                14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,\r
                18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,\r
                9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,\r
                1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z`})})}function Sq({className:t,onClick:e}){return _("svg",{viewBox:"0 0 24 24",onClick:e,height:26,width:26,preserveAspectRatio:"xMidYMid meet",className:t,enableBackground:"new 0 0 24 24",xmlSpace:"preserve",children:_("path",{d:`M1.816,15.556v0.002c0,1.502,0.584,2.912,1.646,3.972s2.472,1.647,3.974,1.647 c1.501,0,2.91-0.584,3.972-1.645l9.547-9.548c0.769-0.768,\r
                1.147-1.767,1.058-2.817c-0.079-0.968-0.548-1.927-1.319-2.698 c-1.594-1.592-4.068-1.711-5.517-0.262l-7.916,7.915c-0.881,0.881-0.792,2.25,0.214,3.261c0.959,0.958,\r
                2.423,1.053,3.263,0.215 c0,0,3.817-3.818,5.511-5.512c0.28-0.28,0.267-0.722,0.053-0.936c-0.08-0.08-0.164-0.164-0.244-0.244 c-0.191-0.191-0.567-0.349-0.957,\r
                0.04c-1.699,1.699-5.506,5.506-5.506,5.506c-0.18,0.18-0.635,0.127-0.976-0.214 c-0.098-0.097-0.576-0.613-0.213-0.973l7.915-7.917c0.818-0.817,2.267-0.699,3.23,\r
                0.262c0.5,0.501,0.802,1.1,0.849,1.685 c0.051,0.573-0.156,1.111-0.589,1.543l-9.547,9.549c-0.756,0.757-1.761,1.171-2.829,1.171c-1.07,\r
                0-2.074-0.417-2.83-1.173 c-0.755-0.755-1.172-1.759-1.172-2.828l0,0c0-1.071,0.415-2.076,1.172-2.83c0,0,5.322-5.324,7.209-7.211 c0.157-0.157,0.264-0.579,\r
                0.028-0.814c-0.137-0.137-0.21-0.21-0.342-0.342c-0.2-0.2-0.553-0.263-0.834,0.018 c-1.895,1.895-7.205,7.207-7.205,7.207C2.4,12.645,1.816,14.056,1.816,15.556z`})})}function Tq({className:t,onClickFunction:e}){return X("svg",{viewBox:"0 0 53 53",onClick:e,className:t,preserveAspectRatio:"xMidYMid meet",enableBackground:"new 0 0 53 53",xmlSpace:"preserve",children:[X("g",{children:[_("defs",{children:_("circle",{id:"image-SVGID_1_",cx:"26.5",cy:"26.5",r:"25.5"})}),_("clipPath",{id:"image-SVGID_2_",children:_("use",{xlinkHref:"#image-SVGID_1_",overflow:"visible"})}),X("g",{clipPath:"url(#image-SVGID_2_)",children:[_("path",{fill:"#AC44CF",d:"M26.5-1.1C11.9-1.1-1.1,5.6-1.1,27.6h55.2C54,8.6,41.1-1.1,26.5-1.1z"}),_("path",{fill:"#BF59CF",d:"M53,26.5H-1.1c0,14.6,13,27.6,27.6,27.6s27.6-13,27.6-27.6C54.1,26.5,53,26.5,53,26.5z"}),_("rect",{x:17,y:"24.5",fill:"#AC44CF",width:18,height:9})]})]}),_("g",{fill:"#F5F5F5",children:_("path",{id:"svg-image",d:"M18.318 18.25 34.682 18.25C35.545 18.25 36.409 19.077 36.493 19.946L36.5 20.083 36.5 32.917C36.5 33.788 35.68 34.658 34.818 34.743L34.682 34.75 18.318 34.75C17.368 34.75 16.582 34.005 16.506 33.066L16.5 32.917 16.5 20.083C16.5 19.213 17.32 18.342 18.182 18.257L18.318 18.25 34.682 18.25ZM23.399 26.47 19.618 31.514C19.349 31.869 19.566 32.25 20.008 32.25L32.963 32.25C33.405 32.239 33.664 31.848 33.384 31.492L30.702 28.043C30.486 27.774 30.077 27.763 29.861 28.032L27.599 30.759 24.26 26.459C24.045 26.179 23.614 26.179 23.399 26.47ZM31.75 21.25C30.784 21.25 30 22.034 30 23 30 23.966 30.784 24.75 31.75 24.75 32.716 24.75 33.5 23.966 33.5 23 33.5 22.034 32.716 21.25 31.75 21.25Z"})})]})}const Cq="_input_5a7xz_17",q0={input:Cq,"microphone-button":"_microphone-button_5a7xz_50","send-button":"_send-button_5a7xz_55"};function xq({className:t,fill:e,onClick:n}){return _("svg",{onClick:n,style:{fill:e},viewBox:"0 0 24 24",height:24,width:24,preserveAspectRatio:"xMidYMid meet",className:t,enableBackground:"new 0 0 24 24",xmlSpace:"preserve",children:_("path",{d:`M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,\r
                13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,\r
                7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z`})})}function Rq({className:t,onClick:e}){return _("svg",{onClick:e,viewBox:"0 0 24 24",className:t,height:24,width:24,preserveAspectRatio:"xMidYMid meet",enableBackground:"new 0 0 24 24",xmlSpace:"preserve",children:_("path",{d:"M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"})})}function Aq({closeEmokiPicker:t,emoji:e,user:n,activeChat:r,users:i}){const[s,a]=w.useState(""),[o,f]=w.useState(!1),u=w.useRef();let l=null,c=window.webkitSpeechRecognition||window.SpeechRecognition;c!==void 0&&(l=new c,l.lang="pt-BR"),w.useEffect(()=>{a(s+e.emoji),u.current.innerHTML=s+e.emoji},[e.key]);const d=k=>{if(u.current.children.length>0&&(u.current.innerHTML=k.currentTarget.textContent),u.current.innerHTML.length>=500){const y=u.current.innerHTML.substring(0,500);u.current.innerHTML=y,u.current.blur()}a(k.currentTarget.textContent)},h=()=>{l!==null&&(l.onstart=()=>{f(!0)},l.onend=()=>{f(!1)},l.onresult=k=>{a(k.results[0][0].transcript),u.current.innerHTML=k.results[0][0].transcript},l.start())},p=k=>{k.keyCode==13&&v()},v=async()=>{u.current.innerHTML="",await Xn.sendMessage(r.chatId,n.id,s,i),t(),a("")};return X(mn,{children:[_("span",{"data-placeholder":"Mensagem",onKeyUp:p,ref:u,className:q0.input,onInput:d,contentEditable:"true","data-max-length":"1"}),s.length>0?_(Rq,{onClick:v,className:q0["send-button"]}):_(xq,{onClick:h,fill:o?"red":"",className:q0["microphone-button"]})]})}function Nq({user:t,activeChat:e,users:n}){const[r,i]=w.useState(!1),[s,a]=w.useState(!1),[o,f]=w.useState(!1),[u,l]=w.useState({emoji:"",key:0}),c=w.useRef(),d=w.useRef(),h=I=>{setTimeout(()=>{let T;do T=Math.random();while(T==u.key);l({emoji:I.emoji,key:T})},20)},p=()=>{s&&a(!1),i(!0)},v=()=>{i(!1)},k=()=>{r&&i(!1),a(I=>!I),s||d.current.focus()},g=()=>{setTimeout(()=>{s&&!o&&a(!1)},130)},m=()=>{f(!0),d.current.focus(),setTimeout(()=>{f(!1)},500)},y=I=>{var C;I.preventDefault();const T=(C=I.target[0])==null?void 0:C.files[0];Xn.sendImageMessage(T,e.chatId,t.id,n)},b=I=>{const T=I.target.files[0];I.target.files.length<=1?T?T.type==="image/jpeg"||T.type==="image/jpg"||T.type==="image/png"?T.size/1048576<=3?(c.current.click(),g()):(alert("Por favor insira um arquivo menor que 1MB."),d.current.value=null):(alert("Formato não suportado!"),d.current.value=null):(alert("Arquivo inválido!"),d.current.value=null,g()):(alert("Apenas um arquivo por vez!"),d.current.value=null)};return X(mn,{children:[_(bq,{onEmojiClick:h,width:"100%",height:r?320:0,searchDisabled:!0,skinTonesDisabled:!0,previewConfig:{showPreview:!1}}),_("footer",{className:zn["chat-footer"],children:X("div",{className:zn["chat-inputbar"],children:[X("form",{onSubmit:y,className:Ct(zn["inputs-container"],{[zn.active]:!r&&s}),children:[X("label",{children:[_(Tq,{className:zn["input-file-button"]}),_("input",{accept:"image/png, image/jpeg, image/jpg",multiple:!1,type:"file",name:"file",ref:d,onClick:m,onBlur:g,onChange:b})]}),_("button",{style:{display:"none"},ref:c,type:"submit"})]}),X("div",{className:Ct(zn["emoji-clip-buttons"],{[zn.active]:r}),children:[_(Eq,{className:zn["emojipicker-close-button"],onClick:v}),_(Iq,{className:zn["emoji-button"],onClick:p}),_(Sq,{onClick:k,className:Ct(zn["clip-button"],{[zn.active]:s})})]}),_(Aq,{users:n,closeEmokiPicker:v,activeChat:e,user:t,emoji:u})]})})]})}function Dq({activeChat:t,user:e}){const[n,r]=w.useState([]);return X("div",{className:Cz.chat,children:[_(Pz,{activeChat:t}),_(Vz,{setUsers:r,activeChat:t,user:e}),_(Nq,{users:n,activeChat:t,user:e})]})}function Pq({user:t,logout:e}){const[n,r]=w.useState({});return X(mn,{children:[_(wz,{user:t,activeChat:n,setActiveChat:r,logout:e}),X(kz,{children:[n.chatId===void 0&&_(Sz,{}),n.chatId!==void 0&&_(Dq,{user:t,activeChat:n})]})]})}const Mq="_login_r2tda_17",Lq="_heading_r2tda_42",Oq="_body_r2tda_54",$q="_signin_r2tda_61",Fq="_loaded_r2tda_122",ui={login:Mq,"login-window":"_login-window_r2tda_27",heading:Lq,body:Oq,signin:$q,"facebook-container":"_facebook-container_r2tda_71","google-container":"_google-container_r2tda_72",loaded:Fq};function Uq(){return X("svg",{xmlns:"http://www.w3.org/2000/svg",width:39,height:39,viewBox:"0 0 39 39",children:[_("path",{fill:"#00E676",d:"M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"}),_("path",{fill:"#FFF",d:"M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"})]})}function jq({onReceive:t}){const[e,n]=w.useState();w.useEffect(()=>{n(!0)},[]);const r=async()=>{alert("Este método de login pode estar indisponível devido a restrições do Meta Apps. De preferência ao login com Google!");let s=await Xn.fbRedirect();s?t(s.user,s.accessToken):alert("Erro!")},i=async()=>{let s=await Xn.googleRedirect();s?t(s.user,s.accessToken):alert("Erro!")};return _(mn,{children:_("div",{className:Ct(ui.login,{[ui.loaded]:e}),children:X("div",{className:ui["login-window"],children:[_("header",{children:X("div",{className:ui.heading,children:[_(Uq,{}),_("span",{children:"Whatsapp Web Clone"})]})}),_("div",{className:ui.body,children:X("div",{className:ui.signin,children:[_("h3",{children:"Entrar com"}),_("div",{onClick:i,className:ui["google-container"],children:X("svg",{xmlns:"http://www.w3.org/2000/svg",width:"81",height:"27",viewBox:"0 0 272 92",children:[_("path",{fill:"#EA4335",d:"M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"}),_("path",{fill:"#FBBC05",d:"M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"}),_("path",{fill:"#4285F4",d:"M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"}),_("path",{fill:"#34A853",d:"M225 3v65h-9.5V3h9.5z"}),_("path",{fill:"#EA4335",d:"m262.02 54.48 7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98 19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"}),_("path",{fill:"#4285F4",d:"M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"})]})}),_("div",{onClick:r,className:ui["facebook-container"],children:_("svg",{"aria-label":"Facebook logo",role:"img",viewBox:"0 0 120 24",width:"110",children:_("path",{d:"m109.202 14.864 4.404-7.03h4.746l-4.622 7.278 4.808 7.463h-4.746l-4.59-7.215v7.215h-4.467V.433l4.467-.402v14.833ZM98.596 14.524c0-1.951-.807-3.5-2.885-3.5s-2.885 1.549-2.885 3.5v1.363c0 1.95.807 3.499 2.885 3.499s2.885-1.549 2.885-3.5v-1.362ZM88.36 15.577v-.743c0-4.243 2.42-7.309 7.351-7.309s7.351 3.066 7.351 7.309v.743c0 4.242-2.42 7.308-7.351 7.308-4.932 0-7.351-3.066-7.351-7.308ZM82.406 14.524c0-1.951-.807-3.5-2.884-3.5-2.079 0-2.885 1.549-2.885 3.5v1.363c0 1.95.806 3.499 2.885 3.499 2.077 0 2.884-1.549 2.884-3.5v-1.362Zm-10.235 1.053v-.743c0-4.243 2.419-7.309 7.35-7.309 4.932 0 7.352 3.066 7.352 7.309v.743c0 4.242-2.42 7.308-7.352 7.308-4.931 0-7.35-3.066-7.35-7.308ZM66.216 14.648c0-2.075-.806-3.623-2.946-3.623-1.83 0-2.823 1.3-2.823 3.406v1.548c0 2.106.993 3.407 2.823 3.407 2.14 0 2.946-1.549 2.946-3.623v-1.115Zm4.467 1.022c0 4.118-1.985 7.215-6.08 7.215-2.233 0-3.783-1.115-4.404-2.539v2.23h-4.218V.434L60.447.03v9.848c.651-1.3 2.078-2.354 4.157-2.354 4.094 0 6.079 3.097 6.079 7.216v.929ZM44.723 13.843h5.397v-.372c0-1.61-.651-2.88-2.606-2.88-2.016 0-2.791 1.27-2.791 3.252m-4.466 1.92v-1.301c0-4.18 2.388-6.937 7.257-6.937 4.59 0 6.607 2.787 6.607 6.875v2.353h-9.398c.093 2.014.992 2.912 3.474 2.912 1.675 0 3.443-.341 4.745-.898l.807 3.065c-1.179.62-3.598 1.084-5.738 1.084-5.645 0-7.754-2.818-7.754-7.153M35.388 7.525c1.737 0 3.38.372 4.28.991l-.992 3.159c-.683-.34-1.8-.682-2.978-.682-2.42 0-3.474 1.394-3.474 3.778v.868c0 2.384 1.055 3.778 3.474 3.778 1.179 0 2.295-.34 2.978-.682l.992 3.16c-.9.618-2.543.99-4.28.99-5.242 0-7.63-2.818-7.63-7.34v-.68c0-4.522 2.388-7.34 7.63-7.34M15.973 15.732c0 2.198.806 3.654 2.884 3.654 1.83 0 2.76-1.332 2.76-3.438v-1.486c0-2.106-.93-3.437-2.76-3.437-2.078 0-2.884 1.455-2.884 3.654v1.053Zm-4.467-.991c0-4.119 1.954-7.216 6.049-7.216 2.233 0 3.598 1.146 4.249 2.57v-2.26h4.28v14.74h-4.28v-2.23c-.62 1.425-2.016 2.54-4.25 2.54-4.094 0-6.048-3.097-6.048-7.215v-.93ZM9.274 3.592c-1.396 0-1.8.62-1.8 1.982v2.26h3.723l-.372 3.655h-3.35v11.086H3.009V11.49H0V7.835h3.009V5.636C3.009 1.951 4.497 0 8.654 0c.9 0 1.954.062 2.605.155v3.437H9.274Z"})})})]})}),_("footer",{children:"João Pedro Lima Teixeira ©"})]})})})}function zq(){const[t,e]=w.useState(!1),[n,r]=w.useState(null),i=X_(t,{from:{opacity:0,scale:0},enter:{opacity:1,scale:1}}),s=async(o,f)=>{let u={id:o.uid,name:o.displayName,avatar:o.photoURL+"?height=500&access_token="+f};Xn.addUser(u),r(u),e(!0)},a=()=>{r(null),e(!1)};return _("div",{className:Ct(y0["app-window"],{[y0["not-logged"]]:!t}),children:i((o,f)=>f&&n!==void 0?_(Z_.div,{style:o,className:y0.app,children:_(Pq,{user:n,logout:a})}):_(jq,{onReceive:s}))})}function Vq(){return _("div",{className:PT["app-container"],children:_(zq,{})})}H0.createRoot(document.getElementById("app")).render(_(k8.StrictMode,{children:_(Vq,{})}));