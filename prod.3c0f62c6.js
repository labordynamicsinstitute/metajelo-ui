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
/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

var l = require("object-assign"),
    n = "function" === typeof Symbol && Symbol.for,
    p = n ? Symbol.for("react.element") : 60103,
    q = n ? Symbol.for("react.portal") : 60106,
    r = n ? Symbol.for("react.fragment") : 60107,
    t = n ? Symbol.for("react.strict_mode") : 60108,
    u = n ? Symbol.for("react.profiler") : 60114,
    v = n ? Symbol.for("react.provider") : 60109,
    w = n ? Symbol.for("react.context") : 60110,
    x = n ? Symbol.for("react.forward_ref") : 60112,
    y = n ? Symbol.for("react.suspense") : 60113,
    z = n ? Symbol.for("react.memo") : 60115,
    A = n ? Symbol.for("react.lazy") : 60116,
    B = "function" === typeof Symbol && Symbol.iterator;

function C(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);

  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}

var D = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {}
},
    E = {};

function F(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = E;
  this.updater = c || D;
}

F.prototype.isReactComponent = {};

F.prototype.setState = function (a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(C(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};

F.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function G() {}

G.prototype = F.prototype;

function H(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = E;
  this.updater = c || D;
}

var I = H.prototype = new G();
I.constructor = H;
l(I, F.prototype);
I.isPureReactComponent = !0;
var J = {
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
      k = null;
  if (null != b) for (e in void 0 !== b.ref && (k = b.ref), void 0 !== b.key && (g = "" + b.key), b) K.call(b, e) && !L.hasOwnProperty(e) && (d[e] = b[e]);
  var f = arguments.length - 2;
  if (1 === f) d.children = c;else if (1 < f) {
    for (var h = Array(f), m = 0; m < f; m++) h[m] = arguments[m + 2];

    d.children = h;
  }
  if (a && a.defaultProps) for (e in f = a.defaultProps, f) void 0 === d[e] && (d[e] = f[e]);
  return {
    $$typeof: p,
    type: a,
    key: g,
    ref: k,
    props: d,
    _owner: J.current
  };
}

function N(a, b) {
  return {
    $$typeof: p,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function O(a) {
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

var P = /\/+/g,
    Q = [];

function R(a, b, c, e) {
  if (Q.length) {
    var d = Q.pop();
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

function S(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > Q.length && Q.push(a);
}

function T(a, b, c, e) {
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
  if (g) return c(e, a, "" === b ? "." + U(a, 0) : b), 1;
  g = 0;
  b = "" === b ? "." : b + ":";
  if (Array.isArray(a)) for (var k = 0; k < a.length; k++) {
    d = a[k];
    var f = b + U(d, k);
    g += T(d, f, c, e);
  } else if (null === a || "object" !== typeof a ? f = null : (f = B && a[B] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), k = 0; !(d = a.next()).done;) d = d.value, f = b + U(d, k++), g += T(d, f, c, e);else if ("object" === d) throw c = "" + a, Error(C(31, "[object Object]" === c ? "object with keys {" + Object.keys(a).join(", ") + "}" : c, ""));
  return g;
}

function V(a, b, c) {
  return null == a ? 0 : T(a, "", b, c);
}

function U(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}

function W(a, b) {
  a.func.call(a.context, b, a.count++);
}

function aa(a, b, c) {
  var e = a.result,
      d = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? X(a, e, c, function (a) {
    return a;
  }) : null != a && (O(a) && (a = N(a, d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(P, "$&/") + "/") + c)), e.push(a));
}

function X(a, b, c, e, d) {
  var g = "";
  null != c && (g = ("" + c).replace(P, "$&/") + "/");
  b = R(b, g, e, d);
  V(a, aa, b);
  S(b);
}

var Y = {
  current: null
};

function Z() {
  var a = Y.current;
  if (null === a) throw Error(C(321));
  return a;
}

var ba = {
  ReactCurrentDispatcher: Y,
  ReactCurrentBatchConfig: {
    suspense: null
  },
  ReactCurrentOwner: J,
  IsSomeRendererActing: {
    current: !1
  },
  assign: l
};
exports.Children = {
  map: function (a, b, c) {
    if (null == a) return a;
    var e = [];
    X(a, e, null, b, c);
    return e;
  },
  forEach: function (a, b, c) {
    if (null == a) return a;
    b = R(null, null, b, c);
    V(a, W, b);
    S(b);
  },
  count: function (a) {
    return V(a, function () {
      return null;
    }, null);
  },
  toArray: function (a) {
    var b = [];
    X(a, b, null, function (a) {
      return a;
    });
    return b;
  },
  only: function (a) {
    if (!O(a)) throw Error(C(143));
    return a;
  }
};
exports.Component = F;
exports.Fragment = r;
exports.Profiler = u;
exports.PureComponent = H;
exports.StrictMode = t;
exports.Suspense = y;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ba;

exports.cloneElement = function (a, b, c) {
  if (null === a || void 0 === a) throw Error(C(267, a));
  var e = l({}, a.props),
      d = a.key,
      g = a.ref,
      k = a._owner;

  if (null != b) {
    void 0 !== b.ref && (g = b.ref, k = J.current);
    void 0 !== b.key && (d = "" + b.key);
    if (a.type && a.type.defaultProps) var f = a.type.defaultProps;

    for (h in b) K.call(b, h) && !L.hasOwnProperty(h) && (e[h] = void 0 === b[h] && void 0 !== f ? f[h] : b[h]);
  }

  var h = arguments.length - 2;
  if (1 === h) e.children = c;else if (1 < h) {
    f = Array(h);

    for (var m = 0; m < h; m++) f[m] = arguments[m + 2];

    e.children = f;
  }
  return {
    $$typeof: p,
    type: a.type,
    key: d,
    ref: g,
    props: e,
    _owner: k
  };
};

exports.createContext = function (a, b) {
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
};

exports.createElement = M;

exports.createFactory = function (a) {
  var b = M.bind(null, a);
  b.type = a;
  return b;
};

exports.createRef = function () {
  return {
    current: null
  };
};

exports.forwardRef = function (a) {
  return {
    $$typeof: x,
    render: a
  };
};

exports.isValidElement = O;

exports.lazy = function (a) {
  return {
    $$typeof: A,
    _ctor: a,
    _status: -1,
    _result: null
  };
};

exports.memo = function (a, b) {
  return {
    $$typeof: z,
    type: a,
    compare: void 0 === b ? null : b
  };
};

exports.useCallback = function (a, b) {
  return Z().useCallback(a, b);
};

exports.useContext = function (a, b) {
  return Z().useContext(a, b);
};

exports.useDebugValue = function () {};

exports.useEffect = function (a, b) {
  return Z().useEffect(a, b);
};

exports.useImperativeHandle = function (a, b, c) {
  return Z().useImperativeHandle(a, b, c);
};

exports.useLayoutEffect = function (a, b) {
  return Z().useLayoutEffect(a, b);
};

exports.useMemo = function (a, b) {
  return Z().useMemo(a, b);
};

exports.useReducer = function (a, b, c) {
  return Z().useReducer(a, b, c);
};

exports.useRef = function (a) {
  return Z().useRef(a);
};

exports.useState = function (a) {
  return Z().useState(a);
};

exports.version = "16.14.0";
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
/** @license React v16.13.1
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
function oa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=na(c);ka(d,b,void 0,a);a.currentTarget=null}var pa=null,qa={};
function ra(){if(pa)for(var a in qa){var b=qa[a],c=pa.indexOf(a);if(!(-1<c))throw Error(u(96,a));if(!sa[c]){if(!b.extractEvents)throw Error(u(97,a));sa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(ta.hasOwnProperty(h))throw Error(u(99,h));ta[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ua(k[e],g,h);e=!0}else f.registrationName?(ua(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(u(98,d,a));}}}}
function ua(a,b,c){if(va[a])throw Error(u(100,a));va[a]=b;wa[a]=b.eventTypes[c].dependencies}var sa=[],ta={},va={},wa={};function xa(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!qa.hasOwnProperty(c)||qa[c]!==d){if(qa[c])throw Error(u(102,c));qa[c]=d;b=!0}}b&&ra()}var ya=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),za=null,Aa=null,Ba=null;
function Ca(a){if(a=ma(a)){if("function"!==typeof za)throw Error(u(280));var b=a.stateNode;b&&(b=la(b),za(a.stateNode,a.type,b))}}function Da(a){Aa?Ba?Ba.push(a):Ba=[a]:Aa=a}function Ea(){if(Aa){var a=Aa,b=Ba;Ba=Aa=null;Ca(a);if(b)for(a=0;a<b.length;a++)Ca(b[a])}}function Fa(a,b){return a(b)}function Ga(a,b,c,d,e){return a(b,c,d,e)}function Ha(){}var Ia=Fa,Ja=!1,Ka=!1;function La(){if(null!==Aa||null!==Ba)Ha(),Ea()}
function Ma(a,b,c){if(Ka)return a(b,c);Ka=!0;try{return Ia(a,b,c)}finally{Ka=!1,La()}}var Na=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oa=Object.prototype.hasOwnProperty,Pa={},Qa={};
function Ra(a){if(Oa.call(Qa,a))return!0;if(Oa.call(Pa,a))return!1;if(Na.test(a))return Qa[a]=!0;Pa[a]=!0;return!1}function Sa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function Ta(a,b,c,d){if(null===b||"undefined"===typeof b||Sa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var C={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){C[a]=new v(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];C[b]=new v(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){C[a]=new v(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){C[a]=new v(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){C[a]=new v(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){C[a]=new v(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){C[a]=new v(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){C[a]=new v(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){C[a]=new v(a,5,!1,a.toLowerCase(),null,!1)});var Ua=/[\-:]([a-z])/g;function Va(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Ua,
Va);C[b]=new v(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!1)});
C.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!0)});var Wa=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Wa.hasOwnProperty("ReactCurrentDispatcher")||(Wa.ReactCurrentDispatcher={current:null});Wa.hasOwnProperty("ReactCurrentBatchConfig")||(Wa.ReactCurrentBatchConfig={suspense:null});
function Xa(a,b,c,d){var e=C.hasOwnProperty(b)?C[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Ta(b,c,e,d)&&(c=null),d||null===e?Ra(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var Ya=/^(.*)[\\\/]/,E="function"===typeof Symbol&&Symbol.for,Za=E?Symbol.for("react.element"):60103,$a=E?Symbol.for("react.portal"):60106,ab=E?Symbol.for("react.fragment"):60107,bb=E?Symbol.for("react.strict_mode"):60108,cb=E?Symbol.for("react.profiler"):60114,db=E?Symbol.for("react.provider"):60109,eb=E?Symbol.for("react.context"):60110,fb=E?Symbol.for("react.concurrent_mode"):60111,gb=E?Symbol.for("react.forward_ref"):60112,hb=E?Symbol.for("react.suspense"):60113,ib=E?Symbol.for("react.suspense_list"):
60120,jb=E?Symbol.for("react.memo"):60115,kb=E?Symbol.for("react.lazy"):60116,lb=E?Symbol.for("react.block"):60121,mb="function"===typeof Symbol&&Symbol.iterator;function nb(a){if(null===a||"object"!==typeof a)return null;a=mb&&a[mb]||a["@@iterator"];return"function"===typeof a?a:null}function ob(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}}
function pb(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ab:return"Fragment";case $a:return"Portal";case cb:return"Profiler";case bb:return"StrictMode";case hb:return"Suspense";case ib:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case eb:return"Context.Consumer";case db:return"Context.Provider";case gb:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case jb:return pb(a.type);case lb:return pb(a.render);case kb:if(a=1===a._status?a._result:null)return pb(a)}return null}function qb(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=pb(a.type);c=null;d&&(c=pb(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ya,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
function rb(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function sb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function tb(a){var b=sb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function xb(a){a._valueTracker||(a._valueTracker=tb(a))}function yb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=sb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function zb(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Ab(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=rb(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Bb(a,b){b=b.checked;null!=b&&Xa(a,"checked",b,!1)}
function Cb(a,b){Bb(a,b);var c=rb(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Db(a,b.type,c):b.hasOwnProperty("defaultValue")&&Db(a,b.type,rb(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Eb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Db(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Fb(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Gb(a,b){a=n({children:void 0},b);if(b=Fb(b.children))a.children=b;return a}
function Hb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+rb(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Ib(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(u(91));return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Jb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(u(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(u(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:rb(c)}}
function Kb(a,b){var c=rb(b.value),d=rb(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Lb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var Mb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Nb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ob(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Nb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Pb,Qb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Mb.svg||"innerHTML"in a)a.innerHTML=b;else{Pb=Pb||document.createElement("div");Pb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Pb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Rb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}function Sb(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Tb={animationend:Sb("Animation","AnimationEnd"),animationiteration:Sb("Animation","AnimationIteration"),animationstart:Sb("Animation","AnimationStart"),transitionend:Sb("Transition","TransitionEnd")},Ub={},Vb={};
ya&&(Vb=document.createElement("div").style,"AnimationEvent"in window||(delete Tb.animationend.animation,delete Tb.animationiteration.animation,delete Tb.animationstart.animation),"TransitionEvent"in window||delete Tb.transitionend.transition);function Wb(a){if(Ub[a])return Ub[a];if(!Tb[a])return a;var b=Tb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Vb)return Ub[a]=b[c];return a}
var Xb=Wb("animationend"),Yb=Wb("animationiteration"),Zb=Wb("animationstart"),$b=Wb("transitionend"),ac="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bc=new ("function"===typeof WeakMap?WeakMap:Map);function cc(a){var b=bc.get(a);void 0===b&&(b=new Map,bc.set(a,b));return b}
function dc(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function ec(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function fc(a){if(dc(a)!==a)throw Error(u(188));}
function gc(a){var b=a.alternate;if(!b){b=dc(a);if(null===b)throw Error(u(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return fc(e),a;if(f===d)return fc(e),b;f=f.sibling}throw Error(u(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(u(189));}}if(c.alternate!==d)throw Error(u(190));}if(3!==c.tag)throw Error(u(188));return c.stateNode.current===c?a:b}function hc(a){a=gc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function ic(a,b){if(null==b)throw Error(u(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function jc(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var kc=null;
function lc(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)oa(a,b[d],c[d]);else b&&oa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function mc(a){null!==a&&(kc=ic(kc,a));a=kc;kc=null;if(a){jc(a,lc);if(kc)throw Error(u(95));if(fa)throw a=ha,fa=!1,ha=null,a;}}
function nc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function oc(a){if(!ya)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}var pc=[];function qc(a){a.topLevelType=null;a.nativeEvent=null;a.targetInst=null;a.ancestors.length=0;10>pc.length&&pc.push(a)}
function rc(a,b,c,d){if(pc.length){var e=pc.pop();e.topLevelType=a;e.eventSystemFlags=d;e.nativeEvent=b;e.targetInst=c;return e}return{topLevelType:a,eventSystemFlags:d,nativeEvent:b,targetInst:c,ancestors:[]}}
function sc(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else{for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=tc(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=nc(a.nativeEvent);d=a.topLevelType;var f=a.nativeEvent,g=a.eventSystemFlags;0===c&&(g|=64);for(var h=null,k=0;k<sa.length;k++){var l=sa[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=
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
var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function F(a,b){vc(b,a,!1)}function vc(a,b,c){var d=Zc.get(b);switch(void 0===d?2:d){case 0:d=gd.bind(null,b,1,a);break;case 1:d=hd.bind(null,b,1,a);break;default:d=id.bind(null,b,1,a)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function gd(a,b,c,d){Ja||Ha();var e=id,f=Ja;Ja=!0;try{Ga(e,a,b,c,d)}finally{(Ja=f)||La()}}function hd(a,b,c,d){ed(dd,id.bind(null,a,b,c,d))}
function id(a,b,c,d){if(fd)if(0<Ac.length&&-1<Hc.indexOf(a))a=Kc(null,a,b,c,d),Ac.push(a);else{var e=Rc(a,b,c,d);if(null===e)Lc(a,d);else if(-1<Hc.indexOf(a))a=Kc(e,a,b,c,d),Ac.push(a);else if(!Oc(e,a,b,c,d)){Lc(a,d);a=rc(a,d,null,b);try{Ma(sc,a)}finally{qc(a)}}}}
function Rc(a,b,c,d){c=nc(d);c=tc(c);if(null!==c){var e=dc(c);if(null===e)c=null;else{var f=e.tag;if(13===f){c=ec(e);if(null!==c)return c;c=null}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;c=null}else e!==c&&(c=null)}}a=rc(a,d,c,b);try{Ma(sc,a)}finally{qc(a)}return null}
var jd={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(jd).forEach(function(a){kd.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);jd[b]=jd[a]})});function ld(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||jd.hasOwnProperty(a)&&jd[a]?(""+b).trim():b+"px"}
function md(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ld(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var nd=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function od(a,b){if(b){if(nd[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(u(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(u(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(u(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(u(62,""));}}
function pd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var qd=Mb.html;function rd(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=cc(a);b=wa[b];for(var d=0;d<b.length;d++)uc(b[d],a,c)}function sd(){}
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
function fe(a){if(!(a instanceof this))throw Error(u(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function de(a){a.eventPool=[];a.getPooled=ee;a.release=fe}var ge=G.extend({data:null}),he=G.extend({data:null}),ie=[9,13,27,32],je=ya&&"CompositionEvent"in window,ke=null;ya&&"documentMode"in document&&(ke=document.documentMode);
var le=ya&&"TextEvent"in window&&!ke,me=ya&&(!je||ke&&8<ke&&11>=ke),ne=String.fromCharCode(32),oe={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},pe=!1;
function qe(a,b){switch(a){case "keyup":return-1!==ie.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function re(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var se=!1;function te(a,b){switch(a){case "compositionend":return re(b);case "keypress":if(32!==b.which)return null;pe=!0;return ne;case "textInput":return a=b.data,a===ne&&pe?null:a;default:return null}}
function ue(a,b){if(se)return"compositionend"===a||!je&&qe(a,b)?(a=ae(),$d=Zd=Yd=null,se=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return me&&"ko"!==b.locale?null:b.data;default:return null}}
var ve={eventTypes:oe,extractEvents:function(a,b,c,d){var e;if(je)b:{switch(a){case "compositionstart":var f=oe.compositionStart;break b;case "compositionend":f=oe.compositionEnd;break b;case "compositionupdate":f=oe.compositionUpdate;break b}f=void 0}else se?qe(a,c)&&(f=oe.compositionEnd):"keydown"===a&&229===c.keyCode&&(f=oe.compositionStart);f?(me&&"ko"!==c.locale&&(se||f!==oe.compositionStart?f===oe.compositionEnd&&se&&(e=ae()):(Yd=d,Zd="value"in Yd?Yd.value:Yd.textContent,se=!0)),f=ge.getPooled(f,
b,c,d),e?f.data=e:(e=re(c),null!==e&&(f.data=e)),Xd(f),e=f):e=null;(a=le?te(a,c):ue(a,c))?(b=he.getPooled(oe.beforeInput,b,c,d),b.data=a,Xd(b)):b=null;return null===e?b:null===b?e:[e,b]}},we={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!we[a.type]:"textarea"===b?!0:!1}
var ye={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function ze(a,b,c){a=G.getPooled(ye.change,a,b,c);a.type="change";Da(c);Xd(a);return a}var Ae=null,Be=null;function Ce(a){mc(a)}function De(a){var b=Pd(a);if(yb(b))return a}function Ee(a,b){if("change"===a)return b}var Fe=!1;ya&&(Fe=oc("input")&&(!document.documentMode||9<document.documentMode));
function Ge(){Ae&&(Ae.detachEvent("onpropertychange",He),Be=Ae=null)}function He(a){if("value"===a.propertyName&&De(Be))if(a=ze(Be,a,nc(a)),Ja)mc(a);else{Ja=!0;try{Fa(Ce,a)}finally{Ja=!1,La()}}}function Ie(a,b,c){"focus"===a?(Ge(),Ae=b,Be=c,Ae.attachEvent("onpropertychange",He)):"blur"===a&&Ge()}function Je(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return De(Be)}function Ke(a,b){if("click"===a)return De(b)}function Le(a,b){if("input"===a||"change"===a)return De(b)}
var Me={eventTypes:ye,_isInputEventSupported:Fe,extractEvents:function(a,b,c,d){var e=b?Pd(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Ee;else if(xe(e))if(Fe)g=Le;else{g=Je;var h=Ie}else(f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=Ke);if(g&&(g=g(a,b)))return ze(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Db(e,"number",e.value)}},Ne=G.extend({view:null,detail:null}),
Oe={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pe(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Oe[a])?!!b[a]:!1}function Qe(){return Pe}
var Re=0,Se=0,Te=!1,Ue=!1,Ve=Ne.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Qe,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Re;Re=a.screenX;return Te?"mousemove"===a.type?a.screenX-b:0:(Te=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=Se;Se=a.screenY;return Ue?"mousemove"===a.type?a.screenY-b:0:(Ue=!0,0)}}),We=Ve.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xe={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},Ye={eventTypes:Xe,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?tc(b):null,null!==b){var h=dc(b);if(b!==h||5!==b.tag&&6!==b.tag)b=null}}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===
a){var k=Ve;var l=Xe.mouseLeave;var m=Xe.mouseEnter;var p="mouse"}else if("pointerout"===a||"pointerover"===a)k=We,l=Xe.pointerLeave,m=Xe.pointerEnter,p="pointer";a=null==g?f:Pd(g);f=null==b?f:Pd(b);l=k.getPooled(l,g,c,d);l.type=p+"leave";l.target=a;l.relatedTarget=f;c=k.getPooled(m,b,c,d);c.type=p+"enter";c.target=f;c.relatedTarget=a;d=g;p=b;if(d&&p)a:{k=d;m=p;g=0;for(a=k;a;a=Rd(a))g++;a=0;for(b=m;b;b=Rd(b))a++;for(;0<g-a;)k=Rd(k),g--;for(;0<a-g;)m=Rd(m),a--;for(;g--;){if(k===m||k===m.alternate)break a;
k=Rd(k);m=Rd(m)}k=null}else k=null;m=k;for(k=[];d&&d!==m;){g=d.alternate;if(null!==g&&g===m)break;k.push(d);d=Rd(d)}for(d=[];p&&p!==m;){g=p.alternate;if(null!==g&&g===m)break;d.push(p);p=Rd(p)}for(p=0;p<k.length;p++)Vd(k[p],"bubbled",l);for(p=d.length;0<p--;)Vd(d[p],"captured",c);return 0===(e&64)?[l]:[l,c]}};function Ze(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var $e="function"===typeof Object.is?Object.is:Ze,af=Object.prototype.hasOwnProperty;
function bf(a,b){if($e(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!af.call(b,c[d])||!$e(a[c[d]],b[c[d]]))return!1;return!0}
var cf=ya&&"documentMode"in document&&11>=document.documentMode,df={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ef=null,ff=null,gf=null,hf=!1;
function jf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(hf||null==ef||ef!==td(c))return null;c=ef;"selectionStart"in c&&yd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return gf&&bf(gf,c)?null:(gf=c,a=G.getPooled(df.select,ff,a,b),a.type="select",a.target=ef,Xd(a),a)}
var kf={eventTypes:df,extractEvents:function(a,b,c,d,e,f){e=f||(d.window===d?d.document:9===d.nodeType?d:d.ownerDocument);if(!(f=!e)){a:{e=cc(e);f=wa.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Pd(b):window;switch(a){case "focus":if(xe(e)||"true"===e.contentEditable)ef=e,ff=b,gf=null;break;case "blur":gf=ff=ef=null;break;case "mousedown":hf=!0;break;case "contextmenu":case "mouseup":case "dragend":return hf=!1,jf(c,d);case "selectionchange":if(cf)break;
case "keydown":case "keyup":return jf(c,d)}return null}},lf=G.extend({animationName:null,elapsedTime:null,pseudoElement:null}),mf=G.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),nf=Ne.extend({relatedTarget:null});function of(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf=Ne.extend({key:function(a){if(a.key){var b=pf[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=of(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?qf[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Qe,charCode:function(a){return"keypress"===
a.type?of(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?of(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),sf=Ve.extend({dataTransfer:null}),tf=Ne.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Qe}),uf=G.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),vf=Ve.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),wf={eventTypes:Wc,extractEvents:function(a,b,c,d){var e=Yc.get(a);if(!e)return null;switch(a){case "keypress":if(0===of(c))return null;case "keydown":case "keyup":a=rf;break;case "blur":case "focus":a=nf;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=
Ve;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=sf;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=tf;break;case Xb:case Yb:case Zb:a=lf;break;case $b:a=uf;break;case "scroll":a=Ne;break;case "wheel":a=vf;break;case "copy":case "cut":case "paste":a=mf;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=
We;break;default:a=G}b=a.getPooled(e,b,c,d);Xd(b);return b}};if(pa)throw Error(u(101));pa=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ra();var xf=Nc;la=Qd;ma=xf;na=Pd;xa({SimpleEventPlugin:wf,EnterLeaveEventPlugin:Ye,ChangeEventPlugin:Me,SelectEventPlugin:kf,BeforeInputEventPlugin:ve});var yf=[],zf=-1;function H(a){0>zf||(a.current=yf[zf],yf[zf]=null,zf--)}
function I(a,b){zf++;yf[zf]=a.current;a.current=b}var Af={},J={current:Af},K={current:!1},Bf=Af;function Cf(a,b){var c=a.type.contextTypes;if(!c)return Af;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L(a){a=a.childContextTypes;return null!==a&&void 0!==a}
function Df(){H(K);H(J)}function Ef(a,b,c){if(J.current!==Af)throw Error(u(168));I(J,b);I(K,c)}function Ff(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(u(108,pb(b)||"Unknown",e));return n({},c,{},d)}function Gf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Af;Bf=J.current;I(J,a);I(K,K.current);return!0}
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
function Cg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=e;e=c;if("function"!==typeof d)throw Error(u(191,d));d.call(e)}}}var Dg=Wa.ReactCurrentBatchConfig,Eg=(new aa.Component).refs;function Fg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;0===a.expirationTime&&(a.updateQueue.baseState=c)}
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
c.implementation)return b=Vg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Wg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Tg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Za:return c=Ug(b.type,b.key,b.props,null,a.mode,c),c.ref=Pg(a,null,b),c.return=a,c;case $a:return b=Vg(b,a.mode,c),b.return=a,b}if(Og(b)||
nb(b))return b=Wg(b,a.mode,c,null),b.return=a,b;Qg(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Za:return c.key===e?c.type===ab?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case $a:return c.key===e?l(a,b,c,d):null}if(Og(c)||nb(c))return null!==e?null:m(a,b,c,d,null);Qg(a,c)}return null}function z(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Za:return a=a.get(null===d.key?c:d.key)||null,d.type===ab?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case $a:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Og(d)||nb(d))return a=a.get(c)||null,m(b,a,d,e,null);Qg(b,d)}return null}function ca(e,g,h,k){for(var l=null,t=null,m=g,y=g=0,A=null;null!==m&&y<h.length;y++){m.index>y?(A=m,m=null):A=m.sibling;var q=x(e,m,h[y],k);if(null===q){null===m&&(m=A);break}a&&
m&&null===q.alternate&&b(e,m);g=f(q,g,y);null===t?l=q:t.sibling=q;t=q;m=A}if(y===h.length)return c(e,m),l;if(null===m){for(;y<h.length;y++)m=p(e,h[y],k),null!==m&&(g=f(m,g,y),null===t?l=m:t.sibling=m,t=m);return l}for(m=d(e,m);y<h.length;y++)A=z(m,e,y,h[y],k),null!==A&&(a&&null!==A.alternate&&m.delete(null===A.key?y:A.key),g=f(A,g,y),null===t?l=A:t.sibling=A,t=A);a&&m.forEach(function(a){return b(e,a)});return l}function D(e,g,h,l){var k=nb(h);if("function"!==typeof k)throw Error(u(150));h=k.call(h);
if(null==h)throw Error(u(151));for(var m=k=null,t=g,y=g=0,A=null,q=h.next();null!==t&&!q.done;y++,q=h.next()){t.index>y?(A=t,t=null):A=t.sibling;var D=x(e,t,q.value,l);if(null===D){null===t&&(t=A);break}a&&t&&null===D.alternate&&b(e,t);g=f(D,g,y);null===m?k=D:m.sibling=D;m=D;t=A}if(q.done)return c(e,t),k;if(null===t){for(;!q.done;y++,q=h.next())q=p(e,q.value,l),null!==q&&(g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);return k}for(t=d(e,t);!q.done;y++,q=h.next())q=z(t,e,y,q.value,l),null!==q&&(a&&null!==
q.alternate&&t.delete(null===q.key?y:q.key),g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);a&&t.forEach(function(a){return b(e,a)});return k}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ab&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Za:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ab){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,
k.sibling);d=e(k,f.props);d.ref=Pg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ab?(d=Wg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ug(f.type,f.key,f.props,null,a.mode,h),h.ref=Pg(a,d,f),h.return=a,a=h)}return g(a);case $a:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=
d.sibling}d=Vg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Tg(f,a.mode,h),d.return=a,a=d),g(a);if(Og(f))return ca(a,d,f,h);if(nb(f))return D(a,d,f,h);l&&Qg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(u(152,a.displayName||a.name||"Component"));}return c(a,d)}}var Xg=Rg(!0),Yg=Rg(!1),Zg={},$g={current:Zg},ah={current:Zg},bh={current:Zg};
function ch(a){if(a===Zg)throw Error(u(174));return a}function dh(a,b){I(bh,b);I(ah,a);I($g,Zg);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Ob(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=Ob(b,a)}H($g);I($g,b)}function eh(){H($g);H(ah);H(bh)}function fh(a){ch(bh.current);var b=ch($g.current);var c=Ob(b,a.type);b!==c&&(I(ah,a),I($g,c))}function gh(a){ah.current===a&&(H($g),H(ah))}var M={current:0};
function hh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===Bd||c.data===Cd))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function ih(a,b){return{responder:a,props:b}}
var jh=Wa.ReactCurrentDispatcher,kh=Wa.ReactCurrentBatchConfig,lh=0,N=null,O=null,P=null,mh=!1;function Q(){throw Error(u(321));}function nh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!$e(a[c],b[c]))return!1;return!0}
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
function Xh(){Ph=Oh=null;Qh=!1}var Yh=Wa.ReactCurrentOwner,rg=!1;function R(a,b,c,d){b.child=null===a?Yg(b,null,c,d):Xg(b,a.child,c,d)}function Zh(a,b,c,d,e){c=c.render;var f=b.ref;qg(b,e);d=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,d,e);return b.child}
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
h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else"dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(va.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),
c[k]=l[k])}else c||(a||(a=[]),a.push(h,c)),c=l;else"dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(va.hasOwnProperty(h)?(null!=l&&rd(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l))}c&&(a=a||[]).push("style",c);e=a;if(b.updateQueue=e)b.effectTag|=4}};
qi=function(a,b,c,d){c!==d&&(b.effectTag|=4)};function ri(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function si(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return L(b.type)&&Df(),null;case 3:return eh(),H(K),H(J),c=b.stateNode,c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==a&&null!==a.child||!Wh(b)||(b.effectTag|=4),oi(b),null;case 5:gh(b);c=ch(bh.current);var e=b.type;if(null!==a&&null!=b.stateNode)pi(a,b,e,d,c),a.ref!==b.ref&&(b.effectTag|=128);else{if(!d){if(null===b.stateNode)throw Error(u(166));
return null}a=ch($g.current);if(Wh(b)){d=b.stateNode;e=b.type;var f=b.memoizedProps;d[Md]=b;d[Nd]=f;switch(e){case "iframe":case "object":case "embed":F("load",d);break;case "video":case "audio":for(a=0;a<ac.length;a++)F(ac[a],d);break;case "source":F("error",d);break;case "img":case "image":case "link":F("error",d);F("load",d);break;case "form":F("reset",d);F("submit",d);break;case "details":F("toggle",d);break;case "input":Ab(d,f);F("invalid",d);rd(c,"onChange");break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};F("invalid",d);rd(c,"onChange");break;case "textarea":Jb(d,f),F("invalid",d),rd(c,"onChange")}od(e,f);a=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(a=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(a=["children",""+h]):va.hasOwnProperty(g)&&null!=h&&rd(c,g)}switch(e){case "input":xb(d);Eb(d,f,!0);break;case "textarea":xb(d);Lb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&
(d.onclick=sd)}c=a;b.updateQueue=c;null!==c&&(b.effectTag|=4)}else{g=9===c.nodeType?c:c.ownerDocument;a===qd&&(a=Nb(e));a===qd?"script"===e?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(e,{is:d.is}):(a=g.createElement(e),"select"===e&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,e);a[Md]=b;a[Nd]=d;ni(a,b,!1,!1);b.stateNode=a;g=pd(e,d);switch(e){case "iframe":case "object":case "embed":F("load",
a);h=d;break;case "video":case "audio":for(h=0;h<ac.length;h++)F(ac[h],a);h=d;break;case "source":F("error",a);h=d;break;case "img":case "image":case "link":F("error",a);F("load",a);h=d;break;case "form":F("reset",a);F("submit",a);h=d;break;case "details":F("toggle",a);h=d;break;case "input":Ab(a,d);h=zb(a,d);F("invalid",a);rd(c,"onChange");break;case "option":h=Gb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};h=n({},d,{value:void 0});F("invalid",a);rd(c,"onChange");break;case "textarea":Jb(a,
d);h=Ib(a,d);F("invalid",a);rd(c,"onChange");break;default:h=d}od(e,h);var k=h;for(f in k)if(k.hasOwnProperty(f)){var l=k[f];"style"===f?md(a,l):"dangerouslySetInnerHTML"===f?(l=l?l.__html:void 0,null!=l&&Qb(a,l)):"children"===f?"string"===typeof l?("textarea"!==e||""!==l)&&Rb(a,l):"number"===typeof l&&Rb(a,""+l):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(va.hasOwnProperty(f)?null!=l&&rd(c,f):null!=l&&Xa(a,f,l,g))}switch(e){case "input":xb(a);Eb(a,d,!1);
break;case "textarea":xb(a);Lb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+rb(d.value));break;case "select":a.multiple=!!d.multiple;c=d.value;null!=c?Hb(a,!!d.multiple,c,!1):null!=d.defaultValue&&Hb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof h.onClick&&(a.onclick=sd)}Fd(e,d)&&(b.effectTag|=4)}null!==b.ref&&(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)qi(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(u(166));
c=ch(bh.current);ch($g.current);Wh(b)?(c=b.stateNode,d=b.memoizedProps,c[Md]=b,c.nodeValue!==d&&(b.effectTag|=4)):(c=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),c[Md]=b,b.stateNode=c)}return null;case 13:H(M);d=b.memoizedState;if(0!==(b.effectTag&64))return b.expirationTime=c,b;c=null!==d;d=!1;null===a?void 0!==b.memoizedProps.fallback&&Wh(b):(e=a.memoizedState,d=null!==e,c||null===e||(e=a.child.sibling,null!==e&&(f=b.firstEffect,null!==f?(b.firstEffect=e,e.nextEffect=f):(b.firstEffect=b.lastEffect=
e,e.nextEffect=null),e.effectTag=8)));if(c&&!d&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M.current&1))S===ti&&(S=ui);else{if(S===ti||S===ui)S=vi;0!==wi&&null!==T&&(xi(T,U),yi(T,wi))}if(c||d)b.effectTag|=4;return null;case 4:return eh(),oi(b),null;case 10:return og(b),null;case 17:return L(b.type)&&Df(),null;case 19:H(M);d=b.memoizedState;if(null===d)return null;e=0!==(b.effectTag&64);f=d.rendering;if(null===f)if(e)ri(d,!1);else{if(S!==ti||null!==a&&0!==(a.effectTag&
64))for(f=b.child;null!==f;){a=hh(f);if(null!==a){b.effectTag|=64;ri(d,!1);e=a.updateQueue;null!==e&&(b.updateQueue=e,b.effectTag|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;for(d=b.child;null!==d;)e=d,f=c,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,a=e.alternate,null===a?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=a.childExpirationTime,
e.expirationTime=a.expirationTime,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,f=a.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),d=d.sibling;I(M,M.current&1|2);return b.child}f=f.sibling}}else{if(!e)if(a=hh(f),null!==a){if(b.effectTag|=64,e=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.effectTag|=4),ri(d,!0),null===d.tail&&"hidden"===d.tailMode&&!f.alternate)return b=
b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*$f()-d.renderingStartTime>d.tailExpiration&&1<c&&(b.effectTag|=64,e=!0,ri(d,!1),b.expirationTime=b.childExpirationTime=c-1);d.isBackwards?(f.sibling=b.child,b.child=f):(c=d.last,null!==c?c.sibling=f:b.child=f,d.last=f)}return null!==d.tail?(0===d.tailExpiration&&(d.tailExpiration=$f()+500),c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=$f(),c.sibling=null,b=M.current,I(M,e?b&1|2:b&1),c):null}throw Error(u(156,
b.tag));}function zi(a){switch(a.tag){case 1:L(a.type)&&Df();var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:eh();H(K);H(J);b=a.effectTag;if(0!==(b&64))throw Error(u(285));a.effectTag=b&-4097|64;return a;case 5:return gh(a),null;case 13:return H(M),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return H(M),null;case 4:return eh(),null;case 10:return og(a),null;default:return null}}function Ai(a,b){return{value:a,source:b,stack:qb(b)}}
var Bi="function"===typeof WeakSet?WeakSet:Set;function Ci(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=qb(c));null!==c&&pb(c.type);b=b.value;null!==a&&1===a.tag&&pb(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Di(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Ei(a,c)}}function Fi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Ei(a,c)}else b.current=null}
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
function Si(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:Hi(3,b);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Nd]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Bb(c,d);pd(a,e);b=pd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?md(c,h):"dangerouslySetInnerHTML"===g?Qb(c,h):"children"===g?Rb(c,h):Xa(c,g,h,b)}switch(a){case "input":Cb(c,d);break;
case "textarea":Kb(c,d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?Hb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?Hb(c,!!d.multiple,d.defaultValue,!0):Hb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(u(162));b.stateNode.nodeValue=b.memoizedProps;return;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,Vc(b.containerInfo));return;case 12:return;case 13:c=b;null===b.memoizedState?
d=!1:(d=!0,c=b.child,Ti=$f());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=ld("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=
f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}Ui(b);return;case 19:Ui(b);return;case 17:return}throw Error(u(163));}function Ui(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Bi);b.forEach(function(b){var d=Vi.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
var Wi="function"===typeof WeakMap?WeakMap:Map;function Xi(a,b,c){c=wg(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Yi||(Yi=!0,Zi=d);Ci(a,b)};return c}
function $i(a,b,c){c=wg(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ci(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===aj?aj=new Set([this]):aj.add(this),Ci(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var bj=Math.ceil,cj=Wa.ReactCurrentDispatcher,dj=Wa.ReactCurrentOwner,V=0,ej=8,fj=16,gj=32,ti=0,hj=1,ij=2,ui=3,vi=4,jj=5,W=V,T=null,X=null,U=0,S=ti,kj=null,lj=1073741823,mj=1073741823,nj=null,wi=0,oj=!1,Ti=0,pj=500,Y=null,Yi=!1,Zi=null,aj=null,qj=!1,rj=null,sj=90,tj=null,uj=0,vj=null,wj=0;function Gg(){return(W&(fj|gj))!==V?1073741821-($f()/10|0):0!==wj?wj:wj=1073741821-($f()/10|0)}
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
function Hj(a,b){do{try{ng();jh.current=sh;if(mh)for(var c=N.memoizedState;null!==c;){var d=c.queue;null!==d&&(d.pending=null);c=c.next}lh=0;P=O=N=null;mh=!1;if(null===X||null===X.return)return S=hj,kj=b,X=null;a:{var e=a,f=X.return,g=X,h=b;b=U;g.effectTag|=2048;g.firstEffect=g.lastEffect=null;if(null!==h&&"object"===typeof h&&"function"===typeof h.then){var k=h;if(0===(g.mode&2)){var l=g.alternate;l?(g.updateQueue=l.updateQueue,g.memoizedState=l.memoizedState,g.expirationTime=l.expirationTime):(g.updateQueue=
null,g.memoizedState=null)}var m=0!==(M.current&1),p=f;do{var x;if(x=13===p.tag){var z=p.memoizedState;if(null!==z)x=null!==z.dehydrated?!0:!1;else{var ca=p.memoizedProps;x=void 0===ca.fallback?!1:!0!==ca.unstable_avoidThisFallback?!0:m?!1:!0}}if(x){var D=p.updateQueue;if(null===D){var t=new Set;t.add(k);p.updateQueue=t}else D.add(k);if(0===(p.mode&2)){p.effectTag|=64;g.effectTag&=-2981;if(1===g.tag)if(null===g.alternate)g.tag=17;else{var y=wg(1073741823,null);y.tag=2;xg(g,y)}g.expirationTime=1073741823;
break a}h=void 0;g=b;var A=e.pingCache;null===A?(A=e.pingCache=new Wi,h=new Set,A.set(k,h)):(h=A.get(k),void 0===h&&(h=new Set,A.set(k,h)));if(!h.has(g)){h.add(g);var q=Oj.bind(null,e,k,g);k.then(q,q)}p.effectTag|=4096;p.expirationTime=b;break a}p=p.return}while(null!==p);h=Error((pb(g.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+qb(g))}S!==
jj&&(S=ij);h=Ai(h,g);p=f;do{switch(p.tag){case 3:k=h;p.effectTag|=4096;p.expirationTime=b;var B=Xi(p,k,b);yg(p,B);break a;case 1:k=h;var w=p.type,ub=p.stateNode;if(0===(p.effectTag&64)&&("function"===typeof w.getDerivedStateFromError||null!==ub&&"function"===typeof ub.componentDidCatch&&(null===aj||!aj.has(ub)))){p.effectTag|=4096;p.expirationTime=b;var vb=$i(p,k,b);yg(p,vb);break a}}p=p.return}while(null!==p)}X=Pj(X)}catch(Xc){b=Xc;continue}break}while(1)}
function Fj(){var a=cj.current;cj.current=sh;return null===a?sh:a}function Ag(a,b){a<lj&&2<a&&(lj=a);null!==b&&a<mj&&2<a&&(mj=a,nj=b)}function Bg(a){a>wi&&(wi=a)}function Kj(){for(;null!==X;)X=Qj(X)}function Gj(){for(;null!==X&&!Uf();)X=Qj(X)}function Qj(a){var b=Rj(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=Pj(a));dj.current=null;return b}
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
null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;ob(e);if(1!==e._status)throw e._result;e=e._result;b.type=e;f=b.tag=Xj(e);a=ig(e,a);switch(f){case 0:b=di(null,b,e,a,c);break a;case 1:b=fi(null,b,e,a,c);break a;case 11:b=Zh(null,b,e,a,c);break a;case 14:b=ai(null,b,e,ig(e.type,a),d,c);break a}throw Error(u(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),di(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),fi(a,b,d,e,c);
case 3:hi(b);d=b.updateQueue;if(null===a||null===d)throw Error(u(282));d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;vg(a,b);zg(b,d,null,c);d=b.memoizedState.element;if(d===e)Xh(),b=$h(a,b,c);else{if(e=b.stateNode.hydrate)Ph=Jd(b.stateNode.containerInfo.firstChild),Oh=b,e=Qh=!0;if(e)for(c=Yg(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else R(a,b,d,c),Xh();b=b.child}return b;case 5:return fh(b),null===a&&Uh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:
null,g=e.children,Gd(d,e)?g=null:null!==f&&Gd(d,f)&&(b.effectTag|=16),ei(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(R(a,b,g,c),b=b.child),b;case 6:return null===a&&Uh(b),null;case 13:return ji(a,b,c);case 4:return dh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Xg(b,null,d,c):R(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),Zh(a,b,d,e,c);case 7:return R(a,b,b.pendingProps,c),b.child;case 8:return R(a,
b,b.pendingProps.children,c),b.child;case 12:return R(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(jg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=$e(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!K.current){b=$h(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==
k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=wg(c,null),l.tag=2,xg(h,l));h.expirationTime<c&&(h.expirationTime=c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);pg(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=
g}R(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,qg(b,c),e=sg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,R(a,b,d,c),b.child;case 14:return e=b.type,f=ig(e,b.pendingProps),f=ig(e.type,f),ai(a,b,e,f,d,c);case 15:return ci(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L(d)?(a=!0,Gf(b)):a=!1,qg(b,c),Lg(b,d,e),Ng(b,d,e,c),gi(null,
b,d,!0,a,c);case 19:return mi(a,b,c)}throw Error(u(156,b.tag));};var Uj=null,Li=null;function Yj(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Uj=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};Li=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function Zj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Sh(a,b,c,d){return new Zj(a,b,c,d)}
function bi(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Xj(a){if("function"===typeof a)return bi(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gb)return 11;if(a===jb)return 14}return 2}
function Sg(a,b){var c=a.alternate;null===c?(c=Sh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Ug(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bi(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ab:return Wg(c.children,e,f,b);case fb:g=8;e|=7;break;case bb:g=8;e|=1;break;case cb:return a=Sh(12,c,b,e|8),a.elementType=cb,a.type=cb,a.expirationTime=f,a;case hb:return a=Sh(13,c,b,e),a.type=hb,a.elementType=hb,a.expirationTime=f,a;case ib:return a=Sh(19,c,b,e),a.elementType=ib,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case db:g=
10;break a;case eb:g=9;break a;case gb:g=11;break a;case jb:g=14;break a;case kb:g=16;d=null;break a;case lb:g=22;break a}throw Error(u(130,null==a?a:typeof a,""));}b=Sh(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Wg(a,b,c,d){a=Sh(7,a,d,b);a.expirationTime=c;return a}function Tg(a,b,c){a=Sh(6,a,null,b);a.expirationTime=c;return a}
function Vg(a,b,c){b=Sh(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function ak(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}
function Aj(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function xi(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0)}
function yi(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b))}function Cj(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b}
function bk(a,b,c,d){var e=b.current,f=Gg(),g=Dg.suspense;f=Hg(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(dc(c)!==c||1!==c.tag)throw Error(u(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(L(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(u(171));}if(1===c.tag){var k=c.type;if(L(k)){c=Ff(c,k,h);break a}}c=h}else c=Af;null===b.context?b.context=c:b.pendingContext=c;b=wg(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);xg(e,b);Ig(e,f);return f}function ck(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function dk(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b)}function ek(a,b){dk(a,b);(a=a.alternate)&&dk(a,b)}
function fk(a,b,c){c=null!=c&&!0===c.hydrate;var d=new ak(a,b,c),e=Sh(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;ug(e);a[Od]=d.current;c&&0!==b&&Jc(a,9===a.nodeType?a:a.ownerDocument);this._internalRoot=d}fk.prototype.render=function(a){bk(a,this._internalRoot,null,null)};fk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;bk(null,a,null,function(){b[Od]=null})};
function gk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function hk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new fk(a,0,b?{hydrate:!0}:void 0)}
function ik(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=ck(g);h.call(a)}}bk(b,g,a,e)}else{f=c._reactRootContainer=hk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=ck(g);k.call(a)}}Nj(function(){bk(b,g,a,e)})}return ck(g)}function jk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:$a,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
wc=function(a){if(13===a.tag){var b=hg(Gg(),150,100);Ig(a,b);ek(a,b)}};xc=function(a){13===a.tag&&(Ig(a,3),ek(a,3))};yc=function(a){if(13===a.tag){var b=Gg();b=Hg(b,a,null);Ig(a,b);ek(a,b)}};
za=function(a,b,c){switch(b){case "input":Cb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Qd(d);if(!e)throw Error(u(90));yb(d);Cb(d,e)}}}break;case "textarea":Kb(a,c);break;case "select":b=c.value,null!=b&&Hb(a,!!c.multiple,b,!1)}};Fa=Mj;
Ga=function(a,b,c,d,e){var f=W;W|=4;try{return cg(98,a.bind(null,b,c,d,e))}finally{W=f,W===V&&gg()}};Ha=function(){(W&(1|fj|gj))===V&&(Lj(),Dj())};Ia=function(a,b){var c=W;W|=2;try{return a(b)}finally{W=c,W===V&&gg()}};function kk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!gk(b))throw Error(u(200));return jk(a,b,null,c)}var lk={Events:[Nc,Pd,Qd,xa,ta,Xd,function(a){jc(a,Wd)},Da,Ea,id,mc,Dj,{current:!1}]};
(function(a){var b=a.findFiberByHostInstance;return Yj(n({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wa.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hc(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:tc,bundleType:0,version:"16.13.1",
rendererPackageName:"react-dom"});exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lk;exports.createPortal=kk;exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u(188));throw Error(u(268,Object.keys(a)));}a=hc(b);a=null===a?null:a.stateNode;return a};
exports.flushSync=function(a,b){if((W&(fj|gj))!==V)throw Error(u(187));var c=W;W|=1;try{return cg(99,a.bind(null,b))}finally{W=c,gg()}};exports.hydrate=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!0,c)};exports.render=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!1,c)};
exports.unmountComponentAtNode=function(a){if(!gk(a))throw Error(u(40));return a._reactRootContainer?(Nj(function(){ik(null,null,a,!1,function(){a._reactRootContainer=null;a[Od]=null})}),!0):!1};exports.unstable_batchedUpdates=Mj;exports.unstable_createPortal=function(a,b){return kk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!gk(c))throw Error(u(200));if(null==a||void 0===a._reactInternalFiber)throw Error(u(38));return ik(a,b,c,!1,d)};exports.version="16.13.1";

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
/** @license React v16.13.1
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
},version:"16.13.1"};module.exports=ab.default||ab;

},{"object-assign":"J4Nk","react":"n8MK"}],"KpxE":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/react-dom-server.browser.production.min.js');
} else {
  module.exports = require('./cjs/react-dom-server.browser.development.js');
}
},{"./cjs/react-dom-server.browser.production.min.js":"KA3k"}],"xbCx":[function(require,module,exports) {
var global = arguments[3];
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, c, f) {
  if (a == Array.prototype || a == Object.prototype) return a;
  a[c] = f.value;
  return a;
};

$jscomp.getGlobal = function (a) {
  a = ["object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis, a, "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window, "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self, "object" == (typeof global === "undefined" ? "undefined" : _typeof(global)) && global];

  for (var c = 0; c < a.length; ++c) {
    var f = a[c];
    if (f && f.Math == Math) return f;
  }

  throw Error("Cannot find global object");
};

$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === _typeof(Symbol("x"));
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";

var $jscomp$lookupPolyfilledValue = function $jscomp$lookupPolyfilledValue(a, c) {
  var f = $jscomp.propertyToPolyfillSymbol[c];
  if (null == f) return a[c];
  f = a[f];
  return void 0 !== f ? f : a[c];
};

$jscomp.polyfill = function (a, c, f, k) {
  c && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, c, f, k) : $jscomp.polyfillUnisolated(a, c, f, k));
};

$jscomp.polyfillUnisolated = function (a, c, f, k) {
  f = $jscomp.global;
  a = a.split(".");

  for (k = 0; k < a.length - 1; k++) {
    var g = a[k];
    if (!(g in f)) return;
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
};

$jscomp.polyfillIsolated = function (a, c, f, k) {
  var g = a.split(".");
  a = 1 === g.length;
  k = g[0];
  k = !a && k in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;

  for (var b = 0; b < g.length - 1; b++) {
    var e = g[b];
    if (!(e in k)) return;
    k = k[e];
  }

  g = g[g.length - 1];
  f = $jscomp.IS_SYMBOL_NATIVE && "es6" === f ? k[g] : null;
  c = c(f);
  null != c && (a ? $jscomp.defineProperty($jscomp.polyfills, g, {
    configurable: !0,
    writable: !0,
    value: c
  }) : c !== f && ($jscomp.propertyToPolyfillSymbol[g] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(g) : $jscomp.POLYFILL_PREFIX + g, g = $jscomp.propertyToPolyfillSymbol[g], $jscomp.defineProperty(k, g, {
    configurable: !0,
    writable: !0,
    value: c
  })));
};

$jscomp.initSymbol = function () {};

$jscomp.polyfill("Symbol", function (a) {
  if (a) return a;

  var c = function c(g, b) {
    this.$jscomp$symbol$id_ = g;
    $jscomp.defineProperty(this, "description", {
      configurable: !0,
      writable: !0,
      value: b
    });
  };

  c.prototype.toString = function () {
    return this.$jscomp$symbol$id_;
  };

  var f = 0,
      k = function k(g) {
    if (this instanceof k) throw new TypeError("Symbol is not a constructor");
    return new c("jscomp_symbol_" + (g || "") + "_" + f++, g);
  };

  return k;
}, "es6", "es3");

$jscomp.initSymbolIterator = function () {};

$jscomp.polyfill("Symbol.iterator", function (a) {
  if (a) return a;
  a = Symbol("Symbol.iterator");

  for (var c = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), f = 0; f < c.length; f++) {
    var k = $jscomp.global[c[f]];
    "function" === typeof k && "function" != typeof k.prototype[a] && $jscomp.defineProperty(k.prototype, a, {
      configurable: !0,
      writable: !0,
      value: function value() {
        return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
      }
    });
  }

  return a;
}, "es6", "es3");

$jscomp.initSymbolAsyncIterator = function () {};

$jscomp.iteratorPrototype = function (a) {
  a = {
    next: a
  };

  a[Symbol.iterator] = function () {
    return this;
  };

  return a;
};

$jscomp.checkStringArgs = function (a, c, f) {
  if (null == a) throw new TypeError("The 'this' value for String.prototype." + f + " must not be null or undefined");
  if (c instanceof RegExp) throw new TypeError("First argument to String.prototype." + f + " must not be a regular expression");
  return a + "";
};

$jscomp.polyfill("String.prototype.codePointAt", function (a) {
  return a ? a : function (c) {
    var f = $jscomp.checkStringArgs(this, null, "codePointAt"),
        k = f.length;
    c = Number(c) || 0;

    if (0 <= c && c < k) {
      c |= 0;
      var g = f.charCodeAt(c);
      if (55296 > g || 56319 < g || c + 1 === k) return g;
      c = f.charCodeAt(c + 1);
      return 56320 > c || 57343 < c ? g : 1024 * (g - 55296) + c + 9216;
    }
  };
}, "es6", "es3");
$jscomp.polyfill("String.fromCodePoint", function (a) {
  return a ? a : function (c) {
    for (var f = "", k = 0; k < arguments.length; k++) {
      var g = Number(arguments[k]);
      if (0 > g || 1114111 < g || g !== Math.floor(g)) throw new RangeError("invalid_code_point " + g);
      65535 >= g ? f += String.fromCharCode(g) : (g -= 65536, f += String.fromCharCode(g >>> 10 & 1023 | 55296), f += String.fromCharCode(g & 1023 | 56320));
    }

    return f;
  };
}, "es6", "es3");
$jscomp.polyfill("Array.from", function (a) {
  return a ? a : function (c, f, k) {
    f = null != f ? f : function (d) {
      return d;
    };
    var g = [],
        b = "undefined" != typeof Symbol && Symbol.iterator && c[Symbol.iterator];

    if ("function" == typeof b) {
      c = b.call(c);

      for (var e = 0; !(b = c.next()).done;) {
        g.push(f.call(k, b.value, e++));
      }
    } else for (b = c.length, e = 0; e < b; e++) {
      g.push(f.call(k, c[e], e));
    }

    return g;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.endsWith", function (a) {
  return a ? a : function (c, f) {
    var k = $jscomp.checkStringArgs(this, c, "endsWith");
    c += "";
    void 0 === f && (f = k.length);
    f = Math.max(0, Math.min(f | 0, k.length));

    for (var g = c.length; 0 < g && 0 < f;) {
      if (k[--f] != c[--g]) return !1;
    }

    return 0 >= g;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.startsWith", function (a) {
  return a ? a : function (c, f) {
    var k = $jscomp.checkStringArgs(this, c, "startsWith");
    c += "";
    var g = k.length,
        b = c.length;
    f = Math.max(0, Math.min(f | 0, k.length));

    for (var e = 0; e < b && f < g;) {
      if (k[f++] != c[e++]) return !1;
    }

    return e >= b;
  };
}, "es6", "es3");

$jscomp.iteratorFromArray = function (a, c) {
  a instanceof String && (a += "");
  var f = 0,
      k = !1,
      g = {
    next: function next() {
      if (!k && f < a.length) {
        var b = f++;
        return {
          value: c(b, a[b]),
          done: !1
        };
      }

      k = !0;
      return {
        done: !0,
        value: void 0
      };
    }
  };

  g[Symbol.iterator] = function () {
    return g;
  };

  return g;
};

$jscomp.polyfill("Array.prototype.keys", function (a) {
  return a ? a : function () {
    return $jscomp.iteratorFromArray(this, function (c) {
      return c;
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
  return a ? a : function (c, f) {
    return $jscomp.findInternal(this, c, f).v;
  };
}, "es6", "es3");
var PS = {};

(function (a) {
  a["Control.Alt"] = a["Control.Alt"] || {};
  a = a["Control.Alt"];

  a.Alt = function (c, f) {
    this.Functor0 = c;
    this.alt = f;
  };

  a.alt = function (c) {
    return c.alt;
  };
})(PS);

(function (a) {
  a["Control.Alternative"] = a["Control.Alternative"] || {};

  a["Control.Alternative"].Alternative = function (c, f) {
    this.Applicative0 = c;
    this.Plus1 = f;
  };
})(PS);

(function (a) {
  a.arrayApply = function (c) {
    return function (f) {
      for (var k = c.length, g = f.length, b = Array(k * g), e = 0, d = 0; d < k; d++) {
        for (var n = c[d], l = 0; l < g; l++) {
          b[e++] = n(f[l]);
        }
      }

      return b;
    };
  };
})(PS["Control.Apply"] = PS["Control.Apply"] || {});

(function (a) {
  a["Control.Semigroupoid"] = a["Control.Semigroupoid"] || {};
  a = a["Control.Semigroupoid"];
  var c = new function (f) {
    this.compose = f;
  }(function (f) {
    return function (k) {
      return function (g) {
        return f(k(g));
      };
    };
  });

  a.compose = function (f) {
    return f.compose;
  };

  a.composeFlipped = function (f) {
    return function (k) {
      return function (g) {
        return (0, f.compose)(g)(k);
      };
    };
  };

  a.semigroupoidFn = c;
})(PS);

(function (a) {
  a["Control.Category"] = a["Control.Category"] || {};
  var c = a["Control.Category"],
      f = a["Control.Semigroupoid"];
  a = new function (k, g) {
    this.Semigroupoid0 = k;
    this.identity = g;
  }(function () {
    return f.semigroupoidFn;
  }, function (k) {
    return k;
  });

  c.identity = function (k) {
    return k.identity;
  };

  c.categoryFn = a;
})(PS);

(function (a) {
  a["Data.Function"] = a["Data.Function"] || {};
  a = a["Data.Function"];

  a.flip = function (c) {
    return function (f) {
      return function (k) {
        return c(k)(f);
      };
    };
  };

  a["const"] = function (c) {
    return function (f) {
      return c;
    };
  };
})(PS);

(function (a) {
  a.arrayMap = function (c) {
    return function (f) {
      for (var k = f.length, g = Array(k), b = 0; b < k; b++) {
        g[b] = c(f[b]);
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

  a = function a(e) {
    this.map = e;
  };

  k = new a(k.compose(k.semigroupoidFn));
  f = new a(f.arrayMap);
  c.Functor = a;

  c.map = function (e) {
    return e.map;
  };

  c.mapFlipped = function (e) {
    return function (d) {
      return function (n) {
        return (0, e.map)(n)(d);
      };
    };
  };

  c["void"] = function (e) {
    return (0, e.map)(g["const"](b.unit));
  };

  c.voidRight = function (e) {
    return function (d) {
      return (0, e.map)(g["const"](d));
    };
  };

  c.voidLeft = function (e) {
    return function (d) {
      return function (n) {
        return (0, e.map)(g["const"](n))(d);
      };
    };
  };

  c.flap = function (e) {
    return function (d) {
      return function (n) {
        return (0, e.map)(function (l) {
          return l(n);
        })(d);
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

  a = function a(d, n) {
    this.Functor0 = d;
    this.apply = n;
  };

  var e = new a(function () {
    return b.functorFn;
  }, function (d) {
    return function (n) {
      return function (l) {
        return d(l)(n(l));
      };
    };
  });
  f = new a(function () {
    return b.functorArray;
  }, f.arrayApply);
  c.Apply = a;

  c.apply = function (d) {
    return d.apply;
  };

  c.applyFirst = function (d) {
    return function (n) {
      return function (l) {
        return (0, d.apply)(b.map(d.Functor0())(g["const"])(n))(l);
      };
    };
  };

  c.applySecond = function (d) {
    return function (n) {
      return function (l) {
        return (0, d.apply)(b.map(d.Functor0())(g["const"](k.identity(k.categoryFn)))(n))(l);
      };
    };
  };

  c.lift2 = function (d) {
    return function (n) {
      return function (l) {
        return function (m) {
          return (0, d.apply)(b.map(d.Functor0())(n)(l))(m);
        };
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

  a = function a(b, e) {
    this.Apply0 = b;
    this.pure = e;
  };

  var g = new a(function () {
    return f.applyArray;
  }, function (b) {
    return [b];
  });
  c.Applicative = a;

  c.pure = function (b) {
    return b.pure;
  };

  c.liftA1 = function (b) {
    return function (e) {
      return function (d) {
        return f.apply(b.Apply0())((0, b.pure)(e))(d);
      };
    };
  };

  c.unless = function (b) {
    return function (e) {
      return function (d) {
        if (!e) return d;
        if (e) return (0, b.pure)(k.unit);
        throw Error("Failed pattern match at Control.Applicative (line 62, column 1 - line 62, column 65): " + [e.constructor.name, d.constructor.name]);
      };
    };
  };

  c.applicativeArray = g;
})(PS);

(function (a) {
  a.arrayBind = function (c) {
    return function (f) {
      for (var k = [], g = 0, b = c.length; g < b; g++) {
        Array.prototype.push.apply(k, f(c[g]));
      }

      return k;
    };
  };
})(PS["Control.Bind"] = PS["Control.Bind"] || {});

(function (a) {
  a["Control.Bind"] = a["Control.Bind"] || {};

  var c = a["Control.Bind"],
      f = a["Control.Apply"],
      k = a["Control.Category"],
      g = a["Data.Function"],
      b = function b(d, n) {
    this.Apply0 = d;
    this.bind = n;
  };

  a = new b(function () {
    return f.applyArray;
  }, a["Control.Bind"].arrayBind);
  var e = new function (d) {
    this.discard = d;
  }(function (d) {
    return d.bind;
  });
  c.Bind = b;

  c.bind = function (d) {
    return d.bind;
  };

  c.bindFlipped = function (d) {
    return g.flip(d.bind);
  };

  c.discard = function (d) {
    return d.discard;
  };

  c.join = function (d) {
    return function (n) {
      return (0, d.bind)(n)(k.identity(k.categoryFn));
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

  c.Monad = function (g, b) {
    this.Applicative0 = g;
    this.Bind1 = b;
  };

  c.ap = function (g) {
    return function (b) {
      return function (e) {
        return k.bind(g.Bind1())(b)(function (d) {
          return k.bind(g.Bind1())(e)(function (n) {
            return f.pure(g.Applicative0())(d(n));
          });
        });
      };
    };
  };
})(PS);

(function (a) {
  a["Control.Lazy"] = a["Control.Lazy"] || {};
  a = a["Control.Lazy"];

  a.defer = function (c) {
    return c.defer;
  };

  a.Lazy = function (c) {
    this.defer = c;
  };
})(PS);

(function (a) {
  a["Data.Bifunctor"] = a["Data.Bifunctor"] || {};
  var c = a["Data.Bifunctor"],
      f = a["Control.Category"];

  c.bimap = function (k) {
    return k.bimap;
  };

  c.Bifunctor = function (k) {
    this.bimap = k;
  };

  c.lmap = function (k) {
    return function (g) {
      return (0, k.bimap)(g)(f.identity(f.categoryFn));
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
  var c = function c(f) {
    return function (k) {
      return function (g) {
        return function (b) {
          return function (e) {
            return b < e ? f : b === e ? k : g;
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
  var c = function c(f) {
    return function (k) {
      return f === k;
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
    function f() {}

    f.value = new f();
    return f;
  }();

  a.IsSymbol = function (f) {
    this.reflectSymbol = f;
  };

  a.reflectSymbol = function (f) {
    return f.reflectSymbol;
  };

  a.SProxy = c;
})(PS);

(function (a) {
  a.unsafeGet = function (c) {
    return function (f) {
      return f[c];
    };
  };

  a.unsafeSet = function (c) {
    return function (f) {
      return function (k) {
        var g = {},
            b;

        for (b in k) {
          ({}).hasOwnProperty.call(k, b) && (g[b] = k[b]);
        }

        g[c] = f;
        return g;
      };
    };
  };

  a.unsafeDelete = function (c) {
    return function (f) {
      var k = {},
          g;

      for (g in f) {
        g !== c && {}.hasOwnProperty.call(f, g) && (k[g] = f[g]);
      }

      return k;
    };
  };
})(PS["Record.Unsafe"] = PS["Record.Unsafe"] || {});

(function (a) {
  a["Record.Unsafe"] = a["Record.Unsafe"] || {};
  var c = a["Record.Unsafe"];
  a = a["Record.Unsafe"];
  c.unsafeGet = a.unsafeGet;
  c.unsafeSet = a.unsafeSet;
  c.unsafeDelete = a.unsafeDelete;
})(PS);

(function (a) {
  a["Type.Data.RowList"] = a["Type.Data.RowList"] || {};
  a = a["Type.Data.RowList"];

  var c = function () {
    function f() {}

    f.value = new f();
    return f;
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
      e = function e(r) {
    this.eqRecord = r;
  },
      d = function d(r) {
    this.eq = r;
  };

  a = new d(f.eqStringImpl);
  var n = new e(function (r) {
    return function (w) {
      return function (z) {
        return !0;
      };
    };
  }),
      l = new d(f.eqIntImpl),
      m = new d(f.eqCharImpl);
  f = new d(f.eqBooleanImpl);
  c.Eq = d;

  c.eq = function (r) {
    return r.eq;
  };

  c.eqBoolean = f;
  c.eqInt = l;
  c.eqChar = m;
  c.eqString = a;

  c.eqRec = function (r) {
    return function (w) {
      return new d((0, w.eqRecord)(b.RLProxy.value));
    };
  };

  c.eqRowNil = n;

  c.eqRowCons = function (r) {
    return function (w) {
      return function (z) {
        return function (u) {
          return new e(function (t) {
            return function (p) {
              return function (y) {
                var x = (0, r.eqRecord)(b.RLProxy.value)(p)(y),
                    A = k.reflectSymbol(z)(k.SProxy.value);
                A = g.unsafeGet(A);
                return (0, u.eq)(A(p))(A(y)) && x;
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
    function g() {}

    g.value = new g();
    return g;
  }(),
      f = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      k = function () {
    function g() {}

    g.value = new g();
    return g;
  }();

  a.LT = c;
  a.GT = f;
  a.EQ = k;
})(PS);

(function (a) {
  a.intSub = function (c) {
    return function (f) {
      return c - f | 0;
    };
  };
})(PS["Data.Ring"] = PS["Data.Ring"] || {});

(function (a) {
  a.intAdd = function (c) {
    return function (f) {
      return c + f | 0;
    };
  };

  a.intMul = function (c) {
    return function (f) {
      return c * f | 0;
    };
  };
})(PS["Data.Semiring"] = PS["Data.Semiring"] || {});

(function (a) {
  a["Data.Semiring"] = a["Data.Semiring"] || {};
  var c = a["Data.Semiring"];
  a = a["Data.Semiring"];
  a = new function (f, k, g, b) {
    this.add = f;
    this.mul = k;
    this.one = g;
    this.zero = b;
  }(a.intAdd, a.intMul, 1, 0);

  c.zero = function (f) {
    return f.zero;
  };

  c.semiringInt = a;
})(PS);

(function (a) {
  a["Data.Ring"] = a["Data.Ring"] || {};
  var c = a["Data.Ring"],
      f = a["Data.Semiring"];
  a = new function (k, g) {
    this.Semiring0 = k;
    this.sub = g;
  }(function () {
    return f.semiringInt;
  }, a["Data.Ring"].intSub);

  c.negate = function (k) {
    return function (g) {
      return (0, k.sub)(f.zero(k.Semiring0()))(g);
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

  a = function a(m, r) {
    this.Eq0 = m;
    this.compare = r;
  };

  var d = new a(function () {
    return k.eqInt;
  }, f.ordIntImpl(g.LT.value)(g.EQ.value)(g.GT.value)),
      n = new a(function () {
    return k.eqChar;
  }, f.ordCharImpl(g.LT.value)(g.EQ.value)(g.GT.value));
  f = new a(function () {
    return k.eqBoolean;
  }, f.ordBooleanImpl(g.LT.value)(g.EQ.value)(g.GT.value));

  var l = function l(m) {
    return function (r) {
      return function (w) {
        return (0, m.compare)(r)(w) instanceof g.LT ? !1 : !0;
      };
    };
  };

  c.Ord = a;

  c.compare = function (m) {
    return m.compare;
  };

  c.max = function (m) {
    return function (r) {
      return function (w) {
        var z = (0, m.compare)(r)(w);
        if (z instanceof g.LT) return w;
        if (z instanceof g.EQ || z instanceof g.GT) return r;
        throw Error("Failed pattern match at Data.Ord (line 167, column 3 - line 170, column 12): " + [z.constructor.name]);
      };
    };
  };

  c.abs = function (m) {
    return function (r) {
      return function (w) {
        return l(m)(w)(e.zero(r.Semiring0())) ? w : b.negate(r)(w);
      };
    };
  };

  c.ordBoolean = f;
  c.ordInt = d;
  c.ordChar = n;
})(PS);

(function (a) {
  a["Data.Bounded"] = a["Data.Bounded"] || {};
  var c = a["Data.Bounded"],
      f = a["Data.Bounded"],
      k = a["Data.Ord"];

  a = function a(e, d, n) {
    this.Ord0 = e;
    this.bottom = d;
    this.top = n;
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

  c.bottom = function (e) {
    return e.bottom;
  };

  c.top = function (e) {
    return e.top;
  };

  c.boundedBoolean = b;
  c.boundedInt = g;
  c.boundedChar = f;
})(PS);

(function (a) {
  a.showIntImpl = function (c) {
    return c.toString();
  };

  a.showCharImpl = function (c) {
    var f = c.charCodeAt(0);

    if (32 > f || 127 === f) {
      switch (c) {
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

      return "'\\" + f.toString(10) + "'";
    }

    return "'" === c || "\\" === c ? "'\\" + c + "'" : "'" + c + "'";
  };

  a.showStringImpl = function (c) {
    var f = c.length;
    return '"' + c.replace(/[\0-\x1F\x7F"\\]/g, function (k, g) {
      switch (k) {
        case '"':
        case "\\":
          return "\\" + k;

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
      g = g < f && "0" <= c[g] && "9" >= c[g] ? "\\&" : "";
      return "\\" + k.charCodeAt(0).toString(10) + g;
    }) + '"';
  };

  a.showArrayImpl = function (c) {
    return function (f) {
      for (var k = [], g = 0, b = f.length; g < b; g++) {
        k[g] = c(f[g]);
      }

      return "[" + k.join(",") + "]";
    };
  };

  a.cons = function (c) {
    return function (f) {
      return [c].concat(f);
    };
  };

  a.join = function (c) {
    return function (f) {
      return f.join(c);
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
      e = function e(w) {
    this.showRecordFields = w;
  },
      d = function d(w) {
    this.show = w;
  };

  a = new d(f.showStringImpl);
  var n = new e(function (w) {
    return function (z) {
      return [];
    };
  }),
      l = new d(f.showIntImpl),
      m = new d(f.showCharImpl),
      r = new d(function (w) {
    if (w) return "true";
    if (!w) return "false";
    throw Error("Failed pattern match at Data.Show (line 20, column 1 - line 22, column 23): " + [w.constructor.name]);
  });
  c.Show = d;

  c.show = function (w) {
    return w.show;
  };

  c.showBoolean = r;
  c.showInt = l;
  c.showChar = m;
  c.showString = a;

  c.showArray = function (w) {
    return new d(f.showArrayImpl(w.show));
  };

  c.showRecord = function (w) {
    return function (z) {
      return new d(function (u) {
        u = (0, z.showRecordFields)(b.RLProxy.value)(u);
        return 0 === u.length ? "{}" : f.join(" ")(["{", f.join(", ")(u), "}"]);
      });
    };
  };

  c.showRecordFieldsNil = n;

  c.showRecordFieldsCons = function (w) {
    return function (z) {
      return function (u) {
        return new e(function (t) {
          return function (p) {
            var y = (0, z.showRecordFields)(b.RLProxy.value)(p),
                x = k.reflectSymbol(w)(k.SProxy.value);
            p = g.unsafeGet(x)(p);
            return f.cons(f.join(": ")([x, (0, u.show)(p)]))(y);
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
      n = a["Data.Function"],
      l = a["Data.Functor"],
      m = a["Data.Ord"],
      r = a["Data.Ordering"],
      w = a["Data.Show"],
      z = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      u = function () {
    function v(F) {
      this.value0 = F;
    }

    v.create = function (F) {
      return new v(F);
    };

    return v;
  }(),
      t = function t(v) {
    return function (F) {
      return function (G) {
        if (G instanceof z) return v;
        if (G instanceof u) return F(G.value0);
        throw Error("Failed pattern match at Data.Maybe (line 217, column 1 - line 217, column 51): " + [v.constructor.name, F.constructor.name, G.constructor.name]);
      };
    };
  };

  a = t(!0)(n["const"](!1));
  n = t(!1)(n["const"](!0));

  var p = new l.Functor(function (v) {
    return function (F) {
      return F instanceof u ? new u(v(F.value0)) : z.value;
    };
  }),
      y = function y(v) {
    return new d.Eq(function (F) {
      return function (G) {
        return F instanceof z && G instanceof z ? !0 : F instanceof u && G instanceof u ? d.eq(v)(F.value0)(G.value0) : !1;
      };
    });
  },
      x = function x(v) {
    return new m.Ord(function () {
      return y(v.Eq0());
    }, function (F) {
      return function (G) {
        if (F instanceof z && G instanceof z) return r.EQ.value;
        if (F instanceof z) return r.LT.value;
        if (G instanceof z) return r.GT.value;
        if (F instanceof u && G instanceof u) return m.compare(v)(F.value0)(G.value0);
        throw Error("Failed pattern match at Data.Maybe (line 194, column 1 - line 194, column 51): " + [F.constructor.name, G.constructor.name]);
      };
    });
  },
      A = new k.Apply(function () {
    return p;
  }, function (v) {
    return function (F) {
      if (v instanceof u) return l.map(p)(v.value0)(F);
      if (v instanceof z) return z.value;
      throw Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [v.constructor.name, F.constructor.name]);
    };
  });

  k = new g.Bind(function () {
    return A;
  }, function (v) {
    return function (F) {
      if (v instanceof u) return F(v.value0);
      if (v instanceof z) return z.value;
      throw Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [v.constructor.name, F.constructor.name]);
    };
  });
  f = new f.Applicative(function () {
    return A;
  }, u.create);
  c.Nothing = z;
  c.Just = u;
  c.maybe = t;

  c.fromMaybe = function (v) {
    return t(v)(b.identity(b.categoryFn));
  };

  c.isJust = n;
  c.isNothing = a;

  c.fromJust = function (v) {
    return function (F) {
      if (F instanceof u) return F.value0;
      throw Error("Failed pattern match at Data.Maybe (line 268, column 1 - line 268, column 46): " + [F.constructor.name]);
    };
  };

  c.functorMaybe = p;
  c.applyMaybe = A;
  c.applicativeMaybe = f;
  c.bindMaybe = k;
  c.eqMaybe = y;
  c.ordMaybe = x;

  c.boundedMaybe = function (v) {
    return new e.Bounded(function () {
      return x(v.Ord0());
    }, z.value, new u(e.top(v)));
  };

  c.showMaybe = function (v) {
    return new w.Show(function (F) {
      if (F instanceof u) return "(Just " + (w.show(v)(F.value0) + ")");
      if (F instanceof z) return "Nothing";
      throw Error("Failed pattern match at Data.Maybe (line 205, column 1 - line 207, column 28): " + [F.constructor.name]);
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
      n = a["Data.Functor"],
      l = a["Data.Maybe"],
      m = function () {
    function p(y) {
      this.value0 = y;
    }

    p.create = function (y) {
      return new p(y);
    };

    return p;
  }(),
      r = function () {
    function p(y) {
      this.value0 = y;
    }

    p.create = function (y) {
      return new p(y);
    };

    return p;
  }(),
      w = new n.Functor(function (p) {
    return function (y) {
      if (y instanceof m) return new m(y.value0);
      if (y instanceof r) return new r(p(y.value0));
      throw Error("Failed pattern match at Data.Either (line 38, column 1 - line 38, column 52): " + [y.constructor.name]);
    };
  });

  a = function a(p) {
    return function (y) {
      return function (x) {
        if (x instanceof m) return p(x.value0);
        if (x instanceof r) return y(x.value0);
        throw Error("Failed pattern match at Data.Either (line 238, column 1 - line 238, column 64): " + [p.constructor.name, y.constructor.name, x.constructor.name]);
      };
    };
  };

  d = a(d["const"](l.Nothing.value))(l.Just.create);
  e = new e.Bifunctor(function (p) {
    return function (y) {
      return function (x) {
        if (x instanceof m) return new m(p(x.value0));
        if (x instanceof r) return new r(y(x.value0));
        throw Error("Failed pattern match at Data.Either (line 46, column 1 - line 48, column 36): " + [p.constructor.name, y.constructor.name, x.constructor.name]);
      };
    };
  });
  var z = new k.Apply(function () {
    return w;
  }, function (p) {
    return function (y) {
      if (p instanceof m) return new m(p.value0);
      if (p instanceof r) return n.map(w)(p.value0)(y);
      throw Error("Failed pattern match at Data.Either (line 82, column 1 - line 84, column 30): " + [p.constructor.name, y.constructor.name]);
    };
  }),
      u = new g.Bind(function () {
    return z;
  }, a(function (p) {
    return function (y) {
      return new m(p);
    };
  })(function (p) {
    return function (y) {
      return y(p);
    };
  })),
      t = new f.Applicative(function () {
    return z;
  }, r.create);
  f = new b.Monad(function () {
    return t;
  }, function () {
    return u;
  });
  c.Left = m;
  c.Right = r;
  c.either = a;
  c.hush = d;
  c.functorEither = w;
  c.bifunctorEither = e;
  c.applicativeEither = t;
  c.bindEither = u;
  c.monadEither = f;
})(PS);

(function (a) {
  a["Control.Monad.Rec.Class"] = a["Control.Monad.Rec.Class"] || {};

  var c = a["Control.Monad.Rec.Class"],
      f = a["Data.Bifunctor"],
      k = a["Data.Either"],
      g = function () {
    function n(l) {
      this.value0 = l;
    }

    n.create = function (l) {
      return new n(l);
    };

    return n;
  }(),
      b = function () {
    function n(l) {
      this.value0 = l;
    }

    n.create = function (l) {
      return new n(l);
    };

    return n;
  }();

  a = function a(n, l) {
    this.Monad0 = n;
    this.tailRecM = l;
  };

  var e = function e(n) {
    return function (l) {
      l = n(l);

      for (var m = !1, r; !m;) {
        if (r = l, r instanceof g) l = n(r.value0), r = void 0;else if (r instanceof b) m = !0, r = r.value0;else throw Error("Failed pattern match at Control.Monad.Rec.Class (line 93, column 3 - line 93, column 25): " + [r.constructor.name]);
      }

      return r;
    };
  },
      d = new a(function () {
    return k.monadEither;
  }, function (n) {
    return function (l) {
      return e(function (m) {
        if (m instanceof k.Left) return new b(new k.Left(m.value0));
        if (m instanceof k.Right && m.value0 instanceof g) return new g(n(m.value0.value0));
        if (m instanceof k.Right && m.value0 instanceof b) return new b(new k.Right(m.value0.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 121, column 7 - line 121, column 33): " + [m.constructor.name]);
      })(n(l));
    };
  });

  f = new f.Bifunctor(function (n) {
    return function (l) {
      return function (m) {
        if (m instanceof g) return new g(n(m.value0));
        if (m instanceof b) return new b(l(m.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 29, column 1 - line 31, column 34): " + [n.constructor.name, l.constructor.name, m.constructor.name]);
      };
    };
  });
  c.Loop = g;
  c.Done = b;
  c.MonadRec = a;

  c.tailRecM = function (n) {
    return n.tailRecM;
  };

  c.bifunctorStep = f;
  c.monadRecEither = d;
})(PS);

(function (a) {
  a["Control.Plus"] = a["Control.Plus"] || {};
  a = a["Control.Plus"];

  a.Plus = function (c, f) {
    this.Alt0 = c;
    this.empty = f;
  };

  a.empty = function (c) {
    return c.empty;
  };
})(PS);

(function (a) {
  a.foldrArray = function (c) {
    return function (f) {
      return function (k) {
        for (var g = f, b = k.length - 1; 0 <= b; b--) {
          g = c(k[b])(g);
        }

        return g;
      };
    };
  };

  a.foldlArray = function (c) {
    return function (f) {
      return function (k) {
        for (var g = f, b = k.length, e = 0; e < b; e++) {
          g = c(g)(k[e]);
        }

        return g;
      };
    };
  };
})(PS["Data.Foldable"] = PS["Data.Foldable"] || {});

(function (a) {
  a.boolConj = function (c) {
    return function (f) {
      return c && f;
    };
  };

  a.boolDisj = function (c) {
    return function (f) {
      return c || f;
    };
  };

  a.boolNot = function (c) {
    return !c;
  };
})(PS["Data.HeytingAlgebra"] = PS["Data.HeytingAlgebra"] || {});

(function (a) {
  a["Data.HeytingAlgebra"] = a["Data.HeytingAlgebra"] || {};
  var c = a["Data.HeytingAlgebra"];
  a = a["Data.HeytingAlgebra"];
  var f = new function (k, g, b, e, d, n) {
    this.conj = k;
    this.disj = g;
    this.ff = b;
    this.implies = e;
    this.not = d;
    this.tt = n;
  }(a.boolConj, a.boolDisj, !1, function (k) {
    return function (g) {
      return (0, f.disj)((0, f.not)(k))(g);
    };
  }, a.boolNot, !0);

  c.ff = function (k) {
    return k.ff;
  };

  c.disj = function (k) {
    return k.disj;
  };

  c.not = function (k) {
    return k.not;
  };

  c.heytingAlgebraBoolean = f;
})(PS);

(function (a) {
  a.concatString = function (c) {
    return function (f) {
      return c + f;
    };
  };

  a.concatArray = function (c) {
    return function (f) {
      return 0 === c.length ? f : 0 === f.length ? c : c.concat(f);
    };
  };
})(PS["Data.Semigroup"] = PS["Data.Semigroup"] || {});

(function (a) {
  a["Data.Semigroup"] = a["Data.Semigroup"] || {};

  var c = a["Data.Semigroup"],
      f = a["Data.Semigroup"],
      k = a["Data.Unit"],
      g = function g(e) {
    this.append = e;
  };

  a = new g(function (e) {
    return function (d) {
      return k.unit;
    };
  });
  var b = new g(f.concatString);
  f = new g(f.concatArray);
  c.Semigroup = g;

  c.append = function (e) {
    return e.append;
  };

  c.semigroupString = b;
  c.semigroupUnit = a;

  c.semigroupFn = function (e) {
    return new g(function (d) {
      return function (n) {
        return function (l) {
          return (0, e.append)(d(l))(n(l));
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
      k = function k(e, d) {
    this.Semigroup0 = e;
    this.mempty = d;
  };

  a = new k(function () {
    return f.semigroupUnit;
  }, a["Data.Unit"].unit);
  var g = new k(function () {
    return f.semigroupString;
  }, ""),
      b = new k(function () {
    return f.semigroupArray;
  }, []);
  c.Monoid = k;

  c.mempty = function (e) {
    return e.mempty;
  };

  c.monoidUnit = a;

  c.monoidFn = function (e) {
    return new k(function () {
      return f.semigroupFn(e.Semigroup0());
    }, function (d) {
      return e.mempty;
    });
  };

  c.monoidString = g;
  c.monoidArray = b;
})(PS);

(function (a) {
  a["Data.Monoid.Disj"] = a["Data.Monoid.Disj"] || {};

  var c = a["Data.Monoid.Disj"],
      f = a["Data.HeytingAlgebra"],
      k = a["Data.Monoid"],
      g = a["Data.Semigroup"],
      b = function b(e) {
    return new g.Semigroup(function (d) {
      return function (n) {
        return f.disj(e)(d)(n);
      };
    });
  };

  c.Disj = function (e) {
    return e;
  };

  c.monoidDisj = function (e) {
    return new k.Monoid(function () {
      return b(e);
    }, f.ff(e));
  };
})(PS);

(function (a) {
  a["Data.Newtype"] = a["Data.Newtype"] || {};

  var c = a["Data.Newtype"],
      f = a["Data.Functor"],
      k = function k(g, b) {
    this.unwrap = g;
    this.wrap = b;
  };

  a = new k(function (g) {
    return g;
  }, a["Data.Monoid.Disj"].Disj);

  c.unwrap = function (g) {
    return g.unwrap;
  };

  c.wrap = function (g) {
    return g.wrap;
  };

  c.Newtype = k;

  c.alaF = function (g) {
    return function (b) {
      return function (e) {
        return function (d) {
          return function (n) {
            return function (l) {
              var m = f.map(b)(d.unwrap),
                  r = f.map(g)(e.wrap);
              return function (w) {
                return m(l(r(w)));
              };
            };
          };
        };
      };
    };
  };

  c.over = function (g) {
    return function (b) {
      return function (e) {
        return function (d) {
          var n = b.wrap,
              l = g.unwrap;
          return function (m) {
            return n(d(l(m)));
          };
        };
      };
    };
  };

  c.under = function (g) {
    return function (b) {
      return function (e) {
        return function (d) {
          var n = b.unwrap,
              l = g.wrap;
          return function (m) {
            return n(d(l(m)));
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
      n = a["Data.Functor"],
      l = a["Data.HeytingAlgebra"],
      m = a["Data.Maybe"],
      r = a["Data.Monoid"],
      w = a["Data.Monoid.Disj"],
      z = a["Data.Newtype"],
      u = a["Data.Semigroup"],
      t = a["Data.Unit"];

  a = function a(G, I, H) {
    this.foldMap = G;
    this.foldl = I;
    this.foldr = H;
  };

  var p = function p(G) {
    return function (I) {
      return function (H) {
        return (0, I.foldr)(function () {
          var B = g.applySecond(G.Apply0());
          return function (K) {
            return B(H(K));
          };
        }())(k.pure(G)(t.unit));
      };
    };
  },
      y = new a(function (G) {
    return function (I) {
      return function (H) {
        if (H instanceof m.Nothing) return r.mempty(G);
        if (H instanceof m.Just) return I(H.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [I.constructor.name, H.constructor.name]);
      };
    };
  }, function (G) {
    return function (I) {
      return function (H) {
        if (H instanceof m.Nothing) return I;
        if (H instanceof m.Just) return G(I)(H.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [G.constructor.name, I.constructor.name, H.constructor.name]);
      };
    };
  }, function (G) {
    return function (I) {
      return function (H) {
        if (H instanceof m.Nothing) return I;
        if (H instanceof m.Just) return G(H.value0)(I);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [G.constructor.name, I.constructor.name, H.constructor.name]);
      };
    };
  }),
      x = function x(G) {
    return function (I) {
      return function (H) {
        return (0, G.foldr)(function (B) {
          return function (K) {
            return u.append(I.Semigroup0())(H(B))(K);
          };
        })(r.mempty(I));
      };
    };
  },
      A = new a(function (G) {
    return x(A)(G);
  }, f.foldlArray, f.foldrArray),
      v = function v(G) {
    return function (I) {
      return z.alaF(n.functorFn)(n.functorFn)(z.newtypeDisj)(z.newtypeDisj)(w.Disj)((0, G.foldMap)(w.monoidDisj(I)));
    };
  },
      F = function F(G) {
    return function (I) {
      var H = v(G)(l.heytingAlgebraBoolean),
          B = e.eq(I);
      return function (K) {
        return H(B(K));
      };
    };
  };

  c.Foldable = a;

  c.foldr = function (G) {
    return G.foldr;
  };

  c.foldl = function (G) {
    return G.foldl;
  };

  c.foldMap = function (G) {
    return G.foldMap;
  };

  c.fold = function (G) {
    return function (I) {
      return (0, G.foldMap)(I)(b.identity(b.categoryFn));
    };
  };

  c.traverse_ = p;

  c.for_ = function (G) {
    return function (I) {
      return d.flip(p(G)(I));
    };
  };

  c.intercalate = function (G) {
    return function (I) {
      return function (H) {
        return function (B) {
          return (0, G.foldl)(function (K) {
            return function (X) {
              return K.init ? {
                init: !1,
                acc: X
              } : {
                init: !1,
                acc: u.append(I.Semigroup0())(K.acc)(u.append(I.Semigroup0())(H)(X))
              };
            };
          })({
            init: !0,
            acc: r.mempty(I)
          })(B).acc;
        };
      };
    };
  };

  c.any = v;

  c.notElem = function (G) {
    return function (I) {
      return function (H) {
        var B = l.not(l.heytingAlgebraBoolean),
            K = F(G)(I)(H);
        return function (X) {
          return B(K(X));
        };
      };
    };
  };

  c.find = function (G) {
    return function (I) {
      return (0, G.foldl)(function (H) {
        return function (B) {
          return H instanceof m.Nothing && I(B) ? new m.Just(B) : H;
        };
      })(m.Nothing.value);
    };
  };

  c.foldableArray = A;
  c.foldableMaybe = y;
})(PS);

(function (a) {
  a["Data.NonEmpty"] = a["Data.NonEmpty"] || {};

  var c = a["Data.NonEmpty"],
      f = a["Control.Plus"],
      k = a["Data.Foldable"],
      g = a["Data.Functor"],
      b = a["Data.Semigroup"],
      e = a["Data.Show"],
      d = function () {
    function n(l, m) {
      this.value0 = l;
      this.value1 = m;
    }

    n.create = function (l) {
      return function (m) {
        return new n(l, m);
      };
    };

    return n;
  }();

  c.NonEmpty = d;

  c.singleton = function (n) {
    return function (l) {
      return new d(l, f.empty(n));
    };
  };

  c.showNonEmpty = function (n) {
    return function (l) {
      return new e.Show(function (m) {
        return "(NonEmpty " + (e.show(n)(m.value0) + (" " + (e.show(l)(m.value1) + ")")));
      });
    };
  };

  c.functorNonEmpty = function (n) {
    return new g.Functor(function (l) {
      return function (m) {
        return new d(l(m.value0), g.map(n)(l)(m.value1));
      };
    });
  };

  c.foldableNonEmpty = function (n) {
    return new k.Foldable(function (l) {
      return function (m) {
        return function (r) {
          return b.append(l.Semigroup0())(m(r.value0))(k.foldMap(n)(l)(m)(r.value1));
        };
      };
    }, function (l) {
      return function (m) {
        return function (r) {
          return k.foldl(n)(l)(l(m)(r.value0))(r.value1);
        };
      };
    }, function (l) {
      return function (m) {
        return function (r) {
          return l(r.value0)(k.foldr(n)(l)(m)(r.value1));
        };
      };
    });
  };
})(PS);

(function (a) {
  a["Data.List.Types"] = a["Data.List.Types"] || {};

  var c = a["Data.List.Types"],
      f = a["Control.Alt"],
      k = a["Control.Plus"],
      g = a["Data.Foldable"],
      b = a["Data.Function"],
      e = a["Data.Functor"],
      d = a["Data.Monoid"],
      n = a["Data.NonEmpty"],
      l = a["Data.Semigroup"],
      m = a["Data.Show"],
      r = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      w = function () {
    function v(F, G) {
      this.value0 = F;
      this.value1 = G;
    }

    v.create = function (F) {
      return function (G) {
        return new v(F, G);
      };
    };

    return v;
  }(),
      z = new e.Functor(function (v) {
    return function (F) {
      return function (G) {
        function I(X, D) {
          if (D instanceof w && D.value1 instanceof w && D.value1.value1 instanceof w) H = new w(D, X), G = D.value1.value1.value1;else return B = !0, function (N) {
            return function (O) {
              for (var J = N, Q = !1, q; !Q;) {
                q = J;
                var U = O;
                q instanceof w && q.value0 instanceof w && q.value0.value1 instanceof w && q.value0.value1.value1 instanceof w ? (J = q.value1, O = new w(v(q.value0.value0), new w(v(q.value0.value1.value0), new w(v(q.value0.value1.value1.value0), U))), q = void 0) : (Q = !0, q = U);
              }

              return q;
            };
          }(X)(function (N) {
            return N instanceof w && N.value1 instanceof w && N.value1.value1 instanceof r ? new w(v(N.value0), new w(v(N.value1.value0), r.value)) : N instanceof w && N.value1 instanceof r ? new w(v(N.value0), r.value) : r.value;
          }(D));
        }

        for (var H = F, B = !1, K; !B;) {
          K = I(H, G);
        }

        return K;
      };
    }(r.value);
  });

  a = n.functorNonEmpty(z);

  var u = new g.Foldable(function (v) {
    return function (F) {
      return g.foldl(u)(function (G) {
        var I = l.append(v.Semigroup0())(G);
        return function (H) {
          return I(F(H));
        };
      })(d.mempty(v));
    };
  }, function (v) {
    return function (F) {
      return function (G) {
        for (var I = F, H = !1, B; !H;) {
          B = I;
          var K = G;
          if (K instanceof r) H = !0;else {
            if (K instanceof w) I = v(B)(K.value0), G = K.value1;else throw Error("Failed pattern match at Data.List.Types (line 109, column 12 - line 111, column 30): " + [K.constructor.name]);
            B = void 0;
          }
        }

        return B;
      };
    };
  }, function (v) {
    return function (F) {
      var G = g.foldl(u)(b.flip(w.create))(r.value),
          I = g.foldl(u)(b.flip(v))(F);
      return function (H) {
        return I(G(H));
      };
    };
  }),
      t = n.foldableNonEmpty(u),
      p = new l.Semigroup(function (v) {
    return function (F) {
      return g.foldr(u)(w.create)(F)(v);
    };
  }),
      y = new d.Monoid(function () {
    return p;
  }, r.value),
      x = function x(v) {
    return new m.Show(function (F) {
      return F instanceof r ? "Nil" : "(" + (g.intercalate(u)(d.monoidString)(" : ")(e.map(z)(m.show(v))(F)) + " : Nil)");
    });
  },
      A = new f.Alt(function () {
    return z;
  }, l.append(p));

  f = new k.Plus(function () {
    return A;
  }, r.value);
  c.Nil = r;
  c.Cons = w;

  c.NonEmptyList = function (v) {
    return v;
  };

  c.monoidList = y;
  c.foldableList = u;
  c.plusList = f;

  c.showNonEmptyList = function (v) {
    return new m.Show(function (F) {
      return "(NonEmptyList " + (m.show(n.showNonEmpty(v)(x(v)))(F) + ")");
    });
  };

  c.functorNonEmptyList = a;
  c.foldableNonEmptyList = t;
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
      n = a["Data.Bifunctor"],
      l = a["Data.Functor"],
      m = a["Data.List.Types"],
      r = a["Data.Unit"],
      w = function () {
    return function (t) {
      return function (p) {
        for (var y = t, x = !1, A; !x;) {
          A = y;
          var v = p;
          if (v instanceof m.Nil) x = !0;else {
            if (v instanceof m.Cons) y = new m.Cons(v.value0, A), p = v.value1;else throw Error("Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): " + [A.constructor.name, v.constructor.name]);
            A = void 0;
          }
        }

        return A;
      };
    }(m.Nil.value);
  }(),
      z = function z(t) {
    return function (p) {
      return function (y) {
        return g.apply(t.Applicative0().Apply0())(l.map(t.Plus1().Alt0().Functor0())(m.Cons.create)(y))(e.defer(p)(function (x) {
          return u(t)(p)(y);
        }));
      };
    };
  },
      u = function u(t) {
    return function (p) {
      return function (y) {
        return f.alt(t.Plus1().Alt0())(z(t)(p)(y))(k.pure(t.Applicative0())(m.Nil.value));
      };
    };
  };

  c.some = z;

  c.manyRec = function (t) {
    return function (p) {
      return function (y) {
        return d.tailRecM(t)(function (x) {
          return b.bind(t.Monad0().Bind1())(f.alt(p.Plus1().Alt0())(l.map(p.Plus1().Alt0().Functor0())(d.Loop.create)(y))(k.pure(p.Applicative0())(new d.Done(r.unit))))(function (A) {
            return k.pure(p.Applicative0())(n.bimap(d.bifunctorStep)(function (v) {
              return new m.Cons(v, x);
            })(function (v) {
              return w(x);
            })(A));
          });
        })(m.Nil.value);
      };
    };
  };

  c.reverse = w;
})(PS);

(function (a) {
  a["Data.Tuple"] = a["Data.Tuple"] || {};
  var c = a["Data.Tuple"];
  a = a["Data.Functor"];

  var f = function () {
    function k(g, b) {
      this.value0 = g;
      this.value1 = b;
    }

    k.create = function (g) {
      return function (b) {
        return new k(g, b);
      };
    };

    return k;
  }();

  a = new a.Functor(function (k) {
    return function (g) {
      return new f(g.value0, k(g.value1));
    };
  });
  c.Tuple = f;

  c.fst = function (k) {
    return k.value0;
  };

  c.snd = function (k) {
    return k.value1;
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
    function d(n, l) {
      this.value0 = n;
      this.value1 = l;
    }

    d.create = function (n) {
      return function (l) {
        return new d(n, l);
      };
    };

    return d;
  }();

  a = new e(k.Nil.value, k.Nil.value);
  c.empty = a;

  c["null"] = function (d) {
    return d.value0 instanceof k.Nil && d.value1 instanceof k.Nil ? !0 : !1;
  };

  c.snoc = function (d) {
    return function (n) {
      return new e(d.value0, new k.Cons(n, d.value1));
    };
  };

  c.uncons = function (d) {
    for (var n = !1, l; !n;) {
      if (l = d, l.value0 instanceof k.Nil && l.value1 instanceof k.Nil) n = !0, l = g.Nothing.value;else if (l.value0 instanceof k.Nil) d = new e(f.reverse(l.value1), k.Nil.value), l = void 0;else if (l.value0 instanceof k.Cons) n = !0, l = new g.Just(new b.Tuple(l.value0.value0, new e(l.value0.value1, l.value1)));else throw Error("Failed pattern match at Data.CatQueue (line 83, column 1 - line 83, column 63): " + [l.constructor.name]);
    }

    return l;
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
    function r() {}

    r.value = new r();
    return r;
  }(),
      n = function () {
    function r(w, z) {
      this.value0 = w;
      this.value1 = z;
    }

    r.create = function (w) {
      return function (z) {
        return new r(w, z);
      };
    };

    return r;
  }(),
      l = function l(r) {
    return function (w) {
      if (r instanceof d) return w;
      if (w instanceof d) return r;
      if (r instanceof n) return new n(r.value0, f.snoc(r.value1)(w));
      throw Error("Failed pattern match at Data.CatList (line 109, column 1 - line 109, column 54): " + [r.constructor.name, w.constructor.name]);
    };
  },
      m = function m(r) {
    return function (w) {
      return function (z) {
        var u = function u(t) {
          return function (p) {
            return function (y) {
              for (var x = t, A = p, v = !1, F; !v;) {
                F = x;
                var G = A,
                    I = y;
                if (I instanceof k.Nil) v = !0, F = G;else {
                  if (I instanceof k.Cons) x = F, A = F(G)(I.value0), y = I.value1;else throw Error("Failed pattern match at Data.CatList (line 125, column 3 - line 125, column 59): " + [F.constructor.name, G.constructor.name, I.constructor.name]);
                  F = void 0;
                }
              }

              return F;
            };
          };
        };

        return function (t) {
          return function (p) {
            function y(F, G) {
              F = f.uncons(F);
              if (F instanceof g.Nothing) return A = !0, u(function (I) {
                return function (H) {
                  return H(I);
                };
              })(w)(G);
              if (F instanceof g.Just) x = F.value0.value1, p = new k.Cons(r(F.value0.value0), G);else throw Error("Failed pattern match at Data.CatList (line 121, column 14 - line 123, column 67): " + [F.constructor.name]);
            }

            for (var x = t, A = !1, v; !A;) {
              v = y(x, p);
            }

            return v;
          };
        }(z)(k.Nil.value);
      };
    };
  };

  a = d.value;
  b = new b.Semigroup(l);
  c.empty = a;

  c.snoc = function (r) {
    return function (w) {
      return l(r)(new n(w, f.empty));
    };
  };

  c.uncons = function (r) {
    if (r instanceof d) return g.Nothing.value;

    if (r instanceof n) {
      var w = g.Just,
          z = e.Tuple,
          u = r.value0;
      r = f["null"](r.value1) ? d.value : m(l)(d.value)(r.value1);
      return new w(new z(u, r));
    }

    throw Error("Failed pattern match at Data.CatList (line 100, column 1 - line 100, column 61): " + [r.constructor.name]);
  };

  c.semigroupCatList = b;
})(PS);

(function (a) {
  a.unsafeCoerce = function (c) {
    return c;
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
      n = a["Data.Functor"],
      l = a["Data.Maybe"],
      m = a["Data.Semigroup"],
      r = a["Unsafe.Coerce"],
      w = function () {
    function F(G, I) {
      this.value0 = G;
      this.value1 = I;
    }

    F.create = function (G) {
      return function (I) {
        return new F(G, I);
      };
    };

    return F;
  }(),
      z = function () {
    function F(G) {
      this.value0 = G;
    }

    F.create = function (G) {
      return new F(G);
    };

    return F;
  }(),
      u = function () {
    function F(G, I) {
      this.value0 = G;
      this.value1 = I;
    }

    F.create = function (G) {
      return function (I) {
        return new F(G, I);
      };
    };

    return F;
  }(),
      t = function t(F) {
    function G(B) {
      var K = function K(D) {
        return function (N) {
          return new w(D.value0, m.append(e.semigroupCatList)(D.value1)(N));
        };
      };

      if (B.value0 instanceof z) {
        var X = e.uncons(B.value1);
        if (X instanceof l.Nothing) return I = !0, new z(B.value0.value0);

        if (X instanceof l.Just) {
          F = K((0, X.value0.value0)(B.value0.value0))(X.value0.value1);
          return;
        }

        throw Error("Failed pattern match at Control.Monad.Free (line 227, column 7 - line 231, column 64): " + [X.constructor.name]);
      }

      if (B.value0 instanceof u) return I = !0, new u(B.value0.value0, function (D) {
        return K(B.value0.value1(D))(B.value1);
      });
      throw Error("Failed pattern match at Control.Monad.Free (line 225, column 3 - line 233, column 56): " + [B.value0.constructor.name]);
    }

    for (var I = !1, H; !I;) {
      H = G(F);
    }

    return H;
  },
      p = function p(F) {
    return function (G) {
      return function (I) {
        I = t(I);
        if (I instanceof z) return G(I.value0);
        if (I instanceof u) return F(I.value0)(I.value1);
        throw Error("Failed pattern match at Control.Monad.Free (line 213, column 17 - line 215, column 20): " + [I.constructor.name]);
      };
    };
  };

  a = new b.Monad(function () {
    return v;
  }, function () {
    return x;
  });
  var y = new n.Functor(function (F) {
    return function (G) {
      return g.bindFlipped(x)(function () {
        var I = f.pure(v);
        return function (H) {
          return I(F(H));
        };
      }())(G);
    };
  }),
      x = new g.Bind(function () {
    return A;
  }, function (F) {
    return function (G) {
      return new w(F.value0, e.snoc(F.value1)(G));
    };
  }),
      A = new k.Apply(function () {
    return y;
  }, b.ap(a)),
      v = new f.Applicative(function () {
    return A;
  }, function (F) {
    return new w(z.create(F), e.empty);
  });

  c.wrap = function (F) {
    return new w(new u(F, r.unsafeCoerce), e.empty);
  };

  c.liftF = function (F) {
    return new w(new u(F, function () {
      var G = f.pure(v);
      return function (I) {
        return G(I);
      };
    }()), e.empty);
  };

  c.resume = function (F) {
    return p(function (G) {
      return function (I) {
        return new d.Left(n.map(F)(I)(G));
      };
    })(d.Right.create);
  };

  c["resume'"] = p;
  c.freeFunctor = y;
  c.freeBind = x;
  c.freeApplicative = v;
})(PS);

(function (a) {
  a["Control.MultiAlternative"] = a["Control.MultiAlternative"] || {};
  a = a["Control.MultiAlternative"];

  a.orr = function (c) {
    return c.orr;
  };

  a.MultiAlternative = function (c, f) {
    this.Plus0 = c;
    this.orr = f;
  };
})(PS);

(function (a) {
  a["Control.Parallel.Class"] = a["Control.Parallel.Class"] || {};
  a = a["Control.Parallel.Class"];

  a.parallel = function (c) {
    return c.parallel;
  };

  a.sequential = function (c) {
    return c.sequential;
  };

  a.Parallel = function (c, f, k, g) {
    this.Applicative1 = c;
    this.Monad0 = f;
    this.parallel = k;
    this.sequential = g;
  };
})(PS);

(function (a) {
  a["Control.ShiftMap"] = a["Control.ShiftMap"] || {};
  a = a["Control.ShiftMap"];

  a.shiftMap = function (c) {
    return c.shiftMap;
  };

  a.ShiftMap = function (c) {
    this.shiftMap = c;
  };
})(PS);

(function (a) {
  a.range = function (c) {
    return function (f) {
      for (var k = c > f ? -1 : 1, g = Array(k * (f - c) + 1), b = c, e = 0; b !== f;) {
        g[e++] = b, b += k;
      }

      g[e] = b;
      return g;
    };
  };

  a.fromFoldableImpl = function () {
    function c(g, b) {
      this.head = g;
      this.tail = b;
    }

    function f(g) {
      return function (b) {
        return new c(g, b);
      };
    }

    var k = {};
    return function (g) {
      return function (b) {
        var e = [],
            d = 0;

        for (b = g(f)(k)(b); b !== k;) {
          e[d++] = b.head, b = b.tail;
        }

        return e;
      };
    };
  }();

  a.length = function (c) {
    return c.length;
  };

  a.cons = function (c) {
    return function (f) {
      return [c].concat(f);
    };
  };

  a.snoc = function (c) {
    return function (f) {
      var k = c.slice();
      k.push(f);
      return k;
    };
  };

  a["uncons'"] = function (c) {
    return function (f) {
      return function (k) {
        return 0 === k.length ? c({}) : f(k[0])(k.slice(1));
      };
    };
  };

  a.indexImpl = function (c) {
    return function (f) {
      return function (k) {
        return function (g) {
          return 0 > g || g >= k.length ? f : c(k[g]);
        };
      };
    };
  };

  a._updateAt = function (c) {
    return function (f) {
      return function (k) {
        return function (g) {
          return function (b) {
            if (0 > k || k >= b.length) return f;
            b = b.slice();
            b[k] = g;
            return c(b);
          };
        };
      };
    };
  };

  a.filter = function (c) {
    return function (f) {
      return f.filter(c);
    };
  };

  a.slice = function (c) {
    return function (f) {
      return function (k) {
        return k.slice(c, f);
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
      n = a["Control.Lazy"],
      l = a["Data.Boolean"],
      m = a["Data.Foldable"],
      r = a["Data.Function"],
      w = a["Data.Functor"],
      z = a["Data.Maybe"];
  a = f._updateAt(z.Just.create)(z.Nothing.value);

  var u = f["uncons'"](r["const"](z.Nothing.value))(function (v) {
    return function (F) {
      return new z.Just({
        head: v,
        tail: F
      });
    };
  }),
      t = function t(v) {
    return [v];
  },
      p = function p(v) {
    return function (F) {
      return function (G) {
        return b.apply(v.Applicative0().Apply0())(w.map(v.Plus1().Alt0().Functor0())(f.cons)(G))(n.defer(F)(function (I) {
          return y(v)(F)(G);
        }));
      };
    };
  },
      y = function y(v) {
    return function (F) {
      return function (G) {
        return k.alt(v.Plus1().Alt0())(p(v)(F)(G))(g.pure(v.Applicative0())([]));
      };
    };
  },
      x = f.indexImpl(z.Just.create)(z.Nothing.value),
      A = r.flip(e.bind(e.bindArray));

  e = function (v) {
    return A(function () {
      var F = z.maybe([])(t);
      return function (G) {
        return F(v(G));
      };
    }());
  }(d.identity(d.categoryFn));

  c.fromFoldable = function (v) {
    return f.fromFoldableImpl(m.foldr(v));
  };

  c.singleton = t;
  c.some = p;

  c.head = function (v) {
    return x(v)(0);
  };

  c.init = function (v) {
    if (0 === f.length(v)) return z.Nothing.value;
    if (l.otherwise) return new z.Just(f.slice(0)(f.length(v) - 1 | 0)(v));
    throw Error("Failed pattern match at Data.Array (line 323, column 1 - line 323, column 45): " + [v.constructor.name]);
  };

  c.uncons = u;
  c.updateAt = a;
  c.concatMap = A;
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

  a = function (l) {
    var m = g.fromJust();
    return function (r) {
      return m(l(d(r)));
    };
  }(f.uncons);

  var n = function (l) {
    return function (m) {
      return l(d(m));
    };
  }(f.length);

  c.fromArray = function (l) {
    if (0 < f.length(l)) return new g.Just(e(l));
    if (k.otherwise) return g.Nothing.value;
    throw Error("Failed pattern match at Data.Array.NonEmpty (line 134, column 1 - line 134, column 58): " + [l.constructor.name]);
  };

  c.toArray = d;

  c.singleton = function (l) {
    return e(f.singleton(l));
  };

  c.length = n;

  c["cons'"] = function (l) {
    return function (m) {
      return e(f.cons(l)(m));
    };
  };

  c.snoc = function (l) {
    return function (m) {
      return e(f.snoc(d(l))(m));
    };
  };

  c.uncons = a;

  c.updateAt = function (l) {
    return function (m) {
      var r = f.updateAt(l)(m);
      return function (w) {
        return b(r(d(w)));
      };
    };
  };
})(PS);

(function (a) {
  a.fold1Impl = function (c) {
    return function (f) {
      for (var k = f[0], g = f.length, b = 1; b < g; b++) {
        k = c(k)(f[b]);
      }

      return k;
    };
  };
})(PS["Data.Array.NonEmpty.Internal"] = PS["Data.Array.NonEmpty.Internal"] || {});

(function (a) {
  a.mapWithIndexArray = function (c) {
    return function (f) {
      for (var k = f.length, g = Array(k), b = 0; b < k; b++) {
        g[b] = c(b)(f[b]);
      }

      return g;
    };
  };
})(PS["Data.FunctorWithIndex"] = PS["Data.FunctorWithIndex"] || {});

(function (a) {
  a["Data.FunctorWithIndex"] = a["Data.FunctorWithIndex"] || {};
  var c = a["Data.FunctorWithIndex"],
      f = a["Data.Functor"];
  a = new function (k, g) {
    this.Functor0 = k;
    this.mapWithIndex = g;
  }(function () {
    return f.functorArray;
  }, a["Data.FunctorWithIndex"].mapWithIndexArray);

  c.mapWithIndex = function (k) {
    return k.mapWithIndex;
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
    function l(m, r) {
      this.value0 = m;
      this.value1 = r;
    }

    l.create = function (m) {
      return function (r) {
        return new l(m, r);
      };
    };

    return l;
  }(),
      d = function d(l) {
    return function (m) {
      return function (r) {
        return (0, l.foldrWithIndex)(function (w) {
          return function (z) {
            return function (u) {
              return b.append(m.Semigroup0())(r(w)(z))(u);
            };
          };
        })(g.mempty(m));
      };
    };
  },
      n = new function (l, m, r, w) {
    this.Foldable0 = l;
    this.foldMapWithIndex = m;
    this.foldlWithIndex = r;
    this.foldrWithIndex = w;
  }(function () {
    return f.foldableArray;
  }, function (l) {
    return d(n)(l);
  }, function (l) {
    return function (m) {
      var r = f.foldl(f.foldableArray)(function (z) {
        return function (u) {
          return l(u.value0)(z)(u.value1);
        };
      })(m),
          w = k.mapWithIndex(k.functorWithIndexArray)(e.create);
      return function (z) {
        return r(w(z));
      };
    };
  }, function (l) {
    return function (m) {
      var r = f.foldr(f.foldableArray)(function (z) {
        return function (u) {
          return l(z.value0)(z.value1)(u);
        };
      })(m),
          w = k.mapWithIndex(k.functorWithIndexArray)(e.create);
      return function (z) {
        return r(w(z));
      };
    };
  });

  c.foldlWithIndex = function (l) {
    return l.foldlWithIndex;
  };

  c.foldableWithIndexArray = n;
})(PS);

(function (a) {
  a["Data.Semigroup.Foldable"] = a["Data.Semigroup.Foldable"] || {};
  var c = a["Data.Semigroup.Foldable"],
      f = a["Data.Functor"];

  c.Foldable1 = function (k, g, b) {
    this.Foldable0 = k;
    this.fold1 = g;
    this.foldMap1 = b;
  };

  c.foldMap1 = function (k) {
    return k.foldMap1;
  };

  c.foldMap1Default = function (k) {
    return function (g) {
      return function (b) {
        return function (e) {
          var d = (0, k.fold1)(b),
              n = f.map(g)(e);
          return function (l) {
            return d(n(l));
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a.traverseArrayImpl = function () {
    function c(b) {
      return [b];
    }

    function f(b) {
      return function (e) {
        return [b, e];
      };
    }

    function k(b) {
      return function (e) {
        return function (d) {
          return [b, e, d];
        };
      };
    }

    function g(b) {
      return function (e) {
        return b.concat(e);
      };
    }

    return function (b) {
      return function (e) {
        return function (d) {
          return function (n) {
            return function (l) {
              function m(r, w) {
                switch (w - r) {
                  case 0:
                    return d([]);

                  case 1:
                    return e(c)(n(l[r]));

                  case 2:
                    return b(e(f)(n(l[r])))(n(l[r + 1]));

                  case 3:
                    return b(b(e(k)(n(l[r])))(n(l[r + 1])))(n(l[r + 2]));

                  default:
                    var z = r + 2 * Math.floor((w - r) / 4);
                    return b(e(g)(m(r, z)))(m(z, w));
                }
              }

              return m(0, l.length);
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
      n = a["Data.Maybe"];

  a = function a(w, z, u, t) {
    this.Foldable1 = w;
    this.Functor0 = z;
    this.sequence = u;
    this.traverse = t;
  };

  var l = new a(function () {
    return e.foldableMaybe;
  }, function () {
    return n.functorMaybe;
  }, function (w) {
    return function (z) {
      if (z instanceof n.Nothing) return k.pure(w)(n.Nothing.value);
      if (z instanceof n.Just) return d.map(w.Apply0().Functor0())(n.Just.create)(z.value0);
      throw Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 90, column 33): " + [z.constructor.name]);
    };
  }, function (w) {
    return function (z) {
      return function (u) {
        if (u instanceof n.Nothing) return k.pure(w)(n.Nothing.value);
        if (u instanceof n.Just) return d.map(w.Apply0().Functor0())(n.Just.create)(z(u.value0));
        throw Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 90, column 33): " + [z.constructor.name, u.constructor.name]);
      };
    };
  }),
      m = function m(w) {
    return function (z) {
      return (0, w.traverse)(z)(b.identity(b.categoryFn));
    };
  },
      r = new a(function () {
    return e.foldableArray;
  }, function () {
    return d.functorArray;
  }, function (w) {
    return m(r)(w);
  }, function (w) {
    return f.traverseArrayImpl(g.apply(w.Apply0()))(d.map(w.Apply0().Functor0()))(k.pure(w));
  });

  c.traverse = function (w) {
    return w.traverse;
  };

  c.sequence = function (w) {
    return w.sequence;
  };

  c.traversableArray = r;
  c.traversableMaybe = l;
})(PS);

(function (a) {
  a.unfoldr1ArrayImpl = function (c) {
    return function (f) {
      return function (k) {
        return function (g) {
          return function (b) {
            return function (e) {
              for (var d = [];;) {
                e = b(e);
                d.push(k(e));
                e = g(e);
                if (c(e)) return d;
                e = f(e);
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
  a = new function (e) {
    this.unfoldr1 = e;
  }(a["Data.Unfoldable1"].unfoldr1ArrayImpl(k.isNothing)(k.fromJust())(g.fst)(g.snd));

  var b = function b(e) {
    return function (d) {
      return function (n) {
        return (0, e.unfoldr1)(function (l) {
          if (0 >= l) return new g.Tuple(n, k.Nothing.value);
          if (f.otherwise) return new g.Tuple(n, new k.Just(l - 1 | 0));
          throw Error("Failed pattern match at Data.Unfoldable1 (line 64, column 5 - line 64, column 39): " + [l.constructor.name]);
        })(d - 1 | 0);
      };
    };
  };

  c.unfoldr1 = function (e) {
    return e.unfoldr1;
  };

  c.singleton = function (e) {
    return b(e)(1);
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
      n = a["Data.Functor"].functorArray,
      l = a["Data.FoldableWithIndex"].foldableWithIndexArray,
      m = a["Data.Foldable"].foldableArray,
      r = new g.Foldable1(function () {
    return m;
  }, function (w) {
    return f.fold1Impl(k.append(w));
  }, function (w) {
    return g.foldMap1Default(r)(n)(w);
  });
  c.semigroupNonEmptyArray = d;
  c.functorNonEmptyArray = n;
  c.foldableNonEmptyArray = m;
  c.foldableWithIndexNonEmptyArray = l;
  c.foldable1NonEmptyArray = r;
  c.unfoldable1NonEmptyArray = b;
  c.traversableNonEmptyArray = e;
})(PS);

(function (a) {
  a.pureE = function (c) {
    return function () {
      return c;
    };
  };

  a.bindE = function (c) {
    return function (f) {
      return function () {
        return f(c())();
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
      e = a["Control.Monad"],
      d = a["Data.Functor"],
      n = a["Data.Monoid"],
      l = a["Data.Semigroup"];
  a = new e.Monad(function () {
    return w;
  }, function () {
    return m;
  });
  var m = new b.Bind(function () {
    return r;
  }, f.bindE),
      r = new g.Apply(function () {
    return z;
  }, e.ap(a)),
      w = new k.Applicative(function () {
    return r;
  }, f.pureE),
      z = new d.Functor(k.liftA1(w));
  c.functorEffect = z;
  c.applyEffect = r;
  c.applicativeEffect = w;
  c.bindEffect = m;
  c.monadEffect = a;

  c.monoidEffect = function (u) {
    return new n.Monoid(function () {
      var t = u.Semigroup0();
      return new l.Semigroup(g.lift2(r)(l.append(t)));
    }, f.pureE(n.mempty(u)));
  };
})(PS);

(function (a) {
  var c = function () {
    function f() {
      this.last = this.head = null;
      this.size = 0;
    }

    function k(l, m) {
      this.queue = l;
      this.value = m;
      this.prev = this.next = null;
    }

    function g(l) {
      this.draining = !1;
      this.error = null;
      this.value = l;
      this.takes = new f();
      this.reads = new f();
      this.puts = new f();
    }

    function b(l) {
      try {
        l();
      } catch (m) {
        setTimeout(function () {
          throw m;
        }, 0);
      }
    }

    function e(l) {
      switch (l.size) {
        case 0:
          return null;

        case 1:
          var m = l.head;
          l.head = null;
          break;

        case 2:
          m = l.last;
          l.head.next = null;
          l.last = null;
          break;

        default:
          m = l.last, l.last = m.prev, l.last.next = null;
      }

      m.prev = null;
      m.queue = null;
      l.size--;
      return m.value;
    }

    function d(l) {
      switch (l.size) {
        case 0:
          return null;

        case 1:
          var m = l.head;
          l.head = null;
          break;

        case 2:
          m = l.head;
          l.last.prev = null;
          l.head = l.last;
          l.last = null;
          break;

        default:
          m = l.head, l.head = m.next, l.head.prev = null;
      }

      m.next = null;
      m.queue = null;
      l.size--;
      return m.value;
    }

    var n = {};
    g.EMPTY = n;

    g.putLast = function (l, m) {
      m = new k(l, m);

      switch (l.size) {
        case 0:
          l.head = m;
          break;

        case 1:
          m.prev = l.head;
          l.head.next = m;
          l.last = m;
          break;

        default:
          m.prev = l.last, l.last.next = m, l.last = m;
      }

      l.size++;
      return m;
    };

    g.takeLast = e;
    g.takeHead = d;

    g.deleteCell = function (l) {
      null !== l.queue && (l.queue.last === l ? e(l.queue) : l.queue.head === l ? d(l.queue) : (l.prev && (l.prev.next = l.next), l.next && (l.next.prev = l.prev), l.queue.size--, l.queue = null, l.value = null, l.next = null, l.prev = null));
    };

    g.drainVar = function (l, m) {
      if (!m.draining) {
        var r = m.puts,
            w = m.takes,
            z = m.reads,
            u,
            t;

        for (m.draining = !0;;) {
          var p = u = null;
          var y = m.value;
          var x = z.size;

          if (null !== m.error) {
            for (y = l.left(m.error); u = d(r);) {
              b(u.cb(y));
            }

            for (; p = d(z);) {
              b(p(y));
            }

            for (; t = d(w);) {
              b(t(y));
            }

            break;
          }

          y === n && (u = d(r)) && (m.value = y = u.value);

          if (y !== n) {
            for (t = d(w); x-- && (p = d(z));) {
              b(p(l.right(y)));
            }

            null !== t && (m.value = n, b(t(l.right(y))));
          }

          null !== u && b(u.cb(l.right(void 0)));
          if (m.value === n && 0 === r.size || m.value !== n && 0 === w.size) break;
        }

        m.draining = !1;
      }
    };

    return g;
  }();

  a.empty = function () {
    return new c(c.EMPTY);
  };

  a._takeVar = function (f, k, g) {
    return function () {
      var b = c.putLast(k.takes, g);
      c.drainVar(f, k);
      return function () {
        c.deleteCell(b);
      };
    };
  };

  a._tryPutVar = function (f, k, g) {
    return function () {
      return g.value === c.EMPTY && null === g.error ? (g.value = k, c.drainVar(f, g), !0) : !1;
    };
  };

  a._tryTakeVar = function (f, k) {
    return function () {
      var g = k.value;
      if (g === c.EMPTY) return f.nothing;
      k.value = c.EMPTY;
      c.drainVar(f, k);
      return f.just(g);
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
    function n(l) {
      this.value0 = l;
    }

    n.create = function (l) {
      return new n(l);
    };

    return n;
  }(),
      b = function () {
    function n(l) {
      this.value0 = l;
    }

    n.create = function (l) {
      return new n(l);
    };

    return n;
  }(),
      e = function () {
    function n() {}

    n.value = new n();
    return n;
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

  c.take = function (n) {
    return function (l) {
      return f._takeVar(d, n, l);
    };
  };

  c.tryTake = function (n) {
    return f._tryTakeVar(d, n);
  };

  c.tryPut = function (n) {
    return function (l) {
      return f._tryPutVar(d, n, l);
    };
  };

  c.empty = f.empty;
})(PS);

(function (a) {
  var c = function () {
    function f(z, u, t, p) {
      this.tag = z;
      this._1 = u;
      this._2 = t;
      this._3 = p;
    }

    function k(z) {
      var u = function u(t, p, y) {
        return new f(z, t, p, y);
      };

      u.tag = z;
      return u;
    }

    function g(z) {
      return new f("Pure", void 0);
    }

    function b(z) {
      try {
        z();
      } catch (u) {
        setTimeout(function () {
          throw u;
        }, 0);
      }
    }

    function e(z, u, t) {
      try {
        return u(t());
      } catch (p) {
        return z(p);
      }
    }

    function d(z, u, t) {
      try {
        return u(t)();
      } catch (p) {
        return t(z(p))(), g;
      }
    }

    function n(z, u, t) {
      function p(O) {
        for (var J, Q, q;;) {
          switch (q = Q = J = null, A) {
            case 2:
              A = 1;

              try {
                v = I(v), null === H ? I = null : (I = H._1, H = H._2);
              } catch (da) {
                A = 5, F = z.left(da), v = null;
              }

              break;

            case 3:
              z.isLeft(v) ? (A = 5, F = v, v = null) : null === I ? A = 5 : (A = 2, v = z.fromRight(v));
              break;

            case 1:
              switch (v.tag) {
                case "Bind":
                  I && (H = new f("Cons", I, H));
                  I = v._2;
                  A = 1;
                  v = v._1;
                  break;

                case "Pure":
                  null === I ? (A = 5, v = z.right(v._1)) : (A = 2, v = v._1);
                  break;

                case "Sync":
                  A = 3;
                  v = e(z.left, z.right, v._1);
                  break;

                case "Async":
                  A = 4;
                  v = d(z.left, v._1, function (da) {
                    return function () {
                      x === O && (x++, w.enqueue(function () {
                        x === O + 1 && (A = 3, v = da, p(x));
                      }));
                    };
                  });
                  return;

                case "Throw":
                  A = 5;
                  F = z.left(v._1);
                  v = null;
                  break;

                case "Catch":
                  B = null === I ? new f("Cons", v, B, G) : new f("Cons", v, new f("Cons", new f("Resume", I, H), B, G), G);
                  H = I = null;
                  A = 1;
                  v = v._1;
                  break;

                case "Bracket":
                  K++;
                  B = null === I ? new f("Cons", v, B, G) : new f("Cons", v, new f("Cons", new f("Resume", I, H), B, G), G);
                  H = I = null;
                  A = 1;
                  v = v._1;
                  break;

                case "Fork":
                  A = 3;
                  J = n(z, u, v._2);
                  u && u.register(J);
                  v._1 && J.run();
                  v = z.right(J);
                  break;

                case "Sequential":
                  A = 1, v = m(z, u, v._1);
              }

              break;

            case 5:
              H = I = null;
              if (null === B) A = 6, v = G || F || v;else switch (J = B._3, q = B._1, B = B._2, q.tag) {
                case "Catch":
                  G && G !== J && 0 === K ? A = 5 : F && (A = 1, v = q._2(z.fromLeft(F)), F = null);
                  break;

                case "Resume":
                  G && G !== J && 0 === K || F ? A = 5 : (I = q._1, H = q._2, A = 2, v = z.fromRight(v));
                  break;

                case "Bracket":
                  K--;
                  null === F && (Q = z.fromRight(v), B = new f("Cons", new f("Release", q._2, Q), B, J), G === J || 0 < K) && (A = 1, v = q._3(Q));
                  break;

                case "Release":
                  B = new f("Cons", new f("Finalized", v, F), B, G);
                  A = 1;
                  v = G && G !== J && 0 === K ? q._1.killed(z.fromLeft(G))(q._2) : F ? q._1.failed(z.fromLeft(F))(q._2) : q._1.completed(z.fromRight(v))(q._2);
                  F = null;
                  K++;
                  break;

                case "Finalizer":
                  K++;
                  B = new f("Cons", new f("Finalized", v, F), B, G);
                  A = 1;
                  v = q._1;
                  break;

                case "Finalized":
                  K--, A = 5, v = q._1, F = q._2;
              }
              break;

            case 6:
              for (var U in D) {
                D.hasOwnProperty(U) && (N = N && D[U].rethrow, b(D[U].handler(v)));
              }

              D = null;
              G && F ? setTimeout(function () {
                throw z.fromLeft(F);
              }, 0) : z.isLeft(v) && N && setTimeout(function () {
                if (N) throw z.fromLeft(v);
              }, 0);
              return;

            case 0:
              A = 1;
              break;

            case 4:
              return;
          }
        }
      }

      function y(O) {
        return function () {
          if (6 === A) return N = N && O.rethrow, O.handler(v)(), function () {};
          var J = X++;
          D = D || {};
          D[J] = O;
          return function () {
            null !== D && delete D[J];
          };
        };
      }

      var x = 0,
          A = 0,
          v = t,
          F = null,
          G = null,
          I = null,
          H = null,
          B = null,
          K = 0,
          X = 0,
          D = null,
          N = !0;
      return {
        kill: function kill(O, J) {
          return function () {
            if (6 === A) return J(z.right(void 0))(), function () {};
            var Q = y({
              rethrow: !1,
              handler: function handler() {
                return J(z.right(void 0));
              }
            })();

            switch (A) {
              case 0:
                G = z.left(O);
                A = 6;
                v = G;
                p(x);
                break;

              case 4:
                null === G && (G = z.left(O));
                0 === K && (4 === A && (B = new f("Cons", new f("Finalizer", v(O)), B, G)), A = 5, F = v = null, p(++x));
                break;

              default:
                null === G && (G = z.left(O)), 0 === K && (A = 5, F = v = null);
            }

            return Q;
          };
        },
        join: function join(O) {
          return function () {
            var J = y({
              rethrow: !1,
              handler: O
            })();
            0 === A && p(x);
            return J;
          };
        },
        onComplete: y,
        isSuspended: function isSuspended() {
          return 0 === A;
        },
        run: function run() {
          0 === A && (w.isDraining() ? p(x) : w.enqueue(function () {
            p(x);
          }));
        }
      };
    }

    function l(z, u, t, p) {
      function y(D, N, O) {
        var J = N,
            Q = null,
            q = null,
            U = 0;
        N = {};

        a: for (;;) {
          var da = null;

          switch (J.tag) {
            case "Forked":
              J._3 === r && (da = G[J._1], N[U++] = da.kill(D, function (R) {
                return function () {
                  U--;
                  0 === U && O(R)();
                };
              }));
              if (null === Q) break a;
              J = Q._2;
              null === q ? Q = null : (Q = q._1, q = q._2);
              break;

            case "Map":
              J = J._2;
              break;

            case "Apply":
            case "Alt":
              Q && (q = new f("Cons", Q, q)), Q = J, J = J._1;
          }
        }

        if (0 === U) O(z.right(void 0))();else for (D = 0, da = U; D < da; D++) {
          N[D] = N[D]();
        }
        return N;
      }

      function x(D, N, O) {
        var J, Q;

        if (z.isLeft(D)) {
          var q = D;
          var U = null;
        } else U = D, q = null;

        for (;;) {
          var da = Q = J = D = null;
          if (null !== K) break;

          if (null === N) {
            p(q || U)();
            break;
          }

          if (N._3 !== r) break;

          switch (N.tag) {
            case "Map":
              null === q ? (N._3 = z.right(N._1(z.fromRight(U))), U = N._3) : N._3 = q;
              break;

            case "Apply":
              D = N._1._3;
              J = N._2._3;

              if (q) {
                if (N._3 = q, Q = !0, da = I++, H[da] = y(B, q === D ? N._2 : N._1, function () {
                  return function () {
                    delete H[da];
                    Q ? Q = !1 : null === O ? x(q, null, null) : x(q, O._1, O._2);
                  };
                }), Q) {
                  Q = !1;
                  return;
                }
              } else {
                if (D === r || J === r) return;
                U = z.right(z.fromRight(D)(z.fromRight(J)));
                N._3 = U;
              }

              break;

            case "Alt":
              D = N._1._3;
              J = N._2._3;
              if (D === r && z.isLeft(J) || J === r && z.isLeft(D)) return;
              if (D !== r && z.isLeft(D) && J !== r && z.isLeft(J)) q = U === D ? J : D, U = null, N._3 = q;else if (N._3 = U, Q = !0, da = I++, H[da] = y(B, U === D ? N._2 : N._1, function () {
                return function () {
                  delete H[da];
                  Q ? Q = !1 : null === O ? x(U, null, null) : x(U, O._1, O._2);
                };
              }), Q) {
                Q = !1;
                return;
              }
          }

          null === O ? N = null : (N = O._1, O = O._2);
        }
      }

      function A(D) {
        return function (N) {
          return function () {
            delete G[D._1];
            D._3 = N;
            x(N, D._2._1, D._2._2);
          };
        };
      }

      function v(D, N) {
        K = z.left(D);
        var O;

        for (O in H) {
          if (H.hasOwnProperty(O)) {
            var J = H[O];

            for (O in J) {
              if (J.hasOwnProperty(O)) J[O]();
            }
          }
        }

        H = null;
        var Q = y(D, X, N);
        return function (q) {
          return new f("Async", function (U) {
            return function () {
              for (var da in Q) {
                if (Q.hasOwnProperty(da)) Q[da]();
              }

              return g;
            };
          });
        };
      }

      var F = 0,
          G = {},
          I = 0,
          H = {},
          B = Error("[ParAff] Early exit"),
          K = null,
          X = r;

      (function () {
        var D = 1,
            N = t,
            O = null,
            J = null;

        a: for (;;) {
          switch (D) {
            case 1:
              switch (N.tag) {
                case "Map":
                  O && (J = new f("Cons", O, J));
                  O = new f("Map", N._1, r, r);
                  N = N._2;
                  break;

                case "Apply":
                  O && (J = new f("Cons", O, J));
                  O = new f("Apply", r, N._2, r);
                  N = N._1;
                  break;

                case "Alt":
                  O && (J = new f("Cons", O, J));
                  O = new f("Alt", r, N._2, r);
                  N = N._1;
                  break;

                default:
                  var Q = F++;
                  D = 5;
                  var q = N;
                  N = new f("Forked", Q, new f("Cons", O, J), r);
                  q = n(z, u, q);
                  q.onComplete({
                    rethrow: !1,
                    handler: A(N)
                  })();
                  G[Q] = q;
                  u && u.register(q);
              }

              break;

            case 5:
              if (null === O) break a;
              O._1 === r ? (O._1 = N, D = 1, N = O._2, O._2 = r) : (O._2 = N, N = O, null === J ? O = null : (O = J._1, J = J._2));
          }
        }

        X = N;

        for (Q = 0; Q < F; Q++) {
          G[Q].run();
        }
      })();

      return function (D) {
        return new f("Async", function (N) {
          return function () {
            return v(D, N);
          };
        });
      };
    }

    function m(z, u, t) {
      return new f("Async", function (p) {
        return function () {
          return l(z, u, t, p);
        };
      });
    }

    var r = {},
        w = function () {
      function z() {
        for (y = !0; 0 !== u;) {
          u--;
          var x = p[t];
          p[t] = void 0;
          t = (t + 1) % 1024;
          x();
        }

        y = !1;
      }

      var u = 0,
          t = 0,
          p = Array(1024),
          y = !1;
      return {
        isDraining: function isDraining() {
          return y;
        },
        enqueue: function enqueue(x) {
          if (1024 === u) {
            var A = y;
            z();
            y = A;
          }

          p[(t + u) % 1024] = x;
          u++;
          y || z();
        }
      };
    }();

    f.EMPTY = r;
    f.Pure = k("Pure");
    f.Throw = k("Throw");
    f.Catch = k("Catch");
    f.Sync = k("Sync");
    f.Async = k("Async");
    f.Bind = k("Bind");
    f.Bracket = k("Bracket");
    f.Fork = k("Fork");
    f.Seq = k("Sequential");
    f.ParMap = k("Map");
    f.ParApply = k("Apply");
    f.ParAlt = k("Alt");
    f.Fiber = n;

    f.Supervisor = function (z) {
      var u = {},
          t = 0,
          p = 0;
      return {
        register: function register(y) {
          var x = t++;
          y.onComplete({
            rethrow: !0,
            handler: function handler(A) {
              return function () {
                p--;
                delete u[x];
              };
            }
          })();
          u[x] = y;
          p++;
        },
        isEmpty: function isEmpty() {
          return 0 === p;
        },
        killAll: function killAll(y, x) {
          return function () {
            function A(I) {
              F[I] = u[I].kill(y, function (H) {
                return function () {
                  delete F[I];
                  v--;
                  z.isLeft(H) && z.fromLeft(H) && setTimeout(function () {
                    throw z.fromLeft(H);
                  }, 0);
                  0 === v && x();
                };
              })();
            }

            if (0 === p) return x();
            var v = 0,
                F = {},
                G;

            for (G in u) {
              u.hasOwnProperty(G) && (v++, A(G));
            }

            u = {};
            p = t = 0;
            return function (I) {
              return new f("Sync", function () {
                for (var H in F) {
                  if (F.hasOwnProperty(H)) F[H]();
                }
              });
            };
          };
        }
      };
    };

    f.Scheduler = w;
    f.nonCanceler = g;
    return f;
  }();

  a._pure = c.Pure;
  a._throwError = c.Throw;

  a._catchError = function (f) {
    return function (k) {
      return c.Catch(f, k);
    };
  };

  a._map = function (f) {
    return function (k) {
      return k.tag === c.Pure.tag ? c.Pure(f(k._1)) : c.Bind(k, function (g) {
        return c.Pure(f(g));
      });
    };
  };

  a._bind = function (f) {
    return function (k) {
      return c.Bind(f, k);
    };
  };

  a._liftEffect = c.Sync;

  a._parAffMap = function (f) {
    return function (k) {
      return c.ParMap(f, k);
    };
  };

  a._parAffApply = function (f) {
    return function (k) {
      return c.ParApply(f, k);
    };
  };

  a._parAffAlt = function (f) {
    return function (k) {
      return c.ParAlt(f, k);
    };
  };

  a.makeAff = c.Async;

  a._makeFiber = function (f, k) {
    return function () {
      return c.Fiber(f, null, k);
    };
  };

  a._delay = function () {
    function f(k, g) {
      return 0 === k && "undefined" !== typeof setImmediate ? setImmediate(g) : setTimeout(g, k);
    }

    return function (k, g) {
      return c.Async(function (b) {
        return function () {
          var e = f(g, b(k()));
          return function () {
            return c.Sync(function () {
              var d = 0 === g && "undefined" !== typeof clearImmediate ? clearImmediate(e) : clearTimeout(e);
              return k(d);
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

  c.catchError = function (b) {
    return b.catchError;
  };

  c.throwError = function (b) {
    return b.throwError;
  };

  c.MonadThrow = function (b, e) {
    this.Monad0 = b;
    this.throwError = e;
  };

  c.MonadError = function (b, e) {
    this.MonadThrow0 = b;
    this.catchError = e;
  };

  c["try"] = function (b) {
    return function (e) {
      return (0, b.catchError)(g.map(b.MonadThrow0().Monad0().Bind1().Apply0().Functor0())(k.Right.create)(e))(function () {
        var d = f.pure(b.MonadThrow0().Monad0().Applicative0());
        return function (n) {
          return d(k.Left.create(n));
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
      g = function g(b) {
    return function (e) {
      return function (d) {
        var n = f.sequential(b),
            l = k.traverse_(b.Applicative1())(e)(function () {
          var m = f.parallel(b);
          return function (r) {
            return m(d(r));
          };
        }());
        return function (m) {
          return n(l(m));
        };
      };
    };
  };

  a["Control.Parallel"].parSequence_ = function (b) {
    return function (e) {
      return g(b)(e)(c.identity(c.categoryFn));
    };
  };
})(PS);

(function (a) {
  a["Effect.Class"] = a["Effect.Class"] || {};
  var c = a["Effect.Class"],
      f = a["Control.Category"],
      k = a.Effect;

  a = function a(g, b) {
    this.Monad0 = g;
    this.liftEffect = b;
  };

  f = new a(function () {
    return k.monadEffect;
  }, f.identity(f.categoryFn));

  c.liftEffect = function (g) {
    return g.liftEffect;
  };

  c.MonadEffect = a;
  c.monadEffectEffect = f;
})(PS);

(function (a) {
  a.showErrorImpl = function (c) {
    return c.stack || c.toString();
  };

  a.error = function (c) {
    return Error(c);
  };

  a.throwException = function (c) {
    return function () {
      throw c;
    };
  };

  a.catchException = function (c) {
    return function (f) {
      return function () {
        try {
          return f();
        } catch (k) {
          return k instanceof Error || "[object Error]" === Object.prototype.toString.call(k) ? c(k)() : c(Error(k.toString()))();
        }
      };
    };
  };
})(PS["Effect.Exception"] = PS["Effect.Exception"] || {});

(function (a) {
  a["Effect.Exception"] = a["Effect.Exception"] || {};
  var c = a["Effect.Exception"],
      f = a["Effect.Exception"],
      k = a["Control.Applicative"],
      g = a["Data.Either"],
      b = a["Data.Functor"],
      e = a.Effect;
  a = new a["Data.Show"].Show(f.showErrorImpl);

  c["throw"] = function (d) {
    return f.throwException(f.error(d));
  };

  c["try"] = function (d) {
    return f.catchException(function () {
      var n = k.pure(e.applicativeEffect);
      return function (l) {
        return n(g.Left.create(l));
      };
    }())(b.map(e.functorEffect)(g.Right.create)(d));
  };

  c.showError = a;
  c.error = f.error;
})(PS);

(function (a) {
  a.unsafePartial = function (c) {
    return c();
  };
})(PS["Partial.Unsafe"] = PS["Partial.Unsafe"] || {});

(function (a) {
  a.crashWith = function () {
    return function (c) {
      throw Error(c);
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

  a["Partial.Unsafe"].unsafeCrashWith = function (k) {
    return c.unsafePartial(function (g) {
      return f.crashWith()(k);
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
      n = a["Control.Monad.Error.Class"],
      l = a["Control.Parallel"],
      m = a["Control.Parallel.Class"],
      r = a["Control.Plus"],
      w = a["Data.Either"],
      z = a["Data.Foldable"],
      u = a["Data.Function"],
      t = a["Data.Functor"],
      p = a["Data.Monoid"],
      y = a["Data.Semigroup"],
      x = a["Data.Unit"],
      A = a.Effect,
      v = a["Effect.Class"],
      F = a["Effect.Exception"],
      G = a["Partial.Unsafe"];
  a = a["Unsafe.Coerce"];

  var I = new t.Functor(f._parAffMap),
      H = new t.Functor(f._map),
      B = function () {
    return {
      isLeft: function isLeft(Z) {
        if (Z instanceof w.Left) return !0;
        if (Z instanceof w.Right) return !1;
        throw Error("Failed pattern match at Effect.Aff (line 390, column 12 - line 392, column 20): " + [Z.constructor.name]);
      },
      fromLeft: function fromLeft(Z) {
        if (Z instanceof w.Left) return Z.value0;
        if (Z instanceof w.Right) return G.unsafeCrashWith("unsafeFromLeft: Right");
        throw Error("Failed pattern match at Effect.Aff (line 395, column 20 - line 397, column 54): " + [Z.constructor.name]);
      },
      fromRight: function fromRight(Z) {
        if (Z instanceof w.Right) return Z.value0;
        if (Z instanceof w.Left) return G.unsafeCrashWith("unsafeFromRight: Left");
        throw Error("Failed pattern match at Effect.Aff (line 400, column 21 - line 402, column 54): " + [Z.constructor.name]);
      },
      left: w.Left.create,
      right: w.Right.create
    };
  }(),
      K = function K(Z) {
    return function () {
      var ea = f._makeFiber(B, Z)();

      ea.run();
      return ea;
    };
  },
      X = new b.Apply(function () {
    return I;
  }, f._parAffApply),
      D = new d.Monad(function () {
    return J;
  }, function () {
    return N;
  }),
      N = new e.Bind(function () {
    return O;
  }, f._bind),
      O = new b.Apply(function () {
    return H;
  }, d.ap(D)),
      J = new g.Applicative(function () {
    return O;
  }, f._pure),
      Q = new v.MonadEffect(function () {
    return D;
  }, f._liftEffect);

  b = function () {
    var Z = v.liftEffect(Q);
    return function (ea) {
      return u["const"](Z(ea));
    };
  }();

  var q = new n.MonadThrow(function () {
    return D;
  }, f._throwError),
      U = new n.MonadError(function () {
    return q;
  }, f._catchError),
      da = function da(Z) {
    return function (ea) {
      return K(e.bindFlipped(N)(function () {
        var ta = v.liftEffect(Q);
        return function (M) {
          return ta(Z(M));
        };
      }())(n["try"](U)(ea)));
    };
  },
      R = new m.Parallel(function () {
    return V;
  }, function () {
    return D;
  }, a.unsafeCoerce, f._sequential),
      V = new g.Applicative(function () {
    return X;
  }, function () {
    var Z = m.parallel(R),
        ea = g.pure(J);
    return function (ta) {
      return Z(ea(ta));
    };
  }()),
      ba = new y.Semigroup(function (Z) {
    return function (ea) {
      return function (ta) {
        return l.parSequence_(R)(z.foldableArray)([Z(ta), ea(ta)]);
      };
    };
  });

  y = u["const"](g.pure(J)(x.unit));
  var fa = new p.Monoid(function () {
    return ba;
  }, y);
  y = f.makeAff(function (Z) {
    return g.pure(A.applicativeEffect)(p.mempty(fa));
  });
  var ca = new k.Alt(function () {
    return I;
  }, f._parAffAlt),
      ia = new k.Alt(function () {
    return H;
  }, function (Z) {
    return function (ea) {
      return n.catchError(U)(Z)(u["const"](ea));
    };
  });
  k = new r.Plus(function () {
    return ia;
  }, n.throwError(q)(F.error("Always fails")));
  r = new r.Plus(function () {
    return ca;
  }, m.parallel(R)(r.empty(k)));

  c.runAff_ = function (Z) {
    return function (ea) {
      return t["void"](A.functorEffect)(da(Z)(ea));
    };
  };

  c.delay = function (Z) {
    return f._delay(w.Right.create, Z);
  };

  c.never = y;
  c.effectCanceler = b;
  c.functorAff = H;
  c.applicativeAff = J;
  c.bindAff = N;
  c.monadEffectAff = Q;
  c.altParAff = ca;
  c.plusParAff = r;
  c.parallelAff = R;
  c.monoidCanceler = fa;
  c.makeAff = f.makeAff;
})(PS);

(function (a) {
  a["Effect.Aff.AVar"] = a["Effect.Aff.AVar"] || {};
  var c = a["Effect.AVar"],
      f = a["Effect.Aff"];

  a["Effect.Aff.AVar"].take = function (k) {
    return f.makeAff(function (g) {
      return function () {
        var b = c.take(k)(g)();
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

  a = function a(g, b) {
    this.MonadEffect0 = g;
    this.liftAff = b;
  };

  f = new a(function () {
    return k.monadEffectAff;
  }, f.identity(f.categoryFn));

  c.liftAff = function (g) {
    return g.liftAff;
  };

  c.MonadAff = a;
  c.monadAffAff = f;
})(PS);

(function (a) {
  a.log = function (c) {
    return function () {
      console.log(c);
      return {};
    };
  };
})(PS["Effect.Console"] = PS["Effect.Console"] || {});

(function (a) {
  a["Effect.Console"] = a["Effect.Console"] || {};
  var c = a["Effect.Console"],
      f = a["Effect.Console"],
      k = a["Data.Show"];

  c.logShow = function (g) {
    return function (b) {
      return f.log(k.show(g)(b));
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
      n = a["Control.Monad.Free"],
      l = a["Control.MultiAlternative"],
      m = a["Control.Parallel.Class"],
      r = a["Control.Plus"],
      w = a["Data.Array.NonEmpty"],
      z = a["Data.Array.NonEmpty.Internal"],
      u = a["Data.Either"],
      t = a["Data.FoldableWithIndex"],
      p = a["Data.Functor"],
      y = a["Data.Maybe"],
      x = a["Data.Monoid"],
      A = a["Data.Semigroup"],
      v = a["Data.Semigroup.Foldable"],
      F = a["Data.Show"],
      G = a["Data.Tuple"],
      I = a.Effect,
      H = a["Effect.AVar"],
      B = a["Effect.Aff"],
      K = a["Effect.Aff.AVar"],
      X = a["Effect.Aff.Class"],
      D = a["Effect.Class"],
      N = a["Effect.Console"],
      O = a["Effect.Exception"];
  a = new a["Control.ShiftMap"].ShiftMap(function (W) {
    return W(e.identity(e.categoryFn));
  });

  var J = n.freeFunctor,
      Q = n.freeBind,
      q = n.freeApplicative,
      U = new d.Monad(function () {
    return q;
  }, function () {
    return Q;
  }),
      da = function da(W) {
    return W;
  },
      R = function R(W) {
    return n["resume'"](function (C) {
      return function (S) {
        return new u.Right(p.map(W)(S)(C));
      };
    })(u.Left.create);
  },
      V = new p.Functor(function (W) {
    return function (C) {
      if (C instanceof u.Right) C = new u.Right({
        cont: p.map(B.functorAff)(W)(C.value0.cont),
        view: C.value0.view
      });else if (C instanceof u.Left) C = new u.Left(p.map(I.functorEffect)(W)(C.value0));else throw Error("Failed pattern match at Concur.Core.Types (line 45, column 5 - line 45, column 57): " + [C.constructor.name]);
      return C;
    };
  }),
      ba = function ba(W) {
    return n.liftF(u.Left.create(W));
  },
      fa = function fa(W) {
    return new D.MonadEffect(function () {
      return U;
    }, ba);
  },
      ca = function ca(W) {
    return n.liftF(new u.Right({
      view: W,
      cont: B.never
    }));
  },
      ia = function ia(W) {
    return new A.Semigroup(function (C) {
      return function (S) {
        return l.orr(ea(W))([C, S]);
      };
    });
  },
      Z = function Z(W) {
    return new r.Plus(function () {
      return ta(W);
    }, ca(x.mempty(W)));
  },
      ea = function ea(W) {
    return new l.MultiAlternative(function () {
      return Z(W);
    }, function (C) {
      var S = function S(ja) {
        return function (E) {
          return function (Y) {
            var ka = p.map(z.functorNonEmptyArray)(function (qa) {
              return n.wrap(u.Right.create(qa));
            })(E);
            return b.bind(B.bindAff)(m.sequential(B.parallelAff)(t.foldlWithIndex(z.foldableWithIndexNonEmptyArray)(function (qa) {
              return function (sa) {
                return function (ya) {
                  return f.alt(B.altParAff)(m.parallel(B.parallelAff)(p.map(B.functorAff)(G.Tuple.create(qa))(ya)))(sa);
                };
              };
            })(r.empty(B.plusParAff))(Y)))(function (qa) {
              return g.pure(B.applicativeAff)(na(ja)(y.fromMaybe(ka)(w.updateAt(qa.value0)(qa.value1)(ka))));
            });
          };
        };
      },
          P = function P(ja) {
        return function (E) {
          return n.wrap(new u.Right({
            view: v.foldMap1(z.foldable1NonEmptyArray)(ja.Semigroup0())(function (Y) {
              return Y.view;
            })(E),
            cont: S(ja)(E)(p.map(z.functorNonEmptyArray)(function (Y) {
              return Y.cont;
            })(E))
          }));
        };
      },
          L = function L(ja) {
        return function (E) {
          return function (Y) {
            var ka = w.uncons(Y),
                qa = R(V)(ka.head);
            if (qa instanceof u.Left) return g.pure(n.freeApplicative)(qa.value0);

            if (qa instanceof u.Right) {
              if (qa.value0 instanceof u.Left) return n.wrap(new u.Left(function () {
                var sa = qa.value0.value0();
                return L(ja)(E)(w["cons'"](sa)(ka.tail));
              }));
              if (qa.value0 instanceof u.Right) return la(ja)(w.snoc(E)(qa.value0.value0))(ka.tail);
              throw Error("Failed pattern match at Concur.Core.Types (line 138, column 34 - line 142, column 61): " + [qa.value0.constructor.name]);
            }

            throw Error("Failed pattern match at Concur.Core.Types (line 136, column 10 - line 142, column 61): " + [qa.constructor.name]);
          };
        };
      },
          la = function la(ja) {
        return function (E) {
          return function (Y) {
            Y = w.fromArray(Y);
            if (Y instanceof y.Nothing) return P(ja)(E);
            if (Y instanceof y.Just) return L(ja)(E)(Y.value0);
            throw Error("Failed pattern match at Concur.Core.Types (line 113, column 31 - line 116, column 49): " + [Y.constructor.name]);
          };
        };
      },
          na = function na(ja) {
        return function (E) {
          var Y = w.uncons(E),
              ka = R(V)(Y.head);
          if (ka instanceof u.Left) return g.pure(n.freeApplicative)(ka.value0);

          if (ka instanceof u.Right) {
            if (ka.value0 instanceof u.Left) return n.wrap(new u.Left(function () {
              var qa = ka.value0.value0();
              return na(ja)(w["cons'"](qa)(Y.tail));
            }));
            if (ka.value0 instanceof u.Right) return la(ja)(w.singleton(ka.value0.value0))(Y.tail);
            throw Error("Failed pattern match at Concur.Core.Types (line 101, column 34 - line 105, column 63): " + [ka.value0.constructor.name]);
          }

          throw Error("Failed pattern match at Concur.Core.Types (line 99, column 10 - line 105, column 63): " + [ka.constructor.name]);
        };
      };

      C = w.fromArray(C);
      if (C instanceof y.Just) return na(W)(p.map(z.functorNonEmptyArray)(da)(C.value0));
      if (C instanceof y.Nothing) return r.empty(Z(W));
      throw Error("Failed pattern match at Concur.Core.Types (line 88, column 13 - line 90, column 21): " + [C.constructor.name]);
    });
  },
      ta = function ta(W) {
    return new f.Alt(function () {
      return J;
    }, A.append(ia(W)));
  },
      M = function M(W) {
    return function (C) {
      var S = function S(P) {
        return function (L) {
          if (L instanceof u.Left) return N.log("Aff failed - " + F.show(O.showError)(L.value0));
          if (L instanceof u.Right) return p["void"](I.functorEffect)(H.tryPut(L.value0)(P));
          throw Error("Failed pattern match at Concur.Core.Types (line 237, column 3 - line 237, column 55): " + [P.constructor.name, L.constructor.name]);
        };
      };

      return n.wrap(new u.Left(function () {
        var P = H.empty();
        B.runAff_(S(P))(C)();
        var L = H.tryTake(P)();
        if (L instanceof y.Just) return g.pure(n.freeApplicative)(L.value0);
        if (L instanceof y.Nothing) return n.liftF(new u.Right({
          view: W,
          cont: K.take(P)
        }));
        throw Error("Failed pattern match at Concur.Core.Types (line 232, column 8 - line 234, column 75): " + [L.constructor.name]);
      }));
    };
  };

  c.WidgetStep = function (W) {
    return W;
  };

  c.Widget = function (W) {
    return W;
  };

  c.unWidget = da;
  c.resume = R;
  c.display = ca;
  c.functorWidgetStep = V;
  c.widgetFunctor = J;
  c.widgetBind = Q;
  c.widgetApplicative = q;
  c.widgetMonad = U;
  c.widgetShiftMap = a;
  c.widgetMultiAlternative = ea;

  c.widgetMonoid = function (W) {
    return new x.Monoid(function () {
      return ia(W);
    }, r.empty(Z(W)));
  };

  c.widgetAlt = ta;
  c.widgetPlus = Z;

  c.widgetAlternative = function (W) {
    return new k.Alternative(function () {
      return q;
    }, function () {
      return Z(W);
    });
  };

  c.widgetMonadEff = fa;

  c.widgetMonadAff = function (W) {
    return new X.MonadAff(function () {
      return fa(W);
    }, M(x.mempty(W)));
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
      n = a["Data.Functor"],
      l = a.Effect,
      m = a["Effect.AVar"],
      r = a["Effect.Aff"],
      w = a["Effect.Aff.AVar"],
      z = a["Effect.Aff.Class"],
      u = function u(t) {
    return function (p) {
      var y = f.resume(f.functorWidgetStep)(p);
      if (y instanceof d.Left) return g.pure(b.freeApplicative)(y.value0);

      if (y instanceof d.Right) {
        if (y.value0 instanceof d.Left) return b.wrap(f.WidgetStep(new d.Left(function () {
          var x = y.value0.value0();
          return u(t)(x);
        })));
        if (y.value0 instanceof d.Right) return b.wrap(f.WidgetStep(new d.Left(function () {
          var x = m.empty(),
              A = e.sequential(r.parallelAff)(k.alt(r.altParAff)(e.parallel(r.parallelAff)(z.liftAff(z.monadAffAff)(w.take(x))))(e.parallel(r.parallelAff)(n.map(r.functorAff)(u(t))(y.value0.value0.cont))));
          return b.wrap(f.WidgetStep(new d.Right({
            view: t(function (v) {
              return n["void"](l.functorEffect)(m.tryPut(g.pure(b.freeApplicative)(v))(x));
            })(y.value0.value0.view),
            cont: A
          })));
        })));
        throw Error("Failed pattern match at Concur.Core (line 36, column 28 - line 49, column 10): " + [y.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core (line 34, column 26 - line 49, column 10): " + [y.constructor.name]);
    };
  };

  c.mkLeafWidget = function (t) {
    return f.Widget(b.wrap(f.WidgetStep(new d.Left(function () {
      var p = m.empty();
      return b.wrap(f.WidgetStep(new d.Right({
        view: t(function (y) {
          return n["void"](l.functorEffect)(m.tryPut(g.pure(b.freeApplicative)(y))(p));
        }),
        cont: z.liftAff(z.monadAffAff)(w.take(p))
      })));
    }))));
  };

  c.mkNodeWidget = function (t) {
    return function (p) {
      return u(t)(p);
    };
  };
})(PS);

(function (a) {
  a["Concur.Core.LiftWidget"] = a["Concur.Core.LiftWidget"] || {};
  var c = a["Concur.Core.LiftWidget"];
  a = a["Control.Category"];
  a = new function (f) {
    this.liftWidget = f;
  }(a.identity(a.categoryFn));

  c.liftWidget = function (f) {
    return f.liftWidget;
  };

  c.widgetLiftWidget = a;
})(PS);

(function (a) {
  a["Concur.Core.Props"] = a["Concur.Core.Props"] || {};
  var c = a["Concur.Core.Props"];
  a = a["Data.Functor"];

  var f = function () {
    function g(b) {
      this.value0 = b;
    }

    g.create = function (b) {
      return new g(b);
    };

    return g;
  }(),
      k = function () {
    function g(b) {
      this.value0 = b;
    }

    g.create = function (b) {
      return new g(b);
    };

    return g;
  }();

  a = new a.Functor(function (g) {
    return function (b) {
      if (b instanceof f) return new f(b.value0);
      if (b instanceof k) return new k(function (e) {
        return b.value0(function (d) {
          return e(g(d));
        });
      });
      throw Error("Failed pattern match at Concur.Core.Props (line 13, column 1 - line 15, column 48): " + [g.constructor.name, b.constructor.name]);
    };
  });
  c.PrimProp = f;
  c.Handler = k;

  c.mkProp = function (g) {
    return function (b) {
      if (b instanceof f) return b.value0;
      if (b instanceof k) return b.value0(g);
      throw Error("Failed pattern match at Concur.Core.Props (line 18, column 1 - line 22, column 7): " + [g.constructor.name, b.constructor.name]);
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
      n = function n(l) {
    return function (m) {
      return function (r) {
        return function (w) {
          return e.shiftMap(l)(function (z) {
            return function (u) {
              return f.mkNodeWidget(function (t) {
                return function (p) {
                  return r(d.map(m)(function () {
                    var y = g.mkProp(t),
                        x = d.map(g.functorProps)(z);
                    return function (A) {
                      return y(x(A));
                    };
                  }())(w))(p);
                };
              })(u);
            };
          });
        };
      };
    };
  };

  c.el = n;

  c.elLeaf = function (l) {
    return function (m) {
      return function (r) {
        return function (w) {
          return k.liftWidget(l)(f.mkLeafWidget(function (z) {
            return r(d.map(m)(g.mkProp(z))(w));
          }));
        };
      };
    };
  };

  c["el'"] = function (l) {
    return function (m) {
      return function (r) {
        return function (w) {
          return function (z) {
            var u = n(l)(r)(w)(z),
                t = b.orr(m);
            return function (p) {
              return u(t(p));
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
      n = a["Data.Tuple"],
      l = a.Effect,
      m = a["Effect.Aff"],
      r = function r(z) {
    return function (u) {
      var t = g.resume(f.functorWidgetStep)(f.unWidget(u));
      if (t instanceof b.Right) return k.pure(l.applicativeEffect)(new n.Tuple(u, d.mempty(z)));

      if (t instanceof b.Left) {
        if (t.value0 instanceof b.Left) return function () {
          var p = t.value0.value0();
          return r(z)(p)();
        };
        if (t.value0 instanceof b.Right) return k.pure(l.applicativeEffect)(new n.Tuple(g.wrap(new b.Right(t.value0.value0)), t.value0.value0.view));
        throw Error("Failed pattern match at Concur.Core.Discharge (line 43, column 27 - line 47, column 77): " + [t.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core.Discharge (line 41, column 28 - line 47, column 77): " + [t.constructor.name]);
    };
  },
      w = function w(z) {
    return function (u) {
      return function (t) {
        var p = g.resume(f.functorWidgetStep)(t);
        if (p instanceof b.Right) return k.pure(l.applicativeEffect)(d.mempty(z));

        if (p instanceof b.Left) {
          if (p.value0 instanceof b.Left) return function () {
            var y = p.value0.value0();
            return w(z)(u)(y)();
          };
          if (p.value0 instanceof b.Right) return function () {
            m.runAff_(function () {
              var y = e.map(b.functorEither)(f.Widget);
              return function (x) {
                return u(y(x));
              };
            }())(p.value0.value0.cont)();
            return p.value0.value0.view;
          };
          throw Error("Failed pattern match at Concur.Core.Discharge (line 26, column 28 - line 32, column 19): " + [p.value0.constructor.name]);
        }

        throw Error("Failed pattern match at Concur.Core.Discharge (line 24, column 32 - line 32, column 19): " + [p.constructor.name]);
      };
    };
  };

  c.discharge = w;
  c.dischargePartialEffect = r;
})(PS);

(function (a) {
  a["Control.Comonad"] = a["Control.Comonad"] || {};
  a = a["Control.Comonad"];

  a.Comonad = function (c, f) {
    this.Extend0 = c;
    this.extract = f;
  };

  a.extract = function (c) {
    return c.extract;
  };
})(PS);

(function (a) {
  a["Control.Extend"] = a["Control.Extend"] || {};

  a["Control.Extend"].Extend = function (c, f) {
    this.Functor0 = c;
    this.extend = f;
  };
})(PS);

(function (a) {
  a.defer = function (c) {
    var f = null;
    return function () {
      if (void 0 === c) return f;
      f = c();
      c = void 0;
      return f;
    };
  };

  a.force = function (c) {
    return c();
  };
})(PS["Data.Lazy"] = PS["Data.Lazy"] || {});

(function (a) {
  a["Data.Lazy"] = a["Data.Lazy"] || {};
  var c = a["Data.Lazy"],
      f = a["Data.Lazy"];
  a = new a["Data.Functor"].Functor(function (k) {
    return function (g) {
      return f.defer(function (b) {
        return k(f.force(g));
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
      n = a["Control.Extend"],
      l = a["Control.Monad"],
      m = a["Control.Plus"],
      r = a["Control.ShiftMap"],
      w = a["Data.Functor"],
      z = a["Data.Lazy"],
      u = a["Data.Tuple"],
      t = function t(H) {
    return u.snd(z.force(H));
  },
      p = function p(H) {
    return function (B) {
      return z.defer(function (K) {
        return new u.Tuple(H, B);
      });
    };
  },
      y = function y(H) {
    return u.fst(z.force(H));
  },
      x = function x(H) {
    return new w.Functor(function (B) {
      var K = function K(X) {
        return w.map(z.functorLazy)(function (D) {
          return new u.Tuple(B(D.value0), w.map(H)(K)(D.value1));
        })(X);
      };

      return K;
    });
  },
      A = function A(H) {
    return new n.Extend(function () {
      return x(H);
    }, function (B) {
      var K = function K(X) {
        return w.map(z.functorLazy)(function (D) {
          return new u.Tuple(B(X), w.map(H)(K)(D.value1));
        })(X);
      };

      return K;
    });
  },
      v = function v(H) {
    return new l.Monad(function () {
      return I(H);
    }, function () {
      return F(H);
    });
  },
      F = function F(H) {
    return new e.Bind(function () {
      return G(H);
    }, function (B) {
      return function (K) {
        var X = function X(N) {
          return function (O) {
            var J = w.map(H.Plus1().Alt0().Functor0())(X(N))(t(O)),
                Q = w.map(H.Plus1().Alt0().Functor0())(D)(t(N));
            return p(y(O))(k.alt(H.Plus1().Alt0())(Q)(J));
          };
        },
            D = function D(N) {
          return X(N)(K(y(N)));
        };

        return D(B);
      };
    });
  },
      G = function G(H) {
    return new b.Apply(function () {
      return x(H.Plus1().Alt0().Functor0());
    }, l.ap(v(H)));
  },
      I = function I(H) {
    return new g.Applicative(function () {
      return G(H);
    }, function (B) {
      return p(B)(m.empty(H.Plus1()));
    });
  };

  c.mkCofree = p;
  c.tail = t;

  c.comonadCofree = function (H) {
    return new d.Comonad(function () {
      return A(H);
    }, y);
  };

  c.applicativeCofree = I;
  c.bindCofree = F;

  c.shiftMapCofree = function (H) {
    return new r.ShiftMap(function (B) {
      return function (K) {
        return z.defer(function (X) {
          X = z.force(K);
          return new u.Tuple(X.value0, B(g.pure(I(f.widgetAlternative(H))))(X.value1));
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
      n = a["Data.Functor"],
      l = a["Data.Maybe"],
      m = a["Data.Unit"],
      r = a["Effect.Aff"],
      w = a["Effect.Aff.Class"],
      z = e.tail,
      u = e.mkCofree,
      t = function t(x) {
    return function (A) {
      return u(x)(n.map(f.widgetFunctor)(function (v) {
        return t(v)(A);
      })(A(x)));
    };
  },
      p = function p(x) {
    return function (A) {
      return function (v) {
        var F = v(A);
        return u(d.extract(e.comonadCofree(f.widgetFunctor))(F))(b.bind(f.widgetBind)(z(F))(function (G) {
          return g.pure(f.widgetApplicative)(p(x)(d.extract(e.comonadCofree(f.widgetFunctor))(G))(v));
        }));
      };
    };
  },
      y = function y(x) {
    return b.bind(f.widgetBind)(z(x))(y);
  };

  c.step = u;

  c.display = function (x) {
    return u(m.unit)(x);
  };

  c.loopW = t;
  c.loopS = p;
  c.dyn = y;

  c.debounce = function (x) {
    return function (A) {
      return function (v) {
        return function (F) {
          var G = function G(H) {
            return function (B) {
              return b.bind(f.widgetBind)(k.alt(f.widgetAlt(x))(n.map(f.widgetFunctor)(l.Just.create)(B(H)))(n.voidRight(f.widgetFunctor)(l.Nothing.value)(w.liftAff(f.widgetMonadAff(x))(r.delay(A)))))(function (K) {
                if (K instanceof l.Nothing) return g.pure(f.widgetApplicative)(I(H)(B));
                if (K instanceof l.Just) return G(K.value0)(B);
                throw Error("Failed pattern match at Concur.Core.FRP (line 199, column 7 - line 203, column 28): " + [K.constructor.name]);
              });
            };
          },
              I = function I(H) {
            return function (B) {
              return u(H)(b.bind(f.widgetBind)(B(H))(function (K) {
                return G(K)(B);
              }));
            };
          };

          return I(v)(F);
        };
      };
    };
  };
})(PS);

(function (a) {
  function c(g) {
    return function (b) {
      return function (e) {
        return f.createElement.apply(f, [g, b].concat(e));
      };
    };
  }

  var f = require("react"),
      k = function (g) {
    function b(e, d, n) {
      switch (d) {
        case "state":
        case "render":
        case "componentDidMount":
        case "componentWillUnmount":
          e[d] = n;
          break;

        case "componentDidCatch":
        case "componentWillUpdate":
        case "shouldComponentUpdate":
        case "getSnapshotBeforeUpdate":
          e[d] = function (l, m) {
            return n(l)(m)();
          };

          break;

        case "componentDidUpdate":
          e[d] = function (l, m, r) {
            return n(l)(m)(r)();
          };

          break;

        case "unsafeComponentWillMount":
          e.UNSAFE_componentWillMount = n;
          break;

        case "unsafeComponentWillReceiveProps":
          e.UNSAFE_componentWillReceiveProps = function (l) {
            return n(l)();
          };

          break;

        case "unsafeComponentWillUpdate":
          e.UNSAFE_componentWillUpdate = function (l, m) {
            return n(l)(m)();
          };

          break;

        default:
          throw Error("[purescript-react] Not a component property: " + d);
      }
    }

    return function (e) {
      return function (d) {
        var n = function n(l) {
          g.call(this, l);
          l = d(this)();

          for (var m in l) {
            b(this, m, l[m]);
          }
        };

        n.displayName = e;
        n.prototype = Object.create(g.prototype);
        return n.prototype.constructor = n;
      };
    };
  }(f.Component);

  a.componentImpl = k;
  a.fragment = f.Fragment;

  a.setStateImpl = function (g) {
    return function (b) {
      return function () {
        g.setState(b);
      };
    };
  };

  a.getState = function (g) {
    return function () {
      if (!g.state) throw Error("[purescript-react] Cannot get state within constructor");
      return g.state;
    };
  };

  a.createElementImpl = c;
  a.createElementTagName = c;

  a.createLeafElementImpl = function (g) {
    return function (b) {
      return f.createElement(g, b);
    };
  };

  a.createElementTagNameDynamic = function (g) {
    return function (b) {
      return function (e) {
        return f.createElement(g, b, e);
      };
    };
  };
})(PS.React = PS.React || {});

(function (a) {
  a.React = a.React || {};
  var c = a.React,
      f = a.React;
  a = f.setStateImpl;
  var k = new function (g) {
    this.toElement = g;
  }((0, f.createElementImpl)(f.fragment)({}));

  c.component = function (g) {
    return f.componentImpl;
  };

  c.writeState = a;

  c.createLeafElement = function (g) {
    return f.createLeafElementImpl;
  };

  c.toElement = function (g) {
    return g.toElement;
  };

  c.isReactElementArray = k;
  c.getState = f.getState;
  c.createElementTagName = f.createElementTagName;
  c.createElementTagNameDynamic = f.createElementTagNameDynamic;
})(PS);

(function (a) {
  a["Concur.React"] = a["Concur.React"] || {};

  var c = a["Concur.React"],
      f = a["Concur.Core.Discharge"],
      k = a["Control.Apply"],
      g = a["Data.Either"],
      b = a["Data.Functor"],
      e = a["Data.Monoid"],
      d = a["Data.Show"],
      n = a["Data.Unit"],
      l = a.Effect,
      m = a["Effect.Console"],
      r = a["Effect.Exception"],
      w = a.React,
      z = function (u) {
    return function (t) {
      var p = function p(x) {
        return w.toElement(w.isReactElementArray)(x.view);
      },
          y = function y(x) {
        return function (A) {
          if (A instanceof g.Right) return function () {
            var v = f.discharge(e.monoidArray)(y(x))(A.value0)();
            return b["void"](l.functorEffect)(w.writeState(x)({
              view: v
            }))();
          };
          if (A instanceof g.Left) return function () {
            m.log("FAILED! " + d.show(r.showError)(A.value0))();
            return n.unit;
          };
          throw Error("Failed pattern match at Concur.React (line 32, column 5 - line 34, column 52): " + [x.constructor.name, A.constructor.name]);
        };
      };

      return w.component()("Concur")(function (x) {
        return function () {
          var A = f.dischargePartialEffect(e.monoidArray)(t)();
          return {
            state: {
              view: A.value1
            },
            render: b.map(l.functorEffect)(p)(w.getState(x)),
            componentDidMount: k.applySecond(l.applyEffect)(u)(y(x)(new g.Right(A.value0)))
          };
        };
      });
    };
  }(e.mempty(l.monoidEffect(e.monoidUnit)));

  c.renderComponent = function (u) {
    return w.createLeafElement()(z(u))({});
  };
})(PS);

(function (a) {
  require("react");

  a.unsafeMkProps = function (c) {
    return function (f) {
      var k = {};
      k[c] = f;
      return k;
    };
  };

  a.unsafeUnfoldProps = function (c) {
    return function (f) {
      var k = {},
          g = {};
      g[c] = k;

      for (var b in f) {
        f.hasOwnProperty(b) && (k[b] = f[b]);
      }

      return g;
    };
  };

  a.unsafeFromPropsArray = function (c) {
    for (var f = {}, k = 0, g = c.length; k < g; k++) {
      var b = c[k],
          e;

      for (e in b) {
        b.hasOwnProperty(e) && (f[e] = b[e]);
      }
    }

    return f;
  };
})(PS["React.DOM.Props"] = PS["React.DOM.Props"] || {});

(function (a) {
  a.mkEffectFn1 = function (c) {
    return function (f) {
      return c(f)();
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
      n = f.unsafeMkProps("defaultValue"),
      l = f.unsafeMkProps("className"),
      m = f.unsafeMkProps("checked"),
      r = f.unsafeMkProps("type");
  c.style = b;
  c.checked = m;
  c.className = l;
  c.defaultValue = n;
  c.disabled = d;
  c.href = e;
  c.target = g;
  c._type = r;
  c.value = a;

  c.onChange = function (w) {
    return f.unsafeMkProps("onChange")(k.mkEffectFn1(w));
  };

  c.onClick = function (w) {
    return f.unsafeMkProps("onClick")(k.mkEffectFn1(w));
  };

  c.unsafeFromPropsArray = f.unsafeFromPropsArray;
})(PS);

(function (a) {
  a["React.DOM"] = a["React.DOM"] || {};
  var c = a["React.DOM"],
      f = a.React,
      k = a["React.DOM.Props"];
  a = a["Unsafe.Coerce"].unsafeCoerce;

  var g = function g(u) {
    return function (t) {
      return function (p) {
        if (u) {
          if (u) var y = f.createElementTagNameDynamic;else throw Error("Failed pattern match at React.DOM (line 15, column 5 - line 17, column 55): " + [u.constructor.name]);
        } else y = f.createElementTagName;
        return y(t)(k.unsafeFromPropsArray(p));
      };
    };
  },
      b = g(!1)("option"),
      e = g(!1)("select"),
      d = g(!1)("span"),
      n = g(!1)("ul"),
      l = g(!1)("li"),
      m = g(!1)("div"),
      r = g(!1)("cite"),
      w = g(!1)("button"),
      z = g(!1)("a");

  c.text = a;
  c.a = z;

  c.br = function (u) {
    return g(!1)("br")(u)([]);
  };

  c.button = w;
  c.cite = r;
  c.div = m;

  c.input = function (u) {
    return g(!1)("input")(u)([]);
  };

  c.li = l;
  c.option = b;
  c.select = e;
  c.span = d;
  c.ul = n;
})(PS);

(function (a) {
  a["Concur.React.DOM"] = a["Concur.React.DOM"] || {};

  var c = a["Concur.React.DOM"],
      f = a["Concur.Core.DOM"],
      k = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Types"],
      b = a["Data.Functor"],
      e = a["React.DOM"],
      d = function d(t) {
    return function (p) {
      return function (y) {
        return [t(p)(y)];
      };
    };
  },
      n = function n(t) {
    return function (p) {
      return f.elLeaf(t)(b.functorArray)(function (y) {
        return [p(y)];
      });
    };
  },
      l = function l(t) {
    return function (p) {
      return function (y) {
        return f["el'"](t)(p)(b.functorArray)(d(y));
      };
    };
  },
      m = function m(t) {
    return function (p) {
      return l(p)(t)(e.li);
    };
  },
      r = function r(t) {
    return function (p) {
      return l(p)(t)(e.span);
    };
  },
      w = function w(t) {
    return function (p) {
      return f.el(t)(b.functorArray)(d(p));
    };
  },
      z = function z(t) {
    return function (p) {
      return l(p)(t)(e.div);
    };
  },
      u = function u(t) {
    return function (p) {
      return l(p)(t)(e.cite);
    };
  };

  c.text = function (t) {
    return function (p) {
      return k.liftWidget(t)(g.display([e.text(p)]));
    };
  };

  c.a = function (t) {
    return function (p) {
      return l(p)(t)(e.a);
    };
  };

  c["br'"] = function (t) {
    return n(t)(e.br)([]);
  };

  c.button_ = function (t) {
    return w(t)(e.button);
  };

  c.button = function (t) {
    return function (p) {
      return l(p)(t)(e.button);
    };
  };

  c["cite'"] = function (t) {
    return function (p) {
      return u(t)(p)([]);
    };
  };

  c.div_ = function (t) {
    return w(t)(e.div);
  };

  c.div = z;

  c["div'"] = function (t) {
    return function (p) {
      return z(t)(p)([]);
    };
  };

  c.input = function (t) {
    return n(t)(e.input);
  };

  c.li_ = function (t) {
    return w(t)(e.li);
  };

  c.li = m;

  c["li'"] = function (t) {
    return function (p) {
      return m(t)(p)([]);
    };
  };

  c.option = function (t) {
    return function (p) {
      return l(p)(t)(e.option);
    };
  };

  c.select = function (t) {
    return function (p) {
      return l(p)(t)(e.select);
    };
  };

  c.span_ = function (t) {
    return w(t)(e.span);
  };

  c.span = r;

  c["span'"] = function (t) {
    return function (p) {
      return r(t)(p)([]);
    };
  };

  c.ul_ = function (t) {
    return w(t)(e.ul);
  };

  c.ul = function (t) {
    return function (p) {
      return l(p)(t)(e.ul);
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

  var n = new f.Handler(d.onChange),
      l = function l(r) {
    return f.PrimProp.create(d.className(r));
  },
      m = function () {
    var r = g.intercalate(g.foldableArray)(e.monoidString)(" "),
        w = k.concatMap(b.maybe([])(function (z) {
      return [z];
    }));
    return function (z) {
      return l(r(w(z)));
    };
  }();

  c.classList = m;

  c.unsafeTargetValue = function (r) {
    return r.target.value;
  };

  c.style = function (r) {
    return f.PrimProp.create(d.style(r));
  };

  c.checked = function (r) {
    return f.PrimProp.create(d.checked(r));
  };

  c.className = l;

  c.defaultValue = function (r) {
    return f.PrimProp.create(d.defaultValue(r));
  };

  c.disabled = function (r) {
    return f.PrimProp.create(d.disabled(r));
  };

  c.href = function (r) {
    return f.PrimProp.create(d.href(r));
  };

  c._type = function (r) {
    return f.PrimProp.create(d._type(r));
  };

  c.value = function (r) {
    return f.PrimProp.create(d.value(r));
  };

  c.onChange = n;
  c.onClick = a;
})(PS);

(function (a) {
  var c = require("react-dom");

  require("react-dom/server");

  a.renderImpl = function (f, k) {
    return c.render(f, k);
  };
})(PS.ReactDOM = PS.ReactDOM || {});

(function (a) {
  a["null"] = null;

  a.nullable = function (c, f, k) {
    return null == c ? f : k(c);
  };

  a.notNull = function (c) {
    return c;
  };
})(PS["Data.Nullable"] = PS["Data.Nullable"] || {});

(function (a) {
  a["Data.Nullable"] = a["Data.Nullable"] || {};
  var c = a["Data.Nullable"],
      f = a["Data.Nullable"],
      k = a["Data.Maybe"];
  a = k.maybe(f["null"])(f.notNull);

  c.toMaybe = function (g) {
    return f.nullable(g, k.Nothing.value, k.Just.create);
  };

  c.toNullable = a;
})(PS);

(function (a) {
  a.ReactDOM = a.ReactDOM || {};
  var c = a.ReactDOM,
      f = a["Data.Functor"],
      k = a["Data.Nullable"],
      g = a.Effect;

  a.ReactDOM.render = function (b) {
    return function (e) {
      return f.map(g.functorEffect)(k.toMaybe)(function () {
        return c.renderImpl(b, e);
      });
    };
  };
})(PS);

(function (a) {
  a._getElementById = function (c) {
    return function (f) {
      return function () {
        return f.getElementById(c);
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

  a["Web.DOM.NonElementParentNode"].getElementById = function (b) {
    var e = f.map(g.functorEffect)(k.toMaybe),
        d = c._getElementById(b);

    return function (n) {
      return e(d(n));
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
  a.document = function (c) {
    return function () {
      return c.document;
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
      n = a["Web.HTML"],
      l = a["Web.HTML.HTMLDocument"],
      m = a["Web.HTML.Window"];

  a["Concur.React.Run"].runWidgetInDom = function (r) {
    return function (w) {
      return function () {
        var z = n.window();
        z = m.document(z)();
        z = l.toNonElementParentNode(z);
        z = d.getElementById(r)(z)();
        if (z instanceof k.Nothing) return g.unit;
        if (z instanceof k.Just) return f["void"](b.functorEffect)(e.render(c.renderComponent(w))(z.value0))();
        throw Error("Failed pattern match at Concur.React.Run (line 23, column 3 - line 25, column 65): " + [z.constructor.name]);
      };
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.State.Class"] = a["Control.Monad.State.Class"] || {};
  var c = a["Control.Monad.State.Class"],
      f = a["Data.Tuple"],
      k = a["Data.Unit"];

  c.state = function (g) {
    return g.state;
  };

  c.MonadState = function (g, b) {
    this.Monad0 = g;
    this.state = b;
  };

  c.get = function (g) {
    return (0, g.state)(function (b) {
      return new f.Tuple(b, b);
    });
  };

  c.gets = function (g) {
    return function (b) {
      return (0, g.state)(function (e) {
        return new f.Tuple(b(e), e);
      });
    };
  };

  c.put = function (g) {
    return function (b) {
      return (0, g.state)(function (e) {
        return new f.Tuple(k.unit, b);
      });
    };
  };

  c.modify_ = function (g) {
    return function (b) {
      return (0, g.state)(function (e) {
        return new f.Tuple(k.unit, b(e));
      });
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.Trans.Class"] = a["Control.Monad.Trans.Class"] || {};
  a = a["Control.Monad.Trans.Class"];

  a.lift = function (c) {
    return c.lift;
  };

  a.MonadTrans = function (c) {
    this.lift = c;
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
      n = a["Control.Monad.Trans.Class"],
      l = a["Data.Either"],
      m = a["Data.Functor"],
      r = new n.MonadTrans(function (x) {
    return function (A) {
      return g.bind(x.Bind1())(A)(function (v) {
        return f.pure(x.Applicative0())(new l.Right(v));
      });
    };
  }),
      w = function w(x) {
    return function (A) {
      return x(A);
    };
  },
      z = function z(x) {
    return new m.Functor(function (A) {
      return w(m.map(x)(m.map(l.functorEither)(A)));
    });
  },
      u = function u(x) {
    return new b.Monad(function () {
      return y(x);
    }, function () {
      return t(x);
    });
  },
      t = function t(x) {
    return new g.Bind(function () {
      return p(x);
    }, function (A) {
      return function (v) {
        return g.bind(x.Bind1())(A)(l.either(function () {
          var F = f.pure(x.Applicative0());
          return function (G) {
            return F(l.Left.create(G));
          };
        }())(function (F) {
          return v(F);
        }));
      };
    });
  },
      p = function p(x) {
    return new k.Apply(function () {
      return z(x.Bind1().Apply0().Functor0());
    }, b.ap(u(x)));
  },
      y = function y(x) {
    return new f.Applicative(function () {
      return p(x);
    }, function () {
      var A = f.pure(x.Applicative0());
      return function (v) {
        return A(l.Right.create(v));
      };
    }());
  };

  c.ExceptT = function (x) {
    return x;
  };

  c.runExceptT = function (x) {
    return x;
  };

  c.functorExceptT = z;
  c.applyExceptT = p;
  c.applicativeExceptT = y;
  c.bindExceptT = t;

  c.monadThrowExceptT = function (x) {
    return new e.MonadThrow(function () {
      return u(x);
    }, function () {
      var A = f.pure(x.Applicative0());
      return function (v) {
        return A(l.Left.create(v));
      };
    }());
  };

  c.monadStateExceptT = function (x) {
    return new d.MonadState(function () {
      return u(x.Monad0());
    }, function (A) {
      return n.lift(r)(x.Monad0())(d.state(x)(A));
    });
  };
})(PS);

(function (a) {
  a["Data.Identity"] = a["Data.Identity"] || {};

  var c = a["Data.Identity"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Data.Functor"],
      d = function d(w) {
    return w;
  };

  a = new a["Data.Newtype"].Newtype(function (w) {
    return w;
  }, d);
  var n = new e.Functor(function (w) {
    return function (z) {
      return w(z);
    };
  }),
      l = new k.Apply(function () {
    return n;
  }, function (w) {
    return function (z) {
      return w(z);
    };
  }),
      m = new g.Bind(function () {
    return l;
  }, function (w) {
    return function (z) {
      return z(w);
    };
  }),
      r = new f.Applicative(function () {
    return l;
  }, d);
  f = new b.Monad(function () {
    return r;
  }, function () {
    return m;
  });
  c.newtypeIdentity = a;
  c.functorIdentity = n;
  c.monadIdentity = f;
})(PS);

(function (a) {
  a["Control.Monad.Except"] = a["Control.Monad.Except"] || {};
  var c = a["Control.Monad.Except"],
      f = a["Control.Monad.Except.Trans"],
      k = a["Data.Identity"],
      g = a["Data.Newtype"];

  a = function () {
    var b = g.unwrap(k.newtypeIdentity);
    return function (e) {
      return b(f.runExceptT(e));
    };
  }();

  c.runExcept = a;
})(PS);

(function (a) {
  a["Control.Monad.Maybe.Trans"] = a["Control.Monad.Maybe.Trans"] || {};

  var c = a["Control.Monad.Maybe.Trans"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Data.Functor"],
      d = a["Data.Maybe"],
      n = function n(z) {
    return new e.Functor(function (u) {
      return function (t) {
        return e.map(z)(e.map(d.functorMaybe)(u))(t);
      };
    });
  },
      l = function l(z) {
    return new b.Monad(function () {
      return w(z);
    }, function () {
      return m(z);
    });
  },
      m = function m(z) {
    return new g.Bind(function () {
      return r(z);
    }, function (u) {
      return function (t) {
        return g.bind(z.Bind1())(u)(function (p) {
          if (p instanceof d.Nothing) return f.pure(z.Applicative0())(d.Nothing.value);
          if (p instanceof d.Just) return t(p.value0);
          throw Error("Failed pattern match at Control.Monad.Maybe.Trans (line 54, column 11 - line 56, column 42): " + [p.constructor.name]);
        });
      };
    });
  },
      r = function r(z) {
    return new k.Apply(function () {
      return n(z.Bind1().Apply0().Functor0());
    }, b.ap(l(z)));
  },
      w = function w(z) {
    return new f.Applicative(function () {
      return r(z);
    }, function () {
      var u = f.pure(z.Applicative0());
      return function (t) {
        return u(d.Just.create(t));
      };
    }());
  };

  c.MaybeT = function (z) {
    return z;
  };

  c.runMaybeT = function (z) {
    return z;
  };

  c.applicativeMaybeT = w;
  c.bindMaybeT = m;
})(PS);

(function (a) {
  a.map_ = function (c) {
    return function (f) {
      return function () {
        return c(f());
      };
    };
  };

  a.pure_ = function (c) {
    return function () {
      return c;
    };
  };

  a.bind_ = function (c) {
    return function (f) {
      return function () {
        return f(c())();
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
    return n;
  });
  var n = new b.Bind(function () {
    return l;
  }, f.bind_),
      l = new g.Apply(function () {
    return d;
  }, e.ap(a)),
      m = new k.Applicative(function () {
    return l;
  }, f.pure_);
  c.applicativeST = m;
})(PS);

(function (a) {
  a["Control.Monad.State"] = a["Control.Monad.State"] || {};

  a["Control.Monad.State"].execState = function (c) {
    return function (f) {
      return c(f).value1;
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
      n = a["Data.Tuple"],
      l = a["Data.Unit"];
  a = new a["Control.Lazy"].Lazy(function (t) {
    return function (p) {
      return t(l.unit)(p);
    };
  });

  var m = function m(t) {
    return new d.Functor(function (p) {
      return function (y) {
        return function (x) {
          return d.map(t)(function (A) {
            return new n.Tuple(p(A.value0), A.value1);
          })(y(x));
        };
      };
    });
  },
      r = function r(t) {
    return new b.Monad(function () {
      return u(t);
    }, function () {
      return w(t);
    });
  },
      w = function w(t) {
    return new g.Bind(function () {
      return z(t);
    }, function (p) {
      return function (y) {
        return function (x) {
          return g.bind(t.Bind1())(p(x))(function (A) {
            return y(A.value0)(A.value1);
          });
        };
      };
    });
  },
      z = function z(t) {
    return new k.Apply(function () {
      return m(t.Bind1().Apply0().Functor0());
    }, b.ap(r(t)));
  },
      u = function u(t) {
    return new f.Applicative(function () {
      return z(t);
    }, function (p) {
      return function (y) {
        return f.pure(t.Applicative0())(new n.Tuple(p, y));
      };
    });
  };

  c.StateT = function (t) {
    return t;
  };

  c.runStateT = function (t) {
    return t;
  };

  c.evalStateT = function (t) {
    return function (p) {
      return function (y) {
        return d.map(t)(n.fst)(p(y));
      };
    };
  };

  c.functorStateT = m;
  c.bindStateT = w;
  c.monadStateT = r;
  c.lazyStateT = a;

  c.monadStateStateT = function (t) {
    return new e.MonadState(function () {
      return r(t);
    }, function (p) {
      return function () {
        var y = f.pure(t.Applicative0());
        return function (x) {
          return y(p(x));
        };
      }();
    });
  };
})(PS);

(function (a) {
  a.toCharCode = function (c) {
    return c.charCodeAt(0);
  };

  a.fromCharCode = function (c) {
    return String.fromCharCode(c);
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
      n = a["Data.Ord"],
      l = a["Data.Tuple"],
      m = a["Data.Unfoldable1"];

  a = function a(I) {
    return I;
  };

  var r = function r(I) {
    this.Bounded0 = I;
  },
      w = function w(I, H, B) {
    this.Ord0 = I;
    this.pred = H;
    this.succ = B;
  },
      z = function z(I, H, B, K, X) {
    this.Bounded0 = I;
    this.Enum1 = H;
    this.cardinality = B;
    this.fromEnum = K;
    this.toEnum = X;
  },
      u = new r(function () {
    return g.boundedBoolean;
  }),
      t = new d.Newtype(function (I) {
    return I;
  }, a),
      p = function p(I) {
    return new w(function () {
      return e.ordMaybe(I.Enum1().Ord0());
    }, function (H) {
      if (H instanceof e.Nothing) return e.Nothing.value;
      if (H instanceof e.Just) return new e.Just((0, I.Enum1().pred)(H.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [H.constructor.name]);
    }, function (H) {
      if (H instanceof e.Nothing) return new e.Just(new e.Just(g.bottom(I.Bounded0())));
      if (H instanceof e.Just) return b.map(e.functorMaybe)(e.Just.create)((0, I.Enum1().succ)(H.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [H.constructor.name]);
    });
  },
      y = new w(function () {
    return n.ordBoolean;
  }, function (I) {
    return I ? new e.Just(!1) : e.Nothing.value;
  }, function (I) {
    return I ? e.Nothing.value : new e.Just(!0);
  }),
      x = function x(I) {
    return function (H) {
      return function (B) {
        return I(H(B) + 1 | 0);
      };
    };
  },
      A = function A(I) {
    return function (H) {
      return function (B) {
        return I(H(B) - 1 | 0);
      };
    };
  },
      v = function v(I) {
    return I >= g.bottom(g.boundedInt) && I <= g.top(g.boundedInt) ? new e.Just(f.fromCharCode(I)) : e.Nothing.value;
  },
      F = new w(function () {
    return n.ordChar;
  }, A(v)(f.toCharCode), x(v)(f.toCharCode));

  v = new z(function () {
    return g.boundedChar;
  }, function () {
    return F;
  }, f.toCharCode(g.top(g.boundedChar)) - f.toCharCode(g.bottom(g.boundedChar)) | 0, f.toCharCode, v);
  var G = new z(function () {
    return g.boundedBoolean;
  }, function () {
    return y;
  }, 2, function (I) {
    if (!I) return 0;
    if (I) return 1;
    throw Error("Failed pattern match at Data.Enum (line 120, column 1 - line 126, column 20): " + [I.constructor.name]);
  }, function (I) {
    return 0 === I ? new e.Just(!1) : 1 === I ? new e.Just(!0) : e.Nothing.value;
  });
  c.Enum = w;
  c.BoundedEnum = z;

  c.toEnum = function (I) {
    return I.toEnum;
  };

  c.fromEnum = function (I) {
    return I.fromEnum;
  };

  c.toEnumWithDefaults = function (I) {
    return function (H) {
      return function (B) {
        return function (K) {
          var X = (0, I.toEnum)(K);
          if (X instanceof e.Just) return X.value0;
          if (X instanceof e.Nothing) return K < (0, I.fromEnum)(g.bottom(I.Bounded0())) ? H : B;
          throw Error("Failed pattern match at Data.Enum (line 160, column 33 - line 162, column 62): " + [X.constructor.name]);
        };
      };
    };
  };

  c.Cardinality = a;

  c.upFromIncluding = function (I) {
    return function (H) {
      return m.unfoldr1(H)(k.apply(k.applyFn)(l.Tuple.create)(I.succ));
    };
  };

  c.defaultSucc = x;
  c.defaultPred = A;
  c.SmallBounded = r;
  c.boundedEnumBoolean = G;
  c.boundedEnumChar = v;
  c.newtypeCardinality = t;

  c.boundedEnumMaybe = function (I) {
    return function (H) {
      return new z(function () {
        return e.boundedMaybe(H.Bounded0());
      }, function () {
        return p(H);
      }, d.unwrap(t)(H.cardinality) + 1 | 0, function (B) {
        if (B instanceof e.Nothing) return 0;
        if (B instanceof e.Just) return (0, H.fromEnum)(B.value0) + 1 | 0;
        throw Error("Failed pattern match at Data.Enum (line 334, column 1 - line 340, column 39): " + [B.constructor.name]);
      }, function (B) {
        return 0 === B ? e.Nothing.value : b.map(e.functorMaybe)(e.Just.create)((0, H.toEnum)(B - 1 | 0));
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
  a = new function (k) {
    this.Ring0 = k;
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
      d = function d(m) {
    return m;
  };

  a = new a["Data.Newtype"].Newtype(function (m) {
    return m;
  }, d);

  var n = new g.Functor(function (m) {
    return function (r) {
      return r;
    };
  }),
      l = function l(m) {
    return new k.Apply(function () {
      return n;
    }, function (r) {
      return function (w) {
        return e.append(m)(r)(w);
      };
    });
  };

  c.Const = d;
  c.newtypeConst = a;

  c.applicativeConst = function (m) {
    return new f.Applicative(function () {
      return l(m.Semigroup0());
    }, function (r) {
      return b.mempty(m);
    });
  };
})(PS);

(function (a) {
  var c = function c(f, k, g) {
    k = new Date(Date.UTC(f, k, g));
    0 <= f && 100 > f && k.setUTCFullYear(f);
    return k;
  };

  a.canonicalDateImpl = function (f, k, g, b) {
    k = c(k, g - 1, b);
    return f(k.getUTCFullYear())(k.getUTCMonth() + 1)(k.getUTCDate());
  };

  a.calcWeekday = function (f, k, g) {
    return c(f, k - 1, g).getUTCDay();
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
      n = a["Data.Ordering"],
      l = a["Data.Show"],
      m = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      r = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      w = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      z = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      u = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      t = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      p = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      y = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      x = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      A = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      v = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      F = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      G = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      I = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      H = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      B = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      K = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      X = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      D = function () {
    function C() {}

    C.value = new C();
    return C;
  }();

  a = new l.Show(function (C) {
    if (C instanceof m) return "Monday";
    if (C instanceof r) return "Tuesday";
    if (C instanceof w) return "Wednesday";
    if (C instanceof z) return "Thursday";
    if (C instanceof u) return "Friday";
    if (C instanceof t) return "Saturday";
    if (C instanceof p) return "Sunday";
    throw Error("Failed pattern match at Data.Date.Component (line 184, column 1 - line 191, column 25): " + [C.constructor.name]);
  });
  l = new l.Show(function (C) {
    if (C instanceof y) return "January";
    if (C instanceof x) return "February";
    if (C instanceof A) return "March";
    if (C instanceof v) return "April";
    if (C instanceof F) return "May";
    if (C instanceof G) return "June";
    if (C instanceof I) return "July";
    if (C instanceof H) return "August";
    if (C instanceof B) return "September";
    if (C instanceof K) return "October";
    if (C instanceof X) return "November";
    if (C instanceof D) return "December";
    throw Error("Failed pattern match at Data.Date.Component (line 101, column 1 - line 113, column 29): " + [C.constructor.name]);
  });
  var N = d.ordInt,
      O = d.ordInt,
      J = new b.Eq(function (C) {
    return function (S) {
      return C instanceof m && S instanceof m || C instanceof r && S instanceof r || C instanceof w && S instanceof w || C instanceof z && S instanceof z || C instanceof u && S instanceof u || C instanceof t && S instanceof t || C instanceof p && S instanceof p ? !0 : !1;
    };
  }),
      Q = new d.Ord(function () {
    return J;
  }, function (C) {
    return function (S) {
      if (C instanceof m && S instanceof m) return n.EQ.value;
      if (C instanceof m) return n.LT.value;
      if (S instanceof m) return n.GT.value;
      if (C instanceof r && S instanceof r) return n.EQ.value;
      if (C instanceof r) return n.LT.value;
      if (S instanceof r) return n.GT.value;
      if (C instanceof w && S instanceof w) return n.EQ.value;
      if (C instanceof w) return n.LT.value;
      if (S instanceof w) return n.GT.value;
      if (C instanceof z && S instanceof z) return n.EQ.value;
      if (C instanceof z) return n.LT.value;
      if (S instanceof z) return n.GT.value;
      if (C instanceof u && S instanceof u) return n.EQ.value;
      if (C instanceof u) return n.LT.value;
      if (S instanceof u) return n.GT.value;
      if (C instanceof t && S instanceof t) return n.EQ.value;
      if (C instanceof t) return n.LT.value;
      if (S instanceof t) return n.GT.value;
      if (C instanceof p && S instanceof p) return n.EQ.value;
      throw Error("Failed pattern match at Data.Date.Component (line 154, column 1 - line 154, column 42): " + [C.constructor.name, S.constructor.name]);
    };
  }),
      q = new b.Eq(function (C) {
    return function (S) {
      return C instanceof y && S instanceof y || C instanceof x && S instanceof x || C instanceof A && S instanceof A || C instanceof v && S instanceof v || C instanceof F && S instanceof F || C instanceof G && S instanceof G || C instanceof I && S instanceof I || C instanceof H && S instanceof H || C instanceof B && S instanceof B || C instanceof K && S instanceof K || C instanceof X && S instanceof X || C instanceof D && S instanceof D ? !0 : !1;
    };
  }),
      U = new d.Ord(function () {
    return q;
  }, function (C) {
    return function (S) {
      if (C instanceof y && S instanceof y) return n.EQ.value;
      if (C instanceof y) return n.LT.value;
      if (S instanceof y) return n.GT.value;
      if (C instanceof x && S instanceof x) return n.EQ.value;
      if (C instanceof x) return n.LT.value;
      if (S instanceof x) return n.GT.value;
      if (C instanceof A && S instanceof A) return n.EQ.value;
      if (C instanceof A) return n.LT.value;
      if (S instanceof A) return n.GT.value;
      if (C instanceof v && S instanceof v) return n.EQ.value;
      if (C instanceof v) return n.LT.value;
      if (S instanceof v) return n.GT.value;
      if (C instanceof F && S instanceof F) return n.EQ.value;
      if (C instanceof F) return n.LT.value;
      if (S instanceof F) return n.GT.value;
      if (C instanceof G && S instanceof G) return n.EQ.value;
      if (C instanceof G) return n.LT.value;
      if (S instanceof G) return n.GT.value;
      if (C instanceof I && S instanceof I) return n.EQ.value;
      if (C instanceof I) return n.LT.value;
      if (S instanceof I) return n.GT.value;
      if (C instanceof H && S instanceof H) return n.EQ.value;
      if (C instanceof H) return n.LT.value;
      if (S instanceof H) return n.GT.value;
      if (C instanceof B && S instanceof B) return n.EQ.value;
      if (C instanceof B) return n.LT.value;
      if (S instanceof B) return n.GT.value;
      if (C instanceof K && S instanceof K) return n.EQ.value;
      if (C instanceof K) return n.LT.value;
      if (S instanceof K) return n.GT.value;
      if (C instanceof X && S instanceof X) return n.EQ.value;
      if (C instanceof X) return n.LT.value;
      if (S instanceof X) return n.GT.value;
      if (C instanceof D && S instanceof D) return n.EQ.value;
      throw Error("Failed pattern match at Data.Date.Component (line 61, column 1 - line 61, column 38): " + [C.constructor.name, S.constructor.name]);
    };
  }),
      da = new k.Bounded(function () {
    return N;
  }, -271820, 275759),
      R = new k.Bounded(function () {
    return Q;
  }, m.value, p.value),
      V = new k.Bounded(function () {
    return U;
  }, y.value, D.value),
      ba = new g.BoundedEnum(function () {
    return da;
  }, function () {
    return fa;
  }, 547580, function (C) {
    return C;
  }, function (C) {
    if (-271820 <= C && 275759 >= C) return new e.Just(C);
    if (f.otherwise) return e.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 35, column 1 - line 40, column 24): " + [C.constructor.name]);
  }),
      fa = new g.Enum(function () {
    return N;
  }, function () {
    var C = g.toEnum(ba),
        S = g.fromEnum(ba);
    return function (P) {
      return C(S(P) - 1 | 0);
    };
  }(), function () {
    var C = g.toEnum(ba),
        S = g.fromEnum(ba);
    return function (P) {
      return C(S(P) + 1 | 0);
    };
  }()),
      ca = new g.BoundedEnum(function () {
    return R;
  }, function () {
    return ia;
  }, 7, function (C) {
    if (C instanceof m) return 1;
    if (C instanceof r) return 2;
    if (C instanceof w) return 3;
    if (C instanceof z) return 4;
    if (C instanceof u) return 5;
    if (C instanceof t) return 6;
    if (C instanceof p) return 7;
    throw Error("Failed pattern match at Data.Date.Component (line 175, column 14 - line 182, column 16): " + [C.constructor.name]);
  }, function (C) {
    return 1 === C ? new e.Just(m.value) : 2 === C ? new e.Just(r.value) : 3 === C ? new e.Just(w.value) : 4 === C ? new e.Just(z.value) : 5 === C ? new e.Just(u.value) : 6 === C ? new e.Just(t.value) : 7 === C ? new e.Just(p.value) : e.Nothing.value;
  }),
      ia = new g.Enum(function () {
    return Q;
  }, function () {
    var C = g.toEnum(ca),
        S = g.fromEnum(ca);
    return function (P) {
      return C(S(P) - 1 | 0);
    };
  }(), function () {
    var C = g.toEnum(ca),
        S = g.fromEnum(ca);
    return function (P) {
      return C(S(P) + 1 | 0);
    };
  }()),
      Z = new g.BoundedEnum(function () {
    return V;
  }, function () {
    return ea;
  }, 12, function (C) {
    if (C instanceof y) return 1;
    if (C instanceof x) return 2;
    if (C instanceof A) return 3;
    if (C instanceof v) return 4;
    if (C instanceof F) return 5;
    if (C instanceof G) return 6;
    if (C instanceof I) return 7;
    if (C instanceof H) return 8;
    if (C instanceof B) return 9;
    if (C instanceof K) return 10;
    if (C instanceof X) return 11;
    if (C instanceof D) return 12;
    throw Error("Failed pattern match at Data.Date.Component (line 87, column 14 - line 99, column 19): " + [C.constructor.name]);
  }, function (C) {
    return 1 === C ? new e.Just(y.value) : 2 === C ? new e.Just(x.value) : 3 === C ? new e.Just(A.value) : 4 === C ? new e.Just(v.value) : 5 === C ? new e.Just(F.value) : 6 === C ? new e.Just(G.value) : 7 === C ? new e.Just(I.value) : 8 === C ? new e.Just(H.value) : 9 === C ? new e.Just(B.value) : 10 === C ? new e.Just(K.value) : 11 === C ? new e.Just(X.value) : 12 === C ? new e.Just(D.value) : e.Nothing.value;
  }),
      ea = new g.Enum(function () {
    return U;
  }, function () {
    var C = g.toEnum(Z),
        S = g.fromEnum(Z);
    return function (P) {
      return C(S(P) - 1 | 0);
    };
  }(), function () {
    var C = g.toEnum(Z),
        S = g.fromEnum(Z);
    return function (P) {
      return C(S(P) + 1 | 0);
    };
  }()),
      ta = new k.Bounded(function () {
    return O;
  }, 1, 31),
      M = new g.BoundedEnum(function () {
    return ta;
  }, function () {
    return W;
  }, 31, function (C) {
    return C;
  }, function (C) {
    if (1 <= C && 31 >= C) return new e.Just(C);
    if (f.otherwise) return e.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 133, column 1 - line 138, column 23): " + [C.constructor.name]);
  }),
      W = new g.Enum(function () {
    return O;
  }, function () {
    var C = g.toEnum(M),
        S = g.fromEnum(M);
    return function (P) {
      return C(S(P) - 1 | 0);
    };
  }(), function () {
    var C = g.toEnum(M),
        S = g.fromEnum(M);
    return function (P) {
      return C(S(P) + 1 | 0);
    };
  }());
  c.January = y;
  c.February = x;
  c.March = A;
  c.April = v;
  c.May = F;
  c.June = G;
  c.July = I;
  c.August = H;
  c.September = B;
  c.October = K;
  c.November = X;
  c.December = D;
  c.boundedYear = da;
  c.boundedEnumYear = ba;
  c.boundedMonth = V;
  c.boundedEnumMonth = Z;
  c.showMonth = l;
  c.boundedDay = ta;
  c.boundedEnumDay = M;
  c.boundedEnumWeekday = ca;
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
    function d(n, l, m) {
      this.value0 = n;
      this.value1 = l;
      this.value2 = m;
    }

    d.create = function (n) {
      return function (l) {
        return function (m) {
          return new d(n, l, m);
        };
      };
    };

    return d;
  }();

  c.canonicalDate = function (d) {
    return function (n) {
      return function (l) {
        return f.canonicalDateImpl(function (m) {
          return function (r) {
            return function (w) {
              return new e(m, b.fromJust()(g.toEnum(k.boundedEnumMonth)(r)), w);
            };
          };
        }, d, g.fromEnum(k.boundedEnumMonth)(n), l);
      };
    };
  };

  c.year = function (d) {
    return d.value0;
  };

  c.month = function (d) {
    return d.value1;
  };

  c.day = function (d) {
    return d.value2;
  };

  c.weekday = function (d) {
    d = f.calcWeekday(d.value0, g.fromEnum(k.boundedEnumMonth)(d.value1), d.value2);
    return 0 === d ? b.fromJust()(g.toEnum(k.boundedEnumWeekday)(7)) : b.fromJust()(g.toEnum(k.boundedEnumWeekday)(d));
  };
})(PS);

(function (a) {
  a["Data.DateTime"] = a["Data.DateTime"] || {};
  a = a["Data.DateTime"];

  var c = function () {
    function f(k, g) {
      this.value0 = k;
      this.value1 = g;
    }

    f.create = function (k) {
      return function (g) {
        return new f(k, g);
      };
    };

    return f;
  }();

  a.DateTime = c;
})(PS);

(function (a) {
  a.fromDateTimeImpl = function (c, f, k, g, b, e, d) {
    f = new Date(Date.UTC(c, f - 1, k, g, b, e, d));
    0 <= c && 100 > c && f.setUTCFullYear(c);
    return f.getTime();
  };

  a.toDateTimeImpl = function (c) {
    return function (f) {
      f = new Date(f);
      return c(f.getUTCFullYear())(f.getUTCMonth() + 1)(f.getUTCDate())(f.getUTCHours())(f.getUTCMinutes())(f.getUTCSeconds())(f.getUTCMilliseconds());
    };
  };
})(PS["Data.DateTime.Instant"] = PS["Data.DateTime.Instant"] || {});

(function (a) {
  a["Data.Time"] = a["Data.Time"] || {};
  a = a["Data.Time"];

  var c = function () {
    function f(k, g, b, e) {
      this.value0 = k;
      this.value1 = g;
      this.value2 = b;
      this.value3 = e;
    }

    f.create = function (k) {
      return function (g) {
        return function (b) {
          return function (e) {
            return new f(k, g, b, e);
          };
        };
      };
    };

    return f;
  }();

  a.Time = c;

  a.hour = function (f) {
    return f.value0;
  };

  a.minute = function (f) {
    return f.value1;
  };

  a.second = function (f) {
    return f.value2;
  };

  a.millisecond = function (f) {
    return f.value3;
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
      n = a["Data.Time"];

  a = function () {
    return f.toDateTimeImpl(function (l) {
      return function (m) {
        return function (r) {
          return function (w) {
            return function (z) {
              return function (u) {
                return function (t) {
                  return new b.DateTime(k.canonicalDate(l)(d.fromJust()(e.toEnum(g.boundedEnumMonth)(m)))(r), new n.Time(w, z, u, t));
                };
              };
            };
          };
        };
      };
    });
  }();

  c.unInstant = function (l) {
    return l;
  };

  c.fromDateTime = function (l) {
    return f.fromDateTimeImpl(k.year(l.value0), e.fromEnum(g.boundedEnumMonth)(k.month(l.value0)), k.day(l.value0), n.hour(l.value1), n.minute(l.value1), n.second(l.value1), n.millisecond(l.value1));
  };

  c.toDateTime = a;
})(PS);

(function (a) {
  a.intDegree = function (c) {
    return Math.min(Math.abs(c), 2147483647);
  };

  a.intDiv = function (c) {
    return function (f) {
      return 0 === f ? 0 : 0 < f ? Math.floor(c / f) : -Math.floor(c / -f);
    };
  };

  a.intMod = function (c) {
    return function (f) {
      if (0 === f) return 0;
      f = Math.abs(f);
      return (c % f + f) % f;
    };
  };
})(PS["Data.EuclideanRing"] = PS["Data.EuclideanRing"] || {});

(function (a) {
  a["Data.EuclideanRing"] = a["Data.EuclideanRing"] || {};
  var c = a["Data.EuclideanRing"],
      f = a["Data.EuclideanRing"],
      k = a["Data.CommutativeRing"];
  a = new function (g, b, e, d) {
    this.CommutativeRing0 = g;
    this.degree = b;
    this.div = e;
    this.mod = d;
  }(function () {
    return k.commutativeRingInt;
  }, f.intDegree, f.intDiv, f.intMod);

  c.div = function (g) {
    return g.div;
  };

  c.mod = function (g) {
    return g.mod;
  };

  c.euclideanRingInt = a;
})(PS);

(function (a) {
  a.split = function (c) {
    return function (f) {
      return f.split(c);
    };
  };

  a.toUpper = function (c) {
    return c.toUpperCase();
  };

  a.trim = function (c) {
    return c.trim();
  };
})(PS["Data.String.Common"] = PS["Data.String.Common"] || {});

(function (a) {
  a["Data.String.Common"] = a["Data.String.Common"] || {};
  var c = a["Data.String.Common"];
  a = a["Data.String.Common"];

  c["null"] = function (f) {
    return "" === f;
  };

  c.split = a.split;
  c.toUpper = a.toUpper;
  c.trim = a.trim;
})(PS);

(function (a) {
  a["Data.String.Pattern"] = a["Data.String.Pattern"] || {};

  var c = a["Data.String.Pattern"],
      f = function f(k) {
    return k;
  };

  a = new a["Data.Newtype"].Newtype(function (k) {
    return k;
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

  c.updatePosString = function (d) {
    return function (n) {
      return k.foldl(k.foldableArray)(function (l) {
        return function (m) {
          return "\n" === m || "\r" === m ? {
            line: l.line + 1 | 0,
            column: 1
          } : "\t" === m ? {
            line: l.line,
            column: (l.column + 8 | 0) - f.mod(f.euclideanRingInt)(l.column - 1 | 0)(8) | 0
          } : {
            line: l.line,
            column: l.column + 1 | 0
          };
        };
      })(d)(b.split(g.wrap(e.newtypePattern)(""))(n));
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
      n = a["Control.Monad.Except.Trans"],
      l = a["Control.Monad.State.Class"],
      m = a["Control.Monad.State.Trans"],
      r = a["Control.Plus"],
      w = a["Data.Either"],
      z = a["Data.Identity"],
      u = a["Data.Newtype"],
      t = a["Data.Tuple"],
      p = a["Text.Parsing.Parser.Pos"],
      y = function () {
    function J(Q, q, U) {
      this.value0 = Q;
      this.value1 = q;
      this.value2 = U;
    }

    J.create = function (Q) {
      return function (q) {
        return function (U) {
          return new J(Q, q, U);
        };
      };
    };

    return J;
  }(),
      x = function () {
    function J(Q, q) {
      this.value0 = Q;
      this.value1 = q;
    }

    J.create = function (Q) {
      return function (q) {
        return new J(Q, q);
      };
    };

    return J;
  }();

  a = function a(J) {
    return J;
  };

  var A = new u.Newtype(function (J) {
    return J;
  }, a),
      v = function v(J) {
    return function (Q) {
      return function (q) {
        var U = new y(Q, p.initialPos, !1);
        return m.evalStateT(J.Bind1().Apply0().Functor0())(n.runExceptT(u.unwrap(A)(q)))(U);
      };
    };
  },
      F = function F(J) {
    return n.monadStateExceptT(m.monadStateStateT(J));
  },
      G = function G(J) {
    return l.gets(F(J))(function (Q) {
      return Q.value1;
    });
  },
      I = new e.Lazy(function (J) {
    return e.defer(m.lazyStateT)(function () {
      var Q = u.unwrap(A);
      return function (q) {
        return n.runExceptT(Q(J(q)));
      };
    }());
  }),
      H = function H(J) {
    return n.functorExceptT(m.functorStateT(J));
  },
      B = function B(J) {
    return function (Q) {
      return function (q) {
        return d.throwError(n.monadThrowExceptT(m.monadStateT(J)))(new x(Q, q));
      };
    };
  },
      K = function K(J) {
    return n.bindExceptT(m.monadStateT(J));
  },
      X = function X(J) {
    return function (Q) {
      return b.bindFlipped(K(J))(B(J)(Q))(G(J));
    };
  },
      D = function D(J) {
    return n.applicativeExceptT(m.monadStateT(J));
  },
      N = function N(J) {
    return new f.Alt(function () {
      return H(J.Bind1().Apply0().Functor0());
    }, function (Q) {
      return function (q) {
        return n.ExceptT(m.StateT(function (U) {
          return b.bind(J.Bind1())(m.runStateT(n.runExceptT(u.unwrap(A)(Q)))(new y(U.value0, U.value1, !1)))(function (da) {
            return da.value0 instanceof w.Left && !da.value1.value2 ? m.runStateT(n.runExceptT(u.unwrap(A)(q)))(U) : g.pure(J.Applicative0())(new t.Tuple(da.value0, da.value1));
          });
        }));
      };
    });
  },
      O = function O(J) {
    return new r.Plus(function () {
      return N(J);
    }, X(J)("No alternative"));
  };

  c.ParseError = x;

  c.parseErrorMessage = function (J) {
    return J.value0;
  };

  c.parseErrorPosition = function (J) {
    return J.value1;
  };

  c.ParseState = y;
  c.ParserT = a;

  c.runParser = function (J) {
    var Q = u.unwrap(z.newtypeIdentity),
        q = v(z.monadIdentity)(J);
    return function (U) {
      return Q(q(U));
    };
  };

  c.fail = X;
  c.newtypeParserT = A;
  c.lazyParserT = I;
  c.functorParserT = H;

  c.applyParserT = function (J) {
    return n.applyExceptT(m.monadStateT(J));
  };

  c.applicativeParserT = D;
  c.bindParserT = K;
  c.monadStateParserT = F;
  c.altParserT = N;
  c.plusParserT = O;

  c.alternativeParserT = function (J) {
    return new k.Alternative(function () {
      return D(J);
    }, function () {
      return O(J);
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
      n = a["Data.Either"],
      l = a["Data.Foldable"],
      m = a["Data.Newtype"],
      r = a["Data.Tuple"],
      w = a["Text.Parsing.Parser"];

  c.withErrorMessage = function (z) {
    return function (u) {
      return function (t) {
        return f.alt(w.altParserT(z))(u)(w.fail(z)("Expected " + t));
      };
    };
  };

  c["try"] = function (z) {
    return function (u) {
      return w.ParserT(b.ExceptT(e.StateT(function (t) {
        return g.bind(z.Bind1())(e.runStateT(b.runExceptT(m.unwrap(w.newtypeParserT)(u)))(t))(function (p) {
          return p.value0 instanceof n.Left ? k.pure(z.Applicative0())(new r.Tuple(p.value0, new w.ParseState(p.value1.value0, p.value1.value1, t.value2))) : k.pure(z.Applicative0())(new r.Tuple(p.value0, p.value1));
        });
      })));
    };
  };

  c.tryRethrow = function (z) {
    return function (u) {
      return w.ParserT(b.ExceptT(e.StateT(function (t) {
        return g.bind(z.Bind1())(e.runStateT(b.runExceptT(m.unwrap(w.newtypeParserT)(u)))(t))(function (p) {
          return p.value0 instanceof n.Left ? k.pure(z.Applicative0())(new r.Tuple(new n.Left(new w.ParseError(p.value0.value0.value0, t.value1)), new w.ParseState(p.value1.value0, p.value1.value1, t.value2))) : k.pure(z.Applicative0())(new r.Tuple(p.value0, p.value1));
        });
      })));
    };
  };

  c.choice = function (z) {
    return function (u) {
      return l.foldl(z)(f.alt(w.altParserT(u)))(d.empty(w.plusParserT(u)));
    };
  };
})(PS);

(function (a) {
  var c = "function" === typeof Array.from,
      f = "undefined" !== typeof Symbol && null != Symbol && "undefined" !== typeof Symbol.iterator && "function" === typeof String.prototype[Symbol.iterator],
      k = "function" === typeof String.prototype.fromCodePoint,
      g = "function" === typeof String.prototype.codePointAt;

  a._unsafeCodePointAt0 = function (b) {
    return g ? function (e) {
      return e.codePointAt(0);
    } : b;
  };

  a._codePointAt = function (b) {
    return function (e) {
      return function (d) {
        return function (n) {
          return function (l) {
            return function (m) {
              var r = m.length;
              if (0 > l || l >= r) return d;
              if (f) for (m = m[Symbol.iterator](), r = l;; --r) {
                var w = m.next();
                if (w.done) return d;
                if (0 === r) return e(n(w.value));
              }
              return b(l)(m);
            };
          };
        };
      };
    };
  };

  a._singleton = function (b) {
    return k ? String.fromCodePoint : b;
  };

  a._take = function (b) {
    return function (e) {
      return f ? function (d) {
        var n = "";
        d = d[Symbol.iterator]();

        for (var l = 0; l < e; ++l) {
          var m = d.next();
          if (m.done) break;
          n += m.value;
        }

        return n;
      } : b(e);
    };
  };

  a._toCodePointArray = function (b) {
    return function (e) {
      return c ? function (d) {
        return Array.from(d, e);
      } : b;
    };
  };
})(PS["Data.String.CodePoints"] = PS["Data.String.CodePoints"] || {});

(function (a) {
  a.fromNumberImpl = function (c) {
    return function (f) {
      return function (k) {
        return (k | 0) === k ? c(k) : f;
      };
    };
  };

  a.toNumber = function (c) {
    return c;
  };

  a.toStringAs = function (c) {
    return function (f) {
      return f.toString(c);
    };
  };
})(PS["Data.Int"] = PS["Data.Int"] || {});

(function (a) {
  a.infinity = Infinity;

  a._encodeURIComponent = function (c) {
    return function (f, k, g) {
      try {
        return k(c(g));
      } catch (b) {
        return f(b.message);
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

  c.encodeURIComponent = function (b) {
    return f._encodeURIComponent(k["const"](g.Nothing.value), g.Just.create, b);
  };

  c.infinity = f.infinity;
})(PS);

(function (a) {
  a.floor = Math.floor;
  a.round = Math.round;
})(PS.Math = PS.Math || {});

(function (a) {
  a.Math = a.Math || {};
  var c = a.Math;
  a = a.Math;
  c.floor = a.floor;
  c.round = a.round;
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
      n = f.fromNumberImpl(b.Just.create)(b.Nothing.value),
      l = function l(m) {
    if (m === e.infinity || m === -e.infinity) return 0;
    if (m >= f.toNumber(g.top(g.boundedInt))) return g.top(g.boundedInt);
    if (m <= f.toNumber(g.bottom(g.boundedInt))) return g.bottom(g.boundedInt);
    if (k.otherwise) return b.fromMaybe(0)(n(m));
    throw Error("Failed pattern match at Data.Int (line 66, column 1 - line 66, column 29): " + [m.constructor.name]);
  };

  c.floor = function (m) {
    return l(d.floor(m));
  };

  c.round = function (m) {
    return l(d.round(m));
  };

  c.hexadecimal = 16;
  c.toNumber = f.toNumber;
  c.toStringAs = f.toStringAs;
})(PS);

(function (a) {
  a.fromCharArray = function (c) {
    return c.join("");
  };

  a.toCharArray = function (c) {
    return c.split("");
  };

  a.singleton = function (c) {
    return c;
  };

  a._charAt = function (c) {
    return function (f) {
      return function (k) {
        return function (g) {
          return 0 <= k && k < g.length ? c(g.charAt(k)) : f;
        };
      };
    };
  };

  a.length = function (c) {
    return c.length;
  };

  a._indexOf = function (c) {
    return function (f) {
      return function (k) {
        return function (g) {
          g = g.indexOf(k);
          return -1 === g ? f : c(g);
        };
      };
    };
  };

  a.take = function (c) {
    return function (f) {
      return f.substr(0, c);
    };
  };

  a.drop = function (c) {
    return function (f) {
      return f.substring(c);
    };
  };
})(PS["Data.String.CodeUnits"] = PS["Data.String.CodeUnits"] || {});

(function (a) {
  a.charAt = function (c) {
    return function (f) {
      if (0 <= c && c < f.length) return f.charAt(c);
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

  c.contains = function (e) {
    var d = b(e);
    return function (n) {
      return k.isJust(d(n));
    };
  };

  c.uncons = function (e) {
    return "" === e ? k.Nothing.value : new k.Just({
      head: g.charAt(0)(e),
      tail: f.drop(1)(e)
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
  a.unfoldrArrayImpl = function (c) {
    return function (f) {
      return function (k) {
        return function (g) {
          return function (b) {
            return function (e) {
              for (var d = [];;) {
                e = b(e);
                if (c(e)) return d;
                e = f(e);
                d.push(k(e));
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
  a = new function (d, n) {
    this.Unfoldable10 = d;
    this.unfoldr = n;
  }(function () {
    return e.unfoldable1Array;
  }, a["Data.Unfoldable"].unfoldrArrayImpl(g.isNothing)(g.fromJust())(b.fst)(b.snd));

  c.unfoldr = function (d) {
    return d.unfoldr;
  };

  c.fromMaybe = function (d) {
    return (0, d.unfoldr)(function (n) {
      return k.map(g.functorMaybe)(f.flip(b.Tuple.create)(g.Nothing.value))(n);
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
      n = a["Data.EuclideanRing"],
      l = a["Data.Functor"],
      m = a["Data.Int"],
      r = a["Data.Maybe"],
      w = a["Data.Ord"],
      z = a["Data.String.CodeUnits"],
      u = a["Data.String.Common"],
      t = a["Data.String.Unsafe"],
      p = a["Data.Tuple"],
      y = a["Data.Unfoldable"],
      x = function x(q) {
    return function (U) {
      return ((1024 * (q - 55296 | 0) | 0) + (U - 56320 | 0) | 0) + 65536 | 0;
    };
  };

  a = new a["Data.Show"].Show(function (q) {
    return "(CodePoint 0x" + (u.toUpper(m.toStringAs(m.hexadecimal)(q)) + ")");
  });

  var A = function A(q) {
    var U = z.length(q);
    if (0 === U) return r.Nothing.value;
    if (1 === U) return new r.Just({
      head: e.fromEnum(e.boundedEnumChar)(t.charAt(0)(q)),
      tail: ""
    });
    U = e.fromEnum(e.boundedEnumChar)(t.charAt(1)(q));
    var da = e.fromEnum(e.boundedEnumChar)(t.charAt(0)(q));
    return 55296 <= da && 56319 >= da && 56320 <= U && 57343 >= U ? new r.Just({
      head: x(da)(U),
      tail: z.drop(2)(q)
    }) : new r.Just({
      head: da,
      tail: z.drop(1)(q)
    });
  },
      v = function v(q) {
    return l.map(r.functorMaybe)(function (U) {
      return new p.Tuple(U.head, U.tail);
    })(A(q));
  },
      F = f._unsafeCodePointAt0(function (q) {
    var U = e.fromEnum(e.boundedEnumChar)(t.charAt(0)(q));
    return 55296 <= U && 56319 >= U && 1 < z.length(q) && (q = e.fromEnum(e.boundedEnumChar)(t.charAt(1)(q)), 56320 <= q && 57343 >= q) ? x(U)(q) : U;
  }),
      G = f._toCodePointArray(function (q) {
    return y.unfoldr(y.unfoldableArray)(v)(q);
  })(F),
      I = function I(q) {
    return k.length(G(q));
  },
      H = function () {
    var q = e.toEnumWithDefaults(e.boundedEnumChar)(b.bottom(b.boundedChar))(b.top(b.boundedChar));
    return function (U) {
      return z.singleton(q(U));
    };
  }(),
      B = f._singleton(function (q) {
    if (65535 >= q) return H(q);
    var U = n.div(n.euclideanRingInt)(q - 65536 | 0)(1024) + 55296 | 0;
    q = n.mod(n.euclideanRingInt)(q - 65536 | 0)(1024) + 56320 | 0;
    return H(U) + H(q);
  }),
      K = function K(q) {
    return function (U) {
      if (1 > q) return "";
      var da = A(U);
      return da instanceof r.Just ? B(da.value0.head) + K(q - 1 | 0)(da.value0.tail) : U;
    };
  },
      X = f._take(K),
      D = new d.Eq(function (q) {
    return function (U) {
      return q === U;
    };
  }),
      N = new w.Ord(function () {
    return D;
  }, function (q) {
    return function (U) {
      return w.compare(w.ordInt)(q)(U);
    };
  }),
      O = function O(q) {
    return function (U) {
      for (var da = q, R = !1, V; !R;) {
        V = da;
        var ba = A(U);
        ba instanceof r.Just ? 0 === V ? (R = !0, V = new r.Just(ba.value0.head)) : (da = V - 1 | 0, U = ba.value0.tail, V = void 0) : (R = !0, V = r.Nothing.value);
      }

      return V;
    };
  },
      J = new b.Bounded(function () {
    return N;
  }, 0, 1114111);

  d = new e.BoundedEnum(function () {
    return J;
  }, function () {
    return Q;
  }, 1114112, function (q) {
    return q;
  }, function (q) {
    if (0 <= q && 1114111 >= q) return new r.Just(q);
    if (g.otherwise) return r.Nothing.value;
    throw Error("Failed pattern match at Data.String.CodePoints (line 63, column 1 - line 68, column 26): " + [q.constructor.name]);
  });
  var Q = new e.Enum(function () {
    return N;
  }, e.defaultPred(e.toEnum(d))(e.fromEnum(d)), e.defaultSucc(e.toEnum(d))(e.fromEnum(d)));
  c.singleton = B;
  c.toCodePointArray = G;

  c.codePointAt = function (q) {
    return function (U) {
      return 0 > q || 0 === q && "" === U ? r.Nothing.value : 0 === q ? new r.Just(F(U)) : f._codePointAt(O)(r.Just.create)(r.Nothing.value)(F)(q)(U);
    };
  };

  c.length = I;

  c.indexOf = function (q) {
    return function (U) {
      return l.map(r.functorMaybe)(function (da) {
        return I(z.take(da)(U));
      })(z.indexOf(q)(U));
    };
  };

  c.take = X;

  c.drop = function (q) {
    return function (U) {
      return z.drop(z.length(X(q)(U)))(U);
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
      n = a["Data.Maybe"],
      l = a["Data.Newtype"],
      m = a["Data.Show"],
      r = a["Data.String.CodePoints"],
      w = a["Data.String.CodeUnits"],
      z = a["Data.String.Pattern"],
      u = a["Text.Parsing.Parser"],
      t = a["Text.Parsing.Parser.Combinators"],
      p = a["Text.Parsing.Parser.Pos"];
  a = new function (A, v, F, G) {
    this.drop = A;
    this.indexOf = v;
    this["null"] = F;
    this.uncons = G;
  }(r.drop, r.indexOf, a["Data.String.Common"]["null"], w.uncons);

  var y = function y(A) {
    return function (v) {
      return k.bind(u.bindParserT(v))(g.gets(u.monadStateParserT(v))(function (F) {
        return F.value0;
      }))(function (F) {
        var G = (0, A.uncons)(F);
        if (G instanceof n.Nothing) return u.fail(v)("Unexpected EOF");
        if (G instanceof n.Just) return k.discard(k.discardUnit)(u.bindParserT(v))(g.modify_(u.monadStateParserT(v))(function (I) {
          return new u.ParseState(G.value0.tail, p.updatePosString(I.value1)(w.singleton(G.value0.head)), !0);
        }))(function () {
          return f.pure(u.applicativeParserT(v))(G.value0.head);
        });
        throw Error("Failed pattern match at Text.Parsing.Parser.String (line 56, column 3 - line 63, column 16): " + [G.constructor.name]);
      });
    };
  },
      x = function x(A) {
    return function (v) {
      return function (F) {
        return t.tryRethrow(v)(k.bind(u.bindParserT(v))(y(A)(v))(function (G) {
          return F(G) ? f.pure(u.applicativeParserT(v))(G) : u.fail(v)("Character '" + (w.singleton(G) + "' did not satisfy predicate"));
        }));
      };
    };
  };

  c.eof = function (A) {
    return function (v) {
      return k.bind(u.bindParserT(v))(g.gets(u.monadStateParserT(v))(function (F) {
        return F.value0;
      }))(function (F) {
        return f.unless(u.applicativeParserT(v))((0, A["null"])(F))(u.fail(v)("Expected EOF"));
      });
    };
  };

  c.string = function (A) {
    return function (v) {
      return function (F) {
        return k.bind(u.bindParserT(v))(g.gets(u.monadStateParserT(v))(function (G) {
          return G.value0;
        }))(function (G) {
          var I = (0, A.indexOf)(l.wrap(z.newtypePattern)(F))(G);
          return I instanceof n.Just && 0 === I.value0 ? k.discard(k.discardUnit)(u.bindParserT(v))(g.modify_(u.monadStateParserT(v))(function (H) {
            return new u.ParseState((0, A.drop)(r.length(F))(G), p.updatePosString(H.value1)(F), !0);
          }))(function () {
            return f.pure(u.applicativeParserT(v))(F);
          }) : u.fail(v)("Expected " + m.show(m.showString)(F));
        });
      };
    };
  };

  c.noneOf = function (A) {
    return function (v) {
      return function (F) {
        return t.withErrorMessage(v)(x(A)(v)(d.flip(e.notElem(e.foldableArray)(b.eqChar))(F)))("none of " + m.show(m.showArray(m.showChar))(F));
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
      n = a["Text.Parsing.Parser"],
      l = a["Text.Parsing.Parser.Combinators"],
      m = a["Text.Parsing.Parser.String"],
      r = function r(w) {
    var z = n.parseErrorMessage(w);
    w = n.parseErrorPosition(w);
    w = "(line " + (d.show(d.showInt)(w.line) + (", col " + (d.show(d.showInt)(w.column) + ")")));
    return z + (" " + w);
  };

  c.oneOfAs = function (w) {
    return function (z) {
      return function (u) {
        return function (t) {
          return function (p) {
            return l.choice(z)(u)(b.map(w)(function (y) {
              return b.voidLeft(n.functorParserT(u.Bind1().Apply0().Functor0()))(t(y.value0))(y.value1);
            })(p));
          };
        };
      };
    };
  };

  c.runP = function (w) {
    return function (z) {
      return function (u) {
        return k.lmap(g.bifunctorEither)(r)(n.runParser(u)(f.applyFirst(n.applyParserT(e.monadIdentity))(z)(m.eof(w)(e.monadIdentity))));
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
      n = a.ordInt,
      l = a.ordInt,
      m = new k.Bounded(function () {
    return e;
  }, 0, 59),
      r = new k.Bounded(function () {
    return d;
  }, 0, 59),
      w = new k.Bounded(function () {
    return n;
  }, 0, 999),
      z = new k.Bounded(function () {
    return l;
  }, 0, 23),
      u = new g.BoundedEnum(function () {
    return m;
  }, function () {
    return t;
  }, 60, function (G) {
    return G;
  }, function (G) {
    if (0 <= G && 59 >= G) return new b.Just(G);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 90, column 1 - line 95, column 26): " + [G.constructor.name]);
  }),
      t = new g.Enum(function () {
    return e;
  }, function () {
    var G = g.toEnum(u),
        I = g.fromEnum(u);
    return function (H) {
      return G(I(H) - 1 | 0);
    };
  }(), function () {
    var G = g.toEnum(u),
        I = g.fromEnum(u);
    return function (H) {
      return G(I(H) + 1 | 0);
    };
  }()),
      p = new g.BoundedEnum(function () {
    return r;
  }, function () {
    return y;
  }, 60, function (G) {
    return G;
  }, function (G) {
    if (0 <= G && 59 >= G) return new b.Just(G);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 61, column 1 - line 66, column 26): " + [G.constructor.name]);
  }),
      y = new g.Enum(function () {
    return d;
  }, function () {
    var G = g.toEnum(p),
        I = g.fromEnum(p);
    return function (H) {
      return G(I(H) - 1 | 0);
    };
  }(), function () {
    var G = g.toEnum(p),
        I = g.fromEnum(p);
    return function (H) {
      return G(I(H) + 1 | 0);
    };
  }()),
      x = new g.BoundedEnum(function () {
    return w;
  }, function () {
    return A;
  }, 1E3, function (G) {
    return G;
  }, function (G) {
    if (0 <= G && 999 >= G) return new b.Just(G);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 120, column 1 - line 125, column 31): " + [G.constructor.name]);
  }),
      A = new g.Enum(function () {
    return n;
  }, function () {
    var G = g.toEnum(x),
        I = g.fromEnum(x);
    return function (H) {
      return G(I(H) - 1 | 0);
    };
  }(), function () {
    var G = g.toEnum(x),
        I = g.fromEnum(x);
    return function (H) {
      return G(I(H) + 1 | 0);
    };
  }()),
      v = new g.BoundedEnum(function () {
    return z;
  }, function () {
    return F;
  }, 24, function (G) {
    return G;
  }, function (G) {
    if (0 <= G && 23 >= G) return new b.Just(G);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 32, column 1 - line 37, column 24): " + [G.constructor.name]);
  }),
      F = new g.Enum(function () {
    return l;
  }, function () {
    var G = g.toEnum(v),
        I = g.fromEnum(v);
    return function (H) {
      return G(I(H) - 1 | 0);
    };
  }(), function () {
    var G = g.toEnum(v),
        I = g.fromEnum(v);
    return function (H) {
      return G(I(H) + 1 | 0);
    };
  }());
  c.boundedHour = z;
  c.boundedEnumHour = v;
  c.boundedMinute = r;
  c.boundedEnumMinute = p;
  c.boundedSecond = m;
  c.boundedEnumSecond = u;
  c.boundedMillisecond = w;
  c.boundedEnumMillisecond = x;
})(PS);

(function (a) {
  a["Data.Time.Duration"] = a["Data.Time.Duration"] || {};
  var c = a["Data.Time.Duration"];
  a = new a["Data.Newtype"].Newtype(function (f) {
    return f;
  }, function (f) {
    return f;
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
      n = a["Data.Either"],
      l = a["Data.Enum"],
      m = a["Data.EuclideanRing"],
      r = a["Data.Foldable"],
      w = a["Data.Formatter.Parser.Utils"],
      z = a["Data.Functor"],
      u = a["Data.Identity"],
      t = a["Data.Int"],
      p = a["Data.List"],
      y = a["Data.List.Types"],
      x = a["Data.Monoid"],
      A = a["Data.Newtype"],
      v = a["Data.Ord"],
      F = a["Data.Ring"],
      G = a["Data.Show"],
      I = a["Data.String.CodePoints"],
      H = a["Data.String.CodeUnits"],
      B = a["Data.Time"],
      K = a["Data.Time.Component"],
      X = a["Data.Time.Duration"],
      D = a["Data.Tuple"],
      N = a["Text.Parsing.Parser"],
      O = a["Text.Parsing.Parser.Combinators"],
      J = a["Text.Parsing.Parser.String"],
      Q = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      q = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      U = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      da = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      R = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      V = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      ba = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      fa = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      ca = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      ia = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      Z = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      ea = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      ta = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      M = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      W = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      C = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      S = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      P = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      L = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      la = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      na = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      ja = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      E = function () {
    function T(ua) {
      this.value0 = ua;
    }

    T.create = function (ua) {
      return new T(ua);
    };

    return T;
  }(),
      Y = function Y(T) {
    if (T instanceof e.January) return "Jan";
    if (T instanceof e.February) return "Feb";
    if (T instanceof e.March) return "Mar";
    if (T instanceof e.April) return "Apr";
    if (T instanceof e.May) return "May";
    if (T instanceof e.June) return "Jun";
    if (T instanceof e.July) return "Jul";
    if (T instanceof e.August) return "Aug";
    if (T instanceof e.September) return "Sep";
    if (T instanceof e.October) return "Oct";
    if (T instanceof e.November) return "Nov";
    if (T instanceof e.December) return "Dec";
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 482, column 19 - line 494, column 21): " + [T.constructor.name]);
  };

  a = z.mapFlipped(N.functorParserT(u.functorIdentity))(k.some(N.alternativeParserT(u.monadIdentity))(N.lazyParserT)(J.noneOf(J.stringLikeString)(u.monadIdentity)(H.toCharArray("YMDEHhamsS"))))(H.fromCharArray);

  var ka = function ka(T) {
    if (0 > T) return "-" + ka(-T | 0);
    if (10 > T) return "0" + G.show(G.showInt)(T);
    if (g.otherwise) return G.show(G.showInt)(T);
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 192, column 1 - line 192, column 30): " + [T.constructor.name]);
  },
      qa = function qa(T) {
    if (0 > T) return "-" + qa(-T | 0);
    if (10 > T) return "000" + G.show(G.showInt)(T);
    if (100 > T) return "00" + G.show(G.showInt)(T);
    if (1E3 > T) return "0" + G.show(G.showInt)(T);
    if (g.otherwise) return G.show(G.showInt)(T);
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 205, column 1 - line 205, column 33): " + [T.constructor.name]);
  },
      sa = function sa(T) {
    if (0 > T) return "-" + sa(-T | 0);
    if (10 > T) return "00" + G.show(G.showInt)(T);
    if (100 > T) return "0" + G.show(G.showInt)(T);
    if (g.otherwise) return G.show(G.showInt)(T);
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 198, column 1 - line 198, column 30): " + [T.constructor.name]);
  };

  f = f.alt(N.altParserT(u.monadIdentity))(w.oneOfAs(z.functorArray)(r.foldableArray)(u.monadIdentity)(function () {
    var T = O["try"](u.monadIdentity),
        ua = J.string(J.stringLikeString)(u.monadIdentity);
    return function (Ia) {
      return T(ua(Ia));
    };
  }())([new D.Tuple("YYYY", Q.value), new D.Tuple("YY", q.value), new D.Tuple("Y", U.value), new D.Tuple("MMMM", da.value), new D.Tuple("MMM", R.value), new D.Tuple("MM", V.value), new D.Tuple("DD", ba.value), new D.Tuple("D", fa.value), new D.Tuple("E", ia.value), new D.Tuple("X", ca.value), new D.Tuple("dddd", Z.value), new D.Tuple("ddd", ea.value), new D.Tuple("HH", ta.value), new D.Tuple("hh", M.value), new D.Tuple("a", W.value), new D.Tuple("mm", S.value), new D.Tuple("m", C.value), new D.Tuple("ss", L.value), new D.Tuple("s", P.value), new D.Tuple("SSS", la.value), new D.Tuple("SS", ja.value), new D.Tuple("S", na.value)]))(z.map(N.functorParserT(u.functorIdentity))(E.create)(a));

  var ya = function ya(T) {
    T = G.show(G.showInt)(v.abs(v.ordInt)(F.ringInt)(T));
    var ua = I.length(T);
    return 1 === ua ? "0" + T : 2 === ua ? T : I.drop(ua - 2 | 0)(T);
  };

  p = p.some(N.alternativeParserT(u.monadIdentity))(N.lazyParserT)(f);

  var Fa = w.runP(J.stringLikeString)(p),
      Ba = function Ba(T) {
    return 0 === T ? 12 : T;
  },
      Na = function Na(T) {
    return function (ua) {
      if (ua instanceof Q) return qa(l.fromEnum(e.boundedEnumYear)(b.year(T.value0)));
      if (ua instanceof q) return ya(l.fromEnum(e.boundedEnumYear)(b.year(T.value0)));
      if (ua instanceof U) return G.show(G.showInt)(l.fromEnum(e.boundedEnumYear)(b.year(T.value0)));
      if (ua instanceof da) return G.show(e.showMonth)(b.month(T.value0));
      if (ua instanceof R) return Y(b.month(T.value0));
      if (ua instanceof V) return ka(l.fromEnum(e.boundedEnumMonth)(b.month(T.value0)));
      if (ua instanceof ba) return ka(l.fromEnum(e.boundedEnumDay)(b.day(T.value0)));
      if (ua instanceof fa) return G.show(G.showInt)(l.fromEnum(e.boundedEnumDay)(b.day(T.value0)));
      if (ua instanceof ca) return G.show(G.showInt)(t.floor(A.unwrap(X.newtypeMilliseconds)(d.unInstant(d.fromDateTime(T))) / 1E3));
      if (ua instanceof ia) return G.show(G.showInt)(l.fromEnum(e.boundedEnumWeekday)(b.weekday(T.value0)));
      if (ua instanceof Z) return G.show(e.showWeekday)(b.weekday(T.value0));
      if (ua instanceof ea) return I.take(3)(G.show(e.showWeekday)(b.weekday(T.value0)));
      if (ua instanceof ta) return ka(l.fromEnum(K.boundedEnumHour)(B.hour(T.value1)));
      if (ua instanceof M) return ka(Ba(m.mod(m.euclideanRingInt)(l.fromEnum(K.boundedEnumHour)(B.hour(T.value1)))(12)));
      if (ua instanceof W) return 12 <= l.fromEnum(K.boundedEnumHour)(B.hour(T.value1)) ? "PM" : "AM";
      if (ua instanceof C) return G.show(G.showInt)(l.fromEnum(K.boundedEnumMinute)(B.minute(T.value1)));
      if (ua instanceof S) return ka(l.fromEnum(K.boundedEnumMinute)(B.minute(T.value1)));
      if (ua instanceof P) return G.show(G.showInt)(l.fromEnum(K.boundedEnumSecond)(B.second(T.value1)));
      if (ua instanceof L) return ka(l.fromEnum(K.boundedEnumSecond)(B.second(T.value1)));
      if (ua instanceof la) return sa(l.fromEnum(K.boundedEnumMillisecond)(B.millisecond(T.value1)));
      if (ua instanceof na) return G.show(G.showInt)(function (Ia) {
        return m.div(m.euclideanRingInt)(Ia)(100);
      }(l.fromEnum(K.boundedEnumMillisecond)(B.millisecond(T.value1))));
      if (ua instanceof ja) return ka(function (Ia) {
        return m.div(m.euclideanRingInt)(Ia)(10);
      }(l.fromEnum(K.boundedEnumMillisecond)(B.millisecond(T.value1))));
      if (ua instanceof E) return ua.value0;
      throw Error("Failed pattern match at Data.Formatter.DateTime (line 167, column 38 - line 190, column 20): " + [ua.constructor.name]);
    };
  },
      La = function La(T) {
    return function (ua) {
      return r.foldMap(y.foldableList)(x.monoidString)(Na(ua))(T);
    };
  };

  c.formatDateTime = function (T) {
    return function (ua) {
      return z.mapFlipped(n.functorEither)(Fa(T))(function (Ia) {
        return La(Ia)(ua);
      });
    };
  };
})(PS);

(function (a) {
  a.runFn2 = function (c) {
    return function (f) {
      return function (k) {
        return c(f, k);
      };
    };
  };

  a.runFn4 = function (c) {
    return function (f) {
      return function (k) {
        return function (g) {
          return function (b) {
            return c(f, k, g, b);
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
    function g(b) {
      this.value0 = b;
    }

    g.create = function (b) {
      return new g(b);
    };

    return g;
  }(),
      f = function () {
    function g(b) {
      this.value0 = b;
    }

    g.create = function (b) {
      return new g(b);
    };

    return g;
  }(),
      k = function () {
    function g() {}

    g.value = new g();
    return g;
  }();

  a.Generic = function (g, b) {
    this.from = g;
    this.to = b;
  };

  a.to = function (g) {
    return g.to;
  };

  a.from = function (g) {
    return g.from;
  };

  a.NoArguments = k;
  a.Inl = c;
  a.Inr = f;

  a.Constructor = function (g) {
    return g;
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Bounded"] = a["Data.Generic.Rep.Bounded"] || {};

  var c = a["Data.Generic.Rep.Bounded"],
      f = a["Data.Generic.Rep"],
      k = function k(n) {
    this["genericTop'"] = n;
  },
      g = function g(n) {
    this["genericBottom'"] = n;
  };

  a = new k(f.NoArguments.value);

  var b = function b(n) {
    return n["genericTop'"];
  },
      e = new g(f.NoArguments.value),
      d = function d(n) {
    return n["genericBottom'"];
  };

  c["genericBottom'"] = d;

  c.genericBottom = function (n) {
    return function (l) {
      return f.to(n)(d(l));
    };
  };

  c["genericTop'"] = b;

  c.genericTop = function (n) {
    return function (l) {
      return f.to(n)(b(l));
    };
  };

  c.genericBottomNoArguments = e;

  c.genericBottomSum = function (n) {
    return new g(new f.Inl(d(n)));
  };

  c.genericBottomConstructor = function (n) {
    return new g(d(n));
  };

  c.genericTopNoArguments = a;

  c.genericTopSum = function (n) {
    return new k(new f.Inr(b(n)));
  };

  c.genericTopConstructor = function (n) {
    return new k(b(n));
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
      n = a["Data.Newtype"],
      l = function l(y, x) {
    this["genericPred'"] = y;
    this["genericSucc'"] = x;
  },
      m = function m(y, x, A) {
    this["genericCardinality'"] = y;
    this["genericFromEnum'"] = x;
    this["genericToEnum'"] = A;
  },
      r = function r(y) {
    return y["genericToEnum'"];
  },
      w = function w(y) {
    return y["genericSucc'"];
  },
      z = function z(y) {
    return y["genericPred'"];
  },
      u = function u(y) {
    return y["genericFromEnum'"];
  };

  a = new l(function (y) {
    return d.Nothing.value;
  }, function (y) {
    return d.Nothing.value;
  });

  var t = function t(y) {
    return y["genericCardinality'"];
  },
      p = new m(1, function (y) {
    return 0;
  }, function (y) {
    return 0 === y ? new d.Just(b.NoArguments.value) : d.Nothing.value;
  });

  c.genericPred = function (y) {
    return function (x) {
      var A = g.map(d.functorMaybe)(b.to(y)),
          v = z(x),
          F = b.from(y);
      return function (G) {
        return A(v(F(G)));
      };
    };
  };

  c.genericSucc = function (y) {
    return function (x) {
      var A = g.map(d.functorMaybe)(b.to(y)),
          v = w(x),
          F = b.from(y);
      return function (G) {
        return A(v(F(G)));
      };
    };
  };

  c.genericCardinality = function (y) {
    return function (x) {
      return n.unwrap(k.newtypeCardinality)(t(x));
    };
  };

  c.genericToEnum = function (y) {
    return function (x) {
      var A = g.map(d.functorMaybe)(b.to(y)),
          v = r(x);
      return function (F) {
        return A(v(F));
      };
    };
  };

  c.genericFromEnum = function (y) {
    return function (x) {
      var A = u(x),
          v = b.from(y);
      return function (F) {
        return A(v(F));
      };
    };
  };

  c.genericEnumNoArguments = a;

  c.genericEnumConstructor = function (y) {
    return new l(function (x) {
      return g.map(d.functorMaybe)(b.Constructor)(z(y)(x));
    }, function (x) {
      return g.map(d.functorMaybe)(b.Constructor)(w(y)(x));
    });
  };

  c.genericEnumSum = function (y) {
    return function (x) {
      return function (A) {
        return function (v) {
          return new l(function (F) {
            if (F instanceof b.Inl) return g.map(d.functorMaybe)(b.Inl.create)(z(y)(F.value0));

            if (F instanceof b.Inr) {
              F = z(A)(F.value0);
              if (F instanceof d.Nothing) return new d.Just(new b.Inl(e["genericTop'"](x)));
              if (F instanceof d.Just) return new d.Just(new b.Inr(F.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 30, column 14 - line 32, column 31): " + [F.constructor.name]);
            }

            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 28, column 18 - line 32, column 31): " + [F.constructor.name]);
          }, function (F) {
            if (F instanceof b.Inl) {
              F = w(y)(F.value0);
              if (F instanceof d.Nothing) return new d.Just(new b.Inr(e["genericBottom'"](v)));
              if (F instanceof d.Just) return new d.Just(new b.Inl(F.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 34, column 14 - line 36, column 31): " + [F.constructor.name]);
            }

            if (F instanceof b.Inr) return g.map(d.functorMaybe)(b.Inr.create)(w(A)(F.value0));
            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 33, column 18 - line 37, column 36): " + [F.constructor.name]);
          });
        };
      };
    };
  };

  c.genericBoundedEnumNoArguments = p;

  c.genericBoundedEnumConstructor = function (y) {
    return new m(n.unwrap(k.newtypeCardinality)(t(y)), function (x) {
      return u(y)(x);
    }, function (x) {
      return g.map(d.functorMaybe)(b.Constructor)(r(y)(x));
    });
  };

  c.genericBoundedEnumSum = function (y) {
    return function (x) {
      return new m(k.Cardinality(n.unwrap(k.newtypeCardinality)(t(y)) + n.unwrap(k.newtypeCardinality)(t(x)) | 0), function (A) {
        if (A instanceof b.Inl) return u(y)(A.value0);
        if (A instanceof b.Inr) return u(x)(A.value0) + n.unwrap(k.newtypeCardinality)(t(y)) | 0;
        throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 87, column 22 - line 89, column 80): " + [A.constructor.name]);
      }, function (A) {
        var v = t(y);
        if (0 <= A && A < v) A = g.map(d.functorMaybe)(b.Inl.create)(r(y)(A));else if (f.otherwise) A = g.map(d.functorMaybe)(b.Inr.create)(r(x)(A - v | 0));else throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 83, column 5 - line 83, column 43): " + [v.constructor.name]);
        return A;
      });
    };
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Eq"] = a["Data.Generic.Rep.Eq"] || {};

  var c = a["Data.Generic.Rep.Eq"],
      f = a["Data.Generic.Rep"],
      k = function k(g) {
    this["genericEq'"] = g;
  };

  a = new k(function (g) {
    return function (b) {
      return !0;
    };
  });

  c.genericEq = function (g) {
    return function (b) {
      return function (e) {
        return function (d) {
          return (0, b["genericEq'"])(f.from(g)(e))(f.from(g)(d));
        };
      };
    };
  };

  c.genericEqNoArguments = a;

  c.genericEqSum = function (g) {
    return function (b) {
      return new k(function (e) {
        return function (d) {
          return e instanceof f.Inl && d instanceof f.Inl ? (0, g["genericEq'"])(e.value0)(d.value0) : e instanceof f.Inr && d instanceof f.Inr ? (0, b["genericEq'"])(e.value0)(d.value0) : !1;
        };
      });
    };
  };

  c.genericEqConstructor = function (g) {
    return new k(function (b) {
      return function (e) {
        return (0, g["genericEq'"])(b)(e);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Ord"] = a["Data.Generic.Rep.Ord"] || {};

  var c = a["Data.Generic.Rep.Ord"],
      f = a["Data.Generic.Rep"],
      k = a["Data.Ordering"],
      g = function g(e) {
    this["genericCompare'"] = e;
  };

  a = new g(function (e) {
    return function (d) {
      return k.EQ.value;
    };
  });

  var b = function b(e) {
    return e["genericCompare'"];
  };

  c.genericCompare = function (e) {
    return function (d) {
      return function (n) {
        return function (l) {
          return b(d)(f.from(e)(n))(f.from(e)(l));
        };
      };
    };
  };

  c.genericOrdNoArguments = a;

  c.genericOrdSum = function (e) {
    return function (d) {
      return new g(function (n) {
        return function (l) {
          if (n instanceof f.Inl && l instanceof f.Inl) return b(e)(n.value0)(l.value0);
          if (n instanceof f.Inr && l instanceof f.Inr) return b(d)(n.value0)(l.value0);
          if (n instanceof f.Inl && l instanceof f.Inr) return k.LT.value;
          if (n instanceof f.Inr && l instanceof f.Inl) return k.GT.value;
          throw Error("Failed pattern match at Data.Generic.Rep.Ord (line 19, column 1 - line 23, column 41): " + [n.constructor.name, l.constructor.name]);
        };
      });
    };
  };

  c.genericOrdConstructor = function (e) {
    return new g(function (d) {
      return function (n) {
        return b(e)(d)(n);
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
      n = function n(m) {
    this.genericShowArgs = m;
  },
      l = function l(m) {
    this["genericShow'"] = m;
  };

  a = new n(function (m) {
    return [];
  });

  c.genericShow = function (m) {
    return function (r) {
      return function (w) {
        return (0, r["genericShow'"])(k.from(m)(w));
      };
    };
  };

  c.genericShowArgsNoArguments = a;

  c.genericShowSum = function (m) {
    return function (r) {
      return new l(function (w) {
        if (w instanceof k.Inl) return (0, m["genericShow'"])(w.value0);
        if (w instanceof k.Inr) return (0, r["genericShow'"])(w.value0);
        throw Error("Failed pattern match at Data.Generic.Rep.Show (line 26, column 1 - line 28, column 40): " + [w.constructor.name]);
      });
    };
  };

  c.genericShowConstructor = function (m) {
    return function (r) {
      return new l(function (w) {
        var z = d.reflectSymbol(r)(d.SProxy.value);
        w = (0, m.genericShowArgs)(w);
        return 0 === w.length ? z : "(" + (f.intercalate(f.foldableArray)(g.monoidString)(" ")(b.append(b.semigroupArray)([z])(w)) + ")");
      });
    };
  };

  c.genericShowArgsArgument = function (m) {
    return new n(function (r) {
      return [e.show(m)(r)];
    });
  };
})(PS);

(function (a) {
  a["Data.Lens.Internal.Wander"] = a["Data.Lens.Internal.Wander"] || {};

  a["Data.Lens.Internal.Wander"].Wander = function (c, f, k) {
    this.Choice1 = c;
    this.Strong0 = f;
    this.wander = k;
  };
})(PS);

(function (a) {
  a["Data.Profunctor"] = a["Data.Profunctor"] || {};
  var c = a["Data.Profunctor"],
      f = a["Control.Category"];

  a = function a(g) {
    this.dimap = g;
  };

  var k = new a(function (g) {
    return function (b) {
      return function (e) {
        return function (d) {
          return b(e(g(d)));
        };
      };
    };
  });

  c.dimap = function (g) {
    return g.dimap;
  };

  c.Profunctor = a;

  c.rmap = function (g) {
    return function (b) {
      return (0, g.dimap)(f.identity(f.categoryFn))(b);
    };
  };

  c.profunctorFn = k;
})(PS);

(function (a) {
  a["Data.Profunctor.Choice"] = a["Data.Profunctor.Choice"] || {};
  a = a["Data.Profunctor.Choice"];

  a.right = function (c) {
    return c.right;
  };

  a.Choice = function (c, f, k) {
    this.Profunctor0 = c;
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
      e = function e(n, l, m) {
    this.Profunctor0 = n;
    this.first = l;
    this.second = m;
  };

  a = new e(function () {
    return g.profunctorFn;
  }, function (n) {
    return function (l) {
      return new b.Tuple(n(l.value0), l.value1);
    };
  }, a["Data.Functor"].map(b.functorTuple));

  var d = function d(n) {
    return function (l) {
      return function (m) {
        return function (r) {
          return k.composeFlipped(n.Semigroupoid0())((0, l.first)(m))((0, l.second)(r));
        };
      };
    };
  };

  c.first = function (n) {
    return n.first;
  };

  c.second = function (n) {
    return n.second;
  };

  c.Strong = e;

  c.fanout = function (n) {
    return function (l) {
      return function (m) {
        return function (r) {
          var w = g.dimap(l.Profunctor0())(f.identity(f.categoryFn))(function (z) {
            return new b.Tuple(z, z);
          })(f.identity(n));
          return k.composeFlipped(n.Semigroupoid0())(w)(d(n)(l)(m)(r));
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
      n = a["Data.Profunctor.Choice"],
      l = a["Data.Profunctor.Strong"],
      m = a["Data.Tuple"],
      r = function r(t) {
    return t;
  },
      w = new a["Data.Profunctor"].Profunctor(function (t) {
    return function (p) {
      return function (y) {
        return function (x) {
          return y(t(x));
        };
      };
    };
  }),
      z = new l.Strong(function () {
    return w;
  }, function (t) {
    return function (p) {
      return t(m.fst(p));
    };
  }, function (t) {
    return function (p) {
      return t(m.snd(p));
    };
  });

  a = new d.Newtype(function (t) {
    return t;
  }, r);

  var u = function u(t) {
    return new n.Choice(function () {
      return w;
    }, function (p) {
      return k.either(p)(e.mempty(e.monoidFn(t)));
    }, function (p) {
      return k.either(e.mempty(e.monoidFn(t)))(p);
    });
  };

  c.Forget = r;
  c.newtypeForget = a;
  c.strongForget = z;

  c.wanderForget = function (t) {
    return new b.Wander(function () {
      return u(t);
    }, function () {
      return z;
    }, function (p) {
      return function (y) {
        return d.alaF(g.functorFn)(g.functorFn)(f.newtypeConst)(f.newtypeConst)(f.Const)(p(f.applicativeConst(t)))(y);
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
      b = function b(d) {
    return d;
  },
      e = new a["Data.Semigroup"].Semigroup(function (d) {
    return function (n) {
      return d instanceof f.Just ? d : n;
    };
  });

  a = new g.Newtype(function (d) {
    return d;
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

  c.preview = function (d) {
    var n = b.unwrap(g.newtypeFirst),
        l = e(d)(function (m) {
      return g.First(k.Just.create(m));
    });
    return function (m) {
      return n(l(m));
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Getter"] = a["Data.Lens.Getter"] || {};
  var c = a["Control.Category"],
      f = a["Data.Lens.Internal.Forget"],
      k = a["Data.Newtype"];

  a["Data.Lens.Getter"].view = function (g) {
    return k.unwrap(f.newtypeForget)(g(c.identity(c.categoryFn)));
  };
})(PS);

(function (a) {
  a["Data.Lens.Iso"] = a["Data.Lens.Iso"] || {};
  var c = a["Data.Profunctor"];

  a["Data.Lens.Iso"].iso = function (f) {
    return function (k) {
      return function (g) {
        return function (b) {
          return c.dimap(g)(f)(k)(b);
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Iso.Newtype"] = a["Data.Lens.Iso.Newtype"] || {};
  var c = a["Data.Lens.Iso"],
      f = a["Data.Newtype"];

  a["Data.Lens.Iso.Newtype"]._Newtype = function (k) {
    return function (g) {
      return function (b) {
        return c.iso(f.unwrap(k))(f.wrap(g))(b);
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Lens"] = a["Data.Lens.Lens"] || {};

  var c = a["Data.Profunctor"],
      f = a["Data.Profunctor.Strong"],
      k = a["Data.Tuple"],
      g = function g(b) {
    return function (e) {
      return function (d) {
        return c.dimap(e.Profunctor0())(b)(function (n) {
          return n.value1(n.value0);
        })(f.first(e)(d));
      };
    };
  };

  a["Data.Lens.Lens"].lens = function (b) {
    return function (e) {
      return function (d) {
        return g(function (n) {
          return new k.Tuple(b(n), function (l) {
            return e(n)(l);
          });
        })(d);
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
      e = function e(d) {
    return function (n) {
      return function (l) {
        return function (m) {
          return g.dimap(l.Profunctor0())(n)(f.either(c.identity(c.categoryFn))(c.identity(c.categoryFn)))(b.right(l)(g.rmap(l.Profunctor0())(d)(m)));
        };
      };
    };
  };

  a["Data.Lens.Prism"]["prism'"] = function (d) {
    return function (n) {
      return function (l) {
        return e(d)(function (m) {
          return k.maybe(new f.Left(m))(f.Right.create)(n(m));
        })(l);
      };
    };
  };
})(PS);

(function (a) {
  a.Record = a.Record || {};
  var c = a.Record,
      f = a["Data.Symbol"],
      k = a["Record.Unsafe"];

  c.get = function (g) {
    return function (b) {
      return function (e) {
        return function (d) {
          return k.unsafeGet(f.reflectSymbol(g)(e))(d);
        };
      };
    };
  };

  c.set = function (g) {
    return function (b) {
      return function (e) {
        return function (d) {
          return function (n) {
            return function (l) {
              return k.unsafeSet(f.reflectSymbol(g)(d))(n)(l);
            };
          };
        };
      };
    };
  };

  c.insert = function (g) {
    return function (b) {
      return function (e) {
        return function (d) {
          return function (n) {
            return function (l) {
              return k.unsafeSet(f.reflectSymbol(g)(d))(n)(l);
            };
          };
        };
      };
    };
  };

  c["delete"] = function (g) {
    return function (b) {
      return function (e) {
        return function (d) {
          return function (n) {
            return k.unsafeDelete(f.reflectSymbol(g)(d))(n);
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

  a["Data.Lens.Record"].prop = function (g) {
    return function (b) {
      return function (e) {
        return function (d) {
          return function (n) {
            return f.lens(k.get(g)()(d))(c.flip(k.set(g)()()(d)))(n);
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Data.List.NonEmpty"] = a["Data.List.NonEmpty"] || {};
  var c = a["Data.List.NonEmpty"],
      f = a["Data.List.Types"],
      k = a["Data.NonEmpty"];

  a = function () {
    var g = k.singleton(f.plusList);
    return function (b) {
      return f.NonEmptyList(g(b));
    };
  }();

  c.singleton = a;
})(PS);

(function (a) {
  a["Data.Natural"] = a["Data.Natural"] || {};
  a = a["Data.Natural"];

  a.intToNat = function (c) {
    return 0 <= c ? c : 0;
  };

  a.natToInt = function (c) {
    return c;
  };
})(PS);

(function (a) {
  a["Data.String.NonEmpty.Internal"] = a["Data.String.NonEmpty.Internal"] || {};
  var c = a["Data.String.NonEmpty.Internal"],
      f = a["Data.Maybe"],
      k = a["Data.Show"];
  a = new k.Show(function (g) {
    return "(NonEmptyString.unsafeFromString " + (k.show(k.showString)(g) + ")");
  });

  c.fromString = function (g) {
    return "" === g ? f.Nothing.value : new f.Just(g);
  };

  c.toString = function (g) {
    return g;
  };

  c.showNonEmptyString = a;
})(PS);

(function (a) {
  a.endsWith = function (c) {
    return function (f) {
      return f.endsWith(c);
    };
  };

  a.fromCharArray = function (c) {
    return c.join("");
  };

  a.startsWith = function (c) {
    return function (f) {
      return f.startsWith(c);
    };
  };
})(PS["Data.String.Utils"] = PS["Data.String.Utils"] || {});

(function (a) {
  a["Data.String.Utils"] = a["Data.String.Utils"] || {};
  var c = a["Data.String.Utils"];
  a = a["Data.String.Utils"];
  c.endsWith = a.endsWith;
  c.fromCharArray = a.fromCharArray;
  c.startsWith = a.startsWith;
})(PS);

(function (a) {
  a["Data.Variant"] = a["Data.Variant"] || {};
  var c = a["Data.Symbol"];

  a["Data.Variant"].inj = function (f) {
    return function (k) {
      return function (g) {
        return function (b) {
          return {
            type: c.reflectSymbol(k)(g),
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
      k = new function (g, b, e, d, n, l) {
    this.Semigroup0 = g;
    this.at = b;
    this.pathAppend = e;
    this.pathAppendNSx = d;
    this.root = n;
    this.xx = l;
  }(function () {
    return f.semigroupString;
  }, function (g) {
    return "@" + g;
  }, function (g) {
    return function (b) {
      return g === k.root ? k.root + b : g + ("/" + b);
    };
  }, function (g) {
    return function (b) {
      return g === k.root ? k.root + ("x:" + b) : g + ("/x:" + b);
    };
  }, "/", function (g) {
    return "x:" + g;
  });

  c.pathAppend = function (g) {
    return g.pathAppend;
  };

  c.pathAppendNSx = function (g) {
    return g.pathAppendNSx;
  };

  c.at = function (g) {
    return g.at;
  };

  c.xx = function (g) {
    return g.xx;
  };

  c.root = function (g) {
    return g.root;
  };

  c.stringXPath = k;
})(PS);

(function (a) {
  a["Effect.Class.Console"] = a["Effect.Class.Console"] || {};
  var c = a["Effect.Class.Console"],
      f = a["Effect.Class"],
      k = a["Effect.Console"];

  c.log = function (g) {
    var b = f.liftEffect(g);
    return function (e) {
      return b(k.log(e));
    };
  };

  c.logShow = function (g) {
    return function (b) {
      var e = f.liftEffect(g),
          d = k.logShow(b);
      return function (n) {
        return e(d(n));
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
  a.unsafeFromForeign = function (c) {
    return c;
  };

  a.tagOf = function (c) {
    return Object.prototype.toString.call(c).slice(8, -1);
  };
})(PS.Foreign = PS.Foreign || {});

(function (a) {
  a.Foreign = a.Foreign || {};

  var c = a.Foreign,
      f = a.Foreign,
      k = a["Control.Applicative"],
      g = a["Control.Monad.Error.Class"],
      b = a["Control.Monad.Except.Trans"],
      e = a["Data.Boolean"],
      d = a["Data.Identity"],
      n = a["Data.List.NonEmpty"],
      l = a["Data.Show"],
      m = function () {
    function p(y) {
      this.value0 = y;
    }

    p.create = function (y) {
      return new p(y);
    };

    return p;
  }(),
      r = function () {
    function p(y, x) {
      this.value0 = y;
      this.value1 = x;
    }

    p.create = function (y) {
      return function (x) {
        return new p(y, x);
      };
    };

    return p;
  }(),
      w = function () {
    function p(y, x) {
      this.value0 = y;
      this.value1 = x;
    }

    p.create = function (y) {
      return function (x) {
        return new p(y, x);
      };
    };

    return p;
  }(),
      z = function () {
    function p(y, x) {
      this.value0 = y;
      this.value1 = x;
    }

    p.create = function (y) {
      return function (x) {
        return new p(y, x);
      };
    };

    return p;
  }(),
      u = new l.Show(function (p) {
    if (p instanceof m) return "(ForeignError " + (l.show(l.showString)(p.value0) + ")");
    if (p instanceof w) return "(ErrorAtIndex " + (l.show(l.showInt)(p.value0) + (" " + (l.show(u)(p.value1) + ")")));
    if (p instanceof z) return "(ErrorAtProperty " + (l.show(l.showString)(p.value0) + (" " + (l.show(u)(p.value1) + ")")));
    if (p instanceof r) return "(TypeMismatch " + (l.show(l.showString)(p.value0) + (" " + (l.show(l.showString)(p.value1) + ")")));
    throw Error("Failed pattern match at Foreign (line 63, column 1 - line 67, column 89): " + [p.constructor.name]);
  }),
      t = function () {
    var p = g.throwError(b.monadThrowExceptT(d.monadIdentity));
    return function (y) {
      return p(n.singleton(y));
    };
  }();

  a = function (p) {
    return function (y) {
      if (f.tagOf(y) === p) return k.pure(b.applicativeExceptT(d.monadIdentity))(f.unsafeFromForeign(y));
      if (e.otherwise) return t(new r(p, f.tagOf(y)));
      throw Error("Failed pattern match at Foreign (line 106, column 1 - line 106, column 55): " + [p.constructor.name, y.constructor.name]);
    };
  }("String");

  c.readString = a;
  c.showForeignError = u;
})(PS);

(function (a) {
  function c(f) {
    return function (k) {
      var g = [],
          b;

      for (b in k) {
        hasOwnProperty.call(k, b) && g.push(f(b)(k[b]));
      }

      return g;
    };
  }

  a._copyST = function (f) {
    return function () {
      var k = {},
          g;

      for (g in f) {
        hasOwnProperty.call(f, g) && (k[g] = f[g]);
      }

      return k;
    };
  };

  a.empty = {};

  a.runST = function (f) {
    return f();
  };

  a._lookup = function (f, k, g, b) {
    return g in b ? k(b[g]) : f;
  };

  a._lookupST = function (f, k, g, b) {
    return function () {
      return g in b ? k(b[g]) : f;
    };
  };

  a.keys = Object.keys || c(function (f) {
    return function () {
      return f;
    };
  });
})(PS["Foreign.Object"] = PS["Foreign.Object"] || {});

(function (a) {
  a["new"] = function () {
    return {};
  };

  a.poke = function (c) {
    return function (f) {
      return function (k) {
        return function () {
          k[c] = f;
          return k;
        };
      };
    };
  };

  a["delete"] = function (c) {
    return function (f) {
      return function () {
        delete f[c];
        return f;
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
      n = function n(r) {
    return function (w) {
      return f.runST(function () {
        var z = d(w)();
        r(z)();
        return z;
      });
    };
  },
      l = a["Data.Function.Uncurried"].runFn4(f._lookup)(b.Nothing.value)(b.Just.create),
      m = function m(r) {
    return function (w) {
      return n(e.poke(r)(w));
    };
  };

  c.lookup = l;

  c.fromFoldableWith = function (r) {
    return function (w) {
      return function (z) {
        return f.runST(function () {
          var u = e["new"]();
          g.for_(k.applicativeST)(r)(z)(function (t) {
            return function () {
              var p = f._lookupST(t.value1, w(t.value1), t.value0, u)();

              return e.poke(t.value0)(p)(u)();
            };
          })();
          return u;
        });
      };
    };
  };

  c.alter = function (r) {
    return function (w) {
      return function (z) {
        var u = r(l(w)(z));
        if (u instanceof b.Nothing) return n(e["delete"](w))(z);
        if (u instanceof b.Just) return m(w)(u.value0)(z);
        throw Error("Failed pattern match at Foreign.Object (line 206, column 15 - line 208, column 25): " + [u.constructor.name]);
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
    function d() {}

    d.value = new d();
    return d;
  }();

  var b = function () {
    function d(n) {
      this.value0 = n;
    }

    d.create = function (n) {
      return new d(n);
    };

    return d;
  }(),
      e = function () {
    function d(n) {
      this.value0 = n;
    }

    d.create = function (n) {
      return new d(n);
    };

    return d;
  }();

  c.NotValidated = a;
  c.Error = b;

  c.fromEither = function (d) {
    if (d instanceof f.Left) return new b(d.value0);
    if (d instanceof f.Right) return new e(d.value0);
    throw Error("Failed pattern match at Formless.Data.FormFieldResult (line 44, column 14 - line 46, column 23): " + [d.constructor.name]);
  };

  c.toMaybe = function (d) {
    return d instanceof e ? new g.Just(d.value0) : g.Nothing.value;
  };

  c._Error = function (d) {
    return k["prism'"](b.create)(function (n) {
      return n instanceof b ? new g.Just(n.value0) : g.Nothing.value;
    })(d);
  };
})(PS);

(function (a) {
  a["Formless.Types.Form"] = a["Formless.Types.Form"] || {};
  var c = a["Formless.Types.Form"],
      f = a["Data.Newtype"];

  a = function a(n) {
    return n;
  };

  var k = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      g = function g(n) {
    return n;
  },
      b = new f.Newtype(function (n) {
    return n;
  }, a),
      e = new f.Newtype(function (n) {
    return n;
  }, function (n) {
    return n;
  }),
      d = new f.Newtype(function (n) {
    return n;
  }, function (n) {
    return n;
  });

  f = new f.Newtype(function (n) {
    return n;
  }, g);
  c.FormProxy = k;
  c.OutputField = a;
  c.FormField = g;
  c.newtypeInputField = d;

  c.eqInputField = function (n) {
    return n;
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
      e = new b.Newtype(function (d) {
    return d;
  }, function (d) {
    return d;
  });

  c.runValidation = function (d) {
    return b.unwrap(e);
  };

  c.hoistFn_ = function (d) {
    return function (n) {
      return g["const"](function () {
        var l = f.pure(d.Applicative0()),
            m = f.pure(k.applicativeEither);
        return function (r) {
          return l(m(n(r)));
        };
      }());
    };
  };

  c.hoistFnE = function (d) {
    return function (n) {
      return function (l) {
        var m = f.pure(d.Applicative0()),
            r = n(l);
        return function (w) {
          return m(r(w));
        };
      };
    };
  };

  c.hoistFnE_ = function (d) {
    return function (n) {
      return g["const"](function () {
        var l = f.pure(d.Applicative0());
        return function (m) {
          return l(n(m));
        };
      }());
    };
  };

  c.newtypeValidation = e;
})(PS);

(function (a) {
  a.copyRecord = function (c) {
    var f = {},
        k;

    for (k in c) {
      ({}).hasOwnProperty.call(c, k) && (f[k] = c[k]);
    }

    return f;
  };

  a.unsafeInsert = function (c) {
    return function (f) {
      return function (k) {
        k[c] = f;
        return k;
      };
    };
  };

  a.unsafeModify = function (c) {
    return function (f) {
      return function (k) {
        k[c] = f(k[c]);
        return k;
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

  c.build = function (b) {
    return function (e) {
      return b(f.copyRecord(e));
    };
  };

  c.insert = function (b) {
    return function (e) {
      return function (d) {
        return function (n) {
          return function (l) {
            return function (m) {
              return f.unsafeInsert(k.reflectSymbol(d)(n))(l)(m);
            };
          };
        };
      };
    };
  };

  c.modify = function (b) {
    return function (e) {
      return function (d) {
        return function (n) {
          return function (l) {
            return function (m) {
              return f.unsafeModify(k.reflectSymbol(d)(n))(l)(m);
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
      n = a["Data.Maybe"],
      l = a["Data.Newtype"],
      m = a["Data.Symbol"],
      r = a["Data.Tuple"],
      w = a["Formless.Data.FormFieldResult"],
      z = a["Formless.Types.Form"],
      u = a["Formless.Validation"],
      t = a.Record,
      p = a["Record.Builder"],
      y = a["Record.Unsafe"],
      x = a["Type.Data.RowList"],
      A = function A(R) {
    this.validateAllBuilder = R;
  },
      v = function v(R) {
    this.setFormFieldsTouchedBuilder = R;
  },
      F = function F(R) {
    this.replaceFormFieldInputsBuilder = R;
  },
      G = function G(R) {
    this.modifyAllBuilder = R;
  },
      I = function I(R) {
    this.inputFieldsToFormFieldsBuilder = R;
  },
      H = function H(R) {
    this.formFieldsToInputFieldsBuilder = R;
  },
      B = function B(R) {
    this.formFieldsToMaybeOutputBuilder = R;
  },
      K = function K(R) {
    this.countErrorsImpl = R;
  },
      X = function X(R) {
    this.allTouchedImpl = R;
  };

  a = new v(function (R) {
    return function (V) {
      return b.identity(p.categoryBuilder);
    };
  });
  var D = new F(function (R) {
    return function (V) {
      return function (ba) {
        return b.identity(p.categoryBuilder);
      };
    };
  }),
      N = new K(function (R) {
    return function (V) {
      return 0;
    };
  }),
      O = new X(function (R) {
    return function (V) {
      return !0;
    };
  }),
      J = new G(function (R) {
    return function (V) {
      return function (ba) {
        return b.identity(p.categoryBuilder);
      };
    };
  }),
      Q = new H(function (R) {
    return function (V) {
      return b.identity(p.categoryBuilder);
    };
  }),
      q = new I(function (R) {
    return function (V) {
      return b.identity(p.categoryBuilder);
    };
  }),
      U = d.flap(d.functorFn)(p.build)({}),
      da = new B(function (R) {
    return function (V) {
      return new n.Just(b.identity(p.categoryBuilder));
    };
  });
  c.fromScratch = U;

  c.allTouched = function (R) {
    return function (V) {
      return function (ba) {
        var fa = (0, V.allTouchedImpl)(x.RLProxy.value),
            ca = l.unwrap(ba);
        return function (ia) {
          return fa(ca(ia));
        };
      };
    };
  };

  c.countErrors = function (R) {
    return function (V) {
      return function (ba) {
        var fa = (0, V.countErrorsImpl)(x.RLProxy.value),
            ca = l.unwrap(ba);
        return function (ia) {
          return fa(ca(ia));
        };
      };
    };
  };

  c.setFormFieldsTouched = function (R) {
    return function (V) {
      return function (ba) {
        return function (fa) {
          fa = (0, V.setFormFieldsTouchedBuilder)(x.RLProxy.value)(l.unwrap(ba)(fa));
          return l.wrap(ba)(U(fa));
        };
      };
    };
  };

  c.formFieldsToInputFields = function (R) {
    return function (V) {
      return function (ba) {
        return function (fa) {
          return function (ca) {
            ca = (0, V.formFieldsToInputFieldsBuilder)(x.RLProxy.value)(l.unwrap(fa)(ca));
            return l.wrap(ba)(U(ca));
          };
        };
      };
    };
  };

  c.inputFieldsToFormFields = function (R) {
    return function (V) {
      return function (ba) {
        return function (fa) {
          return function (ca) {
            ca = (0, V.inputFieldsToFormFieldsBuilder)(x.RLProxy.value)(l.unwrap(ba)(ca));
            return l.wrap(fa)(U(ca));
          };
        };
      };
    };
  };

  c.formFieldsToMaybeOutputFields = function (R) {
    return function (V) {
      return function (ba) {
        return function (fa) {
          return function (ca) {
            ca = (0, fa.formFieldsToMaybeOutputBuilder)(x.RLProxy.value)(l.unwrap(V)(ca));
            return d.map(n.functorMaybe)(l.wrap(ba))(d.map(n.functorMaybe)(U)(ca));
          };
        };
      };
    };
  };

  c.replaceFormFieldInputs = function (R) {
    return function (V) {
      return function (ba) {
        return function (fa) {
          return function (ca) {
            return function (ia) {
              ia = (0, V.replaceFormFieldInputsBuilder)(l.unwrap(ba)(ca))(x.RLProxy.value)(l.unwrap(fa)(ia));
              return l.wrap(fa)(U(ia));
            };
          };
        };
      };
    };
  };

  c.modifyAll = function (R) {
    return function (V) {
      return function (ba) {
        return function (fa) {
          return function (ca) {
            return function (ia) {
              ia = (0, V.modifyAllBuilder)(l.unwrap(ba)(ca))(x.RLProxy.value)(l.unwrap(fa)(ia));
              return l.wrap(fa)(U(ia));
            };
          };
        };
      };
    };
  };

  c.validateAll = function (R) {
    return function (V) {
      return function (ba) {
        return function (fa) {
          return function (ca) {
            return function (ia) {
              return function (Z) {
                Z = (0, ba.validateAllBuilder)(l.unwrap(fa)(ia))(x.RLProxy.value)(l.unwrap(ca)(Z));
                return d.map(V.Bind1().Apply0().Functor0())(l.wrap(ca))(d.map(V.Bind1().Apply0().Functor0())(U)(Z));
              };
            };
          };
        };
      };
    };
  };

  c.unsafeModifyInputVariant = function (R) {
    return function (V) {
      return function (ba) {
        return function (fa) {
          return function (ca) {
            var ia = function () {
              var ea = l.unwrap(R)(fa);
              return new r.Tuple(ea.type, ea.value);
            }(),
                Z = function () {
              var ea = y.unsafeGet(r.fst(ia))(l.unwrap(V)(ca));
              return z.FormField({
                input: l.unwrap(z.newtypeInputFunction)(r.snd(ia))(ea.input),
                touched: ea.touched,
                result: ba(ea.result)
              });
            }();

            return l.wrap(V)(y.unsafeSet(r.fst(ia))(Z)(l.unwrap(V)(ca)));
          };
        };
      };
    };
  };

  c.unsafeRunValidationVariant = function (R) {
    return function (V) {
      return function (ba) {
        return function (fa) {
          return function (ca) {
            return function (ia) {
              return function (Z) {
                var ea = l.unwrap(V)(ca).type;
                return function () {
                  var ta = y.unsafeGet(ea)(l.unwrap(ba)(Z));
                  return g.bind(R.Bind1())(u.runValidation(R)(y.unsafeGet(ea)(l.unwrap(fa)(ia)))(Z)(ta.input))(function (M) {
                    M = y.unsafeSet(ea)(z.FormField({
                      input: ta.input,
                      touched: ta.touched,
                      result: w.fromEither(M)
                    }))(l.unwrap(ba)(Z));
                    return f.pure(R.Applicative0())(l.wrap(ba)(M));
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

  c.setFormFieldsTouchedCons = function (R) {
    return function (V) {
      return function (ba) {
        return function (fa) {
          return new v(function (ca) {
            return function (ia) {
              var Z = (0, ba.setFormFieldsTouchedBuilder)(x.RLProxy.value)(ia);
              ia = l.over(z.newtypeFormField)(z.newtypeFormField)(z.FormField)(function (ea) {
                return {
                  touched: !0,
                  input: ea.input,
                  result: ea.result
                };
              })(t.get(R)()(m.SProxy.value)(ia));
              ia = p.insert()()(R)(m.SProxy.value)(ia);
              return e.compose(p.semigroupoidBuilder)(ia)(Z);
            };
          });
        };
      };
    };
  };

  c.inputFieldsToInputNil = Q;

  c.inputFieldsToInputCons = function (R) {
    return function (V) {
      return function (ba) {
        return function (fa) {
          return new H(function (ca) {
            return function (ia) {
              var Z = (0, ba.formFieldsToInputFieldsBuilder)(x.RLProxy.value)(ia);
              ia = t.get(R)()(m.SProxy.value)(ia).input;
              ia = p.insert()()(R)(m.SProxy.value)(ia);
              return e.compose(p.semigroupoidBuilder)(ia)(Z);
            };
          });
        };
      };
    };
  };

  c.inputFieldsToFormFieldsNil = q;

  c.inputFieldsToFormFieldsCons = function (R) {
    return function (V) {
      return function (ba) {
        return function (fa) {
          return new I(function (ca) {
            return function (ia) {
              var Z = (0, ba.inputFieldsToFormFieldsBuilder)(x.RLProxy.value)(ia);
              ia = {
                input: t.get(R)()(m.SProxy.value)(ia),
                touched: !1,
                result: w.NotValidated.value
              };
              ia = p.insert()()(R)(m.SProxy.value)(ia);
              return e.compose(p.semigroupoidBuilder)(ia)(Z);
            };
          });
        };
      };
    };
  };

  c.formFieldsToMaybeOutputNil = da;

  c.formFieldsToMaybeOutputCons = function (R) {
    return function (V) {
      return function (ba) {
        return function (fa) {
          return new B(function (ca) {
            return function (ia) {
              var Z = (0, ba.formFieldsToMaybeOutputBuilder)(x.RLProxy.value)(ia);
              ia = d.map(n.functorMaybe)(z.OutputField)(w.toMaybe(l.unwrap(z.newtypeFormField)(t.get(R)()(m.SProxy.value)(ia)).result));
              return k.apply(n.applyMaybe)(d.map(n.functorMaybe)(function (ea) {
                return function (ta) {
                  return e.compose(p.semigroupoidBuilder)(p.insert()()(R)(m.SProxy.value)(ea))(ta);
                };
              })(ia))(Z);
            };
          });
        };
      };
    };
  };

  c.nilCountErrors = N;

  c.consCountErrors = function (R) {
    return function (V) {
      return function (ba) {
        return new K(function (fa) {
          return function (ca) {
            var ia = l.unwrap(z.newtypeFormField)(t.get(R)()(m.SProxy.value)(ca)).result instanceof w.Error ? 1 : 0;
            return ia + (0, ba.countErrorsImpl)(x.RLProxy.value)(ca) | 0;
          };
        });
      };
    };
  };

  c.nilAllTouched = O;

  c.consAllTouched = function (R) {
    return function (V) {
      return function (ba) {
        return new X(function (fa) {
          return function (ca) {
            return l.unwrap(z.newtypeFormField)(t.get(R)()(m.SProxy.value)(ca)).touched ? (0, ba.allTouchedImpl)(x.RLProxy.value)(ca) : !1;
          };
        });
      };
    };
  };

  c.applyToValidationNil = function (R) {
    return new A(function (V) {
      return function (ba) {
        return function (fa) {
          return f.pure(R.Applicative0())(b.identity(p.categoryBuilder));
        };
      };
    });
  };

  c.applyToValidationCons = function (R) {
    return function (V) {
      return function (ba) {
        return function (fa) {
          return function (ca) {
            return function (ia) {
              return function (Z) {
                return new A(function (ea) {
                  return function (ta) {
                    return function (M) {
                      var W = (0, Z.validateAllBuilder)(ea)(x.RLProxy.value)(M),
                          C = function () {
                        var S = l.unwrap(u.newtypeValidation)(t.get(R)()(m.SProxy.value)(ea)),
                            P = l.unwrap(z.newtypeFormField)(t.get(R)()(m.SProxy.value)(M));
                        return g.bind(V.Bind1())(S(l.wrap(fa)(M))(P.input))(function (L) {
                          var la = f.pure(V.Applicative0()),
                              na = l.wrap(z.newtypeFormField),
                              ja = {},
                              E;

                          for (E in P) {
                            ({}).hasOwnProperty.call(P, E) && (ja[E] = P[E]);
                          }

                          ja.result = w.fromEither(L);
                          return la(na(ja));
                        });
                      }();

                      return k.apply(V.Bind1().Apply0())(d.map(V.Bind1().Apply0().Functor0())(function (S) {
                        return function (P) {
                          return e.compose(p.semigroupoidBuilder)(p.insert()()(R)(m.SProxy.value)(S))(P);
                        };
                      })(C))(W);
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

  c.modifyAllNil = J;

  c.modifyAllCons = function (R) {
    return function (V) {
      return function (ba) {
        return function (fa) {
          return function (ca) {
            return function (ia) {
              return function (Z) {
                return new G(function (ea) {
                  return function (ta) {
                    return function (M) {
                      var W = (0, Z.modifyAllBuilder)(ea)(x.RLProxy.value)(M),
                          C = l.unwrap(V)(t.get(R)()(m.SProxy.value)(ea));
                      M = t.get(R)()(m.SProxy.value)(M);
                      M = p.insert()()(R)(m.SProxy.value)(l.over(ba)(ba)(z.FormField)(function (S) {
                        return {
                          input: C(S.input),
                          result: S.result,
                          touched: S.touched
                        };
                      })(M));
                      return e.compose(p.semigroupoidBuilder)(M)(W);
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

  c.replaceFormFieldInputsTouchedNil = D;

  c.replaceFormFieldInputsTouchedCons = function (R) {
    return function (V) {
      return function (ba) {
        return function (fa) {
          return function (ca) {
            return function (ia) {
              return function (Z) {
                return new F(function (ea) {
                  return function (ta) {
                    return function (M) {
                      var W = (0, Z.replaceFormFieldInputsBuilder)(ea)(x.RLProxy.value)(M);
                      l.unwrap(ba)(t.get(R)()(m.SProxy.value)(M));
                      M = t.get(R)()(m.SProxy.value)(ea);
                      M = p.insert()()(R)(m.SProxy.value)(z.FormField({
                        input: l.unwrap(V)(M),
                        touched: !1,
                        result: w.NotValidated.value
                      }));
                      return e.compose(p.semigroupoidBuilder)(M)(W);
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
    function x() {}

    x.value = new x();
    return x;
  }(),
      b = function () {
    function x() {}

    x.value = new x();
    return x;
  }(),
      e = function () {
    function x() {}

    x.value = new x();
    return x;
  }();

  a = function () {
    function x(A) {
      this.value0 = A;
    }

    x.create = function (A) {
      return new x(A);
    };

    return x;
  }();

  var d = function () {
    function x(A) {
      this.value0 = A;
    }

    x.create = function (A) {
      return new x(A);
    };

    return x;
  }(),
      n = function () {
    function x(A, v) {
      this.value0 = A;
      this.value1 = v;
    }

    x.create = function (A) {
      return function (v) {
        return new x(A, v);
      };
    };

    return x;
  }(),
      l = function () {
    function x(A) {
      this.value0 = A;
    }

    x.create = function (A) {
      return new x(A);
    };

    return x;
  }(),
      m = function () {
    function x(A) {
      this.value0 = A;
    }

    x.create = function (A) {
      return new x(A);
    };

    return x;
  }(),
      r = function () {
    function x(A) {
      this.value0 = A;
    }

    x.create = function (A) {
      return new x(A);
    };

    return x;
  }(),
      w = function () {
    function x() {}

    x.value = new x();
    return x;
  }(),
      z = function () {
    function x() {}

    x.value = new x();
    return x;
  }(),
      u = function () {
    function x() {}

    x.value = new x();
    return x;
  }(),
      t = function () {
    function x(A) {
      this.value0 = A;
    }

    x.create = function (A) {
      return new x(A);
    };

    return x;
  }(),
      p = function () {
    function x(A, v) {
      this.value0 = A;
      this.value1 = v;
    }

    x.create = function (A) {
      return function (v) {
        return new x(A, v);
      };
    };

    return x;
  }(),
      y = function y(x) {
    return x;
  };

  k = new k.Newtype(function (x) {
    return x;
  }, y);
  f = new f.Eq(function (x) {
    return function (A) {
      return x instanceof g && A instanceof g || x instanceof b && A instanceof b || x instanceof e && A instanceof e ? !0 : !1;
    };
  });
  c.Modify = a;
  c.Validate = d;
  c.ModifyValidate = n;
  c.Reset = l;
  c.SetAll = m;
  c.ModifyAll = r;
  c.ResetAll = w;
  c.ValidateAll = z;
  c.Submit = u;
  c.LoadForm = t;
  c.AndThen = p;
  c.InternalState = y;
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
      n = a["Formless.Internal.Transform"],
      l = a["Formless.Types.Query"],
      m = function m(r) {
    return function (w) {
      return function (z) {
        return function (u) {
          return function (t) {
            return function (p) {
              return function (y) {
                return function (x) {
                  return function (A) {
                    return function (v) {
                      return function (F) {
                        return function (G) {
                          return function (I) {
                            return function (H) {
                              return function (B) {
                                return function (K) {
                                  return function (X) {
                                    return function (D) {
                                      return function (N) {
                                        return function (O) {
                                          return function (J) {
                                            return function (Q) {
                                              return function (q) {
                                                var U = function U(V) {
                                                  var ba = n.countErrors()(p)(B)(V.form),
                                                      fa = !b.eq(b.eqRec()(z))(d.unwrap(I)(n.formFieldsToInputFields()(t)(I)(B)(V.form)))(d.unwrap(I)(d.unwrap(l.newtypeInternalState)(V.internal).initialInputs));
                                                  return c.pure(J.Applicative0())(g.Left.create(function () {
                                                    return d.unwrap(l.newtypeInternalState)(V.internal).allTouched ? {
                                                      validity: 0 !== V.errors ? l.Invalid.value : l.Valid.value,
                                                      errors: ba,
                                                      dirty: fa,
                                                      form: V.form,
                                                      internal: V.internal,
                                                      submitAttempts: V.submitAttempts,
                                                      submitting: V.submitting
                                                    } : n.allTouched()(y)(B)(V.form) ? {
                                                      validity: 0 !== V.errors ? l.Invalid.value : l.Valid.value,
                                                      internal: d.over(l.newtypeInternalState)(l.newtypeInternalState)(l.InternalState)(function (ca) {
                                                        return {
                                                          allTouched: !0,
                                                          initialInputs: ca.initialInputs,
                                                          validators: ca.validators
                                                        };
                                                      })(V.internal),
                                                      errors: ba,
                                                      dirty: fa,
                                                      form: V.form,
                                                      submitAttempts: V.submitAttempts,
                                                      submitting: V.submitting
                                                    } : {
                                                      validity: l.Incomplete.value,
                                                      errors: ba,
                                                      dirty: fa,
                                                      form: V.form,
                                                      internal: V.internal,
                                                      submitAttempts: V.submitAttempts,
                                                      submitting: V.submitting
                                                    };
                                                  }()));
                                                },
                                                    da = function da(V) {
                                                  var ba = {
                                                    submitAttempts: V.submitAttempts + 1 | 0,
                                                    submitting: !0,
                                                    internal: V.internal,
                                                    form: V.form,
                                                    dirty: V.dirty,
                                                    errors: V.errors,
                                                    validity: V.validity
                                                  },
                                                      fa = d.unwrap(l.newtypeInternalState)(ba.internal);

                                                  V = function () {
                                                    return fa.allTouched ? ba : {
                                                      form: n.setFormFieldsTouched()(x)(B)(ba.form),
                                                      internal: d.over(l.newtypeInternalState)(l.newtypeInternalState)(l.InternalState)(function (ca) {
                                                        return {
                                                          allTouched: !0,
                                                          initialInputs: ca.initialInputs,
                                                          validators: ca.validators
                                                        };
                                                      })(ba.internal),
                                                      submitAttempts: ba.submitAttempts,
                                                      submitting: ba.submitting,
                                                      dirty: ba.dirty,
                                                      errors: ba.errors,
                                                      validity: ba.validity
                                                    };
                                                  }();

                                                  return f.bind(J.Bind1())(m()()(z)(u)(t)(p)(y)(x)(A)(v)(F)(G)(I)(H)(B)(K)(X)(D)(N)(O)(J)(l.ValidateAll.value)(V))(function (ca) {
                                                    if (ca instanceof g.Right) return c.pure(J.Applicative0())(new g.Right(ca.value0));

                                                    if (ca instanceof g.Left) {
                                                      var ia = {
                                                        submitting: !1,
                                                        dirty: ca.value0.dirty,
                                                        errors: ca.value0.errors,
                                                        form: ca.value0.form,
                                                        internal: ca.value0.internal,
                                                        submitAttempts: ca.value0.submitAttempts,
                                                        validity: ca.value0.validity
                                                      };
                                                      return c.pure(J.Applicative0())(function () {
                                                        if (b.eq(l.eqValidStatus)(ia.validity)(l.Valid.value)) {
                                                          var Z = n.formFieldsToMaybeOutputFields()(B)(K)(G)(ca.value0.form);
                                                          if (Z instanceof e.Nothing) return new g.Left(ia);
                                                          if (Z instanceof e.Just) return new g.Right(Z.value0);
                                                          throw Error("Failed pattern match at Formless.Component (line 201, column 16 - line 203, column 36): " + [Z.constructor.name]);
                                                        }

                                                        return new g.Left(ia);
                                                      }());
                                                    }

                                                    throw Error("Failed pattern match at Formless.Component (line 192, column 5 - line 204, column 31): " + [ca.constructor.name]);
                                                  });
                                                };

                                                if (Q instanceof l.Modify) return U({
                                                  form: n.unsafeModifyInputVariant(N)(B)(k.identity(k.categoryFn))(Q.value0)(q.form),
                                                  internal: q.internal,
                                                  errors: q.errors,
                                                  dirty: q.dirty,
                                                  validity: q.validity,
                                                  submitAttempts: q.submitAttempts,
                                                  submitting: q.submitting
                                                });
                                                if (Q instanceof l.Validate) return f.bind(J.Bind1())(n.unsafeRunValidationVariant(J)(O)(B)(X)(Q.value0)(d.unwrap(l.newtypeInternalState)(q.internal).validators)(q.form))(function (V) {
                                                  return U({
                                                    form: V,
                                                    internal: q.internal,
                                                    errors: q.errors,
                                                    dirty: q.dirty,
                                                    validity: q.validity,
                                                    submitAttempts: q.submitAttempts,
                                                    submitting: q.submitting
                                                  });
                                                });

                                                if (Q instanceof l.ModifyValidate) {
                                                  da = function da(V) {
                                                    var ba = d.unwrap(l.newtypeInternalState)(V.internal).validators;
                                                    return f.bind(J.Bind1())(n.unsafeRunValidationVariant(J)(O)(B)(X)(Q.value1)(ba)(V.form))(function (fa) {
                                                      return c.pure(J.Applicative0())({
                                                        form: fa,
                                                        internal: V.internal,
                                                        dirty: V.dirty,
                                                        errors: V.errors,
                                                        submitAttempts: V.submitAttempts,
                                                        submitting: V.submitting,
                                                        validity: V.validity
                                                      });
                                                    });
                                                  };

                                                  var R = function R(V) {
                                                    return function (ba) {
                                                      return {
                                                        validity: ba.validity,
                                                        dirty: ba.dirty,
                                                        submitting: ba.submitting,
                                                        errors: ba.errors,
                                                        submitAttempts: ba.submitAttempts,
                                                        form: n.unsafeModifyInputVariant(N)(B)(V)(Q.value1)(ba.form),
                                                        internal: ba.internal
                                                      };
                                                    };
                                                  };

                                                  if (Q.value0 instanceof e.Nothing || Q.value0 instanceof e.Just) return R = R(k.identity(k.categoryFn))(q), f.bind(J.Bind1())(da(R))(function (V) {
                                                    return U(V);
                                                  });
                                                  throw Error("Failed pattern match at Formless.Component (line 67, column 5 - line 81, column 26): " + [Q.value0.constructor.name]);
                                                }

                                                if (Q instanceof l.Reset) return U({
                                                  form: n.unsafeModifyInputVariant(N)(B)(k.identity(k.categoryFn))(Q.value0)(q.form),
                                                  internal: d.over(l.newtypeInternalState)(l.newtypeInternalState)(l.InternalState)(function (V) {
                                                    return {
                                                      allTouched: !1,
                                                      initialInputs: V.initialInputs,
                                                      validators: V.validators
                                                    };
                                                  })(q.internal),
                                                  errors: q.errors,
                                                  dirty: q.dirty,
                                                  validity: q.validity,
                                                  submitAttempts: q.submitAttempts,
                                                  submitting: q.submitting
                                                });
                                                if (Q instanceof l.SetAll) return U({
                                                  form: n.replaceFormFieldInputs()(A)(I)(B)(Q.value0)(q.form),
                                                  internal: q.internal,
                                                  errors: q.errors,
                                                  dirty: q.dirty,
                                                  validity: q.validity,
                                                  submitAttempts: q.submitAttempts,
                                                  submitting: q.submitting
                                                });
                                                if (Q instanceof l.ModifyAll) return U({
                                                  form: n.modifyAll()(v)(H)(B)(Q.value0)(q.form),
                                                  internal: q.internal,
                                                  errors: q.errors,
                                                  dirty: q.dirty,
                                                  validity: q.validity,
                                                  submitAttempts: q.submitAttempts,
                                                  submitting: q.submitting
                                                });
                                                if (Q instanceof l.ValidateAll) return f.bind(J.Bind1())(n.validateAll()(J)(F)(X)(B)(d.unwrap(l.newtypeInternalState)(q.internal).validators)(q.form))(function (V) {
                                                  return U({
                                                    form: V,
                                                    internal: q.internal,
                                                    errors: q.errors,
                                                    dirty: q.dirty,
                                                    validity: q.validity,
                                                    submitAttempts: q.submitAttempts,
                                                    submitting: q.submitting
                                                  });
                                                });
                                                if (Q instanceof l.Submit) return da(q);
                                                if (Q instanceof l.ResetAll) return c.pure(J.Applicative0())(g.Left.create({
                                                  validity: l.Incomplete.value,
                                                  dirty: !1,
                                                  errors: 0,
                                                  submitAttempts: 0,
                                                  submitting: !1,
                                                  form: n.replaceFormFieldInputs()(A)(I)(B)(d.unwrap(l.newtypeInternalState)(q.internal).initialInputs)(q.form),
                                                  internal: d.over(l.newtypeInternalState)(l.newtypeInternalState)(l.InternalState)(function (V) {
                                                    return {
                                                      allTouched: !1,
                                                      initialInputs: V.initialInputs,
                                                      validators: V.validators
                                                    };
                                                  })(q.internal)
                                                }));
                                                if (Q instanceof l.LoadForm) return c.pure(J.Applicative0())(g.Left.create({
                                                  validity: l.Incomplete.value,
                                                  dirty: !1,
                                                  errors: 0,
                                                  submitAttempts: 0,
                                                  submitting: !1,
                                                  form: n.replaceFormFieldInputs()(A)(I)(B)(Q.value0)(q.form),
                                                  internal: d.over(l.newtypeInternalState)(l.newtypeInternalState)(l.InternalState)(function (V) {
                                                    return {
                                                      allTouched: !1,
                                                      initialInputs: Q.value0,
                                                      validators: V.validators
                                                    };
                                                  })(q.internal)
                                                }));
                                                if (Q instanceof l.AndThen) return f.bind(J.Bind1())(m()()(z)(u)(t)(p)(y)(x)(A)(v)(F)(G)(I)(H)(B)(K)(X)(D)(N)(O)(J)(Q.value0)(q))(function (V) {
                                                  if (V instanceof g.Left) return m()()(z)(u)(t)(p)(y)(x)(A)(v)(F)(G)(I)(H)(B)(K)(X)(D)(N)(O)(J)(Q.value1)(V.value0);
                                                  if (V instanceof g.Right) return c.pure(J.Applicative0())(new g.Right(V.value0));
                                                  throw Error("Failed pattern match at Formless.Component (line 136, column 5 - line 138, column 38): " + [V.constructor.name]);
                                                });
                                                throw Error("Failed pattern match at Formless.Component (line 44, column 17 - line 138, column 38): " + [Q.constructor.name]);
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

  c.set = function (n) {
    return function (l) {
      return function (m) {
        return function (r) {
          return function (w) {
            return new d.Modify(g.wrap(l)(b.inj()(n)(r)(g.wrap(e.newtypeInputFunction)(f["const"](w)))));
          };
        };
      };
    };
  };

  c.setValidate = function (n) {
    return function (l) {
      return function (m) {
        return function (r) {
          return function (w) {
            return new d.ModifyValidate(k.Nothing.value, g.wrap(l)(b.inj()(n)(r)(g.wrap(e.newtypeInputFunction)(f["const"](w)))));
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
      n = a["Data.Symbol"],
      l = a["Formless.Data.FormFieldResult"],
      m = a["Formless.Types.Form"],
      r = function r(t) {
    return function (p) {
      return function (y) {
        return function (x) {
          return function (A) {
            var v = b._Newtype(p)(p)(A.Profunctor0()),
                F = e.prop(t)()()(x)(A),
                G = b._Newtype(m.newtypeFormField)(m.newtypeFormField)(A.Profunctor0());

            return function (I) {
              return v(F(G(I)));
            };
          };
        };
      };
    };
  },
      w = function w(t) {
    return function (p) {
      return function (y) {
        return function (x) {
          return function (A) {
            var v = r(t)(p)()(x)(A),
                F = e.prop(new n.IsSymbol(function () {
              return "input";
            }))()()(n.SProxy.value)(A);
            return function (G) {
              return v(F(G));
            };
          };
        };
      };
    };
  },
      z = function z(t) {
    return function (p) {
      return function (y) {
        return function (x) {
          return function (A) {
            var v = r(t)(p)()(x)(A),
                F = e.prop(new n.IsSymbol(function () {
              return "result";
            }))()()(n.SProxy.value)(A);
            return function (G) {
              return v(F(G));
            };
          };
        };
      };
    };
  },
      u = function u(t) {
    return function (p) {
      return function (y) {
        return function (x) {
          return function (A) {
            var v = z(t)(p)()(x)(A.Strong0()),
                F = l._Error(A.Choice1());

            return function (G) {
              return v(F(G));
            };
          };
        };
      };
    };
  };

  c.getInput = function (t) {
    return function (p) {
      return function (y) {
        return function (x) {
          return k.view(w(t)(p)()(x)(g.strongForget));
        };
      };
    };
  };

  c.getError = function (t) {
    return function (p) {
      return function (y) {
        return function (x) {
          return f.preview(u(t)(p)()(x)(g.wanderForget(d.monoidFirst)));
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
      d = function d(m) {
    this.mappingWithIndex = m;
  },
      n = function n(m) {
    this.mapRecordWithIndexBuilder = m;
  },
      l = function l(m) {
    this.hmap = m;
  };

  a = new n(function (m) {
    return function (r) {
      return f.identity(b.categoryBuilder);
    };
  });

  c.hmap = function (m) {
    return m.hmap;
  };

  c.Mapping = function (m) {
    this.mapping = m;
  };

  c.constMapping = function (m) {
    return new d(function (r) {
      return function (w) {
        return (0, m.mapping)(r);
      };
    });
  };

  c.hmapRecord = function (m) {
    return function (r) {
      return new l(function () {
        var w = (0, r.mapRecordWithIndexBuilder)(e.RLProxy.value);
        return function (z) {
          return b.build(w(z));
        };
      }());
    };
  };

  c.mapRecordWithIndexCons = function (m) {
    return function (r) {
      return function (w) {
        return function (z) {
          return function (u) {
            return new n(function (t) {
              return function (p) {
                return k.compose(b.semigroupoidBuilder)(b.modify()()(m)(g.SProxy.value)((0, r.mappingWithIndex)(p)(g.SProxy.value)))((0, w.mapRecordWithIndexBuilder)(e.RLProxy.value)(p));
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
    function e() {}

    e.value = new e();
    return e;
  }(),
      b = function () {
    function e() {}

    e.value = new e();
    return e;
  }();

  c.unwrapOutputFields = function (e) {
    return function (d) {
      var n = k.hmap(d)(b.value),
          l = f.unwrap(e);
      return function (m) {
        return n(l(m));
      };
    };
  };

  c.wrapInputFields = function (e) {
    return function (d) {
      var n = f.wrap(e),
          l = k.hmap(d)(g.value);
      return function (m) {
        return n(l(m));
      };
    };
  };

  c.unwrapField = function (e) {
    return new k.Mapping(function (d) {
      return f.unwrap(e);
    });
  };

  c.wrapField = function (e) {
    return new k.Mapping(function (d) {
      return f.wrap(e);
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
      n = function n(l) {
    this.makeSProxiesBuilder = l;
  };

  a = new n(function (l) {
    return f.identity(e.categoryBuilder);
  });

  c.mkSProxies = function (l) {
    return function (m) {
      return function (r) {
        return function (w) {
          w = (0, r.makeSProxiesBuilder)(d.RLProxy.value);
          return b.fromScratch(w);
        };
      };
    };
  };

  c.makeSProxiesNil = a;

  c.makeSProxiesCons = function (l) {
    return function (m) {
      return function (r) {
        return new n(function (w) {
          w = (0, r.makeSProxiesBuilder)(d.RLProxy.value);
          var z = e.insert()()(l)(g.SProxy.value)(g.SProxy.value);
          return k.compose(e.semigroupoidBuilder)(z)(w);
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

  a["Metajelo.CSS.Common.Util"].cList = function (g) {
    return c.classList(f.map(f.functorArray)(k.Just.create)(g));
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

  a["Metajelo.CSS.UI.Util"].mjUiClass = function (f) {
    return c.className("metajelo-ui_" + f);
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
      n = g.mjUiClass(f.sustainability),
      l = g.mjUiClass(f.superOrg),
      m = g.mjUiClass(f.resourceTypeGen),
      r = g.mjUiClass(f.resourceTypeDescr),
      w = g.mjUiClass(f.resourceType),
      z = g.mjUiClass(f.resourceMDSource),
      u = g.mjUiClass(f.resourceId),
      t = g.mjUiClass(f.relatedIdsHeader),
      p = g.mjUiClass(f.relatedIds),
      y = g.mjUiClass(f.relatedIdList),
      x = g.mjUiClass(f.relatedId),
      A = g.mjUiClass(f.relType),
      v = g.mjUiClass(f.recordId),
      F = g.mjUiClass(f.record),
      G = g.mjUiClass(k.recPreview),
      I = g.mjUiClass(f.pubyear),
      H = g.mjUiClass(f.productsHeader),
      B = g.mjUiClass(f.products),
      K = g.mjUiClass(f.productList),
      X = g.mjUiClass(f.product),
      D = g.mjUiClass(k.prodPreview),
      N = g.mjUiClass(k.previewButtons),
      O = g.mjUiClass(f.policyType),
      J = g.mjUiClass(f.policy),
      Q = g.mjUiClass(k.page),
      q = g.mjUiClass(f.missionStatement),
      U = g.mjUiClass(f.location),
      da = g.mjUiClass(k.locPreview),
      R = g.mjUiClass(f.institutionType),
      V = g.mjUiClass(f.institutionPolicy),
      ba = g.mjUiClass(f.institutionPolicies),
      fa = g.mjUiClass(f.institutionName),
      ca = g.mjUiClass(f.institutionId),
      ia = g.mjUiClass(f.institutionContact),
      Z = g.mjUiClass(f.identifier),
      ea = g.mjUiClass(f.idType),
      ta = g.mjUiClass(f.id),
      M = g.mjUiClass(f.fundingStatement),
      W = g.mjUiClass(f.formatList),
      C = g.mjUiClass(f.format),
      S = g.mjUiClass(k.downloadBtn),
      P = g.mjUiClass(k.date),
      L = g.mjUiClass(f.creator),
      la = g.mjUiClass(f.contactType),
      na = g.mjUiClass(f.contactEmail);
  k = g.mjUiClass(k.clipBtn);
  var ja = g.mjUiClass(f.basicMetadata);
  f = g.mjUiClass(f.applies);
  c.page = Q;
  c.date = P;
  c.recPreview = G;
  c.prodPreview = D;
  c.locPreview = da;
  c.tooltip = e;
  c.downloadBtn = S;
  c.clipBtn = k;
  c.previewButtons = N;
  c.record = F;
  c.recordId = v;
  c.product = X;
  c.productList = K;
  c.productsHeader = H;
  c.products = B;
  c.location = U;
  c.sustainability = n;
  c.missionStatement = q;
  c.fundingStatement = M;
  c.identifier = Z;
  c.id = ta;
  c.idType = ea;
  c.relatedId = x;
  c.relType = A;
  c.relatedIdList = y;
  c.relatedIdsHeader = t;
  c.relatedIds = p;
  c.basicMetadata = ja;
  c.creator = L;
  c.pubyear = I;
  c.title = d;
  c.resourceId = u;
  c.resourceType = w;
  c.resourceTypeGen = m;
  c.resourceTypeDescr = r;
  c.resourceMDSource = z;
  c.institutionName = fa;
  c.institutionId = ca;
  c.institutionType = R;
  c.institutionContact = ia;
  c.contactEmail = na;
  c.contactType = la;
  c.institutionPolicy = V;
  c.institutionPolicies = ba;
  c.policy = J;
  c.policyType = O;
  c.applies = f;
  c.superOrg = l;
  c.versioning = a;
  c.format = C;
  c.formatList = W;
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
      b = function b(e) {
    return "metajelo_" + e;
  };

  a = function () {
    var e = k.map(k.functorArray)(b);
    return function (d) {
      return g.cList(e(d));
    };
  }();

  c.mjWebClass = function (e) {
    return f.className("metajelo_" + e);
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
      n = g.mjWebClass(f.resourceTypeGen),
      l = g.mjWebClass(f.resourceTypeDescr),
      m = g.mjWebClass(f.resourceType),
      r = g.mjWebClass(f.resourceId),
      w = g.mjWebClass(f.relatedIdsHeader),
      z = g.mjWebClass(f.relatedIdList),
      u = g.mjWebClass(f.relatedId),
      t = g.mjWebClass(f.relType),
      p = g.mjWebClass(f.recordId),
      y = g.mjWebClass(f.record),
      x = g.mjWebClass(f.pubyear),
      A = g.mjWebClass(f.productsHeader),
      v = g.mjWebClass(f.productList),
      F = g.mjWebClass(k.productGroup),
      G = g.mjWebClass(k.productCitation),
      I = g.mjWebClass(f.product),
      H = g.mjWebClass(f.policyType),
      B = g.mjWebClass(f.policy),
      K = g.cList([f.url, f.missionStatement]),
      X = g.mjWebClass(f.institutionType),
      D = g.mjWebClass(f.institutionPolicy),
      N = g.mjWebClass(f.institutionPolicies),
      O = g.mjWebClass(f.institutionName),
      J = g.mjWebClass(f.institutionId),
      Q = g.mjWebClass(f.institutionContact),
      q = g.mjWebClass(f.identifier),
      U = g.cList([f.url, k.idUrl]),
      da = g.mjWebClass(f.idType),
      R = g.cList([f.url, f.fundingStatement]),
      V = g.mjWebClass(k.errorDisplayBox),
      ba = g.mjWebClass(k.errorDisplay),
      fa = g.mjWebClass(f.creator),
      ca = g.mjWebClass(f.contactType),
      ia = g.mjWebClass(f.contactEmail);
  f = g.mjWebClass(f.basicMetadata);
  k = g.mjWebClass(k.appliesInfo);
  c.productGroup = F;
  c.productCitation = G;
  c.appliesInfo = k;
  c.idUrl = U;
  c.errorDisplayBox = V;
  c.errorDisplay = ba;
  c.record = y;
  c.recordId = p;
  c.product = I;
  c.productList = v;
  c.productsHeader = A;
  c.sustainability = e;
  c.missionStatement = K;
  c.fundingStatement = R;
  c.identifier = q;
  c.idType = da;
  c.relatedId = u;
  c.relType = t;
  c.relatedIdList = z;
  c.relatedIdsHeader = w;
  c.basicMetadata = f;
  c.creator = fa;
  c.pubyear = x;
  c.title = b;
  c.resourceId = r;
  c.resourceType = m;
  c.resourceTypeGen = n;
  c.resourceTypeDescr = l;
  c.institutionName = O;
  c.institutionId = J;
  c.institutionType = X;
  c.institutionContact = Q;
  c.contactEmail = ia;
  c.contactType = ca;
  c.institutionPolicy = D;
  c.institutionPolicies = N;
  c.policy = B;
  c.policyType = H;
  c.superOrg = d;
  c.versioning = a;
})(PS);

(function (a) {
  a._validateURL = function (c) {
    return function (f) {
      if (!f || !/^https?:\/\//.test(f)) return "Unknown or missing protocol format in url: " + f;
      var k = document.createElement("a");
      k.href = f;

      if (c) {
        if (k.username) return "URL " + f + " contains a username: " + k.username;
        if (k.password) return "URL " + f + " contains a password: " + k.password;
      }

      return /\.[^0-9.]/.test(k.hostname) ? /(\s|^\.|\.$)/.test(k.hostname) ? "Hostname '" + k.href + "' contains whitespace in " + f : k.href.toLowerCase().replace(/\/+$/g, "") !== f.toLowerCase().replace(/\/+$/g, "") ? "Unkown error: supplied URL " + f + " doesn't match parsed href " + k.href : "SUCCESS" : "Invalid hostname '" + k.href + "' in " + f;
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
  a = new b.Show(function (n) {
    return b.show(e.showNonEmptyString)(n);
  });

  var d = function d(n) {
    return function (l) {
      var m = "SUCCESS" === l ? !0 : !1;

      if (m) {
        l = e.fromString(n);
        if (l instanceof g.Just) return new k.Right(l.value0);
        if (l instanceof g.Nothing) return new k.Left("Empty URL");
        throw Error("Failed pattern match at Text.URL.Validate (line 54, column 11 - line 56, column 32): " + [l.constructor.name]);
      }

      if (!m) return new k.Left(l);
      throw Error("Failed pattern match at Text.URL.Validate (line 53, column 29 - line 57, column 23): " + [m.constructor.name]);
    };
  };

  c.parsePublicURL = function (n) {
    var l = f._validateURL(!0)(n);

    return d(n)(l);
  };

  c.urlToNEString = function (n) {
    return n;
  };

  c.urlToString = function (n) {
    return e.toString(n);
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
      n = a["Data.Generic.Rep.Eq"],
      l = a["Data.Generic.Rep.Ord"],
      m = a["Data.Generic.Rep.Show"],
      r = a["Data.Ord"],
      w = a["Data.Show"],
      z = a["Data.String.NonEmpty.Internal"],
      u = a["Data.Symbol"],
      t = a["Text.URL.Validate"],
      p = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      y = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      x = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      A = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      v = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      F = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      G = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      I = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      H = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      B = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      K = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      X = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      D = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      N = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      O = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      J = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Q = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      q = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      U = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      da = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      R = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      V = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      ba = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      fa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      ca = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      ia = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Z = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      ea = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      ta = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      M = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      W = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      C = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      S = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      P = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      L = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      la = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      na = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      ja = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      E = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Y = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      ka = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      qa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      sa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      ya = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Fa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Ba = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Na = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      La = function () {
    function h(Ga) {
      this.value0 = Ga;
    }

    h.create = function (Ga) {
      return new h(Ga);
    };

    return h;
  }(),
      T = function () {
    function h(Ga) {
      this.value0 = Ga;
    }

    h.create = function (Ga) {
      return new h(Ga);
    };

    return h;
  }(),
      ua = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Ia = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Ra = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Ma = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      $a = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Sa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Ha = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      ab = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Ta = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Ua = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Va = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Wa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Xa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Ya = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      bb = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      cb = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Za = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      db = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      eb = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      fb = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Pa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      aa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      ma = new w.Show(function (h) {
    if (h instanceof ua) return "commercial";
    if (h instanceof Ia) return "non-profit";
    if (h instanceof Ra) return "governmental";
    throw Error("Failed pattern match at Metajelo.Types (line 237, column 1 - line 240, column 37): " + [h.constructor.name]);
  }),
      za = new w.Show(function (h) {
    return "dataCustodian";
  }),
      Aa = new b.Generic(function (h) {
    if (h instanceof p) return new b.Inl(b.NoArguments.value);
    if (h instanceof y) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (h instanceof x) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (h instanceof A) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (h instanceof v) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (h instanceof F) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (h instanceof G) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (h instanceof I) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (h instanceof H) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (h instanceof B) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (h instanceof K) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (h instanceof X) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (h instanceof D) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (h instanceof N) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 140, column 1 - line 140, column 76): " + [h.constructor.name]);
  }, function (h) {
    if (h instanceof b.Inl) return p.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inl) return y.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inl) return x.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inl) return A.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inl) return v.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inl) return F.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return G.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return I.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return H.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return B.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return K.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return X.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return D.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return N.value;
    throw Error("Failed pattern match at Metajelo.Types (line 140, column 1 - line 140, column 76): " + [h.constructor.name]);
  }),
      Ea = new w.Show(m.genericShow(Aa)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
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
      Da = new b.Generic(function (h) {
    if (h instanceof O) return new b.Inl(b.NoArguments.value);
    if (h instanceof J) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (h instanceof Q) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (h instanceof q) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (h instanceof U) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (h instanceof da) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (h instanceof R) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (h instanceof V) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (h instanceof ba) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (h instanceof fa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (h instanceof ca) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (h instanceof ia) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (h instanceof Z) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (h instanceof ea) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (h instanceof ta) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (h instanceof M) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (h instanceof W) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (h instanceof C) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))));
    if (h instanceof S) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))));
    if (h instanceof P) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))));
    if (h instanceof L) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))));
    if (h instanceof la) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))));
    if (h instanceof na) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))))));
    if (h instanceof ja) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))))));
    if (h instanceof E) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value))))))))))))))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 197, column 1 - line 197, column 62): " + [h.constructor.name]);
  }, function (h) {
    if (h instanceof b.Inl) return O.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inl) return J.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inl) return Q.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inl) return q.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inl) return U.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inl) return da.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return R.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return V.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ba.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return fa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ca.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ia.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Z.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ea.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ta.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return M.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return W.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return C.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return S.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return P.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return L.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return la.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return na.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ja.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return E.value;
    throw Error("Failed pattern match at Metajelo.Types (line 197, column 1 - line 197, column 62): " + [h.constructor.name]);
  }),
      ha = new w.Show(m.genericShow(Da)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
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
      oa = new b.Generic(function (h) {
    if (h instanceof Y) return new b.Inl(b.NoArguments.value);
    if (h instanceof ka) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (h instanceof qa) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (h instanceof sa) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (h instanceof ya) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (h instanceof Fa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (h instanceof Ba) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (h instanceof Na) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))));
    throw Error("Failed pattern match at Metajelo.Types (line 307, column 1 - line 307, column 58): " + [h.constructor.name]);
  }, function (h) {
    if (h instanceof b.Inl) return Y.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inl) return ka.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inl) return qa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inl) return sa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inl) return ya.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inl) return Fa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ba.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return Na.value;
    throw Error("Failed pattern match at Metajelo.Types (line 307, column 1 - line 307, column 58): " + [h.constructor.name]);
  }),
      pa = new w.Show(function (h) {
    return h instanceof Na ? "Terms of Use" : m.genericShow(oa)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
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
    }))))))))))(h);
  }),
      ra = new b.Generic(function (h) {
    if (h instanceof La) return new b.Inl(h.value0);
    if (h instanceof T) return new b.Inr(h.value0);
    throw Error("Failed pattern match at Metajelo.Types (line 340, column 1 - line 340, column 50): " + [h.constructor.name]);
  }, function (h) {
    if (h instanceof b.Inl) return new La(h.value0);
    if (h instanceof b.Inr) return new T(h.value0);
    throw Error("Failed pattern match at Metajelo.Types (line 340, column 1 - line 340, column 50): " + [h.constructor.name]);
  }),
      va = new w.Show(m.genericShow(ra)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsArgument(z.showNonEmptyString))(new u.IsSymbol(function () {
    return "FreeTextPolicy";
  })))(m.genericShowConstructor(m.genericShowArgsArgument(t.showURL))(new u.IsSymbol(function () {
    return "RefPolicy";
  }))))),
      wa = new b.Generic(function (h) {
    if (h instanceof ua) return new b.Inl(b.NoArguments.value);
    if (h instanceof Ia) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (h instanceof Ra) return new b.Inr(new b.Inr(b.NoArguments.value));
    throw Error("Failed pattern match at Metajelo.Types (line 236, column 1 - line 236, column 68): " + [h.constructor.name]);
  }, function (h) {
    if (h instanceof b.Inl) return ua.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inl) return Ia.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr) return Ra.value;
    throw Error("Failed pattern match at Metajelo.Types (line 236, column 1 - line 236, column 68): " + [h.constructor.name]);
  }),
      xa = new b.Generic(function (h) {
    return b.NoArguments.value;
  }, function (h) {
    return Ma.value;
  }),
      Ca = new b.Generic(function (h) {
    if (h instanceof $a) return new b.Inl(b.NoArguments.value);
    if (h instanceof Sa) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (h instanceof Ha) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (h instanceof ab) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (h instanceof Ta) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (h instanceof Ua) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (h instanceof Va) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (h instanceof Wa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (h instanceof Xa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (h instanceof Ya) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (h instanceof bb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (h instanceof cb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (h instanceof Za) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (h instanceof db) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (h instanceof eb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (h instanceof fb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (h instanceof Pa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (h instanceof aa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 74, column 1 - line 74, column 66): " + [h.constructor.name]);
  }, function (h) {
    if (h instanceof b.Inl) return $a.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inl) return Sa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inl) return Ha.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inl) return ab.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inl) return Ta.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inl) return Ua.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Va.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Wa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Xa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ya.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return bb.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return cb.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Za.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return db.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return eb.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return fb.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Pa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return aa.value;
    throw Error("Failed pattern match at Metajelo.Types (line 74, column 1 - line 74, column 66): " + [h.constructor.name]);
  }),
      Ja = new w.Show(function (h) {
    return h instanceof Sa ? "arXiv" : h instanceof Ha ? "bibcode" : m.genericShow(Ca)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new u.IsSymbol(function () {
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
    }))))))))))))))))))))(h);
  }),
      Ka = new g.Eq(n.genericEq(Aa)(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqConstructor(n.genericEqNoArguments)))))))))))))))),
      Oa = new r.Ord(function () {
    return Ka;
  }, function (h) {
    return function (Ga) {
      return l.genericCompare(Aa)(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdConstructor(l.genericOrdNoArguments)))))))))))))))(h)(Ga);
    };
  }),
      Qa = new g.Eq(n.genericEq(Da)(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqConstructor(n.genericEqNoArguments))))))))))))))))))))))))))),
      gb = new r.Ord(function () {
    return Qa;
  }, function (h) {
    return function (Ga) {
      return l.genericCompare(Da)(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdConstructor(l.genericOrdNoArguments))))))))))))))))))))))))))(h)(Ga);
    };
  }),
      jb = new g.Eq(n.genericEq(oa)(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqConstructor(n.genericEqNoArguments)))))))))),
      hb = new r.Ord(function () {
    return jb;
  }, function (h) {
    return function (Ga) {
      return l.genericCompare(oa)(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdConstructor(l.genericOrdNoArguments)))))))))(h)(Ga);
    };
  }),
      kb = new g.Eq(n.genericEq(wa)(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqConstructor(n.genericEqNoArguments))))),
      ib = new r.Ord(function () {
    return kb;
  }, function (h) {
    return function (Ga) {
      return l.genericCompare(wa)(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdConstructor(l.genericOrdNoArguments))))(h)(Ga);
    };
  }),
      lb = new g.Eq(n.genericEq(xa)(n.genericEqConstructor(n.genericEqNoArguments))),
      mb = new r.Ord(function () {
    return lb;
  }, function (h) {
    return function (Ga) {
      return l.genericCompare(xa)(l.genericOrdConstructor(l.genericOrdNoArguments))(h)(Ga);
    };
  }),
      qb = new g.Eq(n.genericEq(Ca)(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqConstructor(n.genericEqNoArguments)))))))))))))))))))),
      nb = new r.Ord(function () {
    return qb;
  }, function (h) {
    return function (Ga) {
      return l.genericCompare(Ca)(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdConstructor(l.genericOrdNoArguments)))))))))))))))))))(h)(Ga);
    };
  }),
      rb = new k.Enum(function () {
    return Oa;
  }, d.genericPred(Aa)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), d.genericSucc(Aa)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      sb = new k.Enum(function () {
    return gb;
  }, d.genericPred(Da)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), d.genericSucc(Da)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      tb = new k.Enum(function () {
    return hb;
  }, d.genericPred(oa)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), d.genericSucc(oa)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      ub = new k.Enum(function () {
    return ib;
  }, d.genericPred(wa)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), d.genericSucc(wa)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      vb = new k.Enum(function () {
    return mb;
  }, d.genericPred(xa)(d.genericEnumConstructor(d.genericEnumNoArguments)), d.genericSucc(xa)(d.genericEnumConstructor(d.genericEnumNoArguments))),
      wb = new k.Enum(function () {
    return nb;
  }, d.genericPred(Ca)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), d.genericSucc(Ca)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      xb = new f.Bounded(function () {
    return Oa;
  }, e.genericBottom(Aa)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(Aa)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))))))))),
      yb = new f.Bounded(function () {
    return gb;
  }, e.genericBottom(Da)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(Da)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments))))))))))))))))))))))))))),
      ob = new f.Bounded(function () {
    return hb;
  }, e.genericBottom(oa)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(oa)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))),
      zb = new k.SmallBounded(function () {
    return ob;
  }),
      Ab = new f.Bounded(function () {
    return ib;
  }, e.genericBottom(wa)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(wa)(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments))))),
      pb = new f.Bounded(function () {
    return mb;
  }, e.genericBottom(xa)(e.genericBottomConstructor(e.genericBottomNoArguments)), e.genericTop(xa)(e.genericTopConstructor(e.genericTopNoArguments))),
      Bb = new k.SmallBounded(function () {
    return pb;
  }),
      Cb = new f.Bounded(function () {
    return nb;
  }, e.genericBottom(Ca)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(Ca)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))))))))))))),
      Db = new k.BoundedEnum(function () {
    return xb;
  }, function () {
    return rb;
  }, d.genericCardinality(Aa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))), d.genericFromEnum(Aa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))), d.genericToEnum(Aa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))))))))),
      Eb = new k.BoundedEnum(function () {
    return yb;
  }, function () {
    return sb;
  }, d.genericCardinality(Da)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))))))))))))))))))), d.genericFromEnum(Da)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))))))))))))))))))), d.genericToEnum(Da)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))))))))))),
      Fb = new k.BoundedEnum(function () {
    return ob;
  }, function () {
    return tb;
  }, d.genericCardinality(oa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))), d.genericFromEnum(oa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))), d.genericToEnum(oa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))),
      Gb = new k.BoundedEnum(function () {
    return Ab;
  }, function () {
    return ub;
  }, d.genericCardinality(wa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))), d.genericFromEnum(wa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))), d.genericToEnum(wa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))),
      Hb = new k.BoundedEnum(function () {
    return pb;
  }, function () {
    return vb;
  }, d.genericCardinality(xa)(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)), d.genericFromEnum(xa)(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)), d.genericToEnum(xa)(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))),
      Ib = new k.BoundedEnum(function () {
    return Cb;
  }, function () {
    return wb;
  }, d.genericCardinality(Ca)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))), d.genericFromEnum(Ca)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))), d.genericToEnum(Ca)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))));

  c.ARK = $a;
  c.ArXiv = Sa;
  c.Bibcode = Ha;
  c.DOI = ab;
  c.EAN13 = Ta;
  c.EISSN = Ua;
  c.Handle = Va;
  c.IGSN = Wa;
  c.ISBN = Xa;
  c.ISSN = Ya;
  c.ISTC = bb;
  c.LISSN = cb;
  c.LSID = Za;
  c.PMID = db;
  c.PURL = eb;
  c.UPC = fb;
  c.URL = Pa;
  c.URN = aa;
  c.Audiovisual = p;
  c.Dataset = y;
  c.Event = x;
  c.Image = A;
  c.InteractiveResource = v;
  c.Model = F;
  c.PhysicalObject = G;
  c.ResourceCollection = I;
  c.Service = H;
  c.Software = B;
  c.Sound = K;
  c.Text = X;
  c.Workflow = D;
  c.Other = N;
  c.IsCitedBy = O;
  c.Cites = J;
  c.IsSupplementTo = Q;
  c.IsSupplementedBy = q;
  c.IsContinuedBy = U;
  c.Continues = da;
  c.IsNewVersionOf = R;
  c.IsPreviousVersionOf = V;
  c.IsPartOf = ba;
  c.HasPart = fa;
  c.IsReferencedBy = ca;
  c.References = ia;
  c.IsDocumentedBy = Z;
  c.Documents = ea;
  c.IsCompiledBy = ta;
  c.Compiles = M;
  c.IsVariantFormOf = W;
  c.IsOriginalFormOf = C;
  c.IsIdenticalTo = S;
  c.HasMetadata = P;
  c.IsMetadataFor = L;
  c.Reviews = la;
  c.IsReviewedBy = na;
  c.IsDerivedFrom = ja;
  c.IsSourceOf = E;
  c.Commercial = ua;
  c.NonProfit = Ia;
  c.Governmental = Ra;
  c.DataCustodian = Ma;
  c.Access = Y;
  c.Collection = ka;
  c.Data = qa;
  c.Metadata = sa;
  c.Preservation = ya;
  c.Submission = Fa;
  c.Quality = Ba;
  c.TermsOfUse = Na;
  c.FreeTextPolicy = La;
  c.RefPolicy = T;
  c.showIdentifierType = Ja;
  c.boundedEnumIdentifierType = Ib;
  c.showResourceTypeGeneral = Ea;
  c.boundedEnumResourceTypeGeneral = Db;
  c.showRelationType = ha;
  c.boundedEnumRelationType = Eb;
  c.showInstitutionType = ma;
  c.boundedEnumInstitutionType = Gb;
  c.eqInstitutionContactType = lb;
  c.showInstitutionContactType = za;
  c.boundedEnumInstitutionContactType = Hb;
  c.smallBoundedInstitutionContactType = Bb;
  c.showPolicyType = pa;
  c.eqPolicyType = jb;
  c.boundedEnumPolicyType = Fb;
  c.smallBoundedPolicyType = zb;
  c.showPolicy = va;
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
      n = a["Control.Monad.Rec.Class"],
      l = a["Control.Plus"],
      m = a["Data.Bifunctor"],
      r = a["Data.Boolean"],
      w = a["Data.Either"],
      z = a["Data.Functor"];
  a = a["Data.Show"];

  var u = function () {
    function I(H) {
      this.value0 = H;
    }

    I.create = function (H) {
      return new I(H);
    };

    return I;
  }();

  a = new a.Show(function (I) {
    return I.value0;
  });

  var t = new z.Functor(function (I) {
    return function (H) {
      var B = z.map(w.functorEither)(function (K) {
        return {
          result: I(K.result),
          suffix: K.suffix
        };
      });
      return function (K) {
        return B(H(K));
      };
    };
  }),
      p = function p(I) {
    return function (H) {
      return new w.Left({
        pos: H.pos,
        error: new u(I)
      });
    };
  },
      y = new b.Apply(function () {
    return t;
  }, function (I) {
    return function (H) {
      return function (B) {
        return e.bind(w.bindEither)(I(B))(function (K) {
          return e.bind(w.bindEither)(H(K.suffix))(function (X) {
            return g.pure(w.applicativeEither)({
              result: K.result(X.result),
              suffix: X.suffix
            });
          });
        });
      };
    };
  }),
      x = new e.Bind(function () {
    return y;
  }, function (I) {
    return function (H) {
      return function (B) {
        return e.bind(w.bindEither)(I(B))(function (K) {
          return H(K.result)(K.suffix);
        });
      };
    };
  }),
      A = new g.Applicative(function () {
    return y;
  }, function (I) {
    return function (H) {
      return new w.Right({
        result: I,
        suffix: H
      });
    };
  }),
      v = new d.Monad(function () {
    return A;
  }, function () {
    return x;
  });

  b = new n.MonadRec(function () {
    return v;
  }, function (I) {
    return function (H) {
      var B = function B(K) {
        if (K.result instanceof n.Loop) return new n.Loop({
          state: K.result.value0,
          str: K.suffix
        });
        if (K.result instanceof n.Done) return new n.Done({
          result: K.result.value0,
          suffix: K.suffix
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser (line 88, column 7 - line 88, column 70): " + [K.constructor.name]);
      };

      return function (K) {
        return n.tailRecM(n.monadRecEither)(function (X) {
          return z.map(w.functorEither)(B)(I(X.state)(X.str));
        })({
          state: H,
          str: K
        });
      };
    };
  });
  var F = new f.Alt(function () {
    return t;
  }, function (I) {
    return function (H) {
      return function (B) {
        var K = I(B);

        if (K instanceof w.Left) {
          if (B.pos === K.value0.pos) return H(B);
          if (r.otherwise) return new w.Left({
            error: K.value0.error,
            pos: K.value0.pos
          });
        }

        return K;
      };
    };
  }),
      G = new l.Plus(function () {
    return F;
  }, p("No alternative"));
  f = new k.Alternative(function () {
    return A;
  }, function () {
    return G;
  });
  c.ParseError = u;

  c.runParser = function (I) {
    return function (H) {
      return m.bimap(w.bifunctorEither)(function (B) {
        return B.error;
      })(function (B) {
        return B.result;
      })(I({
        str: H,
        pos: 0
      }));
    };
  };

  c.fail = p;

  c["try"] = function (I) {
    return function (H) {
      return m.lmap(w.bifunctorEither)(function (B) {
        return {
          pos: H.pos,
          error: B.error
        };
      })(I(H));
    };
  };

  c.showParseError = a;
  c.functorParser = t;
  c.applyParser = y;
  c.applicativeParser = A;
  c.altParser = F;
  c.alternativeParser = f;
  c.bindParser = x;
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
      n = a["Data.Unit"],
      l = a["Text.Parsing.StringParser"],
      m = a["Data.List"].manyRec(l.monadRecParser)(l.alternativeParser),
      r = function r(w) {
    return function (z) {
      return new d.NonEmpty(w, z);
    };
  };

  c.many = m;

  c.many1 = function (w) {
    return g.apply(l.applyParser)(e.map(l.functorParser)(r)(w))(m(w));
  };

  c.withError = function (w) {
    return function (z) {
      return f.alt(l.altParser)(w)(l.fail(z));
    };
  };

  c.optional = function (w) {
    return f.alt(l.altParser)(b.bind(l.bindParser)(w)(function (z) {
      return k.pure(l.applicativeParser)(n.unit);
    }))(k.pure(l.applicativeParser)(n.unit));
  };

  c.sepBy1 = function (w) {
    return function (z) {
      return b.bind(l.bindParser)(w)(function (u) {
        return b.bind(l.bindParser)(m(g.applySecond(l.applyParser)(z)(w)))(function (t) {
          return k.pure(l.applicativeParser)(r(u)(t));
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
      n = a["Data.Show"],
      l = a["Data.String.CodePoints"],
      m = a["Data.Unit"],
      r = a["Text.Parsing.StringParser"],
      w = a["Text.Parsing.StringParser.Combinators"],
      z = function () {
    var t = function () {
      var p = e.fromEnum(l.boundedEnumCodePoint);
      return function (y) {
        return g.fromCharCode(p(y));
      };
    }();

    return function (p) {
      var y = l.codePointAt(p.pos)(p.str);

      if (y instanceof d.Just) {
        var x = t(y.value0);
        if (x instanceof d.Just) return new b.Right({
          result: x.value0,
          suffix: {
            str: p.str,
            pos: p.pos + 1 | 0
          }
        });
        if (x instanceof d.Nothing) return new b.Left({
          pos: p.pos,
          error: r.ParseError.create("CodePoint " + (n.show(l.showCodePoint)(y.value0) + " is not a character"))
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 53, column 16 - line 55, column 100): " + [x.constructor.name]);
      }

      if (y instanceof d.Nothing) return new b.Left({
        pos: p.pos,
        error: new r.ParseError("Unexpected EOF")
      });
      throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 52, column 3 - line 56, column 64): " + [y.constructor.name]);
    };
  }(),
      u = function u(t) {
    return r["try"](k.bind(r.bindParser)(z)(function (p) {
      return t(p) ? f.pure(r.applicativeParser)(p) : r.fail("Character " + (n.show(n.showChar)(p) + " did not satisfy predicate"));
    }));
  };

  c.eof = function (t) {
    return t.pos < l.length(t.str) ? new b.Left({
      pos: t.pos,
      error: new r.ParseError("Expected EOF")
    }) : new b.Right({
      result: m.unit,
      suffix: t
    });
  };

  c.satisfy = u;

  c["char"] = function (t) {
    return w.withError(u(function (p) {
      return p === t;
    }))("Could not match character " + n.show(n.showChar)(t));
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
      n = a["Data.Functor"],
      l = a["Data.List.Types"],
      m = a["Data.Maybe"],
      r = a["Data.Monoid"],
      w = a["Data.String.CodeUnits"],
      z = a["Data.String.Pattern"],
      u = a["Data.Unit"],
      t = a["Text.Parsing.StringParser"],
      p = a["Text.Parsing.StringParser.CodePoints"],
      y = a["Text.Parsing.StringParser.Combinators"],
      x = function (M) {
    var W = m.fromJust();
    return function (C) {
      return W(e.fromCharCode(C));
    };
  }(),
      A = function A(M) {
    return n.map(t.functorParser)(function () {
      var W = d.fold(l.foldableNonEmptyList)(r.monoidString),
          C = n.map(l.functorNonEmptyList)(w.singleton);
      return function (S) {
        return W(C(S));
      };
    }())(y.many1(p.satisfy(M)));
  },
      v = function v(M) {
    return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(M))(function () {
      return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(F(M)))(function () {
        return k.pure(t.applicativeParser)(u.unit);
      });
    });
  },
      F = function F(M) {
    return f.alt(t.altParser)(v(M))(k.pure(t.applicativeParser)(u.unit));
  },
      G = function G(M) {
    return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(p.satisfy(M)))(function () {
      return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(F(p.satisfy(M))))(function () {
        return k.pure(t.applicativeParser)(u.unit);
      });
    });
  },
      I = p["char"](x(0)),
      H = p["char"]("\n");

  a = function a(M) {
    return " " === M || "\t" === M;
  };

  var B = p.satisfy(a),
      K = G(a),
      X = function X(M) {
    return function (W) {
      return function (C) {
        return C >= M && C <= W;
      };
    };
  };

  a = X(x(33))(x(126));

  var D = p.satisfy(a),
      N = function N(M) {
    return function (W) {
      return w.contains(z.Pattern(w.singleton(W)))(M);
    };
  },
      O = function O(M) {
    return X(x(1))(x(8))(M) || X(x(14))(x(31))(M) || N("\x0B\f\x7F")(M);
  },
      J = function J(M) {
    return X(x(33))(x(39))(M) || X(x(42))(x(91))(M) || X(x(93))(x(126))(M) || O(M);
  },
      Q = function Q(M) {
    return X(x(33))(x(90))(M) || X(x(94))(x(126))(M) || O(M);
  },
      q = p.satisfy(O),
      U = p["char"]("\r"),
      da = n["void"](t.functorParser)(g.applySecond(t.applyParser)(U)(H)),
      R = function () {
    var M = v(g.applySecond(t.applyParser)(da)(K)),
        W = g.applySecond(t.applyParser)(K)(y.optional(g.applySecond(t.applyParser)(da)(K)));
    return f.alt(t.altParser)(W)(M);
  }(),
      V = function () {
    var M = b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(p["char"]("\\")))(function () {
      return f.alt(t.altParser)(f.alt(t.altParser)(f.alt(t.altParser)(f.alt(t.altParser)(f.alt(t.altParser)(D)(B))(H))(U))(q))(I);
    });
    return b.bind(t.bindParser)(M)(function (W) {
      return k.pure(t.applicativeParser)("\\" + w.singleton(W));
    });
  }(),
      ba = f.alt(t.altParser)(A(function (M) {
    return N(w.singleton(x(33)))(M) || X(x(35))(x(91))(M) || X(x(93))(x(126))(M) || O(M);
  }))(V),
      fa = function () {
    var M = b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(p["char"]('"')))(function () {
      return b.bind(t.bindParser)(y.many(g.applySecond(t.applyParser)(y.optional(R))(ba)))(function (W) {
        return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(y.optional(R)))(function () {
          return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(p["char"]('"')))(function () {
            return k.pure(t.applicativeParser)(W);
          });
        });
      });
    });
    return n.map(t.functorParser)(function (W) {
      return '"' + (d.fold(l.foldableList)(r.monoidString)(W) + '"');
    })(M);
  }(),
      ca = b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(p["char"]("(")))(function () {
    return b.discard(b.discardUnit)(t.bindParser)(F(f.alt(t.altParser)(f.alt(t.altParser)(f.alt(t.altParser)(G(J))(n["void"](t.functorParser)(V)))(ca))(R)))(function () {
      return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(p["char"](")")))(function () {
        return k.pure(t.applicativeParser)(u.unit);
      });
    });
  }),
      ia = F(f.alt(t.altParser)(ca)(R));

  a = b.discard(b.discardUnit)(t.bindParser)(y.optional(ia))(function () {
    return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(p["char"]("[")))(function () {
      return b.bind(t.bindParser)(y.many(g.applySecond(t.applyParser)(y.optional(R))(A(Q))))(function (M) {
        return b.discard(b.discardUnit)(t.bindParser)(y.optional(R))(function () {
          return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(p["char"]("]")))(function () {
            return b.discard(b.discardUnit)(t.bindParser)(y.optional(ia))(function () {
              return k.pure(t.applicativeParser)("[" + (d.fold(l.foldableList)(r.monoidString)(M) + "]"));
            });
          });
        });
      });
    });
  });

  var Z = function () {
    return A(function (M) {
      return "0" <= M && "9" >= M || "a" <= M && "z" >= M || "A" <= M && "Z" >= M || N("!#$%&'*+/=?^_`{|}~-")(M);
    });
  }(),
      ea = function () {
    var M = b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(y.optional(ia)))(function () {
      return b.bind(t.bindParser)(f.alt(t.altParser)(Z)(fa))(function (W) {
        return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(y.optional(ia)))(function () {
          return k.pure(t.applicativeParser)(W);
        });
      });
    });
    M = y.sepBy1(M)(p["char"]("."));
    return n.map(t.functorParser)(d.intercalate(l.foldableNonEmptyList)(r.monoidString)("."))(M);
  }(),
      ta = f.alt(t.altParser)(ea)(a);

  a = b.bind(t.bindParser)(ea)(function (M) {
    return b.bind(t.bindParser)(p["char"]("@"))(function () {
      return b.bind(t.bindParser)(ta)(function (W) {
        return b.bind(t.bindParser)(p.eof)(function () {
          return k.pure(t.applicativeParser)({
            localPart: M,
            domainPart: W
          });
        });
      });
    });
  });
  c.addrSpec = a;

  c.toString = function (M) {
    return M.localPart + ("@" + M.domainPart);
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
    var d = f.lmap(k.bifunctorEither)(g.show(e.showParseError));
    return function (n) {
      n = e.runParser(b.addrSpec)(n);
      return d(n);
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
      n = a["Data.String.NonEmpty.Internal"],
      l = a["Formless.Validation"],
      m = a["Text.Email.Validate"],
      r = function () {
    function A() {}

    A.value = new A();
    return A;
  }(),
      w = function () {
    function A(v) {
      this.value0 = v;
    }

    A.create = function (v) {
      return new A(v);
    };

    return A;
  }(),
      z = function () {
    function A(v) {
      this.value0 = v;
    }

    A.create = function (v) {
      return new A(v);
    };

    return A;
  }(),
      u = function () {
    function A(v) {
      this.value0 = v;
    }

    A.create = function (v) {
      return new A(v);
    };

    return A;
  }(),
      t = function () {
    function A(v) {
      this.value0 = v;
    }

    A.create = function (v) {
      return new A(v);
    };

    return A;
  }(),
      p = function () {
    function A(v) {
      this.value0 = v;
    }

    A.create = function (v) {
      return new A(v);
    };

    return A;
  }(),
      y = function () {
    function A(v, F) {
      this.value0 = v;
      this.value1 = F;
    }

    A.create = function (v) {
      return function (F) {
        return new A(v, F);
      };
    };

    return A;
  }(),
      x = function x(A) {
    this.toText = A;
  };

  a = new x(f.identity(f.categoryFn));
  x = new x(function (A) {
    if (A instanceof r) return "This field is required.";
    if (A instanceof z) return "Invalid input: " + A.value0;
    if (A instanceof w) return "Email validation error: " + A.value0;
    if (A instanceof u) return "You must enter at least " + (e.show(e.showInt)(A.value0) + " characters.");
    if (A instanceof t) return "You must enter less than " + (e.show(e.showInt)(A.value0) + " characters.");
    if (A instanceof p) return 'Could not parse "' + (A.value0 + '" to a valid integer.');
    if (A instanceof y) return 'This field contains "' + (A.value1 + ('" but must be equal to "' + (A.value0 + '" to validate.')));
    throw Error("Failed pattern match at Metajelo.Validation (line 35, column 1 - line 42, column 126): " + [A.constructor.name]);
  });

  c.toText = function (A) {
    return A.toText;
  };

  c.dummy = function (A) {
    return l.hoistFn_(A)(f.identity(f.categoryFn));
  };

  c.emailFormat = function (A) {
    return l.hoistFnE_(A)(function (v) {
      return k.lmap(g.bifunctorEither)(function (F) {
        return new w(F);
      })(m.validate(v));
    });
  };

  c.readNEStringEi = function (A) {
    A = n.fromString(d.trim(A));
    if (A instanceof b.Just) return new g.Right(A.value0);
    if (A instanceof b.Nothing) return new g.Left("Empty string when NonEmptyString expected.");
    throw Error("Failed pattern match at Metajelo.Validation (line 110, column 22 - line 112, column 63): " + [A.constructor.name]);
  };

  c.toTextFieldError = x;
  c.toTextString = a;
})(PS);

(function (a) {
  a.makeDOMParser = function () {
    return new DOMParser();
  };

  a.parseFromString = function (c) {
    return function (f) {
      return function (k) {
        return function () {
          return k.parseFromString(f, c);
        };
      };
    };
  };
})(PS["Web.DOM.DOMParser"] = PS["Web.DOM.DOMParser"] || {});

(function (a) {
  a._documentElement = function (c) {
    return function (f) {
      return function () {
        return f[c];
      };
    };
  }("documentElement");

  a.getElementsByTagName = function (c) {
    return function (f) {
      return function () {
        return f.getElementsByTagName(c);
      };
    };
  };

  a._getElementsByTagNameNS = function (c) {
    return function (f) {
      return function (k) {
        return function () {
          return k.getElementsByTagNameNS(c, f);
        };
      };
    };
  };

  a.createElement = function (c) {
    return function (f) {
      return function () {
        return f.createElement(c);
      };
    };
  };

  a._createElementNS = function (c) {
    return function (f) {
      return function (k) {
        return function () {
          return k.createElementNS(c, f);
        };
      };
    };
  };
})(PS["Web.DOM.Document"] = PS["Web.DOM.Document"] || {});

(function (a) {
  a._unsafeReadProtoTagged = function (c, f, k, g) {
    if ("undefined" !== typeof window) return k = window[k], null != k && g instanceof k ? f(g) : c;

    for (var b = g; null != b;) {
      b = Object.getPrototypeOf(b);
      var e = b.constructor.name;
      if (e === k) return f(g);
      if ("Object" === e) break;
    }

    return c;
  };
})(PS["Web.Internal.FFI"] = PS["Web.Internal.FFI"] || {});

(function (a) {
  a["Web.Internal.FFI"] = a["Web.Internal.FFI"] || {};
  var c = a["Web.Internal.FFI"],
      f = a["Data.Maybe"];

  a["Web.Internal.FFI"].unsafeReadProtoTagged = function (k) {
    return function (g) {
      return c._unsafeReadProtoTagged(f.Nothing.value, f.Just.create, k, g);
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
    var d = k.map(b.functorEffect)(g.toMaybe);
    return function (n) {
      return d(f._documentElement(n));
    };
  }();

  c.fromNode = a;
  c.documentElement = e;

  c.getElementsByTagNameNS = function (d) {
    return f._getElementsByTagNameNS(g.toNullable(d));
  };

  c.createElementNS = function (d) {
    return f._createElementNS(g.toNullable(d));
  };

  c.getElementsByTagName = f.getElementsByTagName;
  c.createElement = f.createElement;
})(PS);

(function (a) {
  var c = function c(f) {
    return function (k) {
      return k[f];
    };
  };

  a._prefix = c("prefix");
  a.localName = c("localName");

  a.setAttribute = function (f) {
    return function (k) {
      return function (g) {
        return function () {
          g.setAttribute(f, k);
          return {};
        };
      };
    };
  };

  a._getAttribute = function (f) {
    return function (k) {
      return function () {
        return k.getAttribute(f);
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

  c.prefix = function (d) {
    return g.toMaybe(f._prefix(d));
  };

  c.getAttribute = function (d) {
    var n = k.map(b.functorEffect)(g.toMaybe),
        l = f._getAttribute(d);

    return function (m) {
      return n(l(m));
    };
  };

  c.localName = f.localName;
  c.setAttribute = f.setAttribute;
})(PS);

(function (a) {
  a.toArray = function (c) {
    return function () {
      return [].slice.call(c);
    };
  };

  a._item = function (c) {
    return function (f) {
      return function () {
        return f.item(c);
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

  c.item = function (e) {
    var d = k.map(b.functorEffect)(g.toMaybe),
        n = f._item(e);

    return function (l) {
      return d(n(l));
    };
  };

  c.toArray = f.toArray;
})(PS);

(function (a) {
  var c = function c(f) {
    return function (k) {
      return function () {
        return k[f];
      };
    };
  };

  a.nodeName = function (f) {
    return f.nodeName;
  };

  a._ownerDocument = c("ownerDocument");
  a.childNodes = c("childNodes");
  a.textContent = c("textContent");

  a.setTextContent = function (f) {
    return function (k) {
      return function () {
        k.textContent = f;
        return {};
      };
    };
  };

  a.appendChild = function (f) {
    return function (k) {
      return function () {
        return k.appendChild(f);
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
    var e = k.map(b.functorEffect)(g.toMaybe);
    return function (d) {
      return e(f._ownerDocument(d));
    };
  }();

  c.ownerDocument = a;
  c.nodeName = f.nodeName;
  c.childNodes = f.childNodes;
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
      n = a["Data.Maybe"],
      l = a.Effect,
      m = a["Web.DOM.Document"],
      r = a["Web.DOM.Element"],
      w = a["Web.DOM.HTMLCollection"],
      z = a["Web.DOM.Node"],
      u = function u(p) {
    return function (y) {
      if (p instanceof n.Nothing) return new e.Right(y);
      if (p instanceof n.Just) return new e.Left(p.value0);
      throw Error("Failed pattern match at Web.DOM.DOMParser (line 73, column 30 - line 75, column 21): " + [p.constructor.name]);
    };
  },
      t = function t(p) {
    return function () {
      var y = g.join(l.bindEffect)(d.map(l.functorEffect)(w.toArray)(m.getElementsByTagName("parsererror")(p)))();
      y = b.head(y);
      y = d.map(n.functorMaybe)(r.toNode)(y);
      if (y instanceof n.Nothing) y = k.pure(l.applicativeEffect)(n.Nothing.value);else if (y instanceof n.Just) y = d.map(l.functorEffect)(n.Just.create)(z.textContent(y.value0));else throw Error("Failed pattern match at Web.DOM.DOMParser (line 65, column 23 - line 67, column 45): " + [y.constructor.name]);
      return y();
    };
  };

  c.parseXMLFromString = function (p) {
    return function (y) {
      return function () {
        var x = f.parseFromString("application/xml")(p)(y)(),
            A = t(x)();
        return u(A)(x);
      };
    };
  };

  c.makeDOMParser = f.makeDOMParser;
})(PS);

(function (a) {
  a.evaluateInternal = function (c) {
    return function (f) {
      return function (k) {
        return function (g) {
          return function (b) {
            return function (e) {
              return function () {
                return e.evaluate(c, f, k, g, b);
              };
            };
          };
        };
      };
    };
  };

  a.resultType = function (c) {
    return c.resultType;
  };

  a.numberValue = function (c) {
    return function () {
      return c.numberValue;
    };
  };

  a.stringValue = function (c) {
    return function () {
      return c.stringValue;
    };
  };

  a.booleanValue = function (c) {
    return function () {
      return c.booleanValue;
    };
  };

  a.singleNodeValueInternal = function (c) {
    return function () {
      return c.singleNodeValue;
    };
  };

  a.snapshotLengthInternal = function (c) {
    return function () {
      return c.snapshotLength;
    };
  };

  a.snapshotItemInternal = function (c) {
    return function (f) {
      return function () {
        return c.snapshotItem(f);
      };
    };
  };

  a.customNSResolver = function (c) {
    return {
      lookupNamespaceURI: c
    };
  };

  a.createNSResolver = function (c) {
    return function (f) {
      return f.createNSResolver(c);
    };
  };

  a.lookupNamespaceURIInternal = function (c) {
    return function (f) {
      return c.lookupNamespaceURI(f);
    };
  };
})(PS["Web.DOM.Document.XPath"] = PS["Web.DOM.Document.XPath"] || {});

(function (a) {
  a.number_type = XPathResult.NUMBER_TYPE;
  a.string_type = XPathResult.STRING_TYPE;
  a.boolean_type = XPathResult.BOOLEAN_TYPE;
  a.unordered_node_snapshot_type = XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE;
  a.ordered_node_snapshot_type = XPathResult.ORDERED_NODE_SNAPSHOT_TYPE;
  a.any_unordered_node_type = XPathResult.ANY_UNORDERED_NODE_TYPE;
})(PS["Web.DOM.Document.XPath.ResultType"] = PS["Web.DOM.Document.XPath.ResultType"] || {});

(function (a) {
  a["Web.DOM.Document.XPath.ResultType"] = a["Web.DOM.Document.XPath.ResultType"] || {};

  var c = a["Web.DOM.Document.XPath.ResultType"],
      f = a["Web.DOM.Document.XPath.ResultType"],
      k = a["Data.Eq"],
      g = a["Data.Maybe"],
      b = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      e = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      d = new k.Eq(function (n) {
    return function (l) {
      return n === l;
    };
  });

  c.res2SnapType = function (n) {
    return k.eq(d)(n)(f.unordered_node_snapshot_type) ? new g.Just(b.value) : k.eq(d)(n)(f.ordered_node_snapshot_type) ? new g.Just(e.value) : g.Nothing.value;
  };

  c.number_type = f.number_type;
  c.string_type = f.string_type;
  c.boolean_type = f.boolean_type;
  c.ordered_node_snapshot_type = f.ordered_node_snapshot_type;
  c.any_unordered_node_type = f.any_unordered_node_type;
})(PS);

(function (a) {
  a["Web.DOM.Document.XPath"] = a["Web.DOM.Document.XPath"] || {};

  var c = a["Web.DOM.Document.XPath"],
      f = a["Web.DOM.Document.XPath"],
      k = a["Control.Applicative"],
      g = a["Data.Array"],
      b = a["Data.Functor"],
      e = a["Data.Int"],
      d = a["Data.Maybe"],
      n = a["Data.Monoid"],
      l = a["Data.Natural"],
      m = a["Data.Nullable"],
      r = a["Data.Traversable"],
      w = a.Effect,
      z = a["Web.DOM.Document"],
      u = a["Web.DOM.Document.XPath.ResultType"],
      t = a["Web.DOM.Element"],
      p = a["Web.DOM.Node"],
      y = function () {
    var A = b.map(w.functorEffect)(function (v) {
      return l.intToNat(e.round(v));
    });
    return function (v) {
      return A(f.snapshotLengthInternal(v));
    };
  }(),
      x = function x(A) {
    return function (v) {
      return b.map(w.functorEffect)(m.toMaybe)(f.snapshotItemInternal(A)(e.toNumber(l.natToInt(v))));
    };
  };

  a = function () {
    var A = b.map(w.functorEffect)(m.toMaybe);
    return function (v) {
      return A(f.singleNodeValueInternal(v));
    };
  }();

  c.evaluate = function (A) {
    return function (v) {
      return function (F) {
        return function (G) {
          return function (I) {
            return function (H) {
              return f.evaluateInternal(A)(v)(m.toNullable(F))(G)(m.toNullable(I))(H);
            };
          };
        };
      };
    };
  };

  c.evaluateNumber = function (A) {
    return function (v) {
      return function (F) {
        return function (G) {
          return function (I) {
            return function () {
              var H = f.evaluateInternal(A)(v)(m.toNullable(F))(u.number_type)(m.toNullable(G))(I)();
              return f.numberValue(H)();
            };
          };
        };
      };
    };
  };

  c.evaluateString = function (A) {
    return function (v) {
      return function (F) {
        return function (G) {
          return function (I) {
            return function () {
              var H = f.evaluateInternal(A)(v)(m.toNullable(F))(u.string_type)(m.toNullable(G))(I)();
              return f.stringValue(H)();
            };
          };
        };
      };
    };
  };

  c.evaluateBoolean = function (A) {
    return function (v) {
      return function (F) {
        return function (G) {
          return function (I) {
            return function () {
              var H = f.evaluateInternal(A)(v)(m.toNullable(F))(u.boolean_type)(m.toNullable(G))(I)();
              return f.booleanValue(H)();
            };
          };
        };
      };
    };
  };

  c.singleNodeValue = a;

  c.snapshot = function (A) {
    var v = u.res2SnapType(f.resultType(A)),
        F = x(A);
    v = b.map(d.functorMaybe)(function (G) {
      return function () {
        var I = y(A)();
        I = l.natToInt(I);
        I = b.map(b.functorArray)(l.intToNat)(g.range(0)(I - 1 | 0));
        I = r.sequence(r.traversableArray)(w.applicativeEffect)(b.map(b.functorArray)(F)(I))();
        return g.catMaybes(I);
      };
    })(v);
    if (v instanceof d.Nothing) return k.pure(w.applicativeEffect)(n.mempty(n.monoidArray));
    if (v instanceof d.Just) return v.value0;
    throw Error("Failed pattern match at Web.DOM.Document.XPath (line 117, column 18 - line 119, column 24): " + [v.constructor.name]);
  };

  c.lookupNamespaceURI = function (A) {
    return function (v) {
      return m.toMaybe(f.lookupNamespaceURIInternal(A)(v));
    };
  };

  c.defaultNSResolver = function (A) {
    return function (v) {
      var F = function F(G) {
        return function () {
          var I = z.documentElement(G)();
          if (I instanceof d.Nothing) return A;
          if (I instanceof d.Just) return t.toNode(I.value0);
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 170, column 14 - line 172, column 40): " + [I.constructor.name]);
        };
      };

      return function () {
        var G = p.ownerDocument(A)(),
            I = function () {
          if (G instanceof d.Nothing) {
            var H = z.fromNode(A);
            if (H instanceof d.Nothing) return A;
            if (H instanceof d.Just) return F(H.value0)();
            throw Error("Failed pattern match at Web.DOM.Document.XPath (line 161, column 16 - line 163, column 57): " + [H.constructor.name]);
          }

          if (G instanceof d.Just) return F(G.value0)();
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 160, column 19 - line 164, column 35): " + [G.constructor.name]);
        }();

        return f.createNSResolver(I)(v);
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
      n = a["Data.Functor"],
      l = a["Data.Maybe"],
      m = a["Data.Traversable"],
      r = a["Data.XPath"],
      w = a.Effect,
      z = a["Effect.Exception"],
      u = a["Web.DOM.DOMParser"],
      t = a["Web.DOM.Document"],
      p = a["Web.DOM.Document.XPath"],
      y = a["Web.DOM.Document.XPath.ResultType"],
      x = a["Web.DOM.Element"],
      A = a["Web.DOM.HTMLCollection"],
      v = r.pathAppendNSx(r.stringXPath)(r.root(r.stringXPath))("record");
  a = r.pathAppendNSx(r.stringXPath)(v)("relatedIdentifier");
  var F = r.pathAppendNSx(r.stringXPath)(v)("supplementaryProducts");
  F = r.pathAppendNSx(r.stringXPath)(F)("supplementaryProduct");

  var G = function G(N) {
    return function (O) {
      return {
        any: function any(J) {
          return function (Q) {
            return function (q) {
              return p.evaluate(Q)(J)(O)(q)(l.Nothing.value)(N);
            };
          };
        },
        num: function num(J) {
          return function (Q) {
            return p.evaluateNumber(Q)(J)(O)(l.Nothing.value)(N);
          };
        },
        str: function str(J) {
          return function (Q) {
            return p.evaluateString(Q)(J)(O)(l.Nothing.value)(N);
          };
        },
        bool: function bool(J) {
          return function (Q) {
            return p.evaluateBoolean(Q)(J)(O)(l.Nothing.value)(N);
          };
        },
        nodeMay: function nodeMay(J) {
          return function (Q) {
            return k.bind(w.bindEffect)(p.evaluate(Q)(J)(O)(y.any_unordered_node_type)(l.Nothing.value)(N))(p.singleNodeValue);
          };
        }
      };
    };
  },
      I = g["cons'"]("http://ourdomain.cornell.edu/reuse/v.01")([]),
      H = function H(N) {
    var O = function O(J) {
      return function () {
        var Q = t.getElementsByTagNameNS(new l.Just(J))("record")(N)();
        return A.item(0)(Q)();
      };
    };

    return function () {
      var J = t.getElementsByTagName("record")(N)();
      J = A.item(0)(J)();
      if (J instanceof l.Nothing) J = m.sequence(b.traversableNonEmptyArray)(w.applicativeEffect)(n.map(b.functorNonEmptyArray)(O)(I))(), J = k.join(l.bindMaybe)(d.find(b.foldableNonEmptyArray)(l.isJust)(J));else if (J instanceof l.Just) J = new l.Just(J.value0);else throw Error("Failed pattern match at Metajelo.XPaths (line 275, column 16 - line 279, column 38): " + [J.constructor.name]);
      return n.map(l.functorMaybe)(x.toNode)(J);
    };
  };

  g = r.pathAppendNSx(r.stringXPath)(v)("lastModified");

  var B = r.pathAppendNSx(r.stringXPath)(v)("identifier"),
      K = r.pathAppend(r.stringXPath)(B)(r.at(r.stringXPath)("identifierType")),
      X = function X(N) {
    var O = function O(J) {
      return l.fromMaybe("http://ourdomain.cornell.edu/reuse/v.01")(J);
    };

    if (N instanceof l.Nothing) return f.pure(w.applicativeEffect)("http://ourdomain.cornell.edu/reuse/v.01");
    if (N instanceof l.Just) return n.map(w.functorEffect)(O)(x.getAttribute("xmlns")(N.value0));
    throw Error("Failed pattern match at Metajelo.XPaths (line 183, column 3 - line 185, column 59): " + [N.constructor.name]);
  },
      D = function D(N) {
    return function (O) {
      var J = function J(Q) {
        return function (q) {
          return function (U) {
            U = p.lookupNamespaceURI(Q)(U);
            if (U instanceof l.Nothing) return q;
            if (U instanceof l.Just) return U.value0;
            throw Error("Failed pattern match at Metajelo.XPaths (line 200, column 39 - line 202, column 20): " + [U.constructor.name]);
          };
        };
      };

      return function () {
        var Q = p.defaultNSResolver(N)(O)(),
            q = x.fromNode(N);
        q = X(q)();
        return p.customNSResolver(J(Q)(q));
      };
    };
  };

  r = r.pathAppendNSx(r.stringXPath)(v)("date");
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
  c.idTypeRootAP = K;
  c.idRootP = B;
  c.dateRootP = r;
  c.lastModRootP = g;
  c.relIdRootP = a;
  c.sProdRootP = F;

  c.getDefaultParseEnv = function (N) {
    return function () {
      var O = u.makeDOMParser();
      O = u.parseXMLFromString(N)(O)();
      if (O instanceof e.Left) O = z["throw"]("XML parsing error: " + O.value0)();else if (O instanceof e.Right) O = O.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 243, column 13 - line 245, column 26): " + [O.constructor.name]);
      var J = H(O)();
      if (J instanceof l.Nothing) J = z["throw"]("Could not find <record> node!")();else if (J instanceof l.Just) J = J.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 247, column 14 - line 249, column 23): " + [J.constructor.name]);
      var Q = x.fromNode(J);
      if (Q instanceof l.Nothing) Q = z["throw"]("<record> node could not be cast to an element!")();else if (Q instanceof l.Just) Q = Q.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 250, column 14 - line 252, column 23): " + [Q.constructor.name]);
      var q = X(new l.Just(Q))(),
          U = D(J)(O)();
      U = G(O)(new l.Just(U));
      return {
        doc: O,
        ns: q,
        recNode: J,
        recElem: Q,
        xeval: U,
        xevalRoot: {
          any: U.any(J),
          num: U.num(J),
          str: U.str(J),
          bool: U.bool(J),
          nodeMay: U.nodeMay(J)
        }
      };
    };
  };

  c.unsafeSingleNodeValue = function (N) {
    return function (O) {
      return function (J) {
        return function () {
          var Q = N.xeval.nodeMay(O)(J)();
          if (Q instanceof l.Just) return Q.value0;
          if (Q instanceof l.Nothing) return z["throw"]("Couldn't find required node at: " + J)();
          throw Error("Failed pattern match at Metajelo.XPaths (line 292, column 3 - line 294, column 40): " + [Q.constructor.name]);
        };
      };
    };
  };
})(PS);

(function (a) {
  a.toArray = function (c) {
    return function () {
      return [].slice.call(c);
    };
  };
})(PS["Web.DOM.NodeList"] = PS["Web.DOM.NodeList"] || {});

(function (a) {
  a["Web.DOM.NodeList"] = a["Web.DOM.NodeList"] || {};
  a["Web.DOM.NodeList"].toArray = a["Web.DOM.NodeList"].toArray;
})(PS);

(function (a) {
  a["Metajelo.XPaths.Read"] = a["Metajelo.XPaths.Read"] || {};

  var c = a["Metajelo.XPaths.Read"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Data.Array"],
      e = a["Data.Array.NonEmpty"],
      d = a["Data.Either"],
      n = a["Data.Functor"],
      l = a["Data.Maybe"],
      m = a["Data.String.Common"],
      r = a["Data.String.NonEmpty.Internal"],
      w = a["Data.String.Utils"],
      z = a["Data.Traversable"],
      u = a["Data.XPath"],
      t = a.Effect,
      p = a["Effect.Exception"],
      y = a["Metajelo.Types"],
      x = a["Metajelo.XPaths"],
      A = a["Text.Email.Validate"],
      v = a["Text.URL.Validate"],
      F = a["Web.DOM.Document.XPath"],
      G = a["Web.DOM.Document.XPath.ResultType"],
      I = a["Web.DOM.Element"],
      H = a["Web.DOM.Node"],
      B = a["Web.DOM.NodeList"],
      K = function K(L) {
    if (L instanceof d.Right) return f.pure(t.applicativeEffect)(L.value0);
    if (L instanceof d.Left) return p["throw"](L.value0);
    throw Error("Failed pattern match at Metajelo.XPaths.Read (line 444, column 19 - line 446, column 24): " + [L.constructor.name]);
  },
      X = function X(L) {
    return "Audiovisual" === L ? f.pure(d.applicativeEither)(y.Audiovisual.value) : "Dataset" === L ? f.pure(d.applicativeEither)(y.Dataset.value) : "Event" === L ? f.pure(d.applicativeEither)(y.Event.value) : "Image" === L ? f.pure(d.applicativeEither)(y.Image.value) : "InteractiveResource" === L ? f.pure(d.applicativeEither)(y.InteractiveResource.value) : "Model" === L ? f.pure(d.applicativeEither)(y.Model.value) : "PhysicalObject" === L ? f.pure(d.applicativeEither)(y.PhysicalObject.value) : "ResourceCollection" === L ? f.pure(d.applicativeEither)(y.ResourceCollection.value) : "Service" === L ? f.pure(d.applicativeEither)(y.Service.value) : "Software" === L ? f.pure(d.applicativeEither)(y.Software.value) : "Sound" === L ? f.pure(d.applicativeEither)(y.Sound.value) : "Text" === L ? f.pure(d.applicativeEither)(y.Text.value) : "Workflow" === L ? f.pure(d.applicativeEither)(y.Workflow.value) : "Other" === L ? f.pure(d.applicativeEither)(y.Other.value) : d.Left.create("Unknown ResourceTypeGeneral: '" + (L + "'"));
  },
      D = function D(L) {
    return function (la) {
      return function () {
        var na = x.unsafeSingleNodeValue(L)(la)(u.xx(u.stringXPath)(x.resTypeP))(),
            ja = L.xeval.str(na)(".")();
        na = L.xeval.str(na)(u.at(u.stringXPath)(x.resTypeGenAT))();
        na = K(X(na))();
        return {
          description: ja,
          generalType: na
        };
      };
    };
  },
      N = function N(L) {
    return "IsCitedBy" === L ? f.pure(d.applicativeEither)(y.IsCitedBy.value) : "Cites" === L ? f.pure(d.applicativeEither)(y.Cites.value) : "IsSupplementTo" === L ? f.pure(d.applicativeEither)(y.IsSupplementTo.value) : "IsSupplementedBy" === L ? f.pure(d.applicativeEither)(y.IsSupplementedBy.value) : "IsContinuedBy" === L ? f.pure(d.applicativeEither)(y.IsContinuedBy.value) : "Continues" === L ? f.pure(d.applicativeEither)(y.Continues.value) : "IsNewVersionOf" === L ? f.pure(d.applicativeEither)(y.IsNewVersionOf.value) : "IsPreviousVersionOf" === L ? f.pure(d.applicativeEither)(y.IsPreviousVersionOf.value) : "IsPartOf" === L ? f.pure(d.applicativeEither)(y.IsPartOf.value) : "HasPart" === L ? f.pure(d.applicativeEither)(y.HasPart.value) : "IsReferencedBy" === L ? f.pure(d.applicativeEither)(y.IsReferencedBy.value) : "References" === L ? f.pure(d.applicativeEither)(y.References.value) : "IsDocumentedBy" === L ? f.pure(d.applicativeEither)(y.IsDocumentedBy.value) : "Documents" === L ? f.pure(d.applicativeEither)(y.Documents.value) : "IsCompiledBy" === L ? f.pure(d.applicativeEither)(y.IsCompiledBy.value) : "Compiles" === L ? f.pure(d.applicativeEither)(y.Compiles.value) : "IsVariantFormOf" === L ? f.pure(d.applicativeEither)(y.IsVariantFormOf.value) : "IsOriginalFormOf" === L ? f.pure(d.applicativeEither)(y.IsOriginalFormOf.value) : "IsIdenticalTo" === L ? f.pure(d.applicativeEither)(y.IsIdenticalTo.value) : "HasMetadata" === L ? f.pure(d.applicativeEither)(y.HasMetadata.value) : "IsMetadataFor" === L ? f.pure(d.applicativeEither)(y.IsMetadataFor.value) : "Reviews" === L ? f.pure(d.applicativeEither)(y.Reviews.value) : "IsReviewedBy" === L ? f.pure(d.applicativeEither)(y.IsReviewedBy.value) : "IsDerivedFrom" === L ? f.pure(d.applicativeEither)(y.IsDerivedFrom.value) : "IsSourceOf" === L ? f.pure(d.applicativeEither)(y.IsSourceOf.value) : d.Left.create("Unknown RelationType: '" + (L + "'"));
  },
      O = function O(L) {
    return "Access" === L ? f.pure(d.applicativeEither)(new l.Just(y.Access.value)) : "Collection" === L ? f.pure(d.applicativeEither)(new l.Just(y.Collection.value)) : "Data" === L ? f.pure(d.applicativeEither)(new l.Just(y.Data.value)) : "Metadata" === L ? f.pure(d.applicativeEither)(new l.Just(y.Metadata.value)) : "Preservation" === L ? f.pure(d.applicativeEither)(new l.Just(y.Preservation.value)) : "Submission" === L ? f.pure(d.applicativeEither)(new l.Just(y.Submission.value)) : "Quality" === L ? f.pure(d.applicativeEither)(new l.Just(y.Quality.value)) : "Terms of Use" === L ? f.pure(d.applicativeEither)(new l.Just(y.TermsOfUse.value)) : "" === L ? f.pure(d.applicativeEither)(l.Nothing.value) : d.Left.create("Unknown PolicyType: '" + (L + "'"));
  },
      J = function J(L) {
    return function (la) {
      la = r.fromString(m.trim(la));
      if (la instanceof l.Nothing) return d.Left.create("Empty string found for " + L);
      if (la instanceof l.Just) return new d.Right(la.value0);
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 57, column 3 - line 59, column 26): " + [la.constructor.name]);
    };
  },
      Q = function Q(L) {
    return function () {
      var la = L.xevalRoot.str(x.lastModRootP)();
      return K(J("ModDate")(la))();
    };
  },
      q = function q(L) {
    return "commercial" === L ? f.pure(d.applicativeEither)(y.Commercial.value) : "non-profit" === L ? f.pure(d.applicativeEither)(y.NonProfit.value) : "governmental" === L ? f.pure(d.applicativeEither)(y.Governmental.value) : d.Left.create("Unknown InstitutionType: '" + (L + "'"));
  },
      U = function U(L) {
    return "dataCustodian" === L ? f.pure(d.applicativeEither)(new l.Just(y.DataCustodian.value)) : "" === L ? f.pure(d.applicativeEither)(l.Nothing.value) : d.Left.create("Unknown InstitutionContactType: '" + (L + "'"));
  },
      da = function da(L) {
    return "ARK" === L ? f.pure(d.applicativeEither)(y.ARK.value) : "arXiv" === L ? f.pure(d.applicativeEither)(y.ArXiv.value) : "bibcode" === L ? f.pure(d.applicativeEither)(y.Bibcode.value) : "DOI" === L ? f.pure(d.applicativeEither)(y.DOI.value) : "EAN13" === L ? f.pure(d.applicativeEither)(y.EAN13.value) : "EISSN" === L ? f.pure(d.applicativeEither)(y.EISSN.value) : "Handle" === L ? f.pure(d.applicativeEither)(y.Handle.value) : "IGSN" === L ? f.pure(d.applicativeEither)(y.IGSN.value) : "ISBN" === L ? f.pure(d.applicativeEither)(y.ISBN.value) : "ISSN" === L ? f.pure(d.applicativeEither)(y.ISSN.value) : "ISTC" === L ? f.pure(d.applicativeEither)(y.ISTC.value) : "LISSN" === L ? f.pure(d.applicativeEither)(y.LISSN.value) : "LSID" === L ? f.pure(d.applicativeEither)(y.LSID.value) : "PMID" === L ? f.pure(d.applicativeEither)(y.PMID.value) : "PURL" === L ? f.pure(d.applicativeEither)(y.PURL.value) : "UPC" === L ? f.pure(d.applicativeEither)(y.UPC.value) : "URL" === L ? f.pure(d.applicativeEither)(y.URL.value) : "URN" === L ? f.pure(d.applicativeEither)(y.URN.value) : d.Left.create("Unknown IdentifierType: '" + (L + "'"));
  },
      R = function R(L) {
    return function (la) {
      var na = function na(E) {
        return function () {
          var Y = L.xeval.str(E)(u.at(u.stringXPath)(x.idTypeAT))();
          return K(da(Y))();
        };
      },
          ja = function ja(E) {
        return function () {
          var Y = L.xeval.str(E)(".")();
          return K(J("InstitutionID")(Y))();
        };
      };

      return function () {
        var E = x.unsafeSingleNodeValue(L)(la)(u.xx(u.stringXPath)(x.instIdP))(),
            Y = ja(E)();
        E = na(E)();
        return {
          id: Y,
          idType: E
        };
      };
    };
  },
      V = function V(L) {
    var la = function la(Y) {
      return function () {
        var ka = L.xeval.str(Y)(u.at(u.stringXPath)(x.relTypeAT))();
        return K(N(ka))();
      };
    },
        na = function na(Y) {
      return function () {
        var ka = L.xeval.str(Y)(u.at(u.stringXPath)(x.relIdTypeAT))();
        return K(da(ka))();
      };
    },
        ja = function ja(Y) {
      return function () {
        var ka = L.xeval.str(Y)(".")();
        return K(J("RelatedIdentifier")(ka))();
      };
    },
        E = function E(Y) {
      return function () {
        var ka = ja(Y)(),
            qa = na(Y)(),
            sa = la(Y)();
        return {
          id: ka,
          idType: qa,
          relType: sa
        };
      };
    };

    return function () {
      var Y = L.xevalRoot.any(x.relIdRootP)(G.ordered_node_snapshot_type)();
      Y = F.snapshot(Y)();
      Y = z.sequence(z.traversableArray)(t.applicativeEffect)(n.map(n.functorArray)(E)(Y))();
      Y = e.fromArray(Y);
      if (Y instanceof l.Just) return Y.value0;
      if (Y instanceof l.Nothing) return p["throw"]("At least one relatedIdentifier is required!")();
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 107, column 3 - line 109, column 67): " + [Y.constructor.name]);
    };
  },
      ba = function ba(L) {
    return function (la) {
      var na = function na(Y) {
        return function () {
          var ka = L.xeval.str(Y)(u.at(u.stringXPath)(x.resIdTypeAT))();
          return K(da(ka))();
        };
      },
          ja = function ja(Y) {
        return function () {
          var ka = L.xeval.str(Y)(".")();
          return K(J("ResourceID")(ka))();
        };
      },
          E = function E(Y) {
        return function (ka) {
          return z.sequence(z.traversableMaybe)(t.applicativeEffect)(g.bind(l.bindMaybe)(Y)(function (qa) {
            return g.bind(l.bindMaybe)(ka)(function (sa) {
              return f.pure(l.applicativeMaybe)(k.lift2(t.applyEffect)(function (ya) {
                return function (Fa) {
                  return {
                    id: ya,
                    idType: Fa
                  };
                };
              })(qa)(sa));
            });
          }));
        };
      };

      return function () {
        var Y = L.xeval.nodeMay(la)(u.xx(u.stringXPath)(x.resIdP))(),
            ka = n.map(l.functorMaybe)(ja)(Y);
        Y = n.map(l.functorMaybe)(na)(Y);
        return E(ka)(Y)();
      };
    };
  },
      fa = function fa(L) {
    return function () {
      var la = L.xevalRoot.str(x.idRootP)();
      la = K(J("Identifier")(la))();
      var na = L.xevalRoot.str(x.idTypeRootAP)();
      na = K(da(na))();
      return {
        id: la,
        idType: na
      };
    };
  },
      ca = function ca(L) {
    return function (la) {
      var na = function na(ja) {
        return function () {
          var E = L.xeval.str(ja)(".")();
          return K(J("Format")(E))();
        };
      };

      return function () {
        var ja = L.xeval.any(la)(u.pathAppendNSx(u.stringXPath)(u.xx(u.stringXPath)(x.formatCP))(x.formatP))(G.ordered_node_snapshot_type)();
        ja = F.snapshot(ja)();
        return z.sequence(z.traversableArray)(t.applicativeEffect)(n.map(n.functorArray)(na)(ja))();
      };
    };
  },
      ia = function ia(L) {
    return function () {
      var la = L.xevalRoot.str(x.dateRootP)();
      return K(J("Date")(la))();
    };
  },
      Z = function Z(L) {
    return "0" === L ? f.pure(d.applicativeEither)(!1) : "1" === L ? f.pure(d.applicativeEither)(!0) : "false" === L ? f.pure(d.applicativeEither)(!1) : "true" === L ? f.pure(d.applicativeEither)(!0) : d.Left.create("Invalid xs:boolean value: '" + (L + "'"));
  },
      ea = function ea(L) {
    return "" === L ? f.pure(d.applicativeEither)(l.Nothing.value) : n.map(d.functorEither)(l.Just.create)(Z(L));
  },
      ta = function ta(L) {
    return function (la) {
      var na = u.pathAppendNSx(u.stringXPath)(u.xx(u.stringXPath)(x.instPolicyCP))(x.instPolicyP),
          ja = function ja(E) {
        return function () {
          var Y = H.childNodes(E)();
          Y = B.toArray(Y)();
          Y = b.head(b.filter(function (Ba) {
            return !w.startsWith("#")(H.nodeName(Ba));
          })(Y));
          if (Y instanceof l.Just) var ka = Y.value0;else if (Y instanceof l.Nothing) ka = p["throw"]("Couldn't find child node of " + H.nodeName(E))();else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 390, column 30 - line 392, column 80): " + [Y.constructor.name]);
          var qa = L.xeval.str(ka)(".")(),
              sa = K(J("Policy")(qa))();

          Y = function () {
            var Ba = n.map(l.functorMaybe)(I.localName)(I.fromNode(ka));
            if (Ba instanceof l.Just && Ba.value0 === x.freeTextPolicyP) return new y.FreeTextPolicy(sa);

            if (Ba instanceof l.Just && Ba.value0 === x.refPolicyP) {
              Ba = v.parsePublicURL(qa);
              if (Ba instanceof d.Left) return p["throw"]("In refPolicy URL parsing: " + Ba.value0)();
              if (Ba instanceof d.Right) return new y.RefPolicy(Ba.value0);
              throw Error("Failed pattern match at Metajelo.XPaths.Read (line 397, column 37 - line 399, column 45): " + [Ba.constructor.name]);
            }

            if (Ba instanceof l.Just) return p["throw"]("invalid element '" + (Ba.value0 + "' as child of institutionPolicy"))();
            if (Ba instanceof l.Nothing) return p["throw"]("unable to convert policy child Node with name '" + (H.nodeName(ka) + "' to an Element"))();
            throw Error("Failed pattern match at Metajelo.XPaths.Read (line 395, column 17 - line 403, column 56): " + [Ba.constructor.name]);
          }();

          var ya = L.xeval.str(E)(u.at(u.stringXPath)(x.polTypeAT))();
          ya = K(O(ya))();
          var Fa = L.xeval.str(E)(u.at(u.stringXPath)(x.appliesToProdAT))();
          Fa = K(ea(Fa))();
          return {
            policy: Y,
            policyType: ya,
            appliesToProduct: Fa
          };
        };
      };

      return function () {
        var E = L.xeval.any(la)(na)(G.ordered_node_snapshot_type)();
        E = F.snapshot(E)();
        E = z.sequence(z.traversableArray)(t.applicativeEffect)(n.map(n.functorArray)(ja)(E))();
        E = e.fromArray(E);
        if (E instanceof l.Just) return E.value0;
        if (E instanceof l.Nothing) return p["throw"]("At least one institutionPolicy is required!")();
        throw Error("Failed pattern match at Metajelo.XPaths.Read (line 377, column 3 - line 379, column 67): " + [E.constructor.name]);
      };
    };
  },
      M = function M(L) {
    return function (la) {
      var na = function na(E) {
        return function () {
          var Y = L.xeval.str(E)(u.xx(u.stringXPath)(x.pubYearP))();
          return K(J("PubYear")(Y))();
        };
      },
          ja = u.xx(u.stringXPath)(x.basicMetaP);

      return function () {
        var E = x.unsafeSingleNodeValue(L)(la)(ja)(),
            Y = L.xeval.str(E)(u.xx(u.stringXPath)(x.titleP))(),
            ka = L.xeval.str(E)(u.xx(u.stringXPath)(x.creatorP))();
        Y = K(J("Title")(Y))();
        ka = K(J("Creator")(ka))();
        E = na(E)();
        return {
          title: Y,
          creator: ka,
          publicationYear: E
        };
      };
    };
  },
      W = function W(L) {
    return function (la) {
      return function (na) {
        return function () {
          var ja = L.xeval.str(na)(la)();
          ja = v.parsePublicURL(ja);
          if (ja instanceof d.Left) return p["throw"](ja.value0)();
          if (ja instanceof d.Right) return ja.value0;
          throw Error("Failed pattern match at Metajelo.XPaths.Read (line 438, column 3 - line 440, column 26): " + [ja.constructor.name]);
        };
      };
    };
  },
      C = function C(L) {
    return function (la) {
      var na = function na(ka) {
        return function () {
          var qa = ka();
          return K(J("SuperOrg")(qa))();
        };
      },
          ja = function ja(ka) {
        return function () {
          var qa = L.xeval.nodeMay(ka)(u.xx(u.stringXPath)(x.superOrgNameP))();
          return z.sequence(z.traversableMaybe)(t.applicativeEffect)(n.map(l.functorMaybe)(function (sa) {
            return na(L.xeval.str(sa)("."));
          })(qa))();
        };
      },
          E = function E(ka) {
        return function () {
          var qa = x.unsafeSingleNodeValue(L)(ka)(u.xx(u.stringXPath)(x.instSustainP))(),
              sa = W(L)(u.xx(u.stringXPath)(x.missionUrlP))(qa)();
          qa = W(L)(u.xx(u.stringXPath)(x.fundingUrlP))(qa)();
          return {
            missionStatementURL: sa,
            fundingStatementURL: qa
          };
        };
      },
          Y = function Y(ka) {
        var qa = u.xx(u.stringXPath)(x.instContactP);
        return function () {
          var sa = x.unsafeSingleNodeValue(L)(ka)(qa)(),
              ya = L.xeval.str(sa)(u.at(u.stringXPath)(x.instContactTypeAT))();
          ya = K(U(ya))();
          sa = L.xeval.str(sa)(".")();
          sa = A.validate(sa);
          if (sa instanceof d.Left) sa = p["throw"]("Error in validating email address for InstitutionContact: " + sa.value0)();else if (sa instanceof d.Right) sa = sa.value0;else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 341, column 23 - line 345, column 28): " + [sa.constructor.name]);
          return {
            emailAddress: sa,
            contactType: ya
          };
        };
      };

      return function () {
        var ka = x.unsafeSingleNodeValue(L)(la)(u.xx(u.stringXPath)(x.locP))(),
            qa = R(L)(ka)(),
            sa = g.join(t.bindEffect)(n.mapFlipped(t.functorEffect)(L.xeval.str(ka)(u.xx(u.stringXPath)(x.instNameP)))(function (T) {
          return K(J("Institution Name")(T));
        }))(),
            ya = L.xeval.str(ka)(u.xx(u.stringXPath)(x.instTypeP))();
        ya = K(q(ya))();
        var Fa = ja(ka)(),
            Ba = Y(ka)(),
            Na = E(ka)(),
            La = ta(L)(ka)();
        ka = L.xeval.str(ka)(u.xx(u.stringXPath)(x.versioningP))();
        ka = K(Z(ka))();
        return {
          institutionID: qa,
          institutionName: sa,
          institutionType: ya,
          superOrganizationName: Fa,
          institutionContact: Ba,
          institutionSustainability: Na,
          institutionPolicies: La,
          versioning: ka
        };
      };
    };
  },
      S = function S(L) {
    return function (la) {
      var na = function na(E) {
        return function () {
          var Y = L.xeval.str(E)(u.at(u.stringXPath)(x.relTypeAT))();
          return K(N(Y))();
        };
      },
          ja = function ja(E) {
        return function (Y) {
          return z.sequence(z.traversableMaybe)(t.applicativeEffect)(g.bind(l.bindMaybe)(E)(function (ka) {
            return g.bind(l.bindMaybe)(Y)(function (qa) {
              return f.pure(l.applicativeMaybe)(k.lift2(t.applyEffect)(function (sa) {
                return function (ya) {
                  return {
                    url: sa,
                    relationType: ya
                  };
                };
              })(ka)(qa));
            });
          }));
        };
      };

      return function () {
        var E = L.xeval.nodeMay(la)(u.xx(u.stringXPath)(x.resMetaSourceP))(),
            Y = n.map(l.functorMaybe)(W(L)("."))(E);
        E = n.map(l.functorMaybe)(na)(E);
        return ja(Y)(E)();
      };
    };
  },
      P = function P(L) {
    var la = function la(na) {
      return function () {
        var ja = M(L)(na)(),
            E = ba(L)(na)(),
            Y = D(L)(na)(),
            ka = ca(L)(na)(),
            qa = S(L)(na)(),
            sa = C(L)(na)();
        return {
          basicMetadata: ja,
          resourceID: E,
          resourceType: Y,
          format: ka,
          resourceMetadataSource: qa,
          location: sa
        };
      };
    };

    return function () {
      var na = L.xevalRoot.any(x.sProdRootP)(G.ordered_node_snapshot_type)();
      na = F.snapshot(na)();
      na = z.sequence(z.traversableArray)(t.applicativeEffect)(n.map(n.functorArray)(la)(na))();
      na = e.fromArray(na);
      if (na instanceof l.Just) return na.value0;
      if (na instanceof l.Nothing) return p["throw"]("At least one SupplementaryProduct is required!")();
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 165, column 3 - line 167, column 70): " + [na.constructor.name]);
    };
  };

  c.readRecord = function (L) {
    return function () {
      var la = fa(L)(),
          na = ia(L)(),
          ja = Q(L)(),
          E = V(L)(),
          Y = P(L)();
      return {
        identifier: la,
        date: na,
        lastModified: ja,
        relatedIdentifiers: E,
        supplementaryProducts: Y
      };
    };
  };

  c.readIdentifierType = da;
  c.readRelationType = N;
  c.readResourceTypeGeneral = X;
  c.readInstitutionType = q;
  c.readInstitutionContactType = U;
  c.readPolicyType = O;
  c.readBoolean = Z;
  c.rightOrThrow = K;
})(PS);

(function (a) {
  a.unsafeGet = function (c) {
    return function (f) {
      return function () {
        return f[c];
      };
    };
  };
})(PS["React.SyntheticEvent"] = PS["React.SyntheticEvent"] || {});

(function (a) {
  a["React.SyntheticEvent"] = a["React.SyntheticEvent"] || {};
  var c = a["React.SyntheticEvent"],
      f = a["React.SyntheticEvent"],
      k = a["Data.Symbol"];

  a = function (g) {
    return function (b) {
      return function (e) {
        return function (d) {
          return f.unsafeGet(k.reflectSymbol(b)(e))(d);
        };
      };
    };
  }()(new k.IsSymbol(function () {
    return "target";
  }))(k.SProxy.value);

  c.target = a;
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
      n = a["Control.Applicative"],
      l = a["Control.Apply"],
      m = a["Control.Bind"],
      r = a["Control.Cofree"],
      w = a["Data.Array"],
      z = a["Data.Array.NonEmpty"],
      u = a["Data.Bounded"],
      t = a["Data.Date"],
      p = a["Data.Date.Component"],
      y = a["Data.DateTime"],
      x = a["Data.Either"],
      A = a["Data.Enum"],
      v = a["Data.Eq"],
      F = a["Data.Foldable"],
      G = a["Data.Formatter.DateTime"],
      I = a["Data.Functor"],
      H = a["Data.Generic.Rep"],
      B = a["Data.Generic.Rep.Bounded"],
      K = a["Data.Generic.Rep.Enum"],
      X = a["Data.Generic.Rep.Eq"],
      D = a["Data.Generic.Rep.Ord"],
      N = a["Data.Generic.Rep.Show"],
      O = a["Data.Maybe"],
      J = a["Data.Monoid"],
      Q = a["Data.Ord"],
      q = a["Data.Profunctor.Strong"],
      U = a["Data.Semigroup"],
      da = a["Data.Show"],
      R = a["Data.String.Common"],
      V = a["Data.String.NonEmpty.Internal"],
      ba = a["Data.Symbol"],
      fa = a["Data.Time"],
      ca = a["Data.Time.Component"],
      ia = a["Data.Traversable"],
      Z = a["Data.Tuple"],
      ea = a["Data.Unfoldable1"],
      ta = a.Effect,
      M = a["Formless.Internal.Transform"],
      W = a["Formless.Query"],
      C = a["Formless.Retrieve"],
      S = a["Formless.Types.Query"],
      P = a["Metajelo.Types"],
      L = a["Metajelo.Validation"],
      la = a["Metajelo.XPaths.Read"],
      na = a["React.SyntheticEvent"],
      ja = a["Text.URL.Validate"],
      E = a["Web.DOM.Element"],
      Y = function () {
    function aa() {}

    aa.value = new aa();
    return aa;
  }(),
      ka = function () {
    function aa() {}

    aa.value = new aa();
    return aa;
  }(),
      qa = function () {
    function aa(ma) {
      this.value0 = ma;
    }

    aa.create = function (ma) {
      return new aa(ma);
    };

    return aa;
  }(),
      sa = function () {
    function aa(ma) {
      this.value0 = ma;
    }

    aa.create = function (ma) {
      return new aa(ma);
    };

    return aa;
  }(),
      ya = function ya(aa, ma, za) {
    this.fromOptionValue = aa;
    this.toOptionLabel = ma;
    this.toOptionValue = za;
  },
      Fa = function Fa(aa) {
    if (aa instanceof qa || aa instanceof sa) return aa.value0;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 286, column 1 - line 286, column 34): " + [aa.constructor.name]);
  },
      Ba = function Ba(aa) {
    return e.input(k.widgetLiftWidget)([d.value(aa), I.map(g.functorProps)(d.unsafeTargetValue)(d.onChange)]);
  },
      Na = function Na(aa) {
    return m.bind(r.bindCofree(b.widgetAlternative(J.monoidArray)))(aa)(function (ma) {
      return n.pure(r.applicativeCofree(b.widgetAlternative(J.monoidArray)))(V.fromString(R.trim(ma)));
    });
  },
      La = function La(aa) {
    return function (ma) {
      return ma < aa ? [] : w.range(aa)(ma);
    };
  },
      T = function T(aa) {
    return "FreeTextPolicy" === aa ? n.pure(x.applicativeEither)(Y.value) : "RefPolicy" === aa ? n.pure(x.applicativeEither)(ka.value) : x.Left.create("Unknown Policy: '" + (aa + "'"));
  },
      ua = function ua(aa) {
    return function (ma) {
      return F.fold(F.foldableMaybe)(J.monoidString)(I.map(O.functorMaybe)(da.show(aa))(ma));
    };
  };

  a = new ya(function (aa) {
    return O.fromJust()(x.hush(la.readResourceTypeGeneral(aa)));
  }, da.show(P.showResourceTypeGeneral), da.show(P.showResourceTypeGeneral));

  var Ia = new ya(function (aa) {
    return O.fromJust()(x.hush(la.readRelationType(aa)));
  }, da.show(P.showRelationType), da.show(P.showRelationType)),
      Ra = new ya(function (aa) {
    return O.fromJust()(x.hush(la.readInstitutionType(aa)));
  }, da.show(P.showInstitutionType), da.show(P.showInstitutionType)),
      Ma = new ya(function (aa) {
    return O.fromJust()(x.hush(la.readIdentifierType(aa)));
  }, da.show(P.showIdentifierType), da.show(P.showIdentifierType)),
      $a = function $a(aa) {
    return aa instanceof qa ? !0 : !1;
  },
      Sa = function (aa) {
    return function (ma) {
      return function (za) {
        return function (Aa) {
          return function (Ea) {
            return function (Da) {
              return function (ha) {
                return new y.DateTime(t.canonicalDate(O.fromMaybe(u.bottom(p.boundedYear))(A.toEnum(p.boundedEnumYear)(aa)))(O.fromMaybe(u.bottom(p.boundedMonth))(A.toEnum(p.boundedEnumMonth)(ma)))(O.fromMaybe(u.bottom(p.boundedDay))(A.toEnum(p.boundedEnumDay)(za))), new fa.Time(O.fromMaybe(u.bottom(ca.boundedHour))(A.toEnum(ca.boundedEnumHour)(Aa)), O.fromMaybe(u.bottom(ca.boundedMinute))(A.toEnum(ca.boundedEnumMinute)(Ea)), O.fromMaybe(u.bottom(ca.boundedSecond))(A.toEnum(ca.boundedEnumSecond)(Da)), O.fromMaybe(u.bottom(ca.boundedMillisecond))(A.toEnum(ca.boundedEnumMillisecond)(ha))));
              };
            };
          };
        };
      };
    };
  }(0)(0)(0)(0)(0)(0)(0),
      Ha = new H.Generic(function (aa) {
    if (aa instanceof Y) return new H.Inl(H.NoArguments.value);
    if (aa instanceof ka) return new H.Inr(H.NoArguments.value);
    throw Error("Failed pattern match at Metajelo.FormUtil (line 234, column 1 - line 234, column 58): " + [aa.constructor.name]);
  }, function (aa) {
    if (aa instanceof H.Inl) return Y.value;
    if (aa instanceof H.Inr) return ka.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 234, column 1 - line 234, column 58): " + [aa.constructor.name]);
  });

  N = new da.Show(N.genericShow(Ha)(N.genericShowSum(N.genericShowConstructor(N.genericShowArgsNoArguments)(new ba.IsSymbol(function () {
    return "FreeTextPolicy";
  })))(N.genericShowConstructor(N.genericShowArgsNoArguments)(new ba.IsSymbol(function () {
    return "RefPolicy";
  })))));
  N = new ya(function () {
    var aa = O.fromMaybe(Y.value);
    return function (ma) {
      return aa(x.hush(T(ma)));
    };
  }(), da.show(N), da.show(N));

  var ab = new I.Functor(function (aa) {
    return function (ma) {
      if (ma instanceof qa) return qa.create(I.map(O.functorMaybe)(aa)(ma.value0));
      if (ma instanceof sa) return sa.create(I.map(O.functorMaybe)(aa)(ma.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 273, column 1 - line 275, column 48): " + [aa.constructor.name, ma.constructor.name]);
    };
  }),
      Ta = function Ta(aa) {
    return function (ma) {
      return function (za) {
        return f.step(za)(function () {
          var Aa = O.isJust(za) ? !0 : !1;
          return m.bind(b.widgetBind)(e.select(b.widgetMultiAlternative(J.monoidArray))(b.widgetShiftMap)([d.value(O.maybe("")(ma.toOptionValue)(za)), I.map(g.functorProps)(function () {
            var Ea = ma.fromOptionValue;
            return function (Da) {
              return Ea(d.unsafeTargetValue(Da));
            };
          }())(d.onChange)])(w.cons(e.option(b.widgetMultiAlternative(J.monoidArray))(b.widgetShiftMap)([d.disabled(Aa)])([e.text(k.widgetLiftWidget)("Select ...")]))(I.mapFlipped(I.functorArray)(A.upFromIncluding(aa.Enum1())(ea.unfoldable1Array)(u.bottom(aa.Bounded0())))(function (Ea) {
            return e.option(b.widgetMultiAlternative(J.monoidArray))(b.widgetShiftMap)([d.value((0, ma.toOptionValue)(Ea))])([e.text(k.widgetLiftWidget)((0, ma.toOptionLabel)(Ea))]);
          }))))(function (Ea) {
            return n.pure(b.widgetApplicative)(Ta(aa)(ma)(new O.Just(Ea)));
          });
        }());
      };
    };
  },
      Ua = function Ua(aa) {
    return function (ma) {
      return function (za) {
        return function (Aa) {
          return function (Ea) {
            return F.fold(aa)(za)(I.map(ma)(Aa)(Ea));
          };
        };
      };
    };
  },
      Va = function Va(aa) {
    aa = Ua(F.foldableMaybe)(O.functorMaybe)(J.monoidString)(V.toString)(aa);
    aa = f.debounce(J.monoidArray)(500)(aa)(Ba);
    return Na(aa);
  },
      Wa = function Wa(aa) {
    return O.maybe(J.mempty(b.widgetMonoid(J.monoidArray)))(function (ma) {
      return e.div(b.widgetMultiAlternative(J.monoidArray))(b.widgetShiftMap)([d.style({
        color: "red"
      })])([e.text(k.widgetLiftWidget)(L.toText(aa)(ma))]);
    });
  },
      Xa = new v.Eq(X.genericEq(Ha)(X.genericEqSum(X.genericEqConstructor(X.genericEqNoArguments))(X.genericEqConstructor(X.genericEqNoArguments)))),
      Ya = new Q.Ord(function () {
    return Xa;
  }, function (aa) {
    return function (ma) {
      return D.genericCompare(Ha)(D.genericOrdSum(D.genericOrdConstructor(D.genericOrdNoArguments))(D.genericOrdConstructor(D.genericOrdNoArguments)))(aa)(ma);
    };
  }),
      bb = new A.Enum(function () {
    return Ya;
  }, K.genericPred(Ha)(K.genericEnumSum(K.genericEnumConstructor(K.genericEnumNoArguments))(B.genericTopConstructor(B.genericTopNoArguments))(K.genericEnumConstructor(K.genericEnumNoArguments))(B.genericBottomConstructor(B.genericBottomNoArguments))), K.genericSucc(Ha)(K.genericEnumSum(K.genericEnumConstructor(K.genericEnumNoArguments))(B.genericTopConstructor(B.genericTopNoArguments))(K.genericEnumConstructor(K.genericEnumNoArguments))(B.genericBottomConstructor(B.genericBottomNoArguments))));

  ba = function ba(aa) {
    return function (ma) {
      return ma instanceof O.Nothing ? "(None)" : ua(aa)(ma);
    };
  };

  v = new ya(function (aa) {
    return x.hush(la.readBoolean(aa));
  }, ba(da.showBoolean), ua(da.showBoolean));
  X = new ya(function () {
    var aa = m.join(O.bindMaybe);
    return function (ma) {
      return aa(x.hush(la.readInstitutionContactType(ma)));
    };
  }(), ba(P.showInstitutionContactType), ua(P.showInstitutionContactType));
  P = new ya(function () {
    var aa = m.join(O.bindMaybe);
    return function (ma) {
      return aa(x.hush(la.readPolicyType(ma)));
    };
  }(), ba(P.showPolicyType), ua(P.showPolicyType));

  var cb = function cb(aa) {
    return I.voidRight(b.widgetFunctor)(!aa)(e.input(k.widgetLiftWidget)([d._type("checkbox"), d.checked(aa), d.onChange]));
  },
      Za = function Za(aa) {
    var ma = cb(aa);
    return f.step(aa)(m.bind(b.widgetBind)(ma)(function (za) {
      return n.pure(b.widgetApplicative)(Za(za));
    }));
  },
      db = new u.Bounded(function () {
    return Ya;
  }, B.genericBottom(Ha)(B.genericBottomSum(B.genericBottomConstructor(B.genericBottomNoArguments))), B.genericTop(Ha)(B.genericTopSum(B.genericTopConstructor(B.genericTopNoArguments))));

  B = new A.BoundedEnum(function () {
    return db;
  }, function () {
    return bb;
  }, K.genericCardinality(Ha)(K.genericBoundedEnumSum(K.genericBoundedEnumConstructor(K.genericBoundedEnumNoArguments))(K.genericBoundedEnumConstructor(K.genericBoundedEnumNoArguments))), K.genericFromEnum(Ha)(K.genericBoundedEnumSum(K.genericBoundedEnumConstructor(K.genericBoundedEnumNoArguments))(K.genericBoundedEnumConstructor(K.genericBoundedEnumNoArguments))), K.genericToEnum(Ha)(K.genericBoundedEnumSum(K.genericBoundedEnumConstructor(K.genericBoundedEnumNoArguments))(K.genericBoundedEnumConstructor(K.genericBoundedEnumNoArguments))));

  var eb = new l.Apply(function () {
    return ab;
  }, function (aa) {
    return function (ma) {
      if (aa instanceof qa && ma instanceof qa || aa instanceof qa && ma instanceof sa || aa instanceof sa && ma instanceof qa) return qa.create(l.apply(O.applyMaybe)(aa.value0)(ma.value0));
      if (aa instanceof sa && ma instanceof sa) return sa.create(l.apply(O.applyMaybe)(aa.value0)(ma.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 276, column 1 - line 280, column 63): " + [aa.constructor.name, ma.constructor.name]);
    };
  }),
      fb = new n.Applicative(function () {
    return eb;
  }, function (aa) {
    return qa.create(new O.Just(aa));
  }),
      Pa = function Pa(aa) {
    return function (ma) {
      var za = Z.snd(ma),
          Aa = Z.fst(ma),
          Ea = new qa(O.Nothing.value);

      ma = function () {
        var pa = Q.max(Q.ordInt)(0)(Aa - w.length(za) | 0);
        return U.append(U.semigroupArray)(I.map(I.functorArray)(n.pure(fb))(za))(I.mapFlipped(I.functorArray)(La(1)(pa))(function (ra) {
          return Ea;
        }));
      }();

      var Da = function Da(pa) {
        return f.step(pa)(m.bind(b.widgetBind)(I.voidRight(b.widgetFunctor)(sa.create(Fa(pa)))(e.button(b.widgetMultiAlternative(J.monoidArray))(b.widgetShiftMap)([d.onClick])([e.text(k.widgetLiftWidget)("Delete")])))(function (ra) {
          return n.pure(b.widgetApplicative)(Da(ra));
        }));
      },
          ha = function ha(pa) {
        return e.li_(r.shiftMapCofree(J.monoidArray))([])(m.bind(r.bindCofree(b.widgetAlternative(J.monoidArray)))(aa(Fa(pa)))(function (ra) {
          return m.bind(r.bindCofree(b.widgetAlternative(J.monoidArray)))(Da(new qa(ra)))(function (va) {
            return n.pure(r.applicativeCofree(b.widgetAlternative(J.monoidArray)))(va);
          });
        }));
      },
          oa = function oa(pa) {
        if (pa instanceof sa) return f.step(new sa(O.Nothing.value))(J.mempty(b.widgetMonoid(J.monoidArray)));
        if (pa instanceof qa) return ha(pa);
        throw Error("Failed pattern match at Metajelo.FormUtil (line 307, column 23 - line 309, column 35): " + [pa.constructor.name]);
      };

      return e.div_(r.shiftMapCofree(J.monoidArray))([])(m.bind(r.bindCofree(b.widgetAlternative(J.monoidArray)))(function (pa) {
        return function (ra) {
          return f.loopS(J.monoidArray)(new Z.Tuple(pa, ra))(function (va) {
            return e.ul_(r.shiftMapCofree(J.monoidArray))([])(function () {
              Z.fst(va);
              var wa = Z.snd(va);
              return m.bind(r.bindCofree(b.widgetAlternative(J.monoidArray)))(f.step(0)(I.voidRight(b.widgetFunctor)(n.pure(r.applicativeCofree(b.widgetAlternative(J.monoidArray)))(1))(e.button(b.widgetMultiAlternative(J.monoidArray))(b.widgetShiftMap)([d.onClick])([e.text(k.widgetLiftWidget)("Add item")]))))(function (xa) {
                return m.bind(r.bindCofree(b.widgetAlternative(J.monoidArray)))(ia.traverse(ia.traversableArray)(r.applicativeCofree(b.widgetAlternative(J.monoidArray)))(oa)(wa))(function (Ca) {
                  Ca = w.filter($a)(Ca);
                  var Ja = w.length(Ca) + xa | 0,
                      Ka = I.mapFlipped(I.functorArray)(La(1)(xa))(function (Oa) {
                    return Ea;
                  });
                  return n.pure(r.applicativeCofree(b.widgetAlternative(J.monoidArray)))(Z.Tuple.create(Ja)(U.append(U.semigroupArray)(Ca)(Ka)));
                });
              });
            }());
          });
        };
      }(Aa)(ma))(function (pa) {
        return n.pure(r.applicativeCofree(b.widgetAlternative(J.monoidArray)))(q.second(q.strongFn)(function () {
          var ra = I.map(I.functorArray)(Fa);
          return function (va) {
            return w.catMaybes(ra(va));
          };
        }())(pa));
      }));
    };
  };

  c.menu = function (aa) {
    return function (ma) {
      return function (za) {
        return function (Aa) {
          return function (Ea) {
            return function (Da) {
              return function (ha) {
                return function (oa) {
                  return function (pa) {
                    return e.select(b.widgetMultiAlternative(J.monoidArray))(b.widgetShiftMap)([d.defaultValue((0, ma.toOptionValue)(C.getInput(aa)(Aa)()(pa)(oa))), I.map(g.functorProps)(function () {
                      var ra = W.set(aa)(Da)()(pa),
                          va = ma.fromOptionValue;
                      return function (wa) {
                        return ra(va(d.unsafeTargetValue(wa)));
                      };
                    }())(d.onChange)])(I.mapFlipped(I.functorArray)(A.upFromIncluding(za.Enum1())(ea.unfoldable1Array)(u.bottom(za.Bounded0())))(function (ra) {
                      return e.option(b.widgetMultiAlternative(J.monoidArray))(b.widgetShiftMap)([d.value((0, ma.toOptionValue)(ra))])([e.text(k.widgetLiftWidget)((0, ma.toOptionLabel)(ra))]);
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

  c.menuSignal = Ta;
  c.textInput = Va;

  c.urlInput = function (aa) {
    if (aa instanceof x.Left) var ma = "";else if (aa instanceof x.Right) ma = V.toString(ja.urlToNEString(aa.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 169, column 15 - line 171, column 48): " + [aa.constructor.name]);
    if (aa instanceof x.Left) var za = aa.value0;else if (aa instanceof x.Right) za = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 165, column 15 - line 167, column 20): " + [aa.constructor.name]);
    return m.bind(r.bindCofree(b.widgetAlternative(J.monoidArray)))(Va(V.fromString(ma)))(function (Aa) {
      var Ea = m.bind(r.bindCofree(b.widgetAlternative(J.monoidArray))),
          Da = n.pure(r.applicativeCofree(b.widgetAlternative(J.monoidArray)));
      if (Aa instanceof O.Nothing) Aa = new x.Left(za);else if (Aa instanceof O.Just) Aa = ja.parsePublicURL(V.toString(Aa.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 156, column 19 - line 158, column 46): " + [Aa.constructor.name]);
      return Ea(Da(Aa))(function (ha) {
        return m.discard(m.discardUnit)(r.bindCofree(b.widgetAlternative(J.monoidArray)))(f.display(function () {
          if (ha instanceof x.Right) return J.mempty(b.widgetMonoid(J.monoidArray));
          if (ha instanceof x.Left) return Wa(L.toTextString)(new O.Just(ha.value0));
          throw Error("Failed pattern match at Metajelo.FormUtil (line 159, column 13 - line 161, column 40): " + [ha.constructor.name]);
        }()))(function () {
          return n.pure(r.applicativeCofree(b.widgetAlternative(J.monoidArray)))(ha);
        });
      });
    });
  };

  c.checkBoxS = Za;
  c.FreeTextPolicy = Y;
  c.RefPolicy = ka;

  c.formSaveButton = function (aa) {
    aa = aa.dirty ? [d.onClick] : [d.disabled(!0)];
    return e.button(b.widgetMultiAlternative(J.monoidArray))(b.widgetShiftMap)(aa)([e.text(k.widgetLiftWidget)("Save")]);
  };

  c.arrayView = Pa;

  c.nonEmptyArrayView = function (aa) {
    return function (ma) {
      return m.bind(r.bindCofree(b.widgetAlternative(J.monoidArray)))(Pa(aa)(q.second(q.strongFn)(Ua(F.foldableMaybe)(O.functorMaybe)(J.monoidArray)(z.toArray))(ma)))(function (za) {
        return n.pure(r.applicativeCofree(b.widgetAlternative(J.monoidArray)))(q.second(q.strongFn)(z.fromArray)(za));
      });
    };
  };

  c.errorDisplay = Wa;

  c.initFormState = function (aa) {
    return function (ma) {
      return function (za) {
        return function (Aa) {
          return function (Ea) {
            return function (Da) {
              return {
                validity: S.Incomplete.value,
                dirty: !1,
                submitting: !1,
                errors: 0,
                submitAttempts: 0,
                form: M.inputFieldsToFormFields()(ma)(za)(Aa)(Ea),
                internal: {
                  initialInputs: Ea,
                  validators: Da,
                  allTouched: !1
                }
              };
            };
          };
        };
      };
    };
  };

  c.formatXsdDate = function (aa) {
    var ma = G.formatDateTime("YYYY-MM-DD")(aa);
    return function () {
      if (ma instanceof x.Left) return new x.Left(ma.value0);

      if (ma instanceof x.Right) {
        var za = V.fromString(ma.value0);
        if (za instanceof O.Nothing) return new x.Left("Empty Date output from formatXsdDate");
        if (za instanceof O.Just) return new x.Right(za.value0);
        throw Error("Failed pattern match at Metajelo.FormUtil (line 413, column 27 - line 415, column 30): " + [za.constructor.name]);
      }

      throw Error("Failed pattern match at Metajelo.FormUtil (line 411, column 15 - line 415, column 30): " + [ma.constructor.name]);
    }();
  };

  c.initDate = Sa;

  c.evTargetElem = function (aa) {
    return I.map(ta.functorEffect)(E.fromNode)(na.target(aa));
  };

  c.isOptionMaybeBoolean = v;
  c.isOptionIdentifierType = Ma;
  c.isOptionInstitutionType = Ra;
  c.isOptionMaybeInstitutionContactType = X;
  c.isOptionMaybePolicyType = P;
  c.isOptionRelationType = Ia;
  c.isOptionResourceTypeGeneral = a;
  c.eqPolPolType = Xa;
  c.boundedEnumPolPolType = B;
  c.isOptionPolPolType = N;
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
      n = a["Control.Category"],
      l = a["Data.Array"],
      m = a["Data.Array.NonEmpty"],
      r = a["Data.Array.NonEmpty.Internal"],
      w = a["Data.Foldable"],
      z = a["Data.Functor"],
      u = a["Data.HeytingAlgebra"],
      t = a["Data.Maybe"],
      p = a["Data.Monoid"],
      y = a["Data.Profunctor.Strong"],
      x = a["Data.Semigroup"],
      A = a["Data.Show"],
      v = a["Data.String.CodePoints"],
      F = a["Data.String.NonEmpty.Internal"],
      G = a["Data.String.Utils"],
      I = a["Data.Unfoldable"],
      H = a["Data.Unfoldable1"],
      B = a["Foreign.Object"],
      K = a["Metajelo.CSS.Common.ClassNames"],
      X = a["Metajelo.CSS.Web.ClassNamesPrivate"],
      D = a["Metajelo.CSS.Web.ClassProps"],
      N = a["Metajelo.CSS.Web.Util"],
      O = a["Metajelo.Types"],
      J = a["Text.Email.Parser"],
      Q = a["Text.URL.Validate"],
      q = function () {
    var P = z.map(z.functorArray)(v.singleton);
    return function (L) {
      return P(v.toCodePointArray(L));
    };
  }(),
      U = function U(P) {
    var L = g.text(P);
    return function (la) {
      return L(F.toString(la));
    };
  },
      da = g["span'"](k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([g.text(f.widgetLiftWidget)(" ")]),
      R = function () {
    var P = w.intercalate(w.foldableArray)(p.monoidArray)([da]),
        L = z.map(z.functorArray)(H.singleton(H.unfoldable1Array));
    return function (la) {
      return P(L(la));
    };
  }(),
      V = function V(P) {
    return g.div(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.institutionPolicy])(R([function (L) {
      var la = function () {
        if (L instanceof t.Nothing) return {
          text: "May apply to product (unverified)",
          cls: X.appliesMaybe
        };
        if (L instanceof t.Just && L.value0) return {
          text: "Applies to product",
          cls: X.appliesYes
        };
        if (L instanceof t.Just && !L.value0) return {
          text: "Does not apply to product",
          cls: X.appliesNo
        };
        throw Error("Failed pattern match at Metajelo.View (line 258, column 10 - line 261, column 75): " + [L.constructor.name]);
      }();

      return g.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([N.cList([K.applies, la.cls])])([function (na) {
        return g.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.appliesInfo])([g.text(f.widgetLiftWidget)(na)]);
      }(la.text)]);
    }(P.appliesToProduct), w.foldMap(w.foldableMaybe)(k.widgetMonoid(p.monoidArray))(function (L) {
      return g["span'"](k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([g.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.policyType])([g.text(f.widgetLiftWidget)(A.show(O.showPolicyType)(L))]), g.text(f.widgetLiftWidget)(" Policy:")]);
    })(P.policyType), function (L) {
      var la = g.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.policy]),
          na = H.singleton(H.unfoldable1Array);
      if (L instanceof O.FreeTextPolicy) L = U(f.widgetLiftWidget)(L.value0);else if (L instanceof O.RefPolicy) L = Q.urlToString(L.value0), L = g.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(L)])([g.text(f.widgetLiftWidget)(L)]);else throw Error("Failed pattern match at Metajelo.View (line 251, column 5 - line 254, column 40): " + [L.constructor.name]);
      return la(na(L));
    }(P.policy)]));
  },
      ba = function ba(P) {
    return g.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.institutionName])([U(f.widgetLiftWidget)(P.institutionName)]);
  },
      fa = function fa(P) {
    return function (L) {
      return w.foldMap(w.foldableMaybe)(p.monoidArray)(n.identity(n.categoryFn))(l.init(L));
    };
  },
      ca = function ca(P) {
    return function (L) {
      return function (la) {
        return function (na) {
          return function (ja) {
            var E = B.fromFoldableWith(P)(x.append(na)),
                Y = z.map(L)(y.fanout(n.categoryFn)(y.strongFn)(ja)(H.singleton(la)));
            return function (ka) {
              return E(Y(ka));
            };
          };
        };
      };
    };
  },
      ia = function ia(P) {
    var L = J.toString(P.emailAddress),
        la = g.text(f.widgetLiftWidget);
    if (P.contactType instanceof t.Nothing) P = ".";else if (P.contactType instanceof t.Just) P = " (" + (A.show(O.showInstitutionContactType)(P.contactType.value0) + ").");else throw Error("Failed pattern match at Metajelo.View (line 185, column 24 - line 187, column 41): " + [P.contactType.constructor.name]);
    la = la(P);
    return g.span_(k.widgetShiftMap)([D.institutionContact])(e.alt(k.widgetAlt(p.monoidArray))(e.alt(k.widgetAlt(p.monoidArray))(g["span'"](k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([g.text(f.widgetLiftWidget)("Institution Contact: ")]))(g.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.contactEmail, b.href("mailto:" + L)])([g.text(f.widgetLiftWidget)(L)])))(g.span_(k.widgetShiftMap)([D.contactType])(la)));
  },
      Z = function Z(P) {
    return g["cite'"](k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([U(f.widgetLiftWidget)(P)]);
  },
      ea = function ea(P) {
    if (P.idType instanceof O.ARK) return g.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(F.toString(P.id))])([Z(P.id)]);

    if (P.idType instanceof O.ArXiv) {
      var L = "https://arxiv.org/abs/" + F.toString(P.id);
      return g.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(L)])([Z(P.id)]);
    }

    if (P.idType instanceof O.Bibcode) return L = "https://ui.adsabs.harvard.edu/abs/" + (F.toString(P.id) + "/abstract"), g.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(L)])([Z(P.id)]);
    if (P.idType instanceof O.DOI) return L = "https://doi.org/" + F.toString(P.id), g.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(L)])([Z(P.id)]);
    if (P.idType instanceof O.EAN13) return Z(P.id);
    if (P.idType instanceof O.EISSN) return L = "https://www.worldcat.org/ISSN/" + F.toString(P.id), g.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(L)])([Z(P.id)]);
    if (P.idType instanceof O.Handle) return L = "http://hdl.handle.net/" + F.toString(P.id), g.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(L)])([Z(P.id)]);
    if (P.idType instanceof O.IGSN) return L = "http://igsn.org/" + F.toString(P.id), g.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(L)])([Z(P.id)]);
    if (P.idType instanceof O.ISBN) return Z(P.id);
    if (P.idType instanceof O.ISSN) return L = "https://www.worldcat.org/ISSN/" + F.toString(P.id), g.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(L)])([Z(P.id)]);
    if (P.idType instanceof O.ISTC) return Z(P.id);
    if (P.idType instanceof O.LISSN) return L = "https://www.worldcat.org/ISSN/" + F.toString(P.id), g.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(L)])([Z(P.id)]);
    if (P.idType instanceof O.LSID) return L = "http://www.lsid.info/resolver/?lsid=" + F.toString(P.id), g.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(L)])([Z(P.id)]);
    if (P.idType instanceof O.PMID) return L = "https://www.ncbi.nlm.nih.gov/pubmed/" + F.toString(P.id), g.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(L)])([Z(P.id)]);
    if (P.idType instanceof O.PURL) return g.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(F.toString(P.id))])([Z(P.id)]);
    if (P.idType instanceof O.UPC) return Z(P.id);
    if (P.idType instanceof O.URL) return g.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(F.toString(P.id))])([Z(P.id)]);
    if (P.idType instanceof O.URN) return Z(P.id);
    throw Error("Failed pattern match at Metajelo.View (line 207, column 1 - line 207, column 47): " + [P.constructor.name]);
  },
      ta = function ta(P) {
    return g.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.identifier])([g.span_(k.widgetShiftMap)([D.idType])(g.text(f.widgetLiftWidget)(A.show(O.showIdentifierType)(P.idType))), g.span_(k.widgetShiftMap)([D.idUrl])(ea(P))]);
  },
      M = function M(P) {
    return g.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.relatedId])([g.span_(k.widgetShiftMap)([D.relType])(g.text(f.widgetLiftWidget)(A.show(O.showRelationType)(P.relType))), da, ta({
      id: P.id,
      idType: P.idType
    })]);
  },
      W = function W(P) {
    return function (L) {
      return function (la) {
        if (L) return P;

        if (w.any(w.foldableArray)(u.heytingAlgebraBoolean)(function (ja) {
          return G.endsWith(ja)(P);
        })([";", ".", ","])) {
          var na = q(P);
          return G.fromCharArray(fa(p.monoidString)(na)) + la;
        }

        return P + la;
      };
    };
  },
      C = function C(P) {
    var L = ba(P),
        la = g["span'"](k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([g.text(f.widgetLiftWidget)("("), g.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.institutionId])([ta(P.institutionID)]), g.text(f.widgetLiftWidget)("; "), g.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.institutionType])([g.text(f.widgetLiftWidget)(A.show(O.showInstitutionType)(P.institutionType))]), g.text(f.widgetLiftWidget)(W(")")(t.isNothing(P.superOrganizationName))(","))]);
    if (P.superOrganizationName instanceof t.Nothing) var na = p.mempty(k.widgetMonoid(p.monoidArray));else if (P.superOrganizationName instanceof t.Just) na = g["span'"](k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([g.text(f.widgetLiftWidget)("a member of "), g.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.superOrg])([g.text(f.widgetLiftWidget)(W(F.toString(P.superOrganizationName.value0))(!1)("."))])]);else throw Error("Failed pattern match at Metajelo.View (line 147, column 7 - line 153, column 10): " + [P.superOrganizationName.constructor.name]);
    return R([L, la, na, ia(P.institutionContact), g.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.sustainability])([g.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.missionStatement, b.href(Q.urlToString(P.institutionSustainability.missionStatementURL))])([g.text(f.widgetLiftWidget)("Mission Statement")]), g.text(f.widgetLiftWidget)("; "), g.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.fundingStatement, b.href(Q.urlToString(P.institutionSustainability.fundingStatementURL))])([g.text(f.widgetLiftWidget)("Funding Statement")]), g.text(f.widgetLiftWidget)(".")]), g.ul(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.institutionPolicies])(z.map(z.functorArray)(function (ja) {
      return g["li'"](k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([V(ja)]);
    })(m.toArray(P.institutionPolicies))), function (ja) {
      if (ja) ja = "Versioned";else {
        if (ja) throw Error("Failed pattern match at Metajelo.View (line 174, column 14 - line 176, column 31): " + [ja.constructor.name]);
        ja = "Unversioned";
      }
      return g.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.versioning])([g.text(f.widgetLiftWidget)(ja)]);
    }(P.versioning)]);
  },
      S = function S(P) {
    if (P.resourceID instanceof t.Just) var L = g.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.resourceId])([ta(P.resourceID.value0), g.text(f.widgetLiftWidget)(".")]);else if (P.resourceID instanceof t.Nothing) L = p.mempty(k.widgetMonoid(p.monoidArray));else throw Error("Failed pattern match at Metajelo.View (line 125, column 17 - line 127, column 24): " + [P.resourceID.constructor.name]);
    var la = [g.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.basicMetadata, D.creator])([U(f.widgetLiftWidget)(P.basicMetadata.creator)]), g.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.basicMetadata, D.pubyear])([U(f.widgetLiftWidget)(P.basicMetadata.publicationYear)]), g.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.basicMetadata, D.title])([g.text(f.widgetLiftWidget)(W(F.toString(P.basicMetadata.title))(t.isNothing(P.resourceID))(","))])];
    L = x.append(x.semigroupArray)(la)([g["span'"](k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([ba(P.location), g.text(f.widgetLiftWidget)(".")]), L]);
    return g.div(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.product])(R(x.append(x.semigroupArray)([g.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.productCitation])([g["cite'"](k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)(R(L))])])(C(P.location))));
  };

  c.spacify = R;

  c.mkRecordWidget = function (P) {
    var L = function () {
      var ja = z.map(r.functorNonEmptyArray)(function (E) {
        return g.li(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.relatedId])([E]);
      })(z.map(r.functorNonEmptyArray)(M)(P.relatedIdentifiers));
      return g.ul(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.relatedIdList])(m.toArray(ja));
    }(),
        la = ca(r.foldableNonEmptyArray)(r.functorNonEmptyArray)(r.unfoldable1NonEmptyArray)(r.semigroupNonEmptyArray)(function (ja) {
      return A.show(O.showResourceTypeGeneral)(ja.resourceType.generalType) + (": " + ja.resourceType.description);
    })(P.supplementaryProducts),
        na = function na(ja) {
      ja = d.join(d.bindArray)(I.fromMaybe(I.unfoldableArray)(z.map(t.functorMaybe)(m.toArray)(B.lookup(ja)(la))));
      var E = g.span_(k.widgetShiftMap)([D.resourceType])(w.fold(w.foldableMaybe)(k.widgetMonoid(p.monoidArray))(z.mapFlipped(t.functorMaybe)(l.head(ja))(function (Y) {
        return e.alt(k.widgetAlt(p.monoidArray))(e.alt(k.widgetAlt(p.monoidArray))(g.span_(k.widgetShiftMap)([D.resourceTypeGen])(g.text(f.widgetLiftWidget)(A.show(O.showResourceTypeGeneral)(Y.resourceType.generalType))))(g.span_(k.widgetShiftMap)([D.resourceTypeDescr])(g.text(f.widgetLiftWidget)(Y.resourceType.description))))(g["br'"](f.widgetLiftWidget));
      })));
      return g["div'"](k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)(l.cons(E)(z.map(z.functorArray)(S)(ja)));
    };

    A.show(O.showIdentifierType)(P.identifier.idType);
    return g.div(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.record])([g.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.productsHeader])([g.span_(k.widgetShiftMap)([D.recordId])(ta(P.identifier))]), g.ul(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.productList])(z.map(z.functorArray)(function (ja) {
      return g.li_(k.widgetShiftMap)([D.productGroup])(na(ja));
    })(B.keys(la))), g.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([D.relatedIdsHeader])([]), L]);
  };

  c.mkSupplementaryProductWidget = S;
  c.locElems = C;
  c.contactWidg = ia;
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
      n = a["Control.Applicative"],
      l = a["Control.Bind"],
      m = a["Control.Cofree"],
      r = a["Data.Either"],
      w = a["Data.Enum"],
      z = a["Data.Eq"],
      u = a["Data.Foldable"],
      t = a["Data.Functor"],
      p = a["Data.Maybe"],
      y = a["Data.Monoid"],
      x = a["Data.Newtype"],
      A = a["Data.Symbol"],
      v = a["Formless.Component"],
      F = a["Formless.Internal.Transform"],
      G = a["Formless.Query"],
      I = a["Formless.Retrieve"],
      H = a["Formless.Transform.Record"],
      B = a["Formless.Transform.Row"],
      K = a["Formless.Types.Form"],
      X = a["Heterogeneous.Mapping"],
      D = a["Metajelo.CSS.UI.ClassProps"],
      N = a["Metajelo.FormUtil"],
      O = a["Metajelo.Types"],
      J = a["Metajelo.Validation"],
      Q = a["Metajelo.View"],
      q = a["Text.Email.Parser"],
      U = {
    email1: J.emailFormat(b.widgetMonad),
    contactType: J.dummy(b.widgetMonad)
  },
      da = function da(ca) {
    return function (ia) {
      return function (Z) {
        return B.mkSProxies()(ia)(Z)(K.FormProxy.value);
      };
    };
  },
      R = new x.Newtype(function (ca) {
    return ca;
  }, function (ca) {
    return ca;
  }),
      V = {
    email1: "",
    contactType: p.Nothing.value
  },
      ba = function ba(ca) {
    if (ca instanceof p.Nothing) return V;
    if (ca instanceof p.Just) return {
      email1: q.toString(ca.value0.emailAddress),
      contactType: ca.value0.contactType
    };
    throw Error("Failed pattern match at Metajelo.Forms.InstitutionContact (line 49, column 1 - line 49, column 57): " + [ca.constructor.name]);
  },
      fa = function fa(ca) {
    return l.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(y.monoidArray))(b.widgetShiftMap)([e.input(k.widgetLiftWidget)([D.contactEmail, d.defaultValue(I.getInput(new A.IsSymbol(function () {
      return "email1";
    }))(R)()(da()(R)(B.makeSProxiesCons(new A.IsSymbol(function () {
      return "contactType";
    }))()(B.makeSProxiesCons(new A.IsSymbol(function () {
      return "email1";
    }))()(B.makeSProxiesNil))).email1)(ca.form)), t.map(g.functorProps)(function () {
      var ia = G.setValidate(new A.IsSymbol(function () {
        return "email1";
      }))(R)()(da()(R)(B.makeSProxiesCons(new A.IsSymbol(function () {
        return "contactType";
      }))()(B.makeSProxiesCons(new A.IsSymbol(function () {
        return "email1";
      }))()(B.makeSProxiesNil))).email1);
      return function (Z) {
        return ia(d.unsafeTargetValue(Z));
      };
    }())(d.onChange)]), N.errorDisplay(J.toTextFieldError)(I.getError(new A.IsSymbol(function () {
      return "email1";
    }))(R)()(da()(R)(B.makeSProxiesCons(new A.IsSymbol(function () {
      return "contactType";
    }))()(B.makeSProxiesCons(new A.IsSymbol(function () {
      return "email1";
    }))()(B.makeSProxiesNil))).email1)(ca.form)), e.span_(b.widgetShiftMap)([D.contactType])(N.menu(new A.IsSymbol(function () {
      return "contactType";
    }))(N.isOptionMaybeInstitutionContactType)(w.boundedEnumMaybe(O.smallBoundedInstitutionContactType)(O.boundedEnumInstitutionContactType))(R)()(R)()(ca.form)(da()(R)(B.makeSProxiesCons(new A.IsSymbol(function () {
      return "contactType";
    }))()(B.makeSProxiesCons(new A.IsSymbol(function () {
      return "email1";
    }))()(B.makeSProxiesNil))).contactType)), e["div'"](b.widgetMultiAlternative(y.monoidArray))(b.widgetShiftMap)([t.voidRight(b.widgetFunctor)(G.submit)(N.formSaveButton(ca))])]))(function (ia) {
      return l.bind(b.widgetBind)(v.eval()()(z.eqRowCons(z.eqRowCons(z.eqRowNil)()(new A.IsSymbol(function () {
        return "email1";
      }))(K.eqInputField(z.eqString)))()(new A.IsSymbol(function () {
        return "contactType";
      }))(K.eqInputField(p.eqMaybe(O.eqInstitutionContactType))))(F.inputFieldsToFormFieldsCons(new A.IsSymbol(function () {
        return "contactType";
      }))()(F.inputFieldsToFormFieldsCons(new A.IsSymbol(function () {
        return "email1";
      }))()(F.inputFieldsToFormFieldsNil)())())(F.inputFieldsToInputCons(new A.IsSymbol(function () {
        return "contactType";
      }))()(F.inputFieldsToInputCons(new A.IsSymbol(function () {
        return "email1";
      }))()(F.inputFieldsToInputNil)())())(F.consCountErrors(new A.IsSymbol(function () {
        return "contactType";
      }))()(F.consCountErrors(new A.IsSymbol(function () {
        return "email1";
      }))()(F.nilCountErrors)))(F.consAllTouched(new A.IsSymbol(function () {
        return "contactType";
      }))()(F.consAllTouched(new A.IsSymbol(function () {
        return "email1";
      }))()(F.nilAllTouched)))(F.setFormFieldsTouchedCons(new A.IsSymbol(function () {
        return "contactType";
      }))()(F.setFormFieldsTouchedCons(new A.IsSymbol(function () {
        return "email1";
      }))()(F.setFormFieldsTouchedNil)())())(F.replaceFormFieldInputsTouchedCons(new A.IsSymbol(function () {
        return "contactType";
      }))(K.newtypeInputField)(K.newtypeFormField)()()()(F.replaceFormFieldInputsTouchedCons(new A.IsSymbol(function () {
        return "email1";
      }))(K.newtypeInputField)(K.newtypeFormField)()()()(F.replaceFormFieldInputsTouchedNil)))(F.modifyAllCons(new A.IsSymbol(function () {
        return "contactType";
      }))(K.newtypeInputFunction)(K.newtypeFormField)()()()(F.modifyAllCons(new A.IsSymbol(function () {
        return "email1";
      }))(K.newtypeInputFunction)(K.newtypeFormField)()()()(F.modifyAllNil)))(F.applyToValidationCons(new A.IsSymbol(function () {
        return "contactType";
      }))(b.widgetMonad)()(R)()()(F.applyToValidationCons(new A.IsSymbol(function () {
        return "email1";
      }))(b.widgetMonad)()(R)()()(F.applyToValidationNil(b.widgetMonad))))(F.formFieldsToMaybeOutputCons(new A.IsSymbol(function () {
        return "contactType";
      }))()(F.formFieldsToMaybeOutputCons(new A.IsSymbol(function () {
        return "email1";
      }))()(F.formFieldsToMaybeOutputNil)())())(R)(R)(R)(R)(R)(R)(R)(R)(b.widgetMonad)(ia)(ca))(function (Z) {
        if (Z instanceof r.Left) return fa(Z.value0);
        if (Z instanceof r.Right) return Z = H.unwrapOutputFields(R)(X.hmapRecord()(X.mapRecordWithIndexCons(new A.IsSymbol(function () {
          return "contactType";
        }))(X.constMapping(H.unwrapField(K.newtypeOutputField)))(X.mapRecordWithIndexCons(new A.IsSymbol(function () {
          return "email1";
        }))(X.constMapping(H.unwrapField(K.newtypeOutputField)))(X.mapRecordWithIndexNil)()())()()))(Z.value0), n.pure(b.widgetApplicative)({
          emailAddress: Z.email1,
          contactType: Z.contactType
        });
        throw Error("Failed pattern match at Metajelo.Forms.InstitutionContact (line 75, column 3 - line 79, column 70): " + [Z.constructor.name]);
      });
    });
  };

  c.contactSignal = function (ca) {
    var ia = function ia(Z) {
      return f.step(Z)(l.bind(b.widgetBind)(n.pure(b.widgetApplicative)(H.wrapInputFields(R)(X.hmapRecord()(X.mapRecordWithIndexCons(new A.IsSymbol(function () {
        return "contactType";
      }))(X.constMapping(H.wrapField(K.newtypeInputField)))(X.mapRecordWithIndexCons(new A.IsSymbol(function () {
        return "email1";
      }))(X.constMapping(H.wrapField(K.newtypeInputField)))(X.mapRecordWithIndexNil)()())()()))(ba(Z))))(function (ea) {
        return l.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(y.monoidArray))(b.widgetShiftMap)([fa(N.initFormState()(F.inputFieldsToFormFieldsCons(new A.IsSymbol(function () {
          return "contactType";
        }))()(F.inputFieldsToFormFieldsCons(new A.IsSymbol(function () {
          return "email1";
        }))()(F.inputFieldsToFormFieldsNil)())())(R)(R)(ea)(U)), u.foldMap(u.foldableMaybe)(b.widgetMonoid(y.monoidArray))(Q.contactWidg)(Z)]))(function (ta) {
          return n.pure(b.widgetApplicative)(ia(new p.Just(ta)));
        });
      }));
    };

    return e.div_(m.shiftMapCofree(y.monoidArray))([D.institutionContact])(ia(ca));
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
      n = a["Control.Applicative"],
      l = a["Control.Bind"],
      m = a["Control.Cofree"],
      r = a["Data.Either"],
      w = a["Data.Enum"],
      z = a["Data.Eq"],
      u = a["Data.Foldable"],
      t = a["Data.Functor"],
      p = a["Data.Maybe"],
      y = a["Data.Monoid"],
      x = a["Data.Show"],
      A = a["Data.String.NonEmpty.Internal"],
      v = a["Data.Symbol"],
      F = a["Effect.Class"],
      G = a["Effect.Class.Console"],
      I = a["Formless.Component"],
      H = a["Formless.Internal.Transform"],
      B = a["Formless.Query"],
      K = a["Formless.Retrieve"],
      X = a["Formless.Transform.Record"],
      D = a["Formless.Transform.Row"],
      N = a["Formless.Types.Form"],
      O = a["Formless.Validation"],
      J = a["Heterogeneous.Mapping"],
      Q = a["Metajelo.CSS.UI.ClassProps"],
      q = a["Metajelo.FormUtil"],
      U = a["Metajelo.Types"],
      da = a["Metajelo.Validation"],
      R = a["Metajelo.View"],
      V = a["Text.URL.Validate"],
      ba = function ba(M) {
    return function (W) {
      return function (C) {
        return D.mkSProxies()(W)(C)(N.FormProxy.value);
      };
    };
  },
      fa = new a["Data.Newtype"].Newtype(function (M) {
    return M;
  }, function (M) {
    return M;
  }),
      ca = function ca(M) {
    return l.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(y.monoidArray))(b.widgetShiftMap)([e.span_(b.widgetShiftMap)([Q.policy])(q.menu(new v.IsSymbol(function () {
      return "polPolType";
    }))(q.isOptionPolPolType)(q.boundedEnumPolPolType)(fa)()(fa)()(M.form)(ba()(fa)(D.makeSProxiesCons(new v.IsSymbol(function () {
      return "appliesToProd";
    }))()(D.makeSProxiesCons(new v.IsSymbol(function () {
      return "polPolType";
    }))()(D.makeSProxiesCons(new v.IsSymbol(function () {
      return "policy";
    }))()(D.makeSProxiesCons(new v.IsSymbol(function () {
      return "policyType";
    }))()(D.makeSProxiesNil))))).polPolType)), e.input(k.widgetLiftWidget)([d.defaultValue(K.getInput(new v.IsSymbol(function () {
      return "policy";
    }))(fa)()(ba()(fa)(D.makeSProxiesCons(new v.IsSymbol(function () {
      return "appliesToProd";
    }))()(D.makeSProxiesCons(new v.IsSymbol(function () {
      return "polPolType";
    }))()(D.makeSProxiesCons(new v.IsSymbol(function () {
      return "policy";
    }))()(D.makeSProxiesCons(new v.IsSymbol(function () {
      return "policyType";
    }))()(D.makeSProxiesNil))))).policy)(M.form)), t.map(g.functorProps)(function () {
      var W = B.setValidate(new v.IsSymbol(function () {
        return "policy";
      }))(fa)()(ba()(fa)(D.makeSProxiesCons(new v.IsSymbol(function () {
        return "appliesToProd";
      }))()(D.makeSProxiesCons(new v.IsSymbol(function () {
        return "polPolType";
      }))()(D.makeSProxiesCons(new v.IsSymbol(function () {
        return "policy";
      }))()(D.makeSProxiesCons(new v.IsSymbol(function () {
        return "policyType";
      }))()(D.makeSProxiesNil))))).policy);
      return function (C) {
        return W(d.unsafeTargetValue(C));
      };
    }())(d.onChange)]), q.errorDisplay(da.toTextString)(K.getError(new v.IsSymbol(function () {
      return "policy";
    }))(fa)()(ba()(fa)(D.makeSProxiesCons(new v.IsSymbol(function () {
      return "appliesToProd";
    }))()(D.makeSProxiesCons(new v.IsSymbol(function () {
      return "polPolType";
    }))()(D.makeSProxiesCons(new v.IsSymbol(function () {
      return "policy";
    }))()(D.makeSProxiesCons(new v.IsSymbol(function () {
      return "policyType";
    }))()(D.makeSProxiesNil))))).policy)(M.form)), e.span_(b.widgetShiftMap)([Q.policyType])(q.menu(new v.IsSymbol(function () {
      return "policyType";
    }))(q.isOptionMaybePolicyType)(w.boundedEnumMaybe(U.smallBoundedPolicyType)(U.boundedEnumPolicyType))(fa)()(fa)()(M.form)(ba()(fa)(D.makeSProxiesCons(new v.IsSymbol(function () {
      return "appliesToProd";
    }))()(D.makeSProxiesCons(new v.IsSymbol(function () {
      return "polPolType";
    }))()(D.makeSProxiesCons(new v.IsSymbol(function () {
      return "policy";
    }))()(D.makeSProxiesCons(new v.IsSymbol(function () {
      return "policyType";
    }))()(D.makeSProxiesNil))))).policyType)), e.span_(b.widgetShiftMap)([Q.applies])(q.menu(new v.IsSymbol(function () {
      return "appliesToProd";
    }))(q.isOptionMaybeBoolean)(w.boundedEnumMaybe(w.smallBoundedBoolean)(w.boundedEnumBoolean))(fa)()(fa)()(M.form)(ba()(fa)(D.makeSProxiesCons(new v.IsSymbol(function () {
      return "appliesToProd";
    }))()(D.makeSProxiesCons(new v.IsSymbol(function () {
      return "polPolType";
    }))()(D.makeSProxiesCons(new v.IsSymbol(function () {
      return "policy";
    }))()(D.makeSProxiesCons(new v.IsSymbol(function () {
      return "policyType";
    }))()(D.makeSProxiesNil))))).appliesToProd)), e["div'"](b.widgetMultiAlternative(y.monoidArray))(b.widgetShiftMap)([t.voidRight(b.widgetFunctor)(B.submit)(q.formSaveButton(M))])]))(function (W) {
      return l.bind(b.widgetBind)(I.eval()()(z.eqRowCons(z.eqRowCons(z.eqRowCons(z.eqRowCons(z.eqRowNil)()(new v.IsSymbol(function () {
        return "policyType";
      }))(N.eqInputField(p.eqMaybe(U.eqPolicyType))))()(new v.IsSymbol(function () {
        return "policy";
      }))(N.eqInputField(z.eqString)))()(new v.IsSymbol(function () {
        return "polPolType";
      }))(N.eqInputField(q.eqPolPolType)))()(new v.IsSymbol(function () {
        return "appliesToProd";
      }))(N.eqInputField(p.eqMaybe(z.eqBoolean))))(H.inputFieldsToFormFieldsCons(new v.IsSymbol(function () {
        return "appliesToProd";
      }))()(H.inputFieldsToFormFieldsCons(new v.IsSymbol(function () {
        return "polPolType";
      }))()(H.inputFieldsToFormFieldsCons(new v.IsSymbol(function () {
        return "policy";
      }))()(H.inputFieldsToFormFieldsCons(new v.IsSymbol(function () {
        return "policyType";
      }))()(H.inputFieldsToFormFieldsNil)())())())())(H.inputFieldsToInputCons(new v.IsSymbol(function () {
        return "appliesToProd";
      }))()(H.inputFieldsToInputCons(new v.IsSymbol(function () {
        return "polPolType";
      }))()(H.inputFieldsToInputCons(new v.IsSymbol(function () {
        return "policy";
      }))()(H.inputFieldsToInputCons(new v.IsSymbol(function () {
        return "policyType";
      }))()(H.inputFieldsToInputNil)())())())())(H.consCountErrors(new v.IsSymbol(function () {
        return "appliesToProd";
      }))()(H.consCountErrors(new v.IsSymbol(function () {
        return "polPolType";
      }))()(H.consCountErrors(new v.IsSymbol(function () {
        return "policy";
      }))()(H.consCountErrors(new v.IsSymbol(function () {
        return "policyType";
      }))()(H.nilCountErrors)))))(H.consAllTouched(new v.IsSymbol(function () {
        return "appliesToProd";
      }))()(H.consAllTouched(new v.IsSymbol(function () {
        return "polPolType";
      }))()(H.consAllTouched(new v.IsSymbol(function () {
        return "policy";
      }))()(H.consAllTouched(new v.IsSymbol(function () {
        return "policyType";
      }))()(H.nilAllTouched)))))(H.setFormFieldsTouchedCons(new v.IsSymbol(function () {
        return "appliesToProd";
      }))()(H.setFormFieldsTouchedCons(new v.IsSymbol(function () {
        return "polPolType";
      }))()(H.setFormFieldsTouchedCons(new v.IsSymbol(function () {
        return "policy";
      }))()(H.setFormFieldsTouchedCons(new v.IsSymbol(function () {
        return "policyType";
      }))()(H.setFormFieldsTouchedNil)())())())())(H.replaceFormFieldInputsTouchedCons(new v.IsSymbol(function () {
        return "appliesToProd";
      }))(N.newtypeInputField)(N.newtypeFormField)()()()(H.replaceFormFieldInputsTouchedCons(new v.IsSymbol(function () {
        return "polPolType";
      }))(N.newtypeInputField)(N.newtypeFormField)()()()(H.replaceFormFieldInputsTouchedCons(new v.IsSymbol(function () {
        return "policy";
      }))(N.newtypeInputField)(N.newtypeFormField)()()()(H.replaceFormFieldInputsTouchedCons(new v.IsSymbol(function () {
        return "policyType";
      }))(N.newtypeInputField)(N.newtypeFormField)()()()(H.replaceFormFieldInputsTouchedNil)))))(H.modifyAllCons(new v.IsSymbol(function () {
        return "appliesToProd";
      }))(N.newtypeInputFunction)(N.newtypeFormField)()()()(H.modifyAllCons(new v.IsSymbol(function () {
        return "polPolType";
      }))(N.newtypeInputFunction)(N.newtypeFormField)()()()(H.modifyAllCons(new v.IsSymbol(function () {
        return "policy";
      }))(N.newtypeInputFunction)(N.newtypeFormField)()()()(H.modifyAllCons(new v.IsSymbol(function () {
        return "policyType";
      }))(N.newtypeInputFunction)(N.newtypeFormField)()()()(H.modifyAllNil)))))(H.applyToValidationCons(new v.IsSymbol(function () {
        return "appliesToProd";
      }))(b.widgetMonad)()(fa)()()(H.applyToValidationCons(new v.IsSymbol(function () {
        return "polPolType";
      }))(b.widgetMonad)()(fa)()()(H.applyToValidationCons(new v.IsSymbol(function () {
        return "policy";
      }))(b.widgetMonad)()(fa)()()(H.applyToValidationCons(new v.IsSymbol(function () {
        return "policyType";
      }))(b.widgetMonad)()(fa)()()(H.applyToValidationNil(b.widgetMonad))))))(H.formFieldsToMaybeOutputCons(new v.IsSymbol(function () {
        return "appliesToProd";
      }))()(H.formFieldsToMaybeOutputCons(new v.IsSymbol(function () {
        return "polPolType";
      }))()(H.formFieldsToMaybeOutputCons(new v.IsSymbol(function () {
        return "policy";
      }))()(H.formFieldsToMaybeOutputCons(new v.IsSymbol(function () {
        return "policyType";
      }))()(H.formFieldsToMaybeOutputNil)())())())())(fa)(fa)(fa)(fa)(fa)(fa)(fa)(fa)(b.widgetMonad)(W)(M))(function (C) {
        if (C instanceof r.Left) return ca(C.value0);
        if (C instanceof r.Right) return C = X.unwrapOutputFields(fa)(J.hmapRecord()(J.mapRecordWithIndexCons(new v.IsSymbol(function () {
          return "appliesToProd";
        }))(J.constMapping(X.unwrapField(N.newtypeOutputField)))(J.mapRecordWithIndexCons(new v.IsSymbol(function () {
          return "polPolType";
        }))(J.constMapping(X.unwrapField(N.newtypeOutputField)))(J.mapRecordWithIndexCons(new v.IsSymbol(function () {
          return "policy";
        }))(J.constMapping(X.unwrapField(N.newtypeOutputField)))(J.mapRecordWithIndexCons(new v.IsSymbol(function () {
          return "policyType";
        }))(J.constMapping(X.unwrapField(N.newtypeOutputField)))(J.mapRecordWithIndexNil)()())()())()())()()))(C.value0), n.pure(b.widgetApplicative)({
          policy: C.policy,
          policyType: C.policyType,
          appliesToProduct: C.appliesToProd
        });
        throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 102, column 3 - line 110, column 8): " + [C.constructor.name]);
      });
    });
  },
      ia = {
    polPolType: q.FreeTextPolicy.value,
    policy: "",
    policyType: p.Nothing.value,
    appliesToProd: p.Nothing.value
  },
      Z = function Z(M) {
    if (M instanceof p.Nothing) return ia;

    if (M instanceof p.Just) {
      var W = M.value0.policy;
      if (W instanceof U.FreeTextPolicy) W = q.FreeTextPolicy.value;else if (W instanceof U.RefPolicy) W = q.RefPolicy.value;else throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 62, column 1 - line 62, column 38): " + [W.constructor.name]);
      var C = M.value0.policy;
      if (C instanceof U.FreeTextPolicy) C = A.toString(C.value0);else if (C instanceof U.RefPolicy) C = V.urlToString(C.value0);else throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 66, column 1 - line 66, column 36): " + [C.constructor.name]);
      return {
        polPolType: W,
        policy: C,
        policyType: M.value0.policyType,
        appliesToProd: M.value0.appliesToProduct
      };
    }

    throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 70, column 1 - line 70, column 56): " + [M.constructor.name]);
  },
      ea = {
    polPolType: da.dummy(b.widgetMonad),
    policy: function (M) {
      return O.hoistFnE(M)(function (W) {
        return function (C) {
          var S = K.getInput(new v.IsSymbol(function () {
            return "polPolType";
          }))(fa)()(ba()(fa)(D.makeSProxiesCons(new v.IsSymbol(function () {
            return "appliesToProd";
          }))()(D.makeSProxiesCons(new v.IsSymbol(function () {
            return "polPolType";
          }))()(D.makeSProxiesCons(new v.IsSymbol(function () {
            return "policy";
          }))()(D.makeSProxiesCons(new v.IsSymbol(function () {
            return "policyType";
          }))()(D.makeSProxiesNil))))).polPolType)(W);
          if (S instanceof q.FreeTextPolicy) return t.mapFlipped(r.functorEither)(da.readNEStringEi(C))(U.FreeTextPolicy.create);
          if (S instanceof q.RefPolicy) return t.mapFlipped(r.functorEither)(V.parsePublicURL(C))(U.RefPolicy.create);
          throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 128, column 6 - line 130, column 54): " + [S.constructor.name]);
        };
      });
    }(b.widgetMonad),
    policyType: da.dummy(b.widgetMonad),
    appliesToProd: da.dummy(b.widgetMonad)
  },
      ta = function ta(M) {
    var W = function W(C) {
      return f.step(C)(l.bind(b.widgetBind)(n.pure(b.widgetApplicative)(X.wrapInputFields(fa)(J.hmapRecord()(J.mapRecordWithIndexCons(new v.IsSymbol(function () {
        return "appliesToProd";
      }))(J.constMapping(X.wrapField(N.newtypeInputField)))(J.mapRecordWithIndexCons(new v.IsSymbol(function () {
        return "polPolType";
      }))(J.constMapping(X.wrapField(N.newtypeInputField)))(J.mapRecordWithIndexCons(new v.IsSymbol(function () {
        return "policy";
      }))(J.constMapping(X.wrapField(N.newtypeInputField)))(J.mapRecordWithIndexCons(new v.IsSymbol(function () {
        return "policyType";
      }))(J.constMapping(X.wrapField(N.newtypeInputField)))(J.mapRecordWithIndexNil)()())()())()())()()))(Z(C))))(function (S) {
        return l.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(y.monoidArray))(b.widgetShiftMap)([ca(q.initFormState()(H.inputFieldsToFormFieldsCons(new v.IsSymbol(function () {
          return "appliesToProd";
        }))()(H.inputFieldsToFormFieldsCons(new v.IsSymbol(function () {
          return "polPolType";
        }))()(H.inputFieldsToFormFieldsCons(new v.IsSymbol(function () {
          return "policy";
        }))()(H.inputFieldsToFormFieldsCons(new v.IsSymbol(function () {
          return "policyType";
        }))()(H.inputFieldsToFormFieldsNil)())())())())(fa)(fa)(S)(ea)), u.foldMap(u.foldableMaybe)(b.widgetMonoid(y.monoidArray))(R.ipolicyWidg)(C)]))(function (P) {
          return l.discard(l.discardUnit)(b.widgetBind)(F.liftEffect(b.widgetMonadEff(y.monoidArray))(G.logShow(F.monadEffectEffect)(x.showRecord()(x.showRecordFieldsCons(new v.IsSymbol(function () {
            return "appliesToProduct";
          }))(x.showRecordFieldsCons(new v.IsSymbol(function () {
            return "policy";
          }))(x.showRecordFieldsCons(new v.IsSymbol(function () {
            return "policyType";
          }))(x.showRecordFieldsNil)(p.showMaybe(U.showPolicyType)))(U.showPolicy))(p.showMaybe(x.showBoolean))))(P)))(function () {
            return n.pure(b.widgetApplicative)(W(new p.Just(P)));
          });
        });
      }));
    };

    return e.div_(m.shiftMapCofree(y.monoidArray))([Q.institutionPolicy])(W(M));
  };

  c.policySigArray = function (M) {
    return e.div_(m.shiftMapCofree(y.monoidArray))([Q.institutionPolicies])(q.nonEmptyArrayView(ta)(M));
  };
})(PS);

(function (a) {
  a.copyToClipboard = function (c) {
    return function () {
      var f = document.createElement("textarea");
      f.type = "text";
      f.value = c;
      f.style.position = "absolute";
      f.style.left = -1E4;
      document.body.appendChild(f);
      f.select();
      document.execCommand("copy");
      document.body.removeChild(f);
    };
  };

  a.outerHTML = function (c) {
    return function () {
      return c.outerHTML;
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
      n = a["Data.Unit"],
      l = a["Data.XPath"],
      m = a.Effect,
      r = a["Metajelo.Types"],
      w = a["Metajelo.XPaths"],
      z = a["Nonbili.DOM"],
      u = a["Text.Email.Parser"],
      t = a["Text.URL.Validate"],
      p = a["Web.DOM.Document"],
      y = a["Web.DOM.Element"],
      x = a["Web.DOM.Node"],
      A = function A(M) {
    return function (W) {
      return function (C) {
        return function (S) {
          var P = y.fromNode(C);
          return function () {
            d.sequence(d.traversableMaybe)(m.applicativeEffect)(g.mapFlipped(b.functorMaybe)(P)(function (L) {
              return y.setAttribute(M)(e.show(r.showIdentifierType)(S))(L);
            }))();
            return n.unit;
          };
        };
      };
    };
  },
      v = a["Data.String.NonEmpty.Internal"].toString,
      F = function F(M) {
    return function (W) {
      return function (C) {
        return function (S) {
          return function () {
            x.setTextContent(v(S.id))(C)();
            return A(M)(W)(C)(S.idType)();
          };
        };
      };
    };
  },
      G = function G(M) {
    return function (W) {
      return function () {
        var C = w.unsafeSingleNodeValue(M)(M.recNode)(l.xx(l.stringXPath)(w.idP))();
        return F(w.idTypeAT)(M)(C)(W)();
      };
    };
  },
      I = function I(M) {
    return function (W) {
      return function () {
        d.sequence(d.traversableMaybe)(m.applicativeEffect)(g.map(b.functorMaybe)(x.setTextContent(v(M)))(W))();
        return n.unit;
      };
    };
  },
      H = function H(M) {
    return function (W) {
      return function () {
        var C = M.xevalRoot.nodeMay(w.dateRootP)();
        return I(W)(C)();
      };
    };
  },
      B = function B(M) {
    return function (W) {
      return function () {
        var C = M.xevalRoot.nodeMay(w.lastModRootP)();
        return I(W)(C)();
      };
    };
  },
      K = function K(M) {
    return function (W) {
      var C = y.prefix(M.recElem);
      return function () {
        if (C instanceof b.Just) var S = C.value0 + ":";else if (C instanceof b.Nothing) S = "";else throw Error("Failed pattern match at Metajelo.XPaths.Write (line 235, column 20 - line 237, column 18): " + [C.constructor.name]);
        S += W;
        return p.createElementNS(new b.Just(M.ns))(S)(M.doc)();
      };
    };
  },
      X = function X(M) {
    return function (W) {
      return function (C) {
        return function () {
          var S = K(M)(C)();
          x.appendChild(y.toNode(S))(W)();
          return S;
        };
      };
    };
  },
      D = function D(M) {
    return function (W) {
      return function (C) {
        return function () {
          var S = g.map(m.functorEffect)(y.toNode)(X(M)(W)(w.basicMetaP))(),
              P = g.map(m.functorEffect)(y.toNode)(X(M)(S)(w.titleP))();
          x.setTextContent(v(C.title))(P)();
          P = g.map(m.functorEffect)(y.toNode)(X(M)(S)(w.creatorP))();
          x.setTextContent(v(C.creator))(P)();
          S = g.map(m.functorEffect)(y.toNode)(X(M)(S)(w.pubYearP))();
          return x.setTextContent(v(C.publicationYear))(S)();
        };
      };
    };
  },
      N = function N(M) {
    return function (W) {
      return function (C) {
        return function () {
          var S = X(M)(W)(w.instContactP)();
          d.sequence(d.traversableMaybe)(m.applicativeEffect)(g.mapFlipped(b.functorMaybe)(C.contactType)(function (P) {
            return y.setAttribute(w.instContactTypeAT)(e.show(r.showInstitutionContactType)(P))(S);
          }))();
          return x.setTextContent(u.toString(C.emailAddress))(y.toNode(S))();
        };
      };
    };
  },
      O = function O(M) {
    return function (W) {
      return function (C) {
        return function () {
          var S = g.map(m.functorEffect)(y.toNode)(X(M)(W)(w.instIdP))();
          return F(w.idTypeAT)(M)(S)(C)();
        };
      };
    };
  },
      J = function J(M) {
    return function (W) {
      return k.for_(m.applicativeEffect)(f.foldableNonEmptyArray)(W)(function (C) {
        return function () {
          var S = X(M)(M.recNode)(w.relIdP)(),
              P = y.toNode(S);
          x.setTextContent(v(C.id))(P)();
          y.setAttribute(w.relIdTypeAT)(e.show(r.showIdentifierType)(C.idType))(S)();
          return y.setAttribute(w.relTypeAT)(e.show(r.showRelationType)(C.relType))(S)();
        };
      });
    };
  },
      Q = function Q(M) {
    return function (W) {
      return function (C) {
        return function () {
          var S = g.map(m.functorEffect)(y.toNode)(X(M)(W)(w.resIdP))();
          return F(w.resIdTypeAT)(M)(S)(C)();
        };
      };
    };
  },
      q = function q(M) {
    return function (W) {
      return function (C) {
        return function () {
          var S = X(M)(W)(w.resMetaSourceP)();
          x.setTextContent(t.urlToString(C.url))(y.toNode(S))();
          return y.setAttribute(w.relTypeAT)(e.show(r.showRelationType)(C.relationType))(S)();
        };
      };
    };
  },
      U = function U(M) {
    return function (W) {
      return function (C) {
        return function () {
          var S = X(M)(W)(w.resTypeP)();
          x.setTextContent(C.description)(y.toNode(S))();
          return y.setAttribute(w.resTypeGenAT)(e.show(r.showResourceTypeGeneral)(C.generalType))(S)();
        };
      };
    };
  },
      da = function da(M) {
    return function (W) {
      return function (C) {
        return function (S) {
          return function () {
            var P = g.map(m.functorEffect)(y.toNode)(X(W)(C)(M))();
            return x.setTextContent(S)(P)();
          };
        };
      };
    };
  },
      R = function R(M) {
    return function (W) {
      return function (C) {
        return function (S) {
          return da(M)(W)(C)(v(S));
        };
      };
    };
  },
      V = function V(M) {
    return function (W) {
      return function (C) {
        return function () {
          var S = g.map(m.functorEffect)(y.toNode)(X(M)(W)(w.formatCP))();
          return k.for_(m.applicativeEffect)(k.foldableArray)(C)(function (P) {
            return R(w.formatP)(M)(S)(P);
          })();
        };
      };
    };
  },
      ba = function ba(M) {
    return function (W) {
      return function (C) {
        return function () {
          var S = X(M)(W)(w.instPolicyP)(),
              P = y.toNode(S);
          d.sequence(d.traversableMaybe)(m.applicativeEffect)(g.mapFlipped(b.functorMaybe)(C.policyType)(function (L) {
            return y.setAttribute(w.polTypeAT)(e.show(r.showPolicyType)(L))(S);
          }))();
          d.sequence(d.traversableMaybe)(m.applicativeEffect)(g.mapFlipped(b.functorMaybe)(C.appliesToProduct)(function (L) {
            return y.setAttribute(w.appliesToProdAT)(e.show(e.showBoolean)(L))(S);
          }))();
          if (C.policy instanceof r.FreeTextPolicy) return R(w.freeTextPolicyP)(M)(P)(C.policy.value0)();
          if (C.policy instanceof r.RefPolicy) return R(w.refPolicyP)(M)(P)(t.urlToNEString(C.policy.value0))();
          throw Error("Failed pattern match at Metajelo.XPaths.Write (line 202, column 3 - line 205, column 27): " + [C.policy.constructor.name]);
        };
      };
    };
  },
      fa = function fa(M) {
    return function (W) {
      return function (C) {
        return function () {
          var S = g.map(m.functorEffect)(y.toNode)(X(M)(W)(w.instPolicyCP))();
          return k.for_(m.applicativeEffect)(f.foldableNonEmptyArray)(C)(function (P) {
            return ba(M)(S)(P);
          })();
        };
      };
    };
  },
      ca = function ca(M) {
    return function (W) {
      return function (C) {
        return function () {
          var S = g.map(m.functorEffect)(y.toNode)(X(M)(W)(w.instSustainP))();
          R(w.missionUrlP)(M)(S)(t.urlToNEString(C.missionStatementURL))();
          return R(w.fundingUrlP)(M)(S)(t.urlToNEString(C.fundingStatementURL))();
        };
      };
    };
  },
      ia = function ia(M) {
    return function (W) {
      return function (C) {
        return function () {
          var S = X(M)(W)(w.locP)(),
              P = y.toNode(S);
          O(M)(P)(C.institutionID)();
          R(w.instNameP)(M)(P)(C.institutionName)();
          da(w.instTypeP)(M)(P)(e.show(r.showInstitutionType)(C.institutionType))();
          d.sequence(d.traversableMaybe)(m.applicativeEffect)(g.mapFlipped(b.functorMaybe)(C.superOrganizationName)(function (L) {
            return R(w.superOrgNameP)(M)(P)(L);
          }))();
          N(M)(P)(C.institutionContact)();
          ca(M)(P)(C.institutionSustainability)();
          fa(M)(P)(C.institutionPolicies)();
          return da(w.versioningP)(M)(P)(e.show(e.showBoolean)(C.versioning))();
        };
      };
    };
  },
      Z = function Z(M) {
    return function (W) {
      return function () {
        var C = w.unsafeSingleNodeValue(M)(M.recNode)(l.xx(l.stringXPath)(w.sProdCP))(),
            S = g.map(m.functorEffect)(y.toNode)(X(M)(C)(w.sProdP))();
        D(M)(S)(W.basicMetadata)();
        d.sequence(d.traversableMaybe)(m.applicativeEffect)(g.mapFlipped(b.functorMaybe)(W.resourceID)(function (P) {
          return Q(M)(S)(P);
        }))();
        U(M)(S)(W.resourceType)();
        V(M)(S)(W.format)();
        d.sequence(d.traversableMaybe)(m.applicativeEffect)(g.mapFlipped(b.functorMaybe)(W.resourceMetadataSource)(function (P) {
          return q(M)(S)(P);
        }))();
        return ia(M)(S)(W.location)();
      };
    };
  },
      ea = function ea(M) {
    return function (W) {
      return k.for_(m.applicativeEffect)(f.foldableNonEmptyArray)(W)(function (C) {
        return Z(M)(C);
      });
    };
  },
      ta = function ta(M) {
    return function (W) {
      return function () {
        G(M)(W.identifier)();
        H(M)(W.date)();
        B(M)(W.lastModified)();
        J(M)(W.relatedIdentifiers)();
        return ea(M)(W.supplementaryProducts)();
      };
    };
  };

  a["Metajelo.XPaths.Write"].recordToString = function (M) {
    return function () {
      var W = w.getDefaultParseEnv('<?xml version="1.0" encoding="UTF-8"?>\n<record xmlns:re3="http://www.re3data.org/schema/2-2"\n xmlns:datacite="http://datacite.org/schema/kernel-4"\n xmlns="http://ourdomain.cornell.edu/reuse/v.01"\n xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n xsi:schemaLocation="http://ourdomain.cornell.edu/reuse/v.01 file:/Users/clagoze/Downloads/metajelo-master/schema/xsd/reproMetadata0.7.xsd">\n    <identifier></identifier>\n    <date></date>\n    <lastModified></lastModified>\n    <supplementaryProducts>\n    </supplementaryProducts>\n</record>\n')();
      ta(W)(M)();
      W = p.documentElement(W.doc)();
      return b.maybe(c.pure(m.applicativeEffect)(""))(z.outerHTML)(W)();
    };
  };
})(PS);

(function (a) {
  a.pickFn = function (c, f) {
    for (var k = {}, g = 0; g < c.length; g++) {
      "undefined" !== typeof f[c[g]] && (k[c[g]] = f[c[g]]);
    }

    return k;
  };
})(PS.Option = PS.Option || {});

(function (a) {
  a["Record.Extra"] = a["Record.Extra"] || {};

  var c = a["Record.Extra"],
      f = a["Data.List.Types"],
      k = a["Data.Monoid"],
      g = a["Data.Symbol"],
      b = a["Type.Data.RowList"],
      e = function e(d) {
    this.keysImpl = d;
  };

  a = new e(function (d) {
    return k.mempty(f.monoidList);
  });

  c.keys = function (d) {
    return function (n) {
      return function (l) {
        return (0, n.keysImpl)(b.RLProxy.value);
      };
    };
  };

  c.nilKeys = a;

  c.consKeys = function (d) {
    return function (n) {
      return new e(function (l) {
        l = (0, n.keysImpl)(b.RLProxy.value);
        var m = g.reflectSymbol(d)(g.SProxy.value);
        return new f.Cons(m, l);
      });
    };
  };
})(PS);

(function (a) {
  a["Type.Data.Row"] = a["Type.Data.Row"] || {};
  a = a["Type.Data.Row"];

  var c = function () {
    function f() {}

    f.value = new f();
    return f;
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
      n = a["Data.List.Types"],
      l = a["Data.Maybe"],
      m = a["Data.Symbol"],
      r = a["Foreign.Object"],
      w = a.Record,
      z = a["Record.Extra"],
      u = a["Type.Data.Row"],
      t = function () {
    function N() {}

    N.value = new N();
    return N;
  }(),
      p = function p(N) {
    this.getAllOption = N;
  },
      y = function y(N) {
    this["getAll'"] = N;
  },
      x = function x(N) {
    this.fromRecordOption = N;
  },
      A = function A(N) {
    this["fromRecord'"] = N;
  },
      v = function v(N) {
    return function (O) {
      return function (J) {
        J = b.fromFoldable(n.foldableList)(z.keys()(J)(u.RProxy.value));
        return e.runFn2(f.pickFn)(J);
      };
    };
  };

  a = new p(function (N) {
    return function (O) {
      return new l.Just({});
    };
  });

  var F = r.empty,
      G = new x(function (N) {
    return function (O) {
      return F;
    };
  }),
      I = function I(N) {
    return function (O) {
      return function (J) {
        return function (Q) {
          var q = m.reflectSymbol(N)(m.SProxy.value),
              U = r.alter(function (da) {
            return O(da);
          })(q)(Q);
          Q = O(r.lookup(q)(Q));
          return {
            option: U,
            value: Q
          };
        };
      };
    };
  },
      H = function H(N) {
    return function (O) {
      return function (J) {
        return function (Q) {
          return function (q) {
            return I(N)(function (U) {
              return l.Nothing.value;
            })(Q)(q).option;
          };
        };
      };
    };
  },
      B = function B(N) {
    return function (O) {
      return function (J) {
        return function (Q) {
          return I(N)(function (q) {
            return q;
          })(J)(Q).value;
        };
      };
    };
  },
      K = function K(N) {
    return function (O) {
      return function (J) {
        return function (Q) {
          return function (q) {
            return I(N)(function (U) {
              return new l.Just(Q);
            })(J)(q).option;
          };
        };
      };
    };
  },
      X = function X(N) {
    return function (O) {
      return function (J) {
        return function (Q) {
          return function (q) {
            if (Q instanceof l.Just) return K(N)()(J)(Q.value0)(q);
            if (Q instanceof l.Nothing) return q;
            throw Error("Failed pattern match at Option (line 1408, column 25 - line 1410, column 28): " + [Q.constructor.name]);
          };
        };
      };
    };
  },
      D = function D(N) {
    return function (O) {
      return function (J) {
        return function (Q) {
          return function (q) {
            return function (U) {
              return I(N)(function (da) {
                return new l.Just(q);
              })(Q)(U).option;
            };
          };
        };
      };
    };
  };

  c.fromRecord = function (N) {
    return N["fromRecord'"];
  };

  c.empty = F;
  c.get = B;

  c.getAll = function (N) {
    return N["getAll'"];
  };

  c.getSubset = function (N) {
    return function (O) {
      return function (J) {
        return function (Q) {
          return function (q) {
            return (0, Q["getAll'"])(v()()(J)(q));
          };
        };
      };
    };
  };

  c.getWithDefault = function (N) {
    return function (O) {
      return function (J) {
        return function (Q) {
          return function (q) {
            q = B(N)()(Q)(q);
            if (q instanceof l.Just) return q.value0;
            if (q instanceof l.Nothing) return J;
            throw Error("Failed pattern match at Option (line 1257, column 39 - line 1259, column 32): " + [q.constructor.name]);
          };
        };
      };
    };
  };

  c.maySetOptState = function (N) {
    return function (O) {
      return function (J) {
        return function (Q) {
          return function (q) {
            return k.put(g.monadStateStateT(d.monadIdentity))(X(N)()(J)(Q)(q));
          };
        };
      };
    };
  };

  c.fromRecordAny = function (N) {
    return function (O) {
      return new A((0, N.fromRecordOption)(t.value));
    };
  };

  c.fromRecordOptionNil = G;

  c.fromRecordOptionCons = function (N) {
    return function (O) {
      return function (J) {
        return function (Q) {
          return function (q) {
            return function (U) {
              return new x(function (da) {
                return function (R) {
                  var V = w["delete"](N)()()(m.SProxy.value)(R);
                  V = (0, O.fromRecordOption)(t.value)(V);
                  R = w.get(N)()(m.SProxy.value)(R);
                  return D(N)()()(m.SProxy.value)(R)(V);
                };
              });
            };
          };
        };
      };
    };
  };

  c.getAllAny = function (N) {
    return function (O) {
      return new y((0, O.getAllOption)(t.value));
    };
  };

  c.getAllOptionNil = a;

  c.getAllOptionCons = function (N) {
    return function (O) {
      return function (J) {
        return function (Q) {
          return function (q) {
            return function (U) {
              return new p(function (da) {
                return function (R) {
                  var V = H(N)()()(m.SProxy.value)(R);
                  V = (0, U.getAllOption)(t.value)(V);
                  R = B(N)()(m.SProxy.value)(R);

                  if (V instanceof l.Just) {
                    if (R instanceof l.Just) return new l.Just(w.insert(N)()()(m.SProxy.value)(R.value0)(V.value0));
                    if (R instanceof l.Nothing) return l.Nothing.value;
                    throw Error("Failed pattern match at Option (line 567, column 31 - line 569, column 47): " + [R.constructor.name]);
                  }

                  if (V instanceof l.Nothing) return l.Nothing.value;
                  throw Error("Failed pattern match at Option (line 566, column 27 - line 570, column 45): " + [V.constructor.name]);
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
  a["Web.File.File"] = a["Web.File.File"] || {};
  a["Web.File.File"].toBlob = a["Unsafe.Coerce"].unsafeCoerce;
})(PS);

(function (a) {
  a._item = function (c) {
    return function (f) {
      return f.item(c);
    };
  };
})(PS["Web.File.FileList"] = PS["Web.File.FileList"] || {});

(function (a) {
  a["Web.File.FileList"] = a["Web.File.FileList"] || {};
  var c = a["Web.File.FileList"],
      f = a["Data.Nullable"];

  a["Web.File.FileList"].item = function (k) {
    var g = c._item(k);

    return function (b) {
      return f.toMaybe(g(b));
    };
  };
})(PS);

(function (a) {
  a.eventListener = function (c) {
    return function () {
      return function (f) {
        return c(f)();
      };
    };
  };

  a.addEventListener = function (c) {
    return function (f) {
      return function (k) {
        return function (g) {
          return function () {
            return g.addEventListener(c, f, k);
          };
        };
      };
    };
  };
})(PS["Web.Event.EventTarget"] = PS["Web.Event.EventTarget"] || {});

(function (a) {
  a["Web.Event.EventTarget"] = a["Web.Event.EventTarget"] || {};
  var c = a["Web.Event.EventTarget"];
  a = a["Web.Event.EventTarget"];
  c.eventListener = a.eventListener;
  c.addEventListener = a.addEventListener;
})(PS);

(function (a) {
  a.fileReader = function () {
    return new FileReader();
  };

  a.result = function (c) {
    return function () {
      return c.result;
    };
  };

  a.readAsText = function (c) {
    return function (f) {
      return function () {
        f.readAsText(c);
      };
    };
  };
})(PS["Web.File.FileReader"] = PS["Web.File.FileReader"] || {});

(function (a) {
  a["Web.File.FileReader"] = a["Web.File.FileReader"] || {};
  var c = a["Web.File.FileReader"],
      f = a["Web.File.FileReader"];
  c.toEventTarget = a["Unsafe.Coerce"].unsafeCoerce;
  c.fileReader = f.fileReader;
  c.result = f.result;
  c.readAsText = f.readAsText;
})(PS);

(function (a) {
  a["Web.HTML.Event.EventTypes"] = a["Web.HTML.Event.EventTypes"] || {};
  a = a["Web.HTML.Event.EventTypes"];
  a.error = "error";
  a.load = "load";
})(PS);

(function (a) {
  a["Web.File.FileReader.Aff"] = a["Web.File.FileReader.Aff"] || {};
  var c = a["Web.File.FileReader.Aff"],
      f = a["Control.Monad.Except"],
      k = a["Data.Either"],
      g = a["Data.List.Types"],
      b = a["Data.Monoid"],
      e = a["Data.Show"],
      d = a["Effect.Aff"],
      n = a["Effect.Exception"],
      l = a.Foreign,
      m = a["Web.Event.EventTarget"],
      r = a["Web.File.FileReader"],
      w = a["Web.HTML.Event.EventTypes"];

  a = function (z) {
    return function (u) {
      return function (t) {
        return d.makeAff(function (p) {
          var y = function y(x) {
            return p(k.Right.create(x));
          };

          return function () {
            var x = r.fileReader(),
                A = r.toEventTarget(x),
                v = m.eventListener(function (G) {
              return p(k.Left.create(n.error("error")));
            })(),
                F = m.eventListener(function (G) {
              return function () {
                var I = r.result(x)();
                return k.either(function (H) {
                  return p(k.Left.create(n.error(e.show(g.showNonEmptyList(l.showForeignError))(H))));
                })(y)(f.runExcept(z(I)))();
              };
            })();
            m.addEventListener(w.error)(v)(!1)(A)();
            m.addEventListener(w.load)(F)(!1)(A)();
            u(t)(x)();
            return b.mempty(d.monoidCanceler);
          };
        });
      };
    };
  }(l.readString)(r.readAsText);

  c.readAsText = a;
})(PS);

(function (a) {
  a._read = function (c, f, k) {
    var g = Object.prototype.toString.call(k);
    return 0 === g.indexOf("[object HTML") && g.indexOf("Element]") === g.length - 8 ? f(k) : c;
  };

  a.click = function (c) {
    return function () {
      return c.click();
    };
  };
})(PS["Web.HTML.HTMLElement"] = PS["Web.HTML.HTMLElement"] || {});

(function (a) {
  a["Web.HTML.HTMLElement"] = a["Web.HTML.HTMLElement"] || {};
  var c = a["Web.HTML.HTMLElement"],
      f = a["Web.HTML.HTMLElement"],
      k = a["Data.Maybe"];

  c.fromElement = function (g) {
    return f._read(k.Nothing.value, k.Just.create, g);
  };

  c.click = f.click;
})(PS);

(function (a) {
  a._files = function (c) {
    return function () {
      return c.files;
    };
  };
})(PS["Web.HTML.HTMLInputElement"] = PS["Web.HTML.HTMLInputElement"] || {});

(function (a) {
  a["Web.HTML.HTMLInputElement"] = a["Web.HTML.HTMLInputElement"] || {};
  var c = a["Web.HTML.HTMLInputElement"],
      f = a["Web.HTML.HTMLInputElement"],
      k = a["Data.Functor"],
      g = a["Data.Nullable"],
      b = a.Effect;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("HTMLInputElement");

  var e = function () {
    var d = k.map(b.functorEffect)(g.toMaybe);
    return function (n) {
      return d(f._files(n));
    };
  }();

  c.fromElement = a;
  c.files = e;
})(PS);

(function (a) {
  a["Metajelo.UI"] = a["Metajelo.UI"] || {};

  var c = a["Metajelo.UI"],
      f = a["Concur.Core.FRP"],
      k = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Props"],
      b = a["Concur.Core.Types"],
      e = a["Concur.React.DOM"],
      d = a["Concur.React.Props"],
      n = a["Concur.React.Run"],
      l = a["Control.Applicative"],
      m = a["Control.Bind"],
      r = a["Control.Cofree"],
      w = a["Control.Monad.Except.Trans"],
      z = a["Control.Monad.Maybe.Trans"],
      u = a["Control.Monad.State"],
      t = a["Control.Monad.State.Class"],
      p = a["Control.Monad.State.Trans"],
      y = a["Control.Plus"],
      x = a["Data.Array"],
      A = a["Data.Array.NonEmpty"],
      v = a["Data.Array.NonEmpty.Internal"],
      F = a["Data.Bifunctor"],
      G = a["Data.Either"],
      I = a["Data.Foldable"],
      H = a["Data.Functor"],
      B = a["Data.Identity"],
      K = a["Data.Maybe"],
      X = a["Data.Maybe.First"],
      D = a["Data.Monoid"],
      N = a["Data.Semigroup"],
      O = a["Data.Show"],
      J = a["Data.String.Common"],
      Q = a["Data.String.NonEmpty.Internal"],
      q = a["Data.Symbol"],
      U = a["Data.Traversable"],
      da = a["Data.Tuple"],
      R = a.Effect,
      V = a["Effect.Aff.Class"],
      ba = a["Effect.Class"],
      fa = a["Effect.Class.Console"],
      ca = a["Effect.Exception"],
      ia = a["Effect.Now"],
      Z = a.Global,
      ea = a["Metajelo.CSS.UI.ClassProps"],
      ta = a["Metajelo.CSS.Web.ClassProps"],
      M = a["Metajelo.FormUtil"],
      W = a["Metajelo.Forms.InstitutionContact"],
      C = a["Metajelo.Forms.InstitutionPolicy"],
      S = a["Metajelo.Types"],
      P = a["Metajelo.View"],
      L = a["Metajelo.XPaths"],
      la = a["Metajelo.XPaths.Read"],
      na = a["Metajelo.XPaths.Write"],
      ja = a["Nonbili.DOM"],
      E = a.Option,
      Y = a["Record.Extra"],
      ka = a["Web.DOM.Document"],
      qa = a["Web.DOM.Element"],
      sa = a["Web.File.File"],
      ya = a["Web.File.FileList"],
      Fa = a["Web.File.FileReader.Aff"],
      Ba = a["Web.HTML"],
      Na = a["Web.HTML.HTMLDocument"],
      La = a["Web.HTML.HTMLElement"],
      T = a["Web.HTML.HTMLInputElement"],
      ua = a["Web.HTML.Window"],
      Ia = function Ia(ha) {
    return e.div_(r.shiftMapCofree(D.monoidArray))([ea.tooltip])(ha);
  };

  a = e.div_(b.widgetShiftMap)([ea.tooltip])(y.empty(b.widgetPlus(D.monoidArray)));

  var Ra = function Ra(ha) {
    return function () {
      var oa = Ba.window();
      oa = ua.document(oa)();
      oa = Na.toDocument(oa);
      oa = ka.createElement("a")(oa)();
      qa.setAttribute("download")("metajelo.xml")(oa)();
      qa.setAttribute("href")("data:text/plain;charset=utf-8," + ha)(oa)();
      oa = La.fromElement(oa);
      if (oa instanceof K.Just) oa = La.click(oa.value0);else if (oa instanceof K.Nothing) oa = fa.log(ba.monadEffectEffect)("Couldn't create HTMLElement to click with encoded string" + ha);else throw Error("Failed pattern match at Metajelo.UI (line 114, column 26 - line 118, column 18): " + [oa.constructor.name]);
      return oa;
    };
  },
      Ma = function Ma(ha) {
    return function (oa) {
      return E.getWithDefault(ha)()(E.empty);
    };
  },
      $a = function $a(ha) {
    return e.div_(r.shiftMapCofree(D.monoidArray))([ea.format])(Ia(M.textInput(ha)));
  },
      Sa = function Sa(ha) {
    return e.div_(r.shiftMapCofree(D.monoidArray))([ea.formatList])(M.arrayView($a)(ha));
  },
      Ha = function Ha(ha) {
    return function () {
      return {
        lastModified: m.join(R.bindEffect)(H.map(R.functorEffect)(H.map(H.functorFn)(la.rightOrThrow)(M.formatXsdDate))(ia.nowDateTime))(),
        date: ha.date,
        identifier: ha.identifier,
        relatedIdentifiers: ha.relatedIdentifiers,
        supplementaryProducts: ha.supplementaryProducts
      };
    };
  },
      ab = function ab(ha) {
    var oa = E.fromRecord(E.fromRecordAny(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "fundingStatementURL";
    }))(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "missionStatementURL";
    }))(E.fromRecordOptionNil)()()()())()()()())())(ha),
        pa = new G.Right(ha.missionStatementURL),
        ra = new G.Right(ha.fundingStatementURL);
    return u.execState(m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
      return "missionUrl_Ei";
    }))()(q.SProxy.value)(new K.Just(pa))))(function () {
      return m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
        return "fundingUrl_Ei";
      }))()(q.SProxy.value)(new K.Just(ra)));
    }))(oa);
  },
      Ta = function Ta(ha) {
    var oa = new G.Right(ha.url);
    ha = E.fromRecord(E.fromRecordAny(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "relationType";
    }))(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "url";
    }))(E.fromRecordOptionNil)()()()())()()()())())(ha);
    return u.execState(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
      return "url_Ei";
    }))()(q.SProxy.value)(new K.Just(oa))))(ha);
  },
      Ua = function Ua(ha) {
    var oa = E.fromRecord(E.fromRecordAny(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "institutionContact";
    }))(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "institutionID";
    }))(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "institutionName";
    }))(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "institutionPolicies";
    }))(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "institutionSustainability";
    }))(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "institutionType";
    }))(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "superOrganizationName";
    }))(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "versioning";
    }))(E.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())()()()())()()()())()()()())())(ha),
        pa = E.fromRecord(E.fromRecordAny(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "id";
    }))(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "idType";
    }))(E.fromRecordOptionNil)()()()())()()()())())(ha.institutionID),
        ra = ab(ha.institutionSustainability),
        va = A.length(ha.institutionPolicies);
    return u.execState(m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
      return "institutionID_opt";
    }))()(q.SProxy.value)(new K.Just(pa))))(function () {
      return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
        return "_numPolicies";
      }))()(q.SProxy.value)(new K.Just(va))))(function () {
        return m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
          return "iSustain_opt";
        }))()(q.SProxy.value)(new K.Just(ra)));
      });
    }))(oa);
  },
      Va = function Va(ha) {
    var oa = E.fromRecord(E.fromRecordAny(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "basicMetadata";
    }))(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "format";
    }))(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "location";
    }))(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "resourceID";
    }))(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "resourceMetadataSource";
    }))(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "resourceType";
    }))(E.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())()()()())())(ha),
        pa = E.fromRecord(E.fromRecordAny(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "description";
    }))(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "generalType";
    }))(E.fromRecordOptionNil)()()()())()()()())())(ha.resourceType),
        ra = H.map(K.functorMaybe)(E.fromRecord(E.fromRecordAny(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "id";
    }))(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "idType";
    }))(E.fromRecordOptionNil)()()()())()()()())()))(ha.resourceID),
        va = H.map(K.functorMaybe)(Ta)(ha.resourceMetadataSource),
        wa = Ua(ha.location),
        xa = E.fromRecord(E.fromRecordAny(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "creator";
    }))(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "publicationYear";
    }))(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "title";
    }))(E.fromRecordOptionNil)()()()())()()()())()()()())())(ha.basicMetadata),
        Ca = x.length(ha.format);
    return u.execState(m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
      return "basicMetadata_opt";
    }))()(q.SProxy.value)(new K.Just(xa))))(function () {
      return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
        return "resourceID_opt";
      }))()(q.SProxy.value)(ra)))(function () {
        return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
          return "resourceType_opt";
        }))()(q.SProxy.value)(new K.Just(pa))))(function () {
          return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
            return "_numFormats";
          }))()(q.SProxy.value)(new K.Just(Ca))))(function () {
            return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
              return "resMdsOpts_opt";
            }))()(q.SProxy.value)(va)))(function () {
              return m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                return "locationOpts_opt";
              }))()(q.SProxy.value)(new K.Just(wa)));
            });
          });
        });
      });
    }))(oa);
  },
      Wa = function Wa(ha) {
    var oa = H.map(v.functorNonEmptyArray)(Va)(ha.supplementaryProducts),
        pa = H.map(v.functorNonEmptyArray)(E.fromRecord(E.fromRecordAny(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "id";
    }))(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "idType";
    }))(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "relType";
    }))(E.fromRecordOptionNil)()()()())()()()())()()()())()))(ha.relatedIdentifiers),
        ra = E.fromRecord(E.fromRecordAny(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "date";
    }))(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "identifier";
    }))(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "lastModified";
    }))(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "relatedIdentifiers";
    }))(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "supplementaryProducts";
    }))(E.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())())(ha),
        va = E.fromRecord(E.fromRecordAny(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "id";
    }))(E.fromRecordOptionCons(new q.IsSymbol(function () {
      return "idType";
    }))(E.fromRecordOptionNil)()()()())()()()())())(ha.identifier),
        wa = A.length(ha.supplementaryProducts),
        xa = A.length(ha.relatedIdentifiers);
    return u.execState(m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
      return "identifier_opt";
    }))()(q.SProxy.value)(new K.Just(va))))(function () {
      return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
        return "_numRelIds";
      }))()(q.SProxy.value)(new K.Just(xa))))(function () {
        return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
          return "relId_opts";
        }))()(q.SProxy.value)(new K.Just(pa))))(function () {
          return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
            return "_numSupProds";
          }))()(q.SProxy.value)(new K.Just(wa))))(function () {
            return m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
              return "supProd_opts";
            }))()(q.SProxy.value)(new K.Just(oa)));
          });
        });
      });
    }))(ra);
  },
      Xa = function () {
    var ha = F.lmap(G.bifunctorEither)(function (pa) {
      return ca.error("Error reading XML - please make sure it is well-formed.");
    }),
        oa = m.bind(b.widgetBind)(e.input(k.widgetLiftWidget)([d._type("file"), H.map(g.functorProps)(M.evTargetElem)(d.onChange)]))(function (pa) {
      return m.bind(b.widgetBind)(ba.liftEffect(b.widgetMonadEff(D.monoidArray))(z.runMaybeT(m.bind(z.bindMaybeT(R.monadEffect))(pa)(function (ra) {
        return m.bind(z.bindMaybeT(R.monadEffect))(z.MaybeT(l.pure(R.applicativeEffect)(T.fromElement(ra))))(function (va) {
          return m.bind(z.bindMaybeT(R.monadEffect))(z.MaybeT(T.files(va)))(function (wa) {
            return m.bind(z.bindMaybeT(R.monadEffect))(z.MaybeT(l.pure(R.applicativeEffect)(ya.item(0)(wa))))(function (xa) {
              return l.pure(z.applicativeMaybeT(R.monadEffect))(sa.toBlob(xa));
            });
          });
        });
      }))))(function (ra) {
        if (ra instanceof K.Nothing) return oa;
        if (ra instanceof K.Just) return m.bind(b.widgetBind)(V.liftAff(b.widgetMonadAff(D.monoidArray))(Fa.readAsText(ra.value0)))(function (va) {
          return m.bind(b.widgetBind)(ba.liftEffect(b.widgetMonadEff(D.monoidArray))(w.runExceptT(m.bind(w.bindExceptT(R.monadEffect))(w.ExceptT(H.map(R.functorEffect)(ha)(ca["try"](L.getDefaultParseEnv(va)))))(function (wa) {
            return w.ExceptT(ca["try"](la.readRecord(wa)));
          }))))(function (wa) {
            if (wa instanceof G.Right) return l.pure(b.widgetApplicative)(wa.value0);

            if (wa instanceof G.Left) {
              var xa = wa.value0;
              wa = e.div(b.widgetMultiAlternative(D.monoidArray))(b.widgetShiftMap)([]);
              var Ca = oa,
                  Ja = e.div_(b.widgetShiftMap)([ta.errorDisplayBox]),
                  Ka = e.div_(b.widgetShiftMap)([]),
                  Oa = e.span(b.widgetMultiAlternative(D.monoidArray))(b.widgetShiftMap)([ta.errorDisplay]),
                  Qa = e.text(k.widgetLiftWidget);
              xa = "Couldn't decode MetajeloXML: " + O.show(ca.showError)(xa);
              return wa([Ca, Ja(Ka(Oa([Qa(xa)])))]);
            }

            throw Error("Failed pattern match at Metajelo.UI (line 141, column 11 - line 143, column 37): " + [wa.constructor.name]);
          });
        });
        throw Error("Failed pattern match at Metajelo.UI (line 134, column 7 - line 143, column 37): " + [ra.constructor.name]);
      });
    });
    return f.loopW(E.empty)(function (pa) {
      return e.div_(b.widgetShiftMap)([])(m.bind(b.widgetBind)(oa)(function (ra) {
        return l.pure(b.widgetApplicative)(Wa(ra));
      }));
    });
  }(),
      Ya = function Ya(ha) {
    var oa = e.div_(b.widgetShiftMap)([ta.errorDisplayBox])(e.div_(b.widgetShiftMap)([])(e.span(b.widgetMultiAlternative(D.monoidArray))(b.widgetShiftMap)([ta.errorDisplay])([e.text(k.widgetLiftWidget)("Couldn't encode XML, please copy to clipboard instead.")]))),
        pa = function pa(ra) {
      return function (va) {
        var wa = function wa(xa) {
          return f.step(xa)(m.bind(b.widgetBind)(e.button_(b.widgetShiftMap)([ea.downloadBtn, d.onClick, d.disabled(J["null"](xa))])(e.text(k.widgetLiftWidget)("Download")))(function () {
            return m.bind(b.widgetBind)(ba.liftEffect(b.widgetMonadEff(D.monoidArray))(ra))(function () {
              return l.pure(b.widgetApplicative)(wa(xa));
            });
          }));
        };

        return f.dyn(wa(va));
      };
    };

    return e.div_(b.widgetShiftMap)([])(function () {
      var ra = Z.encodeURIComponent(ha);
      return m.bind(b.widgetBind)(ba.liftEffect(b.widgetMonadEff(D.monoidArray))(Ra(K.fromMaybe("")(ra))))(function (va) {
        return K.maybe(oa)(pa(va))(ra);
      });
    }());
  },
      bb = function bb(ha) {
    var oa = function oa(pa) {
      return f.step(pa)(m.bind(b.widgetBind)(e.button_(b.widgetShiftMap)([ea.clipBtn, d.onClick, d.disabled(J["null"](pa))])(e.text(k.widgetLiftWidget)("Copy to Clipboard")))(function () {
        return m.bind(b.widgetBind)(ba.liftEffect(b.widgetMonadEff(D.monoidArray))(ja.copyToClipboard(pa)))(function () {
          return l.pure(b.widgetApplicative)(oa(pa));
        });
      }));
    };

    return f.dyn(oa(ha));
  },
      cb = function cb(ha) {
    return e.div_(r.shiftMapCofree(D.monoidArray))([ea.sustainability])(m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(e.span_(r.shiftMapCofree(D.monoidArray))([ea.missionStatement])(M.urlInput(E.getWithDefault(new q.IsSymbol(function () {
      return "missionUrl_Ei";
    }))()(new G.Left(""))(q.SProxy.value)(ha))))(function (oa) {
      var pa = G.hush(oa);
      return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(e.span_(r.shiftMapCofree(D.monoidArray))([ea.fundingStatement])(M.urlInput(E.getWithDefault(new q.IsSymbol(function () {
        return "fundingUrl_Ei";
      }))()(new G.Left(""))(q.SProxy.value)(ha))))(function (ra) {
        var va = G.hush(ra);
        return l.pure(r.applicativeCofree(b.widgetAlternative(D.monoidArray)))(u.execState(m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
          return "missionUrl_Ei";
        }))()(q.SProxy.value)(new K.Just(oa))))(function () {
          return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
            return "missionStatementURL";
          }))()(q.SProxy.value)(pa)))(function () {
            return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
              return "fundingUrl_Ei";
            }))()(q.SProxy.value)(new K.Just(ra))))(function () {
              return m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                return "fundingStatementURL";
              }))()(q.SProxy.value)(va));
            });
          });
        }))(ha));
      });
    }));
  },
      Za = function Za(ha) {
    return e.div_(r.shiftMapCofree(D.monoidArray))([ea.resourceType])(m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(e.div_(r.shiftMapCofree(D.monoidArray))([])(e.span_(r.shiftMapCofree(D.monoidArray))([ea.resourceTypeGen])(M.menuSignal(S.boundedEnumResourceTypeGeneral)(M.isOptionResourceTypeGeneral)(E.get(new q.IsSymbol(function () {
      return "generalType";
    }))()(q.SProxy.value)(ha)))))(function (oa) {
      return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(e.div_(r.shiftMapCofree(D.monoidArray))([])(e.span_(r.shiftMapCofree(D.monoidArray))([ea.resourceTypeDescr])(M.textInput(m.join(K.bindMaybe)(H.map(K.functorMaybe)(Q.fromString)(E.get(new q.IsSymbol(function () {
        return "description";
      }))()(q.SProxy.value)(ha)))))))(function (pa) {
        return l.pure(r.applicativeCofree(b.widgetAlternative(D.monoidArray)))(u.execState(m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
          return "description";
        }))()(q.SProxy.value)(H.map(K.functorMaybe)(Q.toString)(pa))))(function () {
          return m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
            return "generalType";
          }))()(q.SProxy.value)(oa));
        }))(ha));
      });
    }));
  },
      db = function db(ha) {
    return e.div_(r.shiftMapCofree(D.monoidArray))([ea.resourceMDSource])(m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(e.div_(r.shiftMapCofree(D.monoidArray))([])(e.span_(r.shiftMapCofree(D.monoidArray))([ea.url])(M.urlInput(E.getWithDefault(new q.IsSymbol(function () {
      return "url_Ei";
    }))()(new G.Left(""))(q.SProxy.value)(ha)))))(function (oa) {
      var pa = G.hush(oa);
      return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(e.div_(r.shiftMapCofree(D.monoidArray))([])(e.span_(r.shiftMapCofree(D.monoidArray))([ea.relType])(M.menuSignal(S.boundedEnumRelationType)(M.isOptionRelationType)(E.get(new q.IsSymbol(function () {
        return "relationType";
      }))()(q.SProxy.value)(ha)))))(function (ra) {
        return l.pure(r.applicativeCofree(b.widgetAlternative(D.monoidArray)))(u.execState(m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
          return "url_Ei";
        }))()(q.SProxy.value)(new K.Just(oa))))(function () {
          return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
            return "url";
          }))()(q.SProxy.value)(pa)))(function () {
            return m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
              return "relationType";
            }))()(q.SProxy.value)(ra));
          });
        }))(ha));
      });
    }));
  },
      eb = function eb(ha) {
    var oa = K.fromMaybe(E.empty)(ha);
    return e.div_(r.shiftMapCofree(D.monoidArray))([ea.relatedId])(m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(e.div_(r.shiftMapCofree(D.monoidArray))([])(e.span_(r.shiftMapCofree(D.monoidArray))([ea.id])(M.textInput(E.get(new q.IsSymbol(function () {
      return "id";
    }))()(q.SProxy.value)(oa)))))(function (pa) {
      return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(e.div_(r.shiftMapCofree(D.monoidArray))([])(e.span_(r.shiftMapCofree(D.monoidArray))([ea.idType])(M.menuSignal(S.boundedEnumIdentifierType)(M.isOptionIdentifierType)(E.get(new q.IsSymbol(function () {
        return "idType";
      }))()(q.SProxy.value)(oa)))))(function (ra) {
        return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(e.div_(r.shiftMapCofree(D.monoidArray))([])(e.span_(r.shiftMapCofree(D.monoidArray))([ea.relType])(M.menuSignal(S.boundedEnumRelationType)(M.isOptionRelationType)(E.get(new q.IsSymbol(function () {
          return "relType";
        }))()(q.SProxy.value)(oa)))))(function (va) {
          return l.pure(r.applicativeCofree(b.widgetAlternative(D.monoidArray)))(K.Just.create(u.execState(m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
            return "id";
          }))()(q.SProxy.value)(pa)))(function () {
            return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
              return "idType";
            }))()(q.SProxy.value)(ra)))(function () {
              return m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                return "relType";
              }))()(q.SProxy.value)(va));
            });
          }))(oa)));
        });
      });
    }));
  },
      fb = function fb(ha) {
    return e.div_(r.shiftMapCofree(D.monoidArray))([ea.relatedIds])(e.span_(r.shiftMapCofree(D.monoidArray))([ea.relatedIdsHeader])(e.div_(r.shiftMapCofree(D.monoidArray))([ea.relatedIdList])(M.nonEmptyArrayView(eb)(ha))));
  },
      Pa = function Pa(ha) {
    return e.div_(r.shiftMapCofree(D.monoidArray))([ea.identifier])(m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(e.div_(r.shiftMapCofree(D.monoidArray))([])(e.span_(r.shiftMapCofree(D.monoidArray))([ea.id])(M.textInput(E.get(new q.IsSymbol(function () {
      return "id";
    }))()(q.SProxy.value)(ha)))))(function (oa) {
      return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(e.div_(r.shiftMapCofree(D.monoidArray))([])(e.span_(r.shiftMapCofree(D.monoidArray))([ea.idType])(M.menuSignal(S.boundedEnumIdentifierType)(M.isOptionIdentifierType)(E.get(new q.IsSymbol(function () {
        return "idType";
      }))()(q.SProxy.value)(ha)))))(function (pa) {
        return l.pure(r.applicativeCofree(b.widgetAlternative(D.monoidArray)))(u.execState(m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
          return "id";
        }))()(q.SProxy.value)(oa)))(function () {
          return m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
            return "idType";
          }))()(q.SProxy.value)(pa));
        }))(ha));
      });
    }));
  },
      aa = function aa(ha) {
    var oa = function oa(ra) {
      return e.div(b.widgetMultiAlternative(D.monoidArray))(b.widgetShiftMap)([ea.locPreview])([e["br'"](k.widgetLiftWidget), I.foldMap(I.foldableMaybe)(b.widgetMonoid(D.monoidArray))(function (va) {
        return I.fold(I.foldableArray)(b.widgetMonoid(D.monoidArray))(P.spacify(P.locElems(va)));
      })(ra)]);
    },
        pa = K.fromMaybe(E.empty)(ha);

    return e.div_(r.shiftMapCofree(D.monoidArray))([ea.location])(m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(e.div_(r.shiftMapCofree(D.monoidArray))([])(e.span_(r.shiftMapCofree(D.monoidArray))([ea.institutionId])(Pa(Ma(new q.IsSymbol(function () {
      return "institutionID_opt";
    }))()(q.SProxy.value)(pa)))))(function (ra) {
      var va = E.getAll(E.getAllAny()(E.getAllOptionCons(new q.IsSymbol(function () {
        return "id";
      }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
        return "idType";
      }))()()()()(E.getAllOptionNil))))(ra);
      return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(e.div_(r.shiftMapCofree(D.monoidArray))([])(e.span_(r.shiftMapCofree(D.monoidArray))([ea.institutionName])(M.textInput(E.get(new q.IsSymbol(function () {
        return "institutionName";
      }))()(q.SProxy.value)(pa)))))(function (wa) {
        return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(e.div_(r.shiftMapCofree(D.monoidArray))([])(e.span_(r.shiftMapCofree(D.monoidArray))([ea.institutionType])(M.menuSignal(S.boundedEnumInstitutionType)(M.isOptionInstitutionType)(E.get(new q.IsSymbol(function () {
          return "institutionType";
        }))()(q.SProxy.value)(pa)))))(function (xa) {
          return m.discard(m.discardUnit)(r.bindCofree(b.widgetAlternative(D.monoidArray)))(f.display(e["br'"](k.widgetLiftWidget)))(function () {
            return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(e.div_(r.shiftMapCofree(D.monoidArray))([])(e.span_(r.shiftMapCofree(D.monoidArray))([ea.superOrg])(M.textInput(m.join(K.bindMaybe)(E.get(new q.IsSymbol(function () {
              return "superOrganizationName";
            }))()(q.SProxy.value)(pa))))))(function (Ca) {
              return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(W.contactSignal(E.get(new q.IsSymbol(function () {
                return "institutionContact";
              }))()(q.SProxy.value)(pa)))(function (Ja) {
                return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(cb(Ma(new q.IsSymbol(function () {
                  return "iSustain_opt";
                }))()(q.SProxy.value)(pa)))(function (Ka) {
                  var Oa = E.getSubset()()(Y.consKeys(new q.IsSymbol(function () {
                    return "fundingStatementURL";
                  }))(Y.consKeys(new q.IsSymbol(function () {
                    return "missionStatementURL";
                  }))(Y.nilKeys)))(E.getAllAny()(E.getAllOptionCons(new q.IsSymbol(function () {
                    return "fundingStatementURL";
                  }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
                    return "missionStatementURL";
                  }))()()()()(E.getAllOptionNil))))(Ka);
                  return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(C.policySigArray(new da.Tuple(E.getWithDefault(new q.IsSymbol(function () {
                    return "_numPolicies";
                  }))()(1)(q.SProxy.value)(pa), E.get(new q.IsSymbol(function () {
                    return "institutionPolicies";
                  }))()(q.SProxy.value)(pa))))(function (Qa) {
                    var gb = da.fst(Qa),
                        jb = da.snd(Qa);
                    return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(e.div_(r.shiftMapCofree(D.monoidArray))([])(e.span_(r.shiftMapCofree(D.monoidArray))([ea.versioning])(M.checkBoxS(E.getWithDefault(new q.IsSymbol(function () {
                      return "versioning";
                    }))()(!1)(q.SProxy.value)(pa)))))(function (hb) {
                      return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(l.pure(r.applicativeCofree(b.widgetAlternative(D.monoidArray)))(u.execState(m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                        return "institutionID_opt";
                      }))()(q.SProxy.value)(new K.Just(ra))))(function () {
                        return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                          return "institutionID";
                        }))()(q.SProxy.value)(va)))(function () {
                          return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                            return "institutionName";
                          }))()(q.SProxy.value)(wa)))(function () {
                            return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                              return "institutionType";
                            }))()(q.SProxy.value)(xa)))(function () {
                              return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                                return "superOrganizationName";
                              }))()(q.SProxy.value)(new K.Just(Ca))))(function () {
                                return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                                  return "institutionContact";
                                }))()(q.SProxy.value)(Ja)))(function () {
                                  return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                                    return "iSustain_opt";
                                  }))()(q.SProxy.value)(new K.Just(Ka))))(function () {
                                    return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                                      return "institutionSustainability";
                                    }))()(q.SProxy.value)(Oa)))(function () {
                                      return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                                        return "_numPolicies";
                                      }))()(q.SProxy.value)(new K.Just(gb))))(function () {
                                        return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                                          return "institutionPolicies";
                                        }))()(q.SProxy.value)(jb)))(function () {
                                          return m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                                            return "versioning";
                                          }))()(q.SProxy.value)(new K.Just(hb)));
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      }))(pa)))(function (kb) {
                        var ib = E.getSubset()()(Y.consKeys(new q.IsSymbol(function () {
                          return "institutionContact";
                        }))(Y.consKeys(new q.IsSymbol(function () {
                          return "institutionID";
                        }))(Y.consKeys(new q.IsSymbol(function () {
                          return "institutionName";
                        }))(Y.consKeys(new q.IsSymbol(function () {
                          return "institutionPolicies";
                        }))(Y.consKeys(new q.IsSymbol(function () {
                          return "institutionSustainability";
                        }))(Y.consKeys(new q.IsSymbol(function () {
                          return "institutionType";
                        }))(Y.consKeys(new q.IsSymbol(function () {
                          return "superOrganizationName";
                        }))(Y.consKeys(new q.IsSymbol(function () {
                          return "versioning";
                        }))(Y.nilKeys)))))))))(E.getAllAny()(E.getAllOptionCons(new q.IsSymbol(function () {
                          return "institutionContact";
                        }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
                          return "institutionID";
                        }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
                          return "institutionName";
                        }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
                          return "institutionPolicies";
                        }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
                          return "institutionSustainability";
                        }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
                          return "institutionType";
                        }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
                          return "superOrganizationName";
                        }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
                          return "versioning";
                        }))()()()()(E.getAllOptionNil))))))))))(kb);
                        return m.discard(m.discardUnit)(r.bindCofree(b.widgetAlternative(D.monoidArray)))(f.display(oa(ib)))(function () {
                          return l.pure(r.applicativeCofree(b.widgetAlternative(D.monoidArray)))(new K.Just(kb));
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
      ma = function ma(ha) {
    return e.div_(r.shiftMapCofree(D.monoidArray))([ea.basicMetadata])(m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(e.div_(r.shiftMapCofree(D.monoidArray))([])(e.span_(r.shiftMapCofree(D.monoidArray))([ea.title])(M.textInput(E.get(new q.IsSymbol(function () {
      return "title";
    }))()(q.SProxy.value)(ha)))))(function (oa) {
      return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(e.div_(r.shiftMapCofree(D.monoidArray))([])(e.span_(r.shiftMapCofree(D.monoidArray))([ea.creator])(M.textInput(E.get(new q.IsSymbol(function () {
        return "creator";
      }))()(q.SProxy.value)(ha)))))(function (pa) {
        return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(e.div_(r.shiftMapCofree(D.monoidArray))([])(e.span_(r.shiftMapCofree(D.monoidArray))([ea.pubyear])(M.textInput(E.get(new q.IsSymbol(function () {
          return "publicationYear";
        }))()(q.SProxy.value)(ha)))))(function (ra) {
          return l.pure(r.applicativeCofree(b.widgetAlternative(D.monoidArray)))(u.execState(m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
            return "title";
          }))()(q.SProxy.value)(oa)))(function () {
            return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
              return "creator";
            }))()(q.SProxy.value)(pa)))(function () {
              return m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                return "publicationYear";
              }))()(q.SProxy.value)(ra));
            });
          }))(ha));
        });
      });
    }));
  },
      za = function za(ha) {
    var oa = function oa(ra) {
      return e.div(b.widgetMultiAlternative(D.monoidArray))(b.widgetShiftMap)([ea.prodPreview])([e["br'"](k.widgetLiftWidget), I.fold(I.foldableMaybe)(b.widgetMonoid(D.monoidArray))(H.map(K.functorMaybe)(P.mkSupplementaryProductWidget)(ra))]);
    },
        pa = K.fromMaybe(E.empty)(ha);

    return e.div_(r.shiftMapCofree(D.monoidArray))([ea.product])(m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(ma(Ma(new q.IsSymbol(function () {
      return "basicMetadata_opt";
    }))()(q.SProxy.value)(pa)))(function (ra) {
      var va = E.getAll(E.getAllAny()(E.getAllOptionCons(new q.IsSymbol(function () {
        return "creator";
      }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
        return "publicationYear";
      }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
        return "title";
      }))()()()()(E.getAllOptionNil)))))(ra);
      return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(e.div_(r.shiftMapCofree(D.monoidArray))([ea.resourceId])(Pa(Ma(new q.IsSymbol(function () {
        return "resourceID_opt";
      }))()(q.SProxy.value)(pa))))(function (wa) {
        var xa = E.getAll(E.getAllAny()(E.getAllOptionCons(new q.IsSymbol(function () {
          return "id";
        }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
          return "idType";
        }))()()()()(E.getAllOptionNil))))(wa);
        return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(Za(Ma(new q.IsSymbol(function () {
          return "resourceType_opt";
        }))()(q.SProxy.value)(pa)))(function (Ca) {
          var Ja = E.getSubset()()(Y.consKeys(new q.IsSymbol(function () {
            return "description";
          }))(Y.consKeys(new q.IsSymbol(function () {
            return "generalType";
          }))(Y.nilKeys)))(E.getAllAny()(E.getAllOptionCons(new q.IsSymbol(function () {
            return "description";
          }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
            return "generalType";
          }))()()()()(E.getAllOptionNil))))(Ca);
          return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(Sa(new da.Tuple(E.getWithDefault(new q.IsSymbol(function () {
            return "_numFormats";
          }))()(0)(q.SProxy.value)(pa), E.getWithDefault(new q.IsSymbol(function () {
            return "format";
          }))()([])(q.SProxy.value)(pa))))(function (Ka) {
            var Oa = da.fst(Ka),
                Qa = da.snd(Ka);
            return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(db(Ma(new q.IsSymbol(function () {
              return "resMdsOpts_opt";
            }))()(q.SProxy.value)(pa)))(function (gb) {
              var jb = E.getSubset()()(Y.consKeys(new q.IsSymbol(function () {
                return "relationType";
              }))(Y.consKeys(new q.IsSymbol(function () {
                return "url";
              }))(Y.nilKeys)))(E.getAllAny()(E.getAllOptionCons(new q.IsSymbol(function () {
                return "relationType";
              }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
                return "url";
              }))()()()()(E.getAllOptionNil))))(gb);
              return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(aa(E.get(new q.IsSymbol(function () {
                return "locationOpts_opt";
              }))()(q.SProxy.value)(pa)))(function (hb) {
                var kb = m.join(K.bindMaybe)(H.map(K.functorMaybe)(E.getSubset()()(Y.consKeys(new q.IsSymbol(function () {
                  return "institutionContact";
                }))(Y.consKeys(new q.IsSymbol(function () {
                  return "institutionID";
                }))(Y.consKeys(new q.IsSymbol(function () {
                  return "institutionName";
                }))(Y.consKeys(new q.IsSymbol(function () {
                  return "institutionPolicies";
                }))(Y.consKeys(new q.IsSymbol(function () {
                  return "institutionSustainability";
                }))(Y.consKeys(new q.IsSymbol(function () {
                  return "institutionType";
                }))(Y.consKeys(new q.IsSymbol(function () {
                  return "superOrganizationName";
                }))(Y.consKeys(new q.IsSymbol(function () {
                  return "versioning";
                }))(Y.nilKeys)))))))))(E.getAllAny()(E.getAllOptionCons(new q.IsSymbol(function () {
                  return "institutionContact";
                }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
                  return "institutionID";
                }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
                  return "institutionName";
                }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
                  return "institutionPolicies";
                }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
                  return "institutionSustainability";
                }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
                  return "institutionType";
                }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
                  return "superOrganizationName";
                }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
                  return "versioning";
                }))()()()()(E.getAllOptionNil)))))))))))(hb));
                return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(l.pure(r.applicativeCofree(b.widgetAlternative(D.monoidArray)))(u.execState(m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                  return "basicMetadata_opt";
                }))()(q.SProxy.value)(new K.Just(ra))))(function () {
                  return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                    return "basicMetadata";
                  }))()(q.SProxy.value)(va)))(function () {
                    return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                      return "resourceID_opt";
                    }))()(q.SProxy.value)(new K.Just(wa))))(function () {
                      return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                        return "resourceID";
                      }))()(q.SProxy.value)(new K.Just(xa))))(function () {
                        return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                          return "resourceType_opt";
                        }))()(q.SProxy.value)(new K.Just(Ca))))(function () {
                          return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                            return "resourceType";
                          }))()(q.SProxy.value)(Ja)))(function () {
                            return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                              return "_numFormats";
                            }))()(q.SProxy.value)(new K.Just(Oa))))(function () {
                              return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                                return "format";
                              }))()(q.SProxy.value)(new K.Just(Qa))))(function () {
                                return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                                  return "resMdsOpts_opt";
                                }))()(q.SProxy.value)(new K.Just(gb))))(function () {
                                  return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                                    return "resourceMetadataSource";
                                  }))()(q.SProxy.value)(new K.Just(jb))))(function () {
                                    return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                                      return "locationOpts_opt";
                                    }))()(q.SProxy.value)(hb)))(function () {
                                      return m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                                        return "location";
                                      }))()(q.SProxy.value)(kb));
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
                }))(pa)))(function (ib) {
                  var lb = E.getSubset()()(Y.consKeys(new q.IsSymbol(function () {
                    return "basicMetadata";
                  }))(Y.consKeys(new q.IsSymbol(function () {
                    return "format";
                  }))(Y.consKeys(new q.IsSymbol(function () {
                    return "location";
                  }))(Y.consKeys(new q.IsSymbol(function () {
                    return "resourceID";
                  }))(Y.consKeys(new q.IsSymbol(function () {
                    return "resourceMetadataSource";
                  }))(Y.consKeys(new q.IsSymbol(function () {
                    return "resourceType";
                  }))(Y.nilKeys)))))))(E.getAllAny()(E.getAllOptionCons(new q.IsSymbol(function () {
                    return "basicMetadata";
                  }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
                    return "format";
                  }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
                    return "location";
                  }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
                    return "resourceID";
                  }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
                    return "resourceMetadataSource";
                  }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
                    return "resourceType";
                  }))()()()()(E.getAllOptionNil))))))))(ib);
                  return m.discard(m.discardUnit)(r.bindCofree(b.widgetAlternative(D.monoidArray)))(f.display(oa(lb)))(function () {
                    return l.pure(r.applicativeCofree(b.widgetAlternative(D.monoidArray)))(new K.Just(ib));
                  });
                });
              });
            });
          });
        });
      });
    }));
  },
      Aa = function Aa(ha) {
    return e.div_(r.shiftMapCofree(D.monoidArray))([ea.products])(e.span_(r.shiftMapCofree(D.monoidArray))([ea.productsHeader])(e.div_(r.shiftMapCofree(D.monoidArray))([ea.productList])(M.nonEmptyArrayView(za)(ha))));
  },
      Ea = function Ea(ha) {
    return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(e.div_(r.shiftMapCofree(D.monoidArray))([ea.recordId])(Pa(Ma(new q.IsSymbol(function () {
      return "identifier_opt";
    }))()(q.SProxy.value)(ha))))(function (oa) {
      var pa = E.getAll(E.getAllAny()(E.getAllOptionCons(new q.IsSymbol(function () {
        return "id";
      }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
        return "idType";
      }))()()()()(E.getAllOptionNil))))(oa);
      return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(H.map(H.functorFn)(e.div_(r.shiftMapCofree(D.monoidArray))([ea.date]))(M.textInput)(E.get(new q.IsSymbol(function () {
        return "date";
      }))()(q.SProxy.value)(ha)))(function (ra) {
        return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(fb(new da.Tuple(E.getWithDefault(new q.IsSymbol(function () {
          return "_numRelIds";
        }))()(0)(q.SProxy.value)(ha), E.get(new q.IsSymbol(function () {
          return "relId_opts";
        }))()(q.SProxy.value)(ha))))(function (va) {
          var wa = da.fst(va),
              xa = da.snd(va),
              Ca = m.join(K.bindMaybe)(H.map(K.functorMaybe)(U.sequence(v.traversableNonEmptyArray)(K.applicativeMaybe))(H.map(K.functorMaybe)(H.map(v.functorNonEmptyArray)(E.getAll(E.getAllAny()(E.getAllOptionCons(new q.IsSymbol(function () {
            return "id";
          }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
            return "idType";
          }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
            return "relType";
          }))()()()()(E.getAllOptionNil)))))))(xa)));
          return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(Aa(new da.Tuple(E.getWithDefault(new q.IsSymbol(function () {
            return "_numSupProds";
          }))()(0)(q.SProxy.value)(ha), E.get(new q.IsSymbol(function () {
            return "supProd_opts";
          }))()(q.SProxy.value)(ha))))(function (Ja) {
            var Ka = da.fst(Ja),
                Oa = da.snd(Ja),
                Qa = m.join(K.bindMaybe)(H.map(K.functorMaybe)(U.sequence(v.traversableNonEmptyArray)(K.applicativeMaybe))(H.map(K.functorMaybe)(H.map(v.functorNonEmptyArray)(E.getSubset()()(Y.consKeys(new q.IsSymbol(function () {
              return "basicMetadata";
            }))(Y.consKeys(new q.IsSymbol(function () {
              return "format";
            }))(Y.consKeys(new q.IsSymbol(function () {
              return "location";
            }))(Y.consKeys(new q.IsSymbol(function () {
              return "resourceID";
            }))(Y.consKeys(new q.IsSymbol(function () {
              return "resourceMetadataSource";
            }))(Y.consKeys(new q.IsSymbol(function () {
              return "resourceType";
            }))(Y.nilKeys)))))))(E.getAllAny()(E.getAllOptionCons(new q.IsSymbol(function () {
              return "basicMetadata";
            }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
              return "format";
            }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
              return "location";
            }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
              return "resourceID";
            }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
              return "resourceMetadataSource";
            }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
              return "resourceType";
            }))()()()()(E.getAllOptionNil))))))))))(Oa)));
            return l.pure(r.applicativeCofree(b.widgetAlternative(D.monoidArray)))(u.execState(m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
              return "identifier_opt";
            }))()(q.SProxy.value)(new K.Just(oa))))(function () {
              return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                return "identifier";
              }))()(q.SProxy.value)(pa)))(function () {
                return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                  return "date";
                }))()(q.SProxy.value)(ra)))(function () {
                  return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                    return "_numRelIds";
                  }))()(q.SProxy.value)(new K.Just(wa))))(function () {
                    return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                      return "relId_opts";
                    }))()(q.SProxy.value)(xa)))(function () {
                      return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                        return "relatedIdentifiers";
                      }))()(q.SProxy.value)(Ca)))(function () {
                        return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                          return "_numSupProds";
                        }))()(q.SProxy.value)(new K.Just(Ka))))(function () {
                          return m.discard(m.discardUnit)(p.bindStateT(B.monadIdentity))(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                            return "supProd_opts";
                          }))()(q.SProxy.value)(Oa)))(function () {
                            return m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
                              return "supplementaryProducts";
                            }))()(q.SProxy.value)(Qa));
                          });
                        });
                      });
                    });
                  });
                });
              });
            }))(ha));
          });
        });
      });
    });
  };

  y = function () {
    var ha = function ha(oa) {
      var pa = function pa(ra) {
        return K.maybe(l.pure(R.applicativeEffect)(""))(na.recordToString)(ra);
      };

      return m.bind(b.widgetBind)(ba.liftEffect(b.widgetMonadEff(D.monoidArray))(U.sequence(U.traversableMaybe)(R.applicativeEffect)(H.map(K.functorMaybe)(Ha)(oa))))(function (ra) {
        return e.div(b.widgetMultiAlternative(D.monoidArray))(b.widgetShiftMap)([ea.recPreview])([m.bind(b.widgetBind)(ba.liftEffect(b.widgetMonadEff(D.monoidArray))(pa(ra)))(function (va) {
          return e.div(b.widgetMultiAlternative(D.monoidArray))(b.widgetShiftMap)([ea.previewButtons])([Ya(va), bb(va)]);
        }), e["br'"](k.widgetLiftWidget), I.fold(I.foldableMaybe)(b.widgetMonoid(D.monoidArray))(H.map(K.functorMaybe)(P.mkRecordWidget)(ra))]);
      });
    };

    return f.loopS(D.monoidArray)(E.empty)(function (oa) {
      return e.div_(r.shiftMapCofree(D.monoidArray))([ea.record])(m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(Xa)(function (pa) {
        var ra = E.getSubset()()(Y.consKeys(new q.IsSymbol(function () {
          return "date";
        }))(Y.consKeys(new q.IsSymbol(function () {
          return "identifier";
        }))(Y.consKeys(new q.IsSymbol(function () {
          return "lastModified";
        }))(Y.consKeys(new q.IsSymbol(function () {
          return "relatedIdentifiers";
        }))(Y.consKeys(new q.IsSymbol(function () {
          return "supplementaryProducts";
        }))(Y.nilKeys))))))(E.getAllAny()(E.getAllOptionCons(new q.IsSymbol(function () {
          return "date";
        }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
          return "identifier";
        }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
          return "lastModified";
        }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
          return "relatedIdentifiers";
        }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
          return "supplementaryProducts";
        }))()()()()(E.getAllOptionNil)))))))(pa);
        pa = K.isNothing(ra) ? oa : pa;
        return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(Ea(pa))(function (va) {
          var wa = M.formatXsdDate(M.initDate);
          wa = G.hush(wa);
          var xa = E.get(new q.IsSymbol(function () {
            return "lastModified";
          }))()(q.SProxy.value)(va);
          return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(l.pure(r.applicativeCofree(b.widgetAlternative(D.monoidArray)))(N.append(X.semigroupFirst)(xa)(wa)))(function (Ca) {
            return m.bind(r.bindCofree(b.widgetAlternative(D.monoidArray)))(l.pure(r.applicativeCofree(b.widgetAlternative(D.monoidArray)))(u.execState(m.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(E.maySetOptState(new q.IsSymbol(function () {
              return "lastModified";
            }))()(q.SProxy.value)(Ca)))(va)))(function (Ja) {
              var Ka = E.getSubset()()(Y.consKeys(new q.IsSymbol(function () {
                return "date";
              }))(Y.consKeys(new q.IsSymbol(function () {
                return "identifier";
              }))(Y.consKeys(new q.IsSymbol(function () {
                return "lastModified";
              }))(Y.consKeys(new q.IsSymbol(function () {
                return "relatedIdentifiers";
              }))(Y.consKeys(new q.IsSymbol(function () {
                return "supplementaryProducts";
              }))(Y.nilKeys))))))(E.getAllAny()(E.getAllOptionCons(new q.IsSymbol(function () {
                return "date";
              }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
                return "identifier";
              }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
                return "lastModified";
              }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
                return "relatedIdentifiers";
              }))()()()()(E.getAllOptionCons(new q.IsSymbol(function () {
                return "supplementaryProducts";
              }))()()()()(E.getAllOptionNil)))))))(Ja);
              return m.discard(m.discardUnit)(r.bindCofree(b.widgetAlternative(D.monoidArray)))(f.display(ha(Ka)))(function () {
                return l.pure(r.applicativeCofree(b.widgetAlternative(D.monoidArray)))(Ja);
              });
            });
          });
        });
      }));
    });
  }();

  var Da = e["div'"](b.widgetMultiAlternative(D.monoidArray))(b.widgetShiftMap)([e.div(b.widgetMultiAlternative(D.monoidArray))(b.widgetShiftMap)([ea.page])(l.pure(l.applicativeArray)(f.dyn(y)))]);

  c.runFormSPA = function (ha) {
    return n.runWidgetInDom(ha)(Da);
  };

  c.page = Da;
  c.utf8DataAttr = "data:text/plain;charset=utf-8";
  c.downloadButton = Ya;
  c.mkDLAnchorAndClicker = Ra;
  c.uploadButtonSig = Xa;
  c.copyButton = bb;
  c.fillMetajeloRecordExtra = Wa;
  c.fillSProdExtra = Va;
  c.fillLocationRowExtra = Ua;
  c.fillSustainExtra = ab;
  c.fillResourceMDSExtra = Ta;
  c.accumulateMetajeloRecord = y;
  c.finalizeRecord = Ha;
  c.accumulateMetajeloRecUI = Ea;
  c.accumulateSuppProd = za;
  c.supProdSigArray = Aa;
  c.accumulateLocation = aa;
  c.accumulateSustain = cb;
  c.accumulateIdent = Pa;
  c.accumulateRelatedIdent = eb;
  c.relIdSigArray = fb;
  c.accumulateBasicMetaData = ma;
  c.accumulateResType = Za;
  c.formatSignal = $a;
  c.formatSigArray = Sa;
  c.accumulateResMdSource = db;
  c.tooltip = a;
  c.tooltipS = Ia;
  c.getOpt = Ma;
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
//# sourceMappingURL=prod.3c0f62c6.js.map