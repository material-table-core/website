(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{123:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return c}));var a=t(3),o=(t(0),t(161)),r=(t(174),t(172));const i={id:"basic",title:"Basic Pagination Demo",hide_title:!0},l={unversionedId:"pagination/basic",id:"pagination/basic",isDocsHomePage:!1,title:"Basic Pagination Demo",description:"Pagination",source:"@site/demos/pagination/basic.mdx",slug:"/pagination/basic",permalink:"/demos/pagination/basic",version:"current",sidebar:"sidebar",previous:{title:"Summary Row",permalink:"/demos/Summaryrow/basic"},next:{title:"Positioning Pagination Demo",permalink:"/demos/pagination/positioning"}},s=[{value:"Props",id:"props",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Live Demo",id:"live-demo",children:[]}],p={toc:s};function c(e){let{components:n,...t}=e;return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"pagination"},"Pagination"),Object(o.b)("p",null,"The table has built in pagination. This is enabled by default. Several props are available to adjust the pagination."),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Field"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"options.paging")),Object(o.b)("td",{parentName:"tr",align:null},"boolean"),Object(o.b)("td",{parentName:"tr",align:null},"Toggle pagination")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"options.emptyRowsWhenPaging")),Object(o.b)("td",{parentName:"tr",align:null},"boolean"),Object(o.b)("td",{parentName:"tr",align:null},"If a page does not contain enough data to fill all rows, should the rows be displayed")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"options.paginationType")),Object(o.b)("td",{parentName:"tr",align:null},"'normal' /'stepped'"),Object(o.b)("td",{parentName:"tr",align:null},"Toggle between the default mui pagination or a stepped pagination")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"options.paginationPosition")),Object(o.b)("td",{parentName:"tr",align:null},"'bottom' /'top' / 'both'"),Object(o.b)("td",{parentName:"tr",align:null},"Adjusts the pagination position in relation to the body")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"options.numberOfPagesAround")),Object(o.b)("td",{parentName:"tr",align:null},"1 - 10"),Object(o.b)("td",{parentName:"tr",align:null},"In combination with the stepped pagination adjusts the pages around current page")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"localization")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://github.com/material-table-core/core/blob/master/types/index.d.ts#L439"},"The texts")),Object(o.b)("td",{parentName:"tr",align:null},"The text displayed on hover over the pagination elements")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"showFirstLastPageButtons")),Object(o.b)("td",{parentName:"tr",align:null},"boolean or Partial<{ first: boolean; last: boolean }>"),Object(o.b)("td",{parentName:"tr",align:null},"Controls the first and last buttons for pagination, defaults to true")))),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'import MaterialTable from "@material-table/core";\n\n<MaterialTable\n  // ...\n  options={{ paginationType: "stepped", paginationPosition: "top" }}\n/>;\n')),Object(o.b)("h2",{id:"live-demo"},"Live Demo"),Object(o.b)(r.a,{mdxType:"InfoBannerAboutGlobalVarsInDemos"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function PaginationDemo() {\n  const showFirstLastPageButtonsStates = {\n    all: true,\n    first: { last: false },\n    last: { first: false },\n    none: false,\n  };\n  const [\n    {\n      paging,\n      emptyRowsWhenPaging,\n      paginationType,\n      numberOfPagesAround,\n      paginationPosition,\n      showFirstLastPageButtonsState,\n    },\n    setOptions,\n  ] = React.useState({\n    paging: true,\n    emptyRowsWhenPaging: true,\n    paginationType: "normal",\n    paginationPosition: "bottom",\n    numberOfPagesAround: 1,\n    showFirstLastPageButtonsState: "all",\n  });\n\n  const showFirstLastPageButtons =\n    showFirstLastPageButtonsStates[showFirstLastPageButtonsState];\n  return (\n    <>\n      <FormGroup>\n        <FormControlLabel\n          control={\n            <Switch\n              checked={paging}\n              onChange={(e) => {\n                setOptions((prev) => ({ ...prev, paging: e.target.checked }));\n              }}\n            />\n          }\n          label="Paging"\n        />\n        <FormControlLabel\n          control={\n            <Switch\n              checked={emptyRowsWhenPaging}\n              onChange={(e) => {\n                setOptions((prev) => ({\n                  ...prev,\n                  emptyRowsWhenPaging: e.target.checked,\n                }));\n              }}\n            />\n          }\n          label="Empty Rows When Paging"\n        />\n        <Button\n          variant="contained"\n          sx={{ mb: 1 }}\n          onClick={() => {\n            setOptions(({ paginationPosition: prevPos, ...prev }) => ({\n              ...prev,\n              paginationPosition:\n                prevPos === "bottom"\n                  ? "top"\n                  : prevPos === "top"\n                  ? "both"\n                  : "bottom",\n            }));\n          }}\n        >\n          Pagination Position: {paginationPosition}\n        </Button>\n        <Button\n          variant="contained"\n          sx={{ mb: 1 }}\n          onClick={() => {\n            setOptions(({ paginationType: prevType, ...prev }) => ({\n              ...prev,\n              paginationType: prevType === "normal" ? "stepped" : "normal",\n            }));\n          }}\n        >\n          Pagination Type: {paginationType}\n        </Button>\n        {paginationType === "stepped" ? (\n          <Button\n            variant="contained"\n            sx={{ mb: 1 }}\n            onClick={() => {\n              setOptions(({ numberOfPagesAround: prevPages, ...prev }) => ({\n                ...prev,\n                numberOfPagesAround: Math.max((prevPages + 1) % 11, 1),\n              }));\n            }}\n          >\n            Number Of Pages Around: {numberOfPagesAround}\n          </Button>\n        ) : null}\n      </FormGroup>\n      <FormControl>\n        <FormLabel id="demo-controlled-radio-buttons-group">\n          Show First/Last Buttons\n        </FormLabel>\n        <RadioGroup\n          row={true}\n          name="controlled-radio-buttons-group"\n          value={showFirstLastPageButtonsState}\n          onChange={(e) => {\n            setOptions((prev) => ({\n              ...prev,\n              showFirstLastPageButtonsState: e.target.value,\n            }));\n          }}\n        >\n          <FormControlLabel value="all" control={<Radio />} label="All" />\n          <FormControlLabel value="none" control={<Radio />} label="None" />\n          <FormControlLabel\n            value="first"\n            control={<Radio />}\n            label="First only"\n          />\n          <FormControlLabel\n            value="last"\n            control={<Radio />}\n            label="Last Only"\n          />\n        </RadioGroup>\n      </FormControl>\n      <MaterialTable\n        data={Array(50)\n          .fill()\n          .map((_, i) => ({ id: i, name: `name ${i + 1}` }))}\n        columns={DEMO_COLS}\n        options={{\n          paging,\n          emptyRowsWhenPaging,\n          paginationType,\n          numberOfPagesAround,\n          paginationPosition,\n          showFirstLastPageButtons,\n        }}\n      />\n    </>\n  );\n}\n')))}c.isMDXComponent=!0},161:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),c=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=c(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=c(t),m=a,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||r;return t?o.a.createElement(d,l(l({ref:n},p),{},{components:t})):o.a.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},172:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),o=t.n(a),r=(t(20),t(778)),i=t(237);const l=e=>{let{type:n,children:t}=e,a=n;return"tip"===n&&(a="success"),"note"===n&&(a="secondary"),o.a.createElement(r.a,{theme:Object(i.b)()},o.a.createElement("div",{className:`admonition admonition-${n} alert alert--${a}`},o.a.createElement("div",{className:"admonition-heading"},o.a.createElement("h5",null,o.a.createElement("span",{className:"admonition-icon"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),n.toLowerCase())),o.a.createElement("div",{className:"admonition-content"},o.a.createElement("p",null,t))))},s=()=>o.a.createElement(l,{type:"note"},"See"," ",o.a.createElement("a",{href:"/demos/#demo-environment"},o.a.createElement("b",null,o.a.createElement("i",null,"here")))," ","for more on the ",o.a.createElement("code",null,"GLOBAL_VARS")," we use in our demos")}}]);