(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{133:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return m}));var a=t(3),i=(t(0),t(164)),o=(t(182),t(176));const r={id:"positioning",title:"Positioning Pagination Demo",hide_title:!0},l={unversionedId:"pagination/positioning",id:"pagination/positioning",isDocsHomePage:!1,title:"Positioning Pagination Demo",description:"Pagination Positioning",source:"@site/demos/pagination/positioning.mdx",slug:"/pagination/positioning",permalink:"/demos/pagination/positioning",version:"current",sidebar:"sidebar",previous:{title:"Basic Pagination Demo",permalink:"/demos/pagination/basic"}},c=[{value:"Props",id:"props",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Live Demo",id:"live-demo",children:[]}],s={toc:c};function m(e){let{components:n,...t}=e;return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"pagination-positioning"},"Pagination Positioning"),Object(i.b)("p",null,'The pagination can be positioned using the flex alignemnt property "justifyContent".'),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"options.paginationAlignment")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content"},"justify-content")),Object(i.b)("td",{parentName:"tr",align:null},"The position of the pagination using the flex box")))),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'import MaterialTable from "@material-table/core";\n\n<MaterialTable\n  // ...\n  options={{ paginationAlignment: "center" }}\n/>;\n')),Object(i.b)("h2",{id:"live-demo"},"Live Demo"),Object(i.b)(o.a,{mdxType:"InfoBannerAboutGlobalVarsInDemos"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function PaginationDemo() {\n  const [paginationAlignment, setOptions] = React.useState("flex-end");\n  return (\n    <>\n      <TextField\n        select={true}\n        label="Select position"\n        value={paginationAlignment}\n        onChange={(e) => setOptions(e.target.value)}\n      >\n        <MenuItem value={"flex-end"}>flex-end</MenuItem>\n        <MenuItem value={"flex-start"}>flex-start</MenuItem>\n        <MenuItem value={"center"}>center</MenuItem>\n      </TextField>\n      <MaterialTable\n        data={Array(50)\n          .fill()\n          .map((_, i) => ({ id: i, name: `name ${i + 1}` }))}\n        columns={DEMO_COLS}\n        options={{\n          paginationAlignment,\n        }}\n      />\n    </>\n  );\n}\n')))}m.isMDXComponent=!0},176:function(e,n,t){"use strict";t.d(n,"a",(function(){return j}));var a=t(0),i=t.n(a);t(20);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}var r=t(189),l=t(848);var c="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",s=t(163);var m=function(e){const{children:n,theme:t}=e,i=Object(l.a)(),m=a.useMemo((()=>{const e=null===i?t:function(e,n){if("function"==typeof n)return n(e);return o({},e,n)}(i,t);return null!=e&&(e[c]=null!==i),e}),[t,i]);return Object(s.jsx)(r.a.Provider,{value:m,children:n})},u=t(236),p=t(191);const d={};function b(e){const n=Object(p.a)();return Object(s.jsx)(u.b.Provider,{value:"object"==typeof n?n:d,children:e.children})}var g=function(e){const{children:n,theme:t}=e;return Object(s.jsx)(m,{theme:t,children:Object(s.jsx)(b,{children:n})})},h=t(740);const f=e=>{let{type:n,children:t}=e,a=n;return"tip"===n&&(a="success"),"note"===n&&(a="secondary"),i.a.createElement(g,{theme:Object(h.a)()},i.a.createElement("div",{className:`admonition admonition-${n} alert alert--${a}`},i.a.createElement("div",{className:"admonition-heading"},i.a.createElement("h5",null,i.a.createElement("span",{className:"admonition-icon"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),n.toLowerCase())),i.a.createElement("div",{className:"admonition-content"},i.a.createElement("p",null,t))))},j=()=>i.a.createElement(f,{type:"note"},"See"," ",i.a.createElement("a",{href:"/demos/#demo-environment"},i.a.createElement("b",null,i.a.createElement("i",null,"here")))," ","for more on the ",i.a.createElement("code",null,"GLOBAL_VARS")," we use in our demos")}}]);