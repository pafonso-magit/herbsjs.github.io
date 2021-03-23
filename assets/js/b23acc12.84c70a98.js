(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{103:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),s=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=s.a.createContext({}),u=function(e){var t=s.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=s.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||a;return r?s.a.createElement(m,c(c({ref:t},l),{},{components:r})):s.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return u}));var n=r(3),s=r(7),a=(r(0),r(103)),i={id:"herbs2rpl",title:"Herbs2rpl",sidebar_label:"Herbs2rpl",slug:"/glues/herbs2rpl"},c={unversionedId:"glues/herbs2rpl",id:"glues/herbs2rpl",isDocsHomePage:!1,title:"Herbs2rpl",description:"Herbs REPL",source:"@site/docs/glues/herbs2repl.md",slug:"/glues/herbs2rpl",permalink:"/docs/glues/herbs2rpl",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/glues/herbs2repl.md",version:"current",sidebar_label:"Herbs2rpl",sidebar:"sidebar",previous:{title:"Herbsshelf",permalink:"/docs/glues/herbsshelf"}},o=[{value:"Getting started",id:"getting-started",children:[{value:"Installing",id:"installing",children:[]},{value:"Using",id:"using",children:[]}]},{value:"Contribute",id:"contribute",children:[]},{value:"License",id:"license",children:[]}],l={toc:o};function u(e){var t=e.components,r=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/herbsjs/herbs2repl/main/doc/render1607020056527.gif",alt:"Herbs REPL"})),Object(a.b)("h2",{id:"getting-started"},"Getting started"),Object(a.b)("h3",{id:"installing"},"Installing"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"$ npm install herbs2repl\n")),Object(a.b)("h3",{id:"using"},"Using"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"srs/domain/usecases/_uclist.js"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"module.exports = (injection) => {\n    return [\n        { usecase: require('./createItem').createItem(injection), tags: { group: 'Items' } },\n        { usecase: require('./updateItem').updateItem(injection), tags: { group: 'Items' } },\n        ...\n     ]\n}\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"srs/infra/repl/index.js"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const usecases = require('../../domain/usecases/_uclist')\nconst repl = require('herbs2repl')\n\nconst main = async (injection) => {\n    \n    // list of all use cases, initialized\n    const ucs = usecases(injection)\n\n    // your user for the REPL session\n    const user = {\n        canAddItem: true, canCreateList: true, canDeteleList: false,\n        canGetLists: true, canUpdateItem: true, canUpdateList: true\n    }\n\n    repl(ucs, user, {groupBy: \"group\"})\n}\n\nmain().then()\n")),Object(a.b)("p",null,"Then run on your terminal:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"}," $ node ./src/infra/repl\n")),Object(a.b)("h2",{id:"contribute"},"Contribute"),Object(a.b)("p",null,"Come with us to make an awesome ",Object(a.b)("em",{parentName:"p"},"herbs2repl"),"."),Object(a.b)("p",null,"Now, if you do not have the technical knowledge and also have intended to help us, do not feel shy, ",Object(a.b)("a",{parentName:"p",href:"https://github.com/herbsjs/herbs2repl/issues"},"click here")," to open an issue and collaborate their ideas, the contribution may be a criticism or a compliment (why not?)"),Object(a.b)("p",null,"If you would like to help contribute to this repository, please see ",Object(a.b)("a",{parentName:"p",href:"https://github.com/herbsjs/herbs2repl/blob/main/.github/CONTRIBUTING.md"},"CONTRIBUTING")),Object(a.b)("h2",{id:"license"},"License"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"herbsshelf")," is released under the\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/herbsjs/herbs2repl/blob/main/LICENSE.md"},"MIT license")))}u.isMDXComponent=!0}}]);