(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{151:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=(t(0),t(161)),o=(t(174),t(172));const i={id:"basic",title:"Basic Action"},c={unversionedId:"actions/basic",id:"actions/basic",isDocsHomePage:!1,title:"Basic Action",description:"You can add buttons to rows or toolbar by using actions prop. Actions prop takes array of actions.",source:"@site/demos/actions/basic.mdx",slug:"/actions/basic",permalink:"/demos/actions/basic",version:"current",sidebar:"sidebar",previous:{title:"Introduction",permalink:"/demos/"},next:{title:"Toolbar",permalink:"/demos/override/toolbar"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Live Demo",id:"live-demo",children:[{value:"Action Rows",id:"action-rows",children:[]},{value:"Free Actions",id:"free-actions",children:[]}]}],s={toc:l};function u(e){let{components:n,...t}=e;return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can add buttons to rows or toolbar by using actions prop. Actions prop takes array of actions."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'import MaterialTable from "@material-table/core";\n\n<MaterialTable\n  // ...\n  actions={[\n    {\n      icon: () => <SaveIcon />,\n      tooltip: "Save User",\n      onClick: (event, rowData) => {\n        const rowJson = JSON.stringify(rowData, null, 2);\n        alert(`Do save operation : ${rowJson}`);\n      },\n    },\n  ]}\n/>;\n')),Object(a.b)("h2",{id:"live-demo"},"Live Demo"),Object(a.b)(o.a,{mdxType:"InfoBannerAboutGlobalVarsInDemos"}),Object(a.b)("h3",{id:"action-rows"},"Action Rows"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function BasicActionsDemo() {\n  return (\n    <MaterialTable\n      data={DEMO_DATA}\n      columns={DEMO_COLS}\n      actions={[\n        {\n          icon: () => <SaveIcon />,\n          tooltip: "Save User",\n          onClick: (event, rowData) => {\n            const rowJson = JSON.stringify(rowData, null, 2);\n            alert(`Do save operation : ${rowJson}`);\n          },\n        },\n      ]}\n    />\n  );\n}\n')),Object(a.b)("h3",{id:"free-actions"},"Free Actions"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function BasicActionsDemo() {\n  return (\n    <MaterialTable\n      data={DEMO_DATA}\n      columns={DEMO_COLS}\n      actions={[\n        {\n          icon: () => <SaveIcon />,\n          tooltip: "Save User",\n          isFreeAction: true,\n          onClick: (event) => {\n            alert(`Icon clicked`);\n          },\n        },\n      ]}\n    />\n  );\n}\n')))}u.isMDXComponent=!0},161:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return t?a.a.createElement(b,c(c({ref:n},s),{},{components:t})):a.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},172:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(0),a=t.n(r),o=(t(20),t(778)),i=t(237);const c=e=>{let{type:n,children:t}=e,r=n;return"tip"===n&&(r="success"),"note"===n&&(r="secondary"),a.a.createElement(o.a,{theme:Object(i.b)()},a.a.createElement("div",{className:`admonition admonition-${n} alert alert--${r}`},a.a.createElement("div",{className:"admonition-heading"},a.a.createElement("h5",null,a.a.createElement("span",{className:"admonition-icon"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),n.toLowerCase())),a.a.createElement("div",{className:"admonition-content"},a.a.createElement("p",null,t))))},l=()=>a.a.createElement(c,{type:"note"},"See"," ",a.a.createElement("a",{href:"/demos/#demo-environment"},a.a.createElement("b",null,a.a.createElement("i",null,"here")))," ","for more on the ",a.a.createElement("code",null,"GLOBAL_VARS")," we use in our demos")}}]);