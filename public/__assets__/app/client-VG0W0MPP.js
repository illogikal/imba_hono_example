
var mi=Symbol.for("#__initor__"),_i=Symbol.for("#__inited__"),pi=Symbol.for("#__hooks__"),$i=Symbol.for("#type"),ge=Symbol.for("#__listeners__");function R(i,t,e){if(!i)return;let r=Object.getOwnPropertyDescriptor(i,t);return r||i==e?r||void 0:R(Reflect.getPrototypeOf(i),t,e)}var ut=function(i,t,e){let r,s,n;for(;(r=e)&&(e=e.next);)(s=e.listener)&&(e.path&&s[e.path]?n=t?s[e.path].apply(s,t):s[e.path]():n=t?s.apply(e,t):s.call(e)),e.times&&--e.times<=0&&(r.next=e.next,e.listener=null)};function Y(i,t,e){let r;(r=i[ge])&&(r[t]&&ut(t,e,r[t]),r.all&&ut(t,[t,e],r.all))}function be(i){let t;return i&&((t=i.toIterable)?t.call(i):i)}var ct=Symbol.for("#__init__"),ye=Symbol.for("#__patch__"),bi=Symbol.for("#__initor__"),yi=Symbol.for("#__inited__"),xi=Symbol.for("#__hooks__"),at=Symbol.for("#schedule"),K=Symbol.for("#frames"),L=Symbol.for("#interval"),T=Symbol.for("#stage"),E=Symbol.for("#scheduled"),V=Symbol.for("#version"),xe=Symbol.for("#fps"),ft=Symbol.for("#ticker"),Se=globalThis.requestAnimationFrame||function(i){return globalThis.setTimeout(i,1e3/60)};var Si=1/60,dt=class{[ye](t={}){var e;(e=t.owner)!==void 0&&(this.owner=e),(e=t.target)!==void 0&&(this.target=e),(e=t.active)!==void 0&&(this.active=e),(e=t.value)!==void 0&&(this.value=e),(e=t.skip)!==void 0&&(this.skip=e),(e=t.last)!==void 0&&(this.last=e)}constructor(t=null){this[ct](t)}[ct](t=null,e=!0){var r;this.owner=t&&(r=t.owner)!==void 0?r:null,this.target=t&&(r=t.target)!==void 0?r:null,this.active=t&&(r=t.active)!==void 0?r:!1,this.value=t&&(r=t.value)!==void 0?r:void 0,this.skip=t&&(r=t.skip)!==void 0?r:0,this.last=t&&(r=t.last)!==void 0?r:0}tick(t,e){return this.last=this.owner[K],this.target.tick(this,e),1}update(t,e){let r=this.active,s=t.value;return this.value!=s&&(this.deactivate(),this.value=s),(this.value||r||e)&&this.activate(),this}queue(){this.owner.add(this)}activate(){return this.value===!0?this.owner.on("commit",this):this.value===!1||typeof this.value=="number"&&(this.value/(1e3/60)<=2?this.owner.on("raf",this):this[L]=globalThis.setInterval(this.queue.bind(this),this.value)),this.active=!0,this}deactivate(){return this.value===!0&&this.owner.un("commit",this),this.owner.un("raf",this),this[L]&&(globalThis.clearInterval(this[L]),this[L]=null),this.active=!1,this}},mt=class{constructor(){var t=this;this.id=Symbol(),this.queue=[],this.stage=-1,this[T]=-1,this[K]=0,this[E]=!1,this[V]=0,this.listeners={},this.intervals={},t.commit=function(){return t.add("commit"),t},this[xe]=0,t.$promise=null,t.$resolve=null,this[ft]=function(e){return t[E]=!1,t.tick(e)}}touch(){return this[V]++}get version(){return this[V]}add(t,e){return(e||this.queue.indexOf(t)==-1)&&this.queue.push(t),this[E]||this[at](),this}get committing\u03A6(){return this.queue.indexOf("commit")>=0}get syncing\u03A6(){return this[T]==1}listen(t,e){let r=this.listeners[t],s=!r;return r||(r=this.listeners[t]=new Set),r.add(e),t=="raf"&&s&&this.add("raf"),this}unlisten(t,e){var r;let s=this.listeners[t];return s&&s.delete(e),t=="raf"&&s&&s.size==0&&(r=this.listeners.raf,delete this.listeners.raf),this}on(t,e){return this.listen(t,e)}un(t,e){return this.unlisten(t,e)}get promise(){var t=this;return t.$promise||(t.$promise=new Promise(function(e){return t.$resolve=e}))}tick(t){var e=this;let r=this.queue,s=this[K]++;if(this.ts||(this.ts=t),this.dt=t-this.ts,this.ts=t,this.queue=[],this[T]=1,this[V]++,r.length)for(let n=0,h=be(r),o=h.length;n<o;n++){let l=h[n];typeof l=="string"&&this.listeners[l]?e.listeners[l].forEach(function(u){if(u.tick instanceof Function)return u.tick(e,l);if(u instanceof Function)return u(e,l)}):l instanceof Function?l(e.dt,e):l.tick&&l.tick(e.dt,e)}return this[T]=this[E]?0:-1,e.$promise&&(e.$resolve(e),e.$promise=e.$resolve=null),e.listeners.raf&&e.add("raf"),e}[at](){return this[E]||(this[E]=!0,this[T]==-1&&(this[T]=0),Se(this[ft])),this}schedule(t,e){var r,s;return e||(e=t[r=this.id]||(t[r]={value:!0})),(e[s=this.id]||(e[s]=new dt({owner:this,target:t}))).update(e,!0)}unschedule(t,e={}){e||(e=t[this.id]);let r=e&&e[this.id];return r&&r.active&&r.deactivate(),this}},g=new mt;function X(){return g.add("commit").promise}function ve(i,t){return globalThis.setTimeout(function(){i(),X()},t)}function we(i,t){return globalThis.setInterval(function(){i(),X()},t)}var Te=globalThis.clearInterval,Ee=globalThis.clearTimeout,O=globalThis.imba||(globalThis.imba={});O.commit=X;O.setTimeout=ve;O.setInterval=we;O.clearInterval=Te;O.clearTimeout=Ee;var wi=Symbol.for("#__initor__"),Ti=Symbol.for("#__inited__"),Ei=Symbol.for("#__hooks__"),_t=class{constructor(){this.data={}}},pt=new _t;var Ni=Symbol.for("#__initor__"),Oi=Symbol.for("#__inited__"),Mi=Symbol.for("#__hooks__"),$t=Symbol.for("#__init__"),Ce=Symbol.for("#__patch__"),gt=Symbol.for("#warned"),C=Symbol.for("#asset"),z=class{static wrap(t){let e=new z(t);return new Proxy(e,e)}constructor(t){this.meta=t}get input(){return pt.inputs[this.meta.input]}get asset(){return globalThis._MF_?this.meta:this.input?this.input.asset:null}set(t,e,r){return!0}get(t,e){return this.meta.meta&&this.meta.meta[e]!=null?this.meta.meta[e]:this.asset?e=="absPath"&&!this.asset.absPath?this.asset.url:this.asset[e]:((this.meta[gt]!=!0?(this.meta[gt]=!0,!0):!1)&&console.warn("Asset for '"+this.meta.input+"' not found"),e=="valueOf"?function(){return""}:null)}},bt=class{[Ce](t={}){var e;(e=t.url)!==void 0&&(this.url=e),(e=t.meta)!==void 0&&(this.meta=e)}constructor(t=null){this[$t](t)}[$t](t=null,e=!0){this.url=t?t.url:void 0,this.meta=t?t.meta:void 0}adoptNode(t){var e;if((e=this.meta)==null?void 0:e.content){for(let r=this.meta.attributes,s=0,n=Object.keys(r),h=n.length,o,l;s<h;s++)o=n[s],l=r[o],t.setAttribute(o,l);t.innerHTML=this.meta.content}return this}toString(){return this.url}toStyleString(){return"url("+this.url+")"}};function yt(i){var t,e;if(i[C])return i[C];if(i.type=="svg")return i[C]||(i[C]=new bt(i));if(i.input){let r=globalThis._MF_&&globalThis._MF_[i.input];return r&&(Object.assign(i,r),i.toString=function(){return this.absPath}),i[C]||(i[C]=z.wrap(i))}return i}var xt=Symbol.for("#toStringDeopt"),ki=Symbol.for("#__initor__"),Ii=Symbol.for("#__inited__"),Pi=Symbol.for("#__hooks__"),St=Symbol.for("#symbols"),vt=Symbol.for("#batches"),wt=Symbol.for("#extras"),Tt=Symbol.for("#stacks"),Z=class{constructor(t){this.dom=t,this.string=""}contains(t){return this.dom.classList.contains(t)}add(t){return this.contains(t)?this:(this.string+=(this.string?" ":"")+t,this.dom.classList.add(t),this)}remove(t){if(!this.contains(t))return this;let e=new RegExp("(^|\\s)"+t+"(?=\\s|$)","g");return this.string=this.string.replace(e,""),this.dom.classList.remove(t),this}toggle(t,e){return e===void 0&&(e=!this.contains(t)),e?this.add(t):this.remove(t)}incr(t,e=0){var r=this;let s=this.stacks,n=s[t]||0;return n<1&&this.add(t),e>0&&setTimeout(function(){return r.decr(t)},e),s[t]=Math.max(n,0)+1}decr(t){let e=this.stacks,r=e[t]||0;return r==1&&this.remove(t),e[t]=Math.max(r,1)-1}reconcile(t,e){let r=this[St],s=this[vt],n=!0;if(!r)r=this[St]=[t],s=this[vt]=[e||""],this.toString=this.valueOf=this[xt];else{let h=r.indexOf(t),o=e||"";h==-1?(r.push(t),s.push(o)):s[h]!=o?s[h]=o:n=!1}n&&(this[wt]=" "+s.join(" "),this.sync())}valueOf(){return this.string}toString(){return this.string}[xt](){return this.string+(this[wt]||"")}sync(){return this.dom.flagSync$()}get stacks(){return this[Tt]||(this[Tt]={})}};var H=Symbol.for("#__init__"),Fe=Symbol.for("#__patch__"),Et=Symbol.for("#__initor__"),Ct=Symbol.for("#__inited__"),Ft=Symbol.for("#__hooks__"),tt=Symbol.for("#getRenderContext"),Ne=Symbol.for("#getDynamicContext"),Nt=Symbol(),c={context:null},Ot=class{[Fe](t={}){var e;(e=t.stack)!==void 0&&(this.stack=e)}constructor(t=null){this[H](t)}[H](t=null,e=!0){var r;this.stack=t&&(r=t.stack)!==void 0?r:[]}push(t){return this.stack.push(t)}pop(t){return this.stack.pop()}},Li=new Ot,y=class extends Map{static[H](){return this.prototype[Et]=Nt,this}constructor(t,e=null){super();this._=t,this.sym=e,this[Et]===Nt&&(this[Ft]&&this[Ft].inited(this),this[Ct]&&this[Ct]())}pop(){return c.context=null}[tt](t){let e=this.get(t);return e||this.set(t,e=new y(this._,t)),c.context=e}[Ne](t,e){return this[tt](t)[tt](e)}run(t){return this.value=t,c.context==this&&(c.context=null),this.get(t)}cache(t){return this.set(this.value,t),t}};y[H]();function Mt(i,t=Symbol(),e=i){return c.context=i[t]||(i[t]=new y(e,t))}function Dt(){let i=c.context,t=i||new y(null);return i&&(c.context=null),t}function M(i,t){let e=Object.getOwnPropertyDescriptors(t);return delete e.constructor,Object.defineProperties(i,e),i}function Oe(i){let t;return i&&((t=i.toIterable)?t.call(i):i)}var j=Symbol.for("#parent"),kt=Symbol.for("#closestNode"),Me=Symbol.for("#parentNode"),De=Symbol.for("#context"),It=Symbol.for("#__init__"),Pt=Symbol.for("##inited"),et=Symbol.for("#getRenderContext"),ke=Symbol.for("#getDynamicContext"),Rt=Symbol.for("#insertChild"),D=Symbol.for("#appendChild"),it=Symbol.for("#replaceChild"),Lt=Symbol.for("#removeChild"),x=Symbol.for("#insertInto"),Vt=Symbol.for("#insertIntoDeopt"),k=Symbol.for("#removeFrom"),zt=Symbol.for("#removeFromDeopt"),F=Symbol.for("#replaceWith"),Ht=Symbol.for("#replaceWithDeopt"),rt=Symbol.for("#placeholderNode"),Ie=Symbol.for("#attachToParent"),Pe=Symbol.for("#detachFromParent"),Re=Symbol.for("#placeChild"),Le=Symbol.for("#beforeReconcile"),Ve=Symbol.for("#afterReconcile"),ze=Symbol.for("#afterVisit"),jt=Symbol.for("##parent"),He=Symbol.for("##up"),At=Symbol.for("##context"),v=Symbol.for("#domNode"),A=Symbol.for("##placeholderNode"),Bt=Symbol.for("#domDeopt"),je=Symbol.for("#isRichElement"),Gt=Symbol.for("#src"),B=Symbol.for("#htmlNodeName"),Ae=Symbol.for("#getSlot"),Bi=Symbol.for("#ImbaElement"),qt=Symbol.for("#cssns"),Be=Symbol.for("#cssid"),{Event:Gi,UIEvent:qi,MouseEvent:Ui,PointerEvent:Wi,KeyboardEvent:Qi,CustomEvent:Ge,Node:G,Comment:qe,Text:Ue,Element:w,HTMLElement:st,HTMLHtmlElement:Ji,HTMLSelectElement:Yi,HTMLInputElement:Ki,HTMLTextAreaElement:Xi,HTMLButtonElement:Zi,HTMLOptionElement:tr,HTMLScriptElement:er,SVGElement:Ut,DocumentFragment:ir,ShadowRoot:rr,Document:We,Window:sr,customElements:nr}=globalThis.window,Wt={};function Qt(i,t,e){if(!i)return e[t]=null;if(e[t]!==void 0)return e[t];let r=Object.getOwnPropertyDescriptor(i,t);return r!==void 0||i==Ut?e[t]=r||null:Qt(Reflect.getPrototypeOf(i),t,e)}var nt={},ot={},Qe={},Je={};var Ye={get(i,t){let e=i,r;for(;e&&r==null;)(e=e[j])&&(r=e[t]);return r},set(i,t,e){let r=i,s;for(;r&&s==null;){if(R(r,t,w))return r[t]=e,!0;r=r[j]}return!0}},Jt=class{get flags(){return this.documentElement.flags}};M(We.prototype,Jt.prototype);var Yt=class{get[j](){return this[jt]||this.parentNode||this[He]}get[kt](){return this}get[Me](){return this[j][kt]}get[De](){return this[At]||(this[At]=new Proxy(this,Ye))}[It](){return this}[Pt](){return this}[et](t){return Mt(this,t)}[ke](t,e){return this[et](t)[et](e)}[Rt](t,e){return t[x](this,e)}[D](t){return t[x](this,null)}[it](t,e){let r=this[Rt](t,e);return this[Lt](e),r}[Lt](t){return t[k](this)}[x](t,e=null){return e?t.insertBefore(this,e):t.appendChild(this),this}[Vt](t,e){return e?t.insertBefore(this[v]||this,e):t.appendChild(this[v]||this),this}[k](t){return t.removeChild(this)}[zt](t){return t.removeChild(this[v]||this)}[F](t,e){return e[it](t,this)}[Ht](t,e){return e[it](t,this[v]||this)}get[rt](){return this[A]||(this[A]=globalThis.document.createComment("placeholder"))}set[rt](t){let e=this[A];this[A]=t,e&&e!=t&&e.parentNode&&e[F](t)}[Ie](){let t=this[v],e=t&&t.parentNode;return t&&e&&t!=this&&(this[v]=null,this[x](e,t),t[k](e)),this}[Pe](){(this[Bt]!=!0?(this[Bt]=!0,!0):!1)&&(this[F]=this[Ht],this[k]=this[zt],this[x]=this[Vt]);let t=this[rt];return this.parentNode&&t!=this&&(t[x](this.parentNode,this),this[k](this.parentNode)),this[v]=t,this}[Re](t,e,r){let s=typeof t;if(s==="undefined"||t===null){if(r&&r instanceof qe)return r;let n=globalThis.document.createComment("");return r?r[F](n,this):n[x](this,null)}if(t===r)return t;if(s!=="object"){let n,h=t;return e&128&&e&256,r?r instanceof Ue?(r.textContent=h,r):(n=globalThis.document.createTextNode(h),r[F](n,this),n):(this.appendChild(n=globalThis.document.createTextNode(h)),n)}else return r?r[F](t,this):t[x](this,null)}};M(G.prototype,Yt.prototype);var Kt=class{log(...t){return console.log(...t),this}emit(t,e,r={bubbles:!0,cancelable:!0}){e!=null&&(r.detail=e);let s=new Ge(t,r),n=this.dispatchEvent(s);return s}text$(t){return this.textContent=t,this}[Le](){return this}[Ve](){return this}[ze](){this.render&&this.render()}get flags(){return this.$flags||(this.$flags=new Z(this),this.flag$==w.prototype.flag$&&(this.flags$ext=this.className),this.flagDeopt$()),this.$flags}flag$(t){let e=this.flags$ns;this.className=e?e+(this.flags$ext=t):this.flags$ext=t}flagDeopt$(){var t=this;this.flag$=this.flagExt$,t.flagSelf$=function(e){return t.flagSync$(t.flags$own=e)}}flagExt$(t){return this.flagSync$(this.flags$ext=t)}flagSelf$(t){return this.flagDeopt$(),this.flagSelf$(t)}flagSync$(){return this.className=(this.flags$ns||"")+(this.flags$ext||"")+" "+(this.flags$own||"")+" "+(this.$flags||"")}set$(t,e){let r=R(this,t,w);!r||!r.set?this.setAttribute(t,e):this[t]=e}get richValue(){return this.value}set richValue(t){this.value=t}};M(w.prototype,Kt.prototype);w.prototype.setns$=w.prototype.setAttributeNS;w.prototype[je]=!0;function I(i,t,e,r){let s=globalThis.document.createElement(i);return e&&(s.className=e),r!==null&&s.text$(r),t&&t[D]&&t[D](s),s}var Xt=class{set$(t,e){var r;let s=Wt[r=this.nodeName]||(Wt[r]={}),n=Qt(this,t,s);!n||!n.set?this.setAttribute(t,e):this[t]=e}flag$(t){let e=this.flags$ns;this.setAttribute("class",e?e+(this.flags$ext=t):this.flags$ext=t)}flagSelf$(t){var e=this;return e.flag$=function(r){return e.flagSync$(e.flags$ext=r)},e.flagSelf$=function(r){return e.flagSync$(e.flags$own=r)},e.flagSelf$(t)}flagSync$(){return this.setAttribute("class",(this.flags$ns||"")+(this.flags$ext||"")+" "+(this.flags$own||"")+" "+(this.$flags||""))}};M(Ut.prototype,Xt.prototype);var Zt=class{set src(t){if((this[Gt]!=t?(this[Gt]=t,!0):!1)&&t){if(t.adoptNode)t.adoptNode(this);else if(t.content){for(let e=t.attributes,r=0,s=Object.keys(e),n=s.length,h,o;r<n;r++)h=s[r],o=e[h],this.setAttribute(h,o);this.innerHTML=t.content}}}};M(SVGSVGElement.prototype,Zt.prototype);function te(i,t,e,r,s){let n=globalThis.document.createElementNS("http://www.w3.org/2000/svg",i);return e&&(n.className.baseVal=e),t&&t[D]&&t[D](n),r&&(n.textContent=r),n}var q=globalThis.navigator,Ke=q&&q.vendor||"",ee=q&&q.userAgent||"",Xe=Ke.indexOf("Apple")>-1||ee.indexOf("CriOS")>=0||ee.indexOf("FxiOS")>=0,U=!Xe,ie=new Map,re=class extends st{connectedCallback(){return U?this.parentNode.removeChild(this):this.parentNode.connectedCallback()}disconnectedCallback(){if(!U)return this.parentNode.disconnectedCallback()}};window.customElements.define("i-hook",re);function Ze(i,t){let e=ie.get(t);if(!e){e={};let r=t.prototype,s=[r];for(;(r=r&&Object.getPrototypeOf(r))&&r.constructor!=i.constructor;)s.unshift(r);for(let n=0,h=Oe(s),o=h.length;n<o;n++){let l=h[n],u=Object.getOwnPropertyDescriptors(l);Object.assign(e,u)}ie.set(t,e)}return e}function se(i,t,e,r,s){let n;typeof i!="string"&&i&&i.nodeName&&(i=i.nodeName);let h=ot[i]||i;if(nt[i]){let o=nt[i],l=o.prototype[B];if(l&&U)n=globalThis.document.createElement(l,{is:i});else if(o.create$&&l){n=globalThis.document.createElement(l),n.setAttribute("is",h);let u=Ze(n,o);Object.defineProperties(n,u),n.__slots={},n.appendChild(globalThis.document.createElement("i-hook"))}else o.create$?(n=o.create$(n),n.__slots={}):console.warn("could not create tag "+i)}else n=globalThis.document.createElement(ot[i]||i);return n[jt]=t,n[It](),n[Pt](),r!==null&&n[Ae]("__").text$(r),(e||n.flags$ns)&&n.flag$(e||""),n}function ne(i,t,e={}){Qe[i]=Je[i]=t,t.nodeName=i;let r=i,s=t.prototype;if(i.indexOf("-")==-1&&(r=""+i+"-tag",ot[i]=r),e.cssns){let n=(s._ns_||s[qt]||"")+" "+(e.cssns||"");s._ns_=n.trim()+" ",s[qt]=e.cssns}if(e.cssid){let n=(s.flags$ns||"")+" "+e.cssid;s[Be]=e.cssid,s.flags$ns=n.trim()+" "}return s[B]&&!e.extends&&(e.extends=s[B]),e.extends?(s[B]=e.extends,nt[i]=t,U&&window.customElements.define(r,t,{extends:e.extends})):window.customElements.define(r,t),t}var ti=globalThis.imba||(globalThis.imba={});ti.document=globalThis.document;var W=Symbol.for("#__init__"),ei=Symbol.for("#__patch__"),ii=Symbol.for("##inited"),ri=Symbol.for("#afterVisit"),si=Symbol.for("#beforeReconcile"),ni=Symbol.for("#afterReconcile"),oe=Symbol.for("#__hooks__"),N=Symbol.for("#autorender"),oi=new class{[ei](i={}){var t;(t=i.items)!==void 0&&(this.items=t),(t=i.current)!==void 0&&(this.current=t),(t=i.lastQueued)!==void 0&&(this.lastQueued=t),(t=i.tests)!==void 0&&(this.tests=t)}constructor(i=null){this[W](i)}[W](i=null,t=!0){var e;this.items=i&&(e=i.items)!==void 0?e:[],this.current=i&&(e=i.current)!==void 0?e:null,this.lastQueued=i&&(e=i.lastQueued)!==void 0?e:null,this.tests=i&&(e=i.tests)!==void 0?e:0}flush(){let i=null;for(;i=this.items.shift();){if(!i.parentNode||i.hydrated\u03A6)continue;let t=this.current;this.current=i,i.__F|=1024,i.connectedCallback(),this.current=t}}queue(i){var t=this;let e=this.items.length,r=0,s=this.lastQueued;this.lastQueued=i;let n=G.DOCUMENT_POSITION_PRECEDING,h=G.DOCUMENT_POSITION_FOLLOWING;if(e){let o=this.items.indexOf(s),l=o,u=function(pe,$e){return t.tests++,pe.compareDocumentPosition($e)};(o==-1||s.nodeName!=i.nodeName)&&(l=o=0);let b=t.items[l];for(;b&&u(b,i)&h;)b=t.items[++l];if(l!=o)b?t.items.splice(l,0,i):t.items.push(i);else{for(;b&&u(b,i)&n;)b=t.items[--l];l!=o&&(b?t.items.splice(l+1,0,i):t.items.unshift(i))}}else t.items.push(i),t.current||globalThis.queueMicrotask(t.flush.bind(t))}};var lt=class extends st{constructor(){super();this.flags$ns&&(this.flag$=this.flagExt$),this.setup$(),this.build()}setup$(){return this.__slots={},this.__F=0}[W](){return this.__F|=1|2,this}[ii](){if(this[oe])return this[oe].inited(this)}flag$(t){this.className=this.flags$ext=t}build(){return this}awaken(){return this}mount(){return this}unmount(){return this}rendered(){return this}dehydrate(){return this}hydrate(){return this.autoschedule=!0,this}tick(){return this.commit()}visit(){return this.commit()}commit(){return this.render\u03A6?(this.__F|=256,this.render&&this.render(),this.rendered(),this.__F=(this.__F|512)&~256&~8192):(this.__F|=8192,this)}get autoschedule(){return(this.__F&64)!=0}set autoschedule(t){t?this.__F|=64:this.__F&=~64}set autorender(t){let e=this[N]||(this[N]={});e.value=t,this.mounted\u03A6&&g.schedule(this,e)}get render\u03A6(){return!this.suspended\u03A6}get mounting\u03A6(){return(this.__F&16)!=0}get mounted\u03A6(){return(this.__F&32)!=0}get awakened\u03A6(){return(this.__F&8)!=0}get rendered\u03A6(){return(this.__F&512)!=0}get suspended\u03A6(){return(this.__F&4096)!=0}get rendering\u03A6(){return(this.__F&256)!=0}get scheduled\u03A6(){return(this.__F&128)!=0}get hydrated\u03A6(){return(this.__F&2)!=0}get ssr\u03A6(){return(this.__F&1024)!=0}schedule(){return g.on("commit",this),this.__F|=128,this}unschedule(){return g.un("commit",this),this.__F&=~128,this}async suspend(t=null){let e=this.flags.incr("_suspended_");return this.__F|=4096,t instanceof Function&&(await t(),this.unsuspend()),this}unsuspend(){return this.flags.decr("_suspended_")==0&&(this.__F&=~4096,this.commit()),this}[ri](){return this.visit()}[si](){return this.__F&1024&&(this.__F=this.__F&~1024,this.classList.remove("_ssr_"),this.flags$ext&&this.flags$ext.indexOf("_ssr_")==0&&(this.flags$ext=this.flags$ext.slice(5)),this.__F&512||(this.innerHTML="")),this}[ni](){return this}connectedCallback(){let t=this.__F,e=t&1,r=t&8;if(!e&&!(t&1024)){oi.queue(this);return}if(t&(16|32))return;this.__F|=16,e||this[W](),t&2||(this.flags$ext=this.className,this.__F|=2,this.hydrate(),this.commit()),r||(this.awaken(),this.__F|=8),Y(this,"mount");let s=this.mount();return s&&s.then instanceof Function&&s.then(g.commit),t=this.__F=(this.__F|32)&~16,t&64&&this.schedule(),this[N]&&g.schedule(this,this[N]),this}disconnectedCallback(){if(this.__F=this.__F&(~32&~16),this.__F&128&&this.unschedule(),Y(this,"unmount"),this.unmount(),this[N])return g.unschedule(this,this[N])}};var li=Symbol.for("#insertInto"),le=Symbol.for("#removeFrom");function ht(i,t){let e=t||globalThis.document.body,r=i;if(i instanceof Function){let s=new y(e,null),n=function(){let h=c.context;c.context=s;let o=i(s);return c.context==s&&(c.context=h),o};r=n(),g.listen("commit",n)}else r.__F|=64;return r[li](e),r}function hi(i){return i&&i[le]&&i[le](i.parentNode),i}var he=globalThis.imba||(globalThis.imba={});he.mount=ht;he.unmount=hi;var ue="/__assets__/logo-4MXEBDEU.svg"         ;var ce=yt({url:ue,type:"svg",meta:{attributes:{viewBox:"0 0 1164 400","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"},flags:[],content:`
  <path fill="none" d="M.658 0h1163v400H.658z"/>
  <g fill="#273240">
    <path d="M410.808 338.269c-3.618 0-6.551-2.932-6.551-6.55V159.88c0-3.618 2.933-6.55 6.551-6.55h41.928c3.618 0 6.55 2.932 6.551 6.55v171.839c-.001 3.618-2.933 6.55-6.551 6.55h-41.928z" fill-rule="nonzero"/>
    <ellipse cx="431.598" cy="87.156" rx="32.391" ry="31.346"/>
    <path d="M696.469 147.409c14.628 0 26.353 4.934 35.177 14.802 8.823 9.868 13.234 23.509 13.234 40.923v128.585c0 1.737-.69 3.403-1.918 4.632-1.229 1.228-2.895 1.918-4.632 1.918h-41.928c-1.738 0-3.404-.69-4.632-1.918-1.229-1.229-1.919-2.895-1.919-4.632V212.538c0-16.485-5.224-24.728-15.672-24.728-5.805 0-10.913 1.974-15.325 5.921-2.287 2.046-4.543 4.654-6.768 7.824-3.831 5.193-5.898 11.476-5.898 17.929-.221 22.92-.221 90.816-.221 112.235 0 1.737-.69 3.403-1.918 4.632-1.229 1.228-2.895 1.918-4.632 1.918h-41.928c-1.738 0-3.404-.69-4.632-1.918-1.229-1.229-1.919-2.895-1.919-4.632V212.538c0-16.485-5.224-24.728-15.672-24.728-5.573 0-10.623 2.032-15.151 6.095-2.67 2.396-5.279 5.458-7.828 9.187-3.292 4.656-5.06 10.219-5.06 15.921-.173 22.446-.173 91.138-.173 112.706 0 1.737-.69 3.403-1.918 4.632-1.229 1.228-2.895 1.918-4.632 1.918h-41.928c-3.618 0-6.551-2.932-6.551-6.55V159.88c0-3.618 2.933-6.55 6.551-6.55h36.022c3.176 0 5.895 2.278 6.45 5.406.448 2.526.99 5.582 1.482 8.355.25 1.4 1.273 2.537 2.638 2.934 1.366.397 2.839-.016 3.8-1.064 5.811-6.348 12.085-11.264 18.809-14.761 8.708-4.527 18.634-6.791 29.779-6.791 10.216 0 19.097 2.554 26.644 7.662 4.629 3.134 9.936 10.55 13.347 15.815.911 1.316 2.356 2.163 3.95 2.314 1.594.151 3.173-.41 4.315-1.532 5.347-5.413 14.008-13.767 19.834-16.945 8.939-4.876 19.213-7.314 30.823-7.314zM879.667 147.409c22.522 0 39.762 8.591 51.72 25.773 11.958 17.182 17.937 41.446 17.937 72.792 0 19.039-2.961 35.989-8.881 50.849-5.921 14.86-14.396 26.47-25.425 34.829-11.029 8.359-24.09 12.538-39.182 12.538-10.217 0-19.446-2.032-27.689-6.095-4.643-2.289-8.863-5.149-12.659-8.58-1.633-1.48-3.946-1.945-6.024-1.211s-3.587 2.549-3.928 4.726c-.075-.008-.076-.004-.076 0-.474 3.016-3.072 5.239-6.126 5.239h-36.906c-3.617 0-6.55-2.932-6.55-6.55V85.725c0-3.346 2.522-6.155 5.849-6.513 10.128-1.09 30.901-3.325 41.929-4.511 1.848-.199 3.694.397 5.078 1.639 1.383 1.243 2.173 3.014 2.173 4.874v79.057c.001 1.814 1.077 3.454 2.741 4.177 1.663.723 3.597.39 4.923-.847 3.916-3.649 8.454-6.77 13.581-9.401 8.824-4.527 17.995-6.791 27.515-6.791zm-19.504 156.728c21.361 0 32.042-19.388 32.042-58.163 0-21.826-2.554-36.977-7.662-45.452-5.108-8.475-12.422-12.712-21.942-12.712-7.693 0-14.643 2.71-20.849 8.128-6.84 6.025-10.759 14.699-10.759 23.814-.086 14.5-.086 40.738-.086 55.477.002 15.709 12.536 28.549 28.241 28.928.337-.024.675-.02 1.015-.02zM1120.33 284.633c0 6.966.987 12.074 2.96 15.325 1.242 2.045 2.966 3.768 5.172 5.17 2.416 1.577 3.481 4.575 2.6 7.323-.726 2.723-1.834 6.183-2.995 9.808-2.184 6.819-7.312 12.298-13.971 14.929-6.659 2.631-14.147 2.136-20.402-1.349-.002-.004-.005-.006-.008-.008-7.082-3.947-12.712-10.332-16.892-19.155-12.074 18.343-30.649 27.514-55.725 27.514-18.343 0-32.971-5.34-43.884-16.021-10.913-10.681-16.37-24.612-16.37-41.794 0-20.201 7.43-35.641 22.291-46.322 14.86-10.681 36.337-16.021 64.432-16.021h11.861c1.843 0 3.609-.732 4.912-2.035 1.303-1.303 2.035-3.069 2.035-4.912v-1.064c0-10.913-2.322-18.401-6.966-22.464-4.644-4.064-12.77-6.095-24.38-6.095-6.037 0-13.351.87-21.942 2.612-6.675 1.353-13.491 3.092-20.447 5.216-3.371 1.036-6.957-.784-8.11-4.117-2.316-6.679-6.021-17.383-8.341-24.086-1.182-3.411.619-7.135 4.026-8.327 9.659-3.329 19.512-5.954 29.563-7.868 12.19-2.322 23.51-3.483 33.958-3.483 26.47 0 45.858 5.456 58.164 16.369 12.306 10.913 18.459 27.283 18.459 49.108v71.747zm-83.24 20.201c6.037 0 11.551-1.509 16.543-4.528h.001c7.89-4.771 12.712-13.32 12.712-22.54v-15.98c0-4.117-3.337-7.453-7.453-7.453h-6.13c-12.539 0-21.884 2.205-28.037 6.617-6.153 4.412-9.23 11.261-9.23 20.549 0 7.43 1.916 13.177 5.747 17.24 3.831 4.063 9.113 6.095 15.847 6.095z" fill-rule="nonzero"/>
  </g>
  <path d="M360.039 167.628C323.834 99.341.596 29.568 35.591 74.7c34.995 45.132 190.036 107.062 199.223 108.212-47.568 14.937-174.53 41.73-147.353 64.299 27.177 22.569 156.265-2.637 156.052-2.236-35.746 26.937-80.254 108.258-35.536 90.883 70.555-27.413 173.158-128.44 152.062-168.23z" fill="#16cec7"/>
`},toString:function(){return this.url}});var ui=Symbol.for("#beforeReconcile"),ae=Symbol.for("#placeChild"),ci=Symbol.for("#afterReconcile"),ai=Symbol.for("##up"),fi=Symbol.for("#afterVisit"),fe=Symbol(),de=Symbol(),S,P=Dt(),me=Symbol(),Q,J,_e=class extends lt{render(){var t,e,r,s=this._ns_||"",n,h,o,l,u;return t=this,t[ui](),e=r=1,t[fe]===1||(e=r=0,t[fe]=1),e||(n=I("header",t,`${s}`,null)),e||(h=te("svg",n,`f-ah ${s}`,null)),e||h.set$("src",ce),(o=t[de])||(t[de]=o=I("p",n,`${s}`,null)),e||o[ae]("Edit "),e||(l=I("code",o,`${s}`,"  app/client.imba")),e||o[ae](" and sav e to reload"),e||(u=I("a",n,`${s}`,"Learn Imba")),e||(u.href="https://imba.io"),t[ci](r),t}};ne("app",_e,{});ht((Q=J=1,(S=P[me])||(Q=J=0,S=P[me]=S=se("app",null,null,null)),Q||(S[ai]=P._),Q||P.sym||!S.setup||S.setup(J),P.sym||S[fi](J),S));setTimeout(async function(){let i=await fetch("/latest");return console.log(i)},500);
//__FOOT__
//# sourceMappingURL=/__assets__/app/client-VG0W0MPP.js.map
                      