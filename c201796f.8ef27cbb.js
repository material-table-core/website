(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=(n(0),n(161));n(174),n(172);const o={id:"custom",title:"Custom Row Export"},i={unversionedId:"export/custom",id:"export/custom",isDocsHomePage:!1,title:"Custom Row Export",description:"Usage",source:"@site/demos/export/custom_export.mdx",slug:"/export/custom",permalink:"/demos/export/custom",version:"current",sidebar:"sidebar",previous:{title:"Basic Export",permalink:"/demos/export/basic"},next:{title:"Basic Filtering",permalink:"/demos/filter/basic"}},c=[{value:"Usage",id:"usage",children:[]}],s={toc:c};function l(e){let{components:t,...n}=e;return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"This section explains how to use the CSV exporter package ",Object(a.b)("inlineCode",{parentName:"p"},"@material-table/exporters")," in combination with the ",Object(a.b)("inlineCode",{parentName:"p"},"exportTransformer")," to manipulate column values."))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'// ...\nimport { ExportCsv } from "@material-table/exporters";\n\n<MaterialTable\n  // ...\n  data={[{ name: "Dominik" }]}\n  columns={[\n    {\n      field: "name",\n      title: "Name Uppercase",\n      exportTransformer: (row) => row.name.toUpperCase(),\n    },\n  ]}\n  options={{\n    // ...\n    exportMenu: [\n      {\n        label: "Export CSV with uppercase names",\n        exportFunc: (cols, datas) => ExportCsv(cols, datas, "myCsvFileName"),\n      },\n    ],\n  }}\n/>;\n')),Object(a.b)("p",null,"This will result in a csv file, that exports the data with all names being uppercase."),Object(a.b)("p",null,"THis can be used to either transform existing data, merge data points or even generate data for the column from outside sources."))}l.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),m=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=m(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=m(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),a=n.n(r),o=(n(20),n(778)),i=n(237);const c=e=>{let{type:t,children:n}=e,r=t;return"tip"===t&&(r="success"),"note"===t&&(r="secondary"),a.a.createElement(o.a,{theme:Object(i.b)()},a.a.createElement("div",{className:`admonition admonition-${t} alert alert--${r}`},a.a.createElement("div",{className:"admonition-heading"},a.a.createElement("h5",null,a.a.createElement("span",{className:"admonition-icon"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),t.toLowerCase())),a.a.createElement("div",{className:"admonition-content"},a.a.createElement("p",null,n))))},s=()=>a.a.createElement(c,{type:"note"},"See"," ",a.a.createElement("a",{href:"/demos/#demo-environment"},a.a.createElement("b",null,a.a.createElement("i",null,"here")))," ","for more on the ",a.a.createElement("code",null,"GLOBAL_VARS")," we use in our demos")}}]);