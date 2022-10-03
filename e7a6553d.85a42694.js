(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=(n(0),n(161)),o=(n(174),n(172));const i={id:"basic",title:"Basic Export"},c={unversionedId:"export/basic",id:"export/basic",isDocsHomePage:!1,title:"Basic Export",description:"Usage",source:"@site/demos/export/basic.mdx",slug:"/export/basic",permalink:"/demos/export/basic",version:"current",sidebar:"sidebar",previous:{title:"Editable",permalink:"/demos/edit/editable"},next:{title:"Custom Row Export",permalink:"/demos/export/custom"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Live Demo",id:"live-demo",children:[]}],s={toc:l};function p(e){let{components:t,...n}=e;return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You may use default export methods via the package ",Object(r.b)("inlineCode",{parentName:"p"},"@material-table/exporters"),". You will need to install this package if you would like to use the default export methods."))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'// ...\nimport { ExportCsv, ExportPdf } from "@material-table/exporters";\n\n<MaterialTable\n  // ...\n  options={{\n    // ...\n    exportMenu: [\n      {\n        label: "Export PDF",\n        //// You can do whatever you wish in this function. We provide the\n        //// raw table columns and table data for you to modify, if needed.\n        // exportFunc: (cols, datas) => console.log({ cols, datas })\n        exportFunc: (cols, datas) => ExportPdf(cols, datas, "myPdfFileName"),\n      },\n      {\n        label: "Export CSV",\n        exportFunc: (cols, datas) => ExportCsv(cols, datas, "myCsvFileName"),\n      },\n    ],\n  }}\n/>;\n')),Object(r.b)("h2",{id:"live-demo"},"Live Demo"),Object(r.b)(o.a,{mdxType:"InfoBannerAboutGlobalVarsInDemos"}),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function BasicExport() {\n  return (\n    <MaterialTable\n      data={DEMO_DATA}\n      columns={DEMO_COLS}\n      options={{\n        // ...\n        exportMenu: [\n          {\n            label: "Export PDF",\n            exportFunc: (cols, datas) =>\n              ExportPdf(cols, datas, "myPdfFileName"),\n          },\n          {\n            label: "Export CSV",\n            exportFunc: (cols, datas) =>\n              ExportCsv(cols, datas, "myCsvFileName"),\n          },\n        ],\n      }}\n    />\n  );\n}\n')))}p.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,b=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return n?r.a.createElement(b,c(c({ref:t},s),{},{components:n})):r.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),o=(n(20),n(778)),i=n(237);const c=e=>{let{type:t,children:n}=e,a=t;return"tip"===t&&(a="success"),"note"===t&&(a="secondary"),r.a.createElement(o.a,{theme:Object(i.b)()},r.a.createElement("div",{className:`admonition admonition-${t} alert alert--${a}`},r.a.createElement("div",{className:"admonition-heading"},r.a.createElement("h5",null,r.a.createElement("span",{className:"admonition-icon"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),t.toLowerCase())),r.a.createElement("div",{className:"admonition-content"},r.a.createElement("p",null,n))))},l=()=>r.a.createElement(c,{type:"note"},"See"," ",r.a.createElement("a",{href:"/demos/#demo-environment"},r.a.createElement("b",null,r.a.createElement("i",null,"here")))," ","for more on the ",r.a.createElement("code",null,"GLOBAL_VARS")," we use in our demos")}}]);