import{r as a,Q as Y,n as A,_ as te,w as T,j as $,l as be,a1 as ne,p as oe,t as ge,Y as Oe,k as Ie,O as ce,P as Ue,y as ze}from"./index-C9jNz6KY.js";const Ke=typeof window<"u"?a.useLayoutEffect:a.useEffect;function H(e){const t=a.useRef(e);return Ke(()=>{t.current=e}),a.useRef((...s)=>(0,t.current)(...s)).current}function Z(e,t){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(l,n){return l.__proto__=n,l},Z(e,t)}function Ye(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Z(e,t)}const pe=Y.createContext(null);function Ae(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ie(e,t){var s=function(o){return t&&a.isValidElement(o)?t(o):o},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=s(n)}),l}function Xe(e,t){e=e||{},t=t||{};function s(d){return d in t?t[d]:e[d]}var l=Object.create(null),n=[];for(var o in e)o in t?n.length&&(l[o]=n,n=[]):n.push(o);var i,c={};for(var u in t){if(l[u])for(i=0;i<l[u].length;i++){var p=l[u][i];c[l[u][i]]=s(p)}c[u]=s(u)}for(i=0;i<n.length;i++)c[n[i]]=s(n[i]);return c}function _(e,t,s){return s[t]!=null?s[t]:e.props[t]}function We(e,t){return ie(e.children,function(s){return a.cloneElement(s,{onExited:t.bind(null,s),in:!0,appear:_(s,"appear",e),enter:_(s,"enter",e),exit:_(s,"exit",e)})})}function He(e,t,s){var l=ie(e.children),n=Xe(t,l);return Object.keys(n).forEach(function(o){var i=n[o];if(a.isValidElement(i)){var c=o in t,u=o in l,p=t[o],d=a.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[o]=a.cloneElement(i,{onExited:s.bind(null,i),in:!0,exit:_(i,"exit",e),enter:_(i,"enter",e)}):!u&&c&&!d?n[o]=a.cloneElement(i,{in:!1}):u&&c&&a.isValidElement(p)&&(n[o]=a.cloneElement(i,{onExited:s.bind(null,i),in:p.props.in,exit:_(i,"exit",e),enter:_(i,"enter",e)}))}}),n}var Ge=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},qe={component:"div",childFactory:function(t){return t}},re=function(e){Ye(t,e);function t(l,n){var o;o=e.call(this,l,n)||this;var i=o.handleExited.bind(Ae(o));return o.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},o}var s=t.prototype;return s.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},s.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(n,o){var i=o.children,c=o.handleExited,u=o.firstRender;return{children:u?We(n,c):He(n,i,c),firstRender:!1}},s.handleExited=function(n,o){var i=ie(this.props.children);n.key in i||(n.props.onExited&&n.props.onExited(o),this.mounted&&this.setState(function(c){var u=A({},c.children);return delete u[n.key],{children:u}}))},s.render=function(){var n=this.props,o=n.component,i=n.childFactory,c=te(n,["component","childFactory"]),u=this.state.contextValue,p=Ge(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,o===null?Y.createElement(pe.Provider,{value:u},p):Y.createElement(pe.Provider,{value:u},Y.createElement(o,c,p))},t}(Y.Component);re.propTypes={};re.defaultProps=qe;const Qe=re;function Je(e){const{className:t,classes:s,pulsate:l=!1,rippleX:n,rippleY:o,rippleSize:i,in:c,onExited:u,timeout:p}=e,[d,g]=a.useState(!1),b=T(t,s.ripple,s.rippleVisible,l&&s.ripplePulsate),C={width:i,height:i,top:-(i/2)+o,left:-(i/2)+n},h=T(s.child,d&&s.childLeaving,l&&s.childPulsate);return!c&&!d&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),$.jsx("span",{className:b,style:C,children:$.jsx("span",{className:h})})}const m=be("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Ze=["center","classes","className"];let G=e=>e,fe,de,he,me;const ee=550,et=80,tt=ne(fe||(fe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),nt=ne(de||(de=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),ot=ne(he||(he=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),it=oe("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),rt=oe(Je,{name:"MuiTouchRipple",slot:"Ripple"})(me||(me=G`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,tt,ee,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,nt,ee,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,ot,({theme:e})=>e.transitions.easing.easeInOut),st=a.forwardRef(function(t,s){const l=ge({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:o={},className:i}=l,c=te(l,Ze),[u,p]=a.useState([]),d=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),C=Oe(),h=a.useRef(null),R=a.useRef(null),O=a.useCallback(f=>{const{pulsate:y,rippleX:M,rippleY:L,rippleSize:N,cb:U}=f;p(x=>[...x,$.jsx(rt,{classes:{ripple:T(o.ripple,m.ripple),rippleVisible:T(o.rippleVisible,m.rippleVisible),ripplePulsate:T(o.ripplePulsate,m.ripplePulsate),child:T(o.child,m.child),childLeaving:T(o.childLeaving,m.childLeaving),childPulsate:T(o.childPulsate,m.childPulsate)},timeout:ee,pulsate:y,rippleX:M,rippleY:L,rippleSize:N},d.current)]),d.current+=1,g.current=U},[o]),j=a.useCallback((f={},y={},M=()=>{})=>{const{pulsate:L=!1,center:N=n||y.pulsate,fakeElement:U=!1}=y;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const x=U?null:R.current,B=x?x.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,w,D;if(N||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)v=Math.round(B.width/2),w=Math.round(B.height/2);else{const{clientX:S,clientY:P}=f.touches&&f.touches.length>0?f.touches[0]:f;v=Math.round(S-B.left),w=Math.round(P-B.top)}if(N)D=Math.sqrt((2*B.width**2+B.height**2)/3),D%2===0&&(D+=1);else{const S=Math.max(Math.abs((x?x.clientWidth:0)-v),v)*2+2,P=Math.max(Math.abs((x?x.clientHeight:0)-w),w)*2+2;D=Math.sqrt(S**2+P**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{O({pulsate:L,rippleX:v,rippleY:w,rippleSize:D,cb:M})},C.start(et,()=>{h.current&&(h.current(),h.current=null)})):O({pulsate:L,rippleX:v,rippleY:w,rippleSize:D,cb:M})},[n,O,C]),I=a.useCallback(()=>{j({},{pulsate:!0})},[j]),F=a.useCallback((f,y)=>{if(C.clear(),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,C.start(0,()=>{F(f,y)});return}h.current=null,p(M=>M.length>0?M.slice(1):M),g.current=y},[C]);return a.useImperativeHandle(s,()=>({pulsate:I,start:j,stop:F}),[I,j,F]),$.jsx(it,A({className:T(m.root,o.root,i),ref:R},c,{children:$.jsx(Qe,{component:null,exit:!0,children:u})}))}),at=st;function lt(e){return Ie("MuiButtonBase",e)}const ut=be("MuiButtonBase",["root","disabled","focusVisible"]),ct=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],pt=e=>{const{disabled:t,focusVisible:s,focusVisibleClassName:l,classes:n}=e,i=ze({root:["root",t&&"disabled",s&&"focusVisible"]},lt,n);return s&&l&&(i.root+=` ${l}`),i},ft=oe("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ut.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),dt=a.forwardRef(function(t,s){const l=ge({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:o=!1,children:i,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:C="a",onBlur:h,onClick:R,onContextMenu:O,onDragLeave:j,onFocus:I,onFocusVisible:F,onKeyDown:f,onKeyUp:y,onMouseDown:M,onMouseLeave:L,onMouseUp:N,onTouchEnd:U,onTouchMove:x,onTouchStart:B,tabIndex:v=0,TouchRippleProps:w,touchRippleRef:D,type:S}=l,P=te(l,ct),z=a.useRef(null),E=a.useRef(null),Re=ce(E,D),{isFocusVisibleRef:se,onFocus:ye,onBlur:Me,ref:xe}=Ue(),[k,X]=a.useState(!1);p&&k&&X(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{X(!0),z.current.focus()}}),[]);const[q,Ee]=a.useState(!1);a.useEffect(()=>{Ee(!0)},[]);const Te=q&&!d&&!p;a.useEffect(()=>{k&&b&&!d&&q&&E.current.pulsate()},[d,b,k,q]);function V(r,le,Ne=g){return H(ue=>(le&&le(ue),!Ne&&E.current&&E.current[r](ue),!0))}const Ce=V("start",M),ve=V("stop",O),Pe=V("stop",j),Ve=V("stop",N),Be=V("stop",r=>{k&&r.preventDefault(),L&&L(r)}),we=V("start",B),De=V("stop",U),Le=V("stop",x),Se=V("stop",r=>{Me(r),se.current===!1&&X(!1),h&&h(r)},!1),ke=H(r=>{z.current||(z.current=r.currentTarget),ye(r),se.current===!0&&(X(!0),F&&F(r)),I&&I(r)}),Q=()=>{const r=z.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},J=a.useRef(!1),_e=H(r=>{b&&!J.current&&k&&E.current&&r.key===" "&&(J.current=!0,E.current.stop(r,()=>{E.current.start(r)})),r.target===r.currentTarget&&Q()&&r.key===" "&&r.preventDefault(),f&&f(r),r.target===r.currentTarget&&Q()&&r.key==="Enter"&&!p&&(r.preventDefault(),R&&R(r))}),$e=H(r=>{b&&r.key===" "&&E.current&&k&&!r.defaultPrevented&&(J.current=!1,E.current.stop(r,()=>{E.current.pulsate(r)})),y&&y(r),R&&r.target===r.currentTarget&&Q()&&r.key===" "&&!r.defaultPrevented&&R(r)});let W=u;W==="button"&&(P.href||P.to)&&(W=C);const K={};W==="button"?(K.type=S===void 0?"button":S,K.disabled=p):(!P.href&&!P.to&&(K.role="button"),p&&(K["aria-disabled"]=p));const je=ce(s,xe,z),ae=A({},l,{centerRipple:o,component:u,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:v,focusVisible:k}),Fe=pt(ae);return $.jsxs(ft,A({as:W,className:T(Fe.root,c),ownerState:ae,onBlur:Se,onClick:R,onContextMenu:ve,onFocus:ke,onKeyDown:_e,onKeyUp:$e,onMouseDown:Ce,onMouseLeave:Be,onMouseUp:Ve,onDragLeave:Pe,onTouchEnd:De,onTouchMove:Le,onTouchStart:we,ref:je,tabIndex:p?-1:v,type:S},K,P,{children:[i,Te?$.jsx(at,A({ref:Re,center:o},w)):null]}))}),bt=dt;export{bt as B,pe as T,Ye as _,H as a,Ke as u};
