webpackHotUpdate("static/development/pages/index.js",{

/***/ "./HOC/BlockIframe.js":
false,

/***/ "./customUse/useBlockIframe.js":
/*!*************************************!*\
  !*** ./customUse/useBlockIframe.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useBlockIframe() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (window.top !== window.self) window.top.location.replace(window.self.location.href);
  }, []);
}

/* harmony default export */ __webpack_exports__["default"] = (useBlockIframe);

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
/* harmony import */ var _customUse_useBlockIframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customUse/useBlockIframe */ "./customUse/useBlockIframe.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Home = function Home() {
  Object(_customUse_useBlockIframe__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Home")), __jsx("div", null, "boilerplate - power by khoivc"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.3a1e4f52273cc3786eb5.hot-update.js.map