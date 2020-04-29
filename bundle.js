/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./src/assets/sass/main.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js??ref--4-3!./src/assets/sass/main.scss ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../font/Abel-Regular.ttf */ "./src/assets/font/Abel-Regular.ttf");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../images/arrow.svg */ "./src/assets/images/arrow.svg");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../images/aim.svg */ "./src/assets/images/aim.svg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Abel\", sans-serif;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\");\n  font-weight: 400;\n  font-style: normal;\n}\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  width: 100vw;\n  overflow-x: hidden;\n}\n\nbody {\n  height: 100vh;\n  width: 100%;\n  margin: 0;\n  background: #fafafa;\n}\n\n.container {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\nhtml,\nbutton,\nlabel,\ninput {\n  font-family: sans-serif;\n  font-size: 16px;\n}\n\n.container {\n  position: relative;\n  width: calc(100% - 30px);\n  max-width: 1200px;\n  height: calc(100% - 160px);\n  margin: 25px auto 0;\n}\n\n.legend {\n  width: calc(100% - 30px);\n  max-width: 1200px;\n  padding: 25px 0 0;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.legend-item {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.legend-block {\n  width: 25px;\n  height: 25px;\n  margin: 5px;\n  animation: none !important;\n  transition: none !important;\n}\n.legend .visited--second {\n  background-color: #d297ff;\n}\n.legend .visited--third {\n  background-color: lightseagreen;\n}\n\n#board {\n  width: 100%;\n  height: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n#board td {\n  padding: 0;\n  border: 1px solid lightblue;\n}\n\n.header {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #232323;\n}\n.header__inner {\n  height: 100%;\n  width: 100%;\n  max-width: 1200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header__inner .navigation {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header__inner .navigation > div {\n  color: #fff;\n  height: 100%;\n  padding: 0 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: color 0.15s ease-in;\n}\n.header__inner .navigation > div:hover, .header__inner .navigation > div:focus, .header__inner .navigation > div:active, .header__inner .navigation > div.active {\n  color: #1ee0eb;\n  background: #3d3d3d;\n}\n.header__inner .navigation > div.blocked {\n  color: grey;\n  background: transparent;\n  cursor: default;\n}\n.header__inner .input-group {\n  padding: 0 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header__inner .input-group > label {\n  color: #fff;\n  padding-right: 15px;\n}\n.header__inner .btn {\n  color: #fff;\n  height: 100%;\n  padding: 0 15px;\n  border: none;\n  background: transparent;\n  transition: background-color, color 0.15s ease-in;\n  outline: none;\n  cursor: pointer;\n}\n.header__inner .btn:disabled, .header__inner .btn:disabled:hover {\n  color: grey;\n  background: transparent;\n  cursor: default;\n}\n.header__inner .btn:hover {\n  color: #1ee0eb;\n  background: #494949;\n}\n.header__inner .btn:focus, .header__inner .btn:active {\n  outline: none;\n}\n\n.unvisited,\n.visited {\n  border: 1px solid lightblue;\n}\n\n@keyframes animateVisitedNeighbor {\n  from {\n    background-color: transparent;\n    clip-path: inset(50% round 50%);\n  }\n  to {\n    background-color: #ff0377;\n    clip-path: inset(0% round 0%);\n  }\n}\n.neighbor {\n  background-color: #ff0377;\n  animation-name: animateVisitedNeighbor;\n  animation-duration: 1s;\n  animation-timing-function: ease-in-out;\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n  -o-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n\n@keyframes animateVisited {\n  0% {\n    background-color: transparent;\n    clip-path: inset(0% round 0%);\n  }\n  20% {\n    background-color: lightseagreen;\n  }\n  75% {\n    background-color: #d297ff;\n    clip-path: inset(50% round 50%);\n  }\n  100% {\n    background-color: #1ee0eb;\n    clip-path: inset(100% round 0%);\n  }\n}\n.visited {\n  background-color: #1ee0eb;\n  animation-name: animateVisited;\n  animation-duration: 1s;\n  animation-direction: reverse;\n  animation-timing-function: linear;\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n  -o-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n\n@keyframes animateWall {\n  0% {\n    background-color: transparent;\n    transform: scale(0.8);\n  }\n  75% {\n    transform: scale(1.3);\n  }\n  100% {\n    background-color: #0d1433;\n    transform: scale(1);\n  }\n}\n.wall {\n  background-color: #0d1433;\n  animation-name: animateWall;\n  animation-duration: 0.2s;\n  animation-timing-function: ease-in-out;\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n  -o-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n\n.path {\n  background-color: #ff8f03;\n  transition: background-color 0.2s ease-in;\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n  -o-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n\n.start {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.end {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\ninput[type=range] {\n  -webkit-appearance: none;\n  /* Hides the slider so that custom slider can be made */\n  width: 100%;\n  /* Specific width is required for Firefox. */\n  background: transparent;\n  /* Otherwise white in Chrome */\n}\n\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n}\n\ninput[type=range]:focus {\n  outline: none;\n  /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n}\n\ninput[type=range]::-ms-track {\n  width: 100%;\n  cursor: pointer;\n  /* Hides the slider so custom styles can be added */\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n\n/* Special styling for WebKit/Blink */\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: 1px solid #000000;\n  height: 20px;\n  width: 10px;\n  border-radius: 3px;\n  background: #fff;\n  cursor: pointer;\n  margin-top: -7px;\n  /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  /* Add cool effects to your sliders! */\n}\n\n/* All the same stuff for Firefox */\ninput[type=range]::-moz-range-thumb {\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  border: 1px solid #000000;\n  height: 20px;\n  width: 10px;\n  border-radius: 3px;\n  background: #fff;\n  cursor: pointer;\n}\n\n/* All the same stuff for IE */\ninput[type=range]::-ms-thumb {\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  border: 1px solid #000000;\n  height: 36px;\n  width: 16px;\n  border-radius: 3px;\n  background: #fff;\n  cursor: pointer;\n}\n\ninput[type=range]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 7px;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  background: #1ee0eb;\n  border-radius: 1.3px;\n  border: 0.2px solid #010101;\n}\n\ninput[type=range]:focus::-webkit-slider-runnable-track {\n  background: #14d6e1;\n}\n\ninput[type=range]::-moz-range-track {\n  width: 100%;\n  height: 7px;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  background: #1ee0eb;\n  border-radius: 1.3px;\n  border: 0.2px solid #010101;\n}\n\ninput[type=range]::-ms-track {\n  width: 100%;\n  height: 7px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  border-width: 16px 0;\n  color: transparent;\n}\n\ninput[type=range]::-ms-fill-lower {\n  background: #11bbc5;\n  border: 0.2px solid #010101;\n  border-radius: 2.6px;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n}\n\ninput[type=range]:focus::-ms-fill-lower {\n  background: #1ee0eb;\n}\n\ninput[type=range]::-ms-fill-upper {\n  background: #1ee0eb;\n  border: 0.2px solid #010101;\n  border-radius: 2.6px;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n}\n\ninput[type=range]:focus::-ms-fill-upper {\n  background: #4de6ef;\n}\n\ninput[type=range]:disabled::-webkit-slider-thumb {\n  background-color: grey;\n  border-color: grey;\n  cursor: default;\n}\ninput[type=range]:disabled::-webkit-slider-runnable-track {\n  background-color: lightgrey;\n  cursor: default;\n}\ninput[type=range]:disabled::-moz-range-thumb {\n  background-color: grey;\n  border-color: grey;\n}\ninput[type=range]:disabled::-moz-range-track {\n  cursor: default;\n}\ninput[type=range]:disabled::-ms-thumb {\n  background-color: grey;\n  border-color: grey;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/font/Abel-Regular.ttf":
/*!******************************************!*\
  !*** ./src/assets/font/Abel-Regular.ttf ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e8b810b8f2364e791205d6f12c5be3bf.ttf");

/***/ }),

/***/ "./src/assets/images/aim.svg":
/*!***********************************!*\
  !*** ./src/assets/images/aim.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fb932ea84dc2dc5409466544766e7d2c.svg");

/***/ }),

/***/ "./src/assets/images/arrow.svg":
/*!*************************************!*\
  !*** ./src/assets/images/arrow.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b7f95d22107c0bf300835379c8e9da49.svg");

/***/ }),

/***/ "./src/assets/sass/main.scss":
/*!***********************************!*\
  !*** ./src/assets/sass/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/dist/cjs.js??ref--4-3!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./src/assets/sass/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/sass/main.scss */ "./src/assets/sass/main.scss");
/* harmony import */ var _assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Board */ "./src/modules/Board.js");
/* harmony import */ var _modules_algorithms_dijkstra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/algorithms/dijkstra */ "./src/modules/algorithms/dijkstra.js");
/* harmony import */ var _modules_algorithms_breadthFirst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/algorithms/breadthFirst */ "./src/modules/algorithms/breadthFirst.js");





const pathfindingAlgorithms = {
  dijkstra: {
    name: "Dijkstra",
    func: _modules_algorithms_dijkstra__WEBPACK_IMPORTED_MODULE_2__["dijkstra"],
  },
  bfs: {
    name: "Breadth-First Search",
    func: _modules_algorithms_breadthFirst__WEBPACK_IMPORTED_MODULE_3__["breadthFirst"],
  },
};

const board = new _modules_Board__WEBPACK_IMPORTED_MODULE_1__["default"]("board", 25, pathfindingAlgorithms);
board.initialize();


/***/ }),

/***/ "./src/modules/Board.js":
/*!******************************!*\
  !*** ./src/modules/Board.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/block */ "./src/modules/helpers/block.js");
/* harmony import */ var _helpers_getRandomNum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/getRandomNum */ "./src/modules/helpers/getRandomNum.js");
/* harmony import */ var _algorithms_dijkstra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./algorithms/dijkstra */ "./src/modules/algorithms/dijkstra.js");
/* harmony import */ var _algorithms_breadthFirst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./algorithms/breadthFirst */ "./src/modules/algorithms/breadthFirst.js");
/* harmony import */ var _helpers_getDifferentRandomNum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/getDifferentRandomNum */ "./src/modules/helpers/getDifferentRandomNum.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Node */ "./src/modules/Node.js");
/* harmony import */ var _algorithms_helpers_weighted__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./algorithms/helpers/weighted */ "./src/modules/algorithms/helpers/weighted.js");








class Board {
  constructor(boardId, blockSize, algorithms) {
    this.boardId = boardId;
    this.blockSize = blockSize;
    this.width = null;
    this.height = null;
    this.nodes = {};
    this.startNode = null;
    this.endNode = null;
    this.isMakingWalls = false;
    this.isNodeDragged = false;
    this.draggedNodeClassList = null;
    this.algorithms = algorithms;
    this.currentAlgorithm = null;
    this.speed = 40;
    this.isSearching = false;
    this.isPrepared = false;
  }

