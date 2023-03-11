var R5=Object.defineProperty;var N5=(t,e,n)=>e in t?R5(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var F=(t,e,n)=>(N5(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function D5(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Of={},P5={get exports(){return Of},set exports(t){Of=t}},Md={},y={},M5={get exports(){return y},set exports(t){y=t}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $u=Symbol.for("react.element"),L5=Symbol.for("react.portal"),O5=Symbol.for("react.fragment"),$5=Symbol.for("react.strict_mode"),F5=Symbol.for("react.profiler"),j5=Symbol.for("react.provider"),U5=Symbol.for("react.context"),V5=Symbol.for("react.forward_ref"),z5=Symbol.for("react.suspense"),B5=Symbol.for("react.memo"),q5=Symbol.for("react.lazy"),T3=Symbol.iterator;function H5(t){return t===null||typeof t!="object"?null:(t=T3&&t[T3]||t["@@iterator"],typeof t=="function"?t:null)}var m6={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g6=Object.assign,v6={};function lo(t,e,n){this.props=t,this.context=e,this.refs=v6,this.updater=n||m6}lo.prototype.isReactComponent={};lo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};lo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function y6(){}y6.prototype=lo.prototype;function cm(t,e,n){this.props=t,this.context=e,this.refs=v6,this.updater=n||m6}var dm=cm.prototype=new y6;dm.constructor=cm;g6(dm,lo.prototype);dm.isPureReactComponent=!0;var x3=Array.isArray,w6=Object.prototype.hasOwnProperty,hm={current:null},b6={key:!0,ref:!0,__self:!0,__source:!0};function k6(t,e,n){var r,i={},a=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(a=""+e.key),e)w6.call(e,r)&&!b6.hasOwnProperty(r)&&(i[r]=e[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var f=Array(o),u=0;u<o;u++)f[u]=arguments[u+2];i.children=f}if(t&&t.defaultProps)for(r in o=t.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:$u,type:t,key:a,ref:s,props:i,_owner:hm.current}}function W5(t,e){return{$$typeof:$u,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pm(t){return typeof t=="object"&&t!==null&&t.$$typeof===$u}function G5(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var A3=/\/+/g;function lh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?G5(""+t.key):e.toString(36)}function ec(t,e,n,r,i){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case $u:case L5:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+lh(s,0):r,x3(i)?(n="",t!=null&&(n=t.replace(A3,"$&/")+"/"),ec(i,e,n,"",function(u){return u})):i!=null&&(pm(i)&&(i=W5(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(A3,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",x3(t))for(var o=0;o<t.length;o++){a=t[o];var f=r+lh(a,o);s+=ec(a,e,n,f,i)}else if(f=H5(t),typeof f=="function")for(t=f.call(t),o=0;!(a=t.next()).done;)a=a.value,f=r+lh(a,o++),s+=ec(a,e,n,f,i);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function _l(t,e,n){if(t==null)return t;var r=[],i=0;return ec(t,r,"","",function(a){return e.call(n,a,i++)}),r}function K5(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Lt={current:null},tc={transition:null},Q5={ReactCurrentDispatcher:Lt,ReactCurrentBatchConfig:tc,ReactCurrentOwner:hm};ie.Children={map:_l,forEach:function(t,e,n){_l(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _l(t,function(){e++}),e},toArray:function(t){return _l(t,function(e){return e})||[]},only:function(t){if(!pm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=lo;ie.Fragment=O5;ie.Profiler=F5;ie.PureComponent=cm;ie.StrictMode=$5;ie.Suspense=z5;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q5;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=g6({},t.props),i=t.key,a=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,s=hm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(f in e)w6.call(e,f)&&!b6.hasOwnProperty(f)&&(r[f]=e[f]===void 0&&o!==void 0?o[f]:e[f])}var f=arguments.length-2;if(f===1)r.children=n;else if(1<f){o=Array(f);for(var u=0;u<f;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:$u,type:t.type,key:i,ref:a,props:r,_owner:s}};ie.createContext=function(t){return t={$$typeof:U5,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:j5,_context:t},t.Consumer=t};ie.createElement=k6;ie.createFactory=function(t){var e=k6.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:V5,render:t}};ie.isValidElement=pm;ie.lazy=function(t){return{$$typeof:q5,_payload:{_status:-1,_result:t},_init:K5}};ie.memo=function(t,e){return{$$typeof:B5,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=tc.transition;tc.transition={};try{t()}finally{tc.transition=e}};ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ie.useCallback=function(t,e){return Lt.current.useCallback(t,e)};ie.useContext=function(t){return Lt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return Lt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return Lt.current.useEffect(t,e)};ie.useId=function(){return Lt.current.useId()};ie.useImperativeHandle=function(t,e,n){return Lt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return Lt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return Lt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return Lt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return Lt.current.useReducer(t,e,n)};ie.useRef=function(t){return Lt.current.useRef(t)};ie.useState=function(t){return Lt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return Lt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return Lt.current.useTransition()};ie.version="18.2.0";(function(t){t.exports=ie})(M5);const Y5=D5(y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X5=y,J5=Symbol.for("react.element"),Z5=Symbol.for("react.fragment"),eS=Object.prototype.hasOwnProperty,tS=X5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nS={key:!0,ref:!0,__self:!0,__source:!0};function E6(t,e,n){var r,i={},a=null,s=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)eS.call(e,r)&&!nS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:J5,type:t,key:a,ref:s,props:i,_owner:tS.current}}Md.Fragment=Z5;Md.jsx=E6;Md.jsxs=E6;(function(t){t.exports=Md})(P5);const Fn=Of.Fragment,k=Of.jsx,te=Of.jsxs;var d0={},Sc={},rS={get exports(){return Sc},set exports(t){Sc=t}},cn={},h0={},iS={get exports(){return h0},set exports(t){h0=t}},_6={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(M,B){var K=M.length;M.push(B);e:for(;0<K;){var Ce=K-1>>>1,me=M[Ce];if(0<i(me,B))M[Ce]=B,M[K]=me,K=Ce;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var B=M[0],K=M.pop();if(K!==B){M[0]=K;e:for(var Ce=0,me=M.length,Xa=me>>>1;Ce<Xa;){var Wn=2*(Ce+1)-1,St=M[Wn],Zt=Wn+1,en=M[Zt];if(0>i(St,K))Zt<me&&0>i(en,St)?(M[Ce]=en,M[Zt]=K,Ce=Zt):(M[Ce]=St,M[Wn]=K,Ce=Wn);else if(Zt<me&&0>i(en,K))M[Ce]=en,M[Zt]=K,Ce=Zt;else break e}}return B}function i(M,B){var K=M.sortIndex-B.sortIndex;return K!==0?K:M.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var f=[],u=[],l=1,c=null,d=3,h=!1,m=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(M){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=M)r(u),B.sortIndex=B.expirationTime,e(f,B);else break;B=n(u)}}function b(M){if(w=!1,v(M),!m)if(n(f)!==null)m=!0,$e(S);else{var B=n(u);B!==null&&We(b,B.startTime-M)}}function S(M,B){m=!1,w&&(w=!1,g(P),P=-1),h=!0;var K=d;try{for(v(B),c=n(f);c!==null&&(!(c.expirationTime>B)||M&&!he());){var Ce=c.callback;if(typeof Ce=="function"){c.callback=null,d=c.priorityLevel;var me=Ce(c.expirationTime<=B);B=t.unstable_now(),typeof me=="function"?c.callback=me:c===n(f)&&r(f),v(B)}else r(f);c=n(f)}if(c!==null)var Xa=!0;else{var Wn=n(u);Wn!==null&&We(b,Wn.startTime-B),Xa=!1}return Xa}finally{c=null,d=K,h=!1}}var C=!1,x=null,P=-1,q=5,H=-1;function he(){return!(t.unstable_now()-H<q)}function $t(){if(x!==null){var M=t.unstable_now();H=M;var B=!0;try{B=x(!0,M)}finally{B?ze():(C=!1,x=null)}}else C=!1}var ze;if(typeof p=="function")ze=function(){p($t)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,Y=G.port2;G.port1.onmessage=$t,ze=function(){Y.postMessage(null)}}else ze=function(){E($t,0)};function $e(M){x=M,C||(C=!0,ze())}function We(M,B){P=E(function(){M(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,$e(S))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(f)},t.unstable_next=function(M){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var K=d;d=B;try{return M()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,B){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var K=d;d=M;try{return B()}finally{d=K}},t.unstable_scheduleCallback=function(M,B,K){var Ce=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?Ce+K:Ce):K=Ce,M){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=K+me,M={id:l++,callback:B,priorityLevel:M,startTime:K,expirationTime:me,sortIndex:-1},K>Ce?(M.sortIndex=K,e(u,M),n(f)===null&&M===n(u)&&(w?(g(P),P=-1):w=!0,We(b,K-Ce))):(M.sortIndex=me,e(f,M),m||h||(m=!0,$e(S))),M},t.unstable_shouldYield=he,t.unstable_wrapCallback=function(M){var B=d;return function(){var K=d;d=B;try{return M.apply(this,arguments)}finally{d=K}}}})(_6);(function(t){t.exports=_6})(iS);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I6=y,fn=h0;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var S6=new Set,$f={};function $a(t,e){$s(t,e),$s(t+"Capture",e)}function $s(t,e){for($f[t]=e,t=0;t<e.length;t++)S6.add(e[t])}var xr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p0=Object.prototype.hasOwnProperty,aS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,R3={},N3={};function sS(t){return p0.call(N3,t)?!0:p0.call(R3,t)?!1:aS.test(t)?N3[t]=!0:(R3[t]=!0,!1)}function oS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fS(t,e,n,r){if(e===null||typeof e>"u"||oS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ot(t,e,n,r,i,a,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=s}var pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){pt[t]=new Ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];pt[e]=new Ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){pt[t]=new Ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){pt[t]=new Ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){pt[t]=new Ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){pt[t]=new Ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){pt[t]=new Ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){pt[t]=new Ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){pt[t]=new Ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var mm=/[\-:]([a-z])/g;function gm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(mm,gm);pt[e]=new Ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(mm,gm);pt[e]=new Ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(mm,gm);pt[e]=new Ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){pt[t]=new Ot(t,1,!1,t.toLowerCase(),null,!1,!1)});pt.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){pt[t]=new Ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function vm(t,e,n,r){var i=pt.hasOwnProperty(e)?pt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fS(e,n,i,r)&&(n=null),r||i===null?sS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Lr=I6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Il=Symbol.for("react.element"),fs=Symbol.for("react.portal"),us=Symbol.for("react.fragment"),ym=Symbol.for("react.strict_mode"),m0=Symbol.for("react.profiler"),C6=Symbol.for("react.provider"),T6=Symbol.for("react.context"),wm=Symbol.for("react.forward_ref"),g0=Symbol.for("react.suspense"),v0=Symbol.for("react.suspense_list"),bm=Symbol.for("react.memo"),Gr=Symbol.for("react.lazy"),x6=Symbol.for("react.offscreen"),D3=Symbol.iterator;function Do(t){return t===null||typeof t!="object"?null:(t=D3&&t[D3]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,ch;function ef(t){if(ch===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ch=e&&e[1]||""}return`
`+ch+t}var dh=!1;function hh(t,e){if(!t||dh)return"";dh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),s=i.length-1,o=a.length-1;1<=s&&0<=o&&i[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(i[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||i[s]!==a[o]){var f=`
`+i[s].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=s&&0<=o);break}}}finally{dh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ef(t):""}function uS(t){switch(t.tag){case 5:return ef(t.type);case 16:return ef("Lazy");case 13:return ef("Suspense");case 19:return ef("SuspenseList");case 0:case 2:case 15:return t=hh(t.type,!1),t;case 11:return t=hh(t.type.render,!1),t;case 1:return t=hh(t.type,!0),t;default:return""}}function y0(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case us:return"Fragment";case fs:return"Portal";case m0:return"Profiler";case ym:return"StrictMode";case g0:return"Suspense";case v0:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case T6:return(t.displayName||"Context")+".Consumer";case C6:return(t._context.displayName||"Context")+".Provider";case wm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bm:return e=t.displayName||null,e!==null?e:y0(t.type)||"Memo";case Gr:e=t._payload,t=t._init;try{return y0(t(e))}catch{}}return null}function lS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return y0(e);case 8:return e===ym?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function A6(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cS(t){var e=A6(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,a.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sl(t){t._valueTracker||(t._valueTracker=cS(t))}function R6(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=A6(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Cc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function w0(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function P3(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function N6(t,e){e=e.checked,e!=null&&vm(t,"checked",e,!1)}function b0(t,e){N6(t,e);var n=gi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?k0(t,e.type,n):e.hasOwnProperty("defaultValue")&&k0(t,e.type,gi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function M3(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function k0(t,e,n){(e!=="number"||Cc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var tf=Array.isArray;function _s(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function E0(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function L3(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(tf(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gi(n)}}function D6(t,e){var n=gi(e.value),r=gi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function O3(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function P6(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _0(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?P6(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Cl,M6=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Cl=Cl||document.createElement("div"),Cl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Cl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ff(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var hf={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dS=["Webkit","ms","Moz","O"];Object.keys(hf).forEach(function(t){dS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),hf[e]=hf[t]})});function L6(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||hf.hasOwnProperty(t)&&hf[t]?(""+e).trim():e+"px"}function O6(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=L6(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var hS=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function I0(t,e){if(e){if(hS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function S0(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var C0=null;function km(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var T0=null,Is=null,Ss=null;function $3(t){if(t=Uu(t)){if(typeof T0!="function")throw Error(R(280));var e=t.stateNode;e&&(e=jd(e),T0(t.stateNode,t.type,e))}}function $6(t){Is?Ss?Ss.push(t):Ss=[t]:Is=t}function F6(){if(Is){var t=Is,e=Ss;if(Ss=Is=null,$3(t),e)for(t=0;t<e.length;t++)$3(e[t])}}function j6(t,e){return t(e)}function U6(){}var ph=!1;function V6(t,e,n){if(ph)return t(e,n);ph=!0;try{return j6(t,e,n)}finally{ph=!1,(Is!==null||Ss!==null)&&(U6(),F6())}}function jf(t,e){var n=t.stateNode;if(n===null)return null;var r=jd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var x0=!1;if(xr)try{var Po={};Object.defineProperty(Po,"passive",{get:function(){x0=!0}}),window.addEventListener("test",Po,Po),window.removeEventListener("test",Po,Po)}catch{x0=!1}function pS(t,e,n,r,i,a,s,o,f){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(l){this.onError(l)}}var pf=!1,Tc=null,xc=!1,A0=null,mS={onError:function(t){pf=!0,Tc=t}};function gS(t,e,n,r,i,a,s,o,f){pf=!1,Tc=null,pS.apply(mS,arguments)}function vS(t,e,n,r,i,a,s,o,f){if(gS.apply(this,arguments),pf){if(pf){var u=Tc;pf=!1,Tc=null}else throw Error(R(198));xc||(xc=!0,A0=u)}}function Fa(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function z6(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function F3(t){if(Fa(t)!==t)throw Error(R(188))}function yS(t){var e=t.alternate;if(!e){if(e=Fa(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return F3(i),t;if(a===r)return F3(i),e;a=a.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,o=i.child;o;){if(o===n){s=!0,n=i,r=a;break}if(o===r){s=!0,r=i,n=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===n){s=!0,n=a,r=i;break}if(o===r){s=!0,r=a,n=i;break}o=o.sibling}if(!s)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function B6(t){return t=yS(t),t!==null?q6(t):null}function q6(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=q6(t);if(e!==null)return e;t=t.sibling}return null}var H6=fn.unstable_scheduleCallback,j3=fn.unstable_cancelCallback,wS=fn.unstable_shouldYield,bS=fn.unstable_requestPaint,Fe=fn.unstable_now,kS=fn.unstable_getCurrentPriorityLevel,Em=fn.unstable_ImmediatePriority,W6=fn.unstable_UserBlockingPriority,Ac=fn.unstable_NormalPriority,ES=fn.unstable_LowPriority,G6=fn.unstable_IdlePriority,Ld=null,sr=null;function _S(t){if(sr&&typeof sr.onCommitFiberRoot=="function")try{sr.onCommitFiberRoot(Ld,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:CS,IS=Math.log,SS=Math.LN2;function CS(t){return t>>>=0,t===0?32:31-(IS(t)/SS|0)|0}var Tl=64,xl=4194304;function nf(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,a=t.pingedLanes,s=n&268435455;if(s!==0){var o=s&~i;o!==0?r=nf(o):(a&=s,a!==0&&(r=nf(a)))}else s=n&~i,s!==0?r=nf(s):a!==0&&(r=nf(a));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,a=e&-e,i>=a||i===16&&(a&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-jn(e),i=1<<n,r|=t[n],e&=~i;return r}function TS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,a=t.pendingLanes;0<a;){var s=31-jn(a),o=1<<s,f=i[s];f===-1?(!(o&n)||o&r)&&(i[s]=TS(o,e)):f<=e&&(t.expiredLanes|=o),a&=~o}}function R0(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function K6(){var t=Tl;return Tl<<=1,!(Tl&4194240)&&(Tl=64),t}function mh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function AS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-jn(n),a=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~a}}function _m(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-jn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function Q6(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Y6,Im,X6,J6,Z6,N0=!1,Al=[],ai=null,si=null,oi=null,Uf=new Map,Vf=new Map,Qr=[],RS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function U3(t,e){switch(t){case"focusin":case"focusout":ai=null;break;case"dragenter":case"dragleave":si=null;break;case"mouseover":case"mouseout":oi=null;break;case"pointerover":case"pointerout":Uf.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vf.delete(e.pointerId)}}function Mo(t,e,n,r,i,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},e!==null&&(e=Uu(e),e!==null&&Im(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function NS(t,e,n,r,i){switch(e){case"focusin":return ai=Mo(ai,t,e,n,r,i),!0;case"dragenter":return si=Mo(si,t,e,n,r,i),!0;case"mouseover":return oi=Mo(oi,t,e,n,r,i),!0;case"pointerover":var a=i.pointerId;return Uf.set(a,Mo(Uf.get(a)||null,t,e,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Vf.set(a,Mo(Vf.get(a)||null,t,e,n,r,i)),!0}return!1}function ew(t){var e=ea(t.target);if(e!==null){var n=Fa(e);if(n!==null){if(e=n.tag,e===13){if(e=z6(n),e!==null){t.blockedOn=e,Z6(t.priority,function(){X6(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=D0(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);C0=r,n.target.dispatchEvent(r),C0=null}else return e=Uu(n),e!==null&&Im(e),t.blockedOn=n,!1;e.shift()}return!0}function V3(t,e,n){nc(t)&&n.delete(e)}function DS(){N0=!1,ai!==null&&nc(ai)&&(ai=null),si!==null&&nc(si)&&(si=null),oi!==null&&nc(oi)&&(oi=null),Uf.forEach(V3),Vf.forEach(V3)}function Lo(t,e){t.blockedOn===e&&(t.blockedOn=null,N0||(N0=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,DS)))}function zf(t){function e(i){return Lo(i,t)}if(0<Al.length){Lo(Al[0],t);for(var n=1;n<Al.length;n++){var r=Al[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ai!==null&&Lo(ai,t),si!==null&&Lo(si,t),oi!==null&&Lo(oi,t),Uf.forEach(e),Vf.forEach(e),n=0;n<Qr.length;n++)r=Qr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Qr.length&&(n=Qr[0],n.blockedOn===null);)ew(n),n.blockedOn===null&&Qr.shift()}var Cs=Lr.ReactCurrentBatchConfig,Nc=!0;function PS(t,e,n,r){var i=de,a=Cs.transition;Cs.transition=null;try{de=1,Sm(t,e,n,r)}finally{de=i,Cs.transition=a}}function MS(t,e,n,r){var i=de,a=Cs.transition;Cs.transition=null;try{de=4,Sm(t,e,n,r)}finally{de=i,Cs.transition=a}}function Sm(t,e,n,r){if(Nc){var i=D0(t,e,n,r);if(i===null)Sh(t,e,r,Dc,n),U3(t,r);else if(NS(i,t,e,n,r))r.stopPropagation();else if(U3(t,r),e&4&&-1<RS.indexOf(t)){for(;i!==null;){var a=Uu(i);if(a!==null&&Y6(a),a=D0(t,e,n,r),a===null&&Sh(t,e,r,Dc,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Sh(t,e,r,null,n)}}var Dc=null;function D0(t,e,n,r){if(Dc=null,t=km(r),t=ea(t),t!==null)if(e=Fa(t),e===null)t=null;else if(n=e.tag,n===13){if(t=z6(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Dc=t,null}function tw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kS()){case Em:return 1;case W6:return 4;case Ac:case ES:return 16;case G6:return 536870912;default:return 16}default:return 16}}var Zr=null,Cm=null,rc=null;function nw(){if(rc)return rc;var t,e=Cm,n=e.length,r,i="value"in Zr?Zr.value:Zr.textContent,a=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[a-r];r++);return rc=i.slice(t,1<r?1-r:void 0)}function ic(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Rl(){return!0}function z3(){return!1}function dn(t){function e(n,r,i,a,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Rl:z3,this.isPropagationStopped=z3,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),e}var co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tm=dn(co),ju=Re({},co,{view:0,detail:0}),LS=dn(ju),gh,vh,Oo,Od=Re({},ju,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oo&&(Oo&&t.type==="mousemove"?(gh=t.screenX-Oo.screenX,vh=t.screenY-Oo.screenY):vh=gh=0,Oo=t),gh)},movementY:function(t){return"movementY"in t?t.movementY:vh}}),B3=dn(Od),OS=Re({},Od,{dataTransfer:0}),$S=dn(OS),FS=Re({},ju,{relatedTarget:0}),yh=dn(FS),jS=Re({},co,{animationName:0,elapsedTime:0,pseudoElement:0}),US=dn(jS),VS=Re({},co,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zS=dn(VS),BS=Re({},co,{data:0}),q3=dn(BS),qS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=WS[t])?!!e[t]:!1}function xm(){return GS}var KS=Re({},ju,{key:function(t){if(t.key){var e=qS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ic(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?HS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xm,charCode:function(t){return t.type==="keypress"?ic(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ic(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),QS=dn(KS),YS=Re({},Od,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),H3=dn(YS),XS=Re({},ju,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xm}),JS=dn(XS),ZS=Re({},co,{propertyName:0,elapsedTime:0,pseudoElement:0}),e8=dn(ZS),t8=Re({},Od,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),n8=dn(t8),r8=[9,13,27,32],Am=xr&&"CompositionEvent"in window,mf=null;xr&&"documentMode"in document&&(mf=document.documentMode);var i8=xr&&"TextEvent"in window&&!mf,rw=xr&&(!Am||mf&&8<mf&&11>=mf),W3=String.fromCharCode(32),G3=!1;function iw(t,e){switch(t){case"keyup":return r8.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function aw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ls=!1;function a8(t,e){switch(t){case"compositionend":return aw(e);case"keypress":return e.which!==32?null:(G3=!0,W3);case"textInput":return t=e.data,t===W3&&G3?null:t;default:return null}}function s8(t,e){if(ls)return t==="compositionend"||!Am&&iw(t,e)?(t=nw(),rc=Cm=Zr=null,ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return rw&&e.locale!=="ko"?null:e.data;default:return null}}var o8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function K3(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!o8[t.type]:e==="textarea"}function sw(t,e,n,r){$6(r),e=Pc(e,"onChange"),0<e.length&&(n=new Tm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var gf=null,Bf=null;function f8(t){vw(t,0)}function $d(t){var e=hs(t);if(R6(e))return t}function u8(t,e){if(t==="change")return e}var ow=!1;if(xr){var wh;if(xr){var bh="oninput"in document;if(!bh){var Q3=document.createElement("div");Q3.setAttribute("oninput","return;"),bh=typeof Q3.oninput=="function"}wh=bh}else wh=!1;ow=wh&&(!document.documentMode||9<document.documentMode)}function Y3(){gf&&(gf.detachEvent("onpropertychange",fw),Bf=gf=null)}function fw(t){if(t.propertyName==="value"&&$d(Bf)){var e=[];sw(e,Bf,t,km(t)),V6(f8,e)}}function l8(t,e,n){t==="focusin"?(Y3(),gf=e,Bf=n,gf.attachEvent("onpropertychange",fw)):t==="focusout"&&Y3()}function c8(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $d(Bf)}function d8(t,e){if(t==="click")return $d(e)}function h8(t,e){if(t==="input"||t==="change")return $d(e)}function p8(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zn=typeof Object.is=="function"?Object.is:p8;function qf(t,e){if(zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!p0.call(e,i)||!zn(t[i],e[i]))return!1}return!0}function X3(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function J3(t,e){var n=X3(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=X3(n)}}function uw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?uw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function lw(){for(var t=window,e=Cc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Cc(t.document)}return e}function Rm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function m8(t){var e=lw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&uw(n.ownerDocument.documentElement,n)){if(r!==null&&Rm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!t.extend&&a>r&&(i=r,r=a,a=i),i=J3(n,a);var s=J3(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),a>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var g8=xr&&"documentMode"in document&&11>=document.documentMode,cs=null,P0=null,vf=null,M0=!1;function Z3(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;M0||cs==null||cs!==Cc(r)||(r=cs,"selectionStart"in r&&Rm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vf&&qf(vf,r)||(vf=r,r=Pc(P0,"onSelect"),0<r.length&&(e=new Tm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=cs)))}function Nl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ds={animationend:Nl("Animation","AnimationEnd"),animationiteration:Nl("Animation","AnimationIteration"),animationstart:Nl("Animation","AnimationStart"),transitionend:Nl("Transition","TransitionEnd")},kh={},cw={};xr&&(cw=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function Fd(t){if(kh[t])return kh[t];if(!ds[t])return t;var e=ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in cw)return kh[t]=e[n];return t}var dw=Fd("animationend"),hw=Fd("animationiteration"),pw=Fd("animationstart"),mw=Fd("transitionend"),gw=new Map,ev="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ri(t,e){gw.set(t,e),$a(e,[t])}for(var Eh=0;Eh<ev.length;Eh++){var _h=ev[Eh],v8=_h.toLowerCase(),y8=_h[0].toUpperCase()+_h.slice(1);Ri(v8,"on"+y8)}Ri(dw,"onAnimationEnd");Ri(hw,"onAnimationIteration");Ri(pw,"onAnimationStart");Ri("dblclick","onDoubleClick");Ri("focusin","onFocus");Ri("focusout","onBlur");Ri(mw,"onTransitionEnd");$s("onMouseEnter",["mouseout","mouseover"]);$s("onMouseLeave",["mouseout","mouseover"]);$s("onPointerEnter",["pointerout","pointerover"]);$s("onPointerLeave",["pointerout","pointerover"]);$a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$a("onBeforeInput",["compositionend","keypress","textInput","paste"]);$a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w8=new Set("cancel close invalid load scroll toggle".split(" ").concat(rf));function tv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,vS(r,e,void 0,t),t.currentTarget=null}function vw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var a=void 0;if(e)for(var s=r.length-1;0<=s;s--){var o=r[s],f=o.instance,u=o.currentTarget;if(o=o.listener,f!==a&&i.isPropagationStopped())break e;tv(i,o,u),a=f}else for(s=0;s<r.length;s++){if(o=r[s],f=o.instance,u=o.currentTarget,o=o.listener,f!==a&&i.isPropagationStopped())break e;tv(i,o,u),a=f}}}if(xc)throw t=A0,xc=!1,A0=null,t}function ve(t,e){var n=e[j0];n===void 0&&(n=e[j0]=new Set);var r=t+"__bubble";n.has(r)||(yw(e,t,2,!1),n.add(r))}function Ih(t,e,n){var r=0;e&&(r|=4),yw(n,t,r,e)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function Hf(t){if(!t[Dl]){t[Dl]=!0,S6.forEach(function(n){n!=="selectionchange"&&(w8.has(n)||Ih(n,!1,t),Ih(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Dl]||(e[Dl]=!0,Ih("selectionchange",!1,e))}}function yw(t,e,n,r){switch(tw(e)){case 1:var i=PS;break;case 4:i=MS;break;default:i=Sm}n=i.bind(null,e,n,t),i=void 0,!x0||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Sh(t,e,n,r,i){var a=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var f=s.tag;if((f===3||f===4)&&(f=s.stateNode.containerInfo,f===i||f.nodeType===8&&f.parentNode===i))return;s=s.return}for(;o!==null;){if(s=ea(o),s===null)return;if(f=s.tag,f===5||f===6){r=a=s;continue e}o=o.parentNode}}r=r.return}V6(function(){var u=a,l=km(n),c=[];e:{var d=gw.get(t);if(d!==void 0){var h=Tm,m=t;switch(t){case"keypress":if(ic(n)===0)break e;case"keydown":case"keyup":h=QS;break;case"focusin":m="focus",h=yh;break;case"focusout":m="blur",h=yh;break;case"beforeblur":case"afterblur":h=yh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=B3;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=$S;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=JS;break;case dw:case hw:case pw:h=US;break;case mw:h=e8;break;case"scroll":h=LS;break;case"wheel":h=n8;break;case"copy":case"cut":case"paste":h=zS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=H3}var w=(e&4)!==0,E=!w&&t==="scroll",g=w?d!==null?d+"Capture":null:d;w=[];for(var p=u,v;p!==null;){v=p;var b=v.stateNode;if(v.tag===5&&b!==null&&(v=b,g!==null&&(b=jf(p,g),b!=null&&w.push(Wf(p,b,v)))),E)break;p=p.return}0<w.length&&(d=new h(d,m,null,n,l),c.push({event:d,listeners:w}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",d&&n!==C0&&(m=n.relatedTarget||n.fromElement)&&(ea(m)||m[Ar]))break e;if((h||d)&&(d=l.window===l?l:(d=l.ownerDocument)?d.defaultView||d.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=u,m=m?ea(m):null,m!==null&&(E=Fa(m),m!==E||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(w=B3,b="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=H3,b="onPointerLeave",g="onPointerEnter",p="pointer"),E=h==null?d:hs(h),v=m==null?d:hs(m),d=new w(b,p+"leave",h,n,l),d.target=E,d.relatedTarget=v,b=null,ea(l)===u&&(w=new w(g,p+"enter",m,n,l),w.target=v,w.relatedTarget=E,b=w),E=b,h&&m)t:{for(w=h,g=m,p=0,v=w;v;v=Ja(v))p++;for(v=0,b=g;b;b=Ja(b))v++;for(;0<p-v;)w=Ja(w),p--;for(;0<v-p;)g=Ja(g),v--;for(;p--;){if(w===g||g!==null&&w===g.alternate)break t;w=Ja(w),g=Ja(g)}w=null}else w=null;h!==null&&nv(c,d,h,w,!1),m!==null&&E!==null&&nv(c,E,m,w,!0)}}e:{if(d=u?hs(u):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var S=u8;else if(K3(d))if(ow)S=h8;else{S=c8;var C=l8}else(h=d.nodeName)&&h.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=d8);if(S&&(S=S(t,u))){sw(c,S,n,l);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&k0(d,"number",d.value)}switch(C=u?hs(u):window,t){case"focusin":(K3(C)||C.contentEditable==="true")&&(cs=C,P0=u,vf=null);break;case"focusout":vf=P0=cs=null;break;case"mousedown":M0=!0;break;case"contextmenu":case"mouseup":case"dragend":M0=!1,Z3(c,n,l);break;case"selectionchange":if(g8)break;case"keydown":case"keyup":Z3(c,n,l)}var x;if(Am)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ls?iw(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(rw&&n.locale!=="ko"&&(ls||P!=="onCompositionStart"?P==="onCompositionEnd"&&ls&&(x=nw()):(Zr=l,Cm="value"in Zr?Zr.value:Zr.textContent,ls=!0)),C=Pc(u,P),0<C.length&&(P=new q3(P,t,null,n,l),c.push({event:P,listeners:C}),x?P.data=x:(x=aw(n),x!==null&&(P.data=x)))),(x=i8?a8(t,n):s8(t,n))&&(u=Pc(u,"onBeforeInput"),0<u.length&&(l=new q3("onBeforeInput","beforeinput",null,n,l),c.push({event:l,listeners:u}),l.data=x))}vw(c,e)})}function Wf(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Pc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=jf(t,n),a!=null&&r.unshift(Wf(t,a,i)),a=jf(t,e),a!=null&&r.push(Wf(t,a,i))),t=t.return}return r}function Ja(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function nv(t,e,n,r,i){for(var a=e._reactName,s=[];n!==null&&n!==r;){var o=n,f=o.alternate,u=o.stateNode;if(f!==null&&f===r)break;o.tag===5&&u!==null&&(o=u,i?(f=jf(n,a),f!=null&&s.unshift(Wf(n,f,o))):i||(f=jf(n,a),f!=null&&s.push(Wf(n,f,o)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var b8=/\r\n?/g,k8=/\u0000|\uFFFD/g;function rv(t){return(typeof t=="string"?t:""+t).replace(b8,`
`).replace(k8,"")}function Pl(t,e,n){if(e=rv(e),rv(t)!==e&&n)throw Error(R(425))}function Mc(){}var L0=null,O0=null;function $0(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var F0=typeof setTimeout=="function"?setTimeout:void 0,E8=typeof clearTimeout=="function"?clearTimeout:void 0,iv=typeof Promise=="function"?Promise:void 0,_8=typeof queueMicrotask=="function"?queueMicrotask:typeof iv<"u"?function(t){return iv.resolve(null).then(t).catch(I8)}:F0;function I8(t){setTimeout(function(){throw t})}function Ch(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),zf(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zf(e)}function fi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function av(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ho=Math.random().toString(36).slice(2),Yn="__reactFiber$"+ho,Gf="__reactProps$"+ho,Ar="__reactContainer$"+ho,j0="__reactEvents$"+ho,S8="__reactListeners$"+ho,C8="__reactHandles$"+ho;function ea(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ar]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=av(t);t!==null;){if(n=t[Yn])return n;t=av(t)}return e}t=n,n=t.parentNode}return null}function Uu(t){return t=t[Yn]||t[Ar],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function jd(t){return t[Gf]||null}var U0=[],ps=-1;function Ni(t){return{current:t}}function we(t){0>ps||(t.current=U0[ps],U0[ps]=null,ps--)}function ge(t,e){ps++,U0[ps]=t.current,t.current=e}var vi={},_t=Ni(vi),Gt=Ni(!1),ga=vi;function Fs(t,e){var n=t.type.contextTypes;if(!n)return vi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=e[a];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Kt(t){return t=t.childContextTypes,t!=null}function Lc(){we(Gt),we(_t)}function sv(t,e,n){if(_t.current!==vi)throw Error(R(168));ge(_t,e),ge(Gt,n)}function ww(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(R(108,lS(t)||"Unknown",i));return Re({},n,r)}function Oc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vi,ga=_t.current,ge(_t,t),ge(Gt,Gt.current),!0}function ov(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=ww(t,e,ga),r.__reactInternalMemoizedMergedChildContext=t,we(Gt),we(_t),ge(_t,t)):we(Gt),ge(Gt,n)}var wr=null,Ud=!1,Th=!1;function bw(t){wr===null?wr=[t]:wr.push(t)}function T8(t){Ud=!0,bw(t)}function Di(){if(!Th&&wr!==null){Th=!0;var t=0,e=de;try{var n=wr;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}wr=null,Ud=!1}catch(i){throw wr!==null&&(wr=wr.slice(t+1)),H6(Em,Di),i}finally{de=e,Th=!1}}return null}var ms=[],gs=0,$c=null,Fc=0,gn=[],vn=0,va=null,br=1,kr="";function Hi(t,e){ms[gs++]=Fc,ms[gs++]=$c,$c=t,Fc=e}function kw(t,e,n){gn[vn++]=br,gn[vn++]=kr,gn[vn++]=va,va=t;var r=br;t=kr;var i=32-jn(r)-1;r&=~(1<<i),n+=1;var a=32-jn(e)+i;if(30<a){var s=i-i%5;a=(r&(1<<s)-1).toString(32),r>>=s,i-=s,br=1<<32-jn(e)+i|n<<i|r,kr=a+t}else br=1<<a|n<<i|r,kr=t}function Nm(t){t.return!==null&&(Hi(t,1),kw(t,1,0))}function Dm(t){for(;t===$c;)$c=ms[--gs],ms[gs]=null,Fc=ms[--gs],ms[gs]=null;for(;t===va;)va=gn[--vn],gn[vn]=null,kr=gn[--vn],gn[vn]=null,br=gn[--vn],gn[vn]=null}var on=null,an=null,Ee=!1,Dn=null;function Ew(t,e){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function fv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,on=t,an=fi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,on=t,an=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=va!==null?{id:br,overflow:kr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,on=t,an=null,!0):!1;default:return!1}}function V0(t){return(t.mode&1)!==0&&(t.flags&128)===0}function z0(t){if(Ee){var e=an;if(e){var n=e;if(!fv(t,e)){if(V0(t))throw Error(R(418));e=fi(n.nextSibling);var r=on;e&&fv(t,e)?Ew(r,n):(t.flags=t.flags&-4097|2,Ee=!1,on=t)}}else{if(V0(t))throw Error(R(418));t.flags=t.flags&-4097|2,Ee=!1,on=t}}}function uv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;on=t}function Ml(t){if(t!==on)return!1;if(!Ee)return uv(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$0(t.type,t.memoizedProps)),e&&(e=an)){if(V0(t))throw _w(),Error(R(418));for(;e;)Ew(t,e),e=fi(e.nextSibling)}if(uv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){an=fi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}an=null}}else an=on?fi(t.stateNode.nextSibling):null;return!0}function _w(){for(var t=an;t;)t=fi(t.nextSibling)}function js(){an=on=null,Ee=!1}function Pm(t){Dn===null?Dn=[t]:Dn.push(t)}var x8=Lr.ReactCurrentBatchConfig;function Rn(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var jc=Ni(null),Uc=null,vs=null,Mm=null;function Lm(){Mm=vs=Uc=null}function Om(t){var e=jc.current;we(jc),t._currentValue=e}function B0(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ts(t,e){Uc=t,Mm=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Bt=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(Mm!==t)if(t={context:t,memoizedValue:e,next:null},vs===null){if(Uc===null)throw Error(R(308));vs=t,Uc.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return e}var ta=null;function $m(t){ta===null?ta=[t]:ta.push(t)}function Iw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,$m(e)):(n.next=i.next,i.next=n),e.interleaved=n,Rr(t,r)}function Rr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Kr=!1;function Fm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ui(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,fe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Rr(t,n)}return i=r.interleaved,i===null?(e.next=e,$m(r)):(e.next=i.next,i.next=e),r.interleaved=e,Rr(t,n)}function ac(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,_m(t,n)}}function lv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?i=a=e:a=a.next=e}else i=a=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Vc(t,e,n,r){var i=t.updateQueue;Kr=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var f=o,u=f.next;f.next=null,s===null?a=u:s.next=u,s=f;var l=t.alternate;l!==null&&(l=l.updateQueue,o=l.lastBaseUpdate,o!==s&&(o===null?l.firstBaseUpdate=u:o.next=u,l.lastBaseUpdate=f))}if(a!==null){var c=i.baseState;s=0,l=u=f=null,o=a;do{var d=o.lane,h=o.eventTime;if((r&d)===d){l!==null&&(l=l.next={eventTime:h,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var m=t,w=o;switch(d=e,h=n,w.tag){case 1:if(m=w.payload,typeof m=="function"){c=m.call(h,c,d);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=w.payload,d=typeof m=="function"?m.call(h,c,d):m,d==null)break e;c=Re({},c,d);break e;case 2:Kr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[o]:d.push(o))}else h={eventTime:h,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},l===null?(u=l=h,f=c):l=l.next=h,s|=d;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;d=o,o=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(l===null&&(f=c),i.baseState=f,i.firstBaseUpdate=u,i.lastBaseUpdate=l,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else a===null&&(i.shared.lanes=0);wa|=s,t.lanes=s,t.memoizedState=c}}function cv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var Cw=new I6.Component().refs;function q0(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vd={isMounted:function(t){return(t=t._reactInternals)?Fa(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=ci(t),a=Sr(r,i);a.payload=e,n!=null&&(a.callback=n),e=ui(t,a,i),e!==null&&(Un(e,t,i,r),ac(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=ci(t),a=Sr(r,i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=ui(t,a,i),e!==null&&(Un(e,t,i,r),ac(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Nt(),r=ci(t),i=Sr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ui(t,i,r),e!==null&&(Un(e,t,r,n),ac(e,t,r))}};function dv(t,e,n,r,i,a,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,a,s):e.prototype&&e.prototype.isPureReactComponent?!qf(n,r)||!qf(i,a):!0}function Tw(t,e,n){var r=!1,i=vi,a=e.contextType;return typeof a=="object"&&a!==null?a=In(a):(i=Kt(e)?ga:_t.current,r=e.contextTypes,a=(r=r!=null)?Fs(t,i):vi),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=a),e}function hv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Vd.enqueueReplaceState(e,e.state,null)}function H0(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Cw,Fm(t);var a=e.contextType;typeof a=="object"&&a!==null?i.context=In(a):(a=Kt(e)?ga:_t.current,i.context=Fs(t,a)),i.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(q0(t,e,a,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Vd.enqueueReplaceState(i,i.state,null),Vc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function $o(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=r,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(s){var o=i.refs;o===Cw&&(o=i.refs={}),s===null?delete o[a]:o[a]=s},e._stringRef=a,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function Ll(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function pv(t){var e=t._init;return e(t._payload)}function xw(t){function e(g,p){if(t){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=di(g,p),g.index=0,g.sibling=null,g}function a(g,p,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function s(g){return t&&g.alternate===null&&(g.flags|=2),g}function o(g,p,v,b){return p===null||p.tag!==6?(p=Mh(v,g.mode,b),p.return=g,p):(p=i(p,v),p.return=g,p)}function f(g,p,v,b){var S=v.type;return S===us?l(g,p,v.props.children,b,v.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Gr&&pv(S)===p.type)?(b=i(p,v.props),b.ref=$o(g,p,v),b.return=g,b):(b=cc(v.type,v.key,v.props,null,g.mode,b),b.ref=$o(g,p,v),b.return=g,b)}function u(g,p,v,b){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Lh(v,g.mode,b),p.return=g,p):(p=i(p,v.children||[]),p.return=g,p)}function l(g,p,v,b,S){return p===null||p.tag!==7?(p=ua(v,g.mode,b,S),p.return=g,p):(p=i(p,v),p.return=g,p)}function c(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Mh(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Il:return v=cc(p.type,p.key,p.props,null,g.mode,v),v.ref=$o(g,null,p),v.return=g,v;case fs:return p=Lh(p,g.mode,v),p.return=g,p;case Gr:var b=p._init;return c(g,b(p._payload),v)}if(tf(p)||Do(p))return p=ua(p,g.mode,v,null),p.return=g,p;Ll(g,p)}return null}function d(g,p,v,b){var S=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:o(g,p,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Il:return v.key===S?f(g,p,v,b):null;case fs:return v.key===S?u(g,p,v,b):null;case Gr:return S=v._init,d(g,p,S(v._payload),b)}if(tf(v)||Do(v))return S!==null?null:l(g,p,v,b,null);Ll(g,v)}return null}function h(g,p,v,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return g=g.get(v)||null,o(p,g,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Il:return g=g.get(b.key===null?v:b.key)||null,f(p,g,b,S);case fs:return g=g.get(b.key===null?v:b.key)||null,u(p,g,b,S);case Gr:var C=b._init;return h(g,p,v,C(b._payload),S)}if(tf(b)||Do(b))return g=g.get(v)||null,l(p,g,b,S,null);Ll(p,b)}return null}function m(g,p,v,b){for(var S=null,C=null,x=p,P=p=0,q=null;x!==null&&P<v.length;P++){x.index>P?(q=x,x=null):q=x.sibling;var H=d(g,x,v[P],b);if(H===null){x===null&&(x=q);break}t&&x&&H.alternate===null&&e(g,x),p=a(H,p,P),C===null?S=H:C.sibling=H,C=H,x=q}if(P===v.length)return n(g,x),Ee&&Hi(g,P),S;if(x===null){for(;P<v.length;P++)x=c(g,v[P],b),x!==null&&(p=a(x,p,P),C===null?S=x:C.sibling=x,C=x);return Ee&&Hi(g,P),S}for(x=r(g,x);P<v.length;P++)q=h(x,g,P,v[P],b),q!==null&&(t&&q.alternate!==null&&x.delete(q.key===null?P:q.key),p=a(q,p,P),C===null?S=q:C.sibling=q,C=q);return t&&x.forEach(function(he){return e(g,he)}),Ee&&Hi(g,P),S}function w(g,p,v,b){var S=Do(v);if(typeof S!="function")throw Error(R(150));if(v=S.call(v),v==null)throw Error(R(151));for(var C=S=null,x=p,P=p=0,q=null,H=v.next();x!==null&&!H.done;P++,H=v.next()){x.index>P?(q=x,x=null):q=x.sibling;var he=d(g,x,H.value,b);if(he===null){x===null&&(x=q);break}t&&x&&he.alternate===null&&e(g,x),p=a(he,p,P),C===null?S=he:C.sibling=he,C=he,x=q}if(H.done)return n(g,x),Ee&&Hi(g,P),S;if(x===null){for(;!H.done;P++,H=v.next())H=c(g,H.value,b),H!==null&&(p=a(H,p,P),C===null?S=H:C.sibling=H,C=H);return Ee&&Hi(g,P),S}for(x=r(g,x);!H.done;P++,H=v.next())H=h(x,g,P,H.value,b),H!==null&&(t&&H.alternate!==null&&x.delete(H.key===null?P:H.key),p=a(H,p,P),C===null?S=H:C.sibling=H,C=H);return t&&x.forEach(function($t){return e(g,$t)}),Ee&&Hi(g,P),S}function E(g,p,v,b){if(typeof v=="object"&&v!==null&&v.type===us&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Il:e:{for(var S=v.key,C=p;C!==null;){if(C.key===S){if(S=v.type,S===us){if(C.tag===7){n(g,C.sibling),p=i(C,v.props.children),p.return=g,g=p;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Gr&&pv(S)===C.type){n(g,C.sibling),p=i(C,v.props),p.ref=$o(g,C,v),p.return=g,g=p;break e}n(g,C);break}else e(g,C);C=C.sibling}v.type===us?(p=ua(v.props.children,g.mode,b,v.key),p.return=g,g=p):(b=cc(v.type,v.key,v.props,null,g.mode,b),b.ref=$o(g,p,v),b.return=g,g=b)}return s(g);case fs:e:{for(C=v.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(g,p.sibling),p=i(p,v.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=Lh(v,g.mode,b),p.return=g,g=p}return s(g);case Gr:return C=v._init,E(g,p,C(v._payload),b)}if(tf(v))return m(g,p,v,b);if(Do(v))return w(g,p,v,b);Ll(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,v),p.return=g,g=p):(n(g,p),p=Mh(v,g.mode,b),p.return=g,g=p),s(g)):n(g,p)}return E}var Us=xw(!0),Aw=xw(!1),Vu={},or=Ni(Vu),Kf=Ni(Vu),Qf=Ni(Vu);function na(t){if(t===Vu)throw Error(R(174));return t}function jm(t,e){switch(ge(Qf,e),ge(Kf,t),ge(or,Vu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_0(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_0(e,t)}we(or),ge(or,e)}function Vs(){we(or),we(Kf),we(Qf)}function Rw(t){na(Qf.current);var e=na(or.current),n=_0(e,t.type);e!==n&&(ge(Kf,t),ge(or,n))}function Um(t){Kf.current===t&&(we(or),we(Kf))}var xe=Ni(0);function zc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xh=[];function Vm(){for(var t=0;t<xh.length;t++)xh[t]._workInProgressVersionPrimary=null;xh.length=0}var sc=Lr.ReactCurrentDispatcher,Ah=Lr.ReactCurrentBatchConfig,ya=0,Ae=null,Ge=null,Ze=null,Bc=!1,yf=!1,Yf=0,A8=0;function yt(){throw Error(R(321))}function zm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zn(t[n],e[n]))return!1;return!0}function Bm(t,e,n,r,i,a){if(ya=a,Ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,sc.current=t===null||t.memoizedState===null?P8:M8,t=n(r,i),yf){a=0;do{if(yf=!1,Yf=0,25<=a)throw Error(R(301));a+=1,Ze=Ge=null,e.updateQueue=null,sc.current=L8,t=n(r,i)}while(yf)}if(sc.current=qc,e=Ge!==null&&Ge.next!==null,ya=0,Ze=Ge=Ae=null,Bc=!1,e)throw Error(R(300));return t}function qm(){var t=Yf!==0;return Yf=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Ae.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function Sn(){if(Ge===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=Ze===null?Ae.memoizedState:Ze.next;if(e!==null)Ze=e,Ge=t;else{if(t===null)throw Error(R(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Ze===null?Ae.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function Xf(t,e){return typeof e=="function"?e(t):e}function Rh(t){var e=Sn(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=Ge,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var o=s=null,f=null,u=a;do{var l=u.lane;if((ya&l)===l)f!==null&&(f=f.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:l,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};f===null?(o=f=c,s=r):f=f.next=c,Ae.lanes|=l,wa|=l}u=u.next}while(u!==null&&u!==a);f===null?s=r:f.next=o,zn(r,e.memoizedState)||(Bt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=f,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do a=i.lane,Ae.lanes|=a,wa|=a,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Nh(t){var e=Sn(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,a=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do a=t(a,s.action),s=s.next;while(s!==i);zn(a,e.memoizedState)||(Bt=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,r]}function Nw(){}function Dw(t,e){var n=Ae,r=Sn(),i=e(),a=!zn(r.memoizedState,i);if(a&&(r.memoizedState=i,Bt=!0),r=r.queue,Hm(Lw.bind(null,n,r,t),[t]),r.getSnapshot!==e||a||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,Jf(9,Mw.bind(null,n,r,i,e),void 0,null),tt===null)throw Error(R(349));ya&30||Pw(n,e,i)}return i}function Pw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Mw(t,e,n,r){e.value=n,e.getSnapshot=r,Ow(e)&&$w(t)}function Lw(t,e,n){return n(function(){Ow(e)&&$w(t)})}function Ow(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zn(t,n)}catch{return!0}}function $w(t){var e=Rr(t,1);e!==null&&Un(e,t,1,-1)}function mv(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xf,lastRenderedState:t},e.queue=t,t=t.dispatch=D8.bind(null,Ae,t),[e.memoizedState,t]}function Jf(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Fw(){return Sn().memoizedState}function oc(t,e,n,r){var i=Kn();Ae.flags|=t,i.memoizedState=Jf(1|e,n,void 0,r===void 0?null:r)}function zd(t,e,n,r){var i=Sn();r=r===void 0?null:r;var a=void 0;if(Ge!==null){var s=Ge.memoizedState;if(a=s.destroy,r!==null&&zm(r,s.deps)){i.memoizedState=Jf(e,n,a,r);return}}Ae.flags|=t,i.memoizedState=Jf(1|e,n,a,r)}function gv(t,e){return oc(8390656,8,t,e)}function Hm(t,e){return zd(2048,8,t,e)}function jw(t,e){return zd(4,2,t,e)}function Uw(t,e){return zd(4,4,t,e)}function Vw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zw(t,e,n){return n=n!=null?n.concat([t]):null,zd(4,4,Vw.bind(null,e,t),n)}function Wm(){}function Bw(t,e){var n=Sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function qw(t,e){var n=Sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Hw(t,e,n){return ya&21?(zn(n,e)||(n=K6(),Ae.lanes|=n,wa|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Bt=!0),t.memoizedState=n)}function R8(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=Ah.transition;Ah.transition={};try{t(!1),e()}finally{de=n,Ah.transition=r}}function Ww(){return Sn().memoizedState}function N8(t,e,n){var r=ci(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gw(t))Kw(e,n);else if(n=Iw(t,e,n,r),n!==null){var i=Nt();Un(n,t,r,i),Qw(n,e,r)}}function D8(t,e,n){var r=ci(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gw(t))Kw(e,i);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var s=e.lastRenderedState,o=a(s,n);if(i.hasEagerState=!0,i.eagerState=o,zn(o,s)){var f=e.interleaved;f===null?(i.next=i,$m(e)):(i.next=f.next,f.next=i),e.interleaved=i;return}}catch{}finally{}n=Iw(t,e,i,r),n!==null&&(i=Nt(),Un(n,t,r,i),Qw(n,e,r))}}function Gw(t){var e=t.alternate;return t===Ae||e!==null&&e===Ae}function Kw(t,e){yf=Bc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Qw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,_m(t,n)}}var qc={readContext:In,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useInsertionEffect:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useMutableSource:yt,useSyncExternalStore:yt,useId:yt,unstable_isNewReconciler:!1},P8={readContext:In,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:gv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,oc(4194308,4,Vw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return oc(4194308,4,t,e)},useInsertionEffect:function(t,e){return oc(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Kn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=N8.bind(null,Ae,t),[r.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:mv,useDebugValue:Wm,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=mv(!1),e=t[0];return t=R8.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ae,i=Kn();if(Ee){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),tt===null)throw Error(R(349));ya&30||Pw(r,e,n)}i.memoizedState=n;var a={value:n,getSnapshot:e};return i.queue=a,gv(Lw.bind(null,r,a,t),[t]),r.flags|=2048,Jf(9,Mw.bind(null,r,a,n,e),void 0,null),n},useId:function(){var t=Kn(),e=tt.identifierPrefix;if(Ee){var n=kr,r=br;n=(r&~(1<<32-jn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Yf++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=A8++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},M8={readContext:In,useCallback:Bw,useContext:In,useEffect:Hm,useImperativeHandle:zw,useInsertionEffect:jw,useLayoutEffect:Uw,useMemo:qw,useReducer:Rh,useRef:Fw,useState:function(){return Rh(Xf)},useDebugValue:Wm,useDeferredValue:function(t){var e=Sn();return Hw(e,Ge.memoizedState,t)},useTransition:function(){var t=Rh(Xf)[0],e=Sn().memoizedState;return[t,e]},useMutableSource:Nw,useSyncExternalStore:Dw,useId:Ww,unstable_isNewReconciler:!1},L8={readContext:In,useCallback:Bw,useContext:In,useEffect:Hm,useImperativeHandle:zw,useInsertionEffect:jw,useLayoutEffect:Uw,useMemo:qw,useReducer:Nh,useRef:Fw,useState:function(){return Nh(Xf)},useDebugValue:Wm,useDeferredValue:function(t){var e=Sn();return Ge===null?e.memoizedState=t:Hw(e,Ge.memoizedState,t)},useTransition:function(){var t=Nh(Xf)[0],e=Sn().memoizedState;return[t,e]},useMutableSource:Nw,useSyncExternalStore:Dw,useId:Ww,unstable_isNewReconciler:!1};function zs(t,e){try{var n="",r=e;do n+=uS(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:i,digest:null}}function Dh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function W0(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var O8=typeof WeakMap=="function"?WeakMap:Map;function Yw(t,e,n){n=Sr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Wc||(Wc=!0,np=r),W0(t,e)},n}function Xw(t,e,n){n=Sr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){W0(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){W0(t,e),typeof r!="function"&&(li===null?li=new Set([this]):li.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function vv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new O8;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Y8.bind(null,t,e,n),e.then(t,t))}function yv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sr(-1,1),e.tag=2,ui(n,e,1))),n.lanes|=1),t)}var $8=Lr.ReactCurrentOwner,Bt=!1;function Ct(t,e,n,r){e.child=t===null?Aw(e,null,n,r):Us(e,t.child,n,r)}function bv(t,e,n,r,i){n=n.render;var a=e.ref;return Ts(e,i),r=Bm(t,e,n,r,a,i),n=qm(),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nr(t,e,i)):(Ee&&n&&Nm(e),e.flags|=1,Ct(t,e,r,i),e.child)}function kv(t,e,n,r,i){if(t===null){var a=n.type;return typeof a=="function"&&!eg(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=a,Jw(t,e,a,r,i)):(t=cc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&i)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:qf,n(s,r)&&t.ref===e.ref)return Nr(t,e,i)}return e.flags|=1,t=di(a,r),t.ref=e.ref,t.return=e,e.child=t}function Jw(t,e,n,r,i){if(t!==null){var a=t.memoizedProps;if(qf(a,r)&&t.ref===e.ref)if(Bt=!1,e.pendingProps=r=a,(t.lanes&i)!==0)t.flags&131072&&(Bt=!0);else return e.lanes=t.lanes,Nr(t,e,i)}return G0(t,e,n,r,i)}function Zw(t,e,n){var r=e.pendingProps,i=r.children,a=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(ws,nn),nn|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(ws,nn),nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ge(ws,nn),nn|=r}else a!==null?(r=a.baseLanes|n,e.memoizedState=null):r=n,ge(ws,nn),nn|=r;return Ct(t,e,i,n),e.child}function eb(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function G0(t,e,n,r,i){var a=Kt(n)?ga:_t.current;return a=Fs(e,a),Ts(e,i),n=Bm(t,e,n,r,a,i),r=qm(),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nr(t,e,i)):(Ee&&r&&Nm(e),e.flags|=1,Ct(t,e,n,i),e.child)}function Ev(t,e,n,r,i){if(Kt(n)){var a=!0;Oc(e)}else a=!1;if(Ts(e,i),e.stateNode===null)fc(t,e),Tw(e,n,r),H0(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,o=e.memoizedProps;s.props=o;var f=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=In(u):(u=Kt(n)?ga:_t.current,u=Fs(e,u));var l=n.getDerivedStateFromProps,c=typeof l=="function"||typeof s.getSnapshotBeforeUpdate=="function";c||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==r||f!==u)&&hv(e,s,r,u),Kr=!1;var d=e.memoizedState;s.state=d,Vc(e,r,s,i),f=e.memoizedState,o!==r||d!==f||Gt.current||Kr?(typeof l=="function"&&(q0(e,n,l,r),f=e.memoizedState),(o=Kr||dv(e,n,o,r,d,f,u))?(c||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=f),s.props=r,s.state=f,s.context=u,r=o):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,Sw(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Rn(e.type,o),s.props=u,c=e.pendingProps,d=s.context,f=n.contextType,typeof f=="object"&&f!==null?f=In(f):(f=Kt(n)?ga:_t.current,f=Fs(e,f));var h=n.getDerivedStateFromProps;(l=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==c||d!==f)&&hv(e,s,r,f),Kr=!1,d=e.memoizedState,s.state=d,Vc(e,r,s,i);var m=e.memoizedState;o!==c||d!==m||Gt.current||Kr?(typeof h=="function"&&(q0(e,n,h,r),m=e.memoizedState),(u=Kr||dv(e,n,u,r,d,m,f)||!1)?(l||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,m,f),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,m,f)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),s.props=r,s.state=m,s.context=f,r=u):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return K0(t,e,n,r,a,i)}function K0(t,e,n,r,i,a){eb(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&ov(e,n,!1),Nr(t,e,a);r=e.stateNode,$8.current=e;var o=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Us(e,t.child,null,a),e.child=Us(e,null,o,a)):Ct(t,e,o,a),e.memoizedState=r.state,i&&ov(e,n,!0),e.child}function tb(t){var e=t.stateNode;e.pendingContext?sv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sv(t,e.context,!1),jm(t,e.containerInfo)}function _v(t,e,n,r,i){return js(),Pm(i),e.flags|=256,Ct(t,e,n,r),e.child}var Q0={dehydrated:null,treeContext:null,retryLane:0};function Y0(t){return{baseLanes:t,cachePool:null,transitions:null}}function nb(t,e,n){var r=e.pendingProps,i=xe.current,a=!1,s=(e.flags&128)!==0,o;if((o=s)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!==0),o?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(xe,i&1),t===null)return z0(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,a?(r=e.mode,a=e.child,s={mode:"hidden",children:s},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=Hd(s,r,0,null),t=ua(t,r,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=Y0(n),e.memoizedState=Q0,t):Gm(e,s));if(i=t.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return F8(t,e,s,r,o,i,n);if(a){a=r.fallback,s=e.mode,i=t.child,o=i.sibling;var f={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=f,e.deletions=null):(r=di(i,f),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?a=di(o,a):(a=ua(a,s,n,null),a.flags|=2),a.return=e,r.return=e,r.sibling=a,e.child=r,r=a,a=e.child,s=t.child.memoizedState,s=s===null?Y0(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=t.childLanes&~n,e.memoizedState=Q0,r}return a=t.child,t=a.sibling,r=di(a,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Gm(t,e){return e=Hd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ol(t,e,n,r){return r!==null&&Pm(r),Us(e,t.child,null,n),t=Gm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function F8(t,e,n,r,i,a,s){if(n)return e.flags&256?(e.flags&=-257,r=Dh(Error(R(422))),Ol(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=r.fallback,i=e.mode,r=Hd({mode:"visible",children:r.children},i,0,null),a=ua(a,i,s,null),a.flags|=2,r.return=e,a.return=e,r.sibling=a,e.child=r,e.mode&1&&Us(e,t.child,null,s),e.child.memoizedState=Y0(s),e.memoizedState=Q0,a);if(!(e.mode&1))return Ol(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,a=Error(R(419)),r=Dh(a,r,void 0),Ol(t,e,s,r)}if(o=(s&t.childLanes)!==0,Bt||o){if(r=tt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Rr(t,i),Un(r,t,i,-1))}return Zm(),r=Dh(Error(R(421))),Ol(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=X8.bind(null,t),i._reactRetry=e,null):(t=a.treeContext,an=fi(i.nextSibling),on=e,Ee=!0,Dn=null,t!==null&&(gn[vn++]=br,gn[vn++]=kr,gn[vn++]=va,br=t.id,kr=t.overflow,va=e),e=Gm(e,r.children),e.flags|=4096,e)}function Iv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),B0(t.return,e,n)}function Ph(t,e,n,r,i){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function rb(t,e,n){var r=e.pendingProps,i=r.revealOrder,a=r.tail;if(Ct(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Iv(t,n,e);else if(t.tag===19)Iv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&zc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ph(e,!1,i,n,a);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&zc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ph(e,!0,n,null,a);break;case"together":Ph(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Nr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wa|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=di(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=di(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function j8(t,e,n){switch(e.tag){case 3:tb(e),js();break;case 5:Rw(e);break;case 1:Kt(e.type)&&Oc(e);break;case 4:jm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(jc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?nb(t,e,n):(ge(xe,xe.current&1),t=Nr(t,e,n),t!==null?t.sibling:null);ge(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return rb(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,Zw(t,e,n)}return Nr(t,e,n)}var ib,X0,ab,sb;ib=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};X0=function(){};ab=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,na(or.current);var a=null;switch(n){case"input":i=w0(t,i),r=w0(t,r),a=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),a=[];break;case"textarea":i=E0(t,i),r=E0(t,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Mc)}I0(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($f.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var f=r[u];if(o=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&f!==o&&(f!=null||o!=null))if(u==="style")if(o){for(s in o)!o.hasOwnProperty(s)||f&&f.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in f)f.hasOwnProperty(s)&&o[s]!==f[s]&&(n||(n={}),n[s]=f[s])}else n||(a||(a=[]),a.push(u,n)),n=f;else u==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,o=o?o.__html:void 0,f!=null&&o!==f&&(a=a||[]).push(u,f)):u==="children"?typeof f!="string"&&typeof f!="number"||(a=a||[]).push(u,""+f):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($f.hasOwnProperty(u)?(f!=null&&u==="onScroll"&&ve("scroll",t),a||o===f||(a=[])):(a=a||[]).push(u,f))}n&&(a=a||[]).push("style",n);var u=a;(e.updateQueue=u)&&(e.flags|=4)}};sb=function(t,e,n,r){n!==r&&(e.flags|=4)};function Fo(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function U8(t,e,n){var r=e.pendingProps;switch(Dm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(e),null;case 1:return Kt(e.type)&&Lc(),wt(e),null;case 3:return r=e.stateNode,Vs(),we(Gt),we(_t),Vm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ml(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dn!==null&&(ap(Dn),Dn=null))),X0(t,e),wt(e),null;case 5:Um(e);var i=na(Qf.current);if(n=e.type,t!==null&&e.stateNode!=null)ab(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return wt(e),null}if(t=na(or.current),Ml(e)){r=e.stateNode,n=e.type;var a=e.memoizedProps;switch(r[Yn]=e,r[Gf]=a,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<rf.length;i++)ve(rf[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":P3(r,a),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ve("invalid",r);break;case"textarea":L3(r,a),ve("invalid",r)}I0(n,a),i=null;for(var s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="children"?typeof o=="string"?r.textContent!==o&&(a.suppressHydrationWarning!==!0&&Pl(r.textContent,o,t),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&Pl(r.textContent,o,t),i=["children",""+o]):$f.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&ve("scroll",r)}switch(n){case"input":Sl(r),M3(r,a,!0);break;case"textarea":Sl(r),O3(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Mc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=P6(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Yn]=e,t[Gf]=r,ib(t,e,!1,!1),e.stateNode=t;e:{switch(s=S0(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<rf.length;i++)ve(rf[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":P3(t,r),i=w0(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),ve("invalid",t);break;case"textarea":L3(t,r),i=E0(t,r),ve("invalid",t);break;default:i=r}I0(n,i),o=i;for(a in o)if(o.hasOwnProperty(a)){var f=o[a];a==="style"?O6(t,f):a==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&M6(t,f)):a==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&Ff(t,f):typeof f=="number"&&Ff(t,""+f):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&($f.hasOwnProperty(a)?f!=null&&a==="onScroll"&&ve("scroll",t):f!=null&&vm(t,a,f,s))}switch(n){case"input":Sl(t),M3(t,r,!1);break;case"textarea":Sl(t),O3(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gi(r.value));break;case"select":t.multiple=!!r.multiple,a=r.value,a!=null?_s(t,!!r.multiple,a,!1):r.defaultValue!=null&&_s(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Mc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return wt(e),null;case 6:if(t&&e.stateNode!=null)sb(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=na(Qf.current),na(or.current),Ml(e)){if(r=e.stateNode,n=e.memoizedProps,r[Yn]=e,(a=r.nodeValue!==n)&&(t=on,t!==null))switch(t.tag){case 3:Pl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pl(r.nodeValue,n,(t.mode&1)!==0)}a&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yn]=e,e.stateNode=r}return wt(e),null;case 13:if(we(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&an!==null&&e.mode&1&&!(e.flags&128))_w(),js(),e.flags|=98560,a=!1;else if(a=Ml(e),r!==null&&r.dehydrated!==null){if(t===null){if(!a)throw Error(R(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(R(317));a[Yn]=e}else js(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;wt(e),a=!1}else Dn!==null&&(ap(Dn),Dn=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?Qe===0&&(Qe=3):Zm())),e.updateQueue!==null&&(e.flags|=4),wt(e),null);case 4:return Vs(),X0(t,e),t===null&&Hf(e.stateNode.containerInfo),wt(e),null;case 10:return Om(e.type._context),wt(e),null;case 17:return Kt(e.type)&&Lc(),wt(e),null;case 19:if(we(xe),a=e.memoizedState,a===null)return wt(e),null;if(r=(e.flags&128)!==0,s=a.rendering,s===null)if(r)Fo(a,!1);else{if(Qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=zc(t),s!==null){for(e.flags|=128,Fo(a,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)a=n,t=r,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,t=s.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(xe,xe.current&1|2),e.child}t=t.sibling}a.tail!==null&&Fe()>Bs&&(e.flags|=128,r=!0,Fo(a,!1),e.lanes=4194304)}else{if(!r)if(t=zc(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Fo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!Ee)return wt(e),null}else 2*Fe()-a.renderingStartTime>Bs&&n!==1073741824&&(e.flags|=128,r=!0,Fo(a,!1),e.lanes=4194304);a.isBackwards?(s.sibling=e.child,e.child=s):(n=a.last,n!==null?n.sibling=s:e.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Fe(),e.sibling=null,n=xe.current,ge(xe,r?n&1|2:n&1),e):(wt(e),null);case 22:case 23:return Jm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?nn&1073741824&&(wt(e),e.subtreeFlags&6&&(e.flags|=8192)):wt(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function V8(t,e){switch(Dm(e),e.tag){case 1:return Kt(e.type)&&Lc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vs(),we(Gt),we(_t),Vm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Um(e),null;case 13:if(we(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));js()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(xe),null;case 4:return Vs(),null;case 10:return Om(e.type._context),null;case 22:case 23:return Jm(),null;case 24:return null;default:return null}}var $l=!1,bt=!1,z8=typeof WeakSet=="function"?WeakSet:Set,j=null;function ys(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function J0(t,e,n){try{n()}catch(r){De(t,e,r)}}var Sv=!1;function B8(t,e){if(L0=Nc,t=lw(),Rm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,o=-1,f=-1,u=0,l=0,c=t,d=null;t:for(;;){for(var h;c!==n||i!==0&&c.nodeType!==3||(o=s+i),c!==a||r!==0&&c.nodeType!==3||(f=s+r),c.nodeType===3&&(s+=c.nodeValue.length),(h=c.firstChild)!==null;)d=c,c=h;for(;;){if(c===t)break t;if(d===n&&++u===i&&(o=s),d===a&&++l===r&&(f=s),(h=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=h}n=o===-1||f===-1?null:{start:o,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(O0={focusedElem:t,selectionRange:n},Nc=!1,j=e;j!==null;)if(e=j,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,j=t;else for(;j!==null;){e=j;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var w=m.memoizedProps,E=m.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?w:Rn(e.type,w),E);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(b){De(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,j=t;break}j=e.return}return m=Sv,Sv=!1,m}function wf(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var a=i.destroy;i.destroy=void 0,a!==void 0&&J0(e,n,a)}i=i.next}while(i!==r)}}function Bd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Z0(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ob(t){var e=t.alternate;e!==null&&(t.alternate=null,ob(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[Gf],delete e[j0],delete e[S8],delete e[C8])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function fb(t){return t.tag===5||t.tag===3||t.tag===4}function Cv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||fb(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ep(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Mc));else if(r!==4&&(t=t.child,t!==null))for(ep(t,e,n),t=t.sibling;t!==null;)ep(t,e,n),t=t.sibling}function tp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(tp(t,e,n),t=t.sibling;t!==null;)tp(t,e,n),t=t.sibling}var ft=null,Nn=!1;function Vr(t,e,n){for(n=n.child;n!==null;)ub(t,e,n),n=n.sibling}function ub(t,e,n){if(sr&&typeof sr.onCommitFiberUnmount=="function")try{sr.onCommitFiberUnmount(Ld,n)}catch{}switch(n.tag){case 5:bt||ys(n,e);case 6:var r=ft,i=Nn;ft=null,Vr(t,e,n),ft=r,Nn=i,ft!==null&&(Nn?(t=ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ft.removeChild(n.stateNode));break;case 18:ft!==null&&(Nn?(t=ft,n=n.stateNode,t.nodeType===8?Ch(t.parentNode,n):t.nodeType===1&&Ch(t,n),zf(t)):Ch(ft,n.stateNode));break;case 4:r=ft,i=Nn,ft=n.stateNode.containerInfo,Nn=!0,Vr(t,e,n),ft=r,Nn=i;break;case 0:case 11:case 14:case 15:if(!bt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&J0(n,e,s),i=i.next}while(i!==r)}Vr(t,e,n);break;case 1:if(!bt&&(ys(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){De(n,e,o)}Vr(t,e,n);break;case 21:Vr(t,e,n);break;case 22:n.mode&1?(bt=(r=bt)||n.memoizedState!==null,Vr(t,e,n),bt=r):Vr(t,e,n);break;default:Vr(t,e,n)}}function Tv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new z8),e.forEach(function(r){var i=J8.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 5:ft=o.stateNode,Nn=!1;break e;case 3:ft=o.stateNode.containerInfo,Nn=!0;break e;case 4:ft=o.stateNode.containerInfo,Nn=!0;break e}o=o.return}if(ft===null)throw Error(R(160));ub(a,s,i),ft=null,Nn=!1;var f=i.alternate;f!==null&&(f.return=null),i.return=null}catch(u){De(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)lb(e,t),e=e.sibling}function lb(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xn(e,t),Gn(t),r&4){try{wf(3,t,t.return),Bd(3,t)}catch(w){De(t,t.return,w)}try{wf(5,t,t.return)}catch(w){De(t,t.return,w)}}break;case 1:xn(e,t),Gn(t),r&512&&n!==null&&ys(n,n.return);break;case 5:if(xn(e,t),Gn(t),r&512&&n!==null&&ys(n,n.return),t.flags&32){var i=t.stateNode;try{Ff(i,"")}catch(w){De(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var a=t.memoizedProps,s=n!==null?n.memoizedProps:a,o=t.type,f=t.updateQueue;if(t.updateQueue=null,f!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&N6(i,a),S0(o,s);var u=S0(o,a);for(s=0;s<f.length;s+=2){var l=f[s],c=f[s+1];l==="style"?O6(i,c):l==="dangerouslySetInnerHTML"?M6(i,c):l==="children"?Ff(i,c):vm(i,l,c,u)}switch(o){case"input":b0(i,a);break;case"textarea":D6(i,a);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var h=a.value;h!=null?_s(i,!!a.multiple,h,!1):d!==!!a.multiple&&(a.defaultValue!=null?_s(i,!!a.multiple,a.defaultValue,!0):_s(i,!!a.multiple,a.multiple?[]:"",!1))}i[Gf]=a}catch(w){De(t,t.return,w)}}break;case 6:if(xn(e,t),Gn(t),r&4){if(t.stateNode===null)throw Error(R(162));i=t.stateNode,a=t.memoizedProps;try{i.nodeValue=a}catch(w){De(t,t.return,w)}}break;case 3:if(xn(e,t),Gn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zf(e.containerInfo)}catch(w){De(t,t.return,w)}break;case 4:xn(e,t),Gn(t);break;case 13:xn(e,t),Gn(t),i=t.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Ym=Fe())),r&4&&Tv(t);break;case 22:if(l=n!==null&&n.memoizedState!==null,t.mode&1?(bt=(u=bt)||l,xn(e,t),bt=u):xn(e,t),Gn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!l&&t.mode&1)for(j=t,l=t.child;l!==null;){for(c=j=l;j!==null;){switch(d=j,h=d.child,d.tag){case 0:case 11:case 14:case 15:wf(4,d,d.return);break;case 1:ys(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(w){De(r,n,w)}}break;case 5:ys(d,d.return);break;case 22:if(d.memoizedState!==null){Av(c);continue}}h!==null?(h.return=d,j=h):Av(c)}l=l.sibling}e:for(l=null,c=t;;){if(c.tag===5){if(l===null){l=c;try{i=c.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=c.stateNode,f=c.memoizedProps.style,s=f!=null&&f.hasOwnProperty("display")?f.display:null,o.style.display=L6("display",s))}catch(w){De(t,t.return,w)}}}else if(c.tag===6){if(l===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(w){De(t,t.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;l===c&&(l=null),c=c.return}l===c&&(l=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:xn(e,t),Gn(t),r&4&&Tv(t);break;case 21:break;default:xn(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(fb(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ff(i,""),r.flags&=-33);var a=Cv(t);tp(t,a,i);break;case 3:case 4:var s=r.stateNode.containerInfo,o=Cv(t);ep(t,o,s);break;default:throw Error(R(161))}}catch(f){De(t,t.return,f)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function q8(t,e,n){j=t,cb(t)}function cb(t,e,n){for(var r=(t.mode&1)!==0;j!==null;){var i=j,a=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||$l;if(!s){var o=i.alternate,f=o!==null&&o.memoizedState!==null||bt;o=$l;var u=bt;if($l=s,(bt=f)&&!u)for(j=i;j!==null;)s=j,f=s.child,s.tag===22&&s.memoizedState!==null?Rv(i):f!==null?(f.return=s,j=f):Rv(i);for(;a!==null;)j=a,cb(a),a=a.sibling;j=i,$l=o,bt=u}xv(t)}else i.subtreeFlags&8772&&a!==null?(a.return=i,j=a):xv(t)}}function xv(t){for(;j!==null;){var e=j;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:bt||Bd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!bt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Rn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&cv(e,a,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cv(e,s,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var f=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var l=u.memoizedState;if(l!==null){var c=l.dehydrated;c!==null&&zf(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}bt||e.flags&512&&Z0(e)}catch(d){De(e,e.return,d)}}if(e===t){j=null;break}if(n=e.sibling,n!==null){n.return=e.return,j=n;break}j=e.return}}function Av(t){for(;j!==null;){var e=j;if(e===t){j=null;break}var n=e.sibling;if(n!==null){n.return=e.return,j=n;break}j=e.return}}function Rv(t){for(;j!==null;){var e=j;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Bd(4,e)}catch(f){De(e,n,f)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(f){De(e,i,f)}}var a=e.return;try{Z0(e)}catch(f){De(e,a,f)}break;case 5:var s=e.return;try{Z0(e)}catch(f){De(e,s,f)}}}catch(f){De(e,e.return,f)}if(e===t){j=null;break}var o=e.sibling;if(o!==null){o.return=e.return,j=o;break}j=e.return}}var H8=Math.ceil,Hc=Lr.ReactCurrentDispatcher,Km=Lr.ReactCurrentOwner,_n=Lr.ReactCurrentBatchConfig,fe=0,tt=null,qe=null,ct=0,nn=0,ws=Ni(0),Qe=0,Zf=null,wa=0,qd=0,Qm=0,bf=null,zt=null,Ym=0,Bs=1/0,vr=null,Wc=!1,np=null,li=null,Fl=!1,ei=null,Gc=0,kf=0,rp=null,uc=-1,lc=0;function Nt(){return fe&6?Fe():uc!==-1?uc:uc=Fe()}function ci(t){return t.mode&1?fe&2&&ct!==0?ct&-ct:x8.transition!==null?(lc===0&&(lc=K6()),lc):(t=de,t!==0||(t=window.event,t=t===void 0?16:tw(t.type)),t):1}function Un(t,e,n,r){if(50<kf)throw kf=0,rp=null,Error(R(185));Fu(t,n,r),(!(fe&2)||t!==tt)&&(t===tt&&(!(fe&2)&&(qd|=n),Qe===4&&Yr(t,ct)),Qt(t,r),n===1&&fe===0&&!(e.mode&1)&&(Bs=Fe()+500,Ud&&Di()))}function Qt(t,e){var n=t.callbackNode;xS(t,e);var r=Rc(t,t===tt?ct:0);if(r===0)n!==null&&j3(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&j3(n),e===1)t.tag===0?T8(Nv.bind(null,t)):bw(Nv.bind(null,t)),_8(function(){!(fe&6)&&Di()}),n=null;else{switch(Q6(r)){case 1:n=Em;break;case 4:n=W6;break;case 16:n=Ac;break;case 536870912:n=G6;break;default:n=Ac}n=wb(n,db.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function db(t,e){if(uc=-1,lc=0,fe&6)throw Error(R(327));var n=t.callbackNode;if(xs()&&t.callbackNode!==n)return null;var r=Rc(t,t===tt?ct:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Kc(t,r);else{e=r;var i=fe;fe|=2;var a=pb();(tt!==t||ct!==e)&&(vr=null,Bs=Fe()+500,fa(t,e));do try{K8();break}catch(o){hb(t,o)}while(1);Lm(),Hc.current=a,fe=i,qe!==null?e=0:(tt=null,ct=0,e=Qe)}if(e!==0){if(e===2&&(i=R0(t),i!==0&&(r=i,e=ip(t,i))),e===1)throw n=Zf,fa(t,0),Yr(t,r),Qt(t,Fe()),n;if(e===6)Yr(t,r);else{if(i=t.current.alternate,!(r&30)&&!W8(i)&&(e=Kc(t,r),e===2&&(a=R0(t),a!==0&&(r=a,e=ip(t,a))),e===1))throw n=Zf,fa(t,0),Yr(t,r),Qt(t,Fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:Wi(t,zt,vr);break;case 3:if(Yr(t,r),(r&130023424)===r&&(e=Ym+500-Fe(),10<e)){if(Rc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=F0(Wi.bind(null,t,zt,vr),e);break}Wi(t,zt,vr);break;case 4:if(Yr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-jn(r);a=1<<s,s=e[s],s>i&&(i=s),r&=~a}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*H8(r/1960))-r,10<r){t.timeoutHandle=F0(Wi.bind(null,t,zt,vr),r);break}Wi(t,zt,vr);break;case 5:Wi(t,zt,vr);break;default:throw Error(R(329))}}}return Qt(t,Fe()),t.callbackNode===n?db.bind(null,t):null}function ip(t,e){var n=bf;return t.current.memoizedState.isDehydrated&&(fa(t,e).flags|=256),t=Kc(t,e),t!==2&&(e=zt,zt=n,e!==null&&ap(e)),t}function ap(t){zt===null?zt=t:zt.push.apply(zt,t)}function W8(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!zn(a(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yr(t,e){for(e&=~Qm,e&=~qd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),r=1<<n;t[n]=-1,e&=~r}}function Nv(t){if(fe&6)throw Error(R(327));xs();var e=Rc(t,0);if(!(e&1))return Qt(t,Fe()),null;var n=Kc(t,e);if(t.tag!==0&&n===2){var r=R0(t);r!==0&&(e=r,n=ip(t,r))}if(n===1)throw n=Zf,fa(t,0),Yr(t,e),Qt(t,Fe()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wi(t,zt,vr),Qt(t,Fe()),null}function Xm(t,e){var n=fe;fe|=1;try{return t(e)}finally{fe=n,fe===0&&(Bs=Fe()+500,Ud&&Di())}}function ba(t){ei!==null&&ei.tag===0&&!(fe&6)&&xs();var e=fe;fe|=1;var n=_n.transition,r=de;try{if(_n.transition=null,de=1,t)return t()}finally{de=r,_n.transition=n,fe=e,!(fe&6)&&Di()}}function Jm(){nn=ws.current,we(ws)}function fa(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,E8(n)),qe!==null)for(n=qe.return;n!==null;){var r=n;switch(Dm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Lc();break;case 3:Vs(),we(Gt),we(_t),Vm();break;case 5:Um(r);break;case 4:Vs();break;case 13:we(xe);break;case 19:we(xe);break;case 10:Om(r.type._context);break;case 22:case 23:Jm()}n=n.return}if(tt=t,qe=t=di(t.current,null),ct=nn=e,Qe=0,Zf=null,Qm=qd=wa=0,zt=bf=null,ta!==null){for(e=0;e<ta.length;e++)if(n=ta[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var s=a.next;a.next=i,r.next=s}n.pending=r}ta=null}return t}function hb(t,e){do{var n=qe;try{if(Lm(),sc.current=qc,Bc){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Bc=!1}if(ya=0,Ze=Ge=Ae=null,yf=!1,Yf=0,Km.current=null,n===null||n.return===null){Qe=1,Zf=e,qe=null;break}e:{var a=t,s=n.return,o=n,f=e;if(e=ct,o.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var u=f,l=o,c=l.tag;if(!(l.mode&1)&&(c===0||c===11||c===15)){var d=l.alternate;d?(l.updateQueue=d.updateQueue,l.memoizedState=d.memoizedState,l.lanes=d.lanes):(l.updateQueue=null,l.memoizedState=null)}var h=yv(s);if(h!==null){h.flags&=-257,wv(h,s,o,a,e),h.mode&1&&vv(a,u,e),e=h,f=u;var m=e.updateQueue;if(m===null){var w=new Set;w.add(f),e.updateQueue=w}else m.add(f);break e}else{if(!(e&1)){vv(a,u,e),Zm();break e}f=Error(R(426))}}else if(Ee&&o.mode&1){var E=yv(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),wv(E,s,o,a,e),Pm(zs(f,o));break e}}a=f=zs(f,o),Qe!==4&&(Qe=2),bf===null?bf=[a]:bf.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var g=Yw(a,f,e);lv(a,g);break e;case 1:o=f;var p=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(li===null||!li.has(v)))){a.flags|=65536,e&=-e,a.lanes|=e;var b=Xw(a,o,e);lv(a,b);break e}}a=a.return}while(a!==null)}gb(n)}catch(S){e=S,qe===n&&n!==null&&(qe=n=n.return);continue}break}while(1)}function pb(){var t=Hc.current;return Hc.current=qc,t===null?qc:t}function Zm(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),tt===null||!(wa&268435455)&&!(qd&268435455)||Yr(tt,ct)}function Kc(t,e){var n=fe;fe|=2;var r=pb();(tt!==t||ct!==e)&&(vr=null,fa(t,e));do try{G8();break}catch(i){hb(t,i)}while(1);if(Lm(),fe=n,Hc.current=r,qe!==null)throw Error(R(261));return tt=null,ct=0,Qe}function G8(){for(;qe!==null;)mb(qe)}function K8(){for(;qe!==null&&!wS();)mb(qe)}function mb(t){var e=yb(t.alternate,t,nn);t.memoizedProps=t.pendingProps,e===null?gb(t):qe=e,Km.current=null}function gb(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=V8(n,e),n!==null){n.flags&=32767,qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,qe=null;return}}else if(n=U8(n,e,nn),n!==null){qe=n;return}if(e=e.sibling,e!==null){qe=e;return}qe=e=t}while(e!==null);Qe===0&&(Qe=5)}function Wi(t,e,n){var r=de,i=_n.transition;try{_n.transition=null,de=1,Q8(t,e,n,r)}finally{_n.transition=i,de=r}return null}function Q8(t,e,n,r){do xs();while(ei!==null);if(fe&6)throw Error(R(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(AS(t,a),t===tt&&(qe=tt=null,ct=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fl||(Fl=!0,wb(Ac,function(){return xs(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=_n.transition,_n.transition=null;var s=de;de=1;var o=fe;fe|=4,Km.current=null,B8(t,n),lb(n,t),m8(O0),Nc=!!L0,O0=L0=null,t.current=n,q8(n),bS(),fe=o,de=s,_n.transition=a}else t.current=n;if(Fl&&(Fl=!1,ei=t,Gc=i),a=t.pendingLanes,a===0&&(li=null),_S(n.stateNode),Qt(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wc)throw Wc=!1,t=np,np=null,t;return Gc&1&&t.tag!==0&&xs(),a=t.pendingLanes,a&1?t===rp?kf++:(kf=0,rp=t):kf=0,Di(),null}function xs(){if(ei!==null){var t=Q6(Gc),e=_n.transition,n=de;try{if(_n.transition=null,de=16>t?16:t,ei===null)var r=!1;else{if(t=ei,ei=null,Gc=0,fe&6)throw Error(R(331));var i=fe;for(fe|=4,j=t.current;j!==null;){var a=j,s=a.child;if(j.flags&16){var o=a.deletions;if(o!==null){for(var f=0;f<o.length;f++){var u=o[f];for(j=u;j!==null;){var l=j;switch(l.tag){case 0:case 11:case 15:wf(8,l,a)}var c=l.child;if(c!==null)c.return=l,j=c;else for(;j!==null;){l=j;var d=l.sibling,h=l.return;if(ob(l),l===u){j=null;break}if(d!==null){d.return=h,j=d;break}j=h}}}var m=a.alternate;if(m!==null){var w=m.child;if(w!==null){m.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}j=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,j=s;else e:for(;j!==null;){if(a=j,a.flags&2048)switch(a.tag){case 0:case 11:case 15:wf(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,j=g;break e}j=a.return}}var p=t.current;for(j=p;j!==null;){s=j;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,j=v;else e:for(s=p;j!==null;){if(o=j,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Bd(9,o)}}catch(S){De(o,o.return,S)}if(o===s){j=null;break e}var b=o.sibling;if(b!==null){b.return=o.return,j=b;break e}j=o.return}}if(fe=i,Di(),sr&&typeof sr.onPostCommitFiberRoot=="function")try{sr.onPostCommitFiberRoot(Ld,t)}catch{}r=!0}return r}finally{de=n,_n.transition=e}}return!1}function Dv(t,e,n){e=zs(n,e),e=Yw(t,e,1),t=ui(t,e,1),e=Nt(),t!==null&&(Fu(t,1,e),Qt(t,e))}function De(t,e,n){if(t.tag===3)Dv(t,t,n);else for(;e!==null;){if(e.tag===3){Dv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(li===null||!li.has(r))){t=zs(n,t),t=Xw(e,t,1),e=ui(e,t,1),t=Nt(),e!==null&&(Fu(e,1,t),Qt(e,t));break}}e=e.return}}function Y8(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Nt(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(ct&n)===n&&(Qe===4||Qe===3&&(ct&130023424)===ct&&500>Fe()-Ym?fa(t,0):Qm|=n),Qt(t,e)}function vb(t,e){e===0&&(t.mode&1?(e=xl,xl<<=1,!(xl&130023424)&&(xl=4194304)):e=1);var n=Nt();t=Rr(t,e),t!==null&&(Fu(t,e,n),Qt(t,n))}function X8(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),vb(t,n)}function J8(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),vb(t,n)}var yb;yb=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Gt.current)Bt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Bt=!1,j8(t,e,n);Bt=!!(t.flags&131072)}else Bt=!1,Ee&&e.flags&1048576&&kw(e,Fc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;fc(t,e),t=e.pendingProps;var i=Fs(e,_t.current);Ts(e,n),i=Bm(null,e,r,t,i,n);var a=qm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Kt(r)?(a=!0,Oc(e)):a=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fm(e),i.updater=Vd,e.stateNode=i,i._reactInternals=e,H0(e,r,t,n),e=K0(null,e,r,!0,a,n)):(e.tag=0,Ee&&a&&Nm(e),Ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(fc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=e7(r),t=Rn(r,t),i){case 0:e=G0(null,e,r,t,n);break e;case 1:e=Ev(null,e,r,t,n);break e;case 11:e=bv(null,e,r,t,n);break e;case 14:e=kv(null,e,r,Rn(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),G0(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),Ev(t,e,r,i,n);case 3:e:{if(tb(e),t===null)throw Error(R(387));r=e.pendingProps,a=e.memoizedState,i=a.element,Sw(t,e),Vc(e,r,null,n);var s=e.memoizedState;if(r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){i=zs(Error(R(423)),e),e=_v(t,e,r,n,i);break e}else if(r!==i){i=zs(Error(R(424)),e),e=_v(t,e,r,n,i);break e}else for(an=fi(e.stateNode.containerInfo.firstChild),on=e,Ee=!0,Dn=null,n=Aw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(js(),r===i){e=Nr(t,e,n);break e}Ct(t,e,r,n)}e=e.child}return e;case 5:return Rw(e),t===null&&z0(e),r=e.type,i=e.pendingProps,a=t!==null?t.memoizedProps:null,s=i.children,$0(r,i)?s=null:a!==null&&$0(r,a)&&(e.flags|=32),eb(t,e),Ct(t,e,s,n),e.child;case 6:return t===null&&z0(e),null;case 13:return nb(t,e,n);case 4:return jm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Us(e,null,r,n):Ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),bv(t,e,r,i,n);case 7:return Ct(t,e,e.pendingProps,n),e.child;case 8:return Ct(t,e,e.pendingProps.children,n),e.child;case 12:return Ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,a=e.memoizedProps,s=i.value,ge(jc,r._currentValue),r._currentValue=s,a!==null)if(zn(a.value,s)){if(a.children===i.children&&!Gt.current){e=Nr(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){s=a.child;for(var f=o.firstContext;f!==null;){if(f.context===r){if(a.tag===1){f=Sr(-1,n&-n),f.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var l=u.pending;l===null?f.next=f:(f.next=l.next,l.next=f),u.pending=f}}a.lanes|=n,f=a.alternate,f!==null&&(f.lanes|=n),B0(a.return,n,e),o.lanes|=n;break}f=f.next}}else if(a.tag===10)s=a.type===e.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(R(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),B0(s,n,e),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}Ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ts(e,n),i=In(i),r=r(i),e.flags|=1,Ct(t,e,r,n),e.child;case 14:return r=e.type,i=Rn(r,e.pendingProps),i=Rn(r.type,i),kv(t,e,r,i,n);case 15:return Jw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),fc(t,e),e.tag=1,Kt(r)?(t=!0,Oc(e)):t=!1,Ts(e,n),Tw(e,r,i),H0(e,r,i,n),K0(null,e,r,!0,t,n);case 19:return rb(t,e,n);case 22:return Zw(t,e,n)}throw Error(R(156,e.tag))};function wb(t,e){return H6(t,e)}function Z8(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,n,r){return new Z8(t,e,n,r)}function eg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function e7(t){if(typeof t=="function")return eg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wm)return 11;if(t===bm)return 14}return 2}function di(t,e){var n=t.alternate;return n===null?(n=kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function cc(t,e,n,r,i,a){var s=2;if(r=t,typeof t=="function")eg(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case us:return ua(n.children,i,a,e);case ym:s=8,i|=8;break;case m0:return t=kn(12,n,e,i|2),t.elementType=m0,t.lanes=a,t;case g0:return t=kn(13,n,e,i),t.elementType=g0,t.lanes=a,t;case v0:return t=kn(19,n,e,i),t.elementType=v0,t.lanes=a,t;case x6:return Hd(n,i,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C6:s=10;break e;case T6:s=9;break e;case wm:s=11;break e;case bm:s=14;break e;case Gr:s=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=kn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=a,e}function ua(t,e,n,r){return t=kn(7,t,r,e),t.lanes=n,t}function Hd(t,e,n,r){return t=kn(22,t,r,e),t.elementType=x6,t.lanes=n,t.stateNode={isHidden:!1},t}function Mh(t,e,n){return t=kn(6,t,null,e),t.lanes=n,t}function Lh(t,e,n){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function t7(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mh(0),this.expirationTimes=mh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tg(t,e,n,r,i,a,s,o,f){return t=new t7(t,e,n,o,f),e===1?(e=1,a===!0&&(e|=8)):e=0,a=kn(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fm(a),t}function n7(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function bb(t){if(!t)return vi;t=t._reactInternals;e:{if(Fa(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if(Kt(n))return ww(t,n,e)}return e}function kb(t,e,n,r,i,a,s,o,f){return t=tg(n,r,!0,t,i,a,s,o,f),t.context=bb(null),n=t.current,r=Nt(),i=ci(n),a=Sr(r,i),a.callback=e??null,ui(n,a,i),t.current.lanes=i,Fu(t,i,r),Qt(t,r),t}function Wd(t,e,n,r){var i=e.current,a=Nt(),s=ci(i);return n=bb(n),e.context===null?e.context=n:e.pendingContext=n,e=Sr(a,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ui(i,e,s),t!==null&&(Un(t,i,s,a),ac(t,i,s)),s}function Qc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Pv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ng(t,e){Pv(t,e),(t=t.alternate)&&Pv(t,e)}function r7(){return null}var Eb=typeof reportError=="function"?reportError:function(t){console.error(t)};function rg(t){this._internalRoot=t}Gd.prototype.render=rg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));Wd(t,e,null,null)};Gd.prototype.unmount=rg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ba(function(){Wd(null,t,null,null)}),e[Ar]=null}};function Gd(t){this._internalRoot=t}Gd.prototype.unstable_scheduleHydration=function(t){if(t){var e=J6();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qr.length&&e!==0&&e<Qr[n].priority;n++);Qr.splice(n,0,t),n===0&&ew(t)}};function ig(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Kd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mv(){}function i7(t,e,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=Qc(s);a.call(u)}}var s=kb(e,r,t,0,null,!1,!1,"",Mv);return t._reactRootContainer=s,t[Ar]=s.current,Hf(t.nodeType===8?t.parentNode:t),ba(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var u=Qc(f);o.call(u)}}var f=tg(t,0,!1,null,null,!1,!1,"",Mv);return t._reactRootContainer=f,t[Ar]=f.current,Hf(t.nodeType===8?t.parentNode:t),ba(function(){Wd(e,f,n,r)}),f}function Qd(t,e,n,r,i){var a=n._reactRootContainer;if(a){var s=a;if(typeof i=="function"){var o=i;i=function(){var f=Qc(s);o.call(f)}}Wd(e,s,t,i)}else s=i7(n,e,t,i,r);return Qc(s)}Y6=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=nf(e.pendingLanes);n!==0&&(_m(e,n|1),Qt(e,Fe()),!(fe&6)&&(Bs=Fe()+500,Di()))}break;case 13:ba(function(){var r=Rr(t,1);if(r!==null){var i=Nt();Un(r,t,1,i)}}),ng(t,1)}};Im=function(t){if(t.tag===13){var e=Rr(t,134217728);if(e!==null){var n=Nt();Un(e,t,134217728,n)}ng(t,134217728)}};X6=function(t){if(t.tag===13){var e=ci(t),n=Rr(t,e);if(n!==null){var r=Nt();Un(n,t,e,r)}ng(t,e)}};J6=function(){return de};Z6=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};T0=function(t,e,n){switch(e){case"input":if(b0(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=jd(r);if(!i)throw Error(R(90));R6(r),b0(r,i)}}}break;case"textarea":D6(t,n);break;case"select":e=n.value,e!=null&&_s(t,!!n.multiple,e,!1)}};j6=Xm;U6=ba;var a7={usingClientEntryPoint:!1,Events:[Uu,hs,jd,$6,F6,Xm]},jo={findFiberByHostInstance:ea,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},s7={bundleType:jo.bundleType,version:jo.version,rendererPackageName:jo.rendererPackageName,rendererConfig:jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=B6(t),t===null?null:t.stateNode},findFiberByHostInstance:jo.findFiberByHostInstance||r7,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{Ld=jl.inject(s7),sr=jl}catch{}}cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a7;cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ig(e))throw Error(R(200));return n7(t,e,null,n)};cn.createRoot=function(t,e){if(!ig(t))throw Error(R(299));var n=!1,r="",i=Eb;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=tg(t,1,!1,null,null,n,!1,r,i),t[Ar]=e.current,Hf(t.nodeType===8?t.parentNode:t),new rg(e)};cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=B6(e),t=t===null?null:t.stateNode,t};cn.flushSync=function(t){return ba(t)};cn.hydrate=function(t,e,n){if(!Kd(e))throw Error(R(200));return Qd(null,t,e,!0,n)};cn.hydrateRoot=function(t,e,n){if(!ig(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",s=Eb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=kb(e,null,t,1,n??null,i,!1,a,s),t[Ar]=e.current,Hf(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Gd(e)};cn.render=function(t,e,n){if(!Kd(e))throw Error(R(200));return Qd(null,t,e,!1,n)};cn.unmountComponentAtNode=function(t){if(!Kd(t))throw Error(R(40));return t._reactRootContainer?(ba(function(){Qd(null,null,t,!1,function(){t._reactRootContainer=null,t[Ar]=null})}),!0):!1};cn.unstable_batchedUpdates=Xm;cn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Kd(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return Qd(t,e,n,!1,r)};cn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=cn})(rS);var Lv=Sc;d0.createRoot=Lv.createRoot,d0.hydrateRoot=Lv.hydrateRoot;const o7={"app-container":"_app-container_i2guw_17"};var ag=Bu(),X=t=>zu(t,ag),sg=Bu();X.write=t=>zu(t,sg);var Yd=Bu();X.onStart=t=>zu(t,Yd);var og=Bu();X.onFrame=t=>zu(t,og);var fg=Bu();X.onFinish=t=>zu(t,fg);var As=[];X.setTimeout=(t,e)=>{let n=X.now()+e,r=()=>{let a=As.findIndex(s=>s.cancel==r);~a&&As.splice(a,1),ni-=~a?1:0},i={time:n,handler:t,cancel:r};return As.splice(_b(n),0,i),ni+=1,Ib(),i};var _b=t=>~(~As.findIndex(e=>e.time>t)||~As.length);X.cancel=t=>{Yd.delete(t),og.delete(t),fg.delete(t),ag.delete(t),sg.delete(t)};X.sync=t=>{sp=!0,X.batchedUpdates(t),sp=!1};X.throttle=t=>{let e;function n(){try{t(...e)}finally{e=null}}function r(...i){e=i,X.onStart(n)}return r.handler=t,r.cancel=()=>{Yd.delete(n),e=null},r};var ug=typeof window<"u"?window.requestAnimationFrame:()=>{};X.use=t=>ug=t;X.now=typeof performance<"u"?()=>performance.now():Date.now;X.batchedUpdates=t=>t();X.catch=console.error;X.frameLoop="always";X.advance=()=>{X.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Cb()};var ti=-1,ni=0,sp=!1;function zu(t,e){sp?(e.delete(t),t(0)):(e.add(t),Ib())}function Ib(){ti<0&&(ti=0,X.frameLoop!=="demand"&&ug(Sb))}function f7(){ti=-1}function Sb(){~ti&&(ug(Sb),X.batchedUpdates(Cb))}function Cb(){let t=ti;ti=X.now();let e=_b(ti);if(e&&(Tb(As.splice(0,e),n=>n.handler()),ni-=e),!ni){f7();return}Yd.flush(),ag.flush(t?Math.min(64,ti-t):16.667),og.flush(),sg.flush(),fg.flush()}function Bu(){let t=new Set,e=t;return{add(n){ni+=e==t&&!t.has(n)?1:0,t.add(n)},delete(n){return ni-=e==t&&t.has(n)?1:0,t.delete(n)},flush(n){e.size&&(t=new Set,ni-=e.size,Tb(e,r=>r(n)&&t.add(r)),ni+=t.size,e=t)}}}function Tb(t,e){t.forEach(n=>{try{e(n)}catch(r){X.catch(r)}})}var u7=Object.defineProperty,l7=(t,e)=>{for(var n in e)u7(t,n,{get:e[n],enumerable:!0})},Bn={};l7(Bn,{assign:()=>d7,colors:()=>hi,createStringInterpolator:()=>cg,skipAnimation:()=>Ab,to:()=>xb,willAdvance:()=>dg});function op(){}var c7=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),N={arr:Array.isArray,obj:t=>!!t&&t.constructor.name==="Object",fun:t=>typeof t=="function",str:t=>typeof t=="string",num:t=>typeof t=="number",und:t=>t===void 0};function yr(t,e){if(N.arr(t)){if(!N.arr(e)||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}return t===e}var ee=(t,e)=>t.forEach(e);function cr(t,e,n){if(N.arr(t)){for(let r=0;r<t.length;r++)e.call(n,t[r],`${r}`);return}for(let r in t)t.hasOwnProperty(r)&&e.call(n,t[r],r)}var At=t=>N.und(t)?[]:N.arr(t)?t:[t];function Ef(t,e){if(t.size){let n=Array.from(t);t.clear(),ee(n,e)}}var af=(t,...e)=>Ef(t,n=>n(...e)),lg=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),cg,xb,hi=null,Ab=!1,dg=op,d7=t=>{t.to&&(xb=t.to),t.now&&(X.now=t.now),t.colors!==void 0&&(hi=t.colors),t.skipAnimation!=null&&(Ab=t.skipAnimation),t.createStringInterpolator&&(cg=t.createStringInterpolator),t.requestAnimationFrame&&X.use(t.requestAnimationFrame),t.batchedUpdates&&(X.batchedUpdates=t.batchedUpdates),t.willAdvance&&(dg=t.willAdvance),t.frameLoop&&(X.frameLoop=t.frameLoop)},_f=new Set,bn=[],Oh=[],Yc=0,Xd={get idle(){return!_f.size&&!bn.length},start(t){Yc>t.priority?(_f.add(t),X.onStart(h7)):(Rb(t),X(fp))},advance:fp,sort(t){if(Yc)X.onFrame(()=>Xd.sort(t));else{let e=bn.indexOf(t);~e&&(bn.splice(e,1),Nb(t))}},clear(){bn=[],_f.clear()}};function h7(){_f.forEach(Rb),_f.clear(),X(fp)}function Rb(t){bn.includes(t)||Nb(t)}function Nb(t){bn.splice(p7(bn,e=>e.priority>t.priority),0,t)}function fp(t){let e=Oh;for(let n=0;n<bn.length;n++){let r=bn[n];Yc=r.priority,r.idle||(dg(r),r.advance(t),r.idle||e.push(r))}return Yc=0,Oh=bn,Oh.length=0,bn=e,bn.length>0}function p7(t,e){let n=t.findIndex(e);return n<0?t.length:n}var m7=(t,e,n)=>Math.min(Math.max(n,t),e),g7={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},On="[-+]?\\d*\\.?\\d+",Xc=On+"%";function Jd(...t){return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}var v7=new RegExp("rgb"+Jd(On,On,On)),y7=new RegExp("rgba"+Jd(On,On,On,On)),w7=new RegExp("hsl"+Jd(On,Xc,Xc)),b7=new RegExp("hsla"+Jd(On,Xc,Xc,On)),k7=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,E7=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,_7=/^#([0-9a-fA-F]{6})$/,I7=/^#([0-9a-fA-F]{8})$/;function S7(t){let e;return typeof t=="number"?t>>>0===t&&t>=0&&t<=4294967295?t:null:(e=_7.exec(t))?parseInt(e[1]+"ff",16)>>>0:hi&&hi[t]!==void 0?hi[t]:(e=v7.exec(t))?(Za(e[1])<<24|Za(e[2])<<16|Za(e[3])<<8|255)>>>0:(e=y7.exec(t))?(Za(e[1])<<24|Za(e[2])<<16|Za(e[3])<<8|Fv(e[4]))>>>0:(e=k7.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+"ff",16)>>>0:(e=I7.exec(t))?parseInt(e[1],16)>>>0:(e=E7.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+e[4]+e[4],16)>>>0:(e=w7.exec(t))?(Ov($v(e[1]),Ul(e[2]),Ul(e[3]))|255)>>>0:(e=b7.exec(t))?(Ov($v(e[1]),Ul(e[2]),Ul(e[3]))|Fv(e[4]))>>>0:null}function $h(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Ov(t,e,n){let r=n<.5?n*(1+e):n+e-n*e,i=2*n-r,a=$h(i,r,t+1/3),s=$h(i,r,t),o=$h(i,r,t-1/3);return Math.round(a*255)<<24|Math.round(s*255)<<16|Math.round(o*255)<<8}function Za(t){let e=parseInt(t,10);return e<0?0:e>255?255:e}function $v(t){return(parseFloat(t)%360+360)%360/360}function Fv(t){let e=parseFloat(t);return e<0?0:e>1?255:Math.round(e*255)}function Ul(t){let e=parseFloat(t);return e<0?0:e>100?1:e/100}function jv(t){let e=S7(t);if(e===null)return t;e=e||0;let n=(e&4278190080)>>>24,r=(e&16711680)>>>16,i=(e&65280)>>>8,a=(e&255)/255;return`rgba(${n}, ${r}, ${i}, ${a})`}var eu=(t,e,n)=>{if(N.fun(t))return t;if(N.arr(t))return eu({range:t,output:e,extrapolate:n});if(N.str(t.output[0]))return cg(t);let r=t,i=r.output,a=r.range||[0,1],s=r.extrapolateLeft||r.extrapolate||"extend",o=r.extrapolateRight||r.extrapolate||"extend",f=r.easing||(u=>u);return u=>{let l=T7(u,a);return C7(u,a[l],a[l+1],i[l],i[l+1],f,s,o,r.map)}};function C7(t,e,n,r,i,a,s,o,f){let u=f?f(t):t;if(u<e){if(s==="identity")return u;s==="clamp"&&(u=e)}if(u>n){if(o==="identity")return u;o==="clamp"&&(u=n)}return r===i?r:e===n?t<=e?r:i:(e===-1/0?u=-u:n===1/0?u=u-e:u=(u-e)/(n-e),u=a(u),r===-1/0?u=-u:i===1/0?u=u+r:u=u*(i-r)+r,u)}function T7(t,e){for(var n=1;n<e.length-1&&!(e[n]>=t);++n);return n-1}var x7=(t,e="end")=>n=>{n=e==="end"?Math.min(n,.999):Math.max(n,.001);let r=n*t,i=e==="end"?Math.floor(r):Math.ceil(r);return m7(0,1,i/t)},Jc=1.70158,Vl=Jc*1.525,Uv=Jc+1,Vv=2*Math.PI/3,zv=2*Math.PI/4.5,zl=t=>t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,A7={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>1-(1-t)*(1-t),easeInOutQuad:t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,easeInCubic:t=>t*t*t,easeOutCubic:t=>1-Math.pow(1-t,3),easeInOutCubic:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,easeInQuart:t=>t*t*t*t,easeOutQuart:t=>1-Math.pow(1-t,4),easeInOutQuart:t=>t<.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2,easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>1-Math.pow(1-t,5),easeInOutQuint:t=>t<.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2,easeInSine:t=>1-Math.cos(t*Math.PI/2),easeOutSine:t=>Math.sin(t*Math.PI/2),easeInOutSine:t=>-(Math.cos(Math.PI*t)-1)/2,easeInExpo:t=>t===0?0:Math.pow(2,10*t-10),easeOutExpo:t=>t===1?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>t===0?0:t===1?1:t<.5?Math.pow(2,20*t-10)/2:(2-Math.pow(2,-20*t+10))/2,easeInCirc:t=>1-Math.sqrt(1-Math.pow(t,2)),easeOutCirc:t=>Math.sqrt(1-Math.pow(t-1,2)),easeInOutCirc:t=>t<.5?(1-Math.sqrt(1-Math.pow(2*t,2)))/2:(Math.sqrt(1-Math.pow(-2*t+2,2))+1)/2,easeInBack:t=>Uv*t*t*t-Jc*t*t,easeOutBack:t=>1+Uv*Math.pow(t-1,3)+Jc*Math.pow(t-1,2),easeInOutBack:t=>t<.5?Math.pow(2*t,2)*((Vl+1)*2*t-Vl)/2:(Math.pow(2*t-2,2)*((Vl+1)*(t*2-2)+Vl)+2)/2,easeInElastic:t=>t===0?0:t===1?1:-Math.pow(2,10*t-10)*Math.sin((t*10-10.75)*Vv),easeOutElastic:t=>t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t*10-.75)*Vv)+1,easeInOutElastic:t=>t===0?0:t===1?1:t<.5?-(Math.pow(2,20*t-10)*Math.sin((20*t-11.125)*zv))/2:Math.pow(2,-20*t+10)*Math.sin((20*t-11.125)*zv)/2+1,easeInBounce:t=>1-zl(1-t),easeOutBounce:zl,easeInOutBounce:t=>t<.5?(1-zl(1-2*t))/2:(1+zl(2*t-1))/2,steps:x7},qs=Symbol.for("FluidValue.get"),ka=Symbol.for("FluidValue.observers"),yn=t=>Boolean(t&&t[qs]),Ut=t=>t&&t[qs]?t[qs]():t,Bv=t=>t[ka]||null;function R7(t,e){t.eventObserved?t.eventObserved(e):t(e)}function tu(t,e){let n=t[ka];n&&n.forEach(r=>{R7(r,e)})}var kV,EV,p6,Db=(p6=class{constructor(e){F(this,kV);F(this,EV);if(!e&&!(e=this.get))throw Error("Unknown getter");N7(this,e)}},kV=qs,EV=ka,p6),N7=(t,e)=>Pb(t,qs,e);function po(t,e){if(t[qs]){let n=t[ka];n||Pb(t,ka,n=new Set),n.has(e)||(n.add(e),t.observerAdded&&t.observerAdded(n.size,e))}return e}function nu(t,e){let n=t[ka];if(n&&n.has(e)){let r=n.size-1;r?n.delete(e):t[ka]=null,t.observerRemoved&&t.observerRemoved(r,e)}}var Pb=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),dc=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,D7=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,qv=new RegExp(`(${dc.source})(%|[a-z]+)`,"i"),P7=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Zd=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Mb=t=>{let[e,n]=M7(t);if(!e||lg())return t;let r=window.getComputedStyle(document.documentElement).getPropertyValue(e);return r?r.trim():n&&n.startsWith("--")?window.getComputedStyle(document.documentElement).getPropertyValue(n)||t:n&&Zd.test(n)?Mb(n):n||t},M7=t=>{let e=Zd.exec(t);if(!e)return[,];let[,n,r]=e;return[n,r]},Fh,L7=(t,e,n,r,i)=>`rgba(${Math.round(e)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Lb=t=>{Fh||(Fh=hi?new RegExp(`(${Object.keys(hi).join("|")})(?!\\w)`,"g"):/^\b$/);let e=t.output.map(i=>Ut(i).replace(Zd,Mb).replace(D7,jv).replace(Fh,jv)),n=e.map(i=>i.match(dc).map(Number)),r=n[0].map((i,a)=>n.map(s=>{if(!(a in s))throw Error('The arity of each "output" value must be equal');return s[a]})).map(i=>eu({...t,output:i}));return i=>{var o;let a=!qv.test(e[0])&&((o=e.find(f=>qv.test(f)))==null?void 0:o.replace(dc,"")),s=0;return e[0].replace(dc,()=>`${r[s++](i)}${a||""}`).replace(P7,L7)}},hg="react-spring: ",Ob=t=>{let e=t,n=!1;if(typeof e!="function")throw new TypeError(`${hg}once requires a function parameter`);return(...r)=>{n||(e(...r),n=!0)}},O7=Ob(console.warn);function $7(){O7(`${hg}The "interpolate" function is deprecated in v9 (use "to" instead)`)}var F7=Ob(console.warn);function j7(){F7(`${hg}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function e1(t){return N.str(t)&&(t[0]=="#"||/\d/.test(t)||!lg()&&Zd.test(t)||t in(hi||{}))}var bs=lg()?y.useEffect:y.useLayoutEffect,U7=()=>{let t=y.useRef(!1);return bs(()=>(t.current=!0,()=>{t.current=!1}),[]),t};function $b(){let t=y.useState()[1],e=U7();return()=>{e.current&&t(Math.random())}}function V7(t,e){let[n]=y.useState(()=>({inputs:e,result:t()})),r=y.useRef(),i=r.current,a=i;return a?Boolean(e&&a.inputs&&z7(e,a.inputs))||(a={inputs:e,result:t()}):a=n,y.useEffect(()=>{r.current=a,i==n&&(n.inputs=n.result=void 0)},[a]),a.result}function z7(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}var Fb=t=>y.useEffect(t,B7),B7=[];function q7(t){let e=y.useRef();return y.useEffect(()=>{e.current=t}),e.current}var ru=Symbol.for("Animated:node"),H7=t=>!!t&&t[ru]===t,Qn=t=>t&&t[ru],pg=(t,e)=>c7(t,ru,e),t1=t=>t&&t[ru]&&t[ru].getPayload(),jb=class{constructor(){F(this,"payload");pg(this,this)}getPayload(){return this.payload||[]}},qu=class extends jb{constructor(n){super();F(this,"done",!0);F(this,"elapsedTime");F(this,"lastPosition");F(this,"lastVelocity");F(this,"v0");F(this,"durationProgress",0);this._value=n,N.num(this._value)&&(this.lastPosition=this._value)}static create(n){return new qu(n)}getPayload(){return[this]}getValue(){return this._value}setValue(n,r){return N.num(n)&&(this.lastPosition=n,r&&(n=Math.round(n/r)*r,this.done&&(this.lastPosition=n))),this._value===n?!1:(this._value=n,!0)}reset(){let{done:n}=this;this.done=!1,N.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,n&&(this.lastVelocity=null),this.v0=null)}},iu=class extends qu{constructor(e){super(0);F(this,"_string",null);F(this,"_toString");this._toString=eu({output:[e,e]})}static create(e){return new iu(e)}getValue(){return this._string??(this._string=this._toString(this._value))}setValue(e){if(N.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else if(super.setValue(e))this._string=null;else return!1;return!0}reset(e){e&&(this._toString=eu({output:[this.getValue(),e]})),this._value=0,super.reset()}},Zc={dependencies:null},n1=class extends jb{constructor(t){super(),this.source=t,this.setValue(t)}getValue(t){let e={};return cr(this.source,(n,r)=>{H7(n)?e[r]=n.getValue(t):yn(n)?e[r]=Ut(n):t||(e[r]=n)}),e}setValue(t){this.source=t,this.payload=this._makePayload(t)}reset(){this.payload&&ee(this.payload,t=>t.reset())}_makePayload(t){if(t){let e=new Set;return cr(t,this._addToPayload,e),Array.from(e)}}_addToPayload(t){Zc.dependencies&&yn(t)&&Zc.dependencies.add(t);let e=t1(t);e&&ee(e,n=>this.add(n))}},Ub=class extends n1{constructor(e){super(e)}static create(e){return new Ub(e)}getValue(){return this.source.map(e=>e.getValue())}setValue(e){let n=this.getPayload();return e.length==n.length?n.map((r,i)=>r.setValue(e[i])).some(Boolean):(super.setValue(e.map(W7)),!0)}};function W7(t){return(e1(t)?iu:qu).create(t)}function up(t){let e=Qn(t);return e?e.constructor:N.arr(t)?Ub:e1(t)?iu:qu}var Hv=(t,e)=>{let n=!N.fun(t)||t.prototype&&t.prototype.isReactComponent;return y.forwardRef((r,i)=>{let a=y.useRef(null),s=n&&y.useCallback(m=>{a.current=Q7(i,m)},[i]),[o,f]=K7(r,e),u=$b(),l=()=>{let m=a.current;n&&!m||(m?e.applyAnimatedValues(m,o.getValue(!0)):!1)===!1&&u()},c=new G7(l,f),d=y.useRef();bs(()=>(d.current=c,ee(f,m=>po(m,c)),()=>{d.current&&(ee(d.current.deps,m=>nu(m,d.current)),X.cancel(d.current.update))})),y.useEffect(l,[]),Fb(()=>()=>{let m=d.current;ee(m.deps,w=>nu(w,m))});let h=e.getComponentProps(o.getValue());return y.createElement(t,{...h,ref:s})})},G7=class{constructor(e,n){this.update=e,this.deps=n}eventObserved(e){e.type=="change"&&X.write(this.update)}};function K7(t,e){let n=new Set;return Zc.dependencies=n,t.style&&(t={...t,style:e.createAnimatedStyle(t.style)}),t=new n1(t),Zc.dependencies=null,[t,n]}function Q7(t,e){return t&&(N.fun(t)?t(e):t.current=e),e}var Wv=Symbol.for("AnimatedComponent"),Y7=(t,{applyAnimatedValues:e=()=>!1,createAnimatedStyle:n=i=>new n1(i),getComponentProps:r=i=>i}={})=>{let i={applyAnimatedValues:e,createAnimatedStyle:n,getComponentProps:r},a=s=>{let o=Gv(s)||"Anonymous";return N.str(s)?s=a[s]||(a[s]=Hv(s,i)):s=s[Wv]||(s[Wv]=Hv(s,i)),s.displayName=`Animated(${o})`,s};return cr(t,(s,o)=>{N.arr(t)&&(o=Gv(s)),a[o]=a(s)}),{animated:a}},Gv=t=>N.str(t)?t:t&&N.str(t.displayName)?t.displayName:N.fun(t)&&t.name||null;function Vt(t,...e){return N.fun(t)?t(...e):t}var If=(t,e)=>t===!0||!!(e&&t&&(N.fun(t)?t(e):At(t).includes(e))),Vb=(t,e)=>N.obj(t)?e&&t[e]:t,zb=(t,e)=>t.default===!0?t[e]:t.default?t.default[e]:void 0,X7=t=>t,mg=(t,e=X7)=>{let n=J7;t.default&&t.default!==!0&&(t=t.default,n=Object.keys(t));let r={};for(let i of n){let a=e(t[i],i);N.und(a)||(r[i]=a)}return r},J7=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Z7={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function eC(t){let e={},n=0;if(cr(t,(r,i)=>{Z7[i]||(e[i]=r,n++)}),n)return e}function gg(t){let e=eC(t);if(e){let n={to:e};return cr(t,(r,i)=>i in e||(n[i]=r)),n}return{...t}}function au(t){return t=Ut(t),N.arr(t)?t.map(au):e1(t)?Bn.createStringInterpolator({range:[0,1],output:[t,t]})(1):t}function tC(t){for(let e in t)return!0;return!1}function lp(t){return N.fun(t)||N.arr(t)&&N.obj(t[0])}function Kv(t,e){var n;(n=t.ref)==null||n.delete(t),e==null||e.delete(t)}function nC(t,e){var n;e&&t.ref!==e&&((n=t.ref)==null||n.delete(t),e.add(t),t.ref=e)}var rC={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},cp={...rC.default,mass:1,damping:1,easing:A7.linear,clamp:!1},iC=class{constructor(){F(this,"tension");F(this,"friction");F(this,"frequency");F(this,"damping");F(this,"mass");F(this,"velocity",0);F(this,"restVelocity");F(this,"precision");F(this,"progress");F(this,"duration");F(this,"easing");F(this,"clamp");F(this,"bounce");F(this,"decay");F(this,"round");Object.assign(this,cp)}};function aC(t,e,n){n&&(n={...n},Qv(n,e),e={...n,...e}),Qv(t,e),Object.assign(t,e);for(let s in cp)t[s]==null&&(t[s]=cp[s]);let{mass:r,frequency:i,damping:a}=t;return N.und(i)||(i<.01&&(i=.01),a<0&&(a=0),t.tension=Math.pow(2*Math.PI/i,2)*r,t.friction=4*Math.PI*a*r/i),t}function Qv(t,e){if(!N.und(e.decay))t.duration=void 0;else{let n=!N.und(e.tension)||!N.und(e.friction);(n||!N.und(e.frequency)||!N.und(e.damping)||!N.und(e.mass))&&(t.duration=void 0,t.decay=void 0),n&&(t.frequency=void 0)}}var Yv=[],sC=class{constructor(){F(this,"changed",!1);F(this,"values",Yv);F(this,"toValues",null);F(this,"fromValues",Yv);F(this,"to");F(this,"from");F(this,"config",new iC);F(this,"immediate",!1)}};function Bb(t,{key:e,props:n,defaultProps:r,state:i,actions:a}){return new Promise((s,o)=>{let f,u,l=If(n.cancel??(r==null?void 0:r.cancel),e);if(l)h();else{N.und(n.pause)||(i.paused=If(n.pause,e));let m=r==null?void 0:r.pause;m!==!0&&(m=i.paused||If(m,e)),f=Vt(n.delay||0,e),m?(i.resumeQueue.add(d),a.pause()):(a.resume(),d())}function c(){i.resumeQueue.add(d),i.timeouts.delete(u),u.cancel(),f=u.time-X.now()}function d(){f>0&&!Bn.skipAnimation?(i.delayed=!0,u=X.setTimeout(h,f),i.pauseQueue.add(c),i.timeouts.add(u)):h()}function h(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(c),i.timeouts.delete(u),t<=(i.cancelId||0)&&(l=!0);try{a.start({...n,callId:t,cancel:l},s)}catch(m){o(m)}}})}var vg=(t,e)=>e.length==1?e[0]:e.some(n=>n.cancelled)?Rs(t.get()):e.every(n=>n.noop)?qb(t.get()):Pn(t.get(),e.every(n=>n.finished)),qb=t=>({value:t,noop:!0,finished:!0,cancelled:!1}),Pn=(t,e,n=!1)=>({value:t,finished:e,cancelled:n}),Rs=t=>({value:t,cancelled:!0,finished:!1});function Hb(t,e,n,r){let{callId:i,parentId:a,onRest:s}=e,{asyncTo:o,promise:f}=n;return!a&&t===o&&!e.reset?f:n.promise=(async()=>{n.asyncId=i,n.asyncTo=t;let u=mg(e,(E,g)=>g==="onRest"?void 0:E),l,c,d=new Promise((E,g)=>(l=E,c=g)),h=E=>{let g=i<=(n.cancelId||0)&&Rs(r)||i!==n.asyncId&&Pn(r,!1);if(g)throw E.result=g,c(E),E},m=(E,g)=>{let p=new Xv,v=new Jv;return(async()=>{if(Bn.skipAnimation)throw su(n),v.result=Pn(r,!1),c(v),v;h(p);let b=N.obj(E)?{...E}:{...g,to:E};b.parentId=i,cr(u,(C,x)=>{N.und(b[x])&&(b[x]=C)});let S=await r.start(b);return h(p),n.paused&&await new Promise(C=>{n.resumeQueue.add(C)}),S})()},w;if(Bn.skipAnimation)return su(n),Pn(r,!1);try{let E;N.arr(t)?E=(async g=>{for(let p of g)await m(p)})(t):E=Promise.resolve(t(m,r.stop.bind(r))),await Promise.all([E.then(l),d]),w=Pn(r.get(),!0,!1)}catch(E){if(E instanceof Xv)w=E.result;else if(E instanceof Jv)w=E.result;else throw E}finally{i==n.asyncId&&(n.asyncId=a,n.asyncTo=a?o:void 0,n.promise=a?f:void 0)}return N.fun(s)&&X.batchedUpdates(()=>{s(w,r,r.item)}),w})()}function su(t,e){Ef(t.timeouts,n=>n.cancel()),t.pauseQueue.clear(),t.resumeQueue.clear(),t.asyncId=t.asyncTo=t.promise=void 0,e&&(t.cancelId=e)}var Xv=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");F(this,"result")}},Jv=class extends Error{constructor(){super("SkipAnimationSignal");F(this,"result")}},dp=t=>t instanceof yg,oC=1,yg=class extends Db{constructor(){super(...arguments);F(this,"id",oC++);F(this,"_priority",0)}get priority(){return this._priority}set priority(n){this._priority!=n&&(this._priority=n,this._onPriorityChange(n))}get(){let n=Qn(this);return n&&n.getValue()}to(...n){return Bn.to(this,n)}interpolate(...n){return $7(),Bn.to(this,n)}toJSON(){return this.get()}observerAdded(n){n==1&&this._attach()}observerRemoved(n){n==0&&this._detach()}_attach(){}_detach(){}_onChange(n,r=!1){tu(this,{type:"change",parent:this,value:n,idle:r})}_onPriorityChange(n){this.idle||Xd.sort(this),tu(this,{type:"priority",parent:this,priority:n})}},Ea=Symbol.for("SpringPhase"),Wb=1,hp=2,pp=4,jh=t=>(t[Ea]&Wb)>0,zr=t=>(t[Ea]&hp)>0,Uo=t=>(t[Ea]&pp)>0,Zv=(t,e)=>e?t[Ea]|=hp|Wb:t[Ea]&=~hp,ey=(t,e)=>e?t[Ea]|=pp:t[Ea]&=~pp,fC=class extends yg{constructor(n,r){super();F(this,"key");F(this,"animation",new sC);F(this,"queue");F(this,"defaultProps",{});F(this,"_state",{paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set});F(this,"_pendingCalls",new Set);F(this,"_lastCallId",0);F(this,"_lastToId",0);F(this,"_memoizedDuration",0);if(!N.und(n)||!N.und(r)){let i=N.obj(n)?{...n}:{...r,from:n};N.und(i.default)&&(i.default=!0),this.start(i)}}get idle(){return!(zr(this)||this._state.asyncTo)||Uo(this)}get goal(){return Ut(this.animation.to)}get velocity(){let n=Qn(this);return n instanceof qu?n.lastVelocity||0:n.getPayload().map(r=>r.lastVelocity||0)}get hasAnimated(){return jh(this)}get isAnimating(){return zr(this)}get isPaused(){return Uo(this)}get isDelayed(){return this._state.delayed}advance(n){let r=!0,i=!1,a=this.animation,{config:s,toValues:o}=a,f=t1(a.to);!f&&yn(a.to)&&(o=At(Ut(a.to))),a.values.forEach((c,d)=>{if(c.done)return;let h=c.constructor==iu?1:f?f[d].lastPosition:o[d],m=a.immediate,w=h;if(!m){if(w=c.lastPosition,s.tension<=0){c.done=!0;return}let E=c.elapsedTime+=n,g=a.fromValues[d],p=c.v0!=null?c.v0:c.v0=N.arr(s.velocity)?s.velocity[d]:s.velocity,v,b=s.precision||(g==h?.005:Math.min(1,Math.abs(h-g)*.001));if(N.und(s.duration))if(s.decay){let S=s.decay===!0?.998:s.decay,C=Math.exp(-(1-S)*E);w=g+p/(1-S)*(1-C),m=Math.abs(c.lastPosition-w)<=b,v=p*C}else{v=c.lastVelocity==null?p:c.lastVelocity;let S=s.restVelocity||b/10,C=s.clamp?0:s.bounce,x=!N.und(C),P=g==h?c.v0>0:g<h,q,H=!1,he=1,$t=Math.ceil(n/he);for(let ze=0;ze<$t&&(q=Math.abs(v)>S,!(!q&&(m=Math.abs(h-w)<=b,m)));++ze){x&&(H=w==h||w>h==P,H&&(v=-v*C,w=h));let G=-s.tension*1e-6*(w-h),Y=-s.friction*.001*v,$e=(G+Y)/s.mass;v=v+$e*he,w=w+v*he}}else{let S=1;s.duration>0&&(this._memoizedDuration!==s.duration&&(this._memoizedDuration=s.duration,c.durationProgress>0&&(c.elapsedTime=s.duration*c.durationProgress,E=c.elapsedTime+=n)),S=(s.progress||0)+E/this._memoizedDuration,S=S>1?1:S<0?0:S,c.durationProgress=S),w=g+s.easing(S)*(h-g),v=(w-c.lastPosition)/n,m=S==1}c.lastVelocity=v,Number.isNaN(w)&&(console.warn("Got NaN while animating:",this),m=!0)}f&&!f[d].done&&(m=!1),m?c.done=!0:r=!1,c.setValue(w,s.round)&&(i=!0)});let u=Qn(this),l=u.getValue();if(r){let c=Ut(a.to);(l!==c||i)&&!s.decay?(u.setValue(c),this._onChange(c)):i&&s.decay&&this._onChange(l),this._stop()}else i&&this._onChange(l)}set(n){return X.batchedUpdates(()=>{this._stop(),this._focus(n),this._set(n)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(zr(this)){let{to:n,config:r}=this.animation;X.batchedUpdates(()=>{this._onStart(),r.decay||this._set(n,!1),this._stop()})}return this}update(n){return(this.queue||(this.queue=[])).push(n),this}start(n,r){let i;return N.und(n)?(i=this.queue||[],this.queue=[]):i=[N.obj(n)?n:{...r,to:n}],Promise.all(i.map(a=>this._update(a))).then(a=>vg(this,a))}stop(n){let{to:r}=this.animation;return this._focus(this.get()),su(this._state,n&&this._lastCallId),X.batchedUpdates(()=>this._stop(r,n)),this}reset(){this._update({reset:!0})}eventObserved(n){n.type=="change"?this._start():n.type=="priority"&&(this.priority=n.priority+1)}_prepareNode(n){let r=this.key||"",{to:i,from:a}=n;i=N.obj(i)?i[r]:i,(i==null||lp(i))&&(i=void 0),a=N.obj(a)?a[r]:a,a==null&&(a=void 0);let s={to:i,from:a};return jh(this)||(n.reverse&&([i,a]=[a,i]),a=Ut(a),N.und(a)?Qn(this)||this._set(i):this._set(a)),s}_update({...n},r){let{key:i,defaultProps:a}=this;n.default&&Object.assign(a,mg(n,(f,u)=>/^on/.test(u)?Vb(f,i):f)),ny(this,n,"onProps"),zo(this,"onProps",n,this);let s=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");let o=this._state;return Bb(++this._lastCallId,{key:i,props:n,defaultProps:a,state:o,actions:{pause:()=>{Uo(this)||(ey(this,!0),af(o.pauseQueue),zo(this,"onPause",Pn(this,Vo(this,this.animation.to)),this))},resume:()=>{Uo(this)&&(ey(this,!1),zr(this)&&this._resume(),af(o.resumeQueue),zo(this,"onResume",Pn(this,Vo(this,this.animation.to)),this))},start:this._merge.bind(this,s)}}).then(f=>{if(n.loop&&f.finished&&!(r&&f.noop)){let u=Gb(n);if(u)return this._update(u,!0)}return f})}_merge(n,r,i){if(r.cancel)return this.stop(!0),i(Rs(this));let a=!N.und(n.to),s=!N.und(n.from);if(a||s)if(r.callId>this._lastToId)this._lastToId=r.callId;else return i(Rs(this));let{key:o,defaultProps:f,animation:u}=this,{to:l,from:c}=u,{to:d=l,from:h=c}=n;s&&!a&&(!r.default||N.und(d))&&(d=h),r.reverse&&([d,h]=[h,d]);let m=!yr(h,c);m&&(u.from=h),h=Ut(h);let w=!yr(d,l);w&&this._focus(d);let E=lp(r.to),{config:g}=u,{decay:p,velocity:v}=g;(a||s)&&(g.velocity=0),r.config&&!E&&aC(g,Vt(r.config,o),r.config!==f.config?Vt(f.config,o):void 0);let b=Qn(this);if(!b||N.und(d))return i(Pn(this,!0));let S=N.und(r.reset)?s&&!r.default:!N.und(h)&&If(r.reset,o),C=S?h:this.get(),x=au(d),P=N.num(x)||N.arr(x)||e1(x),q=!E&&(!P||If(f.immediate||r.immediate,o));if(w){let ze=up(d);if(ze!==b.constructor)if(q)b=this._set(x);else throw Error(`Cannot animate between ${b.constructor.name} and ${ze.name}, as the "to" prop suggests`)}let H=b.constructor,he=yn(d),$t=!1;if(!he){let ze=S||!jh(this)&&m;(w||ze)&&($t=yr(au(C),x),he=!$t),(!yr(u.immediate,q)&&!q||!yr(g.decay,p)||!yr(g.velocity,v))&&(he=!0)}if($t&&zr(this)&&(u.changed&&!S?he=!0:he||this._stop(l)),!E&&((he||yn(l))&&(u.values=b.getPayload(),u.toValues=yn(d)?null:H==iu?[1]:At(x)),u.immediate!=q&&(u.immediate=q,!q&&!S&&this._set(l)),he)){let{onRest:ze}=u;ee(uC,Y=>ny(this,r,Y));let G=Pn(this,Vo(this,l));af(this._pendingCalls,G),this._pendingCalls.add(i),u.changed&&X.batchedUpdates(()=>{var Y;u.changed=!S,ze==null||ze(G,this),S?Vt(f.onRest,G):(Y=u.onStart)==null||Y.call(u,G,this)})}S&&this._set(C),E?i(Hb(r.to,r,this._state,this)):he?this._start():zr(this)&&!w?this._pendingCalls.add(i):i(qb(C))}_focus(n){let r=this.animation;n!==r.to&&(Bv(this)&&this._detach(),r.to=n,Bv(this)&&this._attach())}_attach(){let n=0,{to:r}=this.animation;yn(r)&&(po(r,this),dp(r)&&(n=r.priority+1)),this.priority=n}_detach(){let{to:n}=this.animation;yn(n)&&nu(n,this)}_set(n,r=!0){let i=Ut(n);if(!N.und(i)){let a=Qn(this);if(!a||!yr(i,a.getValue())){let s=up(i);!a||a.constructor!=s?pg(this,s.create(i)):a.setValue(i),a&&X.batchedUpdates(()=>{this._onChange(i,r)})}}return Qn(this)}_onStart(){let n=this.animation;n.changed||(n.changed=!0,zo(this,"onStart",Pn(this,Vo(this,n.to)),this))}_onChange(n,r){r||(this._onStart(),Vt(this.animation.onChange,n,this)),Vt(this.defaultProps.onChange,n,this),super._onChange(n,r)}_start(){let n=this.animation;Qn(this).reset(Ut(n.to)),n.immediate||(n.fromValues=n.values.map(r=>r.lastPosition)),zr(this)||(Zv(this,!0),Uo(this)||this._resume())}_resume(){Bn.skipAnimation?this.finish():Xd.start(this)}_stop(n,r){if(zr(this)){Zv(this,!1);let i=this.animation;ee(i.values,s=>{s.done=!0}),i.toValues&&(i.onChange=i.onPause=i.onResume=void 0),tu(this,{type:"idle",parent:this});let a=r?Rs(this.get()):Pn(this.get(),Vo(this,n??i.to));af(this._pendingCalls,a),i.changed&&(i.changed=!1,zo(this,"onRest",a,this))}}};function Vo(t,e){let n=au(e),r=au(t.get());return yr(r,n)}function Gb(t,e=t.loop,n=t.to){let r=Vt(e);if(r){let i=r!==!0&&gg(r),a=(i||t).reverse,s=!i||i.reset;return ed({...t,loop:e,default:!1,pause:void 0,to:!a||lp(n)?n:void 0,from:s?t.from:void 0,reset:s,...i})}}function ed(t){let{to:e,from:n}=t=gg(t),r=new Set;return N.obj(e)&&ty(e,r),N.obj(n)&&ty(n,r),t.keys=r.size?Array.from(r):null,t}function ty(t,e){cr(t,(n,r)=>n!=null&&e.add(r))}var uC=["onStart","onRest","onChange","onPause","onResume"];function ny(t,e,n){t.animation[n]=e[n]!==zb(e,n)?Vb(e[n],t.key):void 0}function zo(t,e,...n){var r,i,a,s;(i=(r=t.animation)[e])==null||i.call(r,...n),(s=(a=t.defaultProps)[e])==null||s.call(a,...n)}var lC=["onStart","onChange","onRest"],cC=1,dC=class{constructor(e,n){F(this,"id",cC++);F(this,"springs",{});F(this,"queue",[]);F(this,"ref");F(this,"_flush");F(this,"_initialProps");F(this,"_lastAsyncId",0);F(this,"_active",new Set);F(this,"_changed",new Set);F(this,"_started",!1);F(this,"_item");F(this,"_state",{paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set});F(this,"_events",{onStart:new Map,onChange:new Map,onRest:new Map});this._onFrame=this._onFrame.bind(this),n&&(this._flush=n),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(e=>e.idle&&!e.isDelayed&&!e.isPaused)}get item(){return this._item}set item(e){this._item=e}get(){let e={};return this.each((n,r)=>e[r]=n.get()),e}set(e){for(let n in e){let r=e[n];N.und(r)||this.springs[n].set(r)}}update(e){return e&&this.queue.push(ed(e)),this}start(e){let{queue:n}=this;return e?n=At(e).map(ed):this.queue=[],this._flush?this._flush(this,n):(Xb(this,n),hC(this,n))}stop(e,n){if(e!==!!e&&(n=e),n){let r=this.springs;ee(At(n),i=>r[i].stop(!!e))}else su(this._state,this._lastAsyncId),this.each(r=>r.stop(!!e));return this}pause(e){if(N.und(e))this.start({pause:!0});else{let n=this.springs;ee(At(e),r=>n[r].pause())}return this}resume(e){if(N.und(e))this.start({pause:!1});else{let n=this.springs;ee(At(e),r=>n[r].resume())}return this}each(e){cr(this.springs,e)}_onFrame(){let{onStart:e,onChange:n,onRest:r}=this._events,i=this._active.size>0,a=this._changed.size>0;(i&&!this._started||a&&!this._started)&&(this._started=!0,Ef(e,([f,u])=>{u.value=this.get(),f(u,this,this._item)}));let s=!i&&this._started,o=a||s&&r.size?this.get():null;a&&n.size&&Ef(n,([f,u])=>{u.value=o,f(u,this,this._item)}),s&&(this._started=!1,Ef(r,([f,u])=>{u.value=o,f(u,this,this._item)}))}eventObserved(e){if(e.type=="change")this._changed.add(e.parent),e.idle||this._active.add(e.parent);else if(e.type=="idle")this._active.delete(e.parent);else return;X.onFrame(this._onFrame)}};function hC(t,e){return Promise.all(e.map(n=>Kb(t,n))).then(n=>vg(t,n))}async function Kb(t,e,n){let{keys:r,to:i,from:a,loop:s,onRest:o,onResolve:f}=e,u=N.obj(e.default)&&e.default;s&&(e.loop=!1),i===!1&&(e.to=null),a===!1&&(e.from=null);let l=N.arr(i)||N.fun(i)?i:void 0;l?(e.to=void 0,e.onRest=void 0,u&&(u.onRest=void 0)):ee(lC,w=>{let E=e[w];if(N.fun(E)){let g=t._events[w];e[w]=({finished:p,cancelled:v})=>{let b=g.get(E);b?(p||(b.finished=!1),v&&(b.cancelled=!0)):g.set(E,{value:null,finished:p||!1,cancelled:v||!1})},u&&(u[w]=e[w])}});let c=t._state;e.pause===!c.paused?(c.paused=e.pause,af(e.pause?c.pauseQueue:c.resumeQueue)):c.paused&&(e.pause=!0);let d=(r||Object.keys(t.springs)).map(w=>t.springs[w].start(e)),h=e.cancel===!0||zb(e,"cancel")===!0;(l||h&&c.asyncId)&&d.push(Bb(++t._lastAsyncId,{props:e,state:c,actions:{pause:op,resume:op,start(w,E){h?(su(c,t._lastAsyncId),E(Rs(t))):(w.onRest=o,E(Hb(l,w,c,t)))}}})),c.paused&&await new Promise(w=>{c.resumeQueue.add(w)});let m=vg(t,await Promise.all(d));if(s&&m.finished&&!(n&&m.noop)){let w=Gb(e,s,i);if(w)return Xb(t,[w]),Kb(t,w,!0)}return f&&X.batchedUpdates(()=>f(m,t,t.item)),m}function pC(t,e){let n={...t.springs};return e&&ee(At(e),r=>{N.und(r.keys)&&(r=ed(r)),N.obj(r.to)||(r={...r,to:void 0}),Yb(n,r,i=>Qb(i))}),mC(t,n),n}function mC(t,e){cr(e,(n,r)=>{t.springs[r]||(t.springs[r]=n,po(n,t))})}function Qb(t,e){let n=new fC;return n.key=t,e&&po(n,e),n}function Yb(t,e,n){e.keys&&ee(e.keys,r=>{(t[r]||(t[r]=n(r)))._prepareNode(e)})}function Xb(t,e){ee(e,n=>{Yb(t.springs,n,r=>Qb(r,t))})}var r1=({children:t,...e})=>{let n=y.useContext(td),r=e.pause||!!n.pause,i=e.immediate||!!n.immediate;e=V7(()=>({pause:r,immediate:i}),[r,i]);let{Provider:a}=td;return y.createElement(a,{value:e},t)},td=gC(r1,{});r1.Provider=td.Provider;r1.Consumer=td.Consumer;function gC(t,e){return Object.assign(t,y.createContext(e)),t.Provider._context=t,t.Consumer._context=t,t}var vC=()=>{let t=[],e=function(r){j7();let i=[];return ee(t,(a,s)=>{if(N.und(r))i.push(a.start());else{let o=n(r,a,s);o&&i.push(a.start(o))}}),i};e.current=t,e.add=function(r){t.includes(r)||t.push(r)},e.delete=function(r){let i=t.indexOf(r);~i&&t.splice(i,1)},e.pause=function(){return ee(t,r=>r.pause(...arguments)),this},e.resume=function(){return ee(t,r=>r.resume(...arguments)),this},e.set=function(r){ee(t,(i,a)=>{let s=N.fun(r)?r(a,i):r;s&&i.set(s)})},e.start=function(r){let i=[];return ee(t,(a,s)=>{if(N.und(r))i.push(a.start());else{let o=this._getProps(r,a,s);o&&i.push(a.start(o))}}),i},e.stop=function(){return ee(t,r=>r.stop(...arguments)),this},e.update=function(r){return ee(t,(i,a)=>i.update(this._getProps(r,i,a))),this};let n=function(r,i,a){return N.fun(r)?r(a,i):r};return e._getProps=n,e};function Jb(t,e,n){let r=N.fun(e)&&e,{reset:i,sort:a,trail:s=0,expires:o=!0,exitBeforeEnter:f=!1,onDestroyed:u,ref:l,config:c}=r?r():e,d=y.useMemo(()=>r||arguments.length==3?vC():void 0,[]),h=At(t),m=[],w=y.useRef(null),E=i?null:w.current;bs(()=>{w.current=m}),Fb(()=>(ee(m,G=>{d==null||d.add(G.ctrl),G.ctrl.ref=d}),()=>{ee(w.current,G=>{G.expired&&clearTimeout(G.expirationId),Kv(G.ctrl,d),G.ctrl.stop(!0)})}));let g=wC(h,r?r():e,E),p=i&&w.current||[];bs(()=>ee(p,({ctrl:G,item:Y,key:$e})=>{Kv(G,d),Vt(u,Y,$e)}));let v=[];if(E&&ee(E,(G,Y)=>{G.expired?(clearTimeout(G.expirationId),p.push(G)):(Y=v[Y]=g.indexOf(G.key),~Y&&(m[Y]=G))}),ee(h,(G,Y)=>{m[Y]||(m[Y]={key:g[Y],item:G,phase:"mount",ctrl:new dC},m[Y].ctrl.item=G)}),v.length){let G=-1,{leave:Y}=r?r():e;ee(v,($e,We)=>{let M=E[We];~$e?(G=m.indexOf(M),m[G]={...M,item:h[$e]}):Y&&m.splice(++G,0,M)})}N.fun(a)&&m.sort((G,Y)=>a(G.item,Y.item));let b=-s,S=$b(),C=mg(e),x=new Map,P=y.useRef(new Map),q=y.useRef(!1);ee(m,(G,Y)=>{let $e=G.key,We=G.phase,M=r?r():e,B,K,Ce=Vt(M.delay||0,$e);if(We=="mount")B=M.enter,K="enter";else{let St=g.indexOf($e)<0;if(We!="leave")if(St)B=M.leave,K="leave";else if(B=M.update)K="update";else return;else if(!St)B=M.enter,K="enter";else return}if(B=Vt(B,G.item,Y),B=N.obj(B)?gg(B):{to:B},!B.config){let St=c||C.config;B.config=Vt(St,G.item,Y,K)}b+=s;let me={...C,delay:Ce+b,ref:l,immediate:M.immediate,reset:!1,...B};if(K=="enter"&&N.und(me.from)){let St=r?r():e,Zt=N.und(St.initial)||E?St.from:St.initial;me.from=Vt(Zt,G.item,Y)}let{onResolve:Xa}=me;me.onResolve=St=>{Vt(Xa,St);let Zt=w.current,en=Zt.find(El=>El.key===$e);if(en&&!(St.cancelled&&en.phase!="update")&&en.ctrl.idle){let El=Zt.every(zi=>zi.ctrl.idle);if(en.phase=="leave"){let zi=Vt(o,en.item);if(zi!==!1){let uh=zi===!0?0:zi;if(en.expired=!0,!El&&uh>0){uh<=2147483647&&(en.expirationId=setTimeout(S,uh));return}}}El&&Zt.some(zi=>zi.expired)&&(P.current.delete(en),f&&(q.current=!0),S())}};let Wn=pC(G.ctrl,me);K==="leave"&&f?P.current.set(G,{phase:K,springs:Wn,payload:me}):x.set(G,{phase:K,springs:Wn,payload:me})});let H=y.useContext(r1),he=q7(H),$t=H!==he&&tC(H);bs(()=>{$t&&ee(m,G=>{G.ctrl.start({default:H})})},[H]),ee(x,(G,Y)=>{if(P.current.size){let $e=m.findIndex(We=>We.key===Y.key);m.splice($e,1)}}),bs(()=>{ee(P.current.size?P.current:x,({phase:G,payload:Y},$e)=>{let{ctrl:We}=$e;$e.phase=G,d==null||d.add(We),$t&&G=="enter"&&We.start({default:H}),Y&&(nC(We,Y.ref),(We.ref||d)&&!q.current?We.update(Y):(We.start(Y),q.current&&(q.current=!1)))})},i?void 0:n);let ze=G=>y.createElement(y.Fragment,null,m.map((Y,$e)=>{let{springs:We}=x.get(Y)||Y.ctrl,M=G({...We},Y.item,Y,$e);return M&&M.type?y.createElement(M.type,{...M.props,key:N.str(Y.key)||N.num(Y.key)?Y.key:Y.ctrl.id,ref:M.ref}):M}));return d?[ze,d]:ze}var yC=1;function wC(t,{key:e,keys:n=e},r){if(n===null){let i=new Set;return t.map(a=>{let s=r&&r.find(o=>o.item===a&&o.phase!=="leave"&&!i.has(o));return s?(i.add(s),s.key):yC++})}return N.und(n)?t:N.fun(n)?t.map(n):At(n)}var bC=class extends yg{constructor(n,r){super();F(this,"key");F(this,"idle",!0);F(this,"calc");F(this,"_active",new Set);this.source=n,this.calc=eu(...r);let i=this._get(),a=up(i);pg(this,a.create(i))}advance(n){let r=this._get(),i=this.get();yr(r,i)||(Qn(this).setValue(r),this._onChange(r,this.idle)),!this.idle&&ry(this._active)&&Uh(this)}_get(){let n=N.arr(this.source)?this.source.map(Ut):At(Ut(this.source));return this.calc(...n)}_start(){this.idle&&!ry(this._active)&&(this.idle=!1,ee(t1(this),n=>{n.done=!1}),Bn.skipAnimation?(X.batchedUpdates(()=>this.advance()),Uh(this)):Xd.start(this))}_attach(){let n=1;ee(At(this.source),r=>{yn(r)&&po(r,this),dp(r)&&(r.idle||this._active.add(r),n=Math.max(n,r.priority+1))}),this.priority=n,this._start()}_detach(){ee(At(this.source),n=>{yn(n)&&nu(n,this)}),this._active.clear(),Uh(this)}eventObserved(n){n.type=="change"?n.idle?this.advance():(this._active.add(n.parent),this._start()):n.type=="idle"?this._active.delete(n.parent):n.type=="priority"&&(this.priority=At(this.source).reduce((r,i)=>Math.max(r,(dp(i)?i.priority:0)+1),0))}};function kC(t){return t.idle!==!1}function ry(t){return!t.size||Array.from(t).every(kC)}function Uh(t){t.idle||(t.idle=!0,ee(t1(t),e=>{e.done=!0}),tu(t,{type:"idle",parent:t}))}Bn.assign({createStringInterpolator:Lb,to:(t,e)=>new bC(t,e)});var Zb=/^--/;function EC(t,e){return e==null||typeof e=="boolean"||e===""?"":typeof e=="number"&&e!==0&&!Zb.test(t)&&!(Sf.hasOwnProperty(t)&&Sf[t])?e+"px":(""+e).trim()}var iy={};function _C(t,e){if(!t.nodeType||!t.setAttribute)return!1;let n=t.nodeName==="filter"||t.parentNode&&t.parentNode.nodeName==="filter",{style:r,children:i,scrollTop:a,scrollLeft:s,viewBox:o,...f}=e,u=Object.values(f),l=Object.keys(f).map(c=>n||t.hasAttribute(c)?c:iy[c]||(iy[c]=c.replace(/([A-Z])/g,d=>"-"+d.toLowerCase())));i!==void 0&&(t.textContent=i);for(let c in r)if(r.hasOwnProperty(c)){let d=EC(c,r[c]);Zb.test(c)?t.style.setProperty(c,d):t.style[c]=d}l.forEach((c,d)=>{t.setAttribute(c,u[d])}),a!==void 0&&(t.scrollTop=a),s!==void 0&&(t.scrollLeft=s),o!==void 0&&t.setAttribute("viewBox",o)}var Sf={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IC=(t,e)=>t+e.charAt(0).toUpperCase()+e.substring(1),SC=["Webkit","Ms","Moz","O"];Sf=Object.keys(Sf).reduce((t,e)=>(SC.forEach(n=>t[IC(n,e)]=t[e]),t),Sf);var CC=/^(matrix|translate|scale|rotate|skew)/,TC=/^(translate)/,xC=/^(rotate|skew)/,Vh=(t,e)=>N.num(t)&&t!==0?t+e:t,hc=(t,e)=>N.arr(t)?t.every(n=>hc(n,e)):N.num(t)?t===e:parseFloat(t)===e,AC=class extends n1{constructor({x:t,y:e,z:n,...r}){let i=[],a=[];(t||e||n)&&(i.push([t||0,e||0,n||0]),a.push(s=>[`translate3d(${s.map(o=>Vh(o,"px")).join(",")})`,hc(s,0)])),cr(r,(s,o)=>{if(o==="transform")i.push([s||""]),a.push(f=>[f,f===""]);else if(CC.test(o)){if(delete r[o],N.und(s))return;let f=TC.test(o)?"px":xC.test(o)?"deg":"";i.push(At(s)),a.push(o==="rotate3d"?([u,l,c,d])=>[`rotate3d(${u},${l},${c},${Vh(d,f)})`,hc(d,0)]:u=>[`${o}(${u.map(l=>Vh(l,f)).join(",")})`,hc(u,o.startsWith("scale")?1:0)])}}),i.length&&(r.transform=new RC(i,a)),super(r)}},RC=class extends Db{constructor(n,r){super();F(this,"_value",null);this.inputs=n,this.transforms=r}get(){return this._value||(this._value=this._get())}_get(){let n="",r=!0;return ee(this.inputs,(i,a)=>{let s=Ut(i[0]),[o,f]=this.transforms[a](N.arr(s)?s:i.map(Ut));n+=" "+o,r=r&&f}),r?"none":n}observerAdded(n){n==1&&ee(this.inputs,r=>ee(r,i=>yn(i)&&po(i,this)))}observerRemoved(n){n==0&&ee(this.inputs,r=>ee(r,i=>yn(i)&&nu(i,this)))}eventObserved(n){n.type=="change"&&(this._value=null),tu(this,n)}},NC=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];Bn.assign({batchedUpdates:Sc.unstable_batchedUpdates,createStringInterpolator:Lb,colors:g7});var DC=Y7(NC,{applyAnimatedValues:_C,createAnimatedStyle:t=>new AC(t),getComponentProps:({scrollTop:t,scrollLeft:e,...n})=>n}),e9=DC.animated;const PC="_app_v2h9g_17",zh={"app-window":"_app-window_v2h9g_17",app:PC,"not-logged":"_not-logged_v2h9g_31"},MC="_sidebar_157ql_17",LC={sidebar:MC},OC="_avatar_oupeu_27",$C="_icons_oupeu_32",FC="_icon_oupeu_32",Bo={"header-sidebar":"_header-sidebar_oupeu_17",avatar:OC,icons:$C,icon:FC};function jC({fill:t,onClick:e}){return k("svg",{viewBox:"0 0 24 24",onClick:e,className:"search-button",height:"24",width:"24",preserveAspectRatio:"xMidYMid meet",xmlSpace:"preserve",children:k("path",{fill:t,d:`M19.005,3.175H4.674C3.642,3.175,3,3.789,3,4.821V21.02 l3.544-3.514h12.461c1.033,0,2.064-1.06,\r
            2.064-2.093V4.821C21.068,3.789,20.037,3.175,19.005,3.175z M14.016,13.044H7.041V11.1 h6.975V13.044z M17.016,\r
            9.044H7.041V7.1h9.975V9.044z`})})}function UC({fill:t}){return k("svg",{viewBox:"0 0 24 24",height:"24",width:"24",preserveAspectRatio:"xMidYMid meet",enableBackground:"new 0 0 24 24",xmlSpace:"preserve",children:k("path",{fill:t,d:`M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,\r
            0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,\r
            0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z`})})}function VC({setNewchatMenuStatus:t,user:e}){const n=()=>{t(!0)};return te("header",{className:Bo["header-sidebar"],children:[k("img",{src:e.avatar,alt:"",className:Bo.avatar,onError:({currentTarget:r})=>{r.onerror=null,r.src="https://www.w3schools.com/howto/img_avatar.png"}}),te("div",{className:Bo.icons,children:[k("div",{className:Bo.icon,onClick:n,children:k(jC,{fill:"#54656f"})}),k("div",{className:Bo.icon,children:k(UC,{fill:"#54656f"})})]})]})}const zC="_active_hefga_80",es={"search-container":"_search-container_hefga_17","input-container":"_input-container_hefga_30","search-button":"_search-button_hefga_53","arrow-search-button":"_arrow-search-button_hefga_63","search-close-icon":"_search-close-icon_hefga_73",active:zC};function t9({className:t,onClickFunction:e}){return k("svg",{onClick:e,viewBox:"0 0 24 24",height:"24",width:"24",className:t,preserveAspectRatio:"xMidYMid meet",enableBackground:"new 0 0 24 24",xmlSpace:"preserve",children:k("path",{d:`M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,\r
                 0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,\r
                 13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z`})})}function n9({className:t,onClickFunction:e}){return k("svg",{onClick:e,className:t,viewBox:"0 0 24 24",height:"24",width:"24",preserveAspectRatio:"xMidYMid meet",enableBackground:"new 0 0 24 24",xmlSpace:"preserve",children:k("path",{d:"M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"})})}function r9({className:t}){return k("svg",{viewBox:"0 0 24 24",height:24,width:24,className:t,preserveAspectRatio:"xMidYMid meet",enableBackground:"new 0 0 24 24",xmlSpace:"preserve",children:k("path",{d:"M17.25,7.8L16.2,6.75l-4.2,4.2l-4.2-4.2L6.75,7.8l4.2,4.2l-4.2,4.2l1.05,1.05l4.2-4.2l4.2,4.2l1.05-1.05 l-4.2-4.2L17.25,7.8z"})})}var mp={},BC={get exports(){return mp},set exports(t){mp=t}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var a=arguments[i];if(a){var s=typeof a;if(s==="string"||s==="number")r.push(a);else if(Array.isArray(a)){if(a.length){var o=n.apply(null,a);o&&r.push(o)}}else if(s==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){r.push(a.toString());continue}for(var f in a)e.call(a,f)&&a[f]&&r.push(f)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(BC);const Ln=mp;function qC({inputValue:t,setValue:e}){const[n,r]=y.useState(!1),i=y.useRef(null),a=()=>{r(!0)},s=()=>{t.length<=0&&r(!1)},o=c=>{e(c.target.value)},f=()=>{e(""),i.current.focus()},u=()=>{i.current.focus()},l=()=>{i.current.blur(),r(!1),e("")};return k("div",{className:Ln(es["search-container"],{[es.active]:n}),children:te("div",{className:es["input-container"],children:[k(t9,{onClickFunction:u,className:es["search-button"]}),k(n9,{onClickFunction:l,className:es["arrow-search-button"]}),k("input",{ref:i,onFocus:a,onBlur:s,value:t,onChange:o,placeholder:"Pesquisar conversa"}),t.length>0?k("span",{onClick:f,children:k(r9,{className:es["search-close-icon"]})}):k(Fn,{})]})})}const HC="_image_1l1hq_33",WC="_content_1l1hq_43",GC="_icons_1l1hq_83",KC="_notifications_1l1hq_89",QC="_active_1l1hq_116",YC="_notfound_1l1hq_147",XC="_loading_1l1hq_156",Te={"chat-list":"_chat-list_1l1hq_17","chat-box":"_chat-box_1l1hq_21",image:HC,content:WC,"top-row":"_top-row_1l1hq_52","bottom-row":"_bottom-row_1l1hq_68",icons:GC,notifications:KC,"arrow-down-icon":"_arrow-down-icon_1l1hq_106",active:QC,notfound:YC,loading:XC};function ay({className:t}){return k("svg",{className:t,viewBox:"0 0 19 20",height:20,width:20,preserveAspectRatio:"xMidYMid meet",xmlSpace:"preserve",children:k("path",{d:"M3.8,6.7l5.7,5.7l5.7-5.7l1.6,1.6l-7.3,7.2L2.2,8.3L3.8,6.7z"})})}var JC={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function ZC(t){if(typeof t=="number")return{value:t,unit:"px"};var e,n=(t.match(/^[0-9.]*/)||"").toString();n.includes(".")?e=parseFloat(n):e=parseInt(n,10);var r=(t.match(/[^0-9]*$/)||"").toString();return JC[r]?{value:e,unit:r}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}function sy(t){var e=ZC(t);return"".concat(e.value).concat(e.unit)}var eT=function(t,e,n){var r="react-spinners-".concat(t,"-").concat(n);if(typeof window>"u"||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var a=i.sheet,s=`
    @keyframes `.concat(r,` {
      `).concat(e,`
    }
  `);return a&&a.insertRule(s,0),r},nd=globalThis&&globalThis.__assign||function(){return nd=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},nd.apply(this,arguments)},tT=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n},nT=eT("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");function rT(t){var e=t.loading,n=e===void 0?!0:e,r=t.color,i=r===void 0?"#000000":r,a=t.speedMultiplier,s=a===void 0?1:a,o=t.cssOverride,f=o===void 0?{}:o,u=t.size,l=u===void 0?35:u,c=tT(t,["loading","color","speedMultiplier","cssOverride","size"]),d=nd({background:"transparent !important",width:sy(l),height:sy(l),borderRadius:"100%",border:"2px solid",borderTopColor:i,borderBottomColor:"transparent",borderLeftColor:i,borderRightColor:i,display:"inline-block",animation:"".concat(nT," ").concat(.75/s,"s 0s infinite linear"),animationFillMode:"both"},f);return n?y.createElement("span",nd({style:d},c)):null}function iT(t,e,n){var r=this,i=y.useRef(null),a=y.useRef(0),s=y.useRef(null),o=y.useRef([]),f=y.useRef(),u=y.useRef(),l=y.useRef(t),c=y.useRef(!0);y.useEffect(function(){l.current=t},[t]);var d=!e&&e!==0&&typeof window<"u";if(typeof t!="function")throw new TypeError("Expected a function");e=+e||0;var h=!!(n=n||{}).leading,m=!("trailing"in n)||!!n.trailing,w="maxWait"in n,E=w?Math.max(+n.maxWait||0,e):null;y.useEffect(function(){return c.current=!0,function(){c.current=!1}},[]);var g=y.useMemo(function(){var p=function(P){var q=o.current,H=f.current;return o.current=f.current=null,a.current=P,u.current=l.current.apply(H,q)},v=function(P,q){d&&cancelAnimationFrame(s.current),s.current=d?requestAnimationFrame(P):setTimeout(P,q)},b=function(P){if(!c.current)return!1;var q=P-i.current;return!i.current||q>=e||q<0||w&&P-a.current>=E},S=function(P){return s.current=null,m&&o.current?p(P):(o.current=f.current=null,u.current)},C=function P(){var q=Date.now();if(b(q))return S(q);if(c.current){var H=e-(q-i.current),he=w?Math.min(H,E-(q-a.current)):H;v(P,he)}},x=function(){var P=Date.now(),q=b(P);if(o.current=[].slice.call(arguments),f.current=r,i.current=P,q){if(!s.current&&c.current)return a.current=i.current,v(C,e),h?p(i.current):u.current;if(w)return v(C,e),p(i.current)}return s.current||v(C,e),u.current};return x.cancel=function(){s.current&&(d?cancelAnimationFrame(s.current):clearTimeout(s.current)),a.current=0,o.current=i.current=f.current=s.current=null},x.isPending=function(){return!!s.current},x.flush=function(){return s.current?S(Date.now()):u.current},x},[h,w,e,E,m,d]);return g}function aT(t,e){return t===e}function oy(t){return typeof t=="function"?function(){return t}:t}function sT(t,e,n){var r,i,a=n&&n.equalityFn||aT,s=(r=y.useState(oy(t)),i=r[1],[r[0],y.useCallback(function(c){return i(oy(c))},[])]),o=s[0],f=s[1],u=iT(y.useCallback(function(c){return f(c)},[f]),e,n),l=y.useRef(t);return a(l.current,t)||(u(t),l.current=t),[o,u]}function oT({inputValue:t,chatList:e,setActiveChat:n,activeChat:r}){const[i,a]=y.useState(!1),[s]=sT(t,1e3);var o=!1;const f=l=>{n(e[l])},u=l=>{if(l!=null){let c=new Date(l.seconds*1e3),d=c.getHours(),h=c.getMinutes();return d=d<10?"0"+d:d,`${d}:${h}`}else return""};return y.useEffect(()=>{const l=setTimeout(()=>{a(!1)},1500);if(t.length>0)return a(!0),()=>clearTimeout(l)},[t]),te("div",{className:Ln(Te["chat-list"],{[Te.loading]:i}),children:[t.length>0?k(Fn,{children:e.map((l,c)=>{if(l.title.toLowerCase().includes(t.toLowerCase())){let d=u(l.lastMessageDate);return o=!0,te("div",{onClick:()=>f(c),className:Ln(Te["chat-box"],{[Te.active]:r.chatId==l.chatId}),children:[k("div",{className:Te.image,children:k("img",{src:l.image,onError:({currentTarget:h})=>{h.onerror=null,h.src="https://www.w3schools.com/howto/img_avatar.png"}})}),te("div",{className:Ln(Te.content,{[Te.active]:l.unreadMessage}),children:[te("div",{className:Te["top-row"],children:[k("h3",{children:l.title}),k("p",{children:d})]}),te("div",{className:Te["bottom-row"],children:[k("span",{children:l.lastMessage}),te("div",{className:Te.icons,children:[k("span",{className:Te.notifications,children:k("p",{children:"!"})}),k(ay,{className:Te["arrow-down-icon"]})]})]})]})]},c)}})}):k(Fn,{children:e.map((l,c)=>{let d=u(l.lastMessageDate);return te("div",{onClick:()=>f(c),className:Ln(Te["chat-box"],{[Te.active]:r.chatId==l.chatId}),children:[k("div",{className:Te.image,children:k("img",{src:l.image,onError:({currentTarget:h})=>{h.onerror=null,h.src="https://www.w3schools.com/howto/img_avatar.png"}})}),te("div",{className:Ln(Te.content,{[Te.active]:l.unreadMessage}),children:[te("div",{className:Te["top-row"],children:[k("h3",{children:l.title}),k("p",{children:d})]}),te("div",{className:Te["bottom-row"],children:[k("span",{children:l.lastMessage}),te("div",{className:Te.icons,children:[k("span",{className:Te.notifications,children:k("p",{children:"!"})}),k(ay,{className:Te["arrow-down-icon"]})]})]})]})]},c)})}),i&&k(rT,{color:"#18af8f",loading:!0,size:20}),s.length>t.length-1&&t.length>0&&!o&&!i&&k("div",{className:Te.notfound,children:k("span",{children:"Nenhuma conversa, contato ou mensagem encontrada"})})]})}const fT="_newchat_1y0u3_17",uT="_content_1y0u3_38",lT="_title_1y0u3_52",cT="_active_1y0u3_129",dT="_heading_1y0u3_144",hT="_image_1y0u3_165",pT="_row_1y0u3_184",mT="_icons_1y0u3_198",gT="_notfound_1y0u3_201",ke={newchat:fT,content:uT,"arrowback-container":"_arrowback-container_1y0u3_43","arrowback-button":"_arrowback-button_1y0u3_48","title-container":"_title-container_1y0u3_52",title:lT,"search-container":"_search-container_1y0u3_65","input-container":"_input-container_1y0u3_78","search-button":"_search-button_1y0u3_102","arrow-search-button":"_arrow-search-button_1y0u3_112","search-close-icon":"_search-close-icon_1y0u3_122",active:cT,"contacts-list":"_contacts-list_1y0u3_140",heading:dT,"contact-box":"_contact-box_1y0u3_154",image:hT,row:pT,"bottom-row":"_bottom-row_1y0u3_198",icons:mT,"arrow-down-icon":"_arrow-down-icon_1y0u3_198",notfound:gT};function vT({className:t,onClick:e}){return k("svg",{onClick:e,viewBox:"0 0 24 24",className:t,height:"24",width:"24",preserveAspectRatio:"xMidYMid meet",enableBackground:"new 0 0 24 24",xmlSpace:"preserve",children:k("path",{d:"M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"})})}/**
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
 */const i9=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},yT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=t[n++];e[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=t[n++],s=t[n++],o=t[n++],f=((i&7)<<18|(a&63)<<12|(s&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|s&63)}}return e.join("")},a9={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const a=t[i],s=i+1<t.length,o=s?t[i+1]:0,f=i+2<t.length,u=f?t[i+2]:0,l=a>>2,c=(a&3)<<4|o>>4;let d=(o&15)<<2|u>>6,h=u&63;f||(h=64,s||(d=64)),r.push(n[l],n[c],n[d],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i9(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const a=n[t.charAt(i++)],o=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,a==null||o==null||u==null||c==null)throw Error();const d=a<<2|o>>4;if(r.push(d),u!==64){const h=o<<4&240|u>>2;if(r.push(h),c!==64){const m=u<<6&192|c;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},wT=function(t){const e=i9(t);return a9.encodeByteArray(e,!0)},rd=function(t){return wT(t).replace(/\./g,"")},s9=function(t){try{return a9.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function id(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!bT(n)||(t[n]=id(t[n],e[n]));return t}function bT(t){return t!=="__proto__"}/**
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
 */function kT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ET=()=>kT().__FIREBASE_DEFAULTS__,_T=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},IT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&s9(t[1]);return e&&JSON.parse(e)},wg=()=>{try{return ET()||_T()||IT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ST=()=>{var t;return(t=wg())===null||t===void 0?void 0:t.config},CT=t=>{var e;return(e=wg())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class TT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function xT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,a=t.sub||t.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},t),o="";return[rd(JSON.stringify(n)),rd(JSON.stringify(s)),o].join(".")}/**
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
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function bg(){var t;const e=(t=wg())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RT(){return typeof self=="object"&&self.self===self}function o9(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function f9(){const t=Ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function NT(){return!bg()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ou(){try{return typeof indexedDB=="object"}catch{return!1}}function DT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;e(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}/**
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
 */const PT="FirebaseError";class Dt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=PT,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ja.prototype.create)}}class ja{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,a=this.errors[e],s=a?MT(a,r):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new Dt(i,o,r)}}function MT(t,e){return t.replace(LT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const LT=/\{\$([^}]+)}/g;/**
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
 */function fy(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function OT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gp(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const a=t[i],s=e[i];if(uy(a)&&uy(s)){if(!gp(a,s))return!1}else if(a!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function uy(t){return t!==null&&typeof t=="object"}/**
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
 */function mo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ks(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(a)}}),e}function sf(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function u9(t,e){const n=new $T(t,e);return n.subscribe.bind(n)}class $T{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");FT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Bh),i.error===void 0&&(i.error=Bh),i.complete===void 0&&(i.complete=Bh);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Bh(){}/**
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
 */function W(t){return t&&t._delegate?t._delegate:t}class dr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gi="[DEFAULT]";/**
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
 */class jT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new TT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VT(e))try{this.getOrInitializeService({instanceIdentifier:Gi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(e=Gi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gi){return this.instances.has(e)}getOptions(e=Gi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(a);r===o&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(i,a);const s=this.instances.get(i);return s&&e(s,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:UT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gi){return this.component?this.component.multipleInstances?e:Gi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UT(t){return t===Gi?void 0:t}function VT(t){return t.instantiationMode==="EAGER"}/**
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
 */class zT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Eg=[];var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const l9={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},BT=oe.INFO,qT={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},HT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=qT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class i1{constructor(e){this.name=e,this._logLevel=BT,this._logHandler=HT,this._userLogHandler=null,Eg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?l9[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}function WT(t){Eg.forEach(e=>{e.setLogLevel(t)})}function GT(t,e){for(const n of Eg){let r=null;e&&e.level&&(r=l9[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,a,...s)=>{const o=s.map(f=>{if(f==null)return null;if(typeof f=="string")return f;if(typeof f=="number"||typeof f=="boolean")return f.toString();if(f instanceof Error)return f.message;try{return JSON.stringify(f)}catch{return null}}).filter(f=>f).join(" ");a>=(r??i.logLevel)&&t({level:oe[a].toLowerCase(),message:o,args:s,type:i.name})}}}const KT=(t,e)=>e.some(n=>t instanceof n);let ly,cy;function QT(){return ly||(ly=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YT(){return cy||(cy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c9=new WeakMap,vp=new WeakMap,d9=new WeakMap,qh=new WeakMap,_g=new WeakMap;function XT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",a),t.removeEventListener("error",s)},a=()=>{n(pi(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",a),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&c9.set(n,t)}).catch(()=>{}),_g.set(e,t),e}function JT(t){if(vp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",s),t.removeEventListener("abort",s)},a=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",a),t.addEventListener("error",s),t.addEventListener("abort",s)});vp.set(t,e)}let yp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||d9.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ZT(t){yp=t(yp)}function ex(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hh(this),e,...n);return d9.set(r,e.sort?e.sort():[e]),pi(r)}:YT().includes(t)?function(...e){return t.apply(Hh(this),e),pi(c9.get(this))}:function(...e){return pi(t.apply(Hh(this),e))}}function tx(t){return typeof t=="function"?ex(t):(t instanceof IDBTransaction&&JT(t),KT(t,QT())?new Proxy(t,yp):t)}function pi(t){if(t instanceof IDBRequest)return XT(t);if(qh.has(t))return qh.get(t);const e=tx(t);return e!==t&&(qh.set(t,e),_g.set(e,t)),e}const Hh=t=>_g.get(t);function nx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const s=indexedDB.open(t,e),o=pi(s);return r&&s.addEventListener("upgradeneeded",f=>{r(pi(s.result),f.oldVersion,f.newVersion,pi(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),o.then(f=>{a&&f.addEventListener("close",()=>a()),i&&f.addEventListener("versionchange",()=>i())}).catch(()=>{}),o}const rx=["get","getKey","getAll","getAllKeys","count"],ix=["put","add","delete","clear"],Wh=new Map;function dy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wh.get(e))return Wh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ix.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rx.includes(n)))return;const a=async function(s,...o){const f=this.transaction(s,i?"readwrite":"readonly");let u=f.store;return r&&(u=u.index(o.shift())),(await Promise.all([u[n](...o),i&&f.done]))[0]};return Wh.set(e,a),a}ZT(t=>({...t,get:(e,n,r)=>dy(e,n)||t.get(e,n,r),has:(e,n)=>!!dy(e,n)||t.has(e,n)}));/**
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
 */class ax{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wp="@firebase/app",hy="0.9.3";/**
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
 */const _a=new i1("@firebase/app"),ox="@firebase/app-compat",fx="@firebase/analytics-compat",ux="@firebase/analytics",lx="@firebase/app-check-compat",cx="@firebase/app-check",dx="@firebase/auth",hx="@firebase/auth-compat",px="@firebase/database",mx="@firebase/database-compat",gx="@firebase/functions",vx="@firebase/functions-compat",yx="@firebase/installations",wx="@firebase/installations-compat",bx="@firebase/messaging",kx="@firebase/messaging-compat",Ex="@firebase/performance",_x="@firebase/performance-compat",Ix="@firebase/remote-config",Sx="@firebase/remote-config-compat",Cx="@firebase/storage",Tx="@firebase/storage-compat",xx="@firebase/firestore",Ax="@firebase/firestore-compat",Rx="firebase",Nx="9.17.1";/**
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
 */const yi="[DEFAULT]",Dx={[wp]:"fire-core",[ox]:"fire-core-compat",[ux]:"fire-analytics",[fx]:"fire-analytics-compat",[cx]:"fire-app-check",[lx]:"fire-app-check-compat",[dx]:"fire-auth",[hx]:"fire-auth-compat",[px]:"fire-rtdb",[mx]:"fire-rtdb-compat",[gx]:"fire-fn",[vx]:"fire-fn-compat",[yx]:"fire-iid",[wx]:"fire-iid-compat",[bx]:"fire-fcm",[kx]:"fire-fcm-compat",[Ex]:"fire-perf",[_x]:"fire-perf-compat",[Ix]:"fire-rc",[Sx]:"fire-rc-compat",[Cx]:"fire-gcs",[Tx]:"fire-gcs-compat",[xx]:"fire-fst",[Ax]:"fire-fst-compat","fire-js":"fire-js",[Rx]:"fire-js-all"};/**
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
 */const wi=new Map,fu=new Map;function ad(t,e){try{t.container.addComponent(e)}catch(n){_a.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function h9(t,e){t.container.addOrOverwriteComponent(e)}function bi(t){const e=t.name;if(fu.has(e))return _a.debug(`There were multiple attempts to register component ${e}.`),!1;fu.set(e,t);for(const n of wi.values())ad(n,t);return!0}function p9(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Px(t,e,n=yi){p9(t,e).clearInstance(n)}function Mx(){fu.clear()}/**
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
 */const Lx={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Cr=new ja("app","Firebase",Lx);/**
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
 */let Ox=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cr.create("app-deleted",{appName:this._name})}};/**
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
 */const Ua=Nx;function Ig(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:yi,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Cr.create("bad-app-name",{appName:String(i)});if(n||(n=ST()),!n)throw Cr.create("no-options");const a=wi.get(i);if(a){if(gp(n,a.options)&&gp(r,a.config))return a;throw Cr.create("duplicate-app",{appName:i})}const s=new zT(i);for(const f of fu.values())s.addComponent(f);const o=new Ox(n,r,s);return wi.set(i,o),o}function $x(t=yi){const e=wi.get(t);if(!e&&t===yi)return Ig();if(!e)throw Cr.create("no-app",{appName:t});return e}function Fx(){return Array.from(wi.values())}async function m9(t){const e=t.name;wi.has(e)&&(wi.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function fr(t,e,n){var r;let i=(r=Dx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const a=i.match(/\s|\//),s=e.match(/\s|\//);if(a||s){const o=[`Unable to register library "${i}" with version "${e}":`];a&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_a.warn(o.join(" "));return}bi(new dr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function g9(t,e){if(t!==null&&typeof t!="function")throw Cr.create("invalid-log-argument");GT(t,e)}function v9(t){WT(t)}/**
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
 */const jx="firebase-heartbeat-database",Ux=1,uu="firebase-heartbeat-store";let Gh=null;function y9(){return Gh||(Gh=nx(jx,Ux,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(uu)}}}).catch(t=>{throw Cr.create("idb-open",{originalErrorMessage:t.message})})),Gh}async function Vx(t){try{return(await y9()).transaction(uu).objectStore(uu).get(w9(t))}catch(e){if(e instanceof Dt)_a.warn(e.message);else{const n=Cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_a.warn(n.message)}}}async function py(t,e){try{const r=(await y9()).transaction(uu,"readwrite");return await r.objectStore(uu).put(e,w9(t)),r.done}catch(n){if(n instanceof Dt)_a.warn(n.message);else{const r=Cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_a.warn(r.message)}}}function w9(t){return`${t.name}!${t.options.appId}`}/**
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
 */const zx=1024,Bx=30*24*60*60*1e3;class qx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Wx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=my();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=Bx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=my(),{heartbeatsToSend:n,unsentEntries:r}=Hx(this._heartbeatsCache.heartbeats),i=rd(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function my(){return new Date().toISOString().substring(0,10)}function Hx(t,e=zx){const n=[];let r=t.slice();for(const i of t){const a=n.find(s=>s.agent===i.agent);if(a){if(a.dates.push(i.date),gy(n)>e){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),gy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Wx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ou()?DT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Vx(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return py(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return py(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function gy(t){return rd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Gx(t){bi(new dr("platform-logger",e=>new ax(e),"PRIVATE")),bi(new dr("heartbeat",e=>new qx(e),"PRIVATE")),fr(wp,hy,t),fr(wp,hy,"esm2017"),fr("fire-js","")}Gx("");const Kx=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Dt,SDK_VERSION:Ua,_DEFAULT_ENTRY_NAME:yi,_addComponent:ad,_addOrOverwriteComponent:h9,_apps:wi,_clearComponents:Mx,_components:fu,_getProvider:p9,_registerComponent:bi,_removeServiceInstance:Px,deleteApp:m9,getApp:$x,getApps:Fx,initializeApp:Ig,onLog:g9,registerVersion:fr,setLogLevel:v9},Symbol.toStringTag,{value:"Module"}));/**
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
 */class Qx{constructor(e,n){this._delegate=e,this.firebase=n,ad(e,new dr("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),m9(this._delegate)))}_getService(e,n=yi){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=yi){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){ad(this._delegate,e)}_addOrOverwriteComponent(e){h9(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const Yx={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},vy=new ja("app-compat","Firebase",Yx);/**
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
 */function Xx(t){const e={},n={__esModule:!0,initializeApp:a,app:i,registerVersion:fr,setLogLevel:v9,onLog:g9,apps:null,SDK_VERSION:Ua,INTERNAL:{registerComponent:o,removeApp:r,useAsService:f,modularAPIs:Kx}};n.default=n,Object.defineProperty(n,"apps",{get:s});function r(u){delete e[u]}function i(u){if(u=u||yi,!fy(e,u))throw vy.create("no-app",{appName:u});return e[u]}i.App=t;function a(u,l={}){const c=Ig(u,l);if(fy(e,c.name))return e[c.name];const d=new t(c,n);return e[c.name]=d,d}function s(){return Object.keys(e).map(u=>e[u])}function o(u){const l=u.name,c=l.replace("-compat","");if(bi(u)&&u.type==="PUBLIC"){const d=(h=i())=>{if(typeof h[c]!="function")throw vy.create("invalid-app-argument",{appName:l});return h[c]()};u.serviceProps!==void 0&&id(d,u.serviceProps),n[c]=d,t.prototype[c]=function(...h){return this._getService.bind(this,l).apply(this,u.multipleInstances?h:[])}}return u.type==="PUBLIC"?n[c]:null}function f(u,l){return l==="serverAuth"?null:l}return n}/**
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
 */function b9(){const t=Xx(Qx);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:b9,extendNamespace:e,createSubscribe:u9,ErrorFactory:ja,deepExtend:id});function e(n){id(t,n)}return t}const Jx=b9();/**
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
 */const yy=new i1("@firebase/app-compat"),Zx="@firebase/app-compat",eA="0.2.3";/**
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
 */function tA(t){fr(Zx,eA,t)}/**
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
 */if(RT()&&self.firebase!==void 0){yy.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&yy.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const wn=Jx;tA();var nA="firebase",rA="9.17.1";/**
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
 */wn.registerVersion(nA,rA,"app-compat");function Sg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const qo={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ts={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function iA(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function k9(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aA=iA,sA=k9,E9=new ja("auth","Firebase",k9());/**
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
 */const wy=new i1("@firebase/auth");function pc(t,...e){wy.logLevel<=oe.ERROR&&wy.error(`Auth (${Ua}): ${t}`,...e)}/**
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
 */function mt(t,...e){throw Cg(t,...e)}function dt(t,...e){return Cg(t,...e)}function _9(t,e,n){const r=Object.assign(Object.assign({},sA()),{[e]:n});return new ja("auth","Firebase",r).create(e,{appName:t.name})}function go(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&mt(t,"argument-error"),_9(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Cg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return E9.create(t,...e)}function D(t,e,...n){if(!t)throw Cg(e,...n)}function nr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pc(e),new Error(e)}function qn(t,e){t||nr(e)}/**
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
 */const by=new Map;function sn(t){qn(t instanceof Function,"Expected a class definition");let e=by.get(t);return e?(qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,by.set(t,e),e)}function oA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function lu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Tg(){return ky()==="http:"||ky()==="https:"}function ky(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function fA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Tg()||o9()||"connection"in navigator)?navigator.onLine:!0}function uA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Hu{constructor(e,n){this.shortDelay=e,this.longDelay=n,qn(n>e,"Short delay should be less than long delay!"),this.isMobile=AT()||kg()}get(){return fA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xg(t,e){qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class I9{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const lA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const cA=new Hu(3e4,6e4);function Xe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function at(t,e,n,r,i={}){return S9(t,i,async()=>{let a={},s={};r&&(e==="GET"?s=r:a={body:JSON.stringify(r)});const o=mo(Object.assign({key:t.config.apiKey},s)).slice(1),f=await t._getAdditionalHeaders();return f["Content-Type"]="application/json",t.languageCode&&(f["X-Firebase-Locale"]=t.languageCode),I9.fetch()(C9(t,t.config.apiHost,n,o),Object.assign({method:e,headers:f,referrerPolicy:"no-referrer"},a))})}async function S9(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lA),e);try{const i=new dA(t),a=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await a.json();if("needConfirmation"in s)throw of(t,"account-exists-with-different-credential",s);if(a.ok&&!("errorMessage"in s))return s;{const o=a.ok?s.errorMessage:s.error.message,[f,u]=o.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw of(t,"credential-already-in-use",s);if(f==="EMAIL_EXISTS")throw of(t,"email-already-in-use",s);if(f==="USER_DISABLED")throw of(t,"user-disabled",s);const l=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw _9(t,l,u);mt(t,l)}}catch(i){if(i instanceof Dt)throw i;mt(t,"network-request-failed")}}async function Or(t,e,n,r,i={}){const a=await at(t,e,n,r,i);return"mfaPendingCredential"in a&&mt(t,"multi-factor-auth-required",{_serverResponse:a}),a}function C9(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?xg(t.config,i):`${t.config.apiScheme}://${i}`}class dA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dt(this.auth,"network-request-failed")),cA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function of(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=dt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function hA(t,e){return at(t,"POST","/v1/accounts:delete",e)}async function pA(t,e){return at(t,"POST","/v1/accounts:update",e)}async function mA(t,e){return at(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Cf(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gA(t,e=!1){const n=W(t),r=await n.getIdToken(e),i=a1(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,s=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:Cf(Kh(i.auth_time)),issuedAtTime:Cf(Kh(i.iat)),expirationTime:Cf(Kh(i.exp)),signInProvider:s||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Kh(t){return Number(t)*1e3}function a1(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return pc("JWT malformed, contained fewer than 3 sections"),null;try{const i=s9(n);return i?JSON.parse(i):(pc("Failed to decode base64 JWT payload"),null)}catch(i){return pc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function vA(t){const e=a1(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Dr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dt&&yA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function yA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class wA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class T9{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cf(this.lastLoginAt),this.creationTime=Cf(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function cu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Dr(t,mA(n,{idToken:r}));D(i==null?void 0:i.users.length,n,"internal-error");const a=i.users[0];t._notifyReloadListener(a);const s=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?EA(a.providerUserInfo):[],o=kA(t.providerData,s),f=t.isAnonymous,u=!(t.email&&a.passwordHash)&&!(o!=null&&o.length),l=f?u:!1,c={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new T9(a.createdAt,a.lastLoginAt),isAnonymous:l};Object.assign(t,c)}async function bA(t){const e=W(t);await cu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function EA(t){return t.map(e=>{var{providerId:n}=e,r=Sg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function _A(t,e){const n=await S9(t,{},async()=>{const r=mo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=t.config,s=C9(t,i,"/v1/token",`key=${a}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",I9.fetch()(s,{method:"POST",headers:o,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class du{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:a}=await _A(e,n);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:a}=n,s=new du;return r&&(D(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),a&&(D(typeof a=="number","internal-error",{appName:e}),s.expirationTime=a),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new du,this.toJSON())}_performRefresh(){return nr("not implemented")}}/**
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
 */function Br(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class la{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,a=Sg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new T9(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await Dr(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gA(this,e)}reload(){return bA(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new la(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await cu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Dr(this,hA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,a,s,o,f,u,l;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,h=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,m=(s=n.photoURL)!==null&&s!==void 0?s:void 0,w=(o=n.tenantId)!==null&&o!==void 0?o:void 0,E=(f=n._redirectEventId)!==null&&f!==void 0?f:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:v,emailVerified:b,isAnonymous:S,providerData:C,stsTokenManager:x}=n;D(v&&x,e,"internal-error");const P=du.fromJSON(this.name,x);D(typeof v=="string",e,"internal-error"),Br(c,e.name),Br(d,e.name),D(typeof b=="boolean",e,"internal-error"),D(typeof S=="boolean",e,"internal-error"),Br(h,e.name),Br(m,e.name),Br(w,e.name),Br(E,e.name),Br(g,e.name),Br(p,e.name);const q=new la({uid:v,auth:e,email:d,emailVerified:b,displayName:c,isAnonymous:S,photoURL:m,phoneNumber:h,tenantId:w,stsTokenManager:P,createdAt:g,lastLoginAt:p});return C&&Array.isArray(C)&&(q.providerData=C.map(H=>Object.assign({},H))),E&&(q._redirectEventId=E),q}static async _fromIdTokenResponse(e,n,r=!1){const i=new du;i.updateFromServerResponse(n);const a=new la({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await cu(a),a}}/**
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
 */class x9{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}x9.type="NONE";const Hs=x9;/**
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
 */function ca(t,e,n){return`firebase:${t}:${e}:${n}`}class Ns{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=ca(this.userKey,i.apiKey,a),this.fullPersistenceKey=ca("persistence",i.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?la._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ns(sn(Hs),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let a=i[0]||sn(Hs);const s=ca(r,e.config.apiKey,e.name);let o=null;for(const u of n)try{const l=await u._get(s);if(l){const c=la._fromJSON(e,l);u!==a&&(o=c),a=u;break}}catch{}const f=i.filter(u=>u._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new Ns(a,e,r):(a=f[0],o&&await a._set(s,o.toJSON()),await Promise.all(n.map(async u=>{if(u!==a)try{await u._remove(s)}catch{}})),new Ns(a,e,r))}}/**
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
 */function Ey(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(N9(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(A9(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(D9(e))return"Blackberry";if(P9(e))return"Webos";if(Ag(e))return"Safari";if((e.includes("chrome/")||R9(e))&&!e.includes("edge/"))return"Chrome";if(Wu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function A9(t=Ne()){return/firefox\//i.test(t)}function Ag(t=Ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function R9(t=Ne()){return/crios\//i.test(t)}function N9(t=Ne()){return/iemobile/i.test(t)}function Wu(t=Ne()){return/android/i.test(t)}function D9(t=Ne()){return/blackberry/i.test(t)}function P9(t=Ne()){return/webos/i.test(t)}function vo(t=Ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function IA(t=Ne()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function SA(t=Ne()){var e;return vo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function CA(){return f9()&&document.documentMode===10}function M9(t=Ne()){return vo(t)||Wu(t)||P9(t)||D9(t)||/windows phone/i.test(t)||N9(t)}function TA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function L9(t,e=[]){let n;switch(t){case"Browser":n=Ey(Ne());break;case"Worker":n=`${Ey(Ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ua}/${r}`}/**
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
 */class xA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=a=>new Promise((s,o)=>{try{const f=e(a);s(f)}catch(f){o(f)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class AA{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _y(this),this.idTokenSubscription=new _y(this),this.beforeStateQueue=new xA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=E9,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=sn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ns.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=i==null?void 0:i._redirectEventId,f=await this.tryRedirectSignIn(e);(!s||s===o)&&(f!=null&&f.user)&&(i=f.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await cu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?W(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(sn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ja("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&sn(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await Ns.create(this,[sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return D(s,this,"internal-error"),s.then(()=>a(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=L9(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function rt(t){return W(t)}class _y{constructor(e){this.auth=e,this.observer=null,this.addObserver=u9(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function RA(t,e,n){const r=rt(t);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),a=O9(e),{host:s,port:o}=NA(e),f=o===null?"":`:${o}`;r.config.emulator={url:`${a}//${s}${f}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:o,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||DA()}function O9(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function NA(t){const e=O9(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:Iy(r.substr(a.length+1))}}else{const[a,s]=r.split(":");return{host:a,port:Iy(s)}}}function Iy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function DA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class yo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nr("not implemented")}_getIdTokenResponse(e){return nr("not implemented")}_linkToIdToken(e,n){return nr("not implemented")}_getReauthenticationResolver(e){return nr("not implemented")}}/**
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
 */async function $9(t,e){return at(t,"POST","/v1/accounts:resetPassword",Xe(t,e))}async function F9(t,e){return at(t,"POST","/v1/accounts:update",e)}async function PA(t,e){return at(t,"POST","/v1/accounts:update",Xe(t,e))}/**
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
 */async function MA(t,e){return Or(t,"POST","/v1/accounts:signInWithPassword",Xe(t,e))}async function s1(t,e){return at(t,"POST","/v1/accounts:sendOobCode",Xe(t,e))}async function LA(t,e){return s1(t,e)}async function OA(t,e){return s1(t,e)}async function $A(t,e){return s1(t,e)}async function FA(t,e){return s1(t,e)}/**
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
 */async function jA(t,e){return Or(t,"POST","/v1/accounts:signInWithEmailLink",Xe(t,e))}async function UA(t,e){return Or(t,"POST","/v1/accounts:signInWithEmailLink",Xe(t,e))}/**
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
 */class hu extends yo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new hu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new hu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return MA(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jA(e,{email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return F9(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return UA(e,{idToken:n,email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Tr(t,e){return Or(t,"POST","/v1/accounts:signInWithIdp",Xe(t,e))}/**
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
 */const VA="http://localhost";class hr extends yo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,a=Sg(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new hr(r,i);return s.idToken=a.idToken||void 0,s.accessToken=a.accessToken||void 0,s.secret=a.secret,s.nonce=a.nonce,s.pendingToken=a.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Tr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Tr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Tr(e,n)}buildRequest(){const e={requestUri:VA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mo(n)}return e}}/**
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
 */async function zA(t,e){return at(t,"POST","/v1/accounts:sendVerificationCode",Xe(t,e))}async function BA(t,e){return Or(t,"POST","/v1/accounts:signInWithPhoneNumber",Xe(t,e))}async function qA(t,e){const n=await Or(t,"POST","/v1/accounts:signInWithPhoneNumber",Xe(t,e));if(n.temporaryProof)throw of(t,"account-exists-with-different-credential",n);return n}const HA={USER_NOT_FOUND:"user-not-found"};async function WA(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Or(t,"POST","/v1/accounts:signInWithPhoneNumber",Xe(t,n),HA)}/**
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
 */class da extends yo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new da({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new da({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return BA(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return qA(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return WA(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:a}=e;return!r&&!n&&!i&&!a?null:new da({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:a})}}/**
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
 */function GA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KA(t){const e=ks(sf(t)).link,n=e?ks(sf(e)).deep_link_id:null,r=ks(sf(t)).deep_link_id;return(r?ks(sf(r)).link:null)||r||n||e||t}class o1{constructor(e){var n,r,i,a,s,o;const f=ks(sf(e)),u=(n=f.apiKey)!==null&&n!==void 0?n:null,l=(r=f.oobCode)!==null&&r!==void 0?r:null,c=GA((i=f.mode)!==null&&i!==void 0?i:null);D(u&&l&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=l,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(s=f.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(o=f.tenantId)!==null&&o!==void 0?o:null}static parseLink(e){const n=KA(e);try{return new o1(n)}catch{return null}}}/**
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
 */class Pi{constructor(){this.providerId=Pi.PROVIDER_ID}static credential(e,n){return hu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=o1.parseLink(n);return D(r,"argument-error"),hu._fromEmailAndCode(e,r.code,r.tenantId)}}Pi.PROVIDER_ID="password";Pi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class $r{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wo extends $r{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ds extends wo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return D("providerId"in n&&"signInMethod"in n,"argument-error"),hr._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return D(e.idToken||e.accessToken,"argument-error"),hr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ds.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ds.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:a,nonce:s,providerId:o}=e;if(!r&&!i&&!n&&!a||!o)return null;try{return new Ds(o)._credential({idToken:n,accessToken:r,nonce:s,pendingToken:a})}catch{return null}}}/**
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
 */class Xn extends wo{constructor(){super("facebook.com")}static credential(e){return hr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xn.PROVIDER_ID="facebook.com";/**
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
 */class Jn extends wo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
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
 */class Zn extends wo{constructor(){super("github.com")}static credential(e){return hr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
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
 */const QA="http://localhost";class Ws extends yo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Tr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Tr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Tr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:a}=n;return!r||!i||!a||r!==i?null:new Ws(r,a)}static _create(e,n){return new Ws(e,n)}buildRequest(){return{requestUri:QA,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const YA="saml.";class sd extends $r{constructor(e){D(e.startsWith(YA),"argument-error"),super(e)}static credentialFromResult(e){return sd.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return sd.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Ws.fromJSON(e);return D(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Ws._create(r,n)}catch{return null}}}/**
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
 */class er extends wo{constructor(){super("twitter.com")}static credential(e,n){return hr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return er.credential(n,r)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
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
 */async function j9(t,e){return Or(t,"POST","/v1/accounts:signUp",Xe(t,e))}/**
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
 */class Cn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const a=await la._fromIdTokenResponse(e,r,i),s=Sy(r);return new Cn({user:a,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Sy(r);return new Cn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Sy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function XA(t){var e;const n=rt(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Cn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await j9(n,{returnSecureToken:!0}),i=await Cn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class od extends Dt{constructor(e,n,r,i){var a;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,od.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new od(e,n,r,i)}}function U9(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?od._fromErrorAndOperation(t,a,e,r):a})}/**
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
 */function V9(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function JA(t,e){const n=W(t);await f1(!0,n,e);const{providerUserInfo:r}=await pA(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=V9(r||[]);return n.providerData=n.providerData.filter(a=>i.has(a.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Rg(t,e,n=!1){const r=await Dr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cn._forOperation(t,"link",r)}async function f1(t,e,n){await cu(e);const r=V9(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";D(r.has(n)===t,e.auth,i)}/**
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
 */async function z9(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const a=await Dr(t,U9(r,i,e,t),n);D(a.idToken,r,"internal-error");const s=a1(a.idToken);D(s,r,"internal-error");const{sub:o}=s;return D(t.uid===o,r,"user-mismatch"),Cn._forOperation(t,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&mt(r,"user-mismatch"),a}}/**
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
 */async function B9(t,e,n=!1){const r="signIn",i=await U9(t,r,e),a=await Cn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(a.user),a}async function u1(t,e){return B9(rt(t),e)}async function q9(t,e){const n=W(t);return await f1(!1,n,e.providerId),Rg(n,e)}async function H9(t,e){return z9(W(t),e)}/**
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
 */async function ZA(t,e){return Or(t,"POST","/v1/accounts:signInWithCustomToken",Xe(t,e))}/**
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
 */async function eR(t,e){const n=rt(t),r=await ZA(n,{token:e,returnSecureToken:!0}),i=await Cn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class l1{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Ng._fromServerResponse(e,n):mt(e,"internal-error")}}class Ng extends l1{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Ng(n)}}/**
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
 */function c1(t,e,n){var r;D(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),D(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(D(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(D(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function tR(t,e,n){const r=W(t),i={requestType:"PASSWORD_RESET",email:e};n&&c1(r,i,n),await OA(r,i)}async function nR(t,e,n){await $9(W(t),{oobCode:e,newPassword:n})}async function rR(t,e){await PA(W(t),{oobCode:e})}async function W9(t,e){const n=W(t),r=await $9(n,{oobCode:e}),i=r.requestType;switch(D(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":D(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":D(r.mfaInfo,n,"internal-error");default:D(r.email,n,"internal-error")}let a=null;return r.mfaInfo&&(a=l1._fromServerResponse(rt(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:a},operation:i}}async function iR(t,e){const{data:n}=await W9(W(t),e);return n.email}async function aR(t,e,n){const r=rt(t),i=await j9(r,{returnSecureToken:!0,email:e,password:n}),a=await Cn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(a.user),a}function sR(t,e,n){return u1(W(t),Pi.credential(e,n))}/**
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
 */async function oR(t,e,n){const r=W(t),i={requestType:"EMAIL_SIGNIN",email:e};D(n.handleCodeInApp,r,"argument-error"),n&&c1(r,i,n),await $A(r,i)}function fR(t,e){const n=o1.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function uR(t,e,n){const r=W(t),i=Pi.credentialWithLink(e,n||lu());return D(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),u1(r,i)}/**
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
 */async function lR(t,e){return at(t,"POST","/v1/accounts:createAuthUri",Xe(t,e))}/**
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
 */async function cR(t,e){const n=Tg()?lu():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await lR(W(t),r);return i||[]}async function dR(t,e){const n=W(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&c1(n.auth,i,e);const{email:a}=await LA(n.auth,i);a!==t.email&&await t.reload()}async function hR(t,e,n){const r=W(t),a={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&c1(r.auth,a,n);const{email:s}=await FA(r.auth,a);s!==t.email&&await t.reload()}/**
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
 */async function pR(t,e){return at(t,"POST","/v1/accounts:update",e)}/**
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
 */async function mR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=W(t),a={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await Dr(r,pR(r.auth,a));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const o=r.providerData.find(({providerId:f})=>f==="password");o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function gR(t,e){return G9(W(t),e,null)}function vR(t,e){return G9(W(t),null,e)}async function G9(t,e,n){const{auth:r}=t,a={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(a.email=e),n&&(a.password=n);const s=await Dr(t,F9(r,a));await t._updateTokensIfNecessary(s,!0)}/**
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
 */function yR(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},a=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const s=(n=(e=a1(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(s){const o=s!=="anonymous"&&s!=="custom"?s:null;return new Ps(a,o)}}if(!r)return null;switch(r){case"facebook.com":return new wR(a,i);case"github.com":return new bR(a,i);case"google.com":return new kR(a,i);case"twitter.com":return new ER(a,i,t.screenName||null);case"custom":case"anonymous":return new Ps(a,null);default:return new Ps(a,r,i)}}class Ps{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class K9 extends Ps{constructor(e,n,r,i){super(e,n,r),this.username=i}}class wR extends Ps{constructor(e,n){super(e,"facebook.com",n)}}class bR extends K9{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class kR extends Ps{constructor(e,n){super(e,"google.com",n)}}class ER extends K9{constructor(e,n,r){super(e,"twitter.com",n,r)}}function _R(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:yR(n)}class ra{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new ra("enroll",e,n)}static _fromMfaPendingCredential(e){return new ra("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return ra._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return ra._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Dg{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=rt(e),i=n.customData._serverResponse,a=(i.mfaInfo||[]).map(o=>l1._fromServerResponse(r,o));D(i.mfaPendingCredential,r,"internal-error");const s=ra._fromMfaPendingCredential(i.mfaPendingCredential);return new Dg(s,a,async o=>{const f=await o._process(r,s);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:f.idToken,refreshToken:f.refreshToken});switch(n.operationType){case"signIn":const l=await Cn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return D(n.user,r,"internal-error"),Cn._forOperation(n.user,n.operationType,u);default:mt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function IR(t,e){var n;const r=W(t),i=e;return D(e.customData.operationType,r,"argument-error"),D((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Dg._fromError(r,i)}/**
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
 */function SR(t,e){return at(t,"POST","/v2/accounts/mfaEnrollment:start",Xe(t,e))}function CR(t,e){return at(t,"POST","/v2/accounts/mfaEnrollment:finalize",Xe(t,e))}function TR(t,e){return at(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Xe(t,e))}class Pg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>l1._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Pg(e)}async getSession(){return ra._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),a=await Dr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(a),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Dr(this.user,TR(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:a})=>a!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Qh=new WeakMap;function xR(t){const e=W(t);return Qh.has(e)||Qh.set(e,Pg._fromUser(e)),Qh.get(e)}const fd="__sak";/**
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
 */class Q9{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fd,"1"),this.storage.removeItem(fd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function AR(){const t=Ne();return Ag(t)||vo(t)}const RR=1e3,NR=10;class Y9 extends Q9{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=AR()&&TA(),this.fallbackToPolling=M9(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,o,f)=>{this.notifyListeners(s,f)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},a=this.storage.getItem(r);CA()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,NR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},RR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Y9.type="LOCAL";const Mg=Y9;/**
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
 */class X9 extends Q9{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}X9.type="SESSION";const Ia=X9;/**
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
 */function DR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class d1{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new d1(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:a}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(s).map(async u=>u(n.origin,a)),f=await DR(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:f})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}d1.receivers=[];/**
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
 */function Gu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class PR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,s;return new Promise((o,f)=>{const u=Gu("",20);i.port1.start();const l=setTimeout(()=>{f(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(c){const d=c;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),o(d.data.response);break;default:clearTimeout(l),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Ke(){return window}function MR(t){Ke().location.href=t}/**
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
 */function Lg(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function LR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $R(){return Lg()?self:null}/**
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
 */const J9="firebaseLocalStorageDb",FR=1,ud="firebaseLocalStorage",Z9="fbase_key";class Ku{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function h1(t,e){return t.transaction([ud],e?"readwrite":"readonly").objectStore(ud)}function jR(){const t=indexedDB.deleteDatabase(J9);return new Ku(t).toPromise()}function bp(){const t=indexedDB.open(J9,FR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ud,{keyPath:Z9})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ud)?e(r):(r.close(),await jR(),e(await bp()))})})}async function Cy(t,e,n){const r=h1(t,!0).put({[Z9]:e,value:n});return new Ku(r).toPromise()}async function UR(t,e){const n=h1(t,!1).get(e),r=await new Ku(n).toPromise();return r===void 0?null:r.value}function Ty(t,e){const n=h1(t,!0).delete(e);return new Ku(n).toPromise()}const VR=800,zR=3;class ek{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>zR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=d1._getInstance($R()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await LR(),!this.activeServiceWorker)return;this.sender=new PR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bp();return await Cy(e,fd,"1"),await Ty(e,fd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>UR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ty(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=h1(i,!1).getAll();return new Ku(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:a}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ek.type="LOCAL";const pu=ek;/**
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
 */function BR(t,e){return at(t,"POST","/v2/accounts/mfaSignIn:start",Xe(t,e))}function qR(t,e){return at(t,"POST","/v2/accounts/mfaSignIn:finalize",Xe(t,e))}/**
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
 */async function HR(t){return(await at(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function WR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function tk(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const a=dt("internal-error");a.customData=i,n(a)},r.type="text/javascript",r.charset="UTF-8",WR().appendChild(r)})}function nk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const GR=500,KR=6e4,Bl=1e12;class QR{constructor(e){this.auth=e,this.counter=Bl,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new YR(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Bl;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Bl;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Bl;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class YR{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;D(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=XR(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},KR)},GR))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function XR(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Yh=nk("rcb"),JR=new Hu(3e4,6e4),ZR="https://www.google.com/recaptcha/api.js?";class eN{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ke().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return D(tN(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Ke().grecaptcha):new Promise((r,i)=>{const a=Ke().setTimeout(()=>{i(dt(e,"network-request-failed"))},JR.get());Ke()[Yh]=()=>{Ke().clearTimeout(a),delete Ke()[Yh];const o=Ke().grecaptcha;if(!o){i(dt(e,"internal-error"));return}const f=o.render;o.render=(u,l)=>{const c=f(u,l);return this.counter++,c},this.hostLanguage=n,r(o)};const s=`${ZR}?${mo({onload:Yh,render:"explicit",hl:n})}`;tk(s).catch(()=>{clearTimeout(a),i(dt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Ke().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function tN(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class nN{async load(e){return new QR(e)}clearedOneInstance(){}}/**
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
 */const rk="recaptcha",rN={theme:"light",type:"image"};let iN=class{constructor(e,n=Object.assign({},rN),r){this.parameters=n,this.type=rk,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=rt(r),this.isInvisible=this.parameters.size==="invisible",D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;D(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new nN:new eN,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const a=s=>{s&&(this.tokenChangeListeners.delete(a),i(s))};this.tokenChangeListeners.add(a),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){D(!this.parameters.sitekey,this.auth,"argument-error"),D(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ke()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){D(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){D(Tg()&&!Lg(),this.auth,"internal-error"),await aN(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await HR(this.auth);D(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return D(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function aN(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Og{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=da._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function sN(t,e,n){const r=rt(t),i=await p1(r,e,W(n));return new Og(i,a=>u1(r,a))}async function oN(t,e,n){const r=W(t);await f1(!1,r,"phone");const i=await p1(r.auth,e,W(n));return new Og(i,a=>q9(r,a))}async function fN(t,e,n){const r=W(t),i=await p1(r.auth,e,W(n));return new Og(i,a=>H9(r,a))}async function p1(t,e,n){var r;const i=await n.verify();try{D(typeof i=="string",t,"argument-error"),D(n.type===rk,t,"argument-error");let a;if(typeof e=="string"?a={phoneNumber:e}:a=e,"session"in a){const s=a.session;if("phoneNumber"in a)return D(s.type==="enroll",t,"internal-error"),(await SR(t,{idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{D(s.type==="signin",t,"internal-error");const o=((r=a.multiFactorHint)===null||r===void 0?void 0:r.uid)||a.multiFactorUid;return D(o,t,"missing-multi-factor-info"),(await BR(t,{mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:s}=await zA(t,{phoneNumber:a.phoneNumber,recaptchaToken:i});return s}}finally{n._reset()}}async function uN(t,e){await Rg(W(t),e)}/**
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
 */let Sa=class mc{constructor(e){this.providerId=mc.PROVIDER_ID,this.auth=rt(e)}verifyPhoneNumber(e,n){return p1(this.auth,e,W(n))}static credential(e,n){return da._fromVerification(e,n)}static credentialFromResult(e){const n=e;return mc.credentialFromTaggedObject(n)}static credentialFromError(e){return mc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?da._fromTokenResponse(n,r):null}};Sa.PROVIDER_ID="phone";Sa.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Va(t,e){return e?sn(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $g extends yo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Tr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Tr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lN(t){return B9(t.auth,new $g(t),t.bypassAuthState)}function cN(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),z9(n,new $g(t),t.bypassAuthState)}async function dN(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),Rg(n,new $g(t),t.bypassAuthState)}/**
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
 */class ik{constructor(e,n,r,i,a=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:a,error:s,type:o}=e;if(s){this.reject(s);return}const f={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(f))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lN;case"linkViaPopup":case"linkViaRedirect":return dN;case"reauthViaPopup":case"reauthViaRedirect":return cN;default:mt(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const hN=new Hu(2e3,1e4);async function pN(t,e,n){const r=rt(t);go(t,e,$r);const i=Va(r,n);return new Er(r,"signInViaPopup",e,i).executeNotNull()}async function mN(t,e,n){const r=W(t);go(r.auth,e,$r);const i=Va(r.auth,n);return new Er(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function gN(t,e,n){const r=W(t);go(r.auth,e,$r);const i=Va(r.auth,n);return new Er(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Er extends ik{constructor(e,n,r,i,a){super(e,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,Er.currentPopupAction&&Er.currentPopupAction.cancel(),Er.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=Gu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Er.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,hN.get())};e()}}Er.currentPopupAction=null;/**
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
 */const vN="pendingRedirect",Tf=new Map;class yN extends ik{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Tf.get(this.auth._key());if(!e){try{const r=await wN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Tf.set(this.auth._key(),e)}return this.bypassAuthState||Tf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wN(t,e){const n=sk(e),r=ak(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Fg(t,e){return ak(t)._set(sk(e),"true")}function bN(){Tf.clear()}function jg(t,e){Tf.set(t._key(),e)}function ak(t){return sn(t._redirectPersistence)}function sk(t){return ca(vN,t.config.apiKey,t.name)}/**
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
 */function kN(t,e,n){return EN(t,e,n)}async function EN(t,e,n){const r=rt(t);go(t,e,$r),await r._initializationPromise;const i=Va(r,n);return await Fg(i,r),i._openRedirect(r,e,"signInViaRedirect")}function _N(t,e,n){return IN(t,e,n)}async function IN(t,e,n){const r=W(t);go(r.auth,e,$r),await r.auth._initializationPromise;const i=Va(r.auth,n);await Fg(i,r.auth);const a=await ok(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",a)}function SN(t,e,n){return CN(t,e,n)}async function CN(t,e,n){const r=W(t);go(r.auth,e,$r),await r.auth._initializationPromise;const i=Va(r.auth,n);await f1(!1,r,e.providerId),await Fg(i,r.auth);const a=await ok(r);return i._openRedirect(r.auth,e,"linkViaRedirect",a)}async function TN(t,e){return await rt(t)._initializationPromise,m1(t,e,!1)}async function m1(t,e,n=!1){const r=rt(t),i=Va(r,e),s=await new yN(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}async function ok(t){const e=Gu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const xN=10*60*1e3;class fk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!uk(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xN&&this.cachedEventUids.clear(),this.cachedEventUids.has(xy(e))}saveEventToCache(e){this.cachedEventUids.add(xy(e)),this.lastProcessedEventTime=Date.now()}}function xy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uk({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function AN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uk(t);default:return!1}}/**
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
 */async function lk(t,e={}){return at(t,"GET","/v1/projects",e)}/**
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
 */const RN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NN=/^https?/;async function DN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lk(t);for(const n of e)try{if(PN(n))return}catch{}mt(t,"unauthorized-domain")}function PN(t){const e=lu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!NN.test(n))return!1;if(RN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const MN=new Hu(3e4,6e4);function Ay(){const t=Ke().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function LN(t){return new Promise((e,n)=>{var r,i,a;function s(){Ay(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ay(),n(dt(t,"network-request-failed"))},timeout:MN.get()})}if(!((i=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((a=Ke().gapi)===null||a===void 0)&&a.load)s();else{const o=nk("iframefcb");return Ke()[o]=()=>{gapi.load?s():n(dt(t,"network-request-failed"))},tk(`https://apis.google.com/js/api.js?onload=${o}`).catch(f=>n(f))}}).catch(e=>{throw gc=null,e})}let gc=null;function ON(t){return gc=gc||LN(t),gc}/**
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
 */const $N=new Hu(5e3,15e3),FN="__/auth/iframe",jN="emulator/auth/iframe",UN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zN(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xg(e,jN):`https://${t.config.authDomain}/${FN}`,r={apiKey:e.apiKey,appName:t.name,v:Ua},i=VN.get(t.config.apiHost);i&&(r.eid=i);const a=t._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${mo(r).slice(1)}`}async function BN(t){const e=await ON(t),n=Ke().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:zN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UN,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const s=dt(t,"network-request-failed"),o=Ke().setTimeout(()=>{a(s)},$N.get());function f(){Ke().clearTimeout(o),i(r)}r.ping(f).then(f,()=>{a(s)})}))}/**
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
 */const qN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HN=500,WN=600,GN="_blank",KN="http://localhost";class Ry{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QN(t,e,n,r=HN,i=WN){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const f=Object.assign(Object.assign({},qN),{width:r.toString(),height:i.toString(),top:a,left:s}),u=Ne().toLowerCase();n&&(o=R9(u)?GN:n),A9(u)&&(e=e||KN,f.scrollbars="yes");const l=Object.entries(f).reduce((d,[h,m])=>`${d}${h}=${m},`,"");if(SA(u)&&o!=="_self")return YN(e||"",o),new Ry(null);const c=window.open(e||"",o,l);D(c,t,"popup-blocked");try{c.focus()}catch{}return new Ry(c)}function YN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const XN="__/auth/handler",JN="emulator/auth/handler";function kp(t,e,n,r,i,a){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ua,eventId:i};if(e instanceof $r){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",OT(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,u]of Object.entries(a||{}))s[f]=u}if(e instanceof wo){const f=e.getScopes().filter(u=>u!=="");f.length>0&&(s.scopes=f.join(","))}t.tenantId&&(s.tid=t.tenantId);const o=s;for(const f of Object.keys(o))o[f]===void 0&&delete o[f];return`${ZN(t)}?${mo(o).slice(1)}`}function ZN({config:t}){return t.emulator?xg(t,JN):`https://${t.authDomain}/${XN}`}/**
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
 */const Xh="webStorageSupport";class eD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ia,this._completeRedirectFn=m1,this._overrideRedirectResult=jg}async _openPopup(e,n,r,i){var a;qn((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const s=kp(e,n,r,lu(),i);return QN(e,s,Gu())}async _openRedirect(e,n,r,i){return await this._originValidation(e),MR(kp(e,n,r,lu(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:a}=this.eventManagers[n];return i?Promise.resolve(i):(qn(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await BN(e),r=new fk(e);return n.register("authEvent",i=>(D(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xh,{type:Xh},i=>{var a;const s=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[Xh];s!==void 0&&n(!!s),mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return M9()||Ag()||vo()}}const tD=eD;class nD{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return nr("unexpected MultiFactorSessionType")}}}class Ug extends nD{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ug(e)}_finalizeEnroll(e,n,r){return CR(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return qR(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ck{constructor(){}static assertion(e){return Ug._fromCredential(e)}}ck.FACTOR_ID="phone";var Ny="@firebase/auth",Dy="0.21.3";/**
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
 */class rD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function iD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function aD(t){bi(new dr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:a,authDomain:s}=r.options;return((o,f)=>{D(a&&!a.includes(":"),"invalid-api-key",{appName:o.name}),D(!(s!=null&&s.includes(":")),"argument-error",{appName:o.name});const u={apiKey:a,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:L9(t)},l=new AA(o,f,u);return oA(l,n),l})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),bi(new dr("auth-internal",e=>{const n=rt(e.getProvider("auth").getImmediate());return(r=>new rD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fr(Ny,Dy,iD(t)),fr(Ny,Dy,"esm2017")}/**
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
 */const sD=5*60;CT("authIdTokenMaxAge");aD("Browser");/**
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
 */function Ca(){return window}/**
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
 */const oD=2e3;async function fD(t,e,n){var r;const{BuildInfo:i}=Ca();qn(e.sessionId,"AuthEvent did not contain a session ID");const a=await hD(e.sessionId),s={};return vo()?s.ibi=i.packageName:Wu()?s.apn=i.packageName:mt(t,"operation-not-supported-in-this-environment"),i.displayName&&(s.appDisplayName=i.displayName),s.sessionId=a,kp(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,s)}async function uD(t){const{BuildInfo:e}=Ca(),n={};vo()?n.iosBundleId=e.packageName:Wu()?n.androidPackageName=e.packageName:mt(t,"operation-not-supported-in-this-environment"),await lk(t,n)}function lD(t){const{cordova:e}=Ca();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,IA()?"_blank":"_system","location=yes"),n(i)})})}async function cD(t,e,n){const{cordova:r}=Ca();let i=()=>{};try{await new Promise((a,s)=>{let o=null;function f(){var c;a();const d=(c=r.plugins.browsertab)===null||c===void 0?void 0:c.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){o||(o=window.setTimeout(()=>{s(dt(t,"redirect-cancelled-by-user"))},oD))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(f),document.addEventListener("resume",u,!1),Wu()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(f),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),o&&window.clearTimeout(o)}})}finally{i()}}function dD(t){var e,n,r,i,a,s,o,f,u,l;const c=Ca();D(typeof((e=c==null?void 0:c.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),D(typeof((n=c==null?void 0:c.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),D(typeof((a=(i=(r=c==null?void 0:c.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||a===void 0?void 0:a.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),D(typeof((f=(o=(s=c==null?void 0:c.cordova)===null||s===void 0?void 0:s.plugins)===null||o===void 0?void 0:o.browsertab)===null||f===void 0?void 0:f.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),D(typeof((l=(u=c==null?void 0:c.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function hD(t){const e=pD(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function pD(t){if(qn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const mD=20;class gD extends fk{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function vD(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:bD(),postBody:null,tenantId:t.tenantId,error:dt(t,"no-auth-event")}}function yD(t,e){return Ep()._set(_p(t),e)}async function Py(t){const e=await Ep()._get(_p(t));return e&&await Ep()._remove(_p(t)),e}function wD(t,e){var n,r;const i=ED(e);if(i.includes("/__/auth/callback")){const a=vc(i),s=a.firebaseError?kD(decodeURIComponent(a.firebaseError)):null,o=(r=(n=s==null?void 0:s.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],f=o?dt(o):null;return f?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:f,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function bD(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<mD;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Ep(){return sn(Mg)}function _p(t){return ca("authEvent",t.config.apiKey,t.name)}function kD(t){try{return JSON.parse(t)}catch{return null}}function ED(t){const e=vc(t),n=e.link?decodeURIComponent(e.link):void 0,r=vc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return vc(i).link||i||r||n||t}function vc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return ks(n.join("?"))}/**
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
 */const _D=500;class ID{constructor(){this._redirectPersistence=Ia,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=m1,this._overrideRedirectResult=jg}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new gD(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){mt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){dD(e);const a=await this._initialize(e);await a.initialized(),a.resetRedirect(),bN(),await this._originValidation(e);const s=vD(e,r,i);await yD(e,s);const o=await fD(e,s,n),f=await lD(o);return cD(e,a,f)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uD(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:a}=Ca(),s=setTimeout(async()=>{await Py(e),n.onEvent(My())},_D),o=async l=>{clearTimeout(s);const c=await Py(e);let d=null;c&&(l!=null&&l.url)&&(d=wD(c,l.url)),n.onEvent(d||My())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,o);const f=i,u=`${a.packageName.toLowerCase()}://`;Ca().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&o({url:l}),typeof f=="function")try{f(l)}catch(c){console.error(c)}}}}const SD=ID;function My(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:dt("no-auth-event")}}/**
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
 */function CD(t,e){rt(t)._logFramework(e)}var TD="@firebase/auth-compat",xD="0.3.3";/**
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
 */const AD=1e3;function xf(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function RD(){return xf()==="http:"||xf()==="https:"}function dk(t=Ne()){return!!((xf()==="file:"||xf()==="ionic:"||xf()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function ND(){return kg()||bg()}function DD(){return f9()&&(document==null?void 0:document.documentMode)===11}function PD(t=Ne()){return/Edge\/\d+/.test(t)}function MD(t=Ne()){return DD()||PD(t)}function hk(){try{const t=self.localStorage,e=Gu();if(t)return t.setItem(e,"1"),t.removeItem(e),MD()?ou():!0}catch{return Vg()&&ou()}return!1}function Vg(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Jh(){return(RD()||o9()||dk())&&!ND()&&hk()&&!Vg()}function pk(){return dk()&&typeof document<"u"}async function LD(){return pk()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},AD);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function OD(){return typeof window<"u"?window:null}/**
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
 */const rn={LOCAL:"local",NONE:"none",SESSION:"session"},Ho=D,mk="persistence";function $D(t,e){if(Ho(Object.values(rn).includes(e),t,"invalid-persistence-type"),kg()){Ho(e!==rn.SESSION,t,"unsupported-persistence-type");return}if(bg()){Ho(e===rn.NONE,t,"unsupported-persistence-type");return}if(Vg()){Ho(e===rn.NONE||e===rn.LOCAL&&ou(),t,"unsupported-persistence-type");return}Ho(e===rn.NONE||hk(),t,"unsupported-persistence-type")}async function Ip(t){await t._initializationPromise;const e=gk(),n=ca(mk,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function FD(t,e){const n=gk();if(!n)return[];const r=ca(mk,t,e);switch(n.getItem(r)){case rn.NONE:return[Hs];case rn.LOCAL:return[pu,Ia];case rn.SESSION:return[Ia];default:return[]}}function gk(){var t;try{return((t=OD())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const jD=D;class ri{constructor(){this.browserResolver=sn(tD),this.cordovaResolver=sn(SD),this.underlyingResolver=null,this._redirectPersistence=Ia,this._completeRedirectFn=m1,this._overrideRedirectResult=jg}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return pk()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return jD(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await LD();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function vk(t){return t.unwrap()}function UD(t){return t.wrapped()}/**
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
 */function VD(t){return yk(t)}function zD(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new BD(t,IR(t,e))}else if(r){const i=yk(e),a=e;i&&(a.credential=i,a.tenantId=r.tenantId||void 0,a.email=r.email||void 0,a.phoneNumber=r.phoneNumber||void 0)}}function yk(t){const{_tokenResponse:e}=t instanceof Dt?t.customData:t;if(!e)return null;if(!(t instanceof Dt)&&"temporaryProof"in e&&"phoneNumber"in e)return Sa.credentialFromResult(t);const n=e.providerId;if(!n||n===qo.PASSWORD)return null;let r;switch(n){case qo.GOOGLE:r=Jn;break;case qo.FACEBOOK:r=Xn;break;case qo.GITHUB:r=Zn;break;case qo.TWITTER:r=er;break;default:const{oauthIdToken:i,oauthAccessToken:a,oauthTokenSecret:s,pendingToken:o,nonce:f}=e;return!a&&!s&&!i&&!o?null:o?n.startsWith("saml.")?Ws._create(n,o):hr._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:i,accessToken:a}):new Ds(n).credential({idToken:i,accessToken:a,rawNonce:f})}return t instanceof Dt?r.credentialFromError(t):r.credentialFromResult(t)}function Ft(t,e){return e.catch(n=>{throw n instanceof Dt&&zD(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:VD(n),additionalUserInfo:_R(n),user:_r.getOrCreate(i)}})}async function Sp(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Ft(t,n.confirm(r))}}class BD{constructor(e,n){this.resolver=n,this.auth=UD(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ft(vk(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class _r{constructor(e){this._delegate=e,this.multiFactor=xR(e)}static getOrCreate(e){return _r.USER_MAP.has(e)||_r.USER_MAP.set(e,new _r(e)),_r.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ft(this.auth,q9(this._delegate,e))}async linkWithPhoneNumber(e,n){return Sp(this.auth,oN(this._delegate,e,n))}async linkWithPopup(e){return Ft(this.auth,gN(this._delegate,e,ri))}async linkWithRedirect(e){return await Ip(rt(this.auth)),SN(this._delegate,e,ri)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ft(this.auth,H9(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Sp(this.auth,fN(this._delegate,e,n))}reauthenticateWithPopup(e){return Ft(this.auth,mN(this._delegate,e,ri))}async reauthenticateWithRedirect(e){return await Ip(rt(this.auth)),_N(this._delegate,e,ri)}sendEmailVerification(e){return dR(this._delegate,e)}async unlink(e){return await JA(this._delegate,e),this}updateEmail(e){return gR(this._delegate,e)}updatePassword(e){return vR(this._delegate,e)}updatePhoneNumber(e){return uN(this._delegate,e)}updateProfile(e){return mR(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return hR(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}_r.USER_MAP=new WeakMap;/**
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
 */const Wo=D;class Cp{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Wo(r,"invalid-api-key",{appName:e.name}),Wo(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?ri:void 0;this._delegate=n.initialize({options:{persistence:qD(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(aA),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?_r.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){RA(this._delegate,e,n)}applyActionCode(e){return rR(this._delegate,e)}checkActionCode(e){return W9(this._delegate,e)}confirmPasswordReset(e,n){return nR(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Ft(this._delegate,aR(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return cR(this._delegate,e)}isSignInWithEmailLink(e){return fR(this._delegate,e)}async getRedirectResult(){Wo(Jh(),this._delegate,"operation-not-supported-in-this-environment");const e=await TN(this._delegate,ri);return e?Ft(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){CD(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:a,complete:s}=Ly(e,n,r);return this._delegate.onAuthStateChanged(i,a,s)}onIdTokenChanged(e,n,r){const{next:i,error:a,complete:s}=Ly(e,n,r);return this._delegate.onIdTokenChanged(i,a,s)}sendSignInLinkToEmail(e,n){return oR(this._delegate,e,n)}sendPasswordResetEmail(e,n){return tR(this._delegate,e,n||void 0)}async setPersistence(e){$D(this._delegate,e);let n;switch(e){case rn.SESSION:n=Ia;break;case rn.LOCAL:n=await sn(pu)._isAvailable()?pu:Mg;break;case rn.NONE:n=Hs;break;default:return mt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ft(this._delegate,XA(this._delegate))}signInWithCredential(e){return Ft(this._delegate,u1(this._delegate,e))}signInWithCustomToken(e){return Ft(this._delegate,eR(this._delegate,e))}signInWithEmailAndPassword(e,n){return Ft(this._delegate,sR(this._delegate,e,n))}signInWithEmailLink(e,n){return Ft(this._delegate,uR(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Sp(this._delegate,sN(this._delegate,e,n))}async signInWithPopup(e){return Wo(Jh(),this._delegate,"operation-not-supported-in-this-environment"),Ft(this._delegate,pN(this._delegate,e,ri))}async signInWithRedirect(e){return Wo(Jh(),this._delegate,"operation-not-supported-in-this-environment"),await Ip(this._delegate),kN(this._delegate,e,ri)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return iR(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Cp.Persistence=rn;function Ly(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:s=>i(s&&_r.getOrCreate(s)),error:e,complete:n}}function qD(t,e){const n=FD(t,e);if(typeof self<"u"&&!n.includes(pu)&&n.push(pu),typeof window<"u")for(const r of[Mg,Ia])n.includes(r)||n.push(r);return n.includes(Hs)||n.push(Hs),n}/**
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
 */class zg{constructor(){this.providerId="phone",this._delegate=new Sa(vk(wn.auth()))}static credential(e,n){return Sa.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}zg.PHONE_SIGN_IN_METHOD=Sa.PHONE_SIGN_IN_METHOD;zg.PROVIDER_ID=Sa.PROVIDER_ID;/**
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
 */const HD=D;class WD{constructor(e,n,r=wn.app()){var i;HD((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new iN(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const GD="auth-compat";function KD(t){t.INTERNAL.registerComponent(new dr(GD,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Cp(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ts.EMAIL_SIGNIN,PASSWORD_RESET:ts.PASSWORD_RESET,RECOVER_EMAIL:ts.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ts.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ts.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ts.VERIFY_EMAIL}},EmailAuthProvider:Pi,FacebookAuthProvider:Xn,GithubAuthProvider:Zn,GoogleAuthProvider:Jn,OAuthProvider:Ds,SAMLAuthProvider:sd,PhoneAuthProvider:zg,PhoneMultiFactorGenerator:ck,RecaptchaVerifier:WD,TwitterAuthProvider:er,Auth:Cp,AuthCredential:yo,Error:Dt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(TD,xD)}KD(wn);var QD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,Bg=Bg||{},Q=QD||self;function ld(){}function g1(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Qu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function YD(t){return Object.prototype.hasOwnProperty.call(t,Zh)&&t[Zh]||(t[Zh]=++XD)}var Zh="closure_uid_"+(1e9*Math.random()>>>0),XD=0;function JD(t,e,n){return t.call.apply(t.bind,arguments)}function ZD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function kt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?kt=JD:kt=ZD,kt.apply(null,arguments)}function ql(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function vt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,a){for(var s=Array(arguments.length-2),o=2;o<arguments.length;o++)s[o-2]=arguments[o];return e.prototype[i].apply(r,s)}}function Mi(){this.s=this.s,this.o=this.o}var eP=0;Mi.prototype.s=!1;Mi.prototype.na=function(){!this.s&&(this.s=!0,this.M(),eP!=0)&&YD(this)};Mi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const wk=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function qg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Oy(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(g1(r)){const i=t.length||0,a=r.length||0;t.length=i+a;for(let s=0;s<a;s++)t[i+s]=r[s]}else t.push(r)}}function Et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Et.prototype.h=function(){this.defaultPrevented=!0};var tP=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",ld,e),Q.removeEventListener("test",ld,e)}catch{}return t}();function cd(t){return/^[\s\xa0]*$/.test(t)}var $y=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function e0(t,e){return t<e?-1:t>e?1:0}function v1(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function tr(t){return v1().indexOf(t)!=-1}function Hg(t){return Hg[" "](t),t}Hg[" "]=ld;function nP(t){var e=aP;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var rP=tr("Opera"),Gs=tr("Trident")||tr("MSIE"),bk=tr("Edge"),Tp=bk||Gs,kk=tr("Gecko")&&!(v1().toLowerCase().indexOf("webkit")!=-1&&!tr("Edge"))&&!(tr("Trident")||tr("MSIE"))&&!tr("Edge"),iP=v1().toLowerCase().indexOf("webkit")!=-1&&!tr("Edge");function Ek(){var t=Q.document;return t?t.documentMode:void 0}var dd;e:{var t0="",n0=function(){var t=v1();if(kk)return/rv:([^\);]+)(\)|;)/.exec(t);if(bk)return/Edge\/([\d\.]+)/.exec(t);if(Gs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(iP)return/WebKit\/(\S+)/.exec(t);if(rP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(n0&&(t0=n0?n0[1]:""),Gs){var r0=Ek();if(r0!=null&&r0>parseFloat(t0)){dd=String(r0);break e}}dd=t0}var aP={};function sP(){return nP(function(){let t=0;const e=$y(String(dd)).split("."),n=$y("9").split("."),r=Math.max(e.length,n.length);for(let s=0;t==0&&s<r;s++){var i=e[s]||"",a=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],i[0].length==0&&a[0].length==0)break;t=e0(i[1].length==0?0:parseInt(i[1],10),a[1].length==0?0:parseInt(a[1],10))||e0(i[2].length==0,a[2].length==0)||e0(i[2],a[2]),i=i[3],a=a[3]}while(t==0)}return 0<=t})}var xp;if(Q.document&&Gs){var Fy=Ek();xp=Fy||parseInt(dd,10)||void 0}else xp=void 0;var oP=xp;function mu(t,e){if(Et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(kk){e:{try{Hg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:fP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&mu.X.h.call(this)}}vt(mu,Et);var fP={2:"touch",3:"pen",4:"mouse"};mu.prototype.h=function(){mu.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Yu="closure_listenable_"+(1e6*Math.random()|0),uP=0;function lP(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++uP,this.ba=this.ea=!1}function y1(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Wg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function _k(t){const e={};for(const n in t)e[n]=t[n];return e}const jy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ik(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let a=0;a<jy.length;a++)n=jy[a],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function w1(t){this.src=t,this.g={},this.h=0}w1.prototype.add=function(t,e,n,r,i){var a=t.toString();t=this.g[a],t||(t=this.g[a]=[],this.h++);var s=Rp(t,e,r,i);return-1<s?(e=t[s],n||(e.ea=!1)):(e=new lP(e,this.src,a,!!r,i),e.ea=n,t.push(e)),e};function Ap(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=wk(r,e),a;(a=0<=i)&&Array.prototype.splice.call(r,i,1),a&&(y1(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Rp(t,e,n,r){for(var i=0;i<t.length;++i){var a=t[i];if(!a.ba&&a.listener==e&&a.capture==!!n&&a.ha==r)return i}return-1}var Gg="closure_lm_"+(1e6*Math.random()|0),i0={};function Sk(t,e,n,r,i){if(r&&r.once)return Tk(t,e,n,r,i);if(Array.isArray(e)){for(var a=0;a<e.length;a++)Sk(t,e[a],n,r,i);return null}return n=Yg(n),t&&t[Yu]?t.N(e,n,Qu(r)?!!r.capture:!!r,i):Ck(t,e,n,!1,r,i)}function Ck(t,e,n,r,i,a){if(!e)throw Error("Invalid event type");var s=Qu(i)?!!i.capture:!!i,o=Qg(t);if(o||(t[Gg]=o=new w1(t)),n=o.add(e,n,r,s,a),n.proxy)return n;if(r=cP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)tP||(i=s),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Ak(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function cP(){function t(n){return e.call(t.src,t.listener,n)}const e=dP;return t}function Tk(t,e,n,r,i){if(Array.isArray(e)){for(var a=0;a<e.length;a++)Tk(t,e[a],n,r,i);return null}return n=Yg(n),t&&t[Yu]?t.O(e,n,Qu(r)?!!r.capture:!!r,i):Ck(t,e,n,!0,r,i)}function xk(t,e,n,r,i){if(Array.isArray(e))for(var a=0;a<e.length;a++)xk(t,e[a],n,r,i);else r=Qu(r)?!!r.capture:!!r,n=Yg(n),t&&t[Yu]?(t=t.i,e=String(e).toString(),e in t.g&&(a=t.g[e],n=Rp(a,n,r,i),-1<n&&(y1(a[n]),Array.prototype.splice.call(a,n,1),a.length==0&&(delete t.g[e],t.h--)))):t&&(t=Qg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Rp(e,n,r,i)),(n=-1<t?e[t]:null)&&Kg(n))}function Kg(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Yu])Ap(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ak(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Qg(e))?(Ap(n,t),n.h==0&&(n.src=null,e[Gg]=null)):y1(t)}}}function Ak(t){return t in i0?i0[t]:i0[t]="on"+t}function dP(t,e){if(t.ba)t=!0;else{e=new mu(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Kg(t),t=n.call(r,e)}return t}function Qg(t){return t=t[Gg],t instanceof w1?t:null}var a0="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yg(t){return typeof t=="function"?t:(t[a0]||(t[a0]=function(e){return t.handleEvent(e)}),t[a0])}function it(){Mi.call(this),this.i=new w1(this),this.P=this,this.I=null}vt(it,Mi);it.prototype[Yu]=!0;it.prototype.removeEventListener=function(t,e,n,r){xk(this,t,e,n,r)};function ht(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Et(e,t);else if(e instanceof Et)e.target=e.target||t;else{var i=e;e=new Et(r,t),Ik(e,i)}if(i=!0,n)for(var a=n.length-1;0<=a;a--){var s=e.g=n[a];i=Hl(s,r,!0,e)&&i}if(s=e.g=t,i=Hl(s,r,!0,e)&&i,i=Hl(s,r,!1,e)&&i,n)for(a=0;a<n.length;a++)s=e.g=n[a],i=Hl(s,r,!1,e)&&i}it.prototype.M=function(){if(it.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)y1(n[r]);delete t.g[e],t.h--}}this.I=null};it.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};it.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Hl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,a=0;a<e.length;++a){var s=e[a];if(s&&!s.ba&&s.capture==n){var o=s.listener,f=s.ha||s.src;s.ea&&Ap(t.i,s),i=o.call(f,r)!==!1&&i}}return i&&!r.defaultPrevented}var Xg=Q.JSON.stringify;function hP(){var t=Dk;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class pP{constructor(){this.h=this.g=null}add(e,n){const r=Rk.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Rk=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new mP,t=>t.reset());class mP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function gP(t){Q.setTimeout(()=>{throw t},0)}function Nk(t,e){Np||vP(),Dp||(Np(),Dp=!0),Dk.add(t,e)}var Np;function vP(){var t=Q.Promise.resolve(void 0);Np=function(){t.then(yP)}}var Dp=!1,Dk=new pP;function yP(){for(var t;t=hP();){try{t.h.call(t.g)}catch(n){gP(n)}var e=Rk;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Dp=!1}function b1(t,e){it.call(this),this.h=t||1,this.g=e||Q,this.j=kt(this.lb,this),this.l=Date.now()}vt(b1,it);U=b1.prototype;U.ca=!1;U.R=null;U.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ht(this,"tick"),this.ca&&(Jg(this),this.start()))}};U.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Jg(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}U.M=function(){b1.X.M.call(this),Jg(this),delete this.g};function Zg(t,e,n){if(typeof t=="function")n&&(t=kt(t,n));else if(t&&typeof t.handleEvent=="function")t=kt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function Pk(t){t.g=Zg(()=>{t.g=null,t.i&&(t.i=!1,Pk(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class wP extends Mi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Pk(this)}M(){super.M(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gu(t){Mi.call(this),this.h=t,this.g={}}vt(gu,Mi);var Uy=[];function Mk(t,e,n,r){Array.isArray(n)||(n&&(Uy[0]=n.toString()),n=Uy);for(var i=0;i<n.length;i++){var a=Sk(e,n[i],r||t.handleEvent,!1,t.h||t);if(!a)break;t.g[a.key]=a}}function Lk(t){Wg(t.g,function(e,n){this.g.hasOwnProperty(n)&&Kg(e)},t),t.g={}}gu.prototype.M=function(){gu.X.M.call(this),Lk(this)};gu.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function k1(){this.g=!0}k1.prototype.Aa=function(){this.g=!1};function bP(t,e,n,r,i,a){t.info(function(){if(t.g)if(a)for(var s="",o=a.split("&"),f=0;f<o.length;f++){var u=o[f].split("=");if(1<u.length){var l=u[0];u=u[1];var c=l.split("_");s=2<=c.length&&c[1]=="type"?s+(l+"="+u+"&"):s+(l+"=redacted&")}}else s=null;else s=a;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+s})}function kP(t,e,n,r,i,a,s){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+a+" "+s})}function Es(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+_P(t,n)+(r?" "+r:"")})}function EP(t,e){t.info(function(){return"TIMEOUT: "+e})}k1.prototype.info=function(){};function _P(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var a=i[0];if(a!="noop"&&a!="stop"&&a!="close")for(var s=1;s<i.length;s++)i[s]=""}}}}return Xg(n)}catch{return e}}var za={},Vy=null;function E1(){return Vy=Vy||new it}za.Pa="serverreachability";function Ok(t){Et.call(this,za.Pa,t)}vt(Ok,Et);function vu(t){const e=E1();ht(e,new Ok(e))}za.STAT_EVENT="statevent";function $k(t,e){Et.call(this,za.STAT_EVENT,t),this.stat=e}vt($k,Et);function Rt(t){const e=E1();ht(e,new $k(e,t))}za.Qa="timingevent";function Fk(t,e){Et.call(this,za.Qa,t),this.size=e}vt(Fk,Et);function Xu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var _1={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},jk={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function e2(){}e2.prototype.h=null;function zy(t){return t.h||(t.h=t.i())}function Uk(){}var Ju={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function t2(){Et.call(this,"d")}vt(t2,Et);function n2(){Et.call(this,"c")}vt(n2,Et);var Pp;function I1(){}vt(I1,e2);I1.prototype.g=function(){return new XMLHttpRequest};I1.prototype.i=function(){return{}};Pp=new I1;function Zu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new gu(this),this.O=IP,t=Tp?125:void 0,this.T=new b1(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Vk}function Vk(){this.i=null,this.g="",this.h=!1}var IP=45e3,Mp={},hd={};U=Zu.prototype;U.setTimeout=function(t){this.O=t};function Lp(t,e,n){t.K=1,t.v=C1(Pr(e)),t.s=n,t.P=!0,zk(t,null)}function zk(t,e){t.F=Date.now(),el(t),t.A=Pr(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),Yk(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Vk,t.g=vE(t.l,n?e:null,!t.s),0<t.N&&(t.L=new wP(kt(t.La,t,t.g),t.N)),Mk(t.S,t.g,"readystatechange",t.ib),e=t.H?_k(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),vu(),bP(t.j,t.u,t.A,t.m,t.U,t.s)}U.ib=function(t){t=t.target;const e=this.L;e&&Ir(t)==3?e.l():this.La(t)};U.La=function(t){try{if(t==this.g)e:{const l=Ir(this.g);var e=this.g.Ea();const c=this.g.aa();if(!(3>l)&&(l!=3||Tp||this.g&&(this.h.h||this.g.fa()||Wy(this.g)))){this.I||l!=4||e==7||(e==8||0>=c?vu(3):vu(2)),S1(this);var n=this.g.aa();this.Y=n;t:if(Bk(this)){var r=Wy(this.g);t="";var i=r.length,a=Ir(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ia(this),Af(this);var s="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:a&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=n==200,kP(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var o,f=this.g;if((o=f.g?f.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!cd(o)){var u=o;break t}}u=null}if(n=u)Es(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Op(this,n);else{this.i=!1,this.o=3,Rt(12),ia(this),Af(this);break e}}this.P?(qk(this,l,s),Tp&&this.i&&l==3&&(Mk(this.S,this.T,"tick",this.hb),this.T.start())):(Es(this.j,this.m,s,null),Op(this,s)),l==4&&ia(this),this.i&&!this.I&&(l==4?hE(this.l,this):(this.i=!1,el(this)))}else n==400&&0<s.indexOf("Unknown SID")?(this.o=3,Rt(12)):(this.o=0,Rt(13)),ia(this),Af(this)}}}catch{}finally{}};function Bk(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function qk(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=SP(t,n),i==hd){e==4&&(t.o=4,Rt(14),r=!1),Es(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Mp){t.o=4,Rt(15),Es(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Es(t.j,t.m,i,null),Op(t,i);Bk(t)&&i!=hd&&i!=Mp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Rt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),u2(e),e.K=!0,Rt(11))):(Es(t.j,t.m,n,"[Invalid Chunked Response]"),ia(t),Af(t))}U.hb=function(){if(this.g){var t=Ir(this.g),e=this.g.fa();this.C<e.length&&(S1(this),qk(this,t,e),this.i&&t!=4&&el(this))}};function SP(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?hd:(n=Number(e.substring(n,r)),isNaN(n)?Mp:(r+=1,r+n>e.length?hd:(e=e.substr(r,n),t.C=r+n,e)))}U.cancel=function(){this.I=!0,ia(this)};function el(t){t.V=Date.now()+t.O,Hk(t,t.O)}function Hk(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Xu(kt(t.gb,t),e)}function S1(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}U.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(EP(this.j,this.A),this.K!=2&&(vu(),Rt(17)),ia(this),this.o=2,Af(this)):Hk(this,this.V-t)};function Af(t){t.l.G==0||t.I||hE(t.l,t)}function ia(t){S1(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Jg(t.T),Lk(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Op(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||$p(n.h,t))){if(!t.J&&$p(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)gd(n),A1(n);else break e;f2(n),Rt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Xu(kt(n.cb,n),6e3));if(1>=Zk(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else aa(n,11)}else if((t.J||n.g==t)&&gd(n),!cd(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const c=u[4];c!=null&&(n.Ca=c,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const m=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var a=r.h;a.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(a.j=a.l,a.g=new Set,a.h&&(r2(a,a.h),a.h=null))}if(r.D){const w=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.za=w,_e(r.F,r.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var s=t;if(r.sa=gE(r,r.H?r.ka:null,r.V),s.J){eE(r.h,s);var o=s,f=r.J;f&&o.setTimeout(f),o.B&&(S1(o),el(o)),r.g=s}else cE(r);0<n.i.length&&R1(n)}else u[0]!="stop"&&u[0]!="close"||aa(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?aa(n,7):o2(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}vu(4)}catch{}}function CP(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(g1(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function TP(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(g1(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Wk(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(g1(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=TP(t),r=CP(t),i=r.length,a=0;a<i;a++)e.call(void 0,r[a],n&&n[a],t)}var Gk=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var a=t[n].substring(0,r);i=t[n].substring(r+1)}else a=t[n];e(a,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ha(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ha){this.h=e!==void 0?e:t.h,pd(this,t.j),this.s=t.s,this.g=t.g,md(this,t.m),this.l=t.l,e=t.i;var n=new yu;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),By(this,n),this.o=t.o}else t&&(n=String(t).match(Gk))?(this.h=!!e,pd(this,n[1]||"",!0),this.s=ff(n[2]||""),this.g=ff(n[3]||"",!0),md(this,n[4]),this.l=ff(n[5]||"",!0),By(this,n[6]||"",!0),this.o=ff(n[7]||"")):(this.h=!!e,this.i=new yu(null,this.h))}ha.prototype.toString=function(){var t=[],e=this.j;e&&t.push(uf(e,qy,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(uf(e,qy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(uf(n,n.charAt(0)=="/"?NP:RP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",uf(n,PP)),t.join("")};function Pr(t){return new ha(t)}function pd(t,e,n){t.j=n?ff(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function md(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function By(t,e,n){e instanceof yu?(t.i=e,MP(t.i,t.h)):(n||(e=uf(e,DP)),t.i=new yu(e,t.h))}function _e(t,e,n){t.i.set(e,n)}function C1(t){return _e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ff(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function uf(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,AP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function AP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var qy=/[#\/\?@]/g,RP=/[#\?:]/g,NP=/[#\?]/g,DP=/[#\?@]/g,PP=/#/g;function yu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Li(t){t.g||(t.g=new Map,t.h=0,t.i&&xP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=yu.prototype;U.add=function(t,e){Li(this),this.i=null,t=bo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Kk(t,e){Li(t),e=bo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Qk(t,e){return Li(t),e=bo(t,e),t.g.has(e)}U.forEach=function(t,e){Li(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};U.oa=function(){Li(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let a=0;a<i.length;a++)n.push(e[r])}return n};U.W=function(t){Li(this);let e=[];if(typeof t=="string")Qk(this,t)&&(e=e.concat(this.g.get(bo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return Li(this),this.i=null,t=bo(this,t),Qk(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Yk(t,e,n){Kk(t,e),0<n.length&&(t.i=null,t.g.set(bo(t,e),qg(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const a=encodeURIComponent(String(r)),s=this.W(r);for(r=0;r<s.length;r++){var i=a;s[r]!==""&&(i+="="+encodeURIComponent(String(s[r]))),t.push(i)}}return this.i=t.join("&")};function bo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function MP(t,e){e&&!t.j&&(Li(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Kk(this,r),Yk(this,i,n))},t)),t.j=e}var LP=class{constructor(e,n){this.h=e,this.g=n}};function Xk(t){this.l=t||OP,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ga&&Q.g.Ga()&&Q.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var OP=10;function Jk(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Zk(t){return t.h?1:t.g?t.g.size:0}function $p(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function r2(t,e){t.g?t.g.add(e):t.h=e}function eE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Xk.prototype.cancel=function(){if(this.i=tE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function tE(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return qg(t.i)}function i2(){}i2.prototype.stringify=function(t){return Q.JSON.stringify(t,void 0)};i2.prototype.parse=function(t){return Q.JSON.parse(t,void 0)};function $P(){this.g=new i2}function FP(t,e,n){const r=n||"";try{Wk(t,function(i,a){let s=i;Qu(i)&&(s=Xg(i)),e.push(r+a+"="+encodeURIComponent(s))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function jP(t,e){const n=new k1;if(Q.Image){const r=new Image;r.onload=ql(Wl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ql(Wl,n,r,"TestLoadImage: error",!1,e),r.onabort=ql(Wl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ql(Wl,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Wl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function tl(t){this.l=t.ac||null,this.j=t.jb||!1}vt(tl,e2);tl.prototype.g=function(){return new T1(this.l,this.j)};tl.prototype.i=function(t){return function(){return t}}({});function T1(t,e){it.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=a2,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}vt(T1,it);var a2=0;U=T1.prototype;U.open=function(t,e){if(this.readyState!=a2)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,wu(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Q).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,nl(this)),this.readyState=a2};U.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,wu(this)),this.g&&(this.readyState=3,wu(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;nE(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function nE(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}U.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?nl(this):wu(this),this.readyState==3&&nE(this)}};U.Va=function(t){this.g&&(this.response=this.responseText=t,nl(this))};U.Ua=function(t){this.g&&(this.response=t,nl(this))};U.ga=function(){this.g&&nl(this)};function nl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,wu(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function wu(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(T1.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var UP=Q.JSON.parse;function Me(t){it.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=rE,this.K=this.L=!1}vt(Me,it);var rE="",VP=/^https?$/i,zP=["POST","PUT"];U=Me.prototype;U.Ka=function(t){this.L=t};U.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Pp.g(),this.C=this.u?zy(this.u):zy(Pp),this.g.onreadystatechange=kt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(a){Hy(this,a);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const a of r.keys())n.set(a,r.get(a));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(a=>a.toLowerCase()=="content-type"),i=Q.FormData&&t instanceof Q.FormData,!(0<=wk(zP,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[a,s]of n)this.g.setRequestHeader(a,s);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{sE(this),0<this.B&&((this.K=BP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=kt(this.qa,this)):this.A=Zg(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(a){Hy(this,a)}};function BP(t){return Gs&&sP()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.qa=function(){typeof Bg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ht(this,"timeout"),this.abort(8))};function Hy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,iE(t),x1(t)}function iE(t){t.D||(t.D=!0,ht(t,"complete"),ht(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ht(this,"complete"),ht(this,"abort"),x1(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),x1(this,!0)),Me.X.M.call(this)};U.Ha=function(){this.s||(this.F||this.v||this.l?aE(this):this.fb())};U.fb=function(){aE(this)};function aE(t){if(t.h&&typeof Bg<"u"&&(!t.C[1]||Ir(t)!=4||t.aa()!=2)){if(t.v&&Ir(t)==4)Zg(t.Ha,0,t);else if(ht(t,"readystatechange"),Ir(t)==4){t.h=!1;try{const o=t.aa();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.H).match(Gk)[1]||null;if(!i&&Q.self&&Q.self.location){var a=Q.self.location.protocol;i=a.substr(0,a.length-1)}r=!VP.test(i?i.toLowerCase():"")}n=r}if(n)ht(t,"complete"),ht(t,"success");else{t.m=6;try{var s=2<Ir(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.aa()+"]",iE(t)}}finally{x1(t)}}}}function x1(t,e){if(t.g){sE(t);const n=t.g,r=t.C[0]?ld:null;t.g=null,t.C=null,e||ht(t,"ready");try{n.onreadystatechange=r}catch{}}}function sE(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}function Ir(t){return t.g?t.g.readyState:0}U.aa=function(){try{return 2<Ir(this)?this.g.status:-1}catch{return-1}};U.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),UP(e)}};function Wy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case rE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Ea=function(){return this.m};U.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function oE(t){let e="";return Wg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function s2(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=oE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_e(t,e,n))}function Go(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function fE(t){this.Ca=0,this.i=[],this.j=new k1,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Go("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Go("baseRetryDelayMs",5e3,t),this.bb=Go("retryDelaySeedMs",1e4,t),this.$a=Go("forwardChannelMaxRetries",2,t),this.ta=Go("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Xk(t&&t.concurrentRequestLimit),this.Fa=new $P,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}U=fE.prototype;U.ma=8;U.G=1;function o2(t){if(uE(t),t.G==3){var e=t.U++,n=Pr(t.F);_e(n,"SID",t.I),_e(n,"RID",e),_e(n,"TYPE","terminate"),rl(t,n),e=new Zu(t,t.j,e,void 0),e.K=2,e.v=C1(Pr(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon&&(n=Q.navigator.sendBeacon(e.v.toString(),"")),!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=vE(e.l,null),e.g.da(e.v)),e.F=Date.now(),el(e)}mE(t)}function A1(t){t.g&&(u2(t),t.g.cancel(),t.g=null)}function uE(t){A1(t),t.u&&(Q.clearTimeout(t.u),t.u=null),gd(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function R1(t){Jk(t.h)||t.m||(t.m=!0,Nk(t.Ja,t),t.C=0)}function qP(t,e){return Zk(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Xu(kt(t.Ja,t,e),pE(t,t.C)),t.C++,!0)}U.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Zu(this,this.j,t,void 0);let a=this.s;if(this.S&&(a?(a=_k(a),Ik(a,this.S)):a=this.S),this.o!==null||this.N||(i.H=a,a=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=lE(this,i,e),n=Pr(this.F),_e(n,"RID",t),_e(n,"CVER",22),this.D&&_e(n,"X-HTTP-Session-Id",this.D),rl(this,n),a&&(this.N?e="headers="+encodeURIComponent(String(oE(a)))+"&"+e:this.o&&s2(n,this.o,a)),r2(this.h,i),this.Ya&&_e(n,"TYPE","init"),this.O?(_e(n,"$req",e),_e(n,"SID","null"),i.Z=!0,Lp(i,n,null)):Lp(i,n,e),this.G=2}}else this.G==3&&(t?Gy(this,t):this.i.length==0||Jk(this.h)||Gy(this))};function Gy(t,e){var n;e?n=e.m:n=t.U++;const r=Pr(t.F);_e(r,"SID",t.I),_e(r,"RID",n),_e(r,"AID",t.T),rl(t,r),t.o&&t.s&&s2(r,t.o,t.s),n=new Zu(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=lE(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),r2(t.h,n),Lp(n,r,e)}function rl(t,e){t.ia&&Wg(t.ia,function(n,r){_e(e,r,n)}),t.l&&Wk({},function(n,r){_e(e,r,n)})}function lE(t,e,n){n=Math.min(t.i.length,n);var r=t.l?kt(t.l.Ra,t.l,t):null;e:{var i=t.i;let a=-1;for(;;){const s=["count="+n];a==-1?0<n?(a=i[0].h,s.push("ofs="+a)):a=0:s.push("ofs="+a);let o=!0;for(let f=0;f<n;f++){let u=i[f].h;const l=i[f].g;if(u-=a,0>u)a=Math.max(0,i[f].h-100),o=!1;else try{FP(l,s,"req"+u+"_")}catch{r&&r(l)}}if(o){r=s.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function cE(t){t.g||t.u||(t.Z=1,Nk(t.Ia,t),t.A=0)}function f2(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Xu(kt(t.Ia,t),pE(t,t.A)),t.A++,!0)}U.Ia=function(){if(this.u=null,dE(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Xu(kt(this.eb,this),t)}};U.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Rt(10),A1(this),dE(this))};function u2(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function dE(t){t.g=new Zu(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Pr(t.sa);_e(e,"RID","rpc"),_e(e,"SID",t.I),_e(e,"CI",t.L?"0":"1"),_e(e,"AID",t.T),_e(e,"TYPE","xmlhttp"),rl(t,e),t.o&&t.s&&s2(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=C1(Pr(e)),n.s=null,n.P=!0,zk(n,t)}U.cb=function(){this.v!=null&&(this.v=null,A1(this),f2(this),Rt(19))};function gd(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function hE(t,e){var n=null;if(t.g==e){gd(t),u2(t),t.g=null;var r=2}else if($p(t.h,e))n=e.D,eE(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=E1(),ht(r,new Fk(r,n)),R1(t)}else cE(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&qP(t,e)||r==2&&f2(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:aa(t,5);break;case 4:aa(t,10);break;case 3:aa(t,6);break;default:aa(t,2)}}}function pE(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function aa(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=kt(t.kb,t);n||(n=new ha("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||pd(n,"https"),C1(n)),jP(n.toString(),r)}else Rt(2);t.G=0,t.l&&t.l.va(e),mE(t),uE(t)}U.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function mE(t){if(t.G=0,t.la=[],t.l){const e=tE(t.h);(e.length!=0||t.i.length!=0)&&(Oy(t.la,e),Oy(t.la,t.i),t.h.i.length=0,qg(t.i),t.i.length=0),t.l.ua()}}function gE(t,e,n){var r=n instanceof ha?Pr(n):new ha(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),md(r,r.m);else{var i=Q.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var a=new ha(null,void 0);r&&pd(a,r),e&&(a.g=e),i&&md(a,i),n&&(a.l=n),r=a}return n=t.D,e=t.za,n&&e&&_e(r,n,e),_e(r,"VER",t.ma),rl(t,r),r}function vE(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Me(new tl({jb:!0})):new Me(t.ra),e.Ka(t.H),e}function yE(){}U=yE.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Ra=function(){};function vd(){if(Gs&&!(10<=Number(oP)))throw Error("Environmental error: no available transport.")}vd.prototype.g=function(t,e){return new un(t,e)};function un(t,e){it.call(this),this.g=new fE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!cd(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!cd(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ko(this)}vt(un,it);un.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Rt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=gE(t,null,t.V),R1(t)};un.prototype.close=function(){o2(this.g)};un.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Xg(t),t=n);e.i.push(new LP(e.ab++,t)),e.G==3&&R1(e)};un.prototype.M=function(){this.g.l=null,delete this.j,o2(this.g),delete this.g,un.X.M.call(this)};function wE(t){t2.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}vt(wE,t2);function bE(){n2.call(this),this.status=1}vt(bE,n2);function ko(t){this.g=t}vt(ko,yE);ko.prototype.xa=function(){ht(this.g,"a")};ko.prototype.wa=function(t){ht(this.g,new wE(t))};ko.prototype.va=function(t){ht(this.g,new bE)};ko.prototype.ua=function(){ht(this.g,"b")};vd.prototype.createWebChannel=vd.prototype.g;un.prototype.send=un.prototype.u;un.prototype.open=un.prototype.m;un.prototype.close=un.prototype.close;_1.NO_ERROR=0;_1.TIMEOUT=8;_1.HTTP_ERROR=6;jk.COMPLETE="complete";Uk.EventType=Ju;Ju.OPEN="a";Ju.CLOSE="b";Ju.ERROR="c";Ju.MESSAGE="d";it.prototype.listen=it.prototype.N;Me.prototype.listenOnce=Me.prototype.O;Me.prototype.getLastError=Me.prototype.Oa;Me.prototype.getLastErrorCode=Me.prototype.Ea;Me.prototype.getStatus=Me.prototype.aa;Me.prototype.getResponseJson=Me.prototype.Sa;Me.prototype.getResponseText=Me.prototype.fa;Me.prototype.send=Me.prototype.da;Me.prototype.setWithCredentials=Me.prototype.Ka;var HP=function(){return new vd},WP=function(){return E1()},s0=_1,GP=jk,KP=za,Ky={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},QP=tl,Gl=Uk,YP=Me;const Qy="@firebase/firestore";/**
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
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
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
 */let Eo="9.17.1";/**
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
 */const ki=new i1("@firebase/firestore");function Fp(){return ki.logLevel}function XP(t){ki.setLogLevel(t)}function A(t,...e){if(ki.logLevel<=oe.DEBUG){const n=e.map(l2);ki.debug(`Firestore (${Eo}): ${t}`,...n)}}function je(t,...e){if(ki.logLevel<=oe.ERROR){const n=e.map(l2);ki.error(`Firestore (${Eo}): ${t}`,...n)}}function Ks(t,...e){if(ki.logLevel<=oe.WARN){const n=e.map(l2);ki.warn(`Firestore (${Eo}): ${t}`,...n)}}function l2(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function $(t="Unexpected state"){const e=`FIRESTORE (${Eo}) INTERNAL ASSERTION FAILED: `+t;throw je(e),new Error(e)}function V(t,e){t||$()}function JP(t,e){t||$()}function O(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Dt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class nt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class kE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ZP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class eM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class tM{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=f=>this.i!==r?(r=this.i,n(f)):Promise.resolve();let a=new nt;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new nt,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const f=a;e.enqueueRetryable(async()=>{await f.promise,await i(this.currentUser)})},o=f=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(f=>o(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?o(f):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new nt)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(V(typeof r.accessToken=="string"),new kE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return V(e===null||typeof e=="string"),new et(e)}}class nM{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=et.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(V(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class rM{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new nM(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class iM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aM{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=a=>{a.error!=null&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const s=a.token!==this.A;return this.A=a.token,A("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>r(a))};const i=a=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.appCheck.addTokenListener(this.o)};this.T.onInit(a=>i(a)),setTimeout(()=>{if(!this.appCheck){const a=this.T.getImmediate({optional:!0});a?i(a):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(V(typeof n.token=="string"),this.A=n.token,new iM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function sM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class EE{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=sM(40);for(let a=0;a<i.length;++a)r.length<20&&i[a]<n&&(r+=e.charAt(i[a]%e.length))}return r}}function J(t,e){return t<e?-1:t>e?1:0}function Qs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function _E(t){return t+"\0"}/**
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
 */class Se{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new T(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new T(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new T(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new T(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Se.fromMillis(Date.now())}static fromDate(e){return Se.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Se(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new Se(0,0))}static max(){return new z(new Se(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class bu{constructor(e,n,r){n===void 0?n=0:n>e.length&&$(),r===void 0?r=e.length-n:r>e.length-n&&$(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return bu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const a=e.get(i),s=n.get(i);if(a<s)return-1;if(a>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class se extends bu{construct(e,n,r){return new se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new T(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new se(n)}static emptyPath(){return new se([])}}const oM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends bu{construct(e,n,r){return new Ue(e,n,r)}static isValidIdentifier(e){return oM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ue(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const a=()=>{if(r.length===0)throw new T(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const o=e[i];if(o==="\\"){if(i+1===e.length)throw new T(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new T(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,i+=2}else o==="`"?(s=!s,i++):o!=="."||s?(r+=o,i++):(a(),i++)}if(a(),s)throw new T(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(n)}static emptyPath(){return new Ue([])}}/**
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
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(se.fromString(e))}static fromName(e){return new L(se.fromString(e).popFirst(5))}static empty(){return new L(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new se(e.slice()))}}/**
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
 */class IE{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function jp(t){return t.fields.find(e=>e.kind===2)}function Ki(t){return t.fields.filter(e=>e.kind!==2)}IE.UNKNOWN_ID=-1;class fM{constructor(e,n){this.fieldPath=e,this.kind=n}}class yd{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new yd(0,ln.min())}}function SE(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=z.fromTimestamp(r===1e9?new Se(n+1,0):new Se(n,r));return new ln(i,L.empty(),e)}function CE(t){return new ln(t.readTime,t.key,-1)}class ln{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ln(z.min(),L.empty(),-1)}static max(){return new ln(z.max(),L.empty(),-1)}}function c2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:J(t.largestBatchId,e.largestBatchId))}/**
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
 */const TE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Oi(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==TE)throw t;A("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((r,i)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,i)},this.catchCallback=a=>{this.wrapFailure(n,a).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,r)=>{n(e)})}static reject(e){return new _((n,r)=>{r(e)})}static waitFor(e){return new _((n,r)=>{let i=0,a=0,s=!1;e.forEach(o=>{++i,o.next(()=>{++a,s&&a===i&&n()},f=>r(f))}),s=!0,a===i&&n()})}static or(e){let n=_.resolve(!1);for(const r of e)n=n.next(i=>i?_.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,a)=>{r.push(n.call(this,i,a))}),this.waitFor(r)}static mapArray(e,n){return new _((r,i)=>{const a=e.length,s=new Array(a);let o=0;for(let f=0;f<a;f++){const u=f;n(e[u]).next(l=>{s[u]=l,++o,o===a&&r(s)},l=>i(l))}})}static doWhile(e,n){return new _((r,i)=>{const a=()=>{e()===!0?n().next(()=>{a()},i):r()};a()})}}/**
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
 */class N1{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.P=new nt,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{n.error?this.P.reject(new Rf(e,n.error)):this.P.resolve()},this.transaction.onerror=r=>{const i=d2(r.target.error);this.P.reject(new Rf(e,i))}}static open(e,n,r,i){try{return new N1(n,e.transaction(i,r))}catch(a){throw new Rf(n,a)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(A("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new lM(n)}}class $n{constructor(e,n,r){this.name=e,this.version=n,this.S=r,$n.D(Ne())===12.2&&je("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return A("SimpleDb","Removing database:",e),Qi(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!ou())return!1;if($n.N())return!0;const e=Ne(),n=$n.D(e),r=0<n&&n<10,i=$n.k(e),a=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||a)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static k(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async F(e){return this.db||(A("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=a=>{const s=a.target.result;n(s)},i.onblocked=()=>{r(new Rf(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=a=>{const s=a.target.error;s.name==="VersionError"?r(new T(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):s.name==="InvalidStateError"?r(new T(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+s)):r(new Rf(e,s))},i.onupgradeneeded=a=>{A("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',a.oldVersion);const s=a.target.result;this.S.$(s,i.transaction,a.oldVersion,this.version).next(()=>{A("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const a=n==="readonly";let s=0;for(;;){++s;try{this.db=await this.F(e);const o=N1.open(this.db,e,a?"readonly":"readwrite",r),f=i(o).next(u=>(o.V(),u)).catch(u=>(o.abort(u),_.reject(u))).toPromise();return f.catch(()=>{}),await o.v,f}catch(o){const f=o,u=f.name!=="FirebaseError"&&s<3;if(A("SimpleDb","Transaction failed with error:",f.message,"Retrying:",u),this.close(),!u)return Promise.reject(f)}}}close(){this.db&&this.db.close(),this.db=void 0}}class uM{constructor(e){this.q=e,this.U=!1,this.K=null}get isDone(){return this.U}get G(){return this.K}set cursor(e){this.q=e}done(){this.U=!0}j(e){this.K=e}delete(){return Qi(this.q.delete())}}class Rf extends T{constructor(e,n){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function $i(t){return t.name==="IndexedDbTransactionError"}class lM{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(A("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(A("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Qi(r)}add(e){return A("SimpleDb","ADD",this.store.name,e,e),Qi(this.store.add(e))}get(e){return Qi(this.store.get(e)).next(n=>(n===void 0&&(n=null),A("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return A("SimpleDb","DELETE",this.store.name,e),Qi(this.store.delete(e))}count(){return A("SimpleDb","COUNT",this.store.name),Qi(this.store.count())}W(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),a=[];return this.H(i,(s,o)=>{a.push(o)}).next(()=>a)}{const i=this.store.getAll(r.range);return new _((a,s)=>{i.onerror=o=>{s(o.target.error)},i.onsuccess=o=>{a(o.target.result)}})}}J(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new _((i,a)=>{r.onerror=s=>{a(s.target.error)},r.onsuccess=s=>{i(s.target.result)}})}Y(e,n){A("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.X=!1;const i=this.cursor(r);return this.H(i,(a,s,o)=>o.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.H(i,n)}tt(e){const n=this.cursor({});return new _((r,i)=>{n.onerror=a=>{const s=d2(a.target.error);i(s)},n.onsuccess=a=>{const s=a.target.result;s?e(s.primaryKey,s.value).next(o=>{o?s.continue():r()}):r()}})}H(e,n){const r=[];return new _((i,a)=>{e.onerror=s=>{a(s.target.error)},e.onsuccess=s=>{const o=s.target.result;if(!o)return void i();const f=new uM(o),u=n(o.primaryKey,o.value,f);if(u instanceof _){const l=u.catch(c=>(f.done(),_.reject(c)));r.push(l)}f.isDone?i():f.G===null?o.continue():o.continue(f.G)}}).next(()=>_.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.X?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Qi(t){return new _((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=d2(r.target.error);n(i)}})}let Yy=!1;function d2(t){const e=$n.D(Ne());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new T("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Yy||(Yy=!0,setTimeout(()=>{throw r},0)),r}}return t}class cM{constructor(e,n){this.asyncQueue=e,this.et=n,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){A("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{A("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(n){$i(n)?A("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Oi(n)}await this.nt(6e4)})}}class dM{constructor(e,n){this.localStore=e,this.persistence=n}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.it(n,e))}it(e,n){const r=new Set;let i=n,a=!0;return _.doWhile(()=>a===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(s=>{if(s!==null&&!r.has(s))return A("IndexBackiller",`Processing collection: ${s}`),this.rt(e,s,i).next(o=>{i-=o,r.add(s)});a=!1})).next(()=>n-i)}rt(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(a=>{const s=a.changes;return this.localStore.indexManager.updateIndexEntries(e,s).next(()=>this.ot(i,a)).next(o=>(A("IndexBackiller",`Updating offset: ${o}`),this.localStore.indexManager.updateCollectionGroup(e,n,o))).next(()=>s.size)}))}ot(e,n){let r=e;return n.changes.forEach((i,a)=>{const s=CE(a);c2(s,r)>0&&(r=s)}),new ln(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class qt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}qt.at=-1;/**
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
 */class hM{constructor(e,n,r,i,a,s,o,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=a,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=f}}class Ei{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ei("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ei&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Xy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ba(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function AE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function il(t){return t==null}function ku(t){return t===0&&1/t==-1/0}function RE(t){return typeof t=="number"&&Number.isInteger(t)&&!ku(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function pM(){return typeof atob<"u"}/**
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
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ye(n)}static fromUint8Array(e){const n=function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const mM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _i(t){if(V(!!t),typeof t=="string"){let e=0;const n=mM.exec(t);if(V(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ta(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
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
 */function h2(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function NE(t){const e=t.mapValue.fields.__previous_value__;return h2(e)?NE(e):e}function Eu(t){const e=_i(t.mapValue.fields.__local_write_time__.timestampValue);return new Se(e.seconds,e.nanos)}/**
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
 */const ii={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},yc={nullValue:"NULL_VALUE"};function xa(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?h2(t)?4:DE(t)?9007199254740991:10:$()}function pr(t,e){if(t===e)return!0;const n=xa(t);if(n!==xa(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Eu(t).isEqual(Eu(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=_i(r.timestampValue),s=_i(i.timestampValue);return a.seconds===s.seconds&&a.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ta(r.bytesValue).isEqual(Ta(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Pe(r.geoPointValue.latitude)===Pe(i.geoPointValue.latitude)&&Pe(r.geoPointValue.longitude)===Pe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Pe(r.integerValue)===Pe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=Pe(r.doubleValue),s=Pe(i.doubleValue);return a===s?ku(a)===ku(s):isNaN(a)&&isNaN(s)}return!1}(t,e);case 9:return Qs(t.arrayValue.values||[],e.arrayValue.values||[],pr);case 10:return function(r,i){const a=r.mapValue.fields||{},s=i.mapValue.fields||{};if(Xy(a)!==Xy(s))return!1;for(const o in a)if(a.hasOwnProperty(o)&&(s[o]===void 0||!pr(a[o],s[o])))return!1;return!0}(t,e);default:return $()}}function _u(t,e){return(t.values||[]).find(n=>pr(n,e))!==void 0}function Ii(t,e){if(t===e)return 0;const n=xa(t),r=xa(e);if(n!==r)return J(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(i,a){const s=Pe(i.integerValue||i.doubleValue),o=Pe(a.integerValue||a.doubleValue);return s<o?-1:s>o?1:s===o?0:isNaN(s)?isNaN(o)?0:-1:1}(t,e);case 3:return Jy(t.timestampValue,e.timestampValue);case 4:return Jy(Eu(t),Eu(e));case 5:return J(t.stringValue,e.stringValue);case 6:return function(i,a){const s=Ta(i),o=Ta(a);return s.compareTo(o)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const s=i.split("/"),o=a.split("/");for(let f=0;f<s.length&&f<o.length;f++){const u=J(s[f],o[f]);if(u!==0)return u}return J(s.length,o.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const s=J(Pe(i.latitude),Pe(a.latitude));return s!==0?s:J(Pe(i.longitude),Pe(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,a){const s=i.values||[],o=a.values||[];for(let f=0;f<s.length&&f<o.length;++f){const u=Ii(s[f],o[f]);if(u)return u}return J(s.length,o.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,a){if(i===ii.mapValue&&a===ii.mapValue)return 0;if(i===ii.mapValue)return 1;if(a===ii.mapValue)return-1;const s=i.fields||{},o=Object.keys(s),f=a.fields||{},u=Object.keys(f);o.sort(),u.sort();for(let l=0;l<o.length&&l<u.length;++l){const c=J(o[l],u[l]);if(c!==0)return c;const d=Ii(s[o[l]],f[u[l]]);if(d!==0)return d}return J(o.length,u.length)}(t.mapValue,e.mapValue);default:throw $()}}function Jy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=_i(t),r=_i(e),i=J(n.seconds,r.seconds);return i!==0?i:J(n.nanos,r.nanos)}function Ys(t){return Up(t)}function Up(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=_i(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ta(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",a=!0;for(const s of r.values||[])a?a=!1:i+=",",i+=Up(s);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let a="{",s=!0;for(const o of i)s?s=!1:a+=",",a+=`${o}:${Up(r.fields[o])}`;return a+"}"}(t.mapValue):$();var e,n}function Aa(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Vp(t){return!!t&&"integerValue"in t}function Iu(t){return!!t&&"arrayValue"in t}function Zy(t){return!!t&&"nullValue"in t}function e4(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wc(t){return!!t&&"mapValue"in t}function Nf(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ba(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Nf(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Nf(t.arrayValue.values[n]);return e}return Object.assign({},t)}function DE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function gM(t){return"nullValue"in t?yc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Aa(Ei.empty(),L.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:$()}function vM(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Aa(Ei.empty(),L.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?ii:$()}function t4(t,e){const n=Ii(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function n4(t,e){const n=Ii(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class Si{constructor(e,n){this.position=e,this.inclusive=n}}function r4(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const a=e[i],s=t.position[i];if(a.field.isKeyField()?r=L.comparator(L.fromName(s.referenceValue),n.key):r=Ii(s,n.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function i4(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class PE{}class re extends PE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new yM(e,n,r):n==="array-contains"?new kM(e,r):n==="in"?new jE(e,r):n==="not-in"?new EM(e,r):n==="array-contains-any"?new _M(e,r):new re(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new wM(e,r):new bM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ii(n,this.value)):n!==null&&xa(this.value)===xa(n)&&this.matchesComparison(Ii(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ce extends PE{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new ce(e,n)}matches(e){return Xs(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Xs(t){return t.op==="and"}function zp(t){return t.op==="or"}function p2(t){return ME(t)&&Xs(t)}function ME(t){for(const e of t.filters)if(e instanceof ce)return!1;return!0}function Bp(t){if(t instanceof re)return t.field.canonicalString()+t.op.toString()+Ys(t.value);if(p2(t))return t.filters.map(e=>Bp(e)).join(",");{const e=t.filters.map(n=>Bp(n)).join(",");return`${t.op}(${e})`}}function LE(t,e){return t instanceof re?function(n,r){return r instanceof re&&n.op===r.op&&n.field.isEqual(r.field)&&pr(n.value,r.value)}(t,e):t instanceof ce?function(n,r){return r instanceof ce&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,a,s)=>i&&LE(a,r.filters[s]),!0):!1}(t,e):void $()}function OE(t,e){const n=t.filters.concat(e);return ce.create(n,t.op)}function $E(t){return t instanceof re?function(e){return`${e.field.canonicalString()} ${e.op} ${Ys(e.value)}`}(t):t instanceof ce?function(e){return e.op.toString()+" {"+e.getFilters().map($E).join(" ,")+"}"}(t):"Filter"}class yM extends re{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class wM extends re{constructor(e,n){super(e,"in",n),this.keys=FE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class bM extends re{constructor(e,n){super(e,"not-in",n),this.keys=FE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function FE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class kM extends re{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Iu(n)&&_u(n.arrayValue,this.value)}}class jE extends re{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_u(this.value.arrayValue,n)}}class EM extends re{constructor(e,n){super(e,"not-in",n)}matches(e){if(_u(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_u(this.value.arrayValue,n)}}class _M extends re{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Iu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_u(this.value.arrayValue,r))}}/**
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
 */class Ms{constructor(e,n="asc"){this.field=e,this.dir=n}}function IM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Le{constructor(e,n){this.comparator=e,this.root=n||ut.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Kl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Kl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Kl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Kl(this.root,e,this.comparator,!0)}}class Kl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=n?r(e.key,n):1,n&&i&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,n,r,i,a){this.key=e,this.value=n,this.color=r??ut.RED,this.left=i??ut.EMPTY,this.right=a??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,a){return new ut(e??this.key,n??this.value,r??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const a=r(e,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(e,n,r),null):a===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ut.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pe{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new a4(this.data.getIterator())}getIteratorFrom(e){return new a4(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,a=r.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pe(this.comparator);return n.data=e,n}}class a4{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ns(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Ht{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new pe(Ue.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class lt{constructor(e){this.value=e}static empty(){return new lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!wc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Nf(n)}setAll(e){let n=Ue.emptyPath(),r={},i=[];e.forEach((s,o)=>{if(!n.isImmediateParentOf(o)){const f=this.getFieldsMap(n);this.applyChanges(f,r,i),r={},i=[],n=o.popLast()}s?r[o.lastSegment()]=Nf(s):i.push(o.lastSegment())});const a=this.getFieldsMap(n);this.applyChanges(a,r,i)}delete(e){const n=this.field(e.popLast());wc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];wc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ba(n,(i,a)=>e[i]=a);for(const i of r)delete e[i]}clone(){return new lt(Nf(this.value))}}function UE(t){const e=[];return Ba(t.fields,(n,r)=>{const i=new Ue([n]);if(wc(r)){const a=UE(r.mapValue).fields;if(a.length===0)e.push(i);else for(const s of a)e.push(i.child(s))}else e.push(i)}),new Ht(e)}/**
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
 */class ye{constructor(e,n,r,i,a,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=a,this.data=s,this.documentState=o}static newInvalidDocument(e){return new ye(e,0,z.min(),z.min(),z.min(),lt.empty(),0)}static newFoundDocument(e,n,r,i){return new ye(e,1,n,z.min(),r,i,0)}static newNoDocument(e,n){return new ye(e,2,n,z.min(),z.min(),lt.empty(),0)}static newUnknownDocument(e,n){return new ye(e,3,n,z.min(),z.min(),lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class SM{constructor(e,n=null,r=[],i=[],a=null,s=null,o=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=a,this.startAt=s,this.endAt=o,this.ft=null}}function qp(t,e=null,n=[],r=[],i=null,a=null,s=null){return new SM(t,e,n,r,i,a,s)}function Ra(t){const e=O(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Bp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),il(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ys(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ys(r)).join(",")),e.ft=n}return e.ft}function al(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!IM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!LE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!i4(t.startAt,e.startAt)&&i4(t.endAt,e.endAt)}function wd(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function bd(t,e){return t.filters.filter(n=>n instanceof re&&n.field.isEqual(e))}function s4(t,e,n){let r=yc,i=!0;for(const a of bd(t,e)){let s=yc,o=!0;switch(a.op){case"<":case"<=":s=gM(a.value);break;case"==":case"in":case">=":s=a.value;break;case">":s=a.value,o=!1;break;case"!=":case"not-in":s=yc}t4({value:r,inclusive:i},{value:s,inclusive:o})<0&&(r=s,i=o)}if(n!==null){for(let a=0;a<t.orderBy.length;++a)if(t.orderBy[a].field.isEqual(e)){const s=n.position[a];t4({value:r,inclusive:i},{value:s,inclusive:n.inclusive})<0&&(r=s,i=n.inclusive);break}}return{value:r,inclusive:i}}function o4(t,e,n){let r=ii,i=!0;for(const a of bd(t,e)){let s=ii,o=!0;switch(a.op){case">=":case">":s=vM(a.value),o=!1;break;case"==":case"in":case"<=":s=a.value;break;case"<":s=a.value,o=!1;break;case"!=":case"not-in":s=ii}n4({value:r,inclusive:i},{value:s,inclusive:o})>0&&(r=s,i=o)}if(n!==null){for(let a=0;a<t.orderBy.length;++a)if(t.orderBy[a].field.isEqual(e)){const s=n.position[a];n4({value:r,inclusive:i},{value:s,inclusive:n.inclusive})>0&&(r=s,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Fr{constructor(e,n=null,r=[],i=[],a=null,s="F",o=null,f=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=a,this.limitType=s,this.startAt=o,this.endAt=f,this.dt=null,this._t=null,this.startAt,this.endAt}}function VE(t,e,n,r,i,a,s,o){return new Fr(t,e,n,r,i,a,s,o)}function _o(t){return new Fr(t)}function f4(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function m2(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function D1(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function g2(t){return t.collectionGroup!==null}function pa(t){const e=O(t);if(e.dt===null){e.dt=[];const n=D1(e),r=m2(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Ms(n)),e.dt.push(new Ms(Ue.keyField(),"asc"));else{let i=!1;for(const a of e.explicitOrderBy)e.dt.push(a),a.field.isKeyField()&&(i=!0);if(!i){const a=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ms(Ue.keyField(),a))}}}return e.dt}function Xt(t){const e=O(t);if(!e._t)if(e.limitType==="F")e._t=qp(e.path,e.collectionGroup,pa(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const a of pa(e)){const s=a.dir==="desc"?"asc":"desc";n.push(new Ms(a.field,s))}const r=e.endAt?new Si(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Si(e.startAt.position,e.startAt.inclusive):null;e._t=qp(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Hp(t,e){e.getFirstInequalityField(),D1(t);const n=t.filters.concat([e]);return new Fr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function kd(t,e,n){return new Fr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sl(t,e){return al(Xt(t),Xt(e))&&t.limitType===e.limitType}function zE(t){return`${Ra(Xt(t))}|lt:${t.limitType}`}function Wp(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>$E(r)).join(", ")}]`),il(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ys(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ys(r)).join(",")),`Target(${n})`}(Xt(t))}; limitType=${t.limitType})`}function ol(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):L.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of pa(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,a,s){const o=r4(i,a,s);return i.inclusive?o<=0:o<0}(n.startAt,pa(n),r)||n.endAt&&!function(i,a,s){const o=r4(i,a,s);return i.inclusive?o>=0:o>0}(n.endAt,pa(n),r))}(t,e)}function BE(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function qE(t){return(e,n)=>{let r=!1;for(const i of pa(t)){const a=CM(i,e,n);if(a!==0)return a;r=r||i.field.isKeyField()}return 0}}function CM(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(i,a,s){const o=a.data.field(i),f=s.data.field(i);return o!==null&&f!==null?Ii(o,f):$()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
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
 */function HE(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ku(e)?"-0":e}}function WE(t){return{integerValue:""+t}}function GE(t,e){return RE(e)?WE(e):HE(t,e)}/**
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
 */class P1{constructor(){this._=void 0}}function TM(t,e,n){return t instanceof Js?function(r,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(a.fields.__previous_value__=i),{mapValue:a}}(n,e):t instanceof Na?QE(t,e):t instanceof Da?YE(t,e):function(r,i){const a=KE(r,i),s=u4(a)+u4(r.gt);return Vp(a)&&Vp(r.gt)?WE(s):HE(r.yt,s)}(t,e)}function xM(t,e,n){return t instanceof Na?QE(t,e):t instanceof Da?YE(t,e):n}function KE(t,e){return t instanceof Zs?Vp(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Js extends P1{}class Na extends P1{constructor(e){super(),this.elements=e}}function QE(t,e){const n=XE(e);for(const r of t.elements)n.some(i=>pr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Da extends P1{constructor(e){super(),this.elements=e}}function YE(t,e){let n=XE(e);for(const r of t.elements)n=n.filter(i=>!pr(i,r));return{arrayValue:{values:n}}}class Zs extends P1{constructor(e,n){super(),this.yt=e,this.gt=n}}function u4(t){return Pe(t.integerValue||t.doubleValue)}function XE(t){return Iu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class fl{constructor(e,n){this.field=e,this.transform=n}}function AM(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Na&&r instanceof Na||n instanceof Da&&r instanceof Da?Qs(n.elements,r.elements,pr):n instanceof Zs&&r instanceof Zs?pr(n.gt,r.gt):n instanceof Js&&r instanceof Js}(t.transform,e.transform)}class RM{constructor(e,n){this.version=e,this.transformResults=n}}class Ie{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ie}static exists(e){return new Ie(void 0,e)}static updateTime(e){return new Ie(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class M1{}function JE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new So(t.key,Ie.none()):new Io(t.key,t.data,Ie.none());{const n=t.data,r=lt.empty();let i=new pe(Ue.comparator);for(let a of e.fields)if(!i.has(a)){let s=n.field(a);s===null&&a.length>1&&(a=a.popLast(),s=n.field(a)),s===null?r.delete(a):r.set(a,s),i=i.add(a)}return new jr(t.key,r,new Ht(i.toArray()),Ie.none())}}function NM(t,e,n){t instanceof Io?function(r,i,a){const s=r.value.clone(),o=c4(r.fieldTransforms,i,a.transformResults);s.setAll(o),i.convertToFoundDocument(a.version,s).setHasCommittedMutations()}(t,e,n):t instanceof jr?function(r,i,a){if(!bc(r.precondition,i))return void i.convertToUnknownDocument(a.version);const s=c4(r.fieldTransforms,i,a.transformResults),o=i.data;o.setAll(ZE(r)),o.setAll(s),i.convertToFoundDocument(a.version,o).setHasCommittedMutations()}(t,e,n):function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Df(t,e,n,r){return t instanceof Io?function(i,a,s,o){if(!bc(i.precondition,a))return s;const f=i.value.clone(),u=d4(i.fieldTransforms,o,a);return f.setAll(u),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(t,e,n,r):t instanceof jr?function(i,a,s,o){if(!bc(i.precondition,a))return s;const f=d4(i.fieldTransforms,o,a),u=a.data;return u.setAll(ZE(i)),u.setAll(f),a.convertToFoundDocument(a.version,u).setHasLocalMutations(),s===null?null:s.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(t,e,n,r):function(i,a,s){return bc(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):s}(t,e,n)}function DM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),a=KE(r.transform,i||null);a!=null&&(n===null&&(n=lt.empty()),n.set(r.field,a))}return n||null}function l4(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Qs(n,r,(i,a)=>AM(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Io extends M1{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class jr extends M1{constructor(e,n,r,i,a=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function ZE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function c4(t,e,n){const r=new Map;V(t.length===n.length);for(let i=0;i<n.length;i++){const a=t[i],s=a.transform,o=e.data.field(a.field);r.set(a.field,xM(s,o,n[i]))}return r}function d4(t,e,n){const r=new Map;for(const i of t){const a=i.transform,s=n.data.field(i.field);r.set(i.field,TM(a,s,e))}return r}class So extends M1{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class v2 extends M1{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class PM{constructor(e){this.count=e}}/**
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
 */var Be,ae;function e_(t){switch(t){default:return $();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function t_(t){if(t===void 0)return je("GRPC error has no .code"),I.UNKNOWN;switch(t){case Be.OK:return I.OK;case Be.CANCELLED:return I.CANCELLED;case Be.UNKNOWN:return I.UNKNOWN;case Be.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Be.INTERNAL:return I.INTERNAL;case Be.UNAVAILABLE:return I.UNAVAILABLE;case Be.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Be.NOT_FOUND:return I.NOT_FOUND;case Be.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Be.ABORTED:return I.ABORTED;case Be.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Be.DATA_LOSS:return I.DATA_LOSS;default:return $()}}(ae=Be||(Be={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Fi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,a]of r)if(this.equalsFn(i,e))return a}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return void(i[a]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ba(this.inner,(n,r)=>{for(const[i,a]of r)e(i,a)})}isEmpty(){return AE(this.inner)}size(){return this.innerSize}}/**
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
 */const MM=new Le(L.comparator);function Wt(){return MM}const n_=new Le(L.comparator);function lf(...t){let e=n_;for(const n of t)e=e.insert(n.key,n);return e}function r_(t){let e=n_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function rr(){return Pf()}function i_(){return Pf()}function Pf(){return new Fi(t=>t.toString(),(t,e)=>t.isEqual(e))}const LM=new Le(L.comparator),OM=new pe(L.comparator);function Z(...t){let e=OM;for(const n of t)e=e.add(n);return e}const $M=new pe(J);function L1(){return $M}/**
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
 */class ul{constructor(e,n,r,i,a){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ll.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ul(z.min(),i,L1(),Wt(),Z())}}class ll{constructor(e,n,r,i,a){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ll(r,n,Z(),Z(),Z())}}/**
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
 */class kc{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class a_{constructor(e,n){this.targetId=e,this.Et=n}}class s_{constructor(e,n,r=Ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class h4{constructor(){this.At=0,this.Rt=m4(),this.bt=Ye.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=Z(),n=Z(),r=Z();return this.Rt.forEach((i,a)=>{switch(a){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:$()}}),new ll(this.bt,this.Pt,e,n,r)}xt(){this.vt=!1,this.Rt=m4()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class FM{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Wt(),this.qt=p4(),this.Ut=new pe(J)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const r=this.Wt(n);switch(e.state){case 0:this.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){const a=i.target;if(wd(a))if(r===0){const s=new L(a.path);this.Qt(n,s,ye.newNoDocument(s,z.min()))}else V(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((a,s)=>{const o=this.Yt(s);if(o){if(a.current&&wd(o.target)){const f=new L(o.target.path);this.Lt.get(f)!==null||this.te(s,f)||this.Qt(s,f,ye.newNoDocument(f,e))}a.St&&(n.set(s,a.Ct()),a.xt())}});let r=Z();this.qt.forEach((a,s)=>{let o=!0;s.forEachWhile(f=>{const u=this.Yt(f);return!u||u.purpose===2||(o=!1,!1)}),o&&(r=r.add(a))}),this.Lt.forEach((a,s)=>s.setReadTime(e));const i=new ul(e,n,this.Ut,this.Lt,r);return this.Lt=Wt(),this.qt=p4(),this.Ut=new pe(J),i}Gt(e,n){if(!this.zt(e))return;const r=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new h4,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new pe(J),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||A("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new h4),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function p4(){return new Le(L.comparator)}function m4(){return new Le(L.comparator)}/**
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
 */const jM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),UM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),VM=(()=>({and:"AND",or:"OR"}))();class zM{constructor(e,n){this.databaseId=e,this.wt=n}}function eo(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function o_(t,e){return t.wt?e.toBase64():e.toUint8Array()}function BM(t,e){return eo(t,e.toTimestamp())}function Ve(t){return V(!!t),z.fromTimestamp(function(e){const n=_i(e);return new Se(n.seconds,n.nanos)}(t))}function y2(t,e){return function(n){return new se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function f_(t){const e=se.fromString(t);return V(v_(e)),e}function Su(t,e){return y2(t.databaseId,e.path)}function ur(t,e){const n=f_(e);if(n.get(1)!==t.databaseId.projectId)throw new T(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(l_(n))}function Gp(t,e){return y2(t.databaseId,e)}function u_(t){const e=f_(t);return e.length===4?se.emptyPath():l_(e)}function Cu(t){return new se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function l_(t){return V(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function g4(t,e,n){return{name:Su(t,e),fields:n.value.mapValue.fields}}function c_(t,e,n){const r=ur(t,e.name),i=Ve(e.updateTime),a=e.createTime?Ve(e.createTime):z.min(),s=new lt({mapValue:{fields:e.fields}}),o=ye.newFoundDocument(r,i,a,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function qM(t,e){return"found"in e?function(n,r){V(!!r.found),r.found.name,r.found.updateTime;const i=ur(n,r.found.name),a=Ve(r.found.updateTime),s=r.found.createTime?Ve(r.found.createTime):z.min(),o=new lt({mapValue:{fields:r.found.fields}});return ye.newFoundDocument(i,a,s,o)}(t,e):"missing"in e?function(n,r){V(!!r.missing),V(!!r.readTime);const i=ur(n,r.missing),a=Ve(r.readTime);return ye.newNoDocument(i,a)}(t,e):$()}function HM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],a=function(f,u){return f.wt?(V(u===void 0||typeof u=="string"),Ye.fromBase64String(u||"")):(V(u===void 0||u instanceof Uint8Array),Ye.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,o=s&&function(f){const u=f.code===void 0?I.UNKNOWN:t_(f.code);return new T(u,f.message||"")}(s);n=new s_(r,i,a,o||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ur(t,r.document.name),a=Ve(r.document.updateTime),s=r.document.createTime?Ve(r.document.createTime):z.min(),o=new lt({mapValue:{fields:r.document.fields}}),f=ye.newFoundDocument(i,a,s,o),u=r.targetIds||[],l=r.removedTargetIds||[];n=new kc(u,l,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ur(t,r.document),a=r.readTime?Ve(r.readTime):z.min(),s=ye.newNoDocument(i,a),o=r.removedTargetIds||[];n=new kc([],o,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ur(t,r.document),a=r.removedTargetIds||[];n=new kc([],a,i,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,a=new PM(i),s=r.targetId;n=new a_(s,a)}}return n}function Tu(t,e){let n;if(e instanceof Io)n={update:g4(t,e.key,e.value)};else if(e instanceof So)n={delete:Su(t,e.key)};else if(e instanceof jr)n={update:g4(t,e.key,e.data),updateMask:XM(e.fieldMask)};else{if(!(e instanceof v2))return $();n={verify:Su(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const s=a.transform;if(s instanceof Js)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(s instanceof Na)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:s.elements}};if(s instanceof Da)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:s.elements}};if(s instanceof Zs)return{fieldPath:a.field.canonicalString(),increment:s.gt};throw $()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:BM(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$()}(t,e.precondition)),n}function Kp(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Ie.updateTime(Ve(i.updateTime)):i.exists!==void 0?Ie.exists(i.exists):Ie.none()}(e.currentDocument):Ie.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(a,s){let o=null;if("setToServerValue"in s)V(s.setToServerValue==="REQUEST_TIME"),o=new Js;else if("appendMissingElements"in s){const u=s.appendMissingElements.values||[];o=new Na(u)}else if("removeAllFromArray"in s){const u=s.removeAllFromArray.values||[];o=new Da(u)}else"increment"in s?o=new Zs(a,s.increment):$();const f=Ue.fromServerFormat(s.fieldPath);return new fl(f,o)}(t,i)):[];if(e.update){e.update.name;const i=ur(t,e.update.name),a=new lt({mapValue:{fields:e.update.fields}});if(e.updateMask){const s=function(o){const f=o.fieldPaths||[];return new Ht(f.map(u=>Ue.fromServerFormat(u)))}(e.updateMask);return new jr(i,a,s,n,r)}return new Io(i,a,n,r)}if(e.delete){const i=ur(t,e.delete);return new So(i,n)}if(e.verify){const i=ur(t,e.verify);return new v2(i,n)}return $()}function WM(t,e){return t&&t.length>0?(V(e!==void 0),t.map(n=>function(r,i){let a=r.updateTime?Ve(r.updateTime):Ve(i);return a.isEqual(z.min())&&(a=Ve(i)),new RM(a,r.transformResults||[])}(n,e))):[]}function d_(t,e){return{documents:[Gp(t,e.path)]}}function h_(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Gp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Gp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(f){if(f.length!==0)return g_(ce.create(f,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(f){if(f.length!==0)return f.map(u=>function(l){return{field:as(l.field),direction:KM(l.dir)}}(u))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const s=function(f,u){return f.wt||il(u)?u:{value:u}}(t,e.limit);var o;return s!==null&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt={before:(o=e.startAt).inclusive,values:o.position}),e.endAt&&(n.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),n}function p_(t){let e=u_(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){V(r===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let a=[];n.where&&(a=function(l){const c=m_(l);return c instanceof ce&&p2(c)?c.getFilters():[c]}(n.where));let s=[];n.orderBy&&(s=n.orderBy.map(l=>function(c){return new Ms(ss(c.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(c.direction))}(l)));let o=null;n.limit&&(o=function(l){let c;return c=typeof l=="object"?l.value:l,il(c)?null:c}(n.limit));let f=null;n.startAt&&(f=function(l){const c=!!l.before,d=l.values||[];return new Si(d,c)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const c=!l.before,d=l.values||[];return new Si(d,c)}(n.endAt)),VE(e,i,s,a,o,"F",f,u)}function GM(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return $()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function m_(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ss(e.unaryFilter.field);return re.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ss(e.unaryFilter.field);return re.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ss(e.unaryFilter.field);return re.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ss(e.unaryFilter.field);return re.create(a,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(t):t.fieldFilter!==void 0?function(e){return re.create(ss(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ce.create(e.compositeFilter.filters.map(n=>m_(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return $()}}(e.compositeFilter.op))}(t):$()}function KM(t){return jM[t]}function QM(t){return UM[t]}function YM(t){return VM[t]}function as(t){return{fieldPath:t.canonicalString()}}function ss(t){return Ue.fromServerFormat(t.fieldPath)}function g_(t){return t instanceof re?function(e){if(e.op==="=="){if(e4(e.value))return{unaryFilter:{field:as(e.field),op:"IS_NAN"}};if(Zy(e.value))return{unaryFilter:{field:as(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(e4(e.value))return{unaryFilter:{field:as(e.field),op:"IS_NOT_NAN"}};if(Zy(e.value))return{unaryFilter:{field:as(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:as(e.field),op:QM(e.op),value:e.value}}}(t):t instanceof ce?function(e){const n=e.getFilters().map(r=>g_(r));return n.length===1?n[0]:{compositeFilter:{op:YM(e.op),filters:n}}}(t):$()}function XM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function v_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function Pt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=v4(e)),e=JM(t.get(n),e);return v4(e)}function JM(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const a=t.charAt(i);switch(a){case"\0":n+="";break;case"":n+="";break;default:n+=a}}return n}function v4(t){return t+""}function ir(t){const e=t.length;if(V(e>=2),e===2)return V(t.charAt(0)===""&&t.charAt(1)===""),se.emptyPath();const n=e-2,r=[];let i="";for(let a=0;a<e;){const s=t.indexOf("",a);switch((s<0||s>n)&&$(),t.charAt(s+1)){case"":const o=t.substring(a,s);let f;i.length===0?f=o:(i+=o,f=i,i=""),r.push(f);break;case"":i+=t.substring(a,s),i+="\0";break;case"":i+=t.substring(a,s+1);break;default:$()}a=s+2}return new se(r)}/**
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
 */const y4=["userId","batchId"];/**
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
 */function Ec(t,e){return[t,Pt(e)]}function y_(t,e,n){return[t,Pt(e),n]}const ZM={},eL=["prefixPath","collectionGroup","readTime","documentId"],tL=["prefixPath","collectionGroup","documentId"],nL=["collectionGroup","readTime","prefixPath","documentId"],rL=["canonicalId","targetId"],iL=["targetId","path"],aL=["path","targetId"],sL=["collectionId","parent"],oL=["indexId","uid"],fL=["uid","sequenceNumber"],uL=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],lL=["indexId","uid","orderedDocumentKey"],cL=["userId","collectionPath","documentId"],dL=["userId","collectionPath","largestBatchId"],hL=["userId","collectionGroup","largestBatchId"],w_=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],pL=[...w_,"documentOverlays"],b_=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],k_=b_,mL=[...k_,"indexConfiguration","indexState","indexEntries"];/**
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
 */class Qp extends xE{constructor(e,n){super(),this.se=e,this.currentSequenceNumber=n}}function st(t,e){const n=O(t);return $n.M(n.se,e)}/**
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
 */class w2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const a=this.mutations[i];a.key.isEqual(e.key)&&NM(a,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Df(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Df(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=i_();return this.mutations.forEach(i=>{const a=e.get(i.key),s=a.overlayedDocument;let o=this.applyToLocalView(s,a.mutatedFields);o=n.has(i.key)?null:o;const f=JE(s,o);f!==null&&r.set(i.key,f),s.isValidDocument()||s.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&Qs(this.mutations,e.mutations,(n,r)=>l4(n,r))&&Qs(this.baseMutations,e.baseMutations,(n,r)=>l4(n,r))}}class b2{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){V(e.mutations.length===r.length);let i=LM;const a=e.mutations;for(let s=0;s<a.length;s++)i=i.insert(a[s].key,r[s].version);return new b2(e,n,r,i)}}/**
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
 */class k2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class mi{constructor(e,n,r,i,a=z.min(),s=z.min(),o=Ye.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new mi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class E_{constructor(e){this.ie=e}}function gL(t,e){let n;if(e.document)n=c_(t.ie,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=L.fromSegments(e.noDocument.path),i=Ma(e.noDocument.readTime);n=ye.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return $();{const r=L.fromSegments(e.unknownDocument.path),i=Ma(e.unknownDocument.version);n=ye.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new Se(r[0],r[1]);return z.fromTimestamp(i)}(e.readTime)),n}function w4(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Ed(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,a){return{name:Su(i,a.key),fields:a.data.value.mapValue.fields,updateTime:eo(i,a.version.toTimestamp()),createTime:eo(i,a.createTime.toTimestamp())}}(t.ie,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Pa(e.version)};else{if(!e.isUnknownDocument())return $();r.unknownDocument={path:n.path.toArray(),version:Pa(e.version)}}return r}function Ed(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Pa(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ma(t){const e=new Se(t.seconds,t.nanoseconds);return z.fromTimestamp(e)}function Yi(t,e){const n=(e.baseMutations||[]).map(a=>Kp(t.ie,a));for(let a=0;a<e.mutations.length-1;++a){const s=e.mutations[a];if(a+1<e.mutations.length&&e.mutations[a+1].transform!==void 0){const o=e.mutations[a+1];s.updateTransforms=o.transform.fieldTransforms,e.mutations.splice(a+1,1),++a}}const r=e.mutations.map(a=>Kp(t.ie,a)),i=Se.fromMillis(e.localWriteTimeMs);return new w2(e.batchId,i,n,r)}function cf(t){const e=Ma(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Ma(t.lastLimboFreeSnapshotVersion):z.min();let r;var i;return t.query.documents!==void 0?(V((i=t.query).documents.length===1),r=Xt(_o(u_(i.documents[0])))):r=function(a){return Xt(p_(a))}(t.query),new mi(r,t.targetId,0,t.lastListenSequenceNumber,e,n,Ye.fromBase64String(t.resumeToken))}function __(t,e){const n=Pa(e.snapshotVersion),r=Pa(e.lastLimboFreeSnapshotVersion);let i;i=wd(e.target)?d_(t.ie,e.target):h_(t.ie,e.target);const a=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ra(e.target),readTime:n,resumeToken:a,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function E2(t){const e=p_({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kd(e,e.limit,"L"):e}function o0(t,e){return new k2(e.largestBatchId,Kp(t.ie,e.overlayMutation))}function b4(t,e){const n=e.path.lastSegment();return[t,Pt(e.path.popLast()),n]}function k4(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Pa(r.readTime),documentKey:Pt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class vL{getBundleMetadata(e,n){return E4(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Ma(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return E4(e).put({bundleId:(r=n).id,createTime:Pa(Ve(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return _4(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:E2(i.bundledQuery),readTime:Ma(i.readTime)};var i})}saveNamedQuery(e,n){return _4(e).put(function(r){return{name:r.name,readTime:Pa(Ve(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function E4(t){return st(t,"bundles")}function _4(t){return st(t,"namedQueries")}/**
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
 */class O1{constructor(e,n){this.yt=e,this.userId=n}static re(e,n){const r=n.uid||"";return new O1(e,r)}getOverlay(e,n){return Ko(e).get(b4(this.userId,n)).next(r=>r?o0(this.yt,r):null)}getOverlays(e,n){const r=rr();return _.forEach(n,i=>this.getOverlay(e,i).next(a=>{a!==null&&r.set(i,a)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((a,s)=>{const o=new k2(n,s);i.push(this.oe(e,o))}),_.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(s=>i.add(Pt(s.getCollectionPath())));const a=[];return i.forEach(s=>{const o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,r+1],!1,!0);a.push(Ko(e).Y("collectionPathOverlayIndex",o))}),_.waitFor(a)}getOverlaysForCollection(e,n,r){const i=rr(),a=Pt(n),s=IDBKeyRange.bound([this.userId,a,r],[this.userId,a,Number.POSITIVE_INFINITY],!0);return Ko(e).W("collectionPathOverlayIndex",s).next(o=>{for(const f of o){const u=o0(this.yt,f);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const a=rr();let s;const o=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Ko(e).Z({index:"collectionGroupOverlayIndex",range:o},(f,u,l)=>{const c=o0(this.yt,u);a.size()<i||c.largestBatchId===s?(a.set(c.getKey(),c),s=c.largestBatchId):l.done()}).next(()=>a)}oe(e,n){return Ko(e).put(function(r,i,a){const[s,o,f]=b4(i,a.mutation.key);return{userId:i,collectionPath:o,documentId:f,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:Tu(r.ie,a.mutation)}}(this.yt,this.userId,n))}}function Ko(t){return st(t,"documentOverlays")}/**
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
 */class Xi{constructor(){}ue(e,n){this.ce(e,n),n.ae()}ce(e,n){if("nullValue"in e)this.he(n,5);else if("booleanValue"in e)this.he(n,10),n.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(n,15),n.le(Pe(e.integerValue));else if("doubleValue"in e){const r=Pe(e.doubleValue);isNaN(r)?this.he(n,13):(this.he(n,15),ku(r)?n.le(0):n.le(r))}else if("timestampValue"in e){const r=e.timestampValue;this.he(n,20),typeof r=="string"?n.fe(r):(n.fe(`${r.seconds||""}`),n.le(r.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,n),this._e(n);else if("bytesValue"in e)this.he(n,30),n.we(Ta(e.bytesValue)),this._e(n);else if("referenceValue"in e)this.me(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.he(n,45),n.le(r.latitude||0),n.le(r.longitude||0)}else"mapValue"in e?DE(e)?this.he(n,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,n),this._e(n)):"arrayValue"in e?(this.ye(e.arrayValue,n),this._e(n)):$()}de(e,n){this.he(n,25),this.pe(e,n)}pe(e,n){n.fe(e)}ge(e,n){const r=e.fields||{};this.he(n,55);for(const i of Object.keys(r))this.de(i,n),this.ce(r[i],n)}ye(e,n){const r=e.values||[];this.he(n,50);for(const i of r)this.ce(i,n)}me(e,n){this.he(n,37),L.fromName(e).path.forEach(r=>{this.he(n,60),this.pe(r,n)})}he(e,n){e.le(n)}_e(e){e.le(2)}}Xi.Ie=new Xi;function yL(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function I4(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const a=yL(255&n[i]);if(r+=a,a!==8)break}return r}(t);return Math.ceil(e/8)}class wL{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Te(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ee(r.value),r=n.next();this.Ae()}Re(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.be(r.value),r=n.next();this.Pe()}ve(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ee(r);else if(r<2048)this.Ee(960|r>>>6),this.Ee(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ee(480|r>>>12),this.Ee(128|63&r>>>6),this.Ee(128|63&r);else{const i=n.codePointAt(0);this.Ee(240|i>>>18),this.Ee(128|63&i>>>12),this.Ee(128|63&i>>>6),this.Ee(128|63&i)}}this.Ae()}Ve(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.be(r);else if(r<2048)this.be(960|r>>>6),this.be(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.be(480|r>>>12),this.be(128|63&r>>>6),this.be(128|63&r);else{const i=n.codePointAt(0);this.be(240|i>>>18),this.be(128|63&i>>>12),this.be(128|63&i>>>6),this.be(128|63&i)}}this.Pe()}Se(e){const n=this.De(e),r=I4(n);this.Ce(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}xe(e){const n=this.De(e),r=I4(n);this.Ce(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Ne(){this.ke(255),this.ke(255)}Oe(){this.Me(255),this.Me(255)}reset(){this.position=0}seed(e){this.Ce(e.length),this.buffer.set(e,this.position),this.position+=e.length}Fe(){return this.buffer.slice(0,this.position)}De(e){const n=function(i){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,i,!1),new Uint8Array(a.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ee(e){const n=255&e;n===0?(this.ke(0),this.ke(255)):n===255?(this.ke(255),this.ke(0)):this.ke(n)}be(e){const n=255&e;n===0?(this.Me(0),this.Me(255)):n===255?(this.Me(255),this.Me(0)):this.Me(e)}Ae(){this.ke(0),this.ke(1)}Pe(){this.Me(0),this.Me(1)}ke(e){this.Ce(1),this.buffer[this.position++]=e}Me(e){this.Ce(1),this.buffer[this.position++]=~e}Ce(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class bL{constructor(e){this.$e=e}we(e){this.$e.Te(e)}fe(e){this.$e.ve(e)}le(e){this.$e.Se(e)}ae(){this.$e.Ne()}}class kL{constructor(e){this.$e=e}we(e){this.$e.Re(e)}fe(e){this.$e.Ve(e)}le(e){this.$e.xe(e)}ae(){this.$e.Oe()}}class Qo{constructor(){this.$e=new wL,this.Be=new bL(this.$e),this.Le=new kL(this.$e)}seed(e){this.$e.seed(e)}qe(e){return e===0?this.Be:this.Le}Fe(){return this.$e.Fe()}reset(){this.$e.reset()}}/**
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
 */class Ji{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Ue(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Ji(this.indexId,this.documentKey,this.arrayValue,r)}}function qr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=S4(t.arrayValue,e.arrayValue),n!==0?n:(n=S4(t.directionalValue,e.directionalValue),n!==0?n:L.comparator(t.documentKey,e.documentKey)))}function S4(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class EL{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ke=e.orderBy,this.Ge=[];for(const n of e.filters){const r=n;r.isInequality()?this.Qe=r:this.Ge.push(r)}}je(e){V(e.collectionGroup===this.collectionId);const n=jp(e);if(n!==void 0&&!this.We(n))return!1;const r=Ki(e);let i=0,a=0;for(;i<r.length&&this.We(r[i]);++i);if(i===r.length)return!0;if(this.Qe!==void 0){const s=r[i];if(!this.ze(this.Qe,s)||!this.He(this.Ke[a++],s))return!1;++i}for(;i<r.length;++i){const s=r[i];if(a>=this.Ke.length||!this.He(this.Ke[a++],s))return!1}return!0}We(e){for(const n of this.Ge)if(this.ze(n,e))return!0;return!1}ze(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}He(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function I_(t){var e,n;if(V(t instanceof re||t instanceof ce),t instanceof re){if(t instanceof jE){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(a=>re.create(t.field,"==",a)))||[];return ce.create(i,"or")}return t}const r=t.filters.map(i=>I_(i));return ce.create(r,t.op)}function _L(t){if(t.getFilters().length===0)return[];const e=Jp(I_(t));return V(S_(e)),Yp(e)||Xp(e)?[e]:e.getFilters()}function Yp(t){return t instanceof re}function Xp(t){return t instanceof ce&&p2(t)}function S_(t){return Yp(t)||Xp(t)||function(e){if(e instanceof ce&&zp(e)){for(const n of e.getFilters())if(!Yp(n)&&!Xp(n))return!1;return!0}return!1}(t)}function Jp(t){if(V(t instanceof re||t instanceof ce),t instanceof re)return t;if(t.filters.length===1)return Jp(t.filters[0]);const e=t.filters.map(r=>Jp(r));let n=ce.create(e,t.op);return n=_d(n),S_(n)?n:(V(n instanceof ce),V(Xs(n)),V(n.filters.length>1),n.filters.reduce((r,i)=>_2(r,i)))}function _2(t,e){let n;return V(t instanceof re||t instanceof ce),V(e instanceof re||e instanceof ce),n=t instanceof re?e instanceof re?function(r,i){return ce.create([r,i],"and")}(t,e):C4(t,e):e instanceof re?C4(e,t):function(r,i){if(V(r.filters.length>0&&i.filters.length>0),Xs(r)&&Xs(i))return OE(r,i.getFilters());const a=zp(r)?r:i,s=zp(r)?i:r,o=a.filters.map(f=>_2(f,s));return ce.create(o,"or")}(t,e),_d(n)}function C4(t,e){if(Xs(e))return OE(e,t.getFilters());{const n=e.filters.map(r=>_2(t,r));return ce.create(n,"or")}}function _d(t){if(V(t instanceof re||t instanceof ce),t instanceof re)return t;const e=t.getFilters();if(e.length===1)return _d(e[0]);if(ME(t))return t;const n=e.map(i=>_d(i)),r=[];return n.forEach(i=>{i instanceof re?r.push(i):i instanceof ce&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ce.create(r,t.op)}/**
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
 */class IL{constructor(){this.Je=new I2}addToCollectionParentIndex(e,n){return this.Je.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(ln.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(ln.min())}updateCollectionGroup(e,n,r){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class I2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new pe(se.comparator),a=!i.has(r);return this.index[n]=i.add(r),a}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new pe(se.comparator)).toArray()}}/**
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
 */const Ql=new Uint8Array(0);class SL{constructor(e,n){this.user=e,this.databaseId=n,this.Ye=new I2,this.Xe=new Fi(r=>Ra(r),(r,i)=>al(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Ye.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.Ye.add(n)});const a={collectionId:r,parent:Pt(i)};return T4(e).put(a)}return _.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[_E(n),""],!1,!0);return T4(e).W(i).next(a=>{for(const s of a){if(s.collectionId!==n)break;r.push(ir(s.parent))}return r})}addFieldIndex(e,n){const r=Yl(e),i=function(s){return{indexId:s.indexId,collectionGroup:s.collectionGroup,fields:s.fields.map(o=>[o.fieldPath.canonicalString(),o.kind])}}(n);delete i.indexId;const a=r.add(i);if(n.indexState){const s=Xo(e);return a.next(o=>{s.put(k4(o,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return a.next()}deleteFieldIndex(e,n){const r=Yl(e),i=Xo(e),a=Yo(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>a.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=Yo(e);let i=!0;const a=new Map;return _.forEach(this.Ze(n),s=>this.tn(e,s).next(o=>{i&&(i=!!o),a.set(s,o)})).next(()=>{if(i){let s=Z();const o=[];return _.forEach(a,(f,u)=>{var l;A("IndexedDbIndexManager",`Using index ${l=f,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(v=>`${v.fieldPath}:${v.kind}`).join(",")}`} to execute ${Ra(n)}`);const c=function(v,b){const S=jp(b);if(S===void 0)return null;for(const C of bd(v,S.fieldPath))switch(C.op){case"array-contains-any":return C.value.arrayValue.values||[];case"array-contains":return[C.value]}return null}(u,f),d=function(v,b){const S=new Map;for(const C of Ki(b))for(const x of bd(v,C.fieldPath))switch(x.op){case"==":case"in":S.set(C.fieldPath.canonicalString(),x.value);break;case"not-in":case"!=":return S.set(C.fieldPath.canonicalString(),x.value),Array.from(S.values())}return null}(u,f),h=function(v,b){const S=[];let C=!0;for(const x of Ki(b)){const P=x.kind===0?s4(v,x.fieldPath,v.startAt):o4(v,x.fieldPath,v.startAt);S.push(P.value),C&&(C=P.inclusive)}return new Si(S,C)}(u,f),m=function(v,b){const S=[];let C=!0;for(const x of Ki(b)){const P=x.kind===0?o4(v,x.fieldPath,v.endAt):s4(v,x.fieldPath,v.endAt);S.push(P.value),C&&(C=P.inclusive)}return new Si(S,C)}(u,f),w=this.en(f,u,h),E=this.en(f,u,m),g=this.nn(f,u,d),p=this.sn(f.indexId,c,w,h.inclusive,E,m.inclusive,g);return _.forEach(p,v=>r.J(v,n.limit).next(b=>{b.forEach(S=>{const C=L.fromSegments(S.documentKey);s.has(C)||(s=s.add(C),o.push(C))})}))}).next(()=>o)}return _.resolve(null)})}Ze(e){let n=this.Xe.get(e);return n||(e.filters.length===0?n=[e]:n=_L(ce.create(e.filters,"and")).map(r=>qp(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Xe.set(e,n),n)}sn(e,n,r,i,a,s,o){const f=(n!=null?n.length:1)*Math.max(r.length,a.length),u=f/(n!=null?n.length:1),l=[];for(let c=0;c<f;++c){const d=n?this.rn(n[c/u]):Ql,h=this.on(e,d,r[c%u],i),m=this.un(e,d,a[c%u],s),w=o.map(E=>this.on(e,d,E,!0));l.push(...this.createRange(h,m,w))}return l}on(e,n,r,i){const a=new Ji(e,L.empty(),n,r);return i?a:a.Ue()}un(e,n,r,i){const a=new Ji(e,L.empty(),n,r);return i?a.Ue():a}tn(e,n){const r=new EL(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(a=>{let s=null;for(const o of a)r.je(o)&&(!s||o.fields.length>s.fields.length)&&(s=o);return s})}getIndexType(e,n){let r=2;const i=this.Ze(n);return _.forEach(i,a=>this.tn(e,a).next(s=>{s?r!==0&&s.fields.length<function(o){let f=new pe(Ue.comparator),u=!1;for(const l of o.filters)for(const c of l.getFlattenedFilters())c.field.isKeyField()||(c.op==="array-contains"||c.op==="array-contains-any"?u=!0:f=f.add(c.field));for(const l of o.orderBy)l.field.isKeyField()||(f=f.add(l.field));return f.size+(u?1:0)}(a)&&(r=1):r=0})).next(()=>function(a){return a.limit!==null}(n)&&i.length>1&&r===2?1:r)}cn(e,n){const r=new Qo;for(const i of Ki(e)){const a=n.data.field(i.fieldPath);if(a==null)return null;const s=r.qe(i.kind);Xi.Ie.ue(a,s)}return r.Fe()}rn(e){const n=new Qo;return Xi.Ie.ue(e,n.qe(0)),n.Fe()}an(e,n){const r=new Qo;return Xi.Ie.ue(Aa(this.databaseId,n),r.qe(function(i){const a=Ki(i);return a.length===0?0:a[a.length-1].kind}(e))),r.Fe()}nn(e,n,r){if(r===null)return[];let i=[];i.push(new Qo);let a=0;for(const s of Ki(e)){const o=r[a++];for(const f of i)if(this.hn(n,s.fieldPath)&&Iu(o))i=this.ln(i,s,o);else{const u=f.qe(s.kind);Xi.Ie.ue(o,u)}}return this.fn(i)}en(e,n,r){return this.nn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Fe();return n}ln(e,n,r){const i=[...e],a=[];for(const s of r.arrayValue.values||[])for(const o of i){const f=new Qo;f.seed(o.Fe()),Xi.Ie.ue(s,f.qe(n.kind)),a.push(f)}return a}hn(e,n){return!!e.filters.find(r=>r instanceof re&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Yl(e),i=Xo(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(a=>{const s=[];return _.forEach(a,o=>i.get([o.indexId,this.uid]).next(f=>{s.push(function(u,l){const c=l?new yd(l.sequenceNumber,new ln(Ma(l.readTime),new L(ir(l.documentKey)),l.largestBatchId)):yd.empty(),d=u.fields.map(([h,m])=>new fM(Ue.fromServerFormat(h),m));return new IE(u.indexId,u.collectionGroup,d,c)}(o,f))})).next(()=>s)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const a=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return a!==0?a:J(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Yl(e),a=Xo(e);return this.dn(e).next(s=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(o=>_.forEach(o,f=>a.put(k4(f.indexId,this.user,s,r)))))}updateIndexEntries(e,n){const r=new Map;return _.forEach(n,(i,a)=>{const s=r.get(i.collectionGroup);return(s?_.resolve(s):this.getFieldIndexes(e,i.collectionGroup)).next(o=>(r.set(i.collectionGroup,o),_.forEach(o,f=>this._n(e,i,f).next(u=>{const l=this.wn(a,f);return u.isEqual(l)?_.resolve():this.mn(e,a,f,u,l)}))))})}gn(e,n,r,i){return Yo(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.an(r,n.key),documentKey:n.key.path.toArray()})}yn(e,n,r,i){return Yo(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.an(r,n.key),n.key.path.toArray()])}_n(e,n,r){const i=Yo(e);let a=new pe(qr);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.an(r,n)])},(s,o)=>{a=a.add(new Ji(r.indexId,n,o.arrayValue,o.directionalValue))}).next(()=>a)}wn(e,n){let r=new pe(qr);const i=this.cn(n,e);if(i==null)return r;const a=jp(n);if(a!=null){const s=e.data.field(a.fieldPath);if(Iu(s))for(const o of s.arrayValue.values||[])r=r.add(new Ji(n.indexId,e.key,this.rn(o),i))}else r=r.add(new Ji(n.indexId,e.key,Ql,i));return r}mn(e,n,r,i,a){A("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const s=[];return function(o,f,u,l,c){const d=o.getIterator(),h=f.getIterator();let m=ns(d),w=ns(h);for(;m||w;){let E=!1,g=!1;if(m&&w){const p=u(m,w);p<0?g=!0:p>0&&(E=!0)}else m!=null?g=!0:E=!0;E?(l(w),w=ns(h)):g?(c(m),m=ns(d)):(m=ns(d),w=ns(h))}}(i,a,qr,o=>{s.push(this.gn(e,n,r,o))},o=>{s.push(this.yn(e,n,r,o))}),_.waitFor(s)}dn(e){let n=1;return Xo(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,a)=>{a.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((s,o)=>qr(s,o)).filter((s,o,f)=>!o||qr(s,f[o-1])!==0);const i=[];i.push(e);for(const s of r){const o=qr(s,e),f=qr(s,n);if(o===0)i[0]=e.Ue();else if(o>0&&f<0)i.push(s),i.push(s.Ue());else if(f>0)break}i.push(n);const a=[];for(let s=0;s<i.length;s+=2){if(this.pn(i[s],i[s+1]))return[];const o=[i[s].indexId,this.uid,i[s].arrayValue,i[s].directionalValue,Ql,[]],f=[i[s+1].indexId,this.uid,i[s+1].arrayValue,i[s+1].directionalValue,Ql,[]];a.push(IDBKeyRange.bound(o,f))}return a}pn(e,n){return qr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(x4)}getMinOffset(e,n){return _.mapArray(this.Ze(n),r=>this.tn(e,r).next(i=>i||$())).next(x4)}}function T4(t){return st(t,"collectionParents")}function Yo(t){return st(t,"indexEntries")}function Yl(t){return st(t,"indexConfiguration")}function Xo(t){return st(t,"indexState")}function x4(t){V(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;c2(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new ln(e.readTime,e.documentKey,n)}/**
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
 */const A4={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class jt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new jt(e,jt.DEFAULT_COLLECTION_PERCENTILE,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function C_(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),a=[],s=IDBKeyRange.only(n.batchId);let o=0;const f=r.Z({range:s},(l,c,d)=>(o++,d.delete()));a.push(f.next(()=>{V(o===1)}));const u=[];for(const l of n.mutations){const c=y_(e,l.key.path,n.batchId);a.push(i.delete(c)),u.push(l.key)}return _.waitFor(a).next(()=>u)}function Id(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw $();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */jt.DEFAULT_COLLECTION_PERCENTILE=10,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,jt.DEFAULT=new jt(41943040,jt.DEFAULT_COLLECTION_PERCENTILE,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),jt.DISABLED=new jt(-1,0,0);class $1{constructor(e,n,r,i){this.userId=e,this.yt=n,this.indexManager=r,this.referenceDelegate=i,this.In={}}static re(e,n,r,i){V(e.uid!=="");const a=e.isAuthenticated()?e.uid:"";return new $1(a,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Hr(e).Z({index:"userMutationsIndex",range:r},(i,a,s)=>{n=!1,s.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const a=os(e),s=Hr(e);return s.add({}).next(o=>{V(typeof o=="number");const f=new w2(o,n,r,i),u=function(d,h,m){const w=m.baseMutations.map(g=>Tu(d.ie,g)),E=m.mutations.map(g=>Tu(d.ie,g));return{userId:h,batchId:m.batchId,localWriteTimeMs:m.localWriteTime.toMillis(),baseMutations:w,mutations:E}}(this.yt,this.userId,f),l=[];let c=new pe((d,h)=>J(d.canonicalString(),h.canonicalString()));for(const d of i){const h=y_(this.userId,d.key.path,o);c=c.add(d.key.path.popLast()),l.push(s.put(u)),l.push(a.put(h,ZM))}return c.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[o]=f.keys()}),_.waitFor(l).next(()=>f)})}lookupMutationBatch(e,n){return Hr(e).get(n).next(r=>r?(V(r.userId===this.userId),Yi(this.yt,r)):null)}Tn(e,n){return this.In[n]?_.resolve(this.In[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.In[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let a=null;return Hr(e).Z({index:"userMutationsIndex",range:i},(s,o,f)=>{o.userId===this.userId&&(V(o.batchId>=r),a=Yi(this.yt,o)),f.done()}).next(()=>a)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Hr(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(i,a,s)=>{r=a.batchId,s.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Hr(e).W("userMutationsIndex",n).next(r=>r.map(i=>Yi(this.yt,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Ec(this.userId,n.path),i=IDBKeyRange.lowerBound(r),a=[];return os(e).Z({range:i},(s,o,f)=>{const[u,l,c]=s,d=ir(l);if(u===this.userId&&n.path.isEqual(d))return Hr(e).get(c).next(h=>{if(!h)throw $();V(h.userId===this.userId),a.push(Yi(this.yt,h))});f.done()}).next(()=>a)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pe(J);const i=[];return n.forEach(a=>{const s=Ec(this.userId,a.path),o=IDBKeyRange.lowerBound(s),f=os(e).Z({range:o},(u,l,c)=>{const[d,h,m]=u,w=ir(h);d===this.userId&&a.path.isEqual(w)?r=r.add(m):c.done()});i.push(f)}),_.waitFor(i).next(()=>this.En(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,a=Ec(this.userId,r),s=IDBKeyRange.lowerBound(a);let o=new pe(J);return os(e).Z({range:s},(f,u,l)=>{const[c,d,h]=f,m=ir(d);c===this.userId&&r.isPrefixOf(m)?m.length===i&&(o=o.add(h)):l.done()}).next(()=>this.En(e,o))}En(e,n){const r=[],i=[];return n.forEach(a=>{i.push(Hr(e).get(a).next(s=>{if(s===null)throw $();V(s.userId===this.userId),r.push(Yi(this.yt,s))}))}),_.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return C_(e.se,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.An(n.batchId)}),_.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return _.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return os(e).Z({range:r},(a,s,o)=>{if(a[0]===this.userId){const f=ir(a[1]);i.push(f)}else o.done()}).next(()=>{V(i.length===0)})})}containsKey(e,n){return T_(e,this.userId,n)}Rn(e){return x_(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function T_(t,e,n){const r=Ec(e,n.path),i=r[1],a=IDBKeyRange.lowerBound(r);let s=!1;return os(t).Z({range:a,X:!0},(o,f,u)=>{const[l,c,d]=o;l===e&&c===i&&(s=!0),u.done()}).next(()=>s)}function Hr(t){return st(t,"mutations")}function os(t){return st(t,"documentMutations")}function x_(t){return st(t,"mutationQueues")}/**
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
 */class La{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new La(0)}static vn(){return new La(-1)}}/**
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
 */class CL{constructor(e,n){this.referenceDelegate=e,this.yt=n}allocateTargetId(e){return this.Vn(e).next(n=>{const r=new La(n.highestTargetId);return n.highestTargetId=r.next(),this.Sn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(n=>z.fromTimestamp(new Se(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Vn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Sn(e,i)))}addTargetData(e,n){return this.Dn(e,n).next(()=>this.Vn(e).next(r=>(r.targetCount+=1,this.Cn(n,r),this.Sn(e,r))))}updateTargetData(e,n){return this.Dn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>rs(e).delete(n.targetId)).next(()=>this.Vn(e)).next(r=>(V(r.targetCount>0),r.targetCount-=1,this.Sn(e,r)))}removeTargets(e,n,r){let i=0;const a=[];return rs(e).Z((s,o)=>{const f=cf(o);f.sequenceNumber<=n&&r.get(f.targetId)===null&&(i++,a.push(this.removeTargetData(e,f)))}).next(()=>_.waitFor(a)).next(()=>i)}forEachTarget(e,n){return rs(e).Z((r,i)=>{const a=cf(i);n(a)})}Vn(e){return R4(e).get("targetGlobalKey").next(n=>(V(n!==null),n))}Sn(e,n){return R4(e).put("targetGlobalKey",n)}Dn(e,n){return rs(e).put(__(this.yt,n))}Cn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Vn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ra(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let a=null;return rs(e).Z({range:i,index:"queryTargetsIndex"},(s,o,f)=>{const u=cf(o);al(n,u.target)&&(a=u,f.done())}).next(()=>a)}addMatchingKeys(e,n,r){const i=[],a=Xr(e);return n.forEach(s=>{const o=Pt(s.path);i.push(a.put({targetId:r,path:o})),i.push(this.referenceDelegate.addReference(e,r,s))}),_.waitFor(i)}removeMatchingKeys(e,n,r){const i=Xr(e);return _.forEach(n,a=>{const s=Pt(a.path);return _.waitFor([i.delete([r,s]),this.referenceDelegate.removeReference(e,r,a)])})}removeMatchingKeysForTargetId(e,n){const r=Xr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Xr(e);let a=Z();return i.Z({range:r,X:!0},(s,o,f)=>{const u=ir(s[1]),l=new L(u);a=a.add(l)}).next(()=>a)}containsKey(e,n){const r=Pt(n.path),i=IDBKeyRange.bound([r],[_E(r)],!1,!0);let a=0;return Xr(e).Z({index:"documentTargetsIndex",X:!0,range:i},([s,o],f,u)=>{s!==0&&(a++,u.done())}).next(()=>a>0)}ne(e,n){return rs(e).get(n).next(r=>r?cf(r):null)}}function rs(t){return st(t,"targets")}function R4(t){return st(t,"targetGlobal")}function Xr(t){return st(t,"targetDocuments")}/**
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
 */function N4([t,e],[n,r]){const i=J(t,n);return i===0?J(e,r):i}class TL{constructor(e){this.xn=e,this.buffer=new pe(N4),this.Nn=0}kn(){return++this.Nn}On(e){const n=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();N4(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class xL{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){A("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){$i(n)?A("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Oi(n)}await this.Fn(3e5)})}}class AL{constructor(e,n){this.$n=e,this.params=n}calculateTargetCount(e,n){return this.$n.Bn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return _.resolve(qt.at);const r=new TL(n);return this.$n.forEachTarget(e,i=>r.On(i.sequenceNumber)).next(()=>this.$n.Ln(e,i=>r.On(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.$n.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.$n.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(A("LruGarbageCollector","Garbage collection skipped; disabled"),_.resolve(A4)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(A("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),A4):this.qn(e,n))}getCacheSize(e){return this.$n.getCacheSize(e)}qn(e,n){let r,i,a,s,o,f,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(c=>(c>this.params.maximumSequenceNumbersToCollect?(A("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${c}`),i=this.params.maximumSequenceNumbersToCollect):i=c,s=Date.now(),this.nthSequenceNumber(e,i))).next(c=>(r=c,o=Date.now(),this.removeTargets(e,r,n))).next(c=>(a=c,f=Date.now(),this.removeOrphanedDocuments(e,r))).next(c=>(u=Date.now(),Fp()<=oe.DEBUG&&A("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-l}ms
	Determined least recently used ${i} in `+(o-s)+`ms
	Removed ${a} targets in `+(f-o)+`ms
	Removed ${c} documents in `+(u-f)+`ms
Total Duration: ${u-l}ms`),_.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:a,documentsRemoved:c})))}}/**
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
 */class RL{constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new AL(r,i)}(this,n)}Bn(e){const n=this.Un(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Un(e){let n=0;return this.Ln(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Ln(e,n){return this.Kn(e,(r,i)=>n(i))}addReference(e,n,r){return Xl(e,r)}removeReference(e,n,r){return Xl(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Xl(e,n)}Gn(e,n){return function(r,i){let a=!1;return x_(r).tt(s=>T_(r,s,i).next(o=>(o&&(a=!0),_.resolve(!o)))).next(()=>a)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let a=0;return this.Kn(e,(s,o)=>{if(o<=n){const f=this.Gn(e,s).next(u=>{if(!u)return a++,r.getEntry(e,s).next(()=>(r.removeEntry(s,z.min()),Xr(e).delete([0,Pt(s.path)])))});i.push(f)}}).next(()=>_.waitFor(i)).next(()=>r.apply(e)).next(()=>a)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Xl(e,n)}Kn(e,n){const r=Xr(e);let i,a=qt.at;return r.Z({index:"documentTargetsIndex"},([s,o],{path:f,sequenceNumber:u})=>{s===0?(a!==qt.at&&n(new L(ir(i)),a),a=u,i=f):a=qt.at}).next(()=>{a!==qt.at&&n(new L(ir(i)),a)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Xl(t,e){return Xr(t).put(function(n,r){return{targetId:0,path:Pt(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
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
 */class A_{constructor(){this.changes=new Fi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ye.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?_.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class NL{constructor(e){this.yt=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Bi(e).put(r)}removeEntry(e,n,r){return Bi(e).delete(function(i,a){const s=i.path.toArray();return[s.slice(0,s.length-2),s[s.length-2],Ed(a),s[s.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Qn(e,r)))}getEntry(e,n){let r=ye.newInvalidDocument(n);return Bi(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Jo(n))},(i,a)=>{r=this.jn(n,a)}).next(()=>r)}Wn(e,n){let r={size:0,document:ye.newInvalidDocument(n)};return Bi(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Jo(n))},(i,a)=>{r={document:this.jn(n,a),size:Id(a)}}).next(()=>r)}getEntries(e,n){let r=Wt();return this.zn(e,n,(i,a)=>{const s=this.jn(i,a);r=r.insert(i,s)}).next(()=>r)}Hn(e,n){let r=Wt(),i=new Le(L.comparator);return this.zn(e,n,(a,s)=>{const o=this.jn(a,s);r=r.insert(a,o),i=i.insert(a,Id(s))}).next(()=>({documents:r,Jn:i}))}zn(e,n,r){if(n.isEmpty())return _.resolve();let i=new pe(M4);n.forEach(f=>i=i.add(f));const a=IDBKeyRange.bound(Jo(i.first()),Jo(i.last())),s=i.getIterator();let o=s.getNext();return Bi(e).Z({index:"documentKeyIndex",range:a},(f,u,l)=>{const c=L.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;o&&M4(o,c)<0;)r(o,null),o=s.getNext();o&&o.isEqual(c)&&(r(o,u),o=s.hasNext()?s.getNext():null),o?l.j(Jo(o)):l.done()}).next(()=>{for(;o;)r(o,null),o=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,n,r,i){const a=n.path,s=[a.popLast().toArray(),a.lastSegment(),Ed(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],o=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Bi(e).W(IDBKeyRange.bound(s,o,!0)).next(f=>{let u=Wt();for(const l of f){const c=this.jn(L.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);c.isFoundDocument()&&(ol(n,c)||i.has(c.key))&&(u=u.insert(c.key,c))}return u})}getAllFromCollectionGroup(e,n,r,i){let a=Wt();const s=P4(n,r),o=P4(n,ln.max());return Bi(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},(f,u,l)=>{const c=this.jn(L.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);a=a.insert(c.key,c),a.size===i&&l.done()}).next(()=>a)}newChangeBuffer(e){return new DL(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return D4(e).get("remoteDocumentGlobalKey").next(n=>(V(!!n),n))}Qn(e,n){return D4(e).put("remoteDocumentGlobalKey",n)}jn(e,n){if(n){const r=gL(this.yt,n);if(!(r.isNoDocument()&&r.version.isEqual(z.min())))return r}return ye.newInvalidDocument(e)}}function R_(t){return new NL(t)}class DL extends A_{constructor(e,n){super(),this.Yn=e,this.trackRemovals=n,this.Xn=new Fi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new pe((a,s)=>J(a.canonicalString(),s.canonicalString()));return this.changes.forEach((a,s)=>{const o=this.Xn.get(a);if(n.push(this.Yn.removeEntry(e,a,o.readTime)),s.isValidDocument()){const f=w4(this.Yn.yt,s);i=i.add(a.path.popLast());const u=Id(f);r+=u-o.size,n.push(this.Yn.addEntry(e,a,f))}else if(r-=o.size,this.trackRemovals){const f=w4(this.Yn.yt,s.convertToNoDocument(z.min()));n.push(this.Yn.addEntry(e,a,f))}}),i.forEach(a=>{n.push(this.Yn.indexManager.addToCollectionParentIndex(e,a))}),n.push(this.Yn.updateMetadata(e,r)),_.waitFor(n)}getFromCache(e,n){return this.Yn.Wn(e,n).next(r=>(this.Xn.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Yn.Hn(e,n).next(({documents:r,Jn:i})=>(i.forEach((a,s)=>{this.Xn.set(a,{size:s,readTime:r.get(a).readTime})}),r))}}function D4(t){return st(t,"remoteDocumentGlobal")}function Bi(t){return st(t,"remoteDocumentsV14")}function Jo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function P4(t,e){const n=e.documentKey.path.toArray();return[t,Ed(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function M4(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let a=0;a<n.length-2&&a<r.length-2;++a)if(i=J(n[a],r[a]),i)return i;return i=J(n.length,r.length),i||(i=J(n[n.length-2],r[r.length-2]),i||J(n[n.length-1],r[r.length-1]))}/**
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
 */class PL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class N_{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Df(r.mutation,i,Ht.empty(),Se.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Z()){const i=rr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(a=>{let s=lf();return a.forEach((o,f)=>{s=s.insert(o,f.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=rr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Z()))}populateOverlays(e,n,r){const i=[];return r.forEach(a=>{n.has(a)||i.push(a)}),this.documentOverlayCache.getOverlays(e,i).next(a=>{a.forEach((s,o)=>{n.set(s,o)})})}computeViews(e,n,r,i){let a=Wt();const s=Pf(),o=Pf();return n.forEach((f,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof jr)?a=a.insert(u.key,u):l!==void 0?(s.set(u.key,l.mutation.getFieldMask()),Df(l.mutation,u,l.mutation.getFieldMask(),Se.now())):s.set(u.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,a).next(f=>(f.forEach((u,l)=>s.set(u,l)),n.forEach((u,l)=>{var c;return o.set(u,new PL(l,(c=s.get(u))!==null&&c!==void 0?c:null))}),o))}recalculateAndSaveOverlays(e,n){const r=Pf();let i=new Le((s,o)=>s-o),a=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const o of s)o.keys().forEach(f=>{const u=n.get(f);if(u===null)return;let l=r.get(f)||Ht.empty();l=o.applyToLocalView(u,l),r.set(f,l);const c=(i.get(o.batchId)||Z()).add(f);i=i.insert(o.batchId,c)})}).next(()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const f=o.getNext(),u=f.key,l=f.value,c=i_();l.forEach(d=>{if(!a.has(d)){const h=JE(n.get(d),r.get(d));h!==null&&c.set(d,h),a=a.add(d)}}),s.push(this.documentOverlayCache.saveOverlays(e,u,c))}return _.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return L.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):g2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(a=>{const s=i-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-a.size):_.resolve(rr());let o=-1,f=a;return s.next(u=>_.forEach(u,(l,c)=>(o<c.largestBatchId&&(o=c.largestBatchId),a.get(l)?_.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{f=f.insert(l,d)}))).next(()=>this.populateOverlays(e,u,a)).next(()=>this.computeViews(e,f,u,Z())).next(l=>({batchId:o,changes:r_(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=lf();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let a=lf();return this.indexManager.getCollectionParents(e,i).next(s=>_.forEach(s,o=>{const f=function(u,l){return new Fr(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,o.child(i));return this.getDocumentsMatchingCollectionQuery(e,f,r).next(u=>{u.forEach((l,c)=>{a=a.insert(l,c)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(a=>{i.forEach((o,f)=>{const u=f.getKey();a.get(u)===null&&(a=a.insert(u,ye.newInvalidDocument(u)))});let s=lf();return a.forEach((o,f)=>{const u=i.get(o);u!==void 0&&Df(u.mutation,f,Ht.empty(),Se.now()),ol(n,f)&&(s=s.insert(o,f))}),s})}}/**
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
 */class ML{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return _.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Ve(r.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:E2(r.bundledQuery),readTime:Ve(r.readTime)}}(n)),_.resolve()}}/**
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
 */class LL{constructor(){this.overlays=new Le(L.comparator),this.es=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const r=rr();return _.forEach(n,i=>this.getOverlay(e,i).next(a=>{a!==null&&r.set(i,a)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,a)=>{this.oe(e,n,a)}),_.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(a=>this.overlays=this.overlays.remove(a)),this.es.delete(r)),_.resolve()}getOverlaysForCollection(e,n,r){const i=rr(),a=n.length+1,s=new L(n.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const f=o.getNext().value,u=f.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===a&&f.largestBatchId>r&&i.set(f.getKey(),f)}return _.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let a=new Le((u,l)=>u-l);const s=this.overlays.getIterator();for(;s.hasNext();){const u=s.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=a.get(u.largestBatchId);l===null&&(l=rr(),a=a.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const o=rr(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((u,l)=>o.set(u,l)),!(o.size()>=i)););return _.resolve(o)}oe(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new k2(n,r));let a=this.es.get(n);a===void 0&&(a=Z(),this.es.set(n,a)),this.es.set(n,a.add(r.key))}}/**
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
 */class S2{constructor(){this.ns=new pe(Je.ss),this.rs=new pe(Je.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Je(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Je(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new L(new se([])),r=new Je(n,e),i=new Je(n,e+1),a=[];return this.rs.forEachInRange([r,i],s=>{this.cs(s),a.push(s.key)}),a}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new L(new se([])),r=new Je(n,e),i=new Je(n,e+1);let a=Z();return this.rs.forEachInRange([r,i],s=>{a=a.add(s.key)}),a}containsKey(e){const n=new Je(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return L.comparator(e.key,n.key)||J(e._s,n._s)}static os(e,n){return J(e._s,n._s)||L.comparator(e.key,n.key)}}/**
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
 */class OL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new pe(Je.ss)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const a=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new w2(a,n,r,i);this.mutationQueue.push(s);for(const o of i)this.gs=this.gs.add(new Je(o.key,a)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return _.resolve(s)}lookupMutationBatch(e,n){return _.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),a=i<0?0:i;return _.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),i=new Je(n,Number.POSITIVE_INFINITY),a=[];return this.gs.forEachInRange([r,i],s=>{const o=this.ys(s._s);a.push(o)}),_.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pe(J);return n.forEach(i=>{const a=new Je(i,0),s=new Je(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([a,s],o=>{r=r.add(o._s)})}),_.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let a=r;L.isDocumentKey(a)||(a=a.child(""));const s=new Je(new L(a),0);let o=new pe(J);return this.gs.forEachWhile(f=>{const u=f.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(o=o.add(f._s)),!0)},s),_.resolve(this.Is(o))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){V(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return _.forEach(n.mutations,i=>{const a=new Je(i.key,n.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Je(n,0),i=this.gs.firstAfterOrEqual(r);return _.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class $L{constructor(e){this.Es=e,this.docs=new Le(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),a=i?i.size:0,s=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return _.resolve(r?r.document.mutableCopy():ye.newInvalidDocument(n))}getEntries(e,n){let r=Wt();return n.forEach(i=>{const a=this.docs.get(i);r=r.insert(i,a?a.document.mutableCopy():ye.newInvalidDocument(i))}),_.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let a=Wt();const s=n.path,o=new L(s.child("")),f=this.docs.getIteratorFrom(o);for(;f.hasNext();){const{key:u,value:{document:l}}=f.getNext();if(!s.isPrefixOf(u.path))break;u.path.length>s.length+1||c2(CE(l),r)<=0||(i.has(l.key)||ol(n,l))&&(a=a.insert(l.key,l.mutableCopy()))}return _.resolve(a)}getAllFromCollectionGroup(e,n,r,i){$()}As(e,n){return _.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new FL(this)}getSize(e){return _.resolve(this.size)}}class FL extends A_{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),_.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class jL{constructor(e){this.persistence=e,this.Rs=new Fi(n=>Ra(n),al),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.bs=0,this.Ps=new S2,this.targetCount=0,this.vs=La.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),_.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new La(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.Dn(n),_.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,r){let i=0;const a=[];return this.Rs.forEach((s,o)=>{o.sequenceNumber<=n&&r.get(o.targetId)===null&&(this.Rs.delete(s),a.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)}),_.waitFor(a).next(()=>i)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return _.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),_.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,a=[];return i&&n.forEach(s=>{a.push(i.markPotentiallyOrphaned(e,s))}),_.waitFor(a)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),_.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return _.resolve(r)}containsKey(e,n){return _.resolve(this.Ps.containsKey(n))}}/**
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
 */class D_{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new qt(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new jL(this),this.indexManager=new IL,this.remoteDocumentCache=function(r){return new $L(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new E_(n),this.Ns=new ML(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new LL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new OL(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){A("MemoryPersistence","Starting transaction:",e);const i=new UL(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(a=>this.referenceDelegate.Os(i).next(()=>a)).toPromise().then(a=>(i.raiseOnCommittedEvent(),a))}Ms(e,n){return _.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class UL extends xE{constructor(e){super(),this.currentSequenceNumber=e}}class F1{constructor(e){this.persistence=e,this.Fs=new S2,this.$s=null}static Bs(e){return new F1(e)}get Ls(){if(this.$s)return this.$s;throw $()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),_.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),_.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(a=>this.Ls.add(a.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Ls,r=>{const i=L.fromPath(r);return this.qs(e,i).next(a=>{a||n.removeEntry(i,z.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return _.or([()=>_.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class VL{constructor(e){this.yt=e}$(e,n,r,i){const a=new N1("createOrUpgrade",n);r<1&&i>=1&&(function(o){o.createObjectStore("owner")}(e),function(o){o.createObjectStore("mutationQueues",{keyPath:"userId"}),o.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",y4,{unique:!0}),o.createObjectStore("documentMutations")}(e),L4(e),function(o){o.createObjectStore("remoteDocuments")}(e));let s=_.resolve();return r<3&&i>=3&&(r!==0&&(function(o){o.deleteObjectStore("targetDocuments"),o.deleteObjectStore("targets"),o.deleteObjectStore("targetGlobal")}(e),L4(e)),s=s.next(()=>function(o){const f=o.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:z.min().toTimestamp(),targetCount:0};return f.put("targetGlobalKey",u)}(a))),r<4&&i>=4&&(r!==0&&(s=s.next(()=>function(o,f){return f.store("mutations").W().next(u=>{o.deleteObjectStore("mutations"),o.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",y4,{unique:!0});const l=f.store("mutations"),c=u.map(d=>l.put(d));return _.waitFor(c)})}(e,a))),s=s.next(()=>{(function(o){o.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(s=s.next(()=>this.Us(a))),r<6&&i>=6&&(s=s.next(()=>(function(o){o.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(a)))),r<7&&i>=7&&(s=s.next(()=>this.Gs(a))),r<8&&i>=8&&(s=s.next(()=>this.Qs(e,a))),r<9&&i>=9&&(s=s.next(()=>{(function(o){o.objectStoreNames.contains("remoteDocumentChanges")&&o.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(s=s.next(()=>this.js(a))),r<11&&i>=11&&(s=s.next(()=>{(function(o){o.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(o){o.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(s=s.next(()=>{(function(o){const f=o.createObjectStore("documentOverlays",{keyPath:cL});f.createIndex("collectionPathOverlayIndex",dL,{unique:!1}),f.createIndex("collectionGroupOverlayIndex",hL,{unique:!1})})(e)})),r<13&&i>=13&&(s=s.next(()=>function(o){const f=o.createObjectStore("remoteDocumentsV14",{keyPath:eL});f.createIndex("documentKeyIndex",tL),f.createIndex("collectionGroupIndex",nL)}(e)).next(()=>this.Ws(e,a)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(s=s.next(()=>this.zs(e,a))),r<15&&i>=15&&(s=s.next(()=>function(o){o.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),o.createObjectStore("indexState",{keyPath:oL}).createIndex("sequenceNumberIndex",fL,{unique:!1}),o.createObjectStore("indexEntries",{keyPath:uL}).createIndex("documentKeyIndex",lL,{unique:!1})}(e))),s}Ks(e){let n=0;return e.store("remoteDocuments").Z((r,i)=>{n+=Id(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Us(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>_.forEach(i,a=>{const s=IDBKeyRange.bound([a.userId,-1],[a.userId,a.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",s).next(o=>_.forEach(o,f=>{V(f.userId===a.userId);const u=Yi(this.yt,f);return C_(e,a.userId,u).next(()=>{})}))}))}Gs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const a=[];return r.Z((s,o)=>{const f=new se(s),u=function(l){return[0,Pt(l)]}(f);a.push(n.get(u).next(l=>l?_.resolve():(c=>n.put({targetId:0,path:Pt(c),sequenceNumber:i.highestListenSequenceNumber}))(f)))}).next(()=>_.waitFor(a))})}Qs(e,n){e.createObjectStore("collectionParents",{keyPath:sL});const r=n.store("collectionParents"),i=new I2,a=s=>{if(i.add(s)){const o=s.lastSegment(),f=s.popLast();return r.put({collectionId:o,parent:Pt(f)})}};return n.store("remoteDocuments").Z({X:!0},(s,o)=>{const f=new se(s);return a(f.popLast())}).next(()=>n.store("documentMutations").Z({X:!0},([s,o,f],u)=>{const l=ir(o);return a(l.popLast())}))}js(e){const n=e.store("targets");return n.Z((r,i)=>{const a=cf(i),s=__(this.yt,a);return n.put(s)})}Ws(e,n){const r=n.store("remoteDocuments"),i=[];return r.Z((a,s)=>{const o=n.store("remoteDocumentsV14"),f=(u=s,u.document?new L(se.fromString(u.document.name).popFirst(5)):u.noDocument?L.fromSegments(u.noDocument.path):u.unknownDocument?L.fromSegments(u.unknownDocument.path):$()).path.toArray();var u;/**
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
*/const l={prefixPath:f.slice(0,f.length-2),collectionGroup:f[f.length-2],documentId:f[f.length-1],readTime:s.readTime||[0,0],unknownDocument:s.unknownDocument,noDocument:s.noDocument,document:s.document,hasCommittedMutations:!!s.hasCommittedMutations};i.push(o.put(l))}).next(()=>_.waitFor(i))}zs(e,n){const r=n.store("mutations"),i=R_(this.yt),a=new D_(F1.Bs,this.yt.ie);return r.W().next(s=>{const o=new Map;return s.forEach(f=>{var u;let l=(u=o.get(f.userId))!==null&&u!==void 0?u:Z();Yi(this.yt,f).keys().forEach(c=>l=l.add(c)),o.set(f.userId,l)}),_.forEach(o,(f,u)=>{const l=new et(u),c=O1.re(this.yt,l),d=a.getIndexManager(l),h=$1.re(l,this.yt,d,a.referenceDelegate);return new N_(i,h,c,d).recalculateAndSaveOverlaysForDocumentKeys(new Qp(n,qt.at),f).next()})})}}function L4(t){t.createObjectStore("targetDocuments",{keyPath:iL}).createIndex("documentTargetsIndex",aL,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",rL,{unique:!0}),t.createObjectStore("targetGlobal")}const f0="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class C2{constructor(e,n,r,i,a,s,o,f,u,l,c=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Hs=a,this.window=s,this.document=o,this.Js=u,this.Ys=l,this.Xs=c,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!C2.C())throw new T(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new RL(this,i),this.ii=n+"main",this.yt=new E_(f),this.ri=new $n(this.ii,this.Xs,new VL(this.yt)),this.Cs=new CL(this.referenceDelegate,this.yt),this.remoteDocumentCache=R_(this.yt),this.Ns=new vL,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,l===!1&&je("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new T(I.FAILED_PRECONDITION,f0);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new qt(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Jl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(n=>this.isPrimary&&!n?this._i(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if($i(e))return A("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return A("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return Zo(e).get("owner").next(n=>_.resolve(this.mi(n)))}gi(e){return Jl(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=st(n,"clientMetadata");return r.W().next(i=>{const a=this.Ii(i,18e5),s=i.filter(o=>a.indexOf(o)===-1);return _.forEach(s,o=>r.delete(o.clientId)).next(()=>s)})}).catch(()=>[]);if(this.oi)for(const n of e)this.oi.removeItem(this.Ti(n.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?_.resolve(!0):Zo(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)){if(this.mi(n)&&this.networkEnabled)return!0;if(!this.mi(n)){if(!n.allowTabSynchronization)throw new T(I.FAILED_PRECONDITION,f0);return!1}}return!(!this.networkEnabled||!this.inForeground)||Jl(e).W().next(r=>this.Ii(r,5e3).find(i=>{if(this.clientId!==i.clientId){const a=!this.networkEnabled&&i.networkEnabled,s=!this.inForeground&&i.inForeground,o=this.networkEnabled===i.networkEnabled;if(a||s&&o)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&A("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Qp(e,qt.at);return this._i(n).next(()=>this.gi(n))}),this.ri.close(),this.Pi()}Ii(e,n){return e.filter(r=>this.pi(r.updateTimeMs,n)&&!this.Ei(r.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>Jl(e).W().next(n=>this.Ii(n,18e5).map(r=>r.clientId)))}get started(){return this.Ds}getMutationQueue(e,n){return $1.re(e,this.yt,n,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new SL(e,this.yt.ie.databaseId)}getDocumentOverlayCache(e){return O1.re(this.yt,e)}getBundleCache(){return this.Ns}runTransaction(e,n,r){A("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",a=(s=this.Xs)===15?mL:s===14?k_:s===13?b_:s===12?pL:s===11?w_:void $();var s;let o;return this.ri.runTransaction(e,i,a,f=>(o=new Qp(f,this.Ss?this.Ss.next():qt.at),n==="readwrite-primary"?this.fi(o).next(u=>!!u||this.di(o)).next(u=>{if(!u)throw je(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new T(I.FAILED_PRECONDITION,TE);return r(o)}).next(u=>this.wi(o).next(()=>u)):this.Vi(o).next(()=>r(o)))).then(f=>(o.raiseOnCommittedEvent(),f))}Vi(e){return Zo(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)&&!this.mi(n)&&!(this.Ys||this.allowTabSynchronization&&n.allowTabSynchronization))throw new T(I.FAILED_PRECONDITION,f0)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Zo(e).put("owner",n)}static C(){return $n.C()}_i(e){const n=Zo(e);return n.get("owner").next(r=>this.mi(r)?(A("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):_.resolve())}pi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(je(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),NT()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var n;try{const r=((n=this.oi)===null||n===void 0?void 0:n.getItem(this.Ti(e)))!==null;return A("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return je("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){je("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Zo(t){return st(t,"owner")}function Jl(t){return st(t,"clientMetadata")}function T2(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class x2{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=Z(),i=Z();for(const a of n.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:i=i.add(a.doc.key)}return new x2(e,n.fromCache,r,i)}}/**
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
 */class P_{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(a=>a||this.Oi(e,n,i,r)).next(a=>a||this.Mi(e,n))}ki(e,n){if(f4(n))return _.resolve(null);let r=Xt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=kd(n,null,"F"),r=Xt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(a=>{const s=Z(...a);return this.Ni.getDocuments(e,s).next(o=>this.indexManager.getMinOffset(e,r).next(f=>{const u=this.Fi(n,o);return this.$i(n,u,s,f.readTime)?this.ki(e,kd(n,null,"F")):this.Bi(e,u,n,f)}))})))}Oi(e,n,r,i){return f4(n)||i.isEqual(z.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(a=>{const s=this.Fi(n,a);return this.$i(n,s,r,i)?this.Mi(e,n):(Fp()<=oe.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Wp(n)),this.Bi(e,s,n,SE(i,-1)))})}Fi(e,n){let r=new pe(qE(e));return n.forEach((i,a)=>{ol(e,a)&&(r=r.add(a))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const a=e.limitType==="F"?n.last():n.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(i)>0)}Mi(e,n){return Fp()<=oe.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",Wp(n)),this.Ni.getDocumentsMatchingQuery(e,n,ln.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(a=>(n.forEach(s=>{a=a.insert(s.key,s)}),a))}}/**
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
 */class zL{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new Le(J),this.Ui=new Fi(a=>Ra(a),al),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new N_(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function M_(t,e,n,r){return new zL(t,e,n,r)}async function L_(t,e){const n=O(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(a=>(i=a,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(a=>{const s=[],o=[];let f=Z();for(const u of i){s.push(u.batchId);for(const l of u.mutations)f=f.add(l.key)}for(const u of a){o.push(u.batchId);for(const l of u.mutations)f=f.add(l.key)}return n.localDocuments.getDocuments(r,f).next(u=>({ji:u,removedBatchIds:s,addedBatchIds:o}))})})}function BL(t,e){const n=O(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),a=n.Gi.newChangeBuffer({trackRemovals:!0});return function(s,o,f,u){const l=f.batch,c=l.keys();let d=_.resolve();return c.forEach(h=>{d=d.next(()=>u.getEntry(o,h)).next(m=>{const w=f.docVersions.get(h);V(w!==null),m.version.compareTo(w)<0&&(l.applyToRemoteDocument(m,f),m.isValidDocument()&&(m.setReadTime(f.commitVersion),u.addEntry(m)))})}),d.next(()=>s.mutationQueue.removeMutationBatch(o,l))}(n,r,e,a).next(()=>a.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(s){let o=Z();for(let f=0;f<s.mutationResults.length;++f)s.mutationResults[f].transformResults.length>0&&(o=o.add(s.batch.mutations[f].key));return o}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function O_(t){const e=O(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function qL(t,e){const n=O(t),r=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const o=[];e.targetChanges.forEach((l,c)=>{const d=i.get(c);if(!d)return;o.push(n.Cs.removeMatchingKeys(a,l.removedDocuments,c).next(()=>n.Cs.addMatchingKeys(a,l.addedDocuments,c)));let h=d.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.has(c)?h=h.withResumeToken(Ye.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):l.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(l.resumeToken,r)),i=i.insert(c,h),function(m,w,E){return m.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,h,l)&&o.push(n.Cs.updateTargetData(a,h))});let f=Wt(),u=Z();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(a,l))}),o.push($_(a,s,e.documentUpdates).next(l=>{f=l.Wi,u=l.zi})),!r.isEqual(z.min())){const l=n.Cs.getLastRemoteSnapshotVersion(a).next(c=>n.Cs.setTargetsMetadata(a,a.currentSequenceNumber,r));o.push(l)}return _.waitFor(o).next(()=>s.apply(a)).next(()=>n.localDocuments.getLocalViewOfDocuments(a,f,u)).next(()=>f)}).then(a=>(n.qi=i,a))}function $_(t,e,n){let r=Z(),i=Z();return n.forEach(a=>r=r.add(a)),e.getEntries(t,r).next(a=>{let s=Wt();return n.forEach((o,f)=>{const u=a.get(o);f.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(o)),f.isNoDocument()&&f.version.isEqual(z.min())?(e.removeEntry(o,f.readTime),s=s.insert(o,f)):!u.isValidDocument()||f.version.compareTo(u.version)>0||f.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(f),s=s.insert(o,f)):A("LocalStore","Ignoring outdated watch update for ",o,". Current version:",u.version," Watch version:",f.version)}),{Wi:s,zi:i}})}function HL(t,e){const n=O(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function to(t,e){const n=O(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(a=>a?(i=a,_.resolve(i)):n.Cs.allocateTargetId(r).next(s=>(i=new mi(e,s,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(e,r.targetId)),r})}async function no(t,e,n){const r=O(t),i=r.qi.get(e),a=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",a,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!$i(s))throw s;A("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.qi=r.qi.remove(e),r.Ui.delete(i.target)}function Sd(t,e,n){const r=O(t);let i=z.min(),a=Z();return r.persistence.runTransaction("Execute query","readonly",s=>function(o,f,u){const l=O(o),c=l.Ui.get(u);return c!==void 0?_.resolve(l.qi.get(c)):l.Cs.getTargetData(f,u)}(r,s,Xt(e)).next(o=>{if(o)return i=o.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(s,o.targetId).next(f=>{a=f})}).next(()=>r.Li.getDocumentsMatchingQuery(s,e,n?i:z.min(),n?a:Z())).next(o=>(U_(r,BE(e),o),{documents:o,Hi:a})))}function F_(t,e){const n=O(t),r=O(n.Cs),i=n.qi.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",a=>r.ne(a,e).next(s=>s?s.target:null))}function j_(t,e){const n=O(t),r=n.Ki.get(e)||z.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Gi.getAllFromCollectionGroup(i,e,SE(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(U_(n,e,i),i))}function U_(t,e,n){let r=t.Ki.get(e)||z.min();n.forEach((i,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)}),t.Ki.set(e,r)}async function WL(t,e,n,r){const i=O(t);let a=Z(),s=Wt();for(const u of n){const l=e.Ji(u.metadata.name);u.document&&(a=a.add(l));const c=e.Yi(u);c.setReadTime(e.Xi(u.metadata.readTime)),s=s.insert(l,c)}const o=i.Gi.newChangeBuffer({trackRemovals:!0}),f=await to(i,function(u){return Xt(_o(se.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>$_(u,o,s).next(l=>(o.apply(u),l)).next(l=>i.Cs.removeMatchingKeysForTargetId(u,f.targetId).next(()=>i.Cs.addMatchingKeys(u,a,f.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.Wi,l.zi)).next(()=>l.Wi)))}async function GL(t,e,n=Z()){const r=await to(t,Xt(E2(e.bundledQuery))),i=O(t);return i.persistence.runTransaction("Save named query","readwrite",a=>{const s=Ve(e.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Ns.saveNamedQuery(a,e);const o=r.withResumeToken(Ye.EMPTY_BYTE_STRING,s);return i.qi=i.qi.insert(o.targetId,o),i.Cs.updateTargetData(a,o).next(()=>i.Cs.removeMatchingKeysForTargetId(a,r.targetId)).next(()=>i.Cs.addMatchingKeys(a,n,r.targetId)).next(()=>i.Ns.saveNamedQuery(a,e))})}function O4(t,e){return`firestore_clients_${t}_${e}`}function $4(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function u0(t,e){return`firestore_targets_${t}_${e}`}class Cd{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Zi(e,n,r){const i=JSON.parse(r);let a,s=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return s&&i.error&&(s=typeof i.error.message=="string"&&typeof i.error.code=="string",s&&(a=new T(i.error.code,i.error.message))),s?new Cd(e,n,i.state,a):(je("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Mf{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Zi(e,n){const r=JSON.parse(n);let i,a=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return a&&r.error&&(a=typeof r.error.message=="string"&&typeof r.error.code=="string",a&&(i=new T(r.error.code,r.error.message))),a?new Mf(e,r.state,i):(je("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Td{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Zi(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,a=L1();for(let s=0;i&&s<r.activeTargetIds.length;++s)i=RE(r.activeTargetIds[s]),a=a.add(r.activeTargetIds[s]);return i?new Td(e,a):(je("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class A2{constructor(e,n){this.clientId=e,this.onlineState=n}static Zi(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new A2(n.clientId,n.onlineState):(je("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Zp{constructor(){this.activeTargetIds=L1()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class l0{constructor(e,n,r,i,a){this.window=e,this.Hs=n,this.persistenceKey=r,this.sr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new Le(J),this.started=!1,this.cr=[];const s=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=a,this.ar=O4(this.persistenceKey,this.sr),this.hr=function(o){return`firestore_sequence_number_${o}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new Zp),this.lr=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.wr=function(o){return`firestore_online_state_${o}`}(this.persistenceKey),this.mr=function(o){return`firestore_bundle_loaded_v2_${o}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const r of e){if(r===this.sr)continue;const i=this.getItem(O4(this.persistenceKey,r));if(i){const a=Td.Zi(r,i);a&&(this.ur=this.ur.insert(a.clientId,a))}}this.gr();const n=this.storage.getItem(this.wr);if(n){const r=this.yr(n);r&&this.pr(r)}for(const r of this.cr)this.rr(r);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let n=!1;return this.ur.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,n,r){this.Tr(e,n,r),this.Er(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(u0(this.persistenceKey,e));if(r){const i=Mf.Zi(e,r);i&&(n=i.state)}}return this.Ar.er(e),this.gr(),n}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(u0(this.persistenceKey,e))}updateQueryState(e,n,r){this.Rr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Er(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return A("SharedClientState","READ",e,n),n}setItem(e,n){A("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){A("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const n=e;if(n.storageArea===this.storage){if(A("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ar)return void je("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.lr.test(n.key)){if(n.newValue==null){const r=this.vr(n.key);return this.Vr(r,null)}{const r=this.Sr(n.key,n.newValue);if(r)return this.Vr(r.clientId,r)}}else if(this.dr.test(n.key)){if(n.newValue!==null){const r=this.Dr(n.key,n.newValue);if(r)return this.Cr(r)}}else if(this._r.test(n.key)){if(n.newValue!==null){const r=this.Nr(n.key,n.newValue);if(r)return this.kr(r)}}else if(n.key===this.wr){if(n.newValue!==null){const r=this.yr(n.newValue);if(r)return this.pr(r)}}else if(n.key===this.hr){const r=function(i){let a=qt.at;if(i!=null)try{const s=JSON.parse(i);V(typeof s=="number"),a=s}catch(s){je("SharedClientState","Failed to read sequence number from WebStorage",s)}return a}(n.newValue);r!==qt.at&&this.sequenceNumberHandler(r)}else if(n.key===this.mr){const r=this.Or(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Mr(i)))}}}else this.cr.push(n)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,n,r){const i=new Cd(this.currentUser,e,n,r),a=$4(this.persistenceKey,this.currentUser,e);this.setItem(a,i.tr())}Er(e){const n=$4(this.persistenceKey,this.currentUser,e);this.removeItem(n)}br(e){const n={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(n))}Rr(e,n,r){const i=u0(this.persistenceKey,e),a=new Mf(e,n,r);this.setItem(i,a.tr())}Pr(e){const n=JSON.stringify(Array.from(e));this.setItem(this.mr,n)}vr(e){const n=this.lr.exec(e);return n?n[1]:null}Sr(e,n){const r=this.vr(e);return Td.Zi(r,n)}Dr(e,n){const r=this.dr.exec(e),i=Number(r[1]),a=r[2]!==void 0?r[2]:null;return Cd.Zi(new et(a),i,n)}Nr(e,n){const r=this._r.exec(e),i=Number(r[1]);return Mf.Zi(i,n)}yr(e){return A2.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);A("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,n){const r=n?this.ur.insert(e,n):this.ur.remove(e),i=this.Ir(this.ur),a=this.Ir(r),s=[],o=[];return a.forEach(f=>{i.has(f)||s.push(f)}),i.forEach(f=>{a.has(f)||o.push(f)}),this.syncEngine.Br(s,o).then(()=>{this.ur=r})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let n=L1();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class V_{constructor(){this.Lr=new Zp,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Zp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class KL{Ur(e){}shutdown(){}}/**
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
 */class F4{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const QL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class YL{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class XL extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,a){const s=this.ho(e,n);A("RestConnection","Sending: ",s,r);const o={};return this.lo(o,i,a),this.fo(e,s,o,r).then(f=>(A("RestConnection","Received: ",f),f),f=>{throw Ks("RestConnection",`${e} failed with error: `,f,"url: ",s,"request:",r),f})}_o(e,n,r,i,a,s){return this.ao(e,n,r,i,a)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Eo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,a)=>e[a]=i),r&&r.headers.forEach((i,a)=>e[a]=i)}ho(e,n){const r=QL[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((a,s)=>{const o=new YP;o.setWithCredentials(!0),o.listenOnce(GP.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case s0.NO_ERROR:const u=o.getResponseJson();A("Connection","XHR received:",JSON.stringify(u)),a(u);break;case s0.TIMEOUT:A("Connection",'RPC "'+e+'" timed out'),s(new T(I.DEADLINE_EXCEEDED,"Request time out"));break;case s0.HTTP_ERROR:const l=o.getStatus();if(A("Connection",'RPC "'+e+'" failed with status:',l,"response text:",o.getResponseText()),l>0){let c=o.getResponseJson();Array.isArray(c)&&(c=c[0]);const d=c==null?void 0:c.error;if(d&&d.status&&d.message){const h=function(m){const w=m.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(w)>=0?w:I.UNKNOWN}(d.status);s(new T(h,d.message))}else s(new T(I.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new T(I.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{A("Connection",'RPC "'+e+'" completed.')}});const f=JSON.stringify(i);o.send(n,"POST",f,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=HP(),s=WP(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new QP({})),this.lo(o.initMessageHeaders,n,r),o.encodeInitMessageHeaders=!0;const f=i.join("");A("Connection","Creating WebChannel: "+f,o);const u=a.createWebChannel(f,o);let l=!1,c=!1;const d=new YL({Hr:m=>{c?A("Connection","Not sending because WebChannel is closed:",m):(l||(A("Connection","Opening WebChannel transport."),u.open(),l=!0),A("Connection","WebChannel sending:",m),u.send(m))},Jr:()=>u.close()}),h=(m,w,E)=>{m.listen(w,g=>{try{E(g)}catch(p){setTimeout(()=>{throw p},0)}})};return h(u,Gl.EventType.OPEN,()=>{c||A("Connection","WebChannel transport opened.")}),h(u,Gl.EventType.CLOSE,()=>{c||(c=!0,A("Connection","WebChannel transport closed"),d.io())}),h(u,Gl.EventType.ERROR,m=>{c||(c=!0,Ks("Connection","WebChannel transport errored:",m),d.io(new T(I.UNAVAILABLE,"The operation could not be completed")))}),h(u,Gl.EventType.MESSAGE,m=>{var w;if(!c){const E=m.data[0];V(!!E);const g=E,p=g.error||((w=g[0])===null||w===void 0?void 0:w.error);if(p){A("Connection","WebChannel received error:",p);const v=p.status;let b=function(C){const x=Be[C];if(x!==void 0)return t_(x)}(v),S=p.message;b===void 0&&(b=I.INTERNAL,S="Unknown error status: "+v+" with message "+p.message),c=!0,d.io(new T(b,S)),u.close()}else A("Connection","WebChannel received:",E),d.ro(E)}}),h(s,KP.STAT_EVENT,m=>{m.stat===Ky.PROXY?A("Connection","Detected buffering proxy"):m.stat===Ky.NOPROXY&&A("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
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
 */function z_(){return typeof window<"u"?window:null}function _c(){return typeof document<"u"?document:null}/**
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
 */function cl(t){return new zM(t,!0)}class R2{constructor(e,n,r=1e3,i=1.5,a=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=a,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&A("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class B_{constructor(e,n,r,i,a,s,o,f){this.Hs=e,this.vo=r,this.Vo=i,this.connection=a,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=f,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new R2(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(je(n.toString()),je("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new T(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return A("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(A("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class JL extends B_{constructor(e,n,r,i,a,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.yt=a}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=HM(this.yt,e),r=function(i){if(!("targetChange"in i))return z.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?Ve(a.readTime):z.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Cu(this.yt),n.addTarget=function(i,a){let s;const o=a.target;return s=wd(o)?{documents:d_(i,o)}:{query:h_(i,o)},s.targetId=a.targetId,a.resumeToken.approximateByteSize()>0?s.resumeToken=o_(i,a.resumeToken):a.snapshotVersion.compareTo(z.min())>0&&(s.readTime=eo(i,a.snapshotVersion.toTimestamp())),s}(this.yt,e);const r=GM(this.yt,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Cu(this.yt),n.removeTarget=e,this.Bo(n)}}class ZL extends B_{constructor(e,n,r,i,a,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.yt=a,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(V(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=WM(e.writeResults,e.commitTime),r=Ve(e.commitTime);return this.listener.Zo(r,n)}return V(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Cu(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Tu(this.yt,r))};this.Bo(n)}}/**
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
 */class eO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=i,this.nu=!1}su(){if(this.nu)throw new T(I.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.ao(e,n,r,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new T(I.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,s])=>this.connection._o(e,n,r,a,s,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new T(I.UNKNOWN,a.toString())})}terminate(){this.nu=!0}}class tO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(je(n),this.ou=!1):A("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class nO{constructor(e,n,r,i,a){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=a,this.mu.Ur(s=>{r.enqueueAndForget(async()=>{ji(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(o){const f=O(o);f._u.add(4),await Co(f),f.gu.set("Unknown"),f._u.delete(4),await dl(f)}(this))})}),this.gu=new tO(r,i)}}async function dl(t){if(ji(t))for(const e of t.wu)await e(!0)}async function Co(t){for(const e of t.wu)await e(!1)}function j1(t,e){const n=O(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),P2(n)?D2(n):xo(n).ko()&&N2(n,e))}function xu(t,e){const n=O(t),r=xo(n);n.du.delete(e),r.ko()&&q_(n,e),n.du.size===0&&(r.ko()?r.Fo():ji(n)&&n.gu.set("Unknown"))}function N2(t,e){t.yu.Ot(e.targetId),xo(t).zo(e)}function q_(t,e){t.yu.Ot(e),xo(t).Ho(e)}function D2(t){t.yu=new FM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),xo(t).start(),t.gu.uu()}function P2(t){return ji(t)&&!xo(t).No()&&t.du.size>0}function ji(t){return O(t)._u.size===0}function H_(t){t.yu=void 0}async function rO(t){t.du.forEach((e,n)=>{N2(t,e)})}async function iO(t,e){H_(t),P2(t)?(t.gu.hu(e),D2(t)):t.gu.set("Unknown")}async function aO(t,e,n){if(t.gu.set("Online"),e instanceof s_&&e.state===2&&e.cause)try{await async function(r,i){const a=i.cause;for(const s of i.targetIds)r.du.has(s)&&(await r.remoteSyncer.rejectListen(s,a),r.du.delete(s),r.yu.removeTarget(s))}(t,e)}catch(r){A("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xd(t,r)}else if(e instanceof kc?t.yu.Kt(e):e instanceof a_?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(z.min()))try{const r=await O_(t.localStore);n.compareTo(r)>=0&&await function(i,a){const s=i.yu.Zt(a);return s.targetChanges.forEach((o,f)=>{if(o.resumeToken.approximateByteSize()>0){const u=i.du.get(f);u&&i.du.set(f,u.withResumeToken(o.resumeToken,a))}}),s.targetMismatches.forEach(o=>{const f=i.du.get(o);if(!f)return;i.du.set(o,f.withResumeToken(Ye.EMPTY_BYTE_STRING,f.snapshotVersion)),q_(i,o);const u=new mi(f.target,o,1,f.sequenceNumber);N2(i,u)}),i.remoteSyncer.applyRemoteEvent(s)}(t,n)}catch(r){A("RemoteStore","Failed to raise snapshot:",r),await xd(t,r)}}async function xd(t,e,n){if(!$i(e))throw e;t._u.add(1),await Co(t),t.gu.set("Offline"),n||(n=()=>O_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{A("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await dl(t)})}function W_(t,e){return e().catch(n=>xd(t,n,e))}async function To(t){const e=O(t),n=Ci(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;sO(e);)try{const i=await HL(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,oO(e,i)}catch(i){await xd(e,i)}G_(e)&&K_(e)}function sO(t){return ji(t)&&t.fu.length<10}function oO(t,e){t.fu.push(e);const n=Ci(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function G_(t){return ji(t)&&!Ci(t).No()&&t.fu.length>0}function K_(t){Ci(t).start()}async function fO(t){Ci(t).eu()}async function uO(t){const e=Ci(t);for(const n of t.fu)e.Xo(n.mutations)}async function lO(t,e,n){const r=t.fu.shift(),i=b2.from(r,e,n);await W_(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await To(t)}async function cO(t,e){e&&Ci(t).Yo&&await async function(n,r){if(i=r.code,e_(i)&&i!==I.ABORTED){const a=n.fu.shift();Ci(n).Mo(),await W_(n,()=>n.remoteSyncer.rejectFailedWrite(a.batchId,r)),await To(n)}var i}(t,e),G_(t)&&K_(t)}async function j4(t,e){const n=O(t);n.asyncQueue.verifyOperationInProgress(),A("RemoteStore","RemoteStore received new credentials");const r=ji(n);n._u.add(3),await Co(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await dl(n)}async function em(t,e){const n=O(t);e?(n._u.delete(2),await dl(n)):e||(n._u.add(2),await Co(n),n.gu.set("Unknown"))}function xo(t){return t.pu||(t.pu=function(e,n,r){const i=O(e);return i.su(),new JL(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:rO.bind(null,t),Zr:iO.bind(null,t),Wo:aO.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),P2(t)?D2(t):t.gu.set("Unknown")):(await t.pu.stop(),H_(t))})),t.pu}function Ci(t){return t.Iu||(t.Iu=function(e,n,r){const i=O(e);return i.su(),new ZL(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:fO.bind(null,t),Zr:cO.bind(null,t),tu:uO.bind(null,t),Zo:lO.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await To(t)):(await t.Iu.stop(),t.fu.length>0&&(A("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class M2{constructor(e,n,r,i,a){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=a,this.deferred=new nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}static createAndSchedule(e,n,r,i,a){const s=Date.now()+r,o=new M2(e,n,s,i,a);return o.start(r),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ao(t,e){if(je("AsyncQueue",`${e}: ${t}`),$i(t))return new T(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ls{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=lf(),this.sortedSet=new Le(this.comparator)}static emptySet(e){return new Ls(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ls;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class U4{constructor(){this.Tu=new Le(L.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):$():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ro{constructor(e,n,r,i,a,s,o,f,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=a,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=f,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,a){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new ro(e,n,Ls.emptySet(n),s,r,i,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class dO{constructor(){this.Au=void 0,this.listeners=[]}}class hO{constructor(){this.queries=new Fi(e=>zE(e),sl),this.onlineState="Unknown",this.Ru=new Set}}async function L2(t,e){const n=O(t),r=e.query;let i=!1,a=n.queries.get(r);if(a||(i=!0,a=new dO),i)try{a.Au=await n.onListen(r)}catch(s){const o=Ao(s,`Initialization of query '${Wp(e.query)}' failed`);return void e.onError(o)}n.queries.set(r,a),a.listeners.push(e),e.bu(n.onlineState),a.Au&&e.Pu(a.Au)&&$2(n)}async function O2(t,e){const n=O(t),r=e.query;let i=!1;const a=n.queries.get(r);if(a){const s=a.listeners.indexOf(e);s>=0&&(a.listeners.splice(s,1),i=a.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function pO(t,e){const n=O(t);let r=!1;for(const i of e){const a=i.query,s=n.queries.get(a);if(s){for(const o of s.listeners)o.Pu(i)&&(r=!0);s.Au=i}}r&&$2(n)}function mO(t,e,n){const r=O(t),i=r.queries.get(e);if(i)for(const a of i.listeners)a.onError(n);r.queries.delete(e)}function $2(t){t.Ru.forEach(e=>{e.next()})}class F2{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ro(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=ro.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class gO{constructor(e,n){this.ku=e,this.byteLength=n}Ou(){return"metadata"in this.ku}}/**
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
 */class V4{constructor(e){this.yt=e}Ji(e){return ur(this.yt,e)}Yi(e){return e.metadata.exists?c_(this.yt,e.document,!1):ye.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return Ve(e)}}class vO{constructor(e,n,r){this.Mu=e,this.localStore=n,this.yt=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Q_(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++n;const r=se.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}$u(e){const n=new Map,r=new V4(this.yt);for(const i of e)if(i.metadata.queries){const a=r.Ji(i.metadata.name);for(const s of i.metadata.queries){const o=(n.get(s)||Z()).add(a);n.set(s,o)}}return n}async complete(){const e=await WL(this.localStore,new V4(this.yt),this.documents,this.Mu.id),n=this.$u(this.documents);for(const r of this.queries)await GL(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function Q_(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class Y_{constructor(e){this.key=e}}class X_{constructor(e){this.key=e}}class J_{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Z(),this.mutatedKeys=Z(),this.Gu=qE(e),this.Qu=new Ls(this.Gu)}get ju(){return this.qu}Wu(e,n){const r=n?n.zu:new U4,i=n?n.Qu:this.Qu;let a=n?n.mutatedKeys:this.mutatedKeys,s=i,o=!1;const f=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,c)=>{const d=i.get(l),h=ol(this.query,c)?c:null,m=!!d&&this.mutatedKeys.has(d.key),w=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let E=!1;d&&h?d.data.isEqual(h.data)?m!==w&&(r.track({type:3,doc:h}),E=!0):this.Hu(d,h)||(r.track({type:2,doc:h}),E=!0,(f&&this.Gu(h,f)>0||u&&this.Gu(h,u)<0)&&(o=!0)):!d&&h?(r.track({type:0,doc:h}),E=!0):d&&!h&&(r.track({type:1,doc:d}),E=!0,(f||u)&&(o=!0)),E&&(h?(s=s.add(h),a=w?a.add(l):a.delete(l)):(s=s.delete(l),a=a.delete(l)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const l=this.query.limitType==="F"?s.last():s.first();s=s.delete(l.key),a=a.delete(l.key),r.track({type:1,doc:l})}return{Qu:s,zu:r,$i:o,mutatedKeys:a}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const a=e.zu.Eu();a.sort((u,l)=>function(c,d){const h=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return h(c)-h(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(r);const s=n?this.Yu():[],o=this.Ku.size===0&&this.current?1:0,f=o!==this.Uu;return this.Uu=o,a.length!==0||f?{snapshot:new ro(this.query,e.Qu,i,a,e.mutatedKeys,o===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new U4,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Z(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new X_(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new Y_(r))}),n}tc(e){this.qu=e.Hi,this.Ku=Z();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return ro.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class yO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class wO{constructor(e){this.key=e,this.nc=!1}}class bO{constructor(e,n,r,i,a,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=a,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new Fi(o=>zE(o),sl),this.rc=new Map,this.oc=new Set,this.uc=new Le(L.comparator),this.cc=new Map,this.ac=new S2,this.hc={},this.lc=new Map,this.fc=La.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function kO(t,e){const n=B2(t);let r,i;const a=n.ic.get(e);if(a)r=a.targetId,n.sharedClientState.addLocalQueryTarget(r),i=a.view.ec();else{const s=await to(n.localStore,Xt(e));n.isPrimaryClient&&j1(n.remoteStore,s);const o=n.sharedClientState.addLocalQueryTarget(s.targetId);r=s.targetId,i=await j2(n,e,r,o==="current",s.resumeToken)}return i}async function j2(t,e,n,r,i){t._c=(c,d,h)=>async function(m,w,E,g){let p=w.view.Wu(E);p.$i&&(p=await Sd(m.localStore,w.query,!1).then(({documents:S})=>w.view.Wu(S,p)));const v=g&&g.targetChanges.get(w.targetId),b=w.view.applyChanges(p,m.isPrimaryClient,v);return tm(m,w.targetId,b.Xu),b.snapshot}(t,c,d,h);const a=await Sd(t.localStore,e,!0),s=new J_(e,a.Hi),o=s.Wu(a.documents),f=ll.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=s.applyChanges(o,t.isPrimaryClient,f);tm(t,n,u.Xu);const l=new yO(e,n,s);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function EO(t,e){const n=O(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(a=>!sl(a,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await no(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),xu(n.remoteStore,r.targetId),io(n,r.targetId)}).catch(Oi)):(io(n,r.targetId),await no(n.localStore,r.targetId,!0))}async function _O(t,e,n){const r=q2(t);try{const i=await function(a,s){const o=O(a),f=Se.now(),u=s.reduce((d,h)=>d.add(h.key),Z());let l,c;return o.persistence.runTransaction("Locally write mutations","readwrite",d=>{let h=Wt(),m=Z();return o.Gi.getEntries(d,u).next(w=>{h=w,h.forEach((E,g)=>{g.isValidDocument()||(m=m.add(E))})}).next(()=>o.localDocuments.getOverlayedDocuments(d,h)).next(w=>{l=w;const E=[];for(const g of s){const p=DM(g,l.get(g.key).overlayedDocument);p!=null&&E.push(new jr(g.key,p,UE(p.value.mapValue),Ie.exists(!0)))}return o.mutationQueue.addMutationBatch(d,f,E,s)}).next(w=>{c=w;const E=w.applyToLocalDocumentSet(l,m);return o.documentOverlayCache.saveOverlays(d,w.batchId,E)})}).then(()=>({batchId:c.batchId,changes:r_(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,s,o){let f=a.hc[a.currentUser.toKey()];f||(f=new Le(J)),f=f.insert(s,o),a.hc[a.currentUser.toKey()]=f}(r,i.batchId,n),await Ur(r,i.changes),await To(r.remoteStore)}catch(i){const a=Ao(i,"Failed to persist write");n.reject(a)}}async function Z_(t,e){const n=O(t);try{const r=await qL(n.localStore,e);e.targetChanges.forEach((i,a)=>{const s=n.cc.get(a);s&&(V(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.nc=!0:i.modifiedDocuments.size>0?V(s.nc):i.removedDocuments.size>0&&(V(s.nc),s.nc=!1))}),await Ur(n,r,e)}catch(r){await Oi(r)}}function z4(t,e,n){const r=O(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((a,s)=>{const o=s.view.bu(e);o.snapshot&&i.push(o.snapshot)}),function(a,s){const o=O(a);o.onlineState=s;let f=!1;o.queries.forEach((u,l)=>{for(const c of l.listeners)c.bu(s)&&(f=!0)}),f&&$2(o)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function IO(t,e,n){const r=O(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),a=i&&i.key;if(a){let s=new Le(L.comparator);s=s.insert(a,ye.newNoDocument(a,z.min()));const o=Z().add(a),f=new ul(z.min(),new Map,new pe(J),s,o);await Z_(r,f),r.uc=r.uc.remove(a),r.cc.delete(e),z2(r)}else await no(r.localStore,e,!1).then(()=>io(r,e,n)).catch(Oi)}async function SO(t,e){const n=O(t),r=e.batch.batchId;try{const i=await BL(n.localStore,e);V2(n,r,null),U2(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ur(n,i)}catch(i){await Oi(i)}}async function CO(t,e,n){const r=O(t);try{const i=await function(a,s){const o=O(a);return o.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let u;return o.mutationQueue.lookupMutationBatch(f,s).next(l=>(V(l!==null),u=l.keys(),o.mutationQueue.removeMutationBatch(f,l))).next(()=>o.mutationQueue.performConsistencyCheck(f)).next(()=>o.documentOverlayCache.removeOverlaysForBatchId(f,u,s)).next(()=>o.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,u)).next(()=>o.localDocuments.getDocuments(f,u))})}(r.localStore,e);V2(r,e,n),U2(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ur(r,i)}catch(i){await Oi(i)}}async function TO(t,e){const n=O(t);ji(n.remoteStore)||A("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(a){const s=O(a);return s.persistence.runTransaction("Get highest unacknowledged batch id","readonly",o=>s.mutationQueue.getHighestUnacknowledgedBatchId(o))}(n.localStore);if(r===-1)return void e.resolve();const i=n.lc.get(r)||[];i.push(e),n.lc.set(r,i)}catch(r){const i=Ao(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function U2(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function V2(t,e,n){const r=O(t);let i=r.hc[r.currentUser.toKey()];if(i){const a=i.get(e);a&&(n?a.reject(n):a.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function io(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||eI(t,r)})}function eI(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(xu(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),z2(t))}function tm(t,e,n){for(const r of n)r instanceof Y_?(t.ac.addReference(r.key,e),xO(t,r)):r instanceof X_?(A("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||eI(t,r.key)):$()}function xO(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(A("SyncEngine","New document in limbo: "+n),t.oc.add(r),z2(t))}function z2(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new L(se.fromString(e)),r=t.fc.next();t.cc.set(r,new wO(n)),t.uc=t.uc.insert(n,r),j1(t.remoteStore,new mi(Xt(_o(n.path)),r,2,qt.at))}}async function Ur(t,e,n){const r=O(t),i=[],a=[],s=[];r.ic.isEmpty()||(r.ic.forEach((o,f)=>{s.push(r._c(f,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(f.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=x2.Ci(f.targetId,u);a.push(l)}}))}),await Promise.all(s),r.sc.Wo(i),await async function(o,f){const u=O(o);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>_.forEach(f,c=>_.forEach(c.Si,d=>u.persistence.referenceDelegate.addReference(l,c.targetId,d)).next(()=>_.forEach(c.Di,d=>u.persistence.referenceDelegate.removeReference(l,c.targetId,d)))))}catch(l){if(!$i(l))throw l;A("LocalStore","Failed to update sequence numbers: "+l)}for(const l of f){const c=l.targetId;if(!l.fromCache){const d=u.qi.get(c),h=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(h);u.qi=u.qi.insert(c,m)}}}(r.localStore,a))}async function AO(t,e){const n=O(t);if(!n.currentUser.isEqual(e)){A("SyncEngine","User change. New user:",e.toKey());const r=await L_(n.localStore,e);n.currentUser=e,function(i,a){i.lc.forEach(s=>{s.forEach(o=>{o.reject(new T(I.CANCELLED,a))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ur(n,r.ji)}}function RO(t,e){const n=O(t),r=n.cc.get(e);if(r&&r.nc)return Z().add(r.key);{let i=Z();const a=n.rc.get(e);if(!a)return i;for(const s of a){const o=n.ic.get(s);i=i.unionWith(o.view.ju)}return i}}async function NO(t,e){const n=O(t),r=await Sd(n.localStore,e.query,!0),i=e.view.tc(r);return n.isPrimaryClient&&tm(n,e.targetId,i.Xu),i}async function DO(t,e){const n=O(t);return j_(n.localStore,e).then(r=>Ur(n,r))}async function PO(t,e,n,r){const i=O(t),a=await function(s,o){const f=O(s),u=O(f.mutationQueue);return f.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.Tn(l,o).next(c=>c?f.localDocuments.getDocuments(l,c):_.resolve(null)))}(i.localStore,e);a!==null?(n==="pending"?await To(i.remoteStore):n==="acknowledged"||n==="rejected"?(V2(i,e,r||null),U2(i,e),function(s,o){O(O(s).mutationQueue).An(o)}(i.localStore,e)):$(),await Ur(i,a)):A("SyncEngine","Cannot apply mutation batch with id: "+e)}async function MO(t,e){const n=O(t);if(B2(n),q2(n),e===!0&&n.dc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await B4(n,r.toArray());n.dc=!0,await em(n.remoteStore,!0);for(const a of i)j1(n.remoteStore,a)}else if(e===!1&&n.dc!==!1){const r=[];let i=Promise.resolve();n.rc.forEach((a,s)=>{n.sharedClientState.isLocalQueryTarget(s)?r.push(s):i=i.then(()=>(io(n,s),no(n.localStore,s,!0))),xu(n.remoteStore,s)}),await i,await B4(n,r),function(a){const s=O(a);s.cc.forEach((o,f)=>{xu(s.remoteStore,f)}),s.ac.fs(),s.cc=new Map,s.uc=new Le(L.comparator)}(n),n.dc=!1,await em(n.remoteStore,!1)}}async function B4(t,e,n){const r=O(t),i=[],a=[];for(const s of e){let o;const f=r.rc.get(s);if(f&&f.length!==0){o=await to(r.localStore,Xt(f[0]));for(const u of f){const l=r.ic.get(u),c=await NO(r,l);c.snapshot&&a.push(c.snapshot)}}else{const u=await F_(r.localStore,s);o=await to(r.localStore,u),await j2(r,tI(u),s,!1,o.resumeToken)}i.push(o)}return r.sc.Wo(a),i}function tI(t){return VE(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function LO(t){const e=O(t);return O(O(e.localStore).persistence).vi()}async function OO(t,e,n,r){const i=O(t);if(i.dc)return void A("SyncEngine","Ignoring unexpected query state notification.");const a=i.rc.get(e);if(a&&a.length>0)switch(n){case"current":case"not-current":{const s=await j_(i.localStore,BE(a[0])),o=ul.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Ye.EMPTY_BYTE_STRING);await Ur(i,s,o);break}case"rejected":await no(i.localStore,e,!0),io(i,e,r);break;default:$()}}async function $O(t,e,n){const r=B2(t);if(r.dc){for(const i of e){if(r.rc.has(i)){A("SyncEngine","Adding an already active target "+i);continue}const a=await F_(r.localStore,i),s=await to(r.localStore,a);await j2(r,tI(a),s.targetId,!1,s.resumeToken),j1(r.remoteStore,s)}for(const i of n)r.rc.has(i)&&await no(r.localStore,i,!1).then(()=>{xu(r.remoteStore,i),io(r,i)}).catch(Oi)}}function B2(t){const e=O(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Z_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=RO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IO.bind(null,e),e.sc.Wo=pO.bind(null,e.eventManager),e.sc.wc=mO.bind(null,e.eventManager),e}function q2(t){const e=O(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=SO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CO.bind(null,e),e}function FO(t,e,n){const r=O(t);(async function(i,a,s){try{const o=await a.getMetadata();if(await function(c,d){const h=O(c),m=Ve(d.createTime);return h.persistence.runTransaction("hasNewerBundle","readonly",w=>h.Ns.getBundleMetadata(w,d.id)).then(w=>!!w&&w.createTime.compareTo(m)>=0)}(i.localStore,o))return await a.close(),s._completeWith(function(c){return{taskState:"Success",documentsLoaded:c.totalDocuments,bytesLoaded:c.totalBytes,totalDocuments:c.totalDocuments,totalBytes:c.totalBytes}}(o)),Promise.resolve(new Set);s._updateProgress(Q_(o));const f=new vO(o,i.localStore,a.yt);let u=await a.mc();for(;u;){const c=await f.Fu(u);c&&s._updateProgress(c),u=await a.mc()}const l=await f.complete();return await Ur(i,l.Lu,void 0),await function(c,d){const h=O(c);return h.persistence.runTransaction("Save bundle","readwrite",m=>h.Ns.saveBundleMetadata(m,d))}(i.localStore,o),s._completeWith(l.progress),Promise.resolve(l.Bu)}catch(o){return Ks("SyncEngine",`Loading bundle failed with ${o}`),s._failWith(o),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class nI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=cl(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return M_(this.persistence,new P_,e.initialUser,this.yt)}yc(e){return new D_(F1.Bs,this.yt)}gc(e){return new V_}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class rI extends nI{constructor(e,n,r){super(),this.Ac=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await q2(this.Ac.syncEngine),await To(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return M_(this.persistence,new P_,e.initialUser,this.yt)}Tc(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new xL(r,e.asyncQueue,n)}Ec(e,n){const r=new dM(n,this.persistence);return new cM(e.asyncQueue,r)}yc(e){const n=T2(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?jt.withCacheSize(this.cacheSizeBytes):jt.DEFAULT;return new C2(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,z_(),_c(),this.yt,this.sharedClientState,!!this.forceOwnership)}gc(e){return new V_}}class jO extends rI{constructor(e,n){super(e,n,!1),this.Ac=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ac.syncEngine;this.sharedClientState instanceof l0&&(this.sharedClientState.syncEngine={Fr:PO.bind(null,n),$r:OO.bind(null,n),Br:$O.bind(null,n),vi:LO.bind(null,n),Mr:DO.bind(null,n)},await this.sharedClientState.start()),await this.persistence.li(async r=>{await MO(this.Ac.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}gc(e){const n=z_();if(!l0.C(n))throw new T(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=T2(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new l0(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class H2{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>z4(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=AO.bind(null,this.syncEngine),await em(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new hO}createDatastore(e){const n=cl(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new XL(i));var i;return function(a,s,o,f){return new eO(a,s,o,f)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,a=o=>z4(this.syncEngine,o,0),s=F4.C()?new F4:new KL,new nO(n,r,i,a,s);var n,r,i,a,s}createSyncEngine(e,n){return function(r,i,a,s,o,f,u){const l=new bO(r,i,a,s,o,f);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=O(e);A("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Co(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function W2(t,e,n){if(!n)throw new T(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function iI(t,e,n,r){if(e===!0&&r===!0)throw new T(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function q4(t){if(!L.isDocumentKey(t))throw new T(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function H4(t){if(L.isDocumentKey(t))throw new T(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function U1(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function ue(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=U1(t);throw new T(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function aI(t,e){if(e<=0)throw new T(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */const W4=new Map;class G4{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new T(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new T(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,iI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class hl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new G4({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new T(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new G4(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ZP;switch(n.type){case"gapi":const r=n.client;return new rM(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new T(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=W4.get(e);n&&(A("ComponentProvider","Removing Datastore"),W4.delete(e),n.terminate())}(this),Promise.resolve()}}function UO(t,e,n,r={}){var i;const a=(t=ue(t,hl))._getSettings();if(a.host!=="firestore.googleapis.com"&&a.host!==e&&Ks("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},a),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let s,o;if(typeof r.mockUserToken=="string")s=r.mockUserToken,o=et.MOCK_USER;else{s=xT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new T(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");o=new et(f)}t._authCredentials=new eM(new kE(s,o))}}/**
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
 */class be{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new be(this.firestore,e,this._key)}}class gt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new gt(this.firestore,e,this._query)}}class lr extends gt{constructor(e,n,r){super(e,n,_o(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new L(e))}withConverter(e){return new lr(this.firestore,e,this._path)}}function sI(t,e,...n){if(t=W(t),W2("collection","path",e),t instanceof hl){const r=se.fromString(e,...n);return H4(r),new lr(t,null,r)}{if(!(t instanceof be||t instanceof lr))throw new T(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return H4(r),new lr(t.firestore,null,r)}}function VO(t,e){if(t=ue(t,hl),W2("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new T(I.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new gt(t,null,function(n){return new Fr(se.emptyPath(),n)}(e))}function Ad(t,e,...n){if(t=W(t),arguments.length===1&&(e=EE.R()),W2("doc","path",e),t instanceof hl){const r=se.fromString(e,...n);return q4(r),new be(t,null,new L(r))}{if(!(t instanceof be||t instanceof lr))throw new T(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return q4(r),new be(t.firestore,t instanceof lr?t.converter:null,new L(r))}}function oI(t,e){return t=W(t),e=W(e),(t instanceof be||t instanceof lr)&&(e instanceof be||e instanceof lr)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function fI(t,e){return t=W(t),e=W(e),t instanceof gt&&e instanceof gt&&t.firestore===e.firestore&&sl(t._query,e._query)&&t.converter===e.converter}/**
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
 */function K4(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
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
 */class V1{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):je("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class zO{constructor(e,n){this.Pc=e,this.yt=n,this.metadata=new nt,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(r=>{r&&r.Ou()?this.metadata.resolve(r.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ku)}`))},r=>this.metadata.reject(r))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(e===null)return null;const n=this.vc.decode(e),r=Number(n);isNaN(r)&&this.Dc(`length string (${n}) is not valid number`);const i=await this.Cc(r);return new gO(JSON.parse(i),e.length+r)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(this.buffer.length===0)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const n=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class BO{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const a=O(r),s=Cu(a.yt)+"/documents",o={documents:i.map(c=>Su(a.yt,c))},f=await a._o("BatchGetDocuments",s,o,i.length),u=new Map;f.forEach(c=>{const d=qM(a.yt,c);u.set(d.key.toString(),d)});const l=[];return i.forEach(c=>{const d=u.get(c.toString());V(!!d),l.push(d)}),l}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new So(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=L.fromPath(r);this.mutations.push(new v2(i,this.precondition(i)))}),await async function(n,r){const i=O(n),a=Cu(i.yt)+"/documents",s={writes:r.map(o=>Tu(i.yt,o))};await i.ao("Commit",a,s)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw $();n=z.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new T(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(z.min())?Ie.exists(!1):Ie.updateTime(n):Ie.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(z.min()))throw new T(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ie.updateTime(n)}return Ie.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class qO{constructor(e,n,r,i,a){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=a,this.kc=r.maxAttempts,this.xo=new R2(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const e=new BO(this.datastore),n=this.Mc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Fc(i)}))}).catch(r=>{this.Fc(r)})})}Mc(e){try{const n=this.updateFunction(e);return!il(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!e_(n)}return!1}}/**
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
 */class HO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=EE.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async a=>{A("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(A("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ao(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uI(t,e){t.asyncQueue.verifyOperationInProgress(),A("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await L_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function lI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await G2(t);A("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>j4(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,a)=>j4(e.remoteStore,a)),t.onlineComponents=e}async function G2(t){return t.offlineComponents||(A("FirestoreClient","Using default OfflineComponentProvider"),await uI(t,new nI)),t.offlineComponents}async function z1(t){return t.onlineComponents||(A("FirestoreClient","Using default OnlineComponentProvider"),await lI(t,new H2)),t.onlineComponents}function cI(t){return G2(t).then(e=>e.persistence)}function K2(t){return G2(t).then(e=>e.localStore)}function dI(t){return z1(t).then(e=>e.remoteStore)}function Q2(t){return z1(t).then(e=>e.syncEngine)}function WO(t){return z1(t).then(e=>e.datastore)}async function ao(t){const e=await z1(t),n=e.eventManager;return n.onListen=kO.bind(null,e.syncEngine),n.onUnlisten=EO.bind(null,e.syncEngine),n}function GO(t){return t.asyncQueue.enqueue(async()=>{const e=await cI(t),n=await dI(t);return e.setNetworkEnabled(!0),function(r){const i=O(r);return i._u.delete(0),dl(i)}(n)})}function KO(t){return t.asyncQueue.enqueue(async()=>{const e=await cI(t),n=await dI(t);return e.setNetworkEnabled(!1),async function(r){const i=O(r);i._u.add(0),await Co(i),i.gu.set("Offline")}(n)})}function QO(t,e){const n=new nt;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,a){try{const s=await function(o,f){const u=O(o);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,f))}(r,i);s.isFoundDocument()?a.resolve(s):s.isNoDocument()?a.resolve(null):a.reject(new T(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(s){const o=Ao(s,`Failed to get document '${i} from cache`);a.reject(o)}}(await K2(t),e,n)),n.promise}function hI(t,e,n={}){const r=new nt;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,s,o,f){const u=new V1({next:c=>{a.enqueueAndForget(()=>O2(i,l));const d=c.docs.has(s);!d&&c.fromCache?f.reject(new T(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&c.fromCache&&o&&o.source==="server"?f.reject(new T(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(c)},error:c=>f.reject(c)}),l=new F2(_o(s.path),u,{includeMetadataChanges:!0,Nu:!0});return L2(i,l)}(await ao(t),t.asyncQueue,e,n,r)),r.promise}function YO(t,e){const n=new nt;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,a){try{const s=await Sd(r,i,!0),o=new J_(i,s.Hi),f=o.Wu(s.documents),u=o.applyChanges(f,!1);a.resolve(u.snapshot)}catch(s){const o=Ao(s,`Failed to execute query '${i} against cache`);a.reject(o)}}(await K2(t),e,n)),n.promise}function pI(t,e,n={}){const r=new nt;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,s,o,f){const u=new V1({next:c=>{a.enqueueAndForget(()=>O2(i,l)),c.fromCache&&o.source==="server"?f.reject(new T(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(c)},error:c=>f.reject(c)}),l=new F2(s,u,{includeMetadataChanges:!0,Nu:!0});return L2(i,l)}(await ao(t),t.asyncQueue,e,n,r)),r.promise}function XO(t,e){const n=new V1(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){O(r).Ru.add(i),i.next()}(await ao(t),n)),()=>{n.bc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){O(r).Ru.delete(i)}(await ao(t),n))}}function JO(t,e,n,r){const i=function(a,s){let o;return o=typeof a=="string"?new TextEncoder().encode(a):a,function(f,u){return new zO(f,u)}(function(f,u){if(f instanceof Uint8Array)return K4(f,u);if(f instanceof ArrayBuffer)return K4(new Uint8Array(f),u);if(f instanceof ReadableStream)return f.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(o),s)}(n,cl(e));t.asyncQueue.enqueueAndForget(async()=>{FO(await Q2(t),i,r)})}function ZO(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=O(n);return i.persistence.runTransaction("Get named query","readonly",a=>i.Ns.getNamedQuery(a,r))}(await K2(t),e))}class e${constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new R2(this,"async_queue_retry"),this.Wc=()=>{const n=_c();n&&A("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=_c();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=_c();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new nt;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!$i(e))throw e;A("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(a){let s=a.message||"";return a.stack&&(s=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),s}(r);throw je("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=M2.createAndSchedule(this,e,n,r,a=>this.Yc(a));return this.Uc.push(i),i}zc(){this.Kc&&$()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function nm(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class t${constructor(){this._progressObserver={},this._taskCompletionResolver=new nt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const n$=-1;class Oe extends hl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new e$,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||mI(this),this._firestoreClient.terminate()}}function ot(t){return t._firestoreClient||mI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function mI(t){var e;const n=t._freezeSettings(),r=function(i,a,s,o){return new hM(i,a,s,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,o.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new HO(t._authCredentials,t._appCheckCredentials,t._queue,r)}function r$(t,e){vI(t=ue(t,Oe));const n=ot(t),r=t._freezeSettings(),i=new H2;return gI(n,i,new rI(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function i$(t){vI(t=ue(t,Oe));const e=ot(t),n=t._freezeSettings(),r=new H2;return gI(e,r,new jO(r,n.cacheSizeBytes))}function gI(t,e,n){const r=new nt;return t.asyncQueue.enqueue(async()=>{try{await uI(t,n),await lI(t,e),r.resolve()}catch(i){const a=i;if(!function(s){return s.name==="FirebaseError"?s.code===I.FAILED_PRECONDITION||s.code===I.UNIMPLEMENTED:typeof DOMException<"u"&&s instanceof DOMException?s.code===22||s.code===20||s.code===11:!0}(a))throw a;Ks("Error enabling offline persistence. Falling back to persistence disabled: "+a),r.reject(a)}}).then(()=>r.promise)}function a$(t){if(t._initialized&&!t._terminated)throw new T(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new nt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!$n.C())return Promise.resolve();const r=n+"main";await $n.delete(r)}(T2(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function s$(t){return function(e){const n=new nt;return e.asyncQueue.enqueueAndForget(async()=>TO(await Q2(e),n)),n.promise}(ot(t=ue(t,Oe)))}function o$(t){return GO(ot(t=ue(t,Oe)))}function f$(t){return KO(ot(t=ue(t,Oe)))}function u$(t,e){const n=ot(t=ue(t,Oe)),r=new t$;return JO(n,t._databaseId,e,r),r}function l$(t,e){return ZO(ot(t=ue(t,Oe)),e).then(n=>n?new gt(t,null,n.query):null)}function vI(t){if(t._initialized||t._terminated)throw new T(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class mr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mr(Ye.fromBase64String(e))}catch(n){throw new T(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new mr(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ti{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new T(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class qa{constructor(e){this._methodName=e}}/**
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
 */class B1{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new T(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new T(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
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
 */const c$=/^__.*__$/;class d${constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Io(e,this.data,n,this.fieldTransforms)}}class yI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new jr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function wI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class q1{constructor(e,n,r,i,a,s){this.settings=e,this.databaseId=n,this.yt=r,this.ignoreUndefinedProperties=i,a===void 0&&this.na(),this.fieldTransforms=a||[],this.fieldMask=s||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new q1(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Rd(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(wI(this.sa)&&c$.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class h${constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=r||cl(e)}da(e,n,r,i=!1){return new q1({sa:e,methodName:n,fa:r,path:Ue.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Ha(t){const e=t._freezeSettings(),n=cl(t._databaseId);return new h$(t._databaseId,!!e.ignoreUndefinedProperties,n)}function H1(t,e,n,r,i,a={}){const s=t.da(a.merge||a.mergeFields?2:0,e,n,i);Z2("Data must be an object, but it was:",s,r);const o=EI(r,s);let f,u;if(a.merge)f=new Ht(s.fieldMask),u=s.fieldTransforms;else if(a.mergeFields){const l=[];for(const c of a.mergeFields){const d=rm(e,c,n);if(!s.contains(d))throw new T(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);II(l,d)||l.push(d)}f=new Ht(l),u=s.fieldTransforms.filter(c=>f.covers(c.field))}else f=null,u=s.fieldTransforms;return new d$(new lt(o),f,u)}class pl extends qa{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pl}}function bI(t,e,n){return new q1({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.yt,e.ignoreUndefinedProperties)}class Y2 extends qa{_toFieldTransform(e){return new fl(e.path,new Js)}isEqual(e){return e instanceof Y2}}class p$ extends qa{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=bI(this,e,!0),r=this._a.map(a=>Wa(a,n)),i=new Na(r);return new fl(e.path,i)}isEqual(e){return this===e}}class m$ extends qa{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=bI(this,e,!0),r=this._a.map(a=>Wa(a,n)),i=new Da(r);return new fl(e.path,i)}isEqual(e){return this===e}}class g$ extends qa{constructor(e,n){super(e),this.wa=n}_toFieldTransform(e){const n=new Zs(e.yt,GE(e.yt,this.wa));return new fl(e.path,n)}isEqual(e){return this===e}}function X2(t,e,n,r){const i=t.da(1,e,n);Z2("Data must be an object, but it was:",i,r);const a=[],s=lt.empty();Ba(r,(f,u)=>{const l=e3(e,f,n);u=W(u);const c=i.ca(l);if(u instanceof pl)a.push(l);else{const d=Wa(u,c);d!=null&&(a.push(l),s.set(l,d))}});const o=new Ht(a);return new yI(s,o,i.fieldTransforms)}function J2(t,e,n,r,i,a){const s=t.da(1,e,n),o=[rm(e,r,n)],f=[i];if(a.length%2!=0)throw new T(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<a.length;d+=2)o.push(rm(e,a[d])),f.push(a[d+1]);const u=[],l=lt.empty();for(let d=o.length-1;d>=0;--d)if(!II(u,o[d])){const h=o[d];let m=f[d];m=W(m);const w=s.ca(h);if(m instanceof pl)u.push(h);else{const E=Wa(m,w);E!=null&&(u.push(h),l.set(h,E))}}const c=new Ht(u);return new yI(l,c,s.fieldTransforms)}function kI(t,e,n,r=!1){return Wa(n,t.da(r?4:3,e))}function Wa(t,e){if(_I(t=W(t)))return Z2("Unsupported field value:",e,t),EI(t,e);if(t instanceof qa)return function(n,r){if(!wI(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let a=0;for(const s of n){let o=Wa(s,r.aa(a));o==null&&(o={nullValue:"NULL_VALUE"}),i.push(o),a++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=W(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return GE(r.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Se.fromDate(n);return{timestampValue:eo(r.yt,i)}}if(n instanceof Se){const i=new Se(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:eo(r.yt,i)}}if(n instanceof B1)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof mr)return{bytesValue:o_(r.yt,n._byteString)};if(n instanceof be){const i=r.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw r.ha(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:y2(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${U1(n)}`)}(t,e)}function EI(t,e){const n={};return AE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ba(t,(r,i)=>{const a=Wa(i,e.ra(r));a!=null&&(n[r]=a)}),{mapValue:{fields:n}}}function _I(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Se||t instanceof B1||t instanceof mr||t instanceof be||t instanceof qa)}function Z2(t,e,n){if(!_I(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=U1(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function rm(t,e,n){if((e=W(e))instanceof Ti)return e._internalPath;if(typeof e=="string")return e3(t,e);throw Rd("Field path arguments must be of type string or ",t,!1,void 0,n)}const v$=new RegExp("[~\\*/\\[\\]]");function e3(t,e,n){if(e.search(v$)>=0)throw Rd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ti(...e.split("."))._internalPath}catch{throw Rd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rd(t,e,n,r,i){const a=r&&!r.isEmpty(),s=i!==void 0;let o=`Function ${e}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let f="";return(a||s)&&(f+=" (found",a&&(f+=` in field ${r}`),s&&(f+=` in document ${i}`),f+=")"),new T(I.INVALID_ARGUMENT,o+t+f)}function II(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Au{constructor(e,n,r,i,a){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new y$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(W1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class y$ extends Au{data(){return super.data()}}function W1(t,e){return typeof e=="string"?e3(t,e):e instanceof Ti?e._internalPath:e._delegate._internalPath}/**
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
 */function SI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new T(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class t3{}class ml extends t3{}function Wr(t,e,...n){let r=[];e instanceof t3&&r.push(e),r=r.concat(n),function(i){const a=i.filter(o=>o instanceof n3).length,s=i.filter(o=>o instanceof G1).length;if(a>1||a>0&&s>0)throw new T(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class G1 extends ml{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new G1(e,n,r)}_apply(e){const n=this._parse(e);return TI(e._query,n),new gt(e.firestore,e.converter,Hp(e._query,n))}_parse(e){const n=Ha(e.firestore);return function(i,a,s,o,f,u,l){let c;if(f.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new T(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Y4(l,u);const d=[];for(const h of l)d.push(Q4(o,i,h));c={arrayValue:{values:d}}}else c=Q4(o,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Y4(l,u),c=kI(s,a,l,u==="in"||u==="not-in");return re.create(f,u,c)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function w$(t,e,n){const r=e,i=W1("where",t);return G1._create(i,r,n)}class n3 extends t3{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new n3(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ce.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let a=r;const s=i.getFlattenedFilters();for(const o of s)TI(a,o),a=Hp(a,o)}(e._query,n),new gt(e.firestore,e.converter,Hp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class r3 extends ml{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new r3(e,n)}_apply(e){const n=function(r,i,a){if(r.startAt!==null)throw new T(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new T(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const s=new Ms(i,a);return function(o,f){if(m2(o)===null){const u=D1(o);u!==null&&xI(o,u,f.field)}}(r,s),s}(e._query,this._field,this._direction);return new gt(e.firestore,e.converter,function(r,i){const a=r.explicitOrderBy.concat([i]);return new Fr(r.path,r.collectionGroup,a,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function b$(t,e="asc"){const n=e,r=W1("orderBy",t);return r3._create(r,n)}class K1 extends ml{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new K1(e,n,r)}_apply(e){return new gt(e.firestore,e.converter,kd(e._query,this._limit,this._limitType))}}function k$(t){return aI("limit",t),K1._create("limit",t,"F")}function E$(t){return aI("limitToLast",t),K1._create("limitToLast",t,"L")}class Q1 extends ml{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Q1(e,n,r)}_apply(e){const n=CI(e,this.type,this._docOrFields,this._inclusive);return new gt(e.firestore,e.converter,function(r,i){return new Fr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function _$(...t){return Q1._create("startAt",t,!0)}function I$(...t){return Q1._create("startAfter",t,!1)}class Y1 extends ml{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Y1(e,n,r)}_apply(e){const n=CI(e,this.type,this._docOrFields,this._inclusive);return new gt(e.firestore,e.converter,function(r,i){return new Fr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function S$(...t){return Y1._create("endBefore",t,!1)}function C$(...t){return Y1._create("endAt",t,!0)}function CI(t,e,n,r){if(n[0]=W(n[0]),n[0]instanceof Au)return function(i,a,s,o,f){if(!o)throw new T(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${s}().`);const u=[];for(const l of pa(i))if(l.field.isKeyField())u.push(Aa(a,o.key));else{const c=o.data.field(l.field);if(h2(c))throw new T(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(c===null){const d=l.field.canonicalString();throw new T(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(c)}return new Si(u,f)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Ha(t.firestore);return function(a,s,o,f,u,l){const c=a.explicitOrderBy;if(u.length>c.length)throw new T(I.INVALID_ARGUMENT,`Too many arguments provided to ${f}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let h=0;h<u.length;h++){const m=u[h];if(c[h].field.isKeyField()){if(typeof m!="string")throw new T(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${f}(), but got a ${typeof m}`);if(!g2(a)&&m.indexOf("/")!==-1)throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${f}() must be a plain document ID, but '${m}' contains a slash.`);const w=a.path.child(se.fromString(m));if(!L.isDocumentKey(w))throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${f}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const E=new L(w);d.push(Aa(s,E))}else{const w=kI(o,f,m);d.push(w)}}return new Si(d,l)}(t._query,t.firestore._databaseId,i,e,n,r)}}function Q4(t,e,n){if(typeof(n=W(n))=="string"){if(n==="")throw new T(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!g2(e)&&n.indexOf("/")!==-1)throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(se.fromString(n));if(!L.isDocumentKey(r))throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Aa(t,new L(r))}if(n instanceof be)return Aa(t,n._key);throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${U1(n)}.`)}function Y4(t,e){if(!Array.isArray(t)||t.length===0)throw new T(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new T(I.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function TI(t,e){if(e.isInequality()){const r=D1(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new T(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const a=m2(t);a!==null&&xI(t,i,a)}const n=function(r,i){for(const a of r)for(const s of a.getFlattenedFilters())if(i.indexOf(s.op)>=0)return s.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new T(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new T(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function xI(t,e,n){if(!n.isEqual(e))throw new T(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class i3{convertValue(e,n="none"){switch(xa(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ta(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){const r={};return Ba(e.fields,(i,a)=>{r[i]=this.convertValue(a,n)}),r}convertGeoPoint(e){return new B1(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=NE(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Eu(e));default:return null}}convertTimestamp(e){const n=_i(e);return new Se(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=se.fromString(e);V(v_(r));const i=new Ei(r.get(1),r.get(3)),a=new L(r.popFirst(5));return i.isEqual(n)||je(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),a}}/**
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
 */function X1(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class T$ extends i3{constructor(e){super(),this.firestore=e}convertBytes(e){return new mr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,n)}}/**
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
 */class sa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mr extends Au{constructor(e,n,r,i,a,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Lf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(W1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Lf extends Mr{data(e={}){return super.data(e)}}class xi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new sa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Lf(this._firestore,this._userDataWriter,r.key,r,new sa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new T(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(s=>{const o=new Lf(r._firestore,r._userDataWriter,s.doc.key,s.doc,new sa(r._snapshot.mutatedKeys.has(s.doc.key),r._snapshot.fromCache),r.query.converter);return s.doc,{type:"added",doc:o,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(s=>i||s.type!==3).map(s=>{const o=new Lf(r._firestore,r._userDataWriter,s.doc.key,s.doc,new sa(r._snapshot.mutatedKeys.has(s.doc.key),r._snapshot.fromCache),r.query.converter);let f=-1,u=-1;return s.type!==0&&(f=a.indexOf(s.doc.key),a=a.delete(s.doc.key)),s.type!==1&&(a=a.add(s.doc),u=a.indexOf(s.doc.key)),{type:x$(s.type),doc:o,oldIndex:f,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function x$(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}function AI(t,e){return t instanceof Mr&&e instanceof Mr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof xi&&e instanceof xi&&t._firestore===e._firestore&&fI(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function A$(t){t=ue(t,be);const e=ue(t.firestore,Oe);return hI(ot(e),t._key).then(n=>a3(e,t,n))}class Ga extends i3{constructor(e){super(),this.firestore=e}convertBytes(e){return new mr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,n)}}function R$(t){t=ue(t,be);const e=ue(t.firestore,Oe),n=ot(e),r=new Ga(e);return QO(n,t._key).then(i=>new Mr(e,r,t._key,i,new sa(i!==null&&i.hasLocalMutations,!0),t.converter))}function N$(t){t=ue(t,be);const e=ue(t.firestore,Oe);return hI(ot(e),t._key,{source:"server"}).then(n=>a3(e,t,n))}function D$(t){t=ue(t,gt);const e=ue(t.firestore,Oe),n=ot(e),r=new Ga(e);return SI(t._query),pI(n,t._query).then(i=>new xi(e,r,t,i))}function P$(t){t=ue(t,gt);const e=ue(t.firestore,Oe),n=ot(e),r=new Ga(e);return YO(n,t._query).then(i=>new xi(e,r,t,i))}function M$(t){t=ue(t,gt);const e=ue(t.firestore,Oe),n=ot(e),r=new Ga(e);return pI(n,t._query,{source:"server"}).then(i=>new xi(e,r,t,i))}function X4(t,e,n){t=ue(t,be);const r=ue(t.firestore,Oe),i=X1(t.converter,e,n);return gl(r,[H1(Ha(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ie.none())])}function J4(t,e,n,...r){t=ue(t,be);const i=ue(t.firestore,Oe),a=Ha(i);let s;return s=typeof(e=W(e))=="string"||e instanceof Ti?J2(a,"updateDoc",t._key,e,n,r):X2(a,"updateDoc",t._key,e),gl(i,[s.toMutation(t._key,Ie.exists(!0))])}function L$(t){return gl(ue(t.firestore,Oe),[new So(t._key,Ie.none())])}function O$(t,e){const n=ue(t.firestore,Oe),r=Ad(t),i=X1(t.converter,e);return gl(n,[H1(Ha(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ie.exists(!1))]).then(()=>r)}function RI(t,...e){var n,r,i;t=W(t);let a={includeMetadataChanges:!1},s=0;typeof e[s]!="object"||nm(e[s])||(a=e[s],s++);const o={includeMetadataChanges:a.includeMetadataChanges};if(nm(e[s])){const c=e[s];e[s]=(n=c.next)===null||n===void 0?void 0:n.bind(c),e[s+1]=(r=c.error)===null||r===void 0?void 0:r.bind(c),e[s+2]=(i=c.complete)===null||i===void 0?void 0:i.bind(c)}let f,u,l;if(t instanceof be)u=ue(t.firestore,Oe),l=_o(t._key.path),f={next:c=>{e[s]&&e[s](a3(u,t,c))},error:e[s+1],complete:e[s+2]};else{const c=ue(t,gt);u=ue(c.firestore,Oe),l=c._query;const d=new Ga(u);f={next:h=>{e[s]&&e[s](new xi(u,d,c,h))},error:e[s+1],complete:e[s+2]},SI(t._query)}return function(c,d,h,m){const w=new V1(m),E=new F2(d,w,h);return c.asyncQueue.enqueueAndForget(async()=>L2(await ao(c),E)),()=>{w.bc(),c.asyncQueue.enqueueAndForget(async()=>O2(await ao(c),E))}}(ot(u),l,o,f)}function $$(t,e){return XO(ot(t=ue(t,Oe)),nm(e)?e:{next:e})}function gl(t,e){return function(n,r){const i=new nt;return n.asyncQueue.enqueueAndForget(async()=>_O(await Q2(n),r,i)),i.promise}(ot(t),e)}function a3(t,e,n){const r=n.docs.get(e._key),i=new Ga(t);return new Mr(t,i,e._key,r,new sa(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const F$={maxAttempts:5};/**
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
 */class j${constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ha(e)}set(e,n,r){this._verifyNotCommitted();const i=Jr(e,this._firestore),a=X1(i.converter,n,r),s=H1(this._dataReader,"WriteBatch.set",i._key,a,i.converter!==null,r);return this._mutations.push(s.toMutation(i._key,Ie.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const a=Jr(e,this._firestore);let s;return s=typeof(n=W(n))=="string"||n instanceof Ti?J2(this._dataReader,"WriteBatch.update",a._key,n,r,i):X2(this._dataReader,"WriteBatch.update",a._key,n),this._mutations.push(s.toMutation(a._key,Ie.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Jr(e,this._firestore);return this._mutations=this._mutations.concat(new So(n._key,Ie.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new T(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Jr(t,e){if((t=W(t)).firestore!==e)throw new T(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class U$ extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Ha(e)}get(e){const n=Jr(e,this._firestore),r=new T$(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return $();const a=i[0];if(a.isFoundDocument())return new Au(this._firestore,r,a.key,a,n.converter);if(a.isNoDocument())return new Au(this._firestore,r,n._key,null,n.converter);throw $()})}set(e,n,r){const i=Jr(e,this._firestore),a=X1(i.converter,n,r),s=H1(this._dataReader,"Transaction.set",i._key,a,i.converter!==null,r);return this._transaction.set(i._key,s),this}update(e,n,r,...i){const a=Jr(e,this._firestore);let s;return s=typeof(n=W(n))=="string"||n instanceof Ti?J2(this._dataReader,"Transaction.update",a._key,n,r,i):X2(this._dataReader,"Transaction.update",a._key,n),this._transaction.update(a._key,s),this}delete(e){const n=Jr(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Jr(e,this._firestore),r=new Ga(this._firestore);return super.get(e).then(i=>new Mr(this._firestore,r,n._key,i._document,new sa(!1,!1),n.converter))}}function V$(t,e,n){t=ue(t,Oe);const r=Object.assign(Object.assign({},F$),n);return function(i){if(i.maxAttempts<1)throw new T(I.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,a,s){const o=new nt;return i.asyncQueue.enqueueAndForget(async()=>{const f=await WO(i);new qO(i.asyncQueue,f,s,a,o).run()}),o.promise}(ot(t),i=>e(new U$(t,i)),r)}/**
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
 */function z$(){return new pl("deleteField")}function B$(){return new Y2("serverTimestamp")}function q$(...t){return new p$("arrayUnion",t)}function H$(...t){return new m$("arrayRemove",t)}function W$(t){return new g$("increment",t)}(function(t,e=!0){(function(n){Eo=n})(Ua),bi(new dr("firestore",(n,{instanceIdentifier:r,options:i})=>{const a=n.getProvider("app").getImmediate(),s=new Oe(new tM(n.getProvider("auth-internal")),new aM(n.getProvider("app-check-internal")),function(o,f){if(!Object.prototype.hasOwnProperty.apply(o.options,["projectId"]))throw new T(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ei(o.options.projectId,f)}(a,r),a);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),fr(Qy,"3.8.3",t),fr(Qy,"3.8.3","esm2017")})();const G$="@firebase/firestore-compat",K$="0.3.3";/**
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
 */function s3(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new T("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function Z4(){if(typeof Uint8Array>"u")throw new T("unimplemented","Uint8Arrays are not available in this environment.")}function e6(){if(!pM())throw new T("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Ru{constructor(e){this._delegate=e}static fromBase64String(e){return e6(),new Ru(mr.fromBase64String(e))}static fromUint8Array(e){return Z4(),new Ru(mr.fromUint8Array(e))}toBase64(){return e6(),this._delegate.toBase64()}toUint8Array(){return Z4(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function im(t){return Q$(t,["next","error","complete"])}function Q$(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class Y${enableIndexedDbPersistence(e,n){return r$(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return i$(e._delegate)}clearIndexedDbPersistence(e){return a$(e._delegate)}}class NI{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Ei||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Ks("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){UO(this._delegate,e,n,r)}enableNetwork(){return o$(this._delegate)}disableNetwork(){return f$(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,iI("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return s$(this._delegate)}onSnapshotsInSync(e){return $$(this._delegate,e)}get app(){if(!this._appCompat)throw new T("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new so(this,sI(this._delegate,e))}catch(n){throw xt(n,"collection()","Firestore.collection()")}}doc(e){try{return new En(this,Ad(this._delegate,e))}catch(n){throw xt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Tt(this,VO(this._delegate,e))}catch(n){throw xt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return V$(this._delegate,n=>e(new DI(this,n)))}batch(){return ot(this._delegate),new PI(new j$(this._delegate,e=>gl(this._delegate,e)))}loadBundle(e){return u$(this._delegate,e)}namedQuery(e){return l$(this._delegate,e).then(n=>n?new Tt(this,n):null)}}class J1 extends i3{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ru(new mr(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return En.forKey(n,this.firestore,null)}}function X$(t){XP(t)}class DI{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new J1(e)}get(e){const n=oa(e);return this._delegate.get(n).then(r=>new Nu(this._firestore,new Mr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=oa(e);return r?(s3("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const a=oa(e);return arguments.length===2?this._delegate.update(a,n):this._delegate.update(a,n,r,...i),this}delete(e){const n=oa(e);return this._delegate.delete(n),this}}class PI{constructor(e){this._delegate=e}set(e,n,r){const i=oa(e);return r?(s3("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const a=oa(e);return arguments.length===2?this._delegate.update(a,n):this._delegate.update(a,n,r,...i),this}delete(e){const n=oa(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Oa{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Lf(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Du(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Oa.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let a=i.get(n);return a||(a=new Oa(e,new J1(e),n),i.set(n,a)),a}}Oa.INSTANCES=new WeakMap;class En{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new J1(e)}static forPath(e,n,r){if(e.length%2!==0)throw new T("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new En(n,new be(n._delegate,r,new L(e)))}static forKey(e,n,r){return new En(n,new be(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new so(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new so(this.firestore,sI(this._delegate,e))}catch(n){throw xt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=W(e),e instanceof be?oI(this._delegate,e):!1}set(e,n){n=s3("DocumentReference.set",n);try{return n?X4(this._delegate,e,n):X4(this._delegate,e)}catch(r){throw xt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?J4(this._delegate,e):J4(this._delegate,e,n,...r)}catch(i){throw xt(i,"updateDoc()","DocumentReference.update()")}}delete(){return L$(this._delegate)}onSnapshot(...e){const n=MI(e),r=LI(e,i=>new Nu(this.firestore,new Mr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return RI(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=R$(this._delegate):(e==null?void 0:e.source)==="server"?n=N$(this._delegate):n=A$(this._delegate),n.then(r=>new Nu(this.firestore,new Mr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new En(this.firestore,e?this._delegate.withConverter(Oa.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function xt(t,e,n){return t.message=t.message.replace(e,n),t}function MI(t){for(const e of t)if(typeof e=="object"&&!im(e))return e;return{}}function LI(t,e){var n,r;let i;return im(t[0])?i=t[0]:im(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:a=>{i.next&&i.next(e(a))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Nu{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new En(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return AI(this._delegate,e._delegate)}}class Du extends Nu{data(e){const n=this._delegate.data(e);return JP(n!==void 0),n}}class Tt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new J1(e)}where(e,n,r){try{return new Tt(this.firestore,Wr(this._delegate,w$(e,n,r)))}catch(i){throw xt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Tt(this.firestore,Wr(this._delegate,b$(e,n)))}catch(r){throw xt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Tt(this.firestore,Wr(this._delegate,k$(e)))}catch(n){throw xt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Tt(this.firestore,Wr(this._delegate,E$(e)))}catch(n){throw xt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Tt(this.firestore,Wr(this._delegate,_$(...e)))}catch(n){throw xt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Tt(this.firestore,Wr(this._delegate,I$(...e)))}catch(n){throw xt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Tt(this.firestore,Wr(this._delegate,S$(...e)))}catch(n){throw xt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Tt(this.firestore,Wr(this._delegate,C$(...e)))}catch(n){throw xt(n,"endAt()","Query.endAt()")}}isEqual(e){return fI(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=P$(this._delegate):(e==null?void 0:e.source)==="server"?n=M$(this._delegate):n=D$(this._delegate),n.then(r=>new am(this.firestore,new xi(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=MI(e),r=LI(e,i=>new am(this.firestore,new xi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return RI(this._delegate,n,r)}withConverter(e){return new Tt(this.firestore,e?this._delegate.withConverter(Oa.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class J${constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Du(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class am{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Tt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Du(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new J$(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Du(this._firestore,r))})}isEqual(e){return AI(this._delegate,e._delegate)}}class so extends Tt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new En(this.firestore,e):null}doc(e){try{return e===void 0?new En(this.firestore,Ad(this._delegate)):new En(this.firestore,Ad(this._delegate,e))}catch(n){throw xt(n,"doc()","CollectionReference.doc()")}}add(e){return O$(this._delegate,e).then(n=>new En(this.firestore,n))}isEqual(e){return oI(this._delegate,e._delegate)}withConverter(e){return new so(this.firestore,e?this._delegate.withConverter(Oa.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function oa(t){return ue(t,be)}/**
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
 */class o3{constructor(...e){this._delegate=new Ti(...e)}static documentId(){return new o3(Ue.keyField().canonicalString())}isEqual(e){return e=W(e),e instanceof Ti?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Zi{constructor(e){this._delegate=e}static serverTimestamp(){const e=B$();return e._methodName="FieldValue.serverTimestamp",new Zi(e)}static delete(){const e=z$();return e._methodName="FieldValue.delete",new Zi(e)}static arrayUnion(...e){const n=q$(...e);return n._methodName="FieldValue.arrayUnion",new Zi(n)}static arrayRemove(...e){const n=H$(...e);return n._methodName="FieldValue.arrayRemove",new Zi(n)}static increment(e){const n=W$(e);return n._methodName="FieldValue.increment",new Zi(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const Z$={Firestore:NI,GeoPoint:B1,Timestamp:Se,Blob:Ru,Transaction:DI,WriteBatch:PI,DocumentReference:En,DocumentSnapshot:Nu,Query:Tt,QueryDocumentSnapshot:Du,QuerySnapshot:am,CollectionReference:so,FieldPath:o3,FieldValue:Zi,setLogLevel:X$,CACHE_SIZE_UNLIMITED:n$};function eF(t,e){t.INTERNAL.registerComponent(new dr("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},Z$)))}/**
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
 */function tF(t){eF(t,(e,n)=>new NI(e,n,new Y$)),t.registerVersion(G$,K$)}tF(wn);const nF={apiKey:"AIzaSyCTJiSV3XxKObMHbfDu46K9O21FNvjPnwE",authDomain:"whatsappclone-a0dc2.firebaseapp.com",projectId:"whatsappclone-a0dc2",storageBucket:"whatsappclone-a0dc2.appspot.com",messagingSenderId:"1020477980415",appId:"1:1020477980415:web:15e0ea0bdf7bb79a8456ca"},OI=wn.initializeApp(nF),tn=OI.firestore(),Ai={fbPopup:async()=>{const t=new wn.auth.FacebookAuthProvider;let e=await OI.auth().signInWithPopup(t);return{user:e.user,accessToken:e.credential.accessToken}},addUser:async t=>{await tn.collection("users").doc(t.id).set({name:t.name,avatar:t.avatar},{merge:!0})},getContactList:async t=>{let e=[];return(await tn.collection("users").get()).forEach(r=>{let i=r.data();r.id!==t&&e.push({id:r.id,name:i.name,avatar:i.avatar})}),e},addNewChat:async(t,e)=>{let r=(await tn.collection("users").doc(t.id).get()).data(),i=!1;if(r.chats)for(let a in r.chats)r.chats[a].with==e.id&&(i=!0);if(i)alert("Chat já existente!");else{let a=await tn.collection("chats").add({messages:[],users:[t.id,e.id]});await tn.collection("users").doc(t.id).update({chats:wn.firestore.FieldValue.arrayUnion({chatId:a.id,image:e.avatar,title:e.name,with:e.id})}),await tn.collection("users").doc(e.id).update({chats:wn.firestore.FieldValue.arrayUnion({chatId:a.id,title:t.name,image:t.avatar,with:t.id})})}},onChatListUpdate:(t,e)=>tn.collection("users").doc(t).onSnapshot(n=>{if(n.exists){let r=n.data();r.chats&&([...r.chats].sort((a,s)=>a.lastMessageDate===void 0||s.lastMessageDate===void 0?-1:a.lastMessageDate.seconds<s.lastMessageDate.seconds?1:-1),e(r.chats))}}),onChatMessagesUpdate:(t,e,n)=>tn.collection("chats").doc(t).onSnapshot(r=>{if(r.exists){let i=r.data();e(i.messages),n(i.users)}}),updateNotificationsStatus:async(t,e)=>{let n=tn.collection("users").doc(t),a=[...(await n.get()).data().chats];for(let s in a)a[s].chatId==e&&a[s].unreadMessage==!0&&(a[s].unreadMessage=!1,await n.update({chats:a}))},sendMessage:async(t,e,n,r)=>{let i=new Date;const a=tn.collection("chats").doc(t);await a.get().then(async s=>{if(s.exists){let o=s.data().lastDate;if(o){let f=o.toDate(),u=new Date(f);i.getDate()==u.getDate()&&i.getMonth()==u.getMonth()&&i.getFullYear()==u.getFullYear()||(alert("passou"),await a.update({lastDate:i}).then(async()=>{await a.update({messages:wn.firestore.FieldValue.arrayUnion({authorId:"",body:"",sentDate:i,type:"timeStamp"})})}))}else await a.update({lastDate:i}).then(async()=>{await a.update({messages:wn.firestore.FieldValue.arrayUnion({authorId:"",body:"",sentDate:i,type:"timeStamp"})})})}}),await tn.collection("chats").doc(t).update({messages:wn.firestore.FieldValue.arrayUnion({authorId:e,body:n,sentDate:i,type:"text"})});for(let s in r){let f=(await tn.collection("users").doc(r[s]).get()).data(),u=[...f.chats];if(r[s]!=e)for(let l in u)u[l].chatId==t&&(u[l].unreadMessage=!0);if(f.chats){u=[...f.chats];for(let l in u)u[l].chatId==t&&(u[l].lastMessage=n,u[l].lastMessage=n,u[l].lastMessageDate=i);await tn.collection("users").doc(r[s]).update({chats:u})}}}};function rF({user:t,newChatMenu:e,setNewchatMenuStatus:n}){const[r,i]=y.useState(!1),[a,s]=y.useState(""),[o,f]=y.useState([]);var u=!1;y.useEffect(()=>{(async()=>{if(t!==null){let b=await Ai.getContactList(t.id);f(b)}})()},[t]);const l=async v=>{await Ai.addNewChat(t,v),n(!1)},c=y.useRef(null),d=()=>{i(!0)},h=()=>{a.length<=0&&i(!1)},m=v=>{s(v.target.value)},w=()=>{s(""),c.current.focus()},E=()=>{c.current.focus()},g=()=>{c.current.blur(),i(!1),s("")},p=()=>{n(!1),s("")};return te("div",{className:Ln(ke.newchat,{[ke.active]:e}),children:[k("header",{children:te("div",{className:ke.content,children:[k("div",{className:ke["arrowback-container"],children:k(vT,{onClick:p,className:ke["arrowback-button"]})}),k("div",{className:ke["title-container"],children:k("h1",{className:ke.title,children:"Nova conversa"})})]})}),k("div",{className:Ln(ke["search-container"],{[ke.active]:r}),children:te("div",{className:ke["input-container"],children:[k(t9,{onClickFunction:E,className:ke["search-button"]}),k(n9,{onClickFunction:g,className:ke["arrow-search-button"]}),k("input",{ref:c,onFocus:d,onBlur:h,value:a,onChange:m,placeholder:"Pesquisar contato"}),a.length>0?k("span",{onClick:w,children:k(r9,{className:ke["search-close-icon"]})}):k(Fn,{})]})}),te("div",{className:ke["contacts-list"],children:[k("div",{className:ke.heading,children:k("h1",{children:"Contatos no WhatsApp"})}),a.length>0?k(Fn,{children:o.map((v,b)=>{if(v.name.toLowerCase().includes(a.toLowerCase()))return u=!0,te("div",{className:ke["contact-box"],children:[k("div",{className:ke.image,children:k("img",{src:v.avatar,onError:({currentTarget:S})=>{S.onerror=null,S.src="https://www.w3schools.com/howto/img_avatar.png"}})}),k("div",{className:ke.content,children:k("div",{className:ke.row,children:k("h3",{children:v.name})})})]},b)})}):k(Fn,{children:o.map((v,b)=>te("div",{onClick:()=>{l(v)},className:ke["contact-box"],children:[k("div",{className:ke.image,children:k("img",{src:v.avatar,onError:({currentTarget:S})=>{S.onerror=null,S.src="https://www.w3schools.com/howto/img_avatar.png"}})}),k("div",{className:ke.content,children:k("div",{className:ke.row,children:k("h3",{children:v.name})})})]},b))}),a.length>0&&!u&&k("div",{className:ke.notfound,children:te("span",{children:["Nenhum contato encontrado para '",a,"'"]})})]})]})}function iF({user:t,setActiveChat:e,activeChat:n}){const[r,i]=y.useState(!1),[a,s]=y.useState(""),[o,f]=y.useState([]);return y.useEffect(()=>{if(t!==null)return Ai.onChatListUpdate(t.id,f)},[t]),te("div",{className:LC.sidebar,children:[k(rF,{user:t,newChatMenu:r,setNewchatMenuStatus:i}),k(VC,{user:t,setNewchatMenuStatus:i}),k(qC,{inputValue:a,setValue:s}),k(oT,{inputValue:a,chatList:o,setActiveChat:e,activeChat:n})]})}const aF="_content_4vjpj_17",sF={content:aF};function oF({children:t}){return k("div",{className:sF.content,children:t})}const fF="_intro_ee3pw_17",t6={intro:fF,"intro-filler":"_intro-filler_ee3pw_42"};function uF(){return te("svg",{viewBox:"0 0 303 172",width:"360",preserveAspectRatio:"xMidYMid meet",fill:"none",children:[k("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M229.565 160.229C262.212 149.245 286.931 118.241 283.39 73.4194C278.009 5.31929 212.365 -11.5738 171.472 8.48673C115.998 35.6999 108.972 40.1612 69.2388 40.1612C39.645 40.1612 9.51318 54.4147 5.7467 92.952C3.0166 120.885 13.9985 145.267 54.6373 157.716C128.599 180.373 198.017 170.844 229.565 160.229Z",fill:"#DAF7F3"}),k("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M131.589 68.9422C131.593 68.9422 131.596 68.9422 131.599 68.9422C137.86 68.9422 142.935 63.6787 142.935 57.1859C142.935 50.6931 137.86 45.4297 131.599 45.4297C126.518 45.4297 122.218 48.8958 120.777 53.6723C120.022 53.4096 119.213 53.2672 118.373 53.2672C114.199 53.2672 110.815 56.7762 110.815 61.1047C110.815 65.4332 114.199 68.9422 118.373 68.9422C118.377 68.9422 118.381 68.9422 118.386 68.9422H131.589Z",fill:"white"}),k("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M105.682 128.716C109.186 128.716 112.026 125.908 112.026 122.446C112.026 118.983 109.186 116.176 105.682 116.176C104.526 116.176 103.442 116.481 102.509 117.015L102.509 116.959C102.509 110.467 97.1831 105.203 90.6129 105.203C85.3224 105.203 80.8385 108.616 79.2925 113.335C78.6052 113.143 77.88 113.041 77.1304 113.041C72.7503 113.041 69.1995 116.55 69.1995 120.878C69.1995 125.207 72.7503 128.716 77.1304 128.716C77.1341 128.716 77.1379 128.716 77.1416 128.716H105.682L105.682 128.716Z",fill:"white"}),k("rect",{x:"0.445307",y:"0.549558",width:"50.5797",height:"100.068",rx:"7.5",transform:"matrix(0.994522 0.104528 -0.103907 0.994587 10.5547 41.6171)",fill:"#42CBA5",stroke:"#316474"}),k("rect",{x:"0.445307",y:"0.549558",width:"50.4027",height:"99.7216",rx:"7.5",transform:"matrix(0.994522 0.104528 -0.103907 0.994587 10.9258 37.9564)",fill:"white",stroke:"#316474"}),k("path",{d:"M57.1609 51.7354L48.5917 133.759C48.2761 136.78 45.5713 138.972 42.5503 138.654L9.58089 135.189C6.55997 134.871 4.36688 132.165 4.68251 129.144L13.2517 47.1204C13.5674 44.0992 16.2722 41.9075 19.2931 42.2251L24.5519 42.7778L47.0037 45.1376L52.2625 45.6903C55.2835 46.0078 57.4765 48.7143 57.1609 51.7354Z",fill:"#EEFEFA",stroke:"#316474"}),k("path",{d:"M26.2009 102.937C27.0633 103.019 27.9323 103.119 28.8023 103.21C29.0402 101.032 29.2706 98.8437 29.4916 96.6638L26.8817 96.39C26.6438 98.5681 26.4049 100.755 26.2009 102.937ZM23.4704 93.3294L25.7392 91.4955L27.5774 93.7603L28.7118 92.8434L26.8736 90.5775L29.1434 88.7438L28.2248 87.6114L25.955 89.4452L24.1179 87.1806L22.9824 88.0974L24.8207 90.3621L22.5508 92.197L23.4704 93.3294ZM22.6545 98.6148C22.5261 99.9153 22.3893 101.215 22.244 102.514C23.1206 102.623 23.9924 102.697 24.8699 102.798C25.0164 101.488 25.1451 100.184 25.2831 98.8734C24.4047 98.7813 23.5298 98.6551 22.6545 98.6148ZM39.502 89.7779C38.9965 94.579 38.4833 99.3707 37.9862 104.174C38.8656 104.257 39.7337 104.366 40.614 104.441C41.1101 99.6473 41.6138 94.8633 42.1271 90.0705C41.2625 89.9282 40.3796 89.8786 39.502 89.7779ZM35.2378 92.4459C34.8492 96.2179 34.4351 99.9873 34.0551 103.76C34.925 103.851 35.7959 103.934 36.6564 104.033C37.1028 100.121 37.482 96.1922 37.9113 92.2783C37.0562 92.1284 36.18 92.0966 35.3221 91.9722C35.2812 92.1276 35.253 92.286 35.2378 92.4459ZM31.1061 94.1821C31.0635 94.341 31.0456 94.511 31.0286 94.6726C30.7324 97.5678 30.4115 100.452 30.1238 103.348L32.7336 103.622C32.8582 102.602 32.9479 101.587 33.0639 100.567C33.2611 98.5305 33.5188 96.4921 33.6905 94.4522C32.8281 94.3712 31.9666 94.2811 31.1061 94.1821Z",fill:"#316474"}),k("path",{d:"M17.892 48.4889C17.7988 49.3842 18.4576 50.1945 19.3597 50.2923C20.2665 50.3906 21.0855 49.7332 21.1792 48.8333C21.2724 47.938 20.6136 47.1277 19.7115 47.0299C18.8047 46.9316 17.9857 47.5889 17.892 48.4889Z",fill:"white",stroke:"#316474"}),k("path",{d:"M231.807 136.678L197.944 139.04C197.65 139.06 197.404 139.02 197.249 138.96C197.208 138.945 197.179 138.93 197.16 138.918L196.456 128.876C196.474 128.862 196.5 128.843 196.538 128.822C196.683 128.741 196.921 128.668 197.215 128.647L231.078 126.285C231.372 126.265 231.618 126.305 231.773 126.365C231.814 126.381 231.842 126.395 231.861 126.407L232.566 136.449C232.548 136.463 232.522 136.482 232.484 136.503C232.339 136.584 232.101 136.658 231.807 136.678Z",fill:"white",stroke:"#316474"}),k("path",{d:"M283.734 125.679L144.864 135.363C141.994 135.563 139.493 133.4 139.293 130.54L133.059 41.6349C132.858 38.7751 135.031 36.2858 137.903 36.0856L276.773 26.4008C279.647 26.2005 282.144 28.364 282.345 31.2238L288.578 120.129C288.779 122.989 286.607 125.478 283.734 125.679Z",fill:"white"}),k("path",{d:"M144.864 135.363C141.994 135.563 139.493 133.4 139.293 130.54L133.059 41.6349C132.858 38.7751 135.031 36.2858 137.903 36.0856L276.773 26.4008C279.647 26.2004 282.144 28.364 282.345 31.2238L288.578 120.129C288.779 122.989 286.607 125.478 283.734 125.679",stroke:"#316474"}),k("path",{d:"M278.565 121.405L148.68 130.463C146.256 130.632 144.174 128.861 144.012 126.55L138.343 45.695C138.181 43.3846 139.994 41.3414 142.419 41.1723L272.304 32.1142C274.731 31.945 276.81 33.7166 276.972 36.0271L282.641 116.882C282.803 119.193 280.992 121.236 278.565 121.405Z",fill:"#EEFEFA",stroke:"#316474"}),k("path",{d:"M230.198 129.97L298.691 125.193L299.111 131.189C299.166 131.97 299.013 132.667 298.748 133.161C298.478 133.661 298.137 133.887 297.825 133.909L132.794 145.418C132.482 145.44 132.113 145.263 131.777 144.805C131.445 144.353 131.196 143.684 131.141 142.903L130.721 136.907L199.215 132.131C199.476 132.921 199.867 133.614 200.357 134.129C200.929 134.729 201.665 135.115 202.482 135.058L227.371 133.322C228.188 133.265 228.862 132.782 229.345 132.108C229.758 131.531 230.05 130.79 230.198 129.97Z",fill:"#42CBA5",stroke:"#316474"}),k("path",{d:"M230.367 129.051L300.275 124.175L300.533 127.851C300.591 128.681 299.964 129.403 299.13 129.461L130.858 141.196C130.025 141.254 129.303 140.627 129.245 139.797L128.987 136.121L198.896 131.245C199.485 132.391 200.709 133.147 202.084 133.051L227.462 131.281C228.836 131.185 229.943 130.268 230.367 129.051Z",fill:"white",stroke:"#316474"}),k("ellipse",{rx:"15.9969",ry:"15.9971",transform:"matrix(0.997577 -0.0695704 0.0699429 0.997551 210.659 83.553)",fill:"#42CBA5",stroke:"#316474"}),k("path",{d:"M208.184 87.1094L204.777 84.3593C204.777 84.359 204.776 84.3587 204.776 84.3583C203.957 83.6906 202.744 83.8012 202.061 84.6073C201.374 85.4191 201.486 86.6265 202.31 87.2997L202.312 87.3011L207.389 91.4116C207.389 91.4119 207.389 91.4121 207.389 91.4124C208.278 92.1372 209.611 91.9373 210.242 90.9795L218.283 78.77C218.868 77.8813 218.608 76.6968 217.71 76.127C216.817 75.5606 215.624 75.8109 215.043 76.6939L208.184 87.1094Z",fill:"white",stroke:"#316474"})]})}function lF(){return te(Fn,{children:[te("div",{className:t6.intro,children:[k(uF,{}),k("h1",{children:"WhatsApp Web"}),te("p",{children:["Envie e receba mensagens sem precisar manter seu celular conectado à internet.",k("br",{}),"Use o WhatsApp em até quatro aparelhos conectados e um celular ao mesmo tempo."]})]}),k("div",{className:t6["intro-filler"]})]})}const cF="_chat_eqiic_17",dF={chat:cF},hF="_avatar_1ubtn_25",pF="_user_1ubtn_35",mF="_name_1ubtn_35",gF="_icons_1ubtn_39",Zl={"chat-header":"_chat-header_1ubtn_17",avatar:hF,user:pF,name:mF,icons:gF,"search-button":"_search-button_1ubtn_42","menu-button":"_menu-button_1ubtn_46"};function vF({activeChat:t}){const e=Jb(t,{from:{opacity:0},enter:{opacity:1}});return te("header",{className:Zl["chat-header"],children:[k("div",{className:Zl.avatar,children:e(n=>k(e9.img,{style:n,src:t.image,alt:"",onError:({currentTarget:r})=>{r.onerror=null,r.src="https://www.w3schools.com/howto/img_avatar.png"}}))}),k("div",{className:Zl.user,children:k("span",{className:Zl.name,children:t.title})})]})}const yF="_message_dcgr3_27",wF="_time_dcgr3_51",bF="_out_dcgr3_80",kF="_timestamp_dcgr3_108",mn={"chat-body":"_chat-body_dcgr3_17","messages-container":"_messages-container_dcgr3_27","message-row":"_message-row_dcgr3_27","message-box-container":"_message-box-container_dcgr3_30","message-box":"_message-box_dcgr3_30",message:yF,"time-filler":"_time-filler_dcgr3_51",time:wF,out:bF,in:"_in_dcgr3_94",timestamp:kF,"timestamp-container":"_timestamp-container_dcgr3_113"};function EF({user:t,activeChat:e,setUsers:n}){const[r,i]=y.useState([]);y.useEffect(()=>Ai.onChatMessagesUpdate(e.chatId,i,n),[e]),y.useEffect(()=>{Ai.updateNotificationsStatus(t.id,e.chatId)},[r]);const a=s=>{if(s!=null){let o=new Date(s.seconds*1e3),f=o.getHours(),u=o.getMinutes();return f=f<10?"0"+f:f,`${f}:${u}`}else return""};return k("div",{className:mn["chat-body"],children:k("div",{className:mn["messages-container"],children:r.map((s,o)=>{let f=a(s.sentDate),u=s.type,l="";if(u=="timeStamp"){let c=s.sentDate.toDate(),d=new Date(c);l=`${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`}return k("div",{className:`${mn["message-row"]} ${s.authorId===t.id?mn.out:u=="timeStamp"?mn.timestamp:mn.in}`,children:u=="text"?k("div",{className:mn["message-box-container"],children:te("div",{className:mn["message-box"],children:[te("span",{className:mn.message,children:[s.body,k("span",{className:mn["time-filler"],children:"______"})]}),k("span",{className:mn.time,children:f})]})}):k("div",{className:Ln(mn["timestamp-container"]),children:k("span",{children:l})})},o)})})})}function $I(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=$I(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Yt(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=$I(t))&&(r&&(r+=" "),r+=e);return r}var ne;(function(t){t.hiddenOnSearch="epr-hidden-on-search",t.searchActive="epr-search-active",t.hidden="epr-hidden",t.visible="epr-visible",t.active="epr-active",t.emoji="epr-emoji",t.category="epr-emoji-category",t.label="epr-emoji-category-label",t.categoryContent="epr-emoji-category-content",t.emojiHasVariatios="epr-emoji-has-variations",t.scrollBody="epr-body",t.emojiList="epr-emoji-list",t.external="__EmojiPicker__",t.emojiPicker="EmojiPickerReact",t.open="epr-open",t.vertical="epr-vertical",t.horizontal="epr-horizontal",t.variationPicker="epr-emoji-variation-picker"})(ne||(ne={}));function Mt(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.map(function(r){return"."+r}).join("")}function hn(t){t&&requestAnimationFrame(function(){t.focus()})}function FI(t){if(t){var e=t.previousElementSibling;hn(e)}}function jI(t){if(t){var e=t.nextElementSibling;hn(e)}}function UI(t){if(t){var e=t.firstElementChild;hn(e)}}function _F(t){var e=t.children,n=y.useRef(null),r=y.useRef(null),i=y.useRef(null),a=y.useRef(null),s=y.useRef(null),o=y.useRef(null),f=y.useRef(null);return y.createElement(VI.Provider,{value:{AnchoredEmojiRef:r,BodyRef:i,CategoryNavigationRef:o,PickerMainRef:n,SearchInputRef:a,SkinTonePickerRef:s,VariationPickerRef:f}},e)}var VI=y.createContext({AnchoredEmojiRef:y.createRef(),BodyRef:y.createRef(),CategoryNavigationRef:y.createRef(),PickerMainRef:y.createRef(),SearchInputRef:y.createRef(),SkinTonePickerRef:y.createRef(),VariationPickerRef:y.createRef()});function Ka(){return y.useContext(VI)}function vl(){return Ka().PickerMainRef}function Z1(){return Ka().AnchoredEmojiRef}function zI(){var t=Z1();return function(e){e===null&&t.current!==null&&hn(t.current),t.current=e}}function Tn(){return Ka().BodyRef}function Ui(){return Ka().SearchInputRef}function f3(){return Ka().SkinTonePickerRef}function u3(){return Ka().CategoryNavigationRef}function IF(){return Ka().VariationPickerRef}function SF(){return typeof window>"u"?!1:!!window.matchMedia("(prefers-color-scheme: dark)").matches}function gr(){return gr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},gr.apply(this,arguments)}function CF(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,sm(t,e)}function sm(t,e){return sm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},sm(t,e)}function TF(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,a;for(a=0;a<r.length;a++)i=r[a],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function xF(t,e){if(t){if(typeof t=="string")return n6(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return n6(t,e)}}function n6(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function AF(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=xF(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
        `+l6+" "+Mt(ne.category)+":not(:has("+n+`)) {
        display: none;
      }

        `+l6+" button"+Mt(ne.emoji)+":not("+n+`) {
        display: none;
      }
  `)}function OU(){return y.createElement(oh,{className:"epr-header"},y.createElement(PU,null),y.createElement(RU,null))}function Ou(){return document.activeElement}var He;(function(t){t.ArrowDown="ArrowDown",t.ArrowUp="ArrowUp",t.ArrowLeft="ArrowLeft",t.ArrowRight="ArrowRight",t.Escape="Escape",t.Enter="Enter",t.Space=" "})(He||(He={}));function $U(){FU(),jU(),UU(),VU(),zU()}function FU(){var t=vl(),e=I5(),n=Fj(),r=Ui(),i=Ya(),a=b5(),s=wj(),o=Qa(),f=y.useMemo(function(){return function(l){var c=l.key;switch(s(),c){case He.Escape:if(l.preventDefault(),a()){o();return}e(),n(0),i();break}}},[n,e,o,i,a,s]);y.useEffect(function(){var u=t.current;if(u)return u.addEventListener("keydown",f),function(){u.removeEventListener("keydown",f)}},[t,r,n,f])}function jU(){var t=jj(),e=vl(),n=Tn(),r=Ui(),i=kl(),a=i[1],s=A5(),o=S3(),f=y.useMemo(function(){return function(l){var c=l.key;switch(c){case He.ArrowRight:if(!o)return;l.preventDefault(),a(!0),t();break;case He.ArrowDown:l.preventDefault(),s();break;case He.Enter:l.preventDefault(),rU(n.current);break}}},[t,s,a,n,o]);y.useEffect(function(){var u=r.current;if(u)return u.addEventListener("keydown",f),function(){u.removeEventListener("keydown",f)}},[e,r,f])}function UU(){var t=f3(),e=Ya(),n=Ui(),r=A5(),i=kl(),a=i[0],s=i[1],o=C5(),f=S3(),u=C3(),l=y.useMemo(function(){return function(d){var h=d.key;if(f)switch(h){case He.ArrowLeft:if(d.preventDefault(),!a)return e();c6(e);break;case He.ArrowRight:if(d.preventDefault(),!a)return e();d6();break;case He.ArrowDown:d.preventDefault(),a&&s(!1),r();break;default:u(d);break}if(o)switch(h){case He.ArrowUp:if(d.preventDefault(),!a)return e();c6(e);break;case He.ArrowDown:if(d.preventDefault(),!a)return e();d6();break;default:u(d);break}}},[a,e,s,r,u,o,f]);y.useEffect(function(){var c=t.current;if(c)return c.addEventListener("keydown",l),function(){c.removeEventListener("keydown",l)}},[t,n,a,l])}function VU(){var t=Ya(),e=u3(),n=Tn(),r=C3(),i=y.useMemo(function(){return function(s){var o=s.key;switch(o){case He.ArrowUp:s.preventDefault(),t();break;case He.ArrowRight:s.preventDefault(),jI(Ou());break;case He.ArrowLeft:s.preventDefault(),FI(Ou());break;case He.ArrowDown:s.preventDefault(),sh(n.current);break;default:r(s);break}}},[n,t,r]);y.useEffect(function(){var a=e.current;if(a)return a.addEventListener("keydown",i),function(){a.removeEventListener("keydown",i)}},[e,n,i])}function zU(){var t=Tn(),e=BU(),n=k5(),r=b5(),i=Qa(),a=C3(),s=y.useMemo(function(){return function(f){var u=f.key,l=Vn(Ou());switch(u){case He.ArrowRight:f.preventDefault(),aU(l);break;case He.ArrowLeft:f.preventDefault(),sU(l);break;case He.ArrowDown:if(f.preventDefault(),r()){i();break}fU(l);break;case He.ArrowUp:if(f.preventDefault(),r()){i();break}oU(l,e);break;case He.Space:f.preventDefault(),n(f.target);break;default:a(f);break}}},[e,a,n,r,i]);y.useEffect(function(){var o=t.current;if(o)return o.addEventListener("keydown",s),function(){o.removeEventListener("keydown",s)}},[t,s])}function A5(){var t=_5(),e=fh(),n=Tn();return y.useCallback(function(){return e?sh(n.current):t()},[n,t,e])}function BU(){var t=Ya(),e=_5(),n=fh();return y.useCallback(function(){return n?t():e()},[t,n,e])}function c6(t){var e=Ou();e&&(Cj(e)||t(),jI(e))}function d6(){var t=Ou();t&&FI(t)}function C3(){var t=Vj(),e=Ya(),n=Qa();return function(i){var a=i.key;qU(i)||a.match(/(^[a-zA-Z0-9]$){1}/)&&(i.preventDefault(),n(),e(),t(a))}}function qU(t){var e=t.metaKey,n=t.ctrlKey,r=t.altKey;return e||n||r}function HU(t,e,n){if(e&&n!==ar.NATIVE){var r=Jt(e);h6.has(r)||(eh(e).forEach(function(i){var a=t(i,n);WU(a)}),h6.add(r))}}var h6=new Set;function WU(t){var e=new Image;e.src=t}function GU(){var t=Tn(),e=bl(),n=Ro();y.useEffect(function(){if(e===ar.NATIVE)return;var r=t.current;return r==null||r.addEventListener("focusin",i),function(){r==null||r.removeEventListener("focusin",i)};function i(a){var s=Vn(a.target);if(s){var o=v3(s),f=o[0];f&&wl(f)&&HU(n,f,e)}}},[t,e,n])}var KU="aside.EmojiPickerReact.epr-main{border-color:var(--epr-picker-border-color);border-radius:var(--epr-picker-border-radius);border-style:solid;border-width:1px;display:flex;flex-direction:column;position:relative}";pn(KU);function QU(t){var e=t.children;return y.createElement(gj,null,y.createElement(YU,null,e))}function YU(t){var e,n=t.children,r=oj(),i=fh(),a=vl(),s=lj(),o=s.height,f=s.width;$U(),GU();var u={height:o,width:f};return y.createElement("aside",{className:Yt(ne.emojiPicker,"epr-main",(e={},e[ne.searchActive]=i,e["epr-dark-theme"]=r===ma.DARK,e)),ref:a,style:u},n)}var XU=".EmojiPickerReact{--epr-highlight-color:#007aeb;--epr-hover-bg-color:#f1f8ff;--epr-focus-bg-color:#e0f0ff;--epr-text-color:#858585;--epr-search-input-bg-color:#f6f6f6;--epr-picker-border-color:#e7e7e7;--epr-bg-color:#fff;--epr-category-icon-active-color:#6aa8de;--epr-skin-tone-picker-menu-color:#ffffff95;--epr-horizontal-padding:10px;--epr-picker-border-radius:8px;--epr-search-border-color:var(--epr-highlight-color);--epr-header-padding:15px var(--epr-horizontal-padding);--epr-active-skin-tone-indicator-border-color:var(--epr-highlight-color);--epr-active-skin-hover-color:var(--epr-hover-bg-color);--epr-search-input-bg-color-active:var(--epr-search-input-bg-color);--epr-search-input-padding:0 30px;--epr-search-input-border-radius:8px;--epr-search-input-height:40px;--epr-search-input-text-color:var(--epr-text-color);--epr-search-input-placeholder-color:var(--epr-text-color);--epr-search-bar-inner-padding:var(--epr-horizontal-padding);--epr-category-navigation-button-size:30px;--epr-emoji-variation-picker-height:45px;--epr-emoji-variation-picker-bg-color:var(--epr-bg-color);--epr-preview-height:70px;--epr-preview-text-size:14px;--epr-preview-text-padding:0 var(--epr-horizontal-padding);--epr-preview-border-color:var(--epr-picker-border-color);--epr-preview-text-color:var(--epr-text-color);--epr-category-padding:0 var(--epr-horizontal-padding);--epr-category-label-bg-color:#ffffffe6;--epr-category-label-text-color:var(--epr-text-color);--epr-category-label-padding:0 var(--epr-horizontal-padding);--epr-category-label-height:40px;--epr-emoji-size:30px;--epr-emoji-padding:5px;--epr-emoji-fullsize:calc(var(--epr-emoji-size) + var(--epr-emoji-padding)*2);--epr-emoji-hover-color:var(--epr-hover-bg-color);--epr-emoji-variation-indicator-color:var(--epr-picker-border-color);--epr-emoji-variation-indicator-color-hover:var(--epr-text-color);--epr-header-overlay-z-index:3;--epr-emoji-variations-indictator-z-index:1;--epr-category-label-z-index:2;--epr-skin-variation-picker-z-index:5;--epr-preview-z-index:6}.EmojiPickerReact.epr-dark-theme{--epr-dark:#000;--epr-emoji-variation-picker-bg-color:var(--epr-dark);--epr-highlight-color:silver;--epr-text-color:var(--epr-highlight-color);--epr-hover-bg-color:#363636f6;--epr-focus-bg-color:#474747;--epr-search-input-bg-color:#333;--epr-category-label-bg-color:#222222e6;--epr-picker-border-color:#151617;--epr-bg-color:#222;--epr-search-input-bg-color-active:var(--epr-dark);--epr-emoji-variation-indicator-color:#444;--epr-category-icon-active-color:#3271b7;--epr-skin-tone-picker-menu-color:#22222295}.EmojiPickerReact{background-color:var(--epr-bg-color);overflow:hidden}.EmojiPickerReact .epr-hidden,.EmojiPickerReact.epr-search-active .epr-hidden-on-search,.EmojiPickerReact:not(.epr-search-active) .epr-visible-on-search-only{display:none!important;opacity:0!important;pointer-events:none!important;visibility:hidden!important}aside.EmojiPickerReact.epr-main:has(input:not(:-moz-placeholder-shown)) .epr-hidden-on-search{display:none!important;opacity:0!important;pointer-events:none!important;visibility:hidden!important}aside.EmojiPickerReact.epr-main:has(input:not(:placeholder-shown)) .epr-hidden-on-search{display:none!important;opacity:0!important;pointer-events:none!important;visibility:hidden!important}aside.EmojiPickerReact.epr-main:has(input:-moz-placeholder-shown) .epr-visible-on-search-only{display:none!important;opacity:0!important;pointer-events:none!important;visibility:hidden!important}aside.EmojiPickerReact.epr-main:has(input:placeholder-shown) .epr-visible-on-search-only{display:none!important;opacity:0!important;pointer-events:none!important;visibility:hidden!important}.EmojiPickerReact *{box-sizing:border-box;font-family:sans-serif}.EmojiPickerReact button.epr-btn{background:none;border:0;cursor:pointer;outline:none}";pn(XU);function JU(t){return y.createElement(_F,null,y.createElement(tj,Object.assign({},t),y.createElement(QU,null,y.createElement(OU,null),y.createElement(gU,null),y.createElement(IU,null))))}var ZU=function(t){CF(e,t);function e(r){var i;return i=t.call(this,r)||this,i.state={hasError:!1},i}e.getDerivedStateFromError=function(){return{hasError:!0}};var n=e.prototype;return n.componentDidCatch=function(i,a){console.error("Emoji Picker React failed to render:",i,a)},n.render=function(){return this.state.hasError?null:this.props.children},e}(y.Component);function eV(t){return y.createElement(ZU,null,y.createElement(JU,Object.assign({},t)))}const tV="_active_aem1i_57",nV="_input_aem1i_72",qi={"chat-inputbar":"_chat-inputbar_aem1i_17","clip-button":"_clip-button_aem1i_25","emoji-button":"_emoji-button_aem1i_26","emojipicker-close-button":"_emojipicker-close-button_aem1i_27","emoji-clip-buttons":"_emoji-clip-buttons_aem1i_31",active:tV,input:nV,"send-button":"_send-button_aem1i_104","microphone-button":"_microphone-button_aem1i_108"};function rV({className:t,onClick:e}){return k("svg",{viewBox:"0 0 24 24",height:26,width:26,preserveAspectRatio:"xMidYMid meet",onClick:e,className:t,enableBackground:"new 0 0 24 24",xmlSpace:"preserve",children:k("path",{d:"M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"})})}function iV({className:t,onClick:e}){return k("svg",{onClick:e,viewBox:"0 0 24 24",height:26,width:26,preserveAspectRatio:"xMidYMid meet",className:t,enableBackground:"new 0 0 24 24",xmlSpace:"preserve",children:k("path",{d:`M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,\r
                9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,\r
                14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,\r
                14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,\r
                18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,\r
                9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,\r
                1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z`})})}function aV({className:t}){return k("svg",{viewBox:"0 0 24 24",height:26,width:26,preserveAspectRatio:"xMidYMid meet",className:t,enableBackground:"new 0 0 24 24",xmlSpace:"preserve",children:k("path",{d:`M1.816,15.556v0.002c0,1.502,0.584,2.912,1.646,3.972s2.472,1.647,3.974,1.647 c1.501,0,2.91-0.584,3.972-1.645l9.547-9.548c0.769-0.768,\r
                1.147-1.767,1.058-2.817c-0.079-0.968-0.548-1.927-1.319-2.698 c-1.594-1.592-4.068-1.711-5.517-0.262l-7.916,7.915c-0.881,0.881-0.792,2.25,0.214,3.261c0.959,0.958,\r
                2.423,1.053,3.263,0.215 c0,0,3.817-3.818,5.511-5.512c0.28-0.28,0.267-0.722,0.053-0.936c-0.08-0.08-0.164-0.164-0.244-0.244 c-0.191-0.191-0.567-0.349-0.957,\r
                0.04c-1.699,1.699-5.506,5.506-5.506,5.506c-0.18,0.18-0.635,0.127-0.976-0.214 c-0.098-0.097-0.576-0.613-0.213-0.973l7.915-7.917c0.818-0.817,2.267-0.699,3.23,\r
                0.262c0.5,0.501,0.802,1.1,0.849,1.685 c0.051,0.573-0.156,1.111-0.589,1.543l-9.547,9.549c-0.756,0.757-1.761,1.171-2.829,1.171c-1.07,\r
                0-2.074-0.417-2.83-1.173 c-0.755-0.755-1.172-1.759-1.172-2.828l0,0c0-1.071,0.415-2.076,1.172-2.83c0,0,5.322-5.324,7.209-7.211 c0.157-0.157,0.264-0.579,\r
                0.028-0.814c-0.137-0.137-0.21-0.21-0.342-0.342c-0.2-0.2-0.553-0.263-0.834,0.018 c-1.895,1.895-7.205,7.207-7.205,7.207C2.4,12.645,1.816,14.056,1.816,15.556z`})})}const sV="_input_5a7xz_17",c0={input:sV,"microphone-button":"_microphone-button_5a7xz_50","send-button":"_send-button_5a7xz_55"};function oV({className:t,fill:e,onClick:n}){return k("svg",{onClick:n,style:{fill:e},viewBox:"0 0 24 24",height:24,width:24,preserveAspectRatio:"xMidYMid meet",className:t,enableBackground:"new 0 0 24 24",xmlSpace:"preserve",children:k("path",{d:`M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,\r
                13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,\r
                7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z`})})}function fV({className:t,onClick:e}){return k("svg",{onClick:e,viewBox:"0 0 24 24",className:t,height:24,width:24,preserveAspectRatio:"xMidYMid meet",enableBackground:"new 0 0 24 24",xmlSpace:"preserve",children:k("path",{d:"M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"})})}function uV({closeEmokiPicker:t,emoji:e,user:n,activeChat:r,users:i}){const[a,s]=y.useState(""),[o,f]=y.useState(!1),u=y.useRef();let l=null,c=window.webkitSpeechRecognition||window.SpeechRecognition;c!==void 0&&(l=new c,l.lang="pt-BR"),y.useEffect(()=>{s(a+e.emoji),u.current.innerHTML=a+e.emoji},[e.key]);const d=E=>{if(u.current.children.length>0&&(u.current.innerHTML=E.currentTarget.textContent),u.current.innerHTML.length>=500){const v=u.current.innerHTML.substring(0,500);u.current.innerHTML=v,u.current.blur()}s(E.currentTarget.textContent)},h=()=>{l!==null&&(l.onstart=()=>{f(!0)},l.onend=()=>{f(!1)},l.onresult=E=>{s(E.results[0][0].transcript),u.current.innerHTML=E.results[0][0].transcript},l.start())},m=E=>{E.keyCode==13&&w()},w=async()=>{u.current.innerHTML="",await Ai.sendMessage(r.chatId,n.id,a,i),t(),s("")};return te(Fn,{children:[k("span",{"data-placeholder":"Mensagem",onKeyUp:m,ref:u,className:c0.input,onInput:d,contentEditable:"true","data-max-length":"1"}),a.length>0?k(fV,{onClick:w,className:c0["send-button"]}):k(oV,{onClick:h,fill:o?"red":"",className:c0["microphone-button"]})]})}function lV({user:t,activeChat:e,users:n}){const[r,i]=y.useState(!1),[a,s]=y.useState({emoji:"",key:0}),o=l=>{setTimeout(()=>{let c;do c=Math.random();while(c==a.key);s({emoji:l.emoji,key:c})},20)},f=()=>{i(!0)},u=()=>{i(!1)};return te(Fn,{children:[k(eV,{onEmojiClick:o,width:"100%",height:r?320:0,searchDisabled:!0,skinTonesDisabled:!0,previewConfig:{showPreview:!1}}),k("footer",{className:qi["chat-header"],children:te("footer",{className:qi["chat-inputbar"],children:[te("div",{className:Ln(qi["emoji-clip-buttons"],{[qi.active]:r}),children:[k(rV,{className:qi["emojipicker-close-button"],onClick:u}),k(iV,{className:qi["emoji-button"],onClick:f}),k(aV,{className:qi["clip-button"]})]}),k(uV,{users:n,closeEmokiPicker:u,activeChat:e,user:t,emoji:a})]})})]})}function cV({activeChat:t,user:e}){const[n,r]=y.useState([]);return te("div",{className:dF.chat,children:[k(vF,{activeChat:t}),k(EF,{setUsers:r,activeChat:t,user:e}),k(lV,{users:n,activeChat:t,user:e})]})}function dV({user:t}){const[e,n]=y.useState({});return te(Fn,{children:[k(iF,{user:t,activeChat:e,setActiveChat:n}),te(oF,{children:[e.chatId===void 0&&k(lF,{}),e.chatId!==void 0&&k(cV,{user:t,activeChat:e})]})]})}const hV="_login_1vgf0_17",pV="_heading_1vgf0_39",mV="_body_1vgf0_51",gV="_signin_1vgf0_58",is={login:hV,"login-window":"_login-window_1vgf0_24",heading:pV,body:mV,signin:gV,"facebook-container":"_facebook-container_1vgf0_68"};function vV(){return te("svg",{xmlns:"http://www.w3.org/2000/svg",width:39,height:39,viewBox:"0 0 39 39",children:[k("path",{fill:"#00E676",d:"M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"}),k("path",{fill:"#FFF",d:"M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"})]})}function yV({onReceive:t,setLogingStatus:e}){const n=async()=>{let r=await Ai.fbPopup();r?t(r.user,r.accessToken):alert("Erro!")};return k(Fn,{children:k("div",{className:is.login,children:te("div",{className:is["login-window"],children:[k("header",{children:te("div",{className:is.heading,children:[k(vV,{}),k("span",{children:"Whatsapp Web Clone"})]})}),k("div",{className:is.body,children:te("div",{className:is.signin,children:[k("h3",{children:"Entrar com"}),k("div",{onClick:n,className:is["facebook-container"],children:k("svg",{"aria-label":"Facebook logo",role:"img",viewBox:"0 0 120 24",width:"110",children:k("path",{d:"m109.202 14.864 4.404-7.03h4.746l-4.622 7.278 4.808 7.463h-4.746l-4.59-7.215v7.215h-4.467V.433l4.467-.402v14.833ZM98.596 14.524c0-1.951-.807-3.5-2.885-3.5s-2.885 1.549-2.885 3.5v1.363c0 1.95.807 3.499 2.885 3.499s2.885-1.549 2.885-3.5v-1.362ZM88.36 15.577v-.743c0-4.243 2.42-7.309 7.351-7.309s7.351 3.066 7.351 7.309v.743c0 4.242-2.42 7.308-7.351 7.308-4.932 0-7.351-3.066-7.351-7.308ZM82.406 14.524c0-1.951-.807-3.5-2.884-3.5-2.079 0-2.885 1.549-2.885 3.5v1.363c0 1.95.806 3.499 2.885 3.499 2.077 0 2.884-1.549 2.884-3.5v-1.362Zm-10.235 1.053v-.743c0-4.243 2.419-7.309 7.35-7.309 4.932 0 7.352 3.066 7.352 7.309v.743c0 4.242-2.42 7.308-7.352 7.308-4.931 0-7.35-3.066-7.35-7.308ZM66.216 14.648c0-2.075-.806-3.623-2.946-3.623-1.83 0-2.823 1.3-2.823 3.406v1.548c0 2.106.993 3.407 2.823 3.407 2.14 0 2.946-1.549 2.946-3.623v-1.115Zm4.467 1.022c0 4.118-1.985 7.215-6.08 7.215-2.233 0-3.783-1.115-4.404-2.539v2.23h-4.218V.434L60.447.03v9.848c.651-1.3 2.078-2.354 4.157-2.354 4.094 0 6.079 3.097 6.079 7.216v.929ZM44.723 13.843h5.397v-.372c0-1.61-.651-2.88-2.606-2.88-2.016 0-2.791 1.27-2.791 3.252m-4.466 1.92v-1.301c0-4.18 2.388-6.937 7.257-6.937 4.59 0 6.607 2.787 6.607 6.875v2.353h-9.398c.093 2.014.992 2.912 3.474 2.912 1.675 0 3.443-.341 4.745-.898l.807 3.065c-1.179.62-3.598 1.084-5.738 1.084-5.645 0-7.754-2.818-7.754-7.153M35.388 7.525c1.737 0 3.38.372 4.28.991l-.992 3.159c-.683-.34-1.8-.682-2.978-.682-2.42 0-3.474 1.394-3.474 3.778v.868c0 2.384 1.055 3.778 3.474 3.778 1.179 0 2.295-.34 2.978-.682l.992 3.16c-.9.618-2.543.99-4.28.99-5.242 0-7.63-2.818-7.63-7.34v-.68c0-4.522 2.388-7.34 7.63-7.34M15.973 15.732c0 2.198.806 3.654 2.884 3.654 1.83 0 2.76-1.332 2.76-3.438v-1.486c0-2.106-.93-3.437-2.76-3.437-2.078 0-2.884 1.455-2.884 3.654v1.053Zm-4.467-.991c0-4.119 1.954-7.216 6.049-7.216 2.233 0 3.598 1.146 4.249 2.57v-2.26h4.28v14.74h-4.28v-2.23c-.62 1.425-2.016 2.54-4.25 2.54-4.094 0-6.048-3.097-6.048-7.215v-.93ZM9.274 3.592c-1.396 0-1.8.62-1.8 1.982v2.26h3.723l-.372 3.655h-3.35v11.086H3.009V11.49H0V7.835h3.009V5.636C3.009 1.951 4.497 0 8.654 0c.9 0 1.954.062 2.605.155v3.437H9.274Z"})})})]})}),k("footer",{children:"João Pedro Lima Teixeira ©"})]})})})}function wV(){const[t,e]=y.useState(!1),[n,r]=y.useState(null),i=Jb(t,{from:{opacity:0,scale:0},enter:{opacity:1,scale:1}}),a=async(s,o)=>{let f={id:s.uid,name:s.displayName,avatar:s.photoURL+"?height=500&access_token="+o};Ai.addUser(f),r(f),e(!0)};return k("div",{className:Ln(zh["app-window"],{[zh["not-logged"]]:!t}),children:i((s,o)=>o&&n!==void 0?k(e9.div,{style:s,className:zh.app,children:k(dV,{user:n})}):k(yV,{onReceive:a,setLogingStatus:e}))})}function bV(){return k("div",{className:o7["app-container"],children:k(wV,{})})}d0.createRoot(document.getElementById("app")).render(k(Y5.StrictMode,{children:k(bV,{})}));