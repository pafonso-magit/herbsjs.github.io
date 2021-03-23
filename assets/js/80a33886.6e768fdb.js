(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),o=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=o(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=o(n),m=a,u=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return n?i.a.createElement(u,s(s({ref:t},b),{},{components:n})):i.a.createElement(u,s({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var b=2;b<r;b++)c[b]=n[b];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return o}));var a=n(3),i=n(7),r=(n(0),n(103)),c={id:"herbs2knex",title:"Herbs2knex",sidebar_label:"herbs2knex",slug:"/glues/Herbs2knex"},s={unversionedId:"glues/herbs2knex",id:"glues/herbs2knex",isDocsHomePage:!1,title:"Herbs2knex",description:"herbs2knex",source:"@site/docs/glues/herbs2knex.md",slug:"/glues/Herbs2knex",permalink:"/docs/glues/Herbs2knex",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/glues/herbs2knex.md",version:"current",sidebar_label:"herbs2knex",sidebar:"sidebar",previous:{title:"Herbs2gql",permalink:"/docs/glues/herbs2gql"},next:{title:"Herbsshelf",permalink:"/docs/glues/herbsshelf"}},l=[{value:"Installing",id:"installing",children:[]},{value:"Using",id:"using",children:[]},{value:"What is a Repository?",id:"what-is-a-repository",children:[]},{value:"Herbs2knex Repository",id:"herbs2knex-repository",children:[]},{value:"Why Knex?",id:"why-knex",children:[]},{value:"Repository setup",id:"repository-setup",children:[]},{value:"Retrieving and Persisting Data",id:"retrieving-and-persisting-data",children:[{value:"<code>findByID</code>",id:"findbyid",children:[]},{value:"<code>findBy</code>",id:"findby",children:[]},{value:"<code>insert</code>",id:"insert",children:[]},{value:"<code>update</code>",id:"update",children:[]},{value:"<code>delete</code>",id:"delete",children:[]},{value:"Conventions - Defaul implementation",id:"conventions---defaul-implementation",children:[]},{value:"Object-Oriented versus Relational models - Relationships",id:"object-oriented-versus-relational-models---relationships",children:[]}]},{value:"TODO",id:"todo",children:[]}],b={toc:l};function o(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"herbs2knex"},"herbs2knex"),Object(r.b)("p",null,"herbs2knex creates repositories to retrieve and store ",Object(r.b)("a",{parentName:"p",href:"https://github.com/herbsjs/gotu"},"Entities")," using ",Object(r.b)("a",{parentName:"p",href:"http://knexjs.org"},"Knex"),"."),Object(r.b)("h3",{id:"installing"},"Installing"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ npm install herbs2knex\n")),Object(r.b)("h3",{id:"using"},"Using"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"connection.js")," - Knex initialization:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const knex = require('knex')\nconst config = require('./config')\nmodule.exports = knex(config)\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"itemRepository.js"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const { Repository } = require('herbs2knex')\nconst connection = require('connection')\nconst { Item } = require('../domain/entities/item')\n\nclass ItemRepository extends Repository {\n    constructor() {\n        super({\n            entity: Item,\n            table: 'aTable',\n            ids: ['id'],\n            knex: connection\n        })\n    }\n\n    excludedItemFromLastWeek() {\n        ...\n    }\n}\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"someUsecase.js"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const repo = new ItemRepository()\nconst ret = await repo.findByID(1)\n")),Object(r.b)("h3",{id:"what-is-a-repository"},"What is a Repository?"),Object(r.b)("p",null,"A repository, by ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain-driven_design#Building_blocks"},"definition"),", is part of the layer to retrieve and store entities abstracting the underlying implementation. By using repositories, details of these implementation such as relational database, document-oriented databases, etc, should not leak to the domain code. In other words, no raw SQL queries on your use case or entity files."),Object(r.b)("h3",{id:"herbs2knex-repository"},"Herbs2knex Repository"),Object(r.b)("p",null,"In order to boost productivity Herbs2knex provides way to dynamically generate a repository class based on your Entities and other metadata. "),Object(r.b)("p",null,"These metadata are necessary to close the gap between OOP concepts and paradigms and those of relational databases. For example, it is necessary to specify primary keys and foreign keys as these information do not exist in the description of your domain."),Object(r.b)("p",null,"Following Herbs architecture principals it is not the intention of this lib to create yet another ORM or query builder but to create a bridge between your domain and an existing one (Knex)."),Object(r.b)("h3",{id:"why-knex"},"Why Knex?"),Object(r.b)("p",null,"Herbs2knex is just one of many bridges possible between Herbs and other packages."),Object(r.b)("p",null,"The advantage of using Knex is that is a simple and flexible SQL query builder. It also supports Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift. So you can build your system using these databases out of the box."),Object(r.b)("h3",{id:"repository-setup"},"Repository setup"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const { Repository } = require('herbs2knex')\nconst connection = require('connection')  // Knex initialize instance\nconst { ProductItem } = require('../domain/entities/productItem')\n\nclass YourRepository extends Repository {\n    constructor() {\n        super({\n            entity: ProductItem,\n            schema: 'main',\n            table: 'product_items',\n            ids: ['id'],\n            foreignKeys: [{ customerId: String }],\n            knex: connection\n        })\n    }\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"entity")," - The ",Object(r.b)("a",{parentName:"p",href:"https://github.com/herbsjs/gotu"},"Entity")," to be used as reference "),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"entity: ProductItem\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"schema")," - The schema to be used  "),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"schema: 'production'\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"table")," - The name of the table in database"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"table: 'product_items'\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"ids")," - Primary keys"),Object(r.b)("p",{parentName:"li"},"  Format: ",Object(r.b)("inlineCode",{parentName:"p"},"['fieldName', 'fieldName', ...]")),Object(r.b)("p",{parentName:"li"},"  There must be corresponding fields in the entity."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"ids: ['id']  // productItem.id\n")),Object(r.b)("p",{parentName:"li"},"  or for composite primary key: "),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"ids: [`customerId`, `productId`]  // productItem.customerId , productItem.productId\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"foreignKeys")," (optional) - Foreign keys for the database table"),Object(r.b)("p",{parentName:"li"},"  Usually there is no corresponding fields declared in the entity for foreign keys. That is the reason it is necessary to inform the name and the type of the fields."),Object(r.b)("p",{parentName:"li"},"  Format: ",Object(r.b)("inlineCode",{parentName:"p"},"[{ fieldName: Type }, { fieldName: Type }, ...]")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"foreignKeys: [{ customerId: String }]\n")),Object(r.b)("p",{parentName:"li"},"  The field names will te converted to a database names using conventions. Ex: ",Object(r.b)("inlineCode",{parentName:"p"},"customer_id"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"knex")," - Knex initialize instance"),Object(r.b)("p",{parentName:"li"},"  Check Knex ",Object(r.b)("a",{parentName:"p",href:"http://knexjs.org/#Installation-client"},"documentation")))),Object(r.b)("h2",{id:"retrieving-and-persisting-data"},"Retrieving and Persisting Data"),Object(r.b)("h3",{id:"findbyid"},Object(r.b)("inlineCode",{parentName:"h3"},"findByID")),Object(r.b)("p",null,"Find entities by IDs"),Object(r.b)("p",null,"Format: ",Object(r.b)("inlineCode",{parentName:"p"},".findByID(id)")," where ",Object(r.b)("inlineCode",{parentName:"p"},"id")," is a value or an array."),Object(r.b)("p",null,"Return: Entity array"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const repo = new ItemRepository(injection)\nconst ret = await repo.findByID(10)\n")),Object(r.b)("h3",{id:"findby"},Object(r.b)("inlineCode",{parentName:"h3"},"findBy")),Object(r.b)("p",null,"Find entities by any Entity field."),Object(r.b)("p",null,"Format: ",Object(r.b)("inlineCode",{parentName:"p"},".findBy(where)")," where ",Object(r.b)("inlineCode",{parentName:"p"},"where")," is a object containing ",Object(r.b)("inlineCode",{parentName:"p"},"{fieldName1: value1, fieldName2: value2, ...}")),Object(r.b)("p",null,"Return: Entity array"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'const repo = new ItemRepository(injection)\nconst ret = await repo.findBy({ name: ["Anne"] })\n')),Object(r.b)("h3",{id:"insert"},Object(r.b)("inlineCode",{parentName:"h3"},"insert")),Object(r.b)("p",null,"Insert an Entity into a table."),Object(r.b)("p",null,"Format: ",Object(r.b)("inlineCode",{parentName:"p"},".insert(entity)")," where ",Object(r.b)("inlineCode",{parentName:"p"},"entity")," is a Entity instance with values to be persisted."),Object(r.b)("p",null,"Return: The inserted entity with the values from database."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const repo = new ItemRepository(injection)\nconst ret = await repo.insert(aNewEntity)\n")),Object(r.b)("h3",{id:"update"},Object(r.b)("inlineCode",{parentName:"h3"},"update")),Object(r.b)("p",null,"Update an Entity."),Object(r.b)("p",null,"Format: ",Object(r.b)("inlineCode",{parentName:"p"},".update(entity)")," where ",Object(r.b)("inlineCode",{parentName:"p"},"entity")," is a Entity instance with values to be persisted."),Object(r.b)("p",null,"Return: The updated entity with the values from database."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const repo = new ItemRepository(injection)\nconst ret = await repo.update(aModifiedEntity)\n")),Object(r.b)("h3",{id:"delete"},Object(r.b)("inlineCode",{parentName:"h3"},"delete")),Object(r.b)("p",null,"Delete an Entity."),Object(r.b)("p",null,"Format: ",Object(r.b)("inlineCode",{parentName:"p"},".delete(entity)")," where ",Object(r.b)("inlineCode",{parentName:"p"},"entity")," is a Entity instance to be deleted."),Object(r.b)("p",null,"Return: ",Object(r.b)("inlineCode",{parentName:"p"},"true")," for success or ",Object(r.b)("inlineCode",{parentName:"p"},"false")," for error"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const repo = new ItemRepository(injection)\nconst ret = await repo.delete(entity)\n")),Object(r.b)("h3",{id:"conventions---defaul-implementation"},"Conventions - Defaul implementation"),Object(r.b)("h4",{id:"fields"},"Fields"),Object(r.b)("p",null,"Code: Camel Case - ex: ",Object(r.b)("inlineCode",{parentName:"p"},"productName")),Object(r.b)("p",null,"Database: Snake Case - ex: ",Object(r.b)("inlineCode",{parentName:"p"},"product_name")),Object(r.b)("h3",{id:"object-oriented-versus-relational-models---relationships"},"Object-Oriented versus Relational models - Relationships"),Object(r.b)("p",null,"An entity can define a reference for others entities but will not (and should not) define a foreign key. For instance:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"+------------------+         +------------------+         +------------------+\n|      Orders      |         |    OrderItems    |         |     Products     |\n+------------------+         +------------------+         +------------------+\n| id: int          |----\\    | id: int          |       --| id: int          |\n| customer_id: int |     ----| order_id: int    |  ----/  | name: string     |\n+------------------+         | product_id: int  |-/       +------------------+\n                            +------------------+                             \n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const Product = entity('Product', {\n    id: field(Number),\n    name: field(String),\n    ...\n})\n\nconst OrderItem = entity('Order Items', {\n    id: field(Number),\n    product: field(Product),    // optional\n    ...\n})\n\nconst Order = entity('Order', {\n    id: field(Number),\n    item: field([OrderItem]),     // optional\n    ...\n})\n")),Object(r.b)("p",null,"More about: ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Object%E2%80%93relational_impedance_mismatch"},"https://en.wikipedia.org/wiki/Object%E2%80%93relational_impedance_mismatch")),Object(r.b)("h2",{id:"todo"},"TODO"),Object(r.b)("ul",{className:"contains-task-list"},Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Allow only scalar types for queries (don't allow entity / object types)"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Allow to ommit schema's name")),Object(r.b)("p",null,"Features:"),Object(r.b)("ul",{className:"contains-task-list"},Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Be able to change the conventions (injection)"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Exclude / ignore fields on a sql statement"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Awareness of created/updated at/by fields"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Plug-and-play knex"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Easy access knex structure")),Object(r.b)("p",null,"Retrieving and Persist:"),Object(r.b)("ul",{className:"contains-task-list"},Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","insert",Object(r.b)("ul",{parentName:"li",className:"contains-task-list"},Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","batchs"))),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","update",Object(r.b)("ul",{parentName:"li",className:"contains-task-list"},Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","batchs"))),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","delete"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","persist (upsert)"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","find (ID)",Object(r.b)("ul",{parentName:"li",className:"contains-task-list"},Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","deal with entities / tables with multiples IDs"))),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","find by (any field)",Object(r.b)("ul",{parentName:"li",className:"contains-task-list"},Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","deal with entities / tables with multiples IDs"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","order by"))),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","find All",Object(r.b)("ul",{parentName:"li",className:"contains-task-list"},Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","order by"))),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","find with pages"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","first"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","last")),Object(r.b)("p",null,"Tests:"),Object(r.b)("ul",{className:"contains-task-list"},Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Pure JS"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Postgress"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Sql Server")))}o.isMDXComponent=!0}}]);