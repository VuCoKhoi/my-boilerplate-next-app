webpackHotUpdate("static/development/pages/index.js",{

/***/ "./HOC/BlockIframe.js":
/*!****************************!*\
  !*** ./HOC/BlockIframe.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function BlockIframe(Comp) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (window.top !== window.self) window.top.location.replace(window.self.location.href);
  }, []);
  return Comp;
}

/* harmony default export */ __webpack_exports__["default"] = (BlockIframe);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HOC_BlockIframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HOC/BlockIframe */ "./HOC/BlockIframe.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Home = function Home() {
  return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Home")), __jsx("div", {
    className: "hero"
  }, __jsx("h1", {
    className: "title"
  }, "Welcome to Next.js!"), __jsx("p", {
    className: "description"
  }, "To get started, edit", __jsx("code", null, "pages/index.js"), "and save to reload."), __jsx("div", {
    className: "row"
  }, __jsx("a", {
    href: "https://nextjs.org/docs",
    className: "card"
  }, __jsx("h3", null, "Documentation \u2192"), __jsx("p", null, "Learn more about Next.js in the documentation.")), __jsx("a", {
    href: "https://nextjs.org/learn",
    className: "card"
  }, __jsx("h3", null, "Next.js Learn \u2192"), __jsx("p", null, "Learn about Next.js by following an interactive tutorial!")), __jsx("a", {
    href: "https://github.com/zeit/next.js/tree/master/examples",
    className: "card"
  }, __jsx("h3", null, "Examples \u2192"), __jsx("p", null, "Find other example boilerplates on the Next.js GitHub.")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_BlockIframe__WEBPACK_IMPORTED_MODULE_2__["default"])(Home));

/***/ })

})
//# sourceMappingURL=index.js.570b8da63da23f2edff7.hot-update.js.map