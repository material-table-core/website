(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{176:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var a=t(0),r=t.n(a);t(20);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}var i=t(189),c=t(848);var l="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",s=t(163);var u=function(e){const{children:n,theme:t}=e,r=Object(c.a)(),u=a.useMemo((()=>{const e=null===r?t:function(e,n){if("function"==typeof n)return n(e);return o({},e,n)}(r,t);return null!=e&&(e[l]=null!==r),e}),[t,r]);return Object(s.jsx)(i.a.Provider,{value:u,children:n})},m=t(236),d=t(191);const p={};function b(e){const n=Object(d.a)();return Object(s.jsx)(m.b.Provider,{value:"object"==typeof n?n:p,children:e.children})}var h=function(e){const{children:n,theme:t}=e;return Object(s.jsx)(u,{theme:t,children:Object(s.jsx)(b,{children:n})})},g=t(740);const v=e=>{let{type:n,children:t}=e,a=n;return"tip"===n&&(a="success"),"note"===n&&(a="secondary"),r.a.createElement(h,{theme:Object(g.a)()},r.a.createElement("div",{className:`admonition admonition-${n} alert alert--${a}`},r.a.createElement("div",{className:"admonition-heading"},r.a.createElement("h5",null,r.a.createElement("span",{className:"admonition-icon"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),n.toLowerCase())),r.a.createElement("div",{className:"admonition-content"},r.a.createElement("p",null,t))))},f=()=>r.a.createElement(v,{type:"note"},"See"," ",r.a.createElement("a",{href:"/demos/#demo-environment"},r.a.createElement("b",null,r.a.createElement("i",null,"here")))," ","for more on the ",r.a.createElement("code",null,"GLOBAL_VARS")," we use in our demos")},84:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var a=t(3),r=(t(0),t(164)),o=(t(182),t(176));const i={id:"basic",title:"Basic Grouping"},c={unversionedId:"group/basic",id:"group/basic",isDocsHomePage:!1,title:"Basic Grouping",description:"Usage",source:"@site/demos/group/basic.mdx",slug:"/group/basic",permalink:"/demos/group/basic",version:"current",sidebar:"sidebar",previous:{title:"Custom Filter Row",permalink:"/demos/filter/custom-filter-row"},next:{title:"Basic Localization",permalink:"/demos/localization/basic"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Live Demo",id:"live-demo",children:[]}],s={toc:l};function u(e){let{components:n,...t}=e;return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'import MaterialTable from "@material-table/core";\n\n<MaterialTable\n  // ... other props\n  options={{\n    grouping: true,\n  }}\n/>;\n')),Object(r.b)("h2",{id:"live-demo"},"Live Demo"),Object(r.b)(o.a,{mdxType:"InfoBannerAboutGlobalVarsInDemos"}),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BasicDetailsPanelDemo() {\n  return (\n    <MaterialTable\n      data={DEMO_DATA}\n      columns={DEMO_COLS}\n      options={{\n        // Enabling grouping\n        grouping: true,\n        // Show the child count in brackets\n        showGroupingCount: true,\n      }}\n    />\n  );\n}\n")))}u.isMDXComponent=!0}}]);