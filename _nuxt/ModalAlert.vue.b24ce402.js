import{K as rt,L as lt,M as st,F as Ve,N as it,R as ut,S as ct,O as dt,T as Re,P as pt,Q as vt,U as ft,V as mt,W as ht,X as wt,Y as gt,Z as kt,$ as bt,a0 as Me,a1 as yt,b as g,a2 as Et,c as $t,A as Bt,e as je,k as _,a3 as xt,a4 as _t,a5 as St,a6 as Ct,a7 as At,y as Dt,q as Le,f as R,a8 as Tt,d as Ft,a as E,a9 as Nt,aa as Vt,ab as Rt,ac as Mt,ad as jt,ae as Lt,af as Ot,ag as It,ah as Ht,ai as Pt,aj as zt,g as Ut,h as b,ak as qt,al as Wt,am as Gt,an as Kt,i as D,ao as Xt,ap as Yt,aq as Jt,ar as Qt,as as Zt,at as en,au as tn,av as nn,aw as an,ax as on,ay as rn,H as Oe,J as ln,n as sn,az as un,aA as cn,aB as dn,aC as pn,aD as vn,aE as fn,aF as mn,l as B,aG as hn,aH as wn,aI as gn,aJ as kn,m as P,aK as bn,o as Ie,x as yn,p as T,aL as En,v as $n,aM as Bn,aN as He,aO as xn,r as p,aP as _n,aQ as Sn,z as Cn,aR as An,I as Dn,aS as Tn,s as Fn,aT as Nn,aU as Vn,aV as Rn,aW as Mn,aX as jn,aY as Ln,aZ as On,a_ as In,a$ as Hn,b0 as Pn,b1 as zn,t as ee,b2 as Un,b3 as qn,E as Wn,b4 as Gn,b5 as Kn,b6 as Xn,b7 as Yn,u as V,b8 as Jn,b9 as Qn,ba as Zn,bb as ea,bc as ta,bd as na,be as aa,bf as oa,bg as ra,bh as la,D as sa,bi as ia,bj as ua,bk as ca,G as X,w as C,bl as da,bm as pa,bn as va,j as I,bo as fa,C as ma,bp as ha,bq as wa,B as ga,br as ka,bs as ba}from"./entry.215b4674.js";const ya=()=>{},Ea=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:rt,Comment:lt,EffectScope:st,Fragment:Ve,KeepAlive:it,ReactiveEffect:ut,Static:ct,Suspense:dt,Teleport:Re,Text:pt,Transition:vt,TransitionGroup:ft,VueElement:mt,assertNumber:ht,callWithAsyncErrorHandling:wt,callWithErrorHandling:gt,camelize:kt,capitalize:bt,cloneVNode:Me,compatUtils:yt,compile:ya,computed:g,createApp:Et,createBlock:$t,createCommentVNode:Bt,createElementBlock:je,createElementVNode:_,createHydrationRenderer:xt,createPropsRestProxy:_t,createRenderer:St,createSSRApp:Ct,createSlots:At,createStaticVNode:Dt,createTextVNode:Le,createVNode:R,customRef:Tt,defineAsyncComponent:Ft,defineComponent:E,defineCustomElement:Nt,defineEmits:Vt,defineExpose:Rt,defineProps:Mt,defineSSRCustomElement:jt,get devtools(){return Lt},effect:Ot,effectScope:It,getCurrentInstance:Ht,getCurrentScope:Pt,getTransitionRawChildren:zt,guardReactiveProps:Ut,h:b,handleError:qt,hydrate:Wt,initCustomFormatter:Gt,initDirectivesForSSR:Kt,inject:D,isMemoSame:Xt,isProxy:Yt,isReactive:Jt,isReadonly:Qt,isRef:Zt,isRuntimeOnly:en,isShallow:tn,isVNode:nn,markRaw:an,mergeDefaults:on,mergeProps:rn,nextTick:Oe,normalizeClass:ln,normalizeProps:sn,normalizeStyle:un,onActivated:cn,onBeforeMount:dn,onBeforeUnmount:pn,onBeforeUpdate:vn,onDeactivated:fn,onErrorCaptured:mn,onMounted:B,onRenderTracked:hn,onRenderTriggered:wn,onScopeDispose:gn,onServerPrefetch:kn,onUnmounted:P,onUpdated:bn,openBlock:Ie,popScopeId:yn,provide:T,proxyRefs:En,pushScopeId:$n,queuePostFlushCb:Bn,reactive:He,readonly:xn,ref:p,registerRuntimeCompiler:_n,render:Sn,renderList:Cn,renderSlot:An,resolveComponent:Dn,resolveDirective:Tn,resolveDynamicComponent:Fn,resolveFilter:Nn,resolveTransitionHooks:Vn,setBlockTracking:Rn,setDevtoolsHook:Mn,setTransitionHooks:jn,shallowReactive:Ln,shallowReadonly:On,shallowRef:In,ssrContextKey:Hn,ssrUtils:Pn,stop:zn,toDisplayString:ee,toHandlerKey:Un,toHandlers:qn,toRaw:Wn,toRef:Gn,toRefs:Kn,transformVNodeArgs:Xn,triggerRef:Yn,unref:V,useAttrs:Jn,useCssModule:Qn,useCssVars:Zn,useSSRContext:ea,useSlots:ta,useTransitionState:na,vModelCheckbox:aa,vModelDynamic:oa,vModelRadio:ra,vModelSelect:la,vModelText:sa,vShow:ia,version:ua,warn:ca,watch:X,watchEffect:C,watchPostEffect:da,watchSyncEffect:pa,withAsyncContext:va,withCtx:I,withDefaults:fa,withDirectives:ma,withKeys:ha,withMemo:wa,withModifiers:ga,withScopeId:ka},Symbol.toStringTag,{value:"Module"}));function A(e,t,...n){if(e in t){let r=t[e];return typeof r=="function"?r(...n):r}let a=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,A),a}var te=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(te||{}),j=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(j||{});function x({visible:e=!0,features:t=0,...n}){var a;if(e||t&2&&n.props.static)return ce(n);if(t&1){let r=(a=n.props.unmount)==null||a?0:1;return A(r,{[0](){return null},[1](){return ce({...n,props:{...n.props,hidden:!0,style:{display:"none"}}})}})}return ce(n)}function ce({props:e,attrs:t,slots:n,slot:a,name:r}){var o;let{as:l,...u}=Pe(e,["unmount","static"]),s=(o=n.default)==null?void 0:o.call(n,a),i={};if(l==="template"){if(Object.keys(u).length>0||Object.keys(t).length>0){let[c,...d]=s??[];if(!$a(c)||d.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${r} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(u).concat(Object.keys(t)).map(m=>`  - ${m}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(m=>`  - ${m}`).join(`
`)].join(`
`));return Me(c,Object.assign({},u,i))}return Array.isArray(s)&&s.length===1?s[0]:s}return b(l,Object.assign({},u,i),s)}function Ar(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function Pe(e,t=[]){let n=Object.assign({},e);for(let a of t)a in n&&delete n[a];return n}function $a(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Ba=0;function xa(){return++Ba}function z(){return xa()}var ze=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(ze||{});function S(e){return e==null||e.value==null?null:"$el"in e.value?e.value.$el:e.value}let Ue=Symbol("Context");var H=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(H||{});function _a(){return Ee()!==null}function Ee(){return D(Ue,null)}function Sa(e){T(Ue,e)}function Ae(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function Dr(e,t){let n=p(Ae(e.value.type,e.value.as));return B(()=>{n.value=Ae(e.value.type,e.value.as)}),C(()=>{var a;n.value||!S(t)||S(t)instanceof HTMLButtonElement&&!((a=S(t))!=null&&a.hasAttribute("type"))&&(n.value="button")}),n}function W(e){if(typeof window>"u")return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=S(e);if(t)return t.ownerDocument}return document}let pe=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var ne=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(ne||{}),qe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(qe||{}),Ca=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Ca||{});function Aa(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(pe))}var Da=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Da||{});function Tr(e,t=0){var n;return e===((n=W(e))==null?void 0:n.body)?!1:A(t,{[0](){return e.matches(pe)},[1](){let a=e;for(;a!==null;){if(a.matches(pe))return!0;a=a.parentElement}return!1}})}function K(e){e==null||e.focus({preventScroll:!0})}let Ta=["textarea","input"].join(",");function Fa(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Ta))!=null?n:!1}function Na(e,t=n=>n){return e.slice().sort((n,a)=>{let r=t(n),o=t(a);if(r===null||o===null)return 0;let l=r.compareDocumentPosition(o);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function ve(e,t,n=!0){var a;let r=(a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?a:document,o=Array.isArray(e)?n?Na(e):e:Aa(e),l=r.activeElement,u=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(l))-1;if(t&4)return Math.max(0,o.indexOf(l))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),i=t&32?{preventScroll:!0}:{},c=0,d=o.length,m;do{if(c>=d||c+d<=0)return 0;let v=s+c;if(t&16)v=(v+d)%d;else{if(v<0)return 3;if(v>=d)return 1}m=o[v],m==null||m.focus(i),c+=u}while(m!==r.activeElement);return m.hasAttribute("tabindex")||m.setAttribute("tabindex","0"),t&6&&Fa(m)&&m.select(),2}function fe(e,t,n){typeof window<"u"&&C(a=>{window.addEventListener(e,t,n),a(()=>window.removeEventListener(e,t,n))})}function Va(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}var We=(e=>(e[e.None=1]="None",e[e.IgnoreScrollbars=2]="IgnoreScrollbars",e))(We||{});function Ra(e,t,n=1){let a=!1;function r(o){if(a)return;a=!0,Va(()=>{a=!1});let l=o.target;if(!l.ownerDocument.documentElement.contains(l))return;let u=function s(i){return typeof i=="function"?s(i()):Array.isArray(i)||i instanceof Set?i:[i]}(e);if((n&2)===2){let s=20,i=l.ownerDocument.documentElement;if(o.clientX>i.clientWidth-s||o.clientX<s||o.clientY>i.clientHeight-s||o.clientY<s)return}for(let s of u){if(s===null)continue;let i=s instanceof HTMLElement?s:S(s);if(i!=null&&i.contains(l))return}t(o,l)}fe("pointerdown",r),fe("mousedown",r)}var ae=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(ae||{});let me=E({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{let{features:a,...r}=e,o={"aria-hidden":(a&2)===2?!0:void 0,style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(a&4)===4&&(a&2)!==2&&{display:"none"}}};return x({props:{...r,...o},slot:{},attrs:n,slots:t,name:"Hidden"})}}});var he=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(he||{});function Ma(){let e=p(0);return fe("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Ge(e,t,n,a){typeof window<"u"&&C(r=>{e=e??window,e.addEventListener(t,n,a),r(()=>e.removeEventListener(t,n,a))})}var Ke=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ke||{});let G=Object.assign(E({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:Object,default:p(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:a}){let r=p(null);a({el:r,$el:r});let o=g(()=>W(r));ja({ownerDocument:o},g(()=>!!(e.features&16)));let l=La({ownerDocument:o,container:r,initialFocus:g(()=>e.initialFocus)},g(()=>!!(e.features&2)));Oa({ownerDocument:o,container:r,containers:e.containers,previousActiveElement:l},g(()=>!!(e.features&8)));let u=Ma();function s(){let i=S(r);!i||A(u.value,{[he.Forwards]:()=>ve(i,ne.First),[he.Backwards]:()=>ve(i,ne.Last)})}return()=>{let i={},c={"data-hi":"container",ref:r},{features:d,initialFocus:m,containers:v,...F}=e;return b(Ve,[!!(d&4)&&b(me,{as:"button",type:"button",onFocus:s,features:ae.Focusable}),x({props:{...t,...F,...c},slot:i,attrs:t,slots:n,name:"FocusTrap"}),!!(d&4)&&b(me,{as:"button",type:"button",onFocus:s,features:ae.Focusable})])}}}),{features:Ke});function ja({ownerDocument:e},t){let n=p(null),a={value:!1};B(()=>{X(t,(r,o)=>{var l;r!==o&&(!t.value||(a.value=!0,n.value||(n.value=(l=e.value)==null?void 0:l.activeElement)))},{immediate:!0}),X(t,(r,o,l)=>{r!==o&&(!t.value||l(()=>{a.value!==!1&&(a.value=!1,K(n.value),n.value=null)}))},{immediate:!0})})}function La({ownerDocument:e,container:t,initialFocus:n},a){let r=p(null);return B(()=>{X([t,n,a],(o,l)=>{var u,s;if(o.every((m,v)=>(l==null?void 0:l[v])===m)||!a.value)return;let i=S(t);if(!i)return;let c=S(n),d=(u=e.value)==null?void 0:u.activeElement;if(c){if(c===d){r.value=d;return}}else if(i.contains(d)){r.value=d;return}c?K(c):ve(i,ne.First)===qe.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),r.value=(s=e.value)==null?void 0:s.activeElement},{immediate:!0,flush:"post"})}),r}function Oa({ownerDocument:e,container:t,containers:n,previousActiveElement:a},r){var o;Ge((o=e.value)==null?void 0:o.defaultView,"focus",l=>{if(!r.value)return;let u=new Set(n==null?void 0:n.value);u.add(t);let s=a.value;if(!s)return;let i=l.target;i&&i instanceof HTMLElement?Ia(u,i)?(a.value=i,K(i)):(l.preventDefault(),l.stopPropagation(),K(s)):K(a.value)},!0)}function Ia(e,t){var n;for(let a of e)if((n=a.value)!=null&&n.contains(t))return!0;return!1}let De="body > *",q=new Set,M=new Map;function Te(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function Fe(e){let t=M.get(e);!t||(t["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}function Ha(e,t=p(!0)){C(n=>{if(!t.value||!e.value)return;let a=e.value,r=W(a);if(r){q.add(a);for(let o of M.keys())o.contains(a)&&(Fe(o),M.delete(o));r.querySelectorAll(De).forEach(o=>{if(o instanceof HTMLElement){for(let l of q)if(o.contains(l))return;q.size===1&&(M.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),Te(o))}}),n(()=>{if(q.delete(a),q.size>0)r.querySelectorAll(De).forEach(o=>{if(o instanceof HTMLElement&&!M.has(o)){for(let l of q)if(o.contains(l))return;M.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),Te(o)}});else for(let o of M.keys())Fe(o),M.delete(o)})}})}let Xe=Symbol("ForcePortalRootContext");function Pa(){return D(Xe,!1)}let we=E({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return T(Xe,e.force),()=>{let{force:a,...r}=e;return x({props:r,slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}});function za(e){let t=W(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let a=t.createElement("div");return a.setAttribute("id","headlessui-portal-root"),t.body.appendChild(a)}let Ye=E({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let a=p(null),r=g(()=>W(a)),o=Pa(),l=D(Je,null),u=p(o===!0||l==null?za(a.value):l.resolveTarget());return C(()=>{o||l!=null&&(u.value=l.resolveTarget())}),P(()=>{var s,i;let c=(s=r.value)==null?void 0:s.getElementById("headlessui-portal-root");!c||u.value===c&&u.value.children.length<=0&&((i=u.value.parentElement)==null||i.removeChild(u.value))}),()=>{if(u.value===null)return null;let s={ref:a};return b(Re,{to:u.value},x({props:{...e,...s},slot:{},attrs:n,slots:t,name:"Portal"}))}}}),Je=Symbol("PortalGroupContext"),Ua=E({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let a=He({resolveTarget(){return e.target}});return T(Je,a),()=>{let{target:r,...o}=e;return x({props:o,slot:{},attrs:t,slots:n,name:"PortalGroup"})}}}),Qe=Symbol("StackContext");var ge=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ge||{});function qa(){return D(Qe,()=>{})}function Wa({type:e,element:t,onUpdate:n}){let a=qa();function r(...o){n==null||n(...o),a(...o)}B(()=>{r(0,e,t),P(()=>{r(1,e,t)})}),T(Qe,r)}let Ze=Symbol("DescriptionContext");function Ga(){let e=D(Ze,null);if(e===null)throw new Error("Missing parent");return e}function Ka({slot:e=p({}),name:t="Description",props:n={}}={}){let a=p([]);function r(o){return a.value.push(o),()=>{let l=a.value.indexOf(o);l!==-1&&a.value.splice(l,1)}}return T(Ze,{register:r,slot:e,name:t,props:n}),g(()=>a.value.length>0?a.value.join(" "):void 0)}E({name:"Description",props:{as:{type:[Object,String],default:"p"}},setup(e,{attrs:t,slots:n}){let a=Ga(),r=`headlessui-description-${z()}`;return B(()=>P(a.register(r))),()=>{let{name:o="Description",slot:l=p({}),props:u={}}=a,s=e,i={...Object.entries(u).reduce((c,[d,m])=>Object.assign(c,{[d]:V(m)}),{}),id:r};return x({props:{...s,...i},slot:l.value,attrs:t,slots:n,name:o})}}});var Xa=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Xa||{});let ke=Symbol("DialogContext");function Y(e){let t=D(ke,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Y),n}return t}let Q="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Ya=E({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:Q},initialFocus:{type:Object,default:null}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:a,expose:r}){var o;let l=p(0),u=Ee(),s=g(()=>e.open===Q&&u!==null?A(u.value,{[H.Open]:!0,[H.Closed]:!1}):e.open),i=p(new Set),c=p(null),d=p(null),m=g(()=>W(c));if(r({el:c,$el:c}),!(e.open!==Q||u!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof s.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s.value===Q?void 0:e.open}`);let v=g(()=>s.value?0:1),F=g(()=>v.value===0),L=g(()=>l.value>1),re=D(ke,null)!==null,le=g(()=>L.value?"parent":"leaf");Ha(c,g(()=>L.value?F.value:!1)),Wa({type:"Dialog",element:c,onUpdate:(h,w,k)=>{if(w==="Dialog")return A(h,{[ge.Add](){i.value.add(k),l.value+=1},[ge.Remove](){i.value.delete(k),l.value-=1}})}});let se=Ka({name:"DialogDescription",slot:g(()=>({open:s.value}))}),J=`headlessui-dialog-${z()}`,U=p(null),N={titleId:U,panelRef:p(null),dialogState:v,setTitleId(h){U.value!==h&&(U.value=h)},close(){t("close",!1)}};T(ke,N),Ra(()=>{var h,w,k;return[...Array.from((w=(h=m.value)==null?void 0:h.querySelectorAll("body > *"))!=null?w:[]).filter(f=>!(!(f instanceof HTMLElement)||f.contains(S(d))||N.panelRef.value&&f.contains(N.panelRef.value))),(k=N.panelRef.value)!=null?k:c.value]},(h,w)=>{v.value===0&&(L.value||(N.close(),Oe(()=>w==null?void 0:w.focus())))},We.IgnoreScrollbars),Ge((o=m.value)==null?void 0:o.defaultView,"keydown",h=>{h.defaultPrevented||h.key===ze.Escape&&v.value===0&&(L.value||(h.preventDefault(),h.stopPropagation(),N.close()))}),C(h=>{var w;if(v.value!==0||re)return;let k=m.value;if(!k)return;let f=k==null?void 0:k.documentElement,$=(w=k.defaultView)!=null?w:window,xe=f.style.overflow,_e=f.style.paddingRight,ue=$.innerWidth-f.clientWidth;if(f.style.overflow="hidden",ue>0){let Se=f.clientWidth-f.offsetWidth,Ce=ue-Se;f.style.paddingRight=`${Ce}px`}h(()=>{f.style.overflow=xe,f.style.paddingRight=_e})}),C(h=>{if(v.value!==0)return;let w=S(c);if(!w)return;let k=new IntersectionObserver(f=>{for(let $ of f)$.boundingClientRect.x===0&&$.boundingClientRect.y===0&&$.boundingClientRect.width===0&&$.boundingClientRect.height===0&&N.close()});k.observe(w),h(()=>k.disconnect())});function ie(h){h.stopPropagation()}return()=>{let h={...n,ref:c,id:J,role:"dialog","aria-modal":v.value===0?!0:void 0,"aria-labelledby":U.value,"aria-describedby":se.value,onClick:ie},{open:w,initialFocus:k,...f}=e,$={open:v.value===0};return b(we,{force:!0},()=>[b(Ye,()=>b(Ua,{target:c.value},()=>b(we,{force:!1},()=>b(G,{initialFocus:k,containers:i,features:F.value?A(le.value,{parent:G.features.RestoreFocus,leaf:G.features.All&~G.features.FocusLock}):G.features.None},()=>x({props:{...f,...h},slot:$,attrs:n,slots:a,visible:v.value===0,features:te.RenderStrategy|te.Static,name:"Dialog"}))))),b(me,{features:ae.Hidden,ref:d})])}}});E({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:n}){let a=Y("DialogOverlay"),r=`headlessui-dialog-overlay-${z()}`;function o(l){l.target===l.currentTarget&&(l.preventDefault(),l.stopPropagation(),a.close())}return()=>x({props:{...e,id:r,"aria-hidden":!0,onClick:o},slot:{open:a.dialogState.value===0},attrs:t,slots:n,name:"DialogOverlay"})}});E({name:"DialogBackdrop",props:{as:{type:[Object,String],default:"div"}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:a}){let r=Y("DialogBackdrop"),o=`headlessui-dialog-backdrop-${z()}`,l=p(null);return a({el:l,$el:l}),B(()=>{if(r.panelRef.value===null)throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.")}),()=>{let u=e,s={id:o,ref:l,"aria-hidden":!0};return b(we,{force:!0},()=>b(Ye,()=>x({props:{...t,...u,...s},slot:{open:r.dialogState.value===0},attrs:t,slots:n,name:"DialogBackdrop"})))}}});let Ja=E({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:n,expose:a}){let r=Y("DialogPanel"),o=`headlessui-dialog-panel-${z()}`;return a({el:r.panelRef,$el:r.panelRef}),()=>{let l={id:o,ref:r.panelRef};return x({props:{...e,...l},slot:{open:r.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}}),Qa=E({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"}},setup(e,{attrs:t,slots:n}){let a=Y("DialogTitle"),r=`headlessui-dialog-title-${z()}`;return B(()=>{a.setTitleId(r),P(()=>a.setTitleId(null))}),()=>x({props:{...e,id:r},slot:{open:a.dialogState.value===0},attrs:t,slots:n,name:"DialogTitle"})}});function Za(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function et(){let e=[],t=[],n={enqueue(a){t.push(a)},requestAnimationFrame(...a){let r=requestAnimationFrame(...a);n.add(()=>cancelAnimationFrame(r))},nextFrame(...a){n.requestAnimationFrame(()=>{n.requestAnimationFrame(...a)})},setTimeout(...a){let r=setTimeout(...a);n.add(()=>clearTimeout(r))},add(a){e.push(a)},dispose(){for(let a of e.splice(0))a()},async workQueue(){for(let a of t.splice(0))await a()}};return n}function de(e,...t){e&&t.length>0&&e.classList.add(...t)}function Z(e,...t){e&&t.length>0&&e.classList.remove(...t)}var be=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(be||{});function eo(e,t){let n=et();if(!e)return n.dispose;let{transitionDuration:a,transitionDelay:r}=getComputedStyle(e),[o,l]=[a,r].map(u=>{let[s=0]=u.split(",").filter(Boolean).map(i=>i.includes("ms")?parseFloat(i):parseFloat(i)*1e3).sort((i,c)=>c-i);return s});return o!==0?n.setTimeout(()=>t("finished"),o+l):t("finished"),n.add(()=>t("cancelled")),n.dispose}function Ne(e,t,n,a,r,o){let l=et(),u=o!==void 0?Za(o):()=>{};return Z(e,...r),de(e,...t,...n),l.nextFrame(()=>{Z(e,...n),de(e,...a),l.add(eo(e,s=>(Z(e,...a,...t),de(e,...r),u(s))))}),l.add(()=>Z(e,...t,...n,...a,...r)),l.add(()=>u("cancelled")),l.dispose}function O(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let $e=Symbol("TransitionContext");var to=(e=>(e.Visible="visible",e.Hidden="hidden",e))(to||{});function no(){return D($e,null)!==null}function ao(){let e=D($e,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function oo(){let e=D(Be,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Be=Symbol("NestingContext");function oe(e){return"children"in e?oe(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function tt(e){let t=p([]),n=p(!1);B(()=>n.value=!0),P(()=>n.value=!1);function a(o,l=j.Hidden){let u=t.value.findIndex(({id:s})=>s===o);u!==-1&&(A(l,{[j.Unmount](){t.value.splice(u,1)},[j.Hidden](){t.value[u].state="hidden"}}),!oe(t)&&n.value&&(e==null||e()))}function r(o){let l=t.value.find(({id:u})=>u===o);return l?l.state!=="visible"&&(l.state="visible"):t.value.push({id:o,state:"visible"}),()=>a(o,j.Unmount)}return{children:t,register:r,unregister:a}}let nt=te.RenderStrategy,ye=E({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:a,expose:r}){if(!no()&&_a())return()=>b(at,{...e,onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave")},a);let o=p(null),l=p("visible"),u=g(()=>e.unmount?j.Unmount:j.Hidden);r({el:o,$el:o});let{show:s,appear:i}=ao(),{register:c,unregister:d}=oo(),m={value:!0},v=z(),F={value:!1},L=tt(()=>{F.value||(l.value="hidden",d(v),t("afterLeave"))});B(()=>{let w=c(v);P(w)}),C(()=>{if(u.value===j.Hidden&&v){if(s&&l.value!=="visible"){l.value="visible";return}A(l.value,{hidden:()=>d(v),visible:()=>c(v)})}});let re=O(e.enter),le=O(e.enterFrom),se=O(e.enterTo),J=O(e.entered),U=O(e.leave),N=O(e.leaveFrom),ie=O(e.leaveTo);B(()=>{C(()=>{if(l.value==="visible"){let w=S(o);if(w instanceof Comment&&w.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function h(w){let k=m.value&&!i.value,f=S(o);!f||!(f instanceof HTMLElement)||k||(F.value=!0,s.value&&t("beforeEnter"),s.value||t("beforeLeave"),w(s.value?Ne(f,re,le,se,J,$=>{F.value=!1,$===be.Finished&&t("afterEnter")}):Ne(f,U,N,ie,J,$=>{F.value=!1,$===be.Finished&&(oe(L)||(l.value="hidden",d(v),t("afterLeave")))})))}return B(()=>{X([s],(w,k,f)=>{h(f),m.value=!1},{immediate:!0})}),T(Be,L),Sa(g(()=>A(l.value,{visible:H.Open,hidden:H.Closed}))),()=>{let{appear:w,show:k,enter:f,enterFrom:$,enterTo:xe,entered:_e,leave:ue,leaveFrom:Se,leaveTo:Ce,...ot}=e;return x({props:{...ot,ref:o},slot:{},slots:a,attrs:n,features:nt,visible:l.value==="visible",name:"TransitionChild"})}}}),ro=ye,at=E({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:a}){let r=Ee(),o=g(()=>e.show===null&&r!==null?A(r.value,{[H.Open]:!0,[H.Closed]:!1}):e.show);C(()=>{if(![!0,!1].includes(o.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let l=p(o.value?"visible":"hidden"),u=tt(()=>{l.value="hidden"}),s=p(!0),i={show:o,appear:g(()=>e.appear||!s.value)};return B(()=>{C(()=>{s.value=!1,o.value?l.value="visible":oe(u)||(l.value="hidden")})}),T(Be,u),T($e,i),()=>{let c=Pe(e,["show","appear","unmount"]),d={unmount:e.unmount};return x({props:{...d,as:"template"},slot:{},slots:{...a,default:()=>[b(ro,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...d,...c},a.default)]},attrs:{},features:nt,visible:l.value==="visible",name:"Transition"})}}});const Fr=""+new URL("isologotipo.8e0550da.svg",import.meta.url).href,y=ba(Ea),{createElementVNode:lo,openBlock:so,createElementBlock:io}=y;var uo=function(t,n){return so(),io("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[lo("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})])};const{createElementVNode:co,openBlock:po,createElementBlock:vo}=y;var fo=function(t,n){return po(),vo("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[co("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"})])};const{createElementVNode:mo,openBlock:ho,createElementBlock:wo}=y;var go=function(t,n){return ho(),wo("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[mo("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"})])};const{createElementVNode:ko,openBlock:bo,createElementBlock:yo}=y;var Eo=function(t,n){return bo(),yo("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[ko("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])};const{createElementVNode:$o,openBlock:Bo,createElementBlock:xo}=y;var _o=function(t,n){return Bo(),xo("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[$o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"})])};const{createElementVNode:So,openBlock:Co,createElementBlock:Ao}=y;var Do=function(t,n){return Co(),Ao("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[So("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"})])};const{createElementVNode:To,openBlock:Fo,createElementBlock:No}=y;var Vo=function(t,n){return Fo(),No("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[To("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})])};const{createElementVNode:Ro,openBlock:Mo,createElementBlock:jo}=y;var Lo=function(t,n){return Mo(),jo("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[Ro("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})])};const{createElementVNode:Oo,openBlock:Io,createElementBlock:Ho}=y;var Po=function(t,n){return Io(),Ho("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[Oo("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"})])};const{createElementVNode:zo,openBlock:Uo,createElementBlock:qo}=y;var Wo=function(t,n){return Uo(),qo("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[zo("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})])};const{createElementVNode:Go,openBlock:Ko,createElementBlock:Xo}=y;var Yo=function(t,n){return Ko(),Xo("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[Go("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"})])};const{createElementVNode:Jo,openBlock:Qo,createElementBlock:Zo}=y;var er=function(t,n){return Qo(),Zo("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[Jo("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"})])};const{createElementVNode:tr,openBlock:nr,createElementBlock:ar}=y;var or=function(t,n){return nr(),ar("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[tr("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"})])};const{createElementVNode:rr,openBlock:lr,createElementBlock:sr}=y;var ir=function(t,n){return lr(),sr("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[rr("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"})])};const{createElementVNode:ur,openBlock:cr,createElementBlock:dr}=y;var pr=function(t,n){return cr(),dr("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[ur("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})])};const{createElementVNode:vr,openBlock:fr,createElementBlock:mr}=y;var hr=function(t,n){return fr(),mr("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[vr("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])},Nr=uo,Vr=fo,Rr=go,Mr=Eo,jr=_o,Lr=Do,wr=Vo,Or=Lo,Ir=Po,Hr=Wo,Pr=Yo,zr=er,Ur=or,qr=ir,Wr=pr,Gr=hr;const gr=_("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),kr={class:"fixed inset-0 z-10 overflow-y-auto"},br={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},yr={class:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"},Er={class:"sm:flex sm:items-start"},$r={class:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"},Br={class:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"},xr={class:"mt-2"},_r={class:"text-sm text-gray-500"},Sr={class:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"},Kr=E({__name:"ModalAlert",props:{title:{type:String,required:!0},message:{type:String},showModal:{type:Boolean,required:!0}},emits:["close"],setup(e,{emit:t}){const n=e,a=()=>{t("close",!0)};return(r,o)=>(Ie(),je("div",null,[R(V(at),{appear:"",as:"template",show:n.showModal},{default:I(()=>[R(V(Ya),{as:"div",class:"relative z-30",onClose:a},{default:I(()=>[R(V(ye),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:I(()=>[gr]),_:1}),_("div",kr,[_("div",br,[R(V(ye),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:I(()=>[R(V(Ja),{class:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},{default:I(()=>[_("div",yr,[_("div",Er,[_("div",$r,[R(V(wr),{class:"h-6 w-6 text-green-500","aria-hidden":"true"})]),_("div",Br,[R(V(Qa),{as:"h3",class:"text-base font-semibold leading-6 text-gray-900"},{default:I(()=>[Le(ee(n.title),1)]),_:1}),_("div",xr,[_("p",_r,ee(n.message),1)])])])]),_("div",Sr,[_("button",{type:"button",class:"inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-400 sm:ml-3 sm:w-auto",onClick:a},ee(r.$t("modal.thanks")),1)])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])]))}});export{Vr as A,Mr as B,Lr as C,Ir as D,Or as E,Tr as F,zr as G,Ya as H,Kr as I,Pe as J,Na as K,ne as L,Da as M,Nr as N,ve as P,qr as R,Ar as S,Wr as U,Ja as W,Gr as X,Fr as _,S as a,Dr as b,Sa as c,ae as d,W as e,he as f,Aa as g,te as h,ye as i,at as j,x as k,H as l,me as m,Ma as n,ze as o,Ee as p,Hr as q,Ge as r,jr as s,z as t,A as u,Pr as v,Ra as w,Rr as x,Ur as y,y as z};
