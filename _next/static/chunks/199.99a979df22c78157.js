"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[199],{71199:function(e,t,i){i.r(t),i.d(t,{Allotment:function(){return he},setSashSize:function(){return ae}});var s=i(67294);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},n.apply(this,arguments)}var r,o={exports:{}};r=o,function(){var e={}.hasOwnProperty;function t(){for(var i=[],s=0;s<arguments.length;s++){var n=arguments[s];if(n){var r=typeof n;if("string"===r||"number"===r)i.push(n);else if(Array.isArray(n)){if(n.length){var o=t.apply(null,n);o&&i.push(o)}}else if("object"===r)if(n.toString===Object.prototype.toString)for(var a in n)e.call(n,a)&&n[a]&&i.push(a);else i.push(n.toString())}}return i.join(" ")}r.exports?(t.default=t,r.exports=t):window.classNames=t}();var a=o.exports,h=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,m=parseInt,d=Object.prototype.toString;function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function f(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(h,"");var i=u.test(e);return i||c.test(e)?m(e.slice(2),i?2:8):l.test(e)?NaN:+e}var p=function(e,t,i){return void 0===i&&(i=t,t=void 0),void 0!==i&&(i=(i=f(i))==i?i:0),void 0!==t&&(t=(t=f(t))==t?t:0),function(e,t,i){return e==e&&(void 0!==i&&(e=e<=i?e:i),void 0!==t&&(e=e>=t?e:t)),e}(f(e),t,i)},z=function(e,t,i){return e[t]?e[t][0]?e[t][0][i]:e[t][i]:"contentBoxSize"===t?e.contentRect["inlineSize"===i?"width":"height"]:void 0};function b(e){void 0===e&&(e={});var t=e.onResize,i=(0,s.useRef)(void 0);i.current=t;var n=e.round||Math.round,r=(0,s.useRef)(),o=(0,s.useState)({width:void 0,height:void 0}),a=o[0],h=o[1],l=(0,s.useRef)(!1);(0,s.useEffect)((function(){return function(){l.current=!0}}),[]);var u,c,m,d,v,f,p=(0,s.useRef)({width:void 0,height:void 0}),b=(u=(0,s.useCallback)((function(t){return r.current&&r.current.box===e.box&&r.current.round===n||(r.current={box:e.box,round:n,instance:new ResizeObserver((function(t){var s=t[0],r="border-box"===e.box?"borderBoxSize":"device-pixel-content-box"===e.box?"devicePixelContentBoxSize":"contentBoxSize",o=z(s,r,"inlineSize"),a=z(s,r,"blockSize"),u=o?n(o):void 0,c=a?n(a):void 0;if(p.current.width!==u||p.current.height!==c){var m={width:u,height:c};p.current.width=u,p.current.height=c,i.current?i.current(m):l.current||h(m)}}))}),r.current.instance.observe(t,{box:e.box}),function(){r.current&&r.current.instance.unobserve(t)}}),[e.box,n]),c=e.ref,m=(0,s.useRef)(null),d=(0,s.useRef)(null),v=(0,s.useRef)(),f=(0,s.useCallback)((function(){var e=null;m.current?e=m.current:c&&(e=c instanceof HTMLElement?c:c.current),d.current&&d.current.element===e&&d.current.reporter===f||(v.current&&(v.current(),v.current=null),d.current={reporter:f,element:e},e&&(v.current=u(e)))}),[c,u]),(0,s.useEffect)((function(){f()}),[f]),(0,s.useCallback)((function(e){m.current=e,f()}),[f]));return(0,s.useMemo)((function(){return{ref:b,width:a.width,height:a.height}}),[b,a?a.width:null,a?a.height:null])}var w="allotment-module_splitViewView__KtCWc";let S,g=!1,y=!1;"object"==typeof navigator?(S=navigator.userAgent,y=S.indexOf("Macintosh")>=0,g=(S.indexOf("Macintosh")>=0||S.indexOf("iPad")>=0||S.indexOf("iPhone")>=0)&&!!navigator.maxTouchPoints&&navigator.maxTouchPoints>0):console.error("Unable to resolve platform.");const I=g,x=y;var _={exports:{}};!function(e){var t=Object.prototype.hasOwnProperty,i="~";function s(){}function n(e,t,i){this.fn=e,this.context=t,this.once=i||!1}function r(e,t,s,r,o){if("function"!=typeof s)throw new TypeError("The listener must be a function");var a=new n(s,r||e,o),h=i?i+t:t;return e._events[h]?e._events[h].fn?e._events[h]=[e._events[h],a]:e._events[h].push(a):(e._events[h]=a,e._eventsCount++),e}function o(e,t){0==--e._eventsCount?e._events=new s:delete e._events[t]}function a(){this._events=new s,this._eventsCount=0}Object.create&&(s.prototype=Object.create(null),(new s).__proto__||(i=!1)),a.prototype.eventNames=function(){var e,s,n=[];if(0===this._eventsCount)return n;for(s in e=this._events)t.call(e,s)&&n.push(i?s.slice(1):s);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},a.prototype.listeners=function(e){var t=i?i+e:e,s=this._events[t];if(!s)return[];if(s.fn)return[s.fn];for(var n=0,r=s.length,o=new Array(r);n<r;n++)o[n]=s[n].fn;return o},a.prototype.listenerCount=function(e){var t=i?i+e:e,s=this._events[t];return s?s.fn?1:s.length:0},a.prototype.emit=function(e,t,s,n,r,o){var a=i?i+e:e;if(!this._events[a])return!1;var h,l,u=this._events[a],c=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),c){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,s),!0;case 4:return u.fn.call(u.context,t,s,n),!0;case 5:return u.fn.call(u.context,t,s,n,r),!0;case 6:return u.fn.call(u.context,t,s,n,r,o),!0}for(l=1,h=new Array(c-1);l<c;l++)h[l-1]=arguments[l];u.fn.apply(u.context,h)}else{var m,d=u.length;for(l=0;l<d;l++)switch(u[l].once&&this.removeListener(e,u[l].fn,void 0,!0),c){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,t);break;case 3:u[l].fn.call(u[l].context,t,s);break;case 4:u[l].fn.call(u[l].context,t,s,n);break;default:if(!h)for(m=1,h=new Array(c-1);m<c;m++)h[m-1]=arguments[m];u[l].fn.apply(u[l].context,h)}}return!0},a.prototype.on=function(e,t,i){return r(this,e,t,i,!1)},a.prototype.once=function(e,t,i){return r(this,e,t,i,!0)},a.prototype.removeListener=function(e,t,s,n){var r=i?i+e:e;if(!this._events[r])return this;if(!t)return o(this,r),this;var a=this._events[r];if(a.fn)a.fn!==t||n&&!a.once||s&&a.context!==s||o(this,r);else{for(var h=0,l=[],u=a.length;h<u;h++)(a[h].fn!==t||n&&!a[h].once||s&&a[h].context!==s)&&l.push(a[h]);l.length?this._events[r]=1===l.length?l[0]:l:o(this,r)}return this},a.prototype.removeAllListeners=function(e){var t;return e?(t=i?i+e:e,this._events[t]&&o(this,t)):(this._events=new s,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=i,a.EventEmitter=a,e.exports=a}(_);var E=_.exports,V="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof i.g?i.g:"undefined"!=typeof self?self:{},M=/^\s+|\s+$/g,L=/^[-+]0x[0-9a-f]+$/i,N=/^0b[01]+$/i,P=/^0o[0-7]+$/i,C=parseInt,O="object"==typeof V&&V&&V.Object===Object&&V,D="object"==typeof self&&self&&self.Object===Object&&self,T=O||D||Function("return this")(),A=Object.prototype.toString,j=Math.max,R=Math.min,k=function(){return T.Date.now()};function F(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function H(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==A.call(e)}(e))return NaN;if(F(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=F(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(M,"");var i=N.test(e);return i||P.test(e)?C(e.slice(2),i?2:8):L.test(e)?NaN:+e}var Y="sash-module_vertical__2Jemx",$="sash-module_horizontal__3-k3E",X="sash-module_hover__119X7",B="sash-module_active__FozP9";let G,W;!function(e){e.Vertical="VERTICAL",e.Horizontal="HORIZONTAL"}(G||(G={})),function(e){e.Disabled="DISABLED",e.Minimum="MINIMUM",e.Maximum="MAXIMUM",e.Enabled="ENABLED"}(W||(W={}));let K=I?20:8;const U=new E;class J extends E{get state(){return this._state}set state(e){this._state!==e&&(this.el.classList.toggle("sash-module_disabled__2MKAD",e===W.Disabled),this.el.classList.toggle("sash-module_minimum__2FeMz",e===W.Minimum),this.el.classList.toggle("sash-module_maximum__3xrwG",e===W.Maximum),this._state=e,this.emit("enablementChange",e))}constructor(e,t,i){var s;super(),this.el=void 0,this.layoutProvider=void 0,this.orientation=void 0,this.size=void 0,this.hoverDelay=300,this.hoverDelayer=function(e,t,i){var s,n,r,o,a,h,l=0,u=!1,c=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function d(t){var i=s,r=n;return s=n=void 0,l=t,o=e.apply(r,i)}function v(e){return l=e,a=setTimeout(p,t),u?d(e):o}function f(e){var i=e-h;return void 0===h||i>=t||i<0||c&&e-l>=r}function p(){var e=k();if(f(e))return z(e);a=setTimeout(p,function(e){var i=t-(e-h);return c?R(i,r-(e-l)):i}(e))}function z(e){return a=void 0,m&&s?d(e):(s=n=void 0,o)}function b(){var e=k(),i=f(e);if(s=arguments,n=this,h=e,i){if(void 0===a)return v(h);if(c)return a=setTimeout(p,t),d(h)}return void 0===a&&(a=setTimeout(p,t)),o}return t=H(t)||0,F(i)&&(u=!!i.leading,r=(c="maxWait"in i)?j(H(i.maxWait)||0,t):r,m="trailing"in i?!!i.trailing:m),b.cancel=function(){void 0!==a&&clearTimeout(a),l=0,s=h=n=a=void 0},b.flush=function(){return void 0===a?o:z(k())},b}((e=>e.classList.add(X)),this.hoverDelay),this._state=W.Enabled,this.onPointerStart=e=>{const t=e.pageX,i=e.pageY,s={startX:t,currentX:t,startY:i,currentY:i};this.el.classList.add(B),this.emit("start",s),this.el.setPointerCapture(e.pointerId);const n=e=>{e.preventDefault();const s={startX:t,currentX:e.pageX,startY:i,currentY:e.pageY};this.emit("change",s)},r=e=>{e.preventDefault(),this.el.classList.remove(B),this.hoverDelayer.cancel(),this.emit("end"),this.el.releasePointerCapture(e.pointerId),window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",r)};window.addEventListener("pointermove",n),window.addEventListener("pointerup",r)},this.onPointerDoublePress=()=>{this.emit("reset")},this.onMouseEnter=()=>{this.el.classList.contains(B)?(this.hoverDelayer.cancel(),this.el.classList.add(X)):this.hoverDelayer(this.el)},this.onMouseLeave=()=>{this.hoverDelayer.cancel(),this.el.classList.remove(X)},this.el=document.createElement("div"),this.el.classList.add("sash-module_sash__eG8e7"),this.el.dataset.testid="sash",e.append(this.el),x&&this.el.classList.add("sash-module_mac__2RGfI"),this.el.addEventListener("pointerdown",this.onPointerStart),this.el.addEventListener("dblclick",this.onPointerDoublePress),this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("mouseleave",this.onMouseLeave),"number"==typeof i.size?(this.size=i.size,i.orientation===G.Vertical?this.el.style.width=`${this.size}px`:this.el.style.height=`${this.size}px`):(this.size=K,U.on("onDidChangeGlobalSize",(e=>{this.size=e,this.layout()}))),this.layoutProvider=t,this.orientation=null!=(s=i.orientation)?s:G.Vertical,this.orientation===G.Horizontal?(this.el.classList.add($),this.el.classList.remove(Y)):(this.el.classList.remove($),this.el.classList.add(Y)),this.layout()}layout(){if(this.orientation===G.Vertical){const e=this.layoutProvider;this.el.style.left=e.getVerticalSashLeft(this)-this.size/2+"px",e.getVerticalSashTop&&(this.el.style.top=e.getVerticalSashTop(this)+"px"),e.getVerticalSashHeight&&(this.el.style.height=e.getVerticalSashHeight(this)+"px")}else{const e=this.layoutProvider;this.el.style.top=e.getHorizontalSashTop(this)-this.size/2+"px",e.getHorizontalSashLeft&&(this.el.style.left=e.getHorizontalSashLeft(this)+"px"),e.getHorizontalSashWidth&&(this.el.style.width=e.getHorizontalSashWidth(this)+"px")}}dispose(){this.el.removeEventListener("pointerdown",this.onPointerStart),this.el.removeEventListener("dblclick",this.onPointerDoublePress),this.el.removeEventListener("mouseenter",this.onMouseEnter),this.el.removeEventListener("mouseleave",(()=>this.onMouseLeave)),this.el.remove()}}function Q(e,t,i=1){const s=Math.max(0,Math.ceil((t-e)/i)),n=new Array(s);let r=-1;for(;++r<s;)n[r]=e+r*i;return n}let Z;var q;(q=Z||(Z={})).Distribute={type:"distribute"},q.Split=function(e){return{type:"split",index:e}},q.Invisible=function(e){return{type:"invisible",cachedVisibleSize:e}};class ee{constructor(e,t,i){this.container=void 0,this.view=void 0,this._size=void 0,this._cachedVisibleSize=void 0,this.container=e,this.view=t,this.container.classList.add(w),this.container.dataset.testid="split-view-view","number"==typeof i?(this._size=i,this._cachedVisibleSize=void 0,e.classList.add("allotment-module_visible__phJMN")):(this._size=0,this._cachedVisibleSize=i.cachedVisibleSize)}set size(e){this._size=e}get size(){return this._size}get snap(){return!!this.view.snap}get cachedVisibleSize(){return this._cachedVisibleSize}get visible(){return void 0===this._cachedVisibleSize}setVisible(e,t){e!==this.visible&&(e?(this.size=p(this._cachedVisibleSize,this.viewMinimumSize,this.viewMaximumSize),this._cachedVisibleSize=void 0):(this._cachedVisibleSize="number"==typeof t?t:this.size,this.size=0),this.container.classList.toggle("visible",e),this.view.setVisible&&this.view.setVisible(e))}get minimumSize(){return this.visible?this.view.minimumSize:0}get viewMinimumSize(){return this.view.minimumSize}get maximumSize(){return this.visible?this.view.maximumSize:0}get viewMaximumSize(){return this.view.maximumSize}set enabled(e){this.container.style.pointerEvents=e?"":"none"}layout(e){this.layoutContainer(e),this.view.layout(this.size,e)}}class te extends ee{layoutContainer(e){this.container.style.left=`${e}px`,this.container.style.width=`${this.size}px`}}class ie extends ee{layoutContainer(e){this.container.style.top=`${e}px`,this.container.style.height=`${this.size}px`}}class se extends E{get startSnappingEnabled(){return this._startSnappingEnabled}set startSnappingEnabled(e){this._startSnappingEnabled!==e&&(this._startSnappingEnabled=e,this.updateSashEnablement())}get endSnappingEnabled(){return this._endSnappingEnabled}set endSnappingEnabled(e){this._endSnappingEnabled!==e&&(this._endSnappingEnabled=e,this.updateSashEnablement())}constructor(e,t={},i){var s,n;if(super(),this.orientation=void 0,this.sashContainer=void 0,this.size=0,this.contentSize=0,this.proportions=void 0,this.viewItems=[],this.sashItems=[],this.sashDragState=void 0,this.proportionalLayout=void 0,this.getSashOrthogonalSize=void 0,this.onDidChange=void 0,this._startSnappingEnabled=!0,this._endSnappingEnabled=!0,this.onSashEnd=e=>{this.saveProportions();for(const t of this.viewItems)t.enabled=!0},this.orientation=null!=(s=t.orientation)?s:G.Vertical,this.proportionalLayout=null==(n=t.proportionalLayout)||n,this.getSashOrthogonalSize=t.getSashOrthogonalSize,i&&(this.onDidChange=i),this.sashContainer=document.createElement("div"),this.sashContainer.classList.add("allotment-module_sashContainer__18Sm8"),e.prepend(this.sashContainer),t.descriptor){this.size=t.descriptor.size;for(const[e,i]of t.descriptor.views.entries()){const t=i.size,s=i.container,n=i.view;this.addView(s,n,t,e,!0)}this.contentSize=this.viewItems.reduce(((e,t)=>e+t.size),0),this.saveProportions()}}addView(e,t,i,s=this.viewItems.length,n){let r;r="number"==typeof i?i:"split"===i.type?this.getViewSize(i.index)/2:"invisible"===i.type?{cachedVisibleSize:i.cachedVisibleSize}:t.minimumSize;const o=this.orientation===G.Vertical?new ie(e,t,r):new te(e,t,r);if(this.viewItems.splice(s,0,o),this.viewItems.length>1){const e=this.orientation===G.Vertical?new J(this.sashContainer,{getHorizontalSashTop:e=>this.getSashPosition(e),getHorizontalSashWidth:this.getSashOrthogonalSize},{orientation:G.Horizontal}):new J(this.sashContainer,{getVerticalSashLeft:e=>this.getSashPosition(e),getVerticalSashHeight:this.getSashOrthogonalSize},{orientation:G.Vertical}),t=this.orientation===G.Vertical?t=>({sash:e,start:t.startY,current:t.currentY}):t=>({sash:e,start:t.startX,current:t.currentX});e.on("start",(e=>this.onSashStart(t(e)))),e.on("change",(e=>this.onSashChange(t(e)))),e.on("end",this.onSashEnd),e.on("reset",(()=>{const t=this.sashItems.findIndex((t=>t.sash===e)),i=Q(t,-1,-1),s=Q(t+1,this.viewItems.length),n=this.findFirstSnapIndex(i),r=this.findFirstSnapIndex(s);("number"!=typeof n||this.viewItems[n].visible)&&("number"!=typeof r||this.viewItems[r].visible)&&this.emit("sashreset",t)}));const i={sash:e};this.sashItems.splice(s-1,0,i)}n||this.relayout(),n||"number"==typeof i||"distribute"!==i.type||this.distributeViewSizes()}removeView(e,t){if(e<0||e>=this.viewItems.length)throw new Error("Index out of bounds");const i=this.viewItems.splice(e,1)[0].view;if(this.viewItems.length>=1){const t=Math.max(e-1,0);this.sashItems.splice(t,1)[0].sash.dispose()}return this.relayout(),t&&"distribute"===t.type&&this.distributeViewSizes(),i}layout(e){const t=Math.max(this.size,this.contentSize);if(this.size=e,this.proportions)for(let i=0;i<this.viewItems.length;i++){const t=this.viewItems[i];t.size=p(Math.round(this.proportions[i]*e),t.minimumSize,t.maximumSize)}else this.resize(this.viewItems.length-1,e-t,void 0);this.distributeEmptySpace(),this.layoutViews()}resizeView(e,t){if(e<0||e>=this.viewItems.length)return;const i=this.viewItems[e];t=Math.round(t),t=p(t,i.minimumSize,Math.min(i.maximumSize,this.size)),i.size=t,this.relayout()}resizeViews(e){for(let t=0;t<e.length;t++){const i=this.viewItems[t];let s=e[t];s=Math.round(s),s=p(s,i.minimumSize,Math.min(i.maximumSize,this.size)),i.size=s}this.contentSize=this.viewItems.reduce(((e,t)=>e+t.size),0),this.saveProportions(),this.layout(this.size)}getViewSize(e){return e<0||e>=this.viewItems.length?-1:this.viewItems[e].size}isViewVisible(e){if(e<0||e>=this.viewItems.length)throw new Error("Index out of bounds");return this.viewItems[e].visible}setViewVisible(e,t){if(e<0||e>=this.viewItems.length)throw new Error("Index out of bounds");this.viewItems[e].setVisible(t),this.distributeEmptySpace(e),this.layoutViews(),this.saveProportions()}distributeViewSizes(){const e=[];let t=0;for(const s of this.viewItems)s.maximumSize-s.minimumSize>0&&(e.push(s),t+=s.size);const i=Math.floor(t/e.length);for(const s of e)s.size=p(i,s.minimumSize,s.maximumSize);this.relayout()}dispose(){this.sashItems.forEach((e=>e.sash.dispose())),this.sashItems=[],this.sashContainer.remove()}relayout(){const e=this.viewItems.reduce(((e,t)=>e+t.size),0);this.resize(this.viewItems.length-1,this.size-e,void 0),this.distributeEmptySpace(),this.layoutViews(),this.saveProportions()}onSashStart({sash:e,start:t}){const i=this.sashItems.findIndex((t=>t.sash===e));(e=>{const t=this.viewItems.map((e=>e.size));let s,n,r=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY;const a=Q(i,-1,-1),h=Q(i+1,this.viewItems.length),l=a.reduce(((e,i)=>e+(this.viewItems[i].minimumSize-t[i])),0),u=a.reduce(((e,i)=>e+(this.viewItems[i].viewMaximumSize-t[i])),0),c=0===h.length?Number.POSITIVE_INFINITY:h.reduce(((e,i)=>e+(t[i]-this.viewItems[i].minimumSize)),0),m=0===h.length?Number.NEGATIVE_INFINITY:h.reduce(((e,i)=>e+(t[i]-this.viewItems[i].viewMaximumSize)),0);r=Math.max(l,m),o=Math.min(c,u);const d=this.findFirstSnapIndex(a),v=this.findFirstSnapIndex(h);if("number"==typeof d){const e=this.viewItems[d],t=Math.floor(e.viewMinimumSize/2);s={index:d,limitDelta:e.visible?r-t:r+t,size:e.size}}if("number"==typeof v){const e=this.viewItems[v],t=Math.floor(e.viewMinimumSize/2);n={index:v,limitDelta:e.visible?o+t:o-t,size:e.size}}this.sashDragState={start:e,current:e,index:i,sizes:t,minDelta:r,maxDelta:o,snapBefore:s,snapAfter:n}})(t)}onSashChange({current:e}){const{index:t,start:i,sizes:s,minDelta:n,maxDelta:r,snapBefore:o,snapAfter:a}=this.sashDragState;this.sashDragState.current=e;const h=e-i;this.resize(t,h,s,n,r,o,a),this.distributeEmptySpace(),this.layoutViews()}getSashPosition(e){let t=0;for(let i=0;i<this.sashItems.length;i++)if(t+=this.viewItems[i].size,this.sashItems[i].sash===e)return t;return 0}resize(e,t,i=this.viewItems.map((e=>e.size)),s=Number.NEGATIVE_INFINITY,n=Number.POSITIVE_INFINITY,r,o){if(e<0||e>=this.viewItems.length)return 0;const a=Q(e,-1,-1),h=Q(e+1,this.viewItems.length),l=a.map((e=>this.viewItems[e])),u=a.map((e=>i[e])),c=h.map((e=>this.viewItems[e])),m=h.map((e=>i[e])),d=a.reduce(((e,t)=>e+(this.viewItems[t].minimumSize-i[t])),0),v=a.reduce(((e,t)=>e+(this.viewItems[t].maximumSize-i[t])),0),f=0===h.length?Number.POSITIVE_INFINITY:h.reduce(((e,t)=>e+(i[t]-this.viewItems[t].minimumSize)),0),z=0===h.length?Number.NEGATIVE_INFINITY:h.reduce(((e,t)=>e+(i[t]-this.viewItems[t].maximumSize)),0),b=Math.max(d,z,s),w=Math.min(f,v,n);let S=!1;if(r){const e=this.viewItems[r.index],i=t>=r.limitDelta;S=i!==e.visible,e.setVisible(i,r.size)}if(!S&&o){const e=this.viewItems[o.index],i=t<o.limitDelta;S=i!==e.visible,e.setVisible(i,o.size)}if(S)return this.resize(e,t,i,s,n);for(let g=0,y=t=p(t,b,w);g<l.length;g++){const e=l[g],t=p(u[g]+y,e.minimumSize,e.maximumSize);y-=t-u[g],e.size=t}for(let g=0,y=t;g<c.length;g++){const e=c[g],t=p(m[g]-y,e.minimumSize,e.maximumSize);y+=t-m[g],e.size=t}return t}distributeEmptySpace(e){const t=this.viewItems.reduce(((e,t)=>e+t.size),0);let i=this.size-t;const s=Q(this.viewItems.length-1,-1,-1);"number"==typeof e&&function(e,t){const i=e.indexOf(t);i>-1&&(e.splice(i,1),e.push(t))}(s,e);for(let n=0;0!==i&&n<s.length;n++){const e=this.viewItems[s[n]],t=p(e.size+i,e.minimumSize,e.maximumSize);i-=t-e.size,e.size=t}}layoutViews(){var e;this.contentSize=this.viewItems.reduce(((e,t)=>e+t.size),0);let t=0;for(const i of this.viewItems)i.layout(t),t+=i.size;null==(e=this.onDidChange)||e.call(this,this.viewItems.map((e=>e.size))),this.sashItems.forEach((e=>e.sash.layout())),this.updateSashEnablement()}saveProportions(){this.proportionalLayout&&this.contentSize>0&&(this.proportions=this.viewItems.map((e=>e.size/this.contentSize)))}updateSashEnablement(){let e=!1;const t=this.viewItems.map((t=>e=t.size-t.minimumSize>0||e));e=!1;const i=this.viewItems.map((t=>e=t.maximumSize-t.size>0||e)),s=[...this.viewItems].reverse();e=!1;const n=s.map((t=>e=t.size-t.minimumSize>0||e)).reverse();e=!1;const r=s.map((t=>e=t.maximumSize-t.size>0||e)).reverse();let o=0;for(let a=0;a<this.sashItems.length;a++){const{sash:e}=this.sashItems[a];o+=this.viewItems[a].size;const s=!(t[a]&&r[a+1]),h=!(i[a]&&n[a+1]);if(s&&h){const i=Q(a,-1,-1),s=Q(a+1,this.viewItems.length),r=this.findFirstSnapIndex(i),h=this.findFirstSnapIndex(s),l="number"==typeof r&&!this.viewItems[r].visible,u="number"==typeof h&&!this.viewItems[h].visible;l&&n[a]&&(o>0||this.startSnappingEnabled)?e.state=W.Minimum:u&&t[a]&&(o<this.contentSize||this.endSnappingEnabled)?e.state=W.Maximum:e.state=W.Disabled}else e.state=s&&!h?W.Minimum:!s&&h?W.Maximum:W.Enabled}}findFirstSnapIndex(e){for(const t of e){const e=this.viewItems[t];if(e.visible&&e.snap)return t}for(const t of e){const e=this.viewItems[t];if(e.visible&&e.maximumSize-e.minimumSize>0)return;if(!e.visible&&e.snap)return t}}}function ne(e){return void 0!==e.visible}const re=(0,s.forwardRef)((({className:e,children:t},i)=>s.createElement("div",{ref:i,className:a(w,e)},t)));re.displayName="Allotment.Pane";const oe=(0,s.forwardRef)((({children:e,maxSize:t=1/0,minSize:i=30,sizes:r,defaultSizes:o=r,snap:h=!1,vertical:l=!1,onChange:u,onReset:c},m)=>{const d=(0,s.useRef)(null),v=(0,s.useRef)([]),f=(0,s.useRef)(new Map),p=(0,s.useRef)(null),z=(0,s.useRef)(new Map),w=(0,s.useMemo)((()=>s.Children.toArray(e).filter(s.isValidElement)),[e]);return(0,s.useImperativeHandle)(m,(()=>({reset:()=>{var e;null==(e=p.current)||e.distributeViewSizes()},resize:e=>{var t;null==(t=p.current)||t.resizeViews(e)}}))),(0,s.useLayoutEffect)((()=>{let e=!0;o&&z.current.size!==o.length&&(e=!1,console.warn(`Expected ${o.length} children based on defaultSizes but found ${z.current.size}`)),e&&o&&(v.current=w.map((e=>e.key)));const s=n({orientation:l?G.Vertical:G.Horizontal},e&&o&&{descriptor:{size:o.reduce(((e,t)=>e+t),0),views:o.map(((e,s)=>({container:[...z.current.values()][s],size:e,view:{element:document.createElement("div"),minimumSize:i,maximumSize:t,snap:h,layout:()=>{}}})))}});p.current=new se(d.current,s,u),p.current.on("sashreset",(e=>{var t;c?c():null==(t=p.current)||t.distributeViewSizes()}));const r=p.current;return()=>{r.dispose()}}),[]),(0,s.useEffect)((()=>{const e=w.map((e=>e.key)),s=e.filter((e=>!v.current.includes(e))),n=e.filter((e=>v.current.includes(e))),r=v.current.map((t=>!e.includes(t)));r.forEach(((e,t)=>{var i;e&&(null==(i=p.current)||i.removeView(t))}));for(const d of s){var o,a,l,u;const s=f.current.get(d);null==(o=p.current)||o.addView(z.current.get(d),{element:document.createElement("div"),minimumSize:null!=(a=null==s?void 0:s.minSize)?a:i,maximumSize:null!=(l=null==s?void 0:s.maxSize)?l:t,snap:null!=(u=null==s?void 0:s.snap)?u:h,layout:()=>{}},Z.Distribute,e.findIndex((e=>e===d)))}for(const t of n){const i=f.current.get(t),s=e.findIndex((e=>e===t));if(i&&ne(i)&&void 0!==i.visible){var c,m;if((null==(c=p.current)?void 0:c.isViewVisible(s))===i.visible)return;null==(m=p.current)||m.setViewVisible(s,i.visible)}}(s.length>0||r.length>0)&&(v.current=e)}),[w,t,i,h]),b({ref:d,onResize:({width:e,height:t})=>{var i;e&&t&&(null==(i=p.current)||i.layout(l?t:e))}}),(0,s.useEffect)((()=>{I&&ae(20)}),[]),s.createElement("div",{ref:d,className:a("allotment-module_splitView__1rmCV",l?"allotment-module_vertical__1ACDd":"allotment-module_horizontal__Tf6PK","allotment-module_separatorBorder__3xs3c")},s.createElement("div",{className:"allotment-module_splitViewContainer__1ugsQ"},s.Children.toArray(e).map(((e,t)=>{if(!s.isValidElement(e))return null;const i=e.key;return"Allotment.Pane"===e.type.displayName?(f.current.set(i,e.props),s.cloneElement(e,{key:i,ref:e=>{e?z.current.set(i,e):z.current.delete(i)}})):s.createElement(re,{key:i,ref:e=>{e?z.current.set(i,e):z.current.delete(i)}},e)}))))}));function ae(e){const t=p(e,4,20),i=p(e,1,8);document.documentElement.style.setProperty("--sash-size",t+"px"),document.documentElement.style.setProperty("--sash-hover-size",i+"px"),function(e){K=e,U.emit("onDidChangeGlobalSize",e)}(t)}oe.displayName="Allotment";var he=Object.assign(oe,{Pane:re})}}]);