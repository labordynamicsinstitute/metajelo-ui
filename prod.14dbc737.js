// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"J4Nk":[function(require,module,exports) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
'use strict';
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
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
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
},{}],"awqi":[function(require,module,exports) {
/** @license React v16.12.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

var h = require("object-assign"),
    n = "function" === typeof Symbol && Symbol.for,
    p = n ? Symbol.for("react.element") : 60103,
    q = n ? Symbol.for("react.portal") : 60106,
    r = n ? Symbol.for("react.fragment") : 60107,
    t = n ? Symbol.for("react.strict_mode") : 60108,
    u = n ? Symbol.for("react.profiler") : 60114,
    v = n ? Symbol.for("react.provider") : 60109,
    w = n ? Symbol.for("react.context") : 60110,
    x = n ? Symbol.for("react.forward_ref") : 60112,
    y = n ? Symbol.for("react.suspense") : 60113;

n && Symbol.for("react.suspense_list");
var z = n ? Symbol.for("react.memo") : 60115,
    aa = n ? Symbol.for("react.lazy") : 60116;
n && Symbol.for("react.fundamental");
n && Symbol.for("react.responder");
n && Symbol.for("react.scope");
var A = "function" === typeof Symbol && Symbol.iterator;

function B(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);

  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}

var C = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {}
},
    D = {};

function E(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = c || C;
}

E.prototype.isReactComponent = {};

E.prototype.setState = function (a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(B(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};

E.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function F() {}

F.prototype = E.prototype;

function G(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = c || C;
}

var H = G.prototype = new F();
H.constructor = G;
h(H, E.prototype);
H.isPureReactComponent = !0;
var I = {
  current: null
},
    J = {
  current: null
},
    K = Object.prototype.hasOwnProperty,
    L = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function M(a, b, c) {
  var e,
      d = {},
      g = null,
      l = null;
  if (null != b) for (e in void 0 !== b.ref && (l = b.ref), void 0 !== b.key && (g = "" + b.key), b) K.call(b, e) && !L.hasOwnProperty(e) && (d[e] = b[e]);
  var f = arguments.length - 2;
  if (1 === f) d.children = c;else if (1 < f) {
    for (var k = Array(f), m = 0; m < f; m++) k[m] = arguments[m + 2];

    d.children = k;
  }
  if (a && a.defaultProps) for (e in f = a.defaultProps, f) void 0 === d[e] && (d[e] = f[e]);
  return {
    $$typeof: p,
    type: a,
    key: g,
    ref: l,
    props: d,
    _owner: J.current
  };
}

function ba(a, b) {
  return {
    $$typeof: p,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function N(a) {
  return "object" === typeof a && null !== a && a.$$typeof === p;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var O = /\/+/g,
    P = [];

function Q(a, b, c, e) {
  if (P.length) {
    var d = P.pop();
    d.result = a;
    d.keyPrefix = b;
    d.func = c;
    d.context = e;
    d.count = 0;
    return d;
  }

  return {
    result: a,
    keyPrefix: b,
    func: c,
    context: e,
    count: 0
  };
}

function R(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > P.length && P.push(a);
}

function S(a, b, c, e) {
  var d = typeof a;
  if ("undefined" === d || "boolean" === d) a = null;
  var g = !1;
  if (null === a) g = !0;else switch (d) {
    case "string":
    case "number":
      g = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case p:
        case q:
          g = !0;
      }

  }
  if (g) return c(e, a, "" === b ? "." + T(a, 0) : b), 1;
  g = 0;
  b = "" === b ? "." : b + ":";
  if (Array.isArray(a)) for (var l = 0; l < a.length; l++) {
    d = a[l];
    var f = b + T(d, l);
    g += S(d, f, c, e);
  } else if (null === a || "object" !== typeof a ? f = null : (f = A && a[A] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), l = 0; !(d = a.next()).done;) d = d.value, f = b + T(d, l++), g += S(d, f, c, e);else if ("object" === d) throw c = "" + a, Error(B(31, "[object Object]" === c ? "object with keys {" + Object.keys(a).join(", ") + "}" : c, ""));
  return g;
}

function U(a, b, c) {
  return null == a ? 0 : S(a, "", b, c);
}

function T(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}

function ca(a, b) {
  a.func.call(a.context, b, a.count++);
}

function da(a, b, c) {
  var e = a.result,
      d = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? V(a, e, c, function (a) {
    return a;
  }) : null != a && (N(a) && (a = ba(a, d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(O, "$&/") + "/") + c)), e.push(a));
}

function V(a, b, c, e, d) {
  var g = "";
  null != c && (g = ("" + c).replace(O, "$&/") + "/");
  b = Q(b, g, e, d);
  U(a, da, b);
  R(b);
}

function W() {
  var a = I.current;
  if (null === a) throw Error(B(321));
  return a;
}

var X = {
  Children: {
    map: function (a, b, c) {
      if (null == a) return a;
      var e = [];
      V(a, e, null, b, c);
      return e;
    },
    forEach: function (a, b, c) {
      if (null == a) return a;
      b = Q(null, null, b, c);
      U(a, ca, b);
      R(b);
    },
    count: function (a) {
      return U(a, function () {
        return null;
      }, null);
    },
    toArray: function (a) {
      var b = [];
      V(a, b, null, function (a) {
        return a;
      });
      return b;
    },
    only: function (a) {
      if (!N(a)) throw Error(B(143));
      return a;
    }
  },
  createRef: function () {
    return {
      current: null
    };
  },
  Component: E,
  PureComponent: G,
  createContext: function (a, b) {
    void 0 === b && (b = null);
    a = {
      $$typeof: w,
      _calculateChangedBits: b,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    };
    a.Provider = {
      $$typeof: v,
      _context: a
    };
    return a.Consumer = a;
  },
  forwardRef: function (a) {
    return {
      $$typeof: x,
      render: a
    };
  },
  lazy: function (a) {
    return {
      $$typeof: aa,
      _ctor: a,
      _status: -1,
      _result: null
    };
  },
  memo: function (a, b) {
    return {
      $$typeof: z,
      type: a,
      compare: void 0 === b ? null : b
    };
  },
  useCallback: function (a, b) {
    return W().useCallback(a, b);
  },
  useContext: function (a, b) {
    return W().useContext(a, b);
  },
  useEffect: function (a, b) {
    return W().useEffect(a, b);
  },
  useImperativeHandle: function (a, b, c) {
    return W().useImperativeHandle(a, b, c);
  },
  useDebugValue: function () {},
  useLayoutEffect: function (a, b) {
    return W().useLayoutEffect(a, b);
  },
  useMemo: function (a, b) {
    return W().useMemo(a, b);
  },
  useReducer: function (a, b, c) {
    return W().useReducer(a, b, c);
  },
  useRef: function (a) {
    return W().useRef(a);
  },
  useState: function (a) {
    return W().useState(a);
  },
  Fragment: r,
  Profiler: u,
  StrictMode: t,
  Suspense: y,
  createElement: M,
  cloneElement: function (a, b, c) {
    if (null === a || void 0 === a) throw Error(B(267, a));
    var e = h({}, a.props),
        d = a.key,
        g = a.ref,
        l = a._owner;

    if (null != b) {
      void 0 !== b.ref && (g = b.ref, l = J.current);
      void 0 !== b.key && (d = "" + b.key);
      if (a.type && a.type.defaultProps) var f = a.type.defaultProps;

      for (k in b) K.call(b, k) && !L.hasOwnProperty(k) && (e[k] = void 0 === b[k] && void 0 !== f ? f[k] : b[k]);
    }

    var k = arguments.length - 2;
    if (1 === k) e.children = c;else if (1 < k) {
      f = Array(k);

      for (var m = 0; m < k; m++) f[m] = arguments[m + 2];

      e.children = f;
    }
    return {
      $$typeof: p,
      type: a.type,
      key: d,
      ref: g,
      props: e,
      _owner: l
    };
  },
  createFactory: function (a) {
    var b = M.bind(null, a);
    b.type = a;
    return b;
  },
  isValidElement: N,
  version: "16.12.0",
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentDispatcher: I,
    ReactCurrentBatchConfig: {
      suspense: null
    },
    ReactCurrentOwner: J,
    IsSomeRendererActing: {
      current: !1
    },
    assign: h
  }
},
    Y = {
  default: X
},
    Z = Y && X || Y;
module.exports = Z.default || Z;
},{"object-assign":"J4Nk"}],"n8MK":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}
},{"./cjs/react.production.min.js":"awqi"}],"IvPb":[function(require,module,exports) {
/** @license React v0.18.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var f,g,h,k,l;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0))};g=function(a,b){q=setTimeout(a,b)};h=function(){clearTimeout(q)};k=function(){return!1};l=exports.unstable_forceFrameRate=function(){}}else{var w=window.performance,x=window.Date,
y=window.setTimeout,z=window.clearTimeout;if("undefined"!==typeof console){var A=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"===
typeof w&&"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else{var B=x.now();exports.unstable_now=function(){return x.now()-B}}var C=!1,D=null,E=-1,F=5,G=0;k=function(){return exports.unstable_now()>=G};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1E3/a):5};var H=new MessageChannel,I=H.port2;H.port1.onmessage=
function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null)}catch(b){throw I.postMessage(null),b;}}else C=!1};f=function(a){D=a;C||(C=!0,I.postMessage(null))};g=function(a,b){E=y(function(){a(exports.unstable_now())},b)};h=function(){z(E);E=-1}}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=Math.floor((c-1)/2),e=a[d];if(void 0!==e&&0<K(e,b))a[d]=b,a[c]=e,c=d;else break a}}function L(a){a=a[0];return void 0===a?null:a}
function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>K(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;
function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else if(b.startTime<=a)M(O),b.sortIndex=b.expirationTime,J(N,b);else break;b=L(O)}}function W(a){U=!1;V(a);if(!T)if(null!==L(N))T=!0,f(X);else{var b=L(O);null!==b&&g(W,b.startTime-a)}}
function X(a,b){T=!1;U&&(U=!1,h());S=!0;var c=R;try{V(b);for(Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null;R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?Q.callback=e:Q===L(N)&&M(N);V(b)}else M(N);Q=L(N)}if(null!==Q)var m=!0;else{var n=L(O);null!==n&&g(W,n.startTime-b);m=!1}return m}finally{Q=null,R=c,S=!1}}
function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var Z=l;exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=R;R=a;try{return b()}finally{R=c}};
exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R}var c=R;R=b;try{return a()}finally{R=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),e=d;c=e+c;a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,f(X)));return a};exports.unstable_cancelCallback=function(a){a.callback=null};
exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments)}finally{R=c}}};exports.unstable_getCurrentPriorityLevel=function(){return R};exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k()};exports.unstable_requestPaint=Z;exports.unstable_continueExecution=function(){T||S||(T=!0,f(X))};
exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return L(N)};exports.unstable_Profiling=null;

},{}],"MDSO":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/scheduler.production.min.js');
} else {
  module.exports = require('./cjs/scheduler.development.js');
}
},{"./cjs/scheduler.production.min.js":"IvPb"}],"i17t":[function(require,module,exports) {
/** @license React v16.12.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
'use strict';var aa=require("react"),n=require("object-assign"),q=require("scheduler");function u(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(u(227));var ba=null,ca={};
function da(){if(ba)for(var a in ca){var b=ca[a],c=ba.indexOf(a);if(!(-1<c))throw Error(u(96,a));if(!ea[c]){if(!b.extractEvents)throw Error(u(97,a));ea[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(fa.hasOwnProperty(h))throw Error(u(99,h));fa[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ha(k[e],g,h);e=!0}else f.registrationName?(ha(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(u(98,d,a));}}}}
function ha(a,b,c){if(ia[a])throw Error(u(100,a));ia[a]=b;ja[a]=b.eventTypes[c].dependencies}var ea=[],fa={},ia={},ja={};function ka(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var la=!1,ma=null,na=!1,oa=null,pa={onError:function(a){la=!0;ma=a}};function qa(a,b,c,d,e,f,g,h,k){la=!1;ma=null;ka.apply(pa,arguments)}
function ra(a,b,c,d,e,f,g,h,k){qa.apply(this,arguments);if(la){if(la){var l=ma;la=!1;ma=null}else throw Error(u(198));na||(na=!0,oa=l)}}var sa=null,ua=null,va=null;function wa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=va(c);ra(d,b,void 0,a);a.currentTarget=null}function xa(a,b){if(null==b)throw Error(u(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function ya(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var za=null;function Aa(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)wa(a,b[d],c[d]);else b&&wa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function Ba(a){null!==a&&(za=xa(za,a));a=za;za=null;if(a){ya(a,Aa);if(za)throw Error(u(95));if(na)throw a=oa,na=!1,oa=null,a;}}
var Ca={injectEventPluginOrder:function(a){if(ba)throw Error(u(101));ba=Array.prototype.slice.call(a);da()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!ca.hasOwnProperty(c)||ca[c]!==d){if(ca[c])throw Error(u(102,c));ca[c]=d;b=!0}}b&&da()}};
function Da(a,b){var c=a.stateNode;if(!c)return null;var d=sa(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw Error(u(231,b,typeof c));
return c}var Ea=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Ea.hasOwnProperty("ReactCurrentDispatcher")||(Ea.ReactCurrentDispatcher={current:null});Ea.hasOwnProperty("ReactCurrentBatchConfig")||(Ea.ReactCurrentBatchConfig={suspense:null});
var Fa=/^(.*)[\\\/]/,w="function"===typeof Symbol&&Symbol.for,Ga=w?Symbol.for("react.element"):60103,Ha=w?Symbol.for("react.portal"):60106,Ia=w?Symbol.for("react.fragment"):60107,Ja=w?Symbol.for("react.strict_mode"):60108,Ka=w?Symbol.for("react.profiler"):60114,La=w?Symbol.for("react.provider"):60109,Ma=w?Symbol.for("react.context"):60110,Na=w?Symbol.for("react.concurrent_mode"):60111,Oa=w?Symbol.for("react.forward_ref"):60112,Pa=w?Symbol.for("react.suspense"):60113,Qa=w?Symbol.for("react.suspense_list"):
60120,Ra=w?Symbol.for("react.memo"):60115,Sa=w?Symbol.for("react.lazy"):60116;w&&Symbol.for("react.fundamental");w&&Symbol.for("react.responder");w&&Symbol.for("react.scope");var Ta="function"===typeof Symbol&&Symbol.iterator;function Ua(a){if(null===a||"object"!==typeof a)return null;a=Ta&&a[Ta]||a["@@iterator"];return"function"===typeof a?a:null}
function Va(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}}
function Wa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Ia:return"Fragment";case Ha:return"Portal";case Ka:return"Profiler";case Ja:return"StrictMode";case Pa:return"Suspense";case Qa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ma:return"Context.Consumer";case La:return"Context.Provider";case Oa:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case Ra:return Wa(a.type);case Sa:if(a=1===a._status?a._result:null)return Wa(a)}return null}function Xa(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=Wa(a.type);c=null;d&&(c=Wa(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Fa,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
var Ya=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Za=null,$a=null,ab=null;function bb(a){if(a=ua(a)){if("function"!==typeof Za)throw Error(u(280));var b=sa(a.stateNode);Za(a.stateNode,a.type,b)}}function cb(a){$a?ab?ab.push(a):ab=[a]:$a=a}function db(){if($a){var a=$a,b=ab;ab=$a=null;bb(a);if(b)for(a=0;a<b.length;a++)bb(b[a])}}function eb(a,b){return a(b)}function fb(a,b,c,d){return a(b,c,d)}function gb(){}
var hb=eb,ib=!1,jb=!1;function kb(){if(null!==$a||null!==ab)gb(),db()}new Map;var lb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mb=Object.prototype.hasOwnProperty,nb={},ob={};
function pb(a){if(mb.call(ob,a))return!0;if(mb.call(nb,a))return!1;if(lb.test(a))return ob[a]=!0;nb[a]=!0;return!1}function qb(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function rb(a,b,c,d){if(null===b||"undefined"===typeof b||qb(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function B(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1)});var sb=/[\-:]([a-z])/g;function tb(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(sb,
tb);D[b]=new B(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(sb,tb);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(sb,tb);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1)});
D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0)});function ub(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}
function vb(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(rb(b,c,e,d)&&(c=null),d||null===e?pb(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function wb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function xb(a){var b=wb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function yb(a){a._valueTracker||(a._valueTracker=xb(a))}function zb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=wb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Ab(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Bb(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=ub(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Cb(a,b){b=b.checked;null!=b&&vb(a,"checked",b,!1)}
function Eb(a,b){Cb(a,b);var c=ub(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Fb(a,b.type,c):b.hasOwnProperty("defaultValue")&&Fb(a,b.type,ub(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Gb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Fb(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Hb(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Ib(a,b){a=n({children:void 0},b);if(b=Hb(b.children))a.children=b;return a}
function Jb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+ub(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Kb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(u(91));return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Lb(a,b){var c=b.value;if(null==c){c=b.defaultValue;b=b.children;if(null!=b){if(null!=c)throw Error(u(92));if(Array.isArray(b)){if(!(1>=b.length))throw Error(u(93));b=b[0]}c=b}null==c&&(c="")}a._wrapperState={initialValue:ub(c)}}
function Mb(a,b){var c=ub(b.value),d=ub(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Nb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var Ob={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Pb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Pb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Rb,Sb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Ob.svg||"innerHTML"in a)a.innerHTML=b;else{Rb=Rb||document.createElement("div");Rb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Rb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Tb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}function Ub(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Vb={animationend:Ub("Animation","AnimationEnd"),animationiteration:Ub("Animation","AnimationIteration"),animationstart:Ub("Animation","AnimationStart"),transitionend:Ub("Transition","TransitionEnd")},Wb={},Xb={};
Ya&&(Xb=document.createElement("div").style,"AnimationEvent"in window||(delete Vb.animationend.animation,delete Vb.animationiteration.animation,delete Vb.animationstart.animation),"TransitionEvent"in window||delete Vb.transitionend.transition);function Yb(a){if(Wb[a])return Wb[a];if(!Vb[a])return a;var b=Vb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Xb)return Wb[a]=b[c];return a}var Zb=Yb("animationend"),$b=Yb("animationiteration"),ac=Yb("animationstart"),bc=Yb("transitionend"),cc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
function ec(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function fc(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function gc(a){if(ec(a)!==a)throw Error(u(188));}
function hc(a){var b=a.alternate;if(!b){b=ec(a);if(null===b)throw Error(u(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return gc(e),a;if(f===d)return gc(e),b;f=f.sibling}throw Error(u(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(u(189));}}if(c.alternate!==d)throw Error(u(190));}if(3!==c.tag)throw Error(u(188));return c.stateNode.current===c?a:b}function ic(a){a=hc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var jc,kc,lc,mc=!1,nc=[],oc=null,pc=null,qc=null,rc=new Map,sc=new Map,tc=[],uc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),vc="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
function wc(a){var b=xc(a);uc.forEach(function(c){yc(c,a,b)});vc.forEach(function(c){yc(c,a,b)})}function zc(a,b,c,d){return{blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:d}}function Ac(a,b){switch(a){case "focus":case "blur":oc=null;break;case "dragenter":case "dragleave":pc=null;break;case "mouseover":case "mouseout":qc=null;break;case "pointerover":case "pointerout":rc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":sc.delete(b.pointerId)}}
function Bc(a,b,c,d,e){if(null===a||a.nativeEvent!==e)return a=zc(b,c,d,e),null!==b&&(b=Cc(b),null!==b&&kc(b)),a;a.eventSystemFlags|=d;return a}function Dc(a,b,c,d){switch(b){case "focus":return oc=Bc(oc,a,b,c,d),!0;case "dragenter":return pc=Bc(pc,a,b,c,d),!0;case "mouseover":return qc=Bc(qc,a,b,c,d),!0;case "pointerover":var e=d.pointerId;rc.set(e,Bc(rc.get(e)||null,a,b,c,d));return!0;case "gotpointercapture":return e=d.pointerId,sc.set(e,Bc(sc.get(e)||null,a,b,c,d)),!0}return!1}
function Ec(a){var b=Fc(a.target);if(null!==b){var c=ec(b);if(null!==c)if(b=c.tag,13===b){if(b=fc(c),null!==b){a.blockedOn=b;q.unstable_runWithPriority(a.priority,function(){lc(c)});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function Gc(a){if(null!==a.blockedOn)return!1;var b=Hc(a.topLevelType,a.eventSystemFlags,a.nativeEvent);if(null!==b){var c=Cc(b);null!==c&&kc(c);a.blockedOn=b;return!1}return!0}
function Ic(a,b,c){Gc(a)&&c.delete(b)}function Jc(){for(mc=!1;0<nc.length;){var a=nc[0];if(null!==a.blockedOn){a=Cc(a.blockedOn);null!==a&&jc(a);break}var b=Hc(a.topLevelType,a.eventSystemFlags,a.nativeEvent);null!==b?a.blockedOn=b:nc.shift()}null!==oc&&Gc(oc)&&(oc=null);null!==pc&&Gc(pc)&&(pc=null);null!==qc&&Gc(qc)&&(qc=null);rc.forEach(Ic);sc.forEach(Ic)}function Kc(a,b){a.blockedOn===b&&(a.blockedOn=null,mc||(mc=!0,q.unstable_scheduleCallback(q.unstable_NormalPriority,Jc)))}
function Lc(a){function b(b){return Kc(b,a)}if(0<nc.length){Kc(nc[0],a);for(var c=1;c<nc.length;c++){var d=nc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==oc&&Kc(oc,a);null!==pc&&Kc(pc,a);null!==qc&&Kc(qc,a);rc.forEach(b);sc.forEach(b);for(c=0;c<tc.length;c++)d=tc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<tc.length&&(c=tc[0],null===c.blockedOn);)Ec(c),null===c.blockedOn&&tc.shift()}
function Mc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Nc(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Oc(a,b,c){if(b=Da(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a)}
function Pc(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Nc(b);for(b=c.length;0<b--;)Oc(c[b],"captured",a);for(b=0;b<c.length;b++)Oc(c[b],"bubbled",a)}}function Qc(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Da(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a))}function Rc(a){a&&a.dispatchConfig.registrationName&&Qc(a._targetInst,null,a)}
function Sc(a){ya(a,Pc)}function Tc(){return!0}function Uc(){return!1}function E(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?Tc:Uc;this.isPropagationStopped=Uc;return this}
n(E.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=Tc)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=Tc)},persist:function(){this.isPersistent=Tc},isPersistent:Uc,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=Uc;this._dispatchInstances=this._dispatchListeners=null}});E.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
E.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;Vc(c);return c};Vc(E);function Wc(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function Xc(a){if(!(a instanceof this))throw Error(u(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function Vc(a){a.eventPool=[];a.getPooled=Wc;a.release=Xc}var Yc=E.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Zc=E.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),$c=E.extend({view:null,detail:null}),ad=$c.extend({relatedTarget:null});
function bd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var cd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ed={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=ed[a])?!!b[a]:!1}function hd(){return gd}
var id=$c.extend({key:function(a){if(a.key){var b=cd[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=bd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?dd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:hd,charCode:function(a){return"keypress"===a.type?bd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?bd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),jd=0,kd=0,ld=!1,md=!1,nd=$c.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:hd,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=jd;jd=a.screenX;return ld?"mousemove"===a.type?a.screenX-
b:0:(ld=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;var b=kd;kd=a.screenY;return md?"mousemove"===a.type?a.screenY-b:0:(md=!0,0)}}),od=nd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),pd=nd.extend({dataTransfer:null}),qd=$c.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:hd}),rd=E.extend({propertyName:null,
elapsedTime:null,pseudoElement:null}),sd=nd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),td=[["blur","blur",0],["cancel","cancel",0],["click","click",0],["close","close",0],["contextmenu","contextMenu",0],["copy","copy",0],["cut","cut",0],["auxclick","auxClick",0],["dblclick","doubleClick",0],["dragend","dragEnd",
0],["dragstart","dragStart",0],["drop","drop",0],["focus","focus",0],["input","input",0],["invalid","invalid",0],["keydown","keyDown",0],["keypress","keyPress",0],["keyup","keyUp",0],["mousedown","mouseDown",0],["mouseup","mouseUp",0],["paste","paste",0],["pause","pause",0],["play","play",0],["pointercancel","pointerCancel",0],["pointerdown","pointerDown",0],["pointerup","pointerUp",0],["ratechange","rateChange",0],["reset","reset",0],["seeked","seeked",0],["submit","submit",0],["touchcancel","touchCancel",
0],["touchend","touchEnd",0],["touchstart","touchStart",0],["volumechange","volumeChange",0],["drag","drag",1],["dragenter","dragEnter",1],["dragexit","dragExit",1],["dragleave","dragLeave",1],["dragover","dragOver",1],["mousemove","mouseMove",1],["mouseout","mouseOut",1],["mouseover","mouseOver",1],["pointermove","pointerMove",1],["pointerout","pointerOut",1],["pointerover","pointerOver",1],["scroll","scroll",1],["toggle","toggle",1],["touchmove","touchMove",1],["wheel","wheel",1],["abort","abort",
2],[Zb,"animationEnd",2],[$b,"animationIteration",2],[ac,"animationStart",2],["canplay","canPlay",2],["canplaythrough","canPlayThrough",2],["durationchange","durationChange",2],["emptied","emptied",2],["encrypted","encrypted",2],["ended","ended",2],["error","error",2],["gotpointercapture","gotPointerCapture",2],["load","load",2],["loadeddata","loadedData",2],["loadedmetadata","loadedMetadata",2],["loadstart","loadStart",2],["lostpointercapture","lostPointerCapture",2],["playing","playing",2],["progress",
"progress",2],["seeking","seeking",2],["stalled","stalled",2],["suspend","suspend",2],["timeupdate","timeUpdate",2],[bc,"transitionEnd",2],["waiting","waiting",2]],ud={},vd={},wd=0;for(;wd<td.length;wd++){var yd=td[wd],zd=yd[0],Ad=yd[1],Bd=yd[2],Cd="on"+(Ad[0].toUpperCase()+Ad.slice(1)),Dd={phasedRegistrationNames:{bubbled:Cd,captured:Cd+"Capture"},dependencies:[zd],eventPriority:Bd};ud[Ad]=Dd;vd[zd]=Dd}
var Ed={eventTypes:ud,getEventPriority:function(a){a=vd[a];return void 0!==a?a.eventPriority:2},extractEvents:function(a,b,c,d){var e=vd[a];if(!e)return null;switch(a){case "keypress":if(0===bd(c))return null;case "keydown":case "keyup":a=id;break;case "blur":case "focus":a=ad;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=nd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
pd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=qd;break;case Zb:case $b:case ac:a=Yc;break;case bc:a=rd;break;case "scroll":a=$c;break;case "wheel":a=sd;break;case "copy":case "cut":case "paste":a=Zc;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=od;break;default:a=E}b=a.getPooled(e,b,c,d);Sc(b);return b}},Fd=q.unstable_UserBlockingPriority,
Gd=q.unstable_runWithPriority,Hd=Ed.getEventPriority,Id=10,Jd=[];
function Kd(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else{for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=Fc(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Mc(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=a.eventSystemFlags,h=null,k=0;k<ea.length;k++){var l=ea[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=xa(h,l))}Ba(h)}}
var Ld=!0;function F(a,b){Md(b,a,!1)}function Md(a,b,c){switch(Hd(b)){case 0:var d=Nd.bind(null,b,1);break;case 1:d=Od.bind(null,b,1);break;default:d=Pd.bind(null,b,1)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function Nd(a,b,c){ib||gb();var d=Pd,e=ib;ib=!0;try{fb(d,a,b,c)}finally{(ib=e)||kb()}}function Od(a,b,c){Gd(Fd,Pd.bind(null,a,b,c))}
function Qd(a,b,c,d){if(Jd.length){var e=Jd.pop();e.topLevelType=a;e.eventSystemFlags=b;e.nativeEvent=c;e.targetInst=d;a=e}else a={topLevelType:a,eventSystemFlags:b,nativeEvent:c,targetInst:d,ancestors:[]};try{if(b=Kd,c=a,jb)b(c,void 0);else{jb=!0;try{hb(b,c,void 0)}finally{jb=!1,kb()}}}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,Jd.length<Id&&Jd.push(a)}}
function Pd(a,b,c){if(Ld)if(0<nc.length&&-1<uc.indexOf(a))a=zc(null,a,b,c),nc.push(a);else{var d=Hc(a,b,c);null===d?Ac(a,c):-1<uc.indexOf(a)?(a=zc(d,a,b,c),nc.push(a)):Dc(d,a,b,c)||(Ac(a,c),Qd(a,b,c,null))}}function Hc(a,b,c){var d=Mc(c);d=Fc(d);if(null!==d){var e=ec(d);if(null===e)d=null;else{var f=e.tag;if(13===f){d=fc(e);if(null!==d)return d;d=null}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;d=null}else e!==d&&(d=null)}}Qd(a,b,c,d);return null}
function Rd(a){if(!Ya)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}var Sd=new ("function"===typeof WeakMap?WeakMap:Map);function xc(a){var b=Sd.get(a);void 0===b&&(b=new Set,Sd.set(a,b));return b}
function yc(a,b,c){if(!c.has(a)){switch(a){case "scroll":Md(b,"scroll",!0);break;case "focus":case "blur":Md(b,"focus",!0);Md(b,"blur",!0);c.add("blur");c.add("focus");break;case "cancel":case "close":Rd(a)&&Md(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===cc.indexOf(a)&&F(a,b)}c.add(a)}}
var Td={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ud=["Webkit","ms","Moz","O"];Object.keys(Td).forEach(function(a){Ud.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Td[b]=Td[a]})});function Vd(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||Td.hasOwnProperty(a)&&Td[a]?(""+b).trim():b+"px"}
function Wd(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=Vd(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var Xd=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function Yd(a,b){if(b){if(Xd[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(u(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(u(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(u(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(u(62,""));}}
function Zd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}function $d(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=xc(a);b=ja[b];for(var d=0;d<b.length;d++)yc(b[d],a,c)}function ae(){}
function be(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ce(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function de(a,b){var c=ce(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=ce(c)}}
function ee(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?ee(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function fe(){for(var a=window,b=be();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=be(a.document)}return b}
function ge(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}var he="$",ie="/$",je="$?",ke="$!",le=null,me=null;function ne(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function oe(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var pe="function"===typeof setTimeout?setTimeout:void 0,qe="function"===typeof clearTimeout?clearTimeout:void 0;function re(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}
function se(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===he||c===ke||c===je){if(0===b)return a;b--}else c===ie&&b++}a=a.previousSibling}return null}var te=Math.random().toString(36).slice(2),ue="__reactInternalInstance$"+te,ve="__reactEventHandlers$"+te,we="__reactContainere$"+te;
function Fc(a){var b=a[ue];if(b)return b;for(var c=a.parentNode;c;){if(b=c[we]||c[ue]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=se(a);null!==a;){if(c=a[ue])return c;a=se(a)}return b}a=c;c=a.parentNode}return null}function Cc(a){a=a[ue]||a[we];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function xe(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(u(33));}function ye(a){return a[ve]||null}var ze=null,Ae=null,Be=null;
function Ce(){if(Be)return Be;var a,b=Ae,c=b.length,d,e="value"in ze?ze.value:ze.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return Be=e.slice(a,1<d?1-d:void 0)}var De=E.extend({data:null}),Ee=E.extend({data:null}),Fe=[9,13,27,32],Ge=Ya&&"CompositionEvent"in window,He=null;Ya&&"documentMode"in document&&(He=document.documentMode);
var Ie=Ya&&"TextEvent"in window&&!He,Je=Ya&&(!Ge||He&&8<He&&11>=He),Ke=String.fromCharCode(32),Le={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Me=!1;
function Ne(a,b){switch(a){case "keyup":return-1!==Fe.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function Oe(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var Pe=!1;function Qe(a,b){switch(a){case "compositionend":return Oe(b);case "keypress":if(32!==b.which)return null;Me=!0;return Ke;case "textInput":return a=b.data,a===Ke&&Me?null:a;default:return null}}
function Re(a,b){if(Pe)return"compositionend"===a||!Ge&&Ne(a,b)?(a=Ce(),Be=Ae=ze=null,Pe=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return Je&&"ko"!==b.locale?null:b.data;default:return null}}
var Se={eventTypes:Le,extractEvents:function(a,b,c,d){var e;if(Ge)b:{switch(a){case "compositionstart":var f=Le.compositionStart;break b;case "compositionend":f=Le.compositionEnd;break b;case "compositionupdate":f=Le.compositionUpdate;break b}f=void 0}else Pe?Ne(a,c)&&(f=Le.compositionEnd):"keydown"===a&&229===c.keyCode&&(f=Le.compositionStart);f?(Je&&"ko"!==c.locale&&(Pe||f!==Le.compositionStart?f===Le.compositionEnd&&Pe&&(e=Ce()):(ze=d,Ae="value"in ze?ze.value:ze.textContent,Pe=!0)),f=De.getPooled(f,
b,c,d),e?f.data=e:(e=Oe(c),null!==e&&(f.data=e)),Sc(f),e=f):e=null;(a=Ie?Qe(a,c):Re(a,c))?(b=Ee.getPooled(Le.beforeInput,b,c,d),b.data=a,Sc(b)):b=null;return null===e?b:null===b?e:[e,b]}},Te={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ue(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Te[a.type]:"textarea"===b?!0:!1}
var Ve={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function We(a,b,c){a=E.getPooled(Ve.change,a,b,c);a.type="change";cb(c);Sc(a);return a}var Xe=null,Ye=null;function Ze(a){Ba(a)}function $e(a){var b=xe(a);if(zb(b))return a}function af(a,b){if("change"===a)return b}var bf=!1;Ya&&(bf=Rd("input")&&(!document.documentMode||9<document.documentMode));
function cf(){Xe&&(Xe.detachEvent("onpropertychange",df),Ye=Xe=null)}function df(a){if("value"===a.propertyName&&$e(Ye))if(a=We(Ye,a,Mc(a)),ib)Ba(a);else{ib=!0;try{eb(Ze,a)}finally{ib=!1,kb()}}}function ef(a,b,c){"focus"===a?(cf(),Xe=b,Ye=c,Xe.attachEvent("onpropertychange",df)):"blur"===a&&cf()}function ff(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return $e(Ye)}function gf(a,b){if("click"===a)return $e(b)}function hf(a,b){if("input"===a||"change"===a)return $e(b)}
var jf={eventTypes:Ve,_isInputEventSupported:bf,extractEvents:function(a,b,c,d){var e=b?xe(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=af;else if(Ue(e))if(bf)g=hf;else{g=ff;var h=ef}else(f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=gf);if(g&&(g=g(a,b)))return We(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Fb(e,"number",e.value)}},kf={mouseEnter:{registrationName:"onMouseEnter",
dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},lf,mf={eventTypes:kf,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;
e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?Fc(b):null,null!==b&&(f=ec(b),b!==f||5!==b.tag&&6!==b.tag))b=null}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===a){var h=nd;var k=kf.mouseLeave;var l=kf.mouseEnter;var m="mouse"}else if("pointerout"===a||"pointerover"===a)h=od,k=kf.pointerLeave,l=kf.pointerEnter,m="pointer";a=null==g?e:xe(g);e=null==b?e:xe(b);k=h.getPooled(k,g,c,d);k.type=m+"leave";k.target=
a;k.relatedTarget=e;d=h.getPooled(l,b,c,d);d.type=m+"enter";d.target=e;d.relatedTarget=a;h=g;m=b;if(h&&m)a:{l=h;a=m;g=0;for(b=l;b;b=Nc(b))g++;b=0;for(e=a;e;e=Nc(e))b++;for(;0<g-b;)l=Nc(l),g--;for(;0<b-g;)a=Nc(a),b--;for(;g--;){if(l===a||l===a.alternate)break a;l=Nc(l);a=Nc(a)}l=null}else l=null;a=l;for(l=[];h&&h!==a;){g=h.alternate;if(null!==g&&g===a)break;l.push(h);h=Nc(h)}for(h=[];m&&m!==a;){g=m.alternate;if(null!==g&&g===a)break;h.push(m);m=Nc(m)}for(m=0;m<l.length;m++)Qc(l[m],"bubbled",k);for(m=
h.length;0<m--;)Qc(h[m],"captured",d);if(c===lf)return lf=null,[k];lf=c;return[k,d]}};function nf(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var of="function"===typeof Object.is?Object.is:nf,pf=Object.prototype.hasOwnProperty;function qf(a,b){if(of(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!pf.call(b,c[d])||!of(a[c[d]],b[c[d]]))return!1;return!0}
var rf=Ya&&"documentMode"in document&&11>=document.documentMode,sf={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},tf=null,uf=null,vf=null,wf=!1;
function xf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(wf||null==tf||tf!==be(c))return null;c=tf;"selectionStart"in c&&ge(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return vf&&qf(vf,c)?null:(vf=c,a=E.getPooled(sf.select,uf,a,b),a.type="select",a.target=tf,Sc(a),a)}
var yf={eventTypes:sf,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=xc(e);f=ja.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?xe(b):window;switch(a){case "focus":if(Ue(e)||"true"===e.contentEditable)tf=e,uf=b,vf=null;break;case "blur":vf=uf=tf=null;break;case "mousedown":wf=!0;break;case "contextmenu":case "mouseup":case "dragend":return wf=!1,xf(c,d);case "selectionchange":if(rf)break;
case "keydown":case "keyup":return xf(c,d)}return null}};Ca.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));var zf=Cc;sa=ye;ua=zf;va=xe;Ca.injectEventPluginsByName({SimpleEventPlugin:Ed,EnterLeaveEventPlugin:mf,ChangeEventPlugin:jf,SelectEventPlugin:yf,BeforeInputEventPlugin:Se});new Set;var Af=[],Bf=-1;function G(a){0>Bf||(a.current=Af[Bf],Af[Bf]=null,Bf--)}
function I(a,b){Bf++;Af[Bf]=a.current;a.current=b}var Cf={},J={current:Cf},K={current:!1},Df=Cf;function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L(a){a=a.childContextTypes;return null!==a&&void 0!==a}
function Ff(a){G(K,a);G(J,a)}function Gf(a){G(K,a);G(J,a)}function Hf(a,b,c){if(J.current!==Cf)throw Error(u(168));I(J,b,a);I(K,c,a)}function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(u(108,Wa(b)||"Unknown",e));return n({},c,{},d)}function Jf(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||Cf;Df=J.current;I(J,b,a);I(K,K.current,a);return!0}
function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(u(169));c?(b=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=b,G(K,a),G(J,a),I(J,b,a)):G(K,a);I(K,c,a)}
var Lf=q.unstable_runWithPriority,Mf=q.unstable_scheduleCallback,Nf=q.unstable_cancelCallback,Of=q.unstable_shouldYield,Pf=q.unstable_requestPaint,Qf=q.unstable_now,Rf=q.unstable_getCurrentPriorityLevel,Sf=q.unstable_ImmediatePriority,Tf=q.unstable_UserBlockingPriority,Uf=q.unstable_NormalPriority,Vf=q.unstable_LowPriority,Wf=q.unstable_IdlePriority,Xf={},Yf=void 0!==Pf?Pf:function(){},Zf=null,$f=null,ag=!1,bg=Qf(),cg=1E4>bg?Qf:function(){return Qf()-bg};
function dg(){switch(Rf()){case Sf:return 99;case Tf:return 98;case Uf:return 97;case Vf:return 96;case Wf:return 95;default:throw Error(u(332));}}function eg(a){switch(a){case 99:return Sf;case 98:return Tf;case 97:return Uf;case 96:return Vf;case 95:return Wf;default:throw Error(u(332));}}function fg(a,b){a=eg(a);return Lf(a,b)}function gg(a,b,c){a=eg(a);return Mf(a,b,c)}function hg(a){null===Zf?(Zf=[a],$f=Mf(Sf,ig)):Zf.push(a);return Xf}function jg(){if(null!==$f){var a=$f;$f=null;Nf(a)}ig()}
function ig(){if(!ag&&null!==Zf){ag=!0;var a=0;try{var b=Zf;fg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Zf=null}catch(c){throw null!==Zf&&(Zf=Zf.slice(a+1)),Mf(Sf,jg),c;}finally{ag=!1}}}var kg=3;function lg(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function mg(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}var ng={current:null},og=null,pg=null,qg=null;function rg(){qg=pg=og=null}
function sg(a,b){var c=a.type._context;I(ng,c._currentValue,a);c._currentValue=b}function tg(a){var b=ng.current;G(ng,a);a.type._context._currentValue=b}function ug(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}
function vg(a,b){og=a;qg=pg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(wg=!0),a.firstContext=null)}function xg(a,b){if(qg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)qg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===pg){if(null===og)throw Error(u(308));pg=b;og.dependencies={expirationTime:0,firstContext:b,responders:null}}else pg=pg.next=b}return a._currentValue}var yg=!1;
function zg(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Ag(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function Bg(a,b){return{expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function Cg(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function Dg(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=zg(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=zg(a.memoizedState),e=c.updateQueue=zg(c.memoizedState)):d=a.updateQueue=Ag(e):null===e&&(e=c.updateQueue=Ag(d));null===e||d===e?Cg(d,b):null===d.lastUpdate||null===e.lastUpdate?(Cg(d,b),Cg(e,b)):(Cg(d,b),e.lastUpdate=b)}
function Eg(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=zg(a.memoizedState):Fg(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function Fg(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=Ag(b));return b}
function Gg(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-4097|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case 2:yg=!0}return d}
function Hg(a,b,c,d,e){yg=!1;b=Fg(a,b);for(var f=b.baseState,g=null,h=0,k=b.firstUpdate,l=f;null!==k;){var m=k.expirationTime;m<e?(null===g&&(g=k,f=l),h<m&&(h=m)):(Ig(m,k.suspenseConfig),l=Gg(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k)));k=k.next}m=null;for(k=b.firstCapturedUpdate;null!==k;){var C=k.expirationTime;C<e?(null===m&&(m=k,null===g&&(f=l)),h<C&&(h=C)):(l=Gg(a,b,k,l,c,d),null!==
k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k)));k=k.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=l);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;Jg(h);a.expirationTime=h;a.memoizedState=l}
function Kg(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);Lg(b.firstEffect,c);b.firstEffect=b.lastEffect=null;Lg(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function Lg(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;if("function"!==typeof c)throw Error(u(191,c));c.call(d)}a=a.nextEffect}}
var Mg=Ea.ReactCurrentBatchConfig,Ng=(new aa.Component).refs;function Og(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var Sg={isMounted:function(a){return(a=a._reactInternalFiber)?ec(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Pg(),e=Mg.suspense;d=Qg(d,a,e);e=Bg(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Dg(a,e);Rg(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Pg(),e=Mg.suspense;d=Qg(d,a,e);e=Bg(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Dg(a,e);Rg(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Pg(),d=Mg.suspense;
c=Qg(c,a,d);d=Bg(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);Dg(a,d);Rg(a,c)}};function Tg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!qf(c,d)||!qf(e,f):!0}
function Ug(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=xg(f):(e=L(b)?Df:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Sg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Vg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Sg.enqueueReplaceState(b,b.state,null)}
function Wg(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Ng;var f=b.contextType;"object"===typeof f&&null!==f?e.context=xg(f):(f=L(b)?Df:J.current,e.context=Ef(a,f));f=a.updateQueue;null!==f&&(Hg(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(Og(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==
typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Sg.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(Hg(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Xg=Array.isArray;
function Yg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(u(309));var d=c.stateNode}if(!d)throw Error(u(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Ng&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(u(284));if(!c._owner)throw Error(u(290,a));}return a}
function Zg(a,b){if("textarea"!==a.type)throw Error(u(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}
function $g(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=ah(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=bh(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=Yg(a,b,c),d.return=a,d;d=ch(c.type,c.key,c.props,null,a.mode,d);d.ref=Yg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=dh(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=eh(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function C(a,b,c){if("string"===typeof b||"number"===typeof b)return b=bh(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Ga:return c=ch(b.type,b.key,b.props,null,a.mode,c),c.ref=Yg(a,null,b),c.return=a,c;case Ha:return b=dh(b,a.mode,c),b.return=a,b}if(Xg(b)||
Ua(b))return b=eh(b,a.mode,c,null),b.return=a,b;Zg(a,b)}return null}function y(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Ga:return c.key===e?c.type===Ia?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case Ha:return c.key===e?l(a,b,c,d):null}if(Xg(c)||Ua(c))return null!==e?null:m(a,b,c,d,null);Zg(a,c)}return null}function H(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Ga:return a=a.get(null===d.key?c:d.key)||null,d.type===Ia?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case Ha:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Xg(d)||Ua(d))return a=a.get(c)||null,m(b,a,d,e,null);Zg(b,d)}return null}function z(e,g,h,k){for(var l=null,m=null,r=g,x=g=0,A=null;null!==r&&x<h.length;x++){r.index>x?(A=r,r=null):A=r.sibling;var p=y(e,r,h[x],k);if(null===p){null===r&&(r=A);break}a&&
r&&null===p.alternate&&b(e,r);g=f(p,g,x);null===m?l=p:m.sibling=p;m=p;r=A}if(x===h.length)return c(e,r),l;if(null===r){for(;x<h.length;x++)r=C(e,h[x],k),null!==r&&(g=f(r,g,x),null===m?l=r:m.sibling=r,m=r);return l}for(r=d(e,r);x<h.length;x++)A=H(r,e,x,h[x],k),null!==A&&(a&&null!==A.alternate&&r.delete(null===A.key?x:A.key),g=f(A,g,x),null===m?l=A:m.sibling=A,m=A);a&&r.forEach(function(a){return b(e,a)});return l}function ta(e,g,h,k){var l=Ua(h);if("function"!==typeof l)throw Error(u(150));h=l.call(h);
if(null==h)throw Error(u(151));for(var m=l=null,r=g,x=g=0,A=null,p=h.next();null!==r&&!p.done;x++,p=h.next()){r.index>x?(A=r,r=null):A=r.sibling;var z=y(e,r,p.value,k);if(null===z){null===r&&(r=A);break}a&&r&&null===z.alternate&&b(e,r);g=f(z,g,x);null===m?l=z:m.sibling=z;m=z;r=A}if(p.done)return c(e,r),l;if(null===r){for(;!p.done;x++,p=h.next())p=C(e,p.value,k),null!==p&&(g=f(p,g,x),null===m?l=p:m.sibling=p,m=p);return l}for(r=d(e,r);!p.done;x++,p=h.next())p=H(r,e,x,p.value,k),null!==p&&(a&&null!==
p.alternate&&r.delete(null===p.key?x:p.key),g=f(p,g,x),null===m?l=p:m.sibling=p,m=p);a&&r.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===Ia&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Ga:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===Ia:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===Ia?f.props.children:f.props,h);d.ref=Yg(a,k,f);d.return=a;a=d;break a}else{c(a,
k);break}else b(a,k);k=k.sibling}f.type===Ia?(d=eh(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=ch(f.type,f.key,f.props,null,a.mode,h),h.ref=Yg(a,d,f),h.return=a,a=h)}return g(a);case Ha:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=dh(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===
typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=bh(f,a.mode,h),d.return=a,a=d),g(a);if(Xg(f))return z(a,d,f,h);if(Ua(f))return ta(a,d,f,h);l&&Zg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(u(152,a.displayName||a.name||"Component"));}return c(a,d)}}var fh=$g(!0),gh=$g(!1),hh={},ih={current:hh},jh={current:hh},kh={current:hh};function lh(a){if(a===hh)throw Error(u(174));return a}
function mh(a,b){I(kh,b,a);I(jh,a,a);I(ih,hh,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Qb(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=Qb(b,c)}G(ih,a);I(ih,b,a)}function nh(a){G(ih,a);G(jh,a);G(kh,a)}function oh(a){lh(kh.current);var b=lh(ih.current);var c=Qb(b,a.type);b!==c&&(I(jh,a,a),I(ih,c,a))}function ph(a){jh.current===a&&(G(ih,a),G(jh,a))}var M={current:0};
function qh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===je||c.data===ke))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function rh(a,b){return{responder:a,props:b}}
var sh=Ea.ReactCurrentDispatcher,N=Ea.ReactCurrentBatchConfig,th=0,uh=null,O=null,vh=null,wh=null,P=null,xh=null,yh=0,zh=null,Ah=0,Bh=!1,Ch=null,Gh=0;function Q(){throw Error(u(321));}function Hh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!of(a[c],b[c]))return!1;return!0}
function Ih(a,b,c,d,e,f){th=f;uh=b;vh=null!==a?a.memoizedState:null;sh.current=null===vh?Jh:Kh;b=c(d,e);if(Bh){do Bh=!1,Gh+=1,vh=null!==a?a.memoizedState:null,xh=wh,zh=P=O=null,sh.current=Kh,b=c(d,e);while(Bh);Ch=null;Gh=0}sh.current=Lh;a=uh;a.memoizedState=wh;a.expirationTime=yh;a.updateQueue=zh;a.effectTag|=Ah;a=null!==O&&null!==O.next;th=0;xh=P=wh=vh=O=uh=null;yh=0;zh=null;Ah=0;if(a)throw Error(u(300));return b}
function Mh(){sh.current=Lh;th=0;xh=P=wh=vh=O=uh=null;yh=0;zh=null;Ah=0;Bh=!1;Ch=null;Gh=0}function Nh(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===P?wh=P=a:P=P.next=a;return P}function Oh(){if(null!==xh)P=xh,xh=P.next,O=vh,vh=null!==O?O.next:null;else{if(null===vh)throw Error(u(310));O=vh;var a={memoizedState:O.memoizedState,baseState:O.baseState,queue:O.queue,baseUpdate:O.baseUpdate,next:null};P=null===P?wh=a:P.next=a;vh=O.next}return P}
function Ph(a,b){return"function"===typeof b?b(a):b}
function Qh(a){var b=Oh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;if(0<Gh){var d=c.dispatch;if(null!==Ch){var e=Ch.get(c);if(void 0!==e){Ch.delete(c);var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);of(f,b.memoizedState)||(wg=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var g=b.baseUpdate;f=b.baseState;null!==g?(null!==d&&(d.next=null),d=g.next):d=null!==d?d.next:null;if(null!==
d){var h=e=null,k=d,l=!1;do{var m=k.expirationTime;m<th?(l||(l=!0,h=g,e=f),m>yh&&(yh=m,Jg(yh))):(Ig(m,k.suspenseConfig),f=k.eagerReducer===a?k.eagerState:a(f,k.action));g=k;k=k.next}while(null!==k&&k!==d);l||(h=g,e=f);of(f,b.memoizedState)||(wg=!0);b.memoizedState=f;b.baseUpdate=h;b.baseState=e;c.lastRenderedState=f}return[b.memoizedState,c.dispatch]}
function Rh(a){var b=Nh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={last:null,dispatch:null,lastRenderedReducer:Ph,lastRenderedState:a};a=a.dispatch=Sh.bind(null,uh,a);return[b.memoizedState,a]}function Th(a){return Qh(Ph,a)}function Uh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===zh?(zh={lastEffect:null},zh.lastEffect=a.next=a):(b=zh.lastEffect,null===b?zh.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,zh.lastEffect=a));return a}
function Vh(a,b,c,d){var e=Nh();Ah|=a;e.memoizedState=Uh(b,c,void 0,void 0===d?null:d)}function Wh(a,b,c,d){var e=Oh();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&Hh(d,g.deps)){Uh(0,c,f,d);return}}Ah|=a;e.memoizedState=Uh(b,c,f,d)}function Xh(a,b){return Vh(516,192,a,b)}function Yh(a,b){return Wh(516,192,a,b)}
function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function $h(){}function ai(a,b){Nh().memoizedState=[a,void 0===b?null:b];return a}function bi(a,b){var c=Oh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Hh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Sh(a,b,c){if(!(25>Gh))throw Error(u(301));var d=a.alternate;if(a===uh||null!==d&&d===uh)if(Bh=!0,a={expirationTime:th,suspenseConfig:null,action:c,eagerReducer:null,eagerState:null,next:null},null===Ch&&(Ch=new Map),c=Ch.get(b),void 0===c)Ch.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}else{var e=Pg(),f=Mg.suspense;e=Qg(e,a,f);f={expirationTime:e,suspenseConfig:f,action:c,eagerReducer:null,eagerState:null,next:null};var g=b.last;if(null===g)f.next=f;else{var h=g.next;null!==h&&
(f.next=h);g.next=f}b.last=f;if(0===a.expirationTime&&(null===d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var k=b.lastRenderedState,l=d(k,c);f.eagerReducer=d;f.eagerState=l;if(of(l,k))return}catch(m){}finally{}Rg(a,e)}}
var Lh={readContext:xg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useResponder:Q,useDeferredValue:Q,useTransition:Q},Jh={readContext:xg,useCallback:ai,useContext:xg,useEffect:Xh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,36,Zh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Vh(4,36,a,b)},useMemo:function(a,b){var c=Nh();b=void 0===b?null:b;a=a();c.memoizedState=
[a,b];return a},useReducer:function(a,b,c){var d=Nh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Sh.bind(null,uh,a);return[d.memoizedState,a]},useRef:function(a){var b=Nh();a={current:a};return b.memoizedState=a},useState:Rh,useDebugValue:$h,useResponder:rh,useDeferredValue:function(a,b){var c=Rh(a),d=c[0],e=c[1];Xh(function(){q.unstable_next(function(){var c=N.suspense;N.suspense=void 0===b?null:b;try{e(a)}finally{N.suspense=
c}})},[a,b]);return d},useTransition:function(a){var b=Rh(!1),c=b[0],d=b[1];return[ai(function(b){d(!0);q.unstable_next(function(){var c=N.suspense;N.suspense=void 0===a?null:a;try{d(!1),b()}finally{N.suspense=c}})},[a,c]),c]}},Kh={readContext:xg,useCallback:bi,useContext:xg,useEffect:Yh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Wh(4,36,Zh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Wh(4,36,a,b)},useMemo:function(a,b){var c=Oh();b=void 0===b?
null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Hh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:Qh,useRef:function(){return Oh().memoizedState},useState:Th,useDebugValue:$h,useResponder:rh,useDeferredValue:function(a,b){var c=Th(a),d=c[0],e=c[1];Yh(function(){q.unstable_next(function(){var c=N.suspense;N.suspense=void 0===b?null:b;try{e(a)}finally{N.suspense=c}})},[a,b]);return d},useTransition:function(a){var b=Th(!1),c=b[0],d=b[1];return[bi(function(b){d(!0);q.unstable_next(function(){var c=
N.suspense;N.suspense=void 0===a?null:a;try{d(!1),b()}finally{N.suspense=c}})},[a,c]),c]}},ci=null,di=null,ei=!1;function fi(a,b){var c=gi(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function hi(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function ii(a){if(ei){var b=di;if(b){var c=b;if(!hi(a,b)){b=re(c.nextSibling);if(!b||!hi(a,b)){a.effectTag=a.effectTag&-1025|2;ei=!1;ci=a;return}fi(ci,c)}ci=a;di=re(b.firstChild)}else a.effectTag=a.effectTag&-1025|2,ei=!1,ci=a}}function ji(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;ci=a}
function ki(a){if(a!==ci)return!1;if(!ei)return ji(a),ei=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!oe(b,a.memoizedProps))for(b=di;b;)fi(a,b),b=re(b.nextSibling);ji(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(u(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===ie){if(0===b){di=re(a.nextSibling);break a}b--}else c!==he&&c!==ke&&c!==je||b++}a=a.nextSibling}di=null}}else di=ci?re(a.stateNode.nextSibling):null;return!0}
function li(){di=ci=null;ei=!1}var mi=Ea.ReactCurrentOwner,wg=!1;function R(a,b,c,d){b.child=null===a?gh(b,null,c,d):fh(b,a.child,c,d)}function ni(a,b,c,d,e){c=c.render;var f=b.ref;vg(b,e);d=Ih(a,b,c,d,f,e);if(null!==a&&!wg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),oi(a,b,e);b.effectTag|=1;R(a,b,d,e);return b.child}
function pi(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!qi(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ri(a,b,g,d,e,f);a=ch(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:qf,c(e,d)&&a.ref===b.ref))return oi(a,b,f);b.effectTag|=1;a=ah(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}
function ri(a,b,c,d,e,f){return null!==a&&qf(a.memoizedProps,d)&&a.ref===b.ref&&(wg=!1,e<f)?oi(a,b,f):si(a,b,c,d,f)}function ti(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function si(a,b,c,d,e){var f=L(c)?Df:J.current;f=Ef(b,f);vg(b,e);c=Ih(a,b,c,d,f,e);if(null!==a&&!wg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),oi(a,b,e);b.effectTag|=1;R(a,b,c,e);return b.child}
function ui(a,b,c,d,e){if(L(c)){var f=!0;Jf(b)}else f=!1;vg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Ug(b,c,d,e),Wg(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=xg(l):(l=L(c)?Df:J.current,l=Ef(b,l));var m=c.getDerivedStateFromProps,C="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;C||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Vg(b,g,d,l);yg=!1;var y=b.memoizedState;k=g.state=y;var H=b.updateQueue;null!==H&&(Hg(b,H,d,g,e),k=b.memoizedState);h!==d||y!==k||K.current||yg?("function"===typeof m&&(Og(b,c,m,d),k=b.memoizedState),(h=yg||Tg(b,c,h,d,y,k,l))?(C||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:mg(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=xg(l):(l=L(c)?Df:J.current,l=Ef(b,l)),m=c.getDerivedStateFromProps,(C=
"function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Vg(b,g,d,l),yg=!1,k=b.memoizedState,y=g.state=k,H=b.updateQueue,null!==H&&(Hg(b,H,d,g,e),y=b.memoizedState),h!==d||k!==y||K.current||yg?("function"===typeof m&&(Og(b,c,m,d),y=b.memoizedState),(m=yg||Tg(b,c,h,d,k,y,l))?(C||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||
("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,y,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,y,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=
d,b.memoizedState=y),g.props=d,g.state=y,g.context=l,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return vi(a,b,c,d,f,e)}
function vi(a,b,c,d,e,f){ti(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Kf(b,c,!1),oi(a,b,f);d=b.stateNode;mi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=fh(b,a.child,null,f),b.child=fh(b,null,h,f)):R(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function wi(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);mh(a,b.containerInfo)}
var xi={dehydrated:null,retryTime:0};
function yi(a,b,c){var d=b.mode,e=b.pendingProps,f=M.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);I(M,f&1,b);if(null===a){void 0!==e.fallback&&ii(b);if(g){g=e.fallback;e=eh(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=eh(g,d,c,null);c.return=
b;e.sibling=c;b.memoizedState=xi;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=gh(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=ah(a,a.pendingProps,0);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=ah(d,e,d.expirationTime);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=xi;b.child=c;return d}c=fh(b,a.child,e.children,c);b.memoizedState=
null;return b.child=c}a=a.child;if(g){g=e.fallback;e=eh(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=eh(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=xi;b.child=e;return c}b.memoizedState=null;return b.child=fh(b,a,e.children,c)}
function zi(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);ug(a.return,b)}function Ai(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,last:d,tail:c,tailExpiration:0,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f)}
function Bi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&zi(a,c);else if(19===a.tag)zi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(M,d,b);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===qh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);Ai(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===qh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}Ai(b,!0,c,null,f,b.lastEffect);break;case "together":Ai(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function oi(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Jg(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(u(153));if(null!==b.child){a=b.child;c=ah(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=ah(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}function Ci(a){a.effectTag|=4}var Hi,Ii,Ji,Ki;
Hi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Ii=function(){};
Ji=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;lh(ih.current);a=null;switch(c){case "input":f=Ab(g,f);d=Ab(g,d);a=[];break;case "option":f=Ib(g,f);d=Ib(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=Kb(g,f);d=Kb(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=ae)}Yd(c,d);var h,k;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===
h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else"dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(ia.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),
c[k]=l[k])}else c||(a||(a=[]),a.push(h,c)),c=l;else"dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,""+l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(ia.hasOwnProperty(h)?(null!=l&&$d(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l))}c&&(a=a||[]).push("style",c);e=a;(b.updateQueue=e)&&Ci(b)}};Ki=function(a,b,c,d){c!==d&&Ci(b)};
function Li(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function Mi(a){switch(a.tag){case 1:L(a.type)&&Ff(a);var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:nh(a);Gf(a);b=a.effectTag;if(0!==(b&64))throw Error(u(285));a.effectTag=b&-4097|64;return a;case 5:return ph(a),null;case 13:return G(M,a),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return G(M,a),null;case 4:return nh(a),null;case 10:return tg(a),null;default:return null}}function Ni(a,b){return{value:a,source:b,stack:Xa(b)}}
var Oi="function"===typeof WeakSet?WeakSet:Set;function Pi(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=Xa(c));null!==c&&Wa(c.type);b=b.value;null!==a&&1===a.tag&&Wa(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Qi(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Ri(a,c)}}function Si(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Ri(a,c)}else b.current=null}
function Ti(a,b){switch(b.tag){case 0:case 11:case 15:Ui(2,0,b);break;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:mg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}break;case 3:case 5:case 6:case 4:case 17:break;default:throw Error(u(163));}}
function Ui(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if(0!==(d.tag&a)){var e=d.destroy;d.destroy=void 0;void 0!==e&&e()}0!==(d.tag&b)&&(e=d.create,d.destroy=e());d=d.next}while(d!==c)}}
function Vi(a,b,c){"function"===typeof Wi&&Wi(b);switch(b.tag){case 0:case 11:case 14:case 15:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;fg(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c()}catch(h){Ri(g,h)}}a=a.next}while(a!==d)})}break;case 1:Si(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&Qi(b,c);break;case 5:Si(b);break;case 4:Xi(a,b,c)}}
function Yi(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;null!==b&&Yi(b)}function Zi(a){return 5===a.tag||3===a.tag||4===a.tag}
function $i(a){a:{for(var b=a.return;null!==b;){if(Zi(b)){var c=b;break a}b=b.return}throw Error(u(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(u(161));}c.effectTag&16&&(Tb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Zi(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){var f=5===e.tag||6===e.tag;if(f){var g=f?e.stateNode:e.stateNode.instance;if(c)if(d){f=b;var h=g;g=c;8===f.nodeType?f.parentNode.insertBefore(h,g):f.insertBefore(h,g)}else b.insertBefore(g,c);else d?(h=b,8===h.nodeType?(f=h.parentNode,f.insertBefore(g,h)):(f=h,f.appendChild(g)),h=h._reactRootContainer,null!==h&&void 0!==h||null!==f.onclick||(f.onclick=ae)):b.appendChild(g)}else if(4!==
e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function Xi(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(u(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,m=k;;)if(Vi(h,m,l),null!==m.child&&4!==m.tag)m.child.return=m,m=m.child;else{if(m===k)break;for(;null===m.sibling;){if(null===m.return||m.return===k)break a;m=m.return}m.sibling.return=m.return;m=m.sibling}g?(h=
f,k=d.stateNode,8===h.nodeType?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode)}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Vi(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}
function aj(a,b){switch(b.tag){case 0:case 11:case 14:case 15:Ui(4,8,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[ve]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Cb(c,d);Zd(a,e);b=Zd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?Wd(c,h):"dangerouslySetInnerHTML"===g?Sb(c,h):"children"===g?Tb(c,h):vb(c,g,h,b)}switch(a){case "input":Eb(c,d);break;case "textarea":Mb(c,
d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?Jb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?Jb(c,!!d.multiple,d.defaultValue,!0):Jb(c,!!d.multiple,d.multiple?[]:"",!1))}}}break;case 6:if(null===b.stateNode)throw Error(u(162));b.stateNode.nodeValue=b.memoizedProps;break;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,Lc(b.containerInfo));break;case 12:break;case 13:c=b;null===b.memoizedState?d=!1:(d=!0,c=b.child,bj=cg());
if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=Vd("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=f;continue}else if(null!==a.child){a.child.return=
a;a=a.child;continue}if(a===c)break a;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}cj(b);break;case 19:cj(b);break;case 17:break;case 20:break;case 21:break;default:throw Error(u(163));}}function cj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Oi);b.forEach(function(b){var d=dj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}var ej="function"===typeof WeakMap?WeakMap:Map;
function fj(a,b,c){c=Bg(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){gj||(gj=!0,hj=d);Pi(a,b)};return c}
function ij(a,b,c){c=Bg(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Pi(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===jj?jj=new Set([this]):jj.add(this),Pi(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var kj=Math.ceil,lj=Ea.ReactCurrentDispatcher,mj=Ea.ReactCurrentOwner,S=0,nj=8,oj=16,pj=32,qj=0,rj=1,sj=2,tj=3,uj=4,vj=5,T=S,U=null,V=null,W=0,X=qj,wj=null,xj=1073741823,yj=1073741823,zj=null,Aj=0,Bj=!1,bj=0,Cj=500,Y=null,gj=!1,hj=null,jj=null,Dj=!1,Ej=null,Fj=90,Gj=null,Hj=0,Ij=null,Jj=0;function Pg(){return(T&(oj|pj))!==S?1073741821-(cg()/10|0):0!==Jj?Jj:Jj=1073741821-(cg()/10|0)}
function Qg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=dg();if(0===(b&4))return 99===d?1073741823:1073741822;if((T&oj)!==S)return W;if(null!==c)a=lg(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=lg(a,150,100);break;case 97:case 96:a=lg(a,5E3,250);break;case 95:a=2;break;default:throw Error(u(326));}null!==U&&a===W&&--a;return a}
function Rg(a,b){if(50<Hj)throw Hj=0,Ij=null,Error(u(185));a=Kj(a,b);if(null!==a){var c=dg();1073741823===b?(T&nj)!==S&&(T&(oj|pj))===S?Lj(a):(Z(a),T===S&&jg()):Z(a);(T&4)===S||98!==c&&99!==c||(null===Gj?Gj=new Map([[a,b]]):(c=Gj.get(a),(void 0===c||c>b)&&Gj.set(a,b)))}}
function Kj(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(U===e&&(Jg(b),X===uj&&Mj(e,W)),Nj(e,b));return e}
function Oj(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Pj(a,b))return b;b=a.lastPingedTime;a=a.nextKnownPendingLevel;return b>a?b:a}
function Z(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=hg(Lj.bind(null,a));else{var b=Oj(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else{var d=Pg();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Xf&&Nf(c)}a.callbackExpirationTime=
b;a.callbackPriority=d;b=1073741823===b?hg(Lj.bind(null,a)):gg(d,Qj.bind(null,a),{timeout:10*(1073741821-b)-cg()});a.callbackNode=b}}}
function Qj(a,b){Jj=0;if(b)return b=Pg(),Rj(a,b),Z(a),null;var c=Oj(a);if(0!==c){b=a.callbackNode;if((T&(oj|pj))!==S)throw Error(u(327));Sj();a===U&&c===W||Tj(a,c);if(null!==V){var d=T;T|=oj;var e=Uj(a);do try{Vj();break}catch(h){Wj(a,h)}while(1);rg();T=d;lj.current=e;if(X===rj)throw b=wj,Tj(a,c),Mj(a,c),Z(a),b;if(null===V)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=X,U=null,d){case qj:case rj:throw Error(u(345));case sj:Rj(a,2<c?2:c);break;case tj:Mj(a,c);d=a.lastSuspendedTime;
c===d&&(a.nextKnownPendingLevel=Xj(e));if(1073741823===xj&&(e=bj+Cj-cg(),10<e)){if(Bj){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Tj(a,c);break}}f=Oj(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=pe(Yj.bind(null,a),e);break}Yj(a);break;case uj:Mj(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Xj(e));if(Bj&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Tj(a,c);break}e=Oj(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=
d;break}1073741823!==yj?d=10*(1073741821-yj)-cg():1073741823===xj?d=0:(d=10*(1073741821-xj)-5E3,e=cg(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*kj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=pe(Yj.bind(null,a),d);break}Yj(a);break;case vj:if(1073741823!==xj&&null!==zj){f=xj;var g=zj;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=cg()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){Mj(a,c);a.timeoutHandle=
pe(Yj.bind(null,a),d);break}}Yj(a);break;default:throw Error(u(329));}Z(a);if(a.callbackNode===b)return Qj.bind(null,a)}}return null}
function Lj(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if(a.finishedExpirationTime===b)Yj(a);else{if((T&(oj|pj))!==S)throw Error(u(327));Sj();a===U&&b===W||Tj(a,b);if(null!==V){var c=T;T|=oj;var d=Uj(a);do try{Zj();break}catch(e){Wj(a,e)}while(1);rg();T=c;lj.current=d;if(X===rj)throw c=wj,Tj(a,b),Mj(a,b),Z(a),c;if(null!==V)throw Error(u(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;U=null;Yj(a);Z(a)}}return null}
function ak(){if(null!==Gj){var a=Gj;Gj=null;a.forEach(function(a,c){Rj(c,a);Z(c)});jg()}}function bk(a,b){var c=T;T|=1;try{return a(b)}finally{T=c,T===S&&jg()}}function ck(a,b){var c=T;T&=-2;T|=nj;try{return a(b)}finally{T=c,T===S&&jg()}}
function Tj(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,qe(c));if(null!==V)for(c=V.return;null!==c;){var d=c;switch(d.tag){case 1:var e=d.type.childContextTypes;null!==e&&void 0!==e&&Ff(d);break;case 3:nh(d);Gf(d);break;case 5:ph(d);break;case 4:nh(d);break;case 13:G(M,d);break;case 19:G(M,d);break;case 10:tg(d)}c=c.return}U=a;V=ah(a.current,null,b);W=b;X=qj;wj=null;yj=xj=1073741823;zj=null;Aj=0;Bj=!1}
function Wj(a,b){do{try{rg();Mh();if(null===V||null===V.return)return X=rj,wj=b,null;a:{var c=a,d=V.return,e=V,f=b;b=W;e.effectTag|=2048;e.firstEffect=e.lastEffect=null;if(null!==f&&"object"===typeof f&&"function"===typeof f.then){var g=f,h=0!==(M.current&1),k=d;do{var l;if(l=13===k.tag){var m=k.memoizedState;if(null!==m)l=null!==m.dehydrated?!0:!1;else{var C=k.memoizedProps;l=void 0===C.fallback?!1:!0!==C.unstable_avoidThisFallback?!0:h?!1:!0}}if(l){var y=k.updateQueue;if(null===y){var H=new Set;
H.add(g);k.updateQueue=H}else y.add(g);if(0===(k.mode&2)){k.effectTag|=64;e.effectTag&=-2981;if(1===e.tag)if(null===e.alternate)e.tag=17;else{var z=Bg(1073741823,null);z.tag=2;Dg(e,z)}e.expirationTime=1073741823;break a}f=void 0;e=b;var ta=c.pingCache;null===ta?(ta=c.pingCache=new ej,f=new Set,ta.set(g,f)):(f=ta.get(g),void 0===f&&(f=new Set,ta.set(g,f)));if(!f.has(e)){f.add(e);var r=dk.bind(null,c,g,e);g.then(r,r)}k.effectTag|=4096;k.expirationTime=b;break a}k=k.return}while(null!==k);f=Error((Wa(e.type)||
"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+Xa(e))}X!==vj&&(X=sj);f=Ni(f,e);k=d;do{switch(k.tag){case 3:g=f;k.effectTag|=4096;k.expirationTime=b;var x=fj(k,g,b);Eg(k,x);break a;case 1:g=f;var A=k.type,p=k.stateNode;if(0===(k.effectTag&64)&&("function"===typeof A.getDerivedStateFromError||null!==p&&"function"===typeof p.componentDidCatch&&
(null===jj||!jj.has(p)))){k.effectTag|=4096;k.expirationTime=b;var t=ij(k,g,b);Eg(k,t);break a}}k=k.return}while(null!==k)}V=ek(V)}catch(v){b=v;continue}break}while(1)}function Uj(){var a=lj.current;lj.current=Lh;return null===a?Lh:a}function Ig(a,b){a<xj&&2<a&&(xj=a);null!==b&&a<yj&&2<a&&(yj=a,zj=b)}function Jg(a){a>Aj&&(Aj=a)}function Zj(){for(;null!==V;)V=fk(V)}function Vj(){for(;null!==V&&!Of();)V=fk(V)}
function fk(a){var b=gk(a.alternate,a,W);a.memoizedProps=a.pendingProps;null===b&&(b=ek(a));mj.current=null;return b}
function ek(a){V=a;do{var b=V.alternate;a=V.return;if(0===(V.effectTag&2048)){a:{var c=b;b=V;var d=W;var e=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:L(b.type)&&Ff(b);break;case 3:nh(b);Gf(b);e=b.stateNode;e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null);(null===c||null===c.child)&&ki(b)&&Ci(b);Ii(b);break;case 5:ph(b);d=lh(kh.current);var f=b.type;if(null!==c&&null!=b.stateNode)Ji(c,b,f,e,d),c.ref!==b.ref&&(b.effectTag|=128);else if(e){var g=
lh(ih.current);if(ki(b)){e=b;var h=e.stateNode;c=e.type;var k=e.memoizedProps,l=d;h[ue]=e;h[ve]=k;f=void 0;d=h;switch(c){case "iframe":case "object":case "embed":F("load",d);break;case "video":case "audio":for(h=0;h<cc.length;h++)F(cc[h],d);break;case "source":F("error",d);break;case "img":case "image":case "link":F("error",d);F("load",d);break;case "form":F("reset",d);F("submit",d);break;case "details":F("toggle",d);break;case "input":Bb(d,k);F("invalid",d);$d(l,"onChange");break;case "select":d._wrapperState=
{wasMultiple:!!k.multiple};F("invalid",d);$d(l,"onChange");break;case "textarea":Lb(d,k),F("invalid",d),$d(l,"onChange")}Yd(c,k);h=null;for(f in k)k.hasOwnProperty(f)&&(g=k[f],"children"===f?"string"===typeof g?d.textContent!==g&&(h=["children",g]):"number"===typeof g&&d.textContent!==""+g&&(h=["children",""+g]):ia.hasOwnProperty(f)&&null!=g&&$d(l,f));switch(c){case "input":yb(d);Gb(d,k,!0);break;case "textarea":yb(d);Nb(d,k);break;case "select":case "option":break;default:"function"===typeof k.onClick&&
(d.onclick=ae)}f=h;e.updateQueue=f;e=null!==f?!0:!1;e&&Ci(b)}else{c=b;l=f;k=e;h=9===d.nodeType?d:d.ownerDocument;g===Ob.html&&(g=Pb(l));g===Ob.html?"script"===l?(k=h.createElement("div"),k.innerHTML="<script>\x3c/script>",h=k.removeChild(k.firstChild)):"string"===typeof k.is?h=h.createElement(l,{is:k.is}):(h=h.createElement(l),"select"===l&&(l=h,k.multiple?l.multiple=!0:k.size&&(l.size=k.size))):h=h.createElementNS(g,l);k=h;k[ue]=c;k[ve]=e;Hi(k,b,!1,!1);b.stateNode=k;l=f;c=e;var m=d,C=Zd(l,c);switch(l){case "iframe":case "object":case "embed":F("load",
k);d=c;break;case "video":case "audio":for(d=0;d<cc.length;d++)F(cc[d],k);d=c;break;case "source":F("error",k);d=c;break;case "img":case "image":case "link":F("error",k);F("load",k);d=c;break;case "form":F("reset",k);F("submit",k);d=c;break;case "details":F("toggle",k);d=c;break;case "input":Bb(k,c);d=Ab(k,c);F("invalid",k);$d(m,"onChange");break;case "option":d=Ib(k,c);break;case "select":k._wrapperState={wasMultiple:!!c.multiple};d=n({},c,{value:void 0});F("invalid",k);$d(m,"onChange");break;case "textarea":Lb(k,
c);d=Kb(k,c);F("invalid",k);$d(m,"onChange");break;default:d=c}Yd(l,d);h=void 0;g=l;var y=k,H=d;for(h in H)if(H.hasOwnProperty(h)){var z=H[h];"style"===h?Wd(y,z):"dangerouslySetInnerHTML"===h?(z=z?z.__html:void 0,null!=z&&Sb(y,z)):"children"===h?"string"===typeof z?("textarea"!==g||""!==z)&&Tb(y,z):"number"===typeof z&&Tb(y,""+z):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(ia.hasOwnProperty(h)?null!=z&&$d(m,h):null!=z&&vb(y,h,z,C))}switch(l){case "input":yb(k);
Gb(k,c,!1);break;case "textarea":yb(k);Nb(k,c);break;case "option":null!=c.value&&k.setAttribute("value",""+ub(c.value));break;case "select":d=k;d.multiple=!!c.multiple;k=c.value;null!=k?Jb(d,!!c.multiple,k,!1):null!=c.defaultValue&&Jb(d,!!c.multiple,c.defaultValue,!0);break;default:"function"===typeof d.onClick&&(k.onclick=ae)}(e=ne(f,e))&&Ci(b)}null!==b.ref&&(b.effectTag|=128)}else if(null===b.stateNode)throw Error(u(166));break;case 6:if(c&&null!=b.stateNode)Ki(c,b,c.memoizedProps,e);else{if("string"!==
typeof e&&null===b.stateNode)throw Error(u(166));d=lh(kh.current);lh(ih.current);ki(b)?(e=b,f=e.stateNode,d=e.memoizedProps,f[ue]=e,(e=f.nodeValue!==d)&&Ci(b)):(f=b,e=(9===d.nodeType?d:d.ownerDocument).createTextNode(e),e[ue]=f,b.stateNode=e)}break;case 11:break;case 13:G(M,b);e=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=d;break a}e=null!==e;f=!1;null===c?void 0!==b.memoizedProps.fallback&&ki(b):(d=c.memoizedState,f=null!==d,e||null===d||(d=c.child.sibling,null!==d&&(k=b.firstEffect,
null!==k?(b.firstEffect=d,d.nextEffect=k):(b.firstEffect=b.lastEffect=d,d.nextEffect=null),d.effectTag=8)));if(e&&!f&&0!==(b.mode&2))if(null===c&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M.current&1))X===qj&&(X=tj);else{if(X===qj||X===tj)X=uj;0!==Aj&&null!==U&&(Mj(U,W),Nj(U,Aj))}if(e||f)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:nh(b);Ii(b);break;case 10:tg(b);break;case 9:break;case 14:break;case 17:L(b.type)&&Ff(b);break;case 19:G(M,b);e=b.memoizedState;if(null===
e)break;f=0!==(b.effectTag&64);k=e.rendering;if(null===k)if(f)Li(e,!1);else{if(X!==qj||null!==c&&0!==(c.effectTag&64))for(c=b.child;null!==c;){k=qh(c);if(null!==k){b.effectTag|=64;Li(e,!1);f=k.updateQueue;null!==f&&(b.updateQueue=f,b.effectTag|=4);null===e.lastEffect&&(b.firstEffect=null);b.lastEffect=e.lastEffect;e=d;for(f=b.child;null!==f;)d=f,c=e,d.effectTag&=2,d.nextEffect=null,d.firstEffect=null,d.lastEffect=null,k=d.alternate,null===k?(d.childExpirationTime=0,d.expirationTime=c,d.child=null,
d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null):(d.childExpirationTime=k.childExpirationTime,d.expirationTime=k.expirationTime,d.child=k.child,d.memoizedProps=k.memoizedProps,d.memoizedState=k.memoizedState,d.updateQueue=k.updateQueue,c=k.dependencies,d.dependencies=null===c?null:{expirationTime:c.expirationTime,firstContext:c.firstContext,responders:c.responders}),f=f.sibling;I(M,M.current&1|2,b);b=b.child;break a}c=c.sibling}}else{if(!f)if(c=qh(k),null!==c){if(b.effectTag|=
64,f=!0,d=c.updateQueue,null!==d&&(b.updateQueue=d,b.effectTag|=4),Li(e,!0),null===e.tail&&"hidden"===e.tailMode&&!k.alternate){b=b.lastEffect=e.lastEffect;null!==b&&(b.nextEffect=null);break}}else cg()>e.tailExpiration&&1<d&&(b.effectTag|=64,f=!0,Li(e,!1),b.expirationTime=b.childExpirationTime=d-1);e.isBackwards?(k.sibling=b.child,b.child=k):(d=e.last,null!==d?d.sibling=k:b.child=k,e.last=k)}if(null!==e.tail){0===e.tailExpiration&&(e.tailExpiration=cg()+500);d=e.tail;e.rendering=d;e.tail=d.sibling;
e.lastEffect=b.lastEffect;d.sibling=null;e=M.current;e=f?e&1|2:e&1;I(M,e,b);b=d;break a}break;case 20:break;case 21:break;default:throw Error(u(156,b.tag));}b=null}e=V;if(1===W||1!==e.childExpirationTime){f=0;for(d=e.child;null!==d;)c=d.expirationTime,k=d.childExpirationTime,c>f&&(f=c),k>f&&(f=k),d=d.sibling;e.childExpirationTime=f}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=V.firstEffect),null!==V.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=
V.firstEffect),a.lastEffect=V.lastEffect),1<V.effectTag&&(null!==a.lastEffect?a.lastEffect.nextEffect=V:a.firstEffect=V,a.lastEffect=V))}else{b=Mi(V,W);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048)}b=V.sibling;if(null!==b)return b;V=a}while(null!==V);X===qj&&(X=vj);return null}function Xj(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function Yj(a){var b=dg();fg(99,ik.bind(null,a,b));return null}
function ik(a,b){do Sj();while(null!==Ej);if((T&(oj|pj))!==S)throw Error(u(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(u(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Xj(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=
d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===U&&(V=U=null,W=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=T;T|=pj;mj.current=null;le=Ld;var g=fe();if(ge(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,
m=k.focusNode;k=k.focusOffset;try{h.nodeType,m.nodeType}catch(Db){h=null;break a}var C=0,y=-1,H=-1,z=0,ta=0,r=g,x=null;b:for(;;){for(var A;;){r!==h||0!==l&&3!==r.nodeType||(y=C+l);r!==m||0!==k&&3!==r.nodeType||(H=C+k);3===r.nodeType&&(C+=r.nodeValue.length);if(null===(A=r.firstChild))break;x=r;r=A}for(;;){if(r===g)break b;x===h&&++z===l&&(y=C);x===m&&++ta===k&&(H=C);if(null!==(A=r.nextSibling))break;r=x;x=r.parentNode}r=A}h=-1===y||-1===H?null:{start:y,end:H}}else h=null}h=h||{start:0,end:0}}else h=
null;me={focusedElem:g,selectionRange:h};Ld=!1;Y=e;do try{jk()}catch(Db){if(null===Y)throw Error(u(330));Ri(Y,Db);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(g=a,h=b;null!==Y;){var p=Y.effectTag;p&16&&Tb(Y.stateNode,"");if(p&128){var t=Y.alternate;if(null!==t){var v=t.ref;null!==v&&("function"===typeof v?v(null):v.current=null)}}switch(p&1038){case 2:$i(Y);Y.effectTag&=-3;break;case 6:$i(Y);Y.effectTag&=-3;aj(Y.alternate,Y);break;case 1024:Y.effectTag&=-1025;break;case 1028:Y.effectTag&=-1025;aj(Y.alternate,
Y);break;case 4:aj(Y.alternate,Y);break;case 8:l=Y,Xi(g,l,h),Yi(l)}Y=Y.nextEffect}}catch(Db){if(null===Y)throw Error(u(330));Ri(Y,Db);Y=Y.nextEffect}while(null!==Y);v=me;t=fe();p=v.focusedElem;h=v.selectionRange;if(t!==p&&p&&p.ownerDocument&&ee(p.ownerDocument.documentElement,p)){null!==h&&ge(p)&&(t=h.start,v=h.end,void 0===v&&(v=t),"selectionStart"in p?(p.selectionStart=t,p.selectionEnd=Math.min(v,p.value.length)):(v=(t=p.ownerDocument||document)&&t.defaultView||window,v.getSelection&&(v=v.getSelection(),
l=p.textContent.length,g=Math.min(h.start,l),h=void 0===h.end?g:Math.min(h.end,l),!v.extend&&g>h&&(l=h,h=g,g=l),l=de(p,g),m=de(p,h),l&&m&&(1!==v.rangeCount||v.anchorNode!==l.node||v.anchorOffset!==l.offset||v.focusNode!==m.node||v.focusOffset!==m.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),v.removeAllRanges(),g>h?(v.addRange(t),v.extend(m.node,m.offset)):(t.setEnd(m.node,m.offset),v.addRange(t))))));t=[];for(v=p;v=v.parentNode;)1===v.nodeType&&t.push({element:v,left:v.scrollLeft,top:v.scrollTop});
"function"===typeof p.focus&&p.focus();for(p=0;p<t.length;p++)v=t[p],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}me=null;Ld=!!le;le=null;a.current=c;Y=e;do try{for(p=d;null!==Y;){var Dh=Y.effectTag;if(Dh&36){var dc=Y.alternate;t=Y;v=p;switch(t.tag){case 0:case 11:case 15:Ui(16,32,t);break;case 1:var fd=t.stateNode;if(t.effectTag&4)if(null===dc)fd.componentDidMount();else{var hk=t.elementType===t.type?dc.memoizedProps:mg(t.type,dc.memoizedProps);fd.componentDidUpdate(hk,dc.memoizedState,
fd.__reactInternalSnapshotBeforeUpdate)}var Eh=t.updateQueue;null!==Eh&&Kg(t,Eh,fd,v);break;case 3:var Fh=t.updateQueue;if(null!==Fh){g=null;if(null!==t.child)switch(t.child.tag){case 5:g=t.child.stateNode;break;case 1:g=t.child.stateNode}Kg(t,Fh,g,v)}break;case 5:var xk=t.stateNode;null===dc&&t.effectTag&4&&ne(t.type,t.memoizedProps)&&xk.focus();break;case 6:break;case 4:break;case 12:break;case 13:if(null===t.memoizedState){var Di=t.alternate;if(null!==Di){var Ei=Di.memoizedState;if(null!==Ei){var Fi=
Ei.dehydrated;null!==Fi&&Lc(Fi)}}}break;case 19:case 17:case 20:case 21:break;default:throw Error(u(163));}}if(Dh&128){t=void 0;var xd=Y.ref;if(null!==xd){var Gi=Y.stateNode;switch(Y.tag){case 5:t=Gi;break;default:t=Gi}"function"===typeof xd?xd(t):xd.current=t}}Y=Y.nextEffect}}catch(Db){if(null===Y)throw Error(u(330));Ri(Y,Db);Y=Y.nextEffect}while(null!==Y);Y=null;Yf();T=f}else a.current=c;if(Dj)Dj=!1,Ej=a,Fj=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0===b&&
(jj=null);1073741823===b?a===Ij?Hj++:(Hj=0,Ij=a):Hj=0;"function"===typeof kk&&kk(c.stateNode,d);Z(a);if(gj)throw gj=!1,a=hj,hj=null,a;if((T&nj)!==S)return null;jg();return null}function jk(){for(;null!==Y;){var a=Y.effectTag;0!==(a&256)&&Ti(Y.alternate,Y);0===(a&512)||Dj||(Dj=!0,gg(97,function(){Sj();return null}));Y=Y.nextEffect}}function Sj(){if(90!==Fj){var a=97<Fj?97:Fj;Fj=90;return fg(a,lk)}}
function lk(){if(null===Ej)return!1;var a=Ej;Ej=null;if((T&(oj|pj))!==S)throw Error(u(331));var b=T;T|=pj;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:Ui(128,0,c),Ui(0,64,c)}}catch(d){if(null===a)throw Error(u(330));Ri(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}T=b;jg();return!0}function mk(a,b,c){b=Ni(c,b);b=fj(a,b,1073741823);Dg(a,b);a=Kj(a,1073741823);null!==a&&Z(a)}
function Ri(a,b){if(3===a.tag)mk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){mk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===jj||!jj.has(d))){a=Ni(b,a);a=ij(c,a,1073741823);Dg(c,a);c=Kj(c,1073741823);null!==c&&Z(c);break}}c=c.return}}
function dk(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);U===a&&W===c?X===uj||X===tj&&1073741823===xj&&cg()-bj<Cj?Tj(a,W):Bj=!0:Pj(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,a.finishedExpirationTime===c&&(a.finishedExpirationTime=0,a.finishedWork=null),Z(a)))}function dj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=Pg(),b=Qg(b,a,null));a=Kj(a,b);null!==a&&Z(a)}var gk;
gk=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||K.current)wg=!0;else{if(d<c){wg=!1;switch(b.tag){case 3:wi(b);li();break;case 5:oh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:L(b.type)&&Jf(b);break;case 4:mh(b,b.stateNode.containerInfo);break;case 10:sg(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return yi(a,b,c);I(M,M.current&
1,b);b=oi(a,b,c);return null!==b?b.sibling:null}I(M,M.current&1,b);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return Bi(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);I(M,M.current,b);if(!d)return null}return oi(a,b,c)}wg=!1}}else wg=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Ef(b,J.current);vg(b,c);e=Ih(null,b,d,a,e,c);b.effectTag|=1;if("object"===
typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;Mh();if(L(d)){var f=!0;Jf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&Og(b,d,g,a);e.updater=Sg;b.stateNode=e;e._reactInternalFiber=b;Wg(b,d,a,c);b=vi(null,b,d,!0,f,c)}else b.tag=0,R(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;Va(e);if(1!==e._status)throw e._result;
e=e._result;b.type=e;f=b.tag=nk(e);a=mg(e,a);switch(f){case 0:b=si(null,b,e,a,c);break;case 1:b=ui(null,b,e,a,c);break;case 11:b=ni(null,b,e,a,c);break;case 14:b=pi(null,b,e,mg(e.type,a),d,c);break;default:throw Error(u(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:mg(d,e),si(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:mg(d,e),ui(a,b,d,e,c);case 3:wi(b);d=b.updateQueue;if(null===d)throw Error(u(282));e=b.memoizedState;e=null!==e?e.element:
null;Hg(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)li(),b=oi(a,b,c);else{if(e=b.stateNode.hydrate)di=re(b.stateNode.containerInfo.firstChild),ci=b,e=ei=!0;if(e)for(c=gh(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else R(a,b,d,c),li();b=b.child}return b;case 5:return oh(b),null===a&&ii(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,oe(d,e)?g=null:null!==f&&oe(d,f)&&(b.effectTag|=16),ti(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=
b.childExpirationTime=1,b=null):(R(a,b,g,c),b=b.child),b;case 6:return null===a&&ii(b),null;case 13:return yi(a,b,c);case 4:return mh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=fh(b,null,d,c):R(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:mg(d,e),ni(a,b,d,e,c);case 7:return R(a,b,b.pendingProps,c),b.child;case 8:return R(a,b,b.pendingProps.children,c),b.child;case 12:return R(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;
e=b.pendingProps;g=b.memoizedProps;f=e.value;sg(b,f);if(null!==g){var h=g.value;f=of(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!K.current){b=oi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=Bg(c,null),l.tag=2,Dg(h,l));h.expirationTime<c&&(h.expirationTime=
c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);ug(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}}R(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,vg(b,c),e=xg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,R(a,b,d,c),b.child;
case 14:return e=b.type,f=mg(e,b.pendingProps),f=mg(e.type,f),pi(a,b,e,f,d,c);case 15:return ri(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:mg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L(d)?(a=!0,Jf(b)):a=!1,vg(b,c),Ug(b,d,e,c),Wg(b,d,e,c),vi(null,b,d,!0,a,c);case 19:return Bi(a,b,c)}throw Error(u(156,b.tag));};var kk=null,Wi=null;
function ok(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);kk=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};Wi=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function pk(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function gi(a,b,c,d){return new pk(a,b,c,d)}
function qi(a){a=a.prototype;return!(!a||!a.isReactComponent)}function nk(a){if("function"===typeof a)return qi(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Oa)return 11;if(a===Ra)return 14}return 2}
function ah(a,b){var c=a.alternate;null===c?(c=gi(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function ch(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)qi(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case Ia:return eh(c.children,e,f,b);case Na:g=8;e|=7;break;case Ja:g=8;e|=1;break;case Ka:return a=gi(12,c,b,e|8),a.elementType=Ka,a.type=Ka,a.expirationTime=f,a;case Pa:return a=gi(13,c,b,e),a.type=Pa,a.elementType=Pa,a.expirationTime=f,a;case Qa:return a=gi(19,c,b,e),a.elementType=Qa,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case La:g=
10;break a;case Ma:g=9;break a;case Oa:g=11;break a;case Ra:g=14;break a;case Sa:g=16;d=null;break a}throw Error(u(130,null==a?a:typeof a,""));}b=gi(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function eh(a,b,c,d){a=gi(7,a,d,b);a.expirationTime=c;return a}function bh(a,b,c){a=gi(6,a,null,b);a.expirationTime=c;return a}
function dh(a,b,c){b=gi(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function qk(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}
function Pj(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function Mj(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0)}
function Nj(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b))}function Rj(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b}
function rk(a,b,c,d){var e=b.current,f=Pg(),g=Mg.suspense;f=Qg(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(ec(c)!==c||1!==c.tag)throw Error(u(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(L(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(u(171));}if(1===c.tag){var k=c.type;if(L(k)){c=If(c,k,h);break a}}c=h}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=Bg(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);Dg(e,b);Rg(e,f);return f}function sk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function tk(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b)}function uk(a,b){tk(a,b);(a=a.alternate)&&tk(a,b)}
function vk(a,b,c){c=null!=c&&!0===c.hydrate;var d=new qk(a,b,c),e=gi(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;a[we]=d.current;c&&0!==b&&wc(9===a.nodeType?a:a.ownerDocument);this._internalRoot=d}vk.prototype.render=function(a,b){rk(a,this._internalRoot,null,void 0===b?null:b)};vk.prototype.unmount=function(a){var b=this._internalRoot,c=void 0===a?null:a,d=b.containerInfo;rk(null,b,null,function(){d[we]=null;null!==c&&c()})};
function wk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function yk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new vk(a,0,b?{hydrate:!0}:void 0)}
function zk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=sk(g);h.call(a)}}rk(b,g,a,e)}else{f=c._reactRootContainer=yk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=sk(g);k.call(a)}}ck(function(){rk(b,g,a,e)})}return sk(g)}function Ak(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Ha,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
jc=function(a){if(13===a.tag){var b=lg(Pg(),150,100);Rg(a,b);uk(a,b)}};kc=function(a){if(13===a.tag){Pg();var b=kg++;Rg(a,b);uk(a,b)}};lc=function(a){if(13===a.tag){var b=Pg();b=Qg(b,a,null);Rg(a,b);uk(a,b)}};
Za=function(a,b,c){switch(b){case "input":Eb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=ye(d);if(!e)throw Error(u(90));zb(d);Eb(d,e)}}}break;case "textarea":Mb(a,c);break;case "select":b=c.value,null!=b&&Jb(a,!!c.multiple,b,!1)}};eb=bk;
fb=function(a,b,c,d){var e=T;T|=4;try{return fg(98,a.bind(null,b,c,d))}finally{T=e,T===S&&jg()}};gb=function(){(T&(1|oj|pj))===S&&(ak(),Sj())};hb=function(a,b){var c=T;T|=2;try{return a(b)}finally{T=c,T===S&&jg()}};function Bk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!wk(b))throw Error(u(200));return Ak(a,b,null,c)}
var Ck={createPortal:Bk,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u(188));throw Error(u(268,Object.keys(a)));}a=ic(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){if(!wk(b))throw Error(u(200));return zk(null,a,b,!0,c)},render:function(a,b,c){if(!wk(b))throw Error(u(200));return zk(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){if(!wk(c))throw Error(u(200));
if(null==a||void 0===a._reactInternalFiber)throw Error(u(38));return zk(a,b,c,!1,d)},unmountComponentAtNode:function(a){if(!wk(a))throw Error(u(40));return a._reactRootContainer?(ck(function(){zk(null,null,a,!1,function(){a._reactRootContainer=null;a[we]=null})}),!0):!1},unstable_createPortal:function(){return Bk.apply(void 0,arguments)},unstable_batchedUpdates:bk,flushSync:function(a,b){if((T&(oj|pj))!==S)throw Error(u(187));var c=T;T|=1;try{return fg(99,a.bind(null,b))}finally{T=c,jg()}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Cc,
xe,ye,Ca.injectEventPluginsByName,fa,Sc,function(a){ya(a,Rc)},cb,db,Pd,Ba,Sj,{current:!1}]}};
(function(a){var b=a.findFiberByHostInstance;return ok(n({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ea.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=ic(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:Fc,bundleType:0,version:"16.12.0",
rendererPackageName:"react-dom"});var Dk={default:Ck},Ek=Dk&&Ck||Dk;module.exports=Ek.default||Ek;

},{"react":"n8MK","object-assign":"J4Nk","scheduler":"MDSO"}],"NKHc":[function(require,module,exports) {
'use strict';

function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
    return;
  }

  if ("production" !== 'production') {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }

  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if ("production" === 'production') {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = require('./cjs/react-dom.production.min.js');
} else {
  module.exports = require('./cjs/react-dom.development.js');
}
},{"./cjs/react-dom.production.min.js":"i17t"}],"KA3k":[function(require,module,exports) {
/** @license React v16.12.0
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';var k=require("object-assign"),l=require("react");function q(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var t="function"===typeof Symbol&&Symbol.for,aa=t?Symbol.for("react.portal"):60106,u=t?Symbol.for("react.fragment"):60107,ba=t?Symbol.for("react.strict_mode"):60108,ca=t?Symbol.for("react.profiler"):60114,w=t?Symbol.for("react.provider"):60109,da=t?Symbol.for("react.context"):60110,ea=t?Symbol.for("react.concurrent_mode"):60111,fa=t?Symbol.for("react.forward_ref"):60112,B=t?Symbol.for("react.suspense"):60113,ha=t?Symbol.for("react.suspense_list"):60120,ia=t?Symbol.for("react.memo"):60115,ja=t?Symbol.for("react.lazy"):
60116,ka=t?Symbol.for("react.fundamental"):60117,la=t?Symbol.for("react.scope"):60119,C=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;C.hasOwnProperty("ReactCurrentDispatcher")||(C.ReactCurrentDispatcher={current:null});C.hasOwnProperty("ReactCurrentBatchConfig")||(C.ReactCurrentBatchConfig={suspense:null});
function ma(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(c){0===a._status&&(c=c.default,a._status=1,a._result=c)},function(c){0===a._status&&(a._status=2,a._result=c)})}}
function D(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case u:return"Fragment";case aa:return"Portal";case ca:return"Profiler";case ba:return"StrictMode";case B:return"Suspense";case ha:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case da:return"Context.Consumer";case w:return"Context.Provider";case fa:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");
case ia:return D(a.type);case ja:if(a=1===a._status?a._result:null)return D(a)}return null}var na={};function E(a,b){for(var c=a._threadCount|0;c<=b;c++)a[c]=a._currentValue2,a._threadCount=c+1}function oa(a,b,c,d){if(d&&(d=a.contextType,"object"===typeof d&&null!==d))return E(d,c),d[c];if(a=a.contextTypes){c={};for(var f in a)c[f]=b[f];b=c}else b=na;return b}for(var F=new Uint16Array(16),H=0;15>H;H++)F[H]=H+1;F[15]=0;
var pa=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qa=Object.prototype.hasOwnProperty,ra={},sa={};
function ta(a){if(qa.call(sa,a))return!0;if(qa.call(ra,a))return!1;if(pa.test(a))return sa[a]=!0;ra[a]=!0;return!1}function ua(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function va(a,b,c,d){if(null===b||"undefined"===typeof b||ua(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function J(a,b,c,d,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=g}var K={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){K[a]=new J(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];K[b]=new J(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){K[a]=new J(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){K[a]=new J(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){K[a]=new J(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){K[a]=new J(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){K[a]=new J(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){K[a]=new J(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){K[a]=new J(a,5,!1,a.toLowerCase(),null,!1)});var L=/[\-:]([a-z])/g;function M(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(L,
M);K[b]=new J(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(L,M);K[b]=new J(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(L,M);K[b]=new J(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){K[a]=new J(a,1,!1,a.toLowerCase(),null,!1)});
K.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){K[a]=new J(a,1,!1,a.toLowerCase(),null,!0)});var wa=/["'&<>]/;
function N(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=wa.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b}a=f!==d?c+a.substring(f,d):c}return a}
function xa(a,b){var c=K.hasOwnProperty(a)?K[a]:null;var d;if(d="style"!==a)d=null!==c?0===c.type:!(2<a.length)||"o"!==a[0]&&"O"!==a[0]||"n"!==a[1]&&"N"!==a[1]?!1:!0;if(d||va(a,b,c,!1))return"";if(null!==c){a=c.attributeName;d=c.type;if(3===d||4===d&&!0===b)return a+'=""';c.sanitizeURL&&(b=""+b);return a+"="+('"'+N(b)+'"')}return ta(a)?a+"="+('"'+N(b)+'"'):""}function ya(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
var za="function"===typeof Object.is?Object.is:ya,O=null,P=null,Q=null,R=!1,S=!1,U=null,V=0;function W(){if(null===O)throw Error(q(321));return O}function Aa(){if(0<V)throw Error(q(312));return{memoizedState:null,queue:null,next:null}}function Ba(){null===Q?null===P?(R=!1,P=Q=Aa()):(R=!0,Q=P):null===Q.next?(R=!1,Q=Q.next=Aa()):(R=!0,Q=Q.next);return Q}function Ca(a,b,c,d){for(;S;)S=!1,V+=1,Q=null,c=a(b,d);P=O=null;V=0;Q=U=null;return c}function Da(a,b){return"function"===typeof b?b(a):b}
function Ea(a,b,c){O=W();Q=Ba();if(R){var d=Q.queue;b=d.dispatch;if(null!==U&&(c=U.get(d),void 0!==c)){U.delete(d);d=Q.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);Q.memoizedState=d;return[d,b]}return[Q.memoizedState,b]}a=a===Da?"function"===typeof b?b():b:void 0!==c?c(b):b;Q.memoizedState=a;a=Q.queue={last:null,dispatch:null};a=a.dispatch=Fa.bind(null,O,a);return[Q.memoizedState,a]}
function Fa(a,b,c){if(!(25>V))throw Error(q(301));if(a===O)if(S=!0,a={action:c,next:null},null===U&&(U=new Map),c=U.get(b),void 0===c)U.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}}function Ga(){}
var X=0,Ha={readContext:function(a){var b=X;E(a,b);return a[b]},useContext:function(a){W();var b=X;E(a,b);return a[b]},useMemo:function(a,b){O=W();Q=Ba();b=void 0===b?null:b;if(null!==Q){var c=Q.memoizedState;if(null!==c&&null!==b){a:{var d=c[1];if(null===d)d=!1;else{for(var f=0;f<d.length&&f<b.length;f++)if(!za(b[f],d[f])){d=!1;break a}d=!0}}if(d)return c[0]}}a=a();Q.memoizedState=[a,b];return a},useReducer:Ea,useRef:function(a){O=W();Q=Ba();var b=Q.memoizedState;return null===b?(a={current:a},Q.memoizedState=
a):b},useState:function(a){return Ea(Da,a)},useLayoutEffect:function(){},useCallback:function(a){return a},useImperativeHandle:Ga,useEffect:Ga,useDebugValue:Ga,useResponder:function(a,b){return{props:b,responder:a}},useDeferredValue:function(a){W();return a},useTransition:function(){W();return[function(a){a()},!1]}},Ia={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Ja(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
var Ka={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},La=k({menuitem:!0},Ka),Y={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,
gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ma=["Webkit","ms","Moz","O"];Object.keys(Y).forEach(function(a){Ma.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Y[b]=Y[a]})});
var Na=/([A-Z])/g,Oa=/^ms-/,Z=l.Children.toArray,Pa=C.ReactCurrentDispatcher,Qa={listing:!0,pre:!0,textarea:!0},Ra=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Sa={},Ta={};function Ua(a){if(void 0===a||null===a)return a;var b="";l.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}var Va=Object.prototype.hasOwnProperty,Wa={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function Xa(a,b){if(void 0===a)throw Error(q(152,D(b)||"Component"));}
function Ya(a,b,c){function d(d,g){var e=g.prototype&&g.prototype.isReactComponent,f=oa(g,b,c,e),x=[],h=!1,m={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===x)return null},enqueueReplaceState:function(a,c){h=!0;x=[c]},enqueueSetState:function(a,c){if(null===x)return null;x.push(c)}};if(e){if(e=new g(d.props,f,m),"function"===typeof g.getDerivedStateFromProps){var v=g.getDerivedStateFromProps.call(null,d.props,e.state);null!=v&&(e.state=k({},e.state,v))}}else if(O={},e=g(d.props,
f,m),e=Ca(g,d.props,e,f),null==e||null==e.render){a=e;Xa(a,g);return}e.props=d.props;e.context=f;e.updater=m;m=e.state;void 0===m&&(e.state=m=null);if("function"===typeof e.UNSAFE_componentWillMount||"function"===typeof e.componentWillMount)if("function"===typeof e.componentWillMount&&"function"!==typeof g.getDerivedStateFromProps&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&"function"!==typeof g.getDerivedStateFromProps&&e.UNSAFE_componentWillMount(),x.length){m=x;var r=
h;x=null;h=!1;if(r&&1===m.length)e.state=m[0];else{v=r?m[0]:e.state;var y=!0;for(r=r?1:0;r<m.length;r++){var p=m[r];p="function"===typeof p?p.call(e,v,d.props,f):p;null!=p&&(y?(y=!1,v=k({},v,p)):k(v,p))}e.state=v}}else x=null;a=e.render();Xa(a,g);if("function"===typeof e.getChildContext&&(d=g.childContextTypes,"object"===typeof d)){var A=e.getChildContext();for(var T in A)if(!(T in d))throw Error(q(108,D(g)||"Unknown",T));}A&&(b=k({},b,A))}for(;l.isValidElement(a);){var f=a,g=f.type;if("function"!==
typeof g)break;d(f,g)}return{child:a,context:b}}
var Za=function(){function a(a,b){l.isValidElement(a)?a.type!==u?a=[a]:(a=a.props.children,a=l.isValidElement(a)?[a]:Z(a)):a=Z(a);a={type:null,domNamespace:Ia.html,children:a,childIndex:0,context:na,footer:""};var c=F[0];if(0===c){var g=F;c=g.length;var d=2*c;if(!(65536>=d))throw Error(q(304));var h=new Uint16Array(d);h.set(g);F=h;F[0]=c+1;for(g=c;g<d-1;g++)F[g]=g+1;F[d-1]=0}else F[0]=F[c];this.threadID=c;this.stack=[a];this.exhausted=!1;this.currentSelectValue=null;this.previousWasTextNode=!1;this.makeStaticMarkup=
b;this.suspenseDepth=0;this.contextIndex=-1;this.contextStack=[];this.contextValueStack=[]}var b=a.prototype;b.destroy=function(){if(!this.exhausted){this.exhausted=!0;this.clearProviders();var a=this.threadID;F[a]=F[0];F[0]=a}};b.pushProvider=function(a){var c=++this.contextIndex,b=a.type._context,g=this.threadID;E(b,g);var x=b[g];this.contextStack[c]=b;this.contextValueStack[c]=x;b[g]=a.props.value};b.popProvider=function(){var a=this.contextIndex,b=this.contextStack[a],f=this.contextValueStack[a];
this.contextStack[a]=null;this.contextValueStack[a]=null;this.contextIndex--;b[this.threadID]=f};b.clearProviders=function(){for(var a=this.contextIndex;0<=a;a--)this.contextStack[a][this.threadID]=this.contextValueStack[a]};b.read=function(a){if(this.exhausted)return null;var b=X;X=this.threadID;var c=Pa.current;Pa.current=Ha;try{for(var g=[""],x=!1;g[0].length<a;){if(0===this.stack.length){this.exhausted=!0;var h=this.threadID;F[h]=F[0];F[0]=h;break}var e=this.stack[this.stack.length-1];if(x||e.childIndex>=
e.children.length){var I=e.footer;""!==I&&(this.previousWasTextNode=!1);this.stack.pop();if("select"===e.type)this.currentSelectValue=null;else if(null!=e.type&&null!=e.type.type&&e.type.type.$$typeof===w)this.popProvider(e.type);else if(e.type===B){this.suspenseDepth--;var G=g.pop();if(x){x=!1;var n=e.fallbackFrame;if(!n)throw Error(q(303));this.stack.push(n);g[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}else g[this.suspenseDepth]+=G}g[this.suspenseDepth]+=I}else{var m=e.children[e.childIndex++],
v="";try{v+=this.render(m,e.context,e.domNamespace)}catch(r){if(null!=r&&"function"===typeof r.then)throw Error(q(294));throw r;}finally{}g.length<=this.suspenseDepth&&g.push("");g[this.suspenseDepth]+=v}}return g[0]}finally{Pa.current=c,X=b}};b.render=function(a,b,f){if("string"===typeof a||"number"===typeof a){f=""+a;if(""===f)return"";if(this.makeStaticMarkup)return N(f);if(this.previousWasTextNode)return"\x3c!-- --\x3e"+N(f);this.previousWasTextNode=!0;return N(f)}b=Ya(a,b,this.threadID);a=b.child;
b=b.context;if(null===a||!1===a)return"";if(!l.isValidElement(a)){if(null!=a&&null!=a.$$typeof){f=a.$$typeof;if(f===aa)throw Error(q(257));throw Error(q(258,f.toString()));}a=Z(a);this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""});return""}var c=a.type;if("string"===typeof c)return this.renderDOM(a,b,f);switch(c){case ba:case ea:case ca:case ha:case u:return a=Z(a.props.children),this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),
"";case B:throw Error(q(294));}if("object"===typeof c&&null!==c)switch(c.$$typeof){case fa:O={};var d=c.render(a.props,a.ref);d=Ca(c.render,a.props,d,a.ref);d=Z(d);this.stack.push({type:null,domNamespace:f,children:d,childIndex:0,context:b,footer:""});return"";case ia:return a=[l.createElement(c.type,k({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),"";case w:return c=Z(a.props.children),f={type:a,domNamespace:f,children:c,childIndex:0,
context:b,footer:""},this.pushProvider(a),this.stack.push(f),"";case da:c=a.type;d=a.props;var h=this.threadID;E(c,h);c=Z(d.children(c[h]));this.stack.push({type:a,domNamespace:f,children:c,childIndex:0,context:b,footer:""});return"";case ka:throw Error(q(338));case ja:switch(c=a.type,ma(c),c._status){case 1:return a=[l.createElement(c._result,k({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),"";case 2:throw c._result;default:throw Error(q(295));
}case la:throw Error(q(343));}throw Error(q(130,null==c?c:typeof c,""));};b.renderDOM=function(a,b,f){var c=a.type.toLowerCase();f===Ia.html&&Ja(c);if(!Sa.hasOwnProperty(c)){if(!Ra.test(c))throw Error(q(65,c));Sa[c]=!0}var d=a.props;if("input"===c)d=k({type:void 0},d,{defaultChecked:void 0,defaultValue:void 0,value:null!=d.value?d.value:d.defaultValue,checked:null!=d.checked?d.checked:d.defaultChecked});else if("textarea"===c){var h=d.value;if(null==h){h=d.defaultValue;var e=d.children;if(null!=e){if(null!=
h)throw Error(q(92));if(Array.isArray(e)){if(!(1>=e.length))throw Error(q(93));e=e[0]}h=""+e}null==h&&(h="")}d=k({},d,{value:void 0,children:""+h})}else if("select"===c)this.currentSelectValue=null!=d.value?d.value:d.defaultValue,d=k({},d,{value:void 0});else if("option"===c){e=this.currentSelectValue;var I=Ua(d.children);if(null!=e){var G=null!=d.value?d.value+"":I;h=!1;if(Array.isArray(e))for(var n=0;n<e.length;n++){if(""+e[n]===G){h=!0;break}}else h=""+e===G;d=k({selected:void 0,children:void 0},
d,{selected:h,children:I})}}if(h=d){if(La[c]&&(null!=h.children||null!=h.dangerouslySetInnerHTML))throw Error(q(137,c,""));if(null!=h.dangerouslySetInnerHTML){if(null!=h.children)throw Error(q(60));if(!("object"===typeof h.dangerouslySetInnerHTML&&"__html"in h.dangerouslySetInnerHTML))throw Error(q(61));}if(null!=h.style&&"object"!==typeof h.style)throw Error(q(62,""));}h=d;e=this.makeStaticMarkup;I=1===this.stack.length;G="<"+a.type;for(z in h)if(Va.call(h,z)){var m=h[z];if(null!=m){if("style"===
z){n=void 0;var v="",r="";for(n in m)if(m.hasOwnProperty(n)){var y=0===n.indexOf("--"),p=m[n];if(null!=p){if(y)var A=n;else if(A=n,Ta.hasOwnProperty(A))A=Ta[A];else{var T=A.replace(Na,"-$1").toLowerCase().replace(Oa,"-ms-");A=Ta[A]=T}v+=r+A+":";r=n;y=null==p||"boolean"===typeof p||""===p?"":y||"number"!==typeof p||0===p||Y.hasOwnProperty(r)&&Y[r]?(""+p).trim():p+"px";v+=y;r=";"}}m=v||null}n=null;b:if(y=c,p=h,-1===y.indexOf("-"))y="string"===typeof p.is;else switch(y){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":y=
!1;break b;default:y=!0}y?Wa.hasOwnProperty(z)||(n=z,n=ta(n)&&null!=m?n+"="+('"'+N(m)+'"'):""):n=xa(z,m);n&&(G+=" "+n)}}e||I&&(G+=' data-reactroot=""');var z=G;h="";Ka.hasOwnProperty(c)?z+="/>":(z+=">",h="</"+a.type+">");a:{e=d.dangerouslySetInnerHTML;if(null!=e){if(null!=e.__html){e=e.__html;break a}}else if(e=d.children,"string"===typeof e||"number"===typeof e){e=N(e);break a}e=null}null!=e?(d=[],Qa[c]&&"\n"===e.charAt(0)&&(z+="\n"),z+=e):d=Z(d.children);a=a.type;f=null==f||"http://www.w3.org/1999/xhtml"===
f?Ja(a):"http://www.w3.org/2000/svg"===f&&"foreignObject"===a?"http://www.w3.org/1999/xhtml":f;this.stack.push({domNamespace:f,type:c,children:d,childIndex:0,context:b,footer:h});this.previousWasTextNode=!1;return z};return a}(),$a={renderToString:function(a){a=new Za(a,!1);try{return a.read(Infinity)}finally{a.destroy()}},renderToStaticMarkup:function(a){a=new Za(a,!0);try{return a.read(Infinity)}finally{a.destroy()}},renderToNodeStream:function(){throw Error(q(207));},renderToStaticNodeStream:function(){throw Error(q(208));
},version:"16.12.0"},ab={default:$a},bb=ab&&$a||ab;module.exports=bb.default||bb;

},{"object-assign":"J4Nk","react":"n8MK"}],"KpxE":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/react-dom-server.browser.production.min.js');
} else {
  module.exports = require('./cjs/react-dom-server.browser.development.js');
}
},{"./cjs/react-dom-server.browser.production.min.js":"KA3k"}],"xbCx":[function(require,module,exports) {
var global = arguments[3];
var $jscomp = $jscomp || {};
$jscomp.scope = {};

$jscomp.arrayIteratorImpl = function (a) {
  var c = 0;
  return function () {
    return c < a.length ? {
      done: !1,
      value: a[c++]
    } : {
      done: !0
    };
  };
};

$jscomp.arrayIterator = function (a) {
  return {
    next: $jscomp.arrayIteratorImpl(a)
  };
};

$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, c, f) {
  a != Array.prototype && a != Object.prototype && (a[c] = f.value);
};

$jscomp.getGlobal = function (a) {
  return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a;
};

$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";

$jscomp.initSymbol = function () {
  $jscomp.initSymbol = function () {};

  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};

$jscomp.SymbolClass = function (a, c) {
  this.$jscomp$symbol$id_ = a;
  $jscomp.defineProperty(this, "description", {
    configurable: !0,
    writable: !0,
    value: c
  });
};

$jscomp.SymbolClass.prototype.toString = function () {
  return this.$jscomp$symbol$id_;
};

$jscomp.Symbol = function () {
  function a(f) {
    if (this instanceof a) throw new TypeError("Symbol is not a constructor");
    return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (f || "") + "_" + c++, f);
  }

  var c = 0;
  return a;
}();

$jscomp.initSymbolIterator = function () {
  $jscomp.initSymbol();
  var a = $jscomp.global.Symbol.iterator;
  a || (a = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator"));
  "function" != typeof Array.prototype[a] && $jscomp.defineProperty(Array.prototype, a, {
    configurable: !0,
    writable: !0,
    value: function value() {
      return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
    }
  });

  $jscomp.initSymbolIterator = function () {};
};

$jscomp.initSymbolAsyncIterator = function () {
  $jscomp.initSymbol();
  var a = $jscomp.global.Symbol.asyncIterator;
  a || (a = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator"));

  $jscomp.initSymbolAsyncIterator = function () {};
};

$jscomp.iteratorPrototype = function (a) {
  $jscomp.initSymbolIterator();
  a = {
    next: a
  };

  a[$jscomp.global.Symbol.iterator] = function () {
    return this;
  };

  return a;
};

$jscomp.checkStringArgs = function (a, c, f) {
  if (null == a) throw new TypeError("The 'this' value for String.prototype." + f + " must not be null or undefined");
  if (c instanceof RegExp) throw new TypeError("First argument to String.prototype." + f + " must not be a regular expression");
  return a + "";
};

$jscomp.polyfill = function (a, c, f, k) {
  if (c) {
    f = $jscomp.global;
    a = a.split(".");

    for (k = 0; k < a.length - 1; k++) {
      var g = a[k];
      g in f || (f[g] = {});
      f = f[g];
    }

    a = a[a.length - 1];
    k = f[a];
    c = c(k);
    c != k && null != c && $jscomp.defineProperty(f, a, {
      configurable: !0,
      writable: !0,
      value: c
    });
  }
};

$jscomp.polyfill("String.prototype.codePointAt", function (a) {
  return a ? a : function (a) {
    var c = $jscomp.checkStringArgs(this, null, "codePointAt"),
        k = c.length;
    a = Number(a) || 0;

    if (0 <= a && a < k) {
      a |= 0;
      var g = c.charCodeAt(a);
      if (55296 > g || 56319 < g || a + 1 === k) return g;
      a = c.charCodeAt(a + 1);
      return 56320 > a || 57343 < a ? g : 1024 * (g - 55296) + a + 9216;
    }
  };
}, "es6", "es3");
$jscomp.polyfill("String.fromCodePoint", function (a) {
  return a ? a : function (a) {
    for (var c = "", k = 0; k < arguments.length; k++) {
      var g = Number(arguments[k]);
      if (0 > g || 1114111 < g || g !== Math.floor(g)) throw new RangeError("invalid_code_point " + g);
      65535 >= g ? c += String.fromCharCode(g) : (g -= 65536, c += String.fromCharCode(g >>> 10 & 1023 | 55296), c += String.fromCharCode(g & 1023 | 56320));
    }

    return c;
  };
}, "es6", "es3");
$jscomp.polyfill("Array.from", function (a) {
  return a ? a : function (a, f, k) {
    f = null != f ? f : function (a) {
      return a;
    };
    var c = [],
        b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];

    if ("function" == typeof b) {
      a = b.call(a);

      for (var e = 0; !(b = a.next()).done;) {
        c.push(f.call(k, b.value, e++));
      }
    } else for (b = a.length, e = 0; e < b; e++) {
      c.push(f.call(k, a[e], e));
    }

    return c;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.endsWith", function (a) {
  return a ? a : function (a, f) {
    var c = $jscomp.checkStringArgs(this, a, "endsWith");
    a += "";
    void 0 === f && (f = c.length);
    f = Math.max(0, Math.min(f | 0, c.length));

    for (var g = a.length; 0 < g && 0 < f;) {
      if (c[--f] != a[--g]) return !1;
    }

    return 0 >= g;
  };
}, "es6", "es3");
$jscomp.polyfill("Object.is", function (a) {
  return a ? a : function (a, f) {
    return a === f ? 0 !== a || 1 / a === 1 / f : a !== a && f !== f;
  };
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.includes", function (a) {
  return a ? a : function (a, f) {
    var c = this;
    c instanceof String && (c = String(c));
    var g = c.length;
    f = f || 0;

    for (0 > f && (f = Math.max(f + g, 0)); f < g; f++) {
      var b = c[f];
      if (b === a || Object.is(b, a)) return !0;
    }

    return !1;
  };
}, "es7", "es3");
$jscomp.polyfill("String.prototype.includes", function (a) {
  return a ? a : function (a, f) {
    return -1 !== $jscomp.checkStringArgs(this, a, "includes").indexOf(a, f || 0);
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.repeat", function (a) {
  return a ? a : function (a) {
    var c = $jscomp.checkStringArgs(this, null, "repeat");
    if (0 > a || 1342177279 < a) throw new RangeError("Invalid count value");
    a |= 0;

    for (var k = ""; a;) {
      if (a & 1 && (k += c), a >>>= 1) c += c;
    }

    return k;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.startsWith", function (a) {
  return a ? a : function (a, f) {
    var c = $jscomp.checkStringArgs(this, a, "startsWith");
    a += "";
    var g = c.length,
        b = a.length;
    f = Math.max(0, Math.min(f | 0, c.length));

    for (var e = 0; e < b && f < g;) {
      if (c[f++] != a[e++]) return !1;
    }

    return e >= b;
  };
}, "es6", "es3");

$jscomp.iteratorFromArray = function (a, c) {
  $jscomp.initSymbolIterator();
  a instanceof String && (a += "");
  var f = 0,
      k = {
    next: function next() {
      if (f < a.length) {
        var g = f++;
        return {
          value: c(g, a[g]),
          done: !1
        };
      }

      k.next = function () {
        return {
          done: !0,
          value: void 0
        };
      };

      return k.next();
    }
  };

  k[Symbol.iterator] = function () {
    return k;
  };

  return k;
};

$jscomp.polyfill("Array.prototype.keys", function (a) {
  return a ? a : function () {
    return $jscomp.iteratorFromArray(this, function (a) {
      return a;
    });
  };
}, "es6", "es3");

$jscomp.findInternal = function (a, c, f) {
  a instanceof String && (a = String(a));

  for (var k = a.length, g = 0; g < k; g++) {
    var b = a[g];
    if (c.call(f, b, g, a)) return {
      i: g,
      v: b
    };
  }

  return {
    i: -1,
    v: void 0
  };
};

$jscomp.polyfill("Array.prototype.find", function (a) {
  return a ? a : function (a, f) {
    return $jscomp.findInternal(this, a, f).v;
  };
}, "es6", "es3");
var PS = {};

(function (a) {
  a["Control.Alt"] = a["Control.Alt"] || {};
  a = a["Control.Alt"];

  a.Alt = function (a, f) {
    this.Functor0 = a;
    this.alt = f;
  };

  a.alt = function (a) {
    return a.alt;
  };
})(PS);

(function (a) {
  a["Control.Alternative"] = a["Control.Alternative"] || {};

  a["Control.Alternative"].Alternative = function (a, f) {
    this.Applicative0 = a;
    this.Plus1 = f;
  };
})(PS);

(function (a) {
  a.arrayApply = function (a) {
    return function (c) {
      for (var f = a.length, g = c.length, b = Array(f * g), e = 0, d = 0; d < f; d++) {
        for (var l = a[d], h = 0; h < g; h++) {
          b[e++] = l(c[h]);
        }
      }

      return b;
    };
  };
})(PS["Control.Apply"] = PS["Control.Apply"] || {});

(function (a) {
  a["Control.Semigroupoid"] = a["Control.Semigroupoid"] || {};
  a = a["Control.Semigroupoid"];
  var c = new function (a) {
    this.compose = a;
  }(function (a) {
    return function (c) {
      return function (f) {
        return a(c(f));
      };
    };
  });

  a.compose = function (a) {
    return a.compose;
  };

  a.composeFlipped = function (a) {
    return function (c) {
      return function (f) {
        return (0, a.compose)(f)(c);
      };
    };
  };

  a.semigroupoidFn = c;
})(PS);

(function (a) {
  a["Control.Category"] = a["Control.Category"] || {};
  var c = a["Control.Category"],
      f = a["Control.Semigroupoid"];
  a = new function (a, c) {
    this.Semigroupoid0 = a;
    this.identity = c;
  }(function () {
    return f.semigroupoidFn;
  }, function (a) {
    return a;
  });

  c.identity = function (a) {
    return a.identity;
  };

  c.categoryFn = a;
})(PS);

(function (a) {
  a["Data.Function"] = a["Data.Function"] || {};
  a = a["Data.Function"];

  a.flip = function (a) {
    return function (c) {
      return function (f) {
        return a(f)(c);
      };
    };
  };

  a["const"] = function (a) {
    return function (c) {
      return a;
    };
  };
})(PS);

(function (a) {
  a.arrayMap = function (a) {
    return function (c) {
      for (var f = c.length, g = Array(f), b = 0; b < f; b++) {
        g[b] = a(c[b]);
      }

      return g;
    };
  };
})(PS["Data.Functor"] = PS["Data.Functor"] || {});

(function (a) {
  a.unit = {};
})(PS["Data.Unit"] = PS["Data.Unit"] || {});

(function (a) {
  a["Data.Unit"] = a["Data.Unit"] || {};
  a["Data.Unit"].unit = a["Data.Unit"].unit;
})(PS);

(function (a) {
  a["Data.Functor"] = a["Data.Functor"] || {};
  var c = a["Data.Functor"],
      f = a["Data.Functor"],
      k = a["Control.Semigroupoid"],
      g = a["Data.Function"],
      b = a["Data.Unit"];

  a = function a(_a) {
    this.map = _a;
  };

  k = new a(k.compose(k.semigroupoidFn));
  f = new a(f.arrayMap);
  c.Functor = a;

  c.map = function (a) {
    return a.map;
  };

  c.mapFlipped = function (a) {
    return function (b) {
      return function (d) {
        return (0, a.map)(d)(b);
      };
    };
  };

  c["void"] = function (a) {
    return (0, a.map)(g["const"](b.unit));
  };

  c.voidRight = function (a) {
    return function (b) {
      return (0, a.map)(g["const"](b));
    };
  };

  c.voidLeft = function (a) {
    return function (b) {
      return function (d) {
        return (0, a.map)(g["const"](d))(b);
      };
    };
  };

  c.flap = function (a) {
    return function (b) {
      return function (d) {
        return (0, a.map)(function (a) {
          return a(d);
        })(b);
      };
    };
  };

  c.functorFn = k;
  c.functorArray = f;
})(PS);

(function (a) {
  a["Control.Apply"] = a["Control.Apply"] || {};
  var c = a["Control.Apply"],
      f = a["Control.Apply"],
      k = a["Control.Category"],
      g = a["Data.Function"],
      b = a["Data.Functor"];

  a = function a(_a2, b) {
    this.Functor0 = _a2;
    this.apply = b;
  };

  var e = new a(function () {
    return b.functorFn;
  }, function (a) {
    return function (b) {
      return function (d) {
        return a(d)(b(d));
      };
    };
  });
  f = new a(function () {
    return b.functorArray;
  }, f.arrayApply);
  c.Apply = a;

  c.apply = function (a) {
    return a.apply;
  };

  c.applyFirst = function (a) {
    return function (d) {
      return function (c) {
        return (0, a.apply)(b.map(a.Functor0())(g["const"])(d))(c);
      };
    };
  };

  c.applySecond = function (a) {
    return function (c) {
      return function (d) {
        return (0, a.apply)(b.map(a.Functor0())(g["const"](k.identity(k.categoryFn)))(c))(d);
      };
    };
  };

  c.applyFn = e;
  c.applyArray = f;
})(PS);

(function (a) {
  a["Control.Applicative"] = a["Control.Applicative"] || {};
  var c = a["Control.Applicative"],
      f = a["Control.Apply"],
      k = a["Data.Unit"];

  a = function a(_a3, c) {
    this.Apply0 = _a3;
    this.pure = c;
  };

  var g = new a(function () {
    return f.applyArray;
  }, function (a) {
    return [a];
  });
  c.Applicative = a;

  c.pure = function (a) {
    return a.pure;
  };

  c.liftA1 = function (a) {
    return function (b) {
      return function (c) {
        return f.apply(a.Apply0())((0, a.pure)(b))(c);
      };
    };
  };

  c.unless = function (a) {
    return function (b) {
      return function (c) {
        if (!b) return c;
        if (b) return (0, a.pure)(k.unit);
        throw Error("Failed pattern match at Control.Applicative (line 62, column 1 - line 62, column 65): " + [b.constructor.name, c.constructor.name]);
      };
    };
  };

  c.applicativeArray = g;
})(PS);

(function (a) {
  a.arrayBind = function (a) {
    return function (c) {
      for (var f = [], g = 0, b = a.length; g < b; g++) {
        Array.prototype.push.apply(f, c(a[g]));
      }

      return f;
    };
  };
})(PS["Control.Bind"] = PS["Control.Bind"] || {});

(function (a) {
  a["Control.Bind"] = a["Control.Bind"] || {};

  var c = a["Control.Bind"],
      f = a["Control.Apply"],
      k = a["Control.Category"],
      g = a["Data.Function"],
      b = function b(a, _b) {
    this.Apply0 = a;
    this.bind = _b;
  };

  a = new b(function () {
    return f.applyArray;
  }, a["Control.Bind"].arrayBind);
  var e = new function (a) {
    this.discard = a;
  }(function (a) {
    return a.bind;
  });
  c.Bind = b;

  c.bind = function (a) {
    return a.bind;
  };

  c.bindFlipped = function (a) {
    return g.flip(a.bind);
  };

  c.discard = function (a) {
    return a.discard;
  };

  c.join = function (a) {
    return function (b) {
      return (0, a.bind)(b)(k.identity(k.categoryFn));
    };
  };

  c.bindArray = a;
  c.discardUnit = e;
})(PS);

(function (a) {
  a["Control.Monad"] = a["Control.Monad"] || {};
  var c = a["Control.Monad"],
      f = a["Control.Applicative"],
      k = a["Control.Bind"];

  c.Monad = function (a, b) {
    this.Applicative0 = a;
    this.Bind1 = b;
  };

  c.ap = function (a) {
    return function (b) {
      return function (c) {
        return k.bind(a.Bind1())(b)(function (b) {
          return k.bind(a.Bind1())(c)(function (c) {
            return f.pure(a.Applicative0())(b(c));
          });
        });
      };
    };
  };
})(PS);

(function (a) {
  a["Control.Lazy"] = a["Control.Lazy"] || {};
  a = a["Control.Lazy"];

  a.defer = function (a) {
    return a.defer;
  };

  a.Lazy = function (a) {
    this.defer = a;
  };
})(PS);

(function (a) {
  a["Data.Bifunctor"] = a["Data.Bifunctor"] || {};
  var c = a["Data.Bifunctor"],
      f = a["Control.Category"];

  c.bimap = function (a) {
    return a.bimap;
  };

  c.Bifunctor = function (a) {
    this.bimap = a;
  };

  c.lmap = function (a) {
    return function (c) {
      return (0, a.bimap)(c)(f.identity(f.categoryFn));
    };
  };
})(PS);

(function (a) {
  a.topInt = 2147483647;
  a.bottomInt = -2147483648;
  a.topChar = String.fromCharCode(65535);
  a.bottomChar = String.fromCharCode(0);
})(PS["Data.Bounded"] = PS["Data.Bounded"] || {});

(function (a) {
  var c = function c(a) {
    return function (c) {
      return function (f) {
        return function (b) {
          return function (e) {
            return b < e ? a : b === e ? c : f;
          };
        };
      };
    };
  };

  a.ordBooleanImpl = c;
  a.ordIntImpl = c;
  a.ordCharImpl = c;
})(PS["Data.Ord"] = PS["Data.Ord"] || {});

(function (a) {
  var c = function c(a) {
    return function (c) {
      return a === c;
    };
  };

  a.eqBooleanImpl = c;
  a.eqIntImpl = c;
  a.eqCharImpl = c;
  a.eqStringImpl = c;
})(PS["Data.Eq"] = PS["Data.Eq"] || {});

(function (a) {
  a["Data.Symbol"] = a["Data.Symbol"] || {};
  a = a["Data.Symbol"];

  var c = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  a.IsSymbol = function (a) {
    this.reflectSymbol = a;
  };

  a.reflectSymbol = function (a) {
    return a.reflectSymbol;
  };

  a.SProxy = c;
})(PS);

(function (a) {
  a.unsafeGet = function (a) {
    return function (c) {
      return c[a];
    };
  };

  a.unsafeSet = function (a) {
    return function (c) {
      return function (f) {
        var g = {},
            b;

        for (b in f) {
          ({}).hasOwnProperty.call(f, b) && (g[b] = f[b]);
        }

        g[a] = c;
        return g;
      };
    };
  };
})(PS["Record.Unsafe"] = PS["Record.Unsafe"] || {});

(function (a) {
  a["Record.Unsafe"] = a["Record.Unsafe"] || {};
  var c = a["Record.Unsafe"];
  a = a["Record.Unsafe"];
  c.unsafeGet = a.unsafeGet;
  c.unsafeSet = a.unsafeSet;
})(PS);

(function (a) {
  a["Type.Data.RowList"] = a["Type.Data.RowList"] || {};
  a = a["Type.Data.RowList"];

  var c = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  a.RLProxy = c;
})(PS);

(function (a) {
  a["Data.Eq"] = a["Data.Eq"] || {};

  var c = a["Data.Eq"],
      f = a["Data.Eq"],
      k = a["Data.Symbol"],
      g = a["Record.Unsafe"],
      b = a["Type.Data.RowList"],
      e = function e(a) {
    this.eqRecord = a;
  },
      d = function d(a) {
    this.eq = a;
  };

  a = new d(f.eqStringImpl);
  var l = new e(function (a) {
    return function (a) {
      return function (a) {
        return !0;
      };
    };
  }),
      h = new d(f.eqIntImpl),
      m = new d(f.eqCharImpl);
  f = new d(f.eqBooleanImpl);
  c.Eq = d;

  c.eq = function (a) {
    return a.eq;
  };

  c.eqBoolean = f;
  c.eqInt = h;
  c.eqChar = m;
  c.eqString = a;

  c.eqRec = function (a) {
    return function (a) {
      return new d((0, a.eqRecord)(b.RLProxy.value));
    };
  };

  c.eqRowNil = l;

  c.eqRowCons = function (a) {
    return function (c) {
      return function (c) {
        return function (d) {
          return new e(function (e) {
            return function (e) {
              return function (f) {
                var h = (0, a.eqRecord)(b.RLProxy.value)(e)(f),
                    l = k.reflectSymbol(c)(k.SProxy.value);
                l = g.unsafeGet(l);
                return (0, d.eq)(l(e))(l(f)) && h;
              };
            };
          });
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Ordering"] = a["Data.Ordering"] || {};
  a = a["Data.Ordering"];

  var c = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      f = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      k = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  a.LT = c;
  a.GT = f;
  a.EQ = k;
})(PS);

(function (a) {
  a.intSub = function (a) {
    return function (c) {
      return a - c | 0;
    };
  };
})(PS["Data.Ring"] = PS["Data.Ring"] || {});

(function (a) {
  a.intAdd = function (a) {
    return function (c) {
      return a + c | 0;
    };
  };

  a.intMul = function (a) {
    return function (c) {
      return a * c | 0;
    };
  };
})(PS["Data.Semiring"] = PS["Data.Semiring"] || {});

(function (a) {
  a["Data.Semiring"] = a["Data.Semiring"] || {};
  var c = a["Data.Semiring"];
  a = a["Data.Semiring"];
  a = new function (a, c, g, b) {
    this.add = a;
    this.mul = c;
    this.one = g;
    this.zero = b;
  }(a.intAdd, a.intMul, 1, 0);

  c.zero = function (a) {
    return a.zero;
  };

  c.semiringInt = a;
})(PS);

(function (a) {
  a["Data.Ring"] = a["Data.Ring"] || {};
  var c = a["Data.Ring"],
      f = a["Data.Semiring"];
  a = new function (a, c) {
    this.Semiring0 = a;
    this.sub = c;
  }(function () {
    return f.semiringInt;
  }, a["Data.Ring"].intSub);

  c.negate = function (a) {
    return function (c) {
      return (0, a.sub)(f.zero(a.Semiring0()))(c);
    };
  };

  c.ringInt = a;
})(PS);

(function (a) {
  a["Data.Ord"] = a["Data.Ord"] || {};
  var c = a["Data.Ord"],
      f = a["Data.Ord"],
      k = a["Data.Eq"],
      g = a["Data.Ordering"],
      b = a["Data.Ring"],
      e = a["Data.Semiring"];

  a = function a(_a4, b) {
    this.Eq0 = _a4;
    this.compare = b;
  };

  var d = new a(function () {
    return k.eqInt;
  }, f.ordIntImpl(g.LT.value)(g.EQ.value)(g.GT.value)),
      l = new a(function () {
    return k.eqChar;
  }, f.ordCharImpl(g.LT.value)(g.EQ.value)(g.GT.value));
  f = new a(function () {
    return k.eqBoolean;
  }, f.ordBooleanImpl(g.LT.value)(g.EQ.value)(g.GT.value));

  var h = function h(a) {
    return function (b) {
      return function (c) {
        return (0, a.compare)(b)(c) instanceof g.LT ? !1 : !0;
      };
    };
  };

  c.Ord = a;

  c.compare = function (a) {
    return a.compare;
  };

  c.max = function (a) {
    return function (b) {
      return function (c) {
        var d = (0, a.compare)(b)(c);
        if (d instanceof g.LT) return c;
        if (d instanceof g.EQ || d instanceof g.GT) return b;
        throw Error("Failed pattern match at Data.Ord (line 167, column 3 - line 170, column 12): " + [d.constructor.name]);
      };
    };
  };

  c.abs = function (a) {
    return function (c) {
      return function (d) {
        return h(a)(d)(e.zero(c.Semiring0())) ? d : b.negate(c)(d);
      };
    };
  };

  c.ordBoolean = f;
  c.ordInt = d;
  c.ordChar = l;
})(PS);

(function (a) {
  a["Data.Bounded"] = a["Data.Bounded"] || {};
  var c = a["Data.Bounded"],
      f = a["Data.Bounded"],
      k = a["Data.Ord"];

  a = function a(_a5, b, c) {
    this.Ord0 = _a5;
    this.bottom = b;
    this.top = c;
  };

  var g = new a(function () {
    return k.ordInt;
  }, f.bottomInt, f.topInt);
  f = new a(function () {
    return k.ordChar;
  }, f.bottomChar, f.topChar);
  var b = new a(function () {
    return k.ordBoolean;
  }, !1, !0);
  c.Bounded = a;

  c.bottom = function (a) {
    return a.bottom;
  };

  c.top = function (a) {
    return a.top;
  };

  c.boundedBoolean = b;
  c.boundedInt = g;
  c.boundedChar = f;
})(PS);

(function (a) {
  a.showIntImpl = function (a) {
    return a.toString();
  };

  a.showCharImpl = function (a) {
    var c = a.charCodeAt(0);

    if (32 > c || 127 === c) {
      switch (a) {
        case "\x07":
          return "'\\a'";

        case "\b":
          return "'\\b'";

        case "\f":
          return "'\\f'";

        case "\n":
          return "'\\n'";

        case "\r":
          return "'\\r'";

        case "\t":
          return "'\\t'";

        case "\v":
          return "'\\v'";
      }

      return "'\\" + c.toString(10) + "'";
    }

    return "'" === a || "\\" === a ? "'\\" + a + "'" : "'" + a + "'";
  };

  a.showStringImpl = function (a) {
    var c = a.length;
    return '"' + a.replace(/[\0-\x1F\x7F"\\]/g, function (f, g) {
      switch (f) {
        case '"':
        case "\\":
          return "\\" + f;

        case "\x07":
          return "\\a";

        case "\b":
          return "\\b";

        case "\f":
          return "\\f";

        case "\n":
          return "\\n";

        case "\r":
          return "\\r";

        case "\t":
          return "\\t";

        case "\v":
          return "\\v";
      }

      g += 1;
      g = g < c && "0" <= a[g] && "9" >= a[g] ? "\\&" : "";
      return "\\" + f.charCodeAt(0).toString(10) + g;
    }) + '"';
  };

  a.showArrayImpl = function (a) {
    return function (c) {
      for (var f = [], g = 0, b = c.length; g < b; g++) {
        f[g] = a(c[g]);
      }

      return "[" + f.join(",") + "]";
    };
  };

  a.cons = function (a) {
    return function (c) {
      return [a].concat(c);
    };
  };

  a.join = function (a) {
    return function (c) {
      return c.join(a);
    };
  };
})(PS["Data.Show"] = PS["Data.Show"] || {});

(function (a) {
  a["Data.Show"] = a["Data.Show"] || {};

  var c = a["Data.Show"],
      f = a["Data.Show"],
      k = a["Data.Symbol"],
      g = a["Record.Unsafe"],
      b = a["Type.Data.RowList"],
      e = function e(a) {
    this.showRecordFields = a;
  },
      d = function d(a) {
    this.show = a;
  };

  a = new d(f.showStringImpl);
  var l = new e(function (a) {
    return function (a) {
      return [];
    };
  }),
      h = new d(f.showIntImpl),
      m = new d(f.showCharImpl),
      v = new d(function (a) {
    if (a) return "true";
    if (!a) return "false";
    throw Error("Failed pattern match at Data.Show (line 20, column 1 - line 22, column 23): " + [a.constructor.name]);
  });
  c.Show = d;

  c.show = function (a) {
    return a.show;
  };

  c.showBoolean = v;
  c.showInt = h;
  c.showChar = m;
  c.showString = a;

  c.showArray = function (a) {
    return new d(f.showArrayImpl(a.show));
  };

  c.showRecord = function (a) {
    return function (a) {
      return new d(function (c) {
        c = (0, a.showRecordFields)(b.RLProxy.value)(c);
        return 0 === c.length ? "{}" : f.join(" ")(["{", f.join(", ")(c), "}"]);
      });
    };
  };

  c.showRecordFieldsNil = l;

  c.showRecordFieldsCons = function (a) {
    return function (c) {
      return function (d) {
        return new e(function (e) {
          return function (e) {
            var h = (0, c.showRecordFields)(b.RLProxy.value)(e),
                l = k.reflectSymbol(a)(k.SProxy.value);
            e = g.unsafeGet(l)(e);
            return f.cons(f.join(": ")([l, (0, d.show)(e)]))(h);
          };
        });
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Maybe"] = a["Data.Maybe"] || {};

  var c = a["Data.Maybe"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Category"],
      e = a["Data.Bounded"],
      d = a["Data.Eq"],
      l = a["Data.Function"],
      h = a["Data.Functor"],
      m = a["Data.Ord"],
      v = a["Data.Ordering"],
      t = a["Data.Show"],
      n = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      u = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      x = function x(a) {
    return function (b) {
      return function (c) {
        if (c instanceof n) return a;
        if (c instanceof u) return b(c.value0);
        throw Error("Failed pattern match at Data.Maybe (line 217, column 1 - line 217, column 51): " + [a.constructor.name, b.constructor.name, c.constructor.name]);
      };
    };
  };

  a = x(!0)(l["const"](!1));
  l = x(!1)(l["const"](!0));

  var w = new h.Functor(function (a) {
    return function (b) {
      return b instanceof u ? new u(a(b.value0)) : n.value;
    };
  }),
      A = function A(a) {
    return new d.Eq(function (b) {
      return function (c) {
        return b instanceof n && c instanceof n ? !0 : b instanceof u && c instanceof u ? d.eq(a)(b.value0)(c.value0) : !1;
      };
    });
  },
      r = function r(a) {
    return new m.Ord(function () {
      return A(a.Eq0());
    }, function (b) {
      return function (c) {
        if (b instanceof n && c instanceof n) return v.EQ.value;
        if (b instanceof n) return v.LT.value;
        if (c instanceof n) return v.GT.value;
        if (b instanceof u && c instanceof u) return m.compare(a)(b.value0)(c.value0);
        throw Error("Failed pattern match at Data.Maybe (line 194, column 1 - line 194, column 51): " + [b.constructor.name, c.constructor.name]);
      };
    });
  },
      z = new k.Apply(function () {
    return w;
  }, function (a) {
    return function (b) {
      if (a instanceof u) return h.map(w)(a.value0)(b);
      if (a instanceof n) return n.value;
      throw Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [a.constructor.name, b.constructor.name]);
    };
  });

  k = new g.Bind(function () {
    return z;
  }, function (a) {
    return function (b) {
      if (a instanceof u) return b(a.value0);
      if (a instanceof n) return n.value;
      throw Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [a.constructor.name, b.constructor.name]);
    };
  });
  f = new f.Applicative(function () {
    return z;
  }, u.create);
  c.Nothing = n;
  c.Just = u;
  c.maybe = x;

  c.fromMaybe = function (a) {
    return x(a)(b.identity(b.categoryFn));
  };

  c.isJust = l;
  c.isNothing = a;

  c.fromJust = function (a) {
    return function (a) {
      if (a instanceof u) return a.value0;
      throw Error("Failed pattern match at Data.Maybe (line 268, column 1 - line 268, column 46): " + [a.constructor.name]);
    };
  };

  c.functorMaybe = w;
  c.applyMaybe = z;
  c.applicativeMaybe = f;
  c.bindMaybe = k;
  c.eqMaybe = A;
  c.ordMaybe = r;

  c.boundedMaybe = function (a) {
    return new e.Bounded(function () {
      return r(a.Ord0());
    }, n.value, new u(e.top(a)));
  };

  c.showMaybe = function (a) {
    return new t.Show(function (b) {
      if (b instanceof u) return "(Just " + (t.show(a)(b.value0) + ")");
      if (b instanceof n) return "Nothing";
      throw Error("Failed pattern match at Data.Maybe (line 205, column 1 - line 207, column 28): " + [b.constructor.name]);
    });
  };
})(PS);

(function (a) {
  a["Data.Either"] = a["Data.Either"] || {};

  var c = a["Data.Either"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Data.Bifunctor"],
      d = a["Data.Function"],
      l = a["Data.Functor"],
      h = a["Data.Maybe"],
      m = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      v = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      t = new l.Functor(function (a) {
    return function (b) {
      if (b instanceof m) return new m(b.value0);
      if (b instanceof v) return new v(a(b.value0));
      throw Error("Failed pattern match at Data.Either (line 38, column 1 - line 38, column 52): " + [b.constructor.name]);
    };
  });

  a = function a(_a6) {
    return function (b) {
      return function (c) {
        if (c instanceof m) return _a6(c.value0);
        if (c instanceof v) return b(c.value0);
        throw Error("Failed pattern match at Data.Either (line 238, column 1 - line 238, column 64): " + [_a6.constructor.name, b.constructor.name, c.constructor.name]);
      };
    };
  };

  d = a(d["const"](h.Nothing.value))(h.Just.create);
  e = new e.Bifunctor(function (a) {
    return function (b) {
      return function (c) {
        if (c instanceof m) return new m(a(c.value0));
        if (c instanceof v) return new v(b(c.value0));
        throw Error("Failed pattern match at Data.Either (line 46, column 1 - line 48, column 36): " + [a.constructor.name, b.constructor.name, c.constructor.name]);
      };
    };
  });
  var n = new k.Apply(function () {
    return t;
  }, function (a) {
    return function (b) {
      if (a instanceof m) return new m(a.value0);
      if (a instanceof v) return l.map(t)(a.value0)(b);
      throw Error("Failed pattern match at Data.Either (line 82, column 1 - line 84, column 30): " + [a.constructor.name, b.constructor.name]);
    };
  }),
      u = new g.Bind(function () {
    return n;
  }, a(function (a) {
    return function (b) {
      return new m(a);
    };
  })(function (a) {
    return function (b) {
      return b(a);
    };
  })),
      x = new f.Applicative(function () {
    return n;
  }, v.create);
  f = new b.Monad(function () {
    return x;
  }, function () {
    return u;
  });
  c.Left = m;
  c.Right = v;
  c.either = a;
  c.hush = d;
  c.functorEither = t;
  c.bifunctorEither = e;
  c.applicativeEither = x;
  c.bindEither = u;
  c.monadEither = f;
})(PS);

(function (a) {
  a["Control.Monad.Rec.Class"] = a["Control.Monad.Rec.Class"] || {};

  var c = a["Control.Monad.Rec.Class"],
      f = a["Data.Bifunctor"],
      k = a["Data.Either"],
      g = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      b = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }();

  a = function a(_a7, b) {
    this.Monad0 = _a7;
    this.tailRecM = b;
  };

  var e = function e(a) {
    return function (c) {
      c = a(c);

      for (var d = !1, e; !d;) {
        if (e = c, e instanceof g) c = a(e.value0), e = void 0;else if (e instanceof b) d = !0, e = e.value0;else throw Error("Failed pattern match at Control.Monad.Rec.Class (line 93, column 3 - line 93, column 25): " + [e.constructor.name]);
      }

      return e;
    };
  },
      d = new a(function () {
    return k.monadEither;
  }, function (a) {
    return function (c) {
      return e(function (c) {
        if (c instanceof k.Left) return new b(new k.Left(c.value0));
        if (c instanceof k.Right && c.value0 instanceof g) return new g(a(c.value0.value0));
        if (c instanceof k.Right && c.value0 instanceof b) return new b(new k.Right(c.value0.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 121, column 7 - line 121, column 33): " + [c.constructor.name]);
      })(a(c));
    };
  });

  f = new f.Bifunctor(function (a) {
    return function (c) {
      return function (d) {
        if (d instanceof g) return new g(a(d.value0));
        if (d instanceof b) return new b(c(d.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 29, column 1 - line 31, column 34): " + [a.constructor.name, c.constructor.name, d.constructor.name]);
      };
    };
  });
  c.Loop = g;
  c.Done = b;
  c.MonadRec = a;

  c.tailRecM = function (a) {
    return a.tailRecM;
  };

  c.bifunctorStep = f;
  c.monadRecEither = d;
})(PS);

(function (a) {
  a.foldrArray = function (a) {
    return function (c) {
      return function (f) {
        for (var g = c, b = f.length - 1; 0 <= b; b--) {
          g = a(f[b])(g);
        }

        return g;
      };
    };
  };

  a.foldlArray = function (a) {
    return function (c) {
      return function (f) {
        for (var g = c, b = f.length, e = 0; e < b; e++) {
          g = a(g)(f[e]);
        }

        return g;
      };
    };
  };
})(PS["Data.Foldable"] = PS["Data.Foldable"] || {});

(function (a) {
  a.boolConj = function (a) {
    return function (c) {
      return a && c;
    };
  };

  a.boolDisj = function (a) {
    return function (c) {
      return a || c;
    };
  };

  a.boolNot = function (a) {
    return !a;
  };
})(PS["Data.HeytingAlgebra"] = PS["Data.HeytingAlgebra"] || {});

(function (a) {
  a["Data.HeytingAlgebra"] = a["Data.HeytingAlgebra"] || {};
  var c = a["Data.HeytingAlgebra"];
  a = a["Data.HeytingAlgebra"];
  var f = new function (a, c, b, e, d, f) {
    this.conj = a;
    this.disj = c;
    this.ff = b;
    this.implies = e;
    this.not = d;
    this.tt = f;
  }(a.boolConj, a.boolDisj, !1, function (a) {
    return function (c) {
      return (0, f.disj)((0, f.not)(a))(c);
    };
  }, a.boolNot, !0);

  c.ff = function (a) {
    return a.ff;
  };

  c.disj = function (a) {
    return a.disj;
  };

  c.not = function (a) {
    return a.not;
  };

  c.heytingAlgebraBoolean = f;
})(PS);

(function (a) {
  a.concatString = function (a) {
    return function (c) {
      return a + c;
    };
  };

  a.concatArray = function (a) {
    return function (c) {
      return 0 === a.length ? c : 0 === c.length ? a : a.concat(c);
    };
  };
})(PS["Data.Semigroup"] = PS["Data.Semigroup"] || {});

(function (a) {
  a["Data.Semigroup"] = a["Data.Semigroup"] || {};

  var c = a["Data.Semigroup"],
      f = a["Data.Semigroup"],
      k = function k(a) {
    this.append = a;
  };

  a = new k(f.concatString);
  f = new k(f.concatArray);
  c.Semigroup = k;

  c.append = function (a) {
    return a.append;
  };

  c.semigroupString = a;

  c.semigroupFn = function (a) {
    return new k(function (b) {
      return function (c) {
        return function (d) {
          return (0, a.append)(b(d))(c(d));
        };
      };
    });
  };

  c.semigroupArray = f;
})(PS);

(function (a) {
  a["Data.Monoid"] = a["Data.Monoid"] || {};

  var c = a["Data.Monoid"],
      f = a["Data.Semigroup"],
      k = function k(a, c) {
    this.Semigroup0 = a;
    this.mempty = c;
  };

  a = new k(function () {
    return f.semigroupString;
  }, "");
  var g = new k(function () {
    return f.semigroupArray;
  }, []);
  c.Monoid = k;

  c.mempty = function (a) {
    return a.mempty;
  };

  c.monoidFn = function (a) {
    return new k(function () {
      return f.semigroupFn(a.Semigroup0());
    }, function (b) {
      return a.mempty;
    });
  };

  c.monoidString = a;
  c.monoidArray = g;
})(PS);

(function (a) {
  a["Data.Monoid.Disj"] = a["Data.Monoid.Disj"] || {};

  var c = a["Data.Monoid.Disj"],
      f = a["Data.HeytingAlgebra"],
      k = a["Data.Monoid"],
      g = a["Data.Semigroup"],
      b = function b(a) {
    return new g.Semigroup(function (b) {
      return function (c) {
        return f.disj(a)(b)(c);
      };
    });
  };

  c.Disj = function (a) {
    return a;
  };

  c.monoidDisj = function (a) {
    return new k.Monoid(function () {
      return b(a);
    }, f.ff(a));
  };
})(PS);

(function (a) {
  a["Data.Newtype"] = a["Data.Newtype"] || {};

  var c = a["Data.Newtype"],
      f = a["Data.Functor"],
      k = function k(a, b) {
    this.unwrap = a;
    this.wrap = b;
  };

  a = new k(function (a) {
    return a;
  }, a["Data.Monoid.Disj"].Disj);

  c.unwrap = function (a) {
    return a.unwrap;
  };

  c.wrap = function (a) {
    return a.wrap;
  };

  c.Newtype = k;

  c.alaF = function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return function (e) {
              var g = f.map(b)(d.unwrap),
                  h = f.map(a)(c.wrap);
              return function (a) {
                return g(e(h(a)));
              };
            };
          };
        };
      };
    };
  };

  c.over = function (a) {
    return function (b) {
      return function (c) {
        return function (c) {
          var d = b.wrap,
              e = a.unwrap;
          return function (a) {
            return d(c(e(a)));
          };
        };
      };
    };
  };

  c.under = function (a) {
    return function (b) {
      return function (c) {
        return function (c) {
          var d = b.unwrap,
              e = a.wrap;
          return function (a) {
            return d(c(e(a)));
          };
        };
      };
    };
  };

  c.newtypeDisj = a;
})(PS);

(function (a) {
  a["Data.Foldable"] = a["Data.Foldable"] || {};
  var c = a["Data.Foldable"],
      f = a["Data.Foldable"],
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Category"],
      e = a["Data.Eq"],
      d = a["Data.Function"],
      l = a["Data.Functor"],
      h = a["Data.HeytingAlgebra"],
      m = a["Data.Maybe"],
      v = a["Data.Monoid"],
      t = a["Data.Monoid.Disj"],
      n = a["Data.Newtype"],
      u = a["Data.Semigroup"],
      x = a["Data.Unit"];

  a = function a(_a8, b, c) {
    this.foldMap = _a8;
    this.foldl = b;
    this.foldr = c;
  };

  var w = function w(a) {
    return function (b) {
      return function (c) {
        return (0, b.foldr)(function () {
          var b = g.applySecond(a.Apply0());
          return function (a) {
            return b(c(a));
          };
        }())(k.pure(a)(x.unit));
      };
    };
  },
      A = new a(function (a) {
    return function (b) {
      return function (c) {
        if (c instanceof m.Nothing) return v.mempty(a);
        if (c instanceof m.Just) return b(c.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [b.constructor.name, c.constructor.name]);
      };
    };
  }, function (a) {
    return function (b) {
      return function (c) {
        if (c instanceof m.Nothing) return b;
        if (c instanceof m.Just) return a(b)(c.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [a.constructor.name, b.constructor.name, c.constructor.name]);
      };
    };
  }, function (a) {
    return function (b) {
      return function (c) {
        if (c instanceof m.Nothing) return b;
        if (c instanceof m.Just) return a(c.value0)(b);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [a.constructor.name, b.constructor.name, c.constructor.name]);
      };
    };
  }),
      r = function r(a) {
    return function (b) {
      return function (c) {
        return (0, a.foldr)(function (a) {
          return function (d) {
            return u.append(b.Semigroup0())(c(a))(d);
          };
        })(v.mempty(b));
      };
    };
  },
      z = new a(function (a) {
    return r(z)(a);
  }, f.foldlArray, f.foldrArray),
      q = function q(a) {
    return function (b) {
      return n.alaF(l.functorFn)(l.functorFn)(n.newtypeDisj)(n.newtypeDisj)(t.Disj)((0, a.foldMap)(t.monoidDisj(b)));
    };
  },
      E = function E(a) {
    return function (b) {
      var c = q(a)(h.heytingAlgebraBoolean),
          d = e.eq(b);
      return function (a) {
        return c(d(a));
      };
    };
  };

  c.Foldable = a;

  c.foldr = function (a) {
    return a.foldr;
  };

  c.foldl = function (a) {
    return a.foldl;
  };

  c.foldMap = function (a) {
    return a.foldMap;
  };

  c.fold = function (a) {
    return function (c) {
      return (0, a.foldMap)(c)(b.identity(b.categoryFn));
    };
  };

  c.traverse_ = w;

  c.for_ = function (a) {
    return function (b) {
      return d.flip(w(a)(b));
    };
  };

  c.intercalate = function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return (0, a.foldl)(function (a) {
            return function (d) {
              return a.init ? {
                init: !1,
                acc: d
              } : {
                init: !1,
                acc: u.append(b.Semigroup0())(a.acc)(u.append(b.Semigroup0())(c)(d))
              };
            };
          })({
            init: !0,
            acc: v.mempty(b)
          })(d).acc;
        };
      };
    };
  };

  c.any = q;

  c.notElem = function (a) {
    return function (b) {
      return function (c) {
        var d = h.not(h.heytingAlgebraBoolean),
            e = E(a)(b)(c);
        return function (a) {
          return d(e(a));
        };
      };
    };
  };

  c.find = function (a) {
    return function (b) {
      return (0, a.foldl)(function (a) {
        return function (c) {
          return a instanceof m.Nothing && b(c) ? new m.Just(c) : a;
        };
      })(m.Nothing.value);
    };
  };

  c.foldableArray = z;
  c.foldableMaybe = A;
})(PS);

(function (a) {
  a["Data.NonEmpty"] = a["Data.NonEmpty"] || {};

  var c = a["Data.NonEmpty"],
      f = a["Data.Foldable"],
      k = a["Data.Functor"],
      g = a["Data.Semigroup"],
      b = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (b) {
      return function (c) {
        return new a(b, c);
      };
    };

    return a;
  }();

  c.NonEmpty = b;

  c.functorNonEmpty = function (a) {
    return new k.Functor(function (c) {
      return function (d) {
        return new b(c(d.value0), k.map(a)(c)(d.value1));
      };
    });
  };

  c.foldableNonEmpty = function (a) {
    return new f.Foldable(function (b) {
      return function (c) {
        return function (d) {
          return g.append(b.Semigroup0())(c(d.value0))(f.foldMap(a)(b)(c)(d.value1));
        };
      };
    }, function (b) {
      return function (c) {
        return function (d) {
          return f.foldl(a)(b)(b(c)(d.value0))(d.value1);
        };
      };
    }, function (b) {
      return function (c) {
        return function (d) {
          return b(d.value0)(f.foldr(a)(b)(c)(d.value1));
        };
      };
    });
  };
})(PS);

(function (a) {
  a["Data.List.Types"] = a["Data.List.Types"] || {};

  var c = a["Data.List.Types"],
      f = a["Data.Foldable"],
      k = a["Data.Function"],
      g = a["Data.Functor"],
      b = a["Data.Monoid"],
      e = a["Data.NonEmpty"],
      d = a["Data.Semigroup"],
      l = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      h = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (b) {
      return function (c) {
        return new a(b, c);
      };
    };

    return a;
  }();

  a = new g.Functor(function (a) {
    return function (b) {
      return function (c) {
        function d(b, d) {
          if (d instanceof h && d.value1 instanceof h && d.value1.value1 instanceof h) e = new h(d, b), c = d.value1.value1.value1;else return f = !0, function (b) {
            return function (c) {
              for (var d = b, e = !1, f; !e;) {
                f = d;
                var g = c;
                f instanceof h && f.value0 instanceof h && f.value0.value1 instanceof h && f.value0.value1.value1 instanceof h ? (d = f.value1, c = new h(a(f.value0.value0), new h(a(f.value0.value1.value0), new h(a(f.value0.value1.value1.value0), g))), f = void 0) : (e = !0, f = g);
              }

              return f;
            };
          }(b)(function (b) {
            return b instanceof h && b.value1 instanceof h && b.value1.value1 instanceof l ? new h(a(b.value0), new h(a(b.value1.value0), l.value)) : b instanceof h && b.value1 instanceof l ? new h(a(b.value0), l.value) : l.value;
          }(d));
        }

        for (var e = b, f = !1, g; !f;) {
          g = d(e, c);
        }

        return g;
      };
    }(l.value);
  });
  a = e.functorNonEmpty(a);
  var m = new f.Foldable(function (a) {
    return function (c) {
      return f.foldl(m)(function (b) {
        var e = d.append(a.Semigroup0())(b);
        return function (a) {
          return e(c(a));
        };
      })(b.mempty(a));
    };
  }, function (a) {
    return function (b) {
      return function (c) {
        for (var d = b, e = !1, f; !e;) {
          f = d;
          var g = c;
          if (g instanceof l) e = !0;else {
            if (g instanceof h) d = a(f)(g.value0), c = g.value1;else throw Error("Failed pattern match at Data.List.Types (line 109, column 12 - line 111, column 30): " + [g.constructor.name]);
            f = void 0;
          }
        }

        return f;
      };
    };
  }, function (a) {
    return function (b) {
      var c = f.foldl(m)(k.flip(h.create))(l.value),
          d = f.foldl(m)(k.flip(a))(b);
      return function (a) {
        return d(c(a));
      };
    };
  });
  e = e.foldableNonEmpty(m);
  var v = new d.Semigroup(function (a) {
    return function (b) {
      return f.foldr(m)(h.create)(b)(a);
    };
  });
  g = new b.Monoid(function () {
    return v;
  }, l.value);
  c.Nil = l;
  c.Cons = h;
  c.monoidList = g;
  c.foldableList = m;
  c.functorNonEmptyList = a;
  c.foldableNonEmptyList = e;
})(PS);

(function (a) {
  a["Data.List"] = a["Data.List"] || {};

  var c = a["Data.List"],
      f = a["Control.Alt"],
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Control.Lazy"],
      d = a["Control.Monad.Rec.Class"],
      l = a["Data.Bifunctor"],
      h = a["Data.Functor"],
      m = a["Data.List.Types"],
      v = a["Data.Unit"],
      t = function () {
    return function (a) {
      return function (b) {
        for (var c = a, d = !1, e; !d;) {
          e = c;
          var f = b;
          if (f instanceof m.Nil) d = !0;else {
            if (f instanceof m.Cons) c = new m.Cons(f.value0, e), b = f.value1;else throw Error("Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): " + [e.constructor.name, f.constructor.name]);
            e = void 0;
          }
        }

        return e;
      };
    }(m.Nil.value);
  }(),
      n = function n(a) {
    return function (b) {
      return function (c) {
        return g.apply(a.Applicative0().Apply0())(h.map(a.Plus1().Alt0().Functor0())(m.Cons.create)(c))(e.defer(b)(function (d) {
          return u(a)(b)(c);
        }));
      };
    };
  },
      u = function u(a) {
    return function (b) {
      return function (c) {
        return f.alt(a.Plus1().Alt0())(n(a)(b)(c))(k.pure(a.Applicative0())(m.Nil.value));
      };
    };
  };

  c.some = n;

  c.manyRec = function (a) {
    return function (c) {
      return function (e) {
        return d.tailRecM(a)(function (g) {
          return b.bind(a.Monad0().Bind1())(f.alt(c.Plus1().Alt0())(h.map(c.Plus1().Alt0().Functor0())(d.Loop.create)(e))(k.pure(c.Applicative0())(new d.Done(v.unit))))(function (a) {
            return k.pure(c.Applicative0())(l.bimap(d.bifunctorStep)(function (a) {
              return new m.Cons(a, g);
            })(function (a) {
              return t(g);
            })(a));
          });
        })(m.Nil.value);
      };
    };
  };

  c.reverse = t;
})(PS);

(function (a) {
  a["Data.Tuple"] = a["Data.Tuple"] || {};
  var c = a["Data.Tuple"];
  a = a["Data.Functor"];

  var f = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (c) {
      return function (b) {
        return new a(c, b);
      };
    };

    return a;
  }();

  a = new a.Functor(function (a) {
    return function (c) {
      return new f(c.value0, a(c.value1));
    };
  });
  c.Tuple = f;

  c.fst = function (a) {
    return a.value0;
  };

  c.snd = function (a) {
    return a.value1;
  };

  c.functorTuple = a;
})(PS);

(function (a) {
  a["Data.CatQueue"] = a["Data.CatQueue"] || {};

  var c = a["Data.CatQueue"],
      f = a["Data.List"],
      k = a["Data.List.Types"],
      g = a["Data.Maybe"],
      b = a["Data.Tuple"],
      e = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (b) {
      return function (c) {
        return new a(b, c);
      };
    };

    return a;
  }();

  a = new e(k.Nil.value, k.Nil.value);
  c.empty = a;

  c["null"] = function (a) {
    return a.value0 instanceof k.Nil && a.value1 instanceof k.Nil ? !0 : !1;
  };

  c.snoc = function (a) {
    return function (b) {
      return new e(a.value0, new k.Cons(b, a.value1));
    };
  };

  c.uncons = function (a) {
    for (var c = !1, d; !c;) {
      if (d = a, d.value0 instanceof k.Nil && d.value1 instanceof k.Nil) c = !0, d = g.Nothing.value;else if (d.value0 instanceof k.Nil) a = new e(f.reverse(d.value1), k.Nil.value), d = void 0;else if (d.value0 instanceof k.Cons) c = !0, d = new g.Just(new b.Tuple(d.value0.value0, new e(d.value0.value1, d.value1)));else throw Error("Failed pattern match at Data.CatQueue (line 83, column 1 - line 83, column 63): " + [d.constructor.name]);
    }

    return d;
  };
})(PS);

(function (a) {
  a["Data.CatList"] = a["Data.CatList"] || {};

  var c = a["Data.CatList"],
      f = a["Data.CatQueue"],
      k = a["Data.List.Types"],
      g = a["Data.Maybe"],
      b = a["Data.Semigroup"],
      e = a["Data.Tuple"],
      d = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      l = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (b) {
      return function (c) {
        return new a(b, c);
      };
    };

    return a;
  }(),
      h = function h(a) {
    return function (b) {
      if (a instanceof d) return b;
      if (b instanceof d) return a;
      if (a instanceof l) return new l(a.value0, f.snoc(a.value1)(b));
      throw Error("Failed pattern match at Data.CatList (line 109, column 1 - line 109, column 54): " + [a.constructor.name, b.constructor.name]);
    };
  },
      m = function m(a) {
    return function (b) {
      return function (c) {
        var d = function d(a) {
          return function (b) {
            return function (c) {
              for (var d = a, e = b, f = !1, g; !f;) {
                g = d;
                var h = e,
                    l = c;
                if (l instanceof k.Nil) f = !0, g = h;else {
                  if (l instanceof k.Cons) d = g, e = g(h)(l.value0), c = l.value1;else throw Error("Failed pattern match at Data.CatList (line 125, column 3 - line 125, column 59): " + [g.constructor.name, h.constructor.name, l.constructor.name]);
                  g = void 0;
                }
              }

              return g;
            };
          };
        };

        return function (c) {
          return function (e) {
            function h(c, h) {
              c = f.uncons(c);
              if (c instanceof g.Nothing) return m = !0, d(function (a) {
                return function (b) {
                  return b(a);
                };
              })(b)(h);
              if (c instanceof g.Just) l = c.value0.value1, e = new k.Cons(a(c.value0.value0), h);else throw Error("Failed pattern match at Data.CatList (line 121, column 14 - line 123, column 67): " + [c.constructor.name]);
            }

            for (var l = c, m = !1, n; !m;) {
              n = h(l, e);
            }

            return n;
          };
        }(c)(k.Nil.value);
      };
    };
  };

  a = d.value;
  b = new b.Semigroup(h);
  c.empty = a;

  c.snoc = function (a) {
    return function (b) {
      return h(a)(new l(b, f.empty));
    };
  };

  c.uncons = function (a) {
    if (a instanceof d) return g.Nothing.value;

    if (a instanceof l) {
      var b = g.Just,
          c = e.Tuple,
          k = a.value0;
      a = f["null"](a.value1) ? d.value : m(h)(d.value)(a.value1);
      return new b(new c(k, a));
    }

    throw Error("Failed pattern match at Data.CatList (line 100, column 1 - line 100, column 61): " + [a.constructor.name]);
  };

  c.semigroupCatList = b;
})(PS);

(function (a) {
  a.unsafeCoerce = function (a) {
    return a;
  };
})(PS["Unsafe.Coerce"] = PS["Unsafe.Coerce"] || {});

(function (a) {
  a["Unsafe.Coerce"] = a["Unsafe.Coerce"] || {};
  a["Unsafe.Coerce"].unsafeCoerce = a["Unsafe.Coerce"].unsafeCoerce;
})(PS);

(function (a) {
  a["Control.Monad.Free"] = a["Control.Monad.Free"] || {};

  var c = a["Control.Monad.Free"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Data.CatList"],
      d = a["Data.Either"],
      l = a["Data.Functor"],
      h = a["Data.Maybe"],
      m = a["Data.Semigroup"],
      v = a["Unsafe.Coerce"],
      t = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (b) {
      return function (c) {
        return new a(b, c);
      };
    };

    return a;
  }(),
      n = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      u = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (b) {
      return function (c) {
        return new a(b, c);
      };
    };

    return a;
  }(),
      x = function x(a) {
    function b(b) {
      var d = function d(a) {
        return function (b) {
          return new t(a.value0, m.append(e.semigroupCatList)(a.value1)(b));
        };
      };

      if (b.value0 instanceof n) {
        var f = e.uncons(b.value1);
        if (f instanceof h.Nothing) return c = !0, new n(b.value0.value0);

        if (f instanceof h.Just) {
          a = d((0, f.value0.value0)(b.value0.value0))(f.value0.value1);
          return;
        }

        throw Error("Failed pattern match at Control.Monad.Free (line 227, column 7 - line 231, column 64): " + [f.constructor.name]);
      }

      if (b.value0 instanceof u) return c = !0, new u(b.value0.value0, function (a) {
        return d(b.value0.value1(a))(b.value1);
      });
      throw Error("Failed pattern match at Control.Monad.Free (line 225, column 3 - line 233, column 56): " + [b.value0.constructor.name]);
    }

    for (var c = !1, d; !c;) {
      d = b(a);
    }

    return d;
  },
      w = function w(a) {
    return function (b) {
      return function (c) {
        c = x(c);
        if (c instanceof n) return b(c.value0);
        if (c instanceof u) return a(c.value0)(c.value1);
        throw Error("Failed pattern match at Control.Monad.Free (line 213, column 17 - line 215, column 20): " + [c.constructor.name]);
      };
    };
  };

  a = new b.Monad(function () {
    return q;
  }, function () {
    return r;
  });
  var A = new l.Functor(function (a) {
    return function (b) {
      return g.bindFlipped(r)(function () {
        var b = f.pure(q);
        return function (c) {
          return b(a(c));
        };
      }())(b);
    };
  }),
      r = new g.Bind(function () {
    return z;
  }, function (a) {
    return function (b) {
      return new t(a.value0, e.snoc(a.value1)(b));
    };
  }),
      z = new k.Apply(function () {
    return A;
  }, b.ap(a)),
      q = new f.Applicative(function () {
    return z;
  }, function (a) {
    return new t(n.create(a), e.empty);
  });

  c.wrap = function (a) {
    return new t(new u(a, v.unsafeCoerce), e.empty);
  };

  c.liftF = function (a) {
    return new t(new u(a, function () {
      var a = f.pure(q);
      return function (b) {
        return a(b);
      };
    }()), e.empty);
  };

  c.resume = function (a) {
    return w(function (b) {
      return function (c) {
        return new d.Left(l.map(a)(c)(b));
      };
    })(d.Right.create);
  };

  c["resume'"] = w;
  c.freeFunctor = A;
  c.freeBind = r;
  c.freeApplicative = q;
})(PS);

(function (a) {
  a["Control.MultiAlternative"] = a["Control.MultiAlternative"] || {};
  a = a["Control.MultiAlternative"];

  a.orr = function (a) {
    return a.orr;
  };

  a.MultiAlternative = function (a, f) {
    this.Plus0 = a;
    this.orr = f;
  };
})(PS);

(function (a) {
  a["Control.Parallel.Class"] = a["Control.Parallel.Class"] || {};
  a = a["Control.Parallel.Class"];

  a.parallel = function (a) {
    return a.parallel;
  };

  a.sequential = function (a) {
    return a.sequential;
  };

  a.Parallel = function (a, f, k, g) {
    this.Applicative1 = a;
    this.Monad0 = f;
    this.parallel = k;
    this.sequential = g;
  };
})(PS);

(function (a) {
  a["Control.Plus"] = a["Control.Plus"] || {};
  a = a["Control.Plus"];

  a.Plus = function (a, f) {
    this.Alt0 = a;
    this.empty = f;
  };

  a.empty = function (a) {
    return a.empty;
  };
})(PS);

(function (a) {
  a["Control.ShiftMap"] = a["Control.ShiftMap"] || {};
  a = a["Control.ShiftMap"];

  a.shiftMap = function (a) {
    return a.shiftMap;
  };

  a.ShiftMap = function (a) {
    this.shiftMap = a;
  };
})(PS);

(function (a) {
  a.range = function (a) {
    return function (c) {
      for (var f = a > c ? -1 : 1, g = Array(f * (c - a) + 1), b = a, e = 0; b !== c;) {
        g[e++] = b, b += f;
      }

      g[e] = b;
      return g;
    };
  };

  a.fromFoldableImpl = function () {
    function a(a, b) {
      this.head = a;
      this.tail = b;
    }

    function f(c) {
      return function (b) {
        return new a(c, b);
      };
    }

    var k = {};
    return function (a) {
      return function (b) {
        var c = [],
            d = 0;

        for (b = a(f)(k)(b); b !== k;) {
          c[d++] = b.head, b = b.tail;
        }

        return c;
      };
    };
  }();

  a.length = function (a) {
    return a.length;
  };

  a.cons = function (a) {
    return function (c) {
      return [a].concat(c);
    };
  };

  a.snoc = function (a) {
    return function (c) {
      var f = a.slice();
      f.push(c);
      return f;
    };
  };

  a["uncons'"] = function (a) {
    return function (c) {
      return function (f) {
        return 0 === f.length ? a({}) : c(f[0])(f.slice(1));
      };
    };
  };

  a.indexImpl = function (a) {
    return function (c) {
      return function (f) {
        return function (g) {
          return 0 > g || g >= f.length ? c : a(f[g]);
        };
      };
    };
  };

  a._updateAt = function (a) {
    return function (c) {
      return function (f) {
        return function (g) {
          return function (b) {
            if (0 > f || f >= b.length) return c;
            b = b.slice();
            b[f] = g;
            return a(b);
          };
        };
      };
    };
  };

  a.filter = function (a) {
    return function (c) {
      return c.filter(a);
    };
  };

  a.slice = function (a) {
    return function (c) {
      return function (f) {
        return f.slice(a, c);
      };
    };
  };
})(PS["Data.Array"] = PS["Data.Array"] || {});

(function (a) {
  a["Data.Boolean"] = a["Data.Boolean"] || {};
  a["Data.Boolean"].otherwise = !0;
})(PS);

(function (a) {
  a["Data.Array"] = a["Data.Array"] || {};
  var c = a["Data.Array"],
      f = a["Data.Array"],
      k = a["Control.Alt"],
      g = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      d = a["Control.Category"],
      l = a["Control.Lazy"],
      h = a["Data.Boolean"],
      m = a["Data.Foldable"],
      v = a["Data.Function"],
      t = a["Data.Functor"],
      n = a["Data.Maybe"];
  a = f._updateAt(n.Just.create)(n.Nothing.value);

  var u = f["uncons'"](v["const"](n.Nothing.value))(function (a) {
    return function (b) {
      return new n.Just({
        head: a,
        tail: b
      });
    };
  }),
      x = function x(a) {
    return [a];
  },
      w = function w(a) {
    return function (c) {
      return function (d) {
        return b.apply(a.Applicative0().Apply0())(t.map(a.Plus1().Alt0().Functor0())(f.cons)(d))(l.defer(c)(function (b) {
          return A(a)(c)(d);
        }));
      };
    };
  },
      A = function A(a) {
    return function (b) {
      return function (c) {
        return k.alt(a.Plus1().Alt0())(w(a)(b)(c))(g.pure(a.Applicative0())([]));
      };
    };
  },
      r = f.indexImpl(n.Just.create)(n.Nothing.value),
      z = v.flip(e.bind(e.bindArray));

  e = function (a) {
    return z(function () {
      var b = n.maybe([])(x);
      return function (c) {
        return b(a(c));
      };
    }());
  }(d.identity(d.categoryFn));

  c.fromFoldable = function (a) {
    return f.fromFoldableImpl(m.foldr(a));
  };

  c.singleton = x;
  c.some = w;

  c.head = function (a) {
    return r(a)(0);
  };

  c.init = function (a) {
    if (0 === f.length(a)) return n.Nothing.value;
    if (h.otherwise) return new n.Just(f.slice(0)(f.length(a) - 1 | 0)(a));
    throw Error("Failed pattern match at Data.Array (line 323, column 1 - line 323, column 45): " + [a.constructor.name]);
  };

  c.uncons = u;
  c.updateAt = a;
  c.concatMap = z;
  c.catMaybes = e;
  c.range = f.range;
  c.length = f.length;
  c.cons = f.cons;
  c.snoc = f.snoc;
  c.filter = f.filter;
})(PS);

(function (a) {
  a["Data.Array.NonEmpty"] = a["Data.Array.NonEmpty"] || {};
  var c = a["Data.Array.NonEmpty"],
      f = a["Data.Array"],
      k = a["Data.Boolean"],
      g = a["Data.Maybe"];
  a = a["Unsafe.Coerce"];
  var b = a.unsafeCoerce,
      e = a.unsafeCoerce,
      d = a.unsafeCoerce;

  a = function (a) {
    var b = g.fromJust();
    return function (c) {
      return b(a(d(c)));
    };
  }(f.uncons);

  (function (a) {
    return function (b) {
      return a(d(b));
    };
  })(f.length);

  c.fromArray = function (a) {
    if (0 < f.length(a)) return new g.Just(e(a));
    if (k.otherwise) return g.Nothing.value;
    throw Error("Failed pattern match at Data.Array.NonEmpty (line 134, column 1 - line 134, column 58): " + [a.constructor.name]);
  };

  c.toArray = d;

  c.singleton = function (a) {
    return e(f.singleton(a));
  };

  c["cons'"] = function (a) {
    return function (b) {
      return e(f.cons(a)(b));
    };
  };

  c.snoc = function (a) {
    return function (b) {
      return e(f.snoc(d(a))(b));
    };
  };

  c.uncons = a;

  c.updateAt = function (a) {
    return function (c) {
      var e = f.updateAt(a)(c);
      return function (a) {
        return b(e(d(a)));
      };
    };
  };
})(PS);

(function (a) {
  a.fold1Impl = function (a) {
    return function (c) {
      for (var f = c[0], g = c.length, b = 1; b < g; b++) {
        f = a(f)(c[b]);
      }

      return f;
    };
  };
})(PS["Data.Array.NonEmpty.Internal"] = PS["Data.Array.NonEmpty.Internal"] || {});

(function (a) {
  a.mapWithIndexArray = function (a) {
    return function (c) {
      for (var f = c.length, g = Array(f), b = 0; b < f; b++) {
        g[b] = a(b)(c[b]);
      }

      return g;
    };
  };
})(PS["Data.FunctorWithIndex"] = PS["Data.FunctorWithIndex"] || {});

(function (a) {
  a["Data.FunctorWithIndex"] = a["Data.FunctorWithIndex"] || {};
  var c = a["Data.FunctorWithIndex"],
      f = a["Data.Functor"];
  a = new function (a, c) {
    this.Functor0 = a;
    this.mapWithIndex = c;
  }(function () {
    return f.functorArray;
  }, a["Data.FunctorWithIndex"].mapWithIndexArray);

  c.mapWithIndex = function (a) {
    return a.mapWithIndex;
  };

  c.functorWithIndexArray = a;
})(PS);

(function (a) {
  a["Data.FoldableWithIndex"] = a["Data.FoldableWithIndex"] || {};

  var c = a["Data.FoldableWithIndex"],
      f = a["Data.Foldable"],
      k = a["Data.FunctorWithIndex"],
      g = a["Data.Monoid"],
      b = a["Data.Semigroup"],
      e = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (b) {
      return function (c) {
        return new a(b, c);
      };
    };

    return a;
  }(),
      d = function d(a) {
    return function (c) {
      return function (d) {
        return (0, a.foldrWithIndex)(function (a) {
          return function (e) {
            return function (f) {
              return b.append(c.Semigroup0())(d(a)(e))(f);
            };
          };
        })(g.mempty(c));
      };
    };
  },
      l = new function (a, b, c, d) {
    this.Foldable0 = a;
    this.foldMapWithIndex = b;
    this.foldlWithIndex = c;
    this.foldrWithIndex = d;
  }(function () {
    return f.foldableArray;
  }, function (a) {
    return d(l)(a);
  }, function (a) {
    return function (b) {
      var c = f.foldl(f.foldableArray)(function (b) {
        return function (c) {
          return a(c.value0)(b)(c.value1);
        };
      })(b),
          d = k.mapWithIndex(k.functorWithIndexArray)(e.create);
      return function (a) {
        return c(d(a));
      };
    };
  }, function (a) {
    return function (b) {
      var c = f.foldr(f.foldableArray)(function (b) {
        return function (c) {
          return a(b.value0)(b.value1)(c);
        };
      })(b),
          d = k.mapWithIndex(k.functorWithIndexArray)(e.create);
      return function (a) {
        return c(d(a));
      };
    };
  });

  c.foldlWithIndex = function (a) {
    return a.foldlWithIndex;
  };

  c.foldableWithIndexArray = l;
})(PS);

(function (a) {
  a["Data.Semigroup.Foldable"] = a["Data.Semigroup.Foldable"] || {};
  var c = a["Data.Semigroup.Foldable"],
      f = a["Data.Functor"];

  c.Foldable1 = function (a, c, b) {
    this.Foldable0 = a;
    this.fold1 = c;
    this.foldMap1 = b;
  };

  c.foldMap1 = function (a) {
    return a.foldMap1;
  };

  c.foldMap1Default = function (a) {
    return function (c) {
      return function (b) {
        return function (e) {
          var d = (0, a.fold1)(b),
              g = f.map(c)(e);
          return function (a) {
            return d(g(a));
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a.traverseArrayImpl = function () {
    function a(a) {
      return [a];
    }

    function f(a) {
      return function (b) {
        return [a, b];
      };
    }

    function k(a) {
      return function (b) {
        return function (c) {
          return [a, b, c];
        };
      };
    }

    function g(a) {
      return function (b) {
        return a.concat(b);
      };
    }

    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return function (h) {
              function l(m, t) {
                switch (t - m) {
                  case 0:
                    return d([]);

                  case 1:
                    return c(a)(e(h[m]));

                  case 2:
                    return b(c(f)(e(h[m])))(e(h[m + 1]));

                  case 3:
                    return b(b(c(k)(e(h[m])))(e(h[m + 1])))(e(h[m + 2]));

                  default:
                    var n = m + 2 * Math.floor((t - m) / 4);
                    return b(c(g)(l(m, n)))(l(n, t));
                }
              }

              return l(0, h.length);
            };
          };
        };
      };
    };
  }();
})(PS["Data.Traversable"] = PS["Data.Traversable"] || {});

(function (a) {
  a["Data.Traversable"] = a["Data.Traversable"] || {};
  var c = a["Data.Traversable"],
      f = a["Data.Traversable"],
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Category"],
      e = a["Data.Foldable"],
      d = a["Data.Functor"],
      l = a["Data.Maybe"];

  a = function a(_a9, b, c, d) {
    this.Foldable1 = _a9;
    this.Functor0 = b;
    this.sequence = c;
    this.traverse = d;
  };

  var h = new a(function () {
    return e.foldableMaybe;
  }, function () {
    return l.functorMaybe;
  }, function (a) {
    return function (b) {
      if (b instanceof l.Nothing) return k.pure(a)(l.Nothing.value);
      if (b instanceof l.Just) return d.map(a.Apply0().Functor0())(l.Just.create)(b.value0);
      throw Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 90, column 33): " + [b.constructor.name]);
    };
  }, function (a) {
    return function (b) {
      return function (c) {
        if (c instanceof l.Nothing) return k.pure(a)(l.Nothing.value);
        if (c instanceof l.Just) return d.map(a.Apply0().Functor0())(l.Just.create)(b(c.value0));
        throw Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 90, column 33): " + [b.constructor.name, c.constructor.name]);
      };
    };
  }),
      m = function m(a) {
    return function (c) {
      return (0, a.traverse)(c)(b.identity(b.categoryFn));
    };
  },
      v = new a(function () {
    return e.foldableArray;
  }, function () {
    return d.functorArray;
  }, function (a) {
    return m(v)(a);
  }, function (a) {
    return f.traverseArrayImpl(g.apply(a.Apply0()))(d.map(a.Apply0().Functor0()))(k.pure(a));
  });

  c.traverse = function (a) {
    return a.traverse;
  };

  c.sequence = function (a) {
    return a.sequence;
  };

  c.traversableArray = v;
  c.traversableMaybe = h;
})(PS);

(function (a) {
  a.unfoldr1ArrayImpl = function (a) {
    return function (c) {
      return function (f) {
        return function (g) {
          return function (b) {
            return function (e) {
              for (var d = [];;) {
                e = b(e);
                d.push(f(e));
                e = g(e);
                if (a(e)) return d;
                e = c(e);
              }
            };
          };
        };
      };
    };
  };
})(PS["Data.Unfoldable1"] = PS["Data.Unfoldable1"] || {});

(function (a) {
  a["Data.Unfoldable1"] = a["Data.Unfoldable1"] || {};
  var c = a["Data.Unfoldable1"],
      f = a["Data.Boolean"],
      k = a["Data.Maybe"],
      g = a["Data.Tuple"];
  a = new function (a) {
    this.unfoldr1 = a;
  }(a["Data.Unfoldable1"].unfoldr1ArrayImpl(k.isNothing)(k.fromJust())(g.fst)(g.snd));

  var b = function b(a) {
    return function (b) {
      return function (c) {
        return (0, a.unfoldr1)(function (a) {
          if (0 >= a) return new g.Tuple(c, k.Nothing.value);
          if (f.otherwise) return new g.Tuple(c, new k.Just(a - 1 | 0));
          throw Error("Failed pattern match at Data.Unfoldable1 (line 64, column 5 - line 64, column 39): " + [a.constructor.name]);
        })(b - 1 | 0);
      };
    };
  };

  c.unfoldr1 = function (a) {
    return a.unfoldr1;
  };

  c.singleton = function (a) {
    return b(a)(1);
  };

  c.unfoldable1Array = a;
})(PS);

(function (a) {
  a["Data.Array.NonEmpty.Internal"] = a["Data.Array.NonEmpty.Internal"] || {};
  var c = a["Data.Array.NonEmpty.Internal"],
      f = a["Data.Array.NonEmpty.Internal"],
      k = a["Data.Semigroup"],
      g = a["Data.Semigroup.Foldable"],
      b = a["Data.Unfoldable1"].unfoldable1Array,
      e = a["Data.Traversable"].traversableArray,
      d = k.semigroupArray,
      l = a["Data.Functor"].functorArray,
      h = a["Data.FoldableWithIndex"].foldableWithIndexArray,
      m = a["Data.Foldable"].foldableArray,
      v = new g.Foldable1(function () {
    return m;
  }, function (a) {
    return f.fold1Impl(k.append(a));
  }, function (a) {
    return g.foldMap1Default(v)(l)(a);
  });
  c.semigroupNonEmptyArray = d;
  c.functorNonEmptyArray = l;
  c.foldableNonEmptyArray = m;
  c.foldableWithIndexNonEmptyArray = h;
  c.foldable1NonEmptyArray = v;
  c.unfoldable1NonEmptyArray = b;
  c.traversableNonEmptyArray = e;
})(PS);

(function (a) {
  a.pureE = function (a) {
    return function () {
      return a;
    };
  };

  a.bindE = function (a) {
    return function (c) {
      return function () {
        return c(a())();
      };
    };
  };
})(PS.Effect = PS.Effect || {});

(function (a) {
  a.Effect = a.Effect || {};
  var c = a.Effect,
      f = a.Effect,
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Control.Monad"];
  a = a["Data.Functor"];
  var d = new e.Monad(function () {
    return m;
  }, function () {
    return l;
  }),
      l = new b.Bind(function () {
    return h;
  }, f.bindE),
      h = new g.Apply(function () {
    return v;
  }, e.ap(d)),
      m = new k.Applicative(function () {
    return h;
  }, f.pureE),
      v = new a.Functor(k.liftA1(m));
  c.functorEffect = v;
  c.applicativeEffect = m;
  c.bindEffect = l;
  c.monadEffect = d;
})(PS);

(function (a) {
  var c = function () {
    function a() {
      this.last = this.head = null;
      this.size = 0;
    }

    function c(a, b) {
      this.queue = a;
      this.value = b;
      this.prev = this.next = null;
    }

    function g(b) {
      this.draining = !1;
      this.error = null;
      this.value = b;
      this.takes = new a();
      this.reads = new a();
      this.puts = new a();
    }

    function b(a) {
      try {
        a();
      } catch (m) {
        setTimeout(function () {
          throw m;
        }, 0);
      }
    }

    function e(a) {
      switch (a.size) {
        case 0:
          return null;

        case 1:
          var b = a.head;
          a.head = null;
          break;

        case 2:
          b = a.last;
          a.head.next = null;
          a.last = null;
          break;

        default:
          b = a.last, a.last = b.prev, a.last.next = null;
      }

      b.prev = null;
      b.queue = null;
      a.size--;
      return b.value;
    }

    function d(a) {
      switch (a.size) {
        case 0:
          return null;

        case 1:
          var b = a.head;
          a.head = null;
          break;

        case 2:
          b = a.head;
          a.last.prev = null;
          a.head = a.last;
          a.last = null;
          break;

        default:
          b = a.head, a.head = b.next, a.head.prev = null;
      }

      b.next = null;
      b.queue = null;
      a.size--;
      return b.value;
    }

    var l = {};
    g.EMPTY = l;

    g.putLast = function (a, b) {
      b = new c(a, b);

      switch (a.size) {
        case 0:
          a.head = b;
          break;

        case 1:
          b.prev = a.head;
          a.head.next = b;
          a.last = b;
          break;

        default:
          b.prev = a.last, a.last.next = b, a.last = b;
      }

      a.size++;
      return b;
    };

    g.takeLast = e;
    g.takeHead = d;

    g.deleteCell = function (a) {
      null !== a.queue && (a.queue.last === a ? e(a.queue) : a.queue.head === a ? d(a.queue) : (a.prev && (a.prev.next = a.next), a.next && (a.next.prev = a.prev), a.queue.size--, a.queue = null, a.value = null, a.next = null, a.prev = null));
    };

    g.drainVar = function (a, c) {
      if (!c.draining) {
        var e = c.puts,
            f = c.takes,
            g = c.reads,
            h,
            k;

        for (c.draining = !0;;) {
          var m = h = null;
          var A = c.value;
          var r = g.size;

          if (null !== c.error) {
            for (A = a.left(c.error); h = d(e);) {
              b(h.cb(A));
            }

            for (; m = d(g);) {
              b(m(A));
            }

            for (; k = d(f);) {
              b(k(A));
            }

            break;
          }

          A === l && (h = d(e)) && (c.value = A = h.value);

          if (A !== l) {
            for (k = d(f); r-- && (m = d(g));) {
              b(m(a.right(A)));
            }

            null !== k && (c.value = l, b(k(a.right(A))));
          }

          null !== h && b(h.cb(a.right(void 0)));
          if (c.value === l && 0 === e.size || c.value !== l && 0 === f.size) break;
        }

        c.draining = !1;
      }
    };

    return g;
  }();

  a.empty = function () {
    return new c(c.EMPTY);
  };

  a._takeVar = function (a, k, g) {
    return function () {
      var b = c.putLast(k.takes, g);
      c.drainVar(a, k);
      return function () {
        c.deleteCell(b);
      };
    };
  };

  a._tryPutVar = function (a, k, g) {
    return function () {
      return g.value === c.EMPTY && null === g.error ? (g.value = k, c.drainVar(a, g), !0) : !1;
    };
  };

  a._tryTakeVar = function (a, k) {
    return function () {
      var f = k.value;
      if (f === c.EMPTY) return a.nothing;
      k.value = c.EMPTY;
      c.drainVar(a, k);
      return a.just(f);
    };
  };
})(PS["Effect.AVar"] = PS["Effect.AVar"] || {});

(function (a) {
  a["Effect.AVar"] = a["Effect.AVar"] || {};
  var c = a["Effect.AVar"],
      f = a["Effect.AVar"],
      k = a["Data.Either"];
  a = a["Data.Maybe"];

  var g = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      b = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      e = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      d = {
    left: k.Left.create,
    right: k.Right.create,
    nothing: a.Nothing.value,
    just: a.Just.create,
    killed: g.create,
    filled: b.create,
    empty: e.value
  };

  c.take = function (a) {
    return function (b) {
      return f._takeVar(d, a, b);
    };
  };

  c.tryTake = function (a) {
    return f._tryTakeVar(d, a);
  };

  c.tryPut = function (a) {
    return function (b) {
      return f._tryPutVar(d, a, b);
    };
  };

  c.empty = f.empty;
})(PS);

(function (a) {
  var c = function () {
    function a(a, b, c, d) {
      this.tag = a;
      this._1 = b;
      this._2 = c;
      this._3 = d;
    }

    function c(b) {
      var c = function c(_c, d, e) {
        return new a(b, _c, d, e);
      };

      c.tag = b;
      return c;
    }

    function g(b) {
      return new a("Pure", void 0);
    }

    function b(a) {
      try {
        a();
      } catch (u) {
        setTimeout(function () {
          throw u;
        }, 0);
      }
    }

    function e(a, b, c) {
      try {
        return b(c());
      } catch (w) {
        return a(w);
      }
    }

    function d(a, b, c) {
      try {
        return b(c)();
      } catch (w) {
        return c(a(w))(), g;
      }
    }

    function l(c, f, g) {
      function h(g) {
        for (var k, w, z;;) {
          switch (z = w = k = null, n) {
            case 2:
              n = 1;

              try {
                q = p(q), null === u ? p = null : (p = u._1, u = u._2);
              } catch (O) {
                n = 5, x = c.left(O), q = null;
              }

              break;

            case 3:
              c.isLeft(q) ? (n = 5, x = q, q = null) : null === p ? n = 5 : (n = 2, q = c.fromRight(q));
              break;

            case 1:
              switch (q.tag) {
                case "Bind":
                  p && (u = new a("Cons", p, u));
                  p = q._2;
                  n = 1;
                  q = q._1;
                  break;

                case "Pure":
                  null === p ? (n = 5, q = c.right(q._1)) : (n = 2, q = q._1);
                  break;

                case "Sync":
                  n = 3;
                  q = e(c.left, c.right, q._1);
                  break;

                case "Async":
                  n = 4;
                  q = d(c.left, q._1, function (a) {
                    return function () {
                      r === g && (r++, t.enqueue(function () {
                        r === g + 1 && (n = 3, q = a, h(r));
                      }));
                    };
                  });
                  return;

                case "Throw":
                  n = 5;
                  x = c.left(q._1);
                  q = null;
                  break;

                case "Catch":
                  F = null === p ? new a("Cons", q, F, v) : new a("Cons", q, new a("Cons", new a("Resume", p, u), F, v), v);
                  u = p = null;
                  n = 1;
                  q = q._1;
                  break;

                case "Bracket":
                  I++;
                  F = null === p ? new a("Cons", q, F, v) : new a("Cons", q, new a("Cons", new a("Resume", p, u), F, v), v);
                  u = p = null;
                  n = 1;
                  q = q._1;
                  break;

                case "Fork":
                  n = 3;
                  k = l(c, f, q._2);
                  f && f.register(k);
                  q._1 && k.run();
                  q = c.right(k);
                  break;

                case "Sequential":
                  n = 1, q = m(c, f, q._1);
              }

              break;

            case 5:
              u = p = null;
              if (null === F) n = 6, q = v || x || q;else switch (k = F._3, z = F._1, F = F._2, z.tag) {
                case "Catch":
                  v && v !== k && 0 === I ? n = 5 : x && (n = 1, q = z._2(c.fromLeft(x)), x = null);
                  break;

                case "Resume":
                  v && v !== k && 0 === I || x ? n = 5 : (p = z._1, u = z._2, n = 2, q = c.fromRight(q));
                  break;

                case "Bracket":
                  I--;
                  null === x && (w = c.fromRight(q), F = new a("Cons", new a("Release", z._2, w), F, k), v === k || 0 < I) && (n = 1, q = z._3(w));
                  break;

                case "Release":
                  F = new a("Cons", new a("Finalized", q, x), F, v);
                  n = 1;
                  q = v && v !== k && 0 === I ? z._1.killed(c.fromLeft(v))(z._2) : x ? z._1.failed(c.fromLeft(x))(z._2) : z._1.completed(c.fromRight(q))(z._2);
                  x = null;
                  I++;
                  break;

                case "Finalizer":
                  I++;
                  F = new a("Cons", new a("Finalized", q, x), F, v);
                  n = 1;
                  q = z._1;
                  break;

                case "Finalized":
                  I--, n = 5, q = z._1, x = z._2;
              }
              break;

            case 6:
              for (var A in C) {
                C.hasOwnProperty(A) && (H = H && C[A].rethrow, b(C[A].handler(q)));
              }

              C = null;
              v && x ? setTimeout(function () {
                throw c.fromLeft(x);
              }, 0) : c.isLeft(q) && H && setTimeout(function () {
                if (H) throw c.fromLeft(q);
              }, 0);
              return;

            case 0:
              n = 1;
              break;

            case 4:
              return;
          }
        }
      }

      function k(a) {
        return function () {
          if (6 === n) return H = H && a.rethrow, a.handler(q)(), function () {};
          var b = J++;
          C = C || {};
          C[b] = a;
          return function () {
            null !== C && delete C[b];
          };
        };
      }

      var r = 0,
          n = 0,
          q = g,
          x = null,
          v = null,
          p = null,
          u = null,
          F = null,
          I = 0,
          J = 0,
          C = null,
          H = !0;
      return {
        kill: function kill(b, d) {
          return function () {
            if (6 === n) return d(c.right(void 0))(), function () {};
            var e = k({
              rethrow: !1,
              handler: function handler() {
                return d(c.right(void 0));
              }
            })();

            switch (n) {
              case 0:
                v = c.left(b);
                n = 6;
                q = v;
                h(r);
                break;

              case 4:
                null === v && (v = c.left(b));
                0 === I && (4 === n && (F = new a("Cons", new a("Finalizer", q(b)), F, v)), n = 5, x = q = null, h(++r));
                break;

              default:
                null === v && (v = c.left(b)), 0 === I && (n = 5, x = q = null);
            }

            return e;
          };
        },
        join: function join(a) {
          return function () {
            var b = k({
              rethrow: !1,
              handler: a
            })();
            0 === n && h(r);
            return b;
          };
        },
        onComplete: k,
        isSuspended: function isSuspended() {
          return 0 === n;
        },
        run: function run() {
          0 === n && (t.isDraining() ? h(r) : t.enqueue(function () {
            h(r);
          }));
        }
      };
    }

    function h(b, c, d, e) {
      function f(c, d, e) {
        var f = d,
            g = null,
            h = null,
            k = 0;
        d = {};

        a: for (;;) {
          var l = null;

          switch (f.tag) {
            case "Forked":
              f._3 === v && (l = x[f._1], d[k++] = l.kill(c, function (a) {
                return function () {
                  k--;
                  0 === k && e(a)();
                };
              }));
              if (null === g) break a;
              f = g._2;
              null === h ? g = null : (g = h._1, h = h._2);
              break;

            case "Map":
              f = f._2;
              break;

            case "Apply":
            case "Alt":
              g && (h = new a("Cons", g, h)), g = f, f = f._1;
          }
        }

        if (0 === k) e(b.right(void 0))();else for (c = 0, l = k; c < l; c++) {
          d[c] = d[c]();
        }
        return d;
      }

      function h(a, c, d) {
        var g, k;

        if (b.isLeft(a)) {
          var l = a;
          var m = null;
        } else m = a, l = null;

        for (;;) {
          var r = k = g = a = null;
          if (null !== u) break;

          if (null === c) {
            e(l || m)();
            break;
          }

          if (c._3 !== v) break;

          switch (c.tag) {
            case "Map":
              null === l ? (c._3 = b.right(c._1(b.fromRight(m))), m = c._3) : c._3 = l;
              break;

            case "Apply":
              a = c._1._3;
              g = c._2._3;

              if (l) {
                if (c._3 = l, k = !0, r = p++, w[r] = f(t, l === a ? c._2 : c._1, function () {
                  return function () {
                    delete w[r];
                    k ? k = !1 : null === d ? h(l, null, null) : h(l, d._1, d._2);
                  };
                }), k) {
                  k = !1;
                  return;
                }
              } else {
                if (a === v || g === v) return;
                m = b.right(b.fromRight(a)(b.fromRight(g)));
                c._3 = m;
              }

              break;

            case "Alt":
              a = c._1._3;
              g = c._2._3;
              if (a === v && b.isLeft(g) || g === v && b.isLeft(a)) return;
              if (a !== v && b.isLeft(a) && g !== v && b.isLeft(g)) l = m === a ? g : a, m = null, c._3 = l;else if (c._3 = m, k = !0, r = p++, w[r] = f(t, m === a ? c._2 : c._1, function () {
                return function () {
                  delete w[r];
                  k ? k = !1 : null === d ? h(m, null, null) : h(m, d._1, d._2);
                };
              }), k) {
                k = !1;
                return;
              }
          }

          null === d ? c = null : (c = d._1, d = d._2);
        }
      }

      function k(a) {
        return function (b) {
          return function () {
            delete x[a._1];
            a._3 = b;
            h(b, a._2._1, a._2._2);
          };
        };
      }

      function m(c, d) {
        u = b.left(c);
        var e;

        for (e in w) {
          if (w.hasOwnProperty(e)) {
            var k = w[e];

            for (e in k) {
              if (k.hasOwnProperty(e)) k[e]();
            }
          }
        }

        w = null;
        var h = f(c, J, d);
        return function (b) {
          return new a("Async", function (a) {
            return function () {
              for (var a in h) {
                if (h.hasOwnProperty(a)) h[a]();
              }

              return g;
            };
          });
        };
      }

      var n = 0,
          x = {},
          p = 0,
          w = {},
          t = Error("[ParAff] Early exit"),
          u = null,
          J = v;

      (function () {
        var e = 1,
            f = d,
            g = null,
            h = null;

        a: for (;;) {
          switch (e) {
            case 1:
              switch (f.tag) {
                case "Map":
                  g && (h = new a("Cons", g, h));
                  g = new a("Map", f._1, v, v);
                  f = f._2;
                  break;

                case "Apply":
                  g && (h = new a("Cons", g, h));
                  g = new a("Apply", v, f._2, v);
                  f = f._1;
                  break;

                case "Alt":
                  g && (h = new a("Cons", g, h));
                  g = new a("Alt", v, f._2, v);
                  f = f._1;
                  break;

                default:
                  var m = n++;
                  e = 5;
                  var r = f;
                  f = new a("Forked", m, new a("Cons", g, h), v);
                  r = l(b, c, r);
                  r.onComplete({
                    rethrow: !1,
                    handler: k(f)
                  })();
                  x[m] = r;
                  c && c.register(r);
              }

              break;

            case 5:
              if (null === g) break a;
              g._1 === v ? (g._1 = f, e = 1, f = g._2, g._2 = v) : (g._2 = f, f = g, null === h ? g = null : (g = h._1, h = h._2));
          }
        }

        J = f;

        for (m = 0; m < n; m++) {
          x[m].run();
        }
      })();

      return function (b) {
        return new a("Async", function (a) {
          return function () {
            return m(b, a);
          };
        });
      };
    }

    function m(b, c, d) {
      return new a("Async", function (a) {
        return function () {
          return h(b, c, d, a);
        };
      });
    }

    var v = {},
        t = function () {
      function a() {
        for (e = !0; 0 !== b;) {
          b--;
          var a = d[c];
          d[c] = void 0;
          c = (c + 1) % 1024;
          a();
        }

        e = !1;
      }

      var b = 0,
          c = 0,
          d = Array(1024),
          e = !1;
      return {
        isDraining: function isDraining() {
          return e;
        },
        enqueue: function enqueue(f) {
          if (1024 === b) {
            var g = e;
            a();
            e = g;
          }

          d[(c + b) % 1024] = f;
          b++;
          e || a();
        }
      };
    }();

    a.EMPTY = v;
    a.Pure = c("Pure");
    a.Throw = c("Throw");
    a.Catch = c("Catch");
    a.Sync = c("Sync");
    a.Async = c("Async");
    a.Bind = c("Bind");
    a.Bracket = c("Bracket");
    a.Fork = c("Fork");
    a.Seq = c("Sequential");
    a.ParMap = c("Map");
    a.ParApply = c("Apply");
    a.ParAlt = c("Alt");
    a.Fiber = l;

    a.Supervisor = function (b) {
      var c = {},
          d = 0,
          e = 0;
      return {
        register: function register(a) {
          var b = d++;
          a.onComplete({
            rethrow: !0,
            handler: function handler(a) {
              return function () {
                e--;
                delete c[b];
              };
            }
          })();
          c[b] = a;
          e++;
        },
        isEmpty: function isEmpty() {
          return 0 === e;
        },
        killAll: function killAll(f, g) {
          return function () {
            function h(a) {
              l[a] = c[a].kill(f, function (c) {
                return function () {
                  delete l[a];
                  k--;
                  b.isLeft(c) && b.fromLeft(c) && setTimeout(function () {
                    throw b.fromLeft(c);
                  }, 0);
                  0 === k && g();
                };
              })();
            }

            if (0 === e) return g();
            var k = 0,
                l = {},
                m;

            for (m in c) {
              c.hasOwnProperty(m) && (k++, h(m));
            }

            c = {};
            e = d = 0;
            return function (b) {
              return new a("Sync", function () {
                for (var a in l) {
                  if (l.hasOwnProperty(a)) l[a]();
                }
              });
            };
          };
        }
      };
    };

    a.Scheduler = t;
    a.nonCanceler = g;
    return a;
  }();

  a._pure = c.Pure;
  a._throwError = c.Throw;

  a._catchError = function (a) {
    return function (f) {
      return c.Catch(a, f);
    };
  };

  a._map = function (a) {
    return function (f) {
      return f.tag === c.Pure.tag ? c.Pure(a(f._1)) : c.Bind(f, function (f) {
        return c.Pure(a(f));
      });
    };
  };

  a._bind = function (a) {
    return function (f) {
      return c.Bind(a, f);
    };
  };

  a._liftEffect = c.Sync;

  a._parAffMap = function (a) {
    return function (f) {
      return c.ParMap(a, f);
    };
  };

  a._parAffApply = function (a) {
    return function (f) {
      return c.ParApply(a, f);
    };
  };

  a._parAffAlt = function (a) {
    return function (f) {
      return c.ParAlt(a, f);
    };
  };

  a.makeAff = c.Async;

  a._makeFiber = function (a, k) {
    return function () {
      return c.Fiber(a, null, k);
    };
  };

  a._delay = function () {
    function a(a, c) {
      return 0 === a && "undefined" !== typeof setImmediate ? setImmediate(c) : setTimeout(c, a);
    }

    return function (f, g) {
      return c.Async(function (b) {
        return function () {
          var e = a(g, b(f()));
          return function () {
            return c.Sync(function () {
              var a = 0 === g && "undefined" !== typeof clearImmediate ? clearImmediate(e) : clearTimeout(e);
              return f(a);
            });
          };
        };
      });
    };
  }();

  a._sequential = c.Seq;
})(PS["Effect.Aff"] = PS["Effect.Aff"] || {});

(function (a) {
  a["Control.Monad.Error.Class"] = a["Control.Monad.Error.Class"] || {};
  var c = a["Control.Monad.Error.Class"],
      f = a["Control.Applicative"],
      k = a["Data.Either"],
      g = a["Data.Functor"];

  c.catchError = function (a) {
    return a.catchError;
  };

  c.throwError = function (a) {
    return a.throwError;
  };

  c.MonadThrow = function (a, c) {
    this.Monad0 = a;
    this.throwError = c;
  };

  c.MonadError = function (a, c) {
    this.MonadThrow0 = a;
    this.catchError = c;
  };

  c["try"] = function (a) {
    return function (b) {
      return (0, a.catchError)(g.map(a.MonadThrow0().Monad0().Bind1().Apply0().Functor0())(k.Right.create)(b))(function () {
        var b = f.pure(a.MonadThrow0().Monad0().Applicative0());
        return function (a) {
          return b(k.Left.create(a));
        };
      }());
    };
  };
})(PS);

(function (a) {
  a["Control.Parallel"] = a["Control.Parallel"] || {};

  var c = a["Control.Category"],
      f = a["Control.Parallel.Class"],
      k = a["Data.Foldable"],
      g = function g(a) {
    return function (b) {
      return function (c) {
        var d = f.sequential(a),
            e = k.traverse_(a.Applicative1())(b)(function () {
          var b = f.parallel(a);
          return function (a) {
            return b(c(a));
          };
        }());
        return function (a) {
          return d(e(a));
        };
      };
    };
  };

  a["Control.Parallel"].parSequence_ = function (a) {
    return function (b) {
      return g(a)(b)(c.identity(c.categoryFn));
    };
  };
})(PS);

(function (a) {
  a["Effect.Class"] = a["Effect.Class"] || {};
  var c = a["Effect.Class"],
      f = a["Control.Category"],
      k = a.Effect;

  a = function a(_a10, b) {
    this.Monad0 = _a10;
    this.liftEffect = b;
  };

  f = new a(function () {
    return k.monadEffect;
  }, f.identity(f.categoryFn));

  c.liftEffect = function (a) {
    return a.liftEffect;
  };

  c.MonadEffect = a;
  c.monadEffectEffect = f;
})(PS);

(function (a) {
  a.showErrorImpl = function (a) {
    return a.stack || a.toString();
  };

  a.error = function (a) {
    return Error(a);
  };

  a.throwException = function (a) {
    return function () {
      throw a;
    };
  };
})(PS["Effect.Exception"] = PS["Effect.Exception"] || {});

(function (a) {
  a["Effect.Exception"] = a["Effect.Exception"] || {};
  var c = a["Effect.Exception"],
      f = a["Effect.Exception"];
  a = new a["Data.Show"].Show(f.showErrorImpl);

  c["throw"] = function (a) {
    return f.throwException(f.error(a));
  };

  c.showError = a;
  c.error = f.error;
})(PS);

(function (a) {
  a.unsafePartial = function (a) {
    return a();
  };
})(PS["Partial.Unsafe"] = PS["Partial.Unsafe"] || {});

(function (a) {
  a.crashWith = function () {
    return function (a) {
      throw Error(a);
    };
  };
})(PS.Partial = PS.Partial || {});

(function (a) {
  a.Partial = a.Partial || {};
  a.Partial.crashWith = a.Partial.crashWith;
})(PS);

(function (a) {
  a["Partial.Unsafe"] = a["Partial.Unsafe"] || {};
  var c = a["Partial.Unsafe"],
      f = a.Partial;

  a["Partial.Unsafe"].unsafeCrashWith = function (a) {
    return c.unsafePartial(function (c) {
      return f.crashWith()(a);
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff"] = a["Effect.Aff"] || {};
  var c = a["Effect.Aff"],
      f = a["Effect.Aff"],
      k = a["Control.Alt"],
      g = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      d = a["Control.Monad"],
      l = a["Control.Monad.Error.Class"],
      h = a["Control.Parallel"],
      m = a["Control.Parallel.Class"],
      v = a["Control.Plus"],
      t = a["Data.Either"],
      n = a["Data.Foldable"],
      u = a["Data.Function"],
      x = a["Data.Functor"],
      w = a["Data.Monoid"],
      A = a["Data.Semigroup"],
      r = a["Data.Unit"],
      z = a.Effect,
      q = a["Effect.Class"],
      E = a["Effect.Exception"],
      K = a["Partial.Unsafe"];
  a = a["Unsafe.Coerce"];

  var p = new x.Functor(f._parAffMap),
      G = new x.Functor(f._map),
      F = function () {
    return {
      isLeft: function isLeft(a) {
        if (a instanceof t.Left) return !0;
        if (a instanceof t.Right) return !1;
        throw Error("Failed pattern match at Effect.Aff (line 390, column 12 - line 392, column 20): " + [a.constructor.name]);
      },
      fromLeft: function fromLeft(a) {
        if (a instanceof t.Left) return a.value0;
        if (a instanceof t.Right) return K.unsafeCrashWith("unsafeFromLeft: Right");
        throw Error("Failed pattern match at Effect.Aff (line 395, column 20 - line 397, column 54): " + [a.constructor.name]);
      },
      fromRight: function fromRight(a) {
        if (a instanceof t.Right) return a.value0;
        if (a instanceof t.Left) return K.unsafeCrashWith("unsafeFromRight: Left");
        throw Error("Failed pattern match at Effect.Aff (line 400, column 21 - line 402, column 54): " + [a.constructor.name]);
      },
      left: t.Left.create,
      right: t.Right.create
    };
  }(),
      I = function I(a) {
    return function () {
      var b = f._makeFiber(F, a)();

      b.run();
      return b;
    };
  },
      J = new b.Apply(function () {
    return p;
  }, f._parAffApply),
      C = new d.Monad(function () {
    return B;
  }, function () {
    return H;
  }),
      H = new e.Bind(function () {
    return D;
  }, f._bind),
      D = new b.Apply(function () {
    return G;
  }, d.ap(C)),
      B = new g.Applicative(function () {
    return D;
  }, f._pure),
      N = new q.MonadEffect(function () {
    return C;
  }, f._liftEffect);

  b = function () {
    var a = q.liftEffect(N);
    return function (b) {
      return u["const"](a(b));
    };
  }();

  var Q = new l.MonadThrow(function () {
    return C;
  }, f._throwError),
      P = new l.MonadError(function () {
    return Q;
  }, f._catchError),
      O = function O(a) {
    return function (b) {
      return I(e.bindFlipped(H)(function () {
        var b = q.liftEffect(N);
        return function (c) {
          return b(a(c));
        };
      }())(l["try"](P)(b)));
    };
  },
      M = new m.Parallel(function () {
    return T;
  }, function () {
    return C;
  }, a.unsafeCoerce, f._sequential),
      T = new g.Applicative(function () {
    return J;
  }, function () {
    var a = m.parallel(M),
        b = g.pure(B);
    return function (c) {
      return a(b(c));
    };
  }()),
      S = new A.Semigroup(function (a) {
    return function (b) {
      return function (c) {
        return h.parSequence_(M)(n.foldableArray)([a(c), b(c)]);
      };
    };
  });

  A = u["const"](g.pure(B)(r.unit));
  var y = new w.Monoid(function () {
    return S;
  }, A);
  A = f.makeAff(function (a) {
    return g.pure(z.applicativeEffect)(w.mempty(y));
  });
  var L = new k.Alt(function () {
    return p;
  }, f._parAffAlt),
      V = new k.Alt(function () {
    return G;
  }, function (a) {
    return function (b) {
      return l.catchError(P)(a)(u["const"](b));
    };
  });
  k = new v.Plus(function () {
    return V;
  }, l.throwError(Q)(E.error("Always fails")));
  v = new v.Plus(function () {
    return L;
  }, m.parallel(M)(v.empty(k)));

  c.runAff_ = function (a) {
    return function (b) {
      return x["void"](z.functorEffect)(O(a)(b));
    };
  };

  c.delay = function (a) {
    return f._delay(t.Right.create, a);
  };

  c.never = A;
  c.effectCanceler = b;
  c.functorAff = G;
  c.applicativeAff = B;
  c.bindAff = H;
  c.monadEffectAff = N;
  c.altParAff = L;
  c.plusParAff = v;
  c.parallelAff = M;
  c.makeAff = f.makeAff;
})(PS);

(function (a) {
  a["Effect.Aff.AVar"] = a["Effect.Aff.AVar"] || {};
  var c = a["Effect.AVar"],
      f = a["Effect.Aff"];

  a["Effect.Aff.AVar"].take = function (a) {
    return f.makeAff(function (g) {
      return function () {
        var b = c.take(a)(g)();
        return f.effectCanceler(b);
      };
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff.Class"] = a["Effect.Aff.Class"] || {};
  var c = a["Effect.Aff.Class"],
      f = a["Control.Category"],
      k = a["Effect.Aff"];

  a = function a(_a11, b) {
    this.MonadEffect0 = _a11;
    this.liftAff = b;
  };

  f = new a(function () {
    return k.monadEffectAff;
  }, f.identity(f.categoryFn));

  c.liftAff = function (a) {
    return a.liftAff;
  };

  c.MonadAff = a;
  c.monadAffAff = f;
})(PS);

(function (a) {
  a.log = function (a) {
    return function () {
      console.log(a);
      return {};
    };
  };
})(PS["Effect.Console"] = PS["Effect.Console"] || {});

(function (a) {
  a["Effect.Console"] = a["Effect.Console"] || {};
  var c = a["Effect.Console"],
      f = a["Effect.Console"],
      k = a["Data.Show"];

  c.logShow = function (a) {
    return function (b) {
      return f.log(k.show(a)(b));
    };
  };

  c.log = f.log;
})(PS);

(function (a) {
  a["Concur.Core.Types"] = a["Concur.Core.Types"] || {};
  var c = a["Concur.Core.Types"],
      f = a["Control.Alt"],
      k = a["Control.Alternative"],
      g = a["Control.Applicative"],
      b = a["Control.Bind"],
      e = a["Control.Category"],
      d = a["Control.Monad"],
      l = a["Control.Monad.Free"],
      h = a["Control.MultiAlternative"],
      m = a["Control.Parallel.Class"],
      v = a["Control.Plus"],
      t = a["Data.Array.NonEmpty"],
      n = a["Data.Array.NonEmpty.Internal"],
      u = a["Data.Either"],
      x = a["Data.FoldableWithIndex"],
      w = a["Data.Functor"],
      A = a["Data.Maybe"],
      r = a["Data.Monoid"],
      z = a["Data.Semigroup"],
      q = a["Data.Semigroup.Foldable"],
      E = a["Data.Show"],
      K = a["Data.Tuple"],
      p = a.Effect,
      G = a["Effect.AVar"],
      F = a["Effect.Aff"],
      I = a["Effect.Aff.AVar"],
      J = a["Effect.Aff.Class"],
      C = a["Effect.Class"],
      H = a["Effect.Console"],
      D = a["Effect.Exception"];
  a = new a["Control.ShiftMap"].ShiftMap(function (a) {
    return a(e.identity(e.categoryFn));
  });

  var B = l.freeFunctor,
      N = l.freeBind,
      Q = l.freeApplicative,
      P = new d.Monad(function () {
    return Q;
  }, function () {
    return N;
  }),
      O = function O(a) {
    return a;
  },
      M = function M(a) {
    return l["resume'"](function (b) {
      return function (c) {
        return new u.Right(w.map(a)(c)(b));
      };
    })(u.Left.create);
  },
      T = new w.Functor(function (a) {
    return function (b) {
      if (b instanceof u.Right) b = new u.Right({
        cont: w.map(F.functorAff)(a)(b.value0.cont),
        view: b.value0.view
      });else if (b instanceof u.Left) b = new u.Left(w.map(p.functorEffect)(a)(b.value0));else throw Error("Failed pattern match at Concur.Core.Types (line 45, column 5 - line 45, column 57): " + [b.constructor.name]);
      return b;
    };
  }),
      S = function S(a) {
    return l.liftF(u.Left.create(a));
  },
      y = function y(a) {
    return new C.MonadEffect(function () {
      return P;
    }, S);
  },
      L = function L(a) {
    return l.liftF(new u.Right({
      view: a,
      cont: F.never
    }));
  },
      V = function V(a) {
    return new z.Semigroup(function (b) {
      return function (c) {
        return h.orr(X(a))([b, c]);
      };
    });
  },
      R = function R(a) {
    return new v.Plus(function () {
      return W(a);
    }, L(r.mempty(a)));
  },
      X = function X(a) {
    return new h.MultiAlternative(function () {
      return R(a);
    }, function (c) {
      var d = function d(a) {
        return function (c) {
          return function (d) {
            var e = w.map(n.functorNonEmptyArray)(function (a) {
              return l.wrap(u.Right.create(a));
            })(c);
            return b.bind(F.bindAff)(m.sequential(F.parallelAff)(x.foldlWithIndex(n.foldableWithIndexNonEmptyArray)(function (a) {
              return function (b) {
                return function (c) {
                  return f.alt(F.altParAff)(m.parallel(F.parallelAff)(w.map(F.functorAff)(K.Tuple.create(a))(c)))(b);
                };
              };
            })(v.empty(F.plusParAff))(d)))(function (b) {
              return g.pure(F.applicativeAff)(r(a)(A.fromMaybe(e)(t.updateAt(b.value0)(b.value1)(e))));
            });
          };
        };
      },
          e = function e(a) {
        return function (b) {
          return l.wrap(new u.Right({
            view: q.foldMap1(n.foldable1NonEmptyArray)(a.Semigroup0())(function (a) {
              return a.view;
            })(b),
            cont: d(a)(b)(w.map(n.functorNonEmptyArray)(function (a) {
              return a.cont;
            })(b))
          }));
        };
      },
          h = function h(a) {
        return function (b) {
          return function (c) {
            var d = t.uncons(c),
                e = M(T)(d.head);
            if (e instanceof u.Left) return g.pure(l.freeApplicative)(e.value0);

            if (e instanceof u.Right) {
              if (e.value0 instanceof u.Left) return l.wrap(new u.Left(function () {
                var c = e.value0.value0();
                return h(a)(b)(t["cons'"](c)(d.tail));
              }));
              if (e.value0 instanceof u.Right) return k(a)(t.snoc(b)(e.value0.value0))(d.tail);
              throw Error("Failed pattern match at Concur.Core.Types (line 138, column 34 - line 142, column 61): " + [e.value0.constructor.name]);
            }

            throw Error("Failed pattern match at Concur.Core.Types (line 136, column 10 - line 142, column 61): " + [e.constructor.name]);
          };
        };
      },
          k = function k(a) {
        return function (b) {
          return function (c) {
            c = t.fromArray(c);
            if (c instanceof A.Nothing) return e(a)(b);
            if (c instanceof A.Just) return h(a)(b)(c.value0);
            throw Error("Failed pattern match at Concur.Core.Types (line 113, column 31 - line 116, column 49): " + [c.constructor.name]);
          };
        };
      },
          r = function r(a) {
        return function (b) {
          var c = t.uncons(b),
              d = M(T)(c.head);
          if (d instanceof u.Left) return g.pure(l.freeApplicative)(d.value0);

          if (d instanceof u.Right) {
            if (d.value0 instanceof u.Left) return l.wrap(new u.Left(function () {
              var b = d.value0.value0();
              return r(a)(t["cons'"](b)(c.tail));
            }));
            if (d.value0 instanceof u.Right) return k(a)(t.singleton(d.value0.value0))(c.tail);
            throw Error("Failed pattern match at Concur.Core.Types (line 101, column 34 - line 105, column 63): " + [d.value0.constructor.name]);
          }

          throw Error("Failed pattern match at Concur.Core.Types (line 99, column 10 - line 105, column 63): " + [d.constructor.name]);
        };
      };

      c = t.fromArray(c);
      if (c instanceof A.Just) return r(a)(w.map(n.functorNonEmptyArray)(O)(c.value0));
      if (c instanceof A.Nothing) return v.empty(R(a));
      throw Error("Failed pattern match at Concur.Core.Types (line 88, column 13 - line 90, column 21): " + [c.constructor.name]);
    });
  },
      W = function W(a) {
    return new f.Alt(function () {
      return B;
    }, z.append(V(a)));
  },
      Z = function Z(a) {
    return function (b) {
      var c = function c(a) {
        return function (b) {
          if (b instanceof u.Left) return H.log("Aff failed - " + E.show(D.showError)(b.value0));
          if (b instanceof u.Right) return w["void"](p.functorEffect)(G.tryPut(b.value0)(a));
          throw Error("Failed pattern match at Concur.Core.Types (line 237, column 3 - line 237, column 55): " + [a.constructor.name, b.constructor.name]);
        };
      };

      return l.wrap(new u.Left(function () {
        var d = G.empty();
        F.runAff_(c(d))(b)();
        var e = G.tryTake(d)();
        if (e instanceof A.Just) return g.pure(l.freeApplicative)(e.value0);
        if (e instanceof A.Nothing) return l.liftF(new u.Right({
          view: a,
          cont: I.take(d)
        }));
        throw Error("Failed pattern match at Concur.Core.Types (line 232, column 8 - line 234, column 75): " + [e.constructor.name]);
      }));
    };
  };

  c.WidgetStep = function (a) {
    return a;
  };

  c.Widget = function (a) {
    return a;
  };

  c.unWidget = O;
  c.resume = M;
  c.display = L;
  c.functorWidgetStep = T;
  c.widgetFunctor = B;
  c.widgetBind = N;
  c.widgetApplicative = Q;
  c.widgetMonad = P;
  c.widgetShiftMap = a;
  c.widgetMultiAlternative = X;

  c.widgetMonoid = function (a) {
    return new r.Monoid(function () {
      return V(a);
    }, v.empty(R(a)));
  };

  c.widgetAlt = W;

  c.widgetAlternative = function (a) {
    return new k.Alternative(function () {
      return Q;
    }, function () {
      return R(a);
    });
  };

  c.widgetMonadEff = y;

  c.widgetMonadAff = function (a) {
    return new J.MonadAff(function () {
      return y(a);
    }, Z(r.mempty(a)));
  };
})(PS);

(function (a) {
  a["Concur.Core"] = a["Concur.Core"] || {};

  var c = a["Concur.Core"],
      f = a["Concur.Core.Types"],
      k = a["Control.Alt"],
      g = a["Control.Applicative"],
      b = a["Control.Monad.Free"],
      e = a["Control.Parallel.Class"],
      d = a["Data.Either"],
      l = a["Data.Functor"],
      h = a.Effect,
      m = a["Effect.AVar"],
      v = a["Effect.Aff"],
      t = a["Effect.Aff.AVar"],
      n = a["Effect.Aff.Class"],
      u = function u(a) {
    return function (c) {
      var w = f.resume(f.functorWidgetStep)(c);
      if (w instanceof d.Left) return g.pure(b.freeApplicative)(w.value0);

      if (w instanceof d.Right) {
        if (w.value0 instanceof d.Left) return b.wrap(f.WidgetStep(new d.Left(function () {
          var b = w.value0.value0();
          return u(a)(b);
        })));
        if (w.value0 instanceof d.Right) return b.wrap(f.WidgetStep(new d.Left(function () {
          var c = m.empty(),
              x = e.sequential(v.parallelAff)(k.alt(v.altParAff)(e.parallel(v.parallelAff)(n.liftAff(n.monadAffAff)(t.take(c))))(e.parallel(v.parallelAff)(l.map(v.functorAff)(u(a))(w.value0.value0.cont))));
          return b.wrap(f.WidgetStep(new d.Right({
            view: a(function (a) {
              return l["void"](h.functorEffect)(m.tryPut(g.pure(b.freeApplicative)(a))(c));
            })(w.value0.value0.view),
            cont: x
          })));
        })));
        throw Error("Failed pattern match at Concur.Core (line 36, column 28 - line 49, column 10): " + [w.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core (line 34, column 26 - line 49, column 10): " + [w.constructor.name]);
    };
  };

  c.mkLeafWidget = function (a) {
    return f.Widget(b.wrap(f.WidgetStep(new d.Left(function () {
      var c = m.empty();
      return b.wrap(f.WidgetStep(new d.Right({
        view: a(function (a) {
          return l["void"](h.functorEffect)(m.tryPut(g.pure(b.freeApplicative)(a))(c));
        }),
        cont: n.liftAff(n.monadAffAff)(t.take(c))
      })));
    }))));
  };

  c.mkNodeWidget = function (a) {
    return function (b) {
      return u(a)(b);
    };
  };
})(PS);

(function (a) {
  a["Concur.Core.LiftWidget"] = a["Concur.Core.LiftWidget"] || {};
  var c = a["Concur.Core.LiftWidget"];
  a = a["Control.Category"];
  a = new function (a) {
    this.liftWidget = a;
  }(a.identity(a.categoryFn));

  c.liftWidget = function (a) {
    return a.liftWidget;
  };

  c.widgetLiftWidget = a;
})(PS);

(function (a) {
  a["Concur.Core.Props"] = a["Concur.Core.Props"] || {};
  var c = a["Concur.Core.Props"];
  a = a["Data.Functor"];

  var f = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      k = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }();

  a = new a.Functor(function (a) {
    return function (b) {
      if (b instanceof f) return new f(b.value0);
      if (b instanceof k) return new k(function (c) {
        return b.value0(function (b) {
          return c(a(b));
        });
      });
      throw Error("Failed pattern match at Concur.Core.Props (line 13, column 1 - line 15, column 48): " + [a.constructor.name, b.constructor.name]);
    };
  });
  c.PrimProp = f;
  c.Handler = k;

  c.mkProp = function (a) {
    return function (b) {
      if (b instanceof f) return b.value0;
      if (b instanceof k) return b.value0(a);
      throw Error("Failed pattern match at Concur.Core.Props (line 18, column 1 - line 22, column 7): " + [a.constructor.name, b.constructor.name]);
    };
  };

  c.functorProps = a;
})(PS);

(function (a) {
  a["Concur.Core.DOM"] = a["Concur.Core.DOM"] || {};

  var c = a["Concur.Core.DOM"],
      f = a["Concur.Core"],
      k = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Props"],
      b = a["Control.MultiAlternative"],
      e = a["Control.ShiftMap"],
      d = a["Data.Functor"],
      l = function l(a) {
    return function (b) {
      return function (c) {
        return function (h) {
          return e.shiftMap(a)(function (a) {
            return function (e) {
              return f.mkNodeWidget(function (e) {
                return function (f) {
                  return c(d.map(b)(function () {
                    var b = g.mkProp(e),
                        c = d.map(g.functorProps)(a);
                    return function (a) {
                      return b(c(a));
                    };
                  }())(h))(f);
                };
              })(e);
            };
          });
        };
      };
    };
  };

  c.el = l;

  c.elLeaf = function (a) {
    return function (b) {
      return function (c) {
        return function (e) {
          return k.liftWidget(a)(f.mkLeafWidget(function (a) {
            return c(d.map(b)(g.mkProp(a))(e));
          }));
        };
      };
    };
  };

  c["el'"] = function (a) {
    return function (c) {
      return function (d) {
        return function (e) {
          return function (f) {
            var g = l(a)(d)(e)(f),
                h = b.orr(c);
            return function (a) {
              return g(h(a));
            };
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Concur.Core.Discharge"] = a["Concur.Core.Discharge"] || {};

  var c = a["Concur.Core.Discharge"],
      f = a["Concur.Core.Types"],
      k = a["Control.Applicative"],
      g = a["Control.Monad.Free"],
      b = a["Data.Either"],
      e = a["Data.Functor"],
      d = a["Data.Monoid"],
      l = a["Data.Tuple"],
      h = a.Effect,
      m = a["Effect.Aff"],
      v = function v(a) {
    return function (c) {
      var e = g.resume(f.functorWidgetStep)(f.unWidget(c));
      if (e instanceof b.Right) return k.pure(h.applicativeEffect)(new l.Tuple(c, d.mempty(a)));

      if (e instanceof b.Left) {
        if (e.value0 instanceof b.Left) return function () {
          var b = e.value0.value0();
          return v(a)(b)();
        };
        if (e.value0 instanceof b.Right) return k.pure(h.applicativeEffect)(new l.Tuple(g.wrap(new b.Right(e.value0.value0)), e.value0.value0.view));
        throw Error("Failed pattern match at Concur.Core.Discharge (line 43, column 27 - line 47, column 77): " + [e.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core.Discharge (line 41, column 28 - line 47, column 77): " + [e.constructor.name]);
    };
  },
      t = function t(a) {
    return function (c) {
      return function (l) {
        var n = g.resume(f.functorWidgetStep)(l);
        if (n instanceof b.Right) return k.pure(h.applicativeEffect)(d.mempty(a));

        if (n instanceof b.Left) {
          if (n.value0 instanceof b.Left) return function () {
            var b = n.value0.value0();
            return t(a)(c)(b)();
          };
          if (n.value0 instanceof b.Right) return function () {
            m.runAff_(function () {
              var a = e.map(b.functorEither)(f.Widget);
              return function (b) {
                return c(a(b));
              };
            }())(n.value0.value0.cont)();
            return n.value0.value0.view;
          };
          throw Error("Failed pattern match at Concur.Core.Discharge (line 26, column 28 - line 32, column 19): " + [n.value0.constructor.name]);
        }

        throw Error("Failed pattern match at Concur.Core.Discharge (line 24, column 32 - line 32, column 19): " + [n.constructor.name]);
      };
    };
  };

  c.discharge = t;
  c.dischargePartialEffect = v;
})(PS);

(function (a) {
  a["Control.Comonad"] = a["Control.Comonad"] || {};
  a = a["Control.Comonad"];

  a.Comonad = function (a, f) {
    this.Extend0 = a;
    this.extract = f;
  };

  a.extract = function (a) {
    return a.extract;
  };
})(PS);

(function (a) {
  a["Control.Extend"] = a["Control.Extend"] || {};

  a["Control.Extend"].Extend = function (a, f) {
    this.Functor0 = a;
    this.extend = f;
  };
})(PS);

(function (a) {
  a.defer = function (a) {
    var c = null;
    return function () {
      if (void 0 === a) return c;
      c = a();
      a = void 0;
      return c;
    };
  };

  a.force = function (a) {
    return a();
  };
})(PS["Data.Lazy"] = PS["Data.Lazy"] || {});

(function (a) {
  a["Data.Lazy"] = a["Data.Lazy"] || {};
  var c = a["Data.Lazy"],
      f = a["Data.Lazy"];
  a = new a["Data.Functor"].Functor(function (a) {
    return function (c) {
      return f.defer(function (b) {
        return a(f.force(c));
      });
    };
  });
  c.functorLazy = a;
  c.defer = f.defer;
  c.force = f.force;
})(PS);

(function (a) {
  a["Control.Cofree"] = a["Control.Cofree"] || {};

  var c = a["Control.Cofree"],
      f = a["Concur.Core.Types"],
      k = a["Control.Alt"],
      g = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      d = a["Control.Comonad"],
      l = a["Control.Extend"],
      h = a["Control.Monad"],
      m = a["Control.Plus"],
      v = a["Control.ShiftMap"],
      t = a["Data.Functor"],
      n = a["Data.Lazy"],
      u = a["Data.Tuple"],
      x = function x(a) {
    return u.snd(n.force(a));
  },
      w = function w(a) {
    return function (b) {
      return n.defer(function (c) {
        return new u.Tuple(a, b);
      });
    };
  },
      A = function A(a) {
    return u.fst(n.force(a));
  },
      r = function r(a) {
    return new t.Functor(function (b) {
      var c = function c(d) {
        return t.map(n.functorLazy)(function (d) {
          return new u.Tuple(b(d.value0), t.map(a)(c)(d.value1));
        })(d);
      };

      return c;
    });
  },
      z = function z(a) {
    return new l.Extend(function () {
      return r(a);
    }, function (b) {
      var c = function c(d) {
        return t.map(n.functorLazy)(function (e) {
          return new u.Tuple(b(d), t.map(a)(c)(e.value1));
        })(d);
      };

      return c;
    });
  },
      q = function q(a) {
    return new h.Monad(function () {
      return p(a);
    }, function () {
      return E(a);
    });
  },
      E = function E(a) {
    return new e.Bind(function () {
      return K(a);
    }, function (b) {
      return function (c) {
        var d = function d(b) {
          return function (c) {
            var f = t.map(a.Plus1().Alt0().Functor0())(d(b))(x(c)),
                g = t.map(a.Plus1().Alt0().Functor0())(e)(x(b));
            return w(A(c))(k.alt(a.Plus1().Alt0())(g)(f));
          };
        },
            e = function e(a) {
          return d(a)(c(A(a)));
        };

        return e(b);
      };
    });
  },
      K = function K(a) {
    return new b.Apply(function () {
      return r(a.Plus1().Alt0().Functor0());
    }, h.ap(q(a)));
  },
      p = function p(a) {
    return new g.Applicative(function () {
      return K(a);
    }, function (b) {
      return w(b)(m.empty(a.Plus1()));
    });
  };

  c.mkCofree = w;
  c.tail = x;

  c.comonadCofree = function (a) {
    return new d.Comonad(function () {
      return z(a);
    }, A);
  };

  c.applicativeCofree = p;
  c.bindCofree = E;

  c.shiftMapCofree = function (a) {
    return new v.ShiftMap(function (b) {
      return function (c) {
        return n.defer(function (d) {
          d = n.force(c);
          return new u.Tuple(d.value0, b(g.pure(p(f.widgetAlternative(a))))(d.value1));
        });
      };
    });
  };
})(PS);

(function (a) {
  a["Concur.Core.FRP"] = a["Concur.Core.FRP"] || {};

  var c = a["Concur.Core.FRP"],
      f = a["Concur.Core.Types"],
      k = a["Control.Alt"],
      g = a["Control.Applicative"],
      b = a["Control.Bind"],
      e = a["Control.Cofree"],
      d = a["Control.Comonad"],
      l = a["Data.Functor"],
      h = a["Data.Maybe"],
      m = a["Data.Unit"],
      v = a["Effect.Aff"],
      t = a["Effect.Aff.Class"],
      n = e.tail,
      u = e.mkCofree,
      x = function x(a) {
    return function (c) {
      return function (h) {
        var k = h(c);
        return u(d.extract(e.comonadCofree(f.widgetFunctor))(k))(b.bind(f.widgetBind)(n(k))(function (b) {
          return g.pure(f.widgetApplicative)(x(a)(d.extract(e.comonadCofree(f.widgetFunctor))(b))(h));
        }));
      };
    };
  },
      w = function w(a) {
    return b.bind(f.widgetBind)(n(a))(w);
  };

  c.step = u;

  c.display = function (a) {
    return u(m.unit)(a);
  };

  c.loopS = x;
  c.dyn = w;

  c.debounce = function (a) {
    return function (c) {
      return function (d) {
        return function (e) {
          var m = function m(d) {
            return function (e) {
              return b.bind(f.widgetBind)(k.alt(f.widgetAlt(a))(l.map(f.widgetFunctor)(h.Just.create)(e(d)))(l.voidRight(f.widgetFunctor)(h.Nothing.value)(t.liftAff(f.widgetMonadAff(a))(v.delay(c)))))(function (a) {
                if (a instanceof h.Nothing) return g.pure(f.widgetApplicative)(r(d)(e));
                if (a instanceof h.Just) return m(a.value0)(e);
                throw Error("Failed pattern match at Concur.Core.FRP (line 199, column 7 - line 203, column 28): " + [a.constructor.name]);
              });
            };
          },
              r = function r(a) {
            return function (c) {
              return u(a)(b.bind(f.widgetBind)(c(a))(function (a) {
                return m(a)(c);
              }));
            };
          };

          return r(d)(e);
        };
      };
    };
  };
})(PS);

(function (a) {
  function c(a) {
    return function (b) {
      return function (c) {
        return f.createElement.apply(f, [a, b].concat(c));
      };
    };
  }

  var f = require("react"),
      k = function (a) {
    function b(a, b, c) {
      switch (b) {
        case "state":
        case "render":
        case "componentDidMount":
        case "componentWillUnmount":
          a[b] = c;
          break;

        case "componentDidCatch":
        case "componentWillUpdate":
        case "shouldComponentUpdate":
        case "getSnapshotBeforeUpdate":
          a[b] = function (a, b) {
            return c(a)(b)();
          };

          break;

        case "componentDidUpdate":
          a[b] = function (a, b, d) {
            return c(a)(b)(d)();
          };

          break;

        case "unsafeComponentWillMount":
          a.UNSAFE_componentWillMount = c;
          break;

        case "unsafeComponentWillReceiveProps":
          a.UNSAFE_componentWillReceiveProps = function (a) {
            return c(a)();
          };

          break;

        case "unsafeComponentWillUpdate":
          a.UNSAFE_componentWillUpdate = function (a, b) {
            return c(a)(b)();
          };

          break;

        default:
          throw Error("[purescript-react] Not a component property: " + b);
      }
    }

    return function (c) {
      return function (d) {
        var e = function e(c) {
          a.call(this, c);
          c = d(this)();

          for (var e in c) {
            b(this, e, c[e]);
          }
        };

        e.displayName = c;
        e.prototype = Object.create(a.prototype);
        return e.prototype.constructor = e;
      };
    };
  }(f.Component);

  a.componentImpl = k;
  a.fragment = f.Fragment;

  a.setStateImpl = function (a) {
    return function (b) {
      return function () {
        a.setState(b);
      };
    };
  };

  a.getState = function (a) {
    return function () {
      if (!a.state) throw Error("[purescript-react] Cannot get state within constructor");
      return a.state;
    };
  };

  a.createElementImpl = c;
  a.createElementTagName = c;

  a.createLeafElementImpl = function (a) {
    return function (b) {
      return f.createElement(a, b);
    };
  };

  a.createElementTagNameDynamic = function (a) {
    return function (b) {
      return function (c) {
        return f.createElement(a, b, c);
      };
    };
  };
})(PS.React = PS.React || {});

(function (a) {
  a.React = a.React || {};
  var c = a.React,
      f = a.React;
  a = f.setStateImpl;
  var k = new function (a) {
    this.toElement = a;
  }((0, f.createElementImpl)(f.fragment)({}));

  c.component = function (a) {
    return f.componentImpl;
  };

  c.writeState = a;

  c.createLeafElement = function (a) {
    return f.createLeafElementImpl;
  };

  c.toElement = function (a) {
    return a.toElement;
  };

  c.isReactElementArray = k;
  c.getState = f.getState;
  c.createElementTagName = f.createElementTagName;
  c.createElementTagNameDynamic = f.createElementTagNameDynamic;
})(PS);

(function (a) {
  a["Concur.React"] = a["Concur.React"] || {};

  var c = a["Concur.Core.Discharge"],
      f = a["Data.Either"],
      k = a["Data.Functor"],
      g = a["Data.Monoid"],
      b = a["Data.Show"],
      e = a["Data.Unit"],
      d = a.Effect,
      l = a["Effect.Console"],
      h = a["Effect.Exception"],
      m = a.React,
      v = function v(a) {
    var n = function n(a) {
      return m.toElement(m.isReactElementArray)(a.view);
    },
        t = function t(a) {
      return function (n) {
        if (n instanceof f.Right) return function () {
          var b = c.discharge(g.monoidArray)(t(a))(n.value0)();
          return k["void"](d.functorEffect)(m.writeState(a)({
            view: b
          }))();
        };
        if (n instanceof f.Left) return function () {
          l.log("FAILED! " + b.show(h.showError)(n.value0))();
          return e.unit;
        };
        throw Error("Failed pattern match at Concur.React (line 31, column 3 - line 33, column 50): " + [a.constructor.name, n.constructor.name]);
      };
    };

    return m.component()("Concur")(function (b) {
      return function () {
        var e = c.dischargePartialEffect(g.monoidArray)(a)();
        return {
          state: {
            view: e.value1
          },
          render: k.map(d.functorEffect)(n)(m.getState(b)),
          componentDidMount: t(b)(new f.Right(e.value0))
        };
      };
    });
  };

  a["Concur.React"].renderComponent = function (a) {
    return m.createLeafElement()(v(a))({});
  };
})(PS);

(function (a) {
  require("react");

  a.unsafeMkProps = function (a) {
    return function (c) {
      var f = {};
      f[a] = c;
      return f;
    };
  };

  a.unsafeUnfoldProps = function (a) {
    return function (c) {
      var f = {},
          g = {};
      g[a] = f;

      for (var b in c) {
        c.hasOwnProperty(b) && (f[b] = c[b]);
      }

      return g;
    };
  };

  a.unsafeFromPropsArray = function (a) {
    for (var c = {}, k = 0, g = a.length; k < g; k++) {
      var b = a[k],
          e;

      for (e in b) {
        b.hasOwnProperty(e) && (c[e] = b[e]);
      }
    }

    return c;
  };
})(PS["React.DOM.Props"] = PS["React.DOM.Props"] || {});

(function (a) {
  a.mkEffectFn1 = function (a) {
    return function (c) {
      return a(c)();
    };
  };
})(PS["Effect.Uncurried"] = PS["Effect.Uncurried"] || {});

(function (a) {
  a["Effect.Uncurried"] = a["Effect.Uncurried"] || {};
  a["Effect.Uncurried"].mkEffectFn1 = a["Effect.Uncurried"].mkEffectFn1;
})(PS);

(function (a) {
  a["React.DOM.Props"] = a["React.DOM.Props"] || {};
  var c = a["React.DOM.Props"],
      f = a["React.DOM.Props"],
      k = a["Effect.Uncurried"];
  a = f.unsafeMkProps("value");
  var g = f.unsafeMkProps("target"),
      b = f.unsafeUnfoldProps("style"),
      e = f.unsafeMkProps("href"),
      d = f.unsafeMkProps("disabled"),
      l = f.unsafeMkProps("defaultValue"),
      h = f.unsafeMkProps("className"),
      m = f.unsafeMkProps("checked"),
      v = f.unsafeMkProps("type");
  c.style = b;
  c.checked = m;
  c.className = h;
  c.defaultValue = l;
  c.disabled = d;
  c.href = e;
  c.target = g;
  c._type = v;
  c.value = a;

  c.onChange = function (a) {
    return f.unsafeMkProps("onChange")(k.mkEffectFn1(a));
  };

  c.onClick = function (a) {
    return f.unsafeMkProps("onClick")(k.mkEffectFn1(a));
  };

  c.unsafeFromPropsArray = f.unsafeFromPropsArray;
})(PS);

(function (a) {
  a["React.DOM"] = a["React.DOM"] || {};
  var c = a["React.DOM"],
      f = a.React,
      k = a["React.DOM.Props"];
  a = a["Unsafe.Coerce"].unsafeCoerce;

  var g = function g(a) {
    return function (b) {
      return function (c) {
        if (a) {
          if (a) var d = f.createElementTagNameDynamic;else throw Error("Failed pattern match at React.DOM (line 15, column 5 - line 17, column 55): " + [a.constructor.name]);
        } else d = f.createElementTagName;
        return d(b)(k.unsafeFromPropsArray(c));
      };
    };
  },
      b = g(!1)("option"),
      e = g(!1)("select"),
      d = g(!1)("span"),
      l = g(!1)("ul"),
      h = g(!1)("li"),
      m = g(!1)("div"),
      v = g(!1)("cite"),
      t = g(!1)("button"),
      n = g(!1)("a");

  c.text = a;
  c.a = n;

  c.br = function (a) {
    return g(!1)("br")(a)([]);
  };

  c.button = t;
  c.cite = v;
  c.div = m;

  c.input = function (a) {
    return g(!1)("input")(a)([]);
  };

  c.li = h;
  c.option = b;
  c.select = e;
  c.span = d;
  c.ul = l;
})(PS);

(function (a) {
  a["Concur.React.DOM"] = a["Concur.React.DOM"] || {};

  var c = a["Concur.React.DOM"],
      f = a["Concur.Core.DOM"],
      k = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Types"],
      b = a["Data.Functor"],
      e = a["React.DOM"],
      d = function d(a) {
    return function (b) {
      return function (c) {
        return [a(b)(c)];
      };
    };
  },
      l = function l(a) {
    return function (c) {
      return f.elLeaf(a)(b.functorArray)(function (a) {
        return [c(a)];
      });
    };
  },
      h = function h(a) {
    return function (c) {
      return function (e) {
        return f["el'"](a)(c)(b.functorArray)(d(e));
      };
    };
  },
      m = function m(a) {
    return function (b) {
      return h(b)(a)(e.li);
    };
  },
      v = function v(a) {
    return function (b) {
      return h(b)(a)(e.span);
    };
  },
      t = function t(a) {
    return function (c) {
      return f.el(a)(b.functorArray)(d(c));
    };
  },
      n = function n(a) {
    return function (b) {
      return h(b)(a)(e.div);
    };
  },
      u = function u(a) {
    return function (b) {
      return h(b)(a)(e.cite);
    };
  };

  c.text = function (a) {
    return function (b) {
      return k.liftWidget(a)(g.display([e.text(b)]));
    };
  };

  c.a = function (a) {
    return function (b) {
      return h(b)(a)(e.a);
    };
  };

  c["br'"] = function (a) {
    return l(a)(e.br)([]);
  };

  c.button_ = function (a) {
    return t(a)(e.button);
  };

  c.button = function (a) {
    return function (b) {
      return h(b)(a)(e.button);
    };
  };

  c["cite'"] = function (a) {
    return function (b) {
      return u(a)(b)([]);
    };
  };

  c.div_ = function (a) {
    return t(a)(e.div);
  };

  c.div = n;

  c["div'"] = function (a) {
    return function (b) {
      return n(a)(b)([]);
    };
  };

  c.input = function (a) {
    return l(a)(e.input);
  };

  c.li_ = function (a) {
    return t(a)(e.li);
  };

  c.li = m;

  c["li'"] = function (a) {
    return function (b) {
      return m(a)(b)([]);
    };
  };

  c.option = function (a) {
    return function (b) {
      return h(b)(a)(e.option);
    };
  };

  c.select = function (a) {
    return function (b) {
      return h(b)(a)(e.select);
    };
  };

  c.span_ = function (a) {
    return t(a)(e.span);
  };

  c.span = v;

  c["span'"] = function (a) {
    return function (b) {
      return v(a)(b)([]);
    };
  };

  c.ul = function (a) {
    return function (b) {
      return h(b)(a)(e.ul);
    };
  };
})(PS);

(function (a) {
  a["Concur.React.Props"] = a["Concur.React.Props"] || {};
  var c = a["Concur.React.Props"],
      f = a["Concur.Core.Props"],
      k = a["Data.Array"],
      g = a["Data.Foldable"],
      b = a["Data.Maybe"],
      e = a["Data.Monoid"],
      d = a["React.DOM.Props"];
  a = new f.Handler(d.onClick);

  var l = new f.Handler(d.onChange),
      h = function h(a) {
    return f.PrimProp.create(d.className(a));
  },
      m = function () {
    var a = g.intercalate(g.foldableArray)(e.monoidString)(" "),
        c = k.concatMap(b.maybe([])(function (a) {
      return [a];
    }));
    return function (b) {
      return h(a(c(b)));
    };
  }();

  c.classList = m;

  c.unsafeTargetValue = function (a) {
    return a.target.value;
  };

  c.style = function (a) {
    return f.PrimProp.create(d.style(a));
  };

  c.checked = function (a) {
    return f.PrimProp.create(d.checked(a));
  };

  c.className = h;

  c.defaultValue = function (a) {
    return f.PrimProp.create(d.defaultValue(a));
  };

  c.disabled = function (a) {
    return f.PrimProp.create(d.disabled(a));
  };

  c.href = function (a) {
    return f.PrimProp.create(d.href(a));
  };

  c._type = function (a) {
    return f.PrimProp.create(d._type(a));
  };

  c.value = function (a) {
    return f.PrimProp.create(d.value(a));
  };

  c.onChange = l;
  c.onClick = a;
})(PS);

(function (a) {
  var c = require("react-dom");

  require("react-dom/server");

  a.renderImpl = function (a, k) {
    return c.render(a, k);
  };
})(PS.ReactDOM = PS.ReactDOM || {});

(function (a) {
  a["null"] = null;

  a.nullable = function (a, f, k) {
    return null == a ? f : k(a);
  };

  a.notNull = function (a) {
    return a;
  };
})(PS["Data.Nullable"] = PS["Data.Nullable"] || {});

(function (a) {
  a["Data.Nullable"] = a["Data.Nullable"] || {};
  var c = a["Data.Nullable"],
      f = a["Data.Nullable"],
      k = a["Data.Maybe"];
  a = k.maybe(f["null"])(f.notNull);

  c.toMaybe = function (a) {
    return f.nullable(a, k.Nothing.value, k.Just.create);
  };

  c.toNullable = a;
})(PS);

(function (a) {
  a.ReactDOM = a.ReactDOM || {};
  var c = a.ReactDOM,
      f = a["Data.Functor"],
      k = a["Data.Nullable"],
      g = a.Effect;

  a.ReactDOM.render = function (a) {
    return function (b) {
      return f.map(g.functorEffect)(k.toMaybe)(function () {
        return c.renderImpl(a, b);
      });
    };
  };
})(PS);

(function (a) {
  a._getElementById = function (a) {
    return function (c) {
      return function () {
        return c.getElementById(a);
      };
    };
  };
})(PS["Web.DOM.NonElementParentNode"] = PS["Web.DOM.NonElementParentNode"] || {});

(function (a) {
  a["Web.DOM.NonElementParentNode"] = a["Web.DOM.NonElementParentNode"] || {};
  var c = a["Web.DOM.NonElementParentNode"],
      f = a["Data.Functor"],
      k = a["Data.Nullable"],
      g = a.Effect;

  a["Web.DOM.NonElementParentNode"].getElementById = function (a) {
    var b = f.map(g.functorEffect)(k.toMaybe),
        d = c._getElementById(a);

    return function (a) {
      return b(d(a));
    };
  };
})(PS);

(function (a) {
  a.window = function () {
    return window;
  };
})(PS["Web.HTML"] = PS["Web.HTML"] || {});

(function (a) {
  a["Web.HTML"] = a["Web.HTML"] || {};
  a["Web.HTML"].window = a["Web.HTML"].window;
})(PS);

(function (a) {
  a["Web.HTML.HTMLDocument"] = a["Web.HTML.HTMLDocument"] || {};
  var c = a["Web.HTML.HTMLDocument"];
  a = a["Unsafe.Coerce"];
  var f = a.unsafeCoerce;
  c.toDocument = a.unsafeCoerce;
  c.toNonElementParentNode = f;
})(PS);

(function (a) {
  a.document = function (a) {
    return function () {
      return a.document;
    };
  };
})(PS["Web.HTML.Window"] = PS["Web.HTML.Window"] || {});

(function (a) {
  a["Web.HTML.Window"] = a["Web.HTML.Window"] || {};
  a["Web.HTML.Window"].document = a["Web.HTML.Window"].document;
})(PS);

(function (a) {
  a["Concur.React.Run"] = a["Concur.React.Run"] || {};
  var c = a["Concur.React"],
      f = a["Data.Functor"],
      k = a["Data.Maybe"],
      g = a["Data.Unit"],
      b = a.Effect,
      e = a.ReactDOM,
      d = a["Web.DOM.NonElementParentNode"],
      l = a["Web.HTML"],
      h = a["Web.HTML.HTMLDocument"],
      m = a["Web.HTML.Window"];

  a["Concur.React.Run"].runWidgetInDom = function (a) {
    return function (t) {
      return function () {
        var n = l.window();
        n = m.document(n)();
        n = h.toNonElementParentNode(n);
        n = d.getElementById(a)(n)();
        if (n instanceof k.Nothing) return g.unit;
        if (n instanceof k.Just) return f["void"](b.functorEffect)(e.render(c.renderComponent(t))(n.value0))();
        throw Error("Failed pattern match at Concur.React.Run (line 23, column 3 - line 25, column 65): " + [n.constructor.name]);
      };
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.State.Class"] = a["Control.Monad.State.Class"] || {};
  var c = a["Control.Monad.State.Class"],
      f = a["Data.Tuple"],
      k = a["Data.Unit"];

  c.state = function (a) {
    return a.state;
  };

  c.MonadState = function (a, b) {
    this.Monad0 = a;
    this.state = b;
  };

  c.get = function (a) {
    return (0, a.state)(function (a) {
      return new f.Tuple(a, a);
    });
  };

  c.gets = function (a) {
    return function (b) {
      return (0, a.state)(function (a) {
        return new f.Tuple(b(a), a);
      });
    };
  };

  c.put = function (a) {
    return function (b) {
      return (0, a.state)(function (a) {
        return new f.Tuple(k.unit, b);
      });
    };
  };

  c.modify_ = function (a) {
    return function (b) {
      return (0, a.state)(function (a) {
        return new f.Tuple(k.unit, b(a));
      });
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.Trans.Class"] = a["Control.Monad.Trans.Class"] || {};
  a = a["Control.Monad.Trans.Class"];

  a.lift = function (a) {
    return a.lift;
  };

  a.MonadTrans = function (a) {
    this.lift = a;
  };
})(PS);

(function (a) {
  a["Control.Monad.Except.Trans"] = a["Control.Monad.Except.Trans"] || {};

  var c = a["Control.Monad.Except.Trans"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Control.Monad.Error.Class"],
      d = a["Control.Monad.State.Class"],
      l = a["Control.Monad.Trans.Class"],
      h = a["Data.Either"],
      m = a["Data.Functor"],
      v = new l.MonadTrans(function (a) {
    return function (b) {
      return g.bind(a.Bind1())(b)(function (b) {
        return f.pure(a.Applicative0())(new h.Right(b));
      });
    };
  }),
      t = function t(a) {
    return function (b) {
      return a(b);
    };
  },
      n = function n(a) {
    return new m.Functor(function (b) {
      return t(m.map(a)(m.map(h.functorEither)(b)));
    });
  },
      u = function u(a) {
    return new b.Monad(function () {
      return A(a);
    }, function () {
      return x(a);
    });
  },
      x = function x(a) {
    return new g.Bind(function () {
      return w(a);
    }, function (b) {
      return function (c) {
        return g.bind(a.Bind1())(b)(h.either(function () {
          var b = f.pure(a.Applicative0());
          return function (a) {
            return b(h.Left.create(a));
          };
        }())(function (a) {
          return c(a);
        }));
      };
    });
  },
      w = function w(a) {
    return new k.Apply(function () {
      return n(a.Bind1().Apply0().Functor0());
    }, b.ap(u(a)));
  },
      A = function A(a) {
    return new f.Applicative(function () {
      return w(a);
    }, function () {
      var b = f.pure(a.Applicative0());
      return function (a) {
        return b(h.Right.create(a));
      };
    }());
  };

  c.ExceptT = function (a) {
    return a;
  };

  c.runExceptT = function (a) {
    return a;
  };

  c.functorExceptT = n;
  c.applyExceptT = w;
  c.applicativeExceptT = A;
  c.bindExceptT = x;

  c.monadThrowExceptT = function (a) {
    return new e.MonadThrow(function () {
      return u(a);
    }, function () {
      var b = f.pure(a.Applicative0());
      return function (a) {
        return b(h.Left.create(a));
      };
    }());
  };

  c.monadStateExceptT = function (a) {
    return new d.MonadState(function () {
      return u(a.Monad0());
    }, function (b) {
      return l.lift(v)(a.Monad0())(d.state(a)(b));
    });
  };
})(PS);

(function (a) {
  a.map_ = function (a) {
    return function (c) {
      return function () {
        return a(c());
      };
    };
  };

  a.pure_ = function (a) {
    return function () {
      return a;
    };
  };

  a.bind_ = function (a) {
    return function (c) {
      return function () {
        return c(a())();
      };
    };
  };
})(PS["Control.Monad.ST.Internal"] = PS["Control.Monad.ST.Internal"] || {});

(function (a) {
  a["Control.Monad.ST.Internal"] = a["Control.Monad.ST.Internal"] || {};
  var c = a["Control.Monad.ST.Internal"],
      f = a["Control.Monad.ST.Internal"],
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Control.Monad"],
      d = new a["Data.Functor"].Functor(f.map_);
  a = new e.Monad(function () {
    return m;
  }, function () {
    return l;
  });
  var l = new b.Bind(function () {
    return h;
  }, f.bind_),
      h = new g.Apply(function () {
    return d;
  }, e.ap(a)),
      m = new k.Applicative(function () {
    return h;
  }, f.pure_);
  c.applicativeST = m;
})(PS);

(function (a) {
  a["Control.Monad.State"] = a["Control.Monad.State"] || {};

  a["Control.Monad.State"].execState = function (a) {
    return function (c) {
      return a(c).value1;
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.State.Trans"] = a["Control.Monad.State.Trans"] || {};
  var c = a["Control.Monad.State.Trans"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Control.Monad.State.Class"],
      d = a["Data.Functor"],
      l = a["Data.Tuple"],
      h = a["Data.Unit"];
  a = new a["Control.Lazy"].Lazy(function (a) {
    return function (b) {
      return a(h.unit)(b);
    };
  });

  var m = function m(a) {
    return new d.Functor(function (b) {
      return function (c) {
        return function (e) {
          return d.map(a)(function (a) {
            return new l.Tuple(b(a.value0), a.value1);
          })(c(e));
        };
      };
    });
  },
      v = function v(a) {
    return new b.Monad(function () {
      return u(a);
    }, function () {
      return t(a);
    });
  },
      t = function t(a) {
    return new g.Bind(function () {
      return n(a);
    }, function (b) {
      return function (c) {
        return function (d) {
          return g.bind(a.Bind1())(b(d))(function (a) {
            return c(a.value0)(a.value1);
          });
        };
      };
    });
  },
      n = function n(a) {
    return new k.Apply(function () {
      return m(a.Bind1().Apply0().Functor0());
    }, b.ap(v(a)));
  },
      u = function u(a) {
    return new f.Applicative(function () {
      return n(a);
    }, function (b) {
      return function (c) {
        return f.pure(a.Applicative0())(new l.Tuple(b, c));
      };
    });
  };

  c.StateT = function (a) {
    return a;
  };

  c.runStateT = function (a) {
    return a;
  };

  c.evalStateT = function (a) {
    return function (b) {
      return function (c) {
        return d.map(a)(l.fst)(b(c));
      };
    };
  };

  c.functorStateT = m;
  c.bindStateT = t;
  c.monadStateT = v;
  c.lazyStateT = a;

  c.monadStateStateT = function (a) {
    return new e.MonadState(function () {
      return v(a);
    }, function (b) {
      return function () {
        var c = f.pure(a.Applicative0());
        return function (a) {
          return c(b(a));
        };
      }();
    });
  };
})(PS);

(function (a) {
  a.toCharCode = function (a) {
    return a.charCodeAt(0);
  };

  a.fromCharCode = function (a) {
    return String.fromCharCode(a);
  };
})(PS["Data.Enum"] = PS["Data.Enum"] || {});

(function (a) {
  a["Data.Enum"] = a["Data.Enum"] || {};
  var c = a["Data.Enum"],
      f = a["Data.Enum"],
      k = a["Control.Apply"],
      g = a["Data.Bounded"],
      b = a["Data.Functor"],
      e = a["Data.Maybe"],
      d = a["Data.Newtype"],
      l = a["Data.Ord"],
      h = a["Data.Tuple"],
      m = a["Data.Unfoldable1"];

  a = function a(_a12) {
    return _a12;
  };

  var v = function v(a) {
    this.Bounded0 = a;
  },
      t = function t(a, b, c) {
    this.Ord0 = a;
    this.pred = b;
    this.succ = c;
  },
      n = function n(a, b, c, d, e) {
    this.Bounded0 = a;
    this.Enum1 = b;
    this.cardinality = c;
    this.fromEnum = d;
    this.toEnum = e;
  },
      u = new v(function () {
    return g.boundedBoolean;
  }),
      x = new d.Newtype(function (a) {
    return a;
  }, a),
      w = function w(a) {
    return new t(function () {
      return e.ordMaybe(a.Enum1().Ord0());
    }, function (b) {
      if (b instanceof e.Nothing) return e.Nothing.value;
      if (b instanceof e.Just) return new e.Just((0, a.Enum1().pred)(b.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [b.constructor.name]);
    }, function (c) {
      if (c instanceof e.Nothing) return new e.Just(new e.Just(g.bottom(a.Bounded0())));
      if (c instanceof e.Just) return b.map(e.functorMaybe)(e.Just.create)((0, a.Enum1().succ)(c.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [c.constructor.name]);
    });
  },
      A = new t(function () {
    return l.ordBoolean;
  }, function (a) {
    return a ? new e.Just(!1) : e.Nothing.value;
  }, function (a) {
    return a ? e.Nothing.value : new e.Just(!0);
  }),
      r = function r(a) {
    return function (b) {
      return function (c) {
        return a(b(c) + 1 | 0);
      };
    };
  },
      z = function z(a) {
    return function (b) {
      return function (c) {
        return a(b(c) - 1 | 0);
      };
    };
  },
      q = function q(a) {
    return a >= g.bottom(g.boundedInt) && a <= g.top(g.boundedInt) ? new e.Just(f.fromCharCode(a)) : e.Nothing.value;
  },
      E = new t(function () {
    return l.ordChar;
  }, z(q)(f.toCharCode), r(q)(f.toCharCode));

  q = new n(function () {
    return g.boundedChar;
  }, function () {
    return E;
  }, f.toCharCode(g.top(g.boundedChar)) - f.toCharCode(g.bottom(g.boundedChar)) | 0, f.toCharCode, q);
  var K = new n(function () {
    return g.boundedBoolean;
  }, function () {
    return A;
  }, 2, function (a) {
    if (!a) return 0;
    if (a) return 1;
    throw Error("Failed pattern match at Data.Enum (line 120, column 1 - line 126, column 20): " + [a.constructor.name]);
  }, function (a) {
    return 0 === a ? new e.Just(!1) : 1 === a ? new e.Just(!0) : e.Nothing.value;
  });
  c.Enum = t;
  c.BoundedEnum = n;

  c.toEnum = function (a) {
    return a.toEnum;
  };

  c.fromEnum = function (a) {
    return a.fromEnum;
  };

  c.toEnumWithDefaults = function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          var f = (0, a.toEnum)(d);
          if (f instanceof e.Just) return f.value0;
          if (f instanceof e.Nothing) return d < (0, a.fromEnum)(g.bottom(a.Bounded0())) ? b : c;
          throw Error("Failed pattern match at Data.Enum (line 160, column 33 - line 162, column 62): " + [f.constructor.name]);
        };
      };
    };
  };

  c.Cardinality = a;

  c.upFromIncluding = function (a) {
    return function (b) {
      return m.unfoldr1(b)(k.apply(k.applyFn)(h.Tuple.create)(a.succ));
    };
  };

  c.defaultSucc = r;
  c.defaultPred = z;
  c.SmallBounded = v;
  c.boundedEnumBoolean = K;
  c.boundedEnumChar = q;
  c.newtypeCardinality = x;

  c.boundedEnumMaybe = function (a) {
    return function (a) {
      return new n(function () {
        return e.boundedMaybe(a.Bounded0());
      }, function () {
        return w(a);
      }, d.unwrap(x)(a.cardinality) + 1 | 0, function (b) {
        if (b instanceof e.Nothing) return 0;
        if (b instanceof e.Just) return (0, a.fromEnum)(b.value0) + 1 | 0;
        throw Error("Failed pattern match at Data.Enum (line 334, column 1 - line 340, column 39): " + [b.constructor.name]);
      }, function (c) {
        return 0 === c ? e.Nothing.value : b.map(e.functorMaybe)(e.Just.create)((0, a.toEnum)(c - 1 | 0));
      });
    };
  };

  c.smallBoundedBoolean = u;
})(PS);

(function (a) {
  a["Data.Char"] = a["Data.Char"] || {};
  var c = a["Data.Char"];
  a = a["Data.Enum"];
  a = a.toEnum(a.boundedEnumChar);
  c.fromCharCode = a;
})(PS);

(function (a) {
  a["Data.CommutativeRing"] = a["Data.CommutativeRing"] || {};
  var c = a["Data.CommutativeRing"],
      f = a["Data.Ring"];
  a = new function (a) {
    this.Ring0 = a;
  }(function () {
    return f.ringInt;
  });
  c.commutativeRingInt = a;
})(PS);

(function (a) {
  a["Data.Const"] = a["Data.Const"] || {};

  var c = a["Data.Const"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Data.Functor"],
      b = a["Data.Monoid"],
      e = a["Data.Semigroup"],
      d = function d(a) {
    return a;
  };

  a = new a["Data.Newtype"].Newtype(function (a) {
    return a;
  }, d);

  var l = new g.Functor(function (a) {
    return function (a) {
      return a;
    };
  }),
      h = function h(a) {
    return new k.Apply(function () {
      return l;
    }, function (b) {
      return function (c) {
        return e.append(a)(b)(c);
      };
    });
  };

  c.Const = d;
  c.newtypeConst = a;

  c.applicativeConst = function (a) {
    return new f.Applicative(function () {
      return h(a.Semigroup0());
    }, function (c) {
      return b.mempty(a);
    });
  };
})(PS);

(function (a) {
  var c = function c(a, _c2, g) {
    _c2 = new Date(Date.UTC(a, _c2, g));
    0 <= a && 100 > a && _c2.setUTCFullYear(a);
    return _c2;
  };

  a.canonicalDateImpl = function (a, k, g, b) {
    k = c(k, g - 1, b);
    return a(k.getUTCFullYear())(k.getUTCMonth() + 1)(k.getUTCDate());
  };

  a.calcWeekday = function (a, k, g) {
    return c(a, k - 1, g).getUTCDay();
  };
})(PS["Data.Date"] = PS["Data.Date"] || {});

(function (a) {
  a["Data.Date.Component"] = a["Data.Date.Component"] || {};

  var c = a["Data.Date.Component"],
      f = a["Data.Boolean"],
      k = a["Data.Bounded"],
      g = a["Data.Enum"],
      b = a["Data.Eq"],
      e = a["Data.Maybe"],
      d = a["Data.Ord"],
      l = a["Data.Ordering"],
      h = a["Data.Show"],
      m = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      v = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      t = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      n = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      u = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      x = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      w = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      A = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      r = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      z = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      q = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      E = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      K = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      p = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      G = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      F = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      I = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      J = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      C = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  a = new h.Show(function (a) {
    if (a instanceof m) return "Monday";
    if (a instanceof v) return "Tuesday";
    if (a instanceof t) return "Wednesday";
    if (a instanceof n) return "Thursday";
    if (a instanceof u) return "Friday";
    if (a instanceof x) return "Saturday";
    if (a instanceof w) return "Sunday";
    throw Error("Failed pattern match at Data.Date.Component (line 184, column 1 - line 191, column 25): " + [a.constructor.name]);
  });
  h = new h.Show(function (a) {
    if (a instanceof A) return "January";
    if (a instanceof r) return "February";
    if (a instanceof z) return "March";
    if (a instanceof q) return "April";
    if (a instanceof E) return "May";
    if (a instanceof K) return "June";
    if (a instanceof p) return "July";
    if (a instanceof G) return "August";
    if (a instanceof F) return "September";
    if (a instanceof I) return "October";
    if (a instanceof J) return "November";
    if (a instanceof C) return "December";
    throw Error("Failed pattern match at Data.Date.Component (line 101, column 1 - line 113, column 29): " + [a.constructor.name]);
  });
  var H = d.ordInt,
      D = d.ordInt,
      B = new b.Eq(function (a) {
    return function (b) {
      return a instanceof m && b instanceof m || a instanceof v && b instanceof v || a instanceof t && b instanceof t || a instanceof n && b instanceof n || a instanceof u && b instanceof u || a instanceof x && b instanceof x || a instanceof w && b instanceof w ? !0 : !1;
    };
  }),
      N = new d.Ord(function () {
    return B;
  }, function (a) {
    return function (b) {
      if (a instanceof m && b instanceof m) return l.EQ.value;
      if (a instanceof m) return l.LT.value;
      if (b instanceof m) return l.GT.value;
      if (a instanceof v && b instanceof v) return l.EQ.value;
      if (a instanceof v) return l.LT.value;
      if (b instanceof v) return l.GT.value;
      if (a instanceof t && b instanceof t) return l.EQ.value;
      if (a instanceof t) return l.LT.value;
      if (b instanceof t) return l.GT.value;
      if (a instanceof n && b instanceof n) return l.EQ.value;
      if (a instanceof n) return l.LT.value;
      if (b instanceof n) return l.GT.value;
      if (a instanceof u && b instanceof u) return l.EQ.value;
      if (a instanceof u) return l.LT.value;
      if (b instanceof u) return l.GT.value;
      if (a instanceof x && b instanceof x) return l.EQ.value;
      if (a instanceof x) return l.LT.value;
      if (b instanceof x) return l.GT.value;
      if (a instanceof w && b instanceof w) return l.EQ.value;
      throw Error("Failed pattern match at Data.Date.Component (line 154, column 1 - line 154, column 42): " + [a.constructor.name, b.constructor.name]);
    };
  }),
      Q = new b.Eq(function (a) {
    return function (b) {
      return a instanceof A && b instanceof A || a instanceof r && b instanceof r || a instanceof z && b instanceof z || a instanceof q && b instanceof q || a instanceof E && b instanceof E || a instanceof K && b instanceof K || a instanceof p && b instanceof p || a instanceof G && b instanceof G || a instanceof F && b instanceof F || a instanceof I && b instanceof I || a instanceof J && b instanceof J || a instanceof C && b instanceof C ? !0 : !1;
    };
  }),
      P = new d.Ord(function () {
    return Q;
  }, function (a) {
    return function (b) {
      if (a instanceof A && b instanceof A) return l.EQ.value;
      if (a instanceof A) return l.LT.value;
      if (b instanceof A) return l.GT.value;
      if (a instanceof r && b instanceof r) return l.EQ.value;
      if (a instanceof r) return l.LT.value;
      if (b instanceof r) return l.GT.value;
      if (a instanceof z && b instanceof z) return l.EQ.value;
      if (a instanceof z) return l.LT.value;
      if (b instanceof z) return l.GT.value;
      if (a instanceof q && b instanceof q) return l.EQ.value;
      if (a instanceof q) return l.LT.value;
      if (b instanceof q) return l.GT.value;
      if (a instanceof E && b instanceof E) return l.EQ.value;
      if (a instanceof E) return l.LT.value;
      if (b instanceof E) return l.GT.value;
      if (a instanceof K && b instanceof K) return l.EQ.value;
      if (a instanceof K) return l.LT.value;
      if (b instanceof K) return l.GT.value;
      if (a instanceof p && b instanceof p) return l.EQ.value;
      if (a instanceof p) return l.LT.value;
      if (b instanceof p) return l.GT.value;
      if (a instanceof G && b instanceof G) return l.EQ.value;
      if (a instanceof G) return l.LT.value;
      if (b instanceof G) return l.GT.value;
      if (a instanceof F && b instanceof F) return l.EQ.value;
      if (a instanceof F) return l.LT.value;
      if (b instanceof F) return l.GT.value;
      if (a instanceof I && b instanceof I) return l.EQ.value;
      if (a instanceof I) return l.LT.value;
      if (b instanceof I) return l.GT.value;
      if (a instanceof J && b instanceof J) return l.EQ.value;
      if (a instanceof J) return l.LT.value;
      if (b instanceof J) return l.GT.value;
      if (a instanceof C && b instanceof C) return l.EQ.value;
      throw Error("Failed pattern match at Data.Date.Component (line 61, column 1 - line 61, column 38): " + [a.constructor.name, b.constructor.name]);
    };
  }),
      O = new k.Bounded(function () {
    return H;
  }, -271820, 275759),
      M = new k.Bounded(function () {
    return N;
  }, m.value, w.value),
      T = new k.Bounded(function () {
    return P;
  }, A.value, C.value),
      S = new g.BoundedEnum(function () {
    return O;
  }, function () {
    return y;
  }, 547580, function (a) {
    return a;
  }, function (a) {
    if (-271820 <= a && 275759 >= a) return new e.Just(a);
    if (f.otherwise) return e.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 35, column 1 - line 40, column 24): " + [a.constructor.name]);
  }),
      y = new g.Enum(function () {
    return H;
  }, function () {
    var a = g.toEnum(S),
        b = g.fromEnum(S);
    return function (c) {
      return a(b(c) - 1 | 0);
    };
  }(), function () {
    var a = g.toEnum(S),
        b = g.fromEnum(S);
    return function (c) {
      return a(b(c) + 1 | 0);
    };
  }()),
      L = new g.BoundedEnum(function () {
    return M;
  }, function () {
    return V;
  }, 7, function (a) {
    if (a instanceof m) return 1;
    if (a instanceof v) return 2;
    if (a instanceof t) return 3;
    if (a instanceof n) return 4;
    if (a instanceof u) return 5;
    if (a instanceof x) return 6;
    if (a instanceof w) return 7;
    throw Error("Failed pattern match at Data.Date.Component (line 175, column 14 - line 182, column 16): " + [a.constructor.name]);
  }, function (a) {
    return 1 === a ? new e.Just(m.value) : 2 === a ? new e.Just(v.value) : 3 === a ? new e.Just(t.value) : 4 === a ? new e.Just(n.value) : 5 === a ? new e.Just(u.value) : 6 === a ? new e.Just(x.value) : 7 === a ? new e.Just(w.value) : e.Nothing.value;
  }),
      V = new g.Enum(function () {
    return N;
  }, function () {
    var a = g.toEnum(L),
        b = g.fromEnum(L);
    return function (c) {
      return a(b(c) - 1 | 0);
    };
  }(), function () {
    var a = g.toEnum(L),
        b = g.fromEnum(L);
    return function (c) {
      return a(b(c) + 1 | 0);
    };
  }()),
      R = new g.BoundedEnum(function () {
    return T;
  }, function () {
    return X;
  }, 12, function (a) {
    if (a instanceof A) return 1;
    if (a instanceof r) return 2;
    if (a instanceof z) return 3;
    if (a instanceof q) return 4;
    if (a instanceof E) return 5;
    if (a instanceof K) return 6;
    if (a instanceof p) return 7;
    if (a instanceof G) return 8;
    if (a instanceof F) return 9;
    if (a instanceof I) return 10;
    if (a instanceof J) return 11;
    if (a instanceof C) return 12;
    throw Error("Failed pattern match at Data.Date.Component (line 87, column 14 - line 99, column 19): " + [a.constructor.name]);
  }, function (a) {
    return 1 === a ? new e.Just(A.value) : 2 === a ? new e.Just(r.value) : 3 === a ? new e.Just(z.value) : 4 === a ? new e.Just(q.value) : 5 === a ? new e.Just(E.value) : 6 === a ? new e.Just(K.value) : 7 === a ? new e.Just(p.value) : 8 === a ? new e.Just(G.value) : 9 === a ? new e.Just(F.value) : 10 === a ? new e.Just(I.value) : 11 === a ? new e.Just(J.value) : 12 === a ? new e.Just(C.value) : e.Nothing.value;
  }),
      X = new g.Enum(function () {
    return P;
  }, function () {
    var a = g.toEnum(R),
        b = g.fromEnum(R);
    return function (c) {
      return a(b(c) - 1 | 0);
    };
  }(), function () {
    var a = g.toEnum(R),
        b = g.fromEnum(R);
    return function (c) {
      return a(b(c) + 1 | 0);
    };
  }()),
      W = new k.Bounded(function () {
    return D;
  }, 1, 31),
      Z = new g.BoundedEnum(function () {
    return W;
  }, function () {
    return da;
  }, 31, function (a) {
    return a;
  }, function (a) {
    if (1 <= a && 31 >= a) return new e.Just(a);
    if (f.otherwise) return e.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 133, column 1 - line 138, column 23): " + [a.constructor.name]);
  }),
      da = new g.Enum(function () {
    return D;
  }, function () {
    var a = g.toEnum(Z),
        b = g.fromEnum(Z);
    return function (c) {
      return a(b(c) - 1 | 0);
    };
  }(), function () {
    var a = g.toEnum(Z),
        b = g.fromEnum(Z);
    return function (c) {
      return a(b(c) + 1 | 0);
    };
  }());
  c.January = A;
  c.February = r;
  c.March = z;
  c.April = q;
  c.May = E;
  c.June = K;
  c.July = p;
  c.August = G;
  c.September = F;
  c.October = I;
  c.November = J;
  c.December = C;
  c.boundedYear = O;
  c.boundedEnumYear = S;
  c.boundedMonth = T;
  c.boundedEnumMonth = R;
  c.showMonth = h;
  c.boundedDay = W;
  c.boundedEnumDay = Z;
  c.boundedEnumWeekday = L;
  c.showWeekday = a;
})(PS);

(function (a) {
  a["Data.Date"] = a["Data.Date"] || {};

  var c = a["Data.Date"],
      f = a["Data.Date"],
      k = a["Data.Date.Component"],
      g = a["Data.Enum"],
      b = a["Data.Maybe"],
      e = function () {
    function a(a, b, c) {
      this.value0 = a;
      this.value1 = b;
      this.value2 = c;
    }

    a.create = function (b) {
      return function (c) {
        return function (d) {
          return new a(b, c, d);
        };
      };
    };

    return a;
  }();

  c.canonicalDate = function (a) {
    return function (c) {
      return function (d) {
        return f.canonicalDateImpl(function (a) {
          return function (c) {
            return function (d) {
              return new e(a, b.fromJust()(g.toEnum(k.boundedEnumMonth)(c)), d);
            };
          };
        }, a, g.fromEnum(k.boundedEnumMonth)(c), d);
      };
    };
  };

  c.year = function (a) {
    return a.value0;
  };

  c.month = function (a) {
    return a.value1;
  };

  c.day = function (a) {
    return a.value2;
  };

  c.weekday = function (a) {
    a = f.calcWeekday(a.value0, g.fromEnum(k.boundedEnumMonth)(a.value1), a.value2);
    return 0 === a ? b.fromJust()(g.toEnum(k.boundedEnumWeekday)(7)) : b.fromJust()(g.toEnum(k.boundedEnumWeekday)(a));
  };
})(PS);

(function (a) {
  a["Data.DateTime"] = a["Data.DateTime"] || {};
  a = a["Data.DateTime"];

  var c = function () {
    function a(a, c) {
      this.value0 = a;
      this.value1 = c;
    }

    a.create = function (c) {
      return function (f) {
        return new a(c, f);
      };
    };

    return a;
  }();

  a.DateTime = c;
})(PS);

(function (a) {
  a.fromDateTimeImpl = function (a, f, k, g, b, e, d) {
    f = new Date(Date.UTC(a, f - 1, k, g, b, e, d));
    0 <= a && 100 > a && f.setUTCFullYear(a);
    return f.getTime();
  };
})(PS["Data.DateTime.Instant"] = PS["Data.DateTime.Instant"] || {});

(function (a) {
  a["Data.Time"] = a["Data.Time"] || {};
  a = a["Data.Time"];

  var c = function () {
    function a(a, c, b, e) {
      this.value0 = a;
      this.value1 = c;
      this.value2 = b;
      this.value3 = e;
    }

    a.create = function (c) {
      return function (f) {
        return function (b) {
          return function (e) {
            return new a(c, f, b, e);
          };
        };
      };
    };

    return a;
  }();

  a.Time = c;

  a.hour = function (a) {
    return a.value0;
  };

  a.minute = function (a) {
    return a.value1;
  };

  a.second = function (a) {
    return a.value2;
  };

  a.millisecond = function (a) {
    return a.value3;
  };
})(PS);

(function (a) {
  a["Data.DateTime.Instant"] = a["Data.DateTime.Instant"] || {};
  var c = a["Data.DateTime.Instant"],
      f = a["Data.DateTime.Instant"],
      k = a["Data.Date"],
      g = a["Data.Date.Component"],
      b = a["Data.Enum"],
      e = a["Data.Time"];

  c.unInstant = function (a) {
    return a;
  };

  c.fromDateTime = function (a) {
    return f.fromDateTimeImpl(k.year(a.value0), b.fromEnum(g.boundedEnumMonth)(k.month(a.value0)), k.day(a.value0), e.hour(a.value1), e.minute(a.value1), e.second(a.value1), e.millisecond(a.value1));
  };
})(PS);

(function (a) {
  a.intDegree = function (a) {
    return Math.min(Math.abs(a), 2147483647);
  };

  a.intDiv = function (a) {
    return function (c) {
      return 0 === c ? 0 : 0 < c ? Math.floor(a / c) : -Math.floor(a / -c);
    };
  };

  a.intMod = function (a) {
    return function (c) {
      if (0 === c) return 0;
      c = Math.abs(c);
      return (a % c + c) % c;
    };
  };
})(PS["Data.EuclideanRing"] = PS["Data.EuclideanRing"] || {});

(function (a) {
  a["Data.EuclideanRing"] = a["Data.EuclideanRing"] || {};
  var c = a["Data.EuclideanRing"],
      f = a["Data.EuclideanRing"],
      k = a["Data.CommutativeRing"];
  a = new function (a, b, c, d) {
    this.CommutativeRing0 = a;
    this.degree = b;
    this.div = c;
    this.mod = d;
  }(function () {
    return k.commutativeRingInt;
  }, f.intDegree, f.intDiv, f.intMod);

  c.div = function (a) {
    return a.div;
  };

  c.mod = function (a) {
    return a.mod;
  };

  c.euclideanRingInt = a;
})(PS);

(function (a) {
  a["Data.Identity"] = a["Data.Identity"] || {};

  var c = a["Data.Identity"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Data.Functor"],
      d = function d(a) {
    return a;
  };

  a = new a["Data.Newtype"].Newtype(function (a) {
    return a;
  }, d);
  var l = new e.Functor(function (a) {
    return function (b) {
      return a(b);
    };
  }),
      h = new k.Apply(function () {
    return l;
  }, function (a) {
    return function (b) {
      return a(b);
    };
  }),
      m = new g.Bind(function () {
    return h;
  }, function (a) {
    return function (b) {
      return b(a);
    };
  }),
      v = new f.Applicative(function () {
    return h;
  }, d);
  f = new b.Monad(function () {
    return v;
  }, function () {
    return m;
  });
  c.newtypeIdentity = a;
  c.functorIdentity = l;
  c.monadIdentity = f;
})(PS);

(function (a) {
  a.split = function (a) {
    return function (c) {
      return c.split(a);
    };
  };

  a.toUpper = function (a) {
    return a.toUpperCase();
  };

  a.trim = function (a) {
    return a.trim();
  };
})(PS["Data.String.Common"] = PS["Data.String.Common"] || {});

(function (a) {
  a["Data.String.Common"] = a["Data.String.Common"] || {};
  var c = a["Data.String.Common"];
  a = a["Data.String.Common"];

  c["null"] = function (a) {
    return "" === a;
  };

  c.split = a.split;
  c.toUpper = a.toUpper;
  c.trim = a.trim;
})(PS);

(function (a) {
  a["Data.String.Pattern"] = a["Data.String.Pattern"] || {};

  var c = a["Data.String.Pattern"],
      f = function f(a) {
    return a;
  };

  a = new a["Data.Newtype"].Newtype(function (a) {
    return a;
  }, f);
  c.Pattern = f;
  c.newtypePattern = a;
})(PS);

(function (a) {
  a["Text.Parsing.Parser.Pos"] = a["Text.Parsing.Parser.Pos"] || {};
  var c = a["Text.Parsing.Parser.Pos"],
      f = a["Data.EuclideanRing"],
      k = a["Data.Foldable"],
      g = a["Data.Newtype"],
      b = a["Data.String.Common"],
      e = a["Data.String.Pattern"];
  c.initialPos = {
    line: 1,
    column: 1
  };

  c.updatePosString = function (a) {
    return function (c) {
      return k.foldl(k.foldableArray)(function (a) {
        return function (b) {
          return "\n" === b || "\r" === b ? {
            line: a.line + 1 | 0,
            column: 1
          } : "\t" === b ? {
            line: a.line,
            column: (a.column + 8 | 0) - f.mod(f.euclideanRingInt)(a.column - 1 | 0)(8) | 0
          } : {
            line: a.line,
            column: a.column + 1 | 0
          };
        };
      })(a)(b.split(g.wrap(e.newtypePattern)(""))(c));
    };
  };
})(PS);

(function (a) {
  a["Text.Parsing.Parser"] = a["Text.Parsing.Parser"] || {};

  var c = a["Text.Parsing.Parser"],
      f = a["Control.Alt"],
      k = a["Control.Alternative"],
      g = a["Control.Applicative"],
      b = a["Control.Bind"],
      e = a["Control.Lazy"],
      d = a["Control.Monad.Error.Class"],
      l = a["Control.Monad.Except.Trans"],
      h = a["Control.Monad.State.Class"],
      m = a["Control.Monad.State.Trans"],
      v = a["Control.Plus"],
      t = a["Data.Either"],
      n = a["Data.Identity"],
      u = a["Data.Newtype"],
      x = a["Data.Tuple"],
      w = a["Text.Parsing.Parser.Pos"],
      A = function () {
    function a(a, b, c) {
      this.value0 = a;
      this.value1 = b;
      this.value2 = c;
    }

    a.create = function (b) {
      return function (c) {
        return function (d) {
          return new a(b, c, d);
        };
      };
    };

    return a;
  }(),
      r = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (b) {
      return function (c) {
        return new a(b, c);
      };
    };

    return a;
  }();

  a = function a(_a13) {
    return _a13;
  };

  var z = new u.Newtype(function (a) {
    return a;
  }, a),
      q = function q(a) {
    return function (b) {
      return function (c) {
        var d = new A(b, w.initialPos, !1);
        return m.evalStateT(a.Bind1().Apply0().Functor0())(l.runExceptT(u.unwrap(z)(c)))(d);
      };
    };
  },
      E = function E(a) {
    return l.monadStateExceptT(m.monadStateStateT(a));
  },
      K = function K(a) {
    return h.gets(E(a))(function (a) {
      return a.value1;
    });
  },
      p = new e.Lazy(function (a) {
    return e.defer(m.lazyStateT)(function () {
      var b = u.unwrap(z);
      return function (c) {
        return l.runExceptT(b(a(c)));
      };
    }());
  }),
      G = function G(a) {
    return l.functorExceptT(m.functorStateT(a));
  },
      F = function F(a) {
    return function (b) {
      return function (c) {
        return d.throwError(l.monadThrowExceptT(m.monadStateT(a)))(new r(b, c));
      };
    };
  },
      I = function I(a) {
    return l.bindExceptT(m.monadStateT(a));
  },
      J = function J(a) {
    return function (c) {
      return b.bindFlipped(I(a))(F(a)(c))(K(a));
    };
  },
      C = function C(a) {
    return l.applicativeExceptT(m.monadStateT(a));
  },
      H = function H(a) {
    return new f.Alt(function () {
      return G(a.Bind1().Apply0().Functor0());
    }, function (c) {
      return function (d) {
        return l.ExceptT(m.StateT(function (e) {
          return b.bind(a.Bind1())(m.runStateT(l.runExceptT(u.unwrap(z)(c)))(new A(e.value0, e.value1, !1)))(function (b) {
            return b.value0 instanceof t.Left && !b.value1.value2 ? m.runStateT(l.runExceptT(u.unwrap(z)(d)))(e) : g.pure(a.Applicative0())(new x.Tuple(b.value0, b.value1));
          });
        }));
      };
    });
  },
      D = function D(a) {
    return new v.Plus(function () {
      return H(a);
    }, J(a)("No alternative"));
  };

  c.ParseError = r;

  c.parseErrorMessage = function (a) {
    return a.value0;
  };

  c.parseErrorPosition = function (a) {
    return a.value1;
  };

  c.ParseState = A;
  c.ParserT = a;

  c.runParser = function (a) {
    var b = u.unwrap(n.newtypeIdentity),
        c = q(n.monadIdentity)(a);
    return function (a) {
      return b(c(a));
    };
  };

  c.fail = J;
  c.newtypeParserT = z;
  c.lazyParserT = p;
  c.functorParserT = G;

  c.applyParserT = function (a) {
    return l.applyExceptT(m.monadStateT(a));
  };

  c.applicativeParserT = C;
  c.bindParserT = I;
  c.monadStateParserT = E;
  c.altParserT = H;
  c.plusParserT = D;

  c.alternativeParserT = function (a) {
    return new k.Alternative(function () {
      return C(a);
    }, function () {
      return D(a);
    });
  };
})(PS);

(function (a) {
  a["Text.Parsing.Parser.Combinators"] = a["Text.Parsing.Parser.Combinators"] || {};
  var c = a["Text.Parsing.Parser.Combinators"],
      f = a["Control.Alt"],
      k = a["Control.Applicative"],
      g = a["Control.Bind"],
      b = a["Control.Monad.Except.Trans"],
      e = a["Control.Monad.State.Trans"],
      d = a["Control.Plus"],
      l = a["Data.Either"],
      h = a["Data.Foldable"],
      m = a["Data.Newtype"],
      v = a["Data.Tuple"],
      t = a["Text.Parsing.Parser"];

  c.withErrorMessage = function (a) {
    return function (b) {
      return function (c) {
        return f.alt(t.altParserT(a))(b)(t.fail(a)("Expected " + c));
      };
    };
  };

  c["try"] = function (a) {
    return function (c) {
      return t.ParserT(b.ExceptT(e.StateT(function (d) {
        return g.bind(a.Bind1())(e.runStateT(b.runExceptT(m.unwrap(t.newtypeParserT)(c)))(d))(function (b) {
          return b.value0 instanceof l.Left ? k.pure(a.Applicative0())(new v.Tuple(b.value0, new t.ParseState(b.value1.value0, b.value1.value1, d.value2))) : k.pure(a.Applicative0())(new v.Tuple(b.value0, b.value1));
        });
      })));
    };
  };

  c.tryRethrow = function (a) {
    return function (c) {
      return t.ParserT(b.ExceptT(e.StateT(function (d) {
        return g.bind(a.Bind1())(e.runStateT(b.runExceptT(m.unwrap(t.newtypeParserT)(c)))(d))(function (b) {
          return b.value0 instanceof l.Left ? k.pure(a.Applicative0())(new v.Tuple(new l.Left(new t.ParseError(b.value0.value0.value0, d.value1)), new t.ParseState(b.value1.value0, b.value1.value1, d.value2))) : k.pure(a.Applicative0())(new v.Tuple(b.value0, b.value1));
        });
      })));
    };
  };

  c.choice = function (a) {
    return function (b) {
      return h.foldl(a)(f.alt(t.altParserT(b)))(d.empty(t.plusParserT(b)));
    };
  };
})(PS);

(function (a) {
  var c = "function" === typeof Array.from;
  $jscomp.initSymbol();
  $jscomp.initSymbol();
  $jscomp.initSymbol();
  $jscomp.initSymbolIterator();
  $jscomp.initSymbol();
  $jscomp.initSymbolIterator();
  var f = "undefined" !== typeof Symbol && null != Symbol && "undefined" !== typeof Symbol.iterator && "function" === typeof String.prototype[Symbol.iterator],
      k = "function" === typeof String.prototype.fromCodePoint,
      g = "function" === typeof String.prototype.codePointAt;

  a._unsafeCodePointAt0 = function (a) {
    return g ? function (a) {
      return a.codePointAt(0);
    } : a;
  };

  a._codePointAt = function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return function (g) {
              var h = g.length;
              if (0 > e || e >= h) return c;
              if (f) for ($jscomp.initSymbol(), $jscomp.initSymbolIterator(), g = g[Symbol.iterator](), h = e;; --h) {
                var k = g.next();
                if (k.done) return c;
                if (0 === h) return b(d(k.value));
              }
              return a(e)(g);
            };
          };
        };
      };
    };
  };

  a._singleton = function (a) {
    return k ? String.fromCodePoint : a;
  };

  a._take = function (a) {
    return function (b) {
      return f ? function (a) {
        var c = "";
        $jscomp.initSymbol();
        $jscomp.initSymbolIterator();
        a = a[Symbol.iterator]();

        for (var d = 0; d < b; ++d) {
          var e = a.next();
          if (e.done) break;
          c += e.value;
        }

        return c;
      } : a(b);
    };
  };

  a._toCodePointArray = function (a) {
    return function (b) {
      return c ? function (a) {
        return Array.from(a, b);
      } : a;
    };
  };
})(PS["Data.String.CodePoints"] = PS["Data.String.CodePoints"] || {});

(function (a) {
  a.fromNumberImpl = function (a) {
    return function (c) {
      return function (f) {
        return (f | 0) === f ? a(f) : c;
      };
    };
  };

  a.toNumber = function (a) {
    return a;
  };

  a.toStringAs = function (a) {
    return function (c) {
      return c.toString(a);
    };
  };
})(PS["Data.Int"] = PS["Data.Int"] || {});

(function (a) {
  a.infinity = Infinity;

  a._encodeURIComponent = function (a) {
    return function (c, k, g) {
      try {
        return k(a(g));
      } catch (b) {
        return c(b.message);
      }
    };
  }(encodeURIComponent);
})(PS.Global = PS.Global || {});

(function (a) {
  a.Global = a.Global || {};
  var c = a.Global,
      f = a.Global,
      k = a["Data.Function"],
      g = a["Data.Maybe"];

  c.encodeURIComponent = function (a) {
    return f._encodeURIComponent(k["const"](g.Nothing.value), g.Just.create, a);
  };

  c.infinity = f.infinity;
})(PS);

(function (a) {
  a.floor = Math.floor;
})(PS.Math = PS.Math || {});

(function (a) {
  a.Math = a.Math || {};
  a.Math.floor = a.Math.floor;
})(PS);

(function (a) {
  a["Data.Int"] = a["Data.Int"] || {};

  var c = a["Data.Int"],
      f = a["Data.Int"],
      k = a["Data.Boolean"],
      g = a["Data.Bounded"],
      b = a["Data.Maybe"],
      e = a.Global,
      d = a.Math,
      l = f.fromNumberImpl(b.Just.create)(b.Nothing.value),
      h = function h(a) {
    if (a === e.infinity || a === -e.infinity) return 0;
    if (a >= f.toNumber(g.top(g.boundedInt))) return g.top(g.boundedInt);
    if (a <= f.toNumber(g.bottom(g.boundedInt))) return g.bottom(g.boundedInt);
    if (k.otherwise) return b.fromMaybe(0)(l(a));
    throw Error("Failed pattern match at Data.Int (line 66, column 1 - line 66, column 29): " + [a.constructor.name]);
  };

  c.floor = function (a) {
    return h(d.floor(a));
  };

  c.hexadecimal = 16;
  c.toStringAs = f.toStringAs;
})(PS);

(function (a) {
  a.fromCharArray = function (a) {
    return a.join("");
  };

  a.toCharArray = function (a) {
    return a.split("");
  };

  a.singleton = function (a) {
    return a;
  };

  a._charAt = function (a) {
    return function (c) {
      return function (f) {
        return function (g) {
          return 0 <= f && f < g.length ? a(g.charAt(f)) : c;
        };
      };
    };
  };

  a.length = function (a) {
    return a.length;
  };

  a._indexOf = function (a) {
    return function (c) {
      return function (f) {
        return function (g) {
          g = g.indexOf(f);
          return -1 === g ? c : a(g);
        };
      };
    };
  };

  a.take = function (a) {
    return function (c) {
      return c.substr(0, a);
    };
  };

  a.drop = function (a) {
    return function (c) {
      return c.substring(a);
    };
  };
})(PS["Data.String.CodeUnits"] = PS["Data.String.CodeUnits"] || {});

(function (a) {
  a.charAt = function (a) {
    return function (c) {
      if (0 <= a && a < c.length) return c.charAt(a);
      throw Error("Data.String.Unsafe.charAt: Invalid index.");
    };
  };
})(PS["Data.String.Unsafe"] = PS["Data.String.Unsafe"] || {});

(function (a) {
  a["Data.String.Unsafe"] = a["Data.String.Unsafe"] || {};
  a["Data.String.Unsafe"].charAt = a["Data.String.Unsafe"].charAt;
})(PS);

(function (a) {
  a["Data.String.CodeUnits"] = a["Data.String.CodeUnits"] || {};

  var c = a["Data.String.CodeUnits"],
      f = a["Data.String.CodeUnits"],
      k = a["Data.Maybe"],
      g = a["Data.String.Unsafe"],
      b = f._indexOf(k.Just.create)(k.Nothing.value);

  f._charAt(k.Just.create)(k.Nothing.value);

  c.contains = function (a) {
    var c = b(a);
    return function (a) {
      return k.isJust(c(a));
    };
  };

  c.uncons = function (a) {
    return "" === a ? k.Nothing.value : new k.Just({
      head: g.charAt(0)(a),
      tail: f.drop(1)(a)
    });
  };

  c.indexOf = b;
  c.singleton = f.singleton;
  c.fromCharArray = f.fromCharArray;
  c.toCharArray = f.toCharArray;
  c.length = f.length;
  c.take = f.take;
  c.drop = f.drop;
})(PS);

(function (a) {
  a.unfoldrArrayImpl = function (a) {
    return function (c) {
      return function (f) {
        return function (g) {
          return function (b) {
            return function (e) {
              for (var d = [];;) {
                e = b(e);
                if (a(e)) return d;
                e = c(e);
                d.push(f(e));
                e = g(e);
              }
            };
          };
        };
      };
    };
  };
})(PS["Data.Unfoldable"] = PS["Data.Unfoldable"] || {});

(function (a) {
  a["Data.Unfoldable"] = a["Data.Unfoldable"] || {};
  var c = a["Data.Unfoldable"],
      f = a["Data.Function"],
      k = a["Data.Functor"],
      g = a["Data.Maybe"],
      b = a["Data.Tuple"],
      e = a["Data.Unfoldable1"];
  a = new function (a, b) {
    this.Unfoldable10 = a;
    this.unfoldr = b;
  }(function () {
    return e.unfoldable1Array;
  }, a["Data.Unfoldable"].unfoldrArrayImpl(g.isNothing)(g.fromJust())(b.fst)(b.snd));

  c.unfoldr = function (a) {
    return a.unfoldr;
  };

  c.fromMaybe = function (a) {
    return (0, a.unfoldr)(function (a) {
      return k.map(g.functorMaybe)(f.flip(b.Tuple.create)(g.Nothing.value))(a);
    });
  };

  c.unfoldableArray = a;
})(PS);

(function (a) {
  a["Data.String.CodePoints"] = a["Data.String.CodePoints"] || {};

  var c = a["Data.String.CodePoints"],
      f = a["Data.String.CodePoints"],
      k = a["Data.Array"],
      g = a["Data.Boolean"],
      b = a["Data.Bounded"],
      e = a["Data.Enum"],
      d = a["Data.Eq"],
      l = a["Data.EuclideanRing"],
      h = a["Data.Functor"],
      m = a["Data.Int"],
      v = a["Data.Maybe"],
      t = a["Data.Ord"],
      n = a["Data.String.CodeUnits"],
      u = a["Data.String.Common"],
      x = a["Data.String.Unsafe"],
      w = a["Data.Tuple"],
      A = a["Data.Unfoldable"],
      r = function r(a) {
    return function (b) {
      return ((1024 * (a - 55296 | 0) | 0) + (b - 56320 | 0) | 0) + 65536 | 0;
    };
  };

  a = new a["Data.Show"].Show(function (a) {
    return "(CodePoint 0x" + (u.toUpper(m.toStringAs(m.hexadecimal)(a)) + ")");
  });

  var z = function z(a) {
    var b = n.length(a);
    if (0 === b) return v.Nothing.value;
    if (1 === b) return new v.Just({
      head: e.fromEnum(e.boundedEnumChar)(x.charAt(0)(a)),
      tail: ""
    });
    b = e.fromEnum(e.boundedEnumChar)(x.charAt(1)(a));
    var c = e.fromEnum(e.boundedEnumChar)(x.charAt(0)(a));
    return 55296 <= c && 56319 >= c && 56320 <= b && 57343 >= b ? new v.Just({
      head: r(c)(b),
      tail: n.drop(2)(a)
    }) : new v.Just({
      head: c,
      tail: n.drop(1)(a)
    });
  },
      q = function q(a) {
    return h.map(v.functorMaybe)(function (a) {
      return new w.Tuple(a.head, a.tail);
    })(z(a));
  },
      E = f._unsafeCodePointAt0(function (a) {
    var b = e.fromEnum(e.boundedEnumChar)(x.charAt(0)(a));
    return 55296 <= b && 56319 >= b && 1 < n.length(a) && (a = e.fromEnum(e.boundedEnumChar)(x.charAt(1)(a)), 56320 <= a && 57343 >= a) ? r(b)(a) : b;
  }),
      K = f._toCodePointArray(function (a) {
    return A.unfoldr(A.unfoldableArray)(q)(a);
  })(E),
      p = function p(a) {
    return k.length(K(a));
  },
      G = function () {
    var a = e.toEnumWithDefaults(e.boundedEnumChar)(b.bottom(b.boundedChar))(b.top(b.boundedChar));
    return function (b) {
      return n.singleton(a(b));
    };
  }(),
      F = f._singleton(function (a) {
    if (65535 >= a) return G(a);
    var b = l.div(l.euclideanRingInt)(a - 65536 | 0)(1024) + 55296 | 0;
    a = l.mod(l.euclideanRingInt)(a - 65536 | 0)(1024) + 56320 | 0;
    return G(b) + G(a);
  }),
      I = function I(a) {
    return function (b) {
      if (1 > a) return "";
      var c = z(b);
      return c instanceof v.Just ? F(c.value0.head) + I(a - 1 | 0)(c.value0.tail) : b;
    };
  },
      J = f._take(I),
      C = new d.Eq(function (a) {
    return function (b) {
      return a === b;
    };
  }),
      H = new t.Ord(function () {
    return C;
  }, function (a) {
    return function (b) {
      return t.compare(t.ordInt)(a)(b);
    };
  }),
      D = function D(a) {
    return function (b) {
      for (var c = a, d = !1, e; !d;) {
        e = c;
        var f = z(b);
        f instanceof v.Just ? 0 === e ? (d = !0, e = new v.Just(f.value0.head)) : (c = e - 1 | 0, b = f.value0.tail, e = void 0) : (d = !0, e = v.Nothing.value);
      }

      return e;
    };
  },
      B = new b.Bounded(function () {
    return H;
  }, 0, 1114111);

  d = new e.BoundedEnum(function () {
    return B;
  }, function () {
    return N;
  }, 1114112, function (a) {
    return a;
  }, function (a) {
    if (0 <= a && 1114111 >= a) return new v.Just(a);
    if (g.otherwise) return v.Nothing.value;
    throw Error("Failed pattern match at Data.String.CodePoints (line 63, column 1 - line 68, column 26): " + [a.constructor.name]);
  });
  var N = new e.Enum(function () {
    return H;
  }, e.defaultPred(e.toEnum(d))(e.fromEnum(d)), e.defaultSucc(e.toEnum(d))(e.fromEnum(d)));
  c.singleton = F;
  c.toCodePointArray = K;

  c.codePointAt = function (a) {
    return function (b) {
      return 0 > a || 0 === a && "" === b ? v.Nothing.value : 0 === a ? new v.Just(E(b)) : f._codePointAt(D)(v.Just.create)(v.Nothing.value)(E)(a)(b);
    };
  };

  c.length = p;

  c.indexOf = function (a) {
    return function (b) {
      return h.map(v.functorMaybe)(function (a) {
        return p(n.take(a)(b));
      })(n.indexOf(a)(b));
    };
  };

  c.take = J;

  c.drop = function (a) {
    return function (b) {
      return n.drop(n.length(J(a)(b)))(b);
    };
  };

  c.showCodePoint = a;
  c.boundedEnumCodePoint = d;
})(PS);

(function (a) {
  a["Text.Parsing.Parser.String"] = a["Text.Parsing.Parser.String"] || {};
  var c = a["Text.Parsing.Parser.String"],
      f = a["Control.Applicative"],
      k = a["Control.Bind"],
      g = a["Control.Monad.State.Class"],
      b = a["Data.Eq"],
      e = a["Data.Foldable"],
      d = a["Data.Function"],
      l = a["Data.Maybe"],
      h = a["Data.Newtype"],
      m = a["Data.Show"],
      v = a["Data.String.CodePoints"],
      t = a["Data.String.CodeUnits"],
      n = a["Data.String.Pattern"],
      u = a["Text.Parsing.Parser"],
      x = a["Text.Parsing.Parser.Combinators"],
      w = a["Text.Parsing.Parser.Pos"];
  a = new function (a, b, c, d) {
    this.drop = a;
    this.indexOf = b;
    this["null"] = c;
    this.uncons = d;
  }(v.drop, v.indexOf, a["Data.String.Common"]["null"], t.uncons);

  var A = function A(a) {
    return function (b) {
      return k.bind(u.bindParserT(b))(g.gets(u.monadStateParserT(b))(function (a) {
        return a.value0;
      }))(function (c) {
        var d = (0, a.uncons)(c);
        if (d instanceof l.Nothing) return u.fail(b)("Unexpected EOF");
        if (d instanceof l.Just) return k.discard(k.discardUnit)(u.bindParserT(b))(g.modify_(u.monadStateParserT(b))(function (a) {
          return new u.ParseState(d.value0.tail, w.updatePosString(a.value1)(t.singleton(d.value0.head)), !0);
        }))(function () {
          return f.pure(u.applicativeParserT(b))(d.value0.head);
        });
        throw Error("Failed pattern match at Text.Parsing.Parser.String (line 56, column 3 - line 63, column 16): " + [d.constructor.name]);
      });
    };
  },
      r = function r(a) {
    return function (b) {
      return function (c) {
        return x.tryRethrow(b)(k.bind(u.bindParserT(b))(A(a)(b))(function (a) {
          return c(a) ? f.pure(u.applicativeParserT(b))(a) : u.fail(b)("Character '" + (t.singleton(a) + "' did not satisfy predicate"));
        }));
      };
    };
  };

  c.eof = function (a) {
    return function (b) {
      return k.bind(u.bindParserT(b))(g.gets(u.monadStateParserT(b))(function (a) {
        return a.value0;
      }))(function (c) {
        return f.unless(u.applicativeParserT(b))((0, a["null"])(c))(u.fail(b)("Expected EOF"));
      });
    };
  };

  c.string = function (a) {
    return function (b) {
      return function (c) {
        return k.bind(u.bindParserT(b))(g.gets(u.monadStateParserT(b))(function (a) {
          return a.value0;
        }))(function (d) {
          var e = (0, a.indexOf)(h.wrap(n.newtypePattern)(c))(d);
          return e instanceof l.Just && 0 === e.value0 ? k.discard(k.discardUnit)(u.bindParserT(b))(g.modify_(u.monadStateParserT(b))(function (b) {
            return new u.ParseState((0, a.drop)(v.length(c))(d), w.updatePosString(b.value1)(c), !0);
          }))(function () {
            return f.pure(u.applicativeParserT(b))(c);
          }) : u.fail(b)("Expected " + m.show(m.showString)(c));
        });
      };
    };
  };

  c.noneOf = function (a) {
    return function (c) {
      return function (f) {
        return x.withErrorMessage(c)(r(a)(c)(d.flip(e.notElem(e.foldableArray)(b.eqChar))(f)))("none of " + m.show(m.showArray(m.showChar))(f));
      };
    };
  };

  c.stringLikeString = a;
})(PS);

(function (a) {
  a["Data.Formatter.Parser.Utils"] = a["Data.Formatter.Parser.Utils"] || {};

  var c = a["Data.Formatter.Parser.Utils"],
      f = a["Control.Apply"],
      k = a["Data.Bifunctor"],
      g = a["Data.Either"],
      b = a["Data.Functor"],
      e = a["Data.Identity"],
      d = a["Data.Show"],
      l = a["Text.Parsing.Parser"],
      h = a["Text.Parsing.Parser.Combinators"],
      m = a["Text.Parsing.Parser.String"],
      v = function v(a) {
    var b = l.parseErrorMessage(a);
    a = l.parseErrorPosition(a);
    a = "(line " + (d.show(d.showInt)(a.line) + (", col " + (d.show(d.showInt)(a.column) + ")")));
    return b + (" " + a);
  };

  c.oneOfAs = function (a) {
    return function (c) {
      return function (d) {
        return function (e) {
          return function (f) {
            return h.choice(c)(d)(b.map(a)(function (a) {
              return b.voidLeft(l.functorParserT(d.Bind1().Apply0().Functor0()))(e(a.value0))(a.value1);
            })(f));
          };
        };
      };
    };
  };

  c.runP = function (a) {
    return function (b) {
      return function (c) {
        return k.lmap(g.bifunctorEither)(v)(l.runParser(c)(f.applyFirst(l.applyParserT(e.monadIdentity))(b)(m.eof(a)(e.monadIdentity))));
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Time.Component"] = a["Data.Time.Component"] || {};
  var c = a["Data.Time.Component"],
      f = a["Data.Boolean"],
      k = a["Data.Bounded"],
      g = a["Data.Enum"],
      b = a["Data.Maybe"];
  a = a["Data.Ord"];
  var e = a.ordInt,
      d = a.ordInt,
      l = a.ordInt,
      h = a.ordInt,
      m = new k.Bounded(function () {
    return e;
  }, 0, 59),
      v = new k.Bounded(function () {
    return d;
  }, 0, 59),
      t = new k.Bounded(function () {
    return l;
  }, 0, 999),
      n = new k.Bounded(function () {
    return h;
  }, 0, 23),
      u = new g.BoundedEnum(function () {
    return m;
  }, function () {
    return x;
  }, 60, function (a) {
    return a;
  }, function (a) {
    if (0 <= a && 59 >= a) return new b.Just(a);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 90, column 1 - line 95, column 26): " + [a.constructor.name]);
  }),
      x = new g.Enum(function () {
    return e;
  }, function () {
    var a = g.toEnum(u),
        b = g.fromEnum(u);
    return function (c) {
      return a(b(c) - 1 | 0);
    };
  }(), function () {
    var a = g.toEnum(u),
        b = g.fromEnum(u);
    return function (c) {
      return a(b(c) + 1 | 0);
    };
  }()),
      w = new g.BoundedEnum(function () {
    return v;
  }, function () {
    return A;
  }, 60, function (a) {
    return a;
  }, function (a) {
    if (0 <= a && 59 >= a) return new b.Just(a);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 61, column 1 - line 66, column 26): " + [a.constructor.name]);
  }),
      A = new g.Enum(function () {
    return d;
  }, function () {
    var a = g.toEnum(w),
        b = g.fromEnum(w);
    return function (c) {
      return a(b(c) - 1 | 0);
    };
  }(), function () {
    var a = g.toEnum(w),
        b = g.fromEnum(w);
    return function (c) {
      return a(b(c) + 1 | 0);
    };
  }()),
      r = new g.BoundedEnum(function () {
    return t;
  }, function () {
    return z;
  }, 1E3, function (a) {
    return a;
  }, function (a) {
    if (0 <= a && 999 >= a) return new b.Just(a);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 120, column 1 - line 125, column 31): " + [a.constructor.name]);
  }),
      z = new g.Enum(function () {
    return l;
  }, function () {
    var a = g.toEnum(r),
        b = g.fromEnum(r);
    return function (c) {
      return a(b(c) - 1 | 0);
    };
  }(), function () {
    var a = g.toEnum(r),
        b = g.fromEnum(r);
    return function (c) {
      return a(b(c) + 1 | 0);
    };
  }()),
      q = new g.BoundedEnum(function () {
    return n;
  }, function () {
    return E;
  }, 24, function (a) {
    return a;
  }, function (a) {
    if (0 <= a && 23 >= a) return new b.Just(a);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 32, column 1 - line 37, column 24): " + [a.constructor.name]);
  }),
      E = new g.Enum(function () {
    return h;
  }, function () {
    var a = g.toEnum(q),
        b = g.fromEnum(q);
    return function (c) {
      return a(b(c) - 1 | 0);
    };
  }(), function () {
    var a = g.toEnum(q),
        b = g.fromEnum(q);
    return function (c) {
      return a(b(c) + 1 | 0);
    };
  }());
  c.boundedHour = n;
  c.boundedEnumHour = q;
  c.boundedMinute = v;
  c.boundedEnumMinute = w;
  c.boundedSecond = m;
  c.boundedEnumSecond = u;
  c.boundedMillisecond = t;
  c.boundedEnumMillisecond = r;
})(PS);

(function (a) {
  a["Data.Time.Duration"] = a["Data.Time.Duration"] || {};
  var c = a["Data.Time.Duration"];
  a = new a["Data.Newtype"].Newtype(function (a) {
    return a;
  }, function (a) {
    return a;
  });
  c.newtypeMilliseconds = a;
})(PS);

(function (a) {
  a["Data.Formatter.DateTime"] = a["Data.Formatter.DateTime"] || {};

  var c = a["Data.Formatter.DateTime"],
      f = a["Control.Alt"],
      k = a["Data.Array"],
      g = a["Data.Boolean"],
      b = a["Data.Date"],
      e = a["Data.Date.Component"],
      d = a["Data.DateTime.Instant"],
      l = a["Data.Either"],
      h = a["Data.Enum"],
      m = a["Data.EuclideanRing"],
      v = a["Data.Foldable"],
      t = a["Data.Formatter.Parser.Utils"],
      n = a["Data.Functor"],
      u = a["Data.Identity"],
      x = a["Data.Int"],
      w = a["Data.List"],
      A = a["Data.List.Types"],
      r = a["Data.Monoid"],
      z = a["Data.Newtype"],
      q = a["Data.Ord"],
      E = a["Data.Ring"],
      K = a["Data.Show"],
      p = a["Data.String.CodePoints"],
      G = a["Data.String.CodeUnits"],
      F = a["Data.Time"],
      I = a["Data.Time.Component"],
      J = a["Data.Time.Duration"],
      C = a["Data.Tuple"],
      H = a["Text.Parsing.Parser"],
      D = a["Text.Parsing.Parser.Combinators"],
      B = a["Text.Parsing.Parser.String"],
      N = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Q = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      P = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      O = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      M = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      T = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      S = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      y = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      L = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      V = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      R = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      X = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      W = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Z = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      da = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      fa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      U = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ia = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ca = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ja = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ea = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ha = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      aa = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      ba = function ba(a) {
    if (a instanceof e.January) return "Jan";
    if (a instanceof e.February) return "Feb";
    if (a instanceof e.March) return "Mar";
    if (a instanceof e.April) return "Apr";
    if (a instanceof e.May) return "May";
    if (a instanceof e.June) return "Jun";
    if (a instanceof e.July) return "Jul";
    if (a instanceof e.August) return "Aug";
    if (a instanceof e.September) return "Sep";
    if (a instanceof e.October) return "Oct";
    if (a instanceof e.November) return "Nov";
    if (a instanceof e.December) return "Dec";
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 482, column 19 - line 494, column 21): " + [a.constructor.name]);
  };

  a = n.mapFlipped(H.functorParserT(u.functorIdentity))(k.some(H.alternativeParserT(u.monadIdentity))(H.lazyParserT)(B.noneOf(B.stringLikeString)(u.monadIdentity)(G.toCharArray("YMDEHhamsS"))))(G.fromCharArray);

  var Y = function Y(a) {
    if (0 > a) return "-" + Y(-a | 0);
    if (10 > a) return "0" + K.show(K.showInt)(a);
    if (g.otherwise) return K.show(K.showInt)(a);
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 192, column 1 - line 192, column 30): " + [a.constructor.name]);
  },
      la = function la(a) {
    if (0 > a) return "-" + la(-a | 0);
    if (10 > a) return "000" + K.show(K.showInt)(a);
    if (100 > a) return "00" + K.show(K.showInt)(a);
    if (1E3 > a) return "0" + K.show(K.showInt)(a);
    if (g.otherwise) return K.show(K.showInt)(a);
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 205, column 1 - line 205, column 33): " + [a.constructor.name]);
  },
      ma = function ma(a) {
    if (0 > a) return "-" + ma(-a | 0);
    if (10 > a) return "00" + K.show(K.showInt)(a);
    if (100 > a) return "0" + K.show(K.showInt)(a);
    if (g.otherwise) return K.show(K.showInt)(a);
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 198, column 1 - line 198, column 30): " + [a.constructor.name]);
  };

  f = f.alt(H.altParserT(u.monadIdentity))(t.oneOfAs(n.functorArray)(v.foldableArray)(u.monadIdentity)(function () {
    var a = D["try"](u.monadIdentity),
        b = B.string(B.stringLikeString)(u.monadIdentity);
    return function (c) {
      return a(b(c));
    };
  }())([new C.Tuple("YYYY", N.value), new C.Tuple("YY", Q.value), new C.Tuple("Y", P.value), new C.Tuple("MMMM", O.value), new C.Tuple("MMM", M.value), new C.Tuple("MM", T.value), new C.Tuple("DD", S.value), new C.Tuple("D", y.value), new C.Tuple("E", V.value), new C.Tuple("X", L.value), new C.Tuple("dddd", R.value), new C.Tuple("ddd", X.value), new C.Tuple("HH", W.value), new C.Tuple("hh", Z.value), new C.Tuple("a", da.value), new C.Tuple("mm", U.value), new C.Tuple("m", fa.value), new C.Tuple("ss", ca.value), new C.Tuple("s", ia.value), new C.Tuple("SSS", ja.value), new C.Tuple("SS", ha.value), new C.Tuple("S", ea.value)]))(n.map(H.functorParserT(u.functorIdentity))(aa.create)(a));

  var pa = function pa(a) {
    a = K.show(K.showInt)(q.abs(q.ordInt)(E.ringInt)(a));
    var b = p.length(a);
    return 1 === b ? "0" + a : 2 === b ? a : p.drop(b - 2 | 0)(a);
  };

  w = w.some(H.alternativeParserT(u.monadIdentity))(H.lazyParserT)(f);

  var oa = t.runP(B.stringLikeString)(w),
      qa = function qa(a) {
    return 0 === a ? 12 : a;
  },
      ka = function ka(a) {
    return function (c) {
      if (c instanceof N) return la(h.fromEnum(e.boundedEnumYear)(b.year(a.value0)));
      if (c instanceof Q) return pa(h.fromEnum(e.boundedEnumYear)(b.year(a.value0)));
      if (c instanceof P) return K.show(K.showInt)(h.fromEnum(e.boundedEnumYear)(b.year(a.value0)));
      if (c instanceof O) return K.show(e.showMonth)(b.month(a.value0));
      if (c instanceof M) return ba(b.month(a.value0));
      if (c instanceof T) return Y(h.fromEnum(e.boundedEnumMonth)(b.month(a.value0)));
      if (c instanceof S) return Y(h.fromEnum(e.boundedEnumDay)(b.day(a.value0)));
      if (c instanceof y) return K.show(K.showInt)(h.fromEnum(e.boundedEnumDay)(b.day(a.value0)));
      if (c instanceof L) return K.show(K.showInt)(x.floor(z.unwrap(J.newtypeMilliseconds)(d.unInstant(d.fromDateTime(a))) / 1E3));
      if (c instanceof V) return K.show(K.showInt)(h.fromEnum(e.boundedEnumWeekday)(b.weekday(a.value0)));
      if (c instanceof R) return K.show(e.showWeekday)(b.weekday(a.value0));
      if (c instanceof X) return p.take(3)(K.show(e.showWeekday)(b.weekday(a.value0)));
      if (c instanceof W) return Y(h.fromEnum(I.boundedEnumHour)(F.hour(a.value1)));
      if (c instanceof Z) return Y(qa(m.mod(m.euclideanRingInt)(h.fromEnum(I.boundedEnumHour)(F.hour(a.value1)))(12)));
      if (c instanceof da) return 12 <= h.fromEnum(I.boundedEnumHour)(F.hour(a.value1)) ? "PM" : "AM";
      if (c instanceof fa) return K.show(K.showInt)(h.fromEnum(I.boundedEnumMinute)(F.minute(a.value1)));
      if (c instanceof U) return Y(h.fromEnum(I.boundedEnumMinute)(F.minute(a.value1)));
      if (c instanceof ia) return K.show(K.showInt)(h.fromEnum(I.boundedEnumSecond)(F.second(a.value1)));
      if (c instanceof ca) return Y(h.fromEnum(I.boundedEnumSecond)(F.second(a.value1)));
      if (c instanceof ja) return ma(h.fromEnum(I.boundedEnumMillisecond)(F.millisecond(a.value1)));
      if (c instanceof ea) return K.show(K.showInt)(function (a) {
        return m.div(m.euclideanRingInt)(a)(100);
      }(h.fromEnum(I.boundedEnumMillisecond)(F.millisecond(a.value1))));
      if (c instanceof ha) return Y(function (a) {
        return m.div(m.euclideanRingInt)(a)(10);
      }(h.fromEnum(I.boundedEnumMillisecond)(F.millisecond(a.value1))));
      if (c instanceof aa) return c.value0;
      throw Error("Failed pattern match at Data.Formatter.DateTime (line 167, column 38 - line 190, column 20): " + [c.constructor.name]);
    };
  },
      ra = function ra(a) {
    return function (b) {
      return v.foldMap(A.foldableList)(r.monoidString)(ka(b))(a);
    };
  };

  c.formatDateTime = function (a) {
    return function (b) {
      return n.mapFlipped(l.functorEither)(oa(a))(function (a) {
        return ra(a)(b);
      });
    };
  };
})(PS);

(function (a) {
  a.runFn2 = function (a) {
    return function (c) {
      return function (f) {
        return a(c, f);
      };
    };
  };

  a.runFn4 = function (a) {
    return function (c) {
      return function (f) {
        return function (g) {
          return function (b) {
            return a(c, f, g, b);
          };
        };
      };
    };
  };
})(PS["Data.Function.Uncurried"] = PS["Data.Function.Uncurried"] || {});

(function (a) {
  a["Data.Function.Uncurried"] = a["Data.Function.Uncurried"] || {};
  var c = a["Data.Function.Uncurried"];
  a = a["Data.Function.Uncurried"];
  c.runFn2 = a.runFn2;
  c.runFn4 = a.runFn4;
})(PS);

(function (a) {
  a["Data.Generic.Rep"] = a["Data.Generic.Rep"] || {};
  a = a["Data.Generic.Rep"];

  var c = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      f = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      k = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  a.Generic = function (a, b) {
    this.from = a;
    this.to = b;
  };

  a.to = function (a) {
    return a.to;
  };

  a.from = function (a) {
    return a.from;
  };

  a.NoArguments = k;
  a.Inl = c;
  a.Inr = f;

  a.Constructor = function (a) {
    return a;
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Bounded"] = a["Data.Generic.Rep.Bounded"] || {};

  var c = a["Data.Generic.Rep.Bounded"],
      f = a["Data.Generic.Rep"],
      k = function k(a) {
    this["genericTop'"] = a;
  },
      g = function g(a) {
    this["genericBottom'"] = a;
  };

  a = new k(f.NoArguments.value);

  var b = function b(a) {
    return a["genericTop'"];
  },
      e = new g(f.NoArguments.value),
      d = function d(a) {
    return a["genericBottom'"];
  };

  c["genericBottom'"] = d;

  c.genericBottom = function (a) {
    return function (b) {
      return f.to(a)(d(b));
    };
  };

  c["genericTop'"] = b;

  c.genericTop = function (a) {
    return function (c) {
      return f.to(a)(b(c));
    };
  };

  c.genericBottomNoArguments = e;

  c.genericBottomSum = function (a) {
    return new g(new f.Inl(d(a)));
  };

  c.genericBottomConstructor = function (a) {
    return new g(d(a));
  };

  c.genericTopNoArguments = a;

  c.genericTopSum = function (a) {
    return new k(new f.Inr(b(a)));
  };

  c.genericTopConstructor = function (a) {
    return new k(b(a));
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Enum"] = a["Data.Generic.Rep.Enum"] || {};

  var c = a["Data.Generic.Rep.Enum"],
      f = a["Data.Boolean"],
      k = a["Data.Enum"],
      g = a["Data.Functor"],
      b = a["Data.Generic.Rep"],
      e = a["Data.Generic.Rep.Bounded"],
      d = a["Data.Maybe"],
      l = a["Data.Newtype"],
      h = function h(a, b) {
    this["genericPred'"] = a;
    this["genericSucc'"] = b;
  },
      m = function m(a, b, c) {
    this["genericCardinality'"] = a;
    this["genericFromEnum'"] = b;
    this["genericToEnum'"] = c;
  },
      v = function v(a) {
    return a["genericToEnum'"];
  },
      t = function t(a) {
    return a["genericSucc'"];
  },
      n = function n(a) {
    return a["genericPred'"];
  },
      u = function u(a) {
    return a["genericFromEnum'"];
  };

  a = new h(function (a) {
    return d.Nothing.value;
  }, function (a) {
    return d.Nothing.value;
  });

  var x = function x(a) {
    return a["genericCardinality'"];
  },
      w = new m(1, function (a) {
    return 0;
  }, function (a) {
    return 0 === a ? new d.Just(b.NoArguments.value) : d.Nothing.value;
  });

  c.genericPred = function (a) {
    return function (c) {
      var e = g.map(d.functorMaybe)(b.to(a)),
          f = n(c),
          h = b.from(a);
      return function (a) {
        return e(f(h(a)));
      };
    };
  };

  c.genericSucc = function (a) {
    return function (c) {
      var e = g.map(d.functorMaybe)(b.to(a)),
          f = t(c),
          h = b.from(a);
      return function (a) {
        return e(f(h(a)));
      };
    };
  };

  c.genericCardinality = function (a) {
    return function (a) {
      return l.unwrap(k.newtypeCardinality)(x(a));
    };
  };

  c.genericToEnum = function (a) {
    return function (c) {
      var e = g.map(d.functorMaybe)(b.to(a)),
          f = v(c);
      return function (a) {
        return e(f(a));
      };
    };
  };

  c.genericFromEnum = function (a) {
    return function (c) {
      var d = u(c),
          e = b.from(a);
      return function (a) {
        return d(e(a));
      };
    };
  };

  c.genericEnumNoArguments = a;

  c.genericEnumConstructor = function (a) {
    return new h(function (c) {
      return g.map(d.functorMaybe)(b.Constructor)(n(a)(c));
    }, function (c) {
      return g.map(d.functorMaybe)(b.Constructor)(t(a)(c));
    });
  };

  c.genericEnumSum = function (a) {
    return function (c) {
      return function (f) {
        return function (k) {
          return new h(function (h) {
            if (h instanceof b.Inl) return g.map(d.functorMaybe)(b.Inl.create)(n(a)(h.value0));

            if (h instanceof b.Inr) {
              h = n(f)(h.value0);
              if (h instanceof d.Nothing) return new d.Just(new b.Inl(e["genericTop'"](c)));
              if (h instanceof d.Just) return new d.Just(new b.Inr(h.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 30, column 14 - line 32, column 31): " + [h.constructor.name]);
            }

            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 28, column 18 - line 32, column 31): " + [h.constructor.name]);
          }, function (c) {
            if (c instanceof b.Inl) {
              c = t(a)(c.value0);
              if (c instanceof d.Nothing) return new d.Just(new b.Inr(e["genericBottom'"](k)));
              if (c instanceof d.Just) return new d.Just(new b.Inl(c.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 34, column 14 - line 36, column 31): " + [c.constructor.name]);
            }

            if (c instanceof b.Inr) return g.map(d.functorMaybe)(b.Inr.create)(t(f)(c.value0));
            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 33, column 18 - line 37, column 36): " + [c.constructor.name]);
          });
        };
      };
    };
  };

  c.genericBoundedEnumNoArguments = w;

  c.genericBoundedEnumConstructor = function (a) {
    return new m(l.unwrap(k.newtypeCardinality)(x(a)), function (b) {
      return u(a)(b);
    }, function (c) {
      return g.map(d.functorMaybe)(b.Constructor)(v(a)(c));
    });
  };

  c.genericBoundedEnumSum = function (a) {
    return function (c) {
      return new m(k.Cardinality(l.unwrap(k.newtypeCardinality)(x(a)) + l.unwrap(k.newtypeCardinality)(x(c)) | 0), function (d) {
        if (d instanceof b.Inl) return u(a)(d.value0);
        if (d instanceof b.Inr) return u(c)(d.value0) + l.unwrap(k.newtypeCardinality)(x(a)) | 0;
        throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 87, column 22 - line 89, column 80): " + [d.constructor.name]);
      }, function (e) {
        var h = x(a);
        if (0 <= e && e < h) e = g.map(d.functorMaybe)(b.Inl.create)(v(a)(e));else if (f.otherwise) e = g.map(d.functorMaybe)(b.Inr.create)(v(c)(e - h | 0));else throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 83, column 5 - line 83, column 43): " + [h.constructor.name]);
        return e;
      });
    };
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Eq"] = a["Data.Generic.Rep.Eq"] || {};

  var c = a["Data.Generic.Rep.Eq"],
      f = a["Data.Generic.Rep"],
      k = function k(a) {
    this["genericEq'"] = a;
  };

  a = new k(function (a) {
    return function (a) {
      return !0;
    };
  });

  c.genericEq = function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return (0, b["genericEq'"])(f.from(a)(c))(f.from(a)(d));
        };
      };
    };
  };

  c.genericEqNoArguments = a;

  c.genericEqSum = function (a) {
    return function (b) {
      return new k(function (c) {
        return function (d) {
          return c instanceof f.Inl && d instanceof f.Inl ? (0, a["genericEq'"])(c.value0)(d.value0) : c instanceof f.Inr && d instanceof f.Inr ? (0, b["genericEq'"])(c.value0)(d.value0) : !1;
        };
      });
    };
  };

  c.genericEqConstructor = function (a) {
    return new k(function (b) {
      return function (c) {
        return (0, a["genericEq'"])(b)(c);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Ord"] = a["Data.Generic.Rep.Ord"] || {};

  var c = a["Data.Generic.Rep.Ord"],
      f = a["Data.Generic.Rep"],
      k = a["Data.Ordering"],
      g = function g(a) {
    this["genericCompare'"] = a;
  };

  a = new g(function (a) {
    return function (a) {
      return k.EQ.value;
    };
  });

  var b = function b(a) {
    return a["genericCompare'"];
  };

  c.genericCompare = function (a) {
    return function (c) {
      return function (d) {
        return function (e) {
          return b(c)(f.from(a)(d))(f.from(a)(e));
        };
      };
    };
  };

  c.genericOrdNoArguments = a;

  c.genericOrdSum = function (a) {
    return function (c) {
      return new g(function (d) {
        return function (e) {
          if (d instanceof f.Inl && e instanceof f.Inl) return b(a)(d.value0)(e.value0);
          if (d instanceof f.Inr && e instanceof f.Inr) return b(c)(d.value0)(e.value0);
          if (d instanceof f.Inl && e instanceof f.Inr) return k.LT.value;
          if (d instanceof f.Inr && e instanceof f.Inl) return k.GT.value;
          throw Error("Failed pattern match at Data.Generic.Rep.Ord (line 19, column 1 - line 23, column 41): " + [d.constructor.name, e.constructor.name]);
        };
      });
    };
  };

  c.genericOrdConstructor = function (a) {
    return new g(function (c) {
      return function (d) {
        return b(a)(c)(d);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Show"] = a["Data.Generic.Rep.Show"] || {};

  var c = a["Data.Generic.Rep.Show"],
      f = a["Data.Foldable"],
      k = a["Data.Generic.Rep"],
      g = a["Data.Monoid"],
      b = a["Data.Semigroup"],
      e = a["Data.Show"],
      d = a["Data.Symbol"],
      l = function l(a) {
    this.genericShowArgs = a;
  },
      h = function h(a) {
    this["genericShow'"] = a;
  };

  a = new l(function (a) {
    return [];
  });

  c.genericShow = function (a) {
    return function (b) {
      return function (c) {
        return (0, b["genericShow'"])(k.from(a)(c));
      };
    };
  };

  c.genericShowArgsNoArguments = a;

  c.genericShowSum = function (a) {
    return function (b) {
      return new h(function (c) {
        if (c instanceof k.Inl) return (0, a["genericShow'"])(c.value0);
        if (c instanceof k.Inr) return (0, b["genericShow'"])(c.value0);
        throw Error("Failed pattern match at Data.Generic.Rep.Show (line 26, column 1 - line 28, column 40): " + [c.constructor.name]);
      });
    };
  };

  c.genericShowConstructor = function (a) {
    return function (c) {
      return new h(function (e) {
        var h = d.reflectSymbol(c)(d.SProxy.value);
        e = (0, a.genericShowArgs)(e);
        return 0 === e.length ? h : "(" + (f.intercalate(f.foldableArray)(g.monoidString)(" ")(b.append(b.semigroupArray)([h])(e)) + ")");
      });
    };
  };

  c.genericShowArgsArgument = function (a) {
    return new l(function (b) {
      return [e.show(a)(b)];
    });
  };
})(PS);

(function (a) {
  a["Data.Lens.Internal.Wander"] = a["Data.Lens.Internal.Wander"] || {};

  a["Data.Lens.Internal.Wander"].Wander = function (a, f, k) {
    this.Choice1 = a;
    this.Strong0 = f;
    this.wander = k;
  };
})(PS);

(function (a) {
  a["Data.Profunctor"] = a["Data.Profunctor"] || {};
  var c = a["Data.Profunctor"],
      f = a["Control.Category"];

  a = function a(_a14) {
    this.dimap = _a14;
  };

  var k = new a(function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return b(c(a(d)));
        };
      };
    };
  });

  c.dimap = function (a) {
    return a.dimap;
  };

  c.Profunctor = a;

  c.rmap = function (a) {
    return function (b) {
      return (0, a.dimap)(f.identity(f.categoryFn))(b);
    };
  };

  c.profunctorFn = k;
})(PS);

(function (a) {
  a["Data.Profunctor.Choice"] = a["Data.Profunctor.Choice"] || {};
  a = a["Data.Profunctor.Choice"];

  a.right = function (a) {
    return a.right;
  };

  a.Choice = function (a, f, k) {
    this.Profunctor0 = a;
    this.left = f;
    this.right = k;
  };
})(PS);

(function (a) {
  a["Data.Profunctor.Strong"] = a["Data.Profunctor.Strong"] || {};

  var c = a["Data.Profunctor.Strong"],
      f = a["Control.Category"],
      k = a["Control.Semigroupoid"],
      g = a["Data.Profunctor"],
      b = a["Data.Tuple"],
      e = function e(a, b, c) {
    this.Profunctor0 = a;
    this.first = b;
    this.second = c;
  };

  a = new e(function () {
    return g.profunctorFn;
  }, function (a) {
    return function (c) {
      return new b.Tuple(a(c.value0), c.value1);
    };
  }, a["Data.Functor"].map(b.functorTuple));

  var d = function d(a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return k.composeFlipped(a.Semigroupoid0())((0, b.first)(c))((0, b.second)(d));
        };
      };
    };
  };

  c.first = function (a) {
    return a.first;
  };

  c.second = function (a) {
    return a.second;
  };

  c.Strong = e;

  c.fanout = function (a) {
    return function (c) {
      return function (e) {
        return function (h) {
          var l = g.dimap(c.Profunctor0())(f.identity(f.categoryFn))(function (a) {
            return new b.Tuple(a, a);
          })(f.identity(a));
          return k.composeFlipped(a.Semigroupoid0())(l)(d(a)(c)(e)(h));
        };
      };
    };
  };

  c.strongFn = a;
})(PS);

(function (a) {
  a["Data.Lens.Internal.Forget"] = a["Data.Lens.Internal.Forget"] || {};

  var c = a["Data.Lens.Internal.Forget"],
      f = a["Data.Const"],
      k = a["Data.Either"],
      g = a["Data.Functor"],
      b = a["Data.Lens.Internal.Wander"],
      e = a["Data.Monoid"],
      d = a["Data.Newtype"],
      l = a["Data.Profunctor.Choice"],
      h = a["Data.Profunctor.Strong"],
      m = a["Data.Tuple"],
      v = function v(a) {
    return a;
  },
      t = new a["Data.Profunctor"].Profunctor(function (a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return b(a(c));
        };
      };
    };
  }),
      n = new h.Strong(function () {
    return t;
  }, function (a) {
    return function (b) {
      return a(m.fst(b));
    };
  }, function (a) {
    return function (b) {
      return a(m.snd(b));
    };
  });

  a = new d.Newtype(function (a) {
    return a;
  }, v);

  var u = function u(a) {
    return new l.Choice(function () {
      return t;
    }, function (b) {
      return k.either(b)(e.mempty(e.monoidFn(a)));
    }, function (b) {
      return k.either(e.mempty(e.monoidFn(a)))(b);
    });
  };

  c.Forget = v;
  c.newtypeForget = a;
  c.strongForget = n;

  c.wanderForget = function (a) {
    return new b.Wander(function () {
      return u(a);
    }, function () {
      return n;
    }, function (b) {
      return function (c) {
        return d.alaF(g.functorFn)(g.functorFn)(f.newtypeConst)(f.newtypeConst)(f.Const)(b(f.applicativeConst(a)))(c);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Maybe.First"] = a["Data.Maybe.First"] || {};

  var c = a["Data.Maybe.First"],
      f = a["Data.Maybe"],
      k = a["Data.Monoid"],
      g = a["Data.Newtype"],
      b = function b(a) {
    return a;
  },
      e = new a["Data.Semigroup"].Semigroup(function (a) {
    return function (b) {
      return a instanceof f.Just ? a : b;
    };
  });

  a = new g.Newtype(function (a) {
    return a;
  }, b);
  k = new k.Monoid(function () {
    return e;
  }, f.Nothing.value);
  c.First = b;
  c.newtypeFirst = a;
  c.monoidFirst = k;
})(PS);

(function (a) {
  a["Data.Lens.Fold"] = a["Data.Lens.Fold"] || {};
  var c = a["Data.Lens.Fold"],
      f = a["Data.Lens.Internal.Forget"],
      k = a["Data.Maybe"],
      g = a["Data.Maybe.First"],
      b = a["Data.Newtype"],
      e = b.under(f.newtypeForget)(f.newtypeForget)(f.Forget);

  c.preview = function (a) {
    var c = b.unwrap(g.newtypeFirst),
        d = e(a)(function (a) {
      return g.First(k.Just.create(a));
    });
    return function (a) {
      return c(d(a));
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Getter"] = a["Data.Lens.Getter"] || {};
  var c = a["Control.Category"],
      f = a["Data.Lens.Internal.Forget"],
      k = a["Data.Newtype"];

  a["Data.Lens.Getter"].view = function (a) {
    return k.unwrap(f.newtypeForget)(a(c.identity(c.categoryFn)));
  };
})(PS);

(function (a) {
  a["Data.Lens.Iso"] = a["Data.Lens.Iso"] || {};
  var c = a["Data.Profunctor"];

  a["Data.Lens.Iso"].iso = function (a) {
    return function (f) {
      return function (g) {
        return function (b) {
          return c.dimap(g)(a)(f)(b);
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Iso.Newtype"] = a["Data.Lens.Iso.Newtype"] || {};
  var c = a["Data.Lens.Iso"],
      f = a["Data.Newtype"];

  a["Data.Lens.Iso.Newtype"]._Newtype = function (a) {
    return function (g) {
      return function (b) {
        return c.iso(f.unwrap(a))(f.wrap(g))(b);
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Lens"] = a["Data.Lens.Lens"] || {};

  var c = a["Data.Profunctor"],
      f = a["Data.Profunctor.Strong"],
      k = a["Data.Tuple"],
      g = function g(a) {
    return function (b) {
      return function (d) {
        return c.dimap(b.Profunctor0())(a)(function (a) {
          return a.value1(a.value0);
        })(f.first(b)(d));
      };
    };
  };

  a["Data.Lens.Lens"].lens = function (a) {
    return function (b) {
      return function (c) {
        return g(function (c) {
          return new k.Tuple(a(c), function (a) {
            return b(c)(a);
          });
        })(c);
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Prism"] = a["Data.Lens.Prism"] || {};

  var c = a["Control.Category"],
      f = a["Data.Either"],
      k = a["Data.Maybe"],
      g = a["Data.Profunctor"],
      b = a["Data.Profunctor.Choice"],
      e = function e(a) {
    return function (d) {
      return function (e) {
        return function (h) {
          return g.dimap(e.Profunctor0())(d)(f.either(c.identity(c.categoryFn))(c.identity(c.categoryFn)))(b.right(e)(g.rmap(e.Profunctor0())(a)(h)));
        };
      };
    };
  };

  a["Data.Lens.Prism"]["prism'"] = function (a) {
    return function (b) {
      return function (c) {
        return e(a)(function (a) {
          return k.maybe(new f.Left(a))(f.Right.create)(b(a));
        })(c);
      };
    };
  };
})(PS);

(function (a) {
  a.Record = a.Record || {};
  var c = a.Record,
      f = a["Data.Symbol"],
      k = a["Record.Unsafe"];

  c.get = function (a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return k.unsafeGet(f.reflectSymbol(a)(b))(c);
        };
      };
    };
  };

  c.set = function (a) {
    return function (b) {
      return function (b) {
        return function (b) {
          return function (c) {
            return function (d) {
              return k.unsafeSet(f.reflectSymbol(a)(b))(c)(d);
            };
          };
        };
      };
    };
  };

  c.insert = function (a) {
    return function (b) {
      return function (b) {
        return function (b) {
          return function (c) {
            return function (d) {
              return k.unsafeSet(f.reflectSymbol(a)(b))(c)(d);
            };
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Record"] = a["Data.Lens.Record"] || {};
  var c = a["Data.Function"],
      f = a["Data.Lens.Lens"],
      k = a.Record;

  a["Data.Lens.Record"].prop = function (a) {
    return function (b) {
      return function (b) {
        return function (b) {
          return function (d) {
            return f.lens(k.get(a)()(b))(c.flip(k.set(a)()()(b)))(d);
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Data.String.NonEmpty.Internal"] = a["Data.String.NonEmpty.Internal"] || {};
  var c = a["Data.String.NonEmpty.Internal"],
      f = a["Data.Maybe"],
      k = a["Data.Show"];
  a = new k.Show(function (a) {
    return "(NonEmptyString.unsafeFromString " + (k.show(k.showString)(a) + ")");
  });

  c.fromString = function (a) {
    return "" === a ? f.Nothing.value : new f.Just(a);
  };

  c.toString = function (a) {
    return a;
  };

  c.showNonEmptyString = a;
})(PS);

(function (a) {
  a.endsWith = function (a) {
    return function (c) {
      return c.endsWith(a);
    };
  };

  a.fromCharArray = function (a) {
    return a.join("");
  };
})(PS["Data.String.Utils"] = PS["Data.String.Utils"] || {});

(function (a) {
  a["Data.String.Utils"] = a["Data.String.Utils"] || {};
  var c = a["Data.String.Utils"];
  a = a["Data.String.Utils"];
  c.endsWith = a.endsWith;
  c.fromCharArray = a.fromCharArray;
})(PS);

(function (a) {
  a["Data.Variant"] = a["Data.Variant"] || {};
  var c = a["Data.Symbol"];

  a["Data.Variant"].inj = function (a) {
    return function (a) {
      return function (f) {
        return function (b) {
          return {
            type: c.reflectSymbol(a)(f),
            value: b
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Data.XPath"] = a["Data.XPath"] || {};
  var c = a["Data.XPath"],
      f = a["Data.Semigroup"],
      k = new function (a, b, c, d, f, h) {
    this.Semigroup0 = a;
    this.at = b;
    this.pathAppend = c;
    this.pathAppendNSx = d;
    this.root = f;
    this.xx = h;
  }(function () {
    return f.semigroupString;
  }, function (a) {
    return "@" + a;
  }, function (a) {
    return function (b) {
      return a === k.root ? k.root + b : a + ("/" + b);
    };
  }, function (a) {
    return function (b) {
      return a === k.root ? k.root + ("x:" + b) : a + ("/x:" + b);
    };
  }, "/", function (a) {
    return "x:" + a;
  });

  c.pathAppendNSx = function (a) {
    return a.pathAppendNSx;
  };

  c.xx = function (a) {
    return a.xx;
  };

  c.root = function (a) {
    return a.root;
  };

  c.stringXPath = k;
})(PS);

(function (a) {
  a["Effect.Class.Console"] = a["Effect.Class.Console"] || {};
  var c = a["Effect.Class.Console"],
      f = a["Effect.Class"],
      k = a["Effect.Console"];

  c.log = function (a) {
    var b = f.liftEffect(a);
    return function (a) {
      return b(k.log(a));
    };
  };

  c.logShow = function (a) {
    return function (b) {
      var c = f.liftEffect(a),
          d = k.logShow(b);
      return function (a) {
        return c(d(a));
      };
    };
  };
})(PS);

(function (a) {
  function c(a) {
    return function (c) {
      var f = [],
          b;

      for (b in c) {
        hasOwnProperty.call(c, b) && f.push(a(b)(c[b]));
      }

      return f;
    };
  }

  a._copyST = function (a) {
    return function () {
      var c = {},
          f;

      for (f in a) {
        hasOwnProperty.call(a, f) && (c[f] = a[f]);
      }

      return c;
    };
  };

  a.empty = {};

  a.runST = function (a) {
    return a();
  };

  a._lookup = function (a, c, g, b) {
    return g in b ? c(b[g]) : a;
  };

  a._lookupST = function (a, c, g, b) {
    return function () {
      return g in b ? c(b[g]) : a;
    };
  };

  a.keys = Object.keys || c(function (a) {
    return function () {
      return a;
    };
  });
})(PS["Foreign.Object"] = PS["Foreign.Object"] || {});

(function (a) {
  a["new"] = function () {
    return {};
  };

  a.poke = function (a) {
    return function (c) {
      return function (f) {
        return function () {
          f[a] = c;
          return f;
        };
      };
    };
  };

  a["delete"] = function (a) {
    return function (c) {
      return function () {
        delete c[a];
        return c;
      };
    };
  };
})(PS["Foreign.Object.ST"] = PS["Foreign.Object.ST"] || {});

(function (a) {
  a["Foreign.Object.ST"] = a["Foreign.Object.ST"] || {};
  var c = a["Foreign.Object.ST"];
  a = a["Foreign.Object.ST"];
  c["new"] = a["new"];
  c.poke = a.poke;
  c["delete"] = a["delete"];
})(PS);

(function (a) {
  a["Foreign.Object"] = a["Foreign.Object"] || {};

  var c = a["Foreign.Object"],
      f = a["Foreign.Object"],
      k = a["Control.Monad.ST.Internal"],
      g = a["Data.Foldable"],
      b = a["Data.Maybe"],
      e = a["Foreign.Object.ST"],
      d = f._copyST,
      l = function l(a) {
    return function (b) {
      return f.runST(function () {
        var c = d(b)();
        a(c)();
        return c;
      });
    };
  },
      h = a["Data.Function.Uncurried"].runFn4(f._lookup)(b.Nothing.value)(b.Just.create),
      m = function m(a) {
    return function (b) {
      return l(e.poke(a)(b));
    };
  };

  c.lookup = h;

  c.fromFoldableWith = function (a) {
    return function (b) {
      return function (c) {
        return f.runST(function () {
          var d = e["new"]();
          g.for_(k.applicativeST)(a)(c)(function (a) {
            return function () {
              var c = f._lookupST(a.value1, b(a.value1), a.value0, d)();

              return e.poke(a.value0)(c)(d)();
            };
          })();
          return d;
        });
      };
    };
  };

  c.alter = function (a) {
    return function (c) {
      return function (d) {
        var f = a(h(c)(d));
        if (f instanceof b.Nothing) return l(e["delete"](c))(d);
        if (f instanceof b.Just) return m(c)(f.value0)(d);
        throw Error("Failed pattern match at Foreign.Object (line 206, column 15 - line 208, column 25): " + [f.constructor.name]);
      };
    };
  };

  c.empty = f.empty;
  c.keys = f.keys;
})(PS);

(function (a) {
  a["Formless.Data.FormFieldResult"] = a["Formless.Data.FormFieldResult"] || {};
  var c = a["Formless.Data.FormFieldResult"],
      f = a["Data.Either"],
      k = a["Data.Lens.Prism"],
      g = a["Data.Maybe"];

  a = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  var b = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      e = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }();

  c.NotValidated = a;
  c.Error = b;

  c.fromEither = function (a) {
    if (a instanceof f.Left) return new b(a.value0);
    if (a instanceof f.Right) return new e(a.value0);
    throw Error("Failed pattern match at Formless.Data.FormFieldResult (line 44, column 14 - line 46, column 23): " + [a.constructor.name]);
  };

  c.toMaybe = function (a) {
    return a instanceof e ? new g.Just(a.value0) : g.Nothing.value;
  };

  c._Error = function (a) {
    return k["prism'"](b.create)(function (a) {
      return a instanceof b ? new g.Just(a.value0) : g.Nothing.value;
    })(a);
  };
})(PS);

(function (a) {
  a["Formless.Types.Form"] = a["Formless.Types.Form"] || {};
  var c = a["Formless.Types.Form"],
      f = a["Data.Newtype"];

  a = function a(_a15) {
    return _a15;
  };

  var k = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      g = function g(a) {
    return a;
  },
      b = new f.Newtype(function (a) {
    return a;
  }, a),
      e = new f.Newtype(function (a) {
    return a;
  }, function (a) {
    return a;
  }),
      d = new f.Newtype(function (a) {
    return a;
  }, function (a) {
    return a;
  });

  f = new f.Newtype(function (a) {
    return a;
  }, g);
  c.FormProxy = k;
  c.OutputField = a;
  c.FormField = g;
  c.newtypeInputField = d;

  c.eqInputField = function (a) {
    return a;
  };

  c.newtypeOutputField = b;
  c.newtypeInputFunction = e;
  c.newtypeFormField = f;
})(PS);

(function (a) {
  a["Formless.Validation"] = a["Formless.Validation"] || {};
  var c = a["Formless.Validation"],
      f = a["Control.Applicative"],
      k = a["Data.Either"],
      g = a["Data.Function"],
      b = a["Data.Newtype"],
      e = new b.Newtype(function (a) {
    return a;
  }, function (a) {
    return a;
  });

  c.runValidation = function (a) {
    return b.unwrap(e);
  };

  c.hoistFn_ = function (a) {
    return function (b) {
      return g["const"](function () {
        var c = f.pure(a.Applicative0()),
            d = f.pure(k.applicativeEither);
        return function (a) {
          return c(d(b(a)));
        };
      }());
    };
  };

  c.hoistFnE = function (a) {
    return function (b) {
      return function (c) {
        var d = f.pure(a.Applicative0()),
            e = b(c);
        return function (a) {
          return d(e(a));
        };
      };
    };
  };

  c.hoistFnE_ = function (a) {
    return function (b) {
      return g["const"](function () {
        var c = f.pure(a.Applicative0());
        return function (a) {
          return c(b(a));
        };
      }());
    };
  };

  c.newtypeValidation = e;
})(PS);

(function (a) {
  a.copyRecord = function (a) {
    var c = {},
        k;

    for (k in a) {
      ({}).hasOwnProperty.call(a, k) && (c[k] = a[k]);
    }

    return c;
  };

  a.unsafeInsert = function (a) {
    return function (c) {
      return function (f) {
        f[a] = c;
        return f;
      };
    };
  };

  a.unsafeModify = function (a) {
    return function (c) {
      return function (f) {
        f[a] = c(f[a]);
        return f;
      };
    };
  };
})(PS["Record.Builder"] = PS["Record.Builder"] || {});

(function (a) {
  a["Record.Builder"] = a["Record.Builder"] || {};
  var c = a["Record.Builder"],
      f = a["Record.Builder"],
      k = a["Data.Symbol"],
      g = a["Control.Semigroupoid"].semigroupoidFn;
  a = a["Control.Category"].categoryFn;

  c.build = function (a) {
    return function (b) {
      return a(f.copyRecord(b));
    };
  };

  c.insert = function (a) {
    return function (a) {
      return function (a) {
        return function (b) {
          return function (c) {
            return function (d) {
              return f.unsafeInsert(k.reflectSymbol(a)(b))(c)(d);
            };
          };
        };
      };
    };
  };

  c.modify = function (a) {
    return function (a) {
      return function (a) {
        return function (b) {
          return function (c) {
            return function (d) {
              return f.unsafeModify(k.reflectSymbol(a)(b))(c)(d);
            };
          };
        };
      };
    };
  };

  c.semigroupoidBuilder = g;
  c.categoryBuilder = a;
})(PS);

(function (a) {
  a["Formless.Internal.Transform"] = a["Formless.Internal.Transform"] || {};

  var c = a["Formless.Internal.Transform"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Category"],
      e = a["Control.Semigroupoid"],
      d = a["Data.Functor"],
      l = a["Data.Maybe"],
      h = a["Data.Newtype"],
      m = a["Data.Symbol"],
      v = a["Data.Tuple"],
      t = a["Formless.Data.FormFieldResult"],
      n = a["Formless.Types.Form"],
      u = a["Formless.Validation"],
      x = a.Record,
      w = a["Record.Builder"],
      A = a["Record.Unsafe"],
      r = a["Type.Data.RowList"],
      z = function z(a) {
    this.validateAllBuilder = a;
  },
      q = function q(a) {
    this.setFormFieldsTouchedBuilder = a;
  },
      E = function E(a) {
    this.replaceFormFieldInputsBuilder = a;
  },
      K = function K(a) {
    this.modifyAllBuilder = a;
  },
      p = function p(a) {
    this.inputFieldsToFormFieldsBuilder = a;
  },
      G = function G(a) {
    this.formFieldsToInputFieldsBuilder = a;
  },
      F = function F(a) {
    this.formFieldsToMaybeOutputBuilder = a;
  },
      I = function I(a) {
    this.countErrorsImpl = a;
  },
      J = function J(a) {
    this.allTouchedImpl = a;
  };

  a = new q(function (a) {
    return function (a) {
      return b.identity(w.categoryBuilder);
    };
  });
  var C = new E(function (a) {
    return function (a) {
      return function (a) {
        return b.identity(w.categoryBuilder);
      };
    };
  }),
      H = new I(function (a) {
    return function (a) {
      return 0;
    };
  }),
      D = new J(function (a) {
    return function (a) {
      return !0;
    };
  }),
      B = new K(function (a) {
    return function (a) {
      return function (a) {
        return b.identity(w.categoryBuilder);
      };
    };
  }),
      N = new G(function (a) {
    return function (a) {
      return b.identity(w.categoryBuilder);
    };
  }),
      Q = new p(function (a) {
    return function (a) {
      return b.identity(w.categoryBuilder);
    };
  }),
      P = d.flap(d.functorFn)(w.build)({}),
      O = new F(function (a) {
    return function (a) {
      return new l.Just(b.identity(w.categoryBuilder));
    };
  });
  c.fromScratch = P;

  c.allTouched = function (a) {
    return function (a) {
      return function (b) {
        var c = (0, a.allTouchedImpl)(r.RLProxy.value),
            d = h.unwrap(b);
        return function (a) {
          return c(d(a));
        };
      };
    };
  };

  c.countErrors = function (a) {
    return function (a) {
      return function (b) {
        var c = (0, a.countErrorsImpl)(r.RLProxy.value),
            d = h.unwrap(b);
        return function (a) {
          return c(d(a));
        };
      };
    };
  };

  c.setFormFieldsTouched = function (a) {
    return function (a) {
      return function (b) {
        return function (c) {
          c = (0, a.setFormFieldsTouchedBuilder)(r.RLProxy.value)(h.unwrap(b)(c));
          return h.wrap(b)(P(c));
        };
      };
    };
  };

  c.formFieldsToInputFields = function (a) {
    return function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            d = (0, a.formFieldsToInputFieldsBuilder)(r.RLProxy.value)(h.unwrap(c)(d));
            return h.wrap(b)(P(d));
          };
        };
      };
    };
  };

  c.inputFieldsToFormFields = function (a) {
    return function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            d = (0, a.inputFieldsToFormFieldsBuilder)(r.RLProxy.value)(h.unwrap(b)(d));
            return h.wrap(c)(P(d));
          };
        };
      };
    };
  };

  c.formFieldsToMaybeOutputFields = function (a) {
    return function (a) {
      return function (b) {
        return function (c) {
          return function (e) {
            e = (0, c.formFieldsToMaybeOutputBuilder)(r.RLProxy.value)(h.unwrap(a)(e));
            return d.map(l.functorMaybe)(h.wrap(b))(d.map(l.functorMaybe)(P)(e));
          };
        };
      };
    };
  };

  c.replaceFormFieldInputs = function (a) {
    return function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return function (e) {
              e = (0, a.replaceFormFieldInputsBuilder)(h.unwrap(b)(d))(r.RLProxy.value)(h.unwrap(c)(e));
              return h.wrap(c)(P(e));
            };
          };
        };
      };
    };
  };

  c.modifyAll = function (a) {
    return function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return function (e) {
              e = (0, a.modifyAllBuilder)(h.unwrap(b)(d))(r.RLProxy.value)(h.unwrap(c)(e));
              return h.wrap(c)(P(e));
            };
          };
        };
      };
    };
  };

  c.validateAll = function (a) {
    return function (a) {
      return function (b) {
        return function (c) {
          return function (e) {
            return function (f) {
              return function (g) {
                g = (0, b.validateAllBuilder)(h.unwrap(c)(f))(r.RLProxy.value)(h.unwrap(e)(g));
                return d.map(a.Bind1().Apply0().Functor0())(h.wrap(e))(d.map(a.Bind1().Apply0().Functor0())(P)(g));
              };
            };
          };
        };
      };
    };
  };

  c.unsafeModifyInputVariant = function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            var f = function () {
              var b = h.unwrap(a)(d);
              return new v.Tuple(b.type, b.value);
            }(),
                g = function () {
              var a = A.unsafeGet(v.fst(f))(h.unwrap(b)(e));
              return n.FormField({
                input: h.unwrap(n.newtypeInputFunction)(v.snd(f))(a.input),
                touched: a.touched,
                result: c(a.result)
              });
            }();

            return h.wrap(b)(A.unsafeSet(v.fst(f))(g)(h.unwrap(b)(e)));
          };
        };
      };
    };
  };

  c.unsafeRunValidationVariant = function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return function (k) {
              return function (l) {
                var m = h.unwrap(b)(e).type;
                return function () {
                  var b = A.unsafeGet(m)(h.unwrap(c)(l));
                  return g.bind(a.Bind1())(u.runValidation(a)(A.unsafeGet(m)(h.unwrap(d)(k)))(l)(b.input))(function (d) {
                    d = A.unsafeSet(m)(n.FormField({
                      input: b.input,
                      touched: b.touched,
                      result: t.fromEither(d)
                    }))(h.unwrap(c)(l));
                    return f.pure(a.Applicative0())(h.wrap(c)(d));
                  });
                }();
              };
            };
          };
        };
      };
    };
  };

  c.setFormFieldsTouchedNil = a;

  c.setFormFieldsTouchedCons = function (a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return new q(function (c) {
            return function (c) {
              var d = (0, b.setFormFieldsTouchedBuilder)(r.RLProxy.value)(c);
              c = h.over(n.newtypeFormField)(n.newtypeFormField)(n.FormField)(function (a) {
                return {
                  touched: !0,
                  input: a.input,
                  result: a.result
                };
              })(x.get(a)()(m.SProxy.value)(c));
              c = w.insert()()(a)(m.SProxy.value)(c);
              return e.compose(w.semigroupoidBuilder)(c)(d);
            };
          });
        };
      };
    };
  };

  c.inputFieldsToInputNil = N;

  c.inputFieldsToInputCons = function (a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return new G(function (c) {
            return function (c) {
              var d = (0, b.formFieldsToInputFieldsBuilder)(r.RLProxy.value)(c);
              c = x.get(a)()(m.SProxy.value)(c).input;
              c = w.insert()()(a)(m.SProxy.value)(c);
              return e.compose(w.semigroupoidBuilder)(c)(d);
            };
          });
        };
      };
    };
  };

  c.inputFieldsToFormFieldsNil = Q;

  c.inputFieldsToFormFieldsCons = function (a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return new p(function (c) {
            return function (c) {
              var d = (0, b.inputFieldsToFormFieldsBuilder)(r.RLProxy.value)(c);
              c = {
                input: x.get(a)()(m.SProxy.value)(c),
                touched: !1,
                result: t.NotValidated.value
              };
              c = w.insert()()(a)(m.SProxy.value)(c);
              return e.compose(w.semigroupoidBuilder)(c)(d);
            };
          });
        };
      };
    };
  };

  c.formFieldsToMaybeOutputNil = O;

  c.formFieldsToMaybeOutputCons = function (a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return new F(function (c) {
            return function (c) {
              var f = (0, b.formFieldsToMaybeOutputBuilder)(r.RLProxy.value)(c);
              c = d.map(l.functorMaybe)(n.OutputField)(t.toMaybe(h.unwrap(n.newtypeFormField)(x.get(a)()(m.SProxy.value)(c)).result));
              return k.apply(l.applyMaybe)(d.map(l.functorMaybe)(function (b) {
                return function (c) {
                  return e.compose(w.semigroupoidBuilder)(w.insert()()(a)(m.SProxy.value)(b))(c);
                };
              })(c))(f);
            };
          });
        };
      };
    };
  };

  c.nilCountErrors = H;

  c.consCountErrors = function (a) {
    return function (b) {
      return function (b) {
        return new I(function (c) {
          return function (c) {
            var d = h.unwrap(n.newtypeFormField)(x.get(a)()(m.SProxy.value)(c)).result instanceof t.Error ? 1 : 0;
            return d + (0, b.countErrorsImpl)(r.RLProxy.value)(c) | 0;
          };
        });
      };
    };
  };

  c.nilAllTouched = D;

  c.consAllTouched = function (a) {
    return function (b) {
      return function (b) {
        return new J(function (c) {
          return function (c) {
            return h.unwrap(n.newtypeFormField)(x.get(a)()(m.SProxy.value)(c)).touched ? (0, b.allTouchedImpl)(r.RLProxy.value)(c) : !1;
          };
        });
      };
    };
  };

  c.applyToValidationNil = function (a) {
    return new z(function (c) {
      return function (c) {
        return function (c) {
          return f.pure(a.Applicative0())(b.identity(w.categoryBuilder));
        };
      };
    });
  };

  c.applyToValidationCons = function (a) {
    return function (b) {
      return function (c) {
        return function (c) {
          return function (l) {
            return function (l) {
              return function (l) {
                return new z(function (p) {
                  return function (q) {
                    return function (q) {
                      var v = (0, l.validateAllBuilder)(p)(r.RLProxy.value)(q),
                          z = function () {
                        var d = h.unwrap(u.newtypeValidation)(x.get(a)()(m.SProxy.value)(p)),
                            e = h.unwrap(n.newtypeFormField)(x.get(a)()(m.SProxy.value)(q));
                        return g.bind(b.Bind1())(d(h.wrap(c)(q))(e.input))(function (a) {
                          var c = f.pure(b.Applicative0()),
                              d = h.wrap(n.newtypeFormField),
                              g = {},
                              k;

                          for (k in e) {
                            ({}).hasOwnProperty.call(e, k) && (g[k] = e[k]);
                          }

                          g.result = t.fromEither(a);
                          return c(d(g));
                        });
                      }();

                      return k.apply(b.Bind1().Apply0())(d.map(b.Bind1().Apply0().Functor0())(function (b) {
                        return function (c) {
                          return e.compose(w.semigroupoidBuilder)(w.insert()()(a)(m.SProxy.value)(b))(c);
                        };
                      })(z))(v);
                    };
                  };
                });
              };
            };
          };
        };
      };
    };
  };

  c.modifyAllNil = B;

  c.modifyAllCons = function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (d) {
            return function (d) {
              return function (d) {
                return new K(function (f) {
                  return function (g) {
                    return function (g) {
                      var k = (0, d.modifyAllBuilder)(f)(r.RLProxy.value)(g),
                          l = h.unwrap(b)(x.get(a)()(m.SProxy.value)(f));
                      g = x.get(a)()(m.SProxy.value)(g);
                      g = w.insert()()(a)(m.SProxy.value)(h.over(c)(c)(n.FormField)(function (a) {
                        return {
                          input: l(a.input),
                          result: a.result,
                          touched: a.touched
                        };
                      })(g));
                      return e.compose(w.semigroupoidBuilder)(g)(k);
                    };
                  };
                });
              };
            };
          };
        };
      };
    };
  };

  c.replaceFormFieldInputsTouchedNil = C;

  c.replaceFormFieldInputsTouchedCons = function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (d) {
            return function (d) {
              return function (d) {
                return new E(function (f) {
                  return function (g) {
                    return function (g) {
                      var k = (0, d.replaceFormFieldInputsBuilder)(f)(r.RLProxy.value)(g);
                      h.unwrap(c)(x.get(a)()(m.SProxy.value)(g));
                      g = x.get(a)()(m.SProxy.value)(f);
                      g = w.insert()()(a)(m.SProxy.value)(n.FormField({
                        input: h.unwrap(b)(g),
                        touched: !1,
                        result: t.NotValidated.value
                      }));
                      return e.compose(w.semigroupoidBuilder)(g)(k);
                    };
                  };
                });
              };
            };
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Formless.Types.Query"] = a["Formless.Types.Query"] || {};

  var c = a["Formless.Types.Query"],
      f = a["Data.Eq"],
      k = a["Data.Newtype"],
      g = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      b = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      e = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  a = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }();

  var d = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      l = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (b) {
      return function (c) {
        return new a(b, c);
      };
    };

    return a;
  }(),
      h = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      m = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      v = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      t = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      n = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      u = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      x = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      w = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (b) {
      return function (c) {
        return new a(b, c);
      };
    };

    return a;
  }(),
      A = function A(a) {
    return a;
  };

  k = new k.Newtype(function (a) {
    return a;
  }, A);
  f = new f.Eq(function (a) {
    return function (c) {
      return a instanceof g && c instanceof g || a instanceof b && c instanceof b || a instanceof e && c instanceof e ? !0 : !1;
    };
  });
  c.Modify = a;
  c.Validate = d;
  c.ModifyValidate = l;
  c.Reset = h;
  c.SetAll = m;
  c.ModifyAll = v;
  c.ResetAll = t;
  c.ValidateAll = n;
  c.Submit = u;
  c.LoadForm = x;
  c.AndThen = w;
  c.InternalState = A;
  c.Invalid = g;
  c.Incomplete = b;
  c.Valid = e;
  c.newtypeInternalState = k;
  c.eqValidStatus = f;
})(PS);

(function (a) {
  a["Formless.Component"] = a["Formless.Component"] || {};

  var c = a["Control.Applicative"],
      f = a["Control.Bind"],
      k = a["Control.Category"],
      g = a["Data.Either"],
      b = a["Data.Eq"],
      e = a["Data.Maybe"],
      d = a["Data.Newtype"],
      l = a["Formless.Internal.Transform"],
      h = a["Formless.Types.Query"],
      m = function m(a) {
    return function (a) {
      return function (a) {
        return function (n) {
          return function (t) {
            return function (v) {
              return function (w) {
                return function (r) {
                  return function (u) {
                    return function (q) {
                      return function (x) {
                        return function (z) {
                          return function (p) {
                            return function (A) {
                              return function (F) {
                                return function (I) {
                                  return function (J) {
                                    return function (C) {
                                      return function (G) {
                                        return function (D) {
                                          return function (E) {
                                            return function (H) {
                                              return function (B) {
                                                var K = function K(e) {
                                                  var f = l.countErrors()(v)(F)(e.form),
                                                      k = !b.eq(b.eqRec()(a))(d.unwrap(p)(l.formFieldsToInputFields()(t)(p)(F)(e.form)))(d.unwrap(p)(d.unwrap(h.newtypeInternalState)(e.internal).initialInputs));
                                                  return c.pure(E.Applicative0())(g.Left.create(function () {
                                                    return d.unwrap(h.newtypeInternalState)(e.internal).allTouched ? {
                                                      validity: 0 !== e.errors ? h.Invalid.value : h.Valid.value,
                                                      errors: f,
                                                      dirty: k,
                                                      form: e.form,
                                                      internal: e.internal,
                                                      submitAttempts: e.submitAttempts,
                                                      submitting: e.submitting
                                                    } : l.allTouched()(w)(F)(e.form) ? {
                                                      validity: 0 !== e.errors ? h.Invalid.value : h.Valid.value,
                                                      internal: d.over(h.newtypeInternalState)(h.newtypeInternalState)(h.InternalState)(function (a) {
                                                        return {
                                                          allTouched: !0,
                                                          initialInputs: a.initialInputs,
                                                          validators: a.validators
                                                        };
                                                      })(e.internal),
                                                      errors: f,
                                                      dirty: k,
                                                      form: e.form,
                                                      submitAttempts: e.submitAttempts,
                                                      submitting: e.submitting
                                                    } : {
                                                      validity: h.Incomplete.value,
                                                      errors: f,
                                                      dirty: k,
                                                      form: e.form,
                                                      internal: e.internal,
                                                      submitAttempts: e.submitAttempts,
                                                      submitting: e.submitting
                                                    };
                                                  }()));
                                                },
                                                    N = function N(k) {
                                                  var B = {
                                                    submitAttempts: k.submitAttempts + 1 | 0,
                                                    submitting: !0,
                                                    internal: k.internal,
                                                    form: k.form,
                                                    dirty: k.dirty,
                                                    errors: k.errors,
                                                    validity: k.validity
                                                  },
                                                      y = d.unwrap(h.newtypeInternalState)(B.internal);

                                                  k = function () {
                                                    return y.allTouched ? B : {
                                                      form: l.setFormFieldsTouched()(r)(F)(B.form),
                                                      internal: d.over(h.newtypeInternalState)(h.newtypeInternalState)(h.InternalState)(function (a) {
                                                        return {
                                                          allTouched: !0,
                                                          initialInputs: a.initialInputs,
                                                          validators: a.validators
                                                        };
                                                      })(B.internal),
                                                      submitAttempts: B.submitAttempts,
                                                      submitting: B.submitting,
                                                      dirty: B.dirty,
                                                      errors: B.errors,
                                                      validity: B.validity
                                                    };
                                                  }();

                                                  return f.bind(E.Bind1())(m()()(a)(n)(t)(v)(w)(r)(u)(q)(x)(z)(p)(A)(F)(I)(J)(C)(G)(D)(E)(h.ValidateAll.value)(k))(function (a) {
                                                    if (a instanceof g.Right) return c.pure(E.Applicative0())(new g.Right(a.value0));

                                                    if (a instanceof g.Left) {
                                                      var d = {
                                                        submitting: !1,
                                                        dirty: a.value0.dirty,
                                                        errors: a.value0.errors,
                                                        form: a.value0.form,
                                                        internal: a.value0.internal,
                                                        submitAttempts: a.value0.submitAttempts,
                                                        validity: a.value0.validity
                                                      };
                                                      return c.pure(E.Applicative0())(function () {
                                                        if (b.eq(h.eqValidStatus)(d.validity)(h.Valid.value)) {
                                                          var c = l.formFieldsToMaybeOutputFields()(F)(I)(z)(a.value0.form);
                                                          if (c instanceof e.Nothing) return new g.Left(d);
                                                          if (c instanceof e.Just) return new g.Right(c.value0);
                                                          throw Error("Failed pattern match at Formless.Component (line 201, column 16 - line 203, column 36): " + [c.constructor.name]);
                                                        }

                                                        return new g.Left(d);
                                                      }());
                                                    }

                                                    throw Error("Failed pattern match at Formless.Component (line 192, column 5 - line 204, column 31): " + [a.constructor.name]);
                                                  });
                                                };

                                                if (H instanceof h.Modify) return K({
                                                  form: l.unsafeModifyInputVariant(G)(F)(k.identity(k.categoryFn))(H.value0)(B.form),
                                                  internal: B.internal,
                                                  errors: B.errors,
                                                  dirty: B.dirty,
                                                  validity: B.validity,
                                                  submitAttempts: B.submitAttempts,
                                                  submitting: B.submitting
                                                });
                                                if (H instanceof h.Validate) return f.bind(E.Bind1())(l.unsafeRunValidationVariant(E)(D)(F)(J)(H.value0)(d.unwrap(h.newtypeInternalState)(B.internal).validators)(B.form))(function (a) {
                                                  return K({
                                                    form: a,
                                                    internal: B.internal,
                                                    errors: B.errors,
                                                    dirty: B.dirty,
                                                    validity: B.validity,
                                                    submitAttempts: B.submitAttempts,
                                                    submitting: B.submitting
                                                  });
                                                });

                                                if (H instanceof h.ModifyValidate) {
                                                  N = function N(a) {
                                                    var b = d.unwrap(h.newtypeInternalState)(a.internal).validators;
                                                    return f.bind(E.Bind1())(l.unsafeRunValidationVariant(E)(D)(F)(J)(H.value1)(b)(a.form))(function (b) {
                                                      return c.pure(E.Applicative0())({
                                                        form: b,
                                                        internal: a.internal,
                                                        dirty: a.dirty,
                                                        errors: a.errors,
                                                        submitAttempts: a.submitAttempts,
                                                        submitting: a.submitting,
                                                        validity: a.validity
                                                      });
                                                    });
                                                  };

                                                  var M = function M(a) {
                                                    return function (b) {
                                                      return {
                                                        validity: b.validity,
                                                        dirty: b.dirty,
                                                        submitting: b.submitting,
                                                        errors: b.errors,
                                                        submitAttempts: b.submitAttempts,
                                                        form: l.unsafeModifyInputVariant(G)(F)(a)(H.value1)(b.form),
                                                        internal: b.internal
                                                      };
                                                    };
                                                  };

                                                  if (H.value0 instanceof e.Nothing || H.value0 instanceof e.Just) return M = M(k.identity(k.categoryFn))(B), f.bind(E.Bind1())(N(M))(function (a) {
                                                    return K(a);
                                                  });
                                                  throw Error("Failed pattern match at Formless.Component (line 67, column 5 - line 81, column 26): " + [H.value0.constructor.name]);
                                                }

                                                if (H instanceof h.Reset) return K({
                                                  form: l.unsafeModifyInputVariant(G)(F)(k.identity(k.categoryFn))(H.value0)(B.form),
                                                  internal: d.over(h.newtypeInternalState)(h.newtypeInternalState)(h.InternalState)(function (a) {
                                                    return {
                                                      allTouched: !1,
                                                      initialInputs: a.initialInputs,
                                                      validators: a.validators
                                                    };
                                                  })(B.internal),
                                                  errors: B.errors,
                                                  dirty: B.dirty,
                                                  validity: B.validity,
                                                  submitAttempts: B.submitAttempts,
                                                  submitting: B.submitting
                                                });
                                                if (H instanceof h.SetAll) return K({
                                                  form: l.replaceFormFieldInputs()(u)(p)(F)(H.value0)(B.form),
                                                  internal: B.internal,
                                                  errors: B.errors,
                                                  dirty: B.dirty,
                                                  validity: B.validity,
                                                  submitAttempts: B.submitAttempts,
                                                  submitting: B.submitting
                                                });
                                                if (H instanceof h.ModifyAll) return K({
                                                  form: l.modifyAll()(q)(A)(F)(H.value0)(B.form),
                                                  internal: B.internal,
                                                  errors: B.errors,
                                                  dirty: B.dirty,
                                                  validity: B.validity,
                                                  submitAttempts: B.submitAttempts,
                                                  submitting: B.submitting
                                                });
                                                if (H instanceof h.ValidateAll) return f.bind(E.Bind1())(l.validateAll()(E)(x)(J)(F)(d.unwrap(h.newtypeInternalState)(B.internal).validators)(B.form))(function (a) {
                                                  return K({
                                                    form: a,
                                                    internal: B.internal,
                                                    errors: B.errors,
                                                    dirty: B.dirty,
                                                    validity: B.validity,
                                                    submitAttempts: B.submitAttempts,
                                                    submitting: B.submitting
                                                  });
                                                });
                                                if (H instanceof h.Submit) return N(B);
                                                if (H instanceof h.ResetAll) return c.pure(E.Applicative0())(g.Left.create({
                                                  validity: h.Incomplete.value,
                                                  dirty: !1,
                                                  errors: 0,
                                                  submitAttempts: 0,
                                                  submitting: !1,
                                                  form: l.replaceFormFieldInputs()(u)(p)(F)(d.unwrap(h.newtypeInternalState)(B.internal).initialInputs)(B.form),
                                                  internal: d.over(h.newtypeInternalState)(h.newtypeInternalState)(h.InternalState)(function (a) {
                                                    return {
                                                      allTouched: !1,
                                                      initialInputs: a.initialInputs,
                                                      validators: a.validators
                                                    };
                                                  })(B.internal)
                                                }));
                                                if (H instanceof h.LoadForm) return c.pure(E.Applicative0())(g.Left.create({
                                                  validity: h.Incomplete.value,
                                                  dirty: !1,
                                                  errors: 0,
                                                  submitAttempts: 0,
                                                  submitting: !1,
                                                  form: l.replaceFormFieldInputs()(u)(p)(F)(H.value0)(B.form),
                                                  internal: d.over(h.newtypeInternalState)(h.newtypeInternalState)(h.InternalState)(function (a) {
                                                    return {
                                                      allTouched: !1,
                                                      initialInputs: H.value0,
                                                      validators: a.validators
                                                    };
                                                  })(B.internal)
                                                }));
                                                if (H instanceof h.AndThen) return f.bind(E.Bind1())(m()()(a)(n)(t)(v)(w)(r)(u)(q)(x)(z)(p)(A)(F)(I)(J)(C)(G)(D)(E)(H.value0)(B))(function (b) {
                                                  if (b instanceof g.Left) return m()()(a)(n)(t)(v)(w)(r)(u)(q)(x)(z)(p)(A)(F)(I)(J)(C)(G)(D)(E)(H.value1)(b.value0);
                                                  if (b instanceof g.Right) return c.pure(E.Applicative0())(new g.Right(b.value0));
                                                  throw Error("Failed pattern match at Formless.Component (line 136, column 5 - line 138, column 38): " + [b.constructor.name]);
                                                });
                                                throw Error("Failed pattern match at Formless.Component (line 44, column 17 - line 138, column 38): " + [H.constructor.name]);
                                              };
                                            };
                                          };
                                        };
                                      };
                                    };
                                  };
                                };
                              };
                            };
                          };
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  };

  a["Formless.Component"].eval = m;
})(PS);

(function (a) {
  a["Formless.Query"] = a["Formless.Query"] || {};
  var c = a["Formless.Query"],
      f = a["Data.Function"],
      k = a["Data.Maybe"],
      g = a["Data.Newtype"],
      b = a["Data.Variant"],
      e = a["Formless.Types.Form"],
      d = a["Formless.Types.Query"];
  c.submit = d.Submit.value;

  c.set = function (a) {
    return function (c) {
      return function (h) {
        return function (h) {
          return function (k) {
            return new d.Modify(g.wrap(c)(b.inj()(a)(h)(g.wrap(e.newtypeInputFunction)(f["const"](k)))));
          };
        };
      };
    };
  };

  c.setValidate = function (a) {
    return function (c) {
      return function (h) {
        return function (h) {
          return function (l) {
            return new d.ModifyValidate(k.Nothing.value, g.wrap(c)(b.inj()(a)(h)(g.wrap(e.newtypeInputFunction)(f["const"](l)))));
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Formless.Retrieve"] = a["Formless.Retrieve"] || {};

  var c = a["Formless.Retrieve"],
      f = a["Data.Lens.Fold"],
      k = a["Data.Lens.Getter"],
      g = a["Data.Lens.Internal.Forget"],
      b = a["Data.Lens.Iso.Newtype"],
      e = a["Data.Lens.Record"],
      d = a["Data.Maybe.First"],
      l = a["Data.Symbol"],
      h = a["Formless.Data.FormFieldResult"],
      m = a["Formless.Types.Form"],
      v = function v(a) {
    return function (c) {
      return function (d) {
        return function (d) {
          return function (f) {
            var g = b._Newtype(c)(c)(f.Profunctor0()),
                h = e.prop(a)()()(d)(f),
                k = b._Newtype(m.newtypeFormField)(m.newtypeFormField)(f.Profunctor0());

            return function (a) {
              return g(h(k(a)));
            };
          };
        };
      };
    };
  },
      t = function t(a) {
    return function (b) {
      return function (c) {
        return function (c) {
          return function (d) {
            var f = v(a)(b)()(c)(d),
                g = e.prop(new l.IsSymbol(function () {
              return "input";
            }))()()(l.SProxy.value)(d);
            return function (a) {
              return f(g(a));
            };
          };
        };
      };
    };
  },
      n = function n(a) {
    return function (b) {
      return function (c) {
        return function (c) {
          return function (d) {
            var f = v(a)(b)()(c)(d),
                g = e.prop(new l.IsSymbol(function () {
              return "result";
            }))()()(l.SProxy.value)(d);
            return function (a) {
              return f(g(a));
            };
          };
        };
      };
    };
  },
      u = function u(a) {
    return function (b) {
      return function (c) {
        return function (c) {
          return function (d) {
            var e = n(a)(b)()(c)(d.Strong0()),
                f = h._Error(d.Choice1());

            return function (a) {
              return e(f(a));
            };
          };
        };
      };
    };
  };

  c.getInput = function (a) {
    return function (b) {
      return function (c) {
        return function (c) {
          return k.view(t(a)(b)()(c)(g.strongForget));
        };
      };
    };
  };

  c.getError = function (a) {
    return function (b) {
      return function (c) {
        return function (c) {
          return f.preview(u(a)(b)()(c)(g.wanderForget(d.monoidFirst)));
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Heterogeneous.Mapping"] = a["Heterogeneous.Mapping"] || {};

  var c = a["Heterogeneous.Mapping"],
      f = a["Control.Category"],
      k = a["Control.Semigroupoid"],
      g = a["Data.Symbol"],
      b = a["Record.Builder"],
      e = a["Type.Data.RowList"],
      d = function d(a) {
    this.mappingWithIndex = a;
  },
      l = function l(a) {
    this.mapRecordWithIndexBuilder = a;
  },
      h = function h(a) {
    this.hmap = a;
  };

  a = new l(function (a) {
    return function (a) {
      return f.identity(b.categoryBuilder);
    };
  });

  c.hmap = function (a) {
    return a.hmap;
  };

  c.Mapping = function (a) {
    this.mapping = a;
  };

  c.constMapping = function (a) {
    return new d(function (b) {
      return function (c) {
        return (0, a.mapping)(b);
      };
    });
  };

  c.hmapRecord = function (a) {
    return function (a) {
      return new h(function () {
        var c = (0, a.mapRecordWithIndexBuilder)(e.RLProxy.value);
        return function (a) {
          return b.build(c(a));
        };
      }());
    };
  };

  c.mapRecordWithIndexCons = function (a) {
    return function (c) {
      return function (d) {
        return function (f) {
          return function (f) {
            return new l(function (f) {
              return function (f) {
                return k.compose(b.semigroupoidBuilder)(b.modify()()(a)(g.SProxy.value)((0, c.mappingWithIndex)(f)(g.SProxy.value)))((0, d.mapRecordWithIndexBuilder)(e.RLProxy.value)(f));
              };
            });
          };
        };
      };
    };
  };

  c.mapRecordWithIndexNil = a;
})(PS);

(function (a) {
  a["Formless.Transform.Record"] = a["Formless.Transform.Record"] || {};

  var c = a["Formless.Transform.Record"],
      f = a["Data.Newtype"],
      k = a["Heterogeneous.Mapping"],
      g = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      b = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  c.unwrapOutputFields = function (a) {
    return function (c) {
      var d = k.hmap(c)(b.value),
          e = f.unwrap(a);
      return function (a) {
        return d(e(a));
      };
    };
  };

  c.wrapInputFields = function (a) {
    return function (b) {
      var c = f.wrap(a),
          d = k.hmap(b)(g.value);
      return function (a) {
        return c(d(a));
      };
    };
  };

  c.unwrapField = function (a) {
    return new k.Mapping(function (b) {
      return f.unwrap(a);
    });
  };

  c.wrapField = function (a) {
    return new k.Mapping(function (b) {
      return f.wrap(a);
    });
  };
})(PS);

(function (a) {
  a["Formless.Transform.Row"] = a["Formless.Transform.Row"] || {};

  var c = a["Formless.Transform.Row"],
      f = a["Control.Category"],
      k = a["Control.Semigroupoid"],
      g = a["Data.Symbol"],
      b = a["Formless.Internal.Transform"],
      e = a["Record.Builder"],
      d = a["Type.Data.RowList"],
      l = function l(a) {
    this.makeSProxiesBuilder = a;
  };

  a = new l(function (a) {
    return f.identity(e.categoryBuilder);
  });

  c.mkSProxies = function (a) {
    return function (a) {
      return function (a) {
        return function (c) {
          c = (0, a.makeSProxiesBuilder)(d.RLProxy.value);
          return b.fromScratch(c);
        };
      };
    };
  };

  c.makeSProxiesNil = a;

  c.makeSProxiesCons = function (a) {
    return function (b) {
      return function (b) {
        return new l(function (c) {
          c = (0, b.makeSProxiesBuilder)(d.RLProxy.value);
          var f = e.insert()()(a)(g.SProxy.value)(g.SProxy.value);
          return k.compose(e.semigroupoidBuilder)(f)(c);
        });
      };
    };
  };
})(PS);

(function (a) {
  a["Metajelo.CSS.Common.ClassNames"] = a["Metajelo.CSS.Common.ClassNames"] || {};
  a = a["Metajelo.CSS.Common.ClassNames"];
  a.record = "record";
  a.recordId = "recordId";
  a.product = "product";
  a.productList = "productList";
  a.productsHeader = "productsHeader";
  a.products = "products";
  a.location = "location";
  a.sustainability = "sustainability";
  a.missionStatement = "missionStatement";
  a.fundingStatement = "fundingStatement";
  a.identifier = "identifier";
  a.id = "id";
  a.idType = "idType";
  a.relatedId = "relatedId";
  a.relType = "relType";
  a.relatedIdList = "relatedIdList";
  a.relatedIdsHeader = "relatedIdsHeader";
  a.relatedIds = "relatedIds";
  a.basicMetadata = "basicMetadata";
  a.creator = "creator";
  a.pubyear = "pubyear";
  a.title = "title";
  a.resourceId = "resourceId";
  a.resourceType = "resourceType";
  a.resourceTypeGen = "resourceTypeGen";
  a.resourceTypeDescr = "resourceTypeDescr";
  a.resourceMDSource = "resourceMDSource";
  a.institutionName = "institutionName";
  a.institutionId = "institutionId";
  a.institutionType = "institutionType";
  a.institutionContact = "institutionContact";
  a.contactEmail = "contactEmail";
  a.contactType = "contactType";
  a.institutionPolicy = "institutionPolicy";
  a.institutionPolicies = "institutionPolicies";
  a.policy = "policy";
  a.policyType = "policyType";
  a.applies = "applies";
  a.superOrg = "superOrg";
  a.versioning = "versioning";
  a.format = "format";
  a.formatList = "formatList";
  a.url = "url";
})(PS);

(function (a) {
  a["Metajelo.CSS.Common.Util"] = a["Metajelo.CSS.Common.Util"] || {};
  var c = a["Concur.React.Props"],
      f = a["Data.Functor"],
      k = a["Data.Maybe"];

  a["Metajelo.CSS.Common.Util"].cList = function (a) {
    return c.classList(f.map(f.functorArray)(k.Just.create)(a));
  };
})(PS);

(function (a) {
  a["Metajelo.CSS.UI.ClassNamesPrivate"] = a["Metajelo.CSS.UI.ClassNamesPrivate"] || {};
  a = a["Metajelo.CSS.UI.ClassNamesPrivate"];
  a.page = "page";
  a.date = "date";
  a.recPreview = "recPreview";
  a.prodPreview = "prodPreview";
  a.locPreview = "locPreview";
  a.downloadBtn = "downloadBtn";
  a.clipBtn = "clipBtn";
  a.previewButtons = "previewButtons";
})(PS);

(function (a) {
  a["Metajelo.CSS.UI.Util"] = a["Metajelo.CSS.UI.Util"] || {};
  var c = a["Concur.React.Props"];

  a["Metajelo.CSS.UI.Util"].mjUiClass = function (a) {
    return c.className("metajelo-ui_" + a);
  };
})(PS);

(function (a) {
  a["Metajelo.CSS.UI.ClassProps"] = a["Metajelo.CSS.UI.ClassProps"] || {};
  var c = a["Metajelo.CSS.UI.ClassProps"],
      f = a["Metajelo.CSS.Common.ClassNames"],
      k = a["Metajelo.CSS.UI.ClassNamesPrivate"],
      g = a["Metajelo.CSS.UI.Util"];
  a = g.mjUiClass(f.versioning);
  var b = g.mjUiClass(f.url),
      e = g.mjUiClass(f.title),
      d = g.mjUiClass(f.sustainability),
      l = g.mjUiClass(f.superOrg),
      h = g.mjUiClass(f.resourceTypeGen),
      m = g.mjUiClass(f.resourceTypeDescr),
      v = g.mjUiClass(f.resourceType),
      t = g.mjUiClass(f.resourceMDSource),
      n = g.mjUiClass(f.resourceId),
      u = g.mjUiClass(f.relatedIdsHeader),
      x = g.mjUiClass(f.relatedIds),
      w = g.mjUiClass(f.relatedIdList),
      A = g.mjUiClass(f.relatedId),
      r = g.mjUiClass(f.relType),
      z = g.mjUiClass(f.recordId),
      q = g.mjUiClass(f.record),
      E = g.mjUiClass(k.recPreview),
      K = g.mjUiClass(f.pubyear),
      p = g.mjUiClass(f.productsHeader),
      G = g.mjUiClass(f.products),
      F = g.mjUiClass(f.productList),
      I = g.mjUiClass(f.product),
      J = g.mjUiClass(k.prodPreview),
      C = g.mjUiClass(k.previewButtons),
      H = g.mjUiClass(f.policyType),
      D = g.mjUiClass(f.policy),
      B = g.mjUiClass(k.page),
      N = g.mjUiClass(f.missionStatement),
      Q = g.mjUiClass(f.location),
      P = g.mjUiClass(k.locPreview),
      O = g.mjUiClass(f.institutionType),
      M = g.mjUiClass(f.institutionPolicy),
      T = g.mjUiClass(f.institutionPolicies),
      S = g.mjUiClass(f.institutionName),
      y = g.mjUiClass(f.institutionId),
      L = g.mjUiClass(f.institutionContact),
      V = g.mjUiClass(f.identifier),
      R = g.mjUiClass(f.idType),
      X = g.mjUiClass(f.id),
      W = g.mjUiClass(f.fundingStatement),
      Z = g.mjUiClass(f.formatList),
      da = g.mjUiClass(f.format),
      fa = g.mjUiClass(k.downloadBtn),
      U = g.mjUiClass(k.date),
      ia = g.mjUiClass(f.creator),
      ca = g.mjUiClass(f.contactType),
      ja = g.mjUiClass(f.contactEmail);
  k = g.mjUiClass(k.clipBtn);
  var ea = g.mjUiClass(f.basicMetadata);
  f = g.mjUiClass(f.applies);
  c.page = B;
  c.date = U;
  c.recPreview = E;
  c.prodPreview = J;
  c.locPreview = P;
  c.downloadBtn = fa;
  c.clipBtn = k;
  c.previewButtons = C;
  c.record = q;
  c.recordId = z;
  c.product = I;
  c.productList = F;
  c.productsHeader = p;
  c.products = G;
  c.location = Q;
  c.sustainability = d;
  c.missionStatement = N;
  c.fundingStatement = W;
  c.identifier = V;
  c.id = X;
  c.idType = R;
  c.relatedId = A;
  c.relType = r;
  c.relatedIdList = w;
  c.relatedIdsHeader = u;
  c.relatedIds = x;
  c.basicMetadata = ea;
  c.creator = ia;
  c.pubyear = K;
  c.title = e;
  c.resourceId = n;
  c.resourceType = v;
  c.resourceTypeGen = h;
  c.resourceTypeDescr = m;
  c.resourceMDSource = t;
  c.institutionName = S;
  c.institutionId = y;
  c.institutionType = O;
  c.institutionContact = L;
  c.contactEmail = ja;
  c.contactType = ca;
  c.institutionPolicy = M;
  c.institutionPolicies = T;
  c.policy = D;
  c.policyType = H;
  c.applies = f;
  c.superOrg = l;
  c.versioning = a;
  c.format = da;
  c.formatList = Z;
  c.url = b;
})(PS);

(function (a) {
  a["Metajelo.CSS.Web.ClassNamesPrivate"] = a["Metajelo.CSS.Web.ClassNamesPrivate"] || {};
  a = a["Metajelo.CSS.Web.ClassNamesPrivate"];
  a.productGroup = "productGroup";
  a.productCitation = "productCitation";
  a.appliesMaybe = "applies-maybe";
  a.appliesYes = "applies-yes";
  a.appliesNo = "applies-no";
  a.appliesInfo = "applies_info";
  a.idUrl = "idUrl";
  a.errorDisplayBox = "errorDisplayBox";
  a.errorDisplay = "errorDisplay";
})(PS);

(function (a) {
  a["Metajelo.CSS.Web.Util"] = a["Metajelo.CSS.Web.Util"] || {};

  var c = a["Metajelo.CSS.Web.Util"],
      f = a["Concur.React.Props"],
      k = a["Data.Functor"],
      g = a["Metajelo.CSS.Common.Util"],
      b = function b(a) {
    return "metajelo_" + a;
  };

  a = function () {
    var a = k.map(k.functorArray)(b);
    return function (b) {
      return g.cList(a(b));
    };
  }();

  c.mjWebClass = function (a) {
    return f.className("metajelo_" + a);
  };

  c.cList = a;
})(PS);

(function (a) {
  a["Metajelo.CSS.Web.ClassProps"] = a["Metajelo.CSS.Web.ClassProps"] || {};
  var c = a["Metajelo.CSS.Web.ClassProps"],
      f = a["Metajelo.CSS.Common.ClassNames"],
      k = a["Metajelo.CSS.Web.ClassNamesPrivate"],
      g = a["Metajelo.CSS.Web.Util"];
  a = g.mjWebClass(f.versioning);
  g.mjWebClass(f.url);
  var b = g.mjWebClass(f.title),
      e = g.mjWebClass(f.sustainability),
      d = g.mjWebClass(f.superOrg),
      l = g.mjWebClass(f.resourceTypeGen),
      h = g.mjWebClass(f.resourceTypeDescr),
      m = g.mjWebClass(f.resourceType),
      v = g.mjWebClass(f.resourceId),
      t = g.mjWebClass(f.relatedIdsHeader),
      n = g.mjWebClass(f.relatedIdList),
      u = g.mjWebClass(f.relatedId),
      x = g.mjWebClass(f.relType),
      w = g.mjWebClass(f.recordId),
      A = g.mjWebClass(f.record),
      r = g.mjWebClass(f.pubyear),
      z = g.mjWebClass(f.productsHeader),
      q = g.mjWebClass(f.productList),
      E = g.mjWebClass(k.productGroup),
      K = g.mjWebClass(k.productCitation),
      p = g.mjWebClass(f.product),
      G = g.mjWebClass(f.policyType),
      F = g.mjWebClass(f.policy),
      I = g.cList([f.url, f.missionStatement]),
      J = g.mjWebClass(f.institutionType),
      C = g.mjWebClass(f.institutionPolicy),
      H = g.mjWebClass(f.institutionPolicies),
      D = g.mjWebClass(f.institutionName),
      B = g.mjWebClass(f.institutionId),
      N = g.mjWebClass(f.institutionContact),
      Q = g.mjWebClass(f.identifier),
      P = g.cList([f.url, k.idUrl]),
      O = g.mjWebClass(f.idType),
      M = g.cList([f.url, f.fundingStatement]),
      T = g.mjWebClass(k.errorDisplayBox),
      S = g.mjWebClass(k.errorDisplay),
      y = g.mjWebClass(f.creator),
      L = g.mjWebClass(f.contactType),
      V = g.mjWebClass(f.contactEmail);
  f = g.mjWebClass(f.basicMetadata);
  k = g.mjWebClass(k.appliesInfo);
  c.productGroup = E;
  c.productCitation = K;
  c.appliesInfo = k;
  c.idUrl = P;
  c.errorDisplayBox = T;
  c.errorDisplay = S;
  c.record = A;
  c.recordId = w;
  c.product = p;
  c.productList = q;
  c.productsHeader = z;
  c.sustainability = e;
  c.missionStatement = I;
  c.fundingStatement = M;
  c.identifier = Q;
  c.idType = O;
  c.relatedId = u;
  c.relType = x;
  c.relatedIdList = n;
  c.relatedIdsHeader = t;
  c.basicMetadata = f;
  c.creator = y;
  c.pubyear = r;
  c.title = b;
  c.resourceId = v;
  c.resourceType = m;
  c.resourceTypeGen = l;
  c.resourceTypeDescr = h;
  c.institutionName = D;
  c.institutionId = B;
  c.institutionType = J;
  c.institutionContact = N;
  c.contactEmail = V;
  c.contactType = L;
  c.institutionPolicy = C;
  c.institutionPolicies = H;
  c.policy = F;
  c.policyType = G;
  c.superOrg = d;
  c.versioning = a;
})(PS);

(function (a) {
  a._validateURL = function (a) {
    return function (c) {
      if (!c || !/^https?:\/\//.test(c)) return "Unknown or missing protocol format in url: " + c;
      var f = document.createElement("a");
      f.href = c;

      if (a) {
        if (f.username) return "URL " + c + " contains a username: " + f.username;
        if (f.password) return "URL " + c + " contains a password: " + f.password;
      }

      return /\.[^0-9.]/.test(f.hostname) ? /(\s|^\.|\.$)/.test(f.hostname) ? "Hostname '" + f.href + "' contains whitespace in " + c : f.href.toLowerCase().replace(/\/+$/g, "") !== c.toLowerCase().replace(/\/+$/g, "") ? "Unkown error: supplied URL " + c + " doesn't match parsed href " + f.href : "SUCCESS" : "Invalid hostname '" + f.href + "' in " + c;
    };
  };
})(PS["Text.URL.Validate"] = PS["Text.URL.Validate"] || {});

(function (a) {
  a["Text.URL.Validate"] = a["Text.URL.Validate"] || {};
  var c = a["Text.URL.Validate"],
      f = a["Text.URL.Validate"],
      k = a["Data.Either"],
      g = a["Data.Maybe"],
      b = a["Data.Show"],
      e = a["Data.String.NonEmpty.Internal"];
  a = new b.Show(function (a) {
    return b.show(e.showNonEmptyString)(a);
  });

  var d = function d(a) {
    return function (b) {
      var c = "SUCCESS" === b ? !0 : !1;

      if (c) {
        b = e.fromString(a);
        if (b instanceof g.Just) return new k.Right(b.value0);
        if (b instanceof g.Nothing) return new k.Left("Empty URL");
        throw Error("Failed pattern match at Text.URL.Validate (line 54, column 11 - line 56, column 32): " + [b.constructor.name]);
      }

      if (!c) return new k.Left(b);
      throw Error("Failed pattern match at Text.URL.Validate (line 53, column 29 - line 57, column 23): " + [c.constructor.name]);
    };
  };

  c.parsePublicURL = function (a) {
    var b = f._validateURL(!0)(a);

    return d(a)(b);
  };

  c.urlToNEString = function (a) {
    return a;
  };

  c.urlToString = function (a) {
    return e.toString(a);
  };

  c.showURL = a;
})(PS);

(function (a) {
  a["Metajelo.Types"] = a["Metajelo.Types"] || {};

  var c = a["Metajelo.Types"],
      f = a["Data.Bounded"],
      k = a["Data.Enum"],
      g = a["Data.Eq"],
      b = a["Data.Generic.Rep"],
      e = a["Data.Generic.Rep.Bounded"],
      d = a["Data.Generic.Rep.Enum"],
      l = a["Data.Generic.Rep.Eq"],
      h = a["Data.Generic.Rep.Ord"],
      m = a["Data.Generic.Rep.Show"],
      v = a["Data.Ord"],
      t = a["Data.Show"],
      n = a["Data.String.NonEmpty.Internal"],
      u = a["Data.Symbol"],
      x = a["Text.URL.Validate"],
      w = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      A = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      r = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      z = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      q = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      E = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      K = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      p = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      G = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      F = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      I = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      J = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      C = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      H = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      D = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      B = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      N = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Q = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      P = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      O = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      M = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      T = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      S = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      y = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      L = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      V = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      R = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      X = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      W = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Z = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      da = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      fa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      U = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ia = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ca = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ja = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ea = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ha = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      aa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ba = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Y = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      la = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ma = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      pa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      oa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      qa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ka = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ra = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      Ja = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      Aa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Ba = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Ca = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      na = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Ka = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ya = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      za = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Da = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Ea = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Fa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Ga = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      La = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Ma = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Ha = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Na = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Oa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Pa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Ia = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Qa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Ra = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Sa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Ta = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      db = new t.Show(function (a) {
    if (a instanceof Aa) return "commercial";
    if (a instanceof Ba) return "non-profit";
    if (a instanceof Ca) return "governmental";
    throw Error("Failed pattern match at Metajelo.Types (line 237, column 1 - line 240, column 37): " + [a.constructor.name]);
  }),
      eb = new t.Show(function (a) {
    return "dataCustodian";
  }),
      sa = new b.Generic(function (a) {
    if (a instanceof w) return new b.Inl(b.NoArguments.value);
    if (a instanceof A) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (a instanceof r) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (a instanceof z) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (a instanceof q) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (a instanceof E) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (a instanceof K) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (a instanceof p) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (a instanceof G) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (a instanceof F) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (a instanceof I) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (a instanceof J) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (a instanceof C) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (a instanceof H) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 140, column 1 - line 140, column 76): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof b.Inl) return w.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inl) return A.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inl) return r.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inl) return z.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inl) return q.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inl) return E.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return K.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return p.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return G.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return F.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return I.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return J.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return C.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return H.value;
    throw Error("Failed pattern match at Metajelo.Types (line 140, column 1 - line 140, column 76): " + [a.constructor.name]);
  }),
      fb = new t.Show(m.genericShow(sa)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Audiovisual";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Dataset";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Event";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Image";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "InteractiveResource";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Model";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "PhysicalObject";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "ResourceCollection";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Service";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Software";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Sound";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Text";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Workflow";
  })))(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Other";
  }))))))))))))))))),
      ta = new b.Generic(function (a) {
    if (a instanceof D) return new b.Inl(b.NoArguments.value);
    if (a instanceof B) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (a instanceof N) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (a instanceof Q) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (a instanceof P) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (a instanceof O) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (a instanceof M) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (a instanceof T) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (a instanceof S) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (a instanceof y) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (a instanceof L) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (a instanceof V) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (a instanceof R) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (a instanceof X) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (a instanceof W) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (a instanceof Z) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (a instanceof da) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (a instanceof fa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))));
    if (a instanceof U) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))));
    if (a instanceof ia) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))));
    if (a instanceof ca) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))));
    if (a instanceof ja) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))));
    if (a instanceof ea) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))))));
    if (a instanceof ha) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))))));
    if (a instanceof aa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value))))))))))))))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 197, column 1 - line 197, column 62): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof b.Inl) return D.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inl) return B.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inl) return N.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inl) return Q.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inl) return P.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inl) return O.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return M.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return T.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return S.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return y.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return L.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return V.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return R.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return X.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return W.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Z.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return da.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return fa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return U.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ia.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ca.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ja.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ea.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ha.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return aa.value;
    throw Error("Failed pattern match at Metajelo.Types (line 197, column 1 - line 197, column 62): " + [a.constructor.name]);
  }),
      gb = new t.Show(m.genericShow(ta)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsCitedBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Cites";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsSupplementTo";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsSupplementedBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsContinuedBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Continues";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsNewVersionOf";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsPreviousVersionOf";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsPartOf";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "HasPart";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsReferencedBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "References";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsDocumentedBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Documents";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsCompiledBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Compiles";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsVariantFormOf";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsOriginalFormOf";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsIdenticalTo";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "HasMetadata";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsMetadataFor";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Reviews";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsReviewedBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsDerivedFrom";
  })))(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsSourceOf";
  })))))))))))))))))))))))))))),
      ua = new b.Generic(function (a) {
    if (a instanceof ba) return new b.Inl(b.NoArguments.value);
    if (a instanceof Y) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (a instanceof la) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (a instanceof ma) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (a instanceof pa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (a instanceof oa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (a instanceof qa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (a instanceof ka) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))));
    throw Error("Failed pattern match at Metajelo.Types (line 307, column 1 - line 307, column 58): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof b.Inl) return ba.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inl) return Y.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inl) return la.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inl) return ma.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inl) return pa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inl) return oa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return qa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return ka.value;
    throw Error("Failed pattern match at Metajelo.Types (line 307, column 1 - line 307, column 58): " + [a.constructor.name]);
  }),
      hb = new t.Show(function (a) {
    return a instanceof ka ? "Terms of Use" : m.genericShow(ua)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "Access";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "Collection";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "Data";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "Metadata";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "Preservation";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "Submission";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "Quality";
    })))(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "TermsOfUse";
    }))))))))))(a);
  }),
      ib = new b.Generic(function (a) {
    if (a instanceof ra) return new b.Inl(a.value0);
    if (a instanceof Ja) return new b.Inr(a.value0);
    throw Error("Failed pattern match at Metajelo.Types (line 340, column 1 - line 340, column 50): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof b.Inl) return new ra(a.value0);
    if (a instanceof b.Inr) return new Ja(a.value0);
    throw Error("Failed pattern match at Metajelo.Types (line 340, column 1 - line 340, column 50): " + [a.constructor.name]);
  }),
      jb = new t.Show(m.genericShow(ib)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsArgument(n.showNonEmptyString))(new u.IsSymbol(function () {
    return "FreeTextPolicy";
  })))(m.genericShowConstructor(m.genericShowArgsArgument(x.showURL))(new u.IsSymbol(function () {
    return "RefPolicy";
  }))))),
      wa = new b.Generic(function (a) {
    if (a instanceof Aa) return new b.Inl(b.NoArguments.value);
    if (a instanceof Ba) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (a instanceof Ca) return new b.Inr(new b.Inr(b.NoArguments.value));
    throw Error("Failed pattern match at Metajelo.Types (line 236, column 1 - line 236, column 68): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof b.Inl) return Aa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inl) return Ba.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr) return Ca.value;
    throw Error("Failed pattern match at Metajelo.Types (line 236, column 1 - line 236, column 68): " + [a.constructor.name]);
  }),
      xa = new b.Generic(function (a) {
    return b.NoArguments.value;
  }, function (a) {
    return na.value;
  }),
      va = new b.Generic(function (a) {
    if (a instanceof Ka) return new b.Inl(b.NoArguments.value);
    if (a instanceof ya) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (a instanceof za) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (a instanceof Da) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (a instanceof Ea) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (a instanceof Fa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (a instanceof Ga) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (a instanceof La) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (a instanceof Ma) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (a instanceof Ha) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (a instanceof Na) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (a instanceof Oa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (a instanceof Pa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (a instanceof Ia) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (a instanceof Qa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (a instanceof Ra) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (a instanceof Sa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (a instanceof Ta) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 74, column 1 - line 74, column 66): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof b.Inl) return Ka.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inl) return ya.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inl) return za.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inl) return Da.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inl) return Ea.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inl) return Fa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ga.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return La.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ma.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ha.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Na.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Oa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Pa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ia.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Qa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ra.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Sa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return Ta.value;
    throw Error("Failed pattern match at Metajelo.Types (line 74, column 1 - line 74, column 66): " + [a.constructor.name]);
  }),
      kb = new t.Show(function (a) {
    return a instanceof ya ? "arXiv" : a instanceof za ? "bibcode" : m.genericShow(va)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "ARK";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "ArXiv";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "Bibcode";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "DOI";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "EAN13";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "EISSN";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "Handle";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "IGSN";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "ISBN";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "ISSN";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "ISTC";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "LISSN";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "LSID";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "PMID";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "PURL";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "UPC";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "URL";
    })))(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "URN";
    }))))))))))))))))))))(a);
  }),
      lb = new g.Eq(l.genericEq(sa)(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqConstructor(l.genericEqNoArguments)))))))))))))))),
      Ua = new v.Ord(function () {
    return lb;
  }, function (a) {
    return function (b) {
      return h.genericCompare(sa)(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdConstructor(h.genericOrdNoArguments)))))))))))))))(a)(b);
    };
  }),
      mb = new g.Eq(l.genericEq(ta)(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqConstructor(l.genericEqNoArguments))))))))))))))))))))))))))),
      Va = new v.Ord(function () {
    return mb;
  }, function (a) {
    return function (b) {
      return h.genericCompare(ta)(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdConstructor(h.genericOrdNoArguments))))))))))))))))))))))))))(a)(b);
    };
  }),
      Wa = new g.Eq(l.genericEq(ua)(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqConstructor(l.genericEqNoArguments)))))))))),
      Xa = new v.Ord(function () {
    return Wa;
  }, function (a) {
    return function (b) {
      return h.genericCompare(ua)(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdConstructor(h.genericOrdNoArguments)))))))))(a)(b);
    };
  }),
      nb = new g.Eq(l.genericEq(wa)(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqConstructor(l.genericEqNoArguments))))),
      Ya = new v.Ord(function () {
    return nb;
  }, function (a) {
    return function (b) {
      return h.genericCompare(wa)(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdConstructor(h.genericOrdNoArguments))))(a)(b);
    };
  }),
      Za = new g.Eq(l.genericEq(xa)(l.genericEqConstructor(l.genericEqNoArguments))),
      $a = new v.Ord(function () {
    return Za;
  }, function (a) {
    return function (b) {
      return h.genericCompare(xa)(h.genericOrdConstructor(h.genericOrdNoArguments))(a)(b);
    };
  }),
      ob = new g.Eq(l.genericEq(va)(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqConstructor(l.genericEqNoArguments)))))))))))))))))))),
      ab = new v.Ord(function () {
    return ob;
  }, function (a) {
    return function (b) {
      return h.genericCompare(va)(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdConstructor(h.genericOrdNoArguments)))))))))))))))))))(a)(b);
    };
  }),
      pb = new k.Enum(function () {
    return Ua;
  }, d.genericPred(sa)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), d.genericSucc(sa)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      qb = new k.Enum(function () {
    return Va;
  }, d.genericPred(ta)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), d.genericSucc(ta)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      rb = new k.Enum(function () {
    return Xa;
  }, d.genericPred(ua)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), d.genericSucc(ua)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      sb = new k.Enum(function () {
    return Ya;
  }, d.genericPred(wa)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), d.genericSucc(wa)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      tb = new k.Enum(function () {
    return $a;
  }, d.genericPred(xa)(d.genericEnumConstructor(d.genericEnumNoArguments)), d.genericSucc(xa)(d.genericEnumConstructor(d.genericEnumNoArguments))),
      ub = new k.Enum(function () {
    return ab;
  }, d.genericPred(va)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), d.genericSucc(va)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      vb = new f.Bounded(function () {
    return Ua;
  }, e.genericBottom(sa)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(sa)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))))))))),
      wb = new f.Bounded(function () {
    return Va;
  }, e.genericBottom(ta)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(ta)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments))))))))))))))))))))))))))),
      bb = new f.Bounded(function () {
    return Xa;
  }, e.genericBottom(ua)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(ua)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))),
      xb = new k.SmallBounded(function () {
    return bb;
  }),
      yb = new f.Bounded(function () {
    return Ya;
  }, e.genericBottom(wa)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(wa)(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments))))),
      cb = new f.Bounded(function () {
    return $a;
  }, e.genericBottom(xa)(e.genericBottomConstructor(e.genericBottomNoArguments)), e.genericTop(xa)(e.genericTopConstructor(e.genericTopNoArguments))),
      zb = new k.SmallBounded(function () {
    return cb;
  }),
      Ab = new f.Bounded(function () {
    return ab;
  }, e.genericBottom(va)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(va)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))))))))))))),
      Bb = new k.BoundedEnum(function () {
    return vb;
  }, function () {
    return pb;
  }, d.genericCardinality(sa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))), d.genericFromEnum(sa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))), d.genericToEnum(sa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))))))))),
      Cb = new k.BoundedEnum(function () {
    return wb;
  }, function () {
    return qb;
  }, d.genericCardinality(ta)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))))))))))))))))))), d.genericFromEnum(ta)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))))))))))))))))))), d.genericToEnum(ta)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))))))))))),
      Db = new k.BoundedEnum(function () {
    return bb;
  }, function () {
    return rb;
  }, d.genericCardinality(ua)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))), d.genericFromEnum(ua)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))), d.genericToEnum(ua)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))),
      Eb = new k.BoundedEnum(function () {
    return yb;
  }, function () {
    return sb;
  }, d.genericCardinality(wa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))), d.genericFromEnum(wa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))), d.genericToEnum(wa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))),
      Fb = new k.BoundedEnum(function () {
    return cb;
  }, function () {
    return tb;
  }, d.genericCardinality(xa)(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)), d.genericFromEnum(xa)(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)), d.genericToEnum(xa)(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))),
      Gb = new k.BoundedEnum(function () {
    return Ab;
  }, function () {
    return ub;
  }, d.genericCardinality(va)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))), d.genericFromEnum(va)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))), d.genericToEnum(va)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))));

  c.ARK = Ka;
  c.ArXiv = ya;
  c.Bibcode = za;
  c.DOI = Da;
  c.EAN13 = Ea;
  c.EISSN = Fa;
  c.Handle = Ga;
  c.IGSN = La;
  c.ISBN = Ma;
  c.ISSN = Ha;
  c.ISTC = Na;
  c.LISSN = Oa;
  c.LSID = Pa;
  c.PMID = Ia;
  c.PURL = Qa;
  c.UPC = Ra;
  c.URL = Sa;
  c.URN = Ta;
  c.Audiovisual = w;
  c.Dataset = A;
  c.Event = r;
  c.Image = z;
  c.InteractiveResource = q;
  c.Model = E;
  c.PhysicalObject = K;
  c.ResourceCollection = p;
  c.Service = G;
  c.Software = F;
  c.Sound = I;
  c.Text = J;
  c.Workflow = C;
  c.Other = H;
  c.IsCitedBy = D;
  c.Cites = B;
  c.IsSupplementTo = N;
  c.IsSupplementedBy = Q;
  c.IsContinuedBy = P;
  c.Continues = O;
  c.IsNewVersionOf = M;
  c.IsPreviousVersionOf = T;
  c.IsPartOf = S;
  c.HasPart = y;
  c.IsReferencedBy = L;
  c.References = V;
  c.IsDocumentedBy = R;
  c.Documents = X;
  c.IsCompiledBy = W;
  c.Compiles = Z;
  c.IsVariantFormOf = da;
  c.IsOriginalFormOf = fa;
  c.IsIdenticalTo = U;
  c.HasMetadata = ia;
  c.IsMetadataFor = ca;
  c.Reviews = ja;
  c.IsReviewedBy = ea;
  c.IsDerivedFrom = ha;
  c.IsSourceOf = aa;
  c.Commercial = Aa;
  c.NonProfit = Ba;
  c.Governmental = Ca;
  c.DataCustodian = na;
  c.Access = ba;
  c.Collection = Y;
  c.Data = la;
  c.Metadata = ma;
  c.Preservation = pa;
  c.Submission = oa;
  c.Quality = qa;
  c.TermsOfUse = ka;
  c.FreeTextPolicy = ra;
  c.RefPolicy = Ja;
  c.showIdentifierType = kb;
  c.boundedEnumIdentifierType = Gb;
  c.showResourceTypeGeneral = fb;
  c.boundedEnumResourceTypeGeneral = Bb;
  c.showRelationType = gb;
  c.boundedEnumRelationType = Cb;
  c.showInstitutionType = db;
  c.boundedEnumInstitutionType = Eb;
  c.eqInstitutionContactType = Za;
  c.showInstitutionContactType = eb;
  c.boundedEnumInstitutionContactType = Fb;
  c.smallBoundedInstitutionContactType = zb;
  c.showPolicyType = hb;
  c.eqPolicyType = Wa;
  c.boundedEnumPolicyType = Db;
  c.smallBoundedPolicyType = xb;
  c.showPolicy = jb;
})(PS);

(function (a) {
  a["Text.Parsing.StringParser"] = a["Text.Parsing.StringParser"] || {};
  var c = a["Text.Parsing.StringParser"],
      f = a["Control.Alt"],
      k = a["Control.Alternative"],
      g = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      d = a["Control.Monad"],
      l = a["Control.Monad.Rec.Class"],
      h = a["Control.Plus"],
      m = a["Data.Bifunctor"],
      v = a["Data.Boolean"],
      t = a["Data.Either"],
      n = a["Data.Functor"];
  a = a["Data.Show"];

  var u = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }();

  a = new a.Show(function (a) {
    return a.value0;
  });

  var x = new n.Functor(function (a) {
    return function (b) {
      var c = n.map(t.functorEither)(function (b) {
        return {
          result: a(b.result),
          suffix: b.suffix
        };
      });
      return function (a) {
        return c(b(a));
      };
    };
  }),
      w = function w(a) {
    return function (b) {
      return new t.Left({
        pos: b.pos,
        error: new u(a)
      });
    };
  },
      A = new b.Apply(function () {
    return x;
  }, function (a) {
    return function (b) {
      return function (c) {
        return e.bind(t.bindEither)(a(c))(function (a) {
          return e.bind(t.bindEither)(b(a.suffix))(function (b) {
            return g.pure(t.applicativeEither)({
              result: a.result(b.result),
              suffix: b.suffix
            });
          });
        });
      };
    };
  }),
      r = new e.Bind(function () {
    return A;
  }, function (a) {
    return function (b) {
      return function (c) {
        return e.bind(t.bindEither)(a(c))(function (a) {
          return b(a.result)(a.suffix);
        });
      };
    };
  }),
      z = new g.Applicative(function () {
    return A;
  }, function (a) {
    return function (b) {
      return new t.Right({
        result: a,
        suffix: b
      });
    };
  }),
      q = new d.Monad(function () {
    return z;
  }, function () {
    return r;
  });

  b = new l.MonadRec(function () {
    return q;
  }, function (a) {
    return function (b) {
      var c = function c(a) {
        if (a.result instanceof l.Loop) return new l.Loop({
          state: a.result.value0,
          str: a.suffix
        });
        if (a.result instanceof l.Done) return new l.Done({
          result: a.result.value0,
          suffix: a.suffix
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser (line 88, column 7 - line 88, column 70): " + [a.constructor.name]);
      };

      return function (d) {
        return l.tailRecM(l.monadRecEither)(function (b) {
          return n.map(t.functorEither)(c)(a(b.state)(b.str));
        })({
          state: b,
          str: d
        });
      };
    };
  });
  var E = new f.Alt(function () {
    return x;
  }, function (a) {
    return function (b) {
      return function (c) {
        var d = a(c);

        if (d instanceof t.Left) {
          if (c.pos === d.value0.pos) return b(c);
          if (v.otherwise) return new t.Left({
            error: d.value0.error,
            pos: d.value0.pos
          });
        }

        return d;
      };
    };
  }),
      K = new h.Plus(function () {
    return E;
  }, w("No alternative"));
  f = new k.Alternative(function () {
    return z;
  }, function () {
    return K;
  });
  c.ParseError = u;

  c.runParser = function (a) {
    return function (b) {
      return m.bimap(t.bifunctorEither)(function (a) {
        return a.error;
      })(function (a) {
        return a.result;
      })(a({
        str: b,
        pos: 0
      }));
    };
  };

  c.fail = w;

  c["try"] = function (a) {
    return function (b) {
      return m.lmap(t.bifunctorEither)(function (a) {
        return {
          pos: b.pos,
          error: a.error
        };
      })(a(b));
    };
  };

  c.showParseError = a;
  c.functorParser = x;
  c.applyParser = A;
  c.applicativeParser = z;
  c.altParser = E;
  c.alternativeParser = f;
  c.bindParser = r;
  c.monadRecParser = b;
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.Combinators"] = a["Text.Parsing.StringParser.Combinators"] || {};

  var c = a["Text.Parsing.StringParser.Combinators"],
      f = a["Control.Alt"],
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Data.Functor"],
      d = a["Data.NonEmpty"],
      l = a["Data.Unit"],
      h = a["Text.Parsing.StringParser"],
      m = a["Data.List"].manyRec(h.monadRecParser)(h.alternativeParser),
      v = function v(a) {
    return function (b) {
      return new d.NonEmpty(a, b);
    };
  };

  c.many = m;

  c.many1 = function (a) {
    return g.apply(h.applyParser)(e.map(h.functorParser)(v)(a))(m(a));
  };

  c.withError = function (a) {
    return function (b) {
      return f.alt(h.altParser)(a)(h.fail(b));
    };
  };

  c.optional = function (a) {
    return f.alt(h.altParser)(b.bind(h.bindParser)(a)(function (a) {
      return k.pure(h.applicativeParser)(l.unit);
    }))(k.pure(h.applicativeParser)(l.unit));
  };

  c.sepBy1 = function (a) {
    return function (c) {
      return b.bind(h.bindParser)(a)(function (d) {
        return b.bind(h.bindParser)(m(g.applySecond(h.applyParser)(c)(a)))(function (a) {
          return k.pure(h.applicativeParser)(v(d)(a));
        });
      });
    };
  };
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.CodePoints"] = a["Text.Parsing.StringParser.CodePoints"] || {};

  var c = a["Text.Parsing.StringParser.CodePoints"],
      f = a["Control.Applicative"],
      k = a["Control.Bind"],
      g = a["Data.Char"],
      b = a["Data.Either"],
      e = a["Data.Enum"],
      d = a["Data.Maybe"],
      l = a["Data.Show"],
      h = a["Data.String.CodePoints"],
      m = a["Data.Unit"],
      v = a["Text.Parsing.StringParser"],
      t = a["Text.Parsing.StringParser.Combinators"],
      n = function () {
    var a = function () {
      var a = e.fromEnum(h.boundedEnumCodePoint);
      return function (b) {
        return g.fromCharCode(a(b));
      };
    }();

    return function (c) {
      var e = h.codePointAt(c.pos)(c.str);

      if (e instanceof d.Just) {
        var f = a(e.value0);
        if (f instanceof d.Just) return new b.Right({
          result: f.value0,
          suffix: {
            str: c.str,
            pos: c.pos + 1 | 0
          }
        });
        if (f instanceof d.Nothing) return new b.Left({
          pos: c.pos,
          error: v.ParseError.create("CodePoint " + (l.show(h.showCodePoint)(e.value0) + " is not a character"))
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 53, column 16 - line 55, column 100): " + [f.constructor.name]);
      }

      if (e instanceof d.Nothing) return new b.Left({
        pos: c.pos,
        error: new v.ParseError("Unexpected EOF")
      });
      throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 52, column 3 - line 56, column 64): " + [e.constructor.name]);
    };
  }(),
      u = function u(a) {
    return v["try"](k.bind(v.bindParser)(n)(function (b) {
      return a(b) ? f.pure(v.applicativeParser)(b) : v.fail("Character " + (l.show(l.showChar)(b) + " did not satisfy predicate"));
    }));
  };

  c.eof = function (a) {
    return a.pos < h.length(a.str) ? new b.Left({
      pos: a.pos,
      error: new v.ParseError("Expected EOF")
    }) : new b.Right({
      result: m.unit,
      suffix: a
    });
  };

  c.satisfy = u;

  c["char"] = function (a) {
    return t.withError(u(function (b) {
      return b === a;
    }))("Could not match character " + l.show(l.showChar)(a));
  };
})(PS);

(function (a) {
  a["Text.Email.Parser"] = a["Text.Email.Parser"] || {};

  var c = a["Text.Email.Parser"],
      f = a["Control.Alt"],
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Data.Char"],
      d = a["Data.Foldable"],
      l = a["Data.Functor"],
      h = a["Data.List.Types"],
      m = a["Data.Maybe"],
      v = a["Data.Monoid"],
      t = a["Data.String.CodeUnits"],
      n = a["Data.String.Pattern"],
      u = a["Data.Unit"],
      x = a["Text.Parsing.StringParser"],
      w = a["Text.Parsing.StringParser.CodePoints"],
      A = a["Text.Parsing.StringParser.Combinators"],
      r = function (a) {
    var b = m.fromJust();
    return function (a) {
      return b(e.fromCharCode(a));
    };
  }(),
      z = function z(a) {
    return l.map(x.functorParser)(function () {
      var a = d.fold(h.foldableNonEmptyList)(v.monoidString),
          b = l.map(h.functorNonEmptyList)(t.singleton);
      return function (c) {
        return a(b(c));
      };
    }())(A.many1(w.satisfy(a)));
  },
      q = function q(a) {
    return b.discard(b.discardUnit)(x.bindParser)(l["void"](x.functorParser)(a))(function () {
      return b.discard(b.discardUnit)(x.bindParser)(l["void"](x.functorParser)(E(a)))(function () {
        return k.pure(x.applicativeParser)(u.unit);
      });
    });
  },
      E = function E(a) {
    return f.alt(x.altParser)(q(a))(k.pure(x.applicativeParser)(u.unit));
  },
      K = function K(a) {
    return b.discard(b.discardUnit)(x.bindParser)(l["void"](x.functorParser)(w.satisfy(a)))(function () {
      return b.discard(b.discardUnit)(x.bindParser)(l["void"](x.functorParser)(E(w.satisfy(a))))(function () {
        return k.pure(x.applicativeParser)(u.unit);
      });
    });
  },
      p = w["char"](r(0)),
      G = w["char"]("\n");

  a = function a(_a16) {
    return " " === _a16 || "\t" === _a16;
  };

  var F = w.satisfy(a),
      I = K(a),
      J = function J(a) {
    return function (b) {
      return function (c) {
        return c >= a && c <= b;
      };
    };
  };

  a = J(r(33))(r(126));

  var C = w.satisfy(a),
      H = function H(a) {
    return function (b) {
      return t.contains(n.Pattern(t.singleton(b)))(a);
    };
  },
      D = function D(a) {
    return J(r(1))(r(8))(a) || J(r(14))(r(31))(a) || H("\x0B\f\x7F")(a);
  },
      B = function B(a) {
    return J(r(33))(r(39))(a) || J(r(42))(r(91))(a) || J(r(93))(r(126))(a) || D(a);
  },
      N = function N(a) {
    return J(r(33))(r(90))(a) || J(r(94))(r(126))(a) || D(a);
  },
      Q = w.satisfy(D),
      P = w["char"]("\r"),
      O = l["void"](x.functorParser)(g.applySecond(x.applyParser)(P)(G)),
      M = function () {
    var a = q(g.applySecond(x.applyParser)(O)(I)),
        b = g.applySecond(x.applyParser)(I)(A.optional(g.applySecond(x.applyParser)(O)(I)));
    return f.alt(x.altParser)(b)(a);
  }(),
      T = function () {
    var a = b.discard(b.discardUnit)(x.bindParser)(l["void"](x.functorParser)(w["char"]("\\")))(function () {
      return f.alt(x.altParser)(f.alt(x.altParser)(f.alt(x.altParser)(f.alt(x.altParser)(f.alt(x.altParser)(C)(F))(G))(P))(Q))(p);
    });
    return b.bind(x.bindParser)(a)(function (a) {
      return k.pure(x.applicativeParser)("\\" + t.singleton(a));
    });
  }(),
      S = f.alt(x.altParser)(z(function (a) {
    return H(t.singleton(r(33)))(a) || J(r(35))(r(91))(a) || J(r(93))(r(126))(a) || D(a);
  }))(T),
      y = function () {
    var a = b.discard(b.discardUnit)(x.bindParser)(l["void"](x.functorParser)(w["char"]('"')))(function () {
      return b.bind(x.bindParser)(A.many(g.applySecond(x.applyParser)(A.optional(M))(S)))(function (a) {
        return b.discard(b.discardUnit)(x.bindParser)(l["void"](x.functorParser)(A.optional(M)))(function () {
          return b.discard(b.discardUnit)(x.bindParser)(l["void"](x.functorParser)(w["char"]('"')))(function () {
            return k.pure(x.applicativeParser)(a);
          });
        });
      });
    });
    return l.map(x.functorParser)(function (a) {
      return '"' + (d.fold(h.foldableList)(v.monoidString)(a) + '"');
    })(a);
  }(),
      L = b.discard(b.discardUnit)(x.bindParser)(l["void"](x.functorParser)(w["char"]("(")))(function () {
    return b.discard(b.discardUnit)(x.bindParser)(E(f.alt(x.altParser)(f.alt(x.altParser)(f.alt(x.altParser)(K(B))(l["void"](x.functorParser)(T)))(L))(M)))(function () {
      return b.discard(b.discardUnit)(x.bindParser)(l["void"](x.functorParser)(w["char"](")")))(function () {
        return k.pure(x.applicativeParser)(u.unit);
      });
    });
  }),
      V = E(f.alt(x.altParser)(L)(M));

  a = b.discard(b.discardUnit)(x.bindParser)(A.optional(V))(function () {
    return b.discard(b.discardUnit)(x.bindParser)(l["void"](x.functorParser)(w["char"]("[")))(function () {
      return b.bind(x.bindParser)(A.many(g.applySecond(x.applyParser)(A.optional(M))(z(N))))(function (a) {
        return b.discard(b.discardUnit)(x.bindParser)(A.optional(M))(function () {
          return b.discard(b.discardUnit)(x.bindParser)(l["void"](x.functorParser)(w["char"]("]")))(function () {
            return b.discard(b.discardUnit)(x.bindParser)(A.optional(V))(function () {
              return k.pure(x.applicativeParser)("[" + (d.fold(h.foldableList)(v.monoidString)(a) + "]"));
            });
          });
        });
      });
    });
  });

  var R = function () {
    return z(function (a) {
      return "0" <= a && "9" >= a || "a" <= a && "z" >= a || "A" <= a && "Z" >= a || H("!#$%&'*+/=?^_`{|}~-")(a);
    });
  }(),
      X = function () {
    var a = b.discard(b.discardUnit)(x.bindParser)(l["void"](x.functorParser)(A.optional(V)))(function () {
      return b.bind(x.bindParser)(f.alt(x.altParser)(R)(y))(function (a) {
        return b.discard(b.discardUnit)(x.bindParser)(l["void"](x.functorParser)(A.optional(V)))(function () {
          return k.pure(x.applicativeParser)(a);
        });
      });
    });
    a = A.sepBy1(a)(w["char"]("."));
    return l.map(x.functorParser)(d.intercalate(h.foldableNonEmptyList)(v.monoidString)("."))(a);
  }(),
      W = f.alt(x.altParser)(X)(a);

  a = b.bind(x.bindParser)(X)(function (a) {
    return b.bind(x.bindParser)(w["char"]("@"))(function () {
      return b.bind(x.bindParser)(W)(function (c) {
        return b.bind(x.bindParser)(w.eof)(function () {
          return k.pure(x.applicativeParser)({
            localPart: a,
            domainPart: c
          });
        });
      });
    });
  });
  c.addrSpec = a;

  c.toString = function (a) {
    return a.localPart + ("@" + a.domainPart);
  };
})(PS);

(function (a) {
  a["Text.Email.Validate"] = a["Text.Email.Validate"] || {};
  var c = a["Text.Email.Validate"],
      f = a["Data.Bifunctor"],
      k = a["Data.Either"],
      g = a["Data.Show"],
      b = a["Text.Email.Parser"],
      e = a["Text.Parsing.StringParser"];

  a = function () {
    var a = f.lmap(k.bifunctorEither)(g.show(e.showParseError));
    return function (c) {
      c = e.runParser(b.addrSpec)(c);
      return a(c);
    };
  }();

  c.validate = a;
})(PS);

(function (a) {
  a["Metajelo.Validation"] = a["Metajelo.Validation"] || {};

  var c = a["Metajelo.Validation"],
      f = a["Control.Category"],
      k = a["Data.Bifunctor"],
      g = a["Data.Either"],
      b = a["Data.Maybe"],
      e = a["Data.Show"],
      d = a["Data.String.Common"],
      l = a["Data.String.NonEmpty.Internal"],
      h = a["Formless.Validation"],
      m = a["Text.Email.Validate"],
      v = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      t = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      n = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      u = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      x = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      w = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      A = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (b) {
      return function (c) {
        return new a(b, c);
      };
    };

    return a;
  }(),
      r = function r(a) {
    this.toText = a;
  };

  a = new r(f.identity(f.categoryFn));
  r = new r(function (a) {
    if (a instanceof v) return "This field is required.";
    if (a instanceof n) return "Invalid input: " + a.value0;
    if (a instanceof t) return "Email validation error: " + a.value0;
    if (a instanceof u) return "You must enter at least " + (e.show(e.showInt)(a.value0) + " characters.");
    if (a instanceof x) return "You must enter less than " + (e.show(e.showInt)(a.value0) + " characters.");
    if (a instanceof w) return 'Could not parse "' + (a.value0 + '" to a valid integer.');
    if (a instanceof A) return 'This field contains "' + (a.value1 + ('" but must be equal to "' + (a.value0 + '" to validate.')));
    throw Error("Failed pattern match at Metajelo.Validation (line 35, column 1 - line 42, column 126): " + [a.constructor.name]);
  });

  c.toText = function (a) {
    return a.toText;
  };

  c.dummy = function (a) {
    return h.hoistFn_(a)(f.identity(f.categoryFn));
  };

  c.emailFormat = function (a) {
    return h.hoistFnE_(a)(function (a) {
      return k.lmap(g.bifunctorEither)(function (a) {
        return new t(a);
      })(m.validate(a));
    });
  };

  c.readNEStringEi = function (a) {
    a = l.fromString(d.trim(a));
    if (a instanceof b.Just) return new g.Right(a.value0);
    if (a instanceof b.Nothing) return new g.Left("Empty string when NonEmptyString expected.");
    throw Error("Failed pattern match at Metajelo.Validation (line 110, column 22 - line 112, column 63): " + [a.constructor.name]);
  };

  c.toTextFieldError = r;
  c.toTextString = a;
})(PS);

(function (a) {
  a["Metajelo.XPaths.Read"] = a["Metajelo.XPaths.Read"] || {};
  var c = a["Metajelo.XPaths.Read"],
      f = a["Control.Applicative"],
      k = a["Data.Either"],
      g = a["Data.Maybe"],
      b = a["Metajelo.Types"];

  c.readIdentifierType = function (a) {
    return "ARK" === a ? f.pure(k.applicativeEither)(b.ARK.value) : "arXiv" === a ? f.pure(k.applicativeEither)(b.ArXiv.value) : "bibcode" === a ? f.pure(k.applicativeEither)(b.Bibcode.value) : "DOI" === a ? f.pure(k.applicativeEither)(b.DOI.value) : "EAN13" === a ? f.pure(k.applicativeEither)(b.EAN13.value) : "EISSN" === a ? f.pure(k.applicativeEither)(b.EISSN.value) : "Handle" === a ? f.pure(k.applicativeEither)(b.Handle.value) : "IGSN" === a ? f.pure(k.applicativeEither)(b.IGSN.value) : "ISBN" === a ? f.pure(k.applicativeEither)(b.ISBN.value) : "ISSN" === a ? f.pure(k.applicativeEither)(b.ISSN.value) : "ISTC" === a ? f.pure(k.applicativeEither)(b.ISTC.value) : "LISSN" === a ? f.pure(k.applicativeEither)(b.LISSN.value) : "LSID" === a ? f.pure(k.applicativeEither)(b.LSID.value) : "PMID" === a ? f.pure(k.applicativeEither)(b.PMID.value) : "PURL" === a ? f.pure(k.applicativeEither)(b.PURL.value) : "UPC" === a ? f.pure(k.applicativeEither)(b.UPC.value) : "URL" === a ? f.pure(k.applicativeEither)(b.URL.value) : "URN" === a ? f.pure(k.applicativeEither)(b.URN.value) : k.Left.create("Unknown IdentifierType: '" + (a + "'"));
  };

  c.readRelationType = function (a) {
    return "IsCitedBy" === a ? f.pure(k.applicativeEither)(b.IsCitedBy.value) : "Cites" === a ? f.pure(k.applicativeEither)(b.Cites.value) : "IsSupplementTo" === a ? f.pure(k.applicativeEither)(b.IsSupplementTo.value) : "IsSupplementedBy" === a ? f.pure(k.applicativeEither)(b.IsSupplementedBy.value) : "IsContinuedBy" === a ? f.pure(k.applicativeEither)(b.IsContinuedBy.value) : "Continues" === a ? f.pure(k.applicativeEither)(b.Continues.value) : "IsNewVersionOf" === a ? f.pure(k.applicativeEither)(b.IsNewVersionOf.value) : "IsPreviousVersionOf" === a ? f.pure(k.applicativeEither)(b.IsPreviousVersionOf.value) : "IsPartOf" === a ? f.pure(k.applicativeEither)(b.IsPartOf.value) : "HasPart" === a ? f.pure(k.applicativeEither)(b.HasPart.value) : "IsReferencedBy" === a ? f.pure(k.applicativeEither)(b.IsReferencedBy.value) : "References" === a ? f.pure(k.applicativeEither)(b.References.value) : "IsDocumentedBy" === a ? f.pure(k.applicativeEither)(b.IsDocumentedBy.value) : "Documents" === a ? f.pure(k.applicativeEither)(b.Documents.value) : "IsCompiledBy" === a ? f.pure(k.applicativeEither)(b.IsCompiledBy.value) : "Compiles" === a ? f.pure(k.applicativeEither)(b.Compiles.value) : "IsVariantFormOf" === a ? f.pure(k.applicativeEither)(b.IsVariantFormOf.value) : "IsOriginalFormOf" === a ? f.pure(k.applicativeEither)(b.IsOriginalFormOf.value) : "IsIdenticalTo" === a ? f.pure(k.applicativeEither)(b.IsIdenticalTo.value) : "HasMetadata" === a ? f.pure(k.applicativeEither)(b.HasMetadata.value) : "IsMetadataFor" === a ? f.pure(k.applicativeEither)(b.IsMetadataFor.value) : "Reviews" === a ? f.pure(k.applicativeEither)(b.Reviews.value) : "IsReviewedBy" === a ? f.pure(k.applicativeEither)(b.IsReviewedBy.value) : "IsDerivedFrom" === a ? f.pure(k.applicativeEither)(b.IsDerivedFrom.value) : "IsSourceOf" === a ? f.pure(k.applicativeEither)(b.IsSourceOf.value) : k.Left.create("Unknown RelationType: '" + (a + "'"));
  };

  c.readResourceTypeGeneral = function (a) {
    return "Audiovisual" === a ? f.pure(k.applicativeEither)(b.Audiovisual.value) : "Dataset" === a ? f.pure(k.applicativeEither)(b.Dataset.value) : "Event" === a ? f.pure(k.applicativeEither)(b.Event.value) : "Image" === a ? f.pure(k.applicativeEither)(b.Image.value) : "InteractiveResource" === a ? f.pure(k.applicativeEither)(b.InteractiveResource.value) : "Model" === a ? f.pure(k.applicativeEither)(b.Model.value) : "PhysicalObject" === a ? f.pure(k.applicativeEither)(b.PhysicalObject.value) : "ResourceCollection" === a ? f.pure(k.applicativeEither)(b.ResourceCollection.value) : "Service" === a ? f.pure(k.applicativeEither)(b.Service.value) : "Software" === a ? f.pure(k.applicativeEither)(b.Software.value) : "Sound" === a ? f.pure(k.applicativeEither)(b.Sound.value) : "Text" === a ? f.pure(k.applicativeEither)(b.Text.value) : "Workflow" === a ? f.pure(k.applicativeEither)(b.Workflow.value) : "Other" === a ? f.pure(k.applicativeEither)(b.Other.value) : k.Left.create("Unknown ResourceTypeGeneral: '" + (a + "'"));
  };

  c.readInstitutionType = function (a) {
    return "commercial" === a ? f.pure(k.applicativeEither)(b.Commercial.value) : "non-profit" === a ? f.pure(k.applicativeEither)(b.NonProfit.value) : "governmental" === a ? f.pure(k.applicativeEither)(b.Governmental.value) : k.Left.create("Unknown InstitutionType: '" + (a + "'"));
  };

  c.readInstitutionContactType = function (a) {
    return "dataCustodian" === a ? f.pure(k.applicativeEither)(new g.Just(b.DataCustodian.value)) : "" === a ? f.pure(k.applicativeEither)(g.Nothing.value) : k.Left.create("Unknown InstitutionContactType: '" + (a + "'"));
  };

  c.readPolicyType = function (a) {
    return "Access" === a ? f.pure(k.applicativeEither)(new g.Just(b.Access.value)) : "Collection" === a ? f.pure(k.applicativeEither)(new g.Just(b.Collection.value)) : "Data" === a ? f.pure(k.applicativeEither)(new g.Just(b.Data.value)) : "Metadata" === a ? f.pure(k.applicativeEither)(new g.Just(b.Metadata.value)) : "Preservation" === a ? f.pure(k.applicativeEither)(new g.Just(b.Preservation.value)) : "Submission" === a ? f.pure(k.applicativeEither)(new g.Just(b.Submission.value)) : "Quality" === a ? f.pure(k.applicativeEither)(new g.Just(b.Quality.value)) : "Terms of Use" === a ? f.pure(k.applicativeEither)(new g.Just(b.TermsOfUse.value)) : "" === a ? f.pure(k.applicativeEither)(g.Nothing.value) : k.Left.create("Unknown PolicyType: '" + (a + "'"));
  };

  c.readBoolean = function (a) {
    return "0" === a ? f.pure(k.applicativeEither)(!1) : "1" === a ? f.pure(k.applicativeEither)(!0) : "false" === a ? f.pure(k.applicativeEither)(!1) : "true" === a ? f.pure(k.applicativeEither)(!0) : k.Left.create("Invalid xs:boolean value: '" + (a + "'"));
  };
})(PS);

(function (a) {
  a["Metajelo.FormUtil"] = a["Metajelo.FormUtil"] || {};

  var c = a["Metajelo.FormUtil"],
      f = a["Concur.Core.FRP"],
      k = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Props"],
      b = a["Concur.Core.Types"],
      e = a["Concur.React.DOM"],
      d = a["Concur.React.Props"],
      l = a["Control.Applicative"],
      h = a["Control.Apply"],
      m = a["Control.Bind"],
      v = a["Control.Cofree"],
      t = a["Data.Array"],
      n = a["Data.Array.NonEmpty"],
      u = a["Data.Bounded"],
      x = a["Data.Date"],
      w = a["Data.Date.Component"],
      A = a["Data.DateTime"],
      r = a["Data.Either"],
      z = a["Data.Enum"],
      q = a["Data.Eq"],
      E = a["Data.Foldable"],
      K = a["Data.Formatter.DateTime"],
      p = a["Data.Functor"],
      G = a["Data.Generic.Rep"],
      F = a["Data.Generic.Rep.Bounded"],
      I = a["Data.Generic.Rep.Enum"],
      J = a["Data.Generic.Rep.Eq"],
      C = a["Data.Generic.Rep.Ord"],
      H = a["Data.Generic.Rep.Show"],
      D = a["Data.Maybe"],
      B = a["Data.Monoid"],
      N = a["Data.Ord"],
      Q = a["Data.Profunctor.Strong"],
      P = a["Data.Semigroup"],
      O = a["Data.Show"],
      M = a["Data.String.Common"],
      T = a["Data.String.NonEmpty.Internal"],
      S = a["Data.Symbol"],
      y = a["Data.Time"],
      L = a["Data.Time.Component"],
      V = a["Data.Traversable"],
      R = a["Data.Tuple"],
      X = a["Data.Unfoldable1"],
      W = a["Formless.Internal.Transform"],
      Z = a["Formless.Query"],
      da = a["Formless.Retrieve"],
      fa = a["Formless.Types.Query"],
      U = a["Metajelo.Types"],
      ia = a["Metajelo.Validation"],
      ca = a["Metajelo.XPaths.Read"],
      ja = a["Text.URL.Validate"],
      ea = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ha = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      aa = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      ba = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      Y = function Y(a, b, c) {
    this.fromOptionValue = a;
    this.toOptionLabel = b;
    this.toOptionValue = c;
  },
      la = function la(a) {
    if (a instanceof aa || a instanceof ba) return a.value0;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 284, column 1 - line 284, column 34): " + [a.constructor.name]);
  },
      ma = function ma(a) {
    return e.input(k.widgetLiftWidget)([d.value(a), p.map(g.functorProps)(d.unsafeTargetValue)(d.onChange)]);
  },
      pa = function pa(a) {
    return m.bind(v.bindCofree(b.widgetAlternative(B.monoidArray)))(a)(function (a) {
      return l.pure(v.applicativeCofree(b.widgetAlternative(B.monoidArray)))(T.fromString(M.trim(a)));
    });
  },
      oa = function oa(a) {
    return function (b) {
      return b < a ? [] : t.range(a)(b);
    };
  },
      qa = function qa(a) {
    return "FreeTextPolicy" === a ? l.pure(r.applicativeEither)(ea.value) : "RefPolicy" === a ? l.pure(r.applicativeEither)(ha.value) : r.Left.create("Unknown Policy: '" + (a + "'"));
  },
      ka = function ka(a) {
    return function (b) {
      return E.fold(E.foldableMaybe)(B.monoidString)(p.map(D.functorMaybe)(O.show(a))(b));
    };
  };

  a = new Y(function (a) {
    return D.fromJust()(r.hush(ca.readResourceTypeGeneral(a)));
  }, O.show(U.showResourceTypeGeneral), O.show(U.showResourceTypeGeneral));

  var ra = new Y(function (a) {
    return D.fromJust()(r.hush(ca.readRelationType(a)));
  }, O.show(U.showRelationType), O.show(U.showRelationType)),
      Ja = new Y(function (a) {
    return D.fromJust()(r.hush(ca.readInstitutionType(a)));
  }, O.show(U.showInstitutionType), O.show(U.showInstitutionType)),
      Aa = new Y(function (a) {
    return D.fromJust()(r.hush(ca.readIdentifierType(a)));
  }, O.show(U.showIdentifierType), O.show(U.showIdentifierType)),
      Ba = function Ba(a) {
    return a instanceof aa ? !0 : !1;
  },
      Ca = function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return function (f) {
              return function (g) {
                return new A.DateTime(x.canonicalDate(D.fromMaybe(u.bottom(w.boundedYear))(z.toEnum(w.boundedEnumYear)(a)))(D.fromMaybe(u.bottom(w.boundedMonth))(z.toEnum(w.boundedEnumMonth)(b)))(D.fromMaybe(u.bottom(w.boundedDay))(z.toEnum(w.boundedEnumDay)(c))), new y.Time(D.fromMaybe(u.bottom(L.boundedHour))(z.toEnum(L.boundedEnumHour)(d)), D.fromMaybe(u.bottom(L.boundedMinute))(z.toEnum(L.boundedEnumMinute)(e)), D.fromMaybe(u.bottom(L.boundedSecond))(z.toEnum(L.boundedEnumSecond)(f)), D.fromMaybe(u.bottom(L.boundedMillisecond))(z.toEnum(L.boundedEnumMillisecond)(g))));
              };
            };
          };
        };
      };
    };
  }(0)(0)(0)(0)(0)(0)(0),
      na = new G.Generic(function (a) {
    if (a instanceof ea) return new G.Inl(G.NoArguments.value);
    if (a instanceof ha) return new G.Inr(G.NoArguments.value);
    throw Error("Failed pattern match at Metajelo.FormUtil (line 232, column 1 - line 232, column 58): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof G.Inl) return ea.value;
    if (a instanceof G.Inr) return ha.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 232, column 1 - line 232, column 58): " + [a.constructor.name]);
  });

  H = new O.Show(H.genericShow(na)(H.genericShowSum(H.genericShowConstructor(H.genericShowArgsNoArguments)(new S.IsSymbol(function () {
    return "FreeTextPolicy";
  })))(H.genericShowConstructor(H.genericShowArgsNoArguments)(new S.IsSymbol(function () {
    return "RefPolicy";
  })))));
  H = new Y(function () {
    var a = D.fromMaybe(ea.value);
    return function (b) {
      return a(r.hush(qa(b)));
    };
  }(), O.show(H), O.show(H));

  var Ka = new p.Functor(function (a) {
    return function (b) {
      if (b instanceof aa) return aa.create(p.map(D.functorMaybe)(a)(b.value0));
      if (b instanceof ba) return ba.create(p.map(D.functorMaybe)(a)(b.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 271, column 1 - line 273, column 48): " + [a.constructor.name, b.constructor.name]);
    };
  }),
      ya = function ya(a) {
    return function (c) {
      return function (h) {
        return f.step(h)(function () {
          var f = D.isJust(h) ? !0 : !1;
          return m.bind(b.widgetBind)(e.select(b.widgetMultiAlternative(B.monoidArray))(b.widgetShiftMap)([d.value(D.maybe("")(c.toOptionValue)(h)), p.map(g.functorProps)(function () {
            var a = c.fromOptionValue;
            return function (b) {
              return a(d.unsafeTargetValue(b));
            };
          }())(d.onChange)])(t.cons(e.option(b.widgetMultiAlternative(B.monoidArray))(b.widgetShiftMap)([d.disabled(f)])([e.text(k.widgetLiftWidget)("Select ...")]))(p.mapFlipped(p.functorArray)(z.upFromIncluding(a.Enum1())(X.unfoldable1Array)(u.bottom(a.Bounded0())))(function (a) {
            return e.option(b.widgetMultiAlternative(B.monoidArray))(b.widgetShiftMap)([d.value((0, c.toOptionValue)(a))])([e.text(k.widgetLiftWidget)((0, c.toOptionLabel)(a))]);
          }))))(function (d) {
            return l.pure(b.widgetApplicative)(ya(a)(c)(new D.Just(d)));
          });
        }());
      };
    };
  },
      za = function za(a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return E.fold(a)(c)(p.map(b)(d)(e));
          };
        };
      };
    };
  },
      Da = function Da(a) {
    a = za(E.foldableMaybe)(D.functorMaybe)(B.monoidString)(T.toString)(a);
    a = f.debounce(B.monoidArray)(500)(a)(ma);
    return pa(a);
  },
      Ea = function Ea(a) {
    return D.maybe(B.mempty(b.widgetMonoid(B.monoidArray)))(function (c) {
      return e.div(b.widgetMultiAlternative(B.monoidArray))(b.widgetShiftMap)([d.style({
        color: "red"
      })])([e.text(k.widgetLiftWidget)(ia.toText(a)(c))]);
    });
  },
      Fa = new q.Eq(J.genericEq(na)(J.genericEqSum(J.genericEqConstructor(J.genericEqNoArguments))(J.genericEqConstructor(J.genericEqNoArguments)))),
      Ga = new N.Ord(function () {
    return Fa;
  }, function (a) {
    return function (b) {
      return C.genericCompare(na)(C.genericOrdSum(C.genericOrdConstructor(C.genericOrdNoArguments))(C.genericOrdConstructor(C.genericOrdNoArguments)))(a)(b);
    };
  }),
      La = new z.Enum(function () {
    return Ga;
  }, I.genericPred(na)(I.genericEnumSum(I.genericEnumConstructor(I.genericEnumNoArguments))(F.genericTopConstructor(F.genericTopNoArguments))(I.genericEnumConstructor(I.genericEnumNoArguments))(F.genericBottomConstructor(F.genericBottomNoArguments))), I.genericSucc(na)(I.genericEnumSum(I.genericEnumConstructor(I.genericEnumNoArguments))(F.genericTopConstructor(F.genericTopNoArguments))(I.genericEnumConstructor(I.genericEnumNoArguments))(F.genericBottomConstructor(F.genericBottomNoArguments))));

  S = function S(a) {
    return function (b) {
      return b instanceof D.Nothing ? "(None)" : ka(a)(b);
    };
  };

  q = new Y(function (a) {
    return r.hush(ca.readBoolean(a));
  }, S(O.showBoolean), ka(O.showBoolean));
  J = new Y(function () {
    var a = m.join(D.bindMaybe);
    return function (b) {
      return a(r.hush(ca.readInstitutionContactType(b)));
    };
  }(), S(U.showInstitutionContactType), ka(U.showInstitutionContactType));
  U = new Y(function () {
    var a = m.join(D.bindMaybe);
    return function (b) {
      return a(r.hush(ca.readPolicyType(b)));
    };
  }(), S(U.showPolicyType), ka(U.showPolicyType));

  var Ma = function Ma(a) {
    return p.voidRight(b.widgetFunctor)(!a)(e.input(k.widgetLiftWidget)([d._type("checkbox"), d.checked(a), d.onChange]));
  },
      Ha = function Ha(a) {
    var c = Ma(a);
    return f.step(a)(m.bind(b.widgetBind)(c)(function (a) {
      return l.pure(b.widgetApplicative)(Ha(a));
    }));
  },
      Na = new u.Bounded(function () {
    return Ga;
  }, F.genericBottom(na)(F.genericBottomSum(F.genericBottomConstructor(F.genericBottomNoArguments))), F.genericTop(na)(F.genericTopSum(F.genericTopConstructor(F.genericTopNoArguments))));

  F = new z.BoundedEnum(function () {
    return Na;
  }, function () {
    return La;
  }, I.genericCardinality(na)(I.genericBoundedEnumSum(I.genericBoundedEnumConstructor(I.genericBoundedEnumNoArguments))(I.genericBoundedEnumConstructor(I.genericBoundedEnumNoArguments))), I.genericFromEnum(na)(I.genericBoundedEnumSum(I.genericBoundedEnumConstructor(I.genericBoundedEnumNoArguments))(I.genericBoundedEnumConstructor(I.genericBoundedEnumNoArguments))), I.genericToEnum(na)(I.genericBoundedEnumSum(I.genericBoundedEnumConstructor(I.genericBoundedEnumNoArguments))(I.genericBoundedEnumConstructor(I.genericBoundedEnumNoArguments))));

  var Oa = new h.Apply(function () {
    return Ka;
  }, function (a) {
    return function (b) {
      if (a instanceof aa && b instanceof aa || a instanceof aa && b instanceof ba || a instanceof ba && b instanceof aa) return aa.create(h.apply(D.applyMaybe)(a.value0)(b.value0));
      if (a instanceof ba && b instanceof ba) return ba.create(h.apply(D.applyMaybe)(a.value0)(b.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 274, column 1 - line 278, column 63): " + [a.constructor.name, b.constructor.name]);
    };
  }),
      Pa = new l.Applicative(function () {
    return Oa;
  }, function (a) {
    return aa.create(new D.Just(a));
  }),
      Ia = function Ia(a) {
    return function (c) {
      var g = R.snd(c),
          h = R.fst(c),
          n = new aa(D.Nothing.value);

      c = function () {
        var a = N.max(N.ordInt)(0)(h - t.length(g) | 0);
        return P.append(P.semigroupArray)(p.map(p.functorArray)(l.pure(Pa))(g))(p.mapFlipped(p.functorArray)(oa(1)(a))(function (a) {
          return n;
        }));
      }();

      var q = function q(a) {
        return f.step(a)(m.bind(b.widgetBind)(p.voidRight(b.widgetFunctor)(ba.create(la(a)))(e.button(b.widgetMultiAlternative(B.monoidArray))(b.widgetShiftMap)([d.onClick])([e.text(k.widgetLiftWidget)("Delete")])))(function (a) {
          return l.pure(b.widgetApplicative)(q(a));
        }));
      },
          r = function r(c) {
        return e.li_(v.shiftMapCofree(B.monoidArray))([])(m.bind(v.bindCofree(b.widgetAlternative(B.monoidArray)))(a(la(c)))(function (a) {
          return m.bind(v.bindCofree(b.widgetAlternative(B.monoidArray)))(q(new aa(a)))(function (a) {
            return l.pure(v.applicativeCofree(b.widgetAlternative(B.monoidArray)))(a);
          });
        }));
      },
          u = function u(a) {
        if (a instanceof ba) return f.step(new ba(D.Nothing.value))(B.mempty(b.widgetMonoid(B.monoidArray)));
        if (a instanceof aa) return r(a);
        throw Error("Failed pattern match at Metajelo.FormUtil (line 305, column 23 - line 307, column 35): " + [a.constructor.name]);
      };

      return e.div_(v.shiftMapCofree(B.monoidArray))([])(m.bind(v.bindCofree(b.widgetAlternative(B.monoidArray)))(function (a) {
        return function (c) {
          return f.loopS(B.monoidArray)(new R.Tuple(a, c))(function (a) {
            return e.div_(v.shiftMapCofree(B.monoidArray))([])(function () {
              R.fst(a);
              var c = R.snd(a);
              return m.bind(v.bindCofree(b.widgetAlternative(B.monoidArray)))(f.step(0)(p.voidRight(b.widgetFunctor)(l.pure(v.applicativeCofree(b.widgetAlternative(B.monoidArray)))(1))(e.button(b.widgetMultiAlternative(B.monoidArray))(b.widgetShiftMap)([d.onClick])([e.text(k.widgetLiftWidget)("Add item")]))))(function (a) {
                return m.bind(v.bindCofree(b.widgetAlternative(B.monoidArray)))(V.traverse(V.traversableArray)(v.applicativeCofree(b.widgetAlternative(B.monoidArray)))(u)(c))(function (c) {
                  c = t.filter(Ba)(c);
                  var d = t.length(c) + a | 0,
                      e = p.mapFlipped(p.functorArray)(oa(1)(a))(function (a) {
                    return n;
                  });
                  return l.pure(v.applicativeCofree(b.widgetAlternative(B.monoidArray)))(R.Tuple.create(d)(P.append(P.semigroupArray)(c)(e)));
                });
              });
            }());
          });
        };
      }(h)(c))(function (a) {
        return l.pure(v.applicativeCofree(b.widgetAlternative(B.monoidArray)))(Q.second(Q.strongFn)(function () {
          var a = p.map(p.functorArray)(la);
          return function (b) {
            return t.catMaybes(a(b));
          };
        }())(a));
      }));
    };
  };

  c.menu = function (a) {
    return function (c) {
      return function (f) {
        return function (h) {
          return function (l) {
            return function (l) {
              return function (m) {
                return function (m) {
                  return function (n) {
                    return e.select(b.widgetMultiAlternative(B.monoidArray))(b.widgetShiftMap)([d.defaultValue((0, c.toOptionValue)(da.getInput(a)(h)()(n)(m))), p.map(g.functorProps)(function () {
                      var b = Z.set(a)(l)()(n),
                          e = c.fromOptionValue;
                      return function (a) {
                        return b(e(d.unsafeTargetValue(a)));
                      };
                    }())(d.onChange)])(p.mapFlipped(p.functorArray)(z.upFromIncluding(f.Enum1())(X.unfoldable1Array)(u.bottom(f.Bounded0())))(function (a) {
                      return e.option(b.widgetMultiAlternative(B.monoidArray))(b.widgetShiftMap)([d.value((0, c.toOptionValue)(a))])([e.text(k.widgetLiftWidget)((0, c.toOptionLabel)(a))]);
                    }));
                  };
                };
              };
            };
          };
        };
      };
    };
  };

  c.menuSignal = ya;
  c.textInput = Da;

  c.urlInput = function (a) {
    if (a instanceof r.Left) var c = "";else if (a instanceof r.Right) c = T.toString(ja.urlToNEString(a.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 167, column 15 - line 169, column 48): " + [a.constructor.name]);
    if (a instanceof r.Left) var d = a.value0;else if (a instanceof r.Right) d = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 163, column 15 - line 165, column 20): " + [a.constructor.name]);
    return m.bind(v.bindCofree(b.widgetAlternative(B.monoidArray)))(Da(T.fromString(c)))(function (a) {
      var c = m.bind(v.bindCofree(b.widgetAlternative(B.monoidArray))),
          e = l.pure(v.applicativeCofree(b.widgetAlternative(B.monoidArray)));
      if (a instanceof D.Nothing) a = new r.Left(d);else if (a instanceof D.Just) a = ja.parsePublicURL(T.toString(a.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 154, column 19 - line 156, column 46): " + [a.constructor.name]);
      return c(e(a))(function (a) {
        return m.discard(m.discardUnit)(v.bindCofree(b.widgetAlternative(B.monoidArray)))(f.display(function () {
          if (a instanceof r.Right) return B.mempty(b.widgetMonoid(B.monoidArray));
          if (a instanceof r.Left) return Ea(ia.toTextString)(new D.Just(a.value0));
          throw Error("Failed pattern match at Metajelo.FormUtil (line 157, column 13 - line 159, column 40): " + [a.constructor.name]);
        }()))(function () {
          return l.pure(v.applicativeCofree(b.widgetAlternative(B.monoidArray)))(a);
        });
      });
    });
  };

  c.checkBoxS = Ha;
  c.FreeTextPolicy = ea;
  c.RefPolicy = ha;

  c.formSaveButton = function (a) {
    a = a.dirty ? [d.onClick] : [d.disabled(!0)];
    return e.button(b.widgetMultiAlternative(B.monoidArray))(b.widgetShiftMap)(a)([e.text(k.widgetLiftWidget)("Save")]);
  };

  c.arrayView = Ia;

  c.nonEmptyArrayView = function (a) {
    return function (c) {
      return m.bind(v.bindCofree(b.widgetAlternative(B.monoidArray)))(Ia(a)(Q.second(Q.strongFn)(za(E.foldableMaybe)(D.functorMaybe)(B.monoidArray)(n.toArray))(c)))(function (a) {
        return l.pure(v.applicativeCofree(b.widgetAlternative(B.monoidArray)))(Q.second(Q.strongFn)(n.fromArray)(a));
      });
    };
  };

  c.errorDisplay = Ea;

  c.initFormState = function (a) {
    return function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return function (e) {
              return {
                validity: fa.Incomplete.value,
                dirty: !1,
                submitting: !1,
                errors: 0,
                submitAttempts: 0,
                form: W.inputFieldsToFormFields()(a)(b)(c)(d),
                internal: {
                  initialInputs: d,
                  validators: e,
                  allTouched: !1
                }
              };
            };
          };
        };
      };
    };
  };

  c.formatXsdDate = function (a) {
    var b = K.formatDateTime("YYYY-MM-DD")(a);
    return function () {
      if (b instanceof r.Left) return new r.Left(b.value0);

      if (b instanceof r.Right) {
        var a = T.fromString(b.value0);
        if (a instanceof D.Nothing) return new r.Left("Empty Date output from formatXsdDate");
        if (a instanceof D.Just) return new r.Right(a.value0);
        throw Error("Failed pattern match at Metajelo.FormUtil (line 397, column 27 - line 399, column 30): " + [a.constructor.name]);
      }

      throw Error("Failed pattern match at Metajelo.FormUtil (line 395, column 15 - line 399, column 30): " + [b.constructor.name]);
    }();
  };

  c.initDate = Ca;
  c.isOptionMaybeBoolean = q;
  c.isOptionIdentifierType = Aa;
  c.isOptionInstitutionType = Ja;
  c.isOptionMaybeInstitutionContactType = J;
  c.isOptionMaybePolicyType = U;
  c.isOptionRelationType = ra;
  c.isOptionResourceTypeGeneral = a;
  c.eqPolPolType = Fa;
  c.boundedEnumPolPolType = F;
  c.isOptionPolPolType = H;
})(PS);

(function (a) {
  a["Metajelo.View"] = a["Metajelo.View"] || {};

  var c = a["Metajelo.View"],
      f = a["Concur.Core.LiftWidget"],
      k = a["Concur.Core.Types"],
      g = a["Concur.React.DOM"],
      b = a["Concur.React.Props"],
      e = a["Control.Alt"],
      d = a["Control.Bind"],
      l = a["Control.Category"],
      h = a["Data.Array"],
      m = a["Data.Array.NonEmpty"],
      v = a["Data.Array.NonEmpty.Internal"],
      t = a["Data.Foldable"],
      n = a["Data.Functor"],
      u = a["Data.HeytingAlgebra"],
      x = a["Data.Maybe"],
      w = a["Data.Monoid"],
      A = a["Data.Profunctor.Strong"],
      r = a["Data.Semigroup"],
      z = a["Data.Show"],
      q = a["Data.String.CodePoints"],
      E = a["Data.String.NonEmpty.Internal"],
      K = a["Data.String.Utils"],
      p = a["Data.Unfoldable"],
      G = a["Data.Unfoldable1"],
      F = a["Foreign.Object"],
      I = a["Metajelo.CSS.Common.ClassNames"],
      J = a["Metajelo.CSS.Web.ClassNamesPrivate"],
      C = a["Metajelo.CSS.Web.ClassProps"],
      H = a["Metajelo.CSS.Web.Util"],
      D = a["Metajelo.Types"],
      B = a["Text.Email.Parser"],
      N = a["Text.URL.Validate"],
      Q = function () {
    var a = n.map(n.functorArray)(q.singleton);
    return function (b) {
      return a(q.toCodePointArray(b));
    };
  }(),
      P = function P(a) {
    var b = g.text(a);
    return function (a) {
      return b(E.toString(a));
    };
  },
      O = g["span'"](k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([g.text(f.widgetLiftWidget)(" ")]),
      M = function () {
    var a = t.intercalate(t.foldableArray)(w.monoidArray)([O]),
        b = n.map(n.functorArray)(G.singleton(G.unfoldable1Array));
    return function (c) {
      return a(b(c));
    };
  }(),
      T = function T(a) {
    return g.div(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.institutionPolicy])(M([function (a) {
      var b = function () {
        if (a instanceof x.Nothing) return {
          text: "May apply to product (unverified)",
          cls: J.appliesMaybe
        };
        if (a instanceof x.Just && a.value0) return {
          text: "Applies to product",
          cls: J.appliesYes
        };
        if (a instanceof x.Just && !a.value0) return {
          text: "Does not apply to product",
          cls: J.appliesNo
        };
        throw Error("Failed pattern match at Metajelo.View (line 258, column 10 - line 261, column 75): " + [a.constructor.name]);
      }();

      return g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([H.cList([I.applies, b.cls])])([function (a) {
        return g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.appliesInfo])([g.text(f.widgetLiftWidget)(a)]);
      }(b.text)]);
    }(a.appliesToProduct), t.foldMap(t.foldableMaybe)(k.widgetMonoid(w.monoidArray))(function (a) {
      return g["span'"](k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.policyType])([g.text(f.widgetLiftWidget)(z.show(D.showPolicyType)(a))]), g.text(f.widgetLiftWidget)(" Policy:")]);
    })(a.policyType), function (a) {
      var c = g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.policy]),
          d = G.singleton(G.unfoldable1Array);
      if (a instanceof D.FreeTextPolicy) a = P(f.widgetLiftWidget)(a.value0);else if (a instanceof D.RefPolicy) a = N.urlToString(a.value0), a = g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(a)])([g.text(f.widgetLiftWidget)(a)]);else throw Error("Failed pattern match at Metajelo.View (line 251, column 5 - line 254, column 40): " + [a.constructor.name]);
      return c(d(a));
    }(a.policy)]));
  },
      S = function S(a) {
    return g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.institutionName])([P(f.widgetLiftWidget)(a.institutionName)]);
  },
      y = function y(a) {
    return function (a) {
      return t.foldMap(t.foldableMaybe)(w.monoidArray)(l.identity(l.categoryFn))(h.init(a));
    };
  },
      L = function L(a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            var f = F.fromFoldableWith(a)(r.append(d)),
                g = n.map(b)(A.fanout(l.categoryFn)(A.strongFn)(e)(G.singleton(c)));
            return function (a) {
              return f(g(a));
            };
          };
        };
      };
    };
  },
      V = function V(a) {
    var c = B.toString(a.emailAddress),
        d = g.text(f.widgetLiftWidget);
    if (a.contactType instanceof x.Nothing) a = ".";else if (a.contactType instanceof x.Just) a = " (" + (z.show(D.showInstitutionContactType)(a.contactType.value0) + ").");else throw Error("Failed pattern match at Metajelo.View (line 185, column 24 - line 187, column 41): " + [a.contactType.constructor.name]);
    d = d(a);
    return g.span_(k.widgetShiftMap)([C.institutionContact])(e.alt(k.widgetAlt(w.monoidArray))(e.alt(k.widgetAlt(w.monoidArray))(g["span'"](k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([g.text(f.widgetLiftWidget)("Institution Contact: ")]))(g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.contactEmail, b.href("mailto:" + c)])([g.text(f.widgetLiftWidget)(c)])))(g.span_(k.widgetShiftMap)([C.contactType])(d)));
  },
      R = function R(a) {
    return g["cite'"](k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([P(f.widgetLiftWidget)(a)]);
  },
      X = function X(a) {
    if (a.idType instanceof D.ARK) return g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(E.toString(a.id))])([R(a.id)]);

    if (a.idType instanceof D.ArXiv) {
      var c = "https://arxiv.org/abs/" + E.toString(a.id);
      return g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(c)])([R(a.id)]);
    }

    if (a.idType instanceof D.Bibcode) return c = "https://ui.adsabs.harvard.edu/abs/" + (E.toString(a.id) + "/abstract"), g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(c)])([R(a.id)]);
    if (a.idType instanceof D.DOI) return c = "https://doi.org/" + E.toString(a.id), g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(c)])([R(a.id)]);
    if (a.idType instanceof D.EAN13) return R(a.id);
    if (a.idType instanceof D.EISSN) return c = "https://www.worldcat.org/ISSN/" + E.toString(a.id), g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(c)])([R(a.id)]);
    if (a.idType instanceof D.Handle) return c = "http://hdl.handle.net/" + E.toString(a.id), g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(c)])([R(a.id)]);
    if (a.idType instanceof D.IGSN) return c = "http://igsn.org/" + E.toString(a.id), g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(c)])([R(a.id)]);
    if (a.idType instanceof D.ISBN) return R(a.id);
    if (a.idType instanceof D.ISSN) return c = "https://www.worldcat.org/ISSN/" + E.toString(a.id), g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(c)])([R(a.id)]);
    if (a.idType instanceof D.ISTC) return R(a.id);
    if (a.idType instanceof D.LISSN) return c = "https://www.worldcat.org/ISSN/" + E.toString(a.id), g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(c)])([R(a.id)]);
    if (a.idType instanceof D.LSID) return c = "http://www.lsid.info/resolver/?lsid=" + E.toString(a.id), g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(c)])([R(a.id)]);
    if (a.idType instanceof D.PMID) return c = "https://www.ncbi.nlm.nih.gov/pubmed/" + E.toString(a.id), g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(c)])([R(a.id)]);
    if (a.idType instanceof D.PURL) return g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(E.toString(a.id))])([R(a.id)]);
    if (a.idType instanceof D.UPC) return R(a.id);
    if (a.idType instanceof D.URL) return g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(E.toString(a.id))])([R(a.id)]);
    if (a.idType instanceof D.URN) return R(a.id);
    throw Error("Failed pattern match at Metajelo.View (line 207, column 1 - line 207, column 47): " + [a.constructor.name]);
  },
      W = function W(a) {
    return g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.identifier])([g.span_(k.widgetShiftMap)([C.idType])(g.text(f.widgetLiftWidget)(z.show(D.showIdentifierType)(a.idType))), g.span_(k.widgetShiftMap)([C.idUrl])(X(a))]);
  },
      Z = function Z(a) {
    return g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.relatedId])([g.span_(k.widgetShiftMap)([C.relType])(g.text(f.widgetLiftWidget)(z.show(D.showRelationType)(a.relType))), O, W({
      id: a.id,
      idType: a.idType
    })]);
  },
      da = function da(a) {
    return function (b) {
      return function (c) {
        if (b) return a;

        if (t.any(t.foldableArray)(u.heytingAlgebraBoolean)(function (b) {
          return K.endsWith(b)(a);
        })([";", ".", ","])) {
          var d = Q(a);
          return K.fromCharArray(y(w.monoidString)(d)) + c;
        }

        return a + c;
      };
    };
  },
      fa = function fa(a) {
    var c = S(a),
        d = g["span'"](k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([g.text(f.widgetLiftWidget)("("), g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.institutionId])([W(a.institutionID)]), g.text(f.widgetLiftWidget)("; "), g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.institutionType])([g.text(f.widgetLiftWidget)(z.show(D.showInstitutionType)(a.institutionType))]), g.text(f.widgetLiftWidget)(da(")")(x.isNothing(a.superOrganizationName))(","))]);
    if (a.superOrganizationName instanceof x.Nothing) var e = w.mempty(k.widgetMonoid(w.monoidArray));else if (a.superOrganizationName instanceof x.Just) e = g["span'"](k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([g.text(f.widgetLiftWidget)("a member of "), g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.superOrg])([g.text(f.widgetLiftWidget)(da(E.toString(a.superOrganizationName.value0))(!1)("."))])]);else throw Error("Failed pattern match at Metajelo.View (line 147, column 7 - line 153, column 10): " + [a.superOrganizationName.constructor.name]);
    return M([c, d, e, V(a.institutionContact), g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.sustainability])([g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.missionStatement, b.href(N.urlToString(a.institutionSustainability.missionStatementURL))])([g.text(f.widgetLiftWidget)("Mission Statement")]), g.text(f.widgetLiftWidget)("; "), g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.fundingStatement, b.href(N.urlToString(a.institutionSustainability.fundingStatementURL))])([g.text(f.widgetLiftWidget)("Funding Statement")]), g.text(f.widgetLiftWidget)(".")]), g.ul(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.institutionPolicies])(n.map(n.functorArray)(function (a) {
      return g["li'"](k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([T(a)]);
    })(m.toArray(a.institutionPolicies))), function (a) {
      if (a) a = "Versioned";else {
        if (a) throw Error("Failed pattern match at Metajelo.View (line 174, column 14 - line 176, column 31): " + [a.constructor.name]);
        a = "Unversioned";
      }
      return g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.versioning])([g.text(f.widgetLiftWidget)(a)]);
    }(a.versioning)]);
  },
      U = function U(a) {
    if (a.resourceID instanceof x.Just) var b = g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.resourceId])([W(a.resourceID.value0), g.text(f.widgetLiftWidget)(".")]);else if (a.resourceID instanceof x.Nothing) b = w.mempty(k.widgetMonoid(w.monoidArray));else throw Error("Failed pattern match at Metajelo.View (line 125, column 17 - line 127, column 24): " + [a.resourceID.constructor.name]);
    var c = [g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.basicMetadata, C.creator])([P(f.widgetLiftWidget)(a.basicMetadata.creator)]), g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.basicMetadata, C.pubyear])([P(f.widgetLiftWidget)(a.basicMetadata.publicationYear)]), g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.basicMetadata, C.title])([g.text(f.widgetLiftWidget)(da(E.toString(a.basicMetadata.title))(x.isNothing(a.resourceID))(","))])];
    b = r.append(r.semigroupArray)(c)([g["span'"](k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([S(a.location), g.text(f.widgetLiftWidget)(".")]), b]);
    return g.div(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.product])(M(r.append(r.semigroupArray)([g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.productCitation])([g["cite'"](k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)(M(b))])])(fa(a.location))));
  };

  c.spacify = M;

  c.mkRecordWidget = function (a) {
    var b = function () {
      var b = n.map(v.functorNonEmptyArray)(function (a) {
        return g.li(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.relatedId])([a]);
      })(n.map(v.functorNonEmptyArray)(Z)(a.relatedIdentifiers));
      return g.ul(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.relatedIdList])(m.toArray(b));
    }(),
        c = L(v.foldableNonEmptyArray)(v.functorNonEmptyArray)(v.unfoldable1NonEmptyArray)(v.semigroupNonEmptyArray)(function (a) {
      return z.show(D.showResourceTypeGeneral)(a.resourceType.generalType) + (": " + a.resourceType.description);
    })(a.supplementaryProducts),
        l = function l(a) {
      a = d.join(d.bindArray)(p.fromMaybe(p.unfoldableArray)(n.map(x.functorMaybe)(m.toArray)(F.lookup(a)(c))));
      var b = g.span_(k.widgetShiftMap)([C.resourceType])(t.fold(t.foldableMaybe)(k.widgetMonoid(w.monoidArray))(n.mapFlipped(x.functorMaybe)(h.head(a))(function (a) {
        return e.alt(k.widgetAlt(w.monoidArray))(e.alt(k.widgetAlt(w.monoidArray))(g.span_(k.widgetShiftMap)([C.resourceTypeGen])(g.text(f.widgetLiftWidget)(z.show(D.showResourceTypeGeneral)(a.resourceType.generalType))))(g.span_(k.widgetShiftMap)([C.resourceTypeDescr])(g.text(f.widgetLiftWidget)(a.resourceType.description))))(g["br'"](f.widgetLiftWidget));
      })));
      return g["div'"](k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)(h.cons(b)(n.map(n.functorArray)(U)(a)));
    };

    z.show(D.showIdentifierType)(a.identifier.idType);
    return g.div(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.record])([g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.productsHeader])([g.span_(k.widgetShiftMap)([C.recordId])(W(a.identifier))]), g.ul(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.productList])(n.map(n.functorArray)(function (a) {
      return g.li_(k.widgetShiftMap)([C.productGroup])(l(a));
    })(F.keys(c))), g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.relatedIdsHeader])([]), b]);
  };

  c.mkSupplementaryProductWidget = U;
  c.locElems = fa;
  c.contactWidg = V;
  c.ipolicyWidg = T;
})(PS);

(function (a) {
  a["Metajelo.Forms.InstitutionContact"] = a["Metajelo.Forms.InstitutionContact"] || {};

  var c = a["Metajelo.Forms.InstitutionContact"],
      f = a["Concur.Core.FRP"],
      k = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Props"],
      b = a["Concur.Core.Types"],
      e = a["Concur.React.DOM"],
      d = a["Concur.React.Props"],
      l = a["Control.Applicative"],
      h = a["Control.Bind"],
      m = a["Control.Cofree"],
      v = a["Data.Either"],
      t = a["Data.Enum"],
      n = a["Data.Eq"],
      u = a["Data.Foldable"],
      x = a["Data.Functor"],
      w = a["Data.Maybe"],
      A = a["Data.Monoid"],
      r = a["Data.Newtype"],
      z = a["Data.Symbol"],
      q = a["Formless.Component"],
      E = a["Formless.Internal.Transform"],
      K = a["Formless.Query"],
      p = a["Formless.Retrieve"],
      G = a["Formless.Transform.Record"],
      F = a["Formless.Transform.Row"],
      I = a["Formless.Types.Form"],
      J = a["Heterogeneous.Mapping"],
      C = a["Metajelo.CSS.UI.ClassProps"],
      H = a["Metajelo.FormUtil"],
      D = a["Metajelo.Types"],
      B = a["Metajelo.Validation"],
      N = a["Metajelo.View"],
      Q = a["Text.Email.Parser"],
      P = {
    email1: B.emailFormat(b.widgetMonad),
    contactType: B.dummy(b.widgetMonad)
  },
      O = function O(a) {
    return function (a) {
      return function (b) {
        return F.mkSProxies()(a)(b)(I.FormProxy.value);
      };
    };
  },
      M = new r.Newtype(function (a) {
    return a;
  }, function (a) {
    return a;
  }),
      T = {
    email1: "",
    contactType: w.Nothing.value
  },
      S = function S(a) {
    if (a instanceof w.Nothing) return T;
    if (a instanceof w.Just) return {
      email1: Q.toString(a.value0.emailAddress),
      contactType: a.value0.contactType
    };
    throw Error("Failed pattern match at Metajelo.Forms.InstitutionContact (line 49, column 1 - line 49, column 57): " + [a.constructor.name]);
  },
      y = function y(a) {
    return h.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(A.monoidArray))(b.widgetShiftMap)([e.input(k.widgetLiftWidget)([C.contactEmail, d.defaultValue(p.getInput(new z.IsSymbol(function () {
      return "email1";
    }))(M)()(O()(M)(F.makeSProxiesCons(new z.IsSymbol(function () {
      return "contactType";
    }))()(F.makeSProxiesCons(new z.IsSymbol(function () {
      return "email1";
    }))()(F.makeSProxiesNil))).email1)(a.form)), x.map(g.functorProps)(function () {
      var a = K.setValidate(new z.IsSymbol(function () {
        return "email1";
      }))(M)()(O()(M)(F.makeSProxiesCons(new z.IsSymbol(function () {
        return "contactType";
      }))()(F.makeSProxiesCons(new z.IsSymbol(function () {
        return "email1";
      }))()(F.makeSProxiesNil))).email1);
      return function (b) {
        return a(d.unsafeTargetValue(b));
      };
    }())(d.onChange)]), H.errorDisplay(B.toTextFieldError)(p.getError(new z.IsSymbol(function () {
      return "email1";
    }))(M)()(O()(M)(F.makeSProxiesCons(new z.IsSymbol(function () {
      return "contactType";
    }))()(F.makeSProxiesCons(new z.IsSymbol(function () {
      return "email1";
    }))()(F.makeSProxiesNil))).email1)(a.form)), e.span_(b.widgetShiftMap)([C.contactType])(H.menu(new z.IsSymbol(function () {
      return "contactType";
    }))(H.isOptionMaybeInstitutionContactType)(t.boundedEnumMaybe(D.smallBoundedInstitutionContactType)(D.boundedEnumInstitutionContactType))(M)()(M)()(a.form)(O()(M)(F.makeSProxiesCons(new z.IsSymbol(function () {
      return "contactType";
    }))()(F.makeSProxiesCons(new z.IsSymbol(function () {
      return "email1";
    }))()(F.makeSProxiesNil))).contactType)), e["div'"](b.widgetMultiAlternative(A.monoidArray))(b.widgetShiftMap)([x.voidRight(b.widgetFunctor)(K.submit)(H.formSaveButton(a))])]))(function (c) {
      return h.bind(b.widgetBind)(q.eval()()(n.eqRowCons(n.eqRowCons(n.eqRowNil)()(new z.IsSymbol(function () {
        return "email1";
      }))(I.eqInputField(n.eqString)))()(new z.IsSymbol(function () {
        return "contactType";
      }))(I.eqInputField(w.eqMaybe(D.eqInstitutionContactType))))(E.inputFieldsToFormFieldsCons(new z.IsSymbol(function () {
        return "contactType";
      }))()(E.inputFieldsToFormFieldsCons(new z.IsSymbol(function () {
        return "email1";
      }))()(E.inputFieldsToFormFieldsNil)())())(E.inputFieldsToInputCons(new z.IsSymbol(function () {
        return "contactType";
      }))()(E.inputFieldsToInputCons(new z.IsSymbol(function () {
        return "email1";
      }))()(E.inputFieldsToInputNil)())())(E.consCountErrors(new z.IsSymbol(function () {
        return "contactType";
      }))()(E.consCountErrors(new z.IsSymbol(function () {
        return "email1";
      }))()(E.nilCountErrors)))(E.consAllTouched(new z.IsSymbol(function () {
        return "contactType";
      }))()(E.consAllTouched(new z.IsSymbol(function () {
        return "email1";
      }))()(E.nilAllTouched)))(E.setFormFieldsTouchedCons(new z.IsSymbol(function () {
        return "contactType";
      }))()(E.setFormFieldsTouchedCons(new z.IsSymbol(function () {
        return "email1";
      }))()(E.setFormFieldsTouchedNil)())())(E.replaceFormFieldInputsTouchedCons(new z.IsSymbol(function () {
        return "contactType";
      }))(I.newtypeInputField)(I.newtypeFormField)()()()(E.replaceFormFieldInputsTouchedCons(new z.IsSymbol(function () {
        return "email1";
      }))(I.newtypeInputField)(I.newtypeFormField)()()()(E.replaceFormFieldInputsTouchedNil)))(E.modifyAllCons(new z.IsSymbol(function () {
        return "contactType";
      }))(I.newtypeInputFunction)(I.newtypeFormField)()()()(E.modifyAllCons(new z.IsSymbol(function () {
        return "email1";
      }))(I.newtypeInputFunction)(I.newtypeFormField)()()()(E.modifyAllNil)))(E.applyToValidationCons(new z.IsSymbol(function () {
        return "contactType";
      }))(b.widgetMonad)()(M)()()(E.applyToValidationCons(new z.IsSymbol(function () {
        return "email1";
      }))(b.widgetMonad)()(M)()()(E.applyToValidationNil(b.widgetMonad))))(E.formFieldsToMaybeOutputCons(new z.IsSymbol(function () {
        return "contactType";
      }))()(E.formFieldsToMaybeOutputCons(new z.IsSymbol(function () {
        return "email1";
      }))()(E.formFieldsToMaybeOutputNil)())())(M)(M)(M)(M)(M)(M)(M)(M)(b.widgetMonad)(c)(a))(function (a) {
        if (a instanceof v.Left) return y(a.value0);
        if (a instanceof v.Right) return a = G.unwrapOutputFields(M)(J.hmapRecord()(J.mapRecordWithIndexCons(new z.IsSymbol(function () {
          return "contactType";
        }))(J.constMapping(G.unwrapField(I.newtypeOutputField)))(J.mapRecordWithIndexCons(new z.IsSymbol(function () {
          return "email1";
        }))(J.constMapping(G.unwrapField(I.newtypeOutputField)))(J.mapRecordWithIndexNil)()())()()))(a.value0), l.pure(b.widgetApplicative)({
          emailAddress: a.email1,
          contactType: a.contactType
        });
        throw Error("Failed pattern match at Metajelo.Forms.InstitutionContact (line 75, column 3 - line 79, column 70): " + [a.constructor.name]);
      });
    });
  };

  c.contactSignal = function (a) {
    var c = function c(a) {
      return f.step(a)(h.bind(b.widgetBind)(l.pure(b.widgetApplicative)(G.wrapInputFields(M)(J.hmapRecord()(J.mapRecordWithIndexCons(new z.IsSymbol(function () {
        return "contactType";
      }))(J.constMapping(G.wrapField(I.newtypeInputField)))(J.mapRecordWithIndexCons(new z.IsSymbol(function () {
        return "email1";
      }))(J.constMapping(G.wrapField(I.newtypeInputField)))(J.mapRecordWithIndexNil)()())()()))(S(a))))(function (d) {
        return h.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(A.monoidArray))(b.widgetShiftMap)([y(H.initFormState()(E.inputFieldsToFormFieldsCons(new z.IsSymbol(function () {
          return "contactType";
        }))()(E.inputFieldsToFormFieldsCons(new z.IsSymbol(function () {
          return "email1";
        }))()(E.inputFieldsToFormFieldsNil)())())(M)(M)(d)(P)), u.foldMap(u.foldableMaybe)(b.widgetMonoid(A.monoidArray))(N.contactWidg)(a)]))(function (a) {
          return l.pure(b.widgetApplicative)(c(new w.Just(a)));
        });
      }));
    };

    return e.div_(m.shiftMapCofree(A.monoidArray))([C.institutionContact])(c(a));
  };
})(PS);

(function (a) {
  a["Metajelo.Forms.InstitutionPolicy"] = a["Metajelo.Forms.InstitutionPolicy"] || {};

  var c = a["Metajelo.Forms.InstitutionPolicy"],
      f = a["Concur.Core.FRP"],
      k = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Props"],
      b = a["Concur.Core.Types"],
      e = a["Concur.React.DOM"],
      d = a["Concur.React.Props"],
      l = a["Control.Applicative"],
      h = a["Control.Bind"],
      m = a["Control.Cofree"],
      v = a["Data.Either"],
      t = a["Data.Enum"],
      n = a["Data.Eq"],
      u = a["Data.Foldable"],
      x = a["Data.Functor"],
      w = a["Data.Maybe"],
      A = a["Data.Monoid"],
      r = a["Data.Show"],
      z = a["Data.String.NonEmpty.Internal"],
      q = a["Data.Symbol"],
      E = a["Effect.Class"],
      K = a["Effect.Class.Console"],
      p = a["Formless.Component"],
      G = a["Formless.Internal.Transform"],
      F = a["Formless.Query"],
      I = a["Formless.Retrieve"],
      J = a["Formless.Transform.Record"],
      C = a["Formless.Transform.Row"],
      H = a["Formless.Types.Form"],
      D = a["Formless.Validation"],
      B = a["Heterogeneous.Mapping"],
      N = a["Metajelo.CSS.UI.ClassProps"],
      Q = a["Metajelo.FormUtil"],
      P = a["Metajelo.Types"],
      O = a["Metajelo.Validation"],
      M = a["Metajelo.View"],
      T = a["Text.URL.Validate"],
      S = function S(a) {
    return function (a) {
      return function (b) {
        return C.mkSProxies()(a)(b)(H.FormProxy.value);
      };
    };
  },
      y = new a["Data.Newtype"].Newtype(function (a) {
    return a;
  }, function (a) {
    return a;
  }),
      L = function L(a) {
    return h.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(A.monoidArray))(b.widgetShiftMap)([e.span_(b.widgetShiftMap)([N.policy])(Q.menu(new q.IsSymbol(function () {
      return "polPolType";
    }))(Q.isOptionPolPolType)(Q.boundedEnumPolPolType)(y)()(y)()(a.form)(S()(y)(C.makeSProxiesCons(new q.IsSymbol(function () {
      return "appliesToProd";
    }))()(C.makeSProxiesCons(new q.IsSymbol(function () {
      return "polPolType";
    }))()(C.makeSProxiesCons(new q.IsSymbol(function () {
      return "policy";
    }))()(C.makeSProxiesCons(new q.IsSymbol(function () {
      return "policyType";
    }))()(C.makeSProxiesNil))))).polPolType)), e.input(k.widgetLiftWidget)([d.defaultValue(I.getInput(new q.IsSymbol(function () {
      return "policy";
    }))(y)()(S()(y)(C.makeSProxiesCons(new q.IsSymbol(function () {
      return "appliesToProd";
    }))()(C.makeSProxiesCons(new q.IsSymbol(function () {
      return "polPolType";
    }))()(C.makeSProxiesCons(new q.IsSymbol(function () {
      return "policy";
    }))()(C.makeSProxiesCons(new q.IsSymbol(function () {
      return "policyType";
    }))()(C.makeSProxiesNil))))).policy)(a.form)), x.map(g.functorProps)(function () {
      var a = F.setValidate(new q.IsSymbol(function () {
        return "policy";
      }))(y)()(S()(y)(C.makeSProxiesCons(new q.IsSymbol(function () {
        return "appliesToProd";
      }))()(C.makeSProxiesCons(new q.IsSymbol(function () {
        return "polPolType";
      }))()(C.makeSProxiesCons(new q.IsSymbol(function () {
        return "policy";
      }))()(C.makeSProxiesCons(new q.IsSymbol(function () {
        return "policyType";
      }))()(C.makeSProxiesNil))))).policy);
      return function (b) {
        return a(d.unsafeTargetValue(b));
      };
    }())(d.onChange)]), Q.errorDisplay(O.toTextString)(I.getError(new q.IsSymbol(function () {
      return "policy";
    }))(y)()(S()(y)(C.makeSProxiesCons(new q.IsSymbol(function () {
      return "appliesToProd";
    }))()(C.makeSProxiesCons(new q.IsSymbol(function () {
      return "polPolType";
    }))()(C.makeSProxiesCons(new q.IsSymbol(function () {
      return "policy";
    }))()(C.makeSProxiesCons(new q.IsSymbol(function () {
      return "policyType";
    }))()(C.makeSProxiesNil))))).policy)(a.form)), e.span_(b.widgetShiftMap)([N.policyType])(Q.menu(new q.IsSymbol(function () {
      return "policyType";
    }))(Q.isOptionMaybePolicyType)(t.boundedEnumMaybe(P.smallBoundedPolicyType)(P.boundedEnumPolicyType))(y)()(y)()(a.form)(S()(y)(C.makeSProxiesCons(new q.IsSymbol(function () {
      return "appliesToProd";
    }))()(C.makeSProxiesCons(new q.IsSymbol(function () {
      return "polPolType";
    }))()(C.makeSProxiesCons(new q.IsSymbol(function () {
      return "policy";
    }))()(C.makeSProxiesCons(new q.IsSymbol(function () {
      return "policyType";
    }))()(C.makeSProxiesNil))))).policyType)), e.span_(b.widgetShiftMap)([N.applies])(Q.menu(new q.IsSymbol(function () {
      return "appliesToProd";
    }))(Q.isOptionMaybeBoolean)(t.boundedEnumMaybe(t.smallBoundedBoolean)(t.boundedEnumBoolean))(y)()(y)()(a.form)(S()(y)(C.makeSProxiesCons(new q.IsSymbol(function () {
      return "appliesToProd";
    }))()(C.makeSProxiesCons(new q.IsSymbol(function () {
      return "polPolType";
    }))()(C.makeSProxiesCons(new q.IsSymbol(function () {
      return "policy";
    }))()(C.makeSProxiesCons(new q.IsSymbol(function () {
      return "policyType";
    }))()(C.makeSProxiesNil))))).appliesToProd)), e["div'"](b.widgetMultiAlternative(A.monoidArray))(b.widgetShiftMap)([x.voidRight(b.widgetFunctor)(F.submit)(Q.formSaveButton(a))])]))(function (c) {
      return h.bind(b.widgetBind)(p.eval()()(n.eqRowCons(n.eqRowCons(n.eqRowCons(n.eqRowCons(n.eqRowNil)()(new q.IsSymbol(function () {
        return "policyType";
      }))(H.eqInputField(w.eqMaybe(P.eqPolicyType))))()(new q.IsSymbol(function () {
        return "policy";
      }))(H.eqInputField(n.eqString)))()(new q.IsSymbol(function () {
        return "polPolType";
      }))(H.eqInputField(Q.eqPolPolType)))()(new q.IsSymbol(function () {
        return "appliesToProd";
      }))(H.eqInputField(w.eqMaybe(n.eqBoolean))))(G.inputFieldsToFormFieldsCons(new q.IsSymbol(function () {
        return "appliesToProd";
      }))()(G.inputFieldsToFormFieldsCons(new q.IsSymbol(function () {
        return "polPolType";
      }))()(G.inputFieldsToFormFieldsCons(new q.IsSymbol(function () {
        return "policy";
      }))()(G.inputFieldsToFormFieldsCons(new q.IsSymbol(function () {
        return "policyType";
      }))()(G.inputFieldsToFormFieldsNil)())())())())(G.inputFieldsToInputCons(new q.IsSymbol(function () {
        return "appliesToProd";
      }))()(G.inputFieldsToInputCons(new q.IsSymbol(function () {
        return "polPolType";
      }))()(G.inputFieldsToInputCons(new q.IsSymbol(function () {
        return "policy";
      }))()(G.inputFieldsToInputCons(new q.IsSymbol(function () {
        return "policyType";
      }))()(G.inputFieldsToInputNil)())())())())(G.consCountErrors(new q.IsSymbol(function () {
        return "appliesToProd";
      }))()(G.consCountErrors(new q.IsSymbol(function () {
        return "polPolType";
      }))()(G.consCountErrors(new q.IsSymbol(function () {
        return "policy";
      }))()(G.consCountErrors(new q.IsSymbol(function () {
        return "policyType";
      }))()(G.nilCountErrors)))))(G.consAllTouched(new q.IsSymbol(function () {
        return "appliesToProd";
      }))()(G.consAllTouched(new q.IsSymbol(function () {
        return "polPolType";
      }))()(G.consAllTouched(new q.IsSymbol(function () {
        return "policy";
      }))()(G.consAllTouched(new q.IsSymbol(function () {
        return "policyType";
      }))()(G.nilAllTouched)))))(G.setFormFieldsTouchedCons(new q.IsSymbol(function () {
        return "appliesToProd";
      }))()(G.setFormFieldsTouchedCons(new q.IsSymbol(function () {
        return "polPolType";
      }))()(G.setFormFieldsTouchedCons(new q.IsSymbol(function () {
        return "policy";
      }))()(G.setFormFieldsTouchedCons(new q.IsSymbol(function () {
        return "policyType";
      }))()(G.setFormFieldsTouchedNil)())())())())(G.replaceFormFieldInputsTouchedCons(new q.IsSymbol(function () {
        return "appliesToProd";
      }))(H.newtypeInputField)(H.newtypeFormField)()()()(G.replaceFormFieldInputsTouchedCons(new q.IsSymbol(function () {
        return "polPolType";
      }))(H.newtypeInputField)(H.newtypeFormField)()()()(G.replaceFormFieldInputsTouchedCons(new q.IsSymbol(function () {
        return "policy";
      }))(H.newtypeInputField)(H.newtypeFormField)()()()(G.replaceFormFieldInputsTouchedCons(new q.IsSymbol(function () {
        return "policyType";
      }))(H.newtypeInputField)(H.newtypeFormField)()()()(G.replaceFormFieldInputsTouchedNil)))))(G.modifyAllCons(new q.IsSymbol(function () {
        return "appliesToProd";
      }))(H.newtypeInputFunction)(H.newtypeFormField)()()()(G.modifyAllCons(new q.IsSymbol(function () {
        return "polPolType";
      }))(H.newtypeInputFunction)(H.newtypeFormField)()()()(G.modifyAllCons(new q.IsSymbol(function () {
        return "policy";
      }))(H.newtypeInputFunction)(H.newtypeFormField)()()()(G.modifyAllCons(new q.IsSymbol(function () {
        return "policyType";
      }))(H.newtypeInputFunction)(H.newtypeFormField)()()()(G.modifyAllNil)))))(G.applyToValidationCons(new q.IsSymbol(function () {
        return "appliesToProd";
      }))(b.widgetMonad)()(y)()()(G.applyToValidationCons(new q.IsSymbol(function () {
        return "polPolType";
      }))(b.widgetMonad)()(y)()()(G.applyToValidationCons(new q.IsSymbol(function () {
        return "policy";
      }))(b.widgetMonad)()(y)()()(G.applyToValidationCons(new q.IsSymbol(function () {
        return "policyType";
      }))(b.widgetMonad)()(y)()()(G.applyToValidationNil(b.widgetMonad))))))(G.formFieldsToMaybeOutputCons(new q.IsSymbol(function () {
        return "appliesToProd";
      }))()(G.formFieldsToMaybeOutputCons(new q.IsSymbol(function () {
        return "polPolType";
      }))()(G.formFieldsToMaybeOutputCons(new q.IsSymbol(function () {
        return "policy";
      }))()(G.formFieldsToMaybeOutputCons(new q.IsSymbol(function () {
        return "policyType";
      }))()(G.formFieldsToMaybeOutputNil)())())())())(y)(y)(y)(y)(y)(y)(y)(y)(b.widgetMonad)(c)(a))(function (a) {
        if (a instanceof v.Left) return L(a.value0);
        if (a instanceof v.Right) return a = J.unwrapOutputFields(y)(B.hmapRecord()(B.mapRecordWithIndexCons(new q.IsSymbol(function () {
          return "appliesToProd";
        }))(B.constMapping(J.unwrapField(H.newtypeOutputField)))(B.mapRecordWithIndexCons(new q.IsSymbol(function () {
          return "polPolType";
        }))(B.constMapping(J.unwrapField(H.newtypeOutputField)))(B.mapRecordWithIndexCons(new q.IsSymbol(function () {
          return "policy";
        }))(B.constMapping(J.unwrapField(H.newtypeOutputField)))(B.mapRecordWithIndexCons(new q.IsSymbol(function () {
          return "policyType";
        }))(B.constMapping(J.unwrapField(H.newtypeOutputField)))(B.mapRecordWithIndexNil)()())()())()())()()))(a.value0), l.pure(b.widgetApplicative)({
          policy: a.policy,
          policyType: a.policyType,
          appliesToProduct: a.appliesToProd
        });
        throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 102, column 3 - line 110, column 8): " + [a.constructor.name]);
      });
    });
  },
      V = {
    polPolType: Q.FreeTextPolicy.value,
    policy: "",
    policyType: w.Nothing.value,
    appliesToProd: w.Nothing.value
  },
      R = function R(a) {
    if (a instanceof w.Nothing) return V;

    if (a instanceof w.Just) {
      var b = a.value0.policy;
      if (b instanceof P.FreeTextPolicy) b = Q.FreeTextPolicy.value;else if (b instanceof P.RefPolicy) b = Q.RefPolicy.value;else throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 62, column 1 - line 62, column 38): " + [b.constructor.name]);
      var c = a.value0.policy;
      if (c instanceof P.FreeTextPolicy) c = z.toString(c.value0);else if (c instanceof P.RefPolicy) c = T.urlToString(c.value0);else throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 66, column 1 - line 66, column 36): " + [c.constructor.name]);
      return {
        polPolType: b,
        policy: c,
        policyType: a.value0.policyType,
        appliesToProd: a.value0.appliesToProduct
      };
    }

    throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 70, column 1 - line 70, column 56): " + [a.constructor.name]);
  },
      X = {
    polPolType: O.dummy(b.widgetMonad),
    policy: function (a) {
      return D.hoistFnE(a)(function (a) {
        return function (b) {
          var c = I.getInput(new q.IsSymbol(function () {
            return "polPolType";
          }))(y)()(S()(y)(C.makeSProxiesCons(new q.IsSymbol(function () {
            return "appliesToProd";
          }))()(C.makeSProxiesCons(new q.IsSymbol(function () {
            return "polPolType";
          }))()(C.makeSProxiesCons(new q.IsSymbol(function () {
            return "policy";
          }))()(C.makeSProxiesCons(new q.IsSymbol(function () {
            return "policyType";
          }))()(C.makeSProxiesNil))))).polPolType)(a);
          if (c instanceof Q.FreeTextPolicy) return x.mapFlipped(v.functorEither)(O.readNEStringEi(b))(P.FreeTextPolicy.create);
          if (c instanceof Q.RefPolicy) return x.mapFlipped(v.functorEither)(T.parsePublicURL(b))(P.RefPolicy.create);
          throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 128, column 6 - line 130, column 54): " + [c.constructor.name]);
        };
      });
    }(b.widgetMonad),
    policyType: O.dummy(b.widgetMonad),
    appliesToProd: O.dummy(b.widgetMonad)
  },
      W = function W(a) {
    var c = function c(a) {
      return f.step(a)(h.bind(b.widgetBind)(l.pure(b.widgetApplicative)(J.wrapInputFields(y)(B.hmapRecord()(B.mapRecordWithIndexCons(new q.IsSymbol(function () {
        return "appliesToProd";
      }))(B.constMapping(J.wrapField(H.newtypeInputField)))(B.mapRecordWithIndexCons(new q.IsSymbol(function () {
        return "polPolType";
      }))(B.constMapping(J.wrapField(H.newtypeInputField)))(B.mapRecordWithIndexCons(new q.IsSymbol(function () {
        return "policy";
      }))(B.constMapping(J.wrapField(H.newtypeInputField)))(B.mapRecordWithIndexCons(new q.IsSymbol(function () {
        return "policyType";
      }))(B.constMapping(J.wrapField(H.newtypeInputField)))(B.mapRecordWithIndexNil)()())()())()())()()))(R(a))))(function (d) {
        return h.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(A.monoidArray))(b.widgetShiftMap)([L(Q.initFormState()(G.inputFieldsToFormFieldsCons(new q.IsSymbol(function () {
          return "appliesToProd";
        }))()(G.inputFieldsToFormFieldsCons(new q.IsSymbol(function () {
          return "polPolType";
        }))()(G.inputFieldsToFormFieldsCons(new q.IsSymbol(function () {
          return "policy";
        }))()(G.inputFieldsToFormFieldsCons(new q.IsSymbol(function () {
          return "policyType";
        }))()(G.inputFieldsToFormFieldsNil)())())())())(y)(y)(d)(X)), u.foldMap(u.foldableMaybe)(b.widgetMonoid(A.monoidArray))(M.ipolicyWidg)(a)]))(function (a) {
          return h.discard(h.discardUnit)(b.widgetBind)(E.liftEffect(b.widgetMonadEff(A.monoidArray))(K.logShow(E.monadEffectEffect)(r.showRecord()(r.showRecordFieldsCons(new q.IsSymbol(function () {
            return "appliesToProduct";
          }))(r.showRecordFieldsCons(new q.IsSymbol(function () {
            return "policy";
          }))(r.showRecordFieldsCons(new q.IsSymbol(function () {
            return "policyType";
          }))(r.showRecordFieldsNil)(w.showMaybe(P.showPolicyType)))(P.showPolicy))(w.showMaybe(r.showBoolean))))(a)))(function () {
            return l.pure(b.widgetApplicative)(c(new w.Just(a)));
          });
        });
      }));
    };

    return e.div_(m.shiftMapCofree(A.monoidArray))([N.institutionPolicy])(c(a));
  };

  c.policySigArray = function (a) {
    return e.div_(m.shiftMapCofree(A.monoidArray))([N.institutionPolicies])(Q.nonEmptyArrayView(W)(a));
  };
})(PS);

(function (a) {
  a.makeDOMParser = function () {
    return new DOMParser();
  };

  a.parseFromString = function (a) {
    return function (c) {
      return function (f) {
        return function () {
          return f.parseFromString(c, a);
        };
      };
    };
  };
})(PS["Web.DOM.DOMParser"] = PS["Web.DOM.DOMParser"] || {});

(function (a) {
  a._documentElement = function (a) {
    return function (c) {
      return function () {
        return c[a];
      };
    };
  }("documentElement");

  a.getElementsByTagName = function (a) {
    return function (c) {
      return function () {
        return c.getElementsByTagName(a);
      };
    };
  };

  a._getElementsByTagNameNS = function (a) {
    return function (c) {
      return function (f) {
        return function () {
          return f.getElementsByTagNameNS(a, c);
        };
      };
    };
  };

  a.createElement = function (a) {
    return function (c) {
      return function () {
        return c.createElement(a);
      };
    };
  };

  a._createElementNS = function (a) {
    return function (c) {
      return function (f) {
        return function () {
          return f.createElementNS(a, c);
        };
      };
    };
  };
})(PS["Web.DOM.Document"] = PS["Web.DOM.Document"] || {});

(function (a) {
  a._unsafeReadProtoTagged = function (a, f, k, g) {
    if ("undefined" !== typeof window) return k = window[k], null != k && g instanceof k ? f(g) : a;

    for (var b = g; null != b;) {
      b = Object.getPrototypeOf(b);
      var c = b.constructor.name;
      if (c === k) return f(g);
      if ("Object" === c) break;
    }

    return a;
  };
})(PS["Web.Internal.FFI"] = PS["Web.Internal.FFI"] || {});

(function (a) {
  a["Web.Internal.FFI"] = a["Web.Internal.FFI"] || {};
  var c = a["Web.Internal.FFI"],
      f = a["Data.Maybe"];

  a["Web.Internal.FFI"].unsafeReadProtoTagged = function (a) {
    return function (g) {
      return c._unsafeReadProtoTagged(f.Nothing.value, f.Just.create, a, g);
    };
  };
})(PS);

(function (a) {
  a["Web.DOM.Document"] = a["Web.DOM.Document"] || {};
  var c = a["Web.DOM.Document"],
      f = a["Web.DOM.Document"],
      k = a["Data.Functor"],
      g = a["Data.Nullable"],
      b = a.Effect;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("Document");

  var e = function () {
    var a = k.map(b.functorEffect)(g.toMaybe);
    return function (b) {
      return a(f._documentElement(b));
    };
  }();

  c.fromNode = a;
  c.documentElement = e;

  c.getElementsByTagNameNS = function (a) {
    return f._getElementsByTagNameNS(g.toNullable(a));
  };

  c.createElementNS = function (a) {
    return f._createElementNS(g.toNullable(a));
  };

  c.getElementsByTagName = f.getElementsByTagName;
  c.createElement = f.createElement;
})(PS);

(function (a) {
  a._prefix = function (a) {
    return function (c) {
      return c[a];
    };
  }("prefix");

  a.setAttribute = function (a) {
    return function (c) {
      return function (f) {
        return function () {
          f.setAttribute(a, c);
          return {};
        };
      };
    };
  };

  a._getAttribute = function (a) {
    return function (c) {
      return function () {
        return c.getAttribute(a);
      };
    };
  };
})(PS["Web.DOM.Element"] = PS["Web.DOM.Element"] || {});

(function (a) {
  a["Web.DOM.Element"] = a["Web.DOM.Element"] || {};
  var c = a["Web.DOM.Element"],
      f = a["Web.DOM.Element"],
      k = a["Data.Functor"],
      g = a["Data.Nullable"],
      b = a.Effect,
      e = a["Unsafe.Coerce"].unsafeCoerce;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("Element");
  c.fromNode = a;
  c.toNode = e;

  c.prefix = function (a) {
    return g.toMaybe(f._prefix(a));
  };

  c.getAttribute = function (a) {
    var c = k.map(b.functorEffect)(g.toMaybe),
        d = f._getAttribute(a);

    return function (a) {
      return c(d(a));
    };
  };

  c.setAttribute = f.setAttribute;
})(PS);

(function (a) {
  a.toArray = function (a) {
    return function () {
      return [].slice.call(a);
    };
  };

  a._item = function (a) {
    return function (c) {
      return function () {
        return c.item(a);
      };
    };
  };
})(PS["Web.DOM.HTMLCollection"] = PS["Web.DOM.HTMLCollection"] || {});

(function (a) {
  a["Web.DOM.HTMLCollection"] = a["Web.DOM.HTMLCollection"] || {};
  var c = a["Web.DOM.HTMLCollection"],
      f = a["Web.DOM.HTMLCollection"],
      k = a["Data.Functor"],
      g = a["Data.Nullable"],
      b = a.Effect;

  c.item = function (a) {
    var c = k.map(b.functorEffect)(g.toMaybe),
        e = f._item(a);

    return function (a) {
      return c(e(a));
    };
  };

  c.toArray = f.toArray;
})(PS);

(function (a) {
  var c = function c(a) {
    return function (c) {
      return function () {
        return c[a];
      };
    };
  };

  a._ownerDocument = c("ownerDocument");
  a.textContent = c("textContent");

  a.setTextContent = function (a) {
    return function (c) {
      return function () {
        c.textContent = a;
        return {};
      };
    };
  };

  a.appendChild = function (a) {
    return function (c) {
      return function () {
        return c.appendChild(a);
      };
    };
  };
})(PS["Web.DOM.Node"] = PS["Web.DOM.Node"] || {});

(function (a) {
  a["Web.DOM.Node"] = a["Web.DOM.Node"] || {};
  var c = a["Web.DOM.Node"],
      f = a["Web.DOM.Node"],
      k = a["Data.Functor"],
      g = a["Data.Nullable"],
      b = a.Effect;

  a = function () {
    var a = k.map(b.functorEffect)(g.toMaybe);
    return function (b) {
      return a(f._ownerDocument(b));
    };
  }();

  c.ownerDocument = a;
  c.textContent = f.textContent;
  c.setTextContent = f.setTextContent;
  c.appendChild = f.appendChild;
})(PS);

(function (a) {
  a["Web.DOM.DOMParser"] = a["Web.DOM.DOMParser"] || {};

  var c = a["Web.DOM.DOMParser"],
      f = a["Web.DOM.DOMParser"],
      k = a["Control.Applicative"],
      g = a["Control.Bind"],
      b = a["Data.Array"],
      e = a["Data.Either"],
      d = a["Data.Functor"],
      l = a["Data.Maybe"],
      h = a.Effect,
      m = a["Web.DOM.Document"],
      v = a["Web.DOM.Element"],
      t = a["Web.DOM.HTMLCollection"],
      n = a["Web.DOM.Node"],
      u = function u(a) {
    return function (b) {
      if (a instanceof l.Nothing) return new e.Right(b);
      if (a instanceof l.Just) return new e.Left(a.value0);
      throw Error("Failed pattern match at Web.DOM.DOMParser (line 73, column 30 - line 75, column 21): " + [a.constructor.name]);
    };
  },
      x = function x(a) {
    return function () {
      var c = g.join(h.bindEffect)(d.map(h.functorEffect)(t.toArray)(m.getElementsByTagName("parsererror")(a)))();
      c = b.head(c);
      c = d.map(l.functorMaybe)(v.toNode)(c);
      if (c instanceof l.Nothing) c = k.pure(h.applicativeEffect)(l.Nothing.value);else if (c instanceof l.Just) c = d.map(h.functorEffect)(l.Just.create)(n.textContent(c.value0));else throw Error("Failed pattern match at Web.DOM.DOMParser (line 65, column 23 - line 67, column 45): " + [c.constructor.name]);
      return c();
    };
  };

  c.parseXMLFromString = function (a) {
    return function (b) {
      return function () {
        var c = f.parseFromString("application/xml")(a)(b)(),
            d = x(c)();
        return u(d)(c);
      };
    };
  };

  c.makeDOMParser = f.makeDOMParser;
})(PS);

(function (a) {
  a.evaluateInternal = function (a) {
    return function (c) {
      return function (f) {
        return function (g) {
          return function (b) {
            return function (e) {
              return function () {
                return e.evaluate(a, c, f, g, b);
              };
            };
          };
        };
      };
    };
  };

  a.numberValue = function (a) {
    return function () {
      return a.numberValue;
    };
  };

  a.stringValue = function (a) {
    return function () {
      return a.stringValue;
    };
  };

  a.booleanValue = function (a) {
    return function () {
      return a.booleanValue;
    };
  };

  a.singleNodeValueInternal = function (a) {
    return function () {
      return a.singleNodeValue;
    };
  };

  a.customNSResolver = function (a) {
    return {
      lookupNamespaceURI: a
    };
  };

  a.createNSResolver = function (a) {
    return function (c) {
      return c.createNSResolver(a);
    };
  };

  a.lookupNamespaceURIInternal = function (a) {
    return function (c) {
      return a.lookupNamespaceURI(c);
    };
  };
})(PS["Web.DOM.Document.XPath"] = PS["Web.DOM.Document.XPath"] || {});

(function (a) {
  a.number_type = XPathResult.NUMBER_TYPE;
  a.string_type = XPathResult.STRING_TYPE;
  a.boolean_type = XPathResult.BOOLEAN_TYPE;
  a.any_unordered_node_type = XPathResult.ANY_UNORDERED_NODE_TYPE;
})(PS["Web.DOM.Document.XPath.ResultType"] = PS["Web.DOM.Document.XPath.ResultType"] || {});

(function (a) {
  a["Web.DOM.Document.XPath.ResultType"] = a["Web.DOM.Document.XPath.ResultType"] || {};
  var c = a["Web.DOM.Document.XPath.ResultType"];
  a = a["Web.DOM.Document.XPath.ResultType"];
  c.number_type = a.number_type;
  c.string_type = a.string_type;
  c.boolean_type = a.boolean_type;
  c.any_unordered_node_type = a.any_unordered_node_type;
})(PS);

(function (a) {
  a["Web.DOM.Document.XPath"] = a["Web.DOM.Document.XPath"] || {};
  var c = a["Web.DOM.Document.XPath"],
      f = a["Web.DOM.Document.XPath"],
      k = a["Data.Functor"],
      g = a["Data.Maybe"],
      b = a["Data.Nullable"],
      e = a.Effect,
      d = a["Web.DOM.Document"],
      l = a["Web.DOM.Document.XPath.ResultType"],
      h = a["Web.DOM.Element"],
      m = a["Web.DOM.Node"];

  a = function () {
    var a = k.map(e.functorEffect)(b.toMaybe);
    return function (b) {
      return a(f.singleNodeValueInternal(b));
    };
  }();

  c.evaluate = function (a) {
    return function (c) {
      return function (d) {
        return function (e) {
          return function (g) {
            return function (h) {
              return f.evaluateInternal(a)(c)(b.toNullable(d))(e)(b.toNullable(g))(h);
            };
          };
        };
      };
    };
  };

  c.evaluateNumber = function (a) {
    return function (c) {
      return function (d) {
        return function (e) {
          return function (g) {
            return function () {
              var h = f.evaluateInternal(a)(c)(b.toNullable(d))(l.number_type)(b.toNullable(e))(g)();
              return f.numberValue(h)();
            };
          };
        };
      };
    };
  };

  c.evaluateString = function (a) {
    return function (c) {
      return function (d) {
        return function (e) {
          return function (g) {
            return function () {
              var h = f.evaluateInternal(a)(c)(b.toNullable(d))(l.string_type)(b.toNullable(e))(g)();
              return f.stringValue(h)();
            };
          };
        };
      };
    };
  };

  c.evaluateBoolean = function (a) {
    return function (c) {
      return function (d) {
        return function (e) {
          return function (g) {
            return function () {
              var h = f.evaluateInternal(a)(c)(b.toNullable(d))(l.boolean_type)(b.toNullable(e))(g)();
              return f.booleanValue(h)();
            };
          };
        };
      };
    };
  };

  c.singleNodeValue = a;

  c.lookupNamespaceURI = function (a) {
    return function (c) {
      return b.toMaybe(f.lookupNamespaceURIInternal(a)(c));
    };
  };

  c.defaultNSResolver = function (a) {
    return function (b) {
      var c = function c(b) {
        return function () {
          var c = d.documentElement(b)();
          if (c instanceof g.Nothing) return a;
          if (c instanceof g.Just) return h.toNode(c.value0);
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 170, column 14 - line 172, column 40): " + [c.constructor.name]);
        };
      };

      return function () {
        var e = m.ownerDocument(a)(),
            h = function () {
          if (e instanceof g.Nothing) {
            var b = d.fromNode(a);
            if (b instanceof g.Nothing) return a;
            if (b instanceof g.Just) return c(b.value0)();
            throw Error("Failed pattern match at Web.DOM.Document.XPath (line 161, column 16 - line 163, column 57): " + [b.constructor.name]);
          }

          if (e instanceof g.Just) return c(e.value0)();
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 160, column 19 - line 164, column 35): " + [e.constructor.name]);
        }();

        return f.createNSResolver(h)(b);
      };
    };
  };

  c.customNSResolver = f.customNSResolver;
})(PS);

(function (a) {
  a["Metajelo.XPaths"] = a["Metajelo.XPaths"] || {};
  var c = a["Metajelo.XPaths"],
      f = a["Control.Applicative"],
      k = a["Control.Bind"],
      g = a["Data.Array.NonEmpty"],
      b = a["Data.Array.NonEmpty.Internal"],
      e = a["Data.Either"],
      d = a["Data.Foldable"],
      l = a["Data.Functor"],
      h = a["Data.Maybe"],
      m = a["Data.Traversable"],
      v = a["Data.XPath"],
      t = a.Effect,
      n = a["Effect.Exception"],
      u = a["Web.DOM.DOMParser"],
      x = a["Web.DOM.Document"],
      w = a["Web.DOM.Document.XPath"],
      A = a["Web.DOM.Document.XPath.ResultType"],
      r = a["Web.DOM.Element"],
      z = a["Web.DOM.HTMLCollection"];
  a = v.pathAppendNSx(v.stringXPath)(v.root(v.stringXPath))("record");

  var q = function q(a) {
    return function (b) {
      return {
        any: function any(c) {
          return function (d) {
            return function (e) {
              return w.evaluate(d)(c)(b)(e)(h.Nothing.value)(a);
            };
          };
        },
        num: function num(c) {
          return function (d) {
            return w.evaluateNumber(d)(c)(b)(h.Nothing.value)(a);
          };
        },
        str: function str(c) {
          return function (d) {
            return w.evaluateString(d)(c)(b)(h.Nothing.value)(a);
          };
        },
        bool: function bool(c) {
          return function (d) {
            return w.evaluateBoolean(d)(c)(b)(h.Nothing.value)(a);
          };
        },
        nodeMay: function nodeMay(c) {
          return function (d) {
            return k.bind(t.bindEffect)(w.evaluate(d)(c)(b)(A.any_unordered_node_type)(h.Nothing.value)(a))(w.singleNodeValue);
          };
        }
      };
    };
  },
      E = g["cons'"]("http://ourdomain.cornell.edu/reuse/v.01")([]),
      K = function K(a) {
    var c = function c(b) {
      return function () {
        var c = x.getElementsByTagNameNS(new h.Just(b))("record")(a)();
        return z.item(0)(c)();
      };
    };

    return function () {
      var e = x.getElementsByTagName("record")(a)();
      e = z.item(0)(e)();
      if (e instanceof h.Nothing) e = m.sequence(b.traversableNonEmptyArray)(t.applicativeEffect)(l.map(b.functorNonEmptyArray)(c)(E))(), e = k.join(h.bindMaybe)(d.find(b.foldableNonEmptyArray)(h.isJust)(e));else if (e instanceof h.Just) e = new h.Just(e.value0);else throw Error("Failed pattern match at Metajelo.XPaths (line 275, column 16 - line 279, column 38): " + [e.constructor.name]);
      return l.map(h.functorMaybe)(r.toNode)(e);
    };
  };

  g = v.pathAppendNSx(v.stringXPath)(a)("lastModified");

  var p = function p(a) {
    var b = function b(a) {
      return h.fromMaybe("http://ourdomain.cornell.edu/reuse/v.01")(a);
    };

    if (a instanceof h.Nothing) return f.pure(t.applicativeEffect)("http://ourdomain.cornell.edu/reuse/v.01");
    if (a instanceof h.Just) return l.map(t.functorEffect)(b)(r.getAttribute("xmlns")(a.value0));
    throw Error("Failed pattern match at Metajelo.XPaths (line 183, column 3 - line 185, column 59): " + [a.constructor.name]);
  },
      G = function G(a) {
    return function (b) {
      var c = function c(a) {
        return function (b) {
          return function (c) {
            c = w.lookupNamespaceURI(a)(c);
            if (c instanceof h.Nothing) return b;
            if (c instanceof h.Just) return c.value0;
            throw Error("Failed pattern match at Metajelo.XPaths (line 200, column 39 - line 202, column 20): " + [c.constructor.name]);
          };
        };
      };

      return function () {
        var d = w.defaultNSResolver(a)(b)(),
            e = r.fromNode(a);
        e = p(e)();
        return w.customNSResolver(c(d)(e));
      };
    };
  };

  v = v.pathAppendNSx(v.stringXPath)(a)("date");
  c.idP = "identifier";
  c.relIdP = "relatedIdentifier";
  c.sProdCP = "supplementaryProducts";
  c.sProdP = "supplementaryProduct";
  c.instIdP = "institutionID";
  c.instNameP = "institutionName";
  c.instTypeP = "institutionType";
  c.instContactP = "institutionContact";
  c.instSustainP = "institutionSustainability";
  c.instPolicyCP = "institutionPolicies";
  c.instPolicyP = "institutionPolicy";
  c.versioningP = "versioning";
  c.locP = "location";
  c.superOrgNameP = "superOrganizationName";
  c.missionUrlP = "missionStatementURL";
  c.fundingUrlP = "fundingStatementURL";
  c.basicMetaP = "basicMetadata";
  c.titleP = "Title";
  c.creatorP = "Creator";
  c.pubYearP = "PublicationYear";
  c.resIdP = "resourceID";
  c.resTypeP = "resourceType";
  c.formatCP = "Format";
  c.formatP = "format";
  c.freeTextPolicyP = "freeTextPolicy";
  c.refPolicyP = "refPolicy";
  c.resMetaSourceP = "resourceMetadataSource";
  c.idTypeAT = "identifierType";
  c.resIdTypeAT = "relatedIdentifierType";
  c.relIdTypeAT = "relatedIdentifierType";
  c.relTypeAT = "relationType";
  c.resTypeGenAT = "resourceTypeGeneral";
  c.instContactTypeAT = "institutionContactType";
  c.polTypeAT = "policyType";
  c.appliesToProdAT = "appliesToProduct";
  c.dateRootP = v;
  c.lastModRootP = g;

  c.getDefaultParseEnv = function (a) {
    return function () {
      var b = u.makeDOMParser();
      b = u.parseXMLFromString(a)(b)();
      if (b instanceof e.Left) b = n["throw"]("XML parsing error: " + b.value0)();else if (b instanceof e.Right) b = b.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 243, column 13 - line 245, column 26): " + [b.constructor.name]);
      var c = K(b)();
      if (c instanceof h.Nothing) c = n["throw"]("Could not find <record> node!")();else if (c instanceof h.Just) c = c.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 247, column 14 - line 249, column 23): " + [c.constructor.name]);
      var d = r.fromNode(c);
      if (d instanceof h.Nothing) d = n["throw"]("<record> node could not be cast to an element!")();else if (d instanceof h.Just) d = d.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 250, column 14 - line 252, column 23): " + [d.constructor.name]);
      var f = p(new h.Just(d))(),
          g = G(c)(b)();
      g = q(b)(new h.Just(g));
      return {
        doc: b,
        ns: f,
        recNode: c,
        recElem: d,
        xeval: g,
        xevalRoot: {
          any: g.any(c),
          num: g.num(c),
          str: g.str(c),
          bool: g.bool(c),
          nodeMay: g.nodeMay(c)
        }
      };
    };
  };

  c.unsafeSingleNodeValue = function (a) {
    return function (b) {
      return function (c) {
        return function () {
          var d = a.xeval.nodeMay(b)(c)();
          if (d instanceof h.Just) return d.value0;
          if (d instanceof h.Nothing) return n["throw"]("Couldn't find required node at: " + c)();
          throw Error("Failed pattern match at Metajelo.XPaths (line 292, column 3 - line 294, column 40): " + [d.constructor.name]);
        };
      };
    };
  };
})(PS);

(function (a) {
  a.copyToClipboard = function (a) {
    return function () {
      var c = document.createElement("textarea");
      c.type = "text";
      c.value = a;
      c.style.position = "absolute";
      c.style.left = -1E4;
      document.body.appendChild(c);
      c.select();
      document.execCommand("copy");
      document.body.removeChild(c);
    };
  };

  a.outerHTML = function (a) {
    return function () {
      return a.outerHTML;
    };
  };
})(PS["Nonbili.DOM"] = PS["Nonbili.DOM"] || {});

(function (a) {
  a["Nonbili.DOM"] = a["Nonbili.DOM"] || {};
  var c = a["Nonbili.DOM"];
  a = a["Nonbili.DOM"];
  c.copyToClipboard = a.copyToClipboard;
  c.outerHTML = a.outerHTML;
})(PS);

(function (a) {
  a["Metajelo.XPaths.Write"] = a["Metajelo.XPaths.Write"] || {};

  var c = a["Control.Applicative"],
      f = a["Data.Array.NonEmpty.Internal"],
      k = a["Data.Foldable"],
      g = a["Data.Functor"],
      b = a["Data.Maybe"],
      e = a["Data.Show"],
      d = a["Data.Traversable"],
      l = a["Data.Unit"],
      h = a["Data.XPath"],
      m = a.Effect,
      v = a["Metajelo.Types"],
      t = a["Metajelo.XPaths"],
      n = a["Nonbili.DOM"],
      u = a["Text.Email.Parser"],
      x = a["Text.URL.Validate"],
      w = a["Web.DOM.Document"],
      A = a["Web.DOM.Element"],
      r = a["Web.DOM.Node"],
      z = function z(a) {
    return function (c) {
      return function (c) {
        return function (f) {
          var h = A.fromNode(c);
          return function () {
            d.sequence(d.traversableMaybe)(m.applicativeEffect)(g.mapFlipped(b.functorMaybe)(h)(function (b) {
              return A.setAttribute(a)(e.show(v.showIdentifierType)(f))(b);
            }))();
            return l.unit;
          };
        };
      };
    };
  },
      q = a["Data.String.NonEmpty.Internal"].toString,
      E = function E(a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function () {
            r.setTextContent(q(d.id))(c)();
            return z(a)(b)(c)(d.idType)();
          };
        };
      };
    };
  },
      K = function K(a) {
    return function (b) {
      return function () {
        var c = t.unsafeSingleNodeValue(a)(a.recNode)(h.xx(h.stringXPath)(t.idP))();
        return E(t.idTypeAT)(a)(c)(b)();
      };
    };
  },
      p = function p(a) {
    return function (c) {
      return function () {
        d.sequence(d.traversableMaybe)(m.applicativeEffect)(g.map(b.functorMaybe)(r.setTextContent(q(a)))(c))();
        return l.unit;
      };
    };
  },
      G = function G(a) {
    return function (b) {
      return function () {
        var c = a.xevalRoot.nodeMay(t.dateRootP)();
        return p(b)(c)();
      };
    };
  },
      F = function F(a) {
    return function (b) {
      return function () {
        var c = a.xevalRoot.nodeMay(t.lastModRootP)();
        return p(b)(c)();
      };
    };
  },
      I = function I(a) {
    return function (c) {
      var d = A.prefix(a.recElem);
      return function () {
        if (d instanceof b.Just) var e = d.value0 + ":";else if (d instanceof b.Nothing) e = "";else throw Error("Failed pattern match at Metajelo.XPaths.Write (line 235, column 20 - line 237, column 18): " + [d.constructor.name]);
        e += c;
        return w.createElementNS(new b.Just(a.ns))(e)(a.doc)();
      };
    };
  },
      J = function J(a) {
    return function (b) {
      return function (c) {
        return function () {
          var d = I(a)(c)();
          r.appendChild(A.toNode(d))(b)();
          return d;
        };
      };
    };
  },
      C = function C(a) {
    return function (b) {
      return function (c) {
        return function () {
          var d = g.map(m.functorEffect)(A.toNode)(J(a)(b)(t.basicMetaP))(),
              e = g.map(m.functorEffect)(A.toNode)(J(a)(d)(t.titleP))();
          r.setTextContent(q(c.title))(e)();
          e = g.map(m.functorEffect)(A.toNode)(J(a)(d)(t.creatorP))();
          r.setTextContent(q(c.creator))(e)();
          d = g.map(m.functorEffect)(A.toNode)(J(a)(d)(t.pubYearP))();
          return r.setTextContent(q(c.publicationYear))(d)();
        };
      };
    };
  },
      H = function H(a) {
    return function (c) {
      return function (f) {
        return function () {
          var h = J(a)(c)(t.instContactP)();
          d.sequence(d.traversableMaybe)(m.applicativeEffect)(g.mapFlipped(b.functorMaybe)(f.contactType)(function (a) {
            return A.setAttribute(t.instContactTypeAT)(e.show(v.showInstitutionContactType)(a))(h);
          }))();
          return r.setTextContent(u.toString(f.emailAddress))(A.toNode(h))();
        };
      };
    };
  },
      D = function D(a) {
    return function (b) {
      return function (c) {
        return function () {
          var d = g.map(m.functorEffect)(A.toNode)(J(a)(b)(t.instIdP))();
          return E(t.idTypeAT)(a)(d)(c)();
        };
      };
    };
  },
      B = function B(a) {
    return function (b) {
      return k.for_(m.applicativeEffect)(f.foldableNonEmptyArray)(b)(function (b) {
        return function () {
          var c = J(a)(a.recNode)(t.relIdP)(),
              d = A.toNode(c);
          r.setTextContent(q(b.id))(d)();
          A.setAttribute(t.relIdTypeAT)(e.show(v.showIdentifierType)(b.idType))(c)();
          return A.setAttribute(t.relTypeAT)(e.show(v.showRelationType)(b.relType))(c)();
        };
      });
    };
  },
      N = function N(a) {
    return function (b) {
      return function (c) {
        return function () {
          var d = g.map(m.functorEffect)(A.toNode)(J(a)(b)(t.resIdP))();
          return E(t.resIdTypeAT)(a)(d)(c)();
        };
      };
    };
  },
      Q = function Q(a) {
    return function (b) {
      return function (c) {
        return function () {
          var d = J(a)(b)(t.resMetaSourceP)();
          r.setTextContent(x.urlToString(c.url))(A.toNode(d))();
          return A.setAttribute(t.relTypeAT)(e.show(v.showRelationType)(c.relationType))(d)();
        };
      };
    };
  },
      P = function P(a) {
    return function (b) {
      return function (c) {
        return function () {
          var d = J(a)(b)(t.resTypeP)();
          r.setTextContent(c.description)(A.toNode(d))();
          return A.setAttribute(t.resTypeGenAT)(e.show(v.showResourceTypeGeneral)(c.generalType))(d)();
        };
      };
    };
  },
      O = function O(a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function () {
            var e = g.map(m.functorEffect)(A.toNode)(J(b)(c)(a))();
            return r.setTextContent(d)(e)();
          };
        };
      };
    };
  },
      M = function M(a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return O(a)(b)(c)(q(d));
        };
      };
    };
  },
      T = function T(a) {
    return function (b) {
      return function (c) {
        return function () {
          var d = g.map(m.functorEffect)(A.toNode)(J(a)(b)(t.formatCP))();
          return k.for_(m.applicativeEffect)(k.foldableArray)(c)(function (b) {
            return M(t.formatP)(a)(d)(b);
          })();
        };
      };
    };
  },
      S = function S(a) {
    return function (c) {
      return function (f) {
        return function () {
          var h = J(a)(c)(t.instPolicyP)(),
              k = A.toNode(h);
          d.sequence(d.traversableMaybe)(m.applicativeEffect)(g.mapFlipped(b.functorMaybe)(f.policyType)(function (a) {
            return A.setAttribute(t.polTypeAT)(e.show(v.showPolicyType)(a))(h);
          }))();
          d.sequence(d.traversableMaybe)(m.applicativeEffect)(g.mapFlipped(b.functorMaybe)(f.appliesToProduct)(function (a) {
            return A.setAttribute(t.appliesToProdAT)(e.show(e.showBoolean)(a))(h);
          }))();
          if (f.policy instanceof v.FreeTextPolicy) return M(t.freeTextPolicyP)(a)(k)(f.policy.value0)();
          if (f.policy instanceof v.RefPolicy) return M(t.refPolicyP)(a)(k)(x.urlToNEString(f.policy.value0))();
          throw Error("Failed pattern match at Metajelo.XPaths.Write (line 202, column 3 - line 205, column 27): " + [f.policy.constructor.name]);
        };
      };
    };
  },
      y = function y(a) {
    return function (b) {
      return function (c) {
        return function () {
          var d = g.map(m.functorEffect)(A.toNode)(J(a)(b)(t.instPolicyCP))();
          return k.for_(m.applicativeEffect)(f.foldableNonEmptyArray)(c)(function (b) {
            return S(a)(d)(b);
          })();
        };
      };
    };
  },
      L = function L(a) {
    return function (b) {
      return function (c) {
        return function () {
          var d = g.map(m.functorEffect)(A.toNode)(J(a)(b)(t.instSustainP))();
          M(t.missionUrlP)(a)(d)(x.urlToNEString(c.missionStatementURL))();
          return M(t.fundingUrlP)(a)(d)(x.urlToNEString(c.fundingStatementURL))();
        };
      };
    };
  },
      V = function V(a) {
    return function (c) {
      return function (f) {
        return function () {
          var h = J(a)(c)(t.locP)(),
              k = A.toNode(h);
          D(a)(k)(f.institutionID)();
          M(t.instNameP)(a)(k)(f.institutionName)();
          O(t.instTypeP)(a)(k)(e.show(v.showInstitutionType)(f.institutionType))();
          d.sequence(d.traversableMaybe)(m.applicativeEffect)(g.mapFlipped(b.functorMaybe)(f.superOrganizationName)(function (b) {
            return M(t.superOrgNameP)(a)(k)(b);
          }))();
          H(a)(k)(f.institutionContact)();
          L(a)(k)(f.institutionSustainability)();
          y(a)(k)(f.institutionPolicies)();
          return O(t.versioningP)(a)(k)(e.show(e.showBoolean)(f.versioning))();
        };
      };
    };
  },
      R = function R(a) {
    return function (c) {
      return function () {
        var e = t.unsafeSingleNodeValue(a)(a.recNode)(h.xx(h.stringXPath)(t.sProdCP))(),
            f = g.map(m.functorEffect)(A.toNode)(J(a)(e)(t.sProdP))();
        C(a)(f)(c.basicMetadata)();
        d.sequence(d.traversableMaybe)(m.applicativeEffect)(g.mapFlipped(b.functorMaybe)(c.resourceID)(function (b) {
          return N(a)(f)(b);
        }))();
        P(a)(f)(c.resourceType)();
        T(a)(f)(c.format)();
        d.sequence(d.traversableMaybe)(m.applicativeEffect)(g.mapFlipped(b.functorMaybe)(c.resourceMetadataSource)(function (b) {
          return Q(a)(f)(b);
        }))();
        return V(a)(f)(c.location)();
      };
    };
  },
      X = function X(a) {
    return function (b) {
      return k.for_(m.applicativeEffect)(f.foldableNonEmptyArray)(b)(function (b) {
        return R(a)(b);
      });
    };
  },
      W = function W(a) {
    return function (b) {
      return function () {
        K(a)(b.identifier)();
        G(a)(b.date)();
        F(a)(b.lastModified)();
        B(a)(b.relatedIdentifiers)();
        return X(a)(b.supplementaryProducts)();
      };
    };
  };

  a["Metajelo.XPaths.Write"].recordToString = function (a) {
    return function () {
      var d = t.getDefaultParseEnv('<?xml version="1.0" encoding="UTF-8"?>\n<record xmlns:re3="http://www.re3data.org/schema/2-2"\n xmlns:datacite="http://datacite.org/schema/kernel-4"\n xmlns="http://ourdomain.cornell.edu/reuse/v.01"\n xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n xsi:schemaLocation="http://ourdomain.cornell.edu/reuse/v.01 file:/Users/clagoze/Downloads/metajelo-master/schema/xsd/reproMetadata0.7.xsd">\n    <identifier></identifier>\n    <date></date>\n    <lastModified></lastModified>\n    <supplementaryProducts>\n    </supplementaryProducts>\n</record>\n')();
      W(d)(a)();
      d = w.documentElement(d.doc)();
      return b.maybe(c.pure(m.applicativeEffect)(""))(n.outerHTML)(d)();
    };
  };
})(PS);

(function (a) {
  a.pickFn = function (a, f) {
    for (var c = {}, g = 0; g < a.length; g++) {
      "undefined" !== typeof f[a[g]] && (c[a[g]] = f[a[g]]);
    }

    return c;
  };
})(PS.Option = PS.Option || {});

(function (a) {
  a["Record.Extra"] = a["Record.Extra"] || {};

  var c = a["Record.Extra"],
      f = a["Data.List.Types"],
      k = a["Data.Monoid"],
      g = a["Data.Symbol"],
      b = a["Type.Data.RowList"],
      e = function e(a) {
    this.keysImpl = a;
  };

  a = new e(function (a) {
    return k.mempty(f.monoidList);
  });

  c.keys = function (a) {
    return function (a) {
      return function (c) {
        return (0, a.keysImpl)(b.RLProxy.value);
      };
    };
  };

  c.nilKeys = a;

  c.consKeys = function (a) {
    return function (c) {
      return new e(function (d) {
        d = (0, c.keysImpl)(b.RLProxy.value);
        var e = g.reflectSymbol(a)(g.SProxy.value);
        return new f.Cons(e, d);
      });
    };
  };
})(PS);

(function (a) {
  a["Type.Data.Row"] = a["Type.Data.Row"] || {};
  a = a["Type.Data.Row"];

  var c = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  a.RProxy = c;
})(PS);

(function (a) {
  a.Option = a.Option || {};

  var c = a.Option,
      f = a.Option,
      k = a["Control.Monad.State.Class"],
      g = a["Control.Monad.State.Trans"],
      b = a["Data.Array"],
      e = a["Data.Function.Uncurried"],
      d = a["Data.Identity"],
      l = a["Data.List.Types"],
      h = a["Data.Maybe"],
      m = a["Data.Symbol"],
      v = a["Foreign.Object"],
      t = a.Record,
      n = a["Record.Extra"],
      u = a["Type.Data.Row"],
      x = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      w = function w(a) {
    this.getAllOption = a;
  },
      A = function A(a) {
    this["getAll'"] = a;
  },
      r = function r(a) {
    return function (a) {
      return function (a) {
        a = b.fromFoldable(l.foldableList)(n.keys()(a)(u.RProxy.value));
        return e.runFn2(f.pickFn)(a);
      };
    };
  };

  a = new w(function (a) {
    return function (a) {
      return new h.Just({});
    };
  });

  var z = function z(a) {
    return function (b) {
      return function (c) {
        return function (c) {
          var d = m.reflectSymbol(a)(m.SProxy.value),
              e = v.alter(function (a) {
            return b(a);
          })(d)(c);
          c = b(v.lookup(d)(c));
          return {
            option: e,
            value: c
          };
        };
      };
    };
  },
      q = function q(a) {
    return function (b) {
      return function (b) {
        return function (b) {
          return function (c) {
            return z(a)(function (a) {
              return h.Nothing.value;
            })(b)(c).option;
          };
        };
      };
    };
  },
      E = function E(a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return z(a)(function (a) {
            return a;
          })(b)(c).value;
        };
      };
    };
  },
      K = function K(a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return function (d) {
            return z(a)(function (a) {
              return new h.Just(c);
            })(b)(d).option;
          };
        };
      };
    };
  },
      p = function p(a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return function (d) {
            if (c instanceof h.Just) return K(a)()(b)(c.value0)(d);
            if (c instanceof h.Nothing) return d;
            throw Error("Failed pattern match at Option (line 1408, column 25 - line 1410, column 28): " + [c.constructor.name]);
          };
        };
      };
    };
  };

  c.empty = v.empty;
  c.get = E;

  c.getAll = function (a) {
    return a["getAll'"];
  };

  c.getSubset = function (a) {
    return function (a) {
      return function (a) {
        return function (b) {
          return function (c) {
            return (0, b["getAll'"])(r()()(a)(c));
          };
        };
      };
    };
  };

  c.getWithDefault = function (a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return function (d) {
            d = E(a)()(c)(d);
            if (d instanceof h.Just) return d.value0;
            if (d instanceof h.Nothing) return b;
            throw Error("Failed pattern match at Option (line 1257, column 39 - line 1259, column 32): " + [d.constructor.name]);
          };
        };
      };
    };
  };

  c.maySetOptState = function (a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return function (e) {
            return k.put(g.monadStateStateT(d.monadIdentity))(p(a)()(b)(c)(e));
          };
        };
      };
    };
  };

  c.getAllAny = function (a) {
    return function (a) {
      return new A((0, a.getAllOption)(x.value));
    };
  };

  c.getAllOptionNil = a;

  c.getAllOptionCons = function (a) {
    return function (b) {
      return function (b) {
        return function (b) {
          return function (b) {
            return function (b) {
              return new w(function (c) {
                return function (c) {
                  var d = q(a)()()(m.SProxy.value)(c);
                  d = (0, b.getAllOption)(x.value)(d);
                  c = E(a)()(m.SProxy.value)(c);

                  if (d instanceof h.Just) {
                    if (c instanceof h.Just) return new h.Just(t.insert(a)()()(m.SProxy.value)(c.value0)(d.value0));
                    if (c instanceof h.Nothing) return h.Nothing.value;
                    throw Error("Failed pattern match at Option (line 567, column 31 - line 569, column 47): " + [c.constructor.name]);
                  }

                  if (d instanceof h.Nothing) return h.Nothing.value;
                  throw Error("Failed pattern match at Option (line 566, column 27 - line 570, column 45): " + [d.constructor.name]);
                };
              });
            };
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a._read = function (a, f, k) {
    var c = Object.prototype.toString.call(k);
    return 0 === c.indexOf("[object HTML") && c.indexOf("Element]") === c.length - 8 ? f(k) : a;
  };

  a.click = function (a) {
    return function () {
      return a.click();
    };
  };
})(PS["Web.HTML.HTMLElement"] = PS["Web.HTML.HTMLElement"] || {});

(function (a) {
  a["Web.HTML.HTMLElement"] = a["Web.HTML.HTMLElement"] || {};
  var c = a["Web.HTML.HTMLElement"],
      f = a["Web.HTML.HTMLElement"],
      k = a["Data.Maybe"];

  c.fromElement = function (a) {
    return f._read(k.Nothing.value, k.Just.create, a);
  };

  c.click = f.click;
})(PS);

(function (a) {
  a["Metajelo.UI"] = a["Metajelo.UI"] || {};

  var c = a["Metajelo.UI"],
      f = a["Concur.Core.FRP"],
      k = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Types"],
      b = a["Concur.React.DOM"],
      e = a["Concur.React.Props"],
      d = a["Concur.React.Run"],
      l = a["Control.Applicative"],
      h = a["Control.Bind"],
      m = a["Control.Cofree"],
      v = a["Control.Monad.State"],
      t = a["Control.Monad.State.Class"],
      n = a["Control.Monad.State.Trans"],
      u = a["Data.Array.NonEmpty.Internal"],
      x = a["Data.Either"],
      w = a["Data.Foldable"],
      A = a["Data.Functor"],
      r = a["Data.Identity"],
      z = a["Data.Maybe"],
      q = a["Data.Monoid"],
      E = a["Data.String.Common"],
      K = a["Data.String.NonEmpty.Internal"],
      p = a["Data.Symbol"],
      G = a["Data.Traversable"],
      F = a["Data.Tuple"],
      I = a.Effect,
      J = a["Effect.Class"],
      C = a["Effect.Class.Console"],
      H = a.Global,
      D = a["Metajelo.CSS.UI.ClassProps"],
      B = a["Metajelo.CSS.Web.ClassProps"],
      N = a["Metajelo.FormUtil"],
      Q = a["Metajelo.Forms.InstitutionContact"],
      P = a["Metajelo.Forms.InstitutionPolicy"],
      O = a["Metajelo.Types"],
      M = a["Metajelo.View"],
      T = a["Metajelo.XPaths.Write"],
      S = a["Nonbili.DOM"],
      y = a.Option,
      L = a["Record.Extra"],
      V = a["Web.DOM.Document"],
      R = a["Web.DOM.Element"],
      X = a["Web.HTML"],
      W = a["Web.HTML.HTMLDocument"],
      Z = a["Web.HTML.HTMLElement"],
      da = a["Web.HTML.Window"],
      fa = function fa(a) {
    return function () {
      var b = X.window();
      b = da.document(b)();
      b = W.toDocument(b);
      b = V.createElement("a")(b)();
      R.setAttribute("download")("metajelo.xml")(b)();
      R.setAttribute("href")("data:text/plain;charset=utf-8," + a)(b)();
      b = Z.fromElement(b);
      if (b instanceof z.Just) b = Z.click(b.value0);else if (b instanceof z.Nothing) b = C.log(J.monadEffectEffect)("Couldn't create HTMLElement to click with encoded string" + a);else throw Error("Failed pattern match at Metajelo.UI (line 98, column 26 - line 102, column 18): " + [b.constructor.name]);
      return b;
    };
  },
      U = function U(a) {
    return function (b) {
      return y.getWithDefault(a)()(y.empty);
    };
  },
      ia = function ia(a) {
    return b.div_(m.shiftMapCofree(q.monoidArray))([D.format])(N.textInput(a));
  },
      ca = function ca(a) {
    return b.div_(m.shiftMapCofree(q.monoidArray))([D.formatList])(N.arrayView(ia)(a));
  },
      ja = function ja(a) {
    var c = b.div_(g.widgetShiftMap)([B.errorDisplayBox])(b.span(g.widgetMultiAlternative(q.monoidArray))(g.widgetShiftMap)([B.errorDisplay])([b.text(k.widgetLiftWidget)("Couldn't encode XML, please copy to clipboard instead.")])),
        d = function d(a) {
      return function (c) {
        var d = function d(c) {
          return f.step(c)(h.bind(g.widgetBind)(b.button_(g.widgetShiftMap)([D.downloadBtn, e.onClick, e.disabled(E["null"](c))])(b.text(k.widgetLiftWidget)("Download")))(function () {
            return h.bind(g.widgetBind)(J.liftEffect(g.widgetMonadEff(q.monoidArray))(a))(function () {
              return l.pure(g.widgetApplicative)(d(c));
            });
          }));
        };

        return f.dyn(d(c));
      };
    };

    return b.div_(g.widgetShiftMap)([])(function () {
      var b = H.encodeURIComponent(a);
      return h.bind(g.widgetBind)(J.liftEffect(g.widgetMonadEff(q.monoidArray))(fa(z.fromMaybe("")(b))))(function (a) {
        return z.maybe(c)(d(a))(b);
      });
    }());
  },
      ea = function ea(a) {
    var c = function c(a) {
      return f.step(a)(h.bind(g.widgetBind)(b.button_(g.widgetShiftMap)([D.clipBtn, e.onClick, e.disabled(E["null"](a))])(b.text(k.widgetLiftWidget)("Copy to Clipboard")))(function () {
        return h.bind(g.widgetBind)(J.liftEffect(g.widgetMonadEff(q.monoidArray))(S.copyToClipboard(a)))(function () {
          return l.pure(g.widgetApplicative)(c(a));
        });
      }));
    };

    return f.dyn(c(a));
  },
      ha = function ha(a) {
    return b.div_(m.shiftMapCofree(q.monoidArray))([D.sustainability])(h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(b.span_(m.shiftMapCofree(q.monoidArray))([D.missionStatement])(N.urlInput(y.getWithDefault(new p.IsSymbol(function () {
      return "missionUrl_Ei";
    }))()(new x.Left(""))(p.SProxy.value)(a))))(function (c) {
      var d = x.hush(c);
      return h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(b.span_(m.shiftMapCofree(q.monoidArray))([D.fundingStatement])(N.urlInput(y.getWithDefault(new p.IsSymbol(function () {
        return "fundingUrl_Ei";
      }))()(new x.Left(""))(p.SProxy.value)(a))))(function (b) {
        var e = x.hush(b);
        return l.pure(m.applicativeCofree(g.widgetAlternative(q.monoidArray)))(v.execState(h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
          return "missionUrl_Ei";
        }))()(p.SProxy.value)(new z.Just(c))))(function () {
          return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
            return "missionStatementURL";
          }))()(p.SProxy.value)(d)))(function () {
            return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
              return "fundingUrl_Ei";
            }))()(p.SProxy.value)(new z.Just(b))))(function () {
              return h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                return "fundingStatementURL";
              }))()(p.SProxy.value)(e));
            });
          });
        }))(a));
      });
    }));
  },
      aa = function aa(a) {
    return b.div_(m.shiftMapCofree(q.monoidArray))([D.resourceType])(h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(b.span_(m.shiftMapCofree(q.monoidArray))([D.resourceTypeGen])(N.menuSignal(O.boundedEnumResourceTypeGeneral)(N.isOptionResourceTypeGeneral)(y.get(new p.IsSymbol(function () {
      return "generalType";
    }))()(p.SProxy.value)(a))))(function (c) {
      return h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(b.span_(m.shiftMapCofree(q.monoidArray))([D.resourceTypeDescr])(N.textInput(h.join(z.bindMaybe)(A.map(z.functorMaybe)(K.fromString)(y.get(new p.IsSymbol(function () {
        return "description";
      }))()(p.SProxy.value)(a))))))(function (b) {
        return l.pure(m.applicativeCofree(g.widgetAlternative(q.monoidArray)))(v.execState(h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
          return "description";
        }))()(p.SProxy.value)(A.map(z.functorMaybe)(K.toString)(b))))(function () {
          return h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
            return "generalType";
          }))()(p.SProxy.value)(c));
        }))(a));
      });
    }));
  },
      ba = function ba(a) {
    return b.div_(m.shiftMapCofree(q.monoidArray))([D.resourceMDSource])(h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(b.span_(m.shiftMapCofree(q.monoidArray))([D.url])(N.urlInput(y.getWithDefault(new p.IsSymbol(function () {
      return "url_Ei";
    }))()(new x.Left(""))(p.SProxy.value)(a))))(function (c) {
      var d = x.hush(c);
      return h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(b.span_(m.shiftMapCofree(q.monoidArray))([D.relType])(N.menuSignal(O.boundedEnumRelationType)(N.isOptionRelationType)(y.get(new p.IsSymbol(function () {
        return "relationType";
      }))()(p.SProxy.value)(a))))(function (b) {
        return l.pure(m.applicativeCofree(g.widgetAlternative(q.monoidArray)))(v.execState(h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
          return "url_Ei";
        }))()(p.SProxy.value)(new z.Just(c))))(function () {
          return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
            return "url";
          }))()(p.SProxy.value)(d)))(function () {
            return h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
              return "relationType";
            }))()(p.SProxy.value)(b));
          });
        }))(a));
      });
    }));
  },
      Y = function Y(a) {
    var c = z.fromMaybe(y.empty)(a);
    return b.div_(m.shiftMapCofree(q.monoidArray))([D.relatedId])(h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(b.span_(m.shiftMapCofree(q.monoidArray))([D.id])(N.textInput(y.get(new p.IsSymbol(function () {
      return "id";
    }))()(p.SProxy.value)(c))))(function (a) {
      return h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(b.span_(m.shiftMapCofree(q.monoidArray))([D.idType])(N.menuSignal(O.boundedEnumIdentifierType)(N.isOptionIdentifierType)(y.get(new p.IsSymbol(function () {
        return "idType";
      }))()(p.SProxy.value)(c))))(function (d) {
        return h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(b.span_(m.shiftMapCofree(q.monoidArray))([D.relType])(N.menuSignal(O.boundedEnumRelationType)(N.isOptionRelationType)(y.get(new p.IsSymbol(function () {
          return "relType";
        }))()(p.SProxy.value)(c))))(function (b) {
          return l.pure(m.applicativeCofree(g.widgetAlternative(q.monoidArray)))(z.Just.create(v.execState(h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
            return "id";
          }))()(p.SProxy.value)(a)))(function () {
            return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
              return "idType";
            }))()(p.SProxy.value)(d)))(function () {
              return h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                return "relType";
              }))()(p.SProxy.value)(b));
            });
          }))(c)));
        });
      });
    }));
  },
      la = function la(a) {
    return b.div_(m.shiftMapCofree(q.monoidArray))([D.relatedIds])(b.span_(m.shiftMapCofree(q.monoidArray))([D.relatedIdsHeader])(b.div_(m.shiftMapCofree(q.monoidArray))([D.relatedIdList])(N.nonEmptyArrayView(Y)(a))));
  },
      ma = function ma(a) {
    return b.div_(m.shiftMapCofree(q.monoidArray))([D.identifier])(h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(b.span_(m.shiftMapCofree(q.monoidArray))([D.id])(N.textInput(y.get(new p.IsSymbol(function () {
      return "id";
    }))()(p.SProxy.value)(a))))(function (c) {
      return h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(b.span_(m.shiftMapCofree(q.monoidArray))([D.idType])(N.menuSignal(O.boundedEnumIdentifierType)(N.isOptionIdentifierType)(y.get(new p.IsSymbol(function () {
        return "idType";
      }))()(p.SProxy.value)(a))))(function (b) {
        return l.pure(m.applicativeCofree(g.widgetAlternative(q.monoidArray)))(v.execState(h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
          return "id";
        }))()(p.SProxy.value)(c)))(function () {
          return h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
            return "idType";
          }))()(p.SProxy.value)(b));
        }))(a));
      });
    }));
  },
      pa = function pa(a) {
    var c = function c(a) {
      return b.div(g.widgetMultiAlternative(q.monoidArray))(g.widgetShiftMap)([D.locPreview])([b["br'"](k.widgetLiftWidget), w.foldMap(w.foldableMaybe)(g.widgetMonoid(q.monoidArray))(function (a) {
        return w.fold(w.foldableArray)(g.widgetMonoid(q.monoidArray))(M.spacify(M.locElems(a)));
      })(a)]);
    },
        d = z.fromMaybe(y.empty)(a);

    return b.div_(m.shiftMapCofree(q.monoidArray))([D.location])(h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(b.span_(m.shiftMapCofree(q.monoidArray))([D.institutionId])(ma(U(new p.IsSymbol(function () {
      return "institutionID_opt";
    }))()(p.SProxy.value)(d))))(function (a) {
      var e = y.getAll(y.getAllAny()(y.getAllOptionCons(new p.IsSymbol(function () {
        return "id";
      }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
        return "idType";
      }))()()()()(y.getAllOptionNil))))(a);
      return h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(b.span_(m.shiftMapCofree(q.monoidArray))([D.institutionName])(N.textInput(y.get(new p.IsSymbol(function () {
        return "institutionName";
      }))()(p.SProxy.value)(d))))(function (u) {
        return h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(b.span_(m.shiftMapCofree(q.monoidArray))([D.institutionType])(N.menuSignal(O.boundedEnumInstitutionType)(N.isOptionInstitutionType)(y.get(new p.IsSymbol(function () {
          return "institutionType";
        }))()(p.SProxy.value)(d))))(function (w) {
          return h.discard(h.discardUnit)(m.bindCofree(g.widgetAlternative(q.monoidArray)))(f.display(b["br'"](k.widgetLiftWidget)))(function () {
            return h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(b.span_(m.shiftMapCofree(q.monoidArray))([D.superOrg])(N.textInput(h.join(z.bindMaybe)(y.get(new p.IsSymbol(function () {
              return "superOrganizationName";
            }))()(p.SProxy.value)(d)))))(function (k) {
              return h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(Q.contactSignal(y.get(new p.IsSymbol(function () {
                return "institutionContact";
              }))()(p.SProxy.value)(d)))(function (x) {
                return h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(ha(U(new p.IsSymbol(function () {
                  return "iSustain_opt";
                }))()(p.SProxy.value)(d)))(function (A) {
                  var B = y.getSubset()()(L.consKeys(new p.IsSymbol(function () {
                    return "fundingStatementURL";
                  }))(L.consKeys(new p.IsSymbol(function () {
                    return "missionStatementURL";
                  }))(L.nilKeys)))(y.getAllAny()(y.getAllOptionCons(new p.IsSymbol(function () {
                    return "fundingStatementURL";
                  }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                    return "missionStatementURL";
                  }))()()()()(y.getAllOptionNil))))(A);
                  return h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(P.policySigArray(new F.Tuple(y.getWithDefault(new p.IsSymbol(function () {
                    return "_numPolicies";
                  }))()(1)(p.SProxy.value)(d), y.get(new p.IsSymbol(function () {
                    return "institutionPolicies";
                  }))()(p.SProxy.value)(d))))(function (C) {
                    var E = F.fst(C),
                        G = F.snd(C);
                    return h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(b.span_(m.shiftMapCofree(q.monoidArray))([D.versioning])(N.checkBoxS(y.getWithDefault(new p.IsSymbol(function () {
                      return "versioning";
                    }))()(!1)(p.SProxy.value)(d))))(function (b) {
                      return h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(l.pure(m.applicativeCofree(g.widgetAlternative(q.monoidArray)))(v.execState(h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                        return "institutionID_opt";
                      }))()(p.SProxy.value)(new z.Just(a))))(function () {
                        return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                          return "institutionID";
                        }))()(p.SProxy.value)(e)))(function () {
                          return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                            return "institutionName";
                          }))()(p.SProxy.value)(u)))(function () {
                            return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                              return "institutionType";
                            }))()(p.SProxy.value)(w)))(function () {
                              return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                                return "superOrganizationName";
                              }))()(p.SProxy.value)(new z.Just(k))))(function () {
                                return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                                  return "institutionContact";
                                }))()(p.SProxy.value)(x)))(function () {
                                  return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                                    return "iSustain_opt";
                                  }))()(p.SProxy.value)(new z.Just(A))))(function () {
                                    return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                                      return "institutionSustainability";
                                    }))()(p.SProxy.value)(B)))(function () {
                                      return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                                        return "_numPolicies";
                                      }))()(p.SProxy.value)(new z.Just(E))))(function () {
                                        return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                                          return "institutionPolicies";
                                        }))()(p.SProxy.value)(G)))(function () {
                                          return h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                                            return "versioning";
                                          }))()(p.SProxy.value)(new z.Just(b)));
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      }))(d)))(function (a) {
                        var b = y.getSubset()()(L.consKeys(new p.IsSymbol(function () {
                          return "institutionContact";
                        }))(L.consKeys(new p.IsSymbol(function () {
                          return "institutionID";
                        }))(L.consKeys(new p.IsSymbol(function () {
                          return "institutionName";
                        }))(L.consKeys(new p.IsSymbol(function () {
                          return "institutionPolicies";
                        }))(L.consKeys(new p.IsSymbol(function () {
                          return "institutionSustainability";
                        }))(L.consKeys(new p.IsSymbol(function () {
                          return "institutionType";
                        }))(L.consKeys(new p.IsSymbol(function () {
                          return "superOrganizationName";
                        }))(L.consKeys(new p.IsSymbol(function () {
                          return "versioning";
                        }))(L.nilKeys)))))))))(y.getAllAny()(y.getAllOptionCons(new p.IsSymbol(function () {
                          return "institutionContact";
                        }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                          return "institutionID";
                        }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                          return "institutionName";
                        }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                          return "institutionPolicies";
                        }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                          return "institutionSustainability";
                        }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                          return "institutionType";
                        }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                          return "superOrganizationName";
                        }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                          return "versioning";
                        }))()()()()(y.getAllOptionNil))))))))))(a);
                        return h.discard(h.discardUnit)(m.bindCofree(g.widgetAlternative(q.monoidArray)))(f.display(c(b)))(function () {
                          return l.pure(m.applicativeCofree(g.widgetAlternative(q.monoidArray)))(new z.Just(a));
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    }));
  },
      oa = function oa(a) {
    return b.div_(m.shiftMapCofree(q.monoidArray))([D.basicMetadata])(h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(b.span_(m.shiftMapCofree(q.monoidArray))([D.title])(N.textInput(y.get(new p.IsSymbol(function () {
      return "title";
    }))()(p.SProxy.value)(a))))(function (c) {
      return h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(b.span_(m.shiftMapCofree(q.monoidArray))([D.creator])(N.textInput(y.get(new p.IsSymbol(function () {
        return "creator";
      }))()(p.SProxy.value)(a))))(function (d) {
        return h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(b.span_(m.shiftMapCofree(q.monoidArray))([D.pubyear])(N.textInput(y.get(new p.IsSymbol(function () {
          return "publicationYear";
        }))()(p.SProxy.value)(a))))(function (b) {
          return l.pure(m.applicativeCofree(g.widgetAlternative(q.monoidArray)))(v.execState(h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
            return "title";
          }))()(p.SProxy.value)(c)))(function () {
            return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
              return "creator";
            }))()(p.SProxy.value)(d)))(function () {
              return h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                return "publicationYear";
              }))()(p.SProxy.value)(b));
            });
          }))(a));
        });
      });
    }));
  },
      qa = function qa(a) {
    var c = function c(a) {
      return b.div(g.widgetMultiAlternative(q.monoidArray))(g.widgetShiftMap)([D.prodPreview])([b["br'"](k.widgetLiftWidget), w.fold(w.foldableMaybe)(g.widgetMonoid(q.monoidArray))(A.map(z.functorMaybe)(M.mkSupplementaryProductWidget)(a))]);
    },
        d = z.fromMaybe(y.empty)(a);

    return b.div_(m.shiftMapCofree(q.monoidArray))([D.product])(h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(oa(U(new p.IsSymbol(function () {
      return "basicMetadata_opt";
    }))()(p.SProxy.value)(d)))(function (a) {
      var e = y.getAll(y.getAllAny()(y.getAllOptionCons(new p.IsSymbol(function () {
        return "creator";
      }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
        return "publicationYear";
      }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
        return "title";
      }))()()()()(y.getAllOptionNil)))))(a);
      return h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(b.div_(m.shiftMapCofree(q.monoidArray))([D.resourceId])(ma(U(new p.IsSymbol(function () {
        return "resourceID_opt";
      }))()(p.SProxy.value)(d))))(function (b) {
        var k = y.getAll(y.getAllAny()(y.getAllOptionCons(new p.IsSymbol(function () {
          return "id";
        }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
          return "idType";
        }))()()()()(y.getAllOptionNil))))(b);
        return h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(aa(U(new p.IsSymbol(function () {
          return "resourceType_opt";
        }))()(p.SProxy.value)(d)))(function (u) {
          var w = y.getSubset()()(L.consKeys(new p.IsSymbol(function () {
            return "description";
          }))(L.consKeys(new p.IsSymbol(function () {
            return "generalType";
          }))(L.nilKeys)))(y.getAllAny()(y.getAllOptionCons(new p.IsSymbol(function () {
            return "description";
          }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
            return "generalType";
          }))()()()()(y.getAllOptionNil))))(u);
          return h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(ca(new F.Tuple(y.getWithDefault(new p.IsSymbol(function () {
            return "_numFormats";
          }))()(0)(p.SProxy.value)(d), y.getWithDefault(new p.IsSymbol(function () {
            return "format";
          }))()([])(p.SProxy.value)(d))))(function (x) {
            var B = F.fst(x),
                C = F.snd(x);
            return h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(ba(U(new p.IsSymbol(function () {
              return "resMdsOpts_opt";
            }))()(p.SProxy.value)(d)))(function (x) {
              var D = y.getSubset()()(L.consKeys(new p.IsSymbol(function () {
                return "relationType";
              }))(L.consKeys(new p.IsSymbol(function () {
                return "url";
              }))(L.nilKeys)))(y.getAllAny()(y.getAllOptionCons(new p.IsSymbol(function () {
                return "relationType";
              }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                return "url";
              }))()()()()(y.getAllOptionNil))))(x);
              return h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(pa(y.get(new p.IsSymbol(function () {
                return "locationOpts_opt";
              }))()(p.SProxy.value)(d)))(function (F) {
                var E = h.join(z.bindMaybe)(A.map(z.functorMaybe)(y.getSubset()()(L.consKeys(new p.IsSymbol(function () {
                  return "institutionContact";
                }))(L.consKeys(new p.IsSymbol(function () {
                  return "institutionID";
                }))(L.consKeys(new p.IsSymbol(function () {
                  return "institutionName";
                }))(L.consKeys(new p.IsSymbol(function () {
                  return "institutionPolicies";
                }))(L.consKeys(new p.IsSymbol(function () {
                  return "institutionSustainability";
                }))(L.consKeys(new p.IsSymbol(function () {
                  return "institutionType";
                }))(L.consKeys(new p.IsSymbol(function () {
                  return "superOrganizationName";
                }))(L.consKeys(new p.IsSymbol(function () {
                  return "versioning";
                }))(L.nilKeys)))))))))(y.getAllAny()(y.getAllOptionCons(new p.IsSymbol(function () {
                  return "institutionContact";
                }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                  return "institutionID";
                }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                  return "institutionName";
                }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                  return "institutionPolicies";
                }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                  return "institutionSustainability";
                }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                  return "institutionType";
                }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                  return "superOrganizationName";
                }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                  return "versioning";
                }))()()()()(y.getAllOptionNil)))))))))))(F));
                return h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(l.pure(m.applicativeCofree(g.widgetAlternative(q.monoidArray)))(v.execState(h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                  return "basicMetadata_opt";
                }))()(p.SProxy.value)(new z.Just(a))))(function () {
                  return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                    return "basicMetadata";
                  }))()(p.SProxy.value)(e)))(function () {
                    return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                      return "resourceID_opt";
                    }))()(p.SProxy.value)(new z.Just(b))))(function () {
                      return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                        return "resourceID";
                      }))()(p.SProxy.value)(new z.Just(k))))(function () {
                        return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                          return "resourceType_opt";
                        }))()(p.SProxy.value)(new z.Just(u))))(function () {
                          return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                            return "resourceType";
                          }))()(p.SProxy.value)(w)))(function () {
                            return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                              return "_numFormats";
                            }))()(p.SProxy.value)(new z.Just(B))))(function () {
                              return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                                return "format";
                              }))()(p.SProxy.value)(new z.Just(C))))(function () {
                                return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                                  return "resMdsOpts_opt";
                                }))()(p.SProxy.value)(new z.Just(x))))(function () {
                                  return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                                    return "resourceMetadataSource";
                                  }))()(p.SProxy.value)(new z.Just(D))))(function () {
                                    return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                                      return "locationOpts_opt";
                                    }))()(p.SProxy.value)(F)))(function () {
                                      return h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                                        return "location";
                                      }))()(p.SProxy.value)(E));
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                }))(d)))(function (a) {
                  var b = y.getSubset()()(L.consKeys(new p.IsSymbol(function () {
                    return "basicMetadata";
                  }))(L.consKeys(new p.IsSymbol(function () {
                    return "format";
                  }))(L.consKeys(new p.IsSymbol(function () {
                    return "location";
                  }))(L.consKeys(new p.IsSymbol(function () {
                    return "resourceID";
                  }))(L.consKeys(new p.IsSymbol(function () {
                    return "resourceMetadataSource";
                  }))(L.consKeys(new p.IsSymbol(function () {
                    return "resourceType";
                  }))(L.nilKeys)))))))(y.getAllAny()(y.getAllOptionCons(new p.IsSymbol(function () {
                    return "basicMetadata";
                  }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                    return "format";
                  }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                    return "location";
                  }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                    return "resourceID";
                  }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                    return "resourceMetadataSource";
                  }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                    return "resourceType";
                  }))()()()()(y.getAllOptionNil))))))))(a);
                  return h.discard(h.discardUnit)(m.bindCofree(g.widgetAlternative(q.monoidArray)))(f.display(c(b)))(function () {
                    return l.pure(m.applicativeCofree(g.widgetAlternative(q.monoidArray)))(new z.Just(a));
                  });
                });
              });
            });
          });
        });
      });
    }));
  },
      ka = function ka(a) {
    return b.div_(m.shiftMapCofree(q.monoidArray))([D.products])(b.span_(m.shiftMapCofree(q.monoidArray))([D.productsHeader])(b.div_(m.shiftMapCofree(q.monoidArray))([D.productList])(N.nonEmptyArrayView(qa)(a))));
  };

  a = function () {
    var a = function a(_a17) {
      var c = z.maybe(l.pure(I.applicativeEffect)(""))(T.recordToString)(_a17);
      return b.div(g.widgetMultiAlternative(q.monoidArray))(g.widgetShiftMap)([D.recPreview])([h.bind(g.widgetBind)(J.liftEffect(g.widgetMonadEff(q.monoidArray))(c))(function (a) {
        return b.div(g.widgetMultiAlternative(q.monoidArray))(g.widgetShiftMap)([D.previewButtons])([ja(a), ea(a)]);
      }), b["br'"](k.widgetLiftWidget), w.fold(w.foldableMaybe)(g.widgetMonoid(q.monoidArray))(A.map(z.functorMaybe)(M.mkRecordWidget)(_a17))]);
    };

    return f.loopS(q.monoidArray)(y.empty)(function (c) {
      return b.div_(m.shiftMapCofree(q.monoidArray))([D.record])(h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(b.div_(m.shiftMapCofree(q.monoidArray))([D.recordId])(ma(U(new p.IsSymbol(function () {
        return "identifier_opt";
      }))()(p.SProxy.value)(c))))(function (d) {
        var e = y.getAll(y.getAllAny()(y.getAllOptionCons(new p.IsSymbol(function () {
          return "id";
        }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
          return "idType";
        }))()()()()(y.getAllOptionNil))))(d);
        return h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(A.map(A.functorFn)(b.div_(m.shiftMapCofree(q.monoidArray))([D.date]))(N.textInput)(y.get(new p.IsSymbol(function () {
          return "date";
        }))()(p.SProxy.value)(c)))(function (b) {
          var k = N.formatXsdDate(N.initDate),
              w = x.hush(k);
          return h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(la(new F.Tuple(y.getWithDefault(new p.IsSymbol(function () {
            return "_numRelIds";
          }))()(0)(p.SProxy.value)(c), y.get(new p.IsSymbol(function () {
            return "relId_opts";
          }))()(p.SProxy.value)(c))))(function (k) {
            var x = F.fst(k),
                B = F.snd(k),
                C = h.join(z.bindMaybe)(A.map(z.functorMaybe)(G.sequence(u.traversableNonEmptyArray)(z.applicativeMaybe))(A.map(z.functorMaybe)(A.map(u.functorNonEmptyArray)(y.getAll(y.getAllAny()(y.getAllOptionCons(new p.IsSymbol(function () {
              return "id";
            }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
              return "idType";
            }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
              return "relType";
            }))()()()()(y.getAllOptionNil)))))))(B)));
            return h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(ka(new F.Tuple(y.getWithDefault(new p.IsSymbol(function () {
              return "_numSupProds";
            }))()(0)(p.SProxy.value)(c), y.get(new p.IsSymbol(function () {
              return "supProd_opts";
            }))()(p.SProxy.value)(c))))(function (k) {
              var D = F.fst(k),
                  E = F.snd(k),
                  H = h.join(z.bindMaybe)(A.map(z.functorMaybe)(G.sequence(u.traversableNonEmptyArray)(z.applicativeMaybe))(A.map(z.functorMaybe)(A.map(u.functorNonEmptyArray)(y.getSubset()()(L.consKeys(new p.IsSymbol(function () {
                return "basicMetadata";
              }))(L.consKeys(new p.IsSymbol(function () {
                return "format";
              }))(L.consKeys(new p.IsSymbol(function () {
                return "location";
              }))(L.consKeys(new p.IsSymbol(function () {
                return "resourceID";
              }))(L.consKeys(new p.IsSymbol(function () {
                return "resourceMetadataSource";
              }))(L.consKeys(new p.IsSymbol(function () {
                return "resourceType";
              }))(L.nilKeys)))))))(y.getAllAny()(y.getAllOptionCons(new p.IsSymbol(function () {
                return "basicMetadata";
              }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                return "format";
              }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                return "location";
              }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                return "resourceID";
              }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                return "resourceMetadataSource";
              }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                return "resourceType";
              }))()()()()(y.getAllOptionNil))))))))))(E)));
              return h.bind(m.bindCofree(g.widgetAlternative(q.monoidArray)))(l.pure(m.applicativeCofree(g.widgetAlternative(q.monoidArray)))(v.execState(h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                return "identifier_opt";
              }))()(p.SProxy.value)(new z.Just(d))))(function () {
                return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                  return "identifier";
                }))()(p.SProxy.value)(e)))(function () {
                  return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                    return "date";
                  }))()(p.SProxy.value)(b)))(function () {
                    return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                      return "lastModified";
                    }))()(p.SProxy.value)(w)))(function () {
                      return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                        return "_numRelIds";
                      }))()(p.SProxy.value)(new z.Just(x))))(function () {
                        return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                          return "relId_opts";
                        }))()(p.SProxy.value)(B)))(function () {
                          return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                            return "relatedIdentifiers";
                          }))()(p.SProxy.value)(C)))(function () {
                            return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                              return "_numSupProds";
                            }))()(p.SProxy.value)(new z.Just(D))))(function () {
                              return h.discard(h.discardUnit)(n.bindStateT(r.monadIdentity))(h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                                return "supProd_opts";
                              }))()(p.SProxy.value)(E)))(function () {
                                return h.bind(n.bindStateT(r.monadIdentity))(t.get(n.monadStateStateT(r.monadIdentity)))(y.maySetOptState(new p.IsSymbol(function () {
                                  return "supplementaryProducts";
                                }))()(p.SProxy.value)(H));
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              }))(c)))(function (b) {
                var c = y.getSubset()()(L.consKeys(new p.IsSymbol(function () {
                  return "date";
                }))(L.consKeys(new p.IsSymbol(function () {
                  return "identifier";
                }))(L.consKeys(new p.IsSymbol(function () {
                  return "lastModified";
                }))(L.consKeys(new p.IsSymbol(function () {
                  return "relatedIdentifiers";
                }))(L.consKeys(new p.IsSymbol(function () {
                  return "supplementaryProducts";
                }))(L.nilKeys))))))(y.getAllAny()(y.getAllOptionCons(new p.IsSymbol(function () {
                  return "date";
                }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                  return "identifier";
                }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                  return "lastModified";
                }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                  return "relatedIdentifiers";
                }))()()()()(y.getAllOptionCons(new p.IsSymbol(function () {
                  return "supplementaryProducts";
                }))()()()()(y.getAllOptionNil)))))))(b);
                return h.discard(h.discardUnit)(m.bindCofree(g.widgetAlternative(q.monoidArray)))(f.display(a(c)))(function () {
                  return l.pure(m.applicativeCofree(g.widgetAlternative(q.monoidArray)))(b);
                });
              });
            });
          });
        });
      }));
    });
  }();

  var ra = b["div'"](g.widgetMultiAlternative(q.monoidArray))(g.widgetShiftMap)([b.div(g.widgetMultiAlternative(q.monoidArray))(g.widgetShiftMap)([D.page])(l.pure(l.applicativeArray)(f.dyn(a)))]);

  c.runFormSPA = function (a) {
    return d.runWidgetInDom(a)(ra);
  };

  c.page = ra;
  c.utf8DataAttr = "data:text/plain;charset=utf-8";
  c.downloadButton = ja;
  c.mkDLAnchorAndClicker = fa;
  c.copyButton = ea;
  c.accumulateMetajeloRecord = a;
  c.accumulateSuppProd = qa;
  c.supProdSigArray = ka;
  c.accumulateLocation = pa;
  c.accumulateSustain = ha;
  c.accumulateIdent = ma;
  c.accumulateRelatedIdent = Y;
  c.relIdSigArray = la;
  c.accumulateBasicMetaData = oa;
  c.accumulateResType = aa;
  c.formatSignal = ia;
  c.formatSigArray = ca;
  c.accumulateResMdSource = ba;
  c.getOpt = U;
})(PS);

module.exports = PS["Metajelo.UI"];
},{"react":"n8MK","react-dom":"NKHc","react-dom/server":"KpxE"}],"Focm":[function(require,module,exports) {
"use strict";

var MetajeloUI = _interopRequireWildcard(require("./index.opt.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// var Metajelo = require("../output/Metajelo"); // For bower
window.MetajeloUI = MetajeloUI;
},{"./index.opt.js":"xbCx"}]},{},["Focm"], null)
//# sourceMappingURL=prod.14dbc737.js.map