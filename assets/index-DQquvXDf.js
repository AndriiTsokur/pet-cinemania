import{u as m,a as p,s as x,b as h,r as _,c as j,j as e,B as u,d as v}from"./index-BtCj7mMn.js";import{p as g,A as b,H as N,W as w}from"./WeeklyTrends-4d2JjvC8.js";import"./MovieCard-LGC2DY9D.js";const T="_lightMode_x0hjw_1",f="_upcoming_x0hjw_3",y="_container_x0hjw_8",W="_posterContainer_x0hjw_14",C="_poster_x0hjw_14",k="_infoContainer_x0hjw_29",D="_title_x0hjw_36",U="_detailsWrapper_x0hjw_45",H="_column_x0hjw_52",A="_parameterName_x0hjw_57",M="_data_x0hjw_62",B="_releaseDate_x0hjw_66",E="_votes_x0hjw_75",G="_aboutTitle_x0hjw_88",P="_aboutText_x0hjw_97",R="_btnWrapper_x0hjw_105",S="_backdrop_x0hjw_122",s={lightMode:T,upcoming:f,container:y,posterContainer:W,poster:C,infoContainer:k,title:D,detailsWrapper:U,column:H,parameterName:A,data:M,releaseDate:B,votes:E,aboutTitle:G,aboutText:P,btnWrapper:R,backdrop:S},V=()=>{var c,l;const i=m(),{screen:a,genres:{data:o}}=p(x),{data:r,dataUpdated:t}=p(h);_.useEffect(()=>{if(r&&o){const d=g({categoryName:"upcoming",categoryData:r,screen:a,genres:o});i(j(d))}},[a.deviceType,r,i]);let n="";if(t&&(n=a.deviceType==="mobile"?t.poster_url||"":t.backdrop_url||""),!!t)return e.jsxs("article",{className:s.upcoming,children:[e.jsx(b,{title:"Upcoming This Month"}),e.jsxs("div",{className:s.container,children:[e.jsx("div",{style:a.deviceType==="mobile"?{height:a.movieCardHeight}:{},className:s.posterContainer,children:e.jsx("img",{src:n,className:a.deviceType==="mobile"?s.poster:s.backdrop,alt:t.title})}),e.jsxs("div",{className:s.infoContainer,children:[e.jsx("h3",{className:s.title,children:t.title}),e.jsxs("div",{className:s.detailsWrapper,children:[e.jsxs("div",{className:s.column,children:[e.jsxs("div",{className:s.parameterName,children:[e.jsx("p",{children:"Release date"}),e.jsx("p",{children:"Vote / Votes"})]}),e.jsxs("div",{className:s.data,children:[e.jsx("p",{className:s.releaseDate,children:t.release_date}),t.vote_count===0?e.jsx("p",{children:"No votes yet"}):e.jsxs("p",{children:[e.jsx("span",{className:s.votes,children:t.vote_average})," ","/"," ",e.jsx("span",{className:s.votes,children:t.vote_count})]})]})]}),e.jsxs("div",{className:s.column,children:[e.jsxs("div",{className:s.parameterName,children:[e.jsx("p",{children:"Popularity"}),((c=t.genres)==null?void 0:c.length)===1?e.jsx("p",{children:"Genre"}):e.jsx("p",{children:"Genres"})]}),e.jsxs("div",{className:s.data,children:[e.jsx("p",{children:t.popularity}),e.jsx("p",{children:(l=t.genres)==null?void 0:l.join(", ")})]})]})]}),e.jsx("h4",{className:s.aboutTitle,children:"About"}),e.jsx("p",{className:s.aboutText,children:a.deviceType==="desktop"&&t.overview_brief?t.overview_brief:t.overview}),e.jsxs("div",{className:s.btnWrapper,children:[e.jsx(u,{movieId:t.id}),e.jsx(v,{movie:t,isGradient:!1})]})]})]})]})},q=()=>e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsx(w,{}),e.jsx(V,{})]});export{q as HomePage};