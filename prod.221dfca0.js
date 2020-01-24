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

$jscomp.checkStringArgs = function (a, d, f) {
  if (null == a) throw new TypeError("The 'this' value for String.prototype." + f + " must not be null or undefined");
  if (d instanceof RegExp) throw new TypeError("First argument to String.prototype." + f + " must not be a regular expression");
  return a + "";
};

$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, d, f) {
  a != Array.prototype && a != Object.prototype && (a[d] = f.value);
};

$jscomp.getGlobal = function (a) {
  return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a;
};

$jscomp.global = $jscomp.getGlobal(this);

$jscomp.polyfill = function (a, d, f, k) {
  if (d) {
    f = $jscomp.global;
    a = a.split(".");

    for (k = 0; k < a.length - 1; k++) {
      var h = a[k];
      h in f || (f[h] = {});
      f = f[h];
    }

    a = a[a.length - 1];
    k = f[a];
    d = d(k);
    d != k && null != d && $jscomp.defineProperty(f, a, {
      configurable: !0,
      writable: !0,
      value: d
    });
  }
};

$jscomp.polyfill("String.prototype.codePointAt", function (a) {
  return a ? a : function (a) {
    var d = $jscomp.checkStringArgs(this, null, "codePointAt"),
        k = d.length;
    a = Number(a) || 0;

    if (0 <= a && a < k) {
      a |= 0;
      var h = d.charCodeAt(a);
      if (55296 > h || 56319 < h || a + 1 === k) return h;
      a = d.charCodeAt(a + 1);
      return 56320 > a || 57343 < a ? h : 1024 * (h - 55296) + a + 9216;
    }
  };
}, "es6", "es3");
$jscomp.polyfill("String.fromCodePoint", function (a) {
  return a ? a : function (a) {
    for (var d = "", k = 0; k < arguments.length; k++) {
      var h = Number(arguments[k]);
      if (0 > h || 1114111 < h || h !== Math.floor(h)) throw new RangeError("invalid_code_point " + h);
      65535 >= h ? d += String.fromCharCode(h) : (h -= 65536, d += String.fromCharCode(h >>> 10 & 1023 | 55296), d += String.fromCharCode(h & 1023 | 56320));
    }

    return d;
  };
}, "es6", "es3");
$jscomp.polyfill("Array.from", function (a) {
  return a ? a : function (a, f, k) {
    f = null != f ? f : function (a) {
      return a;
    };
    var d = [],
        b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];

    if ("function" == typeof b) {
      a = b.call(a);

      for (var e = 0; !(b = a.next()).done;) {
        d.push(f.call(k, b.value, e++));
      }
    } else for (b = a.length, e = 0; e < b; e++) {
      d.push(f.call(k, a[e], e));
    }

    return d;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.endsWith", function (a) {
  return a ? a : function (a, f) {
    var d = $jscomp.checkStringArgs(this, a, "endsWith");
    a += "";
    void 0 === f && (f = d.length);
    f = Math.max(0, Math.min(f | 0, d.length));

    for (var h = a.length; 0 < h && 0 < f;) {
      if (d[--f] != a[--h]) return !1;
    }

    return 0 >= h;
  };
}, "es6", "es3");
$jscomp.polyfill("Object.is", function (a) {
  return a ? a : function (a, f) {
    return a === f ? 0 !== a || 1 / a === 1 / f : a !== a && f !== f;
  };
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.includes", function (a) {
  return a ? a : function (a, f) {
    var d = this;
    d instanceof String && (d = String(d));
    var h = d.length;
    f = f || 0;

    for (0 > f && (f = Math.max(f + h, 0)); f < h; f++) {
      var b = d[f];
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
    var d = $jscomp.checkStringArgs(this, null, "repeat");
    if (0 > a || 1342177279 < a) throw new RangeError("Invalid count value");
    a |= 0;

    for (var k = ""; a;) {
      if (a & 1 && (k += d), a >>>= 1) d += d;
    }

    return k;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.startsWith", function (a) {
  return a ? a : function (a, f) {
    var d = $jscomp.checkStringArgs(this, a, "startsWith");
    a += "";
    var h = d.length,
        b = a.length;
    f = Math.max(0, Math.min(f | 0, d.length));

    for (var e = 0; e < b && f < h;) {
      if (d[f++] != a[e++]) return !1;
    }

    return e >= b;
  };
}, "es6", "es3");

$jscomp.arrayIteratorImpl = function (a) {
  var d = 0;
  return function () {
    return d < a.length ? {
      done: !1,
      value: a[d++]
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

$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";

$jscomp.initSymbol = function () {
  $jscomp.initSymbol = function () {};

  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};

$jscomp.SymbolClass = function (a, d) {
  this.$jscomp$symbol$id_ = a;
  $jscomp.defineProperty(this, "description", {
    configurable: !0,
    writable: !0,
    value: d
  });
};

$jscomp.SymbolClass.prototype.toString = function () {
  return this.$jscomp$symbol$id_;
};

$jscomp.Symbol = function () {
  function a(f) {
    if (this instanceof a) throw new TypeError("Symbol is not a constructor");
    return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (f || "") + "_" + d++, f);
  }

  var d = 0;
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

$jscomp.iteratorFromArray = function (a, d) {
  $jscomp.initSymbolIterator();
  a instanceof String && (a += "");
  var f = 0,
      k = {
    next: function next() {
      if (f < a.length) {
        var h = f++;
        return {
          value: d(h, a[h]),
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
    return function (d) {
      for (var f = a.length, h = d.length, b = Array(f * h), e = 0, c = 0; c < f; c++) {
        for (var g = a[c], l = 0; l < h; l++) {
          b[e++] = g(d[l]);
        }
      }

      return b;
    };
  };
})(PS["Control.Apply"] = PS["Control.Apply"] || {});

(function (a) {
  a["Control.Semigroupoid"] = a["Control.Semigroupoid"] || {};
  a = a["Control.Semigroupoid"];
  var d = new function (a) {
    this.compose = a;
  }(function (a) {
    return function (d) {
      return function (f) {
        return a(d(f));
      };
    };
  });

  a.compose = function (a) {
    return a.compose;
  };

  a.composeFlipped = function (a) {
    return function (d) {
      return function (f) {
        return (0, a.compose)(f)(d);
      };
    };
  };

  a.semigroupoidFn = d;
})(PS);

(function (a) {
  a["Control.Category"] = a["Control.Category"] || {};
  var d = a["Control.Category"],
      f = a["Control.Semigroupoid"];
  a = new function (a, d) {
    this.Semigroupoid0 = a;
    this.identity = d;
  }(function () {
    return f.semigroupoidFn;
  }, function (a) {
    return a;
  });

  d.identity = function (a) {
    return a.identity;
  };

  d.categoryFn = a;
})(PS);

(function (a) {
  a["Data.Function"] = a["Data.Function"] || {};
  a = a["Data.Function"];

  a.flip = function (a) {
    return function (d) {
      return function (f) {
        return a(f)(d);
      };
    };
  };

  a["const"] = function (a) {
    return function (d) {
      return a;
    };
  };
})(PS);

(function (a) {
  a.arrayMap = function (a) {
    return function (d) {
      for (var f = d.length, h = Array(f), b = 0; b < f; b++) {
        h[b] = a(d[b]);
      }

      return h;
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
  var d = a["Data.Functor"],
      f = a["Data.Functor"],
      k = a["Control.Semigroupoid"],
      h = a["Data.Function"],
      b = a["Data.Unit"];

  a = function a(_a) {
    this.map = _a;
  };

  k = new a(k.compose(k.semigroupoidFn));
  f = new a(f.arrayMap);
  d.Functor = a;

  d.map = function (a) {
    return a.map;
  };

  d.mapFlipped = function (a) {
    return function (b) {
      return function (c) {
        return (0, a.map)(c)(b);
      };
    };
  };

  d["void"] = function (a) {
    return (0, a.map)(h["const"](b.unit));
  };

  d.voidRight = function (a) {
    return function (b) {
      return (0, a.map)(h["const"](b));
    };
  };

  d.voidLeft = function (a) {
    return function (b) {
      return function (c) {
        return (0, a.map)(h["const"](c))(b);
      };
    };
  };

  d.flap = function (a) {
    return function (b) {
      return function (c) {
        return (0, a.map)(function (a) {
          return a(c);
        })(b);
      };
    };
  };

  d.functorFn = k;
  d.functorArray = f;
})(PS);

(function (a) {
  a["Control.Apply"] = a["Control.Apply"] || {};
  var d = a["Control.Apply"],
      f = a["Control.Apply"],
      k = a["Control.Category"],
      h = a["Data.Function"],
      b = a["Data.Functor"];

  a = function a(_a2, b) {
    this.Functor0 = _a2;
    this.apply = b;
  };

  var e = new a(function () {
    return b.functorFn;
  }, function (a) {
    return function (b) {
      return function (c) {
        return a(c)(b(c));
      };
    };
  });
  f = new a(function () {
    return b.functorArray;
  }, f.arrayApply);
  d.Apply = a;

  d.apply = function (a) {
    return a.apply;
  };

  d.applyFirst = function (a) {
    return function (c) {
      return function (e) {
        return (0, a.apply)(b.map(a.Functor0())(h["const"])(c))(e);
      };
    };
  };

  d.applySecond = function (a) {
    return function (c) {
      return function (e) {
        return (0, a.apply)(b.map(a.Functor0())(h["const"](k.identity(k.categoryFn)))(c))(e);
      };
    };
  };

  d.applyFn = e;
  d.applyArray = f;
})(PS);

(function (a) {
  a["Control.Applicative"] = a["Control.Applicative"] || {};
  var d = a["Control.Applicative"],
      f = a["Control.Apply"],
      k = a["Data.Unit"];

  a = function a(_a3, e) {
    this.Apply0 = _a3;
    this.pure = e;
  };

  var h = new a(function () {
    return f.applyArray;
  }, function (a) {
    return [a];
  });
  d.Applicative = a;

  d.pure = function (a) {
    return a.pure;
  };

  d.liftA1 = function (a) {
    return function (b) {
      return function (c) {
        return f.apply(a.Apply0())((0, a.pure)(b))(c);
      };
    };
  };

  d.unless = function (a) {
    return function (b) {
      return function (c) {
        if (!b) return c;
        if (b) return (0, a.pure)(k.unit);
        throw Error("Failed pattern match at Control.Applicative (line 62, column 1 - line 62, column 65): " + [b.constructor.name, c.constructor.name]);
      };
    };
  };

  d.applicativeArray = h;
})(PS);

(function (a) {
  a.arrayBind = function (a) {
    return function (d) {
      for (var f = [], h = 0, b = a.length; h < b; h++) {
        Array.prototype.push.apply(f, d(a[h]));
      }

      return f;
    };
  };
})(PS["Control.Bind"] = PS["Control.Bind"] || {});

(function (a) {
  a["Control.Bind"] = a["Control.Bind"] || {};

  var d = a["Control.Bind"],
      f = a["Control.Apply"],
      k = a["Control.Category"],
      h = a["Data.Function"],
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
  d.Bind = b;

  d.bind = function (a) {
    return a.bind;
  };

  d.bindFlipped = function (a) {
    return h.flip(a.bind);
  };

  d.discard = function (a) {
    return a.discard;
  };

  d.join = function (a) {
    return function (b) {
      return (0, a.bind)(b)(k.identity(k.categoryFn));
    };
  };

  d.bindArray = a;
  d.discardUnit = e;
})(PS);

(function (a) {
  a["Control.Monad"] = a["Control.Monad"] || {};
  var d = a["Control.Monad"],
      f = a["Control.Applicative"],
      k = a["Control.Bind"];

  d.Monad = function (a, b) {
    this.Applicative0 = a;
    this.Bind1 = b;
  };

  d.ap = function (a) {
    return function (b) {
      return function (e) {
        return k.bind(a.Bind1())(b)(function (b) {
          return k.bind(a.Bind1())(e)(function (c) {
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
  var d = a["Data.Bifunctor"],
      f = a["Control.Category"];

  d.bimap = function (a) {
    return a.bimap;
  };

  d.Bifunctor = function (a) {
    this.bimap = a;
  };

  d.lmap = function (a) {
    return function (d) {
      return (0, a.bimap)(d)(f.identity(f.categoryFn));
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
  var d = function d(a) {
    return function (d) {
      return function (f) {
        return function (b) {
          return function (e) {
            return b < e ? a : b === e ? d : f;
          };
        };
      };
    };
  };

  a.ordBooleanImpl = d;
  a.ordIntImpl = d;
  a.ordCharImpl = d;
})(PS["Data.Ord"] = PS["Data.Ord"] || {});

(function (a) {
  var d = function d(a) {
    return function (d) {
      return a === d;
    };
  };

  a.eqBooleanImpl = d;
  a.eqIntImpl = d;
  a.eqCharImpl = d;
  a.eqStringImpl = d;
})(PS["Data.Eq"] = PS["Data.Eq"] || {});

(function (a) {
  a["Data.Symbol"] = a["Data.Symbol"] || {};
  a = a["Data.Symbol"];

  var d = function () {
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

  a.SProxy = d;
})(PS);

(function (a) {
  a.unsafeGet = function (a) {
    return function (d) {
      return d[a];
    };
  };

  a.unsafeSet = function (a) {
    return function (d) {
      return function (f) {
        var h = {},
            b;

        for (b in f) {
          ({}).hasOwnProperty.call(f, b) && (h[b] = f[b]);
        }

        h[a] = d;
        return h;
      };
    };
  };
})(PS["Record.Unsafe"] = PS["Record.Unsafe"] || {});

(function (a) {
  a["Record.Unsafe"] = a["Record.Unsafe"] || {};
  var d = a["Record.Unsafe"];
  a = a["Record.Unsafe"];
  d.unsafeGet = a.unsafeGet;
  d.unsafeSet = a.unsafeSet;
})(PS);

(function (a) {
  a["Type.Data.RowList"] = a["Type.Data.RowList"] || {};
  a = a["Type.Data.RowList"];

  var d = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  a.RLProxy = d;
})(PS);

(function (a) {
  a["Data.Eq"] = a["Data.Eq"] || {};

  var d = a["Data.Eq"],
      f = a["Data.Eq"],
      k = a["Data.Symbol"],
      h = a["Record.Unsafe"],
      b = a["Type.Data.RowList"],
      e = function e(a) {
    this.eqRecord = a;
  },
      c = function c(a) {
    this.eq = a;
  };

  a = new c(f.eqStringImpl);
  var g = new e(function (a) {
    return function (a) {
      return function (a) {
        return !0;
      };
    };
  }),
      l = new c(f.eqIntImpl),
      m = new c(f.eqCharImpl);
  f = new c(f.eqBooleanImpl);
  d.Eq = c;

  d.eq = function (a) {
    return a.eq;
  };

  d.eqBoolean = f;
  d.eqInt = l;
  d.eqChar = m;
  d.eqString = a;

  d.eqRec = function (a) {
    return function (a) {
      return new c((0, a.eqRecord)(b.RLProxy.value));
    };
  };

  d.eqRowNil = g;

  d.eqRowCons = function (a) {
    return function (c) {
      return function (c) {
        return function (d) {
          return new e(function (e) {
            return function (e) {
              return function (f) {
                var g = (0, a.eqRecord)(b.RLProxy.value)(e)(f),
                    l = k.reflectSymbol(c)(k.SProxy.value);
                l = h.unsafeGet(l);
                return (0, d.eq)(l(e))(l(f)) && g;
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

  var d = function () {
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

  a.LT = d;
  a.GT = f;
  a.EQ = k;
})(PS);

(function (a) {
  a.intSub = function (a) {
    return function (d) {
      return a - d | 0;
    };
  };
})(PS["Data.Ring"] = PS["Data.Ring"] || {});

(function (a) {
  a.intAdd = function (a) {
    return function (d) {
      return a + d | 0;
    };
  };

  a.intMul = function (a) {
    return function (d) {
      return a * d | 0;
    };
  };
})(PS["Data.Semiring"] = PS["Data.Semiring"] || {});

(function (a) {
  a["Data.Semiring"] = a["Data.Semiring"] || {};
  var d = a["Data.Semiring"];
  a = a["Data.Semiring"];
  a = new function (a, d, h, b) {
    this.add = a;
    this.mul = d;
    this.one = h;
    this.zero = b;
  }(a.intAdd, a.intMul, 1, 0);

  d.zero = function (a) {
    return a.zero;
  };

  d.semiringInt = a;
})(PS);

(function (a) {
  a["Data.Ring"] = a["Data.Ring"] || {};
  var d = a["Data.Ring"],
      f = a["Data.Semiring"];
  a = new function (a, d) {
    this.Semiring0 = a;
    this.sub = d;
  }(function () {
    return f.semiringInt;
  }, a["Data.Ring"].intSub);

  d.negate = function (a) {
    return function (d) {
      return (0, a.sub)(f.zero(a.Semiring0()))(d);
    };
  };

  d.ringInt = a;
})(PS);

(function (a) {
  a["Data.Ord"] = a["Data.Ord"] || {};
  var d = a["Data.Ord"],
      f = a["Data.Ord"],
      k = a["Data.Eq"],
      h = a["Data.Ordering"],
      b = a["Data.Ring"],
      e = a["Data.Semiring"];

  a = function a(_a4, b) {
    this.Eq0 = _a4;
    this.compare = b;
  };

  var c = new a(function () {
    return k.eqInt;
  }, f.ordIntImpl(h.LT.value)(h.EQ.value)(h.GT.value)),
      g = new a(function () {
    return k.eqChar;
  }, f.ordCharImpl(h.LT.value)(h.EQ.value)(h.GT.value));
  f = new a(function () {
    return k.eqBoolean;
  }, f.ordBooleanImpl(h.LT.value)(h.EQ.value)(h.GT.value));

  var l = function l(a) {
    return function (b) {
      return function (c) {
        return (0, a.compare)(b)(c) instanceof h.LT ? !1 : !0;
      };
    };
  };

  d.Ord = a;

  d.compare = function (a) {
    return a.compare;
  };

  d.max = function (a) {
    return function (b) {
      return function (c) {
        var d = (0, a.compare)(b)(c);
        if (d instanceof h.LT) return c;
        if (d instanceof h.EQ || d instanceof h.GT) return b;
        throw Error("Failed pattern match at Data.Ord (line 167, column 3 - line 170, column 12): " + [d.constructor.name]);
      };
    };
  };

  d.abs = function (a) {
    return function (c) {
      return function (d) {
        return l(a)(d)(e.zero(c.Semiring0())) ? d : b.negate(c)(d);
      };
    };
  };

  d.ordBoolean = f;
  d.ordInt = c;
  d.ordChar = g;
})(PS);

(function (a) {
  a["Data.Bounded"] = a["Data.Bounded"] || {};
  var d = a["Data.Bounded"],
      f = a["Data.Bounded"],
      k = a["Data.Ord"];

  a = function a(_a5, b, d) {
    this.Ord0 = _a5;
    this.bottom = b;
    this.top = d;
  };

  var h = new a(function () {
    return k.ordInt;
  }, f.bottomInt, f.topInt);
  f = new a(function () {
    return k.ordChar;
  }, f.bottomChar, f.topChar);
  var b = new a(function () {
    return k.ordBoolean;
  }, !1, !0);
  d.Bounded = a;

  d.bottom = function (a) {
    return a.bottom;
  };

  d.top = function (a) {
    return a.top;
  };

  d.boundedBoolean = b;
  d.boundedInt = h;
  d.boundedChar = f;
})(PS);

(function (a) {
  a.showIntImpl = function (a) {
    return a.toString();
  };

  a.showCharImpl = function (a) {
    var d = a.charCodeAt(0);

    if (32 > d || 127 === d) {
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

      return "'\\" + d.toString(10) + "'";
    }

    return "'" === a || "\\" === a ? "'\\" + a + "'" : "'" + a + "'";
  };

  a.showStringImpl = function (a) {
    var d = a.length;
    return '"' + a.replace(/[\0-\x1F\x7F"\\]/g, function (f, h) {
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

      h += 1;
      h = h < d && "0" <= a[h] && "9" >= a[h] ? "\\&" : "";
      return "\\" + f.charCodeAt(0).toString(10) + h;
    }) + '"';
  };

  a.showArrayImpl = function (a) {
    return function (d) {
      for (var f = [], h = 0, b = d.length; h < b; h++) {
        f[h] = a(d[h]);
      }

      return "[" + f.join(",") + "]";
    };
  };

  a.cons = function (a) {
    return function (d) {
      return [a].concat(d);
    };
  };

  a.join = function (a) {
    return function (d) {
      return d.join(a);
    };
  };
})(PS["Data.Show"] = PS["Data.Show"] || {});

(function (a) {
  a["Data.Show"] = a["Data.Show"] || {};

  var d = a["Data.Show"],
      f = a["Data.Show"],
      k = a["Data.Symbol"],
      h = a["Record.Unsafe"],
      b = a["Type.Data.RowList"],
      e = function e(a) {
    this.showRecordFields = a;
  },
      c = function c(a) {
    this.show = a;
  };

  a = new c(f.showStringImpl);
  var g = new e(function (a) {
    return function (a) {
      return [];
    };
  }),
      l = new c(f.showIntImpl),
      m = new c(f.showCharImpl),
      u = new c(function (a) {
    if (a) return "true";
    if (!a) return "false";
    throw Error("Failed pattern match at Data.Show (line 20, column 1 - line 22, column 23): " + [a.constructor.name]);
  });
  d.Show = c;

  d.show = function (a) {
    return a.show;
  };

  d.showBoolean = u;
  d.showInt = l;
  d.showChar = m;
  d.showString = a;

  d.showArray = function (a) {
    return new c(f.showArrayImpl(a.show));
  };

  d.showRecord = function (a) {
    return function (a) {
      return new c(function (c) {
        c = (0, a.showRecordFields)(b.RLProxy.value)(c);
        return 0 === c.length ? "{}" : f.join(" ")(["{", f.join(", ")(c), "}"]);
      });
    };
  };

  d.showRecordFieldsNil = g;

  d.showRecordFieldsCons = function (a) {
    return function (c) {
      return function (d) {
        return new e(function (e) {
          return function (e) {
            var g = (0, c.showRecordFields)(b.RLProxy.value)(e),
                l = k.reflectSymbol(a)(k.SProxy.value);
            e = h.unsafeGet(l)(e);
            return f.cons(f.join(": ")([l, (0, d.show)(e)]))(g);
          };
        });
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Maybe"] = a["Data.Maybe"] || {};

  var d = a["Data.Maybe"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Category"],
      e = a["Data.Bounded"],
      c = a["Data.Eq"],
      g = a["Data.Function"],
      l = a["Data.Functor"],
      m = a["Data.Ord"],
      u = a["Data.Ordering"],
      p = a["Data.Show"],
      x = function () {
    function a() {}

    a.value = new a();
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
      r = function r(a) {
    return function (b) {
      return function (c) {
        if (c instanceof x) return a;
        if (c instanceof v) return b(c.value0);
        throw Error("Failed pattern match at Data.Maybe (line 217, column 1 - line 217, column 51): " + [a.constructor.name, b.constructor.name, c.constructor.name]);
      };
    };
  };

  a = r(!0)(g["const"](!1));
  g = r(!1)(g["const"](!0));

  var y = new l.Functor(function (a) {
    return function (b) {
      return b instanceof v ? new v(a(b.value0)) : x.value;
    };
  }),
      C = function C(a) {
    return new c.Eq(function (b) {
      return function (d) {
        return b instanceof x && d instanceof x ? !0 : b instanceof v && d instanceof v ? c.eq(a)(b.value0)(d.value0) : !1;
      };
    });
  },
      t = function t(a) {
    return new m.Ord(function () {
      return C(a.Eq0());
    }, function (b) {
      return function (c) {
        if (b instanceof x && c instanceof x) return u.EQ.value;
        if (b instanceof x) return u.LT.value;
        if (c instanceof x) return u.GT.value;
        if (b instanceof v && c instanceof v) return m.compare(a)(b.value0)(c.value0);
        throw Error("Failed pattern match at Data.Maybe (line 194, column 1 - line 194, column 51): " + [b.constructor.name, c.constructor.name]);
      };
    });
  },
      A = new k.Apply(function () {
    return y;
  }, function (a) {
    return function (b) {
      if (a instanceof v) return l.map(y)(a.value0)(b);
      if (a instanceof x) return x.value;
      throw Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [a.constructor.name, b.constructor.name]);
    };
  });

  k = new h.Bind(function () {
    return A;
  }, function (a) {
    return function (b) {
      if (a instanceof v) return b(a.value0);
      if (a instanceof x) return x.value;
      throw Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [a.constructor.name, b.constructor.name]);
    };
  });
  f = new f.Applicative(function () {
    return A;
  }, v.create);
  d.Nothing = x;
  d.Just = v;
  d.maybe = r;

  d.fromMaybe = function (a) {
    return r(a)(b.identity(b.categoryFn));
  };

  d.isJust = g;
  d.isNothing = a;

  d.fromJust = function (a) {
    return function (a) {
      if (a instanceof v) return a.value0;
      throw Error("Failed pattern match at Data.Maybe (line 268, column 1 - line 268, column 46): " + [a.constructor.name]);
    };
  };

  d.functorMaybe = y;
  d.applyMaybe = A;
  d.applicativeMaybe = f;
  d.bindMaybe = k;
  d.eqMaybe = C;
  d.ordMaybe = t;

  d.boundedMaybe = function (a) {
    return new e.Bounded(function () {
      return t(a.Ord0());
    }, x.value, new v(e.top(a)));
  };

  d.showMaybe = function (a) {
    return new p.Show(function (b) {
      if (b instanceof v) return "(Just " + (p.show(a)(b.value0) + ")");
      if (b instanceof x) return "Nothing";
      throw Error("Failed pattern match at Data.Maybe (line 205, column 1 - line 207, column 28): " + [b.constructor.name]);
    });
  };
})(PS);

(function (a) {
  a["Data.Either"] = a["Data.Either"] || {};

  var d = a["Data.Either"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Data.Bifunctor"],
      c = a["Data.Function"],
      g = a["Data.Functor"],
      l = a["Data.Maybe"],
      m = function () {
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
      p = new g.Functor(function (a) {
    return function (b) {
      if (b instanceof m) return new m(b.value0);
      if (b instanceof u) return new u(a(b.value0));
      throw Error("Failed pattern match at Data.Either (line 38, column 1 - line 38, column 52): " + [b.constructor.name]);
    };
  });

  a = function a(_a6) {
    return function (b) {
      return function (c) {
        if (c instanceof m) return _a6(c.value0);
        if (c instanceof u) return b(c.value0);
        throw Error("Failed pattern match at Data.Either (line 238, column 1 - line 238, column 64): " + [_a6.constructor.name, b.constructor.name, c.constructor.name]);
      };
    };
  };

  c = a(c["const"](l.Nothing.value))(l.Just.create);
  e = new e.Bifunctor(function (a) {
    return function (b) {
      return function (c) {
        if (c instanceof m) return new m(a(c.value0));
        if (c instanceof u) return new u(b(c.value0));
        throw Error("Failed pattern match at Data.Either (line 46, column 1 - line 48, column 36): " + [a.constructor.name, b.constructor.name, c.constructor.name]);
      };
    };
  });
  var x = new k.Apply(function () {
    return p;
  }, function (a) {
    return function (b) {
      if (a instanceof m) return new m(a.value0);
      if (a instanceof u) return g.map(p)(a.value0)(b);
      throw Error("Failed pattern match at Data.Either (line 82, column 1 - line 84, column 30): " + [a.constructor.name, b.constructor.name]);
    };
  }),
      v = new h.Bind(function () {
    return x;
  }, a(function (a) {
    return function (b) {
      return new m(a);
    };
  })(function (a) {
    return function (b) {
      return b(a);
    };
  })),
      r = new f.Applicative(function () {
    return x;
  }, u.create);
  f = new b.Monad(function () {
    return r;
  }, function () {
    return v;
  });
  d.Left = m;
  d.Right = u;
  d.either = a;
  d.hush = c;
  d.functorEither = p;
  d.bifunctorEither = e;
  d.applicativeEither = r;
  d.bindEither = v;
  d.monadEither = f;
})(PS);

(function (a) {
  a["Control.Monad.Rec.Class"] = a["Control.Monad.Rec.Class"] || {};

  var d = a["Control.Monad.Rec.Class"],
      f = a["Data.Bifunctor"],
      k = a["Data.Either"],
      h = function () {
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
        if (e = c, e instanceof h) c = a(e.value0), e = void 0;else if (e instanceof b) d = !0, e = e.value0;else throw Error("Failed pattern match at Control.Monad.Rec.Class (line 93, column 3 - line 93, column 25): " + [e.constructor.name]);
      }

      return e;
    };
  },
      c = new a(function () {
    return k.monadEither;
  }, function (a) {
    return function (c) {
      return e(function (c) {
        if (c instanceof k.Left) return new b(new k.Left(c.value0));
        if (c instanceof k.Right && c.value0 instanceof h) return new h(a(c.value0.value0));
        if (c instanceof k.Right && c.value0 instanceof b) return new b(new k.Right(c.value0.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 121, column 7 - line 121, column 33): " + [c.constructor.name]);
      })(a(c));
    };
  });

  f = new f.Bifunctor(function (a) {
    return function (c) {
      return function (d) {
        if (d instanceof h) return new h(a(d.value0));
        if (d instanceof b) return new b(c(d.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 29, column 1 - line 31, column 34): " + [a.constructor.name, c.constructor.name, d.constructor.name]);
      };
    };
  });
  d.Loop = h;
  d.Done = b;
  d.MonadRec = a;

  d.tailRecM = function (a) {
    return a.tailRecM;
  };

  d.bifunctorStep = f;
  d.monadRecEither = c;
})(PS);

(function (a) {
  a.foldrArray = function (a) {
    return function (d) {
      return function (f) {
        for (var h = d, b = f.length - 1; 0 <= b; b--) {
          h = a(f[b])(h);
        }

        return h;
      };
    };
  };

  a.foldlArray = function (a) {
    return function (d) {
      return function (f) {
        for (var h = d, b = f.length, e = 0; e < b; e++) {
          h = a(h)(f[e]);
        }

        return h;
      };
    };
  };
})(PS["Data.Foldable"] = PS["Data.Foldable"] || {});

(function (a) {
  a.boolConj = function (a) {
    return function (d) {
      return a && d;
    };
  };

  a.boolDisj = function (a) {
    return function (d) {
      return a || d;
    };
  };

  a.boolNot = function (a) {
    return !a;
  };
})(PS["Data.HeytingAlgebra"] = PS["Data.HeytingAlgebra"] || {});

(function (a) {
  a["Data.HeytingAlgebra"] = a["Data.HeytingAlgebra"] || {};
  var d = a["Data.HeytingAlgebra"];
  a = a["Data.HeytingAlgebra"];
  var f = new function (a, d, b, e, c, f) {
    this.conj = a;
    this.disj = d;
    this.ff = b;
    this.implies = e;
    this.not = c;
    this.tt = f;
  }(a.boolConj, a.boolDisj, !1, function (a) {
    return function (d) {
      return (0, f.disj)((0, f.not)(a))(d);
    };
  }, a.boolNot, !0);

  d.ff = function (a) {
    return a.ff;
  };

  d.disj = function (a) {
    return a.disj;
  };

  d.not = function (a) {
    return a.not;
  };

  d.heytingAlgebraBoolean = f;
})(PS);

(function (a) {
  a.concatString = function (a) {
    return function (d) {
      return a + d;
    };
  };

  a.concatArray = function (a) {
    return function (d) {
      return 0 === a.length ? d : 0 === d.length ? a : a.concat(d);
    };
  };
})(PS["Data.Semigroup"] = PS["Data.Semigroup"] || {});

(function (a) {
  a["Data.Semigroup"] = a["Data.Semigroup"] || {};

  var d = a["Data.Semigroup"],
      f = a["Data.Semigroup"],
      k = function k(a) {
    this.append = a;
  };

  a = new k(f.concatString);
  f = new k(f.concatArray);
  d.Semigroup = k;

  d.append = function (a) {
    return a.append;
  };

  d.semigroupString = a;

  d.semigroupFn = function (a) {
    return new k(function (b) {
      return function (d) {
        return function (c) {
          return (0, a.append)(b(c))(d(c));
        };
      };
    });
  };

  d.semigroupArray = f;
})(PS);

(function (a) {
  a["Data.Monoid"] = a["Data.Monoid"] || {};

  var d = a["Data.Monoid"],
      f = a["Data.Semigroup"],
      k = function k(a, d) {
    this.Semigroup0 = a;
    this.mempty = d;
  };

  a = new k(function () {
    return f.semigroupString;
  }, "");
  var h = new k(function () {
    return f.semigroupArray;
  }, []);
  d.Monoid = k;

  d.mempty = function (a) {
    return a.mempty;
  };

  d.monoidFn = function (a) {
    return new k(function () {
      return f.semigroupFn(a.Semigroup0());
    }, function (b) {
      return a.mempty;
    });
  };

  d.monoidString = a;
  d.monoidArray = h;
})(PS);

(function (a) {
  a["Data.Monoid.Disj"] = a["Data.Monoid.Disj"] || {};

  var d = a["Data.Monoid.Disj"],
      f = a["Data.HeytingAlgebra"],
      k = a["Data.Monoid"],
      h = a["Data.Semigroup"],
      b = function b(a) {
    return new h.Semigroup(function (b) {
      return function (c) {
        return f.disj(a)(b)(c);
      };
    });
  };

  d.Disj = function (a) {
    return a;
  };

  d.monoidDisj = function (a) {
    return new k.Monoid(function () {
      return b(a);
    }, f.ff(a));
  };
})(PS);

(function (a) {
  a["Data.Newtype"] = a["Data.Newtype"] || {};

  var d = a["Data.Newtype"],
      f = a["Data.Functor"],
      k = function k(a, b) {
    this.unwrap = a;
    this.wrap = b;
  };

  a = new k(function (a) {
    return a;
  }, a["Data.Monoid.Disj"].Disj);

  d.unwrap = function (a) {
    return a.unwrap;
  };

  d.wrap = function (a) {
    return a.wrap;
  };

  d.Newtype = k;

  d.alaF = function (a) {
    return function (b) {
      return function (d) {
        return function (c) {
          return function (e) {
            return function (e) {
              var g = f.map(b)(c.unwrap),
                  h = f.map(a)(d.wrap);
              return function (a) {
                return g(e(h(a)));
              };
            };
          };
        };
      };
    };
  };

  d.over = function (a) {
    return function (b) {
      return function (d) {
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

  d.under = function (a) {
    return function (b) {
      return function (d) {
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

  d.newtypeDisj = a;
})(PS);

(function (a) {
  a["Data.Foldable"] = a["Data.Foldable"] || {};
  var d = a["Data.Foldable"],
      f = a["Data.Foldable"],
      k = a["Control.Applicative"],
      h = a["Control.Apply"],
      b = a["Control.Category"],
      e = a["Data.Eq"],
      c = a["Data.Function"],
      g = a["Data.Functor"],
      l = a["Data.HeytingAlgebra"],
      m = a["Data.Maybe"],
      u = a["Data.Monoid"],
      p = a["Data.Monoid.Disj"],
      x = a["Data.Newtype"],
      v = a["Data.Semigroup"],
      r = a["Data.Unit"];

  a = function a(_a8, b, c) {
    this.foldMap = _a8;
    this.foldl = b;
    this.foldr = c;
  };

  var y = function y(a) {
    return function (b) {
      return function (c) {
        return (0, b.foldr)(function () {
          var b = h.applySecond(a.Apply0());
          return function (a) {
            return b(c(a));
          };
        }())(k.pure(a)(r.unit));
      };
    };
  },
      C = new a(function (a) {
    return function (b) {
      return function (c) {
        if (c instanceof m.Nothing) return u.mempty(a);
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
      t = function t(a) {
    return function (b) {
      return function (c) {
        return (0, a.foldr)(function (a) {
          return function (d) {
            return v.append(b.Semigroup0())(c(a))(d);
          };
        })(u.mempty(b));
      };
    };
  },
      A = new a(function (a) {
    return t(A)(a);
  }, f.foldlArray, f.foldrArray),
      q = function q(a) {
    return function (b) {
      return x.alaF(g.functorFn)(g.functorFn)(x.newtypeDisj)(x.newtypeDisj)(p.Disj)((0, a.foldMap)(p.monoidDisj(b)));
    };
  },
      H = function H(a) {
    return function (b) {
      var c = q(a)(l.heytingAlgebraBoolean),
          d = e.eq(b);
      return function (a) {
        return c(d(a));
      };
    };
  };

  d.Foldable = a;

  d.foldr = function (a) {
    return a.foldr;
  };

  d.foldl = function (a) {
    return a.foldl;
  };

  d.foldMap = function (a) {
    return a.foldMap;
  };

  d.fold = function (a) {
    return function (c) {
      return (0, a.foldMap)(c)(b.identity(b.categoryFn));
    };
  };

  d.traverse_ = y;

  d.for_ = function (a) {
    return function (b) {
      return c.flip(y(a)(b));
    };
  };

  d.intercalate = function (a) {
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
                acc: v.append(b.Semigroup0())(a.acc)(v.append(b.Semigroup0())(c)(d))
              };
            };
          })({
            init: !0,
            acc: u.mempty(b)
          })(d).acc;
        };
      };
    };
  };

  d.any = q;

  d.notElem = function (a) {
    return function (b) {
      return function (c) {
        var d = l.not(l.heytingAlgebraBoolean),
            e = H(a)(b)(c);
        return function (a) {
          return d(e(a));
        };
      };
    };
  };

  d.foldableArray = A;
  d.foldableMaybe = C;
})(PS);

(function (a) {
  a["Data.NonEmpty"] = a["Data.NonEmpty"] || {};

  var d = a["Data.NonEmpty"],
      f = a["Data.Foldable"],
      k = a["Data.Functor"],
      h = a["Data.Semigroup"],
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

  d.NonEmpty = b;

  d.functorNonEmpty = function (a) {
    return new k.Functor(function (c) {
      return function (d) {
        return new b(c(d.value0), k.map(a)(c)(d.value1));
      };
    });
  };

  d.foldableNonEmpty = function (a) {
    return new f.Foldable(function (b) {
      return function (c) {
        return function (d) {
          return h.append(b.Semigroup0())(c(d.value0))(f.foldMap(a)(b)(c)(d.value1));
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

  var d = a["Data.List.Types"],
      f = a["Data.Foldable"],
      k = a["Data.Function"],
      h = a["Data.Functor"],
      b = a["Data.Monoid"],
      e = a["Data.NonEmpty"],
      c = a["Data.Semigroup"],
      g = function () {
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
  }();

  a = new h.Functor(function (a) {
    return function (b) {
      return function (c) {
        function d(b, d) {
          if (d instanceof l && d.value1 instanceof l && d.value1.value1 instanceof l) e = new l(d, b), c = d.value1.value1.value1;else return f = !0, function (b) {
            return function (c) {
              for (var d = b, e = !1, f; !e;) {
                f = d;
                var g = c;
                f instanceof l && f.value0 instanceof l && f.value0.value1 instanceof l && f.value0.value1.value1 instanceof l ? (d = f.value1, c = new l(a(f.value0.value0), new l(a(f.value0.value1.value0), new l(a(f.value0.value1.value1.value0), g))), f = void 0) : (e = !0, f = g);
              }

              return f;
            };
          }(b)(function (b) {
            return b instanceof l && b.value1 instanceof l && b.value1.value1 instanceof g ? new l(a(b.value0), new l(a(b.value1.value0), g.value)) : b instanceof l && b.value1 instanceof g ? new l(a(b.value0), g.value) : g.value;
          }(d));
        }

        for (var e = b, f = !1, h; !f;) {
          h = d(e, c);
        }

        return h;
      };
    }(g.value);
  });
  a = e.functorNonEmpty(a);
  var m = new f.Foldable(function (a) {
    return function (d) {
      return f.foldl(m)(function (b) {
        var e = c.append(a.Semigroup0())(b);
        return function (a) {
          return e(d(a));
        };
      })(b.mempty(a));
    };
  }, function (a) {
    return function (b) {
      return function (c) {
        for (var d = b, e = !1, f; !e;) {
          f = d;
          var h = c;
          if (h instanceof g) e = !0;else {
            if (h instanceof l) d = a(f)(h.value0), c = h.value1;else throw Error("Failed pattern match at Data.List.Types (line 109, column 12 - line 111, column 30): " + [h.constructor.name]);
            f = void 0;
          }
        }

        return f;
      };
    };
  }, function (a) {
    return function (b) {
      var c = f.foldl(m)(k.flip(l.create))(g.value),
          d = f.foldl(m)(k.flip(a))(b);
      return function (a) {
        return d(c(a));
      };
    };
  });
  e = e.foldableNonEmpty(m);
  var u = new c.Semigroup(function (a) {
    return function (b) {
      return f.foldr(m)(l.create)(b)(a);
    };
  });
  h = new b.Monoid(function () {
    return u;
  }, g.value);
  d.Nil = g;
  d.Cons = l;
  d.monoidList = h;
  d.foldableList = m;
  d.functorNonEmptyList = a;
  d.foldableNonEmptyList = e;
})(PS);

(function (a) {
  a["Data.List"] = a["Data.List"] || {};

  var d = a["Data.List"],
      f = a["Control.Alt"],
      k = a["Control.Applicative"],
      h = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Control.Lazy"],
      c = a["Control.Monad.Rec.Class"],
      g = a["Data.Bifunctor"],
      l = a["Data.Functor"],
      m = a["Data.List.Types"],
      u = a["Data.Unit"],
      p = function () {
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
      x = function x(a) {
    return function (b) {
      return function (c) {
        return h.apply(a.Applicative0().Apply0())(l.map(a.Plus1().Alt0().Functor0())(m.Cons.create)(c))(e.defer(b)(function (d) {
          return v(a)(b)(c);
        }));
      };
    };
  },
      v = function v(a) {
    return function (b) {
      return function (c) {
        return f.alt(a.Plus1().Alt0())(x(a)(b)(c))(k.pure(a.Applicative0())(m.Nil.value));
      };
    };
  };

  d.some = x;

  d.manyRec = function (a) {
    return function (d) {
      return function (e) {
        return c.tailRecM(a)(function (h) {
          return b.bind(a.Monad0().Bind1())(f.alt(d.Plus1().Alt0())(l.map(d.Plus1().Alt0().Functor0())(c.Loop.create)(e))(k.pure(d.Applicative0())(new c.Done(u.unit))))(function (a) {
            return k.pure(d.Applicative0())(g.bimap(c.bifunctorStep)(function (a) {
              return new m.Cons(a, h);
            })(function (a) {
              return p(h);
            })(a));
          });
        })(m.Nil.value);
      };
    };
  };

  d.reverse = p;
})(PS);

(function (a) {
  a["Data.Tuple"] = a["Data.Tuple"] || {};
  var d = a["Data.Tuple"];
  a = a["Data.Functor"];

  var f = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (d) {
      return function (b) {
        return new a(d, b);
      };
    };

    return a;
  }();

  a = new a.Functor(function (a) {
    return function (d) {
      return new f(d.value0, a(d.value1));
    };
  });
  d.Tuple = f;

  d.fst = function (a) {
    return a.value0;
  };

  d.snd = function (a) {
    return a.value1;
  };

  d.functorTuple = a;
})(PS);

(function (a) {
  a["Data.CatQueue"] = a["Data.CatQueue"] || {};

  var d = a["Data.CatQueue"],
      f = a["Data.List"],
      k = a["Data.List.Types"],
      h = a["Data.Maybe"],
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
  d.empty = a;

  d["null"] = function (a) {
    return a.value0 instanceof k.Nil && a.value1 instanceof k.Nil ? !0 : !1;
  };

  d.snoc = function (a) {
    return function (b) {
      return new e(a.value0, new k.Cons(b, a.value1));
    };
  };

  d.uncons = function (a) {
    for (var c = !1, d; !c;) {
      if (d = a, d.value0 instanceof k.Nil && d.value1 instanceof k.Nil) c = !0, d = h.Nothing.value;else if (d.value0 instanceof k.Nil) a = new e(f.reverse(d.value1), k.Nil.value), d = void 0;else if (d.value0 instanceof k.Cons) c = !0, d = new h.Just(new b.Tuple(d.value0.value0, new e(d.value0.value1, d.value1)));else throw Error("Failed pattern match at Data.CatQueue (line 83, column 1 - line 83, column 63): " + [d.constructor.name]);
    }

    return d;
  };
})(PS);

(function (a) {
  a["Data.CatList"] = a["Data.CatList"] || {};

  var d = a["Data.CatList"],
      f = a["Data.CatQueue"],
      k = a["Data.List.Types"],
      h = a["Data.Maybe"],
      b = a["Data.Semigroup"],
      e = a["Data.Tuple"],
      c = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      g = function () {
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
      l = function l(a) {
    return function (b) {
      if (a instanceof c) return b;
      if (b instanceof c) return a;
      if (a instanceof g) return new g(a.value0, f.snoc(a.value1)(b));
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
            function g(c, g) {
              c = f.uncons(c);
              if (c instanceof h.Nothing) return m = !0, d(function (a) {
                return function (b) {
                  return b(a);
                };
              })(b)(g);
              if (c instanceof h.Just) l = c.value0.value1, e = new k.Cons(a(c.value0.value0), g);else throw Error("Failed pattern match at Data.CatList (line 121, column 14 - line 123, column 67): " + [c.constructor.name]);
            }

            for (var l = c, m = !1, p; !m;) {
              p = g(l, e);
            }

            return p;
          };
        }(c)(k.Nil.value);
      };
    };
  };

  a = c.value;
  b = new b.Semigroup(l);
  d.empty = a;

  d.snoc = function (a) {
    return function (b) {
      return l(a)(new g(b, f.empty));
    };
  };

  d.uncons = function (a) {
    if (a instanceof c) return h.Nothing.value;

    if (a instanceof g) {
      var b = h.Just,
          d = e.Tuple,
          k = a.value0;
      a = f["null"](a.value1) ? c.value : m(l)(c.value)(a.value1);
      return new b(new d(k, a));
    }

    throw Error("Failed pattern match at Data.CatList (line 100, column 1 - line 100, column 61): " + [a.constructor.name]);
  };

  d.semigroupCatList = b;
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

  var d = a["Control.Monad.Free"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Data.CatList"],
      c = a["Data.Either"],
      g = a["Data.Functor"],
      l = a["Data.Maybe"],
      m = a["Data.Semigroup"],
      u = a["Unsafe.Coerce"],
      p = function () {
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
      x = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      v = function () {
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
    function b(b) {
      var d = function d(a) {
        return function (b) {
          return new p(a.value0, m.append(e.semigroupCatList)(a.value1)(b));
        };
      };

      if (b.value0 instanceof x) {
        var f = e.uncons(b.value1);
        if (f instanceof l.Nothing) return c = !0, new x(b.value0.value0);

        if (f instanceof l.Just) {
          a = d((0, f.value0.value0)(b.value0.value0))(f.value0.value1);
          return;
        }

        throw Error("Failed pattern match at Control.Monad.Free (line 227, column 7 - line 231, column 64): " + [f.constructor.name]);
      }

      if (b.value0 instanceof v) return c = !0, new v(b.value0.value0, function (a) {
        return d(b.value0.value1(a))(b.value1);
      });
      throw Error("Failed pattern match at Control.Monad.Free (line 225, column 3 - line 233, column 56): " + [b.value0.constructor.name]);
    }

    for (var c = !1, d; !c;) {
      d = b(a);
    }

    return d;
  },
      y = function y(a) {
    return function (b) {
      return function (c) {
        c = r(c);
        if (c instanceof x) return b(c.value0);
        if (c instanceof v) return a(c.value0)(c.value1);
        throw Error("Failed pattern match at Control.Monad.Free (line 213, column 17 - line 215, column 20): " + [c.constructor.name]);
      };
    };
  };

  a = new b.Monad(function () {
    return q;
  }, function () {
    return t;
  });
  var C = new g.Functor(function (a) {
    return function (b) {
      return h.bindFlipped(t)(function () {
        var b = f.pure(q);
        return function (c) {
          return b(a(c));
        };
      }())(b);
    };
  }),
      t = new h.Bind(function () {
    return A;
  }, function (a) {
    return function (b) {
      return new p(a.value0, e.snoc(a.value1)(b));
    };
  }),
      A = new k.Apply(function () {
    return C;
  }, b.ap(a)),
      q = new f.Applicative(function () {
    return A;
  }, function (a) {
    return new p(x.create(a), e.empty);
  });

  d.wrap = function (a) {
    return new p(new v(a, u.unsafeCoerce), e.empty);
  };

  d.liftF = function (a) {
    return new p(new v(a, function () {
      var a = f.pure(q);
      return function (b) {
        return a(b);
      };
    }()), e.empty);
  };

  d.resume = function (a) {
    return y(function (b) {
      return function (d) {
        return new c.Left(g.map(a)(d)(b));
      };
    })(c.Right.create);
  };

  d["resume'"] = y;
  d.freeFunctor = C;
  d.freeBind = t;
  d.freeApplicative = q;
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

  a.Parallel = function (a, f, k, h) {
    this.Applicative1 = a;
    this.Monad0 = f;
    this.parallel = k;
    this.sequential = h;
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
    return function (d) {
      for (var f = a > d ? -1 : 1, h = Array(f * (d - a) + 1), b = a, e = 0; b !== d;) {
        h[e++] = b, b += f;
      }

      h[e] = b;
      return h;
    };
  };

  a.fromFoldableImpl = function () {
    function a(a, b) {
      this.head = a;
      this.tail = b;
    }

    function f(d) {
      return function (b) {
        return new a(d, b);
      };
    }

    var k = {};
    return function (a) {
      return function (b) {
        var d = [],
            c = 0;

        for (b = a(f)(k)(b); b !== k;) {
          d[c++] = b.head, b = b.tail;
        }

        return d;
      };
    };
  }();

  a.length = function (a) {
    return a.length;
  };

  a.cons = function (a) {
    return function (d) {
      return [a].concat(d);
    };
  };

  a.snoc = function (a) {
    return function (d) {
      var f = a.slice();
      f.push(d);
      return f;
    };
  };

  a["uncons'"] = function (a) {
    return function (d) {
      return function (f) {
        return 0 === f.length ? a({}) : d(f[0])(f.slice(1));
      };
    };
  };

  a._updateAt = function (a) {
    return function (d) {
      return function (f) {
        return function (h) {
          return function (b) {
            if (0 > f || f >= b.length) return d;
            b = b.slice();
            b[f] = h;
            return a(b);
          };
        };
      };
    };
  };

  a.filter = function (a) {
    return function (d) {
      return d.filter(a);
    };
  };

  a.slice = function (a) {
    return function (d) {
      return function (f) {
        return f.slice(a, d);
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
  var d = a["Data.Array"],
      f = a["Data.Array"],
      k = a["Control.Alt"],
      h = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      c = a["Control.Category"],
      g = a["Control.Lazy"],
      l = a["Data.Boolean"],
      m = a["Data.Foldable"],
      u = a["Data.Function"],
      p = a["Data.Functor"],
      x = a["Data.Maybe"];
  a = f._updateAt(x.Just.create)(x.Nothing.value);

  var v = f["uncons'"](u["const"](x.Nothing.value))(function (a) {
    return function (b) {
      return new x.Just({
        head: a,
        tail: b
      });
    };
  }),
      r = function r(a) {
    return [a];
  },
      y = function y(a) {
    return function (c) {
      return function (d) {
        return b.apply(a.Applicative0().Apply0())(p.map(a.Plus1().Alt0().Functor0())(f.cons)(d))(g.defer(c)(function (b) {
          return C(a)(c)(d);
        }));
      };
    };
  },
      C = function C(a) {
    return function (b) {
      return function (c) {
        return k.alt(a.Plus1().Alt0())(y(a)(b)(c))(h.pure(a.Applicative0())([]));
      };
    };
  },
      t = u.flip(e.bind(e.bindArray));

  e = function (a) {
    return t(function () {
      var b = x.maybe([])(r);
      return function (c) {
        return b(a(c));
      };
    }());
  }(c.identity(c.categoryFn));

  d.fromFoldable = function (a) {
    return f.fromFoldableImpl(m.foldr(a));
  };

  d.singleton = r;
  d.some = y;

  d.init = function (a) {
    if (0 === f.length(a)) return x.Nothing.value;
    if (l.otherwise) return new x.Just(f.slice(0)(f.length(a) - 1 | 0)(a));
    throw Error("Failed pattern match at Data.Array (line 323, column 1 - line 323, column 45): " + [a.constructor.name]);
  };

  d.uncons = v;
  d.updateAt = a;
  d.concatMap = t;
  d.catMaybes = e;
  d.range = f.range;
  d.length = f.length;
  d.cons = f.cons;
  d.snoc = f.snoc;
  d.filter = f.filter;
})(PS);

(function (a) {
  a["Data.Array.NonEmpty"] = a["Data.Array.NonEmpty"] || {};
  var d = a["Data.Array.NonEmpty"],
      f = a["Data.Array"],
      k = a["Data.Boolean"],
      h = a["Data.Maybe"];
  a = a["Unsafe.Coerce"];
  var b = a.unsafeCoerce,
      e = a.unsafeCoerce,
      c = a.unsafeCoerce;

  a = function (a) {
    var b = h.fromJust();
    return function (d) {
      return b(a(c(d)));
    };
  }(f.uncons);

  (function (a) {
    return function (b) {
      return a(c(b));
    };
  })(f.length);

  d.fromArray = function (a) {
    if (0 < f.length(a)) return new h.Just(e(a));
    if (k.otherwise) return h.Nothing.value;
    throw Error("Failed pattern match at Data.Array.NonEmpty (line 134, column 1 - line 134, column 58): " + [a.constructor.name]);
  };

  d.toArray = c;

  d.singleton = function (a) {
    return e(f.singleton(a));
  };

  d["cons'"] = function (a) {
    return function (b) {
      return e(f.cons(a)(b));
    };
  };

  d.snoc = function (a) {
    return function (b) {
      return e(f.snoc(c(a))(b));
    };
  };

  d.uncons = a;

  d.updateAt = function (a) {
    return function (d) {
      var e = f.updateAt(a)(d);
      return function (a) {
        return b(e(c(a)));
      };
    };
  };
})(PS);

(function (a) {
  a.fold1Impl = function (a) {
    return function (d) {
      for (var f = d[0], h = d.length, b = 1; b < h; b++) {
        f = a(f)(d[b]);
      }

      return f;
    };
  };
})(PS["Data.Array.NonEmpty.Internal"] = PS["Data.Array.NonEmpty.Internal"] || {});

(function (a) {
  a.mapWithIndexArray = function (a) {
    return function (d) {
      for (var f = d.length, h = Array(f), b = 0; b < f; b++) {
        h[b] = a(b)(d[b]);
      }

      return h;
    };
  };
})(PS["Data.FunctorWithIndex"] = PS["Data.FunctorWithIndex"] || {});

(function (a) {
  a["Data.FunctorWithIndex"] = a["Data.FunctorWithIndex"] || {};
  var d = a["Data.FunctorWithIndex"],
      f = a["Data.Functor"];
  a = new function (a, d) {
    this.Functor0 = a;
    this.mapWithIndex = d;
  }(function () {
    return f.functorArray;
  }, a["Data.FunctorWithIndex"].mapWithIndexArray);

  d.mapWithIndex = function (a) {
    return a.mapWithIndex;
  };

  d.functorWithIndexArray = a;
})(PS);

(function (a) {
  a["Data.FoldableWithIndex"] = a["Data.FoldableWithIndex"] || {};

  var d = a["Data.FoldableWithIndex"],
      f = a["Data.Foldable"],
      k = a["Data.FunctorWithIndex"],
      h = a["Data.Monoid"],
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
      c = function c(a) {
    return function (c) {
      return function (d) {
        return (0, a.foldrWithIndex)(function (a) {
          return function (e) {
            return function (f) {
              return b.append(c.Semigroup0())(d(a)(e))(f);
            };
          };
        })(h.mempty(c));
      };
    };
  },
      g = new function (a, b, c, d) {
    this.Foldable0 = a;
    this.foldMapWithIndex = b;
    this.foldlWithIndex = c;
    this.foldrWithIndex = d;
  }(function () {
    return f.foldableArray;
  }, function (a) {
    return c(g)(a);
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

  d.foldlWithIndex = function (a) {
    return a.foldlWithIndex;
  };

  d.foldableWithIndexArray = g;
})(PS);

(function (a) {
  a["Data.Semigroup.Foldable"] = a["Data.Semigroup.Foldable"] || {};
  var d = a["Data.Semigroup.Foldable"],
      f = a["Data.Functor"];

  d.Foldable1 = function (a, d, b) {
    this.Foldable0 = a;
    this.fold1 = d;
    this.foldMap1 = b;
  };

  d.foldMap1 = function (a) {
    return a.foldMap1;
  };

  d.foldMap1Default = function (a) {
    return function (d) {
      return function (b) {
        return function (e) {
          var c = (0, a.fold1)(b),
              g = f.map(d)(e);
          return function (a) {
            return c(g(a));
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

    function h(a) {
      return function (b) {
        return a.concat(b);
      };
    }

    return function (b) {
      return function (d) {
        return function (c) {
          return function (e) {
            return function (g) {
              function l(m, p) {
                switch (p - m) {
                  case 0:
                    return c([]);

                  case 1:
                    return d(a)(e(g[m]));

                  case 2:
                    return b(d(f)(e(g[m])))(e(g[m + 1]));

                  case 3:
                    return b(b(d(k)(e(g[m])))(e(g[m + 1])))(e(g[m + 2]));

                  default:
                    var u = m + 2 * Math.floor((p - m) / 4);
                    return b(d(h)(l(m, u)))(l(u, p));
                }
              }

              return l(0, g.length);
            };
          };
        };
      };
    };
  }();
})(PS["Data.Traversable"] = PS["Data.Traversable"] || {});

(function (a) {
  a["Data.Traversable"] = a["Data.Traversable"] || {};

  var d = a["Data.Traversable"],
      f = a["Data.Traversable"],
      k = a["Control.Applicative"],
      h = a["Control.Apply"],
      b = a["Control.Category"],
      e = a["Data.Foldable"],
      c = a["Data.Functor"],
      g = function g(a) {
    return function (c) {
      return (0, a.traverse)(c)(b.identity(b.categoryFn));
    };
  },
      l = new function (a, b, c, d) {
    this.Foldable1 = a;
    this.Functor0 = b;
    this.sequence = c;
    this.traverse = d;
  }(function () {
    return e.foldableArray;
  }, function () {
    return c.functorArray;
  }, function (a) {
    return g(l)(a);
  }, function (a) {
    return f.traverseArrayImpl(h.apply(a.Apply0()))(c.map(a.Apply0().Functor0()))(k.pure(a));
  });

  d.traverse = function (a) {
    return a.traverse;
  };

  d.sequence = function (a) {
    return a.sequence;
  };

  d.traversableArray = l;
})(PS);

(function (a) {
  a.unfoldr1ArrayImpl = function (a) {
    return function (d) {
      return function (f) {
        return function (h) {
          return function (b) {
            return function (e) {
              for (var c = [];;) {
                e = b(e);
                c.push(f(e));
                e = h(e);
                if (a(e)) return c;
                e = d(e);
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
  var d = a["Data.Unfoldable1"],
      f = a["Data.Boolean"],
      k = a["Data.Maybe"],
      h = a["Data.Tuple"];
  a = new function (a) {
    this.unfoldr1 = a;
  }(a["Data.Unfoldable1"].unfoldr1ArrayImpl(k.isNothing)(k.fromJust())(h.fst)(h.snd));

  var b = function b(a) {
    return function (b) {
      return function (c) {
        return (0, a.unfoldr1)(function (a) {
          if (0 >= a) return new h.Tuple(c, k.Nothing.value);
          if (f.otherwise) return new h.Tuple(c, new k.Just(a - 1 | 0));
          throw Error("Failed pattern match at Data.Unfoldable1 (line 64, column 5 - line 64, column 39): " + [a.constructor.name]);
        })(b - 1 | 0);
      };
    };
  };

  d.unfoldr1 = function (a) {
    return a.unfoldr1;
  };

  d.singleton = function (a) {
    return b(a)(1);
  };

  d.unfoldable1Array = a;
})(PS);

(function (a) {
  a["Data.Array.NonEmpty.Internal"] = a["Data.Array.NonEmpty.Internal"] || {};
  var d = a["Data.Array.NonEmpty.Internal"],
      f = a["Data.Array.NonEmpty.Internal"],
      k = a["Data.Semigroup"],
      h = a["Data.Semigroup.Foldable"],
      b = a["Data.Unfoldable1"].unfoldable1Array,
      e = a["Data.Traversable"].traversableArray,
      c = k.semigroupArray,
      g = a["Data.Functor"].functorArray,
      l = a["Data.FoldableWithIndex"].foldableWithIndexArray,
      m = a["Data.Foldable"].foldableArray,
      u = new h.Foldable1(function () {
    return m;
  }, function (a) {
    return f.fold1Impl(k.append(a));
  }, function (a) {
    return h.foldMap1Default(u)(g)(a);
  });
  d.semigroupNonEmptyArray = c;
  d.functorNonEmptyArray = g;
  d.foldableNonEmptyArray = m;
  d.foldableWithIndexNonEmptyArray = l;
  d.foldable1NonEmptyArray = u;
  d.unfoldable1NonEmptyArray = b;
  d.traversableNonEmptyArray = e;
})(PS);

(function (a) {
  a.pureE = function (a) {
    return function () {
      return a;
    };
  };

  a.bindE = function (a) {
    return function (d) {
      return function () {
        return d(a())();
      };
    };
  };
})(PS.Effect = PS.Effect || {});

(function (a) {
  a.Effect = a.Effect || {};
  var d = a.Effect,
      f = a.Effect,
      k = a["Control.Applicative"],
      h = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Control.Monad"];
  a = a["Data.Functor"];
  var c = new e.Monad(function () {
    return m;
  }, function () {
    return g;
  }),
      g = new b.Bind(function () {
    return l;
  }, f.bindE),
      l = new h.Apply(function () {
    return u;
  }, e.ap(c)),
      m = new k.Applicative(function () {
    return l;
  }, f.pureE),
      u = new a.Functor(k.liftA1(m));
  d.functorEffect = u;
  d.applicativeEffect = m;
  d.monadEffect = c;
})(PS);

(function (a) {
  var d = function () {
    function a() {
      this.last = this.head = null;
      this.size = 0;
    }

    function d(a, b) {
      this.queue = a;
      this.value = b;
      this.prev = this.next = null;
    }

    function h(b) {
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

    function c(a) {
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

    var g = {};
    h.EMPTY = g;

    h.putLast = function (a, b) {
      b = new d(a, b);

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

    h.takeLast = e;
    h.takeHead = c;

    h.deleteCell = function (a) {
      null !== a.queue && (a.queue.last === a ? e(a.queue) : a.queue.head === a ? c(a.queue) : (a.prev && (a.prev.next = a.next), a.next && (a.next.prev = a.prev), a.queue.size--, a.queue = null, a.value = null, a.next = null, a.prev = null));
    };

    h.drainVar = function (a, d) {
      if (!d.draining) {
        var e = d.puts,
            f = d.takes,
            h = d.reads,
            k,
            l;

        for (d.draining = !0;;) {
          var m = k = null;
          var C = d.value;
          var t = h.size;

          if (null !== d.error) {
            for (C = a.left(d.error); k = c(e);) {
              b(k.cb(C));
            }

            for (; m = c(h);) {
              b(m(C));
            }

            for (; l = c(f);) {
              b(l(C));
            }

            break;
          }

          C === g && (k = c(e)) && (d.value = C = k.value);

          if (C !== g) {
            for (l = c(f); t-- && (m = c(h));) {
              b(m(a.right(C)));
            }

            null !== l && (d.value = g, b(l(a.right(C))));
          }

          null !== k && b(k.cb(a.right(void 0)));
          if (d.value === g && 0 === e.size || d.value !== g && 0 === f.size) break;
        }

        d.draining = !1;
      }
    };

    return h;
  }();

  a.empty = function () {
    return new d(d.EMPTY);
  };

  a._takeVar = function (a, k, h) {
    return function () {
      var b = d.putLast(k.takes, h);
      d.drainVar(a, k);
      return function () {
        d.deleteCell(b);
      };
    };
  };

  a._tryPutVar = function (a, k, h) {
    return function () {
      return h.value === d.EMPTY && null === h.error ? (h.value = k, d.drainVar(a, h), !0) : !1;
    };
  };

  a._tryTakeVar = function (a, k) {
    return function () {
      var f = k.value;
      if (f === d.EMPTY) return a.nothing;
      k.value = d.EMPTY;
      d.drainVar(a, k);
      return a.just(f);
    };
  };
})(PS["Effect.AVar"] = PS["Effect.AVar"] || {});

(function (a) {
  a["Effect.AVar"] = a["Effect.AVar"] || {};
  var d = a["Effect.AVar"],
      f = a["Effect.AVar"],
      k = a["Data.Either"];
  a = a["Data.Maybe"];

  var h = function () {
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
      c = {
    left: k.Left.create,
    right: k.Right.create,
    nothing: a.Nothing.value,
    just: a.Just.create,
    killed: h.create,
    filled: b.create,
    empty: e.value
  };

  d.take = function (a) {
    return function (b) {
      return f._takeVar(c, a, b);
    };
  };

  d.tryTake = function (a) {
    return f._tryTakeVar(c, a);
  };

  d.tryPut = function (a) {
    return function (b) {
      return f._tryPutVar(c, a, b);
    };
  };

  d.empty = f.empty;
})(PS);

(function (a) {
  var d = function () {
    function a(a, b, c, d) {
      this.tag = a;
      this._1 = b;
      this._2 = c;
      this._3 = d;
    }

    function d(b) {
      var c = function c(_c, d, e) {
        return new a(b, _c, d, e);
      };

      c.tag = b;
      return c;
    }

    function h(b) {
      return new a("Pure", void 0);
    }

    function b(a) {
      try {
        a();
      } catch (v) {
        setTimeout(function () {
          throw v;
        }, 0);
      }
    }

    function e(a, b, c) {
      try {
        return b(c());
      } catch (y) {
        return a(y);
      }
    }

    function c(a, b, c) {
      try {
        return b(c)();
      } catch (y) {
        return c(a(y))(), h;
      }
    }

    function g(d, f, h) {
      function k(h) {
        for (var l, A, y;;) {
          switch (y = A = l = null, r) {
            case 2:
              r = 1;

              try {
                q = v(q), null === F ? v = null : (v = F._1, F = F._2);
              } catch (O) {
                r = 5, u = d.left(O), q = null;
              }

              break;

            case 3:
              d.isLeft(q) ? (r = 5, u = q, q = null) : null === v ? r = 5 : (r = 2, q = d.fromRight(q));
              break;

            case 1:
              switch (q.tag) {
                case "Bind":
                  v && (F = new a("Cons", v, F));
                  v = q._2;
                  r = 1;
                  q = q._1;
                  break;

                case "Pure":
                  null === v ? (r = 5, q = d.right(q._1)) : (r = 2, q = q._1);
                  break;

                case "Sync":
                  r = 3;
                  q = e(d.left, d.right, q._1);
                  break;

                case "Async":
                  r = 4;
                  q = c(d.left, q._1, function (a) {
                    return function () {
                      t === h && (t++, p.enqueue(function () {
                        t === h + 1 && (r = 3, q = a, k(t));
                      }));
                    };
                  });
                  return;

                case "Throw":
                  r = 5;
                  u = d.left(q._1);
                  q = null;
                  break;

                case "Catch":
                  x = null === v ? new a("Cons", q, x, n) : new a("Cons", q, new a("Cons", new a("Resume", v, F), x, n), n);
                  F = v = null;
                  r = 1;
                  q = q._1;
                  break;

                case "Bracket":
                  D++;
                  x = null === v ? new a("Cons", q, x, n) : new a("Cons", q, new a("Cons", new a("Resume", v, F), x, n), n);
                  F = v = null;
                  r = 1;
                  q = q._1;
                  break;

                case "Fork":
                  r = 3;
                  l = g(d, f, q._2);
                  f && f.register(l);
                  q._1 && l.run();
                  q = d.right(l);
                  break;

                case "Sequential":
                  r = 1, q = m(d, f, q._1);
              }

              break;

            case 5:
              F = v = null;
              if (null === x) r = 6, q = n || u || q;else switch (l = x._3, y = x._1, x = x._2, y.tag) {
                case "Catch":
                  n && n !== l && 0 === D ? r = 5 : u && (r = 1, q = y._2(d.fromLeft(u)), u = null);
                  break;

                case "Resume":
                  n && n !== l && 0 === D || u ? r = 5 : (v = y._1, F = y._2, r = 2, q = d.fromRight(q));
                  break;

                case "Bracket":
                  D--;
                  null === u && (A = d.fromRight(q), x = new a("Cons", new a("Release", y._2, A), x, l), n === l || 0 < D) && (r = 1, q = y._3(A));
                  break;

                case "Release":
                  x = new a("Cons", new a("Finalized", q, u), x, n);
                  r = 1;
                  q = n && n !== l && 0 === D ? y._1.killed(d.fromLeft(n))(y._2) : u ? y._1.failed(d.fromLeft(u))(y._2) : y._1.completed(d.fromRight(q))(y._2);
                  u = null;
                  D++;
                  break;

                case "Finalizer":
                  D++;
                  x = new a("Cons", new a("Finalized", q, u), x, n);
                  r = 1;
                  q = y._1;
                  break;

                case "Finalized":
                  D--, r = 5, q = y._1, u = y._2;
              }
              break;

            case 6:
              for (var C in G) {
                G.hasOwnProperty(C) && (B = B && G[C].rethrow, b(G[C].handler(q)));
              }

              G = null;
              n && u ? setTimeout(function () {
                throw d.fromLeft(u);
              }, 0) : d.isLeft(q) && B && setTimeout(function () {
                if (B) throw d.fromLeft(q);
              }, 0);
              return;

            case 0:
              r = 1;
              break;

            case 4:
              return;
          }
        }
      }

      function l(a) {
        return function () {
          if (6 === r) return B = B && a.rethrow, a.handler(q)(), function () {};
          var b = I++;
          G = G || {};
          G[b] = a;
          return function () {
            null !== G && delete G[b];
          };
        };
      }

      var t = 0,
          r = 0,
          q = h,
          u = null,
          n = null,
          v = null,
          F = null,
          x = null,
          D = 0,
          I = 0,
          G = null,
          B = !0;
      return {
        kill: function kill(b, c) {
          return function () {
            if (6 === r) return c(d.right(void 0))(), function () {};
            var e = l({
              rethrow: !1,
              handler: function handler() {
                return c(d.right(void 0));
              }
            })();

            switch (r) {
              case 0:
                n = d.left(b);
                r = 6;
                q = n;
                k(t);
                break;

              case 4:
                null === n && (n = d.left(b));
                0 === D && (4 === r && (x = new a("Cons", new a("Finalizer", q(b)), x, n)), r = 5, u = q = null, k(++t));
                break;

              default:
                null === n && (n = d.left(b)), 0 === D && (r = 5, u = q = null);
            }

            return e;
          };
        },
        join: function join(a) {
          return function () {
            var b = l({
              rethrow: !1,
              handler: a
            })();
            0 === r && k(t);
            return b;
          };
        },
        onComplete: l,
        isSuspended: function isSuspended() {
          return 0 === r;
        },
        run: function run() {
          0 === r && (p.isDraining() ? k(t) : p.enqueue(function () {
            k(t);
          }));
        }
      };
    }

    function l(b, c, d, e) {
      function f(c, d, e) {
        var f = d,
            h = null,
            g = null,
            k = 0;
        d = {};

        a: for (;;) {
          var l = null;

          switch (f.tag) {
            case "Forked":
              f._3 === u && (l = n[f._1], d[k++] = l.kill(c, function (a) {
                return function () {
                  k--;
                  0 === k && e(a)();
                };
              }));
              if (null === h) break a;
              f = h._2;
              null === g ? h = null : (h = g._1, g = g._2);
              break;

            case "Map":
              f = f._2;
              break;

            case "Apply":
            case "Alt":
              h && (g = new a("Cons", h, g)), h = f, f = f._1;
          }
        }

        if (0 === k) e(b.right(void 0))();else for (c = 0, l = k; c < l; c++) {
          d[c] = d[c]();
        }
        return d;
      }

      function k(a, c, d) {
        var h, g;

        if (b.isLeft(a)) {
          var l = a;
          var m = null;
        } else m = a, l = null;

        for (;;) {
          var t = g = h = a = null;
          if (null !== x) break;

          if (null === c) {
            e(l || m)();
            break;
          }

          if (c._3 !== u) break;

          switch (c.tag) {
            case "Map":
              null === l ? (c._3 = b.right(c._1(b.fromRight(m))), m = c._3) : c._3 = l;
              break;

            case "Apply":
              a = c._1._3;
              h = c._2._3;

              if (l) {
                if (c._3 = l, g = !0, t = p++, v[t] = f(y, l === a ? c._2 : c._1, function () {
                  return function () {
                    delete v[t];
                    g ? g = !1 : null === d ? k(l, null, null) : k(l, d._1, d._2);
                  };
                }), g) {
                  g = !1;
                  return;
                }
              } else {
                if (a === u || h === u) return;
                m = b.right(b.fromRight(a)(b.fromRight(h)));
                c._3 = m;
              }

              break;

            case "Alt":
              a = c._1._3;
              h = c._2._3;
              if (a === u && b.isLeft(h) || h === u && b.isLeft(a)) return;
              if (a !== u && b.isLeft(a) && h !== u && b.isLeft(h)) l = m === a ? h : a, m = null, c._3 = l;else if (c._3 = m, g = !0, t = p++, v[t] = f(y, m === a ? c._2 : c._1, function () {
                return function () {
                  delete v[t];
                  g ? g = !1 : null === d ? k(m, null, null) : k(m, d._1, d._2);
                };
              }), g) {
                g = !1;
                return;
              }
          }

          null === d ? c = null : (c = d._1, d = d._2);
        }
      }

      function l(a) {
        return function (b) {
          return function () {
            delete n[a._1];
            a._3 = b;
            k(b, a._2._1, a._2._2);
          };
        };
      }

      function m(c, d) {
        x = b.left(c);
        var e;

        for (e in v) {
          if (v.hasOwnProperty(e)) {
            var g = v[e];

            for (e in g) {
              if (g.hasOwnProperty(e)) g[e]();
            }
          }
        }

        v = null;
        var k = f(c, I, d);
        return function (b) {
          return new a("Async", function (a) {
            return function () {
              for (var a in k) {
                if (k.hasOwnProperty(a)) k[a]();
              }

              return h;
            };
          });
        };
      }

      var r = 0,
          n = {},
          p = 0,
          v = {},
          y = Error("[ParAff] Early exit"),
          x = null,
          I = u;

      (function () {
        var e = 1,
            f = d,
            h = null,
            k = null;

        a: for (;;) {
          switch (e) {
            case 1:
              switch (f.tag) {
                case "Map":
                  h && (k = new a("Cons", h, k));
                  h = new a("Map", f._1, u, u);
                  f = f._2;
                  break;

                case "Apply":
                  h && (k = new a("Cons", h, k));
                  h = new a("Apply", u, f._2, u);
                  f = f._1;
                  break;

                case "Alt":
                  h && (k = new a("Cons", h, k));
                  h = new a("Alt", u, f._2, u);
                  f = f._1;
                  break;

                default:
                  var m = r++;
                  e = 5;
                  var t = f;
                  f = new a("Forked", m, new a("Cons", h, k), u);
                  t = g(b, c, t);
                  t.onComplete({
                    rethrow: !1,
                    handler: l(f)
                  })();
                  n[m] = t;
                  c && c.register(t);
              }

              break;

            case 5:
              if (null === h) break a;
              h._1 === u ? (h._1 = f, e = 1, f = h._2, h._2 = u) : (h._2 = f, f = h, null === k ? h = null : (h = k._1, k = k._2));
          }
        }

        I = f;

        for (m = 0; m < r; m++) {
          n[m].run();
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
          return l(b, c, d, a);
        };
      });
    }

    var u = {},
        p = function () {
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
            var h = e;
            a();
            e = h;
          }

          d[(c + b) % 1024] = f;
          b++;
          e || a();
        }
      };
    }();

    a.EMPTY = u;
    a.Pure = d("Pure");
    a.Throw = d("Throw");
    a.Catch = d("Catch");
    a.Sync = d("Sync");
    a.Async = d("Async");
    a.Bind = d("Bind");
    a.Bracket = d("Bracket");
    a.Fork = d("Fork");
    a.Seq = d("Sequential");
    a.ParMap = d("Map");
    a.ParApply = d("Apply");
    a.ParAlt = d("Alt");
    a.Fiber = g;

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
        killAll: function killAll(f, h) {
          return function () {
            function g(a) {
              l[a] = c[a].kill(f, function (c) {
                return function () {
                  delete l[a];
                  k--;
                  b.isLeft(c) && b.fromLeft(c) && setTimeout(function () {
                    throw b.fromLeft(c);
                  }, 0);
                  0 === k && h();
                };
              })();
            }

            if (0 === e) return h();
            var k = 0,
                l = {},
                m;

            for (m in c) {
              c.hasOwnProperty(m) && (k++, g(m));
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

    a.Scheduler = p;
    a.nonCanceler = h;
    return a;
  }();

  a._pure = d.Pure;
  a._throwError = d.Throw;

  a._catchError = function (a) {
    return function (f) {
      return d.Catch(a, f);
    };
  };

  a._map = function (a) {
    return function (f) {
      return f.tag === d.Pure.tag ? d.Pure(a(f._1)) : d.Bind(f, function (f) {
        return d.Pure(a(f));
      });
    };
  };

  a._bind = function (a) {
    return function (f) {
      return d.Bind(a, f);
    };
  };

  a._liftEffect = d.Sync;

  a._parAffMap = function (a) {
    return function (f) {
      return d.ParMap(a, f);
    };
  };

  a._parAffApply = function (a) {
    return function (f) {
      return d.ParApply(a, f);
    };
  };

  a._parAffAlt = function (a) {
    return function (f) {
      return d.ParAlt(a, f);
    };
  };

  a.makeAff = d.Async;

  a._makeFiber = function (a, k) {
    return function () {
      return d.Fiber(a, null, k);
    };
  };

  a._delay = function () {
    function a(a, d) {
      return 0 === a && "undefined" !== typeof setImmediate ? setImmediate(d) : setTimeout(d, a);
    }

    return function (f, h) {
      return d.Async(function (b) {
        return function () {
          var e = a(h, b(f()));
          return function () {
            return d.Sync(function () {
              var a = 0 === h && "undefined" !== typeof clearImmediate ? clearImmediate(e) : clearTimeout(e);
              return f(a);
            });
          };
        };
      });
    };
  }();

  a._sequential = d.Seq;
})(PS["Effect.Aff"] = PS["Effect.Aff"] || {});

(function (a) {
  a["Control.Monad.Error.Class"] = a["Control.Monad.Error.Class"] || {};
  var d = a["Control.Monad.Error.Class"],
      f = a["Control.Applicative"],
      k = a["Data.Either"],
      h = a["Data.Functor"];

  d.catchError = function (a) {
    return a.catchError;
  };

  d.throwError = function (a) {
    return a.throwError;
  };

  d.MonadThrow = function (a, d) {
    this.Monad0 = a;
    this.throwError = d;
  };

  d.MonadError = function (a, d) {
    this.MonadThrow0 = a;
    this.catchError = d;
  };

  d["try"] = function (a) {
    return function (b) {
      return (0, a.catchError)(h.map(a.MonadThrow0().Monad0().Bind1().Apply0().Functor0())(k.Right.create)(b))(function () {
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

  var d = a["Control.Category"],
      f = a["Control.Parallel.Class"],
      k = a["Data.Foldable"],
      h = function h(a) {
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
      return h(a)(b)(d.identity(d.categoryFn));
    };
  };
})(PS);

(function (a) {
  a["Effect.Class"] = a["Effect.Class"] || {};
  var d = a["Effect.Class"],
      f = a["Control.Category"],
      k = a.Effect;

  a = function a(_a9, b) {
    this.Monad0 = _a9;
    this.liftEffect = b;
  };

  f = new a(function () {
    return k.monadEffect;
  }, f.identity(f.categoryFn));

  d.liftEffect = function (a) {
    return a.liftEffect;
  };

  d.MonadEffect = a;
  d.monadEffectEffect = f;
})(PS);

(function (a) {
  a.showErrorImpl = function (a) {
    return a.stack || a.toString();
  };

  a.error = function (a) {
    return Error(a);
  };
})(PS["Effect.Exception"] = PS["Effect.Exception"] || {});

(function (a) {
  a["Effect.Exception"] = a["Effect.Exception"] || {};
  var d = a["Effect.Exception"],
      f = a["Effect.Exception"];
  a = new a["Data.Show"].Show(f.showErrorImpl);
  d.showError = a;
  d.error = f.error;
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
  var d = a["Partial.Unsafe"],
      f = a.Partial;

  a["Partial.Unsafe"].unsafeCrashWith = function (a) {
    return d.unsafePartial(function (d) {
      return f.crashWith()(a);
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff"] = a["Effect.Aff"] || {};
  var d = a["Effect.Aff"],
      f = a["Effect.Aff"],
      k = a["Control.Alt"],
      h = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      c = a["Control.Monad"],
      g = a["Control.Monad.Error.Class"],
      l = a["Control.Parallel"],
      m = a["Control.Parallel.Class"],
      u = a["Control.Plus"],
      p = a["Data.Either"],
      x = a["Data.Foldable"],
      v = a["Data.Function"],
      r = a["Data.Functor"],
      y = a["Data.Monoid"],
      C = a["Data.Semigroup"],
      t = a["Data.Unit"],
      A = a.Effect,
      q = a["Effect.Class"],
      H = a["Effect.Exception"],
      n = a["Partial.Unsafe"];
  a = a["Unsafe.Coerce"];

  var J = new r.Functor(f._parAffMap),
      F = new r.Functor(f._map),
      z = function () {
    return {
      isLeft: function isLeft(a) {
        if (a instanceof p.Left) return !0;
        if (a instanceof p.Right) return !1;
        throw Error("Failed pattern match at Effect.Aff (line 390, column 12 - line 392, column 20): " + [a.constructor.name]);
      },
      fromLeft: function fromLeft(a) {
        if (a instanceof p.Left) return a.value0;
        if (a instanceof p.Right) return n.unsafeCrashWith("unsafeFromLeft: Right");
        throw Error("Failed pattern match at Effect.Aff (line 395, column 20 - line 397, column 54): " + [a.constructor.name]);
      },
      fromRight: function fromRight(a) {
        if (a instanceof p.Right) return a.value0;
        if (a instanceof p.Left) return n.unsafeCrashWith("unsafeFromRight: Left");
        throw Error("Failed pattern match at Effect.Aff (line 400, column 21 - line 402, column 54): " + [a.constructor.name]);
      },
      left: p.Left.create,
      right: p.Right.create
    };
  }(),
      D = function D(a) {
    return function () {
      var b = f._makeFiber(z, a)();

      b.run();
      return b;
    };
  },
      I = new b.Apply(function () {
    return J;
  }, f._parAffApply),
      G = new c.Monad(function () {
    return w;
  }, function () {
    return B;
  }),
      B = new e.Bind(function () {
    return K;
  }, f._bind),
      K = new b.Apply(function () {
    return F;
  }, c.ap(G)),
      w = new h.Applicative(function () {
    return K;
  }, f._pure),
      E = new q.MonadEffect(function () {
    return G;
  }, f._liftEffect);

  b = function () {
    var a = q.liftEffect(E);
    return function (b) {
      return v["const"](a(b));
    };
  }();

  var P = new g.MonadThrow(function () {
    return G;
  }, f._throwError),
      N = new g.MonadError(function () {
    return P;
  }, f._catchError),
      O = function O(a) {
    return function (b) {
      return D(e.bindFlipped(B)(function () {
        var b = q.liftEffect(E);
        return function (c) {
          return b(a(c));
        };
      }())(g["try"](N)(b)));
    };
  },
      L = new m.Parallel(function () {
    return U;
  }, function () {
    return G;
  }, a.unsafeCoerce, f._sequential),
      U = new h.Applicative(function () {
    return I;
  }, function () {
    var a = m.parallel(L),
        b = h.pure(w);
    return function (c) {
      return a(b(c));
    };
  }()),
      R = new C.Semigroup(function (a) {
    return function (b) {
      return function (c) {
        return l.parSequence_(L)(x.foldableArray)([a(c), b(c)]);
      };
    };
  });

  C = v["const"](h.pure(w)(t.unit));
  var M = new y.Monoid(function () {
    return R;
  }, C);
  C = f.makeAff(function (a) {
    return h.pure(A.applicativeEffect)(y.mempty(M));
  });
  var S = new k.Alt(function () {
    return J;
  }, f._parAffAlt),
      Q = new k.Alt(function () {
    return F;
  }, function (a) {
    return function (b) {
      return g.catchError(N)(a)(v["const"](b));
    };
  });
  k = new u.Plus(function () {
    return Q;
  }, g.throwError(P)(H.error("Always fails")));
  u = new u.Plus(function () {
    return S;
  }, m.parallel(L)(u.empty(k)));

  d.runAff_ = function (a) {
    return function (b) {
      return r["void"](A.functorEffect)(O(a)(b));
    };
  };

  d.delay = function (a) {
    return f._delay(p.Right.create, a);
  };

  d.never = C;
  d.effectCanceler = b;
  d.functorAff = F;
  d.applicativeAff = w;
  d.bindAff = B;
  d.monadEffectAff = E;
  d.altParAff = S;
  d.plusParAff = u;
  d.parallelAff = L;
  d.makeAff = f.makeAff;
})(PS);

(function (a) {
  a["Effect.Aff.AVar"] = a["Effect.Aff.AVar"] || {};
  var d = a["Effect.AVar"],
      f = a["Effect.Aff"];

  a["Effect.Aff.AVar"].take = function (a) {
    return f.makeAff(function (h) {
      return function () {
        var b = d.take(a)(h)();
        return f.effectCanceler(b);
      };
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff.Class"] = a["Effect.Aff.Class"] || {};
  var d = a["Effect.Aff.Class"],
      f = a["Control.Category"],
      k = a["Effect.Aff"];

  a = function a(_a10, b) {
    this.MonadEffect0 = _a10;
    this.liftAff = b;
  };

  f = new a(function () {
    return k.monadEffectAff;
  }, f.identity(f.categoryFn));

  d.liftAff = function (a) {
    return a.liftAff;
  };

  d.MonadAff = a;
  d.monadAffAff = f;
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
  var d = a["Effect.Console"],
      f = a["Effect.Console"],
      k = a["Data.Show"];

  d.logShow = function (a) {
    return function (b) {
      return f.log(k.show(a)(b));
    };
  };

  d.log = f.log;
})(PS);

(function (a) {
  a["Concur.Core.Types"] = a["Concur.Core.Types"] || {};
  var d = a["Concur.Core.Types"],
      f = a["Control.Alt"],
      k = a["Control.Alternative"],
      h = a["Control.Applicative"],
      b = a["Control.Bind"],
      e = a["Control.Category"],
      c = a["Control.Monad"],
      g = a["Control.Monad.Free"],
      l = a["Control.MultiAlternative"],
      m = a["Control.Parallel.Class"],
      u = a["Control.Plus"],
      p = a["Data.Array.NonEmpty"],
      x = a["Data.Array.NonEmpty.Internal"],
      v = a["Data.Either"],
      r = a["Data.FoldableWithIndex"],
      y = a["Data.Functor"],
      C = a["Data.Maybe"],
      t = a["Data.Monoid"],
      A = a["Data.Semigroup"],
      q = a["Data.Semigroup.Foldable"],
      H = a["Data.Show"],
      n = a["Data.Tuple"],
      J = a.Effect,
      F = a["Effect.AVar"],
      z = a["Effect.Aff"],
      D = a["Effect.Aff.AVar"],
      I = a["Effect.Aff.Class"],
      G = a["Effect.Class"],
      B = a["Effect.Console"],
      K = a["Effect.Exception"];
  a = new a["Control.ShiftMap"].ShiftMap(function (a) {
    return a(e.identity(e.categoryFn));
  });

  var w = g.freeFunctor,
      E = g.freeBind,
      P = g.freeApplicative,
      N = new c.Monad(function () {
    return P;
  }, function () {
    return E;
  }),
      O = function O(a) {
    return a;
  },
      L = function L(a) {
    return g["resume'"](function (b) {
      return function (c) {
        return new v.Right(y.map(a)(c)(b));
      };
    })(v.Left.create);
  },
      U = new y.Functor(function (a) {
    return function (b) {
      if (b instanceof v.Right) b = new v.Right({
        cont: y.map(z.functorAff)(a)(b.value0.cont),
        view: b.value0.view
      });else if (b instanceof v.Left) b = new v.Left(y.map(J.functorEffect)(a)(b.value0));else throw Error("Failed pattern match at Concur.Core.Types (line 45, column 5 - line 45, column 57): " + [b.constructor.name]);
      return b;
    };
  }),
      R = function R(a) {
    return g.liftF(v.Left.create(a));
  },
      M = function M(a) {
    return new G.MonadEffect(function () {
      return N;
    }, R);
  },
      S = function S(a) {
    return g.liftF(new v.Right({
      view: a,
      cont: z.never
    }));
  },
      Q = function Q(a) {
    return new A.Semigroup(function (b) {
      return function (c) {
        return l.orr(V(a))([b, c]);
      };
    });
  },
      T = function T(a) {
    return new u.Plus(function () {
      return W(a);
    }, S(t.mempty(a)));
  },
      V = function V(a) {
    return new l.MultiAlternative(function () {
      return T(a);
    }, function (c) {
      var d = function d(a) {
        return function (c) {
          return function (d) {
            var e = y.map(x.functorNonEmptyArray)(function (a) {
              return g.wrap(v.Right.create(a));
            })(c);
            return b.bind(z.bindAff)(m.sequential(z.parallelAff)(r.foldlWithIndex(x.foldableWithIndexNonEmptyArray)(function (a) {
              return function (b) {
                return function (c) {
                  return f.alt(z.altParAff)(m.parallel(z.parallelAff)(y.map(z.functorAff)(n.Tuple.create(a))(c)))(b);
                };
              };
            })(u.empty(z.plusParAff))(d)))(function (b) {
              return h.pure(z.applicativeAff)(t(a)(C.fromMaybe(e)(p.updateAt(b.value0)(b.value1)(e))));
            });
          };
        };
      },
          e = function e(a) {
        return function (b) {
          return g.wrap(new v.Right({
            view: q.foldMap1(x.foldable1NonEmptyArray)(a.Semigroup0())(function (a) {
              return a.view;
            })(b),
            cont: d(a)(b)(y.map(x.functorNonEmptyArray)(function (a) {
              return a.cont;
            })(b))
          }));
        };
      },
          k = function k(a) {
        return function (b) {
          return function (c) {
            var d = p.uncons(c),
                e = L(U)(d.head);
            if (e instanceof v.Left) return h.pure(g.freeApplicative)(e.value0);

            if (e instanceof v.Right) {
              if (e.value0 instanceof v.Left) return g.wrap(new v.Left(function () {
                var c = e.value0.value0();
                return k(a)(b)(p["cons'"](c)(d.tail));
              }));
              if (e.value0 instanceof v.Right) return l(a)(p.snoc(b)(e.value0.value0))(d.tail);
              throw Error("Failed pattern match at Concur.Core.Types (line 138, column 34 - line 142, column 61): " + [e.value0.constructor.name]);
            }

            throw Error("Failed pattern match at Concur.Core.Types (line 136, column 10 - line 142, column 61): " + [e.constructor.name]);
          };
        };
      },
          l = function l(a) {
        return function (b) {
          return function (c) {
            c = p.fromArray(c);
            if (c instanceof C.Nothing) return e(a)(b);
            if (c instanceof C.Just) return k(a)(b)(c.value0);
            throw Error("Failed pattern match at Concur.Core.Types (line 113, column 31 - line 116, column 49): " + [c.constructor.name]);
          };
        };
      },
          t = function t(a) {
        return function (b) {
          var c = p.uncons(b),
              d = L(U)(c.head);
          if (d instanceof v.Left) return h.pure(g.freeApplicative)(d.value0);

          if (d instanceof v.Right) {
            if (d.value0 instanceof v.Left) return g.wrap(new v.Left(function () {
              var b = d.value0.value0();
              return t(a)(p["cons'"](b)(c.tail));
            }));
            if (d.value0 instanceof v.Right) return l(a)(p.singleton(d.value0.value0))(c.tail);
            throw Error("Failed pattern match at Concur.Core.Types (line 101, column 34 - line 105, column 63): " + [d.value0.constructor.name]);
          }

          throw Error("Failed pattern match at Concur.Core.Types (line 99, column 10 - line 105, column 63): " + [d.constructor.name]);
        };
      };

      c = p.fromArray(c);
      if (c instanceof C.Just) return t(a)(y.map(x.functorNonEmptyArray)(O)(c.value0));
      if (c instanceof C.Nothing) return u.empty(T(a));
      throw Error("Failed pattern match at Concur.Core.Types (line 88, column 13 - line 90, column 21): " + [c.constructor.name]);
    });
  },
      W = function W(a) {
    return new f.Alt(function () {
      return w;
    }, A.append(Q(a)));
  },
      Y = function Y(a) {
    return function (b) {
      var c = function c(a) {
        return function (b) {
          if (b instanceof v.Left) return B.log("Aff failed - " + H.show(K.showError)(b.value0));
          if (b instanceof v.Right) return y["void"](J.functorEffect)(F.tryPut(b.value0)(a));
          throw Error("Failed pattern match at Concur.Core.Types (line 237, column 3 - line 237, column 55): " + [a.constructor.name, b.constructor.name]);
        };
      };

      return g.wrap(new v.Left(function () {
        var d = F.empty();
        z.runAff_(c(d))(b)();
        var e = F.tryTake(d)();
        if (e instanceof C.Just) return h.pure(g.freeApplicative)(e.value0);
        if (e instanceof C.Nothing) return g.liftF(new v.Right({
          view: a,
          cont: D.take(d)
        }));
        throw Error("Failed pattern match at Concur.Core.Types (line 232, column 8 - line 234, column 75): " + [e.constructor.name]);
      }));
    };
  };

  d.WidgetStep = function (a) {
    return a;
  };

  d.Widget = function (a) {
    return a;
  };

  d.unWidget = O;
  d.resume = L;
  d.display = S;
  d.functorWidgetStep = U;
  d.widgetFunctor = w;
  d.widgetBind = E;
  d.widgetApplicative = P;
  d.widgetMonad = N;
  d.widgetShiftMap = a;
  d.widgetMultiAlternative = V;

  d.widgetMonoid = function (a) {
    return new t.Monoid(function () {
      return Q(a);
    }, u.empty(T(a)));
  };

  d.widgetAlt = W;
  d.widgetPlus = T;

  d.widgetAlternative = function (a) {
    return new k.Alternative(function () {
      return P;
    }, function () {
      return T(a);
    });
  };

  d.widgetMonadEff = M;

  d.widgetMonadAff = function (a) {
    return new I.MonadAff(function () {
      return M(a);
    }, Y(t.mempty(a)));
  };
})(PS);

(function (a) {
  a["Concur.Core"] = a["Concur.Core"] || {};

  var d = a["Concur.Core"],
      f = a["Concur.Core.Types"],
      k = a["Control.Alt"],
      h = a["Control.Applicative"],
      b = a["Control.Monad.Free"],
      e = a["Control.Parallel.Class"],
      c = a["Data.Either"],
      g = a["Data.Functor"],
      l = a.Effect,
      m = a["Effect.AVar"],
      u = a["Effect.Aff"],
      p = a["Effect.Aff.AVar"],
      x = a["Effect.Aff.Class"],
      v = function v(a) {
    return function (d) {
      var r = f.resume(f.functorWidgetStep)(d);
      if (r instanceof c.Left) return h.pure(b.freeApplicative)(r.value0);

      if (r instanceof c.Right) {
        if (r.value0 instanceof c.Left) return b.wrap(f.WidgetStep(new c.Left(function () {
          var b = r.value0.value0();
          return v(a)(b);
        })));
        if (r.value0 instanceof c.Right) return b.wrap(f.WidgetStep(new c.Left(function () {
          var d = m.empty(),
              A = e.sequential(u.parallelAff)(k.alt(u.altParAff)(e.parallel(u.parallelAff)(x.liftAff(x.monadAffAff)(p.take(d))))(e.parallel(u.parallelAff)(g.map(u.functorAff)(v(a))(r.value0.value0.cont))));
          return b.wrap(f.WidgetStep(new c.Right({
            view: a(function (a) {
              return g["void"](l.functorEffect)(m.tryPut(h.pure(b.freeApplicative)(a))(d));
            })(r.value0.value0.view),
            cont: A
          })));
        })));
        throw Error("Failed pattern match at Concur.Core (line 36, column 28 - line 49, column 10): " + [r.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core (line 34, column 26 - line 49, column 10): " + [r.constructor.name]);
    };
  };

  d.mkLeafWidget = function (a) {
    return f.Widget(b.wrap(f.WidgetStep(new c.Left(function () {
      var d = m.empty();
      return b.wrap(f.WidgetStep(new c.Right({
        view: a(function (a) {
          return g["void"](l.functorEffect)(m.tryPut(h.pure(b.freeApplicative)(a))(d));
        }),
        cont: x.liftAff(x.monadAffAff)(p.take(d))
      })));
    }))));
  };

  d.mkNodeWidget = function (a) {
    return function (b) {
      return v(a)(b);
    };
  };
})(PS);

(function (a) {
  a["Concur.Core.LiftWidget"] = a["Concur.Core.LiftWidget"] || {};
  var d = a["Concur.Core.LiftWidget"];
  a = a["Control.Category"];
  a = new function (a) {
    this.liftWidget = a;
  }(a.identity(a.categoryFn));

  d.liftWidget = function (a) {
    return a.liftWidget;
  };

  d.widgetLiftWidget = a;
})(PS);

(function (a) {
  a["Concur.Core.Props"] = a["Concur.Core.Props"] || {};
  var d = a["Concur.Core.Props"];
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
      if (b instanceof k) return new k(function (d) {
        return b.value0(function (b) {
          return d(a(b));
        });
      });
      throw Error("Failed pattern match at Concur.Core.Props (line 13, column 1 - line 15, column 48): " + [a.constructor.name, b.constructor.name]);
    };
  });
  d.PrimProp = f;
  d.Handler = k;

  d.mkProp = function (a) {
    return function (b) {
      if (b instanceof f) return b.value0;
      if (b instanceof k) return b.value0(a);
      throw Error("Failed pattern match at Concur.Core.Props (line 18, column 1 - line 22, column 7): " + [a.constructor.name, b.constructor.name]);
    };
  };

  d.functorProps = a;
})(PS);

(function (a) {
  a["Concur.Core.DOM"] = a["Concur.Core.DOM"] || {};

  var d = a["Concur.Core.DOM"],
      f = a["Concur.Core"],
      k = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Props"],
      b = a["Control.MultiAlternative"],
      e = a["Control.ShiftMap"],
      c = a["Data.Functor"],
      g = function g(a) {
    return function (b) {
      return function (d) {
        return function (g) {
          return e.shiftMap(a)(function (a) {
            return function (e) {
              return f.mkNodeWidget(function (e) {
                return function (f) {
                  return d(c.map(b)(function () {
                    var b = h.mkProp(e),
                        d = c.map(h.functorProps)(a);
                    return function (a) {
                      return b(d(a));
                    };
                  }())(g))(f);
                };
              })(e);
            };
          });
        };
      };
    };
  };

  d.el = g;

  d.elLeaf = function (a) {
    return function (b) {
      return function (d) {
        return function (e) {
          return k.liftWidget(a)(f.mkLeafWidget(function (a) {
            return d(c.map(b)(h.mkProp(a))(e));
          }));
        };
      };
    };
  };

  d["el'"] = function (a) {
    return function (c) {
      return function (d) {
        return function (e) {
          return function (f) {
            var h = g(a)(d)(e)(f),
                k = b.orr(c);
            return function (a) {
              return h(k(a));
            };
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Concur.Core.Discharge"] = a["Concur.Core.Discharge"] || {};

  var d = a["Concur.Core.Discharge"],
      f = a["Concur.Core.Types"],
      k = a["Control.Applicative"],
      h = a["Control.Monad.Free"],
      b = a["Data.Either"],
      e = a["Data.Functor"],
      c = a["Data.Monoid"],
      g = a["Data.Tuple"],
      l = a.Effect,
      m = a["Effect.Aff"],
      u = function u(a) {
    return function (d) {
      var e = h.resume(f.functorWidgetStep)(f.unWidget(d));
      if (e instanceof b.Right) return k.pure(l.applicativeEffect)(new g.Tuple(d, c.mempty(a)));

      if (e instanceof b.Left) {
        if (e.value0 instanceof b.Left) return function () {
          var b = e.value0.value0();
          return u(a)(b)();
        };
        if (e.value0 instanceof b.Right) return k.pure(l.applicativeEffect)(new g.Tuple(h.wrap(new b.Right(e.value0.value0)), e.value0.value0.view));
        throw Error("Failed pattern match at Concur.Core.Discharge (line 43, column 27 - line 47, column 77): " + [e.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core.Discharge (line 41, column 28 - line 47, column 77): " + [e.constructor.name]);
    };
  },
      p = function p(a) {
    return function (d) {
      return function (g) {
        var r = h.resume(f.functorWidgetStep)(g);
        if (r instanceof b.Right) return k.pure(l.applicativeEffect)(c.mempty(a));

        if (r instanceof b.Left) {
          if (r.value0 instanceof b.Left) return function () {
            var b = r.value0.value0();
            return p(a)(d)(b)();
          };
          if (r.value0 instanceof b.Right) return function () {
            m.runAff_(function () {
              var a = e.map(b.functorEither)(f.Widget);
              return function (b) {
                return d(a(b));
              };
            }())(r.value0.value0.cont)();
            return r.value0.value0.view;
          };
          throw Error("Failed pattern match at Concur.Core.Discharge (line 26, column 28 - line 32, column 19): " + [r.value0.constructor.name]);
        }

        throw Error("Failed pattern match at Concur.Core.Discharge (line 24, column 32 - line 32, column 19): " + [r.constructor.name]);
      };
    };
  };

  d.discharge = p;
  d.dischargePartialEffect = u;
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
    var d = null;
    return function () {
      if (void 0 === a) return d;
      d = a();
      a = void 0;
      return d;
    };
  };

  a.force = function (a) {
    return a();
  };
})(PS["Data.Lazy"] = PS["Data.Lazy"] || {});

(function (a) {
  a["Data.Lazy"] = a["Data.Lazy"] || {};
  var d = a["Data.Lazy"],
      f = a["Data.Lazy"];
  a = new a["Data.Functor"].Functor(function (a) {
    return function (d) {
      return f.defer(function (b) {
        return a(f.force(d));
      });
    };
  });
  d.functorLazy = a;
  d.defer = f.defer;
  d.force = f.force;
})(PS);

(function (a) {
  a["Control.Cofree"] = a["Control.Cofree"] || {};

  var d = a["Control.Cofree"],
      f = a["Concur.Core.Types"],
      k = a["Control.Alt"],
      h = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      c = a["Control.Comonad"],
      g = a["Control.Extend"],
      l = a["Control.Monad"],
      m = a["Control.Plus"],
      u = a["Control.ShiftMap"],
      p = a["Data.Functor"],
      x = a["Data.Lazy"],
      v = a["Data.Tuple"],
      r = function r(a) {
    return v.snd(x.force(a));
  },
      y = function y(a) {
    return function (b) {
      return x.defer(function (c) {
        return new v.Tuple(a, b);
      });
    };
  },
      C = function C(a) {
    return v.fst(x.force(a));
  },
      t = function t(a) {
    return new p.Functor(function (b) {
      var c = function c(d) {
        return p.map(x.functorLazy)(function (d) {
          return new v.Tuple(b(d.value0), p.map(a)(c)(d.value1));
        })(d);
      };

      return c;
    });
  },
      A = function A(a) {
    return new g.Extend(function () {
      return t(a);
    }, function (b) {
      var c = function c(d) {
        return p.map(x.functorLazy)(function (e) {
          return new v.Tuple(b(d), p.map(a)(c)(e.value1));
        })(d);
      };

      return c;
    });
  },
      q = function q(a) {
    return new l.Monad(function () {
      return J(a);
    }, function () {
      return H(a);
    });
  },
      H = function H(a) {
    return new e.Bind(function () {
      return n(a);
    }, function (b) {
      return function (c) {
        var d = function d(b) {
          return function (c) {
            var f = p.map(a.Plus1().Alt0().Functor0())(d(b))(r(c)),
                g = p.map(a.Plus1().Alt0().Functor0())(e)(r(b));
            return y(C(c))(k.alt(a.Plus1().Alt0())(g)(f));
          };
        },
            e = function e(a) {
          return d(a)(c(C(a)));
        };

        return e(b);
      };
    });
  },
      n = function n(a) {
    return new b.Apply(function () {
      return t(a.Plus1().Alt0().Functor0());
    }, l.ap(q(a)));
  },
      J = function J(a) {
    return new h.Applicative(function () {
      return n(a);
    }, function (b) {
      return y(b)(m.empty(a.Plus1()));
    });
  };

  d.mkCofree = y;
  d.tail = r;

  d.comonadCofree = function (a) {
    return new c.Comonad(function () {
      return A(a);
    }, C);
  };

  d.applicativeCofree = J;
  d.bindCofree = H;

  d.shiftMapCofree = function (a) {
    return new u.ShiftMap(function (b) {
      return function (c) {
        return x.defer(function (d) {
          d = x.force(c);
          return new v.Tuple(d.value0, b(h.pure(J(f.widgetAlternative(a))))(d.value1));
        });
      };
    });
  };
})(PS);

(function (a) {
  a["Concur.Core.FRP"] = a["Concur.Core.FRP"] || {};

  var d = a["Concur.Core.FRP"],
      f = a["Concur.Core.Types"],
      k = a["Control.Alt"],
      h = a["Control.Applicative"],
      b = a["Control.Bind"],
      e = a["Control.Cofree"],
      c = a["Control.Comonad"],
      g = a["Data.Functor"],
      l = a["Data.Maybe"],
      m = a["Data.Unit"],
      u = a["Effect.Aff"],
      p = a["Effect.Aff.Class"],
      x = e.tail,
      v = e.mkCofree,
      r = function r(a) {
    return function (d) {
      return function (g) {
        var k = g(d);
        return v(c.extract(e.comonadCofree(f.widgetFunctor))(k))(b.bind(f.widgetBind)(x(k))(function (b) {
          return h.pure(f.widgetApplicative)(r(a)(c.extract(e.comonadCofree(f.widgetFunctor))(b))(g));
        }));
      };
    };
  },
      y = function y(a) {
    return b.bind(f.widgetBind)(x(a))(y);
  };

  d.step = v;

  d.display = function (a) {
    return v(m.unit)(a);
  };

  d.loopS = r;
  d.dyn = y;

  d.debounce = function (a) {
    return function (c) {
      return function (d) {
        return function (e) {
          var m = function m(d) {
            return function (e) {
              return b.bind(f.widgetBind)(k.alt(f.widgetAlt(a))(g.map(f.widgetFunctor)(l.Just.create)(e(d)))(g.voidRight(f.widgetFunctor)(l.Nothing.value)(p.liftAff(f.widgetMonadAff(a))(u.delay(c)))))(function (a) {
                if (a instanceof l.Nothing) return h.pure(f.widgetApplicative)(t(d)(e));
                if (a instanceof l.Just) return m(a.value0)(e);
                throw Error("Failed pattern match at Concur.Core.FRP (line 199, column 7 - line 203, column 28): " + [a.constructor.name]);
              });
            };
          },
              t = function t(a) {
            return function (c) {
              return v(a)(b.bind(f.widgetBind)(c(a))(function (a) {
                return m(a)(c);
              }));
            };
          };

          return t(d)(e);
        };
      };
    };
  };
})(PS);

(function (a) {
  function d(a) {
    return function (b) {
      return function (d) {
        return f.createElement.apply(f, [a, b].concat(d));
      };
    };
  }

  var f = require("react"),
      k = function (a) {
    function b(a, b, d) {
      switch (b) {
        case "state":
        case "render":
        case "componentDidMount":
        case "componentWillUnmount":
          a[b] = d;
          break;

        case "componentDidCatch":
        case "componentWillUpdate":
        case "shouldComponentUpdate":
        case "getSnapshotBeforeUpdate":
          a[b] = function (a, b) {
            return d(a)(b)();
          };

          break;

        case "componentDidUpdate":
          a[b] = function (a, b, c) {
            return d(a)(b)(c)();
          };

          break;

        case "unsafeComponentWillMount":
          a.UNSAFE_componentWillMount = d;
          break;

        case "unsafeComponentWillReceiveProps":
          a.UNSAFE_componentWillReceiveProps = function (a) {
            return d(a)();
          };

          break;

        case "unsafeComponentWillUpdate":
          a.UNSAFE_componentWillUpdate = function (a, b) {
            return d(a)(b)();
          };

          break;

        default:
          throw Error("[purescript-react] Not a component property: " + b);
      }
    }

    return function (d) {
      return function (c) {
        var e = function e(d) {
          a.call(this, d);
          d = c(this)();

          for (var e in d) {
            b(this, e, d[e]);
          }
        };

        e.displayName = d;
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

  a.createElementImpl = d;
  a.createElementTagName = d;

  a.createLeafElementImpl = function (a) {
    return function (b) {
      return f.createElement(a, b);
    };
  };

  a.createElementTagNameDynamic = function (a) {
    return function (b) {
      return function (d) {
        return f.createElement(a, b, d);
      };
    };
  };
})(PS.React = PS.React || {});

(function (a) {
  a.React = a.React || {};
  var d = a.React,
      f = a.React;
  a = f.setStateImpl;
  var k = new function (a) {
    this.toElement = a;
  }((0, f.createElementImpl)(f.fragment)({}));

  d.component = function (a) {
    return f.componentImpl;
  };

  d.writeState = a;

  d.createLeafElement = function (a) {
    return f.createLeafElementImpl;
  };

  d.toElement = function (a) {
    return a.toElement;
  };

  d.isReactElementArray = k;
  d.getState = f.getState;
  d.createElementTagName = f.createElementTagName;
  d.createElementTagNameDynamic = f.createElementTagNameDynamic;
})(PS);

(function (a) {
  a["Concur.React"] = a["Concur.React"] || {};

  var d = a["Concur.Core.Discharge"],
      f = a["Data.Either"],
      k = a["Data.Functor"],
      h = a["Data.Monoid"],
      b = a["Data.Show"],
      e = a["Data.Unit"],
      c = a.Effect,
      g = a["Effect.Console"],
      l = a["Effect.Exception"],
      m = a.React,
      u = function u(a) {
    var p = function p(a) {
      return m.toElement(m.isReactElementArray)(a.view);
    },
        u = function u(a) {
      return function (r) {
        if (r instanceof f.Right) return function () {
          var b = d.discharge(h.monoidArray)(u(a))(r.value0)();
          return k["void"](c.functorEffect)(m.writeState(a)({
            view: b
          }))();
        };
        if (r instanceof f.Left) return function () {
          g.log("FAILED! " + b.show(l.showError)(r.value0))();
          return e.unit;
        };
        throw Error("Failed pattern match at Concur.React (line 31, column 3 - line 33, column 50): " + [a.constructor.name, r.constructor.name]);
      };
    };

    return m.component()("Concur")(function (b) {
      return function () {
        var e = d.dischargePartialEffect(h.monoidArray)(a)();
        return {
          state: {
            view: e.value1
          },
          render: k.map(c.functorEffect)(p)(m.getState(b)),
          componentDidMount: u(b)(new f.Right(e.value0))
        };
      };
    });
  };

  a["Concur.React"].renderComponent = function (a) {
    return m.createLeafElement()(u(a))({});
  };
})(PS);

(function (a) {
  require("react");

  a.unsafeMkProps = function (a) {
    return function (d) {
      var f = {};
      f[a] = d;
      return f;
    };
  };

  a.unsafeUnfoldProps = function (a) {
    return function (d) {
      var f = {},
          h = {};
      h[a] = f;

      for (var b in d) {
        d.hasOwnProperty(b) && (f[b] = d[b]);
      }

      return h;
    };
  };

  a.unsafeFromPropsArray = function (a) {
    for (var d = {}, k = 0, h = a.length; k < h; k++) {
      var b = a[k],
          e;

      for (e in b) {
        b.hasOwnProperty(e) && (d[e] = b[e]);
      }
    }

    return d;
  };
})(PS["React.DOM.Props"] = PS["React.DOM.Props"] || {});

(function (a) {
  a.mkEffectFn1 = function (a) {
    return function (d) {
      return a(d)();
    };
  };
})(PS["Effect.Uncurried"] = PS["Effect.Uncurried"] || {});

(function (a) {
  a["Effect.Uncurried"] = a["Effect.Uncurried"] || {};
  a["Effect.Uncurried"].mkEffectFn1 = a["Effect.Uncurried"].mkEffectFn1;
})(PS);

(function (a) {
  a["React.DOM.Props"] = a["React.DOM.Props"] || {};
  var d = a["React.DOM.Props"],
      f = a["React.DOM.Props"],
      k = a["Effect.Uncurried"];
  a = f.unsafeMkProps("value");
  var h = f.unsafeMkProps("target"),
      b = f.unsafeUnfoldProps("style"),
      e = f.unsafeMkProps("href"),
      c = f.unsafeMkProps("disabled"),
      g = f.unsafeMkProps("defaultValue"),
      l = f.unsafeMkProps("className"),
      m = f.unsafeMkProps("checked"),
      u = f.unsafeMkProps("type");
  d.style = b;
  d.checked = m;
  d.className = l;
  d.defaultValue = g;
  d.disabled = c;
  d.href = e;
  d.target = h;
  d._type = u;
  d.value = a;

  d.onChange = function (a) {
    return f.unsafeMkProps("onChange")(k.mkEffectFn1(a));
  };

  d.onClick = function (a) {
    return f.unsafeMkProps("onClick")(k.mkEffectFn1(a));
  };

  d.unsafeFromPropsArray = f.unsafeFromPropsArray;
})(PS);

(function (a) {
  a["React.DOM"] = a["React.DOM"] || {};
  var d = a["React.DOM"],
      f = a.React,
      k = a["React.DOM.Props"];
  a = a["Unsafe.Coerce"].unsafeCoerce;

  var h = function h(a) {
    return function (b) {
      return function (c) {
        if (a) {
          if (a) var d = f.createElementTagNameDynamic;else throw Error("Failed pattern match at React.DOM (line 15, column 5 - line 17, column 55): " + [a.constructor.name]);
        } else d = f.createElementTagName;
        return d(b)(k.unsafeFromPropsArray(c));
      };
    };
  },
      b = h(!1)("option"),
      e = h(!1)("select"),
      c = h(!1)("span"),
      g = h(!1)("ul"),
      l = h(!1)("li"),
      m = h(!1)("div"),
      u = h(!1)("cite"),
      p = h(!1)("button"),
      x = h(!1)("a");

  d.text = a;
  d.a = x;

  d.br = function (a) {
    return h(!1)("br")(a)([]);
  };

  d.button = p;
  d.cite = u;
  d.div = m;

  d.input = function (a) {
    return h(!1)("input")(a)([]);
  };

  d.li = l;
  d.option = b;
  d.select = e;
  d.span = c;
  d.ul = g;
})(PS);

(function (a) {
  a["Concur.React.DOM"] = a["Concur.React.DOM"] || {};

  var d = a["Concur.React.DOM"],
      f = a["Concur.Core.DOM"],
      k = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Types"],
      b = a["Data.Functor"],
      e = a["React.DOM"],
      c = function c(a) {
    return function (b) {
      return function (c) {
        return [a(b)(c)];
      };
    };
  },
      g = function g(a) {
    return function (c) {
      return f.elLeaf(a)(b.functorArray)(function (a) {
        return [c(a)];
      });
    };
  },
      l = function l(a) {
    return function (d) {
      return function (e) {
        return f["el'"](a)(d)(b.functorArray)(c(e));
      };
    };
  },
      m = function m(a) {
    return function (b) {
      return l(b)(a)(e.li);
    };
  },
      u = function u(a) {
    return function (b) {
      return l(b)(a)(e.span);
    };
  },
      p = function p(a) {
    return function (d) {
      return f.el(a)(b.functorArray)(c(d));
    };
  },
      x = function x(a) {
    return function (b) {
      return l(b)(a)(e.div);
    };
  },
      v = function v(a) {
    return function (b) {
      return l(b)(a)(e.cite);
    };
  };

  d.text = function (a) {
    return function (b) {
      return k.liftWidget(a)(h.display([e.text(b)]));
    };
  };

  d.a = function (a) {
    return function (b) {
      return l(b)(a)(e.a);
    };
  };

  d["br'"] = function (a) {
    return g(a)(e.br)([]);
  };

  d.button = function (a) {
    return function (b) {
      return l(b)(a)(e.button);
    };
  };

  d["cite'"] = function (a) {
    return function (b) {
      return v(a)(b)([]);
    };
  };

  d.div_ = function (a) {
    return p(a)(e.div);
  };

  d.div = x;

  d["div'"] = function (a) {
    return function (b) {
      return x(a)(b)([]);
    };
  };

  d.input = function (a) {
    return g(a)(e.input);
  };

  d.li_ = function (a) {
    return p(a)(e.li);
  };

  d.li = m;

  d["li'"] = function (a) {
    return function (b) {
      return m(a)(b)([]);
    };
  };

  d.option = function (a) {
    return function (b) {
      return l(b)(a)(e.option);
    };
  };

  d.select = function (a) {
    return function (b) {
      return l(b)(a)(e.select);
    };
  };

  d.span_ = function (a) {
    return p(a)(e.span);
  };

  d.span = u;

  d["span'"] = function (a) {
    return function (b) {
      return u(a)(b)([]);
    };
  };

  d.ul = function (a) {
    return function (b) {
      return l(b)(a)(e.ul);
    };
  };
})(PS);

(function (a) {
  a["Concur.React.Props"] = a["Concur.React.Props"] || {};
  var d = a["Concur.React.Props"],
      f = a["Concur.Core.Props"],
      k = a["Data.Array"],
      h = a["Data.Foldable"],
      b = a["Data.Maybe"],
      e = a["Data.Monoid"],
      c = a["React.DOM.Props"];
  a = new f.Handler(c.onClick);

  var g = new f.Handler(c.onChange),
      l = function l(a) {
    return f.PrimProp.create(c.className(a));
  },
      m = function () {
    var a = h.intercalate(h.foldableArray)(e.monoidString)(" "),
        c = k.concatMap(b.maybe([])(function (a) {
      return [a];
    }));
    return function (b) {
      return l(a(c(b)));
    };
  }();

  d.classList = m;

  d.unsafeTargetValue = function (a) {
    return a.target.value;
  };

  d.style = function (a) {
    return f.PrimProp.create(c.style(a));
  };

  d.checked = function (a) {
    return f.PrimProp.create(c.checked(a));
  };

  d.className = l;

  d.defaultValue = function (a) {
    return f.PrimProp.create(c.defaultValue(a));
  };

  d.disabled = function (a) {
    return f.PrimProp.create(c.disabled(a));
  };

  d.href = function (a) {
    return f.PrimProp.create(c.href(a));
  };

  d._type = function (a) {
    return f.PrimProp.create(c._type(a));
  };

  d.value = function (a) {
    return f.PrimProp.create(c.value(a));
  };

  d.onChange = g;
  d.onClick = a;
})(PS);

(function (a) {
  var d = require("react-dom");

  require("react-dom/server");

  a.renderImpl = function (a, k) {
    return d.render(a, k);
  };
})(PS.ReactDOM = PS.ReactDOM || {});

(function (a) {
  a.nullable = function (a, f, k) {
    return null == a ? f : k(a);
  };
})(PS["Data.Nullable"] = PS["Data.Nullable"] || {});

(function (a) {
  a["Data.Nullable"] = a["Data.Nullable"] || {};
  var d = a["Data.Nullable"],
      f = a["Data.Maybe"];

  a["Data.Nullable"].toMaybe = function (a) {
    return d.nullable(a, f.Nothing.value, f.Just.create);
  };
})(PS);

(function (a) {
  a.ReactDOM = a.ReactDOM || {};
  var d = a.ReactDOM,
      f = a["Data.Functor"],
      k = a["Data.Nullable"],
      h = a.Effect;

  a.ReactDOM.render = function (a) {
    return function (b) {
      return f.map(h.functorEffect)(k.toMaybe)(function () {
        return d.renderImpl(a, b);
      });
    };
  };
})(PS);

(function (a) {
  a._getElementById = function (a) {
    return function (d) {
      return function () {
        return d.getElementById(a);
      };
    };
  };
})(PS["Web.DOM.NonElementParentNode"] = PS["Web.DOM.NonElementParentNode"] || {});

(function (a) {
  a["Web.DOM.NonElementParentNode"] = a["Web.DOM.NonElementParentNode"] || {};
  var d = a["Web.DOM.NonElementParentNode"],
      f = a["Data.Functor"],
      k = a["Data.Nullable"],
      h = a.Effect;

  a["Web.DOM.NonElementParentNode"].getElementById = function (a) {
    var b = f.map(h.functorEffect)(k.toMaybe),
        c = d._getElementById(a);

    return function (a) {
      return b(c(a));
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
  a["Web.HTML.HTMLDocument"].toNonElementParentNode = a["Unsafe.Coerce"].unsafeCoerce;
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
  var d = a["Concur.React"],
      f = a["Data.Functor"],
      k = a["Data.Maybe"],
      h = a["Data.Unit"],
      b = a.Effect,
      e = a.ReactDOM,
      c = a["Web.DOM.NonElementParentNode"],
      g = a["Web.HTML"],
      l = a["Web.HTML.HTMLDocument"],
      m = a["Web.HTML.Window"];

  a["Concur.React.Run"].runWidgetInDom = function (a) {
    return function (p) {
      return function () {
        var u = g.window();
        u = m.document(u)();
        u = l.toNonElementParentNode(u);
        u = c.getElementById(a)(u)();
        if (u instanceof k.Nothing) return h.unit;
        if (u instanceof k.Just) return f["void"](b.functorEffect)(e.render(d.renderComponent(p))(u.value0))();
        throw Error("Failed pattern match at Concur.React.Run (line 23, column 3 - line 25, column 65): " + [u.constructor.name]);
      };
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.State.Class"] = a["Control.Monad.State.Class"] || {};
  var d = a["Control.Monad.State.Class"],
      f = a["Data.Tuple"],
      k = a["Data.Unit"];

  d.state = function (a) {
    return a.state;
  };

  d.MonadState = function (a, b) {
    this.Monad0 = a;
    this.state = b;
  };

  d.get = function (a) {
    return (0, a.state)(function (a) {
      return new f.Tuple(a, a);
    });
  };

  d.gets = function (a) {
    return function (b) {
      return (0, a.state)(function (a) {
        return new f.Tuple(b(a), a);
      });
    };
  };

  d.put = function (a) {
    return function (b) {
      return (0, a.state)(function (a) {
        return new f.Tuple(k.unit, b);
      });
    };
  };

  d.modify_ = function (a) {
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

  var d = a["Control.Monad.Except.Trans"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Control.Monad.Error.Class"],
      c = a["Control.Monad.State.Class"],
      g = a["Control.Monad.Trans.Class"],
      l = a["Data.Either"],
      m = a["Data.Functor"],
      u = new g.MonadTrans(function (a) {
    return function (b) {
      return h.bind(a.Bind1())(b)(function (b) {
        return f.pure(a.Applicative0())(new l.Right(b));
      });
    };
  }),
      p = function p(a) {
    return function (b) {
      return a(b);
    };
  },
      x = function x(a) {
    return new m.Functor(function (b) {
      return p(m.map(a)(m.map(l.functorEither)(b)));
    });
  },
      v = function v(a) {
    return new b.Monad(function () {
      return C(a);
    }, function () {
      return r(a);
    });
  },
      r = function r(a) {
    return new h.Bind(function () {
      return y(a);
    }, function (b) {
      return function (c) {
        return h.bind(a.Bind1())(b)(l.either(function () {
          var b = f.pure(a.Applicative0());
          return function (a) {
            return b(l.Left.create(a));
          };
        }())(function (a) {
          return c(a);
        }));
      };
    });
  },
      y = function y(a) {
    return new k.Apply(function () {
      return x(a.Bind1().Apply0().Functor0());
    }, b.ap(v(a)));
  },
      C = function C(a) {
    return new f.Applicative(function () {
      return y(a);
    }, function () {
      var b = f.pure(a.Applicative0());
      return function (a) {
        return b(l.Right.create(a));
      };
    }());
  };

  d.ExceptT = function (a) {
    return a;
  };

  d.runExceptT = function (a) {
    return a;
  };

  d.functorExceptT = x;
  d.applyExceptT = y;
  d.applicativeExceptT = C;
  d.bindExceptT = r;

  d.monadThrowExceptT = function (a) {
    return new e.MonadThrow(function () {
      return v(a);
    }, function () {
      var b = f.pure(a.Applicative0());
      return function (a) {
        return b(l.Left.create(a));
      };
    }());
  };

  d.monadStateExceptT = function (a) {
    return new c.MonadState(function () {
      return v(a.Monad0());
    }, function (b) {
      return g.lift(u)(a.Monad0())(c.state(a)(b));
    });
  };
})(PS);

(function (a) {
  a.map_ = function (a) {
    return function (d) {
      return function () {
        return a(d());
      };
    };
  };

  a.pure_ = function (a) {
    return function () {
      return a;
    };
  };

  a.bind_ = function (a) {
    return function (d) {
      return function () {
        return d(a())();
      };
    };
  };
})(PS["Control.Monad.ST.Internal"] = PS["Control.Monad.ST.Internal"] || {});

(function (a) {
  a["Control.Monad.ST.Internal"] = a["Control.Monad.ST.Internal"] || {};
  var d = a["Control.Monad.ST.Internal"],
      f = a["Control.Monad.ST.Internal"],
      k = a["Control.Applicative"],
      h = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Control.Monad"],
      c = new a["Data.Functor"].Functor(f.map_);
  a = new e.Monad(function () {
    return m;
  }, function () {
    return g;
  });
  var g = new b.Bind(function () {
    return l;
  }, f.bind_),
      l = new h.Apply(function () {
    return c;
  }, e.ap(a)),
      m = new k.Applicative(function () {
    return l;
  }, f.pure_);
  d.applicativeST = m;
})(PS);

(function (a) {
  a["Control.Monad.State"] = a["Control.Monad.State"] || {};

  a["Control.Monad.State"].execState = function (a) {
    return function (d) {
      return a(d).value1;
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.State.Trans"] = a["Control.Monad.State.Trans"] || {};
  var d = a["Control.Monad.State.Trans"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Control.Monad.State.Class"],
      c = a["Data.Functor"],
      g = a["Data.Tuple"],
      l = a["Data.Unit"];
  a = new a["Control.Lazy"].Lazy(function (a) {
    return function (b) {
      return a(l.unit)(b);
    };
  });

  var m = function m(a) {
    return new c.Functor(function (b) {
      return function (d) {
        return function (e) {
          return c.map(a)(function (a) {
            return new g.Tuple(b(a.value0), a.value1);
          })(d(e));
        };
      };
    });
  },
      u = function u(a) {
    return new b.Monad(function () {
      return v(a);
    }, function () {
      return p(a);
    });
  },
      p = function p(a) {
    return new h.Bind(function () {
      return x(a);
    }, function (b) {
      return function (c) {
        return function (d) {
          return h.bind(a.Bind1())(b(d))(function (a) {
            return c(a.value0)(a.value1);
          });
        };
      };
    });
  },
      x = function x(a) {
    return new k.Apply(function () {
      return m(a.Bind1().Apply0().Functor0());
    }, b.ap(u(a)));
  },
      v = function v(a) {
    return new f.Applicative(function () {
      return x(a);
    }, function (b) {
      return function (c) {
        return f.pure(a.Applicative0())(new g.Tuple(b, c));
      };
    });
  };

  d.StateT = function (a) {
    return a;
  };

  d.runStateT = function (a) {
    return a;
  };

  d.evalStateT = function (a) {
    return function (b) {
      return function (d) {
        return c.map(a)(g.fst)(b(d));
      };
    };
  };

  d.functorStateT = m;
  d.bindStateT = p;
  d.monadStateT = u;
  d.lazyStateT = a;

  d.monadStateStateT = function (a) {
    return new e.MonadState(function () {
      return u(a);
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
  var d = a["Data.Enum"],
      f = a["Data.Enum"],
      k = a["Control.Apply"],
      h = a["Data.Bounded"],
      b = a["Data.Functor"],
      e = a["Data.Maybe"],
      c = a["Data.Newtype"],
      g = a["Data.Ord"],
      l = a["Data.Tuple"],
      m = a["Data.Unfoldable1"];

  a = function a(_a11) {
    return _a11;
  };

  var u = function u(a) {
    this.Bounded0 = a;
  },
      p = function p(a, b, c) {
    this.Ord0 = a;
    this.pred = b;
    this.succ = c;
  },
      x = function x(a, b, c, d, e) {
    this.Bounded0 = a;
    this.Enum1 = b;
    this.cardinality = c;
    this.fromEnum = d;
    this.toEnum = e;
  },
      v = new u(function () {
    return h.boundedBoolean;
  }),
      r = new c.Newtype(function (a) {
    return a;
  }, a),
      y = function y(a) {
    return new p(function () {
      return e.ordMaybe(a.Enum1().Ord0());
    }, function (b) {
      if (b instanceof e.Nothing) return e.Nothing.value;
      if (b instanceof e.Just) return new e.Just((0, a.Enum1().pred)(b.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [b.constructor.name]);
    }, function (c) {
      if (c instanceof e.Nothing) return new e.Just(new e.Just(h.bottom(a.Bounded0())));
      if (c instanceof e.Just) return b.map(e.functorMaybe)(e.Just.create)((0, a.Enum1().succ)(c.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [c.constructor.name]);
    });
  },
      C = new p(function () {
    return g.ordBoolean;
  }, function (a) {
    return a ? new e.Just(!1) : e.Nothing.value;
  }, function (a) {
    return a ? e.Nothing.value : new e.Just(!0);
  }),
      t = function t(a) {
    return function (b) {
      return function (c) {
        return a(b(c) + 1 | 0);
      };
    };
  },
      A = function A(a) {
    return function (b) {
      return function (c) {
        return a(b(c) - 1 | 0);
      };
    };
  },
      q = function q(a) {
    return a >= h.bottom(h.boundedInt) && a <= h.top(h.boundedInt) ? new e.Just(f.fromCharCode(a)) : e.Nothing.value;
  },
      H = new p(function () {
    return g.ordChar;
  }, A(q)(f.toCharCode), t(q)(f.toCharCode));

  q = new x(function () {
    return h.boundedChar;
  }, function () {
    return H;
  }, f.toCharCode(h.top(h.boundedChar)) - f.toCharCode(h.bottom(h.boundedChar)) | 0, f.toCharCode, q);
  var n = new x(function () {
    return h.boundedBoolean;
  }, function () {
    return C;
  }, 2, function (a) {
    if (!a) return 0;
    if (a) return 1;
    throw Error("Failed pattern match at Data.Enum (line 120, column 1 - line 126, column 20): " + [a.constructor.name]);
  }, function (a) {
    return 0 === a ? new e.Just(!1) : 1 === a ? new e.Just(!0) : e.Nothing.value;
  });
  d.Enum = p;
  d.BoundedEnum = x;

  d.toEnum = function (a) {
    return a.toEnum;
  };

  d.fromEnum = function (a) {
    return a.fromEnum;
  };

  d.toEnumWithDefaults = function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          var f = (0, a.toEnum)(d);
          if (f instanceof e.Just) return f.value0;
          if (f instanceof e.Nothing) return d < (0, a.fromEnum)(h.bottom(a.Bounded0())) ? b : c;
          throw Error("Failed pattern match at Data.Enum (line 160, column 33 - line 162, column 62): " + [f.constructor.name]);
        };
      };
    };
  };

  d.Cardinality = a;

  d.upFromIncluding = function (a) {
    return function (b) {
      return m.unfoldr1(b)(k.apply(k.applyFn)(l.Tuple.create)(a.succ));
    };
  };

  d.defaultSucc = t;
  d.defaultPred = A;
  d.SmallBounded = u;
  d.boundedEnumBoolean = n;
  d.boundedEnumChar = q;
  d.newtypeCardinality = r;

  d.boundedEnumMaybe = function (a) {
    return function (a) {
      return new x(function () {
        return e.boundedMaybe(a.Bounded0());
      }, function () {
        return y(a);
      }, c.unwrap(r)(a.cardinality) + 1 | 0, function (b) {
        if (b instanceof e.Nothing) return 0;
        if (b instanceof e.Just) return (0, a.fromEnum)(b.value0) + 1 | 0;
        throw Error("Failed pattern match at Data.Enum (line 334, column 1 - line 340, column 39): " + [b.constructor.name]);
      }, function (c) {
        return 0 === c ? e.Nothing.value : b.map(e.functorMaybe)(e.Just.create)((0, a.toEnum)(c - 1 | 0));
      });
    };
  };

  d.smallBoundedBoolean = v;
})(PS);

(function (a) {
  a["Data.Char"] = a["Data.Char"] || {};
  var d = a["Data.Char"];
  a = a["Data.Enum"];
  a = a.toEnum(a.boundedEnumChar);
  d.fromCharCode = a;
})(PS);

(function (a) {
  a["Data.CommutativeRing"] = a["Data.CommutativeRing"] || {};
  var d = a["Data.CommutativeRing"],
      f = a["Data.Ring"];
  a = new function (a) {
    this.Ring0 = a;
  }(function () {
    return f.ringInt;
  });
  d.commutativeRingInt = a;
})(PS);

(function (a) {
  a["Data.Const"] = a["Data.Const"] || {};

  var d = a["Data.Const"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      h = a["Data.Functor"],
      b = a["Data.Monoid"],
      e = a["Data.Semigroup"],
      c = function c(a) {
    return a;
  };

  a = new a["Data.Newtype"].Newtype(function (a) {
    return a;
  }, c);

  var g = new h.Functor(function (a) {
    return function (a) {
      return a;
    };
  }),
      l = function l(a) {
    return new k.Apply(function () {
      return g;
    }, function (b) {
      return function (c) {
        return e.append(a)(b)(c);
      };
    });
  };

  d.Const = c;
  d.newtypeConst = a;

  d.applicativeConst = function (a) {
    return new f.Applicative(function () {
      return l(a.Semigroup0());
    }, function (c) {
      return b.mempty(a);
    });
  };
})(PS);

(function (a) {
  var d = function d(a, _d, h) {
    _d = new Date(Date.UTC(a, _d, h));
    0 <= a && 100 > a && _d.setUTCFullYear(a);
    return _d;
  };

  a.canonicalDateImpl = function (a, k, h, b) {
    k = d(k, h - 1, b);
    return a(k.getUTCFullYear())(k.getUTCMonth() + 1)(k.getUTCDate());
  };

  a.calcWeekday = function (a, k, h) {
    return d(a, k - 1, h).getUTCDay();
  };
})(PS["Data.Date"] = PS["Data.Date"] || {});

(function (a) {
  a["Data.Date.Component"] = a["Data.Date.Component"] || {};

  var d = a["Data.Date.Component"],
      f = a["Data.Boolean"],
      k = a["Data.Bounded"],
      h = a["Data.Enum"],
      b = a["Data.Eq"],
      e = a["Data.Maybe"],
      c = a["Data.Ord"],
      g = a["Data.Ordering"],
      l = a["Data.Show"],
      m = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      u = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      p = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      x = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      v = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      r = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      y = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      C = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      t = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      A = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      q = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      H = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      n = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      J = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      F = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      z = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      D = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      I = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      G = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  a = new l.Show(function (a) {
    if (a instanceof m) return "Monday";
    if (a instanceof u) return "Tuesday";
    if (a instanceof p) return "Wednesday";
    if (a instanceof x) return "Thursday";
    if (a instanceof v) return "Friday";
    if (a instanceof r) return "Saturday";
    if (a instanceof y) return "Sunday";
    throw Error("Failed pattern match at Data.Date.Component (line 184, column 1 - line 191, column 25): " + [a.constructor.name]);
  });
  l = new l.Show(function (a) {
    if (a instanceof C) return "January";
    if (a instanceof t) return "February";
    if (a instanceof A) return "March";
    if (a instanceof q) return "April";
    if (a instanceof H) return "May";
    if (a instanceof n) return "June";
    if (a instanceof J) return "July";
    if (a instanceof F) return "August";
    if (a instanceof z) return "September";
    if (a instanceof D) return "October";
    if (a instanceof I) return "November";
    if (a instanceof G) return "December";
    throw Error("Failed pattern match at Data.Date.Component (line 101, column 1 - line 113, column 29): " + [a.constructor.name]);
  });
  var B = c.ordInt,
      K = c.ordInt,
      w = new b.Eq(function (a) {
    return function (b) {
      return a instanceof m && b instanceof m || a instanceof u && b instanceof u || a instanceof p && b instanceof p || a instanceof x && b instanceof x || a instanceof v && b instanceof v || a instanceof r && b instanceof r || a instanceof y && b instanceof y ? !0 : !1;
    };
  }),
      E = new c.Ord(function () {
    return w;
  }, function (a) {
    return function (b) {
      if (a instanceof m && b instanceof m) return g.EQ.value;
      if (a instanceof m) return g.LT.value;
      if (b instanceof m) return g.GT.value;
      if (a instanceof u && b instanceof u) return g.EQ.value;
      if (a instanceof u) return g.LT.value;
      if (b instanceof u) return g.GT.value;
      if (a instanceof p && b instanceof p) return g.EQ.value;
      if (a instanceof p) return g.LT.value;
      if (b instanceof p) return g.GT.value;
      if (a instanceof x && b instanceof x) return g.EQ.value;
      if (a instanceof x) return g.LT.value;
      if (b instanceof x) return g.GT.value;
      if (a instanceof v && b instanceof v) return g.EQ.value;
      if (a instanceof v) return g.LT.value;
      if (b instanceof v) return g.GT.value;
      if (a instanceof r && b instanceof r) return g.EQ.value;
      if (a instanceof r) return g.LT.value;
      if (b instanceof r) return g.GT.value;
      if (a instanceof y && b instanceof y) return g.EQ.value;
      throw Error("Failed pattern match at Data.Date.Component (line 154, column 1 - line 154, column 42): " + [a.constructor.name, b.constructor.name]);
    };
  }),
      P = new b.Eq(function (a) {
    return function (b) {
      return a instanceof C && b instanceof C || a instanceof t && b instanceof t || a instanceof A && b instanceof A || a instanceof q && b instanceof q || a instanceof H && b instanceof H || a instanceof n && b instanceof n || a instanceof J && b instanceof J || a instanceof F && b instanceof F || a instanceof z && b instanceof z || a instanceof D && b instanceof D || a instanceof I && b instanceof I || a instanceof G && b instanceof G ? !0 : !1;
    };
  }),
      N = new c.Ord(function () {
    return P;
  }, function (a) {
    return function (b) {
      if (a instanceof C && b instanceof C) return g.EQ.value;
      if (a instanceof C) return g.LT.value;
      if (b instanceof C) return g.GT.value;
      if (a instanceof t && b instanceof t) return g.EQ.value;
      if (a instanceof t) return g.LT.value;
      if (b instanceof t) return g.GT.value;
      if (a instanceof A && b instanceof A) return g.EQ.value;
      if (a instanceof A) return g.LT.value;
      if (b instanceof A) return g.GT.value;
      if (a instanceof q && b instanceof q) return g.EQ.value;
      if (a instanceof q) return g.LT.value;
      if (b instanceof q) return g.GT.value;
      if (a instanceof H && b instanceof H) return g.EQ.value;
      if (a instanceof H) return g.LT.value;
      if (b instanceof H) return g.GT.value;
      if (a instanceof n && b instanceof n) return g.EQ.value;
      if (a instanceof n) return g.LT.value;
      if (b instanceof n) return g.GT.value;
      if (a instanceof J && b instanceof J) return g.EQ.value;
      if (a instanceof J) return g.LT.value;
      if (b instanceof J) return g.GT.value;
      if (a instanceof F && b instanceof F) return g.EQ.value;
      if (a instanceof F) return g.LT.value;
      if (b instanceof F) return g.GT.value;
      if (a instanceof z && b instanceof z) return g.EQ.value;
      if (a instanceof z) return g.LT.value;
      if (b instanceof z) return g.GT.value;
      if (a instanceof D && b instanceof D) return g.EQ.value;
      if (a instanceof D) return g.LT.value;
      if (b instanceof D) return g.GT.value;
      if (a instanceof I && b instanceof I) return g.EQ.value;
      if (a instanceof I) return g.LT.value;
      if (b instanceof I) return g.GT.value;
      if (a instanceof G && b instanceof G) return g.EQ.value;
      throw Error("Failed pattern match at Data.Date.Component (line 61, column 1 - line 61, column 38): " + [a.constructor.name, b.constructor.name]);
    };
  }),
      O = new k.Bounded(function () {
    return B;
  }, -271820, 275759),
      L = new k.Bounded(function () {
    return E;
  }, m.value, y.value),
      U = new k.Bounded(function () {
    return N;
  }, C.value, G.value),
      R = new h.BoundedEnum(function () {
    return O;
  }, function () {
    return M;
  }, 547580, function (a) {
    return a;
  }, function (a) {
    if (-271820 <= a && 275759 >= a) return new e.Just(a);
    if (f.otherwise) return e.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 35, column 1 - line 40, column 24): " + [a.constructor.name]);
  }),
      M = new h.Enum(function () {
    return B;
  }, function () {
    var a = h.toEnum(R),
        b = h.fromEnum(R);
    return function (c) {
      return a(b(c) - 1 | 0);
    };
  }(), function () {
    var a = h.toEnum(R),
        b = h.fromEnum(R);
    return function (c) {
      return a(b(c) + 1 | 0);
    };
  }()),
      S = new h.BoundedEnum(function () {
    return L;
  }, function () {
    return Q;
  }, 7, function (a) {
    if (a instanceof m) return 1;
    if (a instanceof u) return 2;
    if (a instanceof p) return 3;
    if (a instanceof x) return 4;
    if (a instanceof v) return 5;
    if (a instanceof r) return 6;
    if (a instanceof y) return 7;
    throw Error("Failed pattern match at Data.Date.Component (line 175, column 14 - line 182, column 16): " + [a.constructor.name]);
  }, function (a) {
    return 1 === a ? new e.Just(m.value) : 2 === a ? new e.Just(u.value) : 3 === a ? new e.Just(p.value) : 4 === a ? new e.Just(x.value) : 5 === a ? new e.Just(v.value) : 6 === a ? new e.Just(r.value) : 7 === a ? new e.Just(y.value) : e.Nothing.value;
  }),
      Q = new h.Enum(function () {
    return E;
  }, function () {
    var a = h.toEnum(S),
        b = h.fromEnum(S);
    return function (c) {
      return a(b(c) - 1 | 0);
    };
  }(), function () {
    var a = h.toEnum(S),
        b = h.fromEnum(S);
    return function (c) {
      return a(b(c) + 1 | 0);
    };
  }()),
      T = new h.BoundedEnum(function () {
    return U;
  }, function () {
    return V;
  }, 12, function (a) {
    if (a instanceof C) return 1;
    if (a instanceof t) return 2;
    if (a instanceof A) return 3;
    if (a instanceof q) return 4;
    if (a instanceof H) return 5;
    if (a instanceof n) return 6;
    if (a instanceof J) return 7;
    if (a instanceof F) return 8;
    if (a instanceof z) return 9;
    if (a instanceof D) return 10;
    if (a instanceof I) return 11;
    if (a instanceof G) return 12;
    throw Error("Failed pattern match at Data.Date.Component (line 87, column 14 - line 99, column 19): " + [a.constructor.name]);
  }, function (a) {
    return 1 === a ? new e.Just(C.value) : 2 === a ? new e.Just(t.value) : 3 === a ? new e.Just(A.value) : 4 === a ? new e.Just(q.value) : 5 === a ? new e.Just(H.value) : 6 === a ? new e.Just(n.value) : 7 === a ? new e.Just(J.value) : 8 === a ? new e.Just(F.value) : 9 === a ? new e.Just(z.value) : 10 === a ? new e.Just(D.value) : 11 === a ? new e.Just(I.value) : 12 === a ? new e.Just(G.value) : e.Nothing.value;
  }),
      V = new h.Enum(function () {
    return N;
  }, function () {
    var a = h.toEnum(T),
        b = h.fromEnum(T);
    return function (c) {
      return a(b(c) - 1 | 0);
    };
  }(), function () {
    var a = h.toEnum(T),
        b = h.fromEnum(T);
    return function (c) {
      return a(b(c) + 1 | 0);
    };
  }()),
      W = new k.Bounded(function () {
    return K;
  }, 1, 31),
      Y = new h.BoundedEnum(function () {
    return W;
  }, function () {
    return ba;
  }, 31, function (a) {
    return a;
  }, function (a) {
    if (1 <= a && 31 >= a) return new e.Just(a);
    if (f.otherwise) return e.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 133, column 1 - line 138, column 23): " + [a.constructor.name]);
  }),
      ba = new h.Enum(function () {
    return K;
  }, function () {
    var a = h.toEnum(Y),
        b = h.fromEnum(Y);
    return function (c) {
      return a(b(c) - 1 | 0);
    };
  }(), function () {
    var a = h.toEnum(Y),
        b = h.fromEnum(Y);
    return function (c) {
      return a(b(c) + 1 | 0);
    };
  }());
  d.January = C;
  d.February = t;
  d.March = A;
  d.April = q;
  d.May = H;
  d.June = n;
  d.July = J;
  d.August = F;
  d.September = z;
  d.October = D;
  d.November = I;
  d.December = G;
  d.boundedYear = O;
  d.boundedEnumYear = R;
  d.boundedMonth = U;
  d.boundedEnumMonth = T;
  d.showMonth = l;
  d.boundedDay = W;
  d.boundedEnumDay = Y;
  d.boundedEnumWeekday = S;
  d.showWeekday = a;
})(PS);

(function (a) {
  a["Data.Date"] = a["Data.Date"] || {};

  var d = a["Data.Date"],
      f = a["Data.Date"],
      k = a["Data.Date.Component"],
      h = a["Data.Enum"],
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

  d.canonicalDate = function (a) {
    return function (c) {
      return function (d) {
        return f.canonicalDateImpl(function (a) {
          return function (c) {
            return function (d) {
              return new e(a, b.fromJust()(h.toEnum(k.boundedEnumMonth)(c)), d);
            };
          };
        }, a, h.fromEnum(k.boundedEnumMonth)(c), d);
      };
    };
  };

  d.year = function (a) {
    return a.value0;
  };

  d.month = function (a) {
    return a.value1;
  };

  d.day = function (a) {
    return a.value2;
  };

  d.weekday = function (a) {
    a = f.calcWeekday(a.value0, h.fromEnum(k.boundedEnumMonth)(a.value1), a.value2);
    return 0 === a ? b.fromJust()(h.toEnum(k.boundedEnumWeekday)(7)) : b.fromJust()(h.toEnum(k.boundedEnumWeekday)(a));
  };
})(PS);

(function (a) {
  a["Data.DateTime"] = a["Data.DateTime"] || {};
  a = a["Data.DateTime"];

  var d = function () {
    function a(a, d) {
      this.value0 = a;
      this.value1 = d;
    }

    a.create = function (d) {
      return function (f) {
        return new a(d, f);
      };
    };

    return a;
  }();

  a.DateTime = d;
})(PS);

(function (a) {
  a.fromDateTimeImpl = function (a, f, k, h, b, e, c) {
    f = new Date(Date.UTC(a, f - 1, k, h, b, e, c));
    0 <= a && 100 > a && f.setUTCFullYear(a);
    return f.getTime();
  };
})(PS["Data.DateTime.Instant"] = PS["Data.DateTime.Instant"] || {});

(function (a) {
  a["Data.Time"] = a["Data.Time"] || {};
  a = a["Data.Time"];

  var d = function () {
    function a(a, d, b, e) {
      this.value0 = a;
      this.value1 = d;
      this.value2 = b;
      this.value3 = e;
    }

    a.create = function (d) {
      return function (f) {
        return function (b) {
          return function (e) {
            return new a(d, f, b, e);
          };
        };
      };
    };

    return a;
  }();

  a.Time = d;

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
  var d = a["Data.DateTime.Instant"],
      f = a["Data.DateTime.Instant"],
      k = a["Data.Date"],
      h = a["Data.Date.Component"],
      b = a["Data.Enum"],
      e = a["Data.Time"];

  d.unInstant = function (a) {
    return a;
  };

  d.fromDateTime = function (a) {
    return f.fromDateTimeImpl(k.year(a.value0), b.fromEnum(h.boundedEnumMonth)(k.month(a.value0)), k.day(a.value0), e.hour(a.value1), e.minute(a.value1), e.second(a.value1), e.millisecond(a.value1));
  };
})(PS);

(function (a) {
  a.intDegree = function (a) {
    return Math.min(Math.abs(a), 2147483647);
  };

  a.intDiv = function (a) {
    return function (d) {
      return 0 === d ? 0 : 0 < d ? Math.floor(a / d) : -Math.floor(a / -d);
    };
  };

  a.intMod = function (a) {
    return function (d) {
      if (0 === d) return 0;
      d = Math.abs(d);
      return (a % d + d) % d;
    };
  };
})(PS["Data.EuclideanRing"] = PS["Data.EuclideanRing"] || {});

(function (a) {
  a["Data.EuclideanRing"] = a["Data.EuclideanRing"] || {};
  var d = a["Data.EuclideanRing"],
      f = a["Data.EuclideanRing"],
      k = a["Data.CommutativeRing"];
  a = new function (a, b, d, c) {
    this.CommutativeRing0 = a;
    this.degree = b;
    this.div = d;
    this.mod = c;
  }(function () {
    return k.commutativeRingInt;
  }, f.intDegree, f.intDiv, f.intMod);

  d.div = function (a) {
    return a.div;
  };

  d.mod = function (a) {
    return a.mod;
  };

  d.euclideanRingInt = a;
})(PS);

(function (a) {
  a["Data.Identity"] = a["Data.Identity"] || {};

  var d = a["Data.Identity"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Data.Functor"],
      c = function c(a) {
    return a;
  };

  a = new a["Data.Newtype"].Newtype(function (a) {
    return a;
  }, c);
  var g = new e.Functor(function (a) {
    return function (b) {
      return a(b);
    };
  }),
      l = new k.Apply(function () {
    return g;
  }, function (a) {
    return function (b) {
      return a(b);
    };
  }),
      m = new h.Bind(function () {
    return l;
  }, function (a) {
    return function (b) {
      return b(a);
    };
  }),
      u = new f.Applicative(function () {
    return l;
  }, c);
  f = new b.Monad(function () {
    return u;
  }, function () {
    return m;
  });
  d.newtypeIdentity = a;
  d.functorIdentity = g;
  d.monadIdentity = f;
})(PS);

(function (a) {
  a.split = function (a) {
    return function (d) {
      return d.split(a);
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
  var d = a["Data.String.Common"];
  a = a["Data.String.Common"];

  d["null"] = function (a) {
    return "" === a;
  };

  d.split = a.split;
  d.toUpper = a.toUpper;
  d.trim = a.trim;
})(PS);

(function (a) {
  a["Data.String.Pattern"] = a["Data.String.Pattern"] || {};

  var d = a["Data.String.Pattern"],
      f = function f(a) {
    return a;
  };

  a = new a["Data.Newtype"].Newtype(function (a) {
    return a;
  }, f);
  d.Pattern = f;
  d.newtypePattern = a;
})(PS);

(function (a) {
  a["Text.Parsing.Parser.Pos"] = a["Text.Parsing.Parser.Pos"] || {};
  var d = a["Text.Parsing.Parser.Pos"],
      f = a["Data.EuclideanRing"],
      k = a["Data.Foldable"],
      h = a["Data.Newtype"],
      b = a["Data.String.Common"],
      e = a["Data.String.Pattern"];
  d.initialPos = {
    line: 1,
    column: 1
  };

  d.updatePosString = function (a) {
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
      })(a)(b.split(h.wrap(e.newtypePattern)(""))(c));
    };
  };
})(PS);

(function (a) {
  a["Text.Parsing.Parser"] = a["Text.Parsing.Parser"] || {};

  var d = a["Text.Parsing.Parser"],
      f = a["Control.Alt"],
      k = a["Control.Alternative"],
      h = a["Control.Applicative"],
      b = a["Control.Bind"],
      e = a["Control.Lazy"],
      c = a["Control.Monad.Error.Class"],
      g = a["Control.Monad.Except.Trans"],
      l = a["Control.Monad.State.Class"],
      m = a["Control.Monad.State.Trans"],
      u = a["Control.Plus"],
      p = a["Data.Either"],
      x = a["Data.Identity"],
      v = a["Data.Newtype"],
      r = a["Data.Tuple"],
      y = a["Text.Parsing.Parser.Pos"],
      C = function () {
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
  }();

  a = function a(_a12) {
    return _a12;
  };

  var A = new v.Newtype(function (a) {
    return a;
  }, a),
      q = function q(a) {
    return function (b) {
      return function (c) {
        var d = new C(b, y.initialPos, !1);
        return m.evalStateT(a.Bind1().Apply0().Functor0())(g.runExceptT(v.unwrap(A)(c)))(d);
      };
    };
  },
      H = function H(a) {
    return g.monadStateExceptT(m.monadStateStateT(a));
  },
      n = function n(a) {
    return l.gets(H(a))(function (a) {
      return a.value1;
    });
  },
      J = new e.Lazy(function (a) {
    return e.defer(m.lazyStateT)(function () {
      var b = v.unwrap(A);
      return function (c) {
        return g.runExceptT(b(a(c)));
      };
    }());
  }),
      F = function F(a) {
    return g.functorExceptT(m.functorStateT(a));
  },
      z = function z(a) {
    return function (b) {
      return function (d) {
        return c.throwError(g.monadThrowExceptT(m.monadStateT(a)))(new t(b, d));
      };
    };
  },
      D = function D(a) {
    return g.bindExceptT(m.monadStateT(a));
  },
      I = function I(a) {
    return function (c) {
      return b.bindFlipped(D(a))(z(a)(c))(n(a));
    };
  },
      G = function G(a) {
    return g.applicativeExceptT(m.monadStateT(a));
  },
      B = function B(a) {
    return new f.Alt(function () {
      return F(a.Bind1().Apply0().Functor0());
    }, function (c) {
      return function (d) {
        return g.ExceptT(m.StateT(function (e) {
          return b.bind(a.Bind1())(m.runStateT(g.runExceptT(v.unwrap(A)(c)))(new C(e.value0, e.value1, !1)))(function (b) {
            return b.value0 instanceof p.Left && !b.value1.value2 ? m.runStateT(g.runExceptT(v.unwrap(A)(d)))(e) : h.pure(a.Applicative0())(new r.Tuple(b.value0, b.value1));
          });
        }));
      };
    });
  },
      K = function K(a) {
    return new u.Plus(function () {
      return B(a);
    }, I(a)("No alternative"));
  };

  d.ParseError = t;

  d.parseErrorMessage = function (a) {
    return a.value0;
  };

  d.parseErrorPosition = function (a) {
    return a.value1;
  };

  d.ParseState = C;
  d.ParserT = a;

  d.runParser = function (a) {
    var b = v.unwrap(x.newtypeIdentity),
        c = q(x.monadIdentity)(a);
    return function (a) {
      return b(c(a));
    };
  };

  d.fail = I;
  d.newtypeParserT = A;
  d.lazyParserT = J;
  d.functorParserT = F;

  d.applyParserT = function (a) {
    return g.applyExceptT(m.monadStateT(a));
  };

  d.applicativeParserT = G;
  d.bindParserT = D;
  d.monadStateParserT = H;
  d.altParserT = B;
  d.plusParserT = K;

  d.alternativeParserT = function (a) {
    return new k.Alternative(function () {
      return G(a);
    }, function () {
      return K(a);
    });
  };
})(PS);

(function (a) {
  a["Text.Parsing.Parser.Combinators"] = a["Text.Parsing.Parser.Combinators"] || {};
  var d = a["Text.Parsing.Parser.Combinators"],
      f = a["Control.Alt"],
      k = a["Control.Applicative"],
      h = a["Control.Bind"],
      b = a["Control.Monad.Except.Trans"],
      e = a["Control.Monad.State.Trans"],
      c = a["Control.Plus"],
      g = a["Data.Either"],
      l = a["Data.Foldable"],
      m = a["Data.Newtype"],
      u = a["Data.Tuple"],
      p = a["Text.Parsing.Parser"];

  d.withErrorMessage = function (a) {
    return function (b) {
      return function (c) {
        return f.alt(p.altParserT(a))(b)(p.fail(a)("Expected " + c));
      };
    };
  };

  d["try"] = function (a) {
    return function (c) {
      return p.ParserT(b.ExceptT(e.StateT(function (d) {
        return h.bind(a.Bind1())(e.runStateT(b.runExceptT(m.unwrap(p.newtypeParserT)(c)))(d))(function (b) {
          return b.value0 instanceof g.Left ? k.pure(a.Applicative0())(new u.Tuple(b.value0, new p.ParseState(b.value1.value0, b.value1.value1, d.value2))) : k.pure(a.Applicative0())(new u.Tuple(b.value0, b.value1));
        });
      })));
    };
  };

  d.tryRethrow = function (a) {
    return function (c) {
      return p.ParserT(b.ExceptT(e.StateT(function (d) {
        return h.bind(a.Bind1())(e.runStateT(b.runExceptT(m.unwrap(p.newtypeParserT)(c)))(d))(function (b) {
          return b.value0 instanceof g.Left ? k.pure(a.Applicative0())(new u.Tuple(new g.Left(new p.ParseError(b.value0.value0.value0, d.value1)), new p.ParseState(b.value1.value0, b.value1.value1, d.value2))) : k.pure(a.Applicative0())(new u.Tuple(b.value0, b.value1));
        });
      })));
    };
  };

  d.choice = function (a) {
    return function (b) {
      return l.foldl(a)(f.alt(p.altParserT(b)))(c.empty(p.plusParserT(b)));
    };
  };
})(PS);

(function (a) {
  var d = "function" === typeof Array.from,
      f = "undefined" !== typeof Symbol && null != Symbol && "undefined" !== typeof Symbol.iterator && "function" === typeof String.prototype[Symbol.iterator],
      k = "function" === typeof String.prototype.fromCodePoint,
      h = "function" === typeof String.prototype.codePointAt;

  a._unsafeCodePointAt0 = function (a) {
    return h ? function (a) {
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
              if (f) for (g = g[Symbol.iterator](), h = e;; --h) {
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
      return d ? function (a) {
        return Array.from(a, b);
      } : a;
    };
  };
})(PS["Data.String.CodePoints"] = PS["Data.String.CodePoints"] || {});

(function (a) {
  a.fromNumberImpl = function (a) {
    return function (d) {
      return function (f) {
        return (f | 0) === f ? a(f) : d;
      };
    };
  };

  a.toNumber = function (a) {
    return a;
  };

  a.toStringAs = function (a) {
    return function (d) {
      return d.toString(a);
    };
  };
})(PS["Data.Int"] = PS["Data.Int"] || {});

(function (a) {
  a.infinity = Infinity;
})(PS.Global = PS.Global || {});

(function (a) {
  a.Global = a.Global || {};
  a.Global.infinity = a.Global.infinity;
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

  var d = a["Data.Int"],
      f = a["Data.Int"],
      k = a["Data.Boolean"],
      h = a["Data.Bounded"],
      b = a["Data.Maybe"],
      e = a.Global,
      c = a.Math,
      g = f.fromNumberImpl(b.Just.create)(b.Nothing.value),
      l = function l(a) {
    if (a === e.infinity || a === -e.infinity) return 0;
    if (a >= f.toNumber(h.top(h.boundedInt))) return h.top(h.boundedInt);
    if (a <= f.toNumber(h.bottom(h.boundedInt))) return h.bottom(h.boundedInt);
    if (k.otherwise) return b.fromMaybe(0)(g(a));
    throw Error("Failed pattern match at Data.Int (line 66, column 1 - line 66, column 29): " + [a.constructor.name]);
  };

  d.floor = function (a) {
    return l(c.floor(a));
  };

  d.hexadecimal = 16;
  d.toStringAs = f.toStringAs;
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
    return function (d) {
      return function (f) {
        return function (h) {
          return 0 <= f && f < h.length ? a(h.charAt(f)) : d;
        };
      };
    };
  };

  a.length = function (a) {
    return a.length;
  };

  a._indexOf = function (a) {
    return function (d) {
      return function (f) {
        return function (h) {
          h = h.indexOf(f);
          return -1 === h ? d : a(h);
        };
      };
    };
  };

  a.take = function (a) {
    return function (d) {
      return d.substr(0, a);
    };
  };

  a.drop = function (a) {
    return function (d) {
      return d.substring(a);
    };
  };
})(PS["Data.String.CodeUnits"] = PS["Data.String.CodeUnits"] || {});

(function (a) {
  a.charAt = function (a) {
    return function (d) {
      if (0 <= a && a < d.length) return d.charAt(a);
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

  var d = a["Data.String.CodeUnits"],
      f = a["Data.String.CodeUnits"],
      k = a["Data.Maybe"],
      h = a["Data.String.Unsafe"],
      b = f._indexOf(k.Just.create)(k.Nothing.value);

  f._charAt(k.Just.create)(k.Nothing.value);

  d.contains = function (a) {
    var c = b(a);
    return function (a) {
      return k.isJust(c(a));
    };
  };

  d.uncons = function (a) {
    return "" === a ? k.Nothing.value : new k.Just({
      head: h.charAt(0)(a),
      tail: f.drop(1)(a)
    });
  };

  d.indexOf = b;
  d.singleton = f.singleton;
  d.fromCharArray = f.fromCharArray;
  d.toCharArray = f.toCharArray;
  d.length = f.length;
  d.take = f.take;
  d.drop = f.drop;
})(PS);

(function (a) {
  a.unfoldrArrayImpl = function (a) {
    return function (d) {
      return function (f) {
        return function (h) {
          return function (b) {
            return function (e) {
              for (var c = [];;) {
                e = b(e);
                if (a(e)) return c;
                e = d(e);
                c.push(f(e));
                e = h(e);
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
  var d = a["Data.Unfoldable"],
      f = a["Data.Function"],
      k = a["Data.Functor"],
      h = a["Data.Maybe"],
      b = a["Data.Tuple"],
      e = a["Data.Unfoldable1"];
  a = new function (a, b) {
    this.Unfoldable10 = a;
    this.unfoldr = b;
  }(function () {
    return e.unfoldable1Array;
  }, a["Data.Unfoldable"].unfoldrArrayImpl(h.isNothing)(h.fromJust())(b.fst)(b.snd));

  d.unfoldr = function (a) {
    return a.unfoldr;
  };

  d.fromMaybe = function (a) {
    return (0, a.unfoldr)(function (a) {
      return k.map(h.functorMaybe)(f.flip(b.Tuple.create)(h.Nothing.value))(a);
    });
  };

  d.unfoldableArray = a;
})(PS);

(function (a) {
  a["Data.String.CodePoints"] = a["Data.String.CodePoints"] || {};

  var d = a["Data.String.CodePoints"],
      f = a["Data.String.CodePoints"],
      k = a["Data.Array"],
      h = a["Data.Boolean"],
      b = a["Data.Bounded"],
      e = a["Data.Enum"],
      c = a["Data.Eq"],
      g = a["Data.EuclideanRing"],
      l = a["Data.Functor"],
      m = a["Data.Int"],
      u = a["Data.Maybe"],
      p = a["Data.Ord"],
      x = a["Data.String.CodeUnits"],
      v = a["Data.String.Common"],
      r = a["Data.String.Unsafe"],
      y = a["Data.Tuple"],
      C = a["Data.Unfoldable"],
      t = function t(a) {
    return function (b) {
      return ((1024 * (a - 55296 | 0) | 0) + (b - 56320 | 0) | 0) + 65536 | 0;
    };
  };

  a = new a["Data.Show"].Show(function (a) {
    return "(CodePoint 0x" + (v.toUpper(m.toStringAs(m.hexadecimal)(a)) + ")");
  });

  var A = function A(a) {
    var b = x.length(a);
    if (0 === b) return u.Nothing.value;
    if (1 === b) return new u.Just({
      head: e.fromEnum(e.boundedEnumChar)(r.charAt(0)(a)),
      tail: ""
    });
    b = e.fromEnum(e.boundedEnumChar)(r.charAt(1)(a));
    var c = e.fromEnum(e.boundedEnumChar)(r.charAt(0)(a));
    return 55296 <= c && 56319 >= c && 56320 <= b && 57343 >= b ? new u.Just({
      head: t(c)(b),
      tail: x.drop(2)(a)
    }) : new u.Just({
      head: c,
      tail: x.drop(1)(a)
    });
  },
      q = function q(a) {
    return l.map(u.functorMaybe)(function (a) {
      return new y.Tuple(a.head, a.tail);
    })(A(a));
  },
      H = f._unsafeCodePointAt0(function (a) {
    var b = e.fromEnum(e.boundedEnumChar)(r.charAt(0)(a));
    return 55296 <= b && 56319 >= b && 1 < x.length(a) && (a = e.fromEnum(e.boundedEnumChar)(r.charAt(1)(a)), 56320 <= a && 57343 >= a) ? t(b)(a) : b;
  }),
      n = f._toCodePointArray(function (a) {
    return C.unfoldr(C.unfoldableArray)(q)(a);
  })(H),
      J = function J(a) {
    return k.length(n(a));
  },
      F = function () {
    var a = e.toEnumWithDefaults(e.boundedEnumChar)(b.bottom(b.boundedChar))(b.top(b.boundedChar));
    return function (b) {
      return x.singleton(a(b));
    };
  }(),
      z = f._singleton(function (a) {
    if (65535 >= a) return F(a);
    var b = g.div(g.euclideanRingInt)(a - 65536 | 0)(1024) + 55296 | 0;
    a = g.mod(g.euclideanRingInt)(a - 65536 | 0)(1024) + 56320 | 0;
    return F(b) + F(a);
  }),
      D = function D(a) {
    return function (b) {
      if (1 > a) return "";
      var c = A(b);
      return c instanceof u.Just ? z(c.value0.head) + D(a - 1 | 0)(c.value0.tail) : b;
    };
  },
      I = f._take(D),
      G = new c.Eq(function (a) {
    return function (b) {
      return a === b;
    };
  }),
      B = new p.Ord(function () {
    return G;
  }, function (a) {
    return function (b) {
      return p.compare(p.ordInt)(a)(b);
    };
  }),
      K = function K(a) {
    return function (b) {
      for (var c = a, d = !1, e; !d;) {
        e = c;
        var f = A(b);
        f instanceof u.Just ? 0 === e ? (d = !0, e = new u.Just(f.value0.head)) : (c = e - 1 | 0, b = f.value0.tail, e = void 0) : (d = !0, e = u.Nothing.value);
      }

      return e;
    };
  },
      w = new b.Bounded(function () {
    return B;
  }, 0, 1114111);

  c = new e.BoundedEnum(function () {
    return w;
  }, function () {
    return E;
  }, 1114112, function (a) {
    return a;
  }, function (a) {
    if (0 <= a && 1114111 >= a) return new u.Just(a);
    if (h.otherwise) return u.Nothing.value;
    throw Error("Failed pattern match at Data.String.CodePoints (line 63, column 1 - line 68, column 26): " + [a.constructor.name]);
  });
  var E = new e.Enum(function () {
    return B;
  }, e.defaultPred(e.toEnum(c))(e.fromEnum(c)), e.defaultSucc(e.toEnum(c))(e.fromEnum(c)));
  d.singleton = z;
  d.toCodePointArray = n;

  d.codePointAt = function (a) {
    return function (b) {
      return 0 > a || 0 === a && "" === b ? u.Nothing.value : 0 === a ? new u.Just(H(b)) : f._codePointAt(K)(u.Just.create)(u.Nothing.value)(H)(a)(b);
    };
  };

  d.length = J;

  d.indexOf = function (a) {
    return function (b) {
      return l.map(u.functorMaybe)(function (a) {
        return J(x.take(a)(b));
      })(x.indexOf(a)(b));
    };
  };

  d.take = I;

  d.drop = function (a) {
    return function (b) {
      return x.drop(x.length(I(a)(b)))(b);
    };
  };

  d.showCodePoint = a;
  d.boundedEnumCodePoint = c;
})(PS);

(function (a) {
  a["Text.Parsing.Parser.String"] = a["Text.Parsing.Parser.String"] || {};
  var d = a["Text.Parsing.Parser.String"],
      f = a["Control.Applicative"],
      k = a["Control.Bind"],
      h = a["Control.Monad.State.Class"],
      b = a["Data.Eq"],
      e = a["Data.Foldable"],
      c = a["Data.Function"],
      g = a["Data.Maybe"],
      l = a["Data.Newtype"],
      m = a["Data.Show"],
      u = a["Data.String.CodePoints"],
      p = a["Data.String.CodeUnits"],
      x = a["Data.String.Pattern"],
      v = a["Text.Parsing.Parser"],
      r = a["Text.Parsing.Parser.Combinators"],
      y = a["Text.Parsing.Parser.Pos"];
  a = new function (a, b, c, d) {
    this.drop = a;
    this.indexOf = b;
    this["null"] = c;
    this.uncons = d;
  }(u.drop, u.indexOf, a["Data.String.Common"]["null"], p.uncons);

  var C = function C(a) {
    return function (b) {
      return k.bind(v.bindParserT(b))(h.gets(v.monadStateParserT(b))(function (a) {
        return a.value0;
      }))(function (c) {
        var d = (0, a.uncons)(c);
        if (d instanceof g.Nothing) return v.fail(b)("Unexpected EOF");
        if (d instanceof g.Just) return k.discard(k.discardUnit)(v.bindParserT(b))(h.modify_(v.monadStateParserT(b))(function (a) {
          return new v.ParseState(d.value0.tail, y.updatePosString(a.value1)(p.singleton(d.value0.head)), !0);
        }))(function () {
          return f.pure(v.applicativeParserT(b))(d.value0.head);
        });
        throw Error("Failed pattern match at Text.Parsing.Parser.String (line 56, column 3 - line 63, column 16): " + [d.constructor.name]);
      });
    };
  },
      t = function t(a) {
    return function (b) {
      return function (c) {
        return r.tryRethrow(b)(k.bind(v.bindParserT(b))(C(a)(b))(function (a) {
          return c(a) ? f.pure(v.applicativeParserT(b))(a) : v.fail(b)("Character '" + (p.singleton(a) + "' did not satisfy predicate"));
        }));
      };
    };
  };

  d.eof = function (a) {
    return function (b) {
      return k.bind(v.bindParserT(b))(h.gets(v.monadStateParserT(b))(function (a) {
        return a.value0;
      }))(function (c) {
        return f.unless(v.applicativeParserT(b))((0, a["null"])(c))(v.fail(b)("Expected EOF"));
      });
    };
  };

  d.string = function (a) {
    return function (b) {
      return function (c) {
        return k.bind(v.bindParserT(b))(h.gets(v.monadStateParserT(b))(function (a) {
          return a.value0;
        }))(function (d) {
          var e = (0, a.indexOf)(l.wrap(x.newtypePattern)(c))(d);
          return e instanceof g.Just && 0 === e.value0 ? k.discard(k.discardUnit)(v.bindParserT(b))(h.modify_(v.monadStateParserT(b))(function (b) {
            return new v.ParseState((0, a.drop)(u.length(c))(d), y.updatePosString(b.value1)(c), !0);
          }))(function () {
            return f.pure(v.applicativeParserT(b))(c);
          }) : v.fail(b)("Expected " + m.show(m.showString)(c));
        });
      };
    };
  };

  d.noneOf = function (a) {
    return function (d) {
      return function (f) {
        return r.withErrorMessage(d)(t(a)(d)(c.flip(e.notElem(e.foldableArray)(b.eqChar))(f)))("none of " + m.show(m.showArray(m.showChar))(f));
      };
    };
  };

  d.stringLikeString = a;
})(PS);

(function (a) {
  a["Data.Formatter.Parser.Utils"] = a["Data.Formatter.Parser.Utils"] || {};

  var d = a["Data.Formatter.Parser.Utils"],
      f = a["Control.Apply"],
      k = a["Data.Bifunctor"],
      h = a["Data.Either"],
      b = a["Data.Functor"],
      e = a["Data.Identity"],
      c = a["Data.Show"],
      g = a["Text.Parsing.Parser"],
      l = a["Text.Parsing.Parser.Combinators"],
      m = a["Text.Parsing.Parser.String"],
      u = function u(a) {
    var b = g.parseErrorMessage(a);
    a = g.parseErrorPosition(a);
    a = "(line " + (c.show(c.showInt)(a.line) + (", col " + (c.show(c.showInt)(a.column) + ")")));
    return b + (" " + a);
  };

  d.oneOfAs = function (a) {
    return function (c) {
      return function (d) {
        return function (e) {
          return function (f) {
            return l.choice(c)(d)(b.map(a)(function (a) {
              return b.voidLeft(g.functorParserT(d.Bind1().Apply0().Functor0()))(e(a.value0))(a.value1);
            })(f));
          };
        };
      };
    };
  };

  d.runP = function (a) {
    return function (b) {
      return function (c) {
        return k.lmap(h.bifunctorEither)(u)(g.runParser(c)(f.applyFirst(g.applyParserT(e.monadIdentity))(b)(m.eof(a)(e.monadIdentity))));
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Time.Component"] = a["Data.Time.Component"] || {};
  var d = a["Data.Time.Component"],
      f = a["Data.Boolean"],
      k = a["Data.Bounded"],
      h = a["Data.Enum"],
      b = a["Data.Maybe"];
  a = a["Data.Ord"];
  var e = a.ordInt,
      c = a.ordInt,
      g = a.ordInt,
      l = a.ordInt,
      m = new k.Bounded(function () {
    return e;
  }, 0, 59),
      u = new k.Bounded(function () {
    return c;
  }, 0, 59),
      p = new k.Bounded(function () {
    return g;
  }, 0, 999),
      x = new k.Bounded(function () {
    return l;
  }, 0, 23),
      v = new h.BoundedEnum(function () {
    return m;
  }, function () {
    return r;
  }, 60, function (a) {
    return a;
  }, function (a) {
    if (0 <= a && 59 >= a) return new b.Just(a);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 90, column 1 - line 95, column 26): " + [a.constructor.name]);
  }),
      r = new h.Enum(function () {
    return e;
  }, function () {
    var a = h.toEnum(v),
        b = h.fromEnum(v);
    return function (c) {
      return a(b(c) - 1 | 0);
    };
  }(), function () {
    var a = h.toEnum(v),
        b = h.fromEnum(v);
    return function (c) {
      return a(b(c) + 1 | 0);
    };
  }()),
      y = new h.BoundedEnum(function () {
    return u;
  }, function () {
    return C;
  }, 60, function (a) {
    return a;
  }, function (a) {
    if (0 <= a && 59 >= a) return new b.Just(a);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 61, column 1 - line 66, column 26): " + [a.constructor.name]);
  }),
      C = new h.Enum(function () {
    return c;
  }, function () {
    var a = h.toEnum(y),
        b = h.fromEnum(y);
    return function (c) {
      return a(b(c) - 1 | 0);
    };
  }(), function () {
    var a = h.toEnum(y),
        b = h.fromEnum(y);
    return function (c) {
      return a(b(c) + 1 | 0);
    };
  }()),
      t = new h.BoundedEnum(function () {
    return p;
  }, function () {
    return A;
  }, 1E3, function (a) {
    return a;
  }, function (a) {
    if (0 <= a && 999 >= a) return new b.Just(a);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 120, column 1 - line 125, column 31): " + [a.constructor.name]);
  }),
      A = new h.Enum(function () {
    return g;
  }, function () {
    var a = h.toEnum(t),
        b = h.fromEnum(t);
    return function (c) {
      return a(b(c) - 1 | 0);
    };
  }(), function () {
    var a = h.toEnum(t),
        b = h.fromEnum(t);
    return function (c) {
      return a(b(c) + 1 | 0);
    };
  }()),
      q = new h.BoundedEnum(function () {
    return x;
  }, function () {
    return H;
  }, 24, function (a) {
    return a;
  }, function (a) {
    if (0 <= a && 23 >= a) return new b.Just(a);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 32, column 1 - line 37, column 24): " + [a.constructor.name]);
  }),
      H = new h.Enum(function () {
    return l;
  }, function () {
    var a = h.toEnum(q),
        b = h.fromEnum(q);
    return function (c) {
      return a(b(c) - 1 | 0);
    };
  }(), function () {
    var a = h.toEnum(q),
        b = h.fromEnum(q);
    return function (c) {
      return a(b(c) + 1 | 0);
    };
  }());
  d.boundedHour = x;
  d.boundedEnumHour = q;
  d.boundedMinute = u;
  d.boundedEnumMinute = y;
  d.boundedSecond = m;
  d.boundedEnumSecond = v;
  d.boundedMillisecond = p;
  d.boundedEnumMillisecond = t;
})(PS);

(function (a) {
  a["Data.Time.Duration"] = a["Data.Time.Duration"] || {};
  var d = a["Data.Time.Duration"];
  a = new a["Data.Newtype"].Newtype(function (a) {
    return a;
  }, function (a) {
    return a;
  });
  d.newtypeMilliseconds = a;
})(PS);

(function (a) {
  a["Data.Formatter.DateTime"] = a["Data.Formatter.DateTime"] || {};

  var d = a["Data.Formatter.DateTime"],
      f = a["Control.Alt"],
      k = a["Data.Array"],
      h = a["Data.Boolean"],
      b = a["Data.Date"],
      e = a["Data.Date.Component"],
      c = a["Data.DateTime.Instant"],
      g = a["Data.Either"],
      l = a["Data.Enum"],
      m = a["Data.EuclideanRing"],
      u = a["Data.Foldable"],
      p = a["Data.Formatter.Parser.Utils"],
      x = a["Data.Functor"],
      v = a["Data.Identity"],
      r = a["Data.Int"],
      y = a["Data.List"],
      C = a["Data.List.Types"],
      t = a["Data.Monoid"],
      A = a["Data.Newtype"],
      q = a["Data.Ord"],
      H = a["Data.Ring"],
      n = a["Data.Show"],
      J = a["Data.String.CodePoints"],
      F = a["Data.String.CodeUnits"],
      z = a["Data.Time"],
      D = a["Data.Time.Component"],
      I = a["Data.Time.Duration"],
      G = a["Data.Tuple"],
      B = a["Text.Parsing.Parser"],
      K = a["Text.Parsing.Parser.Combinators"],
      w = a["Text.Parsing.Parser.String"],
      E = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      P = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      N = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      O = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      L = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      U = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      R = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      M = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      S = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Q = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      T = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      V = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      W = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Y = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ba = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ca = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      X = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ia = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ea = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      qa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ha = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ja = function () {
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
      da = function da(a) {
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

  a = x.mapFlipped(B.functorParserT(v.functorIdentity))(k.some(B.alternativeParserT(v.monadIdentity))(B.lazyParserT)(w.noneOf(w.stringLikeString)(v.monadIdentity)(F.toCharArray("YMDEHhamsS"))))(F.fromCharArray);

  var Z = function Z(a) {
    if (0 > a) return "-" + Z(-a | 0);
    if (10 > a) return "0" + n.show(n.showInt)(a);
    if (h.otherwise) return n.show(n.showInt)(a);
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 192, column 1 - line 192, column 30): " + [a.constructor.name]);
  },
      la = function la(a) {
    if (0 > a) return "-" + la(-a | 0);
    if (10 > a) return "000" + n.show(n.showInt)(a);
    if (100 > a) return "00" + n.show(n.showInt)(a);
    if (1E3 > a) return "0" + n.show(n.showInt)(a);
    if (h.otherwise) return n.show(n.showInt)(a);
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 205, column 1 - line 205, column 33): " + [a.constructor.name]);
  },
      ta = function ta(a) {
    if (0 > a) return "-" + ta(-a | 0);
    if (10 > a) return "00" + n.show(n.showInt)(a);
    if (100 > a) return "0" + n.show(n.showInt)(a);
    if (h.otherwise) return n.show(n.showInt)(a);
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 198, column 1 - line 198, column 30): " + [a.constructor.name]);
  };

  f = f.alt(B.altParserT(v.monadIdentity))(p.oneOfAs(x.functorArray)(u.foldableArray)(v.monadIdentity)(function () {
    var a = K["try"](v.monadIdentity),
        b = w.string(w.stringLikeString)(v.monadIdentity);
    return function (c) {
      return a(b(c));
    };
  }())([new G.Tuple("YYYY", E.value), new G.Tuple("YY", P.value), new G.Tuple("Y", N.value), new G.Tuple("MMMM", O.value), new G.Tuple("MMM", L.value), new G.Tuple("MM", U.value), new G.Tuple("DD", R.value), new G.Tuple("D", M.value), new G.Tuple("E", Q.value), new G.Tuple("X", S.value), new G.Tuple("dddd", T.value), new G.Tuple("ddd", V.value), new G.Tuple("HH", W.value), new G.Tuple("hh", Y.value), new G.Tuple("a", ba.value), new G.Tuple("mm", X.value), new G.Tuple("m", ca.value), new G.Tuple("ss", ea.value), new G.Tuple("s", ia.value), new G.Tuple("SSS", qa.value), new G.Tuple("SS", ja.value), new G.Tuple("S", ha.value)]))(x.map(B.functorParserT(v.functorIdentity))(aa.create)(a));

  var va = function va(a) {
    a = n.show(n.showInt)(q.abs(q.ordInt)(H.ringInt)(a));
    var b = J.length(a);
    return 1 === b ? "0" + a : 2 === b ? a : J.drop(b - 2 | 0)(a);
  };

  y = y.some(B.alternativeParserT(v.monadIdentity))(B.lazyParserT)(f);

  var ua = p.runP(w.stringLikeString)(y),
      wa = function wa(a) {
    return 0 === a ? 12 : a;
  },
      ka = function ka(a) {
    return function (d) {
      if (d instanceof E) return la(l.fromEnum(e.boundedEnumYear)(b.year(a.value0)));
      if (d instanceof P) return va(l.fromEnum(e.boundedEnumYear)(b.year(a.value0)));
      if (d instanceof N) return n.show(n.showInt)(l.fromEnum(e.boundedEnumYear)(b.year(a.value0)));
      if (d instanceof O) return n.show(e.showMonth)(b.month(a.value0));
      if (d instanceof L) return da(b.month(a.value0));
      if (d instanceof U) return Z(l.fromEnum(e.boundedEnumMonth)(b.month(a.value0)));
      if (d instanceof R) return Z(l.fromEnum(e.boundedEnumDay)(b.day(a.value0)));
      if (d instanceof M) return n.show(n.showInt)(l.fromEnum(e.boundedEnumDay)(b.day(a.value0)));
      if (d instanceof S) return n.show(n.showInt)(r.floor(A.unwrap(I.newtypeMilliseconds)(c.unInstant(c.fromDateTime(a))) / 1E3));
      if (d instanceof Q) return n.show(n.showInt)(l.fromEnum(e.boundedEnumWeekday)(b.weekday(a.value0)));
      if (d instanceof T) return n.show(e.showWeekday)(b.weekday(a.value0));
      if (d instanceof V) return J.take(3)(n.show(e.showWeekday)(b.weekday(a.value0)));
      if (d instanceof W) return Z(l.fromEnum(D.boundedEnumHour)(z.hour(a.value1)));
      if (d instanceof Y) return Z(wa(m.mod(m.euclideanRingInt)(l.fromEnum(D.boundedEnumHour)(z.hour(a.value1)))(12)));
      if (d instanceof ba) return 12 <= l.fromEnum(D.boundedEnumHour)(z.hour(a.value1)) ? "PM" : "AM";
      if (d instanceof ca) return n.show(n.showInt)(l.fromEnum(D.boundedEnumMinute)(z.minute(a.value1)));
      if (d instanceof X) return Z(l.fromEnum(D.boundedEnumMinute)(z.minute(a.value1)));
      if (d instanceof ia) return n.show(n.showInt)(l.fromEnum(D.boundedEnumSecond)(z.second(a.value1)));
      if (d instanceof ea) return Z(l.fromEnum(D.boundedEnumSecond)(z.second(a.value1)));
      if (d instanceof qa) return ta(l.fromEnum(D.boundedEnumMillisecond)(z.millisecond(a.value1)));
      if (d instanceof ha) return n.show(n.showInt)(function (a) {
        return m.div(m.euclideanRingInt)(a)(100);
      }(l.fromEnum(D.boundedEnumMillisecond)(z.millisecond(a.value1))));
      if (d instanceof ja) return Z(function (a) {
        return m.div(m.euclideanRingInt)(a)(10);
      }(l.fromEnum(D.boundedEnumMillisecond)(z.millisecond(a.value1))));
      if (d instanceof aa) return d.value0;
      throw Error("Failed pattern match at Data.Formatter.DateTime (line 167, column 38 - line 190, column 20): " + [d.constructor.name]);
    };
  },
      xa = function xa(a) {
    return function (b) {
      return u.foldMap(C.foldableList)(t.monoidString)(ka(b))(a);
    };
  };

  d.formatDateTime = function (a) {
    return function (b) {
      return x.mapFlipped(g.functorEither)(ua(a))(function (a) {
        return xa(a)(b);
      });
    };
  };
})(PS);

(function (a) {
  a.runFn2 = function (a) {
    return function (d) {
      return function (f) {
        return a(d, f);
      };
    };
  };

  a.runFn4 = function (a) {
    return function (d) {
      return function (f) {
        return function (h) {
          return function (b) {
            return a(d, f, h, b);
          };
        };
      };
    };
  };
})(PS["Data.Function.Uncurried"] = PS["Data.Function.Uncurried"] || {});

(function (a) {
  a["Data.Function.Uncurried"] = a["Data.Function.Uncurried"] || {};
  var d = a["Data.Function.Uncurried"];
  a = a["Data.Function.Uncurried"];
  d.runFn2 = a.runFn2;
  d.runFn4 = a.runFn4;
})(PS);

(function (a) {
  a["Data.Generic.Rep"] = a["Data.Generic.Rep"] || {};
  a = a["Data.Generic.Rep"];

  var d = function () {
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
  a.Inl = d;
  a.Inr = f;

  a.Constructor = function (a) {
    return a;
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Bounded"] = a["Data.Generic.Rep.Bounded"] || {};

  var d = a["Data.Generic.Rep.Bounded"],
      f = a["Data.Generic.Rep"],
      k = function k(a) {
    this["genericTop'"] = a;
  },
      h = function h(a) {
    this["genericBottom'"] = a;
  };

  a = new k(f.NoArguments.value);

  var b = function b(a) {
    return a["genericTop'"];
  },
      e = new h(f.NoArguments.value),
      c = function c(a) {
    return a["genericBottom'"];
  };

  d["genericBottom'"] = c;

  d.genericBottom = function (a) {
    return function (b) {
      return f.to(a)(c(b));
    };
  };

  d["genericTop'"] = b;

  d.genericTop = function (a) {
    return function (c) {
      return f.to(a)(b(c));
    };
  };

  d.genericBottomNoArguments = e;

  d.genericBottomSum = function (a) {
    return new h(new f.Inl(c(a)));
  };

  d.genericBottomConstructor = function (a) {
    return new h(c(a));
  };

  d.genericTopNoArguments = a;

  d.genericTopSum = function (a) {
    return new k(new f.Inr(b(a)));
  };

  d.genericTopConstructor = function (a) {
    return new k(b(a));
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Enum"] = a["Data.Generic.Rep.Enum"] || {};

  var d = a["Data.Generic.Rep.Enum"],
      f = a["Data.Boolean"],
      k = a["Data.Enum"],
      h = a["Data.Functor"],
      b = a["Data.Generic.Rep"],
      e = a["Data.Generic.Rep.Bounded"],
      c = a["Data.Maybe"],
      g = a["Data.Newtype"],
      l = function l(a, b) {
    this["genericPred'"] = a;
    this["genericSucc'"] = b;
  },
      m = function m(a, b, c) {
    this["genericCardinality'"] = a;
    this["genericFromEnum'"] = b;
    this["genericToEnum'"] = c;
  },
      u = function u(a) {
    return a["genericToEnum'"];
  },
      p = function p(a) {
    return a["genericSucc'"];
  },
      x = function x(a) {
    return a["genericPred'"];
  },
      v = function v(a) {
    return a["genericFromEnum'"];
  };

  a = new l(function (a) {
    return c.Nothing.value;
  }, function (a) {
    return c.Nothing.value;
  });

  var r = function r(a) {
    return a["genericCardinality'"];
  },
      y = new m(1, function (a) {
    return 0;
  }, function (a) {
    return 0 === a ? new c.Just(b.NoArguments.value) : c.Nothing.value;
  });

  d.genericPred = function (a) {
    return function (d) {
      var e = h.map(c.functorMaybe)(b.to(a)),
          f = x(d),
          g = b.from(a);
      return function (a) {
        return e(f(g(a)));
      };
    };
  };

  d.genericSucc = function (a) {
    return function (d) {
      var e = h.map(c.functorMaybe)(b.to(a)),
          f = p(d),
          g = b.from(a);
      return function (a) {
        return e(f(g(a)));
      };
    };
  };

  d.genericCardinality = function (a) {
    return function (a) {
      return g.unwrap(k.newtypeCardinality)(r(a));
    };
  };

  d.genericToEnum = function (a) {
    return function (d) {
      var e = h.map(c.functorMaybe)(b.to(a)),
          f = u(d);
      return function (a) {
        return e(f(a));
      };
    };
  };

  d.genericFromEnum = function (a) {
    return function (c) {
      var d = v(c),
          e = b.from(a);
      return function (a) {
        return d(e(a));
      };
    };
  };

  d.genericEnumNoArguments = a;

  d.genericEnumConstructor = function (a) {
    return new l(function (d) {
      return h.map(c.functorMaybe)(b.Constructor)(x(a)(d));
    }, function (d) {
      return h.map(c.functorMaybe)(b.Constructor)(p(a)(d));
    });
  };

  d.genericEnumSum = function (a) {
    return function (d) {
      return function (f) {
        return function (g) {
          return new l(function (g) {
            if (g instanceof b.Inl) return h.map(c.functorMaybe)(b.Inl.create)(x(a)(g.value0));

            if (g instanceof b.Inr) {
              g = x(f)(g.value0);
              if (g instanceof c.Nothing) return new c.Just(new b.Inl(e["genericTop'"](d)));
              if (g instanceof c.Just) return new c.Just(new b.Inr(g.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 30, column 14 - line 32, column 31): " + [g.constructor.name]);
            }

            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 28, column 18 - line 32, column 31): " + [g.constructor.name]);
          }, function (d) {
            if (d instanceof b.Inl) {
              d = p(a)(d.value0);
              if (d instanceof c.Nothing) return new c.Just(new b.Inr(e["genericBottom'"](g)));
              if (d instanceof c.Just) return new c.Just(new b.Inl(d.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 34, column 14 - line 36, column 31): " + [d.constructor.name]);
            }

            if (d instanceof b.Inr) return h.map(c.functorMaybe)(b.Inr.create)(p(f)(d.value0));
            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 33, column 18 - line 37, column 36): " + [d.constructor.name]);
          });
        };
      };
    };
  };

  d.genericBoundedEnumNoArguments = y;

  d.genericBoundedEnumConstructor = function (a) {
    return new m(g.unwrap(k.newtypeCardinality)(r(a)), function (b) {
      return v(a)(b);
    }, function (d) {
      return h.map(c.functorMaybe)(b.Constructor)(u(a)(d));
    });
  };

  d.genericBoundedEnumSum = function (a) {
    return function (d) {
      return new m(k.Cardinality(g.unwrap(k.newtypeCardinality)(r(a)) + g.unwrap(k.newtypeCardinality)(r(d)) | 0), function (c) {
        if (c instanceof b.Inl) return v(a)(c.value0);
        if (c instanceof b.Inr) return v(d)(c.value0) + g.unwrap(k.newtypeCardinality)(r(a)) | 0;
        throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 87, column 22 - line 89, column 80): " + [c.constructor.name]);
      }, function (e) {
        var g = r(a);
        if (0 <= e && e < g) e = h.map(c.functorMaybe)(b.Inl.create)(u(a)(e));else if (f.otherwise) e = h.map(c.functorMaybe)(b.Inr.create)(u(d)(e - g | 0));else throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 83, column 5 - line 83, column 43): " + [g.constructor.name]);
        return e;
      });
    };
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Eq"] = a["Data.Generic.Rep.Eq"] || {};

  var d = a["Data.Generic.Rep.Eq"],
      f = a["Data.Generic.Rep"],
      k = function k(a) {
    this["genericEq'"] = a;
  };

  a = new k(function (a) {
    return function (a) {
      return !0;
    };
  });

  d.genericEq = function (a) {
    return function (b) {
      return function (d) {
        return function (c) {
          return (0, b["genericEq'"])(f.from(a)(d))(f.from(a)(c));
        };
      };
    };
  };

  d.genericEqNoArguments = a;

  d.genericEqSum = function (a) {
    return function (b) {
      return new k(function (d) {
        return function (c) {
          return d instanceof f.Inl && c instanceof f.Inl ? (0, a["genericEq'"])(d.value0)(c.value0) : d instanceof f.Inr && c instanceof f.Inr ? (0, b["genericEq'"])(d.value0)(c.value0) : !1;
        };
      });
    };
  };

  d.genericEqConstructor = function (a) {
    return new k(function (b) {
      return function (d) {
        return (0, a["genericEq'"])(b)(d);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Ord"] = a["Data.Generic.Rep.Ord"] || {};

  var d = a["Data.Generic.Rep.Ord"],
      f = a["Data.Generic.Rep"],
      k = a["Data.Ordering"],
      h = function h(a) {
    this["genericCompare'"] = a;
  };

  a = new h(function (a) {
    return function (a) {
      return k.EQ.value;
    };
  });

  var b = function b(a) {
    return a["genericCompare'"];
  };

  d.genericCompare = function (a) {
    return function (c) {
      return function (d) {
        return function (e) {
          return b(c)(f.from(a)(d))(f.from(a)(e));
        };
      };
    };
  };

  d.genericOrdNoArguments = a;

  d.genericOrdSum = function (a) {
    return function (c) {
      return new h(function (d) {
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

  d.genericOrdConstructor = function (a) {
    return new h(function (c) {
      return function (d) {
        return b(a)(c)(d);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Show"] = a["Data.Generic.Rep.Show"] || {};

  var d = a["Data.Generic.Rep.Show"],
      f = a["Data.Foldable"],
      k = a["Data.Generic.Rep"],
      h = a["Data.Monoid"],
      b = a["Data.Semigroup"],
      e = a["Data.Show"],
      c = a["Data.Symbol"],
      g = function g(a) {
    this.genericShowArgs = a;
  },
      l = function l(a) {
    this["genericShow'"] = a;
  };

  a = new g(function (a) {
    return [];
  });

  d.genericShow = function (a) {
    return function (b) {
      return function (c) {
        return (0, b["genericShow'"])(k.from(a)(c));
      };
    };
  };

  d.genericShowArgsNoArguments = a;

  d.genericShowSum = function (a) {
    return function (b) {
      return new l(function (c) {
        if (c instanceof k.Inl) return (0, a["genericShow'"])(c.value0);
        if (c instanceof k.Inr) return (0, b["genericShow'"])(c.value0);
        throw Error("Failed pattern match at Data.Generic.Rep.Show (line 26, column 1 - line 28, column 40): " + [c.constructor.name]);
      });
    };
  };

  d.genericShowConstructor = function (a) {
    return function (d) {
      return new l(function (e) {
        var g = c.reflectSymbol(d)(c.SProxy.value);
        e = (0, a.genericShowArgs)(e);
        return 0 === e.length ? g : "(" + (f.intercalate(f.foldableArray)(h.monoidString)(" ")(b.append(b.semigroupArray)([g])(e)) + ")");
      });
    };
  };

  d.genericShowArgsArgument = function (a) {
    return new g(function (b) {
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
  var d = a["Data.Profunctor"],
      f = a["Control.Category"];

  a = function a(_a13) {
    this.dimap = _a13;
  };

  var k = new a(function (a) {
    return function (b) {
      return function (d) {
        return function (c) {
          return b(d(a(c)));
        };
      };
    };
  });

  d.dimap = function (a) {
    return a.dimap;
  };

  d.Profunctor = a;

  d.rmap = function (a) {
    return function (b) {
      return (0, a.dimap)(f.identity(f.categoryFn))(b);
    };
  };

  d.profunctorFn = k;
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

  var d = a["Data.Profunctor.Strong"],
      f = a["Control.Category"],
      k = a["Control.Semigroupoid"],
      h = a["Data.Profunctor"],
      b = a["Data.Tuple"],
      e = function e(a, b, c) {
    this.Profunctor0 = a;
    this.first = b;
    this.second = c;
  };

  a = new e(function () {
    return h.profunctorFn;
  }, function (a) {
    return function (c) {
      return new b.Tuple(a(c.value0), c.value1);
    };
  }, a["Data.Functor"].map(b.functorTuple));

  var c = function c(a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return k.composeFlipped(a.Semigroupoid0())((0, b.first)(c))((0, b.second)(d));
        };
      };
    };
  };

  d.first = function (a) {
    return a.first;
  };

  d.second = function (a) {
    return a.second;
  };

  d.Strong = e;

  d.fanout = function (a) {
    return function (d) {
      return function (e) {
        return function (g) {
          var l = h.dimap(d.Profunctor0())(f.identity(f.categoryFn))(function (a) {
            return new b.Tuple(a, a);
          })(f.identity(a));
          return k.composeFlipped(a.Semigroupoid0())(l)(c(a)(d)(e)(g));
        };
      };
    };
  };

  d.strongFn = a;
})(PS);

(function (a) {
  a["Data.Lens.Internal.Forget"] = a["Data.Lens.Internal.Forget"] || {};

  var d = a["Data.Lens.Internal.Forget"],
      f = a["Data.Const"],
      k = a["Data.Either"],
      h = a["Data.Functor"],
      b = a["Data.Lens.Internal.Wander"],
      e = a["Data.Monoid"],
      c = a["Data.Newtype"],
      g = a["Data.Profunctor.Choice"],
      l = a["Data.Profunctor.Strong"],
      m = a["Data.Tuple"],
      u = function u(a) {
    return a;
  },
      p = new a["Data.Profunctor"].Profunctor(function (a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return b(a(c));
        };
      };
    };
  }),
      x = new l.Strong(function () {
    return p;
  }, function (a) {
    return function (b) {
      return a(m.fst(b));
    };
  }, function (a) {
    return function (b) {
      return a(m.snd(b));
    };
  });

  a = new c.Newtype(function (a) {
    return a;
  }, u);

  var v = function v(a) {
    return new g.Choice(function () {
      return p;
    }, function (b) {
      return k.either(b)(e.mempty(e.monoidFn(a)));
    }, function (b) {
      return k.either(e.mempty(e.monoidFn(a)))(b);
    });
  };

  d.Forget = u;
  d.newtypeForget = a;
  d.strongForget = x;

  d.wanderForget = function (a) {
    return new b.Wander(function () {
      return v(a);
    }, function () {
      return x;
    }, function (b) {
      return function (d) {
        return c.alaF(h.functorFn)(h.functorFn)(f.newtypeConst)(f.newtypeConst)(f.Const)(b(f.applicativeConst(a)))(d);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Maybe.First"] = a["Data.Maybe.First"] || {};

  var d = a["Data.Maybe.First"],
      f = a["Data.Maybe"],
      k = a["Data.Monoid"],
      h = a["Data.Newtype"],
      b = function b(a) {
    return a;
  },
      e = new a["Data.Semigroup"].Semigroup(function (a) {
    return function (b) {
      return a instanceof f.Just ? a : b;
    };
  });

  a = new h.Newtype(function (a) {
    return a;
  }, b);
  k = new k.Monoid(function () {
    return e;
  }, f.Nothing.value);
  d.First = b;
  d.newtypeFirst = a;
  d.monoidFirst = k;
})(PS);

(function (a) {
  a["Data.Lens.Fold"] = a["Data.Lens.Fold"] || {};
  var d = a["Data.Lens.Fold"],
      f = a["Data.Lens.Internal.Forget"],
      k = a["Data.Maybe"],
      h = a["Data.Maybe.First"],
      b = a["Data.Newtype"],
      e = b.under(f.newtypeForget)(f.newtypeForget)(f.Forget);

  d.preview = function (a) {
    var c = b.unwrap(h.newtypeFirst),
        d = e(a)(function (a) {
      return h.First(k.Just.create(a));
    });
    return function (a) {
      return c(d(a));
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Getter"] = a["Data.Lens.Getter"] || {};
  var d = a["Control.Category"],
      f = a["Data.Lens.Internal.Forget"],
      k = a["Data.Newtype"];

  a["Data.Lens.Getter"].view = function (a) {
    return k.unwrap(f.newtypeForget)(a(d.identity(d.categoryFn)));
  };
})(PS);

(function (a) {
  a["Data.Lens.Iso"] = a["Data.Lens.Iso"] || {};
  var d = a["Data.Profunctor"];

  a["Data.Lens.Iso"].iso = function (a) {
    return function (f) {
      return function (h) {
        return function (b) {
          return d.dimap(h)(a)(f)(b);
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Iso.Newtype"] = a["Data.Lens.Iso.Newtype"] || {};
  var d = a["Data.Lens.Iso"],
      f = a["Data.Newtype"];

  a["Data.Lens.Iso.Newtype"]._Newtype = function (a) {
    return function (h) {
      return function (b) {
        return d.iso(f.unwrap(a))(f.wrap(h))(b);
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Lens"] = a["Data.Lens.Lens"] || {};

  var d = a["Data.Profunctor"],
      f = a["Data.Profunctor.Strong"],
      k = a["Data.Tuple"],
      h = function h(a) {
    return function (b) {
      return function (c) {
        return d.dimap(b.Profunctor0())(a)(function (a) {
          return a.value1(a.value0);
        })(f.first(b)(c));
      };
    };
  };

  a["Data.Lens.Lens"].lens = function (a) {
    return function (b) {
      return function (c) {
        return h(function (c) {
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

  var d = a["Control.Category"],
      f = a["Data.Either"],
      k = a["Data.Maybe"],
      h = a["Data.Profunctor"],
      b = a["Data.Profunctor.Choice"],
      e = function e(a) {
    return function (c) {
      return function (e) {
        return function (g) {
          return h.dimap(e.Profunctor0())(c)(f.either(d.identity(d.categoryFn))(d.identity(d.categoryFn)))(b.right(e)(h.rmap(e.Profunctor0())(a)(g)));
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
  var d = a.Record,
      f = a["Data.Symbol"],
      k = a["Record.Unsafe"];

  d.get = function (a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return k.unsafeGet(f.reflectSymbol(a)(b))(c);
        };
      };
    };
  };

  d.set = function (a) {
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

  d.insert = function (a) {
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
  var d = a["Data.Function"],
      f = a["Data.Lens.Lens"],
      k = a.Record;

  a["Data.Lens.Record"].prop = function (a) {
    return function (b) {
      return function (b) {
        return function (b) {
          return function (c) {
            return f.lens(k.get(a)()(b))(d.flip(k.set(a)()()(b)))(c);
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Data.String.NonEmpty.Internal"] = a["Data.String.NonEmpty.Internal"] || {};
  var d = a["Data.String.NonEmpty.Internal"],
      f = a["Data.Maybe"],
      k = a["Data.Show"];
  a = new k.Show(function (a) {
    return "(NonEmptyString.unsafeFromString " + (k.show(k.showString)(a) + ")");
  });

  d.fromString = function (a) {
    return "" === a ? f.Nothing.value : new f.Just(a);
  };

  d.toString = function (a) {
    return a;
  };

  d.showNonEmptyString = a;
})(PS);

(function (a) {
  a.endsWith = function (a) {
    return function (d) {
      return d.endsWith(a);
    };
  };

  a.fromCharArray = function (a) {
    return a.join("");
  };
})(PS["Data.String.Utils"] = PS["Data.String.Utils"] || {});

(function (a) {
  a["Data.String.Utils"] = a["Data.String.Utils"] || {};
  var d = a["Data.String.Utils"];
  a = a["Data.String.Utils"];
  d.endsWith = a.endsWith;
  d.fromCharArray = a.fromCharArray;
})(PS);

(function (a) {
  a["Data.Variant"] = a["Data.Variant"] || {};
  var d = a["Data.Symbol"];

  a["Data.Variant"].inj = function (a) {
    return function (a) {
      return function (f) {
        return function (b) {
          return {
            type: d.reflectSymbol(a)(f),
            value: b
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Effect.Class.Console"] = a["Effect.Class.Console"] || {};
  var d = a["Effect.Class"],
      f = a["Effect.Console"];

  a["Effect.Class.Console"].logShow = function (a) {
    return function (h) {
      var b = d.liftEffect(a),
          e = f.logShow(h);
      return function (a) {
        return b(e(a));
      };
    };
  };
})(PS);

(function (a) {
  function d(a) {
    return function (d) {
      var f = [],
          b;

      for (b in d) {
        hasOwnProperty.call(d, b) && f.push(a(b)(d[b]));
      }

      return f;
    };
  }

  a._copyST = function (a) {
    return function () {
      var d = {},
          f;

      for (f in a) {
        hasOwnProperty.call(a, f) && (d[f] = a[f]);
      }

      return d;
    };
  };

  a.empty = {};

  a.runST = function (a) {
    return a();
  };

  a._lookup = function (a, d, h, b) {
    return h in b ? d(b[h]) : a;
  };

  a._lookupST = function (a, d, h, b) {
    return function () {
      return h in b ? d(b[h]) : a;
    };
  };

  a.keys = Object.keys || d(function (a) {
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
    return function (d) {
      return function (f) {
        return function () {
          f[a] = d;
          return f;
        };
      };
    };
  };

  a["delete"] = function (a) {
    return function (d) {
      return function () {
        delete d[a];
        return d;
      };
    };
  };
})(PS["Foreign.Object.ST"] = PS["Foreign.Object.ST"] || {});

(function (a) {
  a["Foreign.Object.ST"] = a["Foreign.Object.ST"] || {};
  var d = a["Foreign.Object.ST"];
  a = a["Foreign.Object.ST"];
  d["new"] = a["new"];
  d.poke = a.poke;
  d["delete"] = a["delete"];
})(PS);

(function (a) {
  a["Foreign.Object"] = a["Foreign.Object"] || {};

  var d = a["Foreign.Object"],
      f = a["Foreign.Object"],
      k = a["Control.Monad.ST.Internal"],
      h = a["Data.Foldable"],
      b = a["Data.Maybe"],
      e = a["Foreign.Object.ST"],
      c = f._copyST,
      g = function g(a) {
    return function (b) {
      return f.runST(function () {
        var d = c(b)();
        a(d)();
        return d;
      });
    };
  },
      l = a["Data.Function.Uncurried"].runFn4(f._lookup)(b.Nothing.value)(b.Just.create),
      m = function m(a) {
    return function (b) {
      return g(e.poke(a)(b));
    };
  };

  d.lookup = l;

  d.fromFoldableWith = function (a) {
    return function (b) {
      return function (c) {
        return f.runST(function () {
          var d = e["new"]();
          h.for_(k.applicativeST)(a)(c)(function (a) {
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

  d.alter = function (a) {
    return function (c) {
      return function (d) {
        var f = a(l(c)(d));
        if (f instanceof b.Nothing) return g(e["delete"](c))(d);
        if (f instanceof b.Just) return m(c)(f.value0)(d);
        throw Error("Failed pattern match at Foreign.Object (line 206, column 15 - line 208, column 25): " + [f.constructor.name]);
      };
    };
  };

  d.empty = f.empty;
  d.keys = f.keys;
})(PS);

(function (a) {
  a["Formless.Data.FormFieldResult"] = a["Formless.Data.FormFieldResult"] || {};
  var d = a["Formless.Data.FormFieldResult"],
      f = a["Data.Either"],
      k = a["Data.Lens.Prism"],
      h = a["Data.Maybe"];

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

  d.NotValidated = a;
  d.Error = b;

  d.fromEither = function (a) {
    if (a instanceof f.Left) return new b(a.value0);
    if (a instanceof f.Right) return new e(a.value0);
    throw Error("Failed pattern match at Formless.Data.FormFieldResult (line 44, column 14 - line 46, column 23): " + [a.constructor.name]);
  };

  d.toMaybe = function (a) {
    return a instanceof e ? new h.Just(a.value0) : h.Nothing.value;
  };

  d._Error = function (a) {
    return k["prism'"](b.create)(function (a) {
      return a instanceof b ? new h.Just(a.value0) : h.Nothing.value;
    })(a);
  };
})(PS);

(function (a) {
  a["Formless.Types.Form"] = a["Formless.Types.Form"] || {};
  var d = a["Formless.Types.Form"],
      f = a["Data.Newtype"];

  a = function a(_a14) {
    return _a14;
  };

  var k = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      h = function h(a) {
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
      c = new f.Newtype(function (a) {
    return a;
  }, function (a) {
    return a;
  });

  f = new f.Newtype(function (a) {
    return a;
  }, h);
  d.FormProxy = k;
  d.OutputField = a;
  d.FormField = h;
  d.newtypeInputField = c;

  d.eqInputField = function (a) {
    return a;
  };

  d.newtypeOutputField = b;
  d.newtypeInputFunction = e;
  d.newtypeFormField = f;
})(PS);

(function (a) {
  a["Formless.Validation"] = a["Formless.Validation"] || {};
  var d = a["Formless.Validation"],
      f = a["Control.Applicative"],
      k = a["Data.Either"],
      h = a["Data.Function"],
      b = a["Data.Newtype"],
      e = new b.Newtype(function (a) {
    return a;
  }, function (a) {
    return a;
  });

  d.runValidation = function (a) {
    return b.unwrap(e);
  };

  d.hoistFn_ = function (a) {
    return function (b) {
      return h["const"](function () {
        var c = f.pure(a.Applicative0()),
            d = f.pure(k.applicativeEither);
        return function (a) {
          return c(d(b(a)));
        };
      }());
    };
  };

  d.hoistFnE = function (a) {
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

  d.hoistFnE_ = function (a) {
    return function (b) {
      return h["const"](function () {
        var c = f.pure(a.Applicative0());
        return function (a) {
          return c(b(a));
        };
      }());
    };
  };

  d.newtypeValidation = e;
})(PS);

(function (a) {
  a.copyRecord = function (a) {
    var d = {},
        k;

    for (k in a) {
      ({}).hasOwnProperty.call(a, k) && (d[k] = a[k]);
    }

    return d;
  };

  a.unsafeInsert = function (a) {
    return function (d) {
      return function (f) {
        f[a] = d;
        return f;
      };
    };
  };

  a.unsafeModify = function (a) {
    return function (d) {
      return function (f) {
        f[a] = d(f[a]);
        return f;
      };
    };
  };
})(PS["Record.Builder"] = PS["Record.Builder"] || {});

(function (a) {
  a["Record.Builder"] = a["Record.Builder"] || {};
  var d = a["Record.Builder"],
      f = a["Record.Builder"],
      k = a["Data.Symbol"],
      h = a["Control.Semigroupoid"].semigroupoidFn;
  a = a["Control.Category"].categoryFn;

  d.build = function (a) {
    return function (b) {
      return a(f.copyRecord(b));
    };
  };

  d.insert = function (a) {
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

  d.modify = function (a) {
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

  d.semigroupoidBuilder = h;
  d.categoryBuilder = a;
})(PS);

(function (a) {
  a["Formless.Internal.Transform"] = a["Formless.Internal.Transform"] || {};

  var d = a["Formless.Internal.Transform"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Category"],
      e = a["Control.Semigroupoid"],
      c = a["Data.Functor"],
      g = a["Data.Maybe"],
      l = a["Data.Newtype"],
      m = a["Data.Symbol"],
      u = a["Data.Tuple"],
      p = a["Formless.Data.FormFieldResult"],
      x = a["Formless.Types.Form"],
      v = a["Formless.Validation"],
      r = a.Record,
      y = a["Record.Builder"],
      C = a["Record.Unsafe"],
      t = a["Type.Data.RowList"],
      A = function A(a) {
    this.validateAllBuilder = a;
  },
      q = function q(a) {
    this.setFormFieldsTouchedBuilder = a;
  },
      H = function H(a) {
    this.replaceFormFieldInputsBuilder = a;
  },
      n = function n(a) {
    this.modifyAllBuilder = a;
  },
      J = function J(a) {
    this.inputFieldsToFormFieldsBuilder = a;
  },
      F = function F(a) {
    this.formFieldsToInputFieldsBuilder = a;
  },
      z = function z(a) {
    this.formFieldsToMaybeOutputBuilder = a;
  },
      D = function D(a) {
    this.countErrorsImpl = a;
  },
      I = function I(a) {
    this.allTouchedImpl = a;
  };

  a = new q(function (a) {
    return function (a) {
      return b.identity(y.categoryBuilder);
    };
  });
  var G = new H(function (a) {
    return function (a) {
      return function (a) {
        return b.identity(y.categoryBuilder);
      };
    };
  }),
      B = new D(function (a) {
    return function (a) {
      return 0;
    };
  }),
      K = new I(function (a) {
    return function (a) {
      return !0;
    };
  }),
      w = new n(function (a) {
    return function (a) {
      return function (a) {
        return b.identity(y.categoryBuilder);
      };
    };
  }),
      E = new F(function (a) {
    return function (a) {
      return b.identity(y.categoryBuilder);
    };
  }),
      P = new J(function (a) {
    return function (a) {
      return b.identity(y.categoryBuilder);
    };
  }),
      N = c.flap(c.functorFn)(y.build)({}),
      O = new z(function (a) {
    return function (a) {
      return new g.Just(b.identity(y.categoryBuilder));
    };
  });
  d.fromScratch = N;

  d.allTouched = function (a) {
    return function (a) {
      return function (b) {
        var c = (0, a.allTouchedImpl)(t.RLProxy.value),
            d = l.unwrap(b);
        return function (a) {
          return c(d(a));
        };
      };
    };
  };

  d.countErrors = function (a) {
    return function (a) {
      return function (b) {
        var c = (0, a.countErrorsImpl)(t.RLProxy.value),
            d = l.unwrap(b);
        return function (a) {
          return c(d(a));
        };
      };
    };
  };

  d.setFormFieldsTouched = function (a) {
    return function (a) {
      return function (b) {
        return function (c) {
          c = (0, a.setFormFieldsTouchedBuilder)(t.RLProxy.value)(l.unwrap(b)(c));
          return l.wrap(b)(N(c));
        };
      };
    };
  };

  d.formFieldsToInputFields = function (a) {
    return function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            d = (0, a.formFieldsToInputFieldsBuilder)(t.RLProxy.value)(l.unwrap(c)(d));
            return l.wrap(b)(N(d));
          };
        };
      };
    };
  };

  d.inputFieldsToFormFields = function (a) {
    return function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            d = (0, a.inputFieldsToFormFieldsBuilder)(t.RLProxy.value)(l.unwrap(b)(d));
            return l.wrap(c)(N(d));
          };
        };
      };
    };
  };

  d.formFieldsToMaybeOutputFields = function (a) {
    return function (a) {
      return function (b) {
        return function (d) {
          return function (e) {
            e = (0, d.formFieldsToMaybeOutputBuilder)(t.RLProxy.value)(l.unwrap(a)(e));
            return c.map(g.functorMaybe)(l.wrap(b))(c.map(g.functorMaybe)(N)(e));
          };
        };
      };
    };
  };

  d.replaceFormFieldInputs = function (a) {
    return function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return function (e) {
              e = (0, a.replaceFormFieldInputsBuilder)(l.unwrap(b)(d))(t.RLProxy.value)(l.unwrap(c)(e));
              return l.wrap(c)(N(e));
            };
          };
        };
      };
    };
  };

  d.modifyAll = function (a) {
    return function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return function (e) {
              e = (0, a.modifyAllBuilder)(l.unwrap(b)(d))(t.RLProxy.value)(l.unwrap(c)(e));
              return l.wrap(c)(N(e));
            };
          };
        };
      };
    };
  };

  d.validateAll = function (a) {
    return function (a) {
      return function (b) {
        return function (d) {
          return function (e) {
            return function (f) {
              return function (g) {
                g = (0, b.validateAllBuilder)(l.unwrap(d)(f))(t.RLProxy.value)(l.unwrap(e)(g));
                return c.map(a.Bind1().Apply0().Functor0())(l.wrap(e))(c.map(a.Bind1().Apply0().Functor0())(N)(g));
              };
            };
          };
        };
      };
    };
  };

  d.unsafeModifyInputVariant = function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            var f = function () {
              var b = l.unwrap(a)(d);
              return new u.Tuple(b.type, b.value);
            }(),
                g = function () {
              var a = C.unsafeGet(u.fst(f))(l.unwrap(b)(e));
              return x.FormField({
                input: l.unwrap(x.newtypeInputFunction)(u.snd(f))(a.input),
                touched: a.touched,
                result: c(a.result)
              });
            }();

            return l.wrap(b)(C.unsafeSet(u.fst(f))(g)(l.unwrap(b)(e)));
          };
        };
      };
    };
  };

  d.unsafeRunValidationVariant = function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return function (g) {
              return function (k) {
                var m = l.unwrap(b)(e).type;
                return function () {
                  var b = C.unsafeGet(m)(l.unwrap(c)(k));
                  return h.bind(a.Bind1())(v.runValidation(a)(C.unsafeGet(m)(l.unwrap(d)(g)))(k)(b.input))(function (d) {
                    d = C.unsafeSet(m)(x.FormField({
                      input: b.input,
                      touched: b.touched,
                      result: p.fromEither(d)
                    }))(l.unwrap(c)(k));
                    return f.pure(a.Applicative0())(l.wrap(c)(d));
                  });
                }();
              };
            };
          };
        };
      };
    };
  };

  d.setFormFieldsTouchedNil = a;

  d.setFormFieldsTouchedCons = function (a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return new q(function (c) {
            return function (c) {
              var d = (0, b.setFormFieldsTouchedBuilder)(t.RLProxy.value)(c);
              c = l.over(x.newtypeFormField)(x.newtypeFormField)(x.FormField)(function (a) {
                return {
                  touched: !0,
                  input: a.input,
                  result: a.result
                };
              })(r.get(a)()(m.SProxy.value)(c));
              c = y.insert()()(a)(m.SProxy.value)(c);
              return e.compose(y.semigroupoidBuilder)(c)(d);
            };
          });
        };
      };
    };
  };

  d.inputFieldsToInputNil = E;

  d.inputFieldsToInputCons = function (a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return new F(function (c) {
            return function (c) {
              var d = (0, b.formFieldsToInputFieldsBuilder)(t.RLProxy.value)(c);
              c = r.get(a)()(m.SProxy.value)(c).input;
              c = y.insert()()(a)(m.SProxy.value)(c);
              return e.compose(y.semigroupoidBuilder)(c)(d);
            };
          });
        };
      };
    };
  };

  d.inputFieldsToFormFieldsNil = P;

  d.inputFieldsToFormFieldsCons = function (a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return new J(function (c) {
            return function (c) {
              var d = (0, b.inputFieldsToFormFieldsBuilder)(t.RLProxy.value)(c);
              c = {
                input: r.get(a)()(m.SProxy.value)(c),
                touched: !1,
                result: p.NotValidated.value
              };
              c = y.insert()()(a)(m.SProxy.value)(c);
              return e.compose(y.semigroupoidBuilder)(c)(d);
            };
          });
        };
      };
    };
  };

  d.formFieldsToMaybeOutputNil = O;

  d.formFieldsToMaybeOutputCons = function (a) {
    return function (b) {
      return function (b) {
        return function (d) {
          return new z(function (d) {
            return function (d) {
              var f = (0, b.formFieldsToMaybeOutputBuilder)(t.RLProxy.value)(d);
              d = c.map(g.functorMaybe)(x.OutputField)(p.toMaybe(l.unwrap(x.newtypeFormField)(r.get(a)()(m.SProxy.value)(d)).result));
              return k.apply(g.applyMaybe)(c.map(g.functorMaybe)(function (b) {
                return function (c) {
                  return e.compose(y.semigroupoidBuilder)(y.insert()()(a)(m.SProxy.value)(b))(c);
                };
              })(d))(f);
            };
          });
        };
      };
    };
  };

  d.nilCountErrors = B;

  d.consCountErrors = function (a) {
    return function (b) {
      return function (b) {
        return new D(function (c) {
          return function (c) {
            var d = l.unwrap(x.newtypeFormField)(r.get(a)()(m.SProxy.value)(c)).result instanceof p.Error ? 1 : 0;
            return d + (0, b.countErrorsImpl)(t.RLProxy.value)(c) | 0;
          };
        });
      };
    };
  };

  d.nilAllTouched = K;

  d.consAllTouched = function (a) {
    return function (b) {
      return function (b) {
        return new I(function (c) {
          return function (c) {
            return l.unwrap(x.newtypeFormField)(r.get(a)()(m.SProxy.value)(c)).touched ? (0, b.allTouchedImpl)(t.RLProxy.value)(c) : !1;
          };
        });
      };
    };
  };

  d.applyToValidationNil = function (a) {
    return new A(function (c) {
      return function (c) {
        return function (c) {
          return f.pure(a.Applicative0())(b.identity(y.categoryBuilder));
        };
      };
    });
  };

  d.applyToValidationCons = function (a) {
    return function (b) {
      return function (d) {
        return function (d) {
          return function (g) {
            return function (g) {
              return function (g) {
                return new A(function (n) {
                  return function (q) {
                    return function (q) {
                      var u = (0, g.validateAllBuilder)(n)(t.RLProxy.value)(q),
                          w = function () {
                        var c = l.unwrap(v.newtypeValidation)(r.get(a)()(m.SProxy.value)(n)),
                            e = l.unwrap(x.newtypeFormField)(r.get(a)()(m.SProxy.value)(q));
                        return h.bind(b.Bind1())(c(l.wrap(d)(q))(e.input))(function (a) {
                          var c = f.pure(b.Applicative0()),
                              d = l.wrap(x.newtypeFormField),
                              g = {},
                              h;

                          for (h in e) {
                            ({}).hasOwnProperty.call(e, h) && (g[h] = e[h]);
                          }

                          g.result = p.fromEither(a);
                          return c(d(g));
                        });
                      }();

                      return k.apply(b.Bind1().Apply0())(c.map(b.Bind1().Apply0().Functor0())(function (b) {
                        return function (c) {
                          return e.compose(y.semigroupoidBuilder)(y.insert()()(a)(m.SProxy.value)(b))(c);
                        };
                      })(w))(u);
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

  d.modifyAllNil = w;

  d.modifyAllCons = function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (d) {
            return function (d) {
              return function (d) {
                return new n(function (f) {
                  return function (g) {
                    return function (g) {
                      var h = (0, d.modifyAllBuilder)(f)(t.RLProxy.value)(g),
                          k = l.unwrap(b)(r.get(a)()(m.SProxy.value)(f));
                      g = r.get(a)()(m.SProxy.value)(g);
                      g = y.insert()()(a)(m.SProxy.value)(l.over(c)(c)(x.FormField)(function (a) {
                        return {
                          input: k(a.input),
                          result: a.result,
                          touched: a.touched
                        };
                      })(g));
                      return e.compose(y.semigroupoidBuilder)(g)(h);
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

  d.replaceFormFieldInputsTouchedNil = G;

  d.replaceFormFieldInputsTouchedCons = function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (d) {
            return function (d) {
              return function (d) {
                return new H(function (f) {
                  return function (g) {
                    return function (g) {
                      var h = (0, d.replaceFormFieldInputsBuilder)(f)(t.RLProxy.value)(g);
                      l.unwrap(c)(r.get(a)()(m.SProxy.value)(g));
                      g = r.get(a)()(m.SProxy.value)(f);
                      g = y.insert()()(a)(m.SProxy.value)(x.FormField({
                        input: l.unwrap(b)(g),
                        touched: !1,
                        result: p.NotValidated.value
                      }));
                      return e.compose(y.semigroupoidBuilder)(g)(h);
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

  var d = a["Formless.Types.Query"],
      f = a["Data.Eq"],
      k = a["Data.Newtype"],
      h = function () {
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

  var c = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      g = function () {
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
      l = function () {
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
      u = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      p = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      x = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      v = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      r = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      y = function () {
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
      C = function C(a) {
    return a;
  };

  k = new k.Newtype(function (a) {
    return a;
  }, C);
  f = new f.Eq(function (a) {
    return function (c) {
      return a instanceof h && c instanceof h || a instanceof b && c instanceof b || a instanceof e && c instanceof e ? !0 : !1;
    };
  });
  d.Modify = a;
  d.Validate = c;
  d.ModifyValidate = g;
  d.Reset = l;
  d.SetAll = m;
  d.ModifyAll = u;
  d.ResetAll = p;
  d.ValidateAll = x;
  d.Submit = v;
  d.LoadForm = r;
  d.AndThen = y;
  d.InternalState = C;
  d.Invalid = h;
  d.Incomplete = b;
  d.Valid = e;
  d.newtypeInternalState = k;
  d.eqValidStatus = f;
})(PS);

(function (a) {
  a["Formless.Component"] = a["Formless.Component"] || {};

  var d = a["Control.Applicative"],
      f = a["Control.Bind"],
      k = a["Control.Category"],
      h = a["Data.Either"],
      b = a["Data.Eq"],
      e = a["Data.Maybe"],
      c = a["Data.Newtype"],
      g = a["Formless.Internal.Transform"],
      l = a["Formless.Types.Query"],
      m = function m(a) {
    return function (a) {
      return function (a) {
        return function (p) {
          return function (r) {
            return function (u) {
              return function (v) {
                return function (t) {
                  return function (A) {
                    return function (q) {
                      return function (y) {
                        return function (n) {
                          return function (x) {
                            return function (F) {
                              return function (z) {
                                return function (D) {
                                  return function (C) {
                                    return function (G) {
                                      return function (I) {
                                        return function (H) {
                                          return function (w) {
                                            return function (E) {
                                              return function (B) {
                                                var J = function J(e) {
                                                  var f = g.countErrors()(u)(z)(e.form),
                                                      k = !b.eq(b.eqRec()(a))(c.unwrap(x)(g.formFieldsToInputFields()(r)(x)(z)(e.form)))(c.unwrap(x)(c.unwrap(l.newtypeInternalState)(e.internal).initialInputs));
                                                  return d.pure(w.Applicative0())(h.Left.create(function () {
                                                    return c.unwrap(l.newtypeInternalState)(e.internal).allTouched ? {
                                                      validity: 0 !== e.errors ? l.Invalid.value : l.Valid.value,
                                                      errors: f,
                                                      dirty: k,
                                                      form: e.form,
                                                      internal: e.internal,
                                                      submitAttempts: e.submitAttempts,
                                                      submitting: e.submitting
                                                    } : g.allTouched()(v)(z)(e.form) ? {
                                                      validity: 0 !== e.errors ? l.Invalid.value : l.Valid.value,
                                                      internal: c.over(l.newtypeInternalState)(l.newtypeInternalState)(l.InternalState)(function (a) {
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
                                                      validity: l.Incomplete.value,
                                                      errors: f,
                                                      dirty: k,
                                                      form: e.form,
                                                      internal: e.internal,
                                                      submitAttempts: e.submitAttempts,
                                                      submitting: e.submitting
                                                    };
                                                  }()));
                                                },
                                                    K = function K(k) {
                                                  var B = {
                                                    submitAttempts: k.submitAttempts + 1 | 0,
                                                    submitting: !0,
                                                    internal: k.internal,
                                                    form: k.form,
                                                    dirty: k.dirty,
                                                    errors: k.errors,
                                                    validity: k.validity
                                                  },
                                                      E = c.unwrap(l.newtypeInternalState)(B.internal);

                                                  k = function () {
                                                    return E.allTouched ? B : {
                                                      form: g.setFormFieldsTouched()(t)(z)(B.form),
                                                      internal: c.over(l.newtypeInternalState)(l.newtypeInternalState)(l.InternalState)(function (a) {
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

                                                  return f.bind(w.Bind1())(m()()(a)(p)(r)(u)(v)(t)(A)(q)(y)(n)(x)(F)(z)(D)(C)(G)(I)(H)(w)(l.ValidateAll.value)(k))(function (a) {
                                                    if (a instanceof h.Right) return d.pure(w.Applicative0())(new h.Right(a.value0));

                                                    if (a instanceof h.Left) {
                                                      var c = {
                                                        submitting: !1,
                                                        dirty: a.value0.dirty,
                                                        errors: a.value0.errors,
                                                        form: a.value0.form,
                                                        internal: a.value0.internal,
                                                        submitAttempts: a.value0.submitAttempts,
                                                        validity: a.value0.validity
                                                      };
                                                      return d.pure(w.Applicative0())(function () {
                                                        if (b.eq(l.eqValidStatus)(c.validity)(l.Valid.value)) {
                                                          var d = g.formFieldsToMaybeOutputFields()(z)(D)(n)(a.value0.form);
                                                          if (d instanceof e.Nothing) return new h.Left(c);
                                                          if (d instanceof e.Just) return new h.Right(d.value0);
                                                          throw Error("Failed pattern match at Formless.Component (line 201, column 16 - line 203, column 36): " + [d.constructor.name]);
                                                        }

                                                        return new h.Left(c);
                                                      }());
                                                    }

                                                    throw Error("Failed pattern match at Formless.Component (line 192, column 5 - line 204, column 31): " + [a.constructor.name]);
                                                  });
                                                };

                                                if (E instanceof l.Modify) return J({
                                                  form: g.unsafeModifyInputVariant(I)(z)(k.identity(k.categoryFn))(E.value0)(B.form),
                                                  internal: B.internal,
                                                  errors: B.errors,
                                                  dirty: B.dirty,
                                                  validity: B.validity,
                                                  submitAttempts: B.submitAttempts,
                                                  submitting: B.submitting
                                                });
                                                if (E instanceof l.Validate) return f.bind(w.Bind1())(g.unsafeRunValidationVariant(w)(H)(z)(C)(E.value0)(c.unwrap(l.newtypeInternalState)(B.internal).validators)(B.form))(function (a) {
                                                  return J({
                                                    form: a,
                                                    internal: B.internal,
                                                    errors: B.errors,
                                                    dirty: B.dirty,
                                                    validity: B.validity,
                                                    submitAttempts: B.submitAttempts,
                                                    submitting: B.submitting
                                                  });
                                                });

                                                if (E instanceof l.ModifyValidate) {
                                                  K = function K(a) {
                                                    var b = c.unwrap(l.newtypeInternalState)(a.internal).validators;
                                                    return f.bind(w.Bind1())(g.unsafeRunValidationVariant(w)(H)(z)(C)(E.value1)(b)(a.form))(function (b) {
                                                      return d.pure(w.Applicative0())({
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

                                                  var L = function L(a) {
                                                    return function (b) {
                                                      return {
                                                        validity: b.validity,
                                                        dirty: b.dirty,
                                                        submitting: b.submitting,
                                                        errors: b.errors,
                                                        submitAttempts: b.submitAttempts,
                                                        form: g.unsafeModifyInputVariant(I)(z)(a)(E.value1)(b.form),
                                                        internal: b.internal
                                                      };
                                                    };
                                                  };

                                                  if (E.value0 instanceof e.Nothing || E.value0 instanceof e.Just) return L = L(k.identity(k.categoryFn))(B), f.bind(w.Bind1())(K(L))(function (a) {
                                                    return J(a);
                                                  });
                                                  throw Error("Failed pattern match at Formless.Component (line 67, column 5 - line 81, column 26): " + [E.value0.constructor.name]);
                                                }

                                                if (E instanceof l.Reset) return J({
                                                  form: g.unsafeModifyInputVariant(I)(z)(k.identity(k.categoryFn))(E.value0)(B.form),
                                                  internal: c.over(l.newtypeInternalState)(l.newtypeInternalState)(l.InternalState)(function (a) {
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
                                                if (E instanceof l.SetAll) return J({
                                                  form: g.replaceFormFieldInputs()(A)(x)(z)(E.value0)(B.form),
                                                  internal: B.internal,
                                                  errors: B.errors,
                                                  dirty: B.dirty,
                                                  validity: B.validity,
                                                  submitAttempts: B.submitAttempts,
                                                  submitting: B.submitting
                                                });
                                                if (E instanceof l.ModifyAll) return J({
                                                  form: g.modifyAll()(q)(F)(z)(E.value0)(B.form),
                                                  internal: B.internal,
                                                  errors: B.errors,
                                                  dirty: B.dirty,
                                                  validity: B.validity,
                                                  submitAttempts: B.submitAttempts,
                                                  submitting: B.submitting
                                                });
                                                if (E instanceof l.ValidateAll) return f.bind(w.Bind1())(g.validateAll()(w)(y)(C)(z)(c.unwrap(l.newtypeInternalState)(B.internal).validators)(B.form))(function (a) {
                                                  return J({
                                                    form: a,
                                                    internal: B.internal,
                                                    errors: B.errors,
                                                    dirty: B.dirty,
                                                    validity: B.validity,
                                                    submitAttempts: B.submitAttempts,
                                                    submitting: B.submitting
                                                  });
                                                });
                                                if (E instanceof l.Submit) return K(B);
                                                if (E instanceof l.ResetAll) return d.pure(w.Applicative0())(h.Left.create({
                                                  validity: l.Incomplete.value,
                                                  dirty: !1,
                                                  errors: 0,
                                                  submitAttempts: 0,
                                                  submitting: !1,
                                                  form: g.replaceFormFieldInputs()(A)(x)(z)(c.unwrap(l.newtypeInternalState)(B.internal).initialInputs)(B.form),
                                                  internal: c.over(l.newtypeInternalState)(l.newtypeInternalState)(l.InternalState)(function (a) {
                                                    return {
                                                      allTouched: !1,
                                                      initialInputs: a.initialInputs,
                                                      validators: a.validators
                                                    };
                                                  })(B.internal)
                                                }));
                                                if (E instanceof l.LoadForm) return d.pure(w.Applicative0())(h.Left.create({
                                                  validity: l.Incomplete.value,
                                                  dirty: !1,
                                                  errors: 0,
                                                  submitAttempts: 0,
                                                  submitting: !1,
                                                  form: g.replaceFormFieldInputs()(A)(x)(z)(E.value0)(B.form),
                                                  internal: c.over(l.newtypeInternalState)(l.newtypeInternalState)(l.InternalState)(function (a) {
                                                    return {
                                                      allTouched: !1,
                                                      initialInputs: E.value0,
                                                      validators: a.validators
                                                    };
                                                  })(B.internal)
                                                }));
                                                if (E instanceof l.AndThen) return f.bind(w.Bind1())(m()()(a)(p)(r)(u)(v)(t)(A)(q)(y)(n)(x)(F)(z)(D)(C)(G)(I)(H)(w)(E.value0)(B))(function (b) {
                                                  if (b instanceof h.Left) return m()()(a)(p)(r)(u)(v)(t)(A)(q)(y)(n)(x)(F)(z)(D)(C)(G)(I)(H)(w)(E.value1)(b.value0);
                                                  if (b instanceof h.Right) return d.pure(w.Applicative0())(new h.Right(b.value0));
                                                  throw Error("Failed pattern match at Formless.Component (line 136, column 5 - line 138, column 38): " + [b.constructor.name]);
                                                });
                                                throw Error("Failed pattern match at Formless.Component (line 44, column 17 - line 138, column 38): " + [E.constructor.name]);
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
  var d = a["Formless.Query"],
      f = a["Data.Function"],
      k = a["Data.Maybe"],
      h = a["Data.Newtype"],
      b = a["Data.Variant"],
      e = a["Formless.Types.Form"],
      c = a["Formless.Types.Query"];
  d.submit = c.Submit.value;

  d.set = function (a) {
    return function (d) {
      return function (g) {
        return function (g) {
          return function (k) {
            return new c.Modify(h.wrap(d)(b.inj()(a)(g)(h.wrap(e.newtypeInputFunction)(f["const"](k)))));
          };
        };
      };
    };
  };

  d.setValidate = function (a) {
    return function (d) {
      return function (g) {
        return function (g) {
          return function (l) {
            return new c.ModifyValidate(k.Nothing.value, h.wrap(d)(b.inj()(a)(g)(h.wrap(e.newtypeInputFunction)(f["const"](l)))));
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Formless.Retrieve"] = a["Formless.Retrieve"] || {};

  var d = a["Formless.Retrieve"],
      f = a["Data.Lens.Fold"],
      k = a["Data.Lens.Getter"],
      h = a["Data.Lens.Internal.Forget"],
      b = a["Data.Lens.Iso.Newtype"],
      e = a["Data.Lens.Record"],
      c = a["Data.Maybe.First"],
      g = a["Data.Symbol"],
      l = a["Formless.Data.FormFieldResult"],
      m = a["Formless.Types.Form"],
      u = function u(a) {
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
      p = function p(a) {
    return function (b) {
      return function (c) {
        return function (c) {
          return function (d) {
            var f = u(a)(b)()(c)(d),
                h = e.prop(new g.IsSymbol(function () {
              return "input";
            }))()()(g.SProxy.value)(d);
            return function (a) {
              return f(h(a));
            };
          };
        };
      };
    };
  },
      x = function x(a) {
    return function (b) {
      return function (c) {
        return function (c) {
          return function (d) {
            var f = u(a)(b)()(c)(d),
                h = e.prop(new g.IsSymbol(function () {
              return "result";
            }))()()(g.SProxy.value)(d);
            return function (a) {
              return f(h(a));
            };
          };
        };
      };
    };
  },
      v = function v(a) {
    return function (b) {
      return function (c) {
        return function (c) {
          return function (d) {
            var e = x(a)(b)()(c)(d.Strong0()),
                f = l._Error(d.Choice1());

            return function (a) {
              return e(f(a));
            };
          };
        };
      };
    };
  };

  d.getInput = function (a) {
    return function (b) {
      return function (c) {
        return function (c) {
          return k.view(p(a)(b)()(c)(h.strongForget));
        };
      };
    };
  };

  d.getError = function (a) {
    return function (b) {
      return function (d) {
        return function (d) {
          return f.preview(v(a)(b)()(d)(h.wanderForget(c.monoidFirst)));
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Heterogeneous.Mapping"] = a["Heterogeneous.Mapping"] || {};

  var d = a["Heterogeneous.Mapping"],
      f = a["Control.Category"],
      k = a["Control.Semigroupoid"],
      h = a["Data.Symbol"],
      b = a["Record.Builder"],
      e = a["Type.Data.RowList"],
      c = function c(a) {
    this.mappingWithIndex = a;
  },
      g = function g(a) {
    this.mapRecordWithIndexBuilder = a;
  },
      l = function l(a) {
    this.hmap = a;
  };

  a = new g(function (a) {
    return function (a) {
      return f.identity(b.categoryBuilder);
    };
  });

  d.hmap = function (a) {
    return a.hmap;
  };

  d.Mapping = function (a) {
    this.mapping = a;
  };

  d.constMapping = function (a) {
    return new c(function (b) {
      return function (c) {
        return (0, a.mapping)(b);
      };
    });
  };

  d.hmapRecord = function (a) {
    return function (a) {
      return new l(function () {
        var c = (0, a.mapRecordWithIndexBuilder)(e.RLProxy.value);
        return function (a) {
          return b.build(c(a));
        };
      }());
    };
  };

  d.mapRecordWithIndexCons = function (a) {
    return function (c) {
      return function (d) {
        return function (f) {
          return function (f) {
            return new g(function (f) {
              return function (f) {
                return k.compose(b.semigroupoidBuilder)(b.modify()()(a)(h.SProxy.value)((0, c.mappingWithIndex)(f)(h.SProxy.value)))((0, d.mapRecordWithIndexBuilder)(e.RLProxy.value)(f));
              };
            });
          };
        };
      };
    };
  };

  d.mapRecordWithIndexNil = a;
})(PS);

(function (a) {
  a["Formless.Transform.Record"] = a["Formless.Transform.Record"] || {};

  var d = a["Formless.Transform.Record"],
      f = a["Data.Newtype"],
      k = a["Heterogeneous.Mapping"],
      h = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      b = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  d.unwrapOutputFields = function (a) {
    return function (c) {
      var d = k.hmap(c)(b.value),
          e = f.unwrap(a);
      return function (a) {
        return d(e(a));
      };
    };
  };

  d.wrapInputFields = function (a) {
    return function (b) {
      var c = f.wrap(a),
          d = k.hmap(b)(h.value);
      return function (a) {
        return c(d(a));
      };
    };
  };

  d.unwrapField = function (a) {
    return new k.Mapping(function (b) {
      return f.unwrap(a);
    });
  };

  d.wrapField = function (a) {
    return new k.Mapping(function (b) {
      return f.wrap(a);
    });
  };
})(PS);

(function (a) {
  a["Formless.Transform.Row"] = a["Formless.Transform.Row"] || {};

  var d = a["Formless.Transform.Row"],
      f = a["Control.Category"],
      k = a["Control.Semigroupoid"],
      h = a["Data.Symbol"],
      b = a["Formless.Internal.Transform"],
      e = a["Record.Builder"],
      c = a["Type.Data.RowList"],
      g = function g(a) {
    this.makeSProxiesBuilder = a;
  };

  a = new g(function (a) {
    return f.identity(e.categoryBuilder);
  });

  d.mkSProxies = function (a) {
    return function (a) {
      return function (a) {
        return function (d) {
          d = (0, a.makeSProxiesBuilder)(c.RLProxy.value);
          return b.fromScratch(d);
        };
      };
    };
  };

  d.makeSProxiesNil = a;

  d.makeSProxiesCons = function (a) {
    return function (b) {
      return function (b) {
        return new g(function (d) {
          d = (0, b.makeSProxiesBuilder)(c.RLProxy.value);
          var f = e.insert()()(a)(h.SProxy.value)(h.SProxy.value);
          return k.compose(e.semigroupoidBuilder)(f)(d);
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
  a.basicMetadata = "basicMetadata";
  a.creator = "creator";
  a.pubyear = "pubyear";
  a.title = "title";
  a.resourceId = "resourceId";
  a.resourceType = "resourceType";
  a.resourceTypeGen = "resourceTypeGen";
  a.resourceTypeDescr = "resourceTypeDescr";
  a.resourceMDSource = "resourceMDSource";
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
  a["Metajelo.CSS.UI.ClassNamesPrivate"] = a["Metajelo.CSS.UI.ClassNamesPrivate"] || {};
  a = a["Metajelo.CSS.UI.ClassNamesPrivate"];
  a.page = "page";
  a.date = "date";
  a.recPreview = "recPreview";
  a.prodPreview = "prodPreview";
  a.locPreview = "locPreview";
  a.tooltip = "tooltip";
})(PS);

(function (a) {
  a["Metajelo.CSS.UI.Util"] = a["Metajelo.CSS.UI.Util"] || {};
  var d = a["Concur.React.Props"];

  a["Metajelo.CSS.UI.Util"].mjUiClass = function (a) {
    return d.className("metajelo-ui_" + a);
  };
})(PS);

(function (a) {
  a["Metajelo.CSS.UI.ClassProps"] = a["Metajelo.CSS.UI.ClassProps"] || {};
  var d = a["Metajelo.CSS.UI.ClassProps"],
      f = a["Metajelo.CSS.Common.ClassNames"],
      k = a["Metajelo.CSS.UI.ClassNamesPrivate"],
      h = a["Metajelo.CSS.UI.Util"];
  a = h.mjUiClass(f.versioning);
  var b = h.mjUiClass(f.url),
      e = h.mjUiClass(k.tooltip),
      c = h.mjUiClass(f.title),
      g = h.mjUiClass(f.sustainability),
      l = h.mjUiClass(f.superOrg),
      m = h.mjUiClass(f.resourceTypeGen),
      u = h.mjUiClass(f.resourceTypeDescr),
      p = h.mjUiClass(f.resourceType),
      x = h.mjUiClass(f.resourceMDSource),
      v = h.mjUiClass(f.resourceId),
      r = h.mjUiClass(f.relatedIdsHeader),
      y = h.mjUiClass(f.relatedIdList),
      C = h.mjUiClass(f.relatedId),
      t = h.mjUiClass(f.relType),
      A = h.mjUiClass(f.recordId),
      q = h.mjUiClass(f.record),
      H = h.mjUiClass(k.recPreview),
      n = h.mjUiClass(f.pubyear),
      J = h.mjUiClass(f.productsHeader),
      F = h.mjUiClass(f.productList),
      z = h.mjUiClass(f.product),
      D = h.mjUiClass(k.prodPreview),
      I = h.mjUiClass(f.policyType),
      G = h.mjUiClass(f.policy),
      B = h.mjUiClass(k.page),
      K = h.mjUiClass(f.missionStatement),
      w = h.mjUiClass(f.location),
      E = h.mjUiClass(k.locPreview),
      P = h.mjUiClass(f.institutionType),
      N = h.mjUiClass(f.institutionPolicy),
      O = h.mjUiClass(f.institutionPolicies),
      L = h.mjUiClass(f.institutionId),
      U = h.mjUiClass(f.institutionContact),
      R = h.mjUiClass(f.identifier),
      M = h.mjUiClass(f.idType),
      S = h.mjUiClass(f.id),
      Q = h.mjUiClass(f.fundingStatement),
      T = h.mjUiClass(f.formatList),
      V = h.mjUiClass(f.format);
  k = h.mjUiClass(k.date);
  var W = h.mjUiClass(f.creator),
      Y = h.mjUiClass(f.contactType),
      ba = h.mjUiClass(f.contactEmail),
      ca = h.mjUiClass(f.basicMetadata);
  f = h.mjUiClass(f.applies);
  d.page = B;
  d.date = k;
  d.recPreview = H;
  d.prodPreview = D;
  d.locPreview = E;
  d.tooltip = e;
  d.record = q;
  d.recordId = A;
  d.product = z;
  d.productList = F;
  d.productsHeader = J;
  d.location = w;
  d.sustainability = g;
  d.missionStatement = K;
  d.fundingStatement = Q;
  d.identifier = R;
  d.id = S;
  d.idType = M;
  d.relatedId = C;
  d.relType = t;
  d.relatedIdList = y;
  d.relatedIdsHeader = r;
  d.basicMetadata = ca;
  d.creator = W;
  d.pubyear = n;
  d.title = c;
  d.resourceId = v;
  d.resourceType = p;
  d.resourceTypeGen = m;
  d.resourceTypeDescr = u;
  d.resourceMDSource = x;
  d.institutionId = L;
  d.institutionType = P;
  d.institutionContact = U;
  d.contactEmail = ba;
  d.contactType = Y;
  d.institutionPolicy = N;
  d.institutionPolicies = O;
  d.policy = G;
  d.policyType = I;
  d.applies = f;
  d.superOrg = l;
  d.versioning = a;
  d.format = V;
  d.formatList = T;
  d.url = b;
})(PS);

(function (a) {
  a._validateURL = function (a) {
    return function (d) {
      if (!d || !/^https?:\/\//.test(d)) return "Unknown or missing protocol format in url: " + d;
      var f = document.createElement("a");
      f.href = d;

      if (a) {
        if (f.username) return "URL " + d + " contains a username: " + f.username;
        if (f.password) return "URL " + d + " contains a password: " + f.password;
      }

      return /\.[^0-9.]/.test(f.hostname) ? /(\s|^\.|\.$)/.test(f.hostname) ? "Hostname '" + f.href + "' contains whitespace in " + d : f.href.toLowerCase().replace(/\/+$/g, "") !== d.toLowerCase().replace(/\/+$/g, "") ? "Unkown error: supplied URL " + d + " doesn't match parsed href " + f.href : "SUCCESS" : "Invalid hostname '" + f.href + "' in " + d;
    };
  };
})(PS["Text.URL.Validate"] = PS["Text.URL.Validate"] || {});

(function (a) {
  a["Text.URL.Validate"] = a["Text.URL.Validate"] || {};
  var d = a["Text.URL.Validate"],
      f = a["Text.URL.Validate"],
      k = a["Data.Either"],
      h = a["Data.Maybe"],
      b = a["Data.Show"],
      e = a["Data.String.NonEmpty.Internal"];
  a = new b.Show(function (a) {
    return b.show(e.showNonEmptyString)(a);
  });

  var c = function c(a) {
    return function (b) {
      var c = "SUCCESS" === b ? !0 : !1;

      if (c) {
        b = e.fromString(a);
        if (b instanceof h.Just) return new k.Right(b.value0);
        if (b instanceof h.Nothing) return new k.Left("Empty URL");
        throw Error("Failed pattern match at Text.URL.Validate (line 54, column 11 - line 56, column 32): " + [b.constructor.name]);
      }

      if (!c) return new k.Left(b);
      throw Error("Failed pattern match at Text.URL.Validate (line 53, column 29 - line 57, column 23): " + [c.constructor.name]);
    };
  };

  d.parsePublicURL = function (a) {
    var b = f._validateURL(!0)(a);

    return c(a)(b);
  };

  d.urlToNEString = function (a) {
    return a;
  };

  d.urlToString = function (a) {
    return e.toString(a);
  };

  d.showURL = a;
})(PS);

(function (a) {
  a["Metajelo.Types"] = a["Metajelo.Types"] || {};

  var d = a["Metajelo.Types"],
      f = a["Data.Bounded"],
      k = a["Data.Enum"],
      h = a["Data.Eq"],
      b = a["Data.Generic.Rep"],
      e = a["Data.Generic.Rep.Bounded"],
      c = a["Data.Generic.Rep.Enum"],
      g = a["Data.Generic.Rep.Eq"],
      l = a["Data.Generic.Rep.Ord"],
      m = a["Data.Generic.Rep.Show"],
      u = a["Data.Ord"],
      p = a["Data.Show"],
      x = a["Data.String.NonEmpty.Internal"],
      v = a["Data.Symbol"],
      r = a["Text.URL.Validate"],
      y = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      C = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      t = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      A = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      q = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      H = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      n = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      J = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      F = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      z = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      D = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      I = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      G = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      B = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      K = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      w = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      E = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      P = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      N = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      O = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      L = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      U = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      R = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      M = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      S = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Q = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      T = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      V = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      W = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Y = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ba = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ca = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      X = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ia = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ea = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      qa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ha = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ja = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      aa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      da = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Z = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      la = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ta = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      va = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ua = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      wa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ka = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      xa = function () {
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
      fa = function () {
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
      db = new p.Show(function (a) {
    if (a instanceof Aa) return "commercial";
    if (a instanceof Ba) return "non-profit";
    if (a instanceof Ca) return "governmental";
    throw Error("Failed pattern match at Metajelo.Types (line 237, column 1 - line 240, column 37): " + [a.constructor.name]);
  }),
      eb = new p.Show(function (a) {
    return "dataCustodian";
  }),
      ma = new b.Generic(function (a) {
    if (a instanceof y) return new b.Inl(b.NoArguments.value);
    if (a instanceof C) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (a instanceof t) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (a instanceof A) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (a instanceof q) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (a instanceof H) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (a instanceof n) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (a instanceof J) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (a instanceof F) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (a instanceof z) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (a instanceof D) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (a instanceof I) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (a instanceof G) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (a instanceof B) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 140, column 1 - line 140, column 76): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof b.Inl) return y.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inl) return C.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inl) return t.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inl) return A.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inl) return q.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inl) return H.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return n.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return J.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return F.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return z.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return D.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return I.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return G.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return B.value;
    throw Error("Failed pattern match at Metajelo.Types (line 140, column 1 - line 140, column 76): " + [a.constructor.name]);
  }),
      fb = new p.Show(m.genericShow(ma)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "Audiovisual";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "Dataset";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "Event";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "Image";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "InteractiveResource";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "Model";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "PhysicalObject";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "ResourceCollection";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "Service";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "Software";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "Sound";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "Text";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "Workflow";
  })))(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "Other";
  }))))))))))))))))),
      na = new b.Generic(function (a) {
    if (a instanceof K) return new b.Inl(b.NoArguments.value);
    if (a instanceof w) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (a instanceof E) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (a instanceof P) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (a instanceof N) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (a instanceof O) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (a instanceof L) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (a instanceof U) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (a instanceof R) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (a instanceof M) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (a instanceof S) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (a instanceof Q) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (a instanceof T) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (a instanceof V) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (a instanceof W) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (a instanceof Y) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (a instanceof ba) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (a instanceof ca) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))));
    if (a instanceof X) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))));
    if (a instanceof ia) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))));
    if (a instanceof ea) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))));
    if (a instanceof qa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))));
    if (a instanceof ha) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))))));
    if (a instanceof ja) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))))));
    if (a instanceof aa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value))))))))))))))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 197, column 1 - line 197, column 62): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof b.Inl) return K.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inl) return w.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inl) return E.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inl) return P.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inl) return N.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inl) return O.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return L.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return U.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return R.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return M.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return S.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Q.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return T.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return V.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return W.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Y.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ba.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ca.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return X.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ia.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ea.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return qa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ha.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ja.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return aa.value;
    throw Error("Failed pattern match at Metajelo.Types (line 197, column 1 - line 197, column 62): " + [a.constructor.name]);
  }),
      gb = new p.Show(m.genericShow(na)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "IsCitedBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "Cites";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "IsSupplementTo";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "IsSupplementedBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "IsContinuedBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "Continues";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "IsNewVersionOf";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "IsPreviousVersionOf";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "IsPartOf";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "HasPart";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "IsReferencedBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "References";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "IsDocumentedBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "Documents";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "IsCompiledBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "Compiles";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "IsVariantFormOf";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "IsOriginalFormOf";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "IsIdenticalTo";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "HasMetadata";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "IsMetadataFor";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "Reviews";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "IsReviewedBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "IsDerivedFrom";
  })))(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
    return "IsSourceOf";
  })))))))))))))))))))))))))))),
      oa = new b.Generic(function (a) {
    if (a instanceof da) return new b.Inl(b.NoArguments.value);
    if (a instanceof Z) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (a instanceof la) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (a instanceof ta) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (a instanceof va) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (a instanceof ua) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (a instanceof wa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (a instanceof ka) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))));
    throw Error("Failed pattern match at Metajelo.Types (line 307, column 1 - line 307, column 58): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof b.Inl) return da.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inl) return Z.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inl) return la.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inl) return ta.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inl) return va.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inl) return ua.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return wa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return ka.value;
    throw Error("Failed pattern match at Metajelo.Types (line 307, column 1 - line 307, column 58): " + [a.constructor.name]);
  }),
      hb = new p.Show(function (a) {
    return a instanceof ka ? "Terms of Use" : m.genericShow(oa)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "Access";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "Collection";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "Data";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "Metadata";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "Preservation";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "Submission";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "Quality";
    })))(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "TermsOfUse";
    }))))))))))(a);
  }),
      ib = new b.Generic(function (a) {
    if (a instanceof xa) return new b.Inl(a.value0);
    if (a instanceof Ja) return new b.Inr(a.value0);
    throw Error("Failed pattern match at Metajelo.Types (line 340, column 1 - line 340, column 50): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof b.Inl) return new xa(a.value0);
    if (a instanceof b.Inr) return new Ja(a.value0);
    throw Error("Failed pattern match at Metajelo.Types (line 340, column 1 - line 340, column 50): " + [a.constructor.name]);
  }),
      jb = new p.Show(m.genericShow(ib)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsArgument(x.showNonEmptyString))(new v.IsSymbol(function () {
    return "FreeTextPolicy";
  })))(m.genericShowConstructor(m.genericShowArgsArgument(r.showURL))(new v.IsSymbol(function () {
    return "RefPolicy";
  }))))),
      ra = new b.Generic(function (a) {
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
      sa = new b.Generic(function (a) {
    return b.NoArguments.value;
  }, function (a) {
    return fa.value;
  }),
      pa = new b.Generic(function (a) {
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
      kb = new p.Show(function (a) {
    return a instanceof ya ? "arXiv" : a instanceof za ? "bibcode" : m.genericShow(pa)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "ARK";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "ArXiv";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "Bibcode";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "DOI";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "EAN13";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "EISSN";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "Handle";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "IGSN";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "ISBN";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "ISSN";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "ISTC";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "LISSN";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "LSID";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "PMID";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "PURL";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "UPC";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "URL";
    })))(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "URN";
    }))))))))))))))))))))(a);
  }),
      lb = new h.Eq(g.genericEq(ma)(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqConstructor(g.genericEqNoArguments)))))))))))))))),
      Ua = new u.Ord(function () {
    return lb;
  }, function (a) {
    return function (b) {
      return l.genericCompare(ma)(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdConstructor(l.genericOrdNoArguments)))))))))))))))(a)(b);
    };
  }),
      mb = new h.Eq(g.genericEq(na)(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqConstructor(g.genericEqNoArguments))))))))))))))))))))))))))),
      Va = new u.Ord(function () {
    return mb;
  }, function (a) {
    return function (b) {
      return l.genericCompare(na)(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdConstructor(l.genericOrdNoArguments))))))))))))))))))))))))))(a)(b);
    };
  }),
      Wa = new h.Eq(g.genericEq(oa)(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqConstructor(g.genericEqNoArguments)))))))))),
      Xa = new u.Ord(function () {
    return Wa;
  }, function (a) {
    return function (b) {
      return l.genericCompare(oa)(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdConstructor(l.genericOrdNoArguments)))))))))(a)(b);
    };
  }),
      nb = new h.Eq(g.genericEq(ra)(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqConstructor(g.genericEqNoArguments))))),
      Ya = new u.Ord(function () {
    return nb;
  }, function (a) {
    return function (b) {
      return l.genericCompare(ra)(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdConstructor(l.genericOrdNoArguments))))(a)(b);
    };
  }),
      Za = new h.Eq(g.genericEq(sa)(g.genericEqConstructor(g.genericEqNoArguments))),
      $a = new u.Ord(function () {
    return Za;
  }, function (a) {
    return function (b) {
      return l.genericCompare(sa)(l.genericOrdConstructor(l.genericOrdNoArguments))(a)(b);
    };
  }),
      ob = new h.Eq(g.genericEq(pa)(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqConstructor(g.genericEqNoArguments)))))))))))))))))))),
      ab = new u.Ord(function () {
    return ob;
  }, function (a) {
    return function (b) {
      return l.genericCompare(pa)(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdConstructor(l.genericOrdNoArguments)))))))))))))))))))(a)(b);
    };
  }),
      pb = new k.Enum(function () {
    return Ua;
  }, c.genericPred(ma)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), c.genericSucc(ma)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      qb = new k.Enum(function () {
    return Va;
  }, c.genericPred(na)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), c.genericSucc(na)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      rb = new k.Enum(function () {
    return Xa;
  }, c.genericPred(oa)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), c.genericSucc(oa)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      sb = new k.Enum(function () {
    return Ya;
  }, c.genericPred(ra)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), c.genericSucc(ra)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      tb = new k.Enum(function () {
    return $a;
  }, c.genericPred(sa)(c.genericEnumConstructor(c.genericEnumNoArguments)), c.genericSucc(sa)(c.genericEnumConstructor(c.genericEnumNoArguments))),
      ub = new k.Enum(function () {
    return ab;
  }, c.genericPred(pa)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), c.genericSucc(pa)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      vb = new f.Bounded(function () {
    return Ua;
  }, e.genericBottom(ma)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(ma)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))))))))),
      wb = new f.Bounded(function () {
    return Va;
  }, e.genericBottom(na)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(na)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments))))))))))))))))))))))))))),
      bb = new f.Bounded(function () {
    return Xa;
  }, e.genericBottom(oa)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(oa)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))),
      xb = new k.SmallBounded(function () {
    return bb;
  }),
      yb = new f.Bounded(function () {
    return Ya;
  }, e.genericBottom(ra)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(ra)(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments))))),
      cb = new f.Bounded(function () {
    return $a;
  }, e.genericBottom(sa)(e.genericBottomConstructor(e.genericBottomNoArguments)), e.genericTop(sa)(e.genericTopConstructor(e.genericTopNoArguments))),
      zb = new k.SmallBounded(function () {
    return cb;
  }),
      Ab = new f.Bounded(function () {
    return ab;
  }, e.genericBottom(pa)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(pa)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))))))))))))),
      Bb = new k.BoundedEnum(function () {
    return vb;
  }, function () {
    return pb;
  }, c.genericCardinality(ma)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))), c.genericFromEnum(ma)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))), c.genericToEnum(ma)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))))))))))))))),
      Cb = new k.BoundedEnum(function () {
    return wb;
  }, function () {
    return qb;
  }, c.genericCardinality(na)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))))))))))))))))))))))))), c.genericFromEnum(na)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))))))))))))))))))))))))), c.genericToEnum(na)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))))))))))))))),
      Db = new k.BoundedEnum(function () {
    return bb;
  }, function () {
    return rb;
  }, c.genericCardinality(oa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))), c.genericFromEnum(oa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))), c.genericToEnum(oa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))))))))),
      Eb = new k.BoundedEnum(function () {
    return yb;
  }, function () {
    return sb;
  }, c.genericCardinality(ra)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))), c.genericFromEnum(ra)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))), c.genericToEnum(ra)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))),
      Fb = new k.BoundedEnum(function () {
    return cb;
  }, function () {
    return tb;
  }, c.genericCardinality(sa)(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)), c.genericFromEnum(sa)(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)), c.genericToEnum(sa)(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))),
      Gb = new k.BoundedEnum(function () {
    return Ab;
  }, function () {
    return ub;
  }, c.genericCardinality(pa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))))))), c.genericFromEnum(pa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))))))), c.genericToEnum(pa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))))))));

  d.ARK = Ka;
  d.ArXiv = ya;
  d.Bibcode = za;
  d.DOI = Da;
  d.EAN13 = Ea;
  d.EISSN = Fa;
  d.Handle = Ga;
  d.IGSN = La;
  d.ISBN = Ma;
  d.ISSN = Ha;
  d.ISTC = Na;
  d.LISSN = Oa;
  d.LSID = Pa;
  d.PMID = Ia;
  d.PURL = Qa;
  d.UPC = Ra;
  d.URL = Sa;
  d.URN = Ta;
  d.Audiovisual = y;
  d.Dataset = C;
  d.Event = t;
  d.Image = A;
  d.InteractiveResource = q;
  d.Model = H;
  d.PhysicalObject = n;
  d.ResourceCollection = J;
  d.Service = F;
  d.Software = z;
  d.Sound = D;
  d.Text = I;
  d.Workflow = G;
  d.Other = B;
  d.IsCitedBy = K;
  d.Cites = w;
  d.IsSupplementTo = E;
  d.IsSupplementedBy = P;
  d.IsContinuedBy = N;
  d.Continues = O;
  d.IsNewVersionOf = L;
  d.IsPreviousVersionOf = U;
  d.IsPartOf = R;
  d.HasPart = M;
  d.IsReferencedBy = S;
  d.References = Q;
  d.IsDocumentedBy = T;
  d.Documents = V;
  d.IsCompiledBy = W;
  d.Compiles = Y;
  d.IsVariantFormOf = ba;
  d.IsOriginalFormOf = ca;
  d.IsIdenticalTo = X;
  d.HasMetadata = ia;
  d.IsMetadataFor = ea;
  d.Reviews = qa;
  d.IsReviewedBy = ha;
  d.IsDerivedFrom = ja;
  d.IsSourceOf = aa;
  d.Commercial = Aa;
  d.NonProfit = Ba;
  d.Governmental = Ca;
  d.DataCustodian = fa;
  d.Access = da;
  d.Collection = Z;
  d.Data = la;
  d.Metadata = ta;
  d.Preservation = va;
  d.Submission = ua;
  d.Quality = wa;
  d.TermsOfUse = ka;
  d.FreeTextPolicy = xa;
  d.RefPolicy = Ja;
  d.showIdentifierType = kb;
  d.boundedEnumIdentifierType = Gb;
  d.showResourceTypeGeneral = fb;
  d.boundedEnumResourceTypeGeneral = Bb;
  d.showRelationType = gb;
  d.boundedEnumRelationType = Cb;
  d.showInstitutionType = db;
  d.boundedEnumInstitutionType = Eb;
  d.eqInstitutionContactType = Za;
  d.showInstitutionContactType = eb;
  d.boundedEnumInstitutionContactType = Fb;
  d.smallBoundedInstitutionContactType = zb;
  d.showPolicyType = hb;
  d.eqPolicyType = Wa;
  d.boundedEnumPolicyType = Db;
  d.smallBoundedPolicyType = xb;
  d.showPolicy = jb;
})(PS);

(function (a) {
  a["Text.Parsing.StringParser"] = a["Text.Parsing.StringParser"] || {};
  var d = a["Text.Parsing.StringParser"],
      f = a["Control.Alt"],
      k = a["Control.Alternative"],
      h = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      c = a["Control.Monad"],
      g = a["Control.Monad.Rec.Class"],
      l = a["Control.Plus"],
      m = a["Data.Bifunctor"],
      u = a["Data.Boolean"],
      p = a["Data.Either"],
      x = a["Data.Functor"];
  a = a["Data.Show"];

  var v = function () {
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

  var r = new x.Functor(function (a) {
    return function (b) {
      var c = x.map(p.functorEither)(function (b) {
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
      y = function y(a) {
    return function (b) {
      return new p.Left({
        pos: b.pos,
        error: new v(a)
      });
    };
  },
      C = new b.Apply(function () {
    return r;
  }, function (a) {
    return function (b) {
      return function (c) {
        return e.bind(p.bindEither)(a(c))(function (a) {
          return e.bind(p.bindEither)(b(a.suffix))(function (b) {
            return h.pure(p.applicativeEither)({
              result: a.result(b.result),
              suffix: b.suffix
            });
          });
        });
      };
    };
  }),
      t = new e.Bind(function () {
    return C;
  }, function (a) {
    return function (b) {
      return function (c) {
        return e.bind(p.bindEither)(a(c))(function (a) {
          return b(a.result)(a.suffix);
        });
      };
    };
  }),
      A = new h.Applicative(function () {
    return C;
  }, function (a) {
    return function (b) {
      return new p.Right({
        result: a,
        suffix: b
      });
    };
  }),
      q = new c.Monad(function () {
    return A;
  }, function () {
    return t;
  });

  b = new g.MonadRec(function () {
    return q;
  }, function (a) {
    return function (b) {
      var c = function c(a) {
        if (a.result instanceof g.Loop) return new g.Loop({
          state: a.result.value0,
          str: a.suffix
        });
        if (a.result instanceof g.Done) return new g.Done({
          result: a.result.value0,
          suffix: a.suffix
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser (line 88, column 7 - line 88, column 70): " + [a.constructor.name]);
      };

      return function (d) {
        return g.tailRecM(g.monadRecEither)(function (b) {
          return x.map(p.functorEither)(c)(a(b.state)(b.str));
        })({
          state: b,
          str: d
        });
      };
    };
  });
  var H = new f.Alt(function () {
    return r;
  }, function (a) {
    return function (b) {
      return function (c) {
        var d = a(c);

        if (d instanceof p.Left) {
          if (c.pos === d.value0.pos) return b(c);
          if (u.otherwise) return new p.Left({
            error: d.value0.error,
            pos: d.value0.pos
          });
        }

        return d;
      };
    };
  }),
      n = new l.Plus(function () {
    return H;
  }, y("No alternative"));
  f = new k.Alternative(function () {
    return A;
  }, function () {
    return n;
  });
  d.ParseError = v;

  d.runParser = function (a) {
    return function (b) {
      return m.bimap(p.bifunctorEither)(function (a) {
        return a.error;
      })(function (a) {
        return a.result;
      })(a({
        str: b,
        pos: 0
      }));
    };
  };

  d.fail = y;

  d["try"] = function (a) {
    return function (b) {
      return m.lmap(p.bifunctorEither)(function (a) {
        return {
          pos: b.pos,
          error: a.error
        };
      })(a(b));
    };
  };

  d.showParseError = a;
  d.functorParser = r;
  d.applyParser = C;
  d.applicativeParser = A;
  d.altParser = H;
  d.alternativeParser = f;
  d.bindParser = t;
  d.monadRecParser = b;
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.Combinators"] = a["Text.Parsing.StringParser.Combinators"] || {};

  var d = a["Text.Parsing.StringParser.Combinators"],
      f = a["Control.Alt"],
      k = a["Control.Applicative"],
      h = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Data.Functor"],
      c = a["Data.NonEmpty"],
      g = a["Data.Unit"],
      l = a["Text.Parsing.StringParser"],
      m = a["Data.List"].manyRec(l.monadRecParser)(l.alternativeParser),
      u = function u(a) {
    return function (b) {
      return new c.NonEmpty(a, b);
    };
  };

  d.many = m;

  d.many1 = function (a) {
    return h.apply(l.applyParser)(e.map(l.functorParser)(u)(a))(m(a));
  };

  d.withError = function (a) {
    return function (b) {
      return f.alt(l.altParser)(a)(l.fail(b));
    };
  };

  d.optional = function (a) {
    return f.alt(l.altParser)(b.bind(l.bindParser)(a)(function (a) {
      return k.pure(l.applicativeParser)(g.unit);
    }))(k.pure(l.applicativeParser)(g.unit));
  };

  d.sepBy1 = function (a) {
    return function (c) {
      return b.bind(l.bindParser)(a)(function (d) {
        return b.bind(l.bindParser)(m(h.applySecond(l.applyParser)(c)(a)))(function (a) {
          return k.pure(l.applicativeParser)(u(d)(a));
        });
      });
    };
  };
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.CodePoints"] = a["Text.Parsing.StringParser.CodePoints"] || {};

  var d = a["Text.Parsing.StringParser.CodePoints"],
      f = a["Control.Applicative"],
      k = a["Control.Bind"],
      h = a["Data.Char"],
      b = a["Data.Either"],
      e = a["Data.Enum"],
      c = a["Data.Maybe"],
      g = a["Data.Show"],
      l = a["Data.String.CodePoints"],
      m = a["Data.Unit"],
      u = a["Text.Parsing.StringParser"],
      p = a["Text.Parsing.StringParser.Combinators"],
      x = function () {
    var a = function () {
      var a = e.fromEnum(l.boundedEnumCodePoint);
      return function (b) {
        return h.fromCharCode(a(b));
      };
    }();

    return function (d) {
      var e = l.codePointAt(d.pos)(d.str);

      if (e instanceof c.Just) {
        var f = a(e.value0);
        if (f instanceof c.Just) return new b.Right({
          result: f.value0,
          suffix: {
            str: d.str,
            pos: d.pos + 1 | 0
          }
        });
        if (f instanceof c.Nothing) return new b.Left({
          pos: d.pos,
          error: u.ParseError.create("CodePoint " + (g.show(l.showCodePoint)(e.value0) + " is not a character"))
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 53, column 16 - line 55, column 100): " + [f.constructor.name]);
      }

      if (e instanceof c.Nothing) return new b.Left({
        pos: d.pos,
        error: new u.ParseError("Unexpected EOF")
      });
      throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 52, column 3 - line 56, column 64): " + [e.constructor.name]);
    };
  }(),
      v = function v(a) {
    return u["try"](k.bind(u.bindParser)(x)(function (b) {
      return a(b) ? f.pure(u.applicativeParser)(b) : u.fail("Character " + (g.show(g.showChar)(b) + " did not satisfy predicate"));
    }));
  };

  d.eof = function (a) {
    return a.pos < l.length(a.str) ? new b.Left({
      pos: a.pos,
      error: new u.ParseError("Expected EOF")
    }) : new b.Right({
      result: m.unit,
      suffix: a
    });
  };

  d.satisfy = v;

  d["char"] = function (a) {
    return p.withError(v(function (b) {
      return b === a;
    }))("Could not match character " + g.show(g.showChar)(a));
  };
})(PS);

(function (a) {
  a["Text.Email.Parser"] = a["Text.Email.Parser"] || {};

  var d = a["Text.Email.Parser"],
      f = a["Control.Alt"],
      k = a["Control.Applicative"],
      h = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Data.Char"],
      c = a["Data.Foldable"],
      g = a["Data.Functor"],
      l = a["Data.List.Types"],
      m = a["Data.Maybe"],
      u = a["Data.Monoid"],
      p = a["Data.String.CodeUnits"],
      x = a["Data.String.Pattern"],
      v = a["Data.Unit"],
      r = a["Text.Parsing.StringParser"],
      y = a["Text.Parsing.StringParser.CodePoints"],
      C = a["Text.Parsing.StringParser.Combinators"],
      t = function (a) {
    var b = m.fromJust();
    return function (a) {
      return b(e.fromCharCode(a));
    };
  }(),
      A = function A(a) {
    return g.map(r.functorParser)(function () {
      var a = c.fold(l.foldableNonEmptyList)(u.monoidString),
          b = g.map(l.functorNonEmptyList)(p.singleton);
      return function (c) {
        return a(b(c));
      };
    }())(C.many1(y.satisfy(a)));
  },
      q = function q(a) {
    return b.discard(b.discardUnit)(r.bindParser)(g["void"](r.functorParser)(a))(function () {
      return b.discard(b.discardUnit)(r.bindParser)(g["void"](r.functorParser)(H(a)))(function () {
        return k.pure(r.applicativeParser)(v.unit);
      });
    });
  },
      H = function H(a) {
    return f.alt(r.altParser)(q(a))(k.pure(r.applicativeParser)(v.unit));
  },
      n = function n(a) {
    return b.discard(b.discardUnit)(r.bindParser)(g["void"](r.functorParser)(y.satisfy(a)))(function () {
      return b.discard(b.discardUnit)(r.bindParser)(g["void"](r.functorParser)(H(y.satisfy(a))))(function () {
        return k.pure(r.applicativeParser)(v.unit);
      });
    });
  },
      J = y["char"](t(0)),
      F = y["char"]("\n");

  a = function a(_a15) {
    return " " === _a15 || "\t" === _a15;
  };

  var z = y.satisfy(a),
      D = n(a),
      I = function I(a) {
    return function (b) {
      return function (c) {
        return c >= a && c <= b;
      };
    };
  };

  a = I(t(33))(t(126));

  var G = y.satisfy(a),
      B = function B(a) {
    return function (b) {
      return p.contains(x.Pattern(p.singleton(b)))(a);
    };
  },
      K = function K(a) {
    return I(t(1))(t(8))(a) || I(t(14))(t(31))(a) || B("\x0B\f\x7F")(a);
  },
      w = function w(a) {
    return I(t(33))(t(39))(a) || I(t(42))(t(91))(a) || I(t(93))(t(126))(a) || K(a);
  },
      E = function E(a) {
    return I(t(33))(t(90))(a) || I(t(94))(t(126))(a) || K(a);
  },
      P = y.satisfy(K),
      N = y["char"]("\r"),
      O = g["void"](r.functorParser)(h.applySecond(r.applyParser)(N)(F)),
      L = function () {
    var a = q(h.applySecond(r.applyParser)(O)(D)),
        b = h.applySecond(r.applyParser)(D)(C.optional(h.applySecond(r.applyParser)(O)(D)));
    return f.alt(r.altParser)(b)(a);
  }(),
      U = function () {
    var a = b.discard(b.discardUnit)(r.bindParser)(g["void"](r.functorParser)(y["char"]("\\")))(function () {
      return f.alt(r.altParser)(f.alt(r.altParser)(f.alt(r.altParser)(f.alt(r.altParser)(f.alt(r.altParser)(G)(z))(F))(N))(P))(J);
    });
    return b.bind(r.bindParser)(a)(function (a) {
      return k.pure(r.applicativeParser)("\\" + p.singleton(a));
    });
  }(),
      R = f.alt(r.altParser)(A(function (a) {
    return B(p.singleton(t(33)))(a) || I(t(35))(t(91))(a) || I(t(93))(t(126))(a) || K(a);
  }))(U),
      M = function () {
    var a = b.discard(b.discardUnit)(r.bindParser)(g["void"](r.functorParser)(y["char"]('"')))(function () {
      return b.bind(r.bindParser)(C.many(h.applySecond(r.applyParser)(C.optional(L))(R)))(function (a) {
        return b.discard(b.discardUnit)(r.bindParser)(g["void"](r.functorParser)(C.optional(L)))(function () {
          return b.discard(b.discardUnit)(r.bindParser)(g["void"](r.functorParser)(y["char"]('"')))(function () {
            return k.pure(r.applicativeParser)(a);
          });
        });
      });
    });
    return g.map(r.functorParser)(function (a) {
      return '"' + (c.fold(l.foldableList)(u.monoidString)(a) + '"');
    })(a);
  }(),
      S = b.discard(b.discardUnit)(r.bindParser)(g["void"](r.functorParser)(y["char"]("(")))(function () {
    return b.discard(b.discardUnit)(r.bindParser)(H(f.alt(r.altParser)(f.alt(r.altParser)(f.alt(r.altParser)(n(w))(g["void"](r.functorParser)(U)))(S))(L)))(function () {
      return b.discard(b.discardUnit)(r.bindParser)(g["void"](r.functorParser)(y["char"](")")))(function () {
        return k.pure(r.applicativeParser)(v.unit);
      });
    });
  }),
      Q = H(f.alt(r.altParser)(S)(L));

  a = b.discard(b.discardUnit)(r.bindParser)(C.optional(Q))(function () {
    return b.discard(b.discardUnit)(r.bindParser)(g["void"](r.functorParser)(y["char"]("[")))(function () {
      return b.bind(r.bindParser)(C.many(h.applySecond(r.applyParser)(C.optional(L))(A(E))))(function (a) {
        return b.discard(b.discardUnit)(r.bindParser)(C.optional(L))(function () {
          return b.discard(b.discardUnit)(r.bindParser)(g["void"](r.functorParser)(y["char"]("]")))(function () {
            return b.discard(b.discardUnit)(r.bindParser)(C.optional(Q))(function () {
              return k.pure(r.applicativeParser)("[" + (c.fold(l.foldableList)(u.monoidString)(a) + "]"));
            });
          });
        });
      });
    });
  });

  var T = function () {
    return A(function (a) {
      return "0" <= a && "9" >= a || "a" <= a && "z" >= a || "A" <= a && "Z" >= a || B("!#$%&'*+/=?^_`{|}~-")(a);
    });
  }(),
      V = function () {
    var a = b.discard(b.discardUnit)(r.bindParser)(g["void"](r.functorParser)(C.optional(Q)))(function () {
      return b.bind(r.bindParser)(f.alt(r.altParser)(T)(M))(function (a) {
        return b.discard(b.discardUnit)(r.bindParser)(g["void"](r.functorParser)(C.optional(Q)))(function () {
          return k.pure(r.applicativeParser)(a);
        });
      });
    });
    a = C.sepBy1(a)(y["char"]("."));
    return g.map(r.functorParser)(c.intercalate(l.foldableNonEmptyList)(u.monoidString)("."))(a);
  }(),
      W = f.alt(r.altParser)(V)(a);

  a = b.bind(r.bindParser)(V)(function (a) {
    return b.bind(r.bindParser)(y["char"]("@"))(function () {
      return b.bind(r.bindParser)(W)(function (c) {
        return b.bind(r.bindParser)(y.eof)(function () {
          return k.pure(r.applicativeParser)({
            localPart: a,
            domainPart: c
          });
        });
      });
    });
  });
  d.addrSpec = a;

  d.toString = function (a) {
    return a.localPart + ("@" + a.domainPart);
  };
})(PS);

(function (a) {
  a["Text.Email.Validate"] = a["Text.Email.Validate"] || {};
  var d = a["Text.Email.Validate"],
      f = a["Data.Bifunctor"],
      k = a["Data.Either"],
      h = a["Data.Show"],
      b = a["Text.Email.Parser"],
      e = a["Text.Parsing.StringParser"];

  a = function () {
    var a = f.lmap(k.bifunctorEither)(h.show(e.showParseError));
    return function (c) {
      c = e.runParser(b.addrSpec)(c);
      return a(c);
    };
  }();

  d.validate = a;
})(PS);

(function (a) {
  a["Metajelo.Validation"] = a["Metajelo.Validation"] || {};

  var d = a["Metajelo.Validation"],
      f = a["Control.Category"],
      k = a["Data.Bifunctor"],
      h = a["Data.Either"],
      b = a["Data.Maybe"],
      e = a["Data.Show"],
      c = a["Data.String.Common"],
      g = a["Data.String.NonEmpty.Internal"],
      l = a["Formless.Validation"],
      m = a["Text.Email.Validate"],
      u = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      p = function () {
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
      v = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      r = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      y = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      C = function () {
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
      t = function t(a) {
    this.toText = a;
  };

  a = new t(f.identity(f.categoryFn));
  t = new t(function (a) {
    if (a instanceof u) return "This field is required.";
    if (a instanceof x) return "Invalid input: " + a.value0;
    if (a instanceof p) return "Email validation error: " + a.value0;
    if (a instanceof v) return "You must enter at least " + (e.show(e.showInt)(a.value0) + " characters.");
    if (a instanceof r) return "You must enter less than " + (e.show(e.showInt)(a.value0) + " characters.");
    if (a instanceof y) return 'Could not parse "' + (a.value0 + '" to a valid integer.');
    if (a instanceof C) return 'This field contains "' + (a.value1 + ('" but must be equal to "' + (a.value0 + '" to validate.')));
    throw Error("Failed pattern match at Metajelo.Validation (line 35, column 1 - line 42, column 126): " + [a.constructor.name]);
  });

  d.toText = function (a) {
    return a.toText;
  };

  d.dummy = function (a) {
    return l.hoistFn_(a)(f.identity(f.categoryFn));
  };

  d.emailFormat = function (a) {
    return l.hoistFnE_(a)(function (a) {
      return k.lmap(h.bifunctorEither)(function (a) {
        return new p(a);
      })(m.validate(a));
    });
  };

  d.readNEStringEi = function (a) {
    a = g.fromString(c.trim(a));
    if (a instanceof b.Just) return new h.Right(a.value0);
    if (a instanceof b.Nothing) return new h.Left("Empty string when NonEmptyString expected.");
    throw Error("Failed pattern match at Metajelo.Validation (line 110, column 22 - line 112, column 63): " + [a.constructor.name]);
  };

  d.toTextFieldError = t;
  d.toTextString = a;
})(PS);

(function (a) {
  a["Metajelo.XPaths.Read"] = a["Metajelo.XPaths.Read"] || {};
  var d = a["Metajelo.XPaths.Read"],
      f = a["Control.Applicative"],
      k = a["Data.Either"],
      h = a["Data.Maybe"],
      b = a["Metajelo.Types"];

  d.readIdentifierType = function (a) {
    return "ARK" === a ? f.pure(k.applicativeEither)(b.ARK.value) : "arXiv" === a ? f.pure(k.applicativeEither)(b.ArXiv.value) : "bibcode" === a ? f.pure(k.applicativeEither)(b.Bibcode.value) : "DOI" === a ? f.pure(k.applicativeEither)(b.DOI.value) : "EAN13" === a ? f.pure(k.applicativeEither)(b.EAN13.value) : "EISSN" === a ? f.pure(k.applicativeEither)(b.EISSN.value) : "Handle" === a ? f.pure(k.applicativeEither)(b.Handle.value) : "IGSN" === a ? f.pure(k.applicativeEither)(b.IGSN.value) : "ISBN" === a ? f.pure(k.applicativeEither)(b.ISBN.value) : "ISSN" === a ? f.pure(k.applicativeEither)(b.ISSN.value) : "ISTC" === a ? f.pure(k.applicativeEither)(b.ISTC.value) : "LISSN" === a ? f.pure(k.applicativeEither)(b.LISSN.value) : "LSID" === a ? f.pure(k.applicativeEither)(b.LSID.value) : "PMID" === a ? f.pure(k.applicativeEither)(b.PMID.value) : "PURL" === a ? f.pure(k.applicativeEither)(b.PURL.value) : "UPC" === a ? f.pure(k.applicativeEither)(b.UPC.value) : "URL" === a ? f.pure(k.applicativeEither)(b.URL.value) : "URN" === a ? f.pure(k.applicativeEither)(b.URN.value) : k.Left.create("Unknown IdentifierType: '" + (a + "'"));
  };

  d.readRelationType = function (a) {
    return "IsCitedBy" === a ? f.pure(k.applicativeEither)(b.IsCitedBy.value) : "Cites" === a ? f.pure(k.applicativeEither)(b.Cites.value) : "IsSupplementTo" === a ? f.pure(k.applicativeEither)(b.IsSupplementTo.value) : "IsSupplementedBy" === a ? f.pure(k.applicativeEither)(b.IsSupplementedBy.value) : "IsContinuedBy" === a ? f.pure(k.applicativeEither)(b.IsContinuedBy.value) : "Continues" === a ? f.pure(k.applicativeEither)(b.Continues.value) : "IsNewVersionOf" === a ? f.pure(k.applicativeEither)(b.IsNewVersionOf.value) : "IsPreviousVersionOf" === a ? f.pure(k.applicativeEither)(b.IsPreviousVersionOf.value) : "IsPartOf" === a ? f.pure(k.applicativeEither)(b.IsPartOf.value) : "HasPart" === a ? f.pure(k.applicativeEither)(b.HasPart.value) : "IsReferencedBy" === a ? f.pure(k.applicativeEither)(b.IsReferencedBy.value) : "References" === a ? f.pure(k.applicativeEither)(b.References.value) : "IsDocumentedBy" === a ? f.pure(k.applicativeEither)(b.IsDocumentedBy.value) : "Documents" === a ? f.pure(k.applicativeEither)(b.Documents.value) : "IsCompiledBy" === a ? f.pure(k.applicativeEither)(b.IsCompiledBy.value) : "Compiles" === a ? f.pure(k.applicativeEither)(b.Compiles.value) : "IsVariantFormOf" === a ? f.pure(k.applicativeEither)(b.IsVariantFormOf.value) : "IsOriginalFormOf" === a ? f.pure(k.applicativeEither)(b.IsOriginalFormOf.value) : "IsIdenticalTo" === a ? f.pure(k.applicativeEither)(b.IsIdenticalTo.value) : "HasMetadata" === a ? f.pure(k.applicativeEither)(b.HasMetadata.value) : "IsMetadataFor" === a ? f.pure(k.applicativeEither)(b.IsMetadataFor.value) : "Reviews" === a ? f.pure(k.applicativeEither)(b.Reviews.value) : "IsReviewedBy" === a ? f.pure(k.applicativeEither)(b.IsReviewedBy.value) : "IsDerivedFrom" === a ? f.pure(k.applicativeEither)(b.IsDerivedFrom.value) : "IsSourceOf" === a ? f.pure(k.applicativeEither)(b.IsSourceOf.value) : k.Left.create("Unknown RelationType: '" + (a + "'"));
  };

  d.readResourceTypeGeneral = function (a) {
    return "Audiovisual" === a ? f.pure(k.applicativeEither)(b.Audiovisual.value) : "Dataset" === a ? f.pure(k.applicativeEither)(b.Dataset.value) : "Event" === a ? f.pure(k.applicativeEither)(b.Event.value) : "Image" === a ? f.pure(k.applicativeEither)(b.Image.value) : "InteractiveResource" === a ? f.pure(k.applicativeEither)(b.InteractiveResource.value) : "Model" === a ? f.pure(k.applicativeEither)(b.Model.value) : "PhysicalObject" === a ? f.pure(k.applicativeEither)(b.PhysicalObject.value) : "ResourceCollection" === a ? f.pure(k.applicativeEither)(b.ResourceCollection.value) : "Service" === a ? f.pure(k.applicativeEither)(b.Service.value) : "Software" === a ? f.pure(k.applicativeEither)(b.Software.value) : "Sound" === a ? f.pure(k.applicativeEither)(b.Sound.value) : "Text" === a ? f.pure(k.applicativeEither)(b.Text.value) : "Workflow" === a ? f.pure(k.applicativeEither)(b.Workflow.value) : "Other" === a ? f.pure(k.applicativeEither)(b.Other.value) : k.Left.create("Unknown ResourceTypeGeneral: '" + (a + "'"));
  };

  d.readInstitutionType = function (a) {
    return "commercial" === a ? f.pure(k.applicativeEither)(b.Commercial.value) : "non-profit" === a ? f.pure(k.applicativeEither)(b.NonProfit.value) : "governmental" === a ? f.pure(k.applicativeEither)(b.Governmental.value) : k.Left.create("Unknown InstitutionType: '" + (a + "'"));
  };

  d.readInstitutionContactType = function (a) {
    return "dataCustodian" === a ? f.pure(k.applicativeEither)(new h.Just(b.DataCustodian.value)) : "" === a ? f.pure(k.applicativeEither)(h.Nothing.value) : k.Left.create("Unknown InstitutionContactType: '" + (a + "'"));
  };

  d.readPolicyType = function (a) {
    return "Access" === a ? f.pure(k.applicativeEither)(new h.Just(b.Access.value)) : "Collection" === a ? f.pure(k.applicativeEither)(new h.Just(b.Collection.value)) : "Data" === a ? f.pure(k.applicativeEither)(new h.Just(b.Data.value)) : "Metadata" === a ? f.pure(k.applicativeEither)(new h.Just(b.Metadata.value)) : "Preservation" === a ? f.pure(k.applicativeEither)(new h.Just(b.Preservation.value)) : "Submission" === a ? f.pure(k.applicativeEither)(new h.Just(b.Submission.value)) : "Quality" === a ? f.pure(k.applicativeEither)(new h.Just(b.Quality.value)) : "Terms of Use" === a ? f.pure(k.applicativeEither)(new h.Just(b.TermsOfUse.value)) : "" === a ? f.pure(k.applicativeEither)(h.Nothing.value) : k.Left.create("Unknown PolicyType: '" + (a + "'"));
  };

  d.readBoolean = function (a) {
    return "0" === a ? f.pure(k.applicativeEither)(!1) : "1" === a ? f.pure(k.applicativeEither)(!0) : "false" === a ? f.pure(k.applicativeEither)(!1) : "true" === a ? f.pure(k.applicativeEither)(!0) : k.Left.create("Invalid xs:boolean value: '" + (a + "'"));
  };
})(PS);

(function (a) {
  a["Metajelo.FormUtil"] = a["Metajelo.FormUtil"] || {};

  var d = a["Metajelo.FormUtil"],
      f = a["Concur.Core.FRP"],
      k = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Props"],
      b = a["Concur.Core.Types"],
      e = a["Concur.React.DOM"],
      c = a["Concur.React.Props"],
      g = a["Control.Applicative"],
      l = a["Control.Apply"],
      m = a["Control.Bind"],
      u = a["Control.Cofree"],
      p = a["Data.Array"],
      x = a["Data.Array.NonEmpty"],
      v = a["Data.Bounded"],
      r = a["Data.Date"],
      y = a["Data.Date.Component"],
      C = a["Data.DateTime"],
      t = a["Data.Either"],
      A = a["Data.Enum"],
      q = a["Data.Eq"],
      H = a["Data.Foldable"],
      n = a["Data.Formatter.DateTime"],
      J = a["Data.Functor"],
      F = a["Data.Generic.Rep"],
      z = a["Data.Generic.Rep.Bounded"],
      D = a["Data.Generic.Rep.Enum"],
      I = a["Data.Generic.Rep.Eq"],
      G = a["Data.Generic.Rep.Ord"],
      B = a["Data.Generic.Rep.Show"],
      K = a["Data.Maybe"],
      w = a["Data.Monoid"],
      E = a["Data.Ord"],
      P = a["Data.Profunctor.Strong"],
      N = a["Data.Semigroup"],
      O = a["Data.Show"],
      L = a["Data.String.Common"],
      U = a["Data.String.NonEmpty.Internal"],
      R = a["Data.Symbol"],
      M = a["Data.Time"],
      S = a["Data.Time.Component"],
      Q = a["Data.Traversable"],
      T = a["Data.Tuple"],
      V = a["Data.Unfoldable1"],
      W = a["Formless.Internal.Transform"],
      Y = a["Formless.Query"],
      ba = a["Formless.Retrieve"],
      ca = a["Formless.Types.Query"],
      X = a["Metajelo.Types"],
      ia = a["Metajelo.Validation"],
      ea = a["Metajelo.XPaths.Read"],
      qa = a["Text.URL.Validate"],
      ha = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ja = function () {
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
      da = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      Z = function Z(a, b, c) {
    this.fromOptionValue = a;
    this.toOptionLabel = b;
    this.toOptionValue = c;
  },
      la = function la(a) {
    if (a instanceof aa || a instanceof da) return a.value0;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 284, column 1 - line 284, column 34): " + [a.constructor.name]);
  },
      ta = function ta(a) {
    return e.input(k.widgetLiftWidget)([c.value(a), J.map(h.functorProps)(c.unsafeTargetValue)(c.onChange)]);
  },
      va = function va(a) {
    return m.bind(u.bindCofree(b.widgetAlternative(w.monoidArray)))(a)(function (a) {
      return g.pure(u.applicativeCofree(b.widgetAlternative(w.monoidArray)))(U.fromString(L.trim(a)));
    });
  },
      ua = function ua(a) {
    return function (b) {
      return b < a ? [] : p.range(a)(b);
    };
  },
      wa = function wa(a) {
    return "FreeTextPolicy" === a ? g.pure(t.applicativeEither)(ha.value) : "RefPolicy" === a ? g.pure(t.applicativeEither)(ja.value) : t.Left.create("Unknown Policy: '" + (a + "'"));
  },
      ka = function ka(a) {
    return function (b) {
      return H.fold(H.foldableMaybe)(w.monoidString)(J.map(K.functorMaybe)(O.show(a))(b));
    };
  };

  a = new Z(function (a) {
    return K.fromJust()(t.hush(ea.readResourceTypeGeneral(a)));
  }, O.show(X.showResourceTypeGeneral), O.show(X.showResourceTypeGeneral));

  var xa = new Z(function (a) {
    return K.fromJust()(t.hush(ea.readRelationType(a)));
  }, O.show(X.showRelationType), O.show(X.showRelationType)),
      Ja = new Z(function (a) {
    return K.fromJust()(t.hush(ea.readInstitutionType(a)));
  }, O.show(X.showInstitutionType), O.show(X.showInstitutionType)),
      Aa = new Z(function (a) {
    return K.fromJust()(t.hush(ea.readIdentifierType(a)));
  }, O.show(X.showIdentifierType), O.show(X.showIdentifierType)),
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
                return new C.DateTime(r.canonicalDate(K.fromMaybe(v.bottom(y.boundedYear))(A.toEnum(y.boundedEnumYear)(a)))(K.fromMaybe(v.bottom(y.boundedMonth))(A.toEnum(y.boundedEnumMonth)(b)))(K.fromMaybe(v.bottom(y.boundedDay))(A.toEnum(y.boundedEnumDay)(c))), new M.Time(K.fromMaybe(v.bottom(S.boundedHour))(A.toEnum(S.boundedEnumHour)(d)), K.fromMaybe(v.bottom(S.boundedMinute))(A.toEnum(S.boundedEnumMinute)(e)), K.fromMaybe(v.bottom(S.boundedSecond))(A.toEnum(S.boundedEnumSecond)(f)), K.fromMaybe(v.bottom(S.boundedMillisecond))(A.toEnum(S.boundedEnumMillisecond)(g))));
              };
            };
          };
        };
      };
    };
  }(0)(0)(0)(0)(0)(0)(0),
      fa = new F.Generic(function (a) {
    if (a instanceof ha) return new F.Inl(F.NoArguments.value);
    if (a instanceof ja) return new F.Inr(F.NoArguments.value);
    throw Error("Failed pattern match at Metajelo.FormUtil (line 232, column 1 - line 232, column 58): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof F.Inl) return ha.value;
    if (a instanceof F.Inr) return ja.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 232, column 1 - line 232, column 58): " + [a.constructor.name]);
  });

  B = new O.Show(B.genericShow(fa)(B.genericShowSum(B.genericShowConstructor(B.genericShowArgsNoArguments)(new R.IsSymbol(function () {
    return "FreeTextPolicy";
  })))(B.genericShowConstructor(B.genericShowArgsNoArguments)(new R.IsSymbol(function () {
    return "RefPolicy";
  })))));
  B = new Z(function () {
    var a = K.fromMaybe(ha.value);
    return function (b) {
      return a(t.hush(wa(b)));
    };
  }(), O.show(B), O.show(B));

  var Ka = new J.Functor(function (a) {
    return function (b) {
      if (b instanceof aa) return aa.create(J.map(K.functorMaybe)(a)(b.value0));
      if (b instanceof da) return da.create(J.map(K.functorMaybe)(a)(b.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 271, column 1 - line 273, column 48): " + [a.constructor.name, b.constructor.name]);
    };
  }),
      ya = function ya(a) {
    return function (d) {
      return function (l) {
        return f.step(l)(function () {
          var f = K.isJust(l) ? !0 : !1;
          return m.bind(b.widgetBind)(e.select(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([c.value(K.maybe("")(d.toOptionValue)(l)), J.map(h.functorProps)(function () {
            var a = d.fromOptionValue;
            return function (b) {
              return a(c.unsafeTargetValue(b));
            };
          }())(c.onChange)])(p.cons(e.option(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([c.disabled(f)])([e.text(k.widgetLiftWidget)("Select ...")]))(J.mapFlipped(J.functorArray)(A.upFromIncluding(a.Enum1())(V.unfoldable1Array)(v.bottom(a.Bounded0())))(function (a) {
            return e.option(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([c.value((0, d.toOptionValue)(a))])([e.text(k.widgetLiftWidget)((0, d.toOptionLabel)(a))]);
          }))))(function (c) {
            return g.pure(b.widgetApplicative)(ya(a)(d)(new K.Just(c)));
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
            return H.fold(a)(c)(J.map(b)(d)(e));
          };
        };
      };
    };
  },
      Da = function Da(a) {
    a = za(H.foldableMaybe)(K.functorMaybe)(w.monoidString)(U.toString)(a);
    a = f.debounce(w.monoidArray)(500)(a)(ta);
    return va(a);
  },
      Ea = function Ea(a) {
    return K.maybe(w.mempty(b.widgetMonoid(w.monoidArray)))(function (d) {
      return e.div(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([c.style({
        color: "red"
      })])([e.text(k.widgetLiftWidget)(ia.toText(a)(d))]);
    });
  },
      Fa = new q.Eq(I.genericEq(fa)(I.genericEqSum(I.genericEqConstructor(I.genericEqNoArguments))(I.genericEqConstructor(I.genericEqNoArguments)))),
      Ga = new E.Ord(function () {
    return Fa;
  }, function (a) {
    return function (b) {
      return G.genericCompare(fa)(G.genericOrdSum(G.genericOrdConstructor(G.genericOrdNoArguments))(G.genericOrdConstructor(G.genericOrdNoArguments)))(a)(b);
    };
  }),
      La = new A.Enum(function () {
    return Ga;
  }, D.genericPred(fa)(D.genericEnumSum(D.genericEnumConstructor(D.genericEnumNoArguments))(z.genericTopConstructor(z.genericTopNoArguments))(D.genericEnumConstructor(D.genericEnumNoArguments))(z.genericBottomConstructor(z.genericBottomNoArguments))), D.genericSucc(fa)(D.genericEnumSum(D.genericEnumConstructor(D.genericEnumNoArguments))(z.genericTopConstructor(z.genericTopNoArguments))(D.genericEnumConstructor(D.genericEnumNoArguments))(z.genericBottomConstructor(z.genericBottomNoArguments))));

  R = function R(a) {
    return function (b) {
      return b instanceof K.Nothing ? "(None)" : ka(a)(b);
    };
  };

  q = new Z(function (a) {
    return t.hush(ea.readBoolean(a));
  }, R(O.showBoolean), ka(O.showBoolean));
  I = new Z(function () {
    var a = m.join(K.bindMaybe);
    return function (b) {
      return a(t.hush(ea.readInstitutionContactType(b)));
    };
  }(), R(X.showInstitutionContactType), ka(X.showInstitutionContactType));
  X = new Z(function () {
    var a = m.join(K.bindMaybe);
    return function (b) {
      return a(t.hush(ea.readPolicyType(b)));
    };
  }(), R(X.showPolicyType), ka(X.showPolicyType));

  var Ma = function Ma(a) {
    return J.voidRight(b.widgetFunctor)(!a)(e.input(k.widgetLiftWidget)([c._type("checkbox"), c.checked(a), c.onChange]));
  },
      Ha = function Ha(a) {
    var c = Ma(a);
    return f.step(a)(m.bind(b.widgetBind)(c)(function (a) {
      return g.pure(b.widgetApplicative)(Ha(a));
    }));
  },
      Na = new v.Bounded(function () {
    return Ga;
  }, z.genericBottom(fa)(z.genericBottomSum(z.genericBottomConstructor(z.genericBottomNoArguments))), z.genericTop(fa)(z.genericTopSum(z.genericTopConstructor(z.genericTopNoArguments))));

  z = new A.BoundedEnum(function () {
    return Na;
  }, function () {
    return La;
  }, D.genericCardinality(fa)(D.genericBoundedEnumSum(D.genericBoundedEnumConstructor(D.genericBoundedEnumNoArguments))(D.genericBoundedEnumConstructor(D.genericBoundedEnumNoArguments))), D.genericFromEnum(fa)(D.genericBoundedEnumSum(D.genericBoundedEnumConstructor(D.genericBoundedEnumNoArguments))(D.genericBoundedEnumConstructor(D.genericBoundedEnumNoArguments))), D.genericToEnum(fa)(D.genericBoundedEnumSum(D.genericBoundedEnumConstructor(D.genericBoundedEnumNoArguments))(D.genericBoundedEnumConstructor(D.genericBoundedEnumNoArguments))));

  var Oa = new l.Apply(function () {
    return Ka;
  }, function (a) {
    return function (b) {
      if (a instanceof aa && b instanceof aa || a instanceof aa && b instanceof da || a instanceof da && b instanceof aa) return aa.create(l.apply(K.applyMaybe)(a.value0)(b.value0));
      if (a instanceof da && b instanceof da) return da.create(l.apply(K.applyMaybe)(a.value0)(b.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 274, column 1 - line 278, column 63): " + [a.constructor.name, b.constructor.name]);
    };
  }),
      Pa = new g.Applicative(function () {
    return Oa;
  }, function (a) {
    return aa.create(new K.Just(a));
  }),
      Ia = function Ia(a) {
    return function (d) {
      var h = T.snd(d),
          l = T.fst(d),
          n = new aa(K.Nothing.value);

      d = function () {
        var a = E.max(E.ordInt)(0)(l - p.length(h) | 0);
        return N.append(N.semigroupArray)(J.map(J.functorArray)(g.pure(Pa))(h))(J.mapFlipped(J.functorArray)(ua(1)(a))(function (a) {
          return n;
        }));
      }();

      var q = function q(a) {
        return f.step(a)(m.bind(b.widgetBind)(J.voidRight(b.widgetFunctor)(da.create(la(a)))(e.button(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([c.onClick])([e.text(k.widgetLiftWidget)("Delete")])))(function (a) {
          return g.pure(b.widgetApplicative)(q(a));
        }));
      },
          t = function t(c) {
        return e.li_(u.shiftMapCofree(w.monoidArray))([])(m.bind(u.bindCofree(b.widgetAlternative(w.monoidArray)))(a(la(c)))(function (a) {
          return m.bind(u.bindCofree(b.widgetAlternative(w.monoidArray)))(q(new aa(a)))(function (a) {
            return g.pure(u.applicativeCofree(b.widgetAlternative(w.monoidArray)))(a);
          });
        }));
      },
          r = function r(a) {
        if (a instanceof da) return f.step(new da(K.Nothing.value))(w.mempty(b.widgetMonoid(w.monoidArray)));
        if (a instanceof aa) return t(a);
        throw Error("Failed pattern match at Metajelo.FormUtil (line 305, column 23 - line 307, column 35): " + [a.constructor.name]);
      };

      return e.div_(u.shiftMapCofree(w.monoidArray))([])(m.bind(u.bindCofree(b.widgetAlternative(w.monoidArray)))(function (a) {
        return function (d) {
          return f.loopS(w.monoidArray)(new T.Tuple(a, d))(function (a) {
            return e.div_(u.shiftMapCofree(w.monoidArray))([])(function () {
              T.fst(a);
              var d = T.snd(a);
              return m.bind(u.bindCofree(b.widgetAlternative(w.monoidArray)))(f.step(0)(J.voidRight(b.widgetFunctor)(g.pure(u.applicativeCofree(b.widgetAlternative(w.monoidArray)))(1))(e.button(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([c.onClick])([e.text(k.widgetLiftWidget)("Add item")]))))(function (a) {
                return m.bind(u.bindCofree(b.widgetAlternative(w.monoidArray)))(Q.traverse(Q.traversableArray)(u.applicativeCofree(b.widgetAlternative(w.monoidArray)))(r)(d))(function (c) {
                  c = p.filter(Ba)(c);
                  var d = p.length(c) + a | 0,
                      e = J.mapFlipped(J.functorArray)(ua(1)(a))(function (a) {
                    return n;
                  });
                  return g.pure(u.applicativeCofree(b.widgetAlternative(w.monoidArray)))(T.Tuple.create(d)(N.append(N.semigroupArray)(c)(e)));
                });
              });
            }());
          });
        };
      }(l)(d))(function (a) {
        return g.pure(u.applicativeCofree(b.widgetAlternative(w.monoidArray)))(P.second(P.strongFn)(function () {
          var a = J.map(J.functorArray)(la);
          return function (b) {
            return p.catMaybes(a(b));
          };
        }())(a));
      }));
    };
  };

  d.menu = function (a) {
    return function (d) {
      return function (f) {
        return function (g) {
          return function (l) {
            return function (l) {
              return function (m) {
                return function (m) {
                  return function (n) {
                    return e.select(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([c.defaultValue((0, d.toOptionValue)(ba.getInput(a)(g)()(n)(m))), J.map(h.functorProps)(function () {
                      var b = Y.set(a)(l)()(n),
                          e = d.fromOptionValue;
                      return function (a) {
                        return b(e(c.unsafeTargetValue(a)));
                      };
                    }())(c.onChange)])(J.mapFlipped(J.functorArray)(A.upFromIncluding(f.Enum1())(V.unfoldable1Array)(v.bottom(f.Bounded0())))(function (a) {
                      return e.option(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([c.value((0, d.toOptionValue)(a))])([e.text(k.widgetLiftWidget)((0, d.toOptionLabel)(a))]);
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

  d.menuSignal = ya;
  d.textInput = Da;

  d.urlInput = function (a) {
    if (a instanceof t.Left) var c = "";else if (a instanceof t.Right) c = U.toString(qa.urlToNEString(a.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 167, column 15 - line 169, column 48): " + [a.constructor.name]);
    if (a instanceof t.Left) var d = a.value0;else if (a instanceof t.Right) d = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 163, column 15 - line 165, column 20): " + [a.constructor.name]);
    return m.bind(u.bindCofree(b.widgetAlternative(w.monoidArray)))(Da(U.fromString(c)))(function (a) {
      var c = m.bind(u.bindCofree(b.widgetAlternative(w.monoidArray))),
          e = g.pure(u.applicativeCofree(b.widgetAlternative(w.monoidArray)));
      if (a instanceof K.Nothing) a = new t.Left(d);else if (a instanceof K.Just) a = qa.parsePublicURL(U.toString(a.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 154, column 19 - line 156, column 46): " + [a.constructor.name]);
      return c(e(a))(function (a) {
        return m.discard(m.discardUnit)(u.bindCofree(b.widgetAlternative(w.monoidArray)))(f.display(function () {
          if (a instanceof t.Right) return w.mempty(b.widgetMonoid(w.monoidArray));
          if (a instanceof t.Left) return Ea(ia.toTextString)(new K.Just(a.value0));
          throw Error("Failed pattern match at Metajelo.FormUtil (line 157, column 13 - line 159, column 40): " + [a.constructor.name]);
        }()))(function () {
          return g.pure(u.applicativeCofree(b.widgetAlternative(w.monoidArray)))(a);
        });
      });
    });
  };

  d.checkBoxS = Ha;
  d.FreeTextPolicy = ha;
  d.RefPolicy = ja;

  d.formSaveButton = function (a) {
    a = a.dirty ? [c.onClick] : [c.disabled(!0)];
    return e.button(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)(a)([e.text(k.widgetLiftWidget)("Save")]);
  };

  d.arrayView = Ia;

  d.nonEmptyArrayView = function (a) {
    return function (c) {
      return m.bind(u.bindCofree(b.widgetAlternative(w.monoidArray)))(Ia(a)(P.second(P.strongFn)(za(H.foldableMaybe)(K.functorMaybe)(w.monoidArray)(x.toArray))(c)))(function (a) {
        return g.pure(u.applicativeCofree(b.widgetAlternative(w.monoidArray)))(P.second(P.strongFn)(x.fromArray)(a));
      });
    };
  };

  d.errorDisplay = Ea;

  d.initFormState = function (a) {
    return function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return function (e) {
              return {
                validity: ca.Incomplete.value,
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

  d.formatXsdDate = function (a) {
    var b = n.formatDateTime("YYYY-MM-DD")(a);
    return function () {
      if (b instanceof t.Left) return new t.Left(b.value0);

      if (b instanceof t.Right) {
        var a = U.fromString(b.value0);
        if (a instanceof K.Nothing) return new t.Left("Empty Date output from formatXsdDate");
        if (a instanceof K.Just) return new t.Right(a.value0);
        throw Error("Failed pattern match at Metajelo.FormUtil (line 397, column 27 - line 399, column 30): " + [a.constructor.name]);
      }

      throw Error("Failed pattern match at Metajelo.FormUtil (line 395, column 15 - line 399, column 30): " + [b.constructor.name]);
    }();
  };

  d.initDate = Ca;
  d.isOptionMaybeBoolean = q;
  d.isOptionIdentifierType = Aa;
  d.isOptionInstitutionType = Ja;
  d.isOptionMaybeInstitutionContactType = I;
  d.isOptionMaybePolicyType = X;
  d.isOptionRelationType = xa;
  d.isOptionResourceTypeGeneral = a;
  d.eqPolPolType = Fa;
  d.boundedEnumPolPolType = z;
  d.isOptionPolPolType = B;
})(PS);

(function (a) {
  a["Metajelo.View"] = a["Metajelo.View"] || {};

  var d = a["Metajelo.View"],
      f = a["Concur.Core.LiftWidget"],
      k = a["Concur.Core.Types"],
      h = a["Concur.React.DOM"],
      b = a["Concur.React.Props"],
      e = a["Control.Bind"],
      c = a["Control.Category"],
      g = a["Data.Array"],
      l = a["Data.Array.NonEmpty"],
      m = a["Data.Array.NonEmpty.Internal"],
      u = a["Data.Foldable"],
      p = a["Data.Functor"],
      x = a["Data.HeytingAlgebra"],
      v = a["Data.Maybe"],
      r = a["Data.Monoid"],
      y = a["Data.Profunctor.Strong"],
      C = a["Data.Semigroup"],
      t = a["Data.Show"],
      A = a["Data.String.CodePoints"],
      q = a["Data.String.NonEmpty.Internal"],
      H = a["Data.String.Utils"],
      n = a["Data.Unfoldable"],
      J = a["Data.Unfoldable1"],
      F = a["Foreign.Object"],
      z = a["Metajelo.Types"],
      D = a["Text.Email.Parser"],
      I = a["Text.URL.Validate"],
      G = function () {
    var a = p.map(p.functorArray)(A.singleton);
    return function (b) {
      return a(A.toCodePointArray(b));
    };
  }(),
      B = function B(a) {
    var b = h.text(a);
    return function (a) {
      return b(q.toString(a));
    };
  },
      K = h["span'"](k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([h.text(f.widgetLiftWidget)(" ")]),
      w = function () {
    var a = u.intercalate(u.foldableArray)(r.monoidArray)([K]),
        b = p.map(p.functorArray)(J.singleton(J.unfoldable1Array));
    return function (c) {
      return a(b(c));
    };
  }(),
      E = function E(a) {
    return "metajelo_" + a;
  },
      P = E("icon-check-square-o"),
      N = E("icon"),
      O = E("icon-minus-square-o"),
      L = E("icon-square-o"),
      U = function U(a) {
    return h.span(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("institutionName"))])([B(f.widgetLiftWidget)(a.institutionName)]);
  },
      R = function R(a) {
    return function (a) {
      return u.foldMap(u.foldableMaybe)(r.monoidArray)(c.identity(c.categoryFn))(g.init(a));
    };
  },
      M = function M(a) {
    return function (b) {
      return function (d) {
        return function (e) {
          return function (f) {
            var g = F.fromFoldableWith(a)(C.append(e)),
                h = p.map(b)(y.fanout(c.categoryFn)(y.strongFn)(f)(J.singleton(d)));
            return function (a) {
              return g(h(a));
            };
          };
        };
      };
    };
  },
      S = function S(a) {
    var c = D.toString(a.emailAddress),
        d = h.text(f.widgetLiftWidget);
    if (a.contactType instanceof v.Nothing) a = ".";else if (a.contactType instanceof v.Just) a = " (" + (t.show(z.showInstitutionContactType)(a.contactType.value0) + ").");else throw Error("Failed pattern match at Metajelo.View (line 198, column 22 - line 200, column 39): " + [a.contactType.constructor.name]);
    d = d(a);
    return h["span'"](k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)(C.append(C.semigroupArray)([h.text(f.widgetLiftWidget)("Institution Contact: "), h.a(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("institutionContact")), b.href("mailto:" + c)])([h.text(f.widgetLiftWidget)(c)])])([d]));
  },
      Q = function Q(a) {
    return h["cite'"](k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([B(f.widgetLiftWidget)(a)]);
  },
      T = function T(a) {
    if (a.idType instanceof z.ARK) return h.a(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.href(q.toString(a.id))])([Q(a.id)]);

    if (a.idType instanceof z.ArXiv) {
      var c = "https://arxiv.org/abs/" + q.toString(a.id);
      return h.a(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.href(c)])([Q(a.id)]);
    }

    if (a.idType instanceof z.Bibcode) return c = "https://ui.adsabs.harvard.edu/abs/" + (q.toString(a.id) + "/abstract"), h.a(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.href(c)])([Q(a.id)]);
    if (a.idType instanceof z.DOI) return c = "https://doi.org/" + q.toString(a.id), h.a(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.href(c)])([Q(a.id)]);
    if (a.idType instanceof z.EAN13) return Q(a.id);
    if (a.idType instanceof z.EISSN) return c = "https://www.worldcat.org/ISSN/" + q.toString(a.id), h.a(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.href(c)])([Q(a.id)]);
    if (a.idType instanceof z.Handle) return c = "http://hdl.handle.net/" + q.toString(a.id), h.a(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.href(c)])([Q(a.id)]);
    if (a.idType instanceof z.IGSN) return c = "http://igsn.org/" + q.toString(a.id), h.a(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.href(c)])([Q(a.id)]);
    if (a.idType instanceof z.ISBN) return Q(a.id);
    if (a.idType instanceof z.ISSN) return c = "https://www.worldcat.org/ISSN/" + q.toString(a.id), h.a(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.href(c)])([Q(a.id)]);
    if (a.idType instanceof z.ISTC) return Q(a.id);
    if (a.idType instanceof z.LISSN) return c = "https://www.worldcat.org/ISSN/" + q.toString(a.id), h.a(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.href(c)])([Q(a.id)]);
    if (a.idType instanceof z.LSID) return c = "http://www.lsid.info/resolver/?lsid=" + q.toString(a.id), h.a(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.href(c)])([Q(a.id)]);
    if (a.idType instanceof z.PMID) return c = "https://www.ncbi.nlm.nih.gov/pubmed/" + q.toString(a.id), h.a(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.href(c)])([Q(a.id)]);
    if (a.idType instanceof z.PURL) return h.a(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.href(q.toString(a.id))])([Q(a.id)]);
    if (a.idType instanceof z.UPC) return Q(a.id);
    if (a.idType instanceof z.URL) return h.a(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.href(q.toString(a.id))])([Q(a.id)]);
    if (a.idType instanceof z.URN) return Q(a.id);
    throw Error("Failed pattern match at Metajelo.View (line 220, column 1 - line 220, column 47): " + [a.constructor.name]);
  },
      V = function V(a) {
    return h.span(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("identifier"))])([h.text(f.widgetLiftWidget)(t.show(z.showIdentifierType)(a.idType) + ": "), T(a)]);
  },
      W = function W(a) {
    return h.span(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("relatedId"))])([h.text(f.widgetLiftWidget)(t.show(z.showRelationType)(a.relType)), K, V({
      id: a.id,
      idType: a.idType
    })]);
  },
      Y = function Y(a) {
    return b.classList(p.map(p.functorArray)(v.Just.create)(a));
  },
      ba = function ba(a) {
    return h.div(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("institutionPolicy"))])(w([function (a) {
      var c = function () {
        if (a instanceof v.Nothing) return {
          text: "May apply to product (unverified)",
          cls: L
        };
        if (a instanceof v.Just && a.value0) return {
          text: "Applies to product",
          cls: P
        };
        if (a instanceof v.Just && !a.value0) return {
          text: "Does not apply to product",
          cls: O
        };
        throw Error("Failed pattern match at Metajelo.View (line 271, column 10 - line 274, column 73): " + [a.constructor.name]);
      }();

      return h.span(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([Y([N, c.cls])])([function (a) {
        return h.span(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("applies_info"))])([h.text(f.widgetLiftWidget)(a)]);
      }(c.text)]);
    }(a.appliesToProduct), u.foldMap(u.foldableMaybe)(k.widgetMonoid(r.monoidArray))(function (a) {
      return h["span'"](k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([h.span(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("policyType"))])([h.text(f.widgetLiftWidget)(t.show(z.showPolicyType)(a))]), h.text(f.widgetLiftWidget)(" Policy:")]);
    })(a.policyType), function (a) {
      var c = h.span(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("policy"))]),
          d = J.singleton(J.unfoldable1Array);
      if (a instanceof z.FreeTextPolicy) a = B(f.widgetLiftWidget)(a.value0);else if (a instanceof z.RefPolicy) a = I.urlToString(a.value0), a = h.a(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.href(a)])([h.text(f.widgetLiftWidget)(a)]);else throw Error("Failed pattern match at Metajelo.View (line 264, column 5 - line 267, column 40): " + [a.constructor.name]);
      return c(d(a));
    }(a.policy)]));
  },
      ca = function ca(a) {
    return function (b) {
      return function (c) {
        if (b) return a;

        if (u.any(u.foldableArray)(x.heytingAlgebraBoolean)(function (b) {
          return H.endsWith(b)(a);
        })([";", ".", ","])) {
          var d = G(a);
          return H.fromCharArray(R(r.monoidString)(d)) + c;
        }

        return a + c;
      };
    };
  },
      X = function X(a) {
    var c = U(a),
        d = h["span'"](k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([h.text(f.widgetLiftWidget)("("), h.span(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("institutionId"))])([V(a.institutionID)]), h.text(f.widgetLiftWidget)("; "), h.span(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("institutionType"))])([h.text(f.widgetLiftWidget)(t.show(z.showInstitutionType)(a.institutionType))]), h.text(f.widgetLiftWidget)(ca(")")(v.isNothing(a.superOrganizationName))(","))]);
    if (a.superOrganizationName instanceof v.Nothing) var e = r.mempty(k.widgetMonoid(r.monoidArray));else if (a.superOrganizationName instanceof v.Just) e = h["span'"](k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([h.text(f.widgetLiftWidget)("a member of "), h.span(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("superOrg"))])([h.text(f.widgetLiftWidget)(ca(q.toString(a.superOrganizationName.value0))(!1)("."))])]);else throw Error("Failed pattern match at Metajelo.View (line 160, column 7 - line 166, column 10): " + [a.superOrganizationName.constructor.name]);
    return w([c, d, e, S(a.institutionContact), h["span'"](k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([h.a(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("missionStatement")), b.href(I.urlToString(a.institutionSustainability.missionStatementURL))])([h.text(f.widgetLiftWidget)("Mission Statement")]), h.text(f.widgetLiftWidget)("; "), h.a(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("fundingStatement")), b.href(I.urlToString(a.institutionSustainability.fundingStatementURL))])([h.text(f.widgetLiftWidget)("Funding Statement")]), h.text(f.widgetLiftWidget)(".")]), h.ul(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("institutionPolicies"))])(p.map(p.functorArray)(function (a) {
      return h["li'"](k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([ba(a)]);
    })(l.toArray(a.institutionPolicies))), function (a) {
      if (a) a = "Versioned";else {
        if (a) throw Error("Failed pattern match at Metajelo.View (line 187, column 14 - line 189, column 31): " + [a.constructor.name]);
        a = "Unversioned";
      }
      return h.span(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("versioning"))])([h.text(f.widgetLiftWidget)(a)]);
    }(a.versioning)]);
  },
      ia = function ia(a) {
    if (a.resourceID instanceof v.Just) var c = h["span'"](k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([V(a.resourceID.value0), h.text(f.widgetLiftWidget)(".")]);else if (a.resourceID instanceof v.Nothing) c = r.mempty(k.widgetMonoid(r.monoidArray));else throw Error("Failed pattern match at Metajelo.View (line 138, column 17 - line 140, column 24): " + [a.resourceID.constructor.name]);
    var d = [h.span(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("creator"))])([B(f.widgetLiftWidget)(a.basicMetadata.creator)]), h.span(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("pubyear"))])([B(f.widgetLiftWidget)(a.basicMetadata.publicationYear)]), h.span(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("title"))])([h.text(f.widgetLiftWidget)(ca(q.toString(a.basicMetadata.title))(v.isNothing(a.resourceID))(","))])];
    c = C.append(C.semigroupArray)(d)([h["span'"](k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([U(a.location), h.text(f.widgetLiftWidget)(".")]), c]);
    return h.div(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("product"))])(w(C.append(C.semigroupArray)([h.span(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("productCitation"))])([h["cite'"](k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)(w(c))])])(X(a.location))));
  };

  d.spacify = w;

  d.mkRecordWidget = function (a) {
    var c = function () {
      var c = p.map(m.functorNonEmptyArray)(function (a) {
        return h.li(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("relatedIdItem"))])([a]);
      })(p.map(m.functorNonEmptyArray)(W)(a.relatedIdentifiers));
      return h.ul(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("relatedIdList"))])(l.toArray(c));
    }(),
        d = M(m.foldableNonEmptyArray)(m.functorNonEmptyArray)(m.unfoldable1NonEmptyArray)(m.semigroupNonEmptyArray)(function (a) {
      return t.show(z.showResourceTypeGeneral)(a.resourceType.generalType) + (": " + a.resourceType.description);
    })(a.supplementaryProducts);

    t.show(z.showIdentifierType)(a.identifier.idType);
    return h.div(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("record"))])([h.span(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("productsHeader"))])([h.text(f.widgetLiftWidget)("Supplementary materials for "), V(a.identifier)]), h.ul(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("productGroupList"))])(p.map(p.functorArray)(function (a) {
      var c = h.li(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("productGroup"))]),
          g = h["div'"](k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap),
          m = h.text(f.widgetLiftWidget)(a),
          q = h["br'"](f.widgetLiftWidget);
      a = e.join(e.bindArray)(n.fromMaybe(n.unfoldableArray)(p.map(v.functorMaybe)(l.toArray)(F.lookup(a)(d))));
      a = h["div'"](k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)(p.map(p.functorArray)(ia)(a));
      return c([g([m, q, a])]);
    })(F.keys(d))), h.span(k.widgetMultiAlternative(r.monoidArray))(k.widgetShiftMap)([b.className(E("relatedIdentifiersHeader"))])([h.text(f.widgetLiftWidget)("Related Identifiers")]), c]);
  };

  d.mkSupplementaryProductWidget = ia;
  d.locElems = X;
  d.contactWidg = S;
  d.ipolicyWidg = ba;
})(PS);

(function (a) {
  a["Metajelo.Forms.InstitutionContact"] = a["Metajelo.Forms.InstitutionContact"] || {};

  var d = a["Metajelo.Forms.InstitutionContact"],
      f = a["Concur.Core.FRP"],
      k = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Props"],
      b = a["Concur.Core.Types"],
      e = a["Concur.React.DOM"],
      c = a["Concur.React.Props"],
      g = a["Control.Applicative"],
      l = a["Control.Bind"],
      m = a["Control.Cofree"],
      u = a["Data.Either"],
      p = a["Data.Enum"],
      x = a["Data.Eq"],
      v = a["Data.Foldable"],
      r = a["Data.Functor"],
      y = a["Data.Maybe"],
      C = a["Data.Monoid"],
      t = a["Data.Newtype"],
      A = a["Data.Symbol"],
      q = a["Formless.Component"],
      H = a["Formless.Internal.Transform"],
      n = a["Formless.Query"],
      J = a["Formless.Retrieve"],
      F = a["Formless.Transform.Record"],
      z = a["Formless.Transform.Row"],
      D = a["Formless.Types.Form"],
      I = a["Heterogeneous.Mapping"],
      G = a["Metajelo.CSS.UI.ClassProps"],
      B = a["Metajelo.FormUtil"],
      K = a["Metajelo.Types"],
      w = a["Metajelo.Validation"],
      E = a["Metajelo.View"],
      P = a["Text.Email.Parser"],
      N = {
    email1: w.emailFormat(b.widgetMonad),
    contactType: w.dummy(b.widgetMonad)
  },
      O = function O(a) {
    return function (a) {
      return function (b) {
        return z.mkSProxies()(a)(b)(D.FormProxy.value);
      };
    };
  },
      L = new t.Newtype(function (a) {
    return a;
  }, function (a) {
    return a;
  }),
      U = {
    email1: "",
    contactType: y.Nothing.value
  },
      R = function R(a) {
    if (a instanceof y.Nothing) return U;
    if (a instanceof y.Just) return {
      email1: P.toString(a.value0.emailAddress),
      contactType: a.value0.contactType
    };
    throw Error("Failed pattern match at Metajelo.Forms.InstitutionContact (line 49, column 1 - line 49, column 57): " + [a.constructor.name]);
  },
      M = function M(a) {
    return l.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(C.monoidArray))(b.widgetShiftMap)([e.input(k.widgetLiftWidget)([G.contactEmail, c.defaultValue(J.getInput(new A.IsSymbol(function () {
      return "email1";
    }))(L)()(O()(L)(z.makeSProxiesCons(new A.IsSymbol(function () {
      return "contactType";
    }))()(z.makeSProxiesCons(new A.IsSymbol(function () {
      return "email1";
    }))()(z.makeSProxiesNil))).email1)(a.form)), r.map(h.functorProps)(function () {
      var a = n.setValidate(new A.IsSymbol(function () {
        return "email1";
      }))(L)()(O()(L)(z.makeSProxiesCons(new A.IsSymbol(function () {
        return "contactType";
      }))()(z.makeSProxiesCons(new A.IsSymbol(function () {
        return "email1";
      }))()(z.makeSProxiesNil))).email1);
      return function (b) {
        return a(c.unsafeTargetValue(b));
      };
    }())(c.onChange)]), B.errorDisplay(w.toTextFieldError)(J.getError(new A.IsSymbol(function () {
      return "email1";
    }))(L)()(O()(L)(z.makeSProxiesCons(new A.IsSymbol(function () {
      return "contactType";
    }))()(z.makeSProxiesCons(new A.IsSymbol(function () {
      return "email1";
    }))()(z.makeSProxiesNil))).email1)(a.form)), e.span_(b.widgetShiftMap)([G.contactType])(B.menu(new A.IsSymbol(function () {
      return "contactType";
    }))(B.isOptionMaybeInstitutionContactType)(p.boundedEnumMaybe(K.smallBoundedInstitutionContactType)(K.boundedEnumInstitutionContactType))(L)()(L)()(a.form)(O()(L)(z.makeSProxiesCons(new A.IsSymbol(function () {
      return "contactType";
    }))()(z.makeSProxiesCons(new A.IsSymbol(function () {
      return "email1";
    }))()(z.makeSProxiesNil))).contactType)), e["div'"](b.widgetMultiAlternative(C.monoidArray))(b.widgetShiftMap)([r.voidRight(b.widgetFunctor)(n.submit)(B.formSaveButton(a))])]))(function (c) {
      return l.bind(b.widgetBind)(q.eval()()(x.eqRowCons(x.eqRowCons(x.eqRowNil)()(new A.IsSymbol(function () {
        return "email1";
      }))(D.eqInputField(x.eqString)))()(new A.IsSymbol(function () {
        return "contactType";
      }))(D.eqInputField(y.eqMaybe(K.eqInstitutionContactType))))(H.inputFieldsToFormFieldsCons(new A.IsSymbol(function () {
        return "contactType";
      }))()(H.inputFieldsToFormFieldsCons(new A.IsSymbol(function () {
        return "email1";
      }))()(H.inputFieldsToFormFieldsNil)())())(H.inputFieldsToInputCons(new A.IsSymbol(function () {
        return "contactType";
      }))()(H.inputFieldsToInputCons(new A.IsSymbol(function () {
        return "email1";
      }))()(H.inputFieldsToInputNil)())())(H.consCountErrors(new A.IsSymbol(function () {
        return "contactType";
      }))()(H.consCountErrors(new A.IsSymbol(function () {
        return "email1";
      }))()(H.nilCountErrors)))(H.consAllTouched(new A.IsSymbol(function () {
        return "contactType";
      }))()(H.consAllTouched(new A.IsSymbol(function () {
        return "email1";
      }))()(H.nilAllTouched)))(H.setFormFieldsTouchedCons(new A.IsSymbol(function () {
        return "contactType";
      }))()(H.setFormFieldsTouchedCons(new A.IsSymbol(function () {
        return "email1";
      }))()(H.setFormFieldsTouchedNil)())())(H.replaceFormFieldInputsTouchedCons(new A.IsSymbol(function () {
        return "contactType";
      }))(D.newtypeInputField)(D.newtypeFormField)()()()(H.replaceFormFieldInputsTouchedCons(new A.IsSymbol(function () {
        return "email1";
      }))(D.newtypeInputField)(D.newtypeFormField)()()()(H.replaceFormFieldInputsTouchedNil)))(H.modifyAllCons(new A.IsSymbol(function () {
        return "contactType";
      }))(D.newtypeInputFunction)(D.newtypeFormField)()()()(H.modifyAllCons(new A.IsSymbol(function () {
        return "email1";
      }))(D.newtypeInputFunction)(D.newtypeFormField)()()()(H.modifyAllNil)))(H.applyToValidationCons(new A.IsSymbol(function () {
        return "contactType";
      }))(b.widgetMonad)()(L)()()(H.applyToValidationCons(new A.IsSymbol(function () {
        return "email1";
      }))(b.widgetMonad)()(L)()()(H.applyToValidationNil(b.widgetMonad))))(H.formFieldsToMaybeOutputCons(new A.IsSymbol(function () {
        return "contactType";
      }))()(H.formFieldsToMaybeOutputCons(new A.IsSymbol(function () {
        return "email1";
      }))()(H.formFieldsToMaybeOutputNil)())())(L)(L)(L)(L)(L)(L)(L)(L)(b.widgetMonad)(c)(a))(function (a) {
        if (a instanceof u.Left) return M(a.value0);
        if (a instanceof u.Right) return a = F.unwrapOutputFields(L)(I.hmapRecord()(I.mapRecordWithIndexCons(new A.IsSymbol(function () {
          return "contactType";
        }))(I.constMapping(F.unwrapField(D.newtypeOutputField)))(I.mapRecordWithIndexCons(new A.IsSymbol(function () {
          return "email1";
        }))(I.constMapping(F.unwrapField(D.newtypeOutputField)))(I.mapRecordWithIndexNil)()())()()))(a.value0), g.pure(b.widgetApplicative)({
          emailAddress: a.email1,
          contactType: a.contactType
        });
        throw Error("Failed pattern match at Metajelo.Forms.InstitutionContact (line 75, column 3 - line 79, column 70): " + [a.constructor.name]);
      });
    });
  };

  d.contactSignal = function (a) {
    var c = function c(a) {
      return f.step(a)(l.bind(b.widgetBind)(g.pure(b.widgetApplicative)(F.wrapInputFields(L)(I.hmapRecord()(I.mapRecordWithIndexCons(new A.IsSymbol(function () {
        return "contactType";
      }))(I.constMapping(F.wrapField(D.newtypeInputField)))(I.mapRecordWithIndexCons(new A.IsSymbol(function () {
        return "email1";
      }))(I.constMapping(F.wrapField(D.newtypeInputField)))(I.mapRecordWithIndexNil)()())()()))(R(a))))(function (d) {
        return l.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(C.monoidArray))(b.widgetShiftMap)([M(B.initFormState()(H.inputFieldsToFormFieldsCons(new A.IsSymbol(function () {
          return "contactType";
        }))()(H.inputFieldsToFormFieldsCons(new A.IsSymbol(function () {
          return "email1";
        }))()(H.inputFieldsToFormFieldsNil)())())(L)(L)(d)(N)), v.foldMap(v.foldableMaybe)(b.widgetMonoid(C.monoidArray))(E.contactWidg)(a)]))(function (a) {
          return g.pure(b.widgetApplicative)(c(new y.Just(a)));
        });
      }));
    };

    return e.div_(m.shiftMapCofree(C.monoidArray))([G.institutionContact])(c(a));
  };
})(PS);

(function (a) {
  a["Metajelo.Forms.InstitutionPolicy"] = a["Metajelo.Forms.InstitutionPolicy"] || {};

  var d = a["Metajelo.Forms.InstitutionPolicy"],
      f = a["Concur.Core.FRP"],
      k = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Props"],
      b = a["Concur.Core.Types"],
      e = a["Concur.React.DOM"],
      c = a["Concur.React.Props"],
      g = a["Control.Applicative"],
      l = a["Control.Bind"],
      m = a["Control.Cofree"],
      u = a["Data.Either"],
      p = a["Data.Enum"],
      x = a["Data.Eq"],
      v = a["Data.Foldable"],
      r = a["Data.Functor"],
      y = a["Data.Maybe"],
      C = a["Data.Monoid"],
      t = a["Data.Show"],
      A = a["Data.String.NonEmpty.Internal"],
      q = a["Data.Symbol"],
      H = a["Effect.Class"],
      n = a["Effect.Class.Console"],
      J = a["Formless.Component"],
      F = a["Formless.Internal.Transform"],
      z = a["Formless.Query"],
      D = a["Formless.Retrieve"],
      I = a["Formless.Transform.Record"],
      G = a["Formless.Transform.Row"],
      B = a["Formless.Types.Form"],
      K = a["Formless.Validation"],
      w = a["Heterogeneous.Mapping"],
      E = a["Metajelo.CSS.UI.ClassProps"],
      P = a["Metajelo.FormUtil"],
      N = a["Metajelo.Types"],
      O = a["Metajelo.Validation"],
      L = a["Metajelo.View"],
      U = a["Text.URL.Validate"],
      R = function R(a) {
    return function (a) {
      return function (b) {
        return G.mkSProxies()(a)(b)(B.FormProxy.value);
      };
    };
  },
      M = new a["Data.Newtype"].Newtype(function (a) {
    return a;
  }, function (a) {
    return a;
  }),
      S = function S(a) {
    return l.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(C.monoidArray))(b.widgetShiftMap)([e.span_(b.widgetShiftMap)([E.policy])(P.menu(new q.IsSymbol(function () {
      return "polPolType";
    }))(P.isOptionPolPolType)(P.boundedEnumPolPolType)(M)()(M)()(a.form)(R()(M)(G.makeSProxiesCons(new q.IsSymbol(function () {
      return "appliesToProd";
    }))()(G.makeSProxiesCons(new q.IsSymbol(function () {
      return "polPolType";
    }))()(G.makeSProxiesCons(new q.IsSymbol(function () {
      return "policy";
    }))()(G.makeSProxiesCons(new q.IsSymbol(function () {
      return "policyType";
    }))()(G.makeSProxiesNil))))).polPolType)), e.input(k.widgetLiftWidget)([c.defaultValue(D.getInput(new q.IsSymbol(function () {
      return "policy";
    }))(M)()(R()(M)(G.makeSProxiesCons(new q.IsSymbol(function () {
      return "appliesToProd";
    }))()(G.makeSProxiesCons(new q.IsSymbol(function () {
      return "polPolType";
    }))()(G.makeSProxiesCons(new q.IsSymbol(function () {
      return "policy";
    }))()(G.makeSProxiesCons(new q.IsSymbol(function () {
      return "policyType";
    }))()(G.makeSProxiesNil))))).policy)(a.form)), r.map(h.functorProps)(function () {
      var a = z.setValidate(new q.IsSymbol(function () {
        return "policy";
      }))(M)()(R()(M)(G.makeSProxiesCons(new q.IsSymbol(function () {
        return "appliesToProd";
      }))()(G.makeSProxiesCons(new q.IsSymbol(function () {
        return "polPolType";
      }))()(G.makeSProxiesCons(new q.IsSymbol(function () {
        return "policy";
      }))()(G.makeSProxiesCons(new q.IsSymbol(function () {
        return "policyType";
      }))()(G.makeSProxiesNil))))).policy);
      return function (b) {
        return a(c.unsafeTargetValue(b));
      };
    }())(c.onChange)]), P.errorDisplay(O.toTextString)(D.getError(new q.IsSymbol(function () {
      return "policy";
    }))(M)()(R()(M)(G.makeSProxiesCons(new q.IsSymbol(function () {
      return "appliesToProd";
    }))()(G.makeSProxiesCons(new q.IsSymbol(function () {
      return "polPolType";
    }))()(G.makeSProxiesCons(new q.IsSymbol(function () {
      return "policy";
    }))()(G.makeSProxiesCons(new q.IsSymbol(function () {
      return "policyType";
    }))()(G.makeSProxiesNil))))).policy)(a.form)), e.span_(b.widgetShiftMap)([E.policyType])(P.menu(new q.IsSymbol(function () {
      return "policyType";
    }))(P.isOptionMaybePolicyType)(p.boundedEnumMaybe(N.smallBoundedPolicyType)(N.boundedEnumPolicyType))(M)()(M)()(a.form)(R()(M)(G.makeSProxiesCons(new q.IsSymbol(function () {
      return "appliesToProd";
    }))()(G.makeSProxiesCons(new q.IsSymbol(function () {
      return "polPolType";
    }))()(G.makeSProxiesCons(new q.IsSymbol(function () {
      return "policy";
    }))()(G.makeSProxiesCons(new q.IsSymbol(function () {
      return "policyType";
    }))()(G.makeSProxiesNil))))).policyType)), e.span_(b.widgetShiftMap)([E.applies])(P.menu(new q.IsSymbol(function () {
      return "appliesToProd";
    }))(P.isOptionMaybeBoolean)(p.boundedEnumMaybe(p.smallBoundedBoolean)(p.boundedEnumBoolean))(M)()(M)()(a.form)(R()(M)(G.makeSProxiesCons(new q.IsSymbol(function () {
      return "appliesToProd";
    }))()(G.makeSProxiesCons(new q.IsSymbol(function () {
      return "polPolType";
    }))()(G.makeSProxiesCons(new q.IsSymbol(function () {
      return "policy";
    }))()(G.makeSProxiesCons(new q.IsSymbol(function () {
      return "policyType";
    }))()(G.makeSProxiesNil))))).appliesToProd)), e["div'"](b.widgetMultiAlternative(C.monoidArray))(b.widgetShiftMap)([r.voidRight(b.widgetFunctor)(z.submit)(P.formSaveButton(a))])]))(function (c) {
      return l.bind(b.widgetBind)(J.eval()()(x.eqRowCons(x.eqRowCons(x.eqRowCons(x.eqRowCons(x.eqRowNil)()(new q.IsSymbol(function () {
        return "policyType";
      }))(B.eqInputField(y.eqMaybe(N.eqPolicyType))))()(new q.IsSymbol(function () {
        return "policy";
      }))(B.eqInputField(x.eqString)))()(new q.IsSymbol(function () {
        return "polPolType";
      }))(B.eqInputField(P.eqPolPolType)))()(new q.IsSymbol(function () {
        return "appliesToProd";
      }))(B.eqInputField(y.eqMaybe(x.eqBoolean))))(F.inputFieldsToFormFieldsCons(new q.IsSymbol(function () {
        return "appliesToProd";
      }))()(F.inputFieldsToFormFieldsCons(new q.IsSymbol(function () {
        return "polPolType";
      }))()(F.inputFieldsToFormFieldsCons(new q.IsSymbol(function () {
        return "policy";
      }))()(F.inputFieldsToFormFieldsCons(new q.IsSymbol(function () {
        return "policyType";
      }))()(F.inputFieldsToFormFieldsNil)())())())())(F.inputFieldsToInputCons(new q.IsSymbol(function () {
        return "appliesToProd";
      }))()(F.inputFieldsToInputCons(new q.IsSymbol(function () {
        return "polPolType";
      }))()(F.inputFieldsToInputCons(new q.IsSymbol(function () {
        return "policy";
      }))()(F.inputFieldsToInputCons(new q.IsSymbol(function () {
        return "policyType";
      }))()(F.inputFieldsToInputNil)())())())())(F.consCountErrors(new q.IsSymbol(function () {
        return "appliesToProd";
      }))()(F.consCountErrors(new q.IsSymbol(function () {
        return "polPolType";
      }))()(F.consCountErrors(new q.IsSymbol(function () {
        return "policy";
      }))()(F.consCountErrors(new q.IsSymbol(function () {
        return "policyType";
      }))()(F.nilCountErrors)))))(F.consAllTouched(new q.IsSymbol(function () {
        return "appliesToProd";
      }))()(F.consAllTouched(new q.IsSymbol(function () {
        return "polPolType";
      }))()(F.consAllTouched(new q.IsSymbol(function () {
        return "policy";
      }))()(F.consAllTouched(new q.IsSymbol(function () {
        return "policyType";
      }))()(F.nilAllTouched)))))(F.setFormFieldsTouchedCons(new q.IsSymbol(function () {
        return "appliesToProd";
      }))()(F.setFormFieldsTouchedCons(new q.IsSymbol(function () {
        return "polPolType";
      }))()(F.setFormFieldsTouchedCons(new q.IsSymbol(function () {
        return "policy";
      }))()(F.setFormFieldsTouchedCons(new q.IsSymbol(function () {
        return "policyType";
      }))()(F.setFormFieldsTouchedNil)())())())())(F.replaceFormFieldInputsTouchedCons(new q.IsSymbol(function () {
        return "appliesToProd";
      }))(B.newtypeInputField)(B.newtypeFormField)()()()(F.replaceFormFieldInputsTouchedCons(new q.IsSymbol(function () {
        return "polPolType";
      }))(B.newtypeInputField)(B.newtypeFormField)()()()(F.replaceFormFieldInputsTouchedCons(new q.IsSymbol(function () {
        return "policy";
      }))(B.newtypeInputField)(B.newtypeFormField)()()()(F.replaceFormFieldInputsTouchedCons(new q.IsSymbol(function () {
        return "policyType";
      }))(B.newtypeInputField)(B.newtypeFormField)()()()(F.replaceFormFieldInputsTouchedNil)))))(F.modifyAllCons(new q.IsSymbol(function () {
        return "appliesToProd";
      }))(B.newtypeInputFunction)(B.newtypeFormField)()()()(F.modifyAllCons(new q.IsSymbol(function () {
        return "polPolType";
      }))(B.newtypeInputFunction)(B.newtypeFormField)()()()(F.modifyAllCons(new q.IsSymbol(function () {
        return "policy";
      }))(B.newtypeInputFunction)(B.newtypeFormField)()()()(F.modifyAllCons(new q.IsSymbol(function () {
        return "policyType";
      }))(B.newtypeInputFunction)(B.newtypeFormField)()()()(F.modifyAllNil)))))(F.applyToValidationCons(new q.IsSymbol(function () {
        return "appliesToProd";
      }))(b.widgetMonad)()(M)()()(F.applyToValidationCons(new q.IsSymbol(function () {
        return "polPolType";
      }))(b.widgetMonad)()(M)()()(F.applyToValidationCons(new q.IsSymbol(function () {
        return "policy";
      }))(b.widgetMonad)()(M)()()(F.applyToValidationCons(new q.IsSymbol(function () {
        return "policyType";
      }))(b.widgetMonad)()(M)()()(F.applyToValidationNil(b.widgetMonad))))))(F.formFieldsToMaybeOutputCons(new q.IsSymbol(function () {
        return "appliesToProd";
      }))()(F.formFieldsToMaybeOutputCons(new q.IsSymbol(function () {
        return "polPolType";
      }))()(F.formFieldsToMaybeOutputCons(new q.IsSymbol(function () {
        return "policy";
      }))()(F.formFieldsToMaybeOutputCons(new q.IsSymbol(function () {
        return "policyType";
      }))()(F.formFieldsToMaybeOutputNil)())())())())(M)(M)(M)(M)(M)(M)(M)(M)(b.widgetMonad)(c)(a))(function (a) {
        if (a instanceof u.Left) return S(a.value0);
        if (a instanceof u.Right) return a = I.unwrapOutputFields(M)(w.hmapRecord()(w.mapRecordWithIndexCons(new q.IsSymbol(function () {
          return "appliesToProd";
        }))(w.constMapping(I.unwrapField(B.newtypeOutputField)))(w.mapRecordWithIndexCons(new q.IsSymbol(function () {
          return "polPolType";
        }))(w.constMapping(I.unwrapField(B.newtypeOutputField)))(w.mapRecordWithIndexCons(new q.IsSymbol(function () {
          return "policy";
        }))(w.constMapping(I.unwrapField(B.newtypeOutputField)))(w.mapRecordWithIndexCons(new q.IsSymbol(function () {
          return "policyType";
        }))(w.constMapping(I.unwrapField(B.newtypeOutputField)))(w.mapRecordWithIndexNil)()())()())()())()()))(a.value0), g.pure(b.widgetApplicative)({
          policy: a.policy,
          policyType: a.policyType,
          appliesToProduct: a.appliesToProd
        });
        throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 102, column 3 - line 110, column 8): " + [a.constructor.name]);
      });
    });
  },
      Q = {
    polPolType: P.FreeTextPolicy.value,
    policy: "",
    policyType: y.Nothing.value,
    appliesToProd: y.Nothing.value
  },
      T = function T(a) {
    if (a instanceof y.Nothing) return Q;

    if (a instanceof y.Just) {
      var b = a.value0.policy;
      if (b instanceof N.FreeTextPolicy) b = P.FreeTextPolicy.value;else if (b instanceof N.RefPolicy) b = P.RefPolicy.value;else throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 62, column 1 - line 62, column 38): " + [b.constructor.name]);
      var c = a.value0.policy;
      if (c instanceof N.FreeTextPolicy) c = A.toString(c.value0);else if (c instanceof N.RefPolicy) c = U.urlToString(c.value0);else throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 66, column 1 - line 66, column 36): " + [c.constructor.name]);
      return {
        polPolType: b,
        policy: c,
        policyType: a.value0.policyType,
        appliesToProd: a.value0.appliesToProduct
      };
    }

    throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 70, column 1 - line 70, column 56): " + [a.constructor.name]);
  },
      V = {
    polPolType: O.dummy(b.widgetMonad),
    policy: function (a) {
      return K.hoistFnE(a)(function (a) {
        return function (b) {
          var c = D.getInput(new q.IsSymbol(function () {
            return "polPolType";
          }))(M)()(R()(M)(G.makeSProxiesCons(new q.IsSymbol(function () {
            return "appliesToProd";
          }))()(G.makeSProxiesCons(new q.IsSymbol(function () {
            return "polPolType";
          }))()(G.makeSProxiesCons(new q.IsSymbol(function () {
            return "policy";
          }))()(G.makeSProxiesCons(new q.IsSymbol(function () {
            return "policyType";
          }))()(G.makeSProxiesNil))))).polPolType)(a);
          if (c instanceof P.FreeTextPolicy) return r.mapFlipped(u.functorEither)(O.readNEStringEi(b))(N.FreeTextPolicy.create);
          if (c instanceof P.RefPolicy) return r.mapFlipped(u.functorEither)(U.parsePublicURL(b))(N.RefPolicy.create);
          throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 128, column 6 - line 130, column 54): " + [c.constructor.name]);
        };
      });
    }(b.widgetMonad),
    policyType: O.dummy(b.widgetMonad),
    appliesToProd: O.dummy(b.widgetMonad)
  },
      W = function W(a) {
    var c = function c(a) {
      return f.step(a)(l.bind(b.widgetBind)(g.pure(b.widgetApplicative)(I.wrapInputFields(M)(w.hmapRecord()(w.mapRecordWithIndexCons(new q.IsSymbol(function () {
        return "appliesToProd";
      }))(w.constMapping(I.wrapField(B.newtypeInputField)))(w.mapRecordWithIndexCons(new q.IsSymbol(function () {
        return "polPolType";
      }))(w.constMapping(I.wrapField(B.newtypeInputField)))(w.mapRecordWithIndexCons(new q.IsSymbol(function () {
        return "policy";
      }))(w.constMapping(I.wrapField(B.newtypeInputField)))(w.mapRecordWithIndexCons(new q.IsSymbol(function () {
        return "policyType";
      }))(w.constMapping(I.wrapField(B.newtypeInputField)))(w.mapRecordWithIndexNil)()())()())()())()()))(T(a))))(function (d) {
        return l.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(C.monoidArray))(b.widgetShiftMap)([S(P.initFormState()(F.inputFieldsToFormFieldsCons(new q.IsSymbol(function () {
          return "appliesToProd";
        }))()(F.inputFieldsToFormFieldsCons(new q.IsSymbol(function () {
          return "polPolType";
        }))()(F.inputFieldsToFormFieldsCons(new q.IsSymbol(function () {
          return "policy";
        }))()(F.inputFieldsToFormFieldsCons(new q.IsSymbol(function () {
          return "policyType";
        }))()(F.inputFieldsToFormFieldsNil)())())())())(M)(M)(d)(V)), v.foldMap(v.foldableMaybe)(b.widgetMonoid(C.monoidArray))(L.ipolicyWidg)(a)]))(function (a) {
          return l.discard(l.discardUnit)(b.widgetBind)(H.liftEffect(b.widgetMonadEff(C.monoidArray))(n.logShow(H.monadEffectEffect)(t.showRecord()(t.showRecordFieldsCons(new q.IsSymbol(function () {
            return "appliesToProduct";
          }))(t.showRecordFieldsCons(new q.IsSymbol(function () {
            return "policy";
          }))(t.showRecordFieldsCons(new q.IsSymbol(function () {
            return "policyType";
          }))(t.showRecordFieldsNil)(y.showMaybe(N.showPolicyType)))(N.showPolicy))(y.showMaybe(t.showBoolean))))(a)))(function () {
            return g.pure(b.widgetApplicative)(c(new y.Just(a)));
          });
        });
      }));
    };

    return e.div_(m.shiftMapCofree(C.monoidArray))([E.institutionPolicy])(c(a));
  };

  d.policySigArray = function (a) {
    return e.div_(m.shiftMapCofree(C.monoidArray))([E.institutionPolicies])(P.nonEmptyArrayView(W)(a));
  };
})(PS);

(function (a) {
  a.pickFn = function (a, f) {
    for (var d = {}, h = 0; h < a.length; h++) {
      "undefined" !== typeof f[a[h]] && (d[a[h]] = f[a[h]]);
    }

    return d;
  };
})(PS.Option = PS.Option || {});

(function (a) {
  a["Record.Extra"] = a["Record.Extra"] || {};

  var d = a["Record.Extra"],
      f = a["Data.List.Types"],
      k = a["Data.Monoid"],
      h = a["Data.Symbol"],
      b = a["Type.Data.RowList"],
      e = function e(a) {
    this.keysImpl = a;
  };

  a = new e(function (a) {
    return k.mempty(f.monoidList);
  });

  d.keys = function (a) {
    return function (a) {
      return function (c) {
        return (0, a.keysImpl)(b.RLProxy.value);
      };
    };
  };

  d.nilKeys = a;

  d.consKeys = function (a) {
    return function (c) {
      return new e(function (d) {
        d = (0, c.keysImpl)(b.RLProxy.value);
        var e = h.reflectSymbol(a)(h.SProxy.value);
        return new f.Cons(e, d);
      });
    };
  };
})(PS);

(function (a) {
  a["Type.Data.Row"] = a["Type.Data.Row"] || {};
  a = a["Type.Data.Row"];

  var d = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  a.RProxy = d;
})(PS);

(function (a) {
  a.Option = a.Option || {};

  var d = a.Option,
      f = a.Option,
      k = a["Control.Monad.State.Class"],
      h = a["Control.Monad.State.Trans"],
      b = a["Data.Array"],
      e = a["Data.Function.Uncurried"],
      c = a["Data.Identity"],
      g = a["Data.List.Types"],
      l = a["Data.Maybe"],
      m = a["Data.Symbol"],
      u = a["Foreign.Object"],
      p = a.Record,
      x = a["Record.Extra"],
      v = a["Type.Data.Row"],
      r = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      y = function y(a) {
    this.getAllOption = a;
  },
      C = function C(a) {
    this["getAll'"] = a;
  },
      t = function t(a) {
    return function (a) {
      return function (a) {
        a = b.fromFoldable(g.foldableList)(x.keys()(a)(v.RProxy.value));
        return e.runFn2(f.pickFn)(a);
      };
    };
  };

  a = new y(function (a) {
    return function (a) {
      return new l.Just({});
    };
  });

  var A = function A(a) {
    return function (b) {
      return function (c) {
        return function (c) {
          var d = m.reflectSymbol(a)(m.SProxy.value),
              e = u.alter(function (a) {
            return b(a);
          })(d)(c);
          c = b(u.lookup(d)(c));
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
            return A(a)(function (a) {
              return l.Nothing.value;
            })(b)(c).option;
          };
        };
      };
    };
  },
      H = function H(a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return A(a)(function (a) {
            return a;
          })(b)(c).value;
        };
      };
    };
  },
      n = function n(a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return function (d) {
            return A(a)(function (a) {
              return new l.Just(c);
            })(b)(d).option;
          };
        };
      };
    };
  },
      J = function J(a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return function (d) {
            if (c instanceof l.Just) return n(a)()(b)(c.value0)(d);
            if (c instanceof l.Nothing) return d;
            throw Error("Failed pattern match at Option (line 1408, column 25 - line 1410, column 28): " + [c.constructor.name]);
          };
        };
      };
    };
  };

  d.empty = u.empty;
  d.get = H;

  d.getAll = function (a) {
    return a["getAll'"];
  };

  d.getSubset = function (a) {
    return function (a) {
      return function (a) {
        return function (b) {
          return function (c) {
            return (0, b["getAll'"])(t()()(a)(c));
          };
        };
      };
    };
  };

  d.getWithDefault = function (a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return function (d) {
            d = H(a)()(c)(d);
            if (d instanceof l.Just) return d.value0;
            if (d instanceof l.Nothing) return b;
            throw Error("Failed pattern match at Option (line 1257, column 39 - line 1259, column 32): " + [d.constructor.name]);
          };
        };
      };
    };
  };

  d.maySetOptState = function (a) {
    return function (b) {
      return function (b) {
        return function (d) {
          return function (e) {
            return k.put(h.monadStateStateT(c.monadIdentity))(J(a)()(b)(d)(e));
          };
        };
      };
    };
  };

  d.getAllAny = function (a) {
    return function (a) {
      return new C((0, a.getAllOption)(r.value));
    };
  };

  d.getAllOptionNil = a;

  d.getAllOptionCons = function (a) {
    return function (b) {
      return function (b) {
        return function (b) {
          return function (b) {
            return function (b) {
              return new y(function (c) {
                return function (c) {
                  var d = q(a)()()(m.SProxy.value)(c);
                  d = (0, b.getAllOption)(r.value)(d);
                  c = H(a)()(m.SProxy.value)(c);

                  if (d instanceof l.Just) {
                    if (c instanceof l.Just) return new l.Just(p.insert(a)()()(m.SProxy.value)(c.value0)(d.value0));
                    if (c instanceof l.Nothing) return l.Nothing.value;
                    throw Error("Failed pattern match at Option (line 567, column 31 - line 569, column 47): " + [c.constructor.name]);
                  }

                  if (d instanceof l.Nothing) return l.Nothing.value;
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
  a["Metajelo.UI"] = a["Metajelo.UI"] || {};

  var d = a["Metajelo.UI"],
      f = a["Concur.Core.FRP"],
      k = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Types"],
      b = a["Concur.React.DOM"],
      e = a["Concur.React.Run"],
      c = a["Control.Applicative"],
      g = a["Control.Bind"],
      l = a["Control.Cofree"],
      m = a["Control.Monad.State"],
      u = a["Control.Monad.State.Class"],
      p = a["Control.Monad.State.Trans"],
      x = a["Control.Plus"],
      v = a["Data.Array.NonEmpty.Internal"],
      r = a["Data.Either"],
      y = a["Data.Foldable"],
      C = a["Data.Functor"],
      t = a["Data.Identity"],
      A = a["Data.Maybe"],
      q = a["Data.Monoid"],
      H = a["Data.String.NonEmpty.Internal"],
      n = a["Data.Symbol"],
      J = a["Data.Traversable"],
      F = a["Data.Tuple"],
      z = a["Metajelo.CSS.UI.ClassProps"],
      D = a["Metajelo.FormUtil"],
      I = a["Metajelo.Forms.InstitutionContact"],
      G = a["Metajelo.Forms.InstitutionPolicy"],
      B = a["Metajelo.Types"],
      K = a["Metajelo.View"],
      w = a.Option,
      E = a["Record.Extra"],
      P = function P(a) {
    return b.div_(l.shiftMapCofree(q.monoidArray))([z.tooltip])(a);
  };

  a = b.div_(h.widgetShiftMap)([z.tooltip])(x.empty(h.widgetPlus(q.monoidArray)));

  var N = function N(a) {
    return function (b) {
      return w.getWithDefault(a)()(w.empty);
    };
  },
      O = function O(a) {
    return b.div_(l.shiftMapCofree(q.monoidArray))([z.format])(P(D.textInput(a)));
  },
      L = function L(a) {
    return b.div_(l.shiftMapCofree(q.monoidArray))([z.formatList])(D.arrayView(O)(a));
  },
      U = function U(a) {
    return b.div_(l.shiftMapCofree(q.monoidArray))([z.sustainability])(g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(b.span_(l.shiftMapCofree(q.monoidArray))([z.missionStatement])(D.urlInput(w.getWithDefault(new n.IsSymbol(function () {
      return "missionUrl_Ei";
    }))()(new r.Left(""))(n.SProxy.value)(a))))(function (d) {
      var e = r.hush(d);
      return g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(b.span_(l.shiftMapCofree(q.monoidArray))([z.fundingStatement])(D.urlInput(w.getWithDefault(new n.IsSymbol(function () {
        return "fundingUrl_Ei";
      }))()(new r.Left(""))(n.SProxy.value)(a))))(function (b) {
        var f = r.hush(b);
        return c.pure(l.applicativeCofree(h.widgetAlternative(q.monoidArray)))(m.execState(g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
          return "missionUrl_Ei";
        }))()(n.SProxy.value)(new A.Just(d))))(function () {
          return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
            return "missionStatementURL";
          }))()(n.SProxy.value)(e)))(function () {
            return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
              return "fundingUrl_Ei";
            }))()(n.SProxy.value)(new A.Just(b))))(function () {
              return g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                return "fundingStatementURL";
              }))()(n.SProxy.value)(f));
            });
          });
        }))(a));
      });
    }));
  },
      R = function R(a) {
    return b.div_(l.shiftMapCofree(q.monoidArray))([z.resourceType])(g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(b.span_(l.shiftMapCofree(q.monoidArray))([z.resourceTypeGen])(D.menuSignal(B.boundedEnumResourceTypeGeneral)(D.isOptionResourceTypeGeneral)(w.get(new n.IsSymbol(function () {
      return "generalType";
    }))()(n.SProxy.value)(a))))(function (d) {
      return g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(b.span_(l.shiftMapCofree(q.monoidArray))([z.resourceTypeDescr])(D.textInput(g.join(A.bindMaybe)(C.map(A.functorMaybe)(H.fromString)(w.get(new n.IsSymbol(function () {
        return "description";
      }))()(n.SProxy.value)(a))))))(function (b) {
        return c.pure(l.applicativeCofree(h.widgetAlternative(q.monoidArray)))(m.execState(g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
          return "description";
        }))()(n.SProxy.value)(C.map(A.functorMaybe)(H.toString)(b))))(function () {
          return g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
            return "generalType";
          }))()(n.SProxy.value)(d));
        }))(a));
      });
    }));
  },
      M = function M(a) {
    return b.div_(l.shiftMapCofree(q.monoidArray))([z.resourceMDSource])(g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(b.span_(l.shiftMapCofree(q.monoidArray))([z.url])(D.urlInput(w.getWithDefault(new n.IsSymbol(function () {
      return "url_Ei";
    }))()(new r.Left(""))(n.SProxy.value)(a))))(function (d) {
      var e = r.hush(d);
      return g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(b.span_(l.shiftMapCofree(q.monoidArray))([z.relType])(D.menuSignal(B.boundedEnumRelationType)(D.isOptionRelationType)(w.get(new n.IsSymbol(function () {
        return "relationType";
      }))()(n.SProxy.value)(a))))(function (b) {
        return c.pure(l.applicativeCofree(h.widgetAlternative(q.monoidArray)))(m.execState(g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
          return "url_Ei";
        }))()(n.SProxy.value)(new A.Just(d))))(function () {
          return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
            return "url";
          }))()(n.SProxy.value)(e)))(function () {
            return g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
              return "relationType";
            }))()(n.SProxy.value)(b));
          });
        }))(a));
      });
    }));
  },
      S = function S(a) {
    var d = A.fromMaybe(w.empty)(a);
    return b.div_(l.shiftMapCofree(q.monoidArray))([z.relatedId])(g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(b.span_(l.shiftMapCofree(q.monoidArray))([z.id])(D.textInput(w.get(new n.IsSymbol(function () {
      return "id";
    }))()(n.SProxy.value)(d))))(function (a) {
      return g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(b.span_(l.shiftMapCofree(q.monoidArray))([z.idType])(D.menuSignal(B.boundedEnumIdentifierType)(D.isOptionIdentifierType)(w.get(new n.IsSymbol(function () {
        return "idType";
      }))()(n.SProxy.value)(d))))(function (e) {
        return g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(b.span_(l.shiftMapCofree(q.monoidArray))([z.relType])(D.menuSignal(B.boundedEnumRelationType)(D.isOptionRelationType)(w.get(new n.IsSymbol(function () {
          return "relType";
        }))()(n.SProxy.value)(d))))(function (b) {
          return c.pure(l.applicativeCofree(h.widgetAlternative(q.monoidArray)))(A.Just.create(m.execState(g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
            return "id";
          }))()(n.SProxy.value)(a)))(function () {
            return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
              return "idType";
            }))()(n.SProxy.value)(e)))(function () {
              return g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                return "relType";
              }))()(n.SProxy.value)(b));
            });
          }))(d)));
        });
      });
    }));
  },
      Q = function Q(a) {
    return b.span_(l.shiftMapCofree(q.monoidArray))([z.relatedIdsHeader])(b.div_(l.shiftMapCofree(q.monoidArray))([z.relatedIdList])(D.nonEmptyArrayView(S)(a)));
  },
      T = function T(a) {
    return b.div_(l.shiftMapCofree(q.monoidArray))([z.identifier])(g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(b.span_(l.shiftMapCofree(q.monoidArray))([z.id])(D.textInput(w.get(new n.IsSymbol(function () {
      return "id";
    }))()(n.SProxy.value)(a))))(function (d) {
      return g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(b.span_(l.shiftMapCofree(q.monoidArray))([z.idType])(D.menuSignal(B.boundedEnumIdentifierType)(D.isOptionIdentifierType)(w.get(new n.IsSymbol(function () {
        return "idType";
      }))()(n.SProxy.value)(a))))(function (b) {
        return c.pure(l.applicativeCofree(h.widgetAlternative(q.monoidArray)))(m.execState(g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
          return "id";
        }))()(n.SProxy.value)(d)))(function () {
          return g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
            return "idType";
          }))()(n.SProxy.value)(b));
        }))(a));
      });
    }));
  },
      V = function V(a) {
    var d = function d(a) {
      return b.div(h.widgetMultiAlternative(q.monoidArray))(h.widgetShiftMap)([z.locPreview])([b["br'"](k.widgetLiftWidget), y.foldMap(y.foldableMaybe)(h.widgetMonoid(q.monoidArray))(function (a) {
        return y.fold(y.foldableArray)(h.widgetMonoid(q.monoidArray))(K.spacify(K.locElems(a)));
      })(a)]);
    },
        e = A.fromMaybe(w.empty)(a);

    return b.div_(l.shiftMapCofree(q.monoidArray))([z.location])(g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(b.span_(l.shiftMapCofree(q.monoidArray))([z.institutionId])(T(N(new n.IsSymbol(function () {
      return "institutionID_opt";
    }))()(n.SProxy.value)(e))))(function (a) {
      var r = w.getAll(w.getAllAny()(w.getAllOptionCons(new n.IsSymbol(function () {
        return "id";
      }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
        return "idType";
      }))()()()()(w.getAllOptionNil))))(a);
      return g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(D.textInput(w.get(new n.IsSymbol(function () {
        return "institutionName";
      }))()(n.SProxy.value)(e)))(function (v) {
        return g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(b.span_(l.shiftMapCofree(q.monoidArray))([z.institutionType])(D.menuSignal(B.boundedEnumInstitutionType)(D.isOptionInstitutionType)(w.get(new n.IsSymbol(function () {
          return "institutionType";
        }))()(n.SProxy.value)(e))))(function (x) {
          return g.discard(g.discardUnit)(l.bindCofree(h.widgetAlternative(q.monoidArray)))(f.display(b["br'"](k.widgetLiftWidget)))(function () {
            return g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(b.span_(l.shiftMapCofree(q.monoidArray))([z.superOrg])(D.textInput(g.join(A.bindMaybe)(w.get(new n.IsSymbol(function () {
              return "superOrganizationName";
            }))()(n.SProxy.value)(e)))))(function (k) {
              return g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(I.contactSignal(w.get(new n.IsSymbol(function () {
                return "institutionContact";
              }))()(n.SProxy.value)(e)))(function (y) {
                return g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(U(N(new n.IsSymbol(function () {
                  return "iSustain_opt";
                }))()(n.SProxy.value)(e)))(function (B) {
                  var C = w.getSubset()()(E.consKeys(new n.IsSymbol(function () {
                    return "fundingStatementURL";
                  }))(E.consKeys(new n.IsSymbol(function () {
                    return "missionStatementURL";
                  }))(E.nilKeys)))(w.getAllAny()(w.getAllOptionCons(new n.IsSymbol(function () {
                    return "fundingStatementURL";
                  }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                    return "missionStatementURL";
                  }))()()()()(w.getAllOptionNil))))(B);
                  return g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(G.policySigArray(new F.Tuple(w.getWithDefault(new n.IsSymbol(function () {
                    return "_numPolicies";
                  }))()(1)(n.SProxy.value)(e), w.get(new n.IsSymbol(function () {
                    return "institutionPolicies";
                  }))()(n.SProxy.value)(e))))(function (G) {
                    var H = F.fst(G),
                        I = F.snd(G);
                    return g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(b.span_(l.shiftMapCofree(q.monoidArray))([z.versioning])(D.checkBoxS(w.getWithDefault(new n.IsSymbol(function () {
                      return "versioning";
                    }))()(!1)(n.SProxy.value)(e))))(function (b) {
                      return g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(c.pure(l.applicativeCofree(h.widgetAlternative(q.monoidArray)))(m.execState(g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                        return "institutionID_opt";
                      }))()(n.SProxy.value)(new A.Just(a))))(function () {
                        return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                          return "institutionID";
                        }))()(n.SProxy.value)(r)))(function () {
                          return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                            return "institutionName";
                          }))()(n.SProxy.value)(v)))(function () {
                            return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                              return "institutionType";
                            }))()(n.SProxy.value)(x)))(function () {
                              return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                                return "superOrganizationName";
                              }))()(n.SProxy.value)(new A.Just(k))))(function () {
                                return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                                  return "institutionContact";
                                }))()(n.SProxy.value)(y)))(function () {
                                  return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                                    return "iSustain_opt";
                                  }))()(n.SProxy.value)(new A.Just(B))))(function () {
                                    return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                                      return "institutionSustainability";
                                    }))()(n.SProxy.value)(C)))(function () {
                                      return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                                        return "_numPolicies";
                                      }))()(n.SProxy.value)(new A.Just(H))))(function () {
                                        return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                                          return "institutionPolicies";
                                        }))()(n.SProxy.value)(I)))(function () {
                                          return g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                                            return "versioning";
                                          }))()(n.SProxy.value)(new A.Just(b)));
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      }))(e)))(function (a) {
                        var b = w.getSubset()()(E.consKeys(new n.IsSymbol(function () {
                          return "institutionContact";
                        }))(E.consKeys(new n.IsSymbol(function () {
                          return "institutionID";
                        }))(E.consKeys(new n.IsSymbol(function () {
                          return "institutionName";
                        }))(E.consKeys(new n.IsSymbol(function () {
                          return "institutionPolicies";
                        }))(E.consKeys(new n.IsSymbol(function () {
                          return "institutionSustainability";
                        }))(E.consKeys(new n.IsSymbol(function () {
                          return "institutionType";
                        }))(E.consKeys(new n.IsSymbol(function () {
                          return "superOrganizationName";
                        }))(E.consKeys(new n.IsSymbol(function () {
                          return "versioning";
                        }))(E.nilKeys)))))))))(w.getAllAny()(w.getAllOptionCons(new n.IsSymbol(function () {
                          return "institutionContact";
                        }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                          return "institutionID";
                        }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                          return "institutionName";
                        }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                          return "institutionPolicies";
                        }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                          return "institutionSustainability";
                        }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                          return "institutionType";
                        }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                          return "superOrganizationName";
                        }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                          return "versioning";
                        }))()()()()(w.getAllOptionNil))))))))))(a);
                        return g.discard(g.discardUnit)(l.bindCofree(h.widgetAlternative(q.monoidArray)))(f.display(d(b)))(function () {
                          return c.pure(l.applicativeCofree(h.widgetAlternative(q.monoidArray)))(new A.Just(a));
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
      W = function W(a) {
    return b.div_(l.shiftMapCofree(q.monoidArray))([z.basicMetadata])(g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(b.span_(l.shiftMapCofree(q.monoidArray))([z.title])(D.textInput(w.get(new n.IsSymbol(function () {
      return "title";
    }))()(n.SProxy.value)(a))))(function (d) {
      return g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(b.span_(l.shiftMapCofree(q.monoidArray))([z.creator])(D.textInput(w.get(new n.IsSymbol(function () {
        return "creator";
      }))()(n.SProxy.value)(a))))(function (e) {
        return g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(b.span_(l.shiftMapCofree(q.monoidArray))([z.pubyear])(D.textInput(w.get(new n.IsSymbol(function () {
          return "publicationYear";
        }))()(n.SProxy.value)(a))))(function (b) {
          return c.pure(l.applicativeCofree(h.widgetAlternative(q.monoidArray)))(m.execState(g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
            return "title";
          }))()(n.SProxy.value)(d)))(function () {
            return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
              return "creator";
            }))()(n.SProxy.value)(e)))(function () {
              return g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                return "publicationYear";
              }))()(n.SProxy.value)(b));
            });
          }))(a));
        });
      });
    }));
  },
      Y = function Y(a) {
    var d = function d(a) {
      return b.div(h.widgetMultiAlternative(q.monoidArray))(h.widgetShiftMap)([z.prodPreview])([b["br'"](k.widgetLiftWidget), y.fold(y.foldableMaybe)(h.widgetMonoid(q.monoidArray))(C.map(A.functorMaybe)(K.mkSupplementaryProductWidget)(a))]);
    },
        e = A.fromMaybe(w.empty)(a);

    return b.div_(l.shiftMapCofree(q.monoidArray))([z.product])(g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(W(N(new n.IsSymbol(function () {
      return "basicMetadata_opt";
    }))()(n.SProxy.value)(e)))(function (a) {
      var k = w.getAll(w.getAllAny()(w.getAllOptionCons(new n.IsSymbol(function () {
        return "creator";
      }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
        return "publicationYear";
      }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
        return "title";
      }))()()()()(w.getAllOptionNil)))))(a);
      return g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(b.div_(l.shiftMapCofree(q.monoidArray))([z.resourceId])(T(N(new n.IsSymbol(function () {
        return "resourceID_opt";
      }))()(n.SProxy.value)(e))))(function (b) {
        var r = w.getAll(w.getAllAny()(w.getAllOptionCons(new n.IsSymbol(function () {
          return "id";
        }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
          return "idType";
        }))()()()()(w.getAllOptionNil))))(b);
        return g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(R(N(new n.IsSymbol(function () {
          return "resourceType_opt";
        }))()(n.SProxy.value)(e)))(function (v) {
          var x = w.getSubset()()(E.consKeys(new n.IsSymbol(function () {
            return "description";
          }))(E.consKeys(new n.IsSymbol(function () {
            return "generalType";
          }))(E.nilKeys)))(w.getAllAny()(w.getAllOptionCons(new n.IsSymbol(function () {
            return "description";
          }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
            return "generalType";
          }))()()()()(w.getAllOptionNil))))(v);
          return g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(L(new F.Tuple(w.getWithDefault(new n.IsSymbol(function () {
            return "_numFormats";
          }))()(0)(n.SProxy.value)(e), w.getWithDefault(new n.IsSymbol(function () {
            return "format";
          }))()([])(n.SProxy.value)(e))))(function (y) {
            var z = F.fst(y),
                B = F.snd(y);
            return g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(M(N(new n.IsSymbol(function () {
              return "resMdsOpts_opt";
            }))()(n.SProxy.value)(e)))(function (y) {
              var D = w.getSubset()()(E.consKeys(new n.IsSymbol(function () {
                return "relationType";
              }))(E.consKeys(new n.IsSymbol(function () {
                return "url";
              }))(E.nilKeys)))(w.getAllAny()(w.getAllOptionCons(new n.IsSymbol(function () {
                return "relationType";
              }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                return "url";
              }))()()()()(w.getAllOptionNil))))(y);
              return g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(V(w.get(new n.IsSymbol(function () {
                return "locationOpts_opt";
              }))()(n.SProxy.value)(e)))(function (F) {
                var G = g.join(A.bindMaybe)(C.map(A.functorMaybe)(w.getSubset()()(E.consKeys(new n.IsSymbol(function () {
                  return "institutionContact";
                }))(E.consKeys(new n.IsSymbol(function () {
                  return "institutionID";
                }))(E.consKeys(new n.IsSymbol(function () {
                  return "institutionName";
                }))(E.consKeys(new n.IsSymbol(function () {
                  return "institutionPolicies";
                }))(E.consKeys(new n.IsSymbol(function () {
                  return "institutionSustainability";
                }))(E.consKeys(new n.IsSymbol(function () {
                  return "institutionType";
                }))(E.consKeys(new n.IsSymbol(function () {
                  return "superOrganizationName";
                }))(E.consKeys(new n.IsSymbol(function () {
                  return "versioning";
                }))(E.nilKeys)))))))))(w.getAllAny()(w.getAllOptionCons(new n.IsSymbol(function () {
                  return "institutionContact";
                }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                  return "institutionID";
                }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                  return "institutionName";
                }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                  return "institutionPolicies";
                }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                  return "institutionSustainability";
                }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                  return "institutionType";
                }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                  return "superOrganizationName";
                }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                  return "versioning";
                }))()()()()(w.getAllOptionNil)))))))))))(F));
                return g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(c.pure(l.applicativeCofree(h.widgetAlternative(q.monoidArray)))(m.execState(g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                  return "basicMetadata_opt";
                }))()(n.SProxy.value)(new A.Just(a))))(function () {
                  return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                    return "basicMetadata";
                  }))()(n.SProxy.value)(k)))(function () {
                    return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                      return "resourceID_opt";
                    }))()(n.SProxy.value)(new A.Just(b))))(function () {
                      return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                        return "resourceID";
                      }))()(n.SProxy.value)(new A.Just(r))))(function () {
                        return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                          return "resourceType_opt";
                        }))()(n.SProxy.value)(new A.Just(v))))(function () {
                          return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                            return "resourceType";
                          }))()(n.SProxy.value)(x)))(function () {
                            return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                              return "_numFormats";
                            }))()(n.SProxy.value)(new A.Just(z))))(function () {
                              return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                                return "format";
                              }))()(n.SProxy.value)(new A.Just(B))))(function () {
                                return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                                  return "resMdsOpts_opt";
                                }))()(n.SProxy.value)(new A.Just(y))))(function () {
                                  return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                                    return "resourceMetadataSource";
                                  }))()(n.SProxy.value)(new A.Just(D))))(function () {
                                    return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                                      return "locationOpts_opt";
                                    }))()(n.SProxy.value)(F)))(function () {
                                      return g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                                        return "location";
                                      }))()(n.SProxy.value)(G));
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
                }))(e)))(function (a) {
                  var b = w.getSubset()()(E.consKeys(new n.IsSymbol(function () {
                    return "basicMetadata";
                  }))(E.consKeys(new n.IsSymbol(function () {
                    return "format";
                  }))(E.consKeys(new n.IsSymbol(function () {
                    return "location";
                  }))(E.consKeys(new n.IsSymbol(function () {
                    return "resourceID";
                  }))(E.consKeys(new n.IsSymbol(function () {
                    return "resourceMetadataSource";
                  }))(E.consKeys(new n.IsSymbol(function () {
                    return "resourceType";
                  }))(E.nilKeys)))))))(w.getAllAny()(w.getAllOptionCons(new n.IsSymbol(function () {
                    return "basicMetadata";
                  }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                    return "format";
                  }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                    return "location";
                  }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                    return "resourceID";
                  }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                    return "resourceMetadataSource";
                  }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                    return "resourceType";
                  }))()()()()(w.getAllOptionNil))))))))(a);
                  return g.discard(g.discardUnit)(l.bindCofree(h.widgetAlternative(q.monoidArray)))(f.display(d(b)))(function () {
                    return c.pure(l.applicativeCofree(h.widgetAlternative(q.monoidArray)))(new A.Just(a));
                  });
                });
              });
            });
          });
        });
      });
    }));
  },
      ba = function ba(a) {
    return b.span_(l.shiftMapCofree(q.monoidArray))([z.productsHeader])(b.div_(l.shiftMapCofree(q.monoidArray))([z.productList])(D.nonEmptyArrayView(Y)(a)));
  };

  x = function () {
    var a = function a(_a16) {
      return b.div(h.widgetMultiAlternative(q.monoidArray))(h.widgetShiftMap)([z.recPreview])([b["br'"](k.widgetLiftWidget), y.fold(y.foldableMaybe)(h.widgetMonoid(q.monoidArray))(C.map(A.functorMaybe)(K.mkRecordWidget)(_a16))]);
    };

    return f.loopS(q.monoidArray)(w.empty)(function (d) {
      return b.div_(l.shiftMapCofree(q.monoidArray))([z.record])(g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(b.div_(l.shiftMapCofree(q.monoidArray))([z.recordId])(T(N(new n.IsSymbol(function () {
        return "identifier_opt";
      }))()(n.SProxy.value)(d))))(function (e) {
        var k = w.getAll(w.getAllAny()(w.getAllOptionCons(new n.IsSymbol(function () {
          return "id";
        }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
          return "idType";
        }))()()()()(w.getAllOptionNil))))(e);
        return g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(C.map(C.functorFn)(b.div_(l.shiftMapCofree(q.monoidArray))([z.date]))(D.textInput)(w.get(new n.IsSymbol(function () {
          return "date";
        }))()(n.SProxy.value)(d)))(function (b) {
          var x = D.formatXsdDate(D.initDate),
              y = r.hush(x);
          return g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(Q(new F.Tuple(w.getWithDefault(new n.IsSymbol(function () {
            return "_numRelIds";
          }))()(0)(n.SProxy.value)(d), w.get(new n.IsSymbol(function () {
            return "relId_opts";
          }))()(n.SProxy.value)(d))))(function (r) {
            var x = F.fst(r),
                z = F.snd(r),
                B = g.join(A.bindMaybe)(C.map(A.functorMaybe)(J.sequence(v.traversableNonEmptyArray)(A.applicativeMaybe))(C.map(A.functorMaybe)(C.map(v.functorNonEmptyArray)(w.getAll(w.getAllAny()(w.getAllOptionCons(new n.IsSymbol(function () {
              return "id";
            }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
              return "idType";
            }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
              return "relType";
            }))()()()()(w.getAllOptionNil)))))))(z)));
            return g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(ba(new F.Tuple(w.getWithDefault(new n.IsSymbol(function () {
              return "_numSupProds";
            }))()(0)(n.SProxy.value)(d), w.get(new n.IsSymbol(function () {
              return "supProd_opts";
            }))()(n.SProxy.value)(d))))(function (r) {
              var D = F.fst(r),
                  G = F.snd(r),
                  H = g.join(A.bindMaybe)(C.map(A.functorMaybe)(J.sequence(v.traversableNonEmptyArray)(A.applicativeMaybe))(C.map(A.functorMaybe)(C.map(v.functorNonEmptyArray)(w.getSubset()()(E.consKeys(new n.IsSymbol(function () {
                return "basicMetadata";
              }))(E.consKeys(new n.IsSymbol(function () {
                return "format";
              }))(E.consKeys(new n.IsSymbol(function () {
                return "location";
              }))(E.consKeys(new n.IsSymbol(function () {
                return "resourceID";
              }))(E.consKeys(new n.IsSymbol(function () {
                return "resourceMetadataSource";
              }))(E.consKeys(new n.IsSymbol(function () {
                return "resourceType";
              }))(E.nilKeys)))))))(w.getAllAny()(w.getAllOptionCons(new n.IsSymbol(function () {
                return "basicMetadata";
              }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                return "format";
              }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                return "location";
              }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                return "resourceID";
              }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                return "resourceMetadataSource";
              }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                return "resourceType";
              }))()()()()(w.getAllOptionNil))))))))))(G)));
              return g.bind(l.bindCofree(h.widgetAlternative(q.monoidArray)))(c.pure(l.applicativeCofree(h.widgetAlternative(q.monoidArray)))(m.execState(g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                return "identifier_opt";
              }))()(n.SProxy.value)(new A.Just(e))))(function () {
                return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                  return "identifier";
                }))()(n.SProxy.value)(k)))(function () {
                  return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                    return "date";
                  }))()(n.SProxy.value)(b)))(function () {
                    return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                      return "lastModified";
                    }))()(n.SProxy.value)(y)))(function () {
                      return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                        return "_numRelIds";
                      }))()(n.SProxy.value)(new A.Just(x))))(function () {
                        return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                          return "relId_opts";
                        }))()(n.SProxy.value)(z)))(function () {
                          return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                            return "relatedIdentifiers";
                          }))()(n.SProxy.value)(B)))(function () {
                            return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                              return "_numSupProds";
                            }))()(n.SProxy.value)(new A.Just(D))))(function () {
                              return g.discard(g.discardUnit)(p.bindStateT(t.monadIdentity))(g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                                return "supProd_opts";
                              }))()(n.SProxy.value)(G)))(function () {
                                return g.bind(p.bindStateT(t.monadIdentity))(u.get(p.monadStateStateT(t.monadIdentity)))(w.maySetOptState(new n.IsSymbol(function () {
                                  return "supplementaryProducts";
                                }))()(n.SProxy.value)(H));
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              }))(d)))(function (b) {
                var d = w.getSubset()()(E.consKeys(new n.IsSymbol(function () {
                  return "date";
                }))(E.consKeys(new n.IsSymbol(function () {
                  return "identifier";
                }))(E.consKeys(new n.IsSymbol(function () {
                  return "lastModified";
                }))(E.consKeys(new n.IsSymbol(function () {
                  return "relatedIdentifiers";
                }))(E.consKeys(new n.IsSymbol(function () {
                  return "supplementaryProducts";
                }))(E.nilKeys))))))(w.getAllAny()(w.getAllOptionCons(new n.IsSymbol(function () {
                  return "date";
                }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                  return "identifier";
                }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                  return "lastModified";
                }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                  return "relatedIdentifiers";
                }))()()()()(w.getAllOptionCons(new n.IsSymbol(function () {
                  return "supplementaryProducts";
                }))()()()()(w.getAllOptionNil)))))))(b);
                return g.discard(g.discardUnit)(l.bindCofree(h.widgetAlternative(q.monoidArray)))(f.display(a(d)))(function () {
                  return c.pure(l.applicativeCofree(h.widgetAlternative(q.monoidArray)))(b);
                });
              });
            });
          });
        });
      }));
    });
  }();

  var ca = b.div(h.widgetMultiAlternative(q.monoidArray))(h.widgetShiftMap)([z.page])(c.pure(c.applicativeArray)(f.dyn(x)));

  d.runFormSPA = function (a) {
    return e.runWidgetInDom(a)(ca);
  };

  d.page = ca;
  d.accumulateMetajeloRecord = x;
  d.accumulateSuppProd = Y;
  d.supProdSigArray = ba;
  d.accumulateLocation = V;
  d.accumulateSustain = U;
  d.accumulateIdent = T;
  d.accumulateRelatedIdent = S;
  d.relIdSigArray = Q;
  d.accumulateBasicMetaData = W;
  d.accumulateResType = R;
  d.formatSignal = O;
  d.formatSigArray = L;
  d.accumulateResMdSource = M;
  d.tooltip = a;
  d.tooltipS = P;
  d.getOpt = N;
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
//# sourceMappingURL=prod.221dfca0.js.map