!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.rtwCore=t():e.rtwCore=t()}(window,function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=r(2);t.externals=n.default;var s=r(3);t.sum=s.sum,function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(4)),t.library=o.library},function(e){e.exports={name:"@wx/rtw-core",version:"0.0.1",description:"@wx/rtw-core",repository:{type:"git",url:"https://github.com/wxyyxc1992/fe-boilerplate"},library:"rtwCore",license:"MIT",main:"dist/cjs/index.js",module:"dist/es/index.js",types:"dist/types/index.d.ts",keywords:["webpack","react"],author:"wxyyxc1992@github",prettier:{printWidth:100,singleQuote:!0},"lint-staged":{"*.{ts,tsx,scss,less,md}":["prettier --write","git add"]},scripts:{clean:"rimraf dist",build:"npm run build:es && npm run build:cjs && npm run build:umd","build:es":"tsc --project ./tsconfig.es.json","build:cjs":"tsc --project ./tsconfig.cjs.json",dev:"tsc -w --project ./tsconfig.es.json","build:umd":"webpack --config ./scripts/webpack/webpack.config.umd.js",test:"jest --config ./scripts/jest/jest.config.js","test:watch":"npm test -- --watch","test:cov":"npm run cleanCov && npm test -- --coverage"},dependencies:{"prop-types":"^15.6.2",react:"^16.7.0","react-dom":"^16.7.0"},devDependencies:{"ts-jest":"^23.10.5",typescript:"^3.2.2",webpack:"^4.28.3","webpack-dev-server":"^3.1.14"},files:["dist/"]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={"@wx/rtw-core":"rtwCore",react:{commonjs:"react",commonjs2:"react",amd:"React",root:"React"},"react-dom":{commonjs:"react-dom",commonjs2:"react-dom",amd:"ReactDOM",root:"ReactDOM"},"styled-components":{commonjs:"styled-components",commonjs2:"styled-components"}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sum=function(e,t){return e+t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.logError=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];console.log.apply(console,e)}}])});