  initialize() {
    this.createNav();
    this.calculateBoardSize();
    this.createBoard();
    this.setStartNode();
    this.setEndNode();

    this.setCurrentAlgorithm("dijkstra");

    this.addNavAlgoElemsEventListeners();
    this.addBlocksEventListeners();
    this.addBtnsEventListeners();

    console.log(this);
    this.isPrepared = true;
  }

  calculateBoardSize() {
    const board = document.getElementById(this.boardId);
    const pxWidth = board.clientWidth;
    const pxHeight = board.clientHeight;

    this.width = Math.floor(pxWidth / this.blockSize);
    this.height = Math.floor(pxHeight / this.blockSize);
  }

  createBoard() {
    const board = document.getElementById(this.boardId);
    const tbody = document.createElement("tbody");

    for (let y = this.height - 1; y >= 0; y--) {
      const row = document.createElement("tr");
      for (let x = 0; x < this.width; x++) {
        Object(_helpers_block__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(row, this.blockSize, x, y);

        const newNode = new _Node__WEBPACK_IMPORTED_MODULE_5__["default"]("block", x, y, Infinity, null, null);
        this.nodes[newNode.id] = newNode;
      }
      tbody.appendChild(row);
    }

    board.appendChild(tbody);
  }

  createNav() {
    const nav = document.getElementById("nav");
    for (let [key, algo] of Object.entries(this.algorithms)) {
      const elem = document.createElement("div");
      elem.classList.add("nav-algorithm-js");
      elem.innerText = algo.name;
      elem.dataset.algorithmKey = key;
      nav.appendChild(elem);
    }
  }

  setCurrentAlgorithm(algo) {
    this.currentAlgorithm = this.algorithms[algo].func;
    const elems = document.querySelectorAll(".nav-algorithm-js");
    elems[0].classList.add("active");
  }

  setStartNode() {
    const randX = Object(_helpers_getRandomNum__WEBPACK_IMPORTED_MODULE_1__["getRandomNum"])(0, this.width - 1);
    const randY = Object(_helpers_getRandomNum__WEBPACK_IMPORTED_MODULE_1__["getRandomNum"])(0, this.height - 1);

    this.nodes[`${randX}-${randY}`].update({
      status: "start",
      dist: 0,
      direction: _algorithms_helpers_weighted__WEBPACK_IMPORTED_MODULE_6__["directions"]["east"],
    });
    this.startNode = this.nodes[`${randX}-${randY}`];
    document.getElementById(this.startNode.id).classList.add("start", "east");
  }

  setEndNode() {
    const randX = Object(_helpers_getDifferentRandomNum__WEBPACK_IMPORTED_MODULE_4__["getDifferentRandomNum"])(0, this.width - 1, this.startNode.x);
    const randY = Object(_helpers_getDifferentRandomNum__WEBPACK_IMPORTED_MODULE_4__["getDifferentRandomNum"])(0, this.height - 1, this.startNode.y);

    this.nodes[`${randX}-${randY}`].status = "end";
    this.nodes[`${randX}-${randY}`].update({
      status: "end",
    });

    this.endNode = this.nodes[`${randX}-${randY}`];
    document.getElementById(this.endNode.id).classList.add("end");
  }

  addNavAlgoElemsEventListeners() {
    const elems = document.querySelectorAll(".nav-algorithm-js");

    elems.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        const isBlocked = e.target.classList.contains("blocked");
        if (isBlocked) return;

        elems.forEach((elem) => elem.classList.remove("active"));
        e.target.classList.add("active");
        this.currentAlgorithm = this.algorithms[
          e.target.dataset.algorithmKey
        ].func;
      });
    });
  }

  addBtnsEventListeners() {
    const startBtn = document.getElementById("startBtn");
    const clearBtn = document.getElementById("clearBtn");

    startBtn.addEventListener("click", async (e) => {
      if (this.isPrepared) {
        this.handleIsSearchingState(true);
        this.handleIsPreparedState(false);

        await this.currentAlgorithm(
          this.nodes,
          this.startNode,
          this.endNode,
          this.speed
        );
        this.handleIsSearchingState(false);
      }
    });

    clearBtn.addEventListener("click", (e) => {
      if (!this.isSearching) {
        this.clearBoard();
        this.handleIsPreparedState(true);
      }
    });
  }

  addBlocksEventListeners() {
    const blocks = document.querySelectorAll(".unvisited");

    blocks.forEach((block) => {
      block.addEventListener("mousedown", (e) => {
        e.preventDefault();
        this.handleMouseDown(block);
      });

      block.addEventListener("mouseenter", (e) => {
        e.preventDefault();
        this.handleMouseEnter(block);
      });

      block.addEventListener("mouseup", (e) => {
        e.preventDefault();
        this.handleMouseUp(block);
      });

      block.addEventListener("mouseleave", (e) => {
        e.preventDefault();
        this.handleMouseLeave(block);
      });
    });
  }

  handleMouseDown(block) {
    const id = block.id;
    if (this.nodes[id].status === "start" || this.nodes[id].status === "end") {
      this.draggedNodeId = id;
      this.isNodeDragged = true;
    } else if (!this.isNodeDragged) {
      this.createWall(block);
      this.setMakingWallsState(true);
    }
  }

  handleMouseEnter(block) {
    if (this.isNodeDragged) {
      const draggedNode = this.nodes[this.draggedNodeId];
      if (draggedNode.status === "start" && !block.classList.contains("end")) {
        const directionName = Object(_algorithms_helpers_weighted__WEBPACK_IMPORTED_MODULE_6__["getDirectionName"])(draggedNode.direction);
        block.classList.add("start", directionName);
      } else if (
        draggedNode.status === "end" &&
        !block.classList.contains("start")
      ) {
        block.classList.add("end");
      }
    } else if (this.isMakingWalls) {
      this.createWall(block);
    }
  }

  handleMouseUp(block) {
    const id = block.id;
    if (this.isNodeDragged && id !== this.draggedNodeId) {
      if (this.nodes[this.draggedNodeId].status === "start") {
        this.nodes[id].update({
          status: "start",
          dist: 0,
          direction: _algorithms_helpers_weighted__WEBPACK_IMPORTED_MODULE_6__["directions"]["east"],
        });
        this.startNode = this.nodes[id];
      } else if (this.nodes[this.draggedNodeId].status === "end") {
        this.nodes[id].update({
          status: "end",
          dist: Infinity,
          direction: null,
        });
        this.endNode = this.nodes[id];
      }

      // update the initially dragged node
      this.nodes[this.draggedNodeId].update({
        status: "block",
        dist: Infinity,
        direction: null,
      });

      this.isNodeDragged = false;
      this.draggedNodeId = null;
    } else {
      this.setMakingWallsState(false);
    }
  }

  handleMouseLeave(block) {
    if (this.isNodeDragged) {
      const draggedNode = this.nodes[this.draggedNodeId];
      if (draggedNode.status === "start") {
        const directionName = Object(_algorithms_helpers_weighted__WEBPACK_IMPORTED_MODULE_6__["getDirectionName"])(draggedNode.direction);
        block.classList.remove("start", directionName);
      } else if (draggedNode.status === "end") {
        block.classList.remove("end");
      }
    }
  }

  // WALLS
  createWall(block) {
    window.requestAnimationFrame(() => block.classList.add("wall"));
  }

  blockHasWall(block) {
    return block.classList.contains("wall");
  }

  setMakingWallsState(bool) {
    this.isMakingWalls = bool;
  }

  handleIsSearchingState(isSearching) {
    this.isSearching = isSearching;
    document.getElementById("clearBtn").disabled = isSearching;
  }

  handleIsPreparedState(isPrepared) {
    this.isPrepared = isPrepared;
    document.getElementById("startBtn").disabled = !isPrepared;
  }

  clearBoard() {
    for (let y = this.height - 1; y >= 0; y--) {
      for (let x = 0; x < this.width; x++) {
        this.nodes[`${x}-${y}`].update({
          status: "block",
          dist: Infinity,
          prevId: null,
          direction: null,
        });
        document.getElementById(`${x}-${y}`).classList = [];
        document.getElementById(`${x}-${y}`).classList.add("unvisited");
      }
    }
    this.setStartNode();
    this.setEndNode();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Board);


/***/ }),

/***/ "./src/modules/Node.js":
/*!*****************************!*\
  !*** ./src/modules/Node.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Node {
  constructor(status, x, y, dist, prevId, direction) {
    this.status = status;
    this.id = `${x}-${y}`;
    this.x = x;
    this.y = y;
    this.dist = dist;
    this.prevId = prevId;
    this.direction = direction;
    this.update = this.update.bind(this);
  }

  update(values) {
    for (let fieldKey of Object.keys(this)) {
      for (let valKey of Object.keys(values)) {
        if (fieldKey === valKey) {
          this[fieldKey] = values[valKey];
        }
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Node);


/***/ }),

/***/ "./src/modules/algorithms/breadthFirst.js":
/*!************************************************!*\
  !*** ./src/modules/algorithms/breadthFirst.js ***!
  \************************************************/
/*! exports provided: breadthFirst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breadthFirst", function() { return breadthFirst; });
/* harmony import */ var _helpers_asyncDelay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/asyncDelay */ "./src/modules/helpers/asyncDelay.js");
/* harmony import */ var _helpers_neighbors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/neighbors */ "./src/modules/algorithms/helpers/neighbors.js");
/* harmony import */ var _helpers_visualizePath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/visualizePath */ "./src/modules/helpers/visualizePath.js");
/* harmony import */ var _helpers_nodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/nodes */ "./src/modules/algorithms/helpers/nodes.js");





const breadthFirst = async (nodes, start, end, speed) => {
  let unvisitedNodesIds = Object.keys(nodes);

  let visitedNodes = {};
  let foundEnd = false;
  const isSameNode = (n1, n2) => n1.x === n2.x && n1.y === n2.y;

  while (unvisitedNodesIds.length) {
    const currNode = Object(_helpers_nodes__WEBPACK_IMPORTED_MODULE_3__["getClosestNode"])(unvisitedNodesIds, nodes);
    // VISUALIZE
    document.getElementById(currNode.id).classList.add("visited");
    await Object(_helpers_asyncDelay__WEBPACK_IMPORTED_MODULE_0__["default"])(speed);

    if (!currNode) {
      break;
    }

    visitedNodes[currNode.id] = currNode;

    if (isSameNode(currNode, end)) {
      foundEnd = true;
      break;
    }

    Object(_helpers_neighbors__WEBPACK_IMPORTED_MODULE_1__["getNeighborsIds"])(nodes, currNode.x, currNode.y).forEach((neighborId) => {
      const isNeighborFurtherFromStart = currNode.dist < nodes[neighborId].dist;

      if (isNeighborFurtherFromStart) {
        nodes[neighborId].dist = currNode.dist + 1;
        nodes[neighborId].prevId = currNode.id;
      }

      // VISUALIZE
      document
        .getElementById(nodes[neighborId].id)
        .classList.replace("unvisited", "neighbor");
    });
  }

  if (foundEnd) {
    Object(_helpers_visualizePath__WEBPACK_IMPORTED_MODULE_2__["visualizePath"])(visitedNodes, start, end, speed);
  }
};


/***/ }),

/***/ "./src/modules/algorithms/dijkstra.js":
/*!********************************************!*\
  !*** ./src/modules/algorithms/dijkstra.js ***!
  \********************************************/
/*! exports provided: dijkstra */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dijkstra", function() { return dijkstra; });
/* harmony import */ var _helpers_asyncDelay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/asyncDelay */ "./src/modules/helpers/asyncDelay.js");
/* harmony import */ var _helpers_weighted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/weighted */ "./src/modules/algorithms/helpers/weighted.js");
/* harmony import */ var _helpers_neighbors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/neighbors */ "./src/modules/algorithms/helpers/neighbors.js");
/* harmony import */ var _helpers_visualizePath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/visualizePath */ "./src/modules/helpers/visualizePath.js");
/* harmony import */ var _helpers_nodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/nodes */ "./src/modules/algorithms/helpers/nodes.js");






const dijkstra = async (nodes, start, end, speed) => {
  let unvisitedNodesIds = Object.keys(nodes);

  let visitedNodes = {};
  let foundEnd = false;
  const isSameNode = (n1, n2) => n1.x === n2.x && n1.y === n2.y;

  while (unvisitedNodesIds.length) {
    const currNode = Object(_helpers_nodes__WEBPACK_IMPORTED_MODULE_4__["getClosestNode"])(unvisitedNodesIds, nodes);
    // VISUALIZE
    document.getElementById(currNode.id).classList.add("visited");
    await Object(_helpers_asyncDelay__WEBPACK_IMPORTED_MODULE_0__["default"])(speed);

    if (!currNode) {
      break;
    }

    visitedNodes[currNode.id] = currNode;

    if (isSameNode(currNode, end)) {
      foundEnd = true;
      break;
    }

    Object(_helpers_neighbors__WEBPACK_IMPORTED_MODULE_2__["getNeighborsIds"])(nodes, currNode.x, currNode.y).forEach((neighborId) => {
      const distanceBetweenNodes = Object(_helpers_weighted__WEBPACK_IMPORTED_MODULE_1__["getDistanceBetweenNodes"])(
        currNode,
        nodes[neighborId]
      );

      // VISUALIZE
      document
        .getElementById(nodes[neighborId].id)
        .classList.replace("unvisited", "neighbor");

      const isNeighborFurtherFromStart =
        currNode.dist + distanceBetweenNodes < nodes[neighborId].dist;

      if (isNeighborFurtherFromStart) {
        nodes[neighborId].dist = currNode.dist + distanceBetweenNodes;
        nodes[neighborId].prevId = currNode.id;
        nodes[neighborId].direction = Object(_helpers_weighted__WEBPACK_IMPORTED_MODULE_1__["getNodeDirection"])(
          currNode,
          nodes[neighborId]
        );
      }
    });
  }

  if (foundEnd) {
    Object(_helpers_visualizePath__WEBPACK_IMPORTED_MODULE_3__["visualizePath"])(visitedNodes, start, end, speed);
  }
};


/***/ }),

/***/ "./src/modules/algorithms/helpers/neighbors.js":
/*!*****************************************************!*\
  !*** ./src/modules/algorithms/helpers/neighbors.js ***!
  \*****************************************************/
/*! exports provided: getNeighborsIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNeighborsIds", function() { return getNeighborsIds; });
/**
 * Get node neighbors's keys
 */
const getNeighborsIds = (nodes, x, y) => {
  let arr = [];
  if (
    nodes[`${x}-${y + 1}`] &&
    !document.getElementById(`${x}-${y + 1}`).classList.contains("wall")
  ) {
    arr.push(`${x}-${y + 1}`);
  }
  if (
    nodes[`${x + 1}-${y}`] &&
    !document.getElementById(`${x + 1}-${y}`).classList.contains("wall")
  ) {
    arr.push(`${x + 1}-${y}`);
  }
  if (
    nodes[`${x}-${y - 1}`] &&
    !document.getElementById(`${x}-${y - 1}`).classList.contains("wall")
  ) {
    arr.push(`${x}-${y - 1}`);
  }
  if (
    nodes[`${x - 1}-${y}`] &&
    !document.getElementById(`${x - 1}-${y}`).classList.contains("wall")
  ) {
    arr.push(`${x - 1}-${y}`);
  }
  return arr;
};


/***/ }),

/***/ "./src/modules/algorithms/helpers/nodes.js":
/*!*************************************************!*\
  !*** ./src/modules/algorithms/helpers/nodes.js ***!
  \*************************************************/
/*! exports provided: getClosestNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClosestNode", function() { return getClosestNode; });
/**
 * Get the closest node
 */

const getClosestNode = (unvisitedIds, nodes) => {
  let min = Infinity;
  let minDistNodeId = 0;
  let index = 0;

  unvisitedIds.forEach((id, i) => {
    if (nodes[id]) {
      if (nodes[id].dist < min) {
        min = nodes[id].dist;
        minDistNodeId = id;
        index = i;
      }
    }
  });

  unvisitedIds.splice(index, 1);

  return nodes[minDistNodeId];
};


/***/ }),

/***/ "./src/modules/algorithms/helpers/weighted.js":
/*!****************************************************!*\
  !*** ./src/modules/algorithms/helpers/weighted.js ***!
  \****************************************************/
/*! exports provided: directions, getDirectionName, northDirectionWeights, eastDirectionWeights, southDirectionWeights, westDirectionWeights, moveWeight, getDistanceBetweenNodes, getNodeDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directions", function() { return directions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectionName", function() { return getDirectionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "northDirectionWeights", function() { return northDirectionWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eastDirectionWeights", function() { return eastDirectionWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "southDirectionWeights", function() { return southDirectionWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "westDirectionWeights", function() { return westDirectionWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveWeight", function() { return moveWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDistanceBetweenNodes", function() { return getDistanceBetweenNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodeDirection", function() { return getNodeDirection; });
/**
 * Possible directions of node
 */
const directions = {
  north: 0,
  east: 1,
  south: 2,
  west: 3,
};

const directionsName = ["north", "east", "south", "west"];

/**
 * Get direction name by provided index
 */
const getDirectionName = (index) => directionsName[index];

/**
 * Node can be directed into 4 directions - north, east, south and west
 * The array represents the weight of choosing the next direction
 * 90 degree turn costs 1 points
 * [0] - go north weight
 * [1] - go east weight
 * [2] - go south weight
 * [3] - go west weight
 */
const northDirectionWeights = [0, 1, 2, 1];
const eastDirectionWeights = [1, 0, 1, 2];
const southDirectionWeights = [2, 1, 0, 1];
const westDirectionWeights = [1, 2, 1, 0];

const moveWeight = 1;

/**
 * Get distance between two nodes based on the weight
 */
const getDistanceBetweenNodes = (node_1, node_2) => {
  // node_2 is up
  if (node_1.y < node_2.y && node_1.x === node_2.x) {
    return northDirectionWeights[node_1.direction] + moveWeight;
  }
  // node_2 is right
  else if (node_1.x < node_2.x && node_1.y === node_2.y) {
    return eastDirectionWeights[node_1.direction] + moveWeight;
  }
  // node_2 is bottom
  else if (node_1.y > node_2.y && node_1.x === node_2.x) {
    return southDirectionWeights[node_1.direction] + moveWeight;
  }
  // node_2 is left
  else if (node_1.x > node_2.x && node_1.y === node_2.y) {
    return westDirectionWeights[node_1.direction] + moveWeight;
  } else {
    throw new Error(
      "Something went wrong when setting the distance between nodes."
    );
  }
};

/**
 * Return direction of node_2 based on their positions
 */
const getNodeDirection = (node_1, node_2) => {
  if (node_1.y < node_2.y && node_1.x === node_2.x) {
    return directions["north"];
  } else if (node_1.x < node_2.x && node_1.y === node_2.y) {
    return directions["east"];
  } else if (node_1.y > node_2.y && node_1.x === node_2.x) {
    return directions["south"];
  } else if (node_1.x > node_2.x && node_1.y === node_2.y) {
    return directions["west"];
  } else {
    throw new Error("Something went wrong when setting the direction of node.");
  }
};


/***/ }),

/***/ "./src/modules/helpers/asyncDelay.js":
/*!*******************************************!*\
  !*** ./src/modules/helpers/asyncDelay.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
});


/***/ }),

/***/ "./src/modules/helpers/block.js":
/*!**************************************!*\
  !*** ./src/modules/helpers/block.js ***!
  \**************************************/
/*! exports provided: createBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBlock", function() { return createBlock; });
const createBlock = (parent, blockSize, x, y) => {
  const block = document.createElement("td");

  block.id = `${x}-${y}`;
  block.classList.add("unvisited");
  block.style.width = `${blockSize}px`;
  block.style.height = `${blockSize}px`;

  block.dataset.x = x;
  block.dataset.y = y;

  parent.appendChild(block);
};


/***/ }),

/***/ "./src/modules/helpers/getDifferentRandomNum.js":
/*!******************************************************!*\
  !*** ./src/modules/helpers/getDifferentRandomNum.js ***!
  \******************************************************/
/*! exports provided: getDifferentRandomNum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDifferentRandomNum", function() { return getDifferentRandomNum; });
/* harmony import */ var _getRandomNum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRandomNum */ "./src/modules/helpers/getRandomNum.js");


const getDifferentRandomNum = (min, max, differentFrom) => {
  let rand;
  do {
    rand = Object(_getRandomNum__WEBPACK_IMPORTED_MODULE_0__["getRandomNum"])(min, max);
  } while (rand === differentFrom);

  return rand;
};


/***/ }),

/***/ "./src/modules/helpers/getRandomNum.js":
/*!*********************************************!*\
  !*** ./src/modules/helpers/getRandomNum.js ***!
  \*********************************************/
/*! exports provided: getRandomNum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomNum", function() { return getRandomNum; });
const getRandomNum = (min, max) => Math.floor(Math.random() * max) + min;


/***/ }),

/***/ "./src/modules/helpers/visualizePath.js":
/*!**********************************************!*\
  !*** ./src/modules/helpers/visualizePath.js ***!
  \**********************************************/
/*! exports provided: visualizePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visualizePath", function() { return visualizePath; });
/* harmony import */ var _asyncDelay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asyncDelay */ "./src/modules/helpers/asyncDelay.js");


const visualizePath = async (visitedNodes, start, end, speed) => {
  let pathIds = [];
  let foundStart = false;
  let currNode = visitedNodes[`${end.x}-${end.y}`];
  pathIds.push(currNode.id);

  while (!foundStart) {
    if (currNode.x === start.x && currNode.y === start.y) {
      foundStart = true;
      break;
    }
    pathIds.push(currNode.prevId);
    currNode = visitedNodes[currNode.prevId];
  }

  for (let i = pathIds.length - 1; i >= 0; i--) {
    document.getElementById(pathIds[i]).classList.add("path");
    await Object(_asyncDelay__WEBPACK_IMPORTED_MODULE_0__["default"])(speed + 100);
  }
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zYXNzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udC9BYmVsLVJlZ3VsYXIudHRmIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2FpbS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvYXJyb3cuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2Fzcy9tYWluLnNjc3M/ODkxNSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hbGdvcml0aG1zL2JyZWFkdGhGaXJzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hbGdvcml0aG1zL2RpamtzdHJhLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FsZ29yaXRobXMvaGVscGVycy9uZWlnaGJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYWxnb3JpdGhtcy9oZWxwZXJzL25vZGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FsZ29yaXRobXMvaGVscGVycy93ZWlnaHRlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9oZWxwZXJzL2FzeW5jRGVsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaGVscGVycy9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9oZWxwZXJzL2dldERpZmZlcmVudFJhbmRvbU51bS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9oZWxwZXJzL2dldFJhbmRvbU51bS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9oZWxwZXJzL3Zpc3VhbGl6ZVBhdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHLHNDQUFzQyxtQkFBTyxDQUFDLGlIQUF5RDtBQUN2RyxvQ0FBb0MsbUJBQU8sQ0FBQyxvRUFBMEI7QUFDdEUsb0NBQW9DLG1CQUFPLENBQUMsMERBQXFCO0FBQ2pFLG9DQUFvQyxtQkFBTyxDQUFDLHNEQUFtQjtBQUMvRDtBQUNBO0FBQ0E7QUFD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bGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi4vZm9udC9BYmVsLVJlZ3VsYXIudHRmXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4uL2ltYWdlcy9hcnJvdy5zdmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL2FpbS5zdmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFiZWxcXFwiLCBzYW5zLXNlcmlmO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5odG1sLFxcbmJ1dHRvbixcXG5sYWJlbCxcXG5pbnB1dCB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTYwcHgpO1xcbiAgbWFyZ2luOiAyNXB4IGF1dG8gMDtcXG59XFxuXFxuLmxlZ2VuZCB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIHBhZGRpbmc6IDI1cHggMCAwO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubGVnZW5kLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5sZWdlbmQtYmxvY2sge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW46IDVweDtcXG4gIGFuaW1hdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4ubGVnZW5kIC52aXNpdGVkLS1zZWNvbmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyOTdmZjtcXG59XFxuLmxlZ2VuZCAudmlzaXRlZC0tdGhpcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcXG59XFxuXFxuI2JvYXJkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG4jYm9hcmQgdGQge1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzIzO1xcbn1cXG4uaGVhZGVyX19pbm5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlcl9faW5uZXIgLm5hdmlnYXRpb24ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlcl9faW5uZXIgLm5hdmlnYXRpb24gPiBkaXYge1xcbiAgY29sb3I6ICNmZmY7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbjtcXG59XFxuLmhlYWRlcl9faW5uZXIgLm5hdmlnYXRpb24gPiBkaXY6aG92ZXIsIC5oZWFkZXJfX2lubmVyIC5uYXZpZ2F0aW9uID4gZGl2OmZvY3VzLCAuaGVhZGVyX19pbm5lciAubmF2aWdhdGlvbiA+IGRpdjphY3RpdmUsIC5oZWFkZXJfX2lubmVyIC5uYXZpZ2F0aW9uID4gZGl2LmFjdGl2ZSB7XFxuICBjb2xvcjogIzFlZTBlYjtcXG4gIGJhY2tncm91bmQ6ICMzZDNkM2Q7XFxufVxcbi5oZWFkZXJfX2lubmVyIC5uYXZpZ2F0aW9uID4gZGl2LmJsb2NrZWQge1xcbiAgY29sb3I6IGdyZXk7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLmhlYWRlcl9faW5uZXIgLmlucHV0LWdyb3VwIHtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXJfX2lubmVyIC5pbnB1dC1ncm91cCA+IGxhYmVsIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG59XFxuLmhlYWRlcl9faW5uZXIgLmJ0biB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciwgY29sb3IgMC4xNXMgZWFzZS1pbjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5oZWFkZXJfX2lubmVyIC5idG46ZGlzYWJsZWQsIC5oZWFkZXJfX2lubmVyIC5idG46ZGlzYWJsZWQ6aG92ZXIge1xcbiAgY29sb3I6IGdyZXk7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLmhlYWRlcl9faW5uZXIgLmJ0bjpob3ZlciB7XFxuICBjb2xvcjogIzFlZTBlYjtcXG4gIGJhY2tncm91bmQ6ICM0OTQ5NDk7XFxufVxcbi5oZWFkZXJfX2lubmVyIC5idG46Zm9jdXMsIC5oZWFkZXJfX2lubmVyIC5idG46YWN0aXZlIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi51bnZpc2l0ZWQsXFxuLnZpc2l0ZWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRibHVlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGVWaXNpdGVkTmVpZ2hib3Ige1xcbiAgZnJvbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjbGlwLXBhdGg6IGluc2V0KDUwJSByb3VuZCA1MCUpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMzc3O1xcbiAgICBjbGlwLXBhdGg6IGluc2V0KDAlIHJvdW5kIDAlKTtcXG4gIH1cXG59XFxuLm5laWdoYm9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAzNzc7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZVZpc2l0ZWROZWlnaGJvcjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxufVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0ZVZpc2l0ZWQge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY2xpcC1wYXRoOiBpbnNldCgwJSByb3VuZCAwJSk7XFxuICB9XFxuICAyMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QyOTdmZjtcXG4gICAgY2xpcC1wYXRoOiBpbnNldCg1MCUgcm91bmQgNTAlKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWVlMGViO1xcbiAgICBjbGlwLXBhdGg6IGluc2V0KDEwMCUgcm91bmQgMCUpO1xcbiAgfVxcbn1cXG4udmlzaXRlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWVlMGViO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGVWaXNpdGVkO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IHJldmVyc2U7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGVXYWxsIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQxNDMzO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG4ud2FsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQxNDMzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGVXYWxsO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG5cXG4ucGF0aCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4ZjAzO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW47XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG5cXG4uc3RhcnQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5lbmQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC8qIEhpZGVzIHRoZSBzbGlkZXIgc28gdGhhdCBjdXN0b20gc2xpZGVyIGNhbiBiZSBtYWRlICovXFxuICB3aWR0aDogMTAwJTtcXG4gIC8qIFNwZWNpZmljIHdpZHRoIGlzIHJlcXVpcmVkIGZvciBGaXJlZm94LiAqL1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAvKiBPdGhlcndpc2Ugd2hpdGUgaW4gQ2hyb21lICovXFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICAvKiBSZW1vdmVzIHRoZSBibHVlIGJvcmRlci4gWW91IHNob3VsZCBwcm9iYWJseSBkbyBzb21lIGtpbmQgb2YgZm9jdXMgc3R5bGluZyBmb3IgYWNjZXNzaWJpbGl0eSByZWFzb25zIHRob3VnaC4gKi9cXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy10cmFjayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC8qIEhpZGVzIHRoZSBzbGlkZXIgc28gY3VzdG9tIHN0eWxlcyBjYW4gYmUgYWRkZWQgKi9cXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogU3BlY2lhbCBzdHlsaW5nIGZvciBXZWJLaXQvQmxpbmsgKi9cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IC03cHg7XFxuICAvKiBZb3UgbmVlZCB0byBzcGVjaWZ5IGEgbWFyZ2luIGluIENocm9tZSwgYnV0IGluIEZpcmVmb3ggYW5kIElFIGl0IGlzIGF1dG9tYXRpYyAqL1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMCwgMHB4IDBweCAxcHggIzBkMGQwZDtcXG4gIC8qIEFkZCBjb29sIGVmZmVjdHMgdG8geW91ciBzbGlkZXJzISAqL1xcbn1cXG5cXG4vKiBBbGwgdGhlIHNhbWUgc3R1ZmYgZm9yIEZpcmVmb3ggKi9cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LW1vei1yYW5nZS10aHVtYiB7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwLCAwcHggMHB4IDFweCAjMGQwZDBkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogQWxsIHRoZSBzYW1lIHN0dWZmIGZvciBJRSAqL1xcbmlucHV0W3R5cGU9cmFuZ2VdOjotbXMtdGh1bWIge1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMCwgMHB4IDBweCAxcHggIzBkMGQwZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICB3aWR0aDogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMCwgMHB4IDBweCAxcHggIzBkMGQwZDtcXG4gIGJhY2tncm91bmQ6ICMxZWUwZWI7XFxuICBib3JkZXItcmFkaXVzOiAxLjNweDtcXG4gIGJvcmRlcjogMC4ycHggc29saWQgIzAxMDEwMTtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXM6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6ICMxNGQ2ZTE7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOjotbW96LXJhbmdlLXRyYWNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwLCAwcHggMHB4IDFweCAjMGQwZDBkO1xcbiAgYmFja2dyb3VuZDogIzFlZTBlYjtcXG4gIGJvcmRlci1yYWRpdXM6IDEuM3B4O1xcbiAgYm9yZGVyOiAwLjJweCBzb2xpZCAjMDEwMTAxO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LW1zLXRyYWNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItd2lkdGg6IDE2cHggMDtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy1maWxsLWxvd2VyIHtcXG4gIGJhY2tncm91bmQ6ICMxMWJiYzU7XFxuICBib3JkZXI6IDAuMnB4IHNvbGlkICMwMTAxMDE7XFxuICBib3JkZXItcmFkaXVzOiAyLjZweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDAsIDBweCAwcHggMXB4ICMwZDBkMGQ7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzOjotbXMtZmlsbC1sb3dlciB7XFxuICBiYWNrZ3JvdW5kOiAjMWVlMGViO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LW1zLWZpbGwtdXBwZXIge1xcbiAgYmFja2dyb3VuZDogIzFlZTBlYjtcXG4gIGJvcmRlcjogMC4ycHggc29saWQgIzAxMDEwMTtcXG4gIGJvcmRlci1yYWRpdXM6IDIuNnB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMCwgMHB4IDBweCAxcHggIzBkMGQwZDtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXM6Oi1tcy1maWxsLXVwcGVyIHtcXG4gIGJhY2tncm91bmQ6ICM0ZGU2ZWY7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOmRpc2FibGVkOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgYm9yZGVyLWNvbG9yOiBncmV5O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXTpkaXNhYmxlZDo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXTpkaXNhYmxlZDo6LW1vei1yYW5nZS10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgYm9yZGVyLWNvbG9yOiBncmV5O1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXTpkaXNhYmxlZDo6LW1vei1yYW5nZS10cmFjayB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdOmRpc2FibGVkOjotbXMtdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGJvcmRlci1jb2xvcjogZ3JleTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlOGI4MTBiOGYyMzY0ZTc5MTIwNWQ2ZjEyYzViZTNiZi50dGZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmI5MzJlYTg0ZGMyZGM1NDA5NDY2NTQ0NzY2ZTdkMmMuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImI3Zjk1ZDIyMTA3YzBiZjMwMDgzNTM3OWM4ZTlkYTQ5LnN2Z1wiOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0zIS4vbWFpbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCBcIi4vYXNzZXRzL3Nhc3MvbWFpbi5zY3NzXCI7XG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4vbW9kdWxlcy9Cb2FyZFwiO1xuaW1wb3J0IHsgZGlqa3N0cmEgfSBmcm9tIFwiLi9tb2R1bGVzL2FsZ29yaXRobXMvZGlqa3N0cmFcIjtcbmltcG9ydCB7IGJyZWFkdGhGaXJzdCB9IGZyb20gXCIuL21vZHVsZXMvYWxnb3JpdGhtcy9icmVhZHRoRmlyc3RcIjtcblxuY29uc3QgcGF0aGZpbmRpbmdBbGdvcml0aG1zID0ge1xuICBkaWprc3RyYToge1xuICAgIG5hbWU6IFwiRGlqa3N0cmFcIixcbiAgICBmdW5jOiBkaWprc3RyYSxcbiAgfSxcbiAgYmZzOiB7XG4gICAgbmFtZTogXCJCcmVhZHRoLUZpcnN0IFNlYXJjaFwiLFxuICAgIGZ1bmM6IGJyZWFkdGhGaXJzdCxcbiAgfSxcbn07XG5cbmNvbnN0IGJvYXJkID0gbmV3IEJvYXJkKFwiYm9hcmRcIiwgMjUsIHBhdGhmaW5kaW5nQWxnb3JpdGhtcyk7XG5ib2FyZC5pbml0aWFsaXplKCk7XG4iLCJpbXBvcnQgeyBjcmVhdGVCbG9jayB9IGZyb20gXCIuL2hlbHBlcnMvYmxvY2tcIjtcbmltcG9ydCB7IGdldFJhbmRvbU51bSB9IGZyb20gXCIuL2hlbHBlcnMvZ2V0UmFuZG9tTnVtXCI7XG5pbXBvcnQgeyBkaWprc3RyYSB9IGZyb20gXCIuL2FsZ29yaXRobXMvZGlqa3N0cmFcIjtcbmltcG9ydCB7IGJyZWFkdGhGaXJzdCB9IGZyb20gXCIuL2FsZ29yaXRobXMvYnJlYWR0aEZpcnN0XCI7XG5pbXBvcnQgeyBnZXREaWZmZXJlbnRSYW5kb21OdW0gfSBmcm9tIFwiLi9oZWxwZXJzL2dldERpZmZlcmVudFJhbmRvbU51bVwiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4vTm9kZVwiO1xuaW1wb3J0IHsgZGlyZWN0aW9ucywgZ2V0RGlyZWN0aW9uTmFtZSB9IGZyb20gXCIuL2FsZ29yaXRobXMvaGVscGVycy93ZWlnaHRlZFwiO1xuXG5jbGFzcyBCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKGJvYXJkSWQsIGJsb2NrU2l6ZSwgYWxnb3JpdGhtcykge1xuICAgIHRoaXMuYm9hcmRJZCA9IGJvYXJkSWQ7XG4gICAgdGhpcy5ibG9ja1NpemUgPSBibG9ja1NpemU7XG4gICAgdGhpcy53aWR0aCA9IG51bGw7XG4gICAgdGhpcy5oZWlnaHQgPSBudWxsO1xuICAgIHRoaXMubm9kZXMgPSB7fTtcbiAgICB0aGlzLnN0YXJ0Tm9kZSA9IG51bGw7XG4gICAgdGhpcy5lbmROb2RlID0gbnVsbDtcbiAgICB0aGlzLmlzTWFraW5nV2FsbHMgPSBmYWxzZTtcbiAgICB0aGlzLmlzTm9kZURyYWdnZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRyYWdnZWROb2RlQ2xhc3NMaXN0ID0gbnVsbDtcbiAgICB0aGlzLmFsZ29yaXRobXMgPSBhbGdvcml0aG1zO1xuICAgIHRoaXMuY3VycmVudEFsZ29yaXRobSA9IG51bGw7XG4gICAgdGhpcy5zcGVlZCA9IDQwO1xuICAgIHRoaXMuaXNTZWFyY2hpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmlzUHJlcGFyZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5jcmVhdGVOYXYoKTtcbiAgICB0aGlzLmNhbGN1bGF0ZUJvYXJkU2l6ZSgpO1xuICAgIHRoaXMuY3JlYXRlQm9hcmQoKTtcbiAgICB0aGlzLnNldFN0YXJ0Tm9kZSgpO1xuICAgIHRoaXMuc2V0RW5kTm9kZSgpO1xuXG4gICAgdGhpcy5zZXRDdXJyZW50QWxnb3JpdGhtKFwiZGlqa3N0cmFcIik7XG5cbiAgICB0aGlzLmFkZE5hdkFsZ29FbGVtc0V2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5hZGRCbG9ja3NFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuYWRkQnRuc0V2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICB0aGlzLmlzUHJlcGFyZWQgPSB0cnVlO1xuICB9XG5cbiAgY2FsY3VsYXRlQm9hcmRTaXplKCkge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5ib2FyZElkKTtcbiAgICBjb25zdCBweFdpZHRoID0gYm9hcmQuY2xpZW50V2lkdGg7XG4gICAgY29uc3QgcHhIZWlnaHQgPSBib2FyZC5jbGllbnRIZWlnaHQ7XG5cbiAgICB0aGlzLndpZHRoID0gTWF0aC5mbG9vcihweFdpZHRoIC8gdGhpcy5ibG9ja1NpemUpO1xuICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5mbG9vcihweEhlaWdodCAvIHRoaXMuYmxvY2tTaXplKTtcbiAgfVxuXG4gIGNyZWF0ZUJvYXJkKCkge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5ib2FyZElkKTtcbiAgICBjb25zdCB0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcblxuICAgIGZvciAobGV0IHkgPSB0aGlzLmhlaWdodCAtIDE7IHkgPj0gMDsgeS0tKSB7XG4gICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMud2lkdGg7IHgrKykge1xuICAgICAgICBjcmVhdGVCbG9jayhyb3csIHRoaXMuYmxvY2tTaXplLCB4LCB5KTtcblxuICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUoXCJibG9ja1wiLCB4LCB5LCBJbmZpbml0eSwgbnVsbCwgbnVsbCk7XG4gICAgICAgIHRoaXMubm9kZXNbbmV3Tm9kZS5pZF0gPSBuZXdOb2RlO1xuICAgICAgfVxuICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9XG5cbiAgICBib2FyZC5hcHBlbmRDaGlsZCh0Ym9keSk7XG4gIH1cblxuICBjcmVhdGVOYXYoKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XG4gICAgZm9yIChsZXQgW2tleSwgYWxnb10gb2YgT2JqZWN0LmVudHJpZXModGhpcy5hbGdvcml0aG1zKSkge1xuICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJuYXYtYWxnb3JpdGhtLWpzXCIpO1xuICAgICAgZWxlbS5pbm5lclRleHQgPSBhbGdvLm5hbWU7XG4gICAgICBlbGVtLmRhdGFzZXQuYWxnb3JpdGhtS2V5ID0ga2V5O1xuICAgICAgbmF2LmFwcGVuZENoaWxkKGVsZW0pO1xuICAgIH1cbiAgfVxuXG4gIHNldEN1cnJlbnRBbGdvcml0aG0oYWxnbykge1xuICAgIHRoaXMuY3VycmVudEFsZ29yaXRobSA9IHRoaXMuYWxnb3JpdGhtc1thbGdvXS5mdW5jO1xuICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYWxnb3JpdGhtLWpzXCIpO1xuICAgIGVsZW1zWzBdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH1cblxuICBzZXRTdGFydE5vZGUoKSB7XG4gICAgY29uc3QgcmFuZFggPSBnZXRSYW5kb21OdW0oMCwgdGhpcy53aWR0aCAtIDEpO1xuICAgIGNvbnN0IHJhbmRZID0gZ2V0UmFuZG9tTnVtKDAsIHRoaXMuaGVpZ2h0IC0gMSk7XG5cbiAgICB0aGlzLm5vZGVzW2Ake3JhbmRYfS0ke3JhbmRZfWBdLnVwZGF0ZSh7XG4gICAgICBzdGF0dXM6IFwic3RhcnRcIixcbiAgICAgIGRpc3Q6IDAsXG4gICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbnNbXCJlYXN0XCJdLFxuICAgIH0pO1xuICAgIHRoaXMuc3RhcnROb2RlID0gdGhpcy5ub2Rlc1tgJHtyYW5kWH0tJHtyYW5kWX1gXTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnN0YXJ0Tm9kZS5pZCkuY2xhc3NMaXN0LmFkZChcInN0YXJ0XCIsIFwiZWFzdFwiKTtcbiAgfVxuXG4gIHNldEVuZE5vZGUoKSB7XG4gICAgY29uc3QgcmFuZFggPSBnZXREaWZmZXJlbnRSYW5kb21OdW0oMCwgdGhpcy53aWR0aCAtIDEsIHRoaXMuc3RhcnROb2RlLngpO1xuICAgIGNvbnN0IHJhbmRZID0gZ2V0RGlmZmVyZW50UmFuZG9tTnVtKDAsIHRoaXMuaGVpZ2h0IC0gMSwgdGhpcy5zdGFydE5vZGUueSk7XG5cbiAgICB0aGlzLm5vZGVzW2Ake3JhbmRYfS0ke3JhbmRZfWBdLnN0YXR1cyA9IFwiZW5kXCI7XG4gICAgdGhpcy5ub2Rlc1tgJHtyYW5kWH0tJHtyYW5kWX1gXS51cGRhdGUoe1xuICAgICAgc3RhdHVzOiBcImVuZFwiLFxuICAgIH0pO1xuXG4gICAgdGhpcy5lbmROb2RlID0gdGhpcy5ub2Rlc1tgJHtyYW5kWH0tJHtyYW5kWX1gXTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVuZE5vZGUuaWQpLmNsYXNzTGlzdC5hZGQoXCJlbmRcIik7XG4gIH1cblxuICBhZGROYXZBbGdvRWxlbXNFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWFsZ29yaXRobS1qc1wiKTtcblxuICAgIGVsZW1zLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQmxvY2tlZCA9IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImJsb2NrZWRcIik7XG4gICAgICAgIGlmIChpc0Jsb2NrZWQpIHJldHVybjtcblxuICAgICAgICBlbGVtcy5mb3JFYWNoKChlbGVtKSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB0aGlzLmN1cnJlbnRBbGdvcml0aG0gPSB0aGlzLmFsZ29yaXRobXNbXG4gICAgICAgICAgZS50YXJnZXQuZGF0YXNldC5hbGdvcml0aG1LZXlcbiAgICAgICAgXS5mdW5jO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRCdG5zRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0QnRuXCIpO1xuICAgIGNvbnN0IGNsZWFyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbGVhckJ0blwiKTtcblxuICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNQcmVwYXJlZCkge1xuICAgICAgICB0aGlzLmhhbmRsZUlzU2VhcmNoaW5nU3RhdGUodHJ1ZSk7XG4gICAgICAgIHRoaXMuaGFuZGxlSXNQcmVwYXJlZFN0YXRlKGZhbHNlKTtcblxuICAgICAgICBhd2FpdCB0aGlzLmN1cnJlbnRBbGdvcml0aG0oXG4gICAgICAgICAgdGhpcy5ub2RlcyxcbiAgICAgICAgICB0aGlzLnN0YXJ0Tm9kZSxcbiAgICAgICAgICB0aGlzLmVuZE5vZGUsXG4gICAgICAgICAgdGhpcy5zcGVlZFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmhhbmRsZUlzU2VhcmNoaW5nU3RhdGUoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNTZWFyY2hpbmcpIHtcbiAgICAgICAgdGhpcy5jbGVhckJvYXJkKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlSXNQcmVwYXJlZFN0YXRlKHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWRkQmxvY2tzRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgYmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51bnZpc2l0ZWRcIik7XG5cbiAgICBibG9ja3MuZm9yRWFjaCgoYmxvY2spID0+IHtcbiAgICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmhhbmRsZU1vdXNlRG93bihibG9jayk7XG4gICAgICB9KTtcblxuICAgICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmhhbmRsZU1vdXNlRW50ZXIoYmxvY2spO1xuICAgICAgfSk7XG5cbiAgICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVNb3VzZVVwKGJsb2NrKTtcbiAgICAgIH0pO1xuXG4gICAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuaGFuZGxlTW91c2VMZWF2ZShibG9jayk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZU1vdXNlRG93bihibG9jaykge1xuICAgIGNvbnN0IGlkID0gYmxvY2suaWQ7XG4gICAgaWYgKHRoaXMubm9kZXNbaWRdLnN0YXR1cyA9PT0gXCJzdGFydFwiIHx8IHRoaXMubm9kZXNbaWRdLnN0YXR1cyA9PT0gXCJlbmRcIikge1xuICAgICAgdGhpcy5kcmFnZ2VkTm9kZUlkID0gaWQ7XG4gICAgICB0aGlzLmlzTm9kZURyYWdnZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNOb2RlRHJhZ2dlZCkge1xuICAgICAgdGhpcy5jcmVhdGVXYWxsKGJsb2NrKTtcbiAgICAgIHRoaXMuc2V0TWFraW5nV2FsbHNTdGF0ZSh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVNb3VzZUVudGVyKGJsb2NrKSB7XG4gICAgaWYgKHRoaXMuaXNOb2RlRHJhZ2dlZCkge1xuICAgICAgY29uc3QgZHJhZ2dlZE5vZGUgPSB0aGlzLm5vZGVzW3RoaXMuZHJhZ2dlZE5vZGVJZF07XG4gICAgICBpZiAoZHJhZ2dlZE5vZGUuc3RhdHVzID09PSBcInN0YXJ0XCIgJiYgIWJsb2NrLmNsYXNzTGlzdC5jb250YWlucyhcImVuZFwiKSkge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb25OYW1lID0gZ2V0RGlyZWN0aW9uTmFtZShkcmFnZ2VkTm9kZS5kaXJlY3Rpb24pO1xuICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKFwic3RhcnRcIiwgZGlyZWN0aW9uTmFtZSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBkcmFnZ2VkTm9kZS5zdGF0dXMgPT09IFwiZW5kXCIgJiZcbiAgICAgICAgIWJsb2NrLmNsYXNzTGlzdC5jb250YWlucyhcInN0YXJ0XCIpXG4gICAgICApIHtcbiAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZChcImVuZFwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNNYWtpbmdXYWxscykge1xuICAgICAgdGhpcy5jcmVhdGVXYWxsKGJsb2NrKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVNb3VzZVVwKGJsb2NrKSB7XG4gICAgY29uc3QgaWQgPSBibG9jay5pZDtcbiAgICBpZiAodGhpcy5pc05vZGVEcmFnZ2VkICYmIGlkICE9PSB0aGlzLmRyYWdnZWROb2RlSWQpIHtcbiAgICAgIGlmICh0aGlzLm5vZGVzW3RoaXMuZHJhZ2dlZE5vZGVJZF0uc3RhdHVzID09PSBcInN0YXJ0XCIpIHtcbiAgICAgICAgdGhpcy5ub2Rlc1tpZF0udXBkYXRlKHtcbiAgICAgICAgICBzdGF0dXM6IFwic3RhcnRcIixcbiAgICAgICAgICBkaXN0OiAwLFxuICAgICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uc1tcImVhc3RcIl0sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXJ0Tm9kZSA9IHRoaXMubm9kZXNbaWRdO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzW3RoaXMuZHJhZ2dlZE5vZGVJZF0uc3RhdHVzID09PSBcImVuZFwiKSB7XG4gICAgICAgIHRoaXMubm9kZXNbaWRdLnVwZGF0ZSh7XG4gICAgICAgICAgc3RhdHVzOiBcImVuZFwiLFxuICAgICAgICAgIGRpc3Q6IEluZmluaXR5LFxuICAgICAgICAgIGRpcmVjdGlvbjogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW5kTm9kZSA9IHRoaXMubm9kZXNbaWRdO1xuICAgICAgfVxuXG4gICAgICAvLyB1cGRhdGUgdGhlIGluaXRpYWxseSBkcmFnZ2VkIG5vZGVcbiAgICAgIHRoaXMubm9kZXNbdGhpcy5kcmFnZ2VkTm9kZUlkXS51cGRhdGUoe1xuICAgICAgICBzdGF0dXM6IFwiYmxvY2tcIixcbiAgICAgICAgZGlzdDogSW5maW5pdHksXG4gICAgICAgIGRpcmVjdGlvbjogbnVsbCxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmlzTm9kZURyYWdnZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuZHJhZ2dlZE5vZGVJZCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0TWFraW5nV2FsbHNTdGF0ZShmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTW91c2VMZWF2ZShibG9jaykge1xuICAgIGlmICh0aGlzLmlzTm9kZURyYWdnZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnZWROb2RlID0gdGhpcy5ub2Rlc1t0aGlzLmRyYWdnZWROb2RlSWRdO1xuICAgICAgaWYgKGRyYWdnZWROb2RlLnN0YXR1cyA9PT0gXCJzdGFydFwiKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbk5hbWUgPSBnZXREaXJlY3Rpb25OYW1lKGRyYWdnZWROb2RlLmRpcmVjdGlvbik7XG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGFydFwiLCBkaXJlY3Rpb25OYW1lKTtcbiAgICAgIH0gZWxzZSBpZiAoZHJhZ2dlZE5vZGUuc3RhdHVzID09PSBcImVuZFwiKSB7XG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoXCJlbmRcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gV0FMTFNcbiAgY3JlYXRlV2FsbChibG9jaykge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gYmxvY2suY2xhc3NMaXN0LmFkZChcIndhbGxcIikpO1xuICB9XG5cbiAgYmxvY2tIYXNXYWxsKGJsb2NrKSB7XG4gICAgcmV0dXJuIGJsb2NrLmNsYXNzTGlzdC5jb250YWlucyhcIndhbGxcIik7XG4gIH1cblxuICBzZXRNYWtpbmdXYWxsc1N0YXRlKGJvb2wpIHtcbiAgICB0aGlzLmlzTWFraW5nV2FsbHMgPSBib29sO1xuICB9XG5cbiAgaGFuZGxlSXNTZWFyY2hpbmdTdGF0ZShpc1NlYXJjaGluZykge1xuICAgIHRoaXMuaXNTZWFyY2hpbmcgPSBpc1NlYXJjaGluZztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsZWFyQnRuXCIpLmRpc2FibGVkID0gaXNTZWFyY2hpbmc7XG4gIH1cblxuICBoYW5kbGVJc1ByZXBhcmVkU3RhdGUoaXNQcmVwYXJlZCkge1xuICAgIHRoaXMuaXNQcmVwYXJlZCA9IGlzUHJlcGFyZWQ7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydEJ0blwiKS5kaXNhYmxlZCA9ICFpc1ByZXBhcmVkO1xuICB9XG5cbiAgY2xlYXJCb2FyZCgpIHtcbiAgICBmb3IgKGxldCB5ID0gdGhpcy5oZWlnaHQgLSAxOyB5ID49IDA7IHktLSkge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLndpZHRoOyB4KyspIHtcbiAgICAgICAgdGhpcy5ub2Rlc1tgJHt4fS0ke3l9YF0udXBkYXRlKHtcbiAgICAgICAgICBzdGF0dXM6IFwiYmxvY2tcIixcbiAgICAgICAgICBkaXN0OiBJbmZpbml0eSxcbiAgICAgICAgICBwcmV2SWQ6IG51bGwsXG4gICAgICAgICAgZGlyZWN0aW9uOiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eH0tJHt5fWApLmNsYXNzTGlzdCA9IFtdO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fS0ke3l9YCkuY2xhc3NMaXN0LmFkZChcInVudmlzaXRlZFwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGFydE5vZGUoKTtcbiAgICB0aGlzLnNldEVuZE5vZGUoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcbiIsImNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihzdGF0dXMsIHgsIHksIGRpc3QsIHByZXZJZCwgZGlyZWN0aW9uKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgdGhpcy5pZCA9IGAke3h9LSR7eX1gO1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmRpc3QgPSBkaXN0O1xuICAgIHRoaXMucHJldklkID0gcHJldklkO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHVwZGF0ZSh2YWx1ZXMpIHtcbiAgICBmb3IgKGxldCBmaWVsZEtleSBvZiBPYmplY3Qua2V5cyh0aGlzKSkge1xuICAgICAgZm9yIChsZXQgdmFsS2V5IG9mIE9iamVjdC5rZXlzKHZhbHVlcykpIHtcbiAgICAgICAgaWYgKGZpZWxkS2V5ID09PSB2YWxLZXkpIHtcbiAgICAgICAgICB0aGlzW2ZpZWxkS2V5XSA9IHZhbHVlc1t2YWxLZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vZGU7XG4iLCJpbXBvcnQgYXN5bmNEZWxheSBmcm9tIFwiLi4vaGVscGVycy9hc3luY0RlbGF5XCI7XG5pbXBvcnQgeyBnZXROZWlnaGJvcnNJZHMgfSBmcm9tIFwiLi9oZWxwZXJzL25laWdoYm9yc1wiO1xuaW1wb3J0IHsgdmlzdWFsaXplUGF0aCB9IGZyb20gXCIuLi9oZWxwZXJzL3Zpc3VhbGl6ZVBhdGhcIjtcbmltcG9ydCB7IGdldENsb3Nlc3ROb2RlIH0gZnJvbSBcIi4vaGVscGVycy9ub2Rlc1wiO1xuXG5leHBvcnQgY29uc3QgYnJlYWR0aEZpcnN0ID0gYXN5bmMgKG5vZGVzLCBzdGFydCwgZW5kLCBzcGVlZCkgPT4ge1xuICBsZXQgdW52aXNpdGVkTm9kZXNJZHMgPSBPYmplY3Qua2V5cyhub2Rlcyk7XG5cbiAgbGV0IHZpc2l0ZWROb2RlcyA9IHt9O1xuICBsZXQgZm91bmRFbmQgPSBmYWxzZTtcbiAgY29uc3QgaXNTYW1lTm9kZSA9IChuMSwgbjIpID0+IG4xLnggPT09IG4yLnggJiYgbjEueSA9PT0gbjIueTtcblxuICB3aGlsZSAodW52aXNpdGVkTm9kZXNJZHMubGVuZ3RoKSB7XG4gICAgY29uc3QgY3Vyck5vZGUgPSBnZXRDbG9zZXN0Tm9kZSh1bnZpc2l0ZWROb2Rlc0lkcywgbm9kZXMpO1xuICAgIC8vIFZJU1VBTElaRVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGN1cnJOb2RlLmlkKS5jbGFzc0xpc3QuYWRkKFwidmlzaXRlZFwiKTtcbiAgICBhd2FpdCBhc3luY0RlbGF5KHNwZWVkKTtcblxuICAgIGlmICghY3Vyck5vZGUpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHZpc2l0ZWROb2Rlc1tjdXJyTm9kZS5pZF0gPSBjdXJyTm9kZTtcblxuICAgIGlmIChpc1NhbWVOb2RlKGN1cnJOb2RlLCBlbmQpKSB7XG4gICAgICBmb3VuZEVuZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBnZXROZWlnaGJvcnNJZHMobm9kZXMsIGN1cnJOb2RlLngsIGN1cnJOb2RlLnkpLmZvckVhY2goKG5laWdoYm9ySWQpID0+IHtcbiAgICAgIGNvbnN0IGlzTmVpZ2hib3JGdXJ0aGVyRnJvbVN0YXJ0ID0gY3Vyck5vZGUuZGlzdCA8IG5vZGVzW25laWdoYm9ySWRdLmRpc3Q7XG5cbiAgICAgIGlmIChpc05laWdoYm9yRnVydGhlckZyb21TdGFydCkge1xuICAgICAgICBub2Rlc1tuZWlnaGJvcklkXS5kaXN0ID0gY3Vyck5vZGUuZGlzdCArIDE7XG4gICAgICAgIG5vZGVzW25laWdoYm9ySWRdLnByZXZJZCA9IGN1cnJOb2RlLmlkO1xuICAgICAgfVxuXG4gICAgICAvLyBWSVNVQUxJWkVcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChub2Rlc1tuZWlnaGJvcklkXS5pZClcbiAgICAgICAgLmNsYXNzTGlzdC5yZXBsYWNlKFwidW52aXNpdGVkXCIsIFwibmVpZ2hib3JcIik7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoZm91bmRFbmQpIHtcbiAgICB2aXN1YWxpemVQYXRoKHZpc2l0ZWROb2Rlcywgc3RhcnQsIGVuZCwgc3BlZWQpO1xuICB9XG59O1xuIiwiaW1wb3J0IGFzeW5jRGVsYXkgZnJvbSBcIi4uL2hlbHBlcnMvYXN5bmNEZWxheVwiO1xuaW1wb3J0IHsgZ2V0RGlzdGFuY2VCZXR3ZWVuTm9kZXMsIGdldE5vZGVEaXJlY3Rpb24gfSBmcm9tIFwiLi9oZWxwZXJzL3dlaWdodGVkXCI7XG5pbXBvcnQgeyBnZXROZWlnaGJvcnNJZHMgfSBmcm9tIFwiLi9oZWxwZXJzL25laWdoYm9yc1wiO1xuaW1wb3J0IHsgdmlzdWFsaXplUGF0aCB9IGZyb20gXCIuLi9oZWxwZXJzL3Zpc3VhbGl6ZVBhdGhcIjtcbmltcG9ydCB7IGdldENsb3Nlc3ROb2RlIH0gZnJvbSBcIi4vaGVscGVycy9ub2Rlc1wiO1xuXG5leHBvcnQgY29uc3QgZGlqa3N0cmEgPSBhc3luYyAobm9kZXMsIHN0YXJ0LCBlbmQsIHNwZWVkKSA9PiB7XG4gIGxldCB1bnZpc2l0ZWROb2Rlc0lkcyA9IE9iamVjdC5rZXlzKG5vZGVzKTtcblxuICBsZXQgdmlzaXRlZE5vZGVzID0ge307XG4gIGxldCBmb3VuZEVuZCA9IGZhbHNlO1xuICBjb25zdCBpc1NhbWVOb2RlID0gKG4xLCBuMikgPT4gbjEueCA9PT0gbjIueCAmJiBuMS55ID09PSBuMi55O1xuXG4gIHdoaWxlICh1bnZpc2l0ZWROb2Rlc0lkcy5sZW5ndGgpIHtcbiAgICBjb25zdCBjdXJyTm9kZSA9IGdldENsb3Nlc3ROb2RlKHVudmlzaXRlZE5vZGVzSWRzLCBub2Rlcyk7XG4gICAgLy8gVklTVUFMSVpFXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY3Vyck5vZGUuaWQpLmNsYXNzTGlzdC5hZGQoXCJ2aXNpdGVkXCIpO1xuICAgIGF3YWl0IGFzeW5jRGVsYXkoc3BlZWQpO1xuXG4gICAgaWYgKCFjdXJyTm9kZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdmlzaXRlZE5vZGVzW2N1cnJOb2RlLmlkXSA9IGN1cnJOb2RlO1xuXG4gICAgaWYgKGlzU2FtZU5vZGUoY3Vyck5vZGUsIGVuZCkpIHtcbiAgICAgIGZvdW5kRW5kID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGdldE5laWdoYm9yc0lkcyhub2RlcywgY3Vyck5vZGUueCwgY3Vyck5vZGUueSkuZm9yRWFjaCgobmVpZ2hib3JJZCkgPT4ge1xuICAgICAgY29uc3QgZGlzdGFuY2VCZXR3ZWVuTm9kZXMgPSBnZXREaXN0YW5jZUJldHdlZW5Ob2RlcyhcbiAgICAgICAgY3Vyck5vZGUsXG4gICAgICAgIG5vZGVzW25laWdoYm9ySWRdXG4gICAgICApO1xuXG4gICAgICAvLyBWSVNVQUxJWkVcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChub2Rlc1tuZWlnaGJvcklkXS5pZClcbiAgICAgICAgLmNsYXNzTGlzdC5yZXBsYWNlKFwidW52aXNpdGVkXCIsIFwibmVpZ2hib3JcIik7XG5cbiAgICAgIGNvbnN0IGlzTmVpZ2hib3JGdXJ0aGVyRnJvbVN0YXJ0ID1cbiAgICAgICAgY3Vyck5vZGUuZGlzdCArIGRpc3RhbmNlQmV0d2Vlbk5vZGVzIDwgbm9kZXNbbmVpZ2hib3JJZF0uZGlzdDtcblxuICAgICAgaWYgKGlzTmVpZ2hib3JGdXJ0aGVyRnJvbVN0YXJ0KSB7XG4gICAgICAgIG5vZGVzW25laWdoYm9ySWRdLmRpc3QgPSBjdXJyTm9kZS5kaXN0ICsgZGlzdGFuY2VCZXR3ZWVuTm9kZXM7XG4gICAgICAgIG5vZGVzW25laWdoYm9ySWRdLnByZXZJZCA9IGN1cnJOb2RlLmlkO1xuICAgICAgICBub2Rlc1tuZWlnaGJvcklkXS5kaXJlY3Rpb24gPSBnZXROb2RlRGlyZWN0aW9uKFxuICAgICAgICAgIGN1cnJOb2RlLFxuICAgICAgICAgIG5vZGVzW25laWdoYm9ySWRdXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAoZm91bmRFbmQpIHtcbiAgICB2aXN1YWxpemVQYXRoKHZpc2l0ZWROb2Rlcywgc3RhcnQsIGVuZCwgc3BlZWQpO1xuICB9XG59O1xuIiwiLyoqXG4gKiBHZXQgbm9kZSBuZWlnaGJvcnMncyBrZXlzXG4gKi9cbmV4cG9ydCBjb25zdCBnZXROZWlnaGJvcnNJZHMgPSAobm9kZXMsIHgsIHkpID0+IHtcbiAgbGV0IGFyciA9IFtdO1xuICBpZiAoXG4gICAgbm9kZXNbYCR7eH0tJHt5ICsgMX1gXSAmJlxuICAgICFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fS0ke3kgKyAxfWApLmNsYXNzTGlzdC5jb250YWlucyhcIndhbGxcIilcbiAgKSB7XG4gICAgYXJyLnB1c2goYCR7eH0tJHt5ICsgMX1gKTtcbiAgfVxuICBpZiAoXG4gICAgbm9kZXNbYCR7eCArIDF9LSR7eX1gXSAmJlxuICAgICFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4ICsgMX0tJHt5fWApLmNsYXNzTGlzdC5jb250YWlucyhcIndhbGxcIilcbiAgKSB7XG4gICAgYXJyLnB1c2goYCR7eCArIDF9LSR7eX1gKTtcbiAgfVxuICBpZiAoXG4gICAgbm9kZXNbYCR7eH0tJHt5IC0gMX1gXSAmJlxuICAgICFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fS0ke3kgLSAxfWApLmNsYXNzTGlzdC5jb250YWlucyhcIndhbGxcIilcbiAgKSB7XG4gICAgYXJyLnB1c2goYCR7eH0tJHt5IC0gMX1gKTtcbiAgfVxuICBpZiAoXG4gICAgbm9kZXNbYCR7eCAtIDF9LSR7eX1gXSAmJlxuICAgICFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4IC0gMX0tJHt5fWApLmNsYXNzTGlzdC5jb250YWlucyhcIndhbGxcIilcbiAgKSB7XG4gICAgYXJyLnB1c2goYCR7eCAtIDF9LSR7eX1gKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcbiIsIi8qKlxuICogR2V0IHRoZSBjbG9zZXN0IG5vZGVcbiAqL1xuXG5leHBvcnQgY29uc3QgZ2V0Q2xvc2VzdE5vZGUgPSAodW52aXNpdGVkSWRzLCBub2RlcykgPT4ge1xuICBsZXQgbWluID0gSW5maW5pdHk7XG4gIGxldCBtaW5EaXN0Tm9kZUlkID0gMDtcbiAgbGV0IGluZGV4ID0gMDtcblxuICB1bnZpc2l0ZWRJZHMuZm9yRWFjaCgoaWQsIGkpID0+IHtcbiAgICBpZiAobm9kZXNbaWRdKSB7XG4gICAgICBpZiAobm9kZXNbaWRdLmRpc3QgPCBtaW4pIHtcbiAgICAgICAgbWluID0gbm9kZXNbaWRdLmRpc3Q7XG4gICAgICAgIG1pbkRpc3ROb2RlSWQgPSBpZDtcbiAgICAgICAgaW5kZXggPSBpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgdW52aXNpdGVkSWRzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgcmV0dXJuIG5vZGVzW21pbkRpc3ROb2RlSWRdO1xufTtcbiIsIi8qKlxuICogUG9zc2libGUgZGlyZWN0aW9ucyBvZiBub2RlXG4gKi9cbmV4cG9ydCBjb25zdCBkaXJlY3Rpb25zID0ge1xuICBub3J0aDogMCxcbiAgZWFzdDogMSxcbiAgc291dGg6IDIsXG4gIHdlc3Q6IDMsXG59O1xuXG5jb25zdCBkaXJlY3Rpb25zTmFtZSA9IFtcIm5vcnRoXCIsIFwiZWFzdFwiLCBcInNvdXRoXCIsIFwid2VzdFwiXTtcblxuLyoqXG4gKiBHZXQgZGlyZWN0aW9uIG5hbWUgYnkgcHJvdmlkZWQgaW5kZXhcbiAqL1xuZXhwb3J0IGNvbnN0IGdldERpcmVjdGlvbk5hbWUgPSAoaW5kZXgpID0+IGRpcmVjdGlvbnNOYW1lW2luZGV4XTtcblxuLyoqXG4gKiBOb2RlIGNhbiBiZSBkaXJlY3RlZCBpbnRvIDQgZGlyZWN0aW9ucyAtIG5vcnRoLCBlYXN0LCBzb3V0aCBhbmQgd2VzdFxuICogVGhlIGFycmF5IHJlcHJlc2VudHMgdGhlIHdlaWdodCBvZiBjaG9vc2luZyB0aGUgbmV4dCBkaXJlY3Rpb25cbiAqIDkwIGRlZ3JlZSB0dXJuIGNvc3RzIDEgcG9pbnRzXG4gKiBbMF0gLSBnbyBub3J0aCB3ZWlnaHRcbiAqIFsxXSAtIGdvIGVhc3Qgd2VpZ2h0XG4gKiBbMl0gLSBnbyBzb3V0aCB3ZWlnaHRcbiAqIFszXSAtIGdvIHdlc3Qgd2VpZ2h0XG4gKi9cbmV4cG9ydCBjb25zdCBub3J0aERpcmVjdGlvbldlaWdodHMgPSBbMCwgMSwgMiwgMV07XG5leHBvcnQgY29uc3QgZWFzdERpcmVjdGlvbldlaWdodHMgPSBbMSwgMCwgMSwgMl07XG5leHBvcnQgY29uc3Qgc291dGhEaXJlY3Rpb25XZWlnaHRzID0gWzIsIDEsIDAsIDFdO1xuZXhwb3J0IGNvbnN0IHdlc3REaXJlY3Rpb25XZWlnaHRzID0gWzEsIDIsIDEsIDBdO1xuXG5leHBvcnQgY29uc3QgbW92ZVdlaWdodCA9IDE7XG5cbi8qKlxuICogR2V0IGRpc3RhbmNlIGJldHdlZW4gdHdvIG5vZGVzIGJhc2VkIG9uIHRoZSB3ZWlnaHRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldERpc3RhbmNlQmV0d2Vlbk5vZGVzID0gKG5vZGVfMSwgbm9kZV8yKSA9PiB7XG4gIC8vIG5vZGVfMiBpcyB1cFxuICBpZiAobm9kZV8xLnkgPCBub2RlXzIueSAmJiBub2RlXzEueCA9PT0gbm9kZV8yLngpIHtcbiAgICByZXR1cm4gbm9ydGhEaXJlY3Rpb25XZWlnaHRzW25vZGVfMS5kaXJlY3Rpb25dICsgbW92ZVdlaWdodDtcbiAgfVxuICAvLyBub2RlXzIgaXMgcmlnaHRcbiAgZWxzZSBpZiAobm9kZV8xLnggPCBub2RlXzIueCAmJiBub2RlXzEueSA9PT0gbm9kZV8yLnkpIHtcbiAgICByZXR1cm4gZWFzdERpcmVjdGlvbldlaWdodHNbbm9kZV8xLmRpcmVjdGlvbl0gKyBtb3ZlV2VpZ2h0O1xuICB9XG4gIC8vIG5vZGVfMiBpcyBib3R0b21cbiAgZWxzZSBpZiAobm9kZV8xLnkgPiBub2RlXzIueSAmJiBub2RlXzEueCA9PT0gbm9kZV8yLngpIHtcbiAgICByZXR1cm4gc291dGhEaXJlY3Rpb25XZWlnaHRzW25vZGVfMS5kaXJlY3Rpb25dICsgbW92ZVdlaWdodDtcbiAgfVxuICAvLyBub2RlXzIgaXMgbGVmdFxuICBlbHNlIGlmIChub2RlXzEueCA+IG5vZGVfMi54ICYmIG5vZGVfMS55ID09PSBub2RlXzIueSkge1xuICAgIHJldHVybiB3ZXN0RGlyZWN0aW9uV2VpZ2h0c1tub2RlXzEuZGlyZWN0aW9uXSArIG1vdmVXZWlnaHQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJTb21ldGhpbmcgd2VudCB3cm9uZyB3aGVuIHNldHRpbmcgdGhlIGRpc3RhbmNlIGJldHdlZW4gbm9kZXMuXCJcbiAgICApO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybiBkaXJlY3Rpb24gb2Ygbm9kZV8yIGJhc2VkIG9uIHRoZWlyIHBvc2l0aW9uc1xuICovXG5leHBvcnQgY29uc3QgZ2V0Tm9kZURpcmVjdGlvbiA9IChub2RlXzEsIG5vZGVfMikgPT4ge1xuICBpZiAobm9kZV8xLnkgPCBub2RlXzIueSAmJiBub2RlXzEueCA9PT0gbm9kZV8yLngpIHtcbiAgICByZXR1cm4gZGlyZWN0aW9uc1tcIm5vcnRoXCJdO1xuICB9IGVsc2UgaWYgKG5vZGVfMS54IDwgbm9kZV8yLnggJiYgbm9kZV8xLnkgPT09IG5vZGVfMi55KSB7XG4gICAgcmV0dXJuIGRpcmVjdGlvbnNbXCJlYXN0XCJdO1xuICB9IGVsc2UgaWYgKG5vZGVfMS55ID4gbm9kZV8yLnkgJiYgbm9kZV8xLnggPT09IG5vZGVfMi54KSB7XG4gICAgcmV0dXJuIGRpcmVjdGlvbnNbXCJzb3V0aFwiXTtcbiAgfSBlbHNlIGlmIChub2RlXzEueCA+IG5vZGVfMi54ICYmIG5vZGVfMS55ID09PSBub2RlXzIueSkge1xuICAgIHJldHVybiBkaXJlY3Rpb25zW1wid2VzdFwiXTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTb21ldGhpbmcgd2VudCB3cm9uZyB3aGVuIHNldHRpbmcgdGhlIGRpcmVjdGlvbiBvZiBub2RlLlwiKTtcbiAgfVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IChtcykgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn07XG4iLCJleHBvcnQgY29uc3QgY3JlYXRlQmxvY2sgPSAocGFyZW50LCBibG9ja1NpemUsIHgsIHkpID0+IHtcbiAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgYmxvY2suaWQgPSBgJHt4fS0ke3l9YDtcbiAgYmxvY2suY2xhc3NMaXN0LmFkZChcInVudmlzaXRlZFwiKTtcbiAgYmxvY2suc3R5bGUud2lkdGggPSBgJHtibG9ja1NpemV9cHhgO1xuICBibG9jay5zdHlsZS5oZWlnaHQgPSBgJHtibG9ja1NpemV9cHhgO1xuXG4gIGJsb2NrLmRhdGFzZXQueCA9IHg7XG4gIGJsb2NrLmRhdGFzZXQueSA9IHk7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKGJsb2NrKTtcbn07XG4iLCJpbXBvcnQgeyBnZXRSYW5kb21OdW0gfSBmcm9tIFwiLi9nZXRSYW5kb21OdW1cIjtcblxuZXhwb3J0IGNvbnN0IGdldERpZmZlcmVudFJhbmRvbU51bSA9IChtaW4sIG1heCwgZGlmZmVyZW50RnJvbSkgPT4ge1xuICBsZXQgcmFuZDtcbiAgZG8ge1xuICAgIHJhbmQgPSBnZXRSYW5kb21OdW0obWluLCBtYXgpO1xuICB9IHdoaWxlIChyYW5kID09PSBkaWZmZXJlbnRGcm9tKTtcblxuICByZXR1cm4gcmFuZDtcbn07XG4iLCJleHBvcnQgY29uc3QgZ2V0UmFuZG9tTnVtID0gKG1pbiwgbWF4KSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpICsgbWluO1xuIiwiaW1wb3J0IGFzeW5jRGVsYXkgZnJvbSBcIi4vYXN5bmNEZWxheVwiO1xuXG5leHBvcnQgY29uc3QgdmlzdWFsaXplUGF0aCA9IGFzeW5jICh2aXNpdGVkTm9kZXMsIHN0YXJ0LCBlbmQsIHNwZWVkKSA9PiB7XG4gIGxldCBwYXRoSWRzID0gW107XG4gIGxldCBmb3VuZFN0YXJ0ID0gZmFsc2U7XG4gIGxldCBjdXJyTm9kZSA9IHZpc2l0ZWROb2Rlc1tgJHtlbmQueH0tJHtlbmQueX1gXTtcbiAgcGF0aElkcy5wdXNoKGN1cnJOb2RlLmlkKTtcblxuICB3aGlsZSAoIWZvdW5kU3RhcnQpIHtcbiAgICBpZiAoY3Vyck5vZGUueCA9PT0gc3RhcnQueCAmJiBjdXJyTm9kZS55ID09PSBzdGFydC55KSB7XG4gICAgICBmb3VuZFN0YXJ0ID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBwYXRoSWRzLnB1c2goY3Vyck5vZGUucHJldklkKTtcbiAgICBjdXJyTm9kZSA9IHZpc2l0ZWROb2Rlc1tjdXJyTm9kZS5wcmV2SWRdO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IHBhdGhJZHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXRoSWRzW2ldKS5jbGFzc0xpc3QuYWRkKFwicGF0aFwiKTtcbiAgICBhd2FpdCBhc3luY0RlbGF5KHNwZWVkICsgMTAwKTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=