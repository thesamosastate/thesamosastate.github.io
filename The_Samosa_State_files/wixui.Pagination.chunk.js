((typeof self !== 'undefined' ? self : this)["webpackJsonp_wix_ui_santa"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp_wix_ui_santa"] || []).push([[29],{

/***/ 10:
/*!*********************************************!*\
  !*** ../node_modules/fbjs/lib/invariant.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ 11:
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ../node_modules/wix-ui-core/dist/src/clients/GoogleMaps/google2address/google2address.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/address-input/AddressInput.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/deprecated/divider/Divider.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/dropdown-content/DropdownContent.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/dropdown-option/DropdownOption.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/dropdown/Dropdown.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/input-with-options/InputWithOptions.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/input/Input.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/pagination/PageStrip.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/pagination/Pagination.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/popover/Popover.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/popover/index.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/popover/modifiers.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/radio-button/RadioButton.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/slider/Slider.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/slider/Thumb.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/slider/Ticks.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/time-picker/Tickers.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/time-picker/TimePicker.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/video/Video.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/video/players/DailyMotion.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/video/players/Facebook.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/video/players/Playable.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/video/players/Twitch.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/video/players/Vimeo.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/video/players/YouTube.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/video/players/playerHOC.js (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ 19:
/*!**********************************************!*\
  !*** ../node_modules/object-assign/index.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 2:
/*!***********************************************************************!*\
  !*** ../node_modules/@stylable/runtime/cjs/css-runtime-stylesheet.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function create(root, namespace, locals, css, depth, id) {
    var dataNamespace = 'data-' + namespace.toLowerCase() + '-';
    function cssStates(stateMapping) {
        return stateMapping
            ? Object.keys(stateMapping).reduce(function (states, key) {
                var stateValue = stateMapping[key];
                if (stateValue === undefined ||
                    stateValue === null ||
                    stateValue === false) {
                    return states;
                }
                states[dataNamespace + key.toLowerCase()] = stateValue;
                return states;
            }, {})
            : {};
    }
    function get(localName) {
        return locals[localName];
    }
    function mapClasses(className) {
        return className
            .split(/\s+/g)
            .map(function (className) { return get(className) || className; })
            .join(' ');
    }
    locals.$root = root;
    locals.$namespace = namespace;
    locals.$depth = depth;
    locals.$id = id;
    locals.$css = css;
    locals.$get = get;
    locals.$cssStates = cssStates;
    function stylable_runtime_stylesheet(className, states, inheritedAttributes) {
        className = className ? mapClasses(className) : '';
        var base = cssStates(states);
        if (inheritedAttributes) {
            for (var k in inheritedAttributes) {
                if (k.match(/^data-/)) {
                    base[k] = inheritedAttributes[k];
                }
            }
            if (inheritedAttributes.className) {
                className += ' ' + inheritedAttributes.className;
            }
        }
        if (className) {
            base.className = className;
        }
        return base;
    }
    Object.setPrototypeOf(stylable_runtime_stylesheet, locals);
    return stylable_runtime_stylesheet;
}
exports.create = create;
function createTheme(css, depth, id) {
    return { $css: css, $depth: depth, $id: id, $theme: true };
}
exports.createTheme = createTheme;
//# sourceMappingURL=css-runtime-stylesheet.js.map

/***/ }),

/***/ 27:
/*!************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/pagination/Pagination.st.css ***!
  \************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })
var $stylesheet = __webpack_require__(/*! ../node_modules/@stylable/runtime/cjs/css-runtime-stylesheet.js */ 2);
var $renderer = __webpack_require__(/*! ../node_modules/@stylable/runtime/cjs/css-runtime-renderer.js */ 3).$;
exports.default = $stylesheet.create(
  "root",
  "Pagination2814882397",
  {"button-common-mixin":"Pagination2814882397--button-common-mixin","root":"Pagination2814882397--root","navButton":"Pagination2814882397--navButton","disabled":"Pagination2814882397--disabled","navButtonFirst":"Pagination2814882397--navButtonFirst","navButtonPrevious":"Pagination2814882397--navButtonPrevious","navButtonNext":"Pagination2814882397--navButtonNext","navButtonLast":"Pagination2814882397--navButtonLast","pageStrip":"Pagination2814882397--pageStrip","pageStripInner":"Pagination2814882397--pageStripInner","pageStripTemplate":"Pagination2814882397--pageStripTemplate","pageButton":"Pagination2814882397--pageButton","currentPage":"Pagination2814882397--currentPage","gap":"Pagination2814882397--gap","pageForm":"Pagination2814882397--pageForm","pageInput":"Pagination2814882397--pageInput","totalPages":"Pagination2814882397--totalPages","slash":"Pagination2814882397--slash"},
  "",
  1,
  /*! ../node_modules/wix-ui-core/dist/src/components/pagination/Pagination.st.css */ 27
);



/***/ }),

