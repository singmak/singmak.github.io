(self.webpackChunksingsdev=self.webpackChunksingsdev||[]).push([[754],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var o=r(7228);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var o=r(9489),n=r(7067);function u(t,r,l){return n()?(e.exports=u=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=u=function(e,t,r){var n=[null];n.push.apply(n,t);var u=new(Function.bind.apply(e,n));return r&&o(u,r.prototype),u},e.exports.__esModule=!0,e.exports.default=e.exports),u.apply(null,arguments)}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var o=r(3646),n=r(6860),u=r(379),l=r(8206);e.exports=function(e){return o(e)||n(e)||u(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var o=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},6731:function(e,t,r){"use strict";r.r(t);var o=r(7294),n=r(1274),u=r(2994),l=r(5616),c=r(9308),s=r(9211);t.default=function(e){var t,r,i,p,a,f,d,x,m,v=e.data;return o.createElement(u.Z,{pageTitle:null!==(t=null===(r=v.mdx)||void 0===r||null===(i=r.frontmatter)||void 0===i?void 0:i.title)&&void 0!==t?t:"Blog"},o.createElement(l.Z,{maxWidth:"md",sx:{padding:5}},o.createElement(c.Z,{component:"h1",sx:{fontSize:"3rem"}},null===(p=v.mdx)||void 0===p||null===(a=p.frontmatter)||void 0===a?void 0:a.title),o.createElement(c.Z,{component:"p"},null===(f=v.mdx)||void 0===f||null===(d=f.frontmatter)||void 0===d?void 0:d.date),o.createElement(s.Z,{sx:{img:{padding:1,background:"#fff"}}},o.createElement(n.MDXRenderer,null,null!==(x=null===(m=v.mdx)||void 0===m?void 0:m.body)&&void 0!==x?x:""))))}},1274:function(e,t,r){var o=r(1048);e.exports={MDXRenderer:o}},1048:function(e,t,r){var o=r(9100),n=r(319),u=r(9713),l=r(7316),c=["scope","children"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=r(7294),a=r(4983).mdx,f=r(3191).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,u=l(e,c),s=f(t),d=p.useMemo((function(){if(!r)return null;var e=i({React:p,mdx:a},s),t=Object.keys(e),u=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(n(t),[""+r])).apply(void 0,[{}].concat(n(u)))}),[r,t]);return p.createElement(d,i({},u))}}}]);
//# sourceMappingURL=component---src-pages-post-mdx-slug-tsx-4f0d0d38f7bc11323d2d.js.map