(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(148)),i=n(172),c={id:"breaking-changes",title:"Breaking Changes",slug:"/breaking-changes"},l={unversionedId:"getting-started/breaking-changes",id:"getting-started/breaking-changes",isDocsHomePage:!1,title:"Breaking Changes",description:"A list of breaking changes since forking from mbrn/material-table (fork was created around mbrn/material-table v1.60.0)",source:"@site/docs/getting-started/breaking-changes.mdx",slug:"/breaking-changes",permalink:"/docs/breaking-changes",editUrl:"https://github.com/material-table-core/website/tree/master/docs/getting-started/breaking-changes.mdx",version:"current",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/"},next:{title:"Compatability",permalink:"/docs/compatability"}},b=[{value:"Exporting",id:"exporting",children:[]},{value:"Columns Button",id:"columns-button",children:[{value:"Column Hidden Defaults",id:"column-hidden-defaults",children:[]}]}],s={toc:b};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A list of breaking changes since forking from ",Object(o.b)("inlineCode",{parentName:"p"},"mbrn/material-table")," (fork was created around ",Object(o.b)("inlineCode",{parentName:"p"},"mbrn/material-table v1.60.0"),")"),Object(o.b)("h2",{id:"exporting"},"Exporting"),Object(o.b)("p",null,"Due to ",Object(o.b)("inlineCode",{parentName:"p"},"jspdf")," absolutely ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/material-table-core/core/issues/45"}),"bloating our bundle"),", we had to make breaking changes to the way exporting data is handled."),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/props/options#exportmenu"}),"here")," for more."),Object(o.b)("h2",{id:"columns-button"},"Columns Button"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This is also referred to as the ",Object(o.b)("inlineCode",{parentName:"p"},"exportMenu")))),Object(o.b)("p",null,"Is the action which shows a menu that allows a user to hide/show columns."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)("div",null,Object(o.b)("img",{alt:"Columns_Button",src:Object(i.a)("img/breaking-changes/columns-btn-before.png"),style:{width:"25rem",border:"1px solid black"}}),";"),Object(o.b)("div",null,Object(o.b)("img",{alt:"Columns_Button_Menu",src:Object(i.a)("img/breaking-changes/columns-btn-after.png"),style:{height:"15rem",width:"7.5rem",border:"1px solid black"}}),";")),Object(o.b)("h3",{id:"column-hidden-defaults"},"Column Hidden Defaults"),Object(o.b)("p",null,"All columns used to be hidden from the Columns Button Menu by default, this has since changed."),Object(o.b)("p",null,"In order to achieve the same behavior as before this breaking change, you have two options:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Set the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://localhost:3000/docs/api/props/columns#hiddenbycolumnsbutton"}),Object(o.b)("inlineCode",{parentName:"a"},"hiddenByColumnsButton"))," prop to ",Object(o.b)("inlineCode",{parentName:"li"},"false")," for each ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://localhost:3000/docs/api/props/columns"}),"column")),Object(o.b)("li",{parentName:"ul"},"Override the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/components/mtabletoolbar"}),Object(o.b)("inlineCode",{parentName:"a"},"MTableToolbar"))," component and set the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/components/mtabletoolbar/#columnshiddenincolumnsbutton"}),Object(o.b)("inlineCode",{parentName:"a"},"columnsHiddenInColumnsButton"))," to ",Object(o.b)("inlineCode",{parentName:"li"},"true")," (while spreading the rest of the props)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"No longer have to set ",Object(o.b)("inlineCode",{parentName:"li"},"hiddenByColumnsButton")," for each column")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"See ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/demos/columns/hide"}),"here")," for more info + Live Demos (editable playground)"))))}u.isMDXComponent=!0},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,m=u["".concat(i,".").concat(p)]||u[p]||d[p]||o;return n?a.a.createElement(m,c(c({ref:t},b),{},{components:n})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},172:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(22),a=n(176);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,l=o.absolute,b=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return b?e+s:s}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},176:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))}}]);