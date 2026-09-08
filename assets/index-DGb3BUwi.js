(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}})();var be=globalThis,He=be.ShadowRoot&&(be.ShadyCSS===void 0||be.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,We=Symbol(),it=new WeakMap,jt=class{constructor(e,t,a){if(this.ut=!0,a!==We)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(He&&e===void 0){let a=t!==void 0&&t.length===1;a&&(e=it.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&it.set(t,e))}return e}toString(){return this.cssText}},ca=e=>new jt(typeof e=="string"?e:e+"",void 0,We),Ut=(e,...t)=>{let a=e.length===1?e[0]:t.reduce((s,i,r)=>s+(n=>{if(n.ut===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]);return new jt(a,e,We)},pa=(e,t)=>{if(He)e.adoptedStyleSheets=t.map(a=>a instanceof CSSStyleSheet?a:a.styleSheet);else for(let a of t){let s=document.createElement("style"),i=be.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=a.cssText,e.appendChild(s)}},rt=He?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let a="";for(let s of t.cssRules)a+=s.cssText;return ca(a)})(e):e,{is:ma,defineProperty:ua,getOwnPropertyDescriptor:ha,getOwnPropertyNames:ya,getOwnPropertySymbols:ba,getPrototypeOf:fa}=Object,ae=globalThis,nt=ae.trustedTypes,ga=nt?nt.emptyScript:"",Ie=ae.reactiveElementPolyfillSupport,pe=(e,t)=>e,Ne={toAttribute(e,t){switch(t){case Boolean:e=e?ga:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let a=e;switch(t){case Boolean:a=e!==null;break;case Number:a=e===null?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch{a=null}}return a}},Ft=(e,t)=>!ma(e,t),lt={attribute:!0,type:String,converter:Ne,reflect:!1,useDefault:!1,hasChanged:Ft};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ae.litPropertyMetadata??(ae.litPropertyMetadata=new WeakMap);var Z=class extends HTMLElement{static addInitializer(e){this.g(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this.d&&[...this.d.keys()]}static createProperty(e,t=lt){if(t.state&&(t.attribute=!1),this.g(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let a=Symbol(),s=this.getPropertyDescriptor(e,a,t);s!==void 0&&ua(this.prototype,e,s)}}static getPropertyDescriptor(e,t,a){let{get:s,set:i}=ha(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:s,set(r){let n=s==null?void 0:s.call(this);i==null||i.call(this,r),this.requestUpdate(e,n,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??lt}static g(){if(this.hasOwnProperty(pe("elementProperties")))return;let e=fa(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(pe("finalized")))return;if(this.finalized=!0,this.g(),this.hasOwnProperty(pe("properties"))){let t=this.properties,a=[...ya(t),...ba(t)];for(let s of a)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[a,s]of t)this.elementProperties.set(a,s)}this.d=new Map;for(let[t,a]of this.elementProperties){let s=this.f(t,a);s!==void 0&&this.d.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let a=new Set(e.flat(1/0).reverse());for(let s of a)t.unshift(rt(s))}else e!==void 0&&t.push(rt(e));return t}static f(e,t){let a=t.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this.b=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.s=null,this.K()}K(){var e;this.v=new Promise(t=>this.enableUpdating=t),this.i=new Map,this.Z(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var a;var t;(this[t="r"]??(this[t]=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((a=e.hostConnected)==null||a.call(e))}removeController(e){var t;(t=this.r)==null||t.delete(e)}Z(){let e=new Map,t=this.constructor.elementProperties;for(let a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this.b=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pa(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this.r)==null||e.forEach(t=>{var a;return(a=t.hostConnected)==null?void 0:a.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this.r)==null||e.forEach(t=>{var a;return(a=t.hostDisconnected)==null?void 0:a.call(t)})}attributeChangedCallback(e,t,a){this._(e,a)}G(e,t){var i;let a=this.constructor.elementProperties.get(e),s=this.constructor.f(e,a);if(s!==void 0&&a.reflect===!0){let r=(((i=a.converter)==null?void 0:i.toAttribute)!==void 0?a.converter:Ne).toAttribute(t,a.type);this.s=e,r==null?this.removeAttribute(s):this.setAttribute(s,r),this.s=null}}_(e,t){var i,r;let a=this.constructor,s=a.d.get(e);if(s!==void 0&&this.s!==s){let n=a.getPropertyOptions(s),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)==null?void 0:i.fromAttribute)!==void 0?n.converter:Ne;this.s=s;let o=l.fromAttribute(t,n.type);this[s]=o??((r=this.m)==null?void 0:r.get(s))??o,this.s=null}}requestUpdate(e,t,a){var s;if(e!==void 0){let i=this.constructor,r=this[e];if(a??(a=i.getPropertyOptions(e)),!((a.hasChanged??Ft)(r,t)||a.useDefault&&a.reflect&&r===((s=this.m)==null?void 0:s.get(e))&&!this.hasAttribute(i.f(e,a))))return;this.C(e,t,a)}this.isUpdatePending===!1&&(this.v=this.Q())}C(e,t,{useDefault:a,reflect:s,wrapped:i},r){var n,l;a&&!(this[n="m"]??(this[n]=new Map)).has(e)&&(this.m.set(e,r??t??this[e]),i!==!0||r!==void 0)||(this.i.has(e)||(this.hasUpdated||a||(t=void 0),this.i.set(e,t)),s===!0&&this.s!==e&&(this[l="y"]??(this[l]=new Set)).add(e))}async Q(){this.isUpdatePending=!0;try{await this.v}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var a;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.b){for(let[i,r]of this.b)this[i]=r;this.b=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,r]of s){let{wrapped:n}=r,l=this[i];n!==!0||this.i.has(i)||l===void 0||this.C(i,void 0,r,l)}}let e=!1,t=this.i;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(a=this.r)==null||a.forEach(s=>{var i;return(i=s.hostUpdate)==null?void 0:i.call(s)}),this.update(t)):this.w()}catch(s){throw e=!1,this.w(),s}e&&this.tt(t)}willUpdate(e){}tt(e){var t;(t=this.r)==null||t.forEach(a=>{var s;return(s=a.hostUpdated)==null?void 0:s.call(a)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}w(){this.i=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.v}shouldUpdate(e){return!0}update(e){var t;this[t="y"]&&(this[t]=this.y.forEach(a=>this.G(a,this[a]))),this.w()}updated(e){}firstUpdated(e){}};Z.elementStyles=[],Z.shadowRootOptions={mode:"open"},Z[pe("elementProperties")]=new Map,Z[pe("finalized")]=new Map,Ie==null||Ie({ReactiveElement:Z}),(ae.reactiveElementVersions??(ae.reactiveElementVersions=[])).push("2.1.1");var ge=globalThis,ve=ge.trustedTypes,ot=ve?ve.createPolicy("lit-html",{createHTML:e=>e}):void 0,Yt="$lit$",F=`lit$${Math.random().toFixed(9).slice(2)}$`,Vt="?"+F,va=`<${Vt}>`,G=document,ue=()=>G.createComment(""),he=e=>e===null||typeof e!="object"&&typeof e!="function",Je=Array.isArray,_a=e=>Je(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Ae=`[ 	
\f\r]`,oe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dt=/-->/g,ct=/>/g,W=RegExp(`>|${Ae}(?:([^\\s"'>=/]+)(${Ae}*=${Ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pt=/'/g,mt=/"/g,Ht=/^(?:script|style|textarea|title)$/i,wa=e=>(t,...a)=>({et:e,strings:t,values:a}),w=wa(1),se=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),ut=new WeakMap,X=G.createTreeWalker(G,129);function Wt(e,t){if(!Je(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ot!==void 0?ot.createHTML(t):t}var ka=(e,t)=>{let a=e.length-1,s=[],i,r=t===2?"<svg>":t===3?"<math>":"",n=oe;for(let l=0;l<a;l++){let o=e[l],p,m,c=-1,d=0;for(;d<o.length&&(n.lastIndex=d,m=n.exec(o),m!==null);)d=n.lastIndex,n===oe?m[1]==="!--"?n=dt:m[1]!==void 0?n=ct:m[2]!==void 0?(Ht.test(m[2])&&(i=RegExp("</"+m[2],"g")),n=W):m[3]!==void 0&&(n=W):n===W?m[0]===">"?(n=i??oe,c=-1):m[1]===void 0?c=-2:(c=n.lastIndex-m[2].length,p=m[1],n=m[3]===void 0?W:m[3]==='"'?mt:pt):n===mt||n===pt?n=W:n===dt||n===ct?n=oe:(n=W,i=void 0);let u=n===W&&e[l+1].startsWith("/>")?" ":"";r+=n===oe?o+va:c>=0?(s.push(p),o.slice(0,c)+Yt+o.slice(c)+F+u):o+F+(c===-2?l:u)}return[Wt(e,r+(e[a]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},Re=class Jt{constructor({strings:t,et:a},s){let i;this.parts=[];let r=0,n=0,l=t.length-1,o=this.parts,[p,m]=ka(t,a);if(this.el=Jt.createElement(p,s),X.currentNode=this.el.content,a===2||a===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=X.nextNode())!==null&&o.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let c of i.getAttributeNames())if(c.endsWith(Yt)){let d=m[n++],u=i.getAttribute(c).split(F),y=/([.?@])?(.*)/.exec(d);o.push({type:1,index:r,name:y[2],strings:u,ctor:y[1]==="."?Sa:y[1]==="?"?xa:y[1]==="@"?Ca:Se}),i.removeAttribute(c)}else c.startsWith(F)&&(o.push({type:6,index:r}),i.removeAttribute(c));if(Ht.test(i.tagName)){let c=i.textContent.split(F),d=c.length-1;if(d>0){i.textContent=ve?ve.emptyScript:"";for(let u=0;u<d;u++)i.append(c[u],ue()),X.nextNode(),o.push({type:2,index:++r});i.append(c[d],ue())}}}else if(i.nodeType===8)if(i.data===Vt)o.push({type:2,index:r});else{let c=-1;for(;(c=i.data.indexOf(F,c+1))!==-1;)o.push({type:7,index:r}),c+=F.length-1}r++}}static createElement(t,a){let s=G.createElement("template");return s.innerHTML=t,s}};function ie(e,t,a=e,s){var l,o;var i;if(t===se)return t;let r=s!==void 0?(l=a.St)==null?void 0:l[s]:a.Ct,n=he(t)?void 0:t.Ot;return(r==null?void 0:r.constructor)!==n&&((o=r==null?void 0:r.Lt)==null||o.call(r,!1),n===void 0?r=void 0:(r=new n(e),r.Ut(e,a,s)),s!==void 0?(a[i="St"]??(a[i]=[]))[s]=r:a.Ct=r),r!==void 0&&(t=ie(e,r.Rt(e,t.values),r,s)),t}var Ea=class{constructor(e,t){this.pt=[],this.st=void 0,this.bt=e,this.n=t}get parentNode(){return this.n.parentNode}get x(){return this.n.x}u(e){let{el:{content:t},parts:a}=this.bt,s=((e==null?void 0:e.creationScope)??G).importNode(t,!0);X.currentNode=s;let i=X.nextNode(),r=0,n=0,l=a[0];for(;l!==void 0;){if(r===l.index){let o;l.type===2?o=new Xe(i,i.nextSibling,this,e):l.type===1?o=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(o=new Da(i,this,e)),this.pt.push(o),l=a[++n]}r!==(l==null?void 0:l.index)&&(i=X.nextNode(),r++)}return X.currentNode=G,s}p(e){let t=0;for(let a of this.pt)a!==void 0&&(a.strings!==void 0?(a.S(e,a,t),t+=a.strings.length-2):a.S(e[t])),t++}},Xe=class Xt{get x(){var t;return((t=this.n)==null?void 0:t.x)??this.mt}constructor(t,a,s,i){this.type=2,this.e=_,this.st=void 0,this.z=t,this.Y=a,this.n=s,this.options=i,this.mt=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this.z.parentNode,a=this.n;return a!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=a.parentNode),t}get startNode(){return this.z}get endNode(){return this.Y}S(t,a=this){t=ie(this,t,a),he(t)?t===_||t==null||t===""?(this.e!==_&&this.q(),this.e=_):t!==this.e&&t!==se&&this.gt(t):t.et!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):_a(t)?this.k(t):this.gt(t)}O(t){return this.z.parentNode.insertBefore(t,this.Y)}T(t){this.e!==t&&(this.q(),this.e=this.O(t))}gt(t){this.e!==_&&he(this.e)?this.z.nextSibling.data=t:this.T(G.createTextNode(t)),this.e=t}$(t){var r;let{values:a,et:s}=t,i=typeof s=="number"?this.Dt(t):(s.el===void 0&&(s.el=Re.createElement(Wt(s.h,s.h[0]),this.options)),s);if(((r=this.e)==null?void 0:r.bt)===i)this.e.p(a);else{let n=new Ea(i,this),l=n.u(this.options);n.p(a),this.T(l),this.e=n}}Dt(t){let a=ut.get(t.strings);return a===void 0&&ut.set(t.strings,a=new Re(t)),a}k(t){Je(this.e)||(this.e=[],this.q());let a=this.e,s,i=0;for(let r of t)i===a.length?a.push(s=new Xt(this.O(ue()),this.O(ue()),this,this.options)):s=a[i],s.S(r),i++;i<a.length&&(this.q(s&&s.Y.nextSibling,i),a.length=i)}q(t=this.z.nextSibling,a){var s;for((s=this.Et)==null?void 0:s.call(this,!1,!0,a);t!==this.Y;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var a;this.n===void 0&&(this.mt=t,(a=this.Et)==null||a.call(this,t))}},Se=class{get tagName(){return this.element.tagName}get x(){return this.n.x}constructor(e,t,a,s,i){this.type=1,this.e=_,this.st=void 0,this.element=e,this.name=t,this.n=s,this.options=i,a.length>2||a[0]!==""||a[1]!==""?(this.e=Array(a.length-1).fill(new String),this.strings=a):this.e=_}S(e,t=this,a,s){let i=this.strings,r=!1;if(i===void 0)e=ie(this,e,t,0),r=!he(e)||e!==this.e&&e!==se,r&&(this.e=e);else{let n=e,l,o;for(e=i[0],l=0;l<i.length-1;l++)o=ie(this,n[a+l],t,l),o===se&&(o=this.e[l]),r||(r=!he(o)||o!==this.e[l]),o===_?e=_:e!==_&&(e+=(o??"")+i[l+1]),this.e[l]=o}r&&!s&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Sa=class extends Se{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}},xa=class extends Se{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}},Ca=class extends Se{constructor(e,t,a,s,i){super(e,t,a,s,i),this.type=5}S(e,t=this){if((e=ie(this,e,t,0)??_)===se)return;let a=this.e,s=e===_&&a!==_||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,i=e!==_&&(a===_||s);s&&this.element.removeEventListener(this.name,this,a),i&&this.element.addEventListener(this.name,this,e),this.e=e}handleEvent(e){var t;typeof this.e=="function"?this.e.call(((t=this.options)==null?void 0:t.host)??this.element,e):this.e.handleEvent(e)}},Da=class{constructor(e,t,a){this.element=e,this.type=6,this.st=void 0,this.n=t,this.options=a}get x(){return this.n.x}S(e){ie(this,e)}},$e=ge.litHtmlPolyfillSupport;$e==null||$e(Re,Xe),(ge.litHtmlVersions??(ge.litHtmlVersions=[])).push("3.3.1");var Ia=(e,t,a)=>{let s=(a==null?void 0:a.renderBefore)??t,i=s._t;if(i===void 0){let r=(a==null?void 0:a.renderBefore)??null;s._t=i=new Xe(t.insertBefore(ue(),r),r,void 0,a??{})}return i.S(e),i},te=globalThis,Y=class extends Z{constructor(){super(...arguments),this.renderOptions={host:this},this.it=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.it=Ia(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this.it)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.it)==null||e.setConnected(!1)}render(){return se}},zt;Y.Nt=!0,Y.finalized=!0,(zt=te.litElementHydrateSupport)==null||zt.call(te,{LitElement:Y});var Le=te.litElementPolyfillSupport;Le==null||Le({LitElement:Y});(te.litElementVersions??(te.litElementVersions=[])).push("4.2.1");function ht(){document.addEventListener("click",e=>{let t=e.target.closest(".sb-ui-alert__close");if(!t)return;let a=t.closest(".sb-ui-alert");if(!a)return;a.classList.add("sb-ui-alert--fade-out");let s=parseFloat(getComputedStyle(a).getPropertyValue("--sb-ui-alert-fade-duration")||"0.3")*1e3;setTimeout(()=>a.remove(),s||300)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ht):ht();function Aa(e){var t;let a=e.querySelector(".sb-ui-carrusel__track"),s=e.querySelectorAll(".sb-ui-carrusel__button"),i=s[0],r=s[s.length-1];if(!a||!i||!r)return;let n=e.querySelector(".sb-ui-carrusel__indicators")??((t=e.nextElementSibling)==null?void 0:t.classList.contains("sb-ui-carrusel__indicators"))?e.nextElementSibling:null,l=n?n.querySelectorAll(".sb-ui-carrusel__indicator-dot"):e.querySelectorAll(".sb-ui-carrusel__indicator-dot"),o=a.querySelectorAll(".sb-ui-carrusel__card"),p=0;function m(){let c=o[0];if(!c)return;let d=parseFloat(getComputedStyle(a).gap)||0,u=p*(c.offsetWidth+d);a.style.transform=`translateX(-${u}px)`,i.classList.toggle("sb-ui-carrusel__button--disabled",p===0),i.disabled=p===0,r.classList.toggle("sb-ui-carrusel__button--disabled",p===o.length-1),r.disabled=p===o.length-1,l.forEach((y,g)=>{y.classList.toggle("sb-ui-carrusel__indicator-dot--active",g===p),y.setAttribute("aria-selected",g===p?"true":"false")})}r.addEventListener("click",()=>{p<o.length-1&&(p++,m())}),i.addEventListener("click",()=>{p>0&&(p--,m())}),l.forEach((c,d)=>{c.addEventListener("click",()=>{p=d,m()})}),m()}function yt(){document.querySelectorAll(".sb-ui-carrusel").forEach(Aa)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",yt):yt();function ze(){document.querySelectorAll(".sb-ui-file-upload-wrapper").forEach(e=>{let t=e.querySelector('input[type="file"]'),a=e.querySelector(".sb-ui-file-upload-dropzone"),s=e.querySelector("button.sb-ui-file-upload__select-button");if(!t||!a)return;s==null||s.addEventListener("click",()=>t.click()),a.addEventListener("click",()=>t.click());let i=0;a.addEventListener("dragenter",r=>{r.preventDefault(),i++,a.classList.add("is-dragover")}),a.addEventListener("dragover",r=>{r.preventDefault()}),a.addEventListener("dragleave",()=>{i--,i===0&&a.classList.remove("is-dragover")}),a.addEventListener("drop",r=>{var n;r.preventDefault(),i=0,a.classList.remove("is-dragover");let l=(n=r.dataTransfer)==null?void 0:n.files;if(!(l!=null&&l.length))return;let o=new DataTransfer;Array.from(l).forEach(p=>o.items.add(p)),t.files=o.files,t.dispatchEvent(new Event("change",{bubbles:!0}))}),t.addEventListener("change",()=>{e.dispatchEvent(new CustomEvent("sb-ui-file-upload-change",{bubbles:!0,detail:{files:t.files}}))})})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ze):ze();typeof window<"u"&&(window.initFileUploadBehavior=ze);var $a=6;function La(e){let t=Array.from(e.querySelectorAll(".sb-ui-tabs__item[data-tp-tab]")),a=Array.from(e.querySelectorAll(".sb-ui-tabla-pestanas__doc-row[data-tp-tab]")),s=e.querySelectorAll(".sb-ui-tabla-pestanas__pagination-nav"),i=e.querySelector(".sb-ui-tabla-pestanas__pagination-pages");if(!t.length||!a.length||s.length<2||!i)return;let r=s[0],n=s[s.length-1],l=parseInt(e.dataset.itemsPerPage??"",10)||$a,o=i,p=0,m=0;function c(){return a.filter(g=>g.dataset.tpTab===String(p))}function d(){return Math.max(1,Math.ceil(c().length/l))}function u(){let g=c(),b=m*l;a.forEach(f=>{f.hidden=!0}),g.slice(b,b+l).forEach(f=>{f.hidden=!1});let v=d();o.replaceChildren();for(let f=0;f<v;f++){let T=document.createElement("li");if(f===m){let D=document.createElement("span");D.className="sb-ui-tabla-pestanas__pagination-page sb-ui-tabla-pestanas__pagination-page--current",D.textContent=String(f+1),D.setAttribute("aria-current","page"),T.appendChild(D)}else{let D=document.createElement("button");D.type="button",D.className="sb-ui-tabla-pestanas__pagination-page",D.textContent=String(f+1),D.setAttribute("aria-label",`Ir a la página ${f+1}`),D.addEventListener("click",()=>{m=f,u()}),T.appendChild(D)}o.appendChild(T)}r.disabled=m<=0,n.disabled=m>=v-1}function y(g){p=g,m=0,t.forEach((b,v)=>{let f=v===g;b.classList.toggle("sb-ui-tabs__item--active",f),b.setAttribute("aria-selected",f?"true":"false"),b.tabIndex=f?0:-1}),u()}t.forEach((g,b)=>{g.addEventListener("click",()=>y(b)),g.addEventListener("keydown",v=>{let f=b;if(v.key==="ArrowRight"||v.key==="ArrowDown")v.preventDefault(),f=(b+1)%t.length;else if(v.key==="ArrowLeft"||v.key==="ArrowUp")v.preventDefault(),f=(b-1+t.length)%t.length;else if(v.key==="Home")v.preventDefault(),f=0;else if(v.key==="End")v.preventDefault(),f=t.length-1;else return;y(f),t[f].focus()})}),r.addEventListener("click",()=>{m=Math.max(0,m-1),u()}),n.addEventListener("click",()=>{m=Math.min(d()-1,m+1),u()}),u()}function bt(){document.querySelectorAll(".sb-ui-tabla-pestanas").forEach(La)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",bt):bt();var xe=e=>(t,a)=>{a!==void 0?a.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},fe=globalThis,Ge=fe.ShadowRoot&&(fe.ShadyCSS===void 0||fe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Gt=Symbol(),ft=new WeakMap,Ma=class{constructor(e,t,a){if(this.ut=!0,a!==Gt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Ge&&e===void 0){let a=t!==void 0&&t.length===1;a&&(e=ft.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&ft.set(t,e))}return e}toString(){return this.cssText}},Pa=e=>new Ma(typeof e=="string"?e:e+"",void 0,Gt),Ba=(e,t)=>{if(Ge)e.adoptedStyleSheets=t.map(a=>a instanceof CSSStyleSheet?a:a.styleSheet);else for(let a of t){let s=document.createElement("style"),i=fe.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=a.cssText,e.appendChild(s)}},gt=Ge?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let a="";for(let s of t.cssRules)a+=s.cssText;return Pa(a)})(e):e,{is:Oa,defineProperty:qa,getOwnPropertyDescriptor:Ta,getOwnPropertyNames:Na,getOwnPropertySymbols:Ra,getPrototypeOf:za}=Object,re=globalThis,vt=re.trustedTypes,ja=vt?vt.emptyScript:"",Me=re.reactiveElementPolyfillSupport,me=(e,t)=>e,_e={toAttribute(e,t){switch(t){case Boolean:e=e?ja:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let a=e;switch(t){case Boolean:a=e!==null;break;case Number:a=e===null?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch{a=null}}return a}},Ke=(e,t)=>!Oa(e,t),_t={attribute:!0,type:String,converter:_e,reflect:!1,useDefault:!1,hasChanged:Ke};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),re.litPropertyMetadata??(re.litPropertyMetadata=new WeakMap);var de=class extends HTMLElement{static addInitializer(e){this.g(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this.d&&[...this.d.keys()]}static createProperty(e,t=_t){if(t.state&&(t.attribute=!1),this.g(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let a=Symbol(),s=this.getPropertyDescriptor(e,a,t);s!==void 0&&qa(this.prototype,e,s)}}static getPropertyDescriptor(e,t,a){let{get:s,set:i}=Ta(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:s,set(r){let n=s==null?void 0:s.call(this);i==null||i.call(this,r),this.requestUpdate(e,n,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_t}static g(){if(this.hasOwnProperty(me("elementProperties")))return;let e=za(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(me("finalized")))return;if(this.finalized=!0,this.g(),this.hasOwnProperty(me("properties"))){let t=this.properties,a=[...Na(t),...Ra(t)];for(let s of a)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[a,s]of t)this.elementProperties.set(a,s)}this.d=new Map;for(let[t,a]of this.elementProperties){let s=this.f(t,a);s!==void 0&&this.d.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let a=new Set(e.flat(1/0).reverse());for(let s of a)t.unshift(gt(s))}else e!==void 0&&t.push(gt(e));return t}static f(e,t){let a=t.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this.b=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.s=null,this.K()}K(){var e;this.v=new Promise(t=>this.enableUpdating=t),this.i=new Map,this.Z(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this.r??(this.r=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this.r)==null||t.delete(e)}Z(){let e=new Map,t=this.constructor.elementProperties;for(let a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this.b=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ba(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this.r)==null||e.forEach(t=>{var a;return(a=t.hostConnected)==null?void 0:a.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this.r)==null||e.forEach(t=>{var a;return(a=t.hostDisconnected)==null?void 0:a.call(t)})}attributeChangedCallback(e,t,a){this._(e,a)}G(e,t){var a;let s=this.constructor.elementProperties.get(e),i=this.constructor.f(e,s);if(i!==void 0&&s.reflect===!0){let r=(((a=s.converter)==null?void 0:a.toAttribute)!==void 0?s.converter:_e).toAttribute(t,s.type);this.s=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this.s=null}}_(e,t){var a,s;let i=this.constructor,r=i.d.get(e);if(r!==void 0&&this.s!==r){let n=i.getPropertyOptions(r),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((a=n.converter)==null?void 0:a.fromAttribute)!==void 0?n.converter:_e;this.s=r;let o=l.fromAttribute(t,n.type);this[r]=o??((s=this.m)==null?void 0:s.get(r))??o,this.s=null}}requestUpdate(e,t,a){var s;if(e!==void 0){let i=this.constructor,r=this[e];if(a??(a=i.getPropertyOptions(e)),!((a.hasChanged??Ke)(r,t)||a.useDefault&&a.reflect&&r===((s=this.m)==null?void 0:s.get(e))&&!this.hasAttribute(i.f(e,a))))return;this.C(e,t,a)}this.isUpdatePending===!1&&(this.v=this.Q())}C(e,t,{useDefault:a,reflect:s,wrapped:i},r){a&&!(this.m??(this.m=new Map)).has(e)&&(this.m.set(e,r??t??this[e]),i!==!0||r!==void 0)||(this.i.has(e)||(this.hasUpdated||a||(t=void 0),this.i.set(e,t)),s===!0&&this.s!==e&&(this.y??(this.y=new Set)).add(e))}async Q(){this.isUpdatePending=!0;try{await this.v}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.b){for(let[i,r]of this.b)this[i]=r;this.b=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,r]of s){let{wrapped:n}=r,l=this[i];n!==!0||this.i.has(i)||l===void 0||this.C(i,void 0,r,l)}}let t=!1,a=this.i;try{t=this.shouldUpdate(a),t?(this.willUpdate(a),(e=this.r)==null||e.forEach(s=>{var i;return(i=s.hostUpdate)==null?void 0:i.call(s)}),this.update(a)):this.w()}catch(s){throw t=!1,this.w(),s}t&&this.tt(a)}willUpdate(e){}tt(e){var t;(t=this.r)==null||t.forEach(a=>{var s;return(s=a.hostUpdated)==null?void 0:s.call(a)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}w(){this.i=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.v}shouldUpdate(e){return!0}update(e){this.y&&(this.y=this.y.forEach(t=>this.G(t,this[t]))),this.w()}updated(e){}firstUpdated(e){}};de.elementStyles=[],de.shadowRootOptions={mode:"open"},de[me("elementProperties")]=new Map,de[me("finalized")]=new Map,Me==null||Me({ReactiveElement:de}),(re.reactiveElementVersions??(re.reactiveElementVersions=[])).push("2.1.1");var Ua={attribute:!0,type:String,converter:_e,reflect:!1,hasChanged:Ke},Fa=(e=Ua,t,a)=>{let{kind:s,metadata:i}=a,r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),r.set(a.name,e),s==="accessor"){let{name:n}=a;return{set(l){let o=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,o,e)},init(l){return l!==void 0&&this.C(n,void 0,e,l),l}}}if(s==="setter"){let{name:n}=a;return function(l){let o=this[n];t.call(this,l),this.requestUpdate(n,o,e)}}throw Error("Unsupported decorator location: "+s)};function h(e){return(t,a)=>typeof a=="object"?Fa(e,t,a):((s,i,r)=>{let n=i.hasOwnProperty(r);return i.constructor.createProperty(r,s),n?Object.getOwnPropertyDescriptor(i,r):void 0})(e,t,a)}function R(e){return h({...e,state:!0,attribute:!1})}var Ya=(e,t,a)=>(a.configurable=!0,a.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,a),a);function Va(e,t){return(a,s,i)=>{let r=n=>{var l;return((l=n.renderRoot)==null?void 0:l.querySelector(e))??null};return Ya(a,s,{get(){return r(this)}})}}var Ha=Object.defineProperty,Wa=Object.getOwnPropertyDescriptor,S=(e,t,a,s)=>{for(var i=s>1?void 0:s?Wa(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=(s?n(t,a,i):n(i))||i);return s&&i&&Ha(t,a,i),i},wt={es:{weekdays:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],weekdaysShort:["Do","Lu","Ma","Mi","Ju","Vi","Sa"],months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],monthsShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],today:"Hoy",cancel:"Cancelar",accept:"Aceptar"},en:{weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",cancel:"Cancel",accept:"Accept"}},k=class extends Y{constructor(){super(...arguments),this.variant="single",this.size="medium",this.locale="es",this.showFooter=!0,this.showDouble=!1,this.inline=!1,this.currentMonth=new Date().getMonth(),this.currentYear=new Date().getFullYear(),this.secondMonth=new Date().getMonth()+1,this.secondYear=new Date().getFullYear(),this.internalSelectedDates=[]}connectedCallback(){super.connectedCallback(),this.initializeDates(),this.updateSecondMonth()}updated(e){if(super.updated(e),e.has("selectedDate")&&this.selectedDate){let t=this.parseDate(this.selectedDate);t&&(this.internalSelectedDates=[t],this.currentMonth=t.getUTCMonth(),this.currentYear=t.getUTCFullYear())}if(e.has("selectedDates")&&this.selectedDates&&(this.internalSelectedDates=this.selectedDates.split(",").map(t=>this.parseDate(t.trim())).filter(t=>t!==null)),e.has("rangeStart")&&this.rangeStart){let t=this.parseDate(this.rangeStart);this.internalRangeStart=t??void 0}if(e.has("rangeEnd")&&this.rangeEnd){let t=this.parseDate(this.rangeEnd);this.internalRangeEnd=t??void 0}}createRenderRoot(){return this}parseDate(e){if(!e)return null;let t=e.split("-");if(t.length!==3)return null;let a=parseInt(t[0],10),s=parseInt(t[1],10)-1,i=parseInt(t[2],10);if(isNaN(a)||isNaN(s)||isNaN(i))return null;let r=new Date(Date.UTC(a,s,i,12,0,0));return isNaN(r.getTime())?null:r}formatDate(e){return e.toISOString().split("T")[0]}isSameDay(e,t){return!e||!t?!1:e.getUTCDate()===t.getUTCDate()&&e.getUTCMonth()===t.getUTCMonth()&&e.getUTCFullYear()===t.getUTCFullYear()}isToday(e){let t=new Date,a=new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),12,0,0));return this.isSameDay(e,a)}isDateInRange(e,t,a){if(!t||!a)return!1;let s=e.getTime();return s>t.getTime()&&s<a.getTime()}isDateDisabled(e){if(this.minDate){let t=this.parseDate(this.minDate);if(t&&e<t)return!0}if(this.maxDate){let t=this.parseDate(this.maxDate);if(t&&e>t)return!0}if(this.disabledDates){let t=this.disabledDates.split(",").map(s=>s.trim()),a=this.formatDate(e);if(t.includes(a))return!0}return!1}initializeDates(){if(this.selectedDate){let e=this.parseDate(this.selectedDate);e&&(this.internalSelectedDates=[e],this.currentMonth=e.getUTCMonth(),this.currentYear=e.getUTCFullYear())}if(this.selectedDates&&(this.internalSelectedDates=this.selectedDates.split(",").map(e=>this.parseDate(e.trim())).filter(e=>e!==null)),this.rangeStart){let e=this.parseDate(this.rangeStart);this.internalRangeStart=e??void 0}if(this.rangeEnd){let e=this.parseDate(this.rangeEnd);this.internalRangeEnd=e??void 0}}updateSecondMonth(){this.secondMonth=this.currentMonth+1,this.secondYear=this.currentYear,this.secondMonth>11&&(this.secondMonth=0,this.secondYear++)}getDaysInMonth(e,t){return new Date(t,e+1,0).getDate()}getFirstDayOfMonth(e,t){return new Date(t,e,1).getDay()}generateCalendarDays(e,t){let a=this.getDaysInMonth(e,t),s=this.getFirstDayOfMonth(e,t),i=this.getDaysInMonth(e-1,t),r=[];for(let l=s-1;l>=0;l--){let o=i-l,p=new Date(Date.UTC(t,e-1,o,12,0,0));r.push(this.createDateInfo(p,!0))}for(let l=1;l<=a;l++){let o=new Date(Date.UTC(t,e,l,12,0,0));r.push(this.createDateInfo(o,!1))}let n=7-r.length%7;if(n<7)for(let l=1;l<=n;l++){let o=new Date(Date.UTC(t,e+1,l,12,0,0));r.push(this.createDateInfo(o,!0))}return r}createDateInfo(e,t){let a=this.internalSelectedDates.some(n=>this.isSameDay(n,e)),s=this.isSameDay(e,this.internalRangeStart),i=this.isSameDay(e,this.internalRangeEnd),r=this.isDateInRange(e,this.internalRangeStart,this.internalRangeEnd);return{date:e,day:e.getUTCDate(),month:e.getUTCMonth(),year:e.getUTCFullYear(),isToday:this.isToday(e),isSelected:a,isInRange:r,isRangeStart:s,isRangeEnd:i,isOutsideMonth:t,isDisabled:this.isDateDisabled(e)}}handlePrevMonth(){this.currentMonth--,this.currentMonth<0&&(this.currentMonth=11,this.currentYear--),this.updateSecondMonth(),this.dispatchMonthChangeEvent()}handleNextMonth(){this.currentMonth++,this.currentMonth>11&&(this.currentMonth=0,this.currentYear++),this.updateSecondMonth(),this.dispatchMonthChangeEvent()}handleMonthChange(e){let t=e.target;this.currentMonth=parseInt(t.value,10),this.updateSecondMonth(),this.dispatchMonthChangeEvent()}handleYearChange(e){let t=e.target;this.currentYear=parseInt(t.value,10),this.updateSecondMonth(),this.dispatchMonthChangeEvent()}handleDayClick(e){if(e.isDisabled||e.isOutsideMonth)return;let t=e.date;switch(this.variant){case"single":this.internalSelectedDates=[t],this.dispatchDateSelectEvent(t),this.dispatchDateChangeEvent();break;case"multiple":let a=this.internalSelectedDates.findIndex(s=>this.isSameDay(s,t));a>=0?this.internalSelectedDates.splice(a,1):this.internalSelectedDates.push(t),this.internalSelectedDates=[...this.internalSelectedDates],this.dispatchDateSelectEvent(t),this.dispatchDateChangeEvent();break;case"range":!this.internalRangeStart||this.internalRangeStart&&this.internalRangeEnd?(this.internalRangeStart=t,this.internalRangeEnd=void 0):(t<this.internalRangeStart?(this.internalRangeEnd=this.internalRangeStart,this.internalRangeStart=t):this.internalRangeEnd=t,this.dispatchDateChangeEvent()),this.requestUpdate();break}}handleKeyDown(e,t,a){let s=this.generateCalendarDays(this.currentMonth,this.currentYear);switch(e.key){case"Enter":case" ":e.preventDefault(),this.handleDayClick(t);break;case"ArrowLeft":e.preventDefault(),this.focusPreviousDay(a,s);break;case"ArrowRight":e.preventDefault(),this.focusNextDay(a,s);break;case"ArrowUp":e.preventDefault(),this.focusDayAbove(a,s);break;case"ArrowDown":e.preventDefault(),this.focusDayBelow(a,s);break;case"Home":e.preventDefault(),this.focusFirstDay(s);break;case"End":e.preventDefault(),this.focusLastDay(s);break}}focusPreviousDay(e,t){let a=e-1;for(;a>=0&&(t[a].isDisabled||t[a].isOutsideMonth);)a--;a>=0&&this.focusDayButton(a)}focusNextDay(e,t){let a=e+1;for(;a<t.length&&(t[a].isDisabled||t[a].isOutsideMonth);)a++;a<t.length&&this.focusDayButton(a)}focusDayAbove(e,t){let a=e-7;a>=0&&!t[a].isDisabled&&!t[a].isOutsideMonth&&this.focusDayButton(a)}focusDayBelow(e,t){let a=e+7;a<t.length&&!t[a].isDisabled&&!t[a].isOutsideMonth&&this.focusDayButton(a)}focusFirstDay(e){let t=e.findIndex(a=>!a.isDisabled&&!a.isOutsideMonth);t>=0&&this.focusDayButton(t)}focusLastDay(e){let t=e.slice().reverse().findIndex(a=>!a.isDisabled&&!a.isOutsideMonth);if(t>=0){let a=e.length-1-t;this.focusDayButton(a)}}focusDayButton(e){this.updateComplete.then(()=>{var t;let a=(t=this.shadowRoot)==null?void 0:t.querySelector(`.sb-ui-calendar__day:nth-child(${e+1})`);a==null||a.focus()})}handleCancel(){this.dispatchEvent(new CustomEvent("calendar-cancel",{bubbles:!0,composed:!0}))}handleAccept(){this.dispatchEvent(new CustomEvent("calendar-accept",{bubbles:!0,composed:!0,detail:this.getSelectionData()}))}dispatchDateSelectEvent(e){this.dispatchEvent(new CustomEvent("date-select",{detail:{date:this.formatDate(e),timestamp:e.getTime()},bubbles:!0,composed:!0}))}dispatchDateChangeEvent(){this.dispatchEvent(new CustomEvent("date-change",{detail:this.getSelectionData(),bubbles:!0,composed:!0}))}dispatchMonthChangeEvent(){this.dispatchEvent(new CustomEvent("month-change",{detail:{month:this.currentMonth,year:this.currentYear,monthName:this.getLocaleConfig().months[this.currentMonth]},bubbles:!0,composed:!0}))}getSelectionData(){switch(this.variant){case"single":return{variant:"single",date:this.internalSelectedDates[0]?this.formatDate(this.internalSelectedDates[0]):null};case"multiple":return{variant:"multiple",dates:this.internalSelectedDates.map(e=>this.formatDate(e))};case"range":return{variant:"range",start:this.internalRangeStart?this.formatDate(this.internalRangeStart):null,end:this.internalRangeEnd?this.formatDate(this.internalRangeEnd):null};default:return{}}}getLocaleConfig(){return wt[this.locale]||wt.es}getYearRange(){let e=new Date().getFullYear(),t=e-100,a=e+50,s=[];for(let i=t;i<=a;i++)s.push(i);return s}getDayClasses(e){let t=["sb-ui-calendar__day"];return e.isToday&&t.push("sb-ui-calendar__day--today"),e.isSelected&&t.push("sb-ui-calendar__day--selected"),e.isRangeStart&&t.push("sb-ui-calendar__day--range-start"),e.isRangeEnd&&t.push("sb-ui-calendar__day--range-end"),e.isInRange&&t.push("sb-ui-calendar__day--in-range"),e.isOutsideMonth&&t.push("sb-ui-calendar__day--outside"),e.isDisabled&&t.push("sb-ui-calendar__day--disabled"),t.join(" ")}getAriaLabel(e){let t=this.getLocaleConfig(),a=t.months[e.month],s=`${e.day} de ${a}, ${e.year}`;return e.isToday&&(s+=`, ${t.today}`),e.isSelected&&(s+=", Seleccionado"),e.isRangeStart&&(s+=", Inicio del rango"),e.isRangeEnd&&(s+=", Fin del rango"),s}renderNavIcon(e){return e==="left"?w`
        <svg class="sb-ui-calendar__nav-icon" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      `:w`
      <svg class="sb-ui-calendar__nav-icon" viewBox="0 0 24 24">
        <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
      </svg>
    `}renderMonth(e,t){let a=this.getLocaleConfig(),s=this.generateCalendarDays(e,t),i=this.getYearRange();return w`
      <div class="sb-ui-calendar__month">
        <div class="sb-ui-calendar__header">
          <button
            class="sb-ui-calendar__nav-button"
            @click=${this.handlePrevMonth}
            aria-label="Mes anterior"
          >
            ${this.renderNavIcon("left")}
          </button>
          <div class="sb-ui-calendar__month-year">
            <select
              class="sb-ui-select sb-ui-calendar__month-select"
              .value=${e.toString()}
              @change=${this.handleMonthChange}
              aria-label="Seleccionar mes"
            >
              ${a.months.map((r,n)=>w`<option value=${n} ?selected=${n===e}>${r}</option>`)}
            </select>
            <select
              class="sb-ui-select sb-ui-calendar__year-select"
              .value=${t.toString()}
              @change=${this.handleYearChange}
              aria-label="Seleccionar año"
            >
              ${i.map(r=>w`<option value=${r} ?selected=${r===t}>${r}</option>`)}
            </select>
          </div>
          <button
            class="sb-ui-calendar__nav-button"
            @click=${this.handleNextMonth}
            aria-label="Mes siguiente"
          >
            ${this.renderNavIcon("right")}
          </button>
        </div>

        <div class="sb-ui-calendar__weekdays">
          ${a.weekdaysShort.map(r=>w`<div class="sb-ui-calendar__weekday">${r}</div>`)}
        </div>

        <div class="sb-ui-calendar__days">
          ${s.map((r,n)=>w`
              <button
                class=${this.getDayClasses(r)}
                @click=${()=>this.handleDayClick(r)}
                @keydown=${l=>this.handleKeyDown(l,r,n)}
                ?disabled=${r.isDisabled||r.isOutsideMonth}
                aria-label=${this.getAriaLabel(r)}
                aria-selected=${r.isSelected}
                tabindex=${r.isSelected||n===0&&!this.internalSelectedDates.length?"0":"-1"}
              >
                ${r.day}
              </button>
            `)}
        </div>
      </div>
    `}renderFooter(){if(!this.showFooter)return _;let e=this.getLocaleConfig();return w`
      <div class="sb-ui-calendar__footer">
        <button
          class="sb-ui-button sb-ui-button--secondary sb-ui-button--small"
          @click=${this.handleCancel}
        >
          ${e.cancel}
        </button>
        <button
          class="sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--small"
          @click=${this.handleAccept}
        >
          ${e.accept}
        </button>
      </div>
    `}render(){let e=this.size!=="medium"?`sb-ui-calendar--${this.size}`:"",t=this.showDouble&&this.variant==="range"?"sb-ui-calendar--double":"",a=this.inline?"sb-ui-calendar--inline":"",s=this.showFooter?"":"sb-ui-calendar--no-footer",i=["sb-ui-calendar",e,t,a,s].filter(Boolean).join(" ");return w`
      <div class=${i} data-variant=${this.variant}>
        ${this.renderMonth(this.currentMonth,this.currentYear)}
        ${this.showDouble&&this.variant==="range"?this.renderMonth(this.secondMonth,this.secondYear):_}
        ${this.renderFooter()}
      </div>
    `}};S([h({type:String,reflect:!0})],k.prototype,"variant",2);S([h({type:String,reflect:!0})],k.prototype,"size",2);S([h({type:String,attribute:"selected-date"})],k.prototype,"selectedDate",2);S([h({type:String,attribute:"selected-dates"})],k.prototype,"selectedDates",2);S([h({type:String,attribute:"range-start"})],k.prototype,"rangeStart",2);S([h({type:String,attribute:"range-end"})],k.prototype,"rangeEnd",2);S([h({type:String,attribute:"min-date"})],k.prototype,"minDate",2);S([h({type:String,attribute:"max-date"})],k.prototype,"maxDate",2);S([h({type:String,attribute:"disabled-dates"})],k.prototype,"disabledDates",2);S([h({type:String})],k.prototype,"locale",2);S([h({type:Boolean,attribute:"show-footer"})],k.prototype,"showFooter",2);S([h({type:Boolean,attribute:"show-double"})],k.prototype,"showDouble",2);S([h({type:Boolean,reflect:!0})],k.prototype,"inline",2);S([R()],k.prototype,"currentMonth",2);S([R()],k.prototype,"currentYear",2);S([R()],k.prototype,"secondMonth",2);S([R()],k.prototype,"secondYear",2);S([R()],k.prototype,"internalSelectedDates",2);S([R()],k.prototype,"internalRangeStart",2);S([R()],k.prototype,"internalRangeEnd",2);k=S([xe("sb-ui-calendar")],k);var Ja=Object.defineProperty,Xa=Object.getOwnPropertyDescriptor,I=(e,t,a,s)=>{for(var i=s>1?void 0:s?Xa(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=(s?n(t,a,i):n(i))||i);return s&&i&&Ja(t,a,i),i},C=class extends Y{constructor(){super(...arguments),this.variant="single",this.size="medium",this.placeholder="DD/MM/YYYY",this.error=!1,this.disabled=!1,this.readonly=!1,this.locale="es",this.block=!1,this.isOpen=!1,this.handleOutsideClick=e=>{this.contains(e.target)||(this.isOpen=!1)}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.handleOutsideClick)}handleInputClick(e){e.stopPropagation(),!this.disabled&&!this.readonly&&this.toggleDropdown()}handleTriggerClick(e){e.stopPropagation(),this.disabled||this.toggleDropdown()}toggleDropdown(){this.isOpen=!this.isOpen,this.isOpen?this.dispatchEvent(new CustomEvent("datepicker-open",{bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("datepicker-close",{bubbles:!0,composed:!0}))}handleCalendarChange(e){var t,a;let s=e.detail,i="",r=!1;switch(this.variant){case"single":this.value=s.date,i=this.formatDate(s.date),r=!0;break;case"range":s.start&&s.end&&(this.value=`${s.start},${s.end}`,i=`${this.formatDate(s.start)} - ${this.formatDate(s.end)}`,r=!0);break;case"multiple":this.value=(t=s.dates)==null?void 0:t.join(","),i=(a=s.dates)==null?void 0:a.map(n=>this.formatDate(n)).join(", ");break}this.updateInputValue(i),r&&setTimeout(()=>{this.isOpen=!1},300),this.dispatchEvent(new CustomEvent("datepicker-change",{detail:{value:this.value,formattedValue:i,...s},bubbles:!0,composed:!0}))}handleCalendarAccept(e){this.isOpen=!1,this.dispatchEvent(new CustomEvent("datepicker-accept",{detail:e.detail,bubbles:!0,composed:!0}))}handleCalendarCancel(){this.isOpen=!1}updateInputValue(e){this.input&&(this.input.value=e)}formatDate(e){if(!e)return"";let[t,a,s]=e.split("-");return`${s}/${a}/${t}`}getInitialInputValue(){if(!this.value)return"";if(this.variant==="single")return this.formatDate(this.value);if(this.variant==="range"){let[e,t]=this.value.split(",");return e&&t?`${this.formatDate(e)} - ${this.formatDate(t)}`:e?this.formatDate(e):""}else if(this.variant==="multiple")return this.value.split(",").map(e=>this.formatDate(e.trim())).join(", ");return""}renderIcon(){return w`
      <svg class="sb-ui-datepicker__icon" viewBox="0 0 24 24">
        <path
          d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"
        />
      </svg>
    `}render(){var e,t;let a=["sb-ui-datepicker",this.size!=="medium"?`sb-ui-datepicker--${this.size}`:"",this.error?"sb-ui-datepicker--error":"",this.disabled?"sb-ui-datepicker--disabled":"",this.block?"sb-ui-datepicker--block":"",this.isOpen?"sb-ui-datepicker--open":"",this.label?"sb-ui-datepicker--with-label":""].filter(Boolean).join(" ");return w`
      <div class=${a}>
        ${this.label?w`<label class="sb-ui-datepicker__label">${this.label}</label>`:_}

        <div class="sb-ui-datepicker__wrapper">
          <input
            type="text"
            class="sb-ui-input sb-ui-datepicker__input ${this.error?"sb-ui-input--error":""}"
            .value=${this.getInitialInputValue()}
            placeholder=${this.placeholder}
            ?disabled=${this.disabled}
            ?readonly=${!0}
            @click=${this.handleInputClick}
          />

          <button
            type="button"
            class="sb-ui-datepicker__trigger"
            ?disabled=${this.disabled}
            @click=${this.handleTriggerClick}
            aria-label="Abrir calendario"
          >
            ${this.renderIcon()}
          </button>

          <div class="sb-ui-datepicker__dropdown">
            <sb-ui-calendar
              .variant=${this.variant}
              .locale=${this.locale}
              .selectedDate=${this.variant==="single"?this.value:void 0}
              .rangeStart=${this.variant==="range"?(e=this.value)==null?void 0:e.split(",")[0]:void 0}
              .rangeEnd=${this.variant==="range"?(t=this.value)==null?void 0:t.split(",")[1]:void 0}
              .selectedDates=${this.variant==="multiple"?this.value:void 0}
              .minDate=${this.minDate}
              .maxDate=${this.maxDate}
              .disabledDates=${this.disabledDates}
              .showFooter=${!0}
              .size=${this.size}
              @date-change=${this.handleCalendarChange}
              @calendar-accept=${this.handleCalendarAccept}
              @calendar-cancel=${this.handleCalendarCancel}
            ></sb-ui-calendar>
          </div>
        </div>

        ${this.helperText&&!this.error?w`<div class="sb-ui-datepicker__helper">${this.helperText}</div>`:_}
        ${this.error&&this.errorMessage?w`<div class="sb-ui-datepicker__error">${this.errorMessage}</div>`:_}
      </div>
    `}};I([h({type:String,reflect:!0})],C.prototype,"variant",2);I([h({type:String,reflect:!0})],C.prototype,"size",2);I([h({type:String})],C.prototype,"value",2);I([h({type:String})],C.prototype,"placeholder",2);I([h({type:String})],C.prototype,"label",2);I([h({type:String,attribute:"helper-text"})],C.prototype,"helperText",2);I([h({type:Boolean,reflect:!0})],C.prototype,"error",2);I([h({type:String,attribute:"error-message"})],C.prototype,"errorMessage",2);I([h({type:Boolean,reflect:!0})],C.prototype,"disabled",2);I([h({type:Boolean,reflect:!0})],C.prototype,"readonly",2);I([h({type:String,attribute:"min-date"})],C.prototype,"minDate",2);I([h({type:String,attribute:"max-date"})],C.prototype,"maxDate",2);I([h({type:String,attribute:"disabled-dates"})],C.prototype,"disabledDates",2);I([h({type:String})],C.prototype,"locale",2);I([h({type:Boolean,reflect:!0})],C.prototype,"block",2);I([R()],C.prototype,"isOpen",2);I([Va(".sb-ui-datepicker__input")],C.prototype,"input",2);C=I([xe("sb-ui-datepicker")],C);var Ga=Object.defineProperty,Ka=Object.getOwnPropertyDescriptor,ne=(e,t,a,s)=>{for(var i=s>1?void 0:s?Ka(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=(s?n(t,a,i):n(i))||i);return s&&i&&Ga(t,a,i),i},V=class extends Y{constructor(){super(...arguments),this.open=!1,this.title="",this.size="medium",this.closeOnBackdrop=!0,this.showCloseButton=!0}connectedCallback(){super.connectedCallback(),this.open&&this.ft()}disconnectedCallback(){super.disconnectedCallback(),this.vt()}updated(e){e.has("open")&&(this.open?(this.ft(),this.E("sb-ui-modal-open")):(this.vt(),this.E("sb-ui-modal-close"))),e.has("size")&&this.yt()}yt(){let e={small:{maxInline:"min(464px, 90%)",maxBlock:"45dvb"},medium:{maxInline:"min(716px, 90%)",maxBlock:"82dvb"},large:{maxInline:"min(928px, 90%)",maxBlock:"82dvb"}},t=e[this.size]||e.medium;this.style.setProperty("--sb-ui-modal-max-inline-size",t.maxInline),this.style.setProperty("--sb-ui-modal-max-block-size",t.maxBlock)}ft(){document.body.style.overflow="hidden"}vt(){document.body.style.overflow=""}Mt(e){this.closeOnBackdrop&&e.target===e.currentTarget&&this.close()}ot(){this.close()}at(e){e.key==="Escape"&&this.open&&this.close()}E(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}openModal(){this.open=!0,this.yt()}close(){this.open=!1}render(){return this.open?w`
      <div
        class="sb-ui-modal__backdrop"
        part="backdrop"
        @click=${this.Mt}
        @keydown=${this.at}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div class="sb-ui-modal__dialog" part="dialog" role="document">
          <div class="sb-ui-modal__header" part="header">
            <h2 id="modal-title" class="sb-ui-modal__title">
              <slot name="header">${this.title}</slot>
            </h2>
            ${this.showCloseButton?w`
                  <button
                    class="sb-ui-modal__close"
                    part="close-button"
                    @click=${this.ot}
                    aria-label="Cerrar modal"
                  >
                    &times;
                  </button>
                `:""}
          </div>

          <div class="sb-ui-modal__body" part="body">
            <slot></slot>
          </div>

          <div class="sb-ui-modal__footer" part="footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `:w``}};V.styles=Ut`
    /* ========================================
       TOKENS - CSS Variables
       ======================================== */
    :host {
      /* Backdrop */
      --sb-ui-modal-backdrop-bg: #00000040;

      /* Dialog */
      --sb-ui-modal-bg: var(--sb-ui-color-grayscale-white, #ffffff);
      --sb-ui-modal-border-radius: clamp(8px, 0.5rem + 0.5vw, 16px);
      --sb-ui-modal-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);

      /* Spacing */
      --sb-ui-modal-padding-inline: clamp(1rem, 0.75rem + 1.5vw, 2rem);
      --sb-ui-modal-padding-block: clamp(0.875rem, 0.7rem + 0.8vw, 1.5rem);
      --sb-ui-modal-gap: clamp(0.5rem, 0.4rem + 0.5vw, 1rem);

      /* Header */
      --sb-ui-modal-title-color: var(--sb-ui-color-primary-D100, #038450);
      --sb-ui-modal-title-font-size: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);
      --sb-ui-modal-title-font-weight: 700;
      --sb-ui-modal-header-border: 1px solid var(--sb-ui-color-grayscale-L200, #e1e1e1);

      /* Close button */
      --sb-ui-modal-close-size: 24px;
      --sb-ui-modal-close-color: var(--sb-ui-color-grayscale-base, #9b9b9b);
      --sb-ui-modal-close-color-hover: var(--sb-ui-color-grayscale-D400, #282828);

      /* Footer */
      --sb-ui-modal-footer-border: 1px solid var(--sb-ui-color-grayscale-L200, #e1e1e1);
      --sb-ui-modal-footer-gap: clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem);

      /* Body */
      --sb-ui-modal-body-color: var(--sb-ui-color-grayscale-D300, #333333);
      --sb-ui-modal-body-font-size: clamp(0.875rem, 0.8rem + 0.3vw, 1rem);
      --sb-ui-modal-body-line-height: 1.5;

      /* Sizes - defaults (medium) */
      --sb-ui-modal-max-inline-size: min(716px, 90%);
      --sb-ui-modal-max-block-size: 82dvb;

      /* Transition */
      --sb-ui-modal-transition: opacity 0.2s ease, transform 0.3s ease;

      display: contents;
    }

    :host([hidden]) {
      display: none;
    }

    /* ========================================
       BACKDROP
       ======================================== */
    .sb-ui-modal__backdrop {
      position: fixed;
      inset: 0;
      background: var(--sb-ui-modal-backdrop-bg);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding-block: clamp(1rem, 0.5rem + 2vw, 2rem);
      padding-inline: clamp(0.5rem, 0.25rem + 1.5vw, 1.5rem);
      animation: sb-ui-modal-fade-in 0.2s ease;
    }

    /* ========================================
       DIALOG
       ======================================== */
    .sb-ui-modal__dialog {
      background: var(--sb-ui-modal-bg);
      inline-size: 100%;
      max-inline-size: var(--sb-ui-modal-max-inline-size);
      max-block-size: var(--sb-ui-modal-max-block-size);
      border-radius: var(--sb-ui-modal-border-radius);
      box-shadow: var(--sb-ui-modal-shadow);
      display: flex;
      flex-direction: column;
      animation: sb-ui-modal-slide-up 0.3s ease;
      overflow: hidden;
    }

    /* ========================================
       HEADER
       ======================================== */
    .sb-ui-modal__header {
      padding-inline: var(--sb-ui-modal-padding-inline);
      padding-block: var(--sb-ui-modal-padding-block);
      border-block-end: var(--sb-ui-modal-header-border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--sb-ui-modal-gap);
      flex-shrink: 0;
    }

    .sb-ui-modal__title {
      font-size: var(--sb-ui-modal-title-font-size);
      font-weight: var(--sb-ui-modal-title-font-weight);
      color: var(--sb-ui-modal-title-color);
      margin-block: 0;
      margin-inline: 0;
      line-height: 1.3;
      flex: 1;
    }

    /* ========================================
       CLOSE BUTTON
       ======================================== */
    .sb-ui-modal__close {
      all: unset;
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      inline-size: var(--sb-ui-modal-close-size);
      block-size: var(--sb-ui-modal-close-size);
      font-size: calc(var(--sb-ui-modal-close-size) * 0.75);
      cursor: pointer;
      color: var(--sb-ui-modal-close-color);
      line-height: 1;
      transition: color 0.2s ease;
      flex-shrink: 0;
      border-radius: 4px;

      &:hover {
        color: var(--sb-ui-modal-close-color-hover);
      }

      &:focus-visible {
        outline: 2px solid var(--sb-ui-color-secondary-L100, #ffea9a);
        outline-offset: 2px;
      }
    }

    /* ========================================
       BODY
       ======================================== */
    .sb-ui-modal__body {
      padding-inline: var(--sb-ui-modal-padding-inline);
      padding-block: var(--sb-ui-modal-padding-block);
      overflow-y: auto;
      flex: 1;
      color: var(--sb-ui-modal-body-color);
      font-size: var(--sb-ui-modal-body-font-size);
      line-height: var(--sb-ui-modal-body-line-height);
    }

    /* ========================================
       FOOTER
       ======================================== */
    .sb-ui-modal__footer {
      padding-inline: var(--sb-ui-modal-padding-inline);
      padding-block: var(--sb-ui-modal-padding-block);
      border-block-start: var(--sb-ui-modal-footer-border);
      display: flex;
      gap: var(--sb-ui-modal-footer-gap);
      justify-content: center;
      flex-wrap: wrap;
      flex-shrink: 0;
    }

    ::slotted([slot='footer']) {
      display: flex;
      gap: var(--sb-ui-modal-footer-gap, 0.75rem);
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }

    /* ========================================
       ANIMATIONS
       ======================================== */
    @keyframes sb-ui-modal-fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes sb-ui-modal-slide-up {
      from {
        transform: translateY(clamp(20px, 3vw, 50px));
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    /* ========================================
       ACCESSIBILITY
       ======================================== */
    @media (prefers-reduced-motion: reduce) {
      .sb-ui-modal__backdrop,
      .sb-ui-modal__dialog {
        animation: none;
      }
    }

    @media (prefers-contrast: high) {
      .sb-ui-modal__dialog {
        border: 2px solid currentColor;
      }
    }
  `;ne([h({type:Boolean,reflect:!0})],V.prototype,"open",2);ne([h({type:String})],V.prototype,"title",2);ne([h({type:String,reflect:!0})],V.prototype,"size",2);ne([h({type:Boolean,attribute:"close-on-backdrop"})],V.prototype,"closeOnBackdrop",2);ne([h({type:Boolean,attribute:"show-close-button"})],V.prototype,"showCloseButton",2);V=ne([xe("sb-ui-modal")],V);var Qa=class extends HTMLElement{static get observedAttributes(){return["value","label","description","category","icon","disabled"]}constructor(){super(),this.style.display="none"}get value(){return this.getAttribute("value")||""}get label(){var e;return this.getAttribute("label")||((e=this.textContent)==null?void 0:e.trim())||""}get description(){return this.getAttribute("description")||""}get category(){return this.hasAttribute("category")}get icon(){return this.getAttribute("icon")||""}get disabled(){return this.hasAttribute("disabled")}};customElements.get("sb-ui-listbox-item")||customElements.define("sb-ui-listbox-item",Qa);var Za=class extends HTMLElement{constructor(){super(),this.c=[],this.W="",this.rt=null,this.attachShadow({mode:"open"})}static get observedAttributes(){return["style-variant","content-search","search-placeholder","empty-title","empty-text"]}connectedCallback(){this.nt(),this.rt=new MutationObserver(()=>this.nt()),this.rt.observe(this,{childList:!0,subtree:!0,attributes:!0})}disconnectedCallback(){var e;(e=this.rt)==null||e.disconnect()}attributeChangedCallback(){this.shadowRoot&&this.nt()}get styleVariant(){return this.getAttribute("style-variant")||"multiselect"}get contentSearch(){return this.hasAttribute("content-search")}get searchPlaceholder(){return this.getAttribute("search-placeholder")||"Buscar"}get emptyTitle(){return this.getAttribute("empty-title")||"¡Ups! lo sentimos"}get emptyText(){return this.getAttribute("empty-text")||"No se encontraron resultados"}At(){return[...this.querySelectorAll("sb-ui-listbox-item")].map(e=>({value:e.value,label:e.label,description:e.description,category:e.category,icon:e.icon,disabled:e.disabled}))}Tt(e){return this.c.includes(e)}wt(e){e.category||e.disabled||(this.styleVariant==="multiselect"?this.c.indexOf(e.value)>=0?this.c=this.c.filter(t=>t!==e.value):this.c=[...this.c,e.value]:this.c=[e.value],this.lt(),this.dispatchEvent(new CustomEvent("sb-ui-listbox-change",{bubbles:!0,composed:!0,detail:{value:this.styleVariant==="multiselect"?this.c:this.c[0],selected:[...this.c]}})))}$t(e){this.W=e.target.value.toLowerCase().trim(),this.lt()}lt(){var e,t;let a=(e=this.shadowRoot)==null?void 0:e.querySelector(".list");if(!a)return;let s=this.At(),i=this.styleVariant,r=this.W,n=!1;a.innerHTML="",s.forEach(o=>{let p=!r||o.label.toLowerCase().includes(r);if(o.category){let u=document.createElement("div");u.className="item item--category",u.setAttribute("role","presentation"),o.icon&&(u.innerHTML+=`<i class="${o.icon} item-icon" aria-hidden="true"></i>`),u.innerHTML+=`<span>${o.label}</span>`,a.appendChild(u);let y=document.createElement("hr");y.className="divider",a.appendChild(y);return}if(!p)return;n=!0;let m=this.Tt(o.value),c=document.createElement("div");c.className=`item${m?" item--selected":""}${i==="semantic"?" item--semantic":""}`,c.setAttribute("role","option"),c.setAttribute("aria-selected",String(m)),c.setAttribute("tabindex","0");let d="";i==="multiselect"&&(d+=`<span class="checkbox${m?" checkbox--checked":""}"></span>`),(i==="semantic"||i==="group")&&o.icon&&(d+=`<i class="${o.icon} item-icon" aria-hidden="true"></i>`),i==="semantic"&&o.description?d+=`<div class="item-text"><span class="item-title">${o.label}</span><span class="item-description">${o.description}</span></div>`:d+=`<span>${o.label}</span>`,c.innerHTML=d,c.addEventListener("click",()=>this.wt(o)),c.addEventListener("keydown",u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),this.wt(o))}),a.appendChild(c)});let l=(t=this.shadowRoot)==null?void 0:t.querySelector(".empty-state-dynamic");l&&l.remove(),!n&&r&&(a.innerHTML=`
        <div class="empty-state empty-state-dynamic">
          <i class="fa-solid fa-magnifying-glass empty-icon" aria-hidden="true"></i>
          <span class="empty-title">${this.emptyTitle}</span>
          <span class="empty-text">"${this.W}" no coincide con ningún resultado</span>
        </div>
      `)}nt(){var e;let t=this.styleVariant,a=t==="empty",s=`listbox${a?" listbox--empty":""}${t==="semantic"?" listbox--semantic":""}`,i="";this.contentSearch&&(i=`
        <div class="search">
          <div class="search-wrapper">
            <span class="search-icon"><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i></span>
            <input type="text" class="search-input" placeholder="${this.searchPlaceholder}" aria-label="${this.searchPlaceholder}" />
          </div>
        </div>`);let r="";a?r=`
        <div class="empty-state">
          <i class="fa-solid fa-magnifying-glass empty-icon" aria-hidden="true"></i>
          <span class="empty-title">${this.emptyTitle}</span>
          <span class="empty-text">${this.emptyText}</span>
        </div>`:r='<div class="list" role="listbox"></div>',this.shadowRoot.innerHTML=`
      <style>${es}</style>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      <div class="${s}">
        <div class="content">
          ${i}
          ${r}
        </div>
      </div>
    `;let n=(e=this.shadowRoot)==null?void 0:e.querySelector(".search-input");n&&(n.value=this.W,n.addEventListener("input",l=>this.$t(l))),a||this.lt()}},es=`
  :host {
    display: inline-block;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  .listbox {
    display: flex;
    align-items: flex-start;
    width: var(--sb-ui-listbox-width, 226px);
    height: var(--sb-ui-listbox-height, 200px);
    background: var(--sb-ui-listbox-bg, var(--sb-ui-color-grayscale-white, #fff));
    border-radius: var(--sb-ui-listbox-border-radius, 8px);
    box-shadow: 2px 8px 8px 0px rgba(115,115,115,0.04), 2px 2px 16px 0px rgba(115,115,115,0.16);
    overflow: hidden;
    padding-block: 4px;
    padding-inline-end: 2px;
    gap: 2px;
  }

  .listbox--empty { padding-inline: 2px; }
  .listbox--semantic { padding-inline: 2px; }

  .content {
    display: flex;
    flex-direction: column;
    flex: 1 0 0;
    min-width: 0;
    min-height: 0;
    height: 100%;
    padding-inline-start: 2px;
  }

  .listbox--empty .content,
  .listbox--semantic .content {
    padding-inline-start: 0;
    border-radius: 6px;
    overflow: hidden;
  }

  .search {
    display: flex;
    flex-direction: column;
    padding: 8px;
    flex-shrink: 0;
  }

  .search-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    height: 32px;
    background: var(--sb-ui-listbox-bg, #fff);
    border: 1px solid var(--sb-ui-color-grayscale-L100, #b9b9b9);
    border-radius: 100px;
    padding-inline-end: 16px;
    overflow: hidden;
    box-sizing: border-box;
  }

  .search-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding-inline-start: 8px;
    flex-shrink: 0;
    color: var(--sb-ui-color-grayscale-D100, #757575);
    font-size: 14px;
  }

  .search-input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    font-family: var(--sb-ui-typography-fontFamily-brand, 'Bolivar', sans-serif);
    font-size: 14px;
    line-height: 1.4;
    color: var(--sb-ui-color-grayscale-D100, #757575);
  }

  .search-input::placeholder {
    color: var(--sb-ui-color-grayscale-base, #9b9b9b);
  }

  .list {
    display: flex;
    flex-direction: column;
    flex: 1 0 0;
    min-height: 0;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--sb-ui-color-grayscale-L100, #b9b9b9) transparent;
  }

  .list::-webkit-scrollbar { width: 6px; }
  .list::-webkit-scrollbar-thumb {
    background: var(--sb-ui-color-grayscale-L100, #b9b9b9);
    border-radius: 50px;
  }

  .item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    background: var(--sb-ui-listbox-bg, #fff);
    cursor: pointer;
    flex-shrink: 0;
    width: 100%;
    font-family: var(--sb-ui-typography-fontFamily-brand, 'Bolivar', sans-serif);
    font-size: 14px;
    line-height: 1.4;
    color: var(--sb-ui-color-grayscale-D100, #757575);
    white-space: nowrap;
    box-sizing: border-box;
  }

  .item:hover { background: var(--sb-ui-color-grayscale-L400, #fafafa); }
  .item--selected { background: var(--sb-ui-color-primary-L400, #f2f9f6); }
  .item--category { cursor: default; }
  .item--semantic { align-items: flex-start; }

  .checkbox {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border: 2px solid var(--sb-ui-color-grayscale-L100, #b9b9b9);
    border-radius: 4px;
    background: #fff;
    flex-shrink: 0;
    transition: background-color 0.15s, border-color 0.15s;
    box-sizing: border-box;
  }

  .checkbox--checked {
    background: var(--sb-ui-color-primary-base, #009056);
    border-color: var(--sb-ui-color-primary-base, #009056);
  }

  .checkbox--checked::after {
    content: '';
    display: block;
    width: 5px;
    height: 9px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    margin-block-end: 2px;
  }

  .item-text {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .item-title {
    font-weight: 700;
    color: var(--sb-ui-color-grayscale-D200, #5b5b5b);
  }

  .item-description {
    font-weight: 400;
    color: var(--sb-ui-color-grayscale-D100, #757575);
  }

  .item-icon {
    color: var(--sb-ui-color-primary-base, #009056);
    font-size: 16px;
    flex-shrink: 0;
  }

  .divider {
    width: 100%;
    height: 0;
    border: none;
    border-block-start: 1px solid var(--sb-ui-color-grayscale-L200, #e1e1e1);
    flex-shrink: 0;
    margin: 0;
  }

  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1 0 0;
    min-height: 0;
    gap: 4px;
    padding: 8px 16px;
    text-align: center;
  }

  .empty-icon {
    font-size: 40px;
    color: var(--sb-ui-color-grayscale-base, #9b9b9b);
    margin-block-end: 4px;
  }

  .empty-title {
    font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
    font-size: 16px;
    font-weight: 700;
    line-height: 1.4;
    color: var(--sb-ui-color-grayscale-D400, #282828);
  }

  .empty-text {
    font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    color: var(--sb-ui-color-grayscale-D400, #282828);
  }
`;customElements.get("sb-ui-listbox")||customElements.define("sb-ui-listbox",Za);var ts=class extends HTMLElement{constructor(){super(...arguments),this.ct=!1,this.a=null}connectedCallback(){if(this.ct)return;let e=this,t=()=>{e.children.length>0?e.zt():setTimeout(t,80)};setTimeout(t,60)}disconnectedCallback(){this.a&&clearInterval(this.a)}kt(){let e=parseInt(this.getAttribute("per-view")||"3",10)||3,t=window.innerWidth;return t<=512?1:t<=768?Math.min(e,2):e}zt(){if(this.ct)return;this.ct=!0;let e=this,t=parseInt(e.getAttribute("gap")||"24",10)||24,a=e.getAttribute("position")==="in",s=e.hasAttribute("controls"),i=e.hasAttribute("indicators"),r=e.hasAttribute("autoplay"),n=parseInt(e.getAttribute("interval")||"5000",10)||5e3,l=0,o=[];for(;e.firstElementChild;)o.push(e.removeChild(e.firstElementChild));let p=o.length;if(!p)return;e.classList.add("sb-ui-carousel");let m=document.createElement("div");m.className="sb-ui-carousel__wrap"+(a?"":" sb-ui-carousel__wrap--out");let c=document.createElement("div");c.className="sb-ui-carousel__viewport";let d=document.createElement("div");d.className="sb-ui-carousel__track",d.style.cssText="display:flex;gap:"+t+"px;transition:transform 0.4s ease";let u=[];for(let M=0;M<p;M++){let j=document.createElement("div");j.className="sb-ui-carousel__slide",j.appendChild(o[M]),u.push(j),d.appendChild(j)}c.appendChild(d),m.appendChild(c);let y=null,g=null;s&&(y=document.createElement("button"),y.className="sb-ui-carousel__arrow sb-ui-carousel__arrow--prev"+(a?" sb-ui-carousel__arrow--in":""),y.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M15 18l-6-6 6-6"/></svg>',y.setAttribute("aria-label","Anterior"),g=document.createElement("button"),g.className="sb-ui-carousel__arrow sb-ui-carousel__arrow--next"+(a?" sb-ui-carousel__arrow--in":""),g.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M9 18l6-6-6-6"/></svg>',g.setAttribute("aria-label","Siguiente"),m.appendChild(y),m.appendChild(g));let b=null,v=[];if(i){b=document.createElement("div"),b.className="sb-ui-carousel__dots";let M=document.createElement("div");M.className="sb-ui-carousel__dots-bg",b.appendChild(M),m.appendChild(b)}e.appendChild(m);function f(M){let j=e.kt(),Ce=Math.max(0,p-j);l=Math.max(0,Math.min(M,Ce));let st=c.offsetWidth;if(st>0){let q=(st-t*(j-1))/j;for(let U=0;U<u.length;U++)u[U].style.cssText="flex:0 0 "+q+"px;min-width:0";d.style.transform="translateX(-"+l*(q+t)+"px)"}let De=Ce+1;if(b){if(v.length!==De){for(;b.children.length>1;)b.removeChild(b.lastChild);v=[];for(let q=0;q<De;q++){let U=document.createElement("button");U.className="sb-ui-carousel__dot",v.push(U),b.appendChild(U),(da=>{U.onclick=()=>{f(da),e.a&&clearInterval(e.a)}})(q)}}for(let q=0;q<v.length;q++)v[q].className=q===l?"sb-ui-carousel__dot sb-ui-carousel__dot--active":"sb-ui-carousel__dot";b.style.display=De>1?"":"none"}y&&(y.disabled=l<=0),g&&(g.disabled=l>=Ce)}y&&(y.onclick=()=>{f(l-1),e.a&&clearInterval(e.a)}),g&&(g.onclick=()=>{f(l+1),e.a&&clearInterval(e.a)});let T=0,D=0,H=!1;c.addEventListener("touchstart",M=>{T=M.touches[0].clientX,D=0,H=!0},{passive:!0}),c.addEventListener("touchmove",M=>{H&&(D=M.touches[0].clientX-T,Math.abs(D)>10&&M.preventDefault())},{passive:!1}),c.addEventListener("touchend",()=>{H&&(H=!1,D<-50?(f(l+1),e.a&&clearInterval(e.a)):D>50&&(f(l-1),e.a&&clearInterval(e.a)))},{passive:!0});let at;window.addEventListener("resize",()=>{clearTimeout(at),at=setTimeout(()=>f(l),150)}),f(0),r&&(e.a=setInterval(()=>{let M=Math.max(0,p-e.kt());f(l>=M?0:l+1)},n))}};customElements.get("sb-ui-carousel")||customElements.define("sb-ui-carousel",ts);var as=class ce{constructor(){this.toasts=new Map,this.counter=0}static getInstance(){return ce.instance||(ce.instance=new ce),ce.instance}show(t={}){let a=`toast-${++this.counter}-${Date.now()}`,s=t.position||"top-right",i=document.createElement("sb-ui-toast");return t.type&&(i.type=t.type),t.title&&(i.title=t.title),t.message&&(i.message=t.message),i.position=s,t.size&&(i.size=t.size),t.autoDismiss!==void 0&&(i.autoDismiss=t.autoDismiss),t.showClose!==void 0&&(i.showClose=t.showClose),t.showProgress!==void 0&&(i.showProgress=t.showProgress),t.clickable!==void 0&&(i.clickable=t.clickable),document.body.appendChild(i),this.toasts.set(a,{id:a,element:i,container:document.body}),this.setupToastEventListeners(a,i),this.recalculateOffsets(s),requestAnimationFrame(()=>{i.show()}),a}hide(t){let a=this.toasts.get(t);return a?(a.element.hide(),!0):!1}remove(t){let a=this.toasts.get(t);if(!a)return!1;let s=a.element.position;return a.element.remove(),this.toasts.delete(t),this.recalculateOffsets(s),!0}hideAll(){this.toasts.forEach(t=>t.element.hide())}removeAll(){this.toasts.forEach(t=>t.element.remove()),this.toasts.clear()}getActiveToasts(){return Array.from(this.toasts.keys())}getToastCount(t){return t?Array.from(this.toasts.values()).filter(a=>a.element.position===t).length:this.toasts.size}success(t,a={}){return this.show({...a,type:"success",message:t})}error(t,a={}){return this.show({...a,type:"error",message:t})}warning(t,a={}){return this.show({...a,type:"warning",message:t})}info(t,a={}){return this.show({...a,type:"info",message:t})}recalculateOffsets(t){let a=Array.from(this.toasts.values()).filter(n=>n.element.position===t),s=t.startsWith("bottom"),i=t.endsWith("center"),r=16;a.forEach((n,l)=>{let o=n.element,p=o.offsetHeight||72;s?(o.style.bottom=`${r}px`,o.style.top=""):(o.style.top=`${r}px`,o.style.bottom=""),i&&(o.style.left="50%"),l<a.length-1&&(r+=p+8)})}setupToastEventListeners(t,a){a.addEventListener("sb-ui-toast-hide",()=>{setTimeout(()=>{this.remove(t)},300)})}},z=as.getInstance(),ss=e=>z.show(e),is=(e,t)=>z.success(e,t),rs=(e,t)=>z.error(e,t),ns=(e,t)=>z.warning(e,t),ls=(e,t)=>z.info(e,t),os=e=>z.hide(e),ds=e=>z.remove(e),cs=()=>z.hideAll(),ps=()=>z.removeAll(),ms=Object.defineProperty,us=Object.getOwnPropertyDescriptor,O=(e,t,a,s)=>{for(var i=s>1?void 0:s?us(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=(s?n(t,a,i):n(i))||i);return s&&i&&ms(t,a,i),i},P=class extends Y{constructor(){super(...arguments),this.type="info",this.position="top-right",this.size="medium",this.title="",this.message="",this.visible=!1,this.showClose=!0,this.autoDismiss=0,this.showProgress=!1,this.clickable=!0,this.dt=100}connectedCallback(){super.connectedCallback(),this.visible&&this.X()}disconnectedCallback(){super.disconnectedCallback(),this.J()}updated(e){if(e.has("visible")){let t=e.get("visible");this.visible?(this.E("sb-ui-toast-show"),this.X()):t===!0&&(this.E("sb-ui-toast-hide"),this.J())}e.has("autoDismiss")&&this.visible&&this.X()}X(){this.J(),this.autoDismiss>0&&(this.showProgress&&(this.dt=100,this.requestUpdate(),setTimeout(()=>{this.dt=0,this.requestUpdate()},50)),this.ht=window.setTimeout(()=>{this.hide()},this.autoDismiss))}J(){this.ht&&(clearTimeout(this.ht),this.ht=void 0),this.xt&&(clearTimeout(this.xt),this.xt=void 0)}Pt(){this.clickable&&this.E("sb-ui-toast-click")}ot(e){e.stopPropagation(),this.hide()}at(e){e.key==="Escape"&&this.hide()}E(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}show(){this.visible=!0}hide(){this.visible=!1}toggle(){this.visible=!this.visible}pauseAutoDismiss(){this.J()}resumeAutoDismiss(){this.visible&&this.autoDismiss>0&&this.X()}render(){let e=this.showProgress&&this.autoDismiss>0?`width: ${this.dt}%; transition-duration: ${this.autoDismiss}ms;`:"display: none;";return w`
      <div
        class="toast"
        part="toast"
        @click=${this.Pt}
        @keydown=${this.at}
        @mouseenter=${this.pauseAutoDismiss}
        @mouseleave=${this.resumeAutoDismiss}
        tabindex="0"
        role="alert"
        aria-live="polite"
        aria-atomic="true"
      >
        <!-- Icon (vacío, el CSS genera el icono automáticamente) -->
        <div class="icon" part="icon" aria-hidden="true"></div>

        <div class="content" part="content">
          ${this.title?w`
                <strong class="title" part="title">
                  <slot name="title">${this.title}</slot>
                </strong>
              `:""}
          ${this.message?w`
                <p class="message" part="message">
                  <slot>${this.message}</slot>
                </p>
              `:w` <slot></slot> `}

          <slot name="actions"></slot>
        </div>

        ${this.showClose?w`
              <button
                class="close"
                part="close"
                @click=${this.ot}
                aria-label="Cerrar notificación"
                type="button"
              ></button>
            `:""}

        <div class="progress" part="progress" style=${e}></div>
      </div>
    `}};P.styles=Ut`
    :host {
      /* Colores - Background (basado en alert.css tokens) */
      --sb-ui-toast-bg-color: var(--sb-ui-color-grayscale-white, #ffffff);
      --sb-ui-toast-bg-color-success: var(--sb-ui-color-feedback-success-L400, #e9f6ec);
      --sb-ui-toast-bg-color-info: var(--sb-ui-color-feedback-info-L400, #e5f2ff);
      --sb-ui-toast-bg-color-warning: var(--sb-ui-color-feedback-warning-L400, #fff9e5);
      --sb-ui-toast-bg-color-error: var(--sb-ui-color-feedback-error-L400, #fbebec);

      /* Colores - Border (linea izquierda) */
      --sb-ui-toast-border-color: var(--sb-ui-color-grayscale-L200, #edeef0);
      --sb-ui-toast-border-color-success: var(--sb-ui-color-feedback-success-base, #28a745);
      --sb-ui-toast-border-color-info: var(--sb-ui-color-feedback-info-base, #007eff);
      --sb-ui-toast-border-color-warning: var(--sb-ui-color-feedback-warning-base, #ffc100);
      --sb-ui-toast-border-color-error: var(--sb-ui-color-feedback-error-base, #dc3545);

      /* Colores - Text (siempre oscuro) */
      --sb-ui-toast-text-color: var(--sb-ui-color-grayscale-black, #1b1b1b);
      --sb-ui-toast-title-color: var(--sb-ui-color-grayscale-black, #1b1b1b);

      /* Colores - Icon */
      --sb-ui-toast-icon-color: var(--sb-ui-color-grayscale-base, #9b9b9b);
      --sb-ui-toast-icon-color-success: var(--sb-ui-color-feedback-success-base, #28a745);
      --sb-ui-toast-icon-color-info: var(--sb-ui-color-feedback-info-base, #007eff);
      --sb-ui-toast-icon-color-warning: var(--sb-ui-color-feedback-warning-base, #ffc100);
      --sb-ui-toast-icon-color-error: var(--sb-ui-color-feedback-error-base, #dc3545);

      /* Colores - Close button */
      --sb-ui-toast-close-color: var(--sb-ui-color-grayscale-base, #9b9b9b);
      --sb-ui-toast-close-color-hover: var(--sb-ui-color-grayscale-D300, #404040);

      /* Espaciado (según especificación Figma como alert.css) */
      --sb-ui-toast-padding-block: 1rem; /* 16px */
      --sb-ui-toast-padding-inline-start: 2rem;
      --sb-ui-toast-padding-inline-end: 1rem;
      --sb-ui-toast-gap: 0.5rem; /* 8px */
      --sb-ui-toast-content-gap: 0.25rem; /* 4px */

      /* Bordes */
      --sb-ui-toast-border-inline-start-width: 4px;
      --sb-ui-toast-border-radius: 8px;

      /* Tipografia */
      --sb-ui-toast-font-family: var(--sb-ui-typography-fontFamily, 'Bolivar', sans-serif);
      --sb-ui-toast-title-font-size: 0.875rem; /* 14px */
      --sb-ui-toast-title-font-weight: 700;
      --sb-ui-toast-message-font-size: 0.875rem; /* 14px */
      --sb-ui-toast-message-font-weight: 400;
      --sb-ui-toast-line-height: 1.4;

      /* Tamanios */
      --sb-ui-toast-min-block-size: 5rem;
      --sb-ui-toast-icon-size: 1.5rem; /* 24px */
      --sb-ui-toast-close-size: 1.75rem; /* 28px */

      /* Sombra */
      --sb-ui-toast-shadow: var(--sb-ui-shadow-s, 1px 4px 4px 0px rgba(115, 115, 115, 0.04), 1px 1px 8px 0px rgba(115, 115, 115, 0.16));

      /* Transiciones */
      --sb-ui-toast-transition: all 0.2s ease;

      /* Posicionamiento */
      position: fixed;
      z-index: 1000;
      display: block;
      opacity: 0;
      transform: translateX(100%);
      transition: var(--sb-ui-toast-transition);
    }

    :host([visible]) {
      opacity: 1;
      transform: translateX(0);
    }

    :host([position='top-right']) {
      top: 1rem;
      right: 1rem;
    }

    :host([position='top-left']) {
      top: 1rem;
      left: 1rem;
      transform: translateX(-100%);
    }

    :host([position='top-left'][visible]) {
      transform: translateX(0);
    }

    :host([position='top-center']) {
      top: 1rem;
      left: 50%;
      transform: translateX(-50%) translateY(-100%);
    }

    :host([position='top-center'][visible]) {
      transform: translateX(-50%) translateY(0);
    }

    :host([position='bottom-right']) {
      bottom: 1rem;
      right: 1rem;
      transform: translateX(100%) translateY(100%);
    }

    :host([position='bottom-right'][visible]) {
      transform: translateX(0) translateY(0);
    }

    :host([position='bottom-left']) {
      bottom: 1rem;
      left: 1rem;
      transform: translateX(-100%) translateY(100%);
    }

    :host([position='bottom-left'][visible]) {
      transform: translateX(0) translateY(0);
    }

    :host([position='bottom-center']) {
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%) translateY(100%);
    }

    :host([position='bottom-center'][visible]) {
      transform: translateX(-50%) translateY(0);
    }

    .toast {
      /* Layout (igual que alert.css) */
      display: flex;
      align-items: flex-start;
      gap: var(--sb-ui-toast-gap);
      position: relative;
      box-sizing: border-box;
      width: 100%;
      min-width: 300px;
      max-width: 484px;

      /* Spacing */
      padding: var(--sb-ui-toast-padding-block) var(--sb-ui-toast-padding-inline-end)
        var(--sb-ui-toast-padding-block) var(--sb-ui-toast-padding-inline-start);

      /* Sizing */
      min-height: var(--sb-ui-toast-min-block-size);

      /* Appearance */
      background-color: var(--sb-ui-toast-bg-color);
      border: none;
      border-radius: var(--sb-ui-toast-border-radius);
      box-shadow: var(--sb-ui-toast-shadow);

      /* Typography */
      font-family: var(--sb-ui-toast-font-family);
      line-height: var(--sb-ui-toast-line-height);
      color: var(--sb-ui-toast-text-color);

      cursor: pointer;
      transition: var(--sb-ui-toast-transition);
    }

    /* Barra de color izquierda (pseudo-elemento) - según Figma */
    .toast::before {
      content: '';
      position: absolute;
      left: 0.5rem; /* 8px */
      top: 50%;
      transform: translateY(-50%);
      width: var(--sb-ui-toast-border-inline-start-width);
      height: calc(100% - 2rem); /* Altura dinámica con margen */
      background-color: var(--sb-ui-toast-border-color);
      border-radius: 8px;
    }

    .toast:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    /* Icon */
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--sb-ui-toast-icon-size);
      height: var(--sb-ui-toast-icon-size);
      flex-shrink: 0;
      margin-top: 0.125rem;
      position: relative;
    }

    /* Ocultar cualquier contenido dentro del icon container */
    .icon > * {
      display: none;
    }

    /* Content wrapper */
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: var(--sb-ui-toast-content-gap);
      min-width: 0;
    }

    /* Title */
    .title {
      font-size: var(--sb-ui-toast-title-font-size);
      font-weight: var(--sb-ui-toast-title-font-weight);
      line-height: var(--sb-ui-toast-line-height);
      color: var(--sb-ui-toast-title-color);
      margin: 0;
    }

    /* Message */
    .message {
      font-size: var(--sb-ui-toast-message-font-size);
      font-weight: var(--sb-ui-toast-message-font-weight);
      line-height: var(--sb-ui-toast-line-height);
      color: var(--sb-ui-toast-text-color);
      margin: 0;
    }

    /* Close button */
    .close {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--sb-ui-toast-close-size);
      height: var(--sb-ui-toast-close-size);
      background: none;
      border: none;
      cursor: pointer;
      border-radius: 0.25rem; /* 4px */
      transition: color 0.2s ease, background-color 0.2s ease;
      flex-shrink: 0;
      margin-top: 0;
      margin-right: 0;
      padding: 0.25rem;
      position: relative;
    }

    .close:hover {
      background-color: var(--sb-ui-color-grayscale-L400, rgba(247, 247, 247, 0.5));
    }

    .close:focus-visible {
      outline: 3px solid var(--sb-ui-color-secondary-L100);
      outline-offset: 2px;
    }

    /* Ocultar cualquier contenido dentro */
    .close > * {
      display: none;
    }

    /* Icono X con CSS puro usando mask-image (igual que alert.css) */
    .close::before {
      content: '';
      width: 1.125rem;
      height: 1.125rem;
      background-color: var(--sb-ui-toast-close-color);
      mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3E%3Cline x1='6' y1='6' x2='18' y2='18' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3Cline x1='18' y1='6' x2='6' y2='18' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
      mask-size: contain;
      mask-repeat: no-repeat;
      mask-position: center;
      -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3E%3Cline x1='6' y1='6' x2='18' y2='18' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3Cline x1='18' y1='6' x2='6' y2='18' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
      -webkit-mask-size: contain;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center;
    }

    .close:hover::before {
      background-color: var(--sb-ui-toast-close-color-hover);
    }

    .progress {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      background-color: var(--sb-ui-color-primary-base, #007acc);
      border-radius: 0 0 var(--sb-ui-toast-border-radius) var(--sb-ui-toast-border-radius);
      transition: width linear;
      opacity: 0.7;
    }

    /* Toast Type Variants - igual que alert.css */
    
    /* Success */
    :host([type='success']) .toast {
      --sb-ui-toast-bg-color: var(--sb-ui-toast-bg-color-success);
      --sb-ui-toast-border-color: var(--sb-ui-toast-border-color-success);
      --sb-ui-toast-icon-color: var(--sb-ui-toast-icon-color-success);
    }

    :host([type='success']) .icon::before {
      content: '';
      width: 1.5rem;
      height: 1.5rem;
      background-color: var(--sb-ui-toast-icon-color);
      mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3E%3Ccircle cx='12' cy='12' r='10' stroke='black' stroke-width='2' fill='none'/%3E%3Cpath d='M7 12l3 3 7-7' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E");
      mask-size: contain;
      mask-repeat: no-repeat;
      mask-position: center;
      -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3E%3Ccircle cx='12' cy='12' r='10' stroke='black' stroke-width='2' fill='none'/%3E%3Cpath d='M7 12l3 3 7-7' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E");
      -webkit-mask-size: contain;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center;
    }

    :host([type='success']) .progress {
      background-color: var(--sb-ui-toast-border-color-success);
    }

    /* Info */
    :host([type='info']) .toast {
      --sb-ui-toast-bg-color: var(--sb-ui-toast-bg-color-info);
      --sb-ui-toast-border-color: var(--sb-ui-toast-border-color-info);
      --sb-ui-toast-icon-color: var(--sb-ui-toast-icon-color-info);
    }

    :host([type='info']) .icon::before {
      content: '';
      width: 1.5rem;
      height: 1.5rem;
      background-color: var(--sb-ui-toast-icon-color);
      mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3E%3Ccircle cx='12' cy='12' r='10' stroke='black' stroke-width='2' fill='none'/%3E%3Cline x1='12' y1='11' x2='12' y2='17' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3Ccircle cx='12' cy='8' r='1' fill='black'/%3E%3C/svg%3E");
      mask-size: contain;
      mask-repeat: no-repeat;
      mask-position: center;
      -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3E%3Ccircle cx='12' cy='12' r='10' stroke='black' stroke-width='2' fill='none'/%3E%3Cline x1='12' y1='11' x2='12' y2='17' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3Ccircle cx='12' cy='8' r='1' fill='black'/%3E%3C/svg%3E");
      -webkit-mask-size: contain;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center;
    }

    :host([type='info']) .progress {
      background-color: var(--sb-ui-toast-border-color-info);
    }

    /* Warning */
    :host([type='warning']) .toast {
      --sb-ui-toast-bg-color: var(--sb-ui-toast-bg-color-warning);
      --sb-ui-toast-border-color: var(--sb-ui-toast-border-color-warning);
      --sb-ui-toast-icon-color: var(--sb-ui-toast-icon-color-warning);
    }

    :host([type='warning']) .icon::before {
      content: '';
      width: 1.5rem;
      height: 1.5rem;
      background-color: var(--sb-ui-toast-icon-color);
      mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3E%3Cpath d='M12 2L2 20h20L12 2z' stroke='black' stroke-width='2' stroke-linejoin='round' fill='none'/%3E%3Cline x1='12' y1='9' x2='12' y2='14' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3Ccircle cx='12' cy='17' r='1' fill='black'/%3E%3C/svg%3E");
      mask-size: contain;
      mask-repeat: no-repeat;
      mask-position: center;
      -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3E%3Cpath d='M12 2L2 20h20L12 2z' stroke='black' stroke-width='2' stroke-linejoin='round' fill='none'/%3E%3Cline x1='12' y1='9' x2='12' y2='14' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3Ccircle cx='12' cy='17' r='1' fill='black'/%3E%3C/svg%3E");
      -webkit-mask-size: contain;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center;
    }

    :host([type='warning']) .progress {
      background-color: var(--sb-ui-toast-border-color-warning);
    }

    /* Error */
    :host([type='error']) .toast {
      --sb-ui-toast-bg-color: var(--sb-ui-toast-bg-color-error);
      --sb-ui-toast-border-color: var(--sb-ui-toast-border-color-error);
      --sb-ui-toast-icon-color: var(--sb-ui-toast-icon-color-error);
    }

    :host([type='error']) .icon::before {
      content: '';
      width: 1.5rem;
      height: 1.5rem;
      background-color: var(--sb-ui-toast-icon-color);
      mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3E%3Ccircle cx='12' cy='12' r='10' stroke='black' stroke-width='2' fill='none'/%3E%3Cline x1='8' y1='8' x2='16' y2='16' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3Cline x1='16' y1='8' x2='8' y2='16' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
      mask-size: contain;
      mask-repeat: no-repeat;
      mask-position: center;
      -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3E%3Ccircle cx='12' cy='12' r='10' stroke='black' stroke-width='2' fill='none'/%3E%3Cline x1='8' y1='8' x2='16' y2='16' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3Cline x1='16' y1='8' x2='8' y2='16' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
      -webkit-mask-size: contain;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center;
    }

    :host([type='error']) .progress {
      background-color: var(--sb-ui-toast-border-color-error);
    }

    /* Size Variants */
    :host([size='small']) .toast {
      min-height: 2.5rem;
      padding: 0.75rem;
      gap: 0.5rem;
    }

    :host([size='small']) .icon {
      width: 1rem;
      height: 1rem;
      font-size: 1rem;
    }

    :host([size='small']) .title,
    :host([size='small']) .message {
      font-size: 0.8125rem;
    }

    :host([size='small']) .close {
      width: 1.25rem;
      height: 1.25rem;
    }

    :host([size='large']) .toast {
      min-height: 3.5rem;
      padding: 1.25rem;
      gap: 1rem;
    }

    :host([size='large']) .icon {
      width: 1.5rem;
      height: 1.5rem;
      font-size: 1.5rem;
    }

    :host([size='large']) .title {
      font-size: 1rem;
    }

    :host([size='large']) .message {
      font-size: 0.9375rem;
    }

    :host([size='large']) .close {
      width: 1.75rem;
      height: 1.75rem;
    }

    /* Accessibility */
    @media (prefers-reduced-motion: reduce) {
      :host {
        transition: none;
      }

      .toast {
        transition: none;
      }

      .toast:hover {
        transform: none;
      }
    }

    @media (prefers-contrast: high) {
      .toast {
        border-width: 2px;
        border-left-width: 6px;
      }
    }

    /* Mobile Optimization */
    @media (max-width: 640px) {
      :host([position*='top']) {
        top: 0.5rem;
        left: 0.5rem;
        right: 0.5rem;
        transform: translateY(-100%);
      }

      :host([position*='top'][visible]) {
        transform: translateY(0);
      }

      :host([position*='bottom']) {
        bottom: 0.5rem;
        left: 0.5rem;
        right: 0.5rem;
        transform: translateY(100%);
      }

      :host([position*='bottom'][visible]) {
        transform: translateY(0);
      }

      .toast {
        min-width: auto;
        max-width: none;
      }
    }
  `;O([h({type:String,reflect:!0})],P.prototype,"type",2);O([h({type:String,reflect:!0})],P.prototype,"position",2);O([h({type:String,reflect:!0})],P.prototype,"size",2);O([h({type:String})],P.prototype,"title",2);O([h({type:String})],P.prototype,"message",2);O([h({type:Boolean,reflect:!0})],P.prototype,"visible",2);O([h({type:Boolean,attribute:"show-close"})],P.prototype,"showClose",2);O([h({type:Number,attribute:"auto-dismiss"})],P.prototype,"autoDismiss",2);O([h({type:Boolean,attribute:"show-progress"})],P.prototype,"showProgress",2);O([h({type:Boolean})],P.prototype,"clickable",2);O([R()],P.prototype,"_progressWidth",2);P=O([xe("sb-ui-toast")],P);typeof window<"u"&&(window.showToast=ss,window.showSuccess=is,window.showInfo=ls,window.showWarning=ns,window.showError=rs,window.hideToast=os,window.hideAllToasts=cs,window.removeToast=ds,window.removeAllToasts=ps);const je="pym_lead",kt="https://script.google.com/a/macros/segurosbolivar.com/s/AKfycbxXH963T5rp1dokyta0XRERF0Am-wkFsq03bpnXWl6mkL5FtcvmVSSRMMdI30K2arE4_g/exec";function Pe(){return{meta:{leadId:`PYM-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),product:"Seguro de Vida Pymes",currentStep:"home"},contact:{docType:"",docNumber:"",phone:"",email:"",email2:"",termsAccepted:!1,dataAccepted:!1},lead:{birthDate:"",age:null,advisorCode:"",advisorEmail:""},plan:{coverageName:"",insuredValue:null,primaAnual:null,primaSemestral:null},holder:{docType:"",docNumber:"",issueDate:"",name:"",firstName:"",secondName:"",lastName1:"",lastName2:"",gender:"",birthDate:"",city:"",address:"",occupation:"",eps:"",incomeSource:""},beneficiaries:{list:[],useLegal:!1},payment:{confirmed:!1,frequency:"",autoDebit:!0,paymentAuthorized:!1},card:{method:"",bank:"",holderName:"",number:"",last4:"",expiry:"",installments:"",docType:"",docNumber:"",registered:!1},result:{policyNumber:"",approvalCode:"",validity:"",completedAt:"",emissionStatus:"PENDIENTE"}}}function Qe(){try{const e=localStorage.getItem(je);if(!e){const t=Pe();return localStorage.setItem(je,JSON.stringify(t)),t}return Qt(Pe(),JSON.parse(e))}catch{return Pe()}}function $(e,t){const a=Qe();return a[e]={...a[e]||{},...t||{}},a.meta.updatedAt=new Date().toISOString(),localStorage.setItem(je,JSON.stringify(a)),a}function Kt(){const e=Qe(),t=e.beneficiaries.list||[],a=n=>t[n]||{},s={};for(let n=0;n<4;n++){const l=n+1;s[`BENEFICIARIO ${l} NOMBRE`]=a(n).name||"",s[`BENEFICIARIO ${l} PARENTESCO`]=a(n).relationship||"",s[`BENEFICIARIO ${l} PORCENTAJE`]=a(n).percentage!=null?`${a(n).percentage}%`:""}const r=e.payment.frequency==="anual"?e.plan.primaAnual:e.plan.primaSemestral;return{FECHA:bs(e.meta.createdAt),"CORREO ASESOR":e.lead.advisorEmail||"","CLAVE ASESOR":e.lead.advisorCode||"","VALOR ASEGURADO":e.plan.insuredValue!=null?e.plan.insuredValue:"",PLAN:e.plan.coverageName||e.meta.product||"","PERIODICIDAD PAGO":hs(e.payment.frequency),PRIMA:r??"","TIPO DOCUMENTO":e.holder.docType||e.contact.docType||"","NUMERO DOCUMENTO":e.holder.docNumber||e.contact.docNumber||"","PRIMER NOMBRE":e.holder.firstName||"","SEGUNDO NOMBRE":e.holder.secondName||"","PRIMER APELLIDO":e.holder.lastName1||"","SEGUNDO APELLIDO":e.holder.lastName2||"","FECHA NACIMIENTO":e.holder.birthDate||e.lead.birthDate||"","FECHA EXP DOCUMENTO":e.holder.issueDate||"",EDAD:e.lead.age!=null?e.lead.age:"",CORREO:e.contact.email||"",CELULAR:e.contact.phone||"",GENERO:ys(e.holder.gender),CIUDAD:e.holder.city||"",DIRECCION:e.holder.address||"",EPS:e.holder.eps||"",OCUPACION:e.holder.occupation||"","FUENTE INGRESOS":e.holder.incomeSource||"",...s,"ESTADO EMISION":e.result.emissionStatus||"PENDIENTE"}}function hs(e){return e==="anual"?"Anual":e==="semestral"?"Semestral":""}function ys(e){return e==="M"?"Hombre":e==="F"?"Mujer":e||""}function bs(e){const t=e?new Date(e):new Date;if(isNaN(t.getTime()))return"";const a=s=>String(s).padStart(2,"0");return`${a(t.getDate())}/${a(t.getMonth()+1)}/${t.getFullYear()} ${a(t.getHours())}:${a(t.getMinutes())}`}function Et(e){if(Qe().meta.submitted)return Promise.resolve({ok:!0});if(kt.indexOf("/exec")===-1)return Promise.resolve({ok:!1,error:"URL del Web App no configurada."});const a=Kt();return new Promise(s=>{const i="pym-sheets-sink";let r=document.getElementById(i);r||(r=document.createElement("iframe"),r.id=i,r.name=i,r.style.display="none",document.body.appendChild(r));const n=document.createElement("form");n.method="POST",n.action=kt,n.target=i,n.style.display="none";const l=document.createElement("input");l.type="hidden",l.name="payload",l.value=JSON.stringify(a),n.appendChild(l);let o=!1;const p=(d,u)=>{if(!o){o=!0,d&&$("meta",{submitted:!0,submittedAt:new Date().toISOString()});try{n.remove()}catch{}s(d?{ok:!0}:{ok:!1,error:u||"No se pudo enviar."})}};r.onload=()=>p(!0);const m=setTimeout(()=>p(!0),8e3),c=r.onload;r.onload=()=>{clearTimeout(m),c()},document.body.appendChild(n);try{n.submit()}catch(d){clearTimeout(m),p(!1,String(d&&d.message?d.message:d))}})}function Qt(e,t){const a=Array.isArray(e)?[...e]:{...e};for(const s of Object.keys(t||{})){const i=e?e[s]:void 0,r=t[s];r&&typeof r=="object"&&!Array.isArray(r)&&i&&typeof i=="object"&&!Array.isArray(i)?a[s]=Qt(i,r):a[s]=r}return a}const fs=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],gs=["Do","Lu","Ma","Mi","Ju","Vi","Sa"];let E=null,A=null;function Ue(e,t={}){if(!e)return()=>{};vs();const a=t.maxYear||new Date().getFullYear(),s=t.minYear||a-100;return e.setAttribute("inputmode","numeric"),e.setAttribute("autocomplete","off"),e.addEventListener("input",()=>{let i=e.value.replace(/\D/g,"").slice(0,8);i.length>=5?i=`${i.slice(0,2)}/${i.slice(2,4)}/${i.slice(4)}`:i.length>=3&&(i=`${i.slice(0,2)}/${i.slice(2)}`),e.value=i,typeof t.onChange=="function"&&t.onChange(e.value)}),()=>_s(e,{minYear:s,maxYear:a,onChange:t.onChange})}function vs(){if(A)return;const e=document.createElement("div");e.className="pym-dp-overlay",e.id="pym-dp-shared-overlay";const t=document.createElement("div");t.className="pym-dp",t.id="pym-dp-shared",t.setAttribute("role","dialog"),t.setAttribute("aria-label","Seleccionar fecha"),t.setAttribute("aria-hidden","true"),document.body.appendChild(e),document.body.appendChild(t),e.addEventListener("click",Ze),A={overlay:e,dp:t}}function _s(e,t){if(e.readOnly&&e.dataset.dpOpen==="1")return;const a=new Date,s=ws(e.value);E={input:e,minYear:t.minYear,maxYear:t.maxYear,onChange:t.onChange,viewYear:s?s.getFullYear():a.getFullYear(),viewMonth:s?s.getMonth():a.getMonth(),selected:s},we(),A.overlay.classList.add("pym-dp-overlay--visible"),A.dp.classList.add("pym-dp--open"),A.dp.setAttribute("aria-hidden","false")}function Ze(){A&&(A.overlay.classList.remove("pym-dp-overlay--visible"),A.dp.classList.remove("pym-dp--open"),A.dp.setAttribute("aria-hidden","true"),E=null)}function we(){const{viewYear:e,viewMonth:t,selected:a,minYear:s,maxYear:i}=E,r=new Date(e,t,1).getDay(),n=new Date(e,t+1,0).getDate(),l=new Date(e,t,0).getDate(),o=new Date;let p="";for(let d=r-1;d>=0;d--)p+=`<span class="pym-dp__day pym-dp__day--muted">${l-d}</span>`;for(let d=1;d<=n;d++){const u=a&&a.getFullYear()===e&&a.getMonth()===t&&a.getDate()===d,y=o.getFullYear()===e&&o.getMonth()===t&&o.getDate()===d,g=["pym-dp__day"];u?g.push("pym-dp__day--selected"):y&&g.push("pym-dp__day--today"),p+=`<button type="button" class="${g.join(" ")}" data-day="${d}">${d}</button>`}let m="";for(let d=i;d>=s;d--)m+=`<option value="${d}"${d===e?" selected":""}>${d}</option>`;const c=fs.map((d,u)=>`<option value="${u}"${u===t?" selected":""}>${d}</option>`).join("");A.dp.innerHTML=`
    <div class="pym-dp__head">
      <button type="button" class="pym-dp__nav" id="pym-dp-prev" aria-label="Mes anterior">
        <img src="/Iconos/angle-left.png" alt="" aria-hidden="true">
      </button>
      <div class="pym-dp__selectors">
        <div class="pym-dp__sel">
          <select id="pym-dp-month" aria-label="Mes">${c}</select>
        </div>
        <div class="pym-dp__sel">
          <select id="pym-dp-year" aria-label="Año">${m}</select>
        </div>
      </div>
      <button type="button" class="pym-dp__nav pym-dp__nav--next" id="pym-dp-next" aria-label="Mes siguiente">
        <img src="/Iconos/angle-left.png" alt="" aria-hidden="true">
      </button>
    </div>
    <div class="pym-dp__weekdays">${gs.map(d=>`<span>${d}</span>`).join("")}</div>
    <div class="pym-dp__grid">${p}</div>
    <div class="pym-dp__actions">
      <button type="button" class="pym-dp__action" id="pym-dp-today">Hoy</button>
      <button type="button" class="pym-dp__action" id="pym-dp-clear">Limpiar</button>
    </div>
  `,A.dp.querySelector("#pym-dp-prev").addEventListener("click",()=>St(-1)),A.dp.querySelector("#pym-dp-next").addEventListener("click",()=>St(1)),A.dp.querySelector("#pym-dp-month").addEventListener("change",d=>{E.viewMonth=parseInt(d.target.value,10),we()}),A.dp.querySelector("#pym-dp-year").addEventListener("change",d=>{E.viewYear=parseInt(d.target.value,10),we()}),A.dp.querySelectorAll(".pym-dp__day[data-day]").forEach(d=>{d.addEventListener("click",()=>xt(parseInt(d.dataset.day,10)))}),A.dp.querySelector("#pym-dp-today").addEventListener("click",()=>{const d=new Date;E.viewYear=d.getFullYear(),E.viewMonth=d.getMonth(),xt(d.getDate())}),A.dp.querySelector("#pym-dp-clear").addEventListener("click",()=>{E.input.value="",typeof E.onChange=="function"&&E.onChange(""),Ze()})}function St(e){E.viewMonth+=e,E.viewMonth<0&&(E.viewMonth=11,E.viewYear--),E.viewMonth>11&&(E.viewMonth=0,E.viewYear++),we()}function xt(e){const t=String(e).padStart(2,"0"),a=String(E.viewMonth+1).padStart(2,"0"),s=`${t}/${a}/${E.viewYear}`;E.input.value=s;const i=E.onChange;Ze(),typeof i=="function"&&i(s)}function ws(e){const t=/^(\d{2})\/(\d{2})\/(\d{4})$/.exec(e||"");if(!t)return null;const a=new Date(parseInt(t[3],10),parseInt(t[2],10)-1,parseInt(t[1],10));return isNaN(a.getTime())?null:a}function et(e,t=!0){if(e)if(t){if(e.dataset.loading==="1")return;e.dataset.loading="1",e.dataset.label=e.innerHTML,e.disabled=!0,e.classList.add("pym-btn--loading"),e.innerHTML='<span class="pym-spinner" aria-hidden="true"></span><span class="pym-btn__loading-text">Cargando…</span>'}else e.dataset.loading="",e.disabled=!1,e.classList.remove("pym-btn--loading"),e.dataset.label!=null&&(e.innerHTML=e.dataset.label)}function K(e,t){et(e,!0),setTimeout(()=>{window.location.href=t},2e3)}const ks=[{icon:"/Iconos/shield-dog.png",title:"Fallecimiento por cualquier causa",text:"Sus beneficiarios reciben el 100% del valor asegurado."},{icon:"/Iconos/Latido.png",title:"Mayor protección por accidente",text:"Sus beneficiarios reciben un 100% adicional si fallece por accidente."},{icon:"/Iconos/shield-dog (1).png",title:"Incapacidad total y permanente",text:"Reciba el valor asegurado ante una incapacidad de por vida por enfermedad o accidente."},{icon:"/Iconos/shield-dog (2).png",title:"Pérdida de manos, pies o visión",text:"Reciba un beneficio económico si un accidente le causa este tipo de pérdidas."}];function Es(e,t=1){e.innerHTML=`
    <div class="pym-home">
      <!-- HEADER -->
      <header class="pym-header">
        <nav class="pym-nav" aria-label="Barra de navegación principal">
          <img src="/images/logo-seguros-bolivar.png" alt="Seguros Bolívar" class="pym-nav__logo" width="156" height="60">
          <button type="button" class="pym-btn pym-btn--cta pym-btn--pill" data-qa-id="pym-home-btn_buy_now">Comprar ahora</button>
        </nav>
        <div class="pym-divider"></div>
      </header>

      <!-- HERO BANNER -->
      <section class="pym-hero" aria-label="Presentación del producto">
        <div class="pym-hero__text">
          <h1 class="pym-hero__title">
            <span class="pym-hero__title--highlight">Seguro</span>
            <span class="pym-hero__title--white">de Vida Pymes</span>
          </h1>
          <p class="pym-hero__subtitle">Proteja la estabilidad de su negocio y la tranquilidad de su familia.</p>
        </div>

        <div class="pym-form-card" id="pym-form-card">
          <div class="pym-form-card__inner">
            <div class="pym-form-card__header">
              <h2 class="pym-form-card__title">Comprar mi seguro ahora</h2>
              <p class="pym-form-card__step">Arme su plan y proteja su vida en un solo lugar.</p>
            </div>

            <div class="pym-progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" aria-label="Progreso del formulario">
              <div class="pym-progress__bar" style="width:0%"></div>
            </div>

            <form class="pym-form-card__fields" id="pym-form" novalidate>
              ${t===1?xs():Cs()}
            </form>

            <div class="pym-form-card__actions">
              ${t>1?'<button type="button" class="pym-btn pym-btn--ghost pym-btn--pill" id="pym-prev" data-qa-id="pym-home-btn_prev">Anterior</button>':""}
              <button type="button" class="pym-btn pym-btn--cta pym-btn--pill" id="pym-next" data-qa-id="pym-home-btn_continue">Continuar</button>
            </div>
          </div>
        </div>
      </section>

      <!-- BENEFICIOS -->
      <section class="pym-benefits" aria-label="Coberturas del seguro">
        <h2 class="pym-benefits__title">Protección completa en un solo plan</h2>
        <div class="pym-benefits__grid">
          ${ks.map(Ss).join("")}
        </div>
      </section>

      <!-- BANNER CTA -->
      <section class="pym-banner" aria-label="Conozca más">
        <div class="pym-banner__text">
          <h2 class="pym-banner__title">¿Quiere conocer más?</h2>
          <p class="pym-banner__body">Explore a su ritmo todos los detalles de las coberturas de su <strong>Seguro de Vida para Pymes.</strong></p>
          <button type="button" class="pym-btn pym-btn--cta pym-btn--pill pym-btn--lg" data-qa-id="pym-home-btn_know_more">Conocer más</button>
        </div>
        <div class="pym-banner__image">
          <img src="/images/Image-card.png" alt="Empresario revisando su negocio" loading="lazy">
        </div>
      </section>

      <!-- FOOTER -->
      <footer class="pym-footer">
        <p class="pym-footer__text">&copy; 2026 Compañía de Seguros Bolívar S.A. – NIT 860.003.111-9 – Todos los derechos reservados</p>
      </footer>
    </div>
  `,Ds(t)}function Ss(e){return`
    <article class="pym-benefit">
      <span class="pym-benefit__icon" aria-hidden="true">
        <img src="${e.icon}" alt="" width="28" height="28">
      </span>
      <h3 class="pym-benefit__title">${e.title}</h3>
      <p class="pym-benefit__text">${e.text}</p>
    </article>
  `}function xs(){return`
    <div class="pym-field">
      <label class="pym-field__label" for="pym-doc-type">Tipo de documento</label>
      <div class="pym-field__input">
        <select id="pym-doc-type" data-qa-id="pym-home-select_doc_type" required>
          <option value="" disabled selected>Seleccione una opción</option>
          <option>Cédula de ciudadanía</option>
          <option>Cédula de extranjería</option>
          <option>Pasaporte</option>
          <option>NIT</option>
        </select>
        <img src="/Iconos/angle-left.png" alt="" class="pym-field__chevron" aria-hidden="true">
      </div>
    </div>
    <div class="pym-field">
      <label class="pym-field__label" for="pym-doc-number">Número de documento</label>
      <div class="pym-field__input">
        <img src="/Iconos/Name-icon (5).png" alt="" class="pym-icon pym-icon--field" aria-hidden="true">
        <input type="text" id="pym-doc-number" inputmode="numeric" placeholder="Ej: 1032508877" data-qa-id="pym-home-input_doc_number" required>
      </div>
    </div>
    <div class="pym-field">
      <label class="pym-field__label" for="pym-phone">Número de celular</label>
      <div class="pym-field__input">
        <img src="/Iconos/mobile-button.png" alt="" class="pym-icon pym-icon--field" aria-hidden="true">
        <input type="tel" id="pym-phone" inputmode="numeric" placeholder="Ej: 3103025462" data-qa-id="pym-home-input_phone" required>
      </div>
    </div>
    <div class="pym-field">
      <label class="pym-field__label" for="pym-email">Correo electrónico</label>
      <div class="pym-field__input">
        <img src="/Iconos/Name-icon (4).png" alt="" class="pym-icon pym-icon--field" aria-hidden="true">
        <input type="email" id="pym-email" placeholder="Ej: sucorreo@email.com" data-qa-id="pym-home-input_email" required>
      </div>
    </div>
    <div class="pym-checks">
      <label class="pym-check">
        <input type="checkbox" id="pym-terms" data-qa-id="pym-home-chk_terms" checked>
        <span>Acepto <a href="#">los términos y condiciones del canal digital.</a></span>
      </label>
      <label class="pym-check">
        <input type="checkbox" id="pym-data" data-qa-id="pym-home-chk_data" checked>
        <span>Acepto la <a href="#">Política de Tratamiento de Datos Personales</a> y el <a href="#">Tratamiento de mis datos.</a></span>
      </label>
    </div>
  `}function Cs(){return`
    <div class="pym-field">
      <label class="pym-field__label" for="pym-birthdate">Fecha de nacimiento del asegurado</label>
      <div class="pym-field__input">
        <button type="button" class="pym-icon pym-icon--field pym-icon--btn" id="pym-birthdate-btn" aria-label="Abrir calendario">
          <img src="/Iconos/calendar-day.png" alt="" aria-hidden="true">
        </button>
        <input type="text" id="pym-birthdate" placeholder="DD/MM/AAAA" maxlength="10" data-qa-id="pym-home-input_birthdate" required>
      </div>
    </div>
    <div class="pym-field">
      <label class="pym-field__label" for="pym-advisor-code">Clave del asesor <span class="pym-field__optional">(opcional)</span></label>
      <div class="pym-field__input">
        <img src="/Iconos/Name-icon (5).png" alt="" class="pym-icon pym-icon--field" aria-hidden="true">
        <input type="text" id="pym-advisor-code" inputmode="numeric" placeholder="Ej: 172237" data-qa-id="pym-home-input_advisor_code">
      </div>
    </div>
    <div class="pym-field">
      <label class="pym-field__label" for="pym-advisor-email">Correo electrónico del asesor <span class="pym-field__optional">(opcional)</span></label>
      <div class="pym-field__input">
        <img src="/Iconos/Name-icon (4).png" alt="" class="pym-icon pym-icon--field" aria-hidden="true">
        <input type="email" id="pym-advisor-email" placeholder="Ej: sucorreo@email.com" data-qa-id="pym-home-input_advisor_email">
      </div>
    </div>
  `}function Ds(e){var p,m;const t=document.getElementById("pym-next"),a=document.getElementById("pym-prev");if(e===2){const c=document.getElementById("pym-birthdate"),d=new Date().getFullYear(),u=Ue(c,{minYear:d-100,maxYear:d});(p=document.getElementById("pym-birthdate-btn"))==null||p.addEventListener("click",u)}const s=5,i=document.querySelector(".pym-progress__bar"),r=document.querySelector(".pym-progress"),n=c=>c.filter(d=>{const u=document.getElementById(d);return u&&u.value&&u.value.trim()!==""}).length,l=()=>{let c;e===1?c=n(["pym-doc-type","pym-doc-number","pym-phone","pym-email"]):c=4+n(["pym-birthdate"]);const d=Math.round(c/s*100);i&&(i.style.width=`${d}%`),r&&r.setAttribute("aria-valuenow",String(d))};(e===1?["pym-doc-type","pym-doc-number","pym-phone","pym-email"]:["pym-birthdate"]).forEach(c=>{const d=document.getElementById(c);d&&(d.addEventListener("input",l),d.addEventListener("change",l))}),l(),a==null||a.addEventListener("click",()=>Ct(e-1)),t==null||t.addEventListener("click",()=>{Ls(e)&&(et(t,!0),e<2?($s(),Ct(e+1)):(As(),Is()))}),(m=document.querySelector('[data-qa-id="pym-home-btn_buy_now"]'))==null||m.addEventListener("click",()=>{const c=document.getElementById("pym-form-card");c&&(c.scrollIntoView({behavior:"smooth",block:"center"}),c.classList.add("pym-form-card--highlight"),setTimeout(()=>c.classList.remove("pym-form-card--highlight"),1200),setTimeout(()=>{const d=c.querySelector("input, select");d==null||d.focus({preventScroll:!0})},500))})}function Is(){const e=new URL(window.location);e.searchParams.set("page","select-plan"),e.searchParams.delete("step"),window.location.href=e.toString()}function As(){const e=document.getElementById("pym-birthdate");if(!e||!e.value.trim())return;let t=e.value.trim();const a=/^(\d{4})-(\d{2})-(\d{2})$/.exec(t);a&&(t=`${a[3]}/${a[2]}/${a[1]}`),localStorage.setItem("pym_birthDate",t);const s=Zt(t);s!=null&&localStorage.setItem("pym_age",String(s));const i=r=>{var n;return((n=document.getElementById(r))==null?void 0:n.value.trim())||""};$("lead",{birthDate:t,age:s??null,advisorCode:i("pym-advisor-code"),advisorEmail:i("pym-advisor-email")})}function $s(){var r,n;const e=l=>{var o;return((o=document.getElementById(l))==null?void 0:o.value.trim())||""},t=e("pym-doc-type"),a=e("pym-doc-number"),s=e("pym-phone"),i=e("pym-email");t&&localStorage.setItem("pym_docType",t),a&&localStorage.setItem("pym_docNumber",a),s&&localStorage.setItem("pym_phone",s),i&&localStorage.setItem("pym_email",i),$("contact",{docType:t,docNumber:a,phone:s,email:i,termsAccepted:!!((r=document.getElementById("pym-terms"))!=null&&r.checked),dataAccepted:!!((n=document.getElementById("pym-data"))!=null&&n.checked)})}function Zt(e){const t=/^(\d{2})\/(\d{2})\/(\d{4})$/.exec(e||"");if(!t)return null;const a=new Date(parseInt(t[3],10),parseInt(t[2],10)-1,parseInt(t[1],10));if(isNaN(a.getTime()))return null;const s=new Date;let i=s.getFullYear()-a.getFullYear();const r=s.getMonth()-a.getMonth();return(r<0||r===0&&s.getDate()<a.getDate())&&i--,i}function Ls(e){const t=document.getElementById("pym-form"),a=t.querySelectorAll("input[required], select[required]");let s=!0;if(a.forEach(i=>{const r=i.closest(".pym-field__input");i.value.trim()||(s=!1,r&&(r.classList.add("pym-field__input--error"),setTimeout(()=>r.classList.remove("pym-field__input--error"),2e3)))}),e===1&&t.querySelectorAll('input[type="checkbox"]').forEach(i=>{if(!i.checked){s=!1;const r=i.closest(".pym-check");r&&(r.classList.add("pym-check--error"),setTimeout(()=>r.classList.remove("pym-check--error"),2e3))}}),e===2){const i=document.getElementById("pym-birthdate");if(i&&i.value.trim()){const r=Zt(i.value.trim());r==null||r<18?(s=!1,Ms("El asegurado debe ser mayor de edad (18 años o más).")):Ps()}}return s}function Ms(e){var s,i;const t=(s=document.getElementById("pym-birthdate"))==null?void 0:s.closest(".pym-field");if(!t)return;(i=t.querySelector(".pym-field__input"))==null||i.classList.add("pym-field__input--error");let a=t.querySelector(".pym-field__error");a||(a=document.createElement("p"),a.className="pym-field__error",t.appendChild(a)),a.textContent=e}function Ps(){var t,a,s;const e=(t=document.getElementById("pym-birthdate"))==null?void 0:t.closest(".pym-field");e&&((a=e.querySelector(".pym-field__input"))==null||a.classList.remove("pym-field__input--error"),(s=e.querySelector(".pym-field__error"))==null||s.remove())}function Ct(e){const t=new URL(window.location);e<=1?t.searchParams.delete("step"):t.searchParams.set("step",String(e)),window.location.href=t.toString()}const Bs={20:{5e7:{anual:327400,semestral:170400},1e8:{anual:654800,semestral:340900},15e7:{anual:982200,semestral:511400},2e8:{anual:1309600,semestral:681900},25e7:{anual:1637e3,semestral:852400},3e8:{anual:1964400,semestral:1022900},4e8:{anual:2619300,semestral:1363800},5e8:{anual:3274100,semestral:1704800}},21:{5e7:{anual:328400,semestral:171e3},1e8:{anual:656900,semestral:342e3},15e7:{anual:985400,semestral:513100},2e8:{anual:1313900,semestral:684100},25e7:{anual:1642400,semestral:855200},3e8:{anual:1970900,semestral:1026200},4e8:{anual:2627900,semestral:1368300},5e8:{anual:3284800,semestral:1710400}},22:{5e7:{anual:329500,semestral:171600},1e8:{anual:659100,semestral:343200},15e7:{anual:988600,semestral:514800},2e8:{anual:1318200,semestral:686400},25e7:{anual:1647800,semestral:858e3},3e8:{anual:1977300,semestral:1029600},4e8:{anual:2636500,semestral:1372800},5e8:{anual:3295600,semestral:1716e3}},23:{5e7:{anual:331100,semestral:172400},1e8:{anual:662300,semestral:344800},15e7:{anual:993500,semestral:517300},2e8:{anual:1324700,semestral:689700},25e7:{anual:1655800,semestral:862200},3e8:{anual:1987e3,semestral:1034600},4e8:{anual:2649400,semestral:1379500},5e8:{anual:3311700,semestral:1724400}},24:{5e7:{anual:332700,semestral:173200},1e8:{anual:665500,semestral:346500},15e7:{anual:998300,semestral:519800},2e8:{anual:1331100,semestral:693100},25e7:{anual:1663900,semestral:866400},3e8:{anual:1996700,semestral:1039600},4e8:{anual:2662300,semestral:1386200},5e8:{anual:3327800,semestral:1732800}},25:{5e7:{anual:333800,semestral:173800},1e8:{anual:667700,semestral:347600},15e7:{anual:1001500,semestral:521500},2e8:{anual:1335400,semestral:695300},25e7:{anual:1669300,semestral:869200},3e8:{anual:2003100,semestral:1043e3},4e8:{anual:2670900,semestral:1390700},5e8:{anual:3338600,semestral:1738400}},26:{5e7:{anual:335400,semestral:174600},1e8:{anual:670900,semestral:349300},15e7:{anual:1006400,semestral:524e3},2e8:{anual:1341900,semestral:698700},25e7:{anual:1677300,semestral:873400},3e8:{anual:2012800,semestral:1048e3},4e8:{anual:2683800,semestral:1397400},5e8:{anual:3354700,semestral:1746800}},27:{5e7:{anual:337e3,semestral:175500},1e8:{anual:674100,semestral:351e3},15e7:{anual:1011200,semestral:526500},2e8:{anual:1348300,semestral:702e3},25e7:{anual:1685400,semestral:877600},3e8:{anual:2022500,semestral:1053100},4e8:{anual:2696700,semestral:1404100},5e8:{anual:3370800,semestral:1755200}},28:{5e7:{anual:338100,semestral:176e3},1e8:{anual:676300,semestral:352100},15e7:{anual:1014400,semestral:528200},2e8:{anual:1352600,semestral:704300},25e7:{anual:1690800,semestral:880400},3e8:{anual:2028900,semestral:1056400},4e8:{anual:2705300,semestral:1408600},5e8:{anual:3381600,semestral:1760800}},29:{5e7:{anual:339700,semestral:176900},1e8:{anual:679500,semestral:353800},15e7:{anual:1019300,semestral:530700},2e8:{anual:1359100,semestral:707600},25e7:{anual:1698800,semestral:884600},3e8:{anual:2038600,semestral:1061500},4e8:{anual:2718200,semestral:1415300},5e8:{anual:3397700,semestral:1769200}},30:{5e7:{anual:341300,semestral:177700},1e8:{anual:682700,semestral:355500},15e7:{anual:1024100,semestral:533200},2e8:{anual:1365500,semestral:711e3},25e7:{anual:1706900,semestral:888800},3e8:{anual:2048300,semestral:1066500},4e8:{anual:2731100,semestral:1422e3},5e8:{anual:3413800,semestral:1777600}},31:{5e7:{anual:343500,semestral:178800},1e8:{anual:687e3,semestral:357700},15e7:{anual:1030600,semestral:536600},2e8:{anual:1374100,semestral:715500},25e7:{anual:1717600,semestral:894400},3e8:{anual:2061200,semestral:1073200},4e8:{anual:2748300,semestral:1431e3},5e8:{anual:3435300,semestral:1788800}},32:{5e7:{anual:345100,semestral:179700},1e8:{anual:690300,semestral:359400},15e7:{anual:1035400,semestral:359400},2e8:{anual:1380600,semestral:718800},25e7:{anual:1725700,semestral:898600},3e8:{anual:2070900,semestral:1078300},4e8:{anual:2761200,semestral:1437700},5e8:{anual:3451500,semestral:1797100}},33:{5e7:{anual:347800,semestral:181100},1e8:{anual:695600,semestral:362200},15e7:{anual:1043500,semestral:543300},2e8:{anual:1391300,semestral:724400},25e7:{anual:1739100,semestral:905500},3e8:{anual:2087e3,semestral:1086700},4e8:{anual:2782700,semestral:1448900},5e8:{anual:3478300,semestral:1811100}},34:{5e7:{anual:349400,semestral:181900},1e8:{anual:698900,semestral:363900},15e7:{anual:1048300,semestral:545800},2e8:{anual:1397800,semestral:727800},25e7:{anual:1747200,semestral:909700},3e8:{anual:2096700,semestral:1091700},4e8:{anual:2795600,semestral:1455600},5e8:{anual:3494500,semestral:1819500}},35:{5e7:{anual:350500,semestral:182500},1e8:{anual:701e3,semestral:365e3},15e7:{anual:1051500,semestral:547500},2e8:{anual:1402100,semestral:73e4},25e7:{anual:1752600,semestral:912500},3e8:{anual:2103100,semestral:1095100},4e8:{anual:2804200,semestral:1460100},5e8:{anual:3505200,semestral:1825100}},36:{5e7:{anual:352100,semestral:183300},1e8:{anual:704200,semestral:366700},15e7:{anual:1056400,semestral:55e4},2e8:{anual:1408500,semestral:733400},25e7:{anual:1760600,semestral:916700},3e8:{anual:2112800,semestral:1100100},4e8:{anual:2817100,semestral:1466800},5e8:{anual:3521300,semestral:1833500}},37:{5e7:{anual:354800,semestral:184700},1e8:{anual:709600,semestral:369500},15e7:{anual:1064400,semestral:554200},2e8:{anual:1419300,semestral:739e3},25e7:{anual:1774100,semestral:923700},3e8:{anual:2128900,semestral:1108500},4e8:{anual:2838600,semestral:1478e3},5e8:{anual:3548200,semestral:1847500}},38:{5e7:{anual:358e3,semestral:186400},1e8:{anual:716100,semestral:372800},15e7:{anual:1074100,semestral:559300},2e8:{anual:1432200,semestral:745700},25e7:{anual:1790200,semestral:932100},3e8:{anual:2148300,semestral:1118600},4e8:{anual:2864400,semestral:1491400},5e8:{anual:3580500,semestral:1864300}},39:{5e7:{anual:361200,semestral:188100},1e8:{anual:722500,semestral:376200},15e7:{anual:1083800,semestral:564300},2e8:{anual:1445100,semestral:752400},25e7:{anual:1806300,semestral:940500},3e8:{anual:2167600,semestral:1128600},4e8:{anual:2890200,semestral:1504900},5e8:{anual:3612700,semestral:1881100}},40:{5e7:{anual:365500,semestral:190300},1e8:{anual:731100,semestral:380700},15e7:{anual:1096700,semestral:571e3},2e8:{anual:1462300,semestral:761400},25e7:{anual:1827800,semestral:951700},3e8:{anual:2193400,semestral:1142100},4e8:{anual:2924600,semestral:1522800},5e8:{anual:3655700,semestral:1903500}},41:{5e7:{anual:370400,semestral:192800},1e8:{anual:740800,semestral:385700},15e7:{anual:1111200,semestral:578600},2e8:{anual:1481600,semestral:771400},25e7:{anual:1852e3,semestral:964300},3e8:{anual:2222400,semestral:1157200},4e8:{anual:2963300,semestral:1542900},5e8:{anual:3704100,semestral:1928700}},42:{5e7:{anual:376800,semestral:196200},1e8:{anual:753700,semestral:392400},15e7:{anual:1130500,semestral:588600},2e8:{anual:1507400,semestral:784900},25e7:{anual:1884300,semestral:981100},3e8:{anual:2261100,semestral:1177300},4e8:{anual:3014900,semestral:1569800},5e8:{anual:3768600,semestral:1962300}},43:{5e7:{anual:386500,semestral:201200},1e8:{anual:773e3,semestral:402500},15e7:{anual:1159600,semestral:603800},2e8:{anual:1546100,semestral:805e3},25e7:{anual:1932600,semestral:1006300},3e8:{anual:2319200,semestral:1207600},4e8:{anual:3092300,semestral:1610100},5e8:{anual:3865300,semestral:2012700}},44:{5e7:{anual:398300,semestral:207400},1e8:{anual:796700,semestral:414800},15e7:{anual:1195e3,semestral:622200},2e8:{anual:1593400,semestral:829700},25e7:{anual:1991800,semestral:1037100},3e8:{anual:2390100,semestral:1244500},4e8:{anual:3186900,semestral:1659400},5e8:{anual:3983600,semestral:2074200}},45:{5e7:{anual:414400,semestral:215800},1e8:{anual:828900,semestral:431600},15e7:{anual:1243400,semestral:647400},2e8:{anual:1657900,semestral:863200},25e7:{anual:2072400,semestral:1079100},3e8:{anual:2486900,semestral:1294900},4e8:{anual:3315900,semestral:1726500},5e8:{anual:4144800,semestral:2158200}},46:{5e7:{anual:435400,semestral:226700},1e8:{anual:870900,semestral:453400},15e7:{anual:1306300,semestral:680200},2e8:{anual:1741800,semestral:906900},25e7:{anual:2177200,semestral:1133600},3e8:{anual:2612700,semestral:1360400},4e8:{anual:3483600,semestral:1813900},5e8:{anual:4354500,semestral:2267300}},47:{5e7:{anual:462800,semestral:241e3},1e8:{anual:925700,semestral:482e3},15e7:{anual:1388500,semestral:723e3},2e8:{anual:1851400,semestral:964e3},25e7:{anual:2314300,semestral:1205e3},3e8:{anual:2777100,semestral:1446e3},4e8:{anual:3702900,semestral:1928100},5e8:{anual:4628600,semestral:2410100}},48:{5e7:{anual:496700,semestral:258600},1e8:{anual:993400,semestral:517200},15e7:{anual:1490100,semestral:775900},2e8:{anual:1986900,semestral:1034500},25e7:{anual:2483600,semestral:1293200},3e8:{anual:2980300,semestral:1551800},4e8:{anual:3973800,semestral:2069100},5e8:{anual:4967200,semestral:2586400}},49:{5e7:{anual:534300,semestral:278200},1e8:{anual:1068700,semestral:556400},15e7:{anual:1603e3,semestral:834700},2e8:{anual:2137400,semestral:1112900},25e7:{anual:2671700,semestral:1391100},3e8:{anual:3206100,semestral:1669400},4e8:{anual:4274800,semestral:2225800},5e8:{anual:5343500,semestral:2782300}},50:{5e7:{anual:576200,semestral:3e5},1e8:{anual:1152500,semestral:600100},15e7:{anual:1728800,semestral:900200},2e8:{anual:2305100,semestral:1200200},25e7:{anual:2881300,semestral:1500300},3e8:{anual:3457600,semestral:1800400},4e8:{anual:4610200,semestral:2400500},5e8:{anual:5762700,semestral:3000600}},51:{5e7:{anual:619800,semestral:322700},1e8:{anual:1239600,semestral:645400},15e7:{anual:1859400,semestral:968200},2e8:{anual:2479200,semestral:1290900},25e7:{anual:3099e3,semestral:1613600},3e8:{anual:3718800,semestral:1936400},4e8:{anual:4958500,semestral:2581800},5e8:{anual:6198100,semestral:3227300}},52:{5e7:{anual:663300,semestral:345400},1e8:{anual:1326700,semestral:690800},15e7:{anual:199e4,semestral:1036200},2e8:{anual:2653400,semestral:1381600},25e7:{anual:3316700,semestral:1727e3},3e8:{anual:3980100,semestral:2072400},4e8:{anual:5306800,semestral:2763200},5e8:{anual:6633500,semestral:3454e3}},53:{5e7:{anual:704700,semestral:366900},1e8:{anual:1409400,semestral:733900},15e7:{anual:2114200,semestral:1100800},2e8:{anual:2818900,semestral:1467800},25e7:{anual:3523600,semestral:1834700},3e8:{anual:4228400,semestral:2201700},4e8:{anual:5637900,semestral:2935600},5e8:{anual:7047300,semestral:3669500}},54:{5e7:{anual:742900,semestral:386800},1e8:{anual:1485800,semestral:773600},15e7:{anual:2228700,semestral:1160400},2e8:{anual:2971600,semestral:1547300},25e7:{anual:3714500,semestral:1934100},3e8:{anual:4457400,semestral:2320900},4e8:{anual:5943200,semestral:3094600},5e8:{anual:7429e3,semestral:3868200}},55:{5e7:{anual:775600,semestral:403900},1e8:{anual:1551300,semestral:807800},15e7:{anual:2327e3,semestral:1211700},2e8:{anual:3102700,semestral:1615600},25e7:{anual:3878400,semestral:2019500},3e8:{anual:4654100,semestral:2423400},4e8:{anual:6205500,semestral:3231200},5e8:{anual:7756800,semestral:4039e3}},56:{5e7:{anual:801400,semestral:417300},1e8:{anual:1602900,semestral:834600},15e7:{anual:2404400,semestral:1252e3},2e8:{anual:3205900,semestral:1669300},25e7:{anual:4007400,semestral:2086600},3e8:{anual:4808900,semestral:2504e3},4e8:{anual:6411900,semestral:3338600},5e8:{anual:8014800,semestral:4173300}},57:{5e7:{anual:821300,semestral:427600},1e8:{anual:1642700,semestral:855300},15e7:{anual:2464100,semestral:1283e3},2e8:{anual:3285500,semestral:1710700},25e7:{anual:4106800,semestral:2138400},3e8:{anual:4928200,semestral:2566100},4e8:{anual:6571e3,semestral:3421500},5e8:{anual:8213700,semestral:4276900}},58:{5e7:{anual:841200,semestral:438e3},1e8:{anual:1682500,semestral:876e3},15e7:{anual:2523700,semestral:1314100},2e8:{anual:3365e3,semestral:1752100},25e7:{anual:4206300,semestral:2190200},3e8:{anual:5047500,semestral:2628200},4e8:{anual:6730100,semestral:3504300},5e8:{anual:8412600,semestral:4380400}},59:{5e7:{anual:869200,semestral:452600},1e8:{anual:1738400,semestral:905100},15e7:{anual:2607600,semestral:1357700},2e8:{anual:3476800,semestral:1810300},25e7:{anual:4346e3,semestral:2262900},3e8:{anual:5215200,semestral:2715500},4e8:{anual:6953700,semestral:3620700},5e8:{anual:8692100,semestral:4525900}},60:{5e7:{anual:913800,semestral:475800},1e8:{anual:1827600,semestral:951600},15e7:{anual:2741400,semestral:1427400},2e8:{anual:3655300,semestral:1903300},25e7:{anual:4569100,semestral:2379100},3e8:{anual:5482900,semestral:2854900},4e8:{anual:7310600,semestral:3806600},5e8:{anual:9138200,semestral:4758200}},61:{5e7:{anual:977700,semestral:509100},1e8:{anual:1955500,semestral:1018200},15e7:{anual:2933300,semestral:1527400},2e8:{anual:3911100,semestral:2036500},25e7:{anual:4888900,semestral:2545600},3e8:{anual:5866700,semestral:3054800},4e8:{anual:7822300,semestral:4073e3},5e8:{anual:9777800,semestral:5091300}},62:{5e7:{anual:1058900,semestral:551300},1e8:{anual:2117900,semestral:1102700},15e7:{anual:3176800,semestral:1654100},2e8:{anual:4235800,semestral:2205500},25e7:{anual:5294700,semestral:2756900},3e8:{anual:6353700,semestral:3308300},4e8:{anual:8471600,semestral:4411100},5e8:{anual:10589500,semestral:5513900}},63:{5e7:{anual:1157800,semestral:602800},1e8:{anual:2315700,semestral:1205700},15e7:{anual:3473500,semestral:1808600},2e8:{anual:4631400,semestral:2411500},25e7:{anual:5789200,semestral:3014400},3e8:{anual:6947100,semestral:3617300},4e8:{anual:9262800,semestral:4823100},5e8:{anual:11578500,semestral:6028900}},64:{5e7:{anual:1273400,semestral:663e3},1e8:{anual:2546800,semestral:1326100},15e7:{anual:3820200,semestral:1989100},2e8:{anual:5093600,semestral:2652200},25e7:{anual:6367e3,semestral:3315300},3e8:{anual:7640400,semestral:3978300},4e8:{anual:10187300,semestral:5304500},5e8:{anual:12734100,semestral:6630600}},65:{5e7:{anual:1402400,semestral:730200},1e8:{anual:2804800,semestral:1460400},15e7:{anual:4207200,semestral:2190700},2e8:{anual:5609600,semestral:2920900},25e7:{anual:7012e3,semestral:3651100},3e8:{anual:8414400,semestral:4381400},4e8:{anual:11219300,semestral:5841800},5e8:{anual:14024100,semestral:7302300}},66:{5e7:{anual:1545900,semestral:804900},1e8:{anual:3091800,semestral:1609900},15e7:{anual:4637700,semestral:2414800},2e8:{anual:6183700,semestral:3219800},25e7:{anual:7729600,semestral:4024800},3e8:{anual:9275500,semestral:4829700},4e8:{anual:12367400,semestral:6439700},5e8:{anual:15459200,semestral:8049600}},67:{5e7:{anual:1696900,semestral:883600},1e8:{anual:3393900,semestral:1767200},15e7:{anual:5090800,semestral:2650800},2e8:{anual:6787800,semestral:3534400},25e7:{anual:8484800,semestral:4418e3},3e8:{anual:10181700,semestral:5301600},4e8:{anual:13575700,semestral:7068800},5e8:{anual:16969600,semestral:8836e3}},68:{5e7:{anual:1848500,semestral:962500},1e8:{anual:3697e3,semestral:1925e3},15e7:{anual:5545600,semestral:2887600},2e8:{anual:7394100,semestral:3850100},25e7:{anual:9242600,semestral:4812600},3e8:{anual:11091200,semestral:5775200},4e8:{anual:14788300,semestral:7700200},5e8:{anual:18485300,semestral:9625300}},69:{5e7:{anual:2001100,semestral:1042e3},1e8:{anual:4002300,semestral:2084e3},15e7:{anual:6003500,semestral:3126e3},2e8:{anual:8004700,semestral:4168e3},25e7:{anual:10005900,semestral:521e4},3e8:{anual:12007100,semestral:6252100},4e8:{anual:16009500,semestral:8336100},5e8:{anual:20011800,semestral:10420100}},70:{5e7:{anual:2158600,semestral:1124e3},1e8:{anual:4317300,semestral:2248e3},15e7:{anual:6476e3,semestral:3372e3},2e8:{anual:8634700,semestral:4496e3},25e7:{anual:10793300,semestral:5620100},3e8:{anual:12952e3,semestral:6744100},4e8:{anual:17269400,semestral:8992100},5e8:{anual:21586700,semestral:11240200}}},N=[5e7,1e8,15e7,2e8,25e7,3e8,4e8,5e8],ke=N[0],Os=N[N.length-1],qs=20,Ts=70;function Ns(){const e=parseInt(localStorage.getItem("pym_age")||"35",10);return isNaN(e)?35:Math.min(Ts,Math.max(qs,e))}const Dt=[{id:"fallecimiento",icon:"/Iconos/shield-dog.png",title:"Fallecimiento por cualquier causa",detail:"Entrega el 100% del valor asegurado contratado a sus beneficiarios si el fallecimiento ocurre por una enfermedad no preexistente, un accidente o un homicidio. Durante los primeros 2 años no cubre suicidio ni eventos relacionados con VIH o SIDA. <strong>Hasta por $150.000.000.</strong>"},{id:"accidente",icon:"/Iconos/Latido.png",title:"Mayor protección por accidente",detail:"Entrega a sus beneficiarios la cobertura básica de vida más una suma igual adicional si el fallecimiento ocurre como consecuencia directa e inmediata de un accidente. <strong>Hasta por $150.000.000.</strong>"},{id:"incapacidad",icon:"/Iconos/shield-dog (1).png",title:"Incapacidad total y permanente",detail:"Entrega el 100% del valor asegurado directamente al titular si una enfermedad, lesión o hecho violento le impide realizar de por vida 3 o más funciones básicas diarias: comer, vestirse, trasladarse, moverse o realizar su higiene personal. <strong>Hasta por $150.000.000.</strong>"},{id:"perdida",icon:"/Iconos/shield-dog (2).png",title:"Pérdida de manos, pies o visión",detail:"Entrega una indemnización directamente al titular si sufre la pérdida de las manos, los pies o la visión en ambos ojos a causa de un accidente, según la tabla de indemnizaciones del contrato. <strong>Hasta por $150.000.000.</strong>"}];let L=ke;function Rs(e){const t=parseInt(localStorage.getItem("pym_insuredValue")||String(ke),10);L=N.includes(t)?t:ke,e.innerHTML=`
    <div class="pym-sp-page">
      <!-- HEADER -->
      <header class="pym-sp-header">
        <img src="/images/logo-seguros-bolivar.png" alt="Seguros Bolívar" class="pym-sp-header__logo" width="130" height="38">
      </header>

      <div class="pym-sp-content">
        <!-- STEPPER VERTICAL (4 pasos) -->
        <aside class="pym-sp-stepper" aria-label="Progreso de compra">
          ${ye(1,"Elija su<br>protección","active")}
          ${Be()}
          ${ye(2,"Datos<br>personales","pending")}
          ${Be()}
          ${ye(3,"Datos de los<br>beneficiarios","pending")}
          ${Be()}
          ${ye(4,"Confirmación","pending")}
        </aside>

        <!-- ÁREA PRINCIPAL -->
        <main class="pym-sp-main">
          <button type="button" class="pym-sp-back" id="pym-sp-back" data-qa-id="pym-sp-btn_back">
            <img src="/Iconos/angle-left.png" alt="" class="pym-sp-back__icon" aria-hidden="true">
            <span>Volver</span>
          </button>

          <div class="pym-sp-heading">
            <h1 class="pym-sp-heading__title">Elija el valor asegurado para su negocio</h1>
            <p class="pym-sp-heading__subtitle">Ajuste el monto y revise la prima de su plan.</p>
          </div>

          <div class="pym-sp-grid">
            <!-- COLUMNA IZQUIERDA -->
            <div class="pym-sp-left">
              <!-- Valor asegurado -->
              <section class="pym-sp-card">
                <div class="pym-sp-card__head">
                  <h2 class="pym-sp-card__title">Valor asegurado
                    <img src="/Iconos/info-circle.png" alt="Información" class="pym-sp-card__info">
                  </h2>
                  <p class="pym-sp-card__hint">Entre $50.000.000 y $500.000.000</p>
                </div>
                <div class="pym-sp-stepper-input">
                  <button type="button" class="pym-sp-stepper-input__btn" id="pym-sp-minus" aria-label="Disminuir valor asegurado" data-qa-id="pym-sp-btn_decrease">−</button>
                  <span class="pym-sp-stepper-input__value" id="pym-sp-value" aria-live="polite">${Ee(L)}</span>
                  <button type="button" class="pym-sp-stepper-input__btn" id="pym-sp-plus" aria-label="Aumentar valor asegurado" data-qa-id="pym-sp-btn_increase">+</button>
                </div>
              </section>

              <!-- Coberturas incluidas -->
              <section class="pym-sp-card">
                <div class="pym-sp-card__head">
                  <h2 class="pym-sp-card__title">Coberturas incluidas</h2>
                  <p class="pym-sp-card__hint">Cada cobertura aplica por el valor asegurado elegido.</p>
                </div>
                <ul class="pym-sp-coverages">
                  ${Dt.map(zs).join("")}
                </ul>
                <button type="button" class="pym-sp-disclosure" id="pym-sp-open-all" data-qa-id="pym-sp-btn_view_all_coverages">
                  <span>Consultar todas las coberturas</span>
                  <img src="/Iconos/angle-right.png" alt="" class="pym-sp-disclosure__chevron" aria-hidden="true">
                </button>
              </section>
            </div>

            <!-- COLUMNA DERECHA: cotización -->
            <aside class="pym-sp-quote" aria-label="Resumen de cotización">
              <h2 class="pym-sp-quote__title">Seguro de Vida Pymes</h2>
              <div class="pym-sp-quote__divider"></div>
              <div class="pym-sp-quote__row">
                <span class="pym-sp-quote__label">Total anual<br>(IVA incluido)</span>
                <span class="pym-sp-quote__amount" id="pym-sp-prima">${Ee(ea(L))}</span>
              </div>
              <button type="button" class="pym-sp-quote__btn" id="pym-sp-continue" data-qa-id="pym-sp-btn_continue">Continuar</button>
            </aside>
          </div>
        </main>
      </div>

      <!-- DRAWER: todas las coberturas -->
      <div class="pym-sp-overlay" id="pym-sp-overlay"></div>
      <aside class="pym-sp-drawer" id="pym-sp-drawer" aria-hidden="true" aria-label="Detalle de coberturas">
        <div class="pym-sp-drawer__head">
          <div class="pym-sp-drawer__titles">
            <span class="pym-sp-drawer__eyebrow">Todo lo que debe conocer del</span>
            <h2 class="pym-sp-drawer__title">Seguro de Vida Pymes</h2>
          </div>
          <button type="button" class="pym-sp-drawer__close" id="pym-sp-drawer-close" aria-label="Cerrar" data-qa-id="pym-sp-btn_close_drawer">&times;</button>
        </div>
        <div class="pym-sp-accordion" id="pym-sp-accordion">
          ${Dt.map((a,s)=>js(a,s===0)).join("")}
        </div>
        <div class="pym-sp-drawer__foot">
          <a href="#" class="pym-sp-drawer__download" data-qa-id="pym-sp-link_download_conditions">
            <img src="/Iconos/download.png" alt="" aria-hidden="true">
            <span>Descargar condiciones del seguro</span>
          </a>
        </div>
      </aside>
    </div>
  `,Us()}function ye(e,t,a){return`
    <div class="pym-sp-step ${a==="active"?"pym-sp-step--active":""}">
      <span class="pym-sp-step__bull">${e}</span>
      <span class="pym-sp-step__label">${t}</span>
    </div>
  `}function Be(){return'<span class="pym-sp-step__line" aria-hidden="true"></span>'}function zs(e){return`
    <li class="pym-sp-coverage" data-coverage="${e.id}">
      <img src="/Iconos/name-icon (8).png" alt="" class="pym-sp-coverage__check" aria-hidden="true">
      <span class="pym-sp-coverage__title">${e.title}</span>
      <button type="button" class="pym-sp-coverage__go" aria-label="Ver detalle de ${e.title}" data-qa-id="pym-sp-btn_coverage_${e.id}">
        <img src="/Iconos/Frame 21.png" alt="" aria-hidden="true">
      </button>
    </li>
  `}function js(e,t){return`
    <div class="pym-sp-acc-item ${t?"pym-sp-acc-item--open":""}" data-coverage="${e.id}">
      <button type="button" class="pym-sp-acc-item__header" aria-expanded="${t}" data-qa-id="pym-sp-btn_acc_${e.id}">
        <img src="${e.icon}" alt="" class="pym-sp-acc-item__icon" aria-hidden="true" onerror="this.style.visibility='hidden'">
        <span class="pym-sp-acc-item__title">${e.title}</span>
        <img src="/Iconos/angle-left.png" alt="" class="pym-sp-acc-item__chevron" aria-hidden="true">
      </button>
      <div class="pym-sp-acc-item__body">
        <p>${e.detail}</p>
      </div>
    </div>
  `}function Fe(e){return(Bs[String(Ns())]||{})[String(e)]||{anual:0,semestral:0}}function ea(e){return Fe(e).anual}function Us(){const e=document.getElementById("pym-sp-value"),t=document.getElementById("pym-sp-prima"),a=document.getElementById("pym-sp-minus"),s=document.getElementById("pym-sp-plus");function i(){e.textContent=Ee(L),t.textContent=Ee(ea(L));const r=Fe(L);localStorage.setItem("pym_insuredValue",String(L)),localStorage.setItem("pym_primaAnual",String(r.anual)),localStorage.setItem("pym_primaSemestral",String(r.semestral)),a.disabled=L<=ke,s.disabled=L>=Os}a.addEventListener("click",()=>{const r=N.indexOf(L);r>0&&(L=N[r-1],i())}),s.addEventListener("click",()=>{const r=N.indexOf(L);r<N.length-1&&(L=N[r+1],i())}),document.getElementById("pym-sp-back").addEventListener("click",()=>{window.location.href=window.location.pathname}),document.getElementById("pym-sp-continue").addEventListener("click",()=>{localStorage.setItem("pym_insuredValue",String(L));const r=Fe(L),n=localStorage.getItem("pym_coverageName")||"Vida básica";localStorage.setItem("pym_coverageName",n),$("plan",{coverageName:n,insuredValue:L,primaAnual:r.anual,primaSemestral:r.semestral});const l=new URL(window.location);l.searchParams.set("page","personal-data"),K(document.getElementById("pym-sp-continue"),l.toString())}),document.getElementById("pym-sp-open-all").addEventListener("click",()=>It(0)),document.querySelectorAll(".pym-sp-coverage__go").forEach((r,n)=>{r.addEventListener("click",()=>It(n))}),document.getElementById("pym-sp-drawer-close").addEventListener("click",At),document.getElementById("pym-sp-overlay").addEventListener("click",At),document.querySelectorAll(".pym-sp-acc-item__header").forEach(r=>{r.addEventListener("click",()=>{const n=r.closest(".pym-sp-acc-item"),l=n.classList.contains("pym-sp-acc-item--open");document.querySelectorAll(".pym-sp-acc-item").forEach(o=>{o.classList.remove("pym-sp-acc-item--open"),o.querySelector(".pym-sp-acc-item__header").setAttribute("aria-expanded","false")}),l||(n.classList.add("pym-sp-acc-item--open"),r.setAttribute("aria-expanded","true"))})}),i()}function It(e){const t=document.getElementById("pym-sp-overlay"),a=document.getElementById("pym-sp-drawer");document.querySelectorAll(".pym-sp-acc-item").forEach((i,r)=>{const n=r===e;i.classList.toggle("pym-sp-acc-item--open",n),i.querySelector(".pym-sp-acc-item__header").setAttribute("aria-expanded",String(n))}),t.classList.add("pym-sp-overlay--visible"),a.classList.add("pym-sp-drawer--open"),a.setAttribute("aria-hidden","false")}function At(){document.getElementById("pym-sp-overlay").classList.remove("pym-sp-overlay--visible");const e=document.getElementById("pym-sp-drawer");e.classList.remove("pym-sp-drawer--open"),e.setAttribute("aria-hidden","true")}function Ee(e){return"$"+e.toLocaleString("es-CO")}const $t=[{n:1,label:"Elija su<br>protección"},{n:2,label:"Datos<br>personales"},{n:3,label:"Datos de los<br>beneficiarios"},{n:4,label:"Confirmación"}],Fs=["Bogotá","Medellín","Cali","Barranquilla","Cartagena","Bucaramanga","Pereira","Manizales","Cúcuta","Ibagué"],Ys=["Sura EPS","Sanitas","Nueva EPS","Compensar","Coomeva","Salud Total","Famisanar","Aliansalud"],Vs=["Empleado","Independiente","Pensionado","Rentista de capital","Actividad comercial"];let J=1;function Hs(e,t=1){J=t===2?2:1;const a=J===1?{step:"Paso 1 de 2",title:"Ingrese sus datos",subtitle:"Esto nos ayuda a adaptar su cobertura."}:{step:"Paso 2 de 2",title:"Ingrese sus datos",subtitle:"Complete la información de contacto y residencia para el envío de su póliza."};e.innerHTML=`
    <div class="pym-pd-page">
      <header class="pym-sp-header">
        <img src="/images/logo-seguros-bolivar.png" alt="Seguros Bolívar" class="pym-sp-header__logo" width="130" height="38">
      </header>

      <div class="pym-pd-content">
        <aside class="pym-sp-stepper" aria-label="Progreso de compra">
          ${Xs(2)}
        </aside>

        <main class="pym-pd-main">
          <button type="button" class="pym-sp-back" id="pym-pd-back" data-qa-id="pym-pd-btn_back">
            <img src="/Iconos/angle-left.png" alt="" class="pym-sp-back__icon" aria-hidden="true">
            <span>Volver</span>
          </button>

          <div class="pym-pd-card">
            <div class="pym-pd-card__header">
              <span class="pym-pd-card__step">${a.step}</span>
              <div class="pym-pd-card__title-row">
                <h1 class="pym-pd-card__title">${a.title}</h1>
                <img src="/Iconos/info-circle.png" alt="Información" class="pym-pd-card__info">
              </div>
              <p class="pym-pd-card__subtitle">${a.subtitle}</p>
            </div>

            <form class="pym-pd-fields" id="pym-pd-form" novalidate>
              ${J===1?Ws():Js()}
            </form>
          </div>
        </main>
      </div>

      <!-- FOOTER (barra negra de extremo a extremo, excluyendo el stepper) -->
      <div class="pym-pd-footer">
        <button type="button" class="pym-pd-footer__btn ${J===2?"pym-pd-footer__btn--disabled":""}" id="pym-pd-continue" ${J===2?"disabled":""} data-qa-id="pym-pd-btn_continue">Continuar</button>
      </div>

    </div>
  `,Gs()}function Ws(){return`
    <div class="pym-pd-field">
      <label class="pym-pd-field__label" for="pym-pd-doctype">Tipo de documento</label>
      <div class="pym-pd-field__select">
        <select id="pym-pd-doctype" data-qa-id="pym-pd-select_doctype" required>
          <option value="" disabled selected>Seleccione una opción</option>
          <option>Cédula de ciudadanía</option>
          <option>Cédula de extranjería</option>
          <option>Pasaporte</option>
        </select>
        <img src="/Iconos/angle-left.png" alt="" class="pym-pd-field__chevron" aria-hidden="true">
      </div>
    </div>
    <div class="pym-pd-field">
      <label class="pym-pd-field__label" for="pym-pd-docnumber">Número de documento</label>
      <div class="pym-pd-field__input">
        <input type="text" id="pym-pd-docnumber" inputmode="numeric" placeholder="Ej: 1023019210" data-qa-id="pym-pd-input_docnumber" required>
      </div>
    </div>
    <div class="pym-pd-field">
      <label class="pym-pd-field__label" for="pym-pd-issuedate">Fecha de expedición del documento</label>
      <div class="pym-pd-field__input pym-pd-field__input--date" id="pym-pd-issuedate-wrap">
        <input type="text" id="pym-pd-issuedate" placeholder="DD/MM/AAAA" autocomplete="off" readonly data-qa-id="pym-pd-input_issuedate" required>
        <button type="button" class="pym-pd-field__cal" id="pym-pd-issuedate-btn" aria-label="Abrir calendario">
          <img src="/Iconos/calendar-day.png" alt="" aria-hidden="true">
        </button>
      </div>
    </div>
    <div class="pym-pd-field">
      <label class="pym-pd-field__label" for="pym-pd-name1">Primer nombre</label>
      <div class="pym-pd-field__input">
        <input type="text" id="pym-pd-name1" placeholder="Ej: Simón" data-qa-id="pym-pd-input_name1" required>
      </div>
    </div>
    <div class="pym-pd-field">
      <label class="pym-pd-field__label" for="pym-pd-name2">Segundo nombre <span class="pym-pd-field__optional">(Opcional)</span></label>
      <div class="pym-pd-field__input">
        <input type="text" id="pym-pd-name2" placeholder="Ej: Andrés" data-qa-id="pym-pd-input_name2">
      </div>
    </div>
    <div class="pym-pd-field">
      <label class="pym-pd-field__label" for="pym-pd-lastname1">Primer apellido</label>
      <div class="pym-pd-field__input">
        <input type="text" id="pym-pd-lastname1" placeholder="Ej: Bolívar" data-qa-id="pym-pd-input_lastname1" required>
      </div>
    </div>
    <div class="pym-pd-field">
      <label class="pym-pd-field__label" for="pym-pd-lastname2">Segundo apellido <span class="pym-pd-field__optional">(Opcional)</span></label>
      <div class="pym-pd-field__input">
        <input type="text" id="pym-pd-lastname2" placeholder="Ej: Libertad" data-qa-id="pym-pd-input_lastname2">
      </div>
    </div>
    <div class="pym-pd-field">
      <span class="pym-pd-field__label">Sexo al nacer</span>
      <div class="pym-pd-chips" role="radiogroup" aria-label="Sexo al nacer">
        <button type="button" class="pym-pd-chip" data-value="M" role="radio" aria-checked="false" data-qa-id="pym-pd-chip_male">Hombre</button>
        <button type="button" class="pym-pd-chip" data-value="F" role="radio" aria-checked="false" data-qa-id="pym-pd-chip_female">Mujer</button>
      </div>
    </div>
  `}function Js(){const e=localStorage.getItem("pym_birthDate")||"",t=a=>a.map(s=>`<option>${s}</option>`).join("");return`
    <div class="pym-pd-field">
      <label class="pym-pd-field__label" for="pym-pd-birth">Fecha de nacimiento</label>
      <div class="pym-pd-field__input" id="pym-pd-birth-wrap">
        <input type="text" id="pym-pd-birth" value="${e}" placeholder="DD/MM/AAAA" maxlength="10" data-qa-id="pym-pd-input_birth" required>
        <button type="button" class="pym-pd-field__cal" id="pym-pd-birth-btn" aria-label="Abrir calendario"><img src="/Iconos/calendar-day.png" alt="" aria-hidden="true"></button>
      </div>
    </div>
    <div class="pym-pd-field">
      <label class="pym-pd-field__label" for="pym-pd-city">Ciudad de residencia</label>
      <div class="pym-pd-field__select">
        <select id="pym-pd-city" data-qa-id="pym-pd-select_city" required>
          <option value="" disabled selected>Seleccione una opción</option>
          ${t(Fs)}
        </select>
        <img src="/Iconos/angle-left.png" alt="" class="pym-pd-field__chevron" aria-hidden="true">
      </div>
    </div>
    <div class="pym-pd-field">
      <label class="pym-pd-field__label" for="pym-pd-address">Dirección de residencia</label>
      <div class="pym-pd-field__input">
        <input type="text" id="pym-pd-address" placeholder="Ej: Calle 1 # 1-23" data-qa-id="pym-pd-input_address" required>
      </div>
    </div>
    <div class="pym-pd-field">
      <label class="pym-pd-field__label" for="pym-pd-occupation">Ocupación</label>
      <div class="pym-pd-field__input">
        <input type="text" id="pym-pd-occupation" placeholder="Ej: Contador" data-qa-id="pym-pd-input_occupation" required>
      </div>
    </div>
    <div class="pym-pd-field">
      <label class="pym-pd-field__label" for="pym-pd-eps">EPS actual</label>
      <div class="pym-pd-field__select">
        <select id="pym-pd-eps" data-qa-id="pym-pd-select_eps" required>
          <option value="" disabled selected>Seleccione una opción</option>
          ${t(Ys)}
        </select>
        <img src="/Iconos/angle-left.png" alt="" class="pym-pd-field__chevron" aria-hidden="true">
      </div>
      <p class="pym-pd-field__help">
        <img src="/Iconos/info-circle.png" alt="" aria-hidden="true">
        <span>Debe tener una EPS activa en régimen contributivo para mantener su cobertura.</span>
      </p>
    </div>
    <div class="pym-pd-field">
      <label class="pym-pd-field__label" for="pym-pd-income">¿De dónde provienen sus ingresos?</label>
      <div class="pym-pd-field__select">
        <select id="pym-pd-income" data-qa-id="pym-pd-select_income" required>
          <option value="" disabled selected>Seleccione una opción</option>
          ${t(Vs)}
        </select>
        <img src="/Iconos/angle-left.png" alt="" class="pym-pd-field__chevron" aria-hidden="true">
      </div>
      <p class="pym-pd-field__help">
        <img src="/Iconos/info-circle.png" alt="" aria-hidden="true">
        <span>Requisito legal para validar la información de su seguro.</span>
      </p>
    </div>
  `}function Xs(e){return $t.map((t,a)=>{let s="pending";t.n<e?s="done":t.n===e&&(s="active");const i=s==="done"?'<span class="pym-sp-step__bull pym-sp-step__bull--done">&#10003;</span>':`<span class="pym-sp-step__bull ${s==="active"?"pym-sp-step__bull--active":""}">${t.n}</span>`,r=a<$t.length-1?`<span class="pym-sp-step__line ${t.n<e?"pym-sp-step__line--done":""}" aria-hidden="true"></span>`:"";return`
      <div class="pym-sp-step ${s==="active"?"pym-sp-step--active":""}">
        ${i}
        <span class="pym-sp-step__label">${t.label}</span>
      </div>
      ${r}
    `}).join("")}function Gs(){var t;document.getElementById("pym-pd-back").addEventListener("click",()=>{if(J===2){Lt(1);return}const a=new URL(window.location);a.searchParams.set("page","select-plan"),window.location.href=a.toString()});const e=document.getElementById("pym-pd-continue");if(J===1){document.querySelectorAll(".pym-pd-chip").forEach(r=>{r.addEventListener("click",()=>{document.querySelectorAll(".pym-pd-chip").forEach(n=>{n.classList.remove("pym-pd-chip--active"),n.setAttribute("aria-checked","false")}),r.classList.add("pym-pd-chip--active"),r.setAttribute("aria-checked","true")})});const a=document.getElementById("pym-pd-issuedate");a.readOnly=!1,a.setAttribute("maxlength","10");const s=new Date().getFullYear(),i=Ue(a,{minYear:s-100,maxYear:s});document.getElementById("pym-pd-issuedate-btn").addEventListener("click",i),e.addEventListener("click",()=>{ei()&&(et(e,!0),ti(),Lt(2))})}else{const a=document.getElementById("pym-pd-birth"),s=new Date().getFullYear(),i=Ue(a,{minYear:s-100,maxYear:s});(t=document.getElementById("pym-pd-birth-btn"))==null||t.addEventListener("click",i);const n=document.getElementById("pym-pd-form").querySelectorAll("input[required], select[required]"),l=()=>{const o=Array.from(n).every(p=>p.value&&p.value.trim()!=="");e.disabled=!o,e.classList.toggle("pym-pd-footer__btn--disabled",!o)};n.forEach(o=>{o.addEventListener("input",l),o.addEventListener("change",l)}),l(),e.addEventListener("click",()=>{if(e.disabled)return;const o=Ks(a.value.trim());if(o==null||o<18){Qs("El asegurado debe ser mayor de edad (18 años o más).");return}Zs(),ai();const p=new URL(window.location);p.searchParams.set("page","beneficiaries"),p.searchParams.delete("step"),K(e,p.toString())})}}function Ks(e){const t=/^(\d{2})\/(\d{2})\/(\d{4})$/.exec(e||"");if(!t)return null;const a=new Date(parseInt(t[3],10),parseInt(t[2],10)-1,parseInt(t[1],10));if(isNaN(a.getTime()))return null;const s=new Date;let i=s.getFullYear()-a.getFullYear();const r=s.getMonth()-a.getMonth();return(r<0||r===0&&s.getDate()<a.getDate())&&i--,i}function Qs(e){var s,i;const t=(s=document.getElementById("pym-pd-birth"))==null?void 0:s.closest(".pym-pd-field");if(!t)return;(i=t.querySelector(".pym-pd-field__input"))==null||i.classList.add("pym-pd-field--error");let a=t.querySelector(".pym-pd-field__errmsg");a||(a=document.createElement("p"),a.className="pym-pd-field__errmsg",a.style.cssText="color:#E53935;font-size:12px;margin-top:2px;",t.appendChild(a)),a.textContent=e}function Zs(){var t,a,s;const e=(t=document.getElementById("pym-pd-birth"))==null?void 0:t.closest(".pym-pd-field");e&&((a=e.querySelector(".pym-pd-field__input"))==null||a.classList.remove("pym-pd-field--error"),(s=e.querySelector(".pym-pd-field__errmsg"))==null||s.remove())}function Lt(e){const t=new URL(window.location);t.searchParams.set("page","personal-data"),e<=1?t.searchParams.delete("step"):t.searchParams.set("step",String(e)),window.location.href=t.toString()}function ei(){const e=document.getElementById("pym-pd-form");let t=!0;if(e.querySelectorAll("input[required], select[required]").forEach(a=>{const s=a.closest(".pym-pd-field__input, .pym-pd-field__select");a.value.trim()||(t=!1,s&&(s.classList.add("pym-pd-field--error"),setTimeout(()=>s.classList.remove("pym-pd-field--error"),2e3)))}),!document.querySelector(".pym-pd-chip--active")){t=!1;const a=document.querySelector(".pym-pd-chips");a.classList.add("pym-pd-chips--error"),setTimeout(()=>a.classList.remove("pym-pd-chips--error"),2e3)}return t}function ti(){var s;const e=i=>{var r;return((r=document.getElementById(i))==null?void 0:r.value.trim())||""},t=((s=document.querySelector(".pym-pd-chip--active"))==null?void 0:s.dataset.value)||"",a=[e("pym-pd-name1"),e("pym-pd-name2"),e("pym-pd-lastname1"),e("pym-pd-lastname2")].filter(Boolean).join(" ");localStorage.setItem("pym_docType",e("pym-pd-doctype")),localStorage.setItem("pym_docNumber",e("pym-pd-docnumber")),localStorage.setItem("pym_issueDate",e("pym-pd-issuedate")),localStorage.setItem("pym_name",a),localStorage.setItem("pym_gender",t),$("holder",{docType:e("pym-pd-doctype"),docNumber:e("pym-pd-docnumber"),issueDate:e("pym-pd-issuedate"),name:a,firstName:e("pym-pd-name1"),secondName:e("pym-pd-name2"),lastName1:e("pym-pd-lastname1"),lastName2:e("pym-pd-lastname2"),gender:t})}function ai(){const e=t=>{var a;return((a=document.getElementById(t))==null?void 0:a.value.trim())||""};localStorage.setItem("pym_birthDate",e("pym-pd-birth")),localStorage.setItem("pym_city",e("pym-pd-city")),localStorage.setItem("pym_address",e("pym-pd-address")),localStorage.setItem("pym_occupation",e("pym-pd-occupation")),localStorage.setItem("pym_eps",e("pym-pd-eps")),localStorage.setItem("pym_incomeSource",e("pym-pd-income")),$("holder",{birthDate:e("pym-pd-birth"),city:e("pym-pd-city"),address:e("pym-pd-address"),occupation:e("pym-pd-occupation"),eps:e("pym-pd-eps"),incomeSource:e("pym-pd-income")})}const Mt=[{n:1,label:"Elija su<br>protección"},{n:2,label:"Datos<br>personales"},{n:3,label:"Datos de los<br>beneficiarios"},{n:4,label:"Confirmación"}],si='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/><path d="M2 21a7 7 0 0 1 14 0"/><path d="M19 8v6M22 11h-6"/></svg>',ii='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"/></svg>',ri='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2m2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M10 11v6M14 11v6"/></svg>',ta='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',ni='<svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true" class="pym-bf-modal__warn"><circle cx="32" cy="32" r="27" fill="none" stroke="#FFDA55" stroke-width="3"/><path d="M32 5a27 27 0 0 1 27 27" fill="none" stroke="#086D44" stroke-width="3" stroke-linecap="round"/><path d="M32 59A27 27 0 0 1 5 32" fill="none" stroke="#086D44" stroke-width="3" stroke-linecap="round"/><path d="M32 20v18" stroke="#1B1B1B" stroke-width="3.4" stroke-linecap="round"/><circle cx="32" cy="45" r="2.4" fill="#1B1B1B"/></svg>',li=["Cónyuge","Compañero(a) permanente","Hijo(a)","Padre","Madre","Hermano(a)","Abuelo(a)","Nieto(a)","Otro"];let B=[],le=!1,ee=null;function oi(e){B=[],le=!1,ee=null;const t=localStorage.getItem("pym_coverageName")||"Vida básica";e.innerHTML=`
    <div class="pym-pd-page">
      <header class="pym-sp-header">
        <img src="/images/logo-seguros-bolivar.png" alt="Seguros Bolívar" class="pym-sp-header__logo" width="130" height="38">
      </header>

      <div class="pym-pd-content">
        <aside class="pym-sp-stepper" aria-label="Progreso de compra">
          ${di(3)}
        </aside>

        <main class="pym-pd-main">
          <button type="button" class="pym-sp-back" id="pym-bf-back" data-qa-id="pym-bf-btn_back">
            <img src="/Iconos/angle-left.png" alt="" class="pym-sp-back__icon" aria-hidden="true">
            <span>Volver</span>
          </button>

          <div class="pym-bf-card">
            <div class="pym-bf-card__header">
              <h1 class="pym-bf-card__title">Elija los beneficiarios de su cobertura</h1>
              <p class="pym-bf-card__coverage">${t}</p>
              <p class="pym-bf-card__subtitle">Distribuya el porcentaje del beneficio de esta cobertura. La suma debe dar 100%.</p>
            </div>

            <div class="pym-bf-card__divider" aria-hidden="true"></div>

            <div class="pym-bf-progress">
              <div class="pym-bf-progress__row">
                <span class="pym-bf-progress__label">Total asignado</span>
                <span class="pym-bf-progress__value" id="pym-bf-total">0%</span>
              </div>
              <div class="pym-bf-progress__track">
                <div class="pym-bf-progress__bar" id="pym-bf-bar" style="width:0%"></div>
              </div>
              <p class="pym-bf-progress__help" id="pym-bf-help">
                <img src="/Iconos/info-circle.png" alt="" aria-hidden="true">
                <span>Falta 100% por asignar.</span>
              </p>
            </div>

            <div class="pym-bf-list" id="pym-bf-list"></div>

            <div class="pym-bf-actions">
              <button type="button" class="pym-bf-add" id="pym-bf-add" data-qa-id="pym-bf-btn_add">
                ${si}
                <span>Agregar beneficiario</span>
              </button>
              <button type="button" class="pym-bf-legal-link" id="pym-bf-legal" data-qa-id="pym-bf-btn_legal">
                Usar beneficiarios de ley
              </button>
            </div>
          </div>
        </main>
      </div>

      <!-- FOOTER (barra negra de extremo a extremo, excluye el stepper) -->
      <div class="pym-pd-footer">
        <button type="button" class="pym-pd-footer__btn pym-pd-footer__btn--disabled" id="pym-bf-continue" disabled data-qa-id="pym-bf-btn_continue">Continuar</button>
      </div>

      <!-- DRAWER Agregar / Editar beneficiario -->
      <div class="pym-sp-overlay" id="pym-bf-overlay"></div>
      <aside class="pym-bf-drawer" id="pym-bf-drawer" role="dialog" aria-label="Agregar beneficiario" aria-hidden="true"></aside>

      <!-- MODAL Confirmar beneficiarios de ley -->
      <div class="pym-bf-modal-overlay" id="pym-bf-modal-overlay" aria-hidden="true">
        <div class="pym-bf-modal" role="dialog" aria-modal="true" aria-labelledby="pym-bf-modal-title">
          <button type="button" class="pym-bf-modal__close" id="pym-bf-modal-close" aria-label="Cerrar">${ta}</button>
          <div class="pym-bf-modal__body">
            ${ni}
            <div class="pym-bf-modal__texts">
              <h2 class="pym-bf-modal__title" id="pym-bf-modal-title">¿Continuar con beneficiarios de ley?</h2>
              <p class="pym-bf-modal__desc">
                <strong>El pago se entregará según el orden de sucesión legal:</strong> cónyuge o compañero(a) e hijos. Si no existen, a sus padres o hermanos.
                <br><br>
                En esta opción, usted no elige quién recibe el beneficio ni qué porcentaje, pero <strong>puede cambiarlos después</strong>.
              </p>
            </div>
            <div class="pym-bf-modal__actions">
              <button type="button" class="pym-bf-modal__btn pym-bf-modal__btn--secondary" id="pym-bf-modal-add" data-qa-id="pym-bf-btn_modal_add">Agregar beneficiarios</button>
              <button type="button" class="pym-bf-modal__btn pym-bf-modal__btn--primary" id="pym-bf-modal-confirm" data-qa-id="pym-bf-btn_modal_confirm">Confirmar y continuar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,ci()}function di(e){return Mt.map((t,a)=>{let s="pending";t.n<e?s="done":t.n===e&&(s="active");const i=s==="done"?'<span class="pym-sp-step__bull pym-sp-step__bull--done">&#10003;</span>':`<span class="pym-sp-step__bull ${s==="active"?"pym-sp-step__bull--active":""}">${t.n}</span>`,r=a<Mt.length-1?`<span class="pym-sp-step__line ${t.n<e?"pym-sp-step__line--done":""}" aria-hidden="true"></span>`:"";return`
      <div class="pym-sp-step ${s==="active"?"pym-sp-step--active":""}">
        ${i}
        <span class="pym-sp-step__label">${t.label}</span>
      </div>
      ${r}
    `}).join("")}function ci(){document.getElementById("pym-bf-back").addEventListener("click",()=>{const t=new URL(window.location);t.searchParams.set("page","personal-data"),t.searchParams.set("step","2"),window.location.href=t.toString()}),document.getElementById("pym-bf-add").addEventListener("click",()=>Ye(null)),document.getElementById("pym-bf-legal").addEventListener("click",pi),document.getElementById("pym-bf-overlay").addEventListener("click",Ve);const e=document.getElementById("pym-bf-modal-overlay");document.getElementById("pym-bf-modal-close").addEventListener("click",qe),document.getElementById("pym-bf-modal-add").addEventListener("click",()=>{qe(),Ye(null)}),document.getElementById("pym-bf-modal-confirm").addEventListener("click",mi),e.addEventListener("click",t=>{t.target===e&&qe()}),document.getElementById("pym-bf-continue").addEventListener("click",t=>{if(!sa())return;ia();const a=new URL(window.location);a.searchParams.set("page","confirmation"),a.searchParams.delete("step"),K(t.currentTarget,a.toString())}),tt()}function aa(){return B.reduce((e,t)=>e+(t.percentage||0),0)}function sa(){return le||aa()===100}function Oe(){const e=aa(),t=document.getElementById("pym-bf-total"),a=document.getElementById("pym-bf-bar"),s=document.getElementById("pym-bf-help"),i=document.getElementById("pym-bf-continue");t.textContent=`${e}%`,a.style.width=`${Math.min(e,100)}%`,a.classList.toggle("pym-bf-progress__bar--complete",e===100);const r=100-e,n=s.querySelector("span");e===0?n.textContent="Falta 100% por asignar.":e<100?n.textContent=`Falta ${r}% por asignar.`:e===100?n.textContent="Distribución completa (100%).":n.textContent=`Se ha excedido en ${e-100}%.`,s.classList.toggle("pym-bf-progress__help--error",e>100);const l=sa();i.disabled=!l,i.classList.toggle("pym-pd-footer__btn--disabled",!l)}function tt(){const e=document.getElementById("pym-bf-list");if(le){e.innerHTML=`
      <div class="pym-bf-legal-note">
        <img src="/Iconos/info-circle.png" alt="" aria-hidden="true">
        <span>Continuará con los <strong>beneficiarios de ley</strong>. Podrá cambiarlos más adelante.</span>
      </div>
    `,Oe();return}if(B.length===0){e.innerHTML="",Oe();return}e.innerHTML=B.map((t,a)=>`
    <div class="pym-bf-item">
      <div class="pym-bf-item__info">
        <span class="pym-bf-item__name">Beneficiario ${a+1}</span>
        <span class="pym-bf-item__person">${ra(t.name)}</span>
      </div>
      <div class="pym-bf-item__right">
        <span class="pym-bf-item__pct">${t.percentage}%</span>
        <button type="button" class="pym-bf-item__icon" data-edit="${a}" aria-label="Editar beneficiario ${a+1}" data-qa-id="pym-bf-btn_edit_${a}">
          ${ii}
        </button>
        <button type="button" class="pym-bf-item__icon" data-remove="${a}" aria-label="Eliminar beneficiario ${a+1}" data-qa-id="pym-bf-btn_remove_${a}">
          ${ri}
        </button>
      </div>
    </div>
  `).join(""),e.querySelectorAll("[data-edit]").forEach(t=>{t.addEventListener("click",()=>Ye(parseInt(t.dataset.edit,10)))}),e.querySelectorAll("[data-remove]").forEach(t=>{t.addEventListener("click",()=>{B.splice(parseInt(t.dataset.remove,10),1),tt()})}),Oe()}function pi(){const e=document.getElementById("pym-bf-modal-overlay");e.classList.add("pym-bf-modal-overlay--visible"),e.setAttribute("aria-hidden","false")}function qe(){const e=document.getElementById("pym-bf-modal-overlay");e.classList.remove("pym-bf-modal-overlay--visible"),e.setAttribute("aria-hidden","true")}function mi(){le=!0,B=[],ia();const e=new URL(window.location);e.searchParams.set("page","confirmation"),e.searchParams.delete("step"),K(document.getElementById("pym-bf-modal-confirm"),e.toString())}function Ye(e){ee=e;const t=e!==null,a=t?B[e]:{name:"",relationship:"",percentage:""},s=document.getElementById("pym-bf-drawer");s.innerHTML=`
    <div class="pym-bf-drawer__head">
      <h2 class="pym-bf-drawer__title">${t?"Editar beneficiario":"Agregar beneficiario"}</h2>
      <button type="button" class="pym-bf-drawer__close" id="pym-bf-drawer-close" aria-label="Cerrar">
        ${ta}
      </button>
    </div>

    <div class="pym-bf-drawer__assigned" id="pym-bf-drawer-assigned"></div>

    <form class="pym-bf-drawer__form" id="pym-bf-drawer-form" novalidate>
      <div class="pym-pd-field">
        <label class="pym-pd-field__label" for="pym-bf-name">Nombres y apellidos</label>
        <div class="pym-pd-field__input">
          <input type="text" id="pym-bf-name" placeholder="Ej: Simón Bolívar" value="${ui(a.name)}" data-qa-id="pym-bf-input_name" required>
        </div>
      </div>
      <div class="pym-pd-field">
        <label class="pym-pd-field__label" for="pym-bf-relationship">Parentesco</label>
        <div class="pym-pd-field__select">
          <select id="pym-bf-relationship" data-qa-id="pym-bf-select_relationship" required>
            <option value="" disabled ${a.relationship?"":"selected"}>Seleccione una opción</option>
            ${li.map(b=>`<option ${b===a.relationship?"selected":""}>${b}</option>`).join("")}
          </select>
          <img src="/Iconos/angle-left.png" alt="" class="pym-pd-field__chevron" aria-hidden="true">
        </div>
      </div>
      <div class="pym-pd-field">
        <label class="pym-pd-field__label" for="pym-bf-pct">¿Qué porcentaje recibiría?</label>
        <div class="pym-pd-field__input">
          <input type="text" id="pym-bf-pct" inputmode="numeric" placeholder="Ej: 50" value="${a.percentage||""}" data-qa-id="pym-bf-input_pct" required>
          <span class="pym-bf-drawer__pct-suffix" aria-hidden="true">%</span>
        </div>
        <p class="pym-pd-field__help pym-bf-drawer__pct-error" id="pym-bf-pct-error" style="display:none;color:#E53935;">
          <span></span>
        </p>
      </div>

      <button type="submit" class="pym-bf-drawer__submit pym-bf-drawer__submit--disabled" id="pym-bf-drawer-submit" disabled data-qa-id="pym-bf-btn_save">
        ${t?"Guardar cambios":"Agregar beneficiario"}
      </button>
    </form>
  `,document.getElementById("pym-bf-overlay").classList.add("pym-sp-overlay--visible"),s.classList.add("pym-bf-drawer--open"),s.setAttribute("aria-hidden","false");const r=s.querySelector("#pym-bf-name"),n=s.querySelector("#pym-bf-relationship"),l=s.querySelector("#pym-bf-pct"),o=s.querySelector("#pym-bf-drawer-submit"),p=s.querySelector("#pym-bf-pct-error"),m=s.querySelector("#pym-bf-drawer-assigned"),c=B.reduce((b,v,f)=>f===ee?b:b+(v.percentage||0),0),d=100-c,u=b=>{const v=c+(b||0),f=v===100;m.innerHTML=`
      <div class="pym-bf-progress__row">
        <span class="pym-bf-progress__label">Total asignado</span>
        <span class="pym-bf-progress__value">${v}%</span>
      </div>
      <div class="pym-bf-progress__track">
        <div class="pym-bf-progress__bar ${f?"pym-bf-progress__bar--complete":""}" style="width:${Math.min(v,100)}%"></div>
      </div>
    `},y=()=>(l.value=l.value.replace(/[^\d]/g,"").slice(0,3),parseInt(l.value,10)),g=()=>{const b=y(),v=l.value!==""&&!Number.isNaN(b);u(v?b:0);let f=!0,T="";v&&(b<=0?(f=!1,T="El porcentaje debe ser mayor a 0."):b>d&&(f=!1,T=`Solo puede asignar hasta ${d}%.`)),p.style.display=f?"none":"flex",f||(p.querySelector("span").textContent=T);const H=r.value.trim()!==""&&n.value!==""&&v&&f;o.disabled=!H,o.classList.toggle("pym-bf-drawer__submit--disabled",!H)};r.addEventListener("input",g),n.addEventListener("change",g),l.addEventListener("input",g),g(),s.querySelector("#pym-bf-drawer-close").addEventListener("click",Ve),s.querySelector("#pym-bf-drawer-form").addEventListener("submit",b=>{if(b.preventDefault(),o.disabled)return;const v={name:r.value.trim(),relationship:n.value,percentage:parseInt(l.value,10)};ee!==null?B[ee]=v:B.push(v),le=!1,Ve(),tt()})}function Ve(){document.getElementById("pym-bf-overlay").classList.remove("pym-sp-overlay--visible");const e=document.getElementById("pym-bf-drawer");e.classList.remove("pym-bf-drawer--open"),e.setAttribute("aria-hidden","true"),ee=null}function ia(){le?(localStorage.setItem("pym_beneficiaries",JSON.stringify([])),localStorage.setItem("pym_legalBeneficiaries","true"),$("beneficiaries",{list:[],useLegal:!0})):(localStorage.setItem("pym_beneficiaries",JSON.stringify(B)),localStorage.setItem("pym_legalBeneficiaries","false"),$("beneficiaries",{list:B,useLegal:!1}))}function ra(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ui(e){return ra(e).replace(/"/g,"&quot;")}const Pt=[{n:1,label:"Elija su<br>protección"},{n:2,label:"Datos<br>personales"},{n:3,label:"Datos de los<br>beneficiarios"},{n:4,label:"Confirmación"}],hi=3,yi='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>',bi='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';function fi(e){const t=_i();e.innerHTML=`
    <div class="pym-pd-page">
      <header class="pym-sp-header">
        <img src="/images/logo-seguros-bolivar.png" alt="Seguros Bolívar" class="pym-sp-header__logo" width="130" height="38">
      </header>

      <div class="pym-pd-content">
        <aside class="pym-sp-stepper" aria-label="Progreso de compra">
          ${gi(4)}
        </aside>

        <main class="pym-pd-main pym-cf-main">
          <button type="button" class="pym-sp-back" id="pym-cf-back" data-qa-id="pym-cf-btn_back">
            <img src="/Iconos/angle-left.png" alt="" class="pym-sp-back__icon" aria-hidden="true">
            <span>Volver</span>
          </button>

          <div class="pym-cf-head">
            <img src="/Iconos/Group 2409.png" alt="" class="pym-cf-head__pict" aria-hidden="true">
            <div class="pym-cf-head__texts">
              <h1 class="pym-cf-head__title">¡Ya casi terminamos!</h1>
              <p class="pym-cf-head__subtitle">Verifique que toda la información esté correcta.</p>
            </div>
          </div>

          <div class="pym-cf-grid">
            <!-- Columna izquierda: plan + autorizaciones -->
            <div class="pym-cf-col">
              <section class="pym-cf-card pym-cf-card--plan">
                <div class="pym-cf-card__title">
                  <img src="/Iconos/shield-dog (3).png" alt="" class="pym-cf-card__ico" aria-hidden="true">
                  <span>Seguro de Vida Pymes</span>
                </div>
                <div class="pym-cf-plan__block">
                  <span class="pym-cf-plan__label">Valor del seguro:</span>
                  <span class="pym-cf-plan__amount">${t.primaLabel}</span>
                </div>
                <div class="pym-cf-plan__row">
                  <span class="pym-cf-plan__label">Vigencia:</span>
                  <strong class="pym-cf-plan__strong">1 año</strong>
                </div>
                <button type="button" class="pym-cf-plan__detail" id="pym-cf-detail" data-qa-id="pym-cf-btn_detail">
                  <span>Mostrar detalle del plan</span>
                  ${yi}
                </button>
              </section>

              <form class="pym-cf-checks" id="pym-cf-checks">
                <label class="pym-cf-check">
                  <input type="checkbox" id="pym-cf-chk1" data-qa-id="pym-cf-chk_terms">
                  <span>Acepto los <a href="#" class="pym-cf-link">Términos y Condiciones del Seguro de Vida Pymes.</a></span>
                </label>
                <label class="pym-cf-check">
                  <input type="checkbox" id="pym-cf-chk2" data-qa-id="pym-cf-chk_declaration">
                  <span>Manifiesto que he leído y acepto firmar la <a href="#" class="pym-cf-link">Declaración de Asegurabilidad.</a></span>
                </label>
                <label class="pym-cf-check">
                  <input type="checkbox" id="pym-cf-chk3" data-qa-id="pym-cf-chk_truth">
                  <span>Declaro que todas las respuestas registradas en los formularios tanto del tomador como de los asegurados son verdaderas y completas. De igual forma confirmo que conozco que la mala fe en la reclamación de este seguro causará la pérdida del derecho al pago.</span>
                </label>
              </form>
            </div>

            <!-- Columna derecha: datos del tomador + beneficiarios -->
            <div class="pym-cf-col">
              <section class="pym-cf-card">
                <!-- Sus datos -->
                <div class="pym-cf-block">
                  <div class="pym-cf-card__title">
                    <img src="/Iconos/shield-dog (4).png" alt="" class="pym-cf-card__ico" aria-hidden="true">
                    <span>Sus datos</span>
                  </div>
                  <dl class="pym-cf-data">
                    <div class="pym-cf-data__row"><dt>Nombre:</dt><dd>${t.name}</dd></div>
                    <div class="pym-cf-data__row"><dt>Cédula:</dt><dd>${t.docNumber}</dd></div>
                    <div class="pym-cf-data__row"><dt>Celular:</dt><dd>${t.phone}</dd></div>
                    <div class="pym-cf-data__row"><dt>Edad:</dt><dd>${t.age}</dd></div>
                  </dl>
                  <p class="pym-cf-email-label">Enviaremos la póliza al siguiente correo:</p>
                  <div class="pym-cf-email-row">
                    <span class="pym-cf-email" id="pym-cf-email-primary">${t.email}</span>
                    <button type="button" class="pym-cf-email-edit" id="pym-cf-edit-email" data-qa-id="pym-cf-btn_edit_email">
                      <img src="/Iconos/Name-icon (13).png" alt="" class="pym-cf-email-edit__ico" aria-hidden="true"><span>Editar correo</span>
                    </button>
                  </div>
                  <div class="pym-cf-email-row pym-cf-email-row--secondary" id="pym-cf-email2-row" ${t.email2?"":"hidden"}>
                    <span class="pym-cf-email pym-cf-email--secondary">Copia a: <span id="pym-cf-email-secondary">${t.email2}</span></span>
                  </div>
                </div>

                <div class="pym-cf-card__divider" aria-hidden="true"></div>

                <!-- Sus beneficiarios -->
                <div class="pym-cf-block">
                  <div class="pym-cf-card__title">
                    <img src="/Iconos/shield-dog (5).png" alt="" class="pym-cf-card__ico" aria-hidden="true">
                    <span>Sus beneficiarios</span>
                  </div>
                  <div class="pym-cf-benef">
                    ${vi(t.beneficiaries)}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>

      <div class="pym-pd-footer">
        <button type="button" class="pym-pd-footer__btn pym-pd-footer__btn--disabled" id="pym-cf-continue" disabled data-qa-id="pym-cf-btn_continue">Continuar</button>
      </div>

      <!-- MODAL Editar correo -->
      <div class="pym-bf-modal-overlay" id="pym-cf-email-overlay" aria-hidden="true">
        <div class="pym-cf-email-modal" role="dialog" aria-modal="true" aria-labelledby="pym-cf-email-modal-title">
          <div class="pym-cf-email-modal__head">
            <h2 class="pym-cf-email-modal__title" id="pym-cf-email-modal-title">Correos de envío de la póliza</h2>
            <button type="button" class="pym-bf-drawer__close" id="pym-cf-email-close" aria-label="Cerrar">${bi}</button>
          </div>
          <p class="pym-cf-email-modal__desc">Enviaremos la plantilla de la póliza a estos correos.</p>
          <form class="pym-cf-email-modal__form" id="pym-cf-email-form" novalidate>
            <div class="pym-pd-field">
              <label class="pym-pd-field__label" for="pym-cf-email-input">Correo principal</label>
              <div class="pym-pd-field__input">
                <input type="email" id="pym-cf-email-input" placeholder="Ej: sucorreo@email.com" data-qa-id="pym-cf-input_email" required>
              </div>
              <p class="pym-pd-field__help pym-cf-email-modal__error" id="pym-cf-email-err" style="display:none;color:#E53935;"><span></span></p>
            </div>
            <div class="pym-pd-field">
              <label class="pym-pd-field__label" for="pym-cf-email2-input">Correo adicional <span class="pym-pd-field__optional">(Opcional)</span></label>
              <div class="pym-pd-field__input">
                <input type="email" id="pym-cf-email2-input" placeholder="Ej: otrocorreo@email.com" data-qa-id="pym-cf-input_email2">
              </div>
              <p class="pym-pd-field__help pym-cf-email-modal__error" id="pym-cf-email2-err" style="display:none;color:#E53935;"><span></span></p>
            </div>
            <button type="submit" class="pym-bf-drawer__submit" id="pym-cf-email-save" data-qa-id="pym-cf-btn_save_email">Guardar correos</button>
          </form>
        </div>
      </div>
    </div>
  `,wi()}function gi(e){return Pt.map((t,a)=>{let s="pending";t.n<e?s="done":t.n===e&&(s="active");const i=s==="done"?'<span class="pym-sp-step__bull pym-sp-step__bull--done">&#10003;</span>':`<span class="pym-sp-step__bull ${s==="active"?"pym-sp-step__bull--active":""}">${t.n}</span>`,r=a<Pt.length-1?`<span class="pym-sp-step__line ${t.n<e?"pym-sp-step__line--done":""}" aria-hidden="true"></span>`:"";return`
      <div class="pym-sp-step ${s==="active"?"pym-sp-step--active":""}">
        ${i}
        <span class="pym-sp-step__label">${t.label}</span>
      </div>
      ${r}
    `}).join("")}function vi(e){return!e||e.length===0?'<p class="pym-cf-benef__empty">Continuará con los <strong>beneficiarios de ley</strong> (orden de sucesión legal).</p>':e.slice(0,hi).map(t=>`
    <div class="pym-cf-benef__item">
      <div class="pym-cf-data__row"><dt>Nombre:</dt><dd>${Ot(t.name)}</dd></div>
      <div class="pym-cf-data__row"><dt>Parentesco:</dt><dd>${Ot(t.relationship||"—")}</dd></div>
      <div class="pym-cf-data__row"><dt>Porcentaje:</dt><dd>${t.percentage}%</dd></div>
    </div>
  `).join("")}function _i(){const e=i=>localStorage.getItem(i)||"",t=parseInt(e("pym_primaAnual"),10),a=e("pym_age");let s=[];try{s=JSON.parse(e("pym_beneficiaries")||"[]")}catch{s=[]}return{name:e("pym_name")||"—",docNumber:e("pym_docNumber")||"—",phone:e("pym_phone")||"—",age:a?`${a} años`:"—",email:e("pym_email")||"—",email2:e("pym_email2")||"",primaLabel:Number.isFinite(t)?`$${t.toLocaleString("es-CO")}/año`:"—",beneficiaries:s}}function wi(){document.getElementById("pym-cf-back").addEventListener("click",()=>{const s=new URL(window.location);s.searchParams.set("page","beneficiaries"),s.searchParams.delete("step"),window.location.href=s.toString()});const e=document.getElementById("pym-cf-continue"),t=Array.from(document.querySelectorAll('#pym-cf-checks input[type="checkbox"]')),a=()=>{const s=t.every(i=>i.checked);e.disabled=!s,e.classList.toggle("pym-pd-footer__btn--disabled",!s)};t.forEach(s=>s.addEventListener("change",a)),a(),e.addEventListener("click",()=>{if(e.disabled)return;localStorage.setItem("pym_confirmed","true"),$("payment",{confirmed:!0});const s=new URL(window.location);s.searchParams.set("page","payment"),s.searchParams.delete("step"),K(e,s.toString())}),ki()}const Bt=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;function ki(){const e=document.getElementById("pym-cf-email-overlay"),t=document.getElementById("pym-cf-edit-email"),a=document.getElementById("pym-cf-email-close"),s=document.getElementById("pym-cf-email-form"),i=document.getElementById("pym-cf-email-input"),r=document.getElementById("pym-cf-email2-input"),n=document.getElementById("pym-cf-email-err"),l=document.getElementById("pym-cf-email2-err"),o=document.getElementById("pym-cf-email-save"),p=()=>{const d=localStorage.getItem("pym_email")||"";i.value=d==="—"?"":d,r.value=localStorage.getItem("pym_email2")||"",c(),e.classList.add("pym-bf-modal-overlay--visible"),e.setAttribute("aria-hidden","false"),i.focus()},m=()=>{e.classList.remove("pym-bf-modal-overlay--visible"),e.setAttribute("aria-hidden","true")},c=()=>{const d=i.value.trim(),u=r.value.trim(),y=Bt.test(d),g=u===""||Bt.test(u)&&u.toLowerCase()!==d.toLowerCase();n.style.display=d!==""&&!y?"flex":"none",d!==""&&!y&&(n.querySelector("span").textContent="Ingrese un correo válido."),l.style.display=u!==""&&!g?"flex":"none",u!==""&&!g&&(l.querySelector("span").textContent=u.toLowerCase()===d.toLowerCase()?"Debe ser diferente al correo principal.":"Ingrese un correo válido.");const b=y&&g;return o.disabled=!b,o.classList.toggle("pym-bf-drawer__submit--disabled",!b),b};t.addEventListener("click",p),a.addEventListener("click",m),e.addEventListener("click",d=>{d.target===e&&m()}),i.addEventListener("input",c),r.addEventListener("input",c),s.addEventListener("submit",d=>{if(d.preventDefault(),!c())return;const u=i.value.trim(),y=r.value.trim();localStorage.setItem("pym_email",u),y?localStorage.setItem("pym_email2",y):localStorage.removeItem("pym_email2"),$("contact",{email:u,email2:y||""}),document.getElementById("pym-cf-email-primary").textContent=u;const g=document.getElementById("pym-cf-email2-row");y?(document.getElementById("pym-cf-email-secondary").textContent=y,g.hidden=!1):g.hidden=!0,m()})}function Ot(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const qt=[{n:1,label:"Elija su<br>protección"},{n:2,label:"Datos<br>personales"},{n:3,label:"Datos de los<br>beneficiarios"},{n:4,label:"Confirmación"}];function Ei(e){const{anual:t,semestral:a}=xi(),s=Math.max(0,a*2-t),i=a>0?s/(a*2)*100:0,r=localStorage.getItem("pym_payFrequency")||"semestral";e.innerHTML=`
    <div class="pym-pd-page">
      <header class="pym-sp-header">
        <img src="/images/logo-seguros-bolivar.png" alt="Seguros Bolívar" class="pym-sp-header__logo" width="130" height="38">
      </header>

      <div class="pym-pd-content">
        <aside class="pym-sp-stepper" aria-label="Progreso de compra">
          ${Si(4)}
        </aside>

        <main class="pym-pd-main pym-py-main">
          <button type="button" class="pym-sp-back" id="pym-py-back" data-qa-id="pym-py-btn_back">
            <img src="/Iconos/angle-left.png" alt="" class="pym-sp-back__icon" aria-hidden="true">
            <span>Volver</span>
          </button>

          <div class="pym-py-card">
            <div class="pym-py-card__header">
              <h1 class="pym-py-card__title">Elija la frecuencia de pago</h1>
              <p class="pym-py-card__subtitle">Seleccione la opción que mejor se ajuste a su presupuesto.</p>
            </div>

            <div class="pym-py-options" role="radiogroup" aria-label="Frecuencia de pago">
              <button type="button" class="pym-py-opt ${r==="anual"?"pym-py-opt--active":""}" data-freq="anual" role="radio" aria-checked="${r==="anual"}" data-qa-id="pym-py-opt_annual">
                ${s>0?`<span class="pym-py-opt__tag">Ahorro ${Te(s)} (${i.toFixed(2).replace(".",",")}%)</span>`:'<span class="pym-py-opt__tag pym-py-opt__tag--hidden"></span>'}
                <span class="pym-py-opt__radio" aria-hidden="true"></span>
                <span class="pym-py-opt__name">Pago anual</span>
                <span class="pym-py-opt__amount">${Te(t)}<span class="pym-py-opt__period">/año</span></span>
                <span class="pym-py-opt__iva">IVA incluido</span>
              </button>

              <button type="button" class="pym-py-opt ${r==="semestral"?"pym-py-opt--active":""}" data-freq="semestral" role="radio" aria-checked="${r==="semestral"}" data-qa-id="pym-py-opt_biannual">
                <span class="pym-py-opt__radio" aria-hidden="true"></span>
                <span class="pym-py-opt__name">Pago semestral</span>
                <span class="pym-py-opt__amount">${Te(a)}<span class="pym-py-opt__period">/semestre</span></span>
                <span class="pym-py-opt__iva">IVA incluido</span>
              </button>
            </div>

            <div class="pym-py-toggle-row">
              <span class="pym-py-toggle-label" id="pym-py-toggle-label">¿Quiere programar el débito automático de sus pagos ${na(r)}?</span>
              <button type="button" class="pym-py-toggle" id="pym-py-toggle" role="switch" aria-checked="true" aria-labelledby="pym-py-toggle-label" data-qa-id="pym-py-toggle_autodebit">
                <span class="pym-py-toggle__knob" aria-hidden="true"></span>
              </button>
            </div>

            <form class="pym-py-checks" id="pym-py-checks">
              <label class="pym-cf-check">
                <input type="checkbox" id="pym-py-chk1" data-qa-id="pym-py-chk_sign">
                <span>Doy mi consentimiento para firmar electrónicamente la solicitud del seguro.</span>
              </label>
              <label class="pym-cf-check">
                <input type="checkbox" id="pym-py-chk2" data-qa-id="pym-py-chk_debit">
                <span>Autorizo a Seguros Comerciales Bolívar a debitar automáticamente el pago de mi póliza.</span>
              </label>
            </form>
          </div>
        </main>
      </div>

      <div class="pym-pd-footer">
        <button type="button" class="pym-pd-footer__btn pym-pd-footer__btn--disabled" id="pym-py-pay" disabled data-qa-id="pym-py-btn_pay">Ir a pagar</button>
      </div>
    </div>
  `,Ci()}function Si(e){return qt.map((t,a)=>{let s="pending";t.n<e?s="done":t.n===e&&(s="active");const i=s==="done"?'<span class="pym-sp-step__bull pym-sp-step__bull--done">&#10003;</span>':`<span class="pym-sp-step__bull ${s==="active"?"pym-sp-step__bull--active":""}">${t.n}</span>`,r=a<qt.length-1?`<span class="pym-sp-step__line ${t.n<e?"pym-sp-step__line--done":""}" aria-hidden="true"></span>`:"";return`
      <div class="pym-sp-step ${s==="active"?"pym-sp-step--active":""}">
        ${i}
        <span class="pym-sp-step__label">${t.label}</span>
      </div>
      ${r}
    `}).join("")}function xi(){const e=parseInt(localStorage.getItem("pym_primaAnual"),10),t=parseInt(localStorage.getItem("pym_primaSemestral"),10);return{anual:Number.isFinite(e)?e:0,semestral:Number.isFinite(t)?t:0}}function Ci(){document.getElementById("pym-py-back").addEventListener("click",()=>{const d=new URL(window.location);d.searchParams.set("page","confirmation"),d.searchParams.delete("step"),window.location.href=d.toString()});const e=document.getElementById("pym-py-toggle-label"),t=document.getElementById("pym-py-chk2"),a=Array.from(document.querySelectorAll(".pym-py-opt")),s=d=>{a.forEach(u=>{const y=u.dataset.freq===d;u.classList.toggle("pym-py-opt--active",y),u.setAttribute("aria-checked",String(y))}),localStorage.setItem("pym_payFrequency",d),$("payment",{frequency:d}),e.textContent=`¿Quiere programar el débito automático de sus pagos ${na(d)}?`};a.forEach(d=>d.addEventListener("click",()=>s(d.dataset.freq)));const i=document.querySelector(".pym-py-opt--active");i&&(localStorage.setItem("pym_payFrequency",i.dataset.freq),$("payment",{frequency:i.dataset.freq}));const r=document.getElementById("pym-py-toggle"),n=localStorage.getItem("pym_autoDebit");let l=n===null?!0:n==="true";const o=()=>{r.classList.toggle("pym-py-toggle--on",l),r.setAttribute("aria-checked",String(l)),localStorage.setItem("pym_autoDebit",String(l)),$("payment",{autoDebit:l}),t.checked=l,c()};r.addEventListener("click",()=>{l=!l,o()});const p=document.getElementById("pym-py-pay"),m=Array.from(document.querySelectorAll('#pym-py-checks input[type="checkbox"]'));function c(){const d=m.every(u=>u.checked);p.disabled=!d,p.classList.toggle("pym-pd-footer__btn--disabled",!d)}m.forEach(d=>d.addEventListener("change",c)),o(),p.addEventListener("click",()=>{if(p.disabled)return;localStorage.setItem("pym_paymentAuthorized","true"),$("payment",{paymentAuthorized:!0,autoDebit:l});const d=new URL(window.location);d.searchParams.set("page",l?"card-data":"success"),d.searchParams.delete("step"),K(p,d.toString())})}function na(e){return e==="anual"?"anuales":"semestrales"}function Te(e){return"$"+(e||0).toLocaleString("es-CO")}const Tt=["BANCO DAVIVIENDA S.A.","BANCOLOMBIA","BBVA COLOMBIA","BANCO DE BOGOTÁ","BANCO DE OCCIDENTE","BANCO POPULAR","BANCO CAJA SOCIAL","SCOTIABANK COLPATRIA","ITAÚ","BANCO AV VILLAS","BANCO FALABELLA","NEQUI"],Nt=["Cédula de ciudadanía","Cédula de extranjería","Pasaporte","NIT"],Di='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>',Ii='<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="8" y="3" width="8" height="4" rx="1"/><path d="M9 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3"/><path d="m9 14 2 2 4-4"/></svg>',Q='<img src="/Iconos/angle-left.png" alt="" class="pym-select-chevron" aria-hidden="true">';function Ai(e){e.innerHTML=`
    <div class="pym-md-page">
      <header class="pym-md-header">
        <button type="button" class="pym-md-back" id="pym-md-back" data-qa-id="pym-md-btn_back">
          <img src="/Iconos/angle-left.png" alt="" class="pym-sp-back__icon" aria-hidden="true">
          <span>Volver</span>
        </button>
        <img src="/images/logo-seguros-bolivar.png" alt="Seguros Bolívar" class="pym-md-header__logo" width="130" height="38">
        <span class="pym-md-header__spacer" aria-hidden="true"></span>
      </header>

      <main class="pym-md-main">
        <h1 class="pym-md-title">
          <span class="pym-md-title__ico" aria-hidden="true">${Ii}</span>
          Método de pago
        </h1>

        <section class="pym-md-card">
          <div class="pym-md-card__head">
            <span class="pym-md-card__ico" aria-hidden="true">${Di}</span>
            <span class="pym-md-card__title">Débito automático</span>
          </div>
          <p class="pym-md-card__desc">Puede usar su cuenta de ahorros, cuenta corriente, o tarjeta de crédito (sólo para cuentas y tarjetas nacionales).</p>

          <div class="pym-md-options" role="radiogroup" aria-label="Medio de débito">
            <!-- Opción: Cuenta -->
            <div class="pym-md-opt" data-method="cuenta">
              <button type="button" class="pym-md-opt__head" data-qa-id="pym-md-opt_account" aria-expanded="false">
                <span class="pym-md-radio" aria-hidden="true"></span>
                <span class="pym-md-opt__label">Cuenta de Ahorros / Corriente</span>
              </button>
              <div class="pym-md-opt__body" hidden>
                <div class="pym-md-field">
                  <label class="pym-md-field__label" for="pym-md-acc-bank">Banco</label>
                  <div class="pym-md-select">
                    <select id="pym-md-acc-bank" data-qa-id="pym-md-select_account_bank">
                      <option value="" disabled selected>Seleccione una opción</option>
                      ${Tt.map(t=>`<option>${t}</option>`).join("")}
                    </select>
                    <span class="pym-md-select__chev" aria-hidden="true">${Q}</span>
                  </div>
                </div>
                <div class="pym-md-field">
                  <label class="pym-md-field__label" for="pym-md-acc-type">Tipo de cuenta</label>
                  <div class="pym-md-select">
                    <select id="pym-md-acc-type" data-qa-id="pym-md-select_account_type">
                      <option value="" disabled selected>Seleccione una opción</option>
                      <option>Ahorros</option>
                      <option>Corriente</option>
                    </select>
                    <span class="pym-md-select__chev" aria-hidden="true">${Q}</span>
                  </div>
                </div>
                <div class="pym-md-field">
                  <label class="pym-md-field__label" for="pym-md-acc-number">Número de cuenta</label>
                  <input type="text" class="pym-md-input" id="pym-md-acc-number" inputmode="numeric" placeholder="Ej: 000123456789" data-qa-id="pym-md-input_account_number">
                </div>
                <div class="pym-md-row">
                  <div class="pym-md-field">
                    <label class="pym-md-field__label" for="pym-md-acc-doctype">Tipo de documento</label>
                    <div class="pym-md-select">
                      <select id="pym-md-acc-doctype" data-qa-id="pym-md-select_account_doctype">
                        <option value="" disabled selected>Seleccione</option>
                        ${Nt.map(t=>`<option>${t}</option>`).join("")}
                      </select>
                      <span class="pym-md-select__chev" aria-hidden="true">${Q}</span>
                    </div>
                  </div>
                  <div class="pym-md-field">
                    <label class="pym-md-field__label" for="pym-md-acc-docnumber">Número de documento</label>
                    <input type="text" class="pym-md-input" id="pym-md-acc-docnumber" inputmode="numeric" placeholder="Ej: 1072556562" data-qa-id="pym-md-input_account_docnumber">
                  </div>
                </div>
              </div>
            </div>

            <!-- Opción: Tarjeta de Crédito -->
            <div class="pym-md-opt" data-method="tarjeta">
              <button type="button" class="pym-md-opt__head" data-qa-id="pym-md-opt_card" aria-expanded="false">
                <span class="pym-md-radio" aria-hidden="true"></span>
                <span class="pym-md-opt__label">Tarjeta de Crédito</span>
              </button>
              <div class="pym-md-opt__body" hidden>
                <div class="pym-md-field">
                  <label class="pym-md-field__label" for="pym-md-bank">Banco</label>
                  <div class="pym-md-select">
                    <select id="pym-md-bank" data-qa-id="pym-md-select_bank">
                      <option value="" disabled selected>Seleccione una opción</option>
                      ${Tt.map(t=>`<option>${t}</option>`).join("")}
                    </select>
                    <span class="pym-md-select__chev" aria-hidden="true">${Q}</span>
                  </div>
                </div>
                <div class="pym-md-field">
                  <label class="pym-md-field__label" for="pym-md-number">Número de la tarjeta</label>
                  <input type="text" class="pym-md-input" id="pym-md-number" inputmode="numeric" autocomplete="cc-number" placeholder="0000 0000 0000 0000" maxlength="19" data-qa-id="pym-md-input_number">
                </div>
                <div class="pym-md-row">
                  <div class="pym-md-field pym-md-field--grow">
                    <label class="pym-md-field__label" for="pym-md-exp">Fecha de vencimiento</label>
                    <input type="text" class="pym-md-input" id="pym-md-exp" inputmode="numeric" autocomplete="cc-exp" placeholder="MM/AA" maxlength="5" data-qa-id="pym-md-input_exp">
                  </div>
                  <div class="pym-md-field pym-md-field--sm">
                    <label class="pym-md-field__label" for="pym-md-installments">Cuotas</label>
                    <div class="pym-md-select">
                      <select id="pym-md-installments" data-qa-id="pym-md-select_installments">
                        ${[1,2,3,6,12,24,36].map(t=>`<option${t===1?" selected":""}>${t}</option>`).join("")}
                      </select>
                      <span class="pym-md-select__chev" aria-hidden="true">${Q}</span>
                    </div>
                  </div>
                </div>
                <div class="pym-md-field">
                  <label class="pym-md-field__label" for="pym-md-name">Nombre del titular</label>
                  <input type="text" class="pym-md-input" id="pym-md-name" autocomplete="cc-name" placeholder="Ej: Ana María López" data-qa-id="pym-md-input_name">
                </div>
                <div class="pym-md-row">
                  <div class="pym-md-field">
                    <label class="pym-md-field__label" for="pym-md-doctype">Tipo de documento</label>
                    <div class="pym-md-select">
                      <select id="pym-md-doctype" data-qa-id="pym-md-select_doctype">
                        <option value="" disabled selected>Seleccione</option>
                        ${Nt.map(t=>`<option>${t}</option>`).join("")}
                      </select>
                      <span class="pym-md-select__chev" aria-hidden="true">${Q}</span>
                    </div>
                  </div>
                  <div class="pym-md-field">
                    <label class="pym-md-field__label" for="pym-md-docnumber">Número de documento</label>
                    <input type="text" class="pym-md-input" id="pym-md-docnumber" inputmode="numeric" placeholder="Ej: 1072556562" data-qa-id="pym-md-input_docnumber">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pym-md-alert">
            <span class="pym-md-alert__bar" aria-hidden="true"></span>
            <p><strong>Tenga en cuenta:</strong> El costo del seguro se descontará automáticamente de su cuenta a partir del segundo período de facturación.</p>
          </div>
        </section>
      </main>

      <div class="pym-pd-footer pym-md-footer">
        <button type="button" class="pym-pd-footer__btn pym-pd-footer__btn--disabled" id="pym-md-save" disabled data-qa-id="pym-md-btn_save">Guardar</button>
      </div>
    </div>
  `,$i()}function $i(){document.getElementById("pym-md-back").addEventListener("click",()=>{const l=new URL(window.location);l.searchParams.set("page","payment"),l.searchParams.delete("step"),window.location.href=l.toString()});const e=Array.from(document.querySelectorAll(".pym-md-opt")),t=document.getElementById("pym-md-save");let a="";const s=document.getElementById("pym-md-number");s.addEventListener("input",()=>{const l=s.value.replace(/\D/g,"").slice(0,16);s.value=l.replace(/(.{4})/g,"$1 ").trim(),n()});const i=document.getElementById("pym-md-exp");i.addEventListener("input",()=>{let l=i.value.replace(/\D/g,"").slice(0,4);l.length>=3&&(l=l.slice(0,2)+"/"+l.slice(2)),i.value=l,n()});const r=l=>{const o=!l.classList.contains("pym-md-opt--active");e.forEach(p=>{const m=p===l&&o;p.classList.toggle("pym-md-opt--active",m),p.querySelector(".pym-md-opt__head").setAttribute("aria-expanded",String(m)),p.querySelector(".pym-md-opt__body").hidden=!m}),a=o?l.dataset.method:"",n()};e.forEach(l=>{l.querySelector(".pym-md-opt__head").addEventListener("click",()=>r(l))}),document.querySelectorAll(".pym-md-input, .pym-md-select select").forEach(l=>{l.addEventListener("input",n),l.addEventListener("change",n)});function n(){let l=!1;if(a==="tarjeta"){const o=s.value.replace(/\s/g,"");l=x("pym-md-bank")!==""&&o.length>=13&&Li(i.value)&&x("pym-md-name")!==""&&x("pym-md-doctype")!==""&&x("pym-md-docnumber")!==""}else a==="cuenta"&&(l=x("pym-md-acc-bank")!==""&&x("pym-md-acc-type")!==""&&x("pym-md-acc-number")!==""&&x("pym-md-acc-doctype")!==""&&x("pym-md-acc-docnumber")!=="");t.disabled=!l,t.classList.toggle("pym-pd-footer__btn--disabled",!l)}n(),t.addEventListener("click",()=>{if(t.disabled)return;if(a==="tarjeta"){const o=s.value.replace(/\D/g,"");$("card",{method:"Tarjeta de Crédito",bank:x("pym-md-bank"),holderName:x("pym-md-name"),number:o,last4:o.slice(-4),expiry:i.value,installments:x("pym-md-installments"),docType:x("pym-md-doctype"),docNumber:x("pym-md-docnumber"),registered:!0})}else $("card",{method:"Cuenta de Ahorros / Corriente",bank:x("pym-md-acc-bank"),accountType:x("pym-md-acc-type"),number:x("pym-md-acc-number"),last4:x("pym-md-acc-number").slice(-4),docType:x("pym-md-acc-doctype"),docNumber:x("pym-md-acc-docnumber"),registered:!0});localStorage.setItem("pym_cardRegistered","true");const l=new URL(window.location);l.searchParams.set("page","success"),l.searchParams.delete("step"),K(t,l.toString())})}function x(e){var t;return(((t=document.getElementById(e))==null?void 0:t.value)||"").trim()}function Li(e){const t=/^(\d{2})\/(\d{2})$/.exec(e);if(!t)return!1;const a=parseInt(t[1],10),s=2e3+parseInt(t[2],10);if(a<1||a>12)return!1;const i=new Date;return new Date(s,a,0)>=new Date(i.getFullYear(),i.getMonth(),1)}const Mi='<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>',Pi='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/></svg>',Bi='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',Oi='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>';function qi(e){const t=Ti(),a="45454654684",s="#BHO-2026-3211";$("result",{policyNumber:s,approvalCode:a,validity:t.validity,completedAt:new Date().toISOString()});const i=Kt();window.pymLeadPayload=i,console.info("[Pymes] Lead completo listo para exportar:",i),e.innerHTML=`
    <div class="pym-su-page">
      <header class="pym-sp-header">
        <img src="/images/logo-seguros-bolivar.png" alt="Seguros Bolívar" class="pym-sp-header__logo" width="130" height="38">
      </header>

      <div class="pym-su-banner">
        <span class="pym-su-confetti pym-su-confetti--left" aria-hidden="true">🎉</span>
        <span class="pym-su-confetti pym-su-confetti--right" aria-hidden="true">🎊</span>
        <div class="pym-su-banner__text">
          <p class="pym-su-banner__subtitle">¡Su compra fue aprobada!</p>
          <h1 class="pym-su-banner__title">Le damos la bienvenida a Seguros Bolívar</h1>
        </div>
      </div>

      <div class="pym-su-content">
        <section class="pym-su-card">
          <div class="pym-su-card__header">
            <span class="pym-su-card__ico" aria-hidden="true">${Mi}</span>
            <span class="pym-su-card__title">Detalles de su póliza</span>
          </div>

          <dl class="pym-su-details">
            <div class="pym-su-row"><dt>Plan:</dt><dd>Seguro de Vida Pymes</dd></div>
            <div class="pym-su-row"><dt>${t.freqLabel}:</dt><dd>${t.amount}</dd></div>
            <div class="pym-su-row"><dt>Vigencia:</dt><dd>${t.validity}</dd></div>
            <div class="pym-su-row"><dt>No. póliza:</dt><dd>${s}</dd></div>
          </dl>

          <div class="pym-su-divider" aria-hidden="true"></div>

          <div class="pym-su-approval">
            <p class="pym-su-approval__label">
              <span class="pym-su-approval__check" aria-hidden="true">${Pi}</span>
              Número de aprobación de la compra
            </p>
            <div class="pym-su-approval__code">
              <span class="pym-su-code" id="pym-su-code">${a}</span>
              <button type="button" class="pym-su-copy" id="pym-su-copy" data-qa-id="pym-su-btn_copy">
                ${Bi}<span>Copiar</span>
              </button>
            </div>
          </div>
        </section>

        <div class="pym-su-info">
          <p>En un máximo de <strong>12 horas</strong>, enviaremos los detalles de su seguro al correo electrónico <strong>${t.email}</strong>.</p>
        </div>

        <div class="pym-su-status" id="pym-su-status" role="status" aria-live="polite" hidden>
          <span class="pym-su-status__text" id="pym-su-status-text"></span>
          <button type="button" class="pym-su-status__retry" id="pym-su-retry" hidden data-qa-id="pym-su-btn_retry">Reintentar</button>
        </div>

        <button type="button" class="pym-su-home" id="pym-su-home" data-qa-id="pym-su-btn_home">
          ${Oi}<span>Ir al inicio</span>
        </button>
      </div>
    </div>
  `,Ri(a)}function Ti(){const e=l=>localStorage.getItem(l)||"",t=e("pym_payFrequency")||"semestral",a=parseInt(e("pym_primaAnual"),10),s=parseInt(e("pym_primaSemestral"),10),i=t==="anual",r=i?a:s;return{freqLabel:i?"Pago anual":"Pago semestral",amount:Number.isFinite(r)?`$${r.toLocaleString("es-CO")}`:"—",validity:Ni(),email:e("pym_email")||"su correo registrado"}}function Ni(){const e=s=>{const i=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];return`${s.getDate()} ${i[s.getMonth()]} ${s.getFullYear()}`},t=new Date;t.setDate(t.getDate()+1);const a=new Date(t);return a.setFullYear(a.getFullYear()+1),`${e(t)} - ${e(a)}`}function Ri(e){document.getElementById("pym-su-home").addEventListener("click",()=>{const a=new URL(window.location);a.search="",window.location.href=a.toString()}),zi();const t=document.getElementById("pym-su-copy");t.addEventListener("click",()=>{const a=()=>{const s=t.querySelector("span");s.textContent="¡Copiado!",setTimeout(()=>{s.textContent="Copiar"},2e3)};navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(a).catch(a):a()})}async function zi(){const e=document.getElementById("pym-su-status"),t=document.getElementById("pym-su-status-text"),a=document.getElementById("pym-su-retry"),s=(n,l,o)=>{e.hidden=!1,e.className=`pym-su-status pym-su-status--${n}`,t.textContent=l,a.hidden=!o},i=()=>{e.hidden=!0};i();const r=await Et();r.ok?i():(s("error","No pudimos registrar su información. Intente de nuevo.",!0),console.error("[Pymes] Error al enviar el lead:",r.error)),a.onclick=async()=>{s("loading","Reintentando…",!1);const n=await Et();n.ok?i():(s("error","No pudimos registrar su información. Intente de nuevo.",!0),console.error("[Pymes] Error al reintentar:",n.error))}}const la="/Pymes-vida/";function oa(e){var a;const t=s=>{const i=s.getAttribute("src");i&&(i.startsWith("/images/")||i.startsWith("/Iconos/"))&&s.setAttribute("src",la+i.slice(1))};(a=e.querySelectorAll)==null||a.call(e,'img[src^="/images/"], img[src^="/Iconos/"]').forEach(t)}function ji(){new MutationObserver(t=>{for(const a of t)a.addedNodes.forEach(s=>{if(s.nodeType===1)if(s.tagName==="IMG"){const i=s.getAttribute("src");i&&(i.startsWith("/images/")||i.startsWith("/Iconos/"))&&s.setAttribute("src",la+i.slice(1))}else oa(s)})}).observe(document.body,{childList:!0,subtree:!0})}function Ui(){const e=new URLSearchParams(window.location.search),t=e.get("page")||"home",a=parseInt(e.get("step"))||1,s=document.getElementById("app-content");switch(t){case"select-plan":Rs(s);break;case"personal-data":Hs(s,a);break;case"beneficiaries":oi(s);break;case"confirmation":fi(s);break;case"payment":Ei(s);break;case"card-data":Ai(s);break;case"success":qi(s);break;case"home":default:Es(s,a);break}}function Rt(){ji(),Ui(),oa(document)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Rt):Rt();
