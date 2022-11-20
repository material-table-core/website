(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{176:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n(0),a=n.n(r);n(20);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var o=n(189),i=n(848);var c="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",s=n(163);var m=function(e){const{children:t,theme:n}=e,a=Object(i.a)(),m=r.useMemo((()=>{const e=null===a?n:function(e,t){if("function"==typeof t)return t(e);return l({},e,t)}(a,n);return null!=e&&(e[c]=null!==a),e}),[n,a]);return Object(s.jsx)(o.a.Provider,{value:m,children:t})},u=n(236),d=n(191);const b={};function p(e){const t=Object(d.a)();return Object(s.jsx)(u.b.Provider,{value:"object"==typeof t?t:b,children:e.children})}var f=function(e){const{children:t,theme:n}=e;return Object(s.jsx)(m,{theme:n,children:Object(s.jsx)(p,{children:t})})},h=n(740);const j=e=>{let{type:t,children:n}=e,r=t;return"tip"===t&&(r="success"),"note"===t&&(r="secondary"),a.a.createElement(f,{theme:Object(h.a)()},a.a.createElement("div",{className:`admonition admonition-${t} alert alert--${r}`},a.a.createElement("div",{className:"admonition-heading"},a.a.createElement("h5",null,a.a.createElement("span",{className:"admonition-icon"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),t.toLowerCase())),a.a.createElement("div",{className:"admonition-content"},a.a.createElement("p",null,n))))},g=()=>a.a.createElement(j,{type:"note"},"See"," ",a.a.createElement("a",{href:"/demos/#demo-environment"},a.a.createElement("b",null,a.a.createElement("i",null,"here")))," ","for more on the ",a.a.createElement("code",null,"GLOBAL_VARS")," we use in our demos")},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var r=n(3),a=(n(0),n(164)),l=(n(182),n(176));const o={id:"custom-filter-row",title:"Custom Filter Row",hide_title:!0},i={unversionedId:"filter/custom-filter-row",id:"filter/custom-filter-row",isDocsHomePage:!1,title:"Custom Filter Row",description:"Custom Filter Row",source:"@site/demos/filter/custom-filter-row.mdx",slug:"/filter/custom-filter-row",permalink:"/demos/filter/custom-filter-row",version:"current",sidebar:"sidebar",previous:{title:"Custom Column Filter",permalink:"/demos/filter/custom-filter"},next:{title:"Basic Grouping",permalink:"/demos/group/basic"}},c=[{value:"Props",id:"props",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Live Demo",id:"live-demo",children:[]}],s={toc:c};function m(e){let{components:t,...n}=e;return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"custom-filter-row"},"Custom Filter Row"),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Field"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"options.filtering")),Object(a.b)("td",{parentName:"tr",align:null},"boolean"),Object(a.b)("td",{parentName:"tr",align:null},"display filter row on table")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"components.FilterRow")),Object(a.b)("td",{parentName:"tr",align:null},"React.Element"),Object(a.b)("td",{parentName:"tr",align:null},"custom filter component to display instead MTableFilterRow")))),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'import MaterialTable from "@material-table/core";\n\n<MaterialTable\n  // ...\n  options={{\n    filtering: true,\n  }}\n  components={{\n    FilterRow: () => <CustomFilterRow {...props} />,\n  }}\n/>;\n')),Object(a.b)("h2",{id:"live-demo"},"Live Demo"),Object(a.b)(l.a,{mdxType:"InfoBannerAboutGlobalVarsInDemos"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function CustomFilter() {\n  return (\n    <MaterialTable\n      data={[\n        {\n          name: "Mehmet",\n          surname: "Baran",\n          birthYear: 1987,\n          birthCity: 63,\n        },\n        {\n          name: "Zerya Bet\xfcl",\n          surname: "Baran",\n          birthYear: 2017,\n          birthCity: 34,\n        },\n      ]}\n      columns={[\n        {\n          title: "Name",\n          field: "name",\n        },\n        {\n          title: "Surname",\n          field: "surname",\n        },\n        {\n          title: "Birth Year",\n          field: "birthYear",\n          type: "numeric",\n        },\n        {\n          title: "Birth Place",\n          field: "birthCity",\n          lookup: {\n            34: "\u0130stanbul",\n            63: "\u015eanl\u0131urfa",\n          },\n        },\n      ]}\n      options={{\n        filtering: true,\n      }}\n      components={{\n        FilterRow: (rowProps) => {\n          const { columns, onFilterChanged } = rowProps;\n\n          return (\n            <>\n              <tr>\n                {columns.map((col) => {\n                  if (col.field) {\n                    return (\n                      <td>\n                        <input\n                          placeholder="custom filter"\n                          id={col.field}\n                          onChange={(e) => {\n                            console.log(e.target.id, e.target.value);\n                            onFilterChanged(col.tableData.id, e.target.value);\n                          }}\n                        />\n                      </td>\n                    );\n                  }\n                })}\n              </tr>\n            </>\n          );\n        },\n      }}\n    />\n  );\n}\n')))}m.isMDXComponent=!0}}]);