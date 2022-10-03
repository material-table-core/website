(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{161:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,f=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return n?o.a.createElement(f,l(l({ref:t},s),{},{components:n})):o.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=(n(0),n(161));n(174);const a={id:"outside-of-table",title:"Modify Row Selection State Outside of Table"},i={unversionedId:"selection/outside-of-table",id:"selection/outside-of-table",isDocsHomePage:!1,title:"Modify Row Selection State Outside of Table",description:"Notes",source:"@site/demos/selection/outside-of-table.mdx",slug:"/selection/outside-of-table",permalink:"/demos/selection/outside-of-table",version:"current",sidebar:"sidebar",previous:{title:"Persist Row Click Events",permalink:"/demos/selection/persist-events"},next:{title:"Basic Sorting",permalink:"/demos/sort/basic"}},l=[{value:"Notes",id:"notes",children:[]},{value:"Live Demo",id:"live-demo",children:[]}],c={toc:l};function s(e){let{components:t,...n}=e;return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"notes"},"Notes"),Object(o.b)("p",null,"Each row has internal state under a property called ",Object(o.b)("inlineCode",{parentName:"p"},"row.tableData"),"."),Object(o.b)("p",null,"You can handle a row's checked state via ",Object(o.b)("inlineCode",{parentName:"p"},"row.tableData.checked = bool")),Object(o.b)("p",null,"See the live demo below for more."),Object(o.b)("h2",{id:"live-demo"},"Live Demo"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function SelectOutsideOfTable() {\n  const [data, setData] = useState([\n    {\n      fruit: "Apple",\n      id: 0,\n    },\n    {\n      fruit: "Orange",\n      id: 1,\n    },\n  ]);\n\n  const toggleRowChecked = (row) => {\n    return (row.tableData && row.tableData.checked ? !row.tableData.checked : true);\n  }\n\n  const toggleSelectAll = () => {\n    const newData = data.map((row) => ({\n      ...row,\n      tableData: {\n        checked: toggleRowChecked(row),\n      },\n    }));\n    setData(newData);\n  };\n\n  const columns = [\n    {\n      title: "Fruit",\n      field: "fruit",\n    },\n    {\n      title: "ID",\n      field: "id",\n    },\n  ];\n\n  return (\n    <div>\n      <button onClick={toggleSelectAll}>Toggle Selection</button>\n      <MaterialTable\n        title="Select All External"\n        columns={columns}\n        data={data}\n        options={{\n          selection: true,\n        }}\n      />\n    </div>\n  );\n}\n')))}s.isMDXComponent=!0}}]);