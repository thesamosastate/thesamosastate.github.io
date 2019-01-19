((typeof self !== 'undefined' ? self : this)["webpackJsonp_wix_ui_santa"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp_wix_ui_santa"] || []).push([[38],{

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

/***/ 114:
/*!**********************************************!*\
  !*** ../node_modules/eventemitter3/index.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ 115:
/*!**********************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/video/players/playerHOC.js ***!
  \**********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 11);
var React = __webpack_require__(/*! react */ 0);
var uniqueId = __webpack_require__(/*! lodash/uniqueId */ 92);
var isString = __webpack_require__(/*! lodash/isString */ 90);
var isFunction = __webpack_require__(/*! lodash/isFunction */ 117);
var constants_1 = __webpack_require__(/*! ../constants */ 91);
function playerHOC(Player, mapPropsToPlayer, mapMethodsToPlayer) {
    var _a;
    return _a = /** @class */ (function (_super) {
            tslib_1.__extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.isPlayingNow = false;
                _this.state = {
                    playerKey: uniqueId('player-'),
                };
                _this._playerRef = function (instance) {
                    _this.ref = instance;
                };
                return _this;
            }
            class_1.prototype.componentDidMount = function () {
                var _this = this;
                var _a = this.props, onPlay = _a.onPlay, onPause = _a.onPause, onEnded = _a.onEnded, onFirstPlay = _a.onFirstPlay, onFirstEnded = _a.onFirstEnded;
                this.ref.eventEmitter.once(constants_1.EVENTS.PLAYING, function () {
                    onFirstPlay();
                });
                this.ref.eventEmitter.once(constants_1.EVENTS.ENDED, function () {
                    onFirstEnded();
                });
                this.ref.eventEmitter.on(constants_1.EVENTS.PLAYING, function () {
                    _this.isPlayingNow = true;
                    onPlay();
                });
                this.ref.eventEmitter.on(constants_1.EVENTS.PAUSED, function () {
                    _this.isPlayingNow = false;
                    onPause();
                });
                this.ref.eventEmitter.on(constants_1.EVENTS.ENDED, function () {
                    _this.isPlayingNow = false;
                    onEnded();
                });
            };
            class_1.prototype.componentWillReceiveProps = function (nextProps) {
                var currentProps = this.props;
                for (var propKey in nextProps) {
                    var method = mapPropsToPlayer[propKey];
                    var isPropChanged = nextProps[propKey] !== currentProps[propKey];
                    if (method && isPropChanged) {
                        this._callPlayer(method, nextProps[propKey]);
                    }
                }
            };
            class_1.prototype._callPlayer = function (method) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                var player = this.ref.player;
                try {
                    if (isString(method)) {
                        return player[method].apply(player, args);
                    }
                    else if (isFunction(method)) {
                        return method.apply(void 0, [this, player].concat(args));
                    }
                }
                catch (error) {
                    this.props.onError(error);
                }
            };
            ;
            class_1.prototype.reload = function () {
                this.setState({
                    playerKey: uniqueId('player-'),
                });
            };
            class_1.prototype.getPlayerAPI = function () {
                return this.ref.player;
            };
            class_1.prototype.play = function () {
                var _this = this;
                var result = this._callPlayer(mapMethodsToPlayer.play);
                return (result instanceof Promise) ? result : new Promise(function (resolve) {
                    _this.ref.eventEmitter.once(constants_1.EVENTS.PLAYING, function () { return resolve(); });
                });
            };
            class_1.prototype.pause = function () {
                var _this = this;
                var result = this._callPlayer(mapMethodsToPlayer.pause);
                return (result instanceof Promise) ? result : new Promise(function (resolve) {
                    _this.ref.eventEmitter.once(constants_1.EVENTS.PAUSED, function () { return resolve(); });
                });
            };
            class_1.prototype.togglePlay = function () {
                var _this = this;
                var method = this.isPlayingNow ? 'pause' : 'play';
                var event = this.isPlayingNow ? constants_1.EVENTS.PAUSED : constants_1.EVENTS.PLAYING;
                var result = this._callPlayer(mapMethodsToPlayer[method]);
                return (result instanceof Promise) ? result : new Promise(function (resolve) {
                    _this.ref.eventEmitter.once(event, function () { return resolve(); });
                });
            };
            class_1.prototype.stop = function () {
                this._callPlayer(mapMethodsToPlayer.stop);
                return Promise.resolve();
            };
            class_1.prototype.getDuration = function () {
                return this._callPlayer(mapMethodsToPlayer.getDuration) || 0;
            };
            class_1.prototype.getCurrentTime = function () {
                return this._callPlayer(mapMethodsToPlayer.getCurrentTime) || 0;
            };
            class_1.prototype.seekTo = function (amount) {
                this._callPlayer(mapMethodsToPlayer.seekTo, amount);
                return Promise.resolve();
            };
            class_1.prototype.getVolume = function () {
                return this._callPlayer(mapMethodsToPlayer.getVolume) || 0;
            };
            class_1.prototype.setVolume = function (fraction) {
                return this._callPlayer(mapMethodsToPlayer.setVolume, fraction);
            };
            class_1.prototype.isMuted = function () {
                return this._callPlayer(mapMethodsToPlayer.isMuted);
            };
            class_1.prototype.isPlaying = function () {
                return this.isPlayingNow;
            };
            class_1.prototype.mute = function () {
                this._callPlayer(mapMethodsToPlayer.mute);
                return Promise.resolve();
            };
            class_1.prototype.unMute = function () {
                this._callPlayer(mapMethodsToPlayer.unMute);
                return Promise.resolve();
            };
            class_1.prototype.render = function () {
                return React.createElement(Player, tslib_1.__assign({ key: this.state.playerKey, ref: this._playerRef }, this.props));
            };
            return class_1;
        }(React.Component)),
        _a.propTypes = Player.propTypes,
        _a.displayName = Player.displayName,
        _a;
}
exports.default = playerHOC;
//# sourceMappingURL=playerHOC.js.map

/***/ }),

/***/ 117:
/*!********************************************!*\
  !*** ../node_modules/lodash/isFunction.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! lodash */ 7).isFunction

/***/ }),

/***/ 136:
/*!****************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/video/utils/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getSDK_1 = __webpack_require__(/*! ./getSDK */ 494);
exports.getSDK = getSDK_1.getSDK;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 181:
/*!******************************************!*\
  !*** ../node_modules/process/browser.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 188:
/*!**************************************************************!*\
  !*** ../node_modules/@wix/web-bi-logger/dist/src/lib/env.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHost = setHost;
exports.getHost = getHost;
exports.isWebWorker = isWebWorker;
exports.provideBrowsingContext = provideBrowsingContext;
var host = 'frog.wix.com';

function setHost(_host) {
  host = _host;
}

function getHost() {
  return host;
}

function isWebWorker() {
  /* global WorkerGlobalScope */

  //At the moment, this is the most reliable way of detecting if current code is run in a worker
  //Taken from here: https://stackoverflow.com/a/18002694
  return typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
}

/**
 * Provides a window object to the callback iff current window is the topmost one
 * Otherwise returns null
 */
function provideBrowsingContext(cb) {
  if (typeof window !== 'undefined' && window) {
    try {
      return window.top === window.self ? cb ? cb(window) : window : null;
    } catch (e) {
      return null;
    }
  }

  return null;
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

/***/ 206:
/*!****************************************************!*\
  !*** ../node_modules/setimmediate/setImmediate.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ 29), __webpack_require__(/*! ./../process/browser.js */ 181)))

/***/ }),

/***/ 209:
/*!*****************************************!*\
  !*** ../node_modules/lodash/isArray.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! lodash */ 7).isArray

/***/ }),

/***/ 268:
/*!****************************************************************!*\
  !*** ../node_modules/playable/dist/statics/playable.bundle.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {(function (global, factory) {
     true ? factory(exports) :
    undefined;
}(this, (function (exports) { 'use strict';

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
        };
        return __assign.apply(this, arguments);
    };

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    var ExtendableError = /** @class */ (function (_super) {
        __extends(ExtendableError, _super);
        function ExtendableError(message) {
            var _this = _super.call(this, message) || this;
            Object.defineProperty(_this, 'message', {
                enumerable: false,
                value: message,
            });
            Object.defineProperty(_this, 'name', {
                enumerable: false,
                value: _this.constructor.name,
            });
            Error.captureStackTrace(_this, _this.constructor);
            return _this;
        }
        return ExtendableError;
    }(Error));

    var NotAFunctionError = /** @class */ (function (_super) {
        __extends(NotAFunctionError, _super);
        function NotAFunctionError(functionName, expectedType, givenType) {
            return _super.call(this, "The function " + functionName + " expected a " + expectedType + ", " + givenType + " given.") || this;
        }
        return NotAFunctionError;
    }(ExtendableError));

    var Lifetime;
    (function (Lifetime) {
        Lifetime["SINGLETON"] = "singleton";
        Lifetime["TRANSIENT"] = "transient";
        Lifetime["SCOPED"] = "scoped";
    })(Lifetime || (Lifetime = {}));
    var Lifetime$1 = Lifetime;

    var PROPERTY_FOR_DEPENDENCIES = 'dependencies';
    var makeFluidInterface = function (obj) {
        var setLifetime = function (value) {
            obj.lifetime = value;
            return obj;
        };
        return {
            setLifetime: setLifetime,
            transient: function () { return setLifetime(Lifetime$1.TRANSIENT); },
            scoped: function () { return setLifetime(Lifetime$1.SCOPED); },
            singleton: function () { return setLifetime(Lifetime$1.SINGLETON); },
        };
    };
    var asValue = function (value) {
        var resolve = function () { return value; };
        return {
            resolve: resolve,
            lifetime: Lifetime$1.TRANSIENT,
        };
    };
    var asFunction = function (fn, options) {
        if (typeof fn !== 'function') {
            throw new NotAFunctionError('asFunction', 'function', typeof fn);
        }
        var defaults = {
            lifetime: Lifetime$1.TRANSIENT,
        };
        options = __assign({}, defaults, options);
        var resolve = generateResolve(fn);
        var result = {
            resolve: resolve,
            lifetime: options.lifetime,
        };
        result.resolve = resolve.bind(result);
        __assign(result, makeFluidInterface(result));
        return result;
    };
    var asClass = function (Type, options) {
        if (typeof Type !== 'function') {
            throw new NotAFunctionError('asClass', 'class', typeof Type);
        }
        var defaults = {
            lifetime: Lifetime$1.TRANSIENT,
        };
        options = __assign({}, defaults, options);
        // A function to handle object construction for us, as to make the generateResolve more reusable
        var newClass = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new (Type.bind.apply(Type, [void 0].concat(args)))();
        };
        var resolve = generateResolve(newClass, Type);
        var result = {
            resolve: resolve,
            lifetime: options.lifetime,
        };
        result.resolve = resolve.bind(result);
        __assign(result, makeFluidInterface(result));
        return result;
    };
    function generateResolve(fn, dependencyParseTarget) {
        // If the function used for dependency parsing is falsy, use the supplied function
        if (!dependencyParseTarget) {
            dependencyParseTarget = fn;
        }
        // Try to resolve the dependencies
        var dependencies = dependencyParseTarget[PROPERTY_FOR_DEPENDENCIES] || [];
        // Use a regular function instead of an arrow function to facilitate binding to the registration.
        return function resolve(container) {
            if (dependencies.length > 0) {
                var wrappedModules = dependencies.reduce(function (wrapper, dependency) {
                    wrapper[dependency] = container.resolve(dependency);
                    return wrapper;
                }, {});
                return fn(wrappedModules, container);
            }
            return fn(container);
        };
    }
    var registrations = {
        asValue: asValue,
        asFunction: asFunction,
        asClass: asClass,
    };

    var createErrorMessage = function (name, resolutionStack, message) {
        resolutionStack = resolutionStack.slice();
        resolutionStack.push(name);
        var resolutionPathString = resolutionStack.join(' -> ');
        var msg = "Could not resolve '" + name + "'.";
        if (message) {
            msg += " " + message + " \n\n Resolution path: " + resolutionPathString;
        }
        return msg;
    };
    var ResolutionError = /** @class */ (function (_super) {
        __extends(ResolutionError, _super);
        function ResolutionError(name, resolutionStack, message) {
            return _super.call(this, createErrorMessage(name, resolutionStack, message)) || this;
        }
        return ResolutionError;
    }(ExtendableError));

    function nameValueToObject (name, value) {
        var _a;
        if (typeof name !== 'object') {
            return __assign((_a = {}, _a[name] = value, _a));
        }
        return name;
    }

    var FAMILY_TREE = '__familyTree__';
    var Container = /** @class */ (function () {
        function Container(options, _parentContainer) {
            this._registrations = {};
            this._resolutionStack = [];
            this.options = __assign({}, options);
            this._parentContainer = _parentContainer || null;
            this[FAMILY_TREE] = this._parentContainer
                ? [this].concat(this._parentContainer[FAMILY_TREE])
                : [this];
            this.cache = {};
        }
        Object.defineProperty(Container.prototype, "registrations", {
            get: function () {
                return __assign({}, this._parentContainer && this._parentContainer.registrations, this._registrations);
            },
            enumerable: true,
            configurable: true
        });
        Container.prototype._registerAs = function (fn, verbatimValue, name, value, options) {
            var _this = this;
            var registrations$$1 = nameValueToObject(name, value);
            Object.keys(registrations$$1).forEach(function (key) {
                var valueToRegister = registrations$$1[key];
                // If we have options, copy them over.
                options = __assign({}, options);
                /* ignore coverage */
                if (!verbatimValue && Array.isArray(valueToRegister)) {
                    // The ('name', [value, options]) style
                    options = __assign({}, options, valueToRegister[1]);
                    valueToRegister = valueToRegister[0];
                }
                _this.register(key, fn(valueToRegister, options));
            });
            // Chaining
            return this;
        };
        Container.prototype.createScope = function () {
            return new Container(this.options, this);
        };
        Container.prototype.register = function (name, registration) {
            var _this = this;
            var obj = nameValueToObject(name, registration);
            Object.keys(obj).forEach(function (key) {
                _this._registrations[key] = obj[key];
            });
            return this;
        };
        Container.prototype.registerClass = function (name, value, options) {
            return this._registerAs(asClass, false, name, value, options);
        };
        Container.prototype.registerFunction = function (name, value, options) {
            return this._registerAs(asFunction, false, name, value, options);
        };
        Container.prototype.registerValue = function (name, value, options) {
            return this._registerAs(asValue, true, name, value, options);
        };
        Container.prototype.resolve = function (name) {
            // We need a reference to the root container,
            // so we can retrieve and store singletons.
            var root = this[FAMILY_TREE][this[FAMILY_TREE].length - 1];
            try {
                // Grab the registration by name.
                var registration = this.registrations[name];
                if (this._resolutionStack.indexOf(name) > -1) {
                    throw new ResolutionError(name, this._resolutionStack, 'Cyclic dependencies detected.');
                }
                if (!registration) {
                    throw new ResolutionError(name, this._resolutionStack);
                }
                // Pushes the currently-resolving module name onto the stack
                this._resolutionStack.push(name);
                // Do the thing
                var cached = void 0;
                var resolved = void 0;
                switch (registration.lifetime) {
                    case Lifetime$1.TRANSIENT:
                        // Transient lifetime means resolve every time.
                        resolved = registration.resolve(this);
                        break;
                    case Lifetime$1.SINGLETON:
                        // Singleton lifetime means cache at all times, regardless of scope.
                        cached = root.cache[name];
                        if (cached === undefined) {
                            resolved = registration.resolve(this);
                            root.cache[name] = resolved;
                        }
                        else {
                            resolved = cached;
                        }
                        break;
                    case Lifetime$1.SCOPED:
                        // Scoped lifetime means that the container
                        // that resolves the registration also caches it.
                        // When a registration is not found, we travel up
                        // the family tree until we find one that is cached.
                        // Note: The first element in the family tree is this container.
                        for (var _i = 0, _a = this[FAMILY_TREE]; _i < _a.length; _i++) {
                            var _containerFromFamiltyTree = _a[_i];
                            cached = _containerFromFamiltyTree.cache[name];
                            if (cached !== undefined) {
                                // We found one!
                                resolved = cached;
                                break;
                            }
                        }
                        // If we still have not found one, we need to resolve and cache it.
                        if (cached === undefined) {
                            resolved = registration.resolve(this);
                            this.cache[name] = resolved;
                        }
                        break;
                    default:
                        throw new ResolutionError(name, this._resolutionStack, "Unknown lifetime \"" + registration.lifetime + "\"");
                }
                // Pop it from the stack again, ready for the next resolution
                this._resolutionStack.pop();
                return resolved;
            }
            catch (err) {
                // When we get an error we need to reset the stack.
                this._resolutionStack = [];
                throw err;
            }
        };
        return Container;
    }());
    function createContainer(options, __parentContainer) {
        return new Container(options, __parentContainer);
    }

    var DependencyContainer = __assign({ createContainer: createContainer,
        Lifetime: Lifetime$1 }, registrations);

    var IPHONE_PATTERN = /iphone/i;
    var IPOD_PATTERN = /ipod/i;
    var IPAD_PATTERN = /ipad/i;
    var ANDROID_PATTERN = /(android)/i;
    var SAFARI_PATTERN = /^((?!chrome|android).)*safari/i;
    // There is some iPhone/iPad/iPod in Windows Phone...
    // https://msdn.microsoft.com/en-us/library/hh869301(v=vs.85).aspx
    var isIE = function () { return !!window.MSStream; };
    var getUserAgent = function () { return window.navigator && window.navigator.userAgent; };
    var isIPhone = function () { return !isIE() && IPHONE_PATTERN.test(getUserAgent()); };
    var isIPod = function () { return !isIE() && IPOD_PATTERN.test(getUserAgent()); };
    var isIPad = function () { return !isIE() && IPAD_PATTERN.test(getUserAgent()); };
    var isIOS = function () { return isIPhone() || isIPod() || isIPad(); };
    var isAndroid = function () { return ANDROID_PATTERN.test(getUserAgent()); };
    var isSafari = function () { return SAFARI_PATTERN.test(getUserAgent()); };

    var convertUIConfigForIOS = function (params) { return (__assign({}, params, { disableControlWithClickOnPlayer: true, disableControlWithKeyboard: true, hideMainUI: true, nativeBrowserControls: true })); };
    var convertUIConfigForAndroid = function (params) { return (__assign({}, params, { disableControlWithClickOnPlayer: true, disableControlWithKeyboard: true })); };
    var convertToDeviceRelatedConfig = function (params) {
        if (isIOS()) {
            return convertUIConfigForIOS(params);
        }
        if (isAndroid()) {
            return convertUIConfigForAndroid(params);
        }
        return params;
    };

    var PLAYER_API_PROPERTY = '___playerAPI';
    var checkDescriptorsOnEquality = function (desc1, desc2) {
        return desc1.value === desc2.value &&
            desc1.get === desc2.get &&
            desc1.set === desc2.set;
    };
    var playerAPI = function (name) { return function (target, property, descriptor) {
        var methodName = name || property;
        if (!target[PLAYER_API_PROPERTY]) {
            target[PLAYER_API_PROPERTY] = {};
        }
        if (target[PLAYER_API_PROPERTY][methodName]) {
            if (!checkDescriptorsOnEquality(target[PLAYER_API_PROPERTY][methodName], descriptor)) {
                throw new Error("Method \"" + methodName + "\" for public API in " + target.constructor.name + " is already defined");
            }
        }
        target[PLAYER_API_PROPERTY][methodName] = descriptor;
    }; };

    var Player = /** @class */ (function () {
        function Player(params, scope, defaultModulesNames, additionalModuleNames, themeConfig) {
            if (defaultModulesNames === void 0) { defaultModulesNames = []; }
            if (additionalModuleNames === void 0) { additionalModuleNames = []; }
            this._scope = scope;
            this._scope.registerValue({
                config: convertToDeviceRelatedConfig(params),
            });
            this._scope.registerValue({
                themeConfig: themeConfig,
            });
            this._config = this._scope.resolve('config');
            this._resolveAdditionalModules(additionalModuleNames);
            this._resolveDefaultModules(defaultModulesNames);
        }
        /*
          Separation for default and additional modules is needed
          for future implementation of public methods of resolved modules and
          could be abolished in future
        */
        Player.prototype._resolveDefaultModules = function (modulesNames) {
            var _this = this;
            this._defaultModules = modulesNames.reduce(function (modules, moduleName) {
                if (_this._additionalModules[moduleName]) {
                    return modules;
                }
                var resolvedModule = _this._scope.resolve(moduleName);
                _this._addPlayerAPIFromModule(resolvedModule);
                modules[moduleName] = resolvedModule;
                return modules;
            }, {});
        };
        Player.prototype._resolveAdditionalModules = function (modulesNames) {
            var _this = this;
            this._additionalModules = modulesNames.reduce(function (modules, moduleName) {
                var resolvedModule = _this._scope.resolve(moduleName);
                _this._addPlayerAPIFromModule(resolvedModule);
                modules[moduleName] = resolvedModule;
                return modules;
            }, {});
        };
        Player.prototype._getWrappedCallToModuleFunction = function (module, fn) {
            var _this = this;
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (_this._destroyed) {
                    throw new Error('Player instance is destroyed');
                }
                return fn.apply(module, args);
            };
        };
        Player.prototype._getPlayerAPIMethodDescriptor = function (module, descriptor) {
            var playerMethodDescriptor = {
                enumerable: true,
                configurable: true,
            };
            var get = descriptor.get, set = descriptor.set, value = descriptor.value;
            if (get) {
                playerMethodDescriptor.get = this._getWrappedCallToModuleFunction(module, get);
            }
            if (set) {
                playerMethodDescriptor.set = this._getWrappedCallToModuleFunction(module, set);
            }
            if (value) {
                playerMethodDescriptor.value = this._getWrappedCallToModuleFunction(module, value);
                playerMethodDescriptor.writable = true;
            }
            return playerMethodDescriptor;
        };
        Player.prototype._addPlayerAPIFromModule = function (module) {
            var _this = this;
            if (module[PLAYER_API_PROPERTY]) {
                Object.keys(module[PLAYER_API_PROPERTY]).forEach(function (apiKey) {
                    if (_this[apiKey]) {
                        throw new Error("API method " + apiKey + " is already defined in Player facade");
                    }
                    Object.defineProperty(_this, apiKey, _this._getPlayerAPIMethodDescriptor(module, module[PLAYER_API_PROPERTY][apiKey]));
                });
            }
        };
        Player.prototype._clearPlayerAPIForModule = function (module) {
            var _this = this;
            if (module[PLAYER_API_PROPERTY]) {
                Object.keys(module[PLAYER_API_PROPERTY]).forEach(function (apiKey) {
                    delete _this[apiKey];
                });
            }
        };
        Player.prototype.destroy = function () {
            var _this = this;
            Object.keys(this._defaultModules).forEach(function (moduleName) {
                var module = _this._defaultModules[moduleName];
                _this._clearPlayerAPIForModule(module);
                module.destroy();
            });
            Object.keys(this._additionalModules).forEach(function (moduleName) {
                var module = _this._additionalModules[moduleName];
                _this._clearPlayerAPIForModule(module);
                if (module.destroy) {
                    module.destroy();
                }
            });
            this._defaultModules = null;
            this._additionalModules = null;
            this._config = null;
            this._scope = null;
            this._destroyed = true;
        };
        return Player;
    }());

    /**
     * A collection of shims that provide minimal functionality of the ES6 collections.
     *
     * These implementations are not meant to be used outside of the ResizeObserver
     * modules as they cover only a limited range of use cases.
     */
    /* eslint-disable require-jsdoc, valid-jsdoc */
    var MapShim = (function () {
        if (typeof Map !== 'undefined') {
            return Map;
        }

        /**
         * Returns index in provided array that matches the specified key.
         *
         * @param {Array<Array>} arr
         * @param {*} key
         * @returns {number}
         */
        function getIndex(arr, key) {
            var result = -1;

            arr.some(function (entry, index) {
                if (entry[0] === key) {
                    result = index;

                    return true;
                }

                return false;
            });

            return result;
        }

        return (function () {
            function anonymous() {
                this.__entries__ = [];
            }

            var prototypeAccessors = { size: { configurable: true } };

            /**
             * @returns {boolean}
             */
            prototypeAccessors.size.get = function () {
                return this.__entries__.length;
            };

            /**
             * @param {*} key
             * @returns {*}
             */
            anonymous.prototype.get = function (key) {
                var index = getIndex(this.__entries__, key);
                var entry = this.__entries__[index];

                return entry && entry[1];
            };

            /**
             * @param {*} key
             * @param {*} value
             * @returns {void}
             */
            anonymous.prototype.set = function (key, value) {
                var index = getIndex(this.__entries__, key);

                if (~index) {
                    this.__entries__[index][1] = value;
                } else {
                    this.__entries__.push([key, value]);
                }
            };

            /**
             * @param {*} key
             * @returns {void}
             */
            anonymous.prototype.delete = function (key) {
                var entries = this.__entries__;
                var index = getIndex(entries, key);

                if (~index) {
                    entries.splice(index, 1);
                }
            };

            /**
             * @param {*} key
             * @returns {void}
             */
            anonymous.prototype.has = function (key) {
                return !!~getIndex(this.__entries__, key);
            };

            /**
             * @returns {void}
             */
            anonymous.prototype.clear = function () {
                this.__entries__.splice(0);
            };

            /**
             * @param {Function} callback
             * @param {*} [ctx=null]
             * @returns {void}
             */
            anonymous.prototype.forEach = function (callback, ctx) {
                var this$1 = this;
                if ( ctx === void 0 ) ctx = null;

                for (var i = 0, list = this$1.__entries__; i < list.length; i += 1) {
                    var entry = list[i];

                    callback.call(ctx, entry[1], entry[0]);
                }
            };

            Object.defineProperties( anonymous.prototype, prototypeAccessors );

            return anonymous;
        }());
    })();

    /**
     * Detects whether window and document objects are available in current environment.
     */
    var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

    // Returns global object of a current environment.
    var global$1 = (function () {
        if (typeof global !== 'undefined' && global.Math === Math) {
            return global;
        }

        if (typeof self !== 'undefined' && self.Math === Math) {
            return self;
        }

        if (typeof window !== 'undefined' && window.Math === Math) {
            return window;
        }

        // eslint-disable-next-line no-new-func
        return Function('return this')();
    })();

    /**
     * A shim for the requestAnimationFrame which falls back to the setTimeout if
     * first one is not supported.
     *
     * @returns {number} Requests' identifier.
     */
    var requestAnimationFrame$1 = (function () {
        if (typeof requestAnimationFrame === 'function') {
            // It's required to use a bounded function because IE sometimes throws
            // an "Invalid calling object" error if rAF is invoked without the global
            // object on the left hand side.
            return requestAnimationFrame.bind(global$1);
        }

        return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
    })();

    // Defines minimum timeout before adding a trailing call.
    var trailingTimeout = 2;

    /**
     * Creates a wrapper function which ensures that provided callback will be
     * invoked only once during the specified delay period.
     *
     * @param {Function} callback - Function to be invoked after the delay period.
     * @param {number} delay - Delay after which to invoke callback.
     * @returns {Function}
     */
    var throttle = function (callback, delay) {
        var leadingCall = false,
            trailingCall = false,
            lastCallTime = 0;

        /**
         * Invokes the original callback function and schedules new invocation if
         * the "proxy" was called during current request.
         *
         * @returns {void}
         */
        function resolvePending() {
            if (leadingCall) {
                leadingCall = false;

                callback();
            }

            if (trailingCall) {
                proxy();
            }
        }

        /**
         * Callback invoked after the specified delay. It will further postpone
         * invocation of the original function delegating it to the
         * requestAnimationFrame.
         *
         * @returns {void}
         */
        function timeoutCallback() {
            requestAnimationFrame$1(resolvePending);
        }

        /**
         * Schedules invocation of the original function.
         *
         * @returns {void}
         */
        function proxy() {
            var timeStamp = Date.now();

            if (leadingCall) {
                // Reject immediately following calls.
                if (timeStamp - lastCallTime < trailingTimeout) {
                    return;
                }

                // Schedule new call to be in invoked when the pending one is resolved.
                // This is important for "transitions" which never actually start
                // immediately so there is a chance that we might miss one if change
                // happens amids the pending invocation.
                trailingCall = true;
            } else {
                leadingCall = true;
                trailingCall = false;

                setTimeout(timeoutCallback, delay);
            }

            lastCallTime = timeStamp;
        }

        return proxy;
    };

    // Minimum delay before invoking the update of observers.
    var REFRESH_DELAY = 20;

    // A list of substrings of CSS properties used to find transition events that
    // might affect dimensions of observed elements.
    var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];

    // Check if MutationObserver is available.
    var mutationObserverSupported = typeof MutationObserver !== 'undefined';

    /**
     * Singleton controller class which handles updates of ResizeObserver instances.
     */
    var ResizeObserverController = function() {
        this.connected_ = false;
        this.mutationEventsAdded_ = false;
        this.mutationsObserver_ = null;
        this.observers_ = [];

        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    };

    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */


    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */


    /**
     * Keeps reference to the instance of MutationObserver.
     *
     * @private {MutationObserver}
     */

    /**
     * Indicates whether DOM listeners have been added.
     *
     * @private {boolean}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }

        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };

    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);

        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }

        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };

    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();

        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };

    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *  dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });

        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });

        return activeObservers.length > 0;
    };

    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }

        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);

        window.addEventListener('resize', this.refresh);

        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);

            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        } else {
            document.addEventListener('DOMSubtreeModified', this.refresh);

            this.mutationEventsAdded_ = true;
        }

        this.connected_ = true;
    };

    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }

        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);

        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }

        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }

        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };

    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (ref) {
            var propertyName = ref.propertyName; if ( propertyName === void 0 ) propertyName = '';

        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });

        if (isReflowProperty) {
            this.refresh();
        }
    };

    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }

        return this.instance_;
    };

    ResizeObserverController.instance_ = null;

    /**
     * Defines non-writable/enumerable properties of the provided target object.
     *
     * @param {Object} target - Object for which to define properties.
     * @param {Object} props - Properties to be defined.
     * @returns {Object} Target object.
     */
    var defineConfigurable = (function (target, props) {
        for (var i = 0, list = Object.keys(props); i < list.length; i += 1) {
            var key = list[i];

            Object.defineProperty(target, key, {
                value: props[key],
                enumerable: false,
                writable: false,
                configurable: true
            });
        }

        return target;
    });

    /**
     * Returns the global object associated with provided element.
     *
     * @param {Object} target
     * @returns {Object}
     */
    var getWindowOf = (function (target) {
        // Assume that the element is an instance of Node, which means that it
        // has the "ownerDocument" property from which we can retrieve a
        // corresponding global object.
        var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;

        // Return the local global object if it's not possible extract one from
        // provided element.
        return ownerGlobal || global$1;
    });

    // Placeholder of an empty content rectangle.
    var emptyRect = createRectInit(0, 0, 0, 0);

    /**
     * Converts provided string to a number.
     *
     * @param {number|string} value
     * @returns {number}
     */
    function toFloat(value) {
        return parseFloat(value) || 0;
    }

    /**
     * Extracts borders size from provided styles.
     *
     * @param {CSSStyleDeclaration} styles
     * @param {...string} positions - Borders positions (top, right, ...)
     * @returns {number}
     */
    function getBordersSize(styles) {
        var positions = [], len = arguments.length - 1;
        while ( len-- > 0 ) positions[ len ] = arguments[ len + 1 ];

        return positions.reduce(function (size, position) {
            var value = styles['border-' + position + '-width'];

            return size + toFloat(value);
        }, 0);
    }

    /**
     * Extracts paddings sizes from provided styles.
     *
     * @param {CSSStyleDeclaration} styles
     * @returns {Object} Paddings box.
     */
    function getPaddings(styles) {
        var positions = ['top', 'right', 'bottom', 'left'];
        var paddings = {};

        for (var i = 0, list = positions; i < list.length; i += 1) {
            var position = list[i];

            var value = styles['padding-' + position];

            paddings[position] = toFloat(value);
        }

        return paddings;
    }

    /**
     * Calculates content rectangle of provided SVG element.
     *
     * @param {SVGGraphicsElement} target - Element content rectangle of which needs
     *      to be calculated.
     * @returns {DOMRectInit}
     */
    function getSVGContentRect(target) {
        var bbox = target.getBBox();

        return createRectInit(0, 0, bbox.width, bbox.height);
    }

    /**
     * Calculates content rectangle of provided HTMLElement.
     *
     * @param {HTMLElement} target - Element for which to calculate the content rectangle.
     * @returns {DOMRectInit}
     */
    function getHTMLElementContentRect(target) {
        // Client width & height properties can't be
        // used exclusively as they provide rounded values.
        var clientWidth = target.clientWidth;
        var clientHeight = target.clientHeight;

        // By this condition we can catch all non-replaced inline, hidden and
        // detached elements. Though elements with width & height properties less
        // than 0.5 will be discarded as well.
        //
        // Without it we would need to implement separate methods for each of
        // those cases and it's not possible to perform a precise and performance
        // effective test for hidden elements. E.g. even jQuery's ':visible' filter
        // gives wrong results for elements with width & height less than 0.5.
        if (!clientWidth && !clientHeight) {
            return emptyRect;
        }

        var styles = getWindowOf(target).getComputedStyle(target);
        var paddings = getPaddings(styles);
        var horizPad = paddings.left + paddings.right;
        var vertPad = paddings.top + paddings.bottom;

        // Computed styles of width & height are being used because they are the
        // only dimensions available to JS that contain non-rounded values. It could
        // be possible to utilize the getBoundingClientRect if only it's data wasn't
        // affected by CSS transformations let alone paddings, borders and scroll bars.
        var width = toFloat(styles.width),
            height = toFloat(styles.height);

        // Width & height include paddings and borders when the 'border-box' box
        // model is applied (except for IE).
        if (styles.boxSizing === 'border-box') {
            // Following conditions are required to handle Internet Explorer which
            // doesn't include paddings and borders to computed CSS dimensions.
            //
            // We can say that if CSS dimensions + paddings are equal to the "client"
            // properties then it's either IE, and thus we don't need to subtract
            // anything, or an element merely doesn't have paddings/borders styles.
            if (Math.round(width + horizPad) !== clientWidth) {
                width -= getBordersSize(styles, 'left', 'right') + horizPad;
            }

            if (Math.round(height + vertPad) !== clientHeight) {
                height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
            }
        }

        // Following steps can't be applied to the document's root element as its
        // client[Width/Height] properties represent viewport area of the window.
        // Besides, it's as well not necessary as the <html> itself neither has
        // rendered scroll bars nor it can be clipped.
        if (!isDocumentElement(target)) {
            // In some browsers (only in Firefox, actually) CSS width & height
            // include scroll bars size which can be removed at this step as scroll
            // bars are the only difference between rounded dimensions + paddings
            // and "client" properties, though that is not always true in Chrome.
            var vertScrollbar = Math.round(width + horizPad) - clientWidth;
            var horizScrollbar = Math.round(height + vertPad) - clientHeight;

            // Chrome has a rather weird rounding of "client" properties.
            // E.g. for an element with content width of 314.2px it sometimes gives
            // the client width of 315px and for the width of 314.7px it may give
            // 314px. And it doesn't happen all the time. So just ignore this delta
            // as a non-relevant.
            if (Math.abs(vertScrollbar) !== 1) {
                width -= vertScrollbar;
            }

            if (Math.abs(horizScrollbar) !== 1) {
                height -= horizScrollbar;
            }
        }

        return createRectInit(paddings.left, paddings.top, width, height);
    }

    /**
     * Checks whether provided element is an instance of the SVGGraphicsElement.
     *
     * @param {Element} target - Element to be checked.
     * @returns {boolean}
     */
    var isSVGGraphicsElement = (function () {
        // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
        // interface.
        if (typeof SVGGraphicsElement !== 'undefined') {
            return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
        }

        // If it's so, then check that element is at least an instance of the
        // SVGElement and that it has the "getBBox" method.
        // eslint-disable-next-line no-extra-parens
        return function (target) { return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function'; };
    })();

    /**
     * Checks whether provided element is a document element (<html>).
     *
     * @param {Element} target - Element to be checked.
     * @returns {boolean}
     */
    function isDocumentElement(target) {
        return target === getWindowOf(target).document.documentElement;
    }

    /**
     * Calculates an appropriate content rectangle for provided html or svg element.
     *
     * @param {Element} target - Element content rectangle of which needs to be calculated.
     * @returns {DOMRectInit}
     */
    function getContentRect(target) {
        if (!isBrowser) {
            return emptyRect;
        }

        if (isSVGGraphicsElement(target)) {
            return getSVGContentRect(target);
        }

        return getHTMLElementContentRect(target);
    }

    /**
     * Creates rectangle with an interface of the DOMRectReadOnly.
     * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
     *
     * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
     * @returns {DOMRectReadOnly}
     */
    function createReadOnlyRect(ref) {
        var x = ref.x;
        var y = ref.y;
        var width = ref.width;
        var height = ref.height;

        // If DOMRectReadOnly is available use it as a prototype for the rectangle.
        var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
        var rect = Object.create(Constr.prototype);

        // Rectangle's properties are not writable and non-enumerable.
        defineConfigurable(rect, {
            x: x, y: y, width: width, height: height,
            top: y,
            right: x + width,
            bottom: height + y,
            left: x
        });

        return rect;
    }

    /**
     * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
     * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
     *
     * @param {number} x - X coordinate.
     * @param {number} y - Y coordinate.
     * @param {number} width - Rectangle's width.
     * @param {number} height - Rectangle's height.
     * @returns {DOMRectInit}
     */
    function createRectInit(x, y, width, height) {
        return { x: x, y: y, width: width, height: height };
    }

    /**
     * Class that is responsible for computations of the content rectangle of
     * provided DOM element and for keeping track of it's changes.
     */
    var ResizeObservation = function(target) {
        this.broadcastWidth = 0;
        this.broadcastHeight = 0;
        this.contentRect_ = createRectInit(0, 0, 0, 0);

        this.target = target;
    };

    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */


    /**
     * Reference to the last observed content rectangle.
     *
     * @private {DOMRectInit}
     */


    /**
     * Broadcasted width of content rectangle.
     *
     * @type {number}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);

        this.contentRect_ = rect;

        return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
    };

    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;

        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;

        return rect;
    };

    var ResizeObserverEntry = function(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);

        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    };

    var ResizeObserverSPI = function(callback, controller, callbackCtx) {
        this.activeObservations_ = [];
        this.observations_ = new MapShim();

        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }

        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    };

    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */


    /**
     * Registry of the ResizeObservation instances.
     *
     * @private {Map<Element, ResizeObservation>}
     */


    /**
     * Public ResizeObserver instance which will be passed to the callback
     * function and used as a value of it's "this" binding.
     *
     * @private {ResizeObserver}
     */

    /**
     * Collection of resize observations that have detected changes in dimensions
     * of elements.
     *
     * @private {Array<ResizeObservation>}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }

        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }

        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }

        var observations = this.observations_;

        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }

        observations.set(target, new ResizeObservation(target));

        this.controller_.addObserver(this);

        // Force the update of observations.
        this.controller_.refresh();
    };

    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }

        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }

        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }

        var observations = this.observations_;

        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }

        observations.delete(target);

        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };

    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };

    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
            var this$1 = this;

        this.clearActive();

        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                this$1.activeObservations_.push(observation);
            }
        });
    };

    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }

        var ctx = this.callbackCtx_;

        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });

        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };

    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };

    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };

    // Registry of internal observers. If WeakMap is not available use current shim
    // for the Map collection as it has all required methods and because WeakMap
    // can't be fully polyfilled anyway.
    var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();

    /**
     * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
     * exposing only those methods and properties that are defined in the spec.
     */
    var ResizeObserver = function(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }

        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);

        observers.set(this, observer);
    };

    // Expose public methods of ResizeObserver.
    ['observe', 'unobserve', 'disconnect'].forEach(function (method) {
        ResizeObserver.prototype[method] = function () {
            return (ref = observers.get(this))[method].apply(ref, arguments);
            var ref;
        };
    });

    var index = (function () {
        // Export existing implementation if available.
        if (typeof global$1.ResizeObserver !== 'undefined') {
            return global$1.ResizeObserver;
        }

        return ResizeObserver;
    })();

    // Code from ally.js
    /*
      Observe keyboard-, pointer-, mouse- and touch-events so that a query for
      the current interaction type can be made at any time. For pointer interaction
      this observer is limited to pointer button down/up - move is not observed!

      USAGE:
        var listener = engage();
        listener.get() === {pointer: Boolean, key: Boolean}
    */
    // counters to track primary input
    var _activePointers = 0;
    var _activeKeys = 0;
    var pointerStartEvents = [
        'touchstart',
        'pointerdown',
        'MSPointerDown',
        'mousedown',
    ];
    var pointerEndEvents = [
        'touchend',
        'touchcancel',
        'pointerup',
        'MSPointerUp',
        'pointercancel',
        'MSPointerCancel',
        'mouseup',
    ];
    function handleWindowBlurEvent() {
        // reset internal counters when window loses focus
        _activePointers = 0;
        _activeKeys = 0;
    }
    function handlePointerStartEvent(event) {
        if (event.isPrimary === false) {
            // ignore non-primary pointer events
            // https://w3c.github.io/pointerevents/#widl-PointerEvent-isPrimary
            return;
        }
        // mousedown without following mouseup
        // (likely not possible in Chrome)
        _activePointers += 1;
    }
    function handlePointerEndEvent(event) {
        if (event.isPrimary === false) {
            // ignore non-primary pointer events
            // https://w3c.github.io/pointerevents/#widl-PointerEvent-isPrimary
            return;
        }
        else if (event.touches) {
            _activePointers = event.touches.length;
            return;
        }
        // delay reset to when the current handlers are executed
        (window.setImmediate || window.setTimeout)(function () {
            // mouseup without prior mousedown
            // (drag something out of the window)
            _activePointers = Math.max(_activePointers - 1, 0);
        });
    }
    function handleKeyStartEvent(event) {
        // ignore modifier keys
        switch (event.keyCode || event.which) {
            case 16: // space
            case 17: // control
            case 18: // alt
            case 91: // command left
            case 93: // command right
                return;
            default:
                break;
        }
        // keydown without a following keyup
        // (may happen on CMD+TAB)
        _activeKeys += 1;
    }
    function handleKeyEndEvent(event) {
        // ignore modifier keys
        switch (event.keyCode || event.which) {
            case 16: // space
            case 17: // control
            case 18: // alt
            case 91: // command left
            case 93: // command right
                return;
            default:
                break;
        }
        // delay reset to when the current handlers are executed
        (window.setImmediate || window.setTimeout)(function () {
            // keyup without prior keydown
            // (may happen on CMD+R)
            _activeKeys = Math.max(_activeKeys - 1, 0);
        });
    }
    function getInteractionType() {
        return {
            pointer: Boolean(_activePointers),
            key: Boolean(_activeKeys),
        };
    }
    function disengage() {
        _activePointers = _activeKeys = 0;
        window.removeEventListener('blur', handleWindowBlurEvent, false);
        document.documentElement.removeEventListener('keydown', handleKeyStartEvent, true);
        document.documentElement.removeEventListener('keyup', handleKeyEndEvent, true);
        pointerStartEvents.forEach(function (event) {
            document.documentElement.removeEventListener(event, handlePointerStartEvent, true);
        });
        pointerEndEvents.forEach(function (event) {
            document.documentElement.removeEventListener(event, handlePointerEndEvent, true);
        });
    }
    function engage() {
        // window blur must be in bubble phase so it won't capture regular blurs
        window.addEventListener('blur', handleWindowBlurEvent, false);
        // handlers to identify the method of focus change
        document.documentElement.addEventListener('keydown', handleKeyStartEvent, true);
        document.documentElement.addEventListener('keyup', handleKeyEndEvent, true);
        pointerStartEvents.forEach(function (event) {
            document.documentElement.addEventListener(event, handlePointerStartEvent, true);
        });
        pointerEndEvents.forEach(function (event) {
            document.documentElement.addEventListener(event, handlePointerEndEvent, true);
        });
        return {
            get: getInteractionType,
        };
    }
    var engageInteractionTypeObserver = { engage: engage, disengage: disengage };

    // Code from ally.js
    // preferring focusin/out because they are synchronous in IE10+11
    var supportsFocusIn = typeof document !== 'undefined' && 'onfocusin' in document;
    var focusEventName = supportsFocusIn ? 'focusin' : 'focus';
    var blurEventName = supportsFocusIn ? 'focusout' : 'blur';
    // interface to read interaction-type-listener state
    var interactionTypeHandler;
    // keep track of last focus source
    var current = null;
    // overwrite focus source for use with the every upcoming focus event
    var lock = null;
    // keep track of ever having used a particular input method to change focus
    var used = {
        pointer: false,
        key: false,
        script: false,
        initial: false,
    };
    function handleFocusEvent(event) {
        var source = '';
        if (event.type === focusEventName) {
            var interactionType = interactionTypeHandler.get();
            source =
                lock ||
                    (interactionType.pointer && 'pointer') ||
                    (interactionType.key && 'key') ||
                    'script';
        }
        else if (event.type === 'initial') {
            source = 'initial';
        }
        document.documentElement.setAttribute('data-playable-focus-source', source);
        if (event.type !== blurEventName) {
            used[source] = true;
            current = source;
        }
    }
    function getCurrentFocusSource() {
        return current;
    }
    function getUsedFocusSource(source) {
        return used[source];
    }
    function lockFocusSource(source) {
        lock = source;
    }
    function unlockFocusSource() {
        lock = false;
    }
    function disengage$1() {
        // clear dom state
        handleFocusEvent({ type: blurEventName });
        current = lock = null;
        Object.keys(used).forEach(function (key) {
            used[key] = false;
        });
        // kill interaction type identification listener
        engageInteractionTypeObserver.disengage();
        document.documentElement.removeEventListener(focusEventName, handleFocusEvent, true);
        document.documentElement.removeEventListener(blurEventName, handleFocusEvent, true);
        document.documentElement.removeAttribute('data-playable-focus-source');
    }
    function engage$1() {
        document.documentElement.addEventListener(focusEventName, handleFocusEvent, true);
        document.documentElement.addEventListener(blurEventName, handleFocusEvent, true);
        // enable the interaction type identification observer
        interactionTypeHandler = engageInteractionTypeObserver.engage();
        // set up initial dom state
        handleFocusEvent({ type: 'initial' });
        return {
            used: getUsedFocusSource,
            current: getCurrentFocusSource,
            lock: lockFocusSource,
            unlock: unlockFocusSource,
        };
    }
    var focusSource = { engage: engage$1, disengage: disengage$1 };

    // inspired by https://gist.github.com/aFarkas/a7e0d85450f323d5e164
    var FOCUS_WITHIN_CLASSNAME = 'focus-within';
    var clearFocusWithinClass = function (element) {
        Array.prototype.slice
            .call(element.getElementsByClassName(FOCUS_WITHIN_CLASSNAME))
            .forEach(function (elem) {
            elem.classList.remove(FOCUS_WITHIN_CLASSNAME);
        });
    };
    var addFocusWithinClass = function (boundaryElement, activeElement) {
        var currentNode = activeElement;
        while (currentNode !== boundaryElement && currentNode.classList) {
            currentNode.classList.add(FOCUS_WITHIN_CLASSNAME);
            currentNode = currentNode.parentNode;
        }
    };
    var focusWithin = function (rootElement, onFocusEnter, onFocusLeave) {
        var update = (function () {
            var running;
            var last;
            var isFocused;
            var action = function () {
                var activeElement = document.activeElement;
                running = false;
                if (last !== activeElement) {
                    last = activeElement;
                    clearFocusWithinClass(rootElement);
                    if (!rootElement.contains(activeElement)) {
                        if (isFocused) {
                            isFocused = false;
                            onFocusLeave();
                        }
                        return;
                    }
                    if (!isFocused) {
                        isFocused = true;
                        onFocusEnter();
                    }
                    addFocusWithinClass(rootElement, activeElement);
                }
            };
            return function () {
                if (!running) {
                    requestAnimationFrame(action);
                    running = true;
                }
            };
        })();
        rootElement.addEventListener('focus', update, true);
        rootElement.addEventListener('blur', update, true);
        update();
        return function () {
            rootElement.removeEventListener('focus', update, true);
            rootElement.removeEventListener('blur', update, true);
        };
    };

    (function (MediaStreamTypes) {
        MediaStreamTypes["MP4"] = "MP4";
        MediaStreamTypes["WEBM"] = "WEBM";
        MediaStreamTypes["HLS"] = "HLS";
        MediaStreamTypes["DASH"] = "DASH";
        MediaStreamTypes["OGG"] = "OGG";
        MediaStreamTypes["MOV"] = "MOV";
        MediaStreamTypes["MKV"] = "MKV";
    })(exports.MEDIA_STREAM_TYPES || (exports.MEDIA_STREAM_TYPES = {}));
    var MimeToStreamTypeMap = {
        'application/x-mpegURL': exports.MEDIA_STREAM_TYPES.HLS,
        'application/vnd.apple.mpegURL': exports.MEDIA_STREAM_TYPES.HLS,
        'application/dash+xml': exports.MEDIA_STREAM_TYPES.DASH,
        'video/mp4': exports.MEDIA_STREAM_TYPES.MP4,
        'video/x-mp4': exports.MEDIA_STREAM_TYPES.MP4,
        'x-video/mp4': exports.MEDIA_STREAM_TYPES.MP4,
        'video/webm': exports.MEDIA_STREAM_TYPES.WEBM,
        'video/ogg': exports.MEDIA_STREAM_TYPES.OGG,
        'video/quicktime': exports.MEDIA_STREAM_TYPES.MOV,
        'video/x-matroska': exports.MEDIA_STREAM_TYPES.MKV,
    };

    (function (MediaStreamDeliveryPriority) {
        MediaStreamDeliveryPriority[MediaStreamDeliveryPriority["NATIVE_PROGRESSIVE"] = 0] = "NATIVE_PROGRESSIVE";
        MediaStreamDeliveryPriority[MediaStreamDeliveryPriority["ADAPTIVE_VIA_MSE"] = 1] = "ADAPTIVE_VIA_MSE";
        MediaStreamDeliveryPriority[MediaStreamDeliveryPriority["NATIVE_ADAPTIVE"] = 2] = "NATIVE_ADAPTIVE";
        MediaStreamDeliveryPriority[MediaStreamDeliveryPriority["FORCED"] = 3] = "FORCED";
    })(exports.MEDIA_STREAM_DELIVERY_PRIORITY || (exports.MEDIA_STREAM_DELIVERY_PRIORITY = {}));

    var UI_EVENTS = {
        PLAY_CLICK: 'ui-events/play-click',
        PLAY_OVERLAY_CLICK: 'ui-events/play-overlay-click',
        PAUSE_CLICK: 'ui-events/pause-click',
        PROGRESS_CHANGE: 'ui-events/progress-change',
        PROGRESS_DRAG_STARTED: 'ui-events/progress-drag-started',
        PROGRESS_DRAG_ENDED: 'ui-events/progress-drag-ended',
        PROGRESS_SYNC_BUTTON_MOUSE_ENTER: 'ui-events/progress-sync-button-mouse-enter',
        PROGRESS_SYNC_BUTTON_MOUSE_LEAVE: 'ui-events/progress-sync-button-mouse-leave',
        PROGRESS_USER_PREVIEWING_FRAME: 'ui-events/progress-user-previewing-frame',
        VOLUME_CHANGE: 'ui-events/volume-change',
        MUTE_CLICK: 'ui-events/mute-click',
        UNMUTE_CLICK: 'ui-events/unmute-click',
        ENTER_FULL_SCREEN_CLICK: 'ui-events/enter-full-screen-click',
        EXIT_FULL_SCREEN_CLICK: 'ui-events/enter-full-screen-click',
        // TODO: follow ENTITY_EVENT or ENTITY_EVENT format
        MOUSE_ENTER_ON_PLAYER: 'ui-events/mouse-enter-on-player',
        MOUSE_MOVE_ON_PLAYER: 'ui-events/mouse-move-on-player',
        MOUSE_LEAVE_ON_PLAYER: 'ui-events/mouse-leave-on-player',
        FOCUS_ENTER_ON_PLAYER: 'ui-events/focus-enter-on-player',
        FOCUS_LEAVE_ON_PLAYER: 'ui-events/focus-leave-on-player',
        MAIN_BLOCK_HIDE: 'ui-events/main-block-hide',
        MAIN_BLOCK_SHOW: 'ui-events/main-block-show',
        LOADER_SHOW: 'ui-events/loader-show',
        LOADER_HIDE: 'ui-events/loader-hide',
        LOADING_COVER_SHOW: 'ui-events/loading-cover-show',
        LOADING_COVER_HIDE: 'ui-events/loading-cover-hide',
        TOGGLE_PLAYBACK_WITH_KEYBOARD: 'ui-events/toggle-playback-with-keyboard',
        GO_BACKWARD_WITH_KEYBOARD: 'ui-events/go-backward-with-keyboard',
        GO_FORWARD_WITH_KEYBOARD: 'ui-events/go-forward-with-keyboard',
        INCREASE_VOLUME_WITH_KEYBOARD: 'ui-events/increase-volume-with-keyboard',
        DECREASE_VOLUME_WITH_KEYBOARD: 'ui-events/decrease-volume-with-keyboard',
        MUTE_WITH_KEYBOARD: 'ui-events/mute-with-keyboard',
        UNMUTE_WITH_KEYBOARD: 'ui-events/unmute-with-keyboard',
        HIDE_INTERACTION_INDICATOR: 'ui-events/hide-interaction-indicator',
        PLAY_WITH_SCREEN_CLICK: 'ui-events/play-with-screen-click',
        PAUSE_WITH_SCREEN_CLICK: 'ui-events/pause-with-screen-click',
        ENTER_FULL_SCREEN_WITH_SCREEN_CLICK: 'ui-events/enter-full-screen-with-screen-click',
        EXIT_FULL_SCREEN_WITH_SCREEN_CLICK: 'ui-events/exit-full-screen-with-screen-click',
        CONTROL_DRAG_START: 'ui-events/control-drag-start',
        CONTROL_DRAG_END: 'ui-events/control-drag-end',
        KEYBOARD_KEYDOWN_INTERCEPTED: 'ui-events/keyboard-keydown-intercepted',
        FULL_SCREEN_STATE_CHANGED: 'ui-events/full-screen-state-changed',
        PICTURE_IN_PICTURE_STATUS_CHANGE: 'ui-events/picture-in-picture-status-changed',
        RESIZE: 'ui-events/resize',
    };

    var VIDEO_EVENTS = {
        ERROR: 'video-events/error',
        STATE_CHANGED: 'video-events/state-changed',
        LIVE_STATE_CHANGED: 'video-events/live-state-changed',
        DYNAMIC_CONTENT_ENDED: 'video-events/dynamic-content-ended',
        CHUNK_LOADED: 'video-events/chunk-loaded',
        CURRENT_TIME_UPDATED: 'video-events/current-time-updated',
        DURATION_UPDATED: 'video-events/duration-updated',
        SOUND_STATE_CHANGED: 'video-events/sound-state-changed',
        VOLUME_CHANGED: 'video-events/volume-changed',
        MUTE_CHANGED: 'video-events/mute-changed',
        SEEK_IN_PROGRESS: 'video-events/seek-in-progress',
        UPLOAD_STALLED: 'video-events/upload-stalled',
        UPLOAD_SUSPEND: 'video-events/upload-suspend',
        PLAY_REQUEST: 'video-events/play-request',
        PLAY_ABORTED: 'video-events/play-aborted',
        RESET: 'video-events/reset-playback',
    };

    var Errors = {
        SRC_PARSE: 'error-src-parse',
        MANIFEST_LOAD: 'error-manifest-load',
        MANIFEST_PARSE: 'error-manifest-parse',
        MANIFEST_INCOMPATIBLE: 'error-manifest-incompatible',
        LEVEL_LOAD: 'error-level-load',
        CONTENT_LOAD: 'error-content-load',
        CONTENT_PARSE: 'error-content-parse',
        MEDIA: 'error-media',
        UNKNOWN: 'error-unknown',
    };

    var TEXT_LABELS = {
        LOGO_LABEL: 'logo-label',
        LOGO_TOOLTIP: 'logo-tooltip',
        LIVE_INDICATOR_TEXT: 'live-indicator-text',
        LIVE_SYNC_LABEL: 'live-sync-button-label',
        LIVE_SYNC_TOOLTIP: 'live-sync-button-tooltip',
        ENTER_FULL_SCREEN_LABEL: 'enter-full-screen-label',
        ENTER_FULL_SCREEN_TOOLTIP: 'enter-full-screen-tooltip',
        EXIT_FULL_SCREEN_LABEL: 'exit-full-screen-label',
        EXIT_FULL_SCREEN_TOOLTIP: 'exit-full-screen-tooltip',
        PLAY_CONTROL_LABEL: 'play-control-label',
        PAUSE_CONTROL_LABEL: 'pause-control-label',
        PROGRESS_CONTROL_LABEL: 'progress-control-label',
        PROGRESS_CONTROL_VALUE: 'progress-control-value',
        UNMUTE_CONTROL_LABEL: 'unmute-control-label',
        UNMUTE_CONTROL_TOOLTIP: 'unmute-control-label',
        MUTE_CONTROL_LABEL: 'mute-control-label',
        MUTE_CONTROL_TOOLTIP: 'mute-control-tooltip',
        VOLUME_CONTROL_LABEL: 'volume-control-label',
        VOLUME_CONTROL_VALUE: 'volume-control-value',
        DOWNLOAD_BUTTON_LABEL: 'download-button-label',
        DOWNLOAD_BUTTON_TOOLTIP: 'download-button-tooltip',
    };

    var EngineState;
    (function (EngineState) {
        EngineState["SRC_SET"] = "engine-state/src-set";
        EngineState["LOAD_STARTED"] = "engine-state/load-started";
        EngineState["METADATA_LOADED"] = "engine-state/metadata-loaded";
        EngineState["READY_TO_PLAY"] = "engine-state/ready-to-play";
        EngineState["SEEK_IN_PROGRESS"] = "engine-state/seek-in-progress";
        EngineState["PLAY_REQUESTED"] = "engine-state/play-requested";
        EngineState["WAITING"] = "engine-state/waiting";
        EngineState["PLAYING"] = "engine-state/playing";
        EngineState["PAUSED"] = "engine-state/paused";
        EngineState["ENDED"] = "engine-state/ended";
    })(EngineState || (EngineState = {}));
    var EngineState$1 = EngineState;

    var LiveState;
    (function (LiveState) {
        LiveState["NONE"] = "live-state/none";
        LiveState["INITIAL"] = "live-state/initial";
        LiveState["NOT_SYNC"] = "live-state/not-sync";
        LiveState["SYNC"] = "live-state/sync";
        LiveState["ENDED"] = "live-state/ended";
    })(LiveState || (LiveState = {}));
    var LiveState$1 = LiveState;

    function htmlToElement(html) {
        if (!html) {
            throw new Error('HTML provided to htmlToElement is empty');
        }
        var div = document.createElement('div');
        div.innerHTML = html.trim();
        if (div.childElementCount > 1) {
            throw new Error("HTML provided to htmlToElement doesn't have root element");
        }
        return div.firstChild;
    }

    function anonymous(props
    /*``*/) {
    var out='<div data-playable-hook="player-container" tabindex="0" class="'+(props.styles.container)+'"></div>';return out;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var classnames = createCommonjsModule(function (module) {
    /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
    /* global define */

    (function () {

    	var hasOwn = {}.hasOwnProperty;

    	function classNames () {
    		var classes = [];

    		for (var i = 0; i < arguments.length; i++) {
    			var arg = arguments[i];
    			if (!arg) continue;

    			var argType = typeof arg;

    			if (argType === 'string' || argType === 'number') {
    				classes.push(arg);
    			} else if (Array.isArray(arg) && arg.length) {
    				var inner = classNames.apply(null, arg);
    				if (inner) {
    					classes.push(inner);
    				}
    			} else if (argType === 'object') {
    				for (var key in arg) {
    					if (hasOwn.call(arg, key) && arg[key]) {
    						classes.push(key);
    					}
    				}
    			}
    		}

    		return classes.join(' ');
    	}

    	if ( true && module.exports) {
    		classNames.default = classNames;
    		module.exports = classNames;
    	} else if (false) {} else {
    		window.classNames = classNames;
    	}
    }());
    });

    function extendStyles(sourceStyles, partialStyles) {
        var styles = __assign({}, sourceStyles);
        Object.keys(partialStyles).forEach(function (styleName) {
            styles[styleName] = styles[styleName]
                ? classnames(styles[styleName], partialStyles[styleName])
                : partialStyles[styleName];
        });
        return styles;
    }

    var Stylable = /** @class */ (function () {
        function Stylable(theme) {
            this._themeStyles = {};
            var moduleTheme = this.constructor._moduleTheme;
            if (theme && moduleTheme) {
                theme.registerModuleTheme(this, moduleTheme);
                this._themeStyles = theme.get(this);
            }
        }
        Stylable.setTheme = function (theme) {
            this._moduleTheme = theme;
        };
        Stylable.extendStyleNames = function (styles) {
            this._styles = extendStyles(this._styles, styles);
        };
        Stylable.resetStyles = function () {
            this._styles = {};
        };
        Object.defineProperty(Stylable.prototype, "themeStyles", {
            get: function () {
                return this._themeStyles;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Stylable.prototype, "styleNames", {
            get: function () {
                // NOTE: TS does not work with instance static fields + generic type
                return this.constructor._styles || {};
            },
            enumerable: true,
            configurable: true
        });
        Stylable._styles = {};
        return Stylable;
    }());

    var View = /** @class */ (function (_super) {
        __extends(View, _super);
        function View() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return View;
    }(Stylable));

    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') { return; }

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    var css = ".root-container__controlButton___3nLjS {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0;\n  cursor: pointer;\n  -webkit-transition-duration: .2s;\n          transition-duration: .2s;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  opacity: 1;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background-color: transparent;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .root-container__controlButton___3nLjS:hover {\n    opacity: .7; }\n  .root-container__hidden___10ZXK {\n  visibility: hidden !important;\n  width: 0 !important;\n  min-width: 0 !important;\n  height: 0 !important;\n  min-height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  opacity: 0 !important; }\n  .root-container__container____RXkJ {\n  font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, \\\\30e1\\30a4\\30ea\\30aa, meiryo, \\\\30d2\\30e9\\30ae\\30ce\\89d2\\30b4 pro w3, hiragino kaku gothic pro;\n  position: relative;\n  z-index: 0;\n  display: block;\n  overflow: hidden;\n  height: inherit;\n  outline: none;\n  /**\n * 1. Change the font styles in all browsers.\n * 2. Show the overflow in IE.\n * 3. Remove the margin in Firefox and Safari.\n * 4. Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 5. Correct the inability to style clickable types in iOS and Safari.\n */\n  /**\n * Remove the inner border and padding in Firefox.\n */\n  /**\n * Restore the focus styles unset by the previous rule.\n */ }\n  .root-container__container____RXkJ *,\n  .root-container__container____RXkJ *:before,\n  .root-container__container____RXkJ *:after {\n    -webkit-box-sizing: content-box;\n            box-sizing: content-box;\n    outline: none; }\n  .root-container__container____RXkJ button {\n    font-family: inherit;\n    /* 1 */\n    font-size: 100%;\n    /* 1 */\n    line-height: 1.15;\n    /* 1 */\n    overflow: visible;\n    /* 2 */\n    margin: 0;\n    /* 3 */\n    text-transform: none;\n    /* 4 */\n    -webkit-appearance: button;\n    /* 5 */ }\n  .root-container__container____RXkJ button::-moz-focus-inner {\n    padding: 0;\n    border-style: none; }\n  .root-container__container____RXkJ button:-moz-focusring {\n    outline: 1px dotted ButtonText; }\n  .root-container__fillAllSpace___33wu6,\n.root-container__fullScreen___3oMwD {\n  width: 100% !important;\n  height: 100% !important;\n  min-width: 100% !important;\n  min-height: 100% !important; }\n  [data-playable-focus-source='key'] [data-playable-hook='player-container'] button.focus-within,\n[data-playable-focus-source='key'] [data-playable-hook='player-container'] input.focus-within,\n[data-playable-focus-source='key'] [data-playable-hook='player-container'] img.focus-within,\n[data-playable-focus-source='script']\n[data-playable-hook='player-container'] button.focus-within,\n[data-playable-focus-source='script']\n[data-playable-hook='player-container'] input.focus-within,\n[data-playable-focus-source='script']\n[data-playable-hook='player-container'] img.focus-within {\n  -webkit-box-shadow: 0 0 0 2px rgba(56, 153, 236, 0.8);\n          box-shadow: 0 0 0 2px rgba(56, 153, 236, 0.8); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb3QtY29udGFpbmVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBYztFQUFkLHFCQUFjO0VBQWQsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixxQ0FBNkI7RUFBN0IsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIseUJBQXdCO01BQXhCLHNCQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsMEJBQW9CO01BQXBCLHVCQUFvQjtVQUFwQixvQkFBb0IsRUFBRTtFQUN0QjtJQUNFLFlBQVksRUFBRTtFQUVsQjtFQUNFLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixzQkFBc0IsRUFBRTtFQUUxQjtFQUNFLDBOQUEwTjtFQUMxTixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZDs7Ozs7O0dBTUM7RUFDRDs7R0FFQztFQUNEOztHQUVDLEVBQUU7RUFDSDs7O0lBR0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4QixjQUFjLEVBQUU7RUFDbEI7SUFDRSxxQkFBcUI7SUFDckIsT0FBTztJQUNQLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFVBQVU7SUFDVixPQUFPO0lBQ1AscUJBQXFCO0lBQ3JCLE9BQU87SUFDUCwyQkFBMkI7SUFDM0IsT0FBTyxFQUFFO0VBQ1g7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSwrQkFBK0IsRUFBRTtFQUVyQzs7RUFFRSx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQiw0QkFBNEIsRUFBRTtFQUVoQzs7Ozs7Ozs7O0VBU0Usc0RBQThDO1VBQTlDLDhDQUE4QyxFQUFFIiwiZmlsZSI6InJvb3QtY29udGFpbmVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udHJvbEJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuY29udHJvbEJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogLjc7IH1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB3aWR0aDogMCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50OyB9XG5cbi5jb250YWluZXIge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZVcwMS00NUxpZ2gsIEhlbHZldGljYU5ldWVXMDItNDVMaWdoLCBIZWx2ZXRpY2FOZXVlVzEwLTQ1TGlnaCwgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIFxcXFwzMGUxXFwzMGE0XFwzMGVhXFwzMGFhLCBtZWlyeW8sIFxcXFwzMGQyXFwzMGU5XFwzMGFlXFwzMGNlXFw4OWQyXFwzMGI0IHBybyB3MywgaGlyYWdpbm8ga2FrdSBnb3RoaWMgcHJvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC8qKlxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cbiAqIDMuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbiAqIDQuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxuICogNS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqL1xuICAvKipcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cbiAgLyoqXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXG4gKi8gfVxuICAuY29udGFpbmVyICosXG4gIC5jb250YWluZXIgKjpiZWZvcmUsXG4gIC5jb250YWluZXIgKjphZnRlciB7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgb3V0bGluZTogbm9uZTsgfVxuICAuY29udGFpbmVyIGJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgLyogMSAqL1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAvKiAxICovXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgLyogMSAqL1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIC8qIDIgKi9cbiAgICBtYXJnaW46IDA7XG4gICAgLyogMyAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIC8qIDQgKi9cbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgICAvKiA1ICovIH1cbiAgLmNvbnRhaW5lciBidXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lOyB9XG4gIC5jb250YWluZXIgYnV0dG9uOi1tb3otZm9jdXNyaW5nIHtcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7IH1cblxuLmZpbGxBbGxTcGFjZSxcbi5mdWxsU2NyZWVuIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7IH1cblxuOmdsb2JhbCBbZGF0YS1wbGF5YWJsZS1mb2N1cy1zb3VyY2U9J2tleSddIFtkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXSBidXR0b24uZm9jdXMtd2l0aGluLFxuOmdsb2JhbCBbZGF0YS1wbGF5YWJsZS1mb2N1cy1zb3VyY2U9J2tleSddIFtkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXSBpbnB1dC5mb2N1cy13aXRoaW4sXG46Z2xvYmFsIFtkYXRhLXBsYXlhYmxlLWZvY3VzLXNvdXJjZT0na2V5J10gW2RhdGEtcGxheWFibGUtaG9vaz0ncGxheWVyLWNvbnRhaW5lciddIGltZy5mb2N1cy13aXRoaW4sXG46Z2xvYmFsIFtkYXRhLXBsYXlhYmxlLWZvY3VzLXNvdXJjZT0nc2NyaXB0J11cbltkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXSBidXR0b24uZm9jdXMtd2l0aGluLFxuOmdsb2JhbCBbZGF0YS1wbGF5YWJsZS1mb2N1cy1zb3VyY2U9J3NjcmlwdCddXG5bZGF0YS1wbGF5YWJsZS1ob29rPSdwbGF5ZXItY29udGFpbmVyJ10gaW5wdXQuZm9jdXMtd2l0aGluLFxuOmdsb2JhbCBbZGF0YS1wbGF5YWJsZS1mb2N1cy1zb3VyY2U9J3NjcmlwdCddXG5bZGF0YS1wbGF5YWJsZS1ob29rPSdwbGF5ZXItY29udGFpbmVyJ10gaW1nLmZvY3VzLXdpdGhpbiB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDU2LCAxNTMsIDIzNiwgMC44KTsgfVxuIl19 */";
    var styles = {"controlButton":"root-container__controlButton___3nLjS","hidden":"root-container__hidden___10ZXK","container":"root-container__container____RXkJ","fillAllSpace":"root-container__fillAllSpace___33wu6","fullScreen":"root-container__fullScreen___3oMwD"};
    styleInject(css);

    var RootContainerView = /** @class */ (function (_super) {
        __extends(RootContainerView, _super);
        function RootContainerView(config) {
            var _this = _super.call(this) || this;
            var width = config.width, height = config.height, fillAllSpace = config.fillAllSpace, callbacks = config.callbacks;
            _this._callbacks = callbacks;
            _this._$rootElement = htmlToElement(anonymous({ styles: _this.styleNames }));
            _this.setFillAllSpaceFlag(fillAllSpace);
            _this.setWidth(width);
            _this.setHeight(height);
            _this._bindEvents();
            return _this;
        }
        RootContainerView.prototype._bindEvents = function () {
            this._$rootElement.addEventListener('mouseenter', this._callbacks.onMouseEnter);
            this._$rootElement.addEventListener('mousemove', this._callbacks.onMouseMove);
            this._$rootElement.addEventListener('mouseleave', this._callbacks.onMouseLeave);
        };
        RootContainerView.prototype._unbindEvents = function () {
            this._$rootElement.removeEventListener('mouseenter', this._callbacks.onMouseEnter);
            this._$rootElement.removeEventListener('mousemove', this._callbacks.onMouseMove);
            this._$rootElement.removeEventListener('mouseleave', this._callbacks.onMouseLeave);
        };
        RootContainerView.prototype.setWidth = function (width) {
            if (!width) {
                return;
            }
            var widthStyle = width + "px";
            this._$rootElement.style.width = widthStyle;
            this._$rootElement.style.minWidth = widthStyle;
        };
        RootContainerView.prototype.setHeight = function (height) {
            if (!height) {
                return;
            }
            var heightStyle = height + "px";
            this._$rootElement.style.height = heightStyle;
            this._$rootElement.style.minHeight = heightStyle;
        };
        RootContainerView.prototype.getWidth = function () {
            return this._$rootElement.offsetWidth;
        };
        RootContainerView.prototype.getHeight = function () {
            return this._$rootElement.offsetHeight;
        };
        RootContainerView.prototype.show = function () {
            this._$rootElement.classList.add(this.styleNames.hidden);
        };
        RootContainerView.prototype.hide = function () {
            this._$rootElement.classList.remove(this.styleNames.hidden);
        };
        RootContainerView.prototype.appendComponentElement = function (element) {
            this._$rootElement.appendChild(element);
        };
        RootContainerView.prototype.getElement = function () {
            return this._$rootElement;
        };
        RootContainerView.prototype.setFullScreenState = function (isFullScreen) {
            if (isFullScreen) {
                this._$rootElement.setAttribute('data-playable-in-full-screen', 'true');
                this._$rootElement.classList.add(this.styleNames.fullScreen);
            }
            else {
                this._$rootElement.setAttribute('data-playable-in-full-screen', 'false');
                this._$rootElement.classList.remove(this.styleNames.fullScreen);
            }
        };
        RootContainerView.prototype.setFillAllSpaceFlag = function (isFillAllSpace) {
            if (isFillAllSpace === void 0) { isFillAllSpace = false; }
            if (isFillAllSpace) {
                this._$rootElement.classList.add(this.styleNames.fillAllSpace);
            }
            else {
                this._$rootElement.classList.remove(this.styleNames.fillAllSpace);
            }
        };
        RootContainerView.prototype.destroy = function () {
            this._unbindEvents();
            this._callbacks = null;
            if (this._$rootElement.parentNode) {
                this._$rootElement.parentNode.removeChild(this._$rootElement);
            }
            this._$rootElement = null;
        };
        return RootContainerView;
    }(View));
    RootContainerView.extendStyleNames(styles);

    function reduce(arrayLike, callback, initialValue) {
        return Array.prototype.reduce.call(arrayLike, callback, initialValue);
    }
    function forEachMatch(string, pattern, callback) {
        var match = pattern.exec(string);
        while (match !== null) {
            callback(match);
            match = pattern.exec(string);
        }
    }

    var ALIASES = [
        'matches',
        'webkitMatchesSelector',
        'mozMatchesSelector',
        'msMatchesSelector',
    ];
    var matchesSelectorFn;
    if (typeof HTMLElement !== 'undefined') {
        for (var i = 0; i < ALIASES.length; i++) {
            matchesSelectorFn = Element.prototype[ALIASES[i]];
            if (matchesSelectorFn) {
                break;
            }
        }
    }
    var isElementMatchesSelector = matchesSelectorFn
        ? function (element, selector) {
            return matchesSelectorFn.call(element, selector);
        }
        : function (element, selector) {
            return Array.prototype.indexOf.call(document.querySelectorAll(selector), element) !== -1;
        };

    // NOTE: "inspired" by https://github.com/marcj/css-element-queries/blob/1.0.2/src/ElementQueries.js#L340-L393
    var CSS_SELECTOR_PATTERN = /,?[\s\t]*([^,\n]*?)((?:\[[\s\t]*?(?:[a-z-]+-)?(?:min|max)-width[\s\t]*?[~$\^]?=[\s\t]*?"[^"]*?"[\s\t]*?])+)([^,\n\s\{]*)/gim;
    var QUERY_ATTR_PATTERN = /\[[\s\t]*?(?:([a-z-]+)-)?(min|max)-width[\s\t]*?[~$\^]?=[\s\t]*?"([^"]*?)"[\s\t]*?]/gim;
    function getQueriesFromCssSelector(cssSelector) {
        var results = [];
        if (cssSelector.indexOf('min-width') === -1 &&
            cssSelector.indexOf('max-width') === -1) {
            return [];
        }
        cssSelector = cssSelector.replace(/'/g, '"');
        forEachMatch(cssSelector, CSS_SELECTOR_PATTERN, function (matchedSelectors) {
            var _a = matchedSelectors.slice(1), selectorPart1 = _a[0], attribute = _a[1], selectorPart2 = _a[2];
            var selector = selectorPart1 + selectorPart2;
            forEachMatch(attribute, QUERY_ATTR_PATTERN, function (matchedAttributes) {
                var _a = matchedAttributes.slice(1), _b = _a[0], prefix = _b === void 0 ? '' : _b, mode = _a[1], width = _a[2];
                results.push({
                    selector: selector,
                    prefix: prefix,
                    mode: mode,
                    width: parseInt(width, 10),
                });
            });
        });
        return results;
    }
    function getQueriesFromRules(rules) {
        return reduce(rules, function (results, rule) {
            // https://developer.mozilla.org/en-US/docs/Web/API/CSSRule
            // CSSRule.STYLE_RULE
            if (rule.type === 1) {
                var selector = rule.selectorText || rule.cssText;
                return results.concat(getQueriesFromCssSelector(selector));
            }
            // NOTE: add other `CSSRule` types if required.
            // Example - https://github.com/marcj/css-element-queries/blob/1.0.2/src/ElementQueries.js#L384-L390
            return results;
        }, []);
    }
    function getQueries() {
        return reduce(document.styleSheets, function (results, styleSheet) {
            // NOTE: browser may not able to read rules for cross-domain stylesheets
            try {
                var rules = styleSheet.cssRules || styleSheet.rules;
                if (rules) {
                    return results.concat(getQueriesFromRules(rules));
                }
                if (styleSheet.cssText) {
                    return results.concat(getQueriesFromCssSelector(styleSheet.cssText));
                }
            }
            catch (e) { }
            return results;
        }, []);
    }
    function getQueriesForElement(element, prefix) {
        if (prefix === void 0) { prefix = ''; }
        var matchedSelectors = new Map();
        var queries = [];
        getQueries().forEach(function (query) {
            if (!matchedSelectors.has(query.selector)) {
                matchedSelectors.set(query.selector, isElementMatchesSelector(element, query.selector));
            }
            if (!matchedSelectors.get(query.selector)) {
                return;
            }
            if (query.prefix === prefix &&
                !queries.some(function (_query) { return _query.mode === query.mode && _query.width === query.width; })) {
                queries.push({
                    mode: query.mode,
                    width: query.width,
                });
            }
        });
        return queries.sort(function (a, b) { return a.width - b.width; });
    }

    var DEFAULT_QUERY_PREFIX = 'data-playable';
    var ElementQueries = /** @class */ (function () {
        function ElementQueries(element, _a) {
            var _b = (_a === void 0 ? {} : _a).prefix, prefix = _b === void 0 ? DEFAULT_QUERY_PREFIX : _b;
            this._element = element;
            this._queryPrefix = prefix;
            this._queries = getQueriesForElement(element, prefix);
        }
        ElementQueries.prototype._getQueryAttributeValue = function (mode, elementWidth) {
            return this._queries
                .filter(function (query) {
                return query.mode === mode &&
                    ((mode === 'max' && query.width >= elementWidth) ||
                        (mode === 'min' && query.width <= elementWidth));
            })
                .map(function (query) { return query.width + "px"; })
                .join(' ');
        };
        ElementQueries.prototype._setQueryAttribute = function (mode, elementWidth) {
            var attributeName = this._queryPrefix
                ? this._queryPrefix + "-" + mode + "-width"
                : mode + "-width";
            var attributeValue = this._getQueryAttributeValue(mode, elementWidth);
            if (attributeValue) {
                this._element.setAttribute(attributeName, attributeValue);
            }
            else {
                this._element.removeAttribute(attributeName);
            }
        };
        ElementQueries.prototype.setWidth = function (width) {
            this._setQueryAttribute('min', width);
            this._setQueryAttribute('max', width);
        };
        ElementQueries.prototype.destroy = function () {
            this._element = null;
        };
        return ElementQueries;
    }());

    var DEFAULT_CONFIG = {
        fillAllSpace: false,
    };
    var RootContainer = /** @class */ (function () {
        function RootContainer(_a) {
            var eventEmitter = _a.eventEmitter, config = _a.config;
            this._eventEmitter = eventEmitter;
            this.isHidden = false;
            this._bindCallbacks();
            this._initUI(config);
            this._bindEvents();
        }
        /**
         * Getter for DOM element with player UI
         * (use it only for debug, if you need attach player to your document use `attachToElement` method)
         */
        RootContainer.prototype.getElement = function () {
            return this.view.getElement();
        };
        RootContainer.prototype._bindCallbacks = function () {
            this._onResized = this._onResized.bind(this);
            this._broadcastMouseEnter = this._broadcastMouseEnter.bind(this);
            this._broadcastMouseMove = this._broadcastMouseMove.bind(this);
            this._broadcastMouseLeave = this._broadcastMouseLeave.bind(this);
            this._broadcastFocusEnter = this._broadcastFocusEnter.bind(this);
            this._broadcastFocusLeave = this._broadcastFocusLeave.bind(this);
        };
        RootContainer.prototype._bindEvents = function () {
            this._unbindEvents = this._eventEmitter.bindEvents([
                [
                    UI_EVENTS.FULL_SCREEN_STATE_CHANGED,
                    this.view.setFullScreenState,
                    this.view,
                ],
            ], this);
        };
        RootContainer.prototype._initUI = function (config) {
            this.view = new RootContainerView({
                callbacks: {
                    onMouseEnter: this._broadcastMouseEnter,
                    onMouseLeave: this._broadcastMouseLeave,
                    onMouseMove: this._broadcastMouseMove,
                },
                width: config.width || null,
                height: config.height || null,
                fillAllSpace: config.fillAllSpace || DEFAULT_CONFIG.fillAllSpace,
            });
            this._elementQueries = new ElementQueries(this.getElement());
            this._resizeObserver = new index(this._onResized);
            this._resizeObserver.observe(this.getElement());
        };
        RootContainer.prototype.appendComponentElement = function (element) {
            this.view.appendComponentElement(element);
        };
        RootContainer.prototype._broadcastMouseEnter = function () {
            this._eventEmitter.emit(UI_EVENTS.MOUSE_ENTER_ON_PLAYER);
        };
        RootContainer.prototype._broadcastMouseMove = function () {
            this._eventEmitter.emit(UI_EVENTS.MOUSE_MOVE_ON_PLAYER);
        };
        RootContainer.prototype._broadcastMouseLeave = function () {
            this._eventEmitter.emit(UI_EVENTS.MOUSE_LEAVE_ON_PLAYER);
        };
        RootContainer.prototype._broadcastFocusEnter = function () {
            this._eventEmitter.emit(UI_EVENTS.FOCUS_ENTER_ON_PLAYER);
        };
        RootContainer.prototype._broadcastFocusLeave = function () {
            this._eventEmitter.emit(UI_EVENTS.FOCUS_LEAVE_ON_PLAYER);
        };
        RootContainer.prototype._enableFocusInterceptors = function () {
            if (!this._disengageFocusWithin) {
                this._disengageFocusWithin = focusWithin(this.getElement(), this._broadcastFocusEnter, this._broadcastFocusLeave);
            }
            if (!this._disengageFocusSource) {
                focusSource.engage();
                this._disengageFocusSource = focusSource.disengage;
            }
        };
        RootContainer.prototype._disableFocusInterceptors = function () {
            if (this._disengageFocusSource) {
                this._disengageFocusSource();
                this._disengageFocusSource = null;
            }
            if (this._disengageFocusWithin) {
                this._disengageFocusWithin();
                this._disengageFocusWithin = null;
            }
        };
        RootContainer.prototype._onResized = function () {
            var width = this.view.getWidth();
            var height = this.view.getHeight();
            this._elementQueries.setWidth(width);
            this._eventEmitter.emit(UI_EVENTS.RESIZE, { width: width, height: height });
        };
        /**
         * Method for attaching player node to your container
         *
         * @example
         * document.addEventListener('DOMContentLoaded', function() {
         *   const config = { src: 'http://my-url/video.mp4' }
         *   const player = Playable.create(config);
         *
         *   player.attachToElement(document.getElementById('content'));
         * });
         */
        RootContainer.prototype.attachToElement = function (element) {
            this._enableFocusInterceptors();
            element.appendChild(this.getElement());
        };
        /**
         * Method for setting width of player
         * @param width - Desired width of player in pixels
         * @example
         * player.setWidth(400);
         */
        RootContainer.prototype.setWidth = function (width) {
            this.view.setWidth(width);
        };
        /**
         * Return current width of player in pixels
         * @example
         * player.getWidth(); // 400
         */
        RootContainer.prototype.getWidth = function () {
            return this.view.getWidth();
        };
        /**
         * Method for setting width of player
         * @param height - Desired height of player in pixels
         * @example
         * player.setHeight(225);
         */
        RootContainer.prototype.setHeight = function (height) {
            this.view.setHeight(height);
        };
        /**
         * Return current height of player in pixels
         * @example
         * player.getHeight(); // 225
         */
        RootContainer.prototype.getHeight = function () {
            return this.view.getHeight();
        };
        /**
         * Method for allowing player fill all available space
         * @param flag - `true` for allowing
         * @example
         * player.setFillAllSpace(true);
         */
        RootContainer.prototype.setFillAllSpace = function (flag) {
            this.view.setFillAllSpaceFlag(flag);
        };
        /**
         * Hide whole ui
         * @example
         * player.hide();
         */
        RootContainer.prototype.hide = function () {
            this.isHidden = true;
            this.view.hide();
        };
        /**
         * Show whole ui
         * @example
         * player.show();
         */
        RootContainer.prototype.show = function () {
            this.isHidden = false;
            this.view.show();
        };
        RootContainer.prototype.destroy = function () {
            this._unbindEvents();
            this._disableFocusInterceptors();
            this._resizeObserver.unobserve(this.getElement());
            this._resizeObserver = null;
            this._elementQueries.destroy();
            this._elementQueries = null;
            this.view.destroy();
            this.view = null;
            this._eventEmitter = null;
        };
        RootContainer.moduleName = 'rootContainer';
        RootContainer.dependencies = ['eventEmitter', 'config'];
        __decorate([
            playerAPI()
        ], RootContainer.prototype, "getElement", null);
        __decorate([
            playerAPI()
        ], RootContainer.prototype, "attachToElement", null);
        __decorate([
            playerAPI()
        ], RootContainer.prototype, "setWidth", null);
        __decorate([
            playerAPI()
        ], RootContainer.prototype, "getWidth", null);
        __decorate([
            playerAPI()
        ], RootContainer.prototype, "setHeight", null);
        __decorate([
            playerAPI()
        ], RootContainer.prototype, "getHeight", null);
        __decorate([
            playerAPI()
        ], RootContainer.prototype, "setFillAllSpace", null);
        __decorate([
            playerAPI()
        ], RootContainer.prototype, "hide", null);
        __decorate([
            playerAPI()
        ], RootContainer.prototype, "show", null);
        return RootContainer;
    }());

    var eventemitter3 = createCommonjsModule(function (module) {

    var has = Object.prototype.hasOwnProperty
      , prefix = '~';

    /**
     * Constructor to create a storage for our `EE` objects.
     * An `Events` instance is a plain object whose properties are event names.
     *
     * @constructor
     * @private
     */
    function Events() {}

    //
    // We try to not inherit from `Object.prototype`. In some engines creating an
    // instance in this way is faster than calling `Object.create(null)` directly.
    // If `Object.create(null)` is not supported we prefix the event names with a
    // character to make sure that the built-in object properties are not
    // overridden or used as an attack vector.
    //
    if (Object.create) {
      Events.prototype = Object.create(null);

      //
      // This hack is needed because the `__proto__` property is still inherited in
      // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
      //
      if (!new Events().__proto__) prefix = false;
    }

    /**
     * Representation of a single event listener.
     *
     * @param {Function} fn The listener function.
     * @param {*} context The context to invoke the listener with.
     * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
     * @constructor
     * @private
     */
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }

    /**
     * Add a listener for a given event.
     *
     * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn The listener function.
     * @param {*} context The context to invoke the listener with.
     * @param {Boolean} once Specify if the listener is a one-time listener.
     * @returns {EventEmitter}
     * @private
     */
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== 'function') {
        throw new TypeError('The listener must be a function');
      }

      var listener = new EE(fn, context || emitter, once)
        , evt = prefix ? prefix + event : event;

      if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
      else emitter._events[evt] = [emitter._events[evt], listener];

      return emitter;
    }

    /**
     * Clear event by name.
     *
     * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
     * @param {(String|Symbol)} evt The Event name.
     * @private
     */
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events();
      else delete emitter._events[evt];
    }

    /**
     * Minimal `EventEmitter` interface that is molded against the Node.js
     * `EventEmitter` interface.
     *
     * @constructor
     * @public
     */
    function EventEmitter() {
      this._events = new Events();
      this._eventsCount = 0;
    }

    /**
     * Return an array listing the events for which the emitter has registered
     * listeners.
     *
     * @returns {Array}
     * @public
     */
    EventEmitter.prototype.eventNames = function eventNames() {
      var names = []
        , events
        , name;

      if (this._eventsCount === 0) return names;

      for (name in (events = this._events)) {
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
      }

      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }

      return names;
    };

    /**
     * Return the listeners registered for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @returns {Array} The registered listeners.
     * @public
     */
    EventEmitter.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event
        , handlers = this._events[evt];

      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];

      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }

      return ee;
    };

    /**
     * Return the number of listeners listening to a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @returns {Number} The number of listeners.
     * @public
     */
    EventEmitter.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event
        , listeners = this._events[evt];

      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };

    /**
     * Calls each of the listeners registered for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @returns {Boolean} `true` if the event had listeners, else `false`.
     * @public
     */
    EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;

      if (!this._events[evt]) return false;

      var listeners = this._events[evt]
        , len = arguments.length
        , args
        , i;

      if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

        switch (len) {
          case 1: return listeners.fn.call(listeners.context), true;
          case 2: return listeners.fn.call(listeners.context, a1), true;
          case 3: return listeners.fn.call(listeners.context, a1, a2), true;
          case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }

        for (i = 1, args = new Array(len -1); i < len; i++) {
          args[i - 1] = arguments[i];
        }

        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length
          , j;

        for (i = 0; i < length; i++) {
          if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

          switch (len) {
            case 1: listeners[i].fn.call(listeners[i].context); break;
            case 2: listeners[i].fn.call(listeners[i].context, a1); break;
            case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
            case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
            default:
              if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
                args[j - 1] = arguments[j];
              }

              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }

      return true;
    };

    /**
     * Add a listener for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn The listener function.
     * @param {*} [context=this] The context to invoke the listener with.
     * @returns {EventEmitter} `this`.
     * @public
     */
    EventEmitter.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };

    /**
     * Add a one-time listener for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn The listener function.
     * @param {*} [context=this] The context to invoke the listener with.
     * @returns {EventEmitter} `this`.
     * @public
     */
    EventEmitter.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };

    /**
     * Remove the listeners of a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn Only remove the listeners that match this function.
     * @param {*} context Only remove the listeners that have this context.
     * @param {Boolean} once Only remove one-time listeners.
     * @returns {EventEmitter} `this`.
     * @public
     */
    EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;

      if (!this._events[evt]) return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }

      var listeners = this._events[evt];

      if (listeners.fn) {
        if (
          listeners.fn === fn &&
          (!once || listeners.once) &&
          (!context || listeners.context === context)
        ) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (
            listeners[i].fn !== fn ||
            (once && !listeners[i].once) ||
            (context && listeners[i].context !== context)
          ) {
            events.push(listeners[i]);
          }
        }

        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
      }

      return this;
    };

    /**
     * Remove all listeners, or those of the specified event.
     *
     * @param {(String|Symbol)} [event] The event name.
     * @returns {EventEmitter} `this`.
     * @public
     */
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;

      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }

      return this;
    };

    //
    // Alias methods names because people roll like that.
    //
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;

    //
    // Expose the prefix.
    //
    EventEmitter.prefixed = prefix;

    //
    // Allow `EventEmitter` to be imported as module namespace.
    //
    EventEmitter.EventEmitter = EventEmitter;

    //
    // Expose the module.
    //
    {
      module.exports = EventEmitter;
    }
    });
    var eventemitter3_1 = eventemitter3.EventEmitter;

    var isPromiseAvailable = (function () {
        var globalNS = (function () {
            if (typeof global !== 'undefined') {
                return global;
            }
            if (typeof window !== 'undefined') {
                return window;
            }
            throw new Error('unable to locate global object');
        })();
        //tslint:disable-next-line
        return globalNS['Promise'] ? true : false;
    })();
    var EventEmitterModule = /** @class */ (function (_super) {
        __extends(EventEmitterModule, _super);
        function EventEmitterModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Method for adding listeners of events inside player.
         * You can check all events inside `Playable.UI_EVENTS` and `Playable.VIDEO_EVENTS`
         *
         * @param event - The Event name, such as `Playable.UI_EVENTS.PLAY_CLICK`
         * @param fn - A function callback to execute when the event is triggered.
         * @param context - Value to use as `this` (i.e the reference Object) when executing callback.
         *
         * @example
         * const Playable = require('playable');
         * const player = Playable.create();
         *
         * player.on(Playable.UI_EVENTS.PLAY_CLICK, () => {
         *   // Will be executed after you will click on play button
         * });
         *
         * // To supply a context value for `this` when the callback is invoked,
         * // pass the optional context argument
         * player.on(Playable.VIDEO_EVENTS.UPLOAD_STALLED, this.handleStalledUpload, this);
         */
        EventEmitterModule.prototype.on = function (event, fn, context) {
            return _super.prototype.on.call(this, event, fn, context);
        };
        /**
         * Method for removing listeners of events inside player.
         *
         * @param event - The Event name, such as `Playable.UI_EVENTS.PLAY_CLICK`
         * @param fn - Only remove the listeners that match this function.
         * @param context - Only remove the listeners that have this context.
         * @param once - Only remove one-time listeners.
         *
         * @example
         * const Playable = require('playable');
         * const player = Playable.create();
         *
         * const callback = function() {
         *   // Code to handle some kind of event
         * };
         *
         * // ... Now callback will be called when some one will pause the video ...
         * player.on(Playable.UI_EVENTS.PAUSE, callback);
         *
         * // ... callback will no longer be called.
         * player.off(Playable.UI_EVENTS.PAUSE, callback);
         *
         * // ... remove all handlers for event UI_EVENTS.PAUSE.
         * player.off(Playable.UI_EVENTS.PAUSE);
         */
        EventEmitterModule.prototype.off = function (event, fn, context, once) {
            return _super.prototype.off.call(this, event, fn, context, once);
        };
        /**
         * Method for binding array of listeners with events inside player.
         *
         * @example
         *
         * this._unbindEvents = this._eventEmitter.bindEvents([
         *     [VIDEO_EVENTS.STATE_CHANGED, this._processStateChange],
         *     [VIDEO_EVENTS.LIVE_STATE_CHANGED, this._processLiveStateChange],
         *     [VIDEO_EVENTS.CHUNK_LOADED, this._updateBufferIndicator],
         *     [VIDEO_EVENTS.DURATION_UPDATED, this._updateAllIndicators],
         *   ],
         *   this,
         * );
         *
         * //...
         *
         * this._unbindEvents()
         *
         * @param eventsMap
         * @param defaultFnContext
         * @returns unbindEvents
         */
        EventEmitterModule.prototype.bindEvents = function (eventsMap, defaultFnContext) {
            var _this = this;
            var events = [];
            eventsMap.forEach(function (_a) {
                var eventName = _a[0], fn = _a[1], _b = _a[2], fnContext = _b === void 0 ? defaultFnContext : _b;
                _this.on(eventName, fn, fnContext);
                events.push(function () {
                    _this.off(eventName, fn, fnContext);
                });
            });
            return function unbindEvents() {
                events.forEach(function (unbindEvent) {
                    unbindEvent();
                });
            };
        };
        //@ts-ignore
        //Now emit fire events only at the end of current macrotask, as part as next microtask
        EventEmitterModule.prototype.emit = function (event) {
            var _this = this;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            //Handle IE11
            if (!isPromiseAvailable) {
                if (setImmediate) {
                    setImmediate(function () { return _super.prototype.emit.apply(_this, [event].concat(args)); });
                }
                else {
                    setTimeout(function () { return _super.prototype.emit.apply(_this, [event].concat(args)); });
                }
            }
            else {
                return Promise.resolve().then(function () { return _super.prototype.emit.apply(_this, [event].concat(args)); });
            }
        };
        EventEmitterModule.prototype.destroy = function () {
            this.removeAllListeners();
        };
        EventEmitterModule.moduleName = 'eventEmitter';
        __decorate([
            playerAPI()
        ], EventEmitterModule.prototype, "on", null);
        __decorate([
            playerAPI()
        ], EventEmitterModule.prototype, "off", null);
        return EventEmitterModule;
    }(eventemitter3_1));

    var NATIVE_VIDEO_EVENTS_TO_STATE = [
        'loadstart',
        'loadedmetadata',
        'canplay',
        'play',
        'playing',
        'pause',
        'ended',
        'waiting',
        'seeking',
        'seeked',
    ];
    var StateEngine = /** @class */ (function () {
        function StateEngine(eventEmitter, video) {
            this._eventEmitter = eventEmitter;
            this._video = video;
            this._currentState = null;
            this._isMetadataLoaded = false;
            this._statesTimestamps = {};
            this._bindCallbacks();
            this._bindEvents();
        }
        StateEngine.prototype._bindCallbacks = function () {
            this._processEventFromVideo = this._processEventFromVideo.bind(this);
        };
        StateEngine.prototype._bindEvents = function () {
            var _this = this;
            NATIVE_VIDEO_EVENTS_TO_STATE.forEach(function (event) {
                return _this._video.addEventListener(event, _this._processEventFromVideo);
            });
        };
        StateEngine.prototype._unbindEvents = function () {
            var _this = this;
            NATIVE_VIDEO_EVENTS_TO_STATE.forEach(function (event) {
                return _this._video.removeEventListener(event, _this._processEventFromVideo);
            });
        };
        StateEngine.prototype.clearTimestamps = function () {
            this._statesTimestamps = {};
        };
        StateEngine.prototype._setInitialTimeStamp = function () {
            this._initialTimeStamp = Date.now();
        };
        StateEngine.prototype._setStateTimestamp = function (state) {
            if (!this._statesTimestamps[state]) {
                this._statesTimestamps[state] = Date.now() - this._initialTimeStamp;
                this._setInitialTimeStamp();
            }
        };
        Object.defineProperty(StateEngine.prototype, "stateTimestamps", {
            get: function () {
                return this._statesTimestamps;
            },
            enumerable: true,
            configurable: true
        });
        StateEngine.prototype._processEventFromVideo = function (event) {
            if (event === void 0) { event = {}; }
            var videoEl = this._video;
            switch (event.type) {
                case 'loadstart': {
                    this._setInitialTimeStamp();
                    this.setState(EngineState$1.LOAD_STARTED);
                    break;
                }
                case 'loadedmetadata': {
                    this._setStateTimestamp(EngineState$1.METADATA_LOADED);
                    this.setState(EngineState$1.METADATA_LOADED);
                    this._isMetadataLoaded = true;
                    break;
                }
                case 'canplay': {
                    if (this._currentState === EngineState$1.METADATA_LOADED) {
                        this._setStateTimestamp(EngineState$1.READY_TO_PLAY);
                        this.setState(EngineState$1.READY_TO_PLAY);
                    }
                    break;
                }
                case 'play': {
                    this.setState(EngineState$1.PLAY_REQUESTED);
                    break;
                }
                case 'playing': {
                    // Safari triggers event 'playing' even when play request aborted by browser. So we need to check if video is actualy playing
                    if (isSafari()) {
                        if (!videoEl.paused) {
                            this.setState(EngineState$1.PLAYING);
                        }
                    }
                    else {
                        this.setState(EngineState$1.PLAYING);
                    }
                    break;
                }
                case 'waiting': {
                    this.setState(EngineState$1.WAITING);
                    break;
                }
                case 'pause': {
                    // Safari triggers event 'pause' even when playing was aborted buy autoplay policies, emit pause event even if there wasn't any real playback
                    if (isSafari()) {
                        if (videoEl.played.length) {
                            this.setState(EngineState$1.PAUSED);
                        }
                    }
                    else {
                        this.setState(EngineState$1.PAUSED);
                    }
                    break;
                }
                case 'ended': {
                    this.setState(EngineState$1.ENDED);
                    break;
                }
                case 'seeking': {
                    this.setState(EngineState$1.SEEK_IN_PROGRESS);
                    break;
                }
                case 'seeked': {
                    this.setState(videoEl.paused ? EngineState$1.PAUSED : EngineState$1.PLAYING);
                    break;
                }
                default:
                    break;
            }
        };
        StateEngine.prototype.setState = function (state) {
            if (state === this._currentState) {
                return;
            }
            //This case is happens only with dash.js sometimes when manifest got some problems
            if (this._currentState === EngineState$1.METADATA_LOADED) {
                if (state === EngineState$1.SEEK_IN_PROGRESS ||
                    state === EngineState$1.PAUSED) {
                    return;
                }
            }
            this._eventEmitter.emit(VIDEO_EVENTS.STATE_CHANGED, {
                prevState: this._currentState,
                nextState: state,
            });
            this._eventEmitter.emit(state);
            this._currentState = state;
        };
        Object.defineProperty(StateEngine.prototype, "isMetadataLoaded", {
            get: function () {
                return this._isMetadataLoaded;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StateEngine.prototype, "state", {
            get: function () {
                return this._currentState;
            },
            enumerable: true,
            configurable: true
        });
        StateEngine.prototype.destroy = function () {
            this._unbindEvents();
            this._eventEmitter = null;
            this._video = null;
        };
        return StateEngine;
    }());

    var NATIVE_VIDEO_TO_BROADCAST = [
        'loadstart',
        'progress',
        'error',
        'stalled',
        'suspend',
        'durationchange',
        'timeupdate',
        'volumechange',
        'seeking',
    ];
    var NativeEventsBroadcaster = /** @class */ (function () {
        function NativeEventsBroadcaster(eventEmitter, video) {
            this._eventEmitter = eventEmitter;
            this._video = video;
            this._currentMute = this._video.muted;
            this._currentVolume = this._video.volume;
            this._bindCallbacks();
            this._bindEvents();
        }
        NativeEventsBroadcaster.prototype._bindCallbacks = function () {
            this._processEventFromVideo = this._processEventFromVideo.bind(this);
        };
        NativeEventsBroadcaster.prototype._bindEvents = function () {
            var _this = this;
            NATIVE_VIDEO_TO_BROADCAST.forEach(function (event) {
                return _this._video.addEventListener(event, _this._processEventFromVideo);
            });
        };
        NativeEventsBroadcaster.prototype._unbindEvents = function () {
            var _this = this;
            NATIVE_VIDEO_TO_BROADCAST.forEach(function (event) {
                return _this._video.removeEventListener(event, _this._processEventFromVideo);
            });
        };
        NativeEventsBroadcaster.prototype._processEventFromVideo = function (event) {
            if (event === void 0) { event = {}; }
            var videoEl = this._video;
            switch (event.type) {
                case 'loadstart': {
                    if (this._shouldCheckVolume) {
                        this._checkVolumeChanges();
                    }
                    break;
                }
                case 'progress': {
                    this._eventEmitter.emit(VIDEO_EVENTS.CHUNK_LOADED);
                    break;
                }
                case 'stalled': {
                    this._eventEmitter.emit(VIDEO_EVENTS.UPLOAD_STALLED);
                    break;
                }
                case 'suspend': {
                    this._eventEmitter.emit(VIDEO_EVENTS.UPLOAD_SUSPEND);
                    break;
                }
                case 'seeking': {
                    this._eventEmitter.emit(VIDEO_EVENTS.SEEK_IN_PROGRESS, videoEl.currentTime);
                    break;
                }
                case 'durationchange': {
                    this._eventEmitter.emit(VIDEO_EVENTS.DURATION_UPDATED, videoEl.duration);
                    break;
                }
                case 'timeupdate': {
                    this._eventEmitter.emit(VIDEO_EVENTS.CURRENT_TIME_UPDATED, videoEl.currentTime);
                    break;
                }
                case 'volumechange': {
                    if (this._shouldCheckVolume) {
                        this._shouldCheckVolume = false;
                    }
                    this._checkVolumeChanges();
                    break;
                }
                default:
                    break;
            }
        };
        NativeEventsBroadcaster.prototype._checkVolumeChanges = function () {
            var videoEl = this._video;
            if (this._currentVolume !== videoEl.volume) {
                this._currentVolume = videoEl.volume * 100;
                this._eventEmitter.emit(VIDEO_EVENTS.VOLUME_CHANGED, this._currentVolume);
            }
            if (this._currentMute !== videoEl.muted) {
                this._currentMute = videoEl.muted;
                this._eventEmitter.emit(VIDEO_EVENTS.MUTE_CHANGED, this._currentMute);
            }
            this._eventEmitter.emit(VIDEO_EVENTS.SOUND_STATE_CHANGED, {
                volume: videoEl.volume,
                muted: videoEl.muted,
            });
        };
        //Workaround for problem with HTML5Video not firing volumechange if source changed right after volume/muted changed
        NativeEventsBroadcaster.prototype.checkVolumeChangeAfterLoadStart = function () {
            this._shouldCheckVolume = true;
        };
        NativeEventsBroadcaster.prototype.destroy = function () {
            this._unbindEvents();
            this._video = null;
            this._eventEmitter = null;
        };
        return NativeEventsBroadcaster;
    }());

    function resolveAdapters(mediaStreams, availableAdapters) {
        var playableAdapters = [];
        var groupedStreams = groupStreamsByMediaType(mediaStreams);
        var groupedStreamKeys = Object.keys(groupedStreams);
        availableAdapters.forEach(function (adapter) {
            for (var i = 0; i < groupedStreamKeys.length; i += 1) {
                var mediaType = groupedStreamKeys[i];
                if (adapter.canPlay(mediaType)) {
                    adapter.setMediaStreams(groupedStreams[mediaType]);
                    playableAdapters.push(adapter);
                    break;
                }
            }
        });
        playableAdapters.sort(function (firstAdapter, secondAdapter) {
            return secondAdapter.mediaStreamDeliveryPriority -
                firstAdapter.mediaStreamDeliveryPriority;
        });
        return playableAdapters;
    }
    function groupStreamsByMediaType(mediaStreams) {
        var typeMap = {};
        mediaStreams.forEach(function (mediaStream) {
            var type = mediaStream.type || MimeToStreamTypeMap[mediaStream.mimeType];
            if (!type) {
                return;
            }
            if (!Array.isArray(typeMap[type])) {
                typeMap[type] = [];
            }
            typeMap[type].push({
                url: mediaStream.url,
                type: type,
            });
        });
        return typeMap;
    }

    var extensionsMap = Object.create(null);
    extensionsMap.mp4 = exports.MEDIA_STREAM_TYPES.MP4;
    extensionsMap.webm = exports.MEDIA_STREAM_TYPES.WEBM;
    extensionsMap.m3u8 = exports.MEDIA_STREAM_TYPES.HLS;
    extensionsMap.mpd = exports.MEDIA_STREAM_TYPES.DASH;
    extensionsMap.ogg = exports.MEDIA_STREAM_TYPES.OGG;
    extensionsMap.mkv = exports.MEDIA_STREAM_TYPES.MKV;
    extensionsMap.mov = exports.MEDIA_STREAM_TYPES.MOV;
    function getStreamType(url) {
        var anchorElement = document.createElement('a');
        anchorElement.href = url;
        var streamType = extensionsMap[getExtFromPath(anchorElement.pathname)];
        return streamType || false;
    }
    function getExtFromPath(path) {
        return path
            .split('.')
            .pop()
            .toLowerCase();
    }

    var AdaptersStrategy = /** @class */ (function () {
        function AdaptersStrategy(eventEmitter, video, playbackAdapters) {
            if (playbackAdapters === void 0) { playbackAdapters = []; }
            var _this = this;
            this._video = video;
            this._eventEmitter = eventEmitter;
            this._playableAdapters = [];
            this._availableAdapters = [];
            this._attachedAdapter = null;
            playbackAdapters.forEach(function (adapter) {
                return adapter.isSupported() &&
                    _this._availableAdapters.push(new adapter(eventEmitter));
            });
        }
        AdaptersStrategy.prototype._autoDetectSourceTypes = function (mediaSources) {
            var _this = this;
            return mediaSources.map(function (mediaSource) {
                if (typeof mediaSource === 'string') {
                    var type = getStreamType(mediaSource);
                    if (!type) {
                        _this._eventEmitter.emit(VIDEO_EVENTS.ERROR, {
                            errorType: Errors.SRC_PARSE,
                            streamSrc: mediaSource,
                        });
                    }
                    return { url: mediaSource, type: type };
                }
                return mediaSource;
            });
        };
        AdaptersStrategy.prototype._resolvePlayableAdapters = function (src) {
            if (!src) {
                this._playableAdapters = [];
                return;
            }
            var mediaSources = [].concat(src);
            var mediaStreams = this._autoDetectSourceTypes(mediaSources);
            this._playableAdapters = resolveAdapters(mediaStreams, this._availableAdapters);
        };
        AdaptersStrategy.prototype._connectAdapterToVideo = function () {
            if (this._playableAdapters.length > 0) {
                // Use the first PlayableStream for now
                // Later, we can use the others as fallback
                this._attachedAdapter = this._playableAdapters[0];
                this._attachedAdapter.attach(this._video);
            }
        };
        AdaptersStrategy.prototype._detachCurrentAdapter = function () {
            if (this._attachedAdapter) {
                this._attachedAdapter.detach();
                this._attachedAdapter = null;
            }
        };
        Object.defineProperty(AdaptersStrategy.prototype, "attachedAdapter", {
            get: function () {
                return this._attachedAdapter;
            },
            enumerable: true,
            configurable: true
        });
        AdaptersStrategy.prototype.connectAdapter = function (src) {
            this._detachCurrentAdapter();
            this._resolvePlayableAdapters(src);
            this._connectAdapterToVideo();
        };
        AdaptersStrategy.prototype.destroy = function () {
            this._detachCurrentAdapter();
            this._attachedAdapter = null;
            this._availableAdapters = null;
            this._playableAdapters = null;
            this._video = null;
        };
        return AdaptersStrategy;
    }());

    //TODO: Find source of problem with native HLS on Safari, when playing state triggered but actual playing is delayed
    var Engine = /** @class */ (function () {
        function Engine(_a) {
            var eventEmitter = _a.eventEmitter, config = _a.config, _b = _a.availablePlaybackAdapters, availablePlaybackAdapters = _b === void 0 ? [] : _b;
            this._eventEmitter = eventEmitter;
            this._currentSrc = null;
            this._createVideoTag(config.videoElement);
            this._stateEngine = new StateEngine(eventEmitter, this._video);
            this._nativeEventsBroadcaster = new NativeEventsBroadcaster(eventEmitter, this._video);
            this._adapterStrategy = new AdaptersStrategy(this._eventEmitter, this._video, availablePlaybackAdapters);
            this._applyConfig(config);
        }
        Engine.prototype._createVideoTag = function (videoElement) {
            if (videoElement && videoElement.tagName === 'VIDEO') {
                this._video = videoElement;
            }
            else {
                this._video = document.createElement('video');
            }
        };
        Engine.prototype._applyConfig = function (config) {
            if (config === void 0) { config = {}; }
            var preload = config.preload, autoplay = config.autoplay, loop = config.loop, muted = config.muted, volume = config.volume, playsinline = config.playsinline, crossOrigin = config.crossOrigin, src = config.src;
            this.setPreload(preload);
            this.setAutoplay(autoplay);
            this.setLoop(loop);
            this.setMute(muted);
            this.setVolume(volume);
            this.setPlaysinline(playsinline);
            this.setCrossOrigin(crossOrigin);
            this.setSrc(src);
        };
        Engine.prototype.getElement = function () {
            return this._video;
        };
        Engine.prototype._getViewDimensions = function () {
            return {
                width: this._video.offsetWidth,
                height: this._video.offsetHeight,
            };
        };
        Object.defineProperty(Engine.prototype, "isDynamicContent", {
            get: function () {
                if (!this.attachedAdapter) {
                    return false;
                }
                return this.attachedAdapter.isDynamicContent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Engine.prototype, "isDynamicContentEnded", {
            get: function () {
                if (!this.attachedAdapter) {
                    return false;
                }
                return this.attachedAdapter.isDynamicContentEnded;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Engine.prototype, "isSeekAvailable", {
            get: function () {
                if (!this.attachedAdapter) {
                    return false;
                }
                return this.attachedAdapter.isSeekAvailable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Engine.prototype, "isMetadataLoaded", {
            get: function () {
                return this._stateEngine.isMetadataLoaded;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Engine.prototype, "isPreloadAvailable", {
            get: function () {
                if (isIPad() || isIPhone() || isIPod() || isAndroid()) {
                    return false;
                }
                return this.getPreload() !== 'none';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Engine.prototype, "isAutoPlayAvailable", {
            get: function () {
                if (isIPad() || isIPhone() || isIPod() || isAndroid()) {
                    return false;
                }
                return this.getAutoplay();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Engine.prototype, "isSyncWithLive", {
            get: function () {
                if (!this.attachedAdapter) {
                    return false;
                }
                return this.attachedAdapter.isSyncWithLive;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Engine.prototype, "attachedAdapter", {
            get: function () {
                return this._adapterStrategy.attachedAdapter;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Method for setting source of video to player.
         * @param src Array with multiple sources
         * @example
         * player.setSrc([
         *   'https://my-url/video.mp4',
         *   'https://my-url/video.webm',
         *   'https://my-url/video.m3u8'
         * ]);
         * @note
         * Read more about [video source](/video-source)
         */
        Engine.prototype.setSrc = function (src) {
            if (src === this._currentSrc) {
                return;
            }
            this._stateEngine.clearTimestamps();
            this._currentSrc = src;
            this._adapterStrategy.connectAdapter(this._currentSrc);
            this._stateEngine.setState(EngineState$1.SRC_SET);
        };
        /**
         * Return current source of video
         * @example
         * player.getSrc(); // ['https://my-url/video.mp4']
         */
        Engine.prototype.getSrc = function () {
            return this._currentSrc;
        };
        Engine.prototype.reset = function () {
            this.pause();
            this.seekTo(0);
            this._eventEmitter.emit(VIDEO_EVENTS.RESET);
        };
        /**
         * Method for starting playback of video
         * @example
         * player.play();
         */
        Engine.prototype.play = function () {
            var _this = this;
            //Workaround for triggering functionality that requires user event pipe
            this._eventEmitter.emit(VIDEO_EVENTS.PLAY_REQUEST);
            this._pauseRequested = false;
            if (!this._playPromise) {
                this._playPromise = this._video.play();
                if (this._playPromise !== undefined) {
                    this._playPromise
                        .then(function () {
                        _this._playPromise = null;
                        if (_this._pauseRequested) {
                            _this.pause();
                        }
                    })
                        .catch(function (event) {
                        _this._eventEmitter.emit(VIDEO_EVENTS.PLAY_ABORTED, event);
                        _this._playPromise = null;
                    });
                }
            }
        };
        /**
         * Method for pausing playback of video
         * @example
         * player.pause();
         */
        Engine.prototype.pause = function () {
            if (this._playPromise) {
                this._pauseRequested = true;
            }
            else {
                this._video.pause();
                this._pauseRequested = false;
            }
        };
        /**
         * Method for toggling(play\pause) playback of video
         * @example
         * player.togglePlayback();
         */
        Engine.prototype.togglePlayback = function () {
            if (this.isPaused) {
                this.play();
            }
            else {
                this.pause();
            }
        };
        /**
         * Method for reseting playback of video
         * @example
         * player.play();
         * console.log(player.isPaused); // false
         * ...
         * player.resetPlayback();
         * console.log(player.isPaused); // true;
         * console.log(player.getCurrentTime()); //0;
         */
        Engine.prototype.resetPlayback = function () {
            this.pause();
            this.seekTo(0);
            this._eventEmitter.emit(VIDEO_EVENTS.RESET);
        };
        Object.defineProperty(Engine.prototype, "isPaused", {
            /**
             * High level state of video playback. Returns true if playback is paused.
             * For more advance state use `getPlaybackState`
             * @example
             * player.play();
             * console.log(player.isPaused);
             */
            get: function () {
                return this._video.paused;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Engine.prototype, "isEnded", {
            /**
             * High level state of video playback. Returns true if playback is ended. Also note, that `isPaused` will return `true` if playback is ended also.
             * For more advance state use `getPlaybackState`
             * @example
             * player.play();
             * console.log(player.isEnded);
             */
            get: function () {
                return this._video.ended;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Method for synchronize current playback with live point. Available only if you playing live source.
         * @example
         * player.syncWithLive();
         */
        Engine.prototype.syncWithLive = function () {
            if (this.attachedAdapter &&
                this.attachedAdapter.isDynamicContent &&
                !this.attachedAdapter.isDynamicContentEnded &&
                !this.isSyncWithLive) {
                this.seekTo(this.attachedAdapter.syncWithLiveTime);
                this.play();
            }
        };
        /**
         * Method for going forward in playback by your value
         * @param sec - Value in seconds
         * @example
         * player.seekForward(5);
         */
        Engine.prototype.seekForward = function (sec) {
            var duration = this.getDuration();
            if (duration) {
                var current = this.getCurrentTime();
                this.seekTo(Math.min(current + sec, duration));
            }
        };
        /**
         * Method for going backward in playback by your value
         * @param sec - Value in seconds
         * @example
         * player.seekBackward(5);
         */
        Engine.prototype.seekBackward = function (sec) {
            var duration = this.getDuration();
            if (duration) {
                var current = this.getCurrentTime();
                this.seekTo(Math.max(current - sec, 0));
            }
        };
        /**
         * Set volume
         * @param volume - Volume value `0..100`
         * @example
         * player.setVolume(50);
         */
        Engine.prototype.setVolume = function (volume) {
            var parsedVolume = Number(volume);
            this._video.volume = isNaN(parsedVolume)
                ? 1
                : Math.max(0, Math.min(Number(volume) / 100, 1));
            //Workaround for problem with HTML5Video not firing volumechange if source changed right after volume/muted changed
            this._nativeEventsBroadcaster.checkVolumeChangeAfterLoadStart();
        };
        /**
         * Get volume
         * @example
         * player.getVolume(); // 50
         */
        Engine.prototype.getVolume = function () {
            return this._video.volume * 100;
        };
        /**
         * Method for increasing current volume by value
         * @param value - Value from 0 to 100
         * @example
         * player.increaseVolume(30);
         */
        Engine.prototype.increaseVolume = function (value) {
            this.setVolume(this.getVolume() + value);
        };
        /**
         * Method for decreasing current volume by value
         * @param value - Value from 0 to 100
         * @example
         * player.decreaseVolume(30);
         */
        Engine.prototype.decreaseVolume = function (value) {
            this.setVolume(this.getVolume() - value);
        };
        Engine.prototype.setMute = function (isMuted) {
            this._video.muted = Boolean(isMuted);
            //Workaround for problem with HTML5Video not firing volumechange if source changed right after volume/muted changed
            this._nativeEventsBroadcaster.checkVolumeChangeAfterLoadStart();
        };
        /**
         * Mute the video
         * @example
         * player.mute();
         */
        Engine.prototype.mute = function () {
            this.setMute(true);
        };
        /**
         * Unmute the video
         * @example
         * player.unmute(true);
         */
        Engine.prototype.unmute = function () {
            this.setMute(false);
        };
        Object.defineProperty(Engine.prototype, "isMuted", {
            /**
             * Get mute flag
             * @example
             * player.mute();
             * player.isMuted; // true
             * player.unmute();
             * player.isMuted: // false
             */
            get: function () {
                return this._video.muted;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Set autoplay flag
         * @example
         * player.setAutoplay();
         */
        Engine.prototype.setAutoplay = function (isAutoplay) {
            this._video.autoplay = Boolean(isAutoplay);
        };
        /**
         * Get autoplay flag
         * @example
         * player.getAutoplay(); // true
         */
        Engine.prototype.getAutoplay = function () {
            return this._video.autoplay;
        };
        /**
         * Set loop flag
         * @param isLoop - If `true` video will be played again after it will finish
         * @example
         * player.setLoop(true);
         */
        Engine.prototype.setLoop = function (isLoop) {
            this._video.loop = Boolean(isLoop);
        };
        /**
         * Get loop flag
         * @example
         * player.getLoop(); // true
         */
        Engine.prototype.getLoop = function () {
            return this._video.loop;
        };
        /**
         * Method for setting playback rate
         */
        Engine.prototype.setPlaybackRate = function (rate) {
            this._video.playbackRate = rate;
        };
        /**
         * Return current playback rate
         */
        Engine.prototype.getPlaybackRate = function () {
            return this._video.playbackRate;
        };
        /**
         * Set preload type
         * @example
         * player.setPreload('none');
         */
        Engine.prototype.setPreload = function (preload) {
            this._video.preload = preload || 'auto';
        };
        /**
         * Return preload type
         * @example
         * player.getPreload(); // none
         */
        Engine.prototype.getPreload = function () {
            return this._video.preload;
        };
        /**
         * Return current time of video playback
         * @example
         * player.getCurrentTime(); //  60.139683
         */
        Engine.prototype.getCurrentTime = function () {
            return this._video.currentTime;
        };
        /**
         * Method for seeking to time in video
         * @param time - Time in seconds
         * @example
         * player.seekTo(34);
         */
        Engine.prototype.seekTo = function (time) {
            this._video.currentTime = time;
        };
        /**
         * Return duration of video
         * @example
         * player.getDuration(); // 180.149745
         */
        Engine.prototype.getDuration = function () {
            return this._video.duration || 0;
        };
        /**
         * Return real width of video from metadata
         * @example
         * player.getVideoWidth(); // 400
         */
        Engine.prototype.getVideoWidth = function () {
            return this._video.videoWidth;
        };
        /**
         * Return real height of video from metadata
         * @example
         * player.getVideoHeight(); // 225
         */
        Engine.prototype.getVideoHeight = function () {
            return this._video.videoHeight;
        };
        Engine.prototype.getBuffered = function () {
            return this._video.buffered;
        };
        /**
         * Set playsinline flag
         * @param isPlaysinline - If `false` - video will be played in full screen, `true` - inline
         * @example
         * player.setPlaysinline(true);
         */
        Engine.prototype.setPlaysinline = function (isPlaysinline) {
            if (isPlaysinline) {
                this._video.setAttribute('playsinline', 'true');
            }
            else {
                this._video.removeAttribute('playsinline');
            }
        };
        /**
         * Get playInline flag
         * @example
         * player.getPlayInline(); // true
         */
        Engine.prototype.getPlaysinline = function () {
            return this._video.getAttribute('playsinline') === 'true';
        };
        /**
         * Set crossorigin attribute for video
         * @example
         * player.setCrossOrigin('anonymous');
         */
        Engine.prototype.setCrossOrigin = function (crossOrigin) {
            if (crossOrigin) {
                this._video.setAttribute('crossorigin', crossOrigin);
            }
            else {
                this._video.removeAttribute('crossorigin');
            }
        };
        /**
         * Get crossorigin attribute value for video
         * @example
         * player.getCrossOrigin(); // 'anonymous'
         */
        Engine.prototype.getCrossOrigin = function () {
            return this._video.getAttribute('crossorigin');
        };
        /**
         * Return current state of playback
         */
        Engine.prototype.getCurrentState = function () {
            return this._stateEngine.state;
        };
        /**
         * Return object with internal debug info
         *
         * @example
         * player.getDebugInfo();
         *
         * @note
         * The above command returns JSON structured like this:
         *
         * @example
         * {
         *   "type": "HLS",
         *   "viewDimensions": {
         *     "width": 700,
         *     "height": 394
         *   }
         *   "url": "https://example.com/video.m3u8",
         *   "currentTime": 22.092514,
         *   "duration": 60.139683,
         *   "loadingStateTimestamps": {
         *     "metadata-loaded": 76,
         *     "ready-to-play": 67
         *   },
         *   "bitrates": [
         *     // Available bitrates
         *     "100000",
         *     "200000",
         *     ...
         *   ],
         *   // One of available bitrates, that used right now
         *   "currentBitrate": "100000",
         *   // Raw estimation of bandwidth, that could be used without playback stall
         *   "bwEstimate": "120000"
         *   "overallBufferLength": 60.139683,
         *   "nearestBufferSegInfo": {
         *     "start": 0,
         *     "end": 60.139683
         *   }
         * }
         */
        Engine.prototype.getDebugInfo = function () {
            var _a = this._video, duration = _a.duration, currentTime = _a.currentTime;
            var data;
            if (this._adapterStrategy.attachedAdapter) {
                data = this._adapterStrategy.attachedAdapter.debugInfo;
            }
            return __assign({}, data, { viewDimensions: this._getViewDimensions(), currentTime: currentTime,
                duration: duration, loadingStateTimestamps: this._stateEngine.stateTimestamps });
        };
        Engine.prototype.destroy = function () {
            this._stateEngine.destroy();
            this._nativeEventsBroadcaster.destroy();
            this._adapterStrategy.destroy();
            this._video.parentNode && this._video.parentNode.removeChild(this._video);
            this._stateEngine = null;
            this._nativeEventsBroadcaster = null;
            this._adapterStrategy = null;
            this._eventEmitter = null;
            this._video = null;
        };
        Engine.moduleName = 'engine';
        Engine.dependencies = ['eventEmitter', 'config', 'availablePlaybackAdapters'];
        __decorate([
            playerAPI()
        ], Engine.prototype, "setSrc", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "getSrc", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "reset", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "play", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "pause", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "togglePlayback", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "resetPlayback", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "isPaused", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "isEnded", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "syncWithLive", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "seekForward", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "seekBackward", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "setVolume", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "getVolume", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "increaseVolume", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "decreaseVolume", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "mute", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "unmute", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "isMuted", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "setAutoplay", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "getAutoplay", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "setLoop", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "getLoop", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "setPlaybackRate", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "getPlaybackRate", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "setPreload", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "getPreload", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "getCurrentTime", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "seekTo", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "getDuration", null);
        __decorate([
            playerAPI('getVideoRealWidth')
        ], Engine.prototype, "getVideoWidth", null);
        __decorate([
            playerAPI('getVideoRealHeight')
        ], Engine.prototype, "getVideoHeight", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "setPlaysinline", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "getPlaysinline", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "setCrossOrigin", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "getCrossOrigin", null);
        __decorate([
            playerAPI('getPlaybackState')
        ], Engine.prototype, "getCurrentState", null);
        __decorate([
            playerAPI()
        ], Engine.prototype, "getDebugInfo", null);
        return Engine;
    }());

    var SHORTHAND_HEX_COLOR_PATTERN = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    var HEX_COLOR_PATTERN = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
    function hexToRgb(hex) {
        hex = hex.replace(SHORTHAND_HEX_COLOR_PATTERN, function (_, r, g, b) { return r + r + g + g + b + b; });
        var result = hex.match(HEX_COLOR_PATTERN);
        return result
            ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16),
            }
            : null;
    }

    function transperentizeColor(color, alpha) {
        if (alpha === void 0) { alpha = 1; }
        var _a = hexToRgb(color), r = _a.r, g = _a.g, b = _a.b;
        return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
    }

    function camelToKebab(string) {
        return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }

    var generatedIds = new Map();
    function getUniquePostfix(className) {
        if (generatedIds.has(className)) {
            var newID = generatedIds.get(className) + 1;
            generatedIds.set(className, newID);
            return "" + newID;
        }
        generatedIds.set(className, 0);
        return '';
    }
    function getUniqueId(classImportName) {
        var kebabName = camelToKebab(classImportName);
        return "" + kebabName + getUniquePostfix(kebabName);
    }

    function getUniqueClassName(classImportName) {
        return "wix-playable--" + getUniqueId(classImportName);
    }
    function generateClassNames(rules) {
        return Object.keys(rules).reduce(function (acc, classImportName) {
            var _a;
            return (__assign({}, acc, (_a = {}, _a[classImportName] = getUniqueClassName(classImportName), _a)));
        }, {});
    }

    var StyleSheet = /** @class */ (function () {
        function StyleSheet() {
            this._rulesByModule = new Map();
            this._classNamesByModule = new Map();
            this._data = {};
        }
        StyleSheet.prototype.attach = function () {
            var _this = this;
            this._styleNode = this._styleNode || document.createElement('style');
            var discoveredStyles = [];
            this._rulesByModule.forEach(function (_, module) {
                discoveredStyles.push(_this._getModuleCSS(module));
            });
            this._styleNode.innerHTML = discoveredStyles.join(' ');
            document.getElementsByTagName('head')[0].appendChild(this._styleNode);
        };
        StyleSheet.prototype.update = function (data) {
            this._data = __assign({}, this._data, data);
            if (this._styleNode) {
                this.attach();
            }
        };
        StyleSheet.prototype.registerModuleTheme = function (module, rules) {
            //todo maybe we would like to update overrides for module? Or at least show warning instead of Error
            if (this._rulesByModule.get(module)) {
                throw new Error('can`t register multiple themes for one module');
            }
            this._rulesByModule.set(module, rules);
            this._classNamesByModule.set(module, generateClassNames(rules));
        };
        StyleSheet.prototype.getModuleClassNames = function (module) {
            return this._classNamesByModule.get(module);
        };
        StyleSheet.prototype._getModuleCSS = function (module) {
            var _this = this;
            var moduleRules = this._rulesByModule.get(module);
            var moduleClassNames = this._classNamesByModule.get(module);
            if (!moduleRules || !moduleClassNames) {
                return '';
            }
            return Object.keys(moduleRules)
                .map(function (classImportName) {
                return _this._getRuleCSS(moduleRules[classImportName], moduleClassNames[classImportName]);
            })
                .join(' ');
        };
        StyleSheet.prototype._getRuleCSS = function (rule, ruleClassName) {
            var _this = this;
            if (!rule || !ruleClassName) {
                return '';
            }
            var complexRuleNames = Object.keys(rule)
                .filter(function (ruleName) { return typeof rule[ruleName] === 'object'; })
                .map(function (ruleName) {
                return ruleName.indexOf('&') !== -1 ? ruleName : "& " + ruleName;
            });
            var complexRules = complexRuleNames
                .map(function (ruleName) {
                var selector = ruleName.replace(/&/g, "." + ruleClassName);
                //don't want to allow deep nesting now, maybe later
                return selector + " {" + _this._getRuleStyles(rule[ruleName]) + "}";
            })
                .join(' ');
            return "." + ruleClassName + " {" + this._getRuleStyles(rule) + "} " + complexRules;
        };
        StyleSheet.prototype._getRuleStyles = function (rule) {
            var _this = this;
            var simpleRuleNames = Object.keys(rule).filter(function (ruleName) { return typeof rule[ruleName] !== 'object'; });
            return simpleRuleNames
                .map(function (ruleName) {
                return camelToKebab(ruleName) + ": " + (typeof rule[ruleName] === 'function'
                    ? rule[ruleName](_this._data)
                    : rule[ruleName]);
            })
                .join('; ');
        };
        return StyleSheet;
    }());

    var DEFAULT_THEME_CONFIG = {
        color: '#FFF',
        liveColor: '#ea492e',
        progressColor: '#FFF',
    };
    var ThemeService = /** @class */ (function () {
        function ThemeService(_a) {
            var themeConfig = _a.themeConfig;
            var _this = this;
            this._styleSheet = new StyleSheet();
            this._styleSheet.update(__assign({}, DEFAULT_THEME_CONFIG, themeConfig));
            // setTimeout here is for calling `attach` after all modules resolved.
            window.setTimeout(function () {
                _this._styleSheet && _this._styleSheet.attach();
            }, 0);
        }
        /**
         * Method for setting theme for player instance
         *
         * @example
         * player.updateTheme({
         *   progressColor: "#AEAD22"
         * })
         * @note
         *
         * You can check info about theming [here](/themes)
         *
         * @param themeConfig - Theme config
         *
         */
        ThemeService.prototype.updateTheme = function (themeConfig) {
            this._styleSheet.update(themeConfig);
        };
        ThemeService.prototype.registerModuleTheme = function (module, rules) {
            this._styleSheet.registerModuleTheme(module, rules);
        };
        ThemeService.prototype.get = function (module) {
            return this._styleSheet.getModuleClassNames(module);
        };
        ThemeService.prototype.destroy = function () {
            this._styleSheet = null;
        };
        ThemeService.moduleName = 'theme';
        ThemeService.dependencies = ['themeConfig'];
        __decorate([
            playerAPI()
        ], ThemeService.prototype, "updateTheme", null);
        return ThemeService;
    }());

    var _a;
    var map = (_a = {}, _a[TEXT_LABELS.LOGO_LABEL] = 'Watch on site', _a[TEXT_LABELS.LOGO_TOOLTIP] = 'Watch On Site', _a[TEXT_LABELS.LIVE_INDICATOR_TEXT] = function (_a) {
            var isEnded = _a.isEnded;
            return !isEnded ? 'Live' : 'Live Ended';
        }, _a[TEXT_LABELS.LIVE_SYNC_LABEL] = 'Sync to live', _a[TEXT_LABELS.LIVE_SYNC_TOOLTIP] = 'Sync to Live', _a[TEXT_LABELS.PAUSE_CONTROL_LABEL] = 'Pause', _a[TEXT_LABELS.PLAY_CONTROL_LABEL] = 'Play', _a[TEXT_LABELS.PROGRESS_CONTROL_LABEL] = 'Progress control', _a[TEXT_LABELS.PROGRESS_CONTROL_VALUE] = function (_a) {
            var percent = _a.percent;
            return "Already played " + percent + "%";
        }, _a[TEXT_LABELS.MUTE_CONTROL_LABEL] = 'Mute', _a[TEXT_LABELS.MUTE_CONTROL_TOOLTIP] = 'Mute', _a[TEXT_LABELS.UNMUTE_CONTROL_LABEL] = 'Unmute', _a[TEXT_LABELS.UNMUTE_CONTROL_TOOLTIP] = 'Unmute', _a[TEXT_LABELS.VOLUME_CONTROL_LABEL] = 'Volume control', _a[TEXT_LABELS.VOLUME_CONTROL_VALUE] = function (_a) {
            var volume = _a.volume;
            return "Volume is " + volume + "%";
        }, _a[TEXT_LABELS.ENTER_FULL_SCREEN_LABEL] = 'Enter full screen', _a[TEXT_LABELS.ENTER_FULL_SCREEN_TOOLTIP] = 'Enter Full Screen', _a[TEXT_LABELS.EXIT_FULL_SCREEN_LABEL] = 'Exit full screen', _a[TEXT_LABELS.EXIT_FULL_SCREEN_TOOLTIP] = 'Exit Full Screen', _a[TEXT_LABELS.DOWNLOAD_BUTTON_LABEL] = 'Download video', _a[TEXT_LABELS.DOWNLOAD_BUTTON_TOOLTIP] = 'Download Video', _a);

    var TextMap = /** @class */ (function () {
        function TextMap(_a) {
            var config = _a.config;
            this._textMap = __assign({}, map, config.texts);
        }
        TextMap.prototype.get = function (id, args) {
            if (!this._textMap) {
                return;
            }
            var text = this._textMap[id];
            if (typeof text === 'function') {
                return text(args);
            }
            return text;
        };
        TextMap.prototype.destroy = function () {
            this._textMap = null;
        };
        TextMap.moduleName = 'textMap';
        TextMap.dependencies = ['config'];
        return TextMap;
    }());

    var fnMap = [
        [
            'requestFullscreen',
            'exitFullscreen',
            'fullscreenElement',
            'fullscreenEnabled',
            'fullscreenchange',
            'fullscreenerror',
        ],
        // new WebKit
        [
            'webkitRequestFullscreen',
            'webkitExitFullscreen',
            'webkitFullscreenElement',
            'webkitFullscreenEnabled',
            'webkitfullscreenchange',
            'webkitfullscreenerror',
        ],
        // old WebKit (Safari 5.1)
        [
            'webkitRequestFullScreen',
            'webkitCancelFullScreen',
            'webkitCurrentFullScreenElement',
            'webkitCancelFullScreen',
            'webkitfullscreenchange',
            'webkitfullscreenerror',
        ],
        [
            'mozRequestFullScreen',
            'mozCancelFullScreen',
            'mozFullScreenElement',
            'mozFullScreenEnabled',
            'mozfullscreenchange',
            'mozfullscreenerror',
        ],
        [
            'msRequestFullscreen',
            'msExitFullscreen',
            'msFullscreenElement',
            'msFullscreenEnabled',
            'MSFullscreenChange',
            'MSFullscreenError',
        ],
    ];
    /* ignore coverage */
    function getFullScreenFn() {
        var ret = {};
        for (var i = 0; i < fnMap.length; i += 1) {
            if (fnMap[i][1] in document) {
                for (var j = 0; j < fnMap[i].length; j += 1) {
                    ret[fnMap[0][j]] = fnMap[i][j];
                }
                return ret;
            }
        }
        return false;
    }
    var DesktopFullScreen = /** @class */ (function () {
        function DesktopFullScreen(elem, callback) {
            this._elem = elem;
            this._callback = callback;
            this._fullscreenFn = getFullScreenFn();
            this._bindEvents();
        }
        Object.defineProperty(DesktopFullScreen.prototype, "isAPIExist", {
            get: function () {
                return Boolean(this._fullscreenFn);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DesktopFullScreen.prototype, "isInFullScreen", {
            get: function () {
                if (typeof this._fullscreenFn === 'boolean') {
                    return false;
                }
                return Boolean(document[this._fullscreenFn.fullscreenElement]);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DesktopFullScreen.prototype, "isEnabled", {
            get: function () {
                if (typeof this._fullscreenFn === 'boolean') {
                    return false;
                }
                return (this.isAPIExist && document[this._fullscreenFn.fullscreenEnabled]);
            },
            enumerable: true,
            configurable: true
        });
        DesktopFullScreen.prototype._bindEvents = function () {
            if (typeof this._fullscreenFn === 'boolean') {
                return false;
            }
            document.addEventListener(this._fullscreenFn.fullscreenchange, this._callback);
        };
        DesktopFullScreen.prototype._unbindEvents = function () {
            if (typeof this._fullscreenFn === 'boolean') {
                return false;
            }
            document.removeEventListener(this._fullscreenFn.fullscreenchange, this._callback);
        };
        DesktopFullScreen.prototype.request = function () {
            if (!this.isEnabled) {
                return;
            }
            var request = this._fullscreenFn.requestFullscreen;
            // Work around Safari 5.1 bug: reports support for
            // keyboard in fullscreen even though it doesn't.
            // Browser sniffing, since the alternative with
            // setTimeout is even worse.
            if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) {
                this._elem[request]();
            }
            else {
                this._elem[request](Element.ALLOW_KEYBOARD_INPUT);
            }
        };
        DesktopFullScreen.prototype.exit = function () {
            if (!this.isEnabled) {
                return;
            }
            document[this._fullscreenFn.exitFullscreen]();
        };
        DesktopFullScreen.prototype.destroy = function () {
            this._unbindEvents();
            this._elem = null;
            this._callback = null;
        };
        return DesktopFullScreen;
    }());

    var HAVE_METADATA = 1;
    var isFullScreenRequested = false;
    var IOSFullScreen = /** @class */ (function () {
        function IOSFullScreen(elem, callback) {
            this._elem = elem;
            this._callback = callback;
            this._bindEvents();
            this._enterWhenHasMetaData = this._enterWhenHasMetaData.bind(this);
        }
        Object.defineProperty(IOSFullScreen.prototype, "isAPIExist", {
            get: function () {
                return Boolean(this._elem && this._elem.webkitSupportsFullscreen);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IOSFullScreen.prototype, "isInFullScreen", {
            get: function () {
                return Boolean(this._elem && this._elem.webkitDisplayingFullscreen);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IOSFullScreen.prototype, "isEnabled", {
            get: function () {
                return this.isAPIExist;
            },
            enumerable: true,
            configurable: true
        });
        IOSFullScreen.prototype._bindEvents = function () {
            this._elem.addEventListener('webkitbeginfullscreen', this._callback);
            this._elem.addEventListener('webkitendfullscreen', this._callback);
        };
        IOSFullScreen.prototype._unbindEvents = function () {
            this._elem.removeEventListener('webkitbeginfullscreen', this._callback);
            this._elem.removeEventListener('webkitendfullscreen', this._callback);
            this._elem.removeEventListener('loadedmetadata', this._enterWhenHasMetaData);
        };
        IOSFullScreen.prototype._enterWhenHasMetaData = function () {
            this._elem.removeEventListener('loadedmetadata', this._enterWhenHasMetaData);
            isFullScreenRequested = false;
            this.request();
        };
        IOSFullScreen.prototype.request = function () {
            if (!this.isEnabled || this.isInFullScreen || isFullScreenRequested) {
                return false;
            }
            try {
                this._elem.webkitEnterFullscreen();
            }
            catch (e) {
                if (this._elem.readyState < HAVE_METADATA) {
                    this._elem.addEventListener('loadedmetadata', this._enterWhenHasMetaData);
                    isFullScreenRequested = true;
                }
            }
        };
        IOSFullScreen.prototype.exit = function () {
            if (!this.isEnabled || !this.isInFullScreen) {
                return false;
            }
            this._elem.webkitExitFullscreen();
        };
        IOSFullScreen.prototype.destroy = function () {
            this._unbindEvents();
            this._elem = null;
            this._callback = null;
        };
        return IOSFullScreen;
    }());

    var DEFAULT_CONFIG$1 = {
        exitFullScreenOnEnd: true,
        enterFullScreenOnPlay: false,
        exitFullScreenOnPause: false,
        pauseVideoOnFullScreenExit: false,
    };
    var FullScreenManager = /** @class */ (function () {
        function FullScreenManager(_a) {
            var eventEmitter = _a.eventEmitter, engine = _a.engine, rootContainer = _a.rootContainer, config = _a.config;
            this._exitFullScreenOnEnd = false;
            this._enterFullScreenOnPlay = false;
            this._exitFullScreenOnPause = false;
            this._pauseVideoOnFullScreenExit = false;
            this._eventEmitter = eventEmitter;
            this._engine = engine;
            if (config.disableFullScreen) {
                this._isEnabled = false;
            }
            else {
                this._isEnabled = true;
                var _config = __assign({}, DEFAULT_CONFIG$1);
                this._exitFullScreenOnEnd = _config.exitFullScreenOnEnd;
                this._enterFullScreenOnPlay = _config.enterFullScreenOnPlay;
                this._exitFullScreenOnPause = _config.exitFullScreenOnPause;
                this._pauseVideoOnFullScreenExit = _config.pauseVideoOnFullScreenExit;
            }
            this._onChange = this._onChange.bind(this);
            if (isIOS()) {
                this._helper = new IOSFullScreen(this._engine.getElement(), this._onChange);
            }
            else {
                this._helper = new DesktopFullScreen(rootContainer.getElement(), this._onChange);
            }
            this._bindEvents();
        }
        FullScreenManager.prototype._onChange = function () {
            if (!this._helper.isInFullScreen && this._pauseVideoOnFullScreenExit) {
                this._engine.pause();
            }
            this._eventEmitter.emit(UI_EVENTS.FULL_SCREEN_STATE_CHANGED, this._helper.isInFullScreen);
        };
        FullScreenManager.prototype._bindEvents = function () {
            this._unbindEvents = this._eventEmitter.bindEvents([
                [VIDEO_EVENTS.STATE_CHANGED, this._processNextStateFromEngine],
                [VIDEO_EVENTS.PLAY_REQUEST, this._enterOnPlayRequested],
            ], this);
        };
        FullScreenManager.prototype._exitOnEnd = function () {
            if (this._exitFullScreenOnEnd && this.isInFullScreen) {
                this.exitFullScreen();
            }
        };
        FullScreenManager.prototype._enterOnPlayRequested = function () {
            if (this._enterFullScreenOnPlay && !this.isInFullScreen) {
                this.enterFullScreen();
            }
        };
        FullScreenManager.prototype._exitOnPauseRequested = function () {
            if (this._exitFullScreenOnPause && this.isInFullScreen) {
                this.exitFullScreen();
            }
        };
        FullScreenManager.prototype._processNextStateFromEngine = function (_a) {
            var nextState = _a.nextState;
            switch (nextState) {
                case EngineState$1.ENDED: {
                    this._exitOnEnd();
                    break;
                }
                case EngineState$1.PAUSED: {
                    this._exitOnPauseRequested();
                    break;
                }
                /* ignore coverage */
                default:
                    break;
            }
        };
        /**
         * Allow player try to exit full screen on pause
         * @example
         * player.play();
         * player.enableExitFullScreenOnPause();
         * player.enterFullScreen();
         * console.log(player.isInFullScreen) // true
         * player.pause();
         * console.log(player.isInFullScreen) // false
         */
        FullScreenManager.prototype.enableExitFullScreenOnPause = function () {
            this._exitFullScreenOnPause = true;
        };
        /**
         * Disallow player to exit full screen on pause
         * @example
         * player.play();
         * player.disableExitFullScreenOnPause();
         * player.enterFullScreen();
         * console.log(player.isInFullScreen) // true
         * player.pause();
         * console.log(player.isInFullScreen) // true
         */
        FullScreenManager.prototype.disableExitFullScreenOnPause = function () {
            this._exitFullScreenOnPause = false;
        };
        /**
         * Allow player try to exit full screen on end
         * @example
         * player.play();
         * player.enableExitFullScreenOnEnd();
         * player.enterFullScreen();
         * console.log(player.isInFullScreen) // true
         * console.log(player.isEnded); // true
         * console.log(player.isInFullScreen) // false
         */
        FullScreenManager.prototype.enableExitFullScreenOnEnd = function () {
            this._exitFullScreenOnEnd = true;
        };
        /**
         * Disallow player try to exit full screen on end
         * @example
         * player.play();
         * player.disableExitFullScreenOnEnd();
         * player.enterFullScreen();
         * console.log(player.isInFullScreen) // true
         * console.log(player.isEnded); // true
         * console.log(player.isInFullScreen) // true
         */
        FullScreenManager.prototype.disableExitFullScreenOnEnd = function () {
            this._exitFullScreenOnPause = false;
        };
        /**
         * Allow player try to exit full screen on end
         * @example
         * player.enableEnterFullScreenOnPlay();
         * console.log(player.isInFullScreen) // false
         * player.play();
         * console.log(player.isInFullScreen) // true
         */
        FullScreenManager.prototype.enableEnterFullScreenOnPlay = function () {
            this._enterFullScreenOnPlay = true;
        };
        /**
         * Disallow player try to exit full screen on end
         * @example
         * player.disableEnterFullScreenOnPlay();
         * console.log(player.isInFullScreen) // false
         * player.play();
         * console.log(player.isInFullScreen) // false
         */
        FullScreenManager.prototype.disableEnterFullScreenOnPlay = function () {
            this._enterFullScreenOnPlay = false;
        };
        /**
         * Allow player try to exit full screen on end
         * @example
         * player.play();
         * player.enablePauseVideoOnFullScreenExit();
         * player.enterFullScreen();
         * console.log(player.isInFullScreen) // true
         * player.pause();
         * console.log(player.isInFullScreen) // false
         */
        FullScreenManager.prototype.enablePauseVideoOnFullScreenExit = function () {
            this._pauseVideoOnFullScreenExit = true;
        };
        /**
         * Disallow player try to exit full screen on end
         * @example
         * player.play();
         * player.enablePauseVideoOnFullScreenExit();
         * player.enterFullScreen();
         * console.log(player.isInFullScreen) // true
         * player.pause();
         * console.log(player.isInFullScreen) // true
         */
        FullScreenManager.prototype.disablePauseVideoOnFullScreenExit = function () {
            this._pauseVideoOnFullScreenExit = false;
        };
        /**
         * Player would try to enter fullscreen mode.
         * Behavior of fullscreen mode on different platforms may differ.
         * @example
         * player.enterFullScreen();
         */
        FullScreenManager.prototype.enterFullScreen = function () {
            if (!this.isEnabled) {
                return;
            }
            this._helper.request();
        };
        /**
         * Player would try to exit fullscreen mode.
         * @example
         * player.exitFullScreen();
         */
        FullScreenManager.prototype.exitFullScreen = function () {
            if (!this.isEnabled) {
                return;
            }
            this._helper.exit();
        };
        Object.defineProperty(FullScreenManager.prototype, "isInFullScreen", {
            /**
             * Return true if player is in full screen
             * @example
             * console.log(player.isInFullScreen); // false
             */
            get: function () {
                if (!this.isEnabled) {
                    return false;
                }
                return this._helper.isInFullScreen;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FullScreenManager.prototype, "isEnabled", {
            get: function () {
                return this._helper.isEnabled && this._isEnabled;
            },
            enumerable: true,
            configurable: true
        });
        FullScreenManager.prototype.destroy = function () {
            this._unbindEvents();
            this._helper.destroy();
            this._helper = null;
            this._eventEmitter = null;
            this._engine = null;
        };
        FullScreenManager.moduleName = 'fullScreenManager';
        FullScreenManager.dependencies = ['eventEmitter', 'engine', 'rootContainer', 'config'];
        __decorate([
            playerAPI()
        ], FullScreenManager.prototype, "enableExitFullScreenOnPause", null);
        __decorate([
            playerAPI()
        ], FullScreenManager.prototype, "disableExitFullScreenOnPause", null);
        __decorate([
            playerAPI()
        ], FullScreenManager.prototype, "enableExitFullScreenOnEnd", null);
        __decorate([
            playerAPI()
        ], FullScreenManager.prototype, "disableExitFullScreenOnEnd", null);
        __decorate([
            playerAPI()
        ], FullScreenManager.prototype, "enableEnterFullScreenOnPlay", null);
        __decorate([
            playerAPI()
        ], FullScreenManager.prototype, "disableEnterFullScreenOnPlay", null);
        __decorate([
            playerAPI()
        ], FullScreenManager.prototype, "enablePauseVideoOnFullScreenExit", null);
        __decorate([
            playerAPI()
        ], FullScreenManager.prototype, "disablePauseVideoOnFullScreenExit", null);
        __decorate([
            playerAPI()
        ], FullScreenManager.prototype, "enterFullScreen", null);
        __decorate([
            playerAPI()
        ], FullScreenManager.prototype, "exitFullScreen", null);
        __decorate([
            playerAPI()
        ], FullScreenManager.prototype, "isInFullScreen", null);
        return FullScreenManager;
    }());

    var SEEK_BY_UI_EVENTS = [
        UI_EVENTS.GO_FORWARD_WITH_KEYBOARD,
        UI_EVENTS.GO_BACKWARD_WITH_KEYBOARD,
        UI_EVENTS.PROGRESS_CHANGE,
    ];
    var LiveStateEngine = /** @class */ (function () {
        function LiveStateEngine(_a) {
            var eventEmitter = _a.eventEmitter, engine = _a.engine;
            this._eventEmitter = eventEmitter;
            this._engine = engine;
            this._state = LiveState$1.NONE;
            this._isSeekedByUIWhilePlaying = null;
            this._bindEvents();
        }
        Object.defineProperty(LiveStateEngine.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        LiveStateEngine.prototype._bindEvents = function () {
            var _this = this;
            this._unbindEvents = this._eventEmitter.bindEvents([
                [VIDEO_EVENTS.STATE_CHANGED, this._processStateChange]
            ].concat(SEEK_BY_UI_EVENTS.map(function (eventName) { return [eventName, _this._processSeekByUI]; }), [
                [VIDEO_EVENTS.DYNAMIC_CONTENT_ENDED, this._onDynamicContentEnded],
            ]), this);
        };
        LiveStateEngine.prototype._processStateChange = function (_a) {
            var prevState = _a.prevState, nextState = _a.nextState;
            if (nextState === EngineState$1.SRC_SET) {
                this._setState(LiveState$1.NONE);
                return;
            }
            if (!this._engine.isDynamicContent || this._engine.isDynamicContentEnded) {
                return;
            }
            switch (nextState) {
                case EngineState$1.METADATA_LOADED:
                    this._setState(LiveState$1.INITIAL);
                    break;
                case EngineState$1.PLAY_REQUESTED:
                    if (this._state === LiveState$1.INITIAL) {
                        this._engine.syncWithLive();
                    }
                    break;
                case EngineState$1.PLAYING:
                    // NOTE: skip PLAYING event after events like `WAITING` and other not important events.
                    if (this._state === LiveState$1.INITIAL ||
                        this._state === LiveState$1.NOT_SYNC ||
                        this._isSeekedByUIWhilePlaying) {
                        this._setState(this._engine.isSyncWithLive ? LiveState$1.SYNC : LiveState$1.NOT_SYNC);
                        this._isSeekedByUIWhilePlaying = false;
                    }
                    break;
                case EngineState$1.PAUSED:
                    // NOTE: process `PAUSED` event only `PLAYING`, to be sure its not related with `WAITING` events
                    if (prevState === EngineState$1.PLAYING) {
                        this._setState(LiveState$1.NOT_SYNC);
                    }
                    break;
                default:
                    break;
            }
        };
        LiveStateEngine.prototype._processSeekByUI = function () {
            if (this._engine.isDynamicContent &&
                this._engine.getCurrentState() === EngineState$1.PLAYING) {
                // NOTE: flag should be handled on `PLAYING` state in `_processStateChange`
                this._isSeekedByUIWhilePlaying = true;
            }
        };
        LiveStateEngine.prototype._onDynamicContentEnded = function () {
            this._setState(LiveState$1.ENDED);
        };
        LiveStateEngine.prototype._setState = function (state) {
            if (this._state !== state) {
                var prevState = this._state;
                var nextState = state;
                this._state = state;
                this._eventEmitter.emit(VIDEO_EVENTS.LIVE_STATE_CHANGED, {
                    prevState: prevState,
                    nextState: nextState,
                });
            }
        };
        LiveStateEngine.prototype.destroy = function () {
            this._unbindEvents();
            this._eventEmitter = null;
            this._engine = null;
            this._state = null;
        };
        LiveStateEngine.moduleName = 'liveStateEngine';
        LiveStateEngine.dependencies = ['eventEmitter', 'engine'];
        return LiveStateEngine;
    }());

    var logger = {
        info: function (message) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
            var _a;
            (_a = window.console).info.apply(_a, [message].concat(optionalParams));
        },
        warn: function (message) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
            var _a;
            (_a = window.console).warn.apply(_a, [message].concat(optionalParams));
        },
        error: function (name) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
            var _a;
            (_a = window.console).error.apply(_a, [name].concat(optionalParams));
        },
    };

    var KEYCODES = {
        SPACE_BAR: 32,
        ENTER: 13,
        TAB: 9,
        LEFT_ARROW: 37,
        RIGHT_ARROW: 39,
        UP_ARROW: 38,
        DOWN_ARROW: 40,
        DEBUG_KEY: 68,
    };
    var KeyboardInterceptorCore = /** @class */ (function () {
        function KeyboardInterceptorCore(element, callbacks) {
            this._eventEmitter = new eventemitter3_1();
            this._element = element;
            callbacks && this._attachCallbacks(callbacks);
            this._bindCallbacks();
            this._bindEvents();
        }
        KeyboardInterceptorCore.prototype._attachCallbacks = function (callbacks) {
            var _this = this;
            Object.keys(callbacks).forEach(function (keyCode) {
                var keyCodeCallbacks = callbacks[keyCode];
                if (Array.isArray(keyCodeCallbacks)) {
                    keyCodeCallbacks.forEach(function (callback) {
                        return _this._eventEmitter.on(keyCode, callback);
                    });
                }
                else {
                    _this._eventEmitter.on(keyCode, keyCodeCallbacks);
                }
            });
        };
        KeyboardInterceptorCore.prototype._unattachCallbacks = function () {
            this._eventEmitter.removeAllListeners();
        };
        KeyboardInterceptorCore.prototype._bindCallbacks = function () {
            this._processKeyboardInput = this._processKeyboardInput.bind(this);
        };
        KeyboardInterceptorCore.prototype._bindEvents = function () {
            this._element.addEventListener('keydown', this._processKeyboardInput, false);
        };
        KeyboardInterceptorCore.prototype._unbindEvents = function () {
            this._element.removeEventListener('keydown', this._processKeyboardInput, false);
        };
        KeyboardInterceptorCore.prototype.addCallbacks = function (callbacks) {
            this._attachCallbacks(callbacks);
        };
        KeyboardInterceptorCore.prototype._processKeyboardInput = function (e) {
            this._eventEmitter.emit(e.keyCode, e);
        };
        Object.defineProperty(KeyboardInterceptorCore.prototype, "_isDestroyed", {
            get: function () {
                return !this._element && !this._eventEmitter;
            },
            enumerable: true,
            configurable: true
        });
        KeyboardInterceptorCore.prototype.destroy = function () {
            if (this._isDestroyed) {
                logger.warn('KeyboardInterceptor.destroy called after already been destroyed');
                return;
            }
            else {
                this._unbindEvents();
                this._element = null;
                this._unattachCallbacks();
                this._eventEmitter = null;
            }
        };
        return KeyboardInterceptorCore;
    }());

    var AMOUNT_TO_SKIP_SECONDS = 5;
    var AMOUNT_TO_CHANGE_VOLUME = 10;
    var KeyboardControl = /** @class */ (function () {
        function KeyboardControl(_a) {
            var config = _a.config, eventEmitter = _a.eventEmitter, rootContainer = _a.rootContainer, engine = _a.engine;
            this._eventEmitter = eventEmitter;
            this._engine = engine;
            this._rootElement = rootContainer.getElement();
            if (isIPhone() || isIPod() || isIPad() || isAndroid()) {
                this._isEnabled = false;
            }
            else {
                this._isEnabled = config.disableControlWithKeyboard !== false;
            }
            this._initInterceptor();
        }
        KeyboardControl.prototype._initInterceptor = function () {
            if (this._isEnabled) {
                this._keyboardInterceptor = new KeyboardInterceptorCore(this._rootElement);
                this._attachDefaultControls();
            }
        };
        KeyboardControl.prototype._attachDefaultControls = function () {
            var _this = this;
            var _a;
            this._keyboardInterceptor.addCallbacks((_a = {}, _a[KEYCODES.TAB] = function () {
                    _this._eventEmitter.emit(UI_EVENTS.KEYBOARD_KEYDOWN_INTERCEPTED);
                }, _a[KEYCODES.SPACE_BAR] = function (e) {
                    e.preventDefault();
                    _this._eventEmitter.emit(UI_EVENTS.KEYBOARD_KEYDOWN_INTERCEPTED);
                    _this._eventEmitter.emit(UI_EVENTS.TOGGLE_PLAYBACK_WITH_KEYBOARD);
                    _this._engine.togglePlayback();
                }, _a[KEYCODES.LEFT_ARROW] = function (e) {
                    if (_this._engine.isSeekAvailable) {
                        e.preventDefault();
                        _this._eventEmitter.emit(UI_EVENTS.KEYBOARD_KEYDOWN_INTERCEPTED);
                        _this._eventEmitter.emit(UI_EVENTS.GO_BACKWARD_WITH_KEYBOARD);
                        _this._engine.seekBackward(AMOUNT_TO_SKIP_SECONDS);
                    }
                }, _a[KEYCODES.RIGHT_ARROW] = function (e) {
                    if (_this._engine.isSeekAvailable) {
                        e.preventDefault();
                        _this._eventEmitter.emit(UI_EVENTS.KEYBOARD_KEYDOWN_INTERCEPTED);
                        _this._eventEmitter.emit(UI_EVENTS.GO_FORWARD_WITH_KEYBOARD);
                        _this._engine.seekForward(AMOUNT_TO_SKIP_SECONDS);
                    }
                }, _a[KEYCODES.UP_ARROW] = function (e) {
                    e.preventDefault();
                    _this._eventEmitter.emit(UI_EVENTS.KEYBOARD_KEYDOWN_INTERCEPTED);
                    _this._eventEmitter.emit(UI_EVENTS.INCREASE_VOLUME_WITH_KEYBOARD);
                    _this._engine.setMute(false);
                    _this._engine.increaseVolume(AMOUNT_TO_CHANGE_VOLUME);
                }, _a[KEYCODES.DOWN_ARROW] = function (e) {
                    e.preventDefault();
                    _this._eventEmitter.emit(UI_EVENTS.KEYBOARD_KEYDOWN_INTERCEPTED);
                    _this._eventEmitter.emit(UI_EVENTS.DECREASE_VOLUME_WITH_KEYBOARD);
                    _this._engine.setMute(false);
                    _this._engine.decreaseVolume(AMOUNT_TO_CHANGE_VOLUME);
                }, _a));
        };
        KeyboardControl.prototype._destroyInterceptor = function () {
            if (this._keyboardInterceptor) {
                this._keyboardInterceptor.destroy();
            }
        };
        KeyboardControl.prototype.addKeyControl = function (key, callback) {
            var _a;
            if (this._isEnabled) {
                this._keyboardInterceptor.addCallbacks((_a = {}, _a[key] = callback, _a));
            }
        };
        KeyboardControl.prototype.destroy = function () {
            this._destroyInterceptor();
            this._rootElement = null;
            this._eventEmitter = null;
            this._engine = null;
        };
        KeyboardControl.moduleName = 'keyboardControl';
        KeyboardControl.dependencies = ['engine', 'eventEmitter', 'rootContainer', 'config'];
        return KeyboardControl;
    }());

    function anonymous$1(props
    /*``*/) {
    var out='<div class="'+(props.styles.debugPanel)+'"> <div class="'+(props.styles.closeButton)+'" data-playable-hook="debug-panel-close-button" > x </div> <pre class="'+(props.styles.infoContainer)+'" data-playable-hook="debug-panel-info-container" > </pre></div>';return out;
    }

    function syntaxHighlight(json, styleNames) {
        json = json
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function (match) {
            var cls = styleNames.number;
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = styleNames.key;
                }
                else {
                    cls = styleNames.string;
                }
            }
            else if (/true|false/.test(match)) {
                cls = styleNames.boolean;
            }
            else if (/null/.test(match)) {
                cls = styleNames.null;
            }
            return "<span class=\"" + cls + "\">" + match + "</span>";
        });
    }

    function getElementByHook(element, hook) {
        return element.querySelector("[data-playable-hook=\"" + hook + "\"]");
    }

    function toggleElementClass(element, className, shouldAdd) {
        if (shouldAdd) {
            element.classList.add(className);
        }
        else {
            element.classList.remove(className);
        }
    }

    var css$1 = ".debug-panel__controlButton___pG-WY {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0;\n  cursor: pointer;\n  -webkit-transition-duration: .2s;\n          transition-duration: .2s;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  opacity: 1;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background-color: transparent;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .debug-panel__controlButton___pG-WY:hover {\n    opacity: .7; }\n  .debug-panel__hidden___1TRHR {\n  visibility: hidden !important;\n  width: 0 !important;\n  min-width: 0 !important;\n  height: 0 !important;\n  min-height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  opacity: 0 !important; }\n  .debug-panel__debugPanel___116IW {\n  position: absolute;\n  z-index: 10000;\n  top: 10px;\n  left: 10px;\n  overflow: scroll;\n  width: 400px;\n  height: 250px;\n  border-radius: 3px;\n  background-color: rgba(0, 0, 0, 0.95); }\n  .debug-panel__debugPanel___116IW .debug-panel__closeButton___claHV {\n    position: absolute;\n    top: 10px;\n    right: 5px;\n    cursor: pointer;\n    color: white; }\n  .debug-panel__debugPanel___116IW .debug-panel__closeButton___claHV:hover {\n      opacity: .8; }\n  .debug-panel__debugPanel___116IW .debug-panel__infoContainer___-AZH_ {\n    font-size: 8px;\n    line-height: 8px;\n    margin: 5px;\n    padding: 5px;\n    color: white; }\n  .debug-panel__debugPanel___116IW .debug-panel__infoContainer___-AZH_ .debug-panel__string___1Jfzp {\n      color: green; }\n  .debug-panel__debugPanel___116IW .debug-panel__infoContainer___-AZH_ .debug-panel__number___2WdLF {\n      color: darkorange; }\n  .debug-panel__debugPanel___116IW .debug-panel__infoContainer___-AZH_ .debug-panel__boolean___CpohN {\n      color: blue; }\n  .debug-panel__debugPanel___116IW .debug-panel__infoContainer___-AZH_ .debug-panel__null___2ZOuz {\n      color: magenta; }\n  .debug-panel__debugPanel___116IW .debug-panel__infoContainer___-AZH_ .debug-panel__key___4avak {\n      color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlYnVnLXBhbmVsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBYztFQUFkLHFCQUFjO0VBQWQsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixxQ0FBNkI7RUFBN0IsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIseUJBQXdCO01BQXhCLHNCQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsMEJBQW9CO01BQXBCLHVCQUFvQjtVQUFwQixvQkFBb0IsRUFBRTtFQUN0QjtJQUNFLFlBQVksRUFBRTtFQUVsQjtFQUNFLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixzQkFBc0IsRUFBRTtFQUUxQjtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsc0NBQXNDLEVBQUU7RUFDeEM7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYSxFQUFFO0VBQ2Y7TUFDRSxZQUFZLEVBQUU7RUFDbEI7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYSxFQUFFO0VBQ2Y7TUFDRSxhQUFhLEVBQUU7RUFDakI7TUFDRSxrQkFBa0IsRUFBRTtFQUN0QjtNQUNFLFlBQVksRUFBRTtFQUNoQjtNQUNFLGVBQWUsRUFBRTtFQUNuQjtNQUNFLGFBQWEsRUFBRSIsImZpbGUiOiJkZWJ1Zy1wYW5lbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRyb2xCdXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLmNvbnRyb2xCdXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IC43OyB9XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDsgfVxuXG4uZGVidWdQYW5lbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDA7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45NSk7IH1cbiAgLmRlYnVnUGFuZWwgLmNsb3NlQnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB3aGl0ZTsgfVxuICAgIC5kZWJ1Z1BhbmVsIC5jbG9zZUJ1dHRvbjpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAuODsgfVxuICAuZGVidWdQYW5lbCAuaW5mb0NvbnRhaW5lciB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDhweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgY29sb3I6IHdoaXRlOyB9XG4gICAgLmRlYnVnUGFuZWwgLmluZm9Db250YWluZXIgLnN0cmluZyB7XG4gICAgICBjb2xvcjogZ3JlZW47IH1cbiAgICAuZGVidWdQYW5lbCAuaW5mb0NvbnRhaW5lciAubnVtYmVyIHtcbiAgICAgIGNvbG9yOiBkYXJrb3JhbmdlOyB9XG4gICAgLmRlYnVnUGFuZWwgLmluZm9Db250YWluZXIgLmJvb2xlYW4ge1xuICAgICAgY29sb3I6IGJsdWU7IH1cbiAgICAuZGVidWdQYW5lbCAuaW5mb0NvbnRhaW5lciAubnVsbCB7XG4gICAgICBjb2xvcjogbWFnZW50YTsgfVxuICAgIC5kZWJ1Z1BhbmVsIC5pbmZvQ29udGFpbmVyIC5rZXkge1xuICAgICAgY29sb3I6IHdoaXRlOyB9XG4iXX0= */";
    var styles$1 = {"controlButton":"debug-panel__controlButton___pG-WY","hidden":"debug-panel__hidden___1TRHR","debugPanel":"debug-panel__debugPanel___116IW","closeButton":"debug-panel__closeButton___claHV","infoContainer":"debug-panel__infoContainer___-AZH_","string":"debug-panel__string___1Jfzp","number":"debug-panel__number___2WdLF","boolean":"debug-panel__boolean___CpohN","null":"debug-panel__null___2ZOuz","key":"debug-panel__key___4avak"};
    styleInject(css$1);

    var DebugPanelView = /** @class */ (function (_super) {
        __extends(DebugPanelView, _super);
        function DebugPanelView(config) {
            var _this = _super.call(this) || this;
            var callbacks = config.callbacks;
            _this._callbacks = callbacks;
            _this._initDOM();
            _this._bindEvents();
            return _this;
        }
        DebugPanelView.prototype._initDOM = function () {
            this._$rootElement = htmlToElement(anonymous$1({
                styles: this.styleNames,
            }));
            this._$closeButton = getElementByHook(this._$rootElement, 'debug-panel-close-button');
            this._$infoContainer = getElementByHook(this._$rootElement, 'debug-panel-info-container');
        };
        DebugPanelView.prototype._bindEvents = function () {
            this._$closeButton.addEventListener('click', this._callbacks.onCloseButtonClick);
        };
        DebugPanelView.prototype._unbindEvents = function () {
            this._$closeButton.removeEventListener('click', this._callbacks.onCloseButtonClick);
        };
        DebugPanelView.prototype.show = function () {
            toggleElementClass(this._$rootElement, this.styleNames.hidden, false);
        };
        DebugPanelView.prototype.hide = function () {
            toggleElementClass(this._$rootElement, this.styleNames.hidden, true);
        };
        DebugPanelView.prototype.setInfo = function (info) {
            this._$infoContainer.innerHTML = syntaxHighlight(JSON.stringify(info, undefined, 4), this.styleNames);
        };
        DebugPanelView.prototype.getElement = function () {
            return this._$rootElement;
        };
        DebugPanelView.prototype.destroy = function () {
            this._unbindEvents();
            if (this._$rootElement.parentNode) {
                this._$rootElement.parentNode.removeChild(this._$rootElement);
            }
            this._$rootElement = null;
            this._$closeButton = null;
            this._$infoContainer = null;
            this._callbacks = null;
        };
        return DebugPanelView;
    }(View));
    DebugPanelView.extendStyleNames(styles$1);

    var UPDATE_TIME = 1000;
    var DebugPanel = /** @class */ (function () {
        function DebugPanel(_a) {
            var engine = _a.engine, rootContainer = _a.rootContainer, keyboardControl = _a.keyboardControl;
            this._engine = engine;
            this._bindCallbacks();
            this._initUI();
            this.hide();
            rootContainer.appendComponentElement(this.getElement());
            keyboardControl.addKeyControl(KEYCODES.DEBUG_KEY, this._keyControlCallback);
        }
        DebugPanel.prototype._keyControlCallback = function (e) {
            if (e.ctrlKey && e.shiftKey) {
                this.show();
            }
        };
        DebugPanel.prototype.getElement = function () {
            return this.view.getElement();
        };
        DebugPanel.prototype._initUI = function () {
            this.view = new DebugPanelView({
                callbacks: {
                    onCloseButtonClick: this.hide,
                },
            });
        };
        DebugPanel.prototype._bindCallbacks = function () {
            this.updateInfo = this.updateInfo.bind(this);
            this.hide = this.hide.bind(this);
            this._keyControlCallback = this._keyControlCallback.bind(this);
        };
        DebugPanel.prototype.getDebugInfo = function () {
            var _a = this._engine.getDebugInfo(), url = _a.url, type = _a.type, deliveryPriority = _a.deliveryPriority, currentBitrate = _a.currentBitrate, overallBufferLength = _a.overallBufferLength, nearestBufferSegInfo = _a.nearestBufferSegInfo, viewDimensions = _a.viewDimensions, currentTime = _a.currentTime, duration = _a.duration, loadingStateTimestamps = _a.loadingStateTimestamps, bitrates = _a.bitrates, bwEstimate = _a.bwEstimate;
            return {
                url: url,
                type: type,
                deliveryPriority: exports.MEDIA_STREAM_DELIVERY_PRIORITY[deliveryPriority],
                currentBitrate: currentBitrate,
                overallBufferLength: overallBufferLength,
                nearestBufferSegInfo: nearestBufferSegInfo,
                viewDimensions: viewDimensions,
                currentTime: currentTime,
                duration: duration,
                loadingStateTimestamps: loadingStateTimestamps,
                bitrates: bitrates,
                bwEstimate: bwEstimate,
            };
        };
        DebugPanel.prototype.updateInfo = function () {
            this.view.setInfo(this.getDebugInfo());
        };
        DebugPanel.prototype.setUpdateInterval = function () {
            this.clearUpdateInterval();
            this._interval = window.setInterval(this.updateInfo, UPDATE_TIME);
        };
        DebugPanel.prototype.clearUpdateInterval = function () {
            window.clearInterval(this._interval);
        };
        DebugPanel.prototype.show = function () {
            if (this.isHidden) {
                this.updateInfo();
                this.setUpdateInterval();
                this.view.show();
                this.isHidden = false;
            }
        };
        DebugPanel.prototype.hide = function () {
            if (!this.isHidden) {
                this.clearUpdateInterval();
                this.view.hide();
                this.isHidden = true;
            }
        };
        DebugPanel.prototype.destroy = function () {
            this.clearUpdateInterval();
            this.view.destroy();
            this.view = null;
        };
        DebugPanel.moduleName = 'debugPanel';
        DebugPanel.View = DebugPanelView;
        DebugPanel.dependencies = ['engine', 'rootContainer', 'keyboardControl'];
        return DebugPanel;
    }());

    function anonymous$2(props
    /*``*/) {
    var out='<div class="'+(props.styles.screen)+'" data-playable-hook="screen-block"> <canvas class="'+(props.styles.backgroundCanvas)+'" data-playable-hook="background-canvas"/></div>';return out;
    }

    (function (VideoViewMode) {
        VideoViewMode["REGULAR"] = "REGULAR";
        VideoViewMode["BLUR"] = "BLUR";
        VideoViewMode["FILL"] = "FILL";
    })(exports.VIDEO_VIEW_MODES || (exports.VIDEO_VIEW_MODES = {}));

    var css$2 = ".screen__screen___3BN2N {\n  position: absolute;\n  z-index: 50;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .screen__screen___3BN2N.screen__regularMode___1Bv69 video, .screen__screen___3BN2N.screen__blurMode___Zianj video {\n    width: 100%;\n    height: 100%; }\n  .screen__screen___3BN2N.screen__verticalStripes___1tr7O.screen__fillMode___rToyv video {\n    width: 100%; }\n  .screen__screen___3BN2N.screen__horizontalStripes___1yh9M.screen__fillMode___rToyv video {\n    height: 100%; }\n  .screen__screen___3BN2N video {\n    position: relative;\n    z-index: 1;\n    -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\n            box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); }\n  .screen__screen___3BN2N.screen__hiddenCursor___3-TwW {\n    cursor: none; }\n  .screen__backgroundCanvas___1PHZh {\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-filter: blur(14px);\n          filter: blur(14px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmVlbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixPQUFPO0VBQ1AsU0FBUztFQUNULFVBQVU7RUFDVixRQUFRO0VBQ1IscUJBQWM7RUFBZCxxQkFBYztFQUFkLGNBQWM7RUFDZCw2QkFBdUI7RUFBdkIsOEJBQXVCO01BQXZCLDJCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIseUJBQXdCO01BQXhCLHNCQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsMEJBQW9CO01BQXBCLHVCQUFvQjtVQUFwQixvQkFBb0IsRUFBRTtFQUN0QjtJQUNFLFlBQVk7SUFDWixhQUFhLEVBQUU7RUFDakI7SUFDRSxZQUFZLEVBQUU7RUFDaEI7SUFDRSxhQUFhLEVBQUU7RUFDakI7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdEQUF3QztZQUF4Qyx3Q0FBd0MsRUFBRTtFQUM1QztJQUNFLGFBQWEsRUFBRTtFQUVuQjtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsT0FBTztFQUNQLFNBQVM7RUFDVCxVQUFVO0VBQ1YsUUFBUTtFQUNSLDJCQUFtQjtVQUFuQixtQkFBbUIsRUFBRSIsImZpbGUiOiJzY3JlZW4uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDUwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuc2NyZWVuLnJlZ3VsYXJNb2RlIHZpZGVvLCAuc2NyZWVuLmJsdXJNb2RlIHZpZGVvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7IH1cbiAgLnNjcmVlbi52ZXJ0aWNhbFN0cmlwZXMuZmlsbE1vZGUgdmlkZW8ge1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gIC5zY3JlZW4uaG9yaXpvbnRhbFN0cmlwZXMuZmlsbE1vZGUgdmlkZW8ge1xuICAgIGhlaWdodDogMTAwJTsgfVxuICAuc2NyZWVuIHZpZGVvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7IH1cbiAgLnNjcmVlbi5oaWRkZW5DdXJzb3Ige1xuICAgIGN1cnNvcjogbm9uZTsgfVxuXG4uYmFja2dyb3VuZENhbnZhcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBmaWx0ZXI6IGJsdXIoMTRweCk7IH1cbiJdfQ== */";
    var styles$2 = {"screen":"screen__screen___3BN2N","regularMode":"screen__regularMode___1Bv69","blurMode":"screen__blurMode___Zianj","verticalStripes":"screen__verticalStripes___1tr7O","fillMode":"screen__fillMode___rToyv","horizontalStripes":"screen__horizontalStripes___1yh9M","hiddenCursor":"screen__hiddenCursor___3-TwW","backgroundCanvas":"screen__backgroundCanvas___1PHZh"};
    styleInject(css$2);

    var ScreenView = /** @class */ (function (_super) {
        __extends(ScreenView, _super);
        function ScreenView(config) {
            var _a;
            var _this = _super.call(this) || this;
            var callbacks = config.callbacks, nativeControls = config.nativeControls, playbackViewElement = config.playbackViewElement;
            _this._callbacks = callbacks;
            _this._styleNamesByViewMode = (_a = {}, _a[exports.VIDEO_VIEW_MODES.REGULAR] = _this.styleNames.regularMode, _a[exports.VIDEO_VIEW_MODES.BLUR] = _this.styleNames.blurMode, _a[exports.VIDEO_VIEW_MODES.FILL] = _this.styleNames.fillMode, _a);
            _this._bindCallbacks();
            if (nativeControls) {
                playbackViewElement.setAttribute('controls', 'true');
            }
            _this._initDOM(playbackViewElement);
            _this._bindEvents();
            _this.setViewMode(exports.VIDEO_VIEW_MODES.REGULAR);
            return _this;
        }
        ScreenView.prototype._bindCallbacks = function () {
            this._updateBackground = this._updateBackground.bind(this);
        };
        ScreenView.prototype._initDOM = function (playbackViewElement) {
            this._$rootElement = htmlToElement(anonymous$2({
                styles: this.styleNames,
            }));
            this._$playbackElement = playbackViewElement;
            this._$rootElement.appendChild(playbackViewElement);
            this._$canvas = getElementByHook(this._$rootElement, 'background-canvas');
        };
        ScreenView.prototype._bindEvents = function () {
            this._$rootElement.addEventListener('click', this._callbacks.onWrapperMouseClick);
            this._$rootElement.addEventListener('dblclick', this._callbacks.onWrapperMouseDblClick);
        };
        ScreenView.prototype._unbindEvents = function () {
            this._$rootElement.removeEventListener('click', this._callbacks.onWrapperMouseClick);
            this._$rootElement.removeEventListener('dblclick', this._callbacks.onWrapperMouseDblClick);
        };
        ScreenView.prototype.focusOnNode = function () {
            this._$rootElement.focus();
        };
        ScreenView.prototype.show = function () {
            toggleElementClass(this._$rootElement, this.styleNames.hidden, false);
        };
        ScreenView.prototype.hide = function () {
            toggleElementClass(this._$rootElement, this.styleNames.hidden, true);
        };
        ScreenView.prototype.getElement = function () {
            return this._$rootElement;
        };
        ScreenView.prototype.hideCursor = function () {
            toggleElementClass(this._$rootElement, this.styleNames.hiddenCursor, true);
        };
        ScreenView.prototype.showCursor = function () {
            toggleElementClass(this._$rootElement, this.styleNames.hiddenCursor, false);
        };
        ScreenView.prototype.setViewMode = function (viewMode) {
            var _this = this;
            if (this._styleNamesByViewMode[viewMode]) {
                this.resetBackground();
                Object.keys(this._styleNamesByViewMode).forEach(function (mode) {
                    toggleElementClass(_this._$rootElement, _this._styleNamesByViewMode[mode], false);
                });
                toggleElementClass(this._$rootElement, this._styleNamesByViewMode[viewMode], true);
                if (viewMode === exports.VIDEO_VIEW_MODES.BLUR) {
                    this._startUpdatingBackground();
                }
                else {
                    this._stopUpdatingBackground();
                }
                this._currentMode = viewMode;
            }
        };
        ScreenView.prototype.setBackgroundSize = function (width, height) {
            this.setBackgroundWidth(width);
            this.setBackgroundHeight(height);
        };
        ScreenView.prototype.setBackgroundWidth = function (width) {
            this._$canvas.width = width;
        };
        ScreenView.prototype.setBackgroundHeight = function (height) {
            this._$canvas.height = height;
        };
        ScreenView.prototype._startUpdatingBackground = function () {
            if (!this._requestAnimationFrameID) {
                this._updateBackground();
            }
        };
        ScreenView.prototype._stopUpdatingBackground = function () {
            if (this._requestAnimationFrameID) {
                cancelAnimationFrame(this._requestAnimationFrameID);
                this._requestAnimationFrameID = null;
            }
        };
        ScreenView.prototype.resetAspectRatio = function () {
            var _a = this._$playbackElement, videoWidth = _a.videoWidth, videoHeight = _a.videoHeight;
            var _b = this._$rootElement.getBoundingClientRect(), width = _b.width, height = _b.height;
            this._isHorizontalStripes =
                width / height < (videoHeight ? videoWidth / videoHeight : 0);
            toggleElementClass(this._$rootElement, this.styleNames.horizontalStripes, this._isHorizontalStripes);
            toggleElementClass(this._$rootElement, this.styleNames.verticalStripes, !this._isHorizontalStripes);
        };
        ScreenView.prototype.resetBackground = function () {
            if (this._currentMode === exports.VIDEO_VIEW_MODES.BLUR) {
                this._clearBackground();
            }
        };
        ScreenView.prototype._getSourceAreas = function (width, height) {
            if (this._isHorizontalStripes) {
                return [[0, 0, width, 1], [0, height - 1, width, 1]];
            }
            return [[0, 0, 1, height], [width - 1, 0, 1, height]];
        };
        ScreenView.prototype._getCanvasAreas = function (width, height) {
            if (this._isHorizontalStripes) {
                return [[0, 0, width, height / 2], [0, height / 2, width, height / 2]];
            }
            return [[0, 0, width / 2, height], [width / 2, 0, width / 2, height]];
        };
        ScreenView.prototype._drawAreaFromSource = function (source, area) {
            var sourceX = source[0], sourceY = source[1], sourceWidth = source[2], sourceHeight = source[3];
            var areaX = area[0], areaY = area[1], areaWidth = area[2], areaHeight = area[3];
            var ctx = this._$canvas.getContext('2d');
            ctx.drawImage(this._$playbackElement, sourceX, sourceY, sourceWidth, sourceHeight, areaX, areaY, areaWidth, areaHeight);
        };
        ScreenView.prototype._drawBackground = function () {
            var _a = this._$playbackElement, videoWidth = _a.videoWidth, videoHeight = _a.videoHeight;
            var canvasWidth = this._$canvas.width;
            var canvasHeight = this._$canvas.height;
            var sourceAreas = this._getSourceAreas(videoWidth, videoHeight);
            var canvasAreas = this._getCanvasAreas(canvasWidth, canvasHeight);
            this._drawAreaFromSource(sourceAreas[0], canvasAreas[0]);
            this._drawAreaFromSource(sourceAreas[1], canvasAreas[1]);
        };
        ScreenView.prototype._updateBackground = function () {
            this._drawBackground();
            this._requestAnimationFrameID = requestAnimationFrame(this._updateBackground);
        };
        ScreenView.prototype._clearBackground = function () {
            var ctx = this._$canvas.getContext('2d');
            ctx.clearRect(0, 0, this._$canvas.width, this._$canvas.height);
        };
        ScreenView.prototype.destroy = function () {
            this._stopUpdatingBackground();
            this._unbindEvents();
            if (this._$rootElement.parentNode) {
                this._$rootElement.parentNode.removeChild(this._$rootElement);
            }
            this._$rootElement = null;
            this._$playbackElement = null;
            this._$canvas = null;
            this._callbacks = null;
        };
        return ScreenView;
    }(View));
    ScreenView.extendStyleNames(styles$2);

    var PLAYBACK_CHANGE_TIMEOUT = 300;
    var Screen = /** @class */ (function () {
        function Screen(_a) {
            var config = _a.config, eventEmitter = _a.eventEmitter, engine = _a.engine, fullScreenManager = _a.fullScreenManager, interactionIndicator = _a.interactionIndicator, rootContainer = _a.rootContainer;
            this._eventEmitter = eventEmitter;
            this._engine = engine;
            this._fullScreenManager = fullScreenManager;
            this._interactionIndicator = interactionIndicator;
            this.isHidden = false;
            this._delayedToggleVideoPlaybackTimeout = null;
            this._isClickProcessingDisabled = Boolean(config.disableControlWithClickOnPlayer);
            this._bindCallbacks();
            this._initUI(config.nativeBrowserControls);
            this._bindEvents();
            rootContainer.appendComponentElement(this.getElement());
        }
        Screen.prototype.getElement = function () {
            return this.view.getElement();
        };
        Screen.prototype._bindCallbacks = function () {
            this._processClick = this._processClick.bind(this);
            this._processDblClick = this._processDblClick.bind(this);
            this._toggleVideoPlayback = this._toggleVideoPlayback.bind(this);
        };
        Screen.prototype._initUI = function (isNativeControls) {
            var config = {
                nativeControls: isNativeControls,
                callbacks: {
                    onWrapperMouseClick: this._processClick,
                    onWrapperMouseDblClick: this._processDblClick,
                },
                playbackViewElement: this._engine.getElement(),
            };
            this.view = new ScreenView(config);
        };
        Screen.prototype._bindEvents = function () {
            this._unbindEvents = this._eventEmitter.bindEvents([
                [UI_EVENTS.PLAY_OVERLAY_CLICK, this.view.focusOnNode, this.view],
                [UI_EVENTS.RESIZE, this._updateSizes],
                [EngineState$1.SRC_SET, this.view.resetBackground, this.view],
                [EngineState$1.METADATA_LOADED, this.view.resetAspectRatio, this.view],
            ], this);
        };
        Screen.prototype._updateSizes = function (_a) {
            var width = _a.width, height = _a.height;
            this.view.setBackgroundSize(width, height);
            this.view.resetAspectRatio();
        };
        Screen.prototype.showCursor = function () {
            this.view.showCursor();
        };
        Screen.prototype.hideCursor = function () {
            this.view.hideCursor();
        };
        Screen.prototype._processClick = function () {
            if (this._isClickProcessingDisabled) {
                return;
            }
            this._showPlaybackChangeIndicator();
            if (!this._fullScreenManager.isEnabled) {
                this._toggleVideoPlayback();
            }
            else {
                this._setDelayedPlaybackToggle();
            }
        };
        Screen.prototype._processDblClick = function () {
            if (this._isClickProcessingDisabled) {
                return;
            }
            if (this._fullScreenManager.isEnabled) {
                if (this._isDelayedPlaybackToggleExist) {
                    this._clearDelayedPlaybackToggle();
                    this._hideDelayedPlaybackChangeIndicator();
                }
                this._toggleFullScreen();
            }
        };
        Screen.prototype._showPlaybackChangeIndicator = function () {
            var state = this._engine.getCurrentState();
            if (state === EngineState$1.PLAY_REQUESTED || state === EngineState$1.PLAYING) {
                this._interactionIndicator.showPause();
            }
            else {
                this._interactionIndicator.showPlay();
            }
        };
        Screen.prototype._hideDelayedPlaybackChangeIndicator = function () {
            this._interactionIndicator.hideIcons();
        };
        Screen.prototype._setDelayedPlaybackToggle = function () {
            this._clearDelayedPlaybackToggle();
            this._delayedToggleVideoPlaybackTimeout = window.setTimeout(this._toggleVideoPlayback, PLAYBACK_CHANGE_TIMEOUT);
        };
        Screen.prototype._clearDelayedPlaybackToggle = function () {
            window.clearTimeout(this._delayedToggleVideoPlaybackTimeout);
            this._delayedToggleVideoPlaybackTimeout = null;
        };
        Object.defineProperty(Screen.prototype, "_isDelayedPlaybackToggleExist", {
            get: function () {
                return Boolean(this._delayedToggleVideoPlaybackTimeout);
            },
            enumerable: true,
            configurable: true
        });
        Screen.prototype._toggleVideoPlayback = function () {
            this._clearDelayedPlaybackToggle();
            var state = this._engine.getCurrentState();
            if (state === EngineState$1.PLAY_REQUESTED || state === EngineState$1.PLAYING) {
                this._engine.pause();
                this._eventEmitter.emit(UI_EVENTS.PAUSE_WITH_SCREEN_CLICK);
            }
            else {
                this._engine.play();
                this._eventEmitter.emit(UI_EVENTS.PLAY_WITH_SCREEN_CLICK);
            }
        };
        Screen.prototype._toggleFullScreen = function () {
            if (this._fullScreenManager.isInFullScreen) {
                this._fullScreenManager.exitFullScreen();
                this._eventEmitter.emit(UI_EVENTS.EXIT_FULL_SCREEN_WITH_SCREEN_CLICK);
            }
            else {
                this._fullScreenManager.enterFullScreen();
                this._eventEmitter.emit(UI_EVENTS.ENTER_FULL_SCREEN_WITH_SCREEN_CLICK);
            }
        };
        Screen.prototype.hide = function () {
            if (!this.isHidden) {
                this.view.hide();
                this.isHidden = true;
            }
        };
        Screen.prototype.show = function () {
            if (this.isHidden) {
                this.view.show();
                this.isHidden = false;
            }
        };
        /**
         * Method for setting video view mode.
         * @param viewMode Possible values are "REGULAR", "FILL", "BLUR".
         * With "REGULAR" video tag would try to be fully shown.
         * With "FILL" video tag would fill all space, removing black lines on sides.
         * With "BLUR" black lines would be filled with blured pixels from video.
         * @example
         * player.setVideoViewMode("BLUR");
         */
        Screen.prototype.setVideoViewMode = function (viewMode) {
            this.view.setViewMode(viewMode);
        };
        Screen.prototype.destroy = function () {
            this._unbindEvents();
            this._clearDelayedPlaybackToggle();
            this.view.destroy();
            this.view = null;
            this._interactionIndicator = null;
            this._eventEmitter = null;
            this._engine = null;
            this._fullScreenManager = null;
        };
        Screen.moduleName = 'screen';
        Screen.View = ScreenView;
        Screen.dependencies = [
            'engine',
            'eventEmitter',
            'config',
            'fullScreenManager',
            'interactionIndicator',
            'rootContainer',
        ];
        __decorate([
            playerAPI()
        ], Screen.prototype, "setVideoViewMode", null);
        return Screen;
    }());

    function anonymous$3(props
    /*``*/) {
    var out='<div class="'+(props.styles.iconContainer)+'"></div>';return out;
    }

    function anonymous$4(props
    /*``*/) {
    var out='<div class="'+(props.styles.icon)+'"> <svg class="'+(props.styles.playIcon)+' '+(props.styles.animatedIcon)+'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 14"> <path fill="#FFF" fill-rule="evenodd" d="M.079 0L0 14l10.5-7.181z"/> </svg></div>';return out;
    }

    function anonymous$5(props
    /*``*/) {
    var out='<div class="'+(props.styles.icon)+'"> <svg class="'+(props.styles.pauseIcon)+' '+(props.styles.animatedIcon)+'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 14"> <path fill="#FFF" fill-rule="evenodd" d="M7 0h3v14H7V0zM0 0h3v14H0V0z"/> </svg></div>';return out;
    }

    function anonymous$6(props
    /*``*/) {
    var out='<div class="'+(props.styles.icon)+'"> <div class="'+(props.styles.seconds)+'"> <span>'+(props.texts.SECONDS_COUNT)+'</span> </div> <svg class="'+(props.styles.animatedIcon)+'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"> <path fill="#FFF" fill-rule="evenodd" d="M17 0c4.59 0 8.84 1.87 11.9 4.93V1.7h3.4v10.2H22.1V8.5h5.44C24.99 5.27 21.25 3.4 17 3.4 9.52 3.4 3.4 9.52 3.4 17c0 7.48 6.12 13.6 13.6 13.6 7.48 0 13.6-6.12 13.6-13.6H34c0 9.35-7.65 17-17 17S0 26.35 0 17 7.65 0 17 0z"/> </svg></div>';return out;
    }

    function anonymous$7(props
    /*``*/) {
    var out='<div class="'+(props.styles.icon)+'"> <div class="'+(props.styles.seconds)+'"> <span>'+(props.texts.SECONDS_COUNT)+'</span> </div> <svg class="'+(props.styles.animatedIcon)+'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"> <path fill="#FFF" fill-rule="evenodd" d="M17 0C12.41 0 8.16 1.87 5.1 4.93V1.7H1.7v10.2h10.2V8.5H6.46C9.01 5.27 12.75 3.4 17 3.4c7.48 0 13.6 6.12 13.6 13.6 0 7.48-6.12 13.6-13.6 13.6-7.48 0-13.6-6.12-13.6-13.6H0c0 9.35 7.65 17 17 17s17-7.65 17-17S26.35 0 17 0z"/> </svg></div>';return out;
    }

    function anonymous$8(props
    /*``*/) {
    var out='<div class="'+(props.styles.icon)+'"> <svg class="'+(props.styles.animatedIcon)+'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 14"> <g fill="none" fill-rule="evenodd"> <path fill="#FFF" d="M0 3.919h2.993v5.97H0V3.92zm2.995-.015L7 .924v12L2.995 9.882v-5.98z"/> <path stroke="#FFF" d="M12.793 13.716a9.607 9.607 0 0 0 0-13.586M9.853 10.837a5.45 5.45 0 0 0 0-7.707"/> </g> </svg></div>';return out;
    }

    function anonymous$9(props
    /*``*/) {
    var out='<div class="'+(props.styles.icon)+'"> <svg class="'+(props.styles.animatedIcon)+'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 14"> <g fill="none" fill-rule="evenodd"> <path fill="#FFF" d="M0 3.919h2.993v5.97H0V3.92zm2.995-.015L7 .924v12L2.995 9.882v-5.98z"/> <path stroke="#FFF" d="M9.853 10.837a5.45 5.45 0 0 0 0-7.707"/> </g> </svg></div>';return out;
    }

    function anonymous$10(props
    /*``*/) {
    var out='<div class="'+(props.styles.icon)+'"> <svg class="'+(props.styles.animatedIcon)+'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 14"> <g fill="#FFF" fill-rule="evenodd"> <path fill="#FFF" d="M0 3.919h2.993v5.97H0V3.92zm2.995-.015L7 .924v12L2.995 9.882v-5.98z"/> <path stroke="#FFF" d="M13 6.257l-2.05-2.05-.743.743L12.257 7l-2.05 2.05.743.743L13 7.743l2.05 2.05.743-.743L13.743 7l2.05-2.05-.743-.743L13 6.257z"/> </g> </svg></div>';return out;
    }

    var css$3 = ".interaction-indicator__controlButton___2Y9N6 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0;\n  cursor: pointer;\n  -webkit-transition-duration: .2s;\n          transition-duration: .2s;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  opacity: 1;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background-color: transparent;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .interaction-indicator__controlButton___2Y9N6:hover {\n    opacity: .7; }\n  .interaction-indicator__hidden___2uTS- {\n  visibility: hidden !important;\n  width: 0 !important;\n  min-width: 0 !important;\n  height: 0 !important;\n  min-height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  opacity: 0 !important; }\n  .interaction-indicator__iconContainer___2r3Wb {\n  position: absolute;\n  z-index: 100;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  pointer-events: none;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .interaction-indicator__iconContainer___2r3Wb .interaction-indicator__icon___1pjM4 {\n    font-size: 9px;\n    line-height: 9px;\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-animation-name: interaction-indicator__fadeOut___P6kY6;\n            animation-name: interaction-indicator__fadeOut___P6kY6;\n    -webkit-animation-duration: .5s;\n            animation-duration: .5s;\n    opacity: 0;\n    border-radius: 100px;\n    background-color: rgba(0, 0, 0, 0.5);\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .interaction-indicator__iconContainer___2r3Wb .interaction-indicator__animatedIcon___3cK8N {\n    -webkit-animation-name: interaction-indicator__iconSize___IYB2z;\n            animation-name: interaction-indicator__iconSize___IYB2z;\n    -webkit-animation-duration: .5s;\n            animation-duration: .5s; }\n  .interaction-indicator__iconContainer___2r3Wb .interaction-indicator__playIcon___1XtXN {\n    position: relative;\n    left: 3px; }\n  .interaction-indicator__iconContainer___2r3Wb .interaction-indicator__pauseIcon___qH2VX {\n    margin: 5px 0; }\n  .interaction-indicator__iconContainer___2r3Wb .interaction-indicator__seconds___2TlaJ {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    min-width: 5px;\n    min-height: 8px;\n    color: white;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .interaction-indicator__iconContainer___2r3Wb .interaction-indicator__seconds___2TlaJ span {\n      display: block; }\n  @-webkit-keyframes interaction-indicator__iconSize___IYB2z {\n  from {\n    width: 22px;\n    height: 22px; }\n  to {\n    width: 30px;\n    height: 30px; } }\n  @keyframes interaction-indicator__iconSize___IYB2z {\n  from {\n    width: 22px;\n    height: 22px; }\n  to {\n    width: 30px;\n    height: 30px; } }\n  @-webkit-keyframes interaction-indicator__fadeOut___P6kY6 {\n  from {\n    width: 22px;\n    height: 22px;\n    padding: 19px;\n    opacity: .9; }\n  to {\n    font-size: 14px;\n    line-height: 14px;\n    width: 30px;\n    height: 30px;\n    padding: 25px;\n    opacity: 0; } }\n  @keyframes interaction-indicator__fadeOut___P6kY6 {\n  from {\n    width: 22px;\n    height: 22px;\n    padding: 19px;\n    opacity: .9; }\n  to {\n    font-size: 14px;\n    line-height: 14px;\n    width: 30px;\n    height: 30px;\n    padding: 25px;\n    opacity: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyYWN0aW9uLWluZGljYXRvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQWM7RUFBZCxxQkFBYztFQUFkLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlDQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIscUNBQTZCO0VBQTdCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLHlCQUF3QjtNQUF4QixzQkFBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLDBCQUFvQjtNQUFwQix1QkFBb0I7VUFBcEIsb0JBQW9CLEVBQUU7RUFDdEI7SUFDRSxZQUFZLEVBQUU7RUFFbEI7RUFDRSw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsc0JBQXNCLEVBQUU7RUFFMUI7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLE9BQU87RUFDUCxTQUFTO0VBQ1QsVUFBVTtFQUNWLFFBQVE7RUFDUixxQkFBYztFQUFkLHFCQUFjO0VBQWQsY0FBYztFQUNkLHFCQUFxQjtFQUNyQix5QkFBd0I7TUFBeEIsc0JBQXdCO1VBQXhCLHdCQUF3QjtFQUN4QiwwQkFBb0I7TUFBcEIsdUJBQW9CO1VBQXBCLG9CQUFvQixFQUFFO0VBQ3RCO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIscUJBQWM7SUFBZCxxQkFBYztJQUFkLGNBQWM7SUFDZCwrREFBd0I7WUFBeEIsdURBQXdCO0lBQ3hCLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixxQ0FBcUM7SUFDckMseUJBQXdCO1FBQXhCLHNCQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsMEJBQW9CO1FBQXBCLHVCQUFvQjtZQUFwQixvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLGdFQUF5QjtZQUF6Qix3REFBeUI7SUFDekIsZ0NBQXdCO1lBQXhCLHdCQUF3QixFQUFFO0VBQzVCO0lBQ0UsbUJBQW1CO0lBQ25CLFVBQVUsRUFBRTtFQUNkO0lBQ0UsY0FBYyxFQUFFO0VBQ2xCO0lBQ0UsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFFBQVE7SUFDUixxQkFBYztJQUFkLHFCQUFjO0lBQWQsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHlCQUF3QjtRQUF4QixzQkFBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLDBCQUFvQjtRQUFwQix1QkFBb0I7WUFBcEIsb0JBQW9CLEVBQUU7RUFDdEI7TUFDRSxlQUFlLEVBQUU7RUFFdkI7RUFDRTtJQUNFLFlBQVk7SUFDWixhQUFhLEVBQUU7RUFDakI7SUFDRSxZQUFZO0lBQ1osYUFBYSxFQUFFLEVBQUU7RUFOckI7RUFDRTtJQUNFLFlBQVk7SUFDWixhQUFhLEVBQUU7RUFDakI7SUFDRSxZQUFZO0lBQ1osYUFBYSxFQUFFLEVBQUU7RUFFckI7RUFDRTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLFlBQVksRUFBRTtFQUNoQjtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsV0FBVyxFQUFFLEVBQUU7RUFabkI7RUFDRTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLFlBQVksRUFBRTtFQUNoQjtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsV0FBVyxFQUFFLEVBQUUiLCJmaWxlIjoiaW50ZXJhY3Rpb24taW5kaWNhdG9yLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udHJvbEJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuY29udHJvbEJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogLjc7IH1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB3aWR0aDogMCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50OyB9XG5cbi5pY29uQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIC5pY29uQ29udGFpbmVyIC5pY29uIHtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBsaW5lLWhlaWdodDogOXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjVzO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLmljb25Db250YWluZXIgLmFuaW1hdGVkSWNvbiB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGljb25TaXplO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjVzOyB9XG4gIC5pY29uQ29udGFpbmVyIC5wbGF5SWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDNweDsgfVxuICAuaWNvbkNvbnRhaW5lciAucGF1c2VJY29uIHtcbiAgICBtYXJnaW46IDVweCAwOyB9XG4gIC5pY29uQ29udGFpbmVyIC5zZWNvbmRzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWluLXdpZHRoOiA1cHg7XG4gICAgbWluLWhlaWdodDogOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgLmljb25Db250YWluZXIgLnNlY29uZHMgc3BhbiB7XG4gICAgICBkaXNwbGF5OiBibG9jazsgfVxuXG5Aa2V5ZnJhbWVzIGljb25TaXplIHtcbiAgZnJvbSB7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgaGVpZ2h0OiAyMnB4OyB9XG4gIHRvIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7IH0gfVxuXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xuICBmcm9tIHtcbiAgICB3aWR0aDogMjJweDtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgcGFkZGluZzogMTlweDtcbiAgICBvcGFjaXR5OiAuOTsgfVxuICB0byB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIG9wYWNpdHk6IDA7IH0gfVxuIl19 */";
    var styles$3 = {"controlButton":"interaction-indicator__controlButton___2Y9N6","hidden":"interaction-indicator__hidden___2uTS-","iconContainer":"interaction-indicator__iconContainer___2r3Wb","icon":"interaction-indicator__icon___1pjM4","fadeOut":"interaction-indicator__fadeOut___P6kY6","animatedIcon":"interaction-indicator__animatedIcon___3cK8N","iconSize":"interaction-indicator__iconSize___IYB2z","playIcon":"interaction-indicator__playIcon___1XtXN","pauseIcon":"interaction-indicator__pauseIcon___qH2VX","seconds":"interaction-indicator__seconds___2TlaJ"};
    styleInject(css$3);

    var SECONDS_COUNT = 5;
    var InteractionIndicatorView = /** @class */ (function (_super) {
        __extends(InteractionIndicatorView, _super);
        function InteractionIndicatorView() {
            var _this = _super.call(this) || this;
            _this._$rootElement = htmlToElement(anonymous$3({
                styles: _this.styleNames,
            }));
            _this._playIcon = anonymous$4({
                styles: _this.styleNames,
            });
            _this._pauseIcon = anonymous$5({
                styles: _this.styleNames,
            });
            _this._forwardIcon = anonymous$6({
                texts: {
                    SECONDS_COUNT: SECONDS_COUNT,
                },
                styles: _this.styleNames,
            });
            _this._rewindIcon = anonymous$7({
                texts: {
                    SECONDS_COUNT: SECONDS_COUNT,
                },
                styles: _this.styleNames,
            });
            _this._increaseVolumeIcon = anonymous$8({
                styles: _this.styleNames,
            });
            _this._decreaseVolumeIcon = anonymous$9({
                styles: _this.styleNames,
            });
            _this._muteIcon = anonymous$10({
                styles: _this.styleNames,
            });
            return _this;
        }
        InteractionIndicatorView.prototype.activatePlayIcon = function () {
            this._$rootElement.innerHTML = this._playIcon;
        };
        InteractionIndicatorView.prototype.activatePauseIcon = function () {
            this._$rootElement.innerHTML = this._pauseIcon;
        };
        InteractionIndicatorView.prototype.activateForwardIcon = function () {
            this._$rootElement.innerHTML = this._forwardIcon;
        };
        InteractionIndicatorView.prototype.activateRewindIcon = function () {
            this._$rootElement.innerHTML = this._rewindIcon;
        };
        InteractionIndicatorView.prototype.activateIncreaseVolumeIcon = function () {
            this._$rootElement.innerHTML = this._increaseVolumeIcon;
        };
        InteractionIndicatorView.prototype.activateDecreaseVolumeIcon = function () {
            this._$rootElement.innerHTML = this._decreaseVolumeIcon;
        };
        InteractionIndicatorView.prototype.activateMuteVolumeIcon = function () {
            this._$rootElement.innerHTML = this._muteIcon;
        };
        InteractionIndicatorView.prototype.deactivateIcon = function () {
            this._$rootElement.innerHTML = '';
        };
        InteractionIndicatorView.prototype.hide = function () {
            this._$rootElement.classList.add(this.styleNames.hidden);
        };
        InteractionIndicatorView.prototype.show = function () {
            this._$rootElement.classList.remove(this.styleNames.hidden);
        };
        InteractionIndicatorView.prototype.getElement = function () {
            return this._$rootElement;
        };
        InteractionIndicatorView.prototype.destroy = function () {
            if (this._$rootElement.parentNode) {
                this._$rootElement.parentNode.removeChild(this._$rootElement);
            }
            this._$rootElement = null;
        };
        return InteractionIndicatorView;
    }(View));
    InteractionIndicatorView.extendStyleNames(styles$3);

    var InteractionIndicator = /** @class */ (function () {
        function InteractionIndicator(_a) {
            var eventEmitter = _a.eventEmitter, engine = _a.engine, config = _a.config, rootContainer = _a.rootContainer;
            this._eventEmitter = eventEmitter;
            this._engine = engine;
            this._initUI();
            this._bindEvents();
            rootContainer.appendComponentElement(this.getElement());
            if (config.hideMainUI) {
                this.hide();
            }
        }
        InteractionIndicator.prototype.getElement = function () {
            return this.view.getElement();
        };
        InteractionIndicator.prototype._initUI = function () {
            this.view = new InteractionIndicatorView();
        };
        InteractionIndicator.prototype._bindEvents = function () {
            this._unbindEvents = this._eventEmitter.bindEvents([
                [
                    UI_EVENTS.TOGGLE_PLAYBACK_WITH_KEYBOARD,
                    this._showPlaybackChangeIndicator,
                ],
                [UI_EVENTS.GO_BACKWARD_WITH_KEYBOARD, this.showRewind],
                [UI_EVENTS.GO_FORWARD_WITH_KEYBOARD, this.showForward],
                [UI_EVENTS.INCREASE_VOLUME_WITH_KEYBOARD, this.showIncreaseVolume],
                [UI_EVENTS.DECREASE_VOLUME_WITH_KEYBOARD, this.showDecreaseVolume],
                [UI_EVENTS.MUTE_WITH_KEYBOARD, this.showMute],
                [UI_EVENTS.UNMUTE_WITH_KEYBOARD, this.showIncreaseVolume],
            ], this);
        };
        InteractionIndicator.prototype.showPause = function () {
            this.view.activatePauseIcon();
        };
        InteractionIndicator.prototype.showPlay = function () {
            this.view.activatePlayIcon();
        };
        InteractionIndicator.prototype.showRewind = function () {
            this.view.activateRewindIcon();
        };
        InteractionIndicator.prototype.showForward = function () {
            this.view.activateForwardIcon();
        };
        InteractionIndicator.prototype.showMute = function () {
            this.view.activateMuteVolumeIcon();
        };
        InteractionIndicator.prototype.showIncreaseVolume = function () {
            this.view.activateIncreaseVolumeIcon();
        };
        InteractionIndicator.prototype.showDecreaseVolume = function () {
            this.view.activateDecreaseVolumeIcon();
        };
        InteractionIndicator.prototype.hideIcons = function () {
            this.view.deactivateIcon();
            this._eventEmitter.emit(UI_EVENTS.HIDE_INTERACTION_INDICATOR);
        };
        InteractionIndicator.prototype.show = function () {
            this.view.show();
        };
        InteractionIndicator.prototype.hide = function () {
            this.view.hide();
        };
        InteractionIndicator.prototype._showPlaybackChangeIndicator = function () {
            var state = this._engine.getCurrentState();
            if (state === EngineState$1.PLAY_REQUESTED || state === EngineState$1.PLAYING) {
                this.view.activatePauseIcon();
            }
            else {
                this.view.activatePlayIcon();
            }
        };
        InteractionIndicator.prototype.destroy = function () {
            this._unbindEvents();
            this.view.destroy();
            this.view = null;
            this._eventEmitter = null;
            this._engine = null;
        };
        InteractionIndicator.moduleName = 'interactionIndicator';
        InteractionIndicator.View = InteractionIndicatorView;
        InteractionIndicator.dependencies = ['engine', 'eventEmitter', 'config', 'rootContainer'];
        return InteractionIndicator;
    }());

    function anonymous$11(props
    /*``*/) {
    var out='<div class="'+(props.styles.overlay)+' '+(props.styles.active)+'" data-playable-hook="overlay" > <div class="'+(props.styles.poster)+'" data-playable-hook="overlay-content" > </div> <div class="'+(props.styles.icon)+'" data-playable-hook="overlay-play-button" > <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" preserveAspectRatio="xMidYMin slice" width="100%" style="padding-bottom: 100%; height: 1px; overflow: visible" > <!-- padding-bottom: 100% * height/width --> <g         fill="none"         fill-rule="evenodd" > <circle           cx="18" cy="18" r="17" class="'+(props.themeStyles.overlayPlaySvgStroke)+'"           stroke-width="2" /> <path class="'+(props.themeStyles.overlayPlaySvgFill)+'" d="M23.935 17.708l-10.313 6.033V11.676z" /> </g> </svg> </div></div>';return out;
    }

    var overlayViewTheme = {
        overlayPlaySvgFill: {
            fill: function (data) { return data.color; },
        },
        overlayPlaySvgStroke: {
            stroke: function (data) { return data.color; },
        },
    };

    var css$4 = ".overlay__controlButton___1ASmF {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0;\n  cursor: pointer;\n  -webkit-transition-duration: .2s;\n          transition-duration: .2s;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  opacity: 1;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background-color: transparent;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .overlay__controlButton___1ASmF:hover {\n    opacity: .7; }\n  .overlay__hidden___1Vt3d {\n  visibility: hidden !important;\n  width: 0 !important;\n  min-width: 0 !important;\n  height: 0 !important;\n  min-height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  opacity: 0 !important; }\n  .overlay__overlay___3RC8o {\n  position: absolute;\n  z-index: 100;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: none; }\n  .overlay__overlay___3RC8o.overlay__active___3k0Mi {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .overlay__poster___1mX3C {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: black no-repeat center;\n  background-size: cover;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .overlay__poster___1mX3C:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  content: '';\n  background-color: rgba(0, 0, 0, 0.35); }\n  .overlay__icon___3zDVy {\n  position: relative;\n  width: 71px;\n  height: 71px;\n  cursor: pointer;\n  opacity: 1; }\n  div[data-playable-hook='player-container'][data-playable-max-width~=\"550px\"] .overlay__icon___3zDVy {\n    width: 54px;\n    height: 54px; }\n  div[data-playable-hook='player-container'][data-playable-max-width~=\"400px\"] .overlay__icon___3zDVy {\n    width: 36px;\n    height: 36px; }\n  .overlay__icon___3zDVy:hover {\n    opacity: .8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm92ZXJsYXkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFjO0VBQWQscUJBQWM7RUFBZCxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLHFDQUE2QjtFQUE3Qiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsY0FBYztFQUNkLDhCQUE4QjtFQUM5Qix5QkFBd0I7TUFBeEIsc0JBQXdCO1VBQXhCLHdCQUF3QjtFQUN4QiwwQkFBb0I7TUFBcEIsdUJBQW9CO1VBQXBCLG9CQUFvQixFQUFFO0VBQ3RCO0lBQ0UsWUFBWSxFQUFFO0VBRWxCO0VBQ0UsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHNCQUFzQixFQUFFO0VBRTFCO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixPQUFPO0VBQ1AsU0FBUztFQUNULFVBQVU7RUFDVixRQUFRO0VBQ1IsY0FBYyxFQUFFO0VBQ2hCO0lBQ0UscUJBQWM7SUFBZCxxQkFBYztJQUFkLGNBQWM7SUFDZCx5QkFBd0I7UUFBeEIsc0JBQXdCO1lBQXhCLHdCQUF3QjtJQUN4QiwwQkFBb0I7UUFBcEIsdUJBQW9CO1lBQXBCLG9CQUFvQixFQUFFO0VBRTFCO0VBQ0UsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxTQUFTO0VBQ1QsVUFBVTtFQUNWLFFBQVE7RUFDUixZQUFZO0VBQ1osYUFBYTtFQUNiLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIseUJBQXdCO01BQXhCLHNCQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsMEJBQW9CO01BQXBCLHVCQUFvQjtVQUFwQixvQkFBb0IsRUFBRTtFQUV4QjtFQUNFLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLHNDQUFzQyxFQUFFO0VBRTFDO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBRTtFQUNiO0lBQ0UsWUFBWTtJQUNaLGFBQWEsRUFBRTtFQUNqQjtJQUNFLFlBQVk7SUFDWixhQUFhLEVBQUU7RUFDakI7SUFDRSxZQUFZLEVBQUUiLCJmaWxlIjoib3ZlcmxheS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRyb2xCdXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLmNvbnRyb2xCdXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IC43OyB9XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDsgfVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IG5vbmU7IH1cbiAgLm92ZXJsYXkuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLnBvc3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBibGFjayBuby1yZXBlYXQgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4ucG9zdGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb250ZW50OiAnJztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM1KTsgfVxuXG4uaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDcxcHg7XG4gIGhlaWdodDogNzFweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAxOyB9XG4gIGRpdltkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXVtkYXRhLXBsYXlhYmxlLW1heC13aWR0aH49XCI1NTBweFwiXSAuaWNvbiB7XG4gICAgd2lkdGg6IDU0cHg7XG4gICAgaGVpZ2h0OiA1NHB4OyB9XG4gIGRpdltkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXVtkYXRhLXBsYXlhYmxlLW1heC13aWR0aH49XCI0MDBweFwiXSAuaWNvbiB7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAzNnB4OyB9XG4gIC5pY29uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAuODsgfVxuIl19 */";
    var styles$4 = {"controlButton":"overlay__controlButton___1ASmF","hidden":"overlay__hidden___1Vt3d","overlay":"overlay__overlay___3RC8o","active":"overlay__active___3k0Mi","poster":"overlay__poster___1mX3C","icon":"overlay__icon___3zDVy"};
    styleInject(css$4);

    var OverlayView = /** @class */ (function (_super) {
        __extends(OverlayView, _super);
        function OverlayView(config) {
            var _this = _super.call(this, config.theme) || this;
            var callbacks = config.callbacks;
            _this._callbacks = callbacks;
            _this._initDOM();
            _this._bindEvents();
            return _this;
        }
        OverlayView.prototype._initDOM = function () {
            this._$rootElement = htmlToElement(anonymous$11({
                styles: this.styleNames,
                themeStyles: this.themeStyles,
            }));
            this._$content = getElementByHook(this._$rootElement, 'overlay-content');
            this._$playButton = getElementByHook(this._$rootElement, 'overlay-play-button');
        };
        OverlayView.prototype._bindEvents = function () {
            this._$playButton.addEventListener('click', this._callbacks.onPlayClick);
        };
        OverlayView.prototype._unbindEvents = function () {
            this._$playButton.removeEventListener('click', this._callbacks.onPlayClick);
        };
        OverlayView.prototype.getElement = function () {
            return this._$rootElement;
        };
        OverlayView.prototype.hideContent = function () {
            this._$rootElement.classList.remove(this.styleNames.active);
        };
        OverlayView.prototype.showContent = function () {
            this._$rootElement.classList.add(this.styleNames.active);
        };
        OverlayView.prototype.hide = function () {
            this._$rootElement.classList.add(this.styleNames.hidden);
        };
        OverlayView.prototype.show = function () {
            this._$rootElement.classList.remove(this.styleNames.hidden);
        };
        OverlayView.prototype.setPoster = function (src) {
            this._$content.style.backgroundImage = src ? "url('" + src + "')" : 'none';
        };
        OverlayView.prototype.destroy = function () {
            this._unbindEvents();
            if (this._$rootElement.parentNode) {
                this._$rootElement.parentNode.removeChild(this._$rootElement);
            }
            this._$rootElement = null;
            this._$content = null;
            this._$playButton = null;
        };
        return OverlayView;
    }(View));
    OverlayView.setTheme(overlayViewTheme);
    OverlayView.extendStyleNames(styles$4);

    var Overlay = /** @class */ (function () {
        function Overlay(_a) {
            var eventEmitter = _a.eventEmitter, engine = _a.engine, rootContainer = _a.rootContainer, theme = _a.theme, config = _a.config;
            this.isHidden = false;
            this._eventEmitter = eventEmitter;
            this._engine = engine;
            this._theme = theme;
            this._bindEvents();
            this._initUI();
            this.setPoster(config.poster);
            if (config.hideOverlay) {
                this.hide();
            }
            rootContainer.appendComponentElement(this.getElement());
        }
        Overlay.prototype.getElement = function () {
            return this.view.getElement();
        };
        Overlay.prototype._initUI = function () {
            var viewConfig = {
                callbacks: {
                    onPlayClick: this._playVideo.bind(this),
                },
                theme: this._theme,
            };
            this.view = new Overlay.View(viewConfig);
        };
        Overlay.prototype._bindEvents = function () {
            this._unbindEvents = this._eventEmitter.bindEvents([
                [VIDEO_EVENTS.STATE_CHANGED, this._updatePlayingState],
                [VIDEO_EVENTS.RESET, this._tryShowContent],
            ], this);
        };
        Overlay.prototype._updatePlayingState = function (_a) {
            var nextState = _a.nextState;
            if (nextState === EngineState$1.PLAY_REQUESTED) {
                this._hideContent();
            }
            else if (nextState === EngineState$1.ENDED ||
                nextState === EngineState$1.SRC_SET) {
                this._tryShowContent();
            }
        };
        Overlay.prototype._playVideo = function () {
            this._engine.play();
            this._eventEmitter.emit(UI_EVENTS.PLAY_OVERLAY_CLICK);
        };
        Overlay.prototype._tryShowContent = function () {
            if (this._engine.isPaused) {
                this._showContent();
            }
        };
        Overlay.prototype._hideContent = function () {
            this.view.hideContent();
        };
        Overlay.prototype._showContent = function () {
            this.view.showContent();
        };
        /**
         * Method for completely hiding player overlay. It's not gonna appear on initial state of player and when video is ended.
         * @example
         * player.showOverlay();
         */
        Overlay.prototype.hide = function () {
            this.isHidden = true;
            this.view.hide();
        };
        /**
         * Method for showing player overlay after it was completely hidden with `player.hideOverlay()`.
         * @example
         * player.showOverlay();
         */
        Overlay.prototype.show = function () {
            this.isHidden = false;
            this.view.show();
        };
        /**
         * Method for setting overlay poster
         * @param src - Source of image
         * @example
         * player.setPoster('https://example.com/poster.png');
         *
         */
        Overlay.prototype.setPoster = function (src) {
            this.view.setPoster(src);
        };
        Overlay.prototype.destroy = function () {
            this._unbindEvents();
            this.view.destroy();
            this.view = null;
            this._eventEmitter = null;
            this._engine = null;
        };
        Overlay.moduleName = 'overlay';
        Overlay.View = OverlayView;
        Overlay.dependencies = [
            'engine',
            'eventEmitter',
            'rootContainer',
            'theme',
            'config',
        ];
        __decorate([
            playerAPI('hideOverlay')
        ], Overlay.prototype, "hide", null);
        __decorate([
            playerAPI('showOverlay')
        ], Overlay.prototype, "show", null);
        __decorate([
            playerAPI()
        ], Overlay.prototype, "setPoster", null);
        return Overlay;
    }());

    function anonymous$12(props
    /*``*/) {
    var out='<div class="'+(props.styles.loader)+' '+(props.styles.active)+'" data-playable-hook="loader" ></div>';return out;
    }

    var css$5 = ".loader__controlButton___1YHb4 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0;\n  cursor: pointer;\n  -webkit-transition-duration: .2s;\n          transition-duration: .2s;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  opacity: 1;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background-color: transparent;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .loader__controlButton___1YHb4:hover {\n    opacity: .7; }\n  .loader__hidden___3MeyV {\n  visibility: hidden !important;\n  width: 0 !important;\n  min-width: 0 !important;\n  height: 0 !important;\n  min-height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  opacity: 0 !important; }\n  .loader__loader___1J20N {\n  position: absolute;\n  z-index: 90;\n  top: 50%;\n  left: 50%;\n  display: none;\n  clip: rect(0, 48px, 48px, 24px);\n  width: 42px;\n  height: 42px;\n  margin-top: -21px;\n  margin-left: -21px;\n  -webkit-animation: loader__rotate___3K3Iv 1s linear infinite;\n          animation: loader__rotate___3K3Iv 1s linear infinite;\n  color: white; }\n  .loader__loader___1J20N.loader__active___29tvY {\n    display: block; }\n  .loader__loader___1J20N::after {\n    clip: rect(4px, 48px, 48px, 24px);\n    -webkit-animation: loader__clip___1RIdi 1s linear infinite;\n            animation: loader__clip___1RIdi 1s linear infinite;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    content: '';\n    border: 3px solid currentColor;\n    border-radius: 50%; }\n  .loader__loader___1J20N::before {\n    clip: rect(0, 48px, 48px, 24px);\n    -webkit-animation: loader__clip-reverse___20o6x 1s linear infinite;\n            animation: loader__clip-reverse___20o6x 1s linear infinite;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    content: '';\n    border: 3px solid currentColor;\n    border-radius: 50%; }\n  @-webkit-keyframes loader__clip___1RIdi {\n  50% {\n    clip: rect(42px, 48px, 48px, 24px);\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; } }\n  @keyframes loader__clip___1RIdi {\n  50% {\n    clip: rect(42px, 48px, 48px, 24px);\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; } }\n  @-webkit-keyframes loader__clip-reverse___20o6x {\n  50% {\n    clip: rect(0, 48px, 9px, 24px);\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg);\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; } }\n  @keyframes loader__clip-reverse___20o6x {\n  50% {\n    clip: rect(0, 48px, 9px, 24px);\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg);\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; } }\n  @-webkit-keyframes loader__rotate___3K3Iv {\n  from {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out; }\n  45% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n    color: white; }\n  55% {\n    -webkit-transform: rotate(54deg);\n            transform: rotate(54deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  @keyframes loader__rotate___3K3Iv {\n  from {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out; }\n  45% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n    color: white; }\n  55% {\n    -webkit-transform: rotate(54deg);\n            transform: rotate(54deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQWM7RUFBZCxxQkFBYztFQUFkLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlDQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIscUNBQTZCO0VBQTdCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLHlCQUF3QjtNQUF4QixzQkFBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLDBCQUFvQjtNQUFwQix1QkFBb0I7VUFBcEIsb0JBQW9CLEVBQUU7RUFDdEI7SUFDRSxZQUFZLEVBQUU7RUFFbEI7RUFDRSw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsc0JBQXNCLEVBQUU7RUFFMUI7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0VBQ1YsY0FBYztFQUNkLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsNkRBQXFDO1VBQXJDLHFEQUFxQztFQUNyQyxhQUFhLEVBQUU7RUFDZjtJQUNFLGVBQWUsRUFBRTtFQUNuQjtJQUNFLGtDQUFrQztJQUNsQywyREFBbUM7WUFBbkMsbURBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsU0FBUztJQUNULFVBQVU7SUFDVixRQUFRO0lBQ1IsWUFBWTtJQUNaLCtCQUErQjtJQUMvQixtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLGdDQUFnQztJQUNoQyxtRUFBMkM7WUFBM0MsMkRBQTJDO0lBQzNDLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsU0FBUztJQUNULFVBQVU7SUFDVixRQUFRO0lBQ1IsWUFBWTtJQUNaLCtCQUErQjtJQUMvQixtQkFBbUIsRUFBRTtFQUV6QjtFQUNFO0lBQ0UsbUNBQW1DO0lBQ25DLCtDQUF1QztZQUF2Qyx1Q0FBdUMsRUFBRSxFQUFFO0VBSC9DO0VBQ0U7SUFDRSxtQ0FBbUM7SUFDbkMsK0NBQXVDO1lBQXZDLHVDQUF1QyxFQUFFLEVBQUU7RUFFL0M7RUFDRTtJQUNFLCtCQUErQjtJQUMvQixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLCtDQUF1QztZQUF2Qyx1Q0FBdUMsRUFBRSxFQUFFO0VBSi9DO0VBQ0U7SUFDRSwrQkFBK0I7SUFDL0Isa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQiwrQ0FBdUM7WUFBdkMsdUNBQXVDLEVBQUUsRUFBRTtFQUUvQztFQUNFO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQiw0Q0FBb0M7WUFBcEMsb0NBQW9DLEVBQUU7RUFDeEM7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLGFBQWEsRUFBRTtFQUNqQjtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBRTtFQUM3QjtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBRSxFQUFFO0VBVmxDO0VBQ0U7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLDRDQUFvQztZQUFwQyxvQ0FBb0MsRUFBRTtFQUN4QztJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsYUFBYSxFQUFFO0VBQ2pCO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFFO0VBQzdCO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQixFQUFFLEVBQUUiLCJmaWxlIjoibG9hZGVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udHJvbEJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuY29udHJvbEJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogLjc7IH1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB3aWR0aDogMCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50OyB9XG5cbi5sb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDkwO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBkaXNwbGF5OiBub25lO1xuICBjbGlwOiByZWN0KDAsIDQ4cHgsIDQ4cHgsIDI0cHgpO1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBtYXJnaW4tdG9wOiAtMjFweDtcbiAgbWFyZ2luLWxlZnQ6IC0yMXB4O1xuICBhbmltYXRpb246IHJvdGF0ZSAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuICAubG9hZGVyLmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbiAgLmxvYWRlcjo6YWZ0ZXIge1xuICAgIGNsaXA6IHJlY3QoNHB4LCA0OHB4LCA0OHB4LCAyNHB4KTtcbiAgICBhbmltYXRpb246IGNsaXAgMXMgbGluZWFyIGluZmluaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgY29udGVudDogJyc7XG4gICAgYm9yZGVyOiAzcHggc29saWQgY3VycmVudENvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxuICAubG9hZGVyOjpiZWZvcmUge1xuICAgIGNsaXA6IHJlY3QoMCwgNDhweCwgNDhweCwgMjRweCk7XG4gICAgYW5pbWF0aW9uOiBjbGlwLXJldmVyc2UgMXMgbGluZWFyIGluZmluaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgY29udGVudDogJyc7XG4gICAgYm9yZGVyOiAzcHggc29saWQgY3VycmVudENvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxuXG5Aa2V5ZnJhbWVzIGNsaXAge1xuICA1MCUge1xuICAgIGNsaXA6IHJlY3QoNDJweCwgNDhweCwgNDhweCwgMjRweCk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IH0gfVxuXG5Aa2V5ZnJhbWVzIGNsaXAtcmV2ZXJzZSB7XG4gIDUwJSB7XG4gICAgY2xpcDogcmVjdCgwLCA0OHB4LCA5cHgsIDI0cHgpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IH0gfVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0OyB9XG4gIDQ1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMThkZWcpO1xuICAgIGNvbG9yOiB3aGl0ZTsgfVxuICA1NSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDU0ZGVnKTsgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XG4iXX0= */";
    var styles$5 = {"controlButton":"loader__controlButton___1YHb4","hidden":"loader__hidden___3MeyV","loader":"loader__loader___1J20N","rotate":"loader__rotate___3K3Iv","active":"loader__active___29tvY","clip":"loader__clip___1RIdi","clip-reverse":"loader__clip-reverse___20o6x"};
    styleInject(css$5);

    var LoaderView = /** @class */ (function (_super) {
        __extends(LoaderView, _super);
        function LoaderView() {
            var _this = _super.call(this) || this;
            _this._$rootElement = htmlToElement(anonymous$12({
                styles: _this.styleNames,
            }));
            return _this;
        }
        LoaderView.prototype.getElement = function () {
            return this._$rootElement;
        };
        LoaderView.prototype.showContent = function () {
            this._$rootElement.classList.add(this.styleNames.active);
        };
        LoaderView.prototype.hideContent = function () {
            this._$rootElement.classList.remove(this.styleNames.active);
        };
        LoaderView.prototype.hide = function () {
            this._$rootElement.classList.add(this.styleNames.hidden);
        };
        LoaderView.prototype.show = function () {
            this._$rootElement.classList.remove(this.styleNames.hidden);
        };
        LoaderView.prototype.destroy = function () {
            if (this._$rootElement.parentNode) {
                this._$rootElement.parentNode.removeChild(this._$rootElement);
            }
            this._$rootElement = null;
        };
        return LoaderView;
    }(View));
    LoaderView.extendStyleNames(styles$5);

    var DELAYED_SHOW_TIMEOUT = 100;
    var Loader = /** @class */ (function () {
        function Loader(_a) {
            var config = _a.config, eventEmitter = _a.eventEmitter, engine = _a.engine, rootContainer = _a.rootContainer;
            this._eventEmitter = eventEmitter;
            this.isHidden = false;
            this._engine = engine;
            this._bindCallbacks();
            this._initUI();
            this._bindEvents();
            this._hideContent();
            rootContainer.appendComponentElement(this.getElement());
            if (config.hideMainUI) {
                this.hide();
            }
        }
        Loader.prototype.getElement = function () {
            return this.view.getElement();
        };
        Loader.prototype._bindCallbacks = function () {
            this._showContent = this._showContent.bind(this);
            this._hideContent = this._hideContent.bind(this);
        };
        Loader.prototype._bindEvents = function () {
            this._unbindEvents = this._eventEmitter.bindEvents([
                [VIDEO_EVENTS.STATE_CHANGED, this._checkForWaitingState],
                [VIDEO_EVENTS.UPLOAD_SUSPEND, this.hide],
            ], this);
        };
        Loader.prototype._checkForWaitingState = function (_a) {
            var nextState = _a.nextState;
            switch (nextState) {
                case EngineState$1.SEEK_IN_PROGRESS:
                    this.startDelayedShow();
                    break;
                case EngineState$1.WAITING:
                    this.startDelayedShow();
                    break;
                case EngineState$1.LOAD_STARTED:
                    if (this._engine.isPreloadAvailable) {
                        this._showContent();
                    }
                    break;
                case EngineState$1.READY_TO_PLAY:
                    this.stopDelayedShow();
                    this._hideContent();
                    break;
                case EngineState$1.PLAYING:
                    this.stopDelayedShow();
                    this._hideContent();
                    break;
                case EngineState$1.PAUSED:
                    this.stopDelayedShow();
                    this._hideContent();
                    break;
                /* ignore coverage */
                default:
                    break;
            }
        };
        Loader.prototype._initUI = function () {
            this.view = new Loader.View();
        };
        Loader.prototype._showContent = function () {
            if (this.isHidden) {
                this._eventEmitter.emit(UI_EVENTS.LOADER_SHOW);
                this.view.showContent();
                this.isHidden = false;
            }
        };
        Loader.prototype._hideContent = function () {
            if (!this.isHidden) {
                this._eventEmitter.emit(UI_EVENTS.LOADER_HIDE);
                this.view.hideContent();
                this.isHidden = true;
            }
        };
        Loader.prototype.hide = function () {
            this.view.hide();
        };
        Loader.prototype.show = function () {
            this.view.show();
        };
        Loader.prototype.startDelayedShow = function () {
            if (this.isDelayedShowScheduled) {
                this.stopDelayedShow();
            }
            this._delayedShowTimeout = window.setTimeout(this._showContent, DELAYED_SHOW_TIMEOUT);
        };
        Loader.prototype.stopDelayedShow = function () {
            window.clearTimeout(this._delayedShowTimeout);
            this._delayedShowTimeout = null;
        };
        Object.defineProperty(Loader.prototype, "isDelayedShowScheduled", {
            get: function () {
                return Boolean(this._delayedShowTimeout);
            },
            enumerable: true,
            configurable: true
        });
        Loader.prototype.destroy = function () {
            this._unbindEvents();
            this.stopDelayedShow();
            this.view.destroy();
            this.view = null;
            this._eventEmitter = null;
            this._engine = null;
        };
        Loader.moduleName = 'loader';
        Loader.View = LoaderView;
        Loader.dependencies = ['engine', 'eventEmitter', 'config', 'rootContainer'];
        return Loader;
    }());

    function anonymous$13(props
    /*``*/) {
    var out='<div class="'+(props.styles.mainUiBlock)+'"></div>';return out;
    }

    var css$6 = ".main-ui-block__mainUiBlock___3fUqI {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .main-ui-block__mainUiBlock___3fUqI .main-ui-block__tooltipContainerWrapper___3e2KW {\n    position: relative;\n    -webkit-box-flex: 2;\n        -ms-flex-positive: 2;\n            flex-grow: 2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tdWktYmxvY2suc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsU0FBUztFQUNULFVBQVU7RUFDVixRQUFRO0VBQ1IscUJBQWM7RUFBZCxxQkFBYztFQUFkLGNBQWM7RUFDZCw2QkFBdUI7RUFBdkIsOEJBQXVCO01BQXZCLDJCQUF1QjtVQUF2Qix1QkFBdUIsRUFBRTtFQUN6QjtJQUNFLG1CQUFtQjtJQUNuQixvQkFBYTtRQUFiLHFCQUFhO1lBQWIsYUFBYSxFQUFFIiwiZmlsZSI6Im1haW4tdWktYmxvY2suc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluVWlCbG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gIC5tYWluVWlCbG9jayAudG9vbHRpcENvbnRhaW5lcldyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4LWdyb3c6IDI7IH1cbiJdfQ== */";
    var styles$6 = {"mainUiBlock":"main-ui-block__mainUiBlock___3fUqI","tooltipContainerWrapper":"main-ui-block__tooltipContainerWrapper___3e2KW"};
    styleInject(css$6);

    var MainUIBlockView = /** @class */ (function (_super) {
        __extends(MainUIBlockView, _super);
        function MainUIBlockView(config) {
            var _this = _super.call(this) || this;
            _this._initDOM(config.elements);
            return _this;
        }
        MainUIBlockView.prototype._initDOM = function (elements) {
            this._$rootElement = htmlToElement(anonymous$13({
                styles: this.styleNames,
            }));
            var $tooltipContainerWrapper = document.createElement('div');
            $tooltipContainerWrapper.classList.add(this.styleNames.tooltipContainerWrapper);
            $tooltipContainerWrapper.appendChild(elements.tooltipContainer);
            this._$rootElement.appendChild(elements.topBlock);
            this._$rootElement.appendChild($tooltipContainerWrapper);
            this._$rootElement.appendChild(elements.bottomBlock);
        };
        MainUIBlockView.prototype.getElement = function () {
            return this._$rootElement;
        };
        MainUIBlockView.prototype.destroy = function () {
            if (this._$rootElement.parentNode) {
                this._$rootElement.parentNode.removeChild(this._$rootElement);
            }
            this._$rootElement = null;
        };
        return MainUIBlockView;
    }(View));
    MainUIBlockView.extendStyleNames(styles$6);

    var HIDE_BLOCK_TIMEOUT = 2000;
    var MainUIBlock = /** @class */ (function () {
        function MainUIBlock(dependencies) {
            this._hideTimeout = null;
            this._isContentShowingEnabled = true;
            this._isContentShown = false;
            this._shouldShowContent = true;
            this._shouldAlwaysShow = false;
            this._isDragging = false;
            var config = dependencies.config, eventEmitter = dependencies.eventEmitter, rootContainer = dependencies.rootContainer, tooltipService = dependencies.tooltipService, topBlock = dependencies.topBlock, bottomBlock = dependencies.bottomBlock, screen = dependencies.screen;
            this._eventEmitter = eventEmitter;
            this._topBlock = topBlock;
            this._bottomBlock = bottomBlock;
            this._screen = screen;
            this._tooltipService = tooltipService;
            this.isHidden = false;
            this._shouldAlwaysShow = false;
            this._initUI({
                tooltipContainer: tooltipService.tooltipContainerElement,
                topBlock: topBlock.getElement(),
                bottomBlock: bottomBlock.getElement(),
            });
            this._bindViewCallbacks();
            this._bindEvents();
            rootContainer.appendComponentElement(this.view.getElement());
            if (config.hideMainUI) {
                this.hide();
            }
        }
        MainUIBlock.prototype.getElement = function () {
            return this.view.getElement();
        };
        MainUIBlock.prototype._initUI = function (elements) {
            this.view = new MainUIBlock.View({ elements: elements });
        };
        MainUIBlock.prototype._bindViewCallbacks = function () {
            this._startHideBlockTimeout = this._startHideBlockTimeout.bind(this);
            this._tryShowContent = this._tryShowContent.bind(this);
            this._tryHideContent = this._tryHideContent.bind(this);
        };
        MainUIBlock.prototype._bindEvents = function () {
            this._unbindEvents = this._eventEmitter.bindEvents([
                [UI_EVENTS.MOUSE_MOVE_ON_PLAYER, this._startHideBlockTimeout],
                [UI_EVENTS.MOUSE_LEAVE_ON_PLAYER, this._tryHideContent],
                [UI_EVENTS.FOCUS_ENTER_ON_PLAYER, this._startHideBlockTimeout],
                [UI_EVENTS.KEYBOARD_KEYDOWN_INTERCEPTED, this._startHideBlockTimeout],
                [UI_EVENTS.LOADER_HIDE, this._startHideBlockTimeout],
                [VIDEO_EVENTS.STATE_CHANGED, this._updatePlayingState],
                [UI_EVENTS.CONTROL_DRAG_START, this._onControlDragStart],
                [UI_EVENTS.CONTROL_DRAG_END, this._onControlDragEnd],
            ], this);
        };
        MainUIBlock.prototype._updatePlayingState = function (_a) {
            var nextState = _a.nextState;
            switch (nextState) {
                case EngineState$1.PLAY_REQUESTED: {
                    this._shouldShowContent = false;
                    this._startHideBlockTimeout();
                    break;
                }
                case EngineState$1.ENDED: {
                    this._shouldShowContent = true;
                    this._tryShowContent();
                    break;
                }
                case EngineState$1.PAUSED: {
                    this._shouldShowContent = true;
                    this._tryShowContent();
                    break;
                }
                case EngineState$1.SRC_SET: {
                    this._shouldShowContent = true;
                    this._tryShowContent();
                    break;
                }
                default:
                    break;
            }
        };
        Object.defineProperty(MainUIBlock.prototype, "_isBlockFocused", {
            get: function () {
                return this._bottomBlock.isFocused || this._topBlock.isFocused;
            },
            enumerable: true,
            configurable: true
        });
        MainUIBlock.prototype._startHideBlockTimeout = function () {
            this._stopHideBlockTimeout();
            this._tryShowContent();
            this._hideTimeout = window.setTimeout(this._tryHideContent, HIDE_BLOCK_TIMEOUT);
        };
        MainUIBlock.prototype._stopHideBlockTimeout = function () {
            if (this._hideTimeout) {
                window.clearTimeout(this._hideTimeout);
            }
        };
        MainUIBlock.prototype._tryShowContent = function () {
            if (this._isContentShowingEnabled) {
                this._showContent();
            }
        };
        MainUIBlock.prototype._onControlDragStart = function () {
            this._isDragging = true;
        };
        MainUIBlock.prototype._onControlDragEnd = function () {
            this._isDragging = false;
            this._tryHideContent();
        };
        MainUIBlock.prototype._showContent = function () {
            if (this.isHidden || this._isContentShown) {
                return;
            }
            this._screen.showCursor();
            this._eventEmitter.emit(UI_EVENTS.MAIN_BLOCK_SHOW);
            this._bottomBlock.showContent();
            this._topBlock.showContent();
            this._isContentShown = true;
        };
        MainUIBlock.prototype._tryHideContent = function () {
            if (!this._isBlockFocused &&
                !this._isDragging &&
                !this._shouldShowContent &&
                !this._shouldAlwaysShow) {
                this._hideContent();
            }
        };
        MainUIBlock.prototype._hideContent = function () {
            if (this.isHidden || !this._isContentShown) {
                return;
            }
            if (this._isContentShowingEnabled) {
                this._screen.hideCursor();
            }
            this._eventEmitter.emit(UI_EVENTS.MAIN_BLOCK_HIDE);
            this._bottomBlock.hideContent();
            this._topBlock.hideContent();
            this._tooltipService.hide();
            this._isContentShown = false;
        };
        MainUIBlock.prototype.disableShowingContent = function () {
            this._isContentShowingEnabled = false;
            this._hideContent();
        };
        MainUIBlock.prototype.enableShowingContent = function () {
            this._isContentShowingEnabled = true;
            if (this._shouldShowContent) {
                this._showContent();
            }
        };
        MainUIBlock.prototype.hide = function () {
            this.isHidden = true;
            this._topBlock.hide();
            this._bottomBlock.hide();
        };
        MainUIBlock.prototype.show = function () {
            this.isHidden = false;
            this._topBlock.show();
            this._bottomBlock.show();
        };
        /**
         * Method for allowing main ui to be always shown despite the playback state and the cursor position
         * @param flag - `true` for showing always
         * @example
         * player.setMainUIShouldAlwaysShow(true);
         *
         */
        MainUIBlock.prototype.setShouldAlwaysShow = function (flag) {
            this._shouldAlwaysShow = flag;
            if (this._shouldAlwaysShow) {
                this._tryShowContent();
            }
            else {
                this._startHideBlockTimeout();
            }
        };
        MainUIBlock.prototype.destroy = function () {
            this._stopHideBlockTimeout();
            this._unbindEvents();
            this.view.destroy();
            this.view = null;
            this._eventEmitter = null;
            this._topBlock = null;
            this._bottomBlock = null;
            this._screen = null;
            this._tooltipService = null;
        };
        MainUIBlock.moduleName = 'mainUIBlock';
        MainUIBlock.View = MainUIBlockView;
        MainUIBlock.dependencies = [
            'config',
            'screen',
            'rootContainer',
            'tooltipService',
            'eventEmitter',
            'topBlock',
            'bottomBlock',
        ];
        __decorate([
            playerAPI('setMainUIShouldAlwaysShow')
        ], MainUIBlock.prototype, "setShouldAlwaysShow", null);
        return MainUIBlock;
    }());

    function anonymous$14(props
    /*``*/) {
    var out='<div data-playable-hook="top-block" class="'+(props.styles.topBlock)+'"> <div class="'+(props.styles.background)+'" data-playable-hook="screen-top-background"> </div> <div class="'+(props.styles.elementsContainer)+'"> <div class="'+(props.styles.liveIndicatorContainer)+'" data-playable-hook="live-indicator-container"> </div> <div class="'+(props.styles.titleContainer)+'" data-playable-hook="title-container"> </div> </div></div>';return out;
    }

    var css$7 = ".top-block__controlButton___2Irx0 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0;\n  cursor: pointer;\n  -webkit-transition-duration: .2s;\n          transition-duration: .2s;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  opacity: 1;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background-color: transparent;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .top-block__controlButton___2Irx0:hover {\n    opacity: .7; }\n  .top-block__hidden___JNzhk {\n  visibility: hidden !important;\n  width: 0 !important;\n  min-width: 0 !important;\n  height: 0 !important;\n  min-height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  opacity: 0 !important; }\n  .top-block__topBlock___2nOmO {\n  position: relative;\n  z-index: 60; }\n  .top-block__topBlock___2nOmO::-moz-focus-inner {\n    border: 0; }\n  .top-block__topBlock___2nOmO.top-block__activated___2ThkU .top-block__titleContainer___1gKBN,\n  .top-block__topBlock___2nOmO.top-block__activated___2ThkU .top-block__background___2RYBo {\n    opacity: 1; }\n  .top-block__liveIndicatorContainer___3wTlQ {\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0; }\n  .top-block__elementsContainer___11-A7 {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin-top: 20px;\n  margin-left: 20px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .top-block__elementsContainer___11-A7 {\n    margin-top: 30px;\n    margin-left: 30px; }\n  div[data-playable-hook='player-container'][data-playable-max-width~=\"550px\"] .top-block__elementsContainer___11-A7 {\n    margin-top: 15px;\n    margin-left: 15px; }\n  div[data-playable-hook='player-container'][data-playable-max-width~=\"280px\"] .top-block__elementsContainer___11-A7 {\n    margin-top: 12px;\n    margin-left: 12px; }\n  .top-block__titleContainer___1gKBN {\n  max-width: calc(100% - 200px);\n  -webkit-transition: opacity .2s;\n  transition: opacity .2s;\n  opacity: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n  .top-block__background___2RYBo {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 181px;\n  -webkit-transition: opacity .2s;\n  transition: opacity .2s;\n  pointer-events: none;\n  opacity: 0;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0)), color-stop(24%, rgba(0, 0, 0, 0.03)), color-stop(50%, rgba(0, 0, 0, 0.15)), color-stop(75%, rgba(0, 0, 0, 0.3)), to(rgba(0, 0, 0, 0.4)));\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.03) 24%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.3) 75%, rgba(0, 0, 0, 0.4));\n  background-size: 100% 182px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1ibG9jay5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQWM7RUFBZCxxQkFBYztFQUFkLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlDQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIscUNBQTZCO0VBQTdCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLHlCQUF3QjtNQUF4QixzQkFBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLDBCQUFvQjtNQUFwQix1QkFBb0I7VUFBcEIsb0JBQW9CLEVBQUU7RUFDdEI7SUFDRSxZQUFZLEVBQUU7RUFFbEI7RUFDRSw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsc0JBQXNCLEVBQUU7RUFFMUI7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWSxFQUFFO0VBQ2Q7SUFDRSxVQUFVLEVBQUU7RUFDZDs7SUFFRSxXQUFXLEVBQUU7RUFFakI7RUFDRSxvQkFBYTtNQUFiLHFCQUFhO1VBQWIsYUFBYSxFQUFFO0VBRWpCO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFjO0VBQWQscUJBQWM7RUFBZCxjQUFjO0VBQ2QsK0JBQW9CO0VBQXBCLDhCQUFvQjtNQUFwQix3QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsMEJBQW9CO01BQXBCLHVCQUFvQjtVQUFwQixvQkFBb0IsRUFBRTtFQUN0QjtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBRTtFQUN0QjtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBRTtFQUN0QjtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBRTtFQUV4QjtFQUNFLDhCQUE4QjtFQUM5QixnQ0FBd0I7RUFBeEIsd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxvQkFBYTtNQUFiLHFCQUFhO1VBQWIsYUFBYSxFQUFFO0VBRWpCO0VBQ0UsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUTtFQUNSLGNBQWM7RUFDZCxnQ0FBd0I7RUFBeEIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsbU9BQTBKO0VBQTFKLDBKQUEwSjtFQUMxSiw0QkFBNEIsRUFBRSIsImZpbGUiOiJ0b3AtYmxvY2suc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250cm9sQnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIC5jb250cm9sQnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAuNzsgfVxuXG4uaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7IH1cblxuLnRvcEJsb2NrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA2MDsgfVxuICAudG9wQmxvY2s6Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgIGJvcmRlcjogMDsgfVxuICAudG9wQmxvY2suYWN0aXZhdGVkIC50aXRsZUNvbnRhaW5lcixcbiAgLnRvcEJsb2NrLmFjdGl2YXRlZCAuYmFja2dyb3VuZCB7XG4gICAgb3BhY2l0eTogMTsgfVxuXG4ubGl2ZUluZGljYXRvckNvbnRhaW5lciB7XG4gIGZsZXgtZ3JvdzogMDsgfVxuXG4uZWxlbWVudHNDb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIGRpdltkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXVtkYXRhLXBsYXlhYmxlLWluLWZ1bGwtc2NyZWVuPSd0cnVlJ10gLmVsZW1lbnRzQ29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4OyB9XG4gIGRpdltkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXVtkYXRhLXBsYXlhYmxlLW1heC13aWR0aH49XCI1NTBweFwiXSAuZWxlbWVudHNDb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7IH1cbiAgZGl2W2RhdGEtcGxheWFibGUtaG9vaz0ncGxheWVyLWNvbnRhaW5lciddW2RhdGEtcGxheWFibGUtbWF4LXdpZHRofj1cIjI4MHB4XCJdIC5lbGVtZW50c0NvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBtYXJnaW4tbGVmdDogMTJweDsgfVxuXG4udGl0bGVDb250YWluZXIge1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XG4gIG9wYWNpdHk6IDA7XG4gIGZsZXgtZ3JvdzogMTsgfVxuXG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxODFweDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMDMpIDI0JSwgcmdiYSgwLCAwLCAwLCAwLjE1KSA1MCUsIHJnYmEoMCwgMCwgMCwgMC4zKSA3NSUsIHJnYmEoMCwgMCwgMCwgMC40KSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxODJweDsgfVxuIl19 */";
    var styles$7 = {"controlButton":"top-block__controlButton___2Irx0","hidden":"top-block__hidden___JNzhk","topBlock":"top-block__topBlock___2nOmO","activated":"top-block__activated___2ThkU","titleContainer":"top-block__titleContainer___1gKBN","background":"top-block__background___2RYBo","liveIndicatorContainer":"top-block__liveIndicatorContainer___3wTlQ","elementsContainer":"top-block__elementsContainer___11-A7"};
    styleInject(css$7);

    var TopBlockView = /** @class */ (function (_super) {
        __extends(TopBlockView, _super);
        function TopBlockView(config) {
            var _this = _super.call(this) || this;
            var callbacks = config.callbacks, elements = config.elements;
            _this._callbacks = callbacks;
            _this._initDOM(elements);
            _this._bindEvents();
            return _this;
        }
        TopBlockView.prototype.getElement = function () {
            return this._$rootElement;
        };
        TopBlockView.prototype._initDOM = function (elements) {
            this._$rootElement = htmlToElement(anonymous$14({
                styles: this.styleNames,
            }));
            this._$titleContainer = getElementByHook(this._$rootElement, 'title-container');
            this._$liveIndicatorContainer = getElementByHook(this._$rootElement, 'live-indicator-container');
            this._$titleContainer.appendChild(elements.title);
            this._$liveIndicatorContainer.appendChild(elements.liveIndicator);
        };
        TopBlockView.prototype._preventClickPropagation = function (e) {
            e.stopPropagation();
        };
        TopBlockView.prototype._bindEvents = function () {
            this._$rootElement.addEventListener('click', this._preventClickPropagation);
            this._$rootElement.addEventListener('mousemove', this._callbacks.onBlockMouseMove);
            this._$rootElement.addEventListener('mouseleave', this._callbacks.onBlockMouseOut);
        };
        TopBlockView.prototype._unbindEvents = function () {
            this._$rootElement.removeEventListener('click', this._preventClickPropagation);
            this._$rootElement.removeEventListener('mousemove', this._callbacks.onBlockMouseMove);
            this._$rootElement.removeEventListener('mouseleave', this._callbacks.onBlockMouseOut);
        };
        TopBlockView.prototype.show = function () {
            this._$rootElement.classList.remove(this.styleNames.hidden);
        };
        TopBlockView.prototype.hide = function () {
            this._$rootElement.classList.add(this.styleNames.hidden);
        };
        TopBlockView.prototype.showContent = function () {
            this._$rootElement.classList.add(this.styleNames.activated);
        };
        TopBlockView.prototype.hideContent = function () {
            this._$rootElement.classList.remove(this.styleNames.activated);
        };
        TopBlockView.prototype.showTitle = function () {
            this._$titleContainer.classList.remove(this.styleNames.hidden);
        };
        TopBlockView.prototype.hideTitle = function () {
            this._$titleContainer.classList.add(this.styleNames.hidden);
        };
        TopBlockView.prototype.showLiveIndicator = function () {
            this._$liveIndicatorContainer.classList.remove(this.styleNames.hidden);
        };
        TopBlockView.prototype.hideLiveIndicator = function () {
            this._$liveIndicatorContainer.classList.add(this.styleNames.hidden);
        };
        TopBlockView.prototype.destroy = function () {
            this._unbindEvents();
            this._callbacks = null;
            if (this._$rootElement.parentNode) {
                this._$rootElement.parentNode.removeChild(this._$rootElement);
            }
            this._$rootElement = null;
        };
        return TopBlockView;
    }(View));
    TopBlockView.extendStyleNames(styles$7);

    var TopBlock = /** @class */ (function () {
        function TopBlock(dependencies) {
            this._isBlockFocused = false;
            this.isHidden = false;
            this._bindViewCallbacks();
            this._initUI(this._getElements(dependencies));
        }
        TopBlock.prototype._bindViewCallbacks = function () {
            this._setFocusState = this._setFocusState.bind(this);
            this._removeFocusState = this._removeFocusState.bind(this);
        };
        TopBlock.prototype._initUI = function (elements) {
            var config = {
                elements: elements,
                callbacks: {
                    onBlockMouseMove: this._setFocusState,
                    onBlockMouseOut: this._removeFocusState,
                },
            };
            this.view = new TopBlock.View(config);
        };
        TopBlock.prototype._getElements = function (dependencies) {
            var title = dependencies.title, liveIndicator = dependencies.liveIndicator;
            return {
                title: title.getElement(),
                liveIndicator: liveIndicator.getElement(),
            };
        };
        TopBlock.prototype._setFocusState = function () {
            this._isBlockFocused = true;
        };
        TopBlock.prototype._removeFocusState = function () {
            this._isBlockFocused = false;
        };
        Object.defineProperty(TopBlock.prototype, "isFocused", {
            get: function () {
                return this._isBlockFocused;
            },
            enumerable: true,
            configurable: true
        });
        TopBlock.prototype.getElement = function () {
            return this.view.getElement();
        };
        TopBlock.prototype.hide = function () {
            this.isHidden = true;
            this.view.hide();
        };
        TopBlock.prototype.show = function () {
            this.isHidden = false;
            this.view.show();
        };
        TopBlock.prototype.showTitle = function () {
            this.view.showTitle();
        };
        TopBlock.prototype.hideTitle = function () {
            this.view.hideTitle();
        };
        TopBlock.prototype.showLiveIndicator = function () {
            this.view.showLiveIndicator();
        };
        TopBlock.prototype.hideLiveIndicator = function () {
            this.view.hideLiveIndicator();
        };
        TopBlock.prototype.showContent = function () {
            this.view.showContent();
        };
        TopBlock.prototype.hideContent = function () {
            this.view.hideContent();
        };
        TopBlock.prototype.destroy = function () {
            this.view.destroy();
            this.view = null;
        };
        TopBlock.moduleName = 'topBlock';
        TopBlock.View = TopBlockView;
        TopBlock.dependencies = ['title', 'liveIndicator'];
        __decorate([
            playerAPI()
        ], TopBlock.prototype, "showTitle", null);
        __decorate([
            playerAPI()
        ], TopBlock.prototype, "hideTitle", null);
        __decorate([
            playerAPI()
        ], TopBlock.prototype, "showLiveIndicator", null);
        __decorate([
            playerAPI()
        ], TopBlock.prototype, "hideLiveIndicator", null);
        return TopBlock;
    }());

    function anonymous$15(props
    /*``*/) {
    var out='<div class="'+(props.styles.title)+' '+(props.themeStyles.titleText)+'" data-playable-hook="video-title"></div>';return out;
    }

    var titleViewTheme = {
        titleText: {
            color: function (data) { return data.color; },
        },
    };

    var css$8 = ".title__controlButton___tyPdk {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0;\n  cursor: pointer;\n  -webkit-transition-duration: .2s;\n          transition-duration: .2s;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  opacity: 1;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background-color: transparent;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .title__controlButton___tyPdk:hover {\n    opacity: .7; }\n  .title__hidden___3SyPm {\n  visibility: hidden !important;\n  width: 0 !important;\n  min-width: 0 !important;\n  height: 0 !important;\n  min-height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  opacity: 0 !important; }\n  .title__title___324Zx {\n  font-size: 16px;\n  line-height: 17px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n  div[data-playable-hook='player-container'][data-playable-max-width~=\"550px\"] .title__title___324Zx {\n    font-size: 14px;\n    line-height: 15px; }\n  div[data-playable-hook='player-container'][data-playable-max-width~=\"300px\"] .title__title___324Zx {\n    font-size: 12px;\n    line-height: 13px; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .title__title___324Zx {\n    font-size: 20px;\n    line-height: 20px; }\n  .title__title___324Zx.title__link___2x3nu {\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpdGxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBYztFQUFkLHFCQUFjO0VBQWQsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixxQ0FBNkI7RUFBN0IsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIseUJBQXdCO01BQXhCLHNCQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsMEJBQW9CO01BQXBCLHVCQUFvQjtVQUFwQixvQkFBb0IsRUFBRTtFQUN0QjtJQUNFLFlBQVksRUFBRTtFQUVsQjtFQUNFLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixzQkFBc0IsRUFBRTtFQUUxQjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQix3QkFBd0IsRUFBRTtFQUMxQjtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBRTtFQUN0QjtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBRTtFQUN0QjtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBRTtFQUN0QjtJQUNFLGdCQUFnQixFQUFFIiwiZmlsZSI6InRpdGxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udHJvbEJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuY29udHJvbEJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogLjc7IH1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB3aWR0aDogMCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50OyB9XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gIGRpdltkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXVtkYXRhLXBsYXlhYmxlLW1heC13aWR0aH49XCI1NTBweFwiXSAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTVweDsgfVxuICBkaXZbZGF0YS1wbGF5YWJsZS1ob29rPSdwbGF5ZXItY29udGFpbmVyJ11bZGF0YS1wbGF5YWJsZS1tYXgtd2lkdGh+PVwiMzAwcHhcIl0gLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7IH1cbiAgZGl2W2RhdGEtcGxheWFibGUtaG9vaz0ncGxheWVyLWNvbnRhaW5lciddW2RhdGEtcGxheWFibGUtaW4tZnVsbC1zY3JlZW49J3RydWUnXSAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDsgfVxuICAudGl0bGUubGluayB7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG4iXX0= */";
    var styles$8 = {"controlButton":"title__controlButton___tyPdk","hidden":"title__hidden___3SyPm","title":"title__title___324Zx","link":"title__link___2x3nu"};
    styleInject(css$8);

    var TitleView = /** @class */ (function (_super) {
        __extends(TitleView, _super);
        function TitleView(config) {
            var _this = this;
            var callbacks = config.callbacks, theme = config.theme;
            _this = _super.call(this, theme) || this;
            _this._callbacks = callbacks;
            _this._initDOM();
            _this._bindEvents();
            return _this;
        }
        TitleView.prototype._initDOM = function () {
            this._$rootElement = htmlToElement(anonymous$15({ styles: this.styleNames, themeStyles: this.themeStyles }));
        };
        TitleView.prototype._bindEvents = function () {
            this._$rootElement.addEventListener('click', this._callbacks.onClick);
        };
        TitleView.prototype._unbindEvents = function () {
            this._$rootElement.removeEventListener('click', this._callbacks.onClick);
        };
        TitleView.prototype.setDisplayAsLink = function (flag) {
            toggleElementClass(this._$rootElement, this.styleNames.link, flag);
        };
        TitleView.prototype.setTitle = function (title) {
            // TODO: mb move this logic to controller? title.isHidden is out of control of this method
            // TODO: what if we call with empty value `.setTitle('')` and then call `.show()` method? Mb clear value anyway?
            if (title) {
                this.show();
                this._$rootElement.innerHTML = title;
            }
            else {
                this.hide();
            }
        };
        TitleView.prototype.show = function () {
            this._$rootElement.classList.remove(this.styleNames.hidden);
        };
        TitleView.prototype.hide = function () {
            this._$rootElement.classList.add(this.styleNames.hidden);
        };
        TitleView.prototype.getElement = function () {
            return this._$rootElement;
        };
        TitleView.prototype.destroy = function () {
            this._unbindEvents();
            if (this._$rootElement.parentNode) {
                this._$rootElement.parentNode.removeChild(this._$rootElement);
            }
            this._$rootElement = null;
        };
        return TitleView;
    }(View));
    TitleView.setTheme(titleViewTheme);
    TitleView.extendStyleNames(styles$8);

    var TitleControl = /** @class */ (function () {
        function TitleControl(_a) {
            var theme = _a.theme, config = _a.config;
            this._theme = theme;
            this._bindCallbacks();
            this._initUI();
            this.setTitle(config.title);
        }
        TitleControl.prototype.getElement = function () {
            return this.view.getElement();
        };
        TitleControl.prototype._bindCallbacks = function () {
            this._triggerCallback = this._triggerCallback.bind(this);
        };
        TitleControl.prototype._initUI = function () {
            var config = {
                theme: this._theme,
                callbacks: {
                    onClick: this._triggerCallback,
                },
            };
            this.view = new TitleControl.View(config);
            this.view.setTitle();
        };
        /**
         * Display title text over the video. If you want to have clickable title, use `setTitleClickCallback`
         *
         * @param title - Text for the video title
         *
         * @example
         * player.setTitle('Your awesome video title here');
         *
         * @note
         * [Live Demo](https://jsfiddle.net/bodia/243k6m0u/)
         */
        TitleControl.prototype.setTitle = function (title) {
            this.view.setTitle(title);
        };
        /**
         * Method for attaching callback for click on title
         *
         * @param callback - Your function
         *
         * @example
         * const callback = () => {
         *   console.log('Click on title);
         * }
         * player.setTitleClickCallback(callback);
         *
         */
        TitleControl.prototype.setTitleClickCallback = function (callback) {
            this._callback = callback;
            this.view.setDisplayAsLink(Boolean(this._callback));
        };
        TitleControl.prototype._triggerCallback = function () {
            if (this._callback) {
                this._callback();
            }
        };
        TitleControl.prototype.hide = function () {
            this.isHidden = true;
            this.view.hide();
        };
        TitleControl.prototype.show = function () {
            this.isHidden = false;
            this.view.show();
        };
        TitleControl.prototype.destroy = function () {
            this.view.destroy();
            this.view = null;
        };
        TitleControl.moduleName = 'title';
        TitleControl.View = TitleView;
        TitleControl.dependencies = ['config', 'theme'];
        __decorate([
            playerAPI()
        ], TitleControl.prototype, "setTitle", null);
        __decorate([
            playerAPI()
        ], TitleControl.prototype, "setTitleClickCallback", null);
        return TitleControl;
    }());

    function anonymous$16(props
    /*``*/) {
    var out='<div class="'+(props.styles.liveIndicator)+' '+(props.styles.hidden)+'"> <button tabindex="0" class="'+(props.styles.liveIndicatorButton)+'" aria-label="'+(props.texts.label || '')+'" data-playable-hook="live-indicator-button"> '+(props.texts.text || '')+' </button></div>';return out;
    }

    var css$9 = ".live-indicator__controlButton___1FH60 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0;\n  cursor: pointer;\n  -webkit-transition-duration: .2s;\n          transition-duration: .2s;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  opacity: 1;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background-color: transparent;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .live-indicator__controlButton___1FH60:hover {\n    opacity: .7; }\n  .live-indicator__hidden___1MQc0 {\n  visibility: hidden !important;\n  width: 0 !important;\n  min-width: 0 !important;\n  height: 0 !important;\n  min-height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  opacity: 0 !important; }\n  .live-indicator__liveIndicator___3Vudz {\n  position: relative;\n  margin-right: 15px;\n  -webkit-transition: background-color .2s;\n  transition: background-color .2s;\n  background-color: #959595; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .live-indicator__liveIndicator___3Vudz {\n    margin-right: 20px; }\n  div[data-playable-hook='player-container'][data-playable-max-width~=\"550px\"] .live-indicator__liveIndicator___3Vudz {\n    margin-right: 10px; }\n  div[data-playable-hook='player-container'][data-playable-max-width~=\"280px\"] .live-indicator__liveIndicator___3Vudz {\n    margin-right: 10px;\n    padding: 2px 3px; }\n  .live-indicator__liveIndicator___3Vudz.live-indicator__ended___18KqE {\n    cursor: default; }\n  .live-indicator__liveIndicator___3Vudz:hover:not(.live-indicator__ended___18KqE), .live-indicator__liveIndicator___3Vudz.live-indicator__active___2Lobb {\n    background-color: #ea492e; }\n  .live-indicator__clickable___2efwz {\n  cursor: pointer; }\n  button.live-indicator__liveIndicatorButton___fQcZU {\n  font-size: 12px;\n  line-height: 14px;\n  padding: 5px 6px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-transform: uppercase !important;\n  color: #fff;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background-color: transparent; }\n  div[data-playable-hook='player-container'][data-playable-max-width~=\"280px\"] button.live-indicator__liveIndicatorButton___fQcZU {\n    font-size: 10px;\n    line-height: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpdmUtaW5kaWNhdG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBYztFQUFkLHFCQUFjO0VBQWQsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixxQ0FBNkI7RUFBN0IsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIseUJBQXdCO01BQXhCLHNCQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsMEJBQW9CO01BQXBCLHVCQUFvQjtVQUFwQixvQkFBb0IsRUFBRTtFQUN0QjtJQUNFLFlBQVksRUFBRTtFQUVsQjtFQUNFLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixzQkFBc0IsRUFBRTtFQUUxQjtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIseUNBQWlDO0VBQWpDLGlDQUFpQztFQUNqQywwQkFBMEIsRUFBRTtFQUM1QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxtQkFBbUI7SUFDbkIsaUJBQWlCLEVBQUU7RUFDckI7SUFDRSxnQkFBZ0IsRUFBRTtFQUNwQjtJQUNFLDBCQUEwQixFQUFFO0VBRWhDO0VBQ0UsZ0JBQWdCLEVBQUU7RUFFcEI7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwQkFBa0I7S0FBbEIsdUJBQWtCO01BQWxCLHNCQUFrQjtVQUFsQixrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLFlBQVk7RUFDWixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCw4QkFBOEIsRUFBRTtFQUNoQztJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBRSIsImZpbGUiOiJsaXZlLWluZGljYXRvci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRyb2xCdXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLmNvbnRyb2xCdXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IC43OyB9XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDsgfVxuXG4ubGl2ZUluZGljYXRvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk1OTU5NTsgfVxuICBkaXZbZGF0YS1wbGF5YWJsZS1ob29rPSdwbGF5ZXItY29udGFpbmVyJ11bZGF0YS1wbGF5YWJsZS1pbi1mdWxsLXNjcmVlbj0ndHJ1ZSddIC5saXZlSW5kaWNhdG9yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7IH1cbiAgZGl2W2RhdGEtcGxheWFibGUtaG9vaz0ncGxheWVyLWNvbnRhaW5lciddW2RhdGEtcGxheWFibGUtbWF4LXdpZHRofj1cIjU1MHB4XCJdIC5saXZlSW5kaWNhdG9yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cbiAgZGl2W2RhdGEtcGxheWFibGUtaG9vaz0ncGxheWVyLWNvbnRhaW5lciddW2RhdGEtcGxheWFibGUtbWF4LXdpZHRofj1cIjI4MHB4XCJdIC5saXZlSW5kaWNhdG9yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZzogMnB4IDNweDsgfVxuICAubGl2ZUluZGljYXRvci5lbmRlZCB7XG4gICAgY3Vyc29yOiBkZWZhdWx0OyB9XG4gIC5saXZlSW5kaWNhdG9yOmhvdmVyOm5vdCguZW5kZWQpLCAubGl2ZUluZGljYXRvci5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYTQ5MmU7IH1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG5idXR0b24ubGl2ZUluZGljYXRvckJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIHBhZGRpbmc6IDVweCA2cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG4gIGRpdltkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXVtkYXRhLXBsYXlhYmxlLW1heC13aWR0aH49XCIyODBweFwiXSBidXR0b24ubGl2ZUluZGljYXRvckJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMnB4OyB9XG4iXX0= */";
    var styles$9 = {"controlButton":"live-indicator__controlButton___1FH60","hidden":"live-indicator__hidden___1MQc0","liveIndicator":"live-indicator__liveIndicator___3Vudz","ended":"live-indicator__ended___18KqE","active":"live-indicator__active___2Lobb","clickable":"live-indicator__clickable___2efwz","liveIndicatorButton":"live-indicator__liveIndicatorButton___fQcZU"};
    styleInject(css$9);

    var LiveIndicatorView = /** @class */ (function (_super) {
        __extends(LiveIndicatorView, _super);
        function LiveIndicatorView(config) {
            var _this = _super.call(this) || this;
            _this._callbacks = config.callbacks;
            _this._textMap = config.textMap;
            _this._tooltipService = config.tooltipService;
            _this._initDOM();
            _this._bindEvents();
            return _this;
        }
        LiveIndicatorView.prototype._initDOM = function () {
            this._$rootElement = htmlToElement(anonymous$16({
                styles: this.styleNames,
                themeStyles: this.themeStyles,
                texts: {},
            }));
            this._$button = getElementByHook(this._$rootElement, 'live-indicator-button');
            this._tooltipReference = this._tooltipService.createReference(this._$button, {
                text: this._textMap.get(TEXT_LABELS.LIVE_SYNC_TOOLTIP),
            });
            // NOTE: LIVE indicator is hidden and inactive by default
            this.toggle(false);
            this.toggleActive(false);
            this.toggleEnded(false);
        };
        LiveIndicatorView.prototype._bindEvents = function () {
            this._$rootElement.addEventListener('click', this._callbacks.onClick);
        };
        LiveIndicatorView.prototype._unbindEvents = function () {
            this._$rootElement.removeEventListener('click', this._callbacks.onClick);
        };
        LiveIndicatorView.prototype.toggleActive = function (shouldActivate) {
            toggleElementClass(this._$rootElement, this.styleNames.active, shouldActivate);
            toggleElementClass(this._$button, this.styleNames.clickable, !shouldActivate);
            // NOTE: disable tooltip while video is sync with live
            if (shouldActivate) {
                this._$button.setAttribute('disabled', 'true');
                this._tooltipReference.disable();
            }
            else {
                this._$button.removeAttribute('disabled');
                this._tooltipReference.enable();
            }
        };
        LiveIndicatorView.prototype.toggleEnded = function (isEnded) {
            toggleElementClass(this._$rootElement, this.styleNames.ended, isEnded);
            this._$button.innerText = this._textMap.get(TEXT_LABELS.LIVE_INDICATOR_TEXT, { isEnded: isEnded });
            this._$button.setAttribute('aria-label', !isEnded ? this._textMap.get(TEXT_LABELS.LIVE_SYNC_LABEL) : '');
            this._$button.setAttribute('disabled', 'true');
            if (isEnded) {
                this._tooltipReference.disable();
            }
            else {
                this._tooltipReference.enable();
            }
        };
        LiveIndicatorView.prototype.show = function () {
            this.toggle(true);
        };
        LiveIndicatorView.prototype.hide = function () {
            this.toggle(false);
        };
        LiveIndicatorView.prototype.toggle = function (shouldShow) {
            toggleElementClass(this._$rootElement, this.styleNames.hidden, !shouldShow);
        };
        LiveIndicatorView.prototype.getElement = function () {
            return this._$rootElement;
        };
        LiveIndicatorView.prototype.destroy = function () {
            this._unbindEvents();
            this._callbacks = null;
            this._tooltipReference.destroy();
            this._tooltipReference = null;
            if (this._$rootElement.parentNode) {
                this._$rootElement.parentNode.removeChild(this._$rootElement);
            }
            this._$rootElement = null;
            this._$button = null;
            this._callbacks = null;
            this._textMap = null;
        };
        return LiveIndicatorView;
    }(View));
    LiveIndicatorView.extendStyleNames(styles$9);

    var LiveIndicator = /** @class */ (function () {
        function LiveIndicator(_a) {
            var engine = _a.engine, eventEmitter = _a.eventEmitter, textMap = _a.textMap, tooltipService = _a.tooltipService;
            this._isHidden = true;
            this._isActive = false;
            this._isEnded = false;
            this._engine = engine;
            this._eventEmitter = eventEmitter;
            this._textMap = textMap;
            this._tooltipService = tooltipService;
            this._bindCallbacks();
            this._initUI();
            this._bindEvents();
            this._initInterceptor();
        }
        LiveIndicator.prototype.getElement = function () {
            return this.view.getElement();
        };
        LiveIndicator.prototype._initInterceptor = function () {
            var _this = this;
            var _a;
            this._interceptor = new KeyboardInterceptorCore(this.getElement(), (_a = {}, _a[KEYCODES.SPACE_BAR] = function (e) {
                    e.stopPropagation();
                    _this._eventEmitter.emit(UI_EVENTS.KEYBOARD_KEYDOWN_INTERCEPTED);
                    _this._syncWithLive();
                }, _a[KEYCODES.ENTER] = function (e) {
                    e.stopPropagation();
                    _this._eventEmitter.emit(UI_EVENTS.KEYBOARD_KEYDOWN_INTERCEPTED);
                    _this._syncWithLive();
                }, _a));
        };
        Object.defineProperty(LiveIndicator.prototype, "isHidden", {
            get: function () {
                return this._isHidden;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LiveIndicator.prototype, "isActive", {
            get: function () {
                return this._isActive;
            },
            enumerable: true,
            configurable: true
        });
        LiveIndicator.prototype.show = function () {
            this._toggle(true);
        };
        LiveIndicator.prototype.hide = function () {
            this._toggle(false);
        };
        LiveIndicator.prototype._initUI = function () {
            this.view = new LiveIndicator.View({
                callbacks: {
                    onClick: this._syncWithLive,
                },
                textMap: this._textMap,
                tooltipService: this._tooltipService,
            });
        };
        LiveIndicator.prototype._bindCallbacks = function () {
            this._syncWithLive = this._syncWithLive.bind(this);
        };
        LiveIndicator.prototype._bindEvents = function () {
            var _this = this;
            this._unbindEvents = this._eventEmitter.bindEvents([
                [VIDEO_EVENTS.LIVE_STATE_CHANGED, this._processStateChange],
                [
                    UI_EVENTS.PROGRESS_SYNC_BUTTON_MOUSE_ENTER,
                    function () {
                        _this.view.toggleActive(true);
                    },
                ],
                [
                    UI_EVENTS.PROGRESS_SYNC_BUTTON_MOUSE_LEAVE,
                    function () {
                        // NOTE: restore state before mouse enter
                        _this.view.toggleActive(_this._isActive);
                    },
                ],
            ], this);
        };
        LiveIndicator.prototype._processStateChange = function (_a) {
            var nextState = _a.nextState;
            switch (nextState) {
                case LiveState$1.NONE:
                    this._toggle(false);
                    this._toggleActive(false);
                    this._toggleEnded(false);
                    break;
                case LiveState$1.INITIAL:
                    this._toggle(true);
                    break;
                case LiveState$1.SYNC:
                    this._toggleActive(true);
                    break;
                case LiveState$1.NOT_SYNC:
                    this._toggleActive(false);
                    break;
                case LiveState$1.ENDED:
                    this._toggleActive(false);
                    this._toggleEnded(true);
                    break;
                default:
                    break;
            }
        };
        LiveIndicator.prototype._syncWithLive = function () {
            if (!this._isEnded) {
                this._engine.syncWithLive();
            }
        };
        LiveIndicator.prototype._toggle = function (shouldShow) {
            this._isHidden = !shouldShow;
            this.view.toggle(shouldShow);
        };
        LiveIndicator.prototype._toggleActive = function (shouldActivate) {
            this._isActive = shouldActivate;
            this.view.toggleActive(shouldActivate);
        };
        LiveIndicator.prototype._toggleEnded = function (isEnded) {
            this._isEnded = isEnded;
            this.view.toggleEnded(isEnded);
        };
        LiveIndicator.prototype.destroy = function () {
            this._unbindEvents();
            this._interceptor.destroy();
            this._interceptor = null;
            this.view.destroy();
            this.view = null;
            this._engine = null;
            this._eventEmitter = null;
            this._textMap = null;
        };
        LiveIndicator.moduleName = 'liveIndicator';
        LiveIndicator.View = LiveIndicatorView;
        LiveIndicator.dependencies = ['engine', 'eventEmitter', 'textMap', 'tooltipService'];
        return LiveIndicator;
    }());

    function anonymous$17(props
    /*``*/) {
    var out='<div data-playable-hook="bottom-block" class="'+(props.styles.bottomBlock)+'"> <div class="'+(props.styles.background)+'" data-playable-hook="screen-bottom-background"> </div> <div class="'+(props.styles.progressBarContainer)+'" data-playable-hook="progress-bar-container"> </div> <div class="'+(props.styles.elementsContainer)+'"> <div class="'+(props.styles.controlsContainerLeft)+'" data-playable-hook="controls-container-left"> <div class="'+(props.styles.playContainer)+'" data-playable-hook="play-container"> </div> <div class="'+(props.styles.volumeContainer)+'" data-playable-hook="volume-container"> </div> <div class="'+(props.styles.timeContainer)+'" data-playable-hook="time-container"> </div> </div> <div class="'+(props.styles.controlsContainerRight)+'" data-playable-hook="controls-container-right"> <div class="'+(props.styles.downloadContainer)+'" data-playable-hook="download-container"> </div> <div class="'+(props.styles.fullScreenContainer)+'" data-playable-hook="full-screen-container"> </div> </div> <div class="'+(props.styles.logoContainer)+'" data-playable-hook="logo-container"> </div> </div></div>';return out;
    }

    var css$10 = ".bottom-block__controlButton___2zYHZ {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0;\n  cursor: pointer;\n  -webkit-transition-duration: .2s;\n          transition-duration: .2s;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  opacity: 1;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background-color: transparent;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .bottom-block__controlButton___2zYHZ:hover {\n    opacity: .7; }\n  .bottom-block__hidden___361S0 {\n  visibility: hidden !important;\n  width: 0 !important;\n  min-width: 0 !important;\n  height: 0 !important;\n  min-height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  opacity: 0 !important; }\n  .bottom-block__bottomBlock___3Y_rW {\n  z-index: 60;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .bottom-block__bottomBlock___3Y_rW::-moz-focus-inner {\n    border: 0; }\n  .bottom-block__bottomBlock___3Y_rW.bottom-block__activated___YvJ-R .bottom-block__progressBarContainer___2CxAg,\n  .bottom-block__bottomBlock___3Y_rW.bottom-block__activated___YvJ-R .bottom-block__controlsContainerLeft___2Ozxp,\n  .bottom-block__bottomBlock___3Y_rW.bottom-block__activated___YvJ-R .bottom-block__controlsContainerRight___qaM9T,\n  .bottom-block__bottomBlock___3Y_rW.bottom-block__activated___YvJ-R .bottom-block__logoContainer___1esHz,\n  .bottom-block__bottomBlock___3Y_rW.bottom-block__activated___YvJ-R .bottom-block__background___2ZL6j {\n    opacity: 1; }\n  .bottom-block__bottomBlock___3Y_rW.bottom-block__showLogoAlways___2bJeD .bottom-block__logoContainer___1esHz {\n    opacity: 1; }\n  .bottom-block__bottomBlock___3Y_rW.bottom-block__logoHidden___2N6oy .bottom-block__fullScreenContainer___3q_py {\n    margin-right: 14px; }\n  div[data-playable-hook='player-container'][data-playable-max-width~=\"550px\"] .bottom-block__bottomBlock___3Y_rW.bottom-block__logoHidden___2N6oy .bottom-block__fullScreenContainer___3q_py {\n      margin-right: 7px; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .bottom-block__bottomBlock___3Y_rW.bottom-block__logoHidden___2N6oy .bottom-block__fullScreenContainer___3q_py {\n      margin-right: 25px; }\n  .bottom-block__bottomBlock___3Y_rW.bottom-block__logoHidden___2N6oy .bottom-block__logoContainer___1esHz {\n    display: none; }\n  .bottom-block__bottomBlock___3Y_rW.bottom-block__playControlHidden___1mEi9 .bottom-block__playContainer___25g5A {\n    display: none; }\n  .bottom-block__bottomBlock___3Y_rW.bottom-block__timeControlHidden___32pcE .bottom-block__timeContainer___2N6cy {\n    display: none; }\n  .bottom-block__bottomBlock___3Y_rW.bottom-block__volumeControlHidden___41JXw .bottom-block__volumeContainer___1Zwk- {\n    display: none; }\n  .bottom-block__bottomBlock___3Y_rW.bottom-block__fullScreenControlHidden___1jT2c .bottom-block__fullScreenContainer___3q_py {\n    display: none; }\n  .bottom-block__bottomBlock___3Y_rW.bottom-block__progressControlHidden___1rhHL .bottom-block__progressBarContainer___2CxAg {\n    display: none; }\n  .bottom-block__bottomBlock___3Y_rW.bottom-block__downloadButtonHidden___qisqf .bottom-block__downloadContainer___2Gxyu {\n    display: none; }\n  .bottom-block__elementsContainer___1MGej {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-flex: 2;\n      -ms-flex-positive: 2;\n          flex-grow: 2; }\n  .bottom-block__progressBarContainer___2CxAg {\n  position: relative;\n  top: 2px;\n  padding: 0 20px; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .bottom-block__progressBarContainer___2CxAg {\n    top: 3px;\n    padding: 0 30px; }\n  div[data-playable-hook='player-container'][data-playable-max-width~=\"550px\"] .bottom-block__progressBarContainer___2CxAg {\n    padding: 0 15px; }\n  div[data-playable-hook='player-container'][data-playable-max-width~=\"280px\"] .bottom-block__progressBarContainer___2CxAg {\n    padding: 0 12px; }\n  .bottom-block__progressBarContainer___2CxAg,\n.bottom-block__controlsContainerLeft___2Ozxp,\n.bottom-block__controlsContainerRight___qaM9T,\n.bottom-block__logoContainer___1esHz {\n  -webkit-transition: opacity .2s;\n  transition: opacity .2s;\n  opacity: 0; }\n  .bottom-block__controlsContainerRight___qaM9T,\n.bottom-block__controlsContainerLeft___2Ozxp {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 100%;\n  max-width: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .bottom-block__controlsContainerRight___qaM9T {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n  .bottom-block__controlsContainerRight___qaM9T,\n.bottom-block__controlsContainerLeft___2Ozxp,\n.bottom-block__logoContainer___1esHz {\n  height: 54px; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .bottom-block__controlsContainerRight___qaM9T, div[data-playable-hook='player-container'][data-playable-in-full-screen='true']\n  .bottom-block__controlsContainerLeft___2Ozxp, div[data-playable-hook='player-container'][data-playable-in-full-screen='true']\n  .bottom-block__logoContainer___1esHz {\n    height: 80px; }\n  div[data-playable-hook='player-container'][data-playable-max-width~=\"550px\"] .bottom-block__controlsContainerRight___qaM9T, div[data-playable-hook='player-container'][data-playable-max-width~=\"550px\"]\n  .bottom-block__controlsContainerLeft___2Ozxp, div[data-playable-hook='player-container'][data-playable-max-width~=\"550px\"]\n  .bottom-block__logoContainer___1esHz {\n    height: 42px; }\n  div[data-playable-hook='player-container'][data-playable-max-width~=\"350px\"] .bottom-block__controlsContainerRight___qaM9T, div[data-playable-hook='player-container'][data-playable-max-width~=\"350px\"]\n  .bottom-block__controlsContainerLeft___2Ozxp, div[data-playable-hook='player-container'][data-playable-max-width~=\"350px\"]\n  .bottom-block__logoContainer___1esHz {\n    height: 36px; }\n  .bottom-block__playContainer___25g5A {\n  margin-right: 9px;\n  margin-left: 13px; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .bottom-block__playContainer___25g5A {\n    margin-right: 20px;\n    margin-left: 20px; }\n  div[data-playable-hook='player-container'][data-playable-max-width~=\"550px\"] .bottom-block__playContainer___25g5A {\n    margin-left: 7px; }\n  div[data-playable-hook='player-container'][data-playable-max-width~=\"280px\"] .bottom-block__playContainer___25g5A {\n    margin-left: 4px; }\n  .bottom-block__volumeContainer___1Zwk- {\n  margin-right: 15px; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .bottom-block__volumeContainer___1Zwk- {\n    margin-right: 20px; }\n  .bottom-block__timeContainer___2N6cy {\n  margin-right: 18px; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .bottom-block__timeContainer___2N6cy {\n    margin-right: 30px; }\n  div[data-playable-hook='player-container'][data-playable-max-width~=\"400px\"] .bottom-block__timeContainer___2N6cy {\n    display: none; }\n  .bottom-block__downloadContainer___2Gxyu {\n  margin-right: 8px; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .bottom-block__downloadContainer___2Gxyu {\n    margin-right: 18px; }\n  .bottom-block__fullScreenContainer___3q_py {\n  margin-right: 8px; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .bottom-block__fullScreenContainer___3q_py {\n    margin-right: 18px; }\n  .bottom-block__logoContainer___1esHz {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-right: 14px; }\n  div[data-playable-hook='player-container'][data-playable-max-width~=\"550px\"] .bottom-block__logoContainer___1esHz {\n    margin-right: 9px; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .bottom-block__logoContainer___1esHz {\n    margin-right: 23px; }\n  div[data-playable-hook='player-container'][data-playable-max-width~=\"280px\"] .bottom-block__logoContainer___1esHz {\n    margin-right: 12px; }\n  .bottom-block__background___2ZL6j {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 181px;\n  -webkit-transition: opacity .2s;\n  transition: opacity .2s;\n  pointer-events: none;\n  opacity: 0;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), color-stop(24%, rgba(0, 0, 0, 0.03)), color-stop(50%, rgba(0, 0, 0, 0.15)), color-stop(75%, rgba(0, 0, 0, 0.3)), to(rgba(0, 0, 0, 0.4)));\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.03) 24%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.3) 75%, rgba(0, 0, 0, 0.4));\n  background-size: 100% 182px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdHRvbS1ibG9jay5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQWM7RUFBZCxxQkFBYztFQUFkLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlDQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIscUNBQTZCO0VBQTdCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLHlCQUF3QjtNQUF4QixzQkFBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLDBCQUFvQjtNQUFwQix1QkFBb0I7VUFBcEIsb0JBQW9CLEVBQUU7RUFDdEI7SUFDRSxZQUFZLEVBQUU7RUFFbEI7RUFDRSw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsc0JBQXNCLEVBQUU7RUFFMUI7RUFDRSxZQUFZO0VBQ1oscUJBQWM7RUFBZCxxQkFBYztFQUFkLGNBQWM7RUFDZCw2QkFBdUI7RUFBdkIsOEJBQXVCO01BQXZCLDJCQUF1QjtVQUF2Qix1QkFBdUIsRUFBRTtFQUN6QjtJQUNFLFVBQVUsRUFBRTtFQUNkOzs7OztJQUtFLFdBQVcsRUFBRTtFQUNmO0lBQ0UsV0FBVyxFQUFFO0VBQ2Y7SUFDRSxtQkFBbUIsRUFBRTtFQUNyQjtNQUNFLGtCQUFrQixFQUFFO0VBQ3RCO01BQ0UsbUJBQW1CLEVBQUU7RUFDekI7SUFDRSxjQUFjLEVBQUU7RUFDbEI7SUFDRSxjQUFjLEVBQUU7RUFDbEI7SUFDRSxjQUFjLEVBQUU7RUFDbEI7SUFDRSxjQUFjLEVBQUU7RUFDbEI7SUFDRSxjQUFjLEVBQUU7RUFDbEI7SUFDRSxjQUFjLEVBQUU7RUFDbEI7SUFDRSxjQUFjLEVBQUU7RUFFcEI7RUFDRSxtQkFBbUI7RUFDbkIscUJBQWM7RUFBZCxxQkFBYztFQUFkLGNBQWM7RUFDZCxZQUFZO0VBQ1osb0JBQWE7TUFBYixxQkFBYTtVQUFiLGFBQWEsRUFBRTtFQUVqQjtFQUNFLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZ0JBQWdCLEVBQUU7RUFDbEI7SUFDRSxTQUFTO0lBQ1QsZ0JBQWdCLEVBQUU7RUFDcEI7SUFDRSxnQkFBZ0IsRUFBRTtFQUNwQjtJQUNFLGdCQUFnQixFQUFFO0VBRXRCOzs7O0VBSUUsZ0NBQXdCO0VBQXhCLHdCQUF3QjtFQUN4QixXQUFXLEVBQUU7RUFFZjs7RUFFRSxtQkFBbUI7RUFDbkIscUJBQWM7RUFBZCxxQkFBYztFQUFkLGNBQWM7RUFDZCxvQkFBUTtNQUFSLFlBQVE7VUFBUixRQUFRO0VBQ1IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiwwQkFBb0I7TUFBcEIsdUJBQW9CO1VBQXBCLG9CQUFvQixFQUFFO0VBRXhCO0VBQ0Usc0JBQTBCO01BQTFCLG1CQUEwQjtVQUExQiwwQkFBMEIsRUFBRTtFQUU5Qjs7O0VBR0UsYUFBYSxFQUFFO0VBQ2Y7OztJQUdFLGFBQWEsRUFBRTtFQUNqQjs7O0lBR0UsYUFBYSxFQUFFO0VBQ2pCOzs7SUFHRSxhQUFhLEVBQUU7RUFFbkI7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUU7RUFDcEI7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUU7RUFDdEI7SUFDRSxpQkFBaUIsRUFBRTtFQUNyQjtJQUNFLGlCQUFpQixFQUFFO0VBRXZCO0VBQ0UsbUJBQW1CLEVBQUU7RUFDckI7SUFDRSxtQkFBbUIsRUFBRTtFQUV6QjtFQUNFLG1CQUFtQixFQUFFO0VBQ3JCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxjQUFjLEVBQUU7RUFFcEI7RUFDRSxrQkFBa0IsRUFBRTtFQUNwQjtJQUNFLG1CQUFtQixFQUFFO0VBRXpCO0VBQ0Usa0JBQWtCLEVBQUU7RUFDcEI7SUFDRSxtQkFBbUIsRUFBRTtFQUV6QjtFQUNFLHFCQUFjO0VBQWQscUJBQWM7RUFBZCxjQUFjO0VBQ2QsbUJBQW1CLEVBQUU7RUFDckI7SUFDRSxrQkFBa0IsRUFBRTtFQUN0QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0UsbUJBQW1CLEVBQUU7RUFFekI7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULFVBQVU7RUFDVixRQUFRO0VBQ1IsY0FBYztFQUNkLGdDQUF3QjtFQUF4Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxtT0FBNko7RUFBN0osNkpBQTZKO0VBQzdKLDRCQUE0QixFQUFFIiwiZmlsZSI6ImJvdHRvbS1ibG9jay5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRyb2xCdXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLmNvbnRyb2xCdXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IC43OyB9XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDsgfVxuXG4uYm90dG9tQmxvY2sge1xuICB6LWluZGV4OiA2MDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAuYm90dG9tQmxvY2s6Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgIGJvcmRlcjogMDsgfVxuICAuYm90dG9tQmxvY2suYWN0aXZhdGVkIC5wcm9ncmVzc0JhckNvbnRhaW5lcixcbiAgLmJvdHRvbUJsb2NrLmFjdGl2YXRlZCAuY29udHJvbHNDb250YWluZXJMZWZ0LFxuICAuYm90dG9tQmxvY2suYWN0aXZhdGVkIC5jb250cm9sc0NvbnRhaW5lclJpZ2h0LFxuICAuYm90dG9tQmxvY2suYWN0aXZhdGVkIC5sb2dvQ29udGFpbmVyLFxuICAuYm90dG9tQmxvY2suYWN0aXZhdGVkIC5iYWNrZ3JvdW5kIHtcbiAgICBvcGFjaXR5OiAxOyB9XG4gIC5ib3R0b21CbG9jay5zaG93TG9nb0Fsd2F5cyAubG9nb0NvbnRhaW5lciB7XG4gICAgb3BhY2l0eTogMTsgfVxuICAuYm90dG9tQmxvY2subG9nb0hpZGRlbiAuZnVsbFNjcmVlbkNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNHB4OyB9XG4gICAgZGl2W2RhdGEtcGxheWFibGUtaG9vaz0ncGxheWVyLWNvbnRhaW5lciddW2RhdGEtcGxheWFibGUtbWF4LXdpZHRofj1cIjU1MHB4XCJdIC5ib3R0b21CbG9jay5sb2dvSGlkZGVuIC5mdWxsU2NyZWVuQ29udGFpbmVyIHtcbiAgICAgIG1hcmdpbi1yaWdodDogN3B4OyB9XG4gICAgZGl2W2RhdGEtcGxheWFibGUtaG9vaz0ncGxheWVyLWNvbnRhaW5lciddW2RhdGEtcGxheWFibGUtaW4tZnVsbC1zY3JlZW49J3RydWUnXSAuYm90dG9tQmxvY2subG9nb0hpZGRlbiAuZnVsbFNjcmVlbkNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7IH1cbiAgLmJvdHRvbUJsb2NrLmxvZ29IaWRkZW4gLmxvZ29Db250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLmJvdHRvbUJsb2NrLnBsYXlDb250cm9sSGlkZGVuIC5wbGF5Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gIC5ib3R0b21CbG9jay50aW1lQ29udHJvbEhpZGRlbiAudGltZUNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAuYm90dG9tQmxvY2sudm9sdW1lQ29udHJvbEhpZGRlbiAudm9sdW1lQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gIC5ib3R0b21CbG9jay5mdWxsU2NyZWVuQ29udHJvbEhpZGRlbiAuZnVsbFNjcmVlbkNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAuYm90dG9tQmxvY2sucHJvZ3Jlc3NDb250cm9sSGlkZGVuIC5wcm9ncmVzc0JhckNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAuYm90dG9tQmxvY2suZG93bmxvYWRCdXR0b25IaWRkZW4gLmRvd25sb2FkQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG5cbi5lbGVtZW50c0NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZ3JvdzogMjsgfVxuXG4ucHJvZ3Jlc3NCYXJDb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xuICBwYWRkaW5nOiAwIDIwcHg7IH1cbiAgZGl2W2RhdGEtcGxheWFibGUtaG9vaz0ncGxheWVyLWNvbnRhaW5lciddW2RhdGEtcGxheWFibGUtaW4tZnVsbC1zY3JlZW49J3RydWUnXSAucHJvZ3Jlc3NCYXJDb250YWluZXIge1xuICAgIHRvcDogM3B4O1xuICAgIHBhZGRpbmc6IDAgMzBweDsgfVxuICBkaXZbZGF0YS1wbGF5YWJsZS1ob29rPSdwbGF5ZXItY29udGFpbmVyJ11bZGF0YS1wbGF5YWJsZS1tYXgtd2lkdGh+PVwiNTUwcHhcIl0gLnByb2dyZXNzQmFyQ29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDE1cHg7IH1cbiAgZGl2W2RhdGEtcGxheWFibGUtaG9vaz0ncGxheWVyLWNvbnRhaW5lciddW2RhdGEtcGxheWFibGUtbWF4LXdpZHRofj1cIjI4MHB4XCJdIC5wcm9ncmVzc0JhckNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAxMnB4OyB9XG5cbi5wcm9ncmVzc0JhckNvbnRhaW5lcixcbi5jb250cm9sc0NvbnRhaW5lckxlZnQsXG4uY29udHJvbHNDb250YWluZXJSaWdodCxcbi5sb2dvQ29udGFpbmVyIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XG4gIG9wYWNpdHk6IDA7IH1cblxuLmNvbnRyb2xzQ29udGFpbmVyUmlnaHQsXG4uY29udHJvbHNDb250YWluZXJMZWZ0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi5jb250cm9sc0NvbnRhaW5lclJpZ2h0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxuXG4uY29udHJvbHNDb250YWluZXJSaWdodCxcbi5jb250cm9sc0NvbnRhaW5lckxlZnQsXG4ubG9nb0NvbnRhaW5lciB7XG4gIGhlaWdodDogNTRweDsgfVxuICBkaXZbZGF0YS1wbGF5YWJsZS1ob29rPSdwbGF5ZXItY29udGFpbmVyJ11bZGF0YS1wbGF5YWJsZS1pbi1mdWxsLXNjcmVlbj0ndHJ1ZSddIC5jb250cm9sc0NvbnRhaW5lclJpZ2h0LCBkaXZbZGF0YS1wbGF5YWJsZS1ob29rPSdwbGF5ZXItY29udGFpbmVyJ11bZGF0YS1wbGF5YWJsZS1pbi1mdWxsLXNjcmVlbj0ndHJ1ZSddXG4gIC5jb250cm9sc0NvbnRhaW5lckxlZnQsIGRpdltkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXVtkYXRhLXBsYXlhYmxlLWluLWZ1bGwtc2NyZWVuPSd0cnVlJ11cbiAgLmxvZ29Db250YWluZXIge1xuICAgIGhlaWdodDogODBweDsgfVxuICBkaXZbZGF0YS1wbGF5YWJsZS1ob29rPSdwbGF5ZXItY29udGFpbmVyJ11bZGF0YS1wbGF5YWJsZS1tYXgtd2lkdGh+PVwiNTUwcHhcIl0gLmNvbnRyb2xzQ29udGFpbmVyUmlnaHQsIGRpdltkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXVtkYXRhLXBsYXlhYmxlLW1heC13aWR0aH49XCI1NTBweFwiXVxuICAuY29udHJvbHNDb250YWluZXJMZWZ0LCBkaXZbZGF0YS1wbGF5YWJsZS1ob29rPSdwbGF5ZXItY29udGFpbmVyJ11bZGF0YS1wbGF5YWJsZS1tYXgtd2lkdGh+PVwiNTUwcHhcIl1cbiAgLmxvZ29Db250YWluZXIge1xuICAgIGhlaWdodDogNDJweDsgfVxuICBkaXZbZGF0YS1wbGF5YWJsZS1ob29rPSdwbGF5ZXItY29udGFpbmVyJ11bZGF0YS1wbGF5YWJsZS1tYXgtd2lkdGh+PVwiMzUwcHhcIl0gLmNvbnRyb2xzQ29udGFpbmVyUmlnaHQsIGRpdltkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXVtkYXRhLXBsYXlhYmxlLW1heC13aWR0aH49XCIzNTBweFwiXVxuICAuY29udHJvbHNDb250YWluZXJMZWZ0LCBkaXZbZGF0YS1wbGF5YWJsZS1ob29rPSdwbGF5ZXItY29udGFpbmVyJ11bZGF0YS1wbGF5YWJsZS1tYXgtd2lkdGh+PVwiMzUwcHhcIl1cbiAgLmxvZ29Db250YWluZXIge1xuICAgIGhlaWdodDogMzZweDsgfVxuXG4ucGxheUNvbnRhaW5lciB7XG4gIG1hcmdpbi1yaWdodDogOXB4O1xuICBtYXJnaW4tbGVmdDogMTNweDsgfVxuICBkaXZbZGF0YS1wbGF5YWJsZS1ob29rPSdwbGF5ZXItY29udGFpbmVyJ11bZGF0YS1wbGF5YWJsZS1pbi1mdWxsLXNjcmVlbj0ndHJ1ZSddIC5wbGF5Q29udGFpbmVyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7IH1cbiAgZGl2W2RhdGEtcGxheWFibGUtaG9vaz0ncGxheWVyLWNvbnRhaW5lciddW2RhdGEtcGxheWFibGUtbWF4LXdpZHRofj1cIjU1MHB4XCJdIC5wbGF5Q29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogN3B4OyB9XG4gIGRpdltkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXVtkYXRhLXBsYXlhYmxlLW1heC13aWR0aH49XCIyODBweFwiXSAucGxheUNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDsgfVxuXG4udm9sdW1lQ29udGFpbmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4OyB9XG4gIGRpdltkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXVtkYXRhLXBsYXlhYmxlLWluLWZ1bGwtc2NyZWVuPSd0cnVlJ10gLnZvbHVtZUNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyB9XG5cbi50aW1lQ29udGFpbmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4OyB9XG4gIGRpdltkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXVtkYXRhLXBsYXlhYmxlLWluLWZ1bGwtc2NyZWVuPSd0cnVlJ10gLnRpbWVDb250YWluZXIge1xuICAgIG1hcmdpbi1yaWdodDogMzBweDsgfVxuICBkaXZbZGF0YS1wbGF5YWJsZS1ob29rPSdwbGF5ZXItY29udGFpbmVyJ11bZGF0YS1wbGF5YWJsZS1tYXgtd2lkdGh+PVwiNDAwcHhcIl0gLnRpbWVDb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cblxuLmRvd25sb2FkQ29udGFpbmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7IH1cbiAgZGl2W2RhdGEtcGxheWFibGUtaG9vaz0ncGxheWVyLWNvbnRhaW5lciddW2RhdGEtcGxheWFibGUtaW4tZnVsbC1zY3JlZW49J3RydWUnXSAuZG93bmxvYWRDb250YWluZXIge1xuICAgIG1hcmdpbi1yaWdodDogMThweDsgfVxuXG4uZnVsbFNjcmVlbkNvbnRhaW5lciB7XG4gIG1hcmdpbi1yaWdodDogOHB4OyB9XG4gIGRpdltkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXVtkYXRhLXBsYXlhYmxlLWluLWZ1bGwtc2NyZWVuPSd0cnVlJ10gLmZ1bGxTY3JlZW5Db250YWluZXIge1xuICAgIG1hcmdpbi1yaWdodDogMThweDsgfVxuXG4ubG9nb0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1yaWdodDogMTRweDsgfVxuICBkaXZbZGF0YS1wbGF5YWJsZS1ob29rPSdwbGF5ZXItY29udGFpbmVyJ11bZGF0YS1wbGF5YWJsZS1tYXgtd2lkdGh+PVwiNTUwcHhcIl0gLmxvZ29Db250YWluZXIge1xuICAgIG1hcmdpbi1yaWdodDogOXB4OyB9XG4gIGRpdltkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXVtkYXRhLXBsYXlhYmxlLWluLWZ1bGwtc2NyZWVuPSd0cnVlJ10gLmxvZ29Db250YWluZXIge1xuICAgIG1hcmdpbi1yaWdodDogMjNweDsgfVxuICBkaXZbZGF0YS1wbGF5YWJsZS1ob29rPSdwbGF5ZXItY29udGFpbmVyJ11bZGF0YS1wbGF5YWJsZS1tYXgtd2lkdGh+PVwiMjgwcHhcIl0gLmxvZ29Db250YWluZXIge1xuICAgIG1hcmdpbi1yaWdodDogMTJweDsgfVxuXG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxODFweDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMDMpIDI0JSwgcmdiYSgwLCAwLCAwLCAwLjE1KSA1MCUsIHJnYmEoMCwgMCwgMCwgMC4zKSA3NSUsIHJnYmEoMCwgMCwgMCwgMC40KSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxODJweDsgfVxuIl19 */";
    var styles$10 = {"controlButton":"bottom-block__controlButton___2zYHZ","hidden":"bottom-block__hidden___361S0","bottomBlock":"bottom-block__bottomBlock___3Y_rW","activated":"bottom-block__activated___YvJ-R","progressBarContainer":"bottom-block__progressBarContainer___2CxAg","controlsContainerLeft":"bottom-block__controlsContainerLeft___2Ozxp","controlsContainerRight":"bottom-block__controlsContainerRight___qaM9T","logoContainer":"bottom-block__logoContainer___1esHz","background":"bottom-block__background___2ZL6j","showLogoAlways":"bottom-block__showLogoAlways___2bJeD","logoHidden":"bottom-block__logoHidden___2N6oy","fullScreenContainer":"bottom-block__fullScreenContainer___3q_py","playControlHidden":"bottom-block__playControlHidden___1mEi9","playContainer":"bottom-block__playContainer___25g5A","timeControlHidden":"bottom-block__timeControlHidden___32pcE","timeContainer":"bottom-block__timeContainer___2N6cy","volumeControlHidden":"bottom-block__volumeControlHidden___41JXw","volumeContainer":"bottom-block__volumeContainer___1Zwk-","fullScreenControlHidden":"bottom-block__fullScreenControlHidden___1jT2c","progressControlHidden":"bottom-block__progressControlHidden___1rhHL","downloadButtonHidden":"bottom-block__downloadButtonHidden___qisqf","downloadContainer":"bottom-block__downloadContainer___2Gxyu","elementsContainer":"bottom-block__elementsContainer___1MGej"};
    styleInject(css$10);

    var BottomBlockView = /** @class */ (function (_super) {
        __extends(BottomBlockView, _super);
        function BottomBlockView(config) {
            var _this = _super.call(this) || this;
            var callbacks = config.callbacks, elements = config.elements;
            _this._callbacks = callbacks;
            _this._initDOM(elements);
            _this._bindEvents();
            return _this;
        }
        BottomBlockView.prototype._initDOM = function (elements) {
            this._$rootElement = htmlToElement(anonymous$17({
                styles: this.styleNames,
            }));
            var $playContainer = getElementByHook(this._$rootElement, 'play-container');
            var $volumeContainer = getElementByHook(this._$rootElement, 'volume-container');
            var $timeContainer = getElementByHook(this._$rootElement, 'time-container');
            var $fullScreenContainer = getElementByHook(this._$rootElement, 'full-screen-container');
            var $logoContainer = getElementByHook(this._$rootElement, 'logo-container');
            var $progressBarContainer = getElementByHook(this._$rootElement, 'progress-bar-container');
            var $downloadContainer = getElementByHook(this._$rootElement, 'download-container');
            $playContainer.appendChild(elements.play);
            $volumeContainer.appendChild(elements.volume);
            $timeContainer.appendChild(elements.time);
            $fullScreenContainer.appendChild(elements.fullScreen);
            $logoContainer.appendChild(elements.logo);
            $progressBarContainer.appendChild(elements.progress);
            $downloadContainer.appendChild(elements.download);
        };
        BottomBlockView.prototype._preventClickPropagation = function (e) {
            e.stopPropagation();
        };
        BottomBlockView.prototype._bindEvents = function () {
            this._$rootElement.addEventListener('click', this._preventClickPropagation);
            this._$rootElement.addEventListener('mousemove', this._callbacks.onBlockMouseMove);
            this._$rootElement.addEventListener('mouseleave', this._callbacks.onBlockMouseOut);
        };
        BottomBlockView.prototype._unbindEvents = function () {
            this._$rootElement.removeEventListener('click', this._preventClickPropagation);
            this._$rootElement.removeEventListener('mousemove', this._callbacks.onBlockMouseMove);
            this._$rootElement.removeEventListener('mouseleave', this._callbacks.onBlockMouseOut);
        };
        BottomBlockView.prototype.setShouldLogoShowAlwaysFlag = function (isShowAlways) {
            toggleElementClass(this._$rootElement, this.styleNames.showLogoAlways, isShowAlways);
            this.showLogo();
        };
        BottomBlockView.prototype.showPlayControl = function () {
            this._$rootElement.classList.remove(this.styleNames.playControlHidden);
        };
        BottomBlockView.prototype.hidePlayControl = function () {
            this._$rootElement.classList.add(this.styleNames.playControlHidden);
        };
        BottomBlockView.prototype.showTimeControl = function () {
            this._$rootElement.classList.remove(this.styleNames.timeControlHidden);
        };
        BottomBlockView.prototype.hideTimeControl = function () {
            this._$rootElement.classList.add(this.styleNames.timeControlHidden);
        };
        BottomBlockView.prototype.showVolumeControl = function () {
            this._$rootElement.classList.remove(this.styleNames.volumeControlHidden);
        };
        BottomBlockView.prototype.hideVolumeControl = function () {
            this._$rootElement.classList.add(this.styleNames.volumeControlHidden);
        };
        BottomBlockView.prototype.showFullScreenControl = function () {
            this._$rootElement.classList.remove(this.styleNames.fullScreenControlHidden);
        };
        BottomBlockView.prototype.hideFullScreenControl = function () {
            this._$rootElement.classList.add(this.styleNames.fullScreenControlHidden);
        };
        BottomBlockView.prototype.showLogo = function () {
            this._$rootElement.classList.remove(this.styleNames.logoHidden);
        };
        BottomBlockView.prototype.hideLogo = function () {
            this._$rootElement.classList.add(this.styleNames.logoHidden);
        };
        BottomBlockView.prototype.showProgressControl = function () {
            this._$rootElement.classList.remove(this.styleNames.progressControlHidden);
        };
        BottomBlockView.prototype.hideProgressControl = function () {
            this._$rootElement.classList.add(this.styleNames.progressControlHidden);
        };
        BottomBlockView.prototype.showDownloadButton = function () {
            this._$rootElement.classList.remove(this.styleNames.downloadButtonHidden);
        };
        BottomBlockView.prototype.hideDownloadButton = function () {
            this._$rootElement.classList.add(this.styleNames.downloadButtonHidden);
        };
        BottomBlockView.prototype.show = function () {
            this._$rootElement.classList.remove(this.styleNames.hidden);
        };
        BottomBlockView.prototype.hide = function () {
            this._$rootElement.classList.add(this.styleNames.hidden);
        };
        BottomBlockView.prototype.getElement = function () {
            return this._$rootElement;
        };
        BottomBlockView.prototype.showContent = function () {
            this._$rootElement.classList.add(this.styleNames.activated);
        };
        BottomBlockView.prototype.hideContent = function () {
            this._$rootElement.classList.remove(this.styleNames.activated);
        };
        BottomBlockView.prototype.destroy = function () {
            this._unbindEvents();
            if (this._$rootElement.parentNode) {
                this._$rootElement.parentNode.removeChild(this._$rootElement);
            }
            this._$rootElement = null;
        };
        return BottomBlockView;
    }(View));
    BottomBlockView.extendStyleNames(styles$10);

    var BottomBlock = /** @class */ (function () {
        function BottomBlock(dependencies) {
            this._isBlockFocused = false;
            this.isHidden = false;
            var eventEmitter = dependencies.eventEmitter;
            this._eventEmitter = eventEmitter;
            this._bindViewCallbacks();
            this._initUI(this._getControlElements(dependencies));
            this._bindEvents();
        }
        BottomBlock.prototype._getControlElements = function (dependencies) {
            var playControl = dependencies.playControl, progressControl = dependencies.progressControl, timeControl = dependencies.timeControl, volumeControl = dependencies.volumeControl, fullScreenControl = dependencies.fullScreenControl, logo = dependencies.logo, downloadButton = dependencies.downloadButton;
            return {
                play: playControl.getElement(),
                progress: progressControl.getElement(),
                time: timeControl.getElement(),
                volume: volumeControl.getElement(),
                fullScreen: fullScreenControl.getElement(),
                download: downloadButton.getElement(),
                logo: logo.getElement(),
            };
        };
        BottomBlock.prototype.getElement = function () {
            return this.view.getElement();
        };
        BottomBlock.prototype._initUI = function (elements) {
            var config = {
                elements: elements,
                callbacks: {
                    onBlockMouseMove: this._setFocusState,
                    onBlockMouseOut: this._removeFocusState,
                },
            };
            this.view = new BottomBlock.View(config);
            this.hideLogo();
            this.hideDownloadButton();
        };
        BottomBlock.prototype._bindEvents = function () {
            this._unbindEvents = this._eventEmitter.bindEvents([[UI_EVENTS.FULL_SCREEN_STATE_CHANGED, this._removeFocusState]], this);
        };
        BottomBlock.prototype._bindViewCallbacks = function () {
            this._setFocusState = this._setFocusState.bind(this);
            this._removeFocusState = this._removeFocusState.bind(this);
        };
        BottomBlock.prototype._setFocusState = function () {
            this._isBlockFocused = true;
        };
        BottomBlock.prototype._removeFocusState = function () {
            this._isBlockFocused = false;
        };
        Object.defineProperty(BottomBlock.prototype, "isFocused", {
            get: function () {
                return this._isBlockFocused;
            },
            enumerable: true,
            configurable: true
        });
        BottomBlock.prototype.showContent = function () {
            this.view.showContent();
        };
        BottomBlock.prototype.hideContent = function () {
            this.view.hideContent();
        };
        BottomBlock.prototype.hide = function () {
            this.isHidden = true;
            this.view.hide();
        };
        BottomBlock.prototype.show = function () {
            this.isHidden = false;
            this.view.show();
        };
        /**
         * Method for allowing logo to be always shown in bottom block
         * @param flag - `true` for showing always
         * @example
         * player.setAlwaysShowLogo(true);
         *
         */
        BottomBlock.prototype.setAlwaysShowLogo = function (flag) {
            this.view.setShouldLogoShowAlwaysFlag(flag);
        };
        /**
         * Method for hiding logo. If you use `setAlwaysShowLogo` or `setControlsShouldAlwaysShow`, logo would automaticaly appear.
         * @example
         * player.hideLogo();
         */
        BottomBlock.prototype.hideLogo = function () {
            this.view.hideLogo();
        };
        /**
         * Method for showing logo.
         * @example
         * player.showLogo();
         */
        BottomBlock.prototype.showLogo = function () {
            this.view.showLogo();
        };
        /**
         * Method for showing play control.
         * @example
         * player.showPlayControl();
         */
        BottomBlock.prototype.showPlayControl = function () {
            this.view.showPlayControl();
        };
        /**
         * Method for showing volume control.
         * @example
         * player.showVolumeControl();
         */
        BottomBlock.prototype.showVolumeControl = function () {
            this.view.showVolumeControl();
        };
        /**
         * Method for showing time control.
         * @example
         * player.showTimeControl();
         */
        BottomBlock.prototype.showTimeControl = function () {
            this.view.showTimeControl();
        };
        /**
         * Method for showing full screen control.
         * @example
         * player.showFullScreenControl();
         */
        BottomBlock.prototype.showFullScreenControl = function () {
            this.view.showFullScreenControl();
        };
        /**
         * Method for showing progress control.
         * @example
         * player.showProgressControl();
         */
        BottomBlock.prototype.showProgressControl = function () {
            this.view.showProgressControl();
        };
        /**
         * Method for showing download button.
         * @example
         * player.showDownloadButton();
         */
        BottomBlock.prototype.showDownloadButton = function () {
            this.view.showDownloadButton();
        };
        /**
         * Method for hiding play control.
         * @example
         * player.hidePlayControl();
         */
        BottomBlock.prototype.hidePlayControl = function () {
            this.view.hidePlayControl();
        };
        /**
         * Method for hiding voluem control.
         * @example
         * player.hideVolumeControl();
         */
        BottomBlock.prototype.hideVolumeControl = function () {
            this.view.hideVolumeControl();
        };
        /**
         * Method for hiding time control.
         * @example
         * player.hideTimeControl();
         */
        BottomBlock.prototype.hideTimeControl = function () {
            this.view.hideTimeControl();
        };
        /**
         * Method for hiding full screen control.
         * @example
         * player.hideFullScreenControl();
         */
        BottomBlock.prototype.hideFullScreenControl = function () {
            this.view.hideFullScreenControl();
        };
        /**
         * Method for hiding progress control.
         * @example
         * player.hideProgressControl();
         */
        BottomBlock.prototype.hideProgressControl = function () {
            this.view.hideProgressControl();
        };
        /**
         * Method for hiding download button.
         * @example
         * player.hideDownloadButton();
         */
        BottomBlock.prototype.hideDownloadButton = function () {
            this.view.hideDownloadButton();
        };
        BottomBlock.prototype.destroy = function () {
            this._unbindEvents();
            this.view.destroy();
            this.view = null;
            this._eventEmitter = null;
        };
        BottomBlock.moduleName = 'bottomBlock';
        BottomBlock.View = BottomBlockView;
        BottomBlock.dependencies = [
            'playControl',
            'progressControl',
            'timeControl',
            'volumeControl',
            'fullScreenControl',
            'logo',
            'downloadButton',
            'eventEmitter',
        ];
        __decorate([
            playerAPI()
        ], BottomBlock.prototype, "setAlwaysShowLogo", null);
        __decorate([
            playerAPI()
        ], BottomBlock.prototype, "hideLogo", null);
        __decorate([
            playerAPI()
        ], BottomBlock.prototype, "showLogo", null);
        __decorate([
            playerAPI()
        ], BottomBlock.prototype, "showPlayControl", null);
        __decorate([
            playerAPI()
        ], BottomBlock.prototype, "showVolumeControl", null);
        __decorate([
            playerAPI()
        ], BottomBlock.prototype, "showTimeControl", null);
        __decorate([
            playerAPI()
        ], BottomBlock.prototype, "showFullScreenControl", null);
        __decorate([
            playerAPI()
        ], BottomBlock.prototype, "showProgressControl", null);
        __decorate([
            playerAPI()
        ], BottomBlock.prototype, "showDownloadButton", null);
        __decorate([
            playerAPI()
        ], BottomBlock.prototype, "hidePlayControl", null);
        __decorate([
            playerAPI()
        ], BottomBlock.prototype, "hideVolumeControl", null);
        __decorate([
            playerAPI()
        ], BottomBlock.prototype, "hideTimeControl", null);
        __decorate([
            playerAPI()
        ], BottomBlock.prototype, "hideFullScreenControl", null);
        __decorate([
            playerAPI()
        ], BottomBlock.prototype, "hideProgressControl", null);
        __decorate([
            playerAPI()
        ], BottomBlock.prototype, "hideDownloadButton", null);
        return BottomBlock;
    }());

    function anonymous$18(props
    /*``*/) {
    var out='<div class="'+(props.styles.tooltip)+'" role="tooltip"> <div class="'+(props.styles.tooltipInner)+'" data-playable-hook="tooltip-inner"></div></div>';return out;
    }

    function anonymous$19(props
    /*``*/) {
    var out='<div class="'+(props.styles.tooltipContainer)+'"></div>';return out;
    }

    var css$11 = ".tooltip__controlButton___E3x3L {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0;\n  cursor: pointer;\n  -webkit-transition-duration: .2s;\n          transition-duration: .2s;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  opacity: 1;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background-color: transparent;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .tooltip__controlButton___E3x3L:hover {\n    opacity: .7; }\n  .tooltip__hidden___3R_Au {\n  visibility: hidden !important;\n  width: 0 !important;\n  min-width: 0 !important;\n  height: 0 !important;\n  min-height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  opacity: 0 !important; }\n  .tooltip__tooltip___1TO08 {\n  position: absolute;\n  z-index: 100;\n  visibility: hidden;\n  -webkit-transition: opacity .2s, visibility .2s;\n  transition: opacity .2s, visibility .2s;\n  opacity: 0; }\n  .tooltip__tooltip___1TO08.tooltip__showAsText___3-qca {\n    padding: 4px 5px;\n    background: rgba(0, 0, 0, 0.5); }\n  .tooltip__tooltip___1TO08.tooltip__tooltipVisible___37y2K {\n    visibility: visible;\n    opacity: 1; }\n  .tooltip__showAsText___3-qca .tooltip__tooltipInner___2s85x {\n  font-size: 11px;\n  line-height: 12px;\n  white-space: nowrap;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2x0aXAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFjO0VBQWQscUJBQWM7RUFBZCxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLHFDQUE2QjtFQUE3Qiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsY0FBYztFQUNkLDhCQUE4QjtFQUM5Qix5QkFBd0I7TUFBeEIsc0JBQXdCO1VBQXhCLHdCQUF3QjtFQUN4QiwwQkFBb0I7TUFBcEIsdUJBQW9CO1VBQXBCLG9CQUFvQixFQUFFO0VBQ3RCO0lBQ0UsWUFBWSxFQUFFO0VBRWxCO0VBQ0UsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHNCQUFzQixFQUFFO0VBRTFCO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0RBQXdDO0VBQXhDLHdDQUF3QztFQUN4QyxXQUFXLEVBQUU7RUFDYjtJQUNFLGlCQUFpQjtJQUNqQiwrQkFBK0IsRUFBRTtFQUNuQztJQUNFLG9CQUFvQjtJQUNwQixXQUFXLEVBQUU7RUFFakI7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixhQUFhLEVBQUUiLCJmaWxlIjoidG9vbHRpcC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRyb2xCdXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLmNvbnRyb2xCdXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IC43OyB9XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDsgfVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzLCB2aXNpYmlsaXR5IC4ycztcbiAgb3BhY2l0eTogMDsgfVxuICAudG9vbHRpcC5zaG93QXNUZXh0IHtcbiAgICBwYWRkaW5nOiA0cHggNXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxuICAudG9vbHRpcC50b29sdGlwVmlzaWJsZSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxOyB9XG5cbi5zaG93QXNUZXh0IC50b29sdGlwSW5uZXIge1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogd2hpdGU7IH1cbiJdfQ== */";
    var styles$11 = {"controlButton":"tooltip__controlButton___E3x3L","hidden":"tooltip__hidden___3R_Au","tooltip":"tooltip__tooltip___1TO08","showAsText":"tooltip__showAsText___3-qca","tooltipVisible":"tooltip__tooltipVisible___37y2K","tooltipInner":"tooltip__tooltipInner___2s85x"};
    styleInject(css$11);

    var Tooltip = /** @class */ (function (_super) {
        __extends(Tooltip, _super);
        function Tooltip() {
            var _this = _super.call(this) || this;
            _this._isHidden = true;
            _this._initDOM();
            return _this;
        }
        Tooltip.prototype._initDOM = function () {
            this._$rootElement = htmlToElement(anonymous$18({
                styles: this.styleNames,
            }));
            this._$tooltipInner = getElementByHook(this._$rootElement, 'tooltip-inner');
        };
        Tooltip.prototype.getElement = function () {
            return this._$rootElement;
        };
        Object.defineProperty(Tooltip.prototype, "isHidden", {
            get: function () {
                return this._isHidden;
            },
            enumerable: true,
            configurable: true
        });
        Tooltip.prototype.show = function () {
            if (!this._isHidden) {
                return;
            }
            this._isHidden = false;
            this._$rootElement.classList.add(this.styleNames.tooltipVisible);
        };
        Tooltip.prototype.hide = function () {
            if (this._isHidden) {
                return;
            }
            this._isHidden = true;
            this._$rootElement.classList.remove(this.styleNames.tooltipVisible);
        };
        Tooltip.prototype.setText = function (text) {
            this.clearElement();
            this._showAsText();
            this._$tooltipInner.innerText = text;
        };
        Tooltip.prototype.clearElement = function () {
            this._$tooltipInner.firstChild &&
                this._$tooltipInner.removeChild(this._$tooltipInner.firstChild);
        };
        Tooltip.prototype.setElement = function (element) {
            if (element !== this._$tooltipInner.firstChild) {
                this._showAsElement();
                this.clearElement();
                if (element) {
                    this._$tooltipInner.appendChild(element);
                }
            }
        };
        Tooltip.prototype._showAsText = function () {
            this._$rootElement.classList.remove(this.styleNames.showAsElement);
            this._$rootElement.classList.add(this.styleNames.showAsText);
        };
        Tooltip.prototype._showAsElement = function () {
            this._$rootElement.classList.remove(this.styleNames.showAsText);
            this._$rootElement.classList.add(this.styleNames.showAsElement);
        };
        Tooltip.prototype.setStyle = function (style) {
            var _this = this;
            Object.keys(style).forEach(function (styleKey) {
                _this._$rootElement.style[styleKey] = style[styleKey];
            });
        };
        Tooltip.prototype.destroy = function () {
            this._$rootElement = null;
            this._$tooltipInner = null;
        };
        return Tooltip;
    }(Stylable));
    Tooltip.extendStyleNames(styles$11);

    var TooltipPositionPlacement;
    (function (TooltipPositionPlacement) {
        TooltipPositionPlacement["TOP"] = "top";
        TooltipPositionPlacement["BOTTOM"] = "bottom";
    })(TooltipPositionPlacement || (TooltipPositionPlacement = {}));

    function calcTooltipCenterX(tooltipReferenceOffsetX, tooltipReferenceWidth) {
        return tooltipReferenceOffsetX + tooltipReferenceWidth / 2;
    }
    function getTooltipPositionByReferenceElement(tooltipReferenceElement, tooltipContainerElement, tooltipCenterXfn) {
        if (tooltipCenterXfn === void 0) { tooltipCenterXfn = calcTooltipCenterX; }
        var tooltipReferenceRect = tooltipReferenceElement.getBoundingClientRect();
        var tooltipContainerRect = tooltipContainerElement.getBoundingClientRect();
        var tooltipPlacement = tooltipReferenceRect.top > tooltipContainerRect.top
            ? TooltipPositionPlacement.BOTTOM
            : TooltipPositionPlacement.TOP;
        var tooltipReferenceOffsetX = tooltipReferenceRect.left - tooltipContainerRect.left;
        var tooltipCenterX = tooltipCenterXfn(tooltipReferenceOffsetX, tooltipReferenceRect.width);
        return { placement: tooltipPlacement, x: tooltipCenterX };
    }

    var SHOW_EVENTS = ['mouseenter', 'focus'];
    var HIDE_EVENTS = ['mouseleave', 'blur'];
    var TooltipReference = /** @class */ (function () {
        function TooltipReference(reference, tooltipService, options) {
            this._$reference = reference;
            this._options = options;
            this._tooltipService = tooltipService;
            this._eventListeners = [];
            this._bindEvents();
        }
        TooltipReference.prototype._bindEvents = function () {
            var _this = this;
            SHOW_EVENTS.forEach(function (event) {
                var fn = function () {
                    _this.show();
                };
                _this._eventListeners.push({ event: event, fn: fn });
                _this._$reference.addEventListener(event, fn);
            });
            HIDE_EVENTS.forEach(function (event) {
                var fn = function () {
                    _this.hide();
                };
                _this._eventListeners.push({ event: event, fn: fn });
                _this._$reference.addEventListener(event, fn);
            });
        };
        Object.defineProperty(TooltipReference.prototype, "isHidden", {
            get: function () {
                return this._tooltipService.isHidden;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipReference.prototype, "isDisabled", {
            get: function () {
                return this._isDisabled;
            },
            enumerable: true,
            configurable: true
        });
        TooltipReference.prototype.show = function () {
            if (this._isDisabled) {
                return;
            }
            this._tooltipService.show({
                text: this._options.text,
                element: this._options.element,
                position: getTooltipPositionByReferenceElement(this._$reference, this._tooltipService.tooltipContainerElement),
            });
        };
        TooltipReference.prototype.hide = function () {
            this._tooltipService.hide();
        };
        TooltipReference.prototype.setText = function (text) {
            this._options.text = text;
            this._tooltipService.setText(text);
        };
        TooltipReference.prototype.disable = function () {
            this._isDisabled = true;
        };
        TooltipReference.prototype.enable = function () {
            this._isDisabled = false;
        };
        TooltipReference.prototype.destroy = function () {
            var _this = this;
            this._eventListeners.forEach(function (_a) {
                var event = _a.event, fn = _a.fn;
                _this._$reference.removeEventListener(event, fn);
            });
            this._eventListeners = null;
            this._$reference = null;
            this._tooltipService = null;
            this._options = null;
        };
        return TooltipReference;
    }());

    var css$12 = ".tooltip-container__tooltipContainer___2guVa {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 10px 10px 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2x0aXAtY29udGFpbmVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsT0FBTztFQUNQLFNBQVM7RUFDVCxVQUFVO0VBQ1YsUUFBUTtFQUNSLHFCQUFjO0VBQWQscUJBQWM7RUFBZCxjQUFjO0VBQ2Qsc0JBQXNCLEVBQUUiLCJmaWxlIjoidG9vbHRpcC1jb250YWluZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sdGlwQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMTBweCAxMHB4IDZweDsgfVxuIl19 */";
    var styles$12 = {"tooltipContainer":"tooltip-container__tooltipContainer___2guVa"};
    styleInject(css$12);

    var TooltipContainer = /** @class */ (function (_super) {
        __extends(TooltipContainer, _super);
        function TooltipContainer(tooltip) {
            var _this = _super.call(this) || this;
            _this._tooltip = tooltip;
            _this._initDOM();
            return _this;
        }
        TooltipContainer.prototype.getElement = function () {
            return this._$rootElement;
        };
        TooltipContainer.prototype._initDOM = function () {
            this._$rootElement = htmlToElement(anonymous$19({
                styles: this.styleNames,
            }));
            this._$rootElement.appendChild(this._tooltip.getElement());
        };
        TooltipContainer.prototype.getTooltipPositionStyles = function (position) {
            if (typeof position === 'function') {
                position = position(this._$rootElement);
            }
            if (position.placement === TooltipPositionPlacement.TOP) {
                return {
                    left: this._getTooltipLeftX(position.x) + "px",
                    top: 0,
                    bottom: 'initial',
                };
            }
            return {
                left: this._getTooltipLeftX(position.x) + "px",
                top: 'initial',
                bottom: 0,
            };
        };
        TooltipContainer.prototype.destroy = function () {
            this._tooltip = null;
            this._$rootElement = null;
        };
        TooltipContainer.prototype._getTooltipLeftX = function (tooltipCenterX) {
            var tooltipRect = this._tooltip.getElement().getBoundingClientRect();
            var tooltipContainerRect = this._$rootElement.getBoundingClientRect();
            var tooltipLeftX = tooltipCenterX - tooltipRect.width / 2;
            // ensure `x` is in range of placeholder rect
            tooltipLeftX = Math.max(tooltipLeftX, 0);
            tooltipLeftX = Math.min(tooltipLeftX, tooltipContainerRect.width - tooltipRect.width);
            return tooltipLeftX;
        };
        return TooltipContainer;
    }(Stylable));
    TooltipContainer.extendStyleNames(styles$12);

    var TooltipService = /** @class */ (function () {
        function TooltipService(_a) {
            var eventEmitter = _a.eventEmitter;
            this._eventEmitter = eventEmitter;
            this._tooltip = new Tooltip();
            this._tooltipContainer = new TooltipContainer(this._tooltip);
            this._bindEvents();
        }
        Object.defineProperty(TooltipService.prototype, "isHidden", {
            get: function () {
                return this._tooltip.isHidden;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipService.prototype, "tooltipContainerElement", {
            get: function () {
                return this._tooltipContainer.getElement();
            },
            enumerable: true,
            configurable: true
        });
        TooltipService.prototype._bindEvents = function () {
            this._unbindEvents = this._eventEmitter.bindEvents([[UI_EVENTS.FULL_SCREEN_STATE_CHANGED, this.hide]], this);
        };
        /**
         * Set new tooltip title
         */
        TooltipService.prototype.setText = function (text) {
            this._tooltip.setText(text);
        };
        /**
         * Show tooltip with title
         */
        TooltipService.prototype.show = function (options) {
            // NOTE: its important to set tooltip text before update tooltip position styles
            if (options.element) {
                this._tooltip.setElement(options.element);
            }
            else {
                this._tooltip.setText(options.text);
            }
            this._tooltip.setStyle(this._tooltipContainer.getTooltipPositionStyles(options.position));
            this._tooltip.show();
        };
        TooltipService.prototype.clearElement = function () {
            this._tooltip.clearElement();
        };
        /**
         * Hide tooltip
         */
        TooltipService.prototype.hide = function () {
            this._tooltip.hide();
        };
        /**
         * Create tooltip reference which show/hide tooltip on hover and focus events
         * @param reference - reference node
         * @param options - tooltip title and other options
         * @returns tooltip reference instance
         */
        TooltipService.prototype.createReference = function (reference, options) {
            return new TooltipReference(reference, this, options);
        };
        TooltipService.prototype.destroy = function () {
            this._unbindEvents();
            this._tooltip.destroy();
            this._tooltipContainer.destroy();
            this._tooltip = null;
            this._tooltipContainer = null;
            this._eventEmitter = null;
        };
        TooltipService.moduleName = 'tooltipService';
        TooltipService.dependencies = ['eventEmitter'];
        return TooltipService;
    }());

    function calcProgressTimeTooltipCenterX(progressPercent, progressElementOffsetX, progressElementWidth) {
        return (progressElementOffsetX + (progressPercent * progressElementWidth) / 100);
    }
    function getProgressTimeTooltipPosition(progressPercent, progressElement, tooltipContainer) {
        return getTooltipPositionByReferenceElement(progressElement, tooltipContainer, function (progressElementOffsetX, progressElementWidth) {
            return calcProgressTimeTooltipCenterX(progressPercent, progressElementOffsetX, progressElementWidth);
        });
    }

    function anonymous$20(props
    /*``*/) {
    var out='<div data-playable-hook="progress-control" class="'+(props.styles.seekBlock)+'" tabindex="0"> <div class="'+(props.styles.progressBarsWrapper)+'"> <div class="'+(props.styles.progressBar)+' '+(props.styles.background)+'"> </div> <div data-playable-hook="progress-buffered" class="'+(props.styles.progressBar)+' '+(props.styles.buffered)+'"> </div> <div data-playable-hook="progress-seek-to" class="'+(props.styles.progressBar)+' '+(props.styles.seekTo)+' '+(props.themeStyles.progressSeekTo)+'"> </div> <div data-playable-hook="progress-played" class="'+(props.styles.progressBar)+' '+(props.styles.played)+' '+(props.themeStyles.progressPlayed)+'"> </div> <div data-playable-hook="progress-time-indicators" class="'+(props.styles.timeIndicators)+'"> </div> </div> <div data-playable-hook="progress-hitbox" class="'+(props.styles.hitbox)+'"> </div> <div data-playable-hook="progress-seek-button" class="'+(props.styles.seekButtonContainer)+'"> <div class="'+(props.styles.seekButton)+' '+(props.themeStyles.progressSeekBtn)+'"> </div> </div> <div data-playable-hook="progress-sync-button" class="'+(props.styles.syncButton)+'"> </div></div>';return out;
    }

    function anonymous$21(props
    /*``*/) {
    var out='<div class="'+(props.styles.timeIndicator)+'" style="left: '+(props.percent)+'%"></div>';return out;
    }

    var progressViewTheme = {
        progressPlayed: {
            backgroundColor: function (data) { return data.progressColor; },
        },
        progressSeekTo: {
            backgroundColor: function (data) {
                return transperentizeColor(data.progressColor, 0.5);
            },
        },
        progressSeekBtn: {
            backgroundColor: function (data) { return data.progressColor; },
        },
    };

    var css$13 = ".progress__controlButton___2pi4V {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0;\n  cursor: pointer;\n  -webkit-transition-duration: .2s;\n          transition-duration: .2s;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  opacity: 1;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background-color: transparent;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .progress__controlButton___2pi4V:hover {\n    opacity: .7; }\n  .progress__hidden___3Rjqh {\n  visibility: hidden !important;\n  width: 0 !important;\n  min-width: 0 !important;\n  height: 0 !important;\n  min-height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  opacity: 0 !important; }\n  .progress__seekBlock___V4YqW {\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 6px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity .2s, visibility .2s;\n  transition: opacity .2s, visibility .2s;\n  -ms-touch-action: none;\n      touch-action: none; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .progress__seekBlock___V4YqW {\n    height: 8px; }\n  .progress__seekBlock___V4YqW.progress__inLive___3324R .progress__played___1dShL {\n    background-color: #ea492e; }\n  .progress__seekBlock___V4YqW.progress__inLive___3324R .progress__seekTo___T0D_O {\n    background-color: rgba(234, 73, 46, 0.5); }\n  .progress__seekBlock___V4YqW.progress__inLive___3324R .progress__syncButton___3N1QN {\n    display: initial; }\n  .progress__seekBlock___V4YqW:hover .progress__progressBarsWrapper___1SSlL, .progress__seekBlock___V4YqW.progress__isDragging___2Tcb5 .progress__progressBarsWrapper___1SSlL {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .progress__seekBlock___V4YqW:hover .progress__progressBarsWrapper___1SSlL, div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .progress__seekBlock___V4YqW.progress__isDragging___2Tcb5 .progress__progressBarsWrapper___1SSlL {\n      -webkit-transform: scaleY(1);\n              transform: scaleY(1); }\n  .progress__seekBlock___V4YqW:hover .progress__progressBarsWrapper___1SSlL .progress__seekTo___T0D_O, .progress__seekBlock___V4YqW.progress__isDragging___2Tcb5 .progress__progressBarsWrapper___1SSlL .progress__seekTo___T0D_O {\n      opacity: 1; }\n  .progress__seekBlock___V4YqW:hover .progress__progressBarsWrapper___1SSlL .progress__timeIndicator___2wltB:after, .progress__seekBlock___V4YqW.progress__isDragging___2Tcb5 .progress__progressBarsWrapper___1SSlL .progress__timeIndicator___2wltB:after {\n      -webkit-transform: scale(1);\n              transform: scale(1); }\n  .progress__seekBlock___V4YqW:hover .progress__seekButton___3UtgF, .progress__seekBlock___V4YqW.progress__isDragging___2Tcb5 .progress__seekButton___3UtgF {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  .progress__seekBlock___V4YqW:hover .progress__syncButton___3N1QN, .progress__seekBlock___V4YqW.progress__isDragging___2Tcb5 .progress__syncButton___3N1QN {\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4); }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .progress__seekBlock___V4YqW:hover .progress__syncButton___3N1QN, div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .progress__seekBlock___V4YqW.progress__isDragging___2Tcb5 .progress__syncButton___3N1QN {\n      -webkit-transform: scale(1.33);\n              transform: scale(1.33); }\n  .progress__seekBlock___V4YqW:hover .progress__syncButton___3N1QN.progress__liveSync___PIvwF, .progress__seekBlock___V4YqW.progress__isDragging___2Tcb5 .progress__syncButton___3N1QN.progress__liveSync___PIvwF {\n      background-color: #fff; }\n  .progress__seekButtonContainer___1TZ8Z {\n  position: absolute;\n  z-index: 7;\n  top: -3px;\n  left: -6px; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .progress__seekButtonContainer___1TZ8Z {\n    top: -4px;\n    left: -8px;\n    width: 16px;\n    height: 16px; }\n  .progress__seekButton___3UtgF {\n  width: 12px;\n  height: 12px;\n  content: '';\n  cursor: pointer;\n  -webkit-transition: -webkit-transform 0.1s cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 0.1s cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 0.1s cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 0.1s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.1s cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  border-radius: 50%;\n  background-color: #fff; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .progress__seekButton___3UtgF {\n    width: 16px;\n    height: 16px; }\n  .progress__syncButton___3N1QN {\n  position: absolute;\n  z-index: 6;\n  top: -2px;\n  right: -5px;\n  display: none;\n  width: 6px;\n  height: 6px;\n  cursor: pointer;\n  -webkit-transition: -webkit-transform 0.1s cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 0.1s cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 0.1s cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 0.1s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.1s cubic-bezier(0, 0, 0.2, 1);\n  border: 2px solid #bababa;\n  border-radius: 50%;\n  background-color: #ea492e; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .progress__syncButton___3N1QN {\n    top: -2px;\n    right: -6px;\n    width: 8px;\n    height: 8px; }\n  .progress__syncButton___3N1QN:hover {\n    background-color: #fff; }\n  .progress__syncButton___3N1QN.progress__hidden___3Rjqh {\n    display: none; }\n  .progress__progressBarsWrapper___1SSlL {\n  height: 6px;\n  -webkit-transition: -webkit-transform 0.1s cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 0.1s cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 0.1s cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 0.1s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.1s cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transform: scaleY(0.34);\n          transform: scaleY(0.34); }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .progress__progressBarsWrapper___1SSlL {\n    height: 8px;\n    -webkit-transform: scaleY(0.25);\n            transform: scaleY(0.25); }\n  .progress__progressBar___210E8 {\n  position: absolute;\n  height: 6px;\n  padding: 0; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .progress__progressBar___210E8 {\n    height: 8px; }\n  .progress__played___1dShL {\n  width: 100%;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  background-color: #fff; }\n  .progress__buffered___2LiZB {\n  -webkit-transition: width .2s ease;\n  transition: width .2s ease;\n  background-color: rgba(255, 255, 255, 0.25); }\n  .progress__background___lqeL2 {\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.25); }\n  .progress__seekTo___T0D_O {\n  -webkit-transition: opacity .2s;\n  transition: opacity .2s;\n  background-color: rgba(255, 255, 255, 0.5); }\n  .progress__timeIndicators___c6h-a {\n  position: absolute;\n  overflow-x: hidden;\n  width: 100%;\n  height: 100%;\n  background-color: transparent; }\n  .progress__timeIndicator___2wltB {\n  position: absolute; }\n  .progress__timeIndicator___2wltB:after {\n    position: absolute;\n    right: -3px;\n    width: 6px;\n    height: 6px;\n    content: '';\n    -webkit-transition: -webkit-transform 0.1s cubic-bezier(0, 0, 0.2, 1);\n    transition: -webkit-transform 0.1s cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 0.1s cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 0.1s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.1s cubic-bezier(0, 0, 0.2, 1);\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: .6;\n    border-radius: 50%;\n    background-color: #fff; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .progress__timeIndicator___2wltB:after {\n      right: -4px;\n      width: 8px;\n      height: 8px; }\n  .progress__timeIndicator___2wltB:after:hover {\n      opacity: 1; }\n  .progress__hitbox___xqdFP {\n  position: relative;\n  z-index: 5;\n  top: -11px;\n  display: block;\n  width: 100%;\n  height: 16px;\n  cursor: pointer;\n  opacity: 0; }\n  [data-playable-focus-source='key'] [data-playable-hook='progress-control'].focus-within,\n[data-playable-focus-source='script'] [data-playable-hook='progress-control'].focus-within {\n  opacity: 1;\n  -webkit-box-shadow: 0 0 0 2px rgba(56, 153, 236, 0.8);\n          box-shadow: 0 0 0 2px rgba(56, 153, 236, 0.8); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBYztFQUFkLHFCQUFjO0VBQWQsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixxQ0FBNkI7RUFBN0IsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIseUJBQXdCO01BQXhCLHNCQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsMEJBQW9CO01BQXBCLHVCQUFvQjtVQUFwQixvQkFBb0IsRUFBRTtFQUN0QjtJQUNFLFlBQVksRUFBRTtFQUVsQjtFQUNFLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixzQkFBc0IsRUFBRTtFQUUxQjtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWiwwQkFBa0I7S0FBbEIsdUJBQWtCO01BQWxCLHNCQUFrQjtVQUFsQixrQkFBa0I7RUFDbEIsZ0RBQXdDO0VBQXhDLHdDQUF3QztFQUN4Qyx1QkFBbUI7TUFBbkIsbUJBQW1CLEVBQUU7RUFDckI7SUFDRSxZQUFZLEVBQUU7RUFDaEI7SUFDRSwwQkFBMEIsRUFBRTtFQUM5QjtJQUNFLHlDQUF5QyxFQUFFO0VBQzdDO0lBQ0UsaUJBQWlCLEVBQUU7RUFDckI7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCLEVBQUU7RUFDdkI7TUFDRSw2QkFBcUI7Y0FBckIscUJBQXFCLEVBQUU7RUFDekI7TUFDRSxXQUFXLEVBQUU7RUFDZjtNQUNFLDRCQUFvQjtjQUFwQixvQkFBb0IsRUFBRTtFQUMxQjtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLDhCQUFzQjtZQUF0QixzQkFBc0IsRUFBRTtFQUN4QjtNQUNFLCtCQUF1QjtjQUF2Qix1QkFBdUIsRUFBRTtFQUMzQjtNQUNFLHVCQUF1QixFQUFFO0VBRS9CO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVyxFQUFFO0VBQ2I7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhLEVBQUU7RUFFbkI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsc0VBQXNEO0VBQXRELDhEQUFzRDtFQUF0RCxzREFBc0Q7RUFBdEQseUdBQXNEO0VBQ3RELDRCQUFvQjtVQUFwQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFFO0VBQ3pCO0lBQ0UsWUFBWTtJQUNaLGFBQWEsRUFBRTtFQUVuQjtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsc0VBQXNEO0VBQXRELDhEQUFzRDtFQUF0RCxzREFBc0Q7RUFBdEQseUdBQXNEO0VBQ3RELDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsMEJBQTBCLEVBQUU7RUFDNUI7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZLEVBQUU7RUFDaEI7SUFDRSx1QkFBdUIsRUFBRTtFQUMzQjtJQUNFLGNBQWMsRUFBRTtFQUVwQjtFQUNFLFlBQVk7RUFDWixzRUFBc0Q7RUFBdEQsOERBQXNEO0VBQXRELHNEQUFzRDtFQUF0RCx5R0FBc0Q7RUFDdEQsZ0NBQXdCO1VBQXhCLHdCQUF3QixFQUFFO0VBQzFCO0lBQ0UsWUFBWTtJQUNaLGdDQUF3QjtZQUF4Qix3QkFBd0IsRUFBRTtFQUU5QjtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVyxFQUFFO0VBQ2I7SUFDRSxZQUFZLEVBQUU7RUFFbEI7RUFDRSxZQUFZO0VBQ1osOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBRTtFQUUzQjtFQUNFLG1DQUEyQjtFQUEzQiwyQkFBMkI7RUFDM0IsNENBQTRDLEVBQUU7RUFFaEQ7RUFDRSxZQUFZO0VBQ1osNENBQTRDLEVBQUU7RUFFaEQ7RUFDRSxnQ0FBd0I7RUFBeEIsd0JBQXdCO0VBQ3hCLDJDQUEyQyxFQUFFO0VBRS9DO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QixFQUFFO0VBRWxDO0VBQ0UsbUJBQW1CLEVBQUU7RUFDckI7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLHNFQUFzRDtJQUF0RCw4REFBc0Q7SUFBdEQsc0RBQXNEO0lBQXRELHlHQUFzRDtJQUN0RCw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCLEVBQUU7RUFDekI7TUFDRSxZQUFZO01BQ1osV0FBVztNQUNYLFlBQVksRUFBRTtFQUNoQjtNQUNFLFdBQVcsRUFBRTtFQUVuQjtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixXQUFXLEVBQUU7RUFFZjs7RUFFRSxXQUFXO0VBQ1gsc0RBQThDO1VBQTlDLDhDQUE4QyxFQUFFIiwiZmlsZSI6InByb2dyZXNzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udHJvbEJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuY29udHJvbEJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogLjc7IH1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB3aWR0aDogMCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50OyB9XG5cbi5zZWVrQmxvY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycywgdmlzaWJpbGl0eSAuMnM7XG4gIHRvdWNoLWFjdGlvbjogbm9uZTsgfVxuICBkaXZbZGF0YS1wbGF5YWJsZS1ob29rPSdwbGF5ZXItY29udGFpbmVyJ11bZGF0YS1wbGF5YWJsZS1pbi1mdWxsLXNjcmVlbj0ndHJ1ZSddIC5zZWVrQmxvY2sge1xuICAgIGhlaWdodDogOHB4OyB9XG4gIC5zZWVrQmxvY2suaW5MaXZlIC5wbGF5ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYTQ5MmU7IH1cbiAgLnNlZWtCbG9jay5pbkxpdmUgLnNlZWtUbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzQsIDczLCA0NiwgMC41KTsgfVxuICAuc2Vla0Jsb2NrLmluTGl2ZSAuc3luY0J1dHRvbiB7XG4gICAgZGlzcGxheTogaW5pdGlhbDsgfVxuICAuc2Vla0Jsb2NrOmhvdmVyIC5wcm9ncmVzc0JhcnNXcmFwcGVyLCAuc2Vla0Jsb2NrLmlzRHJhZ2dpbmcgLnByb2dyZXNzQmFyc1dyYXBwZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpOyB9XG4gICAgZGl2W2RhdGEtcGxheWFibGUtaG9vaz0ncGxheWVyLWNvbnRhaW5lciddW2RhdGEtcGxheWFibGUtaW4tZnVsbC1zY3JlZW49J3RydWUnXSAuc2Vla0Jsb2NrOmhvdmVyIC5wcm9ncmVzc0JhcnNXcmFwcGVyLCBkaXZbZGF0YS1wbGF5YWJsZS1ob29rPSdwbGF5ZXItY29udGFpbmVyJ11bZGF0YS1wbGF5YWJsZS1pbi1mdWxsLXNjcmVlbj0ndHJ1ZSddIC5zZWVrQmxvY2suaXNEcmFnZ2luZyAucHJvZ3Jlc3NCYXJzV3JhcHBlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTsgfVxuICAgIC5zZWVrQmxvY2s6aG92ZXIgLnByb2dyZXNzQmFyc1dyYXBwZXIgLnNlZWtUbywgLnNlZWtCbG9jay5pc0RyYWdnaW5nIC5wcm9ncmVzc0JhcnNXcmFwcGVyIC5zZWVrVG8ge1xuICAgICAgb3BhY2l0eTogMTsgfVxuICAgIC5zZWVrQmxvY2s6aG92ZXIgLnByb2dyZXNzQmFyc1dyYXBwZXIgLnRpbWVJbmRpY2F0b3I6YWZ0ZXIsIC5zZWVrQmxvY2suaXNEcmFnZ2luZyAucHJvZ3Jlc3NCYXJzV3JhcHBlciAudGltZUluZGljYXRvcjphZnRlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG4gIC5zZWVrQmxvY2s6aG92ZXIgLnNlZWtCdXR0b24sIC5zZWVrQmxvY2suaXNEcmFnZ2luZyAuc2Vla0J1dHRvbiB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICAuc2Vla0Jsb2NrOmhvdmVyIC5zeW5jQnV0dG9uLCAuc2Vla0Jsb2NrLmlzRHJhZ2dpbmcgLnN5bmNCdXR0b24ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTsgfVxuICAgIGRpdltkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXVtkYXRhLXBsYXlhYmxlLWluLWZ1bGwtc2NyZWVuPSd0cnVlJ10gLnNlZWtCbG9jazpob3ZlciAuc3luY0J1dHRvbiwgZGl2W2RhdGEtcGxheWFibGUtaG9vaz0ncGxheWVyLWNvbnRhaW5lciddW2RhdGEtcGxheWFibGUtaW4tZnVsbC1zY3JlZW49J3RydWUnXSAuc2Vla0Jsb2NrLmlzRHJhZ2dpbmcgLnN5bmNCdXR0b24ge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMzKTsgfVxuICAgIC5zZWVrQmxvY2s6aG92ZXIgLnN5bmNCdXR0b24ubGl2ZVN5bmMsIC5zZWVrQmxvY2suaXNEcmFnZ2luZyAuc3luY0J1dHRvbi5saXZlU3luYyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XG5cbi5zZWVrQnV0dG9uQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA3O1xuICB0b3A6IC0zcHg7XG4gIGxlZnQ6IC02cHg7IH1cbiAgZGl2W2RhdGEtcGxheWFibGUtaG9vaz0ncGxheWVyLWNvbnRhaW5lciddW2RhdGEtcGxheWFibGUtaW4tZnVsbC1zY3JlZW49J3RydWUnXSAuc2Vla0J1dHRvbkNvbnRhaW5lciB7XG4gICAgdG9wOiAtNHB4O1xuICAgIGxlZnQ6IC04cHg7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4OyB9XG5cbi5zZWVrQnV0dG9uIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgY29udGVudDogJyc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxuICBkaXZbZGF0YS1wbGF5YWJsZS1ob29rPSdwbGF5ZXItY29udGFpbmVyJ11bZGF0YS1wbGF5YWJsZS1pbi1mdWxsLXNjcmVlbj0ndHJ1ZSddIC5zZWVrQnV0dG9uIHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7IH1cblxuLnN5bmNCdXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDY7XG4gIHRvcDogLTJweDtcbiAgcmlnaHQ6IC01cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICBib3JkZXI6IDJweCBzb2xpZCAjYmFiYWJhO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTQ5MmU7IH1cbiAgZGl2W2RhdGEtcGxheWFibGUtaG9vaz0ncGxheWVyLWNvbnRhaW5lciddW2RhdGEtcGxheWFibGUtaW4tZnVsbC1zY3JlZW49J3RydWUnXSAuc3luY0J1dHRvbiB7XG4gICAgdG9wOiAtMnB4O1xuICAgIHJpZ2h0OiAtNnB4O1xuICAgIHdpZHRoOiA4cHg7XG4gICAgaGVpZ2h0OiA4cHg7IH1cbiAgLnN5bmNCdXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cbiAgLnN5bmNCdXR0b24uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG5cbi5wcm9ncmVzc0JhcnNXcmFwcGVyIHtcbiAgaGVpZ2h0OiA2cHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjM0KTsgfVxuICBkaXZbZGF0YS1wbGF5YWJsZS1ob29rPSdwbGF5ZXItY29udGFpbmVyJ11bZGF0YS1wbGF5YWJsZS1pbi1mdWxsLXNjcmVlbj0ndHJ1ZSddIC5wcm9ncmVzc0JhcnNXcmFwcGVyIHtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjI1KTsgfVxuXG4ucHJvZ3Jlc3NCYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNnB4O1xuICBwYWRkaW5nOiAwOyB9XG4gIGRpdltkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXVtkYXRhLXBsYXlhYmxlLWluLWZ1bGwtc2NyZWVuPSd0cnVlJ10gLnByb2dyZXNzQmFyIHtcbiAgICBoZWlnaHQ6IDhweDsgfVxuXG4ucGxheWVkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxuXG4uYnVmZmVyZWQge1xuICB0cmFuc2l0aW9uOiB3aWR0aCAuMnMgZWFzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxuXG4uYmFja2dyb3VuZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XG5cbi5zZWVrVG8ge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XG5cbi50aW1lSW5kaWNhdG9ycyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuXG4udGltZUluZGljYXRvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAudGltZUluZGljYXRvcjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtM3B4O1xuICAgIHdpZHRoOiA2cHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgY29udGVudDogJyc7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICBvcGFjaXR5OiAuNjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxuICAgIGRpdltkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXVtkYXRhLXBsYXlhYmxlLWluLWZ1bGwtc2NyZWVuPSd0cnVlJ10gLnRpbWVJbmRpY2F0b3I6YWZ0ZXIge1xuICAgICAgcmlnaHQ6IC00cHg7XG4gICAgICB3aWR0aDogOHB4O1xuICAgICAgaGVpZ2h0OiA4cHg7IH1cbiAgICAudGltZUluZGljYXRvcjphZnRlcjpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxOyB9XG5cbi5oaXRib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDU7XG4gIHRvcDogLTExcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDA7IH1cblxuOmdsb2JhbCBbZGF0YS1wbGF5YWJsZS1mb2N1cy1zb3VyY2U9J2tleSddIFtkYXRhLXBsYXlhYmxlLWhvb2s9J3Byb2dyZXNzLWNvbnRyb2wnXS5mb2N1cy13aXRoaW4sXG46Z2xvYmFsIFtkYXRhLXBsYXlhYmxlLWZvY3VzLXNvdXJjZT0nc2NyaXB0J10gW2RhdGEtcGxheWFibGUtaG9vaz0ncHJvZ3Jlc3MtY29udHJvbCddLmZvY3VzLXdpdGhpbiB7XG4gIG9wYWNpdHk6IDE7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDU2LCAxNTMsIDIzNiwgMC44KTsgfVxuIl19 */";
    var styles$13 = {"controlButton":"progress__controlButton___2pi4V","hidden":"progress__hidden___3Rjqh","seekBlock":"progress__seekBlock___V4YqW","inLive":"progress__inLive___3324R","played":"progress__played___1dShL","seekTo":"progress__seekTo___T0D_O","syncButton":"progress__syncButton___3N1QN","progressBarsWrapper":"progress__progressBarsWrapper___1SSlL","isDragging":"progress__isDragging___2Tcb5","timeIndicator":"progress__timeIndicator___2wltB","seekButton":"progress__seekButton___3UtgF","liveSync":"progress__liveSync___PIvwF","seekButtonContainer":"progress__seekButtonContainer___1TZ8Z","progressBar":"progress__progressBar___210E8","buffered":"progress__buffered___2LiZB","background":"progress__background___lqeL2","timeIndicators":"progress__timeIndicators___c6h-a","hitbox":"progress__hitbox___xqdFP"};
    styleInject(css$13);

    var DATA_PLAYED = 'data-playable-played-percent';
    var getPercentBasedOnXPosition = function (event, element) {
        var boundingRect = element.getBoundingClientRect();
        var positionX = event.clientX;
        if (positionX < boundingRect.left) {
            return 0;
        }
        if (positionX > boundingRect.left + boundingRect.width) {
            return 100;
        }
        return ((event.clientX - boundingRect.left) / boundingRect.width) * 100;
    };
    var ProgressView = /** @class */ (function (_super) {
        __extends(ProgressView, _super);
        function ProgressView(config) {
            var _this = this;
            var callbacks = config.callbacks, textMap = config.textMap, tooltipService = config.tooltipService, theme = config.theme;
            _this = _super.call(this, theme) || this;
            _this._callbacks = callbacks;
            _this._textMap = textMap;
            _this._tooltipService = tooltipService;
            _this._initDOM();
            _this._bindCallbacks();
            _this._bindEvents();
            _this._setPlayedDOMAttributes(0);
            _this._setBufferedDOMAttributes(0);
            _this.setUsualMode();
            return _this;
        }
        ProgressView.prototype._initDOM = function () {
            this._$rootElement = htmlToElement(anonymous$20({
                styles: this.styleNames,
                themeStyles: this.themeStyles,
            }));
            this._$played = getElementByHook(this._$rootElement, 'progress-played');
            this._$buffered = getElementByHook(this._$rootElement, 'progress-buffered');
            this._$seekTo = getElementByHook(this._$rootElement, 'progress-seek-to');
            this._$timeIndicators = getElementByHook(this._$rootElement, 'progress-time-indicators');
            this._$seekButton = getElementByHook(this._$rootElement, 'progress-seek-button');
            this._$syncButton = getElementByHook(this._$rootElement, 'progress-sync-button');
            this._syncButtonTooltipReference = this._tooltipService.createReference(this._$syncButton, {
                text: this._textMap.get(TEXT_LABELS.LIVE_SYNC_TOOLTIP),
            });
            this._$hitbox = getElementByHook(this._$rootElement, 'progress-hitbox');
        };
        ProgressView.prototype._bindCallbacks = function () {
            this._setPlayedByDrag = this._setPlayedByDrag.bind(this);
            this._startDragOnMouseDown = this._startDragOnMouseDown.bind(this);
            this._stopDragOnMouseUp = this._stopDragOnMouseUp.bind(this);
            this._startSeekToByMouse = this._startSeekToByMouse.bind(this);
            this._stopSeekToByMouse = this._stopSeekToByMouse.bind(this);
            this._syncWithLive = this._syncWithLive.bind(this);
        };
        ProgressView.prototype._bindEvents = function () {
            this._$seekButton.addEventListener('mousedown', this._startDragOnMouseDown);
            this._$seekButton.addEventListener('mousemove', this._startSeekToByMouse);
            this._$seekButton.addEventListener('mouseout', this._stopSeekToByMouse);
            this._$hitbox.addEventListener('mousedown', this._startDragOnMouseDown);
            this._$hitbox.addEventListener('mousemove', this._startSeekToByMouse);
            this._$hitbox.addEventListener('mouseout', this._stopSeekToByMouse);
            window.addEventListener('mousemove', this._setPlayedByDrag);
            window.addEventListener('mouseup', this._stopDragOnMouseUp);
            this._$syncButton.addEventListener('click', this._syncWithLive);
            this._$syncButton.addEventListener('mouseenter', this._callbacks.onSyncWithLiveMouseEnter);
            this._$syncButton.addEventListener('mouseleave', this._callbacks.onSyncWithLiveMouseLeave);
        };
        ProgressView.prototype._unbindEvents = function () {
            this._$seekButton.removeEventListener('mousedown', this._startDragOnMouseDown);
            this._$seekButton.removeEventListener('mousemove', this._startSeekToByMouse);
            this._$seekButton.removeEventListener('mouseout', this._stopSeekToByMouse);
            this._$hitbox.removeEventListener('mousedown', this._startDragOnMouseDown);
            this._$hitbox.removeEventListener('mousemove', this._startSeekToByMouse);
            this._$hitbox.removeEventListener('mouseout', this._stopSeekToByMouse);
            window.removeEventListener('mousemove', this._setPlayedByDrag);
            window.removeEventListener('mouseup', this._stopDragOnMouseUp);
            this._$syncButton.removeEventListener('click', this._syncWithLive);
            this._$syncButton.removeEventListener('mouseenter', this._callbacks.onSyncWithLiveMouseEnter);
            this._$syncButton.removeEventListener('mouseleave', this._callbacks.onSyncWithLiveMouseLeave);
        };
        ProgressView.prototype._startDragOnMouseDown = function (event) {
            if (event.button > 1) {
                return;
            }
            var percent = getPercentBasedOnXPosition(event, this._$hitbox);
            this._setPlayedDOMAttributes(percent);
            this._callbacks.onChangePlayedPercent(percent);
            this._startDrag();
        };
        ProgressView.prototype._stopDragOnMouseUp = function (event) {
            if (event.button > 1) {
                return;
            }
            this._stopDrag();
        };
        ProgressView.prototype._startSeekToByMouse = function (event) {
            var percent = getPercentBasedOnXPosition(event, this._$hitbox);
            this._setSeekToDOMAttributes(percent);
            this._callbacks.onSeekToByMouseStart(percent);
        };
        ProgressView.prototype._stopSeekToByMouse = function () {
            this._setSeekToDOMAttributes(0);
            this._callbacks.onSeekToByMouseEnd();
        };
        ProgressView.prototype._setPlayedByDrag = function (event) {
            if (this._isDragging) {
                var percent = getPercentBasedOnXPosition(event, this._$hitbox);
                this._setPlayedDOMAttributes(percent);
                this._callbacks.onChangePlayedPercent(percent);
            }
        };
        ProgressView.prototype._startDrag = function () {
            this._isDragging = true;
            this._callbacks.onDragStart();
            this._$rootElement.classList.add(this.styleNames.isDragging);
        };
        ProgressView.prototype._stopDrag = function () {
            if (this._isDragging) {
                this._isDragging = false;
                this._callbacks.onDragEnd();
                this._$rootElement.classList.remove(this.styleNames.isDragging);
            }
        };
        ProgressView.prototype._setSeekToDOMAttributes = function (percent) {
            this._$seekTo.setAttribute('style', "width:" + percent + "%;");
        };
        ProgressView.prototype._setPlayedDOMAttributes = function (percent) {
            this._$rootElement.setAttribute('aria-valuetext', this._textMap.get(TEXT_LABELS.PROGRESS_CONTROL_VALUE, { percent: percent }));
            this._$rootElement.setAttribute('aria-valuenow', percent.toFixed(2));
            this._$rootElement.setAttribute(DATA_PLAYED, percent.toFixed(2));
            this._setPlayedDOMPosition(percent);
        };
        ProgressView.prototype._setPlayedDOMPosition = function (percent) {
            var scaleValue = percent / 100;
            var translateValue = this._$rootElement.getBoundingClientRect().width * scaleValue;
            this._$played.style.transform = "scaleX(" + scaleValue.toFixed(3) + ")";
            this._$seekButton.style.transform = "translateX(" + translateValue.toFixed(3) + "px)";
        };
        ProgressView.prototype._setBufferedDOMAttributes = function (percent) {
            this._$buffered.setAttribute('style', "width:" + percent + "%;");
        };
        ProgressView.prototype._syncWithLive = function () {
            this._callbacks.onSyncWithLiveClick();
        };
        ProgressView.prototype.updateOnResize = function () {
            this._setPlayedDOMPosition(this._currentPlayedPercent);
        };
        ProgressView.prototype.showSyncWithLive = function () {
            this._$syncButton.classList.remove(this.styleNames.hidden);
        };
        ProgressView.prototype.hideSyncWithLive = function () {
            this._$syncButton.classList.add(this.styleNames.hidden);
        };
        ProgressView.prototype.setLiveSyncState = function (isSync) {
            toggleElementClass(this._$syncButton, this.styleNames.liveSync, isSync);
            if (isSync) {
                this._syncButtonTooltipReference.disable();
                this._$played.setAttribute('style', "width:100%;");
                this._$seekButton.setAttribute('style', "left:100%;");
            }
            else {
                this._syncButtonTooltipReference.enable();
            }
        };
        ProgressView.prototype.showProgressTimeTooltip = function (element, percent) {
            var _this = this;
            this._tooltipService.show({
                element: element,
                position: function (tooltipContainer) {
                    return getProgressTimeTooltipPosition(percent, _this._$hitbox, tooltipContainer);
                },
            });
        };
        ProgressView.prototype.hideProgressTimeTooltip = function () {
            this._tooltipService.hide();
        };
        ProgressView.prototype.setLiveMode = function () {
            this._$rootElement.classList.add(this.styleNames.inLive);
            this.showSyncWithLive();
        };
        ProgressView.prototype.setUsualMode = function () {
            this._$rootElement.classList.remove(this.styleNames.inLive);
            this.hideSyncWithLive();
        };
        ProgressView.prototype.setPlayed = function (percent) {
            this._currentPlayedPercent = percent;
            this._setPlayedDOMAttributes(percent);
        };
        ProgressView.prototype.setBuffered = function (percent) {
            this._setBufferedDOMAttributes(percent);
        };
        ProgressView.prototype.addTimeIndicator = function (percent) {
            this._$timeIndicators.appendChild(htmlToElement(anonymous$21({
                percent: percent,
                styles: this.styleNames,
            })));
        };
        ProgressView.prototype.clearTimeIndicators = function () {
            this._$timeIndicators.innerHTML = '';
        };
        ProgressView.prototype.hide = function () {
            this._$rootElement.classList.add(this.styleNames.hidden);
        };
        ProgressView.prototype.show = function () {
            this._$rootElement.classList.remove(this.styleNames.hidden);
        };
        ProgressView.prototype.getElement = function () {
            return this._$rootElement;
        };
        ProgressView.prototype.destroy = function () {
            this._unbindEvents();
            this._callbacks = null;
            this._syncButtonTooltipReference.destroy();
            this._syncButtonTooltipReference = null;
            if (this._$rootElement.parentNode) {
                this._$rootElement.parentNode.removeChild(this._$rootElement);
            }
            this._$rootElement = null;
            this._$buffered = null;
            this._$hitbox = null;
            this._$played = null;
            this._$seekTo = null;
            this._$seekButton = null;
            this._$syncButton = null;
            this._$timeIndicators = null;
            this._textMap = null;
        };
        return ProgressView;
    }(View));
    ProgressView.setTheme(progressViewTheme);
    ProgressView.extendStyleNames(styles$13);

    function getTimePercent(time, durationTime) {
        if (!durationTime) {
            return 0;
        }
        return parseFloat(((time / durationTime) * 100).toFixed(2));
    }
    function getOverallBufferedPercent(buffered, currentTime, duration) {
        if (currentTime === void 0) { currentTime = 0; }
        if (duration === void 0) { duration = 0; }
        if (!buffered || !buffered.length || !duration) {
            return 0;
        }
        var info = getNearestBufferSegmentInfo(buffered, currentTime);
        return getTimePercent(info.end, duration);
    }
    function getOverallPlayedPercent(currentTime, duration) {
        if (currentTime === void 0) { currentTime = 0; }
        if (duration === void 0) { duration = 0; }
        return getTimePercent(currentTime, duration);
    }
    function geOverallBufferLength(buffered) {
        var size = 0;
        if (!buffered || !buffered.length) {
            return size;
        }
        for (var i = 0; i < buffered.length; i += 1) {
            size += buffered.end(i) - buffered.start(i);
        }
        return size;
    }
    function getNearestBufferSegmentInfo(buffered, currentTime) {
        var i = 0;
        if (!buffered || !buffered.length) {
            return null;
        }
        while (i < buffered.length - 1 &&
            !(buffered.start(i) <= currentTime && currentTime <= buffered.end(i))) {
            i += 1;
        }
        return {
            start: buffered.start(i),
            end: buffered.end(i),
        };
    }

    function formatTime(seconds) {
        var isValid = !isNaN(seconds) && isFinite(seconds);
        var isNegative = isValid && seconds < 0;
        var date = new Date(null);
        date.setSeconds(isValid ? Math.abs(Math.floor(seconds)) : 0);
        // get HH:mm:ss part, remove hours if they are "00:"
        var time = date
            .toISOString()
            .substr(11, 8)
            .replace(/^00:/, '');
        return isNegative ? "-" + time : time;
    }

    var UPDATE_INTERVAL_DELAY = 1000 / 60;
    var ProgressControl = /** @class */ (function () {
        function ProgressControl(_a) {
            var engine = _a.engine, liveStateEngine = _a.liveStateEngine, eventEmitter = _a.eventEmitter, textMap = _a.textMap, tooltipService = _a.tooltipService, theme = _a.theme, previewThumbnail = _a.previewThumbnail, previewFullSize = _a.previewFullSize;
            this._engine = engine;
            this._liveStateEngine = liveStateEngine;
            this._eventEmitter = eventEmitter;
            this._textMap = textMap;
            this._tooltipService = tooltipService;
            this._previewThumbnail = previewThumbnail;
            this._previewFullSize = previewFullSize;
            this._isUserDragging = false;
            this._desiredSeekPosition = 0;
            this._theme = theme;
            this._timeIndicatorsToAdd = [];
            this._showFullScreenPreview = false;
            this._bindCallbacks();
            this._initUI();
            this._bindEvents();
            this.view.setPlayed(0);
            this.view.setBuffered(0);
            this._initInterceptor();
        }
        ProgressControl.prototype.getElement = function () {
            return this.view.getElement();
        };
        ProgressControl.prototype._bindEvents = function () {
            this._unbindEvents = this._eventEmitter.bindEvents([
                [VIDEO_EVENTS.STATE_CHANGED, this._processStateChange],
                [VIDEO_EVENTS.LIVE_STATE_CHANGED, this._processLiveStateChange],
                [VIDEO_EVENTS.CHUNK_LOADED, this._updateBufferIndicator],
                [VIDEO_EVENTS.DURATION_UPDATED, this._updateAllIndicators],
                [UI_EVENTS.RESIZE, this.view.updateOnResize, this.view],
            ], this);
        };
        ProgressControl.prototype._initUI = function () {
            var config = {
                callbacks: {
                    onSyncWithLiveClick: this._syncWithLive,
                    onSyncWithLiveMouseEnter: this._onSyncWithLiveMouseEnter,
                    onSyncWithLiveMouseLeave: this._onSyncWithLiveMouseLeave,
                    onChangePlayedPercent: this._onChangePlayedPercent,
                    onSeekToByMouseStart: this._showTooltipAndPreview,
                    onSeekToByMouseEnd: this._hideTooltip,
                    onDragStart: this._startProcessingUserDrag,
                    onDragEnd: this._stopProcessingUserDrag,
                },
                theme: this._theme,
                textMap: this._textMap,
                tooltipService: this._tooltipService,
            };
            this.view = new ProgressControl.View(config);
        };
        ProgressControl.prototype._initInterceptor = function () {
            var _this = this;
            var _a;
            this._interceptor = new KeyboardInterceptorCore(this.view.getElement(), (_a = {}, _a[KEYCODES.UP_ARROW] = function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    _this._eventEmitter.emit(UI_EVENTS.KEYBOARD_KEYDOWN_INTERCEPTED);
                    _this._eventEmitter.emit(UI_EVENTS.GO_FORWARD_WITH_KEYBOARD);
                    _this._engine.seekForward(AMOUNT_TO_SKIP_SECONDS);
                }, _a[KEYCODES.DOWN_ARROW] = function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    _this._eventEmitter.emit(UI_EVENTS.KEYBOARD_KEYDOWN_INTERCEPTED);
                    _this._eventEmitter.emit(UI_EVENTS.GO_BACKWARD_WITH_KEYBOARD);
                    _this._engine.seekBackward(AMOUNT_TO_SKIP_SECONDS);
                }, _a[KEYCODES.RIGHT_ARROW] = function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    _this._eventEmitter.emit(UI_EVENTS.KEYBOARD_KEYDOWN_INTERCEPTED);
                    _this._eventEmitter.emit(UI_EVENTS.GO_FORWARD_WITH_KEYBOARD);
                    _this._engine.seekForward(AMOUNT_TO_SKIP_SECONDS);
                }, _a[KEYCODES.LEFT_ARROW] = function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    _this._eventEmitter.emit(UI_EVENTS.KEYBOARD_KEYDOWN_INTERCEPTED);
                    _this._eventEmitter.emit(UI_EVENTS.GO_BACKWARD_WITH_KEYBOARD);
                    _this._engine.seekBackward(AMOUNT_TO_SKIP_SECONDS);
                }, _a));
        };
        ProgressControl.prototype._destroyInterceptor = function () {
            this._interceptor.destroy();
        };
        ProgressControl.prototype._bindCallbacks = function () {
            this._syncWithLive = this._syncWithLive.bind(this);
            this._onSyncWithLiveMouseEnter = this._onSyncWithLiveMouseEnter.bind(this);
            this._onSyncWithLiveMouseLeave = this._onSyncWithLiveMouseLeave.bind(this);
            this._updateAllIndicators = this._updateAllIndicators.bind(this);
            this._onChangePlayedPercent = this._onChangePlayedPercent.bind(this);
            this._showTooltipAndPreview = this._showTooltipAndPreview.bind(this);
            this._hideTooltip = this._hideTooltip.bind(this);
            this._startProcessingUserDrag = this._startProcessingUserDrag.bind(this);
            this._stopProcessingUserDrag = this._stopProcessingUserDrag.bind(this);
        };
        ProgressControl.prototype._startIntervalUpdates = function () {
            if (this._updateControlInterval) {
                this._stopIntervalUpdates();
            }
            this._updateAllIndicators();
            this._updateControlInterval = window.setInterval(this._updateAllIndicators, UPDATE_INTERVAL_DELAY);
        };
        ProgressControl.prototype._stopIntervalUpdates = function () {
            window.clearInterval(this._updateControlInterval);
            this._updateControlInterval = null;
        };
        ProgressControl.prototype._convertPlayedPercentToTime = function (percent) {
            var duration = this._engine.getDuration();
            return (duration * percent) / 100;
        };
        ProgressControl.prototype._onChangePlayedPercent = function (percent) {
            var newTime = this._convertPlayedPercentToTime(percent);
            if (this._showFullScreenPreview) {
                this._desiredSeekPosition = newTime;
                this._eventEmitter.emit(UI_EVENTS.PROGRESS_USER_PREVIEWING_FRAME, newTime);
            }
            else {
                this._changeCurrentTimeOfVideo(newTime);
            }
            if (this._isUserDragging) {
                this._showTooltipAndPreview(percent);
            }
        };
        ProgressControl.prototype._showTooltipAndPreview = function (percent) {
            var duration = this._engine.getDuration();
            var seekToTime = this._convertPlayedPercentToTime(percent);
            var timeToShow = this._engine.isDynamicContent
                ? seekToTime - duration
                : seekToTime;
            this._previewThumbnail.setTime(formatTime(timeToShow));
            this._previewThumbnail.showAt(seekToTime);
            this.view.showProgressTimeTooltip(this._previewThumbnail.getElement(), percent);
            if (this._isUserDragging && this._showFullScreenPreview) {
                this._previewFullSize.showAt(seekToTime);
            }
        };
        ProgressControl.prototype._hideTooltip = function () {
            if (!this._isUserDragging) {
                this.view.hideProgressTimeTooltip();
            }
        };
        ProgressControl.prototype._startProcessingUserDrag = function () {
            if (!this._isUserDragging) {
                this._isUserDragging = true;
                this._pauseVideoOnDragStart();
                this._eventEmitter.emit(UI_EVENTS.PROGRESS_DRAG_STARTED);
                this._eventEmitter.emit(UI_EVENTS.CONTROL_DRAG_START);
            }
        };
        ProgressControl.prototype._stopProcessingUserDrag = function () {
            if (this._isUserDragging) {
                this._isUserDragging = false;
                if (this._showFullScreenPreview) {
                    this._shouldHidePreviewOnUpdate = true;
                }
                if (this._showFullScreenPreview) {
                    this._changeCurrentTimeOfVideo(this._desiredSeekPosition);
                }
                this._playVideoOnDragEnd();
                this.view.hideProgressTimeTooltip();
                this._eventEmitter.emit(UI_EVENTS.PROGRESS_DRAG_ENDED);
                this._eventEmitter.emit(UI_EVENTS.CONTROL_DRAG_END);
            }
        };
        ProgressControl.prototype._hidePreview = function () {
            this._shouldHidePreviewOnUpdate = false;
            this._previewFullSize.hide();
        };
        ProgressControl.prototype._processStateChange = function (_a) {
            var nextState = _a.nextState;
            switch (nextState) {
                case EngineState$1.SRC_SET:
                    this._reset();
                    break;
                case EngineState$1.METADATA_LOADED:
                    this._initTimeIndicators();
                    if (this._engine.isSeekAvailable) {
                        this.show();
                    }
                    else {
                        this.hide();
                    }
                    break;
                case EngineState$1.PLAYING:
                    if (this._shouldHidePreviewOnUpdate) {
                        this._hidePreview();
                    }
                    if (this._liveStateEngine.state === LiveState$1.SYNC) {
                        this.view.setPlayed(100);
                    }
                    else {
                        this._startIntervalUpdates();
                    }
                    break;
                case EngineState$1.PAUSED:
                    if (this._shouldHidePreviewOnUpdate) {
                        this._hidePreview();
                    }
                    this._stopIntervalUpdates();
                    break;
                case EngineState$1.SEEK_IN_PROGRESS:
                    this._updateAllIndicators();
                    break;
                default:
                    break;
            }
        };
        ProgressControl.prototype._processLiveStateChange = function (_a) {
            var nextState = _a.nextState;
            switch (nextState) {
                case LiveState$1.NONE:
                    this.view.setLiveSyncState(false);
                    this.view.setUsualMode();
                    break;
                case LiveState$1.INITIAL:
                    this.view.setLiveMode();
                    break;
                case LiveState$1.SYNC:
                    this.view.setLiveSyncState(true);
                    break;
                case LiveState$1.NOT_SYNC:
                    this.view.setLiveSyncState(false);
                    break;
                case LiveState$1.ENDED:
                    this.view.setLiveSyncState(false);
                    this.view.hideSyncWithLive();
                    // ensure progress indicators show latest info
                    if (this._engine.getCurrentState() === EngineState$1.PLAYING) {
                        this._startIntervalUpdates();
                    }
                    else {
                        this._updateAllIndicators();
                    }
                    break;
                default:
                    break;
            }
        };
        ProgressControl.prototype._changeCurrentTimeOfVideo = function (newTime) {
            var duration = this._engine.getDuration();
            if (this._engine.isDynamicContent && duration === newTime) {
                this._engine.syncWithLive();
            }
            else {
                this._engine.seekTo(newTime);
            }
            this._eventEmitter.emit(UI_EVENTS.PROGRESS_CHANGE, newTime);
        };
        ProgressControl.prototype._pauseVideoOnDragStart = function () {
            var currentState = this._engine.getCurrentState();
            if (currentState === EngineState$1.PLAYING ||
                currentState === EngineState$1.PLAY_REQUESTED) {
                this._shouldPlayAfterDragEnd = true;
                this._engine.pause();
            }
            this._eventEmitter.emit(UI_EVENTS.PROGRESS_DRAG_STARTED);
        };
        ProgressControl.prototype._playVideoOnDragEnd = function () {
            if (this._shouldPlayAfterDragEnd) {
                this._engine.play();
                this._shouldPlayAfterDragEnd = false;
            }
        };
        ProgressControl.prototype._updateBufferIndicator = function () {
            var currentTime = this._engine.getCurrentTime();
            var buffered = this._engine.getBuffered();
            var duration = this._engine.getDuration();
            this._setBuffered(getOverallBufferedPercent(buffered, currentTime, duration));
        };
        ProgressControl.prototype._updatePlayedIndicator = function () {
            if (this._liveStateEngine.state === LiveState$1.SYNC) {
                // TODO: mb use this.updatePlayed(100) here?
                return;
            }
            var currentTime = this._engine.getCurrentTime();
            var duration = this._engine.getDuration();
            this._setPlayed(getOverallPlayedPercent(currentTime, duration));
        };
        ProgressControl.prototype._updateAllIndicators = function () {
            this._updatePlayedIndicator();
            this._updateBufferIndicator();
        };
        ProgressControl.prototype._initTimeIndicators = function () {
            var _this = this;
            this._timeIndicatorsToAdd.forEach(function (time) {
                _this._addTimeIndicator(time);
            });
            this._timeIndicatorsToAdd = [];
        };
        ProgressControl.prototype._addTimeIndicator = function (time) {
            var durationTime = this._engine.getDuration();
            if (time > durationTime) {
                // TODO: log error for developers
                return;
            }
            this.view.addTimeIndicator(getTimePercent(time, durationTime));
        };
        ProgressControl.prototype._syncWithLive = function () {
            this._engine.syncWithLive();
        };
        ProgressControl.prototype._onSyncWithLiveMouseEnter = function () {
            this._eventEmitter.emit(UI_EVENTS.PROGRESS_SYNC_BUTTON_MOUSE_ENTER);
        };
        ProgressControl.prototype._onSyncWithLiveMouseLeave = function () {
            this._eventEmitter.emit(UI_EVENTS.PROGRESS_SYNC_BUTTON_MOUSE_LEAVE);
        };
        ProgressControl.prototype._setPlayed = function (percent) {
            this.view.setPlayed(percent);
        };
        ProgressControl.prototype._setBuffered = function (percent) {
            this.view.setBuffered(percent);
        };
        ProgressControl.prototype._reset = function () {
            this._setPlayed(0);
            this._setBuffered(0);
            this.clearTimeIndicators();
        };
        /**
         * Player will show full screen preview instead of actual seek on video when user drag the progress control
         * @example
         * player.showPreviewOnProgressDrag();
         */
        ProgressControl.prototype.showPreviewOnProgressDrag = function () {
            this._showFullScreenPreview = true;
        };
        /**
         * Player will seek on video when user drag the progress control
         * @example
         * player.seekOnProgressDrag();
         */
        ProgressControl.prototype.seekOnProgressDrag = function () {
            this._showFullScreenPreview = false;
        };
        /**
         * Add time indicator to progress bar
         */
        ProgressControl.prototype.addTimeIndicator = function (time) {
            this.addTimeIndicators([time]);
        };
        /**
         * Add time indicators to progress bar
         */
        ProgressControl.prototype.addTimeIndicators = function (times) {
            var _this = this;
            var _a;
            if (!this._engine.isMetadataLoaded) {
                // NOTE: Add indicator after metadata loaded
                (_a = this._timeIndicatorsToAdd).push.apply(_a, times);
                return;
            }
            times.forEach(function (time) {
                _this._addTimeIndicator(time);
            });
        };
        /**
         * Delete all time indicators from progress bar
         */
        ProgressControl.prototype.clearTimeIndicators = function () {
            this.view.clearTimeIndicators();
        };
        ProgressControl.prototype.hide = function () {
            this.isHidden = true;
            this.view.hide();
        };
        ProgressControl.prototype.show = function () {
            this.isHidden = false;
            this.view.show();
        };
        ProgressControl.prototype.destroy = function () {
            this._destroyInterceptor();
            this._stopIntervalUpdates();
            this._unbindEvents();
            this.view.destroy();
            this.view = null;
            this._eventEmitter = null;
            this._engine = null;
            this._liveStateEngine = null;
            this._timeIndicatorsToAdd = null;
            this._textMap = null;
            this._theme = null;
            this._previewFullSize = null;
            this._previewThumbnail = null;
        };
        ProgressControl.moduleName = 'progressControl';
        ProgressControl.View = ProgressView;
        ProgressControl.dependencies = [
            'engine',
            'liveStateEngine',
            'eventEmitter',
            'textMap',
            'tooltipService',
            'theme',
            'previewThumbnail',
            'previewFullSize',
        ];
        __decorate([
            playerAPI()
        ], ProgressControl.prototype, "showPreviewOnProgressDrag", null);
        __decorate([
            playerAPI()
        ], ProgressControl.prototype, "seekOnProgressDrag", null);
        __decorate([
            playerAPI()
        ], ProgressControl.prototype, "addTimeIndicator", null);
        __decorate([
            playerAPI()
        ], ProgressControl.prototype, "addTimeIndicators", null);
        __decorate([
            playerAPI()
        ], ProgressControl.prototype, "clearTimeIndicators", null);
        return ProgressControl;
    }());

    function anonymous$22(props
    /*``*/) {
    var out='<div class="'+(props.styles.icon)+'"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 14" preserveAspectRatio="xMidYMin slice" width="100%" style="padding-bottom: 127%; height: 1px; overflow: visible" > <!-- padding-bottom: 100% * height/width --> <path class="'+(props.themeStyles.playSvgFill)+'" d="M.079 0L0 14l10.5-7.181z"/> </svg></div>';return out;
    }

    function anonymous$23(props
    /*``*/) {
    var out='<div class="'+(props.styles.icon)+'"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 14" preserveAspectRatio="xMidYMin slice" width="100%" style="padding-bottom: 140%; height: 1px; overflow: visible" > <!-- padding-bottom: 100% * height/width --> <path class="'+(props.themeStyles.playSvgFill)+'" d="M7 0h3v14H7V0zM0 0h3v14H0V0z"/> </svg></div>';return out;
    }

    function anonymous$24(props
    /*``*/) {
    var out='<div class="'+(props.styles.playControl)+'" data-playable-hook="playback-control" data-is-playing="false"> <button class="'+(props.styles.playbackToggle)+' '+(props.styles.controlButton)+'" data-playable-hook="playback-control" aria-label="'+(props.texts.label)+'" type="button" tabindex="0"/></div>';return out;
    }

    var playViewTheme = {
        playSvgFill: {
            fill: function (data) { return data.color; },
        },
    };

    var css$14 = ".play__controlButton___3PoOY {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0;\n  cursor: pointer;\n  -webkit-transition-duration: .2s;\n          transition-duration: .2s;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  opacity: 1;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background-color: transparent;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .play__controlButton___3PoOY:hover {\n    opacity: .7; }\n  .play__hidden___1tNO8 {\n  visibility: hidden !important;\n  width: 0 !important;\n  min-width: 0 !important;\n  height: 0 !important;\n  min-height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  opacity: 0 !important; }\n  .play__playControl___1AgWy {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n  .play__playbackToggle___3tzyO {\n  width: 26px;\n  min-width: 26px;\n  height: 26px;\n  min-height: 26px; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .play__playbackToggle___3tzyO {\n    width: 35px;\n    min-width: 35px;\n    height: 35px;\n    min-height: 35px;\n    background-size: 15px 21px; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .play__playbackToggle___3tzyO .play__icon___1z40F {\n      width: 15px;\n      height: 21px; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .play__playbackToggle___3tzyO.play__paused___2fI5f {\n      background-size: 16px 21px; }\n  .play__playbackToggle___3tzyO .play__icon___1z40F {\n    width: 11px;\n    height: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFjO0VBQWQscUJBQWM7RUFBZCxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLHFDQUE2QjtFQUE3Qiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsY0FBYztFQUNkLDhCQUE4QjtFQUM5Qix5QkFBd0I7TUFBeEIsc0JBQXdCO1VBQXhCLHdCQUF3QjtFQUN4QiwwQkFBb0I7TUFBcEIsdUJBQW9CO1VBQXBCLG9CQUFvQixFQUFFO0VBQ3RCO0lBQ0UsWUFBWSxFQUFFO0VBRWxCO0VBQ0UsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHNCQUFzQixFQUFFO0VBRTFCO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFjO0VBQWQscUJBQWM7RUFBZCxjQUFjO0VBQ2QsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QiwwQkFBb0I7TUFBcEIsdUJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQix3QkFBNEI7TUFBNUIscUJBQTRCO1VBQTVCLDRCQUE0QixFQUFFO0VBRWhDO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCLEVBQUU7RUFDbkI7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsMkJBQTJCLEVBQUU7RUFDN0I7TUFDRSxZQUFZO01BQ1osYUFBYSxFQUFFO0VBQ2pCO01BQ0UsMkJBQTJCLEVBQUU7RUFDakM7SUFDRSxZQUFZO0lBQ1osYUFBYSxFQUFFIiwiZmlsZSI6InBsYXkuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250cm9sQnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIC5jb250cm9sQnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAuNzsgfVxuXG4uaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7IH1cblxuLnBsYXlDb250cm9sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cblxuLnBsYXliYWNrVG9nZ2xlIHtcbiAgd2lkdGg6IDI2cHg7XG4gIG1pbi13aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBtaW4taGVpZ2h0OiAyNnB4OyB9XG4gIGRpdltkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXVtkYXRhLXBsYXlhYmxlLWluLWZ1bGwtc2NyZWVuPSd0cnVlJ10gLnBsYXliYWNrVG9nZ2xlIHtcbiAgICB3aWR0aDogMzVweDtcbiAgICBtaW4td2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1pbi1oZWlnaHQ6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNXB4IDIxcHg7IH1cbiAgICBkaXZbZGF0YS1wbGF5YWJsZS1ob29rPSdwbGF5ZXItY29udGFpbmVyJ11bZGF0YS1wbGF5YWJsZS1pbi1mdWxsLXNjcmVlbj0ndHJ1ZSddIC5wbGF5YmFja1RvZ2dsZSAuaWNvbiB7XG4gICAgICB3aWR0aDogMTVweDtcbiAgICAgIGhlaWdodDogMjFweDsgfVxuICAgIGRpdltkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXVtkYXRhLXBsYXlhYmxlLWluLWZ1bGwtc2NyZWVuPSd0cnVlJ10gLnBsYXliYWNrVG9nZ2xlLnBhdXNlZCB7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMjFweDsgfVxuICAucGxheWJhY2tUb2dnbGUgLmljb24ge1xuICAgIHdpZHRoOiAxMXB4O1xuICAgIGhlaWdodDogMTRweDsgfVxuIl19 */";
    var styles$14 = {"controlButton":"play__controlButton___3PoOY","hidden":"play__hidden___1tNO8","playControl":"play__playControl___1AgWy","playbackToggle":"play__playbackToggle___3tzyO","icon":"play__icon___1z40F","paused":"play__paused___2fI5f"};
    styleInject(css$14);

    var DATA_IS_PLAYING = 'data-playable-is-playing';
    var PlayView = /** @class */ (function (_super) {
        __extends(PlayView, _super);
        function PlayView(config) {
            var _this = this;
            var callbacks = config.callbacks, textMap = config.textMap, theme = config.theme;
            _this = _super.call(this, theme) || this;
            _this._callbacks = callbacks;
            _this._textMap = textMap;
            _this._$rootElement = htmlToElement(anonymous$24({
                styles: _this.styleNames,
                texts: {
                    label: _this._textMap.get(TEXT_LABELS.PLAY_CONTROL_LABEL),
                },
            }));
            _this._$playbackControl = getElementByHook(_this._$rootElement, 'playback-control');
            _this.setPlayingState(false);
            _this._bindEvents();
            return _this;
        }
        PlayView.prototype._bindEvents = function () {
            this._onButtonClick = this._onButtonClick.bind(this);
            this._$playbackControl.addEventListener('click', this._onButtonClick);
        };
        PlayView.prototype._unbindEvents = function () {
            this._$playbackControl.removeEventListener('click', this._onButtonClick);
        };
        PlayView.prototype._onButtonClick = function () {
            this._$playbackControl.focus();
            this._callbacks.onButtonClick();
        };
        PlayView.prototype.setPlayingState = function (isPlaying) {
            if (isPlaying) {
                this._$playbackControl.classList.remove(this.styleNames.paused);
                this._$playbackControl.innerHTML = anonymous$23({
                    styles: this.styleNames,
                    themeStyles: this.themeStyles,
                });
                this._$playbackControl.setAttribute('aria-label', this._textMap.get(TEXT_LABELS.PAUSE_CONTROL_LABEL));
            }
            else {
                this._$playbackControl.classList.add(this.styleNames.paused);
                this._$playbackControl.innerHTML = anonymous$22({
                    styles: this.styleNames,
                    themeStyles: this.themeStyles,
                });
                this._$playbackControl.setAttribute('aria-label', this._textMap.get(TEXT_LABELS.PLAY_CONTROL_LABEL));
            }
            this._$rootElement.setAttribute(DATA_IS_PLAYING, String(isPlaying));
        };
        PlayView.prototype.show = function () {
            this._$rootElement.classList.remove(this.styleNames.hidden);
        };
        PlayView.prototype.hide = function () {
            this._$rootElement.classList.add(this.styleNames.hidden);
        };
        PlayView.prototype.getElement = function () {
            return this._$rootElement;
        };
        PlayView.prototype.destroy = function () {
            this._unbindEvents();
            this._callbacks = null;
            if (this._$rootElement.parentNode) {
                this._$rootElement.parentNode.removeChild(this._$rootElement);
            }
            this._$playbackControl = null;
            this._$rootElement = null;
            this._textMap = null;
        };
        return PlayView;
    }(View));
    PlayView.setTheme(playViewTheme);
    PlayView.extendStyleNames(styles$14);

    var PlayControl = /** @class */ (function () {
        function PlayControl(_a) {
            var engine = _a.engine, eventEmitter = _a.eventEmitter, textMap = _a.textMap, theme = _a.theme;
            this._engine = engine;
            this._eventEmitter = eventEmitter;
            this._textMap = textMap;
            this._theme = theme;
            this._isPlaying = null;
            this._bindCallbacks();
            this._initUI();
            this._bindEvents();
            this._initInterceptor();
        }
        PlayControl.prototype.getElement = function () {
            return this.view.getElement();
        };
        PlayControl.prototype._initInterceptor = function () {
            var _this = this;
            var _a;
            this._interceptor = new KeyboardInterceptorCore(this.getElement(), (_a = {}, _a[KEYCODES.SPACE_BAR] = function (e) {
                    e.stopPropagation();
                    _this._eventEmitter.emit(UI_EVENTS.TOGGLE_PLAYBACK_WITH_KEYBOARD);
                }, _a[KEYCODES.ENTER] = function (e) {
                    e.stopPropagation();
                    _this._eventEmitter.emit(UI_EVENTS.TOGGLE_PLAYBACK_WITH_KEYBOARD);
                }, _a));
        };
        PlayControl.prototype._destroyInterceptor = function () {
            this._interceptor.destroy();
        };
        PlayControl.prototype._bindCallbacks = function () {
            this._togglePlayback = this._togglePlayback.bind(this);
        };
        PlayControl.prototype._bindEvents = function () {
            this._unbindEvents = this._eventEmitter.bindEvents([[VIDEO_EVENTS.STATE_CHANGED, this._updatePlayingState]], this);
        };
        PlayControl.prototype._togglePlayback = function () {
            if (this._isPlaying) {
                this._pauseVideo();
            }
            else {
                this._playVideo();
            }
        };
        PlayControl.prototype._playVideo = function () {
            this._engine.play();
            this._eventEmitter.emit(UI_EVENTS.PLAY_CLICK);
        };
        PlayControl.prototype._pauseVideo = function () {
            this._engine.pause();
            this._eventEmitter.emit(UI_EVENTS.PAUSE_CLICK);
        };
        PlayControl.prototype._updatePlayingState = function (_a) {
            var nextState = _a.nextState;
            if (nextState === EngineState$1.SRC_SET) {
                this._reset();
            }
            else if (nextState === EngineState$1.PLAYING) {
                this._setPlaybackState(true);
            }
            else if (nextState === EngineState$1.PAUSED ||
                nextState === EngineState$1.ENDED ||
                nextState === EngineState$1.SEEK_IN_PROGRESS) {
                this._setPlaybackState(false);
            }
        };
        PlayControl.prototype._initUI = function () {
            var config = {
                callbacks: {
                    onButtonClick: this._togglePlayback,
                },
                theme: this._theme,
                textMap: this._textMap,
            };
            this.view = new PlayControl.View(config);
        };
        PlayControl.prototype._setPlaybackState = function (isPlaying) {
            this._isPlaying = isPlaying;
            this.view.setPlayingState(this._isPlaying);
        };
        PlayControl.prototype._reset = function () {
            this._setPlaybackState(false);
        };
        PlayControl.prototype.destroy = function () {
            this._destroyInterceptor();
            this._unbindEvents();
            this.view.destroy();
            this.view = null;
            this._eventEmitter = null;
            this._engine = null;
            this._textMap = null;
            this._theme = null;
        };
        PlayControl.moduleName = 'playControl';
        PlayControl.View = PlayView;
        PlayControl.dependencies = ['engine', 'eventEmitter', 'textMap', 'theme'];
        return PlayControl;
    }());

    function anonymous$25(props
    /*``*/) {
    var out='<div data-playable-hook="time-control" class="'+(props.styles.timeWrapper)+' '+(props.themeStyles.timeText)+'"> <span data-playable-hook="current-time-indicator" class="'+(props.styles.time)+'"> </span> <span data-playable-hook="duration-time-indicator" class="'+(props.styles.time)+' '+(props.styles.duration)+'"> </span></div>';return out;
    }

    var timeViewTheme = {
        timeText: {
            color: function (data) { return data.color; },
        },
    };

    var css$15 = ".time__controlButton___mpXuO {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0;\n  cursor: pointer;\n  -webkit-transition-duration: .2s;\n          transition-duration: .2s;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  opacity: 1;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background-color: transparent;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .time__controlButton___mpXuO:hover {\n    opacity: .7; }\n  .time__hidden___3xnRl {\n  visibility: hidden !important;\n  width: 0 !important;\n  min-width: 0 !important;\n  height: 0 !important;\n  min-height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  opacity: 0 !important; }\n  .time__timeWrapper___1r8hO {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  height: 25px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .time__time___10Maj {\n  font-size: 12px;\n  line-height: 12px; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .time__time___10Maj {\n    font-size: 14px;\n    line-height: 14px; }\n  .time__duration___3gaxd {\n  margin-left: 5px; }\n  .time__duration___3gaxd:before {\n    margin-right: 4px;\n    content: '/'; }\n  .time__liveMode___2Nolg .time__separator___hIpG9 {\n  display: none; }\n  .time__liveMode___2Nolg .time__duration___3gaxd {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFjO0VBQWQscUJBQWM7RUFBZCxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLHFDQUE2QjtFQUE3Qiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsY0FBYztFQUNkLDhCQUE4QjtFQUM5Qix5QkFBd0I7TUFBeEIsc0JBQXdCO1VBQXhCLHdCQUF3QjtFQUN4QiwwQkFBb0I7TUFBcEIsdUJBQW9CO1VBQXBCLG9CQUFvQixFQUFFO0VBQ3RCO0lBQ0UsWUFBWSxFQUFFO0VBRWxCO0VBQ0UsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHNCQUFzQixFQUFFO0VBRTFCO0VBQ0UscUJBQWM7RUFBZCxxQkFBYztFQUFkLGNBQWM7RUFDZCxvQkFBZTtNQUFmLG1CQUFlO1VBQWYsZUFBZTtFQUNmLGFBQWE7RUFDYiwwQkFBb0I7TUFBcEIsdUJBQW9CO1VBQXBCLG9CQUFvQixFQUFFO0VBRXhCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFFO0VBQ3BCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQixFQUFFO0VBRXhCO0VBQ0UsaUJBQWlCLEVBQUU7RUFDbkI7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYSxFQUFFO0VBRW5CO0VBQ0UsY0FBYyxFQUFFO0VBRWxCO0VBQ0UsY0FBYyxFQUFFIiwiZmlsZSI6InRpbWUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250cm9sQnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIC5jb250cm9sQnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAuNzsgfVxuXG4uaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7IH1cblxuLnRpbWVXcmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMCAwIGF1dG87XG4gIGhlaWdodDogMjVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4udGltZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7IH1cbiAgZGl2W2RhdGEtcGxheWFibGUtaG9vaz0ncGxheWVyLWNvbnRhaW5lciddW2RhdGEtcGxheWFibGUtaW4tZnVsbC1zY3JlZW49J3RydWUnXSAudGltZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4OyB9XG5cbi5kdXJhdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7IH1cbiAgLmR1cmF0aW9uOmJlZm9yZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgY29udGVudDogJy8nOyB9XG5cbi5saXZlTW9kZSAuc2VwYXJhdG9yIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4ubGl2ZU1vZGUgLmR1cmF0aW9uIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuIl19 */";
    var styles$15 = {"controlButton":"time__controlButton___mpXuO","hidden":"time__hidden___3xnRl","timeWrapper":"time__timeWrapper___1r8hO","time":"time__time___10Maj","duration":"time__duration___3gaxd","liveMode":"time__liveMode___2Nolg","separator":"time__separator___hIpG9"};
    styleInject(css$15);

    var DATA_DURATION = 'data-playable-duration';
    var DATA_CURRENT_TIME = 'data-playable-current-time';
    var TimeView = /** @class */ (function (_super) {
        __extends(TimeView, _super);
        function TimeView(config) {
            var _this = this;
            var theme = config.theme;
            _this = _super.call(this, theme) || this;
            _this._initDOM();
            return _this;
        }
        TimeView.prototype._initDOM = function () {
            this._$rootElement = htmlToElement(anonymous$25({ styles: this.styleNames, themeStyles: this.themeStyles }));
            this._$currentTime = getElementByHook(this._$rootElement, 'current-time-indicator');
            this._$durationTime = getElementByHook(this._$rootElement, 'duration-time-indicator');
        };
        TimeView.prototype.setDurationTime = function (duration) {
            if (duration !== this._duration) {
                this._duration = duration;
                this._updateDurationTime();
            }
        };
        TimeView.prototype.setCurrentTime = function (current) {
            if (current !== this._current) {
                this._current = current;
                this._updateCurrentTime();
            }
        };
        TimeView.prototype.setCurrentTimeBackward = function (_isBackward) {
            this._isBackward = _isBackward;
            this._updateCurrentTime();
        };
        TimeView.prototype._updateDurationTime = function () {
            this._$durationTime.innerHTML = formatTime(this._duration);
            this._$rootElement.setAttribute(DATA_DURATION, this._duration ? this._duration.toString() : '0');
        };
        TimeView.prototype._updateCurrentTime = function () {
            if (this._isBackward) {
                this._$currentTime.innerHTML = formatTime(this._current - this._duration);
            }
            else {
                this._$currentTime.innerHTML = formatTime(this._current);
            }
            this._$rootElement.setAttribute(DATA_CURRENT_TIME, this._current ? this._current.toString() : '0');
        };
        TimeView.prototype.showDuration = function () {
            this._$durationTime.classList.remove(this.styleNames.hidden);
        };
        TimeView.prototype.hideDuration = function () {
            this._$durationTime.classList.add(this.styleNames.hidden);
        };
        TimeView.prototype.show = function () {
            this._$rootElement.classList.remove(this.styleNames.hidden);
        };
        TimeView.prototype.hide = function () {
            this._$rootElement.classList.add(this.styleNames.hidden);
        };
        TimeView.prototype.getElement = function () {
            return this._$rootElement;
        };
        TimeView.prototype.destroy = function () {
            if (this._$rootElement.parentNode) {
                this._$rootElement.parentNode.removeChild(this._$rootElement);
            }
            this._$currentTime = null;
            this._$durationTime = null;
            this._$rootElement = null;
        };
        return TimeView;
    }(View));
    TimeView.setTheme(timeViewTheme);
    TimeView.extendStyleNames(styles$15);

    var UPDATE_INTERVAL_DELAY$1 = 1000 / 60;
    var TimeControl = /** @class */ (function () {
        function TimeControl(_a) {
            var eventEmitter = _a.eventEmitter, engine = _a.engine, theme = _a.theme;
            this._eventEmitter = eventEmitter;
            this._engine = engine;
            this._theme = theme;
            this._bindCallbacks();
            this._initUI();
            this._bindEvents();
            this._setCurrentTime(0);
            this._setDurationTime(0);
        }
        TimeControl.prototype.getElement = function () {
            return this.view.getElement();
        };
        TimeControl.prototype._bindCallbacks = function () {
            this._updateCurrentTime = this._updateCurrentTime.bind(this);
            this._updateDurationTime = this._updateDurationTime.bind(this);
        };
        TimeControl.prototype._bindEvents = function () {
            this._unbindEvents = this._eventEmitter.bindEvents([
                [UI_EVENTS.PROGRESS_USER_PREVIEWING_FRAME, this._updateTimeFromPreview],
                [VIDEO_EVENTS.STATE_CHANGED, this._toggleIntervalUpdates],
                [VIDEO_EVENTS.DURATION_UPDATED, this._updateDurationTime],
                [VIDEO_EVENTS.LIVE_STATE_CHANGED, this._processLiveStateChange],
            ], this);
        };
        TimeControl.prototype._initUI = function () {
            var config = {
                theme: this._theme,
            };
            this.view = new TimeControl.View(config);
        };
        TimeControl.prototype._startIntervalUpdates = function () {
            if (this._updateControlInterval) {
                this._stopIntervalUpdates();
            }
            this._updateControlInterval = window.setInterval(this._updateCurrentTime, UPDATE_INTERVAL_DELAY$1);
        };
        TimeControl.prototype._stopIntervalUpdates = function () {
            window.clearInterval(this._updateControlInterval);
            this._updateControlInterval = null;
        };
        TimeControl.prototype._processLiveStateChange = function (_a) {
            var nextState = _a.nextState;
            switch (nextState) {
                case LiveState$1.NONE:
                    this.show();
                    break;
                case LiveState$1.INITIAL:
                    this.hide();
                    break;
                case LiveState$1.ENDED:
                    this.show();
                    break;
                default:
                    break;
            }
        };
        TimeControl.prototype._toggleIntervalUpdates = function (_a) {
            var nextState = _a.nextState;
            switch (nextState) {
                case EngineState$1.SRC_SET:
                    this.reset();
                    break;
                case EngineState$1.PLAYING:
                    this._startIntervalUpdates();
                    break;
                case EngineState$1.SEEK_IN_PROGRESS:
                    this._startIntervalUpdates();
                    break;
                default:
                    this._stopIntervalUpdates();
                    break;
            }
        };
        TimeControl.prototype._updateDurationTime = function () {
            this._setDurationTime(this._engine.getDuration());
        };
        TimeControl.prototype._updateCurrentTime = function () {
            this._setCurrentTime(this._engine.getCurrentTime());
        };
        TimeControl.prototype._updateTimeFromPreview = function (time) {
            this.view.setCurrentTime(time);
        };
        TimeControl.prototype._setDurationTime = function (time) {
            this.view.setDurationTime(time);
        };
        TimeControl.prototype._setCurrentTime = function (time) {
            this.view.setCurrentTime(time);
        };
        TimeControl.prototype.hide = function () {
            this.isHidden = true;
            this.view.hide();
        };
        TimeControl.prototype.show = function () {
            this.isHidden = false;
            this.view.show();
        };
        TimeControl.prototype.reset = function () {
            this._setDurationTime(0);
            this._setCurrentTime(0);
            this.view.showDuration();
            this.view.setCurrentTimeBackward(false);
            this.show();
        };
        TimeControl.prototype.destroy = function () {
            this._stopIntervalUpdates();
            this._unbindEvents();
            this.view.destroy();
            this.view = null;
            this._eventEmitter = null;
            this._engine = null;
            this._theme = null;
        };
        TimeControl.moduleName = 'timeControl';
        TimeControl.View = TimeView;
        TimeControl.dependencies = ['engine', 'eventEmitter', 'theme'];
        return TimeControl;
    }());

    function anonymous$26(props
    /*``*/) {
    var out='<div class="'+(props.styles.icon)+'"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 14" preserveAspectRatio="xMidYMin slice" width="100%" style="padding-bottom: 82%; height: 1px; overflow: visible" > <!-- padding-bottom: 100% * height/width --> <!--width="16"--> <!--height="13"--> <g class="'+(props.themeStyles.volumeSvgFill)+'"> <path d="M0 3.919h2.993v5.97H0V3.92zm2.995-.015L7 .924v12L2.995 9.882v-5.98z"/> <path fill-rule="nonzero" d="M13 6.257l-2.05-2.05-.743.743L12.257 7l-2.05 2.05.743.743L13 7.743l2.05 2.05.743-.743L13.743 7l2.05-2.05-.743-.743L13 6.257z"/> </g> </svg></div>';return out;
    }

    function anonymous$27(props
    /*``*/) {
    var out='<div class="'+(props.styles.icon)+'"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 14" preserveAspectRatio="xMidYMin slice" width="100%" style="padding-bottom: 82%; height: 1px; overflow: visible" > <!-- padding-bottom: 100% * height/width --> <g fill="none" fill-rule="evenodd"> <path class="'+(props.themeStyles.volumeSvgFill)+'" d="M0 3.919h2.993v5.97H0V3.92zm2.995-.015L7 .924v12L2.995 9.882v-5.98z"/> <path class="'+(props.themeStyles.volumeSvgStroke)+'" d="M9.853 10.837a5.45 5.45 0 0 0 0-7.707"/> </g> </svg></div>';return out;
    }

    function anonymous$28(props
    /*``*/) {
    var out='<div class="'+(props.styles.icon)+'"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 14" preserveAspectRatio="xMidYMin slice" width="100%" style="padding-bottom: 82%; height: 1px; overflow: visible" > <!-- padding-bottom: 100% * height/width --> <g fill="none" fill-rule="evenodd"> <path class="'+(props.themeStyles.volumeSvgFill)+'" d="M0 3.919h2.993v5.97H0V3.92zm2.995-.015L7 .924v12L2.995 9.882v-5.98z"/> <path class="'+(props.themeStyles.volumeSvgStroke)+'" d="M12.793 13.716a9.607 9.607 0 0 0 0-13.586M9.853 10.837a5.45 5.45 0 0 0 0-7.707"/> </g> </svg></div>';return out;
    }

    function anonymous$29(props
    /*``*/) {
    var out='<div class="'+(props.styles.volumeControl)+'" data-playable-hook="volume-control" data-volume-percent="100" data-is-muted="false"> <button class="'+(props.styles.muteButton)+' '+(props.styles.controlButton)+'" data-playable-hook="mute-button" aria-label="'+(props.texts.muteLabel)+'" type="button" tabindex="0"> </button> <div class="'+(props.styles.volumeInputBlock)+'" data-playable-hook="volume-input-block" aria-label="'+(props.texts.volumeLabel)+'" aria-valuemin="0" aria-valuenow="0" aria-valuemax="100" tabindex="0"> <div class="'+(props.styles.progressBar)+' '+(props.styles.background)+' '+(props.themeStyles.volumeProgressBackground)+'"> </div> <div class="'+(props.styles.progressBar)+' '+(props.styles.volume)+' '+(props.themeStyles.volumeProgress)+'" data-playable-hook="volume-input"> </div> <div class="'+(props.styles.hitbox)+'" data-playable-hook="volume-hitbox"> </div> </div></div>';return out;
    }

    var volumeViewTheme = {
        volumeSvgFill: {
            fill: function (data) { return data.color; },
        },
        volumeSvgStroke: {
            stroke: function (data) { return data.color; },
        },
        volumeProgress: {
            backgroundColor: function (data) { return data.color; },
            '&:after': {
                backgroundColor: function (data) { return data.color; },
            },
        },
        volumeProgressBackground: {
            backgroundColor: function (data) {
                return transperentizeColor(data.color, 0.25);
            },
        },
    };

    var css$16 = ".volume__controlButton___1XXXG {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0;\n  cursor: pointer;\n  -webkit-transition-duration: .2s;\n          transition-duration: .2s;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  opacity: 1;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background-color: transparent;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .volume__controlButton___1XXXG:hover {\n    opacity: .7; }\n  .volume__hidden___504PW {\n  visibility: hidden !important;\n  width: 0 !important;\n  min-width: 0 !important;\n  height: 0 !important;\n  min-height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  opacity: 0 !important; }\n  .volume__volumeControl___1f_-O {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: width .2s;\n  transition: width .2s;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .volume__volumeControl___1f_-O {\n    height: 35px; }\n  .volume__volumeControl___1f_-O:hover .volume__volumeInputBlock___EzZei, .volume__volumeControl___1f_-O.volume__isDragging___3mlpX .volume__volumeInputBlock___EzZei {\n    width: 50px;\n    margin-right: 5px;\n    opacity: 1; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .volume__volumeControl___1f_-O:hover .volume__volumeInputBlock___EzZei, div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .volume__volumeControl___1f_-O.volume__isDragging___3mlpX .volume__volumeInputBlock___EzZei {\n      width: 90px;\n      margin-right: 10px; }\n  .volume__muteButton___1d1Ei {\n  width: 26px;\n  min-width: 26px;\n  height: 26px;\n  min-height: 26px;\n  padding: 0; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .volume__muteButton___1d1Ei {\n    width: 35px;\n    min-width: 35px;\n    height: 35px;\n    min-height: 35px; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .volume__muteButton___1d1Ei .volume__icon___38qX4 {\n      width: 25px;\n      height: 21px; }\n  .volume__muteButton___1d1Ei .volume__icon___38qX4 {\n    width: 17px;\n    height: 14px; }\n  .volume__volumeInputBlock___EzZei {\n  position: relative;\n  display: block;\n  width: 0;\n  height: 25px;\n  margin-left: 2px;\n  -webkit-transition: opacity .2s, width .2s;\n  transition: opacity .2s, width .2s;\n  opacity: 0; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .volume__volumeInputBlock___EzZei {\n    margin-left: 5px; }\n  .volume__progressBar___1JJYW {\n  position: absolute;\n  top: 11.5px;\n  height: 2px;\n  padding: 0; }\n  .volume__volume___1XvBT:after {\n  position: absolute;\n  top: -3px;\n  right: -4px;\n  width: 8px;\n  height: 8px;\n  content: '';\n  -webkit-transition: opacity .2s;\n  transition: opacity .2s;\n  border-radius: 50%; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .volume__volume___1XvBT:after {\n    top: -4px;\n    right: -5px;\n    width: 10px;\n    height: 10px; }\n  .volume__background___2Mafo {\n  width: 100%; }\n  .volume__hitbox___1jBrF {\n  position: relative;\n  z-index: 5;\n  display: block;\n  width: 100%;\n  height: 25px;\n  cursor: pointer;\n  opacity: 0; }\n  [data-playable-focus-source='key'] [data-playable-hook='volume-control'] .focus-within.volume__volumeInputBlock___EzZei,\n[data-playable-focus-source='script'] [data-playable-hook='volume-control'] .focus-within.volume__volumeInputBlock___EzZei {\n  width: 50px;\n  margin-right: 5px;\n  opacity: 1;\n  -webkit-box-shadow: 0 0 0 2px rgba(56, 153, 236, 0.8);\n          box-shadow: 0 0 0 2px rgba(56, 153, 236, 0.8); }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] [data-playable-focus-source='key'] [data-playable-hook='volume-control'] .focus-within.volume__volumeInputBlock___EzZei, div[data-playable-hook='player-container'][data-playable-in-full-screen='true']\n  [data-playable-focus-source='script'] [data-playable-hook='volume-control'] .focus-within.volume__volumeInputBlock___EzZei {\n    width: 90px;\n    margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvbHVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQWM7RUFBZCxxQkFBYztFQUFkLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlDQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIscUNBQTZCO0VBQTdCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLHlCQUF3QjtNQUF4QixzQkFBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLDBCQUFvQjtNQUFwQix1QkFBb0I7VUFBcEIsb0JBQW9CLEVBQUU7RUFDdEI7SUFDRSxZQUFZLEVBQUU7RUFFbEI7RUFDRSw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsc0JBQXNCLEVBQUU7RUFFMUI7RUFDRSxtQkFBbUI7RUFDbkIscUJBQWM7RUFBZCxxQkFBYztFQUFkLGNBQWM7RUFDZCwwQkFBa0I7S0FBbEIsdUJBQWtCO01BQWxCLHNCQUFrQjtVQUFsQixrQkFBa0I7RUFDbEIsOEJBQXNCO0VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBNEI7TUFBNUIscUJBQTRCO1VBQTVCLDRCQUE0QjtFQUM1QiwwQkFBb0I7TUFBcEIsdUJBQW9CO1VBQXBCLG9CQUFvQixFQUFFO0VBQ3RCO0lBQ0UsYUFBYSxFQUFFO0VBQ2pCO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXLEVBQUU7RUFDYjtNQUNFLFlBQVk7TUFDWixtQkFBbUIsRUFBRTtFQUUzQjtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixXQUFXLEVBQUU7RUFDYjtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGlCQUFpQixFQUFFO0VBQ25CO01BQ0UsWUFBWTtNQUNaLGFBQWEsRUFBRTtFQUNuQjtJQUNFLFlBQVk7SUFDWixhQUFhLEVBQUU7RUFFbkI7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFNBQVM7RUFDVCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDJDQUFtQztFQUFuQyxtQ0FBbUM7RUFDbkMsV0FBVyxFQUFFO0VBQ2I7SUFDRSxpQkFBaUIsRUFBRTtFQUV2QjtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVcsRUFBRTtFQUVmO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0NBQXdCO0VBQXhCLHdCQUF3QjtFQUN4QixtQkFBbUIsRUFBRTtFQUNyQjtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWEsRUFBRTtFQUVuQjtFQUNFLFlBQVksRUFBRTtFQUVoQjtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBRTtFQUVmOztFQUVFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHNEQUE4QztVQUE5Qyw4Q0FBOEMsRUFBRTtFQUNoRDs7SUFFRSxZQUFZO0lBQ1osbUJBQW1CLEVBQUUiLCJmaWxlIjoidm9sdW1lLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udHJvbEJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuY29udHJvbEJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogLjc7IH1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB3aWR0aDogMCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50OyB9XG5cbi52b2x1bWVDb250cm9sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdHJhbnNpdGlvbjogd2lkdGggLjJzO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgZGl2W2RhdGEtcGxheWFibGUtaG9vaz0ncGxheWVyLWNvbnRhaW5lciddW2RhdGEtcGxheWFibGUtaW4tZnVsbC1zY3JlZW49J3RydWUnXSAudm9sdW1lQ29udHJvbCB7XG4gICAgaGVpZ2h0OiAzNXB4OyB9XG4gIC52b2x1bWVDb250cm9sOmhvdmVyIC52b2x1bWVJbnB1dEJsb2NrLCAudm9sdW1lQ29udHJvbC5pc0RyYWdnaW5nIC52b2x1bWVJbnB1dEJsb2NrIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBvcGFjaXR5OiAxOyB9XG4gICAgZGl2W2RhdGEtcGxheWFibGUtaG9vaz0ncGxheWVyLWNvbnRhaW5lciddW2RhdGEtcGxheWFibGUtaW4tZnVsbC1zY3JlZW49J3RydWUnXSAudm9sdW1lQ29udHJvbDpob3ZlciAudm9sdW1lSW5wdXRCbG9jaywgZGl2W2RhdGEtcGxheWFibGUtaG9vaz0ncGxheWVyLWNvbnRhaW5lciddW2RhdGEtcGxheWFibGUtaW4tZnVsbC1zY3JlZW49J3RydWUnXSAudm9sdW1lQ29udHJvbC5pc0RyYWdnaW5nIC52b2x1bWVJbnB1dEJsb2NrIHtcbiAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XG5cbi5tdXRlQnV0dG9uIHtcbiAgd2lkdGg6IDI2cHg7XG4gIG1pbi13aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBtaW4taGVpZ2h0OiAyNnB4O1xuICBwYWRkaW5nOiAwOyB9XG4gIGRpdltkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXVtkYXRhLXBsYXlhYmxlLWluLWZ1bGwtc2NyZWVuPSd0cnVlJ10gLm11dGVCdXR0b24ge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIG1pbi13aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWluLWhlaWdodDogMzVweDsgfVxuICAgIGRpdltkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXVtkYXRhLXBsYXlhYmxlLWluLWZ1bGwtc2NyZWVuPSd0cnVlJ10gLm11dGVCdXR0b24gLmljb24ge1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBoZWlnaHQ6IDIxcHg7IH1cbiAgLm11dGVCdXR0b24gLmljb24ge1xuICAgIHdpZHRoOiAxN3B4O1xuICAgIGhlaWdodDogMTRweDsgfVxuXG4udm9sdW1lSW5wdXRCbG9jayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzLCB3aWR0aCAuMnM7XG4gIG9wYWNpdHk6IDA7IH1cbiAgZGl2W2RhdGEtcGxheWFibGUtaG9vaz0ncGxheWVyLWNvbnRhaW5lciddW2RhdGEtcGxheWFibGUtaW4tZnVsbC1zY3JlZW49J3RydWUnXSAudm9sdW1lSW5wdXRCbG9jayB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDsgfVxuXG4ucHJvZ3Jlc3NCYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTEuNXB4O1xuICBoZWlnaHQ6IDJweDtcbiAgcGFkZGluZzogMDsgfVxuXG4udm9sdW1lOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0zcHg7XG4gIHJpZ2h0OiAtNHB4O1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgY29udGVudDogJyc7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7IH1cbiAgZGl2W2RhdGEtcGxheWFibGUtaG9vaz0ncGxheWVyLWNvbnRhaW5lciddW2RhdGEtcGxheWFibGUtaW4tZnVsbC1zY3JlZW49J3RydWUnXSAudm9sdW1lOmFmdGVyIHtcbiAgICB0b3A6IC00cHg7XG4gICAgcmlnaHQ6IC01cHg7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4OyB9XG5cbi5iYWNrZ3JvdW5kIHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLmhpdGJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogNTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDsgfVxuXG46Z2xvYmFsIFtkYXRhLXBsYXlhYmxlLWZvY3VzLXNvdXJjZT0na2V5J10gW2RhdGEtcGxheWFibGUtaG9vaz0ndm9sdW1lLWNvbnRyb2wnXSAuZm9jdXMtd2l0aGluOmxvY2FsLnZvbHVtZUlucHV0QmxvY2ssXG46Z2xvYmFsIFtkYXRhLXBsYXlhYmxlLWZvY3VzLXNvdXJjZT0nc2NyaXB0J10gW2RhdGEtcGxheWFibGUtaG9vaz0ndm9sdW1lLWNvbnRyb2wnXSAuZm9jdXMtd2l0aGluOmxvY2FsLnZvbHVtZUlucHV0QmxvY2sge1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG9wYWNpdHk6IDE7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDU2LCAxNTMsIDIzNiwgMC44KTsgfVxuICBkaXZbZGF0YS1wbGF5YWJsZS1ob29rPSdwbGF5ZXItY29udGFpbmVyJ11bZGF0YS1wbGF5YWJsZS1pbi1mdWxsLXNjcmVlbj0ndHJ1ZSddIDpnbG9iYWwgW2RhdGEtcGxheWFibGUtZm9jdXMtc291cmNlPSdrZXknXSBbZGF0YS1wbGF5YWJsZS1ob29rPSd2b2x1bWUtY29udHJvbCddIC5mb2N1cy13aXRoaW46bG9jYWwudm9sdW1lSW5wdXRCbG9jaywgZGl2W2RhdGEtcGxheWFibGUtaG9vaz0ncGxheWVyLWNvbnRhaW5lciddW2RhdGEtcGxheWFibGUtaW4tZnVsbC1zY3JlZW49J3RydWUnXVxuICA6Z2xvYmFsIFtkYXRhLXBsYXlhYmxlLWZvY3VzLXNvdXJjZT0nc2NyaXB0J10gW2RhdGEtcGxheWFibGUtaG9vaz0ndm9sdW1lLWNvbnRyb2wnXSAuZm9jdXMtd2l0aGluOmxvY2FsLnZvbHVtZUlucHV0QmxvY2sge1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxuIl19 */";
    var styles$16 = {"controlButton":"volume__controlButton___1XXXG","hidden":"volume__hidden___504PW","volumeControl":"volume__volumeControl___1f_-O","volumeInputBlock":"volume__volumeInputBlock___EzZei","isDragging":"volume__isDragging___3mlpX","muteButton":"volume__muteButton___1d1Ei","icon":"volume__icon___38qX4","progressBar":"volume__progressBar___1JJYW","volume":"volume__volume___1XvBT","background":"volume__background___2Mafo","hitbox":"volume__hitbox___1jBrF"};
    styleInject(css$16);

    var DATA_IS_MUTED = 'data-playable-is-muted';
    var DATA_VOLUME = 'data-playable-volume-percent';
    var MAX_VOLUME_ICON_RANGE = 50;
    var getPercentBasedOnXPosition$1 = function (event, element) {
        var boundingRect = element.getBoundingClientRect();
        var positionX = event.clientX;
        if (positionX < boundingRect.left) {
            return 0;
        }
        if (positionX > boundingRect.left + boundingRect.width) {
            return 100;
        }
        return ((event.clientX - boundingRect.left) / boundingRect.width) * 100;
    };
    var VolumeView = /** @class */ (function (_super) {
        __extends(VolumeView, _super);
        function VolumeView(config) {
            var _this = this;
            var callbacks = config.callbacks, textMap = config.textMap, tooltipService = config.tooltipService, theme = config.theme;
            _this = _super.call(this, theme) || this;
            _this._callbacks = callbacks;
            _this._textMap = textMap;
            _this._tooltipService = tooltipService;
            _this._bindCallbacks();
            _this._initDOM();
            _this._bindEvents();
            return _this;
        }
        VolumeView.prototype._initDOM = function () {
            this._$rootElement = htmlToElement(anonymous$29({
                styles: this.styleNames,
                themeStyles: this.themeStyles,
                texts: {
                    muteLabel: this._textMap.get(TEXT_LABELS.MUTE_CONTROL_LABEL),
                    volumeLabel: this._textMap.get(TEXT_LABELS.VOLUME_CONTROL_LABEL),
                },
            }));
            this._$muteButton = getElementByHook(this._$rootElement, 'mute-button');
            this._$volumeContainer = getElementByHook(this._$rootElement, 'volume-input-block');
            this._$hitbox = getElementByHook(this._$rootElement, 'volume-hitbox');
            this._$volume = getElementByHook(this._$rootElement, 'volume-input');
            this._muteButtonTooltipReference = this._tooltipService.createReference(this._$muteButton, {
                text: this._textMap.get(TEXT_LABELS.MUTE_CONTROL_TOOLTIP),
            });
        };
        VolumeView.prototype._bindCallbacks = function () {
            this._onButtonClick = this._onButtonClick.bind(this);
            this._startDragOnMouseDown = this._startDragOnMouseDown.bind(this);
            this._stopDragOnMouseUp = this._stopDragOnMouseUp.bind(this);
            this._setVolumeByWheel = this._setVolumeByWheel.bind(this);
            this._setVolumeByClick = this._setVolumeByClick.bind(this);
            this._setVolumeByDrag = this._setVolumeByDrag.bind(this);
        };
        VolumeView.prototype._bindEvents = function () {
            this._$hitbox.addEventListener('wheel', this._setVolumeByWheel);
            this._$hitbox.addEventListener('mousedown', this._startDragOnMouseDown);
            window.addEventListener('mousemove', this._setVolumeByDrag);
            window.addEventListener('mouseup', this._stopDragOnMouseUp);
            this._$muteButton.addEventListener('click', this._onButtonClick);
        };
        VolumeView.prototype._unbindEvents = function () {
            this._$hitbox.removeEventListener('wheel', this._setVolumeByWheel);
            this._$hitbox.removeEventListener('mousedown', this._startDragOnMouseDown);
            window.removeEventListener('mousemove', this._setVolumeByDrag);
            window.removeEventListener('mouseup', this._stopDragOnMouseUp);
            this._$muteButton.removeEventListener('click', this._onButtonClick);
        };
        VolumeView.prototype._startDragOnMouseDown = function (event) {
            if (event.button > 1) {
                return;
            }
            this._setVolumeByClick(event);
            this._startDrag();
        };
        VolumeView.prototype._stopDragOnMouseUp = function (event) {
            if (event.button > 1) {
                return;
            }
            this._stopDrag();
        };
        VolumeView.prototype._setVolumeByClick = function (event) {
            this._$volumeContainer.focus();
            var percent = getPercentBasedOnXPosition$1(event, this._$hitbox);
            this._callbacks.onVolumeLevelChangeFromInput(percent);
        };
        VolumeView.prototype._setVolumeByDrag = function (event) {
            var percent = getPercentBasedOnXPosition$1(event, this._$hitbox);
            if (this._isDragging) {
                this._callbacks.onVolumeLevelChangeFromInput(percent);
            }
        };
        VolumeView.prototype._setVolumeByWheel = function (e) {
            e.preventDefault();
            var value = e.deltaX || e.deltaY * -1;
            if (!value) {
                return;
            }
            this._callbacks.onVolumeLevelChangeFromWheel(value);
        };
        VolumeView.prototype._startDrag = function () {
            this._isDragging = true;
            this._$rootElement.classList.add(this.styleNames.isDragging);
            this._callbacks.onDragStart();
        };
        VolumeView.prototype._stopDrag = function () {
            if (this._isDragging) {
                this._isDragging = false;
                this._$rootElement.classList.remove(this.styleNames.isDragging);
                this._callbacks.onDragEnd();
            }
        };
        VolumeView.prototype._setVolumeDOMAttributes = function (percent) {
            this._$volumeContainer.setAttribute('value', String(percent));
            this._$volumeContainer.setAttribute('aria-valuetext', this._textMap.get(TEXT_LABELS.VOLUME_CONTROL_VALUE, { percent: percent }));
            this._$volumeContainer.setAttribute('aria-valuenow', String(percent));
            this._$volume.setAttribute('style', "width:" + percent + "%;");
            this._$rootElement.setAttribute(DATA_VOLUME, String(percent));
            var iconTemplateProps = {
                styles: this.styleNames,
                themeStyles: this.themeStyles,
            };
            if (percent >= MAX_VOLUME_ICON_RANGE) {
                this._$muteButton.innerHTML = anonymous$28(iconTemplateProps);
            }
            else if (percent > 0) {
                this._$muteButton.innerHTML = anonymous$27(iconTemplateProps);
            }
            else {
                this._$muteButton.innerHTML = anonymous$26(iconTemplateProps);
            }
        };
        VolumeView.prototype._onButtonClick = function () {
            this._$muteButton.focus();
            this._callbacks.onToggleMuteClick();
        };
        VolumeView.prototype.setVolume = function (volume) {
            this._setVolumeDOMAttributes(volume);
        };
        VolumeView.prototype.setMute = function (isMuted) {
            this._setMuteDOMAttributes(isMuted);
        };
        VolumeView.prototype._setMuteDOMAttributes = function (isMuted) {
            if (isMuted) {
                this._$muteButton.innerHTML = anonymous$26({
                    styles: this.styleNames,
                    themeStyles: this.themeStyles,
                });
            }
            this._$muteButton.setAttribute('aria-label', isMuted
                ? this._textMap.get(TEXT_LABELS.UNMUTE_CONTROL_LABEL)
                : this._textMap.get(TEXT_LABELS.MUTE_CONTROL_LABEL));
            this._muteButtonTooltipReference.setText(isMuted
                ? this._textMap.get(TEXT_LABELS.UNMUTE_CONTROL_TOOLTIP)
                : this._textMap.get(TEXT_LABELS.MUTE_CONTROL_TOOLTIP));
            this._$rootElement.setAttribute(DATA_IS_MUTED, String(isMuted));
        };
        VolumeView.prototype.show = function () {
            this._$rootElement.classList.remove(this.styleNames.hidden);
        };
        VolumeView.prototype.hide = function () {
            this._$rootElement.classList.add(this.styleNames.hidden);
        };
        VolumeView.prototype.getElement = function () {
            return this._$rootElement;
        };
        VolumeView.prototype.getButtonElement = function () {
            return this._$muteButton;
        };
        VolumeView.prototype.getInputElement = function () {
            return this._$volumeContainer;
        };
        VolumeView.prototype.destroy = function () {
            this._unbindEvents();
            this._callbacks = null;
            this._muteButtonTooltipReference.destroy();
            this._muteButtonTooltipReference = null;
            if (this._$rootElement.parentNode) {
                this._$rootElement.parentNode.removeChild(this._$rootElement);
            }
            this._$muteButton = null;
            this._$rootElement = null;
            this._textMap = null;
        };
        return VolumeView;
    }(View));
    VolumeView.setTheme(volumeViewTheme);
    VolumeView.extendStyleNames(styles$16);

    var VolumeControl = /** @class */ (function () {
        function VolumeControl(_a) {
            var engine = _a.engine, eventEmitter = _a.eventEmitter, textMap = _a.textMap, tooltipService = _a.tooltipService, theme = _a.theme;
            this._engine = engine;
            this._eventEmitter = eventEmitter;
            this._textMap = textMap;
            this._tooltipService = tooltipService;
            this._theme = theme;
            this._bindCallbacks();
            this._initUI();
            this._bindEvents();
            this.view.setVolume(this._engine.getVolume());
            this.view.setMute(this._engine.isMuted);
            this._initInterceptor();
        }
        VolumeControl.prototype.getElement = function () {
            return this.view.getElement();
        };
        VolumeControl.prototype._initUI = function () {
            var config = {
                callbacks: {
                    onDragStart: this._broadcastDragStart,
                    onDragEnd: this._broadcastDragEnd,
                    onVolumeLevelChangeFromInput: this._getVolumeLevelFromInput,
                    onVolumeLevelChangeFromWheel: this._getVolumeLevelFromWheel,
                    onToggleMuteClick: this._toggleMuteState,
                },
                theme: this._theme,
                textMap: this._textMap,
                tooltipService: this._tooltipService,
            };
            this.view = new VolumeControl.View(config);
        };
        VolumeControl.prototype._initInterceptor = function () {
            var _this = this;
            var _a, _b;
            this._buttonInterceptor = new KeyboardInterceptorCore(this.view.getButtonElement(), (_a = {}, _a[KEYCODES.SPACE_BAR] = function (e) {
                    e.stopPropagation();
                    _this._eventEmitter.emit(UI_EVENTS.KEYBOARD_KEYDOWN_INTERCEPTED);
                    _this._eventEmitter.emit(_this._engine.isMuted
                        ? UI_EVENTS.UNMUTE_WITH_KEYBOARD
                        : UI_EVENTS.MUTE_WITH_KEYBOARD);
                }, _a[KEYCODES.ENTER] = function (e) {
                    e.stopPropagation();
                    _this._eventEmitter.emit(UI_EVENTS.KEYBOARD_KEYDOWN_INTERCEPTED);
                    _this._eventEmitter.emit(_this._engine.isMuted
                        ? UI_EVENTS.UNMUTE_WITH_KEYBOARD
                        : UI_EVENTS.MUTE_WITH_KEYBOARD);
                }, _a));
            this._inputInterceptor = new KeyboardInterceptorCore(this.view.getInputElement(), (_b = {}, _b[KEYCODES.RIGHT_ARROW] = function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    _this._eventEmitter.emit(UI_EVENTS.KEYBOARD_KEYDOWN_INTERCEPTED);
                    _this._eventEmitter.emit(UI_EVENTS.INCREASE_VOLUME_WITH_KEYBOARD);
                    _this._engine.setMute(false);
                    _this._engine.increaseVolume(AMOUNT_TO_CHANGE_VOLUME);
                }, _b[KEYCODES.LEFT_ARROW] = function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    _this._eventEmitter.emit(UI_EVENTS.KEYBOARD_KEYDOWN_INTERCEPTED);
                    _this._eventEmitter.emit(UI_EVENTS.DECREASE_VOLUME_WITH_KEYBOARD);
                    _this._engine.setMute(false);
                    _this._engine.decreaseVolume(AMOUNT_TO_CHANGE_VOLUME);
                }, _b));
        };
        VolumeControl.prototype._destroyInterceptor = function () {
            this._buttonInterceptor.destroy();
            this._inputInterceptor.destroy();
        };
        VolumeControl.prototype._bindEvents = function () {
            this._unbindEvents = this._eventEmitter.bindEvents([[VIDEO_EVENTS.SOUND_STATE_CHANGED, this._updateSoundState]], this);
        };
        VolumeControl.prototype._bindCallbacks = function () {
            this._getVolumeLevelFromInput = this._getVolumeLevelFromInput.bind(this);
            this._toggleMuteState = this._toggleMuteState.bind(this);
            this._getVolumeLevelFromWheel = this._getVolumeLevelFromWheel.bind(this);
            this._broadcastDragStart = this._broadcastDragStart.bind(this);
            this._broadcastDragEnd = this._broadcastDragEnd.bind(this);
        };
        VolumeControl.prototype._broadcastDragStart = function () {
            this._eventEmitter.emit(UI_EVENTS.CONTROL_DRAG_START);
        };
        VolumeControl.prototype._broadcastDragEnd = function () {
            this._eventEmitter.emit(UI_EVENTS.CONTROL_DRAG_END);
        };
        VolumeControl.prototype._changeVolumeLevel = function (level) {
            this._engine.setVolume(level);
            this._eventEmitter.emit(UI_EVENTS.VOLUME_CHANGE, level);
            if (this._engine.isMuted) {
                this._toggleMuteState();
            }
        };
        VolumeControl.prototype._toggleMuteState = function () {
            var desiredMuteState = !this._engine.isMuted;
            this._engine.setMute(desiredMuteState);
            this._eventEmitter.emit(desiredMuteState ? UI_EVENTS.MUTE_CLICK : UI_EVENTS.UNMUTE_CLICK);
        };
        VolumeControl.prototype._getVolumeLevelFromWheel = function (delta) {
            if (!this._engine.isMuted) {
                var adjustedVolume = this._engine.getVolume() + delta / 10;
                var validatedVolume = Math.min(100, Math.max(0, adjustedVolume));
                this._changeVolumeLevel(validatedVolume);
            }
        };
        VolumeControl.prototype._getVolumeLevelFromInput = function (level) {
            this._changeVolumeLevel(level);
        };
        VolumeControl.prototype._updateSoundState = function () {
            this._setVolumeLevel(this._engine.getVolume());
            this._setMuteState(this._engine.isMuted);
        };
        VolumeControl.prototype._setVolumeLevel = function (level) {
            this.view.setVolume(level);
            this.view.setMute(Boolean(!level));
        };
        VolumeControl.prototype._setMuteState = function (isMuted) {
            var volume = this._engine.getVolume();
            this.view.setVolume(isMuted ? 0 : volume);
            this.view.setMute(isMuted || Boolean(!volume));
        };
        VolumeControl.prototype.hide = function () {
            this.isHidden = true;
            this.view.hide();
        };
        VolumeControl.prototype.show = function () {
            this.isHidden = false;
            this.view.show();
        };
        VolumeControl.prototype.destroy = function () {
            this._destroyInterceptor();
            this._unbindEvents();
            this.view.destroy();
            this.view = null;
            this._eventEmitter = null;
            this._engine = null;
            this._textMap = null;
            this._theme = null;
        };
        VolumeControl.moduleName = 'volumeControl';
        VolumeControl.View = VolumeView;
        VolumeControl.dependencies = [
            'engine',
            'eventEmitter',
            'textMap',
            'tooltipService',
            'theme',
        ];
        return VolumeControl;
    }());

    function anonymous$30(props
    /*``*/) {
    var out='<div class="'+(props.styles.icon)+'"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" preserveAspectRatio="xMidYMin slice" width="100%" style="padding-bottom: 100%; height: 1px; overflow: visible"> <!-- padding-bottom: 100% * height/width --> <path class="'+(props.themeStyles.fullScreenSvgFill)+'" fill-rule="evenodd" d="M2 10H0v4h4v-2H2v-2zM0 1v3h2V2h2V0H0v1zm14-1h-4v2h2v2h2V0zm-2 12h-2v2h4v-4h-2v2z"/> </svg></div>';return out;
    }

    function anonymous$31(props
    /*``*/) {
    var out='<div class="'+(props.styles.icon)+'"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" preserveAspectRatio="xMidYMin slice" width="100%" style="padding-bottom: 100%; height: 1px; overflow: visible" > <!-- padding-bottom: 100% * height/width --> <path class="'+(props.themeStyles.fullScreenSvgFill)+'" fill-rule="evenodd" d="M4 21h2v-6H0v2h4v4zM6 0H4v4H0v2h6V0zm9 6h6V4h-4V0h-2v6zm2 11h4v-2h-6v6h2v-4z"/> </svg></div>';return out;
    }

    function anonymous$32(props
    /*``*/) {
    var out='<div class="'+(props.styles.fullScreenControl)+'" data-playable-hook="full-screen-control" data-is-in-full-screen="false"> <button class="'+(props.styles.fullScreenToggle)+' '+(props.styles.controlButton)+'" data-playable-hook="full-screen-button" aria-label="'+(props.texts.label)+'" type="button" tabindex="0"/></div>';return out;
    }

    var fullScreenViewTheme = {
        fullScreenSvgFill: {
            fill: function (data) { return data.color; },
        },
    };

    var css$17 = ".full-screen__controlButton___3i-tz {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0;\n  cursor: pointer;\n  -webkit-transition-duration: .2s;\n          transition-duration: .2s;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  opacity: 1;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background-color: transparent;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .full-screen__controlButton___3i-tz:hover {\n    opacity: .7; }\n  .full-screen__hidden___3BgVZ {\n  visibility: hidden !important;\n  width: 0 !important;\n  min-width: 0 !important;\n  height: 0 !important;\n  min-height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  opacity: 0 !important; }\n  .full-screen__fullScreenControl___ng08Y {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .full-screen__fullScreenToggle___2T_-2 {\n  width: 26px;\n  min-width: 26px;\n  height: 26px;\n  min-height: 26px;\n  -webkit-transition: -webkit-transform .2s;\n  transition: -webkit-transform .2s;\n  transition: transform .2s;\n  transition: transform .2s, -webkit-transform .2s; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .full-screen__fullScreenToggle___2T_-2 {\n    width: 35px;\n    min-width: 35px;\n    height: 35px;\n    min-height: 21px; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .full-screen__fullScreenToggle___2T_-2 .full-screen__icon___3x8Mv {\n      width: 21px;\n      height: 21px; }\n  .full-screen__fullScreenToggle___2T_-2 .full-screen__icon___3x8Mv {\n    width: 14px;\n    min-width: 14px;\n    height: 14px;\n    min-height: 14px; }\n  .full-screen__fullScreenToggle___2T_-2:hover {\n    -webkit-transform: scale(1.18);\n            transform: scale(1.18); }\n  .full-screen__fullScreenToggle___2T_-2.full-screen__inFullScreen___3F0AO:hover {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bGwtc2NyZWVuLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBYztFQUFkLHFCQUFjO0VBQWQsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixxQ0FBNkI7RUFBN0IsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIseUJBQXdCO01BQXhCLHNCQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsMEJBQW9CO01BQXBCLHVCQUFvQjtVQUFwQixvQkFBb0IsRUFBRTtFQUN0QjtJQUNFLFlBQVksRUFBRTtFQUVsQjtFQUNFLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixzQkFBc0IsRUFBRTtFQUUxQjtFQUNFLG1CQUFtQjtFQUNuQixxQkFBYztFQUFkLHFCQUFjO0VBQWQsY0FBYztFQUNkLDBCQUFvQjtNQUFwQix1QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLHlCQUF3QjtNQUF4QixzQkFBd0I7VUFBeEIsd0JBQXdCLEVBQUU7RUFFNUI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsMENBQTBCO0VBQTFCLGtDQUEwQjtFQUExQiwwQkFBMEI7RUFBMUIsaURBQTBCLEVBQUU7RUFDNUI7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQkFBaUIsRUFBRTtFQUNuQjtNQUNFLFlBQVk7TUFDWixhQUFhLEVBQUU7RUFDbkI7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQkFBaUIsRUFBRTtFQUNyQjtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUIsRUFBRTtFQUMzQjtJQUNFLDhCQUFzQjtZQUF0QixzQkFBc0IsRUFBRSIsImZpbGUiOiJmdWxsLXNjcmVlbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRyb2xCdXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLmNvbnRyb2xCdXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IC43OyB9XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDsgfVxuXG4uZnVsbFNjcmVlbkNvbnRyb2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbi5mdWxsU2NyZWVuVG9nZ2xlIHtcbiAgd2lkdGg6IDI2cHg7XG4gIG1pbi13aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBtaW4taGVpZ2h0OiAyNnB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzOyB9XG4gIGRpdltkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXVtkYXRhLXBsYXlhYmxlLWluLWZ1bGwtc2NyZWVuPSd0cnVlJ10gLmZ1bGxTY3JlZW5Ub2dnbGUge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIG1pbi13aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWluLWhlaWdodDogMjFweDsgfVxuICAgIGRpdltkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXVtkYXRhLXBsYXlhYmxlLWluLWZ1bGwtc2NyZWVuPSd0cnVlJ10gLmZ1bGxTY3JlZW5Ub2dnbGUgLmljb24ge1xuICAgICAgd2lkdGg6IDIxcHg7XG4gICAgICBoZWlnaHQ6IDIxcHg7IH1cbiAgLmZ1bGxTY3JlZW5Ub2dnbGUgLmljb24ge1xuICAgIHdpZHRoOiAxNHB4O1xuICAgIG1pbi13aWR0aDogMTRweDtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgbWluLWhlaWdodDogMTRweDsgfVxuICAuZnVsbFNjcmVlblRvZ2dsZTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE4KTsgfVxuICAuZnVsbFNjcmVlblRvZ2dsZS5pbkZ1bGxTY3JlZW46aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTsgfVxuIl19 */";
    var styles$17 = {"controlButton":"full-screen__controlButton___3i-tz","hidden":"full-screen__hidden___3BgVZ","fullScreenControl":"full-screen__fullScreenControl___ng08Y","fullScreenToggle":"full-screen__fullScreenToggle___2T_-2","icon":"full-screen__icon___3x8Mv","inFullScreen":"full-screen__inFullScreen___3F0AO"};
    styleInject(css$17);

    var FullScreenView = /** @class */ (function (_super) {
        __extends(FullScreenView, _super);
        function FullScreenView(config) {
            var _this = this;
            var callbacks = config.callbacks, textMap = config.textMap, tooltipService = config.tooltipService, theme = config.theme;
            _this = _super.call(this, theme) || this;
            _this._callbacks = callbacks;
            _this._textMap = textMap;
            _this._$rootElement = htmlToElement(anonymous$32({
                styles: _this.styleNames,
                texts: {
                    label: _this._textMap.get(TEXT_LABELS.ENTER_FULL_SCREEN_LABEL),
                },
            }));
            _this._$toggleFullScreenControl = getElementByHook(_this._$rootElement, 'full-screen-button');
            _this._tooltipReference = tooltipService.createReference(_this._$toggleFullScreenControl, {
                text: _this._textMap.get(TEXT_LABELS.ENTER_FULL_SCREEN_TOOLTIP),
            });
            _this.setFullScreenState(false);
            _this._bindEvents();
            return _this;
        }
        FullScreenView.prototype._bindEvents = function () {
            this._onButtonClick = this._onButtonClick.bind(this);
            this._$toggleFullScreenControl.addEventListener('click', this._onButtonClick);
        };
        FullScreenView.prototype._unbindEvents = function () {
            this._$toggleFullScreenControl.removeEventListener('click', this._onButtonClick);
        };
        FullScreenView.prototype._onButtonClick = function () {
            this._$toggleFullScreenControl.focus();
            this._callbacks.onButtonClick();
        };
        //TODO: No need to create icons every tims on setState
        FullScreenView.prototype.setFullScreenState = function (isInFullScreen) {
            if (isInFullScreen) {
                this._$toggleFullScreenControl.classList.add(this.styleNames.inFullScreen);
                this._$toggleFullScreenControl.innerHTML = anonymous$31({
                    styles: this.styleNames,
                    themeStyles: this.themeStyles,
                });
                this._$toggleFullScreenControl.setAttribute('aria-label', this._textMap.get(TEXT_LABELS.EXIT_FULL_SCREEN_LABEL));
                this._tooltipReference.setText(this._textMap.get(TEXT_LABELS.EXIT_FULL_SCREEN_TOOLTIP));
            }
            else {
                this._$toggleFullScreenControl.classList.remove(this.styleNames.inFullScreen);
                this._$toggleFullScreenControl.innerHTML = anonymous$30({
                    styles: this.styleNames,
                    themeStyles: this.themeStyles,
                });
                this._$toggleFullScreenControl.setAttribute('aria-label', this._textMap.get(TEXT_LABELS.ENTER_FULL_SCREEN_LABEL));
                this._tooltipReference.setText(this._textMap.get(TEXT_LABELS.ENTER_FULL_SCREEN_TOOLTIP));
            }
        };
        FullScreenView.prototype.hide = function () {
            this._$rootElement.classList.add(this.styleNames.hidden);
        };
        FullScreenView.prototype.show = function () {
            this._$rootElement.classList.remove(this.styleNames.hidden);
        };
        FullScreenView.prototype.getElement = function () {
            return this._$rootElement;
        };
        FullScreenView.prototype.destroy = function () {
            this._unbindEvents();
            this._callbacks = null;
            this._tooltipReference.destroy();
            this._tooltipReference = null;
            if (this._$rootElement.parentNode) {
                this._$rootElement.parentNode.removeChild(this._$rootElement);
            }
            this._$toggleFullScreenControl = null;
            this._$rootElement = null;
            this._textMap = null;
        };
        return FullScreenView;
    }(View));
    FullScreenView.setTheme(fullScreenViewTheme);
    FullScreenView.extendStyleNames(styles$17);

    var FullScreenControl = /** @class */ (function () {
        function FullScreenControl(_a) {
            var eventEmitter = _a.eventEmitter, fullScreenManager = _a.fullScreenManager, textMap = _a.textMap, tooltipService = _a.tooltipService, theme = _a.theme;
            this._eventEmitter = eventEmitter;
            this._fullScreenManager = fullScreenManager;
            this._textMap = textMap;
            this._theme = theme;
            this._tooltipService = tooltipService;
            this._bindCallbacks();
            this._initUI();
            this._bindEvents();
            if (!this._fullScreenManager.isEnabled) {
                this.hide();
            }
            this._initInterceptor();
        }
        FullScreenControl.prototype.getElement = function () {
            return this.view.getElement();
        };
        FullScreenControl.prototype._bindCallbacks = function () {
            this._toggleFullScreen = this._toggleFullScreen.bind(this);
        };
        FullScreenControl.prototype._bindEvents = function () {
            this._unbindEvents = this._eventEmitter.bindEvents([[UI_EVENTS.FULL_SCREEN_STATE_CHANGED, this.view.setFullScreenState]], this.view);
        };
        FullScreenControl.prototype._initUI = function () {
            var config = {
                callbacks: {
                    onButtonClick: this._toggleFullScreen,
                },
                textMap: this._textMap,
                tooltipService: this._tooltipService,
                theme: this._theme,
            };
            this.view = new FullScreenControl.View(config);
        };
        FullScreenControl.prototype._initInterceptor = function () {
            var _this = this;
            var _a;
            this._interceptor = new KeyboardInterceptorCore(this.getElement(), (_a = {}, _a[KEYCODES.SPACE_BAR] = function (e) {
                    e.stopPropagation();
                    _this._eventEmitter.emit(UI_EVENTS.KEYBOARD_KEYDOWN_INTERCEPTED);
                }, _a[KEYCODES.ENTER] = function (e) {
                    e.stopPropagation();
                    _this._eventEmitter.emit(UI_EVENTS.KEYBOARD_KEYDOWN_INTERCEPTED);
                }, _a));
        };
        FullScreenControl.prototype._destroyInterceptor = function () {
            this._interceptor.destroy();
        };
        FullScreenControl.prototype._toggleFullScreen = function () {
            if (this._fullScreenManager.isInFullScreen) {
                this._fullScreenManager.exitFullScreen();
                this._eventEmitter.emit(UI_EVENTS.EXIT_FULL_SCREEN_CLICK);
            }
            else {
                this._fullScreenManager.enterFullScreen();
                this._eventEmitter.emit(UI_EVENTS.ENTER_FULL_SCREEN_CLICK);
            }
        };
        FullScreenControl.prototype.hide = function () {
            this.isHidden = true;
            this.view.hide();
        };
        FullScreenControl.prototype.show = function () {
            this.isHidden = false;
            this.view.show();
        };
        FullScreenControl.prototype.destroy = function () {
            this._destroyInterceptor();
            this._unbindEvents();
            this.view.destroy();
            this.view = null;
            this._eventEmitter = null;
            this._fullScreenManager = null;
            this._textMap = null;
            this._theme = null;
        };
        FullScreenControl.moduleName = 'fullScreenControl';
        FullScreenControl.View = FullScreenView;
        FullScreenControl.dependencies = [
            'eventEmitter',
            'fullScreenManager',
            'textMap',
            'tooltipService',
            'theme',
        ];
        return FullScreenControl;
    }());

    function anonymous$33(props
    /*``*/) {
    var out='<div class="'+(props.styles.logoWrapper)+'"></div>';return out;
    }

    function anonymous$34(props
    /*``*/) {
    var out='<img class="'+(props.styles.logoImage)+'" aria-label="'+(props.texts.label)+'"/>';return out;
    }

    function anonymous$35(props
    /*``*/) {
    var out='<input type="image" class="'+(props.styles.logoImage)+'" aria-label="'+(props.texts.label)+'" tabindex="0" />';return out;
    }

    function anonymous$36(props
    /*``*/) {
    var out='<button class="'+(props.styles.logoButton)+' '+(props.styles.controlButton)+'" aria-label="'+(props.texts.label)+'" type="button" tabindex="0"> <div class="'+(props.styles.icon)+'"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" preserveAspectRatio="xMidYMin slice" width="100%" style="padding-bottom: 127%; height: 1px; overflow: visible"> <path fill="#FFF" fill-rule="evenodd" class="'+(props.themeStyles.logoButtonSvgFill)+'" d="M2 12h10v-2h2v4H0V0h4v2H2v10zm10-8.515L7.414 8.071 6 6.657 10.657 2H9.004V0H14v5.005h-2v-1.52z"/> </svg> </div></button>';return out;
    }

    var logoViewTheme = {
        logoButtonSvgFill: {
            fill: function (data) { return data.color; },
        },
    };

    var css$18 = ".logo__controlButton___owdbK {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0;\n  cursor: pointer;\n  -webkit-transition-duration: .2s;\n          transition-duration: .2s;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  opacity: 1;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background-color: transparent;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .logo__controlButton___owdbK:hover {\n    opacity: .7; }\n  .logo__hidden___Pm6t6 {\n  visibility: hidden !important;\n  width: 0 !important;\n  min-width: 0 !important;\n  height: 0 !important;\n  min-height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  opacity: 0 !important; }\n  .logo__logoWrapper___2HWRo {\n  position: relative;\n  z-index: 3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-transition: opacity .2s;\n  transition: opacity .2s;\n  -webkit-transition-duration: .2s;\n          transition-duration: .2s;\n  opacity: 1;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .logo__logoWrapper___2HWRo:hover .logo__logoPlaceholder___14fTk {\n    opacity: .7; }\n  .logo__logoImage___1N2ry {\n  max-width: 125px;\n  max-height: 26px;\n  -webkit-transition: opacity .2s;\n  transition: opacity .2s; }\n  div[data-playable-hook='player-container'][data-playable-max-width~=\"550px\"] .logo__logoImage___1N2ry {\n    max-width: 90px;\n    max-height: 20px; }\n  div[data-playable-hook='player-container'][data-playable-max-width~=\"350px\"] .logo__logoImage___1N2ry {\n    max-width: 70px;\n    max-height: 18px; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .logo__logoImage___1N2ry {\n    max-width: 450px;\n    max-height: 36px; }\n  .logo__logoImage___1N2ry.logo__hidden___Pm6t6 {\n    display: none; }\n  .logo__logoButton___1JWF4 {\n  width: 26px;\n  min-width: 26px;\n  height: 26px;\n  min-height: 26px;\n  -webkit-transition: -webkit-transform .2s;\n  transition: -webkit-transform .2s;\n  transition: transform .2s;\n  transition: transform .2s, -webkit-transform .2s; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .logo__logoButton___1JWF4 {\n    width: 35px;\n    min-width: 35px;\n    height: 35px;\n    min-height: 35px; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .logo__logoButton___1JWF4 .logo__icon___39sTd {\n      width: 21px;\n      min-width: 21px;\n      height: 21px;\n      min-height: 21px; }\n  .logo__logoButton___1JWF4 .logo__icon___39sTd {\n    width: 14px;\n    min-width: 14px;\n    height: 14px;\n    min-height: 14px; }\n  .logo__logoButton___1JWF4:hover {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ28uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFjO0VBQWQscUJBQWM7RUFBZCxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLHFDQUE2QjtFQUE3Qiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsY0FBYztFQUNkLDhCQUE4QjtFQUM5Qix5QkFBd0I7TUFBeEIsc0JBQXdCO1VBQXhCLHdCQUF3QjtFQUN4QiwwQkFBb0I7TUFBcEIsdUJBQW9CO1VBQXBCLG9CQUFvQixFQUFFO0VBQ3RCO0lBQ0UsWUFBWSxFQUFFO0VBRWxCO0VBQ0UsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHNCQUFzQixFQUFFO0VBRTFCO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxxQkFBYztFQUFkLHFCQUFjO0VBQWQsY0FBYztFQUNkLGdDQUF3QjtFQUF4Qix3QkFBd0I7RUFDeEIsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gseUJBQXdCO01BQXhCLHNCQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsMEJBQW9CO01BQXBCLHVCQUFvQjtVQUFwQixvQkFBb0IsRUFBRTtFQUN0QjtJQUNFLFlBQVksRUFBRTtFQUVsQjtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0NBQXdCO0VBQXhCLHdCQUF3QixFQUFFO0VBQzFCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFFO0VBQ3JCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFFO0VBQ3JCO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFFO0VBQ3JCO0lBQ0UsY0FBYyxFQUFFO0VBRXBCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDBDQUEwQjtFQUExQixrQ0FBMEI7RUFBMUIsMEJBQTBCO0VBQTFCLGlEQUEwQixFQUFFO0VBQzVCO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCLEVBQUU7RUFDbkI7TUFDRSxZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLGFBQWE7TUFDYixpQkFBaUIsRUFBRTtFQUN2QjtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGlCQUFpQixFQUFFO0VBQ3JCO0lBQ0UsOEJBQXNCO1lBQXRCLHNCQUFzQixFQUFFIiwiZmlsZSI6ImxvZ28uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250cm9sQnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIC5jb250cm9sQnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAuNzsgfVxuXG4uaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7IH1cblxuLmxvZ29XcmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAzO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xuICBvcGFjaXR5OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAubG9nb1dyYXBwZXI6aG92ZXIgLmxvZ29QbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogLjc7IH1cblxuLmxvZ29JbWFnZSB7XG4gIG1heC13aWR0aDogMTI1cHg7XG4gIG1heC1oZWlnaHQ6IDI2cHg7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzOyB9XG4gIGRpdltkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXVtkYXRhLXBsYXlhYmxlLW1heC13aWR0aH49XCI1NTBweFwiXSAubG9nb0ltYWdlIHtcbiAgICBtYXgtd2lkdGg6IDkwcHg7XG4gICAgbWF4LWhlaWdodDogMjBweDsgfVxuICBkaXZbZGF0YS1wbGF5YWJsZS1ob29rPSdwbGF5ZXItY29udGFpbmVyJ11bZGF0YS1wbGF5YWJsZS1tYXgtd2lkdGh+PVwiMzUwcHhcIl0gLmxvZ29JbWFnZSB7XG4gICAgbWF4LXdpZHRoOiA3MHB4O1xuICAgIG1heC1oZWlnaHQ6IDE4cHg7IH1cbiAgZGl2W2RhdGEtcGxheWFibGUtaG9vaz0ncGxheWVyLWNvbnRhaW5lciddW2RhdGEtcGxheWFibGUtaW4tZnVsbC1zY3JlZW49J3RydWUnXSAubG9nb0ltYWdlIHtcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgIG1heC1oZWlnaHQ6IDM2cHg7IH1cbiAgLmxvZ29JbWFnZS5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cblxuLmxvZ29CdXR0b24ge1xuICB3aWR0aDogMjZweDtcbiAgbWluLXdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7IH1cbiAgZGl2W2RhdGEtcGxheWFibGUtaG9vaz0ncGxheWVyLWNvbnRhaW5lciddW2RhdGEtcGxheWFibGUtaW4tZnVsbC1zY3JlZW49J3RydWUnXSAubG9nb0J1dHRvbiB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgbWluLXdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBtaW4taGVpZ2h0OiAzNXB4OyB9XG4gICAgZGl2W2RhdGEtcGxheWFibGUtaG9vaz0ncGxheWVyLWNvbnRhaW5lciddW2RhdGEtcGxheWFibGUtaW4tZnVsbC1zY3JlZW49J3RydWUnXSAubG9nb0J1dHRvbiAuaWNvbiB7XG4gICAgICB3aWR0aDogMjFweDtcbiAgICAgIG1pbi13aWR0aDogMjFweDtcbiAgICAgIGhlaWdodDogMjFweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDIxcHg7IH1cbiAgLmxvZ29CdXR0b24gLmljb24ge1xuICAgIHdpZHRoOiAxNHB4O1xuICAgIG1pbi13aWR0aDogMTRweDtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgbWluLWhlaWdodDogMTRweDsgfVxuICAubG9nb0J1dHRvbjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyB9XG4iXX0= */";
    var styles$18 = {"controlButton":"logo__controlButton___owdbK","hidden":"logo__hidden___Pm6t6","logoWrapper":"logo__logoWrapper___2HWRo","logoPlaceholder":"logo__logoPlaceholder___14fTk","logoImage":"logo__logoImage___1N2ry","logoButton":"logo__logoButton___1JWF4","icon":"logo__icon___39sTd"};
    styleInject(css$18);

    var LogoView = /** @class */ (function (_super) {
        __extends(LogoView, _super);
        function LogoView(config) {
            var _this = this;
            var callbacks = config.callbacks, textMap = config.textMap, tooltipService = config.tooltipService, theme = config.theme;
            _this = _super.call(this, theme) || this;
            _this._callbacks = callbacks;
            _this._textMap = textMap;
            _this._$rootElement = htmlToElement(anonymous$33({
                styles: _this.styleNames,
                texts: {
                    label: _this._textMap.get(TEXT_LABELS.LOGO_LABEL),
                },
            }));
            _this._$logoImage = htmlToElement(anonymous$34({
                styles: _this.styleNames,
                texts: {
                    label: _this._textMap.get(TEXT_LABELS.LOGO_LABEL),
                },
            }));
            _this._$logoInput = htmlToElement(anonymous$35({
                styles: _this.styleNames,
                texts: {
                    label: _this._textMap.get(TEXT_LABELS.LOGO_LABEL),
                },
            }));
            _this._$logoButton = htmlToElement(anonymous$36({
                styles: _this.styleNames,
                themeStyles: _this.themeStyles,
                texts: {
                    label: _this._textMap.get(TEXT_LABELS.LOGO_LABEL),
                },
            }));
            _this._tooltipReference = tooltipService.createReference(_this._$rootElement, {
                text: _this._textMap.get(TEXT_LABELS.LOGO_TOOLTIP),
            });
            _this.setLogo(config.logo);
            _this._bindCallbacks();
            _this._bindEvents();
            _this.showAsButton();
            return _this;
        }
        LogoView.prototype.setLogo = function (url) {
            if (url) {
                this._$logoImage.setAttribute('src', url);
                this._$logoInput.setAttribute('src', url);
            }
            else {
                this._$logoImage.removeAttribute('src');
                this._$logoInput.removeAttribute('src');
            }
        };
        LogoView.prototype.showAsImage = function () {
            this._setChild(this._$logoImage);
            this._tooltipReference.disable();
        };
        LogoView.prototype.showAsButton = function () {
            this._setChild(this._$logoButton);
            this._tooltipReference.enable();
        };
        LogoView.prototype.showAsInput = function () {
            this._setChild(this._$logoInput);
            this._tooltipReference.enable();
        };
        LogoView.prototype._setChild = function (childNode) {
            this._$rootElement.firstChild &&
                this._$rootElement.removeChild(this._$rootElement.firstChild);
            this._$rootElement.appendChild(childNode);
        };
        LogoView.prototype._bindCallbacks = function () {
            this._onClick = this._onClick.bind(this);
        };
        LogoView.prototype._bindEvents = function () {
            this._$rootElement.addEventListener('click', this._onClick);
        };
        LogoView.prototype._unbindEvents = function () {
            this._$rootElement.removeEventListener('click', this._onClick);
        };
        LogoView.prototype._onClick = function () {
            this._$rootElement.focus();
            this._callbacks.onLogoClick();
        };
        LogoView.prototype.show = function () {
            this._$rootElement.classList.remove(this.styleNames.hidden);
        };
        LogoView.prototype.hide = function () {
            this._$rootElement.classList.remove(this.styleNames.hidden);
        };
        LogoView.prototype.getElement = function () {
            return this._$rootElement;
        };
        LogoView.prototype.destroy = function () {
            this._unbindEvents();
            this._callbacks = null;
            this._tooltipReference.destroy();
            this._tooltipReference = null;
            if (this._$rootElement.parentNode) {
                this._$rootElement.parentNode.removeChild(this._$rootElement);
            }
            this._$rootElement = null;
            this._$logoImage = null;
            this._$logoInput = null;
            this._$logoButton = null;
            this._tooltipReference = null;
            this._textMap = null;
        };
        return LogoView;
    }(View));
    LogoView.setTheme(logoViewTheme);
    LogoView.extendStyleNames(styles$18);

    var Logo = /** @class */ (function () {
        function Logo(_a) {
            var eventEmitter = _a.eventEmitter, textMap = _a.textMap, tooltipService = _a.tooltipService, theme = _a.theme;
            this._eventEmitter = eventEmitter;
            this._textMap = textMap;
            this._theme = theme;
            this._tooltipService = tooltipService;
            this._bindCallbacks();
            this._initUI();
            this._initInterceptor();
        }
        Logo.prototype.getElement = function () {
            return this.view.getElement();
        };
        Logo.prototype._bindCallbacks = function () {
            this._triggerCallback = this._triggerCallback.bind(this);
        };
        Logo.prototype._initUI = function () {
            var config = {
                theme: this._theme,
                callbacks: {
                    onLogoClick: this._triggerCallback,
                },
                textMap: this._textMap,
                tooltipService: this._tooltipService,
            };
            this.view = new Logo.View(config);
        };
        Logo.prototype._initInterceptor = function () {
            var _this = this;
            var _a;
            this._interceptor = new KeyboardInterceptorCore(this.getElement(), (_a = {}, _a[KEYCODES.SPACE_BAR] = function (e) {
                    e.stopPropagation();
                    _this._eventEmitter.emit(UI_EVENTS.KEYBOARD_KEYDOWN_INTERCEPTED);
                    _this._triggerCallback();
                }, _a[KEYCODES.ENTER] = function (e) {
                    e.stopPropagation();
                    _this._eventEmitter.emit(UI_EVENTS.KEYBOARD_KEYDOWN_INTERCEPTED);
                    _this._triggerCallback();
                }, _a));
        };
        Logo.prototype._destroyInterceptor = function () {
            this._interceptor.destroy();
        };
        Logo.prototype._triggerCallback = function () {
            if (this._callback) {
                this._callback();
            }
        };
        /**
         * Method for setting source of image, that would be used as logo
         * @param src - Source of logo
         * @example
         * player.setLogo('https://example.com/logo.png');
         *
         */
        Logo.prototype.setLogo = function (src) {
            this._logoSrc = src;
            this.view.setLogo(this._logoSrc);
            this._setProperDisplayState();
        };
        /**
         * Method for attaching callback for click on logo
         *
         * @param callback - Your function
         *
         * @example
         * const callback = () => {
         *   console.log('Click on title);
         * }
         * player.setLogoClickCallback(callback);
         *
         */
        Logo.prototype.setLogoClickCallback = function (callback) {
            this._callback = callback;
            this._setProperDisplayState();
        };
        Logo.prototype._setProperDisplayState = function () {
            if (this._callback) {
                this._logoSrc ? this.view.showAsInput() : this.view.showAsButton();
            }
            else {
                this._logoSrc ? this.view.showAsImage() : this.view.showAsButton();
            }
        };
        Logo.prototype.hide = function () {
            this.isHidden = true;
            this.view.hide();
        };
        Logo.prototype.show = function () {
            this.isHidden = false;
            this.view.show();
        };
        Logo.prototype.destroy = function () {
            this._destroyInterceptor();
            this.view.destroy();
            this.view = null;
            this._eventEmitter = null;
            this._textMap = null;
            this._theme = null;
        };
        Logo.moduleName = 'logo';
        Logo.View = LogoView;
        Logo.dependencies = ['eventEmitter', 'textMap', 'tooltipService', 'theme'];
        __decorate([
            playerAPI()
        ], Logo.prototype, "setLogo", null);
        __decorate([
            playerAPI()
        ], Logo.prototype, "setLogoClickCallback", null);
        return Logo;
    }());

    function anonymous$37(props
    /*``*/) {
    var out='<div class="'+(props.styles.buttonWrapper)+'"> <button class="'+(props.styles.downloadButton)+' '+(props.styles.controlButton)+'" data-playable-hook="download-button" aria-label="'+(props.texts.label)+'" type="button" tabindex="0"> <div class="'+(props.styles.icon)+'"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 14" preserveAspectRatio="xMidYMin slice" width="100%" style="padding-bottom: 127%; height: 1px; overflow: visible"> <path fill="#FFF" fill-rule="evenodd" class="'+(props.themeStyles.downloadSvgFill)+'" d="M8 5.586V0h2v5.364l2.048-2.048 1.414 1.414-4.048 4.048-.268-.268-.525.526-4.31-4.311L5.725 3.31 8 5.586zM2 12h13V8h2v6H0V8h2v4z"/> </svg> </div> </button></div>';return out;
    }

    var downloadViewTheme = {
        downloadSvgFill: {
            fill: function (data) { return data.color; },
        },
    };

    var css$19 = ".download__controlButton___fk1Ma {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0;\n  cursor: pointer;\n  -webkit-transition-duration: .2s;\n          transition-duration: .2s;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  opacity: 1;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background-color: transparent;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .download__controlButton___fk1Ma:hover {\n    opacity: .7; }\n  .download__hidden___36lL8 {\n  visibility: hidden !important;\n  width: 0 !important;\n  min-width: 0 !important;\n  height: 0 !important;\n  min-height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  opacity: 0 !important; }\n  .download__buttonWrapper___244Vz {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .download__downloadButton___3J_rA {\n  width: 26px;\n  min-width: 26px;\n  height: 26px;\n  min-height: 26px;\n  -webkit-transition: -webkit-transform .2s;\n  transition: -webkit-transform .2s;\n  transition: transform .2s;\n  transition: transform .2s, -webkit-transform .2s; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .download__downloadButton___3J_rA {\n    width: 35px;\n    min-width: 35px;\n    height: 35px;\n    min-height: 21px; }\n  div[data-playable-hook='player-container'][data-playable-in-full-screen='true'] .download__downloadButton___3J_rA .download__icon___2Zjb8 {\n      width: 25px;\n      height: 21px; }\n  .download__downloadButton___3J_rA .download__icon___2Zjb8 {\n    width: 17px;\n    min-width: 17px;\n    height: 14px;\n    min-height: 14px; }\n  .download__downloadButton___3J_rA:hover {\n    -webkit-transform: scale(1.18);\n            transform: scale(1.18); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvd25sb2FkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBYztFQUFkLHFCQUFjO0VBQWQsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixxQ0FBNkI7RUFBN0IsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIseUJBQXdCO01BQXhCLHNCQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsMEJBQW9CO01BQXBCLHVCQUFvQjtVQUFwQixvQkFBb0IsRUFBRTtFQUN0QjtJQUNFLFlBQVksRUFBRTtFQUVsQjtFQUNFLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixzQkFBc0IsRUFBRTtFQUUxQjtFQUNFLG1CQUFtQjtFQUNuQixxQkFBYztFQUFkLHFCQUFjO0VBQWQsY0FBYztFQUNkLDBCQUFvQjtNQUFwQix1QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLHlCQUF3QjtNQUF4QixzQkFBd0I7VUFBeEIsd0JBQXdCLEVBQUU7RUFFNUI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsMENBQTBCO0VBQTFCLGtDQUEwQjtFQUExQiwwQkFBMEI7RUFBMUIsaURBQTBCLEVBQUU7RUFDNUI7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQkFBaUIsRUFBRTtFQUNuQjtNQUNFLFlBQVk7TUFDWixhQUFhLEVBQUU7RUFDbkI7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQkFBaUIsRUFBRTtFQUNyQjtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUIsRUFBRSIsImZpbGUiOiJkb3dubG9hZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRyb2xCdXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLmNvbnRyb2xCdXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IC43OyB9XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDsgfVxuXG4uYnV0dG9uV3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cblxuLmRvd25sb2FkQnV0dG9uIHtcbiAgd2lkdGg6IDI2cHg7XG4gIG1pbi13aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBtaW4taGVpZ2h0OiAyNnB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzOyB9XG4gIGRpdltkYXRhLXBsYXlhYmxlLWhvb2s9J3BsYXllci1jb250YWluZXInXVtkYXRhLXBsYXlhYmxlLWluLWZ1bGwtc2NyZWVuPSd0cnVlJ10gLmRvd25sb2FkQnV0dG9uIHtcbiAgICB3aWR0aDogMzVweDtcbiAgICBtaW4td2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1pbi1oZWlnaHQ6IDIxcHg7IH1cbiAgICBkaXZbZGF0YS1wbGF5YWJsZS1ob29rPSdwbGF5ZXItY29udGFpbmVyJ11bZGF0YS1wbGF5YWJsZS1pbi1mdWxsLXNjcmVlbj0ndHJ1ZSddIC5kb3dubG9hZEJ1dHRvbiAuaWNvbiB7XG4gICAgICB3aWR0aDogMjVweDtcbiAgICAgIGhlaWdodDogMjFweDsgfVxuICAuZG93bmxvYWRCdXR0b24gLmljb24ge1xuICAgIHdpZHRoOiAxN3B4O1xuICAgIG1pbi13aWR0aDogMTdweDtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgbWluLWhlaWdodDogMTRweDsgfVxuICAuZG93bmxvYWRCdXR0b246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xOCk7IH1cbiJdfQ== */";
    var styles$19 = {"controlButton":"download__controlButton___fk1Ma","hidden":"download__hidden___36lL8","buttonWrapper":"download__buttonWrapper___244Vz","downloadButton":"download__downloadButton___3J_rA","icon":"download__icon___2Zjb8"};
    styleInject(css$19);

    var DownloadView = /** @class */ (function (_super) {
        __extends(DownloadView, _super);
        function DownloadView(config) {
            var _this = this;
            var callbacks = config.callbacks, textMap = config.textMap, tooltipService = config.tooltipService, theme = config.theme;
            _this = _super.call(this, theme) || this;
            _this._callbacks = callbacks;
            _this._textMap = textMap;
            _this._$rootElement = htmlToElement(anonymous$37({
                styles: _this.styleNames,
                themeStyles: _this.themeStyles,
                texts: {
                    label: _this._textMap.get(TEXT_LABELS.DOWNLOAD_BUTTON_LABEL),
                },
            }));
            _this._$downloadButton = getElementByHook(_this._$rootElement, 'download-button');
            _this._tooltipReference = tooltipService.createReference(_this._$downloadButton, {
                text: _this._textMap.get(TEXT_LABELS.DOWNLOAD_BUTTON_TOOLTIP),
            });
            _this._bindEvents();
            return _this;
        }
        DownloadView.prototype._bindEvents = function () {
            this._onButtonClick = this._onButtonClick.bind(this);
            this._$downloadButton.addEventListener('click', this._onButtonClick);
        };
        DownloadView.prototype._unbindEvents = function () {
            this._$downloadButton.removeEventListener('click', this._onButtonClick);
        };
        DownloadView.prototype._onButtonClick = function () {
            this._$rootElement.focus();
            this._callbacks.onButtonClick();
        };
        DownloadView.prototype.hide = function () {
            this._$rootElement.classList.add(this.styleNames.hidden);
        };
        DownloadView.prototype.show = function () {
            this._$rootElement.classList.remove(this.styleNames.hidden);
        };
        DownloadView.prototype.getElement = function () {
            return this._$rootElement;
        };
        DownloadView.prototype.destroy = function () {
            this._unbindEvents();
            this._callbacks = null;
            this._tooltipReference.destroy();
            this._tooltipReference = null;
            if (this._$rootElement.parentNode) {
                this._$rootElement.parentNode.removeChild(this._$rootElement);
            }
            this._$downloadButton = null;
            this._$rootElement = null;
            this._textMap = null;
        };
        return DownloadView;
    }(View));
    DownloadView.setTheme(downloadViewTheme);
    DownloadView.extendStyleNames(styles$19);

    var DownloadButton = /** @class */ (function () {
        function DownloadButton(_a) {
            var eventEmitter = _a.eventEmitter, textMap = _a.textMap, tooltipService = _a.tooltipService, theme = _a.theme;
            this._eventEmitter = eventEmitter;
            this._textMap = textMap;
            this._theme = theme;
            this._tooltipService = tooltipService;
            this._bindCallbacks();
            this._initUI();
            this._initInterceptor();
        }
        DownloadButton.prototype.getElement = function () {
            return this.view.getElement();
        };
        DownloadButton.prototype._bindCallbacks = function () {
            this._triggerCallback = this._triggerCallback.bind(this);
        };
        DownloadButton.prototype._initUI = function () {
            var config = {
                callbacks: {
                    onButtonClick: this._triggerCallback,
                },
                textMap: this._textMap,
                tooltipService: this._tooltipService,
                theme: this._theme,
            };
            this.view = new DownloadButton.View(config);
        };
        DownloadButton.prototype._initInterceptor = function () {
            var _this = this;
            var _a;
            this._interceptor = new KeyboardInterceptorCore(this.getElement(), (_a = {}, _a[KEYCODES.SPACE_BAR] = function (e) {
                    e.stopPropagation();
                    _this._eventEmitter.emit(UI_EVENTS.KEYBOARD_KEYDOWN_INTERCEPTED);
                    _this._triggerCallback();
                }, _a[KEYCODES.ENTER] = function (e) {
                    e.stopPropagation();
                    _this._eventEmitter.emit(UI_EVENTS.KEYBOARD_KEYDOWN_INTERCEPTED);
                    _this._triggerCallback();
                }, _a));
        };
        DownloadButton.prototype._destroyInterceptor = function () {
            this._interceptor.destroy();
        };
        DownloadButton.prototype._triggerCallback = function () {
            if (this._callback) {
                this._callback();
            }
        };
        DownloadButton.prototype.setDownloadClickCallback = function (callback) {
            this._callback = callback;
        };
        DownloadButton.prototype.hide = function () {
            this.isHidden = true;
            this.view.hide();
        };
        DownloadButton.prototype.show = function () {
            this.isHidden = false;
            this.view.show();
        };
        DownloadButton.prototype.destroy = function () {
            this._destroyInterceptor();
            this.view.destroy();
            this.view = null;
            this._eventEmitter = null;
            this._textMap = null;
            this._theme = null;
        };
        DownloadButton.moduleName = 'downloadButton';
        DownloadButton.View = DownloadView;
        DownloadButton.dependencies = ['eventEmitter', 'textMap', 'tooltipService', 'theme'];
        __decorate([
            playerAPI()
        ], DownloadButton.prototype, "setDownloadClickCallback", null);
        return DownloadButton;
    }());

    function normalizeFramesQuality(framesCount, quality, neededFrame) {
        var framesInSprite = quality.framesInSprite.vert * quality.framesInSprite.horz;
        var frameNumberInSprite = neededFrame % framesInSprite;
        var spriteNumber = Math.floor(neededFrame / framesInSprite);
        var horzPositionInSprite = frameNumberInSprite % quality.framesInSprite.horz;
        var vertPositionInSprite = Math.floor(frameNumberInSprite / quality.framesInSprite.vert);
        var url = quality.spriteUrlMask.replace('%d', spriteNumber.toString());
        return {
            frameSize: quality.frameSize,
            framesInSprite: (spriteNumber + 1) * framesInSprite <= framesCount
                ? quality.framesInSprite
                : {
                    horz: quality.framesInSprite.horz,
                    vert: Math.ceil((framesCount % framesInSprite) / quality.framesInSprite.vert),
                },
            framePositionInSprite: {
                vert: vertPositionInSprite,
                horz: horzPositionInSprite,
            },
            spriteUrl: url,
        };
    }
    function getAt(data, second, duration) {
        var framesCount = data.framesCount;
        var neededFrame = Math.floor((second * framesCount) / duration);
        return data.qualities.map(function (quality) {
            return normalizeFramesQuality(framesCount, quality, neededFrame);
        });
    }

    var PreviewService = /** @class */ (function () {
        function PreviewService(_a) {
            var engine = _a.engine;
            this._engine = engine;
        }
        PreviewService.prototype.setFramesMap = function (map) {
            this._framesMap = map;
        };
        PreviewService.prototype.getAt = function (second) {
            if (!this._framesMap) {
                return;
            }
            var duration = this._engine.getDuration();
            if (!duration) {
                return;
            }
            return getAt(this._framesMap, second, duration);
        };
        PreviewService.prototype.destroy = function () {
            this._framesMap = null;
            this._engine = null;
        };
        PreviewService.moduleName = 'previewService';
        PreviewService.dependencies = ['engine'];
        __decorate([
            playerAPI()
        ], PreviewService.prototype, "setFramesMap", null);
        return PreviewService;
    }());

    function anonymous$38(props
    /*``*/) {
    var out='<div class="'+(props.styles.container)+'"> <div class="'+(props.styles.highQualityFrame)+'" data-playable-hook="thumb-high-quality" > </div> <div class="'+(props.styles.lowQualityFrame)+'" data-playable-hook="thumb-low-quality"> </div> <div class="'+(props.styles.thumbText)+'" data-playable-hook="thumb-text-block"> </div></div>';return out;
    }

    var css$20 = ".preview-thumbnail__container___1TmLX {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n  width: 180px;\n  height: 90px;\n  border: 2px solid rgba(0, 0, 0, 0.5);\n  border-radius: 2px;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .preview-thumbnail__container___1TmLX.preview-thumbnail__empty___LitJh {\n    width: initial;\n    height: initial;\n    border: none;\n    border-radius: 0; }\n  .preview-thumbnail__highQualityFrame___sCDil,\n.preview-thumbnail__lowQualityFrame___fzXUI {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  bottom: 2px;\n  left: 2px;\n  width: 180px;\n  height: 90px; }\n  .preview-thumbnail__highQualityFrame___sCDil {\n  z-index: 2; }\n  .preview-thumbnail__lowQualityFrame___fzXUI {\n  z-index: 1; }\n  .preview-thumbnail__empty___LitJh .preview-thumbnail__thumbText___VFKJP {\n  background: none; }\n  .preview-thumbnail__empty___LitJh .preview-thumbnail__highQualityFrame___sCDil,\n.preview-thumbnail__empty___LitJh .preview-thumbnail__lowQualityFrame___fzXUI {\n  width: 0;\n  height: 0; }\n  .preview-thumbnail__thumbText___VFKJP {\n  font-size: 11px;\n  line-height: 12px;\n  position: relative;\n  z-index: 3;\n  padding: 4px 5px;\n  white-space: nowrap;\n  color: white;\n  background: rgba(0, 0, 0, 0.8); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXZpZXctdGh1bWJuYWlsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBYztFQUFkLHFCQUFjO0VBQWQsY0FBYztFQUNkLDZCQUErQjtFQUEvQiwrQkFBK0I7TUFBL0IsbUNBQStCO1VBQS9CLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLDBCQUFvQjtNQUFwQix1QkFBb0I7VUFBcEIsb0JBQW9CLEVBQUU7RUFDdEI7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQkFBaUIsRUFBRTtFQUV2Qjs7RUFFRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYixhQUFhLEVBQUU7RUFFakI7RUFDRSxXQUFXLEVBQUU7RUFFZjtFQUNFLFdBQVcsRUFBRTtFQUVmO0VBQ0UsaUJBQWlCLEVBQUU7RUFFckI7O0VBRUUsU0FBUztFQUNULFVBQVUsRUFBRTtFQUVkO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLCtCQUErQixFQUFFIiwiZmlsZSI6InByZXZpZXctdGh1bWJuYWlsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB3aWR0aDogMTgwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuY29udGFpbmVyLmVtcHR5IHtcbiAgICB3aWR0aDogaW5pdGlhbDtcbiAgICBoZWlnaHQ6IGluaXRpYWw7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cblxuLmhpZ2hRdWFsaXR5RnJhbWUsXG4ubG93UXVhbGl0eUZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDJweDtcbiAgcmlnaHQ6IDJweDtcbiAgYm90dG9tOiAycHg7XG4gIGxlZnQ6IDJweDtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDkwcHg7IH1cblxuLmhpZ2hRdWFsaXR5RnJhbWUge1xuICB6LWluZGV4OiAyOyB9XG5cbi5sb3dRdWFsaXR5RnJhbWUge1xuICB6LWluZGV4OiAxOyB9XG5cbi5lbXB0eSAudGh1bWJUZXh0IHtcbiAgYmFja2dyb3VuZDogbm9uZTsgfVxuXG4uZW1wdHkgLmhpZ2hRdWFsaXR5RnJhbWUsXG4uZW1wdHkgLmxvd1F1YWxpdHlGcmFtZSB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7IH1cblxuLnRodW1iVGV4dCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMztcbiAgcGFkZGluZzogNHB4IDVweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7IH1cbiJdfQ== */";
    var styles$20 = {"container":"preview-thumbnail__container___1TmLX","empty":"preview-thumbnail__empty___LitJh","highQualityFrame":"preview-thumbnail__highQualityFrame___sCDil","lowQualityFrame":"preview-thumbnail__lowQualityFrame___fzXUI","thumbText":"preview-thumbnail__thumbText___VFKJP"};
    styleInject(css$20);

    var PreviewThumbnailView = /** @class */ (function (_super) {
        __extends(PreviewThumbnailView, _super);
        function PreviewThumbnailView() {
            var _this = _super.call(this) || this;
            _this._initDOM();
            return _this;
        }
        PreviewThumbnailView.prototype._initDOM = function () {
            this._$rootElement = htmlToElement(anonymous$38({
                styles: this.styleNames,
            }));
            this._$timeText = getElementByHook(this._$rootElement, 'thumb-text-block');
            this._$lowQualityThumb = getElementByHook(this._$rootElement, 'thumb-low-quality');
            this._$highQualityThumb = getElementByHook(this._$rootElement, 'thumb-high-quality');
        };
        PreviewThumbnailView.prototype.getElement = function () {
            return this._$rootElement;
        };
        PreviewThumbnailView.prototype.showAsEmpty = function () {
            this._$rootElement.classList.add(this.styleNames.empty);
        };
        PreviewThumbnailView.prototype.showWithPreview = function () {
            this._$rootElement.classList.remove(this.styleNames.empty);
        };
        PreviewThumbnailView.prototype.clearLowQualityPreview = function () {
            this._$lowQualityThumb.style.background = '';
        };
        PreviewThumbnailView.prototype.clearHighQualityPreview = function () {
            this._$highQualityThumb.style.background = '';
        };
        PreviewThumbnailView.prototype.setLowQualityPreview = function (qualityData) {
            this._applyQualityToThumbElement(this._$lowQualityThumb, qualityData);
        };
        PreviewThumbnailView.prototype.setHighQualityPreview = function (qualityData) {
            this._applyQualityToThumbElement(this._$highQualityThumb, qualityData);
        };
        PreviewThumbnailView.prototype._applyQualityToThumbElement = function (element, quality) {
            var viewWidth = element.offsetWidth;
            var viewHeight = element.offsetHeight;
            var backgroudWidth = viewWidth * quality.framesInSprite.horz;
            var backgroundHeight = viewHeight * quality.framesInSprite.vert;
            element.style.background = "url('" + quality.spriteUrl + "') -" + viewWidth *
                quality.framePositionInSprite.horz + "px -" + viewHeight *
                quality.framePositionInSprite
                    .vert + "px / " + backgroudWidth + "px " + backgroundHeight + "px";
        };
        PreviewThumbnailView.prototype.setTime = function (time) {
            this._$timeText.innerText = time;
        };
        PreviewThumbnailView.prototype.destroy = function () {
            if (this._$rootElement.parentNode) {
                this._$rootElement.parentNode.removeChild(this._$rootElement);
            }
            this._$timeText = null;
            this._$lowQualityThumb = null;
            this._$highQualityThumb = null;
            this._$rootElement = null;
        };
        return PreviewThumbnailView;
    }(View));
    PreviewThumbnailView.extendStyleNames(styles$20);

    var PreviewThumbnail = /** @class */ (function () {
        function PreviewThumbnail(_a) {
            var previewService = _a.previewService;
            this._previewService = previewService;
            this._initUI();
        }
        PreviewThumbnail.prototype._initUI = function () {
            this.view = new PreviewThumbnail.View();
        };
        PreviewThumbnail.prototype.getElement = function () {
            return this.view.getElement();
        };
        PreviewThumbnail.prototype.showAt = function (second) {
            var config = this._previewService.getAt(second);
            if (!config) {
                this.view.showAsEmpty();
                return;
            }
            this.view.showWithPreview();
            if (this._currentFrames) {
                if (this._currentFrames[0].spriteUrl !== config[0].spriteUrl) {
                    this.view.clearLowQualityPreview();
                }
                if (this._currentFrames[1].spriteUrl !== config[1].spriteUrl) {
                    this.view.clearHighQualityPreview();
                }
            }
            this.view.setLowQualityPreview(config[0]);
            this.view.setHighQualityPreview(config[1]);
            this._currentFrames = config;
        };
        PreviewThumbnail.prototype.setTime = function (time) {
            this.view.setTime(time);
        };
        PreviewThumbnail.prototype.destroy = function () {
            this._previewService = null;
            this.view.destroy();
            this.view = null;
        };
        PreviewThumbnail.moduleName = 'previewThumbnail';
        PreviewThumbnail.View = PreviewThumbnailView;
        PreviewThumbnail.dependencies = ['previewService'];
        return PreviewThumbnail;
    }());

    function anonymous$39(props
    /*``*/) {
    var out='<div class="'+(props.styles.container)+'"> <div class="'+(props.styles.frame)+'" data-playable-hook="preview-full-size-frame" > </div></div>';return out;
    }

    var css$21 = ".preview-full-size__controlButton___2sWjc {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0;\n  cursor: pointer;\n  -webkit-transition-duration: .2s;\n          transition-duration: .2s;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  opacity: 1;\n  border: 0;\n  border-radius: 0;\n  outline: none;\n  background-color: transparent;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .preview-full-size__controlButton___2sWjc:hover {\n    opacity: .7; }\n  .preview-full-size__hidden___1ZRC_ {\n  visibility: hidden !important;\n  width: 0 !important;\n  min-width: 0 !important;\n  height: 0 !important;\n  min-height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  opacity: 0 !important; }\n  .preview-full-size__container___M_Ygb {\n  position: absolute;\n  z-index: 50;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n  pointer-events: none;\n  background-color: black;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .preview-full-size__frame___3AEDD {\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: .5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXZpZXctZnVsbC1zaXplLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBYztFQUFkLHFCQUFjO0VBQWQsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixxQ0FBNkI7RUFBN0IsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIseUJBQXdCO01BQXhCLHNCQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsMEJBQW9CO01BQXBCLHVCQUFvQjtVQUFwQixvQkFBb0IsRUFBRTtFQUN0QjtJQUNFLFlBQVksRUFBRTtFQUVsQjtFQUNFLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixzQkFBc0IsRUFBRTtFQUUxQjtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osT0FBTztFQUNQLFNBQVM7RUFDVCxVQUFVO0VBQ1YsUUFBUTtFQUNSLHFCQUFjO0VBQWQscUJBQWM7RUFBZCxjQUFjO0VBQ2QsNkJBQStCO0VBQS9CLCtCQUErQjtNQUEvQixtQ0FBK0I7VUFBL0IsK0JBQStCO0VBQy9CLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsMEJBQW9CO01BQXBCLHVCQUFvQjtVQUFwQixvQkFBb0IsRUFBRTtFQUV4QjtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsT0FBTztFQUNQLFNBQVM7RUFDVCxVQUFVO0VBQ1YsUUFBUTtFQUNSLFlBQVksRUFBRSIsImZpbGUiOiJwcmV2aWV3LWZ1bGwtc2l6ZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRyb2xCdXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLmNvbnRyb2xCdXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IC43OyB9XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDsgfVxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA1MDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4uZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogLjU7IH1cbiJdfQ== */";
    var styles$21 = {"controlButton":"preview-full-size__controlButton___2sWjc","hidden":"preview-full-size__hidden___1ZRC_","container":"preview-full-size__container___M_Ygb","frame":"preview-full-size__frame___3AEDD"};
    styleInject(css$21);

    var PreviewFullSizeView = /** @class */ (function (_super) {
        __extends(PreviewFullSizeView, _super);
        function PreviewFullSizeView() {
            var _this = _super.call(this) || this;
            _this._initDOM();
            return _this;
        }
        PreviewFullSizeView.prototype._initDOM = function () {
            this._$rootElement = htmlToElement(anonymous$39({
                styles: this.styleNames,
            }));
            this._$frame = getElementByHook(this._$rootElement, 'preview-full-size-frame');
        };
        PreviewFullSizeView.prototype.getElement = function () {
            return this._$rootElement;
        };
        PreviewFullSizeView.prototype.setPreview = function (data) {
            this._applyFrame(data);
        };
        PreviewFullSizeView.prototype._applyFrame = function (frameData) {
            var viewWidth = this._$frame.offsetWidth;
            var viewHeight = this._$frame.offsetHeight;
            var backgroudWidth = viewWidth * frameData.framesInSprite.horz;
            var backgroundHeight = viewHeight * frameData.framesInSprite.vert;
            this._$frame.style.background = "url('" + frameData.spriteUrl + "') -" + viewWidth * frameData.framePositionInSprite.horz + "px -" + viewHeight *
                frameData.framePositionInSprite
                    .vert + "px / " + backgroudWidth + "px " + backgroundHeight + "px";
        };
        PreviewFullSizeView.prototype.clear = function () {
            this._$frame.style.background = '';
        };
        PreviewFullSizeView.prototype.show = function () {
            this._$rootElement.classList.remove(this.styleNames.hidden);
        };
        PreviewFullSizeView.prototype.hide = function () {
            this._$rootElement.classList.add(this.styleNames.hidden);
        };
        PreviewFullSizeView.prototype.destroy = function () {
            if (this._$rootElement.parentNode) {
                this._$rootElement.parentNode.removeChild(this._$rootElement);
            }
            this._$frame = null;
            this._$rootElement = null;
        };
        return PreviewFullSizeView;
    }(View));
    PreviewFullSizeView.extendStyleNames(styles$21);

    var PreviewFullsize = /** @class */ (function () {
        function PreviewFullsize(_a) {
            var previewService = _a.previewService, rootContainer = _a.rootContainer;
            this._previewService = previewService;
            this._initUI();
            this.hide();
            rootContainer.appendComponentElement(this.getElement());
        }
        PreviewFullsize.prototype._initUI = function () {
            this.view = new PreviewFullsize.View();
        };
        PreviewFullsize.prototype.getElement = function () {
            return this.view.getElement();
        };
        PreviewFullsize.prototype.showAt = function (second) {
            this.view.show();
            var framesData = this._previewService.getAt(second);
            if (!framesData) {
                this.view.clear();
                return;
            }
            var frameData = framesData.pop();
            if (this._currentFrame) {
                if (this._currentFrame.spriteUrl !== frameData.spriteUrl) {
                    this.view.clear();
                }
            }
            this.view.setPreview(frameData);
            this._currentFrame = frameData;
        };
        PreviewFullsize.prototype.hide = function () {
            this.view.hide();
        };
        PreviewFullsize.prototype.destroy = function () {
            this._previewService = null;
            this.view.destroy();
            this.view = null;
        };
        PreviewFullsize.moduleName = 'previewFullSize';
        PreviewFullsize.View = PreviewFullSizeView;
        PreviewFullsize.dependencies = ['previewService', 'rootContainer'];
        return PreviewFullsize;
    }());

    var asClass$1 = DependencyContainer.asClass;
    var modules = {
        RootContainer: RootContainer,
        EventEmitter: EventEmitterModule,
        Engine: Engine,
        ThemeService: ThemeService,
        TextMap: TextMap,
        FullScreenManager: FullScreenManager,
        LiveStateEngine: LiveStateEngine,
        KeyboardControls: KeyboardControl,
        DebugPanel: DebugPanel,
        Screen: Screen,
        InteractionIndicator: InteractionIndicator,
        Overlay: Overlay,
        Loader: Loader,
        MainUIBlock: MainUIBlock,
        TopBlock: TopBlock,
        LiveIndicator: LiveIndicator,
        Title: TitleControl,
        BottomBlock: BottomBlock,
        ProgressControl: ProgressControl,
        PlayControl: PlayControl,
        TimeControl: TimeControl,
        VolumeControl: VolumeControl,
        FullScreenControl: FullScreenControl,
        Logo: Logo,
        DownloadButton: DownloadButton,
        PreviewService: PreviewService,
        PreviewThumbnail: PreviewThumbnail,
        PreviewFullSize: PreviewFullsize,
        TooltipService: TooltipService,
    };
    var DIModules = Object.keys(modules).reduce(function (processedModules, key) {
        var module = modules[key];
        if (!module.moduleName) {
            throw new Error("No moduleName in module: " + key);
        }
        processedModules[module.moduleName] = asClass$1(module).scoped();
        return processedModules;
    }, {});

    /**
     * `true` if we are running inside a web browser, `false` otherwise (e.g. running inside Node.js).
     */
    var isBrowser$1 = typeof window !== 'undefined';
    /**
     * This is a map which lists native support of formats and APIs.
     * It gets filled during runtime with the relevant values to the current environment.
     */
    var NativeEnvironmentSupport = {
        MSE: false,
        HLS: false,
        DASH: false,
        MP4: false,
        WEBM: false,
        OGG: false,
        MOV: false,
        MKV: false,
    };
    /* ignore coverage */
    function detectEnvironment() {
        if (!isBrowser$1) {
            return; // Not in a browser
        }
        NativeEnvironmentSupport.MSE =
            'WebKitMediaSource' in window || 'MediaSource' in window;
        var video = document.createElement('video');
        if (typeof video.canPlayType !== 'function') {
            return; // env doesn't support HTMLMediaElement (e.g PhantomJS)
        }
        if (video.canPlayType('application/x-mpegURL') ||
            video.canPlayType('application/vnd.apple.mpegURL')) {
            NativeEnvironmentSupport.HLS = true;
        }
        if (video.canPlayType('application/dash+xml')) {
            NativeEnvironmentSupport.DASH = true;
        }
        if (video.canPlayType('video/mp4')) {
            NativeEnvironmentSupport.MP4 = true;
        }
        if (video.canPlayType('video/webm')) {
            NativeEnvironmentSupport.WEBM = true;
        }
        if (video.canPlayType('video/ogg')) {
            NativeEnvironmentSupport.OGG = true;
        }
        if (video.canPlayType('video/quicktime')) {
            NativeEnvironmentSupport.MOV = true;
        }
        if (video.canPlayType('video/x-matroska')) {
            NativeEnvironmentSupport.MKV = true;
        }
    }
    detectEnvironment(); // Run once

    var NATIVE_ERROR_CODES = {
        ABORTED: 1,
        NETWORK: 2,
        DECODE: 3,
        SRC_NOT_SUPPORTED: 4,
    };
    function getNativeAdapterCreator(streamType, deliveryPriority) {
        var NativeAdapter = /** @class */ (function () {
            function NativeAdapter(eventEmitter) {
                this.mediaStreams = null;
                this.eventEmitter = eventEmitter;
                this.currentLevel = 0;
                this._bindCallbacks();
            }
            NativeAdapter.isSupported = function () {
                return NativeEnvironmentSupport[streamType];
            };
            Object.defineProperty(NativeAdapter.prototype, "currentUrl", {
                get: function () {
                    return this.mediaStreams[this.currentLevel].url;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(NativeAdapter.prototype, "syncWithLiveTime", {
                //@ts-ignore
                get: function () {
                    // TODO: implement syncWithLiveTime for `native`
                    return undefined;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(NativeAdapter.prototype, "isDynamicContent", {
                get: function () {
                    return !isFinite(this.videoElement.duration);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(NativeAdapter.prototype, "isDynamicContentEnded", {
                get: function () {
                    // TODO: implement isDynamicContentEnded
                    return false;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(NativeAdapter.prototype, "isSyncWithLive", {
                get: function () {
                    // TODO: implement isSyncWithLive for `native`
                    return false;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(NativeAdapter.prototype, "isSeekAvailable", {
                get: function () {
                    return true;
                    //Need to find better solution
                    /*
                    if (this.isDynamicContent) {
                      return false;
                    }
              
                    return Boolean(this.videoElement.seekable.length);
                    */
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(NativeAdapter.prototype, "mediaStreamDeliveryPriority", {
                get: function () {
                    return deliveryPriority;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(NativeAdapter.prototype, "mediaStreamType", {
                get: function () {
                    return streamType;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(NativeAdapter.prototype, "debugInfo", {
                get: function () {
                    if (this.videoElement) {
                        var _a = this.videoElement, buffered = _a.buffered, currentTime = _a.currentTime;
                        var overallBufferLength = geOverallBufferLength(buffered);
                        var nearestBufferSegInfo = getNearestBufferSegmentInfo(buffered, currentTime);
                        return __assign({}, this.mediaStreams[0], { deliveryPriority: this.mediaStreamDeliveryPriority, overallBufferLength: overallBufferLength,
                            nearestBufferSegInfo: nearestBufferSegInfo });
                    }
                    return {};
                },
                enumerable: true,
                configurable: true
            });
            NativeAdapter.prototype._bindCallbacks = function () {
                this._broadcastError = this._broadcastError.bind(this);
            };
            NativeAdapter.prototype.canPlay = function (mediaType) {
                return mediaType === streamType;
            };
            NativeAdapter.prototype.setMediaStreams = function (mediaStreams) {
                this.mediaStreams = mediaStreams;
            };
            NativeAdapter.prototype._logError = function (error, errorEvent) {
                this.eventEmitter.emit(VIDEO_EVENTS.ERROR, {
                    errorType: error,
                    streamType: streamType,
                    streamProvider: 'native',
                    errorInstance: errorEvent,
                });
            };
            NativeAdapter.prototype._broadcastError = function () {
                var error = this.videoElement.error;
                if (!error) {
                    this._logError(Errors.UNKNOWN, null);
                    return;
                }
                switch (error.code) {
                    case NATIVE_ERROR_CODES.ABORTED:
                        //No need for broadcasting
                        break;
                    case NATIVE_ERROR_CODES.NETWORK:
                        this._logError(Errors.CONTENT_LOAD, error);
                        break;
                    case NATIVE_ERROR_CODES.DECODE:
                        this._logError(Errors.MEDIA, error);
                        break;
                    case NATIVE_ERROR_CODES.SRC_NOT_SUPPORTED:
                        /*
                          Our url checks would not allow not supported formats, so only case would be
                           when video tag couldn't retriev any info from endpoit
                        */
                        this._logError(Errors.CONTENT_LOAD, error);
                        break;
                    default:
                        this._logError(Errors.UNKNOWN, error);
                        break;
                }
            };
            NativeAdapter.prototype.attach = function (videoElement) {
                this.videoElement = videoElement;
                this.videoElement.addEventListener('error', this._broadcastError);
                this.videoElement.src = this.mediaStreams[this.currentLevel].url;
            };
            NativeAdapter.prototype.detach = function () {
                this.videoElement.removeEventListener('error', this._broadcastError);
                this.videoElement.removeAttribute('src');
                this.videoElement = null;
            };
            return NativeAdapter;
        }());
        return NativeAdapter;
    }

    var defaultPlaybackAdapters = [
        getNativeAdapterCreator(exports.MEDIA_STREAM_TYPES.HLS, exports.MEDIA_STREAM_DELIVERY_PRIORITY.NATIVE_ADAPTIVE),
        getNativeAdapterCreator(exports.MEDIA_STREAM_TYPES.DASH, exports.MEDIA_STREAM_DELIVERY_PRIORITY.NATIVE_ADAPTIVE),
        getNativeAdapterCreator(exports.MEDIA_STREAM_TYPES.MP4, exports.MEDIA_STREAM_DELIVERY_PRIORITY.NATIVE_PROGRESSIVE),
        getNativeAdapterCreator(exports.MEDIA_STREAM_TYPES.WEBM, exports.MEDIA_STREAM_DELIVERY_PRIORITY.NATIVE_PROGRESSIVE),
        getNativeAdapterCreator(exports.MEDIA_STREAM_TYPES.OGG, exports.MEDIA_STREAM_DELIVERY_PRIORITY.NATIVE_PROGRESSIVE),
        getNativeAdapterCreator(exports.MEDIA_STREAM_TYPES.MOV, exports.MEDIA_STREAM_DELIVERY_PRIORITY.NATIVE_PROGRESSIVE),
        getNativeAdapterCreator(exports.MEDIA_STREAM_TYPES.MKV, exports.MEDIA_STREAM_DELIVERY_PRIORITY.NATIVE_PROGRESSIVE),
    ];

    var additionalModules = {};
    var playbackAdapters = defaultPlaybackAdapters.slice();
    var container = DependencyContainer.createContainer();
    container.register(DIModules);
    var defaultModulesNames = Object.keys(DIModules);
    function registerModule(id, module) {
        additionalModules[id] = module;
    }
    function registerPlaybackAdapter(adapter) {
        playbackAdapters.push(adapter);
    }
    function clearAdditionalModules() {
        additionalModules = {};
    }
    function clearPlaybackAdapters() {
        playbackAdapters = defaultPlaybackAdapters.slice();
    }
    function create(params, themeConfig) {
        if (params === void 0) { params = {}; }
        var scope = container.createScope();
        var additionalModuleNames = Object.keys(additionalModules);
        if (additionalModuleNames.length) {
            additionalModuleNames.forEach(function (moduleName) {
                return scope.registerClass(moduleName, additionalModules[moduleName], {
                    lifetime: DependencyContainer.Lifetime.SCOPED,
                });
            });
        }
        scope.registerValue('availablePlaybackAdapters', playbackAdapters);
        return new Player(params, scope, defaultModulesNames, additionalModuleNames, themeConfig);
    }

    var playerFactoryMethods = /*#__PURE__*/Object.freeze({
        container: container,
        registerModule: registerModule,
        registerPlaybackAdapter: registerPlaybackAdapter,
        clearAdditionalModules: clearAdditionalModules,
        clearPlaybackAdapters: clearPlaybackAdapters,
        create: create
    });

    var index$1 = __assign({}, playerFactoryMethods, { UI_EVENTS: UI_EVENTS,
        VIDEO_EVENTS: VIDEO_EVENTS,
        TEXT_LABELS: TEXT_LABELS,
        MEDIA_STREAM_TYPES: exports.MEDIA_STREAM_TYPES,
        MEDIA_STREAM_DELIVERY_PRIORITY: exports.MEDIA_STREAM_DELIVERY_PRIORITY,
        ENGINE_STATES: EngineState$1,
        LIVE_STATES: LiveState$1,
        VIDEO_VIEW_MODES: exports.VIDEO_VIEW_MODES,
        Tooltip: Tooltip,
        playerAPIDecorator: playerAPI,
        DefaultModules: modules });

    exports.ERRORS = Errors;
    exports.UI_EVENTS = UI_EVENTS;
    exports.VIDEO_EVENTS = VIDEO_EVENTS;
    exports.TEXT_LABELS = TEXT_LABELS;
    exports.ENGINE_STATES = EngineState$1;
    exports.LIVE_STATES = LiveState$1;
    exports.Tooltip = Tooltip;
    exports.playerAPIDecorator = playerAPI;
    exports.DefaultModules = modules;
    exports.default = index$1;
    exports.container = container;
    exports.registerModule = registerModule;
    exports.registerPlaybackAdapter = registerPlaybackAdapter;
    exports.clearAdditionalModules = clearAdditionalModules;
    exports.clearPlaybackAdapters = clearPlaybackAdapters;
    exports.create = create;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=playable.bundle.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 29), __webpack_require__(/*! ./../../../node-libs-browser/node_modules/timers-browserify/main.js */ 492).setImmediate))

/***/ }),

/***/ 269:
/*!***************************************************************************!*\
  !*** ../node_modules/@wix/wix-bi-logger-client/dist/bi-logger-factory.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var assert = __webpack_require__(/*! ./assert */ 270);
var BiLogger = __webpack_require__(/*! ./bi-logger */ 271);

var BiLoggerFactory = function () {
  function BiLoggerFactory() {
    _classCallCheck(this, BiLoggerFactory);

    this._publishers = [];
    this._validators = [];
    this._defaults = {};
    this._events = {};
  }

  _createClass(BiLoggerFactory, [{
    key: 'addPublisher',
    value: function addPublisher(publisher) {
      assert.defined(publisher, 'Publisher must be provided');
      assert.ok(typeof publisher === 'function', 'Expected a publisher function');
      this._publishers.push(publisher);
      return this;
    }
  }, {
    key: 'addValidator',
    value: function addValidator(validator) {
      assert.defined(validator, 'Validator must be provided');
      assert.ok((typeof validator === 'undefined' ? 'undefined' : _typeof(validator)) === 'object' && validator, 'Expected a validator object');
      assert.ok(validator.execute && validator.match, 'Provided validator does not match the interface');
      this._validators.push(validator);
      return this;
    }
  }, {
    key: 'setDefaults',
    value: function setDefaults(defaults) {
      assert.defined(defaults, 'Defaults must be provided');
      assert.object(defaults, 'Defaults must be an object');
      this._defaults = defaults;
      return this;
    }
  }, {
    key: 'updateDefaults',
    value: function updateDefaults(defaults) {
      assert.defined(defaults, 'Defaults must be provided');
      assert.object(defaults, 'Defaults must be an object');
      Object.assign(this._defaults, defaults);
      return this;
    }
  }, {
    key: 'setEvents',
    value: function setEvents(events) {
      assert.defined(events, 'Events must be provided');
      assert.object(events, 'Events must be an object');
      this._events = events;
      return this;
    }
  }, {
    key: 'setDefaultValueTimeout',
    value: function setDefaultValueTimeout(defaultValueTimeout) {
      assert.defined(defaultValueTimeout, 'Default Value Timeout must be provided');
      this._defaultValueTimeout = defaultValueTimeout;
      return this;
    }
  }, {
    key: 'setDefaultContinueOnFail',
    value: function setDefaultContinueOnFail(defaultContinueOnFail) {
      assert.defined(defaultContinueOnFail, 'Default Continue On Fail must be provided');
      this._defaultContinueOnFail = defaultContinueOnFail;
      return this;
    }
  }, {
    key: 'setPublisherFailHandler',
    value: function setPublisherFailHandler(onPublisherFailHandler) {
      assert.defined(onPublisherFailHandler, 'Publisher Fail Handler must be provided');
      this._onPublisherFailHandler = onPublisherFailHandler;
      return this;
    }
  }, {
    key: 'logger',
    value: function logger(context) {
      return new BiLogger({
        publishers: this._publishers,
        validators: this._validators,
        defaults: this._defaults,
        events: this._events,
        defaultValueTimeout: this._defaultValueTimeout,
        defaultContinueOnFail: this._defaultContinueOnFail,
        onPublisherFailHandler: this._onPublisherFailHandler
      }, context);
    }
  }]);

  return BiLoggerFactory;
}();

module.exports = BiLoggerFactory;
//# sourceMappingURL=bi-logger-factory.js.map

/***/ }),

/***/ 270:
/*!****************************************************************!*\
  !*** ../node_modules/@wix/wix-bi-logger-client/dist/assert.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AssertionError = function (_Error) {
  _inherits(AssertionError, _Error);

  function AssertionError(message) {
    _classCallCheck(this, AssertionError);

    var _this = _possibleConstructorReturn(this, (AssertionError.__proto__ || Object.getPrototypeOf(AssertionError)).call(this, message));

    _this.name = _this.constructor.name;
    return _this;
  }

  return AssertionError;
}(Error);

function assertDefined(target, message) {
  if (target === undefined) {
    throw new AssertionError(message);
  }
}

function assertObject(target, message) {
  if (target !== undefined && ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object' || Array.isArray(target) || target === null)) {
    throw new AssertionError(message);
  }
}

function assertOk(target, message) {
  if (!target) {
    throw new AssertionError(message);
  }
}

module.exports.defined = assertDefined;
module.exports.object = assertObject;
module.exports.ok = assertOk;
module.exports.AssertionError = AssertionError;
//# sourceMappingURL=assert.js.map

/***/ }),

/***/ 271:
/*!*******************************************************************!*\
  !*** ../node_modules/@wix/wix-bi-logger-client/dist/bi-logger.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var assert = __webpack_require__(/*! ./assert */ 270);

var _require = __webpack_require__(/*! ./utils/collections */ 504),
    mapValues = _require.mapValues;

var promise = __webpack_require__(/*! ./utils/promise */ 505);

var _require2 = __webpack_require__(/*! ./utils/log */ 506),
    log = _require2.log;

var BiLogger = function () {
  //TODO: validate args
  function BiLogger(options, context) {
    _classCallCheck(this, BiLogger);

    this._publishers = options.publishers;
    this._validators = options.validators || [];
    this._defaults = options.defaults;
    this._events = options.events || {};
    this._context = context;
    this._defaultValueTimeout = options.defaultValueTimeout || 5000;
    this._defaultContinueOnFail = options.defaultContinueOnFail || false;
    this._onPublisherFailHandler = options.onPublisherFailHandler || BiLogger._defaultPublisherFailHandler;
  }

  _createClass(BiLogger, [{
    key: 'log',
    value: function log(eventOrKey, eventOrUndefined) {
      var _this = this;

      assert.defined(eventOrKey, 'Event object or event key must be provided.');
      var event = this._eventOrExtractFromEvents(eventOrKey, eventOrUndefined);

      return this._getDefaults().then(function (defaults) {
        var fullEvent = Object.assign({}, defaults, event);

        var validatorsResult = _this._validators.length === 0 ? true : _this._validators.some(function (validator) {
          return validator.match(fullEvent) && (validator.execute(fullEvent) || true);
        });

        if (!validatorsResult) {
          throw new Error('No validator accepted the event. Source: ' + fullEvent.src + ' Evid: ' + (fullEvent.evid || fullEvent.evtId));
        }

        return Promise.all(_this._publishers.map(function (publisher) {
          var cloned = Object.assign({}, fullEvent);

          return Promise.resolve().then(function () {
            return publisher(cloned, _this._context);
          }).catch(function (error) {
            return _this._onPublisherFailHandler(error, { publisherName: publisher.name });
          });
        })).then(function () {
          return undefined;
        });
      });
    }
  }, {
    key: '_eventOrExtractFromEvents',
    value: function _eventOrExtractFromEvents(eventOrKey, eventOrUndefined) {
      if (typeof eventOrKey !== 'string') {
        return eventOrKey;
      }
      var event = this._events[eventOrKey];
      if (!event) {
        throw new assert.AssertionError('Event with key \'' + eventOrKey + '\' not found in event map.');
      }

      if (eventOrUndefined) {
        return Object.assign({}, event, eventOrUndefined);
      } else {
        return event;
      }
    }
  }, {
    key: '_handleDefaultsError',
    value: function _handleDefaultsError(err) {
      if (this._defaultContinueOnFail) {
        log.error(err);
        return null;
      }
      return Promise.reject(err);
    }
  }, {
    key: '_getDefaults',
    value: function _getDefaults() {
      var _this2 = this;

      if (!this._defaults) {
        return Promise.resolve({});
      }

      var promises = mapValues(this._defaults, function (value, key) {
        if (typeof value === 'function') {
          try {
            value = value();
          } catch (err) {
            return _this2._handleDefaultsError(err);
          }
        }
        if (value && typeof value.then !== 'function') {
          return value;
        }
        return promise.timedPromise(value, {
          message: 'Cannot get default value \'' + key + ' for BI Event\'',
          timeout: _this2._defaultValueTimeout
        }).catch(function (err) {
          return _this2._handleDefaultsError(err);
        });
      });

      return promise.allAsObject(promises);
    }
  }], [{
    key: '_defaultPublisherFailHandler',
    value: function _defaultPublisherFailHandler(error, _ref) {
      var publisherName = _ref.publisherName;

      return publisherName; // do nothing
    }
  }]);

  return BiLogger;
}();

module.exports = BiLogger;
//# sourceMappingURL=bi-logger.js.map

/***/ }),

/***/ 272:
/*!************************************************************!*\
  !*** ../node_modules/@wix/web-bi-logger/dist/src/utils.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildUrl = buildUrl;
exports.guid = guid;

var _performance = __webpack_require__(/*! ./lib/performance */ 508);

var _env = __webpack_require__(/*! ./lib/env */ 188);

var DEFAULT_ENDPOINT = '';

var cacheKillerCounter = 0;

function addParam(url, key, value) {
  var separator = url.indexOf('?') === -1 ? '?' : '&';
  return '' + url + separator + encodeURIComponent(key) + '=' + encodeURIComponent(value);
}

function buildUrl(_ref, params) {
  var host = _ref.host,
      _ref$endpoint = _ref.endpoint,
      endpoint = _ref$endpoint === undefined ? DEFAULT_ENDPOINT : _ref$endpoint;
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  host = host || (0, _env.getHost)();
  endpoint = context.endpoint || endpoint;

  params._ = '' + new Date().getTime() + cacheKillerCounter++;
  params.ms = Math.round((0, _performance.now)());

  var prefix = '//' + host + '/' + endpoint;
  return Object.keys(params).reduce(function (url, key) {
    return addParam(url, key, params[key]);
  }, prefix);
}

function guid() {
  /*eslint-disable */
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
  /*eslint-enable */
}

/***/ }),

/***/ 273:
/*!********************************************************************!*\
  !*** ../node_modules/@wix/web-bi-logger/dist/src/lib/navigator.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listen = listen;
exports.sendBeacon = sendBeacon;

var _env = __webpack_require__(/*! ./env */ 188);

function hook(obj, fnName, hook) {
  if (!obj || !obj[fnName]) {
    return;
  }

  var original = obj[fnName];
  obj[fnName] = function () {
    hook.apply(null, arguments);
    return original.apply(obj, arguments);
  };
}

function onLoad(cb) {
  setTimeout(function () {
    return (0, _env.provideBrowsingContext)(function (window) {
      return cb(window.location.href);
    });
  });
}

function onPushState(cb) {
  (0, _env.provideBrowsingContext)(function (_ref) {
    var history = _ref.history;
    return ['pushState', 'replaceState'].forEach(function (fnName) {
      hook(history, fnName, function (_, __, url) {
        return cb(url);
      });
    });
  });
}

function onPopState(cb) {
  (0, _env.provideBrowsingContext)(function (window) {
    return window.addEventListener('popstate', function () {
      return cb(window.location.href);
    });
  });
}

function listen(cb) {
  (0, _env.provideBrowsingContext)(function (window) {
    var fromUrl = window.document.referrer;

    [onLoad, onPushState, onPopState].forEach(function (event) {
      return event(function (toUrl) {
        cb(fromUrl, toUrl);
        fromUrl = toUrl;
      });
    });
  });
}

function sendBeacon(url) {
  if (typeof navigator === 'undefined' || !navigator || !navigator.sendBeacon) {
    return false;
  }

  return navigator.sendBeacon(url);
}

/***/ }),

/***/ 274:
/*!***************************************************!*\
  !*** ./components/VideoPlayer/VideoPlayer.st.css ***!
  \***************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })
var $stylesheet = __webpack_require__(/*! ../node_modules/@stylable/runtime/cjs/css-runtime-stylesheet.js */ 2);
var $renderer = __webpack_require__(/*! ../node_modules/@stylable/runtime/cjs/css-runtime-renderer.js */ 3).$;
exports.default = $stylesheet.create(
  "root",
  "VideoPlayer94256039",
  {"root":"VideoPlayer94256039--root","playButton":"VideoPlayer94256039--playButton","backgroundColor":"color_10","font":"font_8","fontColor":"color_2","borderColor":"color_2","borderSize":"0","boxShadow":"none","textSizeScale":"1px","playButtonSize":"50px","playButtonMobileSize":"30px"},
  "",
  7,
  /*! ./components/VideoPlayer/VideoPlayer.st.css */ 274
);

exports.default.$skin = {"params":{"backgroundColor":"COLOR_ALPHA","font":"FONT","fontColor":"COLOR","borderColor":"BORDER_COLOR_ALPHA","borderSize":"BORDER_SIZE","boxShadow":"BOX_SHADOW","textSizeScale":"TEXT_SIZE","playButtonSize":"BORDER_SIZE","playButtonMobileSize":"BORDER_SIZE"},"paramsDefaults":{"backgroundColor":"color_10","font":"font_8","fontColor":"color_2","borderColor":"color_2","borderSize":"0","boxShadow":"none","textSizeScale":"1px","playButtonSize":"50px","playButtonMobileSize":"30px"}};
exports.default.$skin.$render = function render_css($id, $params, $functions) {
  return "\n" + $id + ".Video2005797498--root{position: relative}\n" + $id + " .Video2005797498--playerContainer{position: relative;height: 100%;width: 100%;background-color: #000}\n" + $id + " .Video2005797498--playerContainer iframe{height: 100%;width: 100%;visibility: visible}\n" + $id + " .Video2005797498--cover{position: absolute;top: 0;left: 0;height: 100%;width: 100%;background: #000 50% 50% no-repeat;background-size: cover;cursor: pointer}\n" + $id + " .Video2005797498--overlay{display: flex;height: 100%;justify-content: center;flex-direction: column;align-items: center;background-color: rgba(0,0,0,0.35)}\n" + $id + " .Video2005797498--title{margin: 0 15px 15px;text-align: center}\n" + $id + ".VideoPlayer94256039--root{box-shadow: " + $params["boxShadow"] + ";border: " + $params["borderSize"] + " solid " + $params["borderColor"] + ";margin-top: calc(-1 * " + $params["borderSize"] + ");margin-left: calc(-1 * " + $params["borderSize"] + ")}\n" + $id + ".VideoPlayer94256039--root .Video2005797498--title{font: " + $params["font"] + ";color: " + $params["fontColor"] + ";margin: 0 0 15px;padding: 0 .2em;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;overflow: hidden;max-height: 2.8em}\n" + $id + ".VideoPlayer94256039--root[data-videoplayer94256039-ismobileview] .Video2005797498--title{font-size: calc(18 * " + $params["textSizeScale"] + ");margin: 0 0 10px}\n" + $id + ".VideoPlayer94256039--root .Video2005797498--overlay{background-color: " + $params["backgroundColor"] + ";padding: 0 10%;transition: opacity .2s ease}\n" + $id + ".VideoPlayer94256039--root .VideoPlayer94256039--playButton{display: block;width: " + $params["playButtonSize"] + ";height: " + $params["playButtonSize"] + ";padding: 0;border: 0;background: transparent;box-sizing: border-box;cursor: pointer;transition: opacity .2s ease}\n" + $id + ".VideoPlayer94256039--root .VideoPlayer94256039--playButton:hover{opacity: .8}\n" + $id + ".VideoPlayer94256039--root[data-videoplayer94256039-ismobileview] .VideoPlayer94256039--playButton{width: " + $params["playButtonMobileSize"] + ";height: " + $params["playButtonMobileSize"] + "}\n" + $id + " .VideoPlayer94256039--playButton circle{stroke: " + $params["fontColor"] + "}\n" + $id + " .VideoPlayer94256039--playButton path{fill: " + $params["fontColor"] + "}\n";
};

/***/ }),

/***/ 29:
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


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

/***/ 313:
/*!*****************************************!*\
  !*** ./components/VideoPlayer/index.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VideoPlayer = __webpack_require__(/*! ./VideoPlayer */ 486);

var _VideoPlayerSt = __webpack_require__(/*! ./VideoPlayer.st.css */ 274);

var _VideoPlayerSt2 = _interopRequireDefault(_VideoPlayerSt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  componentType: 'wixui.VideoPlayer',
  component: _VideoPlayer.VideoPlayer,
  santaComponent: _VideoPlayer.santaVideoPlayer,
  skin: _VideoPlayerSt2.default.$skin
};

/***/ }),

/***/ 35:
/*!**************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/video/Video.st.css ***!
  \**************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })
var $stylesheet = __webpack_require__(/*! ../node_modules/@stylable/runtime/cjs/css-runtime-stylesheet.js */ 2);
var $renderer = __webpack_require__(/*! ../node_modules/@stylable/runtime/cjs/css-runtime-renderer.js */ 3).$;
exports.default = $stylesheet.create(
  "root",
  "Video2005797498",
  {"root":"Video2005797498--root","playerContainer":"Video2005797498--playerContainer","cover":"Video2005797498--cover","overlay":"Video2005797498--overlay","title":"Video2005797498--title"},
  "",
  1,
  /*! ../node_modules/wix-ui-core/dist/src/components/video/Video.st.css */ 35
);



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

/***/ 486:
/*!***********************************************!*\
  !*** ./components/VideoPlayer/VideoPlayer.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.santaVideoPlayer = exports.VideoPlayer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(/*! lodash */ 7);

var _lodash2 = _interopRequireDefault(_lodash);

var _createReactClass = __webpack_require__(/*! create-react-class */ 40);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _santaComponents = __webpack_require__(/*! santa-components */ 26);

var _video = __webpack_require__(/*! wix-ui-core/video */ 487);

var _playbackBiModule = __webpack_require__(/*! @wix/playback-bi-module */ 500);

var _events = __webpack_require__(/*! ./bi/events */ 513);

var _videoPlayerBehaviors = __webpack_require__(/*! ./behaviors/videoPlayerBehaviors */ 514);

var _VideoPlayerSt = __webpack_require__(/*! ./VideoPlayer.st.css */ 274);

var _VideoPlayerSt2 = _interopRequireDefault(_VideoPlayerSt);

var _playButtonIcon = __webpack_require__(/*! ./playButtonIcon */ 515);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var skinBasedComp = _santaComponents.mixins.skinBasedComp,
    runTimeCompData = _santaComponents.mixins.runTimeCompData,
    compStateMixin = _santaComponents.mixins.compStateMixin;
var imageClientApi = _santaComponents.utils.imageClientApi;
var playbackTypes = _santaComponents.constants.MEDIA.playbackTypes;
var ACTION_TYPES = _santaComponents.constants.SITE.ACTION_TYPES;


var getComponentSkins = function getComponentSkins() {
  return {
    'wixui.skins.VideoPlayer': _VideoPlayerSt2.default.$skin
  };
};

function getPublicState(state) {
  var isPlaying = _lodash2.default.get(state, 'isPlaying');
  var currentTime = _lodash2.default.get(state, 'currentTime');
  var duration = _lodash2.default.get(state, 'duration');
  var volume = _lodash2.default.get(state, 'volume');
  var isMuted = _lodash2.default.get(state, 'isMuted');

  return {
    isPlaying: isPlaying,
    currentTime: currentTime,
    duration: duration,
    volume: volume,
    isMuted: isMuted
  };
}

var VIDEO_TYPE_FILE = 'file';
var MAX_LOGO_WIDTH = 126;
var LOGO_TRANSFORM_TYPE = { transformType: 'fit' };
var FITTING_SCALE_TO_FILL = imageClientApi.fittingTypes.SCALE_TO_FILL;

var listenToEventOnce = function listenToEventOnce(eventEmitter, eventName) {
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _lodash2.default.noop;

  var handler = function handler() {
    eventEmitter.off(eventName, handler);
    callback();
  };

  eventEmitter.on(eventName, handler);
};

var VideoPlayer = exports.VideoPlayer = function VideoPlayer(santaProps) {
  var styleState = {
    isMobileView: santaProps.isMobileView,
    isDesktopView: !santaProps.isMobileView,
    isTitleExists: Boolean(santaProps.showTitle && santaProps.title)
  };

  var config = _lodash2.default.merge({}, santaProps.config, {
    playable: {
      playButton: _react2.default.createElement(
        'button',
        { type: 'button', className: _VideoPlayerSt2.default.playButton },
        _playButtonIcon.playButtonIcon
      ),
      preload: 'none',
      modules: _defineProperty({}, _playbackBiModule.PlaybackBIModule.moduleName, _playbackBiModule.PlaybackBIModule)
    }
  });

  var props = _lodash2.default.assign({}, santaProps, {
    config: config,
    fillAllSpace: true
  });

  return _react2.default.createElement(_video.Video, _extends({
    key: 'video' + santaProps.controls + santaProps.showTitle
  }, props, (0, _VideoPlayerSt2.default)('root', styleState, santaProps)));
};

VideoPlayer.propTypes = {
  controls: _propTypes.bool,
  config: _propTypes.object,
  showTitle: _propTypes.bool,
  title: _propTypes.string,
  isMobileView: _propTypes.bool
};

VideoPlayer.displayName = 'VideoPlayer';

var santaVideoPlayer = exports.santaVideoPlayer = (0, _createReactClass2.default)({
  displayName: 'VideoPlayerSanta',

  mixins: [skinBasedComp(getComponentSkins()), runTimeCompData, compStateMixin(getPublicState)],

  propTypes: {
    styleId: _santaComponents.santaTypesDefinitions.Component.styleId,
    style: _santaComponents.santaTypesDefinitions.Component.style,
    isMobileView: _santaComponents.santaTypesDefinitions.isMobileView,
    id: _santaComponents.santaTypesDefinitions.Component.id,
    compProp: _santaComponents.santaTypesDefinitions.Component.compProp,
    compData: _santaComponents.santaTypesDefinitions.Component.compData,
    reportBI: _santaComponents.santaTypesDefinitions.reportBI,
    isPlayingAllowed: _santaComponents.santaTypesDefinitions.RenderFlags.isPlayingAllowed,
    staticMediaUrl: _santaComponents.santaTypesDefinitions.ServiceTopology.staticMediaUrl,
    staticVideoUrl: _santaComponents.santaTypesDefinitions.ServiceTopology.staticVideoUrl,
    registerPlayer: _santaComponents.santaTypesDefinitions.Media.registerPlayer,
    unregisterPlayer: _santaComponents.santaTypesDefinitions.Media.unregisterPlayer,
    updatePlayerState: _santaComponents.santaTypesDefinitions.Media.updatePlayerState
  },

  statics: {
    behaviors: _videoPlayerBehaviors.videoPlayerBehaviors,
    getComponentSkins: getComponentSkins
  },

  getInitialState: function getInitialState() {
    var duration = _lodash2.default.get(this.props, 'compData.videoRef.duration');
    var volume = _lodash2.default.get(this.props, 'compProp.autoplay') ? 0 : 100;
    var isMuted = volume === 0;

    return {
      isReady: false,
      isPlaying: false,
      currentTime: 0,
      duration: duration,
      volume: volume,
      isMuted: isMuted
    };
  },
  componentDidMount: function componentDidMount() {
    this.props.registerPlayer(this.props.id);
  },
  componentWillUnmount: function componentWillUnmount() {
    this.stop();
    this.props.unregisterPlayer(this.props.id);
  },
  UNSAFE_componentWillReceiveProps: function UNSAFE_componentWillReceiveProps(nextProps) {
    // eslint-disable-line
    if (!nextProps.isPlayingAllowed && this.props.isPlayingAllowed) {
      this.player.stop();
    }
  },
  play: function play() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _lodash2.default.noop;

    this.player.play().then(function () {
      return callback();
    });
  },
  pause: function pause() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _lodash2.default.noop;

    this.player.pause().then(function () {
      return callback();
    });
  },
  stop: function stop() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _lodash2.default.noop;

    this.player.stop().then(function () {
      return callback();
    });
  },
  togglePlay: function togglePlay() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _lodash2.default.noop;

    this.player.togglePlay().then(function () {
      return callback();
    });
  },
  mute: function mute() {
    var _this = this;

    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _lodash2.default.noop;

    return this.player.mute().then(function () {
      _this.setState({
        isMuted: true
      });
      callback();
    });
  },
  unmute: function unmute() {
    var _this2 = this;

    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _lodash2.default.noop;

    return this.player.unMute().then(function () {
      _this2.setState({
        isMuted: false
      });
      callback();
    });
  },
  seek: function seek(time) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _lodash2.default.noop;

    var timePoint = Number(time);

    if (_lodash2.default.isFinite(timePoint)) {
      this.player.seekTo(timePoint).then(function () {
        return callback();
      });
    }
  },
  setVolume: function setVolume(volume) {
    this.player.setVolume(Number(volume));

    this.setState({
      volume: Number(volume)
    });
  },
  updatePlaybackState: function updatePlaybackState(playbackState) {
    var isPlaying = playbackState === playbackTypes.PLAYING;

    this.setState({ isPlaying: isPlaying });
    this.props.updatePlayerState(this.props.id, { playbackState: playbackState });
  },
  handleFirstPlayRequested: function handleFirstPlayRequested() {
    this.props.reportBI(_events.biEvents.PLAY_REQUESTED, {
      videoId: this.getVideoId(),
      videoSource: this.getVideoType(),
      playSource: this.getPlaySource()
    });
  },
  handleFirstPlay: function handleFirstPlay() {
    this.props.reportBI(_events.biEvents.PLAY_START, {
      videoId: this.getVideoId(),
      videoSource: this.getVideoType(),
      playSource: this.getPlaySource()
    });
  },
  handleFirstEnded: function handleFirstEnded() {
    this.props.reportBI(_events.biEvents.PLAY_DONE, {
      videoId: this.getVideoId(),
      videoSource: this.getVideoType()
    });
  },
  handleInit: function handleInit(playerAPI) {
    if (this.getVideoType() === VIDEO_TYPE_FILE) {
      playerAPI.setWixBIVideoID(this.getVideoId());
      playerAPI.setWixBIProduct('editor_player');

      listenToEventOnce(playerAPI, 'engine-state/play-requested', this.handleFirstPlayRequested);
    }
  },
  handleReady: function handleReady() {
    var volume = this.player.getVolume();
    var isMuted = this.player.isMuted();

    this.setState({
      isReady: true,
      volume: volume,
      isMuted: isMuted
    });

    this.handleAction(ACTION_TYPES.ITEM_READY);
  },
  handleDuration: function handleDuration(duration) {
    this.setState({
      duration: duration
    });
  },
  handlePlay: function handlePlay() {
    this.updatePlaybackState(playbackTypes.PLAYING);
    this.handleAction(ACTION_TYPES.ON_PLAY);
  },
  handlePause: function handlePause() {
    this.updatePlaybackState(playbackTypes.PAUSED);
    this.handleAction(ACTION_TYPES.ON_PAUSE);
  },
  handleProgress: function handleProgress(currentTime) {
    var volume = this.player.getVolume();
    var isMuted = this.player.isMuted();

    this.setState({
      currentTime: currentTime,
      volume: volume,
      isMuted: isMuted
    });

    this.handleAction(ACTION_TYPES.ON_PROGRESS, currentTime);
  },
  handleEnded: function handleEnded() {
    this.updatePlaybackState(playbackTypes.PLAY_ENDED);
    this.handleAction(ACTION_TYPES.ON_ENDED);
  },
  handleError: function handleError(err) {
    this.props.reportBI(_events.biEvents.ERROR, {
      errorMessage: err && err.name && err.message ? err.name + ' : ' + err.message : err,
      videoId: this.getVideoId(),
      videoSource: this.getVideoType(),
      playSource: this.getPlaySource()
    });
  },
  handleMouseIn: function handleMouseIn(e) {
    this.handleAction(ACTION_TYPES.MOUSE_IN, e);
  },
  handleMouseOut: function handleMouseOut(e) {
    this.handleAction(ACTION_TYPES.MOUSE_OUT, e);
  },
  getPlaySource: function getPlaySource() {
    return this.props.compProp.autoplay ? 'autoplay' : 'click';
  },
  getVideoType: function getVideoType() {
    return _lodash2.default.get(this.props, 'compData.videoType') || VIDEO_TYPE_FILE;
  },
  getVideoId: function getVideoId() {
    return _lodash2.default.get(this.props, 'id');
  },
  getPosterUrl: function getPosterUrl() {
    var style = this.props.style;

    var posterImageRef = _lodash2.default.get(this.props, 'compData.videoRef.posterImageRef');

    if (!posterImageRef) {
      return;
    }

    var width = posterImageRef.width,
        height = posterImageRef.height,
        uri = posterImageRef.uri;

    var src = { id: uri, width: width, height: height };
    var target = { width: style.width, height: style.height };

    var previewData = imageClientApi.getData(FITTING_SCALE_TO_FILL, src, target);

    return this.props.staticMediaUrl + '/' + previewData.uri;
  },
  getVideoUrl: function getVideoUrl() {
    var videoUrl = _lodash2.default.get(this.props, 'compData.videoUrl');

    if (videoUrl) {
      return videoUrl;
    }

    var qualities = _lodash2.default.get(this.props, 'compData.videoRef.qualities');
    if (!qualities) {
      return;
    }

    var _$maxBy = _lodash2.default.maxBy(qualities, 'width'),
        url = _$maxBy.url;

    return '' + this.props.staticVideoUrl + url;
  },
  getLogoUrl: function getLogoUrl() {
    if (!_lodash2.default.isObject(this.props.compData.logoRef)) {
      return;
    }

    var _props$compData$logoR = this.props.compData.logoRef,
        width = _props$compData$logoR.width,
        height = _props$compData$logoR.height,
        uri = _props$compData$logoR.uri;

    var src = {
      id: uri,
      width: width,
      height: height
    };
    var target = {
      width: MAX_LOGO_WIDTH,
      height: Math.ceil(MAX_LOGO_WIDTH / width * height)
    };
    var previewData = imageClientApi.getData(FITTING_SCALE_TO_FILL, src, target, LOGO_TRANSFORM_TYPE);

    return this.props.staticMediaUrl + '/' + previewData.uri;
  },
  getSkinProperties: function getSkinProperties() {
    var _this3 = this;

    var _props = this.props,
        id = _props.id,
        styleId = _props.styleId,
        style = _props.style,
        isPlayingAllowed = _props.isPlayingAllowed,
        isMobileView = _props.isMobileView;
    var _props$compProp = this.props.compProp,
        loop = _props$compProp.loop,
        showVideoTitle = _props$compProp.showVideoTitle,
        controlsVisibility = _props$compProp.controlsVisibility,
        autoplay = _props$compProp.autoplay;
    var videoTitle = this.props.compData.videoTitle;

    var controls = controlsVisibility === 'hover';
    var playing = isPlayingAllowed && autoplay;

    var props = {
      className: styleId,
      videoId: id,
      style: style,
      isMobileView: isMobileView,
      src: this.getVideoUrl(),
      loop: loop,
      playing: playing,
      muted: autoplay,
      controls: controls,
      showTitle: showVideoTitle,
      config: {
        playable: {
          title: videoTitle,
          logoUrl: this.getLogoUrl(),
          poster: this.getPosterUrl()
        }
      },
      playerRef: function playerRef(player) {
        _this3.player = player;
      },
      onMouseIn: this.handleMouseIn,
      onMouseOut: this.handleMouseOut,
      onInit: this.handleInit,
      onReady: this.handleReady,
      onDuration: this.handleDuration,
      onProgress: this.handleProgress,
      onPlay: this.handlePlay,
      onPause: this.handlePause,
      onEnded: this.handleEnded,
      onFirstPlay: this.handleFirstPlay,
      onFirstEnded: this.handleFirstEnded,
      onError: this.handleError
    };

    return {
      '': {
        children: [_santaComponents.utils.createReactElement(VideoPlayer, props)]
      }
    };
  }
});

/***/ }),

/***/ 487:
/*!********************************************!*\
  !*** ../node_modules/wix-ui-core/video.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/src/components/video */ 488);


/***/ }),

/***/ 488:
/*!**********************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/video/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Video_1 = __webpack_require__(/*! ./Video */ 489);
exports.Video = Video_1.Video;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 489:
/*!**********************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/video/Video.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 11);
var React = __webpack_require__(/*! react */ 0);
var players_1 = __webpack_require__(/*! ./players */ 490);
var Video_st_css_1 = __webpack_require__(/*! ./Video.st.css */ 35);
var noop = function () { return null; };
var getPlayerName = function (url) {
    for (var key in players_1.playerVerifiers) {
        var name_1 = key;
        if (players_1.playerVerifiers[name_1](url)) {
            return name_1;
        }
    }
    return null;
};
var Video = /** @class */ (function (_super) {
    tslib_1.__extends(Video, _super);
    function Video(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            playerName: null,
        };
        _this.state.playerName = getPlayerName(_this.props.src);
        return _this;
    }
    Video.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.src !== nextProps.src) {
            this.setState({
                playerName: getPlayerName(nextProps.src)
            });
        }
    };
    Video.prototype.render = function () {
        var playerName = this.state.playerName;
        if (!playerName) {
            return null;
        }
        var Player = players_1.playerComponents[playerName];
        var playerProps = tslib_1.__assign({}, this.props, this.props.config[playerName]);
        var _a = this.props, id = _a.id, fillAllSpace = _a.fillAllSpace, playerRef = _a.playerRef;
        var _b = this.props, width = _b.width, height = _b.height;
        if (fillAllSpace) {
            width = '100%';
            height = '100%';
        }
        return (React.createElement("div", tslib_1.__assign({ id: id, style: { width: width, height: height } }, Video_st_css_1.default('root', {}, this.props)),
            React.createElement(Player, tslib_1.__assign({}, playerProps, { ref: playerRef }))));
    };
    Video.displayName = 'Video';
    Video.defaultProps = {
        controls: true,
        loop: false,
        muted: false,
        showTitle: true,
        fillAllSpace: false,
        volume: 100,
        onInit: noop,
        onReady: noop,
        onDuration: noop,
        onPlay: noop,
        onPause: noop,
        onEnded: noop,
        onProgress: noop,
        onError: noop,
        onFirstPlay: noop,
        onFirstEnded: noop,
        config: {}
    };
    return Video;
}(React.Component));
exports.Video = Video;
//# sourceMappingURL=Video.js.map

/***/ }),

/***/ 490:
/*!******************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/video/players/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Playable_1 = __webpack_require__(/*! ./Playable */ 491);
var YouTube_1 = __webpack_require__(/*! ./YouTube */ 493);
var Facebook_1 = __webpack_require__(/*! ./Facebook */ 496);
var Vimeo_1 = __webpack_require__(/*! ./Vimeo */ 497);
var Twitch_1 = __webpack_require__(/*! ./Twitch */ 498);
var DailyMotion_1 = __webpack_require__(/*! ./DailyMotion */ 499);
// @TODO enum ?
exports.playerVerifiers = {
    dailymotion: DailyMotion_1.verifier,
    facebook: Facebook_1.verifier,
    playable: Playable_1.verifier,
    twitch: Twitch_1.verifier,
    vimeo: Vimeo_1.verifier,
    youtube: YouTube_1.verifier,
};
exports.playerComponents = {
    dailymotion: DailyMotion_1.Player,
    facebook: Facebook_1.Player,
    playable: Playable_1.Player,
    twitch: Twitch_1.Player,
    vimeo: Vimeo_1.Player,
    youtube: YouTube_1.Player,
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 491:
/*!*********************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/video/players/Playable.js ***!
  \*********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 11);
var React = __webpack_require__(/*! react */ 0);
var eventemitter3_1 = __webpack_require__(/*! eventemitter3 */ 114);
var isString = __webpack_require__(/*! lodash/isString */ 90);
var isArray = __webpack_require__(/*! lodash/isArray */ 209);
var playable_1 = __webpack_require__(/*! playable */ 268);
var constants_1 = __webpack_require__(/*! ../constants */ 91);
var playerHOC_1 = __webpack_require__(/*! ./playerHOC */ 115);
var Video_st_css_1 = __webpack_require__(/*! ../Video.st.css */ 35);
var URL_REGEX = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i;
exports.verifier = function (url) {
    if (isString(url)) {
        return URL_REGEX.test(url);
    }
    else if (isArray(url)) {
        return url.some(function (item) { return URL_REGEX.test(item); });
    }
    return false;
};
var mapPropsToPlayer = {
    src: function (instance) { return instance.reload(); },
    playing: function (instance, player, nextPlaying) {
        if (nextPlaying) {
            player.play();
        }
        else {
            player.pause();
        }
    },
    muted: function (instance, player, nextMuted) {
        if (nextMuted) {
            player.mute();
        }
        else {
            player.unmute();
        }
    },
    volume: 'setVolume',
    title: 'setTitle',
    loop: 'setLoop',
    logoUrl: 'setLogo',
    alwaysShowLogo: 'setAlwaysShowLogo',
    onLogoClick: 'setLogoClickCallback',
    preload: 'setPreload',
    showTitle: function (instance, player, isShowTitle) {
        if (isShowTitle) {
            player.showTitle();
        }
        else {
            player.hideTitle();
        }
    },
    controls: function (instance, player, isShowControls) {
        if (isShowControls) {
            player.showPlayControl();
            player.showVolumeControl();
            player.showTimeControl();
            player.showFullScreenControl();
            player.showProgressControl();
        }
        else {
            player.hidePlayControl();
            player.hideVolumeControl();
            player.hideTimeControl();
            player.hideFullScreenControl();
            player.hideProgressControl();
        }
    },
};
var mapMethodsToPlayer = {
    play: 'play',
    pause: 'pause',
    stop: 'reset',
    getDuration: 'getDuration',
    getCurrentTime: 'getCurrentTime',
    seekTo: 'seekTo',
    getVolume: 'getVolume',
    setVolume: 'setVolume',
    isMuted: function (instance, player) { return player.isMuted; },
    mute: 'mute',
    unMute: 'unmute',
};
var PlayablePlayer = /** @class */ (function (_super) {
    tslib_1.__extends(PlayablePlayer, _super);
    function PlayablePlayer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hasBeenPlayed: false
        };
        _this.onPlayClick = function () {
            _this.player.play();
        };
        _this.containerRef = React.createRef();
        _this.eventEmitter = new eventemitter3_1.EventEmitter();
        return _this;
    }
    PlayablePlayer.prototype.componentDidMount = function () {
        this.initPlayer();
    };
    PlayablePlayer.prototype.componentWillUnmount = function () {
        if (this.player) {
            this.player.destroy();
        }
        this.eventEmitter.removeAllListeners();
    };
    PlayablePlayer.prototype.initPlayer = function () {
        var _this = this;
        var _a = this.props, src = _a.src, playing = _a.playing, muted = _a.muted, title = _a.title, showTitle = _a.showTitle, loop = _a.loop, volume = _a.volume, controls = _a.controls, preload = _a.preload, onInit = _a.onInit, onReady = _a.onReady, onDuration = _a.onDuration, onProgress = _a.onProgress, logoUrl = _a.logoUrl, onLogoClick = _a.onLogoClick, alwaysShowLogo = _a.alwaysShowLogo, modules = _a.modules;
        this.registerModules(modules);
        this.player = playable_1.create({
            src: src,
            autoplay: !!playing,
            playsinline: true,
            muted: muted,
            width: '100%',
            height: '100%',
            fillAllSpace: true,
            title: title,
            preload: preload,
            loop: loop,
            volume: volume,
            hideOverlay: true,
        });
        if (!controls) {
            this.player.hidePlayControl();
            this.player.hideVolumeControl();
            this.player.hideTimeControl();
            this.player.hideFullScreenControl();
            this.player.hideProgressControl();
        }
        if (!showTitle) {
            this.player.hideTitle();
        }
        if (logoUrl || onLogoClick || alwaysShowLogo) {
            this.player.setLogo(logoUrl);
            this.player.setAlwaysShowLogo(alwaysShowLogo);
            this.player.setLogoClickCallback(onLogoClick);
        }
        this.player.attachToElement(this.containerRef.current);
        this.player.on(playable_1.VIDEO_EVENTS.PLAY_REQUEST, function () {
            _this.setState({ hasBeenPlayed: true });
        });
        this.player.on(playable_1.ENGINE_STATES.METADATA_LOADED, function () {
            onReady();
            onDuration(_this.player.getDuration());
        });
        this.player.on(playable_1.ENGINE_STATES.PLAYING, function () {
            _this.setState({ hasBeenPlayed: true });
            _this.eventEmitter.emit(constants_1.EVENTS.PLAYING);
        });
        this.player.on(playable_1.ENGINE_STATES.PAUSED, function () {
            _this.eventEmitter.emit(constants_1.EVENTS.PAUSED);
        });
        this.player.on(playable_1.ENGINE_STATES.ENDED, function () {
            _this.setState({ hasBeenPlayed: false });
            _this.eventEmitter.emit(constants_1.EVENTS.ENDED);
        });
        this.player.on(playable_1.VIDEO_EVENTS.CURRENT_TIME_UPDATED, function (currentTime) {
            onProgress(currentTime);
        });
        onInit(this.player);
    };
    PlayablePlayer.prototype.registerModules = function (modules) {
        if (modules === void 0) { modules = {}; }
        Object.keys(modules).forEach(function (moduleName) {
            return playable_1.registerModule(moduleName, modules[moduleName]);
        });
    };
    PlayablePlayer.prototype.render = function () {
        var _a = this.props, showTitle = _a.showTitle, title = _a.title, poster = _a.poster, playButton = _a.playButton;
        var coverStyles = { backgroundImage: poster ? "url(" + poster + ")" : 'none' };
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { ref: this.containerRef, className: Video_st_css_1.default.playerContainer, "data-player-name": "Playable" }),
            !this.state.hasBeenPlayed && poster && (React.createElement("div", { className: Video_st_css_1.default.cover, style: coverStyles, onClick: this.onPlayClick, "data-hook": "cover" },
                React.createElement("div", { className: Video_st_css_1.default.overlay },
                    showTitle && title && React.createElement("div", { "data-hook": "title", title: title, className: Video_st_css_1.default.title }, title),
                    playButton)))));
    };
    PlayablePlayer.displayName = 'Playable';
    PlayablePlayer.defaultProps = {
        poster: '',
        playButton: null,
    };
    return PlayablePlayer;
}(React.PureComponent));
exports.Player = playerHOC_1.default(PlayablePlayer, mapPropsToPlayer, mapMethodsToPlayer);
//# sourceMappingURL=Playable.js.map

/***/ }),

/***/ 492:
/*!********************************************************************************!*\
  !*** ../node_modules/node-libs-browser/node_modules/timers-browserify/main.js ***!
  \********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ 206);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 29)))

/***/ }),

/***/ 493:
/*!********************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/video/players/YouTube.js ***!
  \********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 11);
var React = __webpack_require__(/*! react */ 0);
var eventemitter3_1 = __webpack_require__(/*! eventemitter3 */ 114);
var isString = __webpack_require__(/*! lodash/isString */ 90);
var utils_1 = __webpack_require__(/*! ../utils */ 136);
var constants_1 = __webpack_require__(/*! ../constants */ 91);
var playerHOC_1 = __webpack_require__(/*! ./playerHOC */ 115);
var Video_st_css_1 = __webpack_require__(/*! ../Video.st.css */ 35);
var URL_REGEX = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})/;
exports.verifier = function (url) { return isString(url) && URL_REGEX.test(url); };
var SDKConfig = {
    name: 'YT',
    url: 'https://www.youtube.com/iframe_api',
    onReady: 'onYouTubeIframeAPIReady',
    isLoaded: function (YT) { return !!YT.loaded; },
    isRequireAllow: false,
};
var mapPropsToPlayer = {
    src: function (instance) { return instance.reload(); },
    playing: function (instance, player, nextPlaying) {
        if (nextPlaying) {
            player.playVideo();
        }
        else {
            player.pauseVideo();
        }
    },
    muted: function (instance, player, nextMuted) {
        if (nextMuted) {
            player.mute();
        }
        else {
            player.unMute();
        }
    },
    volume: 'setVolume',
    loop: 'setLoop',
};
var mapMethodsToPlayer = {
    play: 'playVideo',
    pause: 'pauseVideo',
    stop: 'stopVideo',
    getDuration: 'getDuration',
    getCurrentTime: 'getCurrentTime',
    seekTo: 'seekTo',
    getVolume: 'getVolume',
    setVolume: 'setVolume',
    isMuted: 'isMuted',
    mute: 'mute',
    unMute: 'unMute',
};
var YouTubePlayer = /** @class */ (function (_super) {
    tslib_1.__extends(YouTubePlayer, _super);
    function YouTubePlayer(props) {
        var _this = _super.call(this, props) || this;
        _this.initPlayer = function (YT) {
            var _a = _this.props, playing = _a.playing, muted = _a.muted, controls = _a.controls, playerOptions = _a.playerOptions, onInit = _a.onInit, onReady = _a.onReady, onDuration = _a.onDuration, onError = _a.onError;
            var src = _this.props.src;
            var videoId = src.match(URL_REGEX)[1];
            _this.player = new YT.Player(_this.containerRef.current, {
                width: '100%',
                height: '100%',
                videoId: videoId,
                playerVars: tslib_1.__assign({ autoplay: playing ? 1 : 0, mute: muted ? 1 : 0, controls: controls ? 1 : 0, origin: window.location.origin, playsinline: true }, playerOptions),
                events: {
                    onReady: function () {
                        onReady();
                        onDuration(_this.player.getDuration());
                    },
                    onStateChange: _this.onStateChange(YT.PlayerState),
                    onError: onError,
                }
            });
            onInit(_this.player);
        };
        _this.onStateChange = function (PlayerState) { return function (_a) {
            var data = _a.data;
            var PLAYING = PlayerState.PLAYING, PAUSED = PlayerState.PAUSED, ENDED = PlayerState.ENDED;
            switch (data) {
                case PLAYING:
                    _this.eventEmitter.emit(constants_1.EVENTS.PLAYING);
                    _this.progress();
                    break;
                case PAUSED:
                    _this.eventEmitter.emit(constants_1.EVENTS.PAUSED);
                    _this.stopProgress();
                    break;
                case ENDED:
                    _this.eventEmitter.emit(constants_1.EVENTS.ENDED);
                    _this.stopProgress();
                    break;
                default:
            }
        }; };
        _this.progress = function () {
            _this.stopProgress();
            _this.props.onProgress(_this.player.getCurrentTime() || 0);
            _this.progressTimeout = window.setTimeout(_this.progress, constants_1.PROGRESS_INTERVAL);
        };
        _this.containerRef = React.createRef();
        _this.eventEmitter = new eventemitter3_1.EventEmitter();
        return _this;
    }
    YouTubePlayer.prototype.componentDidMount = function () {
        var _this = this;
        utils_1.getSDK(SDKConfig)
            .then(this.initPlayer)
            .catch(function (error) {
            _this.props.onError(error);
        });
    };
    YouTubePlayer.prototype.componentWillUnmount = function () {
        if (this.player) {
            this.player.destroy();
        }
        this.eventEmitter.removeAllListeners();
        this.stopProgress();
    };
    YouTubePlayer.prototype.stopProgress = function () {
        window.clearTimeout(this.progressTimeout);
    };
    YouTubePlayer.prototype.render = function () {
        return (React.createElement("div", { ref: this.containerRef, className: Video_st_css_1.default.playerContainer, "data-player-name": "YouTube" }));
    };
    YouTubePlayer.displayName = 'YouTube';
    return YouTubePlayer;
}(React.PureComponent));
exports.Player = playerHOC_1.default(YouTubePlayer, mapPropsToPlayer, mapMethodsToPlayer);
//# sourceMappingURL=YouTube.js.map

/***/ }),

/***/ 494:
/*!*****************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/video/utils/getSDK.js ***!
  \*****************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var originalLoadjs = __webpack_require__(/*! loadjs */ 495);
var loadjs = originalLoadjs;
function mockLoadjs(mockedLoadjs) {
    loadjs = mockedLoadjs || originalLoadjs;
}
exports.mockLoadjs = mockLoadjs;
var stack = {};
var loadSDK = function (name, url, onLoaded, onError, onReady) {
    loadjs(url, {
        success: function () {
            if (onReady) {
                var previousOnReady_1 = window[onReady];
                window[onReady] = function () {
                    if (previousOnReady_1) {
                        previousOnReady_1();
                    }
                    onLoaded(window[name]);
                };
            }
            else {
                onLoaded(window[name]);
            }
        },
        error: function (err) {
            onError(err);
        },
    });
};
var requireSDK = function (name, url, onLoaded, onError, resolveRequire) {
    window.require([url], function (sdk) {
        window[name] = resolveRequire(sdk);
        onLoaded(window[name]);
    }, function (err) {
        onError(err);
    });
};
function getSDK(_a) {
    var name = _a.name, url = _a.url, onReady = _a.onReady, _b = _a.isLoaded, isLoaded = _b === void 0 ? function () { return true; } : _b, _c = _a.resolveRequire, resolveRequire = _c === void 0 ? function (sdk) { return sdk; } : _c, isRequireAllow = _a.isRequireAllow;
    if (window[name] && isLoaded(window[name])) {
        return Promise.resolve(window[name]);
    }
    return new Promise(function (resolve, reject) {
        if (stack[url]) {
            stack[url].push(resolve);
            return;
        }
        else {
            stack[url] = [resolve];
        }
        var onLoaded = function (sdk) {
            stack[url].forEach(function (resolveItem) { return resolveItem(sdk); });
        };
        if (isRequireAllow
            && typeof window.require === 'function'
            && typeof window.define === 'function'
            && window.define.amd) {
            requireSDK(name, url, onLoaded, reject, resolveRequire);
        }
        else {
            loadSDK(name, url, onLoaded, reject, onReady);
        }
    });
}
exports.getSDK = getSDK;
//# sourceMappingURL=getSDK.js.map

/***/ }),

/***/ 495:
/*!*************************************************!*\
  !*** ../node_modules/loadjs/dist/loadjs.umd.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function() {
/**
 * Global dependencies.
 * @global {Object} document - DOM
 */

var devnull = function() {},
    bundleIdCache = {},
    bundleResultCache = {},
    bundleCallbackQueue = {};


/**
 * Subscribe to bundle load event.
 * @param {string[]} bundleIds - Bundle ids
 * @param {Function} callbackFn - The callback function
 */
function subscribe(bundleIds, callbackFn) {
  // listify
  bundleIds = bundleIds.push ? bundleIds : [bundleIds];

  var depsNotFound = [],
      i = bundleIds.length,
      numWaiting = i,
      fn,
      bundleId,
      r,
      q;

  // define callback function
  fn = function (bundleId, pathsNotFound) {
    if (pathsNotFound.length) depsNotFound.push(bundleId);

    numWaiting--;
    if (!numWaiting) callbackFn(depsNotFound);
  };

  // register callback
  while (i--) {
    bundleId = bundleIds[i];

    // execute callback if in result cache
    r = bundleResultCache[bundleId];
    if (r) {
      fn(bundleId, r);
      continue;
    }

    // add to callback queue
    q = bundleCallbackQueue[bundleId] = bundleCallbackQueue[bundleId] || [];
    q.push(fn);
  }
}


/**
 * Publish bundle load event.
 * @param {string} bundleId - Bundle id
 * @param {string[]} pathsNotFound - List of files not found
 */
function publish(bundleId, pathsNotFound) {
  // exit if id isn't defined
  if (!bundleId) return;

  var q = bundleCallbackQueue[bundleId];

  // cache result
  bundleResultCache[bundleId] = pathsNotFound;

  // exit if queue is empty
  if (!q) return;

  // empty callback queue
  while (q.length) {
    q[0](bundleId, pathsNotFound);
    q.splice(0, 1);
  }
}


/**
 * Execute callbacks.
 * @param {Object or Function} args - The callback args
 * @param {string[]} depsNotFound - List of dependencies not found
 */
function executeCallbacks(args, depsNotFound) {
  // accept function as argument
  if (args.call) args = {success: args};

  // success and error callbacks
  if (depsNotFound.length) (args.error || devnull)(depsNotFound);
  else (args.success || devnull)(args);
}


/**
 * Load individual file.
 * @param {string} path - The file path
 * @param {Function} callbackFn - The callback function
 */
function loadFile(path, callbackFn, args, numTries) {
  var doc = document,
      async = args.async,
      maxTries = (args.numRetries || 0) + 1,
      beforeCallbackFn = args.before || devnull,
      pathStripped = path.replace(/^(css|img)!/, ''),
      isCss,
      e;

  numTries = numTries || 0;

  if (/(^css!|\.css$)/.test(path)) {
    isCss = true;

    // css
    e = doc.createElement('link');
    e.rel = 'stylesheet';
    e.href = pathStripped; //.replace(/^css!/, '');  // remove "css!" prefix
  } else if (/(^img!|\.(png|gif|jpg|svg)$)/.test(path)) {
    // image
    e = doc.createElement('img');
    e.src = pathStripped;    
  } else {
    // javascript
    e = doc.createElement('script');
    e.src = path;
    e.async = async === undefined ? true : async;
  }

  e.onload = e.onerror = e.onbeforeload = function (ev) {
    var result = ev.type[0];

    // Note: The following code isolates IE using `hideFocus` and treats empty
    // stylesheets as failures to get around lack of onerror support
    if (isCss && 'hideFocus' in e) {
      try {
        if (!e.sheet.cssText.length) result = 'e';
      } catch (x) {
        // sheets objects created from load errors don't allow access to
        // `cssText` (unless error is Code:18 SecurityError)
        if (x.code != 18) result = 'e';
      }
    }

    // handle retries in case of load failure
    if (result == 'e') {
      // increment counter
      numTries += 1;

      // exit function and try again
      if (numTries < maxTries) {
        return loadFile(path, callbackFn, args, numTries);
      }
    }

    // execute callback
    callbackFn(path, result, ev.defaultPrevented);
  };

  // add to document (unless callback returns `false`)
  if (beforeCallbackFn(path, e) !== false) doc.head.appendChild(e);
}


/**
 * Load multiple files.
 * @param {string[]} paths - The file paths
 * @param {Function} callbackFn - The callback function
 */
function loadFiles(paths, callbackFn, args) {
  // listify paths
  paths = paths.push ? paths : [paths];

  var numWaiting = paths.length,
      x = numWaiting,
      pathsNotFound = [],
      fn,
      i;

  // define callback function
  fn = function(path, result, defaultPrevented) {
    // handle error
    if (result == 'e') pathsNotFound.push(path);

    // handle beforeload event. If defaultPrevented then that means the load
    // will be blocked (ex. Ghostery/ABP on Safari)
    if (result == 'b') {
      if (defaultPrevented) pathsNotFound.push(path);
      else return;
    }

    numWaiting--;
    if (!numWaiting) callbackFn(pathsNotFound);
  };

  // load scripts
  for (i=0; i < x; i++) loadFile(paths[i], fn, args);
}


/**
 * Initiate script load and register bundle.
 * @param {(string|string[])} paths - The file paths
 * @param {(string|Function)} [arg1] - The bundleId or success callback
 * @param {Function} [arg2] - The success or error callback
 * @param {Function} [arg3] - The error callback
 */
function loadjs(paths, arg1, arg2) {
  var bundleId,
      args;

  // bundleId (if string)
  if (arg1 && arg1.trim) bundleId = arg1;

  // args (default is {})
  args = (bundleId ? arg2 : arg1) || {};

  // throw error if bundle is already defined
  if (bundleId) {
    if (bundleId in bundleIdCache) {
      throw "LoadJS";
    } else {
      bundleIdCache[bundleId] = true;
    }
  }

  // load scripts
  loadFiles(paths, function (pathsNotFound) {
    // execute callbacks
    executeCallbacks(args, pathsNotFound);

    // publish bundle load event
    publish(bundleId, pathsNotFound);
  }, args);
}


/**
 * Execute callbacks when dependencies have been satisfied.
 * @param {(string|string[])} deps - List of bundle ids
 * @param {Object} args - success/error arguments
 */
loadjs.ready = function ready(deps, args) {
  // subscribe to bundle load event
  subscribe(deps, function (depsNotFound) {
    // execute callbacks
    executeCallbacks(args, depsNotFound);
  });

  return loadjs;
};


/**
 * Manually satisfy bundle dependencies.
 * @param {string} bundleId - The bundle id
 */
loadjs.done = function done(bundleId) {
  publish(bundleId, []);
};


/**
 * Reset loadjs dependencies statuses
 */
loadjs.reset = function reset() {
  bundleIdCache = {};
  bundleResultCache = {};
  bundleCallbackQueue = {};
};


/**
 * Determine if bundle has already been defined
 * @param String} bundleId - The bundle id
 */
loadjs.isDefined = function isDefined(bundleId) {
  return bundleId in bundleIdCache;
};


// export
return loadjs;

}));


/***/ }),

/***/ 496:
/*!*********************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/video/players/Facebook.js ***!
  \*********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 11);
var React = __webpack_require__(/*! react */ 0);
var eventemitter3_1 = __webpack_require__(/*! eventemitter3 */ 114);
var isString = __webpack_require__(/*! lodash/isString */ 90);
var uniqueId = __webpack_require__(/*! lodash/uniqueId */ 92);
var utils_1 = __webpack_require__(/*! ../utils */ 136);
var playerHOC_1 = __webpack_require__(/*! ./playerHOC */ 115);
var constants_1 = __webpack_require__(/*! ../constants */ 91);
var Video_st_css_1 = __webpack_require__(/*! ../Video.st.css */ 35);
var URL_REGEX = /facebook\.com\/([^/?].+\/)?video(s|\.php)[/?].*$/;
exports.verifier = function (url) { return isString(url) && URL_REGEX.test(url); };
var SDKConfig = {
    name: 'FB',
    url: '//connect.facebook.net/en_US/sdk.js',
    onReady: 'fbAsyncInit',
    isRequireAllow: false,
};
var mapPropsToPlayer = {
    src: function (instance) { return instance.reload(); },
    playing: function (instance, player, nextPlaying) {
        if (nextPlaying) {
            player.play();
        }
        else {
            player.pause();
        }
    },
    muted: function (instance, player, nextMuted) {
        if (nextMuted) {
            player.mute();
        }
        else {
            player.unmute();
        }
    },
    volume: function (instance, player, nextVolume) { return player.setVolume(nextVolume / 100); },
};
var mapMethodsToPlayer = {
    play: 'play',
    pause: 'pause',
    stop: function (instance) { return instance.reload(); },
    getDuration: 'getDuration',
    getCurrentTime: 'getCurrentPosition',
    seekTo: 'seek',
    getVolume: function (instance, player) { return 100 * player.getVolume(); },
    setVolume: function (instance, player, fraction) { return player.setVolume(fraction / 100); },
    isMuted: 'isMuted',
    mute: 'mute',
    unMute: 'unmute',
};
var FacebookPlayer = /** @class */ (function (_super) {
    tslib_1.__extends(FacebookPlayer, _super);
    function FacebookPlayer(props) {
        var _this = _super.call(this, props) || this;
        _this.playerId = uniqueId('facebook-player-');
        _this.isDurationReady = false;
        _this.unsubscribeFBEvents = function () { return null; };
        _this.initPlayer = function (FB) {
            var appId = _this.props.appId;
            FB.init({
                appId: appId,
                xfbml: true,
                version: 'v2.5'
            });
            FB.Event.subscribe('xfbml.ready', _this.handleReady);
            FB.Event.subscribe('iframeplugin:create', _this.setAllowAttribute);
            _this.unsubscribeFBEvents = function () {
                FB.Event.unsubscribe('xfbml.ready', _this.handleReady);
                FB.Event.unsubscribe('iframeplugin:create', _this.setAllowAttribute);
            };
        };
        _this.handleReady = function (msg) {
            var _a = _this.props, muted = _a.muted, onInit = _a.onInit, onReady = _a.onReady, onError = _a.onError;
            if (msg.type === 'video' && msg.id === _this.playerId) {
                _this.player = msg.instance;
                _this.player.subscribe('startedPlaying', function () {
                    _this.eventEmitter.emit(constants_1.EVENTS.PLAYING);
                    _this.progress();
                });
                _this.player.subscribe('paused', function () {
                    _this.eventEmitter.emit(constants_1.EVENTS.PAUSED);
                    _this.stopProgress();
                });
                _this.player.subscribe('finishedPlaying', function () {
                    _this.eventEmitter.emit(constants_1.EVENTS.ENDED);
                    _this.stopProgress();
                });
                _this.player.subscribe('error', onError);
                if (!muted) {
                    _this.player.unmute();
                }
                _this.awaitDuration();
                onInit(_this.player);
                onReady();
            }
        };
        _this.awaitDuration = function () {
            if (!_this.isDurationReady) {
                var duration = _this.player.getDuration();
                if (duration) {
                    _this.isDurationReady = true;
                    _this.props.onDuration(duration);
                }
            }
            _this.durationTimeout = window.setTimeout(_this.awaitDuration, constants_1.PROGRESS_INTERVAL);
        };
        _this.progress = function () {
            _this.stopProgress();
            _this.props.onProgress(_this.player.getCurrentPosition() || 0);
            _this.progressTimeout = window.setTimeout(_this.progress, constants_1.PROGRESS_INTERVAL);
        };
        _this.setAllowAttribute = function () {
            if (!_this.containerRef.current) {
                return;
            }
            var iframe = _this.containerRef.current.querySelector('iframe');
            if (!iframe) {
                return;
            }
            iframe.setAttribute('allow', 'autoplay; encrypted-media');
        };
        _this.containerRef = React.createRef();
        _this.eventEmitter = new eventemitter3_1.EventEmitter();
        return _this;
    }
    FacebookPlayer.prototype.componentDidMount = function () {
        var _this = this;
        utils_1.getSDK(SDKConfig)
            .then(this.initPlayer)
            .catch(function (error) {
            _this.props.onError(error);
        });
    };
    FacebookPlayer.prototype.componentWillUnmount = function () {
        this.eventEmitter.removeAllListeners();
        this.unsubscribeFBEvents();
        this.stopAwaitDuration();
        this.stopProgress();
    };
    FacebookPlayer.prototype.stopAwaitDuration = function () {
        window.clearTimeout(this.durationTimeout);
    };
    FacebookPlayer.prototype.stopProgress = function () {
        window.clearTimeout(this.progressTimeout);
    };
    FacebookPlayer.prototype.render = function () {
        var _a = this.props, src = _a.src, playing = _a.playing, controls = _a.controls;
        return (React.createElement("div", { ref: this.containerRef, id: this.playerId, className: "fb-video " + Video_st_css_1.default.playerContainer, "data-href": src, "data-autoplay": playing ? 'true' : 'false', "data-allowfullscreen": "true", "data-controls": controls ? 'true' : 'false', "data-player-name": "Facebook" }));
    };
    FacebookPlayer.displayName = 'Facebook';
    return FacebookPlayer;
}(React.PureComponent));
exports.Player = playerHOC_1.default(FacebookPlayer, mapPropsToPlayer, mapMethodsToPlayer);
//# sourceMappingURL=Facebook.js.map

/***/ }),

/***/ 497:
/*!******************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/video/players/Vimeo.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 11);
var React = __webpack_require__(/*! react */ 0);
var eventemitter3_1 = __webpack_require__(/*! eventemitter3 */ 114);
var isString = __webpack_require__(/*! lodash/isString */ 90);
var utils_1 = __webpack_require__(/*! ../utils */ 136);
var constants_1 = __webpack_require__(/*! ../constants */ 91);
var playerHOC_1 = __webpack_require__(/*! ./playerHOC */ 115);
var Video_st_css_1 = __webpack_require__(/*! ../Video.st.css */ 35);
var URL_REGEX = /vimeo\.com\/.+/;
exports.verifier = function (url) { return isString(url) && URL_REGEX.test(url); };
var SDKConfig = {
    name: 'Vimeo',
    url: 'https://player.vimeo.com/api/player.js',
    isRequireAllow: true,
    resolveRequire: function (sdk) { return ({ Player: sdk }); },
};
var mapPropsToPlayer = {
    src: function (instance) { return instance.reload(); },
    playing: function (instance, player, nextPlaying) {
        if (nextPlaying) {
            player.play();
        }
        else {
            player.pause();
        }
    },
    muted: function (instance, player, nextMuted) {
        if (nextMuted) {
            player.setVolume(0);
        }
        else {
            player.setVolume(instance.props.volume / 100);
        }
    },
    volume: function (instance, player, nextVolume) { return player.setVolume(nextVolume / 100); },
};
var mapMethodsToPlayer = {
    play: 'play',
    pause: 'pause',
    stop: 'unload',
    getDuration: function (instance) { return instance.ref.duration; },
    getCurrentTime: function (instance) { return instance.ref.currentTime; },
    seekTo: 'setCurrentTime',
    getVolume: function (instance) { return instance.ref.volume; },
    setVolume: function (instance, player, fraction) { return player.setVolume(fraction / 100); },
    isMuted: function (instance) { return instance.ref.volume === 0; },
    mute: function (instance, player) { return player.setVolume(0); },
    unMute: function (instance, player) { return player.setVolume(1); },
};
var VimeoPlayer = /** @class */ (function (_super) {
    tslib_1.__extends(VimeoPlayer, _super);
    function VimeoPlayer(props) {
        var _this = _super.call(this, props) || this;
        _this.duration = 0;
        _this.currentTime = 0;
        _this.initPlayer = function (Vimeo) {
            var _a = _this.props, src = _a.src, playing = _a.playing, muted = _a.muted, loop = _a.loop, showTitle = _a.showTitle, playerOptions = _a.playerOptions, onInit = _a.onInit, onReady = _a.onReady, onDuration = _a.onDuration, onProgress = _a.onProgress, onError = _a.onError;
            _this.player = new Vimeo.Player(_this.containerRef.current, tslib_1.__assign({ url: src, autoplay: playing, muted: muted,
                loop: loop, title: showTitle }, playerOptions));
            _this.player.ready().then(function () {
                onReady();
                _this.player.getDuration().then(function (duration) {
                    _this.duration = duration;
                    onDuration(duration);
                });
            });
            _this.player.on('play', function () {
                _this.eventEmitter.emit(constants_1.EVENTS.PLAYING);
            });
            _this.player.on('pause', function () {
                _this.eventEmitter.emit(constants_1.EVENTS.PAUSED);
            });
            _this.player.on('ended', function () {
                _this.eventEmitter.emit(constants_1.EVENTS.ENDED);
            });
            _this.player.on('volumechange', function (_a) {
                var volume = _a.volume;
                _this.volume = volume * 100;
            });
            _this.player.on('timeupdate', function (_a) {
                var seconds = _a.seconds;
                _this.currentTime = seconds;
                onProgress(seconds);
            });
            _this.player.on('error', onError);
            onInit(_this.player);
        };
        _this.containerRef = React.createRef();
        _this.eventEmitter = new eventemitter3_1.EventEmitter();
        _this.volume = props.volume;
        return _this;
    }
    VimeoPlayer.prototype.componentDidMount = function () {
        var _this = this;
        utils_1.getSDK(SDKConfig)
            .then(this.initPlayer)
            .catch(function (error) {
            _this.props.onError(error);
        });
    };
    VimeoPlayer.prototype.componentWillUnmount = function () {
        if (this.player) {
            this.player.destroy();
        }
        this.eventEmitter.removeAllListeners();
    };
    VimeoPlayer.prototype.render = function () {
        return (React.createElement("div", { ref: this.containerRef, className: Video_st_css_1.default.playerContainer, "data-player-name": "Vimeo" }));
    };
    VimeoPlayer.displayName = 'Vimeo';
    return VimeoPlayer;
}(React.PureComponent));
exports.Player = playerHOC_1.default(VimeoPlayer, mapPropsToPlayer, mapMethodsToPlayer);
//# sourceMappingURL=Vimeo.js.map

/***/ }),

/***/ 498:
/*!*******************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/video/players/Twitch.js ***!
  \*******************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 11);
var React = __webpack_require__(/*! react */ 0);
var eventemitter3_1 = __webpack_require__(/*! eventemitter3 */ 114);
var isString = __webpack_require__(/*! lodash/isString */ 90);
var uniqueId = __webpack_require__(/*! lodash/uniqueId */ 92);
var utils_1 = __webpack_require__(/*! ../utils */ 136);
var constants_1 = __webpack_require__(/*! ../constants */ 91);
var playerHOC_1 = __webpack_require__(/*! ./playerHOC */ 115);
var Video_st_css_1 = __webpack_require__(/*! ../Video.st.css */ 35);
var VIDEO_URL_REGEX = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
var CHANNEL_URL_REGEX = /(?:www\.|go\.)?twitch\.tv\/([a-z0-9_]+)($|\?)/;
exports.verifier = function (url) { return isString(url) && (VIDEO_URL_REGEX.test(url) || CHANNEL_URL_REGEX.test(url)); };
var SDKConfig = {
    name: 'Twitch',
    url: 'https://player.twitch.tv/js/embed/v1.js',
    isRequireAllow: true,
    resolveRequire: function (sdk) { return ({ Player: sdk.PlayerEmbed }); },
};
var mapPropsToPlayer = {
    src: function (instance) { return instance.reload(); },
    playing: function (instance, player, nextPlaying) {
        if (nextPlaying) {
            player.play();
        }
        else {
            player.pause();
        }
    },
    muted: 'setMuted',
    volume: function (instance, player, nextVolume) { return player.setVolume(nextVolume / 100); },
};
var mapMethodsToPlayer = {
    play: 'play',
    pause: 'pause',
    stop: function (instance) { return instance.reload(); },
    getDuration: 'getDuration',
    getCurrentTime: 'getCurrentTime',
    seekTo: 'seek',
    getVolume: function (instance, player) { return 100 * player.getVolume(); },
    setVolume: function (instance, player, fraction) { return player.setVolume(fraction / 100); },
    isMuted: 'getMuted',
    mute: function (instance, player) { return player.setMuted(true); },
    unMute: function (instance, player) { return player.setMuted(false); },
};
var TwitchPlayer = /** @class */ (function (_super) {
    tslib_1.__extends(TwitchPlayer, _super);
    function TwitchPlayer(props) {
        var _this = _super.call(this, props) || this;
        _this.playerID = uniqueId('twitch-player');
        _this.isDurationReady = false;
        _this.initPlayer = function (Twitch) {
            var _a = _this.props, playing = _a.playing, muted = _a.muted, playerOptions = _a.playerOptions, onInit = _a.onInit, onReady = _a.onReady;
            var src = _this.props.src;
            var isChannel = CHANNEL_URL_REGEX.test(src);
            var id = isChannel ? src.match(CHANNEL_URL_REGEX)[1] : src.match(VIDEO_URL_REGEX)[1];
            var _b = Twitch.Player, READY = _b.READY, PLAY = _b.PLAY, PAUSE = _b.PAUSE, ENDED = _b.ENDED;
            _this.player = new Twitch.Player(_this.playerID, tslib_1.__assign({ video: isChannel ? '' : id, channel: isChannel ? id : '', height: '100%', width: '100%', playsinline: true, autoplay: playing, muted: muted }, playerOptions));
            _this.player.addEventListener(READY, function () {
                _this.awaitDuration();
                onReady();
            });
            _this.player.addEventListener(PLAY, function () {
                _this.eventEmitter.emit(constants_1.EVENTS.PLAYING);
                _this.progress();
            });
            _this.player.addEventListener(PAUSE, function () {
                _this.eventEmitter.emit(constants_1.EVENTS.PAUSED);
                _this.stopProgress();
            });
            _this.player.addEventListener(ENDED, function () {
                _this.eventEmitter.emit(constants_1.EVENTS.ENDED);
                _this.stopProgress();
            });
            onInit(_this.player);
        };
        _this.awaitDuration = function () {
            if (!_this.isDurationReady) {
                var duration = _this.player.getDuration();
                if (duration) {
                    _this.isDurationReady = true;
                    _this.props.onDuration(duration);
                }
            }
            _this.durationTimeout = window.setTimeout(_this.awaitDuration, constants_1.PROGRESS_INTERVAL);
        };
        _this.progress = function () {
            _this.stopProgress();
            _this.props.onProgress(_this.player.getCurrentTime() || 0);
            _this.progressTimeout = window.setTimeout(_this.progress, constants_1.PROGRESS_INTERVAL);
        };
        _this.eventEmitter = new eventemitter3_1.EventEmitter();
        return _this;
    }
    TwitchPlayer.prototype.componentDidMount = function () {
        var _this = this;
        utils_1.getSDK(SDKConfig)
            .then(this.initPlayer)
            .catch(function (error) {
            _this.props.onError(error);
        });
    };
    TwitchPlayer.prototype.componentWillUnmount = function () {
        if (this.player) {
            this.player.destroy();
        }
        this.eventEmitter.removeAllListeners();
        this.stopProgress();
        this.stopAwaitDuration();
    };
    TwitchPlayer.prototype.stopAwaitDuration = function () {
        window.clearTimeout(this.durationTimeout);
    };
    TwitchPlayer.prototype.stopProgress = function () {
        window.clearTimeout(this.progressTimeout);
    };
    TwitchPlayer.prototype.render = function () {
        return (React.createElement("div", { id: this.playerID, className: Video_st_css_1.default.playerContainer, "data-player-name": "Twitch" }));
    };
    TwitchPlayer.displayName = 'Twitch';
    return TwitchPlayer;
}(React.PureComponent));
exports.Player = playerHOC_1.default(TwitchPlayer, mapPropsToPlayer, mapMethodsToPlayer);
//# sourceMappingURL=Twitch.js.map

/***/ }),

/***/ 499:
/*!************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/video/players/DailyMotion.js ***!
  \************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 11);
var React = __webpack_require__(/*! react */ 0);
var eventemitter3_1 = __webpack_require__(/*! eventemitter3 */ 114);
var isString = __webpack_require__(/*! lodash/isString */ 90);
var utils_1 = __webpack_require__(/*! ../utils */ 136);
var constants_1 = __webpack_require__(/*! ../constants */ 91);
var playerHOC_1 = __webpack_require__(/*! ./playerHOC */ 115);
var Video_st_css_1 = __webpack_require__(/*! ../Video.st.css */ 35);
var URL_REGEX = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/;
exports.verifier = function (url) { return isString(url) && URL_REGEX.test(url); };
var SDKConfig = {
    name: 'DM',
    url: 'https://api.dmcdn.net/all.js',
    onReady: 'dmAsyncInit',
    isLoaded: function (DM) { return !!DM.player; },
    isRequireAllow: false,
};
var mapPropsToPlayer = {
    src: function (instance) { return instance.reload(); },
    playing: function (instance, player, nextPlaying) {
        if (nextPlaying) {
            player.play();
        }
        else {
            player.pause();
        }
    },
    muted: 'setMuted',
    volume: function (instance, player, nextVolume) { return player.setVolume(nextVolume / 100); },
    controls: 'setControls',
};
var mapMethodsToPlayer = {
    play: 'play',
    pause: 'pause',
    stop: function (instance) { return instance.reload(); },
    getDuration: function (instance, player) { return player.duration || 0; },
    getCurrentTime: function (instance, player) { return player.currentTime || 0; },
    seekTo: 'setCurrentTime',
    getVolume: function (instance, player) { return 100 * player.volume; },
    setVolume: function (instance, player, fraction) { return player.setVolume(fraction / 100); },
    isMuted: function (instance, player) { return player.muted; },
    mute: function (instance, player) { return player.setMuted(true); },
    unMute: function (instance, player) { return player.setMuted(false); },
};
var DailyMotionPlayer = /** @class */ (function (_super) {
    tslib_1.__extends(DailyMotionPlayer, _super);
    function DailyMotionPlayer(props) {
        var _this = _super.call(this, props) || this;
        _this.initPlayer = function (DM) {
            var _a = _this.props, playing = _a.playing, muted = _a.muted, controls = _a.controls, showTitle = _a.showTitle, playerOptions = _a.playerOptions, onInit = _a.onInit, onReady = _a.onReady, onDuration = _a.onDuration, onError = _a.onError;
            var src = _this.props.src;
            var _b = src.match(URL_REGEX), id = _b[1];
            _this.player = new DM.player(_this.containerRef.current, {
                width: '100%',
                height: '100%',
                video: id,
                params: tslib_1.__assign({ controls: controls, autoplay: playing, mute: muted, 'ui-start-screen-info': showTitle, origin: window.location.origin }, playerOptions),
                events: {
                    apiready: function () {
                        onReady();
                    },
                    durationchange: function () {
                        onDuration(_this.player.duration);
                    },
                    playing: function () {
                        _this.eventEmitter.emit(constants_1.EVENTS.PLAYING);
                        _this.progress();
                    },
                    pause: function () {
                        _this.eventEmitter.emit(constants_1.EVENTS.PAUSED);
                        _this.stopProgress();
                    },
                    video_end: function () {
                        _this.eventEmitter.emit(constants_1.EVENTS.ENDED);
                        _this.stopProgress();
                    },
                    error: function (event) { return onError(event); },
                }
            });
            onInit(_this.player);
        };
        _this.progress = function () {
            _this.stopProgress();
            _this.props.onProgress(_this.player.currentTime || 0);
            _this.progressTimeout = window.setTimeout(_this.progress, constants_1.PROGRESS_INTERVAL);
        };
        _this.containerRef = React.createRef();
        _this.eventEmitter = new eventemitter3_1.EventEmitter();
        return _this;
    }
    DailyMotionPlayer.prototype.componentDidMount = function () {
        var _this = this;
        utils_1.getSDK(SDKConfig)
            .then(this.initPlayer)
            .catch(function (error) {
            _this.props.onError(error);
        });
    };
    DailyMotionPlayer.prototype.componentWillUnmount = function () {
        this.eventEmitter.removeAllListeners();
        this.stopProgress();
    };
    DailyMotionPlayer.prototype.stopProgress = function () {
        window.clearTimeout(this.progressTimeout);
    };
    DailyMotionPlayer.prototype.render = function () {
        return (React.createElement("div", { className: Video_st_css_1.default.playerContainer, "data-player-name": "DailyMotion" },
            React.createElement("div", { ref: this.containerRef })));
    };
    DailyMotionPlayer.displayName = 'DailyMotion';
    return DailyMotionPlayer;
}(React.PureComponent));
exports.Player = playerHOC_1.default(DailyMotionPlayer, mapPropsToPlayer, mapMethodsToPlayer);
//# sourceMappingURL=DailyMotion.js.map

/***/ }),

/***/ 500:
/*!*****************************************************************!*\
  !*** ../node_modules/@wix/playback-bi-module/dist/src/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./playback-bi-module */ 501));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 501:
/*!******************************************************************************!*\
  !*** ../node_modules/@wix/playback-bi-module/dist/src/playback-bi-module.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var playable_1 = __webpack_require__(/*! playable */ 268);
var web_bi_logger_1 = __importDefault(__webpack_require__(/*! @wix/web-bi-logger */ 502));
var bi_logger_video_platform_1 = __importDefault(__webpack_require__(/*! @wix/bi-logger-video-platform */ 512));
var DEFAULT_INTERVAL_FOR_PROGRESS = 5000;
var UNKNOW_TYLE = 'unknown_type';
var convertMSToInt = function (time) { return Math.round(time * 1000); };
var PlaybackBIModule = /** @class */ (function () {
    function PlaybackBIModule(_a) {
        var eventEmitter = _a.eventEmitter, engine = _a.engine;
        this._customData = JSON.stringify({});
        this._intervalID = null;
        this._intervalDelta = DEFAULT_INTERVAL_FOR_PROGRESS;
        this._isOngoingPlayback = false;
        this._isVideoPlaying = false;
        this._eventEmitter = eventEmitter;
        this._engine = engine;
        this._videoTag = this._engine.getElement();
        this._logger = bi_logger_video_platform_1.default(web_bi_logger_1.default)();
        this._bindCallbacks();
        this._bindEvents();
        this._generateNewViewID();
    }
    PlaybackBIModule.prototype.setWixBIVideoID = function (id) {
        this._videoID = id;
    };
    PlaybackBIModule.prototype.setWixBIProduct = function (product) {
        this._product = product;
    };
    PlaybackBIModule.prototype.setWixBICustomDataJSON = function (customDataJSON) {
        if (customDataJSON === void 0) { customDataJSON = {}; }
        this._customData = JSON.stringify(customDataJSON);
    };
    PlaybackBIModule.prototype.setWixBIProgressInterval = function (delta) {
        this._intervalDelta = delta;
    };
    PlaybackBIModule.prototype.setWixVisitorID = function (visitoID) {
        this._logger.util.updateDefaults({
            visitor_id: visitoID,
        });
    };
    PlaybackBIModule.prototype.setWixMSID = function (msID) {
        this._logger.util.updateDefaults({
            msid: msID,
        });
    };
    Object.defineProperty(PlaybackBIModule.prototype, "_collerationID", {
        get: function () {
            return this._videoID + "_" + this._viewID + "_" + this._randomSalt;
        },
        enumerable: true,
        configurable: true
    });
    PlaybackBIModule.prototype._generateNewViewID = function () {
        this._viewID = Date.now().toString();
        this._randomSalt = Math.floor(Math.random() * 1000);
    };
    PlaybackBIModule.prototype.getPlayedRange = function () {
        var played = this._videoTag.played;
        var playedRanges = [];
        for (var i = 0; i < played.length; i++) {
            playedRanges.push([
                convertMSToInt(played.start(i)),
                convertMSToInt(played.end(i)),
            ]);
        }
        return playedRanges;
    };
    PlaybackBIModule.prototype._resetState = function () {
        this._isOngoingPlayback = false;
        this._isVideoPlaying = false;
        this._stopIntervalSendForProgress();
    };
    PlaybackBIModule.prototype._bindCallbacks = function () {
        this._sendProgress = this._sendProgress.bind(this);
    };
    PlaybackBIModule.prototype._bindEvents = function () {
        this._unbindEvents = this._eventEmitter.bindEvents([
            [playable_1.VIDEO_EVENTS.PLAY_REQUEST, this._sendPlayRequest],
            [playable_1.VIDEO_EVENTS.PLAY_ABORTED, this._sendPlayAborted],
            [playable_1.VIDEO_EVENTS.STATE_CHANGED, this._processStateChange],
        ], this);
    };
    PlaybackBIModule.prototype._processStateChange = function (_a) {
        var nextState = _a.nextState;
        switch (nextState) {
            case playable_1.ENGINE_STATES.SRC_SET:
                this._resetState();
                break;
            case playable_1.ENGINE_STATES.PLAYING:
                if (this._isOngoingPlayback) {
                    this._sendResumed();
                }
                else {
                    this._sendPlaying();
                }
                break;
            case playable_1.ENGINE_STATES.PAUSED:
                this._sendPause();
                break;
            case playable_1.ENGINE_STATES.ENDED:
                this._sendFinish();
                break;
            default:
                break;
        }
    };
    PlaybackBIModule.prototype._startIntervalSendForProgress = function () {
        if (this._intervalID) {
            return;
        }
        this._intervalID = window.setInterval(this._sendProgress, this._intervalDelta);
    };
    PlaybackBIModule.prototype._stopIntervalSendForProgress = function () {
        window.clearInterval(this._intervalID);
        this._intervalID = null;
    };
    PlaybackBIModule.prototype._sendPlayRequest = function () {
        if (this._isOngoingPlayback) {
            return;
        }
        var _a = this._engine.getDebugInfo(), _b = _a.bitrates, bitrates = _b === void 0 ? [] : _b, _c = _a.type, type = _c === void 0 ? UNKNOW_TYLE : _c;
        this._generateNewViewID();
        this._logger.playablePlayRequested({
            customDataJson: this._customData,
            correlationId: this._collerationID,
            product: this._product,
            videoId: this._videoID,
            videoDuration: convertMSToInt(this._engine.getDuration()),
            videoType: type,
            bitrateJson: JSON.stringify(bitrates),
        });
    };
    PlaybackBIModule.prototype._sendPlayAborted = function (event) {
        this._logger.playablePlayAborted({
            correlationId: this._collerationID,
            videoId: this._videoID,
            reasonMessage: event.message,
        });
        this._generateNewViewID();
    };
    PlaybackBIModule.prototype._sendPlaying = function () {
        if (!this._isVideoPlaying) {
            this._logger.playablePlayStarted({
                correlationId: this._collerationID,
                videoId: this._videoID,
            });
            this._isOngoingPlayback = true;
            this._isVideoPlaying = true;
            this._startIntervalSendForProgress();
        }
    };
    PlaybackBIModule.prototype._getCurrentTimeOfVideo = function () {
        return convertMSToInt(this._engine.getCurrentTime());
    };
    PlaybackBIModule.prototype._sendResumed = function () {
        if (!this._isVideoPlaying) {
            this._logger.playablePlayResumed({
                correlationId: this._collerationID,
                videoId: this._videoID,
                currentTimeFrame: this._getCurrentTimeOfVideo(),
            });
            this._isVideoPlaying = true;
            this._startIntervalSendForProgress();
        }
    };
    PlaybackBIModule.prototype._sendProgress = function () {
        var _a = this._engine.getDebugInfo(), type = _a.type, currentBitrate = _a.currentBitrate;
        this._logger.playableProgressInfo({
            correlationId: this._collerationID,
            currentBitrate: currentBitrate,
            currentTimeFrame: this._getCurrentTimeOfVideo(),
            deliveryType: type,
            playedRange: JSON.stringify(this.getPlayedRange()),
            videoId: this._videoID,
        });
    };
    PlaybackBIModule.prototype._sendPause = function () {
        if (this._isVideoPlaying) {
            this._logger.playablePlayPaused({
                correlationId: this._collerationID,
                currentTimeFrame: this._getCurrentTimeOfVideo(),
                playedRange: JSON.stringify(this.getPlayedRange()),
                videoId: this._videoID,
            });
            this._stopIntervalSendForProgress();
            this._isVideoPlaying = false;
        }
    };
    PlaybackBIModule.prototype._sendFinish = function () {
        this._logger.playablePlayFinished({
            correlationId: this._collerationID,
            playedRange: JSON.stringify(this.getPlayedRange()),
            videoId: this._videoID,
        });
        this._stopIntervalSendForProgress();
        this._isOngoingPlayback = false;
        this._isVideoPlaying = false;
    };
    PlaybackBIModule.prototype.destroy = function () {
        this._stopIntervalSendForProgress();
        this._unbindEvents();
        this._eventEmitter = null;
        this._engine = null;
        this._videoTag = null;
        this._logger = null;
    };
    PlaybackBIModule.moduleName = 'wix-playback-bi-module';
    PlaybackBIModule.dependencies = ['eventEmitter', 'engine'];
    __decorate([
        playable_1.playerAPIDecorator()
    ], PlaybackBIModule.prototype, "setWixBIVideoID", null);
    __decorate([
        playable_1.playerAPIDecorator()
    ], PlaybackBIModule.prototype, "setWixBIProduct", null);
    __decorate([
        playable_1.playerAPIDecorator()
    ], PlaybackBIModule.prototype, "setWixBICustomDataJSON", null);
    __decorate([
        playable_1.playerAPIDecorator()
    ], PlaybackBIModule.prototype, "setWixBIProgressInterval", null);
    __decorate([
        playable_1.playerAPIDecorator()
    ], PlaybackBIModule.prototype, "setWixVisitorID", null);
    __decorate([
        playable_1.playerAPIDecorator()
    ], PlaybackBIModule.prototype, "setWixMSID", null);
    return PlaybackBIModule;
}());
exports.PlaybackBIModule = PlaybackBIModule;
//# sourceMappingURL=playback-bi-module.js.map

/***/ }),

/***/ 502:
/*!*************************************************************!*\
  !*** ../node_modules/@wix/web-bi-logger/dist/src/logger.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wixBiLoggerClient = __webpack_require__(/*! @wix/wix-bi-logger-client */ 503);

var _browsingSession = __webpack_require__(/*! ./browsingSession */ 507);

var browsingSession = _interopRequireWildcard(_browsingSession);

var _env = __webpack_require__(/*! ./lib/env */ 188);

var _publishers = __webpack_require__(/*! ./lib/publishers */ 510);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getPublisher() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var publisher = void 0;

  if ((0, _env.isWebWorker)()) {
    publisher = _publishers.fetchPublisher;
  } else if (typeof options.useBeacon === 'undefined' || options.useBeacon) {
    publisher = _publishers.beaconPublisher;
  } else {
    publisher = _publishers.imagePublisher;
  }

  return publisher(options);
}

var _factory = function _factory(options) {
  return new _wixBiLoggerClient.BiLoggerFactory().addPublisher(getPublisher(options));
};

var logger = {
  factory: function factory() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var trackSession = options.trackSession || typeof options.trackSession === 'undefined';

    if (trackSession) {
      browsingSession.track(_factory);
    }

    return _factory(options);
  },
  setHost: _env.setHost
};

exports.default = logger;

/***/ }),

/***/ 503:
/*!***************************************************************!*\
  !*** ../node_modules/@wix/wix-bi-logger-client/dist/index.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BiLoggerClientFactory = __webpack_require__(/*! ./bi-logger-factory */ 269);
var BiLogger = __webpack_require__(/*! ./bi-logger */ 271);

module.exports.BiLoggerFactory = BiLoggerClientFactory;
module.exports.BiLogger = BiLogger;

module.exports.factory = function () {
  return new BiLoggerClientFactory();
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 504:
/*!***************************************************************************!*\
  !*** ../node_modules/@wix/wix-bi-logger-client/dist/utils/collections.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This callback type is called `requestCallback` and is displayed as a global symbol.
 *
 * @callback iterateeCallback
 * @param {*} Value
 * @param {string} Key
 * @param {object} Original object
 */
/**
 * Iterates over object values
 * @param {Object} collection
 * @param {iterateeCallback} iteratee
 * @return {Object} iterated object
 */
module.exports.mapValues = function (collection, iteratee) {
  if (!collection) {
    return {};
  }
  return Object.keys(collection).reduce(function (acc, key) {
    acc[key] = iteratee(collection[key], key, collection);
    return acc;
  }, {});
};
//# sourceMappingURL=collections.js.map

/***/ }),

/***/ 505:
/*!***********************************************************************!*\
  !*** ../node_modules/@wix/wix-bi-logger-client/dist/utils/promise.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * rejects original promise after specified timeout
 * @param {Promise<R>} promise Original promise
 * @param {string} [message] Additional message for timeout reject
 * @param {number} timeout Time for reject
 * @return {Promise<R>}
 */
module.exports.timedPromise = function (promise, _ref) {
  var message = _ref.message,
      timeout = _ref.timeout;

  var timeoutPromise = new Promise(function (resolve, reject) {
    setTimeout(reject, timeout, message ? 'Timeout: ' + message : 'Timeout');
  });
  return Promise.race([promise, timeoutPromise]);
};

/**
 * Works like Promise.all expect uses object insetead of array.
 * @param {Object} promiseObject
 * @return {Promise} Promise wiht original keys and resolved values
 */
module.exports.allAsObject = function (promiseObject) {
  var keys = Object.keys(promiseObject);
  return Promise.all(keys.map(function (key) {
    return promiseObject[key];
  })).then(function (resolved) {
    return resolved.reduce(function (acc, value, i) {
      acc[keys[i]] = value;
      return acc;
    }, {});
  });
};
//# sourceMappingURL=promise.js.map

/***/ }),

/***/ 506:
/*!*******************************************************************!*\
  !*** ../node_modules/@wix/wix-bi-logger-client/dist/utils/log.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.log = {
  error: function error() {
    if (console && console.error) {
      var _console;

      (_console = console).error.apply(_console, arguments);
    }
  }
};
//# sourceMappingURL=log.js.map

/***/ }),

/***/ 507:
/*!**********************************************************************!*\
  !*** ../node_modules/@wix/web-bi-logger/dist/src/browsingSession.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.track = track;

var _utils = __webpack_require__(/*! ./utils */ 272);

var _navigator = __webpack_require__(/*! ./lib/navigator */ 273);

var _env = __webpack_require__(/*! ./lib/env */ 188);

var _screen = __webpack_require__(/*! ./lib/screen */ 509);

var IS_TRACKING = '__isTrackingBiBrowsingSession__';
var ENDPOINT = 'p';
var SOURCE = 19;
var EVID = 3;

function shouldTrack() {
  return !(0, _env.isWebWorker)() && (0, _env.provideBrowsingContext)(function (window) {
    return !window[IS_TRACKING];
  });
}

function setIsTracking() {
  return (0, _env.provideBrowsingContext)(function (window) {
    return window[IS_TRACKING] = true;
  });
}

function getLogger(loggerFactory) {
  return loggerFactory({ endpoint: ENDPOINT, useBeacon: true }).setDefaults({ src: SOURCE, evid: EVID, vsi: (0, _utils.guid)() }).logger();
}

function trackBrowsingSession(loggerFactory) {
  var logger = getLogger(loggerFactory);
  var firstInSession = 1;

  (0, _navigator.listen)(function (fromUrl, toUrl) {
    var _provideBrowsingConte = (0, _env.provideBrowsingContext)(function (window) {
      return { sr: (0, _screen.getDesktopSize)(window), wr: (0, _screen.getWindowSize)(window) };
    }),
        sr = _provideBrowsingConte.sr,
        wr = _provideBrowsingConte.wr;

    logger.log({ from: fromUrl, to: toUrl, fis: firstInSession, sr: sr, wr: wr });
    firstInSession = 0;
  });
}

/**
 * Sends a page view event on initial load and on every page switch
 * BI event definition: http://bo.wix.com/bi-catalog-webapp/#/sources/19/events/3
 */
function track(loggerFactory) {
  if (shouldTrack()) {
    setIsTracking();
    trackBrowsingSession(loggerFactory);
  }
}

/***/ }),

/***/ 508:
/*!**********************************************************************!*\
  !*** ../node_modules/@wix/web-bi-logger/dist/src/lib/performance.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.now = now;
function now() {
  return typeof performance !== 'undefined' && performance && performance.now ? performance.now() : -1;
}

/***/ }),

/***/ 509:
/*!*****************************************************************!*\
  !*** ../node_modules/@wix/web-bi-logger/dist/src/lib/screen.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDesktopSize = getDesktopSize;
exports.getWindowSize = getWindowSize;
function getDesktopSize(window) {
  var width = window.screen && window.screen.width || 0;
  var height = window.screen && window.screen.height || 0;

  return width + "x" + height;
}

function getWindowSize(window) {
  var width = 0;
  var height = 0;

  if (window.innerWidth) {
    width = window.innerWidth;
    height = window.innerHeight;
  } else if (window.document) {
    if (window.document.documentElement && window.document.documentElement.clientWidth) {
      width = window.document.documentElement.clientWidth;
      height = window.document.documentElement.clientHeight;
    } else if (window.document.body && window.document.body.clientWidth) {
      width = window.document.body.clientWidth;
      height = window.document.body.clientHeight;
    }
  }

  return width + "x" + height;
}

/***/ }),

/***/ 510:
/*!*********************************************************************!*\
  !*** ../node_modules/@wix/web-bi-logger/dist/src/lib/publishers.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imagePublisher = imagePublisher;
exports.beaconPublisher = beaconPublisher;
exports.fetchPublisher = fetchPublisher;

var _utils = __webpack_require__(/*! ./../utils */ 272);

var _transport = __webpack_require__(/*! ./transport */ 511);

function imagePublisher() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function imagePublisher(params) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // eslint-disable-line func-names
    var url = (0, _utils.buildUrl)(options, params, context);
    return (0, _transport.pixelTransport)(url, context.image);
  };
}

function beaconPublisher() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function beaconPublisher(params) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // eslint-disable-line func-names
    var url = (0, _utils.buildUrl)(options, params, context);
    return (0, _transport.beaconTransport)(url).catch(function () {
      return (0, _transport.pixelTransport)(url, context.image);
    });
  };
}

function fetchPublisher() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function fetchPublisher(params) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // eslint-disable-line func-names
    var url = (0, _utils.buildUrl)(options, params, context);
    return (0, _transport.fetchTransport)(url);
  };
}

/***/ }),

/***/ 511:
/*!********************************************************************!*\
  !*** ../node_modules/@wix/web-bi-logger/dist/src/lib/transport.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.beaconTransport = beaconTransport;
exports.pixelTransport = pixelTransport;
exports.fetchTransport = fetchTransport;

var _navigator = __webpack_require__(/*! ./navigator */ 273);

function beaconTransport(url) {
  return new Promise(function (resolve, reject) {
    return (0, _navigator.sendBeacon)(url) ? resolve() : reject(new Error('Transport Error: Cannot send bi using beacons'));
  });
}

function pixelTransport(url, image) {
  return new Promise(function (resolve, reject) {
    var biImage = image || new window.Image(0, 0);
    biImage.onload = function () {
      return resolve();
    };
    biImage.onerror = function () {
      return reject(new Error('Transport Error: Cannot send bi using pixelTransport'));
    };
    biImage.src = url;
  });
}

function fetchTransport(url) {
  return fetch(url, { credentials: 'include' }).then(function (response) {
    if (!response.ok) {
      throw Error('Transport Error: Cannot send bi using fetch. Status: ' + response.status);
    }
  });
}

/***/ }),

/***/ 512:
/*!***********************************************************************!*\
  !*** ../node_modules/@wix/bi-logger-video-platform/dist/src/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
/* eslint:disable */
var BiLoggerFactory = __webpack_require__(/*! @wix/wix-bi-logger-client/dist/bi-logger-factory */ 269);
/**
* @typedef {string} Url
*/
/**
* @typedef {string} GUID
*/
/**
* @typedef {number} DateTime
*/
var dummy;
var defaultConfig = { endpoint: 'video-platform' };
var init = function (webOrMobileLogger) { return function (userConfig) {
    if (userConfig === void 0) { userConfig = {}; }
    var defaults = userConfig.defaults, restOfConfig = __rest(userConfig, ["defaults"]);
    var config = __assign({}, defaultConfig, restOfConfig);
    var factoryInstance = (webOrMobileLogger instanceof BiLoggerFactory) ? webOrMobileLogger : webOrMobileLogger.factory(config);
    var logger = getLogger(factoryInstance);
    return defaults ? logger.util.updateDefaults(defaults) : logger;
}; };
exports.initCustomLogger = function (factoryInstance) { return getLogger(factoryInstance); };
var getLogger = function (biLoggerClientFactoryInstance) {
    return new Logger(biLoggerClientFactoryInstance);
};
var Logger = /** @class */ (function () {
    function Logger(biLoggerClientFactoryInstance) {
        var _this = this;
        this.biLoggerClientFactoryInstance = biLoggerClientFactoryInstance;
        this.util = {
            updateDefaults: function (defaults) {
                _this.biLoggerClientFactoryInstance.updateDefaults(defaults);
                return _this;
            },
            log: function (logParams) {
                return _this.bi.log(logParams);
            }
        };
        biLoggerClientFactoryInstance
            .updateDefaults({ src: 71 });
        this.bi = biLoggerClientFactoryInstance.logger({ endpoint: 'video-platform' });
    }
    ;
    /**
    * @typedef {Object} playableProgressInfoParams
    * @property {string} correlationId - one view id (video_id + view_id (random smthng))
    * @property {number} currentBitrate - current_bitrate
    * @property {number} currentTimeFrame - ms
    * @property {string} deliveryType - delivery_type
    * @property {string} playedRange - [[0, 15], [33, 55], [100, 140]]
    * @property {string} videoId - video_id (as backend) or videoUrl if not passed
    **/
    /**
     * Name: playable.progress.info. Evid: 904.
     * Event description: playable.progress.info (every 5 sec event).
    
     * correlationId - Type: string. Desc: one view id (video_id + view_id (random smthng))
     *
     * currentBitrate - Type: numeric. Desc: current_bitrate
     *
     * currentTimeFrame - Type: numeric. Desc: ms
     *
     * deliveryType - Type: string. Desc: delivery_type
     *
     * playedRange - Type: string. Desc: [[0, 15], [33, 55], [100, 140]]
     *
     * videoId - Type: string. Desc: video_id (as backend) or videoUrl if not passed
     * @param {playableProgressInfoParams} params The parameters for this event.
     * @return {Promise}
    **/
    Logger.prototype.playableProgressInfo = function (params) {
        return this.bi.log(__assign({ evid: 904 }, params));
    };
    /**
    * @typedef {Object} playablePlayStartedParams
    * @property {string} correlationId - one view id (video_id + view_id (random smthng))
    * @property {string} videoId - video_id (as backend) or videoUrl if not passed
    **/
    /**
     * Name: playable.play.started. Evid: 903.
     * Event description: playable.play.started.
    
     * correlationId - Type: string. Desc: one view id (video_id + view_id (random smthng))
     *
     * videoId - Type: string. Desc: video_id (as backend) or videoUrl if not passed
     * @param {playablePlayStartedParams} params The parameters for this event.
     * @return {Promise}
    **/
    Logger.prototype.playablePlayStarted = function (params) {
        return this.bi.log(__assign({ evid: 903 }, params));
    };
    /*event 900 has no function name set, please set one in BI Catalog.*/
    /**
    * @typedef {Object} playablePlayResumedParams
    * @property {string} correlationId - one view id (video_id + view_id (random smthng))
    * @property {number} currentTimeFrame - ms
    * @property {string} videoId - video_id (as backend) or videoUrl if not passed
    **/
    /**
     * Name: playable.play.resumed. Evid: 906.
     * Event description: playable.play.resumed.
    
     * correlationId - Type: string. Desc: one view id (video_id + view_id (random smthng))
     *
     * currentTimeFrame - Type: numeric. Desc: ms
     *
     * videoId - Type: string. Desc: video_id (as backend) or videoUrl if not passed
     * @param {playablePlayResumedParams} params The parameters for this event.
     * @return {Promise}
    **/
    Logger.prototype.playablePlayResumed = function (params) {
        return this.bi.log(__assign({ evid: 906 }, params));
    };
    /**
    * @typedef {Object} playablePlayRequestedParams
    * @property {string} bitrateJson - json of all bitrades ([800,1000,10000])
    * @property {string} correlationId - one view id (video_id + view_id (random smthng))
    * @property {string} customDataJson - custom data from different products
    * @property {boolean} isAutoplay - is_autoplay
    * @property {boolean} isTriggeredByUser - is_triggered_by_user
    * @property {string} product - (wix_video, wix_video_embed, wix_video_live, editor_player)
    * @property {boolean} replay - is replayed
    * @property {number} videoDuration - ms
    * @property {string} videoId - video_id (as backend) or videoUrl if not passed
    * @property {string} videoType - HLS, MP4 etc
    **/
    /**
     * Name: playable.play.requested. Evid: 901.
     * Event description: Play request.
    
     * bitrateJson - Type: string. Desc: json of all bitrades ([800,1000,10000])
     *
     * correlationId - Type: string. Desc: one view id (video_id + view_id (random smthng))
     *
     * customDataJson - Type: string. Desc: custom data from different products
     *
     * isAutoplay - Type: bool. Desc: is_autoplay
     *
     * isTriggeredByUser - Type: bool. Desc: is_triggered_by_user
     *
     * product - Type: string. Desc: (wix_video, wix_video_embed, wix_video_live, editor_player)
     *
     * replay - Type: bool. Desc: is replayed
     *
     * videoDuration - Type: numeric. Desc: ms
     *
     * videoId - Type: string. Desc: video_id (as backend) or videoUrl if not passed
     *
     * videoType - Type: string. Desc: HLS, MP4 etc
     * @param {playablePlayRequestedParams} params The parameters for this event.
     * @return {Promise}
    **/
    Logger.prototype.playablePlayRequested = function (params) {
        return this.bi.log(__assign({ evid: 901 }, params));
    };
    /**
    * @typedef {Object} playablePlayFinishedParams
    * @property {string} correlationId - one view id (video_id + view_id (random smthng))
    * @property {string} playedRange - [[0, 15], [33, 55], [100, 140]]
    * @property {string} videoId - video_id (as backend) or videoUrl if not passed
    **/
    /**
     * Name: playable.play.finished. Evid: 907.
     * Event description: playable.play.finished.
    
     * correlationId - Type: string. Desc: one view id (video_id + view_id (random smthng))
     *
     * playedRange - Type: string. Desc: [[0, 15], [33, 55], [100, 140]]
     *
     * videoId - Type: string. Desc: video_id (as backend) or videoUrl if not passed
     * @param {playablePlayFinishedParams} params The parameters for this event.
     * @return {Promise}
    **/
    Logger.prototype.playablePlayFinished = function (params) {
        return this.bi.log(__assign({ evid: 907 }, params));
    };
    /**
    * @typedef {Object} playablePlayPausedParams
    * @property {string} correlationId - one view id (video_id + view_id (random smthng))
    * @property {number} currentTimeFrame - ms
    * @property {string} playedRange - [[0, 15], [33, 55], [100, 140]]
    * @property {string} videoId - video_id (as backend) or videoUrl if not passed
    **/
    /**
     * Name: playable.play.paused. Evid: 905.
     * Event description: playable.play.paused.
    
     * correlationId - Type: string. Desc: one view id (video_id + view_id (random smthng))
     *
     * currentTimeFrame - Type: numeric. Desc: ms
     *
     * playedRange - Type: string. Desc: [[0, 15], [33, 55], [100, 140]]
     *
     * videoId - Type: string. Desc: video_id (as backend) or videoUrl if not passed
     * @param {playablePlayPausedParams} params The parameters for this event.
     * @return {Promise}
    **/
    Logger.prototype.playablePlayPaused = function (params) {
        return this.bi.log(__assign({ evid: 905 }, params));
    };
    /**
    * @typedef {Object} playablePlayAnomaliesParams
    * @property {string} anomalyName - [[0, 15], [33, 55], [100, 140]]
    * @property {string} correlationId - one view id (video_id + view_id (random smthng))
    * @property {string} videoId - video_id (as backend) or videoUrl if not passed
    **/
    /**
     * Name: playable.play.anomalies. Evid: 908.
     * Event description: playable.play.anomalies.
    
     * anomalyName - Type: string. Desc: [[0, 15], [33, 55], [100, 140]]
     *
     * correlationId - Type: string. Desc: one view id (video_id + view_id (random smthng))
     *
     * videoId - Type: string. Desc: video_id (as backend) or videoUrl if not passed
     * @param {playablePlayAnomaliesParams} params The parameters for this event.
     * @return {Promise}
    **/
    Logger.prototype.playablePlayAnomalies = function (params) {
        return this.bi.log(__assign({ evid: 908 }, params));
    };
    /**
    * @typedef {Object} playableErrorParams
    * @property {string} correlationId - one view id (video_id + view_id (random smthng))
    * @property {number} currentTimeFrame - current_time_frame
    * @property {string} errorMessage - msg
    * @property {string} errorType - error
    * @property {string} product - product
    * @property {string} videoId - video_id (as backend) or videoUrl if not passed
    * @property {string} videoType - HLS, MP4 etc
    **/
    /**
     * Name: playable.error. Evid: 909.
     * Event description: error event.
    
     * correlationId - Type: string. Desc: one view id (video_id + view_id (random smthng))
     *
     * currentTimeFrame - Type: numeric. Desc: current_time_frame
     *
     * errorMessage - Type: string. Desc: msg
     *
     * errorType - Type: string. Desc: error
     *
     * product - Type: string. Desc: product
     *
     * videoId - Type: string. Desc: video_id (as backend) or videoUrl if not passed
     *
     * videoType - Type: string. Desc: HLS, MP4 etc
     * @param {playableErrorParams} params The parameters for this event.
     * @return {Promise}
    **/
    Logger.prototype.playableError = function (params) {
        return this.bi.log(__assign({ evid: 909 }, params));
    };
    /**
    * @typedef {Object} playablePlayAbortedParams
    * @property {string} correlationId - one view id (video_id + view_id (random smthng))
    * @property {string} reasonMessage - reason
    * @property {string} videoId - video_id (as backend) or videoUrl if not passed
    **/
    /**
     * Name: playable.play.aborted. Evid: 902.
     * Event description: Playable.play.aborted (after aborted you should change the correlation id).
    
     * correlationId - Type: string. Desc: one view id (video_id + view_id (random smthng))
     *
     * reasonMessage - Type: string. Desc: reason
     *
     * videoId - Type: string. Desc: video_id (as backend) or videoUrl if not passed
     * @param {playablePlayAbortedParams} params The parameters for this event.
     * @return {Promise}
    **/
    Logger.prototype.playablePlayAborted = function (params) {
        return this.bi.log(__assign({ evid: 902 }, params));
    };
    return Logger;
}());
exports.Logger = Logger;
exports.default = init;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 513:
/*!*********************************************!*\
  !*** ./components/VideoPlayer/bi/events.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var biEvents = exports.biEvents = {
  PLAY_REQUESTED: {
    eventId: 397,
    adapter: 'ugc-viewer',
    params: {
      playSource: 'playSource',
      videoId: 'videoId',
      videoSource: 'videoSource',
      site_id: 'site_id'
    }
  },
  PLAY_START: {
    eventId: 398,
    adapter: 'ugc-viewer',
    params: {
      playSource: 'playSource',
      videoId: 'videoId',
      videoSource: 'videoSource',
      site_id: 'site_id'
    }
  },
  PLAY_DONE: {
    eventId: 399,
    adapter: 'ugc-viewer',
    params: {
      videoId: 'videoId',
      videoSource: 'videoSource',
      site_id: 'site_id'
    }
  },
  ERROR: {
    eventId: 420,
    adapter: 'ugc-viewer',
    params: {
      errorMessage: 'errorMessage',
      playSource: 'playSource',
      videoId: 'videoId',
      videoSource: 'videoSource',
      site_id: 'site_id'
    }
  }
};

/***/ }),

/***/ 514:
/*!******************************************************************!*\
  !*** ./components/VideoPlayer/behaviors/videoPlayerBehaviors.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var videoPlayerBehaviors = exports.videoPlayerBehaviors = {
  togglePlay: { methodName: 'togglePlay' },
  play: { methodName: 'play' },
  playPreview: { methodName: 'play' },
  pause: { methodName: 'pause' },
  stop: { methodName: 'stop' },
  mute: { methodName: 'mute' },
  unmute: { methodName: 'unmute' },
  seek: { methodName: 'seek', params: ['time'] },
  setVolume: { methodName: 'setVolume', params: ['volume'] }
};

/***/ }),

/***/ 515:
/*!**************************************************!*\
  !*** ./components/VideoPlayer/playButtonIcon.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playButtonIcon = undefined;

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var playButtonIcon = exports.playButtonIcon = _react2.default.createElement(
  "svg",
  { role: "presentation", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 36 36", preserveAspectRatio: "xMidYMin slice", width: "100%" },
  _react2.default.createElement(
    "g",
    { fill: "none", fillRule: "evenodd" },
    _react2.default.createElement("circle", { cx: "18", cy: "18", r: "17", stroke: "#fff", strokeWidth: "2" }),
    _react2.default.createElement("path", { fill: "#fff", d: "M23.935 17.708l-10.313 6.033V11.676z" })
  )
);

/***/ }),

/***/ 90:
/*!******************************************!*\
  !*** ../node_modules/lodash/isString.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! lodash */ 7).isString

/***/ }),

/***/ 91:
/*!**************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/video/constants.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENTS = {
    PLAYING: 'playing',
    PAUSED: 'paused',
    ENDED: 'ended',
};
exports.PROGRESS_INTERVAL = 1000;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 92:
/*!******************************************!*\
  !*** ../node_modules/lodash/uniqueId.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! lodash */ 7).uniqueId

/***/ })

}]);
//# sourceMappingURL=wixui.VideoPlayer.chunk.js.map