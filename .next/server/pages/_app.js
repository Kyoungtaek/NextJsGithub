module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("YNMu");


/***/ }),

/***/ "2yjL":
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "YNMu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-icons/io"
var io_ = __webpack_require__("2yjL");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/Header.jsx






const HeaderCss = [".header-wrapper.jsx-296791562{padding:14px 14px;background-color:#24292e;line-height:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".header-search-form.jsx-296791562 input.jsx-296791562{margin:0px 16px;background-color:hsla(0,0%,100%,0.125);width:300px;height:28px;border:none;border-radius:5px;outline:none;color:white;padding:0px 12px;font-size:14px;font-weight:bold;}", ".header-navagations.jsx-296791562 a.jsx-296791562{color:white;margin-right:16px;font-size:14px;font-weight:bold;-webkit-text-decoration:none;text-decoration:none;}"];
HeaderCss.__hash = "296791562";

const Header = () => {
  const {
    0: username,
    1: setUsername
  } = Object(external_react_["useState"])('');
  const router = Object(router_["useRouter"])();

  const onSubmit = e => {
    e.preventDefault();
    router.push(`/users/${username}`);
    setUsername('');
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: `jsx-${HeaderCss.__hash}`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `jsx-${HeaderCss.__hash}` + " " + "header-wrapper",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(io_["IoLogoGithub"], {
        color: "white",
        size: 36
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("form", {
        onSubmit: onSubmit,
        className: `jsx-${HeaderCss.__hash}` + " " + "header-search-form",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          value: username,
          onChange: e => setUsername(e.target.value),
          className: `jsx-${HeaderCss.__hash}`
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("nav", {
        className: `jsx-${HeaderCss.__hash}` + " " + "header-navagations",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "https://github.com/pulls",
          className: `jsx-${HeaderCss.__hash}`,
          children: "Pull requests"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "https://github.com/issues",
          className: `jsx-${HeaderCss.__hash}`,
          children: "Issues"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "https://github.com/marketplace",
          className: `jsx-${HeaderCss.__hash}`,
          children: "Marketplace"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "https://github.com/explore",
          className: `jsx-${HeaderCss.__hash}`,
          children: "Explore"
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(style_default.a, {
      id: HeaderCss.__hash,
      children: HeaderCss
    })]
  });
};

/* harmony default export */ var components_Header = (Header);
// CONCATENATED MODULE: ./pages/_app.jsx





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const MyApp = ({
  Component,
  pageProps
}) => {
  Object(external_react_["useEffect"])(() => {
    throw Error();
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Header, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
      className: "jsx-903634984" + " " + (pageProps && pageProps.className != null && pageProps.className || "")
    })), /*#__PURE__*/Object(jsx_runtime_["jsx"])(style_default.a, {
      id: "903634984",
      children: ["body{margin:0;font-family:Noto Sans,Noto Sans KR;}"]
    })]
  });
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });