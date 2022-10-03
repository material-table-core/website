(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{161:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,b=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.a.createElement(b,i(i({ref:t},s),{},{components:n})):r.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a),o=(n(20),n(778)),l=n(237);const i=e=>{let{type:t,children:n}=e,a=t;return"tip"===t&&(a="success"),"note"===t&&(a="secondary"),r.a.createElement(o.a,{theme:Object(l.b)()},r.a.createElement("div",{className:`admonition admonition-${t} alert alert--${a}`},r.a.createElement("div",{className:"admonition-heading"},r.a.createElement("h5",null,r.a.createElement("span",{className:"admonition-icon"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),t.toLowerCase())),r.a.createElement("div",{className:"admonition-content"},r.a.createElement("p",null,n))))},c=()=>r.a.createElement(i,{type:"note"},"See"," ",r.a.createElement("a",{href:"/demos/#demo-environment"},r.a.createElement("b",null,r.a.createElement("i",null,"here")))," ","for more on the ",r.a.createElement("code",null,"GLOBAL_VARS")," we use in our demos")},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=(n(0),n(161)),o=(n(174),n(172));const l={id:"basic",title:"Basic Remote Data",hide_title:!0},i={unversionedId:"remote-data/basic",id:"remote-data/basic",isDocsHomePage:!1,title:"Basic Remote Data",description:"Remote Data",source:"@site/demos/remote-data/basic.mdx",slug:"/remote-data/basic",permalink:"/demos/remote-data/basic",version:"current",sidebar:"sidebar",previous:{title:"Basic Localization",permalink:"/demos/localization/basic"},next:{title:"Basic Search",permalink:"/demos/search/basic"}},c=[{value:"Props",id:"props",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Live Demo",id:"live-demo",children:[]}],s={toc:c};function u(e){let{components:t,...n}=e;return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"remote-data"},"Remote Data"),Object(r.b)("p",null,"This feature allows the user to implement a custom data fetching function. Using this functionality searching, filtering, sorting and paging are ignored and have to be manually implemented."),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Field"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"data")),Object(r.b)("td",{parentName:"tr",align:null},"Array or func"),Object(r.b)("td",{parentName:"tr",align:null},"Data to be rendered")))),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'import MaterialTable from "@material-table/core";\n\n<MaterialTable\n  // ...\n  data={(query) =>\n    new Promise((resolve, reject) => {\n      let url = "https://reqres.in/api/users?";\n      url += "per_page=" + query.pageSize;\n      url += "&page=" + (query.page + 1);\n      fetch(url)\n        .then((response) => response.json())\n        .then((result) => {\n          resolve({\n            data: result.data,\n            page: result.page - 1,\n            totalCount: result.total,\n          });\n        });\n    })\n  }\n/>;\n')),Object(r.b)("h2",{id:"live-demo"},"Live Demo"),Object(r.b)(o.a,{mdxType:"InfoBannerAboutGlobalVarsInDemos"}),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function RemoteData() {\n  return (\n    <MaterialTable\n      columns={[\n        {\n          title: "Avatar",\n          field: "avatar",\n          render: (rowData) => (\n            <img\n              style={{ height: 36, borderRadius: "50%" }}\n              src={rowData.avatar}\n            />\n          ),\n        },\n        { title: "Id", field: "id" },\n        { title: "First Name", field: "first_name" },\n        { title: "Last Name", field: "last_name" },\n      ]}\n      data={(query) =>\n        new Promise((resolve, reject) => {\n          let url = "https://reqres.in/api/users?";\n          url += "per_page=" + query.pageSize;\n          url += "&page=" + (query.page + 1);\n          fetch(url)\n            .then((response) => response.json())\n            .then((result) => {\n              resolve({\n                data: result.data,\n                page: result.page - 1,\n                totalCount: result.total,\n              });\n            });\n        })\n      }\n    />\n  );\n}\n')))}u.isMDXComponent=!0}}]);