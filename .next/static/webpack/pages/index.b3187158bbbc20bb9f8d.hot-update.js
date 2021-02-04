webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\steve.oh\\Desktop\\nextJs\\next-app\\pages\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var App = function App() {
  _s();

  //const [name, setName] = useState('');
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      userName = _useState[0],
      setUserName = _useState[1]; //const router = useRouter();


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      children: ["userName", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        value: userName,
        onChange: function onChange(e) {
          return setUserName(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: [userName, " \uAE43\uD5C8\uBE0C \uAC80\uC0C9\uD558\uAE30"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/users/".concat(userName),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: "Search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

_s(App, "JIezBiY3Im0GvB+UajE6gBj8PwE=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkFwcCIsInVzZVN0YXRlIiwidXNlck5hbWUiLCJzZXRVc2VyTmFtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQ2hCO0FBRGdCLGtCQUVnQkMsc0RBQVEsQ0FBQyxFQUFELENBRnhCO0FBQUEsTUFFVEMsUUFGUztBQUFBLE1BRUNDLFdBRkQsaUJBR2hCOzs7QUFDQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsMENBRUU7QUFBTyxhQUFLLEVBQUVELFFBQWQ7QUFBd0IsZ0JBQVEsRUFBRSxrQkFBQ0UsQ0FBRDtBQUFBLGlCQUFPRCxXQUFXLENBQUNDLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUE7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBS0U7QUFBQSxpQkFBSUosUUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQU1FLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxtQkFBWUEsUUFBWixDQUFWO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErQkQsQ0FuQ0Q7O0dBQU1GLEc7O0tBQUFBLEc7QUFxQ1NBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIzMTg3MTU4YmJiYzIwYmI5ZjhkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gIC8vY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt1c2VyTmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIC8vY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxsYWJlbD5cclxuICAgICAgICB1c2VyTmFtZVxyXG4gICAgICAgIDxpbnB1dCB2YWx1ZT17dXNlck5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlck5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8cD57dXNlck5hbWV9IOq5g+2XiOu4jCDqsoDsg4ntlZjquLA8L3A+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2AvdXNlcnMvJHt1c2VyTmFtZX1gfT5cclxuICAgICAgICA8YT5TZWFyY2g8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgey8qIDxpbWcgc3JjPVwiL2NoZWVzZS5qcGdcIiBhbHQ9XCJDaGVlc2VcIiAvPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3RvbWF0bycpfT5cclxuICAgICAgICBUb21hdG9cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxwPk5hbWU8L3A+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxMnB4JyB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3ZlZ2V0YWJsZS8ke25hbWV9YCl9PlxyXG4gICAgICAgIE5hbWXsnLzroZwg6rOg6rOgXHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPGgyPkxpbmsgdG8gJ3BvdGF0bycgUGFnZTwvaDI+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvdmVnZXRhYmxlL3BvdGF0b1wiPlxyXG4gICAgICAgIDxhPk1vdmUgdG8gJy92ZWdldGFibGUvcG90YXRvJzwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=