(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,b=s["".concat(i,".").concat(m)]||s[m]||d[m]||c;return t?o.a.createElement(b,a(a({ref:n},l),{},{components:t})):o.a.createElement(b,a({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=m;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<c;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},66:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),c=(t(0),t(148)),i={id:"columns",title:"columns"},a={unversionedId:"api/props/columns",id:"api/props/columns",isDocsHomePage:!1,title:"columns",description:"Props for MaterialTable.columns objects.",source:"@site/docs/api/props/columns.md",slug:"/api/props/columns",permalink:"/docs/api/props/columns",editUrl:"https://github.com/material-table-core/website/tree/master/docs/api/props/columns.md",version:"current",sidebar:"docs",previous:{title:"actions",permalink:"/docs/api/props/mt_prop_actions"},next:{title:"components",permalink:"/docs/api/props/mt_prop_components"}},p=[{value:"<code>hidden</code>",id:"hidden",children:[]},{value:"<code>hiddenByColumnsButton</code>",id:"hiddenbycolumnsbutton",children:[]},{value:"<code>filterComponent</code>",id:"filtercomponent",children:[]}],l={toc:p};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Props for ",Object(c.b)("inlineCode",{parentName:"p"},"MaterialTable.columns")," objects."),Object(c.b)("h2",{id:"hidden"},Object(c.b)("inlineCode",{parentName:"h2"},"hidden")),Object(c.b)("p",null,"Hide from table"),Object(c.b)("h2",{id:"hiddenbycolumnsbutton"},Object(c.b)("inlineCode",{parentName:"h2"},"hiddenByColumnsButton")),Object(c.b)("p",null,"Hide from column selection action menu"),Object(c.b)("h2",{id:"filtercomponent"},Object(c.b)("inlineCode",{parentName:"h2"},"filterComponent")),Object(c.b)("p",null,"Custom component for filtering"),Object(c.b)("p",null,"Signature: ({ columnDef,  onFilterChanged }) => ReactElement"))}u.isMDXComponent=!0}}]);