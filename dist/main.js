"use strict";
(self["webpackChunktree_shaking"] = self["webpackChunktree_shaking"] || []).push([[179],{

/***/ 554:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(935);
;// CONCATENATED MODULE: ./src/components/foo.tsx

var Foo = function () { return react.createElement("div", null, "Foo"); };

;// CONCATENATED MODULE: ./src/components/bar.tsx

var Bar = function () { return React.createElement("div", null, "BAR"); };

;// CONCATENATED MODULE: ./src/components/index.ts




;// CONCATENATED MODULE: ./src/utils/foo.ts
function foo() {
    console.log("Foo");
}

;// CONCATENATED MODULE: ./src/app.tsx



var App = function () {
    foo();
    return react.createElement(Foo, null, "App");
};

;// CONCATENATED MODULE: ./src/index.tsx



var appContainer = document.createElement("div");
document.body.appendChild(appContainer);
react_dom.render(react.createElement(App, null), appContainer);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [216], () => (__webpack_exec__(554)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);