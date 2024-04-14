"use strict";(self.webpackChunksingsdev=self.webpackChunksingsdev||[]).push([[959],{121:function(e,t,n){n.d(t,{l:function(){return L}});var a=n(7294),r=n(8145),o=n(1508),i=n(461),s=n(5725),l=n(7462),c=n(3366),d=n(6010),m=n(4780),u=n(948),p=n(1657),g=n(4680),Z=n(1588),f=n(4867);function v(e){return(0,f.Z)("MuiCard",e)}(0,Z.Z)("MuiCard",["root"]);var C=n(5893);const b=["className","raised"],x=(0,u.ZP)(g.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var E=a.forwardRef((function(e,t){const n=(0,p.Z)({props:e,name:"MuiCard"}),{className:a,raised:r=!1}=n,o=(0,c.Z)(n,b),i=(0,l.Z)({},n,{raised:r}),s=(e=>{const{classes:t}=e;return(0,m.Z)({root:["root"]},v,t)})(i);return(0,C.jsx)(x,(0,l.Z)({className:(0,d.Z)(s.root,a),elevation:r?8:void 0,ref:t,ownerState:i},o))}));function M(e){return(0,f.Z)("MuiCardContent",e)}(0,Z.Z)("MuiCardContent",["root"]);const h=["className","component"],S=(0,u.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var w=a.forwardRef((function(e,t){const n=(0,p.Z)({props:e,name:"MuiCardContent"}),{className:a,component:r="div"}=n,o=(0,c.Z)(n,h),i=(0,l.Z)({},n,{component:r}),s=(e=>{const{classes:t}=e;return(0,m.Z)({root:["root"]},M,t)})(i);return(0,C.jsx)(S,(0,l.Z)({as:r,className:(0,d.Z)(s.root,a),ownerState:i,ref:t},o))})),y=n(2658);function k(e){return(0,f.Z)("MuiCardActions",e)}(0,Z.Z)("MuiCardActions",["root","spacing"]);const R=["disableSpacing","className"],N=(0,u.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disableSpacing&&t.spacing]}})((({ownerState:e})=>(0,l.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})));var P=a.forwardRef((function(e,t){const n=(0,p.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:a=!1,className:r}=n,o=(0,c.Z)(n,R),i=(0,l.Z)({},n,{disableSpacing:a}),s=(e=>{const{classes:t,disableSpacing:n}=e,a={root:["root",!n&&"spacing"]};return(0,m.Z)(a,k,t)})(i);return(0,C.jsx)(N,(0,l.Z)({className:(0,d.Z)(s.root,r),ownerState:i,ref:t},o))}));function I(e){return(0,f.Z)("MuiCardMedia",e)}(0,Z.Z)("MuiCardMedia",["root","media","img"]);const B=["children","className","component","image","src","style"],j=(0,u.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{isMediaComponent:a,isImageComponent:r}=n;return[t.root,a&&t.media,r&&t.img]}})((({ownerState:e})=>(0,l.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),A=["video","audio","picture","iframe","img"],O=["picture","img"];var U=a.forwardRef((function(e,t){const n=(0,p.Z)({props:e,name:"MuiCardMedia"}),{children:a,className:r,component:o="div",image:i,src:s,style:u}=n,g=(0,c.Z)(n,B),Z=-1!==A.indexOf(o),f=!Z&&i?(0,l.Z)({backgroundImage:`url("${i}")`},u):u,v=(0,l.Z)({},n,{component:o,isMediaComponent:Z,isImageComponent:-1!==O.indexOf(o)}),b=(e=>{const{classes:t,isMediaComponent:n,isImageComponent:a}=e,r={root:["root",n&&"media",a&&"img"]};return(0,m.Z)(r,I,t)})(v);return(0,C.jsx)(j,(0,l.Z)({className:(0,d.Z)(b.root,r),as:o,role:!Z&&i?"img":void 0,ref:t,style:f,ownerState:v,src:Z?i||s:void 0},g,{children:a}))})),W=n(7615);const z=e=>{let{tag:t}=e;const n=(0,a.useCallback)((()=>{(0,r.c4)("/tag/"+t)}),[t]);return a.createElement(o.Z,{key:t,sx:{borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderBottom:"10px solid transparent"}},a.createElement(i.Z,{label:t,variant:"outlined",onClick:n}))},D=e=>{var t;let{mdx:n}=e;const r=null==n?void 0:n.frontmatter;return r?a.createElement(s.ZP,{item:!0},a.createElement(E,{elevation:0,sx:{display:"flex",backgroundColor:"#fff"}},a.createElement(o.Z,null,a.createElement(w,null,a.createElement(W.rU,{to:"/post"+(null===(t=n.fields)||void 0===t?void 0:t.slug)},a.createElement(y.Z,{variant:"h5",paragraph:!0},r.title)),a.createElement(y.Z,{paragraph:!0,sx:{fontSize:12,lineHeight:0}},r.date),a.createElement(y.Z,{variant:"subtitle1",paragraph:!0,sx:{marginBottom:0}},r.description)),a.createElement(P,{sx:{flexWrap:"wrap",marginBottom:"-5px"},disableSpacing:!0},r.tags.map((e=>a.createElement(z,{tag:e,key:e}))))),r.imageUrl?a.createElement(U,{image:r.imageUrl,sx:{width:180}}):null)):null},L=e=>{let{data:t}=e;return a.createElement(s.ZP,{container:!0,direction:"column",rowSpacing:3},t.allMdx.nodes.map((e=>a.createElement(D,{mdx:e,key:e.id}))))}},1482:function(e,t,n){n.r(t);var a=n(7294),r=n(121),o=n(5715),i=n(7735),s=n(6089),l=n(6914),c=n(7615);const d=e=>{let{currentPage:t,numberOfPages:n}=e;return a.createElement(s.Z,{sx:{display:"flex",justifyContent:"space-between"}},a.createElement(c.rU,{to:2===t?"/blog":"/blog/"+(t-1),sx:{textDecoration:"none"}},a.createElement(l.Z,{variant:"contained",color:"primary",disabled:1===t},"Previous")),a.createElement(c.rU,{to:"/blog/"+(t+1),sx:{textDecoration:"none"}},a.createElement(l.Z,{variant:"contained",color:"primary",disabled:t===n},"Next")))};t.default=e=>{let{data:t,pageContext:n}=e;(0,a.useEffect)((()=>(0,o.z)("BlogList","blog-list")),[]),console.log(n);const{numPages:l,currentPage:c}=n;return a.createElement(i.Z,{pageTitle:"Blog",description:"I am Sing Mak. This is my tech blog. I blog about NodeJS, React, AWS, DevOps, Android development, or anything I learned recently."},a.createElement(s.Z,{maxWidth:"md",sx:{marginTop:5,marginBottom:5}},a.createElement(r.l,{data:t})),a.createElement(s.Z,{maxWidth:"md",sx:{marginBottom:5}},a.createElement(d,{numberOfPages:l,currentPage:c})))}}}]);
//# sourceMappingURL=component---src-templates-blog-list-tsx-ac979c5f599c2fb3ac22.js.map