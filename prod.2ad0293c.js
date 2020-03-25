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
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';var f,g,h,k,l;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0))};g=function(a,b){q=setTimeout(a,b)};h=function(){clearTimeout(q)};k=function(){return!1};l=exports.unstable_forceFrameRate=function(){}}else{var w=window.performance,x=window.Date,
y=window.setTimeout,z=window.clearTimeout;if("undefined"!==typeof console){var A=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"===
typeof w&&"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else{var B=x.now();exports.unstable_now=function(){return x.now()-B}}var C=!1,D=null,E=-1,F=5,G=0;k=function(){return exports.unstable_now()>=G};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1E3/a):5};var H=new MessageChannel,I=H.port2;H.port1.onmessage=
function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null)}catch(b){throw I.postMessage(null),b;}}else C=!1};f=function(a){D=a;C||(C=!0,I.postMessage(null))};g=function(a,b){E=y(function(){a(exports.unstable_now())},b)};h=function(){z(E);E=-1}}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<K(e,b))a[d]=b,a[c]=e,c=d;else break a}}function L(a){a=a[0];return void 0===a?null:a}
function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>K(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;
function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else if(b.startTime<=a)M(O),b.sortIndex=b.expirationTime,J(N,b);else break;b=L(O)}}function W(a){U=!1;V(a);if(!T)if(null!==L(N))T=!0,f(X);else{var b=L(O);null!==b&&g(W,b.startTime-a)}}
function X(a,b){T=!1;U&&(U=!1,h());S=!0;var c=R;try{V(b);for(Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null;R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?Q.callback=e:Q===L(N)&&M(N);V(b)}else M(N);Q=L(N)}if(null!==Q)var m=!0;else{var n=L(O);null!==n&&g(W,n.startTime-b);m=!1}return m}finally{Q=null,R=c,S=!1}}
function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var Z=l;exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){T||S||(T=!0,f(X))};
exports.unstable_getCurrentPriorityLevel=function(){return R};exports.unstable_getFirstCallbackNode=function(){return L(N)};exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R}var c=R;R=b;try{return a()}finally{R=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=Z;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=R;R=a;try{return b()}finally{R=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),e=d;c=e+c;a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,f(X)));return a};
exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k()};exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments)}finally{R=c}}};

},{}],"MDSO":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/scheduler.production.min.js');
} else {
  module.exports = require('./cjs/scheduler.development.js');
}
},{"./cjs/scheduler.production.min.js":"IvPb"}],"i17t":[function(require,module,exports) {
/** @license React v16.13.0
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
'use strict';var aa=require("react"),n=require("object-assign"),r=require("scheduler");function u(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(u(227));
function ba(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a}};function ja(a,b,c,d,e,f,g,h,k){da=!1;ea=null;ba.apply(ia,arguments)}function ka(a,b,c,d,e,f,g,h,k){ja.apply(this,arguments);if(da){if(da){var l=ea;da=!1;ea=null}else throw Error(u(198));fa||(fa=!0,ha=l)}}var la=null,ma=null,na=null;
function oa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=na(c);ka(d,b,void 0,a);a.currentTarget=null}var pa=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;pa.hasOwnProperty("ReactCurrentDispatcher")||(pa.ReactCurrentDispatcher={current:null});pa.hasOwnProperty("ReactCurrentBatchConfig")||(pa.ReactCurrentBatchConfig={suspense:null});
var qa=/^(.*)[\\\/]/,v="function"===typeof Symbol&&Symbol.for,ra=v?Symbol.for("react.element"):60103,sa=v?Symbol.for("react.portal"):60106,ta=v?Symbol.for("react.fragment"):60107,ua=v?Symbol.for("react.strict_mode"):60108,va=v?Symbol.for("react.profiler"):60114,wa=v?Symbol.for("react.provider"):60109,xa=v?Symbol.for("react.context"):60110,ya=v?Symbol.for("react.concurrent_mode"):60111,za=v?Symbol.for("react.forward_ref"):60112,Aa=v?Symbol.for("react.suspense"):60113,Ba=v?Symbol.for("react.suspense_list"):
60120,Ca=v?Symbol.for("react.memo"):60115,Da=v?Symbol.for("react.lazy"):60116,Ea=v?Symbol.for("react.block"):60121,Fa="function"===typeof Symbol&&Symbol.iterator;function Ga(a){if(null===a||"object"!==typeof a)return null;a=Fa&&a[Fa]||a["@@iterator"];return"function"===typeof a?a:null}function Ha(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}}
function Ia(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ta:return"Fragment";case sa:return"Portal";case va:return"Profiler";case ua:return"StrictMode";case Aa:return"Suspense";case Ba:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case xa:return"Context.Consumer";case wa:return"Context.Provider";case za:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case Ca:return Ia(a.type);case Ea:return Ia(a.render);case Da:if(a=1===a._status?a._result:null)return Ia(a)}return null}function Ja(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=Ia(a.type);c=null;d&&(c=Ia(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(qa,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}var Ka=null,La={};
function Ma(){if(Ka)for(var a in La){var b=La[a],c=Ka.indexOf(a);if(!(-1<c))throw Error(u(96,a));if(!Na[c]){if(!b.extractEvents)throw Error(u(97,a));Na[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(Oa.hasOwnProperty(h))throw Error(u(99,h));Oa[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&Pa(k[e],g,h);e=!0}else f.registrationName?(Pa(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(u(98,d,a));}}}}
function Pa(a,b,c){if(Qa[a])throw Error(u(100,a));Qa[a]=b;Ra[a]=b.eventTypes[c].dependencies}var Na=[],Oa={},Qa={},Ra={};function Sa(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!La.hasOwnProperty(c)||La[c]!==d){if(La[c])throw Error(u(102,c));La[c]=d;b=!0}}b&&Ma()}var Ta=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Ua=null,Va=null,Wa=null;
function Xa(a){if(a=ma(a)){if("function"!==typeof Ua)throw Error(u(280));var b=a.stateNode;b&&(b=la(b),Ua(a.stateNode,a.type,b))}}function Ya(a){Va?Wa?Wa.push(a):Wa=[a]:Va=a}function Za(){if(Va){var a=Va,b=Wa;Wa=Va=null;Xa(a);if(b)for(a=0;a<b.length;a++)Xa(b[a])}}function $a(a,b){return a(b)}function ab(a,b,c,d,e){return a(b,c,d,e)}function bb(){}var cb=$a,db=!1,eb=!1;function fb(){if(null!==Va||null!==Wa)bb(),Za()}
function gb(a,b,c){if(eb)return a(b,c);eb=!0;try{return cb(a,b,c)}finally{eb=!1,fb()}}var hb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ib=Object.prototype.hasOwnProperty,jb={},kb={};
function lb(a){if(ib.call(kb,a))return!0;if(ib.call(jb,a))return!1;if(hb.test(a))return kb[a]=!0;jb[a]=!0;return!1}function mb(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function nb(a,b,c,d){if(null===b||"undefined"===typeof b||mb(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function C(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var E={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){E[a]=new C(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];E[b]=new C(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){E[a]=new C(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){E[a]=new C(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){E[a]=new C(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){E[a]=new C(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){E[a]=new C(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){E[a]=new C(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){E[a]=new C(a,5,!1,a.toLowerCase(),null,!1)});var ob=/[\-:]([a-z])/g;function pb(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ob,
pb);E[b]=new C(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ob,pb);E[b]=new C(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ob,pb);E[b]=new C(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){E[a]=new C(a,1,!1,a.toLowerCase(),null,!1)});
E.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){E[a]=new C(a,1,!1,a.toLowerCase(),null,!0)});
function qb(a,b,c,d){var e=E.hasOwnProperty(b)?E[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(nb(b,c,e,d)&&(c=null),d||null===e?lb(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function rb(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function sb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function tb(a){var b=sb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function xb(a){a._valueTracker||(a._valueTracker=tb(a))}function yb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=sb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function zb(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Ab(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=rb(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Bb(a,b){b=b.checked;null!=b&&qb(a,"checked",b,!1)}
function Cb(a,b){Bb(a,b);var c=rb(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Db(a,b.type,c):b.hasOwnProperty("defaultValue")&&Db(a,b.type,rb(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Eb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Db(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Fb(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Gb(a,b){a=n({children:void 0},b);if(b=Fb(b.children))a.children=b;return a}
function Hb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+rb(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Ib(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(u(91));return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Jb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(u(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(u(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:rb(c)}}
function Kb(a,b){var c=rb(b.value),d=rb(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Lb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var Mb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Nb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ob(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Nb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Pb,Qb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Mb.svg||"innerHTML"in a)a.innerHTML=b;else{Pb=Pb||document.createElement("div");Pb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Pb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Rb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}function Sb(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Tb={animationend:Sb("Animation","AnimationEnd"),animationiteration:Sb("Animation","AnimationIteration"),animationstart:Sb("Animation","AnimationStart"),transitionend:Sb("Transition","TransitionEnd")},Ub={},Vb={};
Ta&&(Vb=document.createElement("div").style,"AnimationEvent"in window||(delete Tb.animationend.animation,delete Tb.animationiteration.animation,delete Tb.animationstart.animation),"TransitionEvent"in window||delete Tb.transitionend.transition);function Wb(a){if(Ub[a])return Ub[a];if(!Tb[a])return a;var b=Tb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Vb)return Ub[a]=b[c];return a}
var Xb=Wb("animationend"),Yb=Wb("animationiteration"),Zb=Wb("animationstart"),$b=Wb("transitionend"),ac="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bc=new ("function"===typeof WeakMap?WeakMap:Map);function cc(a){var b=bc.get(a);void 0===b&&(b=new Map,bc.set(a,b));return b}
function dc(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function ec(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function fc(a){if(dc(a)!==a)throw Error(u(188));}
function gc(a){var b=a.alternate;if(!b){b=dc(a);if(null===b)throw Error(u(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return fc(e),a;if(f===d)return fc(e),b;f=f.sibling}throw Error(u(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(u(189));}}if(c.alternate!==d)throw Error(u(190));}if(3!==c.tag)throw Error(u(188));return c.stateNode.current===c?a:b}function hc(a){a=gc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function ic(a,b){if(null==b)throw Error(u(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function jc(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var kc=null;
function lc(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)oa(a,b[d],c[d]);else b&&oa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function mc(a){null!==a&&(kc=ic(kc,a));a=kc;kc=null;if(a){jc(a,lc);if(kc)throw Error(u(95));if(fa)throw a=ha,fa=!1,ha=null,a;}}
function nc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function oc(a){if(!Ta)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}var pc=[];function qc(a){a.topLevelType=null;a.nativeEvent=null;a.targetInst=null;a.ancestors.length=0;10>pc.length&&pc.push(a)}
function rc(a,b,c,d){if(pc.length){var e=pc.pop();e.topLevelType=a;e.eventSystemFlags=d;e.nativeEvent=b;e.targetInst=c;return e}return{topLevelType:a,eventSystemFlags:d,nativeEvent:b,targetInst:c,ancestors:[]}}
function sc(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else{for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=tc(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=nc(a.nativeEvent);d=a.topLevelType;var f=a.nativeEvent,g=a.eventSystemFlags;0===c&&(g|=64);for(var h=null,k=0;k<Na.length;k++){var l=Na[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=
ic(h,l))}mc(h)}}function uc(a,b,c){if(!c.has(a)){switch(a){case "scroll":vc(b,"scroll",!0);break;case "focus":case "blur":vc(b,"focus",!0);vc(b,"blur",!0);c.set("blur",null);c.set("focus",null);break;case "cancel":case "close":oc(a)&&vc(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===ac.indexOf(a)&&F(a,b)}c.set(a,null)}}
var wc,xc,yc,zc=!1,Ac=[],Bc=null,Cc=null,Dc=null,Ec=new Map,Fc=new Map,Gc=[],Hc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Ic="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
function Jc(a,b){var c=cc(b);Hc.forEach(function(a){uc(a,b,c)});Ic.forEach(function(a){uc(a,b,c)})}function Kc(a,b,c,d,e){return{blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:e,container:d}}
function Lc(a,b){switch(a){case "focus":case "blur":Bc=null;break;case "dragenter":case "dragleave":Cc=null;break;case "mouseover":case "mouseout":Dc=null;break;case "pointerover":case "pointerout":Ec.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Fc.delete(b.pointerId)}}function Mc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=Kc(b,c,d,e,f),null!==b&&(b=Nc(b),null!==b&&xc(b)),a;a.eventSystemFlags|=d;return a}
function Oc(a,b,c,d,e){switch(b){case "focus":return Bc=Mc(Bc,a,b,c,d,e),!0;case "dragenter":return Cc=Mc(Cc,a,b,c,d,e),!0;case "mouseover":return Dc=Mc(Dc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Ec.set(f,Mc(Ec.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Fc.set(f,Mc(Fc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Pc(a){var b=tc(a.target);if(null!==b){var c=dc(b);if(null!==c)if(b=c.tag,13===b){if(b=ec(c),null!==b){a.blockedOn=b;r.unstable_runWithPriority(a.priority,function(){yc(c)});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function Qc(a){if(null!==a.blockedOn)return!1;var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);if(null!==b){var c=Nc(b);null!==c&&xc(c);a.blockedOn=b;return!1}return!0}
function Sc(a,b,c){Qc(a)&&c.delete(b)}function Tc(){for(zc=!1;0<Ac.length;){var a=Ac[0];if(null!==a.blockedOn){a=Nc(a.blockedOn);null!==a&&wc(a);break}var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);null!==b?a.blockedOn=b:Ac.shift()}null!==Bc&&Qc(Bc)&&(Bc=null);null!==Cc&&Qc(Cc)&&(Cc=null);null!==Dc&&Qc(Dc)&&(Dc=null);Ec.forEach(Sc);Fc.forEach(Sc)}function Uc(a,b){a.blockedOn===b&&(a.blockedOn=null,zc||(zc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Tc)))}
function Vc(a){function b(b){return Uc(b,a)}if(0<Ac.length){Uc(Ac[0],a);for(var c=1;c<Ac.length;c++){var d=Ac[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Bc&&Uc(Bc,a);null!==Cc&&Uc(Cc,a);null!==Dc&&Uc(Dc,a);Ec.forEach(b);Fc.forEach(b);for(c=0;c<Gc.length;c++)d=Gc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Gc.length&&(c=Gc[0],null===c.blockedOn);)Pc(c),null===c.blockedOn&&Gc.shift()}
var Wc={},Yc=new Map,Zc=new Map,$c=["abort","abort",Xb,"animationEnd",Yb,"animationIteration",Zb,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking",
"seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",$b,"transitionEnd","waiting","waiting"];function ad(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1],f="on"+(e[0].toUpperCase()+e.slice(1));f={phasedRegistrationNames:{bubbled:f,captured:f+"Capture"},dependencies:[d],eventPriority:b};Zc.set(d,b);Yc.set(d,f);Wc[e]=f}}
ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);
ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);ad($c,2);for(var bd="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),cd=0;cd<bd.length;cd++)Zc.set(bd[cd],0);
var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function F(a,b){vc(b,a,!1)}function vc(a,b,c){var d=Zc.get(b);switch(void 0===d?2:d){case 0:d=gd.bind(null,b,1,a);break;case 1:d=hd.bind(null,b,1,a);break;default:d=id.bind(null,b,1,a)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function gd(a,b,c,d){db||bb();var e=id,f=db;db=!0;try{ab(e,a,b,c,d)}finally{(db=f)||fb()}}function hd(a,b,c,d){ed(dd,id.bind(null,a,b,c,d))}
function id(a,b,c,d){if(fd)if(0<Ac.length&&-1<Hc.indexOf(a))a=Kc(null,a,b,c,d),Ac.push(a);else{var e=Rc(a,b,c,d);if(null===e)Lc(a,d);else if(-1<Hc.indexOf(a))a=Kc(e,a,b,c,d),Ac.push(a);else if(!Oc(e,a,b,c,d)){Lc(a,d);a=rc(a,d,null,b);try{gb(sc,a)}finally{qc(a)}}}}
function Rc(a,b,c,d){c=nc(d);c=tc(c);if(null!==c){var e=dc(c);if(null===e)c=null;else{var f=e.tag;if(13===f){c=ec(e);if(null!==c)return c;c=null}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;c=null}else e!==c&&(c=null)}}a=rc(a,d,c,b);try{gb(sc,a)}finally{qc(a)}return null}
var jd={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(jd).forEach(function(a){kd.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);jd[b]=jd[a]})});function ld(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||jd.hasOwnProperty(a)&&jd[a]?(""+b).trim():b+"px"}
function md(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ld(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var nd=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function od(a,b){if(b){if(nd[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(u(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(u(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(u(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(u(62,""));}}
function pd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var qd=Mb.html;function rd(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=cc(a);b=Ra[b];for(var d=0;d<b.length;d++)uc(b[d],a,c)}function sd(){}
function td(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ud(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function vd(a,b){var c=ud(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=ud(c)}}
function wd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?wd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function xd(){for(var a=window,b=td();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=td(a.document)}return b}
function yd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}var zd="$",Ad="/$",Bd="$?",Cd="$!",Dd=null,Ed=null;function Fd(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function Gd(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var Hd="function"===typeof setTimeout?setTimeout:void 0,Id="function"===typeof clearTimeout?clearTimeout:void 0;function Jd(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}
function Kd(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===zd||c===Cd||c===Bd){if(0===b)return a;b--}else c===Ad&&b++}a=a.previousSibling}return null}var Ld=Math.random().toString(36).slice(2),Md="__reactInternalInstance$"+Ld,Nd="__reactEventHandlers$"+Ld,Od="__reactContainere$"+Ld;
function tc(a){var b=a[Md];if(b)return b;for(var c=a.parentNode;c;){if(b=c[Od]||c[Md]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Kd(a);null!==a;){if(c=a[Md])return c;a=Kd(a)}return b}a=c;c=a.parentNode}return null}function Nc(a){a=a[Md]||a[Od];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Pd(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(u(33));}function Qd(a){return a[Nd]||null}
function Rd(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}
function Sd(a,b){var c=a.stateNode;if(!c)return null;var d=la(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw Error(u(231,
b,typeof c));return c}function Td(a,b,c){if(b=Sd(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a)}function Ud(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Rd(b);for(b=c.length;0<b--;)Td(c[b],"captured",a);for(b=0;b<c.length;b++)Td(c[b],"bubbled",a)}}
function Vd(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Sd(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a))}function Wd(a){a&&a.dispatchConfig.registrationName&&Vd(a._targetInst,null,a)}function Xd(a){jc(a,Ud)}var Yd=null,Zd=null,$d=null;
function ae(){if($d)return $d;var a,b=Zd,c=b.length,d,e="value"in Yd?Yd.value:Yd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return $d=e.slice(a,1<d?1-d:void 0)}function be(){return!0}function ce(){return!1}
function G(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?be:ce;this.isPropagationStopped=ce;return this}
n(G.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=be)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=be)},persist:function(){this.isPersistent=be},isPersistent:ce,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=ce;this._dispatchInstances=this._dispatchListeners=null}});G.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
G.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;de(c);return c};de(G);function ee(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function fe(a){if(!(a instanceof this))throw Error(u(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function de(a){a.eventPool=[];a.getPooled=ee;a.release=fe}var ge=G.extend({data:null}),he=G.extend({data:null}),ie=[9,13,27,32],je=Ta&&"CompositionEvent"in window,ke=null;Ta&&"documentMode"in document&&(ke=document.documentMode);
var le=Ta&&"TextEvent"in window&&!ke,me=Ta&&(!je||ke&&8<ke&&11>=ke),ne=String.fromCharCode(32),oe={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},pe=!1;
function qe(a,b){switch(a){case "keyup":return-1!==ie.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function re(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var se=!1;function te(a,b){switch(a){case "compositionend":return re(b);case "keypress":if(32!==b.which)return null;pe=!0;return ne;case "textInput":return a=b.data,a===ne&&pe?null:a;default:return null}}
function ue(a,b){if(se)return"compositionend"===a||!je&&qe(a,b)?(a=ae(),$d=Zd=Yd=null,se=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return me&&"ko"!==b.locale?null:b.data;default:return null}}
var ve={eventTypes:oe,extractEvents:function(a,b,c,d){var e;if(je)b:{switch(a){case "compositionstart":var f=oe.compositionStart;break b;case "compositionend":f=oe.compositionEnd;break b;case "compositionupdate":f=oe.compositionUpdate;break b}f=void 0}else se?qe(a,c)&&(f=oe.compositionEnd):"keydown"===a&&229===c.keyCode&&(f=oe.compositionStart);f?(me&&"ko"!==c.locale&&(se||f!==oe.compositionStart?f===oe.compositionEnd&&se&&(e=ae()):(Yd=d,Zd="value"in Yd?Yd.value:Yd.textContent,se=!0)),f=ge.getPooled(f,
b,c,d),e?f.data=e:(e=re(c),null!==e&&(f.data=e)),Xd(f),e=f):e=null;(a=le?te(a,c):ue(a,c))?(b=he.getPooled(oe.beforeInput,b,c,d),b.data=a,Xd(b)):b=null;return null===e?b:null===b?e:[e,b]}},we={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!we[a.type]:"textarea"===b?!0:!1}
var ye={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function ze(a,b,c){a=G.getPooled(ye.change,a,b,c);a.type="change";Ya(c);Xd(a);return a}var Ae=null,Be=null;function Ce(a){mc(a)}function De(a){var b=Pd(a);if(yb(b))return a}function Ee(a,b){if("change"===a)return b}var Fe=!1;Ta&&(Fe=oc("input")&&(!document.documentMode||9<document.documentMode));
function Ge(){Ae&&(Ae.detachEvent("onpropertychange",He),Be=Ae=null)}function He(a){if("value"===a.propertyName&&De(Be))if(a=ze(Be,a,nc(a)),db)mc(a);else{db=!0;try{$a(Ce,a)}finally{db=!1,fb()}}}function Ie(a,b,c){"focus"===a?(Ge(),Ae=b,Be=c,Ae.attachEvent("onpropertychange",He)):"blur"===a&&Ge()}function Je(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return De(Be)}function Ke(a,b){if("click"===a)return De(b)}function Le(a,b){if("input"===a||"change"===a)return De(b)}
var Me={eventTypes:ye,_isInputEventSupported:Fe,extractEvents:function(a,b,c,d){var e=b?Pd(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Ee;else if(xe(e))if(Fe)g=Le;else{g=Je;var h=Ie}else(f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=Ke);if(g&&(g=g(a,b)))return ze(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Db(e,"number",e.value)}},Ne=G.extend({view:null,detail:null}),
Oe={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pe(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Oe[a])?!!b[a]:!1}function Qe(){return Pe}
var Re=0,Se=0,Te=!1,Ue=!1,Ve=Ne.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Qe,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Re;Re=a.screenX;return Te?"mousemove"===a.type?a.screenX-b:0:(Te=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=Se;Se=a.screenY;return Ue?"mousemove"===a.type?a.screenY-b:0:(Ue=!0,0)}}),We=Ve.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xe={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},Ye={eventTypes:Xe,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?tc(b):null,null!==b){var h=dc(b);if(b!==h||5!==b.tag&&6!==b.tag)b=null}}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===
a){var k=Ve;var l=Xe.mouseLeave;var m=Xe.mouseEnter;var p="mouse"}else if("pointerout"===a||"pointerover"===a)k=We,l=Xe.pointerLeave,m=Xe.pointerEnter,p="pointer";a=null==g?f:Pd(g);f=null==b?f:Pd(b);l=k.getPooled(l,g,c,d);l.type=p+"leave";l.target=a;l.relatedTarget=f;c=k.getPooled(m,b,c,d);c.type=p+"enter";c.target=f;c.relatedTarget=a;d=g;p=b;if(d&&p)a:{k=d;m=p;g=0;for(a=k;a;a=Rd(a))g++;a=0;for(b=m;b;b=Rd(b))a++;for(;0<g-a;)k=Rd(k),g--;for(;0<a-g;)m=Rd(m),a--;for(;g--;){if(k===m||k===m.alternate)break a;
k=Rd(k);m=Rd(m)}k=null}else k=null;m=k;for(k=[];d&&d!==m;){g=d.alternate;if(null!==g&&g===m)break;k.push(d);d=Rd(d)}for(d=[];p&&p!==m;){g=p.alternate;if(null!==g&&g===m)break;d.push(p);p=Rd(p)}for(p=0;p<k.length;p++)Vd(k[p],"bubbled",l);for(p=d.length;0<p--;)Vd(d[p],"captured",c);return 0===(e&64)?[l]:[l,c]}};function Ze(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var $e="function"===typeof Object.is?Object.is:Ze,af=Object.prototype.hasOwnProperty;
function bf(a,b){if($e(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!af.call(b,c[d])||!$e(a[c[d]],b[c[d]]))return!1;return!0}
var cf=Ta&&"documentMode"in document&&11>=document.documentMode,df={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ef=null,ff=null,gf=null,hf=!1;
function jf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(hf||null==ef||ef!==td(c))return null;c=ef;"selectionStart"in c&&yd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return gf&&bf(gf,c)?null:(gf=c,a=G.getPooled(df.select,ff,a,b),a.type="select",a.target=ef,Xd(a),a)}
var kf={eventTypes:df,extractEvents:function(a,b,c,d,e,f){e=f||(d.window===d?d.document:9===d.nodeType?d:d.ownerDocument);if(!(f=!e)){a:{e=cc(e);f=Ra.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Pd(b):window;switch(a){case "focus":if(xe(e)||"true"===e.contentEditable)ef=e,ff=b,gf=null;break;case "blur":gf=ff=ef=null;break;case "mousedown":hf=!0;break;case "contextmenu":case "mouseup":case "dragend":return hf=!1,jf(c,d);case "selectionchange":if(cf)break;
case "keydown":case "keyup":return jf(c,d)}return null}},lf=G.extend({animationName:null,elapsedTime:null,pseudoElement:null}),mf=G.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),nf=Ne.extend({relatedTarget:null});function of(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf=Ne.extend({key:function(a){if(a.key){var b=pf[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=of(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?qf[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Qe,charCode:function(a){return"keypress"===
a.type?of(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?of(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),sf=Ve.extend({dataTransfer:null}),tf=Ne.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Qe}),uf=G.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),vf=Ve.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),wf={eventTypes:Wc,extractEvents:function(a,b,c,d){var e=Yc.get(a);if(!e)return null;switch(a){case "keypress":if(0===of(c))return null;case "keydown":case "keyup":a=rf;break;case "blur":case "focus":a=nf;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=
Ve;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=sf;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=tf;break;case Xb:case Yb:case Zb:a=lf;break;case $b:a=uf;break;case "scroll":a=Ne;break;case "wheel":a=vf;break;case "copy":case "cut":case "paste":a=mf;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=
We;break;default:a=G}b=a.getPooled(e,b,c,d);Xd(b);return b}};if(Ka)throw Error(u(101));Ka=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));Ma();var xf=Nc;la=Qd;ma=xf;na=Pd;Sa({SimpleEventPlugin:wf,EnterLeaveEventPlugin:Ye,ChangeEventPlugin:Me,SelectEventPlugin:kf,BeforeInputEventPlugin:ve});var yf=[],zf=-1;function H(a){0>zf||(a.current=yf[zf],yf[zf]=null,zf--)}
function I(a,b){zf++;yf[zf]=a.current;a.current=b}var Af={},J={current:Af},K={current:!1},Bf=Af;function Cf(a,b){var c=a.type.contextTypes;if(!c)return Af;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L(a){a=a.childContextTypes;return null!==a&&void 0!==a}
function Df(){H(K);H(J)}function Ef(a,b,c){if(J.current!==Af)throw Error(u(168));I(J,b);I(K,c)}function Ff(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(u(108,Ia(b)||"Unknown",e));return n({},c,{},d)}function Gf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Af;Bf=J.current;I(J,a);I(K,K.current);return!0}
function Hf(a,b,c){var d=a.stateNode;if(!d)throw Error(u(169));c?(a=Ff(a,b,Bf),d.__reactInternalMemoizedMergedChildContext=a,H(K),H(J),I(J,a)):H(K);I(K,c)}
var If=r.unstable_runWithPriority,Jf=r.unstable_scheduleCallback,Kf=r.unstable_cancelCallback,Lf=r.unstable_requestPaint,Mf=r.unstable_now,Nf=r.unstable_getCurrentPriorityLevel,Of=r.unstable_ImmediatePriority,Pf=r.unstable_UserBlockingPriority,Qf=r.unstable_NormalPriority,Rf=r.unstable_LowPriority,Sf=r.unstable_IdlePriority,Tf={},Uf=r.unstable_shouldYield,Vf=void 0!==Lf?Lf:function(){},Wf=null,Xf=null,Yf=!1,Zf=Mf(),$f=1E4>Zf?Mf:function(){return Mf()-Zf};
function ag(){switch(Nf()){case Of:return 99;case Pf:return 98;case Qf:return 97;case Rf:return 96;case Sf:return 95;default:throw Error(u(332));}}function bg(a){switch(a){case 99:return Of;case 98:return Pf;case 97:return Qf;case 96:return Rf;case 95:return Sf;default:throw Error(u(332));}}function cg(a,b){a=bg(a);return If(a,b)}function dg(a,b,c){a=bg(a);return Jf(a,b,c)}function eg(a){null===Wf?(Wf=[a],Xf=Jf(Of,fg)):Wf.push(a);return Tf}function gg(){if(null!==Xf){var a=Xf;Xf=null;Kf(a)}fg()}
function fg(){if(!Yf&&null!==Wf){Yf=!0;var a=0;try{var b=Wf;cg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Wf=null}catch(c){throw null!==Wf&&(Wf=Wf.slice(a+1)),Jf(Of,gg),c;}finally{Yf=!1}}}function hg(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function ig(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}var jg={current:null},kg=null,lg=null,mg=null;function ng(){mg=lg=kg=null}
function og(a){var b=jg.current;H(jg);a.type._context._currentValue=b}function pg(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}function qg(a,b){kg=a;mg=lg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(rg=!0),a.firstContext=null)}
function sg(a,b){if(mg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)mg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===lg){if(null===kg)throw Error(u(308));lg=b;kg.dependencies={expirationTime:0,firstContext:b,responders:null}}else lg=lg.next=b}return a._currentValue}var tg=!1;function ug(a){a.updateQueue={baseState:a.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}
function vg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,baseQueue:a.baseQueue,shared:a.shared,effects:a.effects})}function wg(a,b){a={expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null};return a.next=a}function xg(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function yg(a,b){var c=a.alternate;null!==c&&vg(c,a);a=a.updateQueue;c=a.baseQueue;null===c?(a.baseQueue=b.next=b,b.next=b):(b.next=c.next,c.next=b)}
function zg(a,b,c,d){var e=a.updateQueue;tg=!1;var f=e.baseQueue,g=e.shared.pending;if(null!==g){if(null!==f){var h=f.next;f.next=g.next;g.next=h}f=g;e.shared.pending=null;h=a.alternate;null!==h&&(h=h.updateQueue,null!==h&&(h.baseQueue=g))}if(null!==f){h=f.next;var k=e.baseState,l=0,m=null,p=null,x=null;if(null!==h){var z=h;do{g=z.expirationTime;if(g<d){var ca={expirationTime:z.expirationTime,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null};null===x?(p=x=
ca,m=k):x=x.next=ca;g>l&&(l=g)}else{null!==x&&(x=x.next={expirationTime:1073741823,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null});Ag(g,z.suspenseConfig);a:{var D=a,t=z;g=b;ca=c;switch(t.tag){case 1:D=t.payload;if("function"===typeof D){k=D.call(ca,k,g);break a}k=D;break a;case 3:D.effectTag=D.effectTag&-4097|64;case 0:D=t.payload;g="function"===typeof D?D.call(ca,k,g):D;if(null===g||void 0===g)break a;k=n({},k,g);break a;case 2:tg=!0}}null!==z.callback&&
(a.effectTag|=32,g=e.effects,null===g?e.effects=[z]:g.push(z))}z=z.next;if(null===z||z===h)if(g=e.shared.pending,null===g)break;else z=f.next=g.next,g.next=h,e.baseQueue=f=g,e.shared.pending=null}while(1)}null===x?m=k:x.next=p;e.baseState=m;e.baseQueue=x;Bg(l);a.expirationTime=l;a.memoizedState=k}}
function Cg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=e;e=c;if("function"!==typeof d)throw Error(u(191,d));d.call(e)}}}var Dg=pa.ReactCurrentBatchConfig,Eg=(new aa.Component).refs;function Fg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;0===a.expirationTime&&(a.updateQueue.baseState=c)}
var Jg={isMounted:function(a){return(a=a._reactInternalFiber)?dc(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Gg(),d=Dg.suspense;
c=Hg(c,a,d);d=wg(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);xg(a,d);Ig(a,c)}};function Kg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!bf(c,d)||!bf(e,f):!0}
function Lg(a,b,c){var d=!1,e=Af;var f=b.contextType;"object"===typeof f&&null!==f?f=sg(f):(e=L(b)?Bf:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Cf(a,e):Af);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Jg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Mg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jg.enqueueReplaceState(b,b.state,null)}
function Ng(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Eg;ug(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=sg(f):(f=L(b)?Bf:J.current,e.context=Cf(a,f));zg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Fg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jg.enqueueReplaceState(e,e.state,null),zg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Og=Array.isArray;
function Pg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(u(309));var d=c.stateNode}if(!d)throw Error(u(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Eg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(u(284));if(!c._owner)throw Error(u(290,a));}return a}
function Qg(a,b){if("textarea"!==a.type)throw Error(u(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}
function Rg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Sg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Tg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Pg(a,b,c),d.return=a,d;d=Ug(c.type,c.key,c.props,null,a.mode,d);d.ref=Pg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=Vg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Wg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Tg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case ra:return c=Ug(b.type,b.key,b.props,null,a.mode,c),c.ref=Pg(a,null,b),c.return=a,c;case sa:return b=Vg(b,a.mode,c),b.return=a,b}if(Og(b)||
Ga(b))return b=Wg(b,a.mode,c,null),b.return=a,b;Qg(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case ra:return c.key===e?c.type===ta?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case sa:return c.key===e?l(a,b,c,d):null}if(Og(c)||Ga(c))return null!==e?null:m(a,b,c,d,null);Qg(a,c)}return null}function z(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case ra:return a=a.get(null===d.key?c:d.key)||null,d.type===ta?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case sa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Og(d)||Ga(d))return a=a.get(c)||null,m(b,a,d,e,null);Qg(b,d)}return null}function ca(e,g,h,k){for(var l=null,t=null,m=g,y=g=0,A=null;null!==m&&y<h.length;y++){m.index>y?(A=m,m=null):A=m.sibling;var q=x(e,m,h[y],k);if(null===q){null===m&&(m=A);break}a&&
m&&null===q.alternate&&b(e,m);g=f(q,g,y);null===t?l=q:t.sibling=q;t=q;m=A}if(y===h.length)return c(e,m),l;if(null===m){for(;y<h.length;y++)m=p(e,h[y],k),null!==m&&(g=f(m,g,y),null===t?l=m:t.sibling=m,t=m);return l}for(m=d(e,m);y<h.length;y++)A=z(m,e,y,h[y],k),null!==A&&(a&&null!==A.alternate&&m.delete(null===A.key?y:A.key),g=f(A,g,y),null===t?l=A:t.sibling=A,t=A);a&&m.forEach(function(a){return b(e,a)});return l}function D(e,g,h,l){var k=Ga(h);if("function"!==typeof k)throw Error(u(150));h=k.call(h);
if(null==h)throw Error(u(151));for(var m=k=null,t=g,y=g=0,A=null,q=h.next();null!==t&&!q.done;y++,q=h.next()){t.index>y?(A=t,t=null):A=t.sibling;var D=x(e,t,q.value,l);if(null===D){null===t&&(t=A);break}a&&t&&null===D.alternate&&b(e,t);g=f(D,g,y);null===m?k=D:m.sibling=D;m=D;t=A}if(q.done)return c(e,t),k;if(null===t){for(;!q.done;y++,q=h.next())q=p(e,q.value,l),null!==q&&(g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);return k}for(t=d(e,t);!q.done;y++,q=h.next())q=z(t,e,y,q.value,l),null!==q&&(a&&null!==
q.alternate&&t.delete(null===q.key?y:q.key),g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);a&&t.forEach(function(a){return b(e,a)});return k}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ta&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case ra:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ta){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,
k.sibling);d=e(k,f.props);d.ref=Pg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ta?(d=Wg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ug(f.type,f.key,f.props,null,a.mode,h),h.ref=Pg(a,d,f),h.return=a,a=h)}return g(a);case sa:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=
d.sibling}d=Vg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Tg(f,a.mode,h),d.return=a,a=d),g(a);if(Og(f))return ca(a,d,f,h);if(Ga(f))return D(a,d,f,h);l&&Qg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(u(152,a.displayName||a.name||"Component"));}return c(a,d)}}var Xg=Rg(!0),Yg=Rg(!1),Zg={},$g={current:Zg},ah={current:Zg},bh={current:Zg};
function ch(a){if(a===Zg)throw Error(u(174));return a}function dh(a,b){I(bh,b);I(ah,a);I($g,Zg);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Ob(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=Ob(b,a)}H($g);I($g,b)}function eh(){H($g);H(ah);H(bh)}function fh(a){ch(bh.current);var b=ch($g.current);var c=Ob(b,a.type);b!==c&&(I(ah,a),I($g,c))}function gh(a){ah.current===a&&(H($g),H(ah))}var M={current:0};
function hh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===Bd||c.data===Cd))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function ih(a,b){return{responder:a,props:b}}
var jh=pa.ReactCurrentDispatcher,kh=pa.ReactCurrentBatchConfig,lh=0,N=null,O=null,P=null,mh=!1;function Q(){throw Error(u(321));}function nh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!$e(a[c],b[c]))return!1;return!0}
function oh(a,b,c,d,e,f){lh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.expirationTime=0;jh.current=null===a||null===a.memoizedState?ph:qh;a=c(d,e);if(b.expirationTime===lh){f=0;do{b.expirationTime=0;if(!(25>f))throw Error(u(301));f+=1;P=O=null;b.updateQueue=null;jh.current=rh;a=c(d,e)}while(b.expirationTime===lh)}jh.current=sh;b=null!==O&&null!==O.next;lh=0;P=O=N=null;mh=!1;if(b)throw Error(u(300));return a}
function th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function uh(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(u(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}
function vh(a,b){return"function"===typeof b?b(a):b}
function wh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.expirationTime;if(l<lh){var m={expirationTime:k.expirationTime,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null};null===h?(g=h=m,f=d):h=h.next=m;l>N.expirationTime&&
(N.expirationTime=l,Bg(l))}else null!==h&&(h=h.next={expirationTime:1073741823,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),Ag(l,k.suspenseConfig),d=k.eagerReducer===a?k.eagerState:a(d,k.action);k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;$e(d,b.memoizedState)||(rg=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function xh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);$e(f,b.memoizedState)||(rg=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function yh(a){var b=th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:vh,lastRenderedState:a};a=a.dispatch=zh.bind(null,N,a);return[b.memoizedState,a]}function Ah(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}
function Bh(){return uh().memoizedState}function Ch(a,b,c,d){var e=th();N.effectTag|=a;e.memoizedState=Ah(1|b,c,void 0,void 0===d?null:d)}function Dh(a,b,c,d){var e=uh();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&nh(d,g.deps)){Ah(b,c,f,d);return}}N.effectTag|=a;e.memoizedState=Ah(1|b,c,f,d)}function Eh(a,b){return Ch(516,4,a,b)}function Fh(a,b){return Dh(516,4,a,b)}function Gh(a,b){return Dh(4,2,a,b)}
function Hh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function Ih(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Dh(4,2,Hh.bind(null,b,a),c)}function Jh(){}function Kh(a,b){th().memoizedState=[a,void 0===b?null:b];return a}function Lh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Mh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Nh(a,b,c){var d=ag();cg(98>d?98:d,function(){a(!0)});cg(97<d?97:d,function(){var d=kh.suspense;kh.suspense=void 0===b?null:b;try{a(!1),c()}finally{kh.suspense=d}})}
function zh(a,b,c){var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e={expirationTime:d,suspenseConfig:e,action:c,eagerReducer:null,eagerState:null,next:null};var f=b.pending;null===f?e.next=e:(e.next=f.next,f.next=e);b.pending=e;f=a.alternate;if(a===N||null!==f&&f===N)mh=!0,e.expirationTime=lh,N.expirationTime=lh;else{if(0===a.expirationTime&&(null===f||0===f.expirationTime)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.eagerReducer=f;e.eagerState=h;if($e(h,g))return}catch(k){}finally{}Ig(a,
d)}}
var sh={readContext:sg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useResponder:Q,useDeferredValue:Q,useTransition:Q},ph={readContext:sg,useCallback:Kh,useContext:sg,useEffect:Eh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Ch(4,2,Hh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Ch(4,2,a,b)},useMemo:function(a,b){var c=th();b=void 0===b?null:b;a=a();c.memoizedState=[a,
b];return a},useReducer:function(a,b,c){var d=th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=zh.bind(null,N,a);return[d.memoizedState,a]},useRef:function(a){var b=th();a={current:a};return b.memoizedState=a},useState:yh,useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=yh(a),d=c[0],e=c[1];Eh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=
c}},[a,b]);return d},useTransition:function(a){var b=yh(!1),c=b[0];b=b[1];return[Kh(Nh.bind(null,b,a),[b,a]),c]}},qh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:wh,useRef:Bh,useState:function(){return wh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=wh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=
wh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,b,a),[b,a]),c]}},rh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:xh,useRef:Bh,useState:function(){return xh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=xh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=xh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,
b,a),[b,a]),c]}},Oh=null,Ph=null,Qh=!1;function Rh(a,b){var c=Sh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function Th(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function Uh(a){if(Qh){var b=Ph;if(b){var c=b;if(!Th(a,b)){b=Jd(c.nextSibling);if(!b||!Th(a,b)){a.effectTag=a.effectTag&-1025|2;Qh=!1;Oh=a;return}Rh(Oh,c)}Oh=a;Ph=Jd(b.firstChild)}else a.effectTag=a.effectTag&-1025|2,Qh=!1,Oh=a}}function Vh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Oh=a}
function Wh(a){if(a!==Oh)return!1;if(!Qh)return Vh(a),Qh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Gd(b,a.memoizedProps))for(b=Ph;b;)Rh(a,b),b=Jd(b.nextSibling);Vh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(u(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===Ad){if(0===b){Ph=Jd(a.nextSibling);break a}b--}else c!==zd&&c!==Cd&&c!==Bd||b++}a=a.nextSibling}Ph=null}}else Ph=Oh?Jd(a.stateNode.nextSibling):null;return!0}
function Xh(){Ph=Oh=null;Qh=!1}var Yh=pa.ReactCurrentOwner,rg=!1;function R(a,b,c,d){b.child=null===a?Yg(b,null,c,d):Xg(b,a.child,c,d)}function Zh(a,b,c,d,e){c=c.render;var f=b.ref;qg(b,e);d=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,d,e);return b.child}
function ai(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!bi(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ci(a,b,g,d,e,f);a=Ug(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:bf,c(e,d)&&a.ref===b.ref))return $h(a,b,f);b.effectTag|=1;a=Sg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ci(a,b,c,d,e,f){return null!==a&&bf(a.memoizedProps,d)&&a.ref===b.ref&&(rg=!1,e<f)?(b.expirationTime=a.expirationTime,$h(a,b,f)):di(a,b,c,d,f)}function ei(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function di(a,b,c,d,e){var f=L(c)?Bf:J.current;f=Cf(b,f);qg(b,e);c=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,c,e);return b.child}
function fi(a,b,c,d,e){if(L(c)){var f=!0;Gf(b)}else f=!1;qg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Lg(b,c,d),Ng(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l);tg=!1;var x=b.memoizedState;g.state=x;zg(b,d,g,e);k=b.memoizedState;h!==d||x!==k||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),k=b.memoizedState),(h=tg||Kg(b,c,h,d,x,k,l))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,vg(a,b),h=b.memoizedProps,g.props=b.type===b.elementType?h:ig(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l)),m=c.getDerivedStateFromProps,(p="function"===typeof m||"function"===
typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l),tg=!1,k=b.memoizedState,g.state=k,zg(b,d,g,e),x=b.memoizedState,h!==d||k!==x||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),x=b.memoizedState),(m=tg||Kg(b,c,h,d,k,x,l))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=l,d=m):
("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return gi(a,b,c,d,f,e)}
function gi(a,b,c,d,e,f){ei(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Hf(b,c,!1),$h(a,b,f);d=b.stateNode;Yh.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Xg(b,a.child,null,f),b.child=Xg(b,null,h,f)):R(a,b,h,f);b.memoizedState=d.state;e&&Hf(b,c,!0);return b.child}function hi(a){var b=a.stateNode;b.pendingContext?Ef(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ef(a,b.context,!1);dh(a,b.containerInfo)}
var ii={dehydrated:null,retryTime:0};
function ji(a,b,c){var d=b.mode,e=b.pendingProps,f=M.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);I(M,f&1);if(null===a){void 0!==e.fallback&&Uh(b);if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=
b;e.sibling=c;b.memoizedState=ii;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=Yg(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=Sg(a,a.pendingProps);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=Sg(d,e);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=ii;b.child=c;return d}c=Xg(b,a.child,e.children,c);b.memoizedState=null;return b.child=
c}a=a.child;if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=ii;b.child=e;return c}b.memoizedState=null;return b.child=Xg(b,a,e.children,c)}
function ki(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);pg(a.return,b)}function li(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailExpiration:0,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f)}
function mi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&ki(a,c);else if(19===a.tag)ki(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(M,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===hh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);li(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===hh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}li(b,!0,c,null,f,b.lastEffect);break;case "together":li(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function $h(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Bg(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(u(153));if(null!==b.child){a=b.child;c=Sg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Sg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}var ni,oi,pi,qi;
ni=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};oi=function(){};
pi=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;ch($g.current);a=null;switch(c){case "input":f=zb(g,f);d=zb(g,d);a=[];break;case "option":f=Gb(g,f);d=Gb(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=Ib(g,f);d=Ib(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=sd)}od(c,d);var h,k;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===
h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else"dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(Qa.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),
c[k]=l[k])}else c||(a||(a=[]),a.push(h,c)),c=l;else"dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(Qa.hasOwnProperty(h)?(null!=l&&rd(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l))}c&&(a=a||[]).push("style",c);e=a;if(b.updateQueue=e)b.effectTag|=4}};
qi=function(a,b,c,d){c!==d&&(b.effectTag|=4)};function ri(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function si(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return L(b.type)&&Df(),null;case 3:return eh(),H(K),H(J),c=b.stateNode,c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==a&&null!==a.child||!Wh(b)||(b.effectTag|=4),oi(b),null;case 5:gh(b);c=ch(bh.current);var e=b.type;if(null!==a&&null!=b.stateNode)pi(a,b,e,d,c),a.ref!==b.ref&&(b.effectTag|=128);else{if(!d){if(null===b.stateNode)throw Error(u(166));
return null}a=ch($g.current);if(Wh(b)){d=b.stateNode;e=b.type;var f=b.memoizedProps;d[Md]=b;d[Nd]=f;switch(e){case "iframe":case "object":case "embed":F("load",d);break;case "video":case "audio":for(a=0;a<ac.length;a++)F(ac[a],d);break;case "source":F("error",d);break;case "img":case "image":case "link":F("error",d);F("load",d);break;case "form":F("reset",d);F("submit",d);break;case "details":F("toggle",d);break;case "input":Ab(d,f);F("invalid",d);rd(c,"onChange");break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};F("invalid",d);rd(c,"onChange");break;case "textarea":Jb(d,f),F("invalid",d),rd(c,"onChange")}od(e,f);a=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(a=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(a=["children",""+h]):Qa.hasOwnProperty(g)&&null!=h&&rd(c,g)}switch(e){case "input":xb(d);Eb(d,f,!0);break;case "textarea":xb(d);Lb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&
(d.onclick=sd)}c=a;b.updateQueue=c;null!==c&&(b.effectTag|=4)}else{g=9===c.nodeType?c:c.ownerDocument;a===qd&&(a=Nb(e));a===qd?"script"===e?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(e,{is:d.is}):(a=g.createElement(e),"select"===e&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,e);a[Md]=b;a[Nd]=d;ni(a,b,!1,!1);b.stateNode=a;g=pd(e,d);switch(e){case "iframe":case "object":case "embed":F("load",
a);h=d;break;case "video":case "audio":for(h=0;h<ac.length;h++)F(ac[h],a);h=d;break;case "source":F("error",a);h=d;break;case "img":case "image":case "link":F("error",a);F("load",a);h=d;break;case "form":F("reset",a);F("submit",a);h=d;break;case "details":F("toggle",a);h=d;break;case "input":Ab(a,d);h=zb(a,d);F("invalid",a);rd(c,"onChange");break;case "option":h=Gb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};h=n({},d,{value:void 0});F("invalid",a);rd(c,"onChange");break;case "textarea":Jb(a,
d);h=Ib(a,d);F("invalid",a);rd(c,"onChange");break;default:h=d}od(e,h);var k=h;for(f in k)if(k.hasOwnProperty(f)){var l=k[f];"style"===f?md(a,l):"dangerouslySetInnerHTML"===f?(l=l?l.__html:void 0,null!=l&&Qb(a,l)):"children"===f?"string"===typeof l?("textarea"!==e||""!==l)&&Rb(a,l):"number"===typeof l&&Rb(a,""+l):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(Qa.hasOwnProperty(f)?null!=l&&rd(c,f):null!=l&&qb(a,f,l,g))}switch(e){case "input":xb(a);Eb(a,d,!1);
break;case "textarea":xb(a);Lb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+rb(d.value));break;case "select":a.multiple=!!d.multiple;c=d.value;null!=c?Hb(a,!!d.multiple,c,!1):null!=d.defaultValue&&Hb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof h.onClick&&(a.onclick=sd)}Fd(e,d)&&(b.effectTag|=4)}null!==b.ref&&(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)qi(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(u(166));
c=ch(bh.current);ch($g.current);Wh(b)?(c=b.stateNode,d=b.memoizedProps,c[Md]=b,c.nodeValue!==d&&(b.effectTag|=4)):(c=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),c[Md]=b,b.stateNode=c)}return null;case 13:H(M);d=b.memoizedState;if(0!==(b.effectTag&64))return b.expirationTime=c,b;c=null!==d;d=!1;null===a?void 0!==b.memoizedProps.fallback&&Wh(b):(e=a.memoizedState,d=null!==e,c||null===e||(e=a.child.sibling,null!==e&&(f=b.firstEffect,null!==f?(b.firstEffect=e,e.nextEffect=f):(b.firstEffect=b.lastEffect=
e,e.nextEffect=null),e.effectTag=8)));if(c&&!d&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M.current&1))S===ti&&(S=ui);else{if(S===ti||S===ui)S=vi;0!==wi&&null!==T&&(xi(T,U),yi(T,wi))}if(c||d)b.effectTag|=4;return null;case 4:return eh(),oi(b),null;case 10:return og(b),null;case 17:return L(b.type)&&Df(),null;case 19:H(M);d=b.memoizedState;if(null===d)return null;e=0!==(b.effectTag&64);f=d.rendering;if(null===f)if(e)ri(d,!1);else{if(S!==ti||null!==a&&0!==(a.effectTag&
64))for(f=b.child;null!==f;){a=hh(f);if(null!==a){b.effectTag|=64;ri(d,!1);e=a.updateQueue;null!==e&&(b.updateQueue=e,b.effectTag|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;for(d=b.child;null!==d;)e=d,f=c,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,a=e.alternate,null===a?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=a.childExpirationTime,
e.expirationTime=a.expirationTime,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,f=a.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),d=d.sibling;I(M,M.current&1|2);return b.child}f=f.sibling}}else{if(!e)if(a=hh(f),null!==a){if(b.effectTag|=64,e=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.effectTag|=4),ri(d,!0),null===d.tail&&"hidden"===d.tailMode&&!f.alternate)return b=
b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*$f()-d.renderingStartTime>d.tailExpiration&&1<c&&(b.effectTag|=64,e=!0,ri(d,!1),b.expirationTime=b.childExpirationTime=c-1);d.isBackwards?(f.sibling=b.child,b.child=f):(c=d.last,null!==c?c.sibling=f:b.child=f,d.last=f)}return null!==d.tail?(0===d.tailExpiration&&(d.tailExpiration=$f()+500),c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=$f(),c.sibling=null,b=M.current,I(M,e?b&1|2:b&1),c):null}throw Error(u(156,
b.tag));}function zi(a){switch(a.tag){case 1:L(a.type)&&Df();var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:eh();H(K);H(J);b=a.effectTag;if(0!==(b&64))throw Error(u(285));a.effectTag=b&-4097|64;return a;case 5:return gh(a),null;case 13:return H(M),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return H(M),null;case 4:return eh(),null;case 10:return og(a),null;default:return null}}function Ai(a,b){return{value:a,source:b,stack:Ja(b)}}
var Bi="function"===typeof WeakSet?WeakSet:Set;function Ci(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=Ja(c));null!==c&&Ia(c.type);b=b.value;null!==a&&1===a.tag&&Ia(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Di(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Ei(a,c)}}function Fi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Ei(a,c)}else b.current=null}
function Gi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:ig(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(u(163));}
function Hi(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.destroy;c.destroy=void 0;void 0!==d&&d()}c=c.next}while(c!==b)}}function Ii(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}
function Ji(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:Ii(3,c);return;case 1:a=c.stateNode;if(c.effectTag&4)if(null===b)a.componentDidMount();else{var d=c.elementType===c.type?b.memoizedProps:ig(c.type,b.memoizedProps);a.componentDidUpdate(d,b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}b=c.updateQueue;null!==b&&Cg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Cg(c,b,a)}return;
case 5:a=c.stateNode;null===b&&c.effectTag&4&&Fd(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Vc(c))));return;case 19:case 17:case 20:case 21:return}throw Error(u(163));}
function Ki(a,b,c){"function"===typeof Li&&Li(b);switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;cg(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c()}catch(h){Ei(g,h)}}a=a.next}while(a!==d)})}break;case 1:Fi(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&Di(b,c);break;case 5:Fi(b);break;case 4:Mi(a,b,c)}}
function Ni(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;a.stateNode=null;null!==b&&Ni(b)}function Oi(a){return 5===a.tag||3===a.tag||4===a.tag}
function Pi(a){a:{for(var b=a.return;null!==b;){if(Oi(b)){var c=b;break a}b=b.return}throw Error(u(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(u(161));}c.effectTag&16&&(Rb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Oi(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}d?Qi(a,c,b):Ri(a,c,b)}
function Qi(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=sd));else if(4!==d&&(a=a.child,null!==a))for(Qi(a,b,c),a=a.sibling;null!==a;)Qi(a,b,c),a=a.sibling}
function Ri(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Ri(a,b,c),a=a.sibling;null!==a;)Ri(a,b,c),a=a.sibling}
function Mi(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(u(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,m=k;;)if(Ki(h,m,l),null!==m.child&&4!==m.tag)m.child.return=m,m=m.child;else{if(m===k)break a;for(;null===m.sibling;){if(null===m.return||m.return===k)break a;m=m.return}m.sibling.return=m.return;m=m.sibling}g?(h=
f,k=d.stateNode,8===h.nodeType?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode)}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Ki(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}
function Si(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:Hi(3,b);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Nd]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Bb(c,d);pd(a,e);b=pd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?md(c,h):"dangerouslySetInnerHTML"===g?Qb(c,h):"children"===g?Rb(c,h):qb(c,g,h,b)}switch(a){case "input":Cb(c,d);break;
case "textarea":Kb(c,d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?Hb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?Hb(c,!!d.multiple,d.defaultValue,!0):Hb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(u(162));b.stateNode.nodeValue=b.memoizedProps;return;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,Vc(b.containerInfo));return;case 12:return;case 13:c=b;null===b.memoizedState?
d=!1:(d=!0,c=b.child,Ti=$f());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=ld("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=
f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}Ui(b);return;case 19:Ui(b);return;case 17:return}throw Error(u(163));}function Ui(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Bi);b.forEach(function(b){var d=Vi.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
var Wi="function"===typeof WeakMap?WeakMap:Map;function Xi(a,b,c){c=wg(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Yi||(Yi=!0,Zi=d);Ci(a,b)};return c}
function $i(a,b,c){c=wg(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ci(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===aj?aj=new Set([this]):aj.add(this),Ci(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var bj=Math.ceil,cj=pa.ReactCurrentDispatcher,dj=pa.ReactCurrentOwner,V=0,ej=8,fj=16,gj=32,ti=0,hj=1,ij=2,ui=3,vi=4,jj=5,W=V,T=null,X=null,U=0,S=ti,kj=null,lj=1073741823,mj=1073741823,nj=null,wi=0,oj=!1,Ti=0,pj=500,Y=null,Yi=!1,Zi=null,aj=null,qj=!1,rj=null,sj=90,tj=null,uj=0,vj=null,wj=0;function Gg(){return(W&(fj|gj))!==V?1073741821-($f()/10|0):0!==wj?wj:wj=1073741821-($f()/10|0)}
function Hg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=ag();if(0===(b&4))return 99===d?1073741823:1073741822;if((W&fj)!==V)return U;if(null!==c)a=hg(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=hg(a,150,100);break;case 97:case 96:a=hg(a,5E3,250);break;case 95:a=2;break;default:throw Error(u(326));}null!==T&&a===U&&--a;return a}
function Ig(a,b){if(50<uj)throw uj=0,vj=null,Error(u(185));a=xj(a,b);if(null!==a){var c=ag();1073741823===b?(W&ej)!==V&&(W&(fj|gj))===V?yj(a):(Z(a),W===V&&gg()):Z(a);(W&4)===V||98!==c&&99!==c||(null===tj?tj=new Map([[a,b]]):(c=tj.get(a),(void 0===c||c>b)&&tj.set(a,b)))}}
function xj(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(T===e&&(Bg(b),S===vi&&xi(e,U)),yi(e,b));return e}
function zj(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Aj(a,b))return b;var c=a.lastPingedTime;a=a.nextKnownPendingLevel;a=c>a?c:a;return 2>=a&&b!==a?0:a}
function Z(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=eg(yj.bind(null,a));else{var b=zj(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else{var d=Gg();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Tf&&Kf(c)}a.callbackExpirationTime=
b;a.callbackPriority=d;b=1073741823===b?eg(yj.bind(null,a)):dg(d,Bj.bind(null,a),{timeout:10*(1073741821-b)-$f()});a.callbackNode=b}}}
function Bj(a,b){wj=0;if(b)return b=Gg(),Cj(a,b),Z(a),null;var c=zj(a);if(0!==c){b=a.callbackNode;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&c===U||Ej(a,c);if(null!==X){var d=W;W|=fj;var e=Fj();do try{Gj();break}catch(h){Hj(a,h)}while(1);ng();W=d;cj.current=e;if(S===hj)throw b=kj,Ej(a,c),xi(a,c),Z(a),b;if(null===X)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=S,T=null,d){case ti:case hj:throw Error(u(345));case ij:Cj(a,2<c?2:c);break;case ui:xi(a,c);d=a.lastSuspendedTime;
c===d&&(a.nextKnownPendingLevel=Ij(e));if(1073741823===lj&&(e=Ti+pj-$f(),10<e)){if(oj){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Ej(a,c);break}}f=zj(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=Hd(Jj.bind(null,a),e);break}Jj(a);break;case vi:xi(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Ij(e));if(oj&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Ej(a,c);break}e=zj(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=
d;break}1073741823!==mj?d=10*(1073741821-mj)-$f():1073741823===lj?d=0:(d=10*(1073741821-lj)-5E3,e=$f(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*bj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=Hd(Jj.bind(null,a),d);break}Jj(a);break;case jj:if(1073741823!==lj&&null!==nj){f=lj;var g=nj;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=$f()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){xi(a,c);a.timeoutHandle=
Hd(Jj.bind(null,a),d);break}}Jj(a);break;default:throw Error(u(329));}Z(a);if(a.callbackNode===b)return Bj.bind(null,a)}}return null}
function yj(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&b===U||Ej(a,b);if(null!==X){var c=W;W|=fj;var d=Fj();do try{Kj();break}catch(e){Hj(a,e)}while(1);ng();W=c;cj.current=d;if(S===hj)throw c=kj,Ej(a,b),xi(a,b),Z(a),c;if(null!==X)throw Error(u(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;T=null;Jj(a);Z(a)}return null}function Lj(){if(null!==tj){var a=tj;tj=null;a.forEach(function(a,c){Cj(c,a);Z(c)});gg()}}
function Mj(a,b){var c=W;W|=1;try{return a(b)}finally{W=c,W===V&&gg()}}function Nj(a,b){var c=W;W&=-2;W|=ej;try{return a(b)}finally{W=c,W===V&&gg()}}
function Ej(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Id(c));if(null!==X)for(c=X.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Df();break;case 3:eh();H(K);H(J);break;case 5:gh(d);break;case 4:eh();break;case 13:H(M);break;case 19:H(M);break;case 10:og(d)}c=c.return}T=a;X=Sg(a.current,null);U=b;S=ti;kj=null;mj=lj=1073741823;nj=null;wi=0;oj=!1}
function Hj(a,b){do{try{ng();jh.current=sh;if(mh)for(var c=N.memoizedState;null!==c;){var d=c.queue;null!==d&&(d.pending=null);c=c.next}lh=0;P=O=N=null;mh=!1;if(null===X||null===X.return)return S=hj,kj=b,X=null;a:{var e=a,f=X.return,g=X,h=b;b=U;g.effectTag|=2048;g.firstEffect=g.lastEffect=null;if(null!==h&&"object"===typeof h&&"function"===typeof h.then){var k=h;if(0===(g.mode&2)){var l=g.alternate;l?(g.memoizedState=l.memoizedState,g.expirationTime=l.expirationTime):g.memoizedState=null}var m=0!==
(M.current&1),p=f;do{var x;if(x=13===p.tag){var z=p.memoizedState;if(null!==z)x=null!==z.dehydrated?!0:!1;else{var ca=p.memoizedProps;x=void 0===ca.fallback?!1:!0!==ca.unstable_avoidThisFallback?!0:m?!1:!0}}if(x){var D=p.updateQueue;if(null===D){var t=new Set;t.add(k);p.updateQueue=t}else D.add(k);if(0===(p.mode&2)){p.effectTag|=64;g.effectTag&=-2981;if(1===g.tag)if(null===g.alternate)g.tag=17;else{var y=wg(1073741823,null);y.tag=2;xg(g,y)}g.expirationTime=1073741823;break a}h=void 0;g=b;var A=e.pingCache;
null===A?(A=e.pingCache=new Wi,h=new Set,A.set(k,h)):(h=A.get(k),void 0===h&&(h=new Set,A.set(k,h)));if(!h.has(g)){h.add(g);var q=Oj.bind(null,e,k,g);k.then(q,q)}p.effectTag|=4096;p.expirationTime=b;break a}p=p.return}while(null!==p);h=Error((Ia(g.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+Ja(g))}S!==jj&&(S=ij);h=Ai(h,g);p=f;do{switch(p.tag){case 3:k=
h;p.effectTag|=4096;p.expirationTime=b;var B=Xi(p,k,b);yg(p,B);break a;case 1:k=h;var w=p.type,ub=p.stateNode;if(0===(p.effectTag&64)&&("function"===typeof w.getDerivedStateFromError||null!==ub&&"function"===typeof ub.componentDidCatch&&(null===aj||!aj.has(ub)))){p.effectTag|=4096;p.expirationTime=b;var vb=$i(p,k,b);yg(p,vb);break a}}p=p.return}while(null!==p)}X=Pj(X)}catch(Xc){b=Xc;continue}break}while(1)}function Fj(){var a=cj.current;cj.current=sh;return null===a?sh:a}
function Ag(a,b){a<lj&&2<a&&(lj=a);null!==b&&a<mj&&2<a&&(mj=a,nj=b)}function Bg(a){a>wi&&(wi=a)}function Kj(){for(;null!==X;)X=Qj(X)}function Gj(){for(;null!==X&&!Uf();)X=Qj(X)}function Qj(a){var b=Rj(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=Pj(a));dj.current=null;return b}
function Pj(a){X=a;do{var b=X.alternate;a=X.return;if(0===(X.effectTag&2048)){b=si(b,X,U);if(1===U||1!==X.childExpirationTime){for(var c=0,d=X.child;null!==d;){var e=d.expirationTime,f=d.childExpirationTime;e>c&&(c=e);f>c&&(c=f);d=d.sibling}X.childExpirationTime=c}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=X.firstEffect),null!==X.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=X.firstEffect),a.lastEffect=X.lastEffect),1<X.effectTag&&(null!==
a.lastEffect?a.lastEffect.nextEffect=X:a.firstEffect=X,a.lastEffect=X))}else{b=zi(X);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048)}b=X.sibling;if(null!==b)return b;X=a}while(null!==X);S===ti&&(S=jj);return null}function Ij(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function Jj(a){var b=ag();cg(99,Sj.bind(null,a,b));return null}
function Sj(a,b){do Dj();while(null!==rj);if((W&(fj|gj))!==V)throw Error(u(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(u(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Ij(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=
d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===T&&(X=T=null,U=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=W;W|=gj;dj.current=null;Dd=fd;var g=xd();if(yd(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,
m=k.focusNode;k=k.focusOffset;try{h.nodeType,m.nodeType}catch(wb){h=null;break a}var p=0,x=-1,z=-1,ca=0,D=0,t=g,y=null;b:for(;;){for(var A;;){t!==h||0!==l&&3!==t.nodeType||(x=p+l);t!==m||0!==k&&3!==t.nodeType||(z=p+k);3===t.nodeType&&(p+=t.nodeValue.length);if(null===(A=t.firstChild))break;y=t;t=A}for(;;){if(t===g)break b;y===h&&++ca===l&&(x=p);y===m&&++D===k&&(z=p);if(null!==(A=t.nextSibling))break;t=y;y=t.parentNode}t=A}h=-1===x||-1===z?null:{start:x,end:z}}else h=null}h=h||{start:0,end:0}}else h=
null;Ed={activeElementDetached:null,focusedElem:g,selectionRange:h};fd=!1;Y=e;do try{Tj()}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(g=a,h=b;null!==Y;){var q=Y.effectTag;q&16&&Rb(Y.stateNode,"");if(q&128){var B=Y.alternate;if(null!==B){var w=B.ref;null!==w&&("function"===typeof w?w(null):w.current=null)}}switch(q&1038){case 2:Pi(Y);Y.effectTag&=-3;break;case 6:Pi(Y);Y.effectTag&=-3;Si(Y.alternate,Y);break;case 1024:Y.effectTag&=-1025;break;case 1028:Y.effectTag&=
-1025;Si(Y.alternate,Y);break;case 4:Si(Y.alternate,Y);break;case 8:l=Y,Mi(g,l,h),Ni(l)}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);w=Ed;B=xd();q=w.focusedElem;h=w.selectionRange;if(B!==q&&q&&q.ownerDocument&&wd(q.ownerDocument.documentElement,q)){null!==h&&yd(q)&&(B=h.start,w=h.end,void 0===w&&(w=B),"selectionStart"in q?(q.selectionStart=B,q.selectionEnd=Math.min(w,q.value.length)):(w=(B=q.ownerDocument||document)&&B.defaultView||window,w.getSelection&&
(w=w.getSelection(),l=q.textContent.length,g=Math.min(h.start,l),h=void 0===h.end?g:Math.min(h.end,l),!w.extend&&g>h&&(l=h,h=g,g=l),l=vd(q,g),m=vd(q,h),l&&m&&(1!==w.rangeCount||w.anchorNode!==l.node||w.anchorOffset!==l.offset||w.focusNode!==m.node||w.focusOffset!==m.offset)&&(B=B.createRange(),B.setStart(l.node,l.offset),w.removeAllRanges(),g>h?(w.addRange(B),w.extend(m.node,m.offset)):(B.setEnd(m.node,m.offset),w.addRange(B))))));B=[];for(w=q;w=w.parentNode;)1===w.nodeType&&B.push({element:w,left:w.scrollLeft,
top:w.scrollTop});"function"===typeof q.focus&&q.focus();for(q=0;q<B.length;q++)w=B[q],w.element.scrollLeft=w.left,w.element.scrollTop=w.top}fd=!!Dd;Ed=Dd=null;a.current=c;Y=e;do try{for(q=a;null!==Y;){var ub=Y.effectTag;ub&36&&Ji(q,Y.alternate,Y);if(ub&128){B=void 0;var vb=Y.ref;if(null!==vb){var Xc=Y.stateNode;switch(Y.tag){case 5:B=Xc;break;default:B=Xc}"function"===typeof vb?vb(B):vb.current=B}}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=
null;Vf();W=f}else a.current=c;if(qj)qj=!1,rj=a,sj=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0===b&&(aj=null);1073741823===b?a===vj?uj++:(uj=0,vj=a):uj=0;"function"===typeof Uj&&Uj(c.stateNode,d);Z(a);if(Yi)throw Yi=!1,a=Zi,Zi=null,a;if((W&ej)!==V)return null;gg();return null}function Tj(){for(;null!==Y;){var a=Y.effectTag;0!==(a&256)&&Gi(Y.alternate,Y);0===(a&512)||qj||(qj=!0,dg(97,function(){Dj();return null}));Y=Y.nextEffect}}
function Dj(){if(90!==sj){var a=97<sj?97:sj;sj=90;return cg(a,Vj)}}function Vj(){if(null===rj)return!1;var a=rj;rj=null;if((W&(fj|gj))!==V)throw Error(u(331));var b=W;W|=gj;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:case 22:Hi(5,c),Ii(5,c)}}catch(d){if(null===a)throw Error(u(330));Ei(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}W=b;gg();return!0}
function Wj(a,b,c){b=Ai(c,b);b=Xi(a,b,1073741823);xg(a,b);a=xj(a,1073741823);null!==a&&Z(a)}function Ei(a,b){if(3===a.tag)Wj(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){Wj(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===aj||!aj.has(d))){a=Ai(b,a);a=$i(c,a,1073741823);xg(c,a);c=xj(c,1073741823);null!==c&&Z(c);break}}c=c.return}}
function Oj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);T===a&&U===c?S===vi||S===ui&&1073741823===lj&&$f()-Ti<pj?Ej(a,U):oj=!0:Aj(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,Z(a)))}function Vi(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=Gg(),b=Hg(b,a,null));a=xj(a,b);null!==a&&Z(a)}var Rj;
Rj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||K.current)rg=!0;else{if(d<c){rg=!1;switch(b.tag){case 3:hi(b);Xh();break;case 5:fh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:L(b.type)&&Gf(b);break;case 4:dh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;e=b.type._context;I(jg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;
if(0!==d&&d>=c)return ji(a,b,c);I(M,M.current&1);b=$h(a,b,c);return null!==b?b.sibling:null}I(M,M.current&1);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return mi(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);I(M,M.current);if(!d)return null}return $h(a,b,c)}rg=!1}}else rg=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Cf(b,J.current);qg(b,c);e=oh(null,
b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(L(d)){var f=!0;Gf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;ug(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Fg(b,d,g,a);e.updater=Jg;b.stateNode=e;e._reactInternalFiber=b;Ng(b,d,a,c);b=gi(null,b,d,!0,f,c)}else b.tag=0,R(null,b,e,c),b=b.child;return b;case 16:a:{e=b.elementType;null!==a&&(a.alternate=
null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;Ha(e);if(1!==e._status)throw e._result;e=e._result;b.type=e;f=b.tag=Xj(e);a=ig(e,a);switch(f){case 0:b=di(null,b,e,a,c);break a;case 1:b=fi(null,b,e,a,c);break a;case 11:b=Zh(null,b,e,a,c);break a;case 14:b=ai(null,b,e,ig(e.type,a),d,c);break a}throw Error(u(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),di(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),fi(a,b,d,e,c);
case 3:hi(b);d=b.updateQueue;if(null===a||null===d)throw Error(u(282));d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;vg(a,b);zg(b,d,null,c);d=b.memoizedState.element;if(d===e)Xh(),b=$h(a,b,c);else{if(e=b.stateNode.hydrate)Ph=Jd(b.stateNode.containerInfo.firstChild),Oh=b,e=Qh=!0;if(e)for(c=Yg(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else R(a,b,d,c),Xh();b=b.child}return b;case 5:return fh(b),null===a&&Uh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:
null,g=e.children,Gd(d,e)?g=null:null!==f&&Gd(d,f)&&(b.effectTag|=16),ei(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(R(a,b,g,c),b=b.child),b;case 6:return null===a&&Uh(b),null;case 13:return ji(a,b,c);case 4:return dh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Xg(b,null,d,c):R(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),Zh(a,b,d,e,c);case 7:return R(a,b,b.pendingProps,c),b.child;case 8:return R(a,
b,b.pendingProps.children,c),b.child;case 12:return R(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(jg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=$e(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!K.current){b=$h(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==
k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=wg(c,null),l.tag=2,xg(h,l));h.expirationTime<c&&(h.expirationTime=c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);pg(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=
g}R(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,qg(b,c),e=sg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,R(a,b,d,c),b.child;case 14:return e=b.type,f=ig(e,b.pendingProps),f=ig(e.type,f),ai(a,b,e,f,d,c);case 15:return ci(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L(d)?(a=!0,Gf(b)):a=!1,qg(b,c),Lg(b,d,e),Ng(b,d,e,c),gi(null,
b,d,!0,a,c);case 19:return mi(a,b,c)}throw Error(u(156,b.tag));};var Uj=null,Li=null;function Yj(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Uj=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};Li=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function Zj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Sh(a,b,c,d){return new Zj(a,b,c,d)}
function bi(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Xj(a){if("function"===typeof a)return bi(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===za)return 11;if(a===Ca)return 14}return 2}
function Sg(a,b){var c=a.alternate;null===c?(c=Sh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Ug(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bi(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ta:return Wg(c.children,e,f,b);case ya:g=8;e|=7;break;case ua:g=8;e|=1;break;case va:return a=Sh(12,c,b,e|8),a.elementType=va,a.type=va,a.expirationTime=f,a;case Aa:return a=Sh(13,c,b,e),a.type=Aa,a.elementType=Aa,a.expirationTime=f,a;case Ba:return a=Sh(19,c,b,e),a.elementType=Ba,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case wa:g=
10;break a;case xa:g=9;break a;case za:g=11;break a;case Ca:g=14;break a;case Da:g=16;d=null;break a;case Ea:g=22;break a}throw Error(u(130,null==a?a:typeof a,""));}b=Sh(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Wg(a,b,c,d){a=Sh(7,a,d,b);a.expirationTime=c;return a}function Tg(a,b,c){a=Sh(6,a,null,b);a.expirationTime=c;return a}
function Vg(a,b,c){b=Sh(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function ak(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}
function Aj(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function xi(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0)}
function yi(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b))}function Cj(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b}
function bk(a,b,c,d){var e=b.current,f=Gg(),g=Dg.suspense;f=Hg(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(dc(c)!==c||1!==c.tag)throw Error(u(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(L(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(u(171));}if(1===c.tag){var k=c.type;if(L(k)){c=Ff(c,k,h);break a}}c=h}else c=Af;null===b.context?b.context=c:b.pendingContext=c;b=wg(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);xg(e,b);Ig(e,f);return f}function ck(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function dk(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b)}function ek(a,b){dk(a,b);(a=a.alternate)&&dk(a,b)}
function fk(a,b,c){c=null!=c&&!0===c.hydrate;var d=new ak(a,b,c),e=Sh(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;ug(e);a[Od]=d.current;c&&0!==b&&Jc(a,9===a.nodeType?a:a.ownerDocument);this._internalRoot=d}fk.prototype.render=function(a){bk(a,this._internalRoot,null,null)};fk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;bk(null,a,null,function(){b[Od]=null})};
function gk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function hk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new fk(a,0,b?{hydrate:!0}:void 0)}
function ik(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=ck(g);h.call(a)}}bk(b,g,a,e)}else{f=c._reactRootContainer=hk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=ck(g);k.call(a)}}Nj(function(){bk(b,g,a,e)})}return ck(g)}function jk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:sa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
wc=function(a){if(13===a.tag){var b=hg(Gg(),150,100);Ig(a,b);ek(a,b)}};xc=function(a){13===a.tag&&(Ig(a,3),ek(a,3))};yc=function(a){if(13===a.tag){var b=Gg();b=Hg(b,a,null);Ig(a,b);ek(a,b)}};
Ua=function(a,b,c){switch(b){case "input":Cb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Qd(d);if(!e)throw Error(u(90));yb(d);Cb(d,e)}}}break;case "textarea":Kb(a,c);break;case "select":b=c.value,null!=b&&Hb(a,!!c.multiple,b,!1)}};$a=Mj;
ab=function(a,b,c,d,e){var f=W;W|=4;try{return cg(98,a.bind(null,b,c,d,e))}finally{W=f,W===V&&gg()}};bb=function(){(W&(1|fj|gj))===V&&(Lj(),Dj())};cb=function(a,b){var c=W;W|=2;try{return a(b)}finally{W=c,W===V&&gg()}};function kk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!gk(b))throw Error(u(200));return jk(a,b,null,c)}var lk={Events:[Nc,Pd,Qd,Sa,Oa,Xd,function(a){jc(a,Wd)},Ya,Za,id,mc,Dj,{current:!1}]};
(function(a){var b=a.findFiberByHostInstance;return Yj(n({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pa.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hc(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:tc,bundleType:0,version:"16.13.0",
rendererPackageName:"react-dom"});exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lk;exports.createPortal=kk;exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u(188));throw Error(u(268,Object.keys(a)));}a=hc(b);a=null===a?null:a.stateNode;return a};
exports.flushSync=function(a,b){if((W&(fj|gj))!==V)throw Error(u(187));var c=W;W|=1;try{return cg(99,a.bind(null,b))}finally{W=c,gg()}};exports.hydrate=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!0,c)};exports.render=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!1,c)};
exports.unmountComponentAtNode=function(a){if(!gk(a))throw Error(u(40));return a._reactRootContainer?(Nj(function(){ik(null,null,a,!1,function(){a._reactRootContainer=null;a[Od]=null})}),!0):!1};exports.unstable_batchedUpdates=Mj;exports.unstable_createPortal=function(a,b){return kk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!gk(c))throw Error(u(200));if(null==a||void 0===a._reactInternalFiber)throw Error(u(38));return ik(a,b,c,!1,d)};exports.version="16.13.0";

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
/** @license React v16.13.0
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';var k=require("object-assign"),l=require("react");function q(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var t="function"===typeof Symbol&&Symbol.for,aa=t?Symbol.for("react.portal"):60106,u=t?Symbol.for("react.fragment"):60107,ba=t?Symbol.for("react.strict_mode"):60108,ca=t?Symbol.for("react.profiler"):60114,v=t?Symbol.for("react.provider"):60109,da=t?Symbol.for("react.context"):60110,ea=t?Symbol.for("react.concurrent_mode"):60111,fa=t?Symbol.for("react.forward_ref"):60112,B=t?Symbol.for("react.suspense"):60113,ha=t?Symbol.for("react.suspense_list"):60120,ia=t?Symbol.for("react.memo"):60115,ja=t?Symbol.for("react.lazy"):
60116,ka=t?Symbol.for("react.block"):60121,la=t?Symbol.for("react.fundamental"):60117,ma=t?Symbol.for("react.scope"):60119;function na(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(c){0===a._status&&(c=c.default,a._status=1,a._result=c)},function(c){0===a._status&&(a._status=2,a._result=c)})}}
function C(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case u:return"Fragment";case aa:return"Portal";case ca:return"Profiler";case ba:return"StrictMode";case B:return"Suspense";case ha:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case da:return"Context.Consumer";case v:return"Context.Provider";case fa:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");
case ia:return C(a.type);case ka:return C(a.render);case ja:if(a=1===a._status?a._result:null)return C(a)}return null}var D=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;D.hasOwnProperty("ReactCurrentDispatcher")||(D.ReactCurrentDispatcher={current:null});D.hasOwnProperty("ReactCurrentBatchConfig")||(D.ReactCurrentBatchConfig={suspense:null});var oa={};function E(a,b){for(var c=a._threadCount|0;c<=b;c++)a[c]=a._currentValue2,a._threadCount=c+1}
function pa(a,b,c,d){if(d&&(d=a.contextType,"object"===typeof d&&null!==d))return E(d,c),d[c];if(a=a.contextTypes){c={};for(var f in a)c[f]=b[f];b=c}else b=oa;return b}for(var F=new Uint16Array(16),H=0;15>H;H++)F[H]=H+1;F[15]=0;
var qa=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ra=Object.prototype.hasOwnProperty,sa={},ta={};
function ua(a){if(ra.call(ta,a))return!0;if(ra.call(sa,a))return!1;if(qa.test(a))return ta[a]=!0;sa[a]=!0;return!1}function va(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function wa(a,b,c,d){if(null===b||"undefined"===typeof b||va(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function J(a,b,c,d,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=g}var K={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){K[a]=new J(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];K[b]=new J(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){K[a]=new J(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){K[a]=new J(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){K[a]=new J(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){K[a]=new J(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){K[a]=new J(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){K[a]=new J(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){K[a]=new J(a,5,!1,a.toLowerCase(),null,!1)});var L=/[\-:]([a-z])/g;function M(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(L,
M);K[b]=new J(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(L,M);K[b]=new J(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(L,M);K[b]=new J(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){K[a]=new J(a,1,!1,a.toLowerCase(),null,!1)});
K.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){K[a]=new J(a,1,!1,a.toLowerCase(),null,!0)});var xa=/["'&<>]/;
function N(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=xa.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b}a=f!==d?c+a.substring(f,d):c}return a}
function ya(a,b){var c=K.hasOwnProperty(a)?K[a]:null;var d;if(d="style"!==a)d=null!==c?0===c.type:!(2<a.length)||"o"!==a[0]&&"O"!==a[0]||"n"!==a[1]&&"N"!==a[1]?!1:!0;if(d||wa(a,b,c,!1))return"";if(null!==c){a=c.attributeName;d=c.type;if(3===d||4===d&&!0===b)return a+'=""';c.sanitizeURL&&(b=""+b);return a+'="'+(N(b)+'"')}return ua(a)?a+'="'+(N(b)+'"'):""}function za(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
var Aa="function"===typeof Object.is?Object.is:za,O=null,P=null,Q=null,R=!1,S=!1,U=null,V=0;function W(){if(null===O)throw Error(q(321));return O}function Ba(){if(0<V)throw Error(q(312));return{memoizedState:null,queue:null,next:null}}function Ca(){null===Q?null===P?(R=!1,P=Q=Ba()):(R=!0,Q=P):null===Q.next?(R=!1,Q=Q.next=Ba()):(R=!0,Q=Q.next);return Q}function Da(a,b,c,d){for(;S;)S=!1,V+=1,Q=null,c=a(b,d);P=O=null;V=0;Q=U=null;return c}function Ea(a,b){return"function"===typeof b?b(a):b}
function Fa(a,b,c){O=W();Q=Ca();if(R){var d=Q.queue;b=d.dispatch;if(null!==U&&(c=U.get(d),void 0!==c)){U.delete(d);d=Q.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);Q.memoizedState=d;return[d,b]}return[Q.memoizedState,b]}a=a===Ea?"function"===typeof b?b():b:void 0!==c?c(b):b;Q.memoizedState=a;a=Q.queue={last:null,dispatch:null};a=a.dispatch=Ga.bind(null,O,a);return[Q.memoizedState,a]}
function Ga(a,b,c){if(!(25>V))throw Error(q(301));if(a===O)if(S=!0,a={action:c,next:null},null===U&&(U=new Map),c=U.get(b),void 0===c)U.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}}function Ha(){}
var X=0,Ia={readContext:function(a){var b=X;E(a,b);return a[b]},useContext:function(a){W();var b=X;E(a,b);return a[b]},useMemo:function(a,b){O=W();Q=Ca();b=void 0===b?null:b;if(null!==Q){var c=Q.memoizedState;if(null!==c&&null!==b){a:{var d=c[1];if(null===d)d=!1;else{for(var f=0;f<d.length&&f<b.length;f++)if(!Aa(b[f],d[f])){d=!1;break a}d=!0}}if(d)return c[0]}}a=a();Q.memoizedState=[a,b];return a},useReducer:Fa,useRef:function(a){O=W();Q=Ca();var b=Q.memoizedState;return null===b?(a={current:a},Q.memoizedState=
a):b},useState:function(a){return Fa(Ea,a)},useLayoutEffect:function(){},useCallback:function(a){return a},useImperativeHandle:Ha,useEffect:Ha,useDebugValue:Ha,useResponder:function(a,b){return{props:b,responder:a}},useDeferredValue:function(a){W();return a},useTransition:function(){W();return[function(a){a()},!1]}},Ja={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Ka(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
var La={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Ma=k({menuitem:!0},La),Y={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,
gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Na=["Webkit","ms","Moz","O"];Object.keys(Y).forEach(function(a){Na.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Y[b]=Y[a]})});
var Oa=/([A-Z])/g,Pa=/^ms-/,Z=l.Children.toArray,Qa=D.ReactCurrentDispatcher,Ra={listing:!0,pre:!0,textarea:!0},Sa=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Ta={},Ua={};function Va(a){if(void 0===a||null===a)return a;var b="";l.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}var Wa=Object.prototype.hasOwnProperty,Xa={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function Ya(a,b){if(void 0===a)throw Error(q(152,C(b)||"Component"));}
function Za(a,b,c){function d(d,g){var e=g.prototype&&g.prototype.isReactComponent,f=pa(g,b,c,e),x=[],h=!1,m={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===x)return null},enqueueReplaceState:function(a,c){h=!0;x=[c]},enqueueSetState:function(a,c){if(null===x)return null;x.push(c)}};if(e){if(e=new g(d.props,f,m),"function"===typeof g.getDerivedStateFromProps){var w=g.getDerivedStateFromProps.call(null,d.props,e.state);null!=w&&(e.state=k({},e.state,w))}}else if(O={},e=g(d.props,
f,m),e=Da(g,d.props,e,f),null==e||null==e.render){a=e;Ya(a,g);return}e.props=d.props;e.context=f;e.updater=m;m=e.state;void 0===m&&(e.state=m=null);if("function"===typeof e.UNSAFE_componentWillMount||"function"===typeof e.componentWillMount)if("function"===typeof e.componentWillMount&&"function"!==typeof g.getDerivedStateFromProps&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&"function"!==typeof g.getDerivedStateFromProps&&e.UNSAFE_componentWillMount(),x.length){m=x;var r=
h;x=null;h=!1;if(r&&1===m.length)e.state=m[0];else{w=r?m[0]:e.state;var y=!0;for(r=r?1:0;r<m.length;r++){var p=m[r];p="function"===typeof p?p.call(e,w,d.props,f):p;null!=p&&(y?(y=!1,w=k({},w,p)):k(w,p))}e.state=w}}else x=null;a=e.render();Ya(a,g);if("function"===typeof e.getChildContext&&(d=g.childContextTypes,"object"===typeof d)){var A=e.getChildContext();for(var T in A)if(!(T in d))throw Error(q(108,C(g)||"Unknown",T));}A&&(b=k({},b,A))}for(;l.isValidElement(a);){var f=a,g=f.type;if("function"!==
typeof g)break;d(f,g)}return{child:a,context:b}}
var $a=function(){function a(a,b){l.isValidElement(a)?a.type!==u?a=[a]:(a=a.props.children,a=l.isValidElement(a)?[a]:Z(a)):a=Z(a);a={type:null,domNamespace:Ja.html,children:a,childIndex:0,context:oa,footer:""};var c=F[0];if(0===c){var g=F;c=g.length;var d=2*c;if(!(65536>=d))throw Error(q(304));var h=new Uint16Array(d);h.set(g);F=h;F[0]=c+1;for(g=c;g<d-1;g++)F[g]=g+1;F[d-1]=0}else F[0]=F[c];this.threadID=c;this.stack=[a];this.exhausted=!1;this.currentSelectValue=null;this.previousWasTextNode=!1;this.makeStaticMarkup=
b;this.suspenseDepth=0;this.contextIndex=-1;this.contextStack=[];this.contextValueStack=[]}var b=a.prototype;b.destroy=function(){if(!this.exhausted){this.exhausted=!0;this.clearProviders();var a=this.threadID;F[a]=F[0];F[0]=a}};b.pushProvider=function(a){var c=++this.contextIndex,b=a.type._context,g=this.threadID;E(b,g);var x=b[g];this.contextStack[c]=b;this.contextValueStack[c]=x;b[g]=a.props.value};b.popProvider=function(){var a=this.contextIndex,b=this.contextStack[a],f=this.contextValueStack[a];
this.contextStack[a]=null;this.contextValueStack[a]=null;this.contextIndex--;b[this.threadID]=f};b.clearProviders=function(){for(var a=this.contextIndex;0<=a;a--)this.contextStack[a][this.threadID]=this.contextValueStack[a]};b.read=function(a){if(this.exhausted)return null;var b=X;X=this.threadID;var c=Qa.current;Qa.current=Ia;try{for(var g=[""],x=!1;g[0].length<a;){if(0===this.stack.length){this.exhausted=!0;var h=this.threadID;F[h]=F[0];F[0]=h;break}var e=this.stack[this.stack.length-1];if(x||e.childIndex>=
e.children.length){var I=e.footer;""!==I&&(this.previousWasTextNode=!1);this.stack.pop();if("select"===e.type)this.currentSelectValue=null;else if(null!=e.type&&null!=e.type.type&&e.type.type.$$typeof===v)this.popProvider(e.type);else if(e.type===B){this.suspenseDepth--;var G=g.pop();if(x){x=!1;var n=e.fallbackFrame;if(!n)throw Error(q(303));this.stack.push(n);g[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}else g[this.suspenseDepth]+=G}g[this.suspenseDepth]+=I}else{var m=e.children[e.childIndex++],
w="";try{w+=this.render(m,e.context,e.domNamespace)}catch(r){if(null!=r&&"function"===typeof r.then)throw Error(q(294));throw r;}finally{}g.length<=this.suspenseDepth&&g.push("");g[this.suspenseDepth]+=w}}return g[0]}finally{Qa.current=c,X=b}};b.render=function(a,b,f){if("string"===typeof a||"number"===typeof a){f=""+a;if(""===f)return"";if(this.makeStaticMarkup)return N(f);if(this.previousWasTextNode)return"\x3c!-- --\x3e"+N(f);this.previousWasTextNode=!0;return N(f)}b=Za(a,b,this.threadID);a=b.child;
b=b.context;if(null===a||!1===a)return"";if(!l.isValidElement(a)){if(null!=a&&null!=a.$$typeof){f=a.$$typeof;if(f===aa)throw Error(q(257));throw Error(q(258,f.toString()));}a=Z(a);this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""});return""}var c=a.type;if("string"===typeof c)return this.renderDOM(a,b,f);switch(c){case ba:case ea:case ca:case ha:case u:return a=Z(a.props.children),this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),
"";case B:throw Error(q(294));}if("object"===typeof c&&null!==c)switch(c.$$typeof){case fa:O={};var d=c.render(a.props,a.ref);d=Da(c.render,a.props,d,a.ref);d=Z(d);this.stack.push({type:null,domNamespace:f,children:d,childIndex:0,context:b,footer:""});return"";case ia:return a=[l.createElement(c.type,k({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),"";case v:return c=Z(a.props.children),f={type:a,domNamespace:f,children:c,childIndex:0,
context:b,footer:""},this.pushProvider(a),this.stack.push(f),"";case da:c=a.type;d=a.props;var h=this.threadID;E(c,h);c=Z(d.children(c[h]));this.stack.push({type:a,domNamespace:f,children:c,childIndex:0,context:b,footer:""});return"";case la:throw Error(q(338));case ja:switch(c=a.type,na(c),c._status){case 1:return a=[l.createElement(c._result,k({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),"";case 2:throw c._result;default:throw Error(q(295));
}case ma:throw Error(q(343));}throw Error(q(130,null==c?c:typeof c,""));};b.renderDOM=function(a,b,f){var c=a.type.toLowerCase();f===Ja.html&&Ka(c);if(!Ta.hasOwnProperty(c)){if(!Sa.test(c))throw Error(q(65,c));Ta[c]=!0}var d=a.props;if("input"===c)d=k({type:void 0},d,{defaultChecked:void 0,defaultValue:void 0,value:null!=d.value?d.value:d.defaultValue,checked:null!=d.checked?d.checked:d.defaultChecked});else if("textarea"===c){var h=d.value;if(null==h){h=d.defaultValue;var e=d.children;if(null!=e){if(null!=
h)throw Error(q(92));if(Array.isArray(e)){if(!(1>=e.length))throw Error(q(93));e=e[0]}h=""+e}null==h&&(h="")}d=k({},d,{value:void 0,children:""+h})}else if("select"===c)this.currentSelectValue=null!=d.value?d.value:d.defaultValue,d=k({},d,{value:void 0});else if("option"===c){e=this.currentSelectValue;var I=Va(d.children);if(null!=e){var G=null!=d.value?d.value+"":I;h=!1;if(Array.isArray(e))for(var n=0;n<e.length;n++){if(""+e[n]===G){h=!0;break}}else h=""+e===G;d=k({selected:void 0,children:void 0},
d,{selected:h,children:I})}}if(h=d){if(Ma[c]&&(null!=h.children||null!=h.dangerouslySetInnerHTML))throw Error(q(137,c,""));if(null!=h.dangerouslySetInnerHTML){if(null!=h.children)throw Error(q(60));if(!("object"===typeof h.dangerouslySetInnerHTML&&"__html"in h.dangerouslySetInnerHTML))throw Error(q(61));}if(null!=h.style&&"object"!==typeof h.style)throw Error(q(62,""));}h=d;e=this.makeStaticMarkup;I=1===this.stack.length;G="<"+a.type;for(z in h)if(Wa.call(h,z)){var m=h[z];if(null!=m){if("style"===
z){n=void 0;var w="",r="";for(n in m)if(m.hasOwnProperty(n)){var y=0===n.indexOf("--"),p=m[n];if(null!=p){if(y)var A=n;else if(A=n,Ua.hasOwnProperty(A))A=Ua[A];else{var T=A.replace(Oa,"-$1").toLowerCase().replace(Pa,"-ms-");A=Ua[A]=T}w+=r+A+":";r=n;y=null==p||"boolean"===typeof p||""===p?"":y||"number"!==typeof p||0===p||Y.hasOwnProperty(r)&&Y[r]?(""+p).trim():p+"px";w+=y;r=";"}}m=w||null}n=null;b:if(y=c,p=h,-1===y.indexOf("-"))y="string"===typeof p.is;else switch(y){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":y=
!1;break b;default:y=!0}y?Xa.hasOwnProperty(z)||(n=z,n=ua(n)&&null!=m?n+'="'+(N(m)+'"'):""):n=ya(z,m);n&&(G+=" "+n)}}e||I&&(G+=' data-reactroot=""');var z=G;h="";La.hasOwnProperty(c)?z+="/>":(z+=">",h="</"+a.type+">");a:{e=d.dangerouslySetInnerHTML;if(null!=e){if(null!=e.__html){e=e.__html;break a}}else if(e=d.children,"string"===typeof e||"number"===typeof e){e=N(e);break a}e=null}null!=e?(d=[],Ra.hasOwnProperty(c)&&"\n"===e.charAt(0)&&(z+="\n"),z+=e):d=Z(d.children);a=a.type;f=null==f||"http://www.w3.org/1999/xhtml"===
f?Ka(a):"http://www.w3.org/2000/svg"===f&&"foreignObject"===a?"http://www.w3.org/1999/xhtml":f;this.stack.push({domNamespace:f,type:c,children:d,childIndex:0,context:b,footer:h});this.previousWasTextNode=!1;return z};return a}(),ab={renderToString:function(a){a=new $a(a,!1);try{return a.read(Infinity)}finally{a.destroy()}},renderToStaticMarkup:function(a){a=new $a(a,!0);try{return a.read(Infinity)}finally{a.destroy()}},renderToNodeStream:function(){throw Error(q(207));},renderToStaticNodeStream:function(){throw Error(q(208));
},version:"16.13.0"};module.exports=ab.default||ab;

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
    return function (d) {
      return function (c) {
        return (0, a.apply)(b.map(a.Functor0())(g["const"](k.identity(k.categoryFn)))(d))(c);
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
      return function (d) {
        return f.apply(a.Apply0())((0, a.pure)(b))(d);
      };
    };
  };

  c.unless = function (a) {
    return function (b) {
      return function (d) {
        if (!b) return d;
        if (b) return (0, a.pure)(k.unit);
        throw Error("Failed pattern match at Control.Applicative (line 62, column 1 - line 62, column 65): " + [b.constructor.name, d.constructor.name]);
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
          return k.bind(a.Bind1())(c)(function (d) {
            return f.pure(a.Applicative0())(b(d));
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
    return function (d) {
      return function (d) {
        return function (c) {
          return new e(function (e) {
            return function (e) {
              return function (f) {
                var h = (0, a.eqRecord)(b.RLProxy.value)(e)(f),
                    l = k.reflectSymbol(d)(k.SProxy.value);
                l = g.unsafeGet(l);
                return (0, c.eq)(l(e))(l(f)) && h;
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
      return function (d) {
        return (0, a.compare)(b)(d) instanceof g.LT ? !1 : !0;
      };
    };
  };

  c.Ord = a;

  c.compare = function (a) {
    return a.compare;
  };

  c.max = function (a) {
    return function (b) {
      return function (d) {
        var c = (0, a.compare)(b)(d);
        if (c instanceof g.LT) return d;
        if (c instanceof g.EQ || c instanceof g.GT) return b;
        throw Error("Failed pattern match at Data.Ord (line 167, column 3 - line 170, column 12): " + [c.constructor.name]);
      };
    };
  };

  c.abs = function (a) {
    return function (d) {
      return function (c) {
        return h(a)(c)(e.zero(d.Semiring0())) ? c : b.negate(d)(c);
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
      u = new d(function (a) {
    if (a) return "true";
    if (!a) return "false";
    throw Error("Failed pattern match at Data.Show (line 20, column 1 - line 22, column 23): " + [a.constructor.name]);
  });
  c.Show = d;

  c.show = function (a) {
    return a.show;
  };

  c.showBoolean = u;
  c.showInt = h;
  c.showChar = m;
  c.showString = a;

  c.showArray = function (a) {
    return new d(f.showArrayImpl(a.show));
  };

  c.showRecord = function (a) {
    return function (a) {
      return new d(function (d) {
        d = (0, a.showRecordFields)(b.RLProxy.value)(d);
        return 0 === d.length ? "{}" : f.join(" ")(["{", f.join(", ")(d), "}"]);
      });
    };
  };

  c.showRecordFieldsNil = l;

  c.showRecordFieldsCons = function (a) {
    return function (d) {
      return function (c) {
        return new e(function (e) {
          return function (e) {
            var h = (0, d.showRecordFields)(b.RLProxy.value)(e),
                l = k.reflectSymbol(a)(k.SProxy.value);
            e = g.unsafeGet(l)(e);
            return f.cons(f.join(": ")([l, (0, c.show)(e)]))(h);
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
      u = a["Data.Ordering"],
      r = a["Data.Show"],
      n = function () {
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
      v = function v(a) {
    return function (b) {
      return function (d) {
        if (d instanceof n) return a;
        if (d instanceof t) return b(d.value0);
        throw Error("Failed pattern match at Data.Maybe (line 217, column 1 - line 217, column 51): " + [a.constructor.name, b.constructor.name, d.constructor.name]);
      };
    };
  };

  a = v(!0)(l["const"](!1));
  l = v(!1)(l["const"](!0));

  var w = new h.Functor(function (a) {
    return function (b) {
      return b instanceof t ? new t(a(b.value0)) : n.value;
    };
  }),
      D = function D(a) {
    return new d.Eq(function (b) {
      return function (c) {
        return b instanceof n && c instanceof n ? !0 : b instanceof t && c instanceof t ? d.eq(a)(b.value0)(c.value0) : !1;
      };
    });
  },
      z = function z(a) {
    return new m.Ord(function () {
      return D(a.Eq0());
    }, function (b) {
      return function (d) {
        if (b instanceof n && d instanceof n) return u.EQ.value;
        if (b instanceof n) return u.LT.value;
        if (d instanceof n) return u.GT.value;
        if (b instanceof t && d instanceof t) return m.compare(a)(b.value0)(d.value0);
        throw Error("Failed pattern match at Data.Maybe (line 194, column 1 - line 194, column 51): " + [b.constructor.name, d.constructor.name]);
      };
    });
  },
      q = new k.Apply(function () {
    return w;
  }, function (a) {
    return function (b) {
      if (a instanceof t) return h.map(w)(a.value0)(b);
      if (a instanceof n) return n.value;
      throw Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [a.constructor.name, b.constructor.name]);
    };
  });

  k = new g.Bind(function () {
    return q;
  }, function (a) {
    return function (b) {
      if (a instanceof t) return b(a.value0);
      if (a instanceof n) return n.value;
      throw Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [a.constructor.name, b.constructor.name]);
    };
  });
  f = new f.Applicative(function () {
    return q;
  }, t.create);
  c.Nothing = n;
  c.Just = t;
  c.maybe = v;

  c.fromMaybe = function (a) {
    return v(a)(b.identity(b.categoryFn));
  };

  c.isJust = l;
  c.isNothing = a;

  c.fromJust = function (a) {
    return function (a) {
      if (a instanceof t) return a.value0;
      throw Error("Failed pattern match at Data.Maybe (line 268, column 1 - line 268, column 46): " + [a.constructor.name]);
    };
  };

  c.functorMaybe = w;
  c.applyMaybe = q;
  c.applicativeMaybe = f;
  c.bindMaybe = k;
  c.eqMaybe = D;
  c.ordMaybe = z;

  c.boundedMaybe = function (a) {
    return new e.Bounded(function () {
      return z(a.Ord0());
    }, n.value, new t(e.top(a)));
  };

  c.showMaybe = function (a) {
    return new r.Show(function (b) {
      if (b instanceof t) return "(Just " + (r.show(a)(b.value0) + ")");
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
      u = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      r = new l.Functor(function (a) {
    return function (b) {
      if (b instanceof m) return new m(b.value0);
      if (b instanceof u) return new u(a(b.value0));
      throw Error("Failed pattern match at Data.Either (line 38, column 1 - line 38, column 52): " + [b.constructor.name]);
    };
  });

  a = function a(_a6) {
    return function (b) {
      return function (d) {
        if (d instanceof m) return _a6(d.value0);
        if (d instanceof u) return b(d.value0);
        throw Error("Failed pattern match at Data.Either (line 238, column 1 - line 238, column 64): " + [_a6.constructor.name, b.constructor.name, d.constructor.name]);
      };
    };
  };

  d = a(d["const"](h.Nothing.value))(h.Just.create);
  e = new e.Bifunctor(function (a) {
    return function (b) {
      return function (d) {
        if (d instanceof m) return new m(a(d.value0));
        if (d instanceof u) return new u(b(d.value0));
        throw Error("Failed pattern match at Data.Either (line 46, column 1 - line 48, column 36): " + [a.constructor.name, b.constructor.name, d.constructor.name]);
      };
    };
  });
  var n = new k.Apply(function () {
    return r;
  }, function (a) {
    return function (b) {
      if (a instanceof m) return new m(a.value0);
      if (a instanceof u) return l.map(r)(a.value0)(b);
      throw Error("Failed pattern match at Data.Either (line 82, column 1 - line 84, column 30): " + [a.constructor.name, b.constructor.name]);
    };
  }),
      t = new g.Bind(function () {
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
      v = new f.Applicative(function () {
    return n;
  }, u.create);
  f = new b.Monad(function () {
    return v;
  }, function () {
    return t;
  });
  c.Left = m;
  c.Right = u;
  c.either = a;
  c.hush = d;
  c.functorEither = r;
  c.bifunctorEither = e;
  c.applicativeEither = v;
  c.bindEither = t;
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
    return function (d) {
      d = a(d);

      for (var c = !1, e; !c;) {
        if (e = d, e instanceof g) d = a(e.value0), e = void 0;else if (e instanceof b) c = !0, e = e.value0;else throw Error("Failed pattern match at Control.Monad.Rec.Class (line 93, column 3 - line 93, column 25): " + [e.constructor.name]);
      }

      return e;
    };
  },
      d = new a(function () {
    return k.monadEither;
  }, function (a) {
    return function (d) {
      return e(function (d) {
        if (d instanceof k.Left) return new b(new k.Left(d.value0));
        if (d instanceof k.Right && d.value0 instanceof g) return new g(a(d.value0.value0));
        if (d instanceof k.Right && d.value0 instanceof b) return new b(new k.Right(d.value0.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 121, column 7 - line 121, column 33): " + [d.constructor.name]);
      })(a(d));
    };
  });

  f = new f.Bifunctor(function (a) {
    return function (d) {
      return function (c) {
        if (c instanceof g) return new g(a(c.value0));
        if (c instanceof b) return new b(d(c.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 29, column 1 - line 31, column 34): " + [a.constructor.name, d.constructor.name, c.constructor.name]);
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
      return function (d) {
        return f.disj(a)(b)(d);
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
        return function (d) {
          var c = b.wrap,
              e = a.unwrap;
          return function (a) {
            return c(d(e(a)));
          };
        };
      };
    };
  };

  c.under = function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          var c = b.unwrap,
              e = a.wrap;
          return function (a) {
            return c(d(e(a)));
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
      u = a["Data.Monoid"],
      r = a["Data.Monoid.Disj"],
      n = a["Data.Newtype"],
      t = a["Data.Semigroup"],
      v = a["Data.Unit"];

  a = function a(_a8, b, d) {
    this.foldMap = _a8;
    this.foldl = b;
    this.foldr = d;
  };

  var w = function w(a) {
    return function (b) {
      return function (d) {
        return (0, b.foldr)(function () {
          var b = g.applySecond(a.Apply0());
          return function (a) {
            return b(d(a));
          };
        }())(k.pure(a)(v.unit));
      };
    };
  },
      D = new a(function (a) {
    return function (b) {
      return function (d) {
        if (d instanceof m.Nothing) return u.mempty(a);
        if (d instanceof m.Just) return b(d.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [b.constructor.name, d.constructor.name]);
      };
    };
  }, function (a) {
    return function (b) {
      return function (d) {
        if (d instanceof m.Nothing) return b;
        if (d instanceof m.Just) return a(b)(d.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [a.constructor.name, b.constructor.name, d.constructor.name]);
      };
    };
  }, function (a) {
    return function (b) {
      return function (d) {
        if (d instanceof m.Nothing) return b;
        if (d instanceof m.Just) return a(d.value0)(b);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [a.constructor.name, b.constructor.name, d.constructor.name]);
      };
    };
  }),
      z = function z(a) {
    return function (b) {
      return function (d) {
        return (0, a.foldr)(function (a) {
          return function (c) {
            return t.append(b.Semigroup0())(d(a))(c);
          };
        })(u.mempty(b));
      };
    };
  },
      q = new a(function (a) {
    return z(q)(a);
  }, f.foldlArray, f.foldrArray),
      x = function x(a) {
    return function (b) {
      return n.alaF(l.functorFn)(l.functorFn)(n.newtypeDisj)(n.newtypeDisj)(r.Disj)((0, a.foldMap)(r.monoidDisj(b)));
    };
  },
      H = function H(a) {
    return function (b) {
      var d = x(a)(h.heytingAlgebraBoolean),
          c = e.eq(b);
      return function (a) {
        return d(c(a));
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
    return function (d) {
      return (0, a.foldMap)(d)(b.identity(b.categoryFn));
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
      return function (d) {
        return function (c) {
          return (0, a.foldl)(function (a) {
            return function (c) {
              return a.init ? {
                init: !1,
                acc: c
              } : {
                init: !1,
                acc: t.append(b.Semigroup0())(a.acc)(t.append(b.Semigroup0())(d)(c))
              };
            };
          })({
            init: !0,
            acc: u.mempty(b)
          })(c).acc;
        };
      };
    };
  };

  c.any = x;

  c.notElem = function (a) {
    return function (b) {
      return function (d) {
        var c = h.not(h.heytingAlgebraBoolean),
            e = H(a)(b)(d);
        return function (a) {
          return c(e(a));
        };
      };
    };
  };

  c.find = function (a) {
    return function (b) {
      return (0, a.foldl)(function (a) {
        return function (d) {
          return a instanceof m.Nothing && b(d) ? new m.Just(d) : a;
        };
      })(m.Nothing.value);
    };
  };

  c.foldableArray = q;
  c.foldableMaybe = D;
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
      return function (d) {
        return new a(b, d);
      };
    };

    return a;
  }();

  c.NonEmpty = b;

  c.functorNonEmpty = function (a) {
    return new k.Functor(function (d) {
      return function (c) {
        return new b(d(c.value0), k.map(a)(d)(c.value1));
      };
    });
  };

  c.foldableNonEmpty = function (a) {
    return new f.Foldable(function (b) {
      return function (d) {
        return function (c) {
          return g.append(b.Semigroup0())(d(c.value0))(f.foldMap(a)(b)(d)(c.value1));
        };
      };
    }, function (b) {
      return function (d) {
        return function (c) {
          return f.foldl(a)(b)(b(d)(c.value0))(c.value1);
        };
      };
    }, function (b) {
      return function (d) {
        return function (c) {
          return b(c.value0)(f.foldr(a)(b)(d)(c.value1));
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
      return function (d) {
        return new a(b, d);
      };
    };

    return a;
  }();

  a = new g.Functor(function (a) {
    return function (b) {
      return function (d) {
        function c(b, c) {
          if (c instanceof h && c.value1 instanceof h && c.value1.value1 instanceof h) e = new h(c, b), d = c.value1.value1.value1;else return f = !0, function (b) {
            return function (d) {
              for (var c = b, e = !1, f; !e;) {
                f = c;
                var g = d;
                f instanceof h && f.value0 instanceof h && f.value0.value1 instanceof h && f.value0.value1.value1 instanceof h ? (c = f.value1, d = new h(a(f.value0.value0), new h(a(f.value0.value1.value0), new h(a(f.value0.value1.value1.value0), g))), f = void 0) : (e = !0, f = g);
              }

              return f;
            };
          }(b)(function (b) {
            return b instanceof h && b.value1 instanceof h && b.value1.value1 instanceof l ? new h(a(b.value0), new h(a(b.value1.value0), l.value)) : b instanceof h && b.value1 instanceof l ? new h(a(b.value0), l.value) : l.value;
          }(c));
        }

        for (var e = b, f = !1, g; !f;) {
          g = c(e, d);
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
      return function (d) {
        for (var c = b, e = !1, f; !e;) {
          f = c;
          var g = d;
          if (g instanceof l) e = !0;else {
            if (g instanceof h) c = a(f)(g.value0), d = g.value1;else throw Error("Failed pattern match at Data.List.Types (line 109, column 12 - line 111, column 30): " + [g.constructor.name]);
            f = void 0;
          }
        }

        return f;
      };
    };
  }, function (a) {
    return function (b) {
      var d = f.foldl(m)(k.flip(h.create))(l.value),
          c = f.foldl(m)(k.flip(a))(b);
      return function (a) {
        return c(d(a));
      };
    };
  });
  e = e.foldableNonEmpty(m);
  var u = new d.Semigroup(function (a) {
    return function (b) {
      return f.foldr(m)(h.create)(b)(a);
    };
  });
  g = new b.Monoid(function () {
    return u;
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
      u = a["Data.Unit"],
      r = function () {
    return function (a) {
      return function (b) {
        for (var d = a, c = !1, e; !c;) {
          e = d;
          var f = b;
          if (f instanceof m.Nil) c = !0;else {
            if (f instanceof m.Cons) d = new m.Cons(f.value0, e), b = f.value1;else throw Error("Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): " + [e.constructor.name, f.constructor.name]);
            e = void 0;
          }
        }

        return e;
      };
    }(m.Nil.value);
  }(),
      n = function n(a) {
    return function (b) {
      return function (d) {
        return g.apply(a.Applicative0().Apply0())(h.map(a.Plus1().Alt0().Functor0())(m.Cons.create)(d))(e.defer(b)(function (c) {
          return t(a)(b)(d);
        }));
      };
    };
  },
      t = function t(a) {
    return function (b) {
      return function (d) {
        return f.alt(a.Plus1().Alt0())(n(a)(b)(d))(k.pure(a.Applicative0())(m.Nil.value));
      };
    };
  };

  c.some = n;

  c.manyRec = function (a) {
    return function (c) {
      return function (e) {
        return d.tailRecM(a)(function (g) {
          return b.bind(a.Monad0().Bind1())(f.alt(c.Plus1().Alt0())(h.map(c.Plus1().Alt0().Functor0())(d.Loop.create)(e))(k.pure(c.Applicative0())(new d.Done(u.unit))))(function (a) {
            return k.pure(c.Applicative0())(l.bimap(d.bifunctorStep)(function (a) {
              return new m.Cons(a, g);
            })(function (a) {
              return r(g);
            })(a));
          });
        })(m.Nil.value);
      };
    };
  };

  c.reverse = r;
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
      return function (d) {
        return new a(b, d);
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
    for (var d = !1, c; !d;) {
      if (c = a, c.value0 instanceof k.Nil && c.value1 instanceof k.Nil) d = !0, c = g.Nothing.value;else if (c.value0 instanceof k.Nil) a = new e(f.reverse(c.value1), k.Nil.value), c = void 0;else if (c.value0 instanceof k.Cons) d = !0, c = new g.Just(new b.Tuple(c.value0.value0, new e(c.value0.value1, c.value1)));else throw Error("Failed pattern match at Data.CatQueue (line 83, column 1 - line 83, column 63): " + [c.constructor.name]);
    }

    return c;
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
      return function (d) {
        return new a(b, d);
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
      return function (d) {
        var c = function c(a) {
          return function (b) {
            return function (d) {
              for (var c = a, e = b, f = !1, g; !f;) {
                g = c;
                var h = e,
                    l = d;
                if (l instanceof k.Nil) f = !0, g = h;else {
                  if (l instanceof k.Cons) c = g, e = g(h)(l.value0), d = l.value1;else throw Error("Failed pattern match at Data.CatList (line 125, column 3 - line 125, column 59): " + [g.constructor.name, h.constructor.name, l.constructor.name]);
                  g = void 0;
                }
              }

              return g;
            };
          };
        };

        return function (d) {
          return function (e) {
            function h(d, h) {
              d = f.uncons(d);
              if (d instanceof g.Nothing) return m = !0, c(function (a) {
                return function (b) {
                  return b(a);
                };
              })(b)(h);
              if (d instanceof g.Just) l = d.value0.value1, e = new k.Cons(a(d.value0.value0), h);else throw Error("Failed pattern match at Data.CatList (line 121, column 14 - line 123, column 67): " + [d.constructor.name]);
            }

            for (var l = d, m = !1, n; !m;) {
              n = h(l, e);
            }

            return n;
          };
        }(d)(k.Nil.value);
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
      u = a["Unsafe.Coerce"],
      r = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (b) {
      return function (d) {
        return new a(b, d);
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
      t = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (b) {
      return function (d) {
        return new a(b, d);
      };
    };

    return a;
  }(),
      v = function v(a) {
    function b(b) {
      var c = function c(a) {
        return function (b) {
          return new r(a.value0, m.append(e.semigroupCatList)(a.value1)(b));
        };
      };

      if (b.value0 instanceof n) {
        var f = e.uncons(b.value1);
        if (f instanceof h.Nothing) return d = !0, new n(b.value0.value0);

        if (f instanceof h.Just) {
          a = c((0, f.value0.value0)(b.value0.value0))(f.value0.value1);
          return;
        }

        throw Error("Failed pattern match at Control.Monad.Free (line 227, column 7 - line 231, column 64): " + [f.constructor.name]);
      }

      if (b.value0 instanceof t) return d = !0, new t(b.value0.value0, function (a) {
        return c(b.value0.value1(a))(b.value1);
      });
      throw Error("Failed pattern match at Control.Monad.Free (line 225, column 3 - line 233, column 56): " + [b.value0.constructor.name]);
    }

    for (var d = !1, c; !d;) {
      c = b(a);
    }

    return c;
  },
      w = function w(a) {
    return function (b) {
      return function (d) {
        d = v(d);
        if (d instanceof n) return b(d.value0);
        if (d instanceof t) return a(d.value0)(d.value1);
        throw Error("Failed pattern match at Control.Monad.Free (line 213, column 17 - line 215, column 20): " + [d.constructor.name]);
      };
    };
  };

  a = new b.Monad(function () {
    return x;
  }, function () {
    return z;
  });
  var D = new l.Functor(function (a) {
    return function (b) {
      return g.bindFlipped(z)(function () {
        var b = f.pure(x);
        return function (d) {
          return b(a(d));
        };
      }())(b);
    };
  }),
      z = new g.Bind(function () {
    return q;
  }, function (a) {
    return function (b) {
      return new r(a.value0, e.snoc(a.value1)(b));
    };
  }),
      q = new k.Apply(function () {
    return D;
  }, b.ap(a)),
      x = new f.Applicative(function () {
    return q;
  }, function (a) {
    return new r(n.create(a), e.empty);
  });

  c.wrap = function (a) {
    return new r(new t(a, u.unsafeCoerce), e.empty);
  };

  c.liftF = function (a) {
    return new r(new t(a, function () {
      var a = f.pure(x);
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
  c.freeFunctor = D;
  c.freeBind = z;
  c.freeApplicative = x;
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
      u = a["Data.Function"],
      r = a["Data.Functor"],
      n = a["Data.Maybe"];
  a = f._updateAt(n.Just.create)(n.Nothing.value);

  var t = f["uncons'"](u["const"](n.Nothing.value))(function (a) {
    return function (b) {
      return new n.Just({
        head: a,
        tail: b
      });
    };
  }),
      v = function v(a) {
    return [a];
  },
      w = function w(a) {
    return function (d) {
      return function (c) {
        return b.apply(a.Applicative0().Apply0())(r.map(a.Plus1().Alt0().Functor0())(f.cons)(c))(l.defer(d)(function (b) {
          return D(a)(d)(c);
        }));
      };
    };
  },
      D = function D(a) {
    return function (b) {
      return function (d) {
        return k.alt(a.Plus1().Alt0())(w(a)(b)(d))(g.pure(a.Applicative0())([]));
      };
    };
  },
      z = f.indexImpl(n.Just.create)(n.Nothing.value),
      q = u.flip(e.bind(e.bindArray));

  e = function (a) {
    return q(function () {
      var b = n.maybe([])(v);
      return function (d) {
        return b(a(d));
      };
    }());
  }(d.identity(d.categoryFn));

  c.fromFoldable = function (a) {
    return f.fromFoldableImpl(m.foldr(a));
  };

  c.singleton = v;
  c.some = w;

  c.head = function (a) {
    return z(a)(0);
  };

  c.init = function (a) {
    if (0 === f.length(a)) return n.Nothing.value;
    if (h.otherwise) return new n.Just(f.slice(0)(f.length(a) - 1 | 0)(a));
    throw Error("Failed pattern match at Data.Array (line 323, column 1 - line 323, column 45): " + [a.constructor.name]);
  };

  c.uncons = t;
  c.updateAt = a;
  c.concatMap = q;
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
      return function (d) {
        return new a(b, d);
      };
    };

    return a;
  }(),
      d = function d(a) {
    return function (d) {
      return function (c) {
        return (0, a.foldrWithIndex)(function (a) {
          return function (e) {
            return function (f) {
              return b.append(d.Semigroup0())(c(a)(e))(f);
            };
          };
        })(g.mempty(d));
      };
    };
  },
      l = new function (a, b, d, c) {
    this.Foldable0 = a;
    this.foldMapWithIndex = b;
    this.foldlWithIndex = d;
    this.foldrWithIndex = c;
  }(function () {
    return f.foldableArray;
  }, function (a) {
    return d(l)(a);
  }, function (a) {
    return function (b) {
      var d = f.foldl(f.foldableArray)(function (b) {
        return function (d) {
          return a(d.value0)(b)(d.value1);
        };
      })(b),
          c = k.mapWithIndex(k.functorWithIndexArray)(e.create);
      return function (a) {
        return d(c(a));
      };
    };
  }, function (a) {
    return function (b) {
      var d = f.foldr(f.foldableArray)(function (b) {
        return function (d) {
          return a(b.value0)(b.value1)(d);
        };
      })(b),
          c = k.mapWithIndex(k.functorWithIndexArray)(e.create);
      return function (a) {
        return d(c(a));
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
        return function (d) {
          return [a, b, d];
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
              function l(m, r) {
                switch (r - m) {
                  case 0:
                    return d([]);

                  case 1:
                    return c(a)(e(h[m]));

                  case 2:
                    return b(c(f)(e(h[m])))(e(h[m + 1]));

                  case 3:
                    return b(b(c(k)(e(h[m])))(e(h[m + 1])))(e(h[m + 2]));

                  default:
                    var n = m + 2 * Math.floor((r - m) / 4);
                    return b(c(g)(l(m, n)))(l(n, r));
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

  a = function a(_a9, b, d, c) {
    this.Foldable1 = _a9;
    this.Functor0 = b;
    this.sequence = d;
    this.traverse = c;
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
    return function (d) {
      return (0, a.traverse)(d)(b.identity(b.categoryFn));
    };
  },
      u = new a(function () {
    return e.foldableArray;
  }, function () {
    return d.functorArray;
  }, function (a) {
    return m(u)(a);
  }, function (a) {
    return f.traverseArrayImpl(g.apply(a.Apply0()))(d.map(a.Apply0().Functor0()))(k.pure(a));
  });

  c.traverse = function (a) {
    return a.traverse;
  };

  c.sequence = function (a) {
    return a.sequence;
  };

  c.traversableArray = u;
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
      return function (d) {
        return (0, a.unfoldr1)(function (a) {
          if (0 >= a) return new g.Tuple(d, k.Nothing.value);
          if (f.otherwise) return new g.Tuple(d, new k.Just(a - 1 | 0));
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
      u = new g.Foldable1(function () {
    return m;
  }, function (a) {
    return f.fold1Impl(k.append(a));
  }, function (a) {
    return g.foldMap1Default(u)(l)(a);
  });
  c.semigroupNonEmptyArray = d;
  c.functorNonEmptyArray = l;
  c.foldableNonEmptyArray = m;
  c.foldableWithIndexNonEmptyArray = h;
  c.foldable1NonEmptyArray = u;
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
    return u;
  }, e.ap(d)),
      m = new k.Applicative(function () {
    return h;
  }, f.pureE),
      u = new a.Functor(k.liftA1(m));
  c.functorEffect = u;
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
          var D = c.value;
          var z = g.size;

          if (null !== c.error) {
            for (D = a.left(c.error); h = d(e);) {
              b(h.cb(D));
            }

            for (; m = d(g);) {
              b(m(D));
            }

            for (; k = d(f);) {
              b(k(D));
            }

            break;
          }

          D === l && (h = d(e)) && (c.value = D = h.value);

          if (D !== l) {
            for (k = d(f); z-- && (m = d(g));) {
              b(m(a.right(D)));
            }

            null !== k && (c.value = l, b(k(a.right(D))));
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
    function a(a, b, d, c) {
      this.tag = a;
      this._1 = b;
      this._2 = d;
      this._3 = c;
    }

    function c(b) {
      var d = function d(_d, c, e) {
        return new a(b, _d, c, e);
      };

      d.tag = b;
      return d;
    }

    function g(b) {
      return new a("Pure", void 0);
    }

    function b(a) {
      try {
        a();
      } catch (t) {
        setTimeout(function () {
          throw t;
        }, 0);
      }
    }

    function e(a, b, d) {
      try {
        return b(d());
      } catch (w) {
        return a(w);
      }
    }

    function d(a, b, d) {
      try {
        return b(d)();
      } catch (w) {
        return d(a(w))(), g;
      }
    }

    function l(c, f, g) {
      function h(g) {
        for (var k, w, z;;) {
          switch (z = w = k = null, q) {
            case 2:
              q = 1;

              try {
                v = G(v), null === E ? G = null : (G = E._1, E = E._2);
              } catch (P) {
                q = 5, u = c.left(P), v = null;
              }

              break;

            case 3:
              c.isLeft(v) ? (q = 5, u = v, v = null) : null === G ? q = 5 : (q = 2, v = c.fromRight(v));
              break;

            case 1:
              switch (v.tag) {
                case "Bind":
                  G && (E = new a("Cons", G, E));
                  G = v._2;
                  q = 1;
                  v = v._1;
                  break;

                case "Pure":
                  null === G ? (q = 5, v = c.right(v._1)) : (q = 2, v = v._1);
                  break;

                case "Sync":
                  q = 3;
                  v = e(c.left, c.right, v._1);
                  break;

                case "Async":
                  q = 4;
                  v = d(c.left, v._1, function (a) {
                    return function () {
                      n === g && (n++, r.enqueue(function () {
                        n === g + 1 && (q = 3, v = a, h(n));
                      }));
                    };
                  });
                  return;

                case "Throw":
                  q = 5;
                  u = c.left(v._1);
                  v = null;
                  break;

                case "Catch":
                  F = null === G ? new a("Cons", v, F, t) : new a("Cons", v, new a("Cons", new a("Resume", G, E), F, t), t);
                  E = G = null;
                  q = 1;
                  v = v._1;
                  break;

                case "Bracket":
                  p++;
                  F = null === G ? new a("Cons", v, F, t) : new a("Cons", v, new a("Cons", new a("Resume", G, E), F, t), t);
                  E = G = null;
                  q = 1;
                  v = v._1;
                  break;

                case "Fork":
                  q = 3;
                  k = l(c, f, v._2);
                  f && f.register(k);
                  v._1 && k.run();
                  v = c.right(k);
                  break;

                case "Sequential":
                  q = 1, v = m(c, f, v._1);
              }

              break;

            case 5:
              E = G = null;
              if (null === F) q = 6, v = t || u || v;else switch (k = F._3, z = F._1, F = F._2, z.tag) {
                case "Catch":
                  t && t !== k && 0 === p ? q = 5 : u && (q = 1, v = z._2(c.fromLeft(u)), u = null);
                  break;

                case "Resume":
                  t && t !== k && 0 === p || u ? q = 5 : (G = z._1, E = z._2, q = 2, v = c.fromRight(v));
                  break;

                case "Bracket":
                  p--;
                  null === u && (w = c.fromRight(v), F = new a("Cons", new a("Release", z._2, w), F, k), t === k || 0 < p) && (q = 1, v = z._3(w));
                  break;

                case "Release":
                  F = new a("Cons", new a("Finalized", v, u), F, t);
                  q = 1;
                  v = t && t !== k && 0 === p ? z._1.killed(c.fromLeft(t))(z._2) : u ? z._1.failed(c.fromLeft(u))(z._2) : z._1.completed(c.fromRight(v))(z._2);
                  u = null;
                  p++;
                  break;

                case "Finalizer":
                  p++;
                  F = new a("Cons", new a("Finalized", v, u), F, t);
                  q = 1;
                  v = z._1;
                  break;

                case "Finalized":
                  p--, q = 5, v = z._1, u = z._2;
              }
              break;

            case 6:
              for (var x in C) {
                C.hasOwnProperty(x) && (L = L && C[x].rethrow, b(C[x].handler(v)));
              }

              C = null;
              t && u ? setTimeout(function () {
                throw c.fromLeft(u);
              }, 0) : c.isLeft(v) && L && setTimeout(function () {
                if (L) throw c.fromLeft(v);
              }, 0);
              return;

            case 0:
              q = 1;
              break;

            case 4:
              return;
          }
        }
      }

      function k(a) {
        return function () {
          if (6 === q) return L = L && a.rethrow, a.handler(v)(), function () {};
          var b = J++;
          C = C || {};
          C[b] = a;
          return function () {
            null !== C && delete C[b];
          };
        };
      }

      var n = 0,
          q = 0,
          v = g,
          u = null,
          t = null,
          G = null,
          E = null,
          F = null,
          p = 0,
          J = 0,
          C = null,
          L = !0;
      return {
        kill: function kill(b, d) {
          return function () {
            if (6 === q) return d(c.right(void 0))(), function () {};
            var e = k({
              rethrow: !1,
              handler: function handler() {
                return d(c.right(void 0));
              }
            })();

            switch (q) {
              case 0:
                t = c.left(b);
                q = 6;
                v = t;
                h(n);
                break;

              case 4:
                null === t && (t = c.left(b));
                0 === p && (4 === q && (F = new a("Cons", new a("Finalizer", v(b)), F, t)), q = 5, u = v = null, h(++n));
                break;

              default:
                null === t && (t = c.left(b)), 0 === p && (q = 5, u = v = null);
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
            0 === q && h(n);
            return b;
          };
        },
        onComplete: k,
        isSuspended: function isSuspended() {
          return 0 === q;
        },
        run: function run() {
          0 === q && (r.isDraining() ? h(n) : r.enqueue(function () {
            h(n);
          }));
        }
      };
    }

    function h(b, d, c, e) {
      function f(d, c, e) {
        var f = c,
            g = null,
            h = null,
            k = 0;
        c = {};

        a: for (;;) {
          var l = null;

          switch (f.tag) {
            case "Forked":
              f._3 === u && (l = n[f._1], c[k++] = l.kill(d, function (a) {
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

        if (0 === k) e(b.right(void 0))();else for (d = 0, l = k; d < l; d++) {
          c[d] = c[d]();
        }
        return c;
      }

      function h(a, d, c) {
        var g, k;

        if (b.isLeft(a)) {
          var l = a;
          var m = null;
        } else m = a, l = null;

        for (;;) {
          var q = k = g = a = null;
          if (null !== p) break;

          if (null === d) {
            e(l || m)();
            break;
          }

          if (d._3 !== u) break;

          switch (d.tag) {
            case "Map":
              null === l ? (d._3 = b.right(d._1(b.fromRight(m))), m = d._3) : d._3 = l;
              break;

            case "Apply":
              a = d._1._3;
              g = d._2._3;

              if (l) {
                if (d._3 = l, k = !0, q = w++, r[q] = f(t, l === a ? d._2 : d._1, function () {
                  return function () {
                    delete r[q];
                    k ? k = !1 : null === c ? h(l, null, null) : h(l, c._1, c._2);
                  };
                }), k) {
                  k = !1;
                  return;
                }
              } else {
                if (a === u || g === u) return;
                m = b.right(b.fromRight(a)(b.fromRight(g)));
                d._3 = m;
              }

              break;

            case "Alt":
              a = d._1._3;
              g = d._2._3;
              if (a === u && b.isLeft(g) || g === u && b.isLeft(a)) return;
              if (a !== u && b.isLeft(a) && g !== u && b.isLeft(g)) l = m === a ? g : a, m = null, d._3 = l;else if (d._3 = m, k = !0, q = w++, r[q] = f(t, m === a ? d._2 : d._1, function () {
                return function () {
                  delete r[q];
                  k ? k = !1 : null === c ? h(m, null, null) : h(m, c._1, c._2);
                };
              }), k) {
                k = !1;
                return;
              }
          }

          null === c ? d = null : (d = c._1, c = c._2);
        }
      }

      function k(a) {
        return function (b) {
          return function () {
            delete n[a._1];
            a._3 = b;
            h(b, a._2._1, a._2._2);
          };
        };
      }

      function m(d, c) {
        p = b.left(d);
        var e;

        for (e in r) {
          if (r.hasOwnProperty(e)) {
            var h = r[e];

            for (e in h) {
              if (h.hasOwnProperty(e)) h[e]();
            }
          }
        }

        r = null;
        var k = f(d, J, c);
        return function (b) {
          return new a("Async", function (a) {
            return function () {
              for (var a in k) {
                if (k.hasOwnProperty(a)) k[a]();
              }

              return g;
            };
          });
        };
      }

      var v = 0,
          n = {},
          w = 0,
          r = {},
          t = Error("[ParAff] Early exit"),
          p = null,
          J = u;

      (function () {
        var e = 1,
            f = c,
            g = null,
            h = null;

        a: for (;;) {
          switch (e) {
            case 1:
              switch (f.tag) {
                case "Map":
                  g && (h = new a("Cons", g, h));
                  g = new a("Map", f._1, u, u);
                  f = f._2;
                  break;

                case "Apply":
                  g && (h = new a("Cons", g, h));
                  g = new a("Apply", u, f._2, u);
                  f = f._1;
                  break;

                case "Alt":
                  g && (h = new a("Cons", g, h));
                  g = new a("Alt", u, f._2, u);
                  f = f._1;
                  break;

                default:
                  var m = v++;
                  e = 5;
                  var q = f;
                  f = new a("Forked", m, new a("Cons", g, h), u);
                  q = l(b, d, q);
                  q.onComplete({
                    rethrow: !1,
                    handler: k(f)
                  })();
                  n[m] = q;
                  d && d.register(q);
              }

              break;

            case 5:
              if (null === g) break a;
              g._1 === u ? (g._1 = f, e = 1, f = g._2, g._2 = u) : (g._2 = f, f = g, null === h ? g = null : (g = h._1, h = h._2));
          }
        }

        J = f;

        for (m = 0; m < v; m++) {
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

    function m(b, d, c) {
      return new a("Async", function (a) {
        return function () {
          return h(b, d, c, a);
        };
      });
    }

    var u = {},
        r = function () {
      function a() {
        for (e = !0; 0 !== b;) {
          b--;
          var a = c[d];
          c[d] = void 0;
          d = (d + 1) % 1024;
          a();
        }

        e = !1;
      }

      var b = 0,
          d = 0,
          c = Array(1024),
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

          c[(d + b) % 1024] = f;
          b++;
          e || a();
        }
      };
    }();

    a.EMPTY = u;
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
      var d = {},
          c = 0,
          e = 0;
      return {
        register: function register(a) {
          var b = c++;
          a.onComplete({
            rethrow: !0,
            handler: function handler(a) {
              return function () {
                e--;
                delete d[b];
              };
            }
          })();
          d[b] = a;
          e++;
        },
        isEmpty: function isEmpty() {
          return 0 === e;
        },
        killAll: function killAll(f, g) {
          return function () {
            function h(a) {
              l[a] = d[a].kill(f, function (d) {
                return function () {
                  delete l[a];
                  k--;
                  b.isLeft(d) && b.fromLeft(d) && setTimeout(function () {
                    throw b.fromLeft(d);
                  }, 0);
                  0 === k && g();
                };
              })();
            }

            if (0 === e) return g();
            var k = 0,
                l = {},
                m;

            for (m in d) {
              d.hasOwnProperty(m) && (k++, h(m));
            }

            d = {};
            e = c = 0;
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

    a.Scheduler = r;
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
      return function (d) {
        var c = f.sequential(a),
            e = k.traverse_(a.Applicative1())(b)(function () {
          var b = f.parallel(a);
          return function (a) {
            return b(d(a));
          };
        }());
        return function (a) {
          return c(e(a));
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
      u = a["Control.Plus"],
      r = a["Data.Either"],
      n = a["Data.Foldable"],
      t = a["Data.Function"],
      v = a["Data.Functor"],
      w = a["Data.Monoid"],
      D = a["Data.Semigroup"],
      z = a["Data.Unit"],
      q = a.Effect,
      x = a["Effect.Class"],
      H = a["Effect.Exception"],
      y = a["Partial.Unsafe"];
  a = a["Unsafe.Coerce"];

  var G = new v.Functor(f._parAffMap),
      E = new v.Functor(f._map),
      F = function () {
    return {
      isLeft: function isLeft(a) {
        if (a instanceof r.Left) return !0;
        if (a instanceof r.Right) return !1;
        throw Error("Failed pattern match at Effect.Aff (line 390, column 12 - line 392, column 20): " + [a.constructor.name]);
      },
      fromLeft: function fromLeft(a) {
        if (a instanceof r.Left) return a.value0;
        if (a instanceof r.Right) return y.unsafeCrashWith("unsafeFromLeft: Right");
        throw Error("Failed pattern match at Effect.Aff (line 395, column 20 - line 397, column 54): " + [a.constructor.name]);
      },
      fromRight: function fromRight(a) {
        if (a instanceof r.Right) return a.value0;
        if (a instanceof r.Left) return y.unsafeCrashWith("unsafeFromRight: Left");
        throw Error("Failed pattern match at Effect.Aff (line 400, column 21 - line 402, column 54): " + [a.constructor.name]);
      },
      left: r.Left.create,
      right: r.Right.create
    };
  }(),
      p = function p(a) {
    return function () {
      var b = f._makeFiber(F, a)();

      b.run();
      return b;
    };
  },
      J = new b.Apply(function () {
    return G;
  }, f._parAffApply),
      C = new d.Monad(function () {
    return I;
  }, function () {
    return L;
  }),
      L = new e.Bind(function () {
    return B;
  }, f._bind),
      B = new b.Apply(function () {
    return E;
  }, d.ap(C)),
      I = new g.Applicative(function () {
    return B;
  }, f._pure),
      S = new x.MonadEffect(function () {
    return C;
  }, f._liftEffect);

  b = function () {
    var a = x.liftEffect(S);
    return function (b) {
      return t["const"](a(b));
    };
  }();

  var Q = new l.MonadThrow(function () {
    return C;
  }, f._throwError),
      M = new l.MonadError(function () {
    return Q;
  }, f._catchError),
      P = function P(a) {
    return function (b) {
      return p(e.bindFlipped(L)(function () {
        var b = x.liftEffect(S);
        return function (d) {
          return b(a(d));
        };
      }())(l["try"](M)(b)));
    };
  },
      K = new m.Parallel(function () {
    return V;
  }, function () {
    return C;
  }, a.unsafeCoerce, f._sequential),
      V = new g.Applicative(function () {
    return J;
  }, function () {
    var a = m.parallel(K),
        b = g.pure(I);
    return function (d) {
      return a(b(d));
    };
  }()),
      T = new D.Semigroup(function (a) {
    return function (b) {
      return function (d) {
        return h.parSequence_(K)(n.foldableArray)([a(d), b(d)]);
      };
    };
  });

  D = t["const"](g.pure(I)(z.unit));
  var N = new w.Monoid(function () {
    return T;
  }, D);
  D = f.makeAff(function (a) {
    return g.pure(q.applicativeEffect)(w.mempty(N));
  });
  var U = new k.Alt(function () {
    return G;
  }, f._parAffAlt),
      W = new k.Alt(function () {
    return E;
  }, function (a) {
    return function (b) {
      return l.catchError(M)(a)(t["const"](b));
    };
  });
  k = new u.Plus(function () {
    return W;
  }, l.throwError(Q)(H.error("Always fails")));
  u = new u.Plus(function () {
    return U;
  }, m.parallel(K)(u.empty(k)));

  c.runAff_ = function (a) {
    return function (b) {
      return v["void"](q.functorEffect)(P(a)(b));
    };
  };

  c.delay = function (a) {
    return f._delay(r.Right.create, a);
  };

  c.never = D;
  c.effectCanceler = b;
  c.functorAff = E;
  c.applicativeAff = I;
  c.bindAff = L;
  c.monadEffectAff = S;
  c.altParAff = U;
  c.plusParAff = u;
  c.parallelAff = K;
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
      u = a["Control.Plus"],
      r = a["Data.Array.NonEmpty"],
      n = a["Data.Array.NonEmpty.Internal"],
      t = a["Data.Either"],
      v = a["Data.FoldableWithIndex"],
      w = a["Data.Functor"],
      D = a["Data.Maybe"],
      z = a["Data.Monoid"],
      q = a["Data.Semigroup"],
      x = a["Data.Semigroup.Foldable"],
      H = a["Data.Show"],
      y = a["Data.Tuple"],
      G = a.Effect,
      E = a["Effect.AVar"],
      F = a["Effect.Aff"],
      p = a["Effect.Aff.AVar"],
      J = a["Effect.Aff.Class"],
      C = a["Effect.Class"],
      L = a["Effect.Console"],
      B = a["Effect.Exception"];
  a = new a["Control.ShiftMap"].ShiftMap(function (a) {
    return a(e.identity(e.categoryFn));
  });

  var I = l.freeFunctor,
      S = l.freeBind,
      Q = l.freeApplicative,
      M = new d.Monad(function () {
    return Q;
  }, function () {
    return S;
  }),
      P = function P(a) {
    return a;
  },
      K = function K(a) {
    return l["resume'"](function (b) {
      return function (d) {
        return new t.Right(w.map(a)(d)(b));
      };
    })(t.Left.create);
  },
      V = new w.Functor(function (a) {
    return function (b) {
      if (b instanceof t.Right) b = new t.Right({
        cont: w.map(F.functorAff)(a)(b.value0.cont),
        view: b.value0.view
      });else if (b instanceof t.Left) b = new t.Left(w.map(G.functorEffect)(a)(b.value0));else throw Error("Failed pattern match at Concur.Core.Types (line 45, column 5 - line 45, column 57): " + [b.constructor.name]);
      return b;
    };
  }),
      T = function T(a) {
    return l.liftF(t.Left.create(a));
  },
      N = function N(a) {
    return new C.MonadEffect(function () {
      return M;
    }, T);
  },
      U = function U(a) {
    return l.liftF(new t.Right({
      view: a,
      cont: F.never
    }));
  },
      W = function W(a) {
    return new q.Semigroup(function (b) {
      return function (d) {
        return h.orr(Z(a))([b, d]);
      };
    });
  },
      R = function R(a) {
    return new u.Plus(function () {
      return A(a);
    }, U(z.mempty(a)));
  },
      Z = function Z(a) {
    return new h.MultiAlternative(function () {
      return R(a);
    }, function (d) {
      var c = function c(a) {
        return function (d) {
          return function (c) {
            var e = w.map(n.functorNonEmptyArray)(function (a) {
              return l.wrap(t.Right.create(a));
            })(d);
            return b.bind(F.bindAff)(m.sequential(F.parallelAff)(v.foldlWithIndex(n.foldableWithIndexNonEmptyArray)(function (a) {
              return function (b) {
                return function (d) {
                  return f.alt(F.altParAff)(m.parallel(F.parallelAff)(w.map(F.functorAff)(y.Tuple.create(a))(d)))(b);
                };
              };
            })(u.empty(F.plusParAff))(c)))(function (b) {
              return g.pure(F.applicativeAff)(q(a)(D.fromMaybe(e)(r.updateAt(b.value0)(b.value1)(e))));
            });
          };
        };
      },
          e = function e(a) {
        return function (b) {
          return l.wrap(new t.Right({
            view: x.foldMap1(n.foldable1NonEmptyArray)(a.Semigroup0())(function (a) {
              return a.view;
            })(b),
            cont: c(a)(b)(w.map(n.functorNonEmptyArray)(function (a) {
              return a.cont;
            })(b))
          }));
        };
      },
          h = function h(a) {
        return function (b) {
          return function (d) {
            var c = r.uncons(d),
                e = K(V)(c.head);
            if (e instanceof t.Left) return g.pure(l.freeApplicative)(e.value0);

            if (e instanceof t.Right) {
              if (e.value0 instanceof t.Left) return l.wrap(new t.Left(function () {
                var d = e.value0.value0();
                return h(a)(b)(r["cons'"](d)(c.tail));
              }));
              if (e.value0 instanceof t.Right) return k(a)(r.snoc(b)(e.value0.value0))(c.tail);
              throw Error("Failed pattern match at Concur.Core.Types (line 138, column 34 - line 142, column 61): " + [e.value0.constructor.name]);
            }

            throw Error("Failed pattern match at Concur.Core.Types (line 136, column 10 - line 142, column 61): " + [e.constructor.name]);
          };
        };
      },
          k = function k(a) {
        return function (b) {
          return function (d) {
            d = r.fromArray(d);
            if (d instanceof D.Nothing) return e(a)(b);
            if (d instanceof D.Just) return h(a)(b)(d.value0);
            throw Error("Failed pattern match at Concur.Core.Types (line 113, column 31 - line 116, column 49): " + [d.constructor.name]);
          };
        };
      },
          q = function q(a) {
        return function (b) {
          var d = r.uncons(b),
              c = K(V)(d.head);
          if (c instanceof t.Left) return g.pure(l.freeApplicative)(c.value0);

          if (c instanceof t.Right) {
            if (c.value0 instanceof t.Left) return l.wrap(new t.Left(function () {
              var b = c.value0.value0();
              return q(a)(r["cons'"](b)(d.tail));
            }));
            if (c.value0 instanceof t.Right) return k(a)(r.singleton(c.value0.value0))(d.tail);
            throw Error("Failed pattern match at Concur.Core.Types (line 101, column 34 - line 105, column 63): " + [c.value0.constructor.name]);
          }

          throw Error("Failed pattern match at Concur.Core.Types (line 99, column 10 - line 105, column 63): " + [c.constructor.name]);
        };
      };

      d = r.fromArray(d);
      if (d instanceof D.Just) return q(a)(w.map(n.functorNonEmptyArray)(P)(d.value0));
      if (d instanceof D.Nothing) return u.empty(R(a));
      throw Error("Failed pattern match at Concur.Core.Types (line 88, column 13 - line 90, column 21): " + [d.constructor.name]);
    });
  },
      A = function A(a) {
    return new f.Alt(function () {
      return I;
    }, q.append(W(a)));
  },
      O = function O(a) {
    return function (b) {
      var d = function d(a) {
        return function (b) {
          if (b instanceof t.Left) return L.log("Aff failed - " + H.show(B.showError)(b.value0));
          if (b instanceof t.Right) return w["void"](G.functorEffect)(E.tryPut(b.value0)(a));
          throw Error("Failed pattern match at Concur.Core.Types (line 237, column 3 - line 237, column 55): " + [a.constructor.name, b.constructor.name]);
        };
      };

      return l.wrap(new t.Left(function () {
        var c = E.empty();
        F.runAff_(d(c))(b)();
        var e = E.tryTake(c)();
        if (e instanceof D.Just) return g.pure(l.freeApplicative)(e.value0);
        if (e instanceof D.Nothing) return l.liftF(new t.Right({
          view: a,
          cont: p.take(c)
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

  c.unWidget = P;
  c.resume = K;
  c.display = U;
  c.functorWidgetStep = V;
  c.widgetFunctor = I;
  c.widgetBind = S;
  c.widgetApplicative = Q;
  c.widgetMonad = M;
  c.widgetShiftMap = a;
  c.widgetMultiAlternative = Z;

  c.widgetMonoid = function (a) {
    return new z.Monoid(function () {
      return W(a);
    }, u.empty(R(a)));
  };

  c.widgetAlt = A;
  c.widgetPlus = R;

  c.widgetAlternative = function (a) {
    return new k.Alternative(function () {
      return Q;
    }, function () {
      return R(a);
    });
  };

  c.widgetMonadEff = N;

  c.widgetMonadAff = function (a) {
    return new J.MonadAff(function () {
      return N(a);
    }, O(z.mempty(a)));
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
      u = a["Effect.Aff"],
      r = a["Effect.Aff.AVar"],
      n = a["Effect.Aff.Class"],
      t = function t(a) {
    return function (c) {
      var v = f.resume(f.functorWidgetStep)(c);
      if (v instanceof d.Left) return g.pure(b.freeApplicative)(v.value0);

      if (v instanceof d.Right) {
        if (v.value0 instanceof d.Left) return b.wrap(f.WidgetStep(new d.Left(function () {
          var b = v.value0.value0();
          return t(a)(b);
        })));
        if (v.value0 instanceof d.Right) return b.wrap(f.WidgetStep(new d.Left(function () {
          var c = m.empty(),
              q = e.sequential(u.parallelAff)(k.alt(u.altParAff)(e.parallel(u.parallelAff)(n.liftAff(n.monadAffAff)(r.take(c))))(e.parallel(u.parallelAff)(l.map(u.functorAff)(t(a))(v.value0.value0.cont))));
          return b.wrap(f.WidgetStep(new d.Right({
            view: a(function (a) {
              return l["void"](h.functorEffect)(m.tryPut(g.pure(b.freeApplicative)(a))(c));
            })(v.value0.value0.view),
            cont: q
          })));
        })));
        throw Error("Failed pattern match at Concur.Core (line 36, column 28 - line 49, column 10): " + [v.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core (line 34, column 26 - line 49, column 10): " + [v.constructor.name]);
    };
  };

  c.mkLeafWidget = function (a) {
    return f.Widget(b.wrap(f.WidgetStep(new d.Left(function () {
      var c = m.empty();
      return b.wrap(f.WidgetStep(new d.Right({
        view: a(function (a) {
          return l["void"](h.functorEffect)(m.tryPut(g.pure(b.freeApplicative)(a))(c));
        }),
        cont: n.liftAff(n.monadAffAff)(r.take(c))
      })));
    }))));
  };

  c.mkNodeWidget = function (a) {
    return function (b) {
      return t(a)(b);
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
    return function (d) {
      return function (c) {
        return function (e) {
          return function (f) {
            var g = l(a)(c)(e)(f),
                h = b.orr(d);
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
      u = function u(a) {
    return function (c) {
      var e = g.resume(f.functorWidgetStep)(f.unWidget(c));
      if (e instanceof b.Right) return k.pure(h.applicativeEffect)(new l.Tuple(c, d.mempty(a)));

      if (e instanceof b.Left) {
        if (e.value0 instanceof b.Left) return function () {
          var b = e.value0.value0();
          return u(a)(b)();
        };
        if (e.value0 instanceof b.Right) return k.pure(h.applicativeEffect)(new l.Tuple(g.wrap(new b.Right(e.value0.value0)), e.value0.value0.view));
        throw Error("Failed pattern match at Concur.Core.Discharge (line 43, column 27 - line 47, column 77): " + [e.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core.Discharge (line 41, column 28 - line 47, column 77): " + [e.constructor.name]);
    };
  },
      r = function r(a) {
    return function (c) {
      return function (l) {
        var n = g.resume(f.functorWidgetStep)(l);
        if (n instanceof b.Right) return k.pure(h.applicativeEffect)(d.mempty(a));

        if (n instanceof b.Left) {
          if (n.value0 instanceof b.Left) return function () {
            var b = n.value0.value0();
            return r(a)(c)(b)();
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

  c.discharge = r;
  c.dischargePartialEffect = u;
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
      u = a["Control.ShiftMap"],
      r = a["Data.Functor"],
      n = a["Data.Lazy"],
      t = a["Data.Tuple"],
      v = function v(a) {
    return t.snd(n.force(a));
  },
      w = function w(a) {
    return function (b) {
      return n.defer(function (d) {
        return new t.Tuple(a, b);
      });
    };
  },
      D = function D(a) {
    return t.fst(n.force(a));
  },
      z = function z(a) {
    return new r.Functor(function (b) {
      var d = function d(c) {
        return r.map(n.functorLazy)(function (c) {
          return new t.Tuple(b(c.value0), r.map(a)(d)(c.value1));
        })(c);
      };

      return d;
    });
  },
      q = function q(a) {
    return new l.Extend(function () {
      return z(a);
    }, function (b) {
      var d = function d(c) {
        return r.map(n.functorLazy)(function (e) {
          return new t.Tuple(b(c), r.map(a)(d)(e.value1));
        })(c);
      };

      return d;
    });
  },
      x = function x(a) {
    return new h.Monad(function () {
      return G(a);
    }, function () {
      return H(a);
    });
  },
      H = function H(a) {
    return new e.Bind(function () {
      return y(a);
    }, function (b) {
      return function (d) {
        var c = function c(b) {
          return function (d) {
            var f = r.map(a.Plus1().Alt0().Functor0())(c(b))(v(d)),
                g = r.map(a.Plus1().Alt0().Functor0())(e)(v(b));
            return w(D(d))(k.alt(a.Plus1().Alt0())(g)(f));
          };
        },
            e = function e(a) {
          return c(a)(d(D(a)));
        };

        return e(b);
      };
    });
  },
      y = function y(a) {
    return new b.Apply(function () {
      return z(a.Plus1().Alt0().Functor0());
    }, h.ap(x(a)));
  },
      G = function G(a) {
    return new g.Applicative(function () {
      return y(a);
    }, function (b) {
      return w(b)(m.empty(a.Plus1()));
    });
  };

  c.mkCofree = w;
  c.tail = v;

  c.comonadCofree = function (a) {
    return new d.Comonad(function () {
      return q(a);
    }, D);
  };

  c.applicativeCofree = G;
  c.bindCofree = H;

  c.shiftMapCofree = function (a) {
    return new u.ShiftMap(function (b) {
      return function (d) {
        return n.defer(function (c) {
          c = n.force(d);
          return new t.Tuple(c.value0, b(g.pure(G(f.widgetAlternative(a))))(c.value1));
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
      u = a["Effect.Aff"],
      r = a["Effect.Aff.Class"],
      n = e.tail,
      t = e.mkCofree,
      v = function v(a) {
    return function (c) {
      return function (h) {
        var k = h(c);
        return t(d.extract(e.comonadCofree(f.widgetFunctor))(k))(b.bind(f.widgetBind)(n(k))(function (b) {
          return g.pure(f.widgetApplicative)(v(a)(d.extract(e.comonadCofree(f.widgetFunctor))(b))(h));
        }));
      };
    };
  },
      w = function w(a) {
    return b.bind(f.widgetBind)(n(a))(w);
  };

  c.step = t;

  c.display = function (a) {
    return t(m.unit)(a);
  };

  c.loopS = v;
  c.dyn = w;

  c.debounce = function (a) {
    return function (d) {
      return function (c) {
        return function (e) {
          var m = function m(c) {
            return function (e) {
              return b.bind(f.widgetBind)(k.alt(f.widgetAlt(a))(l.map(f.widgetFunctor)(h.Just.create)(e(c)))(l.voidRight(f.widgetFunctor)(h.Nothing.value)(r.liftAff(f.widgetMonadAff(a))(u.delay(d)))))(function (a) {
                if (a instanceof h.Nothing) return g.pure(f.widgetApplicative)(q(c)(e));
                if (a instanceof h.Just) return m(a.value0)(e);
                throw Error("Failed pattern match at Concur.Core.FRP (line 199, column 7 - line 203, column 28): " + [a.constructor.name]);
              });
            };
          },
              q = function q(a) {
            return function (d) {
              return t(a)(b.bind(f.widgetBind)(d(a))(function (a) {
                return m(a)(d);
              }));
            };
          };

          return q(c)(e);
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
      u = function u(a) {
    var n = function n(a) {
      return m.toElement(m.isReactElementArray)(a.view);
    },
        r = function r(a) {
      return function (n) {
        if (n instanceof f.Right) return function () {
          var b = c.discharge(g.monoidArray)(r(a))(n.value0)();
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
          componentDidMount: r(b)(new f.Right(e.value0))
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
      u = f.unsafeMkProps("type");
  c.style = b;
  c.checked = m;
  c.className = h;
  c.defaultValue = l;
  c.disabled = d;
  c.href = e;
  c.target = g;
  c._type = u;
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
      return function (d) {
        if (a) {
          if (a) var c = f.createElementTagNameDynamic;else throw Error("Failed pattern match at React.DOM (line 15, column 5 - line 17, column 55): " + [a.constructor.name]);
        } else c = f.createElementTagName;
        return c(b)(k.unsafeFromPropsArray(d));
      };
    };
  },
      b = g(!1)("option"),
      e = g(!1)("select"),
      d = g(!1)("span"),
      l = g(!1)("ul"),
      h = g(!1)("li"),
      m = g(!1)("div"),
      u = g(!1)("cite"),
      r = g(!1)("button"),
      n = g(!1)("a");

  c.text = a;
  c.a = n;

  c.br = function (a) {
    return g(!1)("br")(a)([]);
  };

  c.button = r;
  c.cite = u;
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
      return function (d) {
        return [a(b)(d)];
      };
    };
  },
      l = function l(a) {
    return function (d) {
      return f.elLeaf(a)(b.functorArray)(function (a) {
        return [d(a)];
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
      u = function u(a) {
    return function (b) {
      return h(b)(a)(e.span);
    };
  },
      r = function r(a) {
    return function (c) {
      return f.el(a)(b.functorArray)(d(c));
    };
  },
      n = function n(a) {
    return function (b) {
      return h(b)(a)(e.div);
    };
  },
      t = function t(a) {
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
    return r(a)(e.button);
  };

  c.button = function (a) {
    return function (b) {
      return h(b)(a)(e.button);
    };
  };

  c["cite'"] = function (a) {
    return function (b) {
      return t(a)(b)([]);
    };
  };

  c.div_ = function (a) {
    return r(a)(e.div);
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
    return r(a)(e.li);
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
    return r(a)(e.span);
  };

  c.span = u;

  c["span'"] = function (a) {
    return function (b) {
      return u(a)(b)([]);
    };
  };

  c.ul_ = function (a) {
    return r(a)(e.ul);
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
        d = k.concatMap(b.maybe([])(function (a) {
      return [a];
    }));
    return function (b) {
      return h(a(d(b)));
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
    return function (r) {
      return function () {
        var n = l.window();
        n = m.document(n)();
        n = h.toNonElementParentNode(n);
        n = d.getElementById(a)(n)();
        if (n instanceof k.Nothing) return g.unit;
        if (n instanceof k.Just) return f["void"](b.functorEffect)(e.render(c.renderComponent(r))(n.value0))();
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
      u = new l.MonadTrans(function (a) {
    return function (b) {
      return g.bind(a.Bind1())(b)(function (b) {
        return f.pure(a.Applicative0())(new h.Right(b));
      });
    };
  }),
      r = function r(a) {
    return function (b) {
      return a(b);
    };
  },
      n = function n(a) {
    return new m.Functor(function (b) {
      return r(m.map(a)(m.map(h.functorEither)(b)));
    });
  },
      t = function t(a) {
    return new b.Monad(function () {
      return D(a);
    }, function () {
      return v(a);
    });
  },
      v = function v(a) {
    return new g.Bind(function () {
      return w(a);
    }, function (b) {
      return function (d) {
        return g.bind(a.Bind1())(b)(h.either(function () {
          var b = f.pure(a.Applicative0());
          return function (a) {
            return b(h.Left.create(a));
          };
        }())(function (a) {
          return d(a);
        }));
      };
    });
  },
      w = function w(a) {
    return new k.Apply(function () {
      return n(a.Bind1().Apply0().Functor0());
    }, b.ap(t(a)));
  },
      D = function D(a) {
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
  c.applicativeExceptT = D;
  c.bindExceptT = v;

  c.monadThrowExceptT = function (a) {
    return new e.MonadThrow(function () {
      return t(a);
    }, function () {
      var b = f.pure(a.Applicative0());
      return function (a) {
        return b(h.Left.create(a));
      };
    }());
  };

  c.monadStateExceptT = function (a) {
    return new d.MonadState(function () {
      return t(a.Monad0());
    }, function (b) {
      return l.lift(u)(a.Monad0())(d.state(a)(b));
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
      u = function u(a) {
    return new b.Monad(function () {
      return t(a);
    }, function () {
      return r(a);
    });
  },
      r = function r(a) {
    return new g.Bind(function () {
      return n(a);
    }, function (b) {
      return function (d) {
        return function (c) {
          return g.bind(a.Bind1())(b(c))(function (a) {
            return d(a.value0)(a.value1);
          });
        };
      };
    });
  },
      n = function n(a) {
    return new k.Apply(function () {
      return m(a.Bind1().Apply0().Functor0());
    }, b.ap(u(a)));
  },
      t = function t(a) {
    return new f.Applicative(function () {
      return n(a);
    }, function (b) {
      return function (d) {
        return f.pure(a.Applicative0())(new l.Tuple(b, d));
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
  c.bindStateT = r;
  c.monadStateT = u;
  c.lazyStateT = a;

  c.monadStateStateT = function (a) {
    return new e.MonadState(function () {
      return u(a);
    }, function (b) {
      return function () {
        var d = f.pure(a.Applicative0());
        return function (a) {
          return d(b(a));
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

  var u = function u(a) {
    this.Bounded0 = a;
  },
      r = function r(a, b, d) {
    this.Ord0 = a;
    this.pred = b;
    this.succ = d;
  },
      n = function n(a, b, d, c, e) {
    this.Bounded0 = a;
    this.Enum1 = b;
    this.cardinality = d;
    this.fromEnum = c;
    this.toEnum = e;
  },
      t = new u(function () {
    return g.boundedBoolean;
  }),
      v = new d.Newtype(function (a) {
    return a;
  }, a),
      w = function w(a) {
    return new r(function () {
      return e.ordMaybe(a.Enum1().Ord0());
    }, function (b) {
      if (b instanceof e.Nothing) return e.Nothing.value;
      if (b instanceof e.Just) return new e.Just((0, a.Enum1().pred)(b.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [b.constructor.name]);
    }, function (d) {
      if (d instanceof e.Nothing) return new e.Just(new e.Just(g.bottom(a.Bounded0())));
      if (d instanceof e.Just) return b.map(e.functorMaybe)(e.Just.create)((0, a.Enum1().succ)(d.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [d.constructor.name]);
    });
  },
      D = new r(function () {
    return l.ordBoolean;
  }, function (a) {
    return a ? new e.Just(!1) : e.Nothing.value;
  }, function (a) {
    return a ? e.Nothing.value : new e.Just(!0);
  }),
      z = function z(a) {
    return function (b) {
      return function (d) {
        return a(b(d) + 1 | 0);
      };
    };
  },
      q = function q(a) {
    return function (b) {
      return function (d) {
        return a(b(d) - 1 | 0);
      };
    };
  },
      x = function x(a) {
    return a >= g.bottom(g.boundedInt) && a <= g.top(g.boundedInt) ? new e.Just(f.fromCharCode(a)) : e.Nothing.value;
  },
      H = new r(function () {
    return l.ordChar;
  }, q(x)(f.toCharCode), z(x)(f.toCharCode));

  x = new n(function () {
    return g.boundedChar;
  }, function () {
    return H;
  }, f.toCharCode(g.top(g.boundedChar)) - f.toCharCode(g.bottom(g.boundedChar)) | 0, f.toCharCode, x);
  var y = new n(function () {
    return g.boundedBoolean;
  }, function () {
    return D;
  }, 2, function (a) {
    if (!a) return 0;
    if (a) return 1;
    throw Error("Failed pattern match at Data.Enum (line 120, column 1 - line 126, column 20): " + [a.constructor.name]);
  }, function (a) {
    return 0 === a ? new e.Just(!1) : 1 === a ? new e.Just(!0) : e.Nothing.value;
  });
  c.Enum = r;
  c.BoundedEnum = n;

  c.toEnum = function (a) {
    return a.toEnum;
  };

  c.fromEnum = function (a) {
    return a.fromEnum;
  };

  c.toEnumWithDefaults = function (a) {
    return function (b) {
      return function (d) {
        return function (c) {
          var f = (0, a.toEnum)(c);
          if (f instanceof e.Just) return f.value0;
          if (f instanceof e.Nothing) return c < (0, a.fromEnum)(g.bottom(a.Bounded0())) ? b : d;
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

  c.defaultSucc = z;
  c.defaultPred = q;
  c.SmallBounded = u;
  c.boundedEnumBoolean = y;
  c.boundedEnumChar = x;
  c.newtypeCardinality = v;

  c.boundedEnumMaybe = function (a) {
    return function (a) {
      return new n(function () {
        return e.boundedMaybe(a.Bounded0());
      }, function () {
        return w(a);
      }, d.unwrap(v)(a.cardinality) + 1 | 0, function (b) {
        if (b instanceof e.Nothing) return 0;
        if (b instanceof e.Just) return (0, a.fromEnum)(b.value0) + 1 | 0;
        throw Error("Failed pattern match at Data.Enum (line 334, column 1 - line 340, column 39): " + [b.constructor.name]);
      }, function (d) {
        return 0 === d ? e.Nothing.value : b.map(e.functorMaybe)(e.Just.create)((0, a.toEnum)(d - 1 | 0));
      });
    };
  };

  c.smallBoundedBoolean = t;
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
      return function (d) {
        return e.append(a)(b)(d);
      };
    });
  };

  c.Const = d;
  c.newtypeConst = a;

  c.applicativeConst = function (a) {
    return new f.Applicative(function () {
      return h(a.Semigroup0());
    }, function (d) {
      return b.mempty(a);
    });
  };
})(PS);

(function (a) {
  var c = function c(a, _c, g) {
    _c = new Date(Date.UTC(a, _c, g));
    0 <= a && 100 > a && _c.setUTCFullYear(a);
    return _c;
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
      u = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      r = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      n = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      t = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      v = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      w = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      D = function () {
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
      x = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      H = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      y = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      G = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      E = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      F = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      p = function () {
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
    if (a instanceof u) return "Tuesday";
    if (a instanceof r) return "Wednesday";
    if (a instanceof n) return "Thursday";
    if (a instanceof t) return "Friday";
    if (a instanceof v) return "Saturday";
    if (a instanceof w) return "Sunday";
    throw Error("Failed pattern match at Data.Date.Component (line 184, column 1 - line 191, column 25): " + [a.constructor.name]);
  });
  h = new h.Show(function (a) {
    if (a instanceof D) return "January";
    if (a instanceof z) return "February";
    if (a instanceof q) return "March";
    if (a instanceof x) return "April";
    if (a instanceof H) return "May";
    if (a instanceof y) return "June";
    if (a instanceof G) return "July";
    if (a instanceof E) return "August";
    if (a instanceof F) return "September";
    if (a instanceof p) return "October";
    if (a instanceof J) return "November";
    if (a instanceof C) return "December";
    throw Error("Failed pattern match at Data.Date.Component (line 101, column 1 - line 113, column 29): " + [a.constructor.name]);
  });
  var L = d.ordInt,
      B = d.ordInt,
      I = new b.Eq(function (a) {
    return function (b) {
      return a instanceof m && b instanceof m || a instanceof u && b instanceof u || a instanceof r && b instanceof r || a instanceof n && b instanceof n || a instanceof t && b instanceof t || a instanceof v && b instanceof v || a instanceof w && b instanceof w ? !0 : !1;
    };
  }),
      S = new d.Ord(function () {
    return I;
  }, function (a) {
    return function (b) {
      if (a instanceof m && b instanceof m) return l.EQ.value;
      if (a instanceof m) return l.LT.value;
      if (b instanceof m) return l.GT.value;
      if (a instanceof u && b instanceof u) return l.EQ.value;
      if (a instanceof u) return l.LT.value;
      if (b instanceof u) return l.GT.value;
      if (a instanceof r && b instanceof r) return l.EQ.value;
      if (a instanceof r) return l.LT.value;
      if (b instanceof r) return l.GT.value;
      if (a instanceof n && b instanceof n) return l.EQ.value;
      if (a instanceof n) return l.LT.value;
      if (b instanceof n) return l.GT.value;
      if (a instanceof t && b instanceof t) return l.EQ.value;
      if (a instanceof t) return l.LT.value;
      if (b instanceof t) return l.GT.value;
      if (a instanceof v && b instanceof v) return l.EQ.value;
      if (a instanceof v) return l.LT.value;
      if (b instanceof v) return l.GT.value;
      if (a instanceof w && b instanceof w) return l.EQ.value;
      throw Error("Failed pattern match at Data.Date.Component (line 154, column 1 - line 154, column 42): " + [a.constructor.name, b.constructor.name]);
    };
  }),
      Q = new b.Eq(function (a) {
    return function (b) {
      return a instanceof D && b instanceof D || a instanceof z && b instanceof z || a instanceof q && b instanceof q || a instanceof x && b instanceof x || a instanceof H && b instanceof H || a instanceof y && b instanceof y || a instanceof G && b instanceof G || a instanceof E && b instanceof E || a instanceof F && b instanceof F || a instanceof p && b instanceof p || a instanceof J && b instanceof J || a instanceof C && b instanceof C ? !0 : !1;
    };
  }),
      M = new d.Ord(function () {
    return Q;
  }, function (a) {
    return function (b) {
      if (a instanceof D && b instanceof D) return l.EQ.value;
      if (a instanceof D) return l.LT.value;
      if (b instanceof D) return l.GT.value;
      if (a instanceof z && b instanceof z) return l.EQ.value;
      if (a instanceof z) return l.LT.value;
      if (b instanceof z) return l.GT.value;
      if (a instanceof q && b instanceof q) return l.EQ.value;
      if (a instanceof q) return l.LT.value;
      if (b instanceof q) return l.GT.value;
      if (a instanceof x && b instanceof x) return l.EQ.value;
      if (a instanceof x) return l.LT.value;
      if (b instanceof x) return l.GT.value;
      if (a instanceof H && b instanceof H) return l.EQ.value;
      if (a instanceof H) return l.LT.value;
      if (b instanceof H) return l.GT.value;
      if (a instanceof y && b instanceof y) return l.EQ.value;
      if (a instanceof y) return l.LT.value;
      if (b instanceof y) return l.GT.value;
      if (a instanceof G && b instanceof G) return l.EQ.value;
      if (a instanceof G) return l.LT.value;
      if (b instanceof G) return l.GT.value;
      if (a instanceof E && b instanceof E) return l.EQ.value;
      if (a instanceof E) return l.LT.value;
      if (b instanceof E) return l.GT.value;
      if (a instanceof F && b instanceof F) return l.EQ.value;
      if (a instanceof F) return l.LT.value;
      if (b instanceof F) return l.GT.value;
      if (a instanceof p && b instanceof p) return l.EQ.value;
      if (a instanceof p) return l.LT.value;
      if (b instanceof p) return l.GT.value;
      if (a instanceof J && b instanceof J) return l.EQ.value;
      if (a instanceof J) return l.LT.value;
      if (b instanceof J) return l.GT.value;
      if (a instanceof C && b instanceof C) return l.EQ.value;
      throw Error("Failed pattern match at Data.Date.Component (line 61, column 1 - line 61, column 38): " + [a.constructor.name, b.constructor.name]);
    };
  }),
      P = new k.Bounded(function () {
    return L;
  }, -271820, 275759),
      K = new k.Bounded(function () {
    return S;
  }, m.value, w.value),
      V = new k.Bounded(function () {
    return M;
  }, D.value, C.value),
      T = new g.BoundedEnum(function () {
    return P;
  }, function () {
    return N;
  }, 547580, function (a) {
    return a;
  }, function (a) {
    if (-271820 <= a && 275759 >= a) return new e.Just(a);
    if (f.otherwise) return e.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 35, column 1 - line 40, column 24): " + [a.constructor.name]);
  }),
      N = new g.Enum(function () {
    return L;
  }, function () {
    var a = g.toEnum(T),
        b = g.fromEnum(T);
    return function (d) {
      return a(b(d) - 1 | 0);
    };
  }(), function () {
    var a = g.toEnum(T),
        b = g.fromEnum(T);
    return function (d) {
      return a(b(d) + 1 | 0);
    };
  }()),
      U = new g.BoundedEnum(function () {
    return K;
  }, function () {
    return W;
  }, 7, function (a) {
    if (a instanceof m) return 1;
    if (a instanceof u) return 2;
    if (a instanceof r) return 3;
    if (a instanceof n) return 4;
    if (a instanceof t) return 5;
    if (a instanceof v) return 6;
    if (a instanceof w) return 7;
    throw Error("Failed pattern match at Data.Date.Component (line 175, column 14 - line 182, column 16): " + [a.constructor.name]);
  }, function (a) {
    return 1 === a ? new e.Just(m.value) : 2 === a ? new e.Just(u.value) : 3 === a ? new e.Just(r.value) : 4 === a ? new e.Just(n.value) : 5 === a ? new e.Just(t.value) : 6 === a ? new e.Just(v.value) : 7 === a ? new e.Just(w.value) : e.Nothing.value;
  }),
      W = new g.Enum(function () {
    return S;
  }, function () {
    var a = g.toEnum(U),
        b = g.fromEnum(U);
    return function (d) {
      return a(b(d) - 1 | 0);
    };
  }(), function () {
    var a = g.toEnum(U),
        b = g.fromEnum(U);
    return function (d) {
      return a(b(d) + 1 | 0);
    };
  }()),
      R = new g.BoundedEnum(function () {
    return V;
  }, function () {
    return Z;
  }, 12, function (a) {
    if (a instanceof D) return 1;
    if (a instanceof z) return 2;
    if (a instanceof q) return 3;
    if (a instanceof x) return 4;
    if (a instanceof H) return 5;
    if (a instanceof y) return 6;
    if (a instanceof G) return 7;
    if (a instanceof E) return 8;
    if (a instanceof F) return 9;
    if (a instanceof p) return 10;
    if (a instanceof J) return 11;
    if (a instanceof C) return 12;
    throw Error("Failed pattern match at Data.Date.Component (line 87, column 14 - line 99, column 19): " + [a.constructor.name]);
  }, function (a) {
    return 1 === a ? new e.Just(D.value) : 2 === a ? new e.Just(z.value) : 3 === a ? new e.Just(q.value) : 4 === a ? new e.Just(x.value) : 5 === a ? new e.Just(H.value) : 6 === a ? new e.Just(y.value) : 7 === a ? new e.Just(G.value) : 8 === a ? new e.Just(E.value) : 9 === a ? new e.Just(F.value) : 10 === a ? new e.Just(p.value) : 11 === a ? new e.Just(J.value) : 12 === a ? new e.Just(C.value) : e.Nothing.value;
  }),
      Z = new g.Enum(function () {
    return M;
  }, function () {
    var a = g.toEnum(R),
        b = g.fromEnum(R);
    return function (d) {
      return a(b(d) - 1 | 0);
    };
  }(), function () {
    var a = g.toEnum(R),
        b = g.fromEnum(R);
    return function (d) {
      return a(b(d) + 1 | 0);
    };
  }()),
      A = new k.Bounded(function () {
    return B;
  }, 1, 31),
      O = new g.BoundedEnum(function () {
    return A;
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
    return B;
  }, function () {
    var a = g.toEnum(O),
        b = g.fromEnum(O);
    return function (d) {
      return a(b(d) - 1 | 0);
    };
  }(), function () {
    var a = g.toEnum(O),
        b = g.fromEnum(O);
    return function (d) {
      return a(b(d) + 1 | 0);
    };
  }());
  c.January = D;
  c.February = z;
  c.March = q;
  c.April = x;
  c.May = H;
  c.June = y;
  c.July = G;
  c.August = E;
  c.September = F;
  c.October = p;
  c.November = J;
  c.December = C;
  c.boundedYear = P;
  c.boundedEnumYear = T;
  c.boundedMonth = V;
  c.boundedEnumMonth = R;
  c.showMonth = h;
  c.boundedDay = A;
  c.boundedEnumDay = O;
  c.boundedEnumWeekday = U;
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
    function a(a, b, d) {
      this.value0 = a;
      this.value1 = b;
      this.value2 = d;
    }

    a.create = function (b) {
      return function (d) {
        return function (c) {
          return new a(b, d, c);
        };
      };
    };

    return a;
  }();

  c.canonicalDate = function (a) {
    return function (d) {
      return function (c) {
        return f.canonicalDateImpl(function (a) {
          return function (d) {
            return function (c) {
              return new e(a, b.fromJust()(g.toEnum(k.boundedEnumMonth)(d)), c);
            };
          };
        }, a, g.fromEnum(k.boundedEnumMonth)(d), c);
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

  a.toDateTimeImpl = function (a) {
    return function (c) {
      c = new Date(c);
      return a(c.getUTCFullYear())(c.getUTCMonth() + 1)(c.getUTCDate())(c.getUTCHours())(c.getUTCMinutes())(c.getUTCSeconds())(c.getUTCMilliseconds());
    };
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
      b = a["Data.DateTime"],
      e = a["Data.Enum"],
      d = a["Data.Maybe"],
      l = a["Data.Time"];

  a = function () {
    return f.toDateTimeImpl(function (a) {
      return function (c) {
        return function (f) {
          return function (h) {
            return function (m) {
              return function (n) {
                return function (r) {
                  return new b.DateTime(k.canonicalDate(a)(d.fromJust()(e.toEnum(g.boundedEnumMonth)(c)))(f), new l.Time(h, m, n, r));
                };
              };
            };
          };
        };
      };
    });
  }();

  c.unInstant = function (a) {
    return a;
  };

  c.fromDateTime = function (a) {
    return f.fromDateTimeImpl(k.year(a.value0), e.fromEnum(g.boundedEnumMonth)(k.month(a.value0)), k.day(a.value0), l.hour(a.value1), l.minute(a.value1), l.second(a.value1), l.millisecond(a.value1));
  };

  c.toDateTime = a;
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
      u = new f.Applicative(function () {
    return h;
  }, d);
  f = new b.Monad(function () {
    return u;
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
    return function (d) {
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
      })(a)(b.split(g.wrap(e.newtypePattern)(""))(d));
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
      u = a["Control.Plus"],
      r = a["Data.Either"],
      n = a["Data.Identity"],
      t = a["Data.Newtype"],
      v = a["Data.Tuple"],
      w = a["Text.Parsing.Parser.Pos"],
      D = function () {
    function a(a, b, d) {
      this.value0 = a;
      this.value1 = b;
      this.value2 = d;
    }

    a.create = function (b) {
      return function (d) {
        return function (c) {
          return new a(b, d, c);
        };
      };
    };

    return a;
  }(),
      z = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (b) {
      return function (d) {
        return new a(b, d);
      };
    };

    return a;
  }();

  a = function a(_a13) {
    return _a13;
  };

  var q = new t.Newtype(function (a) {
    return a;
  }, a),
      x = function x(a) {
    return function (b) {
      return function (d) {
        var c = new D(b, w.initialPos, !1);
        return m.evalStateT(a.Bind1().Apply0().Functor0())(l.runExceptT(t.unwrap(q)(d)))(c);
      };
    };
  },
      H = function H(a) {
    return l.monadStateExceptT(m.monadStateStateT(a));
  },
      y = function y(a) {
    return h.gets(H(a))(function (a) {
      return a.value1;
    });
  },
      G = new e.Lazy(function (a) {
    return e.defer(m.lazyStateT)(function () {
      var b = t.unwrap(q);
      return function (d) {
        return l.runExceptT(b(a(d)));
      };
    }());
  }),
      E = function E(a) {
    return l.functorExceptT(m.functorStateT(a));
  },
      F = function F(a) {
    return function (b) {
      return function (c) {
        return d.throwError(l.monadThrowExceptT(m.monadStateT(a)))(new z(b, c));
      };
    };
  },
      p = function p(a) {
    return l.bindExceptT(m.monadStateT(a));
  },
      J = function J(a) {
    return function (d) {
      return b.bindFlipped(p(a))(F(a)(d))(y(a));
    };
  },
      C = function C(a) {
    return l.applicativeExceptT(m.monadStateT(a));
  },
      L = function L(a) {
    return new f.Alt(function () {
      return E(a.Bind1().Apply0().Functor0());
    }, function (d) {
      return function (c) {
        return l.ExceptT(m.StateT(function (e) {
          return b.bind(a.Bind1())(m.runStateT(l.runExceptT(t.unwrap(q)(d)))(new D(e.value0, e.value1, !1)))(function (b) {
            return b.value0 instanceof r.Left && !b.value1.value2 ? m.runStateT(l.runExceptT(t.unwrap(q)(c)))(e) : g.pure(a.Applicative0())(new v.Tuple(b.value0, b.value1));
          });
        }));
      };
    });
  },
      B = function B(a) {
    return new u.Plus(function () {
      return L(a);
    }, J(a)("No alternative"));
  };

  c.ParseError = z;

  c.parseErrorMessage = function (a) {
    return a.value0;
  };

  c.parseErrorPosition = function (a) {
    return a.value1;
  };

  c.ParseState = D;
  c.ParserT = a;

  c.runParser = function (a) {
    var b = t.unwrap(n.newtypeIdentity),
        d = x(n.monadIdentity)(a);
    return function (a) {
      return b(d(a));
    };
  };

  c.fail = J;
  c.newtypeParserT = q;
  c.lazyParserT = G;
  c.functorParserT = E;

  c.applyParserT = function (a) {
    return l.applyExceptT(m.monadStateT(a));
  };

  c.applicativeParserT = C;
  c.bindParserT = p;
  c.monadStateParserT = H;
  c.altParserT = L;
  c.plusParserT = B;

  c.alternativeParserT = function (a) {
    return new k.Alternative(function () {
      return C(a);
    }, function () {
      return B(a);
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
      u = a["Data.Tuple"],
      r = a["Text.Parsing.Parser"];

  c.withErrorMessage = function (a) {
    return function (b) {
      return function (d) {
        return f.alt(r.altParserT(a))(b)(r.fail(a)("Expected " + d));
      };
    };
  };

  c["try"] = function (a) {
    return function (d) {
      return r.ParserT(b.ExceptT(e.StateT(function (c) {
        return g.bind(a.Bind1())(e.runStateT(b.runExceptT(m.unwrap(r.newtypeParserT)(d)))(c))(function (b) {
          return b.value0 instanceof l.Left ? k.pure(a.Applicative0())(new u.Tuple(b.value0, new r.ParseState(b.value1.value0, b.value1.value1, c.value2))) : k.pure(a.Applicative0())(new u.Tuple(b.value0, b.value1));
        });
      })));
    };
  };

  c.tryRethrow = function (a) {
    return function (d) {
      return r.ParserT(b.ExceptT(e.StateT(function (c) {
        return g.bind(a.Bind1())(e.runStateT(b.runExceptT(m.unwrap(r.newtypeParserT)(d)))(c))(function (b) {
          return b.value0 instanceof l.Left ? k.pure(a.Applicative0())(new u.Tuple(new l.Left(new r.ParseError(b.value0.value0.value0, c.value1)), new r.ParseState(b.value1.value0, b.value1.value1, c.value2))) : k.pure(a.Applicative0())(new u.Tuple(b.value0, b.value1));
        });
      })));
    };
  };

  c.choice = function (a) {
    return function (b) {
      return h.foldl(a)(f.alt(r.altParserT(b)))(d.empty(r.plusParserT(b)));
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
      return function (d) {
        return function (c) {
          return function (e) {
            return function (g) {
              var h = g.length;
              if (0 > e || e >= h) return d;
              if (f) for ($jscomp.initSymbol(), $jscomp.initSymbolIterator(), g = g[Symbol.iterator](), h = e;; --h) {
                var k = g.next();
                if (k.done) return d;
                if (0 === h) return b(c(k.value));
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
        var d = "";
        $jscomp.initSymbol();
        $jscomp.initSymbolIterator();
        a = a[Symbol.iterator]();

        for (var c = 0; c < b; ++c) {
          var e = a.next();
          if (e.done) break;
          d += e.value;
        }

        return d;
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
    var d = b(a);
    return function (a) {
      return k.isJust(d(a));
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
      u = a["Data.Maybe"],
      r = a["Data.Ord"],
      n = a["Data.String.CodeUnits"],
      t = a["Data.String.Common"],
      v = a["Data.String.Unsafe"],
      w = a["Data.Tuple"],
      D = a["Data.Unfoldable"],
      z = function z(a) {
    return function (b) {
      return ((1024 * (a - 55296 | 0) | 0) + (b - 56320 | 0) | 0) + 65536 | 0;
    };
  };

  a = new a["Data.Show"].Show(function (a) {
    return "(CodePoint 0x" + (t.toUpper(m.toStringAs(m.hexadecimal)(a)) + ")");
  });

  var q = function q(a) {
    var b = n.length(a);
    if (0 === b) return u.Nothing.value;
    if (1 === b) return new u.Just({
      head: e.fromEnum(e.boundedEnumChar)(v.charAt(0)(a)),
      tail: ""
    });
    b = e.fromEnum(e.boundedEnumChar)(v.charAt(1)(a));
    var d = e.fromEnum(e.boundedEnumChar)(v.charAt(0)(a));
    return 55296 <= d && 56319 >= d && 56320 <= b && 57343 >= b ? new u.Just({
      head: z(d)(b),
      tail: n.drop(2)(a)
    }) : new u.Just({
      head: d,
      tail: n.drop(1)(a)
    });
  },
      x = function x(a) {
    return h.map(u.functorMaybe)(function (a) {
      return new w.Tuple(a.head, a.tail);
    })(q(a));
  },
      H = f._unsafeCodePointAt0(function (a) {
    var b = e.fromEnum(e.boundedEnumChar)(v.charAt(0)(a));
    return 55296 <= b && 56319 >= b && 1 < n.length(a) && (a = e.fromEnum(e.boundedEnumChar)(v.charAt(1)(a)), 56320 <= a && 57343 >= a) ? z(b)(a) : b;
  }),
      y = f._toCodePointArray(function (a) {
    return D.unfoldr(D.unfoldableArray)(x)(a);
  })(H),
      G = function G(a) {
    return k.length(y(a));
  },
      E = function () {
    var a = e.toEnumWithDefaults(e.boundedEnumChar)(b.bottom(b.boundedChar))(b.top(b.boundedChar));
    return function (b) {
      return n.singleton(a(b));
    };
  }(),
      F = f._singleton(function (a) {
    if (65535 >= a) return E(a);
    var b = l.div(l.euclideanRingInt)(a - 65536 | 0)(1024) + 55296 | 0;
    a = l.mod(l.euclideanRingInt)(a - 65536 | 0)(1024) + 56320 | 0;
    return E(b) + E(a);
  }),
      p = function p(a) {
    return function (b) {
      if (1 > a) return "";
      var d = q(b);
      return d instanceof u.Just ? F(d.value0.head) + p(a - 1 | 0)(d.value0.tail) : b;
    };
  },
      J = f._take(p),
      C = new d.Eq(function (a) {
    return function (b) {
      return a === b;
    };
  }),
      L = new r.Ord(function () {
    return C;
  }, function (a) {
    return function (b) {
      return r.compare(r.ordInt)(a)(b);
    };
  }),
      B = function B(a) {
    return function (b) {
      for (var d = a, c = !1, e; !c;) {
        e = d;
        var f = q(b);
        f instanceof u.Just ? 0 === e ? (c = !0, e = new u.Just(f.value0.head)) : (d = e - 1 | 0, b = f.value0.tail, e = void 0) : (c = !0, e = u.Nothing.value);
      }

      return e;
    };
  },
      I = new b.Bounded(function () {
    return L;
  }, 0, 1114111);

  d = new e.BoundedEnum(function () {
    return I;
  }, function () {
    return S;
  }, 1114112, function (a) {
    return a;
  }, function (a) {
    if (0 <= a && 1114111 >= a) return new u.Just(a);
    if (g.otherwise) return u.Nothing.value;
    throw Error("Failed pattern match at Data.String.CodePoints (line 63, column 1 - line 68, column 26): " + [a.constructor.name]);
  });
  var S = new e.Enum(function () {
    return L;
  }, e.defaultPred(e.toEnum(d))(e.fromEnum(d)), e.defaultSucc(e.toEnum(d))(e.fromEnum(d)));
  c.singleton = F;
  c.toCodePointArray = y;

  c.codePointAt = function (a) {
    return function (b) {
      return 0 > a || 0 === a && "" === b ? u.Nothing.value : 0 === a ? new u.Just(H(b)) : f._codePointAt(B)(u.Just.create)(u.Nothing.value)(H)(a)(b);
    };
  };

  c.length = G;

  c.indexOf = function (a) {
    return function (b) {
      return h.map(u.functorMaybe)(function (a) {
        return G(n.take(a)(b));
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
      u = a["Data.String.CodePoints"],
      r = a["Data.String.CodeUnits"],
      n = a["Data.String.Pattern"],
      t = a["Text.Parsing.Parser"],
      v = a["Text.Parsing.Parser.Combinators"],
      w = a["Text.Parsing.Parser.Pos"];
  a = new function (a, b, d, c) {
    this.drop = a;
    this.indexOf = b;
    this["null"] = d;
    this.uncons = c;
  }(u.drop, u.indexOf, a["Data.String.Common"]["null"], r.uncons);

  var D = function D(a) {
    return function (b) {
      return k.bind(t.bindParserT(b))(g.gets(t.monadStateParserT(b))(function (a) {
        return a.value0;
      }))(function (d) {
        var c = (0, a.uncons)(d);
        if (c instanceof l.Nothing) return t.fail(b)("Unexpected EOF");
        if (c instanceof l.Just) return k.discard(k.discardUnit)(t.bindParserT(b))(g.modify_(t.monadStateParserT(b))(function (a) {
          return new t.ParseState(c.value0.tail, w.updatePosString(a.value1)(r.singleton(c.value0.head)), !0);
        }))(function () {
          return f.pure(t.applicativeParserT(b))(c.value0.head);
        });
        throw Error("Failed pattern match at Text.Parsing.Parser.String (line 56, column 3 - line 63, column 16): " + [c.constructor.name]);
      });
    };
  },
      z = function z(a) {
    return function (b) {
      return function (d) {
        return v.tryRethrow(b)(k.bind(t.bindParserT(b))(D(a)(b))(function (a) {
          return d(a) ? f.pure(t.applicativeParserT(b))(a) : t.fail(b)("Character '" + (r.singleton(a) + "' did not satisfy predicate"));
        }));
      };
    };
  };

  c.eof = function (a) {
    return function (b) {
      return k.bind(t.bindParserT(b))(g.gets(t.monadStateParserT(b))(function (a) {
        return a.value0;
      }))(function (d) {
        return f.unless(t.applicativeParserT(b))((0, a["null"])(d))(t.fail(b)("Expected EOF"));
      });
    };
  };

  c.string = function (a) {
    return function (b) {
      return function (d) {
        return k.bind(t.bindParserT(b))(g.gets(t.monadStateParserT(b))(function (a) {
          return a.value0;
        }))(function (c) {
          var e = (0, a.indexOf)(h.wrap(n.newtypePattern)(d))(c);
          return e instanceof l.Just && 0 === e.value0 ? k.discard(k.discardUnit)(t.bindParserT(b))(g.modify_(t.monadStateParserT(b))(function (b) {
            return new t.ParseState((0, a.drop)(u.length(d))(c), w.updatePosString(b.value1)(d), !0);
          }))(function () {
            return f.pure(t.applicativeParserT(b))(d);
          }) : t.fail(b)("Expected " + m.show(m.showString)(d));
        });
      };
    };
  };

  c.noneOf = function (a) {
    return function (c) {
      return function (f) {
        return v.withErrorMessage(c)(z(a)(c)(d.flip(e.notElem(e.foldableArray)(b.eqChar))(f)))("none of " + m.show(m.showArray(m.showChar))(f));
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
      u = function u(a) {
    var b = l.parseErrorMessage(a);
    a = l.parseErrorPosition(a);
    a = "(line " + (d.show(d.showInt)(a.line) + (", col " + (d.show(d.showInt)(a.column) + ")")));
    return b + (" " + a);
  };

  c.oneOfAs = function (a) {
    return function (d) {
      return function (c) {
        return function (e) {
          return function (f) {
            return h.choice(d)(c)(b.map(a)(function (a) {
              return b.voidLeft(l.functorParserT(c.Bind1().Apply0().Functor0()))(e(a.value0))(a.value1);
            })(f));
          };
        };
      };
    };
  };

  c.runP = function (a) {
    return function (b) {
      return function (d) {
        return k.lmap(g.bifunctorEither)(u)(l.runParser(d)(f.applyFirst(l.applyParserT(e.monadIdentity))(b)(m.eof(a)(e.monadIdentity))));
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
      u = new k.Bounded(function () {
    return d;
  }, 0, 59),
      r = new k.Bounded(function () {
    return l;
  }, 0, 999),
      n = new k.Bounded(function () {
    return h;
  }, 0, 23),
      t = new g.BoundedEnum(function () {
    return m;
  }, function () {
    return v;
  }, 60, function (a) {
    return a;
  }, function (a) {
    if (0 <= a && 59 >= a) return new b.Just(a);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 90, column 1 - line 95, column 26): " + [a.constructor.name]);
  }),
      v = new g.Enum(function () {
    return e;
  }, function () {
    var a = g.toEnum(t),
        b = g.fromEnum(t);
    return function (d) {
      return a(b(d) - 1 | 0);
    };
  }(), function () {
    var a = g.toEnum(t),
        b = g.fromEnum(t);
    return function (d) {
      return a(b(d) + 1 | 0);
    };
  }()),
      w = new g.BoundedEnum(function () {
    return u;
  }, function () {
    return D;
  }, 60, function (a) {
    return a;
  }, function (a) {
    if (0 <= a && 59 >= a) return new b.Just(a);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 61, column 1 - line 66, column 26): " + [a.constructor.name]);
  }),
      D = new g.Enum(function () {
    return d;
  }, function () {
    var a = g.toEnum(w),
        b = g.fromEnum(w);
    return function (d) {
      return a(b(d) - 1 | 0);
    };
  }(), function () {
    var a = g.toEnum(w),
        b = g.fromEnum(w);
    return function (d) {
      return a(b(d) + 1 | 0);
    };
  }()),
      z = new g.BoundedEnum(function () {
    return r;
  }, function () {
    return q;
  }, 1E3, function (a) {
    return a;
  }, function (a) {
    if (0 <= a && 999 >= a) return new b.Just(a);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 120, column 1 - line 125, column 31): " + [a.constructor.name]);
  }),
      q = new g.Enum(function () {
    return l;
  }, function () {
    var a = g.toEnum(z),
        b = g.fromEnum(z);
    return function (d) {
      return a(b(d) - 1 | 0);
    };
  }(), function () {
    var a = g.toEnum(z),
        b = g.fromEnum(z);
    return function (d) {
      return a(b(d) + 1 | 0);
    };
  }()),
      x = new g.BoundedEnum(function () {
    return n;
  }, function () {
    return H;
  }, 24, function (a) {
    return a;
  }, function (a) {
    if (0 <= a && 23 >= a) return new b.Just(a);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 32, column 1 - line 37, column 24): " + [a.constructor.name]);
  }),
      H = new g.Enum(function () {
    return h;
  }, function () {
    var a = g.toEnum(x),
        b = g.fromEnum(x);
    return function (d) {
      return a(b(d) - 1 | 0);
    };
  }(), function () {
    var a = g.toEnum(x),
        b = g.fromEnum(x);
    return function (d) {
      return a(b(d) + 1 | 0);
    };
  }());
  c.boundedHour = n;
  c.boundedEnumHour = x;
  c.boundedMinute = u;
  c.boundedEnumMinute = w;
  c.boundedSecond = m;
  c.boundedEnumSecond = t;
  c.boundedMillisecond = r;
  c.boundedEnumMillisecond = z;
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
      u = a["Data.Foldable"],
      r = a["Data.Formatter.Parser.Utils"],
      n = a["Data.Functor"],
      t = a["Data.Identity"],
      v = a["Data.Int"],
      w = a["Data.List"],
      D = a["Data.List.Types"],
      z = a["Data.Monoid"],
      q = a["Data.Newtype"],
      x = a["Data.Ord"],
      H = a["Data.Ring"],
      y = a["Data.Show"],
      G = a["Data.String.CodePoints"],
      E = a["Data.String.CodeUnits"],
      F = a["Data.Time"],
      p = a["Data.Time.Component"],
      J = a["Data.Time.Duration"],
      C = a["Data.Tuple"],
      L = a["Text.Parsing.Parser"],
      B = a["Text.Parsing.Parser.Combinators"],
      I = a["Text.Parsing.Parser.String"],
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
      M = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      P = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      K = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      V = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      T = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      N = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      U = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      W = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      R = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Z = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      A = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      O = function () {
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
      ca = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ma = function () {
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
      X = function () {
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

  a = n.mapFlipped(L.functorParserT(t.functorIdentity))(k.some(L.alternativeParserT(t.monadIdentity))(L.lazyParserT)(I.noneOf(I.stringLikeString)(t.monadIdentity)(E.toCharArray("YMDEHhamsS"))))(E.fromCharArray);

  var aa = function aa(a) {
    if (0 > a) return "-" + aa(-a | 0);
    if (10 > a) return "0" + y.show(y.showInt)(a);
    if (g.otherwise) return y.show(y.showInt)(a);
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 192, column 1 - line 192, column 30): " + [a.constructor.name]);
  },
      ka = function ka(a) {
    if (0 > a) return "-" + ka(-a | 0);
    if (10 > a) return "000" + y.show(y.showInt)(a);
    if (100 > a) return "00" + y.show(y.showInt)(a);
    if (1E3 > a) return "0" + y.show(y.showInt)(a);
    if (g.otherwise) return y.show(y.showInt)(a);
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 205, column 1 - line 205, column 33): " + [a.constructor.name]);
  },
      na = function na(a) {
    if (0 > a) return "-" + na(-a | 0);
    if (10 > a) return "00" + y.show(y.showInt)(a);
    if (100 > a) return "0" + y.show(y.showInt)(a);
    if (g.otherwise) return y.show(y.showInt)(a);
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 198, column 1 - line 198, column 30): " + [a.constructor.name]);
  };

  f = f.alt(L.altParserT(t.monadIdentity))(r.oneOfAs(n.functorArray)(u.foldableArray)(t.monadIdentity)(function () {
    var a = B["try"](t.monadIdentity),
        b = I.string(I.stringLikeString)(t.monadIdentity);
    return function (d) {
      return a(b(d));
    };
  }())([new C.Tuple("YYYY", S.value), new C.Tuple("YY", Q.value), new C.Tuple("Y", M.value), new C.Tuple("MMMM", P.value), new C.Tuple("MMM", K.value), new C.Tuple("MM", V.value), new C.Tuple("DD", T.value), new C.Tuple("D", N.value), new C.Tuple("E", W.value), new C.Tuple("X", U.value), new C.Tuple("dddd", R.value), new C.Tuple("ddd", Z.value), new C.Tuple("HH", A.value), new C.Tuple("hh", O.value), new C.Tuple("a", da.value), new C.Tuple("mm", Y.value), new C.Tuple("m", fa.value), new C.Tuple("ss", ca.value), new C.Tuple("s", la.value), new C.Tuple("SSS", ma.value), new C.Tuple("SS", ha.value), new C.Tuple("S", ea.value)]))(n.map(L.functorParserT(t.functorIdentity))(X.create)(a));

  var qa = function qa(a) {
    a = y.show(y.showInt)(x.abs(x.ordInt)(H.ringInt)(a));
    var b = G.length(a);
    return 1 === b ? "0" + a : 2 === b ? a : G.drop(b - 2 | 0)(a);
  };

  w = w.some(L.alternativeParserT(t.monadIdentity))(L.lazyParserT)(f);

  var pa = r.runP(I.stringLikeString)(w),
      ra = function ra(a) {
    return 0 === a ? 12 : a;
  },
      ja = function ja(a) {
    return function (c) {
      if (c instanceof S) return ka(h.fromEnum(e.boundedEnumYear)(b.year(a.value0)));
      if (c instanceof Q) return qa(h.fromEnum(e.boundedEnumYear)(b.year(a.value0)));
      if (c instanceof M) return y.show(y.showInt)(h.fromEnum(e.boundedEnumYear)(b.year(a.value0)));
      if (c instanceof P) return y.show(e.showMonth)(b.month(a.value0));
      if (c instanceof K) return ba(b.month(a.value0));
      if (c instanceof V) return aa(h.fromEnum(e.boundedEnumMonth)(b.month(a.value0)));
      if (c instanceof T) return aa(h.fromEnum(e.boundedEnumDay)(b.day(a.value0)));
      if (c instanceof N) return y.show(y.showInt)(h.fromEnum(e.boundedEnumDay)(b.day(a.value0)));
      if (c instanceof U) return y.show(y.showInt)(v.floor(q.unwrap(J.newtypeMilliseconds)(d.unInstant(d.fromDateTime(a))) / 1E3));
      if (c instanceof W) return y.show(y.showInt)(h.fromEnum(e.boundedEnumWeekday)(b.weekday(a.value0)));
      if (c instanceof R) return y.show(e.showWeekday)(b.weekday(a.value0));
      if (c instanceof Z) return G.take(3)(y.show(e.showWeekday)(b.weekday(a.value0)));
      if (c instanceof A) return aa(h.fromEnum(p.boundedEnumHour)(F.hour(a.value1)));
      if (c instanceof O) return aa(ra(m.mod(m.euclideanRingInt)(h.fromEnum(p.boundedEnumHour)(F.hour(a.value1)))(12)));
      if (c instanceof da) return 12 <= h.fromEnum(p.boundedEnumHour)(F.hour(a.value1)) ? "PM" : "AM";
      if (c instanceof fa) return y.show(y.showInt)(h.fromEnum(p.boundedEnumMinute)(F.minute(a.value1)));
      if (c instanceof Y) return aa(h.fromEnum(p.boundedEnumMinute)(F.minute(a.value1)));
      if (c instanceof la) return y.show(y.showInt)(h.fromEnum(p.boundedEnumSecond)(F.second(a.value1)));
      if (c instanceof ca) return aa(h.fromEnum(p.boundedEnumSecond)(F.second(a.value1)));
      if (c instanceof ma) return na(h.fromEnum(p.boundedEnumMillisecond)(F.millisecond(a.value1)));
      if (c instanceof ea) return y.show(y.showInt)(function (a) {
        return m.div(m.euclideanRingInt)(a)(100);
      }(h.fromEnum(p.boundedEnumMillisecond)(F.millisecond(a.value1))));
      if (c instanceof ha) return aa(function (a) {
        return m.div(m.euclideanRingInt)(a)(10);
      }(h.fromEnum(p.boundedEnumMillisecond)(F.millisecond(a.value1))));
      if (c instanceof X) return c.value0;
      throw Error("Failed pattern match at Data.Formatter.DateTime (line 167, column 38 - line 190, column 20): " + [c.constructor.name]);
    };
  },
      sa = function sa(a) {
    return function (b) {
      return u.foldMap(D.foldableList)(z.monoidString)(ja(b))(a);
    };
  };

  c.formatDateTime = function (a) {
    return function (b) {
      return n.mapFlipped(l.functorEither)(pa(a))(function (a) {
        return sa(a)(b);
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
    return function (d) {
      return f.to(a)(b(d));
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
      m = function m(a, b, d) {
    this["genericCardinality'"] = a;
    this["genericFromEnum'"] = b;
    this["genericToEnum'"] = d;
  },
      u = function u(a) {
    return a["genericToEnum'"];
  },
      r = function r(a) {
    return a["genericSucc'"];
  },
      n = function n(a) {
    return a["genericPred'"];
  },
      t = function t(a) {
    return a["genericFromEnum'"];
  };

  a = new h(function (a) {
    return d.Nothing.value;
  }, function (a) {
    return d.Nothing.value;
  });

  var v = function v(a) {
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
          f = r(c),
          h = b.from(a);
      return function (a) {
        return e(f(h(a)));
      };
    };
  };

  c.genericCardinality = function (a) {
    return function (a) {
      return l.unwrap(k.newtypeCardinality)(v(a));
    };
  };

  c.genericToEnum = function (a) {
    return function (c) {
      var e = g.map(d.functorMaybe)(b.to(a)),
          f = u(c);
      return function (a) {
        return e(f(a));
      };
    };
  };

  c.genericFromEnum = function (a) {
    return function (d) {
      var c = t(d),
          e = b.from(a);
      return function (a) {
        return c(e(a));
      };
    };
  };

  c.genericEnumNoArguments = a;

  c.genericEnumConstructor = function (a) {
    return new h(function (c) {
      return g.map(d.functorMaybe)(b.Constructor)(n(a)(c));
    }, function (c) {
      return g.map(d.functorMaybe)(b.Constructor)(r(a)(c));
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
              c = r(a)(c.value0);
              if (c instanceof d.Nothing) return new d.Just(new b.Inr(e["genericBottom'"](k)));
              if (c instanceof d.Just) return new d.Just(new b.Inl(c.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 34, column 14 - line 36, column 31): " + [c.constructor.name]);
            }

            if (c instanceof b.Inr) return g.map(d.functorMaybe)(b.Inr.create)(r(f)(c.value0));
            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 33, column 18 - line 37, column 36): " + [c.constructor.name]);
          });
        };
      };
    };
  };

  c.genericBoundedEnumNoArguments = w;

  c.genericBoundedEnumConstructor = function (a) {
    return new m(l.unwrap(k.newtypeCardinality)(v(a)), function (b) {
      return t(a)(b);
    }, function (c) {
      return g.map(d.functorMaybe)(b.Constructor)(u(a)(c));
    });
  };

  c.genericBoundedEnumSum = function (a) {
    return function (c) {
      return new m(k.Cardinality(l.unwrap(k.newtypeCardinality)(v(a)) + l.unwrap(k.newtypeCardinality)(v(c)) | 0), function (d) {
        if (d instanceof b.Inl) return t(a)(d.value0);
        if (d instanceof b.Inr) return t(c)(d.value0) + l.unwrap(k.newtypeCardinality)(v(a)) | 0;
        throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 87, column 22 - line 89, column 80): " + [d.constructor.name]);
      }, function (e) {
        var h = v(a);
        if (0 <= e && e < h) e = g.map(d.functorMaybe)(b.Inl.create)(u(a)(e));else if (f.otherwise) e = g.map(d.functorMaybe)(b.Inr.create)(u(c)(e - h | 0));else throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 83, column 5 - line 83, column 43): " + [h.constructor.name]);
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
      u = function u(a) {
    return a;
  },
      r = new a["Data.Profunctor"].Profunctor(function (a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return b(a(c));
        };
      };
    };
  }),
      n = new h.Strong(function () {
    return r;
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
  }, u);

  var t = function t(a) {
    return new l.Choice(function () {
      return r;
    }, function (b) {
      return k.either(b)(e.mempty(e.monoidFn(a)));
    }, function (b) {
      return k.either(e.mempty(e.monoidFn(a)))(b);
    });
  };

  c.Forget = u;
  c.newtypeForget = a;
  c.strongForget = n;

  c.wanderForget = function (a) {
    return new b.Wander(function () {
      return t(a);
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
  c.semigroupFirst = e;
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
  a.now = function () {
    return Date.now();
  };
})(PS["Effect.Now"] = PS["Effect.Now"] || {});

(function (a) {
  a["Effect.Now"] = a["Effect.Now"] || {};
  var c = a["Effect.Now"],
      f = a["Effect.Now"],
      k = a["Data.DateTime.Instant"];
  a = a["Data.Functor"].map(a.Effect.functorEffect)(k.toDateTime)(f.now);
  c.nowDateTime = a;
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
      u = a["Data.Tuple"],
      r = a["Formless.Data.FormFieldResult"],
      n = a["Formless.Types.Form"],
      t = a["Formless.Validation"],
      v = a.Record,
      w = a["Record.Builder"],
      D = a["Record.Unsafe"],
      z = a["Type.Data.RowList"],
      q = function q(a) {
    this.validateAllBuilder = a;
  },
      x = function x(a) {
    this.setFormFieldsTouchedBuilder = a;
  },
      H = function H(a) {
    this.replaceFormFieldInputsBuilder = a;
  },
      y = function y(a) {
    this.modifyAllBuilder = a;
  },
      G = function G(a) {
    this.inputFieldsToFormFieldsBuilder = a;
  },
      E = function E(a) {
    this.formFieldsToInputFieldsBuilder = a;
  },
      F = function F(a) {
    this.formFieldsToMaybeOutputBuilder = a;
  },
      p = function p(a) {
    this.countErrorsImpl = a;
  },
      J = function J(a) {
    this.allTouchedImpl = a;
  };

  a = new x(function (a) {
    return function (a) {
      return b.identity(w.categoryBuilder);
    };
  });
  var C = new H(function (a) {
    return function (a) {
      return function (a) {
        return b.identity(w.categoryBuilder);
      };
    };
  }),
      L = new p(function (a) {
    return function (a) {
      return 0;
    };
  }),
      B = new J(function (a) {
    return function (a) {
      return !0;
    };
  }),
      I = new y(function (a) {
    return function (a) {
      return function (a) {
        return b.identity(w.categoryBuilder);
      };
    };
  }),
      S = new E(function (a) {
    return function (a) {
      return b.identity(w.categoryBuilder);
    };
  }),
      Q = new G(function (a) {
    return function (a) {
      return b.identity(w.categoryBuilder);
    };
  }),
      M = d.flap(d.functorFn)(w.build)({}),
      P = new F(function (a) {
    return function (a) {
      return new l.Just(b.identity(w.categoryBuilder));
    };
  });
  c.fromScratch = M;

  c.allTouched = function (a) {
    return function (a) {
      return function (b) {
        var c = (0, a.allTouchedImpl)(z.RLProxy.value),
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
        var c = (0, a.countErrorsImpl)(z.RLProxy.value),
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
          c = (0, a.setFormFieldsTouchedBuilder)(z.RLProxy.value)(h.unwrap(b)(c));
          return h.wrap(b)(M(c));
        };
      };
    };
  };

  c.formFieldsToInputFields = function (a) {
    return function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            d = (0, a.formFieldsToInputFieldsBuilder)(z.RLProxy.value)(h.unwrap(c)(d));
            return h.wrap(b)(M(d));
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
            d = (0, a.inputFieldsToFormFieldsBuilder)(z.RLProxy.value)(h.unwrap(b)(d));
            return h.wrap(c)(M(d));
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
            e = (0, c.formFieldsToMaybeOutputBuilder)(z.RLProxy.value)(h.unwrap(a)(e));
            return d.map(l.functorMaybe)(h.wrap(b))(d.map(l.functorMaybe)(M)(e));
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
              e = (0, a.replaceFormFieldInputsBuilder)(h.unwrap(b)(d))(z.RLProxy.value)(h.unwrap(c)(e));
              return h.wrap(c)(M(e));
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
              e = (0, a.modifyAllBuilder)(h.unwrap(b)(d))(z.RLProxy.value)(h.unwrap(c)(e));
              return h.wrap(c)(M(e));
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
                g = (0, b.validateAllBuilder)(h.unwrap(c)(f))(z.RLProxy.value)(h.unwrap(e)(g));
                return d.map(a.Bind1().Apply0().Functor0())(h.wrap(e))(d.map(a.Bind1().Apply0().Functor0())(M)(g));
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
              return new u.Tuple(b.type, b.value);
            }(),
                g = function () {
              var a = D.unsafeGet(u.fst(f))(h.unwrap(b)(e));
              return n.FormField({
                input: h.unwrap(n.newtypeInputFunction)(u.snd(f))(a.input),
                touched: a.touched,
                result: c(a.result)
              });
            }();

            return h.wrap(b)(D.unsafeSet(u.fst(f))(g)(h.unwrap(b)(e)));
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
                  var b = D.unsafeGet(m)(h.unwrap(c)(l));
                  return g.bind(a.Bind1())(t.runValidation(a)(D.unsafeGet(m)(h.unwrap(d)(k)))(l)(b.input))(function (d) {
                    d = D.unsafeSet(m)(n.FormField({
                      input: b.input,
                      touched: b.touched,
                      result: r.fromEither(d)
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
          return new x(function (c) {
            return function (c) {
              var d = (0, b.setFormFieldsTouchedBuilder)(z.RLProxy.value)(c);
              c = h.over(n.newtypeFormField)(n.newtypeFormField)(n.FormField)(function (a) {
                return {
                  touched: !0,
                  input: a.input,
                  result: a.result
                };
              })(v.get(a)()(m.SProxy.value)(c));
              c = w.insert()()(a)(m.SProxy.value)(c);
              return e.compose(w.semigroupoidBuilder)(c)(d);
            };
          });
        };
      };
    };
  };

  c.inputFieldsToInputNil = S;

  c.inputFieldsToInputCons = function (a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return new E(function (c) {
            return function (c) {
              var d = (0, b.formFieldsToInputFieldsBuilder)(z.RLProxy.value)(c);
              c = v.get(a)()(m.SProxy.value)(c).input;
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
          return new G(function (c) {
            return function (c) {
              var d = (0, b.inputFieldsToFormFieldsBuilder)(z.RLProxy.value)(c);
              c = {
                input: v.get(a)()(m.SProxy.value)(c),
                touched: !1,
                result: r.NotValidated.value
              };
              c = w.insert()()(a)(m.SProxy.value)(c);
              return e.compose(w.semigroupoidBuilder)(c)(d);
            };
          });
        };
      };
    };
  };

  c.formFieldsToMaybeOutputNil = P;

  c.formFieldsToMaybeOutputCons = function (a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return new F(function (c) {
            return function (c) {
              var f = (0, b.formFieldsToMaybeOutputBuilder)(z.RLProxy.value)(c);
              c = d.map(l.functorMaybe)(n.OutputField)(r.toMaybe(h.unwrap(n.newtypeFormField)(v.get(a)()(m.SProxy.value)(c)).result));
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

  c.nilCountErrors = L;

  c.consCountErrors = function (a) {
    return function (b) {
      return function (b) {
        return new p(function (c) {
          return function (c) {
            var d = h.unwrap(n.newtypeFormField)(v.get(a)()(m.SProxy.value)(c)).result instanceof r.Error ? 1 : 0;
            return d + (0, b.countErrorsImpl)(z.RLProxy.value)(c) | 0;
          };
        });
      };
    };
  };

  c.nilAllTouched = B;

  c.consAllTouched = function (a) {
    return function (b) {
      return function (b) {
        return new J(function (c) {
          return function (c) {
            return h.unwrap(n.newtypeFormField)(v.get(a)()(m.SProxy.value)(c)).touched ? (0, b.allTouchedImpl)(z.RLProxy.value)(c) : !1;
          };
        });
      };
    };
  };

  c.applyToValidationNil = function (a) {
    return new q(function (c) {
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
                return new q(function (p) {
                  return function (q) {
                    return function (q) {
                      var u = (0, l.validateAllBuilder)(p)(z.RLProxy.value)(q),
                          x = function () {
                        var d = h.unwrap(t.newtypeValidation)(v.get(a)()(m.SProxy.value)(p)),
                            e = h.unwrap(n.newtypeFormField)(v.get(a)()(m.SProxy.value)(q));
                        return g.bind(b.Bind1())(d(h.wrap(c)(q))(e.input))(function (a) {
                          var c = f.pure(b.Applicative0()),
                              d = h.wrap(n.newtypeFormField),
                              g = {},
                              k;

                          for (k in e) {
                            ({}).hasOwnProperty.call(e, k) && (g[k] = e[k]);
                          }

                          g.result = r.fromEither(a);
                          return c(d(g));
                        });
                      }();

                      return k.apply(b.Bind1().Apply0())(d.map(b.Bind1().Apply0().Functor0())(function (b) {
                        return function (c) {
                          return e.compose(w.semigroupoidBuilder)(w.insert()()(a)(m.SProxy.value)(b))(c);
                        };
                      })(x))(u);
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

  c.modifyAllNil = I;

  c.modifyAllCons = function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (d) {
            return function (d) {
              return function (d) {
                return new y(function (f) {
                  return function (g) {
                    return function (g) {
                      var k = (0, d.modifyAllBuilder)(f)(z.RLProxy.value)(g),
                          l = h.unwrap(b)(v.get(a)()(m.SProxy.value)(f));
                      g = v.get(a)()(m.SProxy.value)(g);
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
                return new H(function (f) {
                  return function (g) {
                    return function (g) {
                      var k = (0, d.replaceFormFieldInputsBuilder)(f)(z.RLProxy.value)(g);
                      h.unwrap(c)(v.get(a)()(m.SProxy.value)(g));
                      g = v.get(a)()(m.SProxy.value)(f);
                      g = w.insert()()(a)(m.SProxy.value)(n.FormField({
                        input: h.unwrap(b)(g),
                        touched: !1,
                        result: r.NotValidated.value
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
      u = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      r = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      n = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      t = function () {
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
      D = function D(a) {
    return a;
  };

  k = new k.Newtype(function (a) {
    return a;
  }, D);
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
  c.ModifyAll = u;
  c.ResetAll = r;
  c.ValidateAll = n;
  c.Submit = t;
  c.LoadForm = v;
  c.AndThen = w;
  c.InternalState = D;
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
          return function (r) {
            return function (u) {
              return function (t) {
                return function (v) {
                  return function (q) {
                    return function (w) {
                      return function (x) {
                        return function (y) {
                          return function (z) {
                            return function (D) {
                              return function (F) {
                                return function (p) {
                                  return function (J) {
                                    return function (C) {
                                      return function (E) {
                                        return function (H) {
                                          return function (I) {
                                            return function (G) {
                                              return function (B) {
                                                var L = function L(e) {
                                                  var f = l.countErrors()(u)(F)(e.form),
                                                      k = !b.eq(b.eqRec()(a))(d.unwrap(z)(l.formFieldsToInputFields()(r)(z)(F)(e.form)))(d.unwrap(z)(d.unwrap(h.newtypeInternalState)(e.internal).initialInputs));
                                                  return c.pure(I.Applicative0())(g.Left.create(function () {
                                                    return d.unwrap(h.newtypeInternalState)(e.internal).allTouched ? {
                                                      validity: 0 !== e.errors ? h.Invalid.value : h.Valid.value,
                                                      errors: f,
                                                      dirty: k,
                                                      form: e.form,
                                                      internal: e.internal,
                                                      submitAttempts: e.submitAttempts,
                                                      submitting: e.submitting
                                                    } : l.allTouched()(t)(F)(e.form) ? {
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
                                                    P = function P(k) {
                                                  var B = {
                                                    submitAttempts: k.submitAttempts + 1 | 0,
                                                    submitting: !0,
                                                    internal: k.internal,
                                                    form: k.form,
                                                    dirty: k.dirty,
                                                    errors: k.errors,
                                                    validity: k.validity
                                                  },
                                                      G = d.unwrap(h.newtypeInternalState)(B.internal);

                                                  k = function () {
                                                    return G.allTouched ? B : {
                                                      form: l.setFormFieldsTouched()(v)(F)(B.form),
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

                                                  return f.bind(I.Bind1())(m()()(a)(n)(r)(u)(t)(v)(q)(w)(x)(y)(z)(D)(F)(p)(J)(C)(E)(H)(I)(h.ValidateAll.value)(k))(function (a) {
                                                    if (a instanceof g.Right) return c.pure(I.Applicative0())(new g.Right(a.value0));

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
                                                      return c.pure(I.Applicative0())(function () {
                                                        if (b.eq(h.eqValidStatus)(d.validity)(h.Valid.value)) {
                                                          var c = l.formFieldsToMaybeOutputFields()(F)(p)(y)(a.value0.form);
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

                                                if (G instanceof h.Modify) return L({
                                                  form: l.unsafeModifyInputVariant(E)(F)(k.identity(k.categoryFn))(G.value0)(B.form),
                                                  internal: B.internal,
                                                  errors: B.errors,
                                                  dirty: B.dirty,
                                                  validity: B.validity,
                                                  submitAttempts: B.submitAttempts,
                                                  submitting: B.submitting
                                                });
                                                if (G instanceof h.Validate) return f.bind(I.Bind1())(l.unsafeRunValidationVariant(I)(H)(F)(J)(G.value0)(d.unwrap(h.newtypeInternalState)(B.internal).validators)(B.form))(function (a) {
                                                  return L({
                                                    form: a,
                                                    internal: B.internal,
                                                    errors: B.errors,
                                                    dirty: B.dirty,
                                                    validity: B.validity,
                                                    submitAttempts: B.submitAttempts,
                                                    submitting: B.submitting
                                                  });
                                                });

                                                if (G instanceof h.ModifyValidate) {
                                                  P = function P(a) {
                                                    var b = d.unwrap(h.newtypeInternalState)(a.internal).validators;
                                                    return f.bind(I.Bind1())(l.unsafeRunValidationVariant(I)(H)(F)(J)(G.value1)(b)(a.form))(function (b) {
                                                      return c.pure(I.Applicative0())({
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

                                                  var K = function K(a) {
                                                    return function (b) {
                                                      return {
                                                        validity: b.validity,
                                                        dirty: b.dirty,
                                                        submitting: b.submitting,
                                                        errors: b.errors,
                                                        submitAttempts: b.submitAttempts,
                                                        form: l.unsafeModifyInputVariant(E)(F)(a)(G.value1)(b.form),
                                                        internal: b.internal
                                                      };
                                                    };
                                                  };

                                                  if (G.value0 instanceof e.Nothing || G.value0 instanceof e.Just) return K = K(k.identity(k.categoryFn))(B), f.bind(I.Bind1())(P(K))(function (a) {
                                                    return L(a);
                                                  });
                                                  throw Error("Failed pattern match at Formless.Component (line 67, column 5 - line 81, column 26): " + [G.value0.constructor.name]);
                                                }

                                                if (G instanceof h.Reset) return L({
                                                  form: l.unsafeModifyInputVariant(E)(F)(k.identity(k.categoryFn))(G.value0)(B.form),
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
                                                if (G instanceof h.SetAll) return L({
                                                  form: l.replaceFormFieldInputs()(q)(z)(F)(G.value0)(B.form),
                                                  internal: B.internal,
                                                  errors: B.errors,
                                                  dirty: B.dirty,
                                                  validity: B.validity,
                                                  submitAttempts: B.submitAttempts,
                                                  submitting: B.submitting
                                                });
                                                if (G instanceof h.ModifyAll) return L({
                                                  form: l.modifyAll()(w)(D)(F)(G.value0)(B.form),
                                                  internal: B.internal,
                                                  errors: B.errors,
                                                  dirty: B.dirty,
                                                  validity: B.validity,
                                                  submitAttempts: B.submitAttempts,
                                                  submitting: B.submitting
                                                });
                                                if (G instanceof h.ValidateAll) return f.bind(I.Bind1())(l.validateAll()(I)(x)(J)(F)(d.unwrap(h.newtypeInternalState)(B.internal).validators)(B.form))(function (a) {
                                                  return L({
                                                    form: a,
                                                    internal: B.internal,
                                                    errors: B.errors,
                                                    dirty: B.dirty,
                                                    validity: B.validity,
                                                    submitAttempts: B.submitAttempts,
                                                    submitting: B.submitting
                                                  });
                                                });
                                                if (G instanceof h.Submit) return P(B);
                                                if (G instanceof h.ResetAll) return c.pure(I.Applicative0())(g.Left.create({
                                                  validity: h.Incomplete.value,
                                                  dirty: !1,
                                                  errors: 0,
                                                  submitAttempts: 0,
                                                  submitting: !1,
                                                  form: l.replaceFormFieldInputs()(q)(z)(F)(d.unwrap(h.newtypeInternalState)(B.internal).initialInputs)(B.form),
                                                  internal: d.over(h.newtypeInternalState)(h.newtypeInternalState)(h.InternalState)(function (a) {
                                                    return {
                                                      allTouched: !1,
                                                      initialInputs: a.initialInputs,
                                                      validators: a.validators
                                                    };
                                                  })(B.internal)
                                                }));
                                                if (G instanceof h.LoadForm) return c.pure(I.Applicative0())(g.Left.create({
                                                  validity: h.Incomplete.value,
                                                  dirty: !1,
                                                  errors: 0,
                                                  submitAttempts: 0,
                                                  submitting: !1,
                                                  form: l.replaceFormFieldInputs()(q)(z)(F)(G.value0)(B.form),
                                                  internal: d.over(h.newtypeInternalState)(h.newtypeInternalState)(h.InternalState)(function (a) {
                                                    return {
                                                      allTouched: !1,
                                                      initialInputs: G.value0,
                                                      validators: a.validators
                                                    };
                                                  })(B.internal)
                                                }));
                                                if (G instanceof h.AndThen) return f.bind(I.Bind1())(m()()(a)(n)(r)(u)(t)(v)(q)(w)(x)(y)(z)(D)(F)(p)(J)(C)(E)(H)(I)(G.value0)(B))(function (b) {
                                                  if (b instanceof g.Left) return m()()(a)(n)(r)(u)(t)(v)(q)(w)(x)(y)(z)(D)(F)(p)(J)(C)(E)(H)(I)(G.value1)(b.value0);
                                                  if (b instanceof g.Right) return c.pure(I.Applicative0())(new g.Right(b.value0));
                                                  throw Error("Failed pattern match at Formless.Component (line 136, column 5 - line 138, column 38): " + [b.constructor.name]);
                                                });
                                                throw Error("Failed pattern match at Formless.Component (line 44, column 17 - line 138, column 38): " + [G.constructor.name]);
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
      r = function r(a) {
    return function (b) {
      return function (c) {
        return function (c) {
          return function (d) {
            var f = u(a)(b)()(c)(d),
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
            var f = u(a)(b)()(c)(d),
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
      t = function t(a) {
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
          return k.view(r(a)(b)()(c)(g.strongForget));
        };
      };
    };
  };

  c.getError = function (a) {
    return function (b) {
      return function (c) {
        return function (c) {
          return f.preview(t(a)(b)()(c)(g.wanderForget(d.monoidFirst)));
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
  a.tooltip = "tooltip";
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
      e = g.mjUiClass(k.tooltip),
      d = g.mjUiClass(f.title),
      l = g.mjUiClass(f.sustainability),
      h = g.mjUiClass(f.superOrg),
      m = g.mjUiClass(f.resourceTypeGen),
      u = g.mjUiClass(f.resourceTypeDescr),
      r = g.mjUiClass(f.resourceType),
      n = g.mjUiClass(f.resourceMDSource),
      t = g.mjUiClass(f.resourceId),
      v = g.mjUiClass(f.relatedIdsHeader),
      w = g.mjUiClass(f.relatedIds),
      D = g.mjUiClass(f.relatedIdList),
      z = g.mjUiClass(f.relatedId),
      q = g.mjUiClass(f.relType),
      x = g.mjUiClass(f.recordId),
      H = g.mjUiClass(f.record),
      y = g.mjUiClass(k.recPreview),
      G = g.mjUiClass(f.pubyear),
      E = g.mjUiClass(f.productsHeader),
      F = g.mjUiClass(f.products),
      p = g.mjUiClass(f.productList),
      J = g.mjUiClass(f.product),
      C = g.mjUiClass(k.prodPreview),
      L = g.mjUiClass(k.previewButtons),
      B = g.mjUiClass(f.policyType),
      I = g.mjUiClass(f.policy),
      S = g.mjUiClass(k.page),
      Q = g.mjUiClass(f.missionStatement),
      M = g.mjUiClass(f.location),
      P = g.mjUiClass(k.locPreview),
      K = g.mjUiClass(f.institutionType),
      V = g.mjUiClass(f.institutionPolicy),
      T = g.mjUiClass(f.institutionPolicies),
      N = g.mjUiClass(f.institutionName),
      U = g.mjUiClass(f.institutionId),
      W = g.mjUiClass(f.institutionContact),
      R = g.mjUiClass(f.identifier),
      Z = g.mjUiClass(f.idType),
      A = g.mjUiClass(f.id),
      O = g.mjUiClass(f.fundingStatement),
      da = g.mjUiClass(f.formatList),
      fa = g.mjUiClass(f.format),
      Y = g.mjUiClass(k.downloadBtn),
      la = g.mjUiClass(k.date),
      ca = g.mjUiClass(f.creator),
      ma = g.mjUiClass(f.contactType),
      ea = g.mjUiClass(f.contactEmail);
  k = g.mjUiClass(k.clipBtn);
  var ha = g.mjUiClass(f.basicMetadata);
  f = g.mjUiClass(f.applies);
  c.page = S;
  c.date = la;
  c.recPreview = y;
  c.prodPreview = C;
  c.locPreview = P;
  c.tooltip = e;
  c.downloadBtn = Y;
  c.clipBtn = k;
  c.previewButtons = L;
  c.record = H;
  c.recordId = x;
  c.product = J;
  c.productList = p;
  c.productsHeader = E;
  c.products = F;
  c.location = M;
  c.sustainability = l;
  c.missionStatement = Q;
  c.fundingStatement = O;
  c.identifier = R;
  c.id = A;
  c.idType = Z;
  c.relatedId = z;
  c.relType = q;
  c.relatedIdList = D;
  c.relatedIdsHeader = v;
  c.relatedIds = w;
  c.basicMetadata = ha;
  c.creator = ca;
  c.pubyear = G;
  c.title = d;
  c.resourceId = t;
  c.resourceType = r;
  c.resourceTypeGen = m;
  c.resourceTypeDescr = u;
  c.resourceMDSource = n;
  c.institutionName = N;
  c.institutionId = U;
  c.institutionType = K;
  c.institutionContact = W;
  c.contactEmail = ea;
  c.contactType = ma;
  c.institutionPolicy = V;
  c.institutionPolicies = T;
  c.policy = I;
  c.policyType = B;
  c.applies = f;
  c.superOrg = h;
  c.versioning = a;
  c.format = fa;
  c.formatList = da;
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
      u = g.mjWebClass(f.resourceId),
      r = g.mjWebClass(f.relatedIdsHeader),
      n = g.mjWebClass(f.relatedIdList),
      t = g.mjWebClass(f.relatedId),
      v = g.mjWebClass(f.relType),
      w = g.mjWebClass(f.recordId),
      D = g.mjWebClass(f.record),
      z = g.mjWebClass(f.pubyear),
      q = g.mjWebClass(f.productsHeader),
      x = g.mjWebClass(f.productList),
      H = g.mjWebClass(k.productGroup),
      y = g.mjWebClass(k.productCitation),
      G = g.mjWebClass(f.product),
      E = g.mjWebClass(f.policyType),
      F = g.mjWebClass(f.policy),
      p = g.cList([f.url, f.missionStatement]),
      J = g.mjWebClass(f.institutionType),
      C = g.mjWebClass(f.institutionPolicy),
      L = g.mjWebClass(f.institutionPolicies),
      B = g.mjWebClass(f.institutionName),
      I = g.mjWebClass(f.institutionId),
      S = g.mjWebClass(f.institutionContact),
      Q = g.mjWebClass(f.identifier),
      M = g.cList([f.url, k.idUrl]),
      P = g.mjWebClass(f.idType),
      K = g.cList([f.url, f.fundingStatement]),
      V = g.mjWebClass(k.errorDisplayBox),
      T = g.mjWebClass(k.errorDisplay),
      N = g.mjWebClass(f.creator),
      U = g.mjWebClass(f.contactType),
      W = g.mjWebClass(f.contactEmail);
  f = g.mjWebClass(f.basicMetadata);
  k = g.mjWebClass(k.appliesInfo);
  c.productGroup = H;
  c.productCitation = y;
  c.appliesInfo = k;
  c.idUrl = M;
  c.errorDisplayBox = V;
  c.errorDisplay = T;
  c.record = D;
  c.recordId = w;
  c.product = G;
  c.productList = x;
  c.productsHeader = q;
  c.sustainability = e;
  c.missionStatement = p;
  c.fundingStatement = K;
  c.identifier = Q;
  c.idType = P;
  c.relatedId = t;
  c.relType = v;
  c.relatedIdList = n;
  c.relatedIdsHeader = r;
  c.basicMetadata = f;
  c.creator = N;
  c.pubyear = z;
  c.title = b;
  c.resourceId = u;
  c.resourceType = m;
  c.resourceTypeGen = l;
  c.resourceTypeDescr = h;
  c.institutionName = B;
  c.institutionId = I;
  c.institutionType = J;
  c.institutionContact = S;
  c.contactEmail = W;
  c.contactType = U;
  c.institutionPolicy = C;
  c.institutionPolicies = L;
  c.policy = F;
  c.policyType = E;
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
      u = a["Data.Ord"],
      r = a["Data.Show"],
      n = a["Data.String.NonEmpty.Internal"],
      t = a["Data.Symbol"],
      v = a["Text.URL.Validate"],
      w = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      D = function () {
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
      x = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      H = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      y = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      G = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      E = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      F = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      p = function () {
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
      L = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      B = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      I = function () {
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
      M = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      P = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      K = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      V = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      T = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      N = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      U = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      W = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      R = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Z = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      A = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      O = function () {
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
      ca = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ma = function () {
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
      X = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ba = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      aa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ka = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      na = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      qa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      pa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ra = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ja = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      sa = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      Da = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      oa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      za = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Aa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ia = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Ea = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ta = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ua = function () {
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
      Ha = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Ia = function () {
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
      Ja = function () {
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
      Ka = function () {
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
      db = new r.Show(function (a) {
    if (a instanceof oa) return "commercial";
    if (a instanceof za) return "non-profit";
    if (a instanceof Aa) return "governmental";
    throw Error("Failed pattern match at Metajelo.Types (line 237, column 1 - line 240, column 37): " + [a.constructor.name]);
  }),
      eb = new r.Show(function (a) {
    return "dataCustodian";
  }),
      va = new b.Generic(function (a) {
    if (a instanceof w) return new b.Inl(b.NoArguments.value);
    if (a instanceof D) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (a instanceof z) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (a instanceof q) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (a instanceof x) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (a instanceof H) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (a instanceof y) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (a instanceof G) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (a instanceof E) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (a instanceof F) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (a instanceof p) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (a instanceof J) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (a instanceof C) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (a instanceof L) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 140, column 1 - line 140, column 76): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof b.Inl) return w.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inl) return D.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inl) return z.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inl) return q.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inl) return x.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inl) return H.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return y.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return G.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return E.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return F.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return p.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return J.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return C.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return L.value;
    throw Error("Failed pattern match at Metajelo.Types (line 140, column 1 - line 140, column 76): " + [a.constructor.name]);
  }),
      fb = new r.Show(m.genericShow(va)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Audiovisual";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Dataset";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Event";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Image";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "InteractiveResource";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Model";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "PhysicalObject";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "ResourceCollection";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Service";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Software";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Sound";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Text";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Workflow";
  })))(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Other";
  }))))))))))))))))),
      wa = new b.Generic(function (a) {
    if (a instanceof B) return new b.Inl(b.NoArguments.value);
    if (a instanceof I) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (a instanceof S) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (a instanceof Q) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (a instanceof M) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (a instanceof P) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (a instanceof K) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (a instanceof V) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (a instanceof T) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (a instanceof N) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (a instanceof U) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (a instanceof W) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (a instanceof R) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (a instanceof Z) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (a instanceof A) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (a instanceof O) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (a instanceof da) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (a instanceof fa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))));
    if (a instanceof Y) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))));
    if (a instanceof la) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))));
    if (a instanceof ca) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))));
    if (a instanceof ma) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))));
    if (a instanceof ea) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))))));
    if (a instanceof ha) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))))));
    if (a instanceof X) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value))))))))))))))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 197, column 1 - line 197, column 62): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof b.Inl) return B.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inl) return I.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inl) return S.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inl) return Q.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inl) return M.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inl) return P.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return K.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return V.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return T.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return N.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return U.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return W.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return R.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Z.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return A.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return O.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return da.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return fa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Y.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return la.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ca.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ma.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ea.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ha.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return X.value;
    throw Error("Failed pattern match at Metajelo.Types (line 197, column 1 - line 197, column 62): " + [a.constructor.name]);
  }),
      gb = new r.Show(m.genericShow(wa)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsCitedBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Cites";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsSupplementTo";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsSupplementedBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsContinuedBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Continues";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsNewVersionOf";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsPreviousVersionOf";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsPartOf";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "HasPart";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsReferencedBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "References";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsDocumentedBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Documents";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsCompiledBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Compiles";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsVariantFormOf";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsOriginalFormOf";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsIdenticalTo";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "HasMetadata";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsMetadataFor";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Reviews";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsReviewedBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsDerivedFrom";
  })))(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsSourceOf";
  })))))))))))))))))))))))))))),
      xa = new b.Generic(function (a) {
    if (a instanceof ba) return new b.Inl(b.NoArguments.value);
    if (a instanceof aa) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (a instanceof ka) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (a instanceof na) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (a instanceof qa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (a instanceof pa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (a instanceof ra) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (a instanceof ja) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))));
    throw Error("Failed pattern match at Metajelo.Types (line 307, column 1 - line 307, column 58): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof b.Inl) return ba.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inl) return aa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inl) return ka.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inl) return na.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inl) return qa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inl) return pa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ra.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return ja.value;
    throw Error("Failed pattern match at Metajelo.Types (line 307, column 1 - line 307, column 58): " + [a.constructor.name]);
  }),
      hb = new r.Show(function (a) {
    return a instanceof ja ? "Terms of Use" : m.genericShow(xa)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Access";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Collection";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Data";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Metadata";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Preservation";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Submission";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Quality";
    })))(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "TermsOfUse";
    }))))))))))(a);
  }),
      ib = new b.Generic(function (a) {
    if (a instanceof sa) return new b.Inl(a.value0);
    if (a instanceof Da) return new b.Inr(a.value0);
    throw Error("Failed pattern match at Metajelo.Types (line 340, column 1 - line 340, column 50): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof b.Inl) return new sa(a.value0);
    if (a instanceof b.Inr) return new Da(a.value0);
    throw Error("Failed pattern match at Metajelo.Types (line 340, column 1 - line 340, column 50): " + [a.constructor.name]);
  }),
      jb = new r.Show(m.genericShow(ib)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsArgument(n.showNonEmptyString))(new t.IsSymbol(function () {
    return "FreeTextPolicy";
  })))(m.genericShowConstructor(m.genericShowArgsArgument(v.showURL))(new t.IsSymbol(function () {
    return "RefPolicy";
  }))))),
      Ba = new b.Generic(function (a) {
    if (a instanceof oa) return new b.Inl(b.NoArguments.value);
    if (a instanceof za) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (a instanceof Aa) return new b.Inr(new b.Inr(b.NoArguments.value));
    throw Error("Failed pattern match at Metajelo.Types (line 236, column 1 - line 236, column 68): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof b.Inl) return oa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inl) return za.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr) return Aa.value;
    throw Error("Failed pattern match at Metajelo.Types (line 236, column 1 - line 236, column 68): " + [a.constructor.name]);
  }),
      Ca = new b.Generic(function (a) {
    return b.NoArguments.value;
  }, function (a) {
    return ia.value;
  }),
      ya = new b.Generic(function (a) {
    if (a instanceof Ea) return new b.Inl(b.NoArguments.value);
    if (a instanceof ta) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (a instanceof ua) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (a instanceof Fa) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (a instanceof Ga) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (a instanceof Ha) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (a instanceof Ia) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (a instanceof La) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (a instanceof Ma) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (a instanceof Ja) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (a instanceof Na) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (a instanceof Oa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (a instanceof Pa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (a instanceof Ka) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (a instanceof Qa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (a instanceof Ra) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (a instanceof Sa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (a instanceof Ta) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 74, column 1 - line 74, column 66): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof b.Inl) return Ea.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inl) return ta.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inl) return ua.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inl) return Fa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inl) return Ga.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inl) return Ha.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ia.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return La.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ma.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ja.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Na.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Oa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Pa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ka.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Qa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ra.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Sa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return Ta.value;
    throw Error("Failed pattern match at Metajelo.Types (line 74, column 1 - line 74, column 66): " + [a.constructor.name]);
  }),
      kb = new r.Show(function (a) {
    return a instanceof ta ? "arXiv" : a instanceof ua ? "bibcode" : m.genericShow(ya)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "ARK";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "ArXiv";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Bibcode";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "DOI";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "EAN13";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "EISSN";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Handle";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "IGSN";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "ISBN";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "ISSN";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "ISTC";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "LISSN";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "LSID";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "PMID";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "PURL";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "UPC";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "URL";
    })))(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "URN";
    }))))))))))))))))))))(a);
  }),
      lb = new g.Eq(l.genericEq(va)(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqConstructor(l.genericEqNoArguments)))))))))))))))),
      Ua = new u.Ord(function () {
    return lb;
  }, function (a) {
    return function (b) {
      return h.genericCompare(va)(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdConstructor(h.genericOrdNoArguments)))))))))))))))(a)(b);
    };
  }),
      mb = new g.Eq(l.genericEq(wa)(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqConstructor(l.genericEqNoArguments))))))))))))))))))))))))))),
      Va = new u.Ord(function () {
    return mb;
  }, function (a) {
    return function (b) {
      return h.genericCompare(wa)(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdConstructor(h.genericOrdNoArguments))))))))))))))))))))))))))(a)(b);
    };
  }),
      Wa = new g.Eq(l.genericEq(xa)(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqConstructor(l.genericEqNoArguments)))))))))),
      Xa = new u.Ord(function () {
    return Wa;
  }, function (a) {
    return function (b) {
      return h.genericCompare(xa)(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdConstructor(h.genericOrdNoArguments)))))))))(a)(b);
    };
  }),
      nb = new g.Eq(l.genericEq(Ba)(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqConstructor(l.genericEqNoArguments))))),
      Ya = new u.Ord(function () {
    return nb;
  }, function (a) {
    return function (b) {
      return h.genericCompare(Ba)(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdConstructor(h.genericOrdNoArguments))))(a)(b);
    };
  }),
      Za = new g.Eq(l.genericEq(Ca)(l.genericEqConstructor(l.genericEqNoArguments))),
      $a = new u.Ord(function () {
    return Za;
  }, function (a) {
    return function (b) {
      return h.genericCompare(Ca)(h.genericOrdConstructor(h.genericOrdNoArguments))(a)(b);
    };
  }),
      ob = new g.Eq(l.genericEq(ya)(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqConstructor(l.genericEqNoArguments)))))))))))))))))))),
      ab = new u.Ord(function () {
    return ob;
  }, function (a) {
    return function (b) {
      return h.genericCompare(ya)(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdConstructor(h.genericOrdNoArguments)))))))))))))))))))(a)(b);
    };
  }),
      pb = new k.Enum(function () {
    return Ua;
  }, d.genericPred(va)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), d.genericSucc(va)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      qb = new k.Enum(function () {
    return Va;
  }, d.genericPred(wa)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), d.genericSucc(wa)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      rb = new k.Enum(function () {
    return Xa;
  }, d.genericPred(xa)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), d.genericSucc(xa)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      sb = new k.Enum(function () {
    return Ya;
  }, d.genericPred(Ba)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), d.genericSucc(Ba)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      tb = new k.Enum(function () {
    return $a;
  }, d.genericPred(Ca)(d.genericEnumConstructor(d.genericEnumNoArguments)), d.genericSucc(Ca)(d.genericEnumConstructor(d.genericEnumNoArguments))),
      ub = new k.Enum(function () {
    return ab;
  }, d.genericPred(ya)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), d.genericSucc(ya)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      vb = new f.Bounded(function () {
    return Ua;
  }, e.genericBottom(va)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(va)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))))))))),
      wb = new f.Bounded(function () {
    return Va;
  }, e.genericBottom(wa)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(wa)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments))))))))))))))))))))))))))),
      bb = new f.Bounded(function () {
    return Xa;
  }, e.genericBottom(xa)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(xa)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))),
      xb = new k.SmallBounded(function () {
    return bb;
  }),
      yb = new f.Bounded(function () {
    return Ya;
  }, e.genericBottom(Ba)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(Ba)(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments))))),
      cb = new f.Bounded(function () {
    return $a;
  }, e.genericBottom(Ca)(e.genericBottomConstructor(e.genericBottomNoArguments)), e.genericTop(Ca)(e.genericTopConstructor(e.genericTopNoArguments))),
      zb = new k.SmallBounded(function () {
    return cb;
  }),
      Ab = new f.Bounded(function () {
    return ab;
  }, e.genericBottom(ya)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(ya)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))))))))))))),
      Bb = new k.BoundedEnum(function () {
    return vb;
  }, function () {
    return pb;
  }, d.genericCardinality(va)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))), d.genericFromEnum(va)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))), d.genericToEnum(va)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))))))))),
      Cb = new k.BoundedEnum(function () {
    return wb;
  }, function () {
    return qb;
  }, d.genericCardinality(wa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))))))))))))))))))), d.genericFromEnum(wa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))))))))))))))))))), d.genericToEnum(wa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))))))))))),
      Db = new k.BoundedEnum(function () {
    return bb;
  }, function () {
    return rb;
  }, d.genericCardinality(xa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))), d.genericFromEnum(xa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))), d.genericToEnum(xa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))),
      Eb = new k.BoundedEnum(function () {
    return yb;
  }, function () {
    return sb;
  }, d.genericCardinality(Ba)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))), d.genericFromEnum(Ba)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))), d.genericToEnum(Ba)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))),
      Fb = new k.BoundedEnum(function () {
    return cb;
  }, function () {
    return tb;
  }, d.genericCardinality(Ca)(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)), d.genericFromEnum(Ca)(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)), d.genericToEnum(Ca)(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))),
      Gb = new k.BoundedEnum(function () {
    return Ab;
  }, function () {
    return ub;
  }, d.genericCardinality(ya)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))), d.genericFromEnum(ya)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))), d.genericToEnum(ya)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))));

  c.ARK = Ea;
  c.ArXiv = ta;
  c.Bibcode = ua;
  c.DOI = Fa;
  c.EAN13 = Ga;
  c.EISSN = Ha;
  c.Handle = Ia;
  c.IGSN = La;
  c.ISBN = Ma;
  c.ISSN = Ja;
  c.ISTC = Na;
  c.LISSN = Oa;
  c.LSID = Pa;
  c.PMID = Ka;
  c.PURL = Qa;
  c.UPC = Ra;
  c.URL = Sa;
  c.URN = Ta;
  c.Audiovisual = w;
  c.Dataset = D;
  c.Event = z;
  c.Image = q;
  c.InteractiveResource = x;
  c.Model = H;
  c.PhysicalObject = y;
  c.ResourceCollection = G;
  c.Service = E;
  c.Software = F;
  c.Sound = p;
  c.Text = J;
  c.Workflow = C;
  c.Other = L;
  c.IsCitedBy = B;
  c.Cites = I;
  c.IsSupplementTo = S;
  c.IsSupplementedBy = Q;
  c.IsContinuedBy = M;
  c.Continues = P;
  c.IsNewVersionOf = K;
  c.IsPreviousVersionOf = V;
  c.IsPartOf = T;
  c.HasPart = N;
  c.IsReferencedBy = U;
  c.References = W;
  c.IsDocumentedBy = R;
  c.Documents = Z;
  c.IsCompiledBy = A;
  c.Compiles = O;
  c.IsVariantFormOf = da;
  c.IsOriginalFormOf = fa;
  c.IsIdenticalTo = Y;
  c.HasMetadata = la;
  c.IsMetadataFor = ca;
  c.Reviews = ma;
  c.IsReviewedBy = ea;
  c.IsDerivedFrom = ha;
  c.IsSourceOf = X;
  c.Commercial = oa;
  c.NonProfit = za;
  c.Governmental = Aa;
  c.DataCustodian = ia;
  c.Access = ba;
  c.Collection = aa;
  c.Data = ka;
  c.Metadata = na;
  c.Preservation = qa;
  c.Submission = pa;
  c.Quality = ra;
  c.TermsOfUse = ja;
  c.FreeTextPolicy = sa;
  c.RefPolicy = Da;
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
      u = a["Data.Boolean"],
      r = a["Data.Either"],
      n = a["Data.Functor"];
  a = a["Data.Show"];

  var t = function () {
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

  var v = new n.Functor(function (a) {
    return function (b) {
      var c = n.map(r.functorEither)(function (b) {
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
      return new r.Left({
        pos: b.pos,
        error: new t(a)
      });
    };
  },
      D = new b.Apply(function () {
    return v;
  }, function (a) {
    return function (b) {
      return function (c) {
        return e.bind(r.bindEither)(a(c))(function (a) {
          return e.bind(r.bindEither)(b(a.suffix))(function (b) {
            return g.pure(r.applicativeEither)({
              result: a.result(b.result),
              suffix: b.suffix
            });
          });
        });
      };
    };
  }),
      z = new e.Bind(function () {
    return D;
  }, function (a) {
    return function (b) {
      return function (c) {
        return e.bind(r.bindEither)(a(c))(function (a) {
          return b(a.result)(a.suffix);
        });
      };
    };
  }),
      q = new g.Applicative(function () {
    return D;
  }, function (a) {
    return function (b) {
      return new r.Right({
        result: a,
        suffix: b
      });
    };
  }),
      x = new d.Monad(function () {
    return q;
  }, function () {
    return z;
  });

  b = new l.MonadRec(function () {
    return x;
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
          return n.map(r.functorEither)(c)(a(b.state)(b.str));
        })({
          state: b,
          str: d
        });
      };
    };
  });
  var H = new f.Alt(function () {
    return v;
  }, function (a) {
    return function (b) {
      return function (c) {
        var d = a(c);

        if (d instanceof r.Left) {
          if (c.pos === d.value0.pos) return b(c);
          if (u.otherwise) return new r.Left({
            error: d.value0.error,
            pos: d.value0.pos
          });
        }

        return d;
      };
    };
  }),
      y = new h.Plus(function () {
    return H;
  }, w("No alternative"));
  f = new k.Alternative(function () {
    return q;
  }, function () {
    return y;
  });
  c.ParseError = t;

  c.runParser = function (a) {
    return function (b) {
      return m.bimap(r.bifunctorEither)(function (a) {
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
      return m.lmap(r.bifunctorEither)(function (a) {
        return {
          pos: b.pos,
          error: a.error
        };
      })(a(b));
    };
  };

  c.showParseError = a;
  c.functorParser = v;
  c.applyParser = D;
  c.applicativeParser = q;
  c.altParser = H;
  c.alternativeParser = f;
  c.bindParser = z;
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
      u = function u(a) {
    return function (b) {
      return new d.NonEmpty(a, b);
    };
  };

  c.many = m;

  c.many1 = function (a) {
    return g.apply(h.applyParser)(e.map(h.functorParser)(u)(a))(m(a));
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
          return k.pure(h.applicativeParser)(u(d)(a));
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
      u = a["Text.Parsing.StringParser"],
      r = a["Text.Parsing.StringParser.Combinators"],
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
          error: u.ParseError.create("CodePoint " + (l.show(h.showCodePoint)(e.value0) + " is not a character"))
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 53, column 16 - line 55, column 100): " + [f.constructor.name]);
      }

      if (e instanceof d.Nothing) return new b.Left({
        pos: c.pos,
        error: new u.ParseError("Unexpected EOF")
      });
      throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 52, column 3 - line 56, column 64): " + [e.constructor.name]);
    };
  }(),
      t = function t(a) {
    return u["try"](k.bind(u.bindParser)(n)(function (b) {
      return a(b) ? f.pure(u.applicativeParser)(b) : u.fail("Character " + (l.show(l.showChar)(b) + " did not satisfy predicate"));
    }));
  };

  c.eof = function (a) {
    return a.pos < h.length(a.str) ? new b.Left({
      pos: a.pos,
      error: new u.ParseError("Expected EOF")
    }) : new b.Right({
      result: m.unit,
      suffix: a
    });
  };

  c.satisfy = t;

  c["char"] = function (a) {
    return r.withError(t(function (b) {
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
      u = a["Data.Monoid"],
      r = a["Data.String.CodeUnits"],
      n = a["Data.String.Pattern"],
      t = a["Data.Unit"],
      v = a["Text.Parsing.StringParser"],
      w = a["Text.Parsing.StringParser.CodePoints"],
      D = a["Text.Parsing.StringParser.Combinators"],
      z = function (a) {
    var b = m.fromJust();
    return function (a) {
      return b(e.fromCharCode(a));
    };
  }(),
      q = function q(a) {
    return l.map(v.functorParser)(function () {
      var a = d.fold(h.foldableNonEmptyList)(u.monoidString),
          b = l.map(h.functorNonEmptyList)(r.singleton);
      return function (c) {
        return a(b(c));
      };
    }())(D.many1(w.satisfy(a)));
  },
      x = function x(a) {
    return b.discard(b.discardUnit)(v.bindParser)(l["void"](v.functorParser)(a))(function () {
      return b.discard(b.discardUnit)(v.bindParser)(l["void"](v.functorParser)(H(a)))(function () {
        return k.pure(v.applicativeParser)(t.unit);
      });
    });
  },
      H = function H(a) {
    return f.alt(v.altParser)(x(a))(k.pure(v.applicativeParser)(t.unit));
  },
      y = function y(a) {
    return b.discard(b.discardUnit)(v.bindParser)(l["void"](v.functorParser)(w.satisfy(a)))(function () {
      return b.discard(b.discardUnit)(v.bindParser)(l["void"](v.functorParser)(H(w.satisfy(a))))(function () {
        return k.pure(v.applicativeParser)(t.unit);
      });
    });
  },
      G = w["char"](z(0)),
      E = w["char"]("\n");

  a = function a(_a16) {
    return " " === _a16 || "\t" === _a16;
  };

  var F = w.satisfy(a),
      p = y(a),
      J = function J(a) {
    return function (b) {
      return function (c) {
        return c >= a && c <= b;
      };
    };
  };

  a = J(z(33))(z(126));

  var C = w.satisfy(a),
      L = function L(a) {
    return function (b) {
      return r.contains(n.Pattern(r.singleton(b)))(a);
    };
  },
      B = function B(a) {
    return J(z(1))(z(8))(a) || J(z(14))(z(31))(a) || L("\x0B\f\x7F")(a);
  },
      I = function I(a) {
    return J(z(33))(z(39))(a) || J(z(42))(z(91))(a) || J(z(93))(z(126))(a) || B(a);
  },
      S = function S(a) {
    return J(z(33))(z(90))(a) || J(z(94))(z(126))(a) || B(a);
  },
      Q = w.satisfy(B),
      M = w["char"]("\r"),
      P = l["void"](v.functorParser)(g.applySecond(v.applyParser)(M)(E)),
      K = function () {
    var a = x(g.applySecond(v.applyParser)(P)(p)),
        b = g.applySecond(v.applyParser)(p)(D.optional(g.applySecond(v.applyParser)(P)(p)));
    return f.alt(v.altParser)(b)(a);
  }(),
      V = function () {
    var a = b.discard(b.discardUnit)(v.bindParser)(l["void"](v.functorParser)(w["char"]("\\")))(function () {
      return f.alt(v.altParser)(f.alt(v.altParser)(f.alt(v.altParser)(f.alt(v.altParser)(f.alt(v.altParser)(C)(F))(E))(M))(Q))(G);
    });
    return b.bind(v.bindParser)(a)(function (a) {
      return k.pure(v.applicativeParser)("\\" + r.singleton(a));
    });
  }(),
      T = f.alt(v.altParser)(q(function (a) {
    return L(r.singleton(z(33)))(a) || J(z(35))(z(91))(a) || J(z(93))(z(126))(a) || B(a);
  }))(V),
      N = function () {
    var a = b.discard(b.discardUnit)(v.bindParser)(l["void"](v.functorParser)(w["char"]('"')))(function () {
      return b.bind(v.bindParser)(D.many(g.applySecond(v.applyParser)(D.optional(K))(T)))(function (a) {
        return b.discard(b.discardUnit)(v.bindParser)(l["void"](v.functorParser)(D.optional(K)))(function () {
          return b.discard(b.discardUnit)(v.bindParser)(l["void"](v.functorParser)(w["char"]('"')))(function () {
            return k.pure(v.applicativeParser)(a);
          });
        });
      });
    });
    return l.map(v.functorParser)(function (a) {
      return '"' + (d.fold(h.foldableList)(u.monoidString)(a) + '"');
    })(a);
  }(),
      U = b.discard(b.discardUnit)(v.bindParser)(l["void"](v.functorParser)(w["char"]("(")))(function () {
    return b.discard(b.discardUnit)(v.bindParser)(H(f.alt(v.altParser)(f.alt(v.altParser)(f.alt(v.altParser)(y(I))(l["void"](v.functorParser)(V)))(U))(K)))(function () {
      return b.discard(b.discardUnit)(v.bindParser)(l["void"](v.functorParser)(w["char"](")")))(function () {
        return k.pure(v.applicativeParser)(t.unit);
      });
    });
  }),
      W = H(f.alt(v.altParser)(U)(K));

  a = b.discard(b.discardUnit)(v.bindParser)(D.optional(W))(function () {
    return b.discard(b.discardUnit)(v.bindParser)(l["void"](v.functorParser)(w["char"]("[")))(function () {
      return b.bind(v.bindParser)(D.many(g.applySecond(v.applyParser)(D.optional(K))(q(S))))(function (a) {
        return b.discard(b.discardUnit)(v.bindParser)(D.optional(K))(function () {
          return b.discard(b.discardUnit)(v.bindParser)(l["void"](v.functorParser)(w["char"]("]")))(function () {
            return b.discard(b.discardUnit)(v.bindParser)(D.optional(W))(function () {
              return k.pure(v.applicativeParser)("[" + (d.fold(h.foldableList)(u.monoidString)(a) + "]"));
            });
          });
        });
      });
    });
  });

  var R = function () {
    return q(function (a) {
      return "0" <= a && "9" >= a || "a" <= a && "z" >= a || "A" <= a && "Z" >= a || L("!#$%&'*+/=?^_`{|}~-")(a);
    });
  }(),
      Z = function () {
    var a = b.discard(b.discardUnit)(v.bindParser)(l["void"](v.functorParser)(D.optional(W)))(function () {
      return b.bind(v.bindParser)(f.alt(v.altParser)(R)(N))(function (a) {
        return b.discard(b.discardUnit)(v.bindParser)(l["void"](v.functorParser)(D.optional(W)))(function () {
          return k.pure(v.applicativeParser)(a);
        });
      });
    });
    a = D.sepBy1(a)(w["char"]("."));
    return l.map(v.functorParser)(d.intercalate(h.foldableNonEmptyList)(u.monoidString)("."))(a);
  }(),
      A = f.alt(v.altParser)(Z)(a);

  a = b.bind(v.bindParser)(Z)(function (a) {
    return b.bind(v.bindParser)(w["char"]("@"))(function () {
      return b.bind(v.bindParser)(A)(function (c) {
        return b.bind(v.bindParser)(w.eof)(function () {
          return k.pure(v.applicativeParser)({
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
      u = function () {
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
      n = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

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
      v = function () {
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
      D = function () {
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
      z = function z(a) {
    this.toText = a;
  };

  a = new z(f.identity(f.categoryFn));
  z = new z(function (a) {
    if (a instanceof u) return "This field is required.";
    if (a instanceof n) return "Invalid input: " + a.value0;
    if (a instanceof r) return "Email validation error: " + a.value0;
    if (a instanceof t) return "You must enter at least " + (e.show(e.showInt)(a.value0) + " characters.");
    if (a instanceof v) return "You must enter less than " + (e.show(e.showInt)(a.value0) + " characters.");
    if (a instanceof w) return 'Could not parse "' + (a.value0 + '" to a valid integer.');
    if (a instanceof D) return 'This field contains "' + (a.value1 + ('" but must be equal to "' + (a.value0 + '" to validate.')));
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
        return new r(a);
      })(m.validate(a));
    });
  };

  c.readNEStringEi = function (a) {
    a = l.fromString(d.trim(a));
    if (a instanceof b.Just) return new g.Right(a.value0);
    if (a instanceof b.Nothing) return new g.Left("Empty string when NonEmptyString expected.");
    throw Error("Failed pattern match at Metajelo.Validation (line 110, column 22 - line 112, column 63): " + [a.constructor.name]);
  };

  c.toTextFieldError = z;
  c.toTextString = a;
})(PS);

(function (a) {
  a["Metajelo.XPaths.Read"] = a["Metajelo.XPaths.Read"] || {};
  var c = a["Metajelo.XPaths.Read"],
      f = a["Control.Applicative"],
      k = a["Data.Either"],
      g = a["Data.Maybe"],
      b = a.Effect,
      e = a["Effect.Exception"],
      d = a["Metajelo.Types"];

  c.readIdentifierType = function (a) {
    return "ARK" === a ? f.pure(k.applicativeEither)(d.ARK.value) : "arXiv" === a ? f.pure(k.applicativeEither)(d.ArXiv.value) : "bibcode" === a ? f.pure(k.applicativeEither)(d.Bibcode.value) : "DOI" === a ? f.pure(k.applicativeEither)(d.DOI.value) : "EAN13" === a ? f.pure(k.applicativeEither)(d.EAN13.value) : "EISSN" === a ? f.pure(k.applicativeEither)(d.EISSN.value) : "Handle" === a ? f.pure(k.applicativeEither)(d.Handle.value) : "IGSN" === a ? f.pure(k.applicativeEither)(d.IGSN.value) : "ISBN" === a ? f.pure(k.applicativeEither)(d.ISBN.value) : "ISSN" === a ? f.pure(k.applicativeEither)(d.ISSN.value) : "ISTC" === a ? f.pure(k.applicativeEither)(d.ISTC.value) : "LISSN" === a ? f.pure(k.applicativeEither)(d.LISSN.value) : "LSID" === a ? f.pure(k.applicativeEither)(d.LSID.value) : "PMID" === a ? f.pure(k.applicativeEither)(d.PMID.value) : "PURL" === a ? f.pure(k.applicativeEither)(d.PURL.value) : "UPC" === a ? f.pure(k.applicativeEither)(d.UPC.value) : "URL" === a ? f.pure(k.applicativeEither)(d.URL.value) : "URN" === a ? f.pure(k.applicativeEither)(d.URN.value) : k.Left.create("Unknown IdentifierType: '" + (a + "'"));
  };

  c.readRelationType = function (a) {
    return "IsCitedBy" === a ? f.pure(k.applicativeEither)(d.IsCitedBy.value) : "Cites" === a ? f.pure(k.applicativeEither)(d.Cites.value) : "IsSupplementTo" === a ? f.pure(k.applicativeEither)(d.IsSupplementTo.value) : "IsSupplementedBy" === a ? f.pure(k.applicativeEither)(d.IsSupplementedBy.value) : "IsContinuedBy" === a ? f.pure(k.applicativeEither)(d.IsContinuedBy.value) : "Continues" === a ? f.pure(k.applicativeEither)(d.Continues.value) : "IsNewVersionOf" === a ? f.pure(k.applicativeEither)(d.IsNewVersionOf.value) : "IsPreviousVersionOf" === a ? f.pure(k.applicativeEither)(d.IsPreviousVersionOf.value) : "IsPartOf" === a ? f.pure(k.applicativeEither)(d.IsPartOf.value) : "HasPart" === a ? f.pure(k.applicativeEither)(d.HasPart.value) : "IsReferencedBy" === a ? f.pure(k.applicativeEither)(d.IsReferencedBy.value) : "References" === a ? f.pure(k.applicativeEither)(d.References.value) : "IsDocumentedBy" === a ? f.pure(k.applicativeEither)(d.IsDocumentedBy.value) : "Documents" === a ? f.pure(k.applicativeEither)(d.Documents.value) : "IsCompiledBy" === a ? f.pure(k.applicativeEither)(d.IsCompiledBy.value) : "Compiles" === a ? f.pure(k.applicativeEither)(d.Compiles.value) : "IsVariantFormOf" === a ? f.pure(k.applicativeEither)(d.IsVariantFormOf.value) : "IsOriginalFormOf" === a ? f.pure(k.applicativeEither)(d.IsOriginalFormOf.value) : "IsIdenticalTo" === a ? f.pure(k.applicativeEither)(d.IsIdenticalTo.value) : "HasMetadata" === a ? f.pure(k.applicativeEither)(d.HasMetadata.value) : "IsMetadataFor" === a ? f.pure(k.applicativeEither)(d.IsMetadataFor.value) : "Reviews" === a ? f.pure(k.applicativeEither)(d.Reviews.value) : "IsReviewedBy" === a ? f.pure(k.applicativeEither)(d.IsReviewedBy.value) : "IsDerivedFrom" === a ? f.pure(k.applicativeEither)(d.IsDerivedFrom.value) : "IsSourceOf" === a ? f.pure(k.applicativeEither)(d.IsSourceOf.value) : k.Left.create("Unknown RelationType: '" + (a + "'"));
  };

  c.readResourceTypeGeneral = function (a) {
    return "Audiovisual" === a ? f.pure(k.applicativeEither)(d.Audiovisual.value) : "Dataset" === a ? f.pure(k.applicativeEither)(d.Dataset.value) : "Event" === a ? f.pure(k.applicativeEither)(d.Event.value) : "Image" === a ? f.pure(k.applicativeEither)(d.Image.value) : "InteractiveResource" === a ? f.pure(k.applicativeEither)(d.InteractiveResource.value) : "Model" === a ? f.pure(k.applicativeEither)(d.Model.value) : "PhysicalObject" === a ? f.pure(k.applicativeEither)(d.PhysicalObject.value) : "ResourceCollection" === a ? f.pure(k.applicativeEither)(d.ResourceCollection.value) : "Service" === a ? f.pure(k.applicativeEither)(d.Service.value) : "Software" === a ? f.pure(k.applicativeEither)(d.Software.value) : "Sound" === a ? f.pure(k.applicativeEither)(d.Sound.value) : "Text" === a ? f.pure(k.applicativeEither)(d.Text.value) : "Workflow" === a ? f.pure(k.applicativeEither)(d.Workflow.value) : "Other" === a ? f.pure(k.applicativeEither)(d.Other.value) : k.Left.create("Unknown ResourceTypeGeneral: '" + (a + "'"));
  };

  c.readInstitutionType = function (a) {
    return "commercial" === a ? f.pure(k.applicativeEither)(d.Commercial.value) : "non-profit" === a ? f.pure(k.applicativeEither)(d.NonProfit.value) : "governmental" === a ? f.pure(k.applicativeEither)(d.Governmental.value) : k.Left.create("Unknown InstitutionType: '" + (a + "'"));
  };

  c.readInstitutionContactType = function (a) {
    return "dataCustodian" === a ? f.pure(k.applicativeEither)(new g.Just(d.DataCustodian.value)) : "" === a ? f.pure(k.applicativeEither)(g.Nothing.value) : k.Left.create("Unknown InstitutionContactType: '" + (a + "'"));
  };

  c.readPolicyType = function (a) {
    return "Access" === a ? f.pure(k.applicativeEither)(new g.Just(d.Access.value)) : "Collection" === a ? f.pure(k.applicativeEither)(new g.Just(d.Collection.value)) : "Data" === a ? f.pure(k.applicativeEither)(new g.Just(d.Data.value)) : "Metadata" === a ? f.pure(k.applicativeEither)(new g.Just(d.Metadata.value)) : "Preservation" === a ? f.pure(k.applicativeEither)(new g.Just(d.Preservation.value)) : "Submission" === a ? f.pure(k.applicativeEither)(new g.Just(d.Submission.value)) : "Quality" === a ? f.pure(k.applicativeEither)(new g.Just(d.Quality.value)) : "Terms of Use" === a ? f.pure(k.applicativeEither)(new g.Just(d.TermsOfUse.value)) : "" === a ? f.pure(k.applicativeEither)(g.Nothing.value) : k.Left.create("Unknown PolicyType: '" + (a + "'"));
  };

  c.readBoolean = function (a) {
    return "0" === a ? f.pure(k.applicativeEither)(!1) : "1" === a ? f.pure(k.applicativeEither)(!0) : "false" === a ? f.pure(k.applicativeEither)(!1) : "true" === a ? f.pure(k.applicativeEither)(!0) : k.Left.create("Invalid xs:boolean value: '" + (a + "'"));
  };

  c.rightOrThrow = function (a) {
    if (a instanceof k.Right) return f.pure(b.applicativeEffect)(a.value0);
    if (a instanceof k.Left) return e["throw"](a.value0);
    throw Error("Failed pattern match at Metajelo.XPaths.Read (line 444, column 19 - line 446, column 24): " + [a.constructor.name]);
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
      u = a["Control.Cofree"],
      r = a["Data.Array"],
      n = a["Data.Array.NonEmpty"],
      t = a["Data.Bounded"],
      v = a["Data.Date"],
      w = a["Data.Date.Component"],
      D = a["Data.DateTime"],
      z = a["Data.Either"],
      q = a["Data.Enum"],
      x = a["Data.Eq"],
      H = a["Data.Foldable"],
      y = a["Data.Formatter.DateTime"],
      G = a["Data.Functor"],
      E = a["Data.Generic.Rep"],
      F = a["Data.Generic.Rep.Bounded"],
      p = a["Data.Generic.Rep.Enum"],
      J = a["Data.Generic.Rep.Eq"],
      C = a["Data.Generic.Rep.Ord"],
      L = a["Data.Generic.Rep.Show"],
      B = a["Data.Maybe"],
      I = a["Data.Monoid"],
      S = a["Data.Ord"],
      Q = a["Data.Profunctor.Strong"],
      M = a["Data.Semigroup"],
      P = a["Data.Show"],
      K = a["Data.String.Common"],
      V = a["Data.String.NonEmpty.Internal"],
      T = a["Data.Symbol"],
      N = a["Data.Time"],
      U = a["Data.Time.Component"],
      W = a["Data.Traversable"],
      R = a["Data.Tuple"],
      Z = a["Data.Unfoldable1"],
      A = a["Formless.Internal.Transform"],
      O = a["Formless.Query"],
      da = a["Formless.Retrieve"],
      fa = a["Formless.Types.Query"],
      Y = a["Metajelo.Types"],
      la = a["Metajelo.Validation"],
      ca = a["Metajelo.XPaths.Read"],
      ma = a["Text.URL.Validate"],
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
      X = function () {
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
      aa = function aa(a, b, c) {
    this.fromOptionValue = a;
    this.toOptionLabel = b;
    this.toOptionValue = c;
  },
      ka = function ka(a) {
    if (a instanceof X || a instanceof ba) return a.value0;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 286, column 1 - line 286, column 34): " + [a.constructor.name]);
  },
      na = function na(a) {
    return e.input(k.widgetLiftWidget)([d.value(a), G.map(g.functorProps)(d.unsafeTargetValue)(d.onChange)]);
  },
      qa = function qa(a) {
    return m.bind(u.bindCofree(b.widgetAlternative(I.monoidArray)))(a)(function (a) {
      return l.pure(u.applicativeCofree(b.widgetAlternative(I.monoidArray)))(V.fromString(K.trim(a)));
    });
  },
      pa = function pa(a) {
    return function (b) {
      return b < a ? [] : r.range(a)(b);
    };
  },
      ra = function ra(a) {
    return "FreeTextPolicy" === a ? l.pure(z.applicativeEither)(ea.value) : "RefPolicy" === a ? l.pure(z.applicativeEither)(ha.value) : z.Left.create("Unknown Policy: '" + (a + "'"));
  },
      ja = function ja(a) {
    return function (b) {
      return H.fold(H.foldableMaybe)(I.monoidString)(G.map(B.functorMaybe)(P.show(a))(b));
    };
  };

  a = new aa(function (a) {
    return B.fromJust()(z.hush(ca.readResourceTypeGeneral(a)));
  }, P.show(Y.showResourceTypeGeneral), P.show(Y.showResourceTypeGeneral));

  var sa = new aa(function (a) {
    return B.fromJust()(z.hush(ca.readRelationType(a)));
  }, P.show(Y.showRelationType), P.show(Y.showRelationType)),
      Da = new aa(function (a) {
    return B.fromJust()(z.hush(ca.readInstitutionType(a)));
  }, P.show(Y.showInstitutionType), P.show(Y.showInstitutionType)),
      oa = new aa(function (a) {
    return B.fromJust()(z.hush(ca.readIdentifierType(a)));
  }, P.show(Y.showIdentifierType), P.show(Y.showIdentifierType)),
      za = function za(a) {
    return a instanceof X ? !0 : !1;
  },
      Aa = function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return function (f) {
              return function (g) {
                return new D.DateTime(v.canonicalDate(B.fromMaybe(t.bottom(w.boundedYear))(q.toEnum(w.boundedEnumYear)(a)))(B.fromMaybe(t.bottom(w.boundedMonth))(q.toEnum(w.boundedEnumMonth)(b)))(B.fromMaybe(t.bottom(w.boundedDay))(q.toEnum(w.boundedEnumDay)(c))), new N.Time(B.fromMaybe(t.bottom(U.boundedHour))(q.toEnum(U.boundedEnumHour)(d)), B.fromMaybe(t.bottom(U.boundedMinute))(q.toEnum(U.boundedEnumMinute)(e)), B.fromMaybe(t.bottom(U.boundedSecond))(q.toEnum(U.boundedEnumSecond)(f)), B.fromMaybe(t.bottom(U.boundedMillisecond))(q.toEnum(U.boundedEnumMillisecond)(g))));
              };
            };
          };
        };
      };
    };
  }(0)(0)(0)(0)(0)(0)(0),
      ia = new E.Generic(function (a) {
    if (a instanceof ea) return new E.Inl(E.NoArguments.value);
    if (a instanceof ha) return new E.Inr(E.NoArguments.value);
    throw Error("Failed pattern match at Metajelo.FormUtil (line 234, column 1 - line 234, column 58): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof E.Inl) return ea.value;
    if (a instanceof E.Inr) return ha.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 234, column 1 - line 234, column 58): " + [a.constructor.name]);
  });

  L = new P.Show(L.genericShow(ia)(L.genericShowSum(L.genericShowConstructor(L.genericShowArgsNoArguments)(new T.IsSymbol(function () {
    return "FreeTextPolicy";
  })))(L.genericShowConstructor(L.genericShowArgsNoArguments)(new T.IsSymbol(function () {
    return "RefPolicy";
  })))));
  L = new aa(function () {
    var a = B.fromMaybe(ea.value);
    return function (b) {
      return a(z.hush(ra(b)));
    };
  }(), P.show(L), P.show(L));

  var Ea = new G.Functor(function (a) {
    return function (b) {
      if (b instanceof X) return X.create(G.map(B.functorMaybe)(a)(b.value0));
      if (b instanceof ba) return ba.create(G.map(B.functorMaybe)(a)(b.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 273, column 1 - line 275, column 48): " + [a.constructor.name, b.constructor.name]);
    };
  }),
      ta = function ta(a) {
    return function (c) {
      return function (h) {
        return f.step(h)(function () {
          var f = B.isJust(h) ? !0 : !1;
          return m.bind(b.widgetBind)(e.select(b.widgetMultiAlternative(I.monoidArray))(b.widgetShiftMap)([d.value(B.maybe("")(c.toOptionValue)(h)), G.map(g.functorProps)(function () {
            var a = c.fromOptionValue;
            return function (b) {
              return a(d.unsafeTargetValue(b));
            };
          }())(d.onChange)])(r.cons(e.option(b.widgetMultiAlternative(I.monoidArray))(b.widgetShiftMap)([d.disabled(f)])([e.text(k.widgetLiftWidget)("Select ...")]))(G.mapFlipped(G.functorArray)(q.upFromIncluding(a.Enum1())(Z.unfoldable1Array)(t.bottom(a.Bounded0())))(function (a) {
            return e.option(b.widgetMultiAlternative(I.monoidArray))(b.widgetShiftMap)([d.value((0, c.toOptionValue)(a))])([e.text(k.widgetLiftWidget)((0, c.toOptionLabel)(a))]);
          }))))(function (d) {
            return l.pure(b.widgetApplicative)(ta(a)(c)(new B.Just(d)));
          });
        }());
      };
    };
  },
      ua = function ua(a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return H.fold(a)(c)(G.map(b)(d)(e));
          };
        };
      };
    };
  },
      Fa = function Fa(a) {
    a = ua(H.foldableMaybe)(B.functorMaybe)(I.monoidString)(V.toString)(a);
    a = f.debounce(I.monoidArray)(500)(a)(na);
    return qa(a);
  },
      Ga = function Ga(a) {
    return B.maybe(I.mempty(b.widgetMonoid(I.monoidArray)))(function (c) {
      return e.div(b.widgetMultiAlternative(I.monoidArray))(b.widgetShiftMap)([d.style({
        color: "red"
      })])([e.text(k.widgetLiftWidget)(la.toText(a)(c))]);
    });
  },
      Ha = new x.Eq(J.genericEq(ia)(J.genericEqSum(J.genericEqConstructor(J.genericEqNoArguments))(J.genericEqConstructor(J.genericEqNoArguments)))),
      Ia = new S.Ord(function () {
    return Ha;
  }, function (a) {
    return function (b) {
      return C.genericCompare(ia)(C.genericOrdSum(C.genericOrdConstructor(C.genericOrdNoArguments))(C.genericOrdConstructor(C.genericOrdNoArguments)))(a)(b);
    };
  }),
      La = new q.Enum(function () {
    return Ia;
  }, p.genericPred(ia)(p.genericEnumSum(p.genericEnumConstructor(p.genericEnumNoArguments))(F.genericTopConstructor(F.genericTopNoArguments))(p.genericEnumConstructor(p.genericEnumNoArguments))(F.genericBottomConstructor(F.genericBottomNoArguments))), p.genericSucc(ia)(p.genericEnumSum(p.genericEnumConstructor(p.genericEnumNoArguments))(F.genericTopConstructor(F.genericTopNoArguments))(p.genericEnumConstructor(p.genericEnumNoArguments))(F.genericBottomConstructor(F.genericBottomNoArguments))));

  T = function T(a) {
    return function (b) {
      return b instanceof B.Nothing ? "(None)" : ja(a)(b);
    };
  };

  x = new aa(function (a) {
    return z.hush(ca.readBoolean(a));
  }, T(P.showBoolean), ja(P.showBoolean));
  J = new aa(function () {
    var a = m.join(B.bindMaybe);
    return function (b) {
      return a(z.hush(ca.readInstitutionContactType(b)));
    };
  }(), T(Y.showInstitutionContactType), ja(Y.showInstitutionContactType));
  Y = new aa(function () {
    var a = m.join(B.bindMaybe);
    return function (b) {
      return a(z.hush(ca.readPolicyType(b)));
    };
  }(), T(Y.showPolicyType), ja(Y.showPolicyType));

  var Ma = function Ma(a) {
    return G.voidRight(b.widgetFunctor)(!a)(e.input(k.widgetLiftWidget)([d._type("checkbox"), d.checked(a), d.onChange]));
  },
      Ja = function Ja(a) {
    var c = Ma(a);
    return f.step(a)(m.bind(b.widgetBind)(c)(function (a) {
      return l.pure(b.widgetApplicative)(Ja(a));
    }));
  },
      Na = new t.Bounded(function () {
    return Ia;
  }, F.genericBottom(ia)(F.genericBottomSum(F.genericBottomConstructor(F.genericBottomNoArguments))), F.genericTop(ia)(F.genericTopSum(F.genericTopConstructor(F.genericTopNoArguments))));

  F = new q.BoundedEnum(function () {
    return Na;
  }, function () {
    return La;
  }, p.genericCardinality(ia)(p.genericBoundedEnumSum(p.genericBoundedEnumConstructor(p.genericBoundedEnumNoArguments))(p.genericBoundedEnumConstructor(p.genericBoundedEnumNoArguments))), p.genericFromEnum(ia)(p.genericBoundedEnumSum(p.genericBoundedEnumConstructor(p.genericBoundedEnumNoArguments))(p.genericBoundedEnumConstructor(p.genericBoundedEnumNoArguments))), p.genericToEnum(ia)(p.genericBoundedEnumSum(p.genericBoundedEnumConstructor(p.genericBoundedEnumNoArguments))(p.genericBoundedEnumConstructor(p.genericBoundedEnumNoArguments))));

  var Oa = new h.Apply(function () {
    return Ea;
  }, function (a) {
    return function (b) {
      if (a instanceof X && b instanceof X || a instanceof X && b instanceof ba || a instanceof ba && b instanceof X) return X.create(h.apply(B.applyMaybe)(a.value0)(b.value0));
      if (a instanceof ba && b instanceof ba) return ba.create(h.apply(B.applyMaybe)(a.value0)(b.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 276, column 1 - line 280, column 63): " + [a.constructor.name, b.constructor.name]);
    };
  }),
      Pa = new l.Applicative(function () {
    return Oa;
  }, function (a) {
    return X.create(new B.Just(a));
  }),
      Ka = function Ka(a) {
    return function (c) {
      var g = R.snd(c),
          h = R.fst(c),
          p = new X(B.Nothing.value);

      c = function () {
        var a = S.max(S.ordInt)(0)(h - r.length(g) | 0);
        return M.append(M.semigroupArray)(G.map(G.functorArray)(l.pure(Pa))(g))(G.mapFlipped(G.functorArray)(pa(1)(a))(function (a) {
          return p;
        }));
      }();

      var n = function n(a) {
        return f.step(a)(m.bind(b.widgetBind)(G.voidRight(b.widgetFunctor)(ba.create(ka(a)))(e.button(b.widgetMultiAlternative(I.monoidArray))(b.widgetShiftMap)([d.onClick])([e.text(k.widgetLiftWidget)("Delete")])))(function (a) {
          return l.pure(b.widgetApplicative)(n(a));
        }));
      },
          q = function q(c) {
        return e.li_(u.shiftMapCofree(I.monoidArray))([])(m.bind(u.bindCofree(b.widgetAlternative(I.monoidArray)))(a(ka(c)))(function (a) {
          return m.bind(u.bindCofree(b.widgetAlternative(I.monoidArray)))(n(new X(a)))(function (a) {
            return l.pure(u.applicativeCofree(b.widgetAlternative(I.monoidArray)))(a);
          });
        }));
      },
          t = function t(a) {
        if (a instanceof ba) return f.step(new ba(B.Nothing.value))(I.mempty(b.widgetMonoid(I.monoidArray)));
        if (a instanceof X) return q(a);
        throw Error("Failed pattern match at Metajelo.FormUtil (line 307, column 23 - line 309, column 35): " + [a.constructor.name]);
      };

      return e.div_(u.shiftMapCofree(I.monoidArray))([])(m.bind(u.bindCofree(b.widgetAlternative(I.monoidArray)))(function (a) {
        return function (c) {
          return f.loopS(I.monoidArray)(new R.Tuple(a, c))(function (a) {
            return e.ul_(u.shiftMapCofree(I.monoidArray))([])(function () {
              R.fst(a);
              var c = R.snd(a);
              return m.bind(u.bindCofree(b.widgetAlternative(I.monoidArray)))(f.step(0)(G.voidRight(b.widgetFunctor)(l.pure(u.applicativeCofree(b.widgetAlternative(I.monoidArray)))(1))(e.button(b.widgetMultiAlternative(I.monoidArray))(b.widgetShiftMap)([d.onClick])([e.text(k.widgetLiftWidget)("Add item")]))))(function (a) {
                return m.bind(u.bindCofree(b.widgetAlternative(I.monoidArray)))(W.traverse(W.traversableArray)(u.applicativeCofree(b.widgetAlternative(I.monoidArray)))(t)(c))(function (c) {
                  c = r.filter(za)(c);
                  var d = r.length(c) + a | 0,
                      e = G.mapFlipped(G.functorArray)(pa(1)(a))(function (a) {
                    return p;
                  });
                  return l.pure(u.applicativeCofree(b.widgetAlternative(I.monoidArray)))(R.Tuple.create(d)(M.append(M.semigroupArray)(c)(e)));
                });
              });
            }());
          });
        };
      }(h)(c))(function (a) {
        return l.pure(u.applicativeCofree(b.widgetAlternative(I.monoidArray)))(Q.second(Q.strongFn)(function () {
          var a = G.map(G.functorArray)(ka);
          return function (b) {
            return r.catMaybes(a(b));
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
                  return function (p) {
                    return e.select(b.widgetMultiAlternative(I.monoidArray))(b.widgetShiftMap)([d.defaultValue((0, c.toOptionValue)(da.getInput(a)(h)()(p)(m))), G.map(g.functorProps)(function () {
                      var b = O.set(a)(l)()(p),
                          e = c.fromOptionValue;
                      return function (a) {
                        return b(e(d.unsafeTargetValue(a)));
                      };
                    }())(d.onChange)])(G.mapFlipped(G.functorArray)(q.upFromIncluding(f.Enum1())(Z.unfoldable1Array)(t.bottom(f.Bounded0())))(function (a) {
                      return e.option(b.widgetMultiAlternative(I.monoidArray))(b.widgetShiftMap)([d.value((0, c.toOptionValue)(a))])([e.text(k.widgetLiftWidget)((0, c.toOptionLabel)(a))]);
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

  c.menuSignal = ta;
  c.textInput = Fa;

  c.urlInput = function (a) {
    if (a instanceof z.Left) var c = "";else if (a instanceof z.Right) c = V.toString(ma.urlToNEString(a.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 169, column 15 - line 171, column 48): " + [a.constructor.name]);
    if (a instanceof z.Left) var d = a.value0;else if (a instanceof z.Right) d = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 165, column 15 - line 167, column 20): " + [a.constructor.name]);
    return m.bind(u.bindCofree(b.widgetAlternative(I.monoidArray)))(Fa(V.fromString(c)))(function (a) {
      var c = m.bind(u.bindCofree(b.widgetAlternative(I.monoidArray))),
          e = l.pure(u.applicativeCofree(b.widgetAlternative(I.monoidArray)));
      if (a instanceof B.Nothing) a = new z.Left(d);else if (a instanceof B.Just) a = ma.parsePublicURL(V.toString(a.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 156, column 19 - line 158, column 46): " + [a.constructor.name]);
      return c(e(a))(function (a) {
        return m.discard(m.discardUnit)(u.bindCofree(b.widgetAlternative(I.monoidArray)))(f.display(function () {
          if (a instanceof z.Right) return I.mempty(b.widgetMonoid(I.monoidArray));
          if (a instanceof z.Left) return Ga(la.toTextString)(new B.Just(a.value0));
          throw Error("Failed pattern match at Metajelo.FormUtil (line 159, column 13 - line 161, column 40): " + [a.constructor.name]);
        }()))(function () {
          return l.pure(u.applicativeCofree(b.widgetAlternative(I.monoidArray)))(a);
        });
      });
    });
  };

  c.checkBoxS = Ja;
  c.FreeTextPolicy = ea;
  c.RefPolicy = ha;

  c.formSaveButton = function (a) {
    a = a.dirty ? [d.onClick] : [d.disabled(!0)];
    return e.button(b.widgetMultiAlternative(I.monoidArray))(b.widgetShiftMap)(a)([e.text(k.widgetLiftWidget)("Save")]);
  };

  c.arrayView = Ka;

  c.nonEmptyArrayView = function (a) {
    return function (c) {
      return m.bind(u.bindCofree(b.widgetAlternative(I.monoidArray)))(Ka(a)(Q.second(Q.strongFn)(ua(H.foldableMaybe)(B.functorMaybe)(I.monoidArray)(n.toArray))(c)))(function (a) {
        return l.pure(u.applicativeCofree(b.widgetAlternative(I.monoidArray)))(Q.second(Q.strongFn)(n.fromArray)(a));
      });
    };
  };

  c.errorDisplay = Ga;

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
                form: A.inputFieldsToFormFields()(a)(b)(c)(d),
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
    var b = y.formatDateTime("YYYY-MM-DD")(a);
    return function () {
      if (b instanceof z.Left) return new z.Left(b.value0);

      if (b instanceof z.Right) {
        var a = V.fromString(b.value0);
        if (a instanceof B.Nothing) return new z.Left("Empty Date output from formatXsdDate");
        if (a instanceof B.Just) return new z.Right(a.value0);
        throw Error("Failed pattern match at Metajelo.FormUtil (line 413, column 27 - line 415, column 30): " + [a.constructor.name]);
      }

      throw Error("Failed pattern match at Metajelo.FormUtil (line 411, column 15 - line 415, column 30): " + [b.constructor.name]);
    }();
  };

  c.initDate = Aa;
  c.isOptionMaybeBoolean = x;
  c.isOptionIdentifierType = oa;
  c.isOptionInstitutionType = Da;
  c.isOptionMaybeInstitutionContactType = J;
  c.isOptionMaybePolicyType = Y;
  c.isOptionRelationType = sa;
  c.isOptionResourceTypeGeneral = a;
  c.eqPolPolType = Ha;
  c.boundedEnumPolPolType = F;
  c.isOptionPolPolType = L;
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
      u = a["Data.Array.NonEmpty.Internal"],
      r = a["Data.Foldable"],
      n = a["Data.Functor"],
      t = a["Data.HeytingAlgebra"],
      v = a["Data.Maybe"],
      w = a["Data.Monoid"],
      D = a["Data.Profunctor.Strong"],
      z = a["Data.Semigroup"],
      q = a["Data.Show"],
      x = a["Data.String.CodePoints"],
      H = a["Data.String.NonEmpty.Internal"],
      y = a["Data.String.Utils"],
      G = a["Data.Unfoldable"],
      E = a["Data.Unfoldable1"],
      F = a["Foreign.Object"],
      p = a["Metajelo.CSS.Common.ClassNames"],
      J = a["Metajelo.CSS.Web.ClassNamesPrivate"],
      C = a["Metajelo.CSS.Web.ClassProps"],
      L = a["Metajelo.CSS.Web.Util"],
      B = a["Metajelo.Types"],
      I = a["Text.Email.Parser"],
      S = a["Text.URL.Validate"],
      Q = function () {
    var a = n.map(n.functorArray)(x.singleton);
    return function (b) {
      return a(x.toCodePointArray(b));
    };
  }(),
      M = function M(a) {
    var b = g.text(a);
    return function (a) {
      return b(H.toString(a));
    };
  },
      P = g["span'"](k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([g.text(f.widgetLiftWidget)(" ")]),
      K = function () {
    var a = r.intercalate(r.foldableArray)(w.monoidArray)([P]),
        b = n.map(n.functorArray)(E.singleton(E.unfoldable1Array));
    return function (c) {
      return a(b(c));
    };
  }(),
      V = function V(a) {
    return g.div(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.institutionPolicy])(K([function (a) {
      var b = function () {
        if (a instanceof v.Nothing) return {
          text: "May apply to product (unverified)",
          cls: J.appliesMaybe
        };
        if (a instanceof v.Just && a.value0) return {
          text: "Applies to product",
          cls: J.appliesYes
        };
        if (a instanceof v.Just && !a.value0) return {
          text: "Does not apply to product",
          cls: J.appliesNo
        };
        throw Error("Failed pattern match at Metajelo.View (line 258, column 10 - line 261, column 75): " + [a.constructor.name]);
      }();

      return g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([L.cList([p.applies, b.cls])])([function (a) {
        return g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.appliesInfo])([g.text(f.widgetLiftWidget)(a)]);
      }(b.text)]);
    }(a.appliesToProduct), r.foldMap(r.foldableMaybe)(k.widgetMonoid(w.monoidArray))(function (a) {
      return g["span'"](k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.policyType])([g.text(f.widgetLiftWidget)(q.show(B.showPolicyType)(a))]), g.text(f.widgetLiftWidget)(" Policy:")]);
    })(a.policyType), function (a) {
      var c = g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.policy]),
          d = E.singleton(E.unfoldable1Array);
      if (a instanceof B.FreeTextPolicy) a = M(f.widgetLiftWidget)(a.value0);else if (a instanceof B.RefPolicy) a = S.urlToString(a.value0), a = g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(a)])([g.text(f.widgetLiftWidget)(a)]);else throw Error("Failed pattern match at Metajelo.View (line 251, column 5 - line 254, column 40): " + [a.constructor.name]);
      return c(d(a));
    }(a.policy)]));
  },
      T = function T(a) {
    return g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.institutionName])([M(f.widgetLiftWidget)(a.institutionName)]);
  },
      N = function N(a) {
    return function (a) {
      return r.foldMap(r.foldableMaybe)(w.monoidArray)(l.identity(l.categoryFn))(h.init(a));
    };
  },
      U = function U(a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            var f = F.fromFoldableWith(a)(z.append(d)),
                g = n.map(b)(D.fanout(l.categoryFn)(D.strongFn)(e)(E.singleton(c)));
            return function (a) {
              return f(g(a));
            };
          };
        };
      };
    };
  },
      W = function W(a) {
    var c = I.toString(a.emailAddress),
        d = g.text(f.widgetLiftWidget);
    if (a.contactType instanceof v.Nothing) a = ".";else if (a.contactType instanceof v.Just) a = " (" + (q.show(B.showInstitutionContactType)(a.contactType.value0) + ").");else throw Error("Failed pattern match at Metajelo.View (line 185, column 24 - line 187, column 41): " + [a.contactType.constructor.name]);
    d = d(a);
    return g.span_(k.widgetShiftMap)([C.institutionContact])(e.alt(k.widgetAlt(w.monoidArray))(e.alt(k.widgetAlt(w.monoidArray))(g["span'"](k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([g.text(f.widgetLiftWidget)("Institution Contact: ")]))(g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.contactEmail, b.href("mailto:" + c)])([g.text(f.widgetLiftWidget)(c)])))(g.span_(k.widgetShiftMap)([C.contactType])(d)));
  },
      R = function R(a) {
    return g["cite'"](k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([M(f.widgetLiftWidget)(a)]);
  },
      Z = function Z(a) {
    if (a.idType instanceof B.ARK) return g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(H.toString(a.id))])([R(a.id)]);

    if (a.idType instanceof B.ArXiv) {
      var c = "https://arxiv.org/abs/" + H.toString(a.id);
      return g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(c)])([R(a.id)]);
    }

    if (a.idType instanceof B.Bibcode) return c = "https://ui.adsabs.harvard.edu/abs/" + (H.toString(a.id) + "/abstract"), g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(c)])([R(a.id)]);
    if (a.idType instanceof B.DOI) return c = "https://doi.org/" + H.toString(a.id), g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(c)])([R(a.id)]);
    if (a.idType instanceof B.EAN13) return R(a.id);
    if (a.idType instanceof B.EISSN) return c = "https://www.worldcat.org/ISSN/" + H.toString(a.id), g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(c)])([R(a.id)]);
    if (a.idType instanceof B.Handle) return c = "http://hdl.handle.net/" + H.toString(a.id), g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(c)])([R(a.id)]);
    if (a.idType instanceof B.IGSN) return c = "http://igsn.org/" + H.toString(a.id), g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(c)])([R(a.id)]);
    if (a.idType instanceof B.ISBN) return R(a.id);
    if (a.idType instanceof B.ISSN) return c = "https://www.worldcat.org/ISSN/" + H.toString(a.id), g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(c)])([R(a.id)]);
    if (a.idType instanceof B.ISTC) return R(a.id);
    if (a.idType instanceof B.LISSN) return c = "https://www.worldcat.org/ISSN/" + H.toString(a.id), g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(c)])([R(a.id)]);
    if (a.idType instanceof B.LSID) return c = "http://www.lsid.info/resolver/?lsid=" + H.toString(a.id), g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(c)])([R(a.id)]);
    if (a.idType instanceof B.PMID) return c = "https://www.ncbi.nlm.nih.gov/pubmed/" + H.toString(a.id), g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(c)])([R(a.id)]);
    if (a.idType instanceof B.PURL) return g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(H.toString(a.id))])([R(a.id)]);
    if (a.idType instanceof B.UPC) return R(a.id);
    if (a.idType instanceof B.URL) return g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([b.href(H.toString(a.id))])([R(a.id)]);
    if (a.idType instanceof B.URN) return R(a.id);
    throw Error("Failed pattern match at Metajelo.View (line 207, column 1 - line 207, column 47): " + [a.constructor.name]);
  },
      A = function A(a) {
    return g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.identifier])([g.span_(k.widgetShiftMap)([C.idType])(g.text(f.widgetLiftWidget)(q.show(B.showIdentifierType)(a.idType))), g.span_(k.widgetShiftMap)([C.idUrl])(Z(a))]);
  },
      O = function O(a) {
    return g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.relatedId])([g.span_(k.widgetShiftMap)([C.relType])(g.text(f.widgetLiftWidget)(q.show(B.showRelationType)(a.relType))), P, A({
      id: a.id,
      idType: a.idType
    })]);
  },
      da = function da(a) {
    return function (b) {
      return function (c) {
        if (b) return a;

        if (r.any(r.foldableArray)(t.heytingAlgebraBoolean)(function (b) {
          return y.endsWith(b)(a);
        })([";", ".", ","])) {
          var d = Q(a);
          return y.fromCharArray(N(w.monoidString)(d)) + c;
        }

        return a + c;
      };
    };
  },
      fa = function fa(a) {
    var c = T(a),
        d = g["span'"](k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([g.text(f.widgetLiftWidget)("("), g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.institutionId])([A(a.institutionID)]), g.text(f.widgetLiftWidget)("; "), g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.institutionType])([g.text(f.widgetLiftWidget)(q.show(B.showInstitutionType)(a.institutionType))]), g.text(f.widgetLiftWidget)(da(")")(v.isNothing(a.superOrganizationName))(","))]);
    if (a.superOrganizationName instanceof v.Nothing) var e = w.mempty(k.widgetMonoid(w.monoidArray));else if (a.superOrganizationName instanceof v.Just) e = g["span'"](k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([g.text(f.widgetLiftWidget)("a member of "), g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.superOrg])([g.text(f.widgetLiftWidget)(da(H.toString(a.superOrganizationName.value0))(!1)("."))])]);else throw Error("Failed pattern match at Metajelo.View (line 147, column 7 - line 153, column 10): " + [a.superOrganizationName.constructor.name]);
    return K([c, d, e, W(a.institutionContact), g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.sustainability])([g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.missionStatement, b.href(S.urlToString(a.institutionSustainability.missionStatementURL))])([g.text(f.widgetLiftWidget)("Mission Statement")]), g.text(f.widgetLiftWidget)("; "), g.a(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.fundingStatement, b.href(S.urlToString(a.institutionSustainability.fundingStatementURL))])([g.text(f.widgetLiftWidget)("Funding Statement")]), g.text(f.widgetLiftWidget)(".")]), g.ul(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.institutionPolicies])(n.map(n.functorArray)(function (a) {
      return g["li'"](k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([V(a)]);
    })(m.toArray(a.institutionPolicies))), function (a) {
      if (a) a = "Versioned";else {
        if (a) throw Error("Failed pattern match at Metajelo.View (line 174, column 14 - line 176, column 31): " + [a.constructor.name]);
        a = "Unversioned";
      }
      return g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.versioning])([g.text(f.widgetLiftWidget)(a)]);
    }(a.versioning)]);
  },
      Y = function Y(a) {
    if (a.resourceID instanceof v.Just) var b = g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.resourceId])([A(a.resourceID.value0), g.text(f.widgetLiftWidget)(".")]);else if (a.resourceID instanceof v.Nothing) b = w.mempty(k.widgetMonoid(w.monoidArray));else throw Error("Failed pattern match at Metajelo.View (line 125, column 17 - line 127, column 24): " + [a.resourceID.constructor.name]);
    var c = [g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.basicMetadata, C.creator])([M(f.widgetLiftWidget)(a.basicMetadata.creator)]), g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.basicMetadata, C.pubyear])([M(f.widgetLiftWidget)(a.basicMetadata.publicationYear)]), g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.basicMetadata, C.title])([g.text(f.widgetLiftWidget)(da(H.toString(a.basicMetadata.title))(v.isNothing(a.resourceID))(","))])];
    b = z.append(z.semigroupArray)(c)([g["span'"](k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([T(a.location), g.text(f.widgetLiftWidget)(".")]), b]);
    return g.div(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.product])(K(z.append(z.semigroupArray)([g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.productCitation])([g["cite'"](k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)(K(b))])])(fa(a.location))));
  };

  c.spacify = K;

  c.mkRecordWidget = function (a) {
    var b = function () {
      var b = n.map(u.functorNonEmptyArray)(function (a) {
        return g.li(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.relatedId])([a]);
      })(n.map(u.functorNonEmptyArray)(O)(a.relatedIdentifiers));
      return g.ul(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.relatedIdList])(m.toArray(b));
    }(),
        c = U(u.foldableNonEmptyArray)(u.functorNonEmptyArray)(u.unfoldable1NonEmptyArray)(u.semigroupNonEmptyArray)(function (a) {
      return q.show(B.showResourceTypeGeneral)(a.resourceType.generalType) + (": " + a.resourceType.description);
    })(a.supplementaryProducts),
        l = function l(a) {
      a = d.join(d.bindArray)(G.fromMaybe(G.unfoldableArray)(n.map(v.functorMaybe)(m.toArray)(F.lookup(a)(c))));
      var b = g.span_(k.widgetShiftMap)([C.resourceType])(r.fold(r.foldableMaybe)(k.widgetMonoid(w.monoidArray))(n.mapFlipped(v.functorMaybe)(h.head(a))(function (a) {
        return e.alt(k.widgetAlt(w.monoidArray))(e.alt(k.widgetAlt(w.monoidArray))(g.span_(k.widgetShiftMap)([C.resourceTypeGen])(g.text(f.widgetLiftWidget)(q.show(B.showResourceTypeGeneral)(a.resourceType.generalType))))(g.span_(k.widgetShiftMap)([C.resourceTypeDescr])(g.text(f.widgetLiftWidget)(a.resourceType.description))))(g["br'"](f.widgetLiftWidget));
      })));
      return g["div'"](k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)(h.cons(b)(n.map(n.functorArray)(Y)(a)));
    };

    q.show(B.showIdentifierType)(a.identifier.idType);
    return g.div(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.record])([g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.productsHeader])([g.span_(k.widgetShiftMap)([C.recordId])(A(a.identifier))]), g.ul(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.productList])(n.map(n.functorArray)(function (a) {
      return g.li_(k.widgetShiftMap)([C.productGroup])(l(a));
    })(F.keys(c))), g.span(k.widgetMultiAlternative(w.monoidArray))(k.widgetShiftMap)([C.relatedIdsHeader])([]), b]);
  };

  c.mkSupplementaryProductWidget = Y;
  c.locElems = fa;
  c.contactWidg = W;
  c.ipolicyWidg = V;
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
      u = a["Data.Either"],
      r = a["Data.Enum"],
      n = a["Data.Eq"],
      t = a["Data.Foldable"],
      v = a["Data.Functor"],
      w = a["Data.Maybe"],
      D = a["Data.Monoid"],
      z = a["Data.Newtype"],
      q = a["Data.Symbol"],
      x = a["Formless.Component"],
      H = a["Formless.Internal.Transform"],
      y = a["Formless.Query"],
      G = a["Formless.Retrieve"],
      E = a["Formless.Transform.Record"],
      F = a["Formless.Transform.Row"],
      p = a["Formless.Types.Form"],
      J = a["Heterogeneous.Mapping"],
      C = a["Metajelo.CSS.UI.ClassProps"],
      L = a["Metajelo.FormUtil"],
      B = a["Metajelo.Types"],
      I = a["Metajelo.Validation"],
      S = a["Metajelo.View"],
      Q = a["Text.Email.Parser"],
      M = {
    email1: I.emailFormat(b.widgetMonad),
    contactType: I.dummy(b.widgetMonad)
  },
      P = function P(a) {
    return function (a) {
      return function (b) {
        return F.mkSProxies()(a)(b)(p.FormProxy.value);
      };
    };
  },
      K = new z.Newtype(function (a) {
    return a;
  }, function (a) {
    return a;
  }),
      V = {
    email1: "",
    contactType: w.Nothing.value
  },
      T = function T(a) {
    if (a instanceof w.Nothing) return V;
    if (a instanceof w.Just) return {
      email1: Q.toString(a.value0.emailAddress),
      contactType: a.value0.contactType
    };
    throw Error("Failed pattern match at Metajelo.Forms.InstitutionContact (line 49, column 1 - line 49, column 57): " + [a.constructor.name]);
  },
      N = function N(a) {
    return h.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(D.monoidArray))(b.widgetShiftMap)([e.input(k.widgetLiftWidget)([C.contactEmail, d.defaultValue(G.getInput(new q.IsSymbol(function () {
      return "email1";
    }))(K)()(P()(K)(F.makeSProxiesCons(new q.IsSymbol(function () {
      return "contactType";
    }))()(F.makeSProxiesCons(new q.IsSymbol(function () {
      return "email1";
    }))()(F.makeSProxiesNil))).email1)(a.form)), v.map(g.functorProps)(function () {
      var a = y.setValidate(new q.IsSymbol(function () {
        return "email1";
      }))(K)()(P()(K)(F.makeSProxiesCons(new q.IsSymbol(function () {
        return "contactType";
      }))()(F.makeSProxiesCons(new q.IsSymbol(function () {
        return "email1";
      }))()(F.makeSProxiesNil))).email1);
      return function (b) {
        return a(d.unsafeTargetValue(b));
      };
    }())(d.onChange)]), L.errorDisplay(I.toTextFieldError)(G.getError(new q.IsSymbol(function () {
      return "email1";
    }))(K)()(P()(K)(F.makeSProxiesCons(new q.IsSymbol(function () {
      return "contactType";
    }))()(F.makeSProxiesCons(new q.IsSymbol(function () {
      return "email1";
    }))()(F.makeSProxiesNil))).email1)(a.form)), e.span_(b.widgetShiftMap)([C.contactType])(L.menu(new q.IsSymbol(function () {
      return "contactType";
    }))(L.isOptionMaybeInstitutionContactType)(r.boundedEnumMaybe(B.smallBoundedInstitutionContactType)(B.boundedEnumInstitutionContactType))(K)()(K)()(a.form)(P()(K)(F.makeSProxiesCons(new q.IsSymbol(function () {
      return "contactType";
    }))()(F.makeSProxiesCons(new q.IsSymbol(function () {
      return "email1";
    }))()(F.makeSProxiesNil))).contactType)), e["div'"](b.widgetMultiAlternative(D.monoidArray))(b.widgetShiftMap)([v.voidRight(b.widgetFunctor)(y.submit)(L.formSaveButton(a))])]))(function (c) {
      return h.bind(b.widgetBind)(x.eval()()(n.eqRowCons(n.eqRowCons(n.eqRowNil)()(new q.IsSymbol(function () {
        return "email1";
      }))(p.eqInputField(n.eqString)))()(new q.IsSymbol(function () {
        return "contactType";
      }))(p.eqInputField(w.eqMaybe(B.eqInstitutionContactType))))(H.inputFieldsToFormFieldsCons(new q.IsSymbol(function () {
        return "contactType";
      }))()(H.inputFieldsToFormFieldsCons(new q.IsSymbol(function () {
        return "email1";
      }))()(H.inputFieldsToFormFieldsNil)())())(H.inputFieldsToInputCons(new q.IsSymbol(function () {
        return "contactType";
      }))()(H.inputFieldsToInputCons(new q.IsSymbol(function () {
        return "email1";
      }))()(H.inputFieldsToInputNil)())())(H.consCountErrors(new q.IsSymbol(function () {
        return "contactType";
      }))()(H.consCountErrors(new q.IsSymbol(function () {
        return "email1";
      }))()(H.nilCountErrors)))(H.consAllTouched(new q.IsSymbol(function () {
        return "contactType";
      }))()(H.consAllTouched(new q.IsSymbol(function () {
        return "email1";
      }))()(H.nilAllTouched)))(H.setFormFieldsTouchedCons(new q.IsSymbol(function () {
        return "contactType";
      }))()(H.setFormFieldsTouchedCons(new q.IsSymbol(function () {
        return "email1";
      }))()(H.setFormFieldsTouchedNil)())())(H.replaceFormFieldInputsTouchedCons(new q.IsSymbol(function () {
        return "contactType";
      }))(p.newtypeInputField)(p.newtypeFormField)()()()(H.replaceFormFieldInputsTouchedCons(new q.IsSymbol(function () {
        return "email1";
      }))(p.newtypeInputField)(p.newtypeFormField)()()()(H.replaceFormFieldInputsTouchedNil)))(H.modifyAllCons(new q.IsSymbol(function () {
        return "contactType";
      }))(p.newtypeInputFunction)(p.newtypeFormField)()()()(H.modifyAllCons(new q.IsSymbol(function () {
        return "email1";
      }))(p.newtypeInputFunction)(p.newtypeFormField)()()()(H.modifyAllNil)))(H.applyToValidationCons(new q.IsSymbol(function () {
        return "contactType";
      }))(b.widgetMonad)()(K)()()(H.applyToValidationCons(new q.IsSymbol(function () {
        return "email1";
      }))(b.widgetMonad)()(K)()()(H.applyToValidationNil(b.widgetMonad))))(H.formFieldsToMaybeOutputCons(new q.IsSymbol(function () {
        return "contactType";
      }))()(H.formFieldsToMaybeOutputCons(new q.IsSymbol(function () {
        return "email1";
      }))()(H.formFieldsToMaybeOutputNil)())())(K)(K)(K)(K)(K)(K)(K)(K)(b.widgetMonad)(c)(a))(function (a) {
        if (a instanceof u.Left) return N(a.value0);
        if (a instanceof u.Right) return a = E.unwrapOutputFields(K)(J.hmapRecord()(J.mapRecordWithIndexCons(new q.IsSymbol(function () {
          return "contactType";
        }))(J.constMapping(E.unwrapField(p.newtypeOutputField)))(J.mapRecordWithIndexCons(new q.IsSymbol(function () {
          return "email1";
        }))(J.constMapping(E.unwrapField(p.newtypeOutputField)))(J.mapRecordWithIndexNil)()())()()))(a.value0), l.pure(b.widgetApplicative)({
          emailAddress: a.email1,
          contactType: a.contactType
        });
        throw Error("Failed pattern match at Metajelo.Forms.InstitutionContact (line 75, column 3 - line 79, column 70): " + [a.constructor.name]);
      });
    });
  };

  c.contactSignal = function (a) {
    var c = function c(a) {
      return f.step(a)(h.bind(b.widgetBind)(l.pure(b.widgetApplicative)(E.wrapInputFields(K)(J.hmapRecord()(J.mapRecordWithIndexCons(new q.IsSymbol(function () {
        return "contactType";
      }))(J.constMapping(E.wrapField(p.newtypeInputField)))(J.mapRecordWithIndexCons(new q.IsSymbol(function () {
        return "email1";
      }))(J.constMapping(E.wrapField(p.newtypeInputField)))(J.mapRecordWithIndexNil)()())()()))(T(a))))(function (d) {
        return h.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(D.monoidArray))(b.widgetShiftMap)([N(L.initFormState()(H.inputFieldsToFormFieldsCons(new q.IsSymbol(function () {
          return "contactType";
        }))()(H.inputFieldsToFormFieldsCons(new q.IsSymbol(function () {
          return "email1";
        }))()(H.inputFieldsToFormFieldsNil)())())(K)(K)(d)(M)), t.foldMap(t.foldableMaybe)(b.widgetMonoid(D.monoidArray))(S.contactWidg)(a)]))(function (a) {
          return l.pure(b.widgetApplicative)(c(new w.Just(a)));
        });
      }));
    };

    return e.div_(m.shiftMapCofree(D.monoidArray))([C.institutionContact])(c(a));
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
      u = a["Data.Either"],
      r = a["Data.Enum"],
      n = a["Data.Eq"],
      t = a["Data.Foldable"],
      v = a["Data.Functor"],
      w = a["Data.Maybe"],
      D = a["Data.Monoid"],
      z = a["Data.Show"],
      q = a["Data.String.NonEmpty.Internal"],
      x = a["Data.Symbol"],
      H = a["Effect.Class"],
      y = a["Effect.Class.Console"],
      G = a["Formless.Component"],
      E = a["Formless.Internal.Transform"],
      F = a["Formless.Query"],
      p = a["Formless.Retrieve"],
      J = a["Formless.Transform.Record"],
      C = a["Formless.Transform.Row"],
      L = a["Formless.Types.Form"],
      B = a["Formless.Validation"],
      I = a["Heterogeneous.Mapping"],
      S = a["Metajelo.CSS.UI.ClassProps"],
      Q = a["Metajelo.FormUtil"],
      M = a["Metajelo.Types"],
      P = a["Metajelo.Validation"],
      K = a["Metajelo.View"],
      V = a["Text.URL.Validate"],
      T = function T(a) {
    return function (a) {
      return function (b) {
        return C.mkSProxies()(a)(b)(L.FormProxy.value);
      };
    };
  },
      N = new a["Data.Newtype"].Newtype(function (a) {
    return a;
  }, function (a) {
    return a;
  }),
      U = function U(a) {
    return h.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(D.monoidArray))(b.widgetShiftMap)([e.span_(b.widgetShiftMap)([S.policy])(Q.menu(new x.IsSymbol(function () {
      return "polPolType";
    }))(Q.isOptionPolPolType)(Q.boundedEnumPolPolType)(N)()(N)()(a.form)(T()(N)(C.makeSProxiesCons(new x.IsSymbol(function () {
      return "appliesToProd";
    }))()(C.makeSProxiesCons(new x.IsSymbol(function () {
      return "polPolType";
    }))()(C.makeSProxiesCons(new x.IsSymbol(function () {
      return "policy";
    }))()(C.makeSProxiesCons(new x.IsSymbol(function () {
      return "policyType";
    }))()(C.makeSProxiesNil))))).polPolType)), e.input(k.widgetLiftWidget)([d.defaultValue(p.getInput(new x.IsSymbol(function () {
      return "policy";
    }))(N)()(T()(N)(C.makeSProxiesCons(new x.IsSymbol(function () {
      return "appliesToProd";
    }))()(C.makeSProxiesCons(new x.IsSymbol(function () {
      return "polPolType";
    }))()(C.makeSProxiesCons(new x.IsSymbol(function () {
      return "policy";
    }))()(C.makeSProxiesCons(new x.IsSymbol(function () {
      return "policyType";
    }))()(C.makeSProxiesNil))))).policy)(a.form)), v.map(g.functorProps)(function () {
      var a = F.setValidate(new x.IsSymbol(function () {
        return "policy";
      }))(N)()(T()(N)(C.makeSProxiesCons(new x.IsSymbol(function () {
        return "appliesToProd";
      }))()(C.makeSProxiesCons(new x.IsSymbol(function () {
        return "polPolType";
      }))()(C.makeSProxiesCons(new x.IsSymbol(function () {
        return "policy";
      }))()(C.makeSProxiesCons(new x.IsSymbol(function () {
        return "policyType";
      }))()(C.makeSProxiesNil))))).policy);
      return function (b) {
        return a(d.unsafeTargetValue(b));
      };
    }())(d.onChange)]), Q.errorDisplay(P.toTextString)(p.getError(new x.IsSymbol(function () {
      return "policy";
    }))(N)()(T()(N)(C.makeSProxiesCons(new x.IsSymbol(function () {
      return "appliesToProd";
    }))()(C.makeSProxiesCons(new x.IsSymbol(function () {
      return "polPolType";
    }))()(C.makeSProxiesCons(new x.IsSymbol(function () {
      return "policy";
    }))()(C.makeSProxiesCons(new x.IsSymbol(function () {
      return "policyType";
    }))()(C.makeSProxiesNil))))).policy)(a.form)), e.span_(b.widgetShiftMap)([S.policyType])(Q.menu(new x.IsSymbol(function () {
      return "policyType";
    }))(Q.isOptionMaybePolicyType)(r.boundedEnumMaybe(M.smallBoundedPolicyType)(M.boundedEnumPolicyType))(N)()(N)()(a.form)(T()(N)(C.makeSProxiesCons(new x.IsSymbol(function () {
      return "appliesToProd";
    }))()(C.makeSProxiesCons(new x.IsSymbol(function () {
      return "polPolType";
    }))()(C.makeSProxiesCons(new x.IsSymbol(function () {
      return "policy";
    }))()(C.makeSProxiesCons(new x.IsSymbol(function () {
      return "policyType";
    }))()(C.makeSProxiesNil))))).policyType)), e.span_(b.widgetShiftMap)([S.applies])(Q.menu(new x.IsSymbol(function () {
      return "appliesToProd";
    }))(Q.isOptionMaybeBoolean)(r.boundedEnumMaybe(r.smallBoundedBoolean)(r.boundedEnumBoolean))(N)()(N)()(a.form)(T()(N)(C.makeSProxiesCons(new x.IsSymbol(function () {
      return "appliesToProd";
    }))()(C.makeSProxiesCons(new x.IsSymbol(function () {
      return "polPolType";
    }))()(C.makeSProxiesCons(new x.IsSymbol(function () {
      return "policy";
    }))()(C.makeSProxiesCons(new x.IsSymbol(function () {
      return "policyType";
    }))()(C.makeSProxiesNil))))).appliesToProd)), e["div'"](b.widgetMultiAlternative(D.monoidArray))(b.widgetShiftMap)([v.voidRight(b.widgetFunctor)(F.submit)(Q.formSaveButton(a))])]))(function (c) {
      return h.bind(b.widgetBind)(G.eval()()(n.eqRowCons(n.eqRowCons(n.eqRowCons(n.eqRowCons(n.eqRowNil)()(new x.IsSymbol(function () {
        return "policyType";
      }))(L.eqInputField(w.eqMaybe(M.eqPolicyType))))()(new x.IsSymbol(function () {
        return "policy";
      }))(L.eqInputField(n.eqString)))()(new x.IsSymbol(function () {
        return "polPolType";
      }))(L.eqInputField(Q.eqPolPolType)))()(new x.IsSymbol(function () {
        return "appliesToProd";
      }))(L.eqInputField(w.eqMaybe(n.eqBoolean))))(E.inputFieldsToFormFieldsCons(new x.IsSymbol(function () {
        return "appliesToProd";
      }))()(E.inputFieldsToFormFieldsCons(new x.IsSymbol(function () {
        return "polPolType";
      }))()(E.inputFieldsToFormFieldsCons(new x.IsSymbol(function () {
        return "policy";
      }))()(E.inputFieldsToFormFieldsCons(new x.IsSymbol(function () {
        return "policyType";
      }))()(E.inputFieldsToFormFieldsNil)())())())())(E.inputFieldsToInputCons(new x.IsSymbol(function () {
        return "appliesToProd";
      }))()(E.inputFieldsToInputCons(new x.IsSymbol(function () {
        return "polPolType";
      }))()(E.inputFieldsToInputCons(new x.IsSymbol(function () {
        return "policy";
      }))()(E.inputFieldsToInputCons(new x.IsSymbol(function () {
        return "policyType";
      }))()(E.inputFieldsToInputNil)())())())())(E.consCountErrors(new x.IsSymbol(function () {
        return "appliesToProd";
      }))()(E.consCountErrors(new x.IsSymbol(function () {
        return "polPolType";
      }))()(E.consCountErrors(new x.IsSymbol(function () {
        return "policy";
      }))()(E.consCountErrors(new x.IsSymbol(function () {
        return "policyType";
      }))()(E.nilCountErrors)))))(E.consAllTouched(new x.IsSymbol(function () {
        return "appliesToProd";
      }))()(E.consAllTouched(new x.IsSymbol(function () {
        return "polPolType";
      }))()(E.consAllTouched(new x.IsSymbol(function () {
        return "policy";
      }))()(E.consAllTouched(new x.IsSymbol(function () {
        return "policyType";
      }))()(E.nilAllTouched)))))(E.setFormFieldsTouchedCons(new x.IsSymbol(function () {
        return "appliesToProd";
      }))()(E.setFormFieldsTouchedCons(new x.IsSymbol(function () {
        return "polPolType";
      }))()(E.setFormFieldsTouchedCons(new x.IsSymbol(function () {
        return "policy";
      }))()(E.setFormFieldsTouchedCons(new x.IsSymbol(function () {
        return "policyType";
      }))()(E.setFormFieldsTouchedNil)())())())())(E.replaceFormFieldInputsTouchedCons(new x.IsSymbol(function () {
        return "appliesToProd";
      }))(L.newtypeInputField)(L.newtypeFormField)()()()(E.replaceFormFieldInputsTouchedCons(new x.IsSymbol(function () {
        return "polPolType";
      }))(L.newtypeInputField)(L.newtypeFormField)()()()(E.replaceFormFieldInputsTouchedCons(new x.IsSymbol(function () {
        return "policy";
      }))(L.newtypeInputField)(L.newtypeFormField)()()()(E.replaceFormFieldInputsTouchedCons(new x.IsSymbol(function () {
        return "policyType";
      }))(L.newtypeInputField)(L.newtypeFormField)()()()(E.replaceFormFieldInputsTouchedNil)))))(E.modifyAllCons(new x.IsSymbol(function () {
        return "appliesToProd";
      }))(L.newtypeInputFunction)(L.newtypeFormField)()()()(E.modifyAllCons(new x.IsSymbol(function () {
        return "polPolType";
      }))(L.newtypeInputFunction)(L.newtypeFormField)()()()(E.modifyAllCons(new x.IsSymbol(function () {
        return "policy";
      }))(L.newtypeInputFunction)(L.newtypeFormField)()()()(E.modifyAllCons(new x.IsSymbol(function () {
        return "policyType";
      }))(L.newtypeInputFunction)(L.newtypeFormField)()()()(E.modifyAllNil)))))(E.applyToValidationCons(new x.IsSymbol(function () {
        return "appliesToProd";
      }))(b.widgetMonad)()(N)()()(E.applyToValidationCons(new x.IsSymbol(function () {
        return "polPolType";
      }))(b.widgetMonad)()(N)()()(E.applyToValidationCons(new x.IsSymbol(function () {
        return "policy";
      }))(b.widgetMonad)()(N)()()(E.applyToValidationCons(new x.IsSymbol(function () {
        return "policyType";
      }))(b.widgetMonad)()(N)()()(E.applyToValidationNil(b.widgetMonad))))))(E.formFieldsToMaybeOutputCons(new x.IsSymbol(function () {
        return "appliesToProd";
      }))()(E.formFieldsToMaybeOutputCons(new x.IsSymbol(function () {
        return "polPolType";
      }))()(E.formFieldsToMaybeOutputCons(new x.IsSymbol(function () {
        return "policy";
      }))()(E.formFieldsToMaybeOutputCons(new x.IsSymbol(function () {
        return "policyType";
      }))()(E.formFieldsToMaybeOutputNil)())())())())(N)(N)(N)(N)(N)(N)(N)(N)(b.widgetMonad)(c)(a))(function (a) {
        if (a instanceof u.Left) return U(a.value0);
        if (a instanceof u.Right) return a = J.unwrapOutputFields(N)(I.hmapRecord()(I.mapRecordWithIndexCons(new x.IsSymbol(function () {
          return "appliesToProd";
        }))(I.constMapping(J.unwrapField(L.newtypeOutputField)))(I.mapRecordWithIndexCons(new x.IsSymbol(function () {
          return "polPolType";
        }))(I.constMapping(J.unwrapField(L.newtypeOutputField)))(I.mapRecordWithIndexCons(new x.IsSymbol(function () {
          return "policy";
        }))(I.constMapping(J.unwrapField(L.newtypeOutputField)))(I.mapRecordWithIndexCons(new x.IsSymbol(function () {
          return "policyType";
        }))(I.constMapping(J.unwrapField(L.newtypeOutputField)))(I.mapRecordWithIndexNil)()())()())()())()()))(a.value0), l.pure(b.widgetApplicative)({
          policy: a.policy,
          policyType: a.policyType,
          appliesToProduct: a.appliesToProd
        });
        throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 102, column 3 - line 110, column 8): " + [a.constructor.name]);
      });
    });
  },
      W = {
    polPolType: Q.FreeTextPolicy.value,
    policy: "",
    policyType: w.Nothing.value,
    appliesToProd: w.Nothing.value
  },
      R = function R(a) {
    if (a instanceof w.Nothing) return W;

    if (a instanceof w.Just) {
      var b = a.value0.policy;
      if (b instanceof M.FreeTextPolicy) b = Q.FreeTextPolicy.value;else if (b instanceof M.RefPolicy) b = Q.RefPolicy.value;else throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 62, column 1 - line 62, column 38): " + [b.constructor.name]);
      var c = a.value0.policy;
      if (c instanceof M.FreeTextPolicy) c = q.toString(c.value0);else if (c instanceof M.RefPolicy) c = V.urlToString(c.value0);else throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 66, column 1 - line 66, column 36): " + [c.constructor.name]);
      return {
        polPolType: b,
        policy: c,
        policyType: a.value0.policyType,
        appliesToProd: a.value0.appliesToProduct
      };
    }

    throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 70, column 1 - line 70, column 56): " + [a.constructor.name]);
  },
      Z = {
    polPolType: P.dummy(b.widgetMonad),
    policy: function (a) {
      return B.hoistFnE(a)(function (a) {
        return function (b) {
          var c = p.getInput(new x.IsSymbol(function () {
            return "polPolType";
          }))(N)()(T()(N)(C.makeSProxiesCons(new x.IsSymbol(function () {
            return "appliesToProd";
          }))()(C.makeSProxiesCons(new x.IsSymbol(function () {
            return "polPolType";
          }))()(C.makeSProxiesCons(new x.IsSymbol(function () {
            return "policy";
          }))()(C.makeSProxiesCons(new x.IsSymbol(function () {
            return "policyType";
          }))()(C.makeSProxiesNil))))).polPolType)(a);
          if (c instanceof Q.FreeTextPolicy) return v.mapFlipped(u.functorEither)(P.readNEStringEi(b))(M.FreeTextPolicy.create);
          if (c instanceof Q.RefPolicy) return v.mapFlipped(u.functorEither)(V.parsePublicURL(b))(M.RefPolicy.create);
          throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 128, column 6 - line 130, column 54): " + [c.constructor.name]);
        };
      });
    }(b.widgetMonad),
    policyType: P.dummy(b.widgetMonad),
    appliesToProd: P.dummy(b.widgetMonad)
  },
      A = function A(a) {
    var c = function c(a) {
      return f.step(a)(h.bind(b.widgetBind)(l.pure(b.widgetApplicative)(J.wrapInputFields(N)(I.hmapRecord()(I.mapRecordWithIndexCons(new x.IsSymbol(function () {
        return "appliesToProd";
      }))(I.constMapping(J.wrapField(L.newtypeInputField)))(I.mapRecordWithIndexCons(new x.IsSymbol(function () {
        return "polPolType";
      }))(I.constMapping(J.wrapField(L.newtypeInputField)))(I.mapRecordWithIndexCons(new x.IsSymbol(function () {
        return "policy";
      }))(I.constMapping(J.wrapField(L.newtypeInputField)))(I.mapRecordWithIndexCons(new x.IsSymbol(function () {
        return "policyType";
      }))(I.constMapping(J.wrapField(L.newtypeInputField)))(I.mapRecordWithIndexNil)()())()())()())()()))(R(a))))(function (d) {
        return h.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(D.monoidArray))(b.widgetShiftMap)([U(Q.initFormState()(E.inputFieldsToFormFieldsCons(new x.IsSymbol(function () {
          return "appliesToProd";
        }))()(E.inputFieldsToFormFieldsCons(new x.IsSymbol(function () {
          return "polPolType";
        }))()(E.inputFieldsToFormFieldsCons(new x.IsSymbol(function () {
          return "policy";
        }))()(E.inputFieldsToFormFieldsCons(new x.IsSymbol(function () {
          return "policyType";
        }))()(E.inputFieldsToFormFieldsNil)())())())())(N)(N)(d)(Z)), t.foldMap(t.foldableMaybe)(b.widgetMonoid(D.monoidArray))(K.ipolicyWidg)(a)]))(function (a) {
          return h.discard(h.discardUnit)(b.widgetBind)(H.liftEffect(b.widgetMonadEff(D.monoidArray))(y.logShow(H.monadEffectEffect)(z.showRecord()(z.showRecordFieldsCons(new x.IsSymbol(function () {
            return "appliesToProduct";
          }))(z.showRecordFieldsCons(new x.IsSymbol(function () {
            return "policy";
          }))(z.showRecordFieldsCons(new x.IsSymbol(function () {
            return "policyType";
          }))(z.showRecordFieldsNil)(w.showMaybe(M.showPolicyType)))(M.showPolicy))(w.showMaybe(z.showBoolean))))(a)))(function () {
            return l.pure(b.widgetApplicative)(c(new w.Just(a)));
          });
        });
      }));
    };

    return e.div_(m.shiftMapCofree(D.monoidArray))([S.institutionPolicy])(c(a));
  };

  c.policySigArray = function (a) {
    return e.div_(m.shiftMapCofree(D.monoidArray))([S.institutionPolicies])(Q.nonEmptyArrayView(A)(a));
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
      u = a["Web.DOM.Element"],
      r = a["Web.DOM.HTMLCollection"],
      n = a["Web.DOM.Node"],
      t = function t(a) {
    return function (b) {
      if (a instanceof l.Nothing) return new e.Right(b);
      if (a instanceof l.Just) return new e.Left(a.value0);
      throw Error("Failed pattern match at Web.DOM.DOMParser (line 73, column 30 - line 75, column 21): " + [a.constructor.name]);
    };
  },
      v = function v(a) {
    return function () {
      var c = g.join(h.bindEffect)(d.map(h.functorEffect)(r.toArray)(m.getElementsByTagName("parsererror")(a)))();
      c = b.head(c);
      c = d.map(l.functorMaybe)(u.toNode)(c);
      if (c instanceof l.Nothing) c = k.pure(h.applicativeEffect)(l.Nothing.value);else if (c instanceof l.Just) c = d.map(h.functorEffect)(l.Just.create)(n.textContent(c.value0));else throw Error("Failed pattern match at Web.DOM.DOMParser (line 65, column 23 - line 67, column 45): " + [c.constructor.name]);
      return c();
    };
  };

  c.parseXMLFromString = function (a) {
    return function (b) {
      return function () {
        var c = f.parseFromString("application/xml")(a)(b)(),
            d = v(c)();
        return t(d)(c);
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
      u = a["Data.XPath"],
      r = a.Effect,
      n = a["Effect.Exception"],
      t = a["Web.DOM.DOMParser"],
      v = a["Web.DOM.Document"],
      w = a["Web.DOM.Document.XPath"],
      D = a["Web.DOM.Document.XPath.ResultType"],
      z = a["Web.DOM.Element"],
      q = a["Web.DOM.HTMLCollection"];
  a = u.pathAppendNSx(u.stringXPath)(u.root(u.stringXPath))("record");

  var x = function x(a) {
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
            return k.bind(r.bindEffect)(w.evaluate(d)(c)(b)(D.any_unordered_node_type)(h.Nothing.value)(a))(w.singleNodeValue);
          };
        }
      };
    };
  },
      H = g["cons'"]("http://ourdomain.cornell.edu/reuse/v.01")([]),
      y = function y(a) {
    var c = function c(b) {
      return function () {
        var c = v.getElementsByTagNameNS(new h.Just(b))("record")(a)();
        return q.item(0)(c)();
      };
    };

    return function () {
      var e = v.getElementsByTagName("record")(a)();
      e = q.item(0)(e)();
      if (e instanceof h.Nothing) e = m.sequence(b.traversableNonEmptyArray)(r.applicativeEffect)(l.map(b.functorNonEmptyArray)(c)(H))(), e = k.join(h.bindMaybe)(d.find(b.foldableNonEmptyArray)(h.isJust)(e));else if (e instanceof h.Just) e = new h.Just(e.value0);else throw Error("Failed pattern match at Metajelo.XPaths (line 275, column 16 - line 279, column 38): " + [e.constructor.name]);
      return l.map(h.functorMaybe)(z.toNode)(e);
    };
  };

  g = u.pathAppendNSx(u.stringXPath)(a)("lastModified");

  var G = function G(a) {
    var b = function b(a) {
      return h.fromMaybe("http://ourdomain.cornell.edu/reuse/v.01")(a);
    };

    if (a instanceof h.Nothing) return f.pure(r.applicativeEffect)("http://ourdomain.cornell.edu/reuse/v.01");
    if (a instanceof h.Just) return l.map(r.functorEffect)(b)(z.getAttribute("xmlns")(a.value0));
    throw Error("Failed pattern match at Metajelo.XPaths (line 183, column 3 - line 185, column 59): " + [a.constructor.name]);
  },
      E = function E(a) {
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
            e = z.fromNode(a);
        e = G(e)();
        return w.customNSResolver(c(d)(e));
      };
    };
  };

  u = u.pathAppendNSx(u.stringXPath)(a)("date");
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
  c.dateRootP = u;
  c.lastModRootP = g;

  c.getDefaultParseEnv = function (a) {
    return function () {
      var b = t.makeDOMParser();
      b = t.parseXMLFromString(a)(b)();
      if (b instanceof e.Left) b = n["throw"]("XML parsing error: " + b.value0)();else if (b instanceof e.Right) b = b.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 243, column 13 - line 245, column 26): " + [b.constructor.name]);
      var c = y(b)();
      if (c instanceof h.Nothing) c = n["throw"]("Could not find <record> node!")();else if (c instanceof h.Just) c = c.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 247, column 14 - line 249, column 23): " + [c.constructor.name]);
      var d = z.fromNode(c);
      if (d instanceof h.Nothing) d = n["throw"]("<record> node could not be cast to an element!")();else if (d instanceof h.Just) d = d.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 250, column 14 - line 252, column 23): " + [d.constructor.name]);
      var f = G(new h.Just(d))(),
          g = E(c)(b)();
      g = x(b)(new h.Just(g));
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
      u = a["Metajelo.Types"],
      r = a["Metajelo.XPaths"],
      n = a["Nonbili.DOM"],
      t = a["Text.Email.Parser"],
      v = a["Text.URL.Validate"],
      w = a["Web.DOM.Document"],
      D = a["Web.DOM.Element"],
      z = a["Web.DOM.Node"],
      q = function q(a) {
    return function (c) {
      return function (c) {
        return function (f) {
          var h = D.fromNode(c);
          return function () {
            d.sequence(d.traversableMaybe)(m.applicativeEffect)(g.mapFlipped(b.functorMaybe)(h)(function (b) {
              return D.setAttribute(a)(e.show(u.showIdentifierType)(f))(b);
            }))();
            return l.unit;
          };
        };
      };
    };
  },
      x = a["Data.String.NonEmpty.Internal"].toString,
      H = function H(a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function () {
            z.setTextContent(x(d.id))(c)();
            return q(a)(b)(c)(d.idType)();
          };
        };
      };
    };
  },
      y = function y(a) {
    return function (b) {
      return function () {
        var c = r.unsafeSingleNodeValue(a)(a.recNode)(h.xx(h.stringXPath)(r.idP))();
        return H(r.idTypeAT)(a)(c)(b)();
      };
    };
  },
      G = function G(a) {
    return function (c) {
      return function () {
        d.sequence(d.traversableMaybe)(m.applicativeEffect)(g.map(b.functorMaybe)(z.setTextContent(x(a)))(c))();
        return l.unit;
      };
    };
  },
      E = function E(a) {
    return function (b) {
      return function () {
        var c = a.xevalRoot.nodeMay(r.dateRootP)();
        return G(b)(c)();
      };
    };
  },
      F = function F(a) {
    return function (b) {
      return function () {
        var c = a.xevalRoot.nodeMay(r.lastModRootP)();
        return G(b)(c)();
      };
    };
  },
      p = function p(a) {
    return function (c) {
      var d = D.prefix(a.recElem);
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
          var d = p(a)(c)();
          z.appendChild(D.toNode(d))(b)();
          return d;
        };
      };
    };
  },
      C = function C(a) {
    return function (b) {
      return function (c) {
        return function () {
          var d = g.map(m.functorEffect)(D.toNode)(J(a)(b)(r.basicMetaP))(),
              e = g.map(m.functorEffect)(D.toNode)(J(a)(d)(r.titleP))();
          z.setTextContent(x(c.title))(e)();
          e = g.map(m.functorEffect)(D.toNode)(J(a)(d)(r.creatorP))();
          z.setTextContent(x(c.creator))(e)();
          d = g.map(m.functorEffect)(D.toNode)(J(a)(d)(r.pubYearP))();
          return z.setTextContent(x(c.publicationYear))(d)();
        };
      };
    };
  },
      L = function L(a) {
    return function (c) {
      return function (f) {
        return function () {
          var h = J(a)(c)(r.instContactP)();
          d.sequence(d.traversableMaybe)(m.applicativeEffect)(g.mapFlipped(b.functorMaybe)(f.contactType)(function (a) {
            return D.setAttribute(r.instContactTypeAT)(e.show(u.showInstitutionContactType)(a))(h);
          }))();
          return z.setTextContent(t.toString(f.emailAddress))(D.toNode(h))();
        };
      };
    };
  },
      B = function B(a) {
    return function (b) {
      return function (c) {
        return function () {
          var d = g.map(m.functorEffect)(D.toNode)(J(a)(b)(r.instIdP))();
          return H(r.idTypeAT)(a)(d)(c)();
        };
      };
    };
  },
      I = function I(a) {
    return function (b) {
      return k.for_(m.applicativeEffect)(f.foldableNonEmptyArray)(b)(function (b) {
        return function () {
          var c = J(a)(a.recNode)(r.relIdP)(),
              d = D.toNode(c);
          z.setTextContent(x(b.id))(d)();
          D.setAttribute(r.relIdTypeAT)(e.show(u.showIdentifierType)(b.idType))(c)();
          return D.setAttribute(r.relTypeAT)(e.show(u.showRelationType)(b.relType))(c)();
        };
      });
    };
  },
      S = function S(a) {
    return function (b) {
      return function (c) {
        return function () {
          var d = g.map(m.functorEffect)(D.toNode)(J(a)(b)(r.resIdP))();
          return H(r.resIdTypeAT)(a)(d)(c)();
        };
      };
    };
  },
      Q = function Q(a) {
    return function (b) {
      return function (c) {
        return function () {
          var d = J(a)(b)(r.resMetaSourceP)();
          z.setTextContent(v.urlToString(c.url))(D.toNode(d))();
          return D.setAttribute(r.relTypeAT)(e.show(u.showRelationType)(c.relationType))(d)();
        };
      };
    };
  },
      M = function M(a) {
    return function (b) {
      return function (c) {
        return function () {
          var d = J(a)(b)(r.resTypeP)();
          z.setTextContent(c.description)(D.toNode(d))();
          return D.setAttribute(r.resTypeGenAT)(e.show(u.showResourceTypeGeneral)(c.generalType))(d)();
        };
      };
    };
  },
      P = function P(a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function () {
            var e = g.map(m.functorEffect)(D.toNode)(J(b)(c)(a))();
            return z.setTextContent(d)(e)();
          };
        };
      };
    };
  },
      K = function K(a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return P(a)(b)(c)(x(d));
        };
      };
    };
  },
      V = function V(a) {
    return function (b) {
      return function (c) {
        return function () {
          var d = g.map(m.functorEffect)(D.toNode)(J(a)(b)(r.formatCP))();
          return k.for_(m.applicativeEffect)(k.foldableArray)(c)(function (b) {
            return K(r.formatP)(a)(d)(b);
          })();
        };
      };
    };
  },
      T = function T(a) {
    return function (c) {
      return function (f) {
        return function () {
          var h = J(a)(c)(r.instPolicyP)(),
              k = D.toNode(h);
          d.sequence(d.traversableMaybe)(m.applicativeEffect)(g.mapFlipped(b.functorMaybe)(f.policyType)(function (a) {
            return D.setAttribute(r.polTypeAT)(e.show(u.showPolicyType)(a))(h);
          }))();
          d.sequence(d.traversableMaybe)(m.applicativeEffect)(g.mapFlipped(b.functorMaybe)(f.appliesToProduct)(function (a) {
            return D.setAttribute(r.appliesToProdAT)(e.show(e.showBoolean)(a))(h);
          }))();
          if (f.policy instanceof u.FreeTextPolicy) return K(r.freeTextPolicyP)(a)(k)(f.policy.value0)();
          if (f.policy instanceof u.RefPolicy) return K(r.refPolicyP)(a)(k)(v.urlToNEString(f.policy.value0))();
          throw Error("Failed pattern match at Metajelo.XPaths.Write (line 202, column 3 - line 205, column 27): " + [f.policy.constructor.name]);
        };
      };
    };
  },
      N = function N(a) {
    return function (b) {
      return function (c) {
        return function () {
          var d = g.map(m.functorEffect)(D.toNode)(J(a)(b)(r.instPolicyCP))();
          return k.for_(m.applicativeEffect)(f.foldableNonEmptyArray)(c)(function (b) {
            return T(a)(d)(b);
          })();
        };
      };
    };
  },
      U = function U(a) {
    return function (b) {
      return function (c) {
        return function () {
          var d = g.map(m.functorEffect)(D.toNode)(J(a)(b)(r.instSustainP))();
          K(r.missionUrlP)(a)(d)(v.urlToNEString(c.missionStatementURL))();
          return K(r.fundingUrlP)(a)(d)(v.urlToNEString(c.fundingStatementURL))();
        };
      };
    };
  },
      W = function W(a) {
    return function (c) {
      return function (f) {
        return function () {
          var h = J(a)(c)(r.locP)(),
              k = D.toNode(h);
          B(a)(k)(f.institutionID)();
          K(r.instNameP)(a)(k)(f.institutionName)();
          P(r.instTypeP)(a)(k)(e.show(u.showInstitutionType)(f.institutionType))();
          d.sequence(d.traversableMaybe)(m.applicativeEffect)(g.mapFlipped(b.functorMaybe)(f.superOrganizationName)(function (b) {
            return K(r.superOrgNameP)(a)(k)(b);
          }))();
          L(a)(k)(f.institutionContact)();
          U(a)(k)(f.institutionSustainability)();
          N(a)(k)(f.institutionPolicies)();
          return P(r.versioningP)(a)(k)(e.show(e.showBoolean)(f.versioning))();
        };
      };
    };
  },
      R = function R(a) {
    return function (c) {
      return function () {
        var e = r.unsafeSingleNodeValue(a)(a.recNode)(h.xx(h.stringXPath)(r.sProdCP))(),
            f = g.map(m.functorEffect)(D.toNode)(J(a)(e)(r.sProdP))();
        C(a)(f)(c.basicMetadata)();
        d.sequence(d.traversableMaybe)(m.applicativeEffect)(g.mapFlipped(b.functorMaybe)(c.resourceID)(function (b) {
          return S(a)(f)(b);
        }))();
        M(a)(f)(c.resourceType)();
        V(a)(f)(c.format)();
        d.sequence(d.traversableMaybe)(m.applicativeEffect)(g.mapFlipped(b.functorMaybe)(c.resourceMetadataSource)(function (b) {
          return Q(a)(f)(b);
        }))();
        return W(a)(f)(c.location)();
      };
    };
  },
      Z = function Z(a) {
    return function (b) {
      return k.for_(m.applicativeEffect)(f.foldableNonEmptyArray)(b)(function (b) {
        return R(a)(b);
      });
    };
  },
      A = function A(a) {
    return function (b) {
      return function () {
        y(a)(b.identifier)();
        E(a)(b.date)();
        F(a)(b.lastModified)();
        I(a)(b.relatedIdentifiers)();
        return Z(a)(b.supplementaryProducts)();
      };
    };
  };

  a["Metajelo.XPaths.Write"].recordToString = function (a) {
    return function () {
      var d = r.getDefaultParseEnv('<?xml version="1.0" encoding="UTF-8"?>\n<record xmlns:re3="http://www.re3data.org/schema/2-2"\n xmlns:datacite="http://datacite.org/schema/kernel-4"\n xmlns="http://ourdomain.cornell.edu/reuse/v.01"\n xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n xsi:schemaLocation="http://ourdomain.cornell.edu/reuse/v.01 file:/Users/clagoze/Downloads/metajelo-master/schema/xsd/reproMetadata0.7.xsd">\n    <identifier></identifier>\n    <date></date>\n    <lastModified></lastModified>\n    <supplementaryProducts>\n    </supplementaryProducts>\n</record>\n')();
      A(d)(a)();
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
      u = a["Foreign.Object"],
      r = a.Record,
      n = a["Record.Extra"],
      t = a["Type.Data.Row"],
      v = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      w = function w(a) {
    this.getAllOption = a;
  },
      D = function D(a) {
    this["getAll'"] = a;
  },
      z = function z(a) {
    return function (a) {
      return function (a) {
        a = b.fromFoldable(l.foldableList)(n.keys()(a)(t.RProxy.value));
        return e.runFn2(f.pickFn)(a);
      };
    };
  };

  a = new w(function (a) {
    return function (a) {
      return new h.Just({});
    };
  });

  var q = function q(a) {
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
      x = function x(a) {
    return function (b) {
      return function (b) {
        return function (b) {
          return function (c) {
            return q(a)(function (a) {
              return h.Nothing.value;
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
          return q(a)(function (a) {
            return a;
          })(b)(c).value;
        };
      };
    };
  },
      y = function y(a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return function (d) {
            return q(a)(function (a) {
              return new h.Just(c);
            })(b)(d).option;
          };
        };
      };
    };
  },
      G = function G(a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return function (d) {
            if (c instanceof h.Just) return y(a)()(b)(c.value0)(d);
            if (c instanceof h.Nothing) return d;
            throw Error("Failed pattern match at Option (line 1408, column 25 - line 1410, column 28): " + [c.constructor.name]);
          };
        };
      };
    };
  };

  c.empty = u.empty;
  c.get = H;

  c.getAll = function (a) {
    return a["getAll'"];
  };

  c.getSubset = function (a) {
    return function (a) {
      return function (a) {
        return function (b) {
          return function (c) {
            return (0, b["getAll'"])(z()()(a)(c));
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
            d = H(a)()(c)(d);
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
            return k.put(g.monadStateStateT(d.monadIdentity))(G(a)()(b)(c)(e));
          };
        };
      };
    };
  };

  c.getAllAny = function (a) {
    return function (a) {
      return new D((0, a.getAllOption)(v.value));
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
                  var d = x(a)()()(m.SProxy.value)(c);
                  d = (0, b.getAllOption)(v.value)(d);
                  c = H(a)()(m.SProxy.value)(c);

                  if (d instanceof h.Just) {
                    if (c instanceof h.Just) return new h.Just(r.insert(a)()()(m.SProxy.value)(c.value0)(d.value0));
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
      u = a["Control.Monad.State"],
      r = a["Control.Monad.State.Class"],
      n = a["Control.Monad.State.Trans"],
      t = a["Control.Plus"],
      v = a["Data.Array.NonEmpty.Internal"],
      w = a["Data.Either"],
      D = a["Data.Foldable"],
      z = a["Data.Functor"],
      q = a["Data.Identity"],
      x = a["Data.Maybe"],
      H = a["Data.Maybe.First"],
      y = a["Data.Monoid"],
      G = a["Data.Semigroup"],
      E = a["Data.String.Common"],
      F = a["Data.String.NonEmpty.Internal"],
      p = a["Data.Symbol"],
      J = a["Data.Traversable"],
      C = a["Data.Tuple"],
      L = a.Effect,
      B = a["Effect.Class"],
      I = a["Effect.Class.Console"],
      S = a["Effect.Now"],
      Q = a.Global,
      M = a["Metajelo.CSS.UI.ClassProps"],
      P = a["Metajelo.CSS.Web.ClassProps"],
      K = a["Metajelo.FormUtil"],
      V = a["Metajelo.Forms.InstitutionContact"],
      T = a["Metajelo.Forms.InstitutionPolicy"],
      N = a["Metajelo.Types"],
      U = a["Metajelo.View"],
      W = a["Metajelo.XPaths.Read"],
      R = a["Metajelo.XPaths.Write"],
      Z = a["Nonbili.DOM"],
      A = a.Option,
      O = a["Record.Extra"],
      da = a["Web.DOM.Document"],
      fa = a["Web.DOM.Element"],
      Y = a["Web.HTML"],
      la = a["Web.HTML.HTMLDocument"],
      ca = a["Web.HTML.HTMLElement"],
      ma = a["Web.HTML.Window"],
      ea = function ea(a) {
    return b.div_(m.shiftMapCofree(y.monoidArray))([M.tooltip])(a);
  };

  a = b.div_(g.widgetShiftMap)([M.tooltip])(t.empty(g.widgetPlus(y.monoidArray)));

  var ha = function ha(a) {
    return function () {
      var b = Y.window();
      b = ma.document(b)();
      b = la.toDocument(b);
      b = da.createElement("a")(b)();
      fa.setAttribute("download")("metajelo.xml")(b)();
      fa.setAttribute("href")("data:text/plain;charset=utf-8," + a)(b)();
      b = ca.fromElement(b);
      if (b instanceof x.Just) b = ca.click(b.value0);else if (b instanceof x.Nothing) b = I.log(B.monadEffectEffect)("Couldn't create HTMLElement to click with encoded string" + a);else throw Error("Failed pattern match at Metajelo.UI (line 103, column 26 - line 107, column 18): " + [b.constructor.name]);
      return b;
    };
  },
      X = function X(a) {
    return function (b) {
      return A.getWithDefault(a)()(A.empty);
    };
  },
      ba = function ba(a) {
    return b.div_(m.shiftMapCofree(y.monoidArray))([M.format])(ea(K.textInput(a)));
  },
      aa = function aa(a) {
    return b.div_(m.shiftMapCofree(y.monoidArray))([M.formatList])(K.arrayView(ba)(a));
  },
      ka = function ka(a) {
    return function () {
      return {
        lastModified: h.join(L.bindEffect)(z.map(L.functorEffect)(z.map(z.functorFn)(W.rightOrThrow)(K.formatXsdDate))(S.nowDateTime))(),
        date: a.date,
        identifier: a.identifier,
        relatedIdentifiers: a.relatedIdentifiers,
        supplementaryProducts: a.supplementaryProducts
      };
    };
  },
      na = function na(a) {
    var c = b.div_(g.widgetShiftMap)([P.errorDisplayBox])(b.div_(g.widgetShiftMap)([])(b.span(g.widgetMultiAlternative(y.monoidArray))(g.widgetShiftMap)([P.errorDisplay])([b.text(k.widgetLiftWidget)("Couldn't encode XML, please copy to clipboard instead.")]))),
        d = function d(a) {
      return function (c) {
        var d = function d(c) {
          return f.step(c)(h.bind(g.widgetBind)(b.button_(g.widgetShiftMap)([M.downloadBtn, e.onClick, e.disabled(E["null"](c))])(b.text(k.widgetLiftWidget)("Download")))(function () {
            return h.bind(g.widgetBind)(B.liftEffect(g.widgetMonadEff(y.monoidArray))(a))(function () {
              return l.pure(g.widgetApplicative)(d(c));
            });
          }));
        };

        return f.dyn(d(c));
      };
    };

    return b.div_(g.widgetShiftMap)([])(function () {
      var b = Q.encodeURIComponent(a);
      return h.bind(g.widgetBind)(B.liftEffect(g.widgetMonadEff(y.monoidArray))(ha(x.fromMaybe("")(b))))(function (a) {
        return x.maybe(c)(d(a))(b);
      });
    }());
  },
      qa = function qa(a) {
    var c = function c(a) {
      return f.step(a)(h.bind(g.widgetBind)(b.button_(g.widgetShiftMap)([M.clipBtn, e.onClick, e.disabled(E["null"](a))])(b.text(k.widgetLiftWidget)("Copy to Clipboard")))(function () {
        return h.bind(g.widgetBind)(B.liftEffect(g.widgetMonadEff(y.monoidArray))(Z.copyToClipboard(a)))(function () {
          return l.pure(g.widgetApplicative)(c(a));
        });
      }));
    };

    return f.dyn(c(a));
  },
      pa = function pa(a) {
    return b.div_(m.shiftMapCofree(y.monoidArray))([M.sustainability])(h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(b.span_(m.shiftMapCofree(y.monoidArray))([M.missionStatement])(K.urlInput(A.getWithDefault(new p.IsSymbol(function () {
      return "missionUrl_Ei";
    }))()(new w.Left(""))(p.SProxy.value)(a))))(function (c) {
      var d = w.hush(c);
      return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(b.span_(m.shiftMapCofree(y.monoidArray))([M.fundingStatement])(K.urlInput(A.getWithDefault(new p.IsSymbol(function () {
        return "fundingUrl_Ei";
      }))()(new w.Left(""))(p.SProxy.value)(a))))(function (b) {
        var e = w.hush(b);
        return l.pure(m.applicativeCofree(g.widgetAlternative(y.monoidArray)))(u.execState(h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
          return "missionUrl_Ei";
        }))()(p.SProxy.value)(new x.Just(c))))(function () {
          return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
            return "missionStatementURL";
          }))()(p.SProxy.value)(d)))(function () {
            return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
              return "fundingUrl_Ei";
            }))()(p.SProxy.value)(new x.Just(b))))(function () {
              return h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                return "fundingStatementURL";
              }))()(p.SProxy.value)(e));
            });
          });
        }))(a));
      });
    }));
  },
      ra = function ra(a) {
    return b.div_(m.shiftMapCofree(y.monoidArray))([M.resourceType])(h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(m.shiftMapCofree(y.monoidArray))([])(b.span_(m.shiftMapCofree(y.monoidArray))([M.resourceTypeGen])(K.menuSignal(N.boundedEnumResourceTypeGeneral)(K.isOptionResourceTypeGeneral)(A.get(new p.IsSymbol(function () {
      return "generalType";
    }))()(p.SProxy.value)(a)))))(function (c) {
      return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(m.shiftMapCofree(y.monoidArray))([])(b.span_(m.shiftMapCofree(y.monoidArray))([M.resourceTypeDescr])(K.textInput(h.join(x.bindMaybe)(z.map(x.functorMaybe)(F.fromString)(A.get(new p.IsSymbol(function () {
        return "description";
      }))()(p.SProxy.value)(a)))))))(function (b) {
        return l.pure(m.applicativeCofree(g.widgetAlternative(y.monoidArray)))(u.execState(h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
          return "description";
        }))()(p.SProxy.value)(z.map(x.functorMaybe)(F.toString)(b))))(function () {
          return h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
            return "generalType";
          }))()(p.SProxy.value)(c));
        }))(a));
      });
    }));
  },
      ja = function ja(a) {
    return b.div_(m.shiftMapCofree(y.monoidArray))([M.resourceMDSource])(h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(m.shiftMapCofree(y.monoidArray))([])(b.span_(m.shiftMapCofree(y.monoidArray))([M.url])(K.urlInput(A.getWithDefault(new p.IsSymbol(function () {
      return "url_Ei";
    }))()(new w.Left(""))(p.SProxy.value)(a)))))(function (c) {
      var d = w.hush(c);
      return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(m.shiftMapCofree(y.monoidArray))([])(b.span_(m.shiftMapCofree(y.monoidArray))([M.relType])(K.menuSignal(N.boundedEnumRelationType)(K.isOptionRelationType)(A.get(new p.IsSymbol(function () {
        return "relationType";
      }))()(p.SProxy.value)(a)))))(function (b) {
        return l.pure(m.applicativeCofree(g.widgetAlternative(y.monoidArray)))(u.execState(h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
          return "url_Ei";
        }))()(p.SProxy.value)(new x.Just(c))))(function () {
          return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
            return "url";
          }))()(p.SProxy.value)(d)))(function () {
            return h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
              return "relationType";
            }))()(p.SProxy.value)(b));
          });
        }))(a));
      });
    }));
  },
      sa = function sa(a) {
    var c = x.fromMaybe(A.empty)(a);
    return b.div_(m.shiftMapCofree(y.monoidArray))([M.relatedId])(h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(m.shiftMapCofree(y.monoidArray))([])(b.span_(m.shiftMapCofree(y.monoidArray))([M.id])(K.textInput(A.get(new p.IsSymbol(function () {
      return "id";
    }))()(p.SProxy.value)(c)))))(function (a) {
      return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(m.shiftMapCofree(y.monoidArray))([])(b.span_(m.shiftMapCofree(y.monoidArray))([M.idType])(K.menuSignal(N.boundedEnumIdentifierType)(K.isOptionIdentifierType)(A.get(new p.IsSymbol(function () {
        return "idType";
      }))()(p.SProxy.value)(c)))))(function (d) {
        return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(m.shiftMapCofree(y.monoidArray))([])(b.span_(m.shiftMapCofree(y.monoidArray))([M.relType])(K.menuSignal(N.boundedEnumRelationType)(K.isOptionRelationType)(A.get(new p.IsSymbol(function () {
          return "relType";
        }))()(p.SProxy.value)(c)))))(function (b) {
          return l.pure(m.applicativeCofree(g.widgetAlternative(y.monoidArray)))(x.Just.create(u.execState(h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
            return "id";
          }))()(p.SProxy.value)(a)))(function () {
            return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
              return "idType";
            }))()(p.SProxy.value)(d)))(function () {
              return h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                return "relType";
              }))()(p.SProxy.value)(b));
            });
          }))(c)));
        });
      });
    }));
  },
      Da = function Da(a) {
    return b.div_(m.shiftMapCofree(y.monoidArray))([M.relatedIds])(b.span_(m.shiftMapCofree(y.monoidArray))([M.relatedIdsHeader])(b.div_(m.shiftMapCofree(y.monoidArray))([M.relatedIdList])(K.nonEmptyArrayView(sa)(a))));
  },
      oa = function oa(a) {
    return b.div_(m.shiftMapCofree(y.monoidArray))([M.identifier])(h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(m.shiftMapCofree(y.monoidArray))([])(b.span_(m.shiftMapCofree(y.monoidArray))([M.id])(K.textInput(A.get(new p.IsSymbol(function () {
      return "id";
    }))()(p.SProxy.value)(a)))))(function (c) {
      return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(m.shiftMapCofree(y.monoidArray))([])(b.span_(m.shiftMapCofree(y.monoidArray))([M.idType])(K.menuSignal(N.boundedEnumIdentifierType)(K.isOptionIdentifierType)(A.get(new p.IsSymbol(function () {
        return "idType";
      }))()(p.SProxy.value)(a)))))(function (b) {
        return l.pure(m.applicativeCofree(g.widgetAlternative(y.monoidArray)))(u.execState(h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
          return "id";
        }))()(p.SProxy.value)(c)))(function () {
          return h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
            return "idType";
          }))()(p.SProxy.value)(b));
        }))(a));
      });
    }));
  },
      za = function za(a) {
    var c = function c(a) {
      return b.div(g.widgetMultiAlternative(y.monoidArray))(g.widgetShiftMap)([M.locPreview])([b["br'"](k.widgetLiftWidget), D.foldMap(D.foldableMaybe)(g.widgetMonoid(y.monoidArray))(function (a) {
        return D.fold(D.foldableArray)(g.widgetMonoid(y.monoidArray))(U.spacify(U.locElems(a)));
      })(a)]);
    },
        d = x.fromMaybe(A.empty)(a);

    return b.div_(m.shiftMapCofree(y.monoidArray))([M.location])(h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(m.shiftMapCofree(y.monoidArray))([])(b.span_(m.shiftMapCofree(y.monoidArray))([M.institutionId])(oa(X(new p.IsSymbol(function () {
      return "institutionID_opt";
    }))()(p.SProxy.value)(d)))))(function (a) {
      var e = A.getAll(A.getAllAny()(A.getAllOptionCons(new p.IsSymbol(function () {
        return "id";
      }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
        return "idType";
      }))()()()()(A.getAllOptionNil))))(a);
      return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(m.shiftMapCofree(y.monoidArray))([])(b.span_(m.shiftMapCofree(y.monoidArray))([M.institutionName])(K.textInput(A.get(new p.IsSymbol(function () {
        return "institutionName";
      }))()(p.SProxy.value)(d)))))(function (t) {
        return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(m.shiftMapCofree(y.monoidArray))([])(b.span_(m.shiftMapCofree(y.monoidArray))([M.institutionType])(K.menuSignal(N.boundedEnumInstitutionType)(K.isOptionInstitutionType)(A.get(new p.IsSymbol(function () {
          return "institutionType";
        }))()(p.SProxy.value)(d)))))(function (v) {
          return h.discard(h.discardUnit)(m.bindCofree(g.widgetAlternative(y.monoidArray)))(f.display(b["br'"](k.widgetLiftWidget)))(function () {
            return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(m.shiftMapCofree(y.monoidArray))([])(b.span_(m.shiftMapCofree(y.monoidArray))([M.superOrg])(K.textInput(h.join(x.bindMaybe)(A.get(new p.IsSymbol(function () {
              return "superOrganizationName";
            }))()(p.SProxy.value)(d))))))(function (k) {
              return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(V.contactSignal(A.get(new p.IsSymbol(function () {
                return "institutionContact";
              }))()(p.SProxy.value)(d)))(function (w) {
                return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(pa(X(new p.IsSymbol(function () {
                  return "iSustain_opt";
                }))()(p.SProxy.value)(d)))(function (z) {
                  var B = A.getSubset()()(O.consKeys(new p.IsSymbol(function () {
                    return "fundingStatementURL";
                  }))(O.consKeys(new p.IsSymbol(function () {
                    return "missionStatementURL";
                  }))(O.nilKeys)))(A.getAllAny()(A.getAllOptionCons(new p.IsSymbol(function () {
                    return "fundingStatementURL";
                  }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
                    return "missionStatementURL";
                  }))()()()()(A.getAllOptionNil))))(z);
                  return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(T.policySigArray(new C.Tuple(A.getWithDefault(new p.IsSymbol(function () {
                    return "_numPolicies";
                  }))()(1)(p.SProxy.value)(d), A.get(new p.IsSymbol(function () {
                    return "institutionPolicies";
                  }))()(p.SProxy.value)(d))))(function (D) {
                    var E = C.fst(D),
                        F = C.snd(D);
                    return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(m.shiftMapCofree(y.monoidArray))([])(b.span_(m.shiftMapCofree(y.monoidArray))([M.versioning])(K.checkBoxS(A.getWithDefault(new p.IsSymbol(function () {
                      return "versioning";
                    }))()(!1)(p.SProxy.value)(d)))))(function (b) {
                      return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(l.pure(m.applicativeCofree(g.widgetAlternative(y.monoidArray)))(u.execState(h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                        return "institutionID_opt";
                      }))()(p.SProxy.value)(new x.Just(a))))(function () {
                        return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                          return "institutionID";
                        }))()(p.SProxy.value)(e)))(function () {
                          return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                            return "institutionName";
                          }))()(p.SProxy.value)(t)))(function () {
                            return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                              return "institutionType";
                            }))()(p.SProxy.value)(v)))(function () {
                              return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                                return "superOrganizationName";
                              }))()(p.SProxy.value)(new x.Just(k))))(function () {
                                return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                                  return "institutionContact";
                                }))()(p.SProxy.value)(w)))(function () {
                                  return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                                    return "iSustain_opt";
                                  }))()(p.SProxy.value)(new x.Just(z))))(function () {
                                    return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                                      return "institutionSustainability";
                                    }))()(p.SProxy.value)(B)))(function () {
                                      return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                                        return "_numPolicies";
                                      }))()(p.SProxy.value)(new x.Just(E))))(function () {
                                        return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                                          return "institutionPolicies";
                                        }))()(p.SProxy.value)(F)))(function () {
                                          return h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                                            return "versioning";
                                          }))()(p.SProxy.value)(new x.Just(b)));
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
                        var b = A.getSubset()()(O.consKeys(new p.IsSymbol(function () {
                          return "institutionContact";
                        }))(O.consKeys(new p.IsSymbol(function () {
                          return "institutionID";
                        }))(O.consKeys(new p.IsSymbol(function () {
                          return "institutionName";
                        }))(O.consKeys(new p.IsSymbol(function () {
                          return "institutionPolicies";
                        }))(O.consKeys(new p.IsSymbol(function () {
                          return "institutionSustainability";
                        }))(O.consKeys(new p.IsSymbol(function () {
                          return "institutionType";
                        }))(O.consKeys(new p.IsSymbol(function () {
                          return "superOrganizationName";
                        }))(O.consKeys(new p.IsSymbol(function () {
                          return "versioning";
                        }))(O.nilKeys)))))))))(A.getAllAny()(A.getAllOptionCons(new p.IsSymbol(function () {
                          return "institutionContact";
                        }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
                          return "institutionID";
                        }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
                          return "institutionName";
                        }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
                          return "institutionPolicies";
                        }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
                          return "institutionSustainability";
                        }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
                          return "institutionType";
                        }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
                          return "superOrganizationName";
                        }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
                          return "versioning";
                        }))()()()()(A.getAllOptionNil))))))))))(a);
                        return h.discard(h.discardUnit)(m.bindCofree(g.widgetAlternative(y.monoidArray)))(f.display(c(b)))(function () {
                          return l.pure(m.applicativeCofree(g.widgetAlternative(y.monoidArray)))(new x.Just(a));
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
      Aa = function Aa(a) {
    return b.div_(m.shiftMapCofree(y.monoidArray))([M.basicMetadata])(h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(m.shiftMapCofree(y.monoidArray))([])(b.span_(m.shiftMapCofree(y.monoidArray))([M.title])(K.textInput(A.get(new p.IsSymbol(function () {
      return "title";
    }))()(p.SProxy.value)(a)))))(function (c) {
      return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(m.shiftMapCofree(y.monoidArray))([])(b.span_(m.shiftMapCofree(y.monoidArray))([M.creator])(K.textInput(A.get(new p.IsSymbol(function () {
        return "creator";
      }))()(p.SProxy.value)(a)))))(function (d) {
        return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(m.shiftMapCofree(y.monoidArray))([])(b.span_(m.shiftMapCofree(y.monoidArray))([M.pubyear])(K.textInput(A.get(new p.IsSymbol(function () {
          return "publicationYear";
        }))()(p.SProxy.value)(a)))))(function (b) {
          return l.pure(m.applicativeCofree(g.widgetAlternative(y.monoidArray)))(u.execState(h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
            return "title";
          }))()(p.SProxy.value)(c)))(function () {
            return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
              return "creator";
            }))()(p.SProxy.value)(d)))(function () {
              return h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                return "publicationYear";
              }))()(p.SProxy.value)(b));
            });
          }))(a));
        });
      });
    }));
  },
      ia = function ia(a) {
    var c = function c(a) {
      return b.div(g.widgetMultiAlternative(y.monoidArray))(g.widgetShiftMap)([M.prodPreview])([b["br'"](k.widgetLiftWidget), D.fold(D.foldableMaybe)(g.widgetMonoid(y.monoidArray))(z.map(x.functorMaybe)(U.mkSupplementaryProductWidget)(a))]);
    },
        d = x.fromMaybe(A.empty)(a);

    return b.div_(m.shiftMapCofree(y.monoidArray))([M.product])(h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(Aa(X(new p.IsSymbol(function () {
      return "basicMetadata_opt";
    }))()(p.SProxy.value)(d)))(function (a) {
      var e = A.getAll(A.getAllAny()(A.getAllOptionCons(new p.IsSymbol(function () {
        return "creator";
      }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
        return "publicationYear";
      }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
        return "title";
      }))()()()()(A.getAllOptionNil)))))(a);
      return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(m.shiftMapCofree(y.monoidArray))([M.resourceId])(oa(X(new p.IsSymbol(function () {
        return "resourceID_opt";
      }))()(p.SProxy.value)(d))))(function (b) {
        var k = A.getAll(A.getAllAny()(A.getAllOptionCons(new p.IsSymbol(function () {
          return "id";
        }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
          return "idType";
        }))()()()()(A.getAllOptionNil))))(b);
        return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(ra(X(new p.IsSymbol(function () {
          return "resourceType_opt";
        }))()(p.SProxy.value)(d)))(function (t) {
          var v = A.getSubset()()(O.consKeys(new p.IsSymbol(function () {
            return "description";
          }))(O.consKeys(new p.IsSymbol(function () {
            return "generalType";
          }))(O.nilKeys)))(A.getAllAny()(A.getAllOptionCons(new p.IsSymbol(function () {
            return "description";
          }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
            return "generalType";
          }))()()()()(A.getAllOptionNil))))(t);
          return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(aa(new C.Tuple(A.getWithDefault(new p.IsSymbol(function () {
            return "_numFormats";
          }))()(0)(p.SProxy.value)(d), A.getWithDefault(new p.IsSymbol(function () {
            return "format";
          }))()([])(p.SProxy.value)(d))))(function (w) {
            var B = C.fst(w),
                D = C.snd(w);
            return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(ja(X(new p.IsSymbol(function () {
              return "resMdsOpts_opt";
            }))()(p.SProxy.value)(d)))(function (w) {
              var C = A.getSubset()()(O.consKeys(new p.IsSymbol(function () {
                return "relationType";
              }))(O.consKeys(new p.IsSymbol(function () {
                return "url";
              }))(O.nilKeys)))(A.getAllAny()(A.getAllOptionCons(new p.IsSymbol(function () {
                return "relationType";
              }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
                return "url";
              }))()()()()(A.getAllOptionNil))))(w);
              return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(za(A.get(new p.IsSymbol(function () {
                return "locationOpts_opt";
              }))()(p.SProxy.value)(d)))(function (E) {
                var F = h.join(x.bindMaybe)(z.map(x.functorMaybe)(A.getSubset()()(O.consKeys(new p.IsSymbol(function () {
                  return "institutionContact";
                }))(O.consKeys(new p.IsSymbol(function () {
                  return "institutionID";
                }))(O.consKeys(new p.IsSymbol(function () {
                  return "institutionName";
                }))(O.consKeys(new p.IsSymbol(function () {
                  return "institutionPolicies";
                }))(O.consKeys(new p.IsSymbol(function () {
                  return "institutionSustainability";
                }))(O.consKeys(new p.IsSymbol(function () {
                  return "institutionType";
                }))(O.consKeys(new p.IsSymbol(function () {
                  return "superOrganizationName";
                }))(O.consKeys(new p.IsSymbol(function () {
                  return "versioning";
                }))(O.nilKeys)))))))))(A.getAllAny()(A.getAllOptionCons(new p.IsSymbol(function () {
                  return "institutionContact";
                }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
                  return "institutionID";
                }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
                  return "institutionName";
                }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
                  return "institutionPolicies";
                }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
                  return "institutionSustainability";
                }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
                  return "institutionType";
                }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
                  return "superOrganizationName";
                }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
                  return "versioning";
                }))()()()()(A.getAllOptionNil)))))))))))(E));
                return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(l.pure(m.applicativeCofree(g.widgetAlternative(y.monoidArray)))(u.execState(h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                  return "basicMetadata_opt";
                }))()(p.SProxy.value)(new x.Just(a))))(function () {
                  return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                    return "basicMetadata";
                  }))()(p.SProxy.value)(e)))(function () {
                    return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                      return "resourceID_opt";
                    }))()(p.SProxy.value)(new x.Just(b))))(function () {
                      return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                        return "resourceID";
                      }))()(p.SProxy.value)(new x.Just(k))))(function () {
                        return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                          return "resourceType_opt";
                        }))()(p.SProxy.value)(new x.Just(t))))(function () {
                          return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                            return "resourceType";
                          }))()(p.SProxy.value)(v)))(function () {
                            return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                              return "_numFormats";
                            }))()(p.SProxy.value)(new x.Just(B))))(function () {
                              return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                                return "format";
                              }))()(p.SProxy.value)(new x.Just(D))))(function () {
                                return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                                  return "resMdsOpts_opt";
                                }))()(p.SProxy.value)(new x.Just(w))))(function () {
                                  return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                                    return "resourceMetadataSource";
                                  }))()(p.SProxy.value)(new x.Just(C))))(function () {
                                    return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                                      return "locationOpts_opt";
                                    }))()(p.SProxy.value)(E)))(function () {
                                      return h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                                        return "location";
                                      }))()(p.SProxy.value)(F));
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
                  var b = A.getSubset()()(O.consKeys(new p.IsSymbol(function () {
                    return "basicMetadata";
                  }))(O.consKeys(new p.IsSymbol(function () {
                    return "format";
                  }))(O.consKeys(new p.IsSymbol(function () {
                    return "location";
                  }))(O.consKeys(new p.IsSymbol(function () {
                    return "resourceID";
                  }))(O.consKeys(new p.IsSymbol(function () {
                    return "resourceMetadataSource";
                  }))(O.consKeys(new p.IsSymbol(function () {
                    return "resourceType";
                  }))(O.nilKeys)))))))(A.getAllAny()(A.getAllOptionCons(new p.IsSymbol(function () {
                    return "basicMetadata";
                  }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
                    return "format";
                  }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
                    return "location";
                  }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
                    return "resourceID";
                  }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
                    return "resourceMetadataSource";
                  }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
                    return "resourceType";
                  }))()()()()(A.getAllOptionNil))))))))(a);
                  return h.discard(h.discardUnit)(m.bindCofree(g.widgetAlternative(y.monoidArray)))(f.display(c(b)))(function () {
                    return l.pure(m.applicativeCofree(g.widgetAlternative(y.monoidArray)))(new x.Just(a));
                  });
                });
              });
            });
          });
        });
      });
    }));
  },
      Ea = function Ea(a) {
    return b.div_(m.shiftMapCofree(y.monoidArray))([M.products])(b.span_(m.shiftMapCofree(y.monoidArray))([M.productsHeader])(b.div_(m.shiftMapCofree(y.monoidArray))([M.productList])(K.nonEmptyArrayView(ia)(a))));
  },
      ta = function ta(a) {
    return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(m.shiftMapCofree(y.monoidArray))([M.recordId])(oa(X(new p.IsSymbol(function () {
      return "identifier_opt";
    }))()(p.SProxy.value)(a))))(function (c) {
      var d = A.getAll(A.getAllAny()(A.getAllOptionCons(new p.IsSymbol(function () {
        return "id";
      }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
        return "idType";
      }))()()()()(A.getAllOptionNil))))(c);
      return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(z.map(z.functorFn)(b.div_(m.shiftMapCofree(y.monoidArray))([M.date]))(K.textInput)(A.get(new p.IsSymbol(function () {
        return "date";
      }))()(p.SProxy.value)(a)))(function (b) {
        return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(Da(new C.Tuple(A.getWithDefault(new p.IsSymbol(function () {
          return "_numRelIds";
        }))()(0)(p.SProxy.value)(a), A.get(new p.IsSymbol(function () {
          return "relId_opts";
        }))()(p.SProxy.value)(a))))(function (e) {
          var f = C.fst(e),
              k = C.snd(e),
              t = h.join(x.bindMaybe)(z.map(x.functorMaybe)(J.sequence(v.traversableNonEmptyArray)(x.applicativeMaybe))(z.map(x.functorMaybe)(z.map(v.functorNonEmptyArray)(A.getAll(A.getAllAny()(A.getAllOptionCons(new p.IsSymbol(function () {
            return "id";
          }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
            return "idType";
          }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
            return "relType";
          }))()()()()(A.getAllOptionNil)))))))(k)));
          return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(Ea(new C.Tuple(A.getWithDefault(new p.IsSymbol(function () {
            return "_numSupProds";
          }))()(0)(p.SProxy.value)(a), A.get(new p.IsSymbol(function () {
            return "supProd_opts";
          }))()(p.SProxy.value)(a))))(function (e) {
            var w = C.fst(e),
                B = C.snd(e),
                D = h.join(x.bindMaybe)(z.map(x.functorMaybe)(J.sequence(v.traversableNonEmptyArray)(x.applicativeMaybe))(z.map(x.functorMaybe)(z.map(v.functorNonEmptyArray)(A.getSubset()()(O.consKeys(new p.IsSymbol(function () {
              return "basicMetadata";
            }))(O.consKeys(new p.IsSymbol(function () {
              return "format";
            }))(O.consKeys(new p.IsSymbol(function () {
              return "location";
            }))(O.consKeys(new p.IsSymbol(function () {
              return "resourceID";
            }))(O.consKeys(new p.IsSymbol(function () {
              return "resourceMetadataSource";
            }))(O.consKeys(new p.IsSymbol(function () {
              return "resourceType";
            }))(O.nilKeys)))))))(A.getAllAny()(A.getAllOptionCons(new p.IsSymbol(function () {
              return "basicMetadata";
            }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
              return "format";
            }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
              return "location";
            }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
              return "resourceID";
            }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
              return "resourceMetadataSource";
            }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
              return "resourceType";
            }))()()()()(A.getAllOptionNil))))))))))(B)));
            return l.pure(m.applicativeCofree(g.widgetAlternative(y.monoidArray)))(u.execState(h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
              return "identifier_opt";
            }))()(p.SProxy.value)(new x.Just(c))))(function () {
              return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                return "identifier";
              }))()(p.SProxy.value)(d)))(function () {
                return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                  return "date";
                }))()(p.SProxy.value)(b)))(function () {
                  return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                    return "_numRelIds";
                  }))()(p.SProxy.value)(new x.Just(f))))(function () {
                    return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                      return "relId_opts";
                    }))()(p.SProxy.value)(k)))(function () {
                      return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                        return "relatedIdentifiers";
                      }))()(p.SProxy.value)(t)))(function () {
                        return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                          return "_numSupProds";
                        }))()(p.SProxy.value)(new x.Just(w))))(function () {
                          return h.discard(h.discardUnit)(n.bindStateT(q.monadIdentity))(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                            return "supProd_opts";
                          }))()(p.SProxy.value)(B)))(function () {
                            return h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
                              return "supplementaryProducts";
                            }))()(p.SProxy.value)(D));
                          });
                        });
                      });
                    });
                  });
                });
              });
            }))(a));
          });
        });
      });
    });
  };

  t = function () {
    var a = function a(_a17) {
      var c = function c(a) {
        return x.maybe(l.pure(L.applicativeEffect)(""))(R.recordToString)(a);
      };

      return h.bind(g.widgetBind)(B.liftEffect(g.widgetMonadEff(y.monoidArray))(J.sequence(J.traversableMaybe)(L.applicativeEffect)(z.map(x.functorMaybe)(ka)(_a17))))(function (a) {
        return b.div(g.widgetMultiAlternative(y.monoidArray))(g.widgetShiftMap)([M.recPreview])([h.bind(g.widgetBind)(B.liftEffect(g.widgetMonadEff(y.monoidArray))(c(a)))(function (a) {
          return b.div(g.widgetMultiAlternative(y.monoidArray))(g.widgetShiftMap)([M.previewButtons])([na(a), qa(a)]);
        }), b["br'"](k.widgetLiftWidget), D.fold(D.foldableMaybe)(g.widgetMonoid(y.monoidArray))(z.map(x.functorMaybe)(U.mkRecordWidget)(a))]);
      });
    };

    return f.loopS(y.monoidArray)(A.empty)(function (c) {
      return b.div_(m.shiftMapCofree(y.monoidArray))([M.record])(h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(ta(c))(function (b) {
        var c = K.formatXsdDate(K.initDate);
        c = w.hush(c);
        var d = A.get(new p.IsSymbol(function () {
          return "lastModified";
        }))()(p.SProxy.value)(b);
        return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(l.pure(m.applicativeCofree(g.widgetAlternative(y.monoidArray)))(G.append(H.semigroupFirst)(d)(c)))(function (c) {
          return h.bind(m.bindCofree(g.widgetAlternative(y.monoidArray)))(l.pure(m.applicativeCofree(g.widgetAlternative(y.monoidArray)))(u.execState(h.bind(n.bindStateT(q.monadIdentity))(r.get(n.monadStateStateT(q.monadIdentity)))(A.maySetOptState(new p.IsSymbol(function () {
            return "lastModified";
          }))()(p.SProxy.value)(c)))(b)))(function (b) {
            var c = A.getSubset()()(O.consKeys(new p.IsSymbol(function () {
              return "date";
            }))(O.consKeys(new p.IsSymbol(function () {
              return "identifier";
            }))(O.consKeys(new p.IsSymbol(function () {
              return "lastModified";
            }))(O.consKeys(new p.IsSymbol(function () {
              return "relatedIdentifiers";
            }))(O.consKeys(new p.IsSymbol(function () {
              return "supplementaryProducts";
            }))(O.nilKeys))))))(A.getAllAny()(A.getAllOptionCons(new p.IsSymbol(function () {
              return "date";
            }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
              return "identifier";
            }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
              return "lastModified";
            }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
              return "relatedIdentifiers";
            }))()()()()(A.getAllOptionCons(new p.IsSymbol(function () {
              return "supplementaryProducts";
            }))()()()()(A.getAllOptionNil)))))))(b);
            return h.discard(h.discardUnit)(m.bindCofree(g.widgetAlternative(y.monoidArray)))(f.display(a(c)))(function () {
              return l.pure(m.applicativeCofree(g.widgetAlternative(y.monoidArray)))(b);
            });
          });
        });
      }));
    });
  }();

  var ua = b["div'"](g.widgetMultiAlternative(y.monoidArray))(g.widgetShiftMap)([b.div(g.widgetMultiAlternative(y.monoidArray))(g.widgetShiftMap)([M.page])(l.pure(l.applicativeArray)(f.dyn(t)))]);

  c.runFormSPA = function (a) {
    return d.runWidgetInDom(a)(ua);
  };

  c.page = ua;
  c.utf8DataAttr = "data:text/plain;charset=utf-8";
  c.downloadButton = na;
  c.mkDLAnchorAndClicker = ha;
  c.copyButton = qa;
  c.accumulateMetajeloRecord = t;
  c.finalizeRecord = ka;
  c.accumulateMetajeloRecUI = ta;
  c.accumulateSuppProd = ia;
  c.supProdSigArray = Ea;
  c.accumulateLocation = za;
  c.accumulateSustain = pa;
  c.accumulateIdent = oa;
  c.accumulateRelatedIdent = sa;
  c.relIdSigArray = Da;
  c.accumulateBasicMetaData = Aa;
  c.accumulateResType = ra;
  c.formatSignal = ba;
  c.formatSigArray = aa;
  c.accumulateResMdSource = ja;
  c.tooltip = a;
  c.tooltipS = ea;
  c.getOpt = X;
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
//# sourceMappingURL=prod.2ad0293c.js.map