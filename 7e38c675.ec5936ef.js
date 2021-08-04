(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{109:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return r})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return d}));var a=t(3),i=t(7),o=(t(0),t(150)),s=(t(163),t(156)),c={id:"persist-events",title:"Persist Row Click Events"},r={unversionedId:"selection/persist-events",id:"selection/persist-events",isDocsHomePage:!1,title:"Persist Row Click Events",description:"Usage",source:"@site/demos/selection/persist-events.mdx",slug:"/selection/persist-events",permalink:"/demos/selection/persist-events",version:"current",sidebar:"sidebar",previous:{title:"Select On Row Click",permalink:"/demos/selection/on-row-click"},next:{title:"Basic Sorting",permalink:"/demos/sort/basic"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Live Demo",id:"live-demo",children:[]}],m={toc:l};function d(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You can persist ",Object(o.b)("inlineCode",{parentName:"p"},"onRowClick"),", or ",Object(o.b)("inlineCode",{parentName:"p"},"onRowDoubleClick")," events, if you need access to things like ",Object(o.b)("inlineCode",{parentName:"p"},"event.target")))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You must be on version >=4.1.0 to use the ",Object(o.b)("inlineCode",{parentName:"p"},"persistEvents")," prop!"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import MaterialTable, { MTableBodyRow } from '@material-table/core';\n\n<MaterialTable\n  // ...\n  options={{\n    selection: true,\n  }}\n  components={{\n    Row: (props) => {\n      return (\n        <MTableBodyRow \n          {...props} \n          persistEvents \n          onRowClick={handleClick} \n          /* onRowDoubleClick={...} */ \n        />;\n      );\n    },\n  }}\n/>;\n")),Object(o.b)("h2",{id:"live-demo"},"Live Demo"),Object(o.b)(s.a,{mdxType:"InfoBannerAboutGlobalVarsInDemos"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"function PersistEventsOnRowClick() {\n  const handleClick = (event, rowData) => {\n    alert(`event.target.tagName = '${event.target.tagName}'`);\n  } \n\n  return (\n    <MaterialTable\n      title={\"Click a Row\"}\n      data={SELECTION_DATA}\n      columns={SELECTION_COLS}\n      icons={TABLE_ICONS}\n      components={{\n        Row: (props) => {\n          return <MTableBodyRow {...props} persistEvents onRowClick={handleClick} />;\n        },\n      }}\n    />\n  );\n}\n")))}d.isMDXComponent=!0},156:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),i=t.n(a),o=(t(22),function(e){var n=e.type,t=e.children,a=n;return"tip"===n&&(a="success"),"note"===n&&(a="secondary"),i.a.createElement("div",{className:"admonition admonition-"+n+" alert alert--"+a},i.a.createElement("div",{className:"admonition-heading"},i.a.createElement("h5",null,i.a.createElement("span",{className:"admonition-icon"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),n.toLowerCase())),i.a.createElement("div",{className:"admonition-content"},i.a.createElement("p",null,t)))}),s=function(){return i.a.createElement(o,{type:"note"},"See ",i.a.createElement("a",{href:"/demos/#demo-environment"},i.a.createElement("b",null,i.a.createElement("i",null,"here")))," for more on the ",i.a.createElement("code",null,"GLOBAL_VARS")," we use in our demos")}}}]);