/***/ 275:
/*!********************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/pagination/Pagination.js ***!
  \********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 11);
var React = __webpack_require__(/*! react */ 0);
var PageStrip_1 = __webpack_require__(/*! ./PageStrip */ 519);
var Pagination_st_css_1 = __webpack_require__(/*! ./Pagination.st.css */ 27);
var root_min_width_1 = __webpack_require__(/*! ./root-min-width */ 521);
var upperCaseFirst = function (str) { return str[0].toUpperCase() + str.slice(1); };
exports.getId = function (idPrefix, name) {
    if (idPrefix === void 0) { idPrefix = ''; }
    if (name === void 0) { name = ''; }
    return idPrefix ? idPrefix + name : null;
};
exports.calculateWidth = function (totalPages) { return totalPages.toString().length + "em"; };
var ButtonType;
(function (ButtonType) {
    ButtonType["Prev"] = "previous";
    ButtonType["Next"] = "next";
    ButtonType["First"] = "first";
    ButtonType["Last"] = "last";
})(ButtonType || (ButtonType = {}));
var Pagination = /** @class */ (function (_super) {
    tslib_1.__extends(Pagination, _super);
    function Pagination() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            pageInputValue: String(_this.props.currentPage),
            pageInputHasError: false
        };
        _this.handlePageInputChange = function (e) {
            _this.setState({
                pageInputValue: e.target.value,
                pageInputHasError: false
            });
        };
        _this.handlePageInputKeyDown = function (event) {
            // Enter
            if (event.keyCode === 13) {
                var page = Number(_this.state.pageInputValue);
                if (page !== _this.props.currentPage) {
                    if (1 <= page && page <= _this.props.totalPages) {
                        _this.props.onChange({ event: event, page: page });
                    }
                    else {
                        _this.setState({ pageInputHasError: true });
                    }
                }
            }
        };
        _this.handlePageInputBlur = function (event) {
            _this.setState({
                pageInputValue: String(_this.props.currentPage),
                pageInputHasError: false
            });
        };
        _this.handlePageClick = function (event, page) {
            _this.props.onChange({ event: event, page: page });
        };
        _this.handlePageKeyDown = function (event, page) {
            // Enter or Space
            if (event.keyCode === 13 || event.keyCode === 32) {
                _this.props.onChange({ event: event, page: page });
            }
        };
        return _this;
    }
    Pagination.prototype.updateRootMinWidth = function () {
        root_min_width_1.measureAndSetRootMinWidth(this.rootNode, this.props.paginationMode, this.props.id);
    };
    Pagination.prototype.componentDidMount = function () {
        this.props.updateResponsiveLayout && this.updateRootMinWidth();
    };
    Pagination.prototype.componentDidUpdate = function () {
        this.props.updateResponsiveLayout && this.updateRootMinWidth();
    };
    Pagination.prototype.getId = function (elementName) {
        if (elementName === void 0) { elementName = ''; }
        return exports.getId(this.props.id, elementName);
    };
    Object.defineProperty(Pagination.prototype, "maxPagesToShow", {
        get: function () {
            if (this.props.maxPagesToShow) {
                return this.props.maxPagesToShow;
            }
            else if (this.props.responsive) {
                return 20;
            }
            else {
                return 7;
            }
        },
        enumerable: true,
        configurable: true
    });
    Pagination.prototype.renderPageStrip = function () {
        return (React.createElement(PageStrip_1.PageStrip, { id: this.props.id, totalPages: this.props.totalPages, currentPage: this.props.currentPage, maxPagesToShow: this.maxPagesToShow, showFirstPage: this.props.showFirstPage, showLastPage: this.props.showLastPage, responsive: this.props.responsive, pageUrl: this.props.pageUrl, gapLabel: this.props.gapLabel, onPageClick: this.handlePageClick, onPageKeyDown: this.handlePageKeyDown, updateResponsiveLayout: this.props.updateResponsiveLayout, disabled: this.props.disabled }));
    };
    Pagination.prototype.renderPageForm = function () {
        return (React.createElement("div", { "data-hook": "page-form", id: this.getId('pageForm'), className: Pagination_st_css_1.default.pageForm, dir: "ltr" },
            React.createElement("input", { id: this.getId('pageInput'), "data-hook": "page-input", type: "number", className: Pagination_st_css_1.default.pageInput, min: 1, max: this.props.totalPages, value: this.state.pageInputValue, disabled: this.props.disabled, onChange: this.handlePageInputChange, onKeyDown: this.handlePageInputKeyDown, "aria-label": 'Page number, select a number between 1 and ' + this.props.totalPages, onBlur: this.handlePageInputBlur, style: { width: exports.calculateWidth(this.props.totalPages) } }),
            this.props.showInputModeTotalPages && [
                React.createElement("span", { key: "slash", id: this.getId('slash'), className: Pagination_st_css_1.default.slash }, this.props.slashLabel),
                React.createElement("span", { key: "total-pages", id: this.getId('totalPages'), "data-hook": "total-pages", className: Pagination_st_css_1.default.totalPages }, this.props.totalPages)
            ]));
    };
    Pagination.prototype.renderNavButton = function (type) {
        var _this = this;
        var _a;
        var _b = this.props, currentPage = _b.currentPage, totalPages = _b.totalPages, pageUrl = _b.pageUrl;
        var disabled = this.props.disabled || (((type === ButtonType.First || type === ButtonType.Prev) && currentPage <= 1) ||
            ((type === ButtonType.Last || type === ButtonType.Next) && currentPage >= totalPages));
        var _c = (_a = {},
            _a[ButtonType.Prev] = [Pagination_st_css_1.default.navButtonPrevious, this.props.previousLabel, currentPage - 1],
            _a[ButtonType.Next] = [Pagination_st_css_1.default.navButtonNext, this.props.nextLabel, currentPage + 1],
            _a[ButtonType.First] = [Pagination_st_css_1.default.navButtonFirst, this.props.firstLabel, 1],
            _a[ButtonType.Last] = [Pagination_st_css_1.default.navButtonLast, this.props.lastLabel, totalPages],
            _a)[type], btnClass = _c[0], label = _c[1], page = _c[2];
        return (React.createElement("a", tslib_1.__assign({ "data-hook": type, id: this.getId('navButton' + upperCaseFirst(type)) }, Pagination_st_css_1.default('navButton ' + btnClass, { disabled: disabled }), { "aria-label": upperCaseFirst(type) + ' Page', tabIndex: disabled || pageUrl ? null : 0, onClick: disabled ? null : function (event) { return _this.handlePageClick(event, page); }, onKeyDown: disabled ? null : function (event) { return _this.handlePageKeyDown(event, page); }, href: !disabled && pageUrl ? pageUrl(page) : null }), label));
    };
    Pagination.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({
            pageInputValue: String(nextProps.currentPage),
            pageInputHasError: false
        });
    };
    Pagination.prototype.render = function () {
        var _this = this;
        var _a = this.props, showFirstLastNavButtons = _a.showFirstLastNavButtons, paginationMode = _a.paginationMode, width = _a.width, style = _a.style;
        var styleStates = {
            disabled: this.props.disabled,
            error: this.state.pageInputHasError
        };
        return (React.createElement("nav", tslib_1.__assign({ ref: function (el) { return _this.rootNode = el; }, id: this.getId(''), "aria-label": "Pagination Navigation", dir: this.props.rtl ? 'rtl' : null, onClick: this.props.onClick, onDoubleClick: this.props.onDoubleClick, onMouseEnter: this.props.onMouseEnter, onMouseLeave: this.props.onMouseLeave, style: style || { width: width } }, Pagination_st_css_1.default('root', styleStates, this.props)),
            this.renderNavButton(ButtonType.Next),
            this.renderNavButton(ButtonType.Prev),
            paginationMode === 'input' ? this.renderPageForm() : this.renderPageStrip(),
            showFirstLastNavButtons && this.renderNavButton(ButtonType.First),
            showFirstLastNavButtons && this.renderNavButton(ButtonType.Last)));
    };
    Pagination.displayName = 'Pagination';
    Pagination.defaultProps = {
        currentPage: 1,
        showFirstLastNavButtons: false,
        showFirstPage: false,
        showLastPage: false,
        responsive: false,
        paginationMode: 'pages',
        showInputModeTotalPages: false,
        disabled: false,
        // dir="rtl" automatically flips the direction of less-than and more-than signs.
        // If we decide to use different labels we need to add conditional logic.
        firstLabel: '<<',
        lastLabel: '>>',
        previousLabel: '<',
        nextLabel: '>',
        gapLabel: '...',
        slashLabel: '\u00A0/\u00A0'
    };
    return Pagination;
}(React.Component));
exports.Pagination = Pagination;
//# sourceMappingURL=Pagination.js.map

/***/ }),

/***/ 276:
/*!*************************************************!*\
  !*** ./components/Pagination/Pagination.st.css ***!
  \*************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })
var $stylesheet = __webpack_require__(/*! ../node_modules/@stylable/runtime/cjs/css-runtime-stylesheet.js */ 2);
var $renderer = __webpack_require__(/*! ../node_modules/@stylable/runtime/cjs/css-runtime-renderer.js */ 3).$;
exports.default = $stylesheet.create(
  "root",
  "Pagination1096990051",
  {"pageButtonRules":"Pagination1096990051--pageButtonRules","root":"Pagination1096990051--root","selectedPageBG":"color_22","selectedPageBorderColor":"color_26","selectedPageBorderWidth":"0","selectedPageTextColor":"color_25","pageNumbersTextColor":"color_6","pageInputBG":"color_23","pageInputBorderColor":"color_27","pageInputBorderWidth":"0","pageInputTextColor":"color_26","totalPagesTextColor":"color_7","pageInputFocusBG":"color_8","pageInputFocusBorderColor":"color_38","pageInputFocusBorderWidth":"3","pageInputErrorBG":"color_2","pageInputErrorBorderColor":"color_22","pageInputErrorBorderWidth":"3","navButtonBG":"transparent","navButtonBorderWidth":"3","navButtonBorderColor":"color_32","navButtonDisabledBorderWidth":"3","navButtonDisabledBorderColor":"color_43","navButtonDisabledBG":"color_27","arrowsColor":"color_32","arrowsDisabledColor":"color_37","navButtonTextSize":"15px","navButtonTextColor":"color_15","navButtonDisabledTextColor":"color_11","fnt":"font_8","bRadius":"100px","shadow":"none"},
  "",
  7,
  /*! ./components/Pagination/Pagination.st.css */ 276
);

exports.default.$skin = {"params":{"selectedPageBG":"COLOR_ALPHA","selectedPageBorderColor":"BORDER_COLOR_ALPHA","selectedPageBorderWidth":"BORDER_SIZE","selectedPageTextColor":"TEXT_COLOR","pageNumbersTextColor":"TEXT_COLOR","pageInputBG":"COLOR_ALPHA","pageInputBorderColor":"BORDER_COLOR_ALPHA","pageInputBorderWidth":"BORDER_SIZE","pageInputTextColor":"TEXT_COLOR","totalPagesTextColor":"TEXT_COLOR","pageInputFocusBG":"COLOR_ALPHA","pageInputFocusBorderColor":"BORDER_COLOR_ALPHA","pageInputFocusBorderWidth":"BORDER_SIZE","pageInputErrorBG":"COLOR_ALPHA","pageInputErrorBorderColor":"BORDER_COLOR_ALPHA","pageInputErrorBorderWidth":"BORDER_SIZE","navButtonBG":"COLOR_ALPHA","navButtonBorderWidth":"BORDER_SIZE","navButtonBorderColor":"BORDER_COLOR_ALPHA","navButtonDisabledBorderWidth":"BORDER_SIZE","navButtonDisabledBorderColor":"BORDER_COLOR_ALPHA","navButtonDisabledBG":"COLOR_ALPHA","arrowsColor":"COLOR_ALPHA","arrowsDisabledColor":"COLOR_ALPHA","navButtonTextSize":"TEXT_SIZE","navButtonTextColor":"TEXT_COLOR","navButtonDisabledTextColor":"TEXT_COLOR","fnt":"FONT","bRadius":"BORDER_RADIUS","shadow":"BOX_SHADOW"},"paramsDefaults":{"selectedPageBG":"color_22","selectedPageBorderColor":"color_26","selectedPageBorderWidth":"0","selectedPageTextColor":"color_25","pageNumbersTextColor":"color_6","pageInputBG":"color_23","pageInputBorderColor":"color_27","pageInputBorderWidth":"0","pageInputTextColor":"color_26","totalPagesTextColor":"color_7","pageInputFocusBG":"color_8","pageInputFocusBorderColor":"color_38","pageInputFocusBorderWidth":"3","pageInputErrorBG":"color_2","pageInputErrorBorderColor":"color_22","pageInputErrorBorderWidth":"3","navButtonBG":"transparent","navButtonBorderWidth":"3","navButtonBorderColor":"color_32","navButtonDisabledBorderWidth":"3","navButtonDisabledBorderColor":"color_43","navButtonDisabledBG":"color_27","arrowsColor":"color_32","arrowsDisabledColor":"color_37","navButtonTextSize":"15px","navButtonTextColor":"color_15","navButtonDisabledTextColor":"color_11","fnt":"font_8","bRadius":"100px","shadow":"none"}};
exports.default.$skin.$render = function render_css($id, $params, $functions) {
  return "\n" + $id + " .Pagination2814882397--button-common-mixin{display: inline-flex;flex-shrink: 0}\n" + $id + ".Pagination2814882397--root{display: inline-flex;user-select: none}\n" + $id + " .Pagination2814882397--navButton{display: inline-flex;flex-shrink: 0}\n" + $id + " .Pagination2814882397--navButton:not(.Pagination2814882397--disabled){cursor: pointer}\n" + $id + " .Pagination2814882397--navButtonFirst{order: 1}\n" + $id + " .Pagination2814882397--navButtonPrevious{order: 2}\n" + $id + " .Pagination2814882397--navButtonNext{order: 4}\n" + $id + " .Pagination2814882397--navButtonLast{order: 5}\n" + $id + " .Pagination2814882397--pageStrip{order: 3;overflow-x: hidden}\n" + $id + " .Pagination2814882397--pageStripInner{display: flex}\n" + $id + " .Pagination2814882397--pageStripTemplate{height: 0;overflow: hidden}\n" + $id + " .Pagination2814882397--pageButton{display: inline-flex;flex-shrink: 0;cursor: pointer}\n" + $id + " .Pagination2814882397--currentPage{display: inline-flex;flex-shrink: 0}\n" + $id + " .Pagination2814882397--gap{display: inline-flex;flex-shrink: 0}\n" + $id + " .Pagination2814882397--pageForm{display: flex;order: 3}\n" + $id + " .Pagination2814882397--pageInput{}\n" + $id + " .Pagination2814882397--totalPages{}\n" + $id + " .Pagination2814882397--slash{}\n" + $id + " .Pagination1096990051--pageButtonRules{min-width: 1em;min-height: 1em;line-height: 1em;justify-content: center;align-items: center;padding: 0.5em 0.5em;margin: 0.25em}\n" + $id + ".Pagination1096990051--root{align-items: stretch;font: " + $params["fnt"] + ";box-sizing: border-box}\n" + $id + ".Pagination1096990051--root .Pagination2814882397--pageButton{min-width: 1em;min-height: 1em;line-height: 1em;justify-content: center;align-items: center;padding: 0.5em 0.5em;margin: 0.25em;position: relative;color: " + $params["pageNumbersTextColor"] + "}\n" + $id + ".Pagination1096990051--root .Pagination2814882397--currentPage{min-width: 1em;min-height: 1em;line-height: 1em;justify-content: center;align-items: center;padding: 0.5em 0.5em;margin: 0.25em;color: " + $params["selectedPageTextColor"] + ";background: " + $params["selectedPageBG"] + ";border-radius: " + $params["bRadius"] + ";border: " + $params["selectedPageBorderWidth"] + " solid " + $params["selectedPageBorderColor"] + ";box-shadow: " + $params["shadow"] + ";padding: calc(0.5em - " + $params["selectedPageBorderWidth"] + ") calc(0.5em - " + $params["selectedPageBorderWidth"] + ")}\n" + $id + ".Pagination1096990051--root:not([data-pagination2814882397-disabled]) .Pagination2814882397--pageButton:hover::before{background: " + $params["selectedPageBG"] + ";opacity: 0.2;content: \"\";position: absolute;top: 0;right: 0;bottom: 0;left: 0;border-radius: " + $params["bRadius"] + "}\n" + $id + ".Pagination1096990051--root:not([data-pagination2814882397-disabled]) .Pagination2814882397--pageButton:hover{opacity: 0.7}\n" + $id + ".Pagination1096990051--root[data-pagination2814882397-disabled] .Pagination2814882397--pageButton{cursor: default}\n" + $id + ".Pagination1096990051--root .Pagination2814882397--navButton{min-width: 1em;min-height: 1em;padding: calc(0.75em - " + $params["navButtonBorderWidth"] + ");display: flex;justify-content: center;align-items: center;border: " + $params["navButtonBorderWidth"] + " solid " + $params["navButtonBorderColor"] + ";background: " + $params["navButtonBG"] + ";border-radius: " + $params["bRadius"] + "}\n" + $id + ".Pagination1096990051--root .Pagination2814882397--navButton[data-pagination2814882397-disabled], " + $id + ".Pagination1096990051--root[data-preview=\"disabled\"] .Pagination2814882397--navButton{padding: calc(0.75em - " + $params["navButtonDisabledBorderWidth"] + ");border: " + $params["navButtonDisabledBorderWidth"] + " solid " + $params["navButtonDisabledBorderColor"] + ";background: " + $params["navButtonDisabledBG"] + ";cursor: default}\n" + $id + ".Pagination1096990051--root .Pagination2814882397--navButton[data-pagination2814882397-disabled] svg, " + $id + ".Pagination1096990051--root[data-preview=\"disabled\"] .Pagination2814882397--navButton svg{fill: " + $params["arrowsDisabledColor"] + "}\n" + $id + ".Pagination1096990051--root .Pagination2814882397--navButton:hover:not([data-pagination2814882397-disabled]){opacity: 0.8}\n" + $id + ".Pagination1096990051--root .Pagination2814882397--navButton svg{width: 1em;min-width: 16px;height: 1em;min-height: 16px;fill: " + $params["arrowsColor"] + "}\n" + $id + ".Pagination1096990051--root[dir=\"rtl\"] .Pagination2814882397--navButton svg{transform: scaleX(-1)}\n" + $id + ".Pagination1096990051--root .Pagination2814882397--navButton span{font-size: " + $params["navButtonTextSize"] + ";color: " + $params["navButtonTextColor"] + ";line-height: 1em}\n" + $id + ".Pagination1096990051--root .Pagination2814882397--navButton[data-pagination2814882397-disabled] span, " + $id + ".Pagination1096990051--root[data-preview=\"disabled\"] .Pagination2814882397--navButton span{color: " + $params["navButtonDisabledTextColor"] + "}\n" + $id + ".Pagination1096990051--root .Pagination2814882397--navButtonFirst{margin-right: 1em}\n" + $id + ".Pagination1096990051--root[dir=\"rtl\"] .Pagination2814882397--navButtonFirst{margin-right: 0;margin-left: 1em}\n" + $id + ".Pagination1096990051--root .Pagination2814882397--navButtonPrevious{margin-right: 1em}\n" + $id + ".Pagination1096990051--root[dir=\"rtl\"] .Pagination2814882397--navButtonPrevious{margin-right: 0;margin-left: 1em}\n" + $id + ".Pagination1096990051--root .Pagination2814882397--navButtonLast{margin-left: 1em}\n" + $id + ".Pagination1096990051--root[dir=\"rtl\"] .Pagination2814882397--navButtonLast{margin-left: 0;margin-right: 1em}\n" + $id + ".Pagination1096990051--root .Pagination2814882397--navButtonNext{margin-left: 1em}\n" + $id + ".Pagination1096990051--root[dir=\"rtl\"] .Pagination2814882397--navButtonNext{margin-left: 0;margin-right: 1em}\n" + $id + ".Pagination1096990051--root .Pagination2814882397--gap{min-width: 1em;min-height: 1em;line-height: 1em;justify-content: center;align-items: center;padding: 0.5em 0.5em;margin: 0.25em;color: " + $params["pageNumbersTextColor"] + "}\n" + $id + ".Pagination1096990051--root .Pagination2814882397--pageStrip{min-width: 3em;overflow: visible;align-self: center}\n" + $id + ".Pagination1096990051--root .Pagination2814882397--pageStripInner{flex-grow: 1;flex-basis: auto;justify-content: center;overflow: visible;align-items: center}\n" + $id + ".Pagination1096990051--root .Pagination2814882397--pageStripTemplate{overflow: hidden}\n" + $id + ".Pagination1096990051--root .Pagination2814882397--pageForm{flex-grow: 1;flex-basis: auto;justify-content: center;align-items: stretch}\n" + $id + ".Pagination1096990051--root .Pagination2814882397--slash{width: 1em;height: 1em;flex-shrink: 0;align-self: center}\n" + $id + ".Pagination1096990051--root .Pagination2814882397--slash svg{width: 1em;height: 1em}\n" + $id + ".Pagination1096990051--root .Pagination2814882397--slash svg > g{stroke: " + $params["totalPagesTextColor"] + "}\n" + $id + ".Pagination1096990051--root .Pagination2814882397--pageInput{min-width: 3.5em;padding: calc(0.25em - " + $params["pageInputBorderWidth"] + ") calc(0.5ch - " + $params["pageInputBorderWidth"] + ");color: " + $params["pageInputTextColor"] + ";border-radius: " + $params["bRadius"] + ";border: " + $params["pageInputBorderWidth"] + " solid " + $params["pageInputBorderColor"] + ";text-align: center;margin: 0 0.25em;background: " + $params["pageInputBG"] + ";box-shadow: " + $params["shadow"] + ";font: inherit;-moz-appearance: textfield}\n" + $id + ".Pagination1096990051--root .Pagination2814882397--pageInput:hover{opacity: 0.8}\n" + $id + ".Pagination1096990051--root .Pagination2814882397--pageInput:focus, " + $id + ".Pagination1096990051--root[data-preview=\"focus\"] .Pagination2814882397--pageInput{padding: calc(0.25em - " + $params["pageInputFocusBorderWidth"] + ") calc(0.5ch - " + $params["pageInputFocusBorderWidth"] + ");background: " + $params["pageInputFocusBG"] + ";border: " + $params["pageInputFocusBorderWidth"] + " solid " + $params["pageInputFocusBorderColor"] + "}\n" + $id + ".Pagination1096990051--root .Pagination2814882397--pageInput::-webkit-inner-spin-button, " + $id + ".Pagination1096990051--root .Pagination2814882397--pageInput::-webkit-outer-spin-button{-webkit-appearance: none}\n" + $id + ".Pagination1096990051--root .Pagination2814882397--totalPages{max-width: 4ch;min-width: 1ch;padding-left: 0.25em;overflow: hidden;text-overflow: ellipsis;color: " + $params["totalPagesTextColor"] + ";align-self: center}\n" + $id + ".Pagination1096990051--root[data-pagination2814882397-error] .Pagination2814882397--pageInput, " + $id + ".Pagination1096990051--root[data-preview=\"error\"] .Pagination2814882397--pageInput{padding: calc(0.25em - " + $params["pageInputErrorBorderWidth"] + ") calc(0.5ch - " + $params["pageInputErrorBorderWidth"] + ");background: " + $params["pageInputErrorBG"] + ";border: " + $params["pageInputErrorBorderWidth"] + " solid " + $params["pageInputErrorBorderColor"] + "}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){\n  " + $id + ".Pagination1096990051--root .Pagination2814882397--totalPages{max-width: 6ch;min-width: 6ch}\n}\n";
};

/***/ }),

/***/ 3:
/*!*********************************************************************!*\
  !*** ../node_modules/@stylable/runtime/cjs/css-runtime-renderer.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cached_node_renderer_1 = __webpack_require__(/*! ./cached-node-renderer */ 36);
var keyed_list_renderer_1 = __webpack_require__(/*! ./keyed-list-renderer */ 37);
var RuntimeRenderer = /** @class */ (function () {
    function RuntimeRenderer() {
        var _this = this;
        this.styles = [];
        this.stylesMap = {};
        this.renderer = null;
        this.window = null;
        this.id = null;
        this.update = function () {
            if (_this.renderer) {
                _this.renderer.render(_this.window.document.head, _this.styles);
            }
        };
    }
    RuntimeRenderer.prototype.init = function (_window) {
        if (this.window || !_window) {
            return;
        }
        _window.__stylable_renderer_global_counter =
            _window.__stylable_renderer_global_counter || 0;
        this.id = _window.__stylable_renderer_global_counter++;
        this.window = _window;
        this.renderer = keyed_list_renderer_1.createDOMListRenderer(new cached_node_renderer_1.CacheStyleNodeRenderer({
            attrKey: 'st-id' + (this.id ? '-' + this.id : ''),
            createElement: _window.document.createElement.bind(_window.document)
        }));
        this.update();
    };
    RuntimeRenderer.prototype.onRegister = function () {
        if (this.window) {
            this.window.requestAnimationFrame(this.update);
        }
    };
    RuntimeRenderer.prototype.register = function (stylesheet) {
        var registered = this.stylesMap[stylesheet.$id];
        if (registered) {
            this.removeStyle(registered);
        }
        var i = this.findDepthIndex(stylesheet.$depth);
        this.styles.splice(i + 1, 0, stylesheet);
        this.stylesMap[stylesheet.$id] = stylesheet;
        this.onRegister();
    };
    RuntimeRenderer.prototype.removeStyle = function (stylesheet) {
        var i = this.styles.indexOf(stylesheet);
        if (~i) {
            this.styles.splice(i, 1);
        }
        delete this.stylesMap[stylesheet.$id];
    };
    RuntimeRenderer.prototype.findDepthIndex = function (depth) {
        var index = this.styles.length;
        while (index--) {
            var stylesheet = this.styles[index];
            if (stylesheet.$depth <= depth) {
                return index;
            }
        }
        return index;
    };
    RuntimeRenderer.prototype.getStyles = function (ids, sortIndexes) {
        var _this = this;
        return this.sortStyles(ids.map(function (id) { return _this.stylesMap[id]; }), sortIndexes);
    };
    RuntimeRenderer.prototype.sortStyles = function (styles, sortIndexes) {
        var _this = this;
        if (sortIndexes === void 0) { sortIndexes = false; }
        var s = styles.slice();
        if (sortIndexes) {
            s.sort(function (a, b) {
                return _this.styles.indexOf(a) - _this.styles.indexOf(b);
            });
        }
        s.sort(function (a, b) {
            return a.$depth - b.$depth;
        });
        return s;
    };
    return RuntimeRenderer;
}());
exports.RuntimeRenderer = RuntimeRenderer;
// The $ export is a convention with the webpack plugin if changed both needs a change
exports.$ = new RuntimeRenderer();
//# sourceMappingURL=css-runtime-renderer.js.map

/***/ }),

/***/ 314:
/*!****************************************!*\
  !*** ./components/Pagination/index.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Pagination = __webpack_require__(/*! ./Pagination */ 516);

var _PaginationSt = __webpack_require__(/*! ./Pagination.st.css */ 276);

var _PaginationSt2 = _interopRequireDefault(_PaginationSt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  componentType: 'wixui.Pagination',
  component: _Pagination.Pagination,
  santaComponent: _Pagination.santaPagination,
  skin: _PaginationSt2.default.$skin
};

/***/ }),

/***/ 36:
/*!*********************************************************************!*\
  !*** ../node_modules/@stylable/runtime/cjs/cached-node-renderer.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CacheStyleNodeRenderer = /** @class */ (function () {
    function CacheStyleNodeRenderer(options) {
        var _this = this;
        this.options = options;
        this.create = function (stylesheet, key) {
            var node = _this.options.createElement('style');
            node.textContent = stylesheet.$css || '';
            node.setAttribute(_this.options.attrKey, key);
            node.setAttribute('st-depth', stylesheet.$depth + '');
            return node;
        };
        this.hasKey = function (node) { return node.hasAttribute(_this.options.attrKey); };
        this.update = function (stylesheet, node) {
            if (node.textContent !== stylesheet.$css) {
                node.textContent = stylesheet.$css || '';
            }
            return node;
        };
        this.renderKey = function (stylesheet) { return stylesheet.$id; };
    }
    return CacheStyleNodeRenderer;
}());
exports.CacheStyleNodeRenderer = CacheStyleNodeRenderer;
//# sourceMappingURL=cached-node-renderer.js.map

/***/ }),

/***/ 37:
/*!********************************************************************!*\
  !*** ../node_modules/@stylable/runtime/cjs/keyed-list-renderer.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createDOMListRenderer(nodeRenderer) {
    var first;
    var nodes = {};
    var setNode = function (dataItem, node) {
        return (nodes[nodeRenderer.renderKey(dataItem)] = node);
    };
    var renderNode = function (dataItem) {
        var key = nodeRenderer.renderKey(dataItem);
        var node = nodes[key];
        return node
            ? nodeRenderer.update(dataItem, node)
            : setNode(dataItem, nodeRenderer.create(dataItem, key));
    };
    var render = function (container, data) {
        if (data === void 0) { data = []; }
        var node;
        if (data.length) {
            var next = first;
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < data.length; i++) {
                node = renderNode(data[i]);
                if (node !== next) {
                    container.insertBefore(node, next || null);
                }
                else {
                    next = node.nextElementSibling;
                }
            }
            first = nodes[nodeRenderer.renderKey(data[0])];
            while (node.nextElementSibling) {
                if (nodeRenderer.hasKey(node.nextElementSibling)) {
                    container.removeChild(node.nextElementSibling);
                }
                else {
                    break;
                }
            }
        }
        else {
            while (first) {
                var next = first.nextElementSibling;
                container.removeChild(first);
                first = next && nodeRenderer.hasKey(next) ? next : undefined;
            }
        }
    };
    return { render: render, nodes: nodes };
}
exports.createDOMListRenderer = createDOMListRenderer;
//# sourceMappingURL=keyed-list-renderer.js.map

/***/ }),

/***/ 40:
/*!***************************************************!*\
  !*** ../node_modules/create-react-class/index.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var React = __webpack_require__(/*! react */ 0);
var factory = __webpack_require__(/*! ./factory */ 41);

if (typeof React === 'undefined') {
  throw Error(
    'create-react-class could not find the React object. If you are using script tags, ' +
      'make sure that React is being loaded before create-react-class.'
  );
}

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(
  React.Component,
  React.isValidElement,
  ReactNoopUpdateQueue
);


/***/ }),

/***/ 41:
/*!*****************************************************!*\
  !*** ../node_modules/create-react-class/factory.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__(/*! object-assign */ 19);

var emptyObject = __webpack_require__(/*! fbjs/lib/emptyObject */ 42);
var _invariant = __webpack_require__(/*! fbjs/lib/invariant */ 10);

if (false) { var warning; }

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;
if (false) {} else {
  ReactPropTypeLocationNames = {};
}

function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillMount`.
     *
     * @optional
     */
    UNSAFE_componentWillMount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillReceiveProps`.
     *
     * @optional
     */
    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillUpdate`.
     *
     * @optional
     */
    UNSAFE_componentWillUpdate: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Similar to ReactClassInterface but for static methods.
   */
  var ReactClassStaticInterface = {
    /**
     * This method is invoked after a component is instantiated and when it
     * receives new props. Return an object to update state in response to
     * prop changes. Return null to indicate no change to state.
     *
     * If an object is returned, its keys will be merged into the existing state.
     *
     * @return {object || null}
     * @optional
     */
    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      if (false) {}
      Constructor.childContextTypes = _assign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      if (false) {}
      Constructor.contextTypes = _assign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      if (false) {}
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if (false) {}
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      _invariant(
        specPolicy === 'OVERRIDE_BASE',
        'ReactClassInterface: You are attempting to override ' +
          '`%s` from your class specification. Ensure that your method names ' +
          'do not overlap with React methods.',
        name
      );
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      _invariant(
        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
        'ReactClassInterface: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be due ' +
          'to a mixin.',
        name
      );
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (false) { var isMixinValid, typeofSpec; }

      return;
    }

    _invariant(
      typeof spec !== 'function',
      "ReactClass: You're attempting to " +
        'use a component class or function as a mixin. Instead, just use a ' +
        'regular object.'
    );
    _invariant(
      !isValidElement(spec),
      "ReactClass: You're attempting to " +
        'use a component as a mixin. Instead, just use a regular object.'
    );

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            _invariant(
              isReactClassMethod &&
                (specPolicy === 'DEFINE_MANY_MERGED' ||
                  specPolicy === 'DEFINE_MANY'),
              'ReactClass: Unexpected spec policy %s for key %s ' +
                'when mixing in component specs.',
              specPolicy,
              name
            );

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if (false) {}
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }

    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      _invariant(
        !isReserved,
        'ReactClass: You are attempting to define a reserved ' +
          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
          'as an instance property instead; it will still be accessible on the ' +
          'constructor.',
        name
      );

      var isAlreadyDefined = name in Constructor;
      if (isAlreadyDefined) {
        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
          ? ReactClassStaticInterface[name]
          : null;

        _invariant(
          specPolicy === 'DEFINE_MANY_MERGED',
          'ReactClass: You are attempting to define ' +
            '`%s` on your component more than once. This conflict may be ' +
            'due to a mixin.',
          name
        );

        Constructor[name] = createMergedResultFunction(Constructor[name], property);

        return;
      }

      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    _invariant(
      one && two && typeof one === 'object' && typeof two === 'object',
      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    );

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        _invariant(
          one[key] === undefined,
          'mergeIntoWithNoDuplicateKeys(): ' +
            'Tried to merge two objects with the same key: `%s`. This conflict ' +
            'may be due to a mixin; in particular, this may be caused by two ' +
            'getInitialState() or getDefaultProps() methods returning objects ' +
            'with clashing keys.',
          key
        );
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if (false) { var _bind, componentName; }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function() {
      if (false) {}
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function() {};
  _assign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function(props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (false) {}

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (false) {}
      _invariant(
        typeof initialState === 'object' && !Array.isArray(initialState),
        '%s.getInitialState(): must return an object or null',
        Constructor.displayName || 'ReactCompositeComponent'
      );

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (false) {}

    _invariant(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    );

    if (false) {}

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

module.exports = factory;


/***/ }),

/***/ 42:
/*!***********************************************!*\
  !*** ../node_modules/fbjs/lib/emptyObject.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (false) {}

module.exports = emptyObject;

/***/ }),

/***/ 516:
/*!*********************************************!*\
  !*** ./components/Pagination/Pagination.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.santaPagination = exports.Pagination = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(/*! create-react-class */ 40);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _reactDom = __webpack_require__(/*! react-dom */ 17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _pagination = __webpack_require__(/*! wix-ui-core/pagination */ 517);

var _paginationIcons = __webpack_require__(/*! ./paginationIcons */ 522);

var _PaginationSt = __webpack_require__(/*! ./Pagination.st.css */ 276);

var _PaginationSt2 = _interopRequireDefault(_PaginationSt);

var _santaComponents = __webpack_require__(/*! santa-components */ 26);

var _lodash = __webpack_require__(/*! lodash */ 7);

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pagination = exports.Pagination = function Pagination(props) {
  var replaceArrowsWithText = props.replaceArrowsWithText,
      firstLabel = props.firstLabel,
      lastLabel = props.lastLabel,
      previousLabel = props.previousLabel,
      nextLabel = props.nextLabel,
      paginationMode = props.paginationMode,
      showFirstLastNavButtons = props.showFirstLastNavButtons;


  var navigationButtonLabels = replaceArrowsWithText ? {
    firstLabel: _react2.default.createElement(
      'span',
      null,
      firstLabel
    ),
    lastLabel: _react2.default.createElement(
      'span',
      null,
      lastLabel
    ),
    previousLabel: _react2.default.createElement(
      'span',
      null,
      previousLabel
    ),
    nextLabel: _react2.default.createElement(
      'span',
      null,
      nextLabel
    )
  } : {
    replaceArrowsWithText: true,
    firstLabel: _paginationIcons.arrowFirst,
    lastLabel: _paginationIcons.arrowLast,
    previousLabel: _paginationIcons.arrowPrevious,
    nextLabel: _paginationIcons.arrowNext
  };

  var slashLabel = { slashLabel: _paginationIcons.slash }; //slash?

  var states = {
    navButtonsType: replaceArrowsWithText ? 'text' : 'arrows',
    paginationMode: paginationMode,
    navButtonsAmount: showFirstLastNavButtons ? 4 : 2
  };

  var coreProps = Object.assign({}, props, navigationButtonLabels, slashLabel);
  return _react2.default.createElement(_pagination.Pagination, _extends({}, coreProps, (0, _PaginationSt2.default)('root', states, coreProps)));
};

Pagination.displayName = 'Pagination';
Pagination.propTypes = {
  replaceArrowsWithText: _propTypes.bool,
  firstLabel: _propTypes.string,
  lastLabel: _propTypes.string,
  previousLabel: _propTypes.string,
  nextLabel: _propTypes.string,
  paginationMode: _propTypes.string,
  showFirstLastNavButtons: _propTypes.bool
};

var skinBasedComp = _santaComponents.mixins.skinBasedComp,
    runTimeCompData = _santaComponents.mixins.runTimeCompData,
    textScaleMixin = _santaComponents.mixins.textScaleMixin;


var getComponentSkins = function getComponentSkins() {
  return {
    'wixui.skins.Pagination': _PaginationSt2.default.$skin
  };
};

var santaPagination = exports.santaPagination = (0, _createReactClass2.default)({
  displayName: 'Pagination',

  mixins: [skinBasedComp(getComponentSkins()), runTimeCompData, textScaleMixin(getComponentSkins())],

  propTypes: {
    registerLayoutFunc: _santaComponents.santaTypesDefinitions.Layout.registerLayoutFunc.isRequired,
    compTheme: _santaComponents.santaTypesDefinitions.Component.theme, // trigger re-render on style changes,
    compProp: _santaComponents.santaTypesDefinitions.Component.compProp.isRequired,
    compData: _santaComponents.santaTypesDefinitions.Component.compData.isRequired,
    styleId: _santaComponents.santaTypesDefinitions.Component.styleId,
    id: _santaComponents.santaTypesDefinitions.Component.id,
    style: _santaComponents.santaTypesDefinitions.Component.style,
    isMobileView: _santaComponents.santaTypesDefinitions.isMobileView,
    scale: _santaComponents.santaTypesDefinitions.Component.scale,
    onChange: _propTypes.func
  },

  statics: {
    compSpecificIsDomOnlyOverride: function compSpecificIsDomOnlyOverride() {
      return false;
    },
    getComponentSkins: getComponentSkins
  },

  handleChange: function handleChange(evt) {
    var event = evt.event,
        page = evt.page;


    if (event.keyCode) {
      event.preventDefault(); //prevents viewer from scrolling after keyboard press
    }

    var target = _lodash2.default.defaults({ currentPage: page }, event.target);
    var ev = _lodash2.default.defaults({ target: target }, event);

    this.updateData({ currentPage: page });

    if (this.props.onChange) {
      this.props.onChange({ page: page });
    }

    this.handleAction(_santaComponents.constants.SITE.ACTION_TYPES.CHANGE, ev);
  },
  getSkinProperties: function getSkinProperties() {
    var _this = this;

    var _props$compData = this.props.compData,
        totalPages = _props$compData.totalPages,
        currentPage = _props$compData.currentPage,
        firstText = _props$compData.firstText,
        previousText = _props$compData.previousText,
        nextText = _props$compData.nextText,
        lastText = _props$compData.lastText;
    var _props$compProp = this.props.compProp,
        paginationMode = _props$compProp.paginationMode,
        showFirstLastNavButtons = _props$compProp.showFirstLastNavButtons,
        navigationType = _props$compProp.navigationType,
        paginationDirection = _props$compProp.paginationDirection,
        showInputModeTotalPages = _props$compProp.showInputModeTotalPages,
        showFirstPage = _props$compProp.showFirstPage,
        showLastPage = _props$compProp.showLastPage,
        isDisabled = _props$compProp.isDisabled;
    var _props = this.props,
        styleId = _props.styleId,
        id = _props.id,
        isMobileView = _props.isMobileView;


    var replaceArrowsWithText = !isMobileView && navigationType === 'text';

    var getStyle = function getStyle() {
      // eslint-disable-line complexity
      var fontStyle = {};
      var pagesModeMinFontSize = showFirstLastNavButtons ? 15 : 24;
      var inputModeMinFontSize = showFirstLastNavButtons ? 11 : 16;

      if (isMobileView) {
        var fontSize = parseInt(_this.getFontSize('fnt').fontSize, 10);

        if (paginationMode === 'pages' && fontSize > pagesModeMinFontSize) {
          fontStyle.fontSize = pagesModeMinFontSize * _this.props.scale + 'px';
        } else if (paginationMode === 'input' && fontSize > inputModeMinFontSize) {
          fontStyle.fontSize = inputModeMinFontSize * _this.props.scale + 'px';
        } else {
          fontStyle.fontSize = fontSize * _this.props.scale + 'px';
        }
      }
      return _lodash2.default.merge(_this.props.style, fontStyle);
    };

    var paginationProps = {
      parentConst: Pagination,
      id: id,
      styleId: styleId,
      totalPages: totalPages,
      currentPage: currentPage,
      onChange: this.handleChange,
      paginationMode: paginationMode,
      showFirstLastNavButtons: showFirstLastNavButtons,
      firstLabel: firstText,
      previousLabel: previousText,
      nextLabel: nextText,
      lastLabel: lastText,
      replaceArrowsWithText: replaceArrowsWithText,
      rtl: paginationDirection === 'rtl',
      showInputModeTotalPages: showInputModeTotalPages,
      responsive: true,
      maxPagesToShow: 100,
      showFirstPage: showFirstPage,
      showLastPage: showLastPage,
      width: this.props.style.width,
      updateResponsiveLayout: function updateResponsiveLayout(updateFunc) {
        _this.props.registerLayoutFunc(_reactDom2.default.findDOMNode(_this), updateFunc);
      },
      style: getStyle(),
      disabled: isDisabled,
      onMouseEnter: this.onMouseIn,
      onMouseLeave: this.onMouseOut,
      onClick: this.onClick,
      onDoubleClick: this.onDblClick
    };

    return {
      '': paginationProps
    };
  }
});

/***/ }),

/***/ 517:
/*!*************************************************!*\
  !*** ../node_modules/wix-ui-core/pagination.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/src/components/pagination */ 518);


/***/ }),

/***/ 518:
/*!***************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/pagination/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Pagination_1 = __webpack_require__(/*! ./Pagination */ 275);
exports.Pagination = Pagination_1.Pagination;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 519:
/*!*******************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/pagination/PageStrip.js ***!
  \*******************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 11);
var React = __webpack_require__(/*! react */ 0);
var page_strip_layout_1 = __webpack_require__(/*! ./page-strip-layout */ 520);
var Pagination_st_css_1 = __webpack_require__(/*! ./Pagination.st.css */ 27);
var PageStrip = /** @class */ (function (_super) {
    tslib_1.__extends(PageStrip, _super);
    function PageStrip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.responsiveLayoutIsFresh = false;
        _this.unmounted = false;
        _this.state = { responsiveLayout: null };
        return _this;
    }
    PageStrip.prototype.componentDidMount = function () {
        var _this = this;
        if (this.props.updateResponsiveLayout) {
            // We can't do this in componentWillMount because the caller might need to access DOM here,
            // and SSR wouldn't work.
            this.props.updateResponsiveLayout(function () {
                _this.responsiveLayoutIsFresh = false;
                // Even though we register a noop callback for `this.props.updateResponsiveLayout`
                // in `componentWillUnmount`, we cannot guarantee that the user will not hold onto
                // the old callback and invoke it after unmount, which is the reason for checking
                // `this.unmounted`.
                if (!_this.unmounted) {
                    _this.updateLayoutIfNeeded();
                }
            });
        }
        else {
            this.updateLayoutIfNeeded();
        }
    };
    PageStrip.prototype.componentWillReceiveProps = function () {
        this.responsiveLayoutIsFresh = false;
    };
    PageStrip.prototype.componentDidUpdate = function () {
        if (!this.props.updateResponsiveLayout) {
            this.updateLayoutIfNeeded();
        }
        this.forceRepaintInMsEdge();
    };
    PageStrip.prototype.componentWillUnmount = function () {
        this.unmounted = true;
        if (this.props.updateResponsiveLayout) {
            this.props.updateResponsiveLayout(function () { return null; });
        }
    };
    PageStrip.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { ref: function (el) { return _this.rootNode = el; }, "data-hook": "page-strip", id: this.props.id ? this.props.id + 'pageStrip' : null, className: Pagination_st_css_1.default.pageStrip, "data-aid": "qa-page-strip" },
            React.createElement("div", { className: Pagination_st_css_1.default.pageStripInner }, this.renderLayout(this.getLayout(), false)),
            this.isResponsive() &&
                React.createElement("div", { className: Pagination_st_css_1.default.pageStripInner + ' ' + Pagination_st_css_1.default.pageStripTemplate }, this.renderLayout(page_strip_layout_1.createResponsiveLayoutTemplate(this.props), true))));
    };
    PageStrip.prototype.forceRepaintInMsEdge = function () {
        // MS Edge has a glitch that makes page numbers invisible when switching to the preview
        // mode in Santa editor. As a workaround we need to force text re-rendering.
        // Changing font-variant to small-caps should do the trick without actually affecting
        // the appearance of digits.
        var inlineStyle = this.rootNode.style;
        inlineStyle.fontVariant = inlineStyle.fontVariant ? '' : 'small-caps';
    };
    // We can't use page numbers as keys, because we might need to render the same page twice
    // for responsive layout. We also can't use index as a key, because React might reuse the
    // node for another page, and keep keyboard focus on it, which we don't want.
    PageStrip.prototype.renderLayout = function (layout, isDummy) {
        var _this = this;
        var _a = this.props, currentPage = _a.currentPage, pageUrl = _a.pageUrl, disabled = _a.disabled;
        return layout.map(function (pageNumber, index) {
            if (!pageNumber) {
                return (React.createElement("span", { key: index, className: Pagination_st_css_1.default.gap }, _this.props.gapLabel));
            }
            if (pageNumber === currentPage) {
                return (React.createElement("span", { key: pageNumber + '-' + index, "data-hook": "page-" + pageNumber + " current-page", "aria-label": "Page " + pageNumber, className: Pagination_st_css_1.default.currentPage }, pageNumber));
            }
            if (isDummy) {
                return React.createElement("a", { key: pageNumber + '-' + index, className: Pagination_st_css_1.default.pageButton }, pageNumber);
            }
            return (React.createElement("a", { key: pageNumber + '-' + index, "data-hook": "page-" + pageNumber, "aria-label": "Page " + pageNumber, className: Pagination_st_css_1.default.pageButton, tabIndex: disabled || pageUrl ? null : 0, onClick: disabled ? null : (function (e) { return _this.props.onPageClick(e, pageNumber); }), onKeyDown: disabled ? null : (function (e) { return _this.props.onPageKeyDown(e, pageNumber); }), href: !disabled && pageUrl ? pageUrl(pageNumber) : null }, pageNumber));
        });
    };
    PageStrip.prototype.isResponsive = function () {
        return this.props.responsive && this.props.totalPages > 0 && this.props.maxPagesToShow > 1;
    };
    PageStrip.prototype.getLayout = function () {
        if (!this.isResponsive()) {
            return page_strip_layout_1.createStaticLayout(this.props);
        }
        if (this.state.responsiveLayout) {
            return this.state.responsiveLayout;
        }
        return page_strip_layout_1.createStaticLayout({
            totalPages: this.props.totalPages,
            currentPage: this.props.currentPage,
            showFirstPage: this.props.showFirstPage,
            showLastPage: this.props.showLastPage,
            // This is pretty arbitrary. 5 is the minimum space required to show the first, current, and last page.
            maxPagesToShow: 5
        });
    };
    PageStrip.prototype.updateLayoutIfNeeded = function () {
        if (!this.isResponsive() || this.responsiveLayoutIsFresh) {
            return;
        }
        this.responsiveLayoutIsFresh = true;
        this.setState({
            responsiveLayout: page_strip_layout_1.createResponsiveLayout({
                container: this.rootNode.children[1],
                totalPages: this.props.totalPages,
                currentPage: this.props.currentPage,
                maxPagesToShow: this.props.maxPagesToShow,
                showFirstPage: this.props.showFirstPage,
                showLastPage: this.props.showLastPage
            })
        });
    };
    return PageStrip;
}(React.Component));
exports.PageStrip = PageStrip;
//# sourceMappingURL=PageStrip.js.map

/***/ }),

/***/ 520:
/*!***************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/pagination/page-strip-layout.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createStaticLayout(_a) {
    var totalPages = _a.totalPages, currentPage = _a.currentPage, maxPagesToShow = _a.maxPagesToShow, showFirstPage = _a.showFirstPage, showLastPage = _a.showLastPage;
    return createLayout({
        totalPages: totalPages,
        currentPage: currentPage,
        lowerBound: 1,
        upperBound: totalPages,
        pageRangeCost: function (a, b) { return b - a + 1; },
        showFirstPage: showFirstPage,
        showLastPage: showLastPage,
        rewindToFirstCost: 2,
        rewindToLastCost: 2,
        budget: maxPagesToShow
    });
}
exports.createStaticLayout = createStaticLayout;
function rangeToPreRenderForResponsiveLayout(totalPages, currentPage, maxPagesToShow) {
    return [
        Math.max(currentPage - maxPagesToShow, 1),
        Math.min(currentPage + maxPagesToShow, totalPages)
    ];
}
function createResponsiveLayoutTemplate(_a) {
    var totalPages = _a.totalPages, currentPage = _a.currentPage, maxPagesToShow = _a.maxPagesToShow;
    var _b = rangeToPreRenderForResponsiveLayout(totalPages, currentPage, maxPagesToShow), lowerBound = _b[0], upperBound = _b[1];
    return [1, 0].concat(closedRange(lowerBound, upperBound), [0, totalPages]);
}
exports.createResponsiveLayoutTemplate = createResponsiveLayoutTemplate;
// Takes a container with children rendered using createResponsiveLayoutTemplate,
// measures the children, and decides how many can be shown without overflowing the container.
// For measurements to work correctly the pages must not have any dynamic spacing between them
// such as justify-content: space-evenly, but they can have static spacing such as margins.
// As long as we're using flexbox with centered pages we don't need to worry about the outer
// margins of the first and last page, they will be trimmed by flexbox automatically.
// maxPagesToShow is not really taken into account, it's used to derive the range of pages
// that was pre-rendered by createResponsiveLayoutTemplate().
function createResponsiveLayout(_a) {
    var container = _a.container, totalPages = _a.totalPages, currentPage = _a.currentPage, maxPagesToShow = _a.maxPagesToShow, showFirstPage = _a.showFirstPage, showLastPage = _a.showLastPage;
    var children = Array.from(container.children);
    var pages = children.slice(2, -2);
    var containerWidth = container.getBoundingClientRect().width;
    var firstRect = children[0].getBoundingClientRect();
    var lastRect = children[children.length - 1].getBoundingClientRect();
    var lowerRect = pages[0].getBoundingClientRect();
    var upperRect = pages[pages.length - 1].getBoundingClientRect();
    var rewindToFirstCost = mergeBoundingRects(firstRect, lowerRect).width - lowerRect.width;
    var rewindToLastCost = mergeBoundingRects(lastRect, upperRect).width - upperRect.width;
    var _b = rangeToPreRenderForResponsiveLayout(totalPages, currentPage, maxPagesToShow), lowerBound = _b[0], upperBound = _b[1];
    var pageRangeCost = function (a, b) {
        var aRect = pages[a - lowerBound].getBoundingClientRect();
        var bRect = pages[b - lowerBound].getBoundingClientRect();
        return mergeBoundingRects(aRect, bRect).width;
    };
    return createLayout({
        totalPages: totalPages,
        currentPage: currentPage,
        lowerBound: lowerBound,
        upperBound: upperBound,
        pageRangeCost: pageRangeCost,
        showFirstPage: showFirstPage,
        showLastPage: showLastPage,
        rewindToFirstCost: rewindToFirstCost,
        rewindToLastCost: rewindToLastCost,
        budget: containerWidth
    });
}
exports.createResponsiveLayout = createResponsiveLayout;
function createLayoutByExpandingPageRange(_a) {
    var totalPages = _a.totalPages, low = _a.low, high = _a.high, lowerBound = _a.lowerBound, upperBound = _a.upperBound, pageRangeCost = _a.pageRangeCost, budget = _a.budget, showRewindToFirst = _a.showRewindToFirst, showRewindToLast = _a.showRewindToLast, rewindToFirstCost = _a.rewindToFirstCost, rewindToLastCost = _a.rewindToLastCost;
    var safeLowerBound = showRewindToFirst ? Math.max(lowerBound, 4) : lowerBound;
    var safeUpperBound = showRewindToLast ? Math.min(upperBound, totalPages - 3) : upperBound;
    if (!isNondecreasing([lowerBound, safeLowerBound, low, high, safeUpperBound, upperBound])) {
        return null;
    }
    lowerBound = safeLowerBound;
    upperBound = safeUpperBound;
    budget -= (showRewindToFirst ? rewindToFirstCost : 0) + (showRewindToLast ? rewindToLastCost : 0);
    var acceptableLow = 0;
    var acceptableHigh = 0;
    while (lowerBound <= low && high <= upperBound && pageRangeCost(low, high) <= budget) {
        acceptableLow = low;
        acceptableHigh = high;
        if (low === lowerBound && high === upperBound) {
            break;
        }
        low = Math.max(low - 1, lowerBound);
        high = Math.min(high + 1, upperBound);
    }
    return acceptableLow && acceptableHigh
        ? (showRewindToFirst ? [1, 0] : []).concat(closedRange(acceptableLow, acceptableHigh), (showRewindToLast ? [0, totalPages] : [])) : null;
}
function createLayout(_a) {
    var totalPages = _a.totalPages, currentPage = _a.currentPage, lowerBound = _a.lowerBound, upperBound = _a.upperBound, pageRangeCost = _a.pageRangeCost, showFirstPage = _a.showFirstPage, showLastPage = _a.showLastPage, rewindToFirstCost = _a.rewindToFirstCost, rewindToLastCost = _a.rewindToLastCost, budget = _a.budget;
    var prevOrLowerBound = Math.max(currentPage - 1, lowerBound);
    var nextOrUpperBound = Math.min(currentPage + 1, upperBound);
    var expand = function (low, high, showRewindToFirst, showRewindToLast) {
        return createLayoutByExpandingPageRange({
            totalPages: totalPages,
            low: low,
            high: high,
            lowerBound: lowerBound,
            upperBound: upperBound,
            pageRangeCost: pageRangeCost,
            budget: budget,
            showRewindToFirst: showRewindToFirst,
            showRewindToLast: showRewindToLast,
            rewindToFirstCost: rewindToFirstCost,
            rewindToLastCost: rewindToLastCost
        });
    };
    return (
    // Try to show the entire range.
    (lowerBound === 1 || !showFirstPage) && (upperBound === totalPages || !showLastPage) &&
        expand(lowerBound, upperBound, false, false) ||
        // Ellipsis only in the end. Show at least one page after the current.
        (showLastPage && lowerBound === 1) &&
            expand(lowerBound, nextOrUpperBound, false, true) ||
        // Ellipsis only in the beginning. Show at least one page before the current.
        (showFirstPage && upperBound === totalPages) &&
            expand(prevOrLowerBound, upperBound, true, false) ||
        // Ellipses on both sides. Show at least one page before the current and one after.
        (showFirstPage && showLastPage) &&
            expand(prevOrLowerBound, nextOrUpperBound, true, true) ||
        // Ellipsis only in the end. Don't try to include the next page.
        (showLastPage && lowerBound === 1) &&
            expand(lowerBound, currentPage, false, true) ||
        // Ellipsis only in the beginning. Don't try to include the previous page.
        (showFirstPage && upperBound === totalPages) &&
            expand(currentPage, upperBound, true, false) ||
        // Ellipses on both sides. Don't try to include the previous and the next page.
        (showFirstPage && showLastPage) &&
            expand(currentPage, currentPage, true, true) ||
        // Cut off both sides without adding ellipses.
        expand(currentPage, currentPage, false, false) ||
        // If there's not enough space even for the current page, still show it.
        [currentPage]);
}
function closedRange(start, stop, step) {
    if (step === void 0) { step = 1; }
    var result = [];
    for (var i = start; i <= stop; i += step) {
        result.push(i);
    }
    return result;
}
function isNondecreasing(sequence) {
    for (var i = 1; i < sequence.length; i++) {
        if (sequence[i] < sequence[i - 1]) {
            return false;
        }
    }
    return true;
}
function mergeBoundingRects(a, b) {
    var top = Math.min(a.top, b.top);
    var right = Math.max(a.right, b.right);
    var bottom = Math.max(a.bottom, b.bottom);
    var left = Math.min(a.left, b.left);
    var width = right - left;
    var height = bottom - top;
    return { top: top, right: right, bottom: bottom, left: left, width: width, height: height };
}
//# sourceMappingURL=page-strip-layout.js.map

/***/ }),

/***/ 521:
/*!************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/pagination/root-min-width.js ***!
  \************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Pagination_1 = __webpack_require__(/*! ./Pagination */ 275);
exports.measureAndSetRootMinWidth = function (compNode, paginationMode, idPrefix) {
    if (idPrefix === void 0) { idPrefix = ''; }
    compNode.style.minWidth = '';
    compNode.style.minHeight = '';
    var getById = function (id) { return compNode.querySelector("#" + Pagination_1.getId(idPrefix, id)); };
    var getMinWidth = function (elmnt) { return elmnt ? parseInt(window.getComputedStyle(elmnt).minWidth, 10) : 0; };
    var getWidthWithMargins = function (element) {
        if (!element) {
            return 0;
        }
        var style = window.getComputedStyle(element);
        return parseInt(style.marginRight, 10) +
            element.offsetWidth +
            parseInt(style.marginLeft, 10);
    };
    var getHeightWithMargins = function (element) {
        if (!element) {
            return 0;
        }
        var style = window.getComputedStyle(element);
        return parseInt(style.marginBottom, 10) +
            element.offsetHeight +
            parseInt(style.marginTop, 10);
    };
    var navButtonsMinWidth = getWidthWithMargins(getById('navButtonNext')) +
        getWidthWithMargins(getById('navButtonPrevious')) +
        getWidthWithMargins(getById('navButtonFirst')) +
        getWidthWithMargins(getById('navButtonLast'));
    var selectionMinWidth = 0;
    var minHeight = 0;
    if (paginationMode === 'pages') {
        // means we're in "pages" pagination mode
        selectionMinWidth = getMinWidth(getById('pageStrip'));
        minHeight = Math.max(getHeightWithMargins(getById('pageStrip')), getHeightWithMargins(getById('navButtonNext')));
    }
    else {
        // means we're in "input" pagination mode
        selectionMinWidth = getWidthWithMargins(getById('totalPages')) +
            getWidthWithMargins(getById('slash')) +
            getWidthWithMargins(getById('pageInput'));
        minHeight = Math.max(getHeightWithMargins(getById('pageInput')), getHeightWithMargins(getById('navButtonNext')));
    }
    compNode.style.minWidth = navButtonsMinWidth + selectionMinWidth + 'px';
    compNode.style.minHeight = minHeight + 'px';
};
//# sourceMappingURL=root-min-width.js.map

/***/ }),

/***/ 522:
/*!**************************************************!*\
  !*** ./components/Pagination/paginationIcons.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slash = exports.arrowNext = exports.arrowPrevious = exports.arrowLast = exports.arrowFirst = undefined;

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arrowFirst = exports.arrowFirst = _react2.default.createElement(
  "svg",
  { version: "1.1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 200 200", enableBackground: "new 0 0 200 200", xmlSpace: "preserve" },
  _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M94.606,32.523l-72.009,68.199l70.48,66.745l-5.518,5.837l-76.627-72.582l78.156-74.027L94.606,32.523z" }),
    _react2.default.createElement("path", { d: "M107.059,100.723l70.48,66.745l-5.518,5.837l-76.627-72.582l78.156-74.027l5.518,5.828L107.059,100.723z" })
  )
);

var arrowLast = exports.arrowLast = _react2.default.createElement(
  "svg",
  { version: "1.1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 200 200", enableBackground: "new 0 0 200 200", xmlSpace: "preserve" },
  _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M112.442,26.696l76.627,72.582l-78.156,74.027l-5.518-5.828l72.009-68.199l-70.48-66.745L112.442,26.696z" }),
    _react2.default.createElement("path", { d: "M27.979,26.696l76.627,72.582l-78.156,74.027l-5.518-5.828l72.009-68.199l-70.48-66.745L27.979,26.696z" })
  )
);

var arrowPrevious = exports.arrowPrevious = _react2.default.createElement(
  "svg",
  { version: "1.1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 200 200", enableBackground: "new 0 0 200 200", xmlSpace: "preserve" },
  _react2.default.createElement("path", { d: "M130.789,173.304l-76.627-72.582l78.156-74.027l5.518,5.828l-72.009,68.199l70.48,66.745L130.789,173.304z" })
);

var arrowNext = exports.arrowNext = _react2.default.createElement(
  "svg",
  { version: "1.1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 200 200", enableBackground: "new 0 0 200 200", xmlSpace: "preserve" },
  _react2.default.createElement("path", { d: "M69.211,26.696l76.627,72.582l-78.156,74.027l-5.518-5.828l72.009-68.199l-70.48-66.745L69.211,26.696z" })
);

var slash = exports.slash = _react2.default.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 15 26", version: "1.1" },
  _react2.default.createElement("defs", null),
  _react2.default.createElement(
    "g",
    { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", strokeLinecap: "square" },
    _react2.default.createElement(
      "g",
      null,
      _react2.default.createElement("path", { d: "M13.5,4.5 L2,21.9807621" })
    )
  )
);

/***/ })

}]);
//# sourceMappingURL=wixui.Pagination.chunk.js.map