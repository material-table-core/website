(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=(n(0),n(164));n(182),n(176);const l={id:"basic",title:"Basic Search"},i={unversionedId:"search/basic",id:"search/basic",isDocsHomePage:!1,title:"Basic Search",description:"The Search allows the user to filter the displayed rows by entering a search text into the toolbar input. It is enabled by default.",source:"@site/demos/search/basic.mdx",slug:"/search/basic",permalink:"/demos/search/basic",version:"current",sidebar:"sidebar",previous:{title:"Basic Remote Data",permalink:"/demos/remote-data/basic"},next:{title:"Basic Selection",permalink:"/demos/selection/basic"}},c=[{value:"Props",id:"props",children:[]}],o={toc:c};function b(e){let{components:t,...n}=e;return Object(r.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Search allows the user to filter the displayed rows by entering a search text into the toolbar input. It is enabled by default."),Object(r.b)("p",null,"The input is debounced to 200 ms by default, which can be adjusted via the options."),Object(r.b)("p",null,"To exclude a specific column from the search, override the ",Object(r.b)("inlineCode",{parentName:"p"},"customFilterAndSearch")," prop of the column",Object(r.b)("a",{parentName:"p",href:"https://github.com/material-table-core/core/issues/669"},"Link"),"."),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Field"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"options.searchDebounceDelay")),Object(r.b)("td",{parentName:"tr",align:null},"number"),Object(r.b)("td",{parentName:"tr",align:null},"Sets the search debounce. Defaults to 200 ms")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"options.search")),Object(r.b)("td",{parentName:"tr",align:null},"boolean"),Object(r.b)("td",{parentName:"tr",align:null},"Used to disable the search bar, defaults to true")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"options.searchText")),Object(r.b)("td",{parentName:"tr",align:null},"'Search'"),Object(r.b)("td",{parentName:"tr",align:null},"The text to show as a hint for the empty search field")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"options.searchFieldAlignment")),Object(r.b)("td",{parentName:"tr",align:null},"'left' /'right'"),Object(r.b)("td",{parentName:"tr",align:null},"The position of the search text, defaults to 'right'")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"options.searchFieldStyle")),Object(r.b)("td",{parentName:"tr",align:null},"React.CSSProperties"),Object(r.b)("td",{parentName:"tr",align:null},"CSS props to style the input field")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"options.searchFieldVariant")),Object(r.b)("td",{parentName:"tr",align:null},"'standard' / 'filled'/ 'outlined'"),Object(r.b)("td",{parentName:"tr",align:null},"The variant of the input ",Object(r.b)("a",{parentName:"td",href:"https://mui.com/material-ui/react-text-field/#basic-textfield"},"Link"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"options.searchAutoFocus")),Object(r.b)("td",{parentName:"tr",align:null},"boolean"),Object(r.b)("td",{parentName:"tr",align:null},"Focuses the input on render")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"column.customFilterAndSearch")),Object(r.b)("td",{parentName:"tr",align:null},"( filter: string, rowData: RowData, columnDef: Column) => boolean;"),Object(r.b)("td",{parentName:"tr",align:null},"Optional function to override the default search and filter of each column")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"options.searchable")),Object(r.b)("td",{parentName:"tr",align:null},"boolean"),Object(r.b)("td",{parentName:"tr",align:null},"Possibility to disable the search for this column")))))}b.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return N}));var a=n(0),r=n.n(a);n(20);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}var i=n(189),c=n(848);var o="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",b=n(163);var s=function(e){const{children:t,theme:n}=e,r=Object(c.a)(),s=a.useMemo((()=>{const e=null===r?n:function(e,t){if("function"==typeof t)return t(e);return l({},e,t)}(r,n);return null!=e&&(e[o]=null!==r),e}),[n,r]);return Object(b.jsx)(i.a.Provider,{value:s,children:t})},d=n(236),u=n(191);const m={};function p(e){const t=Object(u.a)();return Object(b.jsx)(d.b.Provider,{value:"object"==typeof t?t:m,children:e.children})}var h=function(e){const{children:t,theme:n}=e;return Object(b.jsx)(s,{theme:n,children:Object(b.jsx)(p,{children:t})})},j=n(740);const O=e=>{let{type:t,children:n}=e,a=t;return"tip"===t&&(a="success"),"note"===t&&(a="secondary"),r.a.createElement(h,{theme:Object(j.a)()},r.a.createElement("div",{className:`admonition admonition-${t} alert alert--${a}`},r.a.createElement("div",{className:"admonition-heading"},r.a.createElement("h5",null,r.a.createElement("span",{className:"admonition-icon"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),t.toLowerCase())),r.a.createElement("div",{className:"admonition-content"},r.a.createElement("p",null,n))))},N=()=>r.a.createElement(O,{type:"note"},"See"," ",r.a.createElement("a",{href:"/demos/#demo-environment"},r.a.createElement("b",null,r.a.createElement("i",null,"here")))," ","for more on the ",r.a.createElement("code",null,"GLOBAL_VARS")," we use in our demos")}}]);