(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=(n(0),n(161)),o=(n(174),n(172));const c={id:"on-row-click",title:"Select On Row Click"},i={unversionedId:"selection/on-row-click",id:"selection/on-row-click",isDocsHomePage:!1,title:"Select On Row Click",description:"Usage",source:"@site/demos/selection/on-row-click.mdx",slug:"/selection/on-row-click",permalink:"/demos/selection/on-row-click",version:"current",sidebar:"sidebar",previous:{title:"Basic Selection",permalink:"/demos/selection/basic"},next:{title:"Persist Row Click Events",permalink:"/demos/selection/persist-events"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Live Demo",id:"live-demo",children:[]}],s={toc:l};function p(e){let{components:t,...n}=e;return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'import MaterialTable from "@material-table/core";\n\n<MaterialTable\n  // ...\n  components={{\n    Row: (props) => {\n      return <MTableBodyRow {...props} onRowClick={onRowClicked} />;\n    },\n  }}\n  options={{\n    selection: true,\n  }}\n/>;\n')),Object(a.b)("h2",{id:"live-demo"},"Live Demo"),Object(a.b)(o.a,{mdxType:"InfoBannerAboutGlobalVarsInDemos"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function SelectionOnRowClick() {\n  const [data, setData] = useState(SELECTION_DATA);\n\n  return (\n    <MaterialTable\n      data={data}\n      columns={SELECTION_COLS}\n      options={{\n        selection: true,\n      }}\n      onRowClick={(event, rowData) => {\n        // Copy row data and set checked state\n        const rowDataCopy = { ...rowData };\n        rowDataCopy.tableData.checked = !rowDataCopy.tableData.checked;\n        // Copy data so we can modify it\n        const dataCopy = [...data];\n        // Find the row we clicked and update it with `checked` prop\n        dataCopy[rowDataCopy.tableData.id] = rowDataCopy;\n        setData(dataCopy);\n      }}\n    />\n  );\n}\n")))}p.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(b,i(i({ref:t},s),{},{components:n})):a.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),o=(n(20),n(778)),c=n(237);const i=e=>{let{type:t,children:n}=e,r=t;return"tip"===t&&(r="success"),"note"===t&&(r="secondary"),a.a.createElement(o.a,{theme:Object(c.b)()},a.a.createElement("div",{className:`admonition admonition-${t} alert alert--${r}`},a.a.createElement("div",{className:"admonition-heading"},a.a.createElement("h5",null,a.a.createElement("span",{className:"admonition-icon"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),t.toLowerCase())),a.a.createElement("div",{className:"admonition-content"},a.a.createElement("p",null,n))))},l=()=>a.a.createElement(i,{type:"note"},"See"," ",a.a.createElement("a",{href:"/demos/#demo-environment"},a.a.createElement("b",null,a.a.createElement("i",null,"here")))," ","for more on the ",a.a.createElement("code",null,"GLOBAL_VARS")," we use in our demos")}}]);