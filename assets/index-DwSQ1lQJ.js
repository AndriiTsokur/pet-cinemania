import{u as Q,a as B,s as Z,e as sa,g as na,h as J,r as C,i as ia,k as A,l as ra,m as la,j as s,n as K,o as X,_ as U,p as ca,q as b,t as w,v as S,w as z,x as Y,y as da,z as T,A as j,C as aa,D as pa,E as ua,F as W}from"./index-BF660LOS.js";import{p as E,H as ga,W as V}from"./WeeklyTrends-DLPExq-X.js";import{B as va}from"./ButtonBase-beBDc_6A.js";import"./MovieCard-eM-PPpvC.js";const Za=()=>{const a=Q(),{screen:t,genres:{data:e}}=B(Z),{dayUpdated:o,week:r,weekUpdated:c}=B(sa),{query:d,data:n,dataUpdated:i}=B(na),{page:u}=J(),g=u?Number(u):1;C.useEffect(()=>{(!r||r.page!==g)&&a(ia({period:"week",page:g}))},[a,r,g]),C.useEffect(()=>{(n==null?void 0:n.page)!==g&&a(A({query:d,page:g}))},[a,n,g]),C.useEffect(()=>{if(r&&e&&o){const v=E({categoryName:"week",categoryResults:r.results,screen:t,genres:e,dayUpdated:o,isCatalogue:!0});a(ra(v))}},[a,r,e,o,t]);const y=v=>{a(A({query:v}))};return C.useEffect(()=>{if(n&&e&&o){const v=E({categoryName:"week",categoryResults:n.results,screen:t,genres:e,dayUpdated:o,isCatalogue:!0});a(la(v))}},[a,n,e,o,t]),s.jsxs("article",{children:[s.jsx(ga,{}),s.jsx(Va,{onSubmit:y}),d?s.jsxs(s.Fragment,{children:[s.jsx(O,{pageName:"catalogue",totalPages:i?i.total_pages:0}),s.jsx(V,{isCatalogue:!0,weekUpdatedProp:i}),s.jsx(O,{pageName:"catalogue",totalPages:i?i.total_pages:0})]}):s.jsxs(s.Fragment,{children:[s.jsx(O,{pageName:"catalogue",totalPages:c?c.total_pages/2:0}),s.jsx(V,{isCatalogue:!0,weekUpdatedProp:c}),s.jsx(O,{pageName:"catalogue",totalPages:c?c.total_pages/2:0})]})]})};function ba(a){return K("MuiPagination",a)}X("MuiPagination",["root","ul","outlined","text"]);const fa=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function xa(a={}){const{boundaryCount:t=1,componentName:e="usePagination",count:o=1,defaultPage:r=1,disabled:c=!1,hideNextButton:d=!1,hidePrevButton:n=!1,onChange:i,page:u,showFirstButton:g=!1,showLastButton:y=!1,siblingCount:v=1}=a,f=U(a,fa),[p,I]=ca({controlled:u,default:r,name:e,state:"page"}),N=(l,k)=>{u||I(k),i&&i(l,k)},h=(l,k)=>{const ea=k-l+1;return Array.from({length:ea},(Da,oa)=>l+oa)},_=h(1,Math.min(t,o)),m=h(Math.max(o-t+1,t+1),o),M=Math.max(Math.min(p-v,o-t-v*2-1),t+2),$=Math.min(Math.max(p+v,t+v*2+2),m.length>0?m[0]-2:o-1),R=[...g?["first"]:[],...n?[]:["previous"],..._,...M>t+2?["start-ellipsis"]:t+1<o-t?[t+1]:[],...h(M,$),...$<o-t-1?["end-ellipsis"]:o-t>t?[o-t]:[],...m,...d?[]:["next"],...y?["last"]:[]],F=l=>{switch(l){case"first":return 1;case"previous":return p-1;case"next":return p+1;case"last":return o;default:return null}},P=R.map(l=>typeof l=="number"?{onClick:k=>{N(k,l)},type:"page",page:l,selected:l===p,disabled:c,"aria-current":l===p?"true":void 0}:{onClick:k=>{N(k,F(l))},type:l,page:F(l),selected:!1,disabled:c||l.indexOf("ellipsis")===-1&&(l==="next"||l==="last"?p>=o:p<=1)});return b({items:P},f)}function ya(a){return K("MuiPaginationItem",a)}const ha=X("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon","colorPrimary","colorSecondary"]),x=ha,D=w(s.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),q=w(s.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),G=w(s.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),H=w(s.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),ma=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],ta=(a,t)=>{const{ownerState:e}=a;return[t.root,t[e.variant],t[`size${j(e.size)}`],e.variant==="text"&&t[`text${j(e.color)}`],e.variant==="outlined"&&t[`outlined${j(e.color)}`],e.shape==="rounded"&&t.rounded,e.type==="page"&&t.page,(e.type==="start-ellipsis"||e.type==="end-ellipsis")&&t.ellipsis,(e.type==="previous"||e.type==="next")&&t.previousNext,(e.type==="first"||e.type==="last")&&t.firstLast]},Ca=a=>{const{classes:t,color:e,disabled:o,selected:r,size:c,shape:d,type:n,variant:i}=a,u={root:["root",`size${j(c)}`,i,d,e!=="standard"&&`color${j(e)}`,e!=="standard"&&`${i}${j(e)}`,o&&"disabled",r&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[n]],icon:["icon"]};return aa(u,ya,t)},Pa=S("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:ta})(({theme:a,ownerState:t})=>b({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,height:"auto",[`&.${x.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity}},t.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)})),ka=S(va,{name:"MuiPaginationItem",slot:"Root",overridesResolver:ta})(({theme:a,ownerState:t})=>b({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,[`&.${x.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`&.${x.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity},transition:a.transitions.create(["color","background-color"],{duration:a.transitions.duration.short}),"&:hover":{backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${x.selected}`]:{backgroundColor:(a.vars||a).palette.action.selected,"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:z(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(a.vars||a).palette.action.selected}},[`&.${x.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:z(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},[`&.${x.disabled}`]:{opacity:1,color:(a.vars||a).palette.action.disabled,backgroundColor:(a.vars||a).palette.action.selected}}},t.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)},t.shape==="rounded"&&{borderRadius:(a.vars||a).shape.borderRadius}),({theme:a,ownerState:t})=>b({},t.variant==="text"&&{[`&.${x.selected}`]:b({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].contrastText,backgroundColor:(a.vars||a).palette[t.color].main,"&:hover":{backgroundColor:(a.vars||a).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[t.color].main}},[`&.${x.focusVisible}`]:{backgroundColor:(a.vars||a).palette[t.color].dark}},{[`&.${x.disabled}`]:{color:(a.vars||a).palette.action.disabled}})},t.variant==="outlined"&&{border:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${x.selected}`]:b({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / 0.5)`:z(a.palette[t.color].main,.5)}`,backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / ${a.vars.palette.action.activatedOpacity})`:z(a.palette[t.color].main,a.palette.action.activatedOpacity),"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:z(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${x.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:z(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity)}},{[`&.${x.disabled}`]:{borderColor:(a.vars||a).palette.action.disabledBackground,color:(a.vars||a).palette.action.disabled}})})),$a=S("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(a,t)=>t.icon})(({theme:a,ownerState:t})=>b({fontSize:a.typography.pxToRem(20),margin:"0 -8px"},t.size==="small"&&{fontSize:a.typography.pxToRem(18)},t.size==="large"&&{fontSize:a.typography.pxToRem(22)})),Na=C.forwardRef(function(t,e){const o=Y({props:t,name:"MuiPaginationItem"}),{className:r,color:c="standard",component:d,components:n={},disabled:i=!1,page:u,selected:g=!1,shape:y="circular",size:v="medium",slots:f={},type:p="page",variant:I="text"}=o,N=U(o,ma),h=b({},o,{color:c,disabled:i,selected:g,shape:y,size:v,type:p,variant:I}),_=da(),m=Ca(h),$=(_?{previous:f.next||n.next||H,next:f.previous||n.previous||G,last:f.first||n.first||D,first:f.last||n.last||q}:{previous:f.previous||n.previous||G,next:f.next||n.next||H,first:f.first||n.first||D,last:f.last||n.last||q})[p];return p==="start-ellipsis"||p==="end-ellipsis"?s.jsx(Pa,{ref:e,ownerState:h,className:T(m.root,r),children:"…"}):s.jsxs(ka,b({ref:e,ownerState:h,component:d,disabled:i,className:T(m.root,r)},N,{children:[p==="page"&&u,$?s.jsx($a,{as:$,ownerState:h,className:m.icon}):null]}))}),_a=Na,za=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],ja=a=>{const{classes:t,variant:e}=a;return aa({root:["root",e],ul:["ul"]},ba,t)},Ia=S("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:e}=a;return[t.root,t[e.variant]]}})({}),Ma=S("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(a,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function Ra(a,t,e){return a==="page"?`${e?"":"Go to "}page ${t}`:`Go to ${a} page`}const Fa=C.forwardRef(function(t,e){const o=Y({props:t,name:"MuiPagination"}),{boundaryCount:r=1,className:c,color:d="standard",count:n=1,defaultPage:i=1,disabled:u=!1,getItemAriaLabel:g=Ra,hideNextButton:y=!1,hidePrevButton:v=!1,renderItem:f=P=>s.jsx(_a,b({},P)),shape:p="circular",showFirstButton:I=!1,showLastButton:N=!1,siblingCount:h=1,size:_="medium",variant:m="text"}=o,M=U(o,za),{items:$}=xa(b({},o,{componentName:"Pagination"})),R=b({},o,{boundaryCount:r,color:d,count:n,defaultPage:i,disabled:u,getItemAriaLabel:g,hideNextButton:y,hidePrevButton:v,renderItem:f,shape:p,showFirstButton:I,showLastButton:N,siblingCount:h,size:_,variant:m}),F=ja(R);return s.jsx(Ia,b({"aria-label":"pagination navigation",className:T(F.root,c),ownerState:R,ref:e},M,{children:s.jsx(Ma,{className:F.ul,ownerState:R,children:$.map((P,l)=>s.jsx("li",{children:f(b({},P,{color:d,"aria-label":g(P.type,P.page,P.selected),shape:p,size:_,variant:m}))},l))})}))}),La=Fa,Ba="_paginationWrapper_t5gl2_1",Sa={paginationWrapper:Ba},O=({pageName:a,totalPages:t})=>{const e=pa(),{screen:{deviceType:o}}=B(Z),{isDarkMode:r}=B(ua),{page:c}=J();let d;switch(o){case"tablet":{d="medium";break}case"desktop":{d="large";break}default:{d="small";break}}const n=r?"#ffffff":"#111111",i=r?"#b7b7b7":"#595959",u=(g,y)=>{e(y===1?`/${a}`:`/${a}/${y}`)};return s.jsx("div",{className:Sa.paginationWrapper,children:s.jsx(La,{count:t,variant:"outlined",disabled:t<=1,onChange:u,page:c?Number(c):1,size:d,sx:{"& .MuiPaginationItem-root":{borderColor:i,color:n},"& .Mui-selected":{borderColor:i,background:"linear-gradient(144.81deg, rgb(255, 194, 38) 9.233%,rgb(248, 65, 25) 92.699%)",color:"colorPrimary"}}})})},Oa="_lightMode_otgdm_1",wa="_form_otgdm_3",Wa="_input_otgdm_13",Ta="_buttonClear_otgdm_33",Ua="_buttonSubmit_otgdm_64",Aa="_iconSearch_otgdm_79",L={lightMode:Oa,form:wa,input:Wa,buttonClear:Ta,buttonSubmit:Ua,iconSearch:Aa},Ea="data:image/svg+xml,%3csvg%20width='18.000000'%20height='18.000000'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdesc%3e%20Created%20with%20Pixso.%20%3c/desc%3e%3cdefs%3e%3cclipPath%20id='clip411_17560'%3e%3crect%20id='search%203'%20width='18.000000'%20height='18.000000'%20fill='white'%20fill-opacity='0'/%3e%3c/clipPath%3e%3c/defs%3e%3crect%20id='search%203'%20width='18.000000'%20height='18.000000'%20fill='%23FFFFFF'%20fill-opacity='0'/%3e%3cg%20clip-path='url(%23clip411_17560)'%3e%3cpath%20id='Vector'%20d='M8.25%2014.25C4.93%2014.25%202.25%2011.56%202.25%208.25C2.25%204.93%204.93%202.25%208.25%202.25C11.56%202.25%2014.25%204.93%2014.25%208.25C14.25%2011.56%2011.56%2014.25%208.25%2014.25Z'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='1.300000'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector'%20d='M15.75%2015.74L12.48%2012.48'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='1.300000'%20stroke-linejoin='round'%20stroke-linecap='round'/%3e%3c/g%3e%3c/svg%3e",Va=({onSubmit:a})=>{const t=Q(),[e,o]=C.useState(""),r=C.useRef(null);C.useEffect(()=>{var i;(((i=r.current)==null?void 0:i.value)===""||e==="")&&t(W(""))},[t,e,r]);const c=i=>{const u=i.target.value.trimStart();o(u.replaceAll("  "," "))},d=()=>{o(""),t(W("")),r.current&&r.current.focus()},n=i=>{i.preventDefault(),e&&a(e),t(W(e))};return s.jsxs("form",{className:L.form,onSubmit:n,children:[s.jsx("input",{type:"text",className:L.input,value:e,onChange:c,ref:r,placeholder:"Search"}),e&&s.jsx("button",{type:"button",className:L.buttonClear,onClick:d}),s.jsx("button",{type:"submit",className:L.buttonSubmit,children:s.jsx("img",{src:Ea,className:L.iconSearch,alt:"Search Icon"})})]})};export{Za as CataloguePage